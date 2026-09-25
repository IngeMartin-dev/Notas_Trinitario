-- =====================================================================
-- Notas_Trinitario · Script SQL completo
-- Crea la base de datos db_notastrinitario y TODAS las tablas necesarias
-- para el proyecto (fiel a las entidades JPA de src/main/java/.../entity),
-- y siembra datos de prueba:
--   - Roles: ADMIN, TEACHER, PARENT
--   - 1 usuario ADMIN y 1 usuario TEACHER (profesor)
--   - 51 materias: 12 primaria (1°-5°), 18 bachillerato (6°-9°),
--     21 media (10°-11°)
--   - 110 estudiantes: 5 por salón (A y B) en cada grado 1° a 11°
--   - 1 cuenta de padre de familia por cada estudiante, enlazada
--   - Notas variadas (1.00 a 5.00, con decimales) para cada estudiante,
--     en cada materia de su nivel y en los 4 períodos académicos
--
-- NOTA IMPORTANTE (bug corregido en el backend):
-- application.properties tiene spring.jpa.hibernate.ddl-auto=update, así
-- que Hibernate normalmente crea/actualiza las tablas solo. Este script
-- es útil para: (a) tener la base ya lista sin levantar la app primero,
-- (b) reinstalar/reiniciar todo desde cero, o (c) entornos donde no se
-- quiere depender de la auto-generación de Hibernate.
--
-- Motor: MySQL 8+. Ejecutar con un cliente que soporte DELIMITER
-- (línea de comandos `mysql`, MySQL Workbench, DBeaver, HeidiSQL, etc.)
-- =====================================================================

-- ---------------------------------------------------------------------
-- 0) BASE DE DATOS
-- ---------------------------------------------------------------------
DROP DATABASE IF EXISTS db_notastrinitario;
CREATE DATABASE db_notastrinitario
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
USE db_notastrinitario;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- 1) TABLAS (equivalentes a las @Entity del proyecto)
-- ---------------------------------------------------------------------

