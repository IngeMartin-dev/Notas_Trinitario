package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> list() {
        return studentService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return studentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Student s) {
        if (s.getDocumentNumber() != null && !s.getDocumentNumber().isBlank()) {
            Student existing = studentService.findByDocumentNumber(s.getDocumentNumber().trim())
                    .orElse(null);
            if (existing != null) {
                existing.setName(s.getName());
                existing.setSurname(s.getSurname());
                existing.setGrade(s.getGrade());
                existing.setClassGroup(s.getClassGroup());
                existing.setActive(Boolean.TRUE.equals(s.isActive()));
                Student updated = studentService.save(existing);
                return ResponseEntity.ok(updated);
            }
        }
        Student created = studentService.save(s);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Student s) {
        return studentService.findById(id)
                .map(existing -> {
                    existing.setName(s.getName());
                    existing.setSurname(s.getSurname());
                    if (s.getDocumentNumber() != null) {
                        existing.setDocumentNumber(s.getDocumentNumber());
                    }
                    existing.setActive(Boolean.TRUE.equals(s.isActive()));
                    Student saved = studentService.save(existing);
                    return ResponseEntity.ok(saved);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        studentService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/grade/{grade}/class/{classGroup}")
    public List<Student> findByGradeAndClassGroup(@PathVariable String grade, @PathVariable String classGroup) {
        return studentService.findByGradeAndClassGroup(grade, classGroup);
    }

    @GetMapping("/debug/all")
    public List<Student> getAllStudentsDebug() {
        List<Student> allStudents = studentService.findAll();
        System.out.println("=== DEBUG: Total students in database: " + allStudents.size());
        for (Student student : allStudents) {
            if (Boolean.FALSE.equals(student.isActive())) {
                student.setActive(true);
                studentService.save(student);
            }
            System.out.println("Student: " + student.getName() + " " + student.getSurname() + 
                             " | Grade: '" + student.getGrade() + 
                             "' | Classroom: '" + student.getClassGroup() + "'");
        }
        return allStudents;
    }

    @GetMapping("/debug/grades")
    public List<String> getAllGradesDebug() {
        return studentService.findAll().stream()
                .map(Student::getGrade)
                .distinct()
                .sorted()
                .collect(java.util.stream.Collectors.toList());
    }

    @GetMapping("/debug/classrooms")
    public List<String> getAllClassroomsDebug() {
        return studentService.findAll().stream()
                .map(Student::getClassGroup)
                .distinct()
                .sorted()
                .collect(java.util.stream.Collectors.toList());
    }

    @PostMapping("/populate-test-data")
    public String populateTestData() {
        // Check if we already have students
        if (!studentService.findAll().isEmpty()) {
            return "Students already exist in database";
        }
        
        // Create sample students
        String[][] testStudents = {
            {"Ana", "González", "Grado 1º", "Salon A", "100000001"},
            {"Carlos", "Pérez", "Grado 1º", "Salon A", "100000002"},
            {"María", "Rodríguez", "Grado 1º", "Salon B", "100000003"},
            {"Juan", "López", "Grado 1º", "Salon B", "100000004"},
            {"Luis", "Martín", "Grado 2º", "Salon A", "100000005"},
            {"Elena", "Sánchez", "Grado 2º", "Salon A", "100000006"},
            {"Pedro", "García", "Grado 3º", "Salon A", "100000007"},
            {"Carmen", "Fernández", "Grado 3º", "Salon A", "100000008"},
            {"Sofia", "Torres", "Grado 5º", "Salon A", "100000009"},
            {"Diego", "Ruiz", "Grado 5º", "Salon A", "100000010"},
            {"Andrea", "Jiménez", "Grado 10º", "Salon A", "100000011"},
            {"Roberto", "Moreno", "Grado 10º", "Salon A", "100000012"},
            {"Fernando", "Álvarez", "Grado 11º", "Salon A", "100000013"},
            {"Laura", "Castillo", "Grado 11º", "Salon A", "100000014"}
        };
        
        for (String[] studentData : testStudents) {
            Student student = new Student();
            student.setName(studentData[0]);
            student.setSurname(studentData[1]);
            student.setGrade(studentData[2]);
            student.setClassGroup(studentData[3]);
            student.setDocumentNumber(studentData[4]);
            studentService.save(student);
        }
        
        return "Test data populated successfully! " + testStudents.length + " students added.";
    }

    @GetMapping("/test-simple")
    public List<Student> getAllStudentsSimple() {
        List<Student> students = studentService.findAll();
        System.out.println("=== SIMPLE TEST: Found " + students.size() + " students ===");
        for (Student s : students) {
            System.out.println("Student: " + s.getName() + " " + s.getSurname() + 
                             " | Grade: '" + s.getGrade() + "' | Classroom: '" + s.getClassGroup() + "'");
        }
        return students;
    }

    @GetMapping("/test-debug")
    public String testDebug(@RequestParam String grade, @RequestParam String classroom) {
        List<Student> allStudents = studentService.findAll();
        List<Student> filteredStudents = studentService.findByGradeAndClassGroup(grade, classroom);
        
        StringBuilder sb = new StringBuilder();
        sb.append("=== DEBUG RESULTS ===<br>");
        sb.append("Total students in DB: ").append(allStudents.size()).append("<br>");
        sb.append("Looking for: Grade='").append(grade).append("', Classroom='").append(classroom).append("'<br>");
        sb.append("Found students: ").append(filteredStudents.size()).append("<br>");
        sb.append("<br>All students in DB:<br>");
        
        for (Student s : allStudents) {
            sb.append("- ").append(s.getName()).append(" ").append(s.getSurname())
              .append(" | Grade: '").append(s.getGrade()).append("' | Classroom: '").append(s.getClassGroup()).append("'<br>");
        }
        
        sb.append("<br>Filtered results:<br>");
        for (Student s : filteredStudents) {
            sb.append("- ").append(s.getName()).append(" ").append(s.getSurname()).append("<br>");
        }
        
        return sb.toString();
    }
}
