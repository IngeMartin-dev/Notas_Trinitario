package com.notastrinitario.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;
import com.notastrinitario.app.security.JwtAuthenticationFilter;
import com.notastrinitario.app.security.JwtUtil;
import com.notastrinitario.app.repository.UserRepository;

@Configuration
@EnableWebSecurity
// Habilita @PreAuthorize a nivel de método (por ejemplo, para restringir el
// guardado de notas a PROFESOR/ADMINISTRADOR) sin tener que reescribir todos
// los matchers de authorizeHttpRequests.
@EnableMethodSecurity
public class SecurityConfig {

        @Bean
        public JwtAuthenticationFilter jwtAuthenticationFilter(JwtUtil jwtUtil, UserRepository userRepository) {
                return new JwtAuthenticationFilter(jwtUtil, userRepository);
        }

        @Bean
        public SecurityFilterChain securityFilterChain(
                        HttpSecurity http,
                        JwtAuthenticationFilter jwtAuthenticationFilter) throws Exception {
                http
                                .csrf(csrf -> csrf.disable())
                                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authorizeHttpRequests(auth -> auth
                                                // Archivos estáticos
                                                .requestMatchers(
                                                                "/css/**",
                                                                "/js/**",
                                                                "/images/**",
                                                                "/webjars/**",
                                                                "/h2-console/**",
                                                                "/favicon.ico",
                                                                "/uploads/**")
                                                .permitAll()
                                                // Páginas públicas
                                                .requestMatchers(
                                                                "/",
                                                                "/login",
                                                                "/login.html",
                                                                "/index.html",
                                                                "/register",
                                                                "/register.html",
                                                                "/error",
                                                                "/img/**")
                                                .permitAll()
                                                // API pública: solo lo estrictamente necesario ANTES de
                                                // iniciar sesión. Todo lo demás exige JWT válido.
                                                .requestMatchers("/api/auth/login", "/api/auth/register",
                                                        "/api/auth/me", "/api/auth/refresh", "/api/auth/verify-2fa")
                                                .permitAll()
                                                .requestMatchers("/api/health").permitAll()
                                                // El resto del API (estudiantes, notas, boletines, padres,
                                                // profesores, materias, periodos, IA, etc.) requiere estar
                                                // autenticado. Antes estaban en permitAll() "temporal para
                                                // probar" y cualquiera sin sesión podía leer o modificar
                                                // notas y datos de estudiantes; el frontend ya envía el JWT
                                                // en todas estas llamadas (ver auth-interceptor.ts), así que
                                                // esto no debería romper nada que ya funcionara con sesión
                                                // iniciada. Reglas de rol más finas (por ejemplo, que solo
                                                // ADMIN pueda crear profesores) se aplican método por método
                                                // con @PreAuthorize, como ya se hizo en /api/parents/me/children.
                                                // Rutas protegidas
                                                .requestMatchers("/admin/**").hasRole("ADMIN")
                                                .requestMatchers("/teacher/**").hasRole("TEACHER")
                                                .requestMatchers("/parent/**").hasRole("PARENT")
                                                // Cualquier otra petición requiere autenticación
                                                .anyRequest().authenticated())
                                .formLogin(form -> form.disable())
                                .logout(logout -> logout.disable())
                                .exceptionHandling(exception -> exception
                                                .accessDeniedPage("/access-denied"))
                                .headers(headers -> {
                                        headers.frameOptions(frame -> frame.sameOrigin());
                                        headers.xssProtection(xss -> xss.disable());
                                        headers.contentSecurityPolicy(
                                                        csp -> csp.policyDirectives("default-src 'self'"));
                                        // Fuerza HTTPS en el navegador durante 1 año una vez visitado por HTTPS
                                        // (evita ataques de downgrade a HTTP). No tiene efecto en localhost/HTTP puro.
                                        headers.httpStrictTransportSecurity(hsts -> hsts
                                                        .includeSubDomains(true)
                                                        .maxAgeInSeconds(31536000));
                                        // Evita que el navegador intente "adivinar" el tipo de un archivo
                                        // subido (uploads/profile-pictures) y lo ejecute como script.
                                        headers.contentTypeOptions(contentTypeOptions -> {});
                                        headers.referrerPolicy(referrer -> referrer
                                                        .policy(org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN));
                                });

                // Register JWT filter before username/password filter
                http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                
                // Register Rate Limit Filter
                http.addFilterAfter(new com.notastrinitario.app.config.RateLimitFilter(), JwtAuthenticationFilter.class);

                return http.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                // Use allowedOriginPatterns instead of allowedOrigins when allowCredentials is
                // true
                configuration.setAllowedOriginPatterns(Arrays.asList(
                                "http://localhost:4200",
                                "http://localhost:8080",
                                "http://127.0.0.1:4200",
                                "http://127.0.0.1:8080",
                                // DevTunnel actual (frontend en 4200, backend en 8080). Cuando
                                // el id del túnel cambie, hay que actualizar estas dos líneas.
                                "https://rq4cngtm-4200.use.devtunnels.ms",
                                "https://rq4cngtm-8080.use.devtunnels.ms",
                                // Comodín de respaldo por si el id cambia y se te olvida
                                // actualizar las dos líneas de arriba.
                                "https://*.devtunnels.ms"));
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                configuration.setAllowedHeaders(Arrays.asList(
                                "*",
                                "Authorization",
                                "Content-Type",
                                "X-Requested-With",
                                "Accept"));
                configuration.setAllowCredentials(false);
                configuration.setExposedHeaders(Arrays.asList("Authorization"));

                // Configurar el tiempo máximo de caché para las respuestas preflight (en
                // segundos)
                configuration.setMaxAge(3600L);

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }
}