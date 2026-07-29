package com.notastrinitario.app.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.notastrinitario.app.entity.User;
import com.notastrinitario.app.service.UserService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
	
	//Create a new user
    // Health check (usado por el frontend para detectar reconexión)
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "UP"));
    }

    //Create a new user
    @PostMapping
    public ResponseEntity<?> create (@RequestBody User user) {
		String username = user.getUsername();
		String email = user.getEmail();

		User existing = null;
		if (username != null && !username.isBlank()) {
			existing = userService.findByUsername(username.trim()).orElse(null);
		}
		if (existing == null && email != null && !email.isBlank()) {
			existing = userService.findByEmail(email.trim()).orElse(null);
		}

		if (existing != null) {
			existing.setName(user.getName());
			existing.setSurname(user.getSurname());
			existing.setUsername(user.getUsername());
			existing.setEmail(user.getEmail());
			existing.setEnable(user.getEnable() != null ? user.getEnable() : existing.getEnable());
			if (user.getRole() != null) {
				existing.setRole(user.getRole());
			}
			if (user.getPassword() != null && !user.getPassword().isBlank()) {
				existing.setPassword(user.getPassword());
			}
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(existing));
		}

		return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
	}
	
	//Read an user
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable(value = "id") Long userid) {
		Optional<User> oUser = userService.findById(userid);
		
		if(!oUser.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(oUser);
	}
	
	//Update an User
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@RequestBody User userDetails, @PathVariable (value = "id") Long userId) {
		Optional<User> user = userService.findById(userId);
		
		if(!user.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		//BeanUtils.copyProperties(userDetails, user.get());
		user.get().setName(userDetails.getName());
		user.get().setSurname(userDetails.getSurname());
		user.get().setUsername(userDetails.getUsername());
		user.get().setEmail(userDetails.getEmail());
		user.get().setEnable(userDetails.getEnable());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user.get()));
		
	}
	
	//Delete an User
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value ="id") Long userId) {
		
		if(!userService.findById(userId).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		userService.deleteById(userId);
		return ResponseEntity.ok().build();
	}
	
    //Read all Users
       @GetMapping
       public List<User> readAll() {
       	List<User> users = StreamSupport
       			.stream(userService.findAll().spliterator(), false)
       			.collect(Collectors.toList());

       	return users;
       }

    @GetMapping("/teachers")
    public List<User> readTeachers() {
        return userService.findAll().stream()
                .filter(u -> u.getRole() != null && "TEACHER".equalsIgnoreCase(u.getRole().getName()))
                .collect(Collectors.toList());
    }

	   //Upload profile picture
	   @PostMapping("/{id}/profile-picture")
	   public ResponseEntity<?> uploadProfilePicture(@PathVariable(value = "id") Long userId, @RequestParam("file") MultipartFile file) {
	   	Optional<User> userOpt = userService.findById(userId);

	   	if(!userOpt.isPresent()) {
	   		return ResponseEntity.notFound().build();
	   	}

	   	User user = userOpt.get();

	   	try {
	   		// Create directory if not exists
	   		Path uploadDir = Paths.get("uploads/profile-pictures");
	   		if (!Files.exists(uploadDir)) {
	   			Files.createDirectories(uploadDir);
	   		}

	   		// Save file
	   		String fileName = userId + "_" + file.getOriginalFilename();
	   		Path filePath = uploadDir.resolve(fileName);
	   		Files.write(filePath, file.getBytes());

	   		// Update user
	   		user.setProfilePicture("/uploads/profile-pictures/" + fileName);
	   		userService.save(user);

	   		// Create proper JSON response
	   		Map<String, String> response = new HashMap<>();
	   		response.put("message", "Profile picture uploaded successfully");
	   		response.put("profilePicture", "/uploads/profile-pictures/" + fileName);

 	   return ResponseEntity.ok().body(response);

	   	} catch (IOException e) {
	   		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file");
	   	}
	   }

    @PutMapping("/{id}/password")
    public ResponseEntity<?> changePassword(@PathVariable(value = "id") Long userId, @RequestBody Map<String, String> body) {
        String currentPassword = body.get("currentPassword");
        String newPassword = body.get("newPassword");

        if (newPassword == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "newPassword es requerido"));
        }

        try {
            if (currentPassword != null && !currentPassword.isEmpty()) {
                userService.changePassword(userId, currentPassword, newPassword);
            } else {
                userService.resetPassword(userId, newPassword);
            }
            return ResponseEntity.ok(Map.of("message", "Contraseña actualizada correctamente"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/{id}/password/reset")
    public ResponseEntity<?> resetPassword(@PathVariable(value = "id") Long userId, @RequestBody Map<String, String> body) {
        String newPassword = body.get("newPassword");

        if (newPassword == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "newPassword es requerido"));
        }

        try {
            userService.resetPassword(userId, newPassword);
            return ResponseEntity.ok(Map.of("message", "Contraseña restablecida correctamente"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        }
    }


}
