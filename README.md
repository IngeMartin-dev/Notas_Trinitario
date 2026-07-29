# FUNCIONAMIENTO

Se utiliza:

## Spring Boot (Servidor)

## My SQL Workbench (DataBase)

## Angular (Frontend)

## Java (Backend)

# Como ver el funcionamiento

- Intalarse la extecion en VScode de Spring Boot (vmware.vscode-boot-dev-pack) (https://marketplace.visualstudio.com/itemsitemName=vmware.vscode-boot-dev-pack)
- en My SQL Workbench poner el codigo de (student_data_test.sql) generado con IA y (Usuarios.sql)
- en la termina de VScode poner

```bash
cd Frontend
```

- y despues

```bash
ng serve
```

- espere a que le arroge (http://localhost:4200/)
- encender en servidor de spring boot
- y Listo para Funcionamiento

## 5/04/2026

- se agrego rate limiting (protección contra ataques de fuerza bruta) arroja Error 429 (Too Many Requests)

# Protección                          Implementado

- Rate Limiting (Anti-DDoS simple)    ✅ 100 req/min por IP (Bucket4j)
- Fuerza Bruta                        ✅ 5 intentos, 15 min lockout
- JWT Auth                            ✅ ya estaba
- Spring Security                     ✅ ya estaba

# No protege contra: (futuramente por agregar)

- DDoS distribuido (múltiples IPs)
- ataques de capa 3/4
- inundación de tráfico

# Para probar las protecciones:

1. Probar Rate Limiting (100 req/min)

# En PowerShell o terminal

```bash
for ($i=1; $i -le 110; $i++) {
Invoke-WebRequest -Uri "http://localhost:8080/" -Method GET | Select-Object StatusCode
}
```

Deberías ver códigos 200 hasta el request 100, y 429 a partir del 101 y mostrar este Error.

```bash
{
  "error": "Too many requests. Please try again later."
}
```

2. Probar Fuerza Brusta (5 intentos)

# Intentar login fallido 5+ veces

```bash
for ($i=1; $i -le 6; $i++) {
Invoke-RestMethod -Uri "http://localhost:8080/api/auth/login" -Method POST -Body (@{username="admin";password="wrong"} | ConvertTo-Json) -ContentType "application/json"}
```

El 6to intento debería retornar:

```bash
{
  "blocked": true,
  "remainingSeconds": 900,
  "error": "Has sido bloqueado por 15 minutos. Intenta m\u00E1s tarde."
}
```

3. Verificar headers de rate limit

```bash
curl -v http://localhost:8080/
```

Deberías ver: X-Rate-Limit-Remaining: 99

# Nota: Asegúrate de que el servidor esté corriendo (mvn spring-boot:run o desde Eclipse).

- El rate limiting de 100 requests/minuto hace lo siguiente:

# Acción	Descripción
  Permite	Hasta 100 solicitudes por minuto por IP
  Bloquea	Devuelve código 429 (Too Many Requests) cuando se excede
  Muestra   header	X-Rate-Limit-Remaining indica requests restantes
  Ejemplo   de respuesta cuando se bloquea:

```bash
{"error":"Too many requests. Please try again later."}
```
# Para qué sirve:

- Previene que un mismo IP sobrecargue el servidor
- Protege contra ataques de inundación (flooding)
- Limita el uso excesivo de recursos
- Diferencia con fuerza bruta:

Rate limiting: cuenta por IP (muchos requests rápidos)
Fuerza bruta: cuenta por username (muchos passwords fallidos)

# Funciona así:

1. Cada IP tiene su propio "bucket" con 100 tokens
2. Cada request consume 1 token
3. Cuando se agotan los tokens, retorna 429
4. Se reinicia cada minuto


# 01/05/26

# Cambios Realizados - Plan de Estudio no Intensivo

## Resumen de Cambios

Se han implementado las siguientes mejoras para resolver los problemas reportados:

### 1. ✅ Fórmulas ahora aparecen correctamente renderizadas (KaTeX)
**Archivo**: `Frontend/src/app/grades/grades.ts`

**Problema**: Las fórmulas matemáticas aparecían como código LaTeX crudo (ej: `\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`)

**Solución**: 
- Modificada la función `sanitizeAiText()` para preservar los backslashes de LaTeX
- Se escapan temporalmente los backslashes antes del HTML escaping
- Se restauran después del procesamiento
- CSS actualizado para renderizado correcto

**Código modificado**:
```typescript
// Antes: HTML escaping convertía \ a &#x5C;
// Después: Preserva backslashes para LaTeX
html = html.replace(/&/g, '&amp;');
html = html.replace(/\\/g, '##LATEX_BACKSLASH##');
html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
html = html.replace(/##LATEX_BACKSLASH##/g, '\\\\');
```

---

### 2. ✅ Título cambiado a "Plan de Estudio no Intensivo"
**Archivo**: `Frontend/src/app/grades/grades.html`

**Cambio**:
```html
<!-- Antes -->
<h2>📚 Plan de Estudio Personalizado</h2>

<!-- Después -->
<h2>📚 Plan de Estudio no Intensivo</h2>
```

---

### 3. ✅ Plan usa el ancho completo del contenedor
**Archivo**: `Frontend/src/app/grades/grades.css`

**Cambios**:
```css
/* Contenedor principal */
.plan-content-fullscreen {
  width: 100%;
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
  padding: 40px;
  border-radius: 16px;
  box-shadow: inset 0 0 30px rgba(27, 106, 235, 0.03);
}

/* Texto del plan */
.plan-text {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.plan-text .paragraph-block {
  width: 100%;
  box-sizing: border-box;
}

/* Título */
.plan-content-fullscreen h3 {
  width: 100%;
  padding: 20px 40px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 12px;
  text-align: center;
  margin: 0 0 30px 0;
}
```

**Efecto**: El plan ahora utiliza todo el espacio disponible dentro del modal, con bordes redondeados y gradientes profesionales.

---

### 4. ✅ Evita trigonometría por defecto
**Archivo**: `Frontend/src/app/grades/grades.ts`

**Cambio**: Se simplificó el prompt de la IA para evitar ejemplos de trigonometría automáticos a menos que se soliciten explícitamente:

```typescript
// Agregado en las instrucciones de la IA:
"NO uses trigonometría a menos que se mencione explícitamente en los temas. 
 Usa ejemplos variados y generalistas."
```

**Adicionalmente**:
- Se simplificó el prompt para ser más generalista
- Se mantienen las instrucciones de formato LaTeX correcto
- Se redujo la complejidad del template literal

---

### 5. ✅ Corrección de errores de sintaxis
**Archivo**: `Frontend/src/app/grades/grades.ts`

**Errores corregidos**:

1. **Línea 1347**: Template literal mal cerrado
   ```typescript
   // Antes (ERROR):
   - Los vídeos deben ser enlaces reales y DISPONIBLES";
   
   // Después (CORREGIDO):
   - Los vídeos deben ser enlaces reales y DISPONIBLES`
   ```
   
2. **Línea 1291-1292**: Indentación inconsistente
   ```typescript
   // Antes: Múltiples niveles de indentación confusos
        const prompt = `Genera un plan...
   
   // Después: Indentación consistente
      const prompt = `Genera un plan...
   ```

3. **Línea 1348-1354**: Simplificación del fetch
   ```typescript
   // Antes: Template literal en línea complejo
   const response = await fetch(`https://...`, { ... });
   
   // Después: URL separada para claridad
   const url = 'https://generativelanguage.googleapis.com/...';
   const response = await fetch(url, { ... });
   ```

---

### 6. ✅ Mejoras de formato matemático
**Archivo**: `Frontend/src/app/grades/grades.ts`

**Mejoras**:
- Se amplió la corrección de comandos LaTeX faltantes
- Se agregaron símbolos adicionales: `\approx`, `\equiv`, `\times`, `\cdot`
- El sistema ahora preserva correctamente:
  - Fracciones: `$\\frac{a}{b}$`
  - Raíces: `$\\sqrt{x}$`
  - Sumatorias: `$\\sum$`
  - Integrales: `$\\int$`
  - Límites: `$\\lim$`
  - Letras griegas: `$\\alpha$`, `$\\beta$`, `$\\gamma$`, etc.

---

## Resultado Final

### Antes ❌:
- Las fórmulas aparecían como código: `\cos(\\theta) = \\frac{4}{5}`
- Título: "Plan de Estudio Personalizado"
- Plan con espaciado limitado
- Muchos ejemplos de trigonometría automáticos
- Errores de sintaxis frecuentes

### Después ✅:
- Las fórmulas se renderizan correctamente:
  <div class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>cos</mi><mo>⁡</mo><mo stretchy="false" class="mopen" style="top: 0em; bottom: 0em;">(</mo><mi>θ</mi><mo stretchy="false" class="mclose" style="top: 0em; bottom: 0em;">)</mo><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac></mrow><annotation encoding="application/x-tex">\cos(\\theta) = \\frac{4}{5}</annotation></semantics></math></span></span></div>
- Título: "📚 Plan de Estudio"
- Plan con diseño de borde a borde
- Ejemplos variados y generalistas
- Construcción exitosa sin errores

---

## Pruebas Realizadas

✅ Compilación TypeScript exitosa  
✅ Build Angular completado sin errores  
✅ Estilos CSS aplicados correctamente  
✅ Renderizado KaTeX funcional  
✅ Diseño responsivo mantenido  
✅ Funcionalidad existente preservada  

---

## Archivos Modificados

1. `Frontend/src/app/grades/grades.ts` - Lógica y sanitización
2. `Frontend/src/app/grades/grades.html` - Título del modal
3. `Frontend/src/app/grades/grades.css` - Estilos y diseño

## Notas Técnicas

- Las constantes `handleKeydown`, `animateProgress`, `initNotificationSound` eran errores preexistentes que no afectan la funcionalidad principal
- El sistema de IA continuará funcionando normalmente
- El enlace de KaTeX.js en `index.html` ya estaba configurado correctamente
- No se requieren cambios en el backend
- Se agrego `KaTeX` (Renderizado de operaciones Algebraicas)


##### Hecho por Martin Oviedo un simple estudiante de 11 y futuro Ing. de sistemas senior FULLSTACK
