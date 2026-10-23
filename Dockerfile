# ---------- Etapa 1: compilar el backend (Spring Boot, Java 21) ----------
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /build
COPY pom.xml .
COPY src ./src
# El frontend se despliega aparte (Cloudflare Pages); el plugin de Node ya viene con skip=true.
RUN mvn -q -B -DskipTests package

# ---------- Etapa 2: runtime con Java + Python + Playwright/Chromium ----------
FROM eclipse-temurin:21-jre-noble
ENV DEBIAN_FRONTEND=noninteractive \
    PLAYWRIGHT_BROWSERS_PATH=/ms-playwright \
    PIP_BREAK_SYSTEM_PACKAGES=1

RUN apt-get update \
 && apt-get install -y --no-install-recommends python3 python3-pip python-is-python3 \
 && pip install --no-cache-dir playwright beautifulsoup4 pypdf \
 && playwright install --with-deps chromium \
 && chmod -R a+rX /ms-playwright \
 && rm -rf /var/lib/apt/lists/*

RUN useradd -m -u 10001 app
WORKDIR /app
COPY --from=build /build/target/*.jar /app/app.jar
COPY python ./python
COPY Plantillas ./Plantillas
RUN mkdir -p "Boletines Generados" "Consolidados Generados" uploads/chat uploads/profile-pictures \
 && chown -R app:app /app
USER app

# Render free = 512 MB de RAM: heap de Java pequeño para dejar sitio a Chromium.
ENV JAVA_TOOL_OPTIONS="-Xmx230m -Xss512k -XX:+UseSerialGC -XX:MaxMetaspaceSize=128m -XX:TieredStopAtLevel=1" \
    SPRING_PROFILES_ACTIVE=prod

EXPOSE 8080
CMD ["java", "-jar", "/app/app.jar"]
