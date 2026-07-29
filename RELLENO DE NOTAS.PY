import keyboard
import time
import os
import random

# Función para abrir Chrome con la página web (opcional)
def abrir_pagina_web(url):
    os.system(f'start chrome "{url}"')
    time.sleep(3)  # Esperar a que Chrome se abra

# Función para escribir texto y presionar Tab
def escribir_y_tab(texto):
    keyboard.write(str(texto))
    time.sleep(0.02)
    keyboard.press_and_release('tab')
    time.sleep(0.02)

# Función para calcular N.FINAL y ACCIÓN
def calcular_n_final(notas_act, auto_eval, eval_period):
    # Calcular Prom.Parc (promedio de ACT1 a ACT7)
    act_notas = [n for n in notas_act if n != "-"]
    prom_parc = sum(act_notas) / len(act_notas) if act_notas else 0.0

    # Calcular 80% y 20%
    porcentaje_80 = prom_parc * 0.8
    porcentaje_20 = eval_period * 0.2

    # Calcular N.FINAL
    n_final = porcentaje_80 + porcentaje_20

    # Activar ACCIÓN si N.FINAL <= 3.4
    accion = "Sí" if n_final <= 3.4 else "-"

    return n_final, accion

# Campos NO editables (el Tab los salta solo): 80%, 20%, N.FINAL, Nota.Recup
# Flujo por estudiante:
# ACT1-7 (CN T) -> Auto.Eval (CN T) -> Prom.Parc (CN T)
# -> Eval.Period (CN T) -> 1 Tab (J.INTEG) -> COMP SOCIAL (CL)
# -> 3 Tabs (sig. estudiante) o 4 Tabs + Space si hay botón de ACCIÓN
def llenar_estudiante(notas_act, auto_eval, prom_parc, eval_period, comp_social):
    # ACT1 a ACT7 -> CN T
    for nota in notas_act:
        escribir_y_tab(nota)

    # Auto.Eval -> CN T (siguiente editable: Prom.Parc)
    escribir_y_tab(auto_eval)

    # Prom.Parc -> CN T (80% se salta solo; siguiente editable: Eval.Period)
    escribir_y_tab(prom_parc)

    # Eval.Period -> CN T (20% y N.FINAL se saltan; siguiente editable: J.INTEG)
    escribir_y_tab(eval_period)

    # J.INTEG se salta con 1 Tab -> COMP SOCIAL
    keyboard.press_and_release('tab')
    time.sleep(0.02)

    # COMP SOCIAL -> CL (sin Tab propio)
    keyboard.write(comp_social)
    time.sleep(0.02)

    # --- Lógica de ACCIÓN (comentada) ---
    # n_final, accion = calcular_n_final(notas_act, auto_eval, eval_period)
    # if accion == "Sí":
    #     # Aparece el botón ACCIÓN: 4 tabs (sin Space) para pasar al siguiente estudiante
    #     for _ in range(4):
    #         keyboard.press_and_release('tab')
    #         time.sleep(0.05)
    # else:
    #     # 3 tabs -> siguiente estudiante (salta recuperaciones y ACCIÓN)
    #     for _ in range(3):
    #         keyboard.press_and_release('tab')
    #         time.sleep(0.05)

    # Siempre 3 tabs después de COMP SOCIAL -> siguiente estudiante
    for _ in range(3):
        keyboard.press_and_release('tab')
        time.sleep(0.05)



# Generar notas aleatorias entre 2.0 y 5.0 con un decimal, sin repetir
def generar_notas_aleatorias(cantidad):
    opciones = [round(n / 10, 1) for n in range(20, 51)]  # 2.0 a 5.0
    if cantidad > len(opciones):
        cantidad = len(opciones)
    return random.sample(opciones, cantidad)

# Generar una nota aleatoria con un decimal entre 2.0 y 5.0
def nota_aleatoria():
    return round(random.randint(20, 50) / 10, 1)

# Abrir Chrome con la página web (opcional)
# abrir_pagina_web("https://ejemplo.com/tu_pagina")  # Reemplaza con la URL de tu página

# Llenar los 41 estudiantes de forma rápida
def llenar_todos():
    TOTAL = 41
    for i in range(TOTAL):
        print(f"Llenando estudiante {i + 1} de {TOTAL}...")
        notas_act = generar_notas_aleatorias(7)
        auto_eval = nota_aleatoria()
        prom_parc = round(sum(notas_act) / len(notas_act), 1)  # promedio real de ACT1-7
        eval_period = nota_aleatoria() 
        comp_social = random.choice(["E", "S", "A", "I"])
        llenar_estudiante(notas_act, auto_eval, prom_parc, eval_period, comp_social)
        time.sleep(0.05)  # Pausa mínima entre estudiantes

# Iniciar con la tecla "9" (estilo AutoHotkey)
print("Presiona 9 para iniciar el llenado de los 41 estudiantes...")
keyboard.add_hotkey('9', llenar_todos, suppress=True)
keyboard.wait()
