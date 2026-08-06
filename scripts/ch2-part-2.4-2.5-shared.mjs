export const FC_SUFFIX = "Evaluate the following economic assertions:";

/** ~25% lived scenes among 50 cases → 13 per subsection */
export const LIVED_50 = new Set([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38]);

/** Shuffled: exactly 10× each true count for 50 cases */
export const TRUE_ORDER_50 = [
  2, 4, 1, 5, 3, 1, 3, 5, 2, 4, 4, 2, 1, 3, 5, 3, 5, 2, 4, 1, 5, 1, 4, 2, 3, 2, 3, 1, 5, 4,
  1, 4, 2, 5, 3, 3, 2, 5, 1, 4, 4, 3, 1, 5, 2, 2, 5, 4, 1, 3,
];

export const BANNED = [
  /\bthe book\b/i,
  /\baccording to the book\b/i,
  /\bFuhrmann\b/i,
  /\(alt\s/i,
];

export const FORBIDDEN_CTX = [
  /^Evaluate claims about/i,
  /^Evaluate:\s*$/i,
  /^Assess:\s*$/i,
];

export function pad(n) {
  return String(n).padStart(2, "0");
}

export function countTrues(key) {
  return key.filter(Boolean).length;
}

export function fixContext(ctx) {
  let t = String(ctx || "").trim();
  t = t.replace(/^Evaluate claims about/i, "Review");
  t = t.replace(/^Evaluate assertions about/i, "Analyze");
  if (t.endsWith(FC_SUFFIX)) return t;
  if (/Evaluate:\s*$/.test(t)) {
    return t.replace(/Evaluate:\s*$/, FC_SUFFIX);
  }
  if (/^(Evaluate|Analyze|Assess|Review)\s/i.test(t) && t.endsWith(":")) {
    return `${t} ${FC_SUFFIX}`;
  }
  if (!t.includes(FC_SUFFIX)) {
    return `${t.replace(/\.$/, "")}. ${FC_SUFFIX}`;
  }
  return t;
}

export function validatePart(cases, sub) {
  const errors = [];
  const subCases = cases.filter((c) => c.subsection === sub);
  if (subCases.length !== 50) errors.push(`${sub}: expected 50 got ${subCases.length}`);

  for (let i = 1; i <= 50; i++) {
    const id = `CASE ${sub}.${pad(i)}`;
    if (!subCases.find((c) => c.case_id === id)) errors.push(`Missing ${id}`);
  }

  for (const k of [1, 2, 3, 4, 5]) {
    const n = subCases.filter((c) => countTrues(c.answer_key) === k).length;
    if (n !== 10) errors.push(`${sub}: ${k}T count ${n} (want 10)`);
  }

  const stmts = new Map();
  for (const c of subCases) {
    if (c.tier !== "full") errors.push(`${c.case_id}: tier must be full`);
    if (c.statements.length !== 5) errors.push(`${c.case_id}: need 5 statements`);
    if (c.answer_key.length !== 5) errors.push(`${c.case_id}: need 5 answers`);
    if (c.tactical_explanations.length !== 5) errors.push(`${c.case_id}: need 5 explanations`);

    const blob = [c.context, c.title, ...c.statements, ...c.tactical_explanations].join(" ");
    for (const ban of BANNED) {
      if (ban.test(blob)) errors.push(`${c.case_id}: banned phrase ${ban}`);
    }
    for (const ban of FORBIDDEN_CTX) {
      if (ban.test(c.context)) errors.push(`${c.case_id}: forbidden context style`);
    }
    if (!c.context.trim().endsWith(FC_SUFFIX)) {
      errors.push(`${c.case_id}: context must end with FC suffix`);
    }

    for (let i = 0; i < 5; i++) {
      const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!String(c.tactical_explanations[i]).startsWith(pref)) {
        errors.push(`${c.case_id}[${i}]: explanation prefix`);
      }
      const fp = c.statements[i].trim().toLowerCase();
      if (stmts.has(fp)) errors.push(`Duplicate: ${c.case_id} <-> ${stmts.get(fp)}`);
      else stmts.set(fp, c.case_id);
    }
  }
  return errors;
}
