package com.notastrinitario.app.service;

import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.entity.Subject;
import com.notastrinitario.app.entity.SubjectGrade;
import com.notastrinitario.app.entity.RecoveryData;
import com.notastrinitario.app.entity.BoletinDraft;
import com.notastrinitario.app.repository.StudentRepository;
import com.notastrinitario.app.repository.SubjectGradeRepository;
import com.notastrinitario.app.repository.SubjectRepository;
import com.notastrinitario.app.repository.RecoveryDataRepository;
import com.notastrinitario.app.repository.BoletinDraftRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Service
public class BoletinService {

    /** Materia virtual que aparece como fila editable (IH/FA/FAA/objetivo) en
     *  el formulario de boletines. Luego se renderiza como bloque "Valoracion
     *  Acudiente" en el PDF. NO existe como fila real en la tabla subjects. */
    public static final String VALORACION_ACUDIENTE = "Valoracion Acudiente";

    private static final String OUT_DIR = System.getProperty("user.dir") + File.separator + "Boletines Generados";

    private final StudentRepository studentRepository;
    private final SubjectGradeRepository subjectGradeRepository;
    private final SubjectRepository subjectRepository;
    private final RecoveryDataRepository recoveryDataRepository;
    private final BoletinDraftRepository boletinDraftRepository;

    @Value("${app.institution.name}")
    private String institutionName;

    @Value("${app.institution.address}")
    private String institutionAddress;

    private static final String FIRMA_DIR;
    static {
        FIRMA_DIR = System.getProperty("user.dir") + File.separator + "Frontend" + File.separator + "Firmas";
    }

    // ─────────────────────────────────────────────────────────────────
    // GENERACIÓN EN SEGUNDO PLANO (jobs)
    // Permite iniciar la generación de un grado/salón completo y seguir
    // navegando por la app; el estado vive en memoria del servidor así
    // que sobrevive a que el usuario cambie de pantalla o recargue la
    // página (solo se pierde si se reinicia el backend).
    // Se permiten hasta 2 generaciones en simultáneo.
    // ─────────────────────────────────────────────────────────────────
    private final ExecutorService jobExecutor = Executors.newFixedThreadPool(2);
    private final Map<String, GenerationJob> jobs = new ConcurrentHashMap<>();

    public BoletinService(StudentRepository studentRepository,
                          SubjectGradeRepository subjectGradeRepository,
                          SubjectRepository subjectRepository,
                          RecoveryDataRepository recoveryDataRepository,
                          BoletinDraftRepository boletinDraftRepository) {
        this.studentRepository = studentRepository;
        this.subjectGradeRepository = subjectGradeRepository;
        this.subjectRepository = subjectRepository;
        this.recoveryDataRepository = recoveryDataRepository;
        this.boletinDraftRepository = boletinDraftRepository;
    }

    private Path resolveFirmaDir() throws IOException {
        Path dir = Paths.get(FIRMA_DIR);
        if (!Files.exists(dir)) Files.createDirectories(dir);
        return dir;
    }

    private Path resolveOutDir() throws IOException {
        Path dir = Paths.get(OUT_DIR);
        if (!Files.exists(dir)) Files.createDirectories(dir);
        return dir;
    }

    public byte[] generateBoletinPDF(BoletinData data) throws IOException {
        String html = buildBoletinHtml(data);
        return generatePdfWithPython(html);
    }

    public String saveBoletinPDF(BoletinData data) throws IOException {
        byte[] pdfBytes = generateBoletinPDF(data);
        if (pdfBytes == null || pdfBytes.length == 0) return null;
        Path target = resolveOutDir().resolve(buildFileName(data));
        Files.write(target, pdfBytes);
        return target.toAbsolutePath().toString();
    }

    /**
     * Nombre de archivo estándar para un boletín guardado en disco.
     * Incluye grado, salón, período y estudiante para poder listarlos y
     * filtrarlos después desde "Ver Boletines Generados".
     */
    private String buildFileName(BoletinData data) {
        String studentId = (data.getStudent() != null && data.getStudent().getId() != null)
                ? String.valueOf(data.getStudent().getId()) : "0";
        String safeName = (data.getStudent() != null && data.getStudent().getFullName() != null)
                ? sanitizeForFile(data.getStudent().getFullName())
                : "estudiante";
        return "Boletin_" + sanitizeForFile(nvl(data.getGrade(), ""))
                + "_" + sanitizeForFile(nvl(data.getClassroom(), ""))
                + "_P" + (data.getPeriod() != null ? data.getPeriod() : 0)
                + "_" + safeName
                + "_" + studentId
                + ".pdf";
    }

    /** Reemplaza espacios y caracteres no alfanuméricos por "_" para usar en nombres de archivo. */
    private String sanitizeForFile(String s) {
        if (s == null) return "";
        return s.trim().replaceAll("[^A-Za-z0-9]+", "_");
    }

    // ─────────────────────────────────────────────────────────────────
    // GENERACIÓN POR LOTE (background job) — grado/salón completo
    // ─────────────────────────────────────────────────────────────────

    /** Un estudiante a incluir en una generación por lote, con sus datos ya
     *  recolectados desde el formulario del Frontend. */
    public static class BatchStudentInput {
        public Long studentId;
        public Integer nLista;
        public List<Map<String, Object>> subjectIndicators = new ArrayList<>();
        public Double compSocialIh;
        public Double compSocialFa;
        public Double compSocialFaa;
    }

    public GenerationJob startBatchGeneration(String grade, String classroom, Integer period, String schoolYear,
                                               List<BatchStudentInput> students, String compSocialObjetivo,
                                               String directorSignaturePath, String leftSignaturePath) {
        GenerationJob job = new GenerationJob();
        job.id = UUID.randomUUID().toString();
        job.grade = grade;
        job.classroom = classroom;
        job.period = period;
        job.total = students.size();
        job.status = "RUNNING";
        job.startedAt = LocalDateTime.now();
        jobs.put(job.id, job);

        jobExecutor.submit(() -> runBatch(job, grade, classroom, period, schoolYear, students,
                compSocialObjetivo, directorSignaturePath, leftSignaturePath));

        return job;
    }

    private void runBatch(GenerationJob job, String grade, String classroom, Integer period, String schoolYear,
                           List<BatchStudentInput> students, String compSocialObjetivo,
                           String directorSignaturePath, String leftSignaturePath) {
        List<Path> tempHtmlFiles = new ArrayList<>();
        List<BoletinData> dataList = new ArrayList<>();
        try {
            // ── 1) Preparar los datos de cada estudiante ────────────────
            for (BatchStudentInput si : students) {
                BoletinData data = prepareBoletinData(si.studentId, grade, classroom, period);
                if (data == null) {
                    job.errors.add("Estudiante id=" + si.studentId + " no encontrado");
                    continue;
                }
                data.setNLista(si.nLista);
                data.setSchoolYear(schoolYear);
                data.setCompSocialObjetivo(compSocialObjetivo);
                data.setCompSocialIh(si.compSocialIh);
                data.setCompSocialFa(si.compSocialFa);
                data.setCompSocialFaa(si.compSocialFaa);
                data.setValoracionAcudienteNota(5);
                if (directorSignaturePath != null && !directorSignaturePath.isBlank()) {
                    data.setRightSignaturePath(directorSignaturePath);
                }
                if (leftSignaturePath != null && !leftSignaturePath.isBlank()) {
                    data.setLeftSignaturePath(leftSignaturePath);
                }
                applySubjectIndicators(data, si.subjectIndicators);
                dataList.add(data);
            }

            if (dataList.isEmpty()) {
                job.status = "ERROR";
                job.finishedAt = LocalDateTime.now();
                return;
            }

            // ── 2) Escribir el HTML de cada estudiante y calcular su
            //    destino FINAL (no un temporal): así, apenas Python termine
            //    de renderizar un boletín, el PDF ya queda directamente en
            //    "Boletines Generados", sin esperar a que el lote completo
            //    termine. Se reporta progreso también en esta fase.
            job.phase = "PREPARING";
            List<Path> finalTargets = new ArrayList<>();
            for (int i = 0; i < dataList.size(); i++) {
                BoletinData data = dataList.get(i);
                String html = buildBoletinHtml(data);
                Path htmlTemp = Files.createTempFile("boletin_lote_", ".html");
                Files.writeString(htmlTemp, html, java.nio.charset.StandardCharsets.UTF_8);
                tempHtmlFiles.add(htmlTemp);

                Path finalTarget = resolveOutDir().resolve(buildFileName(data));
                finalTargets.add(finalTarget);
                job.prepared = i + 1;
            }

            // ── 3) Un solo proceso Python/Chromium para todo el lote
            //    (mucho más rápido que abrir un navegador por estudiante).
            //    Cada PDF se escribe directo en su destino final; a medida
            //    que Python reporta cada uno terminado, se registra en el
            //    job de inmediato (no se espera a que termine el lote).
            job.phase = "RENDERING";
            generatePdfsBatchWithPython(tempHtmlFiles, finalTargets, dataList, job);

            job.status = job.files.isEmpty() ? "ERROR" : "DONE";

            // Ya se generaron los boletines: el borrador de este grado/salón/
            // período ya no sirve para "retomar donde iba", así que se borra
            // en vez de dejarlo ahí indefinidamente.
            if ("DONE".equals(job.status)) {
                try {
                    boletinDraftRepository.deleteByGradeAndClassroomAndPeriod(grade, classroom, period);
                } catch (Exception ignore) {
                    // Si falla el borrado del borrador no debe afectar el resultado de la generación.
                }
            }
        } catch (Exception e) {
            job.status = "ERROR";
            job.errors.add("Error general: " + e.getMessage());
        } finally {
            job.finishedAt = LocalDateTime.now();
            for (Path p : tempHtmlFiles) { try { Files.deleteIfExists(p); } catch (IOException ignore) {} }
        }
    }

