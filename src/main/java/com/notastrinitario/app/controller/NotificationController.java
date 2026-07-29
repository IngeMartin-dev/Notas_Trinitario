package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.Notification;
import com.notastrinitario.app.entity.User;
import com.notastrinitario.app.repository.NotificationRepository;
import com.notastrinitario.app.repository.UserRepository;
import com.notastrinitario.app.service.NotificationService;
import com.notastrinitario.app.service.FcmPushService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    private final FcmPushService fcmPushService;

    public NotificationController(NotificationRepository notificationRepository,
            UserRepository userRepository,
            NotificationService notificationService,
            FcmPushService fcmPushService) {
        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
        this.notificationService = notificationService;
        this.fcmPushService = fcmPushService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<NotificationDTO>> getForUser(@PathVariable Long userId) {
        System.out.println("=== GET USER NOTIFICATIONS ===");
        System.out.println("User ID: " + userId);

        try {
            List<Notification> notifications = notificationRepository.findByUserIdWithUser(userId);
            System.out.println("Found " + notifications.size() + " notifications");
            List<NotificationDTO> notificationDTOs = notifications.stream()
                    .map(this::convertToDTO)
                    .toList();
            return ResponseEntity.ok(notificationDTOs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        }
    }

    private NotificationDTO convertToDTO(Notification notification) {
        NotificationDTO dto = new NotificationDTO();
        dto.setId(notification.getId());
        dto.setTitle(notification.getTitle());
        dto.setMessage(notification.getMessage());
        dto.setCreatedAt(notification.getCreatedAt().toString());
        dto.setRead(notification.isRead());
        dto.setNotificationType(notification.getNotificationType());

        // Handle user separately to avoid lazy loading issues
        if (notification.getUser() != null) {
            UserDTO userDTO = new UserDTO();
            userDTO.setId(notification.getUser().getId());
            userDTO.setName(notification.getUser().getName());
            userDTO.setSurname(notification.getUser().getSurname());
            userDTO.setProfilePicture(notification.getUser().getProfilePicture());
            dto.setUser(userDTO);
        }

        return dto;
    }

    // DTO classes
    public static class NotificationDTO {
        private Long id;
        private String title;
        private String message;
        private String createdAt;
        private boolean isRead;
        private String notificationType;
        private UserDTO user;

        // Getters and setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(String createdAt) {
            this.createdAt = createdAt;
        }

        public boolean isRead() {
            return isRead;
        }

        public void setRead(boolean read) {
            isRead = read;
        }

        public String getNotificationType() {
            return notificationType;
        }

        public void setNotificationType(String notificationType) {
            this.notificationType = notificationType;
        }

        public UserDTO getUser() {
            return user;
        }

        public void setUser(UserDTO user) {
            this.user = user;
        }
    }

    public static class UserDTO {
        private Long id;
        private String name;
        private String surname;
        private String profilePicture;

        // Getters and setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getSurname() {
            return surname;
        }

        public void setSurname(String surname) {
            this.surname = surname;
        }

        public String getProfilePicture() {
            return profilePicture;
        }

        public void setProfilePicture(String profilePicture) {
            this.profilePicture = profilePicture;
        }
    }

    @PostMapping("/{id}/read")
    public ResponseEntity<?> markRead(@PathVariable Long id) {
        System.out.println("=== MARK AS READ REQUEST ===");
        System.out.println("Notification ID: " + id);

        // Log authentication context
        System.out.println("Authentication: " +
                org.springframework.security.core.Authentication.class.getName());

        return notificationRepository.findById(id).map(n -> {
            System.out.println("Found notification: " + n.getTitle());
            n.setRead(true);
            notificationRepository.save(n);
            System.out.println("Notification marked as read successfully");
            // Return a simple success response instead of the entity
            return ResponseEntity.ok(Map.of("success", true, "message", "Notification marked as read"));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<?> deleteAllForUser(@PathVariable Long userId) {
        System.out.println("=== DELETE ALL NOTIFICATIONS FOR USER ===");
        System.out.println("User ID: " + userId);

        try {
            List<Notification> notifications = notificationRepository.findByUserIdWithUser(userId);
            notificationRepository.deleteAll(notifications);
            System.out.println("Deleted " + notifications.size() + " notifications for user " + userId);
            return ResponseEntity.ok(Map.of("success", true, "message", "All notifications deleted"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("success", false, "message", "Error deleting notifications"));
        }
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendNotification(@RequestBody Map<String, Object> request) {
        try {
            String title = (String) request.get("title");
            String message = (String) request.get("message");
            String type = (String) request.get("type");
            String recipientType = (String) request.get("recipientType");

            if (recipientType == null) {
                recipientType = "ALL";
            }

            switch (recipientType) {
                case "PARENTS":
                    notificationService.sendNotificationByRole("PARENT", title, message, type);
                    break;
                case "TEACHERS":
                    notificationService.sendNotificationByRole("TEACHER", title, message, type);
                    break;
                case "ADMINISTRATORS":
                    notificationService.sendNotificationByRole("ADMIN", title, message, type);
                    break;
                case "ALL":
                default:
                    notificationService.sendNotificationToAll(title, message, type);
                    break;
            }

            return ResponseEntity.ok().body(Map.of(
                    "success", true,
                    "message", "Notificación enviada exitosamente"));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Error al enviar la notificación: " + e.getMessage()));
        }
    }

    @PostMapping("/reply")
    public ResponseEntity<?> replyToNotification(@RequestBody Map<String, Object> request) {
        try {
            System.out.println("=== REPLY NOTIFICATION REQUEST ===");
            System.out.println("Request payload: " + request);

            // Validate required fields
            if (!request.containsKey("originalNotificationId") || !request.containsKey("replyMessage")
                    || !request.containsKey("senderId")) {
                return ResponseEntity.badRequest().body(Map.of(
                        "success", false,
                        "message", "Faltan campos requeridos: originalNotificationId, replyMessage, senderId"));
            }

            Long originalNotificationId = Long.valueOf(request.get("originalNotificationId").toString());
            String replyMessage = (String) request.get("replyMessage");
            Long senderId = Long.valueOf(request.get("senderId").toString());

            System.out.println("Parsed values - ID: " + originalNotificationId + ", Message: " + replyMessage
                    + ", Sender: " + senderId);

            // Get the original notification to find the recipient
            Notification originalNotification = notificationRepository.findById(originalNotificationId)
                    .orElseThrow(() -> new RuntimeException("Notificación original no encontrada"));

            // Verify sender exists (for audit purposes)
            userRepository.findById(senderId)
                    .orElseThrow(() -> new RuntimeException("Remitente no encontrado"));

            User recipient = originalNotification.getUser();

            // Send reply notification to the original sender
            String replyTitle = "Respuesta a: " + originalNotification.getTitle();
            String fullMessage = "Mensaje original:\n" + originalNotification.getMessage() +
                    "\n\nRespuesta:\n" + replyMessage;

            notificationService.sendNotification(recipient, replyTitle, fullMessage, "NOTIFICATION_REPLY");

            return ResponseEntity.ok().body(Map.of(
                    "success", true,
                    "message", "Respuesta enviada exitosamente"));

        } catch (NumberFormatException e) {
            System.out.println("Number format error: " + e.getMessage());
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Error en el formato de los IDs: " + e.getMessage()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Error al enviar la respuesta: " + e.getMessage()));
        }
    }

    /**
     * Save FCM token for a user
     */
    @PostMapping("/fcm-token")
    public ResponseEntity<?> saveFcmToken(@RequestBody Map<String, Object> request) {
        try {
            Long userId = Long.valueOf(request.get("userId").toString());
            String token = (String) request.get("token");
            String deviceType = (String) request.get("deviceType");
            String deviceName = (String) request.get("deviceName");

            if (token == null || token.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of(
                        "success", false,
                        "message", "Token FCM es requerido"));
            }

            fcmPushService.saveToken(userId, token, deviceType, deviceName);

            return ResponseEntity.ok().body(Map.of(
                    "success", true,
                    "message", "Token FCM guardado exitosamente"));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Error al guardar token FCM: " + e.getMessage()));
        }
    }

    /**
     * Remove all FCM tokens for a user
     */
    @DeleteMapping("/fcm-token/user/{userId}")
    public ResponseEntity<?> removeFcmTokens(@PathVariable Long userId) {
        try {
            fcmPushService.removeAllUserTokens(userId);

            return ResponseEntity.ok().body(Map.of(
                    "success", true,
                    "message", "Tokens FCM eliminados exitosamente"));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Error al eliminar tokens FCM: " + e.getMessage()));
        }
    }

    /**
     * Get active FCM token count
     */
    @GetMapping("/fcm-token/count")
    public ResponseEntity<?> getFcmTokenCount() {
        try {
            long count = fcmPushService.getActiveTokenCount();
            return ResponseEntity.ok().body(Map.of(
                    "success", true,
                    "count", count));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "message", "Error: " + e.getMessage()));
        }
    }
}
