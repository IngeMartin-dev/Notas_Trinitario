package com.notastrinitario.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
                                                // API pública
                                                .requestMatchers("/api/auth/login", "/api/auth/register",
                                                        "/api/auth/me", "/api/auth/refresh")
                                                .permitAll()
                                                // API de períodos
                                                .requestMatchers("/api/periods/**").permitAll()
                                                // API de estudiantes - temporal: permitir sin auth para probar
                                                .requestMatchers("/api/students/**").permitAll()
                                                // API de calificaciones
                                                .requestMatchers("/api/grades/**").permitAll()
                                                // API de IA (proxy a Mistral para planes de estudio)
                                                .requestMatchers("/api/ai/**").permitAll()
                                                // API de boletines
                                                .requestMatchers("/api/boletines/**").permitAll()
                                                // API de profesores y materias
                                                .requestMatchers("/api/teachers/**").permitAll()
                                                .requestMatchers("/api/subjects/**").permitAll()
                                                // API de padres de familia
                                                .requestMatchers("/api/parents/**").permitAll()
                                                .requestMatchers("/api/health").permitAll()
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
                                "http://127.0.0.1:8080"));
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