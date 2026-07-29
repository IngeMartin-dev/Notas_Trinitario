package com.notastrinitario.app.service;

import com.notastrinitario.app.entity.Student;
import com.notastrinitario.app.entity.SubjectGrade;
import com.notastrinitario.app.repository.StudentRepository;
import com.notastrinitario.app.repository.SubjectGradeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;

@Service
public class SubjectGradeService {

    private final SubjectGradeRepository subjectGradeRepository;
    private final StudentRepository studentRepository;

    public SubjectGradeService(SubjectGradeRepository subjectGradeRepository, StudentRepository studentRepository) {
        this.subjectGradeRepository = subjectGradeRepository;
        this.studentRepository = studentRepository;
    }

    @Transactional
    public SubjectGrade saveGrade(SubjectGrade grade) {
        return subjectGradeRepository.save(grade);
    }

    @Transactional
    public void deleteGrade(Long id) {
        subjectGradeRepository.deleteById(id);
    }

    public List<SubjectGrade> getGradesByStudentId(Long studentId) {
        return subjectGradeRepository.findByStudent_Id(studentId);
    }

    public List<SubjectGrade> getGradesByStudentIdAndPeriod(Long studentId, Integer period) {
        return subjectGradeRepository.findByStudent_IdAndPeriod(studentId, period);
    }

