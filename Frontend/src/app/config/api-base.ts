/**
 * Calcula en tiempo de ejecución a qué backend le deben apuntar las
 * peticiones API.
 *
 * Todo el código del frontend sigue escrito con "http://localhost:8080"
 * tal cual (no se tocó ni un archivo de servicio/componente — así lo pidió
 * el usuario: "sin borrar la del localhost"). Lo que hace este archivo es
 * calcular, UNA sola vez al cargar la app, la URL real a la que hay que
 * mandar esas peticiones, y `api-rewrite.interceptor.ts` se encarga de
 * reemplazar el prefijo "http://localhost:8080" por esa URL antes de que
 * salga la petición.
 *
 * Casos:
 *   1) Abres la app en http://localhost:4200 (o 127.0.0.1)
 *        → sigue pegándole a http://localhost:8080 (sin cambios).
 *   2) Abres la app desde un DevTunnel, p.ej.
 *        https://rq4cngtm-4200.use.devtunnels.ms
 *      → detecta el patrón "<id>-<puerto>.<resto>.devtunnels.ms" y arma
 *        la URL del backend cambiando SOLO el puerto (4200 → 8080),
 *        manteniendo el mismo id de túnel y el mismo host:
 *        https://rq4cngtm-8080.use.devtunnels.ms
 *   3) Cualquier otro caso (dominio propio, IP de LAN, etc.) → usa el
 *      mismo protocolo/host donde se sirve el frontend, puerto 8080. Esto
 *      cubre por ejemplo abrir la app desde el celular con la IP de tu PC.
 *
 * Si el patrón automático no calza con tu túnel, se puede forzar la URL a
 * mano desde la consola del navegador ANTES de recargar la página:
 *   localStorage.setItem('apiBaseOverride', 'https://mi-tunel-8080.algo.ms');
 * y para volver a automático: localStorage.removeItem('apiBaseOverride');
 */

const LOCALHOST_API = 'http://localhost:8080';

/**
 * Forzar la URL del backend a mano mientras se prueba este DevTunnel en
 * concreto. Se usa SOLO cuando la app NO se abre desde localhost (así
 * "localhost" sigue intacto, tal como se pidió). Para volver a que se
 * calcule solo con el patrón automático de DevTunnels, poner en `null`.
 */
const MANUAL_OVERRIDE: string | null = 'https://rq4cngtm-8080.use.devtunnels.ms';

function calcularApiBase(): string {
  if (typeof window === 'undefined') return LOCALHOST_API;

  const { hostname, protocol } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return LOCALHOST_API;
  }

  if (MANUAL_OVERRIDE) return MANUAL_OVERRIDE.replace(/\/$/, '');

  const override = window.localStorage?.getItem('apiBaseOverride');
  if (override) return override.replace(/\/$/, '');

  // Patrón DevTunnels: <id>-<puerto>.<region>.devtunnels.ms
  const matchDevTunnel = hostname.match(/^(.+)-(\d+)((?:\.[a-z0-9-]+)*\.devtunnels\.ms)$/i);
  if (matchDevTunnel) {
    const [, idTunel, , resto] = matchDevTunnel;
    return `${protocol}//${idTunel}-8080${resto}`;
  }

  // Cualquier otro host (IP de LAN, dominio propio, etc.): mismo host,
  // puerto 8080.
  return `${protocol}//${hostname}:8080`;
}

/** URL base del backend, calculada una sola vez al cargar el módulo. */
export const API_BASE_URL = calcularApiBase();

/** Prefijo "viejo" que sigue escrito tal cual en todo el resto del código. */
export const LOCALHOST_API_PREFIX = LOCALHOST_API;