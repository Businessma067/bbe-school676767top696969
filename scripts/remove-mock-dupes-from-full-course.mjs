#!/usr/bin/env node
/**
 * Remove full-course bank tasks that also appear in Mock Exams 1–6.
 * Match by case_id + content fingerprint (avoids colliding MATH 11.* IDs
 * that label different problems in financial vs differentiation banks).
 *
 * Run: node scripts/remove-mock-dupes-from-full-course.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/data");

function loadMockTasks() {
  const out = [];
  for (let n = 1; n <= 6; n++) {
    const d = JSON.parse(
      fs.readFileSync(path.join(ROOT, `mock-exam-${n}-sourced.json`), "utf8"),
    );
    for (const t of d.economics || []) out.push({ mock: n, subject: "econ", t });
    for (const t of d.english?.tasks || []) out.push({ mock: n, subject: "eng", t });
    for (const t of d.math || []) out.push({ mock: n, subject: "math", t });
  }
  return out;
}

function caseIdOf(t) {
  const raw = String(t.case_id || t.id || "").trim();
  return raw.replace(/\+P$/, "");
}

function fingerprint(t) {
  const title = String(t.title || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
  const ctx = String(t.context || "")
    .toLowerCase()
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  const stmts = (t.statements || [])
    .slice(0, 2)
    .map((s) =>
      String(s)
        .toLowerCase()
        .replace(/\$[^$]+\$/g, " ")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .slice(0, 60),
    )
    .join("|");
  return { title, ctx, stmts };
}

function similar(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.length >= 40 && b.length >= 40) {
    if (a.includes(b.slice(0, 40)) || b.includes(a.slice(0, 40))) return true;
  }
  // token overlap
  const ta = new Set(a.split(" ").filter((w) => w.length > 3));
  const tb = new Set(b.split(" ").filter((w) => w.length > 3));
  if (ta.size < 3 || tb.size < 3) return false;
  let inter = 0;
  for (const w of ta) if (tb.has(w)) inter++;
  return inter / Math.min(ta.size, tb.size) >= 0.45;
}

function normMathId(x) {
  return String(x || "")
    .replace(/^MATH\s+/i, "")
    .replace(/^math-/i, "")
    .replace(/\./g, "-")
    .toLowerCase();
}

function idsAligned(mockT, courseT) {
  const mid = caseIdOf(mockT);
  const cid = caseIdOf(courseT);
  if (!mid || !cid) return false;
  if (mid === cid) return true;
  if (normMathId(mid) === normMathId(cid)) return true;
  if (courseT.id && (courseT.id === mid || courseT.id === `math-${normMathId(mid)}`)) return true;
  if (mockT.id && (mockT.id === cid || mockT.id === courseT.id)) return true;
  return false;
}

function isSameAssignment(mockT, courseT) {
  const mid = caseIdOf(mockT);
  const cid = caseIdOf(courseT);
  if (!mid || !cid) return false;
  // English / econ ids are unique — case_id match is enough
  if (mid.startsWith("CASE ") || mid.startsWith("ENG ")) {
    return mid === cid;
  }
  if (!idsAligned(mockT, courseT)) return false;
  const mf = fingerprint(mockT);
  const cf = fingerprint(courseT);
  const genericCtx = !mf.ctx || /evaluate each statement|mark it true or false/.test(mf.ctx);
  if (mf.title && cf.title && similar(mf.title, cf.title)) return true;
  if (mf.ctx && cf.ctx && similar(mf.ctx, cf.ctx)) return true;
  if (mf.stmts && cf.stmts && similar(mf.stmts, cf.stmts)) return true;
  // Generic exam stems: case_id + first statement overlap
  if (genericCtx && mf.stmts && cf.stmts && similar(mf.stmts, cf.stmts)) return true;
  // Non-colliding exact case_id with very short mock stem still counts if statements overlap lightly
  if (mid === cid && mf.stmts && cf.stmts) {
    const a = mf.stmts.split("|")[0] || "";
    const b = cf.stmts.split("|")[0] || "";
    if (a.length > 20 && b.includes(a.slice(0, 24))) return true;
  }
  return false;
}

function filterTaskArray(arr, mocks, report, file) {
  if (!Array.isArray(arr)) return { arr, removed: 0 };
  const next = [];
  let removed = 0;
  for (const task of arr) {
    if (!task || typeof task !== "object") {
      next.push(task);
      continue;
    }
    const hit = mocks.find(({ t }) => isSameAssignment(t, task));
    if (hit) {
      removed++;
      report.push({
        file,
        case_id: caseIdOf(task),
        mock: hit.mock,
        subject: hit.subject,
        title: task.title || "",
      });
    } else {
      next.push(task);
    }
  }
  return { arr: next, removed };
}

function scrubJsonFile(file, mocks, report) {
  const raw = fs.readFileSync(file, "utf8");
  const data = JSON.parse(raw);
  let removed = 0;

  if (Array.isArray(data)) {
    const r = filterTaskArray(data, mocks, report, file);
    if (r.removed) {
      fs.writeFileSync(file, JSON.stringify(r.arr, null, 2) + "\n");
      removed += r.removed;
    }
    return removed;
  }

  if (data && typeof data === "object") {
    let changed = false;
    for (const key of ["tasks", "cases", "items"]) {
      if (Array.isArray(data[key])) {
        const r = filterTaskArray(data[key], mocks, report, file);
        if (r.removed) {
          data[key] = r.arr;
          removed += r.removed;
          changed = true;
        }
      }
    }
    // grammar_parts shape: { id, title, tasks }
    if (changed) fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  }
  return removed;
}

/** Remove `{ ... case_id: "MATH X" ... },` objects from TS banks. */
function scrubTsFile(file, mocks, report) {
  let text = fs.readFileSync(file, "utf8");
  const original = text;
  let removed = 0;

  // Find candidate case_id occurrences
  const re = /case_id:\s*[`'"]([^`'"]+)[`'"]/g;
  const hits = [];
  let m;
  while ((m = re.exec(text))) {
    const cid = m[1].replace(/\+P$/, "");
    hits.push({ index: m.index, cid, full: m[0] });
  }

  // Process from end so indices stay valid
  for (const hit of hits.reverse()) {
    // Find object start: walk back to nearest `{` at object boundary
    let i = hit.index;
    while (i > 0 && text[i] !== "{") i--;
    if (text[i] !== "{") continue;
    // Expand to include leading whitespace/newline and trailing comma
    let start = i;
    while (start > 0 && (text[start - 1] === " " || text[start - 1] === "\t")) start--;
    if (start > 0 && text[start - 1] === "\n") start--;

    // Brace match forward
    let depth = 0;
    let end = -1;
    let inStr = null;
    let escape = false;
    for (let j = i; j < text.length; j++) {
      const ch = text[j];
      if (inStr) {
        if (escape) {
          escape = false;
          continue;
        }
        if (ch === "\\") {
          escape = true;
          continue;
        }
        if (ch === inStr) inStr = null;
        continue;
      }
      if (ch === "'" || ch === '"' || ch === "`") {
        inStr = ch;
        continue;
      }
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          end = j + 1;
          break;
        }
      }
    }
    if (end < 0) continue;

    // Include trailing comma
    let end2 = end;
    while (end2 < text.length && /\s/.test(text[end2])) end2++;
    if (text[end2] === ",") end2++;

    const block = text.slice(start, end2);
    // Parse minimal fields from block for matching
    const titleM = block.match(/title:\s*[`'"]([^`'"]*)[`'"]/);
    const ctxM = block.match(/context:\s*[`'"]([\s\S]*?)[`'"]/);
    // template literal context may use `...`
    const ctxM2 = block.match(/context:\s*`([\s\S]*?)`/);
    const stmtsM = [...block.matchAll(/statements:\s*\[([\s\S]*?)\]/g)];
    const fake = {
      case_id: hit.cid,
      id: (block.match(/id:\s*[`'"]([^`'"]+)[`'"]/) || [])[1],
      title: titleM ? titleM[1] : "",
      context: (ctxM2 || ctxM) ? (ctxM2 || ctxM)[1] : "",
      statements: [],
    };
    if (stmtsM[0]) {
      fake.statements = [...stmtsM[0][1].matchAll(/[`'"]([\s\S]*?)[`'"]/g)].map((x) => x[1]).slice(0, 3);
    }

    const hitMock = mocks.find(({ t }) => isSameAssignment(t, fake));
    if (!hitMock) continue;

    text = text.slice(0, start) + text.slice(end2);
    removed++;
    report.push({
      file,
      case_id: hit.cid,
      mock: hitMock.mock,
      subject: hitMock.subject,
      title: fake.title,
    });
  }

  if (text !== original) {
    // tidy double commas / blank gaps
    text = text.replace(/,\s*,/g, ",").replace(/\n{3,}/g, "\n\n");
    fs.writeFileSync(file, text);
  }
  return removed;
}

const mocks = loadMockTasks();
const report = [];
let total = 0;

const jsonTargets = [
  ...fs.readdirSync(ROOT).filter((f) => f.startsWith("economics-cases-") && f.endsWith(".json")),
  ...fs.readdirSync(ROOT).filter((f) => f.startsWith("math-") && f.endsWith(".json")),
  "english/texts.json",
  "english/grammar.json",
  ...fs
    .readdirSync(path.join(ROOT, "english/grammar_parts"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => path.join("english/grammar_parts", f)),
].map((f) => path.join(ROOT, f));

for (const file of jsonTargets) {
  if (!fs.existsSync(file)) continue;
  // skip mock sourced
  if (file.includes("mock-exam")) continue;
  total += scrubJsonFile(file, mocks, report);
}

const tsTargets = [
  "math-ch1-logic.ts",
  "math-ch2-elementary-algebra.ts",
  "math-ch4-equations.ts",
  "math-ch5-linear-equations.ts",
  "math-ch6-inequalities.ts",
  "math-ch7-linear-quadratic.ts",
  "math-ch8-power-functions.ts",
  "math-ch9-polynomials.ts",
  "math-ch10-exp-log.ts",
  "math-ch11-differentiation.ts",
  "math-ch11-financial.ts",
  "math-ch12-probability.ts",
  "math-ch13-binomial.ts",
].map((f) => path.join(ROOT, f));

for (const file of tsTargets) {
  if (!fs.existsSync(file)) continue;
  total += scrubTsFile(file, mocks, report);
}

// Also drop removed econ ids from difficulty map (optional cleanup)
const diffPath = path.join(ROOT, "economics-difficulty-by-case-id.json");
if (fs.existsSync(diffPath)) {
  const diff = JSON.parse(fs.readFileSync(diffPath, "utf8"));
  const removedEcon = new Set(
    report.filter((r) => String(r.case_id).startsWith("CASE ")).map((r) => r.case_id),
  );
  let n = 0;
  for (const id of removedEcon) {
    if (id in diff) {
      delete diff[id];
      n++;
    }
  }
  if (n) {
    fs.writeFileSync(diffPath, JSON.stringify(diff, null, 2) + "\n");
    console.log(`difficulty map: removed ${n} entries`);
  }
}

console.log(`Removed ${total} full-course tasks overlapping mocks.`);
console.log(`Report rows: ${report.length}`);
for (const r of report) {
  console.log(
    `  M${r.mock}/${r.subject} ${r.case_id} ← ${path.relative(process.cwd(), r.file)} | ${String(r.title).slice(0, 60)}`,
  );
}

fs.writeFileSync(
  path.resolve("scripts/remove-mock-dupes-report.json"),
  JSON.stringify({ removed: total, items: report }, null, 2) + "\n",
);
