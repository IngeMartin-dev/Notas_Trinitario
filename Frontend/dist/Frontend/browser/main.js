import {
  ThemeService
} from "./chunk-KWWFIFTY.js";
import {
  NotificationService
} from "./chunk-B2PPFIPW.js";
import {
  GenerationService
} from "./chunk-PGR2Y62M.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-7DDXMRNS.js";
import {
  GlobalRealtimeService
} from "./chunk-ZYSOL3KW.js";
import {
  AuthService
} from "./chunk-UNKQMH5O.js";
import {
  bootstrapApplication
} from "./chunk-VCEXV2JC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TCE2U3R2.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  EMPTY,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  catchError,
  filter,
  inject,
  of,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G4AEIR3O.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-3MY4XB5E.js").then((m) => m.Login)
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-TTZXZNRJ.js").then((m) => m.Dashboard)
  },
  {
    path: "students",
    loadComponent: () => import("./chunk-KFOYUBVK.js").then((m) => m.Students)
  },
  {
    path: "grades",
    loadComponent: () => import("./chunk-PSLN3WRR.js").then((m) => m.Grades)
  },
  {
    path: "boletines",
    loadComponent: () => import("./chunk-QBALEC6Q.js").then((m) => m.Boletines)
  },
  {
    path: "recoveries",
    loadComponent: () => import("./chunk-VDB7F35S.js").then((m) => m.Recoveries)
  },
  {
    path: "subjects",
    loadComponent: () => import("./chunk-MRJDJRDJ.js").then((m) => m.Subjects)
  },
  {
    path: "teachers",
    loadComponent: () => import("./chunk-FU7Z6DQV.js").then((m) => m.Teachers)
  },
  {
    path: "reports",
    loadComponent: () => import("./chunk-V7T47BQD.js").then((m) => m.Reports)
  },
  {
    path: "chats",
    loadComponent: () => import("./chunk-JJC7JJTD.js").then((m) => m.Chats)
  },
  {
    path: "settings",
    loadComponent: () => import("./chunk-ALJ42FHA.js").then((m) => m.Settings)
  },
  {
    path: "directors-group",
    loadComponent: () => import("./chunk-OYMGNF3O.js").then((m) => m.DirectorsGroup)
  },
  {
    path: "parents",
    loadComponent: () => import("./chunk-B7VDVZLE.js").then((m) => m.Parents)
  },
  {
    path: "periods",
    loadComponent: () => import("./chunk-NSQWHBCG.js").then((m) => m.Periods)
  },
  {
    path: "not-found",
    loadComponent: () => import("./chunk-JVNFPV6D.js").then((m) => m.NotFound)
  },
  {
    path: "**",
    loadComponent: () => import("./chunk-JVNFPV6D.js").then((m) => m.NotFound)
  }
];

