import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/students/students.ts
function Students_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function Students_For_6_For_5_Template_button_click_0_listener() {
      const classroom_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const grade_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectClassroom(grade_r3, classroom_r2));
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
function Students_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275repeaterCreate(4, Students_For_6_For_5_Template, 2, 3, "button", 14, \u0275\u0275repeaterTrackByIdentity);
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
function Students_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando estudiantes...");
    \u0275\u0275elementEnd()();
  }
}
function Students_Conditional_9_Conditional_1_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275element(6, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 27)(14, "span", 28);
    \u0275\u0275listener("click", function Students_Conditional_9_Conditional_1_For_23_Template_span_click_14_listener() {
      const student_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openEditStudentModal(student_r7));
    });
    \u0275\u0275text(15, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 29);
    \u0275\u0275listener("click", function Students_Conditional_9_Conditional_1_For_23_Template_span_click_16_listener() {
      const student_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleStudentStatus(student_r7));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 30);
    \u0275\u0275listener("click", function Students_Conditional_9_Conditional_1_For_23_Template_span_click_18_listener() {
      const student_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteStudent(student_r7));
    });
    \u0275\u0275text(19, " Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r7 = ctx.$implicit;
    const \u0275$index_72_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_72_r8 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", student_r7.surname, " ", student_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("has-parent", student_r7.hasParent)("no-parent", !student_r7.hasParent);
    \u0275\u0275property("title", \u0275\u0275interpolate(student_r7.hasParent ? "Tiene padre asignado" : "Sin padre asignado"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r7.documentNumber || "No proporcionado");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r7.classGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("active-text", student_r7.active !== false)("inactive-text", student_r7.active === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", student_r7.active !== false ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active-text", student_r7.active === false)("inactive-text", student_r7.active !== false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", student_r7.active === false ? "Activar" : "Inactivar", " ");
  }
}
function Students_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 19)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function Students_Conditional_9_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddStudentModal());
    });
    \u0275\u0275text(5, " \u2795 Agregar Estudiante ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "table", 21)(7, "thead")(8, "tr")(9, "th", 22);
    \u0275\u0275text(10, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Nombre Completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Numero de Identidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 23);
    \u0275\u0275text(20, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, Students_Conditional_9_Conditional_1_For_23_Template, 20, 21, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Estudiantes - ", ctx_r3.selectedGrade, " - ", ctx_r3.selectedClassroom);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r3.students);
  }
}
function Students_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 31)(2, "h3");
    \u0275\u0275text(3, "No hay estudiantes en este sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 20);
    \u0275\u0275listener("click", function Students_Conditional_9_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddStudentModal());
    });
    \u0275\u0275text(7, " \u2795 Agregar Primer Estudiante ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("El grado ", ctx_r3.selectedGrade, " - ", ctx_r3.selectedClassroom, " no tiene estudiantes registrados en el sistema.");
  }
}
function Students_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, Students_Conditional_9_Conditional_1_Template, 24, 2, "div", 17);
    \u0275\u0275conditionalCreate(2, Students_Conditional_9_Conditional_2_Template, 8, 2, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.students.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedGrade && ctx_r3.selectedClassroom && ctx_r3.students.length === 0 ? 2 : -1);
  }
}
function Students_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 32)(2, "h3");
    \u0275\u0275text(3, "Selecciona un grado y sal\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Elige un grado de la lista superior y luego selecciona un sal\xF3n para ver los estudiantes");
    \u0275\u0275elementEnd()()();
  }
}
function Students_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 33);
    \u0275\u0275listener("click", function Students_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.printStudentsPDF());
    });
    \u0275\u0275text(2, " \u{1F5A8}\uFE0F Imprimir Lista de Estudiantes ");
    \u0275\u0275elementEnd()();
  }
}
function Students_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function Students_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275listener("click", function Students_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "h3");
    \u0275\u0275text(4, "Confirmar eliminaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function Students_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "p", 39);
    \u0275\u0275text(9, " \xBFEst\xE1 seguro de eliminar al estudiante ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 40)(14, "button", 41);
    \u0275\u0275listener("click", function Students_Conditional_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(15, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 42);
    \u0275\u0275listener("click", function Students_Conditional_12_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(17, "Eliminar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r3.studentToDelete.surname, " ", ctx_r3.studentToDelete.name);
  }
}
function Students_Conditional_13_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Cambios");
    \u0275\u0275elementEnd();
  }
}
function Students_Conditional_13_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Students_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function Students_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditStudentModal());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function Students_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "h3");
    \u0275\u0275text(4, "Editar Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function Students_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditStudentModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "form", 44, 0);
    \u0275\u0275listener("ngSubmit", function Students_Conditional_13_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateStudent());
    });
    \u0275\u0275elementStart(10, "div", 45)(11, "label", 46);
    \u0275\u0275text(12, "Nombres: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function Students_Conditional_13_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.studentToEdit.name, $event) || (ctx_r3.studentToEdit.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 45)(15, "label", 48);
    \u0275\u0275text(16, "Apellidos: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function Students_Conditional_13_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.studentToEdit.surname, $event) || (ctx_r3.studentToEdit.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 45)(19, "label", 50);
    \u0275\u0275text(20, "Numero de Identificacion:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function Students_Conditional_13_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.studentToEdit.documentNumber, $event) || (ctx_r3.studentToEdit.documentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 40)(23, "button", 41);
    \u0275\u0275listener("click", function Students_Conditional_13_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditStudentModal());
    });
    \u0275\u0275text(24, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 52);
    \u0275\u0275conditionalCreate(26, Students_Conditional_13_Conditional_26_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(27, Students_Conditional_13_Conditional_27_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const editStudentForm_r13 = \u0275\u0275reference(9);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.studentToEdit.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.studentToEdit.surname);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.studentToEdit.documentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !editStudentForm_r13.valid || ctx_r3.isSavingStudent);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.isSavingStudent ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isSavingStudent ? 27 : -1);
  }
}
function Students_Conditional_14_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Estudiante");
    \u0275\u0275elementEnd();
  }
}
function Students_Conditional_14_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Students_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function Students_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddStudentModal());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function Students_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "h3");
    \u0275\u0275text(4, "Agregar Nuevo Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function Students_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddStudentModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "form", 44, 1);
    \u0275\u0275listener("ngSubmit", function Students_Conditional_14_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addStudent());
    });
    \u0275\u0275elementStart(10, "div", 45)(11, "label", 53);
    \u0275\u0275text(12, "Grado:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 45)(15, "label", 55);
    \u0275\u0275text(16, "Sal\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 45)(19, "label", 57);
    \u0275\u0275text(20, "Nombres: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function Students_Conditional_14_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newStudent.name, $event) || (ctx_r3.newStudent.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 45)(23, "label", 59);
    \u0275\u0275text(24, "Apellidos: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function Students_Conditional_14_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newStudent.surname, $event) || (ctx_r3.newStudent.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 45)(27, "label", 61);
    \u0275\u0275text(28, "Documento de Identidad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function Students_Conditional_14_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newStudent.documentNumber, $event) || (ctx_r3.newStudent.documentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 40)(31, "button", 41);
    \u0275\u0275listener("click", function Students_Conditional_14_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddStudentModal());
    });
    \u0275\u0275text(32, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 52);
    \u0275\u0275conditionalCreate(34, Students_Conditional_14_Conditional_34_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(35, Students_Conditional_14_Conditional_35_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const studentForm_r15 = \u0275\u0275reference(9);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r3.selectedGrade);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r3.selectedClassroom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newStudent.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newStudent.surname);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newStudent.documentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !studentForm_r15.valid || ctx_r3.isSavingStudent);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.isSavingStudent ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isSavingStudent ? 35 : -1);
  }
}
function Students_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "path", 72);
    \u0275\u0275elementEnd();
  }
}
function Students_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 73);
    \u0275\u0275elementEnd();
  }
}
function Students_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function Students_Conditional_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hideNotification());
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function Students_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65);
    \u0275\u0275conditionalCreate(3, Students_Conditional_15_Conditional_3_Template, 2, 0, ":svg:svg", 66);
    \u0275\u0275conditionalCreate(4, Students_Conditional_15_Conditional_4_Template, 2, 0, ":svg:svg", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 68)(6, "div", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function Students_Conditional_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
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
    \u0275\u0275textInterpolate(ctx_r3.notificationType === "success" ? "\xA1Cambio efectivo!" : "\xA1Error!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.notificationMessage, " ");
  }
}
var Students = class _Students {
  http;
  grades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  classrooms = ["Salon A", "Salon B"];
  selectedGrade = null;
  selectedClassroom = null;
  students = [];
  isLoading = false;
  showPrintButton = false;
  studentToDelete = null;
  studentToEdit = null;
  // Add Student Modal Variables
  showAddStudentModal = false;
  newStudent = {
    name: "",
    surname: "",
    documentNumber: "",
    grade: "",
    classGroup: ""
  };
  isSavingStudent = false;
  // Edit Student Modal Variables
  showEditStudentModal = false;
  // Notification System Variables
  showNotification = false;
  notificationType = null;
  notificationMessage = "";
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    console.log("Students component initialized - ready to fetch from database");
  }
  selectClassroom(grade, classroom) {
    this.selectedGrade = grade;
    this.selectedClassroom = classroom;
    console.log("=== STUDENT SELECTION ===");
    console.log("Selected grade:", grade);
    console.log("Selected classroom:", classroom);
    this.fetchStudents(grade, classroom);
  }
  showLoading() {
    const loadingElement = document.querySelector(".loading-indicator");
    if (loadingElement) {
      loadingElement.classList.remove("fade-out");
    }
    this.hidePrintButtonDelayed();
    this.isLoading = true;
  }
  hideLoading() {
    const loadingElement = document.querySelector(".loading-indicator");
    if (loadingElement) {
      loadingElement.classList.add("fade-out");
      setTimeout(() => {
        this.isLoading = false;
        setTimeout(() => {
          this.showPrintButtonDelayed();
        }, 300);
      }, 600);
    } else {
      this.isLoading = false;
      setTimeout(() => {
        this.showPrintButtonDelayed();
      }, 300);
    }
  }
  showPrintButtonDelayed() {
    const printButtonContainer = document.querySelector(".print-button-container");
    if (printButtonContainer) {
      printButtonContainer.classList.remove("slide-out");
    }
    this.showPrintButton = true;
  }
  hidePrintButtonDelayed() {
    const printButtonContainer = document.querySelector(".print-button-container");
    if (printButtonContainer) {
      printButtonContainer.classList.add("slide-out");
      setTimeout(() => {
        this.showPrintButton = false;
      }, 500);
    } else {
      this.showPrintButton = false;
    }
  }
  fetchStudents(grade, classroom) {
    console.log("=== FETCHING STUDENTS FROM DATABASE ===");
    this.showLoading();
    const directUrl = `http://localhost:8080/api/students/grade/${encodeURIComponent(grade)}/class/${encodeURIComponent(classroom)}`;
    console.log("Trying direct URL:", directUrl);
    this.http.get(directUrl).subscribe({
      next: (students) => {
        console.log("Students fetched from database:", students.length, "students");
        const baseList = students || [];
        if (baseList.length === 0) {
          this.students = [];
          setTimeout(() => this.hideLoading(), 800);
          return;
        }
        const parentEndpoint = `http://localhost:8080/api/parents/by-grade-classroom?grade=${encodeURIComponent(grade)}&classroom=${encodeURIComponent(classroom)}`;
        this.http.get(parentEndpoint).subscribe({
          next: (parentData) => {
            const parentMap = /* @__PURE__ */ new Map();
            (parentData.students || []).forEach((s) => {
              parentMap.set(s.id, {
                hasParent: !!s.hasParent,
                parentName: s.parentName || null
              });
            });
            this.students = baseList.map((s) => {
              const info = parentMap.get(s.id);
              return __spreadProps(__spreadValues({}, s), {
                hasParent: info ? info.hasParent : false,
                parentName: info ? info.parentName : null
              });
            }).sort((a, b) => {
              const surnameA = (a.surname || "").toLowerCase();
              const surnameB = (b.surname || "").toLowerCase();
              return surnameA.localeCompare(surnameB);
            });
            setTimeout(() => this.hideLoading(), 800);
          },
          error: () => {
            this.students = baseList.map((s) => __spreadProps(__spreadValues({}, s), {
              hasParent: false,
              parentName: null
            })).sort((a, b) => (a.surname || "").toLowerCase().localeCompare((b.surname || "").toLowerCase()));
            setTimeout(() => this.hideLoading(), 800);
          }
        });
      },
      error: (error) => {
        console.error("Failed to fetch students:", error);
        this.students = [];
        setTimeout(() => this.hideLoading(), 800);
      }
    });
  }
  addTestData() {
    console.log("=== ADDING TEST DATA ===");
    const populateUrl = "http://localhost:8080/api/students/populate-test-data";
    this.http.post(populateUrl, {}).subscribe({
      next: (response) => {
        console.log("\u2705 Test data added successfully:", response);
        if (this.selectedGrade && this.selectedClassroom) {
          setTimeout(() => {
            this.fetchStudents(this.selectedGrade, this.selectedClassroom);
          }, 1e3);
        }
      },
      error: (error) => {
        console.error("\u274C Failed to add test data:", error);
        this.students = [];
        setTimeout(() => {
          this.hideLoading();
        }, 800);
      }
    });
  }
  printStudentsPDF() {
    console.log("=== GENERATING PDF WITH HIDDEN IFRAME (NO NEW TABS) ===");
    if (this.students.length === 0) {
      this.showErrorNotification("No hay estudiantes para imprimir");
      return;
    }
    const printContent = this.generateCleanHTML();
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    document.body.appendChild(iframe);
    iframe.onload = () => {
      setTimeout(() => {
        if (iframe.contentWindow) {
          iframe.contentWindow.print();
          console.log("\u2705 Print command sent from hidden iframe");
        }
        document.body.removeChild(iframe);
      }, 500);
    };
    if (iframe.contentDocument) {
      iframe.contentDocument.write(printContent);
      iframe.contentDocument.close();
    }
  }
  generateCleanHTML() {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Lista de Estudiantes</title>
        <style>
          @page {
            margin: 15mm;
            size: A4;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: white;
            color: #000;
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            border: 2px solid #007bff;
            border-radius: 8px;
            background: #f8f9fa;
          }
          
          .school-name {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin-bottom: 10px;
            text-transform: uppercase;
          }
          
          .document-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
          }
          
          .subtitle {
            font-size: 14px;
            color: #666;
            font-style: italic;
          }
          
          .info-section {
            margin: 20px 0;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 5px;
            border: 1px solid #dee2e6;
          }
          
          .info-row-horizontal {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            gap: 20px;
          }
          
          .info-item {
            display: flex;
            align-items: center;
            gap: 5px;
            flex: 1;
          }
          
          .info-label {
            font-weight: bold;
            color: #007bff;
            white-space: nowrap;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            border: 2px solid #000;
            margin-top: 20px;
          }
          
          th, td {
            border: 1px solid #000;
            padding: 10px;
            text-align: left;
            font-size: 12px;
          }
          
          th {
            background: #007bff;
            color: white;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
          }
          
          .number-col {
            text-align: center;
            font-weight: bold;
            width: 8%;
          }
          
          .name-col {
            width: 42%;
          }
          
          .doc-col {
            width: 25%;
          }
          
          .classroom-col {
            width: 15%;
          }
          
          .status-col {
            text-align: center;
            width: 10%;
          }
          
          tr:nth-child(even) {
            background-color: #f8f9fa;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="school-name">COLEGIO TRINITARIO</div>
          <div class="document-title">Lista de Estudiantes</div>
          <div class="subtitle">Sistema de Gesti\xF3n Acad\xE9mica</div>
        </div>
        
        <div class="info-section">
          <div class="info-row-horizontal">
            <div class="info-item">
              <span class="info-label">Grado:</span>
              <span>${this.selectedGrade}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Sal\xF3n:</span>
              <span>${this.selectedClassroom}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Total Estudiantes:</span>
              <span>${this.students.length}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Fecha:</span>
              <span>${(/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")}</span>
            </div>
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th class="number-col">#</th>
              <th class="name-col">Nombre Completo</th>
              <th class="doc-col">Documento</th>
          <th class="classroom-col">Sal\xF3n</th>
               <th class="status-col">Estado</th>
             </tr>
           </thead>
           <tbody>
             ${this.students.map((student, index) => `
               <tr>
                 <td class="number-col">${index + 1}</td>
                 <td class="name-col">${student.surname} ${student.name}</td>
                 <td class="doc-col">${student.documentNumber || "No proporcionado"}</td>
                 <td class="classroom-col">${student.classGroup}</td>
                 <td class="status-col">${student.active ? "Activo" : "Inactivo"}</td>
               </tr>
             `).join("")}
          </tbody>
        </table>
      </body>
      </html>
    `;
  }
  // Modal Methods
  openAddStudentModal() {
    if (!this.selectedGrade || !this.selectedClassroom) {
      console.warn("Cannot open modal: No grade or classroom selected");
      return;
    }
    console.log("=== OPENING ADD STUDENT MODAL ===");
    console.log("Selected grade:", this.selectedGrade);
    console.log("Selected classroom:", this.selectedClassroom);
    this.newStudent = {
      name: "",
      surname: "",
      documentNumber: "",
      grade: this.selectedGrade,
      classGroup: this.selectedClassroom
    };
    this.showAddStudentModal = true;
    console.log("Modal opened successfully");
  }
  closeAddStudentModal() {
    console.log("=== CLOSING ADD STUDENT MODAL ===");
    this.showAddStudentModal = false;
    this.newStudent = {
      name: "",
      surname: "",
      documentNumber: "",
      grade: "",
      classGroup: ""
    };
    this.isSavingStudent = false;
    console.log("Modal closed successfully");
  }
  openEditStudentModal(student) {
    console.log("=== OPENING EDIT STUDENT MODAL ===");
    this.studentToEdit = __spreadValues({}, student);
    this.showEditStudentModal = true;
    console.log("Edit modal opened for student:", student);
  }
  closeEditStudentModal() {
    console.log("=== CLOSING EDIT STUDENT MODAL ===");
    this.showEditStudentModal = false;
    this.studentToEdit = null;
    this.isSavingStudent = false;
    console.log("Edit modal closed successfully");
  }
  updateStudent() {
    console.log("=== UPDATING STUDENT ===");
    if (!this.studentToEdit)
      return;
    if (!this.studentToEdit.name || !this.studentToEdit.surname) {
      this.showErrorNotification("Por favor complete los campos obligatorios (nombres y apellidos)");
      return;
    }
    const updateUrl = `http://localhost:8080/api/students/${this.studentToEdit.id}`;
    this.isSavingStudent = true;
    const updatedStudentData = {
      name: this.studentToEdit.name?.trim(),
      surname: this.studentToEdit.surname?.trim(),
      documentNumber: this.studentToEdit.documentNumber?.trim() || null,
      active: this.studentToEdit.active
    };
    this.http.put(updateUrl, updatedStudentData).subscribe({
      next: (response) => {
        console.log("\u2705 Student updated successfully:", response);
        const studentName = `${updatedStudentData.name} ${updatedStudentData.surname}`;
        this.showSuccessNotification(`El estudiante "${studentName}" fue actualizado correctamente`);
        this.closeEditStudentModal();
        if (this.selectedGrade && this.selectedClassroom) {
          setTimeout(() => {
            console.log("Refreshing student list...");
            this.fetchStudents(this.selectedGrade, this.selectedClassroom);
          }, 500);
        }
      },
      error: (error) => {
        console.error("\u274C Failed to update student:", error);
        this.showErrorNotification("Error al actualizar el estudiante. Favor intentarlo m\xE1s tarde.");
        this.isSavingStudent = false;
      }
    });
  }
  addStudent() {
    console.log("=== ADDING NEW STUDENT ===");
    if (!this.newStudent.name || !this.newStudent.surname) {
      this.showErrorNotification("Por favor complete los campos obligatorios (nombres y apellidos)");
      return;
    }
    if (!this.selectedGrade || !this.selectedClassroom) {
      this.showErrorNotification("Error: No hay grado o sal\xF3n seleccionado");
      return;
    }
    const studentData = {
      name: this.newStudent.name?.trim(),
      surname: this.newStudent.surname?.trim(),
      grade: this.selectedGrade,
      classGroup: this.selectedClassroom,
      documentNumber: this.newStudent.documentNumber?.trim() || null
    };
    console.log("Student data to save:", studentData);
    this.isSavingStudent = true;
    const saveUrl = "http://localhost:8080/api/students";
    this.http.post(saveUrl, studentData).subscribe({
      next: (response) => {
        console.log("\u2705 Student added successfully:", response);
        console.log("Response:", response);
        this.closeAddStudentModal();
        const studentName = `${studentData.name} ${studentData.surname}`;
        this.showSuccessNotification(`El estudiante "${studentName}" fue agregado correctamente`);
        if (this.selectedGrade && this.selectedClassroom) {
          setTimeout(() => {
            console.log("Refreshing student list...");
            this.fetchStudents(this.selectedGrade, this.selectedClassroom);
          }, 500);
        }
      },
      error: (error) => {
        console.error("\u274C Failed to add student:", error);
        console.error("Error details:", {
          status: error.status,
          message: error.message,
          error: error.error
        });
        let errorMessage = "Error al agregar el estudiante. ";
        if (error.status === 0) {
          errorMessage += "Verifique que el servidor backend est\xE9 ejecut\xE1ndose.";
        } else if (error.status === 400) {
          errorMessage += "Datos inv\xE1lidos. Por favor verifique la informaci\xF3n.";
        } else {
          errorMessage += `Error del servidor: ${error.status}`;
        }
        this.showErrorNotification("Ha ocurrido un error al agregar al estudiante, favor intentarlo m\xE1s tarde");
        this.isSavingStudent = false;
      }
    });
  }
  // Notification System Methods
  showSuccessNotification(message) {
    this.notificationType = "success";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.hideNotification();
    }, 3e3);
  }
  showErrorNotification(message) {
    this.notificationType = "error";
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.hideNotification();
    }, 4e3);
  }
  hideNotification() {
    this.showNotification = false;
    setTimeout(() => {
      this.notificationType = null;
      this.notificationMessage = "";
    }, 300);
  }
  deleteStudent(student) {
    this.studentToDelete = student;
  }
  confirmDelete() {
    if (!this.studentToDelete)
      return;
    const student = this.studentToDelete;
    const deleteUrl = `http://localhost:8080/api/students/${student.id}`;
    this.http.delete(deleteUrl).subscribe({
      next: () => {
        this.students = this.students.filter((s) => s.id !== student.id);
        this.showSuccessNotification(`El estudiante "${student.surname} ${student.name}" fue eliminado correctamente`);
        this.closeDeleteModal();
      },
      error: (error) => {
        console.error("\u274C Failed to delete student:", error);
        this.showErrorNotification("Error al eliminar el estudiante. Favor intentarlo m\xE1s tarde.");
        this.closeDeleteModal();
      }
    });
  }
  closeDeleteModal() {
    this.studentToDelete = null;
  }
  toggleStudentStatus(student) {
    student.active = !student.active;
    const updateUrl = `http://localhost:8080/api/students/${student.id}`;
    const updatedStudent = __spreadValues({}, student);
    this.http.put(updateUrl, updatedStudent).subscribe({
      next: () => {
        const statusText = updatedStudent.active ? "activo" : "inactivo";
        this.showSuccessNotification(`El estudiante "${student.surname} ${student.name}" ahora est\xE1 ${statusText}`);
      },
      error: (error) => {
        student.active = !student.active;
        console.error("\u274C Failed to update student status:", error);
        this.showErrorNotification("Error al actualizar el estado del estudiante. Favor intentarlo m\xE1s tarde.");
      }
    });
  }
  static \u0275fac = function Students_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Students)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Students, selectors: [["app-students"]], decls: 16, vars: 8, consts: [["editStudentForm", "ngForm"], ["studentForm", "ngForm"], [1, "students-container"], [1, "grades-sidebar"], [1, "grades-row"], [1, "grade-section"], [1, "right-content"], [1, "loading-indicator"], [1, "students-list"], [1, "students-placeholder"], [1, "print-button-container"], [1, "modal-overlay"], [1, "notification-overlay"], [1, "classrooms"], [1, "classroom-btn", 3, "selected"], [1, "classroom-btn", 3, "click"], [1, "spinner"], [1, "table-container", "printable-area"], [1, "no-students-message"], [1, "table-header"], [1, "add-student-button", 3, "click"], [1, "students-table"], [1, "number-column"], [1, "actions-column"], [1, "student-name-cell"], [1, "parent-status-dot", 3, "title"], [1, "status-cell"], [1, "actions-cell"], [1, "action-link", "edit-text", 3, "click"], [1, "action-link", 3, "click"], [1, "action-link", "delete-text", 3, "click"], [1, "no-students-content"], [1, "placeholder-content"], [1, "print-button", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "confirm-modal", 3, "click"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "modal-body"], [1, "confirm-message"], [1, "modal-actions"], ["type", "button", 1, "cancel-button", 3, "click"], ["type", "button", 1, "delete-confirm-button", 3, "click"], [1, "modal-content", 3, "click"], [3, "ngSubmit"], [1, "form-group"], ["for", "editStudentName"], ["type", "text", "id", "editStudentName", "name", "name", "required", "", "autocomplete", "given-name", "placeholder", "Ingrese los nombres del estudiante", 3, "ngModelChange", "ngModel"], ["for", "editStudentSurname"], ["type", "text", "id", "editStudentSurname", "name", "surname", "required", "", "autocomplete", "family-name", "placeholder", "Ingrese los apellidos del estudiante", 3, "ngModelChange", "ngModel"], ["for", "editStudentDocument"], ["type", "text", "id", "editStudentDocument", "name", "documentNumber", "autocomplete", "off", "placeholder", "Ingrese el numero de identificacion", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "save-button", 3, "disabled"], ["for", "studentGrade"], ["type", "text", "id", "studentGrade", "name", "grade", "readonly", "", "autocomplete", "off", 1, "readonly-input", 3, "value"], ["for", "studentClassroom"], ["type", "text", "id", "studentClassroom", "name", "classGroup", "readonly", "", "autocomplete", "off", 1, "readonly-input", 3, "value"], ["for", "studentName"], ["type", "text", "id", "studentName", "name", "name", "required", "", "autocomplete", "given-name", "placeholder", "Ingrese los nombres del estudiante", 3, "ngModelChange", "ngModel"], ["for", "studentSurname"], ["type", "text", "id", "studentSurname", "name", "surname", "required", "", "autocomplete", "family-name", "placeholder", "Ingrese los apellidos del estudiante", 3, "ngModelChange", "ngModel"], ["for", "studentDocument"], ["type", "text", "id", "studentDocument", "name", "documentNumber", "autocomplete", "off", "placeholder", "Ingrese el documento de identidad", 3, "ngModelChange", "ngModel"], [1, "notification-overlay", 3, "click"], [1, "notification-content", 3, "click"], [1, "notification-icon"], ["viewBox", "0 0 52 52", 1, "checkmark"], ["viewBox", "0 0 52 52", 1, "error-mark"], [1, "notification-body"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"], ["fill", "none", "d", "m14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], ["fill", "none", "d", "M16 16l20 20M36 16L16 36", 1, "error-mark__x"]], template: function Students_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h2");
      \u0275\u0275text(2, "Grados, Salones y Estudiantes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275repeaterCreate(5, Students_For_6_Template, 6, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275conditionalCreate(8, Students_Conditional_8_Template, 4, 0, "div", 7);
      \u0275\u0275conditionalCreate(9, Students_Conditional_9_Template, 3, 2, "div", 8);
      \u0275\u0275conditionalCreate(10, Students_Conditional_10_Template, 6, 0, "div", 9);
      \u0275\u0275conditionalCreate(11, Students_Conditional_11_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, Students_Conditional_12_Template, 18, 2, "div", 11);
      \u0275\u0275conditionalCreate(13, Students_Conditional_13_Template, 28, 6, "div", 11);
      \u0275\u0275conditionalCreate(14, Students_Conditional_14_Template, 36, 8, "div", 11);
      \u0275\u0275conditionalCreate(15, Students_Conditional_15_Template, 12, 8, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.grades);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoading ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedGrade && ctx.selectedClassroom && !ctx.isLoading ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.selectedGrade || !ctx.selectedClassroom ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPrintButton && ctx.selectedGrade && ctx.selectedClassroom && ctx.students.length > 0 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.studentToDelete ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEditStudentModal && ctx.studentToEdit ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddStudentModal ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showNotification ? 15 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.students-container[_ngcontent-%COMP%] {\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.students-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-6);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 360px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n  margin-bottom: var(--sp-5);\n  animation: fadeIn 0.3s ease-out;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 4px solid var(--border);\n  border-top: 4px solid var(--brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n  margin-bottom: var(--sp-4);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-3);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.grades-sidebar[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  overflow-x: auto;\n}\n.grades-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-4);\n  flex-wrap: nowrap;\n}\n.grade-section[_ngcontent-%COMP%] {\n  min-width: 150px;\n  flex: 1;\n  text-align: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4) var(--sp-3);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.95rem;\n  margin: 0 0 var(--sp-3);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.classrooms[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-direction: column;\n}\n.classroom-btn[_ngcontent-%COMP%] {\n  padding: 0.55rem 1rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  color: var(--text-2);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n  font-size: 0.85rem;\n}\n.classroom-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.classroom-btn.selected[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n}\n.classroom-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.right-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.students-list[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  min-height: 360px;\n}\n.students-placeholder[_ngcontent-%COMP%], \n.no-students-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 360px;\n  background: var(--surface);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n}\n.placeholder-content[_ngcontent-%COMP%], \n.no-students-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-3);\n  padding: var(--sp-8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.placeholder-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.no-students-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-2);\n  font-size: 1.15rem;\n  font-weight: 700;\n}\n.placeholder-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.no-students-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: var(--text-3);\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n  flex-wrap: wrap;\n}\n.table-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-1);\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.add-student-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.1rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.add-student-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.add-student-button[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.add-student-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.add-student-button[_ngcontent-%COMP%]:disabled {\n  background: var(--text-4);\n  border-color: var(--text-4);\n  cursor: not-allowed;\n}\n.table-container[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0 0;\n}\n.students-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--surface);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  font-size: 0.9rem;\n}\n.students-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  font-weight: 600;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-3);\n  text-align: left;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.students-table[_ngcontent-%COMP%]   th.number-column[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 60px;\n  min-width: 60px;\n}\n.students-table[_ngcontent-%COMP%]   th.actions-column[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.students-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.students-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  font-size: 0.9rem;\n  color: var(--text-1);\n  border-bottom: 1px solid var(--border);\n}\n.students-table[_ngcontent-%COMP%]   td.number-column[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-2);\n  background: var(--surface-2);\n}\n.students-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.students-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease;\n}\n.students-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n}\n.students-table[_ngcontent-%COMP%]   td.status-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n}\n.students-table[_ngcontent-%COMP%]   td.status-cell.active-text[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.students-table[_ngcontent-%COMP%]   td.status-cell.inactive-text[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.students-table[_ngcontent-%COMP%]   td.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n  padding: 0.6rem 1rem;\n}\n.action-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n  margin: 0 0 0 var(--sp-3);\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.15s ease;\n}\n.action-link[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.action-link.edit-text[_ngcontent-%COMP%], \n.action-link.active-text[_ngcontent-%COMP%] {\n  color: var(--brand);\n}\n.action-link.edit-text[_ngcontent-%COMP%]:hover, \n.action-link.active-text[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: underline;\n}\n.action-link.inactive-text[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.action-link.inactive-text[_ngcontent-%COMP%]:hover {\n  color: #15803d;\n  text-decoration: underline;\n}\n.action-link.delete-text[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.action-link.delete-text[_ngcontent-%COMP%]:hover {\n  color: #b91c1c;\n  text-decoration: underline;\n}\n.action-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n  border-radius: 4px;\n}\n.student-name-cell[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.parent-status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: var(--shadow-xs);\n}\n.parent-status-dot.has-parent[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.parent-status-dot.no-parent[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.print-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: var(--sp-5) 0 0;\n  width: 100%;\n}\n.print-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.2rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.print-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.print-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: var(--sp-4);\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.confirm-modal.modal-content[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-1);\n  font-size: 1.15rem;\n  font-weight: 700;\n}\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n.close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--sp-2);\n  font-weight: 600;\n  color: var(--text-2);\n  font-size: 0.85rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  font-family: inherit;\n  color: var(--text-1);\n  background: var(--surface);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.readonly-input[_ngcontent-%COMP%] {\n  background: var(--surface-2) !important;\n  color: var(--text-3) !important;\n  cursor: not-allowed;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: flex-end;\n  margin-top: var(--sp-5);\n  padding-top: var(--sp-4);\n  border-top: 1px solid var(--border);\n}\n.cancel-button[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.save-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.2rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition: background-color 0.18s ease, box-shadow 0.18s ease;\n}\n.save-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.save-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.delete-confirm-button[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  background: var(--danger);\n  color: #fff;\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-confirm-button[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.confirm-message[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-2);\n  line-height: 1.6;\n  text-align: center;\n  margin: 0 0 var(--sp-4);\n}\n.confirm-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: fadeIn 0.25s ease-out;\n}\n.notification-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  padding: var(--sp-5) var(--sp-6);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  max-width: 480px;\n  width: 90%;\n  position: relative;\n  border-left: 5px solid var(--success);\n  animation: _ngcontent-%COMP%_notificationSlideIn 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_notificationSlideIn {\n  from {\n    transform: translateY(-20px) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-left-color: var(--success);\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-left-color: var(--danger);\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--success);\n}\n.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.checkmark[_ngcontent-%COMP%], \n.error-mark[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.checkmark__check[_ngcontent-%COMP%] {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_checkmarkStroke 0.6s ease forwards;\n}\n.error-mark__x[_ngcontent-%COMP%] {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_checkmarkStroke 0.6s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #14532d;\n}\n.notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--sp-3);\n  right: var(--sp-3);\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 50%;\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@media print {\n  .grades-sidebar[_ngcontent-%COMP%], \n   .print-button-container[_ngcontent-%COMP%], \n   .students-placeholder[_ngcontent-%COMP%], \n   .no-students-message[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .students-table[_ngcontent-%COMP%] {\n    width: 100% !important;\n    border-collapse: collapse !important;\n    font-family: Arial, sans-serif !important;\n  }\n  .students-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f0f0f0 !important;\n    font-weight: bold !important;\n    text-align: center !important;\n    border: 1px solid #000 !important;\n    padding: 8px !important;\n    font-size: 12px !important;\n    text-transform: uppercase !important;\n    color: #000 !important;\n  }\n  .students-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #000 !important;\n    padding: 8px !important;\n    font-size: 12px !important;\n    color: #000 !important;\n  }\n  .students-table[_ngcontent-%COMP%]   td.number-column[_ngcontent-%COMP%] {\n    font-weight: bold !important;\n    text-align: center !important;\n  }\n  .students-table[_ngcontent-%COMP%]   td.status-cell.active-text[_ngcontent-%COMP%] {\n    color: #155724 !important;\n  }\n  .students-table[_ngcontent-%COMP%]   td.status-cell.inactive-text[_ngcontent-%COMP%] {\n    color: #856404 !important;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .students-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .grades-row[_ngcontent-%COMP%] {\n    gap: var(--sp-3);\n  }\n  .grade-section[_ngcontent-%COMP%] {\n    min-width: 120px;\n    padding: var(--sp-3) var(--sp-2);\n  }\n  .grade-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .classroom-btn[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .students-list[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: var(--sp-3);\n  }\n  .add-student-button[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .students-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .students-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.7rem 0.75rem;\n    font-size: 0.82rem;\n  }\n  .students-table[_ngcontent-%COMP%]   td.actions-cell[_ngcontent-%COMP%]   .action-link[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 0.4rem 0.2rem 0;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-button[_ngcontent-%COMP%], \n   .save-button[_ngcontent-%COMP%], \n   .delete-confirm-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .notification-content[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: var(--sp-4);\n    gap: var(--sp-3);\n  }\n  .notification-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .checkmark[_ngcontent-%COMP%], \n   .error-mark[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n}\n/*# sourceMappingURL=students.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Students, [{
    type: Component,
    args: [{ selector: "app-students", imports: [CommonModule, FormsModule], template: `<div class="students-container">
  <h2>Grados, Salones y Estudiantes</h2>

  <div class="grades-sidebar">
    <div class="grades-row">
      @for (grade of grades; track grade) {
        <div class="grade-section">
          <h3>{{ grade }}</h3>
          <div class="classrooms">
            @for (classroom of classrooms; track classroom) {
              <button
                class="classroom-btn"
                [class.selected]="selectedGrade === grade && selectedClassroom === classroom"
                (click)="selectClassroom(grade, classroom)"
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
    @if (isLoading) {
      <div class="loading-indicator">
        <div class="spinner"></div>
        <p>Cargando estudiantes...</p>
      </div>
    }

    @if (selectedGrade && selectedClassroom && !isLoading) {
      <div class="students-list">
        @if (students.length > 0) {
          <div class="table-container printable-area">
            <div class="table-header">
              <h3>Estudiantes - {{ selectedGrade }} - {{ selectedClassroom }}</h3>
              <button class="add-student-button" (click)="openAddStudentModal()">
                \u2795 Agregar Estudiante
              </button>
            </div>
            <table class="students-table">
              <thead>
                <tr>
                  <th class="number-column">#</th>
                  <th>Nombre Completo</th>
                  <th>Numero de Identidad</th>
                  <th>Sal\xF3n</th>
                  <th>Estado</th>
                  <th class="actions-column">Acciones</th>
                </tr>
              </thead>
              <tbody>
                @for (student of students; track student; let i = $index) {
                <tr>
                  <td class="number-column">{{ i + 1 }}</td>
                  <td>
                    <span class="student-name-cell">
                      {{ student.surname }} {{ student.name }}
                      <span class="parent-status-dot" 
                            [class.has-parent]="student.hasParent" 
                            [class.no-parent]="!student.hasParent"
                            title="{{ student.hasParent ? 'Tiene padre asignado' : 'Sin padre asignado' }}">
                      </span>
                    </span>
                  </td>
                  <td>{{ student.documentNumber || 'No proporcionado' }}</td>
                  <td>{{ student.classGroup }}</td>
                  <td class="status-cell" [class.active-text]="student.active !== false" [class.inactive-text]="student.active === false">
                    {{ student.active !== false ? 'Activo' : 'Inactivo' }}
                  </td>
                  <td class="actions-cell">
                    <span class="action-link edit-text" (click)="openEditStudentModal(student)">Editar</span>
                    <span class="action-link" [class.active-text]="student.active === false" [class.inactive-text]="student.active !== false" (click)="toggleStudentStatus(student)">
                      {{ student.active === false ? 'Activar' : 'Inactivar' }}
                    </span>
                    <span class="action-link delete-text" (click)="deleteStudent(student)">
                      Eliminar
                    </span>
                  </td>
                </tr>
                }
              </tbody>
            </table>
          </div>
        }
        @if (selectedGrade && selectedClassroom && students.length === 0) {
          <div class="no-students-message">
            <div class="no-students-content">
              <h3>No hay estudiantes en este sal\xF3n</h3>
              <p>El grado {{ selectedGrade }} - {{ selectedClassroom }} no tiene estudiantes registrados en el sistema.</p>
              <button class="add-student-button" (click)="openAddStudentModal()">
                \u2795 Agregar Primer Estudiante
              </button>
            </div>
          </div>
        }
      </div>
    }

    @if (!selectedGrade || !selectedClassroom) {
      <div class="students-placeholder">
        <div class="placeholder-content">
          <h3>Selecciona un grado y sal\xF3n</h3>
          <p>Elige un grado de la lista superior y luego selecciona un sal\xF3n para ver los estudiantes</p>
        </div>
      </div>
    }

    @if (showPrintButton && selectedGrade && selectedClassroom && students.length > 0) {
      <div class="print-button-container">
        <button class="print-button" (click)="printStudentsPDF()">
          \u{1F5A8}\uFE0F Imprimir Lista de Estudiantes
        </button>
      </div>
    }
  </div>

  @if (studentToDelete) {
    <div class="modal-overlay" (click)="closeDeleteModal()">
      <div class="modal-content confirm-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Confirmar eliminaci\xF3n</h3>
          <button class="close-button" (click)="closeDeleteModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <p class="confirm-message">
            \xBFEst\xE1 seguro de eliminar al estudiante <strong>{{ studentToDelete.surname }} {{ studentToDelete.name }}</strong>?
          </p>
          <div class="modal-actions">
            <button type="button" class="cancel-button" (click)="closeDeleteModal()">Cancelar</button>
            <button type="button" class="delete-confirm-button" (click)="confirmDelete()">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  }

  @if (showEditStudentModal && studentToEdit) {
    <div class="modal-overlay" (click)="closeEditStudentModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Editar Estudiante</h3>
          <button class="close-button" (click)="closeEditStudentModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <form #editStudentForm="ngForm" (ngSubmit)="updateStudent()">
            <div class="form-group">
              <label for="editStudentName">Nombres: *</label>
              <input type="text" id="editStudentName" name="name"
                [(ngModel)]="studentToEdit.name" required autocomplete="given-name"
                placeholder="Ingrese los nombres del estudiante">
            </div>
            <div class="form-group">
              <label for="editStudentSurname">Apellidos: *</label>
              <input type="text" id="editStudentSurname" name="surname"
                [(ngModel)]="studentToEdit.surname" required autocomplete="family-name"
                placeholder="Ingrese los apellidos del estudiante">
            </div>
            <div class="form-group">
              <label for="editStudentDocument">Numero de Identificacion:</label>
              <input type="text" id="editStudentDocument" name="documentNumber"
                [(ngModel)]="studentToEdit.documentNumber" autocomplete="off"
                placeholder="Ingrese el numero de identificacion">
            </div>
            <div class="modal-actions">
              <button type="button" class="cancel-button" (click)="closeEditStudentModal()">
                Cancelar
              </button>
              <button type="submit" class="save-button" [disabled]="!editStudentForm.valid || isSavingStudent">
                @if (!isSavingStudent) {
                  <span>\u{1F4BE} Guardar Cambios</span>
                }
                @if (isSavingStudent) {
                  <span>Guardando...</span>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }

  @if (showAddStudentModal) {
    <div class="modal-overlay" (click)="closeAddStudentModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Agregar Nuevo Estudiante</h3>
          <button class="close-button" (click)="closeAddStudentModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <form #studentForm="ngForm" (ngSubmit)="addStudent()">
            <div class="form-group">
              <label for="studentGrade">Grado:</label>
              <input type="text" id="studentGrade" name="grade"
                [value]="selectedGrade" readonly class="readonly-input" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="studentClassroom">Sal\xF3n:</label>
              <input type="text" id="studentClassroom" name="classGroup"
                [value]="selectedClassroom" readonly class="readonly-input" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="studentName">Nombres: *</label>
              <input type="text" id="studentName" name="name"
                [(ngModel)]="newStudent.name" required autocomplete="given-name"
                placeholder="Ingrese los nombres del estudiante">
            </div>
            <div class="form-group">
              <label for="studentSurname">Apellidos: *</label>
              <input type="text" id="studentSurname" name="surname"
                [(ngModel)]="newStudent.surname" required autocomplete="family-name"
                placeholder="Ingrese los apellidos del estudiante">
            </div>
            <div class="form-group">
              <label for="studentDocument">Documento de Identidad:</label>
              <input type="text" id="studentDocument" name="documentNumber"
                [(ngModel)]="newStudent.documentNumber" autocomplete="off"
                placeholder="Ingrese el documento de identidad">
            </div>
            <div class="modal-actions">
              <button type="button" class="cancel-button" (click)="closeAddStudentModal()">
                Cancelar
              </button>
              <button type="submit" class="save-button" [disabled]="!studentForm.valid || isSavingStudent">
                @if (!isSavingStudent) {
                  <span>\u{1F4BE} Guardar Estudiante</span>
                }
                @if (isSavingStudent) {
                  <span>Guardando...</span>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }

  @if (showNotification) {
    <div class="notification-overlay" (click)="hideNotification()">
      <div class="notification-content" [class.notification-success]="notificationType === 'success'" [class.notification-error]="notificationType === 'error'" (click)="$event.stopPropagation()">
        <div class="notification-icon">
          @if (notificationType === 'success') {
            <svg class="checkmark" viewBox="0 0 52 52">
              <path class="checkmark__check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          }
          @if (notificationType === 'error') {
            <svg class="error-mark" viewBox="0 0 52 52">
              <path class="error-mark__x" fill="none" d="M16 16l20 20M36 16L16 36"/>
            </svg>
          }
        </div>
        <div class="notification-body">
          <div class="notification-title">{{ notificationType === 'success' ? '\xA1Cambio efectivo!' : '\xA1Error!' }}</div>
          <div class="notification-message">
            {{ notificationMessage }}
          </div>
        </div>
        <button class="notification-close" (click)="hideNotification()">\u2715</button>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/students/students.css */\n.students-container {\n  padding: var(--sp-6) var(--sp-6) var(--sp-8);\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.students-container > h2 {\n  margin: 0 0 var(--sp-6);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n}\n.loading-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 360px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n  margin-bottom: var(--sp-5);\n  animation: fadeIn 0.3s ease-out;\n}\n.spinner {\n  width: 44px;\n  height: 44px;\n  border: 4px solid var(--border);\n  border-top: 4px solid var(--brand);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n  margin-bottom: var(--sp-4);\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-indicator p {\n  margin: 0;\n  color: var(--text-3);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.grades-sidebar {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  overflow-x: auto;\n}\n.grades-row {\n  display: flex;\n  gap: var(--sp-4);\n  flex-wrap: nowrap;\n}\n.grade-section {\n  min-width: 150px;\n  flex: 1;\n  text-align: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4) var(--sp-3);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.grade-section h3 {\n  color: var(--text-2);\n  font-size: 0.95rem;\n  margin: 0 0 var(--sp-3);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.classrooms {\n  display: flex;\n  gap: var(--sp-2);\n  flex-direction: column;\n}\n.classroom-btn {\n  padding: 0.55rem 1rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  background: var(--surface);\n  color: var(--text-2);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n  font-size: 0.85rem;\n}\n.classroom-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.classroom-btn.selected {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n  box-shadow: var(--shadow-xs);\n}\n.classroom-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.right-content {\n  display: flex;\n  flex-direction: column;\n}\n.students-list {\n  flex: 1;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  min-height: 360px;\n}\n.students-placeholder,\n.no-students-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 360px;\n  background: var(--surface);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-sm);\n}\n.placeholder-content,\n.no-students-content {\n  text-align: center;\n  color: var(--text-3);\n  padding: var(--sp-8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.placeholder-content h3,\n.no-students-content h3 {\n  margin: 0;\n  color: var(--text-2);\n  font-size: 1.15rem;\n  font-weight: 700;\n}\n.placeholder-content p,\n.no-students-content p {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: var(--text-3);\n}\n.table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n  flex-wrap: wrap;\n}\n.table-header h3 {\n  margin: 0;\n  color: var(--text-1);\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.add-student-button {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.1rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition:\n    background-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.add-student-button:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.add-student-button:active {\n  transform: translateY(1px);\n}\n.add-student-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.add-student-button:disabled {\n  background: var(--text-4);\n  border-color: var(--text-4);\n  cursor: not-allowed;\n}\n.table-container {\n  margin: var(--sp-4) 0 0;\n}\n.students-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--surface);\n  border-radius: var(--r-md);\n  overflow: hidden;\n  font-size: 0.9rem;\n}\n.students-table th {\n  padding: 0.8rem 1rem;\n  font-weight: 600;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-3);\n  text-align: left;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.students-table th.number-column {\n  text-align: center;\n  width: 60px;\n  min-width: 60px;\n}\n.students-table th.actions-column {\n  text-align: right;\n}\n.students-table th:last-child {\n  text-align: right;\n}\n.students-table td {\n  padding: 0.8rem 1rem;\n  font-size: 0.9rem;\n  color: var(--text-1);\n  border-bottom: 1px solid var(--border);\n}\n.students-table td.number-column {\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-2);\n  background: var(--surface-2);\n}\n.students-table tr:last-child td {\n  border-bottom: none;\n}\n.students-table tbody tr {\n  transition: background-color 0.15s ease;\n}\n.students-table tbody tr:hover {\n  background: var(--brand-50);\n}\n.students-table td.status-cell {\n  text-align: center;\n  font-weight: 600;\n}\n.students-table td.status-cell.active-text {\n  color: var(--success);\n}\n.students-table td.status-cell.inactive-text {\n  color: var(--danger);\n}\n.students-table td.actions-cell {\n  text-align: right;\n  white-space: nowrap;\n  padding: 0.6rem 1rem;\n}\n.action-link {\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n  margin: 0 0 0 var(--sp-3);\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.15s ease;\n}\n.action-link:first-child {\n  margin-left: 0;\n}\n.action-link.edit-text,\n.action-link.active-text {\n  color: var(--brand);\n}\n.action-link.edit-text:hover,\n.action-link.active-text:hover {\n  color: var(--brand-600);\n  text-decoration: underline;\n}\n.action-link.inactive-text {\n  color: var(--success);\n}\n.action-link.inactive-text:hover {\n  color: #15803d;\n  text-decoration: underline;\n}\n.action-link.delete-text {\n  color: var(--danger);\n}\n.action-link.delete-text:hover {\n  color: #b91c1c;\n  text-decoration: underline;\n}\n.action-link:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n  border-radius: 4px;\n}\n.student-name-cell {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.parent-status-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: var(--shadow-xs);\n}\n.parent-status-dot.has-parent {\n  background: var(--success);\n}\n.parent-status-dot.no-parent {\n  background: var(--danger);\n}\n.print-button-container {\n  display: flex;\n  justify-content: center;\n  padding: var(--sp-5) 0 0;\n  width: 100%;\n}\n.print-button {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  padding: 0.6rem 1.2rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.print-button:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.print-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: var(--sp-4);\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: modalSlideIn 0.25s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.confirm-modal.modal-content {\n  max-width: 440px;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n  border-radius: var(--r-md) var(--r-md) 0 0;\n}\n.modal-header h3 {\n  margin: 0;\n  color: var(--text-1);\n  font-size: 1.15rem;\n  font-weight: 700;\n}\n.close-button {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.close-button:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n.close-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.modal-body {\n  padding: var(--sp-5);\n}\n.form-group {\n  margin-bottom: var(--sp-4);\n}\n.form-group label {\n  display: block;\n  margin-bottom: var(--sp-2);\n  font-weight: 600;\n  color: var(--text-2);\n  font-size: 0.85rem;\n}\n.form-group input {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  font-family: inherit;\n  color: var(--text-1);\n  background: var(--surface);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  box-sizing: border-box;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.readonly-input {\n  background: var(--surface-2) !important;\n  color: var(--text-3) !important;\n  cursor: not-allowed;\n}\n.modal-actions {\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: flex-end;\n  margin-top: var(--sp-5);\n  padding-top: var(--sp-4);\n  border-top: 1px solid var(--border);\n}\n.cancel-button {\n  padding: 0.6rem 1.2rem;\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.cancel-button:hover {\n  background: var(--surface-2);\n  border-color: var(--text-3);\n  color: var(--text-1);\n}\n.save-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  padding: 0.6rem 1.2rem;\n  background: var(--brand);\n  color: #fff;\n  border: 1px solid var(--brand);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--shadow-xs);\n  transition: background-color 0.18s ease, box-shadow 0.18s ease;\n}\n.save-button:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.save-button:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.delete-confirm-button {\n  padding: 0.6rem 1.2rem;\n  background: var(--danger);\n  color: #fff;\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-confirm-button:hover {\n  background: #b91c1c;\n}\n.confirm-message {\n  font-size: 0.95rem;\n  color: var(--text-2);\n  line-height: 1.6;\n  text-align: center;\n  margin: 0 0 var(--sp-4);\n}\n.confirm-message strong {\n  color: var(--text-1);\n}\n.notification-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: fadeIn 0.25s ease-out;\n}\n.notification-content {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  padding: var(--sp-5) var(--sp-6);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  max-width: 480px;\n  width: 90%;\n  position: relative;\n  border-left: 5px solid var(--success);\n  animation: notificationSlideIn 0.25s ease-out;\n}\n@keyframes notificationSlideIn {\n  from {\n    transform: translateY(-20px) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.notification-success {\n  border-left-color: var(--success);\n}\n.notification-error {\n  border-left-color: var(--danger);\n}\n.notification-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--success);\n}\n.notification-error .notification-icon {\n  background: var(--danger);\n}\n.checkmark,\n.error-mark {\n  width: 28px;\n  height: 28px;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.checkmark__check {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: checkmarkStroke 0.6s ease forwards;\n}\n.error-mark__x {\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: checkmarkStroke 0.6s ease forwards;\n}\n@keyframes checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.notification-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.notification-success .notification-title {\n  color: #14532d;\n}\n.notification-error .notification-title {\n  color: #7f1d1d;\n}\n.notification-message {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.notification-close {\n  position: absolute;\n  top: var(--sp-3);\n  right: var(--sp-3);\n  background: none;\n  border: none;\n  font-size: 1rem;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 50%;\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.18s ease, color 0.18s ease;\n}\n.notification-close:hover {\n  background: var(--border);\n  color: var(--text-1);\n}\n@media print {\n  .grades-sidebar,\n  .print-button-container,\n  .students-placeholder,\n  .no-students-message {\n    display: none !important;\n  }\n  .students-table {\n    width: 100% !important;\n    border-collapse: collapse !important;\n    font-family: Arial, sans-serif !important;\n  }\n  .students-table th {\n    background: #f0f0f0 !important;\n    font-weight: bold !important;\n    text-align: center !important;\n    border: 1px solid #000 !important;\n    padding: 8px !important;\n    font-size: 12px !important;\n    text-transform: uppercase !important;\n    color: #000 !important;\n  }\n  .students-table td {\n    border: 1px solid #000 !important;\n    padding: 8px !important;\n    font-size: 12px !important;\n    color: #000 !important;\n  }\n  .students-table td.number-column {\n    font-weight: bold !important;\n    text-align: center !important;\n  }\n  .students-table td.status-cell.active-text {\n    color: #155724 !important;\n  }\n  .students-table td.status-cell.inactive-text {\n    color: #856404 !important;\n  }\n  .table-container {\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .table-header {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .students-container {\n    padding: var(--sp-4);\n  }\n  .grades-row {\n    gap: var(--sp-3);\n  }\n  .grade-section {\n    min-width: 120px;\n    padding: var(--sp-3) var(--sp-2);\n  }\n  .grade-section h3 {\n    font-size: 0.8rem;\n  }\n  .classroom-btn {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .students-list {\n    padding: var(--sp-4);\n  }\n  .table-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: var(--sp-3);\n  }\n  .add-student-button {\n    justify-content: center;\n  }\n  .students-table th,\n  .students-table td {\n    padding: 0.7rem 0.75rem;\n    font-size: 0.82rem;\n  }\n  .students-table td.actions-cell .action-link {\n    display: inline-block;\n    margin: 0 0.4rem 0.2rem 0;\n  }\n  .modal-content {\n    width: 100%;\n    max-height: 95vh;\n  }\n  .modal-header {\n    padding: var(--sp-4);\n  }\n  .modal-body {\n    padding: var(--sp-4);\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .cancel-button,\n  .save-button,\n  .delete-confirm-button {\n    width: 100%;\n  }\n  .notification-content {\n    flex-direction: row;\n    padding: var(--sp-4);\n    gap: var(--sp-3);\n  }\n  .notification-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .checkmark,\n  .error-mark {\n    width: 24px;\n    height: 24px;\n  }\n}\n/*# sourceMappingURL=students.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Students, { className: "Students", filePath: "app/students/students.ts", lineNumber: 24 });
})();
export {
  Students
};
//# sourceMappingURL=chunk-KFOYUBVK.js.map
