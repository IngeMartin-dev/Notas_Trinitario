import { Component, OnInit, AfterViewInit, inject, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GradesUpdateService } from '../services/grades-update.service';
import { GlobalRealtimeService } from '../services/global-realtime.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

interface Subject {
  id: number;
  name: string;
  code: string;
  level: string;
  gradeMin?: number;
  gradeMax?: number;
  teacherId?: number | null;
  teacher?: number | null;
}

interface Student {
  id: number;
  name: string;
  surname: string;
  grade: string;
  classGroup: string;
}

interface RecoveryPlan {
  id: number;
  studentId: number;
  studentName: string;
  subjectName: string;
  period: number;
  topics: string;
  planContent: string;
  createdAt: Date;
}

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grades.html',
  styleUrl: './grades.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Grades implements OnInit {
  allGrades: string[] = ['Grado 1º', 'Grado 2º', 'Grado 3º', 'Grado 4º', 'Grado 5º', 'Grado 6º', 'Grado 7º', 'Grado 8º', 'Grado 9º', 'Grado 10º', 'Grado 11º'];
  grades: string[] = [...this.allGrades];
  classrooms: string[] = ['Salon A', 'Salon B'];

  isFadingOut = false;
  isFadingIn = false;

  teacherGradeRange: { min: number; max: number } | null = null;

// Nombres de las notas (8 columnas: 7 ACT + 1 Eval.Period)
   noteNames: string[] = ['ACT1', 'ACT2', 'ACT3', 'ACT4', 'ACT5', 'ACT6', 'ACT7', 'Eval.Period', 'Auto.Eval', 'Prom.Parc'];

  selectedGrade: string | null = null;
  selectedClassroom: string | null = null;
  selectedPeriod: number = 1;
  availablePeriods: number[] = [1];

  // Current year (dynamic)
  currentYear: number = new Date().getFullYear();

  // Check if there's an active period
  hasActivePeriod: boolean = false;

  students: Student[] = [];

  // Loading state
  isLoading: boolean = false;
  showLoadingScreen: boolean = false;

  // gradesData[studentId][noteIndex] = gradeValue
gradesData: { [studentId: number]: { [noteIndex: number]: number | null } } = {};

  // Recovery data por materia y periodo: recoveryData[studentId]["subjectName|period"]
  recoveryData: { [studentId: number]: { [compositeKey: string]: { written: number | null; oral: number | null; jInteg: string | null; compSocial: string | null } } } = {};

// Track focused cell for keyboard navigation
    focusedCell: { studentId: number; noteIndex: number; isRecovery?: boolean; recoveryField?: 'written' | 'oral' | 'jInteg' | 'compSocial' } | null = null;

  hasTeacherGradeRange: boolean | null = null; // null = checking, false = no subjects, true = has subjects

  teacherSubjectName: string | null = null;
  teacherSubjects: Subject[] = [];
  selectedSubject: string | null = null;
  selectedSubjectId: number | null = null;

  // AI Study Plan modal
  showStudyPlanModal: boolean = false;
  studyPlanTopics: string = '';
  studyPlanContent: string = '';
  selectedStudentForPlan: Student | null = null;
  isGeneratingPlan: boolean = false;
  extractedImages: string[] = [];
  uploadedImages: { file: File; preview: string; base64: string }[] = [];

  // Progress bar for plan generation
  progressPercent: number = 0;
  showProgressBar: boolean = false;
  planGenerated: boolean = false;
  planSaved: boolean = false;

  // Track generated recovery plans for students
  generatedPlans: { [studentId: number]: { [period: number]: boolean } } = {};

  // ----- Cola de guardado para no perder notas al cambiar de salón/período o recargar -----
  private gradeSaveQueue = new Map<string, { studentId: number; noteIndex: number; value: number | null }>();
  private gradeSaveTimers = new Map<string, any>();
  private gradeSaveInFlight = new Set<string>();
  private gradeSaveLast = new Map<string, { studentId: number; noteIndex: number; value: number | null }>();
  private recoverySaveTimers = new Map<string, any>();
  private recoverySaveInFlight = new Set<string>();
  private recoveryLast = new Map<string, any>();
  private flushWaiters: Array<() => void> = [];

// API Key for Groq AI
    // La generación de planes de estudio se delega al backend (proxy a NVIDIA),
    // que es quien guarda la API key de forma segura.
    private readonly AI_PROXY_BASE = 'http://localhost:8080/api/ai';

  private gradesUpdateService = inject(GradesUpdateService);
  private realtimeService = inject(GlobalRealtimeService);
  private authService = inject(AuthService);

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  private sanitizer = inject(DomSanitizer);
  studyPlanContentSafe: SafeHtml | null = null;

  private getCurrentUser(): any {
    const current = this.authService.getCurrentUserValue();
    if (current) return current;
    try {
      return JSON.parse(localStorage.getItem('currentUser') || 'null');
    } catch {
      return null;
    }
  }

  private getCurrentTeacherId(): number | null {
    const user = this.getCurrentUser();
    if (user?.id && user?.role && (user.role.name || user.role) === 'TEACHER') {
      return Number(user.id);
    }
    return null;
  }

  private teacherIdQuery(): string {
    const teacherId = this.getCurrentTeacherId();
    return teacherId ? `?teacherId=${teacherId}` : '';
  }

  private teacherIdParam(): string {
    const teacherId = this.getCurrentTeacherId();
    return teacherId ? `&teacherId=${teacherId}` : '';
  }

  private periodCheckInterval: any = null;
  private periodsSubscription: Subscription | null = null;
  private previousAvailablePeriods: number[] = [1];

  ngOnInit() {
    this.loadTeacherGradeRange();
    this.loadTeacherSubjectsForGradeRange();
    this.loadUnlockedPeriods();
    this.loadExistingRecoveryPlans();
    document.addEventListener('keydown', this.handleKeydown.bind(this));

    // Subscribe to global realtime updates
    this.periodsSubscription = this.realtimeService.periods$.subscribe(periods => {
      console.log('Periodos recibidos (realtime):', periods);
      const unlockedPeriods = periods
        .filter(p => p.isUnlocked)
        .map(p => p.periodNumber);
      console.log('Periodos desbloqueados:', unlockedPeriods);
      const newPeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
      console.log('Nuevos periodos disponibles:', newPeriods);

      if (!this.arraysEqual(this.availablePeriods, newPeriods)) {
        this.availablePeriods = newPeriods;
        this.showPeriodChangeNotification();

        if (!this.availablePeriods.includes(this.selectedPeriod)) {
          this.selectedPeriod = Math.max(...this.availablePeriods);
          this.loadGrades();
        }
      }
    });

    // Poll for period changes every 10 seconds for real-time updates
    this.ngZone.runOutsideAngular(() => {
      this.periodCheckInterval = setInterval(() => {
        const previousPeriods = [...this.availablePeriods];
        this.http.get<any[]>('http://localhost:8080/api/periods').subscribe({
          next: (periods) => {
            const unlockedPeriods = periods
              .filter(p => p.isUnlocked)
              .map(p => p.periodNumber);
            const newPeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];

            if (!this.arraysEqual(previousPeriods, newPeriods)) {
              this.ngZone.run(() => {
                this.availablePeriods = newPeriods;
                this.showPeriodChangeNotification();

                if (!this.availablePeriods.includes(this.selectedPeriod)) {
                  this.selectedPeriod = Math.max(...this.availablePeriods);
                  this.loadGrades();
                }
              });
            }
          }
        });
      }, 10000);
    });
  }

  private arraysEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, idx) => val === sortedB[idx]);
  }

  private showPeriodChangeNotification() {
    this.cdr.detectChanges();

    // Remove any existing toast first
    const existingToast = document.querySelector('.period-change-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'period-change-toast';
    toast.innerHTML = '<span class="toast-icon">🔔</span> Los períodos se han actualizado';
    toast.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: linear-gradient(135deg, #4CAF50, #45a049);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideIn 0.2s ease-out;
      font-family: Arial, sans-serif;
      font-size: 14px;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOut 0.2s ease-in forwards';
      setTimeout(() => toast.remove(), 200);
    }, 500);
  }

  // Enviar las notas pendientes al recargar/cerrar (los POST normales se cancelan en unload).
  // Usamos fetch con keepalive (respeta CORS y sobrevive al cierre) y sendBeacon como respaldo.
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    // Disparar los timers pendientes (POST normal, se cancelará al cerrar)
    for (const key of Array.from(this.gradeSaveTimers.keys())) {
      this.flushGradeKey(key);
    }
    for (const sid of Array.from(this.recoverySaveTimers.keys())) {
      this.flushRecoveryKey(sid);
    }
    // Re-enviar vía keepalive todo lo que aún no está confirmado (encola + en vuelo)
    for (const item of this.gradeSaveLast.values()) {
      this.sendKeepAlive('http://localhost:8080/api/grades', this.buildGradePayload(item));
    }
    for (const payload of this.recoveryLast.values()) {
      this.sendKeepAlive('http://localhost:8080/api/grades/recovery', payload);
    }
  }

  private buildGradePayload(item: { studentId: number; noteIndex: number; value: number | null }) {
    const gradeName = this.noteNames[item.noteIndex - 1] || `Nota ${item.noteIndex}`;
    return {
      studentId: item.studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || 'MATEMATICAS',
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      gradeName: gradeName,
      isEvaluation: item.noteIndex === 8,
      teacherId: this.getCurrentTeacherId(),
      gradeValue: item.value,
      appreciative: ''
    };
  }

  private sendKeepAlive(url: string, data: any) {
    const body = JSON.stringify(data);
    try {
      if (typeof fetch === 'function') {
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body,
          keepalive: true
        }).catch(() => {});
        return;
      }
    } catch {
      // fall through to sendBeacon
    }
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }));
      }
    } catch {
      // ignore
    }
  }

  ngOnDestroy() {
    if (this.periodCheckInterval) {
      clearInterval(this.periodCheckInterval);
    }
    if (this.periodsSubscription) {
      this.periodsSubscription.unsubscribe();
    }
    // Enviar las guardadas pendientes en lugar de descartarlas al salir del componente
    for (const key of Array.from(this.gradeSaveTimers.keys())) {
      this.flushGradeKey(key);
    }
    for (const sid of Array.from(this.recoverySaveTimers.keys())) {
      this.flushRecoveryKey(sid);
    }
    this.gradeSaveTimers.clear();
    this.recoverySaveTimers.clear();
  }

  loadUnlockedPeriods() {
    this.http.get<any[]>('http://localhost:8080/api/periods').subscribe({
      next: (periods) => {
        console.log('Periodos recibidos (loadUnlockedPeriods):', periods);
        const unlockedPeriods = periods
          .filter(p => p.isUnlocked)
          .map(p => p.periodNumber);
        console.log('Periodos desbloqueados:', unlockedPeriods);
        this.availablePeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
        console.log('Periodos disponibles:', this.availablePeriods);
        this.hasActivePeriod = unlockedPeriods.length > 0;

        // Also save to localStorage for other components
        localStorage.setItem('unlockedPeriods', JSON.stringify(unlockedPeriods.filter(p => p > 1)));
        this.cdr.markForCheck();
      },
      error: () => {
        const stored = localStorage.getItem('unlockedPeriods');
        this.availablePeriods = stored ? [1, ...JSON.parse(stored).filter((p: number) => p > 1)] : [1];
      }
    });
  }

  // Load existing recovery plans for students
  loadExistingRecoveryPlans() {
    this.http.get<any[]>(`http://localhost:8080/api/grades/recovery-plans${this.teacherIdQuery()}`).subscribe({
      next: (plans) => {
        // Initialize the structure
        this.generatedPlans = {};
        if (plans) {
          for (const plan of plans) {
            const studentId = plan.studentId;
            const period = plan.period;
            if (!this.generatedPlans[studentId]) {
              this.generatedPlans[studentId] = {};
            }
            this.generatedPlans[studentId][period] = true;
          }
        }
        this.cdr.markForCheck();
      },
      error: () => {
        this.generatedPlans = {};
      }
    });
  }

  // Check if a student has a generated recovery plan
  hasRecoveryPlan(studentId: number, period: number): boolean {
    return this.generatedPlans[studentId]?.[period] === true;
  }

 async selectGrade(grade: string, classroom: string) {
     // Garantizar que todas las notas pendientes se guarden antes de cambiar de salón
     await this.flushSaves();

     this.selectedGrade = grade;
     this.selectedClassroom = classroom;

     // Reload unlocked periods in case they changed
     this.loadUnlockedPeriods();

     // Automatically set to the last available period
     this.selectedPeriod = Math.max(...this.availablePeriods);

     // Initialize empty data structures before loading
     this.gradesData = {};
     this.recoveryData = {};

     // Show loading screen first
     this.showLoadingScreen = true;
     this.isLoading = true;

     // Hide loading screen after a delay to show the animation
     setTimeout(() => {
       this.loadData();
     }, 800);
   }

  async onPeriodChange(period: number) {
    const newPeriod = parseInt(period.toString());

    // Only allow selecting available (unlocked) periods
    if (!this.availablePeriods.includes(newPeriod)) {
      alert('Este período aún no está desbloqueado. Ve a Configuración para desbloquearlo.');
      return;
    }

    // Guardar notas pendientes antes de cargar el nuevo período
    await this.flushSaves();

    // Go to the selected period and load its saved grades/recovery data
    this.selectedPeriod = newPeriod;
    this.loadGrades();
    this.loadRecoveryData();
  }

  // For two-way binding with ngModel
  onPeriodManualChange(period: number) {
    this.onPeriodChange(period);
  }

  async onSubjectChange(subject: Subject) {
    // Guardar notas pendientes antes de cambiar de asignatura
    await this.flushSaves();
    this.selectedSubjectId = subject.id ?? null;
    this.selectedSubject = subject.name;
    this.teacherSubjectName = subject.name;
    this.applyGradeFilterForSubject(subject, false);
    this.loadGrades();
    this.loadRecoveryData();
  }

  loadData() {
    if (!this.selectedGrade || !this.selectedClassroom) return;

    const url = `http://localhost:8080/api/students/grade/${encodeURIComponent(this.selectedGrade!)}/class/${encodeURIComponent(this.selectedClassroom!)}`;

    this.http.get<Student[]>(url).subscribe({
      next: (students) => {
        this.students = students.sort((a, b) => (a.surname || '').localeCompare(b.surname || ''));
        this.recoveryData = {};
        for (const student of this.students) {
          this.recoveryData[student.id] = {};
        }
        this.loadGrades();
        this.loadRecoveryData();
        this.cdr.markForCheck();
      },
      error: () => {
        this.students = [];
        this.isLoading = false;
        this.showLoadingScreen = false;
      }
    });
  }

  loadRecoveryData() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod || this.students.length === 0) return;

    const subjectName = this.selectedSubject || this.teacherSubjectName || '';
    if (!subjectName) return;

    const teacherId = this.getCurrentTeacherId();
    const keySuffix = this.selectedSubjectId != null ? this.selectedSubjectId : subjectName;
    const compositeKey = `${keySuffix}|${this.selectedPeriod}`;

    for (const student of this.students) {
      const subjectIdParam = this.selectedSubjectId != null ? `&subjectId=${this.selectedSubjectId}` : '';
      const url = `http://localhost:8080/api/grades/recovery/${student.id}?period=${this.selectedPeriod}${teacherId != null ? '&teacherId=' + teacherId : ''}&subjectName=${encodeURIComponent(subjectName)}${subjectIdParam}`;

      this.http.get<any[]>(url).subscribe({
        next: (data) => {
          if (data && data.length > 0) {
            const rd = data[0];
            this.recoveryData[student.id][compositeKey] = {
              written: rd.recoveryWritten ?? null,
              oral: rd.recoveryOral ?? null,
              jInteg: rd.jInteg ?? null,
              compSocial: rd.compSocial ?? null
            };
          }
          this.cdr.markForCheck();
        },
        error: () => {}
      });
    }
  }

  loadGrades() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) return;

    // Initialize empty grades only (recoveryData already loaded in loadData)
    this.gradesData = {};
    for (const student of this.students) {
        this.gradesData[student.id] = {
          1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null
        };
    }

    // Load grades from backend
    const subjectParam = this.selectedSubject ? `&subjectName=${encodeURIComponent(this.selectedSubject)}` : '';
    const subjectIdParam = this.selectedSubjectId != null ? `&subjectId=${this.selectedSubjectId}` : '';
    const url = `http://localhost:8080/api/grades/classroom?grade=${encodeURIComponent(this.selectedGrade!)}&classroom=${encodeURIComponent(this.selectedClassroom!)}&period=${this.selectedPeriod}${this.teacherIdParam()}${subjectParam}${subjectIdParam}`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        if (response.grades && response.grades.length > 0) {
          // First, collect all grades by student and noteIndex, keeping the most recent
          const gradesMap = new Map<string, { value: number | null, updatedAt: string }>();

          for (const grade of response.grades) {
            // Get studentId - try both direct field and nested student.id
            let studentId = grade.studentId;
            if (!studentId && grade.student?.id) {
              studentId = grade.student.id;
            }
            if (!studentId) continue;

            // Determine note index based on gradeName
            let noteIndex: number | null = null;
            const gradeName = (grade.gradeName || '').trim().toLowerCase();

// Check for specific grade names in order (most specific first)
             if (grade.isEvaluation) {
               noteIndex = 8;
             } else if (gradeName === 'auto.eval' || gradeName === 'auto.eval.' || gradeName === 'autoeval') {
               noteIndex = 9;
             } else if (
              gradeName === 'prom.parc' ||
              gradeName === 'prom.parc.' ||
              gradeName === 'promedio parcial' ||
              gradeName === 'nota 10' ||
              (gradeName.includes('prom') && gradeName.includes('parc')) ||
              (gradeName.includes('prom') && gradeName.length < 12)
            ) {
              noteIndex = 10;
            } else if (gradeName === 'act1' || gradeName === 'act01') {
              noteIndex = 1;
            } else if (gradeName === 'act2' || gradeName === 'act02') {
              noteIndex = 2;
            } else if (gradeName === 'act3' || gradeName === 'act03') {
              noteIndex = 3;
            } else if (gradeName === 'act4' || gradeName === 'act04') {
              noteIndex = 4;
            } else if (gradeName === 'act5' || gradeName === 'act05') {
              noteIndex = 5;
            } else if (gradeName === 'act6' || gradeName === 'act06') {
              noteIndex = 6;
             } else if (gradeName === 'act7' || gradeName === 'act07') {
               noteIndex = 7;
             } else if (gradeName === 'nfinal' || gradeName === 'n.final') {
               noteIndex = 11;
             }

            if (noteIndex === null) {
              continue;
            }

            // Store with key: studentId-noteIndex, keeping most recent (by updatedAt)
            const key = `${studentId}-${noteIndex}`;
            const existing = gradesMap.get(key);
            if (!existing || new Date(grade.updatedAt) > new Date(existing.updatedAt)) {
              gradesMap.set(key, { value: grade.gradeValue, updatedAt: grade.updatedAt });
            }
          }

          // Now apply the grades to gradesData
          for (const [key, data] of gradesMap) {
            const [studentIdStr, noteIndexStr] = key.split('-');
            const studentId = parseInt(studentIdStr);
            const noteIndex = parseInt(noteIndexStr);

            if (!this.gradesData[studentId]) {
          this.gradesData[studentId] = {
            1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null
          };
            }
            this.gradesData[studentId][noteIndex] = data.value;
          }
        }
        // Hide loading screen after data is loaded
        this.isLoading = false;
        setTimeout(() => {
          this.showLoadingScreen = false;
        }, 300);

        for (const student of this.students) {
          this.saveNFinal(student.id);
        }
        this.cdr.markForCheck();
      },
      error: () => {
        // Keep empty data on error
        this.isLoading = false;
        this.showLoadingScreen = false;
      }
    });
  }

  getGrade(studentId: number, noteIndex: number): number | null {
    if (!this.gradesData[studentId]) return null;
    const value = this.gradesData[studentId][noteIndex];
    return value !== undefined && value !== null ? value : null;
  }

  isTeacher(): boolean {
    const user = this.authService.getCurrentUserValue();
    return !!(user && user.role && (user.role.name || user.role) === 'TEACHER');
  }

  // Get display value for input (with comma as decimal separator)
  loadTeacherGradeRange() {
    const json = localStorage.getItem('selectedTeacherGradeRange');
    if (!json) {
      this.teacherGradeRange = null;
      this.grades = [...this.allGrades];
      return;
    }

    try {
      const parsed = JSON.parse(json);
      if (
        parsed &&
        typeof parsed.min === 'number' &&
        typeof parsed.max === 'number' &&
        parsed.min > 0 &&
        parsed.max >= parsed.min
      ) {
        this.teacherGradeRange = { min: parsed.min, max: parsed.max };
        this.grades = this.allGrades.filter((grade) => {
          const parsedGrade = this.parseGradeLabel(grade);
          return parsedGrade !== null && parsedGrade >= parsed.min && parsedGrade <= parsed.max;
        });
        if (this.selectedGrade && !this.grades.includes(this.selectedGrade)) {
          this.selectedGrade = null;
          this.selectedClassroom = null;
        }
        return;
      }
    } catch {
      // ignore invalid payload
    }

    this.teacherGradeRange = null;
    this.grades = [...this.allGrades];
  }

