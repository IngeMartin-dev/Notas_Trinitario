#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
boletin_fitz_core.py
======================
Funciones de dibujo del boletín escolar con PyMuPDF (fitz), usando
las coordenadas exactas medidas del PDF original (BoletinDeMuestra.pdf).

Nota importante sobre fitz: `insert_textbox` calcula el interlineado
a partir de la altura de fuente y, si el rectángulo dado es más bajo
que una línea, NO inserta nada (falla en silencio, sin lanzar
excepción). Por eso aquí usamos `insert_text` (que ubica el texto por
un punto de base, sin restricción de alto) para todo el texto de una
sola línea, con alineación calculada a mano mediante
`fitz.get_text_length`. `insert_textbox` se reserva únicamente para
la descripción de cada materia, que sí necesita ajustarse sola a
varias líneas dentro de un rectángulo con suficiente alto.
"""

import fitz

PAGE_W, PAGE_H = 612.0, 1008.0          # Oficio a 72 pt/in (8.5" x 14")
LEFT, RIGHT = 40.08, 589.2              # bordes de la tabla de materias
ROW_H = 69.0                            # alto fijo de cada fila de materia
SUBJECTS_PER_PAGE = 12

BLACK = (0, 0, 0)
WHITE = (1, 1, 1)
GRAY_LABEL = (0.7529, 0.7529, 0.7529)   # #C0C0C0 (Nivel / Nº Lista / periodos header)
GRAY_HEADER = (0.8784, 0.8784, 0.8784)  # #E0E0E0 (encabezado de materias)
GRAY_ZEBRA = (0.965, 0.965, 0.965)

F_BOLD = "hebo"   # Helvetica-Bold  ~ Arial Bold
F_REG = "helv"    # Helvetica       ~ Arial
F_TBOLD = "tibo"  # Times-Bold      ~ Times New Roman Bold
F_TREG = "tiro"   # Times-Roman     ~ Times New Roman

ALIGN_L, ALIGN_C, ALIGN_R = 0, 1, 2


def _tw(text, fontname, fontsize):
    return fitz.get_text_length(text, fontname=fontname, fontsize=fontsize)


def text_line(page, rect, text, fontsize, fontname, align=ALIGN_L, color=BLACK,
              valign="center"):
    """Inserta UNA línea de texto dentro de `rect`, con alineación
    horizontal manual y centrado vertical aproximado. Usa insert_text
    (punto de base), que nunca falla en silencio como insert_textbox."""
    if not text:
        return
    tw = _tw(str(text), fontname, fontsize)
    if align == ALIGN_C:
        x = rect.x0 + (rect.width - tw) / 2
    elif align == ALIGN_R:
        x = rect.x1 - tw
    else:
        x = rect.x0
    if valign == "center":
        y = rect.y0 + (rect.height + fontsize * 0.66) / 2
    else:  # "top"
        y = rect.y0 + fontsize * 0.85
    page.insert_text(fitz.Point(x, y), str(text), fontsize=fontsize,
                      fontname=fontname, color=color)


def text_wrap(page, rect, text, fontsize, fontname, align=ALIGN_L, color=BLACK):
    """Para textos largos que sí necesitan ajustarse solos a varias
    líneas (la descripción de cada materia)."""
    if not text:
        return
    page.insert_textbox(rect, text, fontsize=fontsize, fontname=fontname,
                         align=align, color=color)


def rect_border(page, rect, fill=None, width=0.75):
    page.draw_rect(rect, color=BLACK, fill=fill, width=width)


# ──────────────────────────────────────────────────────────────────
# Encabezado (bloque estático + datos del estudiante)
# ──────────────────────────────────────────────────────────────────

def draw_header(page, data, logo_bytes):
    text_line(page, fitz.Rect(40, 39, 589.2, 53), "INFORME ESCOLAR DE VALORACION",
              11, F_BOLD, ALIGN_C)

    page.insert_image(fitz.Rect(40.08, 53.28, 113.78, 124.78), stream=logo_bytes,
                       keep_proportion=True)

    # Recuadro exterior que enmarca todo el bloque de encabezado (logo,
    # institución, nivel académico, Nº Lista/Estudiante y la mini-tabla
    # de la derecha), justo debajo del título y hasta el borde de la
    # tabla de materias. Se dibuja DESPUÉS del logo para que la línea
    # no quede tapada por la imagen.
    rect_border(page, fitz.Rect(LEFT, 53.28, RIGHT, 126.8))

    text_line(page, fitz.Rect(119.5, 55, 415, 65), data["institucion"],
              9, F_REG, ALIGN_C)

    rect_border(page, fitz.Rect(119.5, 71.3, 415, 82.6), fill=GRAY_LABEL)
    text_line(page, fitz.Rect(119.5, 71.3, 415, 82.6), "NIVEL ACADEMICO", 8,
              F_BOLD, ALIGN_C)
    text_line(page, fitz.Rect(119.5, 83.6, 415, 92), data["nivel"].upper(), 8,
              F_REG, ALIGN_C)

    rect_border(page, fitz.Rect(119.5, 94.1, 415, 105.4), fill=GRAY_LABEL)
    page.draw_line(fitz.Point(156.2, 82.5), fitz.Point(156.2, 125.4),
                    color=BLACK, width=0.75)
    text_line(page, fitz.Rect(120, 94.1, 156.2, 105.4), "N\u00ba Lista", 8, F_BOLD, ALIGN_C)
    text_line(page, fitz.Rect(160, 94.1, 412, 105.4), "ESTUDIANTE", 8, F_BOLD, ALIGN_L)
    text_line(page, fitz.Rect(119.5, 108, 156.2, 118), data["nLista"], 8, F_REG, ALIGN_C)
    text_line(page, fitz.Rect(160, 108, 412, 118), data["estudiante"].upper(), 8,
              F_REG, ALIGN_L)

    col_x = [416.4, 473.37, 530.33, 587.3]
    row_y = [53.3, 65.55, 77.8, 90.05, 102.3, 114.55, 126.8]
    filas = [
        (("Ciudad", "Grado", "Grupo"), True),
        ((data["ciudad"], data["grado"], data["grupo"]), None),
        (("Jornada", "Periodo", "A\u00f1o Lectivo"), True),
        ((data["jornada"], data["periodo"], data["anio"]), None),
        (("Puesto", "Promedio", "D. General"), True),
        ((data["puesto"], data["promedio"], data["dGeneral"]), None),
    ]
    page.draw_line(fitz.Point(416.4, 53.3), fitz.Point(416.4, 126.8),
                    color=BLACK, width=0.75)
    for i, (valores, es_negra) in enumerate(filas):
        y0, y1 = row_y[i], row_y[i + 1]
        if es_negra:
            rect_border(page, fitz.Rect(col_x[0], y0, col_x[3], y1), fill=BLACK)
            font, color = F_BOLD, WHITE
        else:
            font, color = F_REG, BLACK
        for c in range(3):
            x0, x1 = col_x[c], col_x[c + 1]
            if c > 0:
                page.draw_line(fitz.Point(x0, y0), fitz.Point(x0, y1),
                                color=BLACK, width=0.75)
            texto = str(valores[c]).upper() if es_negra else str(valores[c])
            text_line(page, fitz.Rect(x0 + 1, y0, x1 - 1, y1), texto, 8, font, ALIGN_C,
                      color=color)


# ──────────────────────────────────────────────────────────────────
# Encabezado de la tabla de materias (sin línea antes de "Resumen")
# ──────────────────────────────────────────────────────────────────

def draw_materias_header(page, y_top):
    y_bot = y_top + 14.1
    rect_border(page, fitz.Rect(LEFT, y_top, RIGHT, y_bot), fill=GRAY_HEADER)
    x = LEFT + 3
    widths = [160, 25, 25, 32, 200]
    labels = ["Areas / Asignaturas y Proyectos", "I.H.", "F.A.", "F.A.A.",
              "Logros, Dificultades y/o Recomendaciones"]
    sizes = [8, 8, 8, 8, 7]
    aligns = [ALIGN_L, ALIGN_C, ALIGN_C, ALIGN_C, ALIGN_L]
    for label, w, size, align in zip(labels, widths, sizes, aligns):
        text_line(page, fitz.Rect(x, y_top, x + w, y_bot), label.upper(), size, F_BOLD, align)
        x += w
    text_line(page, fitz.Rect(x, y_top, RIGHT - 3, y_bot), "Resumen".upper(), 8, F_BOLD, ALIGN_C)
    return y_bot


# ──────────────────────────────────────────────────────────────────
# Una fila de materia
# ──────────────────────────────────────────────────────────────────

COL_SPLIT = LEFT + 373.9  # 414.0 -- límite entre col-izq y col-der


def draw_materia_row(page, y_top, nombre, ih, fa, faa, val, nota, acumul,
                      p1, p2, p3, p4, l1, l2, desc, zebra=False):
    y_bot = y_top + ROW_H
    rect_border(page, fitz.Rect(LEFT, y_top, RIGHT, y_bot),
                fill=GRAY_ZEBRA if zebra else None)
    page.draw_line(fitz.Point(COL_SPLIT, y_top), fitz.Point(COL_SPLIT, y_bot),
                    color=BLACK, width=0.75)

    linea_h = 12.0
    y1 = y_top + linea_h
    x = LEFT + 3
    text_line(page, fitz.Rect(x, y_top, x + 158, y1), nombre.upper(), 9, F_TBOLD, ALIGN_L)
    numcol_x = [LEFT + 167, LEFT + 195.6, LEFT + 224]
    for val_num, nx in zip((ih, fa, faa), numcol_x):
        text_line(page, fitz.Rect(nx, y_top, nx + 24, y1), str(val_num), 9, F_TREG, ALIGN_C)
    text_line(page, fitz.Rect(LEFT + 252, y_top, COL_SPLIT - 3, y1), val, 9, F_TBOLD, ALIGN_L)

    if desc:
        text_wrap(page, fitz.Rect(x, y_top + 25.5, COL_SPLIT - 4, y_bot - 3), desc,
                  9, F_TREG, ALIGN_L)

    na_y1 = y_top + linea_h
    dx = COL_SPLIT + 9
    text_line(page, fitz.Rect(dx, y_top, dx + 30, na_y1), "NOTA", 8, F_TREG, ALIGN_L)
    text_line(page, fitz.Rect(dx + 26, y_top, dx + 65, na_y1), nota, 9, F_TBOLD, ALIGN_L)
    text_line(page, fitz.Rect(COL_SPLIT + 63, y_top, COL_SPLIT + 103, na_y1),
              "ACUMUL.", 8, F_TREG, ALIGN_L)
    acumul_txt = f"{acumul}%" if acumul != "" else ""
    text_line(page, fitz.Rect(COL_SPLIT + 108, y_top, RIGHT - 4, na_y1),
              acumul_txt, 9, F_TBOLD, ALIGN_L)

    pt_top = y_top + 11.3
    pt_bot = pt_top + 42.0
    pcols = [COL_SPLIT, COL_SPLIT + 42.6, COL_SPLIT + 85.1, COL_SPLIT + 130.5, RIGHT]
    hdr_bot = pt_top + 14.4
    letra_top = hdr_bot + 13.8
    rect_border(page, fitz.Rect(COL_SPLIT, pt_top, RIGHT, hdr_bot), fill=GRAY_LABEL)
    for i in range(4):
        rect_border(page, fitz.Rect(pcols[i], pt_top, pcols[i + 1], pt_bot))
        text_line(page, fitz.Rect(pcols[i], pt_top, pcols[i + 1], hdr_bot),
                  f"{i+1}\u00b0 Rf", 8, F_BOLD, ALIGN_C)
    vals = [p1, p2, p3, p4]
    letras = [l1, l2, "", ""]
    for i in range(4):
        text_line(page, fitz.Rect(pcols[i], hdr_bot, pcols[i + 1], letra_top),
                  str(vals[i]), 9, F_TREG, ALIGN_C)
        text_line(page, fitz.Rect(pcols[i], letra_top, pcols[i + 1], pt_bot),
                  str(letras[i]), 9, F_TREG, ALIGN_C)

    return y_bot


# ──────────────────────────────────────────────────────────────────
# Cierre: áreas perdidas + firmas (una sola caja) y leyenda
# ──────────────────────────────────────────────────────────────────

def draw_areas_perdidas_y_firmas(page, y_top, areas_perdidas, firma_docente, firma_directora):
    ap_bot = y_top + 30
    rect_border(page, fitz.Rect(LEFT, y_top, RIGHT, ap_bot))
    texto = "AREAS PERDIDAS:" + (" " + ", ".join(areas_perdidas) if areas_perdidas else "")
    text_line(page, fitz.Rect(LEFT + 5, y_top, RIGHT - 5, y_top + 14), texto.upper(),
              9, F_TBOLD, ALIGN_L)

    firmas_bot = ap_bot + 62
    rect_border(page, fitz.Rect(LEFT, ap_bot, RIGHT, firmas_bot))
    linea_y = ap_bot + 40
    x1_0, x1_1 = LEFT + 55, LEFT + 230
    x2_0, x2_1 = LEFT + 320, LEFT + 495
    page.draw_line(fitz.Point(x1_0, linea_y), fitz.Point(x1_1, linea_y), color=BLACK, width=0.75)
    page.draw_line(fitz.Point(x2_0, linea_y), fitz.Point(x2_1, linea_y), color=BLACK, width=0.75)
    if firma_docente:
        text_line(page, fitz.Rect(x1_0, linea_y - 12, x1_1, linea_y - 1), firma_docente.upper(),
                  8, F_REG, ALIGN_C)
    if firma_directora:
        text_line(page, fitz.Rect(x2_0, linea_y - 12, x2_1, linea_y - 1), firma_directora.upper(),
                  8, F_REG, ALIGN_C)
    text_line(page, fitz.Rect(x1_0, linea_y + 2, x1_1, linea_y + 12), "Profesor(a) de Grupo",
              8, F_REG, ALIGN_C)
    text_line(page, fitz.Rect(x2_0, linea_y + 2, x2_1, linea_y + 12), "Directora",
              8, F_REG, ALIGN_C)
    return firmas_bot


def draw_leyenda(page, y_top):
    linea1 = ("Desempe\u00f1os: SUPERIOR (S) 4,6 - 5,0  -  ALTO (A) 4,0 - 4,5  -  "
              "BASICO (B) 3,5 - 3,9  -  BAJO (J) 1,0 - 3,4    N.A. = No Aplica")
    linea2 = ("Comportamiento Social: E = Excelente   S = Sobresaliente   "
              "B = Bueno   A = Aceptable   I = Insuficiente")
    text_line(page, fitz.Rect(LEFT, y_top, RIGHT, y_top + 8), linea1, 6, F_REG, ALIGN_C)
    text_line(page, fitz.Rect(LEFT, y_top + 9, RIGHT, y_top + 17), linea2, 6, F_REG, ALIGN_C)