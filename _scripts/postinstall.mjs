import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyFileIntoJsVendor(root, src, destFileName) {
  const dest = path.join(root, 'js', 'vendor', destFileName);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
}

async function main() {
  const root = path.resolve(__dirname, '..');
  await copyFileIntoJsVendor(
    root,
    path.join(root, 'node_modules/@xterm/xterm/lib/xterm.mjs'),
    'xterm.mjs'
  );
  await copyFileIntoJsVendor(
    root,
    path.join(root, 'node_modules/@xterm/addon-webgl/lib/addon-webgl.mjs'),
    'addon-webgl.mjs'
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