    public List<SubjectGrade> getGradesByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period) {
        return subjectGradeRepository.findByGradeAndClassroomAndPeriod(grade, classroom, period);
    }

    public List<SubjectGrade> getGradesByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period, Long teacherId) {
        if (teacherId == null) {
            return subjectGradeRepository.findByGradeAndClassroomAndPeriod(grade, classroom, period);
        }
        return subjectGradeRepository.findByTeacher_IdAndGradeAndClassroomAndPeriod(teacherId, grade, classroom, period);
    }

    public List<SubjectGrade> getGradesByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period, Long teacherId, String subjectName) {
        if (teacherId == null) {
            if (subjectName == null || subjectName.isBlank()) {
                return subjectGradeRepository.findByGradeAndClassroomAndPeriod(grade, classroom, period);
            }
            return subjectGradeRepository.findByGradeAndClassroomAndPeriodAndSubjectName(grade, classroom, period, subjectName);
        }
        if (subjectName == null || subjectName.isBlank()) {
            return subjectGradeRepository.findByTeacher_IdAndGradeAndClassroomAndPeriod(teacherId, grade, classroom, period);
        }
        return subjectGradeRepository.findByTeacher_IdAndGradeAndClassroomAndPeriodAndSubjectName(teacherId, grade, classroom, period, subjectName);
    }

    public List<SubjectGrade> getGradesByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period, Long teacherId, String subjectName, Long subjectId) {
        if (subjectId != null) {
            return teacherId == null
                    ? subjectGradeRepository.findByGradeAndClassroomAndPeriodAndSubjectId(grade, classroom, period, subjectId)
                    : subjectGradeRepository.findByTeacher_IdAndGradeAndClassroomAndPeriodAndSubjectId(teacherId, grade, classroom, period, subjectId);
        }
        return getGradesByGradeAndClassroomAndPeriod(grade, classroom, period, teacherId, subjectName);
    }

    public List<String> getSubjectNamesByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period) {
        return subjectGradeRepository.findDistinctSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom, period);
    }

    public List<String> getSubjectNamesByGradeAndClassroomAndPeriod(String grade, String classroom, Integer period, Long teacherId) {
        if (teacherId == null) {
            return subjectGradeRepository.findDistinctSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom, period);
        }
        return subjectGradeRepository.findDistinctSubjectNamesByTeacherIdAndGradeAndClassroomAndPeriod(teacherId, grade, classroom, period);
    }

    public List<String> getGradeNamesByGradeClassroomPeriodAndSubject(
            String grade, String classroom, Integer period, String subjectName) {
        return subjectGradeRepository.findDistinctGradeNamesByGradeClassroomPeriodAndSubject(
                grade, classroom, period, subjectName);
    }

    public List<String> getGradeNamesByGradeClassroomPeriodAndSubject(
            String grade, String classroom, Integer period, String subjectName, Long teacherId) {
        if (teacherId == null) {
            return subjectGradeRepository.findDistinctGradeNamesByGradeClassroomPeriodAndSubject(
                    grade, classroom, period, subjectName);
        }
        return subjectGradeRepository.findDistinctGradeNamesByTeacherIdAndGradeClassroomPeriodAndSubject(
                teacherId, grade, classroom, period, subjectName);
    }

    public List<Student> getStudentsByGradeAndClassroom(String grade, String classroom) {
        return studentRepository.findByGradeAndClassGroup(grade, classroom);
    }

    /**
     * Calculate the final grade for a student in a subject for a given period
     * Formula: (average of grades * 0.8) + (evaluation grade * 0.2)
     */
    public Map<String, Object> calculateFinalGrade(Long studentId, Integer period, String subjectName) {
        return calculateFinalGrade(studentId, period, subjectName, null);
    }

    public Map<String, Object> calculateFinalGrade(Long studentId, Integer period, String subjectName, Long teacherId) {
        List<SubjectGrade> grades = teacherId == null
                ? subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectName(studentId, period, subjectName)
                : subjectGradeRepository.findByStudent_IdAndPeriodAndSubjectNameAndTeacher_Id(studentId, period, subjectName, teacherId);

        Map<String, Object> result = new HashMap<>();

        if (grades.isEmpty()) {
            result.put("hasGrades", false);
            result.put("average80", 0.0);
            result.put("evaluation20", 0.0);
            result.put("finalGrade", 0.0);
            result.put("appreciative", "");
            return result;
        }

        // Filter regular grades (not evaluations)
        List<SubjectGrade> regularGrades = new ArrayList<>();
        Double evaluationGrade = null;
        String appreciative = null;

        for (SubjectGrade grade : grades) {
            if (Boolean.TRUE.equals(grade.getIsEvaluation())) {
                evaluationGrade = grade.getGradeValue();
            } else {
                regularGrades.add(grade);
            }
            // Get appreciative value
            if (grade.getAppreciative() != null && !grade.getAppreciative().isEmpty()) {
                appreciative = grade.getAppreciative();
            }
        }

        // Calculate average of regular grades (80%)
        double average80 = 0.0;
        if (!regularGrades.isEmpty()) {
            double sum = regularGrades.stream()
                    .filter(g -> g.getGradeValue() != null)
                    .mapToDouble(SubjectGrade::getGradeValue)
                    .sum();
            average80 = sum / regularGrades.size();
        }

        // If no evaluation grade, use 0 for that portion
        double evaluation20 = (evaluationGrade != null) ? evaluationGrade : 0.0;

        // Calculate final grade: (average * 0.8) + (evaluation * 0.2)
        double finalGrade = (average80 * 0.8) + (evaluation20 * 0.2);

        // Round to 2 decimal places
        finalGrade = Math.round(finalGrade * 100.0) / 100.0;
        average80 = Math.round(average80 * 100.0) / 100.0;
        evaluation20 = Math.round(evaluation20 * 100.0) / 100.0;

        result.put("hasGrades", true);
        result.put("average80", average80);
        result.put("evaluation20", evaluation20);
        result.put("finalGrade", finalGrade);
        result.put("appreciative", appreciative != null ? appreciative : "");
        result.put("regularGradesCount", regularGrades.size());
        result.put("hasEvaluation", evaluationGrade != null);

        return result;
    }

    /**
     * Calculate all final grades for a classroom
     */
    public List<Map<String, Object>> calculateAllFinalGrades(String grade, String classroom, Integer period) {
        return calculateAllFinalGrades(grade, classroom, period, null);
    }

    public List<Map<String, Object>> calculateAllFinalGrades(String grade, String classroom, Integer period, Long teacherId) {
        List<Student> students = getStudentsByGradeAndClassroom(grade, classroom);
        List<String> subjects = getSubjectNamesByGradeAndClassroomAndPeriod(grade, classroom, period, teacherId);

        List<Map<String, Object>> results = new ArrayList<>();

        for (Student student : students) {
            Map<String, Object> studentResult = new HashMap<>();
            studentResult.put("studentId", student.getId());
            studentResult.put("studentName", student.getSurname() + " " + student.getName());

            Map<String, Object> subjectGrades = new HashMap<>();
            for (String subject : subjects) {
                Map<String, Object> subjectInfo = new HashMap<>();
                for (int p = 1; p <= 4; p++) {
                    Map<String, Object> gradeInfo = calculateFinalGrade(student.getId(), p, subject, teacherId);
                    subjectInfo.put("period" + p, gradeInfo.get("finalGrade"));
                }
                Map<String, Object> currentGrade = calculateFinalGrade(student.getId(), period, subject, teacherId);
                subjectInfo.put("nFinal", currentGrade.get("finalGrade"));
                subjectInfo.put("nFinalLetter", getScaleLetter((Double) currentGrade.get("finalGrade")));
                subjectGrades.put(subject, subjectInfo);
            }

            studentResult.put("subjects", subjectGrades);
            results.add(studentResult);
        }

        return results;
    }

    private String getScaleLetter(Double grade) {
        if (grade == null) return "N.A";
        if (grade >= 4.6) return "S";
        if (grade >= 4.0) return "A";
        if (grade >= 1.0) return "B";
        return "N.A";
    }
}
