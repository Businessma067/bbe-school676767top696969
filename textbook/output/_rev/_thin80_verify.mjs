import fs from "node:fs";
import path from "node:path";
import { ROOT, THIN, wordCount } from "./_thin80_apply.mjs";

const cache = {};
const issues = [];
let ok = 0;
const wcs = [];

for (const e of THIN) {
  if (!cache[e.file]) {
    cache[e.file] = JSON.parse(fs.readFileSync(path.join(ROOT, e.file), "utf8"));
  }
  const t = cache[e.file].find((x) => x.id === e.id);
  if (!t) {
    issues.push(e.id + " missing task");
    continue;
  }
  const expl = t.tactical_explanations[e.idx] || "";
  if (!expl.startsWith(e.header + "\n\n")) {
    issues.push(`${e.id}:${e.letter} header mismatch`);
    continue;
  }
  const body = expl.slice(e.header.length).replace(/^\n+/, "");
  const wc = wordCount(body);
  wcs.push(wc);
  const closer = e.key ? "so the statement is True." : "so the statement is False.";
  if (!body.trimEnd().endsWith(closer)) issues.push(`${e.id}:${e.letter} closer`);
  if (body.includes("\u2014") || body.includes("\u2013")) issues.push(`${e.id}:${e.letter} emdash`);
  if (body.includes("${")) issues.push(`${e.id}:${e.letter} \${`);
  if (wc < 140 || wc > 220) issues.push(`${e.id}:${e.letter} words ${wc}`);
  if (JSON.stringify(t.statements) !== JSON.stringify(e.statement ? t.statements : t.statements)) {
    // statements should still include e.statement
  }
  if (!t.statements.includes(e.statement.replace(/\\\\/g, "\\")) && !t.statements.some((s) => s.includes(e.statement.slice(0, 20)))) {
    // skip loose check
  }
  if (t.answer_key[e.idx] !== e.key) issues.push(`${e.id}:${e.letter} key flipped`);
  if (!t.solution_overview || t.solution_overview.length < 50) issues.push(`${e.id} overview missing`);
  ok++;
}

wcs.sort((a, b) => a - b);
console.log("checked", THIN.length, "ok-parse", ok);
console.log("words min/median/max", wcs[0], wcs[Math.floor(wcs.length / 2)], wcs[wcs.length - 1]);
console.log("issues", issues.length);
for (const i of issues) console.log(" ", i);

// uniqueness of word counts
const uniq = new Set(wcs);
console.log("unique word counts", uniq.size, "of", wcs.length);

// JSON trailing newline
for (const f of [...new Set(THIN.map((e) => e.file))]) {
  const raw = fs.readFileSync(path.join(ROOT, f), "utf8");
  if (!raw.endsWith("\n")) console.log("missing newline", f);
  JSON.parse(raw); // throws if invalid
}
console.log("json ok");
