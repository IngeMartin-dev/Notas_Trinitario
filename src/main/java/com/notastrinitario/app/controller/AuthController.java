package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.RefreshToken;
import com.notastrinitario.app.entity.User;
import com.notastrinitario.app.repository.UserRepository;
import com.notastrinitario.app.repository.RefreshTokenRepository;
import com.notastrinitario.app.security.JwtUtil;
import com.notastrinitario.app.security.BruteForceProtection;
import com.notastrinitario.app.service.RefreshTokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import jakarta.validation.Valid;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BruteForceProtection bruteForceProtection;
    private final RefreshTokenService refreshTokenService;
    private final RefreshTokenRepository refreshTokenRepository;

    public AuthController(UserRepository userRepository, JwtUtil jwtUtil, BruteForceProtection bruteForceProtection,
                          RefreshTokenService refreshTokenService, RefreshTokenRepository refreshTokenRepository) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.bruteForceProtection = bruteForceProtection;
        this.refreshTokenService = refreshTokenService;
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public static String hashSHA256(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(password.getBytes());
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 not available", e);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");

        if (bruteForceProtection.isBlocked(username)) {
            long remaining = bruteForceProtection.getRemainingLockoutSeconds(username);
            return ResponseEntity.status(423).body(Map.of(
                "error", "Has sido bloqueado por " + (remaining / 60) + " minutos. Intenta más tarde.",
                "blocked", true,
                "remainingSeconds", remaining
            ));
        }

        String password = body.get("password");

        System.out.println("Login attempt for username: " + username);

        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            userOpt = userRepository.findByEmail(username);
        }

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            String storedPassword = user.getPassword();
            boolean passwordMatches = false;
            
            String inputHash = hashSHA256(password);
            
            if (storedPassword != null && storedPassword.length() == 64) {
                passwordMatches = inputHash.equalsIgnoreCase(storedPassword);
            } else if (storedPassword != null && !storedPassword.isEmpty()) {
                passwordMatches = password.equals(storedPassword);
                if (passwordMatches) {
                    String hashedPassword = hashSHA256(password);
                    user.setPassword(hashedPassword);
                    userRepository.save(user);
                }
            }

            if (passwordMatches) {
                bruteForceProtection.recordSuccessfulLogin(username);
                String token = jwtUtil.generateToken(user.getId().toString());
                String role = user.getRole() != null ? user.getRole().getName() : "USER";
                RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);
                System.out.println("Login successful, generated token for role: " + role);
                return ResponseEntity.ok(Map.of(
                    "token", token,
                    "refreshToken", refreshToken.getToken(),
                    "role", role
                ));
            } else {
                bruteForceProtection.recordFailedAttempt(username);
                if (bruteForceProtection.isBlocked(username)) {
                    long remaining = bruteForceProtection.getRemainingLockoutSeconds(username);
                    return ResponseEntity.status(423).body(Map.of(
                        "error", "Has sido bloqueado por " + (remaining / 60) + " minutos. Intenta más tarde.",
                        "blocked", true,
                        "remainingSeconds", remaining
                    ));
                }
                System.out.println("Password does not match");
                return ResponseEntity.status(401).body(Map.of("error", "Usuario o contraseña incorrecto. Intente de nuevo."));
            }
        } else {
            bruteForceProtection.recordFailedAttempt(username);
            if (bruteForceProtection.isBlocked(username)) {
                long remaining = bruteForceProtection.getRemainingLockoutSeconds(username);
                return ResponseEntity.status(423).body(Map.of(
                    "error", "Has sido bloqueado por " + (remaining / 60) + " minutos. Intenta más tarde.",
                    "blocked", true,
                    "remainingSeconds", remaining
                ));
            }
            System.out.println("No user found with username or email: " + username);
            return ResponseEntity.status(401).body(Map.of("error", "Usuario o contraseña incorrecto. Intente de nuevo."));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody User user) {
        if (user.getUsername() == null || user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "username, email and password required"));
        }
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "username already in use"));
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "email already in use"));
        }
        user.setPassword(hashSHA256(user.getPassword()));
        User saved = userRepository.save(user);
        String token = jwtUtil.generateToken(saved.getId().toString());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(saved);
        return ResponseEntity.ok(Map.of("token", token, "refreshToken", refreshToken.getToken(), "userId", saved.getId()));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof User) {
            User user = (User) authentication.getPrincipal();
            return ResponseEntity.ok(Map.of(
                "id", user.getId(),
                "name", user.getName() != null ? user.getName() : "",
                "surname", user.getSurname() != null ? user.getSurname() : "",
                "email", user.getEmail() != null ? user.getEmail() : "",
                "username", user.getUsername() != null ? user.getUsername() : "",
                "profilePicture", user.getProfilePicture() != null ? user.getProfilePicture() : "",
                "role", user.getRole() != null ? user.getRole() : Map.of("name", "USER")
            ));
        }
        return ResponseEntity.status(401).body(Map.of("error", "Not authenticated"));
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody Map<String, String> body) {
        String refreshTokenStr = body.get("refreshToken");
        if (refreshTokenStr == null || refreshTokenStr.isEmpty()) {
            return ResponseEntity.status(401).body(Map.of("error", "Refresh token is required"));
        }

        Optional<RefreshToken> refreshTokenOpt = refreshTokenService.findByToken(refreshTokenStr);
        if (refreshTokenOpt.isEmpty()) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid refresh token"));
        }

        RefreshToken refreshToken = refreshTokenOpt.get();
        if (refreshTokenService.isExpired(refreshToken)) {
            return ResponseEntity.status(401).body(Map.of("error", "Refresh token expired"));
        }

        User user = refreshToken.getUser();
        String newAccessToken = jwtUtil.generateToken(user.getId().toString());
        String newRefreshToken = jwtUtil.generateRefreshToken(user.getId().toString());
        refreshTokenService.deleteByUser(user);
        RefreshToken newRefreshTokenEntity = new RefreshToken();
        newRefreshTokenEntity.setUser(user);
        newRefreshTokenEntity.setToken(newRefreshToken);
        newRefreshTokenEntity.setExpiresAt(LocalDateTime.now().plusDays(30));
        refreshTokenRepository.save(newRefreshTokenEntity);

        String role = user.getRole() != null ? user.getRole().getName() : "USER";
        return ResponseEntity.ok(Map.of(
            "token", newAccessToken,
            "refreshToken", newRefreshToken,
            "role", role
        ));
    }
}
