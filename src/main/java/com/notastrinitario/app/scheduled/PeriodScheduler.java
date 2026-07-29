package com.notastrinitario.app.scheduled;

import com.notastrinitario.app.entity.Period;
import com.notastrinitario.app.repository.PeriodRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class PeriodScheduler {

    private final PeriodRepository periodRepository;

    public PeriodScheduler(PeriodRepository periodRepository) {
        this.periodRepository = periodRepository;
    }

    @Scheduled(fixedRate = 60000) // Every 60 seconds for automatic updates
    public void checkAndUpdateAutomaticPeriods() {
        List<Period> periods = new ArrayList<>();
        periodRepository.findAll().forEach(periods::add);
        
        for (Period period : periods) {
            if (Boolean.TRUE.equals(period.getIsAutomatic())) {
                checkAndUpdateAutomaticUnlock(period);
            }
        }
    }

    private void checkAndUpdateAutomaticUnlock(Period period) {
        LocalDateTime now = LocalDateTime.now();
        boolean changed = false;
        
        if (period.getUnlockDate() != null && now.isAfter(period.getUnlockDate())) {
            if (!period.getIsUnlocked()) {
                period.setIsUnlocked(true);
                changed = true;
                System.out.println("Período " + period.getPeriodNumber() + " desbloqueado automáticamente");
            }
        }
        
        if (period.getLockDate() != null && now.isAfter(period.getLockDate())) {
            if (period.getIsUnlocked()) {
                period.setIsUnlocked(false);
                changed = true;
                System.out.println("Período " + period.getPeriodNumber() + " bloqueado automáticamente");
            }
        }
        
        if (changed) {
            periodRepository.save(period);
        }
    }
}
