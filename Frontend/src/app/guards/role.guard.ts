import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Guard de rutas por rol. Complementa el filtrado del menú lateral en
 * app.html: aunque un enlace no aparezca en el sidebar, sin este guard
 * cualquiera podría escribir la URL a mano (p. ej. /students) y entrar
 * igual. Aquí se bloquea eso y se manda de vuelta al Panel.
 *
 * Importante: esto es una capa de UX/seguridad en el cliente. La
 * autorización real (la que de verdad protege los datos) debe reforzarse
 * también en el backend con @PreAuthorize, como ya se hizo para los
 * endpoints de notas/boletines.
 */
export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const user = authService.getCurrentUserValue();
    const roleName: string = user?.role?.name ?? '';

    if (allowedRoles.includes(roleName)) {
      return true;
    }

    router.navigate(['/dashboard']);
    return false;
  };
}

// Grupos de roles reutilizables, alineados con la restricción del sidebar:
export const ADMIN_ONLY = ['ADMIN'];
export const TEACHER_OR_DIRECTOR = ['TEACHER', 'DIRECTOR_DE_GRUPO'];
export const DIRECTOR_OR_ADMIN = ['ADMIN', 'DIRECTOR_DE_GRUPO'];
// Ruta /grades: solo quien la EDITA (profesor/director). El padre de
// familia usa la ruta separada /mis-notas (solo lectura, filtrada a sus
// hijos activos, sin posibilidad de editar).
export const GRADES_VISIBLE_TO = ['TEACHER', 'DIRECTOR_DE_GRUPO'];
// Ruta /boletines: solo ADMIN (generación). El padre de familia usa la
// ruta separada /mis-boletines (solo lectura, filtrada a sus hijos activos).
export const BOLETINES_VISIBLE_TO = ['ADMIN'];
export const PARENT_ONLY = ['PARENT'];
export const ANY_KNOWN_ROLE = ['ADMIN', 'TEACHER', 'DIRECTOR_DE_GRUPO', 'PARENT', 'STUDENT'];