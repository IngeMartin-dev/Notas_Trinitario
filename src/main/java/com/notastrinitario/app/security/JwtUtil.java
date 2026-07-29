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
    private final Key key;
    private final long validity;
    private final long refreshValidity;

    public JwtUtil(AppProperties appProperties) {
        this.key = Keys.hmacShaKeyFor(appProperties.getJwt().getSecret().getBytes());
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
