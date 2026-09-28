/**
 * URL del backend según dónde se abra la app.
 *
 * El resto del código sigue escrito con el prefijo "http://localhost:8080";
 * `api-rewrite.interceptor.ts` lo reemplaza por API_BASE_URL antes de enviar
 * cada petición.
 *
 *  - http://localhost:4200 (o 127.0.0.1)  → http://localhost:8080
 *  - Cualquier otro host (IP de LAN, etc.) → mismo host, puerto 8080
 */
const LOCALHOST_API = 'http://localhost:8080';

function calcularApiBase(): string {
  if (typeof window === 'undefined') return LOCALHOST_API;
  const { hostname, protocol } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return LOCALHOST_API;
  }
  return `${protocol}//${hostname}:8080`;
}

/** URL base del backend, calculada una sola vez al cargar el módulo. */
export const API_BASE_URL = calcularApiBase();

/** Prefijo "viejo" que sigue escrito tal cual en el resto del código. */
export const LOCALHOST_API_PREFIX = LOCALHOST_API;