/**
 * Extended audit for Ch.4 + Ch.5 banks:
 * - cross-chapter statement/case/context/title duplicates
 * - FC format compliance (beyond deep-audit-banks.mjs)
 */
import fs from "node:fs";

const FILES = [
  { ch: 4, path: "src/data/economics-cases-ch4-subtopics.json" },
  { ch: 5, path: "src/data/economics-cases-ch5-subtopics.json" },
];

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function tokens(s) {
  return new Set(norm(s).split(" ").filter((w) => w.length > 2));
}
function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

const BANNED =
  /\b(the book|according to the book|\(alt|fuhrmann notes|tina|steve|at&s|t&s computer|gerstenmayer|world wildlife|greenpeace|red cross|pcb)\b/i;
const CONTEXT_END = /Evaluate the following economic assertions:\s*$/i;
const DIFF_RE = /^[2-5]\/5$/;
const CASE_ID_RE = /^CASE \d+\.\d+\.\d{2}$/;

const allCases = [];
for (const { ch, path } of FILES) {
  const cases = JSON.parse(fs.readFileSync(path, "utf8"));
  for (const c of cases) allCases.push({ ...c, _ch: ch, _file: path });
}

const issues = [];

// --- per-case format ---
for (const c of allCases) {
  if (!CONTEXT_END.test(String(c.context || "").trim())) {
    issues.push({ type: "bad_context_end", id: c.case_id });
  }
  if (String(c.context || "").trim().length < 70) {
    issues.push({ type: "context_too_short", id: c.case_id, len: c.context?.length });
  }
  if (c.tier !== "full") issues.push({ type: "bad_tier", id: c.case_id, tier: c.tier });
  if (!CASE_ID_RE.test(c.case_id)) issues.push({ type: "bad_case_id", id: c.case_id });
  if (!c.subsection || !c.case_id.includes(c.subsection)) {
    issues.push({ type: "subsection_mismatch", id: c.case_id, subsection: c.subsection });
  }
  if (!DIFF_RE.test(c.difficulty_level)) {
    issues.push({ type: "bad_difficulty", id: c.case_id, diff: c.difficulty_level });
  }
  if (BANNED.test(JSON.stringify(c))) issues.push({ type: "banned_phrase", id: c.case_id });
  if (!c.title || c.title !== c.title.trim()) issues.push({ type: "bad_title", id: c.case_id });
  if (c.title && /^[a-z]/.test(c.title)) issues.push({ type: "title_not_titlecase", id: c.case_id, title: c.title });

  const stmts = c.statements || [];
  const keys = c.answer_key || [];
  const expls = c.tactical_explanations || [];
  if (stmts.length !== 5 || keys.length !== 5 || expls.length !== 5) {
    issues.push({ type: "wrong_count", id: c.case_id, n: stmts.length });
    continue;
  }

  for (let i = 0; i < 5; i++) {
    const want = keys[i] ? "TRUE" : "FALSE";
    const e = String(expls[i] || "");
    if (!e.startsWith(`${want} —`) && !e.startsWith(`${want} –`) && !e.startsWith(`${want} -`)) {
      issues.push({ type: "expl_prefix_mismatch", id: c.case_id, i, got: e.slice(0, 20) });
    }
    if (stmts[i].length < 30) issues.push({ type: "stmt_too_short", id: c.case_id, i, len: stmts[i].length });
    if (stmts[i].length > 220) issues.push({ type: "stmt_too_long", id: c.case_id, i, len: stmts[i].length });
    // neon-only false trap heuristic
    if (!keys[i] && /\b(always|never|every|no|none|all)\b/i.test(stmts[i]) && stmts[i].split(" ").length < 18) {
      issues.push({ type: "neon_false", id: c.case_id, i, s: stmts[i].slice(0, 80) });
    }
  }
}

// --- global exact duplicates ---
const stmtGlobal = new Map();
const contextGlobal = new Map();
const titleGlobal = new Map();
const caseFingerprint = new Map();

for (const c of allCases) {
  const ctxK = norm(c.context);
  if (contextGlobal.has(ctxK)) {
    issues.push({ type: "dup_context", a: contextGlobal.get(ctxK), b: c.case_id });
  } else contextGlobal.set(ctxK, c.case_id);

  const titleK = norm(c.title);
  if (titleGlobal.has(titleK)) {
    issues.push({ type: "dup_title", a: titleGlobal.get(titleK), b: c.case_id, title: c.title });
  } else titleGlobal.set(titleK, c.case_id);

  const fp = c.statements.map(norm).sort().join("|||");
  if (caseFingerprint.has(fp)) {
    issues.push({ type: "dup_full_case", a: caseFingerprint.get(fp), b: c.case_id });
  } else caseFingerprint.set(fp, c.case_id);

  for (let i = 0; i < 5; i++) {
    const k = norm(c.statements[i]);
    if (stmtGlobal.has(k)) {
      issues.push({
        type: "exact_stmt_dup",
        a: stmtGlobal.get(k),
        b: `${c.case_id}[${i}]`,
        s: c.statements[i].slice(0, 90),
      });
    } else stmtGlobal.set(k, `${c.case_id}[${i}]`);
  }
}

// --- cross-case near-duplicate statements (jaccard >= 0.82) ---
const stmtList = [];
for (const c of allCases) {
  for (let i = 0; i < 5; i++) {
    stmtList.push({ id: `${c.case_id}[${i}]`, sub: c.subsection, text: c.statements[i] });
  }
}
// bucket by first 3 tokens to limit comparisons
const buckets = new Map();
for (const item of stmtList) {
  const key = norm(item.text).split(" ").slice(0, 3).join(" ");
  if (!buckets.has(key)) buckets.set(key, []);
  buckets.get(key).push(item);
}
for (const bucket of buckets.values()) {
  if (bucket.length < 2) continue;
  for (let i = 0; i < bucket.length; i++) {
    for (let j = i + 1; j < bucket.length; j++) {
      const sim = jaccard(bucket[i].text, bucket[j].text);
      if (sim >= 0.82) {
        issues.push({
          type: "cross_near_stmt",
          sim: Number(sim.toFixed(2)),
          a: bucket[i].id,
          b: bucket[j].id,
          sa: bucket[i].text.slice(0, 80),
          sb: bucket[j].text.slice(0, 80),
        });
      }
    }
  }
}

// --- within-subsection near context dup ---
const bySub = new Map();
for (const c of allCases) {
  if (!bySub.has(c.subsection)) bySub.set(c.subsection, []);
  bySub.get(c.subsection).push(c);
}
for (const [sub, cases] of bySub) {
  for (let i = 0; i < cases.length; i++) {
    for (let j = i + 1; j < cases.length; j++) {
      const sim = jaccard(cases[i].context, cases[j].context);
      if (sim >= 0.85) {
        issues.push({
          type: "near_context",
          sub,
          sim: Number(sim.toFixed(2)),
          a: cases[i].case_id,
          b: cases[j].case_id,
        });
      }
    }
  }
}

// --- summary ---
const byType = {};
for (const x of issues) byType[x.type] = (byType[x.type] || 0) + 1;

console.log("Total cases:", allCases.length);
console.log("Issues:", issues.length);
console.log("By type:", byType);
console.log("\nSamples:");
for (const x of issues.slice(0, 60)) console.log(JSON.stringify(x));
if (issues.length > 60) console.log("… +" + (issues.length - 60) + " more");

fs.writeFileSync(
  "scripts/audit-ch4-ch5-report.json",
  JSON.stringify({ total: issues.length, byType, issues }, null, 2) + "\n",
);
console.log("\nWrote scripts/audit-ch4-ch5-report.json");

if (issues.length) process.exit(1);
console.log("\nFULL AUDIT PASS");
