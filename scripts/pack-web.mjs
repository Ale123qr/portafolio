import { cpSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = join(import.meta.dirname, "..");
const dist = join(root, "dist");

function syncStatic(dest, keepFiles = new Set()) {
  mkdirSync(dest, { recursive: true });

  for (const name of readdirSync(dest)) {
    if (keepFiles.has(name)) continue;
    rmSync(join(dest, name), { recursive: true, force: true });
  }

  for (const name of readdirSync(dist)) {
    const src = join(dist, name);
    const target = join(dest, name);
    cpSync(src, target, { recursive: statSync(src).isDirectory() });
  }

  writeFileSync(join(dest, ".nojekyll"), "");
}

function buildNetlify() {
  const result = spawnSync("npm run build", {
    cwd: root,
    shell: true,
    stdio: "inherit",
    env: { ...process.env, GITHUB_PAGES: "0" },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
  syncStatic(join(root, "subir en la web"), new Set(["LEEME.txt"]));
}

function buildGithub() {
  const result = spawnSync("npm run build", {
    cwd: root,
    shell: true,
    stdio: "inherit",
    env: { ...process.env, GITHUB_PAGES: "1" },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
  syncStatic(join(root, "para-github"), new Set(["SUBIR-A-GITHUB.txt", "LEEME-URGENTE.txt"]));
}

buildNetlify();
buildGithub();

console.log("Listo:");
console.log("  - subir en la web/  (Netlify)");
console.log("  - para-github/      (GitHub Pages, base /portafolio/)");
