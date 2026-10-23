# Despliegue gratis: Cloudflare Pages + Render + TiDB Cloud

Frontend (Angular) -> **Cloudflare Pages** · Backend (Spring Boot + Playwright) -> **Render (Free, Docker)** · Base de datos -> **TiDB Cloud Starter**

## 1. Base de datos (TiDB Cloud)
1. Crea un cluster **Starter** (gratis) en https://tidbcloud.com. Verifica que no te pida tarjeta.
2. En *Connect* elige el conector **JDBC / MySQL** y copia host, puerto (4000), usuario y contrasena.
3. Crea la base: `CREATE DATABASE notas_trinitario;`
4. Tu URL JDBC queda asi:
   `jdbc:mysql://<host>:4000/notas_trinitario?sslMode=VERIFY_IDENTITY`
5. Las tablas las crea Hibernate al primer arranque. Para cargar datos de prueba (roles, admin, materias, estudiantes) importa `zsql.sql` desde el *SQL Editor* de TiDB o con el cliente `mysql`.

## 2. Backend (Render)
1. En https://render.com -> *New* -> *Blueprint* -> conecta este repo (usa `render.yaml`). No pide tarjeta en el plan Free.
2. Completa las variables marcadas como secretas:
   - `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD` (de TiDB)
   - `APP_SECURITY_ALLOWED_ORIGINS` = `https://<tu-proyecto>.pages.dev` (sin `/` al final)
   - `MISTRAL_API_KEY` (opcional), `MAIL_USERNAME` / `MAIL_PASSWORD` (opcional)
3. `APP_JWT_SECRET` se genera solo.
4. Si la URL que te da Render no es `https://notas-trinitario-api.onrender.com`, cambia `PRODUCTION_API_URL` en `Frontend/src/app/config/api-base.ts`.

## 3. Frontend (Cloudflare Pages)
*Workers & Pages* -> *Create* -> *Pages* -> conectar con Git -> este repo:
- Root directory: `Frontend`
- Build command: `npm ci && npm run build`
- Build output directory: `dist/Frontend/browser`
- Variable `NODE_VERSION` = `22`

Luego copia la URL `*.pages.dev` y ponla en `APP_SECURITY_ALLOWED_ORIGINS` en Render.

## Limitaciones del plan gratis
- Render duerme el servicio tras 15 min sin trafico; la primera peticion tarda cerca de 1 min.
- 512 MB de RAM: Chromium (PDFs de boletines) puede quedarse sin memoria. Si falla, generar los PDFs es lo primero a optimizar.
- Disco efimero: `uploads/` (fotos de perfil, archivos de chat), `Boletines Generados/` y `Consolidados Generados/` se pierden en cada reinicio o redeploy.
- Render bloquea SMTP saliente en el plan Free (verificalo en su documentacion): el codigo 2FA y el envio de boletines por correo pueden fallar.
- Firebase push viene desactivado (`APP_FIREBASE_ENABLED=false`).
