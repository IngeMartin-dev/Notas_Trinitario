/* este es boletin.ts (este es el Frontend) hace la logica de el formulario */

import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { GenerationService, GenerationJob } from '../services/generation.service';

interface Student {
  id: number;
  name: string;
  surname: string;
  grade: string;
  classGroup: string;
  documentNumber?: string;
}

interface Signature {
  path: string;
  name: string;
}

/** Materia virtual que el backend trata como una "materia" más en el paso 1
 *  (a la que se le asignan indicadores IH/FA/FAA por estudiante) pero que al
 *  generar el boletín se renderiza como bloque de cierre (Valoración Acudiente)
 *  en lugar de como fila de materia normal. */
const VALORACION_ACUDIENTE_SUBJECT = 'Valoracion Acudiente';

const API_BASE = 'http://localhost:8080/api/boletines';

@Component({
  selector: 'app-boletines',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './boletines.html',
  styleUrl: './boletines.css'
})
export class Boletines implements OnInit, OnDestroy {
  grades: string[] = ['Grado 1º', 'Grado 2º', 'Grado 3º', 'Grado 4º', 'Grado 5º', 'Grado 6º', 'Grado 7º', 'Grado 8º', 'Grado 9º', 'Grado 10º', 'Grado 11º'];
  classrooms: string[] = ['Salon A', 'Salon B'];

  // ── Vista principal del apartado ──────────────────────────────────
  // 'menu'         → los dos botones grandes (Ver Generados / Generar)
  // 'generar'      → el formulario de generación de siempre
  // 'verGenerados' → selector de grado/salón + lista de PDFs ya generados
  mainView: 'menu' | 'generar' | 'verGenerados' = 'menu';

  selectedGrade: string = '';
  selectedClassroom: string = '';
  selectedPeriod: number = 1;

  students: Student[] = [];
  subjects: string[] = [];
  signatures: Signature[] = [];

  // Indicadores por estudiante y materia: studentIndicators[studentId][subject]
  studentIndicators: { [id: number]: { [subject: string]: { ih?: number, fa?: number, faa?: number } } } = {};
  groupObjectives: { [subject: string]: string } = {};

  // Comportamiento social por estudiante
  studentCompSocial: { [id: number]: string } = {};

  // Indicadores (IH, FA, FAA) de Comportamiento Social por estudiante
  studentCompSocialIndicators: { [id: number]: { ih?: number, fa?: number, faa?: number } } = {};
  // Objetivo / descripción editable de Comportamiento Social (compartido por todos)
  compSocialObjetivo: string = '';

  selectedDirectorSignature?: string;
  showSignaturePanel: boolean = false;

  showFormView: boolean = true;
  fadeOutForm: boolean = false;
  isGenerating: boolean = false;
  /** Generación por lote en curso (o recién terminada) que se está mostrando
   *  en pantalla. La generación real corre en el backend: este objeto se
   *  mantiene sincronizado vía GenerationService (sondeo cada ~2.5s). */
  currentJob: GenerationJob | null = null;

  lostAreasPreview: { subject: string; average: number }[] = [];

  // ── "Ver Boletines Generados" ─────────────────────────────────────
  verGrade: string = '';
  verClassroom: string = '';
  verPeriod: number = 0; // 0 = Todos los períodos
  verList: { fileName: string; updatedAt: string }[] = [];
  verLoading: boolean = false;
  verChecked: boolean = false;

  // Pasos del formulario
  currentStep: 'subjectIndicators' | 'comportamiento' | 'final' = 'subjectIndicators';

  // Materia actual para editar indicadores
  currentSubjectIndex: number = 0;