loadTeacherSubjectsForGradeRange() {
    const currentUser = this.authService.getCurrentUserValue();
    if (!currentUser || !currentUser.role) {
      this.hasTeacherGradeRange = false;
      return;
    }

    const roleName = currentUser.role.name || currentUser.role;
    if (roleName !== 'TEACHER' || !currentUser.id) {
      this.hasTeacherGradeRange = false;
      return;
    }

    this.http.get<Subject[]>(`http://localhost:8080/api/subjects/teacher/${currentUser.id}`).subscribe({
      next: (subjects) => {
        this.teacherSubjects = subjects;
        const chosen = subjects.find(s => s.gradeMin != null && s.gradeMax != null) || subjects[0] || null;
        this.teacherSubjectName = chosen?.name ?? null;
        this.selectedSubject = chosen?.name ?? null;
        this.selectedSubjectId = chosen?.id ?? null;
        setTimeout(() => {
          this.applyGradeFilterForSubject(chosen, false);
        }, 600);
        this.cdr.markForCheck();
      },
      error: () => {
        setTimeout(() => {
          this.teacherGradeRange = null;
          this.grades = [...this.allGrades];
          this.hasTeacherGradeRange = false;
          this.cdr.markForCheck();
        }, 600);
      }
    });
  }

  private applyGradeFilterForSubject(subject: Subject | null, animate = true) {
    const subj = subject ?? this.teacherSubjects.find(s => s.id === this.selectedSubjectId) ?? null;
    let newGrades: string[] = [];

    if (subj && subj.gradeMin != null && subj.gradeMax != null) {
      const minGrade = subj.gradeMin;
      const maxGrade = subj.gradeMax;
      newGrades = this.allGrades.filter((grade) => {
        const parsedGrade = this.parseGradeLabel(grade);
        return parsedGrade !== null && parsedGrade >= minGrade && parsedGrade <= maxGrade;
      });
      this.teacherGradeRange = { min: minGrade, max: maxGrade };
      this.hasTeacherGradeRange = true;
    } else {
      const withRange = this.teacherSubjects.filter(s => s.gradeMin != null && s.gradeMax != null);
      if (withRange.length > 0) {
        const minGrade = Math.min(...withRange.map(s => s.gradeMin!));
        const maxGrade = Math.max(...withRange.map(s => s.gradeMax!));
        this.teacherGradeRange = { min: minGrade, max: maxGrade };
        newGrades = this.allGrades.filter((grade) => {
          const parsedGrade = this.parseGradeLabel(grade);
          return parsedGrade !== null && parsedGrade >= minGrade && parsedGrade <= maxGrade;
        });
        this.hasTeacherGradeRange = true;
      } else {
        this.teacherGradeRange = null;
        newGrades = [...this.allGrades];
        this.hasTeacherGradeRange = false;
      }
    }

    if (this.selectedGrade && !newGrades.includes(this.selectedGrade)) {
      this.selectedGrade = null;
      this.selectedClassroom = null;
    }

    if (!animate) {
      this.grades = newGrades;
      this.cdr.markForCheck();
      return;
    }

    const changed = !this.stringArraysEqual(this.grades, newGrades);
    if (!changed) return;

    this.isFadingOut = true;
    this.isFadingIn = false;

    setTimeout(() => {
      this.grades = newGrades;
      this.isFadingOut = false;
      this.isFadingIn = true;
      this.cdr.markForCheck();

      setTimeout(() => {
        this.isFadingIn = false;
        this.cdr.markForCheck();
      }, 300);
    }, 300);
  }

  private stringArraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  private parseGradeLabel(grade: string): number | null {
    const match = grade.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }

  getGradeDisplay(studentId: number, noteIndex: number): string {
    const val = this.getGrade(studentId, noteIndex);
    if (val === null) return '';
    // For numeric fields, convert period to comma
    return val.toString().replace('.', ',');
  }

  // Etiqueta de la materia seleccionada, incluyendo el nivel (Primaria/Bachillerato)
  get selectedSubjectLabel(): string {
    const subj = this.teacherSubjects.find(s => s.id === this.selectedSubjectId);
    const name = this.selectedSubject || this.teacherSubjectName || 'MATEMÁTICAS';
    return subj?.level ? `${name} (${subj.level})` : name;
  }

  // 80% = promedio(ACT1-7 + Auto.Eval + Prom.Parc) * 0.8
  get80Percent(studentId: number): string {
    const grades = [
      this.getGrade(studentId, 1),
      this.getGrade(studentId, 2),
      this.getGrade(studentId, 3),
      this.getGrade(studentId, 4),
      this.getGrade(studentId, 5),
      this.getGrade(studentId, 6),
      this.getGrade(studentId, 7),
      this.getGrade(studentId, 9),  // Auto.Eval
      this.getGrade(studentId, 10)  // Prom.Parc
    ].filter(v => v !== null) as number[];

    if (grades.length === 0) return '-';

    const sum = grades.reduce((a, b) => a + b, 0);
    const avg = sum / grades.length;
    const result = avg * 0.8;
    return result.toFixed(2).replace('.', ',');
  }

  // Get the numeric value for 80%
  get80PercentValue(studentId: number): number | null {
    const str = this.get80Percent(studentId);
    if (str === '-') return null;
    return parseFloat(str.replace(',', '.'));
  }

  // 20% = Evaluación × 0.2
  get20Percent(studentId: number): string {
    const ev = this.getGrade(studentId, 8);

    if (ev === null) return '-';

    const result = ev * 0.2;
    return result.toFixed(2).replace('.', ',');
  }

  // Get numeric value for 20%
  get20PercentValue(studentId: number): number | null {
    const str = this.get20Percent(studentId);
    if (str === '-') return null;
    return parseFloat(str.replace(',', '.'));
  }

  // Auto.Eval - promedio de todas las actividades
  getAutoEval(studentId: number): string {
    const grades = [
      this.getGrade(studentId, 1),
      this.getGrade(studentId, 2),
      this.getGrade(studentId, 3),
      this.getGrade(studentId, 4),
      this.getGrade(studentId, 5),
      this.getGrade(studentId, 6),
      this.getGrade(studentId, 7)
    ].filter(v => v !== null) as number[];

    if (grades.length === 0) return '-';

    const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
    return avg.toFixed(2).replace('.', ',');
  }

  // Get numeric value
  getAutoEvalValue(studentId: number): number | null {
    const str = this.getAutoEval(studentId);
    if (str === '-') return null;
    return parseFloat(str.replace(',', '.'));
  }

  getAutoEvalColor(studentId: number): string {
    const val = this.getAutoEvalValue(studentId);
    if (val === null) return '';
    return this.getGradeColor(val);
  }

  // Prom.Parc - promedio parcial (igual que Auto.Eval)
  getPromParc(studentId: number): string {
    return this.getAutoEval(studentId);
  }

  getPromParcValue(studentId: number): number | null {
    return this.getAutoEvalValue(studentId);
  }

  getPromParcColor(studentId: number): string {
    return this.getAutoEvalColor(studentId);
  }

