package com.notastrinitario.app.security;

import java.time.Instant;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Component;

@Component
public class BruteForceProtection {

    private final int MAX_ATTEMPTS = 5;
    private final int LOCKOUT_MINUTES = 15;
    
    private final ConcurrentHashMap<String, AttemptRecord> attempts = new ConcurrentHashMap<>();

    private static class AttemptRecord {
        int count;
        Instant lockedUntil;

        AttemptRecord() {
            this.count = 1;
            this.lockedUntil = null;
        }
    }

    public boolean isBlocked(String key) {
        AttemptRecord record = attempts.get(key);
        if (record == null) return false;
        
        if (record.lockedUntil != null && Instant.now().isBefore(record.lockedUntil)) {
            return true;
        }
        return false;
    }

    public void recordFailedAttempt(String key) {
        AttemptRecord record = attempts.compute(key, (k, existing) -> {
            if (existing == null) {
                return new AttemptRecord();
            }
            
            if (existing.lockedUntil != null && Instant.now().isAfter(existing.lockedUntil)) {
                return new AttemptRecord();
            }
            
            existing.count++;
            return existing;
        });

        if (record.count >= MAX_ATTEMPTS) {
            record.lockedUntil = Instant.now().plusSeconds(LOCKOUT_MINUTES * 60);
        }
    }

    public void recordSuccessfulLogin(String key) {
        attempts.remove(key);
    }

    public long getRemainingLockoutSeconds(String key) {
        AttemptRecord record = attempts.get(key);
        if (record == null || record.lockedUntil == null) return 0;
        
        long remaining = record.lockedUntil.getEpochSecond() - Instant.now().getEpochSecond();
        return Math.max(0, remaining);
    }
}