  private jobsSub?: Subscription;
  private autoSaveHandle: any = null;
  private lastAutoLoadedDraftKey: string | null = null;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private generationService: GenerationService
  ) {}

  ngOnInit(): void {
    this.loadUnlockedPeriod();
    this.loadSignatures();

    // Si venimos de un click en una notificación de generación, la abrimos
    // directamente (sea que esté corriendo o recién haya terminado).
    const focusId = this.generationService.consumeFocusJobId();
    if (focusId) {
      const job = this.generationService.currentJobs.find(j => j.jobId === focusId);
      if (job) this.applyFocusedJob(job);
    }

    // Mantiene currentJob sincronizado con el estado real del backend
    // mientras el usuario esté viendo la pantalla de generación/resultados,
    // sin importar si inició la generación desde aquí o desde otra sesión.
    this.jobsSub = this.generationService.jobs$.subscribe(jobs => {
      if (!this.currentJob) return;
      const updated = jobs.find(j => j.jobId === this.currentJob!.jobId);
      if (updated) {
        const wasRunning = this.currentJob.status === 'RUNNING';
        this.currentJob = updated;
        if (updated.status !== 'RUNNING') {
          this.isGenerating = false;
          // Se acaba de terminar de generar exitosamente: se limpian los
          // objetivos/indicadores que se habían diligenciado — ya no
          // aplican, el borrador correspondiente también se borró en el
          // backend. Si terminó en ERROR se deja todo tal cual para poder
          // reintentar sin volver a escribir todo.
          if (wasRunning && updated.status === 'DONE') {
            this.clearFormState();
          }
        }
        this.cdr.detectChanges();
      }
    });
  }

  /** Limpia los objetivos/indicadores diligenciados en el formulario.
   *  Se llama apenas una generación termina exitosamente, para que la
   *  próxima vez que se entre a generar (mismo u otro período) no queden
   *  datos de la generación anterior. */
  private clearFormState() {
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialIndicators = {};
    this.compSocialObjetivo = '';
    this.currentStep = 'subjectIndicators';
    this.currentSubjectIndex = 0;
    // El borrador de este grado/salón/período ya se borró en el backend;
    // se resetea la llave para que, si se vuelve a entrar a este mismo
    // combo, se intente cargar de nuevo (no encontrará nada, lo cual es
    // lo correcto) en vez de quedar bloqueado por haberlo cargado antes.
    this.lastAutoLoadedDraftKey = null;
  }

  ngOnDestroy(): void {
    this.jobsSub?.unsubscribe();
    if (this.autoSaveHandle) clearTimeout(this.autoSaveHandle);
    // Guarda el progreso al salir del apartado (navegación dentro de la app).
    this.persistDraft(false);
  }

  /** Intento de guardado best-effort al cerrar/recargar la pestaña.
   *  sendBeacon funciona incluso durante la descarga de la página, a
   *  diferencia de una petición HTTP normal que se cancelaría. */
  @HostListener('window:beforeunload')
  saveOnUnload() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) return;
    if (this.mainView !== 'generar') return;
    const body = JSON.stringify({
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      payload: JSON.stringify(this.buildDraftPayload())
    });
    const blob = new Blob([body], { type: 'application/json' });
    navigator.sendBeacon(`${API_BASE}/drafts`, blob);
  }

  private applyFocusedJob(job: GenerationJob) {
    this.mainView = 'generar';
    this.showFormView = false;
    this.currentJob = job;
    this.isGenerating = job.status === 'RUNNING';
    this.selectedGrade = job.grade;
    this.selectedClassroom = job.classroom;
    this.selectedPeriod = job.period;
  }

  // ─────────────────────────────────────────────────────────────────
  // NAVEGACIÓN ENTRE VISTAS PRINCIPALES
  // ─────────────────────────────────────────────────────────────────
  goToGenerarMenu() {
    this.mainView = 'generar';
    this.showFormView = true;
    this.showSignaturePanel = false;
  }

  goToVerGenerados() {
    this.mainView = 'verGenerados';
    this.verGrade = this.selectedGrade || '';
    this.verClassroom = this.selectedClassroom || '';
    this.verPeriod = 0;
    this.verList = [];
    this.verChecked = false;
    if (this.verGrade && this.verClassroom) {
      this.onVerFilterChange();
    }
  }

  backToMenu() {
    this.mainView = 'menu';
    this.showSignaturePanel = false;
  }

  onVerFilterChange() {
    this.verChecked = false;
    this.verList = [];
    if (!this.verGrade || !this.verClassroom) return;
    this.verLoading = true;
    const params: { [k: string]: string } = {
      grade: this.verGrade,
      classroom: this.verClassroom
    };
    if (this.verPeriod && this.verPeriod > 0) {
      params['period'] = String(this.verPeriod);
    }
    this.http.get<any[]>(`${API_BASE}/generados`, { params }).subscribe({
      next: (data) => {
        this.verList = data || [];
        this.verLoading = false;
        this.verChecked = true;
        this.cdr.detectChanges();
      },
      error: () => {
        this.verList = [];
        this.verLoading = false;
        this.verChecked = true;
        this.cdr.detectChanges();
      }
    });
  }

  /** Desde "Ver Boletines Generados": pasa a Generar con el grado/salón
   *  ya seleccionados. */
  generarDesdeVer() {
    if (!this.verGrade || !this.verClassroom) return;
    this.selectedGrade = this.verGrade;
    this.selectedClassroom = this.verClassroom;
    this.mainView = 'generar';
    this.showFormView = true;
    this.isGenerating = false;
    this.currentJob = null;
    this.onGradeChange();
  }

  previewGenerated(fileName: string) {
    this.http.get(`${API_BASE}/generados/descargar`, {
      params: { fileName },
      responseType: 'blob'
    }).subscribe({
      next: (blob) => this.previewPdf(blob as Blob, fileName),
      error: () => alert('No se pudo abrir el boletín.')
    });
  }

  downloadGenerated(fileName: string) {
    this.http.get(`${API_BASE}/generados/descargar`, {
      params: { fileName },
      responseType: 'blob'
    }).subscribe({
      next: (blob) => this.downloadPdf(blob as Blob, fileName),
      error: () => alert('No se pudo descargar el boletín.')
    });
  }

  onGradeChange() {
    this.students = [];
    this.subjects = [];
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialIndicators = {};
    this.compSocialObjetivo = '';
    this.lostAreasPreview = [];
    this.currentStep = 'subjectIndicators';
    this.currentSubjectIndex = 0;
    this.loadStudents();
  }

  onClassroomChange() {
    this.students = [];
    this.subjects = [];
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialIndicators = {};
    this.compSocialObjetivo = '';
    this.lostAreasPreview = [];
    this.currentStep = 'subjectIndicators';
    this.currentSubjectIndex = 0;
    this.loadStudents();
  }

  onPeriodChange() {
    this.subjects = [];
    this.groupObjectives = {};
    this.currentStep = 'subjectIndicators';
    this.loadSubjects();
  }

  nextSubjectIndicators() {
    if (this.currentSubjectIndex < this.subjects.length - 1) {
      this.currentSubjectIndex++;
    } else {
      this.goToComportamiento();
    }
    this.scheduleAutoSave();
    this.scrollToTop();
  }

  prevSubjectIndicators() {
    if (this.currentSubjectIndex > 0) {
      this.currentSubjectIndex--;
    }
    this.scheduleAutoSave();
    this.scrollToTop();
  }

  goToComportamiento() {
    this.currentStep = 'comportamiento';
    this.students.forEach(student => {
      if (!this.studentCompSocialIndicators[student.id]) {
        this.studentCompSocialIndicators[student.id] = { ih: undefined, fa: undefined, faa: undefined };
      }
    });
    this.scheduleAutoSave();
    this.scrollToTop();
  }

  goToFinal() {
    this.currentStep = 'final';
    this.scheduleAutoSave();
    this.scrollToTop();
  }

  backToSubjectIndicators() {
    this.currentStep = 'subjectIndicators';
    this.scheduleAutoSave();
    this.scrollToTop();
  }

  /** Vuelve al comienzo de la página al cambiar de materia/paso. Sin esto,
   *  si el usuario venía desplazado hacia abajo (tabla larga de estudiantes)
   *  la siguiente pantalla se mostraba igual de desplazada, dando la
   *  sensación de haberse quedado "a mitad" en vez de empezar arriba. */
  private scrollToTop() {
    // Scroll de la ventana (por si el layout hace scroll a nivel de página)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // Scroll del contenedor interno del layout (app.html envuelve el
    // router-outlet en ".content-wrapper", que es lo que normalmente
    // hace scroll cuando el sidebar es fijo).
    const container = document.querySelector('.content-wrapper');
    if (container) container.scrollTop = 0;
  }

  // Getters para indicadores por estudiante y materia
  getStudentIndicator(studentId: number, subject: string) {
    return this.studentIndicators[studentId]?.[subject] || { ih: undefined, fa: undefined, faa: undefined };
  }

  setStudentIndicator(studentId: number, subject: string, field: 'ih' | 'fa' | 'faa', value: number | null) {
    if (!this.studentIndicators[studentId]) {
      this.studentIndicators[studentId] = {};
    }
    if (!this.studentIndicators[studentId][subject]) {
      this.studentIndicators[studentId][subject] = { ih: undefined, fa: undefined, faa: undefined };
    }
    this.studentIndicators[studentId][subject][field] = value ?? undefined;
    this.scheduleAutoSave();
  }

  getGroupObjective(subject: string): string {
    return this.groupObjectives[subject] || '';
  }

  setGroupObjective(subject: string, value: string) {
    this.groupObjectives[subject] = value;
    this.scheduleAutoSave();
  }

  getCompSocialIndicator(studentId: number) {
    return this.studentCompSocialIndicators[studentId] || { ih: undefined, fa: undefined, faa: undefined };
  }

  setCompSocialIndicator(studentId: number, field: 'ih' | 'fa' | 'faa', value: number | null) {
    if (!this.studentCompSocialIndicators[studentId]) {
      this.studentCompSocialIndicators[studentId] = { ih: undefined, fa: undefined, faa: undefined };
    }
    this.studentCompSocialIndicators[studentId][field] = value ?? undefined;
    this.scheduleAutoSave();
  }

  onCompSocialObjetivoChange(value: string) {
    this.compSocialObjetivo = value;
    this.scheduleAutoSave();
  }

  loadUnlockedPeriod() {
    this.http.get<any[]>('http://localhost:8080/api/periods')
      .subscribe({
        next: (periods) => {
          const unlocked = periods
            .filter(p => p.isUnlocked)
            .sort((a, b) => b.periodNumber - a.periodNumber);
          if (unlocked.length > 0) {
            this.selectedPeriod = unlocked[0].periodNumber;
          } else {
            this.selectedPeriod = 1;
          }
          this.loadStudents();
          this.cdr.detectChanges();
        },
        error: () => {
          this.selectedPeriod = 1;
          this.loadStudents();
        }
      });
  }

  loadStudents() {
    if (!this.selectedGrade || !this.selectedClassroom) return;

    this.http.get<Student[]>(`http://localhost:8080/api/students/grade/${encodeURIComponent(this.selectedGrade)}/class/${encodeURIComponent(this.selectedClassroom)}`)
      .subscribe({
        next: (data) => {
          this.students = data.sort((a, b) => (a.surname || '').localeCompare(b.surname || ''));
          this.initializeData();
          this.loadSubjects();
          this.loadLostAreas();
          this.cdr.detectChanges();
        },
        error: () => {
          this.students = [];
          this.cdr.detectChanges();
        }
      });
  }

  loadSubjects() {
    if (!this.selectedGrade || !this.selectedClassroom) return;

    this.http.get<string[]>(`${API_BASE}/materias-todas?grade=${encodeURIComponent(this.selectedGrade)}&classroom=${encodeURIComponent(this.selectedClassroom)}`)
      .subscribe({
        next: (data) => {
          this.subjects = data || [];
          // ── Anexamos la "materia virtual" Valoración Acudiente como si
          //     fuera una materia más, para que aparezca en el Paso 1 con
          //     sus campos IH / FA / FAA por estudiante.
          if (!this.subjects.includes(VALORACION_ACUDIENTE_SUBJECT)) {
            this.subjects = [...this.subjects, VALORACION_ACUDIENTE_SUBJECT];
          }
          this.initializeStudentIndicatorsForSubjects();
          this.currentStep = 'subjectIndicators';
          this.tryAutoLoadDraft();
          this.cdr.detectChanges();
        },
        error: () => {
          this.subjects = [VALORACION_ACUDIENTE_SUBJECT];
          this.initializeStudentIndicatorsForSubjects();
          this.currentStep = 'subjectIndicators';
          this.tryAutoLoadDraft();
          this.cdr.detectChanges();
        }
      });
  }

  private initializeStudentIndicatorsForSubjects() {
    this.subjects.forEach(subject => {
      this.groupObjectives[subject] = this.groupObjectives[subject] || '';
      this.students.forEach(student => {
        if (!this.studentIndicators[student.id]) {
          this.studentIndicators[student.id] = {};
        }
        if (!this.studentIndicators[student.id][subject]) {
          this.studentIndicators[student.id][subject] = { ih: undefined, fa: undefined, faa: undefined };
        }
      });
    });
  }

  loadLostAreas() {
    this.lostAreasPreview = [];
    if (!this.selectedGrade || !this.selectedClassroom || this.students.length === 0) return;

    this.http.get<any[]>(`${API_BASE}/promedios?grade=`
      + encodeURIComponent(this.selectedGrade) + '&classroom=' + encodeURIComponent(this.selectedClassroom) + '&period=' + this.selectedPeriod)
      .subscribe({
        next: (data) => {
          this.lostAreasPreview = (data || [])
            .filter(item => (item.average ?? 0) < 3.5)
            .map(item => ({ subject: item.name || ('Estudiante ' + item.studentId), average: item.average ?? 0 }));
          this.cdr.detectChanges();
        },
        error: () => {
          this.lostAreasPreview = [];
          this.cdr.detectChanges();
        }
      });
  }

  loadSignatures() {
    this.http.get<Signature[]>(`${API_BASE}/firmas`)
      .subscribe({
        next: (data) => {
          this.signatures = data;
        },
        error: () => {
          this.signatures = [];
        }
      });
  }

  private initializeData() {
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocial = {};
  }

  isValid(): boolean {
    return !!this.selectedGrade && !!this.selectedClassroom && this.students.length > 0;
  }

  openSignaturePanel() {
    this.showSignaturePanel = true;
  }

  closeSignaturePanel() {
    this.showSignaturePanel = false;
  }

  confirmSignature() {
    this.showSignaturePanel = false;
    this.scheduleAutoSave();
  }

  clearDirectorSignature() {
    this.selectedDirectorSignature = undefined;
    this.scheduleAutoSave();
  }

  // ─────────────────────────────────────────────────────────────────
  // GENERACIÓN POR LOTE EN SEGUNDO PLANO
  // ─────────────────────────────────────────────────────────────────

  private buildBatchStudentsPayload(): any[] {
    return this.students.map((student, i) => {
      const subjectIndicators = this.subjects.map(subject => {
        const indicator = this.studentIndicators[student.id]?.[subject] || {};
        return {
          subjectName: subject,
          objetivoPeriodo: this.groupObjectives[subject] || '',
          ih: indicator.ih,
          fa: indicator.fa,
          faa: indicator.faa
        };
      });
      const cs = this.studentCompSocialIndicators[student.id] || {};
      return {
        studentId: student.id,
        nLista: i + 1,
        subjectIndicators,
        compSocialIh: cs.ih,
        compSocialFa: cs.fa,
        compSocialFaa: cs.faa
      };
    });
  }

  private async startGeneration() {
    if (!this.isValid()) return;

    this.fadeOutForm = true;
    await new Promise(r => setTimeout(r, 500));

    this.showFormView = false;
    this.fadeOutForm = false;

    const payload = {
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      students: this.buildBatchStudentsPayload(),
      compSocialObjetivo: this.compSocialObjetivo || '',
      directorSignature: this.selectedDirectorSignature || ''
    };

    try {
      const job = await this.http.post<GenerationJob>(`${API_BASE}/generar-lote`, payload).toPromise();
      if (job) {
        this.currentJob = job;
        this.isGenerating = true;
        this.generationService.upsertJobLocal(job);
      }
    } catch (err: any) {
      this.showFormView = true;
      this.isGenerating = false;
      alert('Error iniciando la generación: ' + (err.error?.error || err.message || 'Error desconocido'));
    }
  }

  initiateGenerate() {
    if (!this.isValid()) return;
    this.startGeneration();
  }

  /** Combina las dos fases del backend (preparar datos + renderizar PDF)
   *  en un solo porcentaje continuo, para que la barra avance todo el
   *  tiempo en vez de quedarse en 0 durante la preparación y saltar
   *  de golpe cuando empieza a renderizar. */
  generationProgressPct(): number {
    if (!this.currentJob) return 0;
    if (this.currentJob.status === 'DONE') return 100;
    if (!this.currentJob.total) return 0;

    const PREP_WEIGHT = 30; // % de la barra que representa "preparar datos"
    const prepPct = Math.min(1, (this.currentJob.prepared || 0) / this.currentJob.total);

    if (this.currentJob.phase === 'PREPARING') {
      return Math.round(prepPct * PREP_WEIGHT);
    }
    const renderPct = Math.min(1, (this.currentJob.completed || 0) / this.currentJob.total);
    return Math.min(100, Math.round(PREP_WEIGHT + renderPct * (100 - PREP_WEIGHT)));
  }

  generationStatusText(): string {
    if (!this.currentJob) return '';
    if (this.currentJob.status === 'DONE') return `${this.currentJob.total} / ${this.currentJob.total} boletines`;
    if (this.currentJob.phase === 'PREPARING') {
      return `Preparando datos: ${this.currentJob.prepared} / ${this.currentJob.total}`;
    }
    return `Generando PDF: ${this.currentJob.completed} / ${this.currentJob.total}`;
  }

  previewPdf(blob: Blob, fileName: string) {
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');
    if (win) {
      win.addEventListener('unload', () => URL.revokeObjectURL(url));
    }
  }

  downloadPdf(blob: Blob, fileName: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  }

  onSignatureUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        const formData = new FormData();
        formData.append('file', file);
        this.http.post<Signature>(`${API_BASE}/firmas/upload`, formData)
          .subscribe({
            next: (sig) => {
              this.signatures.push(sig);
            },
            error: () => {
              alert('Error al subir la firma');
            }
          });
      });
      input.value = '';
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const panel = document.querySelector('.signature-panel');
    if (panel) panel.classList.add('drag-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const panel = document.querySelector('.signature-panel');
    if (panel) panel.classList.remove('drag-over');

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          this.uploadSignatureFile(file);
        }
      });
    }
  }

  private uploadSignatureFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    this.http.post<Signature>(`${API_BASE}/firmas/upload`, formData)
      .subscribe({
        next: (sig) => {
          this.signatures.push(sig);
        },
        error: () => {
          alert('Error al subir la firma');
        }
      });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  backToForm() {
    this.showFormView = true;
    this.fadeOutForm = false;
    this.isGenerating = false;
    this.currentJob = null;
    this.showSignaturePanel = false;
    this.currentStep = 'subjectIndicators';
    this.currentSubjectIndex = 0;
  }

  /** Botón "← Regresar" del Paso 3: vuelve al Paso 2 (Comportamiento Social). */
  backToComportamiento() {
    this.currentStep = 'comportamiento';
    this.scheduleAutoSave();
    this.scrollToTop();
  }

  // ─────────────────────────────────────────────────────────────────
  // BORRADORES: guardado automático y reanudación donde se quedó
  // ─────────────────────────────────────────────────────────────────
  private pendingDraftPayload: any = null;

  private draftKey(): string {
    return `${this.selectedGrade}|${this.selectedClassroom}|${this.selectedPeriod}`;
  }

  private tryAutoLoadDraft() {
    // Si venimos de "Cargar borrador" ya tenemos el payload en mano.
    if (this.pendingDraftPayload) {
      this.applyDraftPayload(this.pendingDraftPayload);
      this.pendingDraftPayload = null;
      return;
    }
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) return;
    const key = this.draftKey();
    if (key === this.lastAutoLoadedDraftKey) return;
    this.lastAutoLoadedDraftKey = key;

    this.http.get<any>(`${API_BASE}/drafts/ultimo`, {
      params: { grade: this.selectedGrade, classroom: this.selectedClassroom, period: this.selectedPeriod }
    }).subscribe({
      next: (draft) => {
        if (!draft) return; // no hay borrador previo: se sigue con el formulario en blanco
        try {
          const payload = JSON.parse(draft.payload || '{}');
          this.applyDraftPayload(payload);
          this.cdr.detectChanges();
        } catch { /* borrador corrupto: se ignora */ }
      },
      error: () => { /* backend no disponible momentáneamente: se sigue con el formulario en blanco */ }
    });
  }

  private applyDraftPayload(payload: any) {
    if (!payload) return;
    if (Array.isArray(payload.studentSubjectIndicators)) {
      for (const ind of payload.studentSubjectIndicators) {
        if (ind.studentId == null || !ind.subjectName) continue;
        if (!this.studentIndicators[ind.studentId]) this.studentIndicators[ind.studentId] = {};
        this.studentIndicators[ind.studentId][ind.subjectName] = {
          ih: ind.ih ?? undefined,
          fa: ind.fa ?? undefined,
          faa: ind.faa ?? undefined
        };
      }
    }
    if (payload.groupObjectives) {
      this.groupObjectives = { ...this.groupObjectives, ...payload.groupObjectives };
    }
    if (typeof payload.compSocialObjetivo === 'string') {
      this.compSocialObjetivo = payload.compSocialObjetivo;
    }
    if (payload.studentCompSocialIndicators) {
      this.studentCompSocialIndicators = payload.studentCompSocialIndicators;
    }
    if (payload.directorSignature) {
      this.selectedDirectorSignature = payload.directorSignature;
    }
    if (payload.currentStep) {
      this.currentStep = payload.currentStep;
    }
    if (typeof payload.currentSubjectIndex === 'number') {
      this.currentSubjectIndex = Math.max(0, Math.min(payload.currentSubjectIndex, this.subjects.length - 1));
    }
  }

  private buildDraftPayload(): any {
    return {
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      studentSubjectIndicators: this.getPayloadStudentIndicators(),
      groupObjectives: this.groupObjectives,
      compSocialObjetivo: this.compSocialObjetivo,
      studentCompSocialIndicators: this.studentCompSocialIndicators,
      directorSignature: this.selectedDirectorSignature,
      currentStep: this.currentStep,
      currentSubjectIndex: this.currentSubjectIndex
    };
  }

  private persistDraft(showFeedback: boolean) {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) {
      if (showFeedback) alert('Seleccione grado, salón y período antes de guardar.');
      return;
    }
    const payload = this.buildDraftPayload();
    this.http.post(`${API_BASE}/drafts`, {
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      payload: JSON.stringify(payload)
    }).subscribe({
      next: () => {
        if (showFeedback) {
          alert('Borrador guardado correctamente.');
        }
      },
      error: (err) => {
        console.error('Error guardando borrador', err);
        if (showFeedback) alert('Error al guardar el borrador.');
      }
    });
  }

  /** Guardado automático con "debounce": espera a que el usuario deje de
   *  escribir/editar por 1.5s antes de guardar, para no saturar el backend
   *  con una petición por cada tecla. Así, si el usuario navega a otro
   *  apartado o recarga la página, lo que llevaba diligenciado no se pierde. */
  private scheduleAutoSave() {
    if (this.autoSaveHandle) clearTimeout(this.autoSaveHandle);
    this.autoSaveHandle = setTimeout(() => this.persistDraft(false), 1500);
  }

  saveDraft() {
    this.persistDraft(true);
  }

  getPayloadStudentIndicators(): any[] {
    const result: any[] = [];
    for (const student of this.students) {
      const indicators = this.studentIndicators[student.id] || {};
      for (const subject of this.subjects) {
        const ind = indicators[subject] || {};
        result.push({
          studentId: student.id,
          subjectName: subject,
          ih: ind.ih ?? null,
          fa: ind.fa ?? null,
          faa: ind.faa ?? null
        });
      }
    }
    return result;
  }

  private get selectedSchoolYear(): string {
    return String(new Date().getFullYear());
  }
}