package com.notastrinitario.app.controller;

import com.notastrinitario.app.entity.Notification;
import com.notastrinitario.app.repository.NotificationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final NotificationRepository notificationRepository;

    public MessageController(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Map<String, Object>>> getUserMessages(@PathVariable Long userId) {
        List<Notification> notifications = notificationRepository.findByUserId(userId);
        
        List<Map<String, Object>> messages = notifications.stream()
            .filter(n -> "NOTIFICATION_REPLY".equals(n.getNotificationType()))
            .map(this::mapToMessage)
            .toList();
        
        return ResponseEntity.ok(messages);
    }

    @PostMapping("/{messageId}/read")
    public ResponseEntity<?> markAsRead(@PathVariable Long messageId) {
        return notificationRepository.findById(messageId)
            .map(notification -> {
                notification.setRead(true);
                notificationRepository.save(notification);
                return ResponseEntity.ok().body(Map.of("success", true));
            })
            .orElse(ResponseEntity.notFound().build());
    }

    private Map<String, Object> mapToMessage(Notification n) {
        Map<String, Object> message = new HashMap<>();
        message.put("id", n.getId());
        message.put("senderId", n.getUser() != null ? n.getUser().getId() : 0);
        message.put("senderName", n.getUser() != null ? n.getUser().getName() : "");
        message.put("senderSurname", n.getUser() != null ? n.getUser().getSurname() : "");
        message.put("recipientId", 0);
        message.put("recipientName", "");
        message.put("recipientSurname", "");
        message.put("originalNotificationId", 0);
        message.put("originalNotificationTitle", n.getTitle());
        message.put("replyMessage", n.getMessage());
        message.put("createdAt", n.getCreatedAt() != null ? n.getCreatedAt().toString() : "");
        message.put("isRead", n.isRead());
        return message;
    }
}