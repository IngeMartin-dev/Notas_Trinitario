package com.notastrinitario.app.service;

import com.notastrinitario.app.entity.SchoolYearConfig;
import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class SchoolYearService {

    private final SchoolYearConfigRepository schoolYearConfigRepository;
    private final StudentRepository studentRepository;
    private final SubjectGradeRepository subjectGradeRepository;
    private final RecoveryDataRepository recoveryDataRepository;
    private final RecoveryPlanRepository recoveryPlanRepository;
    private final ReportCardRepository reportCardRepository;
    private final ReportCardHistoryRepository reportCardHistoryRepository;
    private final BoletinDraftRepository boletinDraftRepository;
    private final ChatMessageRepository chatMessageRepository;
    private final GradeColumnConfigRepository gradeColumnConfigRepository;
    private final NotificationRepository notificationRepository;
    private final PeriodRepository periodRepository;
    private final HomeroomAssignmentRepository homeroomAssignmentRepository;

    private static final int GRADO_MAXIMO = 11;

    public SchoolYearService(SchoolYearConfigRepository schoolYearConfigRepository,
                              StudentRepository studentRepository,
                              SubjectGradeRepository subjectGradeRepository,
                              RecoveryDataRepository recoveryDataRepository,
                              RecoveryPlanRepository recoveryPlanRepository,
                              ReportCardRepository reportCardRepository,
                              ReportCardHistoryRepository reportCardHistoryRepository,
                              BoletinDraftRepository boletinDraftRepository,
                              ChatMessageRepository chatMessageRepository,
                              GradeColumnConfigRepository gradeColumnConfigRepository,
                              NotificationRepository notificationRepository,
                              PeriodRepository periodRepository,
                              HomeroomAssignmentRepository homeroomAssignmentRepository) {
        this.schoolYearConfigRepository = schoolYearConfigRepository;
        this.studentRepository = studentRepository;
        this.subjectGradeRepository = subjectGradeRepository;
        this.recoveryDataRepository = recoveryDataRepository;
        this.recoveryPlanRepository = recoveryPlanRepository;
        this.reportCardRepository = reportCardRepository;
        this.reportCardHistoryRepository = reportCardHistoryRepository;
        this.boletinDraftRepository = boletinDraftRepository;
        this.chatMessageRepository = chatMessageRepository;
        this.gradeColumnConfigRepository = gradeColumnConfigRepository;
        this.notificationRepository = notificationRepository;
        this.periodRepository = periodRepository;
        this.homeroomAssignmentRepository = homeroomAssignmentRepository;
    }

    @Transactional
    public SchoolYearConfig getConfig() {
        return schoolYearConfigRepository.findById(1L).orElseGet(() -> {
            SchoolYearConfig c = new SchoolYearConfig();
            c.setId(1L);
            c.setCurrentAcademicYear(LocalDate.now().getYear());
            return schoolYearConfigRepository.save(c);
        });
    }

    @Transactional
    public SchoolYearConfig updateConfig(LocalDate yearEndDate, Double minPassingGrade) {
        SchoolYearConfig config = getConfig();
        if (yearEndDate != null) {
            // Si cambia la fecha, se vuelve a avisar cuando se llegue a ella
            // (tanto el aviso final como el de "faltan 7 días").
            config.setYearEndDate(yearEndDate);
            config.setYearEndNotified(false);
            config.setYearEnd7dNotified(false);
        }
        if (minPassingGrade != null) {
            double clamped = Math.max(0.0, Math.min(5.0, minPassingGrade));
            config.setMinPassingGrade(clamped);
        }
        return schoolYearConfigRepository.save(config);
    }

    /**
     * Borra la informacion propia del ano escolar (notas, boletines,
     * recuperaciones, borradores, chats, configuraciones de columnas,
     * notificaciones, periodos) pero CONSERVA los estudiantes, su
     * documento de identidad y sus padres de familia enlazados, tal como
     * se pidio.
     */
    @Transactional
    public void wipeYearData() {
        subjectGradeRepository.deleteAllInBatch();
        recoveryDataRepository.deleteAllInBatch();
        recoveryPlanRepository.deleteAllInBatch();
        reportCardHistoryRepository.deleteAllInBatch();
        reportCardRepository.deleteAllInBatch();
        boletinDraftRepository.deleteAllInBatch();
        chatMessageRepository.deleteAllInBatch();
        gradeColumnConfigRepository.deleteAllInBatch();
        notificationRepository.deleteAllInBatch();
        periodRepository.deleteAll();
        homeroomAssignmentRepository.deleteAllInBatch();

        borrarCarpetaBoletinesGenerados();

        SchoolYearConfig config = getConfig();
        config.setLastWipedAt(LocalDateTime.now());
        config.setCurrentAcademicYear((config.getCurrentAcademicYear() != null ? config.getCurrentAcademicYear() : LocalDate.now().getYear()) + 1);
        config.setYearEndNotified(false); // listo para avisar de nuevo el próximo año
        schoolYearConfigRepository.save(config);
    }

    private void borrarCarpetaBoletinesGenerados() {
        try {
            Path dir = Path.of(System.getProperty("user.dir"), "Boletines Generados");
            if (Files.exists(dir)) {
                try (var walk = Files.walk(dir)) {
                    walk.sorted(Comparator.reverseOrder()).forEach(p -> {
                        try { Files.deleteIfExists(p); } catch (IOException ignored) { }
                    });
                }
            }
        } catch (IOException ignored) {
            // Si falla el borrado de PDFs no debe tumbar el resto del proceso de cierre de ano.
        }
    }

    // Extrae el numero de grado de textos como "Grado 7o" o "7".
    private Integer numeroGrado(String grade) {
        if (grade == null) return null;
        Matcher m = Pattern.compile("(\\d+)").matcher(grade);
        return m.find() ? Integer.valueOf(m.group(1)) : null;
    }

    private String formatearGrado(int numero) {
        return "Grado " + numero + "\u00ba";
    }

    public static class PromocionResultado {
        public int estudiantesPromovidos;
        public int estudiantesGraduados;
        public List<Map<String, Object>> pendientesDeOrganizar;
    }

    /**
     * Promueve a todos los estudiantes activos un grado hacia arriba
     * (Grado 7o -> Grado 8o, etc). Los de Grado 11o se marcan como
     * graduados (active = false) y no requieren organizacion de salon.
     * A los demas se les deja el salon vacio temporalmente: hay que
     * llamar a assignClassrooms(...) para distribuirlos en A/B.
     */
    @Transactional
    public PromocionResultado advanceYear() {
        List<Student> estudiantes = studentRepository.findAll().stream()
                .filter(Student::isActive)
                .collect(Collectors.toList());

        PromocionResultado resultado = new PromocionResultado();
        resultado.pendientesDeOrganizar = new ArrayList<>();

        for (Student s : estudiantes) {
            Integer numero = numeroGrado(s.getGrade());
            if (numero == null) continue;

            s.setPreviousGrade(s.getGrade());
            s.setPreviousClassGroup(s.getClassGroup());

            if (numero >= GRADO_MAXIMO) {
                s.setActive(false);
                resultado.estudiantesGraduados++;
            } else {
                int nuevoNumero = Math.min(GRADO_MAXIMO, numero + 1);
                s.setGrade(formatearGrado(nuevoNumero));
                s.setClassGroup(null);
                resultado.estudiantesPromovidos++;

                Map<String, Object> pendiente = new LinkedHashMap<>();
                pendiente.put("studentId", s.getId());
                pendiente.put("name", s.getName());
                pendiente.put("surname", s.getSurname());
                pendiente.put("newGrade", s.getGrade());
                resultado.pendientesDeOrganizar.add(pendiente);
            }
        }

        studentRepository.saveAll(estudiantes);

        SchoolYearConfig config = getConfig();
        config.setLastAdvancedAt(LocalDateTime.now());
        config.setAdvancePendingClassroomOrg(!resultado.pendientesDeOrganizar.isEmpty());
        schoolYearConfigRepository.save(config);

        resultado.pendientesDeOrganizar.sort(Comparator.comparing(m -> (String) m.get("surname")));

        return resultado;
    }

    /** Estudiantes promovidos que todavia no tienen salon asignado (classGroup = null). */
    public List<Student> getPendientesDeOrganizar() {
        return studentRepository.findAll().stream()
                .filter(Student::isActive)
                .filter(s -> s.getClassGroup() == null && s.getPreviousGrade() != null)
                .sorted(Comparator.comparing(Student::getGrade, Comparator.nullsLast(String::compareTo))
                        .thenComparing(Student::getSurname, Comparator.nullsLast(String::compareToIgnoreCase)))
                .collect(Collectors.toList());
    }

    /** Aplica la distribucion A/B decidida por el administrador. */
    @Transactional
    public int assignClassrooms(Map<Long, String> asignaciones) {
        int aplicados = 0;
        for (Map.Entry<Long, String> entry : asignaciones.entrySet()) {
            Optional<Student> opt = studentRepository.findById(entry.getKey());
            if (opt.isPresent()) {
                Student s = opt.get();
                s.setClassGroup(entry.getValue());
                studentRepository.save(s);
                aplicados++;
            }
        }
        boolean quedanPendientes = !getPendientesDeOrganizar().isEmpty();
        SchoolYearConfig config = getConfig();
        config.setAdvancePendingClassroomOrg(quedanPendientes);
        schoolYearConfigRepository.save(config);

        return aplicados;
    }

    /**
     * Deshace el ultimo "adelantar ano": regresa a cada estudiante a su
     * grado y salon anteriores (un solo nivel de deshacer, tal como se
     * guardo en previousGrade/previousClassGroup).
     */
    @Transactional
    public int revertYear() {
        List<Student> todos = studentRepository.findAll();
        int revertidos = 0;
        for (Student s : todos) {
            if (s.getPreviousGrade() != null) {
                s.setGrade(s.getPreviousGrade());
                s.setClassGroup(s.getPreviousClassGroup());
                s.setPreviousGrade(null);
                s.setPreviousClassGroup(null);
                s.setActive(true);
                revertidos++;
            }
        }
        studentRepository.saveAll(todos);

        SchoolYearConfig config = getConfig();
        config.setAdvancePendingClassroomOrg(false);
        schoolYearConfigRepository.save(config);

        return revertidos;
    }

    /** true si hoy ya se alcanzó (o pasó) la fecha de fin de año configurada. */
    public boolean seAlcanzoFechaFinDeAno() {
        SchoolYearConfig config = getConfig();
        return config.getYearEndDate() != null && !LocalDate.now().isBefore(config.getYearEndDate());
    }

    /** Marca que ya se notificó a los administradores (para no repetir el aviso cada día). */
    @Transactional
    public void marcarFechaFinDeAnoNotificada() {
        SchoolYearConfig config = getConfig();
        config.setYearEndNotified(true);
        schoolYearConfigRepository.save(config);
    }

    /** true si hoy está dentro de los 7 días previos (inclusive) a la fecha de fin de año, y aún no llegó. */
    public boolean faltanSieteDiasParaFinDeAno() {
        SchoolYearConfig config = getConfig();
        if (config.getYearEndDate() == null) return false;
        LocalDate hoy = LocalDate.now();
        LocalDate limite = config.getYearEndDate().minusDays(7);
        return hoy.isBefore(config.getYearEndDate()) && !hoy.isBefore(limite);
    }

    /** Marca que ya se avisó que faltan 7 días para el fin de año. */
    @Transactional
    public void marcarAviso7dFinDeAno() {
        SchoolYearConfig config = getConfig();
        config.setYearEnd7dNotified(true);
        schoolYearConfigRepository.save(config);
    }
}