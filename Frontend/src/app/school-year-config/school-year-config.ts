import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SchoolYearService, SchoolYearConfigDto, PendienteOrganizar, UsuarioSinRol, RoleDto
} from '../services/school-year.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-school-year-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './school-year-config.html',
  styleUrls: ['./school-year-config.css']
})
export class SchoolYearConfig implements OnInit {
  private service = inject(SchoolYearService);
  private dialogService = inject(DialogService);

  config: SchoolYearConfigDto | null = null;
  editYearEndDate = '';
  editMinPassingGrade = 3.5;
  savingConfig = false;
  configMessage = '';

  // Borrado de fin de año
  showWipeConfirm = false;
  wipeConfirmText = '';
  wiping = false;
  wipeMessage = '';

  // Adelantar/retroceder año
  advancing = false;
  reverting = false;
  advanceMessage = '';
  pendientes: PendienteOrganizar[] = [];
  asignaciones: { [studentId: number]: 'A' | 'B' } = {};
  savingClassrooms = false;

  // Usuarios sin rol
  usuariosSinRol: UsuarioSinRol[] = [];
  roles: RoleDto[] = [];
  selectedRoleByUser: { [userId: number]: number } = {};
  loadingUsuarios = false;
  assigningUser: { [userId: number]: boolean } = {};

  ngOnInit() {
    this.loadConfig();
    this.loadPendientes();
    this.loadUsuariosSinRol();
    this.loadRoles();
  }

  loadConfig() {
    this.service.getConfig().subscribe(cfg => {
      this.config = cfg;
      this.editYearEndDate = cfg.yearEndDate || '';
      this.editMinPassingGrade = cfg.minPassingGrade ?? 3.5;
    });
  }

  saveConfig() {
    this.savingConfig = true;
    this.configMessage = '';
    const clamped = Math.max(0, Math.min(5, this.editMinPassingGrade));
    this.service.updateConfig(this.editYearEndDate || null, clamped).subscribe({
      next: (cfg) => {
        this.config = cfg;
        this.savingConfig = false;
        this.configMessage = 'Configuración guardada correctamente.';
        setTimeout(() => this.configMessage = '', 4000);
      },
      error: () => {
        this.savingConfig = false;
        this.configMessage = 'No se pudo guardar la configuración.';
      }
    });
  }

  // ── Borrado de fin de año ──────────────────────────────────────────
  openWipeConfirm() {
    this.wipeConfirmText = '';
    this.wipeMessage = '';
    this.showWipeConfirm = true;
  }

  closeWipeConfirm() {
    this.showWipeConfirm = false;
  }

  confirmWipe() {
    if (this.wipeConfirmText.trim().toUpperCase() !== 'BORRAR') return;
    this.wiping = true;
    this.service.wipeNow().subscribe({
      next: () => {
        this.wiping = false;
        this.showWipeConfirm = false;
        this.wipeMessage = 'Se borró la información del año escolar. Estudiantes y padres de familia se conservaron.';
        this.loadConfig();
        setTimeout(() => this.wipeMessage = '', 6000);
      },
      error: (err) => {
        this.wiping = false;
        this.wipeMessage = err?.error?.error || 'No se pudo completar el borrado.';
      }
    });
  }

  // ── Adelantar / retroceder año ───────────────────────────────────────
  async advanceYear() {
    const ok = await this.dialogService.confirm(
      '¿Seguro que quieres adelantar el año? Todos los estudiantes activos subirán un grado. Podrás organizar los salones a continuación, y también deshacerlo con "Retroceder año".',
      'Adelantar año'
    );
    if (!ok) return;

    this.advancing = true;
    this.advanceMessage = '';
    this.service.advanceYear().subscribe({
      next: (res) => {
        this.advancing = false;
        this.advanceMessage = `${res.estudiantesPromovidos} estudiante(s) promovido(s), ${res.estudiantesGraduados} graduado(s) de Grado 11º.`;
        this.pendientes = res.pendientesDeOrganizar;
        this.asignaciones = {};
        this.loadConfig();
      },
      error: () => {
        this.advancing = false;
        this.advanceMessage = 'No se pudo adelantar el año.';
      }
    });
  }

  async revertYear() {
    const ok = await this.dialogService.confirm(
      '¿Deshacer el último "Adelantar año"? Todos los estudiantes volverán a su grado y salón anteriores.',
      'Retroceder año'
    );
    if (!ok) return;

    this.reverting = true;
    this.service.revertYear().subscribe({
      next: (res) => {
        this.reverting = false;
        this.advanceMessage = `${res.revertidos} estudiante(s) devuelto(s) a su grado y salón anterior.`;
        this.pendientes = [];
        this.loadConfig();
      },
      error: () => {
        this.reverting = false;
        this.advanceMessage = 'No se pudo retroceder el año.';
      }
    });
  }

  loadPendientes() {
    this.service.getPendientes().subscribe(list => {
      this.pendientes = list;
      this.asignaciones = {};
    });
  }

  /** Cierra la pantalla de organización sin perder el progreso: los
   *  estudiantes ya marcados quedan como "pendientes" y esta pantalla
   *  vuelve a aparecer la próxima vez que se entre a Configuración de Año. */
  cerrarOrganizacionPorAhora() {
    this.pendientes = [];
  }

  get pendientesPorGrado(): { grade: string; estudiantes: PendienteOrganizar[] }[] {
    const grupos = new Map<string, PendienteOrganizar[]>();
    for (const p of this.pendientes) {
      if (!grupos.has(p.grade)) grupos.set(p.grade, []);
      grupos.get(p.grade)!.push(p);
    }
    return Array.from(grupos.entries()).map(([grade, estudiantes]) => ({ grade, estudiantes }));
  }

  countAsignados(grade: string, salon: 'A' | 'B'): number {
    return this.pendientes.filter(p => p.grade === grade && this.asignaciones[p.studentId] === salon).length;
  }

  toggleAsignacion(studentId: number, salon: 'A' | 'B') {
    this.asignaciones[studentId] = salon;
  }

  guardarOrganizacion() {
    if (Object.keys(this.asignaciones).length === 0) return;
    this.savingClassrooms = true;
    this.service.assignClassrooms(this.asignaciones).subscribe({
      next: (res) => {
        this.savingClassrooms = false;
        this.advanceMessage = `${res.asignados} estudiante(s) organizado(s) en su nuevo salón.`;
        this.loadPendientes();
        this.loadConfig();
      },
      error: () => {
        this.savingClassrooms = false;
        this.advanceMessage = 'No se pudo guardar la organización de salones.';
      }
    });
  }

  // ── Usuarios sin rol ──────────────────────────────────────────────
  loadUsuariosSinRol() {
    this.loadingUsuarios = true;
    this.service.getUsuariosSinRol().subscribe({
      next: (list) => {
        this.usuariosSinRol = list;
        this.loadingUsuarios = false;
      },
      error: () => { this.loadingUsuarios = false; }
    });
  }

  loadRoles() {
    this.service.getRolesDisponibles().subscribe(roles => this.roles = roles);
  }

  asignarRol(user: UsuarioSinRol) {
    const roleId = this.selectedRoleByUser[user.id];
    if (!roleId) return;
    this.assigningUser[user.id] = true;
    this.service.asignarRol(user.id, roleId).subscribe({
      next: () => {
        this.assigningUser[user.id] = false;
        this.usuariosSinRol = this.usuariosSinRol.filter(u => u.id !== user.id);
      },
      error: () => { this.assigningUser[user.id] = false; }
    });
  }
}