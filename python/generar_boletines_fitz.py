#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generar_boletines_fitz.py
==========================
Genera el boletín escolar EN PDF (tamaño oficio) dibujando cada
elemento directamente con PyMuPDF (fitz) -- sin HTML ni Playwright --
usando las coordenadas exactas medidas del PDF de muestra.

Genera un archivo PDF por cada estudiante de la lista STUDENTS.
"""

import os
import sys

import fitz  # PyMuPDF

from boletin_fitz_core import (
    PAGE_W, PAGE_H, LEFT, RIGHT, ROW_H, SUBJECTS_PER_PAGE,
    draw_header, draw_materias_header, draw_materia_row,
    draw_areas_perdidas_y_firmas, draw_leyenda,
)

LOGO_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "logo.png")


def build_rows_spec(subjects, comportamiento_social, valoracion_acudiente):
    """Arma la lista de filas (materias + comportamiento social +
    valoración acudiente) como tuplas listas para draw_materia_row."""
    rows = []
    for s in subjects:
        rows.append(dict(nombre=s[0], ih=s[1], fa=s[2], faa=s[3], val=s[4],
                          nota=s[5], acumul=s[6], p1=s[7], p2=s[8], p3=s[9],
                          p4=s[10], l1=s[11], l2=s[12], desc=s[13]))
    cs = comportamiento_social
    rows.append(dict(nombre="Comportamiento Social", ih=0, fa=0, faa=0,
                      val=cs["valoracion"], nota="", acumul="",
                      p1="", p2=cs["valoracion"], p3="", p4="",
                      l1="", l2=cs["letra2"], desc=cs["descripcion"]))
    va = valoracion_acudiente
    rows.append(dict(nombre="Valoracion Acudiente", ih=0, fa=0, faa=0,
                      val="SUPERIOR", nota=va["nota"], acumul=va["acumulado"],
                      p1=va["p1"], p2=va["p2"], p3=va["p3"], p4=va["p4"],
                      l1=va["l1"], l2=va["l2"], desc=va["descripcion"]))
    return rows


def generar_boletin_pdf(student, output_path, logo_bytes):
    rows = build_rows_spec(student["subjects"], student["comportamiento_social"],
                            student["valoracion_acudiente"])

    doc = fitz.open()

    # ── Página 1 ──
    page1 = doc.new_page(width=PAGE_W, height=PAGE_H)
    draw_header(page1, student["data"], logo_bytes)
    y = draw_materias_header(page1, 127.0)

    corte = min(SUBJECTS_PER_PAGE, len(rows))
    for i in range(corte):
        r = rows[i]
        y = draw_materia_row(page1, y, r["nombre"], r["ih"], r["fa"], r["faa"],
                              r["val"], r["nota"], r["acumul"], r["p1"], r["p2"],
                              r["p3"], r["p4"], r["l1"], r["l2"], r["desc"],
                              zebra=(i % 2 == 1))

    resto = rows[corte:]
    if resto:
        # ── Página 2 (si hay materias restantes) ──
        page2 = doc.new_page(width=PAGE_W, height=PAGE_H)
        y2 = 40.08
        for i, r in enumerate(resto):
            y2 = draw_materia_row(page2, y2, r["nombre"], r["ih"], r["fa"], r["faa"],
                                   r["val"], r["nota"], r["acumul"], r["p1"], r["p2"],
                                   r["p3"], r["p4"], r["l1"], r["l2"], r["desc"],
                                   zebra=(i % 2 == 1))
        y2 = draw_areas_perdidas_y_firmas(page2, y2, student["areas_perdidas"],
                                          student["firma_docente"],
                                          student["firma_directora"])
        draw_leyenda(page2, y2 + 8)
    else:
        y = draw_areas_perdidas_y_firmas(page1, y, student["areas_perdidas"],
                                          student["firma_docente"],
                                          student["firma_directora"])
        draw_leyenda(page1, y + 8)

    doc.save(output_path)
    doc.close()


def main():
    from datos_estudiantes import STUDENTS

    if not os.path.exists(LOGO_PATH):
        print(f"ERROR: no se encontró el logo en {LOGO_PATH}", file=sys.stderr)
        sys.exit(1)
    with open(LOGO_PATH, "rb") as f:
        logo_bytes = f.read()

    out_dir = os.path.dirname(os.path.abspath(__file__))
    generados = []
    for student in STUDENTS:
        nombre_archivo = "Boletin_" + student["data"]["estudiante"].replace(" ", "_") + ".pdf"
        output_path = os.path.join(out_dir, nombre_archivo)
        try:
            generar_boletin_pdf(student, output_path, logo_bytes)
        except Exception as exc:
            print(f"ERROR generando el boletín de {student['data']['estudiante']}: {exc}",
                  file=sys.stderr)
            sys.exit(1)
        generados.append(output_path)
        print(f"OK: {output_path}")

    print(f"\nListo: se generaron {len(generados)} boletin(es).")


if __name__ == "__main__":
    main()