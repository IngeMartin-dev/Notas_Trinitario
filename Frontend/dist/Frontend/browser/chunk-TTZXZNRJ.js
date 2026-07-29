import {
  NotificationService
} from "./chunk-B2PPFIPW.js";
import {
  RouterModule
} from "./chunk-7DDXMRNS.js";
import {
  GradesUpdateService
} from "./chunk-YHVHY3AS.js";
import {
  AuthService
} from "./chunk-UNKQMH5O.js";
import "./chunk-VCEXV2JC.js";
import {
  DefaultValueAccessor,
  FormsModule,
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
  Component,
  HttpClient,
  effect,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/dashboard/dashboard.ts
var _forTrack0 = ($index, $item) => $item.timestamp;
function Dashboard_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 42);
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideNotification());
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275conditionalCreate(3, Dashboard_Conditional_1_Conditional_3_Template, 2, 0, ":svg:svg", 35);
    \u0275\u0275conditionalCreate(4, Dashboard_Conditional_1_Conditional_4_Template, 2, 0, ":svg:svg", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37)(6, "div", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 40);
    \u0275\u0275listener("click", function Dashboard_Conditional_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
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
    \u0275\u0275conditional(ctx_r1.notificationType === "success" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notificationType === "error" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notificationType === "success" ? "\xA1Cambio efectivo!" : "\xA1Error!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.notificationMessage, " ");
  }
}
function Dashboard_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const letter_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(letter_r3);
  }
}
function Dashboard_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 43);
    \u0275\u0275listener("error", function Dashboard_Conditional_10_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.getCorrectImageUrl((tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.profilePicture), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getUserInitials())("title", ctx_r1.getUserInitials());
  }
}
function Dashboard_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserInitials(), " ");
  }
}
function Dashboard_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("@", ctx_r1.getDisplayUsername());
  }
}
function Dashboard_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subject_r5);
  }
}
function Dashboard_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getHomeroomAssignmentLabel());
  }
}
function Dashboard_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_18_For_2_Template, 2, 1, "span", 44, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(3, Dashboard_Conditional_18_Conditional_3_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.teacherSubjects);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getHomeroomAssignmentLabel() ? 3 : -1);
  }
}
function Dashboard_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function Dashboard_Conditional_19_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCountdownConfig());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_19_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 21);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.countdownEndDate, " ");
  }
}
function Dashboard_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 46)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Dashboard_Conditional_19_Conditional_4_Template, 3, 0, "button", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48)(6, "div", 49)(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 51);
    \u0275\u0275text(10, "D\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 52);
    \u0275\u0275text(12, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 49)(14, "span", 50);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 51);
    \u0275\u0275text(17, "Horas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 52);
    \u0275\u0275text(19, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49)(21, "span", 50);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 51);
    \u0275\u0275text(24, "Min");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 52);
    \u0275\u0275text(26, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 49)(28, "span", 50);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 51);
    \u0275\u0275text(31, "Seg");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(32, Dashboard_Conditional_19_Conditional_32_Template, 4, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.countdownName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin() ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.countdownDays);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.countdownHours);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.countdownMinutes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.countdownSeconds);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.countdownEndDate ? 32 : -1);
  }
}
function Dashboard_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
    \u0275\u0275elementStart(1, "span", 56);
    \u0275\u0275text(2, "---");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.totalStudents);
  }
}
function Dashboard_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
    \u0275\u0275elementStart(1, "span", 56);
    \u0275\u0275text(2, "---");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.totalGrades);
  }
}
function Dashboard_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function Dashboard_Conditional_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCountdownConfig());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Configurar Cron\xF3metro");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function Dashboard_Conditional_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddGradeModal());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2, "grade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Gestionar Calificaciones");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function Dashboard_Conditional_70_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSendNotificationModal());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Enviar Informaci\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_85_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 59)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r10.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r10.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatActivityTime(activity_r10.timestamp));
  }
}
function Dashboard_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Dashboard_Conditional_85_For_1_Template, 9, 3, "div", 57, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.recentActivities);
  }
}
function Dashboard_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 21);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "A\xFAn no hay actividad reciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Las acciones que realices aparecer\xE1n aqu\xED");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_87_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Estudiante");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_87_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Dashboard_Conditional_87_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddStudentModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Dashboard_Conditional_87_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Agregar Nuevo Estudiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Dashboard_Conditional_87_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddStudentModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "form", 65, 0);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_87_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addStudent());
    });
    \u0275\u0275elementStart(10, "div", 66)(11, "div", 67)(12, "label", 68);
    \u0275\u0275text(13, "Nombres: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_87_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newStudent.name, $event) || (ctx_r1.newStudent.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 67)(16, "label", 70);
    \u0275\u0275text(17, "Apellidos: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_87_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newStudent.surname, $event) || (ctx_r1.newStudent.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 66)(20, "div", 67)(21, "label", 72);
    \u0275\u0275text(22, "Grado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_87_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newStudent.grade, $event) || (ctx_r1.newStudent.grade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 74);
    \u0275\u0275text(25, "Grado 1\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 75);
    \u0275\u0275text(27, "Grado 2\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 76);
    \u0275\u0275text(29, "Grado 3\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 77);
    \u0275\u0275text(31, "Grado 4\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 78);
    \u0275\u0275text(33, "Grado 5\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 79);
    \u0275\u0275text(35, "Grado 6\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 80);
    \u0275\u0275text(37, "Grado 7\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 81);
    \u0275\u0275text(39, "Grado 8\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 82);
    \u0275\u0275text(41, "Grado 9\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 83);
    \u0275\u0275text(43, "Grado 10\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 84);
    \u0275\u0275text(45, "Grado 11\xBA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 67)(47, "label", 85);
    \u0275\u0275text(48, "Sal\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_87_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newStudent.classGroup, $event) || (ctx_r1.newStudent.classGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(50, "option", 87);
    \u0275\u0275text(51, "Salon A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 88);
    \u0275\u0275text(53, "Salon B");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 67)(55, "label", 89);
    \u0275\u0275text(56, "Documento de Identidad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_87_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newStudent.documentNumber, $event) || (ctx_r1.newStudent.documentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 91)(59, "button", 92);
    \u0275\u0275listener("click", function Dashboard_Conditional_87_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddStudentModal());
    });
    \u0275\u0275text(60, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 93);
    \u0275\u0275conditionalCreate(62, Dashboard_Conditional_87_Conditional_62_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(63, Dashboard_Conditional_87_Conditional_63_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const studentForm_r12 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newStudent.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newStudent.surname);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newStudent.grade);
    \u0275\u0275advance(26);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newStudent.classGroup);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newStudent.documentNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !studentForm_r12.valid || ctx_r1.isSavingStudent);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isSavingStudent ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSavingStudent ? 63 : -1);
  }
}
function Dashboard_Conditional_88_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E7} Enviar Notificaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_88_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviando...");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Dashboard_Conditional_88_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSendNotificationModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Dashboard_Conditional_88_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Enviar Notificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Dashboard_Conditional_88_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSendNotificationModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "form", 65, 1);
    \u0275\u0275listener("ngSubmit", function Dashboard_Conditional_88_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendNotification());
    });
    \u0275\u0275elementStart(10, "div", 67)(11, "label", 94);
    \u0275\u0275text(12, "T\xEDtulo: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_88_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newNotification.title, $event) || (ctx_r1.newNotification.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 67)(15, "label", 96);
    \u0275\u0275text(16, "Mensaje: *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 97);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_88_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newNotification.message, $event) || (ctx_r1.newNotification.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 67)(19, "label", 98);
    \u0275\u0275text(20, "Dirigido a:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 99);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_88_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newNotification.recipientType, $event) || (ctx_r1.newNotification.recipientType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 100);
    \u0275\u0275text(23, "Padres de Familia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 101);
    \u0275\u0275text(25, "Profesores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 102);
    \u0275\u0275text(27, "Administradores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 103);
    \u0275\u0275text(29, "Todos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 104)(31, "h4");
    \u0275\u0275text(32, "Vista Previa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 105)(34, "div", 106)(35, "span", 21);
    \u0275\u0275text(36, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 107);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 108);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 109)(42, "small");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 91)(45, "button", 92);
    \u0275\u0275listener("click", function Dashboard_Conditional_88_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSendNotificationModal());
    });
    \u0275\u0275text(46, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 93);
    \u0275\u0275conditionalCreate(48, Dashboard_Conditional_88_Conditional_48_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(49, Dashboard_Conditional_88_Conditional_49_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const notificationForm_r14 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newNotification.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newNotification.message);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newNotification.recipientType);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.newNotification.title || "T\xEDtulo de la notificaci\xF3n");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.newNotification.message || "Mensaje de la notificaci\xF3n", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Enviado por: ", ctx_r1.getDisplayName());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !notificationForm_r14.valid || ctx_r1.isSendingNotification);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isSendingNotification ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSendingNotification ? 49 : -1);
  }
}
function Dashboard_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Dashboard_Conditional_89_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddGradeModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Dashboard_Conditional_89_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Gestionar Grados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Dashboard_Conditional_89_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddGradeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "div", 110)(9, "p");
    \u0275\u0275text(10, " Aqu\xED puede administrar los grados del sistema. Por el momento, esta funcionalidad est\xE1 en desarrollo. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 111)(12, "h4");
    \u0275\u0275text(13, "Grados Actuales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 112)(15, "div", 113);
    \u0275\u0275text(16, "Grado 1\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 113);
    \u0275\u0275text(18, "Grado 2\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 113);
    \u0275\u0275text(20, "Grado 3\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 113);
    \u0275\u0275text(22, "Grado 4\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 113);
    \u0275\u0275text(24, "Grado 5\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 113);
    \u0275\u0275text(26, "Grado 6\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 113);
    \u0275\u0275text(28, "Grado 7\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 113);
    \u0275\u0275text(30, "Grado 8\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 113);
    \u0275\u0275text(32, "Grado 9\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 113);
    \u0275\u0275text(34, "Grado 10\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 113);
    \u0275\u0275text(36, "Grado 11\xBA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 91)(38, "button", 114);
    \u0275\u0275listener("click", function Dashboard_Conditional_89_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddGradeModal());
    });
    \u0275\u0275text(39, "Cerrar");
    \u0275\u0275elementEnd()()()()();
  }
}
function Dashboard_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Dashboard_Conditional_90_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddSubjectModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Dashboard_Conditional_90_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Administrar Materias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Dashboard_Conditional_90_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddSubjectModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "div", 110)(9, "p");
    \u0275\u0275text(10, "Funcionalidad para administrar materias. En desarrollo...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 115)(12, "h4");
    \u0275\u0275text(13, "Materias Actuales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 116)(15, "div", 117);
    \u0275\u0275text(16, "Matem\xE1ticas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 117);
    \u0275\u0275text(18, "Espa\xF1ol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 117);
    \u0275\u0275text(20, "Ciencias Naturales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 117);
    \u0275\u0275text(22, "Historia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 117);
    \u0275\u0275text(24, "Educaci\xF3n F\xEDsica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 117);
    \u0275\u0275text(26, "Artes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 117);
    \u0275\u0275text(28, "Ingl\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 117);
    \u0275\u0275text(30, "Educaci\xF3n Religiosa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 91)(32, "button", 114);
    \u0275\u0275listener("click", function Dashboard_Conditional_90_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddSubjectModal());
    });
    \u0275\u0275text(33, "Cerrar");
    \u0275\u0275elementEnd()()()()();
  }
}
function Dashboard_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeViewReportsModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Reportes del Sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeViewReportsModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "div", 118)(9, "h4");
    \u0275\u0275text(10, "\u{1F4CA} Reportes Disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 119)(12, "div", 120);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(13, "div", 121);
    \u0275\u0275text(14, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 122)(16, "h5");
    \u0275\u0275text(17, "Boletines de Calificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Generar boletines individuales por estudiante");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 120);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_div_click_20_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(21, "div", 121);
    \u0275\u0275text(22, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 122)(24, "h5");
    \u0275\u0275text(25, "Listas de Estudiantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "Listar estudiantes por grado y sal\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 120);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(29, "div", 121);
    \u0275\u0275text(30, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 122)(32, "h5");
    \u0275\u0275text(33, "Estad\xEDsticas Generales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Resumen general del sistema");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 120);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(37, "div", 121);
    \u0275\u0275text(38, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 122)(40, "h5");
    \u0275\u0275text(41, "Rendimiento Acad\xE9mico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p");
    \u0275\u0275text(43, "An\xE1lisis de calificaciones por materia");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 91)(45, "button", 123);
    \u0275\u0275listener("click", function Dashboard_Conditional_91_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeViewReportsModal());
    });
    \u0275\u0275text(46, "Cerrar");
    \u0275\u0275elementEnd()()()()();
  }
}
function Dashboard_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Dashboard_Conditional_92_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountdownConfig());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Dashboard_Conditional_92_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "Configurar Cron\xF3metro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Dashboard_Conditional_92_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountdownConfig());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "div", 67)(9, "label", 124);
    \u0275\u0275text(10, "T\xEDtulo del Cron\xF3metro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_92_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countdownName, $event) || (ctx_r1.countdownName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 67)(13, "label", 126);
    \u0275\u0275text(14, "Fecha de Finalizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_92_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countdownTargetDate, $event) || (ctx_r1.countdownTargetDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 67)(17, "label", 128);
    \u0275\u0275text(18, "O d\xEDas restantes (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function Dashboard_Conditional_92_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countdownDaysInput, $event) || (ctx_r1.countdownDaysInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 91)(21, "button", 123);
    \u0275\u0275listener("click", function Dashboard_Conditional_92_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountdownConfig());
    });
    \u0275\u0275text(22, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 114);
    \u0275\u0275listener("click", function Dashboard_Conditional_92_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCountdownConfig());
    });
    \u0275\u0275text(24, "Guardar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countdownName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countdownTargetDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countdownDaysInput);
  }
}
var Dashboard = class _Dashboard {
  // Start with zeros for instant loading
  totalStudents = 0;
  totalGrades = 0;
  totalSubjects = 0;
  totalReports = 0;
  // Track individual data loading states
  studentsLoaded = false;
  reportCardsLoaded = false;
  currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : []);
  authService = inject(AuthService);
  http = inject(HttpClient);
  notificationService = inject(NotificationService);
  gradesUpdateService = inject(GradesUpdateService);
  // Modal states
  showAddStudentModal = false;
  showAddGradeModal = false;
  showAddSubjectModal = false;
  showViewReportsModal = false;
  showSendNotificationModal = false;
  // Add Student Form Data
  newStudent = {
    name: "",
    surname: "",
    documentNumber: "",
    grade: "",
    classGroup: ""
  };
  // Add Grade Form Data
  newGrade = {
    name: "",
    description: ""
  };
  // Add Subject Form Data
  newSubject = {
    name: "",
    code: "",
    grade: "",
    hoursPerWeek: 1,
    credits: 1,
    type: "core"
  };
  isSavingStudent = false;
  isSavingGrade = false;
  isSavingSubject = false;
  isSendingNotification = false;
  // Notification System Variables
  showNotification = false;
  notificationType = null;
  notificationMessage = "";
  // Countdown Timer Variables
  showCountdownTimer = false;
  countdownName = "";
  countdownTargetDate = "";
  countdownDaysInput = 0;
  countdownEndDate = "";
  countdownDays = "00";
  countdownHours = "00";
  countdownMinutes = "00";
  countdownSeconds = "00";
  showCountdownConfigModal = false;
  countdownInterval;
  isAdminUser = false;
  isTeacherUser = false;
  teacherSubjects = [];
  homeroomAssignment = null;
  notification12HoursSent = false;
  notificationFinishedSent = false;
  // Countdown Timer Methods
  loadCountdownConfig() {
    const savedConfig = localStorage.getItem("countdownConfig");
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      this.countdownName = config.name || "";
      this.countdownTargetDate = config.targetDate || "";
      this.notification12HoursSent = localStorage.getItem("countdownNotification12h") === "true";
      this.notificationFinishedSent = localStorage.getItem("countdownNotificationFinished") === "true";
      if (this.countdownName && this.countdownTargetDate) {
        this.showCountdownTimer = true;
        const endDate = new Date(this.countdownTargetDate);
        this.countdownEndDate = endDate.toLocaleDateString("es-CO", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        this.startCountdown();
      }
    }
  }
  openCountdownConfig() {
    this.showCountdownConfigModal = true;
  }
  closeCountdownConfig() {
    this.showCountdownConfigModal = false;
  }
  saveCountdownConfig() {
    if (!this.countdownName) {
      this.showErrorNotification("Por favor ingrese un t\xEDtulo");
      return;
    }
    let targetDate;
    if (this.countdownTargetDate) {
      targetDate = new Date(this.countdownTargetDate);
    } else if (this.countdownDaysInput && this.countdownDaysInput > 0) {
      targetDate = /* @__PURE__ */ new Date();
      targetDate.setDate(targetDate.getDate() + this.countdownDaysInput);
    } else {
      this.showErrorNotification("Por favor ingrese una fecha o d\xEDas");
      return;
    }
    this.notification12HoursSent = false;
    this.notificationFinishedSent = false;
    localStorage.removeItem("countdownNotification12h");
    localStorage.removeItem("countdownNotificationFinished");
    const config = {
      name: this.countdownName,
      targetDate: targetDate.toISOString()
    };
    localStorage.setItem("countdownConfig", JSON.stringify(config));
    this.showCountdownTimer = true;
    this.closeCountdownConfig();
    this.startCountdown();
    this.showSuccessNotification("Cron\xF3metro configurado correctamente");
    const now = /* @__PURE__ */ new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
    let timeRemaining = "";
    if (days > 0) {
      timeRemaining = `${days} d\xEDa${days > 1 ? "s" : ""}, ${hours} hora${hours > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      timeRemaining = `${hours} hora${hours > 1 ? "s" : ""}, ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    } else {
      timeRemaining = `${minutes} minuto${minutes > 1 ? "s" : ""}`;
    }
    const dateStr = targetDate.toLocaleString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    this.notificationService.showNativePushNotification("\u23F0 " + this.countdownName, `Fecha: ${dateStr}. Tiempo: ${timeRemaining}`);
    this.addActivity("timer", `Cron\xF3metro configurado: ${this.countdownName} - ${dateStr}`);
  }
  startCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1e3);
  }
  updateCountdown() {
    if (!this.countdownTargetDate)
      return;
    const target = new Date(this.countdownTargetDate).getTime();
    const now = (/* @__PURE__ */ new Date()).getTime();
    const distance = target - now;
    if (distance < 0) {
      this.countdownDays = "00";
      this.countdownHours = "00";
      this.countdownMinutes = "00";
      this.countdownSeconds = "00";
      if (!this.notificationFinishedSent) {
        this.notificationFinishedSent = true;
        localStorage.setItem("countdownNotificationFinished", "true");
        this.notificationService.showNativePushNotification(this.countdownName, "\xA1El tiempo ha terminado!");
        this.addActivity("check_circle", `Tiempo terminado: ${this.countdownName}`);
      }
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
      return;
    }
    const days = Math.floor(distance / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
    const seconds = Math.floor(distance % (1e3 * 60) / 1e3);
    this.countdownDays = days.toString().padStart(2, "0");
    this.countdownHours = hours.toString().padStart(2, "0");
    this.countdownMinutes = minutes.toString().padStart(2, "0");
    this.countdownSeconds = seconds.toString().padStart(2, "0");
    const twelveHours = 12 * 60 * 60 * 1e3;
    if (distance <= twelveHours && !this.notification12HoursSent) {
      this.notification12HoursSent = true;
      localStorage.setItem("countdownNotification12h", "true");
      let timeText = "";
      if (days > 0) {
        timeText = `${days} d\xEDa(s) y ${hours} hora(s)`;
      } else if (hours > 0) {
        timeText = `${hours} hora(s) y ${minutes} minuto(s)`;
      } else {
        timeText = `${minutes} minuto(s)`;
      }
      this.notificationService.showNativePushNotification(this.countdownName, `Faltan ${timeText}`);
      this.addActivity("schedule", `Recordatorio ${this.countdownName}: Faltan ${timeText}`);
    }
  }
  // Send Notification Form Data
  newNotification = {
    title: "",
    message: "",
    recipientType: "ALL"
  };
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
  // Dynamic Recent Activities
  recentActivities = [];
  ACTIVITIES_KEY = "recent_activities";
  MAX_ACTIVITIES = 5;
  constructor() {
    this.authService.currentUser$.subscribe((user) => {
      console.log("Dashboard - Auth service user updated:", user);
      this.currentUser.set(user);
    });
    this.loadRecentActivities();
    effect(() => {
      this.gradesUpdateService.gradesUpdated();
      this.reportCardsLoaded = false;
      this.loadReportCardCount();
    });
  }
  loadRecentActivities() {
    const saved = localStorage.getItem(this.ACTIVITIES_KEY);
    if (saved) {
      this.recentActivities = JSON.parse(saved);
    } else {
      this.recentActivities = [];
    }
  }
  saveRecentActivities() {
    localStorage.setItem(this.ACTIVITIES_KEY, JSON.stringify(this.recentActivities));
  }
  addActivity(icon, description) {
    const activity = {
      icon,
      description,
      timestamp: Date.now()
    };
    this.recentActivities.unshift(activity);
    if (this.recentActivities.length > this.MAX_ACTIVITIES) {
      this.recentActivities = this.recentActivities.slice(0, this.MAX_ACTIVITIES);
    }
    this.saveRecentActivities();
  }
  // Format timestamp to readable time
  formatActivityTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / (1e3 * 60));
    const hours = Math.floor(diff / (1e3 * 60 * 60));
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    if (minutes < 1) {
      return "Ahora";
    } else if (minutes < 60) {
      return `Hace ${minutes} min`;
    } else if (hours < 24) {
      return `Hace ${hours} hr`;
    } else if (days === 1) {
      return "Ayer";
    } else {
      const date = new Date(timestamp);
      return date.toLocaleDateString("es-CO", { month: "short", day: "numeric" });
    }
  }
  // Greeting with time-based message from IA
  greetingText = "";
  greetingLetters = [];
  greetingLoaded = false;
  generateGreeting() {
    if (this.greetingLoaded)
      return;
    const user = this.currentUser();
    const userId = user?.id ? user.id.toString() : "";
    const userName = user?.name ? user.name.split(" ")[0] : "";
    console.log("\u{1F4E1} Fetching AI-generated greeting from backend...");
    const url = userId ? `http://localhost:8080/api/greeting?userId=${encodeURIComponent(userId)}&userName=${encodeURIComponent(userName)}` : "http://localhost:8080/api/greeting";
    this.http.get(url).subscribe({
      next: (response) => {
        console.log("\u2705 AI Greeting received:", response.message);
        this.greetingText = response.message;
        this.greetingLoaded = true;
        this.animateGreeting(this.greetingText);
      },
      error: (error) => {
        console.warn("\u26A0\uFE0F Failed to fetch AI greeting, using fallback:", error);
        this.generateFallbackGreeting();
      }
    });
  }
  generateFallbackGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    let baseGreeting = "";
    if (hour >= 5 && hour < 12) {
      baseGreeting = "Buenos d\xEDas";
    } else if (hour >= 12 && hour < 18) {
      baseGreeting = "Buenas tardes";
    } else {
      baseGreeting = "Buenas noches";
    }
    const user = this.currentUser();
    const userName = user?.name ? user.name.split(" ")[0] : "";
    this.greetingText = userName ? `${baseGreeting}, ${userName}` : baseGreeting;
    this.greetingLoaded = true;
    this.animateGreeting(this.greetingText);
  }
  animateGreeting(text) {
    this.greetingLetters = [];
    const chars = text.split("");
    const middle = Math.floor(chars.length / 2);
    let delay = 0;
    for (let i = 0; i <= middle; i++) {
      setTimeout(() => {
        if (chars[middle - i])
          this.greetingLetters[middle - i] = chars[middle - i];
        if (chars[middle + i] && i > 0)
          this.greetingLetters[middle + i] = chars[middle + i];
      }, delay);
      delay += 30;
    }
  }
  ngOnInit() {
    console.log("Dashboard - ngOnInit starting...");
    this.generateGreeting();
    this.loadUserData();
    this.loadDashboardData();
    this.loadCountdownConfig();
  }
  loadUserData() {
    this.currentUser.set(null);
    this.teacherSubjects = [];
    this.homeroomAssignment = null;
    if (this.authService.isAuthenticated()) {
      this.authService.getCurrentUser().subscribe({
        next: (user) => {
          console.log("Panel - Usuario cargado:", user);
          if (user && user.id) {
            this.loadHomeroomAssignment(user.id);
            if (user.role && (user.role.name === "TEACHER" || user.role.name === "DIRECTOR_DE_GRUPO")) {
              this.isTeacherUser = true;
              this.loadTeacherSubjects(user.id);
            }
          }
        },
        error: (err) => {
          console.error("Error al cargar el usuario en el panel:", err);
          this.currentUser.set(null);
          this.isTeacherUser = false;
        }
      });
    } else {
      console.log("Usuario no autenticado");
      this.currentUser.set(null);
      this.isTeacherUser = false;
    }
  }
  loadTeacherSubjects(teacherId) {
    this.http.get(`http://localhost:8080/api/subjects/teacher/${teacherId}`).subscribe({
      next: (subjects) => {
        this.teacherSubjects = subjects.filter((s) => s.name && s.name.trim().length > 0).map((s) => s.name.trim());
      },
      error: () => {
        this.teacherSubjects = [];
      }
    });
  }
  loadHomeroomAssignment(userId) {
    this.homeroomAssignment = null;
    this.http.get(`http://localhost:8080/api/homeroom-assignments/by-user/${userId}`).subscribe({
      next: (assignment) => {
        this.homeroomAssignment = assignment;
      },
      error: () => {
        this.homeroomAssignment = null;
      }
    });
  }
  getUserInitials() {
    const user = this.currentUser();
    if (user && user.name && user.surname) {
      return (user.name.charAt(0) + user.surname.charAt(0)).toUpperCase();
    } else if (user && user.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return "";
  }
  getDisplayUsername() {
    const user = this.currentUser();
    if (user && user.username) {
      return user.username;
    }
    return "";
  }
  getDisplayName() {
    const user = this.currentUser();
    if (user) {
      const fullName = `${user.name || ""} ${user.surname || ""}`.trim();
      return fullName || user.username || "Usuario sin nombre";
    }
    return "Usuario sin autenticar";
  }
  getClassroomLetter(classroom) {
    const match = classroom.match(/([A-Za-z])$/);
    return match ? match[1].toUpperCase() : "";
  }
  getHomeroomAssignmentLabel() {
    if (!this.homeroomAssignment)
      return "";
    const grade = this.homeroomAssignment.grade || "";
    const classroomLetter = this.getClassroomLetter(this.homeroomAssignment.classroom || "");
    return `Director ${grade}${classroomLetter ? " " + classroomLetter : ""}`.trim();
  }
  getDisplayRole() {
    const user = this.currentUser();
    if (user && user.role && user.role.name) {
      return this.translateRole(user.role.name);
    }
    return "";
  }
  translateRole(roleName) {
    const roleTranslations = {
      "ADMIN": "Administrador",
      "TEACHER": "Profesor",
      "PARENT": "Padre de Familia",
      "STUDENT": "Estudiante",
      "DIRECTOR_DE_GRUPO": "Director de Grupo"
    };
    return roleTranslations[roleName] || roleName;
  }
  // Helper method to ensure profile picture URLs are correct (same as settings component)
  getCorrectImageUrl(imagePath) {
    if (!imagePath)
      return null;
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    const fullUrl = `http://localhost:8080${imagePath}`;
    console.log("\u{1F527} Dashboard - Converted image URL:", imagePath, "->", fullUrl);
    return fullUrl;
  }
  // Enhanced image error handler with fallback (same as settings component)
  onImageError(event) {
    console.error("\u274C Dashboard - Image failed to load:", event.target.src);
    const img = event.target;
    if (img.src.includes("/uploads/profile-pictures/")) {
      console.log("\u{1F504} Dashboard - Profile picture failed to load, falling back to initials");
      img.style.display = "none";
      const parent = img.parentElement;
      if (parent) {
        const existingInitials = parent.querySelector(".user-initials-fallback");
        if (existingInitials) {
          existingInitials.remove();
        }
        const initialsDiv = document.createElement("div");
        initialsDiv.className = "profile-initials user-initials-fallback";
        initialsDiv.textContent = this.getUserInitials();
        parent.appendChild(initialsDiv);
      }
    }
  }
  loadDashboardData() {
    this.studentsLoaded = false;
    this.reportCardsLoaded = false;
    console.log("=== LOADING ALL DASHBOARD DATA ===");
    this.loadStudentCount();
    this.loadReportCardCount();
    this.totalSubjects = 8;
    this.totalReports = 45;
  }
  loadStudentCount() {
    console.log("\u{1F4CA} Loading student count...");
    const url = "http://localhost:8080/api/students";
    this.http.get(url).subscribe({
      next: (students) => {
        this.totalStudents = students.length;
        this.studentsLoaded = true;
        console.log("\u2705 Student count loaded:", this.totalStudents);
      },
      error: (error) => {
        console.error("\u274C Failed to load student count:", error);
        this.totalStudents = 0;
        this.studentsLoaded = true;
      }
    });
  }
  loadReportCardCount() {
    console.log("\u{1F4CA} Loading grade count...");
    const url = this.isTeacherUser ? "http://localhost:8080/api/grades/count/teacher" : "http://localhost:8080/api/grades/count";
    this.http.get(url).subscribe({
      next: (response) => {
        this.totalGrades = response.count || 0;
        this.reportCardsLoaded = true;
        console.log("\u2705 Grade count loaded:", this.totalGrades);
      },
      error: (error) => {
        console.error("\u274C Failed to load grade count:", error);
        this.totalGrades = 0;
        this.reportCardsLoaded = true;
      }
    });
  }
  // ========== MODAL METHODS ==========
  // Add Student Modal Methods
  openAddStudentModal() {
    console.log("=== OPENING ADD STUDENT MODAL ===");
    this.resetStudentForm();
    this.showAddStudentModal = true;
  }
  closeAddStudentModal() {
    console.log("=== CLOSING ADD STUDENT MODAL ===");
    this.showAddStudentModal = false;
    this.resetStudentForm();
  }
  resetStudentForm() {
    this.newStudent = {
      name: "",
      surname: "",
      documentNumber: "",
      grade: "Grado 1\xBA",
      classGroup: "Salon A"
    };
    this.isSavingStudent = false;
  }
  addStudent() {
    console.log("=== ADDING STUDENT FROM DASHBOARD ===");
    if (!this.newStudent.name || !this.newStudent.surname) {
      alert("Por favor complete los campos obligatorios (nombres y apellidos)");
      return;
    }
    this.isSavingStudent = true;
    const studentData = {
      name: this.newStudent.name.trim(),
      surname: this.newStudent.surname.trim(),
      grade: this.newStudent.grade,
      classGroup: this.newStudent.classGroup,
      documentNumber: this.newStudent.documentNumber?.trim() || null
    };
    const saveUrl = "http://localhost:8080/api/students";
    this.http.post(saveUrl, studentData).subscribe({
      next: (response) => {
        console.log("\u2705 Student added from dashboard:", response);
        this.closeAddStudentModal();
        this.showSuccessNotification(`El estudiante "${studentData.name} ${studentData.surname}" fue agregado correctamente`);
        const gradeText = studentData.grade ? `Grado ${studentData.grade}` : "";
        const classText = studentData.classGroup ? ` - Grupo ${studentData.classGroup}` : "";
        const gradeInfo = gradeText + classText;
        this.notificationService.showNativePushNotification("\u{1F468}\u200D\u{1F393} Nuevo estudiante registrado", `${studentData.name} ${studentData.surname}${gradeInfo ? " - " + gradeInfo : ""}`);
        this.addActivity("person_add", `Nuevo estudiante: ${studentData.name} ${studentData.surname}${gradeInfo ? " (" + gradeInfo + ")" : ""}`);
        this.loadStudentCount();
      },
      error: (error) => {
        console.error("\u274C Failed to add student:", error);
        this.showErrorNotification("Error al agregar el estudiante. Verifique que el servidor est\xE9 ejecut\xE1ndose.");
        this.isSavingStudent = false;
      }
    });
  }
  // Add Grade Modal Methods
  openAddGradeModal() {
    console.log("=== OPENING ADD GRADE MODAL ===");
    this.resetGradeForm();
    this.showAddGradeModal = true;
  }
  closeAddGradeModal() {
    console.log("=== CLOSING ADD GRADE MODAL ===");
    this.showAddGradeModal = false;
    this.resetGradeForm();
  }
  resetGradeForm() {
    this.newGrade = {
      name: "",
      description: ""
    };
    this.isSavingGrade = false;
  }
  addGrade() {
    console.log("=== ADDING GRADE FROM DASHBOARD ===");
    if (!this.newGrade.name) {
      alert("Por favor complete el nombre del grado");
      return;
    }
    this.isSavingGrade = true;
    setTimeout(() => {
      console.log("\u2705 Grade added:", this.newGrade);
      this.closeAddGradeModal();
      alert(`\xA1Grado "${this.newGrade.name}" agregado exitosamente!`);
      this.isSavingGrade = false;
      this.totalSubjects += 1;
    }, 1e3);
  }
  // Add Subject Modal Methods
  openAddSubjectModal() {
    console.log("=== OPENING ADD SUBJECT MODAL ===");
    this.resetSubjectForm();
    this.showAddSubjectModal = true;
  }
  closeAddSubjectModal() {
    console.log("=== CLOSING ADD SUBJECT MODAL ===");
    this.showAddSubjectModal = false;
    this.resetSubjectForm();
  }
  resetSubjectForm() {
    this.newSubject = {
      name: "",
      code: "",
      grade: "Grado 1\xBA",
      hoursPerWeek: 1,
      credits: 1,
      type: "core"
    };
    this.isSavingSubject = false;
  }
  addSubject() {
    console.log("=== ADDING SUBJECT FROM DASHBOARD ===");
    if (!this.newSubject.name || !this.newSubject.code) {
      alert("Por favor complete el nombre y c\xF3digo de la materia");
      return;
    }
    this.isSavingSubject = true;
    setTimeout(() => {
      console.log("\u2705 Subject added:", this.newSubject);
      this.closeAddSubjectModal();
      alert(`\xA1Materia "${this.newSubject.name}" agregada exitosamente!`);
      this.isSavingSubject = false;
      this.totalSubjects += 1;
    }, 1e3);
  }
  // View Reports Modal Methods
  openViewReportsModal() {
    console.log("=== OPENING VIEW REPORTS MODAL ===");
    this.showViewReportsModal = true;
  }
  closeViewReportsModal() {
    console.log("=== CLOSING VIEW REPORTS MODAL ===");
    this.showViewReportsModal = false;
  }
  generateReport() {
    console.log("=== GENERATING REPORT ===");
    alert("Funcionalidad de generaci\xF3n de reportes en desarrollo...");
  }
  // ========== ADMIN METHODS ==========
  isAdmin() {
    const user = this.currentUser();
    return user && user.role && user.role.name === "ADMIN";
  }
  // Send Notification Modal Methods
  openSendNotificationModal() {
    console.log("=== OPENING SEND NOTIFICATION MODAL ===");
    this.resetNotificationForm();
    this.showSendNotificationModal = true;
  }
  closeSendNotificationModal() {
    console.log("=== CLOSING SEND NOTIFICATION MODAL ===");
    this.showSendNotificationModal = false;
    this.resetNotificationForm();
  }
  resetNotificationForm() {
    this.newNotification = {
      title: "",
      message: "",
      recipientType: "ALL"
    };
    this.isSendingNotification = false;
  }
  sendNotification() {
    console.log("=== SENDING NOTIFICATION ===");
    if (!this.newNotification.title || !this.newNotification.message) {
      alert("Por favor complete el t\xEDtulo y mensaje de la notificaci\xF3n");
      return;
    }
    this.isSendingNotification = true;
    const sendNotificationByRole = () => {
      const notificationData = {
        title: this.newNotification.title,
        message: this.newNotification.message,
        type: "ADMIN_MESSAGE",
        recipientType: this.newNotification.recipientType
      };
      return new Promise((resolve, reject) => {
        this.http.post("http://localhost:8080/api/notifications/send", notificationData).subscribe({
          next: (response) => {
            console.log("\u2705 Notifications sent by role:", this.newNotification.recipientType);
            resolve(response);
          },
          error: (error) => {
            console.error("\u274C Failed to send notifications by role:", error);
            reject(error);
          }
        });
      });
    };
    sendNotificationByRole().then(() => {
      console.log("\u2705 All notifications sent successfully by role");
      this.closeSendNotificationModal();
      this.showSuccessAnimation();
      this.isSendingNotification = false;
    }).catch((error) => {
      console.error("\u274C Failed to send notifications by role:", error);
      alert("Error al enviar las notificaciones. Int\xE9ntelo de nuevo.");
      this.isSendingNotification = false;
    });
  }
  showSuccessAnimation() {
    const successDiv = document.createElement("div");
    successDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 30px 50px;
      border-radius: 16px;
      font-size: 20px;
      font-weight: 600;
      z-index: 10000;
      box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);
      animation: successPulse 0.8s ease-out;
      min-width: 300px;
      text-align: center;
    `;
    successDiv.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="checkmark-container" style="
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: checkmarkBounce 0.6s ease-out 0.3s both;
        ">
          <svg class="checkmark" width="32" height="32" viewBox="0 0 52 52" style="
            animation: checkmarkStroke 0.6s ease-out 0.5s both;
          ">
            <path class="checkmark__check" fill="none" d="m9 16 11 11 25-25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div style="font-size: 18px; font-weight: 600;">\xA1Notificaci\xF3n Enviada!</div>
        <div style="font-size: 14px; opacity: 0.9;">Todos los destinatarios recibieron el mensaje</div>
      </div>
    `;
    const style = document.createElement("style");
    style.textContent = `
      @keyframes successPulse {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.3) rotate(-10deg);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1) rotate(2deg);
        }
        100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
      }
      
      @keyframes checkmarkBounce {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.2);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      @keyframes checkmarkStroke {
        0% {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
        }
        100% {
          stroke-dasharray: 166;
          stroke-dashoffset: 0;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(successDiv);
    setTimeout(() => {
      successDiv.style.animation = "successPulse 0.4s ease-out reverse";
      setTimeout(() => {
        successDiv.remove();
        style.remove();
      }, 400);
    }, 3e3);
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 93, vars: 24, consts: [["studentForm", "ngForm"], ["notificationForm", "ngForm"], [1, "dashboard-content"], [1, "notification-overlay"], [1, "user-profile-section"], [1, "profile-greeting"], [1, "greeting-text"], [1, "greeting-letter"], [1, "profile-card"], [1, "profile-main-content"], [1, "profile-avatar"], [1, "profile-image", 3, "src", "alt", "title"], [1, "profile-initials"], [1, "profile-info"], [1, "profile-name"], [1, "profile-role"], [1, "profile-subjects"], [1, "countdown-timer-card"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "material-icons"], [1, "stat-info"], [1, "stat-number"], [1, "quick-actions"], [1, "actions-grid"], [1, "action-btn"], [1, "action-btn", 3, "click"], [1, "recent-activity"], [1, "activity-list"], [1, "empty-activity"], [1, "modal-overlay"], [1, "notification-overlay", 3, "click"], [1, "notification-content", 3, "click"], [1, "notification-icon"], ["viewBox", "0 0 52 52", 1, "checkmark"], ["viewBox", "0 0 52 52", 1, "error-mark"], [1, "notification-body"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"], ["fill", "none", "d", "m14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], ["fill", "none", "d", "M16 16l20 20M36 16L16 36", 1, "error-mark__x"], [1, "profile-image", 3, "error", "src", "alt", "title"], [1, "subject-badge-small"], [1, "subject-badge-small", "director-badge-dashboard"], [1, "countdown-header"], [1, "countdown-config-btn"], [1, "countdown-display"], [1, "countdown-unit"], [1, "countdown-value"], [1, "countdown-label"], [1, "countdown-separator"], [1, "countdown-end-date"], [1, "countdown-config-btn", 3, "click"], [1, "mini-spinner"], [1, "stat-number", "loading"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-content"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "studentName"], ["type", "text", "id", "studentName", "name", "name", "autocomplete", "given-name", "required", "", "placeholder", "Ingrese los nombres", 3, "ngModelChange", "ngModel"], ["for", "studentSurname"], ["type", "text", "id", "studentSurname", "name", "surname", "autocomplete", "family-name", "required", "", "placeholder", "Ingrese los apellidos", 3, "ngModelChange", "ngModel"], ["for", "studentGrade"], ["id", "studentGrade", "name", "grade", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["value", "Grado 1\xBA"], ["value", "Grado 2\xBA"], ["value", "Grado 3\xBA"], ["value", "Grado 4\xBA"], ["value", "Grado 5\xBA"], ["value", "Grado 6\xBA"], ["value", "Grado 7\xBA"], ["value", "Grado 8\xBA"], ["value", "Grado 9\xBA"], ["value", "Grado 10\xBA"], ["value", "Grado 11\xBA"], ["for", "studentClassroom"], ["id", "studentClassroom", "name", "classGroup", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["value", "Salon A"], ["value", "Salon B"], ["for", "studentDocument"], ["type", "text", "id", "studentDocument", "name", "documentNumber", "autocomplete", "off", "placeholder", "Ingrese el documento de identidad", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "cancel-button", 3, "click"], ["type", "submit", 1, "save-button", 3, "disabled"], ["for", "notificationTitle"], ["type", "text", "id", "notificationTitle", "name", "title", "autocomplete", "off", "required", "", "placeholder", "Ingrese el t\xEDtulo de la notificaci\xF3n", 3, "ngModelChange", "ngModel"], ["for", "notificationMessage"], ["id", "notificationMessage", "name", "message", "autocomplete", "off", "required", "", "rows", "4", "placeholder", "Escriba el mensaje de la notificaci\xF3n", 3, "ngModelChange", "ngModel"], ["for", "recipientType"], ["id", "recipientType", "name", "recipientType", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["value", "PARENTS"], ["value", "TEACHERS"], ["value", "ADMINISTRATORS"], ["value", "ALL"], [1, "notification-preview"], [1, "preview-card"], [1, "preview-header"], [1, "preview-title"], [1, "preview-content"], [1, "preview-footer"], [1, "modal-description"], [1, "current-grades"], [1, "grades-list"], [1, "grade-item"], [1, "primary-button", 3, "click"], [1, "current-subjects"], [1, "subjects-list"], [1, "subject-item"], [1, "reports-section"], [1, "reports-grid"], [1, "report-card", 3, "click"], [1, "report-icon"], [1, "report-info"], [1, "cancel-button", 3, "click"], ["for", "countdownName"], ["type", "text", "id", "countdownName", "name", "countdownName", "placeholder", "Ej: Examen Final", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["for", "countdownTargetDate"], ["type", "datetime-local", "id", "countdownTargetDate", "name", "countdownTargetDate", "placeholder", "Seleccionar fecha", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["for", "countdownDaysInput"], ["type", "number", "id", "countdownDaysInput", "name", "countdownDaysInput", "placeholder", "Ej: 30", "min", "1", "autocomplete", "off", 3, "ngModelChange", "ngModel"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275conditionalCreate(1, Dashboard_Conditional_1_Template, 12, 8, "div", 3);
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "h1", 6);
      \u0275\u0275repeaterCreate(5, Dashboard_For_6_Template, 2, 1, "span", 7, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "div", 10);
      \u0275\u0275conditionalCreate(10, Dashboard_Conditional_10_Template, 1, 3, "img", 11);
      \u0275\u0275conditionalCreate(11, Dashboard_Conditional_11_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 13)(13, "h2");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, Dashboard_Conditional_15_Template, 2, 1, "p", 14);
      \u0275\u0275elementStart(16, "p", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, Dashboard_Conditional_18_Template, 4, 1, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, Dashboard_Conditional_19_Template, 33, 7, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "span", 21);
      \u0275\u0275text(24, "school");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 22)(26, "h3");
      \u0275\u0275conditionalCreate(27, Dashboard_Conditional_27_Template, 3, 0);
      \u0275\u0275conditionalCreate(28, Dashboard_Conditional_28_Template, 2, 1, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Estudiantes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 19)(32, "div", 20)(33, "span", 21);
      \u0275\u0275text(34, "assignment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 22)(36, "h3");
      \u0275\u0275conditionalCreate(37, Dashboard_Conditional_37_Template, 3, 0);
      \u0275\u0275conditionalCreate(38, Dashboard_Conditional_38_Template, 2, 1, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Calificaciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 19)(42, "div", 20)(43, "span", 21);
      \u0275\u0275text(44, "menu_book");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 22)(46, "h3");
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p");
      \u0275\u0275text(49, "Materias");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 19)(51, "div", 20)(52, "span", 21);
      \u0275\u0275text(53, "assessment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 22)(55, "h3");
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, "Reportes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div", 24)(60, "h2");
      \u0275\u0275text(61, "Mas Acciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 25);
      \u0275\u0275conditionalCreate(63, Dashboard_Conditional_63_Template, 5, 0, "button", 26);
      \u0275\u0275elementStart(64, "button", 27);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_64_listener() {
        return ctx.openAddStudentModal();
      });
      \u0275\u0275elementStart(65, "span", 21);
      \u0275\u0275text(66, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Agregar Estudiante");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(69, Dashboard_Conditional_69_Template, 5, 0, "button", 26);
      \u0275\u0275conditionalCreate(70, Dashboard_Conditional_70_Template, 5, 0, "button", 26);
      \u0275\u0275elementStart(71, "button", 27);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_71_listener() {
        return ctx.openAddSubjectModal();
      });
      \u0275\u0275elementStart(72, "span", 21);
      \u0275\u0275text(73, "library_books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75, "Administrar Materias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 27);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_76_listener() {
        return ctx.openViewReportsModal();
      });
      \u0275\u0275elementStart(77, "span", 21);
      \u0275\u0275text(78, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span");
      \u0275\u0275text(80, "Ver Reportes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "div", 28)(82, "h2");
      \u0275\u0275text(83, "Actividad Reciente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 29);
      \u0275\u0275conditionalCreate(85, Dashboard_Conditional_85_Template, 2, 0)(86, Dashboard_Conditional_86_Template, 7, 0, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(87, Dashboard_Conditional_87_Template, 64, 8, "div", 31);
      \u0275\u0275conditionalCreate(88, Dashboard_Conditional_88_Template, 50, 9, "div", 31);
      \u0275\u0275conditionalCreate(89, Dashboard_Conditional_89_Template, 40, 0, "div", 31);
      \u0275\u0275conditionalCreate(90, Dashboard_Conditional_90_Template, 34, 0, "div", 31);
      \u0275\u0275conditionalCreate(91, Dashboard_Conditional_91_Template, 47, 0, "div", 31);
      \u0275\u0275conditionalCreate(92, Dashboard_Conditional_92_Template, 25, 3, "div", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showNotification ? 1 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.greetingLetters);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_2_0 = ctx.currentUser()) == null ? null : tmp_2_0.profilePicture) ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!((tmp_3_0 = ctx.currentUser()) == null ? null : tmp_3_0.profilePicture) ? 11 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getDisplayName());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getDisplayUsername() ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getDisplayRole());
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.isTeacherUser || ctx.homeroomAssignment) && (ctx.teacherSubjects.length > 0 || ctx.homeroomAssignment) ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCountdownTimer ? 19 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.studentsLoaded ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.studentsLoaded ? 28 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.reportCardsLoaded ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.reportCardsLoaded ? 38 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalSubjects);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalReports);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isAdmin() ? 63 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.isAdmin() ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin() ? 70 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.recentActivities.length > 0 ? 85 : 86);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAddStudentModal ? 87 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSendNotificationModal ? 88 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddGradeModal ? 89 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddSubjectModal ? 90 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showViewReportsModal ? 91 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCountdownConfigModal ? 92 : -1);
    }
  }, dependencies: [RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: ['\n\n.dashboard-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  position: relative;\n}\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #3054f3 0%,\n      #764ba2 50%,\n      #f093fb 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: #3f51b5;\n  background-clip: text;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n.greeting-letter[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_letterPopIn 0.8s ease-out forwards;\n  opacity: 0;\n  transform: scale(0.5);\n}\n@keyframes _ngcontent-%COMP%_letterPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.5) translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_notificationFadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_notificationFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.notification-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 30px 40px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 500px;\n  width: 90%;\n  animation: _ngcontent-%COMP%_notificationSlideIn 0.3s ease-out;\n  position: relative;\n}\n@keyframes _ngcontent-%COMP%_notificationSlideIn {\n  from {\n    transform: translateY(-30px) scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-left: 5px solid #28a745;\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-left: 5px solid #dc3545;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.notification-success[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #28a745,\n      #20c997);\n}\n.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545,\n      #fd7e14);\n}\n.checkmark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.checkmark__check[_ngcontent-%COMP%] {\n  stroke: white;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_checkmarkStroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.error-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.error-mark__x[_ngcontent-%COMP%] {\n  stroke: white;\n  stroke-width: 3;\n  stroke-linecap: round;\n  fill: none;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_errorMarkStroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_errorMarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a202c;\n  letter-spacing: -0.025em;\n}\n.notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #155724;\n}\n.notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  line-height: 1.4;\n}\n.notification-success[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: #155724;\n}\n.notification-error[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n  color: #495057;\n}\n.countdown-timer-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-width: 280px;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-unit[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 45px;\n  text-align: center;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n  line-height: 1;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-separator[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  opacity: 0.6;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-end-date[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-end-date[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-config-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.countdown-timer-card[_ngcontent-%COMP%]   .countdown-config-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n}\n.countdown-timer-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 30px;\n  margin-top: 30px;\n  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);\n}\n.countdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.countdown-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.countdown-end-date[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.countdown-end-date[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.countdown-config-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.countdown-config-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.countdown-config-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n.countdown-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.countdown-unit[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  padding: 15px 20px;\n  min-width: 80px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.countdown-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 36px;\n  font-weight: 700;\n  color: white;\n  line-height: 1;\n}\n.countdown-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.countdown-separator[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: white;\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .countdown-timer-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .countdown-unit[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    min-width: 60px;\n  }\n  .countdown-value[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .countdown-label[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .countdown-separator[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.countdown-setup-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n.countdown-setup-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 16px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.countdown-setup-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n.countdown-setup-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.mini-spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.stat-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 40px;\n  text-align: left;\n}\n.stat-number.loading[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  margin: 0;\n  min-height: 38px;\n}\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.user-profile-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1b6aeb 0%,\n      #257bf3 100%);\n  border-radius: 16px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  box-shadow: 0 8px 32px rgba(27, 106, 235, 0.2);\n  color: white;\n}\n.profile-main-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.profile-main-content[_ngcontent-%COMP%]   .countdown-timer-card[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.profile-greeting[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  margin-bottom: 8px;\n}\n.profile-greeting[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 0;\n  display: inline;\n  font-family: inherit;\n  letter-spacing: 1px;\n}\n.profile-greeting[_ngcontent-%COMP%]   .greeting-letter[_ngcontent-%COMP%] {\n  display: inline;\n  animation: _ngcontent-%COMP%_letterPopIn 0.3s ease-out forwards;\n  opacity: 0;\n  transform: scale(0.5);\n}\n@keyframes _ngcontent-%COMP%_letterPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.5) translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 150px;\n}\n.profile-card[_ngcontent-%COMP%]   .countdown-timer-card[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n}\n.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.profile-initials[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n}\n.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.profile-initials[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.profile-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.profile-name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 4px 0;\n}\n.profile-role[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  margin: 0;\n  font-weight: 400;\n}\n.profile-subjects[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin: 0.4rem 0 0;\n  padding: 0;\n}\n.subject-badge-small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.subject-badge-small.director-badge-dashboard[_ngcontent-%COMP%] {\n  background: rgba(254, 243, 199, 0.25);\n  border-color: rgba(252, 211, 77, 0.6);\n  color: #fff7ed;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n}\n.dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 18px;\n  margin: 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.quick-actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  color: #374151;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: #f0f9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.1);\n}\n.action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #3b82f6;\n}\n.action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n}\n.recent-activity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.activity-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid #e2e8f0;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.activity-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 14px;\n  margin: 0 0 4px 0;\n  font-weight: 500;\n}\n.activity-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.empty-activity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty-activity[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #64748b;\n  font-weight: 500;\n}\n.empty-activity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n@media (max-width: 768px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    padding: 15px;\n    max-width: 100%;\n  }\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 15px;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .activity-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n  }\n  .empty-activity[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 30px 20px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e293b;\n  font-size: 20px;\n  font-weight: 600;\n}\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #64748b;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid #e2e8f0;\n}\n.cancel-button[_ngcontent-%COMP%], \n.save-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.save-button[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.save-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.save-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.modal-description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #f0f9ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 6px;\n}\n.modal-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e40af;\n  font-size: 14px;\n}\n.current-grades[_ngcontent-%COMP%], \n.current-subjects[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.current-grades[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.current-subjects[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #374151;\n  font-size: 16px;\n}\n.grades-list[_ngcontent-%COMP%], \n.subjects-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.grade-item[_ngcontent-%COMP%], \n.subject-item[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.reports-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #374151;\n  font-size: 18px;\n}\n.reports-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.report-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.report-card[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff;\n  border-color: #3b82f6;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);\n}\n.report-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.report-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 600;\n}\n.report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 12px;\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 10px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-button[_ngcontent-%COMP%], \n   .save-button[_ngcontent-%COMP%], \n   .primary-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .reports-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .report-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n}\n[data-theme="dark"][_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  text-shadow: 0 0 16px rgba(56, 189, 248, 0.2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(6, 182, 212, 0.4);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55), 0 0 22px rgba(6, 182, 212, 0.2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .stat-icon[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand) 0%,\n      var(--brand-600) 100%);\n  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.4);\n  color: #04141a;\n}\n[data-theme="dark"][_nghost-%COMP%]   .stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  text-shadow: 0 0 12px rgba(56, 189, 248, 0.15);\n}\n[data-theme="dark"][_nghost-%COMP%]   .stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .quick-actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .quick-actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .recent-activity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .recent-activity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 2px solid var(--border-strong);\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  color: var(--brand-500);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(6, 182, 212, 0.18), 0 0 18px rgba(6, 182, 212, 0.2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-500);\n  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.45));\n}\n[data-theme="dark"][_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, [data-theme="dark"]   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: inherit;\n}\n[data-theme="dark"][_nghost-%COMP%]   .activity-item[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .activity-item[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .activity-item[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .activity-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(6, 182, 212, 0.4);\n  box-shadow: 0 0 18px rgba(6, 182, 212, 0.15);\n}\n[data-theme="dark"][_nghost-%COMP%]   .activity-icon[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--success) 0%,\n      #059669 100%);\n  color: #04231a;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .activity-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .activity-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .activity-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .activity-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .empty-activity[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .empty-activity[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .empty-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .empty-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .empty-activity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .empty-activity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .mini-spinner[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .mini-spinner[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.25);\n  border-top-color: var(--brand);\n}\n[data-theme="dark"][_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1b6aeb 60%,\n      #06b6d4 100%);\n  box-shadow: 0 8px 32px rgba(6, 182, 212, 0.18);\n  border: 1px solid rgba(6, 182, 212, 0.25);\n}\n[data-theme="dark"][_nghost-%COMP%]   .profile-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .profile-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n[data-theme="dark"][_nghost-%COMP%]   .profile-name[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  color: rgba(241, 245, 249, 0.9);\n}\n[data-theme="dark"][_nghost-%COMP%]   .profile-role[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .profile-role[_ngcontent-%COMP%] {\n  color: rgba(241, 245, 249, 0.7);\n}\n[data-theme="dark"][_nghost-%COMP%]   .countdown-timer-section[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .countdown-timer-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1559c9 0%,\n      #6d28d9 100%);\n  box-shadow: 0 10px 40px rgba(109, 40, 217, 0.35);\n}\n[data-theme="dark"][_nghost-%COMP%]   .countdown-setup-btn[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .countdown-setup-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #a855f7 100%);\n  color: #04141a;\n  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .countdown-setup-btn[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .countdown-setup-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 22px rgba(168, 85, 247, 0.55);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  background: rgba(3, 7, 18, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-lg), 0 0 40px rgba(6, 182, 212, 0.08);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border-bottom-color: var(--border);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .close-button[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: var(--border-strong);\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--bg);\n  color: var(--text-1);\n  border-color: var(--border-strong);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, [data-theme="dark"]   [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n[data-theme="dark"][_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, [data-theme="dark"]   [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2), 0 0 14px rgba(6, 182, 212, 0.25);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-actions[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  border-top-color: var(--border);\n}\n[data-theme="dark"][_nghost-%COMP%]   .cancel-button[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n}\n[data-theme="dark"][_nghost-%COMP%]   .cancel-button[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .cancel-button[_ngcontent-%COMP%]:hover {\n  background: var(--border-strong);\n}\n[data-theme="dark"][_nghost-%COMP%]   .save-button[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #04141a;\n  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);\n}\n[data-theme="dark"][_nghost-%COMP%]   .save-button[_ngcontent-%COMP%]:hover:not(:disabled), [data-theme="dark"]   [_nghost-%COMP%]   .save-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-500);\n}\n[data-theme="dark"][_nghost-%COMP%]   .primary-button[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: #04231a;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n[data-theme="dark"][_nghost-%COMP%]   .primary-button[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .primary-button[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-description[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-description[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n}\n[data-theme="dark"][_nghost-%COMP%]   .modal-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .modal-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--brand-500);\n}\n[data-theme="dark"][_nghost-%COMP%]   .current-grades[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .current-grades[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .current-subjects[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .current-subjects[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .reports-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .reports-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .grade-item[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .grade-item[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .subject-item[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .subject-item[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n}\n[data-theme="dark"][_nghost-%COMP%]   .report-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .report-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n}\n[data-theme="dark"][_nghost-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .report-card[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n  border-color: var(--brand);\n  box-shadow: 0 0 16px rgba(6, 182, 212, 0.18);\n}\n[data-theme="dark"][_nghost-%COMP%]   .report-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .report-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-content[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-lg);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-title[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .notification-success[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-success[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .notification-error[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-error[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-message[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-close[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-close[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-close[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .notification-close[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [RouterModule, FormsModule], template: `<div class="dashboard-content">
  <!-- Custom Notification System -->
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

  <!-- User Profile Section -->
  <div class="user-profile-section">
    <!-- Greeting - outside the profile card -->
    <div class="profile-greeting">
      <h1 class="greeting-text">
        @for (letter of greetingLetters; track $index) {
          <span class="greeting-letter">{{ letter }}</span>
        }
      </h1>
    </div>
    <div class="profile-card">
      <!-- Profile avatar and info side by side -->
      <div class="profile-main-content">
        <div class="profile-avatar">
        @if (currentUser()?.profilePicture) {
          <img
            [src]="getCorrectImageUrl(currentUser()?.profilePicture)"
            [alt]="getUserInitials()"
            [title]="getUserInitials()"
            class="profile-image"
            (error)="onImageError($event)"
          />
        }
        @if (!currentUser()?.profilePicture) {
          <div class="profile-initials">
            {{ getUserInitials() }}
          </div>
        }
      </div>
      <div class="profile-info">
        <h2>{{ getDisplayName() }}</h2>
        @if (getDisplayUsername()) {
          <p class="profile-name">@{{ getDisplayUsername() }}</p>
        }
        <p class="profile-role">{{ getDisplayRole() }}</p>
        @if ((isTeacherUser || homeroomAssignment) && (teacherSubjects.length > 0 || homeroomAssignment)) {
          <p class="profile-subjects">
            @for (subject of teacherSubjects; track $index) {
              <span class="subject-badge-small">{{ subject }}</span>
            }
            @if (getHomeroomAssignmentLabel()) {
              <span class="subject-badge-small director-badge-dashboard">{{ getHomeroomAssignmentLabel() }}</span>
            }
          </p>
        }
      </div>
      
      <!-- Countdown Timer inside Profile Main Content, aligned with name and photo -->
      @if (showCountdownTimer) {
        <div class="countdown-timer-card">
          <div class="countdown-header">
            <h3>{{ countdownName }}</h3>
            @if (isAdmin()) {
              <button class="countdown-config-btn" (click)="openCountdownConfig()">
                <span class="material-icons">edit</span>
              </button>
            }
          </div>
          <div class="countdown-display">
            <div class="countdown-unit">
              <span class="countdown-value">{{ countdownDays }}</span>
              <span class="countdown-label">D\xEDas</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-unit">
              <span class="countdown-value">{{ countdownHours }}</span>
              <span class="countdown-label">Horas</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-unit">
              <span class="countdown-value">{{ countdownMinutes }}</span>
              <span class="countdown-label">Min</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-unit">
              <span class="countdown-value">{{ countdownSeconds }}</span>
              <span class="countdown-label">Seg</span>
            </div>
          </div>
          @if (countdownEndDate) {
            <div class="countdown-end-date">
              <span class="material-icons">event</span>
              {{ countdownEndDate }}
            </div>
          }
        </div>
      }
      </div>
    </div>
  </div>

  <!-- Statistics Cards -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">
        <span class="material-icons">school</span>
      </div>
      <div class="stat-info">
        <h3>
          @if (!studentsLoaded) {
            <span class="mini-spinner"></span>
            <span class="stat-number loading">---</span>
          }
          @if (studentsLoaded) {
            <span class="stat-number">{{ totalStudents }}</span>
          }
        </h3>
        <p>Estudiantes</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <span class="material-icons">assignment</span>
      </div>
      <div class="stat-info">
        <h3>
          @if (!reportCardsLoaded) {
            <span class="mini-spinner"></span>
            <span class="stat-number loading">---</span>
          }
          @if (reportCardsLoaded) {
            <span class="stat-number">{{ totalGrades }}</span>
          }
        </h3>
        <p>Calificaciones</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <span class="material-icons">menu_book</span>
      </div>
      <div class="stat-info">
        <h3>{{ totalSubjects }}</h3>
        <p>Materias</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <span class="material-icons">assessment</span>
      </div>
      <div class="stat-info">
        <h3>{{ totalReports }}</h3>
        <p>Reportes</p>
      </div>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="quick-actions">
    <h2>Mas Acciones</h2>
    <div class="actions-grid">
      @if (isAdmin()) {
        <button class="action-btn" (click)="openCountdownConfig()">
          <span class="material-icons">schedule</span>
          <span>Configurar Cron\xF3metro</span>
        </button>
      }

      <button class="action-btn" (click)="openAddStudentModal()">
        <span class="material-icons">person_add</span>
        <span>Agregar Estudiante</span>
      </button>

      @if (!isAdmin()) {
        <button class="action-btn" (click)="openAddGradeModal()">
          <span class="material-icons">grade</span>
          <span>Gestionar Calificaciones</span>
        </button>
      }

      @if (isAdmin()) {
        <button class="action-btn" (click)="openSendNotificationModal()">
          <span class="material-icons">notifications</span>
          <span>Enviar Informaci\xF3n</span>
        </button>
      }

      <button class="action-btn" (click)="openAddSubjectModal()">
        <span class="material-icons">library_books</span>
        <span>Administrar Materias</span>
      </button>

      <button class="action-btn" (click)="openViewReportsModal()">
        <span class="material-icons">bar_chart</span>
        <span>Ver Reportes</span>
      </button>
    </div>
  </div>

  <!-- Recent Activity -->
  <div class="recent-activity">
    <h2>Actividad Reciente</h2>
    <div class="activity-list">
      @if (recentActivities.length > 0) {
        @for (activity of recentActivities; track activity.timestamp) {
          <div class="activity-item">
            <div class="activity-icon">
              <span class="material-icons">{{ activity.icon }}</span>
            </div>
            <div class="activity-content">
              <p>{{ activity.description }}</p>
              <small>{{ formatActivityTime(activity.timestamp) }}</small>
            </div>
          </div>
        }
      } @else {
        <div class="empty-activity">
          <span class="material-icons">history</span>
          <p>A\xFAn no hay actividad reciente</p>
          <small>Las acciones que realices aparecer\xE1n aqu\xED</small>
        </div>
      }
    </div>
  </div>
  <!-- ========== MODAL FORMS ========== -->

  <!-- Add Student Modal -->
  @if (showAddStudentModal) {
    <div class="modal-overlay" (click)="closeAddStudentModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Agregar Nuevo Estudiante</h3>
          <button class="close-button" (click)="closeAddStudentModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <form #studentForm="ngForm" (ngSubmit)="addStudent()">
            <div class="form-row">
              <div class="form-group">
                <label for="studentName">Nombres: *</label>
                 <input
                   type="text"
                   id="studentName"
                   name="name"
                   [(ngModel)]="newStudent.name"
                   autocomplete="given-name"
                   required
                   placeholder="Ingrese los nombres"
                 />
              </div>
              <div class="form-group">
                <label for="studentSurname">Apellidos: *</label>
                 <input
                   type="text"
                   id="studentSurname"
                   name="surname"
                   [(ngModel)]="newStudent.surname"
                   autocomplete="family-name"
                   required
                   placeholder="Ingrese los apellidos"
                 />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="studentGrade">Grado:</label>
                <select id="studentGrade" name="grade" [(ngModel)]="newStudent.grade" autocomplete="off">
                  <option value="Grado 1\xBA">Grado 1\xBA</option>
                  <option value="Grado 2\xBA">Grado 2\xBA</option>
                  <option value="Grado 3\xBA">Grado 3\xBA</option>
                  <option value="Grado 4\xBA">Grado 4\xBA</option>
                  <option value="Grado 5\xBA">Grado 5\xBA</option>
                  <option value="Grado 6\xBA">Grado 6\xBA</option>
                  <option value="Grado 7\xBA">Grado 7\xBA</option>
                  <option value="Grado 8\xBA">Grado 8\xBA</option>
                  <option value="Grado 9\xBA">Grado 9\xBA</option>
                  <option value="Grado 10\xBA">Grado 10\xBA</option>
                  <option value="Grado 11\xBA">Grado 11\xBA</option>
                </select>
              </div>
              <div class="form-group">
                <label for="studentClassroom">Sal\xF3n:</label>
                <select id="studentClassroom" name="classGroup" [(ngModel)]="newStudent.classGroup" autocomplete="off">
                  <option value="Salon A">Salon A</option>
                  <option value="Salon B">Salon B</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="studentDocument">Documento de Identidad:</label>
              <input
                type="text"
                id="studentDocument"
                name="documentNumber"
                [(ngModel)]="newStudent.documentNumber"
                autocomplete="off"
                placeholder="Ingrese el documento de identidad"
              />
            </div>
            <div class="modal-actions">
              <button type="button" class="cancel-button" (click)="closeAddStudentModal()">
                Cancelar
              </button>
              <button
                type="submit"
                class="save-button"
                [disabled]="!studentForm.valid || isSavingStudent"
              >
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

  <!-- Send Notification Modal -->
  @if (showSendNotificationModal) {
    <div class="modal-overlay" (click)="closeSendNotificationModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Enviar Notificaci\xF3n</h3>
          <button class="close-button" (click)="closeSendNotificationModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <form #notificationForm="ngForm" (ngSubmit)="sendNotification()">
            <div class="form-group">
              <label for="notificationTitle">T\xEDtulo: *</label>
              <input
                type="text"
                id="notificationTitle"
                name="title"
                [(ngModel)]="newNotification.title"
                autocomplete="off"
                required
                placeholder="Ingrese el t\xEDtulo de la notificaci\xF3n"
              />
            </div>
            <div class="form-group">
              <label for="notificationMessage">Mensaje: *</label>
              <textarea
                id="notificationMessage"
                name="message"
                [(ngModel)]="newNotification.message"
                autocomplete="off"
                required
                rows="4"
                placeholder="Escriba el mensaje de la notificaci\xF3n"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="recipientType">Dirigido a:</label>
                <select
                  id="recipientType"
                  name="recipientType"
                  [(ngModel)]="newNotification.recipientType"
                  autocomplete="off"
                >
                <option value="PARENTS">Padres de Familia</option>
                <option value="TEACHERS">Profesores</option>
                <option value="ADMINISTRATORS">Administradores</option>
                <option value="ALL">Todos</option>
              </select>
            </div>
            <div class="notification-preview">
              <h4>Vista Previa:</h4>
              <div class="preview-card">
                <div class="preview-header">
                  <span class="material-icons">notifications</span>
                  <span class="preview-title">{{
                    newNotification.title || 'T\xEDtulo de la notificaci\xF3n'
                  }}</span>
                </div>
                <div class="preview-content">
                  {{ newNotification.message || 'Mensaje de la notificaci\xF3n' }}
                </div>
                <div class="preview-footer">
                  <small>Enviado por: {{ getDisplayName() }}</small>
                </div>
              </div>
            </div>
            <div class="modal-actions">
              <button type="button" class="cancel-button" (click)="closeSendNotificationModal()">
                Cancelar
              </button>
              <button
                type="submit"
                class="save-button"
                [disabled]="!notificationForm.valid || isSendingNotification"
              >
                @if (!isSendingNotification) {
                  <span>\u{1F4E7} Enviar Notificaci\xF3n</span>
                }
                @if (isSendingNotification) {
                  <span>Enviando...</span>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }

  <!-- Add Grade Modal -->
  @if (showAddGradeModal) {
    <div class="modal-overlay" (click)="closeAddGradeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Gestionar Grados</h3>
          <button class="close-button" (click)="closeAddGradeModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <div class="modal-description">
            <p>
              Aqu\xED puede administrar los grados del sistema. Por el momento, esta funcionalidad est\xE1
              en desarrollo.
            </p>
          </div>
          <div class="current-grades">
            <h4>Grados Actuales:</h4>
            <div class="grades-list">
              <div class="grade-item">Grado 1\xBA</div>
              <div class="grade-item">Grado 2\xBA</div>
              <div class="grade-item">Grado 3\xBA</div>
              <div class="grade-item">Grado 4\xBA</div>
              <div class="grade-item">Grado 5\xBA</div>
              <div class="grade-item">Grado 6\xBA</div>
              <div class="grade-item">Grado 7\xBA</div>
              <div class="grade-item">Grado 8\xBA</div>
              <div class="grade-item">Grado 9\xBA</div>
              <div class="grade-item">Grado 10\xBA</div>
              <div class="grade-item">Grado 11\xBA</div>
            </div>
          </div>
          <div class="modal-actions">
            <button class="primary-button" (click)="closeAddGradeModal()">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  }

  <!-- Add Subject Modal -->
  @if (showAddSubjectModal) {
    <div class="modal-overlay" (click)="closeAddSubjectModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Administrar Materias</h3>
          <button class="close-button" (click)="closeAddSubjectModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <div class="modal-description">
            <p>Funcionalidad para administrar materias. En desarrollo...</p>
          </div>
          <div class="current-subjects">
            <h4>Materias Actuales:</h4>
            <div class="subjects-list">
              <div class="subject-item">Matem\xE1ticas</div>
              <div class="subject-item">Espa\xF1ol</div>
              <div class="subject-item">Ciencias Naturales</div>
              <div class="subject-item">Historia</div>
              <div class="subject-item">Educaci\xF3n F\xEDsica</div>
              <div class="subject-item">Artes</div>
              <div class="subject-item">Ingl\xE9s</div>
              <div class="subject-item">Educaci\xF3n Religiosa</div>
            </div>
          </div>
          <div class="modal-actions">
            <button class="primary-button" (click)="closeAddSubjectModal()">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  }

  <!-- View Reports Modal -->
  @if (showViewReportsModal) {
    <div class="modal-overlay" (click)="closeViewReportsModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Reportes del Sistema</h3>
          <button class="close-button" (click)="closeViewReportsModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <div class="reports-section">
            <h4>\u{1F4CA} Reportes Disponibles</h4>
            <div class="reports-grid">
              <div class="report-card" (click)="generateReport()">
                <div class="report-icon">\u{1F4CB}</div>
                <div class="report-info">
                  <h5>Boletines de Calificaciones</h5>
                  <p>Generar boletines individuales por estudiante</p>
                </div>
              </div>
              <div class="report-card" (click)="generateReport()">
                <div class="report-icon">\u{1F465}</div>
                <div class="report-info">
                  <h5>Listas de Estudiantes</h5>
                  <p>Listar estudiantes por grado y sal\xF3n</p>
                </div>
              </div>
              <div class="report-card" (click)="generateReport()">
                <div class="report-icon">\u{1F4C8}</div>
                <div class="report-info">
                  <h5>Estad\xEDsticas Generales</h5>
                  <p>Resumen general del sistema</p>
                </div>
              </div>
              <div class="report-card" (click)="generateReport()">
                <div class="report-icon">\u{1F3C6}</div>
                <div class="report-info">
                  <h5>Rendimiento Acad\xE9mico</h5>
                  <p>An\xE1lisis de calificaciones por materia</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-actions">
            <button class="cancel-button" (click)="closeViewReportsModal()">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  }

  <!-- Countdown Config Modal -->
  @if (showCountdownConfigModal) {
    <div class="modal-overlay" (click)="closeCountdownConfig()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Configurar Cron\xF3metro</h3>
          <button class="close-button" (click)="closeCountdownConfig()">\u2715</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="countdownName">T\xEDtulo del Cron\xF3metro</label>
            <input type="text" id="countdownName" name="countdownName" [(ngModel)]="countdownName" placeholder="Ej: Examen Final" autocomplete="off" />
          </div>
            <div class="form-group">
              <label for="countdownTargetDate">Fecha de Finalizaci\xF3n</label>
              <input type="datetime-local" id="countdownTargetDate" name="countdownTargetDate" [(ngModel)]="countdownTargetDate" placeholder="Seleccionar fecha" autocomplete="off" />
            </div>
          <div class="form-group">
            <label for="countdownDaysInput">O d\xEDas restantes (opcional)</label>
            <input type="number" id="countdownDaysInput" name="countdownDaysInput" [(ngModel)]="countdownDaysInput" placeholder="Ej: 30" min="1" autocomplete="off" />
          </div>
          <div class="modal-actions">
            <button class="cancel-button" (click)="closeCountdownConfig()">Cancelar</button>
            <button class="primary-button" (click)="saveCountdownConfig()">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/dashboard/dashboard.css */\n.dashboard-content {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  position: relative;\n}\n.greeting-text {\n  font-size: 1.1rem;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #3054f3 0%,\n      #764ba2 50%,\n      #f093fb 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: #3f51b5;\n  background-clip: text;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n.greeting-letter {\n  display: inline-block;\n  animation: letterPopIn 0.8s ease-out forwards;\n  opacity: 0;\n  transform: scale(0.5);\n}\n@keyframes letterPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.5) translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.notification-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: notificationFadeIn 0.3s ease-out;\n}\n@keyframes notificationFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.notification-content {\n  background: white;\n  border-radius: 12px;\n  padding: 30px 40px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 500px;\n  width: 90%;\n  animation: notificationSlideIn 0.3s ease-out;\n  position: relative;\n}\n@keyframes notificationSlideIn {\n  from {\n    transform: translateY(-30px) scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.notification-success {\n  border-left: 5px solid #28a745;\n}\n.notification-error {\n  border-left: 5px solid #dc3545;\n}\n.notification-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.notification-success .notification-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #28a745,\n      #20c997);\n}\n.notification-error .notification-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545,\n      #fd7e14);\n}\n.checkmark {\n  width: 32px;\n  height: 32px;\n}\n.checkmark__check {\n  stroke: white;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: checkmarkStroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n@keyframes checkmarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.error-mark {\n  width: 32px;\n  height: 32px;\n}\n.error-mark__x {\n  stroke: white;\n  stroke-width: 3;\n  stroke-linecap: round;\n  fill: none;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: errorMarkStroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n@keyframes errorMarkStroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n.notification-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.notification-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a202c;\n  letter-spacing: -0.025em;\n}\n.notification-success .notification-title {\n  color: #155724;\n}\n.notification-error .notification-title {\n  color: #721c24;\n}\n.notification-message {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  line-height: 1.4;\n}\n.notification-success .notification-message {\n  color: #155724;\n}\n.notification-error .notification-message {\n  color: #721c24;\n}\n.notification-close {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.notification-close:hover {\n  background: rgba(0, 0, 0, 0.1);\n  color: #495057;\n}\n.countdown-timer-card {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 15px 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-width: 280px;\n}\n.countdown-timer-card .countdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.countdown-timer-card .countdown-header h3 {\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.countdown-timer-card .countdown-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.countdown-timer-card .countdown-unit {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 45px;\n  text-align: center;\n}\n.countdown-timer-card .countdown-value {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n  line-height: 1;\n}\n.countdown-timer-card .countdown-separator {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  opacity: 0.6;\n}\n.countdown-timer-card .countdown-end-date {\n  margin-top: 8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.countdown-timer-card .countdown-end-date .material-icons {\n  font-size: 14px;\n}\n.countdown-timer-card .countdown-config-btn {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.countdown-timer-card .countdown-config-btn .material-icons {\n  color: white;\n  font-size: 14px;\n}\n.countdown-timer-section {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 30px;\n  margin-top: 30px;\n  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);\n}\n.countdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.countdown-header h3 {\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.countdown-end-date {\n  margin-top: 15px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.countdown-end-date .material-icons {\n  font-size: 18px;\n}\n.countdown-config-btn {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.countdown-config-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.countdown-config-btn .material-icons {\n  color: white;\n  font-size: 20px;\n}\n.countdown-display {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.countdown-unit {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  padding: 15px 20px;\n  min-width: 80px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.countdown-value {\n  display: block;\n  font-size: 36px;\n  font-weight: 700;\n  color: white;\n  line-height: 1;\n}\n.countdown-label {\n  display: block;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.countdown-separator {\n  font-size: 32px;\n  font-weight: 700;\n  color: white;\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .countdown-timer-section {\n    padding: 20px;\n  }\n  .countdown-unit {\n    padding: 10px 12px;\n    min-width: 60px;\n  }\n  .countdown-value {\n    font-size: 24px;\n  }\n  .countdown-label {\n    font-size: 10px;\n  }\n  .countdown-separator {\n    font-size: 20px;\n  }\n}\n.countdown-setup-section {\n  margin-top: 30px;\n  text-align: center;\n}\n.countdown-setup-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 16px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.countdown-setup-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n.countdown-setup-btn .material-icons {\n  font-size: 24px;\n}\n.mini-spinner {\n  width: 24px;\n  height: 24px;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.stat-number {\n  display: inline-block;\n  min-width: 40px;\n  text-align: left;\n}\n.stat-number.loading {\n  visibility: hidden;\n}\n.stat-info h3 {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  margin: 0;\n  min-height: 38px;\n}\n.stat-info p {\n  margin: 4px 0 0 0;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.user-profile-section {\n  margin-bottom: 40px;\n}\n.profile-card {\n  background:\n    linear-gradient(\n      135deg,\n      #1b6aeb 0%,\n      #257bf3 100%);\n  border-radius: 16px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  box-shadow: 0 8px 32px rgba(27, 106, 235, 0.2);\n  color: white;\n}\n.profile-main-content {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.profile-main-content .countdown-timer-card {\n  margin-left: auto;\n}\n.profile-greeting {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  margin-bottom: 8px;\n}\n.profile-greeting .greeting-text {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 0;\n  display: inline;\n  font-family: inherit;\n  letter-spacing: 1px;\n}\n.profile-greeting .greeting-letter {\n  display: inline;\n  animation: letterPopIn 0.3s ease-out forwards;\n  opacity: 0;\n  transform: scale(0.5);\n}\n@keyframes letterPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.5) translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.profile-info {\n  flex: 1;\n  min-width: 150px;\n}\n.profile-card .countdown-timer-card {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.profile-avatar {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n}\n.profile-avatar img,\n.profile-initials {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n}\n.profile-avatar img {\n  object-fit: cover;\n}\n.profile-initials {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.profile-info h2 {\n  color: white;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.profile-name {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 4px 0;\n}\n.profile-role {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  margin: 0;\n  font-weight: 400;\n}\n.profile-subjects {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin: 0.4rem 0 0;\n  padding: 0;\n}\n.subject-badge-small {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.subject-badge-small.director-badge-dashboard {\n  background: rgba(254, 243, 199, 0.25);\n  border-color: rgba(252, 211, 77, 0.6);\n  color: #fff7ed;\n}\n.dashboard-header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.dashboard-header h1 {\n  color: #1e293b;\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n}\n.dashboard-header p {\n  color: #64748b;\n  font-size: 18px;\n  margin: 0;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.stat-card {\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.stat-info h3 {\n  color: #1e293b;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.stat-info p {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n}\n.quick-actions {\n  margin-bottom: 40px;\n}\n.quick-actions h2 {\n  color: #1e293b;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.action-btn {\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  color: #374151;\n}\n.action-btn:hover {\n  border-color: #3b82f6;\n  background: #f0f9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.1);\n}\n.action-btn .material-icons {\n  font-size: 32px;\n  color: #3b82f6;\n}\n.action-btn span:last-child {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n}\n.recent-activity h2 {\n  color: #1e293b;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.activity-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.activity-item {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid #e2e8f0;\n}\n.activity-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.activity-content p {\n  color: #1e293b;\n  font-size: 14px;\n  margin: 0 0 4px 0;\n  font-weight: 500;\n}\n.activity-content small {\n  color: #64748b;\n  font-size: 12px;\n}\n.empty-activity {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty-activity .material-icons {\n  font-size: 48px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-activity p {\n  margin: 0;\n  font-size: 15px;\n  color: #64748b;\n  font-weight: 500;\n}\n.empty-activity small {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n@media (max-width: 768px) {\n  .dashboard-content {\n    padding: 15px;\n    max-width: 100%;\n  }\n  .greeting-text {\n    font-size: 1.4rem;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 15px;\n  }\n  .actions-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-content {\n    padding: 10px;\n  }\n  .greeting-text {\n    font-size: 1.1rem;\n  }\n  .actions-grid {\n    grid-template-columns: 1fr;\n  }\n  .activity-item {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n  }\n  .empty-activity {\n    text-align: center;\n    padding: 30px 20px;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  margin: 0;\n  color: #1e293b;\n  font-size: 20px;\n  font-weight: 600;\n}\n.close-button {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #64748b;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.close-button:hover {\n  background: #e2e8f0;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select {\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid #e2e8f0;\n}\n.cancel-button,\n.save-button,\n.primary-button {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.cancel-button {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.cancel-button:hover {\n  background: #e5e7eb;\n}\n.save-button {\n  background: #3b82f6;\n  color: white;\n}\n.save-button:hover:not(:disabled) {\n  background: #2563eb;\n}\n.save-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.primary-button {\n  background: #10b981;\n  color: white;\n}\n.primary-button:hover {\n  background: #059669;\n}\n.modal-description {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #f0f9ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 6px;\n}\n.modal-description p {\n  margin: 0;\n  color: #1e40af;\n  font-size: 14px;\n}\n.current-grades,\n.current-subjects {\n  margin-bottom: 20px;\n}\n.current-grades h4,\n.current-subjects h4 {\n  margin: 0 0 12px 0;\n  color: #374151;\n  font-size: 16px;\n}\n.grades-list,\n.subjects-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.grade-item,\n.subject-item {\n  background: #f3f4f6;\n  color: #374151;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.reports-section h4 {\n  margin: 0 0 16px 0;\n  color: #374151;\n  font-size: 18px;\n}\n.reports-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.report-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.report-card:hover {\n  background: #f0f9ff;\n  border-color: #3b82f6;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);\n}\n.report-icon {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.report-info h5 {\n  margin: 0 0 4px 0;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 600;\n}\n.report-info p {\n  margin: 0;\n  color: #64748b;\n  font-size: 12px;\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 95%;\n    margin: 10px;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .cancel-button,\n  .save-button,\n  .primary-button {\n    width: 100%;\n  }\n  .reports-grid {\n    grid-template-columns: 1fr;\n  }\n  .report-card {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n}\n:host-context([data-theme="dark"]) .dashboard-header h1 {\n  color: var(--text-1);\n  text-shadow: 0 0 16px rgba(56, 189, 248, 0.2);\n}\n:host-context([data-theme="dark"]) .dashboard-header p {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .stat-card {\n  background: var(--surface);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n}\n:host-context([data-theme="dark"]) .stat-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(6, 182, 212, 0.4);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55), 0 0 22px rgba(6, 182, 212, 0.2);\n}\n:host-context([data-theme="dark"]) .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand) 0%,\n      var(--brand-600) 100%);\n  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.4);\n  color: #04141a;\n}\n:host-context([data-theme="dark"]) .stat-info h3 {\n  color: var(--text-1);\n  text-shadow: 0 0 12px rgba(56, 189, 248, 0.15);\n}\n:host-context([data-theme="dark"]) .stat-info p {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .quick-actions h2,\n:host-context([data-theme="dark"]) .recent-activity h2 {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .action-btn {\n  background: var(--surface);\n  border: 2px solid var(--border-strong);\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .action-btn:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n  color: var(--brand-500);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(6, 182, 212, 0.18), 0 0 18px rgba(6, 182, 212, 0.2);\n}\n:host-context([data-theme="dark"]) .action-btn .material-icons {\n  color: var(--brand-500);\n  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.45));\n}\n:host-context([data-theme="dark"]) .action-btn span:last-child {\n  color: inherit;\n}\n:host-context([data-theme="dark"]) .activity-item {\n  background: var(--surface);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n}\n:host-context([data-theme="dark"]) .activity-item:hover {\n  border-color: rgba(6, 182, 212, 0.4);\n  box-shadow: 0 0 18px rgba(6, 182, 212, 0.15);\n}\n:host-context([data-theme="dark"]) .activity-icon {\n  background:\n    linear-gradient(\n      135deg,\n      var(--success) 0%,\n      #059669 100%);\n  color: #04231a;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);\n}\n:host-context([data-theme="dark"]) .activity-content p {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .activity-content small {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .empty-activity {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .empty-activity p {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .empty-activity small {\n  color: var(--text-4);\n}\n:host-context([data-theme="dark"]) .mini-spinner {\n  border-color: rgba(148, 163, 184, 0.25);\n  border-top-color: var(--brand);\n}\n:host-context([data-theme="dark"]) .profile-card {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1b6aeb 60%,\n      #06b6d4 100%);\n  box-shadow: 0 8px 32px rgba(6, 182, 212, 0.18);\n  border: 1px solid rgba(6, 182, 212, 0.25);\n}\n:host-context([data-theme="dark"]) .profile-info h2 {\n  color: #f1f5f9;\n}\n:host-context([data-theme="dark"]) .profile-name {\n  color: rgba(241, 245, 249, 0.9);\n}\n:host-context([data-theme="dark"]) .profile-role {\n  color: rgba(241, 245, 249, 0.7);\n}\n:host-context([data-theme="dark"]) .countdown-timer-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1559c9 0%,\n      #6d28d9 100%);\n  box-shadow: 0 10px 40px rgba(109, 40, 217, 0.35);\n}\n:host-context([data-theme="dark"]) .countdown-setup-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #a855f7 100%);\n  color: #04141a;\n  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.4);\n}\n:host-context([data-theme="dark"]) .countdown-setup-btn:hover {\n  box-shadow: 0 6px 22px rgba(168, 85, 247, 0.55);\n}\n:host-context([data-theme="dark"]) .modal-overlay {\n  background: rgba(3, 7, 18, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n:host-context([data-theme="dark"]) .modal-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-lg), 0 0 40px rgba(6, 182, 212, 0.08);\n}\n:host-context([data-theme="dark"]) .modal-header {\n  background: var(--surface-2);\n  border-bottom-color: var(--border);\n}\n:host-context([data-theme="dark"]) .modal-header h3 {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .close-button {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .close-button:hover {\n  background: var(--border-strong);\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .modal-body {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .form-group label {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .form-group input,\n:host-context([data-theme="dark"]) .form-group select {\n  background: var(--bg);\n  color: var(--text-1);\n  border-color: var(--border-strong);\n}\n:host-context([data-theme="dark"]) .form-group input:focus,\n:host-context([data-theme="dark"]) .form-group select:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2), 0 0 14px rgba(6, 182, 212, 0.25);\n}\n:host-context([data-theme="dark"]) .modal-actions {\n  border-top-color: var(--border);\n}\n:host-context([data-theme="dark"]) .cancel-button {\n  background: var(--surface-2);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n}\n:host-context([data-theme="dark"]) .cancel-button:hover {\n  background: var(--border-strong);\n}\n:host-context([data-theme="dark"]) .save-button {\n  background: var(--brand);\n  color: #04141a;\n  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);\n}\n:host-context([data-theme="dark"]) .save-button:hover:not(:disabled) {\n  background: var(--brand-500);\n}\n:host-context([data-theme="dark"]) .primary-button {\n  background: var(--success);\n  color: #04231a;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n:host-context([data-theme="dark"]) .primary-button:hover {\n  background: #059669;\n}\n:host-context([data-theme="dark"]) .modal-description {\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n}\n:host-context([data-theme="dark"]) .modal-description p {\n  color: var(--brand-500);\n}\n:host-context([data-theme="dark"]) .current-grades h4,\n:host-context([data-theme="dark"]) .current-subjects h4,\n:host-context([data-theme="dark"]) .reports-section h4 {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .grade-item,\n:host-context([data-theme="dark"]) .subject-item {\n  background: var(--surface-2);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n}\n:host-context([data-theme="dark"]) .report-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n}\n:host-context([data-theme="dark"]) .report-card:hover {\n  background: var(--brand-50);\n  border-color: var(--brand);\n  box-shadow: 0 0 16px rgba(6, 182, 212, 0.18);\n}\n:host-context([data-theme="dark"]) .report-info h5 {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .report-info p {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .notification-content {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-lg);\n}\n:host-context([data-theme="dark"]) .notification-title {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .notification-success .notification-title,\n:host-context([data-theme="dark"]) .notification-success .notification-message {\n  color: var(--success);\n}\n:host-context([data-theme="dark"]) .notification-error .notification-title,\n:host-context([data-theme="dark"]) .notification-error .notification-message {\n  color: #fca5a5;\n}\n:host-context([data-theme="dark"]) .notification-message {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .notification-close {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .notification-close:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "app/dashboard/dashboard.ts", lineNumber: 22 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-TTZXZNRJ.js.map
