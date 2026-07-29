# Deploy de Notas Trinitario

## Resumen de arquitectura

- Backend: Spring Boot (Java) — puerto por defecto `8080`, consume MySQL.
- Frontend: Angular — archivos estáticos servidos desde cualquier hosting web.
- Base de datos: MySQL.

El objetivo es dejar de usar `localhost:8080` y exponer ambos módulos en internet.

---

## 1) Preparar el backend

### Cambiar base_url y CORS

Edita `src/main/resources/application.properties` y define la URL pública:

```properties
server.port=${PORT:8080}
spring.datasource.url=jdbc:mysql://<HOST_MYSQL>:3306/db_notastrinitario?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=America/Bogota
spring.datasource.username=<USUARIO_DB>
spring.datasource.password=<PASSWORD_DB>
```

Configura CORS para el dominio del frontend:

```java
// En SpringBootApplication o un @Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")
                    .allowedOrigins("https://tu-dominio.com")
                    .allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
                    .allowCredentials(true);
        }
    };
}
```

### Build del backend

```bash
./mvnw clean package -DskipTests
```

El artefacto quedará en `target/*.jar`.

---

## 2) Base de datos en producción

No uses el MySQL local. Usa un servicio gestionado:

- Railway MySQL
- Amazon RDS
- Google Cloud SQL
- Azure Database for MySQL

Crea la base de datos y un usuario dedicado. Exporta tus datos locales y cárgalos en la instancia remota.

---

## 3) Deploy del backend

### Opción A: Servidor VPS (Ubuntu, EC2, etc.)

Instala Java y usa systemd:

```bash
sudo nano /etc/systemd/system/notas-backend.service
```

```ini
[Unit]
Description=Notas Trinitario Backend
After=network.target

[Service]
Environment="DB_URL=jdbc:mysql://<HOST>:3306/db_notastrinitario"
Environment="DB_USER=..."
Environment="DB_PASS=..."
Environment="PORT=8080"
ExecStart=java -jar /home/<user>/app/notas-backend.jar
Restart=always
User=<user>

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now notas-backend
```

### Opción B: PaaS (Railway / Render / Fly.io)

- Sube el `.jar` o conecta el repo.
- Define variables de entorno: `DB_URL`, `DB_USER`, `DB_PASS`, `PORT`.
- Expone el puerto `8080`.

---

## 4) Preparar el frontend

### Ajustar la URL del API

Antes de buildear, cambia la base URL en Angular por tu dominio real. Usa `environment.ts` y `environment.prod.ts`:

```ts
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.tu-dominio.com'
};
```

Reemplaza los `http://localhost:8080/api/...` por `${environment.apiUrl}/api/...` en los `HttpClient` correspondientes. Si usas `HttpInterceptor`, centralízalo en un solo lugar.

### Build del frontend

```bash
cd Frontend
npm install
ng build --configuration production
```

Los archivos estáticos quedan en `dist/Frontend/browser`.

---

## 5) Deploy del frontend

### Opción A: Servidor web propio (Nginx)

```bash
sudo apt install nginx
sudo cp -r Frontend/dist/Frontend/browser/* /var/www/html/
sudo nano /etc/nginx/sites-available/notas-frontend
```

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass https://api.tu-dominio.com;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/notas-frontend /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### Opción B: Hosting estático

- Vercel / Netlify para el frontend (suelta la carpeta `dist/...`).
- Cloudflare Pages.
- S3 + CloudFront.

Sube el build y apunta el dominio a ese servicio.

---

## 6) Dominio y HTTPS

Usa Cloudflare o el DNS de tu proveedor:

- `tu-dominio.com` → frontend
- `api.tu-dominio.com` → backend (IP o host del PaaS)

Habilita HTTPS automático (Let's Encrypt / Cloudflare / hosting incluido).

---

## 7) Checklist post-deploy

1. Abrir `https://tu-dominio.com` y validar que carga Angular.
2. Logearse, crear/editar estudiantes y confirmar que las llamadas a `/api/...` responden correcto.
3. Verificar que no aparece `localhost:8080` en la consola del navegador.
4. Confirmar que al cambiar estado o eliminar se refleja sin recargar.
5. Probar en celular (otra red) para confirmar acceso público.
6. Validar que la base de datos NO es la local (`localhost`) y que hay respaldos automáticos.

---

## 8) Errores comunes

- CORS bloqueado: revisa `allowedOrigins` y que ambos usen `https`.
- 500 en eliminar: confirma que en producción se setearon todas las tablas con `student_id` o ajusta el servicio de borrado.
- Estado se pierde al reiniciar: asegúrate de no forzar `active = true` en servicio ni controlador.
- Angular sigue llamando a `localhost`: limpia caché y verifica `environment.prod.ts`.
