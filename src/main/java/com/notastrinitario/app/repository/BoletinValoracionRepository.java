package com.notastrinitario.app.repository;

import com.notastrinitario.app.entity.BoletinValoracion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoletinValoracionRepository extends JpaRepository<BoletinValoracion, Long> {
    Optional<BoletinValoracion> findByStudentIdAndPeriod(Long studentId, Integer period);
}