/* este es boletin.ts (este es el Frontend) hace la logica de el formulario */

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { GenerationService, GenerationJob } from '../services/generation.service';
import { DialogService } from '../services/dialog.service';

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

  selectedGrade: string = '';
  selectedClassroom: string = '';
  selectedPeriod: number = 1;

  students: Student[] = [];
  subjects: string[] = [];
  signatures: Signature[] = [];

  // Indicadores por estudiante y materia: studentIndicators[studentId][subject]
  studentIndicators: { [id: number]: { [subject: string]: { ih?: number, fa?: number, faa?: number } } } = {};
  groupObjectives: { [subject: string]: string } = {};

  // Comportamiento social por estudiante (nota numérica)
  studentCompSocialRating: { [id: number]: number } = {};

  // Indicadores (IH, FA, FAA) de Comportamiento Social por estudiante
  studentCompSocialIndicators: { [id: number]: { ih?: number, fa?: number, faa?: number } } = {};
  // Objetivo / descripción editable de Comportamiento Social (compartido por todos)
  compSocialObjetivo: string = '';

  // Valoración Acudiente por estudiante (nota numérica)
  studentValoracionAcudiente: { [id: number]: number } = {};

  // Mensajes de validación mostrados sobre el input correspondiente
  valAcudienteError: { [id: number]: string } = {};
  compSocialError: { [id: number]: string } = {};

  selectedDirectorSignature?: string;
  showSignaturePanel: boolean = false;

  showFormView: boolean = true;
  fadeOutForm: boolean = false;
  isGenerating: boolean = false;
  currentGeneratingIndex: number = -1;
  generationProgress: number = 0;
  generatedFiles: { studentId: number; studentName: string; fileName: string }[] = [];
  /** Job de generación masiva actualmente en curso o recién terminado
   *  (el mismo que aparece en la notificación global). */
  currentJobId: string | null = null;
  private jobsSub?: Subscription;

  showDraftsView: boolean = false;
  drafts: any[] = [];
  isLoadingDrafts: boolean = false;
  selectedDraftId?: number;
  draftGradeFilter: string = '';
  draftClassroomFilter: string = '';

  lostAreasPreview: { studentName: string; subjects: string[] }[] = [];

  // Pasos del formulario
  currentStep: 'subjectIndicators' | 'comportamiento' | 'final' = 'subjectIndicators';

  // Materia actual para editar indicadores
  currentSubjectIndex: number = 0;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private generationService: GenerationService,
    private dialogService: DialogService
  ) {}

  ngOnDestroy(): void {
    this.jobsSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadUnlockedPeriod();
    this.loadSignatures();
  }

  onGradeChange() {
    this.students = [];
    this.subjects = [];
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialRating = {};
    this.studentCompSocialIndicators = {};
    this.studentValoracionAcudiente = {};
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
    this.studentCompSocialRating = {};
    this.studentCompSocialIndicators = {};
    this.studentValoracionAcudiente = {};
    this.compSocialObjetivo = '';
    this.lostAreasPreview = [];
    this.currentStep = 'subjectIndicators';
    this.currentSubjectIndex = 0;
    this.loadStudents();
  }

  onPeriodChange() {
    this.subjects = [];
    this.groupObjectives = {};
    this.studentCompSocialRating = {};
    this.studentCompSocialIndicators = {};
    this.studentValoracionAcudiente = {};
    this.compSocialObjetivo = '';
    this.currentStep = 'subjectIndicators';
    this.loadSubjects();
    this.loadPreviousPeriodData();
  }

  private loadPreviousPeriodData() {
    if (!this.selectedGrade || !this.selectedClassroom || this.selectedPeriod <= 1) return;

    this.http.get<any>('http://localhost:8080/api/boletines/drafts', {
      params: {
        grade: this.selectedGrade,
        classroom: this.selectedClassroom
      }
    }).subscribe({
      next: (drafts: any[]) => {
        const previousDraft = drafts.find(d => d.period === this.selectedPeriod - 1);
        if (!previousDraft || !previousDraft.payload) return;

        try {
          const payload = JSON.parse(previousDraft.payload);
          // El borrador guarda estos dos campos como diccionarios
          // { [studentId]: nota }, tal como los produce saveDraft().
          const compSocialDict = payload.studentCompSocialRating || {};
          const valAcudienteDict = payload.studentValoracionAcudiente || {};

          Object.keys(compSocialDict).forEach((studentId) => {
            const id = Number(studentId);
            const val = Number(compSocialDict[studentId]);
            if (!isNaN(val) && val > 0 && !this.studentCompSocialRating[id]) {
              this.studentCompSocialRating[id] = val;
            }
          });

          Object.keys(valAcudienteDict).forEach((studentId) => {
            const id = Number(studentId);
            const val = Number(valAcudienteDict[studentId]);
            if (!isNaN(val) && val > 0 && !this.studentValoracionAcudiente[id]) {
              this.studentValoracionAcudiente[id] = val;
            }
          });
        } catch (e) {
          // ignore parse errors
        }
      },
      error: () => {}
    });
  }

  nextSubjectIndicators() {
    if (this.currentSubjectIndex < this.subjects.length - 1) {
      this.currentSubjectIndex++;
    } else {
      this.goToComportamiento();
    }
  }

  prevSubjectIndicators() {
    if (this.currentSubjectIndex > 0) {
      this.currentSubjectIndex--;
    }
  }

  goToComportamiento() {
    this.currentStep = 'comportamiento';
    this.students.forEach(student => {
      if (!this.studentCompSocialIndicators[student.id]) {
        this.studentCompSocialIndicators[student.id] = { ih: undefined, fa: undefined, faa: undefined };
      }
      if (!this.studentCompSocialRating[student.id]) {
        this.studentCompSocialRating[student.id] = 0;
      }
      if (!this.studentValoracionAcudiente[student.id]) {
        this.studentValoracionAcudiente[student.id] = 0;
      }
    });
  }

  goToFinal() {
    this.currentStep = 'final';
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
  }

  isValoracionAcudiente(subject: string): boolean {
    if (!subject) return false;
    const normalized = subject.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return normalized === 'valoracion acudiente';
  }

  getGroupObjective(subject: string): string {
    return this.groupObjectives[subject] || '';
  }

  setGroupObjective(subject: string, value: string) {
    this.groupObjectives[subject] = value;
  }

  getCompSocialIndicator(studentId: number) {
    return this.studentCompSocialIndicators[studentId] || { ih: undefined, fa: undefined, faa: undefined };
  }

  setCompSocialIndicator(studentId: number, field: 'ih' | 'fa' | 'faa', value: number | null) {
    if (!this.studentCompSocialIndicators[studentId]) {
      this.studentCompSocialIndicators[studentId] = { ih: undefined, fa: undefined, faa: undefined };
    }
    this.studentCompSocialIndicators[studentId][field] = value ?? undefined;
  }

  getCompSocialRating(studentId: number): number | null {
    return this.studentCompSocialRating[studentId] ?? null;
  }

  // Mismo funcionamiento que las notas de Calificaciones: acepta coma o
  // punto como separador decimal y siempre deja la nota entre 0 y 5
  // (nunca se "resetea" a 0 por pasarse, se recorta a 5).
  private normalizeDecimal(value: any): number | null {
    if (value == null || value === '') return null;
    let str = String(value).trim().replace(',', '.');
    const num = parseFloat(str);
    if (isNaN(num)) return null;
    const clamped = Math.max(0, Math.min(5, num));
    return Math.round(clamped * 100) / 100;
  }

  /**
   * Igual que en Calificaciones: mientras el usuario escribe, cualquier "."
   * que teclee se convierte al instante en "," en el propio input (y si
   * teclea "," se queda igual), conservando la posición del cursor.
   */
  private liveCommaReplace(event: Event): string {
    const input = event.target as HTMLInputElement;
    const cursor = input.selectionStart ?? input.value.length;
    const hadDotBeforeCursor = input.value.slice(0, cursor).includes('.');
    const newValue = input.value.replace(/\./g, ',');
    if (newValue !== input.value) {
      input.value = newValue;
      const newCursor = hadDotBeforeCursor ? cursor : cursor;
      input.setSelectionRange(newCursor, newCursor);
    }
    return input.value;
  }

  setCompSocialRating(studentId: number, value: any) {
    const num = this.normalizeDecimal(value);
    delete this.compSocialError[studentId];
    this.studentCompSocialRating[studentId] = num ?? 0;
  }

  onCompSocialInput(studentId: number, event: Event) {
    const raw = this.liveCommaReplace(event);
    this.setCompSocialRating(studentId, raw);
  }

  /** Letra de la escala valorativa institucional (E/S/B/A/I) para la nota de
   *  Comportamiento Social actualmente digitada, para mostrarla junto al
   *  campo mientras el profesor escribe. */
  getCompSocialScaleLabel(studentId: number): string {
    return this.escalaValorativaLetra(this.studentCompSocialRating[studentId]);
  }

  getValoracionAcudiente(studentId: number): number | null {
    return this.studentValoracionAcudiente[studentId] ?? null;
  }

  setValoracionAcudiente(studentId: number, value: any) {
    const num = this.normalizeDecimal(value);
    delete this.valAcudienteError[studentId];
    this.studentValoracionAcudiente[studentId] = num ?? 0;
  }

  onValoracionAcudienteInput(studentId: number, event: Event) {
    const raw = this.liveCommaReplace(event);
    this.setValoracionAcudiente(studentId, raw);
  }

  /** Letra de la escala valorativa institucional (E/S/B/A/I) para la nota de
   *  Valoración Acudiente actualmente digitada. */
  getValoracionAcudienteScaleLabel(studentId: number): string {
    return this.escalaValorativaLetra(this.studentValoracionAcudiente[studentId]);
  }

  /**
   * Escala valorativa institucional (5 niveles), usada tanto para
   * Comportamiento Social como para Valoración Acudiente:
   *   E = Excelente     4,6 – 5,0
   *   S = Sobresaliente 4,0 – 4,5
   *   B = Bueno         3,5 – 3,9
   *   A = Aceptable     3,0 – 3,4
   *   I = Insuficiente  1,0 – 2,9
   */
  private escalaValorativaLetra(nota: number | undefined | null): string {
    if (nota == null || nota <= 0) return '';
    if (nota >= 4.6) return 'E';
    if (nota >= 4.0) return 'S';
    if (nota >= 3.5) return 'B';
    if (nota >= 3.0) return 'A';
    if (nota >= 1.0) return 'I';
    return '';
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

    this.http.get<string[]>(`http://localhost:8080/api/boletines/materias-todas?grade=${encodeURIComponent(this.selectedGrade)}&classroom=${encodeURIComponent(this.selectedClassroom)}`)
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
          this.cdr.detectChanges();
        },
        error: () => {
          this.subjects = [VALORACION_ACUDIENTE_SUBJECT];
          this.initializeStudentIndicatorsForSubjects();
          this.currentStep = 'subjectIndicators';
          this.cdr.detectChanges();
        }
      });
  }

  private initializeStudentIndicatorsForSubjects() {
    this.subjects.forEach(subject => {
      this.groupObjectives[subject] = '';
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

    // Materias reprobadas (no promedio general del estudiante) del período
    // que se está generando, tal como se pidió.
    this.http.get<any[]>('http://localhost:8080/api/boletines/materias-perdidas?grade='
      + encodeURIComponent(this.selectedGrade) + '&classroom=' + encodeURIComponent(this.selectedClassroom) + '&period=' + this.selectedPeriod)
      .subscribe({
        next: (data) => {
          this.lostAreasPreview = (data || []).map(item => ({
            studentName: item.name || ('Estudiante ' + item.studentId),
            subjects: item.lostSubjects || []
          }));
          this.cdr.detectChanges();
        },
        error: () => {
          this.lostAreasPreview = [];
          this.cdr.detectChanges();
        }
      });
  }

  loadSignatures() {
    this.http.get<Signature[]>('http://localhost:8080/api/boletines/firmas')
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
    this.studentCompSocialRating = {};
    this.studentCompSocialIndicators = {};
    this.studentValoracionAcudiente = {};
    this.compSocialObjetivo = '';
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
  }

  private async startGeneration() {
    if (!this.isValid()) return;

    this.fadeOutForm = true;
    await new Promise(r => setTimeout(r, 500));

    this.showFormView = false;
    this.fadeOutForm = false;
    this.isGenerating = true;
    this.generatedFiles = [];
    this.currentGeneratingIndex = 0;
    this.generationProgress = 0;
    this.currentJobId = null;

    const directorSignature = this.selectedDirectorSignature;
    const schoolYear = new Date().getFullYear().toString();

    // Arma el payload de TODOS los estudiantes de una vez (misma forma que
    // antes se mandaba uno a la vez a /generar) para mandarlo en un solo
    // POST; el backend procesa la lista en segundo plano como un job.
    const students = this.students.map((student, i) => {
      const subjectsData = this.subjects.map(subject => {
        const indicator = this.studentIndicators[student.id]?.[subject] || {};
        return {
          subjectName: subject,
          objetivoPeriodo: this.groupObjectives[subject] || '',
          ih: indicator.ih ?? 0,
          fa: indicator.fa ?? 0,
          faa: indicator.faa ?? 0
        };
      });

      const csIndicators = this.studentCompSocialIndicators[student.id];
      const compSocialIndicadores = csIndicators
        ? `IH: ${csIndicators.ih ?? 0}, FA: ${csIndicators.fa ?? 0}, FAA: ${csIndicators.faa ?? 0}`
        : '';

      const valoracionAcudiente = this.studentValoracionAcudiente[student.id] ?? 0;

      return {
        studentId: student.id,
        grade: this.selectedGrade,
        classroom: this.selectedClassroom,
        period: this.selectedPeriod,
        nLista: i + 1,
        schoolYear: schoolYear,
        studentSubjectIndicators: subjectsData,
        objetivoPeriodo: '',
        valoracionAcudiente: valoracionAcudiente,
        valoracionAcudienteNota: valoracionAcudiente,
        compSocial: this.studentCompSocialRating[student.id] ?? 0,
        compSocialIndicadores: compSocialIndicadores,
        compSocialObjetivo: this.compSocialObjetivo || '',
        compSocialIh: this.studentCompSocialIndicators[student.id]?.ih ?? 0,
        compSocialFa: this.studentCompSocialIndicators[student.id]?.fa ?? 0,
        compSocialFaa: this.studentCompSocialIndicators[student.id]?.faa ?? 0,
        directorSignature: directorSignature,
        leftSignature: null
      };
    });

    const body = {
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      students
    };

    this.http.post<GenerationJob>('http://localhost:8080/api/boletines/generaciones', body).subscribe({
      next: (job) => {
        // Inserta el job de inmediato (optimista) para que la notificación
        // aparezca en cualquier pantalla sin esperar al próximo sondeo.
        this.generationService.upsertJobLocal(job);
        this.currentJobId = job.jobId;
        this.watchJob(job.jobId);
      },
      error: (err) => {
        console.error('Error iniciando la generación:', err);
        this.dialogService.alert('No se pudo iniciar la generación de boletines.', 'Error');
        this.isGenerating = false;
        this.cdr.detectChanges();
      }
    });
  }

  /** Sigue el progreso de un job ya iniciado reutilizando el sondeo global
   *  del GenerationService (el mismo que alimenta la notificación) en vez
   *  de tener un polling propio duplicado acá. */
  private watchJob(jobId: string) {
    this.jobsSub?.unsubscribe();
    this.jobsSub = this.generationService.jobs$.subscribe(jobs => {
      const job = jobs.find(j => j.jobId === jobId);
      if (!job) return;

      const total = job.total || this.students.length;
      this.generationProgress = total > 0 ? Math.round((job.completed / total) * 100) : 0;
      this.currentGeneratingIndex = Math.min(job.completed, Math.max(this.students.length - 1, 0));

      if (job.status === 'DONE' || job.status === 'ERROR') {
        this.generatedFiles = job.files.map(f => ({
          studentId: f.studentId,
          studentName: f.studentName,
          fileName: f.fileName
        }));
        if (job.errors && job.errors.length > 0) {
          console.error('Errores durante la generación:', job.errors);
          this.dialogService.alert('Algunos boletines no se pudieron generar:\n' + job.errors.join('\n'), 'Errores en la generación');
        }
        this.isGenerating = false;
        this.currentGeneratingIndex = -1;
        this.jobsSub?.unsubscribe();
        this.cdr.detectChanges();
      }
    });
  }

  initiateGenerate() {
    if (!this.isValid()) return;
    this.startGeneration();
  }

  previewPdf(studentId: number, fileName: string) {
    if (!this.currentJobId) return;
    this.http.get(`http://localhost:8080/api/boletines/generaciones/${this.currentJobId}/archivo/${studentId}`,
        { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.target = '_blank';
          a.click();
          setTimeout(() => URL.revokeObjectURL(url), 2000);
        },
        error: () => this.dialogService.alert('No se pudo abrir el boletín.', 'Error')
      });
  }

  downloadPdf(studentId: number, fileName: string) {
    if (!this.currentJobId) return;
    this.http.get(`http://localhost:8080/api/boletines/generaciones/${this.currentJobId}/archivo/${studentId}`,
        { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          a.click();
          setTimeout(() => URL.revokeObjectURL(url), 100);
        },
        error: () => this.dialogService.alert('No se pudo descargar el boletín.', 'Error')
      });
  }

  /** Abre un blob de PDF ya en mano (lo usa la vista de Borradores, que
   *  regenera un boletín puntual vía POST /generar síncrono — no pasa por
   *  el sistema de jobs, así que necesita su propio helper). */
  private openBlobPreview(blob: Blob, fileName: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  /** Descarga un blob de PDF ya en mano (mismo caso de uso que arriba). */
  private saveBlobDownload(blob: Blob, fileName: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }

  onSignatureUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        const formData = new FormData();
        formData.append('file', file);
        this.http.post<Signature>('http://localhost:8080/api/boletines/firmas/upload', formData)
          .subscribe({
            next: (sig) => {
              this.signatures.push(sig);
            },
            error: () => {
              this.dialogService.alert('Error al subir la firma', 'Error');
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

    this.http.post<Signature>('http://localhost:8080/api/boletines/firmas/upload', formData)
      .subscribe({
        next: (sig) => {
          this.signatures.push(sig);
        },
          error: () => {
            this.dialogService.alert('Error al subir la firma', 'Error');
          }
      });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  backToForm() {
    this.jobsSub?.unsubscribe();
    this.currentJobId = null;
    this.showFormView = true;
    this.fadeOutForm = false;
    this.isGenerating = false;
    this.generatedFiles = [];
    this.currentGeneratingIndex = -1;
    this.generationProgress = 0;
    this.showSignaturePanel = false;
    this.showDraftsView = false;
    this.currentStep = 'subjectIndicators';
    this.currentSubjectIndex = 0;
  }

  showDrafts() {
    this.showDraftsView = true;
    this.showFormView = false;
    this.showSignaturePanel = false;
    this.draftGradeFilter = this.selectedGrade;
    this.draftClassroomFilter = this.selectedClassroom;
    this.loadDrafts();
  }

  loadDrafts() {
    if (!this.draftGradeFilter || !this.draftClassroomFilter) {
      this.drafts = [];
      return;
    }
    this.isLoadingDrafts = true;
    this.http.get<any[]>('http://localhost:8080/api/boletines/drafts', {
      params: {
        grade: this.draftGradeFilter,
        classroom: this.draftClassroomFilter
      }
    }).subscribe({
      next: (data) => {
        this.drafts = data || [];
        this.isLoadingDrafts = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error cargando borradores', err);
        this.drafts = [];
        this.isLoadingDrafts = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveDraft() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) {
      this.dialogService.alert('Seleccione grado, salón y período antes de guardar.', 'Dato faltante');
      return;
    }
    const payload = {
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      studentSubjectIndicators: this.getPayloadStudentIndicators(),
      compSocialObjetivo: this.compSocialObjetivo,
      studentCompSocialRating: this.studentCompSocialRating,
      studentCompSocialIndicators: this.studentCompSocialIndicators,
      studentValoracionAcudiente: this.studentValoracionAcudiente,
      directorSignature: this.selectedDirectorSignature,
      currentStep: this.currentStep,
      currentSubjectIndex: this.currentSubjectIndex
    };
    this.http.post('http://localhost:8080/api/boletines/drafts', {
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      payload: JSON.stringify(payload)
    }).subscribe({
      next: (res: any) => {
        this.dialogService.alert('Borrador guardado correctamente.', 'Borrador');
        if (!this.showDraftsView) {
          this.showDrafts();
        } else {
          this.loadDrafts();
        }
      },
      error: (err) => {
        console.error('Error guardando borrador', err);
        this.dialogService.alert('Error al guardar el borrador.', 'Error');
      }
    });
  }

  loadDraft(draftId: number) {
    this.http.get<any>('http://localhost:8080/api/students', { params: { id: draftId } }).subscribe(); // no usado directo
  }

  getPayloadStudentIndicators(): any[] {
    const result: any[] = [];
    for (const student of this.students) {
      const indicators = this.studentIndicators[student.id] || {};
      for (const subject of this.subjects) {
        const ind = indicators[subject] || {};
        const payload: any = {
          studentId: student.id,
          subjectName: subject,
          ih: ind.ih ?? null,
          fa: ind.fa ?? null,
          faa: ind.faa ?? null
        };
        if (subject === 'Valoracion Acudiente') {
          payload.nota = this.studentValoracionAcudiente[student.id] ?? 0;
        }
        result.push(payload);
      }
    }
    return result;
  }

  async previewBoletin(studentId: number) {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) return;
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;
    const payload = this.buildBoletinPayload(student);
    try {
      const blob = await this.http.post('http://localhost:8080/api/boletines/generar', payload, { responseType: 'blob' }).toPromise();
      this.openBlobPreview(blob as Blob, `boletin_${student.surname}_${student.name}.pdf`);
    } catch (err: any) {
      this.dialogService.alert('Error generando vista previa: ' + (err.error?.error || err.message || 'Error desconocido'), 'Error');
    }
  }

  async downloadBoletin(studentId: number) {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) return;
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;
    const payload = this.buildBoletinPayload(student);
    try {
      const blob = await this.http.post('http://localhost:8080/api/boletines/generar', payload, { responseType: 'blob' }).toPromise();
      this.saveBlobDownload(blob as Blob, `boletin_${student.surname}_${student.name}.pdf`);
    } catch (err: any) {
      this.dialogService.alert('Error descargando boletín: ' + (err.error?.error || err.message || 'Error desconocido'), 'Error');
    }
  }

  private buildBoletinPayload(student: any) {
    const subjectsData = this.getPayloadStudentIndicators().filter(ind => ind.studentId === student.id);
    const directorSignature = this.selectedDirectorSignature || '';
    const csIndicators = this.studentCompSocialIndicators[student.id];
    const compSocialIndicadores = csIndicators
      ? `IH: ${csIndicators.ih ?? 0}, FA: ${csIndicators.fa ?? 0}, FAA: ${csIndicators.faa ?? 0}`
      : '';

    const valoracionAcudiente = this.studentValoracionAcudiente[student.id] ?? 0;

    return {
      studentId: student.id,
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      nLista: this.students.findIndex(s => s.id === student.id) + 1,
      schoolYear: this.selectedSchoolYear,
      studentSubjectIndicators: subjectsData,
      objetivoPeriodo: '',
      valoracionAcudiente: valoracionAcudiente,
      valoracionAcudienteNota: valoracionAcudiente,
      compSocial: this.studentCompSocialRating[student.id] ?? 0,
      compSocialIndicadores: compSocialIndicadores,
      compSocialObjetivo: this.compSocialObjetivo || '',
      directorSignature: directorSignature,
      leftSignature: null
    };
  }

  private get selectedSchoolYear(): string {
    return String(new Date().getFullYear());
  }
}