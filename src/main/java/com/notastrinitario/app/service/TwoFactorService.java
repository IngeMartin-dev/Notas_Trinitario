package com.notastrinitario.app.service;

import com.notastrinitario.app.entity.User;
import com.notastrinitario.app.repository.UserRepository;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.Instant;

/**
 * Autenticación de Dos Factores (2FA) por CÓDIGO DE 6 DÍGITOS enviado al
 * correo del usuario (no por app autenticadora/TOTP, para no depender de
 * una librería extra ni de que el usuario instale algo). Reutiliza el
 * mismo JavaMailSender que ya usa ReportCardService para enviar boletines
 * por correo.
 *
 * Los campos temp2faCode / temp2faExpiry ya existían en la entidad User
 * (sin usar hasta ahora); este servicio es el que finalmente los usa.
 */
@Service
public class TwoFactorService {

    private static final long CODE_VALID_MS = 10 * 60 * 1000; // 10 minutos
    private static final SecureRandom RANDOM = new SecureRandom();

    private final UserRepository userRepository;
    private final JavaMailSender mailSender;

    public TwoFactorService(UserRepository userRepository, JavaMailSender mailSender) {
        this.userRepository = userRepository;
        this.mailSender = mailSender;
    }

    /** Genera un código de 6 dígitos, lo guarda (con expiración) y lo envía
     *  por correo al usuario. Devuelve false si el envío de correo falla
     *  (por ejemplo, si el servidor SMTP no está configurado). */
    public boolean generarYEnviarCodigo(User user, String asunto, String mensajeIntro) {
        String codigo = String.format("%06d", RANDOM.nextInt(1_000_000));
        user.setTemp2faCode(codigo);
        user.setTemp2faExpiry(Instant.now().toEpochMilli() + CODE_VALID_MS);
        userRepository.save(user);

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(user.getEmail());
            helper.setSubject(asunto);
            helper.setText(
                "<div style=\"font-family:Arial,sans-serif;max-width:480px;margin:auto\">"
                + "<h2 style=\"color:#1b6aeb\">" + asunto + "</h2>"
                + "<p>" + mensajeIntro + "</p>"
                + "<p style=\"font-size:32px;font-weight:bold;letter-spacing:6px;"
                + "background:#f1f5fb;padding:16px;text-align:center;border-radius:8px\">"
                + codigo + "</p>"
                + "<p style=\"color:#666;font-size:13px\">Este código vence en 10 minutos. "
                + "Si no fuiste tú quien lo solicitó, ignora este correo.</p>"
                + "</div>",
                true
            );
            mailSender.send(message);
            return true;
        } catch (Exception e) {
            System.err.println("[2FA] No se pudo enviar el código por correo a " + user.getEmail() + ": " + e.getMessage());
            return false;
        }
    }

    /** Verifica el código ingresado contra el guardado, revisando expiración.
     *  Si es válido, lo limpia (un código no se puede reutilizar). */
    public boolean verificarCodigo(User user, String codigoIngresado) {
        String codigoGuardado = user.getTemp2faCode();
        Long expiry = user.getTemp2faExpiry();
        if (codigoGuardado == null || expiry == null) return false;
        if (Instant.now().toEpochMilli() > expiry) return false;
        if (!codigoGuardado.equals(codigoIngresado)) return false;

        // Un código usado no debe servir dos veces.
        user.setTemp2faCode(null);
        user.setTemp2faExpiry(null);
        userRepository.save(user);
        return true;
    }
}