// Nota final = usar valor guardado en DB si existe, si no calcular 80% + 20%
    getFinal(studentId: number): string {
      const savedNFinal = this.getGrade(studentId, 11);
      if (savedNFinal !== null) {
        return savedNFinal.toFixed(1).replace('.', ',');
      }

      const p80 = this.get80PercentValue(studentId);
      const p20 = this.get20PercentValue(studentId);

      if (p80 === null && p20 === null) return '-';

      const finalGrade = (p80 ?? 0) + (p20 ?? 0);
      return finalGrade.toFixed(1).replace('.', ',');
    }

   // Get numeric final grade
   getFinalValue(studentId: number): number | null {
     const savedNFinal = this.getGrade(studentId, 11);
     if (savedNFinal !== null) return savedNFinal;

     const str = this.getFinal(studentId);
     if (str === '-') return null;
     return parseFloat(str.replace(',', '.'));
   }

   // Nota Recuperación = (Recup.Escrita + Recup.Oral) / 2
  getNotaRecup(studentId: number): string {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    const written = rd.written;
    const oral = rd.oral;

    if (written === null && oral === null) return '-';
    if (written === null || oral === null) {
      return (written ?? oral ?? '-').toString().replace('.', ',');
    }

    const result = (written + oral) / 2;
    return result.toFixed(2).replace('.', ',');
  }

  getNotaRecupValue(studentId: number): number | null {
    const str = this.getNotaRecup(studentId);
    if (str === '-') return null;
    return parseFloat(str.replace(',', '.'));
  }

// Get final grade considering recovery
   getFinalWithRecovery(studentId: number): string {
     const nFinal = this.getFinalValue(studentId);
     const notaRecup = this.getNotaRecupValue(studentId);

     if (nFinal === null) return '-';

     // If there's a recovery grade and it's higher than n.final, use recovery
     if (notaRecup !== null && notaRecup > nFinal) {
       return notaRecup.toFixed(2).replace('.', ',');
     }

     return nFinal.toFixed(2).replace('.', ',');
   }

   // Get final value with recovery
   getFinalWithRecoveryValue(studentId: number): number | null {
     const str = this.getFinalWithRecovery(studentId);
     if (str === '-') return null;
     return parseFloat(str.replace(',', '.'));
   }

  // Check if student needs recovery (final < 3.5)
  needsRecovery(studentId: number): boolean {
    const final = this.getFinalValue(studentId);
    return final !== null && final <= 3.4;
  }

  // Check if student is in yellow range (3.5 <= final < 4.0) - yellow highlight
  isLosing(studentId: number): boolean {
    const final = this.getFinalWithRecoveryValue(studentId);
    return final !== null && final >= 3.5 && final < 4.0;
  }

  // Check if student has excellent grade (final >= 4.0) - green highlight
  hasExcellentGrade(studentId: number): boolean {
    const final = this.getFinalWithRecoveryValue(studentId);
    return final !== null && final >= 4.0;
  }

   // Comp Social: S=Superior, A=Alto, B=Bajo, I=Insuficiente
    getCompSocialDisplay(studentId: number): string {
      const rd = this.getCurrentSubjectRecoveryData(studentId);
      const val = rd.compSocial;
      if (!val) return '-';
      return val.toUpperCase();
    }

    getCompSocialLabel(studentId: number): string {
      const rd = this.getCurrentSubjectRecoveryData(studentId);
      const val = rd.compSocial?.toUpperCase();
      if (!val) return '-';
      switch (val) {
        case 'S': return 'Sobresaliente';
        case 'E': return 'Excelente';
        case 'A': return 'Aceptable';
        case 'B': return 'Bajo';
        case 'I': return 'Insuficiente';
        default: return val;
      }
    }

    getCompSocialScaleLabel(studentId: number): string {
      const rd = this.getCurrentSubjectRecoveryData(studentId);
      const val = rd.compSocial?.toUpperCase();
      if (!val) return '';
      switch (val) {
        case 'S': return 'Sobresaliente (4.6 – 5.0)';
        case 'E': return 'Excelente (4.0 – 4.5)';
        case 'A': return 'Aceptable (3.5 – 3.9)';
        case 'B': return 'Bajo (1.0 – 3.4)';
        case 'I': return 'Insuficiente (1.0 – 3.4)';
        default: return '';
      }
    }

   getCompSocialColor(studentId: number): string {
     const rd = this.getCurrentSubjectRecoveryData(studentId);
     const val = rd.compSocial?.toUpperCase();
     if (!val) return '';
     switch (val) {
       case 'S':
       case 'E':
         return 'comp-social-green';
       case 'A':
         return 'comp-social-yellow';
       case 'B':
         return 'comp-social-orange';
       case 'I':
         return 'comp-social-red';
       default:
         return '';
     }
   }

  private getCurrentSubjectKey(): string {
    const subject = this.selectedSubject || this.teacherSubjectName || '';
    if (!subject && this.selectedSubjectId == null) return '';
    const key = this.selectedSubjectId != null ? this.selectedSubjectId : subject;
    return `${key}|${this.selectedPeriod}`;
  }

  private ensureRecoveryData(studentId: number, subjectKey: string) {
    if (!this.recoveryData[studentId]) {
      this.recoveryData[studentId] = {};
    }
    if (!this.recoveryData[studentId][subjectKey]) {
      this.recoveryData[studentId][subjectKey] = { written: null, oral: null, jInteg: null, compSocial: null };
    }
    return this.recoveryData[studentId][subjectKey];
  }

  getCurrentSubjectRecoveryData(studentId: number) {
    const key = this.getCurrentSubjectKey();
    if (!key) return { written: null, oral: null, jInteg: null, compSocial: null };
    if (!this.recoveryData[studentId]) return { written: null, oral: null, jInteg: null, compSocial: null };
    return this.recoveryData[studentId][key] || { written: null, oral: null, jInteg: null, compSocial: null };
  }

  // Get color class based on grade
  getGradeColor(grade: number | null): string {
    if (grade === null) return '';
    if (grade >= 4.0) return 'grade-green';
    if (grade >= 3.5) return 'grade-yellow';
    return 'grade-red';
  }

  get80Color(studentId: number): string {
    const val = this.get80PercentValue(studentId);
    if (val === null) return '';
    return this.getGradeColor(val);
  }

  get20Color(studentId: number): string {
    const val = this.get20PercentValue(studentId);
    if (val === null) return '';
    return this.getGradeColor(val);
  }

  getFinalColor(studentId: number): string {
    const val = this.getFinalWithRecoveryValue(studentId);
    if (val === null) return '';
    return this.getGradeColor(val);
  }

// Handle input change - auto save on typing
   onGradeChange(studentId: number, noteIndex: number, event: Event) {
     const input = event.target as HTMLInputElement;
     let value = input.value.trim();

     // Empty or just a sign or just decimal separator - save as null to clear the grade
     if (value === '' || value === '-' || value === ',' || value === '.') {
       if (!this.gradesData[studentId]) this.gradesData[studentId] = {};
       this.gradesData[studentId][noteIndex] = null;
       // Save as null to clear the grade in database
       this.saveGrade(studentId, noteIndex, null);
       return;
     }

     // Replace comma with period
     value = value.replace(',', '.');

     // Check if it ends with a decimal point (e.g., "3.") - allow typing but save after
     if (value.endsWith('.')) {
       // Allow typing the decimal point but don't save yet
       return;
     }

     // Parse the number
     let numValue = parseFloat(value);
     if (isNaN(numValue)) {
       // Not a valid number yet
       return;
     }

     // Clamp to 0-5 range
     numValue = Math.max(0, Math.min(5, numValue));

     // Round to 2 decimals
     numValue = Math.round(numValue * 100) / 100;

     if (!this.gradesData[studentId]) this.gradesData[studentId] = {};
     this.gradesData[studentId][noteIndex] = numValue;

     // Update display value to show clamped value
     input.value = numValue.toString();

// Auto-save to database on typing
      this.saveGrade(studentId, noteIndex, numValue);
    }

   // Handle click to save
   onGradeClick(studentId: number, noteIndex: number, event: Event) {
     const input = event.target as HTMLInputElement;
     let value = input.value.trim();

      // Handle appreciative field
      if (noteIndex === 5) {
        const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
        rd.jInteg = value;
        this.saveRecoveryData(studentId);
        return;
      }

     // Empty value
     if (value === '' || value === '-' || value === ',' || value === '.') {
       return;
     }

     // Replace comma with period
     value = value.replace(',', '.');

     // Parse the number
     let numValue = parseFloat(value);
     if (isNaN(numValue)) return;

     // Clamp to 0-5 range
     numValue = Math.max(0, Math.min(5, numValue));
     numValue = Math.round(numValue * 100) / 100;

     // Save based on noteIndex (1-10)
     if (noteIndex >= 1 && noteIndex <= 10) {
       if (!this.gradesData[studentId]) this.gradesData[studentId] = {};
       this.gradesData[studentId][noteIndex] = numValue;
       input.value = numValue.toString().replace('.', ',');
       this.saveGrade(studentId, noteIndex, numValue);
     }
   }

