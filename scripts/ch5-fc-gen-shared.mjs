/**
 * Shared FC case assembler for Ch.5 generators.
 */
import fs from "node:fs";

export function tokens(s) {
  return new Set(
    String(s)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2),
  );
}

export function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function pickFrom(pool, cursorRef, localStmts, usedGlobal, threshold = 0.65) {
  for (let n = 0; n < pool.length; n++) {
    const item = pool[(cursorRef.i + n) % pool.length];
    if (usedGlobal.has(item[0])) continue;
    if (localStmts.some((s) => jaccard(s, item[0]) >= threshold)) continue;
    usedGlobal.add(item[0]);
    cursorRef.i = (cursorRef.i + n + 1) % pool.length;
    return item;
  }
  for (let n = 0; n < pool.length; n++) {
    const item = pool[(cursorRef.i + n) % pool.length];
    if (usedGlobal.has(item[0])) continue;
    usedGlobal.add(item[0]);
    cursorRef.i = (cursorRef.i + n + 1) % pool.length;
    return item;
  }
  throw new Error(`Ran out of unique statements (${localStmts.length} local, pool ${pool.length})`);
}

export function buildCases({
  subsection,
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
}) {
  const usedGlobal = new Set();
  const tCursor = { i: 0 };
  const fCursor = { i: 0 };
  const sceneSet = new Set(sceneIndices);

  return slots.map((slot, idx) => {
    const statements = [];
    const tactical_explanations = [];
    for (const t of slot.answer_key) {
      const [s, e] = t
        ? pickFrom(TRUE, tCursor, statements, usedGlobal)
        : pickFrom(FALSE, fCursor, statements, usedGlobal);
      statements.push(s);
      tactical_explanations.push(`${t ? "TRUE" : "FALSE"} — ${e}`);
    }
    const ctxPool = sceneSet.has(idx) ? SCENE : THEORY;
    return {
      subsection,
      case_id: slot.case_id,
      title: TITLES[idx] ?? `Marketing Case ${idx + 1}`,
      context: ctxPool[idx % ctxPool.length],
      statements,
      answer_key: slot.answer_key,
      tactical_explanations,
      difficulty_level: slot.difficulty_level,
      tier: "full",
    };
  });
}

export function validateAndWrite(cases, slots, outPath) {
  const banned =
    /\b(the book|according to the book|\(alt|fuhrmann notes|tina|steve|at&s|t&s computer|gerstenmayer|world wildlife|greenpeace|red cross)\b/i;
  const endRe = /Evaluate the following economic assertions:\s*$/i;
  const issues = [];
  const stmtNorm = new Map();

  if (cases.length !== slots.length) issues.push(`count ${cases.length} !== ${slots.length}`);

  for (let i = 0; i < slots.length; i++) {
    const c = cases[i];
    const s = slots[i];
    if (c.case_id !== s.case_id) issues.push(`${c.case_id} id mismatch`);
    if (JSON.stringify(c.answer_key) !== JSON.stringify(s.answer_key))
      issues.push(`${c.case_id} answer_key mismatch`);
    if (c.difficulty_level !== s.difficulty_level)
      issues.push(`${c.case_id} difficulty mismatch`);
    if (!endRe.test(c.context.trim()) || c.context.trim().length < 70)
      issues.push(`${c.case_id} bad context`);
    if (banned.test(JSON.stringify(c))) issues.push(`${c.case_id} banned phrase`);
    for (let j = 0; j < 5; j++) {
      const expect = c.answer_key[j] ? "TRUE" : "FALSE";
      if (!c.tactical_explanations[j].startsWith(`${expect} —`))
        issues.push(`${c.case_id}[${j}] expl prefix`);
      const sn = c.statements[j]
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (stmtNorm.has(sn)) issues.push(`dup stmt ${stmtNorm.get(sn)} vs ${c.case_id}[${j}]`);
      else stmtNorm.set(sn, `${c.case_id}[${j}]`);
      for (let k = j + 1; k < 5; k++) {
        if (jaccard(c.statements[j], c.statements[k]) >= 0.78)
          issues.push(`${c.case_id} near-dup ${j}/${k}`);
      }
    }
  }

  const trueCounts = {};
  const diffs = {};
  for (const s of slots) {
    trueCounts[s.trueCount] = (trueCounts[s.trueCount] || 0) + 1;
    diffs[s.difficulty_level] = (diffs[s.difficulty_level] || 0) + 1;
  }

  if (issues.length) {
    console.error("VALIDATION FAILED:", issues.length);
    for (const x of issues.slice(0, 40)) console.error(" ", x);
    process.exit(1);
  }

  fs.writeFileSync(outPath, JSON.stringify(cases, null, 2) + "\n");
  console.log("Wrote", outPath);
  console.log("Cases:", cases.length, "Unique statements:", stmtNorm.size);
  console.log("TRUE counts:", trueCounts, "Difficulty:", diffs);
}
