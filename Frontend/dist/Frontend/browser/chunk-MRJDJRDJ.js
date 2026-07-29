import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TCE2U3R2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgIf,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/subjects/subjects.ts
function Subjects_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Materias de Primaria ");
  }
}
function Subjects_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Materias de Bachillerato ");
  }
}
function Subjects_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Materias de Media ");
  }
}
function Subjects_For_47_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3EB} Primaria ");
  }
}
function Subjects_For_47_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3DB}\uFE0F Bachillerato ");
  }
}
function Subjects_For_47_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4D6} Media ");
  }
}
function Subjects_For_47_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u26A1 Electiva");
    \u0275\u0275elementEnd();
  }
}
function Subjects_For_47_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "\u{1F4D8} B\xE1sica");
    \u0275\u0275elementEnd();
  }
}
function Subjects_For_47_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function Subjects_For_47_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const subject_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeToCore(subject_r5));
    });
    \u0275\u0275text(1, "Quitar electiva");
    \u0275\u0275elementEnd();
  }
}
function Subjects_For_47_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function Subjects_For_47_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const subject_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeToElective(subject_r5));
    });
    \u0275\u0275text(1, "Cambiar a electiva");
    \u0275\u0275elementEnd();
  }
}
function Subjects_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "p", 22);
    \u0275\u0275text(8, " \u{1F4CF} Grados ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " \u2014 ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 23);
    \u0275\u0275conditionalCreate(15, Subjects_For_47_Conditional_15_Template, 1, 0);
    \u0275\u0275conditionalCreate(16, Subjects_For_47_Conditional_16_Template, 1, 0);
    \u0275\u0275conditionalCreate(17, Subjects_For_47_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 24);
    \u0275\u0275conditionalCreate(19, Subjects_For_47_Conditional_19_Template, 2, 0, "span", 25)(20, Subjects_For_47_Conditional_20_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 27);
    \u0275\u0275conditionalCreate(22, Subjects_For_47_Conditional_22_Template, 2, 0, "button", 28)(23, Subjects_For_47_Conditional_23_Template, 2, 0, "button", 29);
    \u0275\u0275elementStart(24, "button", 30);
    \u0275\u0275listener("click", function Subjects_For_47_Template_button_click_24_listener() {
      const subject_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModifyGrades(subject_r5));
    });
    \u0275\u0275text(25, "Modificar grados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 31);
    \u0275\u0275listener("click", function Subjects_For_47_Template_button_click_26_listener() {
      const subject_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSubject(subject_r5));
    });
    \u0275\u0275text(27, "\u{1F5D1}\uFE0F Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subject_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subject_r5.code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", subject_r5.gradeMin ?? "?", "\xB0");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", subject_r5.gradeMax ?? "?", "\xB0");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((subject_r5.level || "").toLowerCase() === "primaria" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((subject_r5.level || "").toLowerCase() === "bachillerato" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((subject_r5.level || "").toLowerCase() === "media" ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((subject_r5.type || "core").toLowerCase() === "elective" ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((subject_r5.type || "core").toLowerCase() === "elective" ? 22 : 23);
  }
}
function Subjects_ForEmpty_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " primaria ");
  }
}
function Subjects_ForEmpty_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " bachillerato ");
  }
}
function Subjects_ForEmpty_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Media ");
  }
}
function Subjects_ForEmpty_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " No hay materias registradas para ");
    \u0275\u0275conditionalCreate(2, Subjects_ForEmpty_48_Conditional_2_Template, 1, 0);
    \u0275\u0275conditionalCreate(3, Subjects_ForEmpty_48_Conditional_3_Template, 1, 0);
    \u0275\u0275conditionalCreate(4, Subjects_ForEmpty_48_Conditional_4_Template, 1, 0);
    \u0275\u0275text(5, " . ");
    \u0275\u0275element(6, "br")(7, "br");
    \u0275\u0275elementStart(8, "button", 34);
    \u0275\u0275listener("click", function Subjects_ForEmpty_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275text(9, " \u2795 Agregar materia ahora ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedTab === "primaria" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedTab === "bachillerato" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedTab === "media" ? 4 : -1);
  }
}
function Subjects_Conditional_49_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Materia");
    \u0275\u0275elementEnd();
  }
}
function Subjects_Conditional_49_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Subjects_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function Subjects_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function Subjects_Conditional_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "h3");
    \u0275\u0275text(4, "\u2795 Agregar Nueva Materia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function Subjects_Conditional_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "form", 40, 0);
    \u0275\u0275listener("ngSubmit", function Subjects_Conditional_49_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSubject());
    });
    \u0275\u0275elementStart(10, "div", 41)(11, "div", 42)(12, "label", 43);
    \u0275\u0275text(13, "Nombre de la Materia *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_49_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject.name, $event) || (ctx_r1.newSubject.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Subjects_Conditional_49_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubjectNameInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "label", 45);
    \u0275\u0275text(17, "C\xF3digo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_49_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject.code, $event) || (ctx_r1.newSubject.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Subjects_Conditional_49_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newSubject.code = $event.target.value.toUpperCase());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 41)(20, "div", 42)(21, "label", 47);
    \u0275\u0275text(22, "Nivel *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_49_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject.level, $event) || (ctx_r1.newSubject.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Subjects_Conditional_49_Template_select_change_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLevelChange());
    });
    \u0275\u0275elementStart(24, "option", 49);
    \u0275\u0275text(25, "Primaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 50);
    \u0275\u0275text(27, "Bachillerato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 51);
    \u0275\u0275text(29, "Media (10\xB0-11\xB0)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 42)(31, "label", 52);
    \u0275\u0275text(32, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_49_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject.type, $event) || (ctx_r1.newSubject.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 54);
    \u0275\u0275text(35, "B\xE1sica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 55);
    \u0275\u0275text(37, "Electiva");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 56)(39, "div", 42)(40, "label", 57);
    \u0275\u0275text(41, "Grado M\xEDnimo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_49_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject.gradeMin, $event) || (ctx_r1.newSubject.gradeMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 42)(44, "label", 59);
    \u0275\u0275text(45, "Grado M\xE1ximo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_49_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject.gradeMax, $event) || (ctx_r1.newSubject.gradeMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 61)(48, "button", 62);
    \u0275\u0275listener("click", function Subjects_Conditional_49_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275text(49, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 63);
    \u0275\u0275template(51, Subjects_Conditional_49_span_51_Template, 2, 0, "span", 64)(52, Subjects_Conditional_49_span_52_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject.code);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject.level);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject.type);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject.gradeMin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject.gradeMax);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingSubject);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingSubject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSavingSubject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSavingSubject);
  }
}
function Subjects_Conditional_50_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Cambios");
    \u0275\u0275elementEnd();
  }
}
function Subjects_Conditional_50_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Subjects_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function Subjects_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeGradeModal());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function Subjects_Conditional_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function Subjects_Conditional_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeGradeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "form", 40, 1);
    \u0275\u0275listener("ngSubmit", function Subjects_Conditional_50_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveModifiedGrades());
    });
    \u0275\u0275elementStart(10, "div", 56)(11, "div", 42)(12, "label", 65);
    \u0275\u0275text(13, "Grado M\xEDnimo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_50_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modifyGradesData.gradeMin, $event) || (ctx_r1.modifyGradesData.gradeMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "label", 67);
    \u0275\u0275text(17, "Grado M\xE1ximo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function Subjects_Conditional_50_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modifyGradesData.gradeMax, $event) || (ctx_r1.modifyGradesData.gradeMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 61)(20, "button", 62);
    \u0275\u0275listener("click", function Subjects_Conditional_50_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeGradeModal());
    });
    \u0275\u0275text(21, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 63);
    \u0275\u0275template(23, Subjects_Conditional_50_span_23_Template, 2, 0, "span", 64)(24, Subjects_Conditional_50_span_24_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4CF} Modificar Grados - ", ctx_r1.subjectToModifyGrades.name);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modifyGradesData.gradeMin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modifyGradesData.gradeMax);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingGrades);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingGrades);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSavingGrades);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSavingGrades);
  }
}
function Subjects_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function Subjects_Conditional_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function Subjects_Conditional_51_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "h3");
    \u0275\u0275text(4, "\u26A0\uFE0F Confirmar eliminaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function Subjects_Conditional_51_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "p", 70);
    \u0275\u0275text(9, " \xBFEst\xE1 seguro de eliminar la materia ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "? ");
    \u0275\u0275element(13, "br");
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15, "Esta acci\xF3n no se puede deshacer.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 61)(17, "button", 71);
    \u0275\u0275listener("click", function Subjects_Conditional_51_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(18, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 72);
    \u0275\u0275listener("click", function Subjects_Conditional_51_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSubject());
    });
    \u0275\u0275text(20, "\u{1F5D1}\uFE0F Eliminar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.subjectToDelete.name);
  }
}
function Subjects_Conditional_52_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function Subjects_Conditional_52_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function Subjects_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 73);
    \u0275\u0275listener("click", function Subjects_Conditional_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 74);
    \u0275\u0275template(3, Subjects_Conditional_52_span_3_Template, 2, 0, "span", 64)(4, Subjects_Conditional_52_span_4_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 75)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 76);
    \u0275\u0275listener("click", function Subjects_Conditional_52_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideNotification());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("notification-success", ctx_r1.notificationType === "success")("notification-error", ctx_r1.notificationType === "error");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.notificationType === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notificationType === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notificationType === "success" ? "\xA1Operaci\xF3n exitosa!" : "\xA1Atenci\xF3n!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.notificationMessage);
  }
}
function Subjects_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 77);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando materias...");
    \u0275\u0275elementEnd()();
  }
}
var Subjects = class _Subjects {
  http = inject(HttpClient);
  selectedTab = "primaria";
  subjects = [];
  selectedSubject = null;
  /** Lista de grados disponibles para el filtro */
  gradeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  loading = true;
  // Management view
  allSubjects = [];
  showAddModal = false;
  subjectToDelete = null;
  showGradeModal = false;
  subjectToModifyGrades = null;
  modifyGradesData = { gradeMin: 1, gradeMax: 5 };
  isSavingSubject = false;
  isSavingGrades = false;
  newSubject = {
    name: "",
    code: "",
    level: "primaria",
    gradeMin: 1,
    gradeMax: 5,
    type: "core"
  };
  // Notification system
  showNotification = false;
  notificationType = null;
  notificationMessage = "";
  ngOnInit() {
    this.loadSubjects();
  }
  loadSubjects() {
    this.http.get("http://localhost:8080/api/subjects").subscribe({
      next: (data) => {
        this.subjects = data;
        this.allSubjects = [...data].sort((a, b) => a.name.localeCompare(b.name));
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load subjects", err);
        this.loading = false;
      }
    });
  }
  viewSubjectDetails(subject) {
    this.selectedSubject = subject;
  }
  closeSubjectDetails() {
    this.selectedSubject = null;
  }
  // Subject Management Methods
  openAddModal() {
    this.newSubject = {
      name: "",
      code: "",
      level: "primaria",
      gradeMin: 1,
      gradeMax: 5,
      type: "core"
    };
    this.showAddModal = true;
  }
  onLevelChange() {
    if (this.newSubject.level === "bachillerato") {
      this.newSubject.gradeMin = 6;
      this.newSubject.gradeMax = 9;
    } else if (this.newSubject.level === "media") {
      this.newSubject.gradeMin = 10;
      this.newSubject.gradeMax = 11;
    } else {
      this.newSubject.gradeMin = 1;
      this.newSubject.gradeMax = 5;
    }
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  capitalizeFirstLetter(value) {
    if (!value)
      return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  onSubjectNameInput(event) {
    const input = event.target;
    const cursorPos = input.selectionStart ?? 0;
    const originalLength = input.value.length;
    const capitalized = this.capitalizeFirstLetter(input.value);
    if (capitalized !== input.value) {
      input.value = capitalized;
      const newPos = cursorPos + (capitalized.length - originalLength);
      input.setSelectionRange(newPos, newPos);
    }
    this.newSubject.name = capitalized;
  }
  addSubject() {
    if (!this.newSubject.name || !this.newSubject.name.trim()) {
      this.showErrorNotification("El nombre de la materia es obligatorio");
      return;
    }
    this.isSavingSubject = true;
    const subjectData = {
      name: this.capitalizeFirstLetter(this.newSubject.name.trim()),
      code: this.newSubject.code?.toUpperCase() || "",
      level: this.newSubject.level || "primaria",
      gradeMin: this.newSubject.gradeMin || 1,
      gradeMax: this.newSubject.gradeMax || 5,
      type: this.newSubject.type || "core"
    };
    this.http.post("http://localhost:8080/api/subjects", subjectData).subscribe({
      next: (saved) => {
        this.subjects.push(saved);
        this.allSubjects = [...this.subjects].sort((a, b) => a.name.localeCompare(b.name));
        this.closeAddModal();
        this.isSavingSubject = false;
        this.showSuccessNotification("Materia agregada exitosamente");
      },
      error: (err) => {
        console.error("Error creating subject", err);
        this.isSavingSubject = false;
        this.showErrorNotification("Error al agregar la materia");
      }
    });
  }
  confirmDeleteSubject(subject) {
    this.subjectToDelete = subject;
  }
  closeDeleteModal() {
    this.subjectToDelete = null;
  }
  deleteSubject() {
    if (!this.subjectToDelete)
      return;
    this.http.delete(`http://localhost:8080/api/subjects/${this.subjectToDelete.id}`).subscribe({
      next: () => {
        this.subjects = this.subjects.filter((s) => s.id !== this.subjectToDelete.id);
        this.allSubjects = [...this.subjects].sort((a, b) => a.name.localeCompare(b.name));
        this.closeDeleteModal();
        this.showSuccessNotification("Materia eliminada exitosamente");
      },
      error: (err) => {
        console.error("Error deleting subject", err);
        this.closeDeleteModal();
        this.showErrorNotification("Error al eliminar la materia");
      }
    });
  }
  changeToElective(subject) {
    const updatedSubject = __spreadProps(__spreadValues({}, subject), { type: "elective" });
    this.http.put(`http://localhost:8080/api/subjects/${subject.id}`, updatedSubject).subscribe({
      next: (saved) => {
        const idx = this.subjects.findIndex((s) => s.id === saved.id);
        if (idx !== -1)
          this.subjects[idx] = saved;
        this.allSubjects = [...this.subjects].sort((a, b) => a.name.localeCompare(b.name));
        this.showSuccessNotification("Materia cambiada a electiva");
      },
      error: (err) => {
        console.error("Error updating subject", err);
        this.showErrorNotification("Error al cambiar a electiva");
      }
    });
  }
  changeToCore(subject) {
    const updatedSubject = __spreadProps(__spreadValues({}, subject), { type: "core" });
    this.http.put(`http://localhost:8080/api/subjects/${subject.id}`, updatedSubject).subscribe({
      next: (saved) => {
        const idx = this.subjects.findIndex((s) => s.id === saved.id);
        if (idx !== -1)
          this.subjects[idx] = saved;
        this.allSubjects = [...this.subjects].sort((a, b) => a.name.localeCompare(b.name));
        this.showSuccessNotification("Materia cambiada a b\xE1sica");
      },
      error: (err) => {
        console.error("Error updating subject", err);
        this.showErrorNotification("Error al cambiar a b\xE1sica");
      }
    });
  }
  openModifyGrades(subject) {
    this.subjectToModifyGrades = subject;
    this.modifyGradesData = { gradeMin: subject.gradeMin ?? 1, gradeMax: subject.gradeMax ?? 5 };
    this.showGradeModal = true;
  }
  closeGradeModal() {
    this.showGradeModal = false;
    this.subjectToModifyGrades = null;
  }
  saveModifiedGrades() {
    if (!this.subjectToModifyGrades)
      return;
    this.isSavingGrades = true;
    const updatedSubject = __spreadProps(__spreadValues({}, this.subjectToModifyGrades), {
      gradeMin: this.modifyGradesData.gradeMin,
      gradeMax: this.modifyGradesData.gradeMax
    });
    this.http.put(`http://localhost:8080/api/subjects/${this.subjectToModifyGrades.id}`, updatedSubject).subscribe({
      next: (saved) => {
        const idx = this.subjects.findIndex((s) => s.id === saved.id);
        if (idx !== -1)
          this.subjects[idx] = saved;
        this.allSubjects = [...this.subjects].sort((a, b) => a.name.localeCompare(b.name));
        this.closeGradeModal();
        this.isSavingGrades = false;
        this.showSuccessNotification("Grados modificados exitosamente");
      },
      error: (err) => {
        console.error("Error updating grades", err);
        this.isSavingGrades = false;
        this.showErrorNotification("Error al modificar grados");
      }
    });
  }
  // Notification methods
  showSuccessNotification(message) {
    this.notificationType = "success";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 2500);
  }
  showErrorNotification(message) {
    this.notificationType = "error";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 2500);
  }
  hideNotification() {
    this.showNotification = false;
  }
  // ---- Filtros ----
  get totalSubjects() {
    return this.subjects.length;
  }
  get coreSubjects() {
    return this.subjects.filter((s) => (s.type || "core").toLowerCase() !== "elective");
  }
  get electiveSubjects() {
    return this.subjects.filter((s) => (s.type || "core").toLowerCase() === "elective");
  }
  get primarySubjectCount() {
    return this.subjects.filter((s) => "primaria" === (s.level || "").toLowerCase()).length;
  }
  get highSchoolSubjectCount() {
    return this.subjects.filter((s) => "bachillerato" === (s.level || "").toLowerCase() || "media" === (s.level || "").toLowerCase()).length;
  }
  selectTab(tab) {
    this.selectedTab = tab;
    this.selectedSubject = null;
  }
  get tabSubjects() {
    return this.subjects.filter((s) => {
      const min = s.gradeMin ?? 1;
      const max = s.gradeMax ?? 11;
      if (this.selectedTab === "primaria") {
        return max <= 5;
      } else if (this.selectedTab === "bachillerato") {
        return min >= 6 && min < 10;
      } else {
        return min >= 10;
      }
    });
  }
  static \u0275fac = function Subjects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Subjects)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Subjects, selectors: [["app-subjects"]], decls: 54, vars: 19, consts: [["subjectForm", "ngForm"], ["gradeForm", "ngForm"], [1, "subjects-container"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "subjects-header"], [1, "add-subject-button", 3, "click"], [1, "tab-selector"], [1, "tab-btn", 3, "click"], [1, "subjects-content"], [1, "subject-count-badge"], [1, "subjects-grid"], [1, "subject-card"], [1, "empty-message"], [1, "modal-overlay"], [1, "notification-overlay"], [1, "loading"], [1, "subject-header"], [1, "subject-code"], [1, "subject-details"], [1, "grades-range"], [1, "subject-level"], [1, "subject-type-badge"], [1, "badge", "badge-elective"], [1, "badge", "badge-core"], [1, "subject-actions"], [1, "action-btn", "core-btn"], [1, "action-btn", "elective-btn"], [1, "action-btn", "edit-btn", 3, "click"], [1, "action-btn", "delete-btn", 3, "click"], [1, "action-btn", "core-btn", 3, "click"], [1, "action-btn", "elective-btn", 3, "click"], [1, "add-subject-button", 2, "margin", "0 auto", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "add-modal", 3, "click"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "subjectName"], ["type", "text", "id", "subjectName", "name", "name", "placeholder", "Ej: Matem\xE1ticas", "autocomplete", "off", "required", "", "maxlength", "100", 3, "ngModelChange", "input", "ngModel"], ["for", "subjectCode"], ["type", "text", "id", "subjectCode", "name", "code", "placeholder", "Ej: MAT", "autocomplete", "off", "required", "", "maxlength", "20", 3, "ngModelChange", "input", "ngModel"], ["for", "subjectLevel"], ["id", "subjectLevel", "name", "level", "autocomplete", "off", "required", "", 3, "ngModelChange", "change", "ngModel"], ["value", "primaria"], ["value", "bachillerato"], ["value", "media"], ["for", "subjectType"], ["id", "subjectType", "name", "type", "autocomplete", "off", "required", "", 3, "ngModelChange", "ngModel"], ["value", "core"], ["value", "elective"], [1, "form-row", "form-row-2"], ["for", "gradeMin"], ["type", "number", "id", "gradeMin", "name", "gradeMin", "min", "1", "max", "11", "required", "", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["for", "gradeMax"], ["type", "number", "id", "gradeMax", "name", "gradeMax", "min", "1", "max", "11", "required", "", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "cancel-button", 3, "click", "disabled"], ["type", "submit", 1, "save-button", 3, "disabled"], [4, "ngIf"], ["for", "modifyGradeMin"], ["type", "number", "id", "modifyGradeMin", "name", "modifyGradeMin", "min", "1", "max", "11", "required", "", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["for", "modifyGradeMax"], ["type", "number", "id", "modifyGradeMax", "name", "modifyGradeMax", "min", "1", "max", "11", "required", "", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "modal-content", "confirm-modal", 3, "click"], [1, "confirm-message"], ["type", "button", 1, "cancel-button", 3, "click"], ["type", "button", 1, "delete-confirm-button", 3, "click"], [1, "notification-content", 3, "click"], [1, "notification-icon"], [1, "notification-body"], [1, "notification-close", 3, "click"], [1, "spinner"]], template: function Subjects_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h2");
      \u0275\u0275text(2, "Gesti\xF3n de Materias y Asignaturas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "h3");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Materias Totales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 4)(13, "div", 5);
      \u0275\u0275text(14, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6)(16, "h3");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Materias B\xE1sicas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 4)(21, "div", 5);
      \u0275\u0275text(22, "\u{1F3A8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 6)(24, "h3");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Materias Electivas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 7)(29, "button", 8);
      \u0275\u0275listener("click", function Subjects_Template_button_click_29_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275text(30, " \u2795 Agregar Materia ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 9)(32, "button", 10);
      \u0275\u0275listener("click", function Subjects_Template_button_click_32_listener() {
        return ctx.selectTab("primaria");
      });
      \u0275\u0275text(33, " \u{1F4DA} Primaria (1\xB0 - 5\xB0) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 10);
      \u0275\u0275listener("click", function Subjects_Template_button_click_34_listener() {
        return ctx.selectTab("bachillerato");
      });
      \u0275\u0275text(35, " \u{1F393} Bachillerato (6\xB0 - 11\xB0) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 10);
      \u0275\u0275listener("click", function Subjects_Template_button_click_36_listener() {
        return ctx.selectTab("media");
      });
      \u0275\u0275text(37, " \u{1F4D6} Media (10\xB0 - 11\xB0) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 11)(39, "h3");
      \u0275\u0275conditionalCreate(40, Subjects_Conditional_40_Template, 1, 0);
      \u0275\u0275conditionalCreate(41, Subjects_Conditional_41_Template, 1, 0);
      \u0275\u0275conditionalCreate(42, Subjects_Conditional_42_Template, 1, 0);
      \u0275\u0275elementStart(43, "span", 12);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 13);
      \u0275\u0275repeaterCreate(46, Subjects_For_47_Template, 28, 9, "div", 14, \u0275\u0275repeaterTrackByIdentity, false, Subjects_ForEmpty_48_Template, 10, 3, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(49, Subjects_Conditional_49_Template, 53, 10, "div", 16);
      \u0275\u0275conditionalCreate(50, Subjects_Conditional_50_Template, 25, 7, "div", 16);
      \u0275\u0275conditionalCreate(51, Subjects_Conditional_51_Template, 21, 1, "div", 16);
      \u0275\u0275conditionalCreate(52, Subjects_Conditional_52_Template, 12, 8, "div", 17);
      \u0275\u0275conditionalCreate(53, Subjects_Conditional_53_Template, 4, 0, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalSubjects);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.coreSubjects.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.electiveSubjects.length);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.selectedTab === "primaria");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedTab === "bachillerato");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedTab === "media");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.selectedTab === "primaria" ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedTab === "bachillerato" ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedTab === "media" ? 42 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.tabSubjects.length, " materias");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabSubjects);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showAddModal ? 49 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showGradeModal && ctx.subjectToModifyGrades ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subjectToDelete ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showNotification ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 53 : -1);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: ['\n\n.subjects-container[_ngcontent-%COMP%] {\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  max-width: 1400px;\n  margin: 0 auto;\n  min-height: calc(100vh - 4rem);\n}\n.subjects-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 0 0 var(--sp-6);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.subjects-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -0.5rem;\n  width: 64px;\n  height: 3px;\n  border-radius: var(--r-pill);\n  background: var(--brand);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-6);\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: var(--brand);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-100);\n  box-shadow: var(--shadow-md);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: var(--r-md);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  background: var(--brand-50);\n  color: var(--brand);\n  flex-shrink: 0;\n}\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.subjects-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--sp-5);\n}\n.add-subject-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.7rem 1.3rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.add-subject-button[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.add-subject-button[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.add-subject-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.tab-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-6);\n  padding: var(--sp-2);\n  border-radius: var(--r-md);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.7rem 1rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  background: transparent;\n  color: var(--text-2);\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n}\n.tab-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.subjects-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  padding: var(--sp-5);\n  margin-bottom: var(--sp-6);\n  box-shadow: var(--shadow-sm);\n}\n.subjects-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-5);\n  padding-top: var(--sp-1);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-1);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.subject-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.3rem 0.7rem;\n  background: var(--brand-50);\n  color: var(--brand);\n  border-radius: var(--r-pill);\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-left: var(--sp-3);\n  border: 1px solid var(--brand-100);\n}\n.subjects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--sp-4);\n}\n.subject-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-xs);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.subject-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-100);\n  box-shadow: var(--shadow-sm);\n}\n.subject-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.subject-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-1);\n  line-height: 1.3;\n}\n.subject-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.6rem;\n  background: var(--brand-50);\n  color: var(--brand);\n  border-radius: var(--r-pill);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  border: 1px solid var(--brand-100);\n  flex-shrink: 0;\n}\n.subject-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n  margin-bottom: var(--sp-4);\n  padding: var(--sp-3);\n  border-radius: var(--r-sm);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n}\n.subject-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.grades-range[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n.subject-level[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-2);\n}\n.subject-type-badge[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.3rem 0.7rem;\n  border-radius: var(--r-pill);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-core[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n}\n.badge-elective[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid #bfe6cc;\n}\n.subject-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-2);\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.5rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--surface);\n  color: var(--text-2);\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  flex: 1 1 130px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.elective-btn[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: #bfe6cc;\n}\n.elective-btn[_ngcontent-%COMP%]:hover {\n  background: #d8f0e0;\n  color: #15803d;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: #f3dcb4;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: #fbe9cf;\n  color: #b45309;\n}\n.core-btn[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand);\n  border-color: var(--brand-100);\n}\n.core-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-100);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #f3c4c4;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fbd5d5;\n  color: #b91c1c;\n}\n.action-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.empty-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-3);\n  text-align: center;\n  color: var(--text-3);\n  padding: var(--sp-8) var(--sp-5);\n  grid-column: 1 / -1;\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-md);\n  background: var(--surface-2);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.add-modal[_ngcontent-%COMP%] {\n  width: min(100%, 560px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  animation: modalSlideIn 0.25s ease-out;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  width: min(100%, 440px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-lg);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-4);\n  padding: var(--sp-5);\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.close-button[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 50%;\n  font-size: 1rem;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n.close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--sp-5);\n  background: var(--surface);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.form-row.form-row-2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  background: var(--surface);\n  color: var(--text-1);\n  outline: none;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.cancel-button[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.3rem;\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.save-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.4rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition: background-color 0.18s ease, box-shadow 0.18s ease;\n}\n.save-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.save-button[_ngcontent-%COMP%]:disabled, \n.cancel-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.confirm-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-2);\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.delete-confirm-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.3rem;\n  background: var(--danger);\n  color: #fff;\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-confirm-button[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: var(--sp-4);\n  right: var(--sp-4);\n  z-index: 1200;\n  width: min(420px, calc(100% - 2rem));\n  pointer-events: none;\n}\n.notification-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-4) var(--sp-4) var(--sp-5);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 5px solid var(--success);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-lg);\n  pointer-events: auto;\n  animation: _ngcontent-%COMP%_toastIn 0.25s ease-out;\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-left-color: var(--success);\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-left-color: var(--danger);\n}\n.notification-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  color: #fff;\n  background: var(--success);\n}\n.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.notification-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: var(--text-1);\n  font-size: 0.95rem;\n  line-height: 1.25;\n}\n.notification-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.notification-close[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  border: none;\n  border-radius: 50%;\n  background: var(--surface-2);\n  color: var(--text-3);\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(-12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-8);\n  color: var(--text-3);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid var(--border);\n  border-top-color: var(--brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n  margin-bottom: var(--sp-4);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .subjects-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .subjects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%], \n   .form-row.form-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tab-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .subjects-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.5rem 0.7rem;\n  }\n  .subjects-content[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    padding: var(--sp-3) var(--sp-4) var(--sp-4);\n  }\n  .notification-overlay[_ngcontent-%COMP%] {\n    right: var(--sp-3);\n    left: var(--sp-3);\n    width: auto;\n  }\n}\n/*# sourceMappingURL=subjects.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Subjects, [{
    type: Component,
    args: [{ selector: "app-subjects", imports: [CommonModule, FormsModule], template: `<div class="subjects-container">
  <h2>Gesti\xF3n de Materias y Asignaturas</h2>

  <!-- Subject Statistics -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">\u{1F4DA}</div>
      <div class="stat-content">
        <h3>{{ totalSubjects }}</h3>
        <p>Materias Totales</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">\u{1F3AF}</div>
      <div class="stat-content">
        <h3>{{ coreSubjects.length }}</h3>
        <p>Materias B\xE1sicas</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">\u{1F3A8}</div>
      <div class="stat-content">
        <h3>{{ electiveSubjects.length }}</h3>
        <p>Materias Electivas</p>
      </div>
    </div>
  </div>

  <!-- Add Subject Button -->
  <div class="subjects-header">
    <button class="add-subject-button" (click)="openAddModal()">
      \u2795 Agregar Materia
    </button>
  </div>

  <!-- Tab Selector -->
  <div class="tab-selector">
    <button class="tab-btn" [class.active]="selectedTab === 'primaria'" (click)="selectTab('primaria')">
      \u{1F4DA} Primaria (1\xB0 - 5\xB0)
    </button>
    <button class="tab-btn" [class.active]="selectedTab === 'bachillerato'" (click)="selectTab('bachillerato')">
      \u{1F393} Bachillerato (6\xB0 - 11\xB0)
    </button>
    <button class="tab-btn" [class.active]="selectedTab === 'media'" (click)="selectTab('media')">
      \u{1F4D6} Media (10\xB0 - 11\xB0)
    </button>
  </div>

  <!-- All Subjects by Tab -->
  <div class="subjects-content">
    <h3>
      @if (selectedTab === 'primaria') { Materias de Primaria }
      @if (selectedTab === 'bachillerato') { Materias de Bachillerato }
      @if (selectedTab === 'media') { Materias de Media }
      <span class="subject-count-badge">{{ tabSubjects.length }} materias</span>
    </h3>
    <div class="subjects-grid">
      @for (subject of tabSubjects; track subject) {
        <div class="subject-card">
          <div class="subject-header">
            <h5>{{ subject.name }}</h5>
            <span class="subject-code">{{ subject.code }}</span>
          </div>
          <div class="subject-details">
            <p class="grades-range">
              \u{1F4CF} Grados
              <strong>{{ subject.gradeMin ?? '?' }}\xB0</strong>
              \u2014
              <strong>{{ subject.gradeMax ?? '?' }}\xB0</strong>
            </p>
            <p class="subject-level">
              @if ((subject.level || '').toLowerCase() === 'primaria') { \u{1F3EB} Primaria }
              @if ((subject.level || '').toLowerCase() === 'bachillerato') { \u{1F3DB}\uFE0F Bachillerato }
              @if ((subject.level || '').toLowerCase() === 'media') { \u{1F4D6} Media }
            </p>
            <p class="subject-type-badge">
              @if ((subject.type || 'core').toLowerCase() === 'elective') {
                <span class="badge badge-elective">\u26A1 Electiva</span>
              } @else {
                <span class="badge badge-core">\u{1F4D8} B\xE1sica</span>
              }
            </p>
          </div>
          <div class="subject-actions">
            @if ((subject.type || 'core').toLowerCase() === 'elective') {
              <button class="action-btn core-btn" (click)="changeToCore(subject)">Quitar electiva</button>
            } @else {
              <button class="action-btn elective-btn" (click)="changeToElective(subject)">Cambiar a electiva</button>
            }
            <button class="action-btn edit-btn" (click)="openModifyGrades(subject)">Modificar grados</button>
            <button class="action-btn delete-btn" (click)="confirmDeleteSubject(subject)">\u{1F5D1}\uFE0F Eliminar</button>
          </div>
        </div>
      }
      @empty {
        <div class="empty-message">
          No hay materias registradas para 
          @if (selectedTab === 'primaria') { primaria }
          @if (selectedTab === 'bachillerato') { bachillerato }
          @if (selectedTab === 'media') { Media }
          .
          <br><br>
          <button class="add-subject-button" (click)="openAddModal()" style="margin:0 auto;">
            \u2795 Agregar materia ahora
          </button>
        </div>
      }
    </div>
  </div>

  <!-- Add Subject Modal -->
  @if (showAddModal) {
    <div class="modal-overlay" (click)="closeAddModal()">
      <div class="modal-content add-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>\u2795 Agregar Nueva Materia</h3>
          <button class="close-button" (click)="closeAddModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <form #subjectForm="ngForm" (ngSubmit)="addSubject()">
            <div class="form-row">
              <div class="form-group">
                <label for="subjectName">Nombre de la Materia *</label>
                 <input
                   type="text"
                   id="subjectName"
                   name="name"
                   [(ngModel)]="newSubject.name"
                   (input)="onSubjectNameInput($event)"
                   placeholder="Ej: Matem\xE1ticas"
                   autocomplete="off"
                   required
                   maxlength="100"
                 />
              </div>
              <div class="form-group">
                <label for="subjectCode">C\xF3digo *</label>
                <input
                  type="text"
                  id="subjectCode"
                  name="code"
                  [(ngModel)]="newSubject.code"
                  (input)="newSubject.code = $any($event.target).value.toUpperCase()"
                  placeholder="Ej: MAT"
                  autocomplete="off"
                  required
                  maxlength="20"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="subjectLevel">Nivel *</label>
                <select id="subjectLevel" name="level" [(ngModel)]="newSubject.level" (change)="onLevelChange()" autocomplete="off" required>
                  <option value="primaria">Primaria</option>
                  <option value="bachillerato">Bachillerato</option>
                  <option value="media">Media (10\xB0-11\xB0)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="subjectType">Tipo *</label>
                <select id="subjectType" name="type" [(ngModel)]="newSubject.type" autocomplete="off" required>
                  <option value="core">B\xE1sica</option>
                  <option value="elective">Electiva</option>
                </select>
              </div>
            </div>

            <div class="form-row form-row-2">
              <div class="form-group">
                <label for="gradeMin">Grado M\xEDnimo *</label>
                <input
                  type="number"
                  id="gradeMin"
                  name="gradeMin"
                  [(ngModel)]="newSubject.gradeMin"
                  min="1"
                  max="11"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label for="gradeMax">Grado M\xE1ximo *</label>
                <input
                  type="number"
                  id="gradeMax"
                  name="gradeMax"
                  [(ngModel)]="newSubject.gradeMax"
                  min="1"
                  max="11"
                  required
                  autocomplete="off"
                />
              </div>
            </div>

            <div class="modal-actions">
              <button type="button" class="cancel-button" (click)="closeAddModal()" [disabled]="isSavingSubject">
                Cancelar
              </button>
              <button type="submit" class="save-button" [disabled]="isSavingSubject">
                <span *ngIf="!isSavingSubject">\u{1F4BE} Guardar Materia</span>
                <span *ngIf="isSavingSubject">Guardando...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }

  <!-- Modify Grades Modal -->
  @if (showGradeModal && subjectToModifyGrades) {
    <div class="modal-overlay" (click)="closeGradeModal()">
      <div class="modal-content add-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>\u{1F4CF} Modificar Grados - {{ subjectToModifyGrades.name }}</h3>
          <button class="close-button" (click)="closeGradeModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <form #gradeForm="ngForm" (ngSubmit)="saveModifiedGrades()">
            <div class="form-row form-row-2">
              <div class="form-group">
                <label for="modifyGradeMin">Grado M\xEDnimo *</label>
                <input
                  type="number"
                  id="modifyGradeMin"
                  name="modifyGradeMin"
                  [(ngModel)]="modifyGradesData.gradeMin"
                  min="1"
                  max="11"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label for="modifyGradeMax">Grado M\xE1ximo *</label>
                <input
                  type="number"
                  id="modifyGradeMax"
                  name="modifyGradeMax"
                  [(ngModel)]="modifyGradesData.gradeMax"
                  min="1"
                  max="11"
                  required
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="modal-actions">
              <button type="button" class="cancel-button" (click)="closeGradeModal()" [disabled]="isSavingGrades">
                Cancelar
              </button>
              <button type="submit" class="save-button" [disabled]="isSavingGrades">
                <span *ngIf="!isSavingGrades">\u{1F4BE} Guardar Cambios</span>
                <span *ngIf="isSavingGrades">Guardando...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }

  <!-- Delete Confirmation Modal -->
  @if (subjectToDelete) {
    <div class="modal-overlay" (click)="closeDeleteModal()">
      <div class="modal-content confirm-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>\u26A0\uFE0F Confirmar eliminaci\xF3n</h3>
          <button class="close-button" (click)="closeDeleteModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <p class="confirm-message">
            \xBFEst\xE1 seguro de eliminar la materia <strong>{{ subjectToDelete.name }}</strong>?
            <br><small>Esta acci\xF3n no se puede deshacer.</small>
          </p>
          <div class="modal-actions">
            <button type="button" class="cancel-button" (click)="closeDeleteModal()">Cancelar</button>
            <button type="button" class="delete-confirm-button" (click)="deleteSubject()">\u{1F5D1}\uFE0F Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  }

  <!-- Custom Notification System -->
  @if (showNotification) {
    <div class="notification-overlay">
      <div class="notification-content"
        [class.notification-success]="notificationType === 'success'"
        [class.notification-error]="notificationType === 'error'"
        (click)="$event.stopPropagation()">
        <div class="notification-icon">
          <span *ngIf="notificationType === 'success'">\u2713</span>
          <span *ngIf="notificationType === 'error'">!</span>
        </div>
        <div class="notification-body">
          <strong>{{ notificationType === 'success' ? '\xA1Operaci\xF3n exitosa!' : '\xA1Atenci\xF3n!' }}</strong>
          <span>{{ notificationMessage }}</span>
        </div>
        <button class="notification-close" (click)="hideNotification()">\u2715</button>
      </div>
    </div>
  }

  @if (loading) {
    <div class="loading">
      <div class="spinner"></div>
      <p>Cargando materias...</p>
    </div>
  }
</div>`, styles: ['/* src/app/subjects/subjects.css */\n.subjects-container {\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  max-width: 1400px;\n  margin: 0 auto;\n  min-height: calc(100vh - 4rem);\n}\n.subjects-container h2 {\n  position: relative;\n  display: inline-block;\n  margin: 0 0 var(--sp-6);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.subjects-container h2::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -0.5rem;\n  width: 64px;\n  height: 3px;\n  border-radius: var(--r-pill);\n  background: var(--brand);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-6);\n}\n.stat-card {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: var(--brand);\n}\n.stat-card:hover {\n  border-color: var(--brand-100);\n  box-shadow: var(--shadow-md);\n}\n.stat-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: var(--r-md);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  background: var(--brand-50);\n  color: var(--brand);\n  flex-shrink: 0;\n}\n.stat-content h3 {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.stat-content p {\n  margin: 0.2rem 0 0;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.subjects-header {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--sp-5);\n}\n.add-subject-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.7rem 1.3rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.add-subject-button:hover {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.add-subject-button:active {\n  transform: translateY(1px);\n}\n.add-subject-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.tab-selector {\n  display: flex;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-6);\n  padding: var(--sp-2);\n  border-radius: var(--r-md);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.tab-btn {\n  flex: 1;\n  padding: 0.7rem 1rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  background: transparent;\n  color: var(--text-2);\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.tab-btn:hover {\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.tab-btn.active {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n}\n.tab-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.subjects-content {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  padding: var(--sp-5);\n  margin-bottom: var(--sp-6);\n  box-shadow: var(--shadow-sm);\n}\n.subjects-content h3 {\n  margin: 0 0 var(--sp-5);\n  padding-top: var(--sp-1);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-1);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.subject-count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.3rem 0.7rem;\n  background: var(--brand-50);\n  color: var(--brand);\n  border-radius: var(--r-pill);\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-left: var(--sp-3);\n  border: 1px solid var(--brand-100);\n}\n.subjects-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--sp-4);\n}\n.subject-card {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-xs);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.subject-card:hover {\n  border-color: var(--brand-100);\n  box-shadow: var(--shadow-sm);\n}\n.subject-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.subject-header h5 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-1);\n  line-height: 1.3;\n}\n.subject-code {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.6rem;\n  background: var(--brand-50);\n  color: var(--brand);\n  border-radius: var(--r-pill);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  border: 1px solid var(--brand-100);\n  flex-shrink: 0;\n}\n.subject-details {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n  margin-bottom: var(--sp-4);\n  padding: var(--sp-3);\n  border-radius: var(--r-sm);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n}\n.subject-details p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.grades-range {\n  color: var(--text-3);\n}\n.subject-level {\n  font-weight: 600;\n  color: var(--text-2);\n}\n.subject-type-badge {\n  margin: 0;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.3rem 0.7rem;\n  border-radius: var(--r-pill);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-core {\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n}\n.badge-elective {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid #bfe6cc;\n}\n.subject-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-2);\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.5rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--surface);\n  color: var(--text-2);\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  flex: 1 1 130px;\n}\n.action-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.elective-btn {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: #bfe6cc;\n}\n.elective-btn:hover {\n  background: #d8f0e0;\n  color: #15803d;\n}\n.edit-btn {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: #f3dcb4;\n}\n.edit-btn:hover {\n  background: #fbe9cf;\n  color: #b45309;\n}\n.core-btn {\n  background: var(--brand-50);\n  color: var(--brand);\n  border-color: var(--brand-100);\n}\n.core-btn:hover {\n  background: var(--brand-100);\n}\n.delete-btn {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #f3c4c4;\n}\n.delete-btn:hover {\n  background: #fbd5d5;\n  color: #b91c1c;\n}\n.action-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.empty-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-3);\n  text-align: center;\n  color: var(--text-3);\n  padding: var(--sp-8) var(--sp-5);\n  grid-column: 1 / -1;\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-md);\n  background: var(--surface-2);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.add-modal {\n  width: min(100%, 560px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  animation: modalSlideIn 0.25s ease-out;\n}\n.confirm-modal {\n  width: min(100%, 440px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-lg);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-4);\n  padding: var(--sp-5);\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.close-button {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 50%;\n  font-size: 1rem;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n.close-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body {\n  margin: 0;\n  padding: var(--sp-5);\n  background: var(--surface);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.form-row.form-row-2 {\n  grid-template-columns: 1fr 1fr;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n}\n.form-group.full-width {\n  grid-column: 1 / -1;\n}\n.form-group label {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  background: var(--surface);\n  color: var(--text-1);\n  outline: none;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.cancel-button {\n  padding: 0.6rem 1.3rem;\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-button:hover:not(:disabled) {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.save-button {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.4rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition: background-color 0.18s ease, box-shadow 0.18s ease;\n}\n.save-button:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.save-button:disabled,\n.cancel-button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.confirm-message {\n  margin: 0;\n  color: var(--text-2);\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.delete-confirm-button {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.3rem;\n  background: var(--danger);\n  color: #fff;\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-confirm-button:hover {\n  background: #b91c1c;\n}\n.notification-overlay {\n  position: fixed;\n  top: var(--sp-4);\n  right: var(--sp-4);\n  z-index: 1200;\n  width: min(420px, calc(100% - 2rem));\n  pointer-events: none;\n}\n.notification-content {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-4) var(--sp-4) var(--sp-5);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 5px solid var(--success);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-lg);\n  pointer-events: auto;\n  animation: toastIn 0.25s ease-out;\n}\n.notification-success {\n  border-left-color: var(--success);\n}\n.notification-error {\n  border-left-color: var(--danger);\n}\n.notification-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  color: #fff;\n  background: var(--success);\n}\n.notification-error .notification-icon {\n  background: var(--danger);\n}\n.notification-body strong {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: var(--text-1);\n  font-size: 0.95rem;\n  line-height: 1.25;\n}\n.notification-body span {\n  display: block;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.notification-close {\n  width: 1.75rem;\n  height: 1.75rem;\n  border: none;\n  border-radius: 50%;\n  background: var(--surface-2);\n  color: var(--text-3);\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@keyframes toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(-12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-8);\n  color: var(--text-3);\n}\n.spinner {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid var(--border);\n  border-top-color: var(--brand);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n  margin-bottom: var(--sp-4);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .subjects-container {\n    padding: var(--sp-4);\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .subjects-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-row,\n  .form-row.form-row-2 {\n    grid-template-columns: 1fr;\n  }\n  .tab-selector {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .subjects-container h2 {\n    font-size: 1.3rem;\n  }\n  .stat-card {\n    padding: var(--sp-4);\n  }\n  .stat-icon {\n    font-size: 1.4rem;\n  }\n  .stat-content h3 {\n    font-size: 1.3rem;\n  }\n  .action-btn {\n    font-size: 0.8rem;\n    padding: 0.5rem 0.7rem;\n  }\n  .subjects-content {\n    padding: var(--sp-4);\n  }\n  .modal-header {\n    padding: var(--sp-4);\n  }\n  .modal-body {\n    padding: var(--sp-4);\n  }\n  .modal-actions {\n    padding: var(--sp-3) var(--sp-4) var(--sp-4);\n  }\n  .notification-overlay {\n    right: var(--sp-3);\n    left: var(--sp-3);\n    width: auto;\n  }\n}\n/*# sourceMappingURL=subjects.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Subjects, { className: "Subjects", filePath: "app/subjects/subjects.ts", lineNumber: 22 });
})();
export {
  Subjects
};
//# sourceMappingURL=chunk-MRJDJRDJ.js.map
