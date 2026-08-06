/**
 * Deep audit for FC-style banks (ch2 + ch3 JSON).
 * Exact dups, near dups (jaccard), identical explanations in-case, style endings, banned phrases.
 */
import fs from "node:fs";

const files = [
  "src/data/economics-cases-ch2-subtopics.json",
  "src/data/economics-cases-ch3-subtopics.json",
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

let fail = 0;
for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log("SKIP missing", file);
    continue;
  }
  const cases = JSON.parse(fs.readFileSync(file, "utf8"));
  const issues = [];
  const stmtMap = new Map();

  for (const c of cases) {
    if (!/Evaluate the following economic assertions:\s*$/i.test(String(c.context).trim())) {
      issues.push({ type: "style_context", id: c.case_id, ctx: c.context?.slice(0, 100) });
    }
    if (/\bthe book\b|\(alt\s+|fuhrmann notes/i.test(JSON.stringify(c))) {
      issues.push({ type: "banned", id: c.case_id });
    }
    for (let i = 0; i < 5; i++) {
      const s = c.statements[i];
      const k = norm(s);
      if (stmtMap.has(k)) {
        issues.push({ type: "exact_dup", a: stmtMap.get(k), b: `${c.case_id}[${i}]`, s: s.slice(0, 100) });
      } else stmtMap.set(k, `${c.case_id}[${i}]`);
    }
    for (let i = 0; i < 5; i++) {
      for (let j = i + 1; j < 5; j++) {
        if (norm(c.tactical_explanations[i]) === norm(c.tactical_explanations[j])) {
          issues.push({ type: "same_expl", id: c.case_id, i, j });
        }
        const sim = jaccard(c.statements[i], c.statements[j]);
        if (sim >= 0.7) {
          issues.push({
            type: "near_stmt",
            id: c.case_id,
            i,
            j,
            sim: Number(sim.toFixed(2)),
            si: c.statements[i].slice(0, 90),
            sj: c.statements[j].slice(0, 90),
          });
        }
      }
    }
  }

  // cross-case near dups (expensive but ok): prefix 90
  const pref = new Map();
  for (const c of cases) {
    for (let i = 0; i < 5; i++) {
      const p = norm(c.statements[i]).slice(0, 90);
      if (pref.has(p)) {
        issues.push({ type: "near_prefix90", a: pref.get(p), b: `${c.case_id}[${i}]` });
      } else pref.set(p, `${c.case_id}[${i}]`);
    }
  }

  console.log("\n===", file, "cases", cases.length, "issues", issues.length);
  for (const x of issues.slice(0, 40)) console.log(JSON.stringify(x));
  if (issues.length > 40) console.log("… +" + (issues.length - 40) + " more");
  fail += issues.length;
}

if (fail) {
  console.error("\nAUDIT FAILED", fail);
  process.exit(1);
}
console.log("\nAUDIT PASS");
