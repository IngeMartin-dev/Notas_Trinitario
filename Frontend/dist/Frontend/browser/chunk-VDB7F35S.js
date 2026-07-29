import {
  GlobalRealtimeService
} from "./chunk-ZYSOL3KW.js";
import {
  GradesUpdateService
} from "./chunk-YHVHY3AS.js";
import {
  AuthService
} from "./chunk-UNKQMH5O.js";
import {
  DomSanitizer
} from "./chunk-VCEXV2JC.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TCE2U3R2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  NgZone,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G4AEIR3O.js";

// src/app/recoveries/recoveries.ts
var _forTrack0 = ($index, $item) => $item.id;
function Recoveries_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No tienes materias asignadas. Por favor espere o llame al administrador.");
    \u0275\u0275elementEnd()();
  }
}
function Recoveries_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "Verificando materias asignadas...");
    \u0275\u0275elementEnd()();
  }
}
function Recoveries_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Grados ", ctx_r0.teacherGradeRange.min, "\xB0 - ", ctx_r0.teacherGradeRange.max, "\xB0 ");
  }
}
function Recoveries_Conditional_6_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function Recoveries_Conditional_6_Conditional_2_For_2_Template_button_click_0_listener() {
      const subject_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSubjectChange(subject_r3.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.selectedSubject === subject_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r3.name, " ");
  }
}
function Recoveries_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, Recoveries_Conditional_6_Conditional_2_For_2_Template, 2, 3, "button", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.teacherSubjects);
  }
}
function Recoveries_Conditional_6_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function Recoveries_Conditional_6_For_5_For_5_Template_button_click_0_listener() {
      const classroom_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const grade_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectGrade(grade_r6, classroom_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classroom_r5 = ctx.$implicit;
    const grade_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.selectedGrade === grade_r6 && ctx_r0.selectedClassroom === classroom_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classroom_r5, " ");
  }
}
function Recoveries_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, Recoveries_Conditional_6_For_5_For_5_Template, 2, 3, "button", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grade_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grade_r6);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.classrooms);
  }
}
function Recoveries_Conditional_6_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r8 = ctx.$implicit;
    \u0275\u0275property("value", period_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Per\xEDodo ", period_r8);
  }
}
function Recoveries_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 22);
    \u0275\u0275text(2, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 23);
    \u0275\u0275listener("ngModelChange", function Recoveries_Conditional_6_Conditional_7_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPeriodManualChange($event));
    });
    \u0275\u0275repeaterCreate(4, Recoveries_Conditional_6_Conditional_7_For_5_Template, 2, 2, "option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.selectedPeriod);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.availablePeriods);
  }
}
function Recoveries_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()();
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 39);
    \u0275\u0275text(2, "Nota:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getGradeColor(item_r9.finalGrade));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.finalGrade.toFixed(1).replace(".", ","), " ");
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3, "D\xEDa 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5, "D\xEDa 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r9.recoveryPlan.topics);
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p");
    \u0275\u0275text(2, "Sin plan de recuperaci\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.viewPlan(item_r9.recoveryPlan));
    });
    \u0275\u0275text(1, " Ver Plan ");
    \u0275\u0275elementEnd();
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 33);
    \u0275\u0275conditionalCreate(12, Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_12_Template, 5, 3, "div", 34);
    \u0275\u0275conditionalCreate(13, Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_13_Template, 8, 1, "div", 35)(14, Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_14_Template, 3, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 37);
    \u0275\u0275conditionalCreate(16, Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Conditional_16_Template, 2, 0, "button", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("has-plan", item_r9.recoveryPlan);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(item_r9.student.surname + " " + item_r9.student.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r9.student.surname, " ", item_r9.student.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r9.student.grade, " - ", item_r9.student.classGroup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" P", item_r9.period, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r9.finalGrade > 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.recoveryPlan ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r9.recoveryPlan ? 16 : -1);
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, Recoveries_Conditional_6_Conditional_9_Conditional_1_For_2_Template, 17, 11, "div", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getDisplayItems());
  }
}
function Recoveries_Conditional_6_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 46)(2, "h3");
    \u0275\u0275text(3, "No hay estudiantes reprobados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" El grado ", ctx_r0.selectedGrade, " - ", ctx_r0.selectedClassroom, " no tiene estudiantes con baja nota en este per\xEDodo. ");
  }
}
function Recoveries_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, Recoveries_Conditional_6_Conditional_9_Conditional_1_Template, 3, 0, "div", 25)(2, Recoveries_Conditional_6_Conditional_9_Conditional_2_Template, 6, 2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getDisplayItems().length > 0 ? 1 : 2);
  }
}
function Recoveries_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, Recoveries_Conditional_6_Conditional_1_Template, 2, 2, "div", 9);
    \u0275\u0275conditionalCreate(2, Recoveries_Conditional_6_Conditional_2_Template, 3, 0, "div", 10);
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275repeaterCreate(4, Recoveries_Conditional_6_For_5_Template, 6, 1, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275conditionalCreate(7, Recoveries_Conditional_6_Conditional_7_Template, 6, 1, "div", 14);
    \u0275\u0275conditionalCreate(8, Recoveries_Conditional_6_Conditional_8_Template, 4, 0, "div", 15);
    \u0275\u0275conditionalCreate(9, Recoveries_Conditional_6_Conditional_9_Template, 3, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.teacherGradeRange ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.teacherSubjects && ctx_r0.teacherSubjects.length > 1 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("fade-out", ctx_r0.isFadingOut)("fade-in", ctx_r0.isFadingIn);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.grades);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.selectedGrade && ctx_r0.selectedClassroom ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selectedGrade && ctx_r0.selectedClassroom && !ctx_r0.isLoading ? 9 : -1);
  }
}
function Recoveries_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function Recoveries_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePlanModal());
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function Recoveries_Conditional_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 49)(3, "h2");
    \u0275\u0275text(4, "\u{1F4DA} Plan de Estudio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function Recoveries_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePlanModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "div", 52)(9, "p")(10, "strong");
    \u0275\u0275text(11, "Estudiante:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Grado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "Grupo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 54)(25, "button", 55);
    \u0275\u0275listener("click", function Recoveries_Conditional_7_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printPlan());
    });
    \u0275\u0275text(26, " \u{1F5A8}\uFE0F Imprimir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 56);
    \u0275\u0275listener("click", function Recoveries_Conditional_7_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePlanModal());
    });
    \u0275\u0275text(28, " Cerrar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPlan.studentName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPlan.grade, " | ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPlan.classGroup, " | ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPlan.period, " ");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.safePlanContent, \u0275\u0275sanitizeHtml);
  }
}
var Recoveries = class _Recoveries {
  http;
  cdr;
  ngZone;
  sanitizer;
  allGrades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  grades = [...this.allGrades];
  classrooms = ["Salon A", "Salon B"];
  selectedGrade = null;
  teacherGradeRange = null;
  hasTeacherGradeRange = null;
  // null = checking, false = no subjects, true = has subjects
  selectedClassroom = null;
  selectedPeriod = 1;
  availablePeriods = [1];
  teacherSubjects = [];
  selectedSubject = null;
  isFadingOut = false;
  isFadingIn = false;
  students = [];
  isLoading = false;
  showLoadingScreen = false;
  studentsWithRecovery = [];
  allRecoveryPlans = [];
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  showPlanModal = false;
  selectedPlan = null;
  safePlanContent = null;
  filterGrade = null;
  filterClassroom = null;
  filterPeriod = null;
  gradesUpdateService = inject(GradesUpdateService);
  realtimeService = inject(GlobalRealtimeService);
  authService = inject(AuthService);
  constructor(http, cdr, ngZone, sanitizer) {
    this.http = http;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.sanitizer = sanitizer;
  }
  getCurrentUser() {
    const current = this.authService.getCurrentUserValue();
    if (current)
      return current;
    try {
      return JSON.parse(localStorage.getItem("currentUser") || "null");
    } catch (e) {
      return null;
    }
  }
  getCurrentTeacherId() {
    const user = this.getCurrentUser();
    const roleName = user?.role?.name || user?.role;
    return user?.id && roleName === "TEACHER" ? Number(user.id) : null;
  }
  teacherIdQuery() {
    const teacherId = this.getCurrentTeacherId();
    return teacherId ? `?teacherId=${teacherId}` : "";
  }
  teacherIdParam() {
    const teacherId = this.getCurrentTeacherId();
    return teacherId ? `&teacherId=${teacherId}` : "";
  }
  periodCheckInterval = null;
  periodsSubscription = null;
  previousAvailablePeriods = [1];
  ngOnInit() {
    this.loadTeacherGradeRange();
    this.loadTeacherSubjectsForGradeRange();
    this.loadUnlockedPeriods();
    this.filterGrade = null;
    this.filterClassroom = null;
    this.filterPeriod = null;
    this.selectedGrade = null;
    this.selectedClassroom = null;
    this.selectedPeriod = 1;
    this.periodsSubscription = this.realtimeService.periods$.subscribe((periods) => {
      const unlockedPeriods = periods.filter((p) => p.isUnlocked).map((p) => p.periodNumber);
      const newPeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
      if (!this.arraysEqual(this.availablePeriods, newPeriods)) {
        this.availablePeriods = newPeriods;
        this.showPeriodChangeNotification();
        if (!this.availablePeriods.includes(this.selectedPeriod)) {
          this.selectedPeriod = Math.max(...this.availablePeriods);
          this.loadStudentsWithRecovery();
        }
      }
    });
    this.loadAllRecoveryPlans();
    this.ngZone.runOutsideAngular(() => {
      this.periodCheckInterval = setInterval(() => {
        const previousPeriods = [...this.availablePeriods];
        this.http.get("http://localhost:8080/api/periods").subscribe({
          next: (periods) => {
            const unlockedPeriods = periods.filter((p) => p.isUnlocked).map((p) => p.periodNumber);
            const newPeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
            if (!this.arraysEqual(previousPeriods, newPeriods)) {
              this.ngZone.run(() => {
                this.availablePeriods = newPeriods;
                this.showPeriodChangeNotification();
                if (!this.availablePeriods.includes(this.selectedPeriod)) {
                  this.selectedPeriod = Math.max(...this.availablePeriods);
                  this.loadStudentsWithRecovery();
                }
              });
            }
          }
        });
      }, 1e4);
    });
  }
  arraysEqual(a, b) {
    if (a.length !== b.length)
      return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, idx) => val === sortedB[idx]);
  }
  loadTeacherGradeRange() {
    const json = localStorage.getItem("selectedTeacherGradeRange");
    if (!json) {
      this.teacherGradeRange = null;
      this.grades = [...this.allGrades];
      return;
    }
    try {
      const parsed = JSON.parse(json);
      if (parsed && typeof parsed.min === "number" && typeof parsed.max === "number" && parsed.min > 0 && parsed.max >= parsed.min) {
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
    } catch (e) {
    }
    this.teacherGradeRange = null;
    this.grades = [...this.allGrades];
  }
  parseGradeLabel(grade) {
    const match = grade.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }
  isTeacher() {
    const user = this.authService.getCurrentUserValue();
    return !!(user && user.role && (user.role.name || user.role) === "TEACHER");
  }
  loadTeacherSubjectsForGradeRange() {
    const currentUser = this.authService.getCurrentUserValue();
    if (!currentUser || !currentUser.role) {
      this.hasTeacherGradeRange = false;
      return;
    }
    const roleName = currentUser.role.name || currentUser.role;
    if (roleName !== "TEACHER" || !currentUser.id) {
      this.hasTeacherGradeRange = false;
      return;
    }
    this.http.get(`http://localhost:8080/api/subjects/teacher/${currentUser.id}`).subscribe({
      next: (subjects) => {
        this.teacherSubjects = subjects;
        this.selectedSubject = subjects.find((s) => s.gradeMin != null && s.gradeMax != null)?.name || subjects[0]?.name || null;
        setTimeout(() => {
          this.applyGradeFilterForSubject(this.selectedSubject || "", false);
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
  onSubjectChange(subjectName) {
    this.selectedSubject = subjectName;
    this.applyGradeFilterForSubject(subjectName);
    if (this.selectedGrade && this.selectedClassroom) {
      this.loadStudentsWithRecovery();
    }
  }
  applyGradeFilterForSubject(subjectName, animate = true) {
    const subject = this.teacherSubjects.find((s) => s.name === subjectName);
    let newGrades = [];
    if (subject && subject.gradeMin != null && subject.gradeMax != null) {
      const minGrade = subject.gradeMin;
      const maxGrade = subject.gradeMax;
      newGrades = this.allGrades.filter((grade) => {
        const parsedGrade = this.parseGradeLabel(grade);
        return parsedGrade !== null && parsedGrade >= minGrade && parsedGrade <= maxGrade;
      });
      this.teacherGradeRange = { min: minGrade, max: maxGrade };
      this.hasTeacherGradeRange = true;
    } else {
      const withRange = this.teacherSubjects.filter((s) => s.gradeMin != null && s.gradeMax != null);
      if (withRange.length > 0) {
        const minGrade = Math.min(...withRange.map((s) => s.gradeMin));
        const maxGrade = Math.max(...withRange.map((s) => s.gradeMax));
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
    if (!changed)
      return;
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
  stringArraysEqual(a, b) {
    if (a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  showPeriodChangeNotification() {
    this.cdr.detectChanges();
    const existingToast = document.querySelector(".period-change-toast");
    if (existingToast)
      existingToast.remove();
    const toast = document.createElement("div");
    toast.className = "period-change-toast";
    toast.innerHTML = '<span class="toast-icon">\u{1F514}</span> Los per\xEDodos se han actualizado';
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
    const style = document.createElement("style");
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
      toast.style.animation = "slideOut 0.2s ease-in forwards";
      setTimeout(() => toast.remove(), 200);
    }, 500);
  }
  ngOnDestroy() {
    if (this.periodCheckInterval) {
      clearInterval(this.periodCheckInterval);
    }
    if (this.periodsSubscription) {
      this.periodsSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
  }
  loadUnlockedPeriods() {
    this.http.get("http://localhost:8080/api/periods").subscribe({
      next: (periods) => {
        const unlockedPeriods = periods.filter((p) => p.isUnlocked).map((p) => p.periodNumber);
        this.availablePeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
        localStorage.setItem("unlockedPeriods", JSON.stringify(unlockedPeriods.filter((p) => p > 1)));
        this.cdr.markForCheck();
      },
      error: () => {
        const stored = localStorage.getItem("unlockedPeriods");
        this.availablePeriods = stored ? [1, ...JSON.parse(stored).filter((p) => p > 1)] : [1];
        this.cdr.markForCheck();
      }
    });
  }
  loadAllRecoveryPlans() {
    this.http.get(`http://localhost:8080/api/grades/recovery-plans${this.teacherIdQuery()}`).subscribe({
      next: (plans) => {
        this.allRecoveryPlans = plans;
        this.applyFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.allRecoveryPlans = [];
        this.cdr.markForCheck();
      }
    });
  }
  selectGrade(grade, classroom) {
    this.selectedGrade = grade;
    this.selectedClassroom = classroom;
    this.loadUnlockedPeriods();
    this.selectedPeriod = Math.max(...this.availablePeriods);
    this.showLoadingScreen = true;
    this.isLoading = true;
    setTimeout(() => {
      this.loadData();
    }, 800);
  }
  onPeriodChange(period) {
    const newPeriod = parseInt(period.toString());
    if (!this.availablePeriods.includes(newPeriod)) {
      alert("Este per\xEDodo a\xFAn no est\xE1 desbloqueado. Ve a Configuraci\xF3n para desbloquearlo.");
      return;
    }
    const previousPeriod = this.selectedPeriod;
    if (newPeriod > previousPeriod) {
      const lastPeriod = Math.max(...this.availablePeriods);
      this.selectedPeriod = lastPeriod;
      this.studentsWithRecovery = [];
      this.loadStudentsWithRecovery();
    } else {
      this.selectedPeriod = newPeriod;
      this.loadStudentsWithRecovery();
    }
  }
  onPeriodManualChange(period) {
    this.onPeriodChange(period);
  }
  loadData() {
    if (!this.selectedGrade || !this.selectedClassroom)
      return;
    const url = `http://localhost:8080/api/students/grade/${encodeURIComponent(this.selectedGrade)}/class/${encodeURIComponent(this.selectedClassroom)}`;
    this.http.get(url).subscribe({
      next: (students) => {
        this.students = students.sort((a, b) => (a.surname || "").localeCompare(b.surname || ""));
        this.loadStudentsWithRecovery();
        this.cdr.markForCheck();
      },
      error: () => {
        this.students = [];
        this.isLoading = false;
        this.showLoadingScreen = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadStudentsWithRecovery() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) {
      this.applyFilters();
      return;
    }
    const url = `http://localhost:8080/api/students/grade/${encodeURIComponent(this.selectedGrade)}/class/${encodeURIComponent(this.selectedClassroom)}`;
    this.http.get(url).subscribe({
      next: (students) => {
        const sortedStudents = students.sort((a, b) => (a.surname || "").localeCompare(b.surname || ""));
        this.loadGradesForStudents(sortedStudents);
        this.cdr.markForCheck();
      },
      error: () => {
        this.studentsWithRecovery = [];
        this.isLoading = false;
        this.showLoadingScreen = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadGradesForStudents(students) {
    const subjectParam = this.selectedSubject ? `&subjectName=${encodeURIComponent(this.selectedSubject)}` : "";
    const url = `http://localhost:8080/api/grades/classroom?grade=${encodeURIComponent(this.selectedGrade)}&classroom=${encodeURIComponent(this.selectedClassroom)}&period=${this.selectedPeriod}${this.teacherIdParam()}${subjectParam}`;
    this.http.get(url).subscribe({
      next: (response) => {
        const gradesData = response.grades || [];
        this.studentsWithRecovery = students.map((student) => {
          const studentGrades = gradesData.filter((g) => g.student?.id === student.id);
          let finalGrade = this.calculateFinalGrade(studentGrades);
          const recoveryPlan = this.allRecoveryPlans.find((p) => p.studentId === student.id && p.period === this.selectedPeriod);
          return {
            student,
            recoveryPlan: recoveryPlan || null,
            finalGrade,
            period: this.selectedPeriod
          };
        }).filter((s) => s.finalGrade > 0 && s.finalGrade <= 3.4 || s.recoveryPlan !== null);
        this.isLoading = false;
        setTimeout(() => {
          this.showLoadingScreen = false;
          this.cdr.markForCheck();
        }, 300);
      },
      error: () => {
        this.studentsWithRecovery = [];
        this.isLoading = false;
        this.showLoadingScreen = false;
        this.cdr.markForCheck();
      }
    });
  }
  calculateFinalGrade(grades) {
    const actGrades = [];
    let evalGrade = null;
    let autoEvalGrade = null;
    let promParcGrade = null;
    let nFinalGrade = null;
    for (const grade of grades) {
      const gradeName = grade.gradeName?.toLowerCase() || "";
      if (grade.isEvaluation) {
        evalGrade = grade.gradeValue;
      } else if (gradeName.includes("nfinal") || gradeName.includes("n.final")) {
        nFinalGrade = grade.gradeValue;
      } else if (gradeName.includes("act") && !gradeName.includes("auto") && !gradeName.includes("prom")) {
        if (grade.gradeValue !== null) {
          actGrades.push(grade.gradeValue);
        }
      } else if (gradeName.includes("auto")) {
        autoEvalGrade = grade.gradeValue;
      } else if (gradeName.includes("prom")) {
        promParcGrade = grade.gradeValue;
      }
    }
    if (nFinalGrade !== null) {
      return nFinalGrade;
    }
    if (autoEvalGrade !== null)
      actGrades.push(autoEvalGrade);
    if (promParcGrade !== null)
      actGrades.push(promParcGrade);
    let p80 = 0;
    if (actGrades.length > 0) {
      const avgAct = actGrades.reduce((a, b) => a + b, 0) / actGrades.length;
      p80 = avgAct * 0.8;
    }
    let p20 = 0;
    if (evalGrade !== null) {
      p20 = evalGrade * 0.2;
    }
    return p80 + p20;
  }
  applyFilters() {
    let filtered = [...this.allRecoveryPlans];
    if (this.filterGrade) {
      filtered = filtered.filter((p) => p.grade === this.filterGrade);
    }
    if (this.filterClassroom) {
      filtered = filtered.filter((p) => p.classGroup === this.filterClassroom);
    }
    if (this.filterPeriod) {
      filtered = filtered.filter((p) => p.period === this.filterPeriod);
    }
    this.studentsWithRecovery = filtered.map((p) => ({
      student: {
        id: p.studentId,
        name: p.studentName.split(" ")[1] || "",
        surname: p.studentName.split(" ")[0] || "",
        grade: p.grade,
        classGroup: p.classGroup
      },
      recoveryPlan: p,
      finalGrade: 0,
      period: p.period
    }));
    this.cdr.markForCheck();
  }
  filterByGrade(grade) {
    this.filterGrade = grade;
    this.applyFilters();
  }
  filterByClassroom(classroom) {
    this.filterClassroom = classroom;
    this.applyFilters();
  }
  filterByPeriod(period) {
    this.filterPeriod = period;
    this.applyFilters();
  }
  viewPlan(plan) {
    this.selectedPlan = plan;
    this.showPlanModal = true;
    this.safePlanContent = this.sanitizer.bypassSecurityTrustHtml(plan.planContent || plan.day1Content || "");
    setTimeout(() => this.renderMathInPlan(), 100);
  }
  closePlanModal() {
    this.showPlanModal = false;
    this.selectedPlan = null;
  }
  printPlan() {
    const printContent = document.getElementById("recovery-plan-content");
    if (!printContent) {
      alert("No hay plan de recuperaci\xF3n para imprimir");
      return;
    }
    const printContentHTML = printContent.innerHTML;
    if (!printContentHTML.trim()) {
      alert("El contenido del plan est\xE1 vac\xEDo");
      return;
    }
    const printHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Plan de Recuperaci\xF3n</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
          h1, h2, h3 { color: #2c3e50; }
          h2 { border-bottom: 2px solid #3498db; padding-bottom: 8px; }
          h3 { color: #1b6aeb; }
          table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          table th { background: #3498db; color: white; padding: 12px; text-align: left; border: 1px solid #ddd; }
          table td { padding: 10px; border: 1px solid #ddd; }
          table tr:nth-child(even) td { background: #f8f9fa; }
          ul, ol { margin: 10px 0 15px 20px; }
          li { margin: 6px 0; }
          strong { color: #1b6aeb; }
          a { color: #e74c3c; text-decoration: none; }
          @page { margin: 10mm; size: A4; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        </style>
      </head>
      <body>${printContentHTML}</body>
      </html>
    `;
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.zIndex = "-1";
    document.body.appendChild(iframe);
    const writeAndPrint = () => {
      if (iframe.contentDocument) {
        iframe.contentDocument.open();
        iframe.contentDocument.write(printHTML);
        iframe.contentDocument.close();
        iframe.onload = null;
        setTimeout(() => {
          try {
            iframe.contentWindow?.print();
          } catch (e) {
            console.error("Print error:", e);
          } finally {
            setTimeout(() => {
              if (iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
              }
            }, 1e3);
          }
        }, 250);
      }
    };
    if (iframe.contentDocument?.readyState === "complete") {
      writeAndPrint();
    } else {
      iframe.onload = writeAndPrint;
    }
  }
  getGradeColor(grade) {
    if (grade >= 4)
      return "grade-green";
    if (grade >= 3.5)
      return "grade-yellow";
    return "grade-red";
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  getDisplayItems() {
    if (this.selectedGrade && this.selectedClassroom) {
      return this.studentsWithRecovery;
    }
    return [];
  }
  getInitials(studentName) {
    if (!studentName)
      return "??";
    const parts = studentName.split(" ");
    const firstInitial = parts.length > 1 ? parts[1].charAt(0) : "";
    const lastInitial = parts.length > 0 ? parts[0].charAt(0) : "";
    return (firstInitial + lastInitial).toUpperCase();
  }
  refresh() {
    this.loadAllRecoveryPlans();
    if (this.selectedGrade && this.selectedClassroom) {
      this.loadStudentsWithRecovery();
    }
    this.gradesUpdateService.notifyGradeUpdate();
  }
  needsRecovery(studentId) {
    const item = this.studentsWithRecovery.find((s) => s.student.id === studentId);
    return item ? item.finalGrade > 0 && item.finalGrade <= 3.4 : false;
  }
  hasRecoveryPlan(studentId, period) {
    return this.allRecoveryPlans.some((p) => p.studentId === studentId && p.period === period);
  }
  hasExcellentGrade(studentId) {
    const item = this.studentsWithRecovery.find((s) => s.student.id === studentId);
    return item ? item.finalGrade >= 4 : false;
  }
  isLosing(studentId) {
    const item = this.studentsWithRecovery.find((s) => s.student.id === studentId);
    return item ? item.finalGrade >= 3.5 && item.finalGrade < 4 : false;
  }
  renderMathInPlan() {
    const planContent = document.getElementById("recovery-plan-content");
    if (!planContent)
      return;
    const waitForKatex = (callback, maxAttempts = 30) => {
      let attempts = 0;
      const check = () => {
        attempts++;
        const katexAny = window.katex;
        if (katexAny && typeof katexAny.ParseError !== "undefined") {
          callback();
        } else if (attempts < maxAttempts) {
          setTimeout(check, 100);
        } else {
          console.warn("KaTeX not fully loaded after maximum attempts");
        }
      };
      check();
    };
    waitForKatex(() => {
      try {
        if (typeof window.renderMathInElement !== "undefined") {
          window.renderMathInElement(planContent, {
            delimiters: [
              { left: "$$", right: "$$", display: false },
              { left: "$", right: "$", display: false }
            ],
            throwOnError: false,
            trust: true,
            strict: false
          });
        }
      } catch (e) {
        console.warn("KaTeX rendering failed:", e);
      }
    });
  }
  static \u0275fac = function Recoveries_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Recoveries)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Recoveries, selectors: [["app-recoveries"]], decls: 8, vars: 2, consts: [[1, "recoveries-container"], [1, "page-header"], [1, "fullscreen-warning"], [1, "fullscreen-loading"], [1, "fullscreen-modal-overlay"], [1, "material-icons"], [1, "spinner"], [2, "color", "#2c3e50", "font-size", "1.1rem", "font-weight", "600"], [1, "grades-sidebar"], [1, "grade-range-indicator"], [1, "subject-selector"], [1, "grades-row"], [1, "grade-section"], [1, "right-content"], [1, "period-selector"], [1, "loading-indicator"], [1, "recoveries-list"], [1, "subject-btn", 3, "selected"], [1, "subject-btn", 3, "click"], [1, "classrooms"], [1, "classroom-btn", 3, "selected"], [1, "classroom-btn", 3, "click"], ["for", "period-select"], ["id", "period-select", "name", "period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "recovery-cards"], [1, "no-students-message"], [1, "recovery-card", 3, "has-plan"], [1, "recovery-card"], [1, "card-header"], [1, "student-avatar"], [1, "student-info"], [1, "period-badge"], [1, "card-body"], [1, "grade-info"], [1, "plan-preview"], [1, "no-plan"], [1, "card-footer"], [1, "view-plan-btn"], [1, "label"], [1, "grade-value"], [1, "plan-days"], [1, "day-badge", "day1"], [1, "day-badge", "day2"], [1, "plan-topics"], [1, "view-plan-btn", 3, "click"], [1, "no-students-content"], [1, "fullscreen-modal-overlay", 3, "click"], [1, "fullscreen-modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body-fullscreen"], [1, "plan-meta-top"], ["id", "recovery-plan-content", 1, "plan-content-fullscreen", "plan-text", 3, "innerHTML"], [1, "modal-footer"], [1, "print-btn", 3, "click"], [1, "close-modal-btn", 3, "click"]], template: function Recoveries_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Recuperaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, Recoveries_Conditional_4_Template, 5, 0, "div", 2)(5, Recoveries_Conditional_5_Template, 4, 0, "div", 3)(6, Recoveries_Conditional_6_Template, 10, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, Recoveries_Conditional_7_Template, 29, 5, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isTeacher() && ctx.hasTeacherGradeRange === false ? 4 : ctx.isTeacher() && ctx.hasTeacherGradeRange === null ? 5 : 6);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showPlanModal && ctx.selectedPlan ? 7 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: [`

.recoveries-container[_ngcontent-%COMP%] {
  padding: var(--sp-5);
  background: var(--bg);
  min-height: 100vh;
}
.recoveries-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  color: var(--text-1);
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.grades-sidebar[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}
.grade-range-indicator[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 auto 0.75rem;
  background:
    linear-gradient(
      135deg,
      #eff6ff,
      #dbeafe);
  border: 1px solid #93c5fd;
  border-radius: 999px;
  color: #1e40af;
  font-weight: 700;
  font-size: 0.9rem;
  width: fit-content;
}
.no-subject-message[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  background:
    linear-gradient(
      135deg,
      #fffbeb,
      #fef3c7);
  border: 1px solid #fcd34d;
  border-radius: 12px;
  color: #92400e;
  font-weight: 600;
  font-size: 0.9rem;
}
.no-subject-message.fullscreen-message[_ngcontent-%COMP%] {
  margin: 2rem auto;
  max-width: 600px;
  padding: 2rem;
  font-size: 1.05rem;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.fullscreen-warning[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  background:
    linear-gradient(
      135deg,
      #fffbeb,
      #fef3c7);
  border: 1px solid #fcd34d;
  border-radius: 16px;
  color: #92400e;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 60vh;
  margin: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.grades-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  justify-content: center;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.grades-row.fade-out[_ngcontent-%COMP%] {
  opacity: 0;
  transform: translateY(10px);
}
.grades-row.fade-in[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease forwards;
}
@keyframes _ngcontent-%COMP%_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.subject-selector[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px 15px;
  background:
    linear-gradient(
      135deg,
      #f0f9ff,
      #e0f2fe);
  border-radius: 8px;
  border-left: 4px solid #0ea5e9;
}
.subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%] {
  flex: 1;
  padding: 10px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: .95rem;
  font-weight: 600;
  color: #2c3e50;
  background: #fff;
  cursor: pointer;
  transition: all .3s ease;
}
.subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%]:hover {
  border-color: #0ea5e9;
  background: #f0f9ff;
}
.subject-selector[_ngcontent-%COMP%]   .subject-btn.selected[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #0ea5e9,
      #0284c7);
  color: #fff;
  border-color: #0ea5e9;
}
.grade-section[_ngcontent-%COMP%] {
  min-width: 140px;
  text-align: center;
  background:
    linear-gradient(
      145deg,
      #ffffff 0%,
      #f8f9fa 100%);
  border-radius: 16px;
  padding: 15px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.grade-section[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
.grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: #2c3e50;
  font-size: 1rem;
  margin: 0 0 12px 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.classrooms[_ngcontent-%COMP%] {
  display: flex;
  gap: 5px;
  flex-direction: column;
}
.classroom-btn[_ngcontent-%COMP%] {
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background:
    linear-gradient(
      135deg,
      #1b6aeb 0%,
      #257bf3 100%);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  box-shadow: 0 4px 8px rgba(27, 106, 235, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.classroom-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(27, 106, 235, 0.4);
  background:
    linear-gradient(
      135deg,
      #1761c9 0%,
      #1b6aeb 100%);
}
.classroom-btn.selected[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1761c9 0%,
      #1b6aeb 100%);
  box-shadow: 0 6px 12px rgba(27, 106, 235, 0.5);
  transform: scale(1.02);
}
.right-content[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}
.period-selector[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px 15px;
  background:
    linear-gradient(
      135deg,
      #f8f9fa 0%,
      #e9ecef 100%);
  border-radius: 8px;
  border-left: 4px solid #1b6aeb;
}
.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #2c3e50;
}
.period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 8px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2c3e50;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {
  border-color: #1b6aeb;
}
.period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #1b6aeb;
  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.1);
}
.loading-indicator[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}
.fullscreen-loading[_ngcontent-%COMP%] {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 1rem !important;
  min-height: 60vh !important;
  margin: 2rem !important;
}
.spinner[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(27, 106, 235, 0.2);
  border-top: 4px solid #1b6aeb;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
  margin-bottom: 20px;
}
@keyframes _ngcontent-%COMP%_spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #777;
  font-size: 1.1rem;
}
.recoveries-list[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.no-students-message[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px 20px;
}
.no-students-content[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
}
.no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: #2c3e50;
  margin-bottom: 10px;
}
.no-students-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #7f8c8d;
}
.placeholder[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
  color: #7f8c8d;
}
.placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: #95a5a6;
}
.recovery-cards[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--sp-4);
}
.recovery-card[_ngcontent-%COMP%] {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 4px solid var(--danger);
  border-radius: var(--r-lg);
  padding: var(--sp-5);
  transition: box-shadow .2s ease, border-color .2s ease;
  box-shadow: var(--shadow-sm);
}
.recovery-card[_ngcontent-%COMP%]:hover {
  box-shadow: var(--shadow-md);
}
.recovery-card.has-plan[_ngcontent-%COMP%] {
  border-left-color: var(--success);
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.student-avatar[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #1b6aeb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.student-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.student-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0;
  color: #212529;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 3px 0 0 0;
  color: #6c757d;
  font-size: 0.85rem;
}
.period-badge[_ngcontent-%COMP%] {
  background: #1b6aeb;
  color: white;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
}
.card-body[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.grade-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.grade-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #495057;
  font-size: 0.85rem;
}
.grade-value[_ngcontent-%COMP%] {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 4px 10px;
  border-radius: 6px;
}
.grade-value.grade-green[_ngcontent-%COMP%] {
  background: #d3f9d8;
  color: #2b8a3e;
}
.grade-value.grade-yellow[_ngcontent-%COMP%] {
  background: #fff3bf;
  color: #f08c00;
}
.grade-value.grade-red[_ngcontent-%COMP%] {
  background: #ffe3e3;
  color: #c92a2a;
}
.plan-preview[_ngcontent-%COMP%] {
  background: white;
  padding: 14px;
  border-radius: 10px;
  margin-top: 12px;
  border: 1px solid #e9ecef;
}
.plan-days[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.day-badge[_ngcontent-%COMP%] {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.day-badge.day1[_ngcontent-%COMP%] {
  background: #e7f5ff;
  color: #1971c2;
}
.day-badge.day2[_ngcontent-%COMP%] {
  background: #f3d9fa;
  color: #862e9c;
}
.plan-topics[_ngcontent-%COMP%] {
  color: #495057;
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.no-plan[_ngcontent-%COMP%] {
  background: #fff5f5;
  padding: 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ffe3e3;
}
.no-plan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: #c92a2a;
  font-size: 0.875rem;
  font-weight: 500;
}
.card-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
}
.view-plan-btn[_ngcontent-%COMP%] {
  padding: 10px 18px;
  background: #2f9e44;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}
.view-plan-btn[_ngcontent-%COMP%]:hover {
  background: #2b8a3e;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(47, 158, 68, 0.25);
}
.fullscreen-modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}
.fullscreen-modal-content[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fafc 100%);
  border-radius: 20px;
  width: 95%;
  max-width: 1400px;
  height: 92vh;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  animation: slideUp 0.4s ease;
  border: 1px solid rgba(27, 106, 235, 0.1);
}
.modal-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #1b6aeb 50%,
      #2563eb 100%);
  color: white;
  padding: 24px 30px;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(27, 106, 235, 0.3);
}
.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}
.modal-body-fullscreen[_ngcontent-%COMP%] {
  padding: 25px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.close-btn[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.close-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: rotate(90deg);
}
.plan-meta-top[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      145deg,
      #f8f9fa 0%,
      #e9ecef 100%);
  padding: 15px 18px;
  border-radius: 10px;
  margin-bottom: 16px;
  border-left: 4px solid #1b6aeb;
}
.plan-meta-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 4px 0;
  color: #2c3e50;
  font-size: 0.95rem;
}
.plan-content-fullscreen[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 50%,
      #f1f5f9 100%);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  flex: 1;
  overflow-y: auto;
  box-shadow: inset 0 0 30px rgba(27, 106, 235, 0.03);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global {
  font-family:
    "Segoe UI",
    Arial,
    sans-serif;
  line-height: 1.75;
  color: #1a202c;
  font-size: 15px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%] {
  font-family:
    "Segoe UI",
    Arial,
    sans-serif;
  line-height: 1.75;
  color: #1a202c;
  font-size: 15px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .paragraph-block[_ngcontent-%COMP%] {
  margin-bottom: 25px;
  clear: both;
  width: 100%;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .paragraph-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-bottom: 15px;
  line-height: 1.9;
  text-align: justify;
  width: 100%;
  box-sizing: border-box;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  color: #1e3a8a;
  font-size: 22px;
  font-weight: 700;
  margin: 35px 0 20px 0;
  padding: 16px 24px;
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #3b82f6 100%);
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.25);
  border-left: none;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {
  color: #1e40af;
  font-size: 18px;
  margin: 25px 0 15px 0;
  font-weight: 600;
  padding: 12px 20px;
  background:
    linear-gradient(
      135deg,
      #eff6ff 0%,
      #dbeafe 100%);
  border-radius: 8px;
  border-left: 5px solid #3b82f6;
  display: block;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  color: #334155;
  font-size: 16px;
  margin: 20px 0 12px 0;
  font-weight: 600;
  background: #f1f5f9;
  padding: 10px 16px;
  border-radius: 6px;
  border-left: 4px solid #64748b;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #1b6aeb;
  font-weight: 700;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {
  color: #555;
  font-style: italic;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {
  margin: 20px 0;
  padding: 0;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.15);
  border-color: #0ea5e9;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  background:
    linear-gradient(
      135deg,
      #ef4444 0%,
      #dc2626 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 14px;
  flex-shrink: 0;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%] {
  flex: 1;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .video-link[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1e40af;
  text-decoration: none;
  margin-bottom: 4px;
  transition: color 0.2s ease;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .video-link[_ngcontent-%COMP%]:hover {
  color: #3b82f6;
  text-decoration: underline;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-source[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 11px;
  color: #64748b;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 4px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-unavailable[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 12px;
  color: #991b1b;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-unavailable-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  background: #fecaca;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #991b1b;
  font-size: 14px;
  margin-right: 14px;
  flex-shrink: 0;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-unavailable-content[_ngcontent-%COMP%] {
  flex: 1;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-unavailable-title[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #991b1b;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-unavailable-message[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #b91c1c;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-unavailable-url[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #dc2626;
  word-break: break-all;
  margin-top: 2px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%] {
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 10px;
  color: #64748b;
  border: 2px dashed #cbd5e1;
  margin: 20px 0;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%]   .no-videos-icon[_ngcontent-%COMP%] {
  font-size: 24px;
  margin-bottom: 10px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 5px 0;
  font-size: 14px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-status-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-status-badge.available[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #166534;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-status-badge.unavailable[_ngcontent-%COMP%] {
  background: #fef2f2;
  color: #991b1b;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-status-badge.checking[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #92400e;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-section-header[_ngcontent-%COMP%] {
  margin: 30px 0 20px 0;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 700;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h2[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1e3a8a 0%,
      #1e40af 50%,
      #2563eb 100%);
  color: white;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.25);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h3[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #dbeafe 0%,
      #bfdbfe 100%);
  color: #1e40af;
  font-size: 16px;
  border-left: 4px solid #2563eb;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h4[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #334155;
  font-size: 14px;
  border-left: 3px solid #64748b;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {
  margin: 20px 0;
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-list[_ngcontent-%COMP%] {
  margin: 15px 0 20px 25px;
  padding-left: 10px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 12px;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  margin: 15px 0 20px 25px;
  padding-left: 10px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  list-style-type: decimal;
  margin: 15px 0 20px 25px;
  padding-left: 15px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 20px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.1);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 10px;
  line-height: 1.7;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {
  color: #3b82f6;
  font-weight: 600;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {
  color: #22c55e;
  font-weight: bold;
  margin-right: 6px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 14px;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #2563eb 50%,
      #1d4ed8 100%);
  color: white;
  padding: 16px 14px;
  text-align: left;
  font-weight: 700;
  border: 1px solid #1e3a8a;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.8px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 16px 14px;
  border: 1px solid #e2e8f0;
  background: white;
  transition: all 0.2s;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {
  background: #f8fafc;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #eff6ff,
      #dbeafe);
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%] {
  font-size: 15px;
}
.plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  max-width: 300px;
}
.plan-meta[_ngcontent-%COMP%] {
  text-align: center;
  color: #6c757d;
  font-size: 0.8rem;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}
.modal-footer[_ngcontent-%COMP%] {
  padding: 20px 25px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.print-btn[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background:
    linear-gradient(
      135deg,
      #27ae60 0%,
      #1e8449 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}
.print-btn[_ngcontent-%COMP%]:hover {
  background: #219a52;
  transform: translateY(-2px);
}
.close-modal-btn[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background: #95a5a6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}
.close-modal-btn[_ngcontent-%COMP%]:hover {
  background: #7f8c8d;
}
.plan-text[_ngcontent-%COMP%]   .math-large[_ngcontent-%COMP%] {
  font-size: 2.5em;
  color: #1e40af;
  font-weight: bold;
  display: inline-block;
  padding: 4px 8px;
  vertical-align: middle;
  line-height: 1.6;
}
.plan-text[_ngcontent-%COMP%]   .math-large-block[_ngcontent-%COMP%] {
  font-size: 2.2em;
  color: #1e40af;
  font-weight: bold;
  display: block;
  padding: 16px 24px;
  margin: 16px 0;
  background: #f0f4ff;
  border-radius: 12px;
  border: 2px solid #c7d2fe;
  text-align: center;
  line-height: 1.8;
}
.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%] {
  font-size: 2.8em;
  color: #1e3a8a;
  line-height: 1.4;
  display: inline-block;
  white-space: nowrap;
}
.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%] {
  margin: 20px auto;
  padding: 20px;
  background: #eff6ff;
  border-radius: 12px;
  text-align: center;
}
.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%] {
  font-size: 1em;
  display: inline-block;
  white-space: normal;
}
.plan-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:empty    + .katex[_ngcontent-%COMP%] {
  display: none;
}
.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%] {
  margin: 30px auto;
  padding: 24px 30px;
  background: #fefefe;
  border-radius: 12px;
  overflow-x: auto;
  text-align: center;
  border: 2px solid #e0e7ff;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1);
  display: block;
}
.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%] {
  font-size: 3.2em;
  display: inline-block;
  white-space: normal;
}
.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .frac-line[_ngcontent-%COMP%] {
  border-top-width: 3px;
}
.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%] {
  vertical-align: middle;
  margin: 0 2px;
}
.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  padding: 0 4px;
}
.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mord.ros[_ngcontent-%COMP%] {
  font-size: 0.7em;
  top: -0.4em;
}
.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mord.uos[_ngcontent-%COMP%] {
  font-size: 0.7em;
  top: -0.8em;
}
.plan-text[_ngcontent-%COMP%]   mjx-container[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 2.5em;
}
.plan-text[_ngcontent-%COMP%]   mjx-container[jax=CHTML][_ngcontent-%COMP%] {
  display: inline-block;
  margin: 0 4px;
  vertical-align: middle;
}
.plan-text[_ngcontent-%COMP%]   mjx-container[jax=CHTML][display=true][_ngcontent-%COMP%] {
  display: block;
  text-align: center;
  margin: 30px auto;
}
.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]::before, 
.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]::after {
  content: "";
  display: table;
}
@media print {
  .ai-table[_ngcontent-%COMP%] {
    page-break-inside: avoid;
  }
  .ai-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    background: #eee !important;
    color: #000 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .image-container[_ngcontent-%COMP%] {
    page-break-inside: avoid;
  }
}
details[_ngcontent-%COMP%] {
  display: block;
}
details[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {
  cursor: pointer;
  list-style: none;
}
details[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]::-webkit-details-marker {
  display: none;
}
details[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {
  margin-bottom: 8px;
}
.recoveries-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, 
.recoveries-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, 
.recoveries-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, 
.recoveries-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}
@media (max-width: 768px) {
  .recoveries-container[_ngcontent-%COMP%] {
    padding: var(--sp-4);
  }
  .modal-footer[_ngcontent-%COMP%] {
    flex-direction: column-reverse;
  }
  .modal-footer[_ngcontent-%COMP%]   .print-btn[_ngcontent-%COMP%], 
   .modal-footer[_ngcontent-%COMP%]   .close-modal-btn[_ngcontent-%COMP%] {
    width: 100%;
  }
  .recovery-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .view-plan-btn[_ngcontent-%COMP%] {
    width: 100%;
  }
}
[data-theme="dark"][_nghost-%COMP%]   .recoveries-container[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .recoveries-container[_ngcontent-%COMP%] {
  background: var(--bg);
}
[data-theme="dark"][_nghost-%COMP%]   .grades-sidebar[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grades-sidebar[_ngcontent-%COMP%], 
[data-theme="dark"][_nghost-%COMP%]   .right-content[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .right-content[_ngcontent-%COMP%], 
[data-theme="dark"][_nghost-%COMP%]   .recoveries-list[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .recoveries-list[_ngcontent-%COMP%] {
  background: var(--surface);
}
[data-theme="dark"][_nghost-%COMP%]   .grades-sidebar[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grades-sidebar[_ngcontent-%COMP%] {
  border-right: 1px solid var(--border);
}
[data-theme="dark"][_nghost-%COMP%]   .loading-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .loading-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-3);
}
[data-theme="dark"][_nghost-%COMP%]   .no-students-message[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-students-message[_ngcontent-%COMP%] {
  color: var(--text-3);
}
[data-theme="dark"][_nghost-%COMP%]   .grade-range-indicator[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-range-indicator[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--brand-50),
      rgba(6, 182, 212, 0.05));
  border: 1px solid var(--brand-100);
  color: var(--brand-500);
}
[data-theme="dark"][_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--surface-2) 0%,
      var(--surface) 100%);
  border-left: 4px solid var(--brand);
  color: var(--text-2);
}
[data-theme="dark"][_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: var(--text-2);
}
[data-theme="dark"][_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  background: var(--bg);
  color: var(--text-1);
  border: 2px solid var(--border-strong);
  color-scheme: dark;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  padding-right: 2.2rem;
}
[data-theme="dark"][_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: var(--surface-2);
  color: var(--text-1);
}
[data-theme="dark"][_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, [data-theme="dark"]   [_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2), 0 0 14px rgba(6, 182, 212, 0.25);
}
[data-theme="dark"][_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {
  border-color: var(--brand);
}
[data-theme="dark"][_nghost-%COMP%]   .classroom-btn[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .classroom-btn[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--brand) 0%,
      var(--brand-400) 100%);
  color: #04141a;
  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);
}
[data-theme="dark"][_nghost-%COMP%]   .classroom-btn[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .classroom-btn[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      var(--brand-600) 0%,
      var(--brand) 100%);
}
[data-theme="dark"][_nghost-%COMP%]   .classroom-btn.selected[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .classroom-btn.selected[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--accent) 0%,
      var(--accent-600) 100%);
  box-shadow: 0 0 16px rgba(168, 85, 247, 0.5);
}
[data-theme="dark"][_nghost-%COMP%]   .recovery-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .recovery-card[_ngcontent-%COMP%] {
  background: var(--surface);
  border: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow: var(--shadow-md);
}
[data-theme="dark"][_nghost-%COMP%]   .recovery-card[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .recovery-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55), 0 0 22px rgba(6, 182, 212, 0.18);
}
[data-theme="dark"][_nghost-%COMP%]   .grade-section[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-section[_ngcontent-%COMP%] {
  background: var(--surface-2);
  color: var(--text-2);
}
[data-theme="dark"][_nghost-%COMP%]   .grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--text-1);
}
[data-theme="dark"][_nghost-%COMP%]   .student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-3);
}
[data-theme="dark"][_nghost-%COMP%]   .student-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .student-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], 
[data-theme="dark"][_nghost-%COMP%]   .grade-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  color: var(--text-2);
}
[data-theme="dark"][_nghost-%COMP%]   .grade-value.grade-green[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-value.grade-green[_ngcontent-%COMP%] {
  background: rgba(52, 211, 153, 0.16);
  color: #6ee7b7;
}
[data-theme="dark"][_nghost-%COMP%]   .grade-value.grade-yellow[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-value.grade-yellow[_ngcontent-%COMP%] {
  background: rgba(251, 191, 36, 0.16);
  color: #fcd34d;
}
[data-theme="dark"][_nghost-%COMP%]   .grade-value.grade-red[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-value.grade-red[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.16);
  color: #fca5a5;
}
[data-theme="dark"][_nghost-%COMP%]   .plan-preview[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-preview[_ngcontent-%COMP%] {
  background: var(--surface-2);
  border: 1px solid var(--border);
}
[data-theme="dark"][_nghost-%COMP%]   .day-badge.day1[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .day-badge.day1[_ngcontent-%COMP%] {
  background: rgba(6, 182, 212, 0.14);
  color: var(--brand-500);
  border: 1px solid rgba(6, 182, 212, 0.3);
}
[data-theme="dark"][_nghost-%COMP%]   .day-badge.day2[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .day-badge.day2[_ngcontent-%COMP%] {
  background: rgba(168, 85, 247, 0.14);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
}
[data-theme="dark"][_nghost-%COMP%]   .plan-topics[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-topics[_ngcontent-%COMP%] {
  color: var(--text-2);
}
[data-theme="dark"][_nghost-%COMP%]   .no-plan[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-plan[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.10);
  border: 1px solid rgba(239, 68, 68, 0.35);
}
[data-theme="dark"][_nghost-%COMP%]   .no-plan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-plan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #fca5a5;
}
[data-theme="dark"][_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%] {
  background: var(--surface-2);
}
[data-theme="dark"][_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%] {
  background: var(--surface);
  color: var(--text-2);
  border-color: var(--border-strong);
}
[data-theme="dark"][_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%]:hover {
  background: var(--brand-50);
  color: var(--brand-500);
}
[data-theme="dark"][_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%]   .subject-btn.active[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .subject-selector[_ngcontent-%COMP%]   .subject-btn.active[_ngcontent-%COMP%] {
  background: var(--brand);
  color: #04141a;
  border-color: var(--brand);
  box-shadow: 0 0 14px rgba(6, 182, 212, 0.4);
}
[data-theme="dark"][_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%] {
  background: var(--surface);
  color: var(--text-2);
}
[data-theme="dark"][_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--text-1);
}
[data-theme="dark"][_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-3);
}
[data-theme="dark"][_nghost-%COMP%]   .placeholder[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .placeholder[_ngcontent-%COMP%] {
  color: var(--text-3);
}
[data-theme="dark"][_nghost-%COMP%]   .spinner[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .spinner[_ngcontent-%COMP%] {
  color: var(--text-3);
}
/*# sourceMappingURL=recoveries.css.map */`], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Recoveries, [{
    type: Component,
    args: [{ selector: "app-recoveries", standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="recoveries-container">
  <div class="page-header">
    <h2>Recuperaciones</h2>
  </div>

  @if (isTeacher() && hasTeacherGradeRange === false) {
    <div class="fullscreen-warning">
      <span class="material-icons">warning</span>
      <span>No tienes materias asignadas. Por favor espere o llame al administrador.</span>
    </div>
  } @else if (isTeacher() && hasTeacherGradeRange === null) {
    <div class="fullscreen-loading">
      <div class="spinner"></div>
      <span style="color: #2c3e50; font-size: 1.1rem; font-weight: 600;">Verificando materias asignadas...</span>
    </div>
  } @else {
    <div class="grades-sidebar">
      @if (teacherGradeRange) {
        <div class="grade-range-indicator">
          Grados {{ teacherGradeRange.min }}\xB0 - {{ teacherGradeRange.max }}\xB0
        </div>
      }
      @if (teacherSubjects && teacherSubjects.length > 1) {
        <div class="subject-selector">
          @for (subject of teacherSubjects; track subject.id) {
            <button
              class="subject-btn"
              [class.selected]="selectedSubject === subject.name"
              (click)="onSubjectChange(subject.name)"
            >
              {{ subject.name }}
            </button>
          }
        </div>
      }
      <div class="grades-row" [class.fade-out]="isFadingOut" [class.fade-in]="isFadingIn">
        @for (grade of grades; track grade) {
          <div class="grade-section">
            <h3>{{ grade }}</h3>
            <div class="classrooms">
              @for (classroom of classrooms; track classroom) {
                <button
                  class="classroom-btn"
                  [class.selected]="selectedGrade === grade && selectedClassroom === classroom"
                  (click)="selectGrade(grade, classroom)"
                >
                  {{ classroom }}
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>

    <div class="right-content">
      @if (selectedGrade && selectedClassroom) {
        <div class="period-selector">
          <label for="period-select">Per\xEDodo:</label>
          <select
            id="period-select"
            name="period"
            [ngModel]="selectedPeriod"
            (ngModelChange)="onPeriodManualChange($event)"
          >
            @for (period of availablePeriods; track period) {
              <option [value]="period">Per\xEDodo {{ period }}</option>
            }
          </select>
        </div>
      }

      @if (isLoading) {
        <div class="loading-indicator">
          <div class="spinner"></div>
          <p>Cargando...</p>
        </div>
      }

      @if (selectedGrade && selectedClassroom && !isLoading) {
        <div class="recoveries-list">
          @if (getDisplayItems().length > 0) {
            <div class="recovery-cards">
              @for (item of getDisplayItems(); track $index) {
                <div class="recovery-card" [class.has-plan]="item.recoveryPlan">
                  <div class="card-header">
                    <div class="student-avatar">
                      {{ getInitials(item.student.surname + ' ' + item.student.name) }}
                    </div>
                    <div class="student-info">
                      <h4>{{ item.student.surname }} {{ item.student.name }}</h4>
                      <p>{{ item.student.grade }} - {{ item.student.classGroup }}</p>
                    </div>
                    <div class="period-badge">
                      P{{ item.period }}
                    </div>
                  </div>

                  <div class="card-body">
                    @if (item.finalGrade > 0) {
                      <div class="grade-info">
                        <span class="label">Nota:</span>
                        <span class="grade-value" [class]="getGradeColor(item.finalGrade)">
                          {{ item.finalGrade.toFixed(1).replace('.', ',') }}
                        </span>
                      </div>
                    }

                    @if (item.recoveryPlan) {
                      <div class="plan-preview">
                        <div class="plan-days">
                          <div class="day-badge day1">D\xEDa 1</div>
                          <div class="day-badge day2">D\xEDa 2</div>
                        </div>
                        <p class="plan-topics">{{ item.recoveryPlan.topics }}</p>
                      </div>
                    } @else {
                      <div class="no-plan">
                        <p>Sin plan de recuperaci\xF3n</p>
                      </div>
                    }
                  </div>

                  <div class="card-footer">
                    @if (item.recoveryPlan) {
                      <button class="view-plan-btn" (click)="viewPlan(item.recoveryPlan)">
                        Ver Plan
                      </button>
                    }
                  </div>
                </div>
              }
            </div>
          } @else {
            <div class="no-students-message">
              <div class="no-students-content">
                <h3>No hay estudiantes reprobados</h3>
                <p>
                  El grado {{ selectedGrade }} - {{ selectedClassroom }} no tiene estudiantes con baja nota en este per\xEDodo.
                </p>
              </div>
            </div>
          }
        </div>
      }
    </div>
  }
</div>

@if (showPlanModal && selectedPlan) {
  <div class="fullscreen-modal-overlay" (click)="closePlanModal()">
    <div class="fullscreen-modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h2>\u{1F4DA} Plan de Estudio</h2>
        <button class="close-btn" (click)="closePlanModal()">\u2715</button>
      </div>

      <div class="modal-body-fullscreen">
        <div class="plan-meta-top">
          <p>
            <strong>Estudiante:</strong> {{ selectedPlan.studentName }}
          </p>
          <p>
            <strong>Grado:</strong> {{ selectedPlan.grade }} | <strong>Grupo:</strong>
            {{ selectedPlan.classGroup }} | <strong>Per\xEDodo:</strong>
            {{ selectedPlan.period }}
          </p>
        </div>

        <div class="plan-content-fullscreen plan-text" id="recovery-plan-content" [innerHTML]="safePlanContent">
        </div>
      </div>

      <div class="modal-footer">
        <button class="print-btn" (click)="printPlan()">
          \u{1F5A8}\uFE0F Imprimir
        </button>
        <button class="close-modal-btn" (click)="closePlanModal()">
          Cerrar
        </button>
      </div>
    </div>
  </div>
}
`, styles: [`/* src/app/recoveries/recoveries.css */
.recoveries-container {
  padding: var(--sp-5);
  background: var(--bg);
  min-height: 100vh;
}
.recoveries-container .page-header h2 {
  color: var(--text-1);
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.grades-sidebar {
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}
.grade-range-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 auto 0.75rem;
  background:
    linear-gradient(
      135deg,
      #eff6ff,
      #dbeafe);
  border: 1px solid #93c5fd;
  border-radius: 999px;
  color: #1e40af;
  font-weight: 700;
  font-size: 0.9rem;
  width: fit-content;
}
.no-subject-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  background:
    linear-gradient(
      135deg,
      #fffbeb,
      #fef3c7);
  border: 1px solid #fcd34d;
  border-radius: 12px;
  color: #92400e;
  font-weight: 600;
  font-size: 0.9rem;
}
.no-subject-message.fullscreen-message {
  margin: 2rem auto;
  max-width: 600px;
  padding: 2rem;
  font-size: 1.05rem;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.fullscreen-warning {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  background:
    linear-gradient(
      135deg,
      #fffbeb,
      #fef3c7);
  border: 1px solid #fcd34d;
  border-radius: 16px;
  color: #92400e;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 60vh;
  margin: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.grades-row {
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  justify-content: center;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.grades-row.fade-out {
  opacity: 0;
  transform: translateY(10px);
}
.grades-row.fade-in {
  animation: fadeInUp 0.3s ease forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.subject-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px 15px;
  background:
    linear-gradient(
      135deg,
      #f0f9ff,
      #e0f2fe);
  border-radius: 8px;
  border-left: 4px solid #0ea5e9;
}
.subject-selector .subject-btn {
  flex: 1;
  padding: 10px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: .95rem;
  font-weight: 600;
  color: #2c3e50;
  background: #fff;
  cursor: pointer;
  transition: all .3s ease;
}
.subject-selector .subject-btn:hover {
  border-color: #0ea5e9;
  background: #f0f9ff;
}
.subject-selector .subject-btn.selected {
  background:
    linear-gradient(
      135deg,
      #0ea5e9,
      #0284c7);
  color: #fff;
  border-color: #0ea5e9;
}
.grade-section {
  min-width: 140px;
  text-align: center;
  background:
    linear-gradient(
      145deg,
      #ffffff 0%,
      #f8f9fa 100%);
  border-radius: 16px;
  padding: 15px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.grade-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
.grade-section h3 {
  color: #2c3e50;
  font-size: 1rem;
  margin: 0 0 12px 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.classrooms {
  display: flex;
  gap: 5px;
  flex-direction: column;
}
.classroom-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background:
    linear-gradient(
      135deg,
      #1b6aeb 0%,
      #257bf3 100%);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  box-shadow: 0 4px 8px rgba(27, 106, 235, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.classroom-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(27, 106, 235, 0.4);
  background:
    linear-gradient(
      135deg,
      #1761c9 0%,
      #1b6aeb 100%);
}
.classroom-btn.selected {
  background:
    linear-gradient(
      135deg,
      #1761c9 0%,
      #1b6aeb 100%);
  box-shadow: 0 6px 12px rgba(27, 106, 235, 0.5);
  transform: scale(1.02);
}
.right-content {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}
.period-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px 15px;
  background:
    linear-gradient(
      135deg,
      #f8f9fa 0%,
      #e9ecef 100%);
  border-radius: 8px;
  border-left: 4px solid #1b6aeb;
}
.period-selector label {
  font-weight: 600;
  color: #2c3e50;
}
.period-selector select {
  padding: 8px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2c3e50;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.period-selector select:hover {
  border-color: #1b6aeb;
}
.period-selector select:focus {
  outline: none;
  border-color: #1b6aeb;
  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.1);
}
.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}
.fullscreen-loading {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 1rem !important;
  min-height: 60vh !important;
  margin: 2rem !important;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(27, 106, 235, 0.2);
  border-top: 4px solid #1b6aeb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-indicator p {
  color: #777;
  font-size: 1.1rem;
}
.recoveries-list {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.no-students-message {
  text-align: center;
  padding: 40px 20px;
}
.no-students-content {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
}
.no-students-content h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}
.no-students-content p {
  color: #7f8c8d;
}
.placeholder {
  text-align: center;
  padding: 60px 20px;
  color: #7f8c8d;
}
.placeholder h3 {
  color: #95a5a6;
}
.recovery-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--sp-4);
}
.recovery-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 4px solid var(--danger);
  border-radius: var(--r-lg);
  padding: var(--sp-5);
  transition: box-shadow .2s ease, border-color .2s ease;
  box-shadow: var(--shadow-sm);
}
.recovery-card:hover {
  box-shadow: var(--shadow-md);
}
.recovery-card.has-plan {
  border-left-color: var(--success);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.student-avatar {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #1b6aeb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.student-info {
  flex: 1;
  min-width: 0;
}
.student-info h4 {
  margin: 0;
  color: #212529;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.student-info p {
  margin: 3px 0 0 0;
  color: #6c757d;
  font-size: 0.85rem;
}
.period-badge {
  background: #1b6aeb;
  color: white;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
}
.card-body {
  margin-bottom: 16px;
}
.grade-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.grade-info .label {
  font-weight: 600;
  color: #495057;
  font-size: 0.85rem;
}
.grade-value {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 4px 10px;
  border-radius: 6px;
}
.grade-value.grade-green {
  background: #d3f9d8;
  color: #2b8a3e;
}
.grade-value.grade-yellow {
  background: #fff3bf;
  color: #f08c00;
}
.grade-value.grade-red {
  background: #ffe3e3;
  color: #c92a2a;
}
.plan-preview {
  background: white;
  padding: 14px;
  border-radius: 10px;
  margin-top: 12px;
  border: 1px solid #e9ecef;
}
.plan-days {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.day-badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.day-badge.day1 {
  background: #e7f5ff;
  color: #1971c2;
}
.day-badge.day2 {
  background: #f3d9fa;
  color: #862e9c;
}
.plan-topics {
  color: #495057;
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.no-plan {
  background: #fff5f5;
  padding: 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ffe3e3;
}
.no-plan p {
  margin: 0;
  color: #c92a2a;
  font-size: 0.875rem;
  font-weight: 500;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
}
.view-plan-btn {
  padding: 10px 18px;
  background: #2f9e44;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}
.view-plan-btn:hover {
  background: #2b8a3e;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(47, 158, 68, 0.25);
}
.fullscreen-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}
.fullscreen-modal-content {
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fafc 100%);
  border-radius: 20px;
  width: 95%;
  max-width: 1400px;
  height: 92vh;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  animation: slideUp 0.4s ease;
  border: 1px solid rgba(27, 106, 235, 0.1);
}
.modal-header {
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #1b6aeb 50%,
      #2563eb 100%);
  color: white;
  padding: 24px 30px;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(27, 106, 235, 0.3);
}
.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}
.modal-body-fullscreen {
  padding: 25px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.close-btn {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.close-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: rotate(90deg);
}
.plan-meta-top {
  background:
    linear-gradient(
      145deg,
      #f8f9fa 0%,
      #e9ecef 100%);
  padding: 15px 18px;
  border-radius: 10px;
  margin-bottom: 16px;
  border-left: 4px solid #1b6aeb;
}
.plan-meta-top p {
  margin: 4px 0;
  color: #2c3e50;
  font-size: 0.95rem;
}
.plan-content-fullscreen {
  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 50%,
      #f1f5f9 100%);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  flex: 1;
  overflow-y: auto;
  box-shadow: inset 0 0 30px rgba(27, 106, 235, 0.03);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.plan-content-fullscreen :global {
  font-family:
    "Segoe UI",
    Arial,
    sans-serif;
  line-height: 1.75;
  color: #1a202c;
  font-size: 15px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.plan-content-fullscreen .plan-text {
  font-family:
    "Segoe UI",
    Arial,
    sans-serif;
  line-height: 1.75;
  color: #1a202c;
  font-size: 15px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.plan-content-fullscreen .plan-text .paragraph-block {
  margin-bottom: 25px;
  clear: both;
  width: 100%;
}
.plan-content-fullscreen .plan-text .paragraph-block p {
  margin-bottom: 15px;
  line-height: 1.9;
  text-align: justify;
  width: 100%;
  box-sizing: border-box;
}
.plan-content-fullscreen .plan-text h2,
.plan-content-fullscreen .plan-text .section-title {
  color: #1e3a8a;
  font-size: 22px;
  font-weight: 700;
  margin: 35px 0 20px 0;
  padding: 16px 24px;
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #3b82f6 100%);
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.25);
  border-left: none;
}
.plan-content-fullscreen .plan-text h3,
.plan-content-fullscreen .plan-text .subsection-title {
  color: #1e40af;
  font-size: 18px;
  margin: 25px 0 15px 0;
  font-weight: 600;
  padding: 12px 20px;
  background:
    linear-gradient(
      135deg,
      #eff6ff 0%,
      #dbeafe 100%);
  border-radius: 8px;
  border-left: 5px solid #3b82f6;
  display: block;
}
.plan-content-fullscreen .plan-text h4 {
  color: #334155;
  font-size: 16px;
  margin: 20px 0 12px 0;
  font-weight: 600;
  background: #f1f5f9;
  padding: 10px 16px;
  border-radius: 6px;
  border-left: 4px solid #64748b;
}
.plan-content-fullscreen .plan-text strong {
  color: #1b6aeb;
  font-weight: 700;
}
.plan-content-fullscreen .plan-text em {
  color: #555;
  font-style: italic;
}
.plan-content-fullscreen .plan-text .video-section {
  margin: 20px 0;
  padding: 0;
}
.plan-content-fullscreen .plan-text .video-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}
.plan-content-fullscreen .plan-text .video-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.15);
  border-color: #0ea5e9;
}
.plan-content-fullscreen .plan-text .video-icon {
  width: 40px;
  height: 40px;
  background:
    linear-gradient(
      135deg,
      #ef4444 0%,
      #dc2626 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 14px;
  flex-shrink: 0;
}
.plan-content-fullscreen .plan-text .video-content {
  flex: 1;
}
.plan-content-fullscreen .plan-text .video-content .video-link {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1e40af;
  text-decoration: none;
  margin-bottom: 4px;
  transition: color 0.2s ease;
}
.plan-content-fullscreen .plan-text .video-content .video-link:hover {
  color: #3b82f6;
  text-decoration: underline;
}
.plan-content-fullscreen .plan-text .video-source {
  display: inline-block;
  font-size: 11px;
  color: #64748b;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 4px;
}
.plan-content-fullscreen .plan-text .video-unavailable {
  display: flex;
  align-items: center;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 12px;
  color: #991b1b;
}
.plan-content-fullscreen .plan-text .video-unavailable-icon {
  width: 40px;
  height: 40px;
  background: #fecaca;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #991b1b;
  font-size: 14px;
  margin-right: 14px;
  flex-shrink: 0;
}
.plan-content-fullscreen .plan-text .video-unavailable-content {
  flex: 1;
}
.plan-content-fullscreen .plan-text .video-unavailable-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #991b1b;
}
.plan-content-fullscreen .plan-text .video-unavailable-message {
  font-size: 12px;
  color: #b91c1c;
}
.plan-content-fullscreen .plan-text .video-unavailable-url {
  font-size: 11px;
  color: #dc2626;
  word-break: break-all;
  margin-top: 2px;
}
.plan-content-fullscreen .plan-text .no-videos-message {
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 10px;
  color: #64748b;
  border: 2px dashed #cbd5e1;
  margin: 20px 0;
}
.plan-content-fullscreen .plan-text .no-videos-message .no-videos-icon {
  font-size: 24px;
  margin-bottom: 10px;
}
.plan-content-fullscreen .plan-text .no-videos-message p {
  margin: 5px 0;
  font-size: 14px;
}
.plan-content-fullscreen .plan-text .video-status-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
}
.plan-content-fullscreen .plan-text .video-status-badge.available {
  background: #dcfce7;
  color: #166534;
}
.plan-content-fullscreen .plan-text .video-status-badge.unavailable {
  background: #fef2f2;
  color: #991b1b;
}
.plan-content-fullscreen .plan-text .video-status-badge.checking {
  background: #fef3c7;
  color: #92400e;
}
.plan-content-fullscreen .plan-text .ai-section-header {
  margin: 30px 0 20px 0;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 700;
}
.plan-content-fullscreen .plan-text .ai-h2 {
  background:
    linear-gradient(
      135deg,
      #1e3a8a 0%,
      #1e40af 50%,
      #2563eb 100%);
  color: white;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.25);
}
.plan-content-fullscreen .plan-text .ai-h3 {
  background:
    linear-gradient(
      135deg,
      #dbeafe 0%,
      #bfdbfe 100%);
  color: #1e40af;
  font-size: 16px;
  border-left: 4px solid #2563eb;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}
.plan-content-fullscreen .plan-text .ai-h4 {
  background: #f1f5f9;
  color: #334155;
  font-size: 14px;
  border-left: 3px solid #64748b;
}
.plan-content-fullscreen .plan-text .table-wrapper {
  margin: 20px 0;
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
}
.plan-content-fullscreen .plan-text .ai-list {
  margin: 15px 0 20px 25px;
  padding-left: 10px;
}
.plan-content-fullscreen .plan-text .ai-list li {
  margin-bottom: 12px;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.plan-content-fullscreen .plan-text ul {
  margin: 15px 0 20px 25px;
  padding-left: 10px;
}
.plan-content-fullscreen .plan-text ol {
  list-style-type: decimal;
  margin: 15px 0 20px 25px;
  padding-left: 15px;
}
.plan-content-fullscreen .plan-text ol li {
  margin-bottom: 20px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.plan-content-fullscreen .plan-text ol li:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.1);
}
.plan-content-fullscreen .plan-text li {
  margin-bottom: 10px;
  line-height: 1.7;
}
.plan-content-fullscreen .plan-text li::marker {
  color: #3b82f6;
  font-weight: 600;
}
.plan-content-fullscreen .plan-text .check {
  color: #22c55e;
  font-weight: bold;
  margin-right: 6px;
}
.plan-content-fullscreen .plan-text .ai-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 14px;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
}
.plan-content-fullscreen .plan-text .ai-table th {
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #2563eb 50%,
      #1d4ed8 100%);
  color: white;
  padding: 16px 14px;
  text-align: left;
  font-weight: 700;
  border: 1px solid #1e3a8a;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.8px;
}
.plan-content-fullscreen .plan-text .ai-table td {
  padding: 16px 14px;
  border: 1px solid #e2e8f0;
  background: white;
  transition: all 0.2s;
}
.plan-content-fullscreen .plan-text .ai-table tr:nth-child(even) td {
  background: #f8fafc;
}
.plan-content-fullscreen .plan-text .ai-table tr:hover td {
  background:
    linear-gradient(
      90deg,
      #eff6ff,
      #dbeafe);
}
.plan-content-fullscreen .ai-table {
  font-size: 15px;
}
.plan-content-fullscreen .ai-table td {
  max-width: 300px;
}
.plan-meta {
  text-align: center;
  color: #6c757d;
  font-size: 0.8rem;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}
.modal-footer {
  padding: 20px 25px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.print-btn {
  padding: 12px 24px;
  background:
    linear-gradient(
      135deg,
      #27ae60 0%,
      #1e8449 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}
.print-btn:hover {
  background: #219a52;
  transform: translateY(-2px);
}
.close-modal-btn {
  padding: 12px 24px;
  background: #95a5a6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}
.close-modal-btn:hover {
  background: #7f8c8d;
}
.plan-text .math-large {
  font-size: 2.5em;
  color: #1e40af;
  font-weight: bold;
  display: inline-block;
  padding: 4px 8px;
  vertical-align: middle;
  line-height: 1.6;
}
.plan-text .math-large-block {
  font-size: 2.2em;
  color: #1e40af;
  font-weight: bold;
  display: block;
  padding: 16px 24px;
  margin: 16px 0;
  background: #f0f4ff;
  border-radius: 12px;
  border: 2px solid #c7d2fe;
  text-align: center;
  line-height: 1.8;
}
.plan-text .katex {
  font-size: 2.8em;
  color: #1e3a8a;
  line-height: 1.4;
  display: inline-block;
  white-space: nowrap;
}
.plan-text .katex-display {
  margin: 20px auto;
  padding: 20px;
  background: #eff6ff;
  border-radius: 12px;
  text-align: center;
}
.plan-text .katex-display .katex {
  font-size: 1em;
  display: inline-block;
  white-space: normal;
}
.plan-text span:empty + .katex {
  display: none;
}
.plan-text .katex-display {
  margin: 30px auto;
  padding: 24px 30px;
  background: #fefefe;
  border-radius: 12px;
  overflow-x: auto;
  text-align: center;
  border: 2px solid #e0e7ff;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1);
  display: block;
}
.plan-text .katex-display .katex {
  font-size: 3.2em;
  display: inline-block;
  white-space: normal;
}
.plan-text .katex .frac-line {
  border-top-width: 3px;
}
.plan-text .katex .mfrac {
  vertical-align: middle;
  margin: 0 2px;
}
.plan-text .katex .mfrac > span > span {
  padding: 0 4px;
}
.plan-text .katex .mord.ros {
  font-size: 0.7em;
  top: -0.4em;
}
.plan-text .katex .mord.uos {
  font-size: 0.7em;
  top: -0.8em;
}
.plan-text mjx-container {
  margin: 0;
  font-size: 2.5em;
}
.plan-text mjx-container[jax=CHTML] {
  display: inline-block;
  margin: 0 4px;
  vertical-align: middle;
}
.plan-text mjx-container[jax=CHTML][display=true] {
  display: block;
  text-align: center;
  margin: 30px auto;
}
.plan-text .katex-display::before,
.plan-text .katex-display::after {
  content: "";
  display: table;
}
@media print {
  .ai-table {
    page-break-inside: avoid;
  }
  .ai-table th {
    background: #eee !important;
    color: #000 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .image-container {
    page-break-inside: avoid;
  }
}
details {
  display: block;
}
details > summary {
  cursor: pointer;
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
details[open] > summary {
  margin-bottom: 8px;
}
.recoveries-container button:focus-visible,
.recoveries-container select:focus-visible,
.recoveries-container textarea:focus-visible,
.recoveries-container input:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}
@media (max-width: 768px) {
  .recoveries-container {
    padding: var(--sp-4);
  }
  .modal-footer {
    flex-direction: column-reverse;
  }
  .modal-footer .print-btn,
  .modal-footer .close-modal-btn {
    width: 100%;
  }
  .recovery-card .card-footer .view-plan-btn {
    width: 100%;
  }
}
:host-context([data-theme="dark"]) .recoveries-container {
  background: var(--bg);
}
:host-context([data-theme="dark"]) .grades-sidebar,
:host-context([data-theme="dark"]) .right-content,
:host-context([data-theme="dark"]) .recoveries-list {
  background: var(--surface);
}
:host-context([data-theme="dark"]) .grades-sidebar {
  border-right: 1px solid var(--border);
}
:host-context([data-theme="dark"]) .loading-indicator p {
  color: var(--text-3);
}
:host-context([data-theme="dark"]) .no-students-message {
  color: var(--text-3);
}
:host-context([data-theme="dark"]) .grade-range-indicator {
  background:
    linear-gradient(
      135deg,
      var(--brand-50),
      rgba(6, 182, 212, 0.05));
  border: 1px solid var(--brand-100);
  color: var(--brand-500);
}
:host-context([data-theme="dark"]) .period-selector {
  background:
    linear-gradient(
      135deg,
      var(--surface-2) 0%,
      var(--surface) 100%);
  border-left: 4px solid var(--brand);
  color: var(--text-2);
}
:host-context([data-theme="dark"]) .period-selector label {
  color: var(--text-2);
}
:host-context([data-theme="dark"]) .period-selector select {
  background: var(--bg);
  color: var(--text-1);
  border: 2px solid var(--border-strong);
  color-scheme: dark;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  padding-right: 2.2rem;
}
:host-context([data-theme="dark"]) .period-selector select option {
  background: var(--surface-2);
  color: var(--text-1);
}
:host-context([data-theme="dark"]) .period-selector select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2), 0 0 14px rgba(6, 182, 212, 0.25);
}
:host-context([data-theme="dark"]) .period-selector select:hover {
  border-color: var(--brand);
}
:host-context([data-theme="dark"]) .classroom-btn {
  background:
    linear-gradient(
      135deg,
      var(--brand) 0%,
      var(--brand-400) 100%);
  color: #04141a;
  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);
}
:host-context([data-theme="dark"]) .classroom-btn:hover {
  background:
    linear-gradient(
      135deg,
      var(--brand-600) 0%,
      var(--brand) 100%);
}
:host-context([data-theme="dark"]) .classroom-btn.selected {
  background:
    linear-gradient(
      135deg,
      var(--accent) 0%,
      var(--accent-600) 100%);
  box-shadow: 0 0 16px rgba(168, 85, 247, 0.5);
}
:host-context([data-theme="dark"]) .recovery-card {
  background: var(--surface);
  border: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow: var(--shadow-md);
}
:host-context([data-theme="dark"]) .recovery-card:hover {
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55), 0 0 22px rgba(6, 182, 212, 0.18);
}
:host-context([data-theme="dark"]) .grade-section {
  background: var(--surface-2);
  color: var(--text-2);
}
:host-context([data-theme="dark"]) .grade-section h3 {
  color: var(--text-1);
}
:host-context([data-theme="dark"]) .student-info p {
  color: var(--text-3);
}
:host-context([data-theme="dark"]) .student-info strong,
:host-context([data-theme="dark"]) .grade-info .label {
  color: var(--text-2);
}
:host-context([data-theme="dark"]) .grade-value.grade-green {
  background: rgba(52, 211, 153, 0.16);
  color: #6ee7b7;
}
:host-context([data-theme="dark"]) .grade-value.grade-yellow {
  background: rgba(251, 191, 36, 0.16);
  color: #fcd34d;
}
:host-context([data-theme="dark"]) .grade-value.grade-red {
  background: rgba(239, 68, 68, 0.16);
  color: #fca5a5;
}
:host-context([data-theme="dark"]) .plan-preview {
  background: var(--surface-2);
  border: 1px solid var(--border);
}
:host-context([data-theme="dark"]) .day-badge.day1 {
  background: rgba(6, 182, 212, 0.14);
  color: var(--brand-500);
  border: 1px solid rgba(6, 182, 212, 0.3);
}
:host-context([data-theme="dark"]) .day-badge.day2 {
  background: rgba(168, 85, 247, 0.14);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
}
:host-context([data-theme="dark"]) .plan-topics {
  color: var(--text-2);
}
:host-context([data-theme="dark"]) .no-plan {
  background: rgba(239, 68, 68, 0.10);
  border: 1px solid rgba(239, 68, 68, 0.35);
}
:host-context([data-theme="dark"]) .no-plan p {
  color: #fca5a5;
}
:host-context([data-theme="dark"]) .subject-selector {
  background: var(--surface-2);
}
:host-context([data-theme="dark"]) .subject-selector .subject-btn {
  background: var(--surface);
  color: var(--text-2);
  border-color: var(--border-strong);
}
:host-context([data-theme="dark"]) .subject-selector .subject-btn:hover {
  background: var(--brand-50);
  color: var(--brand-500);
}
:host-context([data-theme="dark"]) .subject-selector .subject-btn.active {
  background: var(--brand);
  color: #04141a;
  border-color: var(--brand);
  box-shadow: 0 0 14px rgba(6, 182, 212, 0.4);
}
:host-context([data-theme="dark"]) .no-students-content {
  background: var(--surface);
  color: var(--text-2);
}
:host-context([data-theme="dark"]) .no-students-content h3 {
  color: var(--text-1);
}
:host-context([data-theme="dark"]) .no-students-content p {
  color: var(--text-3);
}
:host-context([data-theme="dark"]) .placeholder {
  color: var(--text-3);
}
:host-context([data-theme="dark"]) .spinner {
  color: var(--text-3);
}
/*# sourceMappingURL=recoveries.css.map */
`] }]
  }], () => [{ type: HttpClient }, { type: ChangeDetectorRef }, { type: NgZone }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Recoveries, { className: "Recoveries", filePath: "app/recoveries/recoveries.ts", lineNumber: 61 });
})();
export {
  Recoveries
};
//# sourceMappingURL=chunk-VDB7F35S.js.map
