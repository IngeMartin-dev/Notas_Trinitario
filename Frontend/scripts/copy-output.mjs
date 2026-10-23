// Copia la salida de Angular a las carpetas donde Cloudflare Pages la busca,
// sin importar si el build corre desde la raiz del repo o desde Frontend/.
import { cpSync, rmSync, existsSync } from 'node:fs';

const origen = 'dist/Frontend/browser';
if (!existsSync(origen)) {
  console.error(`No existe ${origen}: el build de Angular no genero salida.`);
  process.exit(1);
}
for (const destino of ['dist/cloudflare', 'Frontend/dist/cloudflare']) {
  rmSync(destino, { recursive: true, force: true });
  cpSync(origen, destino, { recursive: true });
  console.log(`Salida copiada a ${destino}`);
}
