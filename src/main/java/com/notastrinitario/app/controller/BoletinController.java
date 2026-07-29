package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.entity.BoletinDraft;
import com.notastrinitario.app.repository.StudentRepository;
import com.notastrinitario.app.service.BoletinService;
import com.notastrinitario.app.service.BoletinService.BoletinData;
import com.notastrinitario.app.service.BoletinService.BatchStudentInput;
import com.notastrinitario.app.service.BoletinService.GenerationJob;
import com.notastrinitario.app.service.BoletinService.GenerationResultItem;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/api/boletines")
@CrossOrigin(origins = "*")
public class BoletinController {

    private final BoletinService    boletinService;
    private final StudentRepository studentRepository;
    private final ResourceLoader    resourceLoader;

    public BoletinController(BoletinService boletinService,
                             StudentRepository studentRepository,
                             ResourceLoader resourceLoader) {
        this.boletinService    = boletinService;
        this.studentRepository = studentRepository;
        this.resourceLoader    = resourceLoader;
        System.out.println("*** BoletinController bean CREATED ***");
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/pdf-base  – boletín de ejemplo en classpath
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/pdf-base")
    public ResponseEntity<Resource> getPdfBase() throws IOException {
        Resource pdfResource = resourceLoader.getResource("classpath:static/Boletin_Base.pdf");
        if (!pdfResource.exists()) return ResponseEntity.notFound().build();

        ByteArrayResource resource = new ByteArrayResource(
                pdfResource.getInputStream().readAllBytes());
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"Boletin_Base.pdf\"")
                .body(resource);
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/estudiantes
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/estudiantes")
    public ResponseEntity<List<Student>> getStudents(
            @RequestParam String grade,
            @RequestParam String classroom) {
        List<Student> students = boletinService.getStudentsByGradeAndClassroom(grade, classroom);
        return ResponseEntity.ok(students);
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/materias
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/materias")
    public ResponseEntity<List<String>> getSubjects(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period) {
        try {
            List<String> subjects =
                    boletinService.getSubjectsByGradeAndClassroomAndPeriod(grade, classroom, period);
            return ResponseEntity.ok(subjects);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(new ArrayList<>());
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/materias-todas
    // Devuelve TODAS las materias del grupo filtradas por el rango de grado
    // (primaria 1-5, bachillerato 6-9, media 10-11).
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/materias-todas")
    public ResponseEntity<List<String>> getAllSubjects(
            @RequestParam String grade,
            @RequestParam String classroom) {
        try {
            List<String> subjects =
                    boletinService.getSubjectsFilteredByGradeAndClassroom(grade, classroom);
            return ResponseEntity.ok(subjects);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(new ArrayList<>());
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/nivel-grado
    // Devuelve el nivel académico del grado: primaria / bachillerato / media.
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/nivel-grado")
    public ResponseEntity<Map<String, Object>> getNivelGrado(@RequestParam String grade) {
        int gradeNum = 0;
        if (grade != null) {
            String digits = grade.replaceAll("[^0-9]", "");
            if (!digits.isEmpty()) {
                try { gradeNum = Integer.parseInt(digits); } catch (NumberFormatException ignored) {}
            }
        }
        String level = gradeNum >= 10 && gradeNum <= 11 ? "media"
                     : gradeNum >= 6  && gradeNum <= 9  ? "bachillerato"
                     : gradeNum >= 1  && gradeNum <= 5  ? "primaria"
                     : "desconocido";
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("gradeNum", gradeNum);
        result.put("level", level);
        return ResponseEntity.ok(result);
    }

    // ─────────────────────────────────────────────────────────────────
    // POST /api/boletines/generar  – genera y descarga el PDF
    // ─────────────────────────────────────────────────────────────────
    @PostMapping("/generar")
    public ResponseEntity<?> generateBoletin(@RequestBody Map<String, Object> request) {
        try {
            System.out.println("=== GENERAR BOLETIN REQUEST ===");
            System.out.println("Request: " + request);

            // ── Parámetros obligatorios ───────────────────────────────
            Long    studentId = toLong(request.get("studentId"));
            String  grade     = str(request.get("grade"));
            String  classroom = str(request.get("classroom"));
            Integer period    = toInt(request.get("period"));

            if (studentId == null || grade == null || classroom == null || period == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Faltan parámetros: studentId, grade, classroom o period"));
            }

            // ── Preparación de datos ──────────────────────────────────
            BoletinData data = boletinService.prepareBoletinData(studentId, grade, classroom, period);
            if (data == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Estudiante no encontrado: id=" + studentId));
            }

            // ── Parámetros opcionales ─────────────────────────────────
            if (request.get("nLista")       != null) data.setNLista(toInt(request.get("nLista")));
            if (request.get("schoolYear")   != null) data.setSchoolYear(str(request.get("schoolYear")));
            if (request.get("objetivoPeriodo") != null) data.setObjetivoPeriodo(str(request.get("objetivoPeriodo")));
            if (request.get("compSocial")   != null) data.setCompSocial(str(request.get("compSocial")));
            if (request.get("compSocialObjetivo") != null) data.setCompSocialObjetivo(str(request.get("compSocialObjetivo")));
            if (request.get("compSocialIndicadores") != null) data.setCompSocialIndicadores(str(request.get("compSocialIndicadores")));
            if (request.get("compSocialIh") != null) {
                try { data.setCompSocialIh(Double.parseDouble(String.valueOf(request.get("compSocialIh")))); } catch (Exception ignored) {}
            }
            if (request.get("compSocialFa") != null) {
                try { data.setCompSocialFa(Double.parseDouble(String.valueOf(request.get("compSocialFa")))); } catch (Exception ignored) {}
            }
            if (request.get("compSocialFaa") != null) {
                try { data.setCompSocialFaa(Double.parseDouble(String.valueOf(request.get("compSocialFaa")))); } catch (Exception ignored) {}
            }

            // Valoración acudiente (nota entera, ej. 5)
            if (request.get("valoracionAcudienteNota") != null) {
                data.setValoracionAcudienteNota(toInt(request.get("valoracionAcudienteNota")));
            } else {
                // Valor por defecto: 5 (SUPERIOR)
                data.setValoracionAcudienteNota(5);
            }

            if (request.get("valoracionAcudiente") != null) {
                data.setValoracionAcudiente(str(request.get("valoracionAcudiente")));
            }

            // Firma director
            if (request.get("directorSignature") != null) {
                String sigPath = str(request.get("directorSignature"));
                if (sigPath.startsWith("/Firmas/")) {
                    sigPath = System.getProperty("user.dir") + "/Frontend/Firmas/"
                            + sigPath.substring("/Firmas/".length());
                }
                data.setRightSignaturePath(sigPath);
            }

            // Firma profesor(a) grupo
            if (request.get("leftSignature") != null) {
                String sigPath = str(request.get("leftSignature"));
                if (sigPath.startsWith("/Firmas/")) {
                    sigPath = System.getProperty("user.dir") + "/Frontend/Firmas/"
                            + sigPath.substring("/Firmas/".length());
                }
                data.setLeftSignaturePath(sigPath);
            }

            // Indicadores por materia enviados desde el Frontend
            if (request.get("studentSubjectIndicators") != null) {
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> indicators =
                        (List<Map<String, Object>>) request.get("studentSubjectIndicators");
                boletinService.applySubjectIndicators(data, indicators);
            }

            // ── Generar y guardar PDF ─────────────────────────────────
            String savedPath;
            try {
                savedPath = boletinService.saveBoletinPDF(data);
            } catch (Exception e) {
                java.io.StringWriter sw = new java.io.StringWriter();
                e.printStackTrace(new java.io.PrintWriter(sw));
                return ResponseEntity.badRequest()
                        .body(Map.of(
                                "error", "Error guardando PDF: " + e.getMessage(),
                                "trace", sw.toString()));
            }

            if (savedPath == null || savedPath.isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Ruta de PDF vacía"));
            }

            // ── Leer y devolver PDF ───────────────────────────────────
            byte[] pdfBytes;
            try {
                pdfBytes = Files.readAllBytes(Paths.get(savedPath));
            } catch (Exception e) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Error leyendo PDF: " + e.getMessage()));
            }

            Student student = studentRepository.findById(studentId).orElse(null);
            String studentName = student != null
                    ? student.getName() + "_" + student.getSurname()
                    : String.valueOf(studentId);
            String fileName = "Boletin_"
                    + (data.getAcademicLevel() != null ? data.getAcademicLevel().name() : "")
                    + "_G" + nvl(data.getGrade(), "")
                    + "_" + studentName + ".pdf";

            System.out.println("PDF generado OK: " + savedPath + " (" + pdfBytes.length + " bytes)");

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                    .header("X-Boletin-Path", savedPath)
                    .body(new ByteArrayResource(pdfBytes));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Error general: " + e.getClass().getSimpleName()
                            + " – " + e.getMessage()));
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // POST /api/boletines/generar-lote  – genera Todo un grado/salón en
    // segundo plano y devuelve de inmediato un jobId para seguir el avance.
    // La generación sigue corriendo en el backend aunque el usuario
    // navegue a otra pantalla o recargue la página.
    // ─────────────────────────────────────────────────────────────────
    @PostMapping("/generar-lote")
    public ResponseEntity<?> generarLote(@RequestBody Map<String, Object> request) {
        try {
            String  grade      = str(request.get("grade"));
            String  classroom  = str(request.get("classroom"));
            Integer period     = toInt(request.get("period"));
            String  schoolYear = str(request.get("schoolYear"));

            if (grade == null || classroom == null || period == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Faltan parámetros: grade, classroom o period"));
            }

            @SuppressWarnings("unchecked")
            List<Object> studentsRaw = (List<Object>) request.getOrDefault("students", new ArrayList<>());

            List<BatchStudentInput> students = new ArrayList<>();
            for (Object o : studentsRaw) {
                @SuppressWarnings("unchecked")
                Map<String, Object> m = (Map<String, Object>) o;
                BatchStudentInput si = new BatchStudentInput();
                si.studentId = toLong(m.get("studentId"));
                si.nLista = toInt(m.get("nLista"));
                si.compSocialIh = toDoubleOrNull(m.get("compSocialIh"));
                si.compSocialFa = toDoubleOrNull(m.get("compSocialFa"));
                si.compSocialFaa = toDoubleOrNull(m.get("compSocialFaa"));
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> indicators = m.get("subjectIndicators") != null
                        ? (List<Map<String, Object>>) m.get("subjectIndicators")
                        : new ArrayList<>();
                si.subjectIndicators = indicators;
                if (si.studentId != null) students.add(si);
            }

            if (students.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "No hay estudiantes para generar"));
            }

            String compSocialObjetivo = str(request.get("compSocialObjetivo"));

            String directorSignature = null;
            if (request.get("directorSignature") != null) {
                String sigPath = str(request.get("directorSignature"));
                if (sigPath != null && sigPath.startsWith("/Firmas/")) {
                    sigPath = System.getProperty("user.dir") + "/Frontend/Firmas/" + sigPath.substring("/Firmas/".length());
                }
                directorSignature = sigPath;
            }
            String leftSignature = null;
            if (request.get("leftSignature") != null) {
                String sigPath = str(request.get("leftSignature"));
                if (sigPath != null && sigPath.startsWith("/Firmas/")) {
                    sigPath = System.getProperty("user.dir") + "/Frontend/Firmas/" + sigPath.substring("/Firmas/".length());
                }
                leftSignature = sigPath;
            }

            GenerationJob job = boletinService.startBatchGeneration(
                    grade, classroom, period, schoolYear, students,
                    compSocialObjetivo, directorSignature, leftSignature);

            return ResponseEntity.ok(jobToMap(job));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Error iniciando generación por lote: " + e.getMessage()));
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/generaciones  – jobs activos/recientes
    // (para reconstruir las "notificaciones" al volver o recargar)
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/generaciones")
    public ResponseEntity<List<Map<String, Object>>> getGeneraciones() {
        List<Map<String, Object>> result = new ArrayList<>();
        for (GenerationJob job : boletinService.getRecentJobs()) {
            result.add(jobToMap(job));
        }
        return ResponseEntity.ok(result);
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/generaciones/{jobId}  – estado de un job puntual
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/generaciones/{jobId}")
    public ResponseEntity<?> getGeneracion(@PathVariable String jobId) {
        GenerationJob job = boletinService.getJob(jobId);
        if (job == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(jobToMap(job));
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/generados  – boletines ya generados (PDF en disco)
    // filtrados por grado y salón, para "Ver Boletines Generados".
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/generados")
    public ResponseEntity<List<Map<String, Object>>> getGenerados(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam(required = false) Integer period) {
        return ResponseEntity.ok(boletinService.listGeneratedBoletines(grade, classroom, period));
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/generados/descargar  – descarga un boletín ya
    // generado por nombre de archivo exacto (ver /generados).
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/generados/descargar")
    public ResponseEntity<?> descargarGenerado(@RequestParam String fileName) {
        try {
            byte[] bytes = boletinService.readGeneratedBoletin(fileName);
            if (bytes == null) return ResponseEntity.notFound().build();
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                    .body(new ByteArrayResource(bytes));
        } catch (IOException e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Error leyendo PDF: " + e.getMessage()));
        }
    }

    private Map<String, Object> jobToMap(GenerationJob job) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("jobId", job.id);
        m.put("grade", job.grade);
        m.put("classroom", job.classroom);
        m.put("period", job.period);
        m.put("total", job.total);
        m.put("completed", job.completed);
        m.put("prepared", job.prepared);
        m.put("phase", job.phase);
        m.put("status", job.status);
        m.put("startedAt", job.startedAt != null ? job.startedAt.toString() : null);
        m.put("finishedAt", job.finishedAt != null ? job.finishedAt.toString() : null);
        m.put("errors", job.errors);
        List<Map<String, Object>> files = new ArrayList<>();
        for (GenerationResultItem item : job.files) {
            Map<String, Object> fm = new LinkedHashMap<>();
            fm.put("studentId", item.studentId);
            fm.put("studentName", item.studentName);
            fm.put("fileName", item.fileName);
            files.add(fm);
        }
        m.put("files", files);
        return m;
    }

    // ─────────────────────────────────────────────────────────────────
    // POST /api/boletines/drafts  – guarda un borrador del formulario
    // ─────────────────────────────────────────────────────────────────
    @PostMapping("/drafts")
    public ResponseEntity<?> saveDraft(@RequestBody Map<String, Object> request) {
        try {
            String grade = str(request.get("grade"));
            String classroom = str(request.get("classroom"));
            Integer period = toInt(request.get("period"));
            String schoolYear = str(request.get("schoolYear"));
            String payload = request.get("payload") != null ? request.get("payload").toString() : "{}";

            if (grade == null || classroom == null || period == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("success", false, "message", "Faltan parámetros: grade, classroom o period"));
            }

            BoletinDraft draft = boletinService.saveDraft(grade, classroom, period, schoolYear, payload);
            return ResponseEntity.ok(Map.of("success", true, "draftId", draft.getId()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest()
                    .body(Map.of("success", false, "message", "Error guardando borrador: " + e.getMessage()));
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/drafts  – lista borradores por grado y salón
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/drafts")
    public ResponseEntity<List<Map<String, Object>>> getDrafts(
            @RequestParam String grade,
            @RequestParam String classroom) {
        try {
            List<com.notastrinitario.app.entity.BoletinDraft> drafts =
                    boletinService.getDrafts(grade, classroom);
            List<Map<String, Object>> result = new ArrayList<>();
            for (com.notastrinitario.app.entity.BoletinDraft d : drafts) {
                Map<String, Object> item = new LinkedHashMap<>();
                item.put("id", d.getId());
                item.put("grade", d.getGrade());
                item.put("classroom", d.getClassroom());
                item.put("period", d.getPeriod());
                item.put("schoolYear", d.getSchoolYear());
                item.put("updatedAt", d.getUpdatedAt() != null ? d.getUpdatedAt().toString() : null);
                result.add(item);
            }
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(new ArrayList<>());
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/drafts/{id}  – un borrador puntual con su payload
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/drafts/{id}")
    public ResponseEntity<?> getDraftById(@PathVariable Long id) {
        BoletinDraft draft = boletinService.getDraftById(id);
        if (draft == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(draftToMap(draft));
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/drafts/ultimo  – último borrador para
    // grado+salón+período (para reanudar automáticamente donde iba).
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/drafts/ultimo")
    public ResponseEntity<?> getUltimoDraft(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period) {
        // No encontrar un borrador previo es un caso normal (primera vez que
        // se usa ese grado/salón/período), no un error — se responde 200
        // con cuerpo vacío en vez de 404 para no ensuciar la consola del
        // navegador con un error rojo por algo esperado.
        return boletinService.getLatestDraft(grade, classroom, period)
                .<ResponseEntity<?>>map(d -> ResponseEntity.ok(draftToMap(d)))
                .orElseGet(() -> ResponseEntity.ok(null));
    }

    private Map<String, Object> draftToMap(BoletinDraft d) {
        Map<String, Object> item = new LinkedHashMap<>();
        item.put("id", d.getId());
        item.put("grade", d.getGrade());
        item.put("classroom", d.getClassroom());
        item.put("period", d.getPeriod());
        item.put("schoolYear", d.getSchoolYear());
        item.put("payload", d.getPayload());
        item.put("updatedAt", d.getUpdatedAt() != null ? d.getUpdatedAt().toString() : null);
        return item;
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/firmas
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/firmas")
    public ResponseEntity<List<Map<String, String>>> getSignatures() {
        try {
            List<String> signatures = boletinService.listSignatures();
            List<Map<String, String>> result = new ArrayList<>();
            for (String sig : signatures) {
                Map<String, String> map = new HashMap<>();
                map.put("path", sig);
                map.put("name", sig.substring(sig.lastIndexOf('/') + 1));
                result.add(map);
            }
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(new ArrayList<>());
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // POST /api/boletines/firmas/upload
    // ─────────────────────────────────────────────────────────────────
    @PostMapping("/firmas/upload")
    public ResponseEntity<?> uploadSignature(@RequestParam("file") MultipartFile file) {
        try {
            if (file.isEmpty())
                return ResponseEntity.badRequest().body(Map.of("error", "Archivo vacío"));

            String contentType = file.getContentType() != null ? file.getContentType() : "";
            if (!contentType.startsWith("image/"))
                return ResponseEntity.badRequest().body(Map.of("error", "Solo se permiten imágenes"));

            String savedPath = boletinService.saveSignature(
                    file.getBytes(),
                    nvl(file.getOriginalFilename(), "signature.png"));

            return ResponseEntity.ok(Map.of(
                    "path", savedPath,
                    "name", savedPath.substring(savedPath.lastIndexOf('/') + 1)));
        } catch (IOException e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Error al guardar la firma: " + e.getMessage()));
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/escala
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/escala")
    public ResponseEntity<Map<String, String>> getEscala() {
        Map<String, String> escala = new LinkedHashMap<>();
        escala.put("S", "4.6 – 5.0 (Superior)");
        escala.put("A", "4.0 – 4.5 (Alto)");
        escala.put("B", "3.5 – 3.9 (Básico)");
        escala.put("I", "1.0 – 3.4 (Bajo)");
        return ResponseEntity.ok(escala);
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/nivel
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/nivel")
    public ResponseEntity<Map<String, String>> getNivel(@RequestParam String grade) {
        BoletinService.AcademicLevel level = boletinService.getAcademicLevel(grade);
        Map<String, String> result = new LinkedHashMap<>();
        result.put("level", level.name());
        result.put("description", level == BoletinService.AcademicLevel.PRIMARIA
                ? "Educación Primaria"
                : "Educación Bachillerato");
        return ResponseEntity.ok(result);
    }

    // ─────────────────────────────────────────────────────────────────
    // GET /api/boletines/promedios
    // ─────────────────────────────────────────────────────────────────
    @GetMapping("/promedios")
    public ResponseEntity<List<Map<String, Object>>> getPromedios(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period) {
        try {
            List<Student> students = boletinService.getStudentsByGradeAndClassroom(grade, classroom);
            List<Map<String, Object>> result = new ArrayList<>();
            for (Student s : students) {
                Double avg = boletinService.calculateStudentAverage(s.getId(), period);
                Map<String, Object> item = new LinkedHashMap<>();
                item.put("studentId", s.getId());
                item.put("name", s.getSurname() + " " + s.getName());
                item.put("average", avg);
                result.add(item);
            }
            result.sort((a, b) -> {
                Double av = (Double) a.get("average");
                Double bv = (Double) b.get("average");
                if (av == null && bv == null) return 0;
                if (av == null) return 1;
                if (bv == null) return -1;
                return bv.compareTo(av);
            });
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(new ArrayList<>());
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // UTILIDADES
    // ─────────────────────────────────────────────────────────────────

    private Long toLong(Object o) {
        if (o == null) return null;
        try { return Long.valueOf(o.toString()); }
        catch (NumberFormatException e) { return null; }
    }

    private Integer toInt(Object o) {
        if (o == null) return null;
        try { return Integer.valueOf(o.toString()); }
        catch (NumberFormatException e) { return null; }
    }

    private Double toDoubleOrNull(Object o) {
        if (o == null) return null;
        try { return Double.valueOf(o.toString()); }
        catch (NumberFormatException e) { return null; }
    }

    private String str(Object o) {
        return o != null ? o.toString() : null;
    }

    private String nvl(String value, String def) {
        return value != null ? value : def;
    }
}