package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.entity.SubjectGrade;
import com.notastrinitario.app.entity.User;
import com.notastrinitario.app.repository.StudentRepository;
import com.notastrinitario.app.repository.SubjectGradeRepository;
import com.notastrinitario.app.repository.UserRepository;
import com.notastrinitario.app.service.SubjectGradeService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/grades")
public class SubjectGradeController {

    private final SubjectGradeService subjectGradeService;
    private final StudentRepository studentRepository;
    private final SubjectGradeRepository subjectGradeRepository;
    private final UserRepository userRepository;

    public SubjectGradeController(SubjectGradeService subjectGradeService, StudentRepository studentRepository,
            SubjectGradeRepository subjectGradeRepository, UserRepository userRepository) {
        this.subjectGradeService = subjectGradeService;
        this.studentRepository = studentRepository;
        this.subjectGradeRepository = subjectGradeRepository;
        this.userRepository = userRepository;
    }

    private Long getCurrentTeacherId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null
                && authentication.getPrincipal() instanceof User user
                && user.getRole() != null
                && "TEACHER".equalsIgnoreCase(user.getRole().getName())) {
            return user.getId();
        }
        return null;
    }

    private Long resolveTeacherId(Object requestTeacherId) {
        Long authenticatedTeacherId = getCurrentTeacherId();
        if (authenticatedTeacherId != null) {
            return authenticatedTeacherId;
        }
        if (requestTeacherId != null && !requestTeacherId.toString().isEmpty()) {
            return Long.valueOf(requestTeacherId.toString());
        }
        return null;
    }

    private Long resolveTeacherId(Long requestTeacherId) {
        Long authenticatedTeacherId = getCurrentTeacherId();
        return authenticatedTeacherId != null ? authenticatedTeacherId : requestTeacherId;
    }

    @PostMapping
    public ResponseEntity<?> saveGrade(@RequestBody Map<String, Object> request) {
        try {
            // Validate required fields
            if (request.get("studentId") == null || request.get("subjectName") == null
                    || request.get("period") == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Missing required fields"));
            }

            Long studentId = Long.valueOf(request.get("studentId").toString());
            String subjectName = request.get("subjectName").toString();
            Integer period = Integer.valueOf(request.get("period").toString());
            Long teacherId = resolveTeacherId(request.get("teacherId"));
            String gradeName = request.get("gradeName") != null ? request.get("gradeName").toString() : "Nota";
            Long subjectId = request.get("subjectId") != null && !request.get("subjectId").toString().isEmpty()
                    ? Long.valueOf(request.get("subjectId").toString()) : null;

            Double gradeValue = null;
            if (request.get("gradeValue") != null && !request.get("gradeValue").toString().isEmpty()) {
                gradeValue = Double.valueOf(request.get("gradeValue").toString());
                // Validate max grade of 5
                if (gradeValue > 5.0) {
                    gradeValue = 5.0;
                }
                if (gradeValue < 0.0) {
                    gradeValue = 0.0;
                }
            }

            Boolean isEvaluation = false;
            if (request.get("isEvaluation") != null) {
                isEvaluation = Boolean.valueOf(request.get("isEvaluation").toString());
            }

            String appreciative = null;
            if (request.get("appreciative") != null && !request.get("appreciative").toString().isEmpty()) {
                appreciative = request.get("appreciative").toString();
            }

            Optional<Student> studentOpt = studentRepository.findById(studentId);
            if (studentOpt.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Student not found"));
            }

            User teacher = null;
            if (teacherId != null) {
                teacher = userRepository.findById(teacherId).orElse(null);
                if (teacher == null) {
                    return ResponseEntity.badRequest().body(Map.of("error", "Teacher not found"));
                }
            }

            // Find existing grade or create new one (por subjectId cuando se conoce, para distinguir materias con el mismo nombre)
            List<SubjectGrade> existingGrades;
            if (subjectId != null) {
                existingGrades = teacherId != null
                        ? subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectNameAndGradeNameAndSubjectIdAndTeacher_Id(
                                studentId, period, subjectName, gradeName, subjectId, teacherId)
                        : subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectNameAndGradeNameAndSubjectId(
                                studentId, period, subjectName, gradeName, subjectId);
            } else {
                existingGrades = teacherId != null
                        ? subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectNameAndGradeNameAndTeacher_Id(
                                studentId, period, subjectName, gradeName, teacherId)
                        : subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectNameAndGradeName(
                                studentId, period, subjectName, gradeName);
            }

            // For nFinal, always keep the record even if value is null
            // For other grades, delete if value is null
            if (gradeValue == null && !existingGrades.isEmpty() && !"nFinal".equalsIgnoreCase(gradeName)) {
                subjectGradeRepository.deleteById(existingGrades.get(0).getId());
                return ResponseEntity.ok(Map.of("deleted", true, "message", "Grade deleted"));
            }

            SubjectGrade grade;
            if (!existingGrades.isEmpty()) {
                // Update existing grade - use the first one found
                grade = existingGrades.get(0);
            } else {
                // Create new grade
                grade = new SubjectGrade();
                grade.setStudent(studentOpt.get());
                grade.setTeacher(teacher);
                grade.setSubjectName(subjectName);
                grade.setPeriod(period);
                grade.setGradeName(gradeName);
            }

            grade.setGradeValue(gradeValue);
            grade.setIsEvaluation(isEvaluation);
            grade.setAppreciative(appreciative);
            grade.setSubjectId(subjectId);

            SubjectGrade saved = subjectGradeService.saveGrade(grade);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGrade(@PathVariable Long id) {
        subjectGradeService.deleteGrade(id);
        return ResponseEntity.ok(Map.of("deleted", id));
    }

    @GetMapping("/student/{studentId}")
    public List<SubjectGrade> getGradesByStudent(@PathVariable Long studentId) {
        return subjectGradeService.getGradesByStudentId(studentId);
    }

    @GetMapping("/student/{studentId}/period/{period}")
    public List<SubjectGrade> getGradesByStudentAndPeriod(
            @PathVariable Long studentId,
            @PathVariable Integer period) {
        return subjectGradeService.getGradesByStudentIdAndPeriod(studentId, period);
    }

    @GetMapping("/classroom")
    public ResponseEntity<?> getGradesByClassroom(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period,
            @RequestParam(required = false) Long teacherId,
            @RequestParam(required = false) String subjectName,
            @RequestParam(required = false) Long subjectId) {

        Long resolvedTeacherId = resolveTeacherId(teacherId);
        List<SubjectGrade> grades = subjectGradeService.getGradesByGradeAndClassroomAndPeriod(grade, classroom, period, resolvedTeacherId, subjectName, subjectId);
        List<Student> students = subjectGradeService.getStudentsByGradeAndClassroom(grade, classroom);
        List<String> subjects = subjectGradeService.getSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom,
                period, resolvedTeacherId);

        // Create simple student info list to avoid Hibernate lazy loading issues
        List<Map<String, Object>> studentInfoList = new ArrayList<>();
        for (Student s : students) {
            Map<String, Object> studentInfo = new HashMap<>();
            studentInfo.put("id", s.getId());
            studentInfo.put("name", s.getName());
            studentInfo.put("surname", s.getSurname());
            studentInfo.put("grade", s.getGrade());
            studentInfo.put("classGroup", s.getClassGroup());
            studentInfoList.add(studentInfo);
        }

        return ResponseEntity.ok(Map.of(
                "grades", grades,
                "students", studentInfoList,
                "subjects", subjects));
    }

    @GetMapping("/subjects")
    public ResponseEntity<?> getSubjects(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period,
            @RequestParam(required = false) Long teacherId) {

        List<String> subjects = subjectGradeService.getSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom,
                period, resolveTeacherId(teacherId));
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/grade-names")
    public ResponseEntity<?> getGradeNames(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period,
            @RequestParam String subjectName,
            @RequestParam(required = false) Long teacherId) {

        List<String> gradeNames = subjectGradeService.getGradeNamesByGradeClassroomPeriodAndSubject(
                grade, classroom, period, subjectName, resolveTeacherId(teacherId));
        return ResponseEntity.ok(gradeNames);
    }

    @GetMapping("/calculate")
    public ResponseEntity<?> calculateFinalGrade(
            @RequestParam Long studentId,
            @RequestParam Integer period,
            @RequestParam String subjectName,
            @RequestParam(required = false) Long teacherId) {

        Map<String, Object> result = subjectGradeService.calculateFinalGrade(studentId, period, subjectName, resolveTeacherId(teacherId));
        return ResponseEntity.ok(result);
    }

    @GetMapping("/calculate-all")
    public ResponseEntity<?> calculateAllFinalGrades(
            @RequestParam String grade,
            @RequestParam String classroom,
            @RequestParam Integer period,
            @RequestParam(required = false) Long teacherId) {

        Long resolvedTeacherId = resolveTeacherId(teacherId);
        List<Map<String, Object>> results = subjectGradeService.calculateAllFinalGrades(grade, classroom, period, resolvedTeacherId);
        List<String> subjects = subjectGradeService.getSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom,
                period, resolvedTeacherId);

        return ResponseEntity.ok(Map.of(
                "students", results,
                "subjects", subjects));
    }

    @GetMapping("/students")
    public ResponseEntity<?> getStudents(
            @RequestParam String grade,
            @RequestParam String classroom) {

        List<Student> students = subjectGradeService.getStudentsByGradeAndClassroom(grade, classroom);
        return ResponseEntity.ok(students);
    }

    @GetMapping("/count")
    public ResponseEntity<?> getGradesCount() {
        long count = subjectGradeRepository.count();
        return ResponseEntity.ok(Map.of("count", count));
    }

    @GetMapping("/count/teacher")
    public ResponseEntity<?> getGradesCountByTeacher() {
        Long teacherId = getCurrentTeacherId();
        if (teacherId != null) {
            long count = subjectGradeRepository.countByTeacher_Id(teacherId);
            return ResponseEntity.ok(Map.of("count", count));
        } else {
            // If not a teacher, return 0
            return ResponseEntity.ok(Map.of("count", 0));
        }
    }
}
