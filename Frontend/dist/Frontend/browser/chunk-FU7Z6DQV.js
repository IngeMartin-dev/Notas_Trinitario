import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-TCE2U3R2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgClass,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/teachers/teachers.ts
var _c0 = (a0) => ({ "input-error": a0 });
var _forTrack0 = ($index, $item) => $item.id;
function Teachers_Conditional_6_For_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const teacher_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(teacher_r4), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getTeacherFullName(teacher_r4));
  }
}
function Teachers_Conditional_6_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", teacher_r4.name.charAt(0), "", teacher_r4.surname.charAt(0));
  }
}
function Teachers_Conditional_6_For_10_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275listener("click", function Teachers_Conditional_6_For_10_Conditional_20_For_2_Template_span_click_0_listener($event) {
      const subject_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const teacher_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.unassignSubject(subject_r6, teacher_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.getSubjectLevelClass(subject_r6))("title", subject_r6.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSubjectAcronym(subject_r6), " ");
  }
}
function Teachers_Conditional_6_For_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275repeaterCreate(1, Teachers_Conditional_6_For_10_Conditional_20_For_2_Template, 2, 3, "span", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getTeacherSubjectObjects(teacher_r4));
  }
}
function Teachers_Conditional_6_For_10_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Sin materias asignadas");
    \u0275\u0275elementEnd();
  }
}
function Teachers_Conditional_6_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function Teachers_Conditional_6_For_10_Template_div_click_0_listener() {
      const teacher_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTeacherForAssignment(teacher_r4));
    });
    \u0275\u0275elementStart(1, "div", 26)(2, "button", 27);
    \u0275\u0275listener("click", function Teachers_Conditional_6_For_10_Template_button_click_2_listener($event) {
      const teacher_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openEditTeacher(teacher_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(3, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function Teachers_Conditional_6_For_10_Template_button_click_4_listener($event) {
      const teacher_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.deleteTeacher(teacher_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275conditionalCreate(7, Teachers_Conditional_6_For_10_Conditional_7_Template, 1, 2, "img", 30)(8, Teachers_Conditional_6_For_10_Conditional_8_Template, 2, 2, "div", 31);
    \u0275\u0275elementStart(9, "div", 32)(10, "div", 33)(11, "strong", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 37)(18, "span", 38);
    \u0275\u0275text(19, "Materias asignadas");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, Teachers_Conditional_6_For_10_Conditional_20_Template, 3, 0, "div", 39)(21, Teachers_Conditional_6_For_10_Conditional_21_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const teacher_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("teacher-selected", (ctx_r1.selectedTeacherForAssignment == null ? null : ctx_r1.selectedTeacherForAssignment.id) === teacher_r4.id);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.getProfilePictureUrl(teacher_r4) ? 7 : 8);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", teacher_r4.name, " ", teacher_r4.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r4.username || "Sin usuario");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.getTeacherSubjectObjects(teacher_r4).length > 0 ? 20 : 21);
  }
}
function Teachers_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 43);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4, "No hay profesores registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Agrega el primer profesor con el boton superior");
    \u0275\u0275elementEnd()();
  }
}
function Teachers_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Profesor seleccionado: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". Haz clic en una materia para asignarla. ");
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function Teachers_Conditional_6_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearTeacherSelection());
    });
    \u0275\u0275text(6, "Cancelar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedTeacherForAssignment.name, " ", ctx_r1.selectedTeacherForAssignment.surname);
  }
}
function Teachers_Conditional_6_For_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Grados ", subject_r9.gradeMin, "-", subject_r9.gradeMax);
  }
}
function Teachers_Conditional_6_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function Teachers_Conditional_6_For_25_Template_div_click_0_listener() {
      const subject_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedTeacherForAssignment && !(subject_r9.teacherId || subject_r9.teacher) && ctx_r1.assignSubjectToSelectedTeacher(subject_r9));
    });
    \u0275\u0275elementStart(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49)(7, "span", 50);
    \u0275\u0275text(8, "Bachillerato");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Teachers_Conditional_6_For_25_Conditional_9_Template, 2, 2, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subject_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clickable", ctx_r1.selectedTeacherForAssignment && !(subject_r9.teacherId || subject_r9.teacher))("assigned", (subject_r9.teacherId || subject_r9.teacher) === (ctx_r1.selectedTeacherForAssignment == null ? null : ctx_r1.selectedTeacherForAssignment.id))("disabled", (subject_r9.teacherId || subject_r9.teacher) && (subject_r9.teacherId || subject_r9.teacher) !== (ctx_r1.selectedTeacherForAssignment == null ? null : ctx_r1.selectedTeacherForAssignment.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subject_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getSubjectLevelClass(subject_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSubjectAcronym(subject_r9));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(subject_r9.gradeMin != null && subject_r9.gradeMax != null ? 9 : -1);
  }
}
function Teachers_Conditional_6_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Sin materias de bachillerato");
    \u0275\u0275elementEnd();
  }
}
function Teachers_Conditional_6_For_35_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Grados ", subject_r11.gradeMin, "-", subject_r11.gradeMax);
  }
}
function Teachers_Conditional_6_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function Teachers_Conditional_6_For_35_Template_div_click_0_listener() {
      const subject_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedTeacherForAssignment && !(subject_r11.teacherId || subject_r11.teacher) && ctx_r1.assignSubjectToSelectedTeacher(subject_r11));
    });
    \u0275\u0275elementStart(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49)(7, "span", 52);
    \u0275\u0275text(8, "Primaria");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Teachers_Conditional_6_For_35_Conditional_9_Template, 2, 2, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subject_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clickable", ctx_r1.selectedTeacherForAssignment && !(subject_r11.teacherId || subject_r11.teacher))("assigned", (subject_r11.teacherId || subject_r11.teacher) === (ctx_r1.selectedTeacherForAssignment == null ? null : ctx_r1.selectedTeacherForAssignment.id))("disabled", (subject_r11.teacherId || subject_r11.teacher) && (subject_r11.teacherId || subject_r11.teacher) !== (ctx_r1.selectedTeacherForAssignment == null ? null : ctx_r1.selectedTeacherForAssignment.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subject_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getSubjectLevelClass(subject_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSubjectAcronym(subject_r11));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(subject_r11.gradeMin != null && subject_r11.gradeMax != null ? 9 : -1);
  }
}
function Teachers_Conditional_6_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Sin materias de primaria");
    \u0275\u0275elementEnd();
  }
}
function Teachers_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_6_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12)(6, "h3");
    \u0275\u0275text(7, "Profesores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275repeaterCreate(9, Teachers_Conditional_6_For_10_Template, 22, 8, "div", 14, _forTrack0);
    \u0275\u0275conditionalCreate(11, Teachers_Conditional_6_Conditional_11_Template, 7, 0, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "h3");
    \u0275\u0275text(14, "Materias");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Teachers_Conditional_6_Conditional_15_Template, 7, 2, "div", 16);
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18)(18, "div", 19)(19, "span", 20);
    \u0275\u0275text(20, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h4");
    \u0275\u0275text(22, "Bachillerato");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21);
    \u0275\u0275repeaterCreate(24, Teachers_Conditional_6_For_25_Template, 10, 10, "div", 22, _forTrack0);
    \u0275\u0275conditionalCreate(26, Teachers_Conditional_6_Conditional_26_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 18)(28, "div", 24)(29, "span", 20);
    \u0275\u0275text(30, "\u{1F392}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h4");
    \u0275\u0275text(32, "Primaria");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 21);
    \u0275\u0275repeaterCreate(34, Teachers_Conditional_6_For_35_Template, 10, 10, "div", 22, _forTrack0);
    \u0275\u0275conditionalCreate(36, Teachers_Conditional_6_Conditional_36_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.getFilteredTeachers());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.teachers.length === 0 ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedTeacherForAssignment ? 15 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.highSchoolSubjects);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.highSchoolSubjects.length === 0 ? 26 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.primarySubjects);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.primarySubjects.length === 0 ? 36 : -1);
  }
}
function Teachers_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formModalError);
  }
}
function Teachers_Conditional_7_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formEmailError);
  }
}
function Teachers_Conditional_7_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formUsernameError);
  }
}
function Teachers_Conditional_7_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formPasswordError);
  }
}
function Teachers_Conditional_7_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardando... ");
  }
}
function Teachers_Conditional_7_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar Profesor ");
  }
}
function Teachers_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 53);
    \u0275\u0275listener("click", function Teachers_Conditional_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55)(4, "h3");
    \u0275\u0275text(5, "Agregar Nuevo Profesor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 56);
    \u0275\u0275text(7, "Completa los datos del docente y asigna las materias con estilo profesional.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 57);
    \u0275\u0275listener("click", function Teachers_Conditional_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 58);
    \u0275\u0275conditionalCreate(11, Teachers_Conditional_7_Conditional_11_Template, 2, 1, "div", 59);
    \u0275\u0275elementStart(12, "form", 60, 0);
    \u0275\u0275listener("ngSubmit", function Teachers_Conditional_7_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createTeacher());
    });
    \u0275\u0275elementStart(14, "div", 61)(15, "div", 62)(16, "label", 63);
    \u0275\u0275text(17, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_7_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 62)(20, "label", 65);
    \u0275\u0275text(21, "Apellido *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_7_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formSurname, $event) || (ctx_r1.formSurname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 61)(24, "div", 62)(25, "label", 67);
    \u0275\u0275text(26, "Correo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_7_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formEmail, $event) || (ctx_r1.formEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, Teachers_Conditional_7_Conditional_28_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 62)(30, "label", 70);
    \u0275\u0275text(31, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_7_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUsername, $event) || (ctx_r1.formUsername = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, Teachers_Conditional_7_Conditional_33_Template, 2, 1, "div", 69);
    \u0275\u0275elementStart(34, "small");
    \u0275\u0275text(35, "Si se deja vac\xEDo, se usar\xE1 el correo antes del @");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 72)(37, "h4");
    \u0275\u0275text(38, "Credenciales de acceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 61)(40, "div", 62)(41, "label", 73);
    \u0275\u0275text(42, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 74)(44, "span", 75);
    \u0275\u0275text(45, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_7_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPassword, $event) || (ctx_r1.formPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 77);
    \u0275\u0275listener("click", function Teachers_Conditional_7_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275elementStart(48, "span", 78);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 62)(51, "label", 79);
    \u0275\u0275text(52, "Confirmar Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 74)(54, "span", 75);
    \u0275\u0275text(55, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_7_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formConfirmPassword, $event) || (ctx_r1.formConfirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 77);
    \u0275\u0275listener("click", function Teachers_Conditional_7_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirmPassword = !ctx_r1.showConfirmPassword);
    });
    \u0275\u0275elementStart(58, "span", 78);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(60, Teachers_Conditional_7_Conditional_60_Template, 2, 1, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "small", 82);
    \u0275\u0275text(62, "La contrase\xF1a ser\xE1 cifrada antes de guardarse.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 83)(64, "button", 84);
    \u0275\u0275listener("click", function Teachers_Conditional_7_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275text(65, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 85);
    \u0275\u0275conditionalCreate(67, Teachers_Conditional_7_Conditional_67_Template, 1, 0)(68, Teachers_Conditional_7_Conditional_68_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.formModalError ? 11 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formSurname);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formEmail);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, ctx_r1.formEmailError));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formEmailError ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUsername);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, ctx_r1.formUsernameError));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formUsernameError ? 33 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPassword);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r1.showPassword ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r1.showConfirmPassword ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showConfirmPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formPasswordError ? 60 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving ? 67 : 68);
  }
}
function Teachers_Conditional_8_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardando... ");
  }
}
function Teachers_Conditional_8_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar Cambios ");
  }
}
function Teachers_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 53);
    \u0275\u0275listener("click", function Teachers_Conditional_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55)(4, "h3");
    \u0275\u0275text(5, "Editar Profesor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 56);
    \u0275\u0275text(7, "Actualiza usuario, correo y contrase\xF1a del docente.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 57);
    \u0275\u0275listener("click", function Teachers_Conditional_8_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 58)(11, "form", 60, 1);
    \u0275\u0275listener("ngSubmit", function Teachers_Conditional_8_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTeacherEdit());
    });
    \u0275\u0275elementStart(13, "div", 61)(14, "div", 62)(15, "label", 86);
    \u0275\u0275text(16, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_8_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const editTeacherForm_r14 = \u0275\u0275reference(12);
      \u0275\u0275twoWayBindingSet(editTeacherForm_r14.name, $event) || (editTeacherForm_r14.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 62)(19, "label", 88);
    \u0275\u0275text(20, "Apellido *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_8_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r13);
      const editTeacherForm_r14 = \u0275\u0275reference(12);
      \u0275\u0275twoWayBindingSet(editTeacherForm_r14.surname, $event) || (editTeacherForm_r14.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 61)(23, "div", 62)(24, "label", 90);
    \u0275\u0275text(25, "Usuario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_8_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r13);
      const editTeacherForm_r14 = \u0275\u0275reference(12);
      \u0275\u0275twoWayBindingSet(editTeacherForm_r14.username, $event) || (editTeacherForm_r14.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 62)(28, "label", 92);
    \u0275\u0275text(29, "Correo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_8_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r13);
      const editTeacherForm_r14 = \u0275\u0275reference(12);
      \u0275\u0275twoWayBindingSet(editTeacherForm_r14.email, $event) || (editTeacherForm_r14.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 61)(32, "div", 94)(33, "label", 95);
    \u0275\u0275text(34, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function Teachers_Conditional_8_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r13);
      const editTeacherForm_r14 = \u0275\u0275reference(12);
      \u0275\u0275twoWayBindingSet(editTeacherForm_r14.newPassword, $event) || (editTeacherForm_r14.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "La contrase\xF1a debe tener al menos 6 caracteres si decides cambiarla.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 83)(39, "button", 97);
    \u0275\u0275listener("click", function Teachers_Conditional_8_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275text(40, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 85);
    \u0275\u0275conditionalCreate(42, Teachers_Conditional_8_Conditional_42_Template, 1, 0)(43, Teachers_Conditional_8_Conditional_43_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const editTeacherForm_r14 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", editTeacherForm_r14.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", editTeacherForm_r14.surname);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", editTeacherForm_r14.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", editTeacherForm_r14.email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", editTeacherForm_r14.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingEditTeacher);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingEditTeacher);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.savingEditTeacher ? 42 : 43);
  }
}
function Teachers_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275listener("click", function Teachers_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTeacher());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function Teachers_Conditional_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55)(4, "h3");
    \u0275\u0275text(5, "Confirmar eliminaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 57);
    \u0275\u0275listener("click", function Teachers_Conditional_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTeacher());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 99)(11, "p", 100);
    \u0275\u0275text(12, "Esta acci\xF3n no se puede deshacer.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 101)(14, "button", 102);
    \u0275\u0275listener("click", function Teachers_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTeacher());
    });
    \u0275\u0275text(15, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 103);
    \u0275\u0275listener("click", function Teachers_Conditional_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteTeacher());
    });
    \u0275\u0275text(17, "Eliminar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("\xBFSeguro que deseas eliminar al profesor ", ctx_r1.teacherToDelete.name, " ", ctx_r1.teacherToDelete.surname, "?");
  }
}
function Teachers_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 107);
    \u0275\u0275element(1, "path", 113);
    \u0275\u0275elementEnd();
  }
}
function Teachers_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 108);
    \u0275\u0275element(1, "path", 114);
    \u0275\u0275elementEnd();
  }
}
function Teachers_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function Teachers_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNotification = false);
    });
    \u0275\u0275elementStart(1, "div", 105);
    \u0275\u0275listener("click", function Teachers_Conditional_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 106);
    \u0275\u0275conditionalCreate(3, Teachers_Conditional_10_Conditional_3_Template, 2, 0, ":svg:svg", 107);
    \u0275\u0275conditionalCreate(4, Teachers_Conditional_10_Conditional_4_Template, 2, 0, ":svg:svg", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 109)(6, "div", 110);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 111);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 112);
    \u0275\u0275listener("click", function Teachers_Conditional_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNotification = false);
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("notification-success", ctx_r1.notificationType === "success")("notification-error", ctx_r1.notificationType === "error");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.notificationType === "success" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notificationType === "error" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notificationType === "success" ? "\xA1\xC9xito!" : "\xA1Error!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.notificationMessage);
  }
}
function Teachers_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 115);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando...");
    \u0275\u0275elementEnd()();
  }
}
var Teachers = class _Teachers {
  http;
  teachers = [];
  allSubjects = [];
  filteredSubjects = [];
  loading = true;
  saving = false;
  savingEditTeacher = false;
  selectedLevel = "";
  selectedSubjectIds = [];
  searchTerm = "";
  showAddModal = false;
  showConfirmDelete = false;
  teacherToDelete = null;
  formName = "";
  formSurname = "";
  formEmail = "";
  formUsername = "";
  formPassword = "";
  formConfirmPassword = "";
  showPassword = false;
  showConfirmPassword = false;
  showEditModal = false;
  teacherToEdit = null;
  editTeacherForm = {
    name: "",
    surname: "",
    username: "",
    email: "",
    newPassword: ""
  };
  selectedTeacherForAssignment = null;
  showNotification = false;
  notificationType = null;
  notificationMessage = "";
  // Inline form field errors
  formEmailError = null;
  formUsernameError = null;
  formModalError = null;
  formPasswordError = null;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadTeachers();
    this.loadSubjects();
  }
  loadTeachers() {
    this.loading = true;
    this.http.get("http://localhost:8080/api/teachers").subscribe({
      next: (data) => {
        this.teachers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load teachers", err);
        this.loading = false;
      }
    });
  }
  loadSubjects() {
    this.http.get("http://localhost:8080/api/subjects").subscribe({
      next: (data) => {
        this.allSubjects = data;
        console.log("[Teachers] Materias cargadas:", data.length, data);
      },
      error: (err) => {
        console.error("[Teachers] Failed to load subjects", err);
        this.allSubjects = [];
      }
    });
  }
  onLevelChange(level) {
    this.selectedLevel = level;
    if (level === "Primaria") {
      this.filteredSubjects = this.allSubjects.filter((s) => (s.level || "").toLowerCase() === "primaria");
    } else if (level === "Bachillerato") {
      this.filteredSubjects = this.allSubjects.filter((s) => (s.level || "").toLowerCase() === "bachillerato");
    } else {
      this.filteredSubjects = [];
    }
  }
  toggleSubjectSelection(subjectId) {
    const idx = this.selectedSubjectIds.indexOf(subjectId);
    if (idx >= 0) {
      this.selectedSubjectIds.splice(idx, 1);
    } else {
      this.selectedSubjectIds.push(subjectId);
    }
  }
  removeSelectedSubject(subjectId) {
    const idx = this.selectedSubjectIds.indexOf(subjectId);
    if (idx >= 0) {
      this.selectedSubjectIds.splice(idx, 1);
    }
  }
  getSelectedSubjects() {
    return this.allSubjects.filter((s) => this.selectedSubjectIds.includes(s.id));
  }
  openAddModal() {
    this.formName = "";
    this.formSurname = "";
    this.formEmail = "";
    this.formUsername = "";
    this.formPassword = "";
    this.formConfirmPassword = "";
    this.selectedLevel = "";
    this.selectedSubjectIds = [];
    this.filteredSubjects = [];
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.formEmailError = null;
    this.formUsernameError = null;
    this.formModalError = null;
    this.formPasswordError = null;
    this.showAddModal = true;
  }
  closeAddModal() {
    this.showAddModal = false;
    this.formPasswordError = null;
    this.formEmailError = null;
    this.formUsernameError = null;
    this.formModalError = null;
  }
  openEditTeacher(teacher) {
    this.teacherToEdit = teacher;
    this.editTeacherForm = {
      name: teacher.name,
      surname: teacher.surname,
      username: teacher.username || "",
      email: teacher.email,
      newPassword: ""
    };
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.teacherToEdit = null;
    this.savingEditTeacher = false;
    this.editTeacherForm = { name: "", surname: "", username: "", email: "", newPassword: "" };
  }
  saveTeacherEdit() {
    if (!this.teacherToEdit)
      return;
    const name = this.editTeacherForm.name.trim();
    const surname = this.editTeacherForm.surname.trim();
    const username = this.editTeacherForm.username.trim();
    const email = this.editTeacherForm.email.trim();
    const newPassword = this.editTeacherForm.newPassword.trim();
    if (!name || !surname || !username || !email) {
      this.showError("Completa nombre, apellido, usuario y correo");
      return;
    }
    if (newPassword && newPassword.length < 6) {
      this.showError("La contrase\xF1a debe tener al menos 6 caracteres");
      return;
    }
    this.savingEditTeacher = true;
    const updatedUser = {
      name,
      surname,
      username,
      email,
      enable: this.teacherToEdit.enable !== false
    };
    this.http.put(`http://localhost:8080/api/users/${this.teacherToEdit.id}`, updatedUser).subscribe({
      next: () => {
        const finishEdit = () => {
          this.showSuccess("Profesor actualizado correctamente");
          this.closeEditModal();
          this.loadTeachers();
        };
        if (newPassword) {
          this.http.post(`http://localhost:8080/api/users/${this.teacherToEdit.id}/password/reset`, { newPassword }).subscribe({
            next: finishEdit,
            error: (err) => {
              console.error("Failed to update teacher password", err);
              this.showError("Perfil actualizado, pero no se pudo cambiar la contrase\xF1a");
              this.closeEditModal();
              this.loadTeachers();
            }
          });
        } else {
          finishEdit();
        }
      },
      error: (err) => {
        console.error("Failed to update teacher", err);
        this.showError(err?.error?.error || err?.message || "No se pudo actualizar el profesor");
        this.savingEditTeacher = false;
      }
    });
  }
  selectTeacherForAssignment(teacher) {
    this.selectedTeacherForAssignment = teacher;
    const assignedSubjects = this.getTeacherSubjectObjects(teacher);
    if (assignedSubjects.length > 0) {
      this.saveTeacherGradeRange(teacher);
    } else {
      this.clearPersistedTeacherGradeRange();
    }
  }
  clearTeacherSelection() {
    this.selectedTeacherForAssignment = null;
  }
  assignSubjectToSelectedTeacher(subject) {
    if (!this.selectedTeacherForAssignment)
      return;
    const teacherId = this.selectedTeacherForAssignment.id;
    if (subject.teacherId && subject.teacherId !== teacherId) {
      return;
    }
    this.http.put(`http://localhost:8080/api/subjects/${subject.id}/teacher/${teacherId}`, {}).subscribe({
      next: () => {
        subject.teacherId = teacherId;
        subject.teacher = teacherId;
        this.updateSubjectAssignment(subject, teacherId);
        this.showSuccess(`Materia ${subject.name} asignada a ${this.selectedTeacherForAssignment?.name} ${this.selectedTeacherForAssignment?.surname}`);
        this.loadSubjects();
        this.loadTeachers();
        this.clearTeacherSelection();
      },
      error: (err) => {
        console.error("Error al asignar materia", err);
        this.showError("No se pudo asignar la materia. Intenta nuevamente.");
      }
    });
  }
  updateSubjectAssignment(subject, teacherId) {
    const savedGradeMin = subject.gradeMin;
    const savedGradeMax = subject.gradeMax;
    const assignment = {
      subjectId: subject.id,
      teacherId,
      subjectName: subject.name,
      level: subject.level,
      gradeMin: savedGradeMin,
      gradeMax: savedGradeMax,
      assignedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    localStorage.setItem(`teacher_assignment_${teacherId}_${subject.id}`, JSON.stringify(assignment));
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
  getSubjectLevelClass(subject) {
    return (subject.level || "").toLowerCase() === "primaria" ? "subject-chip-primaria" : "subject-chip-bachillerato";
  }
  getProfilePictureUrl(teacher) {
    const profilePicture = (teacher.profilePicture || "").trim();
    if (!profilePicture)
      return "";
    if (profilePicture.startsWith("http://") || profilePicture.startsWith("https://")) {
      return profilePicture;
    }
    return `http://localhost:8080${profilePicture.startsWith("/") ? profilePicture : `/${profilePicture}`}`;
  }
  getTeacherFullName(teacher) {
    return `${teacher.name} ${teacher.surname}`;
  }
  getTeacherSubjectObjects(teacher) {
    return this.allSubjects.filter((s) => s.teacherId === teacher.id || s.teacher === teacher.id);
  }
  saveTeacherGradeRange(teacher) {
    const assignedSubjects = this.getTeacherSubjectObjects(teacher).filter((s) => s.gradeMin != null && s.gradeMax != null);
    if (assignedSubjects.length === 0) {
      this.clearPersistedTeacherGradeRange();
      return;
    }
    const minGrade = Math.min(...assignedSubjects.map((s) => s.gradeMin));
    const maxGrade = Math.max(...assignedSubjects.map((s) => s.gradeMax));
    localStorage.setItem("selectedTeacherGradeRange", JSON.stringify({ min: minGrade, max: maxGrade }));
  }
  clearPersistedTeacherGradeRange() {
    localStorage.removeItem("selectedTeacherGradeRange");
  }
  getTeacherSubjects(teacher) {
    return this.getTeacherSubjectObjects(teacher).map((s) => `${s.name} (${this.getSubjectAcronym(s)})`);
  }
  unassignSubject(subject, teacher) {
    this.http.delete(`http://localhost:8080/api/subjects/${subject.id}/teacher`).subscribe({
      next: () => {
        subject.teacherId = null;
        subject.teacher = null;
        const remaining = this.getTeacherSubjectObjects(teacher);
        if (remaining.length > 0) {
          this.saveTeacherGradeRange(teacher);
        } else {
          this.clearPersistedTeacherGradeRange();
        }
        this.showSuccess(`Materia ${subject.name} desasignada de ${teacher.name} ${teacher.surname}`);
        this.loadSubjects();
        this.loadTeachers();
      },
      error: (err) => {
        console.error("Error al quitar materia", err);
        this.showError("No se pudo quitar la materia. Intenta de nuevo.");
      }
    });
  }
  createTeacher() {
    this.saving = true;
    const name = this.formName.trim();
    const surname = this.formSurname.trim();
    const email = this.formEmail.trim();
    const username = this.formUsername.trim();
    const password = this.formPassword;
    const confirmPassword = this.formConfirmPassword;
    if (!name || !surname || !email || !password) {
      this.showError("Por favor completa los campos obligatorios (nombre, apellido, correo y contrase\xF1a)");
      this.saving = false;
      return;
    }
    if (password !== confirmPassword) {
      this.formPasswordError = "La contrase\xF1a no coincide";
      setTimeout(() => {
        const el = document.getElementById("teacherConfirmPassword");
        if (el)
          el.focus();
      }, 0);
      this.saving = false;
      return;
    }
    if (password.length < 6) {
      this.showError("La contrase\xF1a debe tener al menos 6 caracteres");
      this.saving = false;
      return;
    }
    const payload = {
      name,
      surname,
      email,
      username,
      password,
      subjectCodes: this.selectedSubjectIds.map((id) => id.toString())
    };
    this.formEmailError = null;
    this.formUsernameError = null;
    this.http.post("http://localhost:8080/api/teachers", payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.closeAddModal();
        this.formPasswordError = null;
        this.formEmailError = null;
        this.formUsernameError = null;
        this.formModalError = null;
        this.showSuccess("Profesor y materias asignadas creados correctamente");
        this.loadTeachers();
      },
      error: (err) => {
        console.error("Failed to create teacher", err);
        this.saving = false;
        let backendMsg = err.error?.error || err.error?.message || err.message || "Error al crear el profesor";
        if (typeof backendMsg === "string") {
          const lower = backendMsg.toLowerCase();
          if (lower.includes("email already in use") || lower.includes("email already")) {
            backendMsg = "El correo ya est\xE1 en uso";
            this.formEmailError = backendMsg;
            setTimeout(() => {
              const el = document.getElementById("teacherEmail");
              if (el)
                el.focus();
            }, 0);
          } else if (lower.includes("username already in use") || lower.includes("username already")) {
            backendMsg = "El nombre de usuario ya est\xE1 en uso";
            this.formUsernameError = backendMsg;
            setTimeout(() => {
              const el = document.getElementById("teacherUsername");
              if (el)
                el.focus();
            }, 0);
          }
        }
        if (!this.formEmailError && !this.formUsernameError) {
          this.formModalError = backendMsg;
          setTimeout(() => this.formModalError = null, 5e3);
        }
      }
    });
  }
  deleteTeacher(teacher) {
    this.teacherToDelete = teacher;
    this.showConfirmDelete = true;
  }
  confirmDeleteTeacher() {
    if (!this.teacherToDelete) {
      this.showConfirmDelete = false;
      return;
    }
    const teacherId = this.teacherToDelete.id;
    const teacherName = `${this.teacherToDelete.name} ${this.teacherToDelete.surname}`;
    this.http.delete(`http://localhost:8080/api/teachers/${teacherId}`).subscribe({
      next: () => {
        this.teachers = this.teachers.filter((t) => t.id !== teacherId);
        this.showSuccess(`Profesor ${teacherName} eliminado correctamente`);
        this.showConfirmDelete = false;
        this.teacherToDelete = null;
      },
      error: (err) => {
        const backendMsg = err?.error?.error || err?.error?.message || err?.message || "Error al eliminar el profesor";
        console.error("[DELETE teacher error]", err);
        this.showError(backendMsg);
        this.showConfirmDelete = false;
        this.teacherToDelete = null;
      }
    });
  }
  cancelDeleteTeacher() {
    this.showConfirmDelete = false;
    this.teacherToDelete = null;
  }
  toggleStatus(teacher) {
    const updated = __spreadProps(__spreadValues({}, teacher), { enable: !teacher.enable });
    this.http.put(`http://localhost:8080/api/users/${teacher.id}`, updated).subscribe({
      next: () => {
        teacher.enable = updated.enable;
        this.showSuccess(updated.enable ? "Profesor activado" : "Profesor desactivado");
      },
      error: () => this.showError("Error al actualizar el estado")
    });
  }
  getFilteredTeachers() {
    const term = this.searchTerm.toLowerCase();
    const filtered = term ? this.teachers.filter((t) => t.name.toLowerCase().includes(term) || t.surname.toLowerCase().includes(term) || t.email.toLowerCase().includes(term) || t.username && t.username.toLowerCase().includes(term)) : this.teachers;
    return [...filtered].sort((a, b) => {
      const aHasSubject = this.getTeacherSubjectObjects(a).length > 0;
      const bHasSubject = this.getTeacherSubjectObjects(b).length > 0;
      if (aHasSubject !== bHasSubject) {
        return aHasSubject ? 1 : -1;
      }
      return `${a.name} ${a.surname}`.localeCompare(`${b.name} ${b.surname}`, "es");
    });
  }
  get totalTeachers() {
    return this.teachers.length;
  }
  get activeTeachers() {
    return this.teachers.filter((t) => t.enable !== false).length;
  }
  get primarySubjects() {
    return this.allSubjects.filter((s) => (s.level || "").toLowerCase() === "primaria");
  }
  get highSchoolSubjects() {
    return this.allSubjects.filter((s) => (s.level || "").toLowerCase() === "bachillerato");
  }
  showSuccess(message) {
    this.notificationType = "success";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => this.showNotification = false, 3500);
  }
  showError(message) {
    this.notificationType = "error";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => this.showNotification = false, 4e3);
  }
  static \u0275fac = function Teachers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Teachers)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Teachers, selectors: [["app-teachers"]], decls: 12, vars: 6, consts: [["teacherForm", "ngForm"], ["editTeacherForm", "ngForm"], [1, "teachers-container"], [1, "teachers-header"], [1, "add-teacher-button", 3, "click"], [1, "modal-overlay"], [1, "notification-overlay"], [1, "loading"], [1, "search-bar"], [1, "material-icons", "search-icon"], ["type", "text", "id", "teacher-search", "name", "teacherSearch", "placeholder", "Buscar profesor...", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "two-columns"], [1, "column"], [1, "teachers-list"], [1, "teacher-item", 3, "teacher-selected"], [1, "empty-state"], [1, "assignment-hint"], [1, "subjects-list"], [1, "materia-columna"], [1, "columna-header", "bachillerato"], [1, "icono"], [1, "columna-body"], [1, "subject-item", 3, "clickable", "assigned", "disabled"], [1, "empty-text"], [1, "columna-header", "primaria"], [1, "teacher-item", 3, "click"], [1, "teacher-item-actions"], ["type", "button", "title", "Editar profesor", 1, "icon-action-button", "edit-icon-button", 3, "click"], ["type", "button", "title", "Eliminar profesor", 1, "icon-action-button", "delete-icon-button", 3, "click"], [1, "teacher-info"], [1, "teacher-photo", 3, "src", "alt"], [1, "teacher-avatar"], [1, "teacher-details"], [1, "teacher-name-row"], [1, "teacher-name"], [1, "teacher-email"], [1, "teacher-username"], [1, "assigned-subjects"], [1, "assigned-subjects-label"], [1, "teacher-subject-chips"], [1, "empty-subjects"], [1, "subject-chip", 3, "ngClass", "title"], [1, "subject-chip", 3, "click", "ngClass", "title"], [1, "empty-icon"], ["type", "button", 1, "cancel-btn", "small", 3, "click"], [1, "subject-item", 3, "click"], [1, "subject-main"], [1, "subject-name"], [1, "subject-code-pill", 3, "ngClass"], [1, "subject-meta"], [1, "subject-badge", "bachillerato"], [1, "subject-range"], [1, "subject-badge", "primaria"], [1, "modal-content", "large-modal", 3, "click"], [1, "modal-header"], [1, "modal-header-text"], [1, "modal-subtitle"], [1, "close-button", 3, "click"], [1, "modal-body"], [1, "modal-form-error"], ["autocomplete", "off", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "teacherName"], ["type", "text", "id", "teacherName", "name", "name", "required", "", "placeholder", "Ingrese el nombre", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "teacherSurname"], ["type", "text", "id", "teacherSurname", "name", "surname", "required", "", "placeholder", "Ingrese el apellido", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "teacherEmail"], ["type", "email", "id", "teacherEmail", "name", "email", "required", "", "placeholder", "correo@colegiotrinitario.edu.co", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "ngModel", "ngClass"], [1, "field-error"], ["for", "teacherUsername"], ["type", "text", "id", "teacherUsername", "name", "username", "placeholder", "usuario.profesor", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "ngModel", "ngClass"], [1, "password-section"], ["for", "teacherPassword"], [1, "input-group"], [1, "material-icons", "input-icon"], ["id", "teacherPassword", "name", "password", "required", "", "minlength", "6", "placeholder", "Ingrese su contrase\xF1a", "autocomplete", "new-password", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "material-icons"], ["for", "teacherConfirmPassword"], ["id", "teacherConfirmPassword", "name", "confirmPassword", "required", "", "placeholder", "Confirma tu contrase\xF1a", "autocomplete", "new-password", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], [1, "field-error", "animated-error"], [1, "security-note"], [1, "modal-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "confirm-btn", 3, "disabled"], ["for", "editTeacherName"], ["type", "text", "id", "editTeacherName", "name", "editName", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editTeacherSurname"], ["type", "text", "id", "editTeacherSurname", "name", "editSurname", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editTeacherUsername"], ["type", "text", "id", "editTeacherUsername", "name", "editUsername", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "editTeacherEmail"], ["type", "email", "id", "editTeacherEmail", "name", "editEmail", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["for", "editTeacherPassword"], ["type", "password", "id", "editTeacherPassword", "name", "editPassword", "placeholder", "Dejar vac\xEDo para mantener la contrase\xF1a actual", "autocomplete", "new-password", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "cancel-btn", 3, "click", "disabled"], [1, "modal-overlay", 3, "click"], [1, "modal-body", "confirm-modal-body"], [1, "confirm-message"], [1, "modal-actions", "confirm-actions"], ["type", "button", 1, "cancel-btn", "secondary", 3, "click"], ["type", "button", 1, "confirm-btn", "danger", 3, "click"], [1, "notification-overlay", 3, "click"], [1, "notification-content", 3, "click"], [1, "notification-icon"], ["viewBox", "0 0 52 52", 1, "checkmark"], ["viewBox", "0 0 52 52", 1, "error-mark"], [1, "notification-body"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"], ["fill", "none", "d", "m14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], ["fill", "none", "d", "M16 16l20 20M36 16L16 36", 1, "error-mark__x"], [1, "spinner"]], template: function Teachers_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2");
      \u0275\u0275text(3, "Gesti\xF3n de Profesores y Materias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function Teachers_Template_button_click_4_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275text(5, " \u2795 Agregar Profesor ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, Teachers_Conditional_6_Template, 37, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, Teachers_Conditional_7_Template, 69, 24, "div", 5);
      \u0275\u0275conditionalCreate(8, Teachers_Conditional_8_Template, 44, 8, "div", 5);
      \u0275\u0275conditionalCreate(9, Teachers_Conditional_9_Template, 18, 2, "div", 5);
      \u0275\u0275conditionalCreate(10, Teachers_Conditional_10_Template, 12, 8, "div", 6);
      \u0275\u0275conditionalCreate(11, Teachers_Conditional_11_Template, 4, 0, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.loading ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddModal ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEditModal && ctx.teacherToEdit ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showConfirmDelete && ctx.teacherToDelete ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showNotification ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 11 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ["\n\n.teachers-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  min-height: calc(100vh - 4rem);\n}\n.teachers-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n}\n.teachers-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.two-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: var(--sp-4);\n}\n.column[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.column[_ngcontent-%COMP%]:first-child {\n  padding: var(--sp-5);\n}\n.column[_ngcontent-%COMP%]:last-child {\n  padding: var(--sp-4);\n}\n.column[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-4);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n  position: relative;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  font-size: 0.9rem;\n  color: var(--text-1);\n  outline: none;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1.1rem;\n  color: var(--text-4);\n  pointer-events: none;\n}\n.teachers-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--sp-3);\n}\n.teacher-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 2rem 0.85rem 0.85rem;\n  gap: var(--sp-3);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-xs);\n  cursor: pointer;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.teacher-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-100);\n  box-shadow: var(--shadow-sm);\n}\n.teacher-item.teacher-selected[_ngcontent-%COMP%] {\n  border-color: var(--brand);\n  background: var(--brand-50);\n}\n.teacher-item-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.55rem;\n  right: 0.55rem;\n  display: flex;\n  gap: var(--sp-2);\n  z-index: 2;\n}\n.icon-action-button[_ngcontent-%COMP%] {\n  width: 1.65rem;\n  height: 1.65rem;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  background: var(--surface-2);\n  color: var(--text-2);\n  font-size: 1rem;\n  line-height: 1;\n  font-weight: 800;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    transform 0.15s ease;\n}\n.icon-action-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.edit-icon-button[_ngcontent-%COMP%] {\n  border-color: var(--brand-100);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.edit-icon-button[_ngcontent-%COMP%]:hover {\n  background: var(--brand-100);\n  color: var(--brand-600);\n}\n.delete-icon-button[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #f3c4c4;\n}\n.delete-icon-button[_ngcontent-%COMP%]:hover {\n  background: #fbd5d5;\n  color: #b91c1c;\n}\n.teacher-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--sp-2);\n  min-width: 0;\n}\n.teacher-avatar[_ngcontent-%COMP%], \n.teacher-photo[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.teacher-avatar[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n.teacher-photo[_ngcontent-%COMP%] {\n  border: 2px solid var(--brand-100);\n  background: var(--brand-50);\n}\n.teacher-item.teacher-selected[_ngcontent-%COMP%]   .teacher-photo[_ngcontent-%COMP%] {\n  border-color: var(--brand);\n}\n.teacher-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 0;\n}\n.teacher-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 0.4rem;\n  margin-bottom: 0.3rem;\n}\n.teacher-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-1);\n  font-size: 0.9rem;\n  line-height: 1.25;\n}\n.teacher-email[_ngcontent-%COMP%], \n.teacher-username[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-3);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.assigned-subjects[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n}\n.assigned-subjects-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.teacher-subject-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.35rem;\n  width: 100%;\n}\n.subject-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 100%;\n  min-width: 0;\n  padding: 0.18rem 0.45rem;\n  border-radius: var(--r-pill);\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n  font-size: 0.7rem;\n  font-weight: 700;\n  cursor: pointer;\n  overflow-wrap: anywhere;\n  transition:\n    transform 0.15s ease,\n    background-color 0.18s ease,\n    border-color 0.18s ease;\n}\n.subject-chip[_ngcontent-%COMP%]:hover {\n  background: var(--brand-100);\n  transform: translateY(-1px);\n}\n.subject-chip[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.subject-chip.subject-chip-primaria[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: #bfe6cc;\n}\n.subject-chip.subject-chip-bachillerato[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand);\n  border-color: var(--brand-100);\n}\n.empty-subjects[_ngcontent-%COMP%] {\n  color: var(--text-4);\n  font-size: 0.82rem;\n}\n.assignment-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: 0.85rem 1rem;\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  color: var(--brand-600);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.assignment-hint[_ngcontent-%COMP%]   button.small[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.8rem;\n}\n.subjects-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--sp-3);\n}\n.materia-columna[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  box-shadow: var(--shadow-xs);\n  display: flex;\n  flex-direction: column;\n}\n.columna-header[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.columna-header.primaria[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.columna-header.bachillerato[_ngcontent-%COMP%] {\n  background: var(--brand);\n}\n.columna-header[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.columna-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #fff;\n  font-weight: 700;\n}\n.columna-body[_ngcontent-%COMP%] {\n  padding: 0.8rem 0.9rem 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.5rem;\n}\n.columna-body[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.subject-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.75rem 0.85rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  transition:\n    border-color 0.18s ease,\n    transform 0.15s ease,\n    background-color 0.18s ease;\n}\n.subject-item.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.subject-item.clickable[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  transform: translateY(-1px);\n}\n.subject-item.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.subject-item.assigned[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border-color: var(--brand-100);\n}\n.subject-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.subject-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-1);\n  font-size: 0.88rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.subject-code-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  max-width: 80px;\n  padding: 0.25rem 0.55rem;\n  color: var(--brand);\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  border-radius: var(--r-pill);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.subject-code-pill.subject-chip-primaria[_ngcontent-%COMP%] {\n  color: var(--success);\n  background: var(--success-bg);\n  border-color: #bfe6cc;\n}\n.subject-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n  white-space: nowrap;\n  min-width: 0;\n}\n.subject-range[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.subject-item[_ngcontent-%COMP%]:hover   .subject-range[_ngcontent-%COMP%] {\n  color: var(--brand);\n}\n.subject-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: var(--r-pill);\n  font-size: 0.68rem;\n  font-weight: 700;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.subject-badge.primaria[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid #bfe6cc;\n}\n.subject-badge.bachillerato[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  padding: var(--sp-6);\n  text-align: center;\n  color: var(--text-4);\n  grid-column: 1 / -1;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-2);\n  font-size: 0.9rem;\n}\n.add-teacher-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.65rem 1.3rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.add-teacher-button[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.add-teacher-button[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.add-teacher-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-content.large-modal[_ngcontent-%COMP%] {\n  width: min(100%, 760px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.25s ease-out;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  width: min(100%, 440px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-lg);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-4);\n  padding: var(--sp-5);\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\n.modal-header-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-3);\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.close-button[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 50%;\n  font-size: 1.05rem;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n.close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--sp-5);\n  background: var(--surface);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-4);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.form-input.input-error[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-group[_ngcontent-%COMP%]:focus-within   .input-icon[_ngcontent-%COMP%] {\n  color: var(--brand);\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-4);\n  font-size: 20px;\n  z-index: 1;\n  pointer-events: none;\n  transition: color 0.18s ease;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    + .input-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.input-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-left: 2.75rem;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: var(--r-sm);\n  transition: background-color 0.18s ease, color 0.18s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n  color: var(--brand);\n}\n.password-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(0.94);\n}\n.password-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.password-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n  padding: var(--sp-5);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.password-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-4);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.security-note[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--sp-3);\n  color: var(--text-3);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.modal-form-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  border: 1px solid #f3c4c4;\n  color: var(--danger);\n  padding: 0.85rem 1rem;\n  border-radius: var(--r-sm);\n  margin-bottom: var(--sp-4);\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_popIn 0.3s ease;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n  margin-top: 0.3rem;\n  font-size: 0.82rem;\n}\n.animated-error[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: translateY(-6px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(-6px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  60% {\n    transform: translateX(-4px);\n  }\n  80% {\n    transform: translateX(4px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: 0 0 var(--r-md) var(--r-md);\n}\n.modal-actions.confirm-actions[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 0.65rem 1.3rem;\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.cancel-btn.secondary[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n.cancel-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.7rem 1.35rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.15s ease;\n  font-size: 0.9rem;\n}\n.confirm-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.confirm-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.confirm-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.confirm-btn.danger[_ngcontent-%COMP%] {\n  background: var(--danger);\n  border-color: var(--danger);\n}\n.confirm-btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.confirm-modal-body[_ngcontent-%COMP%] {\n  padding-top: var(--sp-2);\n}\n.confirm-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-2);\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.notification-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 5px solid var(--success);\n  border-radius: var(--r-md);\n  padding: var(--sp-5) var(--sp-6);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  max-width: 480px;\n  width: 90%;\n  position: relative;\n  animation: _ngcontent-%COMP%_notificationSlideIn 0.25s ease-out;\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-left-color: var(--success);\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-left-color: var(--danger);\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--success);\n}\n.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.checkmark[_ngcontent-%COMP%], \n.error-mark[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.checkmark__check[_ngcontent-%COMP%], \n.error-mark__x[_ngcontent-%COMP%] {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_checkmarkStroke 0.6s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #14532d;\n}\n.notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--sp-3);\n  right: var(--sp-3);\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 50%;\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@keyframes _ngcontent-%COMP%_notificationSlideIn {\n  from {\n    transform: translateY(-20px) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 900;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-4);\n  padding: var(--sp-8);\n  color: var(--text-3);\n  background: rgba(247, 249, 252, 0.92);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid var(--border);\n  border-top-color: var(--brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1180px) {\n  .teachers-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .two-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .subjects-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .teachers-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .column[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .teachers-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .columna-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-content.large-modal[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .teachers-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .assignment-hint[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=teachers.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Teachers, [{
    type: Component,
    args: [{ selector: "app-teachers", imports: [CommonModule, FormsModule], template: `<div class="teachers-container">
  <div class="teachers-header">
    <h2>Gesti\xF3n de Profesores y Materias</h2>
    <button class="add-teacher-button" (click)="openAddModal()">
      \u2795 Agregar Profesor
    </button>
  </div>

  @if (!loading) {
    <div class="search-bar">
      <span class="material-icons search-icon">search</span>
      <input type="text" id="teacher-search" name="teacherSearch" [(ngModel)]="searchTerm" placeholder="Buscar profesor..." autocomplete="off" />
    </div>

    <div class="two-columns">
      <div class="column">
        <h3>Profesores</h3>
        <div class="teachers-list">
          @for (teacher of getFilteredTeachers(); track teacher.id) {
            <div class="teacher-item" [class.teacher-selected]="selectedTeacherForAssignment?.id === teacher.id" (click)="selectTeacherForAssignment(teacher)">
              <div class="teacher-item-actions">
                <button type="button" class="icon-action-button edit-icon-button" (click)="openEditTeacher(teacher); $event.stopPropagation()" title="Editar profesor">\u270E</button>
                <button type="button" class="icon-action-button delete-icon-button" (click)="deleteTeacher(teacher); $event.stopPropagation()" title="Eliminar profesor">\xD7</button>
              </div>
              <div class="teacher-info">
                @if (getProfilePictureUrl(teacher)) {
                  <img class="teacher-photo" [src]="getProfilePictureUrl(teacher)" [alt]="getTeacherFullName(teacher)" />
                } @else {
                  <div class="teacher-avatar">{{ teacher.name.charAt(0) }}{{ teacher.surname.charAt(0) }}</div>
                }
                <div class="teacher-details">
                  <div class="teacher-name-row">
                    <strong class="teacher-name">{{ teacher.name }} {{ teacher.surname }}</strong>
                  </div>
                  <span class="teacher-email">{{ teacher.email }}</span>
                  <span class="teacher-username">{{ teacher.username || 'Sin usuario' }}</span>
                  <div class="assigned-subjects">
                    <span class="assigned-subjects-label">Materias asignadas</span>
                    @if (getTeacherSubjectObjects(teacher).length > 0) {
                      <div class="teacher-subject-chips">
                        @for (subject of getTeacherSubjectObjects(teacher); track subject.id) {
                          <span class="subject-chip" [ngClass]="getSubjectLevelClass(subject)" [title]="subject.name" (click)="unassignSubject(subject, teacher); $event.stopPropagation()">
                            {{ getSubjectAcronym(subject) }}
                          </span>
                        }
                      </div>
                    } @else {
                      <span class="empty-subjects">Sin materias asignadas</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
          @if (teachers.length === 0) {
            <div class="empty-state">
              <span class="empty-icon">\u{1F4ED}</span>
              <p class="empty-text">No hay profesores registrados</p>
              <small>Agrega el primer profesor con el boton superior</small>
            </div>
          }
        </div>
      </div>

      <div class="column">
        <h3>Materias</h3>
        @if (selectedTeacherForAssignment) {
          <div class="assignment-hint">
            Profesor seleccionado: <strong>{{ selectedTeacherForAssignment.name }} {{ selectedTeacherForAssignment.surname }}</strong>. Haz clic en una materia para asignarla.
            <button type="button" class="cancel-btn small" (click)="clearTeacherSelection()">Cancelar</button>
          </div>
        }
        <div class="subjects-list">
          <div class="materia-columna">
            <div class="columna-header bachillerato">
              <span class="icono">\u{1F393}</span>
              <h4>Bachillerato</h4>
            </div>
            <div class="columna-body">
              @for (subject of highSchoolSubjects; track subject.id) {
                <div class="subject-item"
                  [class.clickable]="selectedTeacherForAssignment && !(subject.teacherId || subject.teacher)"
                  [class.assigned]="(subject.teacherId || subject.teacher) === selectedTeacherForAssignment?.id"
                  [class.disabled]="(subject.teacherId || subject.teacher) && (subject.teacherId || subject.teacher) !== selectedTeacherForAssignment?.id"
                  (click)="selectedTeacherForAssignment && !(subject.teacherId || subject.teacher) && assignSubjectToSelectedTeacher(subject)">
                  <div class="subject-main">
                    <span class="subject-name">{{ subject.name }}</span>
                    <span class="subject-code-pill" [ngClass]="getSubjectLevelClass(subject)">{{ getSubjectAcronym(subject) }}</span>
                  </div>
                  <div class="subject-meta">
                    <span class="subject-badge bachillerato">Bachillerato</span>
                    @if (subject.gradeMin != null && subject.gradeMax != null) {
                      <span class="subject-range">Grados {{ subject.gradeMin }}-{{ subject.gradeMax }}</span>
                    }
                  </div>
                </div>
              }
              @if (highSchoolSubjects.length === 0) {
                <p class="empty-text">Sin materias de bachillerato</p>
              }
            </div>
          </div>
          <div class="materia-columna">
            <div class="columna-header primaria">
              <span class="icono">\u{1F392}</span>
              <h4>Primaria</h4>
            </div>
            <div class="columna-body">
              @for (subject of primarySubjects; track subject.id) {
                <div class="subject-item"
                  [class.clickable]="selectedTeacherForAssignment && !(subject.teacherId || subject.teacher)"
                  [class.assigned]="(subject.teacherId || subject.teacher) === selectedTeacherForAssignment?.id"
                  [class.disabled]="(subject.teacherId || subject.teacher) && (subject.teacherId || subject.teacher) !== selectedTeacherForAssignment?.id"
                  (click)="selectedTeacherForAssignment && !(subject.teacherId || subject.teacher) && assignSubjectToSelectedTeacher(subject)">
                  <div class="subject-main">
                    <span class="subject-name">{{ subject.name }}</span>
                    <span class="subject-code-pill" [ngClass]="getSubjectLevelClass(subject)">{{ getSubjectAcronym(subject) }}</span>
                  </div>
                  <div class="subject-meta">
                    <span class="subject-badge primaria">Primaria</span>
                    @if (subject.gradeMin != null && subject.gradeMax != null) {
                      <span class="subject-range">Grados {{ subject.gradeMin }}-{{ subject.gradeMax }}</span>
                    }
                  </div>
                </div>
              }
              @if (primarySubjects.length === 0) {
                <p class="empty-text">Sin materias de primaria</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</div>

@if (showAddModal) {
  <div class="modal-overlay">
    <div class="modal-content large-modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-header-text">
          <h3>Agregar Nuevo Profesor</h3>
          <p class="modal-subtitle">Completa los datos del docente y asigna las materias con estilo profesional.</p>
        </div>
        <button class="close-button" (click)="closeAddModal()">\u2715</button>
      </div>
      <div class="modal-body">
        @if (formModalError) {
          <div class="modal-form-error">{{ formModalError }}</div>
        }
        <form autocomplete="off" #teacherForm="ngForm" (ngSubmit)="createTeacher()">
          <div class="form-row">
            <div class="form-group">
              <label for="teacherName">Nombre *</label>
              <input type="text" id="teacherName" name="name" [(ngModel)]="formName" required placeholder="Ingrese el nombre" autocomplete="off" class="form-input" />
            </div>
            <div class="form-group">
              <label for="teacherSurname">Apellido *</label>
              <input type="text" id="teacherSurname" name="surname" [(ngModel)]="formSurname" required placeholder="Ingrese el apellido" autocomplete="off" class="form-input" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="teacherEmail">Correo *</label>
              <input type="email" id="teacherEmail" name="email" [(ngModel)]="formEmail" required placeholder="correo@colegiotrinitario.edu.co" autocomplete="off" class="form-input" [ngClass]="{ 'input-error': formEmailError }" />
              @if (formEmailError) {
                <div class="field-error">{{ formEmailError }}</div>
              }
            </div>
            <div class="form-group">
              <label for="teacherUsername">Usuario</label>
              <input type="text" id="teacherUsername" name="username" [(ngModel)]="formUsername" placeholder="usuario.profesor" autocomplete="off" class="form-input" [ngClass]="{ 'input-error': formUsernameError }" />
              @if (formUsernameError) {
                <div class="field-error">{{ formUsernameError }}</div>
              }
              <small>Si se deja vac\xEDo, se usar\xE1 el correo antes del @</small>
            </div>
          </div>

          <div class="password-section">
            <h4>Credenciales de acceso</h4>
            <div class="form-row">
              <div class="form-group">
                <label for="teacherPassword">Contrase\xF1a *</label>
                <div class="input-group">
                  <span class="material-icons input-icon">lock</span>
                  <input [type]="showPassword ? 'text' : 'password'" id="teacherPassword" name="password" [(ngModel)]="formPassword" required minlength="6" placeholder="Ingrese su contrase\xF1a" autocomplete="new-password" class="form-input" />
                  <button type="button" class="password-toggle" (click)="showPassword = !showPassword" [attr.title]="showPassword ? 'Ocultar contrase\xF1a' : 'Mostrar contrase\xF1a'">
                    <span class="material-icons">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label for="teacherConfirmPassword">Confirmar Contrase\xF1a *</label>
                <div class="input-group">
                  <span class="material-icons input-icon">lock</span>
                  <input [type]="showConfirmPassword ? 'text' : 'password'" id="teacherConfirmPassword" name="confirmPassword" [(ngModel)]="formConfirmPassword" required placeholder="Confirma tu contrase\xF1a" autocomplete="new-password" class="form-input" />
                  <button type="button" class="password-toggle" (click)="showConfirmPassword = !showConfirmPassword" [attr.title]="showConfirmPassword ? 'Ocultar contrase\xF1a' : 'Mostrar contrase\xF1a'">
                    <span class="material-icons">{{ showConfirmPassword ? 'visibility_off' : 'visibility' }}</span>
                  </button>
                </div>
                @if (formPasswordError) {
                  <div class="field-error animated-error">{{ formPasswordError }}</div>
                }
              </div>
            </div>
            <small class="security-note">La contrase\xF1a ser\xE1 cifrada antes de guardarse.</small>
          </div>

          <div class="modal-actions">
            <button type="button" class="cancel-btn" (click)="closeAddModal()">Cancelar</button>
            <button type="submit" class="confirm-btn" [disabled]="saving">
              @if (saving) { Guardando... } @else { Guardar Profesor }
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

@if (showEditModal && teacherToEdit) {
  <div class="modal-overlay">
    <div class="modal-content large-modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-header-text">
          <h3>Editar Profesor</h3>
          <p class="modal-subtitle">Actualiza usuario, correo y contrase\xF1a del docente.</p>
        </div>
        <button class="close-button" (click)="closeEditModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <form autocomplete="off" #editTeacherForm="ngForm" (ngSubmit)="saveTeacherEdit()">
          <div class="form-row">
            <div class="form-group">
              <label for="editTeacherName">Nombre *</label>
              <input type="text" id="editTeacherName" name="editName" [(ngModel)]="editTeacherForm.name" required class="form-input" />
            </div>
            <div class="form-group">
              <label for="editTeacherSurname">Apellido *</label>
              <input type="text" id="editTeacherSurname" name="editSurname" [(ngModel)]="editTeacherForm.surname" required class="form-input" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="editTeacherUsername">Usuario *</label>
              <input type="text" id="editTeacherUsername" name="editUsername" [(ngModel)]="editTeacherForm.username" required class="form-input" />
            </div>
            <div class="form-group">
              <label for="editTeacherEmail">Correo *</label>
              <input type="email" id="editTeacherEmail" name="editEmail" [(ngModel)]="editTeacherForm.email" required class="form-input" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group full-width">
              <label for="editTeacherPassword">Nueva contrase\xF1a</label>
              <input type="password" id="editTeacherPassword" name="editPassword" [(ngModel)]="editTeacherForm.newPassword" placeholder="Dejar vac\xEDo para mantener la contrase\xF1a actual" autocomplete="new-password" class="form-input" />
              <small>La contrase\xF1a debe tener al menos 6 caracteres si decides cambiarla.</small>
            </div>
          </div>

          <div class="modal-actions">
            <button type="button" class="cancel-btn" (click)="closeEditModal()" [disabled]="savingEditTeacher">Cancelar</button>
            <button type="submit" class="confirm-btn" [disabled]="savingEditTeacher">
              @if (savingEditTeacher) { Guardando... } @else { Guardar Cambios }
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

@if (showConfirmDelete && teacherToDelete) {
  <div class="modal-overlay" (click)="cancelDeleteTeacher()">
    <div class="modal-content large-modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-header-text">
          <h3>Confirmar eliminaci\xF3n</h3>
          <p class="modal-subtitle">\xBFSeguro que deseas eliminar al profesor {{ teacherToDelete.name }} {{ teacherToDelete.surname }}?</p>
        </div>
        <button class="close-button" (click)="cancelDeleteTeacher()">\u2715</button>
      </div>
      <div class="modal-body confirm-modal-body">
        <p class="confirm-message">Esta acci\xF3n no se puede deshacer.</p>
        <div class="modal-actions confirm-actions">
          <button type="button" class="cancel-btn secondary" (click)="cancelDeleteTeacher()">Cancelar</button>
          <button type="button" class="confirm-btn danger" (click)="confirmDeleteTeacher()">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
}

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

@if (loading) {
  <div class="loading">
    <div class="spinner"></div>
    <p>Cargando...</p>
  </div>
}`, styles: ["/* src/app/teachers/teachers.css */\n.teachers-container {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  min-height: calc(100vh - 4rem);\n}\n.teachers-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n}\n.teachers-header h2 {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.two-columns {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: var(--sp-4);\n}\n.column {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.column:first-child {\n  padding: var(--sp-5);\n}\n.column:last-child {\n  padding: var(--sp-4);\n}\n.column > h3 {\n  margin: 0 0 var(--sp-4);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.search-bar {\n  margin-bottom: var(--sp-4);\n  position: relative;\n}\n.search-bar input {\n  width: 100%;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  font-size: 0.9rem;\n  color: var(--text-1);\n  outline: none;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.search-bar input:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1.1rem;\n  color: var(--text-4);\n  pointer-events: none;\n}\n.teachers-list {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--sp-3);\n}\n.teacher-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 2rem 0.85rem 0.85rem;\n  gap: var(--sp-3);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-xs);\n  cursor: pointer;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.teacher-item:hover {\n  border-color: var(--brand-100);\n  box-shadow: var(--shadow-sm);\n}\n.teacher-item.teacher-selected {\n  border-color: var(--brand);\n  background: var(--brand-50);\n}\n.teacher-item-actions {\n  position: absolute;\n  top: 0.55rem;\n  right: 0.55rem;\n  display: flex;\n  gap: var(--sp-2);\n  z-index: 2;\n}\n.icon-action-button {\n  width: 1.65rem;\n  height: 1.65rem;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  background: var(--surface-2);\n  color: var(--text-2);\n  font-size: 1rem;\n  line-height: 1;\n  font-weight: 800;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    transform 0.15s ease;\n}\n.icon-action-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.edit-icon-button {\n  border-color: var(--brand-100);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.edit-icon-button:hover {\n  background: var(--brand-100);\n  color: var(--brand-600);\n}\n.delete-icon-button {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #f3c4c4;\n}\n.delete-icon-button:hover {\n  background: #fbd5d5;\n  color: #b91c1c;\n}\n.teacher-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--sp-2);\n  min-width: 0;\n}\n.teacher-avatar,\n.teacher-photo {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.teacher-avatar {\n  background: var(--brand);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n.teacher-photo {\n  border: 2px solid var(--brand-100);\n  background: var(--brand-50);\n}\n.teacher-item.teacher-selected .teacher-photo {\n  border-color: var(--brand);\n}\n.teacher-details {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 0;\n}\n.teacher-name-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 0.4rem;\n  margin-bottom: 0.3rem;\n}\n.teacher-name {\n  font-weight: 600;\n  color: var(--text-1);\n  font-size: 0.9rem;\n  line-height: 1.25;\n}\n.teacher-email,\n.teacher-username {\n  font-size: 0.78rem;\n  color: var(--text-3);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.assigned-subjects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n}\n.assigned-subjects-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.teacher-subject-chips {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.35rem;\n  width: 100%;\n}\n.subject-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 100%;\n  min-width: 0;\n  padding: 0.18rem 0.45rem;\n  border-radius: var(--r-pill);\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n  font-size: 0.7rem;\n  font-weight: 700;\n  cursor: pointer;\n  overflow-wrap: anywhere;\n  transition:\n    transform 0.15s ease,\n    background-color 0.18s ease,\n    border-color 0.18s ease;\n}\n.subject-chip:hover {\n  background: var(--brand-100);\n  transform: translateY(-1px);\n}\n.subject-chip:active {\n  transform: translateY(0);\n}\n.subject-chip.subject-chip-primaria {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: #bfe6cc;\n}\n.subject-chip.subject-chip-bachillerato {\n  background: var(--brand-50);\n  color: var(--brand);\n  border-color: var(--brand-100);\n}\n.empty-subjects {\n  color: var(--text-4);\n  font-size: 0.82rem;\n}\n.assignment-hint {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: 0.85rem 1rem;\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  color: var(--brand-600);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.assignment-hint button.small {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.8rem;\n}\n.subjects-list {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--sp-3);\n}\n.materia-columna {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  box-shadow: var(--shadow-xs);\n  display: flex;\n  flex-direction: column;\n}\n.columna-header {\n  padding: 0.9rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.columna-header.primaria {\n  background: var(--success);\n}\n.columna-header.bachillerato {\n  background: var(--brand);\n}\n.columna-header .icono {\n  font-size: 1.3rem;\n}\n.columna-header h4 {\n  margin: 0;\n  font-size: 1rem;\n  color: #fff;\n  font-weight: 700;\n}\n.columna-body {\n  padding: 0.8rem 0.9rem 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.5rem;\n}\n.columna-body .empty-text {\n  grid-column: 1 / -1;\n}\n.subject-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.75rem 0.85rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  transition:\n    border-color 0.18s ease,\n    transform 0.15s ease,\n    background-color 0.18s ease;\n}\n.subject-item.clickable {\n  cursor: pointer;\n}\n.subject-item.clickable:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  transform: translateY(-1px);\n}\n.subject-item.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.subject-item.assigned {\n  background: var(--brand-50);\n  border-color: var(--brand-100);\n}\n.subject-main {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.subject-name {\n  font-weight: 700;\n  color: var(--text-1);\n  font-size: 0.88rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.subject-code-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  max-width: 80px;\n  padding: 0.25rem 0.55rem;\n  color: var(--brand);\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  border-radius: var(--r-pill);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.subject-code-pill.subject-chip-primaria {\n  color: var(--success);\n  background: var(--success-bg);\n  border-color: #bfe6cc;\n}\n.subject-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n  white-space: nowrap;\n  min-width: 0;\n}\n.subject-range {\n  color: var(--text-2);\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.subject-item:hover .subject-range {\n  color: var(--brand);\n}\n.subject-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.6rem;\n  border-radius: var(--r-pill);\n  font-size: 0.68rem;\n  font-weight: 700;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.subject-badge.primaria {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid #bfe6cc;\n}\n.subject-badge.bachillerato {\n  background: var(--brand-50);\n  color: var(--brand);\n  border: 1px solid var(--brand-100);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  padding: var(--sp-6);\n  text-align: center;\n  color: var(--text-4);\n  grid-column: 1 / -1;\n}\n.empty-icon {\n  font-size: 2.2rem;\n}\n.empty-text {\n  font-weight: 500;\n  color: var(--text-2);\n  font-size: 0.9rem;\n}\n.add-teacher-button {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.65rem 1.3rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.add-teacher-button:hover {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.add-teacher-button:active {\n  transform: translateY(1px);\n}\n.add-teacher-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-content.large-modal {\n  width: min(100%, 760px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  animation: modalSlideIn 0.25s ease-out;\n}\n.confirm-modal {\n  width: min(100%, 440px);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-lg);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-4);\n  padding: var(--sp-5);\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\n.modal-header-text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.modal-subtitle {\n  margin: 0;\n  color: var(--text-3);\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.close-button {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 50%;\n  font-size: 1.05rem;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n.close-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body {\n  margin: 0;\n  padding: var(--sp-5);\n  background: var(--surface);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.form-group label {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-2);\n}\n.form-group.full-width {\n  grid-column: 1 / -1;\n}\n.form-input {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n}\n.form-input::placeholder {\n  color: var(--text-4);\n}\n.form-input:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.form-input.input-error {\n  border-color: var(--danger);\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-group:focus-within .input-icon {\n  color: var(--brand);\n}\n.input-group {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-4);\n  font-size: 20px;\n  z-index: 1;\n  pointer-events: none;\n  transition: color 0.18s ease;\n}\n.form-group label + .input-group .form-input,\n.input-group .form-input {\n  padding-left: 2.75rem;\n}\n.password-toggle {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: var(--r-sm);\n  transition: background-color 0.18s ease, color 0.18s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.password-toggle:hover {\n  background: var(--brand-50);\n  color: var(--brand);\n}\n.password-toggle:active {\n  transform: translateY(-50%) scale(0.94);\n}\n.password-toggle .material-icons {\n  font-size: 20px;\n}\n.password-section {\n  margin-bottom: var(--sp-4);\n  padding: var(--sp-5);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.password-section h4 {\n  margin: 0 0 var(--sp-4);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.security-note {\n  display: block;\n  margin-top: var(--sp-3);\n  color: var(--text-3);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.modal-form-error {\n  background: var(--danger-bg);\n  border: 1px solid #f3c4c4;\n  color: var(--danger);\n  padding: 0.85rem 1rem;\n  border-radius: var(--r-sm);\n  margin-bottom: var(--sp-4);\n  font-weight: 600;\n  animation: popIn 0.3s ease;\n}\n.field-error {\n  color: var(--danger);\n  font-weight: 600;\n  margin-top: 0.3rem;\n  font-size: 0.82rem;\n}\n.animated-error {\n  animation: shake 0.4s ease;\n}\n@keyframes popIn {\n  from {\n    transform: translateY(-6px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(-6px);\n  }\n  40% {\n    transform: translateX(6px);\n  }\n  60% {\n    transform: translateX(-4px);\n  }\n  80% {\n    transform: translateX(4px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: 0 0 var(--r-md) var(--r-md);\n}\n.modal-actions.confirm-actions {\n  border-radius: 0;\n}\n.cancel-btn {\n  padding: 0.65rem 1.3rem;\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-btn:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.cancel-btn.secondary {\n  background: var(--surface-2);\n}\n.cancel-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.confirm-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.7rem 1.35rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.15s ease;\n  font-size: 0.9rem;\n}\n.confirm-btn:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.confirm-btn:active {\n  transform: translateY(1px);\n}\n.confirm-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.confirm-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.confirm-btn.danger {\n  background: var(--danger);\n  border-color: var(--danger);\n}\n.confirm-btn.danger:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.confirm-modal-body {\n  padding-top: var(--sp-2);\n}\n.confirm-message {\n  margin: 0;\n  color: var(--text-2);\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.notification-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  animation: fadeIn 0.2s ease-out;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.notification-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 5px solid var(--success);\n  border-radius: var(--r-md);\n  padding: var(--sp-5) var(--sp-6);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  max-width: 480px;\n  width: 90%;\n  position: relative;\n  animation: notificationSlideIn 0.25s ease-out;\n}\n.notification-success {\n  border-left-color: var(--success);\n}\n.notification-error {\n  border-left-color: var(--danger);\n}\n.notification-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--success);\n}\n.notification-error .notification-icon {\n  background: var(--danger);\n}\n.checkmark,\n.error-mark {\n  width: 28px;\n  height: 28px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.checkmark__check,\n.error-mark__x {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: checkmarkStroke 0.6s ease forwards;\n}\n@keyframes checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.notification-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success .notification-title {\n  color: #14532d;\n}\n.notification-error .notification-title {\n  color: #7f1d1d;\n}\n.notification-message {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close {\n  position: absolute;\n  top: var(--sp-3);\n  right: var(--sp-3);\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 50%;\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@keyframes notificationSlideIn {\n  from {\n    transform: translateY(-20px) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.loading {\n  position: fixed;\n  inset: 0;\n  z-index: 900;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-4);\n  padding: var(--sp-8);\n  color: var(--text-3);\n  background: rgba(247, 249, 252, 0.92);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.spinner {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid var(--border);\n  border-top-color: var(--brand);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1180px) {\n  .teachers-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .two-columns {\n    grid-template-columns: 1fr;\n  }\n  .subjects-list {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .teachers-container {\n    padding: var(--sp-4);\n  }\n  .column {\n    padding: var(--sp-4);\n  }\n  .teachers-list {\n    grid-template-columns: 1fr;\n  }\n  .columna-body {\n    grid-template-columns: 1fr;\n  }\n  .modal-content.large-modal {\n    width: 100%;\n    max-width: 100%;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .cancel-btn,\n  .confirm-btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .teachers-header h2 {\n    font-size: 1.3rem;\n  }\n  .assignment-hint {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=teachers.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Teachers, { className: "Teachers", filePath: "app/teachers/teachers.ts", lineNumber: 38 });
})();
export {
  Teachers
};
//# sourceMappingURL=chunk-FU7Z6DQV.js.map
