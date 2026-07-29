import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  catchError,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G4AEIR3O.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  API_URL = "http://localhost:8080/api/auth";
  API_BASE = "http://localhost:8080/api";
  API_BASE_URL = "http://localhost:8080/api";
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  login(credentials) {
    return this.http.post(`${this.API_URL}/login`, credentials).pipe(tap((response) => {
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("role", response.role);
      }
      this.getCurrentUser().subscribe();
    }), catchError(this.handleError));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  getRole() {
    return localStorage.getItem("role");
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  getCurrentUser() {
    return this.http.get(`${this.API_URL}/me`).pipe(tap((user) => {
      this.currentUserSubject.next(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
    }), catchError(this.handleError));
  }
  getCurrentUserValue() {
    return this.currentUserSubject.value;
  }
  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }
    return this.http.post(`${this.API_URL}/refresh`, { refreshToken });
  }
  handleError(error) {
    let errorMessage = "Error al iniciar sesi\xF3n";
    if (error.status === 0 || error.statusText === "Unknown Error") {
      errorMessage = "Error: no se pudo conectar al servidor";
    } else if (error.status === 423) {
      const errorObj = error.error;
      if (errorObj && typeof errorObj === "object" && errorObj.error) {
        errorMessage = errorObj.error;
      }
    } else if (error.status === 401) {
      const errorObj = error.error;
      if (errorObj && typeof errorObj === "object" && errorObj.error) {
        errorMessage = errorObj.error;
      } else if (typeof errorObj === "string") {
        try {
          const parsed = JSON.parse(errorObj);
          errorMessage = parsed.error || errorMessage;
        } catch (e) {
          errorMessage = errorObj || errorMessage;
        }
      }
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error?.message || error.message || errorMessage;
    }
    console.error("Auth Error:", errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-UNKQMH5O.js.map
