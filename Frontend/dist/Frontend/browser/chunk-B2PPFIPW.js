import {
  BehaviorSubject,
  EMPTY,
  HttpClient,
  Injectable,
  Observable,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-G4AEIR3O.js";

// src/app/services/firebase-push.service.ts
var FirebasePushService = class _FirebasePushService {
  http = inject(HttpClient);
  API_BASE = "http://localhost:8080/api/notifications";
  initialized = false;
  constructor() {
    this.initializeService();
  }
  /**
   * Inicializar el servicio
   */
  initializeService() {
    if (typeof window === "undefined") {
      console.log("Firebase Push no disponible en SSR");
      this.initialized = true;
      return;
    }
    this.initialized = true;
    console.log("Firebase Push Service inicializado (modo notificaciones nativas del navegador)");
  }
  /**
   * Solicitar permiso de notificaciones y guardar token
   */
  requestPermissionAndGetToken(userId) {
    return __async(this, null, function* () {
      if (!("Notification" in window)) {
        console.log("Este navegador no soporta notificaciones push");
        return null;
      }
      try {
        const permission = yield Notification.requestPermission();
        if (permission !== "granted") {
          console.log("Permiso de notificaciones denegado");
          return null;
        }
        const localToken = `local_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
        yield this.saveTokenToServer(userId, localToken, "web-push");
        console.log("Token de notificaciones guardado exitosamente");
        return localToken;
      } catch (error) {
        console.error("Error solicitando permiso de notificaciones:", error);
        return null;
      }
    });
  }
  /**
   * Guardar token en el servidor
   */
  saveTokenToServer(userId, token, deviceType = "web") {
    return __async(this, null, function* () {
      try {
        const deviceInfo = this.getDeviceInfo();
        yield this.http.post(`${this.API_BASE}/fcm-token`, {
          userId,
          token,
          deviceType: deviceType || deviceInfo.deviceType,
          deviceName: deviceInfo.deviceName
        }).toPromise();
        console.log("Token guardado en el servidor exitosamente");
      } catch (error) {
        console.error("Error guardando token en el servidor:", error);
      }
    });
  }
  /**
   * Obtener información del dispositivo
   */
  getDeviceInfo() {
    const userAgent = navigator.userAgent || "";
    let deviceType = "web";
    let deviceName = "Web Browser";
    if (/mobile/i.test(userAgent)) {
      deviceType = "mobile";
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      deviceType = "ios";
      deviceName = "iOS Device";
    } else if (/Android/.test(userAgent)) {
      deviceType = "android";
      deviceName = "Android Device";
    } else if (/Windows/.test(userAgent)) {
      deviceName = "Windows PC";
    } else if (/Mac/.test(userAgent)) {
      deviceName = "Mac";
    } else if (/Linux/.test(userAgent)) {
      deviceName = "Linux PC";
    }
    return { deviceType, deviceName };
  }
  /**
   * Mostrar notificación push
   * Útil para mostrar notificaciones cuando la app está abierta
   * o cuando llega una notificación del servidor
   */
  showPushNotification(title, body, data) {
    if (Notification.permission !== "granted") {
      console.log("No hay permiso para mostrar notificaciones");
      return;
    }
    const notification = new Notification(title, {
      body,
      icon: "/Logo Colegio.png",
      badge: "/Logo Colegio.png",
      tag: "notas-trinitario-push",
      requireInteraction: true,
      data
    });
    notification.onclick = (event) => {
      event.preventDefault();
      window.focus();
      notification.close();
      if (data?.type) {
        console.log("Notificaci\xF3n clickeada, tipo:", data.type);
      }
    };
    setTimeout(() => {
      notification.close();
    }, 8e3);
  }
  /**
   * Eliminar tokens del servidor
   */
  removeTokenFromServer(userId) {
    return this.http.delete(`${this.API_BASE}/fcm-token/user/${userId}`).pipe(tap(() => {
      console.log("Tokens eliminados del servidor");
    }), catchError((error) => {
      console.error("Error eliminando tokens:", error);
      return EMPTY;
    }));
  }
  /**
   * Verificar si el servicio está inicializado
   */
  isInitialized() {
    return this.initialized;
  }
  /**
   * Verificar si hay permiso de notificaciones
   */
  hasNotificationPermission() {
    return Notification.permission === "granted";
  }
  /**
   * Obtener estado actual del permiso
   */
  getPermissionStatus() {
    if (!("Notification" in window)) {
      return "unsupported";
    }
    return Notification.permission;
  }
  static \u0275fac = function FirebasePushService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirebasePushService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirebasePushService, factory: _FirebasePushService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirebasePushService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  firebasePush = inject(FirebasePushService);
  API_BASE = "http://localhost:8080/api/notifications";
  notificationsSubject = new BehaviorSubject([]);
  unreadCountSubject = new BehaviorSubject(0);
  seenNotificationIds = /* @__PURE__ */ new Set();
  readNotificationIds = /* @__PURE__ */ new Set();
  previousNotifications = [];
  STORAGE_KEY = "seen_notifications";
  READ_STORAGE_KEY = "read_notifications";
  PUSHED_NOTIFICATIONS_KEY = "pushed_notifications";
  notifications$ = this.notificationsSubject.asObservable();
  unreadCount$ = this.unreadCountSubject.asObservable();
  constructor() {
    this.loadSeenNotifications();
    this.loadReadNotifications();
    setInterval(() => {
      this.refreshNotifications();
    }, 3e3);
    this.requestNotificationPermission();
  }
  /**
   * Request browser notification permission
   */
  requestNotificationPermission() {
    return __async(this, null, function* () {
      if (!("Notification" in window)) {
        console.log("This browser does not support notifications");
        return false;
      }
      if (Notification.permission === "granted") {
        return true;
      }
      if (Notification.permission !== "denied") {
        const permission = yield Notification.requestPermission();
        return permission === "granted";
      }
      return false;
    });
  }
  /**
   * Register FCM token for the current user
   * Call this after successful login
   */
  registerPushToken(userId) {
    return __async(this, null, function* () {
      try {
        const token = yield this.firebasePush.requestPermissionAndGetToken(userId);
        if (token) {
          console.log("FCM Token registered for user:", userId);
        }
      } catch (error) {
        console.error("Error registering push token:", error);
      }
    });
  }
  /**
   * Show notification using FirebasePushService
   */
  showNativePushNotification(title, body, data) {
    this.firebasePush.showPushNotification(title, body, data);
  }
  /**
   * Show a push notification with app logo
   */
  showPushNotification(title, body, icon) {
    if (Notification.permission !== "granted") {
      return;
    }
    const notificationIcon = icon || "/Logo Colegio.png";
    const notification = new Notification(title, {
      body,
      icon: notificationIcon,
      badge: notificationIcon,
      tag: "notas-trinitario",
      requireInteraction: false,
      silent: false
    });
    notification.onclick = () => {
      window.focus();
      notification.close();
    };
    setTimeout(() => {
      notification.close();
    }, 5e3);
  }
  /**
   * Check for new notifications and show push notification
   */
  checkForNewNotifications(newNotifications) {
    const pushedNotificationIds = this.getPushedNotificationIds();
    const newOnes = newNotifications.filter((newNotif) => !this.previousNotifications.some((prevNotif) => prevNotif.id === newNotif.id) && !pushedNotificationIds.has(newNotif.id));
    newOnes.forEach((notification) => {
      this.showPushNotification(notification.title, notification.message);
      this.markNotificationAsPushed(notification.id);
    });
    this.previousNotifications = [...newNotifications];
  }
  /**
   * Get set of notification IDs that have already shown a push
   */
  getPushedNotificationIds() {
    try {
      const stored = localStorage.getItem(this.PUSHED_NOTIFICATIONS_KEY);
      if (stored) {
        return new Set(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading pushed notifications:", error);
    }
    return /* @__PURE__ */ new Set();
  }
  /**
   * Mark a notification as having shown a push
   */
  markNotificationAsPushed(notificationId) {
    try {
      const pushedIds = this.getPushedNotificationIds();
      pushedIds.add(notificationId);
      localStorage.setItem(this.PUSHED_NOTIFICATIONS_KEY, JSON.stringify(Array.from(pushedIds)));
    } catch (error) {
      console.error("Error saving pushed notification:", error);
    }
  }
  /**
   * Load notifications for the current user
   */
  loadNotifications(userId) {
    return this.http.get(`${this.API_BASE}/user/${userId}`).pipe(tap((notifications) => {
      console.log("Loaded notifications:", notifications);
      this.checkForNewNotifications(notifications);
      const notificationsWithPreservedReadStatus = notifications.map((notification) => {
        if (this.readNotificationIds.has(notification.id)) {
          return __spreadProps(__spreadValues({}, notification), { isRead: true });
        }
        return notification;
      });
      this.loadSeenNotifications();
      this.notificationsSubject.next(notificationsWithPreservedReadStatus);
      this.updateUnreadCount(notificationsWithPreservedReadStatus);
    }));
  }
  /**
   * Load read notification IDs from localStorage
   */
  loadReadNotifications() {
    try {
      const stored = localStorage.getItem(this.READ_STORAGE_KEY);
      if (stored) {
        const readIds = JSON.parse(stored);
        this.readNotificationIds = new Set(readIds);
        console.log("Loaded read notifications from storage:", this.readNotificationIds.size);
      }
    } catch (error) {
      console.error("Error loading read notifications:", error);
      this.readNotificationIds.clear();
    }
  }
  /**
   * Save read notification IDs to localStorage
   */
  saveReadNotifications() {
    try {
      const readIds = Array.from(this.readNotificationIds);
      localStorage.setItem(this.READ_STORAGE_KEY, JSON.stringify(readIds));
      console.log("Saved read notifications to storage:", readIds.length);
    } catch (error) {
      console.error("Error saving read notifications:", error);
    }
  }
  /**
   * Load seen notification IDs from localStorage
   */
  loadSeenNotifications() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const seenIds = JSON.parse(stored);
        this.seenNotificationIds = new Set(seenIds);
        console.log("Loaded seen notifications from storage:", this.seenNotificationIds.size);
      }
    } catch (error) {
      console.error("Error loading seen notifications:", error);
      this.seenNotificationIds.clear();
    }
  }
  /**
   * Save seen notification IDs to localStorage
   */
  saveSeenNotifications() {
    try {
      const seenIds = Array.from(this.seenNotificationIds);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(seenIds));
      console.log("Saved seen notifications to storage:", seenIds.length);
    } catch (error) {
      console.error("Error saving seen notifications:", error);
    }
  }
  /**
   * Refresh notifications (without loading initially)
   */
  refreshNotifications() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (user && user.id) {
      this.http.get(`${this.API_BASE}/user/${user.id}`).subscribe({
        next: (notifications) => {
          console.log("Refreshed notifications:", notifications);
          const notificationsWithPreservedReadStatus = notifications.map((notification) => {
            if (this.readNotificationIds.has(notification.id)) {
              return __spreadProps(__spreadValues({}, notification), { isRead: true });
            }
            return notification;
          });
          this.notificationsSubject.next(notificationsWithPreservedReadStatus);
          this.updateUnreadCount(notificationsWithPreservedReadStatus);
        },
        error: (error) => {
          console.error("Error refreshing notifications:", error);
        }
      });
    }
  }
  /**
   * Mark a notification as read
   */
  markAsRead(notificationId) {
    this.readNotificationIds.add(notificationId);
    this.saveReadNotifications();
    return this.http.post(`${this.API_BASE}/${notificationId}/read`, {}).pipe(tap(() => {
      const notifications = this.notificationsSubject.value;
      const updatedNotifications = notifications.map((n) => n.id === notificationId ? __spreadProps(__spreadValues({}, n), { isRead: true }) : n);
      this.notificationsSubject.next(updatedNotifications);
      this.updateUnreadCount(updatedNotifications);
    }));
  }
  /**
   * Get unread notifications count
   */
  getUnreadCount() {
    return this.unreadCount$;
  }
  /**
   * Get all notifications
   */
  getNotifications() {
    return this.notifications$;
  }
  /**
   * Check if a notification is newly arrived (unread and not seen before)
   */
  isNewlyArrived(notification) {
    const isReadLocally = this.readNotificationIds.has(notification.id);
    return !notification.isRead && !isReadLocally && !this.seenNotificationIds.has(notification.id);
  }
  /**
   * Mark a notification as seen (when it appears in the dropdown)
   */
  markAsSeen(notificationId) {
    console.log("Marking notification as seen:", notificationId);
    this.seenNotificationIds.add(notificationId);
    this.saveSeenNotifications();
  }
  /**
   * Clear seen notifications (when user opens the dropdown)
   */
  clearSeenNotifications() {
    console.log("Clearing seen notifications from current session");
    this.seenNotificationIds.clear();
  }
  /**
   * Clear seen notifications from localStorage (for testing or reset)
   */
  clearSeenNotificationsStorage() {
    console.log("Clearing seen notifications from localStorage");
    this.seenNotificationIds.clear();
    localStorage.removeItem(this.STORAGE_KEY);
  }
  /**
   * Clear read notifications (when user opens the dropdown)
   */
  clearReadNotifications() {
    console.log("Clearing read notifications from current session");
    this.readNotificationIds.clear();
  }
  /**
   * Clear read notifications from localStorage (for testing or reset)
   */
  clearReadNotificationsStorage() {
    console.log("Clearing read notifications from localStorage");
    this.readNotificationIds.clear();
    localStorage.removeItem(this.READ_STORAGE_KEY);
  }
  /**
   * Get count of seen notifications
   */
  getSeenNotificationsCount() {
    return this.seenNotificationIds.size;
  }
  /**
   * Get count of read notifications
   */
  getReadNotificationsCount() {
    return this.readNotificationIds.size;
  }
  /**
   * Mark all notifications as read locally (for bulk operations)
   */
  markAllAsReadLocally(notifications) {
    notifications.forEach((notification) => {
      this.readNotificationIds.add(notification.id);
    });
    this.saveReadNotifications();
    const updatedNotifications = notifications.map((n) => __spreadProps(__spreadValues({}, n), { isRead: true }));
    this.notificationsSubject.next(updatedNotifications);
    this.updateUnreadCount(updatedNotifications);
  }
  /**
   * Delete all notifications for the current user
   */
  deleteAllNotifications() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!user || !user.id) {
      return new Observable((observer) => observer.error("No user found"));
    }
    return this.http.delete(`${this.API_BASE}/user/${user.id}`).pipe(tap(() => {
      this.notificationsSubject.next([]);
      this.updateUnreadCount([]);
      this.readNotificationIds.clear();
      this.seenNotificationIds.clear();
      this.saveReadNotifications();
      this.saveSeenNotifications();
    }));
  }
  /**
   * Check if current user can see notifications
   */
  canUserSeeNotifications() {
    const isAuthenticated = localStorage.getItem("token") !== null;
    console.log("canUserSeeNotifications - isAuthenticated:", isAuthenticated);
    return isAuthenticated;
  }
  /**
   * Format notification time for display
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
  /**
   * Update unread count
   */
  updateUnreadCount(notifications) {
    const unreadCount = notifications.filter((n) => !n.isRead).length;
    this.unreadCountSubject.next(unreadCount);
  }
  /**
   * Filter notifications by user role - show to all authenticated users including administrators
   */
  filterNotificationsByRole(notifications) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (currentUser && currentUser.id) {
      return notifications;
    }
    return [];
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-B2PPFIPW.js.map
