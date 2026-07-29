import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-G4AEIR3O.js";

// src/app/services/grades-update.service.ts
var GradesUpdateService = class _GradesUpdateService {
  // Signal to track when grades are updated
  gradesUpdated = signal(0, ...ngDevMode ? [{ debugName: "gradesUpdated" }] : []);
  // Method to notify that grades have been updated
  notifyGradeUpdate() {
    this.gradesUpdated.update((v) => v + 1);
  }
  static \u0275fac = function GradesUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GradesUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GradesUpdateService, factory: _GradesUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GradesUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  GradesUpdateService
};
//# sourceMappingURL=chunk-YHVHY3AS.js.map