    public GenerationJob getJob(String id) {
        return jobs.get(id);
    }

    /** Jobs activos o terminados recientemente (últimos 60 min), más nuevos primero. */
    public List<GenerationJob> getRecentJobs() {
        LocalDateTime cutoff = LocalDateTime.now().minusMinutes(60);
        return jobs.values().stream()
                .filter(j -> "RUNNING".equals(j.status) || j.startedAt.isAfter(cutoff))
                .sorted(Comparator.comparing((GenerationJob j) -> j.startedAt).reversed())
                .collect(Collectors.toList());
    }

    // ─────────────────────────────────────────────────────────────────
    // LISTADO DE BOLETINES YA GENERADOS (para "Ver Boletines Generados")
    // ─────────────────────────────────────────────────────────────────
    public List<Map<String, Object>> listGeneratedBoletines(String grade, String classroom, Integer period) {
        List<Map<String, Object>> result = new ArrayList<>();
        try {
            Path dir = (period != null) ? resolveOutDir().resolve("P" + period) : resolveOutDir();
            if (!Files.exists(dir)) return result;
            String prefix = "Boletin_" + sanitizeForFile(nvl(grade, "")) + "_" + sanitizeForFile(nvl(classroom, "")) + "_";
            String periodPart = (period != null) ? "_P" + period + "_" : null;
            List<Path> matches;
            try (var stream = Files.list(dir)) {
                matches = stream
                        .filter(Files::isRegularFile)
                        .filter(p -> p.getFileName().toString().startsWith(prefix))
                        .filter(p -> periodPart == null || p.getFileName().toString().contains(periodPart))
                        .sorted(Comparator.comparing(p -> {
                            try { return Files.getLastModifiedTime(p); }
                            catch (IOException e) { return java.nio.file.attribute.FileTime.fromMillis(0); }
                        }, Comparator.reverseOrder()))
                        .collect(Collectors.toList());
            }
            for (Path p : matches) {
                Map<String, Object> item = new LinkedHashMap<>();
                item.put("fileName", p.getFileName().toString());
                item.put("updatedAt", Files.getLastModifiedTime(p).toString());
                result.add(item);
            }
        } catch (IOException ignored) {}
        return result;
    }

    /** Devuelve los bytes de un boletín ya generado, validando que el nombre
     *  de archivo no intente escapar del directorio de salida (path traversal). */
    public byte[] readGeneratedBoletin(String fileName) throws IOException {
        if (fileName == null || fileName.contains("/") || fileName.contains("\\") || fileName.contains("..")) {
            return null;
        }
        Path target = resolveOutDir().resolve(fileName).normalize();
        if (!target.startsWith(resolveOutDir()) || !Files.exists(target)) return null;
        return Files.readAllBytes(target);
    }