// src/app/auth-interceptor.ts
var isRefreshing = false;
var refreshTokenSubject = null;
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  const handleConnectionError = (error) => {
    if (error.status === 0 && !req.url.includes("/not-found") && !req.url.includes("/api/health")) {
      router.navigate(["/not-found"], { queryParams: { reason: "connection" } });
      return EMPTY;
    }
    return throwError(() => error);
  };
  if (token && !req.url.includes("/api/health")) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned).pipe(catchError((error) => {
      if (error.status === 0) {
        return handleConnectionError(error);
      }
      if (error.status === 401 && !req.url.includes("/auth/login") && !req.url.includes("/auth/refresh")) {
        if (!isRefreshing) {
          isRefreshing = true;
          refreshTokenSubject = of(null);
          return authService.refreshToken().pipe(switchMap((refreshResponse) => {
            isRefreshing = false;
            if (refreshResponse.token) {
              localStorage.setItem("token", refreshResponse.token);
              localStorage.setItem("refreshToken", refreshResponse.refreshToken);
              refreshTokenSubject = of(refreshResponse.token);
              const retryReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${refreshResponse.token}`
                }
              });
              return next(retryReq);
            }
            authService.logout();
            window.location.href = "/login";
            return throwError(() => error);
          }), catchError((refreshError) => {
            isRefreshing = false;
            authService.logout();
            window.location.href = "/login";
            return throwError(() => refreshError);
          }));
        } else {
          return refreshTokenSubject.pipe(switchMap((newToken) => {
            if (newToken) {
              const retryReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              });
              return next(retryReq);
            }
            authService.logout();
            window.location.href = "/login";
            return throwError(() => error);
          }));
        }
      }
      return throwError(() => error);
    }));
  }
  return next(req).pipe(catchError((error) => handleConnectionError(error)));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/services/message.service.ts
var MessageService = class _MessageService {
  http = inject(HttpClient);
  API_BASE = "http://localhost:8080/api/messages";
  messagesSubject = new BehaviorSubject([]);
  unreadCountSubject = new BehaviorSubject(0);
  readMessageIds = /* @__PURE__ */ new Set();
  // Track messages that have been marked as read
  READ_STORAGE_KEY = "read_messages";
  messages$ = this.messagesSubject.asObservable();
  unreadCount$ = this.unreadCountSubject.asObservable();
  constructor() {
    this.loadReadMessages();
    setInterval(() => {
      this.refreshMessages();
    }, 5e3);
  }
  /**
   * Load messages for the current user
   */
  loadMessages(userId) {
    return this.http.get(`${this.API_BASE}/user/${userId}`).pipe(tap((messages) => {
      console.log("Loaded messages:", messages);
      const messagesWithPreservedReadStatus = messages.map((message) => {
        if (this.readMessageIds.has(message.id)) {
          return __spreadProps(__spreadValues({}, message), { isRead: true });
        }
        return message;
      });
      this.messagesSubject.next(messagesWithPreservedReadStatus);
      this.updateUnreadCount(messagesWithPreservedReadStatus);
    }));
  }
  /**
   * Load read message IDs from localStorage
   */
  loadReadMessages() {
    try {
      const stored = localStorage.getItem(this.READ_STORAGE_KEY);
      if (stored) {
        const readIds = JSON.parse(stored);
        this.readMessageIds = new Set(readIds);
        console.log("Loaded read messages from storage:", this.readMessageIds.size);
      }
    } catch (error) {
      console.error("Error loading read messages:", error);
      this.readMessageIds.clear();
    }
  }
  /**
   * Save read message IDs to localStorage
   */
  saveReadMessages() {
    try {
      const readIds = Array.from(this.readMessageIds);
      localStorage.setItem(this.READ_STORAGE_KEY, JSON.stringify(readIds));
      console.log("Saved read messages to storage:", readIds.length);
    } catch (error) {
      console.error("Error saving read messages:", error);
    }
  }
  /**
   * Refresh messages (without loading initially)
   */
  refreshMessages() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (user && user.id) {
      this.http.get(`${this.API_BASE}/user/${user.id}`).subscribe({
        next: (messages) => {
          console.log("Refreshed messages:", messages);
          const messagesWithPreservedReadStatus = messages.map((message) => {
            if (this.readMessageIds.has(message.id)) {
              return __spreadProps(__spreadValues({}, message), { isRead: true });
            }
            return message;
          });
          this.messagesSubject.next(messagesWithPreservedReadStatus);
          this.updateUnreadCount(messagesWithPreservedReadStatus);
        },
        error: (error) => {
          console.error("Error refreshing messages:", error);
        }
      });
    }
  }
  /**
   * Mark a message as read
   */
  markAsRead(messageId) {
    this.readMessageIds.add(messageId);
    this.saveReadMessages();
    return this.http.post(`${this.API_BASE}/${messageId}/read`, {}).pipe(tap(() => {
      const messages = this.messagesSubject.value;
      const updatedMessages = messages.map((m) => m.id === messageId ? __spreadProps(__spreadValues({}, m), { isRead: true }) : m);
      this.messagesSubject.next(updatedMessages);
      this.updateUnreadCount(updatedMessages);
    }));
  }
  /**
   * Get unread messages count
   */
  getUnreadCount() {
    return this.unreadCount$;
  }
  /**
   * Get all messages
   */
  getMessages() {
    return this.messages$;
  }
  /**
   * Update unread count
   */
  updateUnreadCount(messages) {
    const unreadCount = messages.filter((m) => !m.isRead).length;
    this.unreadCountSubject.next(unreadCount);
  }
  /**
   * Format message time for display
   */
  formatTimeAgo(createdAt) {
    const now = /* @__PURE__ */ new Date();
    const created = new Date(createdAt);
    const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1e3 * 60));
    if (diffInMinutes < 1)
      return "Ahora mismo";
    if (diffInMinutes < 60)
      return `Hace ${diffInMinutes} min`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24)
      return `Hace ${diffInHours} h`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7)
      return `Hace ${diffInDays} d`;
    return created.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: created.getFullYear() !== now.getFullYear() ? "numeric" : void 0
    });
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageService, factory: _MessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/messages-dropdown.component.ts
function MessagesDropdownComponent_Conditional_0_Conditional_7_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275domElement(1, "span", 18);
    \u0275\u0275domElementEnd();
  }
}
function MessagesDropdownComponent_Conditional_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275domListener("click", function MessagesDropdownComponent_Conditional_0_Conditional_7_For_2_Template_div_click_0_listener() {
      const notification_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAsReadAndClose(notification_r4, "notification"));
    });
    \u0275\u0275domElementStart(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "span", 14);
    \u0275\u0275text(5, "notifications");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(12, MessagesDropdownComponent_Conditional_0_Conditional_7_For_2_Conditional_12_Template, 2, 0, "div", 17);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", ctx_r1.isNotificationNewlyArrived(notification_r4))("deleting", ctx_r1.deletingItems.has(notification_r4.id));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(notification_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatNotificationTime(notification_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r4.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isNotificationNewlyArrived(notification_r4) ? 12 : -1);
  }
}
function MessagesDropdownComponent_Conditional_0_Conditional_7_For_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 27);
    \u0275\u0275domElement(1, "span", 28);
    \u0275\u0275domElementEnd();
  }
}
function MessagesDropdownComponent_Conditional_0_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275domListener("click", function MessagesDropdownComponent_Conditional_0_Conditional_7_For_4_Template_div_click_0_listener() {
      const message_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAsReadAndClose(message_r6, "message"));
    });
    \u0275\u0275domElementStart(1, "div", 20)(2, "div", 21)(3, "div", 13)(4, "span", 22);
    \u0275\u0275text(5, "mail");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 23);
    \u0275\u0275text(9, "respondi\xF3 a:");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 15);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 24)(13, "span", 25);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 26);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(17, MessagesDropdownComponent_Conditional_0_Conditional_7_For_4_Conditional_17_Template, 2, 0, "div", 27);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", !message_r6.isRead)("deleting", ctx_r1.deletingItems.has(message_r6.id));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", message_r6.senderName, " ", message_r6.senderSurname);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatMessageTime(message_r6.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', message_r6.originalNotificationTitle, '"');
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r6.replyMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(!message_r6.isRead ? 17 : -1);
  }
}
function MessagesDropdownComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, MessagesDropdownComponent_Conditional_0_Conditional_7_For_2_Template, 13, 8, "div", 8, \u0275\u0275componentInstance().trackByNotificationId, true);
    \u0275\u0275repeaterCreate(3, MessagesDropdownComponent_Conditional_0_Conditional_7_For_4_Template, 18, 10, "div", 9, \u0275\u0275componentInstance().trackByMessageId, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredNotifications);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredMessages);
  }
}
function MessagesDropdownComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "mail_outline");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No tienes notificaciones ni mensajes");
    \u0275\u0275domElementEnd()();
  }
}
function MessagesDropdownComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 7)(1, "div", 29)(2, "button", 30);
    \u0275\u0275domListener("click", function MessagesDropdownComponent_Conditional_0_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275text(3, " Marcar todos como le\xEDdos ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 31);
    \u0275\u0275domListener("click", function MessagesDropdownComponent_Conditional_0_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAllNotifications());
    });
    \u0275\u0275text(5, " Eliminar notificaciones ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", !ctx_r1.hasUnreadItems());
    \u0275\u0275domProperty("disabled", !ctx_r1.hasUnreadItems());
  }
}
function MessagesDropdownComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "h3");
    \u0275\u0275text(3, "Notificaciones y Mensajes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 3);
    \u0275\u0275domListener("click", function MessagesDropdownComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275domElementStart(5, "span", 4);
    \u0275\u0275text(6, "close");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(7, MessagesDropdownComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 5)(8, MessagesDropdownComponent_Conditional_0_Conditional_8_Template, 5, 0, "div", 6);
    \u0275\u0275conditionalCreate(9, MessagesDropdownComponent_Conditional_0_Conditional_9_Template, 6, 3, "div", 7);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("dropdown-open", ctx_r1.isOpen);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.hasContent() ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasContent() ? 9 : -1);
  }
}
var MessagesDropdownComponent = class _MessagesDropdownComponent {
  isOpen = false;
  notifications = [];
  messages = [];
  close = new EventEmitter();
  messageClick = new EventEmitter();
  deletingItems = /* @__PURE__ */ new Set();
  deletedItems = /* @__PURE__ */ new Set();
  messageService = inject(MessageService);
  notificationService = inject(NotificationService);
  DELETED_STORAGE_KEY = "deleted_notifications_messages";
  get filteredNotifications() {
    return this.notifications.filter((n) => !this.deletedItems.has(n.id));
  }
  get filteredMessages() {
    return this.messages.filter((m) => !this.deletedItems.has(m.id));
  }
  ngOnInit() {
    this.messageService.getMessages().subscribe((messages) => {
      if (this.messages.length === 0) {
        this.messages = messages;
      }
    });
    this.loadDeletedItems();
  }
  loadDeletedItems() {
    try {
      const stored = localStorage.getItem(this.DELETED_STORAGE_KEY);
      if (stored) {
        const deletedIds = JSON.parse(stored);
        this.deletedItems = new Set(deletedIds);
      }
    } catch (error) {
      console.error("Error loading deleted items:", error);
      this.deletedItems.clear();
    }
  }
  saveDeletedItems() {
    try {
      const deletedIds = Array.from(this.deletedItems);
      localStorage.setItem(this.DELETED_STORAGE_KEY, JSON.stringify(deletedIds));
    } catch (error) {
      console.error("Error saving deleted items:", error);
    }
  }
  closeDropdown() {
    this.isOpen = false;
    this.close.emit();
  }
  markAsReadAndClose(item, type) {
    if (type === "message" && !item.isRead) {
      this.messageService.markAsRead(item.id).subscribe();
    } else if (type === "notification" && !item.isRead) {
      this.notificationService.markAsRead(item.id).subscribe();
    }
    this.messageClick.emit({
      item,
      type,
      action: "view"
    });
    this.closeDropdown();
  }
  markAllAsRead() {
    const unreadMessages = this.messages.filter((m) => !m.isRead);
    const unreadNotifications = this.notifications.filter((n) => !n.isRead);
    unreadMessages.forEach((message) => {
      this.messageService.markAsRead(message.id).subscribe();
    });
    unreadNotifications.forEach((notification) => {
      this.notificationService.markAsRead(notification.id).subscribe();
    });
  }
  deleteAllNotifications() {
    const allItems = [...this.filteredNotifications, ...this.filteredMessages];
    let index = 0;
    const removeNext = () => {
      if (index < allItems.length) {
        const item = allItems[index];
        this.deletingItems.add(item.id);
        if (this.notifications.find((n) => n.id === item.id)) {
          this.notificationService.markAsRead(item.id).subscribe();
        } else {
          this.messageService.markAsRead(item.id).subscribe();
        }
        setTimeout(() => {
          this.deletedItems.add(item.id);
          this.deletingItems.delete(item.id);
          this.saveDeletedItems();
        }, 500);
        index++;
        setTimeout(removeNext, 200);
      }
    };
    removeNext();
  }
  hasContent() {
    return this.filteredNotifications.length > 0 || this.filteredMessages.length > 0;
  }
  hasUnreadItems() {
    return this.filteredNotifications.some((n) => !n.isRead) || this.filteredMessages.some((m) => !m.isRead);
  }
  formatMessageTime(createdAt) {
    return this.messageService.formatTimeAgo(createdAt);
  }
  formatNotificationTime(createdAt) {
    return this.notificationService.formatTimeAgo(createdAt);
  }
  isNotificationNewlyArrived(notification) {
    return this.notificationService.isNewlyArrived(notification);
  }
  trackByMessageId(index, message) {
    return message.id;
  }
  trackByNotificationId(index, notification) {
    return notification.id;
  }
  static \u0275fac = function MessagesDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagesDropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesDropdownComponent, selectors: [["app-messages-dropdown"]], inputs: { isOpen: "isOpen", notifications: "notifications", messages: "messages" }, outputs: { close: "close", messageClick: "messageClick" }, decls: 1, vars: 1, consts: [[1, "messages-dropdown", 3, "dropdown-open"], [1, "messages-dropdown"], [1, "dropdown-header"], [1, "close-btn", 3, "click"], [1, "material-icons"], [1, "combined-list"], [1, "empty-state"], [1, "dropdown-footer"], [1, "notification-item", 3, "unread", "deleting"], [1, "message-item", 3, "unread", "deleting"], [1, "notification-item", 3, "click"], [1, "notification-content"], [1, "notification-header"], [1, "sender-info"], [1, "material-icons", "notifications-icon"], [1, "item-time"], [1, "notification-text"], [1, "notification-status"], [1, "unread-dot", "notification-dot"], [1, "message-item", 3, "click"], [1, "message-content"], [1, "message-header"], [1, "material-icons", "message-icon"], [1, "reply-indicator"], [1, "original-notification"], [1, "notification-title"], [1, "message-text"], [1, "message-status"], [1, "unread-dot", "message-dot"], [1, "footer-buttons"], [1, "mark-all-read-btn", 3, "click", "disabled"], [1, "delete-notifications-btn", 3, "click"]], template: function MessagesDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MessagesDropdownComponent_Conditional_0_Template, 10, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, styles: ["\n\n.messages-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 400px;\n  min-height: 200px;\n  max-height: min(500px, 70vh);\n  background: var(--surface);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_dropdownSlide 0.2s ease-out;\n  overflow: hidden;\n}\n.dropdown-open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n@keyframes _ngcontent-%COMP%_dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dropdown-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: all 0.18s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n.close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.messages-list[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.message-item[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  position: relative;\n}\n.message-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.message-item.unread[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border-left: 3px solid var(--brand);\n}\n.message-item.unread[_ngcontent-%COMP%]:hover {\n  background: var(--brand-100);\n}\n.message-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.message-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.sender-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sender-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-1);\n}\n.reply-indicator[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-3);\n  font-weight: normal;\n}\n.original-notification[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-3);\n  font-style: italic;\n  background: var(--surface-2);\n  padding: 2px 8px;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border);\n}\n.message-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-2);\n  line-height: 1.4;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  display: -webkit-box;\n  display: box;\n  line-clamp: 3;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-4);\n  white-space: nowrap;\n  margin-top: 2px;\n}\n.message-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--brand);\n  border-radius: 50%;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: var(--text-3);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.dropdown-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.footer-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.mark-all-read-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  background: var(--brand);\n  color: white;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-notifications-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  background: var(--danger);\n  color: white;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-notifications-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.notification-item.deleting[_ngcontent-%COMP%], \n.message-item.deleting[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideOutLeft 0.5s ease-in-out forwards;\n}\n@keyframes _ngcontent-%COMP%_slideOutLeft {\n  to {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.mark-all-read-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n}\n.mark-all-read-btn[_ngcontent-%COMP%]:disabled, \n.mark-all-read-btn.disabled[_ngcontent-%COMP%] {\n  background: var(--border-strong);\n  color: var(--text-3);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.mark-all-read-btn[_ngcontent-%COMP%]:disabled:hover, \n.mark-all-read-btn.disabled[_ngcontent-%COMP%]:hover {\n  background: var(--border-strong);\n  color: var(--text-3);\n}\n.combined-list[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  position: relative;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border-left: 3px solid var(--success);\n}\n.notification-item.unread[_ngcontent-%COMP%]:hover {\n  background: #d1fae5;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.sender-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sender-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-1);\n}\n.notifications-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--success);\n}\n.message-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--brand);\n}\n.notification-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-2);\n  line-height: 1.4;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  display: -webkit-box;\n  display: box;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.item-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-4);\n  white-space: nowrap;\n  margin-top: 2px;\n}\n.notification-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.notification-dot[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.message-dot[_ngcontent-%COMP%] {\n  background: var(--brand);\n}\n.combined-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.combined-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.combined-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-strong);\n  border-radius: 3px;\n}\n.combined-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-4);\n}\n@media (max-width: 480px) {\n  .messages-dropdown[_ngcontent-%COMP%] {\n    width: calc(100vw - 24px);\n    max-width: none;\n    right: 12px;\n  }\n}\n/*# sourceMappingURL=messages-dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-messages-dropdown", standalone: true, imports: [], template: `
    @if (isOpen) {
      <div class="messages-dropdown" [class.dropdown-open]="isOpen">
        <div class="dropdown-header">
          <h3>Notificaciones y Mensajes</h3>
          <button class="close-btn" (click)="closeDropdown()">
            <span class="material-icons">close</span>
          </button>
        </div>
        @if (hasContent()) {
          <div class="combined-list">
            <!-- Notifications -->
            @for (notification of filteredNotifications; track trackByNotificationId($index, notification)) {
              <div
                class="notification-item"
                [class.unread]="isNotificationNewlyArrived(notification)"
                [class.deleting]="deletingItems.has(notification.id)"
                (click)="markAsReadAndClose(notification, 'notification')">
                <div class="notification-content">
                  <div class="notification-header">
                    <div class="sender-info">
                      <span class="material-icons notifications-icon">notifications</span>
                      <strong>{{ notification.title }}</strong>
                    </div>
                    <div class="item-time">{{ formatNotificationTime(notification.createdAt) }}</div>
                  </div>
                  <div class="notification-text">{{ notification.message }}</div>
                </div>
                @if (isNotificationNewlyArrived(notification)) {
                  <div class="notification-status">
                    <span class="unread-dot notification-dot"></span>
                  </div>
                }
              </div>
            }
            <!-- Messages/Responses -->
            @for (message of filteredMessages; track trackByMessageId($index, message)) {
              <div
                class="message-item"
                [class.unread]="!message.isRead"
                [class.deleting]="deletingItems.has(message.id)"
                (click)="markAsReadAndClose(message, 'message')">
                <div class="message-content">
                  <div class="message-header">
                    <div class="sender-info">
                      <span class="material-icons message-icon">mail</span>
                      <strong>{{ message.senderName }} {{ message.senderSurname }}</strong>
                      <span class="reply-indicator">respondi\xF3 a:</span>
                    </div>
                    <div class="item-time">{{ formatMessageTime(message.createdAt) }}</div>
                  </div>
                  <div class="original-notification">
                    <span class="notification-title">"{{ message.originalNotificationTitle }}"</span>
                  </div>
                  <div class="message-text">{{ message.replyMessage }}</div>
                </div>
                @if (!message.isRead) {
                  <div class="message-status">
                    <span class="unread-dot message-dot"></span>
                  </div>
                }
              </div>
            }
          </div>
        } @else {
          <div class="empty-state">
            <span class="material-icons">mail_outline</span>
            <p>No tienes notificaciones ni mensajes</p>
          </div>
        }
        @if (hasContent()) {
          <div class="dropdown-footer">
            <div class="footer-buttons">
              <button
                class="mark-all-read-btn"
                [disabled]="!hasUnreadItems()"
                [class.disabled]="!hasUnreadItems()"
                (click)="markAllAsRead()">
                Marcar todos como le\xEDdos
              </button>
              <button
                class="delete-notifications-btn"
                (click)="deleteAllNotifications()">
                Eliminar notificaciones
              </button>
            </div>
          </div>
        }
      </div>
    }
    `, styles: ["/* angular:styles/component:css;9d5d4a04793671618c542e18607309a2c11631ff0541468cc390d9a47de0abae;C:/Users/POWER/Documents/workspace-spring-tools-for-eclipse-4.32.0.RELEASE/Notas_Trinitario/Frontend/src/app/messages-dropdown.component.ts */\n.messages-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 400px;\n  min-height: 200px;\n  max-height: min(500px, 70vh);\n  background: var(--surface);\n  border-radius: var(--r-md);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border);\n  z-index: 1000;\n  animation: dropdownSlide 0.2s ease-out;\n  overflow: hidden;\n}\n.dropdown-open {\n  transform: translateY(0);\n}\n@keyframes dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-header {\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dropdown-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.close-btn {\n  background: none;\n  border: none;\n  padding: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: all 0.18s ease;\n}\n.close-btn:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n.close-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.messages-list {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.message-item {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  position: relative;\n}\n.message-item:hover {\n  background: var(--surface-2);\n}\n.message-item.unread {\n  background: var(--brand-50);\n  border-left: 3px solid var(--brand);\n}\n.message-item.unread:hover {\n  background: var(--brand-100);\n}\n.message-content {\n  flex: 1;\n  min-width: 0;\n}\n.message-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.sender-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sender-info strong {\n  font-size: 14px;\n  color: var(--text-1);\n}\n.reply-indicator {\n  font-size: 12px;\n  color: var(--text-3);\n  font-weight: normal;\n}\n.original-notification {\n  margin-bottom: 8px;\n}\n.notification-title {\n  font-size: 12px;\n  color: var(--text-3);\n  font-style: italic;\n  background: var(--surface-2);\n  padding: 2px 8px;\n  border-radius: var(--r-sm);\n  border: 1px solid var(--border);\n}\n.message-text {\n  font-size: 13px;\n  color: var(--text-2);\n  line-height: 1.4;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  display: -webkit-box;\n  display: box;\n  line-clamp: 3;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.message-time {\n  font-size: 11px;\n  color: var(--text-4);\n  white-space: nowrap;\n  margin-top: 2px;\n}\n.message-status {\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.unread-dot {\n  width: 8px;\n  height: 8px;\n  background: var(--brand);\n  border-radius: 50%;\n}\n.empty-state {\n  padding: 40px 20px;\n  text-align: center;\n  color: var(--text-3);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.dropdown-footer {\n  padding: 12px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.footer-buttons {\n  display: flex;\n  gap: 8px;\n}\n.mark-all-read-btn {\n  flex: 1;\n  padding: 8px 12px;\n  background: var(--brand);\n  color: white;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-notifications-btn {\n  flex: 1;\n  padding: 8px 12px;\n  background: var(--danger);\n  color: white;\n  border: none;\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.18s ease;\n}\n.delete-notifications-btn:hover {\n  background: #b91c1c;\n}\n.notification-item.deleting,\n.message-item.deleting {\n  animation: slideOutLeft 0.5s ease-in-out forwards;\n}\n@keyframes slideOutLeft {\n  to {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.mark-all-read-btn:hover {\n  background: var(--brand-600);\n}\n.mark-all-read-btn:disabled,\n.mark-all-read-btn.disabled {\n  background: var(--border-strong);\n  color: var(--text-3);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.mark-all-read-btn:disabled:hover,\n.mark-all-read-btn.disabled:hover {\n  background: var(--border-strong);\n  color: var(--text-3);\n}\n.combined-list {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.notification-item {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  position: relative;\n}\n.notification-item:hover {\n  background: var(--surface-2);\n}\n.notification-item.unread {\n  background: var(--success-bg);\n  border-left: 3px solid var(--success);\n}\n.notification-item.unread:hover {\n  background: #d1fae5;\n}\n.notification-content {\n  flex: 1;\n  min-width: 0;\n}\n.notification-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.sender-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sender-info strong {\n  font-size: 14px;\n  color: var(--text-1);\n}\n.notifications-icon {\n  font-size: 18px;\n  color: var(--success);\n}\n.message-icon {\n  font-size: 18px;\n  color: var(--brand);\n}\n.notification-text {\n  font-size: 13px;\n  color: var(--text-2);\n  line-height: 1.4;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  display: -webkit-box;\n  display: box;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.item-time {\n  font-size: 11px;\n  color: var(--text-4);\n  white-space: nowrap;\n  margin-top: 2px;\n}\n.notification-status {\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.notification-dot {\n  background: var(--success);\n}\n.message-dot {\n  background: var(--brand);\n}\n.combined-list::-webkit-scrollbar {\n  width: 6px;\n}\n.combined-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n.combined-list::-webkit-scrollbar-thumb {\n  background: var(--border-strong);\n  border-radius: 3px;\n}\n.combined-list::-webkit-scrollbar-thumb:hover {\n  background: var(--text-4);\n}\n@media (max-width: 480px) {\n  .messages-dropdown {\n    width: calc(100vw - 24px);\n    max-width: none;\n    right: 12px;\n  }\n}\n/*# sourceMappingURL=messages-dropdown.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], notifications: [{
    type: Input
  }], messages: [{
    type: Input
  }], close: [{
    type: Output
  }], messageClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesDropdownComponent, { className: "MessagesDropdownComponent", filePath: "app/messages-dropdown.component.ts", lineNumber: 492 });
})();

// src/app/notification-details/notification-details.component.ts
function NotificationDetailsComponent_Conditional_9_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.profilePicture, \u0275\u0275sanitizeUrl)("alt", ((ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.name) || "") + " " + ((ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.surname) || ""))("title", ((ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.name) || "") + " " + ((ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.surname) || ""));
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.name, ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.surname), " ");
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275conditionalCreate(1, NotificationDetailsComponent_Conditional_9_Conditional_11_Conditional_1_Template, 1, 3, "img", 20)(2, NotificationDetailsComponent_Conditional_9_Conditional_11_Conditional_2_Template, 2, 1, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.profilePicture) ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.name) || "", " ", (ctx_r1.notification == null ? null : ctx_r1.notification.user == null ? null : ctx_r1.notification.user.surname) || "", " ");
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 27)(2, "span", 11);
    \u0275\u0275text(3, "circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " No le\xEDdo ");
    \u0275\u0275elementEnd()();
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar Respuesta");
    \u0275\u0275elementEnd();
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviando...");
    \u0275\u0275elementEnd();
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 28)(2, "h3");
    \u0275\u0275text(3, "Responder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.replyMessage, $event) || (ctx_r1.replyMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(6, "                 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31)(8, "button", 32);
    \u0275\u0275listener("click", function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(9, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendReply());
    });
    \u0275\u0275conditionalCreate(11, NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Conditional_11_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(12, NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Conditional_12_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.replyMessage);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isReplying);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.replyMessage.trim() || ctx_r1.isReplying);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isReplying ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReplying ? 12 : -1);
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 34)(2, "span", 11);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Esta es una notificaci\xF3n que usted envi\xF3 ");
    \u0275\u0275elementEnd()();
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_4_Template, 5, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_5_Template, 13, 5, "div", 25);
    \u0275\u0275conditionalCreate(6, NotificationDetailsComponent_Conditional_9_Conditional_17_Conditional_6_Template, 5, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.notification.message, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.notification.isRead ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isOwnNotification() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isOwnNotification() ? 6 : -1);
  }
}
function NotificationDetailsComponent_Conditional_9_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function NotificationDetailsComponent_Conditional_9_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsRead());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Marcar como le\xEDda ");
    \u0275\u0275elementEnd();
  }
}
function NotificationDetailsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function NotificationDetailsComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275listener("click", function NotificationDetailsComponent_Conditional_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275conditionalCreate(11, NotificationDetailsComponent_Conditional_9_Conditional_11_Template, 4, 3, "span", 14);
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function NotificationDetailsComponent_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(17, NotificationDetailsComponent_Conditional_9_Conditional_17_Template, 7, 4, "div", 17);
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275conditionalCreate(19, NotificationDetailsComponent_Conditional_9_Conditional_19_Template, 4, 0, "button", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx_r1.getNotificationTypeColor((ctx_r1.notification == null ? null : ctx_r1.notification.notificationType) || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getNotificationTypeIcon((ctx_r1.notification == null ? null : ctx_r1.notification.notificationType) || ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.notification == null ? null : ctx_r1.notification.title) || "Notificaci\xF3n");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.notification == null ? null : ctx_r1.notification.user) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime((ctx_r1.notification == null ? null : ctx_r1.notification.createdAt) || ""));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.notification ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.notification && !ctx_r1.notification.isRead ? 19 : -1);
  }
}
var NotificationDetailsComponent = class _NotificationDetailsComponent {
  notification = null;
  isOpen = false;
  close = new EventEmitter();
  reply = new EventEmitter();
  notificationService = inject(NotificationService);
  authService = inject(AuthService);
  replyMessage = "";
  isReplying = false;
  // Success notification signal
  showSuccessNotification = signal(false, ...ngDevMode ? [{ debugName: "showSuccessNotification" }] : []);
  closeModal() {
    this.isOpen = false;
    this.resetForm();
    this.close.emit();
  }
  resetForm() {
    this.replyMessage = "";
    this.isReplying = false;
  }
  markAsRead() {
    if (this.notification && !this.notification.isRead) {
      this.notificationService.markAsRead(this.notification.id).subscribe();
    }
  }
  sendReply() {
    if (!this.replyMessage.trim() || !this.notification || this.isReplying) {
      return;
    }
    this.isReplying = true;
    const replyData = {
      originalNotificationId: this.notification.id,
      message: this.replyMessage.trim(),
      senderId: this.getCurrentUserId()
    };
    this.reply.emit(replyData);
    this.showSuccessNotification.set(true);
    setTimeout(() => {
      this.showSuccessNotification.set(false);
      this.resetForm();
    }, 2e3);
  }
  getCurrentUserId() {
    const user = this.authService.getCurrentUserValue();
    return user && user.id ? user.id : 0;
  }
  formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getNotificationTypeIcon(type) {
    switch (type) {
      case "ADMIN_MESSAGE":
        return "admin_panel_settings";
      case "REPORT_CARD_SENT":
        return "assignment";
      case "REPORT_CARD_SIGNED":
        return "verified";
      default:
        return "notifications";
    }
  }
  getNotificationTypeColor(type) {
    switch (type) {
      case "ADMIN_MESSAGE":
        return "#2196F3";
      case "REPORT_CARD_SENT":
        return "#FF9800";
      case "REPORT_CARD_SIGNED":
        return "#4CAF50";
      default:
        return "#757575";
    }
  }
  isOwnNotification() {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      const currentUser = JSON.parse(userData);
      return this.notification ? this.notification.user.id === currentUser.id : false;
    }
    return false;
  }
  getInitials(name, surname) {
    if (!name && !surname)
      return "";
    const firstName = name ? name.charAt(0).toUpperCase() : "";
    const lastName = surname ? surname.charAt(0).toUpperCase() : "";
    return firstName + lastName;
  }
  static \u0275fac = function NotificationDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationDetailsComponent, selectors: [["app-notification-details"]], inputs: { notification: "notification", isOpen: "isOpen" }, outputs: { close: "close", reply: "reply" }, decls: 10, vars: 3, consts: [[1, "success-notification"], [1, "notification-content"], [1, "checkmark-circle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 52 52", 1, "checkmark"], ["fill", "none", "d", "M14 27l8 8 16-16", 1, "checkmark__check"], [1, "notification-details-overlay"], [1, "notification-details-overlay", 3, "click"], [1, "notification-details-modal", 3, "click"], [1, "modal-header"], [1, "header-info"], [1, "notification-icon"], [1, "material-icons"], [1, "header-text"], [1, "meta-info"], [1, "sender"], [1, "date"], [1, "close-button", 3, "click"], [1, "modal-content"], [1, "modal-footer"], [1, "mark-read-btn"], [1, "sender-profile-picture", 3, "src", "alt", "title"], [1, "sender-initials"], [1, "message-container"], [1, "message-text"], [1, "notification-status"], [1, "reply-section"], [1, "own-notification-info"], [1, "status-indicator"], [1, "reply-header"], [1, "reply-form"], ["id", "reply-textarea", "name", "replyMessage", "placeholder", "Escriba su respuesta...", "rows", "3", "autocomplete", "off", "aria-label", "Escriba su respuesta", 1, "reply-textarea", 3, "ngModelChange", "ngModel"], [1, "reply-actions"], [1, "cancel-reply-btn", 3, "click", "disabled"], [1, "send-reply-btn", 3, "click", "disabled"], [1, "info-message"], [1, "mark-read-btn", 3, "click"]], template: function NotificationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6, "\xA1Respuesta enviada!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Tu mensaje ha sido enviado con \xE9xito");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, NotificationDetailsComponent_Conditional_9_Template, 20, 8, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275classProp("show", ctx.showSuccessNotification());
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.isOpen ? 9 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.notification-details-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.notification-details-modal[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-lg);\n  max-width: 600px;\n  width: 100%;\n  max-height: 85vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px 20px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--surface-2);\n}\n.header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n.notification-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-1);\n  line-height: 1.3;\n}\n.meta-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.sender[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-2);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sender-profile-picture[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center;\n}\n.sender-initials[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--brand);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-3);\n}\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  color: var(--text-3);\n  transition: all 0.18s ease;\n  margin-left: 12px;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n.close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.close-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n  overflow-y: auto;\n}\n.message-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.message-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--text-1);\n  background: var(--surface-2);\n  padding: 20px;\n  border-radius: var(--r-md);\n  border-left: 4px solid var(--border-strong);\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  display: -webkit-box;\n  display: box;\n  -webkit-line-clamp: 8;\n  line-clamp: 8;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.notification-status[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  align-items: center;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--text-2);\n}\n.status-indicator[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: var(--success);\n}\n.reply-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding-top: 24px;\n}\n.reply-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.reply-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.reply-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: inherit;\n  resize: vertical;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  background: var(--surface);\n  color: var(--text-1);\n}\n.reply-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.cancel-reply-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  color: var(--text-2);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.cancel-reply-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-2);\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.cancel-reply-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.cancel-reply-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.send-reply-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--brand);\n  border: none;\n  border-radius: var(--r-sm);\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.send-reply-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.send-reply-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-600);\n  outline-offset: 2px;\n}\n.send-reply-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.own-notification-info[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding-top: 24px;\n}\n.info-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--info-bg);\n  border: 1px solid var(--brand-100);\n  border-radius: var(--r-sm);\n  color: var(--brand);\n  font-size: 14px;\n}\n.info-message[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 28px;\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.mark-read-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: var(--r-sm);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.mark-read-btn[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  box-shadow: var(--shadow-sm);\n}\n.mark-read-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--success);\n  outline-offset: 2px;\n}\n.mark-read-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .notification-details-modal[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 90vh;\n    margin: 0;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 20px 16px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .header-info[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .notification-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .notification-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .reply-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cancel-reply-btn[_ngcontent-%COMP%], \n   .send-reply-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .notification-details-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .notification-details-modal[_ngcontent-%COMP%] {\n    max-height: 95vh;\n    border-radius: var(--r-lg) var(--r-lg) 0 0;\n  }\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-strong);\n  border-radius: 3px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-4);\n}\n.success-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.success-notification.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.success-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 40px;\n  text-align: center;\n  color: #333;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  transform: scale(0.8) translateY(20px);\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 400px;\n  width: 90%;\n  position: relative;\n  overflow: hidden;\n}\n.success-notification.show[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  transform: scale(1) translateY(0);\n}\n.checkmark-circle[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  position: relative;\n  animation: _ngcontent-%COMP%_circlePulse 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  box-shadow: 0 15px 30px rgba(16, 185, 129, 0.3);\n}\n@keyframes _ngcontent-%COMP%_circlePulse {\n  0% {\n    transform: scale(0) rotate(0deg);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  50% {\n    transform: scale(1.05) rotate(180deg);\n    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(1) rotate(360deg);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.checkmark[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  stroke: white;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  animation: _ngcontent-%COMP%_checkmarkDraw 0.3s ease-out forwards 0.2s;\n  opacity: 0;\n  filter: drop-shadow(0 3px 6px rgba(16, 185, 129, 0.3));\n}\n@keyframes _ngcontent-%COMP%_checkmarkDraw {\n  0% {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    opacity: 1;\n    transform: scale(0.5);\n  }\n  50% {\n    stroke-dashoffset: 83;\n    opacity: 1;\n    transform: scale(1.02);\n  }\n  100% {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 0;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.success-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 12px 0;\n  color: #1a202c;\n  letter-spacing: -0.025em;\n}\n.success-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n  color: #4a5568;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.success-notification[_ngcontent-%COMP%]:not(.show) {\n  animation: _ngcontent-%COMP%_notificationFadeOut 0.5s ease-in forwards;\n}\n@keyframes _ngcontent-%COMP%_notificationFadeOut {\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n[data-theme="dark"][_nghost-%COMP%]   .success-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .success-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n/*# sourceMappingURL=notification-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-notification-details", standalone: true, imports: [FormsModule], template: `<!-- Success Notification -->
<div class="success-notification" [class.show]="showSuccessNotification()">
  <div class="notification-content">
    <div class="checkmark-circle">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <path class="checkmark__check" fill="none" d="M14 27l8 8 16-16"/>
      </svg>
    </div>
    <h3>\xA1Respuesta enviada!</h3>
    <p>Tu mensaje ha sido enviado con \xE9xito</p>
  </div>
</div>

@if (isOpen) {
  <div class="notification-details-overlay" (click)="closeModal()">
    <div class="notification-details-modal" (click)="$event.stopPropagation()">
      <!-- Header -->
      <div class="modal-header">
        <div class="header-info">
          <div
            class="notification-icon"
            [style.background-color]="getNotificationTypeColor(notification?.notificationType || '')"
            >
            <span class="material-icons">{{
              getNotificationTypeIcon(notification?.notificationType || '')
            }}</span>
          </div>
          <div class="header-text">
            <h2>{{ notification?.title || 'Notificaci\xF3n' }}</h2>
            <div class="meta-info">
              @if (notification?.user) {
                <span class="sender">
                  @if (notification?.user?.profilePicture) {
                    <img
                      [src]="notification?.user?.profilePicture"
                      [alt]="(notification?.user?.name || '') + ' ' + (notification?.user?.surname || '')"
                      [title]="(notification?.user?.name || '') + ' ' + (notification?.user?.surname || '')"
                      class="sender-profile-picture"
                      />
                  } @else {
                    <div class="sender-initials">
                      {{ getInitials(notification?.user?.name, notification?.user?.surname) }}
                    </div>
                  }
                  {{ notification?.user?.name || '' }} {{ notification?.user?.surname || '' }}
                </span>
              }
              <span class="date">{{ formatDateTime(notification?.createdAt || '') }}</span>
            </div>
          </div>
        </div>
        <button class="close-button" (click)="closeModal()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <!-- Content -->
      @if (notification) {
        <div class="modal-content">
          <div class="message-container">
            <div class="message-text">
              {{ notification.message }}
            </div>
            @if (!notification.isRead) {
              <div class="notification-status">
                <span class="status-indicator">
                  <span class="material-icons">circle</span>
                  No le\xEDdo
                </span>
              </div>
            }
          </div>
          <!-- Reply Section -->
          @if (!isOwnNotification()) {
            <div class="reply-section">
              <div class="reply-header">
                <h3>Responder</h3>
              </div>
               <div class="reply-form">
                  <textarea
                    id="reply-textarea"
                    name="replyMessage"
                    [(ngModel)]="replyMessage"
                    placeholder="Escriba su respuesta..."
                    rows="3"
                    class="reply-textarea"
                    autocomplete="off"
                    aria-label="Escriba su respuesta"
                    >
                 </textarea>
                <div class="reply-actions">
                  <button class="cancel-reply-btn" (click)="resetForm()" [disabled]="isReplying">
                    Cancelar
                  </button>
                  <button
                    class="send-reply-btn"
                    (click)="sendReply()"
                    [disabled]="!replyMessage.trim() || isReplying"
                    >
                    @if (!isReplying) {
                      <span>Enviar Respuesta</span>
                    }
                    @if (isReplying) {
                      <span>Enviando...</span>
                    }
                  </button>
                </div>
              </div>
            </div>
          }
          <!-- Own notification info -->
          @if (isOwnNotification()) {
            <div class="own-notification-info">
              <div class="info-message">
                <span class="material-icons">info</span>
                Esta es una notificaci\xF3n que usted envi\xF3
              </div>
            </div>
          }
        </div>
      }
      <!-- Footer -->
      <div class="modal-footer">
        @if (notification && !notification.isRead) {
          <button
            class="mark-read-btn"
            (click)="markAsRead()"
            >
            <span class="material-icons">done_all</span>
            Marcar como le\xEDda
          </button>
        }
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/notification-details/notification-details.component.css */\n.notification-details-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: fadeIn 0.3s ease-out;\n}\n.notification-details-modal {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-lg);\n  max-width: 600px;\n  width: 100%;\n  max-height: 85vh;\n  overflow: hidden;\n  animation: slideIn 0.3s ease-out;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header {\n  padding: 24px 28px 20px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--surface-2);\n}\n.header-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.notification-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--r-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n}\n.notification-icon .material-icons {\n  font-size: 24px;\n  color: white;\n}\n.header-text h2 {\n  margin: 0 0 6px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-1);\n  line-height: 1.3;\n}\n.meta-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.sender {\n  font-size: 14px;\n  color: var(--text-2);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sender-profile-picture {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center;\n}\n.sender-initials {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--brand);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n}\n.date {\n  font-size: 13px;\n  color: var(--text-3);\n}\n.close-button {\n  background: none;\n  border: none;\n  padding: 8px;\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  color: var(--text-3);\n  transition: all 0.18s ease;\n  margin-left: 12px;\n}\n.close-button:hover {\n  background: var(--surface-2);\n  color: var(--text-1);\n}\n.close-button:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.close-button .material-icons {\n  font-size: 20px;\n}\n.modal-content {\n  flex: 1;\n  padding: 28px;\n  overflow-y: auto;\n}\n.message-container {\n  margin-bottom: 24px;\n}\n.message-text {\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--text-1);\n  background: var(--surface-2);\n  padding: 20px;\n  border-radius: var(--r-md);\n  border-left: 4px solid var(--border-strong);\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  display: -webkit-box;\n  display: box;\n  -webkit-line-clamp: 8;\n  line-clamp: 8;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.notification-status {\n  margin-top: 12px;\n  display: flex;\n  align-items: center;\n}\n.status-indicator {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--text-2);\n}\n.status-indicator .material-icons {\n  font-size: 8px;\n  color: var(--success);\n}\n.reply-section {\n  border-top: 1px solid var(--border);\n  padding-top: 24px;\n}\n.reply-header h3 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.reply-form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.reply-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: inherit;\n  resize: vertical;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  background: var(--surface);\n  color: var(--text-1);\n}\n.reply-textarea:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.reply-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.cancel-reply-btn {\n  padding: 10px 20px;\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  color: var(--text-2);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.cancel-reply-btn:hover:not(:disabled) {\n  background: var(--surface-2);\n  border-color: var(--brand);\n  color: var(--brand);\n}\n.cancel-reply-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.cancel-reply-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.send-reply-btn {\n  padding: 10px 20px;\n  background: var(--brand);\n  border: none;\n  border-radius: var(--r-sm);\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.send-reply-btn:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.send-reply-btn:focus-visible {\n  outline: 2px solid var(--brand-600);\n  outline-offset: 2px;\n}\n.send-reply-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.own-notification-info {\n  border-top: 1px solid var(--border);\n  padding-top: 24px;\n}\n.info-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--info-bg);\n  border: 1px solid var(--brand-100);\n  border-radius: var(--r-sm);\n  color: var(--brand);\n  font-size: 14px;\n}\n.info-message .material-icons {\n  font-size: 18px;\n}\n.modal-footer {\n  padding: 20px 28px;\n  border-top: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.mark-read-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: var(--r-sm);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.mark-read-btn:hover {\n  background: #15803d;\n  box-shadow: var(--shadow-sm);\n}\n.mark-read-btn:focus-visible {\n  outline: 2px solid var(--success);\n  outline-offset: 2px;\n}\n.mark-read-btn .material-icons {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .notification-details-modal {\n    width: 100%;\n    max-height: 90vh;\n    margin: 0;\n  }\n  .modal-header {\n    padding: 20px 20px 16px;\n  }\n  .modal-content {\n    padding: 20px;\n  }\n  .modal-footer {\n    padding: 16px 20px;\n  }\n  .header-info {\n    gap: 12px;\n  }\n  .notification-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .notification-icon .material-icons {\n    font-size: 20px;\n  }\n  .header-text h2 {\n    font-size: 18px;\n  }\n  .reply-actions {\n    flex-direction: column;\n  }\n  .cancel-reply-btn,\n  .send-reply-btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .notification-details-overlay {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .notification-details-modal {\n    max-height: 95vh;\n    border-radius: var(--r-lg) var(--r-lg) 0 0;\n  }\n}\n.modal-content::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.modal-content::-webkit-scrollbar-thumb {\n  background: var(--border-strong);\n  border-radius: 3px;\n}\n.modal-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-4);\n}\n.success-notification {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.success-notification.show {\n  opacity: 1;\n  visibility: visible;\n}\n.success-notification .notification-content {\n  background: white;\n  border-radius: 24px;\n  padding: 40px;\n  text-align: center;\n  color: #333;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  transform: scale(0.8) translateY(20px);\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 400px;\n  width: 90%;\n  position: relative;\n  overflow: hidden;\n}\n.success-notification.show .notification-content {\n  transform: scale(1) translateY(0);\n}\n.checkmark-circle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  position: relative;\n  animation: circlePulse 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  box-shadow: 0 15px 30px rgba(16, 185, 129, 0.3);\n}\n@keyframes circlePulse {\n  0% {\n    transform: scale(0) rotate(0deg);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  50% {\n    transform: scale(1.05) rotate(180deg);\n    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(1) rotate(360deg);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.checkmark {\n  width: 50px;\n  height: 50px;\n  stroke: white;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  animation: checkmarkDraw 0.3s ease-out forwards 0.2s;\n  opacity: 0;\n  filter: drop-shadow(0 3px 6px rgba(16, 185, 129, 0.3));\n}\n@keyframes checkmarkDraw {\n  0% {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    opacity: 1;\n    transform: scale(0.5);\n  }\n  50% {\n    stroke-dashoffset: 83;\n    opacity: 1;\n    transform: scale(1.02);\n  }\n  100% {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 0;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.success-notification .notification-content h3 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 12px 0;\n  color: #1a202c;\n  letter-spacing: -0.025em;\n}\n.success-notification .notification-content p {\n  font-size: 16px;\n  margin: 0;\n  color: #4a5568;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.success-notification:not(.show) {\n  animation: notificationFadeOut 0.5s ease-in forwards;\n}\n@keyframes notificationFadeOut {\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n:host-context([data-theme="dark"]) .success-notification .notification-content h3 {\n  color: var(--text-1);\n}\n/*# sourceMappingURL=notification-details.component.css.map */\n'] }]
  }], null, { notification: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }], reply: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationDetailsComponent, { className: "NotificationDetailsComponent", filePath: "app/notification-details/notification-details.component.ts", lineNumber: 20 });
})();

