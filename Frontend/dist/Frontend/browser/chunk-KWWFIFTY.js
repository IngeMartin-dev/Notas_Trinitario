import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-G4AEIR3O.js";

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  isDark = signal(false, ...ngDevMode ? [{ debugName: "isDark" }] : []);
  storageKey = "theme";
  constructor() {
    this.isDark.set(this.readInitial());
    effect(() => {
      const dark = this.isDark();
      this.apply(dark);
      localStorage.setItem(this.storageKey, dark ? "dark" : "light");
    });
  }
  toggle() {
    this.isDark.update((v) => !v);
  }
  setDark(dark) {
    this.isDark.set(dark);
  }
  readInitial() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      return saved === "dark";
    }
    try {
      return !!window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return false;
    }
  }
  apply(dark) {
    const root = document.documentElement;
    const body = document.body;
    if (dark) {
      root.setAttribute("data-theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      body.removeAttribute("data-theme");
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-KWWFIFTY.js.map
