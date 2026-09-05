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
    private final com.notastrinitario.app.repository.UserRepository userRepository;
    private final com.notastrinitario.app.repository.RoleRepository roleRepository;

    public UserController(UserService userService,
                           com.notastrinitario.app.repository.UserRepository userRepository,
                           com.notastrinitario.app.repository.RoleRepository roleRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
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

    // ── Usuarios creados sin rol asignado (Configuración de Año, solo admin) ──
    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/roles-disponibles")
    public ResponseEntity<?> rolesDisponibles() {
        List<Map<String, Object>> dto = StreamSupport.stream(roleRepository.findAll().spliterator(), false)
                .map(r -> {
                    Map<String, Object> m = new HashMap<>();
                    m.put("id", r.getId());
                    m.put("name", r.getName());
                    return m;
                }).collect(Collectors.toList());
        return ResponseEntity.ok(dto);
    }

    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/sin-rol")
    public ResponseEntity<?> usuariosSinRol() {
        List<User> sinRol = StreamSupport.stream(userRepository.findAll().spliterator(), false)
                .filter(u -> u.getRole() == null)
                .collect(Collectors.toList());

        List<Map<String, Object>> dto = sinRol.stream().map(u -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", u.getId());
            m.put("name", u.getName());
            m.put("surname", u.getSurname());
            m.put("username", u.getUsername());
            m.put("email", u.getEmail());
            return m;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(dto);
    }

    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}/role")
    public ResponseEntity<?> asignarRol(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Usuario no encontrado"));
        }

        Long roleId;
        try {
            roleId = Long.valueOf(body.get("roleId").toString());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", "roleId inválido"));
        }

        var roleOpt = roleRepository.findById(roleId);
        if (roleOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Rol no encontrado"));
        }

        User user = userOpt.get();
        user.setRole(roleOpt.get());
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Rol asignado correctamente"));
    }

}