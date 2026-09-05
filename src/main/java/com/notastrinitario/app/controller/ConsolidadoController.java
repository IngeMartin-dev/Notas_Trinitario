package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.service.BoletinService;
import com.notastrinitario.app.service.ConsolidadoService;
import com.notastrinitario.app.service.NotificationService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

/**
 * Consolidado de grado/salón — REEMPLAZA a ReporteController (antiguo
 * "Reportes" del sidebar, ahora renombrado a "Consolidado").
 *
 * Diferencias clave frente al ReporteController anterior:
 *   - El HTML ya no se arma por concatenación de strings en el
 *     controller: se delega a ConsolidadoService, que usa la plantilla
 *     externa con marcadores {{...}} de "Consolidado Base/" (mismo
 *     patrón que BoletinService con "Boletin Base/BoletinBaseS++.html").
 *   - Máximo 32 estudiantes por página (paginación automática si el
 *     salón tiene más).
 *   - Se calculan PROM. y PUESTO por estudiante (el reporte antiguo solo
 *     mostraba la nota de cada materia, sin promedio ni puesto).
 *
 * Mismo criterio de acceso que el "Reportes" original: solo Administrador
 * y Director de Grupo.
 */
@RestController
@RequestMapping("/api/consolidado")
@PreAuthorize("hasAnyRole('ADMIN','DIRECTOR_DE_GRUPO')")
public class ConsolidadoController {

    private final BoletinService boletinService; // para reutilizar getStudentsByGradeAndClassroom / getSubjectsFilteredByGradeAndClassroom
    private final ConsolidadoService consolidadoService;
    private final NotificationService notificationService;

    public ConsolidadoController(BoletinService boletinService,
                                  ConsolidadoService consolidadoService,
                                  NotificationService notificationService) {
        this.boletinService = boletinService;
        this.consolidadoService = consolidadoService;
        this.notificationService = notificationService;
    }

    @GetMapping("/grado-salon")
    public ResponseEntity<?> consolidadoGradoSalon(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period) {
        try {
            List<Student> estudiantes = boletinService.getStudentsByGradeAndClassroom(grade, classroom);

            if (estudiantes.isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "No hay estudiantes matriculados en ese grado y salón"));
            }

            // Mismo orden que el reporte anterior: apellido, luego nombre.
            estudiantes.sort(Comparator.comparing(
                    (Student s) -> nvl(s.getSurname()), String.CASE_INSENSITIVE_ORDER
            ).thenComparing(s -> nvl(s.getName()), String.CASE_INSENSITIVE_ORDER));

            List<String> materias = boletinService.getSubjectsFilteredByGradeAndClassroom(grade, classroom);
            Collections.sort(materias);

            byte[] pdfBytes = consolidadoService.generarConsolidadoPDF(grade, classroom, period, estudiantes, materias);

            String fileName = "Consolidado_" + limpiarParaNombreArchivo(grade + "_" + classroom) + "_Periodo" + period + ".pdf";

            notificationService.notifyAdmins(
                    "Consolidado de calificaciones generado",
                    "Se generó el consolidado de " + grade + " " + classroom + " del Período " + period + ".",
                    "REPORT_GENERATED");

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                    .body(pdfBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    private String nvl(String s) { return s != null ? s : ""; }

    private String limpiarParaNombreArchivo(String texto) {
        if (texto == null) return "consolidado";
        String limpio = java.text.Normalizer.normalize(texto, java.text.Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "")
                .replaceAll("[^a-zA-Z0-9_]+", "_");
        return limpio.isBlank() ? "consolidado" : limpio;
    }
}