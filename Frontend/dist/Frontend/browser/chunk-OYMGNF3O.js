import {
  AuthService
} from "./chunk-UNKQMH5O.js";
import {
  FormsModule
} from "./chunk-TCE2U3R2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G4AEIR3O.js";

// src/app/directors-group/directors-group.ts
var _forTrack0 = ($index, $item) => $item.id;
function DirectorsGroup_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 26);
    \u0275\u0275domListener("click", function DirectorsGroup_For_14_Conditional_8_Template_button_click_0_listener($event) {
      const assignment_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.removeAssignment(assignment_r5.grade, assignment_r5.classroom);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(1, "span", 27);
    \u0275\u0275text(2, "groups");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const assignment_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Director ", assignment_r5.grade, " ", ctx_r2.getClassroomLetter(assignment_r5.classroom || ""), " ");
  }
}
function DirectorsGroup_For_14_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const subject_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getSubjectAcronym(subject_r6), " ");
  }
}
function DirectorsGroup_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275domListener("click", function DirectorsGroup_For_14_Template_div_click_0_listener() {
      const teacher_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTeacher(teacher_r2));
    });
    \u0275\u0275domElementStart(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 19)(5, "div", 20)(6, "strong", 21);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, DirectorsGroup_For_14_Conditional_8_Template, 4, 2, "button", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 23);
    \u0275\u0275repeaterCreate(10, DirectorsGroup_For_14_For_11_Template, 2, 1, "span", 24, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 25);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const teacher_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("teacher-selected", (ctx_r2.selectedTeacher == null ? null : ctx_r2.selectedTeacher.id) === teacher_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", teacher_r2.name.charAt(0), "", teacher_r2.surname.charAt(0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", teacher_r2.name, " ", teacher_r2.surname);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = ctx_r2.getDirectorAssignment(teacher_r2)) ? 8 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getTeacherSubjectObjects(teacher_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(teacher_r2.email);
  }
}
function DirectorsGroup_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 28);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 29);
    \u0275\u0275text(4, "No hay profesores registrados");
    \u0275\u0275domElementEnd()();
  }
}
function DirectorsGroup_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275text(1, " Profesor seleccionado: ");
    \u0275\u0275domElementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, ". Selecciona un sal\xF3n para asignar como director. ");
    \u0275\u0275domElementStart(5, "button", 30);
    \u0275\u0275domListener("click", function DirectorsGroup_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelection());
    });
    \u0275\u0275text(6, "Cancelar");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedTeacher.name, " ", ctx_r2.selectedTeacher.surname);
  }
}
function DirectorsGroup_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275text(1, " Selecciona un profesor de la lista para empezar a asignar. ");
    \u0275\u0275domElementEnd();
  }
}
function DirectorsGroup_For_28_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 35);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275domElementEnd();
  }
}
function DirectorsGroup_For_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 34);
    \u0275\u0275domListener("click", function DirectorsGroup_For_28_For_5_Template_button_click_0_listener() {
      const classroom_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const grade_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectGradeAndClassroom(grade_r10, classroom_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, DirectorsGroup_For_28_For_5_Conditional_2_Template, 2, 0, "span", 35);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const classroom_r9 = ctx.$implicit;
    const grade_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("assigned", ctx_r2.isAssigned(grade_r10, classroom_r9))("assigned-to-me", ctx_r2.isAssignedToSelectedTeacher(grade_r10, classroom_r9))("disabled", ctx_r2.isAssigned(grade_r10, classroom_r9) && !ctx_r2.isAssignedToSelectedTeacher(grade_r10, classroom_r9))("selected", ctx_r2.selectedGrade === grade_r10 && ctx_r2.selectedClassroom === classroom_r9);
    \u0275\u0275domProperty("disabled", ctx_r2.isAssigned(grade_r10, classroom_r9) && !ctx_r2.isAssignedToSelectedTeacher(grade_r10, classroom_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classroom_r9, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isAssigned(grade_r10, classroom_r9) ? 2 : -1);
  }
}
function DirectorsGroup_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14)(1, "h3", 31);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 32);
    \u0275\u0275repeaterCreate(4, DirectorsGroup_For_28_For_5_Template, 3, 11, "button", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const grade_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grade_r10);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getClassroomsForGrade(grade_r10));
  }
}
function DirectorsGroup_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 39);
    \u0275\u0275domElement(1, "path", 45);
    \u0275\u0275domElementEnd();
  }
}
function DirectorsGroup_Conditional_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 40);
    \u0275\u0275domElement(1, "path", 46);
    \u0275\u0275domElementEnd();
  }
}
function DirectorsGroup_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 36);
    \u0275\u0275domListener("click", function DirectorsGroup_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNotification = false);
    });
    \u0275\u0275domElementStart(1, "div", 37);
    \u0275\u0275domListener("click", function DirectorsGroup_Conditional_29_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 38);
    \u0275\u0275conditionalCreate(3, DirectorsGroup_Conditional_29_Conditional_3_Template, 2, 0, ":svg:svg", 39);
    \u0275\u0275conditionalCreate(4, DirectorsGroup_Conditional_29_Conditional_4_Template, 2, 0, ":svg:svg", 40);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 41)(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 43);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "button", 44);
    \u0275\u0275domListener("click", function DirectorsGroup_Conditional_29_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNotification = false);
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("notification-success", ctx_r2.notificationType === "success")("notification-error", ctx_r2.notificationType === "error");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.notificationType === "success" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.notificationType === "error" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.notificationType === "success" ? "\xA1\xC9xito!" : "\xA1Error!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.notificationMessage);
  }
}
var DirectorsGroup = class _DirectorsGroup {
  http;
  authService;
  teachers = [];
  filteredTeachers = [];
  homeroomAssignments = [];
  allSubjects = [];
  selectedTeacher = null;
  selectedGrade = null;
  selectedClassroom = null;
  activeTab = "bachillerato";
  searchTerm = "";
  bachilleratoClassrooms = ["Salon A", "Salon B"];
  primariaClassrooms = ["Salon A", "Salon B"];
  allGrades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  isLoading = false;
  showNotification = false;
  notificationType = null;
  notificationMessage = "";
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  ngOnInit() {
    this.loadTeachers();
    this.loadSubjects();
    this.loadHomeroomAssignments();
  }
  loadTeachers() {
    this.isLoading = true;
    this.http.get("http://localhost:8080/api/users/teachers").subscribe({
      next: (teachers) => {
        this.teachers = teachers.map((t) => __spreadProps(__spreadValues({}, t), { subjects: [] }));
        this.filteredTeachers = [...this.teachers];
        this.mapSubjectsToTeachers();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading teachers:", err);
        this.teachers = [];
        this.filteredTeachers = [];
        this.isLoading = false;
      }
    });
  }
  loadSubjects() {
    this.http.get("http://localhost:8080/api/subjects").subscribe({
      next: (subjects) => {
        this.allSubjects = subjects;
        this.mapSubjectsToTeachers();
      },
      error: (err) => {
        console.error("Error loading subjects:", err);
        this.allSubjects = [];
      }
    });
  }
  mapSubjectsToTeachers() {
    if (this.allSubjects.length === 0 || this.teachers.length === 0)
      return;
    const subjects = this.allSubjects;
    this.teachers.forEach((teacher) => {
      teacher.subjects = subjects.filter((s) => s.teacherId === teacher.id || s.teacher === teacher.id);
    });
    this.filteredTeachers.forEach((teacher) => {
      teacher.subjects = subjects.filter((s) => s.teacherId === teacher.id || s.teacher === teacher.id);
    });
  }
  loadHomeroomAssignments() {
    this.http.get("http://localhost:8080/api/homeroom-assignments").subscribe({
      next: (assignments) => {
        this.homeroomAssignments = assignments;
      },
      error: (err) => {
        console.error("Error loading homeroom assignments:", err);
        this.homeroomAssignments = [];
      }
    });
  }
  getFilteredTeachers() {
    const term = this.searchTerm.toLowerCase();
    const filtered = term ? this.filteredTeachers.filter((t) => t.name.toLowerCase().includes(term) || t.surname.toLowerCase().includes(term) || t.email && t.email.toLowerCase().includes(term)) : this.filteredTeachers;
    return [...filtered].sort((a, b) => {
      const aHasClassroom = this.getDirectorAssignment(a) !== void 0;
      const bHasClassroom = this.getDirectorAssignment(b) !== void 0;
      if (aHasClassroom !== bHasClassroom) {
        return aHasClassroom ? 1 : -1;
      }
      return `${a.name} ${a.surname}`.localeCompare(`${b.name} ${b.surname}`, "es");
    });
  }
  unassignSubjectFromTeacher(subject) {
    if (!this.selectedTeacher)
      return;
    this.http.delete(`http://localhost:8080/api/subjects/${subject.id}/teacher`).subscribe({
      next: () => {
        this.showSuccessNotification(`Materia ${subject.name} desasignada de ${this.selectedTeacher.name} ${this.selectedTeacher.surname}`);
        this.loadSubjects();
        this.loadTeachers();
      },
      error: (err) => {
        console.error("Error al quitar materia", err);
        this.showErrorNotification("No se pudo quitar la materia. Intenta de nuevo.");
      }
    });
  }
  getTeacherSubjectObjects(teacher) {
    return teacher.subjects || [];
  }
  getDirectorAssignment(teacher) {
    return this.homeroomAssignments.find((a) => a.userId === teacher.id);
  }
  getSubjectAcronym(subject) {
    if (subject.code && subject.code.trim().length > 0) {
      return subject.code.trim().toUpperCase();
    }
    const cleaned = (subject.name || "").normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").replace(/[^A-Za-z0-9]+/g, " ").trim().toUpperCase();
    if (!cleaned)
      return "";
    return cleaned.replace(/\s+/g, " ").substring(0, 3);
  }
  getClassroomLetter(classroom) {
    const match = classroom.match(/([A-Za-z])$/);
    return match ? match[1].toUpperCase() : "";
  }
  getClassroomsForTab() {
    if (this.activeTab === "bachillerato") {
      return this.allGrades.filter((g) => {
        const num = parseInt(g.replace(/\D/g, ""));
        return num >= 6 && num <= 11;
      });
    } else {
      return this.allGrades.filter((g) => {
        const num = parseInt(g.replace(/\D/g, ""));
        return num >= 1 && num <= 5;
      });
    }
  }
  getClassroomsForGrade(grade) {
    return this.bachilleratoClassrooms;
  }
  getAssignmentForGradeClassroom(grade, classroom) {
    return this.homeroomAssignments.find((a) => a.grade === grade && a.classroom === classroom);
  }
  isAssigned(grade, classroom) {
    return this.homeroomAssignments.some((a) => a.grade === grade && a.classroom === classroom);
  }
  isAssignedToSelectedTeacher(grade, classroom) {
    const assignment = this.getAssignmentForGradeClassroom(grade, classroom);
    return assignment !== void 0 && this.selectedTeacher !== null && assignment.userId === this.selectedTeacher.id;
  }
  selectTeacher(teacher) {
    this.selectedTeacher = teacher;
  }
  selectGrade(grade) {
    this.selectedGrade = grade;
    this.selectedClassroom = null;
  }
  selectClassroom(classroom) {
    if (!this.selectedGrade)
      return;
    this.selectedClassroom = classroom;
  }
  selectGradeAndClassroom(grade, classroom) {
    if (!this.selectedTeacher) {
      this.showErrorNotification("Selecciona un profesor primero");
      return;
    }
    const existing = this.getAssignmentForGradeClassroom(grade, classroom);
    if (existing && existing.userId !== this.selectedTeacher.id) {
      if (!confirm(`El sal\xF3n ${grade} - ${classroom} ya tiene director asignado (${existing.userName}). \xBFDesea reemplazarlo?`)) {
        return;
      }
    }
    this.selectedGrade = grade;
    this.selectedClassroom = classroom;
    this.assignDirectorImmediate(grade, classroom);
  }
  assignDirectorImmediate(grade, classroom) {
    if (!this.selectedTeacher)
      return;
    const payload = {
      userId: this.selectedTeacher.id,
      grade,
      classroom
    };
    this.http.post("http://localhost:8080/api/homeroom-assignments/assign", payload).subscribe({
      next: (response) => {
        this.showSuccessNotification(`Director asignado: ${this.selectedTeacher.name} ${this.selectedTeacher.surname} - ${grade} ${classroom}`);
        this.loadHomeroomAssignments();
      },
      error: (err) => {
        console.error("Error assigning director:", err);
        this.showErrorNotification("Error al asignar el director de grupo");
      }
    });
  }
  assignDirector() {
    if (!this.selectedTeacher || !this.selectedGrade || !this.selectedClassroom) {
      this.showErrorNotification("Seleccione un profesor, un grado y un sal\xF3n");
      return;
    }
    const grade = this.selectedGrade;
    const classroom = this.selectedClassroom;
    const existing = this.getAssignmentForGradeClassroom(grade, classroom);
    if (existing && existing.userId !== this.selectedTeacher.id) {
      if (!confirm(`El sal\xF3n ${grade} - ${classroom} ya tiene director asignado (${existing.userName}). \xBFDesea reemplazarlo?`)) {
        return;
      }
    }
    const payload = {
      userId: this.selectedTeacher.id,
      grade,
      classroom
    };
    this.http.post("http://localhost:8080/api/homeroom-assignments/assign", payload).subscribe({
      next: (response) => {
        this.showSuccessNotification(`Director asignado: ${this.selectedTeacher.name} ${this.selectedTeacher.surname} - ${grade} ${classroom}`);
        this.loadHomeroomAssignments();
        this.selectedGrade = null;
        this.selectedClassroom = null;
      },
      error: (err) => {
        console.error("Error assigning director:", err);
        this.showErrorNotification("Error al asignar el director de grupo");
      }
    });
  }
  removeAssignment(grade, classroom) {
    this.http.delete(`http://localhost:8080/api/homeroom-assignments/remove`, { body: { grade, classroom } }).subscribe({
      next: () => {
        this.showSuccessNotification("Asignaci\xF3n removida correctamente");
        this.loadHomeroomAssignments();
      },
      error: (err) => {
        console.error("Error removing assignment:", err);
        this.showErrorNotification("Error al remover la asignaci\xF3n");
      }
    });
  }
  onSearch(event) {
    const input = event.target;
    this.searchTerm = input.value;
  }
  clearSelection() {
    this.selectedTeacher = null;
  }
  showSuccessNotification(message) {
    this.notificationType = "success";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3e3);
  }
  showErrorNotification(message) {
    this.notificationType = "error";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 4e3);
  }
  static \u0275fac = function DirectorsGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectorsGroup)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectorsGroup, selectors: [["app-directors-group"]], decls: 30, vars: 7, consts: [[1, "directors-container"], [1, "directors-header"], [1, "search-bar"], [1, "material-icons", "search-icon"], ["type", "text", "id", "director-search", "name", "directorSearch", "placeholder", "Buscar profesor...", "autocomplete", "off", 3, "input"], [1, "two-columns"], [1, "column"], [1, "teachers-list"], [1, "teacher-item", 3, "teacher-selected"], [1, "empty-state"], [1, "assignment-hint"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "classrooms-page-grid"], [1, "grade-section-page"], [1, "notification-overlay"], [1, "teacher-item", 3, "click"], [1, "teacher-info"], [1, "teacher-avatar"], [1, "teacher-details"], [1, "teacher-name-row"], [1, "teacher-name"], ["type", "button", "title", "Quitar director de grupo", 1, "director-badge", "removable"], [1, "teacher-subject-chips"], [1, "subject-chip"], [1, "teacher-email"], ["type", "button", "title", "Quitar director de grupo", 1, "director-badge", "removable", 3, "click"], [1, "material-icons", "director-icon"], [1, "empty-icon"], [1, "empty-text"], ["type", "button", 1, "cancel-btn", "small", 3, "click"], [1, "grade-title"], [1, "classrooms-page"], [1, "classroom-btn", "grade-page-style", 3, "assigned", "assigned-to-me", "disabled", "selected"], [1, "classroom-btn", "grade-page-style", 3, "click", "disabled"], [1, "assigned-icon"], [1, "notification-overlay", 3, "click"], [1, "notification-content", 3, "click"], [1, "notification-icon"], ["viewBox", "0 0 52 52", 1, "checkmark"], ["viewBox", "0 0 52 52", 1, "error-mark"], [1, "notification-body"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"], ["fill", "none", "d", "m14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], ["fill", "none", "d", "M16 16l20 20M36 16L16 36", 1, "error-mark__x"]], template: function DirectorsGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Directores de Grupo");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6, "search");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "input", 4);
      \u0275\u0275domListener("input", function DirectorsGroup_Template_input_input_7_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 5)(9, "div", 6)(10, "h3");
      \u0275\u0275text(11, "Profesores");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 7);
      \u0275\u0275repeaterCreate(13, DirectorsGroup_For_14_Template, 14, 8, "div", 8, _forTrack0);
      \u0275\u0275conditionalCreate(15, DirectorsGroup_Conditional_15_Template, 5, 0, "div", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 6)(17, "h3");
      \u0275\u0275text(18, "Salones");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(19, DirectorsGroup_Conditional_19_Template, 7, 2, "div", 10)(20, DirectorsGroup_Conditional_20_Template, 2, 0, "div", 10);
      \u0275\u0275domElementStart(21, "div", 11)(22, "button", 12);
      \u0275\u0275domListener("click", function DirectorsGroup_Template_button_click_22_listener() {
        return ctx.activeTab = "bachillerato";
      });
      \u0275\u0275text(23, " Bachillerato ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "button", 12);
      \u0275\u0275domListener("click", function DirectorsGroup_Template_button_click_24_listener() {
        return ctx.activeTab = "primaria";
      });
      \u0275\u0275text(25, " Primaria ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 13);
      \u0275\u0275repeaterCreate(27, DirectorsGroup_For_28_Template, 6, 1, "div", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(29, DirectorsGroup_Conditional_29_Template, 12, 8, "div", 15);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.getFilteredTeachers());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.getFilteredTeachers().length === 0 ? 15 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.selectedTeacher ? 19 : 20);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "bachillerato");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "primaria");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.getClassroomsForTab());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showNotification ? 29 : -1);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ["\n\n.directors-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: var(--sp-6);\n  min-height: calc(100vh - 4rem);\n}\n.directors-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n}\n.directors-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  color: var(--text-1);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1rem;\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-xs);\n}\n.search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--text-3);\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 0.95rem;\n  color: var(--text-1);\n  background: transparent;\n  font-family: inherit;\n}\n.two-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-5);\n  margin-bottom: var(--sp-6);\n}\n.column[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n}\n.column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-4) 0;\n  font-size: 1.05rem;\n  color: var(--text-1);\n  font-weight: 600;\n}\n.teachers-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.teacher-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0.85rem;\n  gap: 0.65rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-xs);\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n  cursor: pointer;\n}\n.teacher-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n.teacher-item.teacher-selected[_ngcontent-%COMP%] {\n  border-color: var(--brand);\n  background: var(--brand-50);\n}\n.teacher-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.teacher-avatar[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--brand);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.teacher-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  width: 100%;\n}\n.teacher-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-bottom: 0.35rem;\n}\n.teacher-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-1);\n  font-size: 0.9rem;\n  line-height: 1.25;\n}\n.teacher-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  white-space: normal;\n  width: 100%;\n  text-align: center;\n}\n.assignment-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.9rem 1rem;\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  color: var(--accent-600);\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.assignment-hint[_ngcontent-%COMP%]   button.small[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.8rem;\n  border-radius: var(--r-sm);\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.assignment-hint[_ngcontent-%COMP%]   button.small.cancel-btn[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: #fff;\n}\n.assignment-hint[_ngcontent-%COMP%]   button.small.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: var(--sp-4);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.6rem;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  font-family: inherit;\n  font-size: 0.9rem;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.tab-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.teacher-subject-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.35rem;\n}\n.subject-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.18rem 0.45rem;\n  border-radius: var(--r-pill);\n  background: var(--success-bg);\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.director-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem 0.55rem;\n  border-radius: var(--r-pill);\n  background: #fff7ed;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.director-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.22rem 0.5rem;\n  border-radius: var(--r-pill);\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n  font-size: 0.7rem;\n  font-weight: 700;\n  line-height: 1.25;\n  white-space: normal;\n}\n.director-badge.removable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: inherit;\n}\n.director-badge.removable[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  border-color: #fca5a5;\n  color: #991b1b;\n}\n.director-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.classrooms-page-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.grade-section-page[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 0.9rem 1rem;\n  background: var(--surface-2);\n  transition: border-color 0.18s ease;\n}\n.grade-section-page[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-100);\n}\n.grade-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem 0;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.classrooms-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.classroom-btn.grade-page-style[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  background: var(--brand);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n  font-size: 0.85rem;\n  box-shadow: var(--shadow-xs);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  font-family: inherit;\n}\n.classroom-btn.grade-page-style[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: var(--brand-600);\n}\n.classroom-btn.grade-page-style.selected[_ngcontent-%COMP%] {\n  background: var(--success);\n  border-color: var(--success);\n}\n.classroom-btn.grade-page-style.assigned[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.classroom-btn.grade-page-style.assigned-to-me[_ngcontent-%COMP%] {\n  background: var(--success);\n  border-color: var(--success);\n}\n.classroom-btn.grade-page-style.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background: var(--border-strong);\n  border-color: var(--border-strong);\n  color: #fff;\n  box-shadow: none;\n}\n.classroom-btn.grade-page-style[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.assigned-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.assign-btn[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n  width: 100%;\n  padding: 0.75rem;\n  border-radius: var(--r-sm);\n  border: none;\n  background: var(--brand);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.assign-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n}\n.hint-text[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n  color: var(--text-3);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-3);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.empty-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n@keyframes _ngcontent-%COMP%_notificationFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_notificationSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_notificationFadeIn 0.3s ease-out;\n  padding: var(--sp-4);\n}\n.notification-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  padding: 1.5rem 2rem;\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  max-width: 420px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_notificationSlideIn 0.3s ease-out;\n  position: relative;\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--success);\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--danger);\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.notification-success[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.checkmark[_ngcontent-%COMP%], \n.error-mark[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.notification-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #14532d;\n}\n.notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n@media (max-width: 1180px) {\n  .teachers-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .directors-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .two-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .teachers-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .classrooms-page-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=directors-group.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectorsGroup, [{
    type: Component,
    args: [{ selector: "app-directors-group", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="directors-container">
  <div class="directors-header">
    <h2>Directores de Grupo</h2>
  </div>

  <div class="search-bar">
    <span class="material-icons search-icon">search</span>
    <input type="text" id="director-search" name="directorSearch" (input)="onSearch($event)" placeholder="Buscar profesor..." autocomplete="off" />
  </div>

  <div class="two-columns">
    <div class="column">
      <h3>Profesores</h3>
      <div class="teachers-list">
        @for (teacher of getFilteredTeachers(); track teacher.id) {
          <div class="teacher-item" [class.teacher-selected]="selectedTeacher?.id === teacher.id" (click)="selectTeacher(teacher)">
            <div class="teacher-info">
              <div class="teacher-avatar">{{ teacher.name.charAt(0) }}{{ teacher.surname.charAt(0) }}</div>
              <div class="teacher-details">
                <div class="teacher-name-row">
                  <strong class="teacher-name">{{ teacher.name }} {{ teacher.surname }}</strong>
                  @if (getDirectorAssignment(teacher); as assignment) {
                    <button type="button" class="director-badge removable" (click)="removeAssignment(assignment.grade, assignment.classroom); $event.stopPropagation()" title="Quitar director de grupo">
                      <span class="material-icons director-icon">groups</span>
                      Director {{ assignment.grade }} {{ getClassroomLetter(assignment.classroom || '') }}
                    </button>
                  }
                </div>
                <div class="teacher-subject-chips">
                  @for (subject of getTeacherSubjectObjects(teacher); track subject.id) {
                    <span class="subject-chip">
                      {{ getSubjectAcronym(subject) }}
                    </span>
                  }
                </div>
                <span class="teacher-email">{{ teacher.email }}</span>
              </div>
            </div>
          </div>
        }
        @if (getFilteredTeachers().length === 0) {
          <div class="empty-state">
            <span class="empty-icon">\u{1F4ED}</span>
            <p class="empty-text">No hay profesores registrados</p>
          </div>
        }
      </div>
    </div>

    <div class="column">
      <h3>Salones</h3>
      @if (selectedTeacher) {
        <div class="assignment-hint">
          Profesor seleccionado: <strong>{{ selectedTeacher.name }} {{ selectedTeacher.surname }}</strong>.
          Selecciona un sal\xF3n para asignar como director.
          <button type="button" class="cancel-btn small" (click)="clearSelection()">Cancelar</button>
        </div>
      } @else {
        <div class="assignment-hint">
          Selecciona un profesor de la lista para empezar a asignar.
        </div>
      }

      <div class="tabs">
        <button class="tab-btn" [class.active]="activeTab === 'bachillerato'" (click)="activeTab = 'bachillerato'">
          Bachillerato
        </button>
        <button class="tab-btn" [class.active]="activeTab === 'primaria'" (click)="activeTab = 'primaria'">
          Primaria
        </button>
      </div>

      <div class="classrooms-page-grid">
        @for (grade of getClassroomsForTab(); track grade) {
          <div class="grade-section-page">
            <h3 class="grade-title">{{ grade }}</h3>
            <div class="classrooms-page">
              @for (classroom of getClassroomsForGrade(grade); track classroom) {
                <button class="classroom-btn grade-page-style"
                  [class.assigned]="isAssigned(grade, classroom)"
                  [class.assigned-to-me]="isAssignedToSelectedTeacher(grade, classroom)"
                  [class.disabled]="isAssigned(grade, classroom) && !isAssignedToSelectedTeacher(grade, classroom)"
                  [class.selected]="selectedGrade === grade && selectedClassroom === classroom"
                  (click)="selectGradeAndClassroom(grade, classroom)"
                  [disabled]="isAssigned(grade, classroom) && !isAssignedToSelectedTeacher(grade, classroom)">
                  {{ classroom }}
                  @if (isAssigned(grade, classroom)) {
                    <span class="assigned-icon">\u{1F512}</span>
                  }
                </button>
              }
            </div>
          </div>
        }
      </div>

    </div>
  </div>

  @if (showNotification) {
    <div class="notification-overlay" (click)="showNotification = false">
      <div class="notification-content" [class.notification-success]="notificationType === 'success'" [class.notification-error]="notificationType === 'error'" (click)="$event.stopPropagation()">
        <div class="notification-icon">
          @if (notificationType === 'success') {
            <svg class="checkmark" viewBox="0 0 52 52"><path class="checkmark__check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
          }
          @if (notificationType === 'error') {
            <svg class="error-mark" viewBox="0 0 52 52"><path class="error-mark__x" fill="none" d="M16 16l20 20M36 16L16 36"/></svg>
          }
        </div>
        <div class="notification-body">
          <div class="notification-title">{{ notificationType === 'success' ? '\xA1\xC9xito!' : '\xA1Error!' }}</div>
          <div class="notification-message">{{ notificationMessage }}</div>
        </div>
        <button class="notification-close" (click)="showNotification = false">\u2715</button>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/directors-group/directors-group.css */\n.directors-container {\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: var(--sp-6);\n  min-height: calc(100vh - 4rem);\n}\n.directors-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n}\n.directors-header h2 {\n  margin: 0;\n  font-size: 1.6rem;\n  color: var(--text-1);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1rem;\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-xs);\n}\n.search-bar:focus-within {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.search-bar .search-icon {\n  color: var(--text-3);\n  font-size: 20px;\n}\n.search-bar input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 0.95rem;\n  color: var(--text-1);\n  background: transparent;\n  font-family: inherit;\n}\n.two-columns {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-5);\n  margin-bottom: var(--sp-6);\n}\n.column {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n}\n.column h3 {\n  margin: 0 0 var(--sp-4) 0;\n  font-size: 1.05rem;\n  color: var(--text-1);\n  font-weight: 600;\n}\n.teachers-list {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.teacher-item {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0.85rem;\n  gap: 0.65rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-xs);\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n  cursor: pointer;\n}\n.teacher-item:hover {\n  border-color: var(--brand);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n.teacher-item.teacher-selected {\n  border-color: var(--brand);\n  background: var(--brand-50);\n}\n.teacher-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.teacher-avatar {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--brand);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.teacher-details {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  width: 100%;\n}\n.teacher-name-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-bottom: 0.35rem;\n}\n.teacher-name {\n  font-weight: 600;\n  color: var(--text-1);\n  font-size: 0.9rem;\n  line-height: 1.25;\n}\n.teacher-email {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  white-space: normal;\n  width: 100%;\n  text-align: center;\n}\n.assignment-hint {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.9rem 1rem;\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  color: var(--accent-600);\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.assignment-hint button.small {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.8rem;\n  border-radius: var(--r-sm);\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.assignment-hint button.small.cancel-btn {\n  background: var(--danger);\n  color: #fff;\n}\n.assignment-hint button.small.cancel-btn:hover {\n  background: #b91c1c;\n}\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: var(--sp-4);\n}\n.tab-btn {\n  flex: 1;\n  padding: 0.6rem;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  font-family: inherit;\n  font-size: 0.9rem;\n}\n.tab-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.tab-btn.active {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.tab-btn:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.teacher-subject-chips {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.35rem;\n}\n.subject-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.18rem 0.45rem;\n  border-radius: var(--r-pill);\n  background: var(--success-bg);\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.director-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem 0.55rem;\n  border-radius: var(--r-pill);\n  background: #fff7ed;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.director-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.22rem 0.5rem;\n  border-radius: var(--r-pill);\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n  font-size: 0.7rem;\n  font-weight: 700;\n  line-height: 1.25;\n  white-space: normal;\n}\n.director-badge.removable {\n  cursor: pointer;\n  font-family: inherit;\n}\n.director-badge.removable:hover {\n  background: var(--danger-bg);\n  border-color: #fca5a5;\n  color: #991b1b;\n}\n.director-icon {\n  font-size: 0.85rem;\n}\n.classrooms-page-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.grade-section-page {\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 0.9rem 1rem;\n  background: var(--surface-2);\n  transition: border-color 0.18s ease;\n}\n.grade-section-page:hover {\n  border-color: var(--brand-100);\n}\n.grade-title {\n  margin: 0 0 0.6rem 0;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.classrooms-page {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.classroom-btn.grade-page-style {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  background: var(--brand);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n  font-size: 0.85rem;\n  box-shadow: var(--shadow-xs);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  font-family: inherit;\n}\n.classroom-btn.grade-page-style:hover:not(.disabled) {\n  background: var(--brand-600);\n}\n.classroom-btn.grade-page-style.selected {\n  background: var(--success);\n  border-color: var(--success);\n}\n.classroom-btn.grade-page-style.assigned {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.classroom-btn.grade-page-style.assigned-to-me {\n  background: var(--success);\n  border-color: var(--success);\n}\n.classroom-btn.grade-page-style.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background: var(--border-strong);\n  border-color: var(--border-strong);\n  color: #fff;\n  box-shadow: none;\n}\n.classroom-btn.grade-page-style:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.assigned-icon {\n  font-size: 0.75rem;\n}\n.assign-btn {\n  margin-top: var(--sp-4);\n  width: 100%;\n  padding: 0.75rem;\n  border-radius: var(--r-sm);\n  border: none;\n  background: var(--brand);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.assign-btn:hover {\n  background: var(--brand-600);\n}\n.hint-text {\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n  color: var(--text-3);\n  text-align: center;\n}\n.empty-state {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-3);\n}\n.empty-icon {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.empty-text {\n  margin: 0;\n  font-size: 0.9rem;\n}\n@keyframes notificationFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes notificationSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.notification-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: notificationFadeIn 0.3s ease-out;\n  padding: var(--sp-4);\n}\n.notification-content {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  padding: 1.5rem 2rem;\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  max-width: 420px;\n  width: 100%;\n  animation: notificationSlideIn 0.3s ease-out;\n  position: relative;\n}\n.notification-success {\n  border-left: 4px solid var(--success);\n}\n.notification-error {\n  border-left: 4px solid var(--danger);\n}\n.notification-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.notification-success .notification-icon {\n  background: var(--success);\n}\n.notification-error .notification-icon {\n  background: var(--danger);\n}\n.checkmark,\n.error-mark {\n  width: 24px;\n  height: 24px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.notification-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.notification-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success .notification-title {\n  color: #14532d;\n}\n.notification-error .notification-title {\n  color: #7f1d1d;\n}\n.notification-message {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n@media (max-width: 1180px) {\n  .teachers-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .directors-container {\n    padding: var(--sp-4);\n  }\n  .two-columns {\n    grid-template-columns: 1fr;\n  }\n  .teachers-list {\n    grid-template-columns: 1fr;\n  }\n  .classrooms-page-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=directors-group.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectorsGroup, { className: "DirectorsGroup", filePath: "app/directors-group/directors-group.ts", lineNumber: 46 });
})();
export {
  DirectorsGroup
};
//# sourceMappingURL=chunk-OYMGNF3O.js.map
