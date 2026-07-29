import {
  Router
} from "./chunk-7DDXMRNS.js";
import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G4AEIR3O.js";

// src/app/services/generation.service.ts
var API_BASE = "http://localhost:8080/api/boletines";
var POLL_INTERVAL_MS = 500;
var GenerationService = class _GenerationService {
  http;
  router;
  jobsSubject = new BehaviorSubject([]);
  jobs$ = this.jobsSubject.asObservable();
  /** jobId en el que el usuario hizo click desde una notificación. Se lee
   *  con consumeFocusJobId() — un property normal (no un Observable) para
   *  evitar problemas de timing: si Boletines no estaba montado, navegar
   *  crea la instancia DESPUÉS del click, y un Subject ya habría emitido
   *  sin nadie escuchando. */
  focusJobId = null;
  pollHandle = null;
  polling = false;
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  startPolling() {
    if (this.polling)
      return;
    this.polling = true;
    this.refresh();
    this.pollHandle = setInterval(() => this.refresh(), POLL_INTERVAL_MS);
  }
  stopPolling() {
    this.polling = false;
    if (this.pollHandle) {
      clearInterval(this.pollHandle);
      this.pollHandle = null;
    }
  }
  refresh() {
    this.http.get(`${API_BASE}/generaciones`).subscribe({
      next: (jobs) => this.jobsSubject.next(jobs || []),
      error: () => {
      }
    });
  }
  get currentJobs() {
    return this.jobsSubject.value;
  }
  /** Inserta/actualiza un job de inmediato en memoria (optimista) para que
   *  la notificación aparezca sin esperar al próximo ciclo de sondeo. */
  upsertJobLocal(job) {
    const current = this.jobsSubject.value.filter((j) => j.jobId !== job.jobId);
    this.jobsSubject.next([job, ...current]);
  }
  /** Click en una notificación: navega a Boletines y deja marcado qué job enfocar. */
  openJob(job) {
    this.focusJobId = job.jobId;
    this.router.navigate(["/boletines"]);
  }
  consumeFocusJobId() {
    const id = this.focusJobId;
    this.focusJobId = null;
    return id;
  }
  static \u0275fac = function GenerationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenerationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GenerationService, factory: _GenerationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  GenerationService
};
//# sourceMappingURL=chunk-PGR2Y62M.js.map
