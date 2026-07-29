import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  NgZone,
  interval,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G4AEIR3O.js";

// src/app/services/global-realtime.service.ts
var GlobalRealtimeService = class _GlobalRealtimeService {
  periodsSubject = new BehaviorSubject([]);
  periods$ = this.periodsSubject.asObservable();
  pollingSubscription = null;
  lastPeriods = "";
  notificationPermission = "default";
  notifiedPeriods = /* @__PURE__ */ new Set();
  http;
  ngZone;
  constructor(http, ngZone) {
    this.http = http;
    this.ngZone = ngZone;
    this.requestNotificationPermission();
  }
  requestNotificationPermission() {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        this.notificationPermission = permission;
      });
    }
  }
  showPushNotification(title, body, icon) {
    if ("Notification" in window && Notification.permission === "granted") {
      const notificationIcon = icon || "/Logo Colegio.png";
      console.log("[Notifications] Showing push notification:", title, body);
      const notification = new Notification(title, {
        body,
        icon: notificationIcon,
        badge: notificationIcon,
        tag: "period-notification",
        requireInteraction: false,
        silent: false
      });
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      setTimeout(() => notification.close(), 1e4);
    } else {
      console.log("[Notifications] Permission not granted or Notification API not available");
    }
  }
  checkPeriodDates(periods) {
    const now = /* @__PURE__ */ new Date();
    console.log("[Notifications] Checking periods at", now.toLocaleTimeString(), "| Periods:", JSON.stringify(periods.map((p) => ({
      num: p.periodNumber,
      unlocked: p.isUnlocked,
      auto: p.isAutomatic,
      unlock: p.unlockDate,
      lock: p.lockDate
    }))));
    for (const period of periods) {
      if (period.isAutomatic && period.unlockDate) {
        const unlockDate = new Date(period.unlockDate);
        const diffMs = unlockDate.getTime() - now.getTime();
        const diffMins = diffMs / 6e4;
        const unlockKey = `unlock-${period.periodNumber}`;
        console.log(`[Notifications] Period ${period.periodNumber} unlock:`, unlockDate.toLocaleString(), "| diffMins:", diffMins.toFixed(1), "| isUnlocked:", period.isUnlocked);
        if (diffMins > 0 && diffMins <= 5 && !this.notifiedPeriods.has(unlockKey + "-warning")) {
          console.log("[Notifications] Sending UNLOCK WARNING for period", period.periodNumber);
          this.notifiedPeriods.add(unlockKey + "-warning");
          this.showPushNotification("\u{1F514} Per\xEDodo por comenzar", `El Per\xEDodo ${period.periodNumber} se desbloquear\xE1 en ${Math.ceil(diffMins)} minuto${Math.ceil(diffMins) > 1 ? "s" : ""}`);
        }
        if (period.isUnlocked && !this.notifiedPeriods.has(unlockKey + "-started")) {
          console.log("[Notifications] Sending UNLOCKED for period", period.periodNumber);
          this.notifiedPeriods.add(unlockKey + "-started");
          this.showPushNotification("\u2705 Per\xEDodo iniciado", `El Per\xEDodo ${period.periodNumber} ha sido desbloqueado`);
        }
      }
      if (period.isAutomatic && period.lockDate && period.unlockDate) {
        const unlockDate = new Date(period.unlockDate);
        const lockDate = new Date(period.lockDate);
        const nowMs = now.getTime();
        const unlockMs = unlockDate.getTime();
        const lockMs = lockDate.getTime();
        const isActive = nowMs >= unlockMs && nowMs < lockMs;
        const diffToLockMs = lockMs - nowMs;
        const diffMins = diffToLockMs / 6e4;
        const lockKey = `lock-${period.periodNumber}`;
        console.log(`[Notifications] Period ${period.periodNumber} lock:`, lockDate.toLocaleString(), "| diffMins:", diffMins.toFixed(1), "| isUnlocked:", period.isUnlocked, "| isActive:", isActive, "| notified:", this.notifiedPeriods.has(lockKey + "-ended"));
        if (diffMins > 0 && diffMins <= 5 && !this.notifiedPeriods.has(lockKey + "-warning")) {
          console.log("[Notifications] Sending LOCK WARNING for period", period.periodNumber);
          this.notifiedPeriods.add(lockKey + "-warning");
          this.showPushNotification("\u26A0\uFE0F Per\xEDodo por finalizar", `El Per\xEDodo ${period.periodNumber} se bloquear\xE1 en ${Math.ceil(diffMins)} minuto${Math.ceil(diffMins) > 1 ? "s" : ""}`);
        }
        const isPastLockTime = nowMs >= lockMs;
        if (isPastLockTime && !this.notifiedPeriods.has(lockKey + "-ended")) {
          console.log("[Notifications] Sending LOCKED for period", period.periodNumber, "| pastLock:", isPastLockTime, "| isUnlocked:", period.isUnlocked);
          this.notifiedPeriods.add(lockKey + "-ended");
          this.showPushNotification("\u{1F512} Per\xEDodo finalizado", `El Per\xEDodo ${period.periodNumber} ha sido bloqueado`);
        }
        if (diffMins <= 0 && !period.isUnlocked && !this.notifiedPeriods.has(lockKey + "-ended")) {
          console.log("[Notifications] Sending LOCKED for period (condition 1)", period.periodNumber, "| diffMins:", diffMins, "| isUnlocked:", period.isUnlocked);
          this.notifiedPeriods.add(lockKey + "-ended");
          this.showPushNotification("\u{1F512} Per\xEDodo finalizado", `El Per\xEDodo ${period.periodNumber} ha sido bloqueado`);
        }
        if (!period.isUnlocked && !this.notifiedPeriods.has(lockKey + "-ended") && isActive === false && diffMins <= 0) {
          console.log("[Notifications] Sending LOCKED for period (condition 2)", period.periodNumber);
          this.notifiedPeriods.add(lockKey + "-ended");
          this.showPushNotification("\u{1F512} Per\xEDodo finalizado", `El Per\xEDodo ${period.periodNumber} ha sido bloqueado`);
        }
      }
    }
  }
  startPolling() {
    if (this.pollingSubscription)
      return;
    this.ngZone.runOutsideAngular(() => {
      this.pollingSubscription = interval(1e4).subscribe(() => {
        this.http.get("http://localhost:8080/api/periods").subscribe({
          next: (periods) => {
            console.log("Periodos desde realtime service:", periods);
            const currentPeriodsStr = JSON.stringify(periods.map((p) => ({
              periodNumber: p.periodNumber,
              isUnlocked: p.isUnlocked
            })));
            if (currentPeriodsStr !== this.lastPeriods) {
              this.lastPeriods = currentPeriodsStr;
              this.ngZone.run(() => {
                this.periodsSubject.next(periods);
                this.checkPeriodDates(periods);
              });
            } else {
              this.ngZone.run(() => {
                this.checkPeriodDates(periods);
              });
            }
          },
          error: () => {
          }
        });
      });
    });
  }
  stopPolling() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
      this.pollingSubscription = null;
    }
  }
  notifyPeriodsChanged() {
    this.lastPeriods = "";
    this.http.get("http://localhost:8080/api/periods").subscribe({
      next: (periods) => {
        this.periodsSubject.next(periods);
      }
    });
  }
  showTestNotification() {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("\u{1F514} Notificaciones activas", {
        body: "Las notificaciones push funcionan correctamente",
        icon: "/Logo Colegio.png"
      });
    }
  }
  requestPermissionOnUserGesture() {
    if ("Notification" in window && this.notificationPermission !== "granted") {
      Notification.requestPermission().then((permission) => {
        this.notificationPermission = permission;
      });
    }
  }
  static \u0275fac = function GlobalRealtimeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalRealtimeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalRealtimeService, factory: _GlobalRealtimeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalRealtimeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: NgZone }], null);
})();

export {
  GlobalRealtimeService
};
//# sourceMappingURL=chunk-ZYSOL3KW.js.map
