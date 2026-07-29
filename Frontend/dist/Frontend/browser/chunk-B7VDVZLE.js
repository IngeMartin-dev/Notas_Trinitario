import {
  AuthService
} from "./chunk-UNKQMH5O.js";
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
  CommonModule,
  Component,
  HttpClient,
  NgIf,
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
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/parents/parents.ts
var _forTrack0 = ($index, $item) => $item.id;
function Parents_For_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function Parents_For_7_For_5_Template_button_click_0_listener() {
      const classroom_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const grade_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectGradeAndClassroom(grade_r3, classroom_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classroom_r2 = ctx.$implicit;
    const grade_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.selectedGrade === grade_r3 && ctx_r3.selectedClassroom === classroom_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classroom_r2, " ");
  }
}
function Parents_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, Parents_For_7_For_5_Template, 2, 3, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grade_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grade_r3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.classrooms);
  }
}
function Parents_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3, "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Selecciona un grado y sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Elige un grado y sal\xF3n de la lista superior para ver los estudiantes y padres de familia.");
    \u0275\u0275elementEnd()()();
  }
}
function Parents_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando datos...");
    \u0275\u0275elementEnd()();
  }
}
function Parents_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Estudiante: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedStudent == null ? null : ctx_r3.selectedStudent.surname, " ", ctx_r3.selectedStudent == null ? null : ctx_r3.selectedStudent.name);
  }
}
function Parents_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function Parents_Conditional_11_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearSelection());
    });
    \u0275\u0275text(1, "Cancelar selecci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 36);
    \u0275\u0275text(2, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "No hay padres de familia en este sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, 'A\xFAn no se han creado padres de familia para este grado y sal\xF3n. Puedes crearlos con el bot\xF3n "+ A\xF1adir Padre de Familia".');
    \u0275\u0275elementEnd()()();
  }
}
function Parents_Conditional_11_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 37);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay estudiantes en este sal\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function Parents_Conditional_11_For_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function Parents_Conditional_11_For_25_Conditional_9_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const student_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.unassignParent(student_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd()();
  }
}
function Parents_Conditional_11_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function Parents_Conditional_11_For_25_Template_div_click_0_listener() {
      const student_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectStudent(student_r8));
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 40);
    \u0275\u0275elementStart(4, "div", 41)(5, "div", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, Parents_Conditional_11_For_25_Conditional_9_Template, 3, 0, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("person-selected", (ctx_r3.selectedStudent == null ? null : ctx_r3.selectedStudent.id) === student_r8.id)("assigned", student_r8.hasParent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", student_r8.surname.charAt(0), "", student_r8.name.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("status-green", student_r8.hasParent)("status-red", !student_r8.hasParent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", student_r8.surname, " ", student_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r8.documentNumber || "Sin documento");
    \u0275\u0275advance();
    \u0275\u0275conditional(student_r8.hasParent ? 9 : -1);
  }
}
function Parents_Conditional_11_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 37);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay padres de familia en este sal\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function Parents_Conditional_11_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function Parents_Conditional_11_For_38_Template_div_click_0_listener() {
      const parent_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectParent(parent_r11));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 40);
    \u0275\u0275elementStart(5, "div", 49)(6, "div", 50)(7, "div", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 52)(12, "button", 53);
    \u0275\u0275listener("click", function Parents_Conditional_11_For_38_Template_button_click_12_listener($event) {
      const parent_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.startEditParent(parent_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(13, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 54);
    \u0275\u0275listener("click", function Parents_Conditional_11_For_38_Template_button_click_14_listener($event) {
      const parent_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.deleteParent(parent_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(15, "\u2715");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const parent_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-linked", parent_r11.hasStudent)("unlinked-card", !parent_r11.hasStudent)("linked-card", parent_r11.hasStudent)("not-selectable", parent_r11.hasStudent || ctx_r3.selectedStudent === null)("person-selected", (ctx_r3.selectedParent == null ? null : ctx_r3.selectedParent.id) === parent_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("unlinked-avatar", !parent_r11.hasStudent)("linked-avatar", parent_r11.hasStudent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", parent_r11.surname.charAt(0), "", parent_r11.name.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("status-green", parent_r11.hasStudent)("status-amber", !parent_r11.hasStudent);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", parent_r11.surname, " ", parent_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(parent_r11.email || "Sin correo");
  }
}
function Parents_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Instrucciones:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Selecciona un estudiante de la lista izquierda y luego un padre de la lista derecha para vincularlos. ");
    \u0275\u0275conditionalCreate(6, Parents_Conditional_11_Conditional_6_Template, 4, 2, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19)(8, "button", 20);
    \u0275\u0275listener("click", function Parents_Conditional_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openCreateParentModal());
    });
    \u0275\u0275text(9, "+ A\xF1adir Padre de Familia");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Parents_Conditional_11_Conditional_10_Template, 2, 0, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Parents_Conditional_11_Conditional_11_Template, 8, 0, "div", 22);
    \u0275\u0275elementStart(12, "div", 23)(13, "div", 24)(14, "div", 25)(15, "h3", 26);
    \u0275\u0275text(16, "Estudiantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27)(18, "span", 28);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, Parents_Conditional_11_Conditional_22_Template, 5, 0, "div", 30);
    \u0275\u0275elementStart(23, "div", 31);
    \u0275\u0275repeaterCreate(24, Parents_Conditional_11_For_25_Template, 10, 14, "div", 32, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 33)(27, "div", 25)(28, "h3", 26);
    \u0275\u0275text(29, "Padres de Familia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27)(31, "span", 28);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 29);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, Parents_Conditional_11_Conditional_35_Template, 5, 0, "div", 30);
    \u0275\u0275elementStart(36, "div", 31);
    \u0275\u0275repeaterCreate(37, Parents_Conditional_11_For_38_Template, 16, 23, "div", 34, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", ctx_r3.selectedStudent === null && ctx_r3.selectedParent === null);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.selectedStudent !== null ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.selectedStudent !== null ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.allParents.length === 0 ? 11 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u{1F393} ", ctx_r3.totalStudentsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Disponibles ", ctx_r3.availableStudentsCount);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.allStudents.length === 0 ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.allStudents);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u{1F465} ", ctx_r3.allParents.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Disponibles ", ctx_r3.availableParentsCount);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.allParents.length === 0 ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.allParents);
  }
}
function Parents_Conditional_12_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardar cambios");
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_12_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function Parents_Conditional_12_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.closeEditModal();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function Parents_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div", 58)(4, "h3");
    \u0275\u0275text(5, "Editar padre de familia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Actualiza la informaci\xF3n de ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 59);
    \u0275\u0275listener("click", function Parents_Conditional_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditModal());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "div", 61)(14, "label", 62);
    \u0275\u0275text(15, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_12_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editParentForm.name, $event) || (ctx_r3.editParentForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 61)(18, "label", 64);
    \u0275\u0275text(19, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_12_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editParentForm.surname, $event) || (ctx_r3.editParentForm.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 61)(22, "label", 66);
    \u0275\u0275text(23, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_12_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editParentForm.email, $event) || (ctx_r3.editParentForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 61)(26, "label", 68);
    \u0275\u0275text(27, "Nueva Contrase\xF1a (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_12_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editParentForm.newPassword, $event) || (ctx_r3.editParentForm.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 70)(30, "button", 71);
    \u0275\u0275listener("click", function Parents_Conditional_12_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditModal());
    });
    \u0275\u0275text(31, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 72);
    \u0275\u0275listener("click", function Parents_Conditional_12_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveParentEdit(ctx_r3.editingParent));
    });
    \u0275\u0275template(33, Parents_Conditional_12_span_33_Template, 2, 0, "span", 73)(34, Parents_Conditional_12_span_34_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r3.editingParent == null ? null : ctx_r3.editingParent.surname, " ", ctx_r3.editingParent == null ? null : ctx_r3.editingParent.name);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editParentForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editParentForm.surname);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editParentForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editParentForm.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.parentSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.parentSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.parentSaving);
  }
}
function Parents_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function Parents_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteConfirm());
    });
    \u0275\u0275elementStart(1, "div", 74);
    \u0275\u0275listener("click", function Parents_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 75)(3, "h3");
    \u0275\u0275text(4, "Confirmar eliminaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function Parents_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteConfirm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "p", 78);
    \u0275\u0275text(9, " \xBFEst\xE1s seguro de eliminar al padre de familia ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 79)(14, "button", 80);
    \u0275\u0275listener("click", function Parents_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteConfirm());
    });
    \u0275\u0275text(15, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 81);
    \u0275\u0275listener("click", function Parents_Conditional_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(17, "Eliminar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r3.parentToDelete.surname, " ", ctx_r3.parentToDelete.name);
  }
}
function Parents_Conditional_14_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grade_r15 = ctx.$implicit;
    \u0275\u0275property("value", grade_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(grade_r15);
  }
}
function Parents_Conditional_14_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classroom_r16 = ctx.$implicit;
    \u0275\u0275property("value", classroom_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classroom_r16);
  }
}
function Parents_Conditional_14_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Crear padre");
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_14_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Creando...");
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function Parents_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreateParentModal());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function Parents_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div", 58)(4, "h3");
    \u0275\u0275text(5, "Nuevo Padre de Familia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Crear un nuevo usuario como padre de familia");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 59);
    \u0275\u0275listener("click", function Parents_Conditional_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreateParentModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "div", 61)(12, "label", 82);
    \u0275\u0275text(13, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_14_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newParentForm.name, $event) || (ctx_r3.newParentForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61)(16, "label", 84);
    \u0275\u0275text(17, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_14_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newParentForm.surname, $event) || (ctx_r3.newParentForm.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 61)(20, "label", 86);
    \u0275\u0275text(21, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newParentForm.email, $event) || (ctx_r3.newParentForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 61)(24, "label", 88);
    \u0275\u0275text(25, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_14_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newParentForm.password, $event) || (ctx_r3.newParentForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 61)(28, "label", 90);
    \u0275\u0275text(29, "Grado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_14_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newParentForm.grade, $event) || (ctx_r3.newParentForm.grade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(31, "option", 92);
    \u0275\u0275text(32, "Selecciona un grado");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(33, Parents_Conditional_14_For_34_Template, 2, 2, "option", 93, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 61)(36, "label", 94);
    \u0275\u0275text(37, "Sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function Parents_Conditional_14_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newParentForm.classGroup, $event) || (ctx_r3.newParentForm.classGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 92);
    \u0275\u0275text(40, "Selecciona un sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, Parents_Conditional_14_For_42_Template, 2, 2, "option", 93, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 70)(44, "button", 71);
    \u0275\u0275listener("click", function Parents_Conditional_14_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreateParentModal());
    });
    \u0275\u0275text(45, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 72);
    \u0275\u0275listener("click", function Parents_Conditional_14_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createParent());
    });
    \u0275\u0275template(47, Parents_Conditional_14_span_47_Template, 2, 0, "span", 73)(48, Parents_Conditional_14_span_48_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newParentForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newParentForm.surname);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newParentForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newParentForm.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newParentForm.grade);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.allGrades);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newParentForm.classGroup);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.classrooms);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.creatingParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.creatingParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.creatingParent);
  }
}
function Parents_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 99);
    \u0275\u0275element(1, "path", 105);
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 100);
    \u0275\u0275element(1, "path", 106);
    \u0275\u0275elementEnd();
  }
}
function Parents_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275listener("click", function Parents_Conditional_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hideNotification());
    });
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275listener("click", function Parents_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 98);
    \u0275\u0275conditionalCreate(3, Parents_Conditional_15_Conditional_3_Template, 2, 0, ":svg:svg", 99);
    \u0275\u0275conditionalCreate(4, Parents_Conditional_15_Conditional_4_Template, 2, 0, ":svg:svg", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 101)(6, "div", 102);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 103);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 104);
    \u0275\u0275listener("click", function Parents_Conditional_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hideNotification());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("notification-success", ctx_r3.notificationType === "success")("notification-error", ctx_r3.notificationType === "error");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.notificationType === "success" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.notificationType === "error" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.notificationType === "success" ? "\xA1Exito!" : "\xA1Error!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.notificationMessage);
  }
}
var Parents = class _Parents {
  http;
  authService;
  allGrades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  classrooms = ["Salon A", "Salon B"];
  selectedGrade = null;
  selectedClassroom = null;
  allStudents = [];
  allParents = [];
  unlinkedParents = [];
  linkedParents = [];
  selectedStudent = null;
  selectedParent = null;
  editingParent = null;
  showEditParentModal = false;
  editParentForm = {
    name: "",
    email: "",
    surname: "",
    newPassword: ""
  };
  parentSaving = false;
  isLoading = false;
  showNotification = false;
  notificationType = null;
  notificationMessage = "";
  showDeleteConfirm = false;
  parentToDelete = null;
  showCreateParentModal = false;
  creatingParent = false;
  newParentForm = {
    name: "",
    surname: "",
    email: "",
    password: "",
    grade: "",
    classGroup: ""
  };
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  get totalStudentsCount() {
    return this.allStudents.length;
  }
  get availableStudentsCount() {
    return this.allStudents.filter((student) => !student.hasParent).length;
  }
  get linkedParentsCount() {
    return this.allParents.filter((parent) => parent.hasStudent).length;
  }
  get availableParentsCount() {
    return this.allParents.filter((parent) => !parent.hasStudent).length;
  }
  ngOnInit() {
  }
  selectGradeAndClassroom(grade, classroom) {
    if (this.selectedGrade === grade && this.selectedClassroom === classroom) {
      return;
    }
    this.selectedGrade = grade;
    this.selectedClassroom = classroom;
    this.selectedStudent = null;
    this.selectedParent = null;
    this.loadData();
  }
  loadData() {
    if (!this.selectedGrade || !this.selectedClassroom)
      return;
    this.isLoading = true;
    const params = { grade: this.selectedGrade };
    if (this.selectedClassroom) {
      params.classroom = this.selectedClassroom;
    }
    this.http.get("http://localhost:8080/api/parents/by-grade-classroom", { params }).subscribe({
      next: (response) => {
        console.log("[Parents] API response:", response);
        this.allStudents = (response.students || []).map((s) => ({
          id: s.id,
          name: s.name,
          surname: s.surname,
          documentNumber: s.documentNumber,
          grade: s.grade,
          classGroup: s.classGroup,
          hasParent: s.hasParent || false,
          parentId: s.parentId || null,
          parentName: s.parentName || null
        })).sort((a, b) => {
          if (a.hasParent !== b.hasParent)
            return a.hasParent ? 1 : -1;
          return (a.surname || "").toLowerCase().localeCompare((b.surname || "").toLowerCase(), "es");
        });
        const mappedParents = (response.parents || []).map((p) => ({
          id: p.id,
          name: p.name,
          surname: p.surname,
          username: p.username,
          email: p.email,
          hasStudent: p.hasStudent || false,
          assignedStudentId: p.assignedStudentId || null,
          assignedStudentName: p.assignedStudentName || null
        }));
        this.unlinkedParents = mappedParents.filter((p) => !p.hasStudent).sort((a, b) => (a.surname || "").toLowerCase().localeCompare((b.surname || "").toLowerCase(), "es"));
        this.linkedParents = mappedParents.filter((p) => p.hasStudent).sort((a, b) => (a.surname || "").toLowerCase().localeCompare((b.surname || "").toLowerCase(), "es"));
        this.allParents = [...this.unlinkedParents, ...this.linkedParents];
        console.log("[Parents] allParents count:", this.allParents.length);
        console.log("[Parents] linked:", this.linkedParents.length, "unlinked:", this.unlinkedParents.length);
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading parents data:", err);
        this.allStudents = [];
        this.allParents = [];
        this.isLoading = false;
        this.showErrorNotification("Error al cargar los datos de padres de familia");
      }
    });
  }
  selectStudent(student) {
    if (student.hasParent)
      return;
    this.selectedStudent = this.selectedStudent?.id === student.id ? null : student;
    this.selectedParent = null;
  }
  selectParent(parent) {
    if (this.selectedStudent === null) {
      this.showErrorNotification("Selecciona primero un estudiante");
      return;
    }
    if (parent.hasStudent)
      return;
    this.selectedParent = this.selectedParent?.id === parent.id ? null : parent;
    if (this.selectedStudent && this.selectedParent && this.selectedStudent?.id !== this.selectedParent?.assignedStudentId) {
      this.assignParentToStudent(this.selectedStudent, this.selectedParent);
    }
  }
  startEditParent(parent) {
    this.editingParent = parent;
    this.editParentForm = {
      name: parent.name || "",
      email: parent.email || "",
      surname: parent.surname || "",
      newPassword: ""
    };
    this.showEditParentModal = true;
  }
  saveParentEdit(parent) {
    this.parentSaving = true;
    const name = this.editParentForm.name.trim();
    const surname = this.editParentForm.surname.trim();
    const email = this.editParentForm.email.trim();
    const newPassword = this.editParentForm.newPassword.trim();
    const updatedUser = {
      name,
      surname,
      email,
      username: email,
      enable: true
    };
    this.http.put(`http://localhost:8080/api/users/${parent.id}`, updatedUser).subscribe({
      next: () => {
        if (newPassword) {
          this.http.post(`http://localhost:8080/api/users/${parent.id}/password/reset`, { newPassword }).subscribe({
            next: () => {
              this.showSuccessNotification("Padre de familia actualizado correctamente");
              this.closeEditModal();
              this.loadData();
            },
            error: (err) => {
              console.error("Failed to update password", err);
              this.showErrorNotification(err?.error?.error || err?.message || "Perfil actualizado, pero no se pudo cambiar la contrase\xF1a");
              this.closeEditModal();
              this.loadData();
              this.parentSaving = false;
            }
          });
        } else {
          this.showSuccessNotification("Padre de familia actualizado correctamente");
          this.closeEditModal();
          this.loadData();
        }
      },
      error: (err) => {
        console.error("Failed to update parent", err);
        this.showErrorNotification(err?.error?.error || err?.message || "No se pudo actualizar el padre de familia");
        this.parentSaving = false;
      }
    });
  }
  closeEditModal() {
    this.showEditParentModal = false;
    this.editingParent = null;
    this.editParentForm = { name: "", email: "", surname: "", newPassword: "" };
    this.parentSaving = false;
  }
  deleteParent(parent) {
    this.parentToDelete = parent;
    this.showDeleteConfirm = true;
  }
  confirmDelete() {
    if (!this.parentToDelete)
      return;
    const parentId = this.parentToDelete.id;
    this.showDeleteConfirm = false;
    this.http.delete(`http://localhost:8080/api/users/${parentId}`).subscribe({
      next: () => {
        this.showSuccessNotification("Padre de familia eliminado correctamente");
        this.loadData();
        this.parentToDelete = null;
      },
      error: (err) => {
        console.error("Delete parent failed", err);
        this.showErrorNotification(err?.error?.error || err?.message || "No se pudo eliminar el padre de familia");
        this.parentToDelete = null;
      }
    });
  }
  closeDeleteConfirm() {
    this.showDeleteConfirm = false;
    this.parentToDelete = null;
  }
  assignParentToStudent(student, parent) {
    this.http.post("http://localhost:8080/api/parents/assign", {
      studentId: student.id,
      parentId: parent.id
    }).subscribe({
      next: (response) => {
        this.showSuccessNotification("Padre de familia asignado correctamente");
        this.selectedStudent = null;
        this.selectedParent = null;
        this.loadData();
      },
      error: (err) => {
        console.error("Error assigning parent:", err);
        this.showErrorNotification("Error al asignar el padre de familia");
        this.selectedParent = null;
      }
    });
  }
  unassignParent(student) {
    if (!student.hasParent || !student.parentId)
      return;
    this.http.delete("http://localhost:8080/api/parents/unassign", {
      body: { studentId: student.id, parentId: student.parentId }
    }).subscribe({
      next: () => {
        this.showSuccessNotification("Asignacion removida correctamente");
        if (this.selectedStudent?.id === student.id) {
          this.selectedStudent = null;
        }
        this.loadData();
      },
      error: (err) => {
        console.error("Error unassigning parent:", err);
        this.showErrorNotification("Error al remover la asignacion");
      }
    });
  }
  clearSelection() {
    this.selectedStudent = null;
    this.selectedParent = null;
  }
  openCreateParentModal() {
    this.newParentForm = {
      name: "",
      surname: "",
      email: "",
      password: "",
      grade: this.selectedGrade || "",
      classGroup: this.selectedClassroom || ""
    };
    this.creatingParent = false;
    this.showCreateParentModal = true;
  }
  closeCreateParentModal() {
    this.showCreateParentModal = false;
    this.creatingParent = false;
  }
  createParent() {
    this.creatingParent = true;
    const name = this.newParentForm.name.trim();
    const surname = this.newParentForm.surname.trim();
    const email = this.newParentForm.email.trim();
    const password = this.newParentForm.password;
    if (!name || !surname || !email || !password) {
      this.showErrorNotification("Completa todos los campos");
      this.creatingParent = false;
      return;
    }
    if (name.length > 100) {
      this.showErrorNotification("El nombre no puede superar 100 caracteres");
      this.creatingParent = false;
      return;
    }
    if (surname.length > 100) {
      this.showErrorNotification("El apellido no puede superar 100 caracteres");
      this.creatingParent = false;
      return;
    }
    if (email.length > 200) {
      this.showErrorNotification("El correo no puede superar 200 caracteres");
      this.creatingParent = false;
      return;
    }
    if (password.length < 6 || password.length > 255) {
      this.showErrorNotification("La contrase\xF1a debe tener al menos 6 caracteres y no m\xE1s de 255 caracteres");
      this.creatingParent = false;
      return;
    }
    this.http.post("http://localhost:8080/api/parents", {
      name,
      surname,
      email,
      password,
      grade: this.newParentForm.grade,
      classroom: this.newParentForm.classGroup
    }).subscribe({
      next: (response) => {
        this.showSuccessNotification("Padre de familia creado correctamente");
        this.closeCreateParentModal();
        this.loadData();
      },
      error: (err) => {
        console.error("Failed to create parent", err);
        this.showErrorNotification(err?.error?.error || err?.message || "No se pudo crear el padre de familia");
        this.creatingParent = false;
      }
    });
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
  hideNotification() {
    this.showNotification = false;
  }
  static \u0275fac = function Parents_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Parents)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Parents, selectors: [["app-parents"]], decls: 16, vars: 7, consts: [[1, "parents-container"], [1, "parents-header"], [1, "grades-sidebar-like"], [1, "grades-row"], [1, "grade-section"], [1, "right-content"], [1, "parents-placeholder"], [1, "loading-indicator"], [1, "modal-overlay"], [1, "notification-overlay"], [1, "classrooms"], [1, "classroom-btn", 3, "selected"], [1, "classroom-btn", 3, "click"], [1, "placeholder-content"], [1, "placeholder-icon"], [1, "spinner"], [1, "selection-hint"], [1, "hint-icon"], [1, "hint-selected"], [1, "assign-section"], [1, "link-btn", "add-parent-btn", 3, "click"], [1, "link-btn", "cancel-btn"], [1, "no-assignments-banner"], [1, "parents-grid"], [1, "parents-column", "students-column"], [1, "column-header"], [1, "column-title"], [1, "column-badges"], [1, "column-badge", "has-parents"], [1, "column-badge"], [1, "empty-column"], [1, "people-list"], [1, "person-card", "student-card", 3, "person-selected", "assigned"], [1, "parents-column", "parents-column-content"], [1, "person-card", "parent-card", 3, "is-linked", "unlinked-card", "linked-card", "not-selectable", "person-selected"], [1, "link-btn", "cancel-btn", 3, "click"], [1, "no-assignments-icon"], [1, "empty-icon"], [1, "person-card", "student-card", 3, "click"], [1, "person-avatar", "student-avatar"], [1, "status-indicator"], [1, "person-info"], [1, "person-name"], [1, "person-detail"], [1, "corner-actions"], ["title", "Quitar padre de familia", 1, "icon-btn", "delete-btn", 3, "click"], [1, "person-card", "parent-card", 3, "click"], [1, "parent-card-top"], [1, "person-avatar", "parent-avatar"], [1, "parent-card-main"], [1, "parent-name-block"], [1, "person-detail", "parent-email"], [1, "corner-actions", "parent-card-actions"], ["title", "Editar padre de familia", 1, "icon-btn", "edit-btn", 3, "click"], ["title", "Eliminar padre de familia", 1, "icon-btn", "delete-btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "edit-modal", 3, "click"], [1, "edit-modal-header"], [1, "edit-modal-header-text"], [1, "edit-modal-close", 3, "click"], [1, "edit-modal-body"], [1, "form-group"], ["for", "edit-parent-name"], ["id", "edit-parent-name", "type", "text", "placeholder", "Nombre", 3, "ngModelChange", "ngModel"], ["for", "edit-parent-surname"], ["id", "edit-parent-surname", "type", "text", "placeholder", "Apellido", 3, "ngModelChange", "ngModel"], ["for", "edit-parent-email"], ["id", "edit-parent-email", "type", "email", "placeholder", "correo@ejemplo.com", 3, "ngModelChange", "ngModel"], ["for", "edit-parent-password"], ["id", "edit-parent-password", "type", "password", "placeholder", "Dejar vac\xEDo para mantener la actual", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], [1, "edit-modal-footer"], [1, "edit-modal-btn", "secondary", 3, "click"], [1, "edit-modal-btn", "primary", 3, "click", "disabled"], [4, "ngIf"], [1, "modal-content", "confirm-modal", 3, "click"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "modal-body"], [1, "confirm-message"], [1, "modal-actions"], [1, "cancel-button", 3, "click"], [1, "delete-confirm-button", 3, "click"], ["for", "new-parent-name"], ["id", "new-parent-name", "type", "text", "placeholder", "Nombre", 3, "ngModelChange", "ngModel"], ["for", "new-parent-surname"], ["id", "new-parent-surname", "type", "text", "placeholder", "Apellido", 3, "ngModelChange", "ngModel"], ["for", "new-parent-email"], ["id", "new-parent-email", "type", "email", "placeholder", "correo@ejemplo.com", 3, "ngModelChange", "ngModel"], ["for", "new-parent-password"], ["id", "new-parent-password", "type", "password", "placeholder", "M\xEDnimo 6 caracteres", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["for", "new-parent-grade"], ["id", "new-parent-grade", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "new-parent-classroom"], ["id", "new-parent-classroom", 3, "ngModelChange", "ngModel"], [1, "notification-overlay", 3, "click"], [1, "notification-content", 3, "click"], [1, "notification-icon"], ["viewBox", "0 0 52 52", 1, "checkmark"], ["viewBox", "0 0 52 52", 1, "error-mark"], [1, "notification-body"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"], ["fill", "none", "d", "m14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], ["fill", "none", "d", "M16 16l20 20M36 16L16 36", 1, "error-mark__x"]], template: function Parents_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Padres de Familia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275repeaterCreate(6, Parents_For_7_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275conditionalCreate(9, Parents_Conditional_9_Template, 8, 0, "div", 6);
      \u0275\u0275conditionalCreate(10, Parents_Conditional_10_Template, 4, 0, "div", 7);
      \u0275\u0275conditionalCreate(11, Parents_Conditional_11_Template, 39, 11);
      \u0275\u0275conditionalCreate(12, Parents_Conditional_12_Template, 35, 9, "div", 8);
      \u0275\u0275conditionalCreate(13, Parents_Conditional_13_Template, 18, 2, "div", 8);
      \u0275\u0275conditionalCreate(14, Parents_Conditional_14_Template, 49, 9, "div", 8);
      \u0275\u0275conditionalCreate(15, Parents_Conditional_15_Template, 12, 8, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.allGrades);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.selectedGrade || !ctx.selectedClassroom ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedGrade && ctx.selectedClassroom && ctx.isLoading ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedGrade && ctx.selectedClassroom && !ctx.isLoading ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEditParentModal ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showDeleteConfirm && ctx.parentToDelete ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCreateParentModal ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showNotification ? 15 : -1);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.parents-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  min-height: calc(100vh - 4rem);\n}\n.parents-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n}\n.parents-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.grades-sidebar-like[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.grades-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-4);\n  flex-wrap: nowrap;\n}\n.grade-section[_ngcontent-%COMP%] {\n  min-width: 150px;\n  flex: 1;\n  text-align: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4) var(--sp-3);\n}\n.grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-3);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.classrooms[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.classroom-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.9rem;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  font-size: 0.85rem;\n}\n.classroom-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.classroom-btn.selected[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.classroom-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.right-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n}\n.parents-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 320px;\n  color: var(--text-4);\n}\n.placeholder-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: var(--sp-4);\n}\n.placeholder-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-2);\n  font-size: 1.2rem;\n  color: var(--text-2);\n  font-weight: 700;\n}\n.placeholder-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-3);\n}\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-8);\n  color: var(--text-3);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border);\n  border-top: 4px solid var(--brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n  margin-bottom: var(--sp-4);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.selection-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: 0.85rem 1rem;\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  color: var(--brand-600);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.selection-hint.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.hint-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.hint-selected[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-weight: 600;\n}\n.assign-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 0.85rem;\n  cursor: pointer;\n  padding: 0.45rem 0.7rem;\n  border-radius: var(--r-sm);\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.add-parent-btn[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--brand);\n  color: var(--brand);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0.5rem 0.9rem;\n  border-radius: var(--r-sm);\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.add-parent-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n  border-color: var(--brand-600);\n  color: var(--brand-600);\n}\n.add-parent-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n  border-color: var(--text-3);\n}\n.no-assignments-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  border: 1px dashed var(--warning);\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.no-assignments-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1.25rem;\n}\n.no-assignments-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.no-assignments-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: #92400e;\n}\n.parents-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--sp-4);\n  align-items: start;\n}\n.parents-column[_ngcontent-%COMP%] {\n  min-width: 0;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4);\n  min-height: 420px;\n}\n.column-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n  padding-bottom: var(--sp-3);\n  border-bottom: 2px solid var(--border);\n}\n.column-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.column-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.column-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: var(--r-pill);\n  background: var(--surface);\n  color: var(--text-3);\n  font-size: 0.8rem;\n  font-weight: 700;\n  border: 1px solid var(--border);\n}\n.column-badge.has-parents[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: #bfe6cc;\n}\n.people-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  max-height: 560px;\n  overflow: auto;\n  padding-right: 0.25rem;\n}\n.empty-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: var(--sp-6) var(--sp-4);\n  min-height: 220px;\n  text-align: center;\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-md);\n  background: var(--surface);\n  color: var(--text-4);\n}\n.empty-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.empty-column[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.person-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-3);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.15s ease;\n  min-height: 72px;\n  position: relative;\n}\n.person-card[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n  transform: translateY(-1px);\n}\n.person-card.person-selected[_ngcontent-%COMP%] {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.12);\n}\n.person-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.person-avatar[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.student-avatar[_ngcontent-%COMP%] {\n  background: var(--brand);\n}\n.parent-avatar[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.linked-avatar[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.unlinked-avatar[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.person-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.person-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-1);\n  font-size: 0.9rem;\n  line-height: 1.3;\n}\n.person-detail[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  word-break: break-word;\n  line-height: 1.25;\n}\n.parent-email[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.82rem;\n  color: var(--text-2);\n  line-height: 1.35;\n  padding: 0.25rem 0.45rem;\n  border-radius: var(--r-sm);\n  background: var(--surface-2);\n  max-width: 100%;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid #fff;\n  box-shadow: var(--shadow-xs);\n}\n.status-green[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.status-red[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.status-amber[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.parent-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.parent-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--warning);\n}\n.parent-card.is-linked[_ngcontent-%COMP%]::before {\n  background: var(--success);\n}\n.parent-card.unlinked-card[_ngcontent-%COMP%] {\n  border-color: #f3dcb4;\n  background: var(--warning-bg);\n}\n.parent-card.linked-card[_ngcontent-%COMP%] {\n  border-color: #bfe6cc;\n  background: var(--success-bg);\n}\n.parent-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.9rem 0.95rem 0.85rem 1.15rem;\n}\n.parent-card-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding-right: 4.25rem;\n}\n.parent-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.parent-name-block[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.parent-card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  display: flex;\n  gap: 0.45rem;\n  z-index: 2;\n}\n.parent-footer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  max-width: 100%;\n  margin-top: 0.7rem;\n  padding: 0.4rem 0.6rem;\n  border-radius: var(--r-pill);\n  font-size: 0.76rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.linked-footer[_ngcontent-%COMP%] {\n  color: var(--success);\n  background: var(--success-bg);\n  border: 1px solid #bfe6cc;\n}\n.unlinked-footer[_ngcontent-%COMP%] {\n  color: var(--warning);\n  background: #fff7e8;\n  border: 1px solid #f3dcb4;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-dot-green[_ngcontent-%COMP%] {\n  background: var(--success);\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.14);\n}\n.status-dot-amber[_ngcontent-%COMP%] {\n  background: var(--warning);\n  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.14);\n}\n.corner-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.6rem;\n  display: flex;\n  gap: 0.35rem;\n  align-items: center;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 50%;\n  border: 1px solid var(--border);\n  background: var(--surface);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.8rem;\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  color: var(--brand);\n  border-color: var(--brand-100);\n  background: var(--brand-50);\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-100);\n  color: var(--brand-600);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: #f3c4c4;\n  background: var(--danger-bg);\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fbd5d5;\n  color: #b91c1c;\n  border-color: #f3a3a3;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: var(--sp-4);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.edit-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.25s ease-out;\n}\n.edit-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  padding: var(--sp-4) var(--sp-5) var(--sp-3);\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.edit-modal-header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.edit-modal-header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: 0.85rem;\n  color: var(--text-3);\n}\n.edit-modal-close[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--surface);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.edit-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.edit-modal-close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.edit-modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.75rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  background: var(--surface);\n  color: var(--text-1);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.edit-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5);\n  background: var(--surface-2);\n  border-top: 1px solid var(--border);\n}\n.edit-modal-btn[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.15s ease;\n}\n.edit-modal-btn.primary[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n}\n.edit-modal-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.edit-modal-btn.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.edit-modal-btn.secondary[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.edit-modal-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.edit-modal-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.25s ease-out;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  border-top: 4px solid var(--danger);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--surface);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-4);\n  font-size: 0.95rem;\n  color: var(--text-2);\n  line-height: 1.5;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.cancel-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--surface);\n  color: var(--text-2);\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.delete-confirm-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--danger);\n  color: #fff;\n  transition: background-color 0.18s ease;\n}\n.delete-confirm-button[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.confirm-message[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.5;\n  margin: 0;\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.notification-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 5px solid var(--success);\n  border-radius: var(--r-md);\n  padding: var(--sp-5) var(--sp-6);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  max-width: 420px;\n  width: 90%;\n  position: relative;\n  animation: _ngcontent-%COMP%_notificationSlideIn 0.25s ease-out;\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-left-color: var(--success);\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-left-color: var(--danger);\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--success);\n}\n.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.checkmark[_ngcontent-%COMP%], \n.error-mark[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.checkmark__check[_ngcontent-%COMP%], \n.error-mark__x[_ngcontent-%COMP%] {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_checkmarkStroke 0.6s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #14532d;\n}\n.notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--sp-3);\n  right: var(--sp-4);\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 50%;\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@keyframes _ngcontent-%COMP%_notificationSlideIn {\n  from {\n    transform: translateY(-20px) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .parents-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .parents-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grade-section[_ngcontent-%COMP%] {\n    min-width: 130px;\n    padding: var(--sp-3) var(--sp-2);\n  }\n  .right-content[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .assign-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .add-parent-btn[_ngcontent-%COMP%], \n   .assign-section[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-button[_ngcontent-%COMP%], \n   .delete-confirm-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .edit-modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .edit-modal-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=parents.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Parents, [{
    type: Component,
    args: [{ selector: "app-parents", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="parents-container">
  <div class="parents-header">
    <h2>Padres de Familia</h2>
  </div>

  <div class="grades-sidebar-like">
    <div class="grades-row">
      @for (grade of allGrades; track grade) {
        <div class="grade-section">
          <h3>{{ grade }}</h3>
          <div class="classrooms">
            @for (classroom of classrooms; track classroom) {
              <button
                class="classroom-btn"
                [class.selected]="selectedGrade === grade && selectedClassroom === classroom"
                (click)="selectGradeAndClassroom(grade, classroom)"
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
    @if (!selectedGrade || !selectedClassroom) {
      <div class="parents-placeholder">
        <div class="placeholder-content">
          <span class="placeholder-icon">\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}</span>
          <h3>Selecciona un grado y sal\xF3n</h3>
          <p>Elige un grado y sal\xF3n de la lista superior para ver los estudiantes y padres de familia.</p>
        </div>
      </div>
    }

    @if (selectedGrade && selectedClassroom && isLoading) {
      <div class="loading-indicator">
        <div class="spinner"></div>
        <p>Cargando datos...</p>
      </div>
    }

    @if (selectedGrade && selectedClassroom && !isLoading) {
      <div class="selection-hint" [class.hidden]="selectedStudent === null && selectedParent === null">
        <span class="hint-icon">\u2139\uFE0F</span>
        <strong>Instrucciones:</strong> Selecciona un estudiante de la lista izquierda y luego un padre de la lista derecha para vincularlos.
        @if (selectedStudent !== null) {
          <span class="hint-selected">Estudiante: <strong>{{ selectedStudent?.surname }} {{ selectedStudent?.name }}</strong></span>
        }
      </div>

      <div class="assign-section">
        <button class="link-btn add-parent-btn" (click)="openCreateParentModal()">+ A\xF1adir Padre de Familia</button>
        @if (selectedStudent !== null) {
          <button class="link-btn cancel-btn" (click)="clearSelection()">Cancelar selecci\xF3n</button>
        }
      </div>

      @if (allParents.length === 0) {
        <div class="no-assignments-banner">
          <span class="no-assignments-icon">\u2139\uFE0F</span>
          <div>
            <strong>No hay padres de familia en este sal\xF3n</strong>
            <p>A\xFAn no se han creado padres de familia para este grado y sal\xF3n. Puedes crearlos con el bot\xF3n "+ A\xF1adir Padre de Familia".</p>
          </div>
        </div>
      }

      <div class="parents-grid">
        <div class="parents-column students-column">
          <div class="column-header">
            <h3 class="column-title">Estudiantes</h3>
            <div class="column-badges">
              <span class="column-badge has-parents">\u{1F393} {{ totalStudentsCount }}</span>
              <span class="column-badge">Disponibles {{ availableStudentsCount }}</span>
            </div>
          </div>
          @if (allStudents.length === 0) {
            <div class="empty-column">
              <span class="empty-icon">\u{1F4ED}</span>
              <p>No hay estudiantes en este sal\xF3n</p>
            </div>
          }
          <div class="people-list">
            @for (student of allStudents; track student.id) {
              <div class="person-card student-card"
                   [class.person-selected]="selectedStudent?.id === student.id"
                   [class.assigned]="student.hasParent"
                   (click)="selectStudent(student)">
                <div class="person-avatar student-avatar">
                  {{ student.surname.charAt(0) }}{{ student.name.charAt(0) }}
                </div>
                <div class="status-indicator" [class.status-green]="student.hasParent" [class.status-red]="!student.hasParent"></div>
                <div class="person-info">
                  <div class="person-name">{{ student.surname }} {{ student.name }}</div>
                  <div class="person-detail">{{ student.documentNumber || 'Sin documento' }}</div>
                </div>
                @if (student.hasParent) {
                  <div class="corner-actions">
                    <button class="icon-btn delete-btn" (click)="unassignParent(student); $event.stopPropagation()" title="Quitar padre de familia">\u2715</button>
                  </div>
                }
              </div>
            }
          </div>
        </div>

        <div class="parents-column parents-column-content">
          <div class="column-header">
            <h3 class="column-title">Padres de Familia</h3>
            <div class="column-badges">
              <span class="column-badge has-parents">\u{1F465} {{ allParents.length }}</span>
              <span class="column-badge">Disponibles {{ availableParentsCount }}</span>
            </div>
          </div>
          @if (allParents.length === 0) {
            <div class="empty-column">
              <span class="empty-icon">\u{1F465}</span>
              <p>No hay padres de familia en este sal\xF3n</p>
            </div>
          }

          <div class="people-list">
            @for (parent of allParents; track parent.id) {
              <div class="person-card parent-card"
                   [class.is-linked]="parent.hasStudent"
                   [class.unlinked-card]="!parent.hasStudent"
                   [class.linked-card]="parent.hasStudent"
                   [class.not-selectable]="parent.hasStudent || selectedStudent === null"
                   [class.person-selected]="selectedParent?.id === parent.id"
                   (click)="selectParent(parent)">
                <div class="parent-card-top">
                  <div class="person-avatar parent-avatar"
                       [class.unlinked-avatar]="!parent.hasStudent"
                       [class.linked-avatar]="parent.hasStudent">
                    {{ parent.surname.charAt(0) }}{{ parent.name.charAt(0) }}
                  </div>

                  <div class="status-indicator" [class.status-green]="parent.hasStudent" [class.status-amber]="!parent.hasStudent"></div>

                  <div class="parent-card-main">
                    <div class="parent-name-block">
                      <div class="person-name">{{ parent.surname }} {{ parent.name }}</div>
                      <div class="person-detail parent-email">{{ parent.email || 'Sin correo' }}</div>
                    </div>

                    <div class="corner-actions parent-card-actions">
                      <button class="icon-btn edit-btn" (click)="startEditParent(parent); $event.stopPropagation()" title="Editar padre de familia">\u270E</button>
                      <button class="icon-btn delete-btn" (click)="deleteParent(parent); $event.stopPropagation()" title="Eliminar padre de familia">\u2715</button>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    }

    @if (showEditParentModal) {
      <div class="modal-overlay" (click)="closeEditModal(); $event.stopPropagation()">
        <div class="edit-modal" (click)="$event.stopPropagation()">
          <div class="edit-modal-header">
            <div class="edit-modal-header-text">
              <h3>Editar padre de familia</h3>
              <p>Actualiza la informaci\xF3n de <strong>{{ editingParent?.surname }} {{ editingParent?.name }}</strong></p>
            </div>
            <button class="edit-modal-close" (click)="closeEditModal()">\u2715</button>
          </div>

          <div class="edit-modal-body">
            <div class="form-group">
              <label for="edit-parent-name">Nombre</label>
              <input id="edit-parent-name" type="text" [(ngModel)]="editParentForm.name" placeholder="Nombre" />
            </div>
            <div class="form-group">
              <label for="edit-parent-surname">Apellido</label>
              <input id="edit-parent-surname" type="text" [(ngModel)]="editParentForm.surname" placeholder="Apellido" />
            </div>
            <div class="form-group">
              <label for="edit-parent-email">Correo electr\xF3nico</label>
              <input id="edit-parent-email" type="email" [(ngModel)]="editParentForm.email" placeholder="correo@ejemplo.com" />
            </div>
            <div class="form-group">
              <label for="edit-parent-password">Nueva Contrase\xF1a (opcional)</label>
              <input id="edit-parent-password" type="password" [(ngModel)]="editParentForm.newPassword" placeholder="Dejar vac\xEDo para mantener la actual" autocomplete="new-password" />
            </div>
          </div>

          <div class="edit-modal-footer">
            <button class="edit-modal-btn secondary" (click)="closeEditModal()">Cancelar</button>
            <button class="edit-modal-btn primary" [disabled]="parentSaving" (click)="saveParentEdit(editingParent!)">
              <span *ngIf="!parentSaving">Guardar cambios</span>
              <span *ngIf="parentSaving">Guardando...</span>
            </button>
          </div>
        </div>
      </div>
    }

    @if (showDeleteConfirm && parentToDelete) {
      <div class="modal-overlay" (click)="closeDeleteConfirm()">
        <div class="modal-content confirm-modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>Confirmar eliminaci\xF3n</h3>
            <button class="close-button" (click)="closeDeleteConfirm()">\u2715</button>
          </div>
          <div class="modal-body">
            <p class="confirm-message">
              \xBFEst\xE1s seguro de eliminar al padre de familia <strong>{{ parentToDelete.surname }} {{ parentToDelete.name }}</strong>?
            </p>
            <div class="modal-actions">
              <button class="cancel-button" (click)="closeDeleteConfirm()">Cancelar</button>
              <button class="delete-confirm-button" (click)="confirmDelete()">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    }

    @if (showCreateParentModal) {
      <div class="modal-overlay" (click)="closeCreateParentModal()">
        <div class="edit-modal" (click)="$event.stopPropagation()">
          <div class="edit-modal-header">
            <div class="edit-modal-header-text">
              <h3>Nuevo Padre de Familia</h3>
              <p>Crear un nuevo usuario como padre de familia</p>
            </div>
            <button class="edit-modal-close" (click)="closeCreateParentModal()">\u2715</button>
          </div>
          <div class="edit-modal-body">
            <div class="form-group">
              <label for="new-parent-name">Nombre</label>
              <input id="new-parent-name" type="text" [(ngModel)]="newParentForm.name" placeholder="Nombre" />
            </div>
            <div class="form-group">
              <label for="new-parent-surname">Apellido</label>
              <input id="new-parent-surname" type="text" [(ngModel)]="newParentForm.surname" placeholder="Apellido" />
            </div>
            <div class="form-group">
              <label for="new-parent-email">Correo electr\xF3nico</label>
              <input id="new-parent-email" type="email" [(ngModel)]="newParentForm.email" placeholder="correo@ejemplo.com" />
            </div>
            <div class="form-group">
              <label for="new-parent-password">Contrase\xF1a</label>
              <input id="new-parent-password" type="password" [(ngModel)]="newParentForm.password" placeholder="M\xEDnimo 6 caracteres" autocomplete="new-password" />
            </div>
            <div class="form-group">
              <label for="new-parent-grade">Grado</label>
              <select id="new-parent-grade" [(ngModel)]="newParentForm.grade">
                <option value="">Selecciona un grado</option>
                @for (grade of allGrades; track grade) {
                  <option [value]="grade">{{ grade }}</option>
                }
              </select>
            </div>
            <div class="form-group">
              <label for="new-parent-classroom">Sal\xF3n</label>
              <select id="new-parent-classroom" [(ngModel)]="newParentForm.classGroup">
                <option value="">Selecciona un sal\xF3n</option>
                @for (classroom of classrooms; track classroom) {
                  <option [value]="classroom">{{ classroom }}</option>
                }
              </select>
            </div>
          </div>
          <div class="edit-modal-footer">
            <button class="edit-modal-btn secondary" (click)="closeCreateParentModal()">Cancelar</button>
            <button class="edit-modal-btn primary" [disabled]="creatingParent" (click)="createParent()">
              <span *ngIf="!creatingParent">Crear padre</span>
              <span *ngIf="creatingParent">Creando...</span>
            </button>
          </div>
        </div>
      </div>
    }

    @if (showNotification) {
      <div class="notification-overlay" (click)="hideNotification()">
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
            <div class="notification-title">{{ notificationType === 'success' ? '\xA1Exito!' : '\xA1Error!' }}</div>
            <div class="notification-message">{{ notificationMessage }}</div>
          </div>
          <button class="notification-close" (click)="hideNotification()">\u2715</button>
        </div>
      </div>
    }
  </div>
</div>
`, styles: ['/* src/app/parents/parents.css */\n.parents-container {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  min-height: calc(100vh - 4rem);\n}\n.parents-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n  gap: var(--sp-4);\n}\n.parents-header h2 {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.grades-sidebar-like {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.grades-row {\n  display: flex;\n  gap: var(--sp-4);\n  flex-wrap: nowrap;\n}\n.grade-section {\n  min-width: 150px;\n  flex: 1;\n  text-align: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4) var(--sp-3);\n}\n.grade-section h3 {\n  margin: 0 0 var(--sp-3);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.classrooms {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.classroom-btn {\n  padding: 0.5rem 0.9rem;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  font-size: 0.85rem;\n}\n.classroom-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.classroom-btn.selected {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.classroom-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.right-content {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n}\n.parents-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 320px;\n  color: var(--text-4);\n}\n.placeholder-content {\n  text-align: center;\n}\n.placeholder-icon {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: var(--sp-4);\n}\n.placeholder-content h3 {\n  margin: 0 0 var(--sp-2);\n  font-size: 1.2rem;\n  color: var(--text-2);\n  font-weight: 700;\n}\n.placeholder-content p {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-3);\n}\n.loading-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-8);\n  color: var(--text-3);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border);\n  border-top: 4px solid var(--brand);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n  margin-bottom: var(--sp-4);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.selection-hint {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: 0.85rem 1rem;\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  color: var(--brand-600);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.selection-hint.hidden {\n  display: none;\n}\n.hint-icon {\n  font-size: 1.1rem;\n}\n.hint-selected {\n  margin-left: auto;\n  font-weight: 600;\n}\n.assign-section {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.link-btn {\n  background: transparent;\n  border: none;\n  font-size: 0.85rem;\n  cursor: pointer;\n  padding: 0.45rem 0.7rem;\n  border-radius: var(--r-sm);\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.link-btn:hover {\n  background: var(--surface-2);\n}\n.add-parent-btn {\n  background: var(--surface);\n  border: 1px solid var(--brand);\n  color: var(--brand);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0.5rem 0.9rem;\n  border-radius: var(--r-sm);\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.add-parent-btn:hover {\n  background: var(--brand-50);\n  border-color: var(--brand-600);\n  color: var(--brand-600);\n}\n.add-parent-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.cancel-btn {\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n}\n.cancel-btn:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n  border-color: var(--text-3);\n}\n.no-assignments-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  border-radius: var(--r-md);\n  border: 1px dashed var(--warning);\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.no-assignments-icon {\n  flex-shrink: 0;\n  font-size: 1.25rem;\n}\n.no-assignments-banner strong {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.no-assignments-banner p {\n  margin: 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: #92400e;\n}\n.parents-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--sp-4);\n  align-items: start;\n}\n.parents-column {\n  min-width: 0;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4);\n  min-height: 420px;\n}\n.column-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n  padding-bottom: var(--sp-3);\n  border-bottom: 2px solid var(--border);\n}\n.column-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.column-badges {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.column-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: var(--r-pill);\n  background: var(--surface);\n  color: var(--text-3);\n  font-size: 0.8rem;\n  font-weight: 700;\n  border: 1px solid var(--border);\n}\n.column-badge.has-parents {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: #bfe6cc;\n}\n.people-list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  max-height: 560px;\n  overflow: auto;\n  padding-right: 0.25rem;\n}\n.empty-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: var(--sp-6) var(--sp-4);\n  min-height: 220px;\n  text-align: center;\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-md);\n  background: var(--surface);\n  color: var(--text-4);\n}\n.empty-column p {\n  margin: 0;\n}\n.empty-column .empty-icon {\n  font-size: 2rem;\n}\n.person-card {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-3);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.15s ease;\n  min-height: 72px;\n  position: relative;\n}\n.person-card:hover:not(.disabled) {\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n  transform: translateY(-1px);\n}\n.person-card.person-selected {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.12);\n}\n.person-card.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.person-avatar {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.student-avatar {\n  background: var(--brand);\n}\n.parent-avatar {\n  background: var(--success);\n}\n.linked-avatar {\n  background: var(--success);\n}\n.unlinked-avatar {\n  background: var(--warning);\n}\n.person-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.person-name {\n  font-weight: 600;\n  color: var(--text-1);\n  font-size: 0.9rem;\n  line-height: 1.3;\n}\n.person-detail {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  word-break: break-word;\n  line-height: 1.25;\n}\n.parent-email {\n  display: inline-block;\n  font-size: 0.82rem;\n  color: var(--text-2);\n  line-height: 1.35;\n  padding: 0.25rem 0.45rem;\n  border-radius: var(--r-sm);\n  background: var(--surface-2);\n  max-width: 100%;\n}\n.status-indicator {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid #fff;\n  box-shadow: var(--shadow-xs);\n}\n.status-green {\n  background: var(--success);\n}\n.status-red {\n  background: var(--danger);\n}\n.status-amber {\n  background: var(--warning);\n}\n.parent-card {\n  position: relative;\n  overflow: hidden;\n}\n.parent-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--warning);\n}\n.parent-card.is-linked::before {\n  background: var(--success);\n}\n.parent-card.unlinked-card {\n  border-color: #f3dcb4;\n  background: var(--warning-bg);\n}\n.parent-card.linked-card {\n  border-color: #bfe6cc;\n  background: var(--success-bg);\n}\n.parent-card-top {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.9rem 0.95rem 0.85rem 1.15rem;\n}\n.parent-card-main {\n  flex: 1;\n  min-width: 0;\n  padding-right: 4.25rem;\n}\n.parent-title-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.parent-name-block {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.parent-card-actions {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  display: flex;\n  gap: 0.45rem;\n  z-index: 2;\n}\n.parent-footer {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  max-width: 100%;\n  margin-top: 0.7rem;\n  padding: 0.4rem 0.6rem;\n  border-radius: var(--r-pill);\n  font-size: 0.76rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.linked-footer {\n  color: var(--success);\n  background: var(--success-bg);\n  border: 1px solid #bfe6cc;\n}\n.unlinked-footer {\n  color: var(--warning);\n  background: #fff7e8;\n  border: 1px solid #f3dcb4;\n}\n.status-dot {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-dot-green {\n  background: var(--success);\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.14);\n}\n.status-dot-amber {\n  background: var(--warning);\n  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.14);\n}\n.corner-actions {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.6rem;\n  display: flex;\n  gap: 0.35rem;\n  align-items: center;\n}\n.icon-btn {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 50%;\n  border: 1px solid var(--border);\n  background: var(--surface);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.8rem;\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease;\n}\n.icon-btn:hover {\n  background: var(--surface-2);\n}\n.icon-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.edit-btn {\n  color: var(--brand);\n  border-color: var(--brand-100);\n  background: var(--brand-50);\n}\n.edit-btn:hover {\n  background: var(--brand-100);\n  color: var(--brand-600);\n}\n.delete-btn {\n  color: var(--danger);\n  border-color: #f3c4c4;\n  background: var(--danger-bg);\n}\n.delete-btn:hover {\n  background: #fbd5d5;\n  color: #b91c1c;\n  border-color: #f3a3a3;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: var(--sp-4);\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.edit-modal {\n  width: 100%;\n  max-width: 440px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  animation: modalSlideIn 0.25s ease-out;\n}\n.edit-modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  padding: var(--sp-4) var(--sp-5) var(--sp-3);\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.edit-modal-header-text h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.edit-modal-header-text p {\n  margin: 0.3rem 0 0;\n  font-size: 0.85rem;\n  color: var(--text-3);\n}\n.edit-modal-close {\n  border: none;\n  background: var(--surface);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.edit-modal-close:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.edit-modal-close:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.edit-modal-body {\n  padding: var(--sp-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.form-group label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  padding: 0.6rem 0.75rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  background: var(--surface);\n  color: var(--text-1);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  font-family: inherit;\n}\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.edit-modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5);\n  background: var(--surface-2);\n  border-top: 1px solid var(--border);\n}\n.edit-modal-btn {\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.15s ease;\n}\n.edit-modal-btn.primary {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n}\n.edit-modal-btn.primary:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.edit-modal-btn.primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.edit-modal-btn.secondary {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.edit-modal-btn.secondary:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.edit-modal-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: modalSlideIn 0.25s ease-out;\n}\n.confirm-modal {\n  border-top: 4px solid var(--danger);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.close-button {\n  border: none;\n  background: var(--surface);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.close-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body {\n  padding: var(--sp-5);\n}\n.modal-body p {\n  margin: 0 0 var(--sp-4);\n  font-size: 0.95rem;\n  color: var(--text-2);\n  line-height: 1.5;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-4) var(--sp-5);\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.cancel-button {\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--surface);\n  color: var(--text-2);\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-button:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.delete-confirm-button {\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--danger);\n  color: #fff;\n  transition: background-color 0.18s ease;\n}\n.delete-confirm-button:hover {\n  background: #b91c1c;\n}\n.confirm-message {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.5;\n  margin: 0;\n}\n.notification-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: fadeIn 0.2s ease-out;\n}\n.notification-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 5px solid var(--success);\n  border-radius: var(--r-md);\n  padding: var(--sp-5) var(--sp-6);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  max-width: 420px;\n  width: 90%;\n  position: relative;\n  animation: notificationSlideIn 0.25s ease-out;\n}\n.notification-success {\n  border-left-color: var(--success);\n}\n.notification-error {\n  border-left-color: var(--danger);\n}\n.notification-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--success);\n}\n.notification-error .notification-icon {\n  background: var(--danger);\n}\n.checkmark,\n.error-mark {\n  width: 26px;\n  height: 26px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.checkmark__check,\n.error-mark__x {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: checkmarkStroke 0.6s ease forwards;\n}\n@keyframes checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.notification-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success .notification-title {\n  color: #14532d;\n}\n.notification-error .notification-title {\n  color: #7f1d1d;\n}\n.notification-message {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close {\n  position: absolute;\n  top: var(--sp-3);\n  right: var(--sp-4);\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 50%;\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@keyframes notificationSlideIn {\n  from {\n    transform: translateY(-20px) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .parents-container {\n    padding: var(--sp-4);\n  }\n  .parents-grid {\n    grid-template-columns: 1fr;\n  }\n  .grade-section {\n    min-width: 130px;\n    padding: var(--sp-3) var(--sp-2);\n  }\n  .right-content {\n    padding: var(--sp-4);\n  }\n  .assign-section {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .add-parent-btn,\n  .assign-section .cancel-btn {\n    width: 100%;\n    text-align: center;\n  }\n  .modal-content {\n    width: 100%;\n  }\n  .modal-header {\n    padding: var(--sp-4);\n  }\n  .modal-body {\n    padding: var(--sp-4);\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .cancel-button,\n  .delete-confirm-button {\n    width: 100%;\n  }\n  .edit-modal-footer {\n    flex-direction: column-reverse;\n  }\n  .edit-modal-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=parents.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Parents, { className: "Parents", filePath: "app/parents/parents.ts", lineNumber: 37 });
})();
export {
  Parents
};
//# sourceMappingURL=chunk-B7VDVZLE.js.map
