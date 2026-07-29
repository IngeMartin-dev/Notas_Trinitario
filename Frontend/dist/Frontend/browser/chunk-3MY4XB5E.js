import {
  NotificationService
} from "./chunk-B2PPFIPW.js";
import {
  Router
} from "./chunk-7DDXMRNS.js";
import {
  AuthService
} from "./chunk-UNKQMH5O.js";
import "./chunk-VCEXV2JC.js";
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
  Component,
  setClassMetadata,
  signal,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G4AEIR3O.js";

// src/app/login/login.ts
function Login_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.buttonText());
  }
}
function Login_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
var Login = class _Login {
  authService;
  router;
  notificationService;
  username = signal("", ...ngDevMode ? [{ debugName: "username" }] : []);
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  buttonState = signal("default", ...ngDevMode ? [{ debugName: "buttonState" }] : []);
  buttonText = signal("Iniciar Sesi\xF3n", ...ngDevMode ? [{ debugName: "buttonText" }] : []);
  errorVisible = signal(false, ...ngDevMode ? [{ debugName: "errorVisible" }] : []);
  errorHiding = signal(false, ...ngDevMode ? [{ debugName: "errorHiding" }] : []);
  isFadingOut = signal(false, ...ngDevMode ? [{ debugName: "isFadingOut" }] : []);
  passwordVisible = signal(false, ...ngDevMode ? [{ debugName: "passwordVisible" }] : []);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  minLoadingTime = 1500;
  // Minimum spinner display time in ms
  loadingStartTime = 0;
  constructor(authService, router, notificationService) {
    this.authService = authService;
    this.router = router;
    this.notificationService = notificationService;
  }
  togglePasswordVisibility() {
    this.passwordVisible.set(!this.passwordVisible());
  }
  onLogin() {
    this.errorMessage.set("");
    this.errorVisible.set(false);
    this.errorHiding.set(false);
    this.buttonState.set("default");
    this.buttonText.set("Iniciar Sesi\xF3n");
    this.isLoading.set(true);
    this.loadingStartTime = Date.now();
    if (!this.username() || !this.password()) {
      this.errorMessage.set("Por favor ingrese usuario y contrase\xF1a");
      this.errorVisible.set(true);
      this.errorHiding.set(false);
      this.isLoading.set(false);
      setTimeout(() => {
        this.errorHiding.set(true);
        setTimeout(() => this.errorVisible.set(false), 500);
      }, 5e3);
      return;
    }
    this.authService.login({
      username: this.username(),
      password: this.password()
    }).subscribe({
      next: (response) => {
        console.log("Login successful:", response);
        this.authService.getCurrentUser().subscribe({
          next: (user) => {
            if (user && user.id) {
              this.notificationService.registerPushToken(user.id);
            }
          },
          error: (err) => console.error("Error getting current user:", err)
        });
        const elapsed = Date.now() - this.loadingStartTime;
        const delay = Math.max(0, this.minLoadingTime - elapsed);
        setTimeout(() => {
          this.isLoading.set(false);
          this.buttonState.set("success");
          this.buttonText.set("Bienvenido");
          setTimeout(() => {
            this.isFadingOut.set(true);
            setTimeout(() => {
              this.router.navigate(["/dashboard"]);
            }, 500);
          }, 1e3);
        }, delay);
      },
      error: (error) => {
        console.error("Login error:", error);
        const elapsed = Date.now() - this.loadingStartTime;
        const delay = Math.max(0, this.minLoadingTime - elapsed);
        setTimeout(() => {
          this.isLoading.set(false);
          this.buttonState.set("error");
          this.buttonText.set("Incorrecto");
          this.errorMessage.set(error.message || "Error al iniciar sesi\xF3n");
          this.errorVisible.set(true);
          this.errorHiding.set(false);
          setTimeout(() => {
            this.errorHiding.set(true);
            setTimeout(() => {
              this.errorVisible.set(false);
              this.buttonState.set("default");
              this.buttonText.set("Iniciar Sesi\xF3n");
            }, 500);
          }, 5e3);
        }, delay);
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 41, vars: 20, consts: [[1, "login-container"], [1, "left-panel"], [1, "logo-container"], ["src", "Logo Colegio.png", "alt", "Logo Colegio", 1, "school-logo"], [1, "right-panel"], [1, "login-form-container"], [1, "form-header"], [1, "login-form", 3, "submit"], [1, "form-group"], ["for", "username"], [1, "input-group"], [1, "material-icons", "input-icon"], ["type", "text", "id", "username", "name", "username", "placeholder", "Ingrese su usuario", "autocomplete", "username", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "name", "password", "placeholder", "Ingrese su contrase\xF1a", "autocomplete", "current-password", "required", "", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "material-icons"], ["type", "button", 1, "login-btn", 3, "click", "disabled"], [1, "loading-spinner"], [1, "error-message"], [1, "footer-text"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Notas Trinitario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Sistema de Gesti\xF3n Acad\xE9mica");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h2");
      \u0275\u0275text(12, "Iniciar Sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Ingresa tu correo y contrase\xF1a para acceder a la app");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "form", 7);
      \u0275\u0275listener("submit", function Login_Template_form_submit_15_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
      \u0275\u0275text(18, "Usuario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10)(20, "span", 11);
      \u0275\u0275text(21, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 12);
      \u0275\u0275listener("ngModelChange", function Login_Template_input_ngModelChange_22_listener($event) {
        return ctx.username.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 8)(24, "label", 13);
      \u0275\u0275text(25, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
      \u0275\u0275text(28, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 14);
      \u0275\u0275listener("ngModelChange", function Login_Template_input_ngModelChange_29_listener($event) {
        return ctx.password.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 15);
      \u0275\u0275listener("click", function Login_Template_button_click_30_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275elementStart(31, "span", 16);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "button", 17);
      \u0275\u0275listener("click", function Login_Template_button_click_33_listener($event) {
        ctx.onLogin();
        return $event.preventDefault();
      });
      \u0275\u0275conditionalCreate(34, Login_Conditional_34_Template, 2, 1, "span");
      \u0275\u0275conditionalCreate(35, Login_Conditional_35_Template, 1, 0, "span", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 20)(39, "p");
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("fade-out", ctx.isFadingOut());
      \u0275\u0275advance(22);
      \u0275\u0275property("ngModel", ctx.username());
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.passwordVisible() ? "text" : "password")("ngModel", ctx.password());
      \u0275\u0275advance();
      \u0275\u0275attribute("title", ctx.passwordVisible() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.passwordVisible() ? "visibility_off" : "visibility", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("success", ctx.buttonState() === "success")("error", ctx.buttonState() === "error");
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.errorVisible())("hide", ctx.errorHiding());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.errorMessage(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Notas Trinitario");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  transition: opacity 1s ease-out;\n}\n.login-container.fade-out[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.left-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #1e6be7 0%,\n      #3784f0 50%,\n      #0b68e9 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  position: relative;\n  overflow: hidden;\n}\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  z-index: 1;\n  position: relative;\n}\n.school-logo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 30px;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n}\n.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  margin: 0 0 15px 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n}\n.logo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  opacity: 0.9;\n  font-weight: 400;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.login-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 500;\n}\n.login-form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #374151;\n  font-weight: 600;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 20px;\n  z-index: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 50px 15px 50px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n  background: #f9fafb;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n  transform: translateY(-50%) scale(1.05);\n}\n.password-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.password-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: all 0.3s ease;\n}\n.password-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_eyeIconPulse 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_eyeIconPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0e61e6 0%,\n      #0f6df0 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.3);\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #346beb 0%,\n      #0c60e7 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgb(28, 107, 233);\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 1px 4px rgb(35, 109, 228);\n}\n.login-btn.success[_ngcontent-%COMP%] {\n  background: #10b981 !important;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);\n}\n.login-btn.error[_ngcontent-%COMP%] {\n  background: #ef4444 !important;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: center;\n  border: 1px solid #fecaca;\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: opacity 0.5s ease-out, transform 0.5s ease-out;\n}\n.error-message.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.error-message.hide[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.error-message.hide[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 12px;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    flex: none;\n    min-height: 300px;\n    padding: 30px 20px;\n  }\n  .right-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 30px 20px;\n  }\n  .school-logo[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    margin-bottom: 20px;\n  }\n  .logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .logo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .left-panel[_ngcontent-%COMP%], \n   .right-panel[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .login-form-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .form-input[_ngcontent-%COMP%] {\n    padding: 12px 45px 12px 45px;\n  }\n  .input-icon[_ngcontent-%COMP%] {\n    left: 12px;\n    font-size: 18px;\n  }\n  .password-toggle[_ngcontent-%COMP%] {\n    right: 8px;\n    padding: 6px;\n  }\n  .password-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n[data-theme="dark"][_nghost-%COMP%]   .right-panel[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--text-4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-input[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, [data-theme="dark"]   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, [data-theme="dark"]   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .password-toggle[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [FormsModule], template: `<div class="login-container" [class.fade-out]="isFadingOut()">
  <!-- Left side - Blue background with logo -->
  <div class="left-panel">
    <div class="logo-container">
      <img src="Logo Colegio.png" alt="Logo Colegio" class="school-logo">
      <h1>Notas Trinitario</h1>
      <p>Sistema de Gesti\xF3n Acad\xE9mica</p>
    </div>
  </div>

  <!-- Right side - Login form -->
  <div class="right-panel">
    <div class="login-form-container">
      <div class="form-header">
        <h2>Iniciar Sesi\xF3n</h2>
        <p>Ingresa tu correo y contrase\xF1a para acceder a la app</p>
      </div>

      <form class="login-form" (submit)="$event.preventDefault()">
        <div class="form-group">
          <label for="username">Usuario</label>
          <div class="input-group">
            <span class="material-icons input-icon">person</span>
               <input
               type="text"
               id="username"
               [ngModel]="username()"
               (ngModelChange)="username.set($event)"
               name="username"
               placeholder="Ingrese su usuario"
               autocomplete="username"
               required
               class="form-input">
            </div>
          </div>

          <div class="form-group">
            <label for="password">Contrase\xF1a</label>
            <div class="input-group">
              <span class="material-icons input-icon">lock</span>
            <input
              [type]="passwordVisible() ? 'text' : 'password'"
              id="password"
              [ngModel]="password()"
              (ngModelChange)="password.set($event)"
              name="password"
              placeholder="Ingrese su contrase\xF1a"
              autocomplete="current-password"
              required
              class="form-input">
                <button
                  type="button"
                  class="password-toggle"
                  (click)="togglePasswordVisibility()"
                  [attr.title]="passwordVisible() ? 'Ocultar contrase\xF1a' : 'Mostrar contrase\xF1a'">
                  <span class="material-icons">
                    {{ passwordVisible() ? 'visibility_off' : 'visibility' }}
                  </span>
                </button>
              </div>
            </div>

            <button type="button" class="login-btn" [class.success]="buttonState() === 'success'" [class.error]="buttonState() === 'error'" [disabled]="isLoading()" (click)="onLogin(); $event.preventDefault()">
              @if (!isLoading()) {
                <span>{{ buttonText() }}</span>
              }
              @if (isLoading()) {
                <span class="loading-spinner"></span>
              }
            </button>
          </form>

          <div class="error-message" [class.visible]="errorVisible()" [class.hide]="errorHiding()">
            {{ errorMessage() }}
          </div>

          <div class="footer-text">
            <p>&copy; {{ currentYear }} Notas Trinitario</p>
          </div>
        </div>
      </div>
    </div>
`, styles: ['/* src/app/login/login.css */\n.login-container {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  transition: opacity 1s ease-out;\n}\n.login-container.fade-out {\n  opacity: 0;\n}\n.left-panel {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #1e6be7 0%,\n      #3784f0 50%,\n      #0b68e9 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  position: relative;\n  overflow: hidden;\n}\n.logo-container {\n  text-align: center;\n  color: white;\n  z-index: 1;\n  position: relative;\n}\n.school-logo {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 30px;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n}\n.logo-container h1 {\n  font-size: 36px;\n  font-weight: 800;\n  margin: 0 0 15px 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n}\n.logo-container p {\n  font-size: 18px;\n  margin: 0;\n  opacity: 0.9;\n  font-weight: 400;\n}\n.right-panel {\n  flex: 1;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.login-form-container {\n  width: 100%;\n  max-width: 400px;\n}\n.form-header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.form-header h2 {\n  color: #0f172a;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n}\n.form-header p {\n  color: #475569;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 500;\n}\n.login-form {\n  margin-bottom: 20px;\n}\n.form-group {\n  margin-bottom: 25px;\n}\n.form-group label {\n  display: block;\n  color: #374151;\n  font-weight: 600;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.input-group {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 20px;\n  z-index: 1;\n}\n.form-input {\n  width: 100%;\n  padding: 15px 50px 15px 50px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n  background: #f9fafb;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input::placeholder {\n  color: #9ca3af;\n}\n.password-toggle {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.password-toggle:hover {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n  transform: translateY(-50%) scale(1.05);\n}\n.password-toggle:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.password-toggle .material-icons {\n  font-size: 20px;\n  transition: all 0.3s ease;\n}\n.password-toggle .material-icons {\n  animation: eyeIconPulse 0.3s ease;\n}\n@keyframes eyeIconPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.login-btn {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0e61e6 0%,\n      #0f6df0 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.3);\n}\n.login-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #346beb 0%,\n      #0c60e7 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgb(28, 107, 233);\n}\n.login-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 1px 4px rgb(35, 109, 228);\n}\n.login-btn.success {\n  background: #10b981 !important;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);\n}\n.login-btn.error {\n  background: #ef4444 !important;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.loading-spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  background: #fee2e2;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: center;\n  border: 1px solid #fecaca;\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: opacity 0.5s ease-out, transform 0.5s ease-out;\n}\n.error-message.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n.error-message.hide {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.error-message.hide {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.footer-text {\n  text-align: center;\n  margin-top: 30px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.footer-text p {\n  color: #6b7280;\n  font-size: 12px;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .login-container {\n    flex-direction: column;\n  }\n  .left-panel {\n    flex: none;\n    min-height: 300px;\n    padding: 30px 20px;\n  }\n  .right-panel {\n    flex: 1;\n    padding: 30px 20px;\n  }\n  .school-logo {\n    width: 80px;\n    height: 80px;\n    margin-bottom: 20px;\n  }\n  .logo-container h1 {\n    font-size: 24px;\n  }\n  .logo-container p {\n    font-size: 14px;\n  }\n  .form-header h2 {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .left-panel,\n  .right-panel {\n    padding: 20px;\n  }\n  .login-form-container {\n    max-width: 100%;\n  }\n  .form-input {\n    padding: 12px 45px 12px 45px;\n  }\n  .input-icon {\n    left: 12px;\n    font-size: 18px;\n  }\n  .password-toggle {\n    right: 8px;\n    padding: 6px;\n  }\n  .password-toggle .material-icons {\n    font-size: 18px;\n  }\n}\n:host-context([data-theme="dark"]) .right-panel {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .form-header h2 {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .form-header p {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .form-group label {\n  color: var(--text-2);\n}\n:host-context([data-theme="dark"]) .input-icon {\n  color: var(--text-4);\n}\n:host-context([data-theme="dark"]) .form-input {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .form-input:focus {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .form-input::placeholder {\n  color: var(--text-4);\n}\n:host-context([data-theme="dark"]) .password-toggle {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .footer-text p {\n  color: var(--text-3);\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "app/login/login.ts", lineNumber: 14 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-3MY4XB5E.js.map
