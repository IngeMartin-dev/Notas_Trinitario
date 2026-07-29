import {
  ActivatedRoute,
  Router
} from "./chunk-7DDXMRNS.js";
import "./chunk-VCEXV2JC.js";
import {
  CommonModule,
  Component,
  HttpClient,
  catchError,
  of,
  setClassMetadata,
  take,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-G4AEIR3O.js";

// src/app/not-found/not-found.ts
function NotFound_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 4);
    \u0275\u0275domElement(1, "circle", 10)(2, "path", 11)(3, "path", 12)(4, "path", 13)(5, "circle", 14)(6, "line", 15);
    \u0275\u0275domElementEnd();
  }
}
function NotFound_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 4);
    \u0275\u0275domElement(1, "circle", 10)(2, "path", 16)(3, "line", 17)(4, "line", 18)(5, "circle", 19);
    \u0275\u0275domElementEnd();
  }
}
function NotFound_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1, "Error de conexi\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "h1", 21);
    \u0275\u0275text(3, "Sin conexi\xF3n con el servidor");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 22);
    \u0275\u0275text(5, " No pudimos comunicarnos con el servidor de ");
    \u0275\u0275domElementStart(6, "strong");
    \u0275\u0275text(7, "Notas Trinitario");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8, ". Verifica tu conexi\xF3n a internet o que el servidor est\xE9 disponible e int\xE9ntalo de nuevo. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 23);
    \u0275\u0275domElement(10, "span", 24);
    \u0275\u0275domElementStart(11, "span");
    \u0275\u0275text(12, "Reconectando autom\xE1ticamente\u2026");
    \u0275\u0275domElementEnd()();
  }
}
function NotFound_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1, "Error 404");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "h1", 21);
    \u0275\u0275text(3, "P\xE1gina no encontrada");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 22);
    \u0275\u0275text(5, " La p\xE1gina que buscas no existe o fue movida. Regresa al inicio para continuar usando la plataforma. ");
    \u0275\u0275domElementEnd();
  }
}
var NotFound = class _NotFound {
  route;
  router;
  http;
  isConnection = false;
  checking = false;
  // El API corre en :8080 (igual base que el resto de la app)
  apiBase = "http://localhost:8080";
  stop = false;
  sub;
  pollTimer;
  constructor(route, router, http) {
    this.route = route;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.isConnection = params.get("reason") === "connection";
    });
    if (this.isConnection) {
      this.poll();
    }
  }
  ngOnDestroy() {
    this.stop = true;
    this.sub?.unsubscribe();
    if (this.pollTimer) {
      clearTimeout(this.pollTimer);
    }
  }
  /** Sondea el servidor; al recuperarlo, navega al login automáticamente. */
  poll() {
    if (this.stop)
      return;
    this.checking = true;
    this.sub = this.http.get(`${this.apiBase}/api/health`, { observe: "response" }).pipe(timeout(4e3), catchError(() => of(null)), take(1)).subscribe({
      next: (res) => {
        this.checking = false;
        if (res) {
          this.stop = true;
          this.router.navigate(["/login"]);
        } else {
          this.pollTimer = setTimeout(() => this.poll(), 4e3);
        }
      }
    });
  }
  /** Intento inmediato de reconexión (botón Reintentar). */
  retry() {
    if (this.pollTimer) {
      clearTimeout(this.pollTimer);
    }
    this.poll();
  }
  goHome() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function NotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFound)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["app-not-found"]], decls: 19, vars: 4, consts: [[1, "nf-root"], [1, "nf-card"], [1, "nf-accent"], ["aria-hidden", "true", 1, "nf-illustration"], ["viewBox", "0 0 200 200", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], [1, "nf-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "btn", "btn-outline", 3, "click"], [1, "nf-footer"], ["cx", "100", "cy", "100", "r", "84", "fill", "var(--brand-50)"], ["d", "M50 124 a50 50 0 0 1 100 0", "stroke", "var(--brand)", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M68 124 a32 32 0 0 1 64 0", "stroke", "var(--brand)", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M84 124 a16 16 0 0 1 32 0", "stroke", "var(--brand)", "stroke-width", "7", "stroke-linecap", "round"], ["cx", "100", "cy", "140", "r", "6.5", "fill", "var(--brand)"], ["x1", "54", "y1", "72", "x2", "146", "y2", "128", "stroke", "var(--danger)", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M72 70 h56 a8 8 0 0 1 8 8 v44 a8 8 0 0 1 -8 8 h-56 a8 8 0 0 1 -8 -8 v-44 a8 8 0 0 1 8 -8 z", "stroke", "var(--brand)", "stroke-width", "7", "stroke-linejoin", "round"], ["x1", "78", "y1", "118", "x2", "122", "y2", "118", "stroke", "var(--brand)", "stroke-width", "7", "stroke-linecap", "round"], ["x1", "100", "y1", "86", "x2", "100", "y2", "104", "stroke", "var(--danger)", "stroke-width", "7", "stroke-linecap", "round"], ["cx", "100", "cy", "112", "r", "3", "fill", "var(--danger)"], [1, "nf-eyebrow"], [1, "nf-title"], [1, "nf-text"], [1, "nf-status"], [1, "nf-dot"]], template: function NotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, NotFound_Conditional_4_Template, 7, 0, ":svg:svg", 4)(5, NotFound_Conditional_5_Template, 6, 0, ":svg:svg", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, NotFound_Conditional_6_Template, 13, 0)(7, NotFound_Conditional_7_Template, 6, 0);
      \u0275\u0275domElementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275domListener("click", function NotFound_Template_button_click_9_listener() {
        return ctx.retry();
      });
      \u0275\u0275domElementStart(10, "span", 7);
      \u0275\u0275text(11, "refresh");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(12, " Reintentar ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "button", 8);
      \u0275\u0275domListener("click", function NotFound_Template_button_click_13_listener() {
        return ctx.goHome();
      });
      \u0275\u0275domElementStart(14, "span", 7);
      \u0275\u0275text(15, "home");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(16, " Ir al inicio ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "p", 9);
      \u0275\u0275text(18, "Notas Trinitario \xB7 Instituci\xF3n Educativa Trinitario");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("nf-connection", ctx.isConnection);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isConnection ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isConnection ? 6 : 7);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.nf-root[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-5);\n  padding: var(--sp-6) var(--sp-4);\n  background:\n    radial-gradient(\n      1100px 520px at 50% -10%,\n      var(--brand-50),\n      transparent 60%),\n    linear-gradient(\n      180deg,\n      #f4f7fc 0%,\n      var(--bg) 100%);\n  text-align: center;\n  animation: _ngcontent-%COMP%_nfFade 0.4s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_nfFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.nf-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 460px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-lg);\n  padding: var(--sp-8) var(--sp-6) var(--sp-6);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_nfRise 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n@keyframes _ngcontent-%COMP%_nfRise {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.nf-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand) 0%,\n      var(--brand-500) 55%,\n      var(--accent) 100%);\n}\n.nf-illustration[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: var(--sp-5);\n}\n.nf-illustration[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 148px;\n  height: 148px;\n  animation: _ngcontent-%COMP%_nfFloat 4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_nfFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-7px);\n  }\n}\n.nf-eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--brand);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  padding: 0.25rem 0.7rem;\n  border-radius: var(--r-pill);\n  margin-bottom: var(--sp-4);\n}\n.nf-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-3);\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.nf-text[_ngcontent-%COMP%] {\n  margin: 0 auto var(--sp-5);\n  max-width: 380px;\n  font-size: 0.96rem;\n  color: var(--text-3);\n  line-height: 1.6;\n}\n.nf-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-weight: 700;\n}\n.nf-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.5rem 0.9rem;\n  margin-bottom: var(--sp-5);\n  border-radius: var(--r-pill);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.nf-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--warning);\n  box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.5);\n  animation: _ngcontent-%COMP%_nfPulse 1.6s ease-out infinite;\n}\n@keyframes _ngcontent-%COMP%_nfPulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(217, 119, 6, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(217, 119, 6, 0);\n  }\n}\n.nf-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.nf-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.nf-footer[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: var(--text-4);\n  letter-spacing: 0.01em;\n}\n@media (max-width: 480px) {\n  .nf-card[_ngcontent-%COMP%] {\n    padding: var(--sp-6) var(--sp-4) var(--sp-5);\n  }\n  .nf-title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .nf-illustration[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 124px;\n    height: 124px;\n  }\n  .nf-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .nf-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=not-found.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [CommonModule], template: '<div class="nf-root" [class.nf-connection]="isConnection">\n  <div class="nf-card">\n    <div class="nf-accent"></div>\n\n    <div class="nf-illustration" aria-hidden="true">\n      @if (isConnection) {\n        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="100" cy="100" r="84" fill="var(--brand-50)"></circle>\n          <path d="M50 124 a50 50 0 0 1 100 0" stroke="var(--brand)" stroke-width="7" stroke-linecap="round"></path>\n          <path d="M68 124 a32 32 0 0 1 64 0" stroke="var(--brand)" stroke-width="7" stroke-linecap="round"></path>\n          <path d="M84 124 a16 16 0 0 1 32 0" stroke="var(--brand)" stroke-width="7" stroke-linecap="round"></path>\n          <circle cx="100" cy="140" r="6.5" fill="var(--brand)"></circle>\n          <line x1="54" y1="72" x2="146" y2="128" stroke="var(--danger)" stroke-width="7" stroke-linecap="round"></line>\n        </svg>\n      } @else {\n        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="100" cy="100" r="84" fill="var(--brand-50)"></circle>\n          <path d="M72 70 h56 a8 8 0 0 1 8 8 v44 a8 8 0 0 1 -8 8 h-56 a8 8 0 0 1 -8 -8 v-44 a8 8 0 0 1 8 -8 z"\n                stroke="var(--brand)" stroke-width="7" stroke-linejoin="round"></path>\n          <line x1="78" y1="118" x2="122" y2="118" stroke="var(--brand)" stroke-width="7" stroke-linecap="round"></line>\n          <line x1="100" y1="86" x2="100" y2="104" stroke="var(--danger)" stroke-width="7" stroke-linecap="round"></line>\n          <circle cx="100" cy="112" r="3" fill="var(--danger)"></circle>\n        </svg>\n      }\n    </div>\n\n    @if (isConnection) {\n      <span class="nf-eyebrow">Error de conexi\xF3n</span>\n      <h1 class="nf-title">Sin conexi\xF3n con el servidor</h1>\n      <p class="nf-text">\n        No pudimos comunicarnos con el servidor de <strong>Notas Trinitario</strong>.\n        Verifica tu conexi\xF3n a internet o que el servidor est\xE9 disponible e int\xE9ntalo de nuevo.\n      </p>\n      <div class="nf-status">\n        <span class="nf-dot"></span>\n        <span>Reconectando autom\xE1ticamente\u2026</span>\n      </div>\n    } @else {\n      <span class="nf-eyebrow">Error 404</span>\n      <h1 class="nf-title">P\xE1gina no encontrada</h1>\n      <p class="nf-text">\n        La p\xE1gina que buscas no existe o fue movida.\n        Regresa al inicio para continuar usando la plataforma.\n      </p>\n    }\n\n    <div class="nf-actions">\n      <button class="btn btn-primary" (click)="retry()">\n        <span class="material-icons">refresh</span>\n        Reintentar\n      </button>\n      <button class="btn btn-outline" (click)="goHome()">\n        <span class="material-icons">home</span>\n        Ir al inicio\n      </button>\n    </div>\n  </div>\n\n  <p class="nf-footer">Notas Trinitario \xB7 Instituci\xF3n Educativa Trinitario</p>\n</div>\n', styles: ["/* src/app/not-found/not-found.css */\n.nf-root {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-5);\n  padding: var(--sp-6) var(--sp-4);\n  background:\n    radial-gradient(\n      1100px 520px at 50% -10%,\n      var(--brand-50),\n      transparent 60%),\n    linear-gradient(\n      180deg,\n      #f4f7fc 0%,\n      var(--bg) 100%);\n  text-align: center;\n  animation: nfFade 0.4s ease-out both;\n}\n@keyframes nfFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.nf-card {\n  position: relative;\n  width: 100%;\n  max-width: 460px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-lg);\n  padding: var(--sp-8) var(--sp-6) var(--sp-6);\n  overflow: hidden;\n  animation: nfRise 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n@keyframes nfRise {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.nf-accent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand) 0%,\n      var(--brand-500) 55%,\n      var(--accent) 100%);\n}\n.nf-illustration {\n  display: flex;\n  justify-content: center;\n  margin-bottom: var(--sp-5);\n}\n.nf-illustration svg {\n  width: 148px;\n  height: 148px;\n  animation: nfFloat 4s ease-in-out infinite;\n}\n@keyframes nfFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-7px);\n  }\n}\n.nf-eyebrow {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--brand);\n  background: var(--brand-50);\n  border: 1px solid var(--brand-100);\n  padding: 0.25rem 0.7rem;\n  border-radius: var(--r-pill);\n  margin-bottom: var(--sp-4);\n}\n.nf-title {\n  margin: 0 0 var(--sp-3);\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: var(--text-1);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.nf-text {\n  margin: 0 auto var(--sp-5);\n  max-width: 380px;\n  font-size: 0.96rem;\n  color: var(--text-3);\n  line-height: 1.6;\n}\n.nf-text strong {\n  color: var(--text-2);\n  font-weight: 700;\n}\n.nf-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.5rem 0.9rem;\n  margin-bottom: var(--sp-5);\n  border-radius: var(--r-pill);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.nf-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--warning);\n  box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.5);\n  animation: nfPulse 1.6s ease-out infinite;\n}\n@keyframes nfPulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(217, 119, 6, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(217, 119, 6, 0);\n  }\n}\n.nf-actions {\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.nf-actions .btn {\n  min-width: 140px;\n}\n.nf-footer {\n  margin: 0;\n  font-size: 0.8rem;\n  color: var(--text-4);\n  letter-spacing: 0.01em;\n}\n@media (max-width: 480px) {\n  .nf-card {\n    padding: var(--sp-6) var(--sp-4) var(--sp-5);\n  }\n  .nf-title {\n    font-size: 1.35rem;\n  }\n  .nf-illustration svg {\n    width: 124px;\n    height: 124px;\n  }\n  .nf-actions {\n    flex-direction: column;\n  }\n  .nf-actions .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=not-found.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "app/not-found/not-found.ts", lineNumber: 14 });
})();
export {
  NotFound
};
//# sourceMappingURL=chunk-JVNFPV6D.js.map
