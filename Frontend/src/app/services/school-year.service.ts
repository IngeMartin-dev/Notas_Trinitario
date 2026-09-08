import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SchoolYearConfigDto {
  yearEndDate: string | null;
  minPassingGrade: number;
  currentAcademicYear: number | null;
  lastWipedAt: string | null;
  lastAdvancedAt: string | null;
  advancePendingClassroomOrg: boolean;
  yearEndNotified: boolean;
}

export interface PendienteOrganizar {
  studentId: number;
  name: string;
  surname: string;
  grade: string;
}

export interface UsuarioSinRol {
  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
}

export interface RoleDto {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class SchoolYearService {
  private readonly http = inject(HttpClient);
  private readonly API_BASE = 'http://localhost:8080/api/school-year';
  private readonly USERS_BASE = 'http://localhost:8080/api/users';

  getConfig(): Observable<SchoolYearConfigDto> {
    return this.http.get<SchoolYearConfigDto>(`${this.API_BASE}/config`);
  }

  updateConfig(yearEndDate: string | null, minPassingGrade: number): Observable<SchoolYearConfigDto> {
    return this.http.put<SchoolYearConfigDto>(`${this.API_BASE}/config`, { yearEndDate, minPassingGrade });
  }

  wipeNow(): Observable<any> {
    return this.http.post(`${this.API_BASE}/wipe`, { confirm: 'BORRAR' });
  }

  advanceYear(): Observable<{ estudiantesPromovidos: number; estudiantesGraduados: number; pendientesDeOrganizar: PendienteOrganizar[] }> {
    return this.http.post<any>(`${this.API_BASE}/advance`, {});
  }

  getPendientes(): Observable<PendienteOrganizar[]> {
    return this.http.get<PendienteOrganizar[]>(`${this.API_BASE}/advance/pendientes`);
  }

  assignClassrooms(assignments: { [studentId: number]: 'A' | 'B' }): Observable<any> {
    return this.http.post(`${this.API_BASE}/advance/assign-classrooms`, { assignments });
  }

  revertYear(): Observable<{ revertidos: number }> {
    return this.http.post<any>(`${this.API_BASE}/revert`, {});
  }

  getUsuariosSinRol(): Observable<UsuarioSinRol[]> {
    return this.http.get<UsuarioSinRol[]>(`${this.USERS_BASE}/sin-rol`);
  }

  getRolesDisponibles(): Observable<RoleDto[]> {
    return this.http.get<RoleDto[]>(`${this.USERS_BASE}/roles-disponibles`);
  }

  asignarRol(userId: number, roleId: number): Observable<any> {
    return this.http.put(`${this.USERS_BASE}/${userId}/role`, { roleId });
  }

  fechaAlcanzada(): Observable<{ alcanzada: boolean }> {
    return this.http.get<{ alcanzada: boolean }>(`${this.API_BASE}/fecha-alcanzada`);
  }

  /** Registra un estudiante nuevo (usado en el paso "Grado 1" del asistente
   *  de organización de salones: a diferencia de los demás grados, a Grado
   *  1 no llega nadie promovido, solo estudiantes nuevos). */
  createStudent(student: { name: string; surname: string; documentNumber: string; grade: string; classGroup: string; active: boolean }): Observable<any> {
    return this.http.post('http://localhost:8080/api/students', student);
  }
}