    // ─────────────────────────────────────────────────────────────────
    // GENERACIÓN DE PDF POR LOTE VÍA PYTHON (un solo proceso/navegador)
    // ─────────────────────────────────────────────────────────────────
    private void generatePdfsBatchWithPython(List<Path> htmlFiles, List<Path> pdfFiles,
                                              List<BoletinData> dataList, GenerationJob job) throws IOException {
        // Manifiesto JSON: [{"html": "...", "pdf": "..."}, ...]
        // Python escribe cada PDF DIRECTO en su destino final (pdfFiles ya
        // son rutas dentro de "Boletines Generados", no temporales).
        StringBuilder manifestJson = new StringBuilder("[");
        for (int i = 0; i < htmlFiles.size(); i++) {
            if (i > 0) manifestJson.append(",");
            manifestJson.append("{\"html\":\"")
                    .append(htmlFiles.get(i).toAbsolutePath().toString().replace("\\", "\\\\"))
                    .append("\",\"pdf\":\"")
                    .append(pdfFiles.get(i).toAbsolutePath().toString().replace("\\", "\\\\"))
                    .append("\"}");
        }
        manifestJson.append("]");

        Path manifestPath = Files.createTempFile("boletin_manifest_", ".json");
        try {
            Files.writeString(manifestPath, manifestJson.toString(), java.nio.charset.StandardCharsets.UTF_8);

            ProcessBuilder pb = new ProcessBuilder(
                    "python", "python/playwright_generator.py",
                    "--batch", manifestPath.toString());
            pb.directory(new File(System.getProperty("user.dir")));
            pb.redirectErrorStream(false);
            Process process = pb.start();

            // Lee stdout en vivo: apenas Python confirma que terminó el PDF
            // número n (ya escrito en su destino final), se registra ese
            // resultado de inmediato en el job — no se espera a que el
            // lote completo termine para que el archivo "aparezca".
            try (var reader = new java.io.BufferedReader(
                    new java.io.InputStreamReader(process.getInputStream(), java.nio.charset.StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    if (line.startsWith("PROGRESS ")) {
                        try {
                            String[] parts = line.substring("PROGRESS ".length()).trim().split("/");
                            int done = Integer.parseInt(parts[0]);
                            registerFinishedPdf(done - 1, pdfFiles, dataList, job);
                            job.completed = done;
                        } catch (Exception ignore) {}
                    }
                }
            }

            int exitCode = process.waitFor();
            if (exitCode != 0) {
                String errorOutput = new String(
                        process.getErrorStream().readAllBytes(),
                        java.nio.charset.StandardCharsets.UTF_8);
                throw new IOException("Error generando PDFs por lote (código " + exitCode + "): " + errorOutput);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IOException("Generación de PDFs por lote interrumpida", e);
        } finally {
            try { Files.deleteIfExists(manifestPath); } catch (IOException ignore) {}
        }
    }

    /** Se llama apenas Python confirma (vía "PROGRESS n/total") que terminó
     *  de renderizar el PDF número `index`. Como ese PDF ya se escribió
     *  directamente en su destino final (no en un temporal), acá solo se
     *  valida que exista y tenga contenido, y se registra de inmediato en
     *  el job — así el archivo "aparece" apenas está listo, no cuando
     *  termina el lote completo. */
    private void registerFinishedPdf(int index, List<Path> pdfFiles, List<BoletinData> dataList, GenerationJob job) {
        if (index < 0 || index >= pdfFiles.size() || index >= dataList.size()) return;
        Path target = pdfFiles.get(index);
        BoletinData data = dataList.get(index);
        try {
            if (!Files.exists(target) || Files.size(target) == 0) {
                job.errors.add("PDF vacío para estudiante id=" + (data.getStudent() != null ? data.getStudent().getId() : "?"));
                return;
            }
            GenerationResultItem item = new GenerationResultItem();
            item.studentId = data.getStudent() != null ? data.getStudent().getId() : null;
            item.studentName = data.getStudent() != null ? data.getStudent().getFullName() : "";
            item.fileName = target.getFileName().toString();
            job.files.add(item);
        } catch (IOException e) {
            job.errors.add("Error verificando PDF: " + e.getMessage());
        }
    }

    /** Estado de una generación por lote en curso o reciente. */
    public static class GenerationJob {
        public String id;
        public String grade;
        public String classroom;
        public Integer period;
        public int total;
        public volatile int prepared;
        public volatile int completed;
        public volatile String status; // RUNNING | DONE | ERROR
        public volatile String phase = "PREPARING"; // PREPARING | RENDERING
        public LocalDateTime startedAt;
        public LocalDateTime finishedAt;
        public List<GenerationResultItem> files = new ArrayList<>();
        public List<String> errors = new ArrayList<>();
    }

    public static class GenerationResultItem {
        public Long studentId;
        public String studentName;
        public String fileName;
    }

    // ─────────────────────────────────────────────────────────────────
    // CONSTRUCCIÓN DEL HTML DEL BOLETÍN
    // ─────────────────────────────────────────────────────────────────
    private String buildBoletinHtml(BoletinData data) throws IOException {
        String template = readTemplateResource();

        // ── Datos del encabezado ──────────────────────────────────────
        String nivel = data.getAcademicLevel() != null
                ? capitalize(data.getAcademicLevel().name())
                : "Bachillerato";

        String promedioStr = data.getAverage() != null
                ? truncar(data.getAverage(), 2)
                : "0,00";

        String dGeneral = data.getAverage() != null
                ? valorLabel(data.getAverage())
                : "N.A";

        // ── Reemplazos simples ────────────────────────────────────────
        Map<String, String> r = new LinkedHashMap<>();
        r.put("${institucion}",     escapeHtml(nvl(institutionName, "Corporación Colegio Trinitario")));
        r.put("${ciudad}",          escapeHtml(nvl(data.getCity(), "Cartagena")));
        r.put("${grado}",           escapeHtml(nvl(data.getGrade(), "")));
        r.put("${grupo}",           escapeHtml(nvl(data.getClassroom(), "")));
        r.put("${jornada}",         escapeHtml(nvl(data.getJornada(), "ÚNICA")));
        r.put("${periodo}",         escapeHtml(data.getPeriod() != null ? String.valueOf(data.getPeriod()) : ""));
        r.put("${anio}",            escapeHtml(nvl(data.getSchoolYear(), String.valueOf(java.time.Year.now().getValue()))));
        r.put("${nivel}",           escapeHtml(nivel));
        r.put("${nLista}",          escapeHtml(data.getNLista() != null ? String.valueOf(data.getNLista()) : ""));
        r.put("${estudiante}",      escapeHtml(data.getStudent() != null && data.getStudent().getFullName() != null
                                        ? data.getStudent().getFullName().toUpperCase() : ""));
        r.put("${puesto}",          escapeHtml(data.getRank() != null ? String.valueOf(data.getRank()) : ""));
        r.put("${promedio}",        escapeHtml(promedioStr));
        r.put("${dGeneral}",        escapeHtml(dGeneral));

        String result = template;
        for (Map.Entry<String, String> e : r.entrySet()) {
            result = result.replace(e.getKey(), e.getValue());
        }

        // ── Bloque dinámico: materias repartidas en ${materiasHoja1} /
        //    ${materiasHoja2}, con comportamiento social + valoración
        //    acudiente + áreas perdidas + firmas embebidos en el que
        //    corresponda (según si hay o no una segunda hoja).
        result = reemplazarBloquesMaterias(result, data);

        return result;
    }

    /** Nombre de la carpeta (ahora hermana de Frontend, no dentro de ella)
     *  y del archivo de la plantilla del boletín. */
    private static final String TEMPLATE_FOLDER_NAME = "Boletin Base";
    private static final String TEMPLATE_FILE_NAME   = "Boletin_Base.html";

    /** Ruta ya resuelta de la plantilla, calculada una sola vez la primera
     *  vez que se necesita (ver resolveBoletinTemplatePath()). */
    private static volatile String resolvedTemplatePath = null;

    private String readTemplateResource() throws IOException {
        if (resolvedTemplatePath == null) {
            resolvedTemplatePath = resolveBoletinTemplatePath();
        }
        return Files.readString(Paths.get(resolvedTemplatePath), java.nio.charset.StandardCharsets.UTF_8);
    }

    /**
     * Encuentra la plantilla del boletín sin depender de una ruta fija con
     * usuario/disco específico (para que funcione igual en cualquier PC o
     * memoria USB donde se copie el proyecto completo).
     *
     * Estrategia: parte de la ubicación real desde donde está corriendo el
     * código (el .jar empaquetado, o la carpeta de clases compiladas si
     * corre desde el IDE) y sube nivel por nivel buscando una carpeta
     * "Boletin Base" que contenga "Boletin_Base.html". Como esa carpeta
     * vive dentro de Notas_Trinitario sin importar en qué disco/PC esté el
     * proyecto, esto encuentra el archivo sin necesidad de una ruta
     * absoluta escrita a mano.
     */
    private static String resolveBoletinTemplatePath() {
        try {
            File codeLocation = new File(
                    BoletinService.class.getProtectionDomain().getCodeSource().getLocation().toURI());
            File dir = codeLocation.isFile() ? codeLocation.getParentFile() : codeLocation;

            for (int i = 0; i < 10 && dir != null; i++) {
                File candidate = new File(new File(dir, TEMPLATE_FOLDER_NAME), TEMPLATE_FILE_NAME);
                if (candidate.exists()) {
                    return candidate.getAbsolutePath();
                }
                dir = dir.getParentFile();
            }
        } catch (Exception ignored) {
            // Si algo falla resolviendo la ubicación del código, se sigue
            // con el fallback de abajo en vez de tumbar la generación.
        }

        // Fallback: buscar igual pero partiendo del directorio de trabajo
        // actual, por si el proyecto corre de una forma en la que no se
        // pudo determinar la ubicación del código (poco común).
        File dir = new File(System.getProperty("user.dir"));
        for (int i = 0; i < 10 && dir != null; i++) {
            File candidate = new File(new File(dir, TEMPLATE_FOLDER_NAME), TEMPLATE_FILE_NAME);
            if (candidate.exists()) {
                return candidate.getAbsolutePath();
            }
            dir = dir.getParentFile();
        }

        // Último recurso: ruta relativa simple (mensaje de error más claro
        // si de verdad no se encuentra en ningún lado).
        return TEMPLATE_FOLDER_NAME + File.separator + TEMPLATE_FILE_NAME;
    }

    // ─────────────────────────────────────────────────────────────────
    // MEDIDAS DE PÁGINA (en píxeles a 96 dpi, hoja A4 210×297 mm)
    // padding 8mm cada lado → área útil ≈ 794 - 60 = 734 px alto
    // ─────────────────────────────────────────────────────────────────

    /** Altura útil de una hoja A4 en px (96 dpi, padding 8mm arriba+abajo) */
    private static final int PAGE_HEIGHT_PX = 734;

    /** Altura mínima de una fila de materia (nombre corto, descripción de 1 línea) */
    private static final int ROW_MIN_HEIGHT_PX = 46;

    /**
     * Caracteres de descripción por línea en la columna izquierda (~57% de 734 px ancho útil).
     * A 7pt ≈ 9.3 px/char, ancho col-izq ≈ 420 px → ~45 chars/línea.
     * Cada línea extra añade ~9 px de alto (line-height 1.25 × 7pt).
     */
    private static final int CHARS_PER_LINE_DESC = 45;
    private static final int LINE_HEIGHT_DESC_PX  = 9;

    /** Altura de la sección "ÁREAS PERDIDAS" */
    private static final int LOST_AREAS_HEIGHT_PX = 18;

    /** Altura del bloque de firmas (línea + nombres) */
    private static final int FIRMAS_HEIGHT_PX = 70;

    /** Altura de la escala valorativa al pie */
    private static final int ESCALA_HEIGHT_PX = 30;

    /** Altura de las dos filas de cierre: Comportamiento Social + Valoración Acudiente */
    private static final int CIERRE_HEIGHT_PX = 100;

    /**
     * Estima la altura en px que ocupará una fila de materia según la longitud
     * de su texto de descripción/objetivo.
     */
    private int estimarAlturaFila(SubjectData sd) {
        String desc = nvl(sd.getObjetivoPeriodo(), "");
        int lineas  = Math.max(1, (int) Math.ceil((double) desc.length() / CHARS_PER_LINE_DESC));
        // Fila base: encabezado (nombre+val) 16px + líneas de descripción
        int altoDesc = 16 + lineas * LINE_HEIGHT_DESC_PX;
        // La tabla de períodos ocupa ~43px fijos en el panel derecho
        // La altura final es el máximo entre el panel izq y el panel der
        return Math.max(altoDesc, ROW_MIN_HEIGHT_PX);
    }

    /**
     * Límite fijo de filas por hoja: máximo 12. Cuentan tanto las materias
     * reales como las filas de Comportamiento Social y Valoración Acudiente
     * (antes esas 2 se agregaban aparte sin contar, por lo que a veces
     * terminaban 14 filas en la hoja 1 en vez de 12).
     * Devuelve el índice (exclusivo) del primer elemento que ya NO cabe en la hoja 1.
     */
    private static final int SUBJECTS_PER_PAGE = 12;

    private int calcularCortePrimeraHoja(int totalRows) {
        return Math.min(SUBJECTS_PER_PAGE, totalRows);
    }

    /**
     * Altura que ocupan las filas de cierre + áreas perdidas + firmas + escala.
     * Esto es lo que debe "acompañar" a las firmas en la última hoja.
     */
    private int alturaBloqueCierre() {
        return CIERRE_HEIGHT_PX + LOST_AREAS_HEIGHT_PX + FIRMAS_HEIGHT_PX + ESCALA_HEIGHT_PX;
    }

    /**
     * Con el límite fijo de 12 materias por hoja ya no se requiere arrastrar
     * materias adicionalmente; la paginación es determinista.
     */
    @SuppressWarnings("unused")
    private int materiasQueCAbenEnSegundaHoja(List<SubjectData> subjects, int desde) {
        int disponible = PAGE_HEIGHT_PX - alturaBloqueCierre();
        int acumulado  = 0;
        int cuenta     = 0;
        for (int i = desde; i < subjects.size(); i++) {
            int h = estimarAlturaFila(subjects.get(i));
            if (acumulado + h > disponible) break;
            acumulado += h;
            cuenta++;
        }
        return cuenta;
    }

    // ─────────────────────────────────────────────────────────────────
    // GENERACIÓN DE FILAS DE MATERIAS
    // ─────────────────────────────────────────────────────────────────
    /**
     * Reparte las materias entre ${materiasHoja1} y ${materiasHoja2}.
     * - Si hay 12 materias o menos: todo (materias + comportamiento social +
     *   valoración acudiente + áreas perdidas + firmas) va en ${materiasHoja1}
     *   y ${materiasHoja2} queda vacío (no hay segunda hoja).
     * - Si hay más de 12: ${materiasHoja1} solo lleva las primeras 12 filas;
     *   ${materiasHoja2} arranca con el divisor de corte de página y un
     *   nuevo recuadro (con su propia cabecera) que lleva el resto de
     *   materias + comportamiento social + valoración acudiente + áreas
     *   perdidas + firmas.
     */
    private String reemplazarBloquesMaterias(String html, BoletinData data) {
        List<SubjectData> subjects = data.getSubjects() != null ? data.getSubjects() : new ArrayList<>();

        // ── Lista unificada de filas: las materias reales + Comportamiento
        //    Social + Valoración Acudiente cuentan igual para el límite de
        //    12 filas por hoja (antes esas 2 filas se agregaban aparte sin
        //    contar, por lo que a veces terminaban 14 filas en la hoja 1).
        List<String> rows = new ArrayList<>();
        for (int index = 0; index < subjects.size(); index++) {
            rows.add(buildMateriaRowHtml(subjects.get(index), index));
        }
        rows.add(buildComportamientoSocialRowHtml(data, rows.size()));
        rows.add(buildValoracionAcudienteRowHtml(data, rows.size()));

        int corte = calcularCortePrimeraHoja(rows.size());
        boolean hayHoja2 = corte < rows.size();

        StringBuilder hoja1 = new StringBuilder();
        for (int i = 0; i < corte; i++) {
            hoja1.append(rows.get(i));
        }

        // Áreas perdidas + firmas: van al final de la hoja donde terminen
        // las filas (materias + comportamiento social + valoración acudiente).
        String cierre = buildAreasPerdidasHtml(data) + buildFirmasHtml(data);

        StringBuilder hoja2 = new StringBuilder();
        if (hayHoja2) {
            hoja2.append("<div class=\"page-cut-divider\" style=\"page-break-after: always; break-after: page;\"></div>");
            hoja2.append("<div class=\"materias-wrap-page2\">");
            for (int i = corte; i < rows.size(); i++) {
                hoja2.append(rows.get(i));
            }
            hoja2.append(cierre);
            hoja2.append("</div>"); // fin materias-wrap-page2
        } else {
            hoja1.append(cierre);
        }

        return html.replace("${materiasHoja1}", hoja1.toString())
                    .replace("${materiasHoja2}", hoja2.toString());
    }

    /** HTML de una sola fila de materia (misma lógica de antes, solo que
     *  ahora es reutilizable tanto para la hoja 1 como para la hoja 2). */
    private String buildMateriaRowHtml(SubjectData sd, int index) {
        String nombre = escapeHtml(nvl(sd.getSubjectName(), ""));

        String ih  = sd.getIh()  != null ? String.format("%.0f", sd.getIh())  : "0";
        String fa  = sd.getFa()  != null ? String.format("%.0f", sd.getFa())  : "0";
        String faa = sd.getFaa() != null ? String.format("%.0f", sd.getFaa()) : "0";

        // Nota final del boletín (N.FINAL) — truncada, nunca redondeada
        Double notaFinal  = sd.getnFinal();
        String notaNumerica = notaFinal != null ? truncar(notaFinal, 1) : "0";

        // Acumulado = suma de (nota_periodo × 0.25) por cada período ya
        // visto (1..período actual). Se calculó una vez en prepareBoletinData
        // (necesita consultar la BD de períodos anteriores) y se deja listo
        // en sd.getAcumulado(); acá solo se formatea, truncado (no redondeado).
        String acumulado = sd.getAcumulado() != null ? truncar(sd.getAcumulado(), 2) : "0,00";

        String valLabel = notaFinal != null ? valorLabel(notaFinal) : "N.A";

        // ── Los 4 recuadros de los periodos (1°Rf, 2°Rf, 3°Rf, 4°Rf) ──
        //    Si ya se generaron/calcularon los períodos anteriores (p.ej.
        //    estamos en el período 4 y 1, 2, 3 ya tienen nota), esas notas
        //    también se muestran, cada una en su propio recuadro. Los
        //    períodos futuros (después del actual) quedan en blanco porque
        //    sd.getPeriodN() ya viene null para esos (no se calculan).
        String p1 = sd.getPeriod1() != null ? truncar(sd.getPeriod1(), 1) : "";
        String p2 = sd.getPeriod2() != null ? truncar(sd.getPeriod2(), 1) : "";
        String p3 = sd.getPeriod3() != null ? truncar(sd.getPeriod3(), 1) : "";
        String p4 = sd.getPeriod4() != null ? truncar(sd.getPeriod4(), 1) : "";
        String l1 = sd.getPeriod1() != null ? scaleLetter(sd.getPeriod1()) : "";
        String l2 = sd.getPeriod2() != null ? scaleLetter(sd.getPeriod2()) : "";
        String l3 = sd.getPeriod3() != null ? scaleLetter(sd.getPeriod3()) : "";
        String l4 = sd.getPeriod4() != null ? scaleLetter(sd.getPeriod4()) : "";

        String objetivo = escapeHtml(nvl(sd.getObjetivoPeriodo(), ""));
        String bgClass = (index % 2 == 0) ? "row-odd" : "row-even";

        return String.format("""
            <div class="boletin-row %s">
              <div class="col-izq">
                <div class="area-header">
                  <span class="area-nombre">%s</span>
                  <span class="num-col">%s</span>
                  <span class="num-col">%s</span>
                  <span class="num-col">%s</span>
                  <span class="val-text">%s</span>
                </div>
                <div class="area-desc-text">%s</div>
              </div>
              <div class="col-der">
                <div class="der-inner">
                  <div class="nota-acumul-row">
                    <span class="nota-acumul-label">NOTA</span>
                    <span class="nota-acumul-num">%s</span>
                    <span style="flex:1"></span>
                    <span class="nota-acumul-label">ACUMUL.</span>
                    <span class="pct-text">&#160;%s%%</span>
                  </div>
                  <table class="periodos-tabla">
                    <thead>
                      <tr><th>1° Rf</th><th>2° Rf</th><th>3° Rf</th><th>4° Rf</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>%s</td><td>%s</td><td>%s</td><td>%s</td>
                      </tr>
                      <tr class="td-letra-row">
                        <td>%s</td><td>%s</td><td>%s</td><td>%s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            """,
            bgClass,
            nombre, ih, fa, faa, valLabel,
            objetivo,
            notaNumerica, acumulado,
            p1, p2, p3, p4,
            l1, l2, l3, l4
        );
    }

    /** Bloque de "Materias Perdidas" — se omite por completo si no hay
     *  ninguna (antes se imprimía la palabra "Ninguna"). */
    private String buildAreasPerdidasHtml(BoletinData data) {
        if (data.getLostAreas() == null || data.getLostAreas().isEmpty()) return "";
        String areas = String.join(", ", data.getLostAreas());
        return "<div class=\"areas-perdidas\">AREAS PERDIDAS: " + escapeHtml(areas) + "</div>";
    }

    /** Bloque de firmas (Profesor(a) de Grupo / Directora). La plantilla no
     *  trae este bloque de forma estática: se genera aquí para poder
     *  ubicarlo al final de la hoja donde terminen las materias. */
    private String buildFirmasHtml(BoletinData data) {
        String left  = buildFirmaImgTag(data.getLeftSignaturePath());
        String right = buildFirmaImgTag(data.getRightSignaturePath());
        return String.format("""
            <div class="firmas-row">
              <div class="firma-bloque">
                <div class="firma-line">%s</div>
                <div class="firma-title">Profesor(a) de Grupo</div>
              </div>
              <div class="firma-bloque">
                <div class="firma-line">%s</div>
                <div class="firma-title">Directora</div>
              </div>
            </div>
            """, left, right);
    }

    private String buildFirmaImgTag(String sigPath) {
        if (sigPath == null || sigPath.isBlank()) return "";
        String path = sigPath;
        if (!path.startsWith("http") && !path.startsWith("file:")) {
            path = "file:///" + path.replace("\\", "/");
        }
        return "<img src='" + path + "' style='height:28px; max-width:160px; object-fit:contain;'"
                + " onerror='this.style.display=\"none\"' />";
    }

    // ─────────────────────────────────────────────────────────────────
    // COMPORTAMIENTO SOCIAL + VALORACIÓN ACUDIENTE
    // ─────────────────────────────────────────────────────────────────
    private String buildComportamientoSocialRowHtml(BoletinData data, int index) {

        String compSocial = nvl(data.getCompSocial(), "");

        String compSocialLabel = switch (compSocial.toUpperCase()) {
            case "E" -> "Excelente";
            case "S" -> "Sobresaliente";
            case "B" -> "Bueno";
            case "A" -> "Aceptable";
            case "I" -> "Insuficiente";
            default  -> compSocial.isBlank() ? "" : compSocial;
        };

        String compSocialObjetivo = nvl(data.getCompSocialObjetivo(), "");

        Double csIh = data.getCompSocialIh();
        Double csFa = data.getCompSocialFa();
        Double csFaa = data.getCompSocialFaa();
        String ihStr  = csIh  != null ? String.format("%.0f", csIh)  : "0";
        String faStr  = csFa  != null ? String.format("%.0f", csFa)  : "0";
        String faaStr = csFaa != null ? String.format("%.0f", csFaa) : "0";

        // ── Los 4 recuadros de período: la nota solo va en el recuadro del
        //    período actual del boletín (data.getPeriod()); los otros 3
        //    quedan en blanco (antes se repetía en todos).
        int periodoActual = data.getPeriod() != null ? data.getPeriod() : 0;

        String csPDisplay1 = "", csPDisplay2 = "", csPDisplay3 = "", csPDisplay4 = "";
        String csLetra1 = "", csLetra2 = "", csLetra3 = "", csLetra4 = "";
        if (!compSocial.isBlank()) {
            String display = compSocialLabel.toUpperCase();
            // Solo la letra (E/S/B/A/I), igual que en las filas de materias —
            // antes decía "Escala: E = Excelente", texto redundante que ya
            // está explicado en la leyenda de escala al pie de la página.
            String letra = compSocial.toUpperCase();
            switch (periodoActual) {
                case 1 -> { csPDisplay1 = display; csLetra1 = letra; }
                case 2 -> { csPDisplay2 = display; csLetra2 = letra; }
                case 3 -> { csPDisplay3 = display; csLetra3 = letra; }
                case 4 -> { csPDisplay4 = display; csLetra4 = letra; }
                default -> { csPDisplay1 = display; csLetra1 = letra; }
            }
        }

        String bgClass = (index % 2 == 0) ? "row-odd" : "row-even";

        // Acumulado (calculado igual que una materia — ver prepareBoletinData)
        String csAcumulado = data.getCompSocialAcumulado() != null
                ? truncar(data.getCompSocialAcumulado(), 2)
                : "0,00";

        return String.format("""
            <div class="boletin-row %s">
              <div class="col-izq">
                <div class="area-header">
                  <span class="area-nombre">Comportamiento Social</span>
                  <span class="num-col">%s</span>
                  <span class="num-col">%s</span>
                  <span class="num-col">%s</span>
                  <span class="val-text">%s</span>
                </div>
                <div class="area-desc-text">%s</div>
              </div>
              <div class="col-der">
                <div class="der-inner">
                  <div class="nota-acumul-row">
                    <span class="nota-acumul-label">NOTA</span>
                    <span class="nota-acumul-num">&#160;</span>
                    <span style="flex:1"></span>
                    <span class="nota-acumul-label">ACUMUL.</span>
                    <span class="pct-text">&#160;%s%%</span>
                  </div>
                  <table class="periodos-tabla">
                    <thead>
                      <tr><th>1° Rf</th><th>2° Rf</th><th>3° Rf</th><th>4° Rf</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>%s</td><td>%s</td><td>%s</td><td>%s</td>
                      </tr>
                      <tr class="td-letra-row">
                        <td>%s</td><td>%s</td><td>%s</td><td>%s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            """,
            bgClass,
            ihStr, faStr, faaStr, compSocialLabel.toUpperCase(),
            escapeHtml(compSocialObjetivo),
            csAcumulado,
            escapeHtml(csPDisplay1), escapeHtml(csPDisplay2), escapeHtml(csPDisplay3), escapeHtml(csPDisplay4),
            escapeHtml(csLetra1), escapeHtml(csLetra2), escapeHtml(csLetra3), escapeHtml(csLetra4)
        );
    }

    private String buildValoracionAcudienteRowHtml(BoletinData data, int index) {
        int periodoActual = data.getPeriod() != null ? data.getPeriod() : 0;

        // ── Valoración acudiente ──────────────────────────────────────
        int valoracionNota = data.getValoracionAcudienteNota() != null
                ? data.getValoracionAcudienteNota() : 5;
        String valoracionNotaStr = String.valueOf(valoracionNota);
        String valAcudLabel = valorLabel((double) valoracionNota);
        String letraVal = scaleLetter((double) valoracionNota);

        // Acumulado, calculado igual que una materia: suma de
        // (nota_periodo × 0.25) por cada período ya visto. Ojo: hoy no hay
        // un valor histórico por período para Valoración Acudiente (siempre
        // se usa la misma nota actual), así que por ahora esto equivale a
        // valoracionNota × 0.25 × período. Si en el futuro se guarda un
        // valor distinto por período, este cálculo ya queda listo para usarlo.
        double acumAcudSum = valoracionNota * 0.25 * periodoActual;
        String acumAcud = truncar(acumAcudSum, 2);

        String vaP1 = "", vaP2 = "", vaP3 = "", vaP4 = "";
        String vaL1 = "", vaL2 = "", vaL3 = "", vaL4 = "";
        switch (periodoActual) {
            case 1 -> { vaP1 = valoracionNotaStr; vaL1 = letraVal; }
            case 2 -> { vaP2 = valoracionNotaStr; vaL2 = letraVal; }
            case 3 -> { vaP3 = valoracionNotaStr; vaL3 = letraVal; }
            case 4 -> { vaP4 = valoracionNotaStr; vaL4 = letraVal; }
            default -> { vaP1 = valoracionNotaStr; vaL1 = letraVal; }
        }

        // ── IH / FA / FAA de Valoración Acudiente (editados por materia
        //    virtual en el formulario del boletín).
        Double vaIh  = data.getValoracionAcudienteIh();
        Double vaFa  = data.getValoracionAcudienteFa();
        Double vaFaa = data.getValoracionAcudienteFaa();
        String vaIhStr  = vaIh  != null ? String.format("%.0f", vaIh)  : "0";
        String vaFaStr  = vaFa  != null ? String.format("%.0f", vaFa)  : "0";
        String vaFaaStr = vaFaa != null ? String.format("%.0f", vaFaa) : "0";

        // Descripción del objetivo de la materia virtual Valoración Acudiente
        // (si no se diligenció se usa el texto por defecto del manual de convivencia).
        String vaObjetivo = (data.getValoracionAcudienteObjetivo() != null
                && !data.getValoracionAcudienteObjetivo().trim().isEmpty())
                ? escapeHtml(data.getValoracionAcudienteObjetivo())
                : "Asiste a las reuniones de padres de familia, citaciones, escuelas para"
                  + " padres, programadas por la instituci&oacute;n y establecidas en el Manual de Convivencia"
                  + " (Cap&iacute;tulo XI art&iacute;culo 80&deg;, par&aacute;grafo 2).";

        String bgClass = (index % 2 == 0) ? "row-odd" : "row-even";

        return String.format("""
            <div class="boletin-row %s">
              <div class="col-izq">
                <div class="area-header">
                  <span class="area-nombre">Valoracion Acudiente</span>
                  <span class="num-col">%s</span>
                  <span class="num-col">%s</span>
                  <span class="num-col">%s</span>
                  <span class="val-text">%s</span>
                </div>
                <div class="area-desc-text">%s</div>
              </div>
              <div class="col-der">
                <div class="der-inner">
                  <div class="nota-acumul-row">
                    <span class="nota-acumul-label">NOTA</span>
                    <span class="nota-acumul-num">%s</span>
                    <span style="flex:1"></span>
                    <span class="nota-acumul-label">ACUMUL.</span>
                    <span class="pct-text">&#160;%s%%</span>
                  </div>
                  <table class="periodos-tabla">
                    <thead>
                      <tr><th>1° Rf</th><th>2° Rf</th><th>3° Rf</th><th>4° Rf</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>%s</td><td>%s</td><td>%s</td><td>%s</td>
                      </tr>
                      <tr class="td-letra-row">
                        <td>%s</td><td>%s</td><td>%s</td><td>%s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            """,
            bgClass,
            vaIhStr, vaFaStr, vaFaaStr, valAcudLabel,
            vaObjetivo,
            valoracionNotaStr,
            acumAcud,
            vaP1, vaP2, vaP3, vaP4,
            vaL1, vaL2, vaL3, vaL4
        );
    }

    // ─────────────────────────────────────────────────────────────────
    // GENERACIÓN DE PDF VÍA PYTHON / PLAYWRIGHT
    // ─────────────────────────────────────────────────────────────────
    private byte[] generatePdfWithPython(String html) throws IOException {
        Path htmlTemp = Files.createTempFile("boletin", ".html");
        Path pdfTemp  = Files.createTempFile("boletin", ".pdf");
        try {
            Files.writeString(htmlTemp, html, java.nio.charset.StandardCharsets.UTF_8);
            ProcessBuilder pb = new ProcessBuilder(
                    "python", "python/playwright_generator.py",
                    htmlTemp.toString(), pdfTemp.toString());
            pb.directory(new File(System.getProperty("user.dir")));
            Process process = pb.start();
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                String errorOutput = new String(
                        process.getErrorStream().readAllBytes(),
                        java.nio.charset.StandardCharsets.UTF_8);
                throw new IOException("Error generando PDF (python, código " + exitCode + "): " + errorOutput);
            }
            return Files.readAllBytes(pdfTemp);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IOException("Generación de PDF interrumpida", e);
        } finally {
            try { Files.deleteIfExists(htmlTemp); } catch (IOException ignore) {}
            try { Files.deleteIfExists(pdfTemp);  } catch (IOException ignore) {}
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // MÉTODOS DE SOPORTE PÚBLICO
    // ─────────────────────────────────────────────────────────────────

    public List<Student> getStudentsByGradeAndClassroom(String grade, String classroom) {
        return studentRepository.findByGradeAndClassGroup(grade, classroom);
    }

    public List<String> getSubjectsByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period) {
        return subjectGradeRepository
                .findDistinctSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom, period);
    }

    public List<String> getAllSubjectsByGradeAndClassroom(String grade, String classroom) {
        return subjectGradeRepository.findDistinctSubjectNamesByGradeAndClassroom(grade, classroom);
    }

    /**
     * Devuelve las materias que corresponden al grado del estudiante, filtradas
     * por el nivel académico (primaria / bachillerato / media):
     *
     * <ul>
     *   <li>Grados 1-5  → materias con level = "primaria" (rango 1-5)</li>
     *   <li>Grados 6-9  → materias con level = "bachillerato" y rango 6-9</li>
     *   <li>Grados 10-11 → materias con level = "media" (las "iguales" a bachillerato
     *       pero impartidas por otro profesor)</li>
     * </ul>
     *
     * Si el filtro por nivel no devuelve nada (caso de una instalación sin seed de
     * media), hace fallback a la búsqueda en {@code subject_grades}.
     */
    public List<String> getSubjectsFilteredByGradeAndClassroom(String grade, String classroom) {
        int gradeNum = parseGradeNumber(grade);
        String level = resolveLevelForGrade(gradeNum);

        if (level != null && gradeNum > 0) {
            List<Subject> subjects = subjectRepository.findByLevelAndGradeRange(level, gradeNum);
            if (!subjects.isEmpty()) {
                return subjects.stream()
                        .map(Subject::getName)
                        .distinct()
                        .sorted()
                        .collect(Collectors.toList());
            }
        }

        // Fallback: las materias con notas registradas en el grupo
        return getAllSubjectsByGradeAndClassroom(grade, classroom);
    }

    /** Devuelve el nivel académico correspondiente al grado numérico. */
    private String resolveLevelForGrade(int gradeNum) {
        if (gradeNum <= 0) return null;
        if (gradeNum >= 1 && gradeNum <= 5) return "primaria";
        if (gradeNum >= 6 && gradeNum <= 9) return "bachillerato";
        if (gradeNum >= 10 && gradeNum <= 11) return "media";
        return null;
    }

    /** Busca el N.FINAL guardado en BD para (estudiante, materia, período);
     *  si no está guardado, lo calcula con la fórmula 80% actividades +
     *  20% evaluación. Se reutiliza tanto para el período del boletín como
     *  para los períodos anteriores (necesarios para el Acumulado). */
    private Double fetchOrComputeNFinal(Long studentId, String subject, int period) {
        List<SubjectGrade> nFinalGrades = subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectNameAndGradeName(
                studentId, period, subject, "nFinal");
        if (!nFinalGrades.isEmpty() && nFinalGrades.get(0).getGradeValue() != null) {
            return nFinalGrades.get(0).getGradeValue();
        }

        // Fallback: calcular N.FINAL si no está guardado en BD
        List<SubjectGrade> periodGrades = subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectName(studentId, period, subject);
        double sum80 = 0.0;
        int count80 = 0;
        Double eval20 = null;

        for (SubjectGrade gradeEntity : periodGrades) {
            String gradeName = gradeEntity.getGradeName() != null
                    ? gradeEntity.getGradeName().trim().toLowerCase() : "";
            if (Boolean.TRUE.equals(gradeEntity.getIsEvaluation())) {
                eval20 = gradeEntity.getGradeValue();
            } else if (gradeName.startsWith("act") && gradeName.length() <= 4) {
                if (gradeEntity.getGradeValue() != null) {
                    sum80 += gradeEntity.getGradeValue();
                    count80++;
                }
            }
        }

        if (count80 > 0 && eval20 != null) {
            double avg80 = sum80 / count80;
            return (avg80 * 0.8) + (eval20 * 0.2);
        }
        return null;
    }

    public BoletinData prepareBoletinData(Long studentId, String grade, String classroom, Integer period) {

        Student student = studentRepository.findById(studentId).orElse(null);
        if (student == null) return null;

        // Filtra las materias según el rango del grado del estudiante:
        // 1-5 → primaria, 6-9 → bachillerato, 10-11 → media
        List<String> subjects = getSubjectsFilteredByGradeAndClassroom(grade, classroom);
        List<SubjectData> subjectDataList = new ArrayList<>();
        double totalNotas  = 0.0;
        int    subjectCount = 0;
        List<String> lostAreas = new ArrayList<>();

        for (String subject : subjects) {

            Double ih = null, fa = null, faa = null;

            // IH / FA / FAA no dependen del período del boletín — se buscan
            // en cualquiera de los 4 períodos donde estén guardados.
            for (int p = 1; p <= 4; p++) {
                List<SubjectGrade> grades =
                        subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectName(studentId, p, subject);

                for (SubjectGrade gradeEntity : grades) {
                    String gradeName = gradeEntity.getGradeName() != null
                            ? gradeEntity.getGradeName().trim().toLowerCase() : "";

                    if (gradeName.equals("ih")) {
                        ih = gradeEntity.getGradeValue();
                    } else if (gradeName.equals("fa")) {
                        fa = gradeEntity.getGradeValue();
                    } else if (gradeName.equals("faa")) {
                        faa = gradeEntity.getGradeValue();
                    }
                }
            }

            // N.FINAL del período del boletín (guardado en BD, o calculado
            // como 80% actividades + 20% evaluación si no está guardado).
            Double nFinal = fetchOrComputeNFinal(studentId, subject, period);

            // ── Notas de cada período ya visto (1..período actual) + Acumulado
            //    Si ya se generaron/calcularon los períodos anteriores (p.ej.
            //    estamos en el período 4 y 1, 2 y 3 ya tienen nota), esas
            //    notas también se muestran en su respectivo recuadro de Rf
            //    (no solo la del período actual). Los períodos futuros
            //    (después del actual) quedan en blanco porque todavía no
            //    tienen nota.
            Double p1 = null, p2 = null, p3 = null, p4 = null;
            double acumuladoSum = 0.0;
            boolean tieneAlgunaNotaAcumulada = false;
            for (int p = 1; p <= period; p++) {
                Double notaPeriodoP = (p == period) ? nFinal : fetchOrComputeNFinal(studentId, subject, p);
                switch (p) {
                    case 1 -> p1 = notaPeriodoP;
                    case 2 -> p2 = notaPeriodoP;
                    case 3 -> p3 = notaPeriodoP;
                    case 4 -> p4 = notaPeriodoP;
                }
                if (notaPeriodoP != null) {
                    acumuladoSum += notaPeriodoP * 0.25;
                    tieneAlgunaNotaAcumulada = true;
                }
            }
            Double acumulado = tieneAlgunaNotaAcumulada ? acumuladoSum : null;

            SubjectData sd = new SubjectData();
            sd.setSubjectName(subject);
            sd.setPeriod1(p1);
            sd.setPeriod2(p2);
            sd.setPeriod3(p3);
            sd.setPeriod4(p4);
            sd.setnFinal(nFinal);
            sd.setAcumulado(acumulado);
            sd.setIh(ih);
            sd.setFa(fa);
            sd.setFaa(faa);
            subjectDataList.add(sd);

            if (nFinal != null) {
                totalNotas += nFinal;
                subjectCount++;
                if (nFinal < 3.5) {
                    lostAreas.add(subject);
                }
            }
        }

        Double average = subjectCount > 0 ? totalNotas / subjectCount : null;

        // ── Cálculo automático de Comportamiento Social ──────────────
        //    Se promedian los valores numéricos de comp_social de todas las
        //    materias del boletín del estudiante en el período y se convierte a letra.
        String calculatedCompSocial = calculateAverageCompSocial(studentId, period, subjects);

        // ── Acumulado de Comportamiento Social, calculado igual que una
        //    materia: suma de (nota_periodo × 0.25) por cada período ya
        //    visto. Como Comportamiento Social se guarda como letra (no
        //    como número), se convierte con la misma escala que ya usa
        //    calculateAverageCompSocial (S=5.0, E=4.0, B=3.5, A=3.0, I=1.0).
        double csAcumuladoSum = 0.0;
        boolean tieneCsAcumulado = false;
        for (int p = 1; p <= period; p++) {
            String letraP = (p == period) ? calculatedCompSocial : calculateAverageCompSocial(studentId, p, subjects);
            Double numP = compSocialLetterToNumber(letraP);
            if (numP != null) {
                csAcumuladoSum += numP * 0.25;
                tieneCsAcumulado = true;
            }
        }
        Double compSocialAcumulado = tieneCsAcumulado ? csAcumuladoSum : null;

        // ── Puesto en el grupo ────────────────────────────────────────
        List<Student> allStudents = getStudentsByGradeAndClassroom(grade, classroom);
        allStudents.sort((a, b) -> {
            Double avgA = calculateStudentAverage(a.getId(), period);
            Double avgB = calculateStudentAverage(b.getId(), period);
            if (avgA == null && avgB == null) return 0;
            if (avgA == null) return 1;
            if (avgB == null) return -1;
            return avgB.compareTo(avgA);
        });
        int rank = 1;
        for (int i = 0; i < allStudents.size(); i++) {
            if (allStudents.get(i).getId().equals(studentId)) {
                rank = i + 1;
                break;
            }
        }

        // ── Construcción del BoletinData ──────────────────────────────
        BoletinData bd = new BoletinData();
        bd.setStudent(student);
        bd.setGrade(grade);
        bd.setClassroom(classroom);
        bd.setPeriod(period);
        bd.setCity("Cartagena");
        bd.setJornada("ÚNICA");
        bd.setSchoolYear(String.valueOf(java.time.Year.now().getValue()));
        bd.setAcademicLevel(getAcademicLevel(grade));
        bd.setNLista(getStudentListNumber(studentId, grade, classroom));
        bd.setSubjects(subjectDataList);
        bd.setAverage(average);
        bd.setCompSocial(calculatedCompSocial);
        bd.setCompSocialAcumulado(compSocialAcumulado);
        bd.setRank(rank);
        bd.setLostAreas(lostAreas);

        return bd;
    }

    // Obtiene el número de lista del estudiante ordenando por apellido
    private Integer getStudentListNumber(Long studentId, String grade, String classroom) {
        List<Student> students = getStudentsByGradeAndClassroom(grade, classroom);
        students.sort(Comparator.comparing(s -> nvl(s.getSurname(), "")));
        for (int i = 0; i < students.size(); i++) {
            if (students.get(i).getId().equals(studentId)) return i + 1;
        }
        return null;
    }

    public Double calculateStudentAverage(Long studentId, Integer period) {
        String grade     = getStudentGrade(studentId);
        String classroom = getStudentClassroom(studentId);
        if (grade == null || classroom == null) return null;

        List<String> subjects = getAllSubjectsByGradeAndClassroom(grade, classroom);
        double sum   = 0.0;
        int    count = 0;

        for (String subject : subjects) {
            List<SubjectGrade> grades =
                    subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectName(studentId, period, subject);

            boolean usado = false;
            for (SubjectGrade sg : grades) {
                if ("nFinal".equalsIgnoreCase(sg.getGradeName()) && sg.getGradeValue() != null) {
                    sum += sg.getGradeValue();
                    count++;
                    usado = true;
                    break;
                }
            }
            if (usado) continue;

            for (SubjectGrade sg : grades) {
                if (Boolean.TRUE.equals(sg.getIsEvaluation()) && sg.getGradeValue() != null) {
                    sum += sg.getGradeValue();
                    count++;
                    break;
                }
            }
        }
        return count > 0 ? sum / count : null;
    }

    public String calculateAverageCompSocial(Long studentId, Integer period, List<String> subjects) {
        List<String> validLetters = new ArrayList<>();
        for (String subject : subjects) {
            java.util.Optional<RecoveryData> rdOpt = recoveryDataRepository
                    .findFirstByStudentIdAndSubjectNameAndPeriod(studentId, subject, period);
            if (rdOpt.isEmpty()) continue;

            RecoveryData rd = rdOpt.get();
            String cs = rd.getCompSocial();
            if (cs != null && !cs.isBlank()) {
                String upper = cs.trim().toUpperCase();
                if (Set.of("E", "S", "A", "B", "I").contains(upper)) {
                    validLetters.add(upper);
                }
            }
        }

        if (validLetters.isEmpty()) return "";

        double sum = 0.0;
        for (String letter : validLetters) {
            sum += switch (letter) {
                case "S" -> 5.0;
                case "E" -> 4.0;
                case "A" -> 3.0;
                case "I" -> 1.0;
                default -> 0.0;
            };
        }

        double avg = sum / validLetters.size();
        if (avg >= 4.5) return "S";
        if (avg >= 3.5) return "E";
        if (avg >= 2.5) return "A";
        if (avg >= 1.0) return "I";
        return "I";
    }

    /** Convierte la letra de Comportamiento Social a un número, con la misma
     *  escala que ya usa calculateAverageCompSocial (S=5.0, E=4.0, A=3.0,
     *  I=1.0). Esa escala no traía un valor para "B" (Bueno): se usa 3.5,
     *  entre E y A, siguiendo el orden lógico de la escala existente. */
    private Double compSocialLetterToNumber(String letra) {
        if (letra == null || letra.isBlank()) return null;
        return switch (letra.trim().toUpperCase()) {
            case "S" -> 5.0;
            case "E" -> 4.0;
            case "B" -> 3.5;
            case "A" -> 3.0;
            case "I" -> 1.0;
            default  -> null;
        };
    }

    public BoletinDraft saveDraft(String grade, String classroom, Integer period, String schoolYear, String payload) {
        BoletinDraft draft = boletinDraftRepository
                .findFirstByGradeAndClassroomAndPeriodOrderByUpdatedAtDesc(grade, classroom, period)
                .orElse(new BoletinDraft());
        draft.setGrade(grade);
        draft.setClassroom(classroom);
        draft.setPeriod(period);
        draft.setSchoolYear(schoolYear);
        draft.setPayload(payload);
        return boletinDraftRepository.save(draft);
    }

    public List<BoletinDraft> getDrafts(String grade, String classroom) {
        return boletinDraftRepository.findByGradeAndClassroomOrderByUpdatedAtDesc(grade, classroom);
    }

    public Optional<BoletinDraft> getLatestDraft(String grade, String classroom, Integer period) {
        return boletinDraftRepository.findFirstByGradeAndClassroomAndPeriodOrderByUpdatedAtDesc(grade, classroom, period);
    }

    public BoletinDraft getDraftById(Long id) {
        return boletinDraftRepository.findById(id).orElse(null);
    }

    private String getStudentGrade(Long studentId) {
        Student s = studentRepository.findById(studentId).orElse(null);
        return s != null ? s.getGrade() : null;
    }

    private String getStudentClassroom(Long studentId) {
        Student s = studentRepository.findById(studentId).orElse(null);
        return s != null ? s.getClassGroup() : null;
    }

    /** Aplica indicadores (IH, FA, FAA, objetivo) enviados desde el Frontend */
    public void applySubjectIndicators(BoletinData data, List<Map<String, Object>> studentSubjectIndicators) {
        if (data == null || studentSubjectIndicators == null) return;
        for (Map<String, Object> ind : studentSubjectIndicators) {
            String name = (String) ind.get("subjectName");
            if (name == null) continue;

            // ── Materia virtual: Valoración Acudiente ──────────────────
            // El usuario la edita en el formulario como si fuera una materia
            // más, pero en el boletín se renderiza en el bloque de cierre
            // (no como una fila de materia normal).
            if (VALORACION_ACUDIENTE.equalsIgnoreCase(name)) {
                if (ind.get("ih")  != null) data.setValoracionAcudienteIh (toDouble(ind.get("ih")));
                if (ind.get("fa")  != null) data.setValoracionAcudienteFa (toDouble(ind.get("fa")));
                if (ind.get("faa") != null) data.setValoracionAcudienteFaa(toDouble(ind.get("faa")));
                Object objV = ind.get("objetivoPeriodo");
                if (objV != null) {
                    String s = objV.toString().trim();
                    if (!s.isEmpty()) data.setValoracionAcudienteObjetivo(s);
                }
                continue;
            }

            if (data.getSubjects() == null) continue;
            for (SubjectData sd : data.getSubjects()) {
                if (!sd.getSubjectName().equalsIgnoreCase(name)) continue;
                if (ind.get("ih")  != null) sd.setIh( toDouble(ind.get("ih")));
                if (ind.get("fa")  != null) sd.setFa( toDouble(ind.get("fa")));
                if (ind.get("faa") != null) sd.setFaa(toDouble(ind.get("faa")));
                String obj = ind.get("objetivoPeriodo") != null
                        ? ind.get("objetivoPeriodo").toString().trim() : null;
                if (obj != null && !obj.isEmpty()) sd.setObjetivoPeriodo(obj);
                break;
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────
    // FIRMAS
    // ─────────────────────────────────────────────────────────────────

    public List<String> listSignatures() {
        try {
            Path dir = resolveFirmaDir();
            if (!Files.exists(dir)) return new ArrayList<>();
            return Files.list(dir)
                    .filter(Files::isRegularFile)
                    .map(p -> "/Firmas/" + p.getFileName().toString())
                    .collect(Collectors.toList());
        } catch (IOException e) {
            return new ArrayList<>();
        }
    }

    public String saveSignature(byte[] bytes, String originalFilename) throws IOException {
        Path dir = resolveFirmaDir();
        String ext = "";
        if (originalFilename != null) {
            int dot = originalFilename.lastIndexOf('.');
            if (dot > 0) ext = originalFilename.substring(dot);
        }
        String filename = "signature_" + System.currentTimeMillis() + ext;
        Path target = dir.resolve(filename);
        Files.write(target, bytes);
        return "/Firmas/" + filename;
    }

    // ─────────────────────────────────────────────────────────────────
    // NIVEL ACADÉMICO
    // ─────────────────────────────────────────────────────────────────

    public AcademicLevel getAcademicLevel(String grade) {
        if (grade == null) return AcademicLevel.PRIMARIA;
        int gradeNum = parseGradeNumber(grade);
        return gradeNum >= 9 ? AcademicLevel.BACHILLERATO : AcademicLevel.PRIMARIA;
    }

    private int parseGradeNumber(String grade) {
        if (grade == null) return 0;
        String num = grade.replaceAll("[^0-9]", "");
        return num.isEmpty() ? 0 : Integer.parseInt(num);
    }

    // ─────────────────────────────────────────────────────────────────
    // UTILIDADES PRIVADAS
    // ─────────────────────────────────────────────────────────────────

    /** Escala valorativa institucional corregida:
     *  SUPERIOR 4.6 – 5.0 | ALTO 4.0 – 4.5 | BÁSICO 3.5 – 3.9 | BAJO 1.0 – 3.4 */
    private String valorLabel(Double grade) {
        if (grade == null) return "N.A";
        if (grade >= 4.6) return "SUPERIOR";
        if (grade >= 4.0) return "ALTO";
        if (grade >= 3.5) return "BASICO";
        if (grade >= 1.0) return "BAJO";
        return "N.A";
    }

    /** Letra inicial de la escala valorativa */
    private String scaleLetter(Double grade) {
        if (grade == null || grade <= 0) return "";
        if (grade >= 4.6) return "S";
        if (grade >= 4.0) return "A";
        if (grade >= 3.5) return "B";
        if (grade >= 1.0) return "J";   // Bajo — coincide con "BAJO (J)" de la leyenda
        return "";
    }

    /** Capitaliza la primera letra y el resto en minúsculas */
    private String capitalize(String s) {
        if (s == null || s.isEmpty()) return s;
        return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
    }

    /** Null-safe String getter */
    private String nvl(String value, String defaultValue) {
        return value != null ? value : defaultValue;
    }

    /**
     * Trunca (NO redondea) un valor numérico a la cantidad de decimales dada.
     * Ej: truncar(3.99999, 1) → "3.9"  (String.format redondearía a "4.0").
     * Se usa BigDecimal.valueOf(double) porque construye el BigDecimal a partir
     * de la representación String canónica del double, evitando los errores de
     * precisión binaria que aparecerían con `new BigDecimal(double)`.
     */
    private String truncar(Double value, int decimales) {
        if (value == null) return decimales == 1 ? "0" : "0,00";
        java.math.BigDecimal bd = java.math.BigDecimal.valueOf(value)
                .setScale(decimales, java.math.RoundingMode.DOWN);
        // El boletín usa formato numérico colombiano (coma decimal), no el
        // punto que produce BigDecimal.toPlainString() por defecto.
        return bd.toPlainString().replace('.', ',');
    }

    /** Conversión segura a Double desde Object */
    private Double toDouble(Object value) {
        if (value == null) return null;
        try { return ((Number) value).doubleValue(); }
        catch (ClassCastException e) { return null; }
    }

    private String escapeHtml(String s) {
        if (s == null) return "";
        return s.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#39;");
    }

    // ─────────────────────────────────────────────────────────────────
    // ENUMS Y CLASES INTERNAS
    // ─────────────────────────────────────────────────────────────────

    public enum AcademicLevel {
        PRIMARIA, BACHILLERATO
    }

    public static class BoletinData {
        private Student      student;
        private String       grade;
        private String       classroom;
        private Integer      period;
        private List<SubjectData> subjects = new ArrayList<>();
        private Double       average;
        private Integer      rank;
        private List<String> lostAreas = new ArrayList<>();
        private Integer      nLista;
        private String       city;
        private String       jornada;
        private AcademicLevel academicLevel;
        private String       schoolYear;
        private String       objetivoPeriodo;
        private String       valoracionAcudiente;
        private Integer      valoracionAcudienteNota;
        /** Indicadores IH / FA / FAA editados en el paso 1 del formulario
         *  bajo la materia virtual "Valoración Acudiente". Se renderizan en
         *  la fila correspondiente del PDF. */
        private Double       valoracionAcudienteIh;
        private Double       valoracionAcudienteFa;
        private Double       valoracionAcudienteFaa;
        /** Descripción / objetivo editable de la materia virtual. */
        private String       valoracionAcudienteObjetivo;
        private String       compSocial;
        private Double       compSocialAcumulado;
        private String       compSocialObjetivo;
        private String       compSocialIndicadores;
        private Double       compSocialIh;
        private Double       compSocialFa;
        private Double       compSocialFaa;
        private String       leftSignaturePath;
        private String       rightSignaturePath;

        // ── Getters y setters ─────────────────────────────────────────
        public Student getStudent()                           { return student; }
        public void setStudent(Student s)                     { this.student = s; }
        public String getGrade()                              { return grade; }
        public void setGrade(String g)                        { this.grade = g; }
        public String getClassroom()                          { return classroom; }
        public void setClassroom(String c)                    { this.classroom = c; }
        public Integer getPeriod()                            { return period; }
        public void setPeriod(Integer p)                      { this.period = p; }
        public List<SubjectData> getSubjects()                { return subjects; }
        public void setSubjects(List<SubjectData> s)          { this.subjects = s; }
        public Double getAverage()                            { return average; }
        public void setAverage(Double a)                      { this.average = a; }
        public Integer getRank()                              { return rank; }
        public void setRank(Integer r)                        { this.rank = r; }
        public List<String> getLostAreas()                    { return lostAreas; }
        public void setLostAreas(List<String> la)             { this.lostAreas = la; }
        public Integer getNLista()                            { return nLista; }
        public void setNLista(Integer n)                      { this.nLista = n; }
        public String getCity()                               { return city; }
        public void setCity(String c)                         { this.city = c; }
        public String getJornada()                            { return jornada; }
        public void setJornada(String j)                      { this.jornada = j; }
        public AcademicLevel getAcademicLevel()               { return academicLevel; }
        public void setAcademicLevel(AcademicLevel al)        { this.academicLevel = al; }
        public String getSchoolYear()                         { return schoolYear; }
        public void setSchoolYear(String sy)                  { this.schoolYear = sy; }
        public String getObjetivoPeriodo()                    { return objetivoPeriodo; }
        public void setObjetivoPeriodo(String op)             { this.objetivoPeriodo = op; }
        public String getValoracionAcudiente()                { return valoracionAcudiente; }
        public void setValoracionAcudiente(String va)         { this.valoracionAcudiente = va; }
        public Integer getValoracionAcudienteNota()           { return valoracionAcudienteNota; }
        public void setValoracionAcudienteNota(Integer van)   { this.valoracionAcudienteNota = van; }
        public Double getValoracionAcudienteIh()              { return valoracionAcudienteIh; }
        public void setValoracionAcudienteIh(Double vih)      { this.valoracionAcudienteIh = vih; }
        public Double getValoracionAcudienteFa()              { return valoracionAcudienteFa; }
        public void setValoracionAcudienteFa(Double vfa)      { this.valoracionAcudienteFa = vfa; }
        public Double getValoracionAcudienteFaa()             { return valoracionAcudienteFaa; }
        public void setValoracionAcudienteFaa(Double vfaa)    { this.valoracionAcudienteFaa = vfaa; }
        public String getValoracionAcudienteObjetivo()        { return valoracionAcudienteObjetivo; }
        public void setValoracionAcudienteObjetivo(String vo) { this.valoracionAcudienteObjetivo = vo; }
        public String getCompSocial()                         { return compSocial; }
        public void setCompSocial(String cs)                  { this.compSocial = cs; }
        public Double getCompSocialAcumulado()                { return compSocialAcumulado; }
        public void setCompSocialAcumulado(Double csa)        { this.compSocialAcumulado = csa; }
        public String getCompSocialObjetivo()                 { return compSocialObjetivo; }
        public void setCompSocialObjetivo(String cso)         { this.compSocialObjetivo = cso; }
        public String getCompSocialIndicadores()              { return compSocialIndicadores; }
        public void setCompSocialIndicadores(String csi)      { this.compSocialIndicadores = csi; }
        public Double getCompSocialIh()                       { return compSocialIh; }
        public void setCompSocialIh(Double ih)                { this.compSocialIh = ih; }
        public Double getCompSocialFa()                       { return compSocialFa; }
        public void setCompSocialFa(Double fa)                { this.compSocialFa = fa; }
        public Double getCompSocialFaa()                      { return compSocialFaa; }
        public void setCompSocialFaa(Double faa)              { this.compSocialFaa = faa; }
        public String getLeftSignaturePath()                  { return leftSignaturePath; }
        public void setLeftSignaturePath(String lsp)          { this.leftSignaturePath = lsp; }
        public String getRightSignaturePath()                 { return rightSignaturePath; }
        public void setRightSignaturePath(String rsp)         { this.rightSignaturePath = rsp; }
    }

    public static class SubjectData {
        private String subjectName;
        private Double period1;
        private Double period2;
        private Double period3;
        private Double period4;
        private Double nFinal;
        private String nFinalLetter;
        private Double acumulado;
        private Double ih;
        private Double fa;
        private Double faa;
        private String objetivoPeriodo;

        public String getSubjectName()                   { return subjectName; }
        public void setSubjectName(String sn)            { this.subjectName = sn; }
        public Double getPeriod1()                       { return period1; }
        public void setPeriod1(Double p1)                { this.period1 = p1; }
        public Double getPeriod2()                       { return period2; }
        public void setPeriod2(Double p2)                { this.period2 = p2; }
        public Double getPeriod3()                       { return period3; }
        public void setPeriod3(Double p3)                { this.period3 = p3; }
        public Double getPeriod4()                       { return period4; }
        public void setPeriod4(Double p4)                { this.period4 = p4; }
        public Double getnFinal()                        { return nFinal; }
        public void setnFinal(Double nf)                 { this.nFinal = nf; }
        public String getnFinalLetter()                  { return nFinalLetter; }
        public void setnFinalLetter(String nfl)          { this.nFinalLetter = nfl; }
        public Double getAcumulado()                     { return acumulado; }
        public void setAcumulado(Double a)               { this.acumulado = a; }
        public Double getIh()                            { return ih; }
        public void setIh(Double ih)                     { this.ih = ih; }
        public Double getFa()                            { return fa; }
        public void setFa(Double fa)                     { this.fa = fa; }
        public Double getFaa()                           { return faa; }
        public void setFaa(Double faa)                   { this.faa = faa; }
        public String getObjetivoPeriodo()               { return objetivoPeriodo; }
        public void setObjetivoPeriodo(String op)        { this.objetivoPeriodo = op; }
    }
}