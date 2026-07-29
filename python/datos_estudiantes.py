# -*- coding: utf-8 -*-
"""
datos_estudiantes.py
=====================
Datos de cada estudiante para generar_boletines_fitz.py.
Cada elemento de STUDENTS es un boletín completo: datos del
encabezado, lista de materias, comportamiento social, valoración
del acudiente, áreas perdidas y nombres para las firmas.
"""

# (nombre, I.H., F.A., F.A.A., desempeño, nota, acumulado%,
#  periodo1, periodo2, periodo3, periodo4, letra1, letra2, descripcion)
SUBJECTS_IAN_MARIO = [
    ("CIENCIAS NATURALES", 3, 0, 0, "ALTO", "4,5", "2,25", "4,5", "4,5", "0", "0", "A", "A",
     "Identifica las partes de las plantas y algunos órganos del sistema digestivo, comprendiendo sus "
     "funciones principales y desarrollando adecuadamente las actividades."),
    ("GEOGRAFIA E HISTORIA", 2, 0, 0, "SUPERIOR", "4,6", "2,3", "4,6", "4,6", "0", "0", "S", "S",
     "Reconoce e identifica correctamente las regiones naturales de Colombia, sus principales "
     "características, paisajes y costumbres, participando con interés y excelente desempeño en las "
     "actividades propuestas."),
    ("CATEDRA PARA LA PAZ", 1, 0, 0, "SUPERIOR", "4,6", "2,3", "4,6", "4,6", "0", "0", "S", "S",
     "Practica la verdad, la tolerancia y los valores que ayudan a construir la paz, demostrando respeto, "
     "empatía y buenas relaciones con sus compañeros y docentes en las diferentes actividades escolares."),
    ("COMPETENCIAS CIUDADANAS", 1, 0, 0, "SUPERIOR", "4,7", "2,3", "4,5", "4,7", "0", "0", "A", "S",
     "Comprende la importancia de las normas y las cumple adecuadamente, cuida los espacios comunes "
     "y demuestra responsabilidad en el desarrollo y cumplimiento de sus tareas escolares."),
    ("MATEMATICAS", 4, 0, 0, "SUPERIOR", "4,7", "2,22", "4,2", "4,7", "0", "0", "A", "S",
     "Resuelve correctamente ejercicios de adición, sustracción y problemas matemáticos, demostrando "
     "dominio y agilidad en las tablas de multiplicar del 1 al 8, aplicándolas adecuadamente en diferentes "
     "situaciones."),
    ("ESTADISTICA Y GEOMETRIA", 1, 0, 0, "ALTO", "4", "2,12", "4,5", "4", "0", "0", "A", "A",
     "Analizala información presentada en diagramas de barras. Demuestra responsabilidad y "
     "puntualidad en sus compromisos."),
    ("LENGUA CASTELLANA", 4, 0, 0, "ALTO", "4,2", "2,12", "4,3", "4,2", "0", "0", "A", "A",
     "Identifica y emplea verbos, adjetivos, aumentativos y diminutivos en ejercicios y producciones "
     "sencillas. Reconoce los elementos principales de la narración y participa activamente en las "
     "actividades propuestas."),
    ("CALIGRAFIA", 1, 0, 0, "ALTO", "4,5", "2,2", "4,3", "4,5", "0", "0", "A", "A",
     "Presenta buena caligrafía, con trazos legibles y ordenados, demostrando cuidado y esfuerzo en la "
     "presentación de sus escritos."),
    ("INGLES", 3, 0, 0, "BASICO", "3,6", "1,9", "4", "3,6", "0", "0", "A", "B",
     ""),
    ("EDUCACION FISICA", 2, 0, 0, "ALTO", "4,5", "2,32", "4,8", "4,5", "0", "0", "S", "A",
     "Ejecuta secuencias de movimiento que articulan el desarrollo de sus capacidades físicas con los "
     "elementos básicos de la danza, participando activamente y con buena actitud aunque en ocasiones "
     "necesita direccion u acompañamiento de la docente"),
    ("EDUCACION ARTISTICA", 2, 0, 0, "ALTO", "4,5", "2,27", "4,6", "4,5", "0", "0", "S", "A",
     "Desarrolla las actividades artísticas con interés y creatividad, haciendo buen uso de los materiales "
     "y demostrando esfuerzo en sus trabajos."),
    ("EDUCACION RELIGIOSA", 2, 0, 0, "SUPERIOR", "4,6", "2,3", "4,6", "4,6", "0", "0", "S", "S",
     "Comprende qué es la oración y su importancia en la vida diaria, expresando de manera respetuosa "
     "y espontánea diferentes formas de hablar con Dios."),
    ("EDUCACION ETICA", 1, 0, 0, "SUPERIOR", "4,7", "2,32", "4,6", "4,7", "0", "0", "S", "S",
     "Demuestra excelente convivencia y respeto hacia sus compañeros y docentes, cumple las normas del "
     "aula y escucha atentamente cuando otros hablan, participando de manera positiva y respetuosa"),
    ("TECNOLOGIA E INFORMATICA", 2, 0, 0, "ALTO", "4,5", "2,27", "4,6", "4,5", "0", "0", "S", "A",
     "Identifica la estructura del mouse y del teclado como sus funciones. Reconoce las clases de "
     "periféricos o dispositivos y su función en la computadora, para la realización de cualquier trabajo."),
    ("AFROCOLOMBIANIDAD", 1, 0, 0, "SUPERIOR", "4,6", "2,3", "4,6", "4,6", "0", "0", "S", "S",
     "Reconoce y valora los aportes culturales afro a la sociedad, identificando juegos, deportes, idioma "
     "y rituales propios de la cultura afrocolombiana, demostrando respeto e interés por la diversidad "
     "cultural."),
    ("EDUCACION EMOCIONAL", 1, 0, 0, "SUPERIOR", "5", "2,5", "5", "5", "0", "0", "S", "S",
     "Aplica estrategias de autocontrol para manejar emociones intensas, actuando de manera adecuada "
     "frente a diferentes situaciones."),
]

