import fs from "node:fs";
import path from "node:path";

export const ROOT = "C:/Users/bubli/Projects/bbe-school-fixed";
export const THIN = JSON.parse(
  fs.readFileSync(path.join(ROOT, "textbook/output/_rev/_thin80.json"), "utf8"),
);

export function wordCount(s) {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function applyBodies(bodies, { write = true } = {}) {
  const cache = {};
  const stats = [];
  const missing = [];
  const errors = [];
  const used = new Set();

  for (const e of THIN) {
    const key = `${e.id}:${e.letter}`;
    const body = bodies[key];
    if (!body) {
      missing.push(key);
      continue;
    }
    used.add(key);
    const closer = e.key ? "so the statement is True." : "so the statement is False.";
    const b = String(body).trim();
    if (b.includes("\u2014") || b.includes("\u2013") || b.includes("${")) {
      errors.push(key + " forbidden char");
      continue;
    }
    if (!b.endsWith(closer)) {
      errors.push(key + " bad closer: " + JSON.stringify(b.slice(-40)));
      continue;
    }
    if (!cache[e.file]) {
      cache[e.file] = JSON.parse(fs.readFileSync(path.join(ROOT, e.file), "utf8"));
    }
    const arr = cache[e.file];
    const t = arr.find((x) => x.id === e.id);
    if (!t) {
      errors.push(key + " missing task");
      continue;
    }
    const cur = t.tactical_explanations[e.idx] || "";
    if (!cur.startsWith(e.header)) {
      errors.push(key + " header mismatch");
      continue;
    }
    t.tactical_explanations[e.idx] = e.header + "\n\n" + b;
    const wc = wordCount(b);
    stats.push({ key, file: e.file, wc, ok: wc >= 140 && wc <= 220 });
  }

  if (write && errors.length === 0) {
    for (const [f, arr] of Object.entries(cache)) {
      fs.writeFileSync(path.join(ROOT, f), JSON.stringify(arr, null, 2) + "\n");
    }
  }

  const extra = Object.keys(bodies).filter((k) => !used.has(k));
  return { n: stats.length, stats, missing, errors, extra, wrote: write && errors.length === 0 };
}
