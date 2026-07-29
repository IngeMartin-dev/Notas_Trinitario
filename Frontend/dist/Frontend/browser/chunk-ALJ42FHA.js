import {
  ThemeService
} from "./chunk-KWWFIFTY.js";
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
  NgModel
} from "./chunk-TCE2U3R2.js";
import {
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
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

// src/app/settings/settings.ts
function Settings_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 54);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\xA1Contrase\xF1a actualizada correctamente!");
    \u0275\u0275elementEnd()();
  }
}
function Settings_Conditional_33_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passwordChangeError());
  }
}
function Settings_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "label", 56);
    \u0275\u0275text(2, "Contrase\xF1a Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function Settings_Conditional_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentPassword, $event) || (ctx_r1.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 55)(5, "label", 58);
    \u0275\u0275text(6, "Nueva Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function Settings_Conditional_33_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "label", 60);
    \u0275\u0275text(10, "Confirmar Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function Settings_Conditional_33_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, Settings_Conditional_33_Conditional_12_Template, 2, 1, "p", 62);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordChangeError() ? 12 : -1);
  }
}
function Settings_Conditional_34_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Cambiando... ");
  }
}
function Settings_Conditional_34_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Cambiar ");
  }
}
function Settings_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("click", function Settings_Conditional_34_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeChangePasswordModal());
    });
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function Settings_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePassword());
    });
    \u0275\u0275conditionalCreate(6, Settings_Conditional_34_Conditional_6_Template, 3, 0)(7, Settings_Conditional_34_Conditional_7_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isChangingPassword());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isChangingPassword() ? 6 : 7);
  }
}
function Settings_Conditional_199_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 64);
    \u0275\u0275listener("error", function Settings_Conditional_199_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.previewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function Settings_Conditional_200_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 65);
    \u0275\u0275listener("error", function Settings_Conditional_200_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.getCorrectImageUrl((tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.profilePicture), \u0275\u0275sanitizeUrl);
  }
}
function Settings_Conditional_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserInitials(), " ");
  }
}
function Settings_Conditional_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function Settings_Conditional_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 11);
    \u0275\u0275text(2, "photo_camera");
    \u0275\u0275elementEnd()();
  }
}
function Settings_Conditional_210_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function Settings_Conditional_210_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editName, $event) || (ctx_r1.editName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function Settings_Conditional_210_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editSurname, $event) || (ctx_r1.editSurname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function Settings_Conditional_210_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editEmail, $event) || (ctx_r1.editEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 71)(6, "button", 72);
    \u0275\u0275listener("click", function Settings_Conditional_210_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 73);
    \u0275\u0275listener("click", function Settings_Conditional_210_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditProfile());
    });
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hiding", ctx_r1.isFormHiding());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editSurname);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isUpdatingProfile());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isUpdatingProfile());
  }
}
function Settings_Conditional_224_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 74);
    \u0275\u0275elementStart(2, "div", 75)(3, "span", 11);
    \u0275\u0275text(4, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 76)(8, "button", 12);
    \u0275\u0275listener("click", function Settings_Conditional_224_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadProfilePicture());
    });
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Confirmar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function Settings_Conditional_224_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearPreview());
    });
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.previewUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
  }
}
var Settings = class _Settings {
  authService = inject(AuthService);
  http = inject(HttpClient);
  router = inject(Router);
  themeService = inject(ThemeService);
  // Tema (modo claro/oscuro) — estado compartido con el resto de la app
  isDarkTheme = this.themeService.isDark;
  currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : []);
  selectedFile = null;
  previewUrl = signal(null, ...ngDevMode ? [{ debugName: "previewUrl" }] : []);
  showSuccessNotification = signal(false, ...ngDevMode ? [{ debugName: "showSuccessNotification" }] : []);
  showLogoutConfirmation = signal(false, ...ngDevMode ? [{ debugName: "showLogoutConfirmation" }] : []);
  // Current year (dynamic)
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Settings - Notificaciones
  pushNotificationsEnabled = signal(true, ...ngDevMode ? [{ debugName: "pushNotificationsEnabled" }] : []);
  emailNotificationsEnabled = signal(true, ...ngDevMode ? [{ debugName: "emailNotificationsEnabled" }] : []);
  messageNotificationsEnabled = signal(true, ...ngDevMode ? [{ debugName: "messageNotificationsEnabled" }] : []);
  // Settings - Idioma
  selectedLanguage = signal("es", ...ngDevMode ? [{ debugName: "selectedLanguage" }] : []);
  // Settings - Security
  showChangePasswordModal = signal(false, ...ngDevMode ? [{ debugName: "showChangePasswordModal" }] : []);
  currentPassword = signal("", ...ngDevMode ? [{ debugName: "currentPassword" }] : []);
  newPassword = signal("", ...ngDevMode ? [{ debugName: "newPassword" }] : []);
  confirmPassword = signal("", ...ngDevMode ? [{ debugName: "confirmPassword" }] : []);
  passwordChangeError = signal(null, ...ngDevMode ? [{ debugName: "passwordChangeError" }] : []);
  passwordChangeSuccess = signal(false, ...ngDevMode ? [{ debugName: "passwordChangeSuccess" }] : []);
  isChangingPassword = signal(false, ...ngDevMode ? [{ debugName: "isChangingPassword" }] : []);
  // Settings - Legal
  showTermsModal = signal(false, ...ngDevMode ? [{ debugName: "showTermsModal" }] : []);
  showPrivacyModal = signal(false, ...ngDevMode ? [{ debugName: "showPrivacyModal" }] : []);
  // Edit profile fields
  isEditingProfile = signal(false, ...ngDevMode ? [{ debugName: "isEditingProfile" }] : []);
  editName = signal("", ...ngDevMode ? [{ debugName: "editName" }] : []);
  editSurname = signal("", ...ngDevMode ? [{ debugName: "editSurname" }] : []);
  editEmail = signal("", ...ngDevMode ? [{ debugName: "editEmail" }] : []);
  isUpdatingProfile = signal(false, ...ngDevMode ? [{ debugName: "isUpdatingProfile" }] : []);
  profileUpdateError = signal(null, ...ngDevMode ? [{ debugName: "profileUpdateError" }] : []);
  // Animation states for profile edit
  isFormHiding = signal(false, ...ngDevMode ? [{ debugName: "isFormHiding" }] : []);
  successNotificationTimer = null;
  canShowSuccessNotification = false;
  isComponentActive = false;
  notificationLockCounter = 0;
  notificationGuardian = null;
  constructor() {
    this.isComponentActive = false;
    this.notificationLockCounter = 0;
    this.lockdownNotifications();
    this.forceHideNotification();
    this.authService.currentUser$.subscribe((user) => {
      console.log("Settings - Auth service user updated:", user);
      this.currentUser.set(user);
      this.lockdownNotifications();
      this.forceHideNotification();
    });
    this.loadCurrentUser();
  }
  ngOnInit() {
    this.notificationLockCounter = 0;
    this.lockdownNotifications();
    this.forceHideNotification();
    this.isComponentActive = true;
    this.startNotificationGuardian();
    this.loadNotificationSettings();
    this.loadLanguageSettings();
    setTimeout(() => {
      this.forceHideNotification();
      this.lockdownNotifications();
    }, 50);
  }
  startNotificationGuardian() {
    this.notificationGuardian = setInterval(() => {
      if (this.showSuccessNotification() && !this.canShowSuccessNotification) {
        console.log("\u{1F6E1}\uFE0F Settings - Guardian detected unauthorized notification, forcing hide");
        this.forceHideNotification();
        this.lockdownNotifications();
      }
    }, 2e3);
  }
  lockdownNotifications() {
    this.canShowSuccessNotification = false;
    this.notificationLockCounter++;
    this.hideSuccessNotification();
    console.log(`\u{1F512} Settings - Notifications locked down (counter: ${this.notificationLockCounter})`);
  }
  unlockNotificationsForAction() {
    this.canShowSuccessNotification = true;
    console.log(`\u{1F513} Settings - Notifications unlocked for action (counter: ${this.notificationLockCounter})`);
  }
  forceHideNotification() {
    this.showSuccessNotification.set(false);
    console.log("\u{1F6AB} Settings - Notification force hidden");
  }
  ngOnDestroy() {
    this.isComponentActive = false;
    this.lockdownNotifications();
    this.forceHideNotification();
    if (this.successNotificationTimer) {
      clearTimeout(this.successNotificationTimer);
      this.successNotificationTimer = null;
    }
    if (this.notificationGuardian) {
      clearInterval(this.notificationGuardian);
      this.notificationGuardian = null;
      console.log("\u{1F6E1}\uFE0F Settings - Notification guardian stopped");
    }
  }
  openChangePasswordModal() {
    this.showChangePasswordModal.set(true);
    this.currentPassword.set("");
    this.newPassword.set("");
    this.confirmPassword.set("");
    this.passwordChangeError.set(null);
    this.passwordChangeSuccess.set(false);
  }
  closeChangePasswordModal() {
    this.showChangePasswordModal.set(false);
  }
  changePassword() {
    if (!this.currentPassword() || !this.newPassword() || !this.confirmPassword()) {
      this.passwordChangeError.set("Por favor completa todos los campos");
      return;
    }
    if (this.newPassword() !== this.confirmPassword()) {
      this.passwordChangeError.set("Las contrase\xF1as no coinciden");
      return;
    }
    if (this.newPassword().length < 6) {
      this.passwordChangeError.set("La contrase\xF1a debe tener al menos 6 caracteres");
      return;
    }
    this.isChangingPassword.set(true);
    this.passwordChangeError.set(null);
    this.passwordChangeSuccess.set(false);
    const userId = this.currentUser()?.id;
    if (!userId) {
      this.isChangingPassword.set(false);
      this.passwordChangeError.set("No se pudo identificar al usuario actual");
      return;
    }
    this.http.put(`${this.authService.API_BASE_URL}/users/${userId}/password`, {
      currentPassword: this.currentPassword(),
      newPassword: this.newPassword()
    }).subscribe({
      next: () => {
        this.passwordChangeSuccess.set(true);
        this.currentPassword.set("");
        this.newPassword.set("");
        this.confirmPassword.set("");
        setTimeout(() => {
          this.isChangingPassword.set(false);
          this.closeChangePasswordModal();
        }, 1500);
      },
      error: (error) => {
        console.error("Password change failed:", error);
        this.isChangingPassword.set(false);
        if (error.status === 401) {
          this.passwordChangeError.set("La contrase\xF1a actual es incorrecta");
        } else if (error.status === 0) {
          this.passwordChangeError.set("No se pudo conectar con el servidor");
        } else {
          this.passwordChangeError.set(error.error?.error || "Error al cambiar la contrase\xF1a");
        }
      }
    });
  }
  // ========== NOTIFICATION SETTINGS ==========
  onPushNotificationChange(enabled) {
    this.pushNotificationsEnabled.set(enabled);
    localStorage.setItem("pushNotifications", JSON.stringify(enabled));
    console.log("Push notifications:", enabled ? "enabled" : "disabled");
  }
  onEmailNotificationChange(enabled) {
    this.emailNotificationsEnabled.set(enabled);
    localStorage.setItem("emailNotifications", JSON.stringify(enabled));
    console.log("Email notifications:", enabled ? "enabled" : "disabled");
  }
  onMessageNotificationChange(enabled) {
    this.messageNotificationsEnabled.set(enabled);
    localStorage.setItem("messageNotifications", JSON.stringify(enabled));
    console.log("Message notifications:", enabled ? "enabled" : "disabled");
  }
  loadNotificationSettings() {
    const push = localStorage.getItem("pushNotifications");
    const email = localStorage.getItem("emailNotifications");
    const messages = localStorage.getItem("messageNotifications");
    if (push !== null)
      this.pushNotificationsEnabled.set(JSON.parse(push));
    if (email !== null)
      this.emailNotificationsEnabled.set(JSON.parse(email));
    if (messages !== null)
      this.messageNotificationsEnabled.set(JSON.parse(messages));
  }
  // ========== LANGUAGE SETTINGS ==========
  onLanguageChange(event) {
    const select = event.target;
    const lang = select.value;
    this.selectedLanguage.set(lang);
    localStorage.setItem("language", lang);
    console.log("Language changed to:", lang);
  }
  loadLanguageSettings() {
    const lang = localStorage.getItem("language");
    if (lang) {
      this.selectedLanguage.set(lang);
    }
    this.loadNotificationSettings();
  }
  // ========== THEME (Modo claro/oscuro) ==========
  // El estado vive en ThemeService; aquí solo delegamos.
  onThemeChange(enabled) {
    this.themeService.setDark(enabled);
    console.log("Tema:", enabled ? "oscuro" : "claro");
  }
  isAdmin() {
    const user = this.currentUser();
    if (user && user.role) {
      const roleName = user.role.name || user.role;
      return roleName === "ADMIN" || roleName === "admin";
    }
    return false;
  }
  // ========== PRIVACY SETTINGS ==========
  downloadMyData() {
    const userData = {
      profile: this.currentUser(),
      notificationSettings: {
        push: this.pushNotificationsEnabled(),
        email: this.emailNotificationsEnabled(),
        messages: this.messageNotificationsEnabled()
      },
      language: this.selectedLanguage(),
      exportDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    const dataStr = JSON.stringify(userData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mis-datos-notas-trinitario-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log("Data downloaded");
  }
  // ========== HELP & SUPPORT ==========
  contactSupport() {
    const subject = encodeURIComponent("Contacto desde Notas Trinitario");
    const body = encodeURIComponent(`

---
Usuario: ${this.currentUser()?.name || "No identificado"}
Email: ${this.currentUser()?.email || "No registrado"}`);
    window.open(`mailto:soporte@colegiotrinitario.edu.co?subject=${subject}&body=${body}`);
  }
  sendFeedback() {
    const feedback = prompt("\xBFTienes comentarios o sugerencias? Cu\xE9ntanos:");
    if (feedback) {
      console.log("Feedback enviado:", feedback);
      alert("\xA1Gracias por tus comentarios! Los hemos recibido.");
    }
  }
  openTerms() {
    this.showTermsModal.set(true);
  }
  closeTermsModal() {
    this.showTermsModal.set(false);
  }
  openPrivacyPolicy() {
    this.showPrivacyModal.set(true);
  }
  closePrivacyModal() {
    this.showPrivacyModal.set(false);
  }
  loadCurrentUser() {
    if (this.authService.isAuthenticated()) {
      this.authService.getCurrentUser().subscribe({
        next: (user) => {
          console.log("Settings - User loaded:", user);
          this.currentUser.set(user);
        },
        error: (err) => {
          console.error("Settings - Failed to load user:", err);
          this.currentUser.set(null);
        }
      });
    } else {
      this.currentUser.set(null);
    }
  }
  getUserInitials() {
    const user = this.currentUser();
    if (user && user.name && user.surname) {
      return (user.name.charAt(0) + user.surname.charAt(0)).toUpperCase();
    }
    return "U";
  }
  onFileSelected(event) {
    console.log("\u{1F4C1} File selection event:", event);
    const file = event.target.files[0];
    console.log("\u{1F4C1} Selected file:", file);
    this.selectedFile = file;
    if (file) {
      console.log("\u{1F4C1} Creating preview for file:", file.name, file.type, file.size);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        console.log("\u{1F4C1} Preview created successfully:", result ? "Success" : "Failed");
        this.previewUrl.set(result);
        console.log("\u{1F4C1} Preview URL set:", this.previewUrl());
      };
      reader.onerror = (error) => {
        console.error("\u274C FileReader error:", error);
        alert("Error al leer el archivo. Por favor intenta con otra imagen.");
        this.selectedFile = null;
      };
      reader.readAsDataURL(file);
    } else {
      console.log("\u{1F4C1} No file selected, clearing preview");
      this.previewUrl.set(null);
    }
  }
  clearPreview() {
    this.previewUrl.set(null);
    this.selectedFile = null;
    const fileInput = document.getElementById("profile-picture");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  displaySuccessNotification() {
    if (!this.isComponentActive || !this.canShowSuccessNotification || this.notificationLockCounter > 0) {
      console.log(`\u{1F6AB} Settings - Success notification blocked (active: ${this.isComponentActive}, authorized: ${this.canShowSuccessNotification}, locks: ${this.notificationLockCounter})`);
      return;
    }
    if (this.successNotificationTimer) {
      clearTimeout(this.successNotificationTimer);
      this.successNotificationTimer = null;
    }
    console.log(`\u2705 Settings - Showing success notification (UNLOCKED) - Counter: ${this.notificationLockCounter}`);
    this.showSuccessNotification.set(true);
    this.successNotificationTimer = setTimeout(() => {
      this.hideSuccessNotification();
      this.lockdownNotifications();
      this.forceHideNotification();
    }, 4e3);
  }
  hideSuccessNotification() {
    if (this.successNotificationTimer) {
      clearTimeout(this.successNotificationTimer);
      this.successNotificationTimer = null;
    }
    this.showSuccessNotification.set(false);
  }
  updateProfilePictureImmediately(profilePicturePath) {
    console.log("\u{1F5BC}\uFE0F Updating profile picture immediately to:", profilePicturePath);
    let fullImageUrl = profilePicturePath;
    if (profilePicturePath && !profilePicturePath.startsWith("http")) {
      fullImageUrl = `http://localhost:8080${profilePicturePath}`;
      console.log("\u{1F5BC}\uFE0F Constructed full image URL with backend port:", fullImageUrl);
    }
    const currentUserData = this.currentUser();
    if (currentUserData) {
      const updatedUser = __spreadProps(__spreadValues({}, currentUserData), {
        profilePicture: fullImageUrl
      });
      this.currentUser.set(updatedUser);
      console.log("\u{1F5BC}\uFE0F Profile picture updated. New user data:", updatedUser);
    } else {
      console.log("\u26A0\uFE0F No current user data available for update");
    }
  }
  // Helper method to ensure profile picture URLs are correct
  getCorrectImageUrl(imagePath) {
    if (!imagePath)
      return null;
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    const fullUrl = `http://localhost:8080${imagePath}`;
    console.log("\u{1F527} Converted image URL:", imagePath, "->", fullUrl);
    return fullUrl;
  }
  // Enhanced image error handler with fallback
  onImageError(event) {
    console.error("\u274C Image failed to load:", event.target.src);
    const img = event.target;
    if (img.src.includes("/uploads/profile-pictures/")) {
      console.log("\u{1F504} Profile picture failed to load, falling back to initials");
      img.style.display = "none";
      const parent = img.parentElement;
      if (parent) {
        const existingInitials = parent.querySelector(".user-initials-fallback");
        if (existingInitials) {
          existingInitials.remove();
        }
        const initialsDiv = document.createElement("div");
        initialsDiv.className = "user-initials user-initials-fallback";
        initialsDiv.textContent = this.getUserInitials();
        parent.appendChild(initialsDiv);
      }
    }
  }
  uploadProfilePicture() {
    console.log("\u{1F504} Upload button clicked!");
    console.log("Selected file:", this.selectedFile);
    console.log("Current user:", this.currentUser());
    if (!this.selectedFile) {
      console.error("\u274C No file selected");
      alert("Por favor selecciona una imagen primero");
      return;
    }
    if (!this.currentUser()) {
      console.error("\u274C No user data available");
      alert("No se pudo obtener la informaci\xF3n del usuario");
      return;
    }
    console.log("\u{1F4E4} Starting upload...");
    const formData = new FormData();
    formData.append("file", this.selectedFile);
    const userId = this.currentUser().id;
    const uploadUrl = `http://localhost:8080/api/users/${userId}/profile-picture`;
    console.log("\u{1F310} Upload URL:", uploadUrl);
    const token = this.authService.getToken();
    console.log("\u{1F511} Auth token available:", !!token);
    console.log("\u{1F511} Token length:", token ? token.length : 0);
    this.http.post(uploadUrl, formData).subscribe({
      next: (response) => {
        console.log("\u2705 Upload successful:", response);
        if (response && response.profilePicture) {
          this.updateProfilePictureImmediately(response.profilePicture);
        }
        this.authService.getCurrentUser().subscribe();
        this.clearPreview();
        if (this.notificationGuardian) {
          clearInterval(this.notificationGuardian);
          this.notificationGuardian = null;
        }
        this.unlockNotificationsForAction();
        this.displaySuccessNotification();
        setTimeout(() => {
          this.startNotificationGuardian();
        }, 4500);
      },
      error: (error) => {
        console.error("\u274C Upload failed:", error);
        console.error("\u274C Error status:", error.status);
        console.error("\u274C Error message:", error.message);
        console.error("\u274C Error URL:", error.url);
        console.error("\u274C Full error object:", JSON.stringify(error, null, 2));
        let errorMsg = "Error al subir la imagen. ";
        if (error.status === 0) {
          errorMsg += "No se puede conectar con el servidor. Verifica que el servidor est\xE9 ejecut\xE1ndose.";
        } else if (error.status === 404) {
          errorMsg += "El endpoint de la API no existe.";
        } else if (error.status === 401) {
          errorMsg += "No tienes permisos para realizar esta acci\xF3n.";
        } else if (error.status === 500) {
          errorMsg += "Error interno del servidor.";
        } else {
          errorMsg += `C\xF3digo de error: ${error.status}`;
        }
        alert(errorMsg + " Por favor intenta de nuevo.");
      }
    });
  }
  showLogoutDialog() {
    this.showLogoutConfirmation.set(true);
  }
  confirmLogout() {
    console.log("\u{1F5D1}\uFE0F Settings - User confirmed logout");
    this.showLogoutConfirmation.set(false);
    this.currentUser.set(null);
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  cancelLogout() {
    console.log("\u274C Settings - User cancelled logout");
    this.showLogoutConfirmation.set(false);
  }
  logout() {
    this.showLogoutDialog();
  }
  // Edit profile methods
  startEditProfile() {
    const user = this.currentUser();
    if (user) {
      this.editName.set(user.name || "");
      this.editSurname.set(user.surname || "");
      this.editEmail.set(user.email || "");
      this.isEditingProfile.set(true);
      this.profileUpdateError.set(null);
    }
  }
  cancelEditProfile() {
    this.isFormHiding.set(true);
    setTimeout(() => {
      this.isEditingProfile.set(false);
      this.isFormHiding.set(false);
      this.editName.set("");
      this.editSurname.set("");
      this.editEmail.set("");
      this.profileUpdateError.set(null);
    }, 250);
  }
  saveProfile() {
    const user = this.currentUser();
    if (!user || !user.id) {
      this.profileUpdateError.set("No se pudo obtener la informaci\xF3n del usuario");
      return;
    }
    const name = this.editName().trim();
    const surname = this.editSurname().trim();
    if (!name) {
      this.profileUpdateError.set("El nombre es obligatorio");
      return;
    }
    this.isUpdatingProfile.set(true);
    this.profileUpdateError.set(null);
    const updateData = {
      name,
      surname,
      email: this.editEmail(),
      username: user.username,
      enable: user.enable,
      profilePicture: user.profilePicture
    };
    const updateUrl = `http://localhost:8080/api/users/${user.id}`;
    this.http.put(updateUrl, updateData).subscribe({
      next: (updatedUser) => {
        console.log("\u2705 Profile updated successfully:", updatedUser);
        this.isFormHiding.set(true);
        setTimeout(() => {
          const newUserData = __spreadProps(__spreadValues({}, user), {
            name: updatedUser.name,
            surname: updatedUser.surname,
            email: updatedUser.email,
            profilePicture: user.profilePicture
          });
          this.currentUser.set(newUserData);
          this.isEditingProfile.set(false);
          this.isFormHiding.set(false);
          this.isUpdatingProfile.set(false);
          this.unlockNotificationsForAction();
          this.displayNameUpdateNotification();
        }, 250);
      },
      error: (error) => {
        console.error("\u274C Failed to update profile:", error);
        this.isUpdatingProfile.set(false);
        let errorMsg = "Error al actualizar el perfil. ";
        if (error.status === 0) {
          errorMsg += "No se puede conectar con el servidor.";
        } else if (error.status === 401) {
          errorMsg += "No tienes permisos para realizar esta acci\xF3n.";
        } else if (error.status === 500) {
          errorMsg += "Error interno del servidor.";
        } else {
          errorMsg += `C\xF3digo de error: ${error.status}`;
        }
        this.profileUpdateError.set(errorMsg);
      }
    });
  }
  displayNameUpdateNotification() {
    if (this.notificationGuardian) {
      clearInterval(this.notificationGuardian);
      this.notificationGuardian = null;
    }
    this.showSuccessNotification.set(true);
    setTimeout(() => {
      this.showSuccessNotification.set(false);
      this.lockdownNotifications();
      setTimeout(() => {
        this.startNotificationGuardian();
      }, 500);
    }, 4e3);
  }
  static \u0275fac = function Settings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Settings)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Settings, selectors: [["app-settings"]], decls: 427, vars: 27, consts: [[1, "success-notification"], [1, "notification-content"], [1, "checkmark-circle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 52 52", 1, "checkmark"], ["fill", "none", "d", "M14 27l8 8 16-16", 1, "checkmark__check"], [1, "logout-modal-overlay", 3, "click"], [1, "logout-modal", 3, "click"], [1, "modal-header"], [1, "modal-body"], [1, "modal-actions"], [1, "cancel-btn", 3, "click"], [1, "material-icons"], [1, "confirm-btn", 3, "click"], [1, "password-success"], [1, "logout-modal", "legal-modal", 3, "click"], [1, "modal-body", "legal-content"], [1, "last-update"], [1, "settings-container"], [1, "settings-section"], [1, "profile-section"], [1, "current-avatar"], ["alt", "Vista previa", 1, "avatar-preview", 3, "src"], ["alt", "Avatar", 3, "src"], [1, "user-initials"], [1, "preview-badge"], [1, "profile-badge"], [1, "profile-info-container"], [1, "profile-info"], [1, "inline-edit-form", 3, "hiding"], [1, "upload-section"], [1, "action-buttons-row"], ["for", "profile-picture", 1, "action-button", "upload-button"], [1, "button-text"], ["type", "file", "id", "profile-picture", "name", "profilePicture", "accept", "image/*", 1, "file-input", 3, "change"], [1, "action-button", "edit-button", 3, "click"], [1, "upload-preview"], [1, "settings-options"], [1, "setting-item"], [1, "setting-info"], [1, "material-icons", "setting-icon"], [1, "setting-text"], [1, "switch"], ["type", "checkbox", "id", "dark-mode", "name", "darkMode", "title", "Modo oscuro", 3, "change", "checked"], [1, "slider", "round"], ["type", "checkbox", "id", "push-notifications", "name", "pushNotifications", "title", "Notificaciones push", 3, "change", "checked"], ["type", "checkbox", "id", "email-notifications", "name", "emailNotifications", "title", "Notificaciones por email", 3, "change", "checked"], ["type", "checkbox", "id", "message-notifications", "name", "messageNotifications", "title", "Notificaciones de mensajes", 3, "change", "checked"], [1, "setting-item", "clickable", 3, "click"], [1, "material-icons", "chevron"], ["type", "checkbox", "id", "two-factor-auth", "name", "twoFactorAuth", "title", "Autenticaci\xF3n de dos factores"], [1, "setting-item", "clickable"], ["type", "checkbox", "id", "public-profile", "name", "publicProfile", "checked", "", "title", "Perfil p\xFAblico"], [1, "account-actions"], [1, "logout-btn", 3, "click"], [1, "material-icons", "success-icon"], [1, "form-group"], ["for", "current-password"], ["type", "password", "id", "current-password", "name", "currentPassword", "placeholder", "Ingresa tu contrase\xF1a actual", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], ["for", "new-password"], ["type", "password", "id", "new-password", "name", "newPassword", "placeholder", "Ingresa la nueva contrase\xF1a", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["for", "confirm-password"], ["type", "password", "id", "confirm-password", "name", "confirmPassword", "placeholder", "Confirma la nueva contrase\xF1a", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], [1, "error-message"], [1, "confirm-btn", 3, "click", "disabled"], ["alt", "Vista previa", 1, "avatar-preview", 3, "error", "src"], ["alt", "Avatar", 3, "error", "src"], [1, "inline-edit-form"], [1, "edit-fields-inline"], ["type", "text", "id", "edit-name", "name", "editName", "placeholder", "Nombre", 1, "input-inline", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "edit-surname", "name", "editSurname", "placeholder", "Apellido", 1, "input-inline", 3, "ngModelChange", "ngModel"], ["type", "email", "id", "edit-email", "name", "editEmail", "placeholder", "Correo", 1, "input-inline", 3, "ngModelChange", "ngModel"], [1, "btn-row"], ["title", "Guardar", 1, "btn-inline", "save", 3, "click", "disabled"], ["title", "Cancelar", 1, "btn-inline", "cancel", 3, "click", "disabled"], ["alt", "Vista previa", 1, "preview-thumbnail", 3, "src"], [1, "upload-info"], [1, "upload-actions"]], template: function Settings_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6, "\xA1Perfil actualizado!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Tu informaci\xF3n ha sido cambiada con \xE9xito");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275listener("click", function Settings_Template_div_click_9_listener() {
        return ctx.cancelLogout();
      });
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275listener("click", function Settings_Template_div_click_10_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(11, "div", 7)(12, "h3");
      \u0275\u0275text(13, "Confirmar Cierre de Sesi\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "p");
      \u0275\u0275text(16, "\xBFEst\xE1s seguro de que quieres cerrar sesi\xF3n?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "button", 10);
      \u0275\u0275listener("click", function Settings_Template_button_click_18_listener() {
        return ctx.cancelLogout();
      });
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Cancelar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 12);
      \u0275\u0275listener("click", function Settings_Template_button_click_22_listener() {
        return ctx.confirmLogout();
      });
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275text(24, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Confirmar ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 5);
      \u0275\u0275listener("click", function Settings_Template_div_click_26_listener() {
        return ctx.closeChangePasswordModal();
      });
      \u0275\u0275elementStart(27, "div", 6);
      \u0275\u0275listener("click", function Settings_Template_div_click_27_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(28, "div", 7)(29, "h3");
      \u0275\u0275text(30, "Cambiar Contrase\xF1a");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 8);
      \u0275\u0275conditionalCreate(32, Settings_Conditional_32_Template, 5, 0, "div", 13)(33, Settings_Conditional_33_Template, 13, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, Settings_Conditional_34_Template, 8, 2, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 5);
      \u0275\u0275listener("click", function Settings_Template_div_click_35_listener() {
        return ctx.closeTermsModal();
      });
      \u0275\u0275elementStart(36, "div", 14);
      \u0275\u0275listener("click", function Settings_Template_div_click_36_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(37, "div", 7)(38, "h3");
      \u0275\u0275text(39, "T\xE9rminos y Condiciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 15)(41, "h4");
      \u0275\u0275text(42, "1. ACEPTACI\xD3N DE T\xC9RMINOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, 'Al acceder y utilizar la aplicaci\xF3n "Notas Trinitario", usted acepta estar sujeto a estos t\xE9rminos y condiciones. Si no est\xE1 de acuerdo con alguno de estos t\xE9rminos, no debe utilizar esta aplicaci\xF3n.');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h4");
      \u0275\u0275text(46, "2. DESCRIPCI\xD3N DEL SERVICIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, "Notas Trinitario es una plataforma educativa desarrollada exclusivamente para el Colegio Trinitario, que permite a estudiantes y docentes gestionar calificaciones, reportes acad\xE9micos y comunicaci\xF3n institucional.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h4");
      \u0275\u0275text(50, "3. USO AUTORIZADO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Esta aplicaci\xF3n est\xE1 destinada exclusivamente a:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "ul")(54, "li");
      \u0275\u0275text(55, "Estudiantes matriculados en el Colegio Trinitario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "li");
      \u0275\u0275text(57, "Docentes y personal administrativo del colegio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "li");
      \u0275\u0275text(59, "Padres o representantes legales de estudiantes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61, "El uso de la aplicaci\xF3n para fines distintos a los educativos est\xE1 prohibido.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h4");
      \u0275\u0275text(63, "4. CUENTA DE USUARIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, "Cada usuario es responsable de mantener la confidencialidad de su cuenta y contrase\xF1a. El Colegio Trinitario no se hace responsable por cualquier p\xE9rdida o da\xF1o derivado del incumplimiento de esta obligaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h4");
      \u0275\u0275text(67, "5. PRIVACIDAD Y PROTECCI\xD3N DE DATOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p");
      \u0275\u0275text(69, "La informaci\xF3n personal recopilada est\xE1 sujeta a nuestra Pol\xEDtica de Privacidad. Al usar esta aplicaci\xF3n, usted consiente el tratamiento de sus datos conforme a dicha pol\xEDtica.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "h4");
      \u0275\u0275text(71, "6. PROPIEDAD INTELECTUAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p");
      \u0275\u0275text(73, "Todo el contenido, dise\xF1o, gr\xE1ficos y c\xF3digo de la aplicaci\xF3n son propiedad del Colegio Trinitario y est\xE1n protegidos por las leyes de propiedad intelectual vigentes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h4");
      \u0275\u0275text(75, "7. LIMITACI\xD3N DE RESPONSABILIDAD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p");
      \u0275\u0275text(77, "El Colegio Trinitario no garantiza que la aplicaci\xF3n est\xE9 libre de errores o disponible de manera continua. El uso de la aplicaci\xF3n es bajo responsabilidad del usuario.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "h4");
      \u0275\u0275text(79, "8. MODIFICACIONES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p");
      \u0275\u0275text(81, "El Colegio Trinitario se reserva el derecho de modificar estos t\xE9rminos en cualquier momento. Las modificaciones entrar\xE1n en vigor desde su publicaci\xF3n en la aplicaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h4");
      \u0275\u0275text(83, "9. CONTACTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85, "Para consultas sobre estos t\xE9rminos, contacte a soporte@colegiotrinitario.edu.co");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 16);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 9)(89, "button", 12);
      \u0275\u0275listener("click", function Settings_Template_button_click_89_listener() {
        return ctx.closeTermsModal();
      });
      \u0275\u0275elementStart(90, "span", 11);
      \u0275\u0275text(91, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(92, " Aceptar y Cerrar ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "div", 5);
      \u0275\u0275listener("click", function Settings_Template_div_click_93_listener() {
        return ctx.closePrivacyModal();
      });
      \u0275\u0275elementStart(94, "div", 14);
      \u0275\u0275listener("click", function Settings_Template_div_click_94_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(95, "div", 7)(96, "h3");
      \u0275\u0275text(97, "Pol\xEDtica de Privacidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 15)(99, "h4");
      \u0275\u0275text(100, "1. INFORMACI\xD3N RECOPILADA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p");
      \u0275\u0275text(102, "Recopilamos la siguiente informaci\xF3n personal:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "ul")(104, "li");
      \u0275\u0275text(105, "Informaci\xF3n de perfil: nombre, apellido, correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "li");
      \u0275\u0275text(107, "Datos acad\xE9micos: calificaciones, asistencia, reportes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "li");
      \u0275\u0275text(109, "Informaci\xF3n de uso de la aplicaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "li");
      \u0275\u0275text(111, "Cookies y datos de navegaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "h4");
      \u0275\u0275text(113, "2. USO DE LA INFORMACI\xD3N");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115, "La informaci\xF3n recopilada se utiliza para:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "ul")(117, "li");
      \u0275\u0275text(118, "Gestionar el acceso a la plataforma educativa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "li");
      \u0275\u0275text(120, "Registrar y mostrar calificaciones acad\xE9micas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "li");
      \u0275\u0275text(122, "Comunicar informaci\xF3n institucional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "li");
      \u0275\u0275text(124, "Mejorar y personalizar la experiencia del usuario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "li");
      \u0275\u0275text(126, "Cumplir con obligaciones legales y reglamentarias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "h4");
      \u0275\u0275text(128, "3. PROTECCI\xD3N DE DATOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p");
      \u0275\u0275text(130, "Implementamos medidas de seguridad t\xE9cnicas y organizativas para proteger sus datos personales contra:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "ul")(132, "li");
      \u0275\u0275text(133, "Acceso no autorizado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "li");
      \u0275\u0275text(135, "P\xE9rdida o destrucci\xF3n accidental");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "li");
      \u0275\u0275text(137, "Manipulaci\xF3n o difusi\xF3n no autorizada");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "h4");
      \u0275\u0275text(139, "4. COMPARTICI\xD3N DE INFORMACI\xD3N");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p");
      \u0275\u0275text(141, "Sus datos personales NO ser\xE1n compartidos con terceros, excepto cuando:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "ul")(143, "li");
      \u0275\u0275text(144, "Sea requerido por autoridades educativas competentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "li");
      \u0275\u0275text(146, "Sea necesario para cumplir obligaciones legales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "li");
      \u0275\u0275text(148, "Contemos con su consentimiento expreso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "h4");
      \u0275\u0275text(150, "5. DERECHOS DEL USUARIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "p");
      \u0275\u0275text(152, "Como usuario, usted tiene derecho a:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "ul")(154, "li");
      \u0275\u0275text(155, "Acceder a sus datos personales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "li");
      \u0275\u0275text(157, "Rectificar datos inexactos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "li");
      \u0275\u0275text(159, "Solicitar la eliminaci\xF3n de sus datos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "li");
      \u0275\u0275text(161, "Oponerse al tratamiento de sus datos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "li");
      \u0275\u0275text(163, "Exportar una copia de sus datos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "h4");
      \u0275\u0275text(165, "6. RETENCI\xD3N DE DATOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "p");
      \u0275\u0275text(167, "Los datos personales se conservar\xE1n mientras dure la relaci\xF3n acad\xE9mica con el Colegio Trinitario y posteriormente durante el per\xEDodo exigido por la legislaci\xF3n educativa vigente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "h4");
      \u0275\u0275text(169, "7. COOKIES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p");
      \u0275\u0275text(171, "La aplicaci\xF3n utiliza cookies para mejorar la experiencia de usuario. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "h4");
      \u0275\u0275text(173, "8. MENORES DE EDAD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "p");
      \u0275\u0275text(175, "Para usuarios menores de edad, el tratamiento de datos se realiza bajo supervisi\xF3n de sus padres o representantes legales.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "h4");
      \u0275\u0275text(177, "9. CAMBIOS A ESTA POL\xCDTICA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p");
      \u0275\u0275text(179, "Esta pol\xEDtica puede actualizarse peri\xF3dicamente. Notificaremos cualquier cambio importante a trav\xE9s de la aplicaci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "h4");
      \u0275\u0275text(181, "10. CONTACTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p");
      \u0275\u0275text(183, "Para ejercer sus derechos de privacidad o realizar consultas, contacte a: soporte@colegiotrinitario.edu.co");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p", 16);
      \u0275\u0275text(185);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 9)(187, "button", 12);
      \u0275\u0275listener("click", function Settings_Template_button_click_187_listener() {
        return ctx.closePrivacyModal();
      });
      \u0275\u0275elementStart(188, "span", 11);
      \u0275\u0275text(189, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, " Entendido y Cerrar ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(191, "div", 17)(192, "h1");
      \u0275\u0275text(193, "Configuraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 18)(195, "h2");
      \u0275\u0275text(196, "Perfil de Usuario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 19)(198, "div", 20);
      \u0275\u0275conditionalCreate(199, Settings_Conditional_199_Template, 1, 1, "img", 21);
      \u0275\u0275conditionalCreate(200, Settings_Conditional_200_Template, 1, 1, "img", 22);
      \u0275\u0275conditionalCreate(201, Settings_Conditional_201_Template, 2, 1, "div", 23);
      \u0275\u0275conditionalCreate(202, Settings_Conditional_202_Template, 3, 0, "div", 24);
      \u0275\u0275conditionalCreate(203, Settings_Conditional_203_Template, 3, 0, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 26)(205, "div", 27)(206, "h3");
      \u0275\u0275text(207);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "p");
      \u0275\u0275text(209);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(210, Settings_Conditional_210_Template, 12, 7, "div", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 29)(212, "div", 30)(213, "label", 31)(214, "span", 11);
      \u0275\u0275text(215, "cloud_upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "span", 32);
      \u0275\u0275text(217, "Subir Foto de Perfil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "input", 33);
      \u0275\u0275listener("change", function Settings_Template_input_change_218_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "button", 34);
      \u0275\u0275listener("click", function Settings_Template_button_click_219_listener() {
        return ctx.startEditProfile();
      });
      \u0275\u0275elementStart(220, "span", 11);
      \u0275\u0275text(221, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "span", 32);
      \u0275\u0275text(223, "Cambiar Nombre");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(224, Settings_Conditional_224_Template, 18, 2, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 18)(226, "h2");
      \u0275\u0275text(227, "Apariencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 36)(229, "div", 37)(230, "div", 38)(231, "span", 39);
      \u0275\u0275text(232, "dark_mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "div", 40)(234, "h3");
      \u0275\u0275text(235, "Modo Oscuro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "p");
      \u0275\u0275text(237, "Activa el estilo Tech / Cyberpunk de la plataforma");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "label", 41)(239, "input", 42);
      \u0275\u0275listener("change", function Settings_Template_input_change_239_listener($event) {
        return ctx.onThemeChange($event.target.checked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(240, "span", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(241, "div", 18)(242, "h2");
      \u0275\u0275text(243, "Notificaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 36)(245, "div", 37)(246, "div", 38)(247, "span", 39);
      \u0275\u0275text(248, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div", 40)(250, "h3");
      \u0275\u0275text(251, "Notificaciones Push");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "p");
      \u0275\u0275text(253, "Recibe notificaciones en tiempo real");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "label", 41)(255, "input", 44);
      \u0275\u0275listener("change", function Settings_Template_input_change_255_listener($event) {
        return ctx.onPushNotificationChange($event.target.checked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(256, "span", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "div", 37)(258, "div", 38)(259, "span", 39);
      \u0275\u0275text(260, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 40)(262, "h3");
      \u0275\u0275text(263, "Notificaciones por Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "p");
      \u0275\u0275text(265, "Recibe actualizaciones por correo electr\xF3nico");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(266, "label", 41)(267, "input", 45);
      \u0275\u0275listener("change", function Settings_Template_input_change_267_listener($event) {
        return ctx.onEmailNotificationChange($event.target.checked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(268, "span", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 37)(270, "div", 38)(271, "span", 39);
      \u0275\u0275text(272, "message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 40)(274, "h3");
      \u0275\u0275text(275, "Mensajes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "p");
      \u0275\u0275text(277, "Notificaciones de nuevos mensajes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "label", 41)(279, "input", 46);
      \u0275\u0275listener("change", function Settings_Template_input_change_279_listener($event) {
        return ctx.onMessageNotificationChange($event.target.checked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "span", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(281, "div", 18)(282, "h2");
      \u0275\u0275text(283, "Seguridad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div", 36)(285, "div", 47);
      \u0275\u0275listener("click", function Settings_Template_div_click_285_listener() {
        return ctx.openChangePasswordModal();
      });
      \u0275\u0275elementStart(286, "div", 38)(287, "span", 39);
      \u0275\u0275text(288, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "div", 40)(290, "h3");
      \u0275\u0275text(291, "Cambiar Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "p");
      \u0275\u0275text(293, "Actualiza tu contrase\xF1a de acceso");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "span", 48);
      \u0275\u0275text(295, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "div", 37)(297, "div", 38)(298, "span", 39);
      \u0275\u0275text(299, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "div", 40)(301, "h3");
      \u0275\u0275text(302, "Autenticaci\xF3n de Dos Factores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "p");
      \u0275\u0275text(304, "A\xF1ade una capa extra de seguridad");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(305, "label", 41);
      \u0275\u0275element(306, "input", 49)(307, "span", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 50)(309, "div", 38)(310, "span", 39);
      \u0275\u0275text(311, "devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div", 40)(313, "h3");
      \u0275\u0275text(314, "Sesiones Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "p");
      \u0275\u0275text(316, "Gestiona tus dispositivos conectados");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "span", 48);
      \u0275\u0275text(318, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(319, "div", 18)(320, "h2");
      \u0275\u0275text(321, "Privacidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div", 36)(323, "div", 37)(324, "div", 38)(325, "span", 39);
      \u0275\u0275text(326, "visibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 40)(328, "h3");
      \u0275\u0275text(329, "Perfil P\xFAblico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "p");
      \u0275\u0275text(331, "Permite que otros usuarios te encuentren");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(332, "label", 41);
      \u0275\u0275element(333, "input", 51)(334, "span", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "div", 47);
      \u0275\u0275listener("click", function Settings_Template_div_click_335_listener() {
        return ctx.downloadMyData();
      });
      \u0275\u0275elementStart(336, "div", 38)(337, "span", 39);
      \u0275\u0275text(338, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "div", 40)(340, "h3");
      \u0275\u0275text(341, "Descargar mis Datos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "p");
      \u0275\u0275text(343, "Exporta una copia de tu informaci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "span", 48);
      \u0275\u0275text(345, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(346, "div", 18)(347, "h2");
      \u0275\u0275text(348, "Ayuda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "div", 36)(350, "div", 50)(351, "div", 38)(352, "span", 39);
      \u0275\u0275text(353, "help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "div", 40)(355, "h3");
      \u0275\u0275text(356, "Preguntas Frecuentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "p");
      \u0275\u0275text(358, "Respuestas a dudas comunes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(359, "span", 48);
      \u0275\u0275text(360, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 47);
      \u0275\u0275listener("click", function Settings_Template_div_click_361_listener() {
        return ctx.contactSupport();
      });
      \u0275\u0275elementStart(362, "div", 38)(363, "span", 39);
      \u0275\u0275text(364, "support_agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "div", 40)(366, "h3");
      \u0275\u0275text(367, "Contactar Soporte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "p");
      \u0275\u0275text(369, "Obt\xE9n ayuda del equipo t\xE9cnico");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(370, "span", 48);
      \u0275\u0275text(371, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "div", 47);
      \u0275\u0275listener("click", function Settings_Template_div_click_372_listener() {
        return ctx.sendFeedback();
      });
      \u0275\u0275elementStart(373, "div", 38)(374, "span", 39);
      \u0275\u0275text(375, "feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "div", 40)(377, "h3");
      \u0275\u0275text(378, "Enviar Comentarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "p");
      \u0275\u0275text(380, "Ay\xFAdanos a mejorar la aplicaci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(381, "span", 48);
      \u0275\u0275text(382, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(383, "div", 18)(384, "h2");
      \u0275\u0275text(385, "Acerca de");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "div", 36)(387, "div", 37)(388, "div", 38)(389, "span", 39);
      \u0275\u0275text(390, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "div", 40)(392, "h3");
      \u0275\u0275text(393, "Notas Trinitario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "p");
      \u0275\u0275text(395, "Versi\xF3n 1.0.0");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(396, "div", 47);
      \u0275\u0275listener("click", function Settings_Template_div_click_396_listener() {
        return ctx.openTerms();
      });
      \u0275\u0275elementStart(397, "div", 38)(398, "span", 39);
      \u0275\u0275text(399, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div", 40)(401, "h3");
      \u0275\u0275text(402, "T\xE9rminos y Condiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "p");
      \u0275\u0275text(404, "Lee nuestros t\xE9rminos de uso");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(405, "span", 48);
      \u0275\u0275text(406, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "div", 47);
      \u0275\u0275listener("click", function Settings_Template_div_click_407_listener() {
        return ctx.openPrivacyPolicy();
      });
      \u0275\u0275elementStart(408, "div", 38)(409, "span", 39);
      \u0275\u0275text(410, "privacy_tip");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "div", 40)(412, "h3");
      \u0275\u0275text(413, "Pol\xEDtica de Privacidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "p");
      \u0275\u0275text(415, "C\xF3mo protegemos tus datos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(416, "span", 48);
      \u0275\u0275text(417, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(418, "div", 18)(419, "h2");
      \u0275\u0275text(420, "Acciones de Cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "div", 52)(422, "button", 53);
      \u0275\u0275listener("click", function Settings_Template_button_click_422_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(423, "span", 11);
      \u0275\u0275text(424, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "span");
      \u0275\u0275text(426, "Cerrar Sesi\xF3n");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_11_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      \u0275\u0275classProp("show", ctx.showSuccessNotification());
      \u0275\u0275advance(9);
      \u0275\u0275classProp("show", ctx.showLogoutConfirmation());
      \u0275\u0275advance(17);
      \u0275\u0275classProp("show", ctx.showChangePasswordModal());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.passwordChangeSuccess() ? 32 : 33);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.passwordChangeSuccess() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showTermsModal());
      \u0275\u0275advance(52);
      \u0275\u0275textInterpolate1("\xDAltima actualizaci\xF3n: Febrero ", ctx.currentYear);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("show", ctx.showPrivacyModal());
      \u0275\u0275advance(92);
      \u0275\u0275textInterpolate1("\xDAltima actualizaci\xF3n: Febrero ", ctx.currentYear);
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.previewUrl() ? 199 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.previewUrl() && ((tmp_10_0 = ctx.currentUser()) == null ? null : tmp_10_0.profilePicture) ? 200 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.previewUrl() && !((tmp_11_0 = ctx.currentUser()) == null ? null : tmp_11_0.profilePicture) ? 201 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.previewUrl() ? 202 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.previewUrl() && ((tmp_13_0 = ctx.currentUser()) == null ? null : tmp_13_0.profilePicture) ? 203 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(((tmp_14_0 = ctx.currentUser()) == null ? null : tmp_14_0.name) && ((tmp_14_0 = ctx.currentUser()) == null ? null : tmp_14_0.surname) ? ((tmp_14_0 = ctx.currentUser()) == null ? null : tmp_14_0.name) + " " + ((tmp_14_0 = ctx.currentUser()) == null ? null : tmp_14_0.surname) : ((tmp_14_0 = ctx.currentUser()) == null ? null : tmp_14_0.name) || ((tmp_14_0 = ctx.currentUser()) == null ? null : tmp_14_0.username) || "Usuario sin nombre");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(((tmp_15_0 = ctx.currentUser()) == null ? null : tmp_15_0.email) || "Sin email");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditingProfile() ? 210 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.selectedFile ? 224 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275property("checked", ctx.isDarkTheme());
      \u0275\u0275advance(16);
      \u0275\u0275property("checked", ctx.pushNotificationsEnabled());
      \u0275\u0275advance(12);
      \u0275\u0275property("checked", ctx.emailNotificationsEnabled());
      \u0275\u0275advance(12);
      \u0275\u0275property("checked", ctx.messageNotificationsEnabled());
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.settings-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: var(--sp-6);\n}\n.settings-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 var(--sp-5);\n}\n.settings-section[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n}\n.settings-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sp-4);\n  color: var(--text-1);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.profile-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-5);\n}\n.current-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.current-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.user-initials[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 3px solid var(--brand);\n  object-fit: cover;\n  transition: border-color 0.18s ease;\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border: 3px solid var(--success);\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15);\n}\n.preview-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5px;\n  right: -5px;\n  background: var(--success);\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--surface);\n}\n.preview-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.profile-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n}\n.profile-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5px;\n  right: -5px;\n  background: var(--brand);\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--surface);\n}\n.user-initials[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n.profile-info-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  min-width: 0;\n}\n.profile-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--text-1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--text-3);\n}\n.inline-edit-form[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  transform-origin: top center;\n  animation: _ngcontent-%COMP%_fadeScaleIn 0.2s ease-out;\n}\n.inline-edit-form.hiding[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeScaleOut 0.18s ease-in forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeScaleIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeScaleOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n}\n.edit-fields-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.input-inline[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  width: 100%;\n  min-width: 80px;\n  box-sizing: border-box;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.input-inline[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.input-inline[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-4);\n}\n.btn-inline[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.9rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  font-family: inherit;\n}\n.btn-inline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-inline.save[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: #fff;\n}\n.btn-inline.save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-inline.cancel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.btn-inline.cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-inline[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-inline[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.upload-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.action-buttons-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--sp-4);\n}\n.action-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0.7rem 1.1rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  box-shadow: var(--shadow-xs);\n  font-family: inherit;\n}\n.action-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.upload-button[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n}\n.upload-button[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n}\n.edit-button[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: #fff;\n}\n.edit-button[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.action-button[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  padding: var(--sp-3) var(--sp-4);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  flex-wrap: wrap;\n}\n.preview-thumbnail[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border);\n}\n.upload-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  flex: 1;\n  min-width: 0;\n}\n.upload-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.upload-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n}\n.confirm-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0.55rem 0.9rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: background-color 0.18s ease;\n  font-family: inherit;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: #fff;\n}\n.confirm-btn[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: #fff;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.confirm-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.confirm-btn[_ngcontent-%COMP%]:focus-visible, \n.cancel-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.settings-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.setting-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: var(--sp-4);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  transition: background-color 0.18s ease, border-color 0.18s ease;\n}\n.setting-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n}\n.setting-item.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.setting-item.clickable[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n}\n.setting-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  min-width: 0;\n}\n.setting-icon[_ngcontent-%COMP%] {\n  color: var(--brand);\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.setting-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.setting-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.setting-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.82rem;\n  color: var(--text-3);\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--text-4);\n  flex-shrink: 0;\n}\n.setting-item.clickable[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 26px;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: var(--border-strong);\n  transition: background-color 0.2s ease;\n  border-radius: var(--r-pill);\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: #fff;\n  transition: transform 0.2s ease;\n  border-radius: 50%;\n  box-shadow: var(--shadow-sm);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--brand);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(22px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.account-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0.7rem 1.1rem;\n  background: var(--danger);\n  color: #fff;\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: background-color 0.18s ease;\n  font-family: inherit;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.logout-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.3);\n}\n.logout-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n  padding: var(--sp-4);\n}\n.logout-modal-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.logout-modal[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-lg);\n  transform: translateY(8px);\n  transition: transform 0.2s ease;\n  max-width: 420px;\n  width: 100%;\n  overflow: hidden;\n}\n.logout-modal-overlay.show[_ngcontent-%COMP%]   .logout-modal[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-1);\n  text-align: center;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n  text-align: center;\n  overflow-y: auto;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  line-height: 1.5;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  padding: 0 var(--sp-5) var(--sp-5);\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: center;\n}\n.modal-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%], \n.modal-actions[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.modal-actions[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.modal-actions[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.modal-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n}\n.modal-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n  text-align: left;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--sp-2);\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-2);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  color: var(--text-1);\n  background: var(--surface);\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--danger);\n  font-size: 0.85rem;\n  margin-top: var(--sp-2);\n}\n.password-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--sp-4);\n}\n.password-success[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--success);\n}\n.password-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--sp-3);\n  color: var(--success);\n  font-weight: 600;\n}\n.legal-modal[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 85vh;\n}\n.legal-content[_ngcontent-%COMP%] {\n  padding: var(--sp-4) 0;\n  max-height: 60vh;\n  overflow-y: auto;\n  text-align: left;\n}\n.legal-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--brand);\n  font-size: 0.95rem;\n  margin: var(--sp-4) 0 var(--sp-2);\n}\n.legal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.88rem;\n  line-height: 1.6;\n  margin: var(--sp-2) 0;\n  text-align: left;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: var(--sp-2) 0;\n  padding-left: 20px;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.88rem;\n  line-height: 1.6;\n  margin: 4px 0;\n}\n.legal-content[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n  padding-top: var(--sp-4);\n  border-top: 1px solid var(--border);\n  color: var(--text-4);\n  font-size: 0.8rem;\n  font-style: italic;\n}\n.success-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease, visibility 0.25s ease;\n  padding: var(--sp-4);\n}\n.success-notification.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.notification-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  padding: var(--sp-8);\n  text-align: center;\n  color: var(--text-1);\n  box-shadow: var(--shadow-lg);\n  transform: scale(0.96);\n  transition: transform 0.25s ease;\n  max-width: 400px;\n  width: 100%;\n}\n.success-notification.show[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.checkmark-circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: var(--success);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto var(--sp-5);\n}\n.checkmark[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  stroke: #fff;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.notification-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0 0 var(--sp-3);\n  color: var(--text-1);\n}\n.notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .settings-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .profile-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .profile-info-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n  }\n  .inline-edit-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .action-buttons-row[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .modal-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%], \n   .modal-actions[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[data-theme="dark"][_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:before, [data-theme="dark"]   [_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  background-color: var(--surface);\n}\n/*# sourceMappingURL=settings.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Settings, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [FormsModule], template: `<!-- Success Notification -->
<div class="success-notification" [class.show]="showSuccessNotification()">
  <div class="notification-content">
    <div class="checkmark-circle">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <path class="checkmark__check" fill="none" d="M14 27l8 8 16-16"/>
      </svg>
    </div>
    <h3>\xA1Perfil actualizado!</h3>
    <p>Tu informaci\xF3n ha sido cambiada con \xE9xito</p>
  </div>
</div>

<!-- Logout Confirmation Dialog -->
<div class="logout-modal-overlay" [class.show]="showLogoutConfirmation()" (click)="cancelLogout()">
  <div class="logout-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>Confirmar Cierre de Sesi\xF3n</h3>
    </div>
    <div class="modal-body">
      <p>\xBFEst\xE1s seguro de que quieres cerrar sesi\xF3n?</p>
    </div>
    <div class="modal-actions">
      <button class="cancel-btn" (click)="cancelLogout()">
        <span class="material-icons">close</span>
        Cancelar
      </button>
      <button class="confirm-btn" (click)="confirmLogout()">
        <span class="material-icons">check</span>
        Confirmar
      </button>
    </div>
  </div>
</div>

<!-- Change Password Modal -->
<div class="logout-modal-overlay" [class.show]="showChangePasswordModal()" (click)="closeChangePasswordModal()">
  <div class="logout-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>Cambiar Contrase\xF1a</h3>
    </div>
    <div class="modal-body">
        @if (passwordChangeSuccess()) {
          <div class="password-success">
            <span class="material-icons success-icon">check_circle</span>
            <p>\xA1Contrase\xF1a actualizada correctamente!</p>
          </div>
        } @else {
          <div class="form-group">
            <label for="current-password">Contrase\xF1a Actual</label>
            <input type="password" id="current-password" name="currentPassword" [(ngModel)]="currentPassword" placeholder="Ingresa tu contrase\xF1a actual" autocomplete="current-password">
          </div>
          <div class="form-group">
            <label for="new-password">Nueva Contrase\xF1a</label>
            <input type="password" id="new-password" name="newPassword" [(ngModel)]="newPassword" placeholder="Ingresa la nueva contrase\xF1a" autocomplete="new-password">
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirmar Contrase\xF1a</label>
            <input type="password" id="confirm-password" name="confirmPassword" [(ngModel)]="confirmPassword" placeholder="Confirma la nueva contrase\xF1a" autocomplete="new-password">
          </div>
          @if (passwordChangeError()) {
            <p class="error-message">{{ passwordChangeError() }}</p>
          }
        }
    </div>
    @if (!passwordChangeSuccess()) {
      <div class="modal-actions">
        <button class="cancel-btn" (click)="closeChangePasswordModal()">
          <span class="material-icons">close</span>
          Cancelar
        </button>
        <button class="confirm-btn" (click)="changePassword()" [disabled]="isChangingPassword()">
          @if (isChangingPassword()) {
            <span class="material-icons">hourglass_empty</span>
            Cambiando...
          } @else {
            <span class="material-icons">check</span>
            Cambiar
          }
        </button>
      </div>
    }
  </div>
</div>

<!-- Terms and Conditions Modal -->
<div class="logout-modal-overlay" [class.show]="showTermsModal()" (click)="closeTermsModal()">
  <div class="logout-modal legal-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>T\xE9rminos y Condiciones</h3>
    </div>
    <div class="modal-body legal-content">
      <h4>1. ACEPTACI\xD3N DE T\xC9RMINOS</h4>
      <p>Al acceder y utilizar la aplicaci\xF3n "Notas Trinitario", usted acepta estar sujeto a estos t\xE9rminos y condiciones. Si no est\xE1 de acuerdo con alguno de estos t\xE9rminos, no debe utilizar esta aplicaci\xF3n.</p>
      
      <h4>2. DESCRIPCI\xD3N DEL SERVICIO</h4>
      <p>Notas Trinitario es una plataforma educativa desarrollada exclusivamente para el Colegio Trinitario, que permite a estudiantes y docentes gestionar calificaciones, reportes acad\xE9micos y comunicaci\xF3n institucional.</p>
      
      <h4>3. USO AUTORIZADO</h4>
      <p>Esta aplicaci\xF3n est\xE1 destinada exclusivamente a:</p>
      <ul>
        <li>Estudiantes matriculados en el Colegio Trinitario</li>
        <li>Docentes y personal administrativo del colegio</li>
        <li>Padres o representantes legales de estudiantes</li>
      </ul>
      <p>El uso de la aplicaci\xF3n para fines distintos a los educativos est\xE1 prohibido.</p>
      
      <h4>4. CUENTA DE USUARIO</h4>
      <p>Cada usuario es responsable de mantener la confidencialidad de su cuenta y contrase\xF1a. El Colegio Trinitario no se hace responsable por cualquier p\xE9rdida o da\xF1o derivado del incumplimiento de esta obligaci\xF3n.</p>
      
      <h4>5. PRIVACIDAD Y PROTECCI\xD3N DE DATOS</h4>
      <p>La informaci\xF3n personal recopilada est\xE1 sujeta a nuestra Pol\xEDtica de Privacidad. Al usar esta aplicaci\xF3n, usted consiente el tratamiento de sus datos conforme a dicha pol\xEDtica.</p>
      
      <h4>6. PROPIEDAD INTELECTUAL</h4>
      <p>Todo el contenido, dise\xF1o, gr\xE1ficos y c\xF3digo de la aplicaci\xF3n son propiedad del Colegio Trinitario y est\xE1n protegidos por las leyes de propiedad intelectual vigentes.</p>
      
      <h4>7. LIMITACI\xD3N DE RESPONSABILIDAD</h4>
      <p>El Colegio Trinitario no garantiza que la aplicaci\xF3n est\xE9 libre de errores o disponible de manera continua. El uso de la aplicaci\xF3n es bajo responsabilidad del usuario.</p>
      
      <h4>8. MODIFICACIONES</h4>
      <p>El Colegio Trinitario se reserva el derecho de modificar estos t\xE9rminos en cualquier momento. Las modificaciones entrar\xE1n en vigor desde su publicaci\xF3n en la aplicaci\xF3n.</p>
      
      <h4>9. CONTACTO</h4>
      <p>Para consultas sobre estos t\xE9rminos, contacte a soporte@colegiotrinitario.edu.co</p>
      
      <p class="last-update">\xDAltima actualizaci\xF3n: Febrero {{ currentYear }}</p>
    </div>
    <div class="modal-actions">
      <button class="confirm-btn" (click)="closeTermsModal()">
        <span class="material-icons">check</span>
        Aceptar y Cerrar
      </button>
    </div>
  </div>
</div>

<!-- Privacy Policy Modal -->
<div class="logout-modal-overlay" [class.show]="showPrivacyModal()" (click)="closePrivacyModal()">
  <div class="logout-modal legal-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>Pol\xEDtica de Privacidad</h3>
    </div>
    <div class="modal-body legal-content">
      <h4>1. INFORMACI\xD3N RECOPILADA</h4>
      <p>Recopilamos la siguiente informaci\xF3n personal:</p>
      <ul>
        <li>Informaci\xF3n de perfil: nombre, apellido, correo electr\xF3nico</li>
        <li>Datos acad\xE9micos: calificaciones, asistencia, reportes</li>
        <li>Informaci\xF3n de uso de la aplicaci\xF3n</li>
        <li>Cookies y datos de navegaci\xF3n</li>
      </ul>
      
      <h4>2. USO DE LA INFORMACI\xD3N</h4>
      <p>La informaci\xF3n recopilada se utiliza para:</p>
      <ul>
        <li>Gestionar el acceso a la plataforma educativa</li>
        <li>Registrar y mostrar calificaciones acad\xE9micas</li>
        <li>Comunicar informaci\xF3n institucional</li>
        <li>Mejorar y personalizar la experiencia del usuario</li>
        <li>Cumplir con obligaciones legales y reglamentarias</li>
      </ul>
      
      <h4>3. PROTECCI\xD3N DE DATOS</h4>
      <p>Implementamos medidas de seguridad t\xE9cnicas y organizativas para proteger sus datos personales contra:</p>
      <ul>
        <li>Acceso no autorizado</li>
        <li>P\xE9rdida o destrucci\xF3n accidental</li>
        <li>Manipulaci\xF3n o difusi\xF3n no autorizada</li>
      </ul>
      
      <h4>4. COMPARTICI\xD3N DE INFORMACI\xD3N</h4>
      <p>Sus datos personales NO ser\xE1n compartidos con terceros, excepto cuando:</p>
      <ul>
        <li>Sea requerido por autoridades educativas competentes</li>
        <li>Sea necesario para cumplir obligaciones legales</li>
        <li>Contemos con su consentimiento expreso</li>
      </ul>
      
      <h4>5. DERECHOS DEL USUARIO</h4>
      <p>Como usuario, usted tiene derecho a:</p>
      <ul>
        <li>Acceder a sus datos personales</li>
        <li>Rectificar datos inexactos</li>
        <li>Solicitar la eliminaci\xF3n de sus datos</li>
        <li>Oponerse al tratamiento de sus datos</li>
        <li>Exportar una copia de sus datos</li>
      </ul>
      
      <h4>6. RETENCI\xD3N DE DATOS</h4>
      <p>Los datos personales se conservar\xE1n mientras dure la relaci\xF3n acad\xE9mica con el Colegio Trinitario y posteriormente durante el per\xEDodo exigido por la legislaci\xF3n educativa vigente.</p>
      
      <h4>7. COOKIES</h4>
      <p>La aplicaci\xF3n utiliza cookies para mejorar la experiencia de usuario. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades.</p>
      
      <h4>8. MENORES DE EDAD</h4>
      <p>Para usuarios menores de edad, el tratamiento de datos se realiza bajo supervisi\xF3n de sus padres o representantes legales.</p>
      
      <h4>9. CAMBIOS A ESTA POL\xCDTICA</h4>
      <p>Esta pol\xEDtica puede actualizarse peri\xF3dicamente. Notificaremos cualquier cambio importante a trav\xE9s de la aplicaci\xF3n.</p>
      
      <h4>10. CONTACTO</h4>
      <p>Para ejercer sus derechos de privacidad o realizar consultas, contacte a: soporte@colegiotrinitario.edu.co</p>
      
      <p class="last-update">\xDAltima actualizaci\xF3n: Febrero {{ currentYear }}</p>
    </div>
    <div class="modal-actions">
      <button class="confirm-btn" (click)="closePrivacyModal()">
        <span class="material-icons">check</span>
        Entendido y Cerrar
      </button>
    </div>
  </div>
</div>

<div class="settings-container">
  <h1>Configuraci\xF3n</h1>

  <div class="settings-section">
    <h2>Perfil de Usuario</h2>

    <div class="profile-section">
      <div class="current-avatar">
        @if (previewUrl()) {
          <img [src]="previewUrl()" alt="Vista previa" class="avatar-preview" (error)="onImageError($event)">
        }
        @if (!previewUrl() && currentUser()?.profilePicture) {
          <img [src]="getCorrectImageUrl(currentUser()?.profilePicture)" alt="Avatar" (error)="onImageError($event)">
        }
        @if (!previewUrl() && !currentUser()?.profilePicture) {
          <div class="user-initials">
            {{ getUserInitials() }}
          </div>
        }
        @if (previewUrl()) {
          <div class="preview-badge">
            <span class="material-icons">check_circle</span>
          </div>
        }
        @if (!previewUrl() && currentUser()?.profilePicture) {
          <div class="profile-badge">
            <span class="material-icons">photo_camera</span>
          </div>
        }
      </div>

      <div class="profile-info-container">
        <!-- Profile Info - always visible -->
        <div class="profile-info">
          <h3>{{ currentUser()?.name && currentUser()?.surname ? (currentUser()?.name + ' ' + currentUser()?.surname) : (currentUser()?.name || currentUser()?.username || 'Usuario sin nombre') }}</h3>
          <p>{{ currentUser()?.email || 'Sin email' }}</p>
        </div>
        
        <!-- Inline Edit Form (appears in white space beside profile info) -->
        @if (isEditingProfile()) {
          <div class="inline-edit-form" [class.hiding]="isFormHiding()">
            <div class="edit-fields-inline">
               <input 
                 type="text" 
                 id="edit-name" 
                 name="editName"
                 [(ngModel)]="editName" 
                 placeholder="Nombre"
                 class="input-inline">
               
               <input 
                 type="text" 
                 id="edit-surname" 
                 name="editSurname"
                 [(ngModel)]="editSurname" 
                 placeholder="Apellido"
                 class="input-inline">
               
               <input 
                 type="email" 
                 id="edit-email" 
                 name="editEmail"
                 [(ngModel)]="editEmail" 
                 placeholder="Correo"
                 class="input-inline">
              
              <div class="btn-row">
                <button class="btn-inline save" (click)="saveProfile()" [disabled]="isUpdatingProfile()" title="Guardar">
                  <span class="material-icons">check</span>
                </button>
                <button class="btn-inline cancel" (click)="cancelEditProfile()" [disabled]="isUpdatingProfile()" title="Cancelar">
                  <span class="material-icons">close</span>
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>

    <div class="upload-section">
      <div class="action-buttons-row">
        <label for="profile-picture" class="action-button upload-button">
          <span class="material-icons">cloud_upload</span>
          <span class="button-text">Subir Foto de Perfil</span>
        </label>
        <input
          type="file"
          id="profile-picture"
          name="profilePicture"
          accept="image/*"
          (change)="onFileSelected($event)"
          class="file-input">

        <button class="action-button edit-button" (click)="startEditProfile()">
          <span class="material-icons">edit</span>
          <span class="button-text">Cambiar Nombre</span>
        </button>
      </div>

      @if (selectedFile) {
        <div class="upload-preview">
          <img [src]="previewUrl()" alt="Vista previa" class="preview-thumbnail">
          <div class="upload-info">
            <span class="material-icons">image</span>
            <span>{{ selectedFile.name }}</span>
          </div>
          <div class="upload-actions">
            <button (click)="uploadProfilePicture()" class="confirm-btn">
              <span class="material-icons">check</span>
              <span>Confirmar</span>
            </button>
            <button (click)="clearPreview()" class="cancel-btn">
              <span class="material-icons">close</span>
              <span>Cancelar</span>
            </button>
          </div>
        </div>
      }
    </div>

    <div class="settings-section">
      <h2>Apariencia</h2>
      <div class="settings-options">
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">dark_mode</span>
            <div class="setting-text">
              <h3>Modo Oscuro</h3>
              <p>Activa el estilo Tech / Cyberpunk de la plataforma</p>
            </div>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              id="dark-mode"
              name="darkMode"
              [checked]="isDarkTheme()"
              (change)="onThemeChange($any($event.target).checked)"
              title="Modo oscuro">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Notificaciones</h2>
      <div class="settings-options">
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">notifications</span>
            <div class="setting-text">
              <h3>Notificaciones Push</h3>
              <p>Recibe notificaciones en tiempo real</p>
            </div>
          </div>
          <label class="switch">
            <input type="checkbox" id="push-notifications" name="pushNotifications" [checked]="pushNotificationsEnabled()" (change)="onPushNotificationChange($any($event.target).checked)" title="Notificaciones push">
            <span class="slider round"></span>
          </label>
        </div>
        
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">email</span>
            <div class="setting-text">
              <h3>Notificaciones por Email</h3>
              <p>Recibe actualizaciones por correo electr\xF3nico</p>
            </div>
          </div>
          <label class="switch">
            <input type="checkbox" id="email-notifications" name="emailNotifications" [checked]="emailNotificationsEnabled()" (change)="onEmailNotificationChange($any($event.target).checked)" title="Notificaciones por email">
            <span class="slider round"></span>
          </label>
        </div>
        
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">message</span>
            <div class="setting-text">
              <h3>Mensajes</h3>
              <p>Notificaciones de nuevos mensajes</p>
            </div>
          </div>
          <label class="switch">
            <input type="checkbox" id="message-notifications" name="messageNotifications" [checked]="messageNotificationsEnabled()" (change)="onMessageNotificationChange($any($event.target).checked)" title="Notificaciones de mensajes">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Seguridad</h2>
      <div class="settings-options">
        <div class="setting-item clickable" (click)="openChangePasswordModal()">
          <div class="setting-info">
            <span class="material-icons setting-icon">lock</span>
            <div class="setting-text">
              <h3>Cambiar Contrase\xF1a</h3>
              <p>Actualiza tu contrase\xF1a de acceso</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
        
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">security</span>
            <div class="setting-text">
              <h3>Autenticaci\xF3n de Dos Factores</h3>
              <p>A\xF1ade una capa extra de seguridad</p>
            </div>
          </div>
          <label class="switch">
            <input type="checkbox" id="two-factor-auth" name="twoFactorAuth" title="Autenticaci\xF3n de dos factores">
            <span class="slider round"></span>
          </label>
        </div>
        
        <div class="setting-item clickable">
          <div class="setting-info">
            <span class="material-icons setting-icon">devices</span>
            <div class="setting-text">
              <h3>Sesiones Activas</h3>
              <p>Gestiona tus dispositivos conectados</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Privacidad</h2>
      <div class="settings-options">
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">visibility</span>
            <div class="setting-text">
              <h3>Perfil P\xFAblico</h3>
              <p>Permite que otros usuarios te encuentren</p>
            </div>
          </div>
          <label class="switch">
            <input type="checkbox" id="public-profile" name="publicProfile" checked title="Perfil p\xFAblico">
            <span class="slider round"></span>
          </label>
        </div>
        
        <div class="setting-item clickable" (click)="downloadMyData()">
          <div class="setting-info">
            <span class="material-icons setting-icon">download</span>
            <div class="setting-text">
              <h3>Descargar mis Datos</h3>
              <p>Exporta una copia de tu informaci\xF3n</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Ayuda</h2>
      <div class="settings-options">
        <div class="setting-item clickable">
          <div class="setting-info">
            <span class="material-icons setting-icon">help</span>
            <div class="setting-text">
              <h3>Preguntas Frecuentes</h3>
              <p>Respuestas a dudas comunes</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
        
        <div class="setting-item clickable" (click)="contactSupport()">
          <div class="setting-info">
            <span class="material-icons setting-icon">support_agent</span>
            <div class="setting-text">
              <h3>Contactar Soporte</h3>
              <p>Obt\xE9n ayuda del equipo t\xE9cnico</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
        
        <div class="setting-item clickable" (click)="sendFeedback()">
          <div class="setting-info">
            <span class="material-icons setting-icon">feedback</span>
            <div class="setting-text">
              <h3>Enviar Comentarios</h3>
              <p>Ay\xFAdanos a mejorar la aplicaci\xF3n</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Acerca de</h2>
      <div class="settings-options">
        <div class="setting-item">
          <div class="setting-info">
            <span class="material-icons setting-icon">info</span>
            <div class="setting-text">
              <h3>Notas Trinitario</h3>
              <p>Versi\xF3n 1.0.0</p>
            </div>
          </div>
        </div>
        
        <div class="setting-item clickable" (click)="openTerms()">
          <div class="setting-info">
            <span class="material-icons setting-icon">description</span>
            <div class="setting-text">
              <h3>T\xE9rminos y Condiciones</h3>
              <p>Lee nuestros t\xE9rminos de uso</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
        
        <div class="setting-item clickable" (click)="openPrivacyPolicy()">
          <div class="setting-info">
            <span class="material-icons setting-icon">privacy_tip</span>
            <div class="setting-text">
              <h3>Pol\xEDtica de Privacidad</h3>
              <p>C\xF3mo protegemos tus datos</p>
            </div>
          </div>
          <span class="material-icons chevron">chevron_right</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Acciones de Cuenta</h2>

      <div class="account-actions">
        <button class="logout-btn" (click)="logout()">
          <span class="material-icons">logout</span>
          <span>Cerrar Sesi\xF3n</span>
        </button>
      </div>
    </div>
  </div>
`, styles: ['/* src/app/settings/settings.css */\n.settings-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: var(--sp-6);\n}\n.settings-container h1 {\n  color: var(--text-1);\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 var(--sp-5);\n}\n.settings-section {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  margin-bottom: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n}\n.settings-section h2 {\n  margin: 0 0 var(--sp-4);\n  color: var(--text-1);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.profile-section {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-5);\n}\n.current-avatar {\n  position: relative;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.current-avatar img,\n.user-initials {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 3px solid var(--brand);\n  object-fit: cover;\n  transition: border-color 0.18s ease;\n}\n.avatar-preview {\n  object-fit: cover;\n  border: 3px solid var(--success);\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15);\n}\n.preview-badge {\n  position: absolute;\n  bottom: -5px;\n  right: -5px;\n  background: var(--success);\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--surface);\n}\n.preview-badge .material-icons,\n.profile-badge .material-icons {\n  color: #fff;\n  font-size: 14px;\n}\n.profile-badge {\n  position: absolute;\n  bottom: -5px;\n  right: -5px;\n  background: var(--brand);\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--surface);\n}\n.user-initials {\n  background: var(--brand);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n.profile-info-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  min-width: 0;\n}\n.profile-info {\n  min-width: 0;\n}\n.profile-info h3 {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--text-1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.profile-info p {\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--text-3);\n}\n.inline-edit-form {\n  flex: 1;\n  min-width: 200px;\n  transform-origin: top center;\n  animation: fadeScaleIn 0.2s ease-out;\n}\n.inline-edit-form.hiding {\n  animation: fadeScaleOut 0.18s ease-in forwards;\n}\n@keyframes fadeScaleIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeScaleOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n}\n.edit-fields-inline {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.input-inline {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  width: 100%;\n  min-width: 80px;\n  box-sizing: border-box;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.input-inline:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.input-inline::placeholder {\n  color: var(--text-4);\n}\n.btn-inline {\n  padding: 0.55rem 0.9rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  font-family: inherit;\n}\n.btn-inline .material-icons {\n  font-size: 18px;\n}\n.btn-inline.save {\n  background: var(--success);\n  color: #fff;\n}\n.btn-inline.save:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-inline.cancel {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.btn-inline.cancel:hover:not(:disabled) {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.btn-inline:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-inline:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.btn-row {\n  display: flex;\n  gap: 8px;\n}\n.upload-section {\n  margin-top: var(--sp-5);\n}\n.action-buttons-row {\n  display: flex;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--sp-4);\n}\n.action-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0.7rem 1.1rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  box-shadow: var(--shadow-xs);\n  font-family: inherit;\n}\n.action-button .material-icons {\n  font-size: 20px;\n}\n.upload-button {\n  background: var(--brand);\n  color: #fff;\n}\n.upload-button:hover {\n  background: var(--brand-600);\n}\n.edit-button {\n  background: var(--success);\n  color: #fff;\n}\n.edit-button:hover {\n  background: #15803d;\n}\n.action-button:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.file-input {\n  display: none;\n}\n.upload-preview {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  padding: var(--sp-3) var(--sp-4);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  flex-wrap: wrap;\n}\n.preview-thumbnail {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border);\n}\n.upload-info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-3);\n  font-size: 0.85rem;\n  flex: 1;\n  min-width: 0;\n}\n.upload-info .material-icons {\n  font-size: 18px;\n}\n.upload-actions {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n}\n.confirm-btn,\n.cancel-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0.55rem 0.9rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: background-color 0.18s ease;\n  font-family: inherit;\n}\n.confirm-btn {\n  background: var(--success);\n  color: #fff;\n}\n.confirm-btn:hover {\n  background: #15803d;\n}\n.cancel-btn {\n  background: var(--danger);\n  color: #fff;\n}\n.cancel-btn:hover {\n  background: #b91c1c;\n}\n.confirm-btn .material-icons,\n.cancel-btn .material-icons {\n  font-size: 18px;\n}\n.confirm-btn:focus-visible,\n.cancel-btn:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.settings-options {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.setting-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: var(--sp-4);\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  transition: background-color 0.18s ease, border-color 0.18s ease;\n}\n.setting-item:hover {\n  background: var(--bg);\n}\n.setting-item.clickable {\n  cursor: pointer;\n}\n.setting-item.clickable:hover {\n  border-color: var(--brand);\n  background: var(--brand-50);\n}\n.setting-info {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  min-width: 0;\n}\n.setting-icon {\n  color: var(--brand);\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.setting-text {\n  min-width: 0;\n}\n.setting-text h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.setting-text p {\n  margin: 4px 0 0;\n  font-size: 0.82rem;\n  color: var(--text-3);\n}\n.chevron {\n  color: var(--text-4);\n  flex-shrink: 0;\n}\n.setting-item.clickable:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 26px;\n  flex-shrink: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: var(--border-strong);\n  transition: background-color 0.2s ease;\n  border-radius: var(--r-pill);\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: #fff;\n  transition: transform 0.2s ease;\n  border-radius: 50%;\n  box-shadow: var(--shadow-sm);\n}\n.switch input:checked + .slider {\n  background-color: var(--brand);\n}\n.switch input:checked + .slider:before {\n  transform: translateX(22px);\n}\n.switch input:focus-visible + .slider {\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.account-actions {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.logout-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0.7rem 1.1rem;\n  background: var(--danger);\n  color: #fff;\n  border: 1px solid var(--danger);\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: background-color 0.18s ease;\n  font-family: inherit;\n}\n.logout-btn:hover {\n  background: #b91c1c;\n}\n.logout-btn:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.3);\n}\n.logout-btn .material-icons {\n  font-size: 18px;\n}\n.logout-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n  padding: var(--sp-4);\n}\n.logout-modal-overlay.show {\n  opacity: 1;\n  visibility: visible;\n}\n.logout-modal {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-lg);\n  transform: translateY(8px);\n  transition: transform 0.2s ease;\n  max-width: 420px;\n  width: 100%;\n  overflow: hidden;\n}\n.logout-modal-overlay.show .logout-modal {\n  transform: translateY(0);\n}\n.modal-header {\n  padding: var(--sp-5);\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-1);\n  text-align: center;\n}\n.modal-body {\n  padding: var(--sp-5);\n  text-align: center;\n  overflow-y: auto;\n}\n.modal-body p {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  line-height: 1.5;\n}\n.modal-actions {\n  padding: 0 var(--sp-5) var(--sp-5);\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: center;\n}\n.modal-actions .cancel-btn,\n.modal-actions .confirm-btn {\n  padding: 0.6rem 1.2rem;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.modal-actions .confirm-btn {\n  background: var(--danger);\n}\n.modal-actions .confirm-btn:hover {\n  background: #b91c1c;\n}\n.modal-actions .cancel-btn {\n  background: var(--surface);\n  color: var(--text-2);\n  border: 1px solid var(--border-strong);\n}\n.modal-actions .cancel-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.form-group {\n  margin-bottom: var(--sp-4);\n  text-align: left;\n}\n.form-group label {\n  display: block;\n  margin-bottom: var(--sp-2);\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-2);\n}\n.form-group input {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.92rem;\n  color: var(--text-1);\n  background: var(--surface);\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--danger);\n  font-size: 0.85rem;\n  margin-top: var(--sp-2);\n}\n.password-success {\n  text-align: center;\n  padding: var(--sp-4);\n}\n.password-success .success-icon {\n  font-size: 48px;\n  color: var(--success);\n}\n.password-success p {\n  margin-top: var(--sp-3);\n  color: var(--success);\n  font-weight: 600;\n}\n.legal-modal {\n  max-width: 600px;\n  max-height: 85vh;\n}\n.legal-content {\n  padding: var(--sp-4) 0;\n  max-height: 60vh;\n  overflow-y: auto;\n  text-align: left;\n}\n.legal-content h4 {\n  color: var(--brand);\n  font-size: 0.95rem;\n  margin: var(--sp-4) 0 var(--sp-2);\n}\n.legal-content p {\n  color: var(--text-2);\n  font-size: 0.88rem;\n  line-height: 1.6;\n  margin: var(--sp-2) 0;\n  text-align: left;\n}\n.legal-content ul {\n  margin: var(--sp-2) 0;\n  padding-left: 20px;\n}\n.legal-content ul li {\n  color: var(--text-2);\n  font-size: 0.88rem;\n  line-height: 1.6;\n  margin: 4px 0;\n}\n.legal-content .last-update {\n  margin-top: var(--sp-5);\n  padding-top: var(--sp-4);\n  border-top: 1px solid var(--border);\n  color: var(--text-4);\n  font-size: 0.8rem;\n  font-style: italic;\n}\n.success-notification {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease, visibility 0.25s ease;\n  padding: var(--sp-4);\n}\n.success-notification.show {\n  opacity: 1;\n  visibility: visible;\n}\n.notification-content {\n  background: var(--surface);\n  border-radius: var(--r-md);\n  padding: var(--sp-8);\n  text-align: center;\n  color: var(--text-1);\n  box-shadow: var(--shadow-lg);\n  transform: scale(0.96);\n  transition: transform 0.25s ease;\n  max-width: 400px;\n  width: 100%;\n}\n.success-notification.show .notification-content {\n  transform: scale(1);\n}\n.checkmark-circle {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: var(--success);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto var(--sp-5);\n}\n.checkmark {\n  width: 40px;\n  height: 40px;\n  stroke: #fff;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.notification-content h3 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0 0 var(--sp-3);\n  color: var(--text-1);\n}\n.notification-content p {\n  font-size: 0.95rem;\n  margin: 0;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .settings-container {\n    padding: var(--sp-4);\n  }\n  .profile-section {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .profile-info-container {\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n  }\n  .inline-edit-form {\n    width: 100%;\n  }\n  .action-buttons-row .action-button {\n    flex: 1;\n    justify-content: center;\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .modal-actions .cancel-btn,\n  .modal-actions .confirm-btn {\n    width: 100%;\n  }\n}\n:host-context([data-theme="dark"]) .slider:before {\n  background-color: var(--surface);\n}\n/*# sourceMappingURL=settings.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Settings, { className: "Settings", filePath: "app/settings/settings.ts", lineNumber: 15 });
})();
export {
  Settings
};
//# sourceMappingURL=chunk-ALJ42FHA.js.map
