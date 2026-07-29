import {
  Router
} from "./chunk-7DDXMRNS.js";
import {
  GlobalRealtimeService
} from "./chunk-ZYSOL3KW.js";
import {
  AuthService
} from "./chunk-UNKQMH5O.js";
import "./chunk-VCEXV2JC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TCE2U3R2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G4AEIR3O.js";

// src/app/periods/periods.ts
var _forTrack0 = ($index, $item) => $item.id;
function Periods_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 3);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Cargando per\xEDodos...");
    \u0275\u0275elementEnd()();
  }
}
function Periods_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function Periods_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function Periods_Conditional_8_For_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Autom\xE1tico");
    \u0275\u0275elementEnd();
  }
}
function Periods_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15)(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Periods_Conditional_8_For_9_Conditional_10_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "div", 20)(13, "span", 21)(14, "span", 3);
    \u0275\u0275text(15, "lock_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Desbloqueo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "span", 21)(21, "span", 3);
    \u0275\u0275text(22, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Bloqueo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 22);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 23)(27, "button", 24);
    \u0275\u0275listener("click", function Periods_Conditional_8_For_9_Template_button_click_27_listener() {
      const period_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePeriod(period_r3.periodNumber, period_r3.isUnlocked));
    });
    \u0275\u0275elementStart(28, "span", 3);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 25);
    \u0275\u0275listener("click", function Periods_Conditional_8_For_9_Template_button_click_31_listener() {
      const period_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openScheduleModal(period_r3));
    });
    \u0275\u0275elementStart(32, "span", 3);
    \u0275\u0275text(33, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Programar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 26)(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const period_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("locked", !period_r3.isUnlocked)("unlocked", period_r3.isUnlocked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Per\xEDodo ", period_r3.periodNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(period_r3.isUnlocked ? "lock_open" : "lock");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", period_r3.isUnlocked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(period_r3.isUnlocked), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(period_r3.isAutomatic ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(period_r3.unlockDate));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(period_r3.lockDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(period_r3.isUnlocked ? "lock" : "lock_open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", period_r3.isUnlocked ? "Bloquear" : "Desbloquear", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(period_r3.description || "Per\xEDodo acad\xE9mico " + period_r3.periodNumber);
  }
}
function Periods_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 3);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Solo los administradores pueden modificar los per\xEDodos.");
    \u0275\u0275elementEnd()();
  }
}
function Periods_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 3);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aqu\xED puedes bloquear o desbloquear los per\xEDodos acad\xE9micos. Tambi\xE9n puedes programar fechas autom\xE1ticas para el bloqueo y desbloqueo de cada per\xEDodo.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Periods_Conditional_8_Conditional_5_Template, 4, 1, "div", 7);
    \u0275\u0275conditionalCreate(6, Periods_Conditional_8_Conditional_6_Template, 4, 1, "div", 8);
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275repeaterCreate(8, Periods_Conditional_8_For_9_Template, 38, 16, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Periods_Conditional_8_Conditional_10_Template, 5, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.successMessage() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMessage() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.periods());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isAdmin() ? 10 : -1);
  }
}
function Periods_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
  }
}
function Periods_Conditional_9_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function Periods_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function Periods_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeScheduleModal());
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function Periods_Conditional_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function Periods_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeScheduleModal());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 32)(10, "label")(11, "span", 3);
    \u0275\u0275text(12, "lock_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Fecha y hora de desbloqueo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 33);
    \u0275\u0275listener("ngModelChange", function Periods_Conditional_9_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.unlockDateTemp.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32)(16, "label", 34)(17, "span", 3);
    \u0275\u0275text(18, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Fecha y hora de bloqueo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 35);
    \u0275\u0275listener("ngModelChange", function Periods_Conditional_9_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lockDateTemp.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 36)(22, "button", 37);
    \u0275\u0275listener("click", function Periods_Conditional_9_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeScheduleModal());
    });
    \u0275\u0275elementStart(23, "span", 3);
    \u0275\u0275text(24, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 38);
    \u0275\u0275listener("click", function Periods_Conditional_9_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveSchedule());
    });
    \u0275\u0275conditionalCreate(27, Periods_Conditional_9_Conditional_27_Template, 2, 0, "span", 3)(28, Periods_Conditional_9_Conditional_28_Template, 2, 0, "span", 3);
    \u0275\u0275text(29, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Programar Per\xEDodo ", (tmp_1_0 = ctx_r0.editingPeriod()) == null ? null : tmp_1_0.periodNumber);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r0.unlockDateTemp());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.lockDateTemp());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 27 : 28);
  }
}
var Periods = class _Periods {
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);
  realtimeService = inject(GlobalRealtimeService);
  periodsSubscription = null;
  periods = signal([], ...ngDevMode ? [{ debugName: "periods" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  editingPeriod = signal(null, ...ngDevMode ? [{ debugName: "editingPeriod" }] : []);
  unlockDateTemp = signal("", ...ngDevMode ? [{ debugName: "unlockDateTemp" }] : []);
  lockDateTemp = signal("", ...ngDevMode ? [{ debugName: "lockDateTemp" }] : []);
  isAutomaticTemp = signal(false, ...ngDevMode ? [{ debugName: "isAutomaticTemp" }] : []);
  apiUrl = "http://localhost:8080/api/periods";
  ngOnInit() {
    this.loadPeriods();
    this.periodsSubscription = this.realtimeService.periods$.subscribe((periods) => {
      if (periods.length > 0) {
        const uniquePeriods = periods.filter((p, index, self) => index === self.findIndex((t) => t.periodNumber === p.periodNumber));
        this.periods.set(uniquePeriods);
      }
    });
  }
  ngOnDestroy() {
    if (this.periodsSubscription) {
      this.periodsSubscription.unsubscribe();
    }
  }
  loadPeriods() {
    this.loading.set(true);
    this.http.get(this.apiUrl).subscribe({
      next: (data) => {
        console.log("Periodos recibidos:", data);
        const uniquePeriods = data.filter((p, index, self) => index === self.findIndex((t) => t.periodNumber === p.periodNumber));
        console.log("Periodos \xFAnicos:", uniquePeriods);
        if (uniquePeriods.length === 0) {
          this.initializePeriods();
        } else {
          this.periods.set(uniquePeriods);
          this.loading.set(false);
        }
      },
      error: (err) => {
        console.error("Error loading periods:", err);
        this.errorMessage.set("Error al cargar los per\xEDodos");
        this.loading.set(false);
      }
    });
  }
  initializePeriods() {
    this.http.post(`${this.apiUrl}/initialize`, {}).subscribe({
      next: () => {
        this.loadPeriods();
      },
      error: (err) => {
        console.error("Error initializing periods:", err);
      }
    });
  }
  togglePeriod(periodNumber, currentStatus) {
    this.saving.set(true);
    this.errorMessage.set("");
    this.successMessage.set("");
    const newStatus = !currentStatus;
    this.http.put(`${this.apiUrl}/${periodNumber}/unlock`, { unlocked: newStatus }).subscribe({
      next: () => {
        this.periods.update((periods) => periods.map((p) => p.periodNumber === periodNumber ? __spreadProps(__spreadValues({}, p), { isUnlocked: newStatus, isAutomatic: false }) : p));
        this.saving.set(false);
        this.successMessage.set(newStatus ? `Per\xEDodo ${periodNumber} desbloqueado correctamente` : `Per\xEDodo ${periodNumber} bloqueado correctamente`);
        setTimeout(() => this.successMessage.set(""), 3e3);
        this.realtimeService.notifyPeriodsChanged();
      },
      error: (err) => {
        console.error("Error updating period:", err);
        this.saving.set(false);
        this.errorMessage.set("Error al actualizar el per\xEDodo");
      }
    });
  }
  openScheduleModal(period) {
    this.editingPeriod.set(period);
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    this.unlockDateTemp.set(period.unlockDate ? this.formatDateForInput(period.unlockDate) : currentDateTime);
    this.lockDateTemp.set(period.lockDate ? this.formatDateForInput(period.lockDate) : currentDateTime);
    this.isAutomaticTemp.set(period.isAutomatic || false);
  }
  closeScheduleModal() {
    this.editingPeriod.set(null);
    this.unlockDateTemp.set("");
    this.lockDateTemp.set("");
    this.isAutomaticTemp.set(false);
  }
  formatDateTimeLocal(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  formatDateForInput(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  saveSchedule() {
    const period = this.editingPeriod();
    if (!period)
      return;
    this.saving.set(true);
    let unlockDateStr = null;
    let lockDateStr = null;
    if (this.unlockDateTemp()) {
      const value = this.unlockDateTemp();
      unlockDateStr = value.includes(":") ? value + ":00" : value + ":00:00";
    }
    if (this.lockDateTemp()) {
      const value = this.lockDateTemp();
      lockDateStr = value.includes(":") ? value + ":00" : value + ":00:00";
    }
    this.http.put(`${this.apiUrl}/${period.periodNumber}/schedule`, {
      unlockDate: unlockDateStr,
      lockDate: lockDateStr
    }).subscribe({
      next: (response) => {
        this.periods.update((periods) => periods.map((p) => p.periodNumber === period.periodNumber ? __spreadValues(__spreadValues({}, p), response) : p));
        this.saving.set(false);
        this.closeScheduleModal();
        this.successMessage.set("Programaci\xF3n guardada correctamente");
        setTimeout(() => this.successMessage.set(""), 3e3);
        this.realtimeService.notifyPeriodsChanged();
      },
      error: (err) => {
        console.error("Error saving schedule:", err);
        this.saving.set(false);
        this.errorMessage.set("Error al guardar la programaci\xF3n");
      }
    });
  }
  isAdmin() {
    const role = this.authService.getRole();
    return role === "ADMIN" || role === "admin";
  }
  getStatusText(isUnlocked) {
    return isUnlocked ? "Desbloqueado" : "Bloqueado";
  }
  getStatusIcon(isUnlocked) {
    return isUnlocked ? "lock_open" : "lock";
  }
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "No establecido";
    const date = new Date(dateStr);
    return date.toLocaleString("es-CO");
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
  static \u0275fac = function Periods_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Periods)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Periods, selectors: [["app-periods"]], decls: 10, vars: 2, consts: [[1, "periods-container"], [1, "header"], [1, "back-btn", 3, "click"], [1, "material-icons"], [1, "loading"], [1, "modal-overlay"], [1, "info-box"], [1, "success-message"], [1, "error-message"], [1, "periods-grid"], [1, "period-card", 3, "locked", "unlocked"], [1, "admin-notice"], [1, "period-card"], [1, "period-header"], [1, "period-number"], [1, "status-icon"], [1, "period-status"], [1, "status-badge"], [1, "status-badge", "automatic"], [1, "period-info"], [1, "info-row"], [1, "label"], [1, "value"], [1, "period-actions"], [1, "btn-toggle", 3, "click", "disabled"], [1, "btn-schedule", 3, "click"], [1, "period-description"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "datetime-local", "id", "unlockDate", "name", "unlockDate", "autocomplete", "off", "title", "Seleccionar fecha y hora de desbloqueo", "placeholder", "Seleccionar fecha y hora", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "lockDate"], ["type", "datetime-local", "id", "lockDate", "name", "lockDate", "autocomplete", "off", "title", "Seleccionar fecha y hora de bloqueo", "placeholder", "Seleccionar fecha y hora", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"]], template: function Periods_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function Periods_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Gesti\xF3n de Per\xEDodos");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, Periods_Conditional_7_Template, 5, 0, "div", 4)(8, Periods_Conditional_8_Template, 11, 3);
      \u0275\u0275conditionalCreate(9, Periods_Conditional_9_Template, 30, 5, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.editingPeriod() ? 9 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.periods-container[_ngcontent-%COMP%] {\n  padding: var(--sp-6);\n  max-width: 1240px;\n  margin: 0 auto;\n  min-height: calc(100vh - 40px);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-6);\n  flex-wrap: wrap;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n  margin: 0;\n  line-height: 1.15;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  color: var(--text-2);\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.back-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.back-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  color: var(--text-3);\n}\n.loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--brand);\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-box[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  border: 1px solid var(--brand-100);\n  border-left: 4px solid var(--brand);\n  padding: 18px 20px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: var(--sp-5);\n}\n.info-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand);\n  flex-shrink: 0;\n  font-size: 24px;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--accent-600);\n  font-size: 0.92rem;\n  line-height: 1.6;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border: 1px solid #bfe6cc;\n  border-left: 4px solid var(--success);\n  padding: 14px 18px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: var(--sp-4);\n  color: #166534;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n.success-message[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--success);\n}\n.error-message[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  border: 1px solid #f3c4c4;\n  border-left: 4px solid var(--danger);\n  padding: 14px 18px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: var(--sp-4);\n  color: #991b1b;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n.error-message[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--danger);\n}\n.periods-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: var(--sp-5);\n  margin-bottom: var(--sp-6);\n}\n.period-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  transition:\n    box-shadow 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease;\n  position: relative;\n  overflow: hidden;\n}\n.period-card.unlocked[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--success);\n}\n.period-card.locked[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--danger);\n}\n.period-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.period-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-3);\n}\n.period-number[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.status-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.status-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.period-card.unlocked[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.period-card.locked[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.period-status[_ngcontent-%COMP%] {\n  display: none;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: var(--r-pill);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--surface-2);\n  color: var(--text-2);\n  border: 1px solid var(--border);\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand);\n  border-color: var(--brand-100);\n}\n.status-badge.automatic[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #b45309;\n  border-color: #fed7aa;\n}\n.period-info[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border-radius: var(--r-sm);\n  padding: 12px 16px;\n  margin: var(--sp-3) 0;\n  border: 1px solid var(--border);\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px dashed var(--border);\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-4);\n}\n.info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.period-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  margin-top: var(--sp-3);\n}\n.btn-toggle[_ngcontent-%COMP%], \n.btn-schedule[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 0.6rem 0.9rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.btn-toggle[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: #fff;\n  box-shadow: var(--shadow-xs);\n}\n.btn-toggle[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-toggle.locked-state[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.btn-toggle.locked-state[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-toggle[_ngcontent-%COMP%]:disabled {\n  background: var(--border);\n  color: var(--text-4);\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-schedule[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-schedule[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  box-shadow: var(--shadow-xs);\n}\n.btn-schedule[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n}\n.btn-toggle[_ngcontent-%COMP%]:focus-visible, \n.btn-schedule[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.period-description[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-notice[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-left: 4px solid var(--warning);\n  padding: 16px 20px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #92400e;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n.admin-notice[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--warning);\n}\n.admin-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  padding: var(--sp-4);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: var(--r-sm);\n  color: var(--text-3);\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n  border-color: var(--border-strong);\n}\n.close-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.2);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  color: var(--text-2);\n  margin-bottom: var(--sp-2);\n  font-size: 0.85rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-3);\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  font-family: inherit;\n  color: var(--text-1);\n  background: var(--surface);\n  box-sizing: border-box;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-4);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-5);\n  border-top: 1px solid var(--border);\n}\n.btn-cancel[_ngcontent-%COMP%], \n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  color: var(--text-2);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: var(--brand);\n  border: 1px solid var(--brand);\n  color: #fff;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  border-color: var(--brand-600);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: var(--border);\n  border-color: var(--border);\n  color: var(--text-4);\n  cursor: not-allowed;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-cancel[_ngcontent-%COMP%]:focus-visible, \n.btn-save[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n@media (max-width: 768px) {\n  .periods-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=periods.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Periods, [{
    type: Component,
    args: [{ selector: "app-periods", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="periods-container">
  <div class="header">
    <button class="back-btn" (click)="goBack()">
      <span class="material-icons">arrow_back</span>
    </button>
    <h1>Gesti\xF3n de Per\xEDodos</h1>
  </div>

  @if (loading()) {
    <div class="loading">
      <span class="material-icons">hourglass_empty</span>
      <p>Cargando per\xEDodos...</p>
    </div>
  } @else {
    <div class="info-box">
      <span class="material-icons">info</span>
      <p>Aqu\xED puedes bloquear o desbloquear los per\xEDodos acad\xE9micos. Tambi\xE9n puedes programar fechas autom\xE1ticas para el bloqueo y desbloqueo de cada per\xEDodo.</p>
    </div>

    @if (successMessage()) {
      <div class="success-message">
        <span class="material-icons">check_circle</span>
        {{ successMessage() }}
      </div>
    }

    @if (errorMessage()) {
      <div class="error-message">
        <span class="material-icons">error</span>
        {{ errorMessage() }}
      </div>
    }

    <div class="periods-grid">
      @for (period of periods(); track period.id) {
        <div class="period-card" [class.locked]="!period.isUnlocked" [class.unlocked]="period.isUnlocked">
          <div class="period-header">
            <span class="period-number">Per\xEDodo {{ period.periodNumber }}</span>
            <span class="status-icon">
              <span class="material-icons">{{ period.isUnlocked ? 'lock_open' : 'lock' }}</span>
            </span>
          </div>
          
          <div class="period-status">
            <span class="status-badge" [class.active]="period.isUnlocked">
              {{ getStatusText(period.isUnlocked) }}
            </span>
            @if (period.isAutomatic) {
              <span class="status-badge automatic">Autom\xE1tico</span>
            }
          </div>

          <div class="period-info">
            <div class="info-row">
              <span class="label">
                <span class="material-icons">lock_open</span>
                Desbloqueo
              </span>
              <span class="value">{{ formatDisplayDate(period.unlockDate) }}</span>
            </div>
            <div class="info-row">
              <span class="label">
                <span class="material-icons">lock</span>
                Bloqueo
              </span>
              <span class="value">{{ formatDisplayDate(period.lockDate) }}</span>
            </div>
          </div>

          <div class="period-actions">
            <button class="btn-toggle" (click)="togglePeriod(period.periodNumber, period.isUnlocked)" [disabled]="saving()">
              <span class="material-icons">{{ period.isUnlocked ? 'lock' : 'lock_open' }}</span>
              {{ period.isUnlocked ? 'Bloquear' : 'Desbloquear' }}
            </button>
            <button class="btn-schedule" (click)="openScheduleModal(period)">
              <span class="material-icons">schedule</span>
              Programar
            </button>
          </div>

          <div class="period-description">
            <p>{{ period.description || 'Per\xEDodo acad\xE9mico ' + period.periodNumber }}</p>
          </div>
        </div>
      }
    </div>

    @if (!isAdmin()) {
      <div class="admin-notice">
        <span class="material-icons">warning</span>
        <p>Solo los administradores pueden modificar los per\xEDodos.</p>
      </div>
    }
  }

  @if (editingPeriod()) {
    <div class="modal-overlay" (click)="closeScheduleModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Programar Per\xEDodo {{ editingPeriod()?.periodNumber }}</h2>
          <button class="close-btn" (click)="closeScheduleModal()">
            <span class="material-icons">close</span>
          </button>
        </div>
        
        <div class="modal-body">
          <div class="form-group">
            <label>
              <span class="material-icons">lock_open</span>
              Fecha y hora de desbloqueo
            </label>
            <input 
              type="datetime-local" 
              id="unlockDate" 
              name="unlockDate"
              autocomplete="off"
              title="Seleccionar fecha y hora de desbloqueo" 
              [ngModel]="unlockDateTemp()" 
              (ngModelChange)="unlockDateTemp.set($event)"
              class="form-input" 
              placeholder="Seleccionar fecha y hora"
            >
          </div>

          <div class="form-group">
            <label for="lockDate">
              <span class="material-icons">lock</span>
              Fecha y hora de bloqueo
            </label>
            <input 
              type="datetime-local" 
              id="lockDate" 
              name="lockDate"
              autocomplete="off"
              title="Seleccionar fecha y hora de bloqueo" 
              [ngModel]="lockDateTemp()" 
              (ngModelChange)="lockDateTemp.set($event)"
              class="form-input" 
              placeholder="Seleccionar fecha y hora"
            >
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-cancel" (click)="closeScheduleModal()">
            <span class="material-icons">close</span>
            Cancelar
          </button>
          <button class="btn-save" (click)="saveSchedule()" [disabled]="saving()">
            @if (saving()) {
              <span class="material-icons">hourglass_empty</span>
            } @else {
              <span class="material-icons">save</span>
            }
            Guardar
          </button>
        </div>
      </div>
    </div>
  }
</div>`, styles: ["/* src/app/periods/periods.css */\n.periods-container {\n  padding: var(--sp-6);\n  max-width: 1240px;\n  margin: 0 auto;\n  min-height: calc(100vh - 40px);\n}\n.header {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-6);\n  flex-wrap: wrap;\n}\n.header h1 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n  margin: 0;\n  line-height: 1.15;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  color: var(--text-2);\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.back-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.back-btn .material-icons {\n  font-size: 22px;\n}\n.back-btn:focus-visible {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.2);\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  color: var(--text-3);\n}\n.loading .material-icons {\n  font-size: 48px;\n  color: var(--brand);\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-box {\n  background: var(--info-bg);\n  border: 1px solid var(--brand-100);\n  border-left: 4px solid var(--brand);\n  padding: 18px 20px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: var(--sp-5);\n}\n.info-box .material-icons {\n  color: var(--brand);\n  flex-shrink: 0;\n  font-size: 24px;\n}\n.info-box p {\n  margin: 0;\n  color: var(--accent-600);\n  font-size: 0.92rem;\n  line-height: 1.6;\n}\n.success-message {\n  background: var(--success-bg);\n  border: 1px solid #bfe6cc;\n  border-left: 4px solid var(--success);\n  padding: 14px 18px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: var(--sp-4);\n  color: #166534;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n.success-message .material-icons {\n  font-size: 22px;\n  color: var(--success);\n}\n.error-message {\n  background: var(--danger-bg);\n  border: 1px solid #f3c4c4;\n  border-left: 4px solid var(--danger);\n  padding: 14px 18px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: var(--sp-4);\n  color: #991b1b;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n.error-message .material-icons {\n  font-size: 22px;\n  color: var(--danger);\n}\n.periods-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: var(--sp-5);\n  margin-bottom: var(--sp-6);\n}\n.period-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  transition:\n    box-shadow 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease;\n  position: relative;\n  overflow: hidden;\n}\n.period-card.unlocked {\n  border-top: 3px solid var(--success);\n}\n.period-card.locked {\n  border-top: 3px solid var(--danger);\n}\n.period-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.period-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-3);\n}\n.period-number {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-1);\n}\n.status-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.status-icon .material-icons {\n  font-size: 22px;\n}\n.period-card.unlocked .status-icon {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.period-card.locked .status-icon {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.period-status {\n  display: none;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: var(--r-pill);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--surface-2);\n  color: var(--text-2);\n  border: 1px solid var(--border);\n}\n.status-badge.active {\n  background: var(--brand-50);\n  color: var(--brand);\n  border-color: var(--brand-100);\n}\n.status-badge.automatic {\n  background: #fff7ed;\n  color: #b45309;\n  border-color: #fed7aa;\n}\n.period-info {\n  background: var(--surface-2);\n  border-radius: var(--r-sm);\n  padding: 12px 16px;\n  margin: var(--sp-3) 0;\n  border: 1px solid var(--border);\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px dashed var(--border);\n}\n.info-row:last-child {\n  border-bottom: none;\n}\n.info-row .label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.info-row .label .material-icons {\n  font-size: 18px;\n  color: var(--text-4);\n}\n.info-row .value {\n  color: var(--text-1);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.period-actions {\n  display: flex;\n  gap: var(--sp-2);\n  margin-top: var(--sp-3);\n}\n.btn-toggle,\n.btn-schedule {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 0.6rem 0.9rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.btn-toggle {\n  background: var(--success);\n  color: #fff;\n  box-shadow: var(--shadow-xs);\n}\n.btn-toggle:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-toggle.locked-state {\n  background: var(--danger);\n}\n.btn-toggle.locked-state:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-toggle:disabled {\n  background: var(--border);\n  color: var(--text-4);\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-toggle .material-icons,\n.btn-schedule .material-icons {\n  font-size: 18px;\n}\n.btn-schedule {\n  background: var(--brand);\n  color: #fff;\n  box-shadow: var(--shadow-xs);\n}\n.btn-schedule:hover {\n  background: var(--brand-600);\n}\n.btn-toggle:focus-visible,\n.btn-schedule:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.period-description {\n  display: none;\n}\n.admin-notice {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-left: 4px solid var(--warning);\n  padding: 16px 20px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #92400e;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n.admin-notice .material-icons {\n  font-size: 24px;\n  color: var(--warning);\n}\n.admin-notice p {\n  margin: 0;\n  font-size: 0.92rem;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  padding: var(--sp-4);\n}\n.modal-content {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.close-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: var(--r-sm);\n  color: var(--text-3);\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease;\n}\n.close-btn:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n  border-color: var(--border-strong);\n}\n.close-btn .material-icons {\n  font-size: 22px;\n}\n.close-btn:focus-visible {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.2);\n}\n.modal-body {\n  padding: var(--sp-5);\n}\n.form-group {\n  margin-bottom: var(--sp-4);\n}\n.form-group label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  color: var(--text-2);\n  margin-bottom: var(--sp-2);\n  font-size: 0.85rem;\n}\n.form-group label .material-icons {\n  font-size: 18px;\n  color: var(--text-3);\n}\n.form-input {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  font-family: inherit;\n  color: var(--text-1);\n  background: var(--surface);\n  box-sizing: border-box;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.form-input:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.form-input::placeholder {\n  color: var(--text-4);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  padding: var(--sp-5);\n  border-top: 1px solid var(--border);\n}\n.btn-cancel,\n.btn-save {\n  padding: 0.6rem 1.2rem;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n}\n.btn-cancel {\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  color: var(--text-2);\n}\n.btn-cancel:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-save {\n  background: var(--brand);\n  border: 1px solid var(--brand);\n  color: #fff;\n}\n.btn-save:hover:not(:disabled) {\n  background: var(--brand-600);\n  border-color: var(--brand-600);\n}\n.btn-save:disabled {\n  background: var(--border);\n  border-color: var(--border);\n  color: var(--text-4);\n  cursor: not-allowed;\n}\n.btn-save .material-icons {\n  font-size: 20px;\n}\n.btn-cancel:focus-visible,\n.btn-save:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n@media (max-width: 768px) {\n  .periods-container {\n    padding: var(--sp-4);\n  }\n  .header h1 {\n    font-size: 1.35rem;\n  }\n  .modal-footer {\n    flex-direction: column-reverse;\n  }\n  .btn-cancel,\n  .btn-save {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=periods.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Periods, { className: "Periods", filePath: "app/periods/periods.ts", lineNumber: 27 });
})();
export {
  Periods
};
//# sourceMappingURL=chunk-NSQWHBCG.js.map
