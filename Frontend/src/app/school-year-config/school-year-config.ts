import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SchoolYearService, SchoolYearConfigDto, PendienteOrganizar, UsuarioSinRol, RoleDto, UsuarioGestionRol
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

  // Asistente paso a paso "Organizar salones" (Grado 1 a Grado 11).
  // Grado 1 es especial: ahí no llega nadie promovido (no existe "Grado 0"),
  // así que en vez de organizar pendientes se registran los estudiantes
  // NUEVOS que ingresan a Grado 1 este año.
  wizardGradeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  currentWizardIndex = 0;
  newStudentsGrade1: { name: string; surname: string; documentNumber: string; classGroup: 'A' | 'B' }[] = [];
  newStudentForm = { name: '', surname: '', documentNumber: '', classGroup: 'A' as 'A' | 'B' };
  addingStudent = false;
  addStudentError = '';

  // Usuarios sin rol
  usuariosSinRol: UsuarioSinRol[] = [];
  roles: RoleDto[] = [];
  selectedRoleByUser: { [userId: number]: number } = {};
  loadingUsuarios = false;
  assigningUser: { [userId: number]: boolean } = {};

  // Recuadro "Roles y permisos" (pestañas Padres / Profesores / Administradores)
  usuariosGestion: UsuarioGestionRol[] = [];
  loadingGestion = false;
  activeRoleTab: 'PARENT' | 'TEACHER' | 'ADMIN' = 'PARENT';
  togglingAdminExtra: { [userId: number]: boolean } = {};

  /** Filtro por "Grado X - Salón Y" dentro de la pestaña Padres: al elegir
   *  un botón, solo se muestran los padres que tengan al menos un hijo en
   *  ese grado/salón. null = sin filtro (se ven todos los padres). */
  selectedParentGradoSalon: string | null = null;

  ngOnInit() {
    this.loadConfig();
    this.loadPendientes();
    this.loadUsuariosSinRol();
    this.loadRoles();
    this.loadUsuariosGestion();
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
        this.newStudentsGrade1 = [];
        this.currentWizardIndex = 0; // el asistente siempre arranca en Grado 1
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

  // ── Asistente paso a paso: Grado 1 → Grado 11 ────────────────────────
  get currentWizardGradeNumber(): number {
    return this.wizardGradeNumbers[this.currentWizardIndex];
  }

  get isFirstWizardStep(): boolean {
    return this.currentWizardIndex === 0;
  }

  get isLastWizardStep(): boolean {
    return this.currentWizardIndex === this.wizardGradeNumbers.length - 1;
  }

  /** Pendientes (estudiantes YA promovidos que hay que organizar) del
   *  grado que se está mostrando en este paso del asistente. Vacío para el
   *  paso de Grado 1 (ahí no hay promovidos, ver newStudentsGrade1). */
  get pendientesDelPasoActual(): PendienteOrganizar[] {
    const gradoTexto = `Grado ${this.currentWizardGradeNumber}º`;
    return this.pendientes.filter(p => p.grade === gradoTexto);
  }

  countAsignadosPaso(salon: 'A' | 'B'): number {
    return this.pendientesDelPasoActual.filter(p => this.asignaciones[p.studentId] === salon).length;
  }

  // -- Paso "Grado 1": alta de estudiantes nuevos --
  agregarEstudianteNuevo() {
    this.addStudentError = '';
    if (!this.newStudentForm.name.trim() || !this.newStudentForm.surname.trim()) {
      this.addStudentError = 'Nombre y apellido son obligatorios.';
      return;
    }
    this.addingStudent = true;
    this.service.createStudent({
      name: this.newStudentForm.name.trim(),
      surname: this.newStudentForm.surname.trim(),
      documentNumber: this.newStudentForm.documentNumber.trim(),
      grade: 'Grado 1º',
      classGroup: this.newStudentForm.classGroup,
      active: true
    }).subscribe({
      next: () => {
        this.addingStudent = false;
        this.newStudentsGrade1.push({ ...this.newStudentForm });
        this.newStudentForm = { name: '', surname: '', documentNumber: '', classGroup: 'A' };
      },
      error: (err) => {
        this.addingStudent = false;
        this.addStudentError = err?.error?.error || 'No se pudo registrar el estudiante.';
      }
    });
  }

  countNuevosPorSalon(salon: 'A' | 'B'): number {
    return this.newStudentsGrade1.filter(e => e.classGroup === salon).length;
  }

  // -- Navegación del asistente --
  siguientePasoWizard() {
    if (this.currentWizardGradeNumber === 1) {
      // Nada que guardar en el backend aparte de lo ya creado; solo avanzar.
      this.avanzarIndiceWizard();
      return;
    }

    const pendientesPaso = this.pendientesDelPasoActual;
    const asignacionesPaso: { [studentId: number]: 'A' | 'B' } = {};
    for (const p of pendientesPaso) {
      if (this.asignaciones[p.studentId]) {
        asignacionesPaso[p.studentId] = this.asignaciones[p.studentId];
      }
    }

    if (Object.keys(asignacionesPaso).length === 0) {
      // Nadie marcado en este grado todavía: se puede avanzar igual (se
      // podrá volver más tarde, quedan como pendientes).
      this.avanzarIndiceWizard();
      return;
    }

    this.savingClassrooms = true;
    this.service.assignClassrooms(asignacionesPaso).subscribe({
      next: () => {
        this.savingClassrooms = false;
        this.loadPendientes();
        this.avanzarIndiceWizard();
      },
      error: () => {
        this.savingClassrooms = false;
        this.advanceMessage = 'No se pudo guardar la organización de este grado.';
      }
    });
  }

  private avanzarIndiceWizard() {
    if (this.isLastWizardStep) {
      this.advanceMessage = 'Organización de salones completada de Grado 1º a Grado 11º.';
      this.pendientes = [];
      this.currentWizardIndex = 0;
      this.loadConfig();
    } else {
      this.currentWizardIndex++;
    }
  }

  pasoAnteriorWizard() {
    if (!this.isFirstWizardStep) {
      this.currentWizardIndex--;
    }
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

  // ── Recuadro "Roles y permisos": todos los usuarios por pestaña ────────
  loadUsuariosGestion() {
    this.loadingGestion = true;
    this.service.getUsuariosGestionRoles().subscribe({
      next: (list) => {
        this.usuariosGestion = list;
        this.loadingGestion = false;
      },
      error: () => { this.loadingGestion = false; }
    });
  }

  setRoleTab(tab: 'PARENT' | 'TEACHER' | 'ADMIN') {
    this.activeRoleTab = tab;
    if (tab !== 'PARENT') {
      // El filtro de grado/salón solo aplica dentro de Padres; al salir de
      // esa pestaña se limpia para que no quede "pegado" si se vuelve luego.
      this.selectedParentGradoSalon = null;
    }
  }

  /** Etiqueta "Grado X - Salón Y" única por cada combinación real que
   *  tenga al menos un hijo de algún padre (para pintar los botones de
   *  filtro). Ordenada numéricamente por grado. */
  get gradosSalonesConPadres(): string[] {
    const set = new Set<string>();
    for (const u of this.usuariosGestion) {
      if (u.roleName !== 'PARENT') continue;
      for (const hijo of u.hijos) {
        if (!hijo.grade) continue;
        const etiqueta = hijo.classroom ? `${hijo.grade} - ${hijo.classroom}` : hijo.grade;
        set.add(etiqueta);
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }

  /** Selecciona (o quita, si ya estaba activo) el filtro de grado/salón de
   *  la pestaña Padres. null = "Todos". */
  selectGradoSalonFiltro(valor: string | null) {
    this.selectedParentGradoSalon = this.selectedParentGradoSalon === valor ? null : valor;
  }

  get usuariosDeLaPestanaActiva(): UsuarioGestionRol[] {
    if (this.activeRoleTab === 'ADMIN') {
      // "Administradores" debe mostrar a TODO el que hoy tiene privilegios
      // reales de Administrador: los que lo tienen como rol principal, MÁS
      // los que lo tienen como rol "extra" sumado desde Padres o Profesores
      // (additionalAdmin) — no solo los que tienen roleName === 'ADMIN'.
      return this.usuariosGestion.filter(u => u.roleName === 'ADMIN' || u.additionalAdmin);
    }

    let lista = this.usuariosGestion.filter(u => u.roleName === this.activeRoleTab);

    if (this.activeRoleTab === 'PARENT' && this.selectedParentGradoSalon) {
      const filtro = this.selectedParentGradoSalon;
      lista = lista.filter(u => u.hijos.some(hijo => {
        const etiqueta = hijo.classroom ? `${hijo.grade} - ${hijo.classroom}` : hijo.grade;
        return etiqueta === filtro;
      }));
    }

    return lista;
  }

  countPorRol(roleName: 'PARENT' | 'TEACHER' | 'ADMIN'): number {
    if (roleName === 'ADMIN') {
      // Mismo criterio que usuariosDeLaPestanaActiva: admins nativos + admins "extra".
      return this.usuariosGestion.filter(u => u.roleName === 'ADMIN' || u.additionalAdmin).length;
    }
    return this.usuariosGestion.filter(u => u.roleName === roleName).length;
  }

  /** Da (o quita) el rol de administrador "extra" a un usuario, sin
   *  importar cuál sea su rol principal: se le suma, no se le reemplaza. */
  toggleAdminExtra(user: UsuarioGestionRol) {
    if (user.roleName === 'ADMIN') return; // ya es admin de por sí
    const nuevoValor = !user.additionalAdmin;
    this.togglingAdminExtra[user.id] = true;
    this.service.toggleAdminExtra(user.id, nuevoValor).subscribe({
      next: () => {
        this.togglingAdminExtra[user.id] = false;
        user.additionalAdmin = nuevoValor;
      },
      error: () => { this.togglingAdminExtra[user.id] = false; }
    });
  }
}