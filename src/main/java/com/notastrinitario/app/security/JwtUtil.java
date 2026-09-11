package com.notastrinitario.app.security;

import com.notastrinitario.app.config.AppProperties;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import java.security.Key;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtUtil {

    // Valor que estuvo hardcodeado en el repo público. Si alguien vuelve a
    // pegarlo en APP_JWT_SECRET (por ejemplo copiando un .env viejo), lo
    // rechazamos igual: ya está expuesto y no sirve como secreto.
    private static final String LEAKED_SECRET =
            "a1b8aeb3b0cc2a4edf36f8fdc905bf730443be2cc98d689f6fc9c1e1d3c28efedf5701d17bf2de7bbf44f1693f8570dd015dad1500e744ea02869354b9042eca";

    private final Key key;
    private final long validity;
    private final long refreshValidity;

    public JwtUtil(AppProperties appProperties) {
        String secret = appProperties.getJwt().getSecret();
        if (secret == null || secret.isBlank() || secret.length() < 32) {
            throw new IllegalStateException(
                "Config inválida: falta la variable de entorno APP_JWT_SECRET (o es demasiado corta, "
                + "mínimo 32 caracteres). Genera una con: openssl rand -hex 64, y NUNCA la subas a git.");
        }
        if (secret.equals(LEAKED_SECRET)) {
            throw new IllegalStateException(
                "Config inválida: APP_JWT_SECRET es el valor que estuvo expuesto en el repositorio público. "
                + "Genera un secreto nuevo con: openssl rand -hex 64");
        }
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
        this.validity = appProperties.getJwt().getExpiration();
        this.refreshValidity = appProperties.getJwt().getRefreshExpiration();
    }

    public String generateToken(String subject) {
        Date now = new Date();
        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + validity))
                .signWith(key)
                .compact();
    }

    public String generateRefreshToken(String subject) {
        Date now = new Date();
        return Jwts.builder()
                .setSubject(subject)
                .setId(UUID.randomUUID().toString())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + refreshValidity))
                .signWith(key)
                .compact();
    }

    public Claims validateToken(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }

    public Long getUserIdFromToken(String token) {
        try {
            Claims claims = validateToken(token);
            return Long.valueOf(claims.getSubject());
        } catch (Exception e) {
            return null;
        }
    }
}
