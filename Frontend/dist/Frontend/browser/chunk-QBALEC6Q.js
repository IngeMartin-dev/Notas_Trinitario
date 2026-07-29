import {
  GenerationService
} from "./chunk-PGR2Y62M.js";
import "./chunk-7DDXMRNS.js";
import "./chunk-VCEXV2JC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TCE2U3R2.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  HostListener,
  HttpClient,
  __async,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/boletines/boletines.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.fileName;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.path;
function Boletines_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 4);
    \u0275\u0275listener("click", function Boletines_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToVerGenerados());
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, "Ver Boletines Generados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function Boletines_Conditional_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToGenerarMenu());
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "Generar Boletines");
    \u0275\u0275elementEnd()()();
  }
}
function Boletines_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grade_r4 = ctx.$implicit;
    \u0275\u0275property("value", grade_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(grade_r4);
  }
}
function Boletines_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classroom_r5 = ctx.$implicit;
    \u0275\u0275property("value", classroom_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classroom_r5);
  }
}
function Boletines_Conditional_5_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275property("value", p_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Per\xEDodo ", p_r6);
  }
}
function Boletines_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Seleccione un grado y un sal\xF3n para ver sus boletines generados.");
    \u0275\u0275elementEnd();
  }
}
function Boletines_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Cargando boletines generados...");
    \u0275\u0275elementEnd();
  }
}
function Boletines_Conditional_5_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 12);
    \u0275\u0275text(2, "No hay boletines generados en este sal\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function Boletines_Conditional_5_Conditional_28_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generarDesdeVer());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Generar boletines de ", ctx_r1.verGrade, " - ", ctx_r1.verClassroom, " ");
  }
}
function Boletines_Conditional_5_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 23)(5, "button", 24);
    \u0275\u0275listener("click", function Boletines_Conditional_5_Conditional_29_For_4_Template_button_click_5_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previewGenerated(item_r10.fileName));
    });
    \u0275\u0275text(6, "\u{1F441}\uFE0F Vista Previa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function Boletines_Conditional_5_Conditional_29_For_4_Template_button_click_7_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadGenerated(item_r10.fileName));
    });
    \u0275\u0275text(8, "\u{1F4E5} Descargar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.fileName);
  }
}
function Boletines_Conditional_5_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275repeaterCreate(3, Boletines_Conditional_5_Conditional_29_For_4_Template, 9, 1, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function Boletines_Conditional_5_Conditional_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generarDesdeVer());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", ctx_r1.verList.length, " boletines generados para ", ctx_r1.verGrade, " - ", ctx_r1.verClassroom, ".");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.verList);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Generar m\xE1s boletines de ", ctx_r1.verGrade, " - ", ctx_r1.verClassroom, " ");
  }
}
function Boletines_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "div", 8)(3, "label");
    \u0275\u0275text(4, "Grado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function Boletines_Conditional_5_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.verGrade, $event) || (ctx_r1.verGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_5_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVerFilterChange());
    });
    \u0275\u0275elementStart(6, "option", 10);
    \u0275\u0275text(7, "Seleccione un grado");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, Boletines_Conditional_5_For_9_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Sal\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function Boletines_Conditional_5_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.verClassroom, $event) || (ctx_r1.verClassroom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_5_Template_select_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVerFilterChange());
    });
    \u0275\u0275elementStart(14, "option", 10);
    \u0275\u0275text(15, "Seleccione un sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, Boletines_Conditional_5_For_17_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "label");
    \u0275\u0275text(20, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function Boletines_Conditional_5_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.verPeriod, $event) || (ctx_r1.verPeriod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_5_Template_select_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVerFilterChange());
    });
    \u0275\u0275elementStart(22, "option", 11);
    \u0275\u0275text(23, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, Boletines_Conditional_5_For_25_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(26, Boletines_Conditional_5_Conditional_26_Template, 2, 0, "div", 12);
    \u0275\u0275conditionalCreate(27, Boletines_Conditional_5_Conditional_27_Template, 2, 0, "div", 13);
    \u0275\u0275conditionalCreate(28, Boletines_Conditional_5_Conditional_28_Template, 5, 2, "div", 14);
    \u0275\u0275conditionalCreate(29, Boletines_Conditional_5_Conditional_29_Template, 7, 5);
    \u0275\u0275elementStart(30, "button", 15);
    \u0275\u0275listener("click", function Boletines_Conditional_5_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToMenu());
    });
    \u0275\u0275text(31, "\u2190 Volver");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verGrade);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.grades);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verClassroom);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classrooms);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verPeriod);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.verGrade || !ctx_r1.verClassroom ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.verLoading ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.verLoading && ctx_r1.verChecked && ctx_r1.verList.length === 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.verLoading && ctx_r1.verList.length > 0 ? 29 : -1);
  }
}
function Boletines_Conditional_6_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grade_r12 = ctx.$implicit;
    \u0275\u0275property("value", grade_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(grade_r12);
  }
}
function Boletines_Conditional_6_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classroom_r13 = ctx.$implicit;
    \u0275\u0275property("value", classroom_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classroom_r13);
  }
}
function Boletines_Conditional_6_Conditional_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275property("value", p_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Per\xEDodo ", p_r14);
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_26_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43)(4, "input", 44);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_26_For_27_Template_input_ngModelChange_4_listener($event) {
      const student_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setStudentIndicator(student_r17.id, ctx_r1.subjects[ctx_r1.currentSubjectIndex], "ih", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 43)(6, "input", 44);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_26_For_27_Template_input_ngModelChange_6_listener($event) {
      const student_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setStudentIndicator(student_r17.id, ctx_r1.subjects[ctx_r1.currentSubjectIndex], "fa", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 43)(8, "input", 44);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_26_For_27_Template_input_ngModelChange_8_listener($event) {
      const student_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setStudentIndicator(student_r17.id, ctx_r1.subjects[ctx_r1.currentSubjectIndex], "faa", $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r17.surname, " ", student_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.getStudentIndicator(student_r17.id, ctx_r1.subjects[ctx_r1.currentSubjectIndex]).ih ?? null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.getStudentIndicator(student_r17.id, ctx_r1.subjects[ctx_r1.currentSubjectIndex]).fa ?? null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.getStudentIndicator(student_r17.id, ctx_r1.subjects[ctx_r1.currentSubjectIndex]).faa ?? null);
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.prevSubjectIndicators());
    });
    \u0275\u0275text(1, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Siguiente Materia \u2192 ");
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Continuar \u2192 ");
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Paso 1: Indicadores por Materia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "label");
    \u0275\u0275text(10, "Objetivo de la materia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 37);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_26_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setGroupObjective(ctx_r1.subjects[ctx_r1.currentSubjectIndex], $event));
    });
    \u0275\u0275text(12, "                ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "table", 39)(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "I.H");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "F.A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "F.A.A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, Boletines_Conditional_6_Conditional_0_Conditional_26_For_27_Template, 9, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 40);
    \u0275\u0275conditionalCreate(29, Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_29_Template, 2, 0, "button", 41);
    \u0275\u0275elementStart(30, "button", 16);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_26_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextSubjectIndicators());
    });
    \u0275\u0275conditionalCreate(31, Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_31_Template, 1, 0)(32, Boletines_Conditional_6_Conditional_0_Conditional_26_Conditional_32_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" Materia ", ctx_r1.currentSubjectIndex + 1, " de ", ctx_r1.subjects.length, ": ", ctx_r1.subjects[ctx_r1.currentSubjectIndex], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.subjects[ctx_r1.currentSubjectIndex]);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.getGroupObjective(ctx_r1.subjects[ctx_r1.currentSubjectIndex]));
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.students);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.currentSubjectIndex > 0 ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.currentSubjectIndex < ctx_r1.subjects.length - 1 ? 31 : 32);
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_27_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 52)(5, "input", 53);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_27_For_24_Template_input_ngModelChange_5_listener($event) {
      const student_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCompSocialIndicator(student_r21.id, "ih", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 52)(7, "input", 54);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_27_For_24_Template_input_ngModelChange_7_listener($event) {
      const student_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCompSocialIndicator(student_r21.id, "fa", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 52)(9, "input", 55);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_27_For_24_Template_input_ngModelChange_9_listener($event) {
      const student_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCompSocialIndicator(student_r21.id, "faa", $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", student_r21.surname, " ", student_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.getCompSocialIndicator(student_r21.id).ih ?? null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.getCompSocialIndicator(student_r21.id).fa ?? null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.getCompSocialIndicator(student_r21.id).faa ?? null);
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Paso 2: Comportamiento Social por Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, " Ingrese los indicadores (I.H. / F.A. / F.A.A.) y el objetivo general del comportamiento social. La escala valorativa se calcular\xE1 autom\xE1ticamente al generar el bolet\xEDn. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46)(6, "label");
    \u0275\u0275text(7, "Objetivo / descripci\xF3n del Comportamiento Social (se imprime en el bolet\xEDn):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 47);
    \u0275\u0275listener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Conditional_27_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCompSocialObjetivoChange($event));
    });
    \u0275\u0275text(9, "              ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 48)(11, "table", 49)(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "I.H.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "F.A.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "F.A.A.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, Boletines_Conditional_6_Conditional_0_Conditional_27_For_24_Template, 10, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 40)(26, "button", 45);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_27_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.backToSubjectIndicators());
    });
    \u0275\u0275text(27, " \u2190 Atr\xE1s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 16);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_27_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToFinal());
    });
    \u0275\u0275text(29, " Continuar \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.compSocialObjetivo);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.students);
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "span");
    \u0275\u0275text(2, "Firma seleccionada:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "img", 60);
    \u0275\u0275listener("error", function Boletines_Conditional_6_Conditional_0_Conditional_28_Conditional_10_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 61);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_28_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearDirectorSignature());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", "http://localhost:8080" + ctx_r1.selectedDirectorSignature, \u0275\u0275sanitizeUrl)("alt", "Firma director");
  }
}
function Boletines_Conditional_6_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Paso 3: Generar Boletines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "Seleccione la firma del director y genere los boletines.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 56)(6, "h4");
    \u0275\u0275text(7, "Firma del Director");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 57);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_28_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSignaturePanel());
    });
    \u0275\u0275text(9, " \u{1F4C1} Gestionar Firmas ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Boletines_Conditional_6_Conditional_0_Conditional_28_Conditional_10_Template, 6, 2, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 40)(12, "button", 45);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_28_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.backToComportamiento());
    });
    \u0275\u0275text(13, " \u2190 Regresar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 59);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_28_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveDraft());
    });
    \u0275\u0275text(15, " \u{1F4BE} Guardar Borrador ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Conditional_28_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.initiateGenerate());
    });
    \u0275\u0275text(17, " Generar Boletines ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.selectedDirectorSignature ? 10 : -1);
  }
}
function Boletines_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToMenu());
    });
    \u0275\u0275text(2, "\u2190 Volver al men\xFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "label");
    \u0275\u0275text(6, "Grado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedGrade, $event) || (ctx_r1.selectedGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Boletines_Conditional_6_Conditional_0_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onGradeChange());
    });
    \u0275\u0275elementStart(8, "option", 10);
    \u0275\u0275text(9, "Seleccione un grado");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, Boletines_Conditional_6_Conditional_0_For_11_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "label");
    \u0275\u0275text(14, "Sal\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedClassroom, $event) || (ctx_r1.selectedClassroom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Boletines_Conditional_6_Conditional_0_Template_select_change_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClassroomChange());
    });
    \u0275\u0275elementStart(16, "option", 10);
    \u0275\u0275text(17, "Seleccione un sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, Boletines_Conditional_6_Conditional_0_For_19_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 8)(21, "label");
    \u0275\u0275text(22, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Boletines_Conditional_6_Conditional_0_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPeriod, $event) || (ctx_r1.selectedPeriod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Boletines_Conditional_6_Conditional_0_Template_select_change_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPeriodChange());
    });
    \u0275\u0275repeaterCreate(24, Boletines_Conditional_6_Conditional_0_For_25_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(26, Boletines_Conditional_6_Conditional_0_Conditional_26_Template, 33, 7, "div", 14);
    \u0275\u0275conditionalCreate(27, Boletines_Conditional_6_Conditional_0_Conditional_27_Template, 30, 1, "div", 14);
    \u0275\u0275conditionalCreate(28, Boletines_Conditional_6_Conditional_0_Conditional_28_Template, 18, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fade-out", ctx_r1.fadeOutForm);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedGrade);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.grades);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedClassroom);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classrooms);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPeriod);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.students.length > 0 && ctx_r1.currentStep === "subjectIndicators" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.students.length > 0 && ctx_r1.currentStep === "comportamiento" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.students.length > 0 && ctx_r1.currentStep === "final" ? 28 : -1);
  }
}
function Boletines_Conditional_6_Conditional_1_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function Boletines_Conditional_6_Conditional_1_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function Boletines_Conditional_6_Conditional_1_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "\u2B1C");
    \u0275\u0275elementEnd();
  }
}
function Boletines_Conditional_6_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275conditionalCreate(4, Boletines_Conditional_6_Conditional_1_For_12_Conditional_4_Template, 2, 0, "span", 72)(5, Boletines_Conditional_6_Conditional_1_For_12_Conditional_5_Template, 2, 0, "span", 73)(6, Boletines_Conditional_6_Conditional_1_For_12_Conditional_6_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r24 = ctx.$implicit;
    const \u0275$index_367_r25 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("generating", \u0275$index_367_r25 === ctx_r1.currentJob.completed)("done", \u0275$index_367_r25 < ctx_r1.currentJob.completed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r24.surname, " ", student_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_367_r25 < ctx_r1.currentJob.completed ? 4 : \u0275$index_367_r25 === ctx_r1.currentJob.completed ? 5 : 6);
  }
}
function Boletines_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3");
    \u0275\u0275text(2, "\u23F3 Generando Boletines...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "div", 63);
    \u0275\u0275element(5, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 66);
    \u0275\u0275text(9, " Puede salir a otro apartado o iniciar otra generaci\xF3n: esta seguir\xE1 corriendo en segundo plano y ver\xE1 su avance en la notificaci\xF3n de la esquina. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 67);
    \u0275\u0275repeaterCreate(11, Boletines_Conditional_6_Conditional_1_For_12_Template, 7, 7, "div", 68, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.generationProgressPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.generationProgressPct(), "% completado \u2014 ", ctx_r1.generationStatusText());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.students);
  }
}
function Boletines_Conditional_6_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentJob.errors.length, " boletines tuvieron error. ");
  }
}
function Boletines_Conditional_6_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 21)(2, "div", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "button", 24);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_2_For_8_Template_button_click_7_listener() {
      const file_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previewGenerated(file_r28.fileName));
    });
    \u0275\u0275text(8, " \u{1F441}\uFE0F Vista Previa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_2_For_8_Template_button_click_9_listener() {
      const file_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadGenerated(file_r28.fileName));
    });
    \u0275\u0275text(10, " \u{1F4E5} Descargar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r28 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r28.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r28.fileName);
  }
}
function Boletines_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "h3");
    \u0275\u0275text(2, "\u2705 Boletines Generados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Boletines_Conditional_6_Conditional_2_Conditional_5_Template, 2, 1, "div", 75);
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275repeaterCreate(7, Boletines_Conditional_6_Conditional_2_For_8_Template, 11, 2, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToForm());
    });
    \u0275\u0275text(10, " \u2190 Volver a generar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Se generaron ", ctx_r1.currentJob.files.length, " boletines correctamente. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentJob.errors.length > 0 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.currentJob.files);
  }
}
function Boletines_Conditional_6_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const err_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(err_r30);
  }
}
function Boletines_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "h3");
    \u0275\u0275text(2, "\u26A0\uFE0F Error generando boletines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75);
    \u0275\u0275repeaterCreate(4, Boletines_Conditional_6_Conditional_3_For_5_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToForm());
    });
    \u0275\u0275text(7, " \u2190 Volver a generar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.currentJob.errors);
  }
}
function Boletines_Conditional_6_Conditional_4_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_For_24_Template_div_click_0_listener() {
      const sig_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedDirectorSignature = sig_r33.path);
    });
    \u0275\u0275elementStart(1, "div", 95)(2, "img", 96);
    \u0275\u0275listener("error", function Boletines_Conditional_6_Conditional_4_For_24_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sig_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedDirectorSignature === sig_r33.path);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "http://localhost:8080" + sig_r33.path, \u0275\u0275sanitizeUrl)("alt", sig_r33.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sig_r33.name);
  }
}
function Boletines_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeSignaturePanel());
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 79)(3, "h3");
    \u0275\u0275text(4, "Gestionar Firmas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 80);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeSignaturePanel());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 81)(8, "div", 82);
    \u0275\u0275listener("dragover", function Boletines_Conditional_6_Conditional_4_Template_div_dragover_8_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function Boletines_Conditional_6_Conditional_4_Template_div_drop_8_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Arrastra fotos de firmas aqu\xED o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 83);
    \u0275\u0275listener("change", function Boletines_Conditional_6_Conditional_4_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSignatureUpload($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 84);
    \u0275\u0275text(13, "Seleccionar archivos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 85)(15, "div", 86);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedDirectorSignature = void 0);
    });
    \u0275\u0275elementStart(16, "div", 87)(17, "span", 88);
    \u0275\u0275text(18, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 89);
    \u0275\u0275text(20, "Sin firma personalizada");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 90);
    \u0275\u0275text(22, "Por defecto");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(23, Boletines_Conditional_6_Conditional_4_For_24_Template, 5, 5, "div", 91, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 92)(26, "button", 93);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeSignaturePanel());
    });
    \u0275\u0275text(27, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 94);
    \u0275\u0275listener("click", function Boletines_Conditional_6_Conditional_4_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmSignature());
    });
    \u0275\u0275text(29, "Aceptar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("selected", !ctx_r1.selectedDirectorSignature);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.signatures);
  }
}
function Boletines_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Boletines_Conditional_6_Conditional_0_Template, 29, 9, "div", 26);
    \u0275\u0275conditionalCreate(1, Boletines_Conditional_6_Conditional_1_Template, 13, 4, "div", 27);
    \u0275\u0275conditionalCreate(2, Boletines_Conditional_6_Conditional_2_Template, 11, 2, "div", 28);
    \u0275\u0275conditionalCreate(3, Boletines_Conditional_6_Conditional_3_Template, 8, 0, "div", 28);
    \u0275\u0275conditionalCreate(4, Boletines_Conditional_6_Conditional_4_Template, 30, 2, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.showFormView ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.showFormView && ctx_r1.isGenerating && ctx_r1.currentJob ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.showFormView && !ctx_r1.isGenerating && ctx_r1.currentJob && ctx_r1.currentJob.status === "DONE" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.showFormView && !ctx_r1.isGenerating && ctx_r1.currentJob && ctx_r1.currentJob.status === "ERROR" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showSignaturePanel ? 4 : -1);
  }
}
var VALORACION_ACUDIENTE_SUBJECT = "Valoracion Acudiente";
var API_BASE = "http://localhost:8080/api/boletines";
var Boletines = class _Boletines {
  http;
  cdr;
  generationService;
  grades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  classrooms = ["Salon A", "Salon B"];
  // ── Vista principal del apartado ──────────────────────────────────
  // 'menu'         → los dos botones grandes (Ver Generados / Generar)
  // 'generar'      → el formulario de generación de siempre
  // 'verGenerados' → selector de grado/salón + lista de PDFs ya generados
  mainView = "menu";
  selectedGrade = "";
  selectedClassroom = "";
  selectedPeriod = 1;
  students = [];
  subjects = [];
  signatures = [];
  // Indicadores por estudiante y materia: studentIndicators[studentId][subject]
  studentIndicators = {};
  groupObjectives = {};
  // Comportamiento social por estudiante
  studentCompSocial = {};
  // Indicadores (IH, FA, FAA) de Comportamiento Social por estudiante
  studentCompSocialIndicators = {};
  // Objetivo / descripción editable de Comportamiento Social (compartido por todos)
  compSocialObjetivo = "";
  selectedDirectorSignature;
  showSignaturePanel = false;
  showFormView = true;
  fadeOutForm = false;
  isGenerating = false;
  /** Generación por lote en curso (o recién terminada) que se está mostrando
   *  en pantalla. La generación real corre en el backend: este objeto se
   *  mantiene sincronizado vía GenerationService (sondeo cada ~2.5s). */
  currentJob = null;
  lostAreasPreview = [];
  // ── "Ver Boletines Generados" ─────────────────────────────────────
  verGrade = "";
  verClassroom = "";
  verPeriod = 0;
  // 0 = Todos los períodos
  verList = [];
  verLoading = false;
  verChecked = false;
  // Pasos del formulario
  currentStep = "subjectIndicators";
  // Materia actual para editar indicadores
  currentSubjectIndex = 0;
  jobsSub;
  autoSaveHandle = null;
  lastAutoLoadedDraftKey = null;
  constructor(http, cdr, generationService) {
    this.http = http;
    this.cdr = cdr;
    this.generationService = generationService;
  }
  ngOnInit() {
    this.loadUnlockedPeriod();
    this.loadSignatures();
    const focusId = this.generationService.consumeFocusJobId();
    if (focusId) {
      const job = this.generationService.currentJobs.find((j) => j.jobId === focusId);
      if (job)
        this.applyFocusedJob(job);
    }
    this.jobsSub = this.generationService.jobs$.subscribe((jobs) => {
      if (!this.currentJob)
        return;
      const updated = jobs.find((j) => j.jobId === this.currentJob.jobId);
      if (updated) {
        const wasRunning = this.currentJob.status === "RUNNING";
        this.currentJob = updated;
        if (updated.status !== "RUNNING") {
          this.isGenerating = false;
          if (wasRunning && updated.status === "DONE") {
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
  clearFormState() {
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialIndicators = {};
    this.compSocialObjetivo = "";
    this.currentStep = "subjectIndicators";
    this.currentSubjectIndex = 0;
    this.lastAutoLoadedDraftKey = null;
  }
  ngOnDestroy() {
    this.jobsSub?.unsubscribe();
    if (this.autoSaveHandle)
      clearTimeout(this.autoSaveHandle);
    this.persistDraft(false);
  }
  /** Intento de guardado best-effort al cerrar/recargar la pestaña.
   *  sendBeacon funciona incluso durante la descarga de la página, a
   *  diferencia de una petición HTTP normal que se cancelaría. */
  saveOnUnload() {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod)
      return;
    if (this.mainView !== "generar")
      return;
    const body = JSON.stringify({
      grade: this.selectedGrade,
      classroom: this.selectedClassroom,
      period: this.selectedPeriod,
      schoolYear: this.selectedSchoolYear,
      payload: JSON.stringify(this.buildDraftPayload())
    });
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon(`${API_BASE}/drafts`, blob);
  }
  applyFocusedJob(job) {
    this.mainView = "generar";
    this.showFormView = false;
    this.currentJob = job;
    this.isGenerating = job.status === "RUNNING";
    this.selectedGrade = job.grade;
    this.selectedClassroom = job.classroom;
    this.selectedPeriod = job.period;
  }
  // ─────────────────────────────────────────────────────────────────
  // NAVEGACIÓN ENTRE VISTAS PRINCIPALES
  // ─────────────────────────────────────────────────────────────────
  goToGenerarMenu() {
    this.mainView = "generar";
    this.showFormView = true;
    this.showSignaturePanel = false;
  }
  goToVerGenerados() {
    this.mainView = "verGenerados";
    this.verGrade = this.selectedGrade || "";
    this.verClassroom = this.selectedClassroom || "";
    this.verPeriod = 0;
    this.verList = [];
    this.verChecked = false;
    if (this.verGrade && this.verClassroom) {
      this.onVerFilterChange();
    }
  }
  backToMenu() {
    this.mainView = "menu";
    this.showSignaturePanel = false;
  }
  onVerFilterChange() {
    this.verChecked = false;
    this.verList = [];
    if (!this.verGrade || !this.verClassroom)
      return;
    this.verLoading = true;
    const params = {
      grade: this.verGrade,
      classroom: this.verClassroom
    };
    if (this.verPeriod && this.verPeriod > 0) {
      params["period"] = String(this.verPeriod);
    }
    this.http.get(`${API_BASE}/generados`, { params }).subscribe({
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
    if (!this.verGrade || !this.verClassroom)
      return;
    this.selectedGrade = this.verGrade;
    this.selectedClassroom = this.verClassroom;
    this.mainView = "generar";
    this.showFormView = true;
    this.isGenerating = false;
    this.currentJob = null;
    this.onGradeChange();
  }
  previewGenerated(fileName) {
    this.http.get(`${API_BASE}/generados/descargar`, {
      params: { fileName },
      responseType: "blob"
    }).subscribe({
      next: (blob) => this.previewPdf(blob, fileName),
      error: () => alert("No se pudo abrir el bolet\xEDn.")
    });
  }
  downloadGenerated(fileName) {
    this.http.get(`${API_BASE}/generados/descargar`, {
      params: { fileName },
      responseType: "blob"
    }).subscribe({
      next: (blob) => this.downloadPdf(blob, fileName),
      error: () => alert("No se pudo descargar el bolet\xEDn.")
    });
  }
  onGradeChange() {
    this.students = [];
    this.subjects = [];
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialIndicators = {};
    this.compSocialObjetivo = "";
    this.lostAreasPreview = [];
    this.currentStep = "subjectIndicators";
    this.currentSubjectIndex = 0;
    this.loadStudents();
  }
  onClassroomChange() {
    this.students = [];
    this.subjects = [];
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocialIndicators = {};
    this.compSocialObjetivo = "";
    this.lostAreasPreview = [];
    this.currentStep = "subjectIndicators";
    this.currentSubjectIndex = 0;
    this.loadStudents();
  }
  onPeriodChange() {
    this.subjects = [];
    this.groupObjectives = {};
    this.currentStep = "subjectIndicators";
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
    this.currentStep = "comportamiento";
    this.students.forEach((student) => {
      if (!this.studentCompSocialIndicators[student.id]) {
        this.studentCompSocialIndicators[student.id] = { ih: void 0, fa: void 0, faa: void 0 };
      }
    });
    this.scheduleAutoSave();
    this.scrollToTop();
  }
  goToFinal() {
    this.currentStep = "final";
    this.scheduleAutoSave();
    this.scrollToTop();
  }
  backToSubjectIndicators() {
    this.currentStep = "subjectIndicators";
    this.scheduleAutoSave();
    this.scrollToTop();
  }
  /** Vuelve al comienzo de la página al cambiar de materia/paso. Sin esto,
   *  si el usuario venía desplazado hacia abajo (tabla larga de estudiantes)
   *  la siguiente pantalla se mostraba igual de desplazada, dando la
   *  sensación de haberse quedado "a mitad" en vez de empezar arriba. */
  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const container = document.querySelector(".content-wrapper");
    if (container)
      container.scrollTop = 0;
  }
  // Getters para indicadores por estudiante y materia
  getStudentIndicator(studentId, subject) {
    return this.studentIndicators[studentId]?.[subject] || { ih: void 0, fa: void 0, faa: void 0 };
  }
  setStudentIndicator(studentId, subject, field, value) {
    if (!this.studentIndicators[studentId]) {
      this.studentIndicators[studentId] = {};
    }
    if (!this.studentIndicators[studentId][subject]) {
      this.studentIndicators[studentId][subject] = { ih: void 0, fa: void 0, faa: void 0 };
    }
    this.studentIndicators[studentId][subject][field] = value ?? void 0;
    this.scheduleAutoSave();
  }
  getGroupObjective(subject) {
    return this.groupObjectives[subject] || "";
  }
  setGroupObjective(subject, value) {
    this.groupObjectives[subject] = value;
    this.scheduleAutoSave();
  }
  getCompSocialIndicator(studentId) {
    return this.studentCompSocialIndicators[studentId] || { ih: void 0, fa: void 0, faa: void 0 };
  }
  setCompSocialIndicator(studentId, field, value) {
    if (!this.studentCompSocialIndicators[studentId]) {
      this.studentCompSocialIndicators[studentId] = { ih: void 0, fa: void 0, faa: void 0 };
    }
    this.studentCompSocialIndicators[studentId][field] = value ?? void 0;
    this.scheduleAutoSave();
  }
  onCompSocialObjetivoChange(value) {
    this.compSocialObjetivo = value;
    this.scheduleAutoSave();
  }
  loadUnlockedPeriod() {
    this.http.get("http://localhost:8080/api/periods").subscribe({
      next: (periods) => {
        const unlocked = periods.filter((p) => p.isUnlocked).sort((a, b) => b.periodNumber - a.periodNumber);
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
    if (!this.selectedGrade || !this.selectedClassroom)
      return;
    this.http.get(`http://localhost:8080/api/students/grade/${encodeURIComponent(this.selectedGrade)}/class/${encodeURIComponent(this.selectedClassroom)}`).subscribe({
      next: (data) => {
        this.students = data.sort((a, b) => (a.surname || "").localeCompare(b.surname || ""));
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
    if (!this.selectedGrade || !this.selectedClassroom)
      return;
    this.http.get(`${API_BASE}/materias-todas?grade=${encodeURIComponent(this.selectedGrade)}&classroom=${encodeURIComponent(this.selectedClassroom)}`).subscribe({
      next: (data) => {
        this.subjects = data || [];
        if (!this.subjects.includes(VALORACION_ACUDIENTE_SUBJECT)) {
          this.subjects = [...this.subjects, VALORACION_ACUDIENTE_SUBJECT];
        }
        this.initializeStudentIndicatorsForSubjects();
        this.currentStep = "subjectIndicators";
        this.tryAutoLoadDraft();
        this.cdr.detectChanges();
      },
      error: () => {
        this.subjects = [VALORACION_ACUDIENTE_SUBJECT];
        this.initializeStudentIndicatorsForSubjects();
        this.currentStep = "subjectIndicators";
        this.tryAutoLoadDraft();
        this.cdr.detectChanges();
      }
    });
  }
  initializeStudentIndicatorsForSubjects() {
    this.subjects.forEach((subject) => {
      this.groupObjectives[subject] = this.groupObjectives[subject] || "";
      this.students.forEach((student) => {
        if (!this.studentIndicators[student.id]) {
          this.studentIndicators[student.id] = {};
        }
        if (!this.studentIndicators[student.id][subject]) {
          this.studentIndicators[student.id][subject] = { ih: void 0, fa: void 0, faa: void 0 };
        }
      });
    });
  }
  loadLostAreas() {
    this.lostAreasPreview = [];
    if (!this.selectedGrade || !this.selectedClassroom || this.students.length === 0)
      return;
    this.http.get(`${API_BASE}/promedios?grade=` + encodeURIComponent(this.selectedGrade) + "&classroom=" + encodeURIComponent(this.selectedClassroom) + "&period=" + this.selectedPeriod).subscribe({
      next: (data) => {
        this.lostAreasPreview = (data || []).filter((item) => (item.average ?? 0) < 3.5).map((item) => ({ subject: item.name || "Estudiante " + item.studentId, average: item.average ?? 0 }));
        this.cdr.detectChanges();
      },
      error: () => {
        this.lostAreasPreview = [];
        this.cdr.detectChanges();
      }
    });
  }
  loadSignatures() {
    this.http.get(`${API_BASE}/firmas`).subscribe({
      next: (data) => {
        this.signatures = data;
      },
      error: () => {
        this.signatures = [];
      }
    });
  }
  initializeData() {
    this.studentIndicators = {};
    this.groupObjectives = {};
    this.studentCompSocial = {};
  }
  isValid() {
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
    this.selectedDirectorSignature = void 0;
    this.scheduleAutoSave();
  }
  // ─────────────────────────────────────────────────────────────────
  // GENERACIÓN POR LOTE EN SEGUNDO PLANO
  // ─────────────────────────────────────────────────────────────────
  buildBatchStudentsPayload() {
    return this.students.map((student, i) => {
      const subjectIndicators = this.subjects.map((subject) => {
        const indicator = this.studentIndicators[student.id]?.[subject] || {};
        return {
          subjectName: subject,
          objetivoPeriodo: this.groupObjectives[subject] || "",
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
  startGeneration() {
    return __async(this, null, function* () {
      if (!this.isValid())
        return;
      this.fadeOutForm = true;
      yield new Promise((r) => setTimeout(r, 500));
      this.showFormView = false;
      this.fadeOutForm = false;
      const payload = {
        grade: this.selectedGrade,
        classroom: this.selectedClassroom,
        period: this.selectedPeriod,
        schoolYear: this.selectedSchoolYear,
        students: this.buildBatchStudentsPayload(),
        compSocialObjetivo: this.compSocialObjetivo || "",
        directorSignature: this.selectedDirectorSignature || ""
      };
      try {
        const job = yield this.http.post(`${API_BASE}/generar-lote`, payload).toPromise();
        if (job) {
          this.currentJob = job;
          this.isGenerating = true;
          this.generationService.upsertJobLocal(job);
        }
      } catch (err) {
        this.showFormView = true;
        this.isGenerating = false;
        alert("Error iniciando la generaci\xF3n: " + (err.error?.error || err.message || "Error desconocido"));
      }
    });
  }
  initiateGenerate() {
    if (!this.isValid())
      return;
    this.startGeneration();
  }
  /** Combina las dos fases del backend (preparar datos + renderizar PDF)
   *  en un solo porcentaje continuo, para que la barra avance todo el
   *  tiempo en vez de quedarse en 0 durante la preparación y saltar
   *  de golpe cuando empieza a renderizar. */
  generationProgressPct() {
    if (!this.currentJob)
      return 0;
    if (this.currentJob.status === "DONE")
      return 100;
    if (!this.currentJob.total)
      return 0;
    const PREP_WEIGHT = 30;
    const prepPct = Math.min(1, (this.currentJob.prepared || 0) / this.currentJob.total);
    if (this.currentJob.phase === "PREPARING") {
      return Math.round(prepPct * PREP_WEIGHT);
    }
    const renderPct = Math.min(1, (this.currentJob.completed || 0) / this.currentJob.total);
    return Math.min(100, Math.round(PREP_WEIGHT + renderPct * (100 - PREP_WEIGHT)));
  }
  generationStatusText() {
    if (!this.currentJob)
      return "";
    if (this.currentJob.status === "DONE")
      return `${this.currentJob.total} / ${this.currentJob.total} boletines`;
    if (this.currentJob.phase === "PREPARING") {
      return `Preparando datos: ${this.currentJob.prepared} / ${this.currentJob.total}`;
    }
    return `Generando PDF: ${this.currentJob.completed} / ${this.currentJob.total}`;
  }
  previewPdf(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const win = window.open(url, "_blank");
    if (win) {
      win.addEventListener("unload", () => URL.revokeObjectURL(url));
    }
  }
  downloadPdf(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 3e4);
  }
  onSignatureUpload(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);
        this.http.post(`${API_BASE}/firmas/upload`, formData).subscribe({
          next: (sig) => {
            this.signatures.push(sig);
          },
          error: () => {
            alert("Error al subir la firma");
          }
        });
      });
      input.value = "";
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    const panel = document.querySelector(".signature-panel");
    if (panel)
      panel.classList.add("drag-over");
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const panel = document.querySelector(".signature-panel");
    if (panel)
      panel.classList.remove("drag-over");
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          this.uploadSignatureFile(file);
        }
      });
    }
  }
  uploadSignatureFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    this.http.post(`${API_BASE}/firmas/upload`, formData).subscribe({
      next: (sig) => {
        this.signatures.push(sig);
      },
      error: () => {
        alert("Error al subir la firma");
      }
    });
  }
  onImageError(event) {
    const img = event.target;
    img.style.display = "none";
  }
  backToForm() {
    this.showFormView = true;
    this.fadeOutForm = false;
    this.isGenerating = false;
    this.currentJob = null;
    this.showSignaturePanel = false;
    this.currentStep = "subjectIndicators";
    this.currentSubjectIndex = 0;
  }
  /** Botón "← Regresar" del Paso 3: vuelve al Paso 2 (Comportamiento Social). */
  backToComportamiento() {
    this.currentStep = "comportamiento";
    this.scheduleAutoSave();
    this.scrollToTop();
  }
  // ─────────────────────────────────────────────────────────────────
  // BORRADORES: guardado automático y reanudación donde se quedó
  // ─────────────────────────────────────────────────────────────────
  pendingDraftPayload = null;
  draftKey() {
    return `${this.selectedGrade}|${this.selectedClassroom}|${this.selectedPeriod}`;
  }
  tryAutoLoadDraft() {
    if (this.pendingDraftPayload) {
      this.applyDraftPayload(this.pendingDraftPayload);
      this.pendingDraftPayload = null;
      return;
    }
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod)
      return;
    const key = this.draftKey();
    if (key === this.lastAutoLoadedDraftKey)
      return;
    this.lastAutoLoadedDraftKey = key;
    this.http.get(`${API_BASE}/drafts/ultimo`, {
      params: { grade: this.selectedGrade, classroom: this.selectedClassroom, period: this.selectedPeriod }
    }).subscribe({
      next: (draft) => {
        if (!draft)
          return;
        try {
          const payload = JSON.parse(draft.payload || "{}");
          this.applyDraftPayload(payload);
          this.cdr.detectChanges();
        } catch (e) {
        }
      },
      error: () => {
      }
    });
  }
  applyDraftPayload(payload) {
    if (!payload)
      return;
    if (Array.isArray(payload.studentSubjectIndicators)) {
      for (const ind of payload.studentSubjectIndicators) {
        if (ind.studentId == null || !ind.subjectName)
          continue;
        if (!this.studentIndicators[ind.studentId])
          this.studentIndicators[ind.studentId] = {};
        this.studentIndicators[ind.studentId][ind.subjectName] = {
          ih: ind.ih ?? void 0,
          fa: ind.fa ?? void 0,
          faa: ind.faa ?? void 0
        };
      }
    }
    if (payload.groupObjectives) {
      this.groupObjectives = __spreadValues(__spreadValues({}, this.groupObjectives), payload.groupObjectives);
    }
    if (typeof payload.compSocialObjetivo === "string") {
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
    if (typeof payload.currentSubjectIndex === "number") {
      this.currentSubjectIndex = Math.max(0, Math.min(payload.currentSubjectIndex, this.subjects.length - 1));
    }
  }
  buildDraftPayload() {
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
  persistDraft(showFeedback) {
    if (!this.selectedGrade || !this.selectedClassroom || !this.selectedPeriod) {
      if (showFeedback)
        alert("Seleccione grado, sal\xF3n y per\xEDodo antes de guardar.");
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
          alert("Borrador guardado correctamente.");
        }
      },
      error: (err) => {
        console.error("Error guardando borrador", err);
        if (showFeedback)
          alert("Error al guardar el borrador.");
      }
    });
  }
  /** Guardado automático con "debounce": espera a que el usuario deje de
   *  escribir/editar por 1.5s antes de guardar, para no saturar el backend
   *  con una petición por cada tecla. Así, si el usuario navega a otro
   *  apartado o recarga la página, lo que llevaba diligenciado no se pierde. */
  scheduleAutoSave() {
    if (this.autoSaveHandle)
      clearTimeout(this.autoSaveHandle);
    this.autoSaveHandle = setTimeout(() => this.persistDraft(false), 1500);
  }
  saveDraft() {
    this.persistDraft(true);
  }
  getPayloadStudentIndicators() {
    const result = [];
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
  get selectedSchoolYear() {
    return String((/* @__PURE__ */ new Date()).getFullYear());
  }
  static \u0275fac = function Boletines_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Boletines)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(GenerationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Boletines, selectors: [["app-boletines"]], hostBindings: function Boletines_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("beforeunload", function Boletines_beforeunload_HostBindingHandler() {
        return ctx.saveOnUnload();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 7, vars: 3, consts: [[1, "boletines-container"], [1, "boletines-header", "page-header"], [1, "boletines-menu", "fade-in"], [1, "ver-generados-view", "fade-in"], [1, "menu-btn", 3, "click"], [1, "menu-btn-icon"], [1, "menu-btn-label"], [1, "filters-section"], [1, "filter-group"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "empty-text"], [1, "loading-text"], [1, "section-card"], [1, "back-btn", 3, "click"], [1, "btn-next", 3, "click"], [1, "results-summary"], [1, "results-list"], [1, "result-card"], [1, "btn-next", "ver-generar-mas-btn", 3, "click"], [1, "result-info"], [1, "result-file"], [1, "result-actions"], [1, "preview-btn", 3, "click"], [1, "download-btn", 3, "click"], [1, "form-view", 3, "fade-out"], [1, "generating-view", "fade-in"], [1, "results-view", "fade-in"], [1, "signature-panel-overlay"], [1, "form-view"], [1, "back-to-menu-link", 3, "click"], [3, "ngModelChange", "change", "ngModel"], [1, "step-hint"], [1, "subject-indicators-card"], [1, "subject-header"], [1, "objective-field"], ["placeholder", "Objetivo...", "rows", "2", 1, "objective-textarea", 3, "ngModelChange", "ngModel"], [1, "students-indicators-table"], [1, "indicators-table"], [1, "step-actions"], [1, "btn-back"], [1, "td-student-name"], [1, "td-indicator"], ["type", "number", "min", "0", 1, "indicator-input-small", 3, "ngModelChange", "ngModel"], [1, "btn-back", 3, "click"], [1, "objective-field", 2, "margin-bottom", "12px"], ["placeholder", "Objetivo / recomendaci\xF3n general del Comportamiento Social\u2026", "rows", "2", 1, "objective-textarea", 3, "ngModelChange", "ngModel"], [1, "students-table-wrapper"], [1, "students-table"], [1, "td-student"], [1, "student-name"], [1, "td-center"], ["type", "number", "min", "0", "placeholder", "I.H.", 1, "indicator-input-small", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "F.A.", 1, "indicator-input-small", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "F.A.A.", 1, "indicator-input-small", 3, "ngModelChange", "ngModel"], [1, "signature-management"], [1, "btn-manage-sig", 3, "click"], [1, "selected-sig-preview"], [1, "btn-save-draft", 3, "click"], [1, "sig-thumb", 3, "error", "src", "alt"], [1, "btn-clear-sig", 3, "click"], [1, "progress-section"], [1, "progress-bar-wrapper"], [1, "progress-bar"], [1, "progress-text"], [1, "step-hint", "background-hint"], [1, "generating-list"], [1, "generating-item", 3, "generating", "done"], [1, "generating-item"], [1, "gen-name"], [1, "gen-status"], [1, "status-done"], [1, "status-active"], [1, "status-pending"], [1, "results-summary", "results-summary-error"], [1, "result-name"], [1, "signature-panel-overlay", 3, "click"], [1, "signature-panel", 3, "click"], [1, "panel-header"], [1, "panel-close", 3, "click"], [1, "panel-body"], [1, "upload-zone", 3, "dragover", "drop"], ["type", "file", "accept", "image/*", "multiple", "", 3, "change"], [1, "btn-upload"], [1, "signatures-gallery"], [1, "sig-card", 3, "click"], [1, "sig-img", "no-sig"], [1, "no-sig-icon"], [1, "no-sig-text"], [1, "sig-name"], [1, "sig-card", 3, "selected"], [1, "panel-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click"], [1, "sig-img"], [3, "error", "src", "alt"]], template: function Boletines_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "\u{1F4CB} Boletines");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, Boletines_Conditional_4_Template, 11, 0, "div", 2);
      \u0275\u0275conditionalCreate(5, Boletines_Conditional_5_Template, 32, 9, "div", 3);
      \u0275\u0275conditionalCreate(6, Boletines_Conditional_6_Template, 5, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.mainView === "menu" ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mainView === "verGenerados" ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mainView === "generar" ? 6 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n.boletines-container[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n  max-width: 1200px;\n  margin: 0 auto;\n  font-family: var(--font);\n  color: var(--text-1);\n}\n.boletines-header.page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-6);\n}\n.boletines-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.form-view[_ngcontent-%COMP%] {\n  transition: opacity 0.4s ease-out;\n}\n.form-view.fade-out[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.boletines-menu[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: var(--sp-4);\n  margin-top: 4px;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  min-height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  cursor: pointer;\n  box-shadow: var(--shadow-sm);\n  transition:\n    border-color .2s ease,\n    box-shadow .2s ease,\n    background-color .2s ease;\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  box-shadow: var(--shadow-md);\n}\n.menu-btn-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  line-height: 1;\n}\n.menu-btn-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-2);\n  text-align: center;\n  padding: 0 12px;\n}\n.ver-generados-view[_ngcontent-%COMP%], \n.generating-view[_ngcontent-%COMP%], \n.results-view[_ngcontent-%COMP%], \n.drafts-view[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-in;\n}\n.ver-generar-mas-btn[_ngcontent-%COMP%] {\n  display: block;\n  margin: var(--sp-4) auto 0;\n}\n.back-to-menu-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 14px;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.back-to-menu-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand);\n}\n.loading-text[_ngcontent-%COMP%], \n.empty-text[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-3);\n  border: 1px dashed var(--border-strong);\n  background: var(--surface-2);\n  border-radius: var(--r-md);\n  margin-bottom: var(--sp-4);\n}\n.results-summary-error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.background-hint[_ngcontent-%COMP%], \n.step-hint.background-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 560px;\n  margin: 0 auto var(--sp-4);\n  color: var(--text-3);\n  font-size: 0.9rem;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-5);\n  padding: var(--sp-4);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1 1 200px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 2px;\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  min-width: 160px;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.section-card[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-5);\n  padding: var(--sp-5);\n  border: 1px solid var(--border);\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n}\n.section-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-4);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.section-card.warning-card[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  border-left: 4px solid var(--danger);\n}\n.section-card.warning-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.students-table-wrapper[_ngcontent-%COMP%], \n.students-indicators-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  background: var(--surface);\n  -webkit-overflow-scrolling: touch;\n}\n.students-table[_ngcontent-%COMP%], \n.indicators-table[_ngcontent-%COMP%], \n.subject-indicators-table[_ngcontent-%COMP%], \n.students-eval-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.students-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n.indicators-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n.subject-indicators-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n.students-eval-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n.students-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.indicators-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.subject-indicators-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.students-eval-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  font-weight: 600;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-3);\n  border-bottom: 1px solid var(--border);\n}\n.students-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.indicators-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.subject-indicators-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.students-eval-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n}\n.students-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, \n.indicators-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, \n.subject-indicators-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, \n.students-eval-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n}\n.students-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.indicators-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.subject-indicators-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.students-eval-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.col-num[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.col-student[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n.col-indicators[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: center;\n}\n.col-subjects[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n.col-subject[_ngcontent-%COMP%] {\n  min-width: 140px;\n  text-align: center;\n}\n.td-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.td-student[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-1);\n}\n.td-student-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-1);\n}\n.td-indicator[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.student-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-1);\n}\n.student-doc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-3);\n  margin-top: 2px;\n}\n.indicator-input[_ngcontent-%COMP%], \n.indicator-input-small[_ngcontent-%COMP%], \n.indicator-input.mini[_ngcontent-%COMP%] {\n  padding: 0.45rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  text-align: center;\n  font-size: 0.85rem;\n  font-family: inherit;\n  background: var(--surface);\n  color: var(--text-1);\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.indicator-input[_ngcontent-%COMP%] {\n  width: 72px;\n}\n.indicator-input-small[_ngcontent-%COMP%] {\n  width: 60px;\n  font-size: 0.8rem;\n}\n.indicator-input.mini[_ngcontent-%COMP%] {\n  width: 52px;\n  font-size: 0.8rem;\n}\n.indicator-input[_ngcontent-%COMP%]:focus, \n.indicator-input-small[_ngcontent-%COMP%]:focus, \n.indicator-input.mini[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.subject-indicators-inline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n}\n.sub-header[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-3);\n}\n.main-select[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  min-width: 220px;\n  background: var(--surface);\n  font-family: inherit;\n}\n.step-hint[_ngcontent-%COMP%] {\n  margin: 6px 0 var(--sp-4);\n  color: var(--text-3);\n  font-size: 0.9rem;\n}\n.subject-indicators-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--surface);\n  border-radius: var(--r-md);\n  margin-bottom: var(--sp-4);\n  overflow: hidden;\n}\n.subject-header[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand-600);\n  padding: 0.6rem 1rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n  border-bottom: 1px solid var(--border);\n}\n.objective-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: var(--sp-4);\n}\n.objective-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.objective-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 34px;\n  box-sizing: border-box;\n  background: var(--surface);\n  color: var(--text-1);\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.objective-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.objectives-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.objective-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: var(--sp-3);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.subject-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.extra-config[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.extra-config[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.9rem;\n  color: var(--text-2);\n}\n.rating-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  flex: 0 0 120px;\n  margin-top: 8px;\n}\n.val-acudiente[_ngcontent-%COMP%], \n.comp-social[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.signature-management[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.signature-management[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-1);\n}\n.comp-social-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n}\n.indicators-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  margin-bottom: 15px;\n  padding: 10px;\n}\n.indicator-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.indicator-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.75rem;\n  color: var(--text-2);\n}\n.indicator-input.wide[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: var(--sp-3);\n  margin-top: var(--sp-4);\n  padding: var(--sp-4);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.btn-next[_ngcontent-%COMP%], \n.btn-back[_ngcontent-%COMP%], \n.btn-save-draft[_ngcontent-%COMP%], \n.btn-generate[_ngcontent-%COMP%], \n.btn-manage-sig[_ngcontent-%COMP%], \n.btn-clear-sig[_ngcontent-%COMP%], \n.back-btn[_ngcontent-%COMP%], \n.preview-btn[_ngcontent-%COMP%], \n.download-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.7rem 1.2rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition:\n    background-color .2s ease,\n    border-color .2s ease,\n    color .2s ease,\n    box-shadow .2s ease;\n  white-space: nowrap;\n}\n.btn-next[_ngcontent-%COMP%], \n.btn-generate[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  box-shadow: var(--shadow-xs);\n}\n.btn-next[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.btn-back[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-save-draft[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: #fff;\n}\n.btn-save-draft[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  background: var(--text-4);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.btn-manage-sig[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  color: var(--text-2);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-manage-sig[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-clear-sig[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: transparent;\n  border: none;\n  color: var(--danger);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.btn-clear-sig[_ngcontent-%COMP%]:hover {\n  color: #b91c1c;\n}\n.selected-sig-preview[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: var(--r-sm);\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.sig-thumb[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 40px;\n  object-fit: contain;\n  border: 1px solid var(--border);\n  background: #fff;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: block;\n  margin: var(--sp-5) auto 0;\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.preview-btn[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n}\n.preview-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n}\n.download-btn[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-rating[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: var(--r-sm);\n  transition:\n    border-color .2s ease,\n    background-color .2s ease,\n    color .2s ease;\n}\n.btn-rating[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.btn-rating.selected[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.lost-areas-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: var(--text-2);\n}\n.generating-view[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.results-view[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  margin-bottom: var(--sp-4);\n  text-align: center;\n  font-weight: 700;\n}\n.progress-section[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto var(--sp-5);\n}\n.progress-bar-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background: var(--border);\n  border-radius: var(--r-pill);\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--brand);\n  border-radius: var(--r-pill);\n  transition: width 0.3s ease;\n}\n.progress-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-2);\n  font-size: 0.85rem;\n}\n.generating-list[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.generating-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border);\n}\n.generating-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.generating-item.generating[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n}\n.generating-item.done[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.gen-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-1);\n}\n.status-done[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 700;\n}\n.status-active[_ngcontent-%COMP%] {\n  color: var(--warning);\n  font-weight: 700;\n}\n.status-pending[_ngcontent-%COMP%] {\n  color: var(--text-4);\n}\n.results-summary[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-2);\n  margin-bottom: var(--sp-4);\n  font-size: 0.95rem;\n}\n.results-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 720px;\n  margin: 0 auto var(--sp-5);\n}\n.result-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-4);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-sm);\n}\n.result-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.result-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-1);\n  font-size: 0.9rem;\n}\n.result-file[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  word-break: break-all;\n}\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.signature-panel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.signature-panel.drag-over[_ngcontent-%COMP%] {\n  outline: 2px dashed var(--brand);\n  outline-offset: -8px;\n  background: var(--brand-50);\n}\n.signature-panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  width: 92%;\n  max-width: 860px;\n  max-height: 88vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease-out;\n  border: 1px solid var(--border);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-4) var(--sp-5);\n  border-bottom: 1px solid var(--border);\n  background: var(--brand);\n  color: #fff;\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.panel-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: #fff;\n  padding: 4px 8px;\n  border-radius: 50%;\n  transition: background-color .2s ease;\n}\n.panel-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.32);\n}\n.panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--sp-5);\n}\n.panel-hint[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 0.85rem;\n  color: var(--text-3);\n}\n.upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border-strong);\n  padding: var(--sp-5);\n  text-align: center;\n  margin-bottom: var(--sp-4);\n  background: var(--surface-2);\n  color: var(--text-2);\n  border-radius: var(--r-md);\n  font-size: 0.85rem;\n}\n.upload-zone[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px 14px;\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.8rem;\n  border-radius: var(--r-sm);\n}\n.btn-upload[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.signatures-gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 12px;\n}\n.sig-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 8px;\n  cursor: pointer;\n  transition:\n    border-color .2s ease,\n    background-color .2s ease,\n    box-shadow .2s ease;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  background: var(--surface);\n}\n.sig-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  box-shadow: var(--shadow-sm);\n}\n.sig-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  box-shadow: 0 0 0 3px var(--brand-100);\n}\n.sig-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 3 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  overflow: hidden;\n  background: var(--surface-2);\n}\n.sig-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.sig-img.no-sig[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 4px;\n  color: var(--text-3);\n}\n.no-sig-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.no-sig-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sig-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-2);\n  font-weight: 500;\n  word-break: break-all;\n  line-height: 1.3;\n}\n.sig-card.selected[_ngcontent-%COMP%]   .sig-name[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding: var(--sp-4) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: 0 0 var(--r-md) var(--r-md);\n}\n.btn-cancel[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.2rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  color: var(--text-2);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition:\n    background-color .2s ease,\n    border-color .2s ease,\n    color .2s ease;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  border-color: var(--brand-600);\n}\n.btn-confirm[_ngcontent-%COMP%]:disabled {\n  background: var(--text-4);\n  border-color: var(--text-4);\n  cursor: not-allowed;\n}\n.drafts-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  padding: var(--sp-4);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-sm);\n}\n.drafts-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  margin-bottom: var(--sp-4);\n  background: var(--surface);\n}\n.drafts-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.drafts-view[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: var(--sp-4);\n  color: var(--text-1);\n}\n.student-evaluations[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--surface);\n  padding: var(--sp-3);\n  border-radius: var(--r-md);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .boletines-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .signature-panel[_ngcontent-%COMP%] {\n    width: 96%;\n    max-height: 92vh;\n  }\n  .signatures-gallery[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    gap: 10px;\n  }\n  .panel-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-confirm[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n  .result-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .result-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .result-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .step-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .step-actions[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%], \n   .step-actions[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%], \n   .step-actions[_ngcontent-%COMP%]   .btn-save-draft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .signature-panel-overlay[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .boletines-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .menu-btn[_ngcontent-%COMP%] {\n    min-height: 140px;\n  }\n}\n.boletines-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.boletines-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, \n.boletines-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.boletines-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n[data-theme="dark"][_nghost-%COMP%]   .sig-thumb[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .sig-thumb[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n/*# sourceMappingURL=boletines.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Boletines, [{
    type: Component,
    args: [{ selector: "app-boletines", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="boletines-container">
  <div class="boletines-header page-header">
    <h2>\u{1F4CB} Boletines</h2>
  </div>

  <!-- \u2550\u2550 MEN\xDA PRINCIPAL: Ver Generados / Generar \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (mainView === 'menu') {
    <div class="boletines-menu fade-in">
      <button class="menu-btn" (click)="goToVerGenerados()">
        <span class="menu-btn-icon">\u{1F4C1}</span>
        <span class="menu-btn-label">Ver Boletines Generados</span>
      </button>
      <button class="menu-btn" (click)="goToGenerarMenu()">
        <span class="menu-btn-icon">\u{1F4DD}</span>
        <span class="menu-btn-label">Generar Boletines</span>
      </button>
    </div>
  }

  <!-- \u2550\u2550 VER BOLETINES GENERADOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (mainView === 'verGenerados') {
    <div class="ver-generados-view fade-in">
      <div class="filters-section">
        <div class="filter-group">
          <label>Grado:</label>
          <select [(ngModel)]="verGrade" (ngModelChange)="onVerFilterChange()">
            <option value="">Seleccione un grado</option>
            @for (grade of grades; track grade) {
              <option [value]="grade">{{ grade }}</option>
            }
          </select>
        </div>
        <div class="filter-group">
          <label>Sal\xF3n:</label>
          <select [(ngModel)]="verClassroom" (ngModelChange)="onVerFilterChange()">
            <option value="">Seleccione un sal\xF3n</option>
            @for (classroom of classrooms; track classroom) {
              <option [value]="classroom">{{ classroom }}</option>
            }
          </select>
        </div>

        <div class="filter-group">
          <label>Per\xEDodo:</label>
          <select [(ngModel)]="verPeriod" (ngModelChange)="onVerFilterChange()">
            <option [value]="0">Todos</option>
            @for (p of [1,2,3,4]; track p) {
              <option [value]="p">Per\xEDodo {{ p }}</option>
            }
          </select>
        </div>
      </div>

      @if (!verGrade || !verClassroom) {
        <div class="empty-text">Seleccione un grado y un sal\xF3n para ver sus boletines generados.</div>
      }

      @if (verLoading) {
        <div class="loading-text">Cargando boletines generados...</div>
      }

      @if (!verLoading && verChecked && verList.length === 0) {
        <div class="section-card">
          <p class="empty-text">No hay boletines generados en este sal\xF3n.</p>
          <button class="btn-next" (click)="generarDesdeVer()">
            Generar boletines de {{ verGrade }} - {{ verClassroom }}
          </button>
        </div>
      }

      @if (!verLoading && verList.length > 0) {
        <div class="results-summary">{{ verList.length }} boletines generados para {{ verGrade }} - {{ verClassroom }}.</div>
        <div class="results-list">
          @for (item of verList; track item.fileName) {
            <div class="result-card">
              <div class="result-info">
                <div class="result-file">{{ item.fileName }}</div>
              </div>
              <div class="result-actions">
                <button class="preview-btn" (click)="previewGenerated(item.fileName)">\u{1F441}\uFE0F Vista Previa</button>
                <button class="download-btn" (click)="downloadGenerated(item.fileName)">\u{1F4E5} Descargar</button>
              </div>
            </div>
          }
        </div>
        <button class="btn-next ver-generar-mas-btn" (click)="generarDesdeVer()">
          Generar m\xE1s boletines de {{ verGrade }} - {{ verClassroom }}
        </button>
      }

      <button class="back-btn" (click)="backToMenu()">\u2190 Volver</button>
    </div>
  }

  <!-- \u2550\u2550 GENERAR BOLETINES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (mainView === 'generar') {

    @if (showFormView) {
      <div class="form-view" [class.fade-out]="fadeOutForm">

        <button class="back-to-menu-link" (click)="backToMenu()">\u2190 Volver al men\xFA</button>

        <!-- FILTROS -->
        <div class="filters-section">
          <div class="filter-group">
            <label>Grado:</label>
            <select [(ngModel)]="selectedGrade" (change)="onGradeChange()">
              <option value="">Seleccione un grado</option>
              @for (grade of grades; track grade) {
                <option [value]="grade">{{ grade }}</option>
              }
            </select>
          </div>

          <div class="filter-group">
            <label>Sal\xF3n:</label>
            <select [(ngModel)]="selectedClassroom" (change)="onClassroomChange()">
              <option value="">Seleccione un sal\xF3n</option>
              @for (classroom of classrooms; track classroom) {
                <option [value]="classroom">{{ classroom }}</option>
              }
            </select>
          </div>

          <div class="filter-group">
            <label>Per\xEDodo:</label>
            <select [(ngModel)]="selectedPeriod" (change)="onPeriodChange()">
              @for (p of [1,2,3,4]; track p) {
                <option [value]="p">Per\xEDodo {{ p }}</option>
              }
            </select>
          </div>
        </div>

        <!-- PASO 1: INDICADORES POR MATERIA (UNA PANTALLA POR MATERIA) -->
        @if (students.length > 0 && currentStep === 'subjectIndicators') {
          <div class="section-card">
            <h3>Paso 1: Indicadores por Materia</h3>
            <p class="step-hint">
              Materia {{ currentSubjectIndex + 1 }} de {{ subjects.length }}: {{ subjects[currentSubjectIndex] }}
            </p>

            <div class="subject-indicators-card">
              <div class="subject-header">{{ subjects[currentSubjectIndex] }}</div>
              <div class="objective-field">
                <label>Objetivo de la materia:</label>
                <textarea
                  [ngModel]="getGroupObjective(subjects[currentSubjectIndex])"
                  (ngModelChange)="setGroupObjective(subjects[currentSubjectIndex], $event)"
                  placeholder="Objetivo..."
                  class="objective-textarea"
                  rows="2">
                </textarea>
              </div>
              <div class="students-indicators-table">
                <table class="indicators-table">
                  <thead>
                    <tr>
                      <th>Estudiante</th>
                      <th>I.H</th>
                      <th>F.A</th>
                      <th>F.A.A</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (student of students; track student.id) {
                      <tr>
                        <td class="td-student-name">{{ student.surname }} {{ student.name }}</td>
                        <td class="td-indicator">
                          <input type="number" min="0" [ngModel]="getStudentIndicator(student.id, subjects[currentSubjectIndex]).ih ?? null" (ngModelChange)="setStudentIndicator(student.id, subjects[currentSubjectIndex], 'ih', $event)" class="indicator-input-small">
                        </td>
                        <td class="td-indicator">
                          <input type="number" min="0" [ngModel]="getStudentIndicator(student.id, subjects[currentSubjectIndex]).fa ?? null" (ngModelChange)="setStudentIndicator(student.id, subjects[currentSubjectIndex], 'fa', $event)" class="indicator-input-small">
                        </td>
                        <td class="td-indicator">
                          <input type="number" min="0" [ngModel]="getStudentIndicator(student.id, subjects[currentSubjectIndex]).faa ?? null" (ngModelChange)="setStudentIndicator(student.id, subjects[currentSubjectIndex], 'faa', $event)" class="indicator-input-small">
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <div class="step-actions">
              @if (currentSubjectIndex > 0) {
                <button class="btn-back" (click)="prevSubjectIndicators()">
                  \u2190 Anterior
                </button>
              }
              <button class="btn-next" (click)="nextSubjectIndicators()">
                @if (currentSubjectIndex < subjects.length - 1) {
                  Siguiente Materia \u2192
                } @else {
                  Continuar \u2192
                }
              </button>
            </div>
          </div>
        }

        <!-- PASO 2: COMPORTAMIENTO SOCIAL (INDICADORES + OBJETIVO) -->
        @if (students.length > 0 && currentStep === 'comportamiento') {
          <div class="section-card">
            <h3>Paso 2: Comportamiento Social por Estudiante</h3>
            <p class="step-hint">
              Ingrese los indicadores (I.H. / F.A. / F.A.A.) y el objetivo general
              del comportamiento social. La escala valorativa se calcular\xE1
              autom\xE1ticamente al generar el bolet\xEDn.
            </p>

            <div class="objective-field" style="margin-bottom: 12px;">
              <label>Objetivo / descripci\xF3n del Comportamiento Social (se imprime en el bolet\xEDn):</label>
              <textarea
                [ngModel]="compSocialObjetivo"
                (ngModelChange)="onCompSocialObjetivoChange($event)"
                placeholder="Objetivo / recomendaci\xF3n general del Comportamiento Social\u2026"
                class="objective-textarea"
                rows="2">
              </textarea>
            </div>

            <div class="students-table-wrapper">
              <table class="students-table">
                <thead>
                  <tr>
                    <th>Estudiante</th>
                    <th>I.H.</th>
                    <th>F.A.</th>
                    <th>F.A.A.</th>
                  </tr>
                </thead>
                <tbody>
                  @for (student of students; track student.id) {
                    <tr>
                      <td class="td-student">
                        <div class="student-name">{{ student.surname }} {{ student.name }}</div>
                      </td>
                      <td class="td-center">
                        <input type="number" min="0"
                               [ngModel]="getCompSocialIndicator(student.id).ih ?? null"
                               (ngModelChange)="setCompSocialIndicator(student.id, 'ih', $event)"
                               class="indicator-input-small"
                               placeholder="I.H.">
                      </td>
                      <td class="td-center">
                        <input type="number" min="0"
                               [ngModel]="getCompSocialIndicator(student.id).fa ?? null"
                               (ngModelChange)="setCompSocialIndicator(student.id, 'fa', $event)"
                               class="indicator-input-small"
                               placeholder="F.A.">
                      </td>
                      <td class="td-center">
                        <input type="number" min="0"
                               [ngModel]="getCompSocialIndicator(student.id).faa ?? null"
                               (ngModelChange)="setCompSocialIndicator(student.id, 'faa', $event)"
                               class="indicator-input-small"
                               placeholder="F.A.A.">
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            <div class="step-actions">
              <button class="btn-back" (click)="backToSubjectIndicators()">
                \u2190 Atr\xE1s
              </button>
              <button class="btn-next" (click)="goToFinal()">
                Continuar \u2192
              </button>
            </div>
          </div>
        }

        <!-- PASO 3: FIRMA Y GENERAR -->
        @if (students.length > 0 && currentStep === 'final') {
          <div class="section-card">
            <h3>Paso 3: Generar Boletines</h3>
            <p class="step-hint">Seleccione la firma del director y genere los boletines.</p>

            <div class="signature-management">
              <h4>Firma del Director</h4>
              <button class="btn-manage-sig" (click)="openSignaturePanel()">
                \u{1F4C1} Gestionar Firmas
              </button>
              @if (selectedDirectorSignature) {
                <div class="selected-sig-preview">
                  <span>Firma seleccionada:</span>
                  <img [src]="'http://localhost:8080' + selectedDirectorSignature" [alt]="'Firma director'" class="sig-thumb" (error)="onImageError($event)">
                  <button class="btn-clear-sig" (click)="clearDirectorSignature()">\u2715</button>
                </div>
              }
            </div>

            <div class="step-actions">
              <button class="btn-back" (click)="backToComportamiento()">
                \u2190 Regresar
              </button>
              <button class="btn-save-draft" (click)="saveDraft()">
                \u{1F4BE} Guardar Borrador
              </button>
              <button class="btn-next" (click)="initiateGenerate()">
                Generar Boletines
              </button>
            </div>
          </div>
        }
      </div>
    }

    <!-- Generation progress (corre en el backend: se puede navegar a otro
         apartado o iniciar otra generaci\xF3n mientras tanto) -->
    @if (!showFormView && isGenerating && currentJob) {
      <div class="generating-view fade-in">
        <h3>\u23F3 Generando Boletines...</h3>
        <div class="progress-section">
          <div class="progress-bar-wrapper">
            <div class="progress-bar" [style.width.%]="generationProgressPct()"></div>
          </div>
          <div class="progress-text">{{ generationProgressPct() }}% completado \u2014 {{ generationStatusText() }}</div>
        </div>
        <p class="step-hint background-hint">
          Puede salir a otro apartado o iniciar otra generaci\xF3n: esta seguir\xE1 corriendo en segundo plano
          y ver\xE1 su avance en la notificaci\xF3n de la esquina.
        </p>
        <div class="generating-list">
          @for (student of students; track student.id; let i = $index) {
            <div class="generating-item" [class.generating]="i === currentJob.completed" [class.done]="i < currentJob.completed">
              <span class="gen-name">{{ student.surname }} {{ student.name }}</span>
              <span class="gen-status">
                @if (i < currentJob.completed) {
                  <span class="status-done">\u2705</span>
                } @else if (i === currentJob.completed) {
                  <span class="status-active">\u23F3</span>
                } @else {
                  <span class="status-pending">\u2B1C</span>
                }
              </span>
            </div>
          }
        </div>
      </div>
    }

    <!-- Results -->
    @if (!showFormView && !isGenerating && currentJob && currentJob.status === 'DONE') {
      <div class="results-view fade-in">
        <h3>\u2705 Boletines Generados</h3>
        <div class="results-summary">
          Se generaron {{ currentJob.files.length }} boletines correctamente.
        </div>
        @if (currentJob.errors.length > 0) {
          <div class="results-summary results-summary-error">
            {{ currentJob.errors.length }} boletines tuvieron error.
          </div>
        }
        <div class="results-list">
          @for (file of currentJob.files; track file.fileName) {
            <div class="result-card">
              <div class="result-info">
                <div class="result-name">{{ file.studentName }}</div>
                <div class="result-file">{{ file.fileName }}</div>
              </div>
              <div class="result-actions">
                <button class="preview-btn" (click)="previewGenerated(file.fileName)">
                  \u{1F441}\uFE0F Vista Previa
                </button>
                <button class="download-btn" (click)="downloadGenerated(file.fileName)">
                  \u{1F4E5} Descargar
                </button>
              </div>
            </div>
          }
        </div>
        <button class="back-btn" (click)="backToForm()">
          \u2190 Volver a generar
        </button>
      </div>
    }

    @if (!showFormView && !isGenerating && currentJob && currentJob.status === 'ERROR') {
      <div class="results-view fade-in">
        <h3>\u26A0\uFE0F Error generando boletines</h3>
        <div class="results-summary results-summary-error">
          @for (err of currentJob.errors; track err) {
            <div>{{ err }}</div>
          }
        </div>
        <button class="back-btn" (click)="backToForm()">
          \u2190 Volver a generar
        </button>
      </div>
    }

    <!-- Signature Panel -->
    @if (showSignaturePanel) {
      <div class="signature-panel-overlay" (click)="closeSignaturePanel()">
        <div class="signature-panel" (click)="$event.stopPropagation()">
          <div class="panel-header">
            <h3>Gestionar Firmas</h3>
            <button class="panel-close" (click)="closeSignaturePanel()">\u2715</button>
          </div>
          <div class="panel-body">
            <div class="upload-zone" (dragover)="onDragOver($event)" (drop)="onDrop($event)">
              <p>Arrastra fotos de firmas aqu\xED o</p>
              <input type="file" accept="image/*" (change)="onSignatureUpload($event)" multiple>
              <button class="btn-upload">Seleccionar archivos</button>
            </div>
            <div class="signatures-gallery">
              <div class="sig-card" [class.selected]="!selectedDirectorSignature" (click)="selectedDirectorSignature = undefined">
                <div class="sig-img no-sig">
                  <span class="no-sig-icon">\u{1F4DD}</span>
                  <span class="no-sig-text">Sin firma personalizada</span>
                </div>
                <div class="sig-name">Por defecto</div>
              </div>
              @for (sig of signatures; track sig.path) {
                <div class="sig-card" [class.selected]="selectedDirectorSignature === sig.path" (click)="selectedDirectorSignature = sig.path">
                  <div class="sig-img">
                    <img [src]="'http://localhost:8080' + sig.path" [alt]="sig.name" (error)="onImageError($event)">
                  </div>
                  <div class="sig-name">{{ sig.name }}</div>
                </div>
              }
            </div>
          </div>
          <div class="panel-footer">
            <button class="btn-cancel" (click)="closeSignaturePanel()">Cerrar</button>
            <button class="btn-confirm" (click)="confirmSignature()">Aceptar</button>
          </div>
        </div>
      </div>
    }
  }
</div>`, styles: ['/* src/app/boletines/boletines.css */\n.boletines-container {\n  padding: var(--sp-5);\n  max-width: 1200px;\n  margin: 0 auto;\n  font-family: var(--font);\n  color: var(--text-1);\n}\n.boletines-header.page-header {\n  margin-bottom: var(--sp-6);\n}\n.boletines-header h2 {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.form-view {\n  transition: opacity 0.4s ease-out;\n}\n.form-view.fade-out {\n  opacity: 0;\n  pointer-events: none;\n}\n.boletines-menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: var(--sp-4);\n  margin-top: 4px;\n}\n.menu-btn {\n  min-height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  cursor: pointer;\n  box-shadow: var(--shadow-sm);\n  transition:\n    border-color .2s ease,\n    box-shadow .2s ease,\n    background-color .2s ease;\n}\n.menu-btn:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  box-shadow: var(--shadow-md);\n}\n.menu-btn-icon {\n  font-size: 42px;\n  line-height: 1;\n}\n.menu-btn-label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-2);\n  text-align: center;\n  padding: 0 12px;\n}\n.ver-generados-view,\n.generating-view,\n.results-view,\n.drafts-view {\n  animation: fadeIn 0.4s ease-in;\n}\n.ver-generar-mas-btn {\n  display: block;\n  margin: var(--sp-4) auto 0;\n}\n.back-to-menu-link {\n  display: inline-block;\n  margin-bottom: 14px;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.back-to-menu-link:hover {\n  color: var(--brand);\n}\n.loading-text,\n.empty-text {\n  padding: var(--sp-4);\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-3);\n  border: 1px dashed var(--border-strong);\n  background: var(--surface-2);\n  border-radius: var(--r-md);\n  margin-bottom: var(--sp-4);\n}\n.results-summary-error {\n  color: var(--danger);\n  font-weight: 600;\n}\n.background-hint,\n.step-hint.background-hint {\n  text-align: center;\n  max-width: 560px;\n  margin: 0 auto var(--sp-4);\n  color: var(--text-3);\n  font-size: 0.9rem;\n}\n.filters-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-5);\n  padding: var(--sp-4);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1 1 200px;\n}\n.filter-group label {\n  font-weight: 600;\n  margin-bottom: 2px;\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.filter-group select {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  min-width: 160px;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.filter-group select:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.section-card {\n  margin-bottom: var(--sp-5);\n  padding: var(--sp-5);\n  border: 1px solid var(--border);\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n}\n.section-card h3 {\n  margin: 0 0 var(--sp-4);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.section-card.warning-card {\n  border-color: var(--danger);\n  border-left: 4px solid var(--danger);\n}\n.section-card.warning-card h3 {\n  color: var(--danger);\n}\n.students-table-wrapper,\n.students-indicators-table {\n  overflow-x: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  background: var(--surface);\n  -webkit-overflow-scrolling: touch;\n}\n.students-table,\n.indicators-table,\n.subject-indicators-table,\n.students-eval-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.students-table thead,\n.indicators-table thead,\n.subject-indicators-table thead,\n.students-eval-table thead {\n  background: var(--surface-2);\n}\n.students-table th,\n.indicators-table th,\n.subject-indicators-table th,\n.students-eval-table th {\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  font-weight: 600;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-3);\n  border-bottom: 1px solid var(--border);\n}\n.students-table td,\n.indicators-table td,\n.subject-indicators-table td,\n.students-eval-table td {\n  padding: 0.6rem 0.8rem;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n}\n.students-table tbody tr:hover,\n.indicators-table tbody tr:hover,\n.subject-indicators-table tbody tr:hover,\n.students-eval-table tbody tr:hover {\n  background: var(--brand-50);\n}\n.students-table tbody tr:last-child td,\n.indicators-table tbody tr:last-child td,\n.subject-indicators-table tbody tr:last-child td,\n.students-eval-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.col-num {\n  width: 40px;\n  text-align: center;\n}\n.col-student {\n  min-width: 220px;\n}\n.col-indicators {\n  width: 90px;\n  text-align: center;\n}\n.col-subjects {\n  min-width: 260px;\n}\n.col-subject {\n  min-width: 140px;\n  text-align: center;\n}\n.td-center {\n  text-align: center;\n}\n.td-student {\n  font-weight: 500;\n  color: var(--text-1);\n}\n.td-student-name {\n  font-weight: 500;\n  color: var(--text-1);\n}\n.td-indicator {\n  text-align: center;\n}\n.student-name {\n  font-weight: 600;\n  color: var(--text-1);\n}\n.student-doc {\n  font-size: 0.75rem;\n  color: var(--text-3);\n  margin-top: 2px;\n}\n.indicator-input,\n.indicator-input-small,\n.indicator-input.mini {\n  padding: 0.45rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  text-align: center;\n  font-size: 0.85rem;\n  font-family: inherit;\n  background: var(--surface);\n  color: var(--text-1);\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.indicator-input {\n  width: 72px;\n}\n.indicator-input-small {\n  width: 60px;\n  font-size: 0.8rem;\n}\n.indicator-input.mini {\n  width: 52px;\n  font-size: 0.8rem;\n}\n.indicator-input:focus,\n.indicator-input-small:focus,\n.indicator-input.mini:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.subject-indicators-inline {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n}\n.sub-header {\n  display: block;\n  font-weight: 600;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-3);\n}\n.main-select {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  min-width: 220px;\n  background: var(--surface);\n  font-family: inherit;\n}\n.step-hint {\n  margin: 6px 0 var(--sp-4);\n  color: var(--text-3);\n  font-size: 0.9rem;\n}\n.subject-indicators-card {\n  border: 1px solid var(--border);\n  background: var(--surface);\n  border-radius: var(--r-md);\n  margin-bottom: var(--sp-4);\n  overflow: hidden;\n}\n.subject-header {\n  background: var(--brand-50);\n  color: var(--brand-600);\n  padding: 0.6rem 1rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n  border-bottom: 1px solid var(--border);\n}\n.objective-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: var(--sp-4);\n}\n.objective-field label {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.objective-textarea {\n  width: 100%;\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 34px;\n  box-sizing: border-box;\n  background: var(--surface);\n  color: var(--text-1);\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\n.objective-textarea:focus {\n  border-color: var(--brand);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.objectives-list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.objective-item {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: var(--sp-3);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.subject-label {\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.extra-config {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.extra-config h4 {\n  margin: 0 0 8px;\n  font-size: 0.9rem;\n  color: var(--text-2);\n}\n.rating-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  flex: 0 0 120px;\n  margin-top: 8px;\n}\n.val-acudiente,\n.comp-social {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.signature-management {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.signature-management h4 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-1);\n}\n.comp-social-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n}\n.indicators-form {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  margin-bottom: 15px;\n  padding: 10px;\n}\n.indicator-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.indicator-field label {\n  font-weight: 600;\n  font-size: 0.75rem;\n  color: var(--text-2);\n}\n.indicator-input.wide {\n  width: 80px;\n}\n.step-actions {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: var(--sp-3);\n  margin-top: var(--sp-4);\n  padding: var(--sp-4);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.btn-next,\n.btn-back,\n.btn-save-draft,\n.btn-generate,\n.btn-manage-sig,\n.btn-clear-sig,\n.back-btn,\n.preview-btn,\n.download-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.7rem 1.2rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition:\n    background-color .2s ease,\n    border-color .2s ease,\n    color .2s ease,\n    box-shadow .2s ease;\n  white-space: nowrap;\n}\n.btn-next,\n.btn-generate {\n  background: var(--brand);\n  color: #fff;\n  box-shadow: var(--shadow-xs);\n}\n.btn-next:hover:not(:disabled),\n.btn-generate:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.btn-back {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.btn-back:hover:not(:disabled) {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-save-draft {\n  background: var(--success);\n  color: #fff;\n}\n.btn-save-draft:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-generate:disabled {\n  background: var(--text-4);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.btn-manage-sig {\n  padding: 0.6rem 1rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  color: var(--text-2);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-manage-sig:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-clear-sig {\n  margin-left: 8px;\n  background: transparent;\n  border: none;\n  color: var(--danger);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.btn-clear-sig:hover {\n  color: #b91c1c;\n}\n.selected-sig-preview {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: var(--r-sm);\n  font-size: 0.8rem;\n  color: var(--text-2);\n}\n.sig-thumb {\n  max-width: 100px;\n  max-height: 40px;\n  object-fit: contain;\n  border: 1px solid var(--border);\n  background: #fff;\n}\n.back-btn {\n  display: block;\n  margin: var(--sp-5) auto 0;\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.back-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.preview-btn {\n  background: var(--brand);\n  color: #fff;\n}\n.preview-btn:hover {\n  background: var(--brand-600);\n}\n.download-btn {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.download-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-rating {\n  padding: 8px 12px;\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: var(--r-sm);\n  transition:\n    border-color .2s ease,\n    background-color .2s ease,\n    color .2s ease;\n}\n.btn-rating:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.btn-rating.selected {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.lost-areas-list {\n  margin: 0;\n  padding-left: 18px;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: var(--text-2);\n}\n.generating-view h3,\n.results-view h3 {\n  color: var(--text-1);\n  margin-bottom: var(--sp-4);\n  text-align: center;\n  font-weight: 700;\n}\n.progress-section {\n  max-width: 560px;\n  margin: 0 auto var(--sp-5);\n}\n.progress-bar-wrapper {\n  width: 100%;\n  height: 10px;\n  background: var(--border);\n  border-radius: var(--r-pill);\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.progress-bar {\n  height: 100%;\n  background: var(--brand);\n  border-radius: var(--r-pill);\n  transition: width 0.3s ease;\n}\n.progress-text {\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-2);\n  font-size: 0.85rem;\n}\n.generating-list {\n  max-width: 560px;\n  margin: 0 auto;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.generating-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border);\n}\n.generating-item:last-child {\n  border-bottom: none;\n}\n.generating-item.generating {\n  background: var(--warning-bg);\n}\n.generating-item.done {\n  background: var(--success-bg);\n}\n.gen-name {\n  font-weight: 500;\n  color: var(--text-1);\n}\n.status-done {\n  color: var(--success);\n  font-weight: 700;\n}\n.status-active {\n  color: var(--warning);\n  font-weight: 700;\n}\n.status-pending {\n  color: var(--text-4);\n}\n.results-summary {\n  text-align: center;\n  color: var(--text-2);\n  margin-bottom: var(--sp-4);\n  font-size: 0.95rem;\n}\n.results-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 720px;\n  margin: 0 auto var(--sp-5);\n}\n.result-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-4);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-sm);\n}\n.result-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.result-name {\n  font-weight: 700;\n  color: var(--text-1);\n  font-size: 0.9rem;\n}\n.result-file {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  word-break: break-all;\n}\n.result-actions {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.signature-panel-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.2s ease-out;\n}\n.signature-panel.drag-over {\n  outline: 2px dashed var(--brand);\n  outline-offset: -8px;\n  background: var(--brand-50);\n}\n.signature-panel {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  width: 92%;\n  max-width: 860px;\n  max-height: 88vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-lg);\n  animation: slideUp 0.25s ease-out;\n  border: 1px solid var(--border);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-4) var(--sp-5);\n  border-bottom: 1px solid var(--border);\n  background: var(--brand);\n  color: #fff;\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.panel-close {\n  background: rgba(255, 255, 255, 0.18);\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: #fff;\n  padding: 4px 8px;\n  border-radius: 50%;\n  transition: background-color .2s ease;\n}\n.panel-close:hover {\n  background: rgba(255, 255, 255, 0.32);\n}\n.panel-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--sp-5);\n}\n.panel-hint {\n  margin: 0 0 14px;\n  font-size: 0.85rem;\n  color: var(--text-3);\n}\n.upload-zone {\n  border: 2px dashed var(--border-strong);\n  padding: var(--sp-5);\n  text-align: center;\n  margin-bottom: var(--sp-4);\n  background: var(--surface-2);\n  color: var(--text-2);\n  border-radius: var(--r-md);\n  font-size: 0.85rem;\n}\n.upload-zone input[type=file] {\n  margin-top: 8px;\n}\n.btn-upload {\n  margin-top: 8px;\n  padding: 8px 14px;\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.8rem;\n  border-radius: var(--r-sm);\n}\n.btn-upload:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.signatures-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 12px;\n}\n.sig-card {\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 8px;\n  cursor: pointer;\n  transition:\n    border-color .2s ease,\n    background-color .2s ease,\n    box-shadow .2s ease;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  background: var(--surface);\n}\n.sig-card:hover {\n  border-color: var(--brand);\n  box-shadow: var(--shadow-sm);\n}\n.sig-card.selected {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  box-shadow: 0 0 0 3px var(--brand-100);\n}\n.sig-img {\n  width: 100%;\n  aspect-ratio: 3 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  overflow: hidden;\n  background: var(--surface-2);\n}\n.sig-img img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.sig-img.no-sig {\n  flex-direction: column;\n  gap: 4px;\n  color: var(--text-3);\n}\n.no-sig-icon {\n  font-size: 1.4rem;\n}\n.no-sig-text {\n  font-size: 0.7rem;\n}\n.sig-name {\n  font-size: 0.75rem;\n  color: var(--text-2);\n  font-weight: 500;\n  word-break: break-all;\n  line-height: 1.3;\n}\n.sig-card.selected .sig-name {\n  color: var(--brand-600);\n}\n.panel-footer {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding: var(--sp-4) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: 0 0 var(--r-md) var(--r-md);\n}\n.btn-cancel,\n.btn-confirm {\n  padding: 0.7rem 1.2rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  color: var(--text-2);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition:\n    background-color .2s ease,\n    border-color .2s ease,\n    color .2s ease;\n}\n.btn-cancel:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n}\n.btn-confirm {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.btn-confirm:hover:not(:disabled) {\n  background: var(--brand-600);\n  border-color: var(--brand-600);\n}\n.btn-confirm:disabled {\n  background: var(--text-4);\n  border-color: var(--text-4);\n  cursor: not-allowed;\n}\n.drafts-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  padding: var(--sp-4);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-sm);\n}\n.drafts-table-wrapper {\n  overflow-x: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  margin-bottom: var(--sp-4);\n  background: var(--surface);\n}\n.drafts-actions {\n  text-align: center;\n}\n.drafts-view h3 {\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: var(--sp-4);\n  color: var(--text-1);\n}\n.student-evaluations {\n  border: 1px solid var(--border);\n  background: var(--surface);\n  padding: var(--sp-3);\n  border-radius: var(--r-md);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .boletines-container {\n    padding: var(--sp-4);\n  }\n  .signature-panel {\n    width: 96%;\n    max-height: 92vh;\n  }\n  .signatures-gallery {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    gap: 10px;\n  }\n  .panel-footer {\n    flex-direction: column-reverse;\n  }\n  .btn-cancel,\n  .btn-confirm {\n    width: 100%;\n  }\n  .filters-section {\n    flex-direction: column;\n  }\n  .filter-group select {\n    min-width: 0;\n    width: 100%;\n  }\n  .result-card {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .result-actions {\n    width: 100%;\n  }\n  .result-actions button {\n    flex: 1;\n  }\n  .step-actions {\n    flex-direction: column-reverse;\n  }\n  .step-actions .btn-next,\n  .step-actions .btn-back,\n  .step-actions .btn-save-draft {\n    width: 100%;\n  }\n  .signature-panel-overlay {\n    padding: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .boletines-header h2 {\n    font-size: 1.3rem;\n  }\n  .menu-btn {\n    min-height: 140px;\n  }\n}\n.boletines-container button:focus-visible,\n.boletines-container select:focus-visible,\n.boletines-container textarea:focus-visible,\n.boletines-container input:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n:host-context([data-theme="dark"]) .sig-thumb {\n  background: var(--surface);\n}\n/*# sourceMappingURL=boletines.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: ChangeDetectorRef }, { type: GenerationService }], { saveOnUnload: [{
    type: HostListener,
    args: ["window:beforeunload"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Boletines, { className: "Boletines", filePath: "app/boletines/boletines.ts", lineNumber: 39 });
})();
export {
  Boletines
};
//# sourceMappingURL=chunk-QBALEC6Q.js.map
