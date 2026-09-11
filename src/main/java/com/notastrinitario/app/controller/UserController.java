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
    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> create (@RequestBody User user) {
		// Antes esta ruta guardaba la contraseña recibida tal cual, en texto
		// plano, en la base de datos (userService.save no hashea nada).
		// La hasheamos igual que en registro/creación de profesores/padres.
		if (user.getPassword() != null && !user.getPassword().isBlank()) {
			user.setPassword(com.notastrinitario.app.security.PasswordSecurity.hash(user.getPassword()));
		}
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
	// Un usuario puede ver su propio perfil; ver el de otro exige ADMIN.
	@org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN') or #userid == authentication.principal.id")
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable(value = "id") Long userid) {
		Optional<User> oUser = userService.findById(userid);
		
		if(!oUser.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(oUser);
	}
	
	//Update an User
	// Igual: editar el propio perfil sí, editar el de otro exige ADMIN.
	@org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@RequestBody User userDetails, @PathVariable (value = "id") Long userId) {
		Optional<User> user = userService.findById(userId);
		
		if(!user.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		String nuevoNombre = userDetails.getName() != null ? userDetails.getName().trim() : "";
		String nuevoEmail = userDetails.getEmail() != null ? userDetails.getEmail().trim() : "";
		String nuevoUsername = userDetails.getUsername() != null ? userDetails.getUsername().trim() : "";

		if (nuevoNombre.isEmpty()) {
			return ResponseEntity.badRequest().body(Map.of("error", "El nombre es obligatorio"));
		}
		if (nuevoEmail.isEmpty()) {
			return ResponseEntity.badRequest().body(Map.of("error", "El correo es obligatorio"));
		}
		if (!nuevoEmail.matches("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")) {
			return ResponseEntity.badRequest().body(Map.of("error", "El correo no tiene un formato válido"));
		}
		if (nuevoUsername.isEmpty()) {
			return ResponseEntity.badRequest().body(Map.of("error", "El nombre de usuario es obligatorio"));
		}

		// Antes, si el correo o el usuario ya estaban en uso por OTRA cuenta,
		// el guardado fallaba con una excepción de la base de datos sin
		// capturar (el índice único de la columna la rechazaba), y el
		// usuario solo veía "Error al actualizar el perfil" sin saber por
		// qué. Ahora se valida antes y se explica exactamente cuál es el problema.
		Optional<User> conEseCorreo = userRepository.findByEmail(nuevoEmail);
		if (conEseCorreo.isPresent() && !conEseCorreo.get().getId().equals(userId)) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(Map.of("error", "Ese correo ya está en uso por otra cuenta"));
		}
		Optional<User> conEseUsuario = userRepository.findByUsername(nuevoUsername);
		if (conEseUsuario.isPresent() && !conEseUsuario.get().getId().equals(userId)) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(Map.of("error", "Ese nombre de usuario ya está en uso por otra cuenta"));
		}

		user.get().setName(nuevoNombre);
		user.get().setSurname(userDetails.getSurname());
		user.get().setUsername(nuevoUsername);
		user.get().setEmail(nuevoEmail);
		user.get().setEnable(userDetails.getEnable());

		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user.get()));
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			// Red de seguridad por si algo se coló pese a las validaciones de arriba.
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(Map.of("error", "No se pudo guardar: el correo o el usuario ya están en uso"));
		}
	}
	
	//Delete an User
	@org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value ="id") Long userId) {
		
		if(!userService.findById(userId).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		userService.deleteById(userId);
		return ResponseEntity.ok().build();
	}
	
    //Read all Users
       @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
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
	   // El usuario puede subir SU propia foto; subir la de otro exige ADMIN.
	   @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
	   @PostMapping("/{id}/profile-picture")
	   public ResponseEntity<?> uploadProfilePicture(@PathVariable(value = "id") Long userId, @RequestParam("file") MultipartFile file) {
	   	Optional<User> userOpt = userService.findById(userId);

	   	if(!userOpt.isPresent()) {
	   		Map<String, String> notFound = new HashMap<>();
	   		notFound.put("error", "Usuario no encontrado");
	   		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(notFound);
	   	}

	   	if (file == null || file.isEmpty()) {
	   		Map<String, String> emptyFile = new HashMap<>();
	   		emptyFile.put("error", "No se recibió ningún archivo");
	   		return ResponseEntity.badRequest().body(emptyFile);
	   	}

	   	String contentType = file.getContentType();
	   	if (contentType == null || !contentType.startsWith("image/")) {
	   		Map<String, String> badType = new HashMap<>();
	   		badType.put("error", "El archivo debe ser una imagen (jpg, png, webp, etc.)");
	   		return ResponseEntity.badRequest().body(badType);
	   	}

	   	User user = userOpt.get();

	   	try {
	   		// Create directory if not exists
	   		Path uploadDir = Paths.get("uploads/profile-pictures");
	   		if (!Files.exists(uploadDir)) {
	   			Files.createDirectories(uploadDir);
	   		}

	   		// Antes el nombre del archivo se armaba con
	   		// file.getOriginalFilename() tal cual, sin sanear. Un nombre como
	   		// "../../../ruta/lo-que-sea" (que el navegador SÍ puede mandar,
	   		// el nombre del archivo lo controla quien hace la petición HTTP,
	   		// no un <input type=file>) permitía escribir el archivo subido
	   		// FUERA de uploads/profile-pictures (path traversal / escritura
	   		// arbitraria de archivos en el servidor). Ahora se ignora el
	   		// nombre original salvo por su extensión, validada contra una
	   		// lista blanca, y se genera un nombre propio y seguro.
	   		String original = file.getOriginalFilename() != null ? file.getOriginalFilename() : "";
	   		String ext = "";
	   		int dot = original.lastIndexOf('.');
	   		if (dot >= 0 && dot < original.length() - 1) {
	   			ext = original.substring(dot + 1).toLowerCase().replaceAll("[^a-z0-9]", "");
	   		}
	   		java.util.Set<String> extensionesPermitidas = java.util.Set.of("jpg", "jpeg", "png", "gif", "webp");
	   		if (!extensionesPermitidas.contains(ext)) {
	   			ext = "jpg";
	   		}
	   		String fileName = userId + "_" + java.util.UUID.randomUUID() + "." + ext;
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
	   		System.err.println("[FotoPerfil] No se pudo escribir el archivo en disco para el usuario " + userId + ": " + e.getMessage());
	   		Map<String, String> response = new HashMap<>();
	   		response.put("error", "No se pudo guardar el archivo en el servidor: " + e.getMessage());
	   		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	   	} catch (Exception e) {
	   		String detalle = describirCausaRaiz(e);
	   		System.err.println("[FotoPerfil] Error guardando el usuario " + userId + ": " + detalle);
	   		e.printStackTrace();
	   		Map<String, String> response = new HashMap<>();
	   		response.put("error", "No se pudo guardar el usuario: " + detalle);
	   		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	   	}
	   }

	   /**
	    * Hibernate/Spring suelen envolver el error real (por ejemplo una violación
	    * de @NotBlank/@Email/@Size en la entidad User) dentro de excepciones
	    * genéricas como TransactionSystemException ("Could not commit JPA
	    * transaction"), que no dicen nada útil por sí solas. Este método baja por
	    * la cadena de "causas" hasta encontrar la violación de validación
	    * concreta (o, si no la encuentra, el mensaje más profundo disponible).
	    */
	   private String describirCausaRaiz(Throwable e) {
	   	Throwable actual = e;
	   	while (actual != null) {
	   		if (actual instanceof jakarta.validation.ConstraintViolationException cve) {
	   			StringBuilder detalle = new StringBuilder();
	   			cve.getConstraintViolations().forEach(v ->
	   				detalle.append(v.getPropertyPath()).append(" ").append(v.getMessage()).append("; "));
	   			return detalle.toString();
	   		}
	   		if (actual.getCause() == null || actual.getCause() == actual) {
	   			return actual.getClass().getSimpleName() + ": " + actual.getMessage();
	   		}
	   		actual = actual.getCause();
	   	}
	   	return e.getMessage();
	   }

    // Cambiar la propia contraseña (con currentPassword) está permitido para
    // el dueño de la cuenta o un ADMIN. La rama sin currentPassword es un
    // reseteo "de admin" — antes esto NO comprobaba nada, así que cualquier
    // cuenta logueada podía resetear la contraseña de CUALQUIER otro usuario
    // (incluido un ADMIN) con solo mandar {"newPassword": "..."} sin
    // currentPassword. Ahora: sin currentPassword, solo un ADMIN puede
    // seguir esa rama; cualquier otro usuario debe mandar su contraseña
    // actual para poder cambiarla.
    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
    @PutMapping("/{id}/password")
    public ResponseEntity<?> changePassword(@PathVariable(value = "id") Long userId, @RequestBody Map<String, String> body) {
        String currentPassword = body.get("currentPassword");
        String newPassword = body.get("newPassword");

        if (newPassword == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "newPassword es requerido"));
        }

        boolean esAdmin = org.springframework.security.core.context.SecurityContextHolder.getContext()
                .getAuthentication().getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        try {
            if (currentPassword != null && !currentPassword.isEmpty()) {
                userService.changePassword(userId, currentPassword, newPassword);
            } else if (esAdmin) {
                userService.resetPassword(userId, newPassword);
            } else {
                return ResponseEntity.badRequest().body(Map.of("error", "Debes indicar tu contraseña actual (currentPassword)"));
            }
            return ResponseEntity.ok(Map.of("message", "Contraseña actualizada correctamente"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        }
    }

    // Reseteo de contraseña "de administrador" (sin conocer la actual):
    // solo ADMIN. Antes cualquier cuenta logueada podía resetear la
    // contraseña de cualquier otro usuario llamando este endpoint.
    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
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

    // ── Recuadro "Roles y permisos" de Configuración de Año ──
    // Lista TODOS los usuarios con rol (a diferencia de /sin-rol), agrupables
    // en el frontend por pestaña Padres / Profesores / Administradores, más
    // si ya tienen el rol ADMIN "extra" sumado (ver `additionalAdmin`).
    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/gestion-roles")
    public ResponseEntity<?> usuariosGestionRoles() {
        List<Map<String, Object>> dto = StreamSupport.stream(userRepository.findAll().spliterator(), false)
                .filter(u -> u.getRole() != null)
                .map(u -> {
                    Map<String, Object> m = new HashMap<>();
                    m.put("id", u.getId());
                    m.put("name", u.getName());
                    m.put("surname", u.getSurname());
                    m.put("username", u.getUsername());
                    m.put("email", u.getEmail());
                    m.put("roleId", u.getRole().getId());
                    m.put("roleName", u.getRole().getName());
                    m.put("additionalAdmin", u.getAdditionalAdmin());
                    return m;
                }).collect(Collectors.toList());
        return ResponseEntity.ok(dto);
    }

    // Suma (o quita) el rol ADMIN "extra" a un usuario, SIN tocar su rol
    // principal. body: { "enable": true|false }
    @org.springframework.security.access.prepost.PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}/admin-extra")
    public ResponseEntity<?> toggleAdminExtra(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Usuario no encontrado"));
        }
        boolean enable = Boolean.TRUE.equals(body.get("enable"));

        User user = userOpt.get();
        user.setAdditionalAdmin(enable);
        userRepository.save(user);

        return ResponseEntity.ok(Map.of(
                "message", enable ? "Rol de administrador sumado correctamente" : "Rol de administrador extra removido",
                "additionalAdmin", user.getAdditionalAdmin()
        ));
    }

}