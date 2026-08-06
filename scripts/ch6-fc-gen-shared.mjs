/**
 * Shared FC case assembler for Ch.6 generators.
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
    const isNumeric = /\d/.test(item[0]);
    // Theory stems may repeat across cases (PDF style); numeric claims stay unique.
    if (isNumeric && usedGlobal.has(item[0])) continue;
    if (localStmts.some((s) => jaccard(s, item[0]) >= threshold)) continue;
    if (isNumeric) usedGlobal.add(item[0]);
    cursorRef.i = (cursorRef.i + n + 1) % pool.length;
    return item;
  }
  for (let n = 0; n < pool.length; n++) {
    const item = pool[(cursorRef.i + n) % pool.length];
    const isNumeric = /\d/.test(item[0]);
    if (isNumeric && usedGlobal.has(item[0])) continue;
    if (localStmts.some((s) => jaccard(s, item[0]) >= threshold)) continue;
    if (isNumeric) usedGlobal.add(item[0]);
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
  const sceneSet = new Set(
    (sceneIndices || []).filter((i) => Number.isInteger(i) && i >= 0 && i < slots.length),
  );
  if (sceneSet.size < Math.min(8, Math.max(1, Math.floor(slots.length / 4)))) {
    // Only auto-fill SCENE slots when the generator explicitly opted in with some indices.
    // Empty sceneIndices ⇒ all THEORY contexts (avoids SCENE about a pharmacy + statements about a logistics firm).
    if ((sceneIndices || []).length > 0) {
      for (let i = 2; i < slots.length; i += 4) sceneSet.add(i);
    }
  }

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
      title: TITLES[idx % TITLES.length] ?? `Accounting Case ${idx + 1}`,
      context: ctxPool[idx % ctxPool.length],
      statements,
      answer_key: slot.answer_key,
      tactical_explanations,
      difficulty_level: slot.difficulty_level,
      tier: "full",
      half: slot.half ?? "text",
    };
  });
}

const ABBREV =
  /\b(EBIT|EBITDA|ROCE|ROE|EPS|WC|P&L|BS|IS|CF)\b/;

export function validateAndWrite(cases, slots, outPath) {
  const banned =
    /\b(the book|according to the book|\(alt|fuhrmann notes|tina|steve|at&s|t&s computer|gerstenmayer|world wildlife|greenpeace|red cross)\b/i;
  const hint =
    /\([^)]*(?:divided by|calculated as|defined as|cost of sales divided|equals|means)[^)]*\)/i;
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
    const blob = JSON.stringify(c);
    if (
      /\|?\s*Net change in cash and cash equivalents\s*\|/i.test(c.context) ||
      /\|?\s*Change in cash and cash equivalents\s*\|/i.test(c.context)
    ) {
      issues.push(`${c.case_id} pre-summed cash-flow total row`);
    }
    if (banned.test(blob)) issues.push(`${c.case_id} banned phrase: ${(blob.match(banned) || [])[0]}`);
    if (ABBREV.test(blob)) issues.push(`${c.case_id} abbreviation`);
    if (/\bon cash-flow extract\s+\d+/i.test(blob) || /\bextract\s+\d+\s+for a\b/i.test(blob)) {
      issues.push(`${c.case_id} meta extract label`);
    }
    // Orphan euro claims: money amount in statement but context has neither a table nor matching givens.
    const ctxHasTable = c.context.includes("|");
    for (let j = 0; j < 5; j++) {
      const expect = c.answer_key[j] ? "TRUE" : "FALSE";
      if (!c.tactical_explanations[j].startsWith(`${expect} —`))
        issues.push(`${c.case_id}[${j}] expl prefix`);
      if (hint.test(c.statements[j])) issues.push(`${c.case_id}[${j}] formula hint`);
      const stmt = c.statements[j];
      const claimsEuro = /\d[\d,]*/.test(stmt) && /euro|€/i.test(stmt);
      const selfContained =
        /costing|cost of|residual value|useful life|bought for|purchase price/i.test(stmt) ||
        /\(\d/.test(stmt); // e.g. borrowing (77000 euros) referencing printed figures
      if (claimsEuro && !ctxHasTable && !selfContained) {
        issues.push(`${c.case_id}[${j}] orphan euro amount without conditions`);
      }
      // Theory and classification may repeat (PDF style). Only exact full-string dups of long numeric claims are tracked when they look like pure euro quizzes without a table reference.
      const sn = stmt
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (claimsEuro && ctxHasTable) {
        // Table-backed claims: require uniqueness of the full statement text.
        if (stmtNorm.has(sn)) issues.push(`dup stmt ${stmtNorm.get(sn)} vs ${c.case_id}[${j}]`);
        else stmtNorm.set(sn, `${c.case_id}[${j}]`);
      } else if (claimsEuro && !ctxHasTable) {
        if (stmtNorm.has(sn)) issues.push(`dup stmt ${stmtNorm.get(sn)} vs ${c.case_id}[${j}]`);
        else stmtNorm.set(sn, `${c.case_id}[${j}]`);
      }
      for (let k = j + 1; k < 5; k++) {
        if (jaccard(c.statements[j], c.statements[k]) >= 0.78)
          issues.push(`${c.case_id} near-dup ${j}/${k}`);
      }
    }
  }

  if (issues.length) {
    console.error("VALIDATION FAIL", issues.slice(0, 40));
    throw new Error(`${issues.length} validation issues`);
  }
  fs.writeFileSync(outPath, JSON.stringify(cases, null, 2) + "\n");
  console.log("OK", cases.length, "→", outPath);
}