// Handle blur - format the display value
   onGradeBlur(studentId: number, noteIndex: number, event: Event) {
     const input = event.target as HTMLInputElement;
     const value = input.value.trim();

     if (value === '' || value === '-' || value === ',') {
       // Save as null to clear the grade
       if (!this.gradesData[studentId]) this.gradesData[studentId] = {};
       this.gradesData[studentId][noteIndex] = null;
       input.value = '';
        this.saveGrade(studentId, noteIndex, null);
        this.saveNFinal(studentId);
        this.focusedCell = null;
        return;
     }

     // Replace comma with period and parse
     let numValue = parseFloat(value.replace(',', '.'));

     if (isNaN(numValue)) {
       input.value = '';
       this.focusedCell = null;
       return;
     }

     // Clamp and round
     numValue = Math.max(0, Math.min(5, numValue));
     numValue = Math.round(numValue * 100) / 100;

     // Update with formatted value (using comma)
     input.value = numValue.toString().replace('.', ',');

     // Update data
     if (!this.gradesData[studentId]) this.gradesData[studentId] = {};
     this.gradesData[studentId][noteIndex] = numValue;

// Save
       this.saveGrade(studentId, noteIndex, numValue);
       this.saveNFinal(studentId);
       this.focusedCell = null;
     }

    // Recovery data handlers
   onRecoveryWrittenChange(studentId: number, event: Event) {
     const input = event.target as HTMLInputElement;
     let value = input.value.trim();

     if (value === '' || value === '-' || value === ',' || value === '.') {
       const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
       rd.written = null;
       this.saveRecoveryData(studentId);
       return;
     }

     value = value.replace(',', '.');
     let numValue = parseFloat(value);

     if (isNaN(numValue)) return;

     numValue = Math.max(0, Math.min(5, numValue));
     numValue = Math.round(numValue * 100) / 100;

     const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
     rd.written = numValue;
     input.value = numValue.toString().replace('.', ',');
     this.saveRecoveryData(studentId);
   }

   onRecoveryOralChange(studentId: number, event: Event) {
     const input = event.target as HTMLInputElement;
     let value = input.value.trim();

     if (value === '' || value === '-' || value === ',' || value === '.') {
       const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
       rd.oral = null;
       this.saveRecoveryData(studentId);
       return;
     }

     value = value.replace(',', '.');
     let numValue = parseFloat(value);

     if (isNaN(numValue)) return;

     numValue = Math.max(0, Math.min(5, numValue));
     numValue = Math.round(numValue * 100) / 100;

     const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
     rd.oral = numValue;
     input.value = numValue.toString().replace('.', ',');
     this.saveRecoveryData(studentId);
   }

   onJIntegChange(studentId: number, event: Event) {
     const input = event.target as HTMLInputElement;
     const value = input.value.trim();

     const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
     rd.jInteg = value;
     this.saveRecoveryData(studentId);
   }

   onCompSocialChange(studentId: number, event: Event) {
     const select = event.target as HTMLSelectElement;
     const value = select.value.trim().toUpperCase();

     const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
     rd.compSocial = value || null;
     this.saveRecoveryData(studentId);
   }

  saveGrade(studentId: number, noteIndex: number, value: number | null, appreciativeValue?: string) {
    this.queueGradeSave(studentId, noteIndex, value);
  }

  private queueGradeSave(studentId: number, noteIndex: number, value: number | null) {
    const key = `${studentId}-${noteIndex}`;
    this.gradeSaveLast.set(key, { studentId, noteIndex, value });
    this.gradeSaveQueue.set(key, { studentId, noteIndex, value });
    if (this.gradeSaveTimers.has(key)) {
      clearTimeout(this.gradeSaveTimers.get(key));
      this.gradeSaveTimers.delete(key);
    }
    this.gradeSaveTimers.set(key, setTimeout(() => this.flushGradeKey(key), 300));
  }

  private flushGradeKey(key: string) {
    if (this.gradeSaveTimers.has(key)) {
      clearTimeout(this.gradeSaveTimers.get(key));
      this.gradeSaveTimers.delete(key);
    }
    const item = this.gradeSaveQueue.get(key);
    if (!item) return;
    if (this.gradeSaveInFlight.has(key)) return;
    this.gradeSaveInFlight.add(key);
    this.gradeSaveQueue.delete(key);
    this.persistGradeSave(item.studentId, item.noteIndex, item.value);
  }

  private persistGradeSave(studentId: number, noteIndex: number, value: number | null) {
    const gradeName = this.noteNames[noteIndex - 1] || `Nota ${noteIndex}`;
    const data: any = {
      studentId: studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || 'MATEMATICAS',
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      gradeName: gradeName,
      isEvaluation: noteIndex === 8,
      teacherId: this.getCurrentTeacherId()
    };

    data.gradeValue = value;
    data.appreciative = '';

    this.http.post('http://localhost:8080/api/grades', data).subscribe({
      next: () => {
        if (!this.gradesData[studentId]) {
          this.gradesData[studentId] = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null };
        }
        this.gradesData[studentId][noteIndex] = value;
        this.gradesUpdateService.notifyGradeUpdate();
        this.cdr.markForCheck();
        this.afterGradeSave(`${studentId}-${noteIndex}`);
      },
      error: (err: any) => {
        console.error('Error saving grade:', err);
        this.afterGradeSave(`${studentId}-${noteIndex}`);
      }
    });
  }

  private afterGradeSave(key: string) {
    this.gradeSaveInFlight.delete(key);
    this.gradeSaveLast.delete(key);
    if (this.gradeSaveQueue.has(key)) {
      this.flushGradeKey(key);
    } else if (this.gradeSaveInFlight.size === 0 && this.gradeSaveQueue.size === 0 &&
               this.recoverySaveInFlight.size === 0) {
      const waiters = this.flushWaiters;
      this.flushWaiters = [];
      waiters.forEach(w => w());
    }
  }

  flushSaves(): Promise<void> {
    for (const key of Array.from(this.gradeSaveTimers.keys())) {
      this.flushGradeKey(key);
    }
    for (const sid of Array.from(this.recoverySaveTimers.keys())) {
      this.flushRecoveryKey(sid);
    }
    if (this.gradeSaveInFlight.size === 0 && this.gradeSaveQueue.size === 0 &&
        this.recoverySaveInFlight.size === 0) {
      return Promise.resolve();
    }
    return new Promise(resolve => this.flushWaiters.push(resolve));
  }

  saveNFinal(studentId: number) {
    const p80 = this.get80PercentValue(studentId);
    const p20 = this.get20PercentValue(studentId);

    let finalGrade: number | null = null;
    if (p80 !== null || p20 !== null) {
      finalGrade = (p80 ?? 0) + (p20 ?? 0);
    }

    const data: any = {
      studentId: studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || 'MATEMATICAS',
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      gradeName: 'nFinal',
      isEvaluation: false,
      teacherId: this.getCurrentTeacherId()
    };

    data.gradeValue = finalGrade;
    data.appreciative = '';

    this.http.post('http://localhost:8080/api/grades', data).subscribe({
      next: (response: any) => {
        if (!this.gradesData[studentId]) {
          this.gradesData[studentId] = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null };
        }
        this.gradesData[studentId][11] = finalGrade;
        this.cdr.markForCheck();
      },
      error: (err: any) => console.error('Error saving nFinal:', err)
    });
  }

  saveRecoveryData(studentId: number) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    if (!rd) return;

    const key = String(studentId);
    this.recoveryLast.set(key, {
      studentId: studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || 'MATEMATICAS',
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      recoveryWritten: rd.written,
      recoveryOral: rd.oral,
      jInteg: rd.jInteg,
      compSocial: rd.compSocial,
      teacherId: this.getCurrentTeacherId()
    });

    if (this.recoverySaveTimers.has(key)) {
      clearTimeout(this.recoverySaveTimers.get(key));
      this.recoverySaveTimers.delete(key);
    }
    this.recoverySaveTimers.set(key, setTimeout(() => this.flushRecoveryKey(key), 300));
  }

  private flushRecoveryKey(key: string) {
    if (this.recoverySaveTimers.has(key)) {
      clearTimeout(this.recoverySaveTimers.get(key));
      this.recoverySaveTimers.delete(key);
    }
    const payload = this.recoveryLast.get(key);
    if (!payload) return;
    if (this.recoverySaveInFlight.has(key)) return;
    this.recoverySaveInFlight.add(key);
    this.http.post('http://localhost:8080/api/grades/recovery', payload).subscribe({
      next: () => this.afterRecoverySave(key),
      error: (err: any) => {
        console.error('Error saving recovery data:', err);
        this.afterRecoverySave(key);
      }
    });
  }

  private afterRecoverySave(key: string) {
    this.recoverySaveInFlight.delete(key);
    this.recoveryLast.delete(key);
    if (this.gradeSaveInFlight.size === 0 && this.gradeSaveQueue.size === 0 &&
        this.recoverySaveInFlight.size === 0) {
      const waiters = this.flushWaiters;
      this.flushWaiters = [];
      waiters.forEach(w => w());
    }
  }

  // YouTube video cache to avoid re-checking same videos
  private youtubeVideoCache = new Map<string, boolean>();

  // AI Study Plan functions
  openStudyPlanModal(student: Student) {
    this.selectedStudentForPlan = student;
    // Always start fresh - create new plan, never load existing one here
    this.studyPlanTopics = '';
    this.studyPlanContent = '';
    this.studyPlanContentSafe = null;
    this.progressPercent = 0;
    this.showProgressBar = false;
    this.planGenerated = false;
    this.planSaved = false;
    this.youtubeVideoCache.clear();

    // Do NOT load existing plan - user always starts from scratch
    // Existing plans can be viewed in the Recoveries tab

    this.showStudyPlanModal = true;
  }

  // Filter out unavailable videos from the HTML content
  private async filterUnavailableVideos(html: string): Promise<string> {
    const videoCardRegex = /<div class="video-card">[\s\S]*?<\/div>/gi;
    const videoCards = html.match(videoCardRegex) || [];

    const videoUrlRegex = /href="([^"]+)"/;
    const titleRegex = /<a[^>]*class="video-link"[^>]*>([^<]+)<\/a>/;

    const availableVideos: { title: string; url: string; html: string }[] = [];

    for (const card of videoCards) {
      const urlMatch = card.match(videoUrlRegex);
      const titleMatch = card.match(titleRegex);

      if (urlMatch && urlMatch[1]) {
        const url = urlMatch[1];
        const title = titleMatch ? titleMatch[1] : url;

        const isAvailable = await this.checkVideoAvailability(url);
        if (isAvailable) {
          availableVideos.push({ title, url, html: card });
        }
      }
    }

    if (availableVideos.length === 0) {
      return html.replace(/<div class="video-section">[\s\S]*?<\/div>\s*<div class="activities-section">([\s\S]*?)<\/div><\/div>/gi,
        '<div class="activities-section">$1</div></div>');
    }

    let newVideoSection = '<div class="video-section">';
    availableVideos.forEach((v) => {
      newVideoSection += v.html;
    });
    newVideoSection += '</div>';

    return html.replace(/<div class="video-section">[\s\S]*?<\/div>/, newVideoSection);
  }

  onCellFocus(studentId: number, noteIndex: number) {
    this.focusedCell = { studentId, noteIndex };
  }

  updateNoteName(index: number, name: string) {
    this.noteNames[index] = name;
  }

  private combineMathParagraphs(html: string): string {
    const operators = ['×', '\\times', '\\cdot', '\\div', '\\pm', '\\mp', '=', '+', '-', '⋅', '/', '·', '*', '·'];
    const operatorPattern = operators.map(op => op.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    let prev: string;
    let current = html;
    do {
      prev = current;
      current = current.replace(new RegExp(`<div class="paragraph-block"><p>([\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?)<\\/p><\\/div>\\s*<div class="paragraph-block"><p>\\s*(${operatorPattern}|[+\\-×÷=*·])\\s*<\\/p><\\/div>\\s*<div class="paragraph-block"><p>([\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?)<\\/p><\\/div>`, 'g'), (match, content1, op, content3) => `<div class="paragraph-block"><p>${content1} ${op} ${content3}</p></div>`);
      current = current.replace(new RegExp(`(<p>[\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?<\\/p>)\\s*<p>\\s*(${operatorPattern}|[+\\-×÷=*·])\\s*<\\/p>\\s*(<p>[\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?<\\/p>)`, 'g'), (match, p1, op, p3) => { const content1 = p1.replace(/^<p>/, '').replace(/<\/p>$/, ''); const content3 = p3.replace(/^<p>/, '').replace(/<\/p>$/, ''); return `<p>${content1} ${op} ${content3}</p>`; });
      current = current.replace(/(\$[^\$]+\$)\s*(?:<br\s*\/?>\s*)+(\$[^\$]+\$)/gi, (match, f1, f2) => `${f1} \\cdot ${f2}`);
    } while (current !== prev);
    current = current.replace(/(?:<p>\s*\$[\s\S]*?\$\s*<\/p>\s*){2,}/gi, match => match.replace(/<\/p>\s*<p>/gi, ' '));
    current = current.replace(/(?:<div class="paragraph-block"><p>\s*\$[\s\S]*?\$\s*<\/p><\/div>\s*){2,}/gi, match => match.replace(/<\/p><\/div>\s*<div class="paragraph-block"><p>/gi, ' '));
    return current;
  }

  /** Fuerza que el plan de estudio sea de un único día: recorta cualquier
   *  sección "DÍA 2" (o posterior) que la IA haya generado. */
  private keepOnlyDayOne(html: string): string {
    if (!html) return html;
    // Recorta desde el encabezado "DÍA 2" (o Día 2, DIA 2) hasta el próximo <h1-4>
    const day2 = html.match(/<h[1-4][^>]*>\s*(?:d[ií]a)\s*2\b[\s\S]*?(?=<h[1-4]|$)/i);
    if (day2 && day2.index !== undefined) {
      html = html.substring(0, day2.index) + html.substring(day2.index + day2[0].length);
    }
    // Por si acaso generó un "DÍA 3" o más, recórtalos también
    html = html.replace(/<h[1-4][^>]*>\s*(?:d[ií]a)\s*[3-9]\b[\s\S]*?(?=<h[1-4]|$)/gi, '');
    return html;
  }

  private renderMathExpressions() {
    const planContent = document.getElementById('study-plan-content');
    if (!planContent) return;
    const waitForKatex = (callback: () => void, maxAttempts = 30) => {
      let attempts = 0;
      const check = () => {
        attempts++;
        const katexAny = (window as any).katex;
        if (katexAny && typeof katexAny.ParseError !== 'undefined') callback();
        else if (attempts < maxAttempts) setTimeout(check, 100);
        else console.warn('KaTeX not fully loaded after maximum attempts');
      };
      check();
    };
    waitForKatex(() => {
      try {
        if (typeof (window as any).renderMathInElement !== 'undefined') {
          (window as any).renderMathInElement(planContent, { delimiters: [{ left: '$$', right: '$$', display: false }, { left: '$', right: '$', display: false }], throwOnError: false, trust: true, strict: false });
        }
        setTimeout(() => {
          planContent.querySelectorAll('.katex-display').forEach((el: any) => {
            const html = el.innerHTML || '';
            if (html.includes('mfrac') || html.includes('\\frac')) el.classList.add('inline-only');
          });
        }, 50);
        setTimeout(() => {
          try {
            this.mergeMathParagraphs(planContent);
          } catch (e) { console.warn('Error merging math paragraphs', e); }
        }, 120);
      } catch (e) { console.warn('KaTeX rendering failed:', e); }
    });
  }

  /** Une en un solo párrafo los <p> adyacentes que contienen fórmulas KaTeX,
   *  de modo que las ecuaciones se muestren en línea y no una debajo de otra. */
  mergeMathParagraphs(container: HTMLElement) {
    const hasKatex = (el: HTMLElement) =>
      !!el.querySelector('.katex, .katex-display, .mjx-container');
    const paragraphs = Array.from(container.querySelectorAll('p')) as HTMLElement[];
    for (let i = 0; i < paragraphs.length - 1; i++) {
      const p = paragraphs[i];
      const next = paragraphs[i + 1];
      if (hasKatex(p) || hasKatex(next)) {
        const left = (p.textContent || '').trim();
        const endsWithTag = (p.innerHTML || '').trim().endsWith('>');
        const sep = endsWithTag ? '' : (left ? ' ' : '');
        p.innerHTML = (p.innerHTML || '') + sep + (next.innerHTML || '');
        next.remove();
        paragraphs.splice(i + 1, 1);
        i--;
      }
    }
  }

  // Check if a YouTube/Khan Academy video URL is available
  private async checkVideoAvailability(url: string): Promise<boolean> {
    // Return cached result if available
    if (this.youtubeVideoCache.has(url)) {
      return this.youtubeVideoCache.get(url)!;
    }

    let timeout: any;
    try {
      // Use HEAD request to check if video is accessible without downloading
      const controller = new AbortController();
      timeout = setTimeout(() => controller.abort(), 5000);

      // Try to check video availability using YouTube oEmbed API or direct HEAD request
      // First, try YouTube Data API approach (more reliable)
      const videoId = this.extractYouTubeId(url);
      if (videoId) {
        // Use YouTube oEmbed API to check video existence
        const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`, {
          method: 'HEAD',
          mode: 'no-cors',
          signal: controller.signal
        });
        clearTimeout(timeout);
        
        // If no-cors mode, we can't read response status, so assume success if no error
        // For a more robust check, we'll try a different approach
        this.youtubeVideoCache.set(url, true);
        return true;
      }

      // Fallback: try Khan Academy URL check
      if (url.includes('khanacademy.org')) {
        try {
          const khanResponse = await fetch(url, {
            method: 'HEAD',
            mode: 'no-cors',
            signal: controller.signal
          });
          clearTimeout(timeout);
          this.youtubeVideoCache.set(url, true);
          return true;
        } catch (e) {
          clearTimeout(timeout);
          this.youtubeVideoCache.set(url, false);
          return false;
        }
      }

      // Default to true for other URLs we can't easily check
      this.youtubeVideoCache.set(url, true);
      return true;
    } catch (error) {
      if (timeout) clearTimeout(timeout);
      this.youtubeVideoCache.set(url, false);
      return false;
    }
  }

  // Extract YouTube video ID from URL
  private extractYouTubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  // Filter videos to only show available ones
  private async filterAvailableVideos(videos: { title: string; url: string }[]): Promise<{ title: string; url: string }[]> {
    const availableVideos: { title: string; url: string }[] = [];
    
    for (const video of videos) {
      const isAvailable = await this.checkVideoAvailability(video.url);
      if (isAvailable) {
        availableVideos.push(video);
      }
    }
    
    return availableVideos;
  }

  loadExistingPlan(studentId: number, period: number) {
    this.http.get<any[]>(`http://localhost:8080/api/grades/study-plans/${studentId}${this.teacherIdQuery()}`).subscribe({
      next: (plans) => {
        // Find the plan for the current period
        const plan = plans.find((p: any) => p.period === period);
        if (plan) {
          this.studyPlanTopics = plan.topics || '';
          let content = plan.planContent || '';
          // If content is not HTML, convert it
          if (!content.includes('<') && content.includes('$')) {
            content = this.convertMarkdownToHtml(content);
          }
          this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(content));
          this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
          this.planGenerated = true;
          this.planSaved = true;
          this.showProgressBar = false;
          this.progressPercent = 100;

          // Render math expressions after a short delay to ensure DOM is updated
          setTimeout(() => this.renderMathExpressions(), 100);

          // Mark as generated in local tracking
          if (!this.generatedPlans[studentId]) {
            this.generatedPlans[studentId] = {};
          }
          this.generatedPlans[studentId][period] = true;
          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        console.error('Error loading existing plan:', err);
        // Show error message in modal
        this.studyPlanContent = 'Error al cargar el plan existente.';
        this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
        this.planGenerated = true;
      }
    });
  }

  closeStudyPlanModal() {
    this.showStudyPlanModal = false;
    this.selectedStudentForPlan = null;
    this.studyPlanTopics = '';
    this.studyPlanContent = '';
    this.extractedImages = [];
    this.uploadedImages = [];
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      files.forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result as string;
            this.uploadedImages.push({
              file: file,
              preview: result,
              base64: result.split(',')[1]
            });
          };
          reader.readAsDataURL(file);
        }
      });
    }
    input.value = '';
  }

  removeImage(index: number) {
    this.uploadedImages = this.uploadedImages.filter((_, i) => i !== index);
  }

  onImageError(index: number) {
    // Remove broken image from array
    this.extractedImages = this.extractedImages.filter((_, i) => i !== index);
  }

  private sanitizeAiText(text: string): string {
    let result = text
      .replace(/^```[a-zA-Z0-9]*\s*\n?/i, '')
      .replace(/\n?```\s*$/i, '')
      .replace(/^[ \t]*```[a-zA-Z0-9]*[ \t]*$/gim, '')
      .replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, '');

    result = result.replace(/\f/g, '\\');

    result = result
      .replace(/\r\n/g, '\n')
      .replace(/<[\w-]+_details>[\s\S]*?<\/[\w-]+_details>/gi, '')
      .replace(/^Current time:.*$/gim, '')
      .replace(/^Active file:.*$/gim, '')
      .replace(/^Visible files:.*$/gim, '')
      .replace(/^Open tabs:.*$/gim, '')
      .replace(/^src\/main\/java\/.*$/gim, '')
      .replace(/^Frontend\/src\/app\/.*$/gim, '')
      .replace(/Profesional - \w+/gi, '')
      .replace(/Plan de Estudio[:\s]*/gi, '')
      .replace(/Plan de Estudio Personalizado[:\s]*/gi, '')
      .replace(/^<h1[^>]*>.*?<\/h1>/gim, '')
      .replace(/<h1[^>]*>Plan de Estudio[:\s]*[^<]*<\/h1>/gi, '')
      .replace(/<h2[^>]*>Plan de Estudio[:\s]*[^<]*<\/h2>/gi, '')
      .replace(/<h3[^>]*>Plan de Estudio[:\s]*[^<]*<\/h3>/gi, '')
      .replace(/^\s{0,3}#{1,6}\s*\d+[\.\)\:\-]*\s*$/gm, '')
      .replace(/^\s*\d+[\.\)]\s*$/gm, '')
      .replace(/^\s*###\s*$/gm, '')
      .replace(/^####\s+/gm, '')
      .replace(/^###\s+/gm, '')
      .replace(/^##\s+/gm, '')
      .replace(/^#\s+/gm, '')
      .replace(/^VIDEOS[:\s]*/gim, '')
      .replace(/^ACTIVIDADES[:\s]*/gim, '')
      .replace(/^RECURSOS[:\s]*/gim, '')
      .replace(/^(?:Fecha de inicio|Fecha inicio|Inicio|Comienzo|Start)[:\s\-]*.*$/gim, '')
      .replace(/<p>\s*(?:Fecha de inicio|Fecha inicio|Inicio|Comienzo|Start)[:\s\-]*.*?<\/p>/gi, '')
      .replace(/\n{3,}/g, '\n\n');

    result = result.replace(/<environment_details[^>]*>/gi, '');

    result = result.replace(/(?<!\\)\bfrac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$1}{$2}');
    result = result.replace(/(?<!\\)\bsqrt\{([^{}]+)\}/g, '\\sqrt{$1}');
    result = result.replace(/(?<!\\)\bsum\b/g, '\\sum');
    result = result.replace(/(?<!\\)\bint\b/g, '\\int');
    result = result.replace(/(?<!\\)\blim\b/g, '\\lim');
    result = result.replace(/(?<!\\)\bprod\b/g, '\\prod');
    result = result.replace(/(?<!\\)\balpha\b/g, '\\alpha');
    result = result.replace(/(?<!\\)\bbeta\b/g, '\\beta');
    result = result.replace(/(?<!\\)\bgamma\b/g, '\\gamma');
    result = result.replace(/(?<!\\)\bdelta\b/g, '\\delta');
    result = result.replace(/(?<!\\)\brho\b/g, '\\rho');
    result = result.replace(/(?<!\\)\btheta\b/g, '\\theta');
    result = result.replace(/(?<!\\)\bpi\b/g, '\\pi');
    result = result.replace(/(?<!\\)\bneq\b/g, '\\neq');
    result = result.replace(/(?<!\\)\bleq\b/g, '\\leq');
    result = result.replace(/(?<!\\)\bgeq\b/g, '\\geq');
    result = result.replace(/(?<!\\)\bapprox\b/g, '\\approx');
    result = result.replace(/(?<!\\)\bequiv\b/g, '\\equiv');
    result = result.replace(/(?<!\\)\btimes\b/g, '\\times');
    result = result.replace(/(?<!\\)\bcdot\b/g, '\\cdot');

    result = this.stripMathLineBreaks(result);

    result = result.replace(/<details/gi, '<details open');

    return result.trim();
  }

  /** Quita los saltos de línea LaTeX (\\ y saltos de carro) que estén DENTRO
   *  de las expresiones matemáticas $...$ / $$...$$, para que varias
   *  fracciones en la misma fórmula queden en una sola línea y se rendericen
   *  en línea en lugar de una debajo de la otra. */
  private stripMathLineBreaks(text: string): string {
    return text.replace(/\$(\$)?([\s\S]*?)\1\$/g, (m, dq, inner) => {
      const cleaned = inner
        .replace(/\\\\/g, ' ')   // quita "\\" (salto de línea LaTeX)
        .replace(/\r?\n/g, ' ')  // quita saltos de carro dentro de la fórmula
        .replace(/\s{2,}/g, ' ')
        .trim();
      return (dq ? '$$' : '$') + cleaned + (dq ? '$$' : '$');
    });
  }

  private combineMathLines(md: string): string {
    // Combina líneas que contienen fórmulas matemáticas separadas por operadores
    // Incluye casos con etiquetas HTML <br> o múltiples saltos de línea
    const operators = ['×', '\\times', '\\cdot', '\\div', '\\pm', '\\mp', '=', '+', '-', '⋅', '/', '·', '*'];
    const operatorPattern = operators.map(op => op.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');

    let prev: string;
    let current = md;

    // Primera pasada: combinar fórmulas separadas solo por saltos de línea y operador
    do {
      prev = current;
      current = current.replace(
        new RegExp(`(\\$[^\\$]+\\$[^\\n]*)\\s*\\n+\\s*(${operatorPattern}|[+\\-×÷=*·])\\s*\\n+\\s*(\\$[^\\$]+\\$[^\\n]*)`, 'g'),
        (match, f1, op, f2) => `${f1} ${op} ${f2}`
      );
    } while (current !== prev);

    // Segunda pasada: combinar fórmulas separadas por etiquetas <br> y operador
    // No need for loop here since it's a single replace
    current = current.replace(
      new RegExp(`(\\$[^\\$]+\\$)\\s*<br\\s*/?>\\s*(${operatorPattern}|[+\\-×÷=*·])\\s*<br\\s*/?>\\s*(\\$[^\\$]+\\$)`, 'gi'),
      (match, f1, op, f2) => `${f1} ${op} ${f2}`
    );

    // Tercera pasada: unir expresiones matemáticas que están en líneas consecutivas
    // que terminan y empiezan con $ sin operador intermedio (ej: $a$ \n $b$)
    do {
      prev = current;
      current = current.replace(
        /(\$[^\$]+\$)\s*\n\s*(\$(?![=×⋅·*\/\+\-]).*?\$)/g,
        (match, f1, f2) => `${f1} \\cdot ${f2}`
      );
    } while (current !== prev);

    // Cuarta pasada: mantener expresiones matemáticas consecutivas en la misma línea
    // cuando el operador ya está dentro de los bloques de fórmula.
    do {
      prev = current;
      current = current.replace(/(\$[^\$]+\$)\s*\n\s*(\$[^\$]+\$)/g, '$1 $2');
    } while (current !== prev);

    // Quinta pasada: unir líneas matemáticas puras sin delimitadores $.

    const mathLineRegex = /^[\s\p{L}\p{N}=×÷⋅*\/\+\-≥≤<>^_(){}\[\]\\|·]+$/u;
    do {
      prev = current;
      current = current.replace(/(^|\n)([^\n]+)\n([^\n]+)(?=\n|$)/g, (match, prefix, line1, line2) => {
        const trimmed1 = line1.trim();
        const trimmed2 = line2.trim();
        if (trimmed1 && trimmed2 && mathLineRegex.test(trimmed1) && mathLineRegex.test(trimmed2)) {
          return `${prefix}${trimmed1} ${trimmed2}`;
        }
        return match;
      });
    } while (current !== prev);

    // Sexta pasada: colapsar saltos de línea alrededor de operadores de ecuación
    // para mantener fórmulas como "a = x + y" en la misma línea.
    current = current.replace(/\s*\n\s*(?:=|×|⋅|\*|\bx\b|\bX\b)\s*/g, ' $& ');
    current = current.replace(/\s*(?:=|×|⋅|\*|\bx\b|\bX\b)\s*\n\s*/g, ' $& ');

    return current;
  }

  // Convert markdown to HTML for proper rendering
  convertMarkdownToHtml(text: string): string {
    // First, combine math expressions that are split across lines or <br> tags
    text = this.combineMathLines(text);

    // Pre-clean environment_details before it goes through sanitizeAiText
    let html = text
      .replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, '')
      .replace(/<environment_details>[\s\S]*$/gi, '');  // Handle unclosed tag

    html = this.sanitizeAiText(html);

    // First escape HTML to prevent XSS - but preserve LaTeX backslashes
    // Replace & first, then < and >, but NOT backslashes that are part of LaTeX
    html = html.replace(/&/g, '&amp;');
    // Temporarily protect LaTeX sequences (escape backslashes before HTML escaping)
    html = html.replace(/\\/g, '##LATEX_BACKSLASH##');
    html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Restore LaTeX backslashes
    html = html.replace(/##LATEX_BACKSLASH##/g, '\\\\');

    // Remove ALL asterisks and dashes (strip markdown formatting)
    html = html.replace(/\*/g, '');
    html = html.replace(/^-\s+/gm, '');
    html = html.replace(/^•\s+/gm, '');

    // Preserve mathematical expressions with $ delimiters for later rendering
    // Don't remove dollar signs - keep them for math rendering

    // Remove horizontal rules (--- or *** or ___)
    html = html.replace(/^---+$/gm, '');
    html = html.replace(/^\*\*\*+$/gm, '');
    html = html.replace(/^___+$/gm, '');

    // Make "pregunta" bold
    html = html.replace(/pregunta/gi, '<strong>pregunta</strong>');

    // Make "respuesta" bold
    html = html.replace(/respuesta/gi, '<strong>respuesta</strong>');

    // Separate VIDEOS and ACTIVIDADES in RECURSOS section
    // Find the RECURSOS section and separate videos from activities
    html = html.replace(/(RECURSOS[:\s]*)([\s\S]*?)(?=EJERCICIOS|CONSEJOS|EVALUACIÓN|OBJETIVO|$)/gi, (match, prefix, content) => {
      let videos: { title: string; url: string }[] = [];
      let activities: string[] = [];

      // Split content by lines and categorize
      const lines = content.split('\n');

      // First pass: identify video vs activity lines
      lines.forEach((line: string) => {
        const trimmedLine = line.trim();
        // Check for "Title | URL" format first
        const pipeMatch = trimmedLine.match(/^(.+?)\s*\|\s*(https?:\/\/[^\s]+)/);

        if (pipeMatch) {
          // This is a video with title and URL
          const title = pipeMatch[1].trim();
          const url = pipeMatch[2].trim();
          // Validate that it contains youtube or khanacademy
          if (url.includes('youtube') || url.includes('khanacademy') || url.includes('youtu.be')) {
            videos.push({ title, url });
          }
        } else if (trimmedLine.includes('youtube') || trimmedLine.includes('khanacademy') || trimmedLine.includes('youtu.be')) {
          // Just URL - extract it
          const urlMatch = trimmedLine.match(/(https?:\/\/[^\s]+)/);
          if (urlMatch) {
            // Try to get a descriptive title from the URL
            let title = urlMatch[1];
            // Clean up the title
            title = title.replace('https://', '').replace('http://', '');
            title = title.replace('www.youtube.com/watch?v=', 'YouTube: ');
            title = title.replace('youtu.be/', 'YouTube: ');
            title = title.replace('www.khanacademy.org/', 'Khan Academy: ');
            // Truncate long URLs
            if (title.length > 50) {
              title = title.substring(0, 47) + '...';
            }
            videos.push({ title, url: urlMatch[1] });
          }
        } else if (trimmedLine && !trimmedLine.toLowerCase().startsWith('videos') && !trimmedLine.toLowerCase().startsWith('actividades')) {
          activities.push(trimmedLine);
        }
      });

      // Limit videos to max 3
      const limitedVideos = videos.slice(0, 3);

      let result = '<div class="resources-section"><div class="video-section">';
      if (limitedVideos.length > 0) {
        // Display each video as a professional card (without heading)
        limitedVideos.forEach((v: { title: string; url: string }) => {
          // Create a clean display title
          let displayTitle = v.title;
          // Clean up the title
          displayTitle = displayTitle.replace(/^\d+[\.\)]\s*/, ''); // Remove leading numbers
          displayTitle = displayTitle.trim();

          result += `<div class="video-card">
            <div class="video-icon">▶</div>
            <div class="video-content">
              <a href="${v.url}" class="video-link" onclick="window.open(this.href, '_blank', 'resizable=yes,scrollbars=yes'); return false;">${displayTitle}</a>
              <span class="video-source">${v.url.includes('youtube') ? 'YouTube' : 'Khan Academy'}</span>
            </div>
          </div>`;
        });
      }
      result += '</div>';

      result += '<div class="activities-section">';
      if (activities.length > 0) {
        activities.forEach((a: string) => result += `${a}<br>`);
      }
      result += '</div></div>';

      return result;
    });

    // Convert markdown links to HTML anchors: [text](url) -> <a href="url" target="_blank" rel="noopener noreferrer">text</a>
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="video-link" onclick="window.open(this.href, \"_blank\", \"resizable=yes,scrollbars=yes\"); return false;" rel="noopener noreferrer">$1</a>');

    // Ensure all HTML links open in a new tab and use safe rel attributes
    html = html.replace(/<a([^>]*?)>/gi, (match, attrs) => {
      if (/target=/i.test(attrs)) {
        return match.replace(/<a([^>]*?)>/i, (m, innerAttrs) => {
          if (/rel=/i.test(innerAttrs)) return m;
          return `<a${innerAttrs} rel="noopener noreferrer">`;
        });
      }
      const relAttr = /rel=/i.test(attrs) ? '' : ' rel="noopener noreferrer"';
      return `<a${attrs}${relAttr} target="_blank">`;
    });

    // Remove markdown image syntax: ![alt](url) -> (empty)
    html = html.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');

    // Convert headings (# Title) to bold with size and spacing - more professional styling
    html = html.replace(/^### (.*$)/gm, '<div class="ai-section-header ai-h4">$1</div>');
    html = html.replace(/^## (.*$)/gm, '<div class="ai-section-header ai-h3">$1</div>');
    html = html.replace(/^# (.*$)/gm, '<div class="ai-section-header ai-h2">$1</div>');

    // Convert numbered lists (1. text) to proper HTML
    html = html.replace(/^(\d+)\.\s+(.*)$/gm, '<li>$2</li>');

    // Convert bullet points (- text or • text) to proper HTML  
    html = html.replace(/^[•\-]\s+(.*)$/gm, '<li>$1</li>');

    // Convert checkmarks (✓ or ✅) to styled spans
    html = html.replace(/^[✓✅]\s+/gm, '<li><span class="check">✓</span> ');

    // Wrap consecutive <li> elements in <ol> or <ul>
    html = html.replace(/(<li>.*?<\/li>)\n?/g, '$1');

    // Convert tables with pipe format: | Header | -> <th>
    const tableRegex = /(\|.+\|)\n(\|[-:| ]+\|)\n((?:\|.+\|\n?)+)/g;
    html = html.replace(tableRegex, (match: string, headerRow: string, separatorRow: string, bodyRows: string) => {
      const headers = headerRow.split('|').filter((c: string) => c.trim()).map((h: string) => `<th>${h.trim()}</th>`).join('');
      const rows = bodyRows.split('\n').filter((r: string) => r.trim()).map((row: string) => {
        const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<div class="table-wrapper"><table class="ai-table"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
    });

    // Convert line breaks to paragraphs - but preserve inline math expressions
    // First, protect inline math expressions temporarily
    const mathPlaceholders: string[] = [];
    let protectedHtml = html.replace(/\$[^\$]+\$/g, (match) => {
      mathPlaceholders.push(match);
      return `__MATH_PLACEHOLDER_${mathPlaceholders.length - 1}__`;
    });

    // Now convert double line breaks to paragraph breaks
    protectedHtml = protectedHtml.replace(/\n\n+/g, '</p></div><div class="paragraph-block"><p>');
    protectedHtml = '<div class="paragraph-block"><p>' + protectedHtml + '</p></div>';

    // Restore math expressions
    protectedHtml = protectedHtml.replace(/__MATH_PLACEHOLDER_(\d+)__/g, (match, index) => {
      return mathPlaceholders[parseInt(index)];
    });

    // Wrap standalone list items in ul tags
    html = html.replace(/(<li>.*?<\/li>)+/g, '<ul class="ai-list">$1</ul>');

    // Add "open" attribute to all <details> tags to make them expanded by default
    html = html.replace(/<details/gi, '<details open');

    return html;
  }

  async generateStudyPlan() {
    if (!this.selectedStudentForPlan) return;
    if (!this.studyPlanTopics?.trim()) return;
    if (!this.selectedGrade) return;
    if (!this.selectedPeriod) return;

    this.isGeneratingPlan = true;
    this.planGenerated = false;
    this.planSaved = false;
    this.progressPercent = 0;
    this.showProgressBar = true;

    // Start progress tracking
    this.animateProgress();
    this.studyPlanContent = '';
    let fullText = '';  // Declaración de fullText

    // Initialize notification sound
    this.initNotificationSound();

    const student = this.selectedStudentForPlan;
    const studentName = `${student.surname} ${student.name}`;

    // Add image context to prompt if images are uploaded
    const imageContext = this.uploadedImages.length > 0
      ? `\nIMÁGENES ADJUNTAS: Se han proporcionado ${this.uploadedImages.length} imagen(es) que contienen información relevante (ejercicios, exámenes, tareas del estudiante). Analiza estas imágenes para entender las dificultades del estudiante y generar un plan personalizado.\n`
      : '';


     const prompt = `Eres un pedagogo experto. Genera un plan de estudio en HTML, profesional, elegante y muy bien estructurado, para un estudiante que debe reforzar los temas indicados.
Datos del estudiante:
- Nombre: ${studentName}
- Grado: ${this.selectedGrade}
- Período: ${this.selectedPeriod}
- Temas a reforzar: ${this.studyPlanTopics}

${imageContext}

REGLAS ESTRICTAS DE FORMATO:
1. Responde ÚNICAMENTE con HTML válido y bien formado. Nada de texto fuera de las etiquetas HTML. No uses bloques de código ni comillas invertidas (triple backtick).
2. No incluyas VIDEOS, enlaces a YouTube ni a ningún medio audiovisual, QUE ESTE DISPONIBLE EN EL MOMENTO, NO QUIERO QUE SEA ANTIGUA NI QUE YA NO EXISTA/NO ESTE DISPONIBLE . Bajo NINGUNA circunstancia escribas frases como "video no disponible", "ver video", "video", "YouTube" o similares.
3. No incluyas fechas ni años concretos. Usa solo referencias genéricas: Día 1, Semana 1, etc.
4. Usa fórmulas matemáticas en línea con $...$ (ej: $\\frac{a}{b} \\times \\frac{c}{d}$). NUNCA partas una operación en varias líneas.

ESTRUCTURA OBLIGATORIA (usa estas secciones en este orden, con encabezados <h2>):
1. <h2>OBJETIVO</h2> — meta de aprendizaje clara y medible en 2-3 frases.
2. <h2>DIAGNÓSTICO</h2> — breve análisis de las dificultades probables en los temas indicados.
3. <h2>CRONOGRAMA</h2> — EXACTAMENTE UN SOLO día (DÍA 1). Usa:
   <div class="dia"><h3>DÍA 1</h3><ul><li>actividad con tiempo estimado</li>...</ul></div>
   El DÍA 1 debe tener objetivo, actividades paso a paso y un producto concreto.
   IMPORTANTE: NO generes DÍA 2 ni ningún día adicional. El plan completo es de un único día.
4. <h2>RECURSOS</h2> — material de estudio en TEXTO (libros, apuntes, ejercicios impresos). Sin videos.
5. <h2>EJERCICIOS</h2> — lista numerada de ejercicios resueltos y propuestos con sus respuestas o claves.
6. <h2>CONSEJOS</h2> — 5 consejos de estudio efectivos y hábitos.
7. <h2>EVALUACIÓN</h2> — 10 preguntas de seguimiento con su breve clave/respuesta.
8. <h2>CONCLUSIÓN</h2> — cierre motivador.

Estética: usa encabezados claros, viñetas, tablas simples y un estilo limpio y serio. Termina el documento completo con la frase exacta "PLAN DE ESTUDIO COMPLETO". Si el texto se corta, continúa hasta terminar todas las secciones.`;



try {
           // Generate the study plan via the backend proxy (NVIDIA API).
           // The API key stays server-side; the backend returns the SSE stream.
           const url = `${this.AI_PROXY_BASE}/study-plan-stream`;
           const response = await fetch(url, {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
              body: JSON.stringify({
                prompt: prompt,
                temperature: 0.4,
                 max_tokens: 24000
              })
           });

if (!response.ok) {
           this.stopProgressAnimation();
           let errorMsg = '';
           if (response.status === 503) {
             errorMsg = 'El servicio de IA no está disponible temporalmente. Por favor intenta más tarde o contacta al administrador.';
           } else if (response.status === 429) {
             errorMsg = 'Has excedido el límite de solicitudes. Por favor espera un momento e intenta de nuevo.';
           } else if (response.status === 401) {
             errorMsg = 'Error de autenticación con la API. Contacta al administrador.';
           } else {
             errorMsg = `Error del servidor (${response.status}). Por favor intenta de nuevo.`;
           }
           this.studyPlanContent = errorMsg;
           this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(errorMsg);
           this.showProgressBar = false;
           this.isGeneratingPlan = false;
           this.planGenerated = true; // Show error as generated content
           return;
         }

         // Read the stream
         const reader = response.body?.getReader();
         const decoder = new TextDecoder();
         let buffer = '';

         if (!reader) {
           throw new Error('No response body');
         }

          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              if (buffer.trim()) {
                const line = buffer.trim();
                if (line.startsWith('data: ')) {
                  const jsonStr = line.slice(6).trim();
                  if (jsonStr && jsonStr !== '[DONE]') {
                    try {
                      const data = JSON.parse(jsonStr);
                      if (data.error) {
                        const err: any = new Error(typeof data.error === 'string' ? data.error : 'Error de la IA');
                        err.streamError = true;
                        throw err;
                      }
                      if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                        const newText = data.choices[0].delta.content;
                        if (newText) {
                          fullText += newText;
                          this.updateStreamingPreviewAndProgress(fullText);
                        }
                      }
                    } catch (e: any) {
                      if (e && e.streamError) throw e;
                      console.warn('Error parsing final stream chunk', e);
                    }
                  }
                }
              }
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const jsonStr = line.slice(6).trim();
                  if (!jsonStr || jsonStr === '[DONE]') continue;
                   try {
                     const data = JSON.parse(jsonStr);
                    if (data.error) {
                      const err: any = new Error(typeof data.error === 'string' ? data.error : 'Error de la IA');
                      err.streamError = true;
                      throw err;
                    }
                    if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                      const newText = data.choices[0].delta.content;
                      if (newText) {
                         fullText += newText;
                         this.updateStreamingPreviewAndProgress(fullText);
                      }
                    }
                  } catch (e: any) {
                    if (e && e.streamError) throw e;
                    console.warn('Error parsing stream chunk', e);
                  }
               }
             }
           }

            this.stopProgressAnimation();
           this.progressPercent = Math.max(this.progressPercent, 98);
           // Set progress to 98% when content is received

          let sanitizedText = this.sanitizeAiText(fullText);

          // Extract image URLs from the response before processing
          const urlRegex = /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg|webp\?[^\s]*))/gi;
          const imageUrls = sanitizedText.match(urlRegex) || [];
          this.extractedImages = imageUrls;

          // Remove URL text from the content
          sanitizedText = sanitizedText.replace(urlRegex, '').replace(/\n\n\n+/g, '\n\n');

          // Check if response already contains HTML tags - if so, use as-is with proper sanitization
          const hasHtmlTags = /<[a-z][\s\S]*>/i.test(sanitizedText);

         if (hasHtmlTags) {
           // Response is already in HTML format - clean up and add open to details
           let cleanHtml = sanitizedText
             .replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, '')
             .replace(/<environment_details>[\s\S]*$/gi, '')  // Handle unclosed tag
             .replace(/<[\w-]+_details>[\s\S]*?<\/[\w-]+_details>/gi, '')
             .replace(/Profesional - \w+/gi, '')  // Remove "Profesional - X" errors
             .replace(/<h1[^>]*>Plan de Estudio[:\s]*[^<]*<\/h1>/gi, '')
             .replace(/<h2[^>]*>Plan de Estudio[:\s]*[^<]*<\/h2>/gi, '')
             .replace(/<h3[^>]*>Plan de Estudio[:\s]*[^<]*<\/h3>/gi, '')
             .replace(/\n{3,}/g, '\n\n');

           // Remove markdown code fences that may wrap the HTML
           if (cleanHtml.startsWith('```html') && cleanHtml.endsWith('```')) {
             cleanHtml = cleanHtml.substring(7, cleanHtml.length - 3).trim();
           } else if (cleanHtml.startsWith('```') && cleanHtml.endsWith('```')) {
             cleanHtml = cleanHtml.substring(3, cleanHtml.length - 3).trim();
           }

           // Remove any residual environment_details tags that might be embedded
           cleanHtml = cleanHtml.replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, '');
           cleanHtml = cleanHtml.replace(/<environment_details>/gi, '');

           // Remove visible files and open tabs lists that may leak into content
           cleanHtml = cleanHtml.replace(/Visible files:[\s\S]*?(?=<|$)/gi, '');
           cleanHtml = cleanHtml.replace(/Open tabs:[\s\S]*$/gi, '');

           // Add "open" attribute to all <details> tags
           cleanHtml = cleanHtml.replace(/<details/gi, '<details open');

            this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(cleanHtml.trim()));
           // Filter out unavailable videos
           this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
           
           // Apply video filtering after HTML is generated
           setTimeout(async () => {
             const filteredContent = await this.filterUnavailableVideos(this.studyPlanContent);
             this.studyPlanContent = filteredContent;
             this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
           }, 100);
         } else {
           // Convert markdown to HTML - first strip code fences if present
           let markdown = sanitizedText;
           if (markdown.startsWith('```html') && markdown.endsWith('```')) {
             markdown = markdown.substring(7, markdown.length - 3).trim();
           } else if (markdown.startsWith('```') && markdown.endsWith('```')) {
             markdown = markdown.substring(3, markdown.length - 3).trim();
           }

           // Remove any environment_details leakage
           markdown = markdown.replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, '');
           markdown = markdown.replace(/<environment_details>/gi, '');
           markdown = markdown.replace(/Visible files:[\s\S]*?(?=<|$)/gi, '');
           markdown = markdown.replace(/Open tabs:[\s\S]*$/gi, '');

            this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(this.convertMarkdownToHtml(markdown)));
           this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
           
           // Apply video filtering after HTML is generated
           setTimeout(async () => {
             const filteredContent = await this.filterUnavailableVideos(this.studyPlanContent);
             this.studyPlanContent = filteredContent;
             this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
           }, 100);
         }

         // If the plan appears incomplete, request a continuation to finish it
         if (!this.isStudyPlanComplete(this.studyPlanContent || '')) {
           const continuation = await this.requestStudyPlanContinuation(fullText);
           if (continuation) {
             const continuedText = this.sanitizeAiText(continuation);
             let mergedHtml = this.studyPlanContent || '';
             if (/<[a-z][\s\S]*>/i.test(continuedText)) {
               mergedHtml += '\n' + continuedText.trim();
             } else {
               mergedHtml += '\n' + this.convertMarkdownToHtml(continuedText.trim());
             }
              this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(mergedHtml.trim()));
             this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
             setTimeout(async () => {
               const filteredContent = await this.filterUnavailableVideos(this.studyPlanContent);
               this.studyPlanContent = filteredContent;
               this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
             }, 100);
           }
         }

        // Render mathematical expressions with KaTeX
        setTimeout(() => this.renderMathExpressions(), 500);

         // Save to backend
         this.saveStudyPlanToBackend();
         this.onPlanGenerated();
      } catch (error) {
       const errorMsg = 'Error de conexión. Por favor verifica tu conexión a internet e intenta de nuevo.';
       this.studyPlanContent = errorMsg;
       this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(errorMsg);
       this.stopProgressAnimation();
       this.showProgressBar = false;
       this.progressPercent = 0;
       this.planGenerated = true; // Show error as generated content
     }
   }

   saveStudyPlanToBackend() {
    if (!this.selectedStudentForPlan || !this.studyPlanContent) {
      console.error('No student selected or no plan content');
      return;
    }

    // Parse day1 content from the generated plan (un solo día)
    let day1Content = '';

    // Try to extract day content from the HTML
    const day1Match = this.studyPlanContent.match(/<h2[^>]*>DÍA 1[^<]*<\/h2>([\s\S]*?)(?=<h2|RECURSOS|$)/i);

    if (day1Match) day1Content = day1Match[1].trim();

    // If no HTML tags, try plain text extraction
    if (!day1Content) {
      const plainDay1Match = this.studyPlanContent.match(/DÍA 1:[\s\S]*?(?=RECURSOS|$)/i);

      if (plainDay1Match) day1Content = '<p>' + plainDay1Match[0].replace(/DÍA 1:/i, '').trim() + '</p>';
    }

     const payload = {
       studentId: this.selectedStudentForPlan!.id,
       studentName: `${this.selectedStudentForPlan!.surname} ${this.selectedStudentForPlan!.name}`,
       subjectName: '',
       period: this.selectedPeriod!,
       topics: this.studyPlanTopics || '',
       planContent: this.studyPlanContent || '',
        durationDays: 1,
        day1Content: day1Content || '',
        teacherId: this.getCurrentTeacherId()
      };

      this.http.post('http://localhost:8080/api/grades/study-plan', payload).subscribe({
      next: () => {
        // Update local tracking
        if (this.selectedStudentForPlan) {
          const studentId = this.selectedStudentForPlan!.id;
          const period = this.selectedPeriod!;
          if (!this.generatedPlans[studentId]) {
            this.generatedPlans[studentId] = {};
          }
          this.generatedPlans[studentId][period] = true;
        }
        // Mark as saved
        this.planSaved = true;
      },
      error: (err: any) => {
        console.error('Error saving study plan:', err);
      }
    });
  }

  // Progress bar basada en lo ya generado por la IA
  private planGenerationStartTime: number = 0;
  private estimatedOutputLength: number = 6000;
  private progressInterval: any = null;

  private animateProgress() {
    this.progressPercent = 1;
    this.planGenerationStartTime = Date.now();

    // Clear any existing interval
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }

    // Progress is now based solely on actual content generated by AI
    // No separate animation - progress updates come from updateStreamingPreviewAndProgress
  }

  private isStudyPlanComplete(content: string): boolean {
    const normalized = content.toUpperCase();
    const requiredSections = [
      'OBJETIVO',
      'CRONOGRAMA',
      'DÍA 1',
      'RECURSOS',
      'EJERCICIOS',
      'CONSEJOS',
      'EVALUACIÓN',
      'PLAN DE ESTUDIO COMPLETO',
      'CONCLUSIÓN'
    ];
    return requiredSections.every(section => normalized.includes(section));
  }

  private async requestStudyPlanContinuation(partialPlan: string): Promise<string> {
    try {
      const url = `${this.AI_PROXY_BASE}/study-plan-continuation`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          partialPlan: partialPlan
        })
      });
      if (!response.ok) {
        return '';
      }
      const data = await response.json();
      return data?.content || '';
    } catch (e) {
      return '';
    }
  }

  private updateStreamingPreviewAndProgress(fullText: string) {
    const sanitizedPreview = this.sanitizeAiText(fullText);

    if (sanitizedPreview.trim()) {
      this.studyPlanContent = this.convertMarkdownToHtml(sanitizedPreview);
      this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
      
      // Apply video filtering to preview as well
      setTimeout(async () => {
        const filteredContent = await this.filterUnavailableVideos(this.studyPlanContent);
        this.studyPlanContent = filteredContent;
        this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
      }, 100);
    }

    // Calculate progress based on actual content length generated by AI
    const currentLength = sanitizedPreview.length;
    const effectiveEstimatedLength = Math.max(this.estimatedOutputLength, 1500);
    const contentPercent = Math.round((currentLength / effectiveEstimatedLength) * 100);

    // Progress is based solely on actual content generated by AI
    // Allow progress to reach 100% when content is sufficient
    this.progressPercent = Math.min(contentPercent, 100);
    // Ensure progress is always an integer (no decimals) and at least 1
    this.progressPercent = Math.max(1, Math.floor(this.progressPercent));
    this.cdr.markForCheck();
  }

  // Mantener método por compatibilidad con llamadas existentes
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private stopProgressAnimation() {
    // Clear the progress interval
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  // Initialize notification sound
  initNotificationSound() {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.playNotificationSound(audioContext);
    } catch (e) {
      // Audio not supported - silent fail
    }
  }

  // Play notification sound
  playNotificationSound(audioContext: AudioContext) {
    // Play a pleasant two-tone notification
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // First tone (higher)
    oscillator1.type = 'sine';
    oscillator1.frequency.setValueAtTime(880, audioContext.currentTime); // A5
    oscillator1.frequency.setValueAtTime(880, audioContext.currentTime + 0.1);

    // Second tone (lower, comes after)
    oscillator2.type = 'sine';
    oscillator2.frequency.setValueAtTime(0, audioContext.currentTime);
    oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15); // E5

    // Volume envelope
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.4);

    oscillator1.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.15);
    oscillator2.start(audioContext.currentTime + 0.15);
    oscillator2.stop(audioContext.currentTime + 0.4);
  }

  // Mark plan as generated (called when plan is ready)
  onPlanGenerated() {
    this.stopProgressAnimation();
    this.isGeneratingPlan = false;

    const plainGeneratedLength = this.sanitizeAiText(this.studyPlanContent || '')
      .replace(/<[^>]+>/g, '')
      .trim()
      .length;

    if (plainGeneratedLength > 0) {
      this.estimatedOutputLength = Math.round(
        (this.estimatedOutputLength * 0.6) + (plainGeneratedLength * 0.4)
      );
    }

    // Set progress to 100% when generation is complete
    this.progressPercent = 100;
    this.planGenerated = true;
    this.cdr.markForCheck();

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.playNotificationSound(audioContext);
    } catch (e) {
      // Silent fail
    }
  }

  // Save plan to database
  savePlan() {
    if (!this.selectedStudentForPlan || this.planSaved) return;

    this.saveStudyPlanToBackend();
    this.planSaved = true;
    // Button will show "Guardado" with animation via CSS
  }

  printStudyPlan() {
    const printContent = document.getElementById('study-plan-content');
    if (!printContent) {
      alert('Primero debe generar un plan de estudio');
      return;
    }

    const printContentHTML = printContent.innerHTML || '';
    if (!printContentHTML.trim()) {
      alert('El contenido del plan está vacío');
      return;
    }

    // Asegurar que las fórmulas matemáticas estén renderizadas antes de
    // imprimir, para que el clon capture los spans de KaTeX ya visibles.
    const renderMathInElement = (window as any).renderMathInElement;
    if (typeof renderMathInElement === 'function') {
      try {
        renderMathInElement(printContent, {
          delimiters: [
            { left: '$$', right: '$$', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false,
          trust: true,
          strict: false
        });
      } catch (e) { /* noop */ }
    }

    const printNode = printContent.cloneNode(true) as HTMLElement;

    const printHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Plan de Estudio</title>
        <link href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" rel="stylesheet">
        <style>
          @page { size: A4; margin: 15mm; }
          html, body { height: 100%; margin: 0; padding: 0; }
          body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.45; color: #222; }
          .print-header { text-align: left; margin-bottom: 8px; }
          .print-header h1 { margin: 0; font-size: 20px; color: #1b6aeb; }
          .print-body { width: 100%; }
          h2 { color: #2c3e50; border-bottom: 1px solid #e6eefc; padding-bottom: 6px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 8px; border: 1px solid #ddd; }
          .katex-display { display: inline-block !important; margin: 0 4px; }
          .katex { display: inline-block !important; vertical-align: middle; }
          img { max-width: 100%; height: auto; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        </style>
      </head>
      <body>
        <div class="print-header">
          <h1>Plan de Estudio</h1>
        </div>
        <div class="print-body"></div>
        <script>
          (function(){
            var host = window.parent && window.parent.__printStudyPlanNode;
            var body = document.querySelector('.print-body');
            if (host && body) { body.appendChild(host); }
            setTimeout(function(){ window.print(); }, 1200);
          })();
        </script>
      </body>
      </html>
    `;

    (window as any).__printStudyPlanNode = printNode;

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '-10000px';
    iframe.style.left = '-10000px';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';

    document.body.appendChild(iframe);

    setTimeout(() => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(printHTML);
          doc.close();
        } else {
          alert('Error al crear el documento de impresión');
        }
      } catch (e) {
        console.error('Print error:', e);
        alert('Error al imprimir. Intente nuevamente.');
      } finally {
        setTimeout(() => {
          (window as any).__printStudyPlanNode = null;
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 2000);
      }
    }, 100);
  }

  handleKeydown(event: KeyboardEvent) {
    if (!event) return;
    if (!this.focusedCell || !this.students.length) return;

    const { studentId, noteIndex } = this.focusedCell;
    const studentIndex = this.students.findIndex(s => s.id === studentId);

    let nextStudentId: number | null = null;
    let nextNoteIndex = noteIndex;
    let isRecoveryCell = false;
    let recoveryField: 'recup-escrita' | 'recup-oral' | 'recovery-jinteg' | 'recovery-compsocial' | null = null;

     const targetEl = event.target as HTMLElement | null;
     if (targetEl) {
      const id = targetEl.id;
      if (id === `recup-escrita-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = 'recup-escrita';
      } else if (id === `recup-oral-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = 'recup-oral';
      } else if (id === `recovery-jinteg-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = 'recovery-jinteg';
      } else if (id === `recovery-compsocial-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = 'recovery-compsocial';
      }
    }

    switch (event.key) {
      case 'ArrowRight': {
        event.preventDefault();

        if (isRecoveryCell) {
          if (recoveryField === 'recovery-jinteg') {
            const el = document.querySelector(`#recovery-compsocial-${studentId}`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === 'recovery-compsocial') {
            const el = document.querySelector(`#recup-escrita-${studentId}`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === 'recup-escrita') {
            const el = document.querySelector(`#recup-oral-${studentId}`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === 'recup-oral') {
            if (studentIndex < this.students.length - 1) {
              const next = this.students[studentIndex + 1];
              const el = document.querySelector(`#grade-input-${next.id}-1`) as HTMLInputElement | null;
              if (el) {
                setTimeout(() => {
                  el.focus();
                  el.select();
                  el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                  this.focusedCell = { studentId: next.id, noteIndex: 1 };
                }, 10);
              }
            }
            return;
          }
        }

        if (noteIndex === 1) nextNoteIndex = 2;
        else if (noteIndex === 2) nextNoteIndex = 3;
        else if (noteIndex === 3) nextNoteIndex = 4;
        else if (noteIndex === 4) nextNoteIndex = 5;
        else if (noteIndex === 5) nextNoteIndex = 6;
        else if (noteIndex === 6) nextNoteIndex = 7;
        else if (noteIndex === 7) {
          const el = document.querySelector(`#grade-input-${studentId}-9`) as HTMLInputElement | null;
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 9 };
            }, 10);
          }
          return;
        }
        else if (noteIndex === 9) {
          const el = document.querySelector(`#grade-input-${studentId}-10`) as HTMLInputElement | null;
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 10 };
            }, 10);
          }
          return;
        }
        else if (noteIndex === 10) {
          const el = document.querySelector(`#grade-input-${studentId}-8`) as HTMLInputElement | null;
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }, 10);
          }
          return;
        }
        else if (noteIndex === 8) {
          const el = document.querySelector(`#recovery-jinteg-${studentId}`) as HTMLInputElement | null;
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }, 10);
          }
          return;
        }
        break;
      }

      case 'ArrowLeft': {
        event.preventDefault();

        if (isRecoveryCell) {
          if (recoveryField === 'recup-oral') {
            const el = document.querySelector(`#recup-escrita-${studentId}`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === 'recup-escrita') {
            const el = document.querySelector(`#recovery-compsocial-${studentId}`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === 'recovery-compsocial') {
            const el = document.querySelector(`#recovery-jinteg-${studentId}`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === 'recovery-jinteg') {
            const el = document.querySelector(`#grade-input-${studentId}-8`) as HTMLInputElement | null;
            if (el) {
              el.focus();
              el.select();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
        }

        if (noteIndex === 2) nextNoteIndex = 1;
        else if (noteIndex === 3) nextNoteIndex = 2;
        else if (noteIndex === 4) nextNoteIndex = 3;
        else if (noteIndex === 5) nextNoteIndex = 4;
        else if (noteIndex === 6) nextNoteIndex = 5;
        else if (noteIndex === 7) nextNoteIndex = 6;
        else if (noteIndex === 9) nextNoteIndex = 7;
        else if (noteIndex === 10) nextNoteIndex = 9;
        else if (noteIndex === 8) {
          const el = document.querySelector(`#grade-input-${studentId}-10`) as HTMLInputElement | null;
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
              this.focusedCell = { studentId, noteIndex: 10 };
            }, 10);
          }
          return;
        }
        else if (noteIndex === 1) {
          if (studentIndex > 0) {
            const prev = this.students[studentIndex - 1];
            const el = document.querySelector(`#recup-oral-${prev.id}`) as HTMLInputElement | null;
            if (el) {
              setTimeout(() => {
                el.focus();
                el.select();
                el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                this.focusedCell = { studentId: prev.id, noteIndex: 8 };
              }, 10);
            }
          }
          return;
        }
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        if (studentIndex < this.students.length - 1) {
          const next = this.students[studentIndex + 1];
          nextStudentId = next.id;
          if (isRecoveryCell) {
            const map: Record<string, string> = {
              'recup-escrita': `recup-escrita-${next.id}`,
              'recup-oral': `recup-oral-${next.id}`,
              'recovery-jinteg': `recovery-jinteg-${next.id}`,
              'recovery-compsocial': `recovery-compsocial-${next.id}`
            };
            const sel = document.querySelector(`#${map[recoveryField || '']}`) as HTMLInputElement | null;
            if (sel) {
              setTimeout(() => {
                sel.focus();
                sel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                this.focusedCell = { studentId: next.id, noteIndex: 8 };
              }, 10);
              return;
            }
            return;
          }
        }
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        if (studentIndex > 0) {
          const prev = this.students[studentIndex - 1];
          nextStudentId = prev.id;
          if (isRecoveryCell) {
            const map: Record<string, string> = {
              'recup-escrita': `recup-escrita-${prev.id}`,
              'recup-oral': `recup-oral-${prev.id}`,
              'recovery-jinteg': `recovery-jinteg-${prev.id}`,
              'recovery-compsocial': `recovery-compsocial-${prev.id}`
            };
            const sel = document.querySelector(`#${map[recoveryField || '']}`) as HTMLInputElement | null;
            if (sel) {
              setTimeout(() => {
                sel.focus();
                sel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                this.focusedCell = { studentId: prev.id, noteIndex: 8 };
              }, 10);
              return;
            }
            return;
          }
        }
        break;
      }

      default:
        return;
    }

    if (nextStudentId || nextNoteIndex !== noteIndex) {
      const targetId = nextStudentId || studentId;
      setTimeout(() => {
        const input = document.querySelector(`#grade-input-${targetId}-${nextNoteIndex}`) as HTMLInputElement | null;
        if (input) {
          input.focus();
          input.select();
          input.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          this.focusedCell = { studentId: targetId, noteIndex: nextNoteIndex };
        }
      }, 10);
    }
  }
}