-- Role.java
CREATE TABLE roles (
    id   BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- User.java
CREATE TABLE users (
    id                    BIGINT AUTO_INCREMENT PRIMARY KEY,
    name                  VARCHAR(100),
    surname               VARCHAR(100),
    username              VARCHAR(100) NOT NULL UNIQUE,
    mail                  VARCHAR(100) NOT NULL UNIQUE,
    password              VARCHAR(255) NOT NULL,
    role_id               BIGINT,
    digital_signature     LONGTEXT,
    profile_picture       VARCHAR(255),
    fcm_token             VARCHAR(512),
    two_factor_enabled    TINYINT(1) DEFAULT 0,
    two_factor_secret     VARCHAR(255),
    temp_2fa_code         VARCHAR(20),
    temp_2fa_expiry       BIGINT,
    enable                TINYINT(1) DEFAULT 1,
    terms_accepted_at     DATETIME NULL,
    privacy_accepted_at   DATETIME NULL,
    additional_admin      TINYINT(1) DEFAULT 0,
    CONSTRAINT fk_users_role FOREIGN KEY (role_id) REFERENCES roles(id)
) ENGINE=InnoDB;

-- Student.java
CREATE TABLE students (
    id                    BIGINT AUTO_INCREMENT PRIMARY KEY,
    name                  VARCHAR(100) NOT NULL,
    surname               VARCHAR(100) NOT NULL,
    grade                 VARCHAR(50) NOT NULL,
    class_group           VARCHAR(50),
    previous_grade        VARCHAR(50),
    previous_class_group  VARCHAR(50),
    document_number       VARCHAR(20),
    active                TINYINT(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB;

-- Student.java -> @ManyToMany parents (tabla de unión)
CREATE TABLE student_parents (
    student_id BIGINT NOT NULL,
    user_id    BIGINT NOT NULL,
    PRIMARY KEY (student_id, user_id),
    CONSTRAINT fk_sp_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_sp_user    FOREIGN KEY (user_id)    REFERENCES users(id)    ON DELETE CASCADE
) ENGINE=InnoDB;

-- Subject.java
CREATE TABLE subjects (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    code            VARCHAR(20)  NOT NULL,
    level           VARCHAR(50)  NOT NULL,   -- 'primaria' | 'bachillerato' | 'media'
    grade_min       INT,
    grade_max       INT,
    hours_per_week  INT,
    credits         INT,
    type            VARCHAR(20),
    description     VARCHAR(500),
    teacher_id      BIGINT NULL,
    CONSTRAINT fk_subjects_teacher FOREIGN KEY (teacher_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- SubjectGrade.java
CREATE TABLE subject_grades (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id    BIGINT,
    teacher_id    BIGINT,
    subject_name  VARCHAR(150) NOT NULL,
    subject_id    BIGINT,
    period        INT NOT NULL,
    grade_name    VARCHAR(100),
    grade_value   DOUBLE,
    is_evaluation TINYINT(1),
    appreciative  VARCHAR(50),
    created_at    DATETIME,
    updated_at    DATETIME,
    CONSTRAINT fk_sg_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_sg_teacher FOREIGN KEY (teacher_id) REFERENCES users(id),
    INDEX idx_sg_student_period_subject (student_id, period, subject_name)
) ENGINE=InnoDB;

-- ParentClass.java
CREATE TABLE parent_classes (
    id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    grade     VARCHAR(50) NOT NULL,
    classroom VARCHAR(50) NOT NULL,
    user_id   BIGINT NOT NULL,
    CONSTRAINT fk_pc_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- HomeroomAssignment.java
CREATE TABLE homeroom_assignments (
    id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    grade     VARCHAR(50) NOT NULL,
    classroom VARCHAR(50) NOT NULL,
    user_id   BIGINT NULL,
    CONSTRAINT uq_homeroom_grade_classroom UNIQUE (grade, classroom),
    CONSTRAINT fk_ha_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- GradeColumnConfig.java
CREATE TABLE grade_column_configs (
    id               BIGINT AUTO_INCREMENT PRIMARY KEY,
    teacher_id       BIGINT NOT NULL,
    subject_name     VARCHAR(150) NOT NULL,
    grade            VARCHAR(50) NOT NULL,
    classroom        VARCHAR(50) NOT NULL,
    columns_json     TEXT,
    quizzes_pct      INT DEFAULT 0,
    talleres_pct     INT DEFAULT 0,
    actividades_pct  INT DEFAULT 0,
    created_at       DATETIME,
    updated_at       DATETIME,
    CONSTRAINT uq_gcc UNIQUE (teacher_id, subject_name, grade, classroom),
    CONSTRAINT fk_gcc_teacher FOREIGN KEY (teacher_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- Period.java
CREATE TABLE academic_periods (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    period_number      INT NOT NULL UNIQUE,
    is_unlocked        TINYINT(1) DEFAULT 0,
    start_date         DATETIME,
    end_date           DATETIME,
    unlock_date        DATETIME,
    lock_date          DATETIME,
    description        VARCHAR(255),
    is_automatic       TINYINT(1) DEFAULT 0,
    notified_open_7d   TINYINT(1) DEFAULT 0,
    notified_close_7d  TINYINT(1) DEFAULT 0
) ENGINE=InnoDB;

-- SchoolYearConfig.java (una única fila, id = 1)
CREATE TABLE school_year_config (
    id                             BIGINT PRIMARY KEY,
    year_end_date                  DATE,
    min_passing_grade              DOUBLE DEFAULT 3.5,
    current_academic_year          INT,
    last_wiped_at                  DATETIME,
    last_advanced_at               DATETIME,
    advance_pending_classroom_org  TINYINT(1) DEFAULT 0,
    year_end_notified              TINYINT(1) DEFAULT 0,
    year_end_7d_notified           TINYINT(1) DEFAULT 0
) ENGINE=InnoDB;

-- ReportCard.java
CREATE TABLE report_cards (
    id                  BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id          BIGINT,
    academic_period     VARCHAR(50),
    grades              LONGTEXT,
    comments            LONGTEXT,
    difficulties        LONGTEXT,
    lost_areas          LONGTEXT,
    pdf_url             VARCHAR(500),
    created_at          DATETIME,
    sent_at             DATETIME,
    teacher_id          BIGINT,
    homeroom_teacher    VARCHAR(150),
    created_by          BIGINT,
    is_signed           TINYINT(1) DEFAULT 0,
    signature_date      DATETIME,
    principal_signature LONGTEXT,
    CONSTRAINT fk_rc_student    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_rc_teacher    FOREIGN KEY (teacher_id) REFERENCES users(id),
    CONSTRAINT fk_rc_created_by FOREIGN KEY (created_by) REFERENCES users(id)
) ENGINE=InnoDB;

-- ReportCardHistory.java
CREATE TABLE report_card_history (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    report_card_id     BIGINT,
    event_type         VARCHAR(50),
    event_description  VARCHAR(500),
    event_date         DATETIME,
    user_id            BIGINT,
    CONSTRAINT fk_rch_reportcard FOREIGN KEY (report_card_id) REFERENCES report_cards(id) ON DELETE CASCADE,
    CONSTRAINT fk_rch_user       FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- DigitalSignature.java
CREATE TABLE digital_signatures (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    report_card_id  BIGINT,
    user_id         BIGINT NOT NULL,
    student_id      BIGINT,
    signature_data  LONGTEXT,
    signed_at       DATETIME,
    ip_address      VARCHAR(64),
    CONSTRAINT fk_ds_reportcard FOREIGN KEY (report_card_id) REFERENCES report_cards(id) ON DELETE CASCADE,
    CONSTRAINT fk_ds_user       FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_ds_student    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- RecoveryPlan.java
CREATE TABLE recovery_plans (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id     BIGINT,
    teacher_id     BIGINT,
    subject_name   VARCHAR(150) NOT NULL,
    period         INT NOT NULL,
    topics         LONGTEXT,
    plan_content   LONGTEXT,
    duration_days  INT NOT NULL DEFAULT 2,
    day1_content   LONGTEXT,
    day2_content   LONGTEXT,
    created_at     DATETIME,
    CONSTRAINT fk_rp_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_rp_teacher FOREIGN KEY (teacher_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- RecoveryData.java
CREATE TABLE recovery_data (
    id                    BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id            BIGINT,
    teacher_id            BIGINT,
    subject_name          VARCHAR(150) NOT NULL,
    subject_id            BIGINT,
    period                INT NOT NULL,
    recovery_written      DOUBLE,
    recovery_oral         DOUBLE,
    j_integ               VARCHAR(255),
    comp_social           VARCHAR(255),
    valoracion_acudiente  VARCHAR(20),
    created_at            DATETIME,
    updated_at            DATETIME,
    CONSTRAINT fk_rd_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_rd_teacher FOREIGN KEY (teacher_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- Notification.java
CREATE TABLE notifications (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id            BIGINT,
    title              VARCHAR(255) NOT NULL,
    message            LONGTEXT NOT NULL,
    created_at         DATETIME,
    is_read            TINYINT(1) DEFAULT 0,
    notification_type  VARCHAR(50),
    CONSTRAINT fk_notif_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ChatMessage.java
CREATE TABLE chat_messages (
    id               BIGINT AUTO_INCREMENT PRIMARY KEY,
    sender_id        BIGINT NOT NULL,
    receiver_id      BIGINT NOT NULL,
    message_type     VARCHAR(20) NOT NULL DEFAULT 'TEXT',
    content          LONGTEXT,
    file_url         VARCHAR(500),
    file_name        VARCHAR(255),
    created_at       DATETIME NOT NULL,
    read_at          DATETIME,
    deleted_for_all  TINYINT(1) NOT NULL DEFAULT 0,
    CONSTRAINT fk_chat_sender   FOREIGN KEY (sender_id)   REFERENCES users(id),
    CONSTRAINT fk_chat_receiver FOREIGN KEY (receiver_id) REFERENCES users(id),
    INDEX idx_chat_sender_receiver (sender_id, receiver_id),
    INDEX idx_chat_receiver_sender (receiver_id, sender_id),
    INDEX idx_chat_created_at (created_at)
) ENGINE=InnoDB;

-- RefreshToken.java
CREATE TABLE refresh_tokens (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    token         VARCHAR(512) NOT NULL,
    user_id       BIGINT NOT NULL,
    expires_at    DATETIME NOT NULL,
    created_at    DATETIME NOT NULL,
    device_info   VARCHAR(255),
    ip_address    VARCHAR(64),
    last_used_at  DATETIME,
    CONSTRAINT fk_rt_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Feedback.java
CREATE TABLE feedback (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id     BIGINT,
    message     VARCHAR(2000) NOT NULL,
    created_at  DATETIME NOT NULL,
    reviewed    TINYINT(1) NOT NULL DEFAULT 0,
    CONSTRAINT fk_fb_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- FcmToken.java
CREATE TABLE fcm_tokens (
    id           BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id      BIGINT NOT NULL,
    token        VARCHAR(512) NOT NULL,
    device_type  VARCHAR(20),
    device_name  VARCHAR(150),
    created_at   DATETIME,
    last_used    DATETIME,
    is_active    TINYINT(1) DEFAULT 1,
    CONSTRAINT fk_fcm_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- BoletinDraft.java
CREATE TABLE boletin_drafts (
    id           BIGINT AUTO_INCREMENT PRIMARY KEY,
    grade        VARCHAR(50) NOT NULL,
    classroom    VARCHAR(50) NOT NULL,
    period       INT NOT NULL,
    school_year  VARCHAR(10),
    payload      LONGTEXT NOT NULL,
    created_at   DATETIME,
    updated_at   DATETIME
) ENGINE=InnoDB;

SET FOREIGN_KEY_CHECKS = 1;
USE db_notastrinitario;

-- ---------------------------------------------------------------------
-- 2) ROLES
-- ---------------------------------------------------------------------
INSERT INTO roles (name) VALUES ('ADMIN'), ('TEACHER'), ('PARENT');

-- ---------------------------------------------------------------------
-- 3) USUARIO ADMIN Y USUARIO PROFESOR
-- ---------------------------------------------------------------------
-- Contraseña de AMBOS (demo): Trinitario2026*
-- Hash BCrypt (compatible con Spring Security BCryptPasswordEncoder):
--   $2b$10$ZR/cShQ8NgWjyYwZ9ovrz.JI27xfc7HNtDHY78c/6R.i0ydTMKFgu
-- CAMBIA la contraseña real desde la app en cuanto entres la primera vez.
INSERT INTO users
    (name, surname, username, mail, password, role_id, enable, additional_admin)
VALUES
    ('Martín', 'Administrador', 'admin',
     'admin@colegiotrinitario.edu.co',
     '$2b$10$ZR/cShQ8NgWjyYwZ9ovrz.JI27xfc7HNtDHY78c/6R.i0ydTMKFgu',
     (SELECT id FROM roles WHERE name = 'ADMIN'), 1, 0),
    ('Ana', 'Profesora', 'profesor',
     'profesor@colegiotrinitario.edu.co',
     '$2b$10$ZR/cShQ8NgWjyYwZ9ovrz.JI27xfc7HNtDHY78c/6R.i0ydTMKFgu',
     (SELECT id FROM roles WHERE name = 'TEACHER'), 1, 0);

SET @teacher_id = (SELECT id FROM users WHERE username = 'profesor');
SET @admin_id   = (SELECT id FROM users WHERE username = 'admin');

-- ---------------------------------------------------------------------
-- 4) CONFIGURACIÓN DE AÑO ESCOLAR Y PERÍODOS ACADÉMICOS
-- ---------------------------------------------------------------------
INSERT INTO school_year_config (id, year_end_date, min_passing_grade, current_academic_year)
VALUES (1, '2026-11-30', 3.5, 2026);

INSERT INTO academic_periods (period_number, is_unlocked, description, is_automatic)
VALUES
    (1, 1, 'Primer período', 0),
    (2, 1, 'Segundo período', 0),
    (3, 1, 'Tercer período', 0),
    (4, 1, 'Cuarto período', 0);

-- ---------------------------------------------------------------------
-- 5) MATERIAS: 12 primaria (1°-5°) + 18 bachillerato (6°-9°)
--    + 21 media (10°-11°) = 51 materias en total.
--    Todas quedan asignadas al único profesor sembrado, para que el
--    filtrado por materia funcione desde ya en la app.
-- ---------------------------------------------------------------------

-- 5.1) PRIMARIA (12 materias) — grade_min=1, grade_max=5
INSERT INTO subjects (name, code, level, grade_min, grade_max, hours_per_week, credits, type, description, teacher_id) VALUES
('Matemáticas',         'MAT-P', 'primaria', 1, 5, 5, 4, 'core', 'Pensamiento lógico-matemático para primaria.', @teacher_id),
('Lengua Castellana',   'LEN-P', 'primaria', 1, 5, 5, 4, 'core', 'Comprensión y producción de textos para primaria.', @teacher_id),
('Inglés',              'ING-P', 'primaria', 1, 5, 3, 2, 'core', 'Competencias comunicativas básicas en inglés.', @teacher_id),
('Ciencias Naturales',  'CNA-P', 'primaria', 1, 5, 3, 3, 'core', 'Exploración del entorno natural y método científico.', @teacher_id),
('Ciencias Sociales',   'CSO-P', 'primaria', 1, 5, 3, 3, 'core', 'Historia, geografía y formación ciudadana para primaria.', @teacher_id),
('Educación Religiosa', 'EDR-P', 'primaria', 1, 5, 1, 1, 'core', 'Formación religiosa y valores espirituales.', @teacher_id),
('Educación Física',    'EDF-P', 'primaria', 1, 5, 2, 2, 'core', 'Desarrollo motriz y hábitos de vida saludable.', @teacher_id),
('Educación Artística', 'EDA-P', 'primaria', 1, 5, 2, 2, 'core', 'Expresión artística y creativa.', @teacher_id),
('Ética y Valores',     'ETI-P', 'primaria', 1, 5, 1, 1, 'core', 'Formación ética y en valores para primaria.', @teacher_id),
('Tecnología e Informática', 'TEC-P', 'primaria', 1, 5, 2, 2, 'core', 'Introducción a herramientas tecnológicas.', @teacher_id),
('Afrocolombianidad',   'AFR-P', 'primaria', 1, 5, 1, 1, 'core', 'Cultura afrocolombiana e historia para primaria.', @teacher_id),
('Educación Emocional', 'EEM-P', 'primaria', 1, 5, 2, 2, 'core', 'Inteligencia emocional y habilidades socioemocionales.', @teacher_id);

-- 5.2) BACHILLERATO (18 materias) — grade_min=6, grade_max=9
INSERT INTO subjects (name, code, level, grade_min, grade_max, hours_per_week, credits, type, description, teacher_id) VALUES
('Matemáticas',              'MAT-B', 'bachillerato', 6, 9, 5, 4, 'core', 'Pensamiento lógico-matemático avanzado.', @teacher_id),
('Lengua Castellana',        'LEN-B', 'bachillerato', 6, 9, 5, 4, 'core', 'Comprensión y producción de textos avanzados.', @teacher_id),
('Inglés',                   'ING-B', 'bachillerato', 6, 9, 3, 3, 'core', 'Competencias comunicativas avanzadas en inglés.', @teacher_id),
('Ciencias Sociales',        'CSO-B', 'bachillerato', 6, 9, 3, 3, 'core', 'Historia contemporánea y formación ciudadana.', @teacher_id),
('Biología',                 'BIO-B', 'bachillerato', 6, 9, 3, 3, 'core', 'Seres vivos, ecología y biología celular.', @teacher_id),
('Física',                   'FIS-B', 'bachillerato', 8, 9, 3, 3, 'core', 'Movimiento, energía y fenómenos físicos.', @teacher_id),
('Química',                  'QUI-B', 'bachillerato', 8, 9, 3, 3, 'core', 'Materia, reacciones químicas y química orgánica.', @teacher_id),
('Ciencias Políticas',       'CPI-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Política, Estado y ciudadanía activa.', @teacher_id),
('Educación Religiosa',      'EDR-B', 'bachillerato', 6, 9, 1, 1, 'core', 'Formación religiosa y valores espirituales.', @teacher_id),
('Educación Física',         'EDF-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Competencias motrices y vida saludable.', @teacher_id),
('Educación Artística',      'EDA-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Expresión artística y creativa.', @teacher_id),
('Cátedra de la Paz',        'CPZ-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Educación para la paz y convivencia.', @teacher_id),
('Competencias Ciudadanas',  'CCZ-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Participación ciudadana y democracia.', @teacher_id),
('Afrocolombianidad',        'AFR-B', 'bachillerato', 6, 9, 1, 1, 'core', 'Cultura afrocolombiana e historia.', @teacher_id),
('Tecnología e Informática', 'TEC-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Herramientas tecnológicas y programación básica.', @teacher_id),
('Ética y Valores',          'ETI-B', 'bachillerato', 6, 9, 1, 1, 'core', 'Formación ética y en valores.', @teacher_id),
('Educación Emocional',      'EEM-B', 'bachillerato', 6, 9, 2, 2, 'core', 'Inteligencia emocional para bachillerato.', @teacher_id),
('Emprendimiento',           'EMP-B', 'bachillerato', 8, 9, 2, 2, 'elective', 'Proyectos emprendedores y gestión básica.', @teacher_id);

-- 5.3) MEDIA (21 materias) — grade_min=10, grade_max=11 · NUNCA se mezclan
--      con las de bachillerato (código propio con sufijo "-M").
INSERT INTO subjects (name, code, level, grade_min, grade_max, hours_per_week, credits, type, description, teacher_id) VALUES
('Matemáticas',              'MAT-M', 'media', 10, 11, 5, 4, 'core', 'Pensamiento lógico-matemático avanzado para Media.', @teacher_id),
('Lengua Castellana',        'LEN-M', 'media', 10, 11, 5, 4, 'core', 'Comprensión y producción de textos para Media.', @teacher_id),
('Inglés',                   'ING-M', 'media', 10, 11, 3, 3, 'core', 'Competencias comunicativas avanzadas en inglés para Media.', @teacher_id),
('Ciencias Sociales',        'CSO-M', 'media', 10, 11, 3, 3, 'core', 'Historia contemporánea y formación ciudadana para Media.', @teacher_id),
('Biología',                 'BIO-M', 'media', 10, 11, 3, 3, 'core', 'Seres vivos, ecología y biología celular para Media.', @teacher_id),
('Física',                   'FIS-M', 'media', 10, 11, 3, 3, 'core', 'Movimiento, energía y fenómenos físicos para Media.', @teacher_id),
('Química',                  'QUI-M', 'media', 10, 11, 3, 3, 'core', 'Materia, reacciones químicas y química orgánica para Media.', @teacher_id),
('Filosofía',                'FIL-M', 'media', 10, 11, 2, 2, 'core', 'Reflexión filosófica y pensamiento crítico para Media.', @teacher_id),
('Estadística',              'EST-M', 'media', 10, 11, 2, 2, 'core', 'Análisis estadístico y probabilidades para Media.', @teacher_id),
('Geometría',                'GEO-M', 'media', 10, 11, 2, 2, 'core', 'Geometría analítica avanzada para Media.', @teacher_id),
('Cálculo',                  'CAL-M', 'media', 10, 11, 2, 2, 'core', 'Introducción al cálculo diferencial para Media.', @teacher_id),
('Educación Religiosa',      'EDR-M', 'media', 10, 11, 1, 1, 'core', 'Formación religiosa y valores espirituales para Media.', @teacher_id),
('Educación Física',         'EDF-M', 'media', 10, 11, 2, 2, 'core', 'Competencias motrices para Media.', @teacher_id),
('Educación Artística',      'EDA-M', 'media', 10, 11, 2, 2, 'core', 'Expresión artística y creativa para Media.', @teacher_id),
('Competencias Ciudadanas',  'CCZ-M', 'media', 10, 11, 2, 2, 'core', 'Participación ciudadana para Media.', @teacher_id),
('Cátedra de la Paz',        'CPZ-M', 'media', 10, 11, 2, 2, 'core', 'Educación para la paz y convivencia para Media.', @teacher_id),
('Tecnología e Informática', 'TEC-M', 'media', 10, 11, 2, 2, 'core', 'Herramientas tecnológicas y competencia digital para Media.', @teacher_id),
('Afrocolombianidad',        'AFR-M', 'media', 10, 11, 1, 1, 'core', 'Cultura afrocolombiana para Media.', @teacher_id),
('Educación Emocional',      'EEM-M', 'media', 10, 11, 2, 2, 'core', 'Inteligencia emocional para Media.', @teacher_id),
('Ciencias Económicas',      'ECO-M', 'media', 10, 11, 2, 2, 'elective', 'Fundamentos de economía y finanzas para Media.', @teacher_id),
('Proyecto de Vida',         'PDV-M', 'media', 10, 11, 1, 1, 'elective', 'Orientación vocacional y proyecto de vida para Media.', @teacher_id);
USE db_notastrinitario;

-- ---------------------------------------------------------------------
-- 6) POOLS DE NOMBRES (para variedad de estudiantes/padres)
-- ---------------------------------------------------------------------
CREATE TEMPORARY TABLE tmp_first_names (idx INT PRIMARY KEY, name VARCHAR(60));
INSERT INTO tmp_first_names (idx, name) VALUES
(0,'Sofia'),(1,'Mateo'),(2,'Valentina'),(3,'Samuel'),(4,'Isabella'),
(5,'Santiago'),(6,'Camila'),(7,'Sebastian'),(8,'Maria Jose'),(9,'Juan David'),
(10,'Luciana'),(11,'Emmanuel'),(12,'Salome'),(13,'Andres Felipe'),(14,'Mariana'),
(15,'Nicolas'),(16,'Gabriela'),(17,'Tomas'),(18,'Antonella'),(19,'Jeronimo'),
(20,'Paula'),(21,'David'),(22,'Manuela'),(23,'Miguel Angel'),(24,'Danna');

CREATE TEMPORARY TABLE tmp_last_names (idx INT PRIMARY KEY, name VARCHAR(60));
INSERT INTO tmp_last_names (idx, name) VALUES
(0,'Perez Gomez'),(1,'Rodriguez Martinez'),(2,'Garcia Lopez'),(3,'Hernandez Diaz'),
(4,'Martinez Torres'),(5,'Gonzalez Ruiz'),(6,'Lopez Ramirez'),(7,'Diaz Herrera'),
(8,'Torres Castro'),(9,'Ramirez Ortiz'),(10,'Cruz Mendoza'),(11,'Florez Salcedo'),
(12,'Vargas Rojas'),(13,'Castro Beltran'),(14,'Suarez Cortes'),(15,'Reyes Pena'),
(16,'Morales Vega'),(17,'Jimenez Acosta'),(18,'Romero Pardo'),(19,'Alvarez Cuadros'),
(20,'Medina Guerra'),(21,'Ospina Barrios'),(22,'Cardenas Luna'),(23,'Pacheco Silva'),
(24,'Fontalvo Meza');

CREATE TEMPORARY TABLE tmp_parent_first_names (idx INT PRIMARY KEY, name VARCHAR(60));
INSERT INTO tmp_parent_first_names (idx, name) VALUES
(0,'Luz Marina'),(1,'Carlos'),(2,'Diana'),(3,'Jorge'),(4,'Patricia'),
(5,'Alberto'),(6,'Rocio'),(7,'Edgar'),(8,'Marcela'),(9,'Rafael'),
(10,'Consuelo'),(11,'Ivan'),(12,'Yolanda'),(13,'Fernando'),(14,'Adriana'),
(15,'Gustavo'),(16,'Esperanza'),(17,'Ricardo'),(18,'Beatriz'),(19,'Alvaro'),
(20,'Nubia'),(21,'Hernan'),(22,'Ligia'),(23,'Rodrigo'),(24,'Claudia');

-- ---------------------------------------------------------------------
-- 7) DIMENSIÓN BASE: 11 grados (1°-11°) x 2 salones (A y B) x 5 cupos
--    de estudiante = 110 combinaciones únicas. Sin procedimientos, sin
--    cursores: todo se resuelve con JOIN / CROSS JOIN (100% compatible
--    con MySQL Workbench, sin necesidad de cambiar el DELIMITER).
-- ---------------------------------------------------------------------
CREATE TEMPORARY TABLE tmp_dims (grade INT, classroom CHAR(1), seq INT);
INSERT INTO tmp_dims (grade, classroom, seq)
SELECT g.grade, c.classroom, n.seq
FROM (SELECT 1 AS grade UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5
      UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
      UNION ALL SELECT 10 UNION ALL SELECT 11) g
CROSS JOIN (SELECT 'A' AS classroom UNION ALL SELECT 'B') c
CROSS JOIN (SELECT 0 AS seq UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4) n;

-- Documento único y determinístico por combinación grado+salón+cupo,
-- ej: grado 10, salón A, cupo 3 -> '1010104'. Sirve además para
-- enlazar cada estudiante con su padre sin depender del orden de
-- inserción ni de AUTO_INCREMENT.

-- ---------------------------------------------------------------------
-- 8) 110 ESTUDIANTES (5 por salón A/B en cada grado 1°-11°)
-- ---------------------------------------------------------------------
INSERT INTO students (name, surname, grade, class_group, document_number, active)
SELECT
    fn.name,
    ln.name,
    CAST(d.grade AS CHAR),
    d.classroom,
    CONCAT('10', LPAD(d.grade, 2, '0'), IF(d.classroom = 'A', '1', '2'), LPAD(d.seq + 1, 2, '0')),
    1
FROM tmp_dims d
JOIN tmp_first_names fn ON fn.idx = (d.grade * 7 + IF(d.classroom = 'B', 3, 0) + d.seq)       MOD 25
JOIN tmp_last_names  ln ON ln.idx = (d.grade * 7 + IF(d.classroom = 'B', 3, 0) + d.seq * 2)   MOD 25
ORDER BY d.grade, d.classroom, d.seq;

-- ---------------------------------------------------------------------
-- 9) 110 CUENTAS DE PADRE DE FAMILIA (una por estudiante), con el mismo
--    apellido del hijo/a y usuario/correo basados en el documento del
--    estudiante (así el enlace del paso 10 no depende del orden de
--    inserción, solo de ese documento único).
-- ---------------------------------------------------------------------
INSERT INTO users (name, surname, username, mail, password, role_id, enable)
SELECT
    pf.name,
    ln.name,
    CONCAT('padre.doc', CONCAT('10', LPAD(d.grade, 2, '0'), IF(d.classroom = 'A', '1', '2'), LPAD(d.seq + 1, 2, '0'))),
    CONCAT('padre.doc', CONCAT('10', LPAD(d.grade, 2, '0'), IF(d.classroom = 'A', '1', '2'), LPAD(d.seq + 1, 2, '0')), '@familias.colegiotrinitario.edu.co'),
    '$2b$10$ZR/cShQ8NgWjyYwZ9ovrz.JI27xfc7HNtDHY78c/6R.i0ydTMKFgu', -- Trinitario2026*
    (SELECT id FROM roles WHERE name = 'PARENT'),
    1
FROM tmp_dims d
JOIN tmp_parent_first_names pf ON pf.idx = (d.grade * 7 + IF(d.classroom = 'B', 3, 0) + d.seq * 3) MOD 25
JOIN tmp_last_names ln         ON ln.idx = (d.grade * 7 + IF(d.classroom = 'B', 3, 0) + d.seq * 2) MOD 25
ORDER BY d.grade, d.classroom, d.seq;

-- ---------------------------------------------------------------------
-- 10) ENLACE estudiante <-> padre (por documento, no por orden de ID)
-- ---------------------------------------------------------------------
INSERT INTO student_parents (student_id, user_id)
SELECT s.id, u.id
FROM students s
JOIN users u ON u.username = CONCAT('padre.doc', s.document_number);

-- ---------------------------------------------------------------------
-- 11) NOTAS VARIADAS (1.00 a 5.00, con decimales) para cada estudiante,
--     en cada materia de SU nivel (según el rango grade_min/grade_max
--     de la materia) y en los 4 períodos académicos. Una sola sentencia
--     INSERT...SELECT: nada de cursores ni bucles.
-- ---------------------------------------------------------------------
INSERT INTO subject_grades
    (student_id, teacher_id, subject_name, subject_id, period, grade_name, grade_value, is_evaluation, created_at, updated_at)
SELECT
    st.id,
    su.teacher_id,
    su.name,
    su.id,
    per.period_number,
    'nFinal',
    ROUND(1 + RAND() * 4, 2),
    1,
    NOW(),
    NOW()
FROM students st
JOIN subjects su ON CAST(st.grade AS UNSIGNED) BETWEEN su.grade_min AND su.grade_max
CROSS JOIN academic_periods per;

-- ---------------------------------------------------------------------
-- 12) DIRECTORES DE GRUPO (homeroom_assignments): se asigna al único
--     profesor sembrado a cada uno de los 22 salones.
-- ---------------------------------------------------------------------
INSERT INTO homeroom_assignments (grade, classroom, user_id)
SELECT DISTINCT grade, class_group, @teacher_id FROM students;

-- Limpieza de temporales (las tablas TEMPORARY ya desaparecen solas al
-- cerrar la sesión/conexión, pero las botamos igual por prolijidad).
DROP TEMPORARY TABLE IF EXISTS tmp_dims;
DROP TEMPORARY TABLE IF EXISTS tmp_first_names;
DROP TEMPORARY TABLE IF EXISTS tmp_last_names;
DROP TEMPORARY TABLE IF EXISTS tmp_parent_first_names;

-- ---------------------------------------------------------------------
-- 13) VERIFICACIÓN RÁPIDA
-- ---------------------------------------------------------------------
SELECT 'roles'                 AS tabla, COUNT(*) AS total FROM roles
UNION ALL SELECT 'users',                COUNT(*) FROM users
UNION ALL SELECT 'students',             COUNT(*) FROM students
UNION ALL SELECT 'student_parents',      COUNT(*) FROM student_parents
UNION ALL SELECT 'subjects',             COUNT(*) FROM subjects
UNION ALL SELECT 'subject_grades',       COUNT(*) FROM subject_grades
UNION ALL SELECT 'homeroom_assignments', COUNT(*) FROM homeroom_assignments;

-- Verificación clave del fix: para grado 10/11, "materias" solo debe
-- traer las de level='media' (21), nunca las de 'bachillerato'.
SELECT level, COUNT(*) AS materias
FROM subjects
WHERE 10 BETWEEN grade_min AND grade_max
GROUP BY level;
