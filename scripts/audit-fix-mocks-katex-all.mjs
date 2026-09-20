/**
 * Deep KaTeX / currency / $t=0$ audit+scrub across Mock Exams 1–6.
 * Run: node scripts/audit-fix-mocks-katex-all.mjs
 * Exit 0 only when every math segment renders and no banned patterns remain.
 */
import fs from "node:fs";
import path from "node:path";
import katex from "katex";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

// Load scrub via jiti-friendly dynamic import of compiled-less TS through node --import isn't available;
// duplicate the critical transforms by importing from dist if present, else inline via Function from built file.
async function loadScrub() {
  try {
    const mod = await import(pathToFileURL(path.resolve("src/lib/scrub-katex.ts")).href);
    return mod;
  } catch {
    // Fallback: use jiti
    const jiti = require("jiti")(import.meta.url);
    return jiti("../src/lib/scrub-katex.ts");
  }
}

function extractMath(s) {
  if (!s || typeof s !== "string") return [];
  const out = [];
  const re = /\$\$([\s\S]*?)\$\$|\$((?:\\\$|[^$])+)\$/g;
  let m;
  while ((m = re.exec(s))) {
    out.push({ display: Boolean(m[1]), src: (m[1] ?? m[2]).trim() });
  }
  return out;
}

function allStrings(obj, acc = []) {
  if (typeof obj === "string") acc.push(obj);
  else if (Array.isArray(obj)) obj.forEach((v) => allStrings(v, acc));
  else if (obj && typeof obj === "object") Object.values(obj).forEach((v) => allStrings(v, acc));
  return acc;
}

function patternHits(s) {
  const hits = [];
  if (/\$t\s*=\s*0\$/.test(s)) hits.push("t=0");
  if (/\\\$[0-9]/.test(s)) hits.push("currency-\\$");
  if (/(^|[^\\$])\$\d[\d,]*\s+(billion|million)\b/.test(s)) hits.push("bare-$amount");
  // bare r= only in prose (strip display/inline math first)
  const prose = s.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\$[^$]+\$/g, " ");
  if (/\br = 0\.\d+/.test(prose)) hits.push("bare-r=");
  return hits;
}

const { scrubKatexDeep } = await loadScrub();

const summary = [];
let totalFail = 0;
let totalPattern = 0;

for (const n of [1, 2, 3, 4, 5, 6]) {
  const file = path.resolve(`src/data/mock-exam-${n}-sourced.json`);
  const raw = JSON.parse(fs.readFileSync(file, "utf8"));
  const scrubbed = scrubKatexDeep(raw);
  fs.writeFileSync(file, JSON.stringify(scrubbed, null, 2) + "\n");

  const failures = [];
  const patterns = [];
  let segments = 0;

  const tasks = [
    ...scrubbed.economics.map((t, i) => ({ q: i + 1, t })),
    ...scrubbed.english.tasks.map((t, i) => ({ q: i + 11, t })),
    ...scrubbed.math.map((t, i) => ({ q: i + 22, t })),
  ];

  for (const { q, t } of tasks) {
    const id = t.case_id || t.id || `Q${q}`;
    for (const s of allStrings(t)) {
      for (const kind of patternHits(s)) {
        patterns.push({ q, id, kind });
      }
      for (const piece of extractMath(s)) {
        segments++;
        try {
          katex.renderToString(piece.src, {
            throwOnError: true,
            displayMode: piece.display,
            strict: "ignore",
          });
        } catch (e) {
          failures.push({
            q,
            id,
            err: String(e.message || e).slice(0, 160),
            src: piece.src.slice(0, 100).replace(/\n/g, " "),
          });
        }
      }
    }
  }

  totalFail += failures.length;
  totalPattern += patterns.length;
  summary.push({
    mock: n,
    segments,
    katexFails: failures.length,
    patternHits: patterns.length,
    failures: failures.slice(0, 8),
    patterns: patterns.slice(0, 8),
  });
  console.log(
    `Mock ${n}: segments=${segments} katexFails=${failures.length} patternHits=${patterns.length}`,
  );
  for (const f of failures.slice(0, 5)) console.log("  K", JSON.stringify(f));
  for (const p of patterns.slice(0, 5)) console.log("  P", JSON.stringify(p));
}

if (totalFail || totalPattern) {
  console.error(`\nAUDIT FAILED: katexFails=${totalFail} patternHits=${totalPattern}`);
  process.exit(1);
}
console.log("\nAll 6 mocks: KaTeX + pattern audit OK");