STUDENTS = [
    {
        "data": {
            "institucion": "CORPORACION COLEGIO TRINITARIO",
            "ciudad": "Cartagena", "grado": "02", "grupo": "A", "jornada": "UNICA",
            "periodo": "2", "anio": "2026", "nivel": "PRIMARIA", "nLista": "1",
            "estudiante": "ATENCIO FRANCO IAN MARIO", "puesto": "15",
            "promedio": "4,51", "dGeneral": "ALTO",
        },
        "subjects": SUBJECTS_IAN_MARIO,
        "comportamiento_social": {
            "valoracion": "SOBRESALIENTE", "letra2": "S",
            "descripcion": "Acata las normas del manual de convivencia. Su actitud durante las clases "
                           "es sobresaliente al igual que la relación con sus compañeros y docentes.",
        },
        "valoracion_acudiente": {
            "nota": "5", "acumulado": "2,5", "p1": "5", "p2": "5", "p3": "0", "p4": "0",
            "l1": "S", "l2": "S",
            "descripcion": "Asiste a las reuniones de padres de familia, citaciones, escuela para "
                           "padres, programadas por la institución y establecidas en el manual de "
                           "convivencia. ( Capitulo XI Articulo 80, parágrafo 2)",
        },
        "areas_perdidas": [],
        "firma_docente": None,
        "firma_directora": "Flor Delis Giraldo",
    },
    {
        # Segundo estudiante -- mismo grupo, materias/notas distintas, para
        # comprobar que el script realmente cambia el contenido por alumno.
        "data": {
            "institucion": "CORPORACION COLEGIO TRINITARIO",
            "ciudad": "Cartagena", "grado": "02", "grupo": "A", "jornada": "UNICA",
            "periodo": "2", "anio": "2026", "nivel": "PRIMARIA", "nLista": "2",
            "estudiante": "MARTINEZ PEREZ SOFIA VALENTINA", "puesto": "3",
            "promedio": "4,82", "dGeneral": "SUPERIOR",
        },
        "subjects": [
            ("CIENCIAS NATURALES", 3, 0, 0, "SUPERIOR", "4,8", "2,4", "4,8", "4,8", "0", "0", "S", "S",
             "Identifica y explica con claridad el sistema digestivo, mostrando gran interés por las "
             "ciencias naturales."),
            ("MATEMATICAS", 4, 0, 0, "SUPERIOR", "4,9", "2,35", "4,8", "4,9", "0", "0", "S", "S",
             "Domina con agilidad las operaciones básicas y las tablas de multiplicar, resolviendo "
             "problemas con autonomía."),
            ("LENGUA CASTELLANA", 4, 1, 0, "ALTO", "4,4", "2,2", "4,3", "4,4", "0", "0", "A", "A",
             "Participa activamente en clase y produce textos sencillos con buena ortografía."),
            ("INGLES", 3, 0, 0, "SUPERIOR", "4,7", "2,35", "4,6", "4,7", "0", "0", "S", "S",
             "Reconoce y utiliza vocabulario básico en inglés con seguridad."),
            ("EDUCACION FISICA", 2, 0, 0, "SUPERIOR", "4,9", "2,45", "4,9", "4,9", "0", "0", "S", "S",
             "Excelente desempeño físico y disposición para el trabajo en equipo."),
        ],
        "comportamiento_social": {
            "valoracion": "SOBRESALIENTE", "letra2": "S",
            "descripcion": "Cumple con las normas de convivencia y mantiene una actitud respetuosa y "
                           "colaborativa con sus compañeros.",
        },
        "valoracion_acudiente": {
            "nota": "5", "acumulado": "2,5", "p1": "5", "p2": "5", "p3": "0", "p4": "0",
            "l1": "S", "l2": "S",
            "descripcion": "Asiste puntualmente a las reuniones de padres de familia y actividades "
                           "programadas por la institución.",
        },
        "areas_perdidas": [],
        "firma_docente": None,
        "firma_directora": "Flor Delis Giraldo",
    },
]