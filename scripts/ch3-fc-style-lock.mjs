/** FC-STYLE-LOCK helpers for Ch3 part 3.4–3.6 */

export const FC_CONTEXT_SUFFIX = "Evaluate the following economic assertions:";
export const FORBIDDEN_NEON = /\b(automatically|never|zero|always)\b/i;
export const BANNED_META =
  /\bthe book\b|\baccording to the book\b|\bFuhrmann\b|\(\s*alt\s|\bCase review\b/i;

const THEORY_VERBS = /^(Analyze|Review|Consider how|Consider the|Synthesise|Match|Contrast|Compare|Define|Relate|Place)\b/i;
const SCENE_START =
  /^(A |An |Tina|Steve|AT&S|Bakery |Managers |Suppliers |Customers |Employees |Owners |Local |Governments |Conflicting |Environmental |Investors |Higher |Expansion |Regulators |Buyers |Government |Advertising |Two firms|Components |Customer |Staff |Public |Corporate |Limited |Policy |Compare |Steve |Place |Fair |Ignoring |Cost control|Success factors|Financial |Legal form|Market awareness|Costs and|Share value|Job security|Community |Greenwash |Real environmental|Stakeholder |Superficial|Profit |Different stakeholder|Environmental spending|Superficial eco|Ignoring market|Relate )/i;

export function cleanMeta(text) {
  return String(text)
    .replace(/\bFuhrmann Ch3\b/gi, "")
    .replace(/\bin Fuhrmann Ch3\b/gi, "")
    .replace(/\baccording to Fuhrmann Ch3\b/gi, "")
    .replace(/\bper Fuhrmann Ch3\b/gi, "")
    .replace(/\bthe chapter('s)?\b/gi, "the course")
    .replace(/\btextbook\b/gi, "course")
    .replace(/\bthe book\b/gi, "course material")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .replace(/\.\s*\./g, ".")
    .trim();
}

function sceneBody(body) {
  let b = body.trim();
  b = b.replace(/^tina and steve/i, "Tina and Steve").replace(/^tina/i, "Tina").replace(/^steve/i, "Steve");
  b = b.replace(
    /^(a|an) ([^,;]+?) (employs|has|reports|runs|serves|delivers|manufactures|sources|routes|assembles|imports|plans|considers|seeks|reviews|struggles|depends|relies|affects|expanded|invoices|handles|brands|pays|labels|argues|advertises|weighing|may|cannot|lose|builds|take|collect|expect|must|need|can|will|should|employs|shows|creates|opposes|processes|refurbishes|installs|bills|coordinates|monitors|plates|sells|delivers|carries|restricts|form|send|becomes|crosses|lists|place|contrast|match|synthesise|compare|define|relate)/i,
    "$1 $2 that $3",
  );
  b = b.replace(
    /^(tina and steve's [^,;]+?) (has|plan|run|seek|consider|affect|serve|depend|illustrate)/i,
    "$1, which $2",
  );
  return b.charAt(0).toLowerCase() + b.slice(1);
}

export function toFcContext(raw, life) {
  let s = String(raw).trim();
  if (s.endsWith(":")) s = s.slice(0, -1).trim();

  const semi = s.lastIndexOf(";");
  if (semi > 20 && /\b(assess|evaluate|synthesise|match|contrast|compare|place|define|relate)\b/i.test(s.slice(semi))) {
    s = s.slice(0, semi).trim();
  }

  s = s
    .replace(/^(Assess|Evaluate|Synthesise|Match|Contrast|Compare|Define|Relate|Place)\s+/i, "")
    .replace(/;\s*(assess|evaluate)[^;]*$/i, "")
    .trim();

  if (life) {
    if (!/^Consider\b/i.test(s)) {
      s = `Consider ${sceneBody(s)}`;
    }
  } else if (/^Review\b/i.test(s) || /^Analyze\b/i.test(s) || /^Consider how\b/i.test(s) || /^Consider the\b/i.test(s)) {
    // already academic stem
  } else if (/^(Synthesise|Match|Contrast|Compare|Define|Relate|Place)\b/i.test(s)) {
    s = `Review how to ${s.charAt(0).toLowerCase()}${s.slice(1)}`;
  } else {
    s = `Analyze ${s.charAt(0).toLowerCase()}${s.slice(1)}`;
  }

  s = s.replace(/\.$/, "").trim();
  if (!s.endsWith(FC_CONTEXT_SUFFIX)) {
    s = `${s}. ${FC_CONTEXT_SUFFIX}`;
  }
  return s;
}

/** Normalize digit/currency literals only — not spelt-out counts like ten or fifty */
export function numSynonymKey(s) {
  return s
    .toLowerCase()
    .replace(/€[\d.,]+[kmb]?/g, "#")
    .replace(/\b\d[\d.,]*\b/g, "#")
    .replace(/\s+/g, " ")
    .trim();
}

export function validateStyleLock(cases, label = "") {
  const errors = [];
  const globalStmts = new Map();

  if (cases.length !== 150) errors.push(`${label}Total cases ${cases.length} ≠ 150`);

  const bySub = {};
  for (const c of cases) {
    (bySub[c.subsection] ||= []).push(c);

    if (c.tier !== "full") errors.push(`${c.case_id}: tier must be full`);
    if (c.statements.length !== 5) errors.push(`${c.case_id}: need 5 statements`);

    const ctx = c.context.trim();
    if (!ctx.endsWith(FC_CONTEXT_SUFFIX)) {
      errors.push(`${c.case_id}: context must end with FC suffix`);
    }
    if (/^Evaluate claims about|^Evaluate:|^Assess:|^Assess claims|^Evaluate claims/i.test(ctx)) {
      errors.push(`${c.case_id}: forbidden context stub`);
    }

    const caseKeys = new Map();
    for (let i = 0; i < 5; i++) {
      const stmt = c.statements[i];
      const expl = c.tactical_explanations[i];
      const expect = c.answer_key[i] ? "TRUE —" : "FALSE —";

      if (!expl.startsWith(expect)) errors.push(`${c.case_id}[${i + 1}]: bad tactical prefix`);
      if (FORBIDDEN_NEON.test(stmt)) errors.push(`${c.case_id}[${i + 1}]: forbidden neon in statement`);
      if (BANNED_META.test(stmt) || BANNED_META.test(expl) || BANNED_META.test(c.title)) {
        errors.push(`${c.case_id}[${i + 1}]: banned meta phrase`);
      }

      const norm = stmt.trim().toLowerCase();
      if (globalStmts.has(norm)) {
        errors.push(`Duplicate statement: ${c.case_id} vs ${globalStmts.get(norm)}`);
      } else {
        globalStmts.set(norm, c.case_id);
      }

      const twin = numSynonymKey(stmt);
      if (caseKeys.has(twin)) {
        errors.push(`${c.case_id}: number synonym twin stmts ${caseKeys.get(twin)} & ${i + 1}`);
      } else {
        caseKeys.set(twin, i + 1);
      }
    }

    const explSet = new Set(c.tactical_explanations.map((e) => e.trim().toLowerCase()));
    if (explSet.size !== 5) errors.push(`${c.case_id}: duplicate explanations within case`);
  }

  for (const sub of ["3.4", "3.5", "3.6"]) {
    const list = bySub[sub] || [];
    if (list.length !== 50) errors.push(`${sub}: count ${list.length}`);
    for (let k = 1; k <= 5; k++) {
      const n = list.filter((c) => c.answer_key.filter(Boolean).length === k).length;
      if (n !== 10) errors.push(`${sub}: ${k}T count ${n} (want 10)`);
    }
  }

  return { errors, globalStmtCount: globalStmts.size, bySub };
}

export function applyStyleLock(caseObj) {
  const { life, ...rest } = caseObj;
  return {
    ...rest,
    context: toFcContext(rest.context, life),
    statements: rest.statements.map(cleanMeta),
    tactical_explanations: rest.tactical_explanations.map(cleanMeta),
    title: cleanMeta(rest.title),
  };
}