// src/app/generation-notifications.ts
function GenerationNotifications_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domListener("click", function GenerationNotifications_Conditional_0_For_2_Template_div_click_0_listener() {
      const job_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClick(job_r2));
    });
    \u0275\u0275domElementStart(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 6);
    \u0275\u0275domElement(7, "div", 7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", job_r2.status === "DONE")("error", job_r2.status === "ERROR");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.statusIcon(job_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Generaci\xF3n ", job_r2.grade, " ", job_r2.classroom);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.progressPct(job_r2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.statusText(job_r2));
  }
}
function GenerationNotifications_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, GenerationNotifications_Conditional_0_For_2_Template, 10, 10, "div", 1, \u0275\u0275componentInstance().trackByJobId, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.visibleJobs);
  }
}
var AUTO_DISMISS_MS = 6e3;
var GenerationNotifications = class _GenerationNotifications {
  generationService;
  allJobs = [];
  visibleJobs = [];
  sub;
  tickHandle;
  finishedAtClient = {};
  constructor(generationService) {
    this.generationService = generationService;
  }
  ngOnInit() {
    this.sub = this.generationService.jobs$.subscribe((jobs) => {
      this.allJobs = jobs;
      this.recompute();
    });
    this.tickHandle = setInterval(() => this.recompute(), 1e3);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    if (this.tickHandle)
      clearInterval(this.tickHandle);
  }
  recompute() {
    const now = Date.now();
    this.visibleJobs = this.allJobs.filter((job) => {
      if (job.status === "RUNNING")
        return true;
      if (!this.finishedAtClient[job.jobId]) {
        this.finishedAtClient[job.jobId] = now;
      }
      return now - this.finishedAtClient[job.jobId] < AUTO_DISMISS_MS;
    });
  }
  progressPct(job) {
    if (job.status === "DONE")
      return 100;
    if (!job.total)
      return 0;
    return Math.min(100, Math.round(job.completed / job.total * 100));
  }
  statusIcon(job) {
    if (job.status === "DONE")
      return "\u2705";
    if (job.status === "ERROR")
      return "\u26A0\uFE0F";
    return "\u23F3";
  }
  statusText(job) {
    if (job.status === "DONE")
      return `Completado \u2014 ${job.total} boletines`;
    if (job.status === "ERROR")
      return "Error en la generaci\xF3n";
    return `${job.completed} / ${job.total} boletines`;
  }
  onClick(job) {
    this.generationService.openJob(job);
  }
  trackByJobId(index, job) {
    return job.jobId;
  }
  static \u0275fac = function GenerationNotifications_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenerationNotifications)(\u0275\u0275directiveInject(GenerationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenerationNotifications, selectors: [["app-generation-notifications"]], decls: 1, vars: 1, consts: [[1, "gen-notifications-stack"], [1, "gen-notification", 3, "done", "error"], [1, "gen-notification", 3, "click"], [1, "gen-notif-header"], [1, "gen-notif-icon"], [1, "gen-notif-title"], [1, "gen-notif-progress-wrapper"], [1, "gen-notif-progress-bar"], [1, "gen-notif-text"]], template: function GenerationNotifications_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, GenerationNotifications_Conditional_0_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visibleJobs.length > 0 ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.gen-notifications-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  left: auto;\n  right: 16px;\n  bottom: env(safe-area-inset-bottom, 16px);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 10px;\n  max-width: calc(100vw - 32px);\n  width: 320px;\n}\n.gen-notification[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  box-shadow: var(--shadow-md);\n  padding: 10px 12px;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_gen-notif-in 0.25s ease-out;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.gen-notification[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.gen-notification.done[_ngcontent-%COMP%] {\n  border-color: var(--success);\n}\n.gen-notification.error[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n}\n@keyframes _ngcontent-%COMP%_gen-notif-in {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.gen-notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.gen-notif-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.gen-notif-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  color: var(--text-1);\n}\n.gen-notif-progress-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  margin-bottom: 4px;\n  border-radius: var(--r-pill);\n}\n.gen-notif-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--brand);\n  transition: width 0.3s ease;\n  border-radius: var(--r-pill);\n}\n.gen-notification.done[_ngcontent-%COMP%]   .gen-notif-progress-bar[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.gen-notification.error[_ngcontent-%COMP%]   .gen-notif-progress-bar[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.gen-notif-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-3);\n  font-weight: 500;\n}\n@media (max-width: 480px) {\n  .gen-notifications-stack[_ngcontent-%COMP%] {\n    left: 16px;\n    right: 16px;\n    width: auto;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=generation-notifications.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerationNotifications, [{
    type: Component,
    args: [{ selector: "app-generation-notifications", standalone: true, imports: [CommonModule], template: `@if (visibleJobs.length > 0) {\r
  <div class="gen-notifications-stack">\r
    @for (job of visibleJobs; track trackByJobId($index, job)) {\r
      <div\r
        class="gen-notification"\r
        [class.done]="job.status === 'DONE'"\r
        [class.error]="job.status === 'ERROR'"\r
        (click)="onClick(job)">\r
        <div class="gen-notif-header">\r
          <span class="gen-notif-icon">{{ statusIcon(job) }}</span>\r
          <span class="gen-notif-title">Generaci\xF3n {{ job.grade }} {{ job.classroom }}</span>\r
        </div>\r
        <div class="gen-notif-progress-wrapper">\r
          <div class="gen-notif-progress-bar" [style.width.%]="progressPct(job)"></div>\r
        </div>\r
        <div class="gen-notif-text">{{ statusText(job) }}</div>\r
      </div>\r
    }\r
  </div>\r
}`, styles: ["/* src/app/generation-notifications.css */\n.gen-notifications-stack {\n  position: fixed;\n  left: auto;\n  right: 16px;\n  bottom: env(safe-area-inset-bottom, 16px);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 10px;\n  max-width: calc(100vw - 32px);\n  width: 320px;\n}\n.gen-notification {\n  background: var(--surface);\n  border: 1px solid var(--border-strong);\n  box-shadow: var(--shadow-md);\n  padding: 10px 12px;\n  cursor: pointer;\n  animation: gen-notif-in 0.25s ease-out;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.gen-notification:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.gen-notification.done {\n  border-color: var(--success);\n}\n.gen-notification.error {\n  border-color: var(--danger);\n}\n@keyframes gen-notif-in {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.gen-notif-header {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.gen-notif-icon {\n  font-size: 14px;\n}\n.gen-notif-title {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  color: var(--text-1);\n}\n.gen-notif-progress-wrapper {\n  width: 100%;\n  height: 8px;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  margin-bottom: 4px;\n  border-radius: var(--r-pill);\n}\n.gen-notif-progress-bar {\n  height: 100%;\n  background: var(--brand);\n  transition: width 0.3s ease;\n  border-radius: var(--r-pill);\n}\n.gen-notification.done .gen-notif-progress-bar {\n  background: var(--success);\n}\n.gen-notification.error .gen-notif-progress-bar {\n  background: var(--danger);\n}\n.gen-notif-text {\n  font-size: 11px;\n  color: var(--text-3);\n  font-weight: 500;\n}\n@media (max-width: 480px) {\n  .gen-notifications-stack {\n    left: 16px;\n    right: 16px;\n    width: auto;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=generation-notifications.css.map */\n"] }]
  }], () => [{ type: GenerationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenerationNotifications, { className: "GenerationNotifications", filePath: "app/generation-notifications.ts", lineNumber: 21 });
})();

// src/app/app.ts
function App_Conditional_0_Conditional_2_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.getCorrectImageUrl((tmp_3_0 = ctx_r2.currentUser()) == null ? null : tmp_3_0.profilePicture), \u0275\u0275sanitizeUrl);
  }
}
function App_Conditional_0_Conditional_2_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getUserInitials(), " ");
  }
}
function App_Conditional_0_Conditional_2_Conditional_95_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2022 ");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_0_Conditional_2_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, App_Conditional_0_Conditional_2_Conditional_95_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" @", ctx_r2.getDisplayUsername(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getDisplayUsername() && ctx_r2.getDisplayRole() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDisplayRole(), " ");
  }
}
function App_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275element(3, "img", 20);
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Notas");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, "Trinitario");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "nav", 21)(9, "ul")(10, "li")(11, "a", 22);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("dashboard"));
    });
    \u0275\u0275elementStart(12, "span", 5);
    \u0275\u0275text(13, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15, "Panel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "li")(17, "a", 24);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("students"));
    });
    \u0275\u0275elementStart(18, "span", 5);
    \u0275\u0275text(19, "school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 23);
    \u0275\u0275text(21, "Estudiantes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "li")(23, "a", 25);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("grades"));
    });
    \u0275\u0275elementStart(24, "span", 5);
    \u0275\u0275text(25, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27, "Calificaciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "li")(29, "a", 26);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("boletines"));
    });
    \u0275\u0275elementStart(30, "span", 5);
    \u0275\u0275text(31, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 23);
    \u0275\u0275text(33, "Boletines");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "li")(35, "a", 27);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_35_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("recoveries"));
    });
    \u0275\u0275elementStart(36, "span", 5);
    \u0275\u0275text(37, "school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 23);
    \u0275\u0275text(39, "Recuperaciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "li")(41, "a", 28);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("subjects"));
    });
    \u0275\u0275elementStart(42, "span", 5);
    \u0275\u0275text(43, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 23);
    \u0275\u0275text(45, "Materias");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "li")(47, "a", 29);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_47_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("teachers"));
    });
    \u0275\u0275elementStart(48, "span", 5);
    \u0275\u0275text(49, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 23);
    \u0275\u0275text(51, "Profesores");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "li")(53, "a", 30);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_53_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("directors-group"));
    });
    \u0275\u0275elementStart(54, "span", 5);
    \u0275\u0275text(55, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 23);
    \u0275\u0275text(57, "Directores de Grupo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "li")(59, "a", 31);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_59_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("parents"));
    });
    \u0275\u0275elementStart(60, "span", 5);
    \u0275\u0275text(61, "family_restroom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 23);
    \u0275\u0275text(63, "Padres de Familia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "li")(65, "a", 32);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_65_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("reports"));
    });
    \u0275\u0275elementStart(66, "span", 5);
    \u0275\u0275text(67, "assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 23);
    \u0275\u0275text(69, "Reportes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "li")(71, "a", 33);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_71_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("chats"));
    });
    \u0275\u0275elementStart(72, "span", 5);
    \u0275\u0275text(73, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 23);
    \u0275\u0275text(75, "Chats");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "li")(77, "a", 34);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_77_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("periods"));
    });
    \u0275\u0275elementStart(78, "span", 5);
    \u0275\u0275text(79, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 23);
    \u0275\u0275text(81, "Per\xEDodos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "li")(83, "a", 35);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_a_click_83_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("settings"));
    });
    \u0275\u0275elementStart(84, "span", 5);
    \u0275\u0275text(85, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 23);
    \u0275\u0275text(87, "Configuraci\xF3n");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(88, "div", 36)(89, "div", 37);
    \u0275\u0275conditionalCreate(90, App_Conditional_0_Conditional_2_Conditional_90_Template, 1, 1, "img", 38);
    \u0275\u0275conditionalCreate(91, App_Conditional_0_Conditional_2_Conditional_91_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 40)(93, "h4");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(95, App_Conditional_0_Conditional_2_Conditional_95_Template, 4, 3, "p");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 41);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_div_click_96_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSidebar());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    let tmp_19_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sidebar-animated", ctx_r2.sidebarAnimated())("open", ctx_r2.sidebarOpen());
    \u0275\u0275advance(10);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "dashboard");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "students");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "grades");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "boletines");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "recoveries");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "subjects");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "teachers");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "directors-group");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "parents");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "reports");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "chats");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "periods");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "settings");
    \u0275\u0275advance(7);
    \u0275\u0275attribute("data-username", ctx_r2.getDisplayName());
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r2.currentUser()) == null ? null : tmp_18_0.profilePicture) ? 90 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_19_0 = ctx_r2.currentUser()) == null ? null : tmp_19_0.profilePicture) ? 91 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getDisplayName());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getDisplayUsername() || ctx_r2.getDisplayRole() ? 95 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r2.sidebarOpen());
  }
}
function App_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 5);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 42);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.unreadTotalCount(), " ");
  }
}
function App_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 13)(1, "a", 22);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_19_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("dashboard"));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Inicio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 24);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_19_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("students"));
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Estudiantes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 25);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_19_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("grades"));
    });
    \u0275\u0275elementStart(12, "span", 5);
    \u0275\u0275text(13, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Calificaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 26);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_19_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("boletines"));
    });
    \u0275\u0275elementStart(17, "span", 5);
    \u0275\u0275text(18, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Boletines");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "a", 32);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_19_Template_a_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("reports"));
    });
    \u0275\u0275elementStart(22, "span", 5);
    \u0275\u0275text(23, "assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Reportes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "a", 33);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_19_Template_a_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveRoute("chats"));
    });
    \u0275\u0275elementStart(27, "span", 5);
    \u0275\u0275text(28, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Chats");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "dashboard");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "students");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "grades");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "boletines");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "reports");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.activeRoute() === "chats");
  }
}
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 0);
    \u0275\u0275conditionalCreate(2, App_Conditional_0_Conditional_2_Template, 97, 37);
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function App_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSidebar());
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "menu");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, App_Conditional_0_Conditional_9_Template, 4, 0, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "button", 9);
    \u0275\u0275listener("click", function App_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMessagesDropdown());
    });
    \u0275\u0275elementStart(13, "span", 5);
    \u0275\u0275text(14, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, App_Conditional_0_Conditional_15_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-messages-dropdown", 11);
    \u0275\u0275listener("close", function App_Conditional_0_Template_app_messages_dropdown_close_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMessagesDropdown());
    })("messageClick", function App_Conditional_0_Template_app_messages_dropdown_messageClick_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMessageClick($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275element(18, "router-outlet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, App_Conditional_0_Conditional_19_Template, 31, 12, "nav", 13);
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275element(21, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "app-notification-details", 16);
    \u0275\u0275listener("close", function App_Conditional_0_Template_app_notification_details_close_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNotificationDetailsModal());
    })("reply", function App_Conditional_0_Template_app_notification_details_reply_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleNotificationReply($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isLoginRoute() ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r2.isDashboardRoute() ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.unreadTotalCount() > 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r2.showMessagesDropdown())("notifications", ctx_r2.allNotifications)("messages", ctx_r2.allMessages);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.isDashboardRoute() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r2.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275property("notification", ctx_r2.selectedNotification)("isOpen", ctx_r2.showNotificationDetailsModal());
  }
}
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}
var App = class _App {
  title = signal("Frontend", ...ngDevMode ? [{ debugName: "title" }] : []);
  activeRoute = signal("dashboard", ...ngDevMode ? [{ debugName: "activeRoute" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
  sidebarHovered = signal(false, ...ngDevMode ? [{ debugName: "sidebarHovered" }] : []);
  currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : []);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  isLoginRoute = signal(true, ...ngDevMode ? [{ debugName: "isLoginRoute" }] : []);
  isDashboardRoute = signal(false, ...ngDevMode ? [{ debugName: "isDashboardRoute" }] : []);
  sidebarAnimated = signal(false, ...ngDevMode ? [{ debugName: "sidebarAnimated" }] : []);
  // Theme state (claro / oscuro) — delegado al ThemeService
  themeService = inject(ThemeService);
  isDarkTheme = this.themeService.isDark;
  // Greeting state
  greetingLetters = signal([], ...ngDevMode ? [{ debugName: "greetingLetters" }] : []);
  // All communications state
  showMessagesDropdown = signal(false, ...ngDevMode ? [{ debugName: "showMessagesDropdown" }] : []);
  unreadMessageCount = signal(0, ...ngDevMode ? [{ debugName: "unreadMessageCount" }] : []);
  unreadNotificationCount = signal(0, ...ngDevMode ? [{ debugName: "unreadNotificationCount" }] : []);
  showNotificationDetailsModal = signal(false, ...ngDevMode ? [{ debugName: "showNotificationDetailsModal" }] : []);
  selectedNotification = null;
  allNotifications = [];
  allMessages = [];
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  messageService = inject(MessageService);
  http = inject(HttpClient);
  router = inject(Router);
  realtimeService = inject(GlobalRealtimeService);
  generationService = inject(GenerationService);
  constructor() {
    this.realtimeService.startPolling();
    this.generationService.startPolling();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      console.log("Navigation to:", event.url);
      this.isLoginRoute.set(event.url === "/login" || event.url === "/");
      this.isDashboardRoute.set(event.url === "/dashboard");
      const routeName = event.url.split("/")[1] || "dashboard";
      console.log("Setting active route to:", routeName);
      this.activeRoute.set(routeName);
    });
    this.authService.currentUser$.subscribe((user) => {
      console.log("App - Auth service user updated:", user);
      this.currentUser.set(user);
      if (user && this.authService.isAuthenticated()) {
        console.log("\u{1F464} User authenticated, ensuring sidebar is visible...");
        this.sidebarAnimated.set(true);
        this.loadNotifications();
        this.notificationService.getUnreadCount().subscribe((count) => {
          this.unreadNotificationCount.set(count);
        });
        this.loadMessages();
        this.messageService.getUnreadCount().subscribe((count) => {
          this.unreadMessageCount.set(count);
        });
        this.notificationService.getNotifications().subscribe((notifications) => {
          this.allNotifications = notifications;
        });
        this.messageService.getMessages().subscribe((messages) => {
          this.allMessages = messages;
        });
      }
    });
  }
  generateGreeting() {
    const userName = localStorage.getItem("userName") || "Usuario";
    const hour = (/* @__PURE__ */ new Date()).getHours();
    let greeting = "";
    if (hour >= 5 && hour < 12) {
      greeting = `Buenos d\xEDas, ${userName}`;
    } else if (hour >= 12 && hour < 18) {
      greeting = `Buenas tardes, ${userName}`;
    } else {
      greeting = `Buenas noches, ${userName}`;
    }
    this.greetingLetters.set(greeting.split(""));
  }
  ngOnInit() {
    this.generateGreeting();
    this.currentUser.set(null);
    this.sidebarAnimated.set(false);
    if (this.authService.isAuthenticated()) {
      console.log("\u2705 User is authenticated, loading user data...");
      this.authService.getCurrentUser().subscribe({
        next: (user) => {
          console.log("\u2705 App - User loaded successfully:", user);
          console.log("\u{1F680} Triggering sidebar animation...");
          this.sidebarAnimated.set(true);
        },
        error: (err) => {
          console.error("\u274C Failed to load user in app:", err);
          this.currentUser.set(null);
        }
      });
    } else {
      console.log("\u274C User not authenticated in app");
      this.currentUser.set(null);
    }
  }
  startSidebarAnimation() {
    console.log("\u{1F680} Manual sidebar animation triggered...");
    this.sidebarAnimated.set(true);
    console.log("\u2705 Sidebar animated set to:", this.sidebarAnimated());
  }
  toggleSidebar() {
    this.sidebarOpen.set(!this.sidebarOpen());
  }
  toggleTheme() {
    this.themeService.toggle();
  }
  setActiveRoute(route) {
    console.log("Setting active route to:", route);
    this.activeRoute.set(route);
    this.sidebarOpen.set(false);
  }
  testNavigateToSettings() {
    console.log("Testing manual navigation to settings...");
    this.router.navigate(["/settings"]).then((success) => {
      console.log("Navigation result:", success);
    });
  }
  // Debug method to manually check and show sidebar
  debugSidebar() {
    console.log("\u{1F50D} Debugging sidebar state:");
    console.log("- isAuthenticated:", this.authService.isAuthenticated());
    console.log("- currentUser:", this.currentUser());
    console.log("- sidebarAnimated:", this.sidebarAnimated());
    console.log("- isLoginRoute:", this.isLoginRoute());
    if (this.authService.isAuthenticated() && this.currentUser()) {
      console.log("\u2705 Conditions met, forcing sidebar to show...");
      this.sidebarAnimated.set(true);
    } else {
      console.log("\u274C Conditions not met for sidebar");
    }
  }
  logout() {
    console.log("Logging out...");
    this.currentUser.set(null);
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  requestNotificationPermission() {
    this.realtimeService.requestPermissionOnUserGesture();
  }
  testNotification() {
    this.realtimeService.showTestNotification();
  }
  // Notifications methods
  loadNotifications() {
    const user = this.currentUser();
    if (user && user.id) {
      this.notificationService.loadNotifications(user.id).subscribe({
        error: (err) => console.error("Error loading notifications:", err)
      });
    }
  }
  // Messages methods
  loadMessages() {
    const user = this.currentUser();
    if (user && user.id) {
      this.messageService.loadMessages(user.id).subscribe({
        error: (err) => console.error("Error loading messages:", err)
      });
    }
  }
  toggleMessagesDropdown() {
    this.showMessagesDropdown.set(!this.showMessagesDropdown());
  }
  closeMessagesDropdown() {
    this.showMessagesDropdown.set(false);
  }
  unreadTotalCount() {
    return this.unreadMessageCount() + this.unreadNotificationCount();
  }
  // Check if current user can see notifications
  canShowNotifications() {
    return this.authService.isAuthenticated();
  }
  // Notification Details Methods
  onNotificationClick(event) {
    console.log("=== NOTIFICATION CLICKED ===", event);
    this.selectedNotification = event.notification;
    this.showNotificationDetailsModal.set(true);
    this.closeMessagesDropdown();
    if (!event.notification.isRead) {
      this.notificationService.markAsRead(event.notification.id).subscribe();
    }
  }
  // Message Click Handler
  onMessageClick(event) {
    console.log("=== MESSAGE/NOTIFICATION CLICKED ===", event);
    if (event.type === "message") {
      this.showSuccessMessage(`Mensaje de ${event.item.senderName} ${event.item.senderSurname}`);
    } else if (event.type === "notification") {
      this.selectedNotification = event.item;
      this.showNotificationDetailsModal.set(true);
      if (!event.item.isRead) {
        this.notificationService.markAsRead(event.item.id).subscribe();
      }
    }
  }
  closeNotificationDetailsModal() {
    console.log("=== CLOSING NOTIFICATION DETAILS MODAL ===");
    this.showNotificationDetailsModal.set(false);
    this.selectedNotification = null;
  }
  handleNotificationReply(replyData) {
    console.log("=== HANDLING NOTIFICATION REPLY ===", replyData);
    console.log("replyData.originalNotificationId:", replyData.originalNotificationId);
    console.log("replyData.message:", replyData.message);
    console.log("replyData.senderId:", replyData.senderId);
    const replyNotification = {
      originalNotificationId: replyData.originalNotificationId,
      replyMessage: replyData.message,
      senderId: replyData.senderId
    };
    console.log("Sending reply notification:", replyNotification);
    this.http.post("http://localhost:8080/api/notifications/reply", replyNotification).subscribe({
      next: (response) => {
        console.log("\u2705 Reply sent successfully:", response);
        this.showSuccessMessage("\xA1Respuesta enviada exitosamente!");
        this.closeNotificationDetailsModal();
        this.refreshNotifications();
      },
      error: (error) => {
        console.error("\u274C Failed to send reply:", error);
        console.error("Error details:", error.error);
        this.showErrorMessage("Error al enviar la respuesta");
      }
    });
  }
  refreshNotifications() {
    const user = this.currentUser();
    if (user && user.id) {
      this.notificationService.loadNotifications(user.id).subscribe({
        error: (err) => console.error("Error refreshing notifications:", err)
      });
      this.messageService.loadMessages(user.id).subscribe({
        error: (err) => console.error("Error refreshing messages:", err)
      });
    }
  }
  showSuccessMessage(message) {
    const successDiv = document.createElement("div");
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      animation: slideInRight 0.3s ease-out;
    `;
    successDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 18px;">\u2705</span>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => {
      successDiv.remove();
    }, 3e3);
  }
  showErrorMessage(message) {
    const errorDiv = document.createElement("div");
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
      animation: slideInRight 0.3s ease-out;
    `;
    errorDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 18px;">\u274C</span>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(errorDiv);
    setTimeout(() => {
      errorDiv.remove();
    }, 3e3);
  }
  // Lifecycle hooks
  ngOnDestroy() {
    this.realtimeService.stopPolling();
    this.generationService.stopPolling();
  }
  getUserInitials() {
    const user = this.currentUser();
    if (user && user.name && user.surname) {
      return (user.name.charAt(0) + user.surname.charAt(0)).toUpperCase();
    } else if (user && user.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return "U";
  }
  getDisplayName() {
    const user = this.currentUser();
    if (user) {
      if (user.name && user.surname) {
        return `${user.name} ${user.surname}`;
      }
      return user.name || user.username || "Usuario sin nombre";
    }
    return "Usuario sin autenticar";
  }
  getDisplayUsername() {
    const user = this.currentUser();
    if (user && user.username) {
      return user.username;
    }
    return "";
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
      "STUDENT": "Estudiante"
    };
    return roleTranslations[roleName] || roleName;
  }
  // Helper method to ensure profile picture URLs are correct
  getCorrectImageUrl(imagePath) {
    if (!imagePath)
      return null;
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    return `http://localhost:8080${imagePath}`;
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[1, "app-container"], [1, "main-content"], [1, "top-bar"], [1, "top-bar-left"], ["aria-label", "Abrir men\xFA", 1, "menu-toggle-btn", 3, "click"], [1, "material-icons"], [1, "search-bar"], [1, "top-bar-actions"], [1, "message-container"], [1, "message-btn", 3, "click"], [1, "message-badge"], [3, "close", "messageClick", "isOpen", "notifications", "messages"], [1, "content-wrapper"], [1, "mobile-nav"], [1, "loading-overlay"], [1, "spinner"], [3, "close", "reply", "notification", "isOpen"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo-container"], ["src", "Logo Colegio.png", "alt", "Logo", 1, "logo"], [1, "nav-menu"], ["routerLink", "/dashboard", 3, "click"], [1, "menu-text"], ["routerLink", "/students", 3, "click"], ["routerLink", "/grades", 3, "click"], ["routerLink", "/boletines", 3, "click"], ["routerLink", "/recoveries", 3, "click"], ["routerLink", "/subjects", 3, "click"], ["routerLink", "/teachers", 3, "click"], ["routerLink", "/directors-group", 3, "click"], ["routerLink", "/parents", 3, "click"], ["routerLink", "/reports", 3, "click"], ["routerLink", "/chats", 3, "click"], ["routerLink", "/periods", 3, "click"], ["routerLink", "/settings", 3, "click"], [1, "user-profile"], [1, "user-avatar"], ["alt", "Foto de perfil del usuario", "title", "Foto de perfil", 1, "user-image", 3, "src"], [1, "user-initials"], [1, "user-info"], [1, "sidebar-backdrop", 3, "click"], ["type", "text", "id", "search-input", "name", "search", "placeholder", "Buscar...", "autocomplete", "off", "aria-label", "Buscar"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 23, 11, "div");
      \u0275\u0275conditionalCreate(1, App_Conditional_1_Template, 2, 0, "div");
      \u0275\u0275element(2, "app-generation-notifications");
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isLoginRoute() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoginRoute() ? 1 : -1);
    }
  }, dependencies: [RouterOutlet, RouterModule, RouterLink, MessagesDropdownComponent, NotificationDetailsComponent, GenerationNotifications], styles: ['\n\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n}\n.top-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #e5e7eb;\n  min-height: 60px;\n}\n.header-greeting[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.header-greeting[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n.header-greeting[_ngcontent-%COMP%]   .greeting-letter[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_letterPopIn 0.3s ease forwards;\n  opacity: 0;\n  transform: scale(0.5);\n}\n@keyframes _ngcontent-%COMP%_letterPopIn {\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: flex-start;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 70px;\n  background: #1b6aeb;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  overflow: visible;\n  transition:\n    width 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n  transform: translateX(-100%);\n  opacity: 0;\n}\n.sidebar[_ngcontent-%COMP%]:hover {\n  width: 250px;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  opacity: 1;\n  animation: _ngcontent-%COMP%_sidebarEntrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_sidebarEntrance {\n  0% {\n    transform: translateX(-100%) scale(0.8);\n    opacity: 0;\n  }\n  60% {\n    transform: translateX(5%) scale(1.02);\n    opacity: 0.9;\n  }\n  100% {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]:hover    ~ .main-content[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #257bf3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .sidebar-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px 10px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: flex-start;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .logo-container[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  width: 0;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  width: auto;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  color: white;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 0;\n}\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 12px 20px;\n  color: #ffffff;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  min-height: 48px;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 12px 8px;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .nav-menu[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .menu-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  width: 0;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .menu-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  width: auto;\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #1761c9;\n  color: white;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_menuItemSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  opacity: 0;\n  transform: translateX(-30px);\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.25s;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.3s;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.35s;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_menuItemSlideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.nav-menu[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .nav-menu[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 auto !important;\n  text-align: center;\n}\n.menu-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.user-profile[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #1a66d1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .user-profile[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px 10px;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .user-info[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0;\n  visibility: hidden;\n  white-space: nowrap;\n  background: rgba(27, 106, 235, 0.95);\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-left: 10px;\n  z-index: 1001;\n  transition: all 0.3s ease;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .user-info[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  position: static;\n  transform: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n}\n.user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  color: white;\n  font-weight: 500;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #cbd5e1;\n}\n.user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.user-initials[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n}\n.user-avatar[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.user-initials[_ngcontent-%COMP%] {\n  background: #1761c9;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .user-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .user-avatar[_ngcontent-%COMP%]:hover::after {\n  content: attr(data-username);\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  z-index: 1001;\n  margin-left: 10px;\n}\n.sidebar[_ngcontent-%COMP%]:not(:hover)   .user-avatar[_ngcontent-%COMP%]:hover::before {\n  content: "";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 5px solid transparent;\n  border-right-color: rgba(0, 0, 0, 0.8);\n  margin-left: 5px;\n  z-index: 1001;\n}\n.user-initials-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: white;\n  margin-left: 10px;\n}\n.sidebar.sidebar-animated[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_userProfileSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  animation-delay: 0.5s;\n  opacity: 0;\n  transform: translateY(20px);\n}\n@keyframes _ngcontent-%COMP%_userProfileSlideIn {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 15px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.top-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex: 1;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8fafc;\n  padding: 8px 15px;\n  border-radius: 8px;\n  flex: 1;\n  max-width: 400px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  flex: 1;\n}\n.top-bar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  position: relative;\n}\n.notification-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background 0.3s;\n}\n.notification-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  line-height: 1;\n}\n.message-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.message-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background 0.3s;\n}\n.message-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.message-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: #2196F3;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  line-height: 1;\n}\n.notification-btn-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.notification-btn-disabled[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 24px;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  padding: 20px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-size: 14px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n  z-index: 1000;\n}\n.mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  color: #64748b;\n  text-decoration: none;\n  font-size: 12px;\n  padding: 5px;\n  border-radius: 8px;\n  transition: background 0.3s;\n}\n.mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.mobile-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #3b82f6;\n}\n.menu-toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  color: #ffffff;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  margin-right: 6px;\n  transition: background 0.2s ease;\n}\n.menu-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.menu-toggle-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  z-index: 999;\n}\n@media (max-width: 768px) {\n  .menu-toggle-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .sidebar[_ngcontent-%COMP%], \n   .sidebar.sidebar-animated[_ngcontent-%COMP%] {\n    width: 248px !important;\n    transform: translateX(-100%) !important;\n    opacity: 1 !important;\n    z-index: 1001;\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0) !important;\n  }\n  .sidebar-backdrop.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%], \n   .sidebar.sidebar-animated[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%], \n   .sidebar.sidebar-animated[_ngcontent-%COMP%]:hover    ~ .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 16px 92px;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 8px 4px calc(8px + env(safe-area-inset-bottom));\n    box-shadow: 0 -2px 12px rgba(15, 23, 42, 0.08);\n  }\n}\n@media (min-width: 901px) and (max-width: 1100px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 72px;\n  }\n}\n.main-content.full-width[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 100%;\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  transition: opacity 0.3s ease;\n}\n.loading-overlay.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[_ngcontent-%COMP%]:root:not([data-theme=dark])   .sidebar[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%]:not([data-theme=dark])   .sidebar[_ngcontent-%COMP%] {\n  background: #1b6aeb !important;\n}\n[_ngcontent-%COMP%]:root:not([data-theme=dark])   .top-bar[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%]:not([data-theme=dark])   .top-bar[_ngcontent-%COMP%] {\n  background: #1b6aeb !important;\n}\n[data-theme="dark"][_nghost-%COMP%]   .header-greeting[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .header-greeting[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-btn[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .notification-btn[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .notification-btn[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .notification-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .message-btn[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .message-btn[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .message-btn[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .message-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n[data-theme="dark"][_nghost-%COMP%]   .footer[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n[data-theme="dark"][_nghost-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, [data-theme="dark"]   [_nghost-%COMP%]   .mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n[data-theme="dark"][_nghost-%COMP%]   .mobile-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .mobile-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, RouterModule, MessagesDropdownComponent, NotificationDetailsComponent, GenerationNotifications], template: `<!-- Show full layout only when not on login route -->
@if (!isLoginRoute()) {
  <div>
    <!-- Main App Container -->
    <div class="app-container">
      <!-- Sidebar Navigation - Show on all authenticated pages -->
      @if (!isLoginRoute()) {
        <aside class="sidebar" [class.sidebar-animated]="sidebarAnimated()" [class.open]="sidebarOpen()">
          <div class="sidebar-header">
            <div class="logo-container">
              <img src="Logo Colegio.png" alt="Logo" class="logo" />
              <h1>Notas<br />Trinitario</h1>
            </div>
          </div>
          <nav class="nav-menu">
            <ul>
              <li [class.active]="activeRoute() === 'dashboard'">
                <a routerLink="/dashboard" (click)="setActiveRoute('dashboard')">
                  <span class="material-icons">dashboard</span>
                  <span class="menu-text">Panel</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'students'">
                <a routerLink="/students" (click)="setActiveRoute('students')">
                  <span class="material-icons">school</span>
                  <span class="menu-text">Estudiantes</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'grades'">
                <a routerLink="/grades" (click)="setActiveRoute('grades')">
                  <span class="material-icons">assignment</span>
                  <span class="menu-text">Calificaciones</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'boletines'">
                <a routerLink="/boletines" (click)="setActiveRoute('boletines')">
                  <span class="material-icons">description</span>
                  <span class="menu-text">Boletines</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'recoveries'">
                <a routerLink="/recoveries" (click)="setActiveRoute('recoveries')">
                  <span class="material-icons">school</span>
                  <span class="menu-text">Recuperaciones</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'subjects'">
                <a routerLink="/subjects" (click)="setActiveRoute('subjects')">
                  <span class="material-icons">menu_book</span>
                  <span class="menu-text">Materias</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'teachers'">
                <a routerLink="/teachers" (click)="setActiveRoute('teachers')">
                  <span class="material-icons">person</span>
                  <span class="menu-text">Profesores</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'directors-group'">
                <a routerLink="/directors-group" (click)="setActiveRoute('directors-group')">
                  <span class="material-icons">groups</span>
                  <span class="menu-text">Directores de Grupo</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'parents'">
                <a routerLink="/parents" (click)="setActiveRoute('parents')">
                  <span class="material-icons">family_restroom</span>
                  <span class="menu-text">Padres de Familia</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'reports'">
                <a routerLink="/reports" (click)="setActiveRoute('reports')">
                  <span class="material-icons">assessment</span>
                  <span class="menu-text">Reportes</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'chats'">
                <a routerLink="/chats" (click)="setActiveRoute('chats')">
                  <span class="material-icons">chat</span>
                  <span class="menu-text">Chats</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'periods'">
                <a routerLink="/periods" (click)="setActiveRoute('periods')">
                  <span class="material-icons">calendar_month</span>
                  <span class="menu-text">Per\xEDodos</span>
                </a>
              </li>
              <li [class.active]="activeRoute() === 'settings'">
                <a routerLink="/settings" (click)="setActiveRoute('settings')">
                  <span class="material-icons">settings</span>
                  <span class="menu-text">Configuraci\xF3n</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="user-profile">
            <div class="user-avatar" [attr.data-username]="getDisplayName()">
              @if (currentUser()?.profilePicture) {
                <img
                  [src]="getCorrectImageUrl(currentUser()?.profilePicture)"
                  alt="Foto de perfil del usuario"
                  title="Foto de perfil"
                  class="user-image"
                />
              }
              @if (!currentUser()?.profilePicture) {
                <div class="user-initials">
                  {{ getUserInitials() }}
                </div>
              }
            </div>
            <div class="user-info">
              <h4>{{ getDisplayName() }}</h4>
              @if (getDisplayUsername() || getDisplayRole()) {
                <p>
                  @{{ getDisplayUsername() }}
                  @if (getDisplayUsername() && getDisplayRole()) {
                    <span>\u2022 </span>
                  }
                  {{ getDisplayRole() }}
                </p>
              }
            </div>
          </div>
         </aside>
         <div class="sidebar-backdrop" [class.show]="sidebarOpen()" (click)="toggleSidebar()"></div>
       }
       <!-- Main Content Area -->
       <main class="main-content">
         <!-- Top Navigation Bar -->
         <header class="top-bar">
            <div class="top-bar-left">
              <button class="menu-toggle-btn" (click)="toggleSidebar()" aria-label="Abrir men\xFA">
                <span class="material-icons">menu</span>
              </button>
              @if (!isDashboardRoute()) {
                <div class="search-bar">
                  <span class="material-icons">search</span>
                  <input
                    type="text"
                    id="search-input"
                    name="search"
                    placeholder="Buscar..."
                    autocomplete="off"
                    aria-label="Buscar"
                  />
                </div>
              }
            </div>
          <div class="top-bar-actions">
            <div class="message-container">
              <button class="message-btn" (click)="toggleMessagesDropdown()">
                <span class="material-icons">mail</span>
                @if (unreadTotalCount() > 0) {
                  <span class="message-badge">
                    {{ unreadTotalCount() }}
                  </span>
                }
              </button>
              <app-messages-dropdown
                [isOpen]="showMessagesDropdown()"
                (close)="closeMessagesDropdown()"
                (messageClick)="onMessageClick($event)"
                [notifications]="allNotifications"
                [messages]="allMessages"
              >
              </app-messages-dropdown>
            </div>
          </div>
        </header>
        <!-- Page Content -->
        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
    <!-- Mobile Navigation -->
    @if (!isDashboardRoute()) {
      <nav class="mobile-nav">
        <a
          [class.active]="activeRoute() === 'dashboard'"
          routerLink="/dashboard"
          (click)="setActiveRoute('dashboard')"
        >
          <span class="material-icons">dashboard</span>
          <span>Inicio</span>
        </a>
        <a
          [class.active]="activeRoute() === 'students'"
          routerLink="/students"
          (click)="setActiveRoute('students')"
        >
          <span class="material-icons">school</span>
          <span>Estudiantes</span>
        </a>
        <a
          [class.active]="activeRoute() === 'grades'"
          routerLink="/grades"
          (click)="setActiveRoute('grades')"
        >
          <span class="material-icons">assignment</span>
          <span>Calificaciones</span>
        </a>
        <a
          [class.active]="activeRoute() === 'boletines'"
          routerLink="/boletines"
          (click)="setActiveRoute('boletines')"
        >
          <span class="material-icons">description</span>
          <span>Boletines</span>
        </a>
        <a
          [class.active]="activeRoute() === 'reports'"
          routerLink="/reports"
          (click)="setActiveRoute('reports')"
        >
          <span class="material-icons">assessment</span>
          <span>Reportes</span>
        </a>
        <a
          [class.active]="activeRoute() === 'chats'"
          routerLink="/chats"
          (click)="setActiveRoute('chats')"
        >
          <span class="material-icons">chat</span>
          <span>Chats</span>
        </a>
      </nav>
    }
    <!-- Loading Overlay -->
    <div class="loading-overlay" [class.hidden]="!isLoading()">
      <div class="spinner"></div>
    </div>
    <!-- Notification Details Modal -->
    <app-notification-details
      [notification]="selectedNotification"
      [isOpen]="showNotificationDetailsModal()"
      (close)="closeNotificationDetailsModal()"
      (reply)="handleNotificationReply($event)"
    >
    </app-notification-details>
  </div>
}

<!-- Show only router outlet for login route -->
@if (isLoginRoute()) {
  <div>
    <router-outlet></router-outlet>
  </div>
}

<!-- Notificaciones de generaci\xF3n de boletines (tipo "push"): se montan
     siempre, fuera de los dos bloques de arriba, para que la pila de
     notificaciones con la barra de progreso se vea sin importar en qu\xE9
     apartado est\xE9 el usuario y no desaparezca al navegar entre secciones. -->
<app-generation-notifications></app-generation-notifications>`, styles: ['/* src/app/app.css */\n.app-container {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n}\n.top-header {\n  background: white;\n  padding: 20px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #e5e7eb;\n  min-height: 60px;\n}\n.header-greeting {\n  text-align: center;\n  width: 100%;\n}\n.header-greeting .greeting-text {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n.header-greeting .greeting-letter {\n  display: inline-block;\n  animation: letterPopIn 0.3s ease forwards;\n  opacity: 0;\n  transform: scale(0.5);\n}\n@keyframes letterPopIn {\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: flex-start;\n}\n.sidebar {\n  width: 70px;\n  background: #1b6aeb;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  overflow: visible;\n  transition:\n    width 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n  transform: translateX(-100%);\n  opacity: 0;\n}\n.sidebar:hover {\n  width: 250px;\n}\n.sidebar.sidebar-animated {\n  transform: translateX(0);\n  opacity: 1;\n  animation: sidebarEntrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes sidebarEntrance {\n  0% {\n    transform: translateX(-100%) scale(0.8);\n    opacity: 0;\n  }\n  60% {\n    transform: translateX(5%) scale(1.02);\n    opacity: 0.9;\n  }\n  100% {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n.main-content {\n  flex: 1;\n  margin-left: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.sidebar.sidebar-animated ~ .main-content {\n  margin-left: 70px;\n}\n.sidebar.sidebar-animated:hover ~ .main-content {\n  margin-left: 250px;\n}\n.sidebar-header {\n  padding: 20px;\n  border-bottom: 1px solid #257bf3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar:not(:hover) .sidebar-header {\n  justify-content: center;\n  padding: 20px 10px;\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: flex-start;\n}\n.sidebar:not(:hover) .logo-container {\n  justify-content: center;\n}\n.sidebar:not(:hover) .logo-container h1 {\n  opacity: 0;\n  visibility: hidden;\n  width: 0;\n}\n.sidebar:hover .logo-container h1 {\n  opacity: 1;\n  visibility: visible;\n  width: auto;\n}\n.logo {\n  width: 40px;\n  height: 40px;\n}\n.logo-container h1 {\n  font-size: 18px;\n  margin: 0;\n  color: white;\n}\n.menu-toggle {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n}\n.nav-menu {\n  flex: 1;\n  padding: 20px 0;\n}\n.nav-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-menu li {\n  margin-bottom: 5px;\n}\n.nav-menu a {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 12px 20px;\n  color: #ffffff;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  min-height: 48px;\n}\n.sidebar:not(:hover) .nav-menu a {\n  justify-content: center;\n  padding: 12px 8px;\n}\n.sidebar:not(:hover) .nav-menu .material-icons {\n  margin: 0 auto;\n}\n.sidebar:not(:hover) .menu-text {\n  opacity: 0;\n  visibility: hidden;\n  width: 0;\n  overflow: hidden;\n}\n.sidebar:hover .menu-text {\n  opacity: 1;\n  visibility: visible;\n  width: auto;\n}\n.nav-menu a:hover,\n.nav-menu li.active a {\n  background: #1761c9;\n  color: white;\n}\n.sidebar.sidebar-animated .nav-menu li {\n  animation: menuItemSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  opacity: 0;\n  transform: translateX(-30px);\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(4) {\n  animation-delay: 0.25s;\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(5) {\n  animation-delay: 0.3s;\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(6) {\n  animation-delay: 0.35s;\n}\n.sidebar.sidebar-animated .nav-menu li:nth-child(7) {\n  animation-delay: 0.4s;\n}\n@keyframes menuItemSlideIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.nav-menu .material-icons {\n  font-size: 20px;\n  flex-shrink: 0;\n  display: block;\n}\n.sidebar:not(:hover) .nav-menu .material-icons {\n  font-size: 24px;\n  margin: 0 auto !important;\n  text-align: center;\n}\n.menu-text {\n  font-size: 14px;\n}\n.user-profile {\n  padding: 20px;\n  border-top: 1px solid #1a66d1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n.sidebar:not(:hover) .user-profile {\n  justify-content: center;\n  padding: 20px 10px;\n}\n.sidebar:not(:hover) .user-info {\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0;\n  visibility: hidden;\n  white-space: nowrap;\n  background: rgba(27, 106, 235, 0.95);\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-left: 10px;\n  z-index: 1001;\n  transition: all 0.3s ease;\n}\n.sidebar:hover .user-info {\n  opacity: 1;\n  visibility: visible;\n  position: static;\n  transform: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n}\n.user-info h4 {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  color: white;\n  font-weight: 500;\n}\n.user-info p {\n  margin: 0;\n  font-size: 12px;\n  color: #cbd5e1;\n}\n.user-avatar img,\n.user-initials {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n}\n.user-avatar .user-image {\n  object-fit: cover;\n}\n.user-initials {\n  background: #1761c9;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n}\n.sidebar:not(:hover) .user-avatar {\n  position: relative;\n}\n.sidebar:not(:hover) .user-avatar:hover::after {\n  content: attr(data-username);\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  z-index: 1001;\n  margin-left: 10px;\n}\n.sidebar:not(:hover) .user-avatar:hover::before {\n  content: "";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 5px solid transparent;\n  border-right-color: rgba(0, 0, 0, 0.8);\n  margin-left: 5px;\n  z-index: 1001;\n}\n.user-initials-text {\n  font-size: 14px;\n  color: white;\n  margin-left: 10px;\n}\n.sidebar.sidebar-animated .user-profile {\n  animation: userProfileSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  animation-delay: 0.5s;\n  opacity: 0;\n  transform: translateY(20px);\n}\n@keyframes userProfileSlideIn {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.top-bar {\n  background: white;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 15px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.top-bar-left {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex: 1;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8fafc;\n  padding: 8px 15px;\n  border-radius: 8px;\n  flex: 1;\n  max-width: 400px;\n}\n.search-bar input {\n  border: none;\n  background: none;\n  outline: none;\n  flex: 1;\n}\n.top-bar-actions {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  position: relative;\n}\n.notification-container {\n  position: relative;\n  display: inline-block;\n}\n.notification-btn {\n  position: relative;\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background 0.3s;\n}\n.notification-btn:hover {\n  background: #f1f5f9;\n}\n.notification-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  line-height: 1;\n}\n.message-container {\n  position: relative;\n  display: inline-block;\n}\n.message-btn {\n  position: relative;\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background 0.3s;\n}\n.message-btn:hover {\n  background: #f1f5f9;\n}\n.message-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: #2196F3;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  line-height: 1;\n}\n.notification-btn-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.notification-btn-disabled:hover {\n  background: none;\n}\n.theme-toggle {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 24px;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background-color: #3b82f6;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n.content-wrapper {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.footer {\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  padding: 20px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-links {\n  display: flex;\n  gap: 20px;\n}\n.footer-links a {\n  color: #64748b;\n  text-decoration: none;\n  font-size: 14px;\n}\n.footer-links a:hover {\n  color: #3b82f6;\n}\n.mobile-nav {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n  z-index: 1000;\n}\n.mobile-nav a {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  color: #64748b;\n  text-decoration: none;\n  font-size: 12px;\n  padding: 5px;\n  border-radius: 8px;\n  transition: background 0.3s;\n}\n.mobile-nav a:hover,\n.mobile-nav a.active {\n  background: #f1f5f9;\n  color: #3b82f6;\n}\n.menu-toggle-btn {\n  display: none;\n  background: none;\n  border: none;\n  color: #ffffff;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  margin-right: 6px;\n  transition: background 0.2s ease;\n}\n.menu-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.menu-toggle-btn .material-icons {\n  font-size: 24px;\n}\n.sidebar-backdrop {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  z-index: 999;\n}\n@media (max-width: 768px) {\n  .menu-toggle-btn {\n    display: inline-flex;\n  }\n  .sidebar,\n  .sidebar.sidebar-animated {\n    width: 248px !important;\n    transform: translateX(-100%) !important;\n    opacity: 1 !important;\n    z-index: 1001;\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);\n  }\n  .sidebar.open {\n    transform: translateX(0) !important;\n  }\n  .sidebar-backdrop.show {\n    display: block;\n  }\n  .sidebar ~ .main-content,\n  .sidebar.sidebar-animated ~ .main-content,\n  .sidebar.sidebar-animated:hover ~ .main-content {\n    margin-left: 0 !important;\n  }\n  .content-wrapper {\n    padding: 20px 16px 92px;\n  }\n  .top-bar {\n    padding: 12px 16px;\n  }\n  .search-bar {\n    max-width: 100%;\n  }\n  .mobile-nav {\n    display: flex;\n    padding: 8px 4px calc(8px + env(safe-area-inset-bottom));\n    box-shadow: 0 -2px 12px rgba(15, 23, 42, 0.08);\n  }\n}\n@media (min-width: 901px) and (max-width: 1100px) {\n  .sidebar {\n    width: 72px;\n  }\n}\n.main-content.full-width {\n  margin-left: 0;\n  width: 100%;\n}\n.mobile-nav {\n  display: none;\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  transition: opacity 0.3s ease;\n}\n.loading-overlay.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n:root:not([data-theme=dark]) .sidebar,\nbody:not([data-theme=dark]) .sidebar {\n  background: #1b6aeb !important;\n}\n:root:not([data-theme=dark]) .top-bar,\nbody:not([data-theme=dark]) .top-bar {\n  background: #1b6aeb !important;\n}\n:host-context([data-theme="dark"]) .header-greeting .greeting-text {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .search-bar {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .notification-btn {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .notification-btn:hover {\n  background: var(--surface-2);\n}\n:host-context([data-theme="dark"]) .message-btn {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .message-btn:hover {\n  background: var(--surface-2);\n}\n:host-context([data-theme="dark"]) .footer {\n  background: var(--surface);\n}\n:host-context([data-theme="dark"]) .footer-links a {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .mobile-nav a {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .mobile-nav a:hover,\n:host-context([data-theme="dark"]) .mobile-nav a.active {\n  background: var(--surface-2);\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 24 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).then(() => {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.classList.add("hidden");
    setTimeout(() => {
      loadingElement.style.display = "none";
    }, 300);
  }
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
