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
  DefaultValueAccessor,
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
  DecimalPipe,
  HostListener,
  HttpClient,
  NgZone,
  __async,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/grades/grades.ts
var _forTrack0 = ($index, $item) => $item.id;
function Grades_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No tienes materias asignadas. Por favor espere o llame al administrador.");
    \u0275\u0275elementEnd()();
  }
}
function Grades_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "Verificando materias asignadas...");
    \u0275\u0275elementEnd()();
  }
}
function Grades_Conditional_6_Conditional_1_Template(rf, ctx) {
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
function Grades_Conditional_6_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function Grades_Conditional_6_Conditional_2_For_2_Template_button_click_0_listener() {
      const subject_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSubjectChange(subject_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.selectedSubjectId === subject_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", subject_r3.name, "", subject_r3.level ? " (" + subject_r3.level + ")" : "", " ");
  }
}
function Grades_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, Grades_Conditional_6_Conditional_2_For_2_Template, 2, 4, "button", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.teacherSubjects);
  }
}
function Grades_Conditional_6_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function Grades_Conditional_6_For_5_For_5_Template_button_click_0_listener() {
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
function Grades_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, Grades_Conditional_6_For_5_For_5_Template, 2, 3, "button", 20, \u0275\u0275repeaterTrackByIdentity);
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
function Grades_Conditional_6_Conditional_7_For_5_Template(rf, ctx) {
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
function Grades_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 22);
    \u0275\u0275text(2, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 23);
    \u0275\u0275listener("ngModelChange", function Grades_Conditional_6_Conditional_7_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPeriodManualChange($event));
    });
    \u0275\u0275repeaterCreate(4, Grades_Conditional_6_Conditional_7_For_5_Template, 2, 2, "option", 24, \u0275\u0275repeaterTrackByIdentity);
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
function Grades_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando notas...");
    \u0275\u0275elementEnd()();
  }
}
function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Conditional_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const student_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openStudyPlanModal(student_r10));
    });
    \u0275\u0275text(1, "\u{1F4DA}");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("has-plan", ctx_r0.hasRecoveryPlan(student_r10.id, ctx_r0.selectedPeriod));
  }
}
function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 58)(6, "input", 59);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_6_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 1, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_6_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 1, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_6_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 1, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_6_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 1));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 58)(8, "input", 60);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_8_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 2, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_8_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 2, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_8_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 2, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_8_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 2));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 58)(10, "input", 61);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_10_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 3, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_10_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 3, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_10_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 3, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_10_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 3));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 58)(12, "input", 62);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_12_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 4, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_12_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 4, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_12_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 4, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_12_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 4));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 58)(14, "input", 63);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_14_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 5, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_14_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 5, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_14_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 5, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_14_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 5));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 58)(16, "input", 64);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_16_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 6, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_16_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 6, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_16_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 6, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_16_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 6));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 58)(18, "input", 65);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_18_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 7, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_18_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 7, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_18_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 7, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_18_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 7));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 58)(20, "input", 66);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_20_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 9, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_20_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 9, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_20_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 9, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_20_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 9));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 58)(22, "input", 67);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_22_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 10, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_22_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 10, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_22_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 10, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_22_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 10));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 68);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 58)(26, "input", 69);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_26_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeChange(student_r10.id, 8, $event));
    })("click", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_click_26_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeClick(student_r10.id, 8, $event));
    })("blur", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_blur_26_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onGradeBlur(student_r10.id, 8, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_26_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 8));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 68);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 70);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 71)(32, "input", 72);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_32_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onJIntegChange(student_r10.id, $event));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_32_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 8));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td", 73)(34, "select", 74);
    \u0275\u0275listener("change", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_select_change_34_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCompSocialChange(student_r10.id, $event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_select_focus_34_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 8));
    });
    \u0275\u0275elementStart(35, "option", 75);
    \u0275\u0275text(36, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 76);
    \u0275\u0275text(38, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 77);
    \u0275\u0275text(40, "E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 78);
    \u0275\u0275text(42, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 79);
    \u0275\u0275text(44, "I");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "span", 80);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "td", 58)(48, "input", 81);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_48_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onRecoveryWrittenChange(student_r10.id, $event));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_48_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_48_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 8));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "td", 58)(50, "input", 82);
    \u0275\u0275listener("input", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_input_50_listener($event) {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onRecoveryOralChange(student_r10.id, $event));
    })("keydown", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_keydown_50_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleKeydown($event));
    })("focus", function Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template_input_focus_50_listener() {
      const student_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCellFocus(student_r10.id, 8));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td", 68);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td", 83);
    \u0275\u0275conditionalCreate(54, Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Conditional_54_Template, 2, 2, "button", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_68_0;
    let tmp_72_0;
    let tmp_76_0;
    let tmp_79_0;
    const student_r10 = ctx.$implicit;
    const \u0275$index_196_r12 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("alt", \u0275$index_196_r12 % 2 === 1)("failing", ctx_r0.needsRecovery(student_r10.id))("losing", ctx_r0.isLosing(student_r10.id))("excellent", ctx_r0.hasExcellentGrade(student_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_196_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r10.surname, " ", student_r10.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 1)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-1")("name", "grade-" + student_r10.id + "-1")("value", ctx_r0.getGradeDisplay(student_r10.id, 1));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 2)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-2")("name", "grade-" + student_r10.id + "-2")("value", ctx_r0.getGradeDisplay(student_r10.id, 2));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 3)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-3")("name", "grade-" + student_r10.id + "-3")("value", ctx_r0.getGradeDisplay(student_r10.id, 3));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 4)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-4")("name", "grade-" + student_r10.id + "-4")("value", ctx_r0.getGradeDisplay(student_r10.id, 4));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 5)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-5")("name", "grade-" + student_r10.id + "-5")("value", ctx_r0.getGradeDisplay(student_r10.id, 5));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 6)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-6")("name", "grade-" + student_r10.id + "-6")("value", ctx_r0.getGradeDisplay(student_r10.id, 6));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 7)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-7")("name", "grade-" + student_r10.id + "-7")("value", ctx_r0.getGradeDisplay(student_r10.id, 7));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 9)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-9")("name", "grade-" + student_r10.id + "-9")("value", ctx_r0.getGradeDisplay(student_r10.id, 9));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 10)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-10")("name", "grade-" + student_r10.id + "-10")("value", ctx_r0.getGradeDisplay(student_r10.id, 10));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.get80Color(student_r10.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.get80Percent(student_r10.id));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getGradeColor(ctx_r0.getGrade(student_r10.id, 8)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "grade-input-" + student_r10.id + "-8")("name", "grade-" + student_r10.id + "-8")("value", ctx_r0.getGradeDisplay(student_r10.id, 8));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.get20Color(student_r10.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.get20Percent(student_r10.id));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getFinalColor(student_r10.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFinalWithRecovery(student_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "recovery-jinteg-" + student_r10.id)("name", "recovery-jinteg-" + student_r10.id)("value", ((tmp_68_0 = ctx_r0.getCurrentSubjectRecoveryData(student_r10.id)) == null ? null : tmp_68_0.jInteg) || "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getCompSocialColor(student_r10.id));
    \u0275\u0275advance();
    \u0275\u0275property("id", "recovery-compsocial-" + student_r10.id)("name", "recovery-compsocial-" + student_r10.id)("ngModel", ((tmp_72_0 = ctx_r0.getCurrentSubjectRecoveryData(student_r10.id)) == null ? null : tmp_72_0.compSocial) || "");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.getCompSocialScaleLabel(student_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "recup-escrita-" + student_r10.id)("name", "recup-escrita-" + student_r10.id)("value", (((tmp_76_0 = ctx_r0.getCurrentSubjectRecoveryData(student_r10.id)) == null ? null : tmp_76_0.written) ?? "").toString().replace(".", ","));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "recup-oral-" + student_r10.id)("name", "recup-oral-" + student_r10.id)("value", (((tmp_79_0 = ctx_r0.getCurrentSubjectRecoveryData(student_r10.id)) == null ? null : tmp_79_0.oral) ?? "").toString().replace(".", ","));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getNotaRecup(student_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.needsRecovery(student_r10.id) || ctx_r0.hasRecoveryPlan(student_r10.id, ctx_r0.selectedPeriod) ? 54 : -1);
  }
}
function Grades_Conditional_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, "CORPORACION COLEGIO TRINITARIO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4, "LISTADO DE NOTAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 30)(7, "span", 31);
    \u0275\u0275text(8, "PERIODO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 31);
    \u0275\u0275text(12, "\xC1REA/ASIGNATURA:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "span", 31);
    \u0275\u0275text(17, "GRADO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 31);
    \u0275\u0275text(21, "GRUPO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 32);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 31);
    \u0275\u0275text(25, "A\xD1O:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 32);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 33)(29, "table", 34)(30, "thead")(31, "tr")(32, "th", 35);
    \u0275\u0275text(33, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 36);
    \u0275\u0275text(35, "ESTUDIANTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 37);
    \u0275\u0275text(37, "ACT1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 38);
    \u0275\u0275text(39, "ACT2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 39);
    \u0275\u0275text(41, "ACT3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 40);
    \u0275\u0275text(43, "ACT4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 41);
    \u0275\u0275text(45, "ACT5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 42);
    \u0275\u0275text(47, "ACT6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 43);
    \u0275\u0275text(49, "ACT7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 44);
    \u0275\u0275text(51, "Auto.Eval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 45);
    \u0275\u0275text(53, "Prom.Parc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 46);
    \u0275\u0275text(55, "80%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 47);
    \u0275\u0275text(57, "Eval.Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 46);
    \u0275\u0275text(59, "20%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 48);
    \u0275\u0275text(61, "N.FINAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th", 49);
    \u0275\u0275text(63, "J.INTEG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th", 50);
    \u0275\u0275text(65, "COMP SOCIAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th", 51);
    \u0275\u0275text(67, "Recup.Esc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th", 52);
    \u0275\u0275text(69, "Recup.Oral");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th", 53);
    \u0275\u0275text(71, "Nota.Recup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th", 54);
    \u0275\u0275text(73, "ACCI\xD3N");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "tbody");
    \u0275\u0275repeaterCreate(75, Grades_Conditional_6_Conditional_9_Conditional_1_For_76_Template, 55, 87, "tr", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.selectedPeriod);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedSubjectLabel);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedGrade);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedClassroom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.currentYear);
    \u0275\u0275advance(48);
    \u0275\u0275repeater(ctx_r0.students);
  }
}
function Grades_Conditional_6_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 86)(2, "h3");
    \u0275\u0275text(3, "No hay estudiantes en este sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("El grado ", ctx_r0.selectedGrade, " - ", ctx_r0.selectedClassroom, " no tiene estudiantes registrados.");
  }
}
function Grades_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, Grades_Conditional_6_Conditional_9_Conditional_1_Template, 77, 5);
    \u0275\u0275conditionalCreate(2, Grades_Conditional_6_Conditional_9_Conditional_2_Template, 6, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.students.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.students.length === 0 ? 2 : -1);
  }
}
function Grades_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, Grades_Conditional_6_Conditional_1_Template, 2, 2, "div", 9);
    \u0275\u0275conditionalCreate(2, Grades_Conditional_6_Conditional_2_Template, 3, 0, "div", 10);
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275repeaterCreate(4, Grades_Conditional_6_For_5_Template, 6, 1, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275conditionalCreate(7, Grades_Conditional_6_Conditional_7_Template, 6, 1, "div", 14);
    \u0275\u0275conditionalCreate(8, Grades_Conditional_6_Conditional_8_Template, 4, 0, "div", 15);
    \u0275\u0275conditionalCreate(9, Grades_Conditional_6_Conditional_9_Template, 3, 2, "div", 16);
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
function Grades_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "p")(2, "strong");
    \u0275\u0275text(3, "Estudiante:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Grado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Nota Actual:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 95);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedStudentForPlan.surname, " ", ctx_r0.selectedStudentForPlan.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedGrade, " | ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPeriod);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.getFinalColor(ctx_r0.selectedStudentForPlan.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getFinalWithRecovery(ctx_r0.selectedStudentForPlan.id));
  }
}
function Grades_Conditional_7_Conditional_9_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "img", 107);
    \u0275\u0275elementStart(2, "button", 108);
    \u0275\u0275listener("click", function Grades_Conditional_7_Conditional_9_Conditional_15_For_2_Template_button_click_2_listener() {
      const $index_r16 = \u0275\u0275restoreView(_r15).$index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.removeImage($index_r16));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r17.preview, \u0275\u0275sanitizeUrl);
  }
}
function Grades_Conditional_7_Conditional_9_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275repeaterCreate(1, Grades_Conditional_7_Conditional_9_Conditional_15_For_2_Template, 4, 1, "div", 106, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.uploadedImages);
  }
}
function Grades_Conditional_7_Conditional_9_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "div", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 111);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 3, ctx_r0.progressPercent, "1.0-0"), "%");
  }
}
function Grades_Conditional_7_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 Plan Generado ");
  }
}
function Grades_Conditional_7_Conditional_9_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F916} Generar Plan con IA ");
  }
}
function Grades_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "strong");
    \u0275\u0275text(2, "Plan profesional completo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "El plan incluir\xE1 objetivo, cronograma de un solo d\xEDa (D\xCDA 1), recursos reales, ejercicios pr\xE1cticos, consejos y evaluaci\xF3n final. No se interrumpir\xE1 a la mitad.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 97)(6, "label", 98);
    \u0275\u0275text(7, "\u{1F4DD} Temas que debe estudiar el estudiante:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 99);
    \u0275\u0275twoWayListener("ngModelChange", function Grades_Conditional_7_Conditional_9_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.studyPlanTopics, $event) || (ctx_r0.studyPlanTopics = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 100)(10, "label", 101)(11, "span", 102);
    \u0275\u0275text(12, "\u{1F4F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Adjuntar imagen (opcional) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 103);
    \u0275\u0275listener("change", function Grades_Conditional_7_Conditional_9_Template_input_change_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Grades_Conditional_7_Conditional_9_Conditional_15_Template, 3, 0, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 105);
    \u0275\u0275listener("click", function Grades_Conditional_7_Conditional_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generateStudyPlan());
    });
    \u0275\u0275conditionalCreate(17, Grades_Conditional_7_Conditional_9_Conditional_17_Template, 5, 6)(18, Grades_Conditional_7_Conditional_9_Conditional_18_Template, 1, 0)(19, Grades_Conditional_7_Conditional_9_Conditional_19_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.studyPlanTopics);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.uploadedImages.length > 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("generated", ctx_r0.planGenerated)("generating", ctx_r0.isGeneratingPlan);
    \u0275\u0275property("disabled", !ctx_r0.studyPlanTopics.trim() || ctx_r0.isGeneratingPlan);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isGeneratingPlan ? 17 : ctx_r0.planGenerated ? 18 : 19);
  }
}
function Grades_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "h3");
    \u0275\u0275text(2, "Plan de Estudio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fade-in", ctx_r0.planGenerated);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r0.studyPlanContentSafe, \u0275\u0275sanitizeHtml);
  }
}
function Grades_Conditional_7_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function Grades_Conditional_7_Conditional_11_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeStudyPlanModal());
    });
    \u0275\u0275elementStart(1, "span", 118);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Guardado ");
    \u0275\u0275elementEnd();
  }
}
function Grades_Conditional_7_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function Grades_Conditional_7_Conditional_11_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.savePlan());
    });
    \u0275\u0275text(1, "\u{1F4BE} Guardar");
    \u0275\u0275elementEnd();
  }
}
function Grades_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "button", 114);
    \u0275\u0275listener("click", function Grades_Conditional_7_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.printStudyPlan());
    });
    \u0275\u0275text(2, "\u{1F5A8}\uFE0F Imprimir Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, Grades_Conditional_7_Conditional_11_Conditional_3_Template, 4, 0, "button", 115)(4, Grades_Conditional_7_Conditional_11_Conditional_4_Template, 2, 0, "button", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.planSaved ? 3 : 4);
  }
}
function Grades_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275listener("click", function Grades_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStudyPlanModal());
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function Grades_Conditional_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 89)(3, "h2");
    \u0275\u0275text(4, "\u{1F4DA} Plan de Estudio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 90);
    \u0275\u0275listener("click", function Grades_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStudyPlanModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 91);
    \u0275\u0275conditionalCreate(8, Grades_Conditional_7_Conditional_8_Template, 17, 7, "div", 92);
    \u0275\u0275conditionalCreate(9, Grades_Conditional_7_Conditional_9_Template, 20, 8);
    \u0275\u0275conditionalCreate(10, Grades_Conditional_7_Conditional_10_Template, 4, 3, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Grades_Conditional_7_Conditional_11_Template, 5, 1, "div", 94);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.selectedStudentForPlan ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.planGenerated ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.studyPlanContent && !ctx_r0.isGeneratingPlan ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.studyPlanContent && ctx_r0.planGenerated ? 11 : -1);
  }
}
var Grades = class _Grades {
  http;
  cdr;
  ngZone;
  allGrades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  grades = [...this.allGrades];
  classrooms = ["Salon A", "Salon B"];
  isFadingOut = false;
  isFadingIn = false;
  teacherGradeRange = null;
  // Nombres de las notas (8 columnas: 7 ACT + 1 Eval.Period)
  noteNames = ["ACT1", "ACT2", "ACT3", "ACT4", "ACT5", "ACT6", "ACT7", "Eval.Period", "Auto.Eval", "Prom.Parc"];
  selectedGrade = null;
  selectedClassroom = null;
  selectedPeriod = 1;
  availablePeriods = [1];
  // Current year (dynamic)
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Check if there's an active period
  hasActivePeriod = false;
  students = [];
  // Loading state
  isLoading = false;
  showLoadingScreen = false;
  // gradesData[studentId][noteIndex] = gradeValue
  gradesData = {};
  // Recovery data por materia y periodo: recoveryData[studentId]["subjectName|period"]
  recoveryData = {};
  // Track focused cell for keyboard navigation
  focusedCell = null;
  hasTeacherGradeRange = null;
  // null = checking, false = no subjects, true = has subjects
  teacherSubjectName = null;
  teacherSubjects = [];
  selectedSubject = null;
  selectedSubjectId = null;
  // AI Study Plan modal
  showStudyPlanModal = false;
  studyPlanTopics = "";
  studyPlanContent = "";
  selectedStudentForPlan = null;
  isGeneratingPlan = false;
  extractedImages = [];
  uploadedImages = [];
  // Progress bar for plan generation
  progressPercent = 0;
  showProgressBar = false;
  planGenerated = false;
  planSaved = false;
  // Track generated recovery plans for students
  generatedPlans = {};
  // ----- Cola de guardado para no perder notas al cambiar de salón/período o recargar -----
  gradeSaveQueue = /* @__PURE__ */ new Map();
  gradeSaveTimers = /* @__PURE__ */ new Map();
  gradeSaveInFlight = /* @__PURE__ */ new Set();
  gradeSaveLast = /* @__PURE__ */ new Map();
  recoverySaveTimers = /* @__PURE__ */ new Map();
  recoverySaveInFlight = /* @__PURE__ */ new Set();
  recoveryLast = /* @__PURE__ */ new Map();
  flushWaiters = [];
  // API Key for Groq AI
  // La generación de planes de estudio se delega al backend (proxy a NVIDIA),
  // que es quien guarda la API key de forma segura.
  AI_PROXY_BASE = "http://localhost:8080/api/ai";
  gradesUpdateService = inject(GradesUpdateService);
  realtimeService = inject(GlobalRealtimeService);
  authService = inject(AuthService);
  constructor(http, cdr, ngZone) {
    this.http = http;
    this.cdr = cdr;
    this.ngZone = ngZone;
  }
  sanitizer = inject(DomSanitizer);
  studyPlanContentSafe = null;
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
    if (user?.id && user?.role && (user.role.name || user.role) === "TEACHER") {
      return Number(user.id);
    }
    return null;
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
    this.loadExistingRecoveryPlans();
    document.addEventListener("keydown", this.handleKeydown.bind(this));
    this.periodsSubscription = this.realtimeService.periods$.subscribe((periods) => {
      console.log("Periodos recibidos (realtime):", periods);
      const unlockedPeriods = periods.filter((p) => p.isUnlocked).map((p) => p.periodNumber);
      console.log("Periodos desbloqueados:", unlockedPeriods);
      const newPeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
      console.log("Nuevos periodos disponibles:", newPeriods);
      if (!this.arraysEqual(this.availablePeriods, newPeriods)) {
        this.availablePeriods = newPeriods;
        this.showPeriodChangeNotification();
        if (!this.availablePeriods.includes(this.selectedPeriod)) {
          this.selectedPeriod = Math.max(...this.availablePeriods);
          this.loadGrades();
        }
      }
    });
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
                  this.loadGrades();
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
  // Enviar las notas pendientes al recargar/cerrar (los POST normales se cancelan en unload).
  // Usamos fetch con keepalive (respeta CORS y sobrevive al cierre) y sendBeacon como respaldo.
  onBeforeUnload() {
    for (const key of Array.from(this.gradeSaveTimers.keys())) {
      this.flushGradeKey(key);
    }
    for (const sid of Array.from(this.recoverySaveTimers.keys())) {
      this.flushRecoveryKey(sid);
    }
    for (const item of this.gradeSaveLast.values()) {
      this.sendKeepAlive("http://localhost:8080/api/grades", this.buildGradePayload(item));
    }
    for (const payload of this.recoveryLast.values()) {
      this.sendKeepAlive("http://localhost:8080/api/grades/recovery", payload);
    }
  }
  buildGradePayload(item) {
    const gradeName = this.noteNames[item.noteIndex - 1] || `Nota ${item.noteIndex}`;
    return {
      studentId: item.studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || "MATEMATICAS",
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      gradeName,
      isEvaluation: item.noteIndex === 8,
      teacherId: this.getCurrentTeacherId(),
      gradeValue: item.value,
      appreciative: ""
    };
  }
  sendKeepAlive(url, data) {
    const body = JSON.stringify(data);
    try {
      if (typeof fetch === "function") {
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true
        }).catch(() => {
        });
        return;
      }
    } catch (e) {
    }
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
      }
    } catch (e) {
    }
  }
  ngOnDestroy() {
    if (this.periodCheckInterval) {
      clearInterval(this.periodCheckInterval);
    }
    if (this.periodsSubscription) {
      this.periodsSubscription.unsubscribe();
    }
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
    this.http.get("http://localhost:8080/api/periods").subscribe({
      next: (periods) => {
        console.log("Periodos recibidos (loadUnlockedPeriods):", periods);
        const unlockedPeriods = periods.filter((p) => p.isUnlocked).map((p) => p.periodNumber);
        console.log("Periodos desbloqueados:", unlockedPeriods);
        this.availablePeriods = unlockedPeriods.length > 0 ? unlockedPeriods : [1];
        console.log("Periodos disponibles:", this.availablePeriods);
        this.hasActivePeriod = unlockedPeriods.length > 0;
        localStorage.setItem("unlockedPeriods", JSON.stringify(unlockedPeriods.filter((p) => p > 1)));
        this.cdr.markForCheck();
      },
      error: () => {
        const stored = localStorage.getItem("unlockedPeriods");
        this.availablePeriods = stored ? [1, ...JSON.parse(stored).filter((p) => p > 1)] : [1];
      }
    });
  }
  // Load existing recovery plans for students
  loadExistingRecoveryPlans() {
    this.http.get(`http://localhost:8080/api/grades/recovery-plans${this.teacherIdQuery()}`).subscribe({
      next: (plans) => {
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
  hasRecoveryPlan(studentId, period) {
    return this.generatedPlans[studentId]?.[period] === true;
  }
  selectGrade(grade, classroom) {
    return __async(this, null, function* () {
      yield this.flushSaves();
      this.selectedGrade = grade;
      this.selectedClassroom = classroom;
      this.loadUnlockedPeriods();
      this.selectedPeriod = Math.max(...this.availablePeriods);
      this.gradesData = {};
      this.recoveryData = {};
      this.showLoadingScreen = true;
      this.isLoading = true;
      setTimeout(() => {
        this.loadData();
      }, 800);
    });
  }
  onPeriodChange(period) {
    return __async(this, null, function* () {
      const newPeriod = parseInt(period.toString());
      if (!this.availablePeriods.includes(newPeriod)) {
        alert("Este per\xEDodo a\xFAn no est\xE1 desbloqueado. Ve a Configuraci\xF3n para desbloquearlo.");
        return;
      }
      yield this.flushSaves();
      this.selectedPeriod = newPeriod;
      this.loadGrades();
      this.loadRecoveryData();
    });
  }
  // For two-way binding with ngModel
  onPeriodManualChange(period) {
    this.onPeriodChange(period);
  }
  onSubjectChange(subject) {
    return __async(this, null, function* () {
      yield this.flushSaves();
      this.selectedSubjectId = subject.id ?? null;
      this.selectedSubject = subject.name;
      this.teacherSubjectName = subject.name;
      this.applyGradeFilterForSubject(subject, false);
      this.loadGrades();
      this.loadRecoveryData();
    });
  }
  loadData() {
    if (!this.selectedGrade || !this.selectedClassroom)
      return;
    const url = `http://localhost:8080/api/students/grade/${encodeURIComponent(this.selectedGrade)}/class/${encodeURIComponent(this.selectedClassroom)}`;
    this.http.get(url).subscribe({
      next: (students) => {
        this.students = students.sort((a, b) => (a.surname || "").localeCompare(b.surname || ""));
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
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod || this.students.length === 0)
      return;
    const subjectName = this.selectedSubject || this.teacherSubjectName || "";
    if (!subjectName)
      return;
    const teacherId = this.getCurrentTeacherId();
    const keySuffix = this.selectedSubjectId != null ? this.selectedSubjectId : subjectName;
    const compositeKey = `${keySuffix}|${this.selectedPeriod}`;
    for (const student of this.students) {
      const subjectIdParam = this.selectedSubjectId != null ? `&subjectId=${this.selectedSubjectId}` : "";
      const url = `http://localhost:8080/api/grades/recovery/${student.id}?period=${this.selectedPeriod}${teacherId != null ? "&teacherId=" + teacherId : ""}&subjectName=${encodeURIComponent(subjectName)}${subjectIdParam}`;
      this.http.get(url).subscribe({
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
        error: () => {
        }
      });
    }
  }
  loadGrades() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod)
      return;
    this.gradesData = {};
    for (const student of this.students) {
      this.gradesData[student.id] = {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null
      };
    }
    const subjectParam = this.selectedSubject ? `&subjectName=${encodeURIComponent(this.selectedSubject)}` : "";
    const subjectIdParam = this.selectedSubjectId != null ? `&subjectId=${this.selectedSubjectId}` : "";
    const url = `http://localhost:8080/api/grades/classroom?grade=${encodeURIComponent(this.selectedGrade)}&classroom=${encodeURIComponent(this.selectedClassroom)}&period=${this.selectedPeriod}${this.teacherIdParam()}${subjectParam}${subjectIdParam}`;
    this.http.get(url).subscribe({
      next: (response) => {
        if (response.grades && response.grades.length > 0) {
          const gradesMap = /* @__PURE__ */ new Map();
          for (const grade of response.grades) {
            let studentId = grade.studentId;
            if (!studentId && grade.student?.id) {
              studentId = grade.student.id;
            }
            if (!studentId)
              continue;
            let noteIndex = null;
            const gradeName = (grade.gradeName || "").trim().toLowerCase();
            if (grade.isEvaluation) {
              noteIndex = 8;
            } else if (gradeName === "auto.eval" || gradeName === "auto.eval." || gradeName === "autoeval") {
              noteIndex = 9;
            } else if (gradeName === "prom.parc" || gradeName === "prom.parc." || gradeName === "promedio parcial" || gradeName === "nota 10" || gradeName.includes("prom") && gradeName.includes("parc") || gradeName.includes("prom") && gradeName.length < 12) {
              noteIndex = 10;
            } else if (gradeName === "act1" || gradeName === "act01") {
              noteIndex = 1;
            } else if (gradeName === "act2" || gradeName === "act02") {
              noteIndex = 2;
            } else if (gradeName === "act3" || gradeName === "act03") {
              noteIndex = 3;
            } else if (gradeName === "act4" || gradeName === "act04") {
              noteIndex = 4;
            } else if (gradeName === "act5" || gradeName === "act05") {
              noteIndex = 5;
            } else if (gradeName === "act6" || gradeName === "act06") {
              noteIndex = 6;
            } else if (gradeName === "act7" || gradeName === "act07") {
              noteIndex = 7;
            } else if (gradeName === "nfinal" || gradeName === "n.final") {
              noteIndex = 11;
            }
            if (noteIndex === null) {
              continue;
            }
            const key = `${studentId}-${noteIndex}`;
            const existing = gradesMap.get(key);
            if (!existing || new Date(grade.updatedAt) > new Date(existing.updatedAt)) {
              gradesMap.set(key, { value: grade.gradeValue, updatedAt: grade.updatedAt });
            }
          }
          for (const [key, data] of gradesMap) {
            const [studentIdStr, noteIndexStr] = key.split("-");
            const studentId = parseInt(studentIdStr);
            const noteIndex = parseInt(noteIndexStr);
            if (!this.gradesData[studentId]) {
              this.gradesData[studentId] = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null,
                9: null,
                10: null,
                11: null
              };
            }
            this.gradesData[studentId][noteIndex] = data.value;
          }
        }
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
        this.isLoading = false;
        this.showLoadingScreen = false;
      }
    });
  }
  getGrade(studentId, noteIndex) {
    if (!this.gradesData[studentId])
      return null;
    const value = this.gradesData[studentId][noteIndex];
    return value !== void 0 && value !== null ? value : null;
  }
  isTeacher() {
    const user = this.authService.getCurrentUserValue();
    return !!(user && user.role && (user.role.name || user.role) === "TEACHER");
  }
  // Get display value for input (with comma as decimal separator)
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
        const chosen = subjects.find((s) => s.gradeMin != null && s.gradeMax != null) || subjects[0] || null;
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
  applyGradeFilterForSubject(subject, animate = true) {
    const subj = subject ?? this.teacherSubjects.find((s) => s.id === this.selectedSubjectId) ?? null;
    let newGrades = [];
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
  parseGradeLabel(grade) {
    const match = grade.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }
  getGradeDisplay(studentId, noteIndex) {
    const val = this.getGrade(studentId, noteIndex);
    if (val === null)
      return "";
    return val.toString().replace(".", ",");
  }
  // Etiqueta de la materia seleccionada, incluyendo el nivel (Primaria/Bachillerato)
  get selectedSubjectLabel() {
    const subj = this.teacherSubjects.find((s) => s.id === this.selectedSubjectId);
    const name = this.selectedSubject || this.teacherSubjectName || "MATEM\xC1TICAS";
    return subj?.level ? `${name} (${subj.level})` : name;
  }
  // 80% = promedio(ACT1-7 + Auto.Eval + Prom.Parc) * 0.8
  get80Percent(studentId) {
    const grades = [
      this.getGrade(studentId, 1),
      this.getGrade(studentId, 2),
      this.getGrade(studentId, 3),
      this.getGrade(studentId, 4),
      this.getGrade(studentId, 5),
      this.getGrade(studentId, 6),
      this.getGrade(studentId, 7),
      this.getGrade(studentId, 9),
      // Auto.Eval
      this.getGrade(studentId, 10)
      // Prom.Parc
    ].filter((v) => v !== null);
    if (grades.length === 0)
      return "-";
    const sum = grades.reduce((a, b) => a + b, 0);
    const avg = sum / grades.length;
    const result = avg * 0.8;
    return result.toFixed(2).replace(".", ",");
  }
  // Get the numeric value for 80%
  get80PercentValue(studentId) {
    const str = this.get80Percent(studentId);
    if (str === "-")
      return null;
    return parseFloat(str.replace(",", "."));
  }
  // 20% = Evaluación × 0.2
  get20Percent(studentId) {
    const ev = this.getGrade(studentId, 8);
    if (ev === null)
      return "-";
    const result = ev * 0.2;
    return result.toFixed(2).replace(".", ",");
  }
  // Get numeric value for 20%
  get20PercentValue(studentId) {
    const str = this.get20Percent(studentId);
    if (str === "-")
      return null;
    return parseFloat(str.replace(",", "."));
  }
  // Auto.Eval - promedio de todas las actividades
  getAutoEval(studentId) {
    const grades = [
      this.getGrade(studentId, 1),
      this.getGrade(studentId, 2),
      this.getGrade(studentId, 3),
      this.getGrade(studentId, 4),
      this.getGrade(studentId, 5),
      this.getGrade(studentId, 6),
      this.getGrade(studentId, 7)
    ].filter((v) => v !== null);
    if (grades.length === 0)
      return "-";
    const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
    return avg.toFixed(2).replace(".", ",");
  }
  // Get numeric value
  getAutoEvalValue(studentId) {
    const str = this.getAutoEval(studentId);
    if (str === "-")
      return null;
    return parseFloat(str.replace(",", "."));
  }
  getAutoEvalColor(studentId) {
    const val = this.getAutoEvalValue(studentId);
    if (val === null)
      return "";
    return this.getGradeColor(val);
  }
  // Prom.Parc - promedio parcial (igual que Auto.Eval)
  getPromParc(studentId) {
    return this.getAutoEval(studentId);
  }
  getPromParcValue(studentId) {
    return this.getAutoEvalValue(studentId);
  }
  getPromParcColor(studentId) {
    return this.getAutoEvalColor(studentId);
  }
  // Nota final = usar valor guardado en DB si existe, si no calcular 80% + 20%
  getFinal(studentId) {
    const savedNFinal = this.getGrade(studentId, 11);
    if (savedNFinal !== null) {
      return savedNFinal.toFixed(1).replace(".", ",");
    }
    const p80 = this.get80PercentValue(studentId);
    const p20 = this.get20PercentValue(studentId);
    if (p80 === null && p20 === null)
      return "-";
    const finalGrade = (p80 ?? 0) + (p20 ?? 0);
    return finalGrade.toFixed(1).replace(".", ",");
  }
  // Get numeric final grade
  getFinalValue(studentId) {
    const savedNFinal = this.getGrade(studentId, 11);
    if (savedNFinal !== null)
      return savedNFinal;
    const str = this.getFinal(studentId);
    if (str === "-")
      return null;
    return parseFloat(str.replace(",", "."));
  }
  // Nota Recuperación = (Recup.Escrita + Recup.Oral) / 2
  getNotaRecup(studentId) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    const written = rd.written;
    const oral = rd.oral;
    if (written === null && oral === null)
      return "-";
    if (written === null || oral === null) {
      return (written ?? oral ?? "-").toString().replace(".", ",");
    }
    const result = (written + oral) / 2;
    return result.toFixed(2).replace(".", ",");
  }
  getNotaRecupValue(studentId) {
    const str = this.getNotaRecup(studentId);
    if (str === "-")
      return null;
    return parseFloat(str.replace(",", "."));
  }
  // Get final grade considering recovery
  getFinalWithRecovery(studentId) {
    const nFinal = this.getFinalValue(studentId);
    const notaRecup = this.getNotaRecupValue(studentId);
    if (nFinal === null)
      return "-";
    if (notaRecup !== null && notaRecup > nFinal) {
      return notaRecup.toFixed(2).replace(".", ",");
    }
    return nFinal.toFixed(2).replace(".", ",");
  }
  // Get final value with recovery
  getFinalWithRecoveryValue(studentId) {
    const str = this.getFinalWithRecovery(studentId);
    if (str === "-")
      return null;
    return parseFloat(str.replace(",", "."));
  }
  // Check if student needs recovery (final < 3.5)
  needsRecovery(studentId) {
    const final = this.getFinalValue(studentId);
    return final !== null && final <= 3.4;
  }
  // Check if student is in yellow range (3.5 <= final < 4.0) - yellow highlight
  isLosing(studentId) {
    const final = this.getFinalWithRecoveryValue(studentId);
    return final !== null && final >= 3.5 && final < 4;
  }
  // Check if student has excellent grade (final >= 4.0) - green highlight
  hasExcellentGrade(studentId) {
    const final = this.getFinalWithRecoveryValue(studentId);
    return final !== null && final >= 4;
  }
  // Comp Social: S=Superior, A=Alto, B=Bajo, I=Insuficiente
  getCompSocialDisplay(studentId) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    const val = rd.compSocial;
    if (!val)
      return "-";
    return val.toUpperCase();
  }
  getCompSocialLabel(studentId) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    const val = rd.compSocial?.toUpperCase();
    if (!val)
      return "-";
    switch (val) {
      case "S":
        return "Sobresaliente";
      case "E":
        return "Excelente";
      case "A":
        return "Aceptable";
      case "B":
        return "Bajo";
      case "I":
        return "Insuficiente";
      default:
        return val;
    }
  }
  getCompSocialScaleLabel(studentId) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    const val = rd.compSocial?.toUpperCase();
    if (!val)
      return "";
    switch (val) {
      case "S":
        return "Sobresaliente (4.6 \u2013 5.0)";
      case "E":
        return "Excelente (4.0 \u2013 4.5)";
      case "A":
        return "Aceptable (3.5 \u2013 3.9)";
      case "B":
        return "Bajo (1.0 \u2013 3.4)";
      case "I":
        return "Insuficiente (1.0 \u2013 3.4)";
      default:
        return "";
    }
  }
  getCompSocialColor(studentId) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    const val = rd.compSocial?.toUpperCase();
    if (!val)
      return "";
    switch (val) {
      case "S":
      case "E":
        return "comp-social-green";
      case "A":
        return "comp-social-yellow";
      case "B":
        return "comp-social-orange";
      case "I":
        return "comp-social-red";
      default:
        return "";
    }
  }
  getCurrentSubjectKey() {
    const subject = this.selectedSubject || this.teacherSubjectName || "";
    if (!subject && this.selectedSubjectId == null)
      return "";
    const key = this.selectedSubjectId != null ? this.selectedSubjectId : subject;
    return `${key}|${this.selectedPeriod}`;
  }
  ensureRecoveryData(studentId, subjectKey) {
    if (!this.recoveryData[studentId]) {
      this.recoveryData[studentId] = {};
    }
    if (!this.recoveryData[studentId][subjectKey]) {
      this.recoveryData[studentId][subjectKey] = { written: null, oral: null, jInteg: null, compSocial: null };
    }
    return this.recoveryData[studentId][subjectKey];
  }
  getCurrentSubjectRecoveryData(studentId) {
    const key = this.getCurrentSubjectKey();
    if (!key)
      return { written: null, oral: null, jInteg: null, compSocial: null };
    if (!this.recoveryData[studentId])
      return { written: null, oral: null, jInteg: null, compSocial: null };
    return this.recoveryData[studentId][key] || { written: null, oral: null, jInteg: null, compSocial: null };
  }
  // Get color class based on grade
  getGradeColor(grade) {
    if (grade === null)
      return "";
    if (grade >= 4)
      return "grade-green";
    if (grade >= 3.5)
      return "grade-yellow";
    return "grade-red";
  }
  get80Color(studentId) {
    const val = this.get80PercentValue(studentId);
    if (val === null)
      return "";
    return this.getGradeColor(val);
  }
  get20Color(studentId) {
    const val = this.get20PercentValue(studentId);
    if (val === null)
      return "";
    return this.getGradeColor(val);
  }
  getFinalColor(studentId) {
    const val = this.getFinalWithRecoveryValue(studentId);
    if (val === null)
      return "";
    return this.getGradeColor(val);
  }
  // Handle input change - auto save on typing
  onGradeChange(studentId, noteIndex, event) {
    const input = event.target;
    let value = input.value.trim();
    if (value === "" || value === "-" || value === "," || value === ".") {
      if (!this.gradesData[studentId])
        this.gradesData[studentId] = {};
      this.gradesData[studentId][noteIndex] = null;
      this.saveGrade(studentId, noteIndex, null);
      return;
    }
    value = value.replace(",", ".");
    if (value.endsWith(".")) {
      return;
    }
    let numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return;
    }
    numValue = Math.max(0, Math.min(5, numValue));
    numValue = Math.round(numValue * 100) / 100;
    if (!this.gradesData[studentId])
      this.gradesData[studentId] = {};
    this.gradesData[studentId][noteIndex] = numValue;
    input.value = numValue.toString();
    this.saveGrade(studentId, noteIndex, numValue);
  }
  // Handle click to save
  onGradeClick(studentId, noteIndex, event) {
    const input = event.target;
    let value = input.value.trim();
    if (noteIndex === 5) {
      const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
      rd.jInteg = value;
      this.saveRecoveryData(studentId);
      return;
    }
    if (value === "" || value === "-" || value === "," || value === ".") {
      return;
    }
    value = value.replace(",", ".");
    let numValue = parseFloat(value);
    if (isNaN(numValue))
      return;
    numValue = Math.max(0, Math.min(5, numValue));
    numValue = Math.round(numValue * 100) / 100;
    if (noteIndex >= 1 && noteIndex <= 10) {
      if (!this.gradesData[studentId])
        this.gradesData[studentId] = {};
      this.gradesData[studentId][noteIndex] = numValue;
      input.value = numValue.toString().replace(".", ",");
      this.saveGrade(studentId, noteIndex, numValue);
    }
  }
  // Handle blur - format the display value
  onGradeBlur(studentId, noteIndex, event) {
    const input = event.target;
    const value = input.value.trim();
    if (value === "" || value === "-" || value === ",") {
      if (!this.gradesData[studentId])
        this.gradesData[studentId] = {};
      this.gradesData[studentId][noteIndex] = null;
      input.value = "";
      this.saveGrade(studentId, noteIndex, null);
      this.saveNFinal(studentId);
      this.focusedCell = null;
      return;
    }
    let numValue = parseFloat(value.replace(",", "."));
    if (isNaN(numValue)) {
      input.value = "";
      this.focusedCell = null;
      return;
    }
    numValue = Math.max(0, Math.min(5, numValue));
    numValue = Math.round(numValue * 100) / 100;
    input.value = numValue.toString().replace(".", ",");
    if (!this.gradesData[studentId])
      this.gradesData[studentId] = {};
    this.gradesData[studentId][noteIndex] = numValue;
    this.saveGrade(studentId, noteIndex, numValue);
    this.saveNFinal(studentId);
    this.focusedCell = null;
  }
  // Recovery data handlers
  onRecoveryWrittenChange(studentId, event) {
    const input = event.target;
    let value = input.value.trim();
    if (value === "" || value === "-" || value === "," || value === ".") {
      const rd2 = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
      rd2.written = null;
      this.saveRecoveryData(studentId);
      return;
    }
    value = value.replace(",", ".");
    let numValue = parseFloat(value);
    if (isNaN(numValue))
      return;
    numValue = Math.max(0, Math.min(5, numValue));
    numValue = Math.round(numValue * 100) / 100;
    const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
    rd.written = numValue;
    input.value = numValue.toString().replace(".", ",");
    this.saveRecoveryData(studentId);
  }
  onRecoveryOralChange(studentId, event) {
    const input = event.target;
    let value = input.value.trim();
    if (value === "" || value === "-" || value === "," || value === ".") {
      const rd2 = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
      rd2.oral = null;
      this.saveRecoveryData(studentId);
      return;
    }
    value = value.replace(",", ".");
    let numValue = parseFloat(value);
    if (isNaN(numValue))
      return;
    numValue = Math.max(0, Math.min(5, numValue));
    numValue = Math.round(numValue * 100) / 100;
    const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
    rd.oral = numValue;
    input.value = numValue.toString().replace(".", ",");
    this.saveRecoveryData(studentId);
  }
  onJIntegChange(studentId, event) {
    const input = event.target;
    const value = input.value.trim();
    const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
    rd.jInteg = value;
    this.saveRecoveryData(studentId);
  }
  onCompSocialChange(studentId, event) {
    const select = event.target;
    const value = select.value.trim().toUpperCase();
    const rd = this.ensureRecoveryData(studentId, this.getCurrentSubjectKey());
    rd.compSocial = value || null;
    this.saveRecoveryData(studentId);
  }
  saveGrade(studentId, noteIndex, value, appreciativeValue) {
    this.queueGradeSave(studentId, noteIndex, value);
  }
  queueGradeSave(studentId, noteIndex, value) {
    const key = `${studentId}-${noteIndex}`;
    this.gradeSaveLast.set(key, { studentId, noteIndex, value });
    this.gradeSaveQueue.set(key, { studentId, noteIndex, value });
    if (this.gradeSaveTimers.has(key)) {
      clearTimeout(this.gradeSaveTimers.get(key));
      this.gradeSaveTimers.delete(key);
    }
    this.gradeSaveTimers.set(key, setTimeout(() => this.flushGradeKey(key), 300));
  }
  flushGradeKey(key) {
    if (this.gradeSaveTimers.has(key)) {
      clearTimeout(this.gradeSaveTimers.get(key));
      this.gradeSaveTimers.delete(key);
    }
    const item = this.gradeSaveQueue.get(key);
    if (!item)
      return;
    if (this.gradeSaveInFlight.has(key))
      return;
    this.gradeSaveInFlight.add(key);
    this.gradeSaveQueue.delete(key);
    this.persistGradeSave(item.studentId, item.noteIndex, item.value);
  }
  persistGradeSave(studentId, noteIndex, value) {
    const gradeName = this.noteNames[noteIndex - 1] || `Nota ${noteIndex}`;
    const data = {
      studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || "MATEMATICAS",
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      gradeName,
      isEvaluation: noteIndex === 8,
      teacherId: this.getCurrentTeacherId()
    };
    data.gradeValue = value;
    data.appreciative = "";
    this.http.post("http://localhost:8080/api/grades", data).subscribe({
      next: () => {
        if (!this.gradesData[studentId]) {
          this.gradesData[studentId] = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null };
        }
        this.gradesData[studentId][noteIndex] = value;
        this.gradesUpdateService.notifyGradeUpdate();
        this.cdr.markForCheck();
        this.afterGradeSave(`${studentId}-${noteIndex}`);
      },
      error: (err) => {
        console.error("Error saving grade:", err);
        this.afterGradeSave(`${studentId}-${noteIndex}`);
      }
    });
  }
  afterGradeSave(key) {
    this.gradeSaveInFlight.delete(key);
    this.gradeSaveLast.delete(key);
    if (this.gradeSaveQueue.has(key)) {
      this.flushGradeKey(key);
    } else if (this.gradeSaveInFlight.size === 0 && this.gradeSaveQueue.size === 0 && this.recoverySaveInFlight.size === 0) {
      const waiters = this.flushWaiters;
      this.flushWaiters = [];
      waiters.forEach((w) => w());
    }
  }
  flushSaves() {
    for (const key of Array.from(this.gradeSaveTimers.keys())) {
      this.flushGradeKey(key);
    }
    for (const sid of Array.from(this.recoverySaveTimers.keys())) {
      this.flushRecoveryKey(sid);
    }
    if (this.gradeSaveInFlight.size === 0 && this.gradeSaveQueue.size === 0 && this.recoverySaveInFlight.size === 0) {
      return Promise.resolve();
    }
    return new Promise((resolve) => this.flushWaiters.push(resolve));
  }
  saveNFinal(studentId) {
    const p80 = this.get80PercentValue(studentId);
    const p20 = this.get20PercentValue(studentId);
    let finalGrade = null;
    if (p80 !== null || p20 !== null) {
      finalGrade = (p80 ?? 0) + (p20 ?? 0);
    }
    const data = {
      studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || "MATEMATICAS",
      subjectId: this.selectedSubjectId,
      period: this.selectedPeriod,
      gradeName: "nFinal",
      isEvaluation: false,
      teacherId: this.getCurrentTeacherId()
    };
    data.gradeValue = finalGrade;
    data.appreciative = "";
    this.http.post("http://localhost:8080/api/grades", data).subscribe({
      next: (response) => {
        if (!this.gradesData[studentId]) {
          this.gradesData[studentId] = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null };
        }
        this.gradesData[studentId][11] = finalGrade;
        this.cdr.markForCheck();
      },
      error: (err) => console.error("Error saving nFinal:", err)
    });
  }
  saveRecoveryData(studentId) {
    const rd = this.getCurrentSubjectRecoveryData(studentId);
    if (!rd)
      return;
    const key = String(studentId);
    this.recoveryLast.set(key, {
      studentId,
      subjectName: this.selectedSubject || this.teacherSubjectName || "MATEMATICAS",
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
  flushRecoveryKey(key) {
    if (this.recoverySaveTimers.has(key)) {
      clearTimeout(this.recoverySaveTimers.get(key));
      this.recoverySaveTimers.delete(key);
    }
    const payload = this.recoveryLast.get(key);
    if (!payload)
      return;
    if (this.recoverySaveInFlight.has(key))
      return;
    this.recoverySaveInFlight.add(key);
    this.http.post("http://localhost:8080/api/grades/recovery", payload).subscribe({
      next: () => this.afterRecoverySave(key),
      error: (err) => {
        console.error("Error saving recovery data:", err);
        this.afterRecoverySave(key);
      }
    });
  }
  afterRecoverySave(key) {
    this.recoverySaveInFlight.delete(key);
    this.recoveryLast.delete(key);
    if (this.gradeSaveInFlight.size === 0 && this.gradeSaveQueue.size === 0 && this.recoverySaveInFlight.size === 0) {
      const waiters = this.flushWaiters;
      this.flushWaiters = [];
      waiters.forEach((w) => w());
    }
  }
  // YouTube video cache to avoid re-checking same videos
  youtubeVideoCache = /* @__PURE__ */ new Map();
  // AI Study Plan functions
  openStudyPlanModal(student) {
    this.selectedStudentForPlan = student;
    this.studyPlanTopics = "";
    this.studyPlanContent = "";
    this.studyPlanContentSafe = null;
    this.progressPercent = 0;
    this.showProgressBar = false;
    this.planGenerated = false;
    this.planSaved = false;
    this.youtubeVideoCache.clear();
    this.showStudyPlanModal = true;
  }
  // Filter out unavailable videos from the HTML content
  filterUnavailableVideos(html) {
    return __async(this, null, function* () {
      const videoCardRegex = /<div class="video-card">[\s\S]*?<\/div>/gi;
      const videoCards = html.match(videoCardRegex) || [];
      const videoUrlRegex = /href="([^"]+)"/;
      const titleRegex = /<a[^>]*class="video-link"[^>]*>([^<]+)<\/a>/;
      const availableVideos = [];
      for (const card of videoCards) {
        const urlMatch = card.match(videoUrlRegex);
        const titleMatch = card.match(titleRegex);
        if (urlMatch && urlMatch[1]) {
          const url = urlMatch[1];
          const title = titleMatch ? titleMatch[1] : url;
          const isAvailable = yield this.checkVideoAvailability(url);
          if (isAvailable) {
            availableVideos.push({ title, url, html: card });
          }
        }
      }
      if (availableVideos.length === 0) {
        return html.replace(/<div class="video-section">[\s\S]*?<\/div>\s*<div class="activities-section">([\s\S]*?)<\/div><\/div>/gi, '<div class="activities-section">$1</div></div>');
      }
      let newVideoSection = '<div class="video-section">';
      availableVideos.forEach((v) => {
        newVideoSection += v.html;
      });
      newVideoSection += "</div>";
      return html.replace(/<div class="video-section">[\s\S]*?<\/div>/, newVideoSection);
    });
  }
  onCellFocus(studentId, noteIndex) {
    this.focusedCell = { studentId, noteIndex };
  }
  updateNoteName(index, name) {
    this.noteNames[index] = name;
  }
  combineMathParagraphs(html) {
    const operators = ["\xD7", "\\times", "\\cdot", "\\div", "\\pm", "\\mp", "=", "+", "-", "\u22C5", "/", "\xB7", "*", "\xB7"];
    const operatorPattern = operators.map((op) => op.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    let prev;
    let current = html;
    do {
      prev = current;
      current = current.replace(new RegExp(`<div class="paragraph-block"><p>([\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?)<\\/p><\\/div>\\s*<div class="paragraph-block"><p>\\s*(${operatorPattern}|[+\\-\xD7\xF7=*\xB7])\\s*<\\/p><\\/div>\\s*<div class="paragraph-block"><p>([\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?)<\\/p><\\/div>`, "g"), (match, content1, op, content3) => `<div class="paragraph-block"><p>${content1} ${op} ${content3}</p></div>`);
      current = current.replace(new RegExp(`(<p>[\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?<\\/p>)\\s*<p>\\s*(${operatorPattern}|[+\\-\xD7\xF7=*\xB7])\\s*<\\/p>\\s*(<p>[\\s\\S]*?\\$[\\s\\S]*?\\$[\\s\\S]*?<\\/p>)`, "g"), (match, p1, op, p3) => {
        const content1 = p1.replace(/^<p>/, "").replace(/<\/p>$/, "");
        const content3 = p3.replace(/^<p>/, "").replace(/<\/p>$/, "");
        return `<p>${content1} ${op} ${content3}</p>`;
      });
      current = current.replace(/(\$[^\$]+\$)\s*(?:<br\s*\/?>\s*)+(\$[^\$]+\$)/gi, (match, f1, f2) => `${f1} \\cdot ${f2}`);
    } while (current !== prev);
    current = current.replace(/(?:<p>\s*\$[\s\S]*?\$\s*<\/p>\s*){2,}/gi, (match) => match.replace(/<\/p>\s*<p>/gi, " "));
    current = current.replace(/(?:<div class="paragraph-block"><p>\s*\$[\s\S]*?\$\s*<\/p><\/div>\s*){2,}/gi, (match) => match.replace(/<\/p><\/div>\s*<div class="paragraph-block"><p>/gi, " "));
    return current;
  }
  /** Fuerza que el plan de estudio sea de un único día: recorta cualquier
   *  sección "DÍA 2" (o posterior) que la IA haya generado. */
  keepOnlyDayOne(html) {
    if (!html)
      return html;
    const day2 = html.match(/<h[1-4][^>]*>\s*(?:d[ií]a)\s*2\b[\s\S]*?(?=<h[1-4]|$)/i);
    if (day2 && day2.index !== void 0) {
      html = html.substring(0, day2.index) + html.substring(day2.index + day2[0].length);
    }
    html = html.replace(/<h[1-4][^>]*>\s*(?:d[ií]a)\s*[3-9]\b[\s\S]*?(?=<h[1-4]|$)/gi, "");
    return html;
  }
  renderMathExpressions() {
    const planContent = document.getElementById("study-plan-content");
    if (!planContent)
      return;
    const waitForKatex = (callback, maxAttempts = 30) => {
      let attempts = 0;
      const check = () => {
        attempts++;
        const katexAny = window.katex;
        if (katexAny && typeof katexAny.ParseError !== "undefined")
          callback();
        else if (attempts < maxAttempts)
          setTimeout(check, 100);
        else
          console.warn("KaTeX not fully loaded after maximum attempts");
      };
      check();
    };
    waitForKatex(() => {
      try {
        if (typeof window.renderMathInElement !== "undefined") {
          window.renderMathInElement(planContent, { delimiters: [{ left: "$$", right: "$$", display: false }, { left: "$", right: "$", display: false }], throwOnError: false, trust: true, strict: false });
        }
        setTimeout(() => {
          planContent.querySelectorAll(".katex-display").forEach((el) => {
            const html = el.innerHTML || "";
            if (html.includes("mfrac") || html.includes("\\frac"))
              el.classList.add("inline-only");
          });
        }, 50);
        setTimeout(() => {
          try {
            this.mergeMathParagraphs(planContent);
          } catch (e) {
            console.warn("Error merging math paragraphs", e);
          }
        }, 120);
      } catch (e) {
        console.warn("KaTeX rendering failed:", e);
      }
    });
  }
  /** Une en un solo párrafo los <p> adyacentes que contienen fórmulas KaTeX,
   *  de modo que las ecuaciones se muestren en línea y no una debajo de otra. */
  mergeMathParagraphs(container) {
    const hasKatex = (el) => !!el.querySelector(".katex, .katex-display, .mjx-container");
    const paragraphs = Array.from(container.querySelectorAll("p"));
    for (let i = 0; i < paragraphs.length - 1; i++) {
      const p = paragraphs[i];
      const next = paragraphs[i + 1];
      if (hasKatex(p) || hasKatex(next)) {
        const left = (p.textContent || "").trim();
        const endsWithTag = (p.innerHTML || "").trim().endsWith(">");
        const sep = endsWithTag ? "" : left ? " " : "";
        p.innerHTML = (p.innerHTML || "") + sep + (next.innerHTML || "");
        next.remove();
        paragraphs.splice(i + 1, 1);
        i--;
      }
    }
  }
  // Check if a YouTube/Khan Academy video URL is available
  checkVideoAvailability(url) {
    return __async(this, null, function* () {
      if (this.youtubeVideoCache.has(url)) {
        return this.youtubeVideoCache.get(url);
      }
      let timeout;
      try {
        const controller = new AbortController();
        timeout = setTimeout(() => controller.abort(), 5e3);
        const videoId = this.extractYouTubeId(url);
        if (videoId) {
          const response = yield fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`, {
            method: "HEAD",
            mode: "no-cors",
            signal: controller.signal
          });
          clearTimeout(timeout);
          this.youtubeVideoCache.set(url, true);
          return true;
        }
        if (url.includes("khanacademy.org")) {
          try {
            const khanResponse = yield fetch(url, {
              method: "HEAD",
              mode: "no-cors",
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
        this.youtubeVideoCache.set(url, true);
        return true;
      } catch (error) {
        if (timeout)
          clearTimeout(timeout);
        this.youtubeVideoCache.set(url, false);
        return false;
      }
    });
  }
  // Extract YouTube video ID from URL
  extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  // Filter videos to only show available ones
  filterAvailableVideos(videos) {
    return __async(this, null, function* () {
      const availableVideos = [];
      for (const video of videos) {
        const isAvailable = yield this.checkVideoAvailability(video.url);
        if (isAvailable) {
          availableVideos.push(video);
        }
      }
      return availableVideos;
    });
  }
  loadExistingPlan(studentId, period) {
    this.http.get(`http://localhost:8080/api/grades/study-plans/${studentId}${this.teacherIdQuery()}`).subscribe({
      next: (plans) => {
        const plan = plans.find((p) => p.period === period);
        if (plan) {
          this.studyPlanTopics = plan.topics || "";
          let content = plan.planContent || "";
          if (!content.includes("<") && content.includes("$")) {
            content = this.convertMarkdownToHtml(content);
          }
          this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(content));
          this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
          this.planGenerated = true;
          this.planSaved = true;
          this.showProgressBar = false;
          this.progressPercent = 100;
          setTimeout(() => this.renderMathExpressions(), 100);
          if (!this.generatedPlans[studentId]) {
            this.generatedPlans[studentId] = {};
          }
          this.generatedPlans[studentId][period] = true;
          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        console.error("Error loading existing plan:", err);
        this.studyPlanContent = "Error al cargar el plan existente.";
        this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
        this.planGenerated = true;
      }
    });
  }
  closeStudyPlanModal() {
    this.showStudyPlanModal = false;
    this.selectedStudentForPlan = null;
    this.studyPlanTopics = "";
    this.studyPlanContent = "";
    this.extractedImages = [];
    this.uploadedImages = [];
  }
  onImageSelected(event) {
    const input = event.target;
    if (input.files) {
      const files = Array.from(input.files);
      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result;
            this.uploadedImages.push({
              file,
              preview: result,
              base64: result.split(",")[1]
            });
          };
          reader.readAsDataURL(file);
        }
      });
    }
    input.value = "";
  }
  removeImage(index) {
    this.uploadedImages = this.uploadedImages.filter((_, i) => i !== index);
  }
  onImageError(index) {
    this.extractedImages = this.extractedImages.filter((_, i) => i !== index);
  }
  sanitizeAiText(text) {
    let result = text.replace(/^```[a-zA-Z0-9]*\s*\n?/i, "").replace(/\n?```\s*$/i, "").replace(/^[ \t]*```[a-zA-Z0-9]*[ \t]*$/gim, "").replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, "");
    result = result.replace(/\f/g, "\\");
    result = result.replace(/\r\n/g, "\n").replace(/<[\w-]+_details>[\s\S]*?<\/[\w-]+_details>/gi, "").replace(/^Current time:.*$/gim, "").replace(/^Active file:.*$/gim, "").replace(/^Visible files:.*$/gim, "").replace(/^Open tabs:.*$/gim, "").replace(/^src\/main\/java\/.*$/gim, "").replace(/^Frontend\/src\/app\/.*$/gim, "").replace(/Profesional - \w+/gi, "").replace(/Plan de Estudio[:\s]*/gi, "").replace(/Plan de Estudio Personalizado[:\s]*/gi, "").replace(/^<h1[^>]*>.*?<\/h1>/gim, "").replace(/<h1[^>]*>Plan de Estudio[:\s]*[^<]*<\/h1>/gi, "").replace(/<h2[^>]*>Plan de Estudio[:\s]*[^<]*<\/h2>/gi, "").replace(/<h3[^>]*>Plan de Estudio[:\s]*[^<]*<\/h3>/gi, "").replace(/^\s{0,3}#{1,6}\s*\d+[\.\)\:\-]*\s*$/gm, "").replace(/^\s*\d+[\.\)]\s*$/gm, "").replace(/^\s*###\s*$/gm, "").replace(/^####\s+/gm, "").replace(/^###\s+/gm, "").replace(/^##\s+/gm, "").replace(/^#\s+/gm, "").replace(/^VIDEOS[:\s]*/gim, "").replace(/^ACTIVIDADES[:\s]*/gim, "").replace(/^RECURSOS[:\s]*/gim, "").replace(/^(?:Fecha de inicio|Fecha inicio|Inicio|Comienzo|Start)[:\s\-]*.*$/gim, "").replace(/<p>\s*(?:Fecha de inicio|Fecha inicio|Inicio|Comienzo|Start)[:\s\-]*.*?<\/p>/gi, "").replace(/\n{3,}/g, "\n\n");
    result = result.replace(/<environment_details[^>]*>/gi, "");
    result = result.replace(/(?<!\\)\bfrac\{([^{}]+)\}\{([^{}]+)\}/g, "\\frac{$1}{$2}");
    result = result.replace(/(?<!\\)\bsqrt\{([^{}]+)\}/g, "\\sqrt{$1}");
    result = result.replace(/(?<!\\)\bsum\b/g, "\\sum");
    result = result.replace(/(?<!\\)\bint\b/g, "\\int");
    result = result.replace(/(?<!\\)\blim\b/g, "\\lim");
    result = result.replace(/(?<!\\)\bprod\b/g, "\\prod");
    result = result.replace(/(?<!\\)\balpha\b/g, "\\alpha");
    result = result.replace(/(?<!\\)\bbeta\b/g, "\\beta");
    result = result.replace(/(?<!\\)\bgamma\b/g, "\\gamma");
    result = result.replace(/(?<!\\)\bdelta\b/g, "\\delta");
    result = result.replace(/(?<!\\)\brho\b/g, "\\rho");
    result = result.replace(/(?<!\\)\btheta\b/g, "\\theta");
    result = result.replace(/(?<!\\)\bpi\b/g, "\\pi");
    result = result.replace(/(?<!\\)\bneq\b/g, "\\neq");
    result = result.replace(/(?<!\\)\bleq\b/g, "\\leq");
    result = result.replace(/(?<!\\)\bgeq\b/g, "\\geq");
    result = result.replace(/(?<!\\)\bapprox\b/g, "\\approx");
    result = result.replace(/(?<!\\)\bequiv\b/g, "\\equiv");
    result = result.replace(/(?<!\\)\btimes\b/g, "\\times");
    result = result.replace(/(?<!\\)\bcdot\b/g, "\\cdot");
    result = this.stripMathLineBreaks(result);
    result = result.replace(/<details/gi, "<details open");
    return result.trim();
  }
  /** Quita los saltos de línea LaTeX (\\ y saltos de carro) que estén DENTRO
   *  de las expresiones matemáticas $...$ / $$...$$, para que varias
   *  fracciones en la misma fórmula queden en una sola línea y se rendericen
   *  en línea en lugar de una debajo de la otra. */
  stripMathLineBreaks(text) {
    return text.replace(/\$(\$)?([\s\S]*?)\1\$/g, (m, dq, inner) => {
      const cleaned = inner.replace(/\\\\/g, " ").replace(/\r?\n/g, " ").replace(/\s{2,}/g, " ").trim();
      return (dq ? "$$" : "$") + cleaned + (dq ? "$$" : "$");
    });
  }
  combineMathLines(md) {
    const operators = ["\xD7", "\\times", "\\cdot", "\\div", "\\pm", "\\mp", "=", "+", "-", "\u22C5", "/", "\xB7", "*"];
    const operatorPattern = operators.map((op) => op.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    let prev;
    let current = md;
    do {
      prev = current;
      current = current.replace(new RegExp(`(\\$[^\\$]+\\$[^\\n]*)\\s*\\n+\\s*(${operatorPattern}|[+\\-\xD7\xF7=*\xB7])\\s*\\n+\\s*(\\$[^\\$]+\\$[^\\n]*)`, "g"), (match, f1, op, f2) => `${f1} ${op} ${f2}`);
    } while (current !== prev);
    current = current.replace(new RegExp(`(\\$[^\\$]+\\$)\\s*<br\\s*/?>\\s*(${operatorPattern}|[+\\-\xD7\xF7=*\xB7])\\s*<br\\s*/?>\\s*(\\$[^\\$]+\\$)`, "gi"), (match, f1, op, f2) => `${f1} ${op} ${f2}`);
    do {
      prev = current;
      current = current.replace(/(\$[^\$]+\$)\s*\n\s*(\$(?![=×⋅·*\/\+\-]).*?\$)/g, (match, f1, f2) => `${f1} \\cdot ${f2}`);
    } while (current !== prev);
    do {
      prev = current;
      current = current.replace(/(\$[^\$]+\$)\s*\n\s*(\$[^\$]+\$)/g, "$1 $2");
    } while (current !== prev);
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
    current = current.replace(/\s*\n\s*(?:=|×|⋅|\*|\bx\b|\bX\b)\s*/g, " $& ");
    current = current.replace(/\s*(?:=|×|⋅|\*|\bx\b|\bX\b)\s*\n\s*/g, " $& ");
    return current;
  }
  // Convert markdown to HTML for proper rendering
  convertMarkdownToHtml(text) {
    text = this.combineMathLines(text);
    let html = text.replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, "").replace(/<environment_details>[\s\S]*$/gi, "");
    html = this.sanitizeAiText(html);
    html = html.replace(/&/g, "&amp;");
    html = html.replace(/\\/g, "##LATEX_BACKSLASH##");
    html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    html = html.replace(/##LATEX_BACKSLASH##/g, "\\\\");
    html = html.replace(/\*/g, "");
    html = html.replace(/^-\s+/gm, "");
    html = html.replace(/^•\s+/gm, "");
    html = html.replace(/^---+$/gm, "");
    html = html.replace(/^\*\*\*+$/gm, "");
    html = html.replace(/^___+$/gm, "");
    html = html.replace(/pregunta/gi, "<strong>pregunta</strong>");
    html = html.replace(/respuesta/gi, "<strong>respuesta</strong>");
    html = html.replace(/(RECURSOS[:\s]*)([\s\S]*?)(?=EJERCICIOS|CONSEJOS|EVALUACIÓN|OBJETIVO|$)/gi, (match, prefix, content) => {
      let videos = [];
      let activities = [];
      const lines = content.split("\n");
      lines.forEach((line) => {
        const trimmedLine = line.trim();
        const pipeMatch = trimmedLine.match(/^(.+?)\s*\|\s*(https?:\/\/[^\s]+)/);
        if (pipeMatch) {
          const title = pipeMatch[1].trim();
          const url = pipeMatch[2].trim();
          if (url.includes("youtube") || url.includes("khanacademy") || url.includes("youtu.be")) {
            videos.push({ title, url });
          }
        } else if (trimmedLine.includes("youtube") || trimmedLine.includes("khanacademy") || trimmedLine.includes("youtu.be")) {
          const urlMatch = trimmedLine.match(/(https?:\/\/[^\s]+)/);
          if (urlMatch) {
            let title = urlMatch[1];
            title = title.replace("https://", "").replace("http://", "");
            title = title.replace("www.youtube.com/watch?v=", "YouTube: ");
            title = title.replace("youtu.be/", "YouTube: ");
            title = title.replace("www.khanacademy.org/", "Khan Academy: ");
            if (title.length > 50) {
              title = title.substring(0, 47) + "...";
            }
            videos.push({ title, url: urlMatch[1] });
          }
        } else if (trimmedLine && !trimmedLine.toLowerCase().startsWith("videos") && !trimmedLine.toLowerCase().startsWith("actividades")) {
          activities.push(trimmedLine);
        }
      });
      const limitedVideos = videos.slice(0, 3);
      let result = '<div class="resources-section"><div class="video-section">';
      if (limitedVideos.length > 0) {
        limitedVideos.forEach((v) => {
          let displayTitle = v.title;
          displayTitle = displayTitle.replace(/^\d+[\.\)]\s*/, "");
          displayTitle = displayTitle.trim();
          result += `<div class="video-card">
            <div class="video-icon">\u25B6</div>
            <div class="video-content">
              <a href="${v.url}" class="video-link" onclick="window.open(this.href, '_blank', 'resizable=yes,scrollbars=yes'); return false;">${displayTitle}</a>
              <span class="video-source">${v.url.includes("youtube") ? "YouTube" : "Khan Academy"}</span>
            </div>
          </div>`;
        });
      }
      result += "</div>";
      result += '<div class="activities-section">';
      if (activities.length > 0) {
        activities.forEach((a) => result += `${a}<br>`);
      }
      result += "</div></div>";
      return result;
    });
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="video-link" onclick="window.open(this.href, "_blank", "resizable=yes,scrollbars=yes"); return false;" rel="noopener noreferrer">$1</a>');
    html = html.replace(/<a([^>]*?)>/gi, (match, attrs) => {
      if (/target=/i.test(attrs)) {
        return match.replace(/<a([^>]*?)>/i, (m, innerAttrs) => {
          if (/rel=/i.test(innerAttrs))
            return m;
          return `<a${innerAttrs} rel="noopener noreferrer">`;
        });
      }
      const relAttr = /rel=/i.test(attrs) ? "" : ' rel="noopener noreferrer"';
      return `<a${attrs}${relAttr} target="_blank">`;
    });
    html = html.replace(/!\[([^\]]*)\]\([^)]+\)/g, "");
    html = html.replace(/^### (.*$)/gm, '<div class="ai-section-header ai-h4">$1</div>');
    html = html.replace(/^## (.*$)/gm, '<div class="ai-section-header ai-h3">$1</div>');
    html = html.replace(/^# (.*$)/gm, '<div class="ai-section-header ai-h2">$1</div>');
    html = html.replace(/^(\d+)\.\s+(.*)$/gm, "<li>$2</li>");
    html = html.replace(/^[•\-]\s+(.*)$/gm, "<li>$1</li>");
    html = html.replace(/^[✓✅]\s+/gm, '<li><span class="check">\u2713</span> ');
    html = html.replace(/(<li>.*?<\/li>)\n?/g, "$1");
    const tableRegex = /(\|.+\|)\n(\|[-:| ]+\|)\n((?:\|.+\|\n?)+)/g;
    html = html.replace(tableRegex, (match, headerRow, separatorRow, bodyRows) => {
      const headers = headerRow.split("|").filter((c) => c.trim()).map((h) => `<th>${h.trim()}</th>`).join("");
      const rows = bodyRows.split("\n").filter((r) => r.trim()).map((row) => {
        const cells = row.split("|").filter((c) => c.trim()).map((c) => `<td>${c.trim()}</td>`).join("");
        return `<tr>${cells}</tr>`;
      }).join("");
      return `<div class="table-wrapper"><table class="ai-table"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
    });
    const mathPlaceholders = [];
    let protectedHtml = html.replace(/\$[^\$]+\$/g, (match) => {
      mathPlaceholders.push(match);
      return `__MATH_PLACEHOLDER_${mathPlaceholders.length - 1}__`;
    });
    protectedHtml = protectedHtml.replace(/\n\n+/g, '</p></div><div class="paragraph-block"><p>');
    protectedHtml = '<div class="paragraph-block"><p>' + protectedHtml + "</p></div>";
    protectedHtml = protectedHtml.replace(/__MATH_PLACEHOLDER_(\d+)__/g, (match, index) => {
      return mathPlaceholders[parseInt(index)];
    });
    html = html.replace(/(<li>.*?<\/li>)+/g, '<ul class="ai-list">$1</ul>');
    html = html.replace(/<details/gi, "<details open");
    return html;
  }
  generateStudyPlan() {
    return __async(this, null, function* () {
      if (!this.selectedStudentForPlan)
        return;
      if (!this.studyPlanTopics?.trim())
        return;
      if (!this.selectedGrade)
        return;
      if (!this.selectedPeriod)
        return;
      this.isGeneratingPlan = true;
      this.planGenerated = false;
      this.planSaved = false;
      this.progressPercent = 0;
      this.showProgressBar = true;
      this.animateProgress();
      this.studyPlanContent = "";
      let fullText = "";
      this.initNotificationSound();
      const student = this.selectedStudentForPlan;
      const studentName = `${student.surname} ${student.name}`;
      const imageContext = this.uploadedImages.length > 0 ? `
IM\xC1GENES ADJUNTAS: Se han proporcionado ${this.uploadedImages.length} imagen(es) que contienen informaci\xF3n relevante (ejercicios, ex\xE1menes, tareas del estudiante). Analiza estas im\xE1genes para entender las dificultades del estudiante y generar un plan personalizado.
` : "";
      const prompt = `Eres un pedagogo experto. Genera un plan de estudio en HTML, profesional, elegante y muy bien estructurado, para un estudiante que debe reforzar los temas indicados.
Datos del estudiante:
- Nombre: ${studentName}
- Grado: ${this.selectedGrade}
- Per\xEDodo: ${this.selectedPeriod}
- Temas a reforzar: ${this.studyPlanTopics}

${imageContext}

REGLAS ESTRICTAS DE FORMATO:
1. Responde \xDANICAMENTE con HTML v\xE1lido y bien formado. Nada de texto fuera de las etiquetas HTML. No uses bloques de c\xF3digo ni comillas invertidas (triple backtick).
2. No incluyas VIDEOS, enlaces a YouTube ni a ning\xFAn medio audiovisual, QUE ESTE DISPONIBLE EN EL MOMENTO, NO QUIERO QUE SEA ANTIGUA NI QUE YA NO EXISTA/NO ESTE DISPONIBLE . Bajo NINGUNA circunstancia escribas frases como "video no disponible", "ver video", "video", "YouTube" o similares.
3. No incluyas fechas ni a\xF1os concretos. Usa solo referencias gen\xE9ricas: D\xEDa 1, Semana 1, etc.
4. Usa f\xF3rmulas matem\xE1ticas en l\xEDnea con $...$ (ej: $\\frac{a}{b} \\times \\frac{c}{d}$). NUNCA partas una operaci\xF3n en varias l\xEDneas.

ESTRUCTURA OBLIGATORIA (usa estas secciones en este orden, con encabezados <h2>):
1. <h2>OBJETIVO</h2> \u2014 meta de aprendizaje clara y medible en 2-3 frases.
2. <h2>DIAGN\xD3STICO</h2> \u2014 breve an\xE1lisis de las dificultades probables en los temas indicados.
3. <h2>CRONOGRAMA</h2> \u2014 EXACTAMENTE UN SOLO d\xEDa (D\xCDA 1). Usa:
   <div class="dia"><h3>D\xCDA 1</h3><ul><li>actividad con tiempo estimado</li>...</ul></div>
   El D\xCDA 1 debe tener objetivo, actividades paso a paso y un producto concreto.
   IMPORTANTE: NO generes D\xCDA 2 ni ning\xFAn d\xEDa adicional. El plan completo es de un \xFAnico d\xEDa.
4. <h2>RECURSOS</h2> \u2014 material de estudio en TEXTO (libros, apuntes, ejercicios impresos). Sin videos.
5. <h2>EJERCICIOS</h2> \u2014 lista numerada de ejercicios resueltos y propuestos con sus respuestas o claves.
6. <h2>CONSEJOS</h2> \u2014 5 consejos de estudio efectivos y h\xE1bitos.
7. <h2>EVALUACI\xD3N</h2> \u2014 10 preguntas de seguimiento con su breve clave/respuesta.
8. <h2>CONCLUSI\xD3N</h2> \u2014 cierre motivador.

Est\xE9tica: usa encabezados claros, vi\xF1etas, tablas simples y un estilo limpio y serio. Termina el documento completo con la frase exacta "PLAN DE ESTUDIO COMPLETO". Si el texto se corta, contin\xFAa hasta terminar todas las secciones.`;
      try {
        const url = `${this.AI_PROXY_BASE}/study-plan-stream`;
        const response = yield fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt,
            temperature: 0.4,
            max_tokens: 24e3
          })
        });
        if (!response.ok) {
          this.stopProgressAnimation();
          let errorMsg = "";
          if (response.status === 503) {
            errorMsg = "El servicio de IA no est\xE1 disponible temporalmente. Por favor intenta m\xE1s tarde o contacta al administrador.";
          } else if (response.status === 429) {
            errorMsg = "Has excedido el l\xEDmite de solicitudes. Por favor espera un momento e intenta de nuevo.";
          } else if (response.status === 401) {
            errorMsg = "Error de autenticaci\xF3n con la API. Contacta al administrador.";
          } else {
            errorMsg = `Error del servidor (${response.status}). Por favor intenta de nuevo.`;
          }
          this.studyPlanContent = errorMsg;
          this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(errorMsg);
          this.showProgressBar = false;
          this.isGeneratingPlan = false;
          this.planGenerated = true;
          return;
        }
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        if (!reader) {
          throw new Error("No response body");
        }
        while (true) {
          const { done, value } = yield reader.read();
          if (done) {
            if (buffer.trim()) {
              const line = buffer.trim();
              if (line.startsWith("data: ")) {
                const jsonStr = line.slice(6).trim();
                if (jsonStr && jsonStr !== "[DONE]") {
                  try {
                    const data = JSON.parse(jsonStr);
                    if (data.error) {
                      const err = new Error(typeof data.error === "string" ? data.error : "Error de la IA");
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
                  } catch (e) {
                    if (e && e.streamError)
                      throw e;
                    console.warn("Error parsing final stream chunk", e);
                  }
                }
              }
            }
            break;
          }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const jsonStr = line.slice(6).trim();
              if (!jsonStr || jsonStr === "[DONE]")
                continue;
              try {
                const data = JSON.parse(jsonStr);
                if (data.error) {
                  const err = new Error(typeof data.error === "string" ? data.error : "Error de la IA");
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
              } catch (e) {
                if (e && e.streamError)
                  throw e;
                console.warn("Error parsing stream chunk", e);
              }
            }
          }
        }
        this.stopProgressAnimation();
        this.progressPercent = Math.max(this.progressPercent, 98);
        let sanitizedText = this.sanitizeAiText(fullText);
        const urlRegex = /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg|webp\?[^\s]*))/gi;
        const imageUrls = sanitizedText.match(urlRegex) || [];
        this.extractedImages = imageUrls;
        sanitizedText = sanitizedText.replace(urlRegex, "").replace(/\n\n\n+/g, "\n\n");
        const hasHtmlTags = /<[a-z][\s\S]*>/i.test(sanitizedText);
        if (hasHtmlTags) {
          let cleanHtml = sanitizedText.replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, "").replace(/<environment_details>[\s\S]*$/gi, "").replace(/<[\w-]+_details>[\s\S]*?<\/[\w-]+_details>/gi, "").replace(/Profesional - \w+/gi, "").replace(/<h1[^>]*>Plan de Estudio[:\s]*[^<]*<\/h1>/gi, "").replace(/<h2[^>]*>Plan de Estudio[:\s]*[^<]*<\/h2>/gi, "").replace(/<h3[^>]*>Plan de Estudio[:\s]*[^<]*<\/h3>/gi, "").replace(/\n{3,}/g, "\n\n");
          if (cleanHtml.startsWith("```html") && cleanHtml.endsWith("```")) {
            cleanHtml = cleanHtml.substring(7, cleanHtml.length - 3).trim();
          } else if (cleanHtml.startsWith("```") && cleanHtml.endsWith("```")) {
            cleanHtml = cleanHtml.substring(3, cleanHtml.length - 3).trim();
          }
          cleanHtml = cleanHtml.replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, "");
          cleanHtml = cleanHtml.replace(/<environment_details>/gi, "");
          cleanHtml = cleanHtml.replace(/Visible files:[\s\S]*?(?=<|$)/gi, "");
          cleanHtml = cleanHtml.replace(/Open tabs:[\s\S]*$/gi, "");
          cleanHtml = cleanHtml.replace(/<details/gi, "<details open");
          this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(cleanHtml.trim()));
          this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
          setTimeout(() => __async(this, null, function* () {
            const filteredContent = yield this.filterUnavailableVideos(this.studyPlanContent);
            this.studyPlanContent = filteredContent;
            this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
          }), 100);
        } else {
          let markdown = sanitizedText;
          if (markdown.startsWith("```html") && markdown.endsWith("```")) {
            markdown = markdown.substring(7, markdown.length - 3).trim();
          } else if (markdown.startsWith("```") && markdown.endsWith("```")) {
            markdown = markdown.substring(3, markdown.length - 3).trim();
          }
          markdown = markdown.replace(/<environment_details>[\s\S]*?<\/environment_details>/gi, "");
          markdown = markdown.replace(/<environment_details>/gi, "");
          markdown = markdown.replace(/Visible files:[\s\S]*?(?=<|$)/gi, "");
          markdown = markdown.replace(/Open tabs:[\s\S]*$/gi, "");
          this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(this.convertMarkdownToHtml(markdown)));
          this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
          setTimeout(() => __async(this, null, function* () {
            const filteredContent = yield this.filterUnavailableVideos(this.studyPlanContent);
            this.studyPlanContent = filteredContent;
            this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
          }), 100);
        }
        if (!this.isStudyPlanComplete(this.studyPlanContent || "")) {
          const continuation = yield this.requestStudyPlanContinuation(fullText);
          if (continuation) {
            const continuedText = this.sanitizeAiText(continuation);
            let mergedHtml = this.studyPlanContent || "";
            if (/<[a-z][\s\S]*>/i.test(continuedText)) {
              mergedHtml += "\n" + continuedText.trim();
            } else {
              mergedHtml += "\n" + this.convertMarkdownToHtml(continuedText.trim());
            }
            this.studyPlanContent = this.keepOnlyDayOne(this.combineMathParagraphs(mergedHtml.trim()));
            this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
            setTimeout(() => __async(this, null, function* () {
              const filteredContent = yield this.filterUnavailableVideos(this.studyPlanContent);
              this.studyPlanContent = filteredContent;
              this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
            }), 100);
          }
        }
        setTimeout(() => this.renderMathExpressions(), 500);
        this.saveStudyPlanToBackend();
        this.onPlanGenerated();
      } catch (error) {
        const errorMsg = "Error de conexi\xF3n. Por favor verifica tu conexi\xF3n a internet e intenta de nuevo.";
        this.studyPlanContent = errorMsg;
        this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(errorMsg);
        this.stopProgressAnimation();
        this.showProgressBar = false;
        this.progressPercent = 0;
        this.planGenerated = true;
      }
    });
  }
  saveStudyPlanToBackend() {
    if (!this.selectedStudentForPlan || !this.studyPlanContent) {
      console.error("No student selected or no plan content");
      return;
    }
    let day1Content = "";
    const day1Match = this.studyPlanContent.match(/<h2[^>]*>DÍA 1[^<]*<\/h2>([\s\S]*?)(?=<h2|RECURSOS|$)/i);
    if (day1Match)
      day1Content = day1Match[1].trim();
    if (!day1Content) {
      const plainDay1Match = this.studyPlanContent.match(/DÍA 1:[\s\S]*?(?=RECURSOS|$)/i);
      if (plainDay1Match)
        day1Content = "<p>" + plainDay1Match[0].replace(/DÍA 1:/i, "").trim() + "</p>";
    }
    const payload = {
      studentId: this.selectedStudentForPlan.id,
      studentName: `${this.selectedStudentForPlan.surname} ${this.selectedStudentForPlan.name}`,
      subjectName: "",
      period: this.selectedPeriod,
      topics: this.studyPlanTopics || "",
      planContent: this.studyPlanContent || "",
      durationDays: 1,
      day1Content: day1Content || "",
      teacherId: this.getCurrentTeacherId()
    };
    this.http.post("http://localhost:8080/api/grades/study-plan", payload).subscribe({
      next: () => {
        if (this.selectedStudentForPlan) {
          const studentId = this.selectedStudentForPlan.id;
          const period = this.selectedPeriod;
          if (!this.generatedPlans[studentId]) {
            this.generatedPlans[studentId] = {};
          }
          this.generatedPlans[studentId][period] = true;
        }
        this.planSaved = true;
      },
      error: (err) => {
        console.error("Error saving study plan:", err);
      }
    });
  }
  // Progress bar basada en lo ya generado por la IA
  planGenerationStartTime = 0;
  estimatedOutputLength = 6e3;
  progressInterval = null;
  animateProgress() {
    this.progressPercent = 1;
    this.planGenerationStartTime = Date.now();
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
  isStudyPlanComplete(content) {
    const normalized = content.toUpperCase();
    const requiredSections = [
      "OBJETIVO",
      "CRONOGRAMA",
      "D\xCDA 1",
      "RECURSOS",
      "EJERCICIOS",
      "CONSEJOS",
      "EVALUACI\xD3N",
      "PLAN DE ESTUDIO COMPLETO",
      "CONCLUSI\xD3N"
    ];
    return requiredSections.every((section) => normalized.includes(section));
  }
  requestStudyPlanContinuation(partialPlan) {
    return __async(this, null, function* () {
      try {
        const url = `${this.AI_PROXY_BASE}/study-plan-continuation`;
        const response = yield fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            partialPlan
          })
        });
        if (!response.ok) {
          return "";
        }
        const data = yield response.json();
        return data?.content || "";
      } catch (e) {
        return "";
      }
    });
  }
  updateStreamingPreviewAndProgress(fullText) {
    const sanitizedPreview = this.sanitizeAiText(fullText);
    if (sanitizedPreview.trim()) {
      this.studyPlanContent = this.convertMarkdownToHtml(sanitizedPreview);
      this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(this.studyPlanContent);
      setTimeout(() => __async(this, null, function* () {
        const filteredContent = yield this.filterUnavailableVideos(this.studyPlanContent);
        this.studyPlanContent = filteredContent;
        this.studyPlanContentSafe = this.sanitizer.bypassSecurityTrustHtml(filteredContent);
      }), 100);
    }
    const currentLength = sanitizedPreview.length;
    const effectiveEstimatedLength = Math.max(this.estimatedOutputLength, 1500);
    const contentPercent = Math.round(currentLength / effectiveEstimatedLength * 100);
    this.progressPercent = Math.min(contentPercent, 100);
    this.progressPercent = Math.max(1, Math.floor(this.progressPercent));
    this.cdr.markForCheck();
  }
  // Mantener método por compatibilidad con llamadas existentes
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  stopProgressAnimation() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }
  // Initialize notification sound
  initNotificationSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.playNotificationSound(audioContext);
    } catch (e) {
    }
  }
  // Play notification sound
  playNotificationSound(audioContext) {
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator1.type = "sine";
    oscillator1.frequency.setValueAtTime(880, audioContext.currentTime);
    oscillator1.frequency.setValueAtTime(880, audioContext.currentTime + 0.1);
    oscillator2.type = "sine";
    oscillator2.frequency.setValueAtTime(0, audioContext.currentTime);
    oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15);
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
    const plainGeneratedLength = this.sanitizeAiText(this.studyPlanContent || "").replace(/<[^>]+>/g, "").trim().length;
    if (plainGeneratedLength > 0) {
      this.estimatedOutputLength = Math.round(this.estimatedOutputLength * 0.6 + plainGeneratedLength * 0.4);
    }
    this.progressPercent = 100;
    this.planGenerated = true;
    this.cdr.markForCheck();
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.playNotificationSound(audioContext);
    } catch (e) {
    }
  }
  // Save plan to database
  savePlan() {
    if (!this.selectedStudentForPlan || this.planSaved)
      return;
    this.saveStudyPlanToBackend();
    this.planSaved = true;
  }
  printStudyPlan() {
    const printContent = document.getElementById("study-plan-content");
    if (!printContent) {
      alert("Primero debe generar un plan de estudio");
      return;
    }
    const printContentHTML = printContent.innerHTML || "";
    if (!printContentHTML.trim()) {
      alert("El contenido del plan est\xE1 vac\xEDo");
      return;
    }
    const renderMathInElement = window.renderMathInElement;
    if (typeof renderMathInElement === "function") {
      try {
        renderMathInElement(printContent, {
          delimiters: [
            { left: "$$", right: "$$", display: false },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false,
          trust: true,
          strict: false
        });
      } catch (e) {
      }
    }
    const printNode = printContent.cloneNode(true);
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
        <\/script>
      </body>
      </html>
    `;
    window.__printStudyPlanNode = printNode;
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.top = "-10000px";
    iframe.style.left = "-10000px";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";
    document.body.appendChild(iframe);
    setTimeout(() => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(printHTML);
          doc.close();
        } else {
          alert("Error al crear el documento de impresi\xF3n");
        }
      } catch (e) {
        console.error("Print error:", e);
        alert("Error al imprimir. Intente nuevamente.");
      } finally {
        setTimeout(() => {
          window.__printStudyPlanNode = null;
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 2e3);
      }
    }, 100);
  }
  handleKeydown(event) {
    if (!event)
      return;
    if (!this.focusedCell || !this.students.length)
      return;
    const { studentId, noteIndex } = this.focusedCell;
    const studentIndex = this.students.findIndex((s) => s.id === studentId);
    let nextStudentId = null;
    let nextNoteIndex = noteIndex;
    let isRecoveryCell = false;
    let recoveryField = null;
    const targetEl = event.target;
    if (targetEl) {
      const id = targetEl.id;
      if (id === `recup-escrita-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = "recup-escrita";
      } else if (id === `recup-oral-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = "recup-oral";
      } else if (id === `recovery-jinteg-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = "recovery-jinteg";
      } else if (id === `recovery-compsocial-${studentId}`) {
        isRecoveryCell = true;
        recoveryField = "recovery-compsocial";
      }
    }
    switch (event.key) {
      case "ArrowRight": {
        event.preventDefault();
        if (isRecoveryCell) {
          if (recoveryField === "recovery-jinteg") {
            const el = document.querySelector(`#recovery-compsocial-${studentId}`);
            if (el) {
              el.focus();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === "recovery-compsocial") {
            const el = document.querySelector(`#recup-escrita-${studentId}`);
            if (el) {
              el.focus();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === "recup-escrita") {
            const el = document.querySelector(`#recup-oral-${studentId}`);
            if (el) {
              el.focus();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === "recup-oral") {
            if (studentIndex < this.students.length - 1) {
              const next = this.students[studentIndex + 1];
              const el = document.querySelector(`#grade-input-${next.id}-1`);
              if (el) {
                setTimeout(() => {
                  el.focus();
                  el.select();
                  el.scrollIntoView({ block: "nearest", behavior: "smooth" });
                  this.focusedCell = { studentId: next.id, noteIndex: 1 };
                }, 10);
              }
            }
            return;
          }
        }
        if (noteIndex === 1)
          nextNoteIndex = 2;
        else if (noteIndex === 2)
          nextNoteIndex = 3;
        else if (noteIndex === 3)
          nextNoteIndex = 4;
        else if (noteIndex === 4)
          nextNoteIndex = 5;
        else if (noteIndex === 5)
          nextNoteIndex = 6;
        else if (noteIndex === 6)
          nextNoteIndex = 7;
        else if (noteIndex === 7) {
          const el = document.querySelector(`#grade-input-${studentId}-9`);
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 9 };
            }, 10);
          }
          return;
        } else if (noteIndex === 9) {
          const el = document.querySelector(`#grade-input-${studentId}-10`);
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 10 };
            }, 10);
          }
          return;
        } else if (noteIndex === 10) {
          const el = document.querySelector(`#grade-input-${studentId}-8`);
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }, 10);
          }
          return;
        } else if (noteIndex === 8) {
          const el = document.querySelector(`#recovery-jinteg-${studentId}`);
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }, 10);
          }
          return;
        }
        break;
      }
      case "ArrowLeft": {
        event.preventDefault();
        if (isRecoveryCell) {
          if (recoveryField === "recup-oral") {
            const el = document.querySelector(`#recup-escrita-${studentId}`);
            if (el) {
              el.focus();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === "recup-escrita") {
            const el = document.querySelector(`#recovery-compsocial-${studentId}`);
            if (el) {
              el.focus();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === "recovery-compsocial") {
            const el = document.querySelector(`#recovery-jinteg-${studentId}`);
            if (el) {
              el.focus();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
          if (recoveryField === "recovery-jinteg") {
            const el = document.querySelector(`#grade-input-${studentId}-8`);
            if (el) {
              el.focus();
              el.select();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 8 };
            }
            return;
          }
        }
        if (noteIndex === 2)
          nextNoteIndex = 1;
        else if (noteIndex === 3)
          nextNoteIndex = 2;
        else if (noteIndex === 4)
          nextNoteIndex = 3;
        else if (noteIndex === 5)
          nextNoteIndex = 4;
        else if (noteIndex === 6)
          nextNoteIndex = 5;
        else if (noteIndex === 7)
          nextNoteIndex = 6;
        else if (noteIndex === 9)
          nextNoteIndex = 7;
        else if (noteIndex === 10)
          nextNoteIndex = 9;
        else if (noteIndex === 8) {
          const el = document.querySelector(`#grade-input-${studentId}-10`);
          if (el) {
            setTimeout(() => {
              el.focus();
              el.select();
              el.scrollIntoView({ block: "nearest", behavior: "smooth" });
              this.focusedCell = { studentId, noteIndex: 10 };
            }, 10);
          }
          return;
        } else if (noteIndex === 1) {
          if (studentIndex > 0) {
            const prev = this.students[studentIndex - 1];
            const el = document.querySelector(`#recup-oral-${prev.id}`);
            if (el) {
              setTimeout(() => {
                el.focus();
                el.select();
                el.scrollIntoView({ block: "nearest", behavior: "smooth" });
                this.focusedCell = { studentId: prev.id, noteIndex: 8 };
              }, 10);
            }
          }
          return;
        }
        break;
      }
      case "ArrowDown": {
        event.preventDefault();
        if (studentIndex < this.students.length - 1) {
          const next = this.students[studentIndex + 1];
          nextStudentId = next.id;
          if (isRecoveryCell) {
            const map = {
              "recup-escrita": `recup-escrita-${next.id}`,
              "recup-oral": `recup-oral-${next.id}`,
              "recovery-jinteg": `recovery-jinteg-${next.id}`,
              "recovery-compsocial": `recovery-compsocial-${next.id}`
            };
            const sel = document.querySelector(`#${map[recoveryField || ""]}`);
            if (sel) {
              setTimeout(() => {
                sel.focus();
                sel.scrollIntoView({ block: "nearest", behavior: "smooth" });
                this.focusedCell = { studentId: next.id, noteIndex: 8 };
              }, 10);
              return;
            }
            return;
          }
        }
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        if (studentIndex > 0) {
          const prev = this.students[studentIndex - 1];
          nextStudentId = prev.id;
          if (isRecoveryCell) {
            const map = {
              "recup-escrita": `recup-escrita-${prev.id}`,
              "recup-oral": `recup-oral-${prev.id}`,
              "recovery-jinteg": `recovery-jinteg-${prev.id}`,
              "recovery-compsocial": `recovery-compsocial-${prev.id}`
            };
            const sel = document.querySelector(`#${map[recoveryField || ""]}`);
            if (sel) {
              setTimeout(() => {
                sel.focus();
                sel.scrollIntoView({ block: "nearest", behavior: "smooth" });
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
        const input = document.querySelector(`#grade-input-${targetId}-${nextNoteIndex}`);
        if (input) {
          input.focus();
          input.select();
          input.scrollIntoView({ block: "nearest", behavior: "smooth" });
          this.focusedCell = { studentId: targetId, noteIndex: nextNoteIndex };
        }
      }, 10);
    }
  }
  static \u0275fac = function Grades_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Grades)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Grades, selectors: [["app-grades"]], hostBindings: function Grades_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("beforeunload", function Grades_beforeunload_HostBindingHandler() {
        return ctx.onBeforeUnload();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 8, vars: 2, consts: [[1, "grades-container"], [1, "page-header"], [1, "fullscreen-warning"], [1, "fullscreen-loading"], [1, "fullscreen-modal-overlay"], [1, "material-icons"], [1, "spinner"], [2, "color", "#2c3e50", "font-size", "1.1rem", "font-weight", "600"], [1, "grades-sidebar"], [1, "grade-range-indicator"], [1, "subject-selector"], [1, "grades-row"], [1, "grade-section"], [1, "right-content"], [1, "period-selector"], [1, "loading-indicator"], [1, "grades-list"], [1, "subject-btn", 3, "selected"], [1, "subject-btn", 3, "click"], [1, "classrooms"], [1, "classroom-btn", 3, "selected"], [1, "classroom-btn", 3, "click"], ["for", "period-select"], ["id", "period-select", "name", "period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "no-students-message"], [1, "report-header"], [1, "header-title"], [1, "header-subtitle"], [1, "report-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "table-container"], [1, "grades-table"], [1, "no-col"], [1, "student-col"], ["id", "th-act1", 1, "percent-col"], ["id", "th-act2", 1, "percent-col"], ["id", "th-act3", 1, "percent-col"], ["id", "th-act4", 1, "percent-col"], ["id", "th-act5", 1, "percent-col"], ["id", "th-act6", 1, "percent-col"], ["id", "th-act7", 1, "percent-col"], ["id", "th-auto-eval", 1, "calc-col"], ["id", "th-prom-parc", 1, "calc-col"], [1, "calc-col"], ["id", "th-eval-period", 1, "calc-col"], [1, "def-col"], ["id", "th-jinteg", 1, "recovery-col"], ["id", "th-comp-social", 1, "recovery-col"], ["id", "th-recup-escrita", 1, "percent-col"], ["id", "th-recup-oral", 1, "percent-col"], [1, "percent-col"], [1, "action-col"], [3, "alt", "failing", "losing", "excellent"], [1, "no-cell"], [1, "student-cell"], [1, "note-cell"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act1", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act2", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act3", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act4", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act5", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act6", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-act7", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-auto-eval", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-prom-parc", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], [1, "calc-cell"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-eval-period", 1, "grade-input", 3, "input", "click", "blur", "focus", "keydown", "id", "name", "value"], [1, "def-cell"], [1, "recovery-cell"], ["type", "text", "placeholder", "-", "maxlength", "50", "autocomplete", "off", "aria-labelledby", "th-jinteg", 1, "grade-input", 3, "input", "keydown", "focus", "id", "name", "value"], [1, "recovery-cell", "comp-social-cell"], [1, "grade-input", "comp-social-select", 3, "change", "focus", "id", "name", "ngModel"], ["value", ""], ["value", "S"], ["value", "E"], ["value", "A"], ["value", "I"], [1, "comp-social-label"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-recup-escrita", 1, "grade-input", 3, "input", "keydown", "focus", "id", "name", "value"], ["type", "text", "placeholder", "-", "maxlength", "4", "autocomplete", "off", "aria-labelledby", "th-recup-oral", 1, "grade-input", 3, "input", "keydown", "focus", "id", "name", "value"], [1, "action-cell"], ["title", "Generar Plan de Estudio", 1, "study-plan-btn", 3, "has-plan"], ["title", "Generar Plan de Estudio", 1, "study-plan-btn", 3, "click"], [1, "no-students-content"], [1, "fullscreen-modal-overlay", 3, "click"], [1, "fullscreen-modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body-fullscreen"], [1, "student-info"], ["id", "study-plan-content", 1, "plan-content-fullscreen", 3, "fade-in"], [1, "modal-footer"], [1, "grade-badge"], [1, "plan-guidelines"], [1, "topics-input"], ["for", "topics"], ["id", "topics", "name", "topics", "placeholder", "Ej: \xC1lgebra b\xE1sico, ecuaciones de primer grado, operaciones con fracciones...", "rows", "4", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "image-upload-section"], ["for", "topicImage"], [1, "upload-icon"], ["type", "file", "id", "topicImage", "name", "topicImage", "accept", "image/*", "multiple", "", "autocomplete", "off", 3, "change"], [1, "uploaded-images-preview"], [1, "generate-btn", 3, "click", "disabled"], [1, "image-preview-item"], ["alt", "Imagen adjunta", 3, "src"], ["type", "button", 1, "remove-image", 3, "click"], [1, "btn-progress-bar"], [1, "btn-progress-fill"], [1, "btn-progress-text"], ["id", "study-plan-content", 1, "plan-content-fullscreen"], [1, "plan-text", 3, "innerHTML"], [1, "print-btn", 3, "click"], [1, "saved-btn"], [1, "save-btn"], [1, "saved-btn", 3, "click"], [1, "saved-icon"], [1, "save-btn", 3, "click"]], template: function Grades_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Gesti\xF3n de Notas");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, Grades_Conditional_4_Template, 5, 0, "div", 2)(5, Grades_Conditional_5_Template, 4, 0, "div", 3)(6, Grades_Conditional_6_Template, 10, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, Grades_Conditional_7_Template, 12, 4, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isTeacher() && ctx.hasTeacherGradeRange === false ? 4 : ctx.isTeacher() && ctx.hasTeacherGradeRange === null ? 5 : 6);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showStudyPlanModal ? 7 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n\n.grades-container[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n  background: var(--bg);\n  min-height: 100vh;\n}\n.grades-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.grades-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: nowrap;\n  justify-content: center;\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.grades-row.fade-out[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(10px);\n}\n.grades-row.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.right-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  min-height: 400px;\n}\n.grades-sidebar[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  overflow-x: auto;\n}\n.grade-range-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n  padding: .5rem 1rem;\n  margin: 0 auto .75rem;\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  border-radius: var(--r-pill);\n  color: var(--brand-600);\n  font-weight: 700;\n  font-size: .9rem;\n  width: fit-content;\n}\n.grade-section[_ngcontent-%COMP%] {\n  min-width: 140px;\n  text-align: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 15px 10px;\n  box-shadow: var(--shadow-sm);\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.grade-section[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  box-shadow: var(--shadow-md);\n}\n.grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  font-size: 1rem;\n  margin: 0 0 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.classrooms[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-direction: column;\n}\n.classroom-btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  background: var(--brand);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color .2s ease, box-shadow .2s ease;\n  font-size: .85rem;\n  box-shadow: var(--shadow-xs);\n}\n.classroom-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.classroom-btn.selected[_ngcontent-%COMP%] {\n  background: var(--brand-600);\n  box-shadow: 0 0 0 3px var(--brand-100);\n}\n.subject-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background: var(--brand-50);\n  border-radius: var(--r-md);\n  border-left: 4px solid var(--brand);\n}\n.subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: .95rem;\n  font-weight: 600;\n  color: var(--text-2);\n  background: var(--surface);\n  cursor: pointer;\n  transition:\n    border-color .2s ease,\n    background-color .2s ease,\n    color .2s ease;\n}\n.subject-selector[_ngcontent-%COMP%]   .subject-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  color: var(--brand);\n}\n.subject-selector[_ngcontent-%COMP%]   .subject-btn.selected[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background: var(--surface-2);\n  border-radius: var(--r-md);\n  border-left: 4px solid var(--brand);\n}\n.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-2);\n}\n.period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: .95rem;\n  font-weight: 600;\n  color: var(--text-2);\n  background: var(--surface);\n  cursor: pointer;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n}\n.period-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.report-header[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n  overflow: hidden;\n  margin-bottom: 0;\n  background: var(--surface);\n}\n.header-title[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  padding: 10px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-1);\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 6px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n}\n.report-info[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: .85rem;\n  color: var(--text-2);\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 4px;\n  flex-wrap: wrap;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-3);\n}\n.info-value[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--text-1);\n}\n.table-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-top: none;\n  margin-top: 0;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  border-radius: 0 0 var(--r-md) var(--r-md);\n}\n.grades-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: .8rem;\n  font-family: var(--font);\n}\n.grades-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  color: var(--text-3);\n  padding: 6px 4px;\n  text-align: center;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  font-size: .7rem;\n  vertical-align: bottom;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n.grades-table[_ngcontent-%COMP%]   th.no-col[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.grades-table[_ngcontent-%COMP%]   th.student-col[_ngcontent-%COMP%] {\n  text-align: left;\n  min-width: 150px;\n}\n.grades-table[_ngcontent-%COMP%]   th.percent-col[_ngcontent-%COMP%] {\n  width: 35px;\n  min-width: 35px;\n  height: 100px;\n  white-space: nowrap;\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n  font-size: .7rem;\n  color: var(--text-3);\n}\n.grades-table[_ngcontent-%COMP%]   th.calc-col[_ngcontent-%COMP%] {\n  width: 40px;\n  min-width: 40px;\n  height: 100px;\n  white-space: nowrap;\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n  color: var(--text-3);\n}\n.grades-table[_ngcontent-%COMP%]   th.def-col[_ngcontent-%COMP%], \n.recovery-col[_ngcontent-%COMP%], \n.action-col[_ngcontent-%COMP%] {\n  width: 40px;\n  min-width: 40px;\n  background: var(--surface-2);\n}\n.grades-table[_ngcontent-%COMP%]   th.def-col[_ngcontent-%COMP%] {\n  width: 50px;\n  min-width: 50px;\n}\n.action-col[_ngcontent-%COMP%] {\n  width: 60px;\n  min-width: 60px;\n}\n.grades-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  padding: 0;\n  height: 25px;\n}\n.grades-table[_ngcontent-%COMP%]   tr.alt[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n.grades-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n}\n.grades-table[_ngcontent-%COMP%]   tr.failing[_ngcontent-%COMP%] {\n  background: var(--danger-bg) !important;\n}\n.grades-table[_ngcontent-%COMP%]   tr.failing[_ngcontent-%COMP%]:hover {\n  background: #fbd5d5 !important;\n}\n.grades-table[_ngcontent-%COMP%]   tr.losing[_ngcontent-%COMP%] {\n  background: var(--warning-bg) !important;\n}\n.grades-table[_ngcontent-%COMP%]   tr.losing[_ngcontent-%COMP%]:hover {\n  background: #fbe6bf !important;\n}\n.grades-table[_ngcontent-%COMP%]   tr.excellent[_ngcontent-%COMP%] {\n  background: var(--success-bg) !important;\n}\n.grades-table[_ngcontent-%COMP%]   tr.excellent[_ngcontent-%COMP%]:hover {\n  background: #bfe6cc !important;\n}\n.no-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  padding: 4px !important;\n}\n.student-cell[_ngcontent-%COMP%] {\n  padding: 4px 8px !important;\n  font-weight: 500;\n  text-align: left;\n}\n.note-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: center;\n}\n.calc-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: center;\n  font-weight: 600;\n  background: #e8e8e8;\n  font-size: .75rem;\n}\n.def-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  background: #d9d9d9;\n  color: #000;\n}\n.recovery-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: center;\n  background: #f5f5f5;\n}\n.grade-input[_ngcontent-%COMP%], \n.recovery-cell[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 28px;\n  border: none;\n  text-align: center;\n  font-size: .8rem;\n  font-weight: 600;\n  background: transparent;\n  color: #000;\n  padding: 0 2px;\n}\n.grade-input[_ngcontent-%COMP%]:focus, \n.recovery-cell[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #1b6aeb;\n  background: #fff;\n}\n.grade-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.def-cell.grade-green[_ngcontent-%COMP%] {\n  background-color: #92d050 !important;\n}\n.def-cell.grade-yellow[_ngcontent-%COMP%] {\n  background-color: #ffff00 !important;\n}\n.def-cell.grade-red[_ngcontent-%COMP%] {\n  background-color: #ff6b6b !important;\n}\n.grade-green[_ngcontent-%COMP%] {\n  background-color: #c6efce !important;\n}\n.grade-green[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%] {\n  color: #006100;\n}\n.grade-yellow[_ngcontent-%COMP%] {\n  background-color: #ffeb9c !important;\n}\n.grade-yellow[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%] {\n  color: #9c5700;\n}\n.grade-red[_ngcontent-%COMP%] {\n  background-color: #ffc7ce !important;\n}\n.grade-red[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%] {\n  color: #9c0006;\n}\n.comp-social-cell[_ngcontent-%COMP%] {\n  position: relative;\n}\n.comp-social-input[_ngcontent-%COMP%], \n.comp-social-select[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.comp-social-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.comp-social-label[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  bottom: -22px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: .65rem;\n  white-space: nowrap;\n  background: #333;\n  color: #fff;\n  padding: 3px 6px;\n  border-radius: 4px;\n  z-index: 10;\n  pointer-events: none;\n}\n.comp-social-cell[_ngcontent-%COMP%]:hover   .comp-social-label[_ngcontent-%COMP%] {\n  display: block;\n}\n.comp-social-green[_ngcontent-%COMP%] {\n  background-color: #c6efce !important;\n}\n.comp-social-green[_ngcontent-%COMP%]   .comp-social-input[_ngcontent-%COMP%], \n.comp-social-green[_ngcontent-%COMP%]   .comp-social-select[_ngcontent-%COMP%] {\n  color: #006100;\n}\n.comp-social-yellow[_ngcontent-%COMP%] {\n  background-color: #ffeb9c !important;\n}\n.comp-social-yellow[_ngcontent-%COMP%]   .comp-social-input[_ngcontent-%COMP%], \n.comp-social-yellow[_ngcontent-%COMP%]   .comp-social-select[_ngcontent-%COMP%] {\n  color: #9c5700;\n}\n.comp-social-orange[_ngcontent-%COMP%] {\n  background-color: #ffcc80 !important;\n}\n.comp-social-orange[_ngcontent-%COMP%]   .comp-social-input[_ngcontent-%COMP%], \n.comp-social-orange[_ngcontent-%COMP%]   .comp-social-select[_ngcontent-%COMP%] {\n  color: #e65100;\n}\n.comp-social-red[_ngcontent-%COMP%] {\n  background-color: #ffc7ce !important;\n}\n.comp-social-red[_ngcontent-%COMP%]   .comp-social-input[_ngcontent-%COMP%], \n.comp-social-red[_ngcontent-%COMP%]   .comp-social-select[_ngcontent-%COMP%] {\n  color: #9c0006;\n}\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777777;\n  font-size: 1.1rem;\n}\n.fullscreen-loading[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 1rem !important;\n  min-height: 60vh !important;\n  margin: 2rem !important;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(27, 106, 235, .2);\n  border-top: 4px solid #1b6aeb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n.no-students-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n}\n.no-students-content[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 30px;\n}\n.no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 10px;\n}\n.no-students-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n}\n.no-active-period-message[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #f59e0b;\n}\n.fullscreen-warning[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: .75rem !important;\n  padding: 2rem !important;\n  background:\n    linear-gradient(\n      135deg,\n      #fffbeb,\n      #fef3c7) !important;\n  border: 1px solid #fcd34d !important;\n  border-radius: 16px !important;\n  color: #92400e !important;\n  font-weight: 700 !important;\n  font-size: 1.1rem !important;\n  min-height: 60vh !important;\n  margin: 2rem !important;\n  box-shadow: 0 10px 30px #0000001a !important;\n}\n.fullscreen-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: #0f172ae6;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  animation: _ngcontent-%COMP%_fadeIn .3s ease;\n}\n.fullscreen-modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  width: 95%;\n  max-width: 1400px;\n  height: 92vh;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_slideUp .4s ease;\n  border: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  padding: 20px 24px;\n  border-radius: var(--r-md) var(--r-md) 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  letter-spacing: .3px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .18);\n  border: none;\n  color: #fff;\n  font-size: 1.5rem;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color .2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .32);\n}\n.modal-body-fullscreen[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px 20px;\n  flex-shrink: 0;\n  background: var(--surface-2);\n  border-top: 1px solid var(--border);\n}\n.action-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: center;\n  background: var(--surface-2);\n}\n.study-plan-btn[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color .2s ease, box-shadow .2s ease;\n}\n.study-plan-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  box-shadow: var(--shadow-sm);\n}\n.study-plan-btn.has-plan[_ngcontent-%COMP%] {\n  background: var(--success) !important;\n}\n.study-plan-btn.has-plan[_ngcontent-%COMP%]:hover {\n  background: #15803d !important;\n}\n.generate-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: var(--brand);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 15px;\n  transition: background-color .2s ease, box-shadow .2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: var(--shadow-xs);\n}\n.generate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.generate-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n.generate-btn.generated[_ngcontent-%COMP%] {\n  background: var(--success) !important;\n  cursor: default;\n}\n.generate-btn.generating[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.save-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--success);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color .2s ease, box-shadow .2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: var(--shadow-xs);\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  box-shadow: var(--shadow-sm);\n}\n.saved-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--success);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.print-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--surface);\n  color: var(--brand);\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: .9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color .2s ease;\n}\n.print-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n}\n.student-info[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  padding: 15px;\n  border-radius: var(--r-md);\n  margin-bottom: 20px;\n  border-left: 4px solid var(--brand);\n}\n.student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: var(--text-2);\n}\n.grade-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-weight: 700;\n}\n.grade-badge.grade-green[_ngcontent-%COMP%] {\n  background: #c6efce;\n  color: #006100;\n}\n.grade-badge.grade-yellow[_ngcontent-%COMP%] {\n  background: #ffeb9c;\n  color: #9c5700;\n}\n.grade-badge.grade-red[_ngcontent-%COMP%] {\n  background: #ffc7ce;\n  color: #9c0006;\n}\n.topics-input[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.topics-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.topics-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: .9rem;\n  font-family: var(--font);\n  resize: vertical;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.topics-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, .15);\n}\n.image-upload-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 15px;\n  background: var(--surface-2);\n  border-radius: var(--r-md);\n  border: 2px dashed var(--border-strong);\n}\n.image-upload-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n  font-weight: 500;\n}\n.image-upload-section[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.uploaded-images-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 12px;\n}\n.image-preview-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid #e0e0e0;\n}\n.image-preview-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.remove-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 20px;\n  height: 20px;\n  background: #dc3545e6;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.remove-image[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n}\n.plan-guidelines[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border-radius: 12px;\n  border: 1px solid #bfdbfe;\n  padding: 16px 18px;\n  margin-bottom: 16px;\n  color: #1e3a8a;\n  box-shadow: inset 0 0 0 1px #3b82f614;\n}\n.plan-guidelines[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-size: .97rem;\n}\n.plan-guidelines[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: .92rem;\n  line-height: 1.6;\n}\n.plan-content-fullscreen[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc,\n      #fff,\n      #f1f5f9);\n  padding: 40px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  flex: 1;\n  overflow-y: auto;\n  box-shadow: inset 0 0 30px #1b6aeb08;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n.plan-content-fullscreen[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  text-align: center;\n  margin: 0 0 30px;\n  padding: 20px 40px;\n  border-bottom: 3px solid #1b6aeb;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #3b82f6);\n  border-radius: 12px;\n  box-shadow: 0 4px 20px #1b6aeb4d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.plan-text[_ngcontent-%COMP%] {\n  font-family:\n    Segoe UI,\n    Arial,\n    sans-serif;\n  line-height: 1.75;\n  color: #1a202c;\n  font-size: 15px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.plan-text[_ngcontent-%COMP%]   .paragraph-block[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  clear: both;\n  width: 100%;\n}\n.plan-text[_ngcontent-%COMP%]   .paragraph-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  line-height: 1.9;\n  text-align: justify;\n  width: 100%;\n  box-sizing: border-box;\n}\n.plan-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.plan-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 35px 0 20px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #3b82f6);\n  border-radius: 12px;\n  box-shadow: 0 4px 15px #1e40af40;\n}\n.plan-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.plan-text[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  color: #1e40af;\n  font-size: 18px;\n  margin: 25px 0 15px;\n  font-weight: 600;\n  padding: 12px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border-radius: 8px;\n  border-left: 5px solid #3b82f6;\n  display: block;\n}\n.plan-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 16px;\n  margin: 20px 0 12px;\n  font-weight: 600;\n  background: #f1f5f9;\n  padding: 10px 16px;\n  border-radius: 6px;\n  border-left: 4px solid #64748b;\n}\n.plan-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1b6aeb;\n  font-weight: 700;\n}\n.plan-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #555;\n  font-style: italic;\n}\n.plan-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.plan-text[_ngcontent-%COMP%]   .ai-list[_ngcontent-%COMP%] {\n  margin: 15px 0 20px 25px;\n  padding-left: 10px;\n}\n.plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style-type: decimal;\n  margin: 15px 0 20px 25px;\n  padding-left: 15px;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.plan-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 12px 16px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px #0000000d;\n}\n.plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px #0000000d;\n  transition: all .2s ease;\n}\n.plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 8px #2563eb1a;\n}\n.plan-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.7;\n}\n.plan-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #3b82f6;\n  font-weight: 600;\n}\n.plan-text[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.plan-text[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  padding: 0;\n}\n.plan-text[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px #0000000f;\n  transition: all .3s ease;\n}\n.plan-text[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px #0ea5e926;\n  border-color: #0ea5e9;\n}\n.plan-text[_ngcontent-%COMP%]   .video-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.plan-text[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.plan-text[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .video-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e40af;\n  text-decoration: none;\n  margin-bottom: 4px;\n  transition: color .2s ease;\n}\n.plan-text[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .video-link[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  text-decoration: underline;\n}\n.plan-text[_ngcontent-%COMP%]   .video-source[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.plan-text[_ngcontent-%COMP%]   .video-unavailable[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  color: #991b1b;\n}\n.plan-text[_ngcontent-%COMP%]   .video-unavailable-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #fecaca;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #991b1b;\n  font-size: 14px;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.plan-text[_ngcontent-%COMP%]   .video-unavailable-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.plan-text[_ngcontent-%COMP%]   .video-unavailable-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #991b1b;\n}\n.plan-text[_ngcontent-%COMP%]   .video-unavailable-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b91c1c;\n}\n.plan-text[_ngcontent-%COMP%]   .video-unavailable-url[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #dc2626;\n  word-break: break-all;\n  margin-top: 2px;\n}\n.plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 10px;\n  color: #64748b;\n  border: 2px dashed #cbd5e1;\n  margin: 20px 0;\n}\n.plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%]   .no-videos-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 14px;\n}\n.plan-text[_ngcontent-%COMP%]   .video-status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 8px;\n}\n.plan-text[_ngcontent-%COMP%]   .video-status-badge.available[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.plan-text[_ngcontent-%COMP%]   .video-status-badge.unavailable[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.plan-text[_ngcontent-%COMP%]   .video-status-badge.checking[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-section-header[_ngcontent-%COMP%] {\n  margin: 30px 0 20px;\n  padding: 14px 20px;\n  border-radius: 8px;\n  font-weight: 700;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-h2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a,\n      #1e40af,\n      #2563eb);\n  color: #fff;\n  font-size: 20px;\n  box-shadow: 0 4px 12px #1e40af40;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-h3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #bfdbfe);\n  color: #1e40af;\n  font-size: 16px;\n  border-left: 4px solid #2563eb;\n  box-shadow: 0 2px 8px #2563eb1a;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-h4[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 14px;\n  border-left: 3px solid #64748b;\n}\n.plan-text[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  overflow-x: auto;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px #2563eb26;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%], \n.plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 25px 0;\n  font-size: 14px;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px #2563eb26;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #2563eb,\n      #1d4ed8);\n  color: #fff;\n  padding: 16px 14px;\n  text-align: left;\n  font-weight: 700;\n  border: 1px solid #1e3a8a;\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: .8px;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  transition: all .2s;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #eff6ff,\n      #dbeafe);\n}\n.plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n.plan-text[_ngcontent-%COMP%]   .fraction[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: middle;\n  text-align: center;\n  margin: 0 4px;\n  font-size: 1.1em;\n  line-height: 1;\n}\n.plan-text[_ngcontent-%COMP%]   .fraction[_ngcontent-%COMP%]   .numerator[_ngcontent-%COMP%] {\n  border-bottom: 1.5px solid currentColor;\n  padding-bottom: 2px;\n  display: block;\n  line-height: 1.2;\n}\n.plan-text[_ngcontent-%COMP%]   .fraction[_ngcontent-%COMP%]   .denominator[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  display: block;\n  line-height: 1.2;\n}\n.plan-text[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  font-size: .7em;\n  vertical-align: super;\n  line-height: 0;\n}\n.plan-text[_ngcontent-%COMP%]   .math-root[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 1px;\n}\n.plan-text[_ngcontent-%COMP%]   .math-root[_ngcontent-%COMP%]:before {\n  content: "\\221a";\n  margin-right: 1px;\n  font-size: 1.2em;\n}\n.plan-text[_ngcontent-%COMP%]   .integral[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 1.3em;\n  font-family: Times New Roman, serif;\n}\n.plan-text[_ngcontent-%COMP%]   .math-large[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  color: #1e40af;\n  font-weight: 700;\n  display: inline-block;\n  padding: 4px 8px;\n  vertical-align: middle;\n  line-height: 1.6;\n}\n.plan-text[_ngcontent-%COMP%]   .math-large-block[_ngcontent-%COMP%] {\n  font-size: 2.2em;\n  color: #1e40af;\n  font-weight: 700;\n  display: block;\n  padding: 16px 24px;\n  margin: 16px 0;\n  background: #f0f4ff;\n  border-radius: 12px;\n  border: 2px solid #c7d2fe;\n  text-align: center;\n  line-height: 1.8;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  color: #1e3a8a;\n  line-height: 1.4;\n  display: inline-block !important;\n  vertical-align: middle;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n  margin: 0 2px;\n  display: inline-flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  gap: 0 6px !important;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: 0 4px !important;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .frac-line[_ngcontent-%COMP%] {\n  border-top-width: 3px;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mord.ros[_ngcontent-%COMP%] {\n  font-size: .7em;\n  top: -.4em;\n}\n.plan-text[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%]   .mord.uos[_ngcontent-%COMP%] {\n  font-size: .7em;\n  top: -.8em;\n}\n.plan-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:empty    + .katex[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%] {\n  margin: 4px 6px;\n  padding: 6px 12px;\n  background: #f5f8ff;\n  border-radius: 10px;\n  overflow-x: auto;\n  text-align: left;\n  border: 1px solid #e0e7ff;\n  box-shadow: none;\n  display: inline-block;\n  vertical-align: middle;\n}\n.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]   .katex[_ngcontent-%COMP%] {\n  font-size: 1.9em;\n}\n.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]:before, \n.plan-text[_ngcontent-%COMP%]   .katex-display[_ngcontent-%COMP%]:after {\n  content: "";\n  display: table;\n}\n.plan-text[_ngcontent-%COMP%]   mjx-container[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 2.5em;\n  display: inline-block !important;\n  vertical-align: middle;\n}\n.plan-text[_ngcontent-%COMP%]   mjx-container[jax=CHTML][_ngcontent-%COMP%] {\n  display: inline-block !important;\n  margin: 0 4px;\n  vertical-align: middle;\n}\n.plan-text[_ngcontent-%COMP%]   mjx-container[jax=CHTML][display=true][_ngcontent-%COMP%] {\n  display: block !important;\n  text-align: center;\n  margin: 30px auto;\n}\n.plan-text[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #eef4ff);\n  border: 1px solid #dbe7ff;\n  border-left: 5px solid #2563eb;\n  border-radius: 14px;\n  padding: 18px 22px;\n  margin: 18px 0;\n  box-shadow: 0 6px 18px #2563eb14;\n}\n.plan-text[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  padding: 6px 14px;\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #2563eb);\n  color: #fff;\n  border-radius: 999px;\n  font-size: 15px;\n  letter-spacing: .5px;\n  box-shadow: 0 4px 10px #2563eb40;\n}\n.plan-text[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 4px 4px;\n  padding-left: 18px;\n}\n.plan-text[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.8;\n}\n.plan-text[_ngcontent-%COMP%]   .day-badge[_ngcontent-%COMP%], \n.recoveries-container[_ngcontent-%COMP%]   .day-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.plan-text[_ngcontent-%COMP%]   .day-badge.day1[_ngcontent-%COMP%], \n.recoveries-container[_ngcontent-%COMP%]   .day-badge.day1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e);\n}\n.plan-text[_ngcontent-%COMP%]   .day-badge.day2[_ngcontent-%COMP%], \n.recoveries-container[_ngcontent-%COMP%]   .day-badge.day2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d97706,\n      #f59e0b);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-green {\n  0% {\n    box-shadow: 0 0 #27ae6066;\n  }\n  70% {\n    box-shadow: 0 0 0 6px #27ae6000;\n  }\n  to {\n    box-shadow: 0 0 0 0 #27ae6000;\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translate(-100%);\n  }\n  to {\n    transform: translate(100%);\n  }\n}\n@keyframes _ngcontent-%COMP%_savedPulse {\n  0% {\n    transform: scale(.8);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_checkmark {\n  0% {\n    transform: scale(0) rotate(-45deg);\n  }\n  50% {\n    transform: scale(1.2) rotate(0);\n  }\n  to {\n    transform: scale(1) rotate(0);\n  }\n}\n.btn-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffff26;\n  z-index: 0;\n  overflow: hidden;\n}\n.btn-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #27ae60,\n      #2ecc71,\n      #27ae60);\n  transition: width .15s ease-out;\n  box-shadow: 0 0 15px #27ae60b3;\n  position: relative;\n}\n.btn-progress-fill[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, .5) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n.btn-progress-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, .4);\n  letter-spacing: .5px;\n}\n.plan-content-fullscreen.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp .8s ease-out;\n}\n.saved-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_checkmark .3s ease-out;\n}\n@media (max-width: 1200px) {\n  .grades-table[_ngcontent-%COMP%] {\n    font-size: .7rem;\n  }\n  .grades-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .grades-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 2px;\n  }\n  .grade-input[_ngcontent-%COMP%] {\n    height: 24px;\n    font-size: .7rem;\n  }\n}\n@media (max-width: 768px) {\n  .grades-container[_ngcontent-%COMP%], \n   .grades-sidebar[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .grades-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    margin-bottom: var(--sp-5);\n  }\n  .grades-row[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .grade-section[_ngcontent-%COMP%] {\n    min-width: 100px;\n    padding: 10px 5px;\n  }\n  .grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: .8rem;\n  }\n  .classroom-btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: .75rem;\n  }\n  .right-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    border: 1px solid var(--border);\n    margin-top: 0;\n    overflow-x: auto;\n    border-radius: 0 0 var(--r-md) var(--r-md);\n  }\n  .grades-table[_ngcontent-%COMP%] {\n    font-size: .65rem;\n    min-width: 820px;\n  }\n  .grades-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: .6rem;\n    padding: 2px;\n  }\n  .grades-table[_ngcontent-%COMP%]   th.percent-col[_ngcontent-%COMP%], \n   .grades-table[_ngcontent-%COMP%]   th.calc-col[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n  .grades-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0;\n    height: 20px;\n  }\n  .grade-input[_ngcontent-%COMP%] {\n    height: 20px;\n    font-size: .65rem;\n  }\n  .no-cell[_ngcontent-%COMP%], \n   .student-cell[_ngcontent-%COMP%] {\n    padding: 2px !important;\n    font-size: .7rem;\n  }\n  .student-cell[_ngcontent-%COMP%] {\n    min-width: 100px;\n    white-space: nowrap;\n  }\n  .report-header[_ngcontent-%COMP%] {\n    font-size: .8rem;\n  }\n  .header-title[_ngcontent-%COMP%] {\n    font-size: .9rem;\n  }\n  .header-subtitle[_ngcontent-%COMP%] {\n    font-size: .8rem;\n  }\n  .report-info[_ngcontent-%COMP%] {\n    font-size: .75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%]   .print-btn[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%]   .saved-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .grades-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .grade-section[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .classroom-btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: .7rem;\n  }\n  .grades-table[_ngcontent-%COMP%] {\n    font-size: .6rem;\n    min-width: 720px;\n  }\n}\n.grades-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.grades-container[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%]:focus-visible, \n.grades-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, \n.grades-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.grades-container[_ngcontent-%COMP%]   .comp-social-select[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n@media print {\n  .ai-table[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .ai-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #eee !important;\n    color: #000 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n[data-theme="dark"][_nghost-%COMP%]   .grade-input[_ngcontent-%COMP%]:focus, [data-theme="dark"]   [_nghost-%COMP%]   .grade-input[_ngcontent-%COMP%]:focus, \n[data-theme="dark"][_nghost-%COMP%]   .recovery-cell[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%]:focus, [data-theme="dark"]   [_nghost-%COMP%]   .recovery-cell[_ngcontent-%COMP%]   .grade-input[_ngcontent-%COMP%]:focus {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-content-fullscreen[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-content-fullscreen[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-source[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-source[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-source[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .video-source[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .no-videos-message[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h4[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-h4[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-content-fullscreen[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .plan-text[_ngcontent-%COMP%]   .ai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n/*# sourceMappingURL=grades.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Grades, [{
    type: Component,
    args: [{ selector: "app-grades", standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="grades-container">
  <div class="page-header">
    <h2>Gesti\xF3n de Notas</h2>
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
            [class.selected]="selectedSubjectId === subject.id"
            (click)="onSubjectChange(subject)"
          >
            {{ subject.name }}{{ subject.level ? ' (' + subject.level + ')' : '' }}
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
          <p>Cargando notas...</p>
        </div>
      }

      @if (selectedGrade && selectedClassroom && !isLoading) {
        <div class="grades-list">
          @if (students.length > 0) {
            <div class="report-header">
              <div class="header-title">CORPORACION COLEGIO TRINITARIO</div>
              <div class="header-subtitle">LISTADO DE NOTAS</div>
              <div class="report-info">
                <div class="info-row">
                  <span class="info-label">PERIODO:</span>
                  <span class="info-value">{{ selectedPeriod }}</span>
                  <span class="info-label">\xC1REA/ASIGNATURA:</span>
                  <span class="info-value">{{ selectedSubjectLabel }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">GRADO:</span>
                  <span class="info-value">{{ selectedGrade }}</span>
                  <span class="info-label">GRUPO:</span>
                  <span class="info-value">{{ selectedClassroom }}</span>
                  <span class="info-label">A\xD1O:</span>
                  <span class="info-value">{{ currentYear }}</span>
                </div>
              </div>
            </div>

            <div class="table-container">
              <table class="grades-table">
                <thead>
                  <tr>
                    <th class="no-col">No.</th>
                    <th class="student-col">ESTUDIANTE</th>
                    <th id="th-act1" class="percent-col">ACT1</th>
                    <th id="th-act2" class="percent-col">ACT2</th>
                    <th id="th-act3" class="percent-col">ACT3</th>
                    <th id="th-act4" class="percent-col">ACT4</th>
                    <th id="th-act5" class="percent-col">ACT5</th>
                    <th id="th-act6" class="percent-col">ACT6</th>
                    <th id="th-act7" class="percent-col">ACT7</th>
                    <th id="th-auto-eval" class="calc-col">Auto.Eval</th>
                    <th id="th-prom-parc" class="calc-col">Prom.Parc</th>
                    <th class="calc-col">80%</th>
                    <th id="th-eval-period" class="calc-col">Eval.Period</th>
<th class="calc-col">20%</th>
                     <th class="def-col">N.FINAL</th>
                    <th id="th-jinteg" class="recovery-col">J.INTEG</th>
                    <th id="th-comp-social" class="recovery-col">COMP SOCIAL</th>
                    <th id="th-recup-escrita" class="percent-col">Recup.Esc</th>
                    <th id="th-recup-oral" class="percent-col">Recup.Oral</th>
                    <th class="percent-col">Nota.Recup</th>
                    <th class="action-col">ACCI\xD3N</th>
                  </tr>
                </thead>
                <tbody>
                  @for (student of students; track student; let i = $index) {
                    <tr [class.alt]="i % 2 === 1" [class.failing]="needsRecovery(student.id)" [class.losing]="isLosing(student.id)" [class.excellent]="hasExcellentGrade(student.id)">
                      <td class="no-cell">{{ i + 1 }}</td>
                      <td class="student-cell">{{ student.surname }} {{ student.name }}</td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 1))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-1'" [name]="'grade-' + student.id + '-1'" [value]="getGradeDisplay(student.id, 1)" (input)="onGradeChange(student.id, 1, $event)" (click)="onGradeClick(student.id, 1, $event)" (blur)="onGradeBlur(student.id, 1, $event)" (focus)="onCellFocus(student.id, 1)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act1" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 2))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-2'" [name]="'grade-' + student.id + '-2'" [value]="getGradeDisplay(student.id, 2)" (input)="onGradeChange(student.id, 2, $event)" (click)="onGradeClick(student.id, 2, $event)" (blur)="onGradeBlur(student.id, 2, $event)" (focus)="onCellFocus(student.id, 2)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act2" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 3))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-3'" [name]="'grade-' + student.id + '-3'" [value]="getGradeDisplay(student.id, 3)" (input)="onGradeChange(student.id, 3, $event)" (click)="onGradeClick(student.id, 3, $event)" (blur)="onGradeBlur(student.id, 3, $event)" (focus)="onCellFocus(student.id, 3)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act3" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 4))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-4'" [name]="'grade-' + student.id + '-4'" [value]="getGradeDisplay(student.id, 4)" (input)="onGradeChange(student.id, 4, $event)" (click)="onGradeClick(student.id, 4, $event)" (blur)="onGradeBlur(student.id, 4, $event)" (focus)="onCellFocus(student.id, 4)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act4" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 5))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-5'" [name]="'grade-' + student.id + '-5'" [value]="getGradeDisplay(student.id, 5)" (input)="onGradeChange(student.id, 5, $event)" (click)="onGradeClick(student.id, 5, $event)" (blur)="onGradeBlur(student.id, 5, $event)" (focus)="onCellFocus(student.id, 5)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act5" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 6))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-6'" [name]="'grade-' + student.id + '-6'" [value]="getGradeDisplay(student.id, 6)" (input)="onGradeChange(student.id, 6, $event)" (click)="onGradeClick(student.id, 6, $event)" (blur)="onGradeBlur(student.id, 6, $event)" (focus)="onCellFocus(student.id, 6)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act6" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 7))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-7'" [name]="'grade-' + student.id + '-7'" [value]="getGradeDisplay(student.id, 7)" (input)="onGradeChange(student.id, 7, $event)" (click)="onGradeClick(student.id, 7, $event)" (blur)="onGradeBlur(student.id, 7, $event)" (focus)="onCellFocus(student.id, 7)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-act7" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 9))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-9'" [name]="'grade-' + student.id + '-9'" [value]="getGradeDisplay(student.id, 9)" (input)="onGradeChange(student.id, 9, $event)" (click)="onGradeClick(student.id, 9, $event)" (blur)="onGradeBlur(student.id, 9, $event)" (focus)="onCellFocus(student.id, 9)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-auto-eval" />
                      </td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 10))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-10'" [name]="'grade-' + student.id + '-10'" [value]="getGradeDisplay(student.id, 10)" (input)="onGradeChange(student.id, 10, $event)" (click)="onGradeClick(student.id, 10, $event)" (blur)="onGradeBlur(student.id, 10, $event)" (focus)="onCellFocus(student.id, 10)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-prom-parc" />
                      </td>

                      <td class="calc-cell" [class]="get80Color(student.id)">{{ get80Percent(student.id) }}</td>

                      <td class="note-cell" [class]="getGradeColor(getGrade(student.id, 8))">
                        <input type="text" class="grade-input" [id]="'grade-input-' + student.id + '-8'" [name]="'grade-' + student.id + '-8'" [value]="getGradeDisplay(student.id, 8)" (input)="onGradeChange(student.id, 8, $event)" (click)="onGradeClick(student.id, 8, $event)" (blur)="onGradeBlur(student.id, 8, $event)" (focus)="onCellFocus(student.id, 8)" (keydown)="handleKeydown($event)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-eval-period" />
                      </td>

                      <td class="calc-cell" [class]="get20Color(student.id)">{{ get20Percent(student.id) }}</td>

                      <td class="def-cell" [class]="getFinalColor(student.id)">{{ getFinalWithRecovery(student.id) }}</td>

                      <td class="recovery-cell">
                        <input type="text" class="grade-input" [id]="'recovery-jinteg-' + student.id" [name]="'recovery-jinteg-' + student.id" [value]="getCurrentSubjectRecoveryData(student.id)?.jInteg || ''" (input)="onJIntegChange(student.id, $event)" (keydown)="handleKeydown($event)" (focus)="onCellFocus(student.id, 8)" placeholder="-" maxlength="50" autocomplete="off" aria-labelledby="th-jinteg" />
                      </td>

                      <td class="recovery-cell comp-social-cell" [class]="getCompSocialColor(student.id)">
                        <select class="grade-input comp-social-select" [id]="'recovery-compsocial-' + student.id" [name]="'recovery-compsocial-' + student.id" [ngModel]="getCurrentSubjectRecoveryData(student.id)?.compSocial || ''" (change)="onCompSocialChange(student.id, $event)" (focus)="onCellFocus(student.id, 8)">
                          <option value="">-</option>
                          <option value="S">S</option>
                          <option value="E">E</option>
                          <option value="A">A</option>
                          <option value="I">I</option>
                        </select>
                        <span class="comp-social-label">{{ getCompSocialScaleLabel(student.id) }}</span>
                      </td>

                      <td class="note-cell">
                        <input type="text" class="grade-input" [id]="'recup-escrita-' + student.id" [name]="'recup-escrita-' + student.id" [value]="(getCurrentSubjectRecoveryData(student.id)?.written ?? '').toString().replace('.', ',')" (input)="onRecoveryWrittenChange(student.id, $event)" (keydown)="handleKeydown($event)" (focus)="onCellFocus(student.id, 8)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-recup-escrita" />
                      </td>

                      <td class="note-cell">
                        <input type="text" class="grade-input" [id]="'recup-oral-' + student.id" [name]="'recup-oral-' + student.id" [value]="(getCurrentSubjectRecoveryData(student.id)?.oral ?? '').toString().replace('.', ',')" (input)="onRecoveryOralChange(student.id, $event)" (keydown)="handleKeydown($event)" (focus)="onCellFocus(student.id, 8)" placeholder="-" maxlength="4" autocomplete="off" aria-labelledby="th-recup-oral" />
                      </td>

                      <td class="calc-cell">{{ getNotaRecup(student.id) }}</td>

                      <td class="action-cell">
                        @if (needsRecovery(student.id) || hasRecoveryPlan(student.id, selectedPeriod)) {
                          <button class="study-plan-btn" [class.has-plan]="hasRecoveryPlan(student.id, selectedPeriod)" (click)="openStudyPlanModal(student)" title="Generar Plan de Estudio">\u{1F4DA}</button>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }

          @if (students.length === 0) {
            <div class="no-students-message">
              <div class="no-students-content">
                <h3>No hay estudiantes en este sal\xF3n</h3>
                <p>El grado {{ selectedGrade }} - {{ selectedClassroom }} no tiene estudiantes registrados.</p>
              </div>
            </div>
          }
        </div>
      }
    </div>
  }
</div>

<!-- AI Study Plan Modal -->
@if (showStudyPlanModal) {
  <div class="fullscreen-modal-overlay" (click)="closeStudyPlanModal()">
    <div class="fullscreen-modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h2>\u{1F4DA} Plan de Estudio</h2>
        <button class="close-btn" (click)="closeStudyPlanModal()">\xD7</button>
      </div>

      <div class="modal-body-fullscreen">
         @if (selectedStudentForPlan) {
           <div class="student-info">
             <p><strong>Estudiante:</strong> {{ selectedStudentForPlan.surname }} {{ selectedStudentForPlan.name }}</p>
             <p><strong>Grado:</strong> {{ selectedGrade }} | <strong>Per\xEDodo:</strong> {{ selectedPeriod }}</p>
             <p><strong>Nota Actual:</strong> <span class="grade-badge" [class]="getFinalColor(selectedStudentForPlan.id)">{{ getFinalWithRecovery(selectedStudentForPlan.id) }}</span></p>
           </div>
         }

        @if (!planGenerated) {
            <div class="plan-guidelines">
              <strong>Plan profesional completo:</strong>
              <p>El plan incluir\xE1 objetivo, cronograma de un solo d\xEDa (D\xCDA 1), recursos reales, ejercicios pr\xE1cticos, consejos y evaluaci\xF3n final. No se interrumpir\xE1 a la mitad.</p>
            </div>
            <div class="topics-input">
              <label for="topics">\u{1F4DD} Temas que debe estudiar el estudiante:</label>
              <textarea id="topics" name="topics" [(ngModel)]="studyPlanTopics" placeholder="Ej: \xC1lgebra b\xE1sico, ecuaciones de primer grado, operaciones con fracciones..." rows="4" autocomplete="off"></textarea>

            <div class="image-upload-section">
              <label for="topicImage">
                <span class="upload-icon">\u{1F4F7}</span>
                Adjuntar imagen (opcional)
              </label>
               <input type="file" id="topicImage" name="topicImage" accept="image/*" (change)="onImageSelected($event)" multiple autocomplete="off">
              @if (uploadedImages.length > 0) {
                <div class="uploaded-images-preview">
                  @for (img of uploadedImages; track $index) {
                    <div class="image-preview-item">
                      <img [src]="img.preview" alt="Imagen adjunta">
                      <button type="button" class="remove-image" (click)="removeImage($index)">\u2715</button>
                    </div>
                  }
                </div>
              }
            </div>

            <button class="generate-btn" [class.generated]="planGenerated" [class.generating]="isGeneratingPlan" (click)="generateStudyPlan()" [disabled]="!studyPlanTopics.trim() || isGeneratingPlan">
              @if (isGeneratingPlan) {
                <div class="btn-progress-bar">
                  <div class="btn-progress-fill" [style.width.%]="progressPercent"></div>
                </div>
                <span class="btn-progress-text">{{ progressPercent | number:'1.0-0' }}%</span>
              } @else if (planGenerated) {
                \u2705 Plan Generado
              } @else {
                \u{1F916} Generar Plan con IA
              }
            </button>
          </div>
        }

        @if (studyPlanContent && !isGeneratingPlan) {
          <div class="plan-content-fullscreen" id="study-plan-content" [class.fade-in]="planGenerated">
            <h3>Plan de Estudio</h3>
            <div class="plan-text" [innerHTML]="studyPlanContentSafe"></div>
          </div>
        }
      </div>

      @if (studyPlanContent && planGenerated) {
        <div class="modal-footer">
          <button class="print-btn" (click)="printStudyPlan()">\u{1F5A8}\uFE0F Imprimir Plan</button>
          @if (planSaved) {
            <button class="saved-btn" (click)="closeStudyPlanModal()">
              <span class="saved-icon">\u2713</span> Guardado
            </button>
          } @else {
            <button class="save-btn" (click)="savePlan()">\u{1F4BE} Guardar</button>
          }
        </div>
      }
    </div>
  </div>
}
`, styles: ['/* src/app/grades/grades.css */\n.grades-container {\n  padding: var(--sp-5);\n  background: var(--bg);\n  min-height: 100vh;\n}\n.grades-container .page-header h2 {\n  color: var(--text-1);\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.grades-row {\n  display: flex;\n  gap: 15px;\n  flex-wrap: nowrap;\n  justify-content: center;\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.grades-row.fade-out {\n  opacity: 0;\n  transform: translateY(10px);\n}\n.grades-row.fade-in {\n  animation: fadeInUp 0.3s ease forwards;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.right-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  min-height: 400px;\n}\n.grades-sidebar {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  overflow-x: auto;\n}\n.grade-range-indicator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n  padding: .5rem 1rem;\n  margin: 0 auto .75rem;\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  border-radius: var(--r-pill);\n  color: var(--brand-600);\n  font-weight: 700;\n  font-size: .9rem;\n  width: fit-content;\n}\n.grade-section {\n  min-width: 140px;\n  text-align: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 15px 10px;\n  box-shadow: var(--shadow-sm);\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.grade-section:hover {\n  border-color: var(--brand);\n  box-shadow: var(--shadow-md);\n}\n.grade-section h3 {\n  color: var(--text-1);\n  font-size: 1rem;\n  margin: 0 0 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.classrooms {\n  display: flex;\n  gap: 6px;\n  flex-direction: column;\n}\n.classroom-btn {\n  padding: 12px 20px;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  background: var(--brand);\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color .2s ease, box-shadow .2s ease;\n  font-size: .85rem;\n  box-shadow: var(--shadow-xs);\n}\n.classroom-btn:hover {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.classroom-btn.selected {\n  background: var(--brand-600);\n  box-shadow: 0 0 0 3px var(--brand-100);\n}\n.subject-selector {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background: var(--brand-50);\n  border-radius: var(--r-md);\n  border-left: 4px solid var(--brand);\n}\n.subject-selector .subject-btn {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: .95rem;\n  font-weight: 600;\n  color: var(--text-2);\n  background: var(--surface);\n  cursor: pointer;\n  transition:\n    border-color .2s ease,\n    background-color .2s ease,\n    color .2s ease;\n}\n.subject-selector .subject-btn:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  color: var(--brand);\n}\n.subject-selector .subject-btn.selected {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.period-selector {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background: var(--surface-2);\n  border-radius: var(--r-md);\n  border-left: 4px solid var(--brand);\n}\n.period-selector label {\n  font-weight: 600;\n  color: var(--text-2);\n}\n.period-selector select {\n  padding: 8px 16px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: .95rem;\n  font-weight: 600;\n  color: var(--text-2);\n  background: var(--surface);\n  cursor: pointer;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.period-selector select:hover {\n  border-color: var(--brand);\n}\n.period-selector select:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.report-header {\n  border: 1px solid var(--border);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n  overflow: hidden;\n  margin-bottom: 0;\n  background: var(--surface);\n}\n.header-title {\n  background: var(--surface-2);\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  padding: 10px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-1);\n}\n.header-subtitle {\n  text-align: center;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 6px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n}\n.report-info {\n  padding: 8px 12px;\n  font-size: .85rem;\n  color: var(--text-2);\n}\n.info-row {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 4px;\n  flex-wrap: wrap;\n}\n.info-label {\n  font-weight: 700;\n  color: var(--text-3);\n}\n.info-value {\n  margin-right: 10px;\n  color: var(--text-1);\n}\n.table-container {\n  border: 1px solid var(--border);\n  border-top: none;\n  margin-top: 0;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  border-radius: 0 0 var(--r-md) var(--r-md);\n}\n.grades-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: .8rem;\n  font-family: var(--font);\n}\n.grades-table th {\n  background: var(--surface-2);\n  color: var(--text-3);\n  padding: 6px 4px;\n  text-align: center;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  font-size: .7rem;\n  vertical-align: bottom;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n.grades-table th.no-col {\n  width: 40px;\n}\n.grades-table th.student-col {\n  text-align: left;\n  min-width: 150px;\n}\n.grades-table th.percent-col {\n  width: 35px;\n  min-width: 35px;\n  height: 100px;\n  white-space: nowrap;\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n  font-size: .7rem;\n  color: var(--text-3);\n}\n.grades-table th.calc-col {\n  width: 40px;\n  min-width: 40px;\n  height: 100px;\n  white-space: nowrap;\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n  color: var(--text-3);\n}\n.grades-table th.def-col,\n.recovery-col,\n.action-col {\n  width: 40px;\n  min-width: 40px;\n  background: var(--surface-2);\n}\n.grades-table th.def-col {\n  width: 50px;\n  min-width: 50px;\n}\n.action-col {\n  width: 60px;\n  min-width: 60px;\n}\n.grades-table td {\n  border: 1px solid var(--border);\n  padding: 0;\n  height: 25px;\n}\n.grades-table tr.alt {\n  background: var(--surface-2);\n}\n.grades-table tr:hover {\n  background: var(--brand-50);\n}\n.grades-table tr.failing {\n  background: var(--danger-bg) !important;\n}\n.grades-table tr.failing:hover {\n  background: #fbd5d5 !important;\n}\n.grades-table tr.losing {\n  background: var(--warning-bg) !important;\n}\n.grades-table tr.losing:hover {\n  background: #fbe6bf !important;\n}\n.grades-table tr.excellent {\n  background: var(--success-bg) !important;\n}\n.grades-table tr.excellent:hover {\n  background: #bfe6cc !important;\n}\n.no-cell {\n  text-align: center;\n  font-weight: 700;\n  padding: 4px !important;\n}\n.student-cell {\n  padding: 4px 8px !important;\n  font-weight: 500;\n  text-align: left;\n}\n.note-cell {\n  padding: 0;\n  text-align: center;\n}\n.calc-cell {\n  padding: 0;\n  text-align: center;\n  font-weight: 600;\n  background: #e8e8e8;\n  font-size: .75rem;\n}\n.def-cell {\n  text-align: center;\n  font-weight: 700;\n  background: #d9d9d9;\n  color: #000;\n}\n.recovery-cell {\n  padding: 0;\n  text-align: center;\n  background: #f5f5f5;\n}\n.grade-input,\n.recovery-cell .grade-input {\n  width: 100%;\n  height: 28px;\n  border: none;\n  text-align: center;\n  font-size: .8rem;\n  font-weight: 600;\n  background: transparent;\n  color: #000;\n  padding: 0 2px;\n}\n.grade-input:focus,\n.recovery-cell .grade-input:focus {\n  outline: 2px solid #1b6aeb;\n  background: #fff;\n}\n.grade-input::placeholder {\n  color: #999;\n}\n.def-cell.grade-green {\n  background-color: #92d050 !important;\n}\n.def-cell.grade-yellow {\n  background-color: #ffff00 !important;\n}\n.def-cell.grade-red {\n  background-color: #ff6b6b !important;\n}\n.grade-green {\n  background-color: #c6efce !important;\n}\n.grade-green .grade-input {\n  color: #006100;\n}\n.grade-yellow {\n  background-color: #ffeb9c !important;\n}\n.grade-yellow .grade-input {\n  color: #9c5700;\n}\n.grade-red {\n  background-color: #ffc7ce !important;\n}\n.grade-red .grade-input {\n  color: #9c0006;\n}\n.comp-social-cell {\n  position: relative;\n}\n.comp-social-input,\n.comp-social-select {\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.comp-social-select {\n  appearance: none;\n  -webkit-appearance: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.comp-social-label {\n  display: none;\n  position: absolute;\n  bottom: -22px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: .65rem;\n  white-space: nowrap;\n  background: #333;\n  color: #fff;\n  padding: 3px 6px;\n  border-radius: 4px;\n  z-index: 10;\n  pointer-events: none;\n}\n.comp-social-cell:hover .comp-social-label {\n  display: block;\n}\n.comp-social-green {\n  background-color: #c6efce !important;\n}\n.comp-social-green .comp-social-input,\n.comp-social-green .comp-social-select {\n  color: #006100;\n}\n.comp-social-yellow {\n  background-color: #ffeb9c !important;\n}\n.comp-social-yellow .comp-social-input,\n.comp-social-yellow .comp-social-select {\n  color: #9c5700;\n}\n.comp-social-orange {\n  background-color: #ffcc80 !important;\n}\n.comp-social-orange .comp-social-input,\n.comp-social-orange .comp-social-select {\n  color: #e65100;\n}\n.comp-social-red {\n  background-color: #ffc7ce !important;\n}\n.comp-social-red .comp-social-input,\n.comp-social-red .comp-social-select {\n  color: #9c0006;\n}\n.loading-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-indicator p {\n  color: #777777;\n  font-size: 1.1rem;\n}\n.fullscreen-loading {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 1rem !important;\n  min-height: 60vh !important;\n  margin: 2rem !important;\n}\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(27, 106, 235, .2);\n  border-top: 4px solid #1b6aeb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n.no-students-message {\n  text-align: center;\n  padding: 40px 20px;\n}\n.no-students-content {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 30px;\n}\n.no-students-content h3 {\n  color: #2c3e50;\n  margin-bottom: 10px;\n}\n.no-students-content p {\n  color: #7f8c8d;\n}\n.no-active-period-message .material-icons {\n  font-size: 48px;\n  color: #f59e0b;\n}\n.fullscreen-warning {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: .75rem !important;\n  padding: 2rem !important;\n  background:\n    linear-gradient(\n      135deg,\n      #fffbeb,\n      #fef3c7) !important;\n  border: 1px solid #fcd34d !important;\n  border-radius: 16px !important;\n  color: #92400e !important;\n  font-weight: 700 !important;\n  font-size: 1.1rem !important;\n  min-height: 60vh !important;\n  margin: 2rem !important;\n  box-shadow: 0 10px 30px #0000001a !important;\n}\n.fullscreen-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: #0f172ae6;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  animation: fadeIn .3s ease;\n}\n.fullscreen-modal-content {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  width: 95%;\n  max-width: 1400px;\n  height: 92vh;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-lg);\n  animation: slideUp .4s ease;\n  border: 1px solid var(--border);\n}\n.modal-header {\n  background: var(--brand);\n  color: #fff;\n  padding: 20px 24px;\n  border-radius: var(--r-md) var(--r-md) 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  letter-spacing: .3px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, .18);\n  border: none;\n  color: #fff;\n  font-size: 1.5rem;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color .2s ease;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, .32);\n}\n.modal-body-fullscreen {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px 20px;\n  flex-shrink: 0;\n  background: var(--surface-2);\n  border-top: 1px solid var(--border);\n}\n.action-cell {\n  padding: 0;\n  text-align: center;\n  background: var(--surface-2);\n}\n.study-plan-btn {\n  background: var(--danger);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color .2s ease, box-shadow .2s ease;\n}\n.study-plan-btn:hover {\n  background: #b91c1c;\n  box-shadow: var(--shadow-sm);\n}\n.study-plan-btn.has-plan {\n  background: var(--success) !important;\n}\n.study-plan-btn.has-plan:hover {\n  background: #15803d !important;\n}\n.generate-btn {\n  width: 100%;\n  padding: 14px;\n  background: var(--brand);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 15px;\n  transition: background-color .2s ease, box-shadow .2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: var(--shadow-xs);\n}\n.generate-btn:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.generate-btn:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n.generate-btn.generated {\n  background: var(--success) !important;\n  cursor: default;\n}\n.generate-btn.generating {\n  overflow: hidden;\n  position: relative;\n}\n.save-btn {\n  padding: 12px 24px;\n  background: var(--success);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color .2s ease, box-shadow .2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: var(--shadow-xs);\n}\n.save-btn:hover {\n  background: #15803d;\n  box-shadow: var(--shadow-sm);\n}\n.saved-btn {\n  padding: 12px 24px;\n  background: var(--success);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.print-btn {\n  padding: 12px 24px;\n  background: var(--surface);\n  color: var(--brand);\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: .9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color .2s ease;\n}\n.print-btn:hover {\n  background: var(--brand-50);\n}\n.student-info {\n  background: var(--surface-2);\n  padding: 15px;\n  border-radius: var(--r-md);\n  margin-bottom: 20px;\n  border-left: 4px solid var(--brand);\n}\n.student-info p {\n  margin: 5px 0;\n  color: var(--text-2);\n}\n.grade-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-weight: 700;\n}\n.grade-badge.grade-green {\n  background: #c6efce;\n  color: #006100;\n}\n.grade-badge.grade-yellow {\n  background: #ffeb9c;\n  color: #9c5700;\n}\n.grade-badge.grade-red {\n  background: #ffc7ce;\n  color: #9c0006;\n}\n.topics-input {\n  margin-bottom: 20px;\n}\n.topics-input label {\n  display: block;\n  margin-bottom: 10px;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.topics-input textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: .9rem;\n  font-family: var(--font);\n  resize: vertical;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.topics-input textarea:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, .15);\n}\n.image-upload-section {\n  margin-top: 15px;\n  padding: 15px;\n  background: var(--surface-2);\n  border-radius: var(--r-md);\n  border: 2px dashed var(--border-strong);\n}\n.image-upload-section label {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n  font-weight: 500;\n}\n.image-upload-section input[type=file] {\n  display: none;\n}\n.upload-icon {\n  font-size: 1.2rem;\n}\n.uploaded-images-preview {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 12px;\n}\n.image-preview-item {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid #e0e0e0;\n}\n.image-preview-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.remove-image {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 20px;\n  height: 20px;\n  background: #dc3545e6;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.remove-image:hover {\n  background: #dc3545;\n}\n.plan-guidelines {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border-radius: 12px;\n  border: 1px solid #bfdbfe;\n  padding: 16px 18px;\n  margin-bottom: 16px;\n  color: #1e3a8a;\n  box-shadow: inset 0 0 0 1px #3b82f614;\n}\n.plan-guidelines strong {\n  display: block;\n  margin-bottom: 8px;\n  font-size: .97rem;\n}\n.plan-guidelines p {\n  margin: 0;\n  font-size: .92rem;\n  line-height: 1.6;\n}\n.plan-content-fullscreen {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc,\n      #fff,\n      #f1f5f9);\n  padding: 40px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  flex: 1;\n  overflow-y: auto;\n  box-shadow: inset 0 0 30px #1b6aeb08;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n.plan-content-fullscreen h3 {\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  text-align: center;\n  margin: 0 0 30px;\n  padding: 20px 40px;\n  border-bottom: 3px solid #1b6aeb;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #3b82f6);\n  border-radius: 12px;\n  box-shadow: 0 4px 20px #1b6aeb4d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.plan-text {\n  font-family:\n    Segoe UI,\n    Arial,\n    sans-serif;\n  line-height: 1.75;\n  color: #1a202c;\n  font-size: 15px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.plan-text .paragraph-block {\n  margin-bottom: 25px;\n  clear: both;\n  width: 100%;\n}\n.plan-text .paragraph-block p {\n  margin-bottom: 15px;\n  line-height: 1.9;\n  text-align: justify;\n  width: 100%;\n  box-sizing: border-box;\n}\n.plan-text h2,\n.plan-text .section-title {\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 35px 0 20px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #3b82f6);\n  border-radius: 12px;\n  box-shadow: 0 4px 15px #1e40af40;\n}\n.plan-text h3,\n.plan-text .subsection-title {\n  color: #1e40af;\n  font-size: 18px;\n  margin: 25px 0 15px;\n  font-weight: 600;\n  padding: 12px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border-radius: 8px;\n  border-left: 5px solid #3b82f6;\n  display: block;\n}\n.plan-text h4 {\n  color: #334155;\n  font-size: 16px;\n  margin: 20px 0 12px;\n  font-weight: 600;\n  background: #f1f5f9;\n  padding: 10px 16px;\n  border-radius: 6px;\n  border-left: 4px solid #64748b;\n}\n.plan-text strong {\n  color: #1b6aeb;\n  font-weight: 700;\n}\n.plan-text em {\n  color: #555;\n  font-style: italic;\n}\n.plan-text ul,\n.plan-text .ai-list {\n  margin: 15px 0 20px 25px;\n  padding-left: 10px;\n}\n.plan-text ol {\n  list-style-type: decimal;\n  margin: 15px 0 20px 25px;\n  padding-left: 15px;\n}\n.plan-text .ai-list li,\n.plan-text ul li {\n  margin-bottom: 12px;\n  padding: 12px 16px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px #0000000d;\n}\n.plan-text ol li {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px #0000000d;\n  transition: all .2s ease;\n}\n.plan-text ol li:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 8px #2563eb1a;\n}\n.plan-text li {\n  line-height: 1.7;\n}\n.plan-text li::marker {\n  color: #3b82f6;\n  font-weight: 600;\n}\n.plan-text .check {\n  color: #22c55e;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.plan-text .video-section {\n  margin: 20px 0;\n  padding: 0;\n}\n.plan-text .video-card {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px #0000000f;\n  transition: all .3s ease;\n}\n.plan-text .video-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px #0ea5e926;\n  border-color: #0ea5e9;\n}\n.plan-text .video-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.plan-text .video-content {\n  flex: 1;\n}\n.plan-text .video-content .video-link {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e40af;\n  text-decoration: none;\n  margin-bottom: 4px;\n  transition: color .2s ease;\n}\n.plan-text .video-content .video-link:hover {\n  color: #3b82f6;\n  text-decoration: underline;\n}\n.plan-text .video-source {\n  display: inline-block;\n  font-size: 11px;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.plan-text .video-unavailable {\n  display: flex;\n  align-items: center;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  color: #991b1b;\n}\n.plan-text .video-unavailable-icon {\n  width: 40px;\n  height: 40px;\n  background: #fecaca;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #991b1b;\n  font-size: 14px;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.plan-text .video-unavailable-content {\n  flex: 1;\n}\n.plan-text .video-unavailable-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #991b1b;\n}\n.plan-text .video-unavailable-message {\n  font-size: 12px;\n  color: #b91c1c;\n}\n.plan-text .video-unavailable-url {\n  font-size: 11px;\n  color: #dc2626;\n  word-break: break-all;\n  margin-top: 2px;\n}\n.plan-text .no-videos-message {\n  text-align: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 10px;\n  color: #64748b;\n  border: 2px dashed #cbd5e1;\n  margin: 20px 0;\n}\n.plan-text .no-videos-message .no-videos-icon {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.plan-text .no-videos-message p {\n  margin: 5px 0;\n  font-size: 14px;\n}\n.plan-text .video-status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 8px;\n}\n.plan-text .video-status-badge.available {\n  background: #dcfce7;\n  color: #166534;\n}\n.plan-text .video-status-badge.unavailable {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.plan-text .video-status-badge.checking {\n  background: #fef3c7;\n  color: #92400e;\n}\n.plan-text .ai-section-header {\n  margin: 30px 0 20px;\n  padding: 14px 20px;\n  border-radius: 8px;\n  font-weight: 700;\n}\n.plan-text .ai-h2 {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a,\n      #1e40af,\n      #2563eb);\n  color: #fff;\n  font-size: 20px;\n  box-shadow: 0 4px 12px #1e40af40;\n}\n.plan-text .ai-h3 {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #bfdbfe);\n  color: #1e40af;\n  font-size: 16px;\n  border-left: 4px solid #2563eb;\n  box-shadow: 0 2px 8px #2563eb1a;\n}\n.plan-text .ai-h4 {\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 14px;\n  border-left: 3px solid #64748b;\n}\n.plan-text .table-wrapper {\n  margin: 20px 0;\n  overflow-x: auto;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px #2563eb26;\n}\n.plan-text .ai-table,\n.plan-content-fullscreen .ai-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 25px 0;\n  font-size: 14px;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px #2563eb26;\n}\n.plan-text .ai-table th {\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #2563eb,\n      #1d4ed8);\n  color: #fff;\n  padding: 16px 14px;\n  text-align: left;\n  font-weight: 700;\n  border: 1px solid #1e3a8a;\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: .8px;\n}\n.plan-text .ai-table td,\n.plan-content-fullscreen .ai-table td {\n  padding: 16px 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  transition: all .2s;\n}\n.plan-text .ai-table tr:nth-child(2n) td {\n  background: #f8fafc;\n}\n.plan-text .ai-table tr:hover td {\n  background:\n    linear-gradient(\n      90deg,\n      #eff6ff,\n      #dbeafe);\n}\n.plan-content-fullscreen .ai-table {\n  font-size: 15px;\n}\n.plan-content-fullscreen .ai-table td {\n  max-width: 300px;\n}\n.plan-text .fraction {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: middle;\n  text-align: center;\n  margin: 0 4px;\n  font-size: 1.1em;\n  line-height: 1;\n}\n.plan-text .fraction .numerator {\n  border-bottom: 1.5px solid currentColor;\n  padding-bottom: 2px;\n  display: block;\n  line-height: 1.2;\n}\n.plan-text .fraction .denominator {\n  padding-top: 2px;\n  display: block;\n  line-height: 1.2;\n}\n.plan-text sup {\n  font-size: .7em;\n  vertical-align: super;\n  line-height: 0;\n}\n.plan-text .math-root {\n  display: inline-block;\n  padding: 0 1px;\n}\n.plan-text .math-root:before {\n  content: "\\221a";\n  margin-right: 1px;\n  font-size: 1.2em;\n}\n.plan-text .integral {\n  font-style: normal;\n  font-size: 1.3em;\n  font-family: Times New Roman, serif;\n}\n.plan-text .math-large {\n  font-size: 2.5em;\n  color: #1e40af;\n  font-weight: 700;\n  display: inline-block;\n  padding: 4px 8px;\n  vertical-align: middle;\n  line-height: 1.6;\n}\n.plan-text .math-large-block {\n  font-size: 2.2em;\n  color: #1e40af;\n  font-weight: 700;\n  display: block;\n  padding: 16px 24px;\n  margin: 16px 0;\n  background: #f0f4ff;\n  border-radius: 12px;\n  border: 2px solid #c7d2fe;\n  text-align: center;\n  line-height: 1.8;\n}\n.plan-text .katex {\n  font-size: 1.8em;\n  color: #1e3a8a;\n  line-height: 1.4;\n  display: inline-block !important;\n  vertical-align: middle;\n}\n.plan-text .katex .mfrac {\n  vertical-align: middle !important;\n  margin: 0 2px;\n  display: inline-flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  gap: 0 6px !important;\n}\n.plan-text .katex .mfrac > span {\n  display: inline !important;\n}\n.plan-text .katex .mfrac > span > span {\n  padding: 0 4px !important;\n}\n.plan-text .katex .frac-line {\n  border-top-width: 3px;\n}\n.plan-text .katex .mord.ros {\n  font-size: .7em;\n  top: -.4em;\n}\n.plan-text .katex .mord.uos {\n  font-size: .7em;\n  top: -.8em;\n}\n.plan-text span:empty + .katex {\n  display: none !important;\n}\n.plan-text .katex-display {\n  margin: 4px 6px;\n  padding: 6px 12px;\n  background: #f5f8ff;\n  border-radius: 10px;\n  overflow-x: auto;\n  text-align: left;\n  border: 1px solid #e0e7ff;\n  box-shadow: none;\n  display: inline-block;\n  vertical-align: middle;\n}\n.plan-text .katex-display .katex {\n  font-size: 1.9em;\n}\n.plan-text .katex-display:before,\n.plan-text .katex-display:after {\n  content: "";\n  display: table;\n}\n.plan-text mjx-container {\n  margin: 20px 0;\n  font-size: 2.5em;\n  display: inline-block !important;\n  vertical-align: middle;\n}\n.plan-text mjx-container[jax=CHTML] {\n  display: inline-block !important;\n  margin: 0 4px;\n  vertical-align: middle;\n}\n.plan-text mjx-container[jax=CHTML][display=true] {\n  display: block !important;\n  text-align: center;\n  margin: 30px auto;\n}\n.plan-text .dia {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #eef4ff);\n  border: 1px solid #dbe7ff;\n  border-left: 5px solid #2563eb;\n  border-radius: 14px;\n  padding: 18px 22px;\n  margin: 18px 0;\n  box-shadow: 0 6px 18px #2563eb14;\n}\n.plan-text .dia h3 {\n  margin: 0 0 12px;\n  padding: 6px 14px;\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #2563eb);\n  color: #fff;\n  border-radius: 999px;\n  font-size: 15px;\n  letter-spacing: .5px;\n  box-shadow: 0 4px 10px #2563eb40;\n}\n.plan-text .dia ul {\n  margin: 8px 0 4px 4px;\n  padding-left: 18px;\n}\n.plan-text .dia li {\n  line-height: 1.8;\n}\n.plan-text .day-badge,\n.recoveries-container .day-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.plan-text .day-badge.day1,\n.recoveries-container .day-badge.day1 {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e);\n}\n.plan-text .day-badge.day2,\n.recoveries-container .day-badge.day2 {\n  background:\n    linear-gradient(\n      135deg,\n      #d97706,\n      #f59e0b);\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes pulse-green {\n  0% {\n    box-shadow: 0 0 #27ae6066;\n  }\n  70% {\n    box-shadow: 0 0 0 6px #27ae6000;\n  }\n  to {\n    box-shadow: 0 0 0 0 #27ae6000;\n  }\n}\n@keyframes shimmer {\n  0% {\n    transform: translate(-100%);\n  }\n  to {\n    transform: translate(100%);\n  }\n}\n@keyframes savedPulse {\n  0% {\n    transform: scale(.8);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes checkmark {\n  0% {\n    transform: scale(0) rotate(-45deg);\n  }\n  50% {\n    transform: scale(1.2) rotate(0);\n  }\n  to {\n    transform: scale(1) rotate(0);\n  }\n}\n.btn-progress-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffff26;\n  z-index: 0;\n  overflow: hidden;\n}\n.btn-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #27ae60,\n      #2ecc71,\n      #27ae60);\n  transition: width .15s ease-out;\n  box-shadow: 0 0 15px #27ae60b3;\n  position: relative;\n}\n.btn-progress-fill:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, .5) 50%,\n      transparent 100%);\n  animation: shimmer 1.2s infinite;\n}\n.btn-progress-text {\n  position: relative;\n  z-index: 1;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, .4);\n  letter-spacing: .5px;\n}\n.plan-content-fullscreen.fade-in {\n  animation: slideUp .8s ease-out;\n}\n.saved-icon {\n  display: inline-block;\n  animation: checkmark .3s ease-out;\n}\n@media (max-width: 1200px) {\n  .grades-table {\n    font-size: .7rem;\n  }\n  .grades-table th,\n  .grades-table td {\n    padding: 2px;\n  }\n  .grade-input {\n    height: 24px;\n    font-size: .7rem;\n  }\n}\n@media (max-width: 768px) {\n  .grades-container,\n  .grades-sidebar {\n    padding: 12px;\n  }\n  .grades-container .page-header {\n    margin-bottom: var(--sp-5);\n  }\n  .grades-row {\n    gap: 10px;\n  }\n  .grade-section {\n    min-width: 100px;\n    padding: 10px 5px;\n  }\n  .grade-section h3 {\n    font-size: .8rem;\n  }\n  .classroom-btn {\n    padding: 8px 12px;\n    font-size: .75rem;\n  }\n  .right-content {\n    padding: 12px;\n  }\n  .table-container {\n    border: 1px solid var(--border);\n    margin-top: 0;\n    overflow-x: auto;\n    border-radius: 0 0 var(--r-md) var(--r-md);\n  }\n  .grades-table {\n    font-size: .65rem;\n    min-width: 820px;\n  }\n  .grades-table th {\n    font-size: .6rem;\n    padding: 2px;\n  }\n  .grades-table th.percent-col,\n  .grades-table th.calc-col {\n    height: 80px;\n  }\n  .grades-table td {\n    padding: 0;\n    height: 20px;\n  }\n  .grade-input {\n    height: 20px;\n    font-size: .65rem;\n  }\n  .no-cell,\n  .student-cell {\n    padding: 2px !important;\n    font-size: .7rem;\n  }\n  .student-cell {\n    min-width: 100px;\n    white-space: nowrap;\n  }\n  .report-header {\n    font-size: .8rem;\n  }\n  .header-title {\n    font-size: .9rem;\n  }\n  .header-subtitle {\n    font-size: .8rem;\n  }\n  .report-info {\n    font-size: .75rem;\n  }\n  .modal-footer {\n    flex-direction: column-reverse;\n  }\n  .modal-footer .save-btn,\n  .modal-footer .print-btn,\n  .modal-footer .saved-btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .grades-container .page-header h2 {\n    font-size: 1.3rem;\n  }\n  .grade-section {\n    min-width: 80px;\n  }\n  .classroom-btn {\n    padding: 6px 10px;\n    font-size: .7rem;\n  }\n  .grades-table {\n    font-size: .6rem;\n    min-width: 720px;\n  }\n}\n.grades-container button:focus-visible,\n.grades-container .grade-input:focus-visible,\n.grades-container select:focus-visible,\n.grades-container textarea:focus-visible,\n.grades-container .comp-social-select:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n@media print {\n  .ai-table {\n    page-break-inside: avoid;\n  }\n  .ai-table th {\n    background: #eee !important;\n    color: #000 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n:host-context([data-theme="dark"]) .grade-input:focus,\n:host-context([data-theme="dark"]) .recovery-cell .grade-input:focus {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .no-students-content h3 {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .plan-content-fullscreen {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .plan-text {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .plan-text h4 {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .plan-text h4 {\n  background: var(--surface-2);\n}\n:host-context([data-theme="dark"]) .plan-text .ai-list li,\n:host-context([data-theme="dark"]) .plan-text ul li {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .plan-text ol li {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .plan-text .video-card {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .plan-text .video-source {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .plan-text .video-source {\n  background: var(--surface-2);\n}\n:host-context([data-theme="dark"]) .plan-text .no-videos-message {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .plan-text .no-videos-message {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .plan-text .ai-h4 {\n  background: var(--surface-2);\n}\n:host-context([data-theme="dark"]) .plan-text .ai-h4 {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .plan-text .ai-table td,\n:host-context([data-theme="dark"]) .plan-content-fullscreen .ai-table td {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .plan-text .ai-table tr:nth-child(2n) td {\n  background: var(--surface);\n}\n/*# sourceMappingURL=grades.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: ChangeDetectorRef }, { type: NgZone }], { onBeforeUnload: [{
    type: HostListener,
    args: ["window:beforeunload"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Grades, { className: "Grades", filePath: "app/grades/grades.ts", lineNumber: 49 });
})();
export {
  Grades
};
//# sourceMappingURL=chunk-PSLN3WRR.js.map
