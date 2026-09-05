import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './auth-interceptor';
import { retryBackoffInterceptor } from './retry-backoff.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Orden importa: retryBackoffInterceptor debe ir antes que
    // authInterceptor para que también pueda reintentar la petición ya con
    // el token renovado si authInterceptor lo actualizó tras un 401.
    provideHttpClient(withInterceptors([retryBackoffInterceptor, authInterceptor]))
  ]
};