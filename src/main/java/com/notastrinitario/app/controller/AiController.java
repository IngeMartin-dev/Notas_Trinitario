package com.notastrinitario.app.controller;

import com.notastrinitario.app.config.AppProperties;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Proxy hacia la API de Mistral (chat/completions, compatible con el formato
 * OpenAI) para generar planes de estudio. La API key vive SOLO en el backend
 * (application.properties), de modo que el frontend nunca la ve.
 *
 *  - POST /api/ai/study-plan-stream       → reenvía el stream SSE de Mistral
 *    (formato OpenAI: choices[0].delta.content) tal cual al frontend.
 *  - POST /api/ai/study-plan-continuation → petición NO streaming; devuelve
 *    JSON {"content": "..."} con la continuación del plan.
 */
@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = { "http://localhost:4200" })
public class AiController {

    private final AppProperties appProperties;

    public AiController(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    private String apiKey() {
        String key = appProperties.getAi() != null ? appProperties.getAi().getMistralApiKey() : "";
        if (key == null || key.isBlank()) {
            throw new IllegalStateException("Mistral API key is not configured (app.ai.mistral-api-key)");
        }
        return key;
    }

    private String model() {
        return appProperties.getAi() != null && appProperties.getAi().getMistralModel() != null
                && !appProperties.getAi().getMistralModel().isBlank()
                ? appProperties.getAi().getMistralModel()
                : "mistral-large-2512";
    }

    private String url() {
        return appProperties.getAi() != null && appProperties.getAi().getMistralUrl() != null
                && !appProperties.getAi().getMistralUrl().isBlank()
                ? appProperties.getAi().getMistralUrl()
                : "https://api.mistral.ai/v1/chat/completions";
    }

    /** Escapa un texto como literal JSON (string). */
    private String jsonStr(String s) {
        if (s == null) s = "";
        StringBuilder sb = new StringBuilder();
        sb.append('"');
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
                case '"' -> sb.append("\\\"");
                case '\\' -> sb.append("\\\\");
                case '\n' -> sb.append("\\n");
                case '\r' -> sb.append("\\r");
                case '\t' -> sb.append("\\t");
                case '\b' -> sb.append("\\b");
                case '\f' -> sb.append("\\f");
                default -> {
                    if (c < 0x20) {
                        char bs = '\\';
                        sb.append(bs).append('u').append(String.format("%04x", (int) c));
                    } else {
                        sb.append(c);
                    }
                }
            }
        }
        sb.append('"');
        return sb.toString();
    }

    /** Lee un literal JSON string que empieza en start (tras la comilla de
     *  apertura) respetando escapes, y devuelve su valor. */
    private String readJsonString(String s, int start) {
        StringBuilder sb = new StringBuilder();
        int i = start;
        while (i < s.length()) {
            char ch = s.charAt(i);
            if (ch == '\\') {
                if (i + 1 >= s.length()) break;
                char nxt = s.charAt(i + 1);
                switch (nxt) {
                    case '"' -> sb.append('"');
                    case '\\' -> sb.append('\\');
                    case '/' -> sb.append('/');
                    case 'n' -> sb.append('\n');
                    case 't' -> sb.append('\t');
                    case 'r' -> sb.append('\r');
                    case 'b' -> sb.append('\b');
                    case 'f' -> sb.append('\f');
                    case 'u' -> {
                        if (i + 6 <= s.length()) {
                            try {
                                sb.append((char) Integer.parseInt(s.substring(i + 2, i + 6), 16));
                                i += 4;
                            } catch (NumberFormatException e) {
                                sb.append(nxt);
                            }
                        }
                    }
                    default -> sb.append(nxt);
                }
                i += 2;
            } else if (ch == '"') {
                break;
            } else {
                sb.append(ch);
                i++;
            }
        }
        return sb.toString();
    }

    /** Extrae message.content de una respuesta OpenAI/Mistral NO streaming. */
    private String extractMessageContent(String json) {
        if (json == null || json.isEmpty()) return "";
        int msgIdx = json.indexOf("\"message\":");
        if (msgIdx < 0) return "";
        int contentIdx = json.indexOf("\"content\"", msgIdx);
        if (contentIdx < 0) return "";
        int colon = json.indexOf(':', contentIdx);
        if (colon < 0) return "";
        int start = json.indexOf('"', colon);
        if (start < 0) return "";
        return readJsonString(json, start + 1);
    }

    /** Cuerpo OpenAI-compatible (un mensaje de usuario). */
    private String buildRequestBody(String prompt, boolean stream, double temperature, int maxTokens) {
        return "{\"model\":" + jsonStr(model())
                + ",\"messages\":[{\"role\":\"user\",\"content\":" + jsonStr(prompt) + "}]"
                + ",\"temperature\":" + temperature
                + ",\"max_tokens\":" + maxTokens
                + ",\"stream\":" + stream + "}";
    }

    @PostMapping(value = "/study-plan-stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public ResponseEntity<StreamingResponseBody> generateStudyPlanStream(@RequestBody Map<String, Object> request) {
        final String prompt = request.get("prompt") != null ? request.get("prompt").toString() : "";
        final double temperature = request.get("temperature") != null
                ? Double.parseDouble(request.get("temperature").toString()) : 0.4;
        final int maxTokens = request.get("max_tokens") != null
                ? Integer.parseInt(request.get("max_tokens").toString()) : 8192;

        final String jsonPayload = buildRequestBody(prompt, true, temperature, maxTokens);

        StreamingResponseBody stream = out -> forwardStream(jsonPayload, out);

        return ResponseEntity.ok()
                .header("Cache-Control", "no-cache, no-transform")
                .header("X-Accel-Buffering", "no")
                .body(stream);
    }

    @PostMapping("/study-plan-continuation")
    public ResponseEntity<Map<String, Object>> generateContinuation(@RequestBody Map<String, Object> request) {
        Map<String, Object> response = new LinkedHashMap<>();
        try {
            final String partialPlan = request.get("partialPlan") != null ? request.get("partialPlan").toString() : "";
            final String followUp = "El plan anterior se cortó antes de finalizar. Continúa estrictamente desde "
                    + "donde se quedó y completa todas las secciones faltantes sin repetir el contenido ya generado. "
                    + "Termina con la frase \"PLAN DE ESTUDIO COMPLETO\".";

             final String body = "{\"model\":" + jsonStr(model())
                    + ",\"messages\":["
                    + "{\"role\":\"system\",\"content\":"
                    + jsonStr("Eres un asistente experto en generar planes de estudio profesionales.") + "},"
                    + "{\"role\":\"user\",\"content\":" + jsonStr(partialPlan) + "},"
                    + "{\"role\":\"user\",\"content\":" + jsonStr(followUp) + "}]"
                    + ",\"temperature\":0.3,\"max_tokens\":12000,\"stream\":false}";

            String content = postNonStreaming(body);
            response.put("content", content != null ? content : "");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("content", "");
            response.put("error", e.getMessage());
            return ResponseEntity.ok(response);
        }
    }

    /** Reenvía el stream SSE de Mistral (formato OpenAI) al cliente, línea
     *  por línea, tal cual. El frontend ya sabe parsearlo. */
    @SuppressWarnings("deprecation")
    private void forwardStream(String jsonPayload, OutputStream out) throws IOException {
        HttpURLConnection conn = null;
        try {
            URL u = new URL(url());
            conn = (HttpURLConnection) u.openConnection();
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey());
            conn.setRequestProperty("Accept", "text/event-stream");
            conn.setConnectTimeout(60000);
            conn.setReadTimeout(0);

            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonPayload.getBytes(StandardCharsets.UTF_8));
                os.flush();
            }

            int status = conn.getResponseCode();
            if (status != HttpURLConnection.HTTP_OK) {
                try (InputStream err = conn.getErrorStream()) {
                    String msg = err != null ? new String(err.readAllBytes(), StandardCharsets.UTF_8) : "HTTP " + status;
                    out.write(("data: {\"error\":" + jsonStr(msg) + "}\n\n").getBytes(StandardCharsets.UTF_8));
                }
                out.flush();
                return;
            }

            try (InputStream in = conn.getInputStream();
                 BufferedReader reader = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    out.write((line + "\n").getBytes(StandardCharsets.UTF_8));
                    out.flush();
                }
            }
        } finally {
            if (conn != null) {
                conn.disconnect();
            }
        }
    }

    /** Petición NO streaming a Mistral; extrae choices[0].message.content. */
    @SuppressWarnings("deprecation")
    private String postNonStreaming(String jsonPayload) throws IOException {
        HttpURLConnection conn = null;
        try {
            URL u = new URL(url());
            conn = (HttpURLConnection) u.openConnection();
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey());
            conn.setRequestProperty("Accept", "application/json");
            conn.setConnectTimeout(60000);
            conn.setReadTimeout(120000);

            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonPayload.getBytes(StandardCharsets.UTF_8));
                os.flush();
            }

            int status = conn.getResponseCode();
            InputStream in = status == HttpURLConnection.HTTP_OK ? conn.getInputStream() : conn.getErrorStream();
            String responseText = new String(in.readAllBytes(), StandardCharsets.UTF_8);

            if (status != HttpURLConnection.HTTP_OK) {
                throw new IOException("Mistral API error " + status + ": " + responseText);
            }

            return extractMessageContent(responseText);
        } finally {
            if (conn != null) {
                conn.disconnect();
            }
        }
    }
}
