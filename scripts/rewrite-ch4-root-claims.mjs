#!/usr/bin/env node
/**
 * Rewrite ch4 statements from tactical_explanations only.
 * Dry format: For $eq$, the sum/product/count claim.
 * 50/50: even letters (A,C,E) → Vieta; odd (B,D) → solution count.
 */
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];

function parseBacktickArray(chunk, field) {
  const marker = `${field}: [`;
  const start = chunk.indexOf(marker);
  if (start === -1) return [];
  let i = start + marker.length;
  const items = [];
  while (i < chunk.length) {
    while (i < chunk.length && /[\s,]/.test(chunk[i])) i++;
    if (chunk[i] === "]") break;
    if (chunk[i] !== "`") break;
    i++;
    let val = "";
    while (i < chunk.length) {
      if (chunk[i] === "\\") {
        val += chunk[i++];
        if (i < chunk.length) val += chunk[i++];
        continue;
      }
      if (chunk[i] === "`") break;
      val += chunk[i++];
    }
    i++;
    items.push(val);
  }
  return items;
}

function parseTasks(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const tasks = [];
  const re = /id: `(math-4-\d+)`,[\s\S]*?(?=\n  \},\n  \{|\n  \},\n\]|$)/g;
  let m;
  while ((m = re.exec(src))) {
    const chunk = m[0];
    const ov = chunk.match(/solution_overview: `([^`]+)`/);
    tasks.push({
      id: chunk.match(/id: `(math-4-\d+)`/)[1],
      subsection: chunk.match(/subsection: `([^`]+)`/)[1],
      title: chunk.match(/title: `([^`]+)`/)?.[1] ?? "",
      chunkStart: m.index,
      chunk,
      overview: ov ? ov[1] : "",
      answer_key: [...chunk.match(/answer_key: \[(.*?)\]/s)[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]),
      tactical_explanations: parseBacktickArray(chunk, "tactical_explanations"),
    });
  }
  return { src, tasks };
}

function hasUnknown(eq) {
  if (/^P =/.test(eq)) return false;
  if (/\\ell|\\theta|\\alpha|\\beta/.test(eq)) return true;
  let s = eq.replace(/\\frac\{[^}]*\}\{[^}]*\}/g, "");
  s = s.replace(/\\[a-zA-Z]+/g, "");
  s = s.replace(/[0-9.+()^_{}\s|,\\\-=]/g, "");
  return /[a-zA-Z]/.test(s);
}

function isNumericCheck(eq) {
  const e = eq.replace(/\s/g, "");
  return (
    /^\\sqrt\{\d|^\\d+\\cdot\\d+|^\\d+\+\\d+=-?\\d+$|^\\d+\^\{2\}|\\neq|^-\\d+\\cdot\\d+|^\\Delta=\(/.test(e) ||
    (/^[^xts]{0,3}\\d+[^xts]*$/.test(e) && !hasUnknown(eq))
  );
}

function normalizeLatexEq(eq) {
  return eq.replace(/\u000C/g, "\\frac").replace(/\\\\([a-zA-Z])/g, "\\$1");
}

function isValidStudentEquation(eq) {
  eq = normalizeLatexEq(eq);
  if (!eq || !/=/.test(eq)) return false;
  if (!hasUnknown(eq)) return false;
  if (isNumericCheck(eq)) return false;
  const e = eq.replace(/\s/g, "");
  if (/^a=\\sqrt\{x|^b=\\sqrt\{x|^leta=/i.test(e)) return false;
  if (/^a=\\sqrt|^b=\\sqrt/.test(e)) return false;
  if (/^x=-?\d+$/.test(e) && !/^x=x[+-]/.test(e)) return false;
  if (/^x=-?\\frac\{/.test(e)) return false;
  if (/^x=\\frac\{[^}]+\}$/.test(e) && !/x\^|x\+|x-/.test(e)) return false;
  if (/>0$|\\text\{|\\or\{| or /.test(eq)) return false;
  if (/^\\Delta=/.test(e)) return false;
  if (/\\frac\{\(x\+3\)-x\}|\\frac\{\(x\+1\)\+\(x-1\)\}|\\frac\{\(x\^\{2\}-1\)\+2x\^\{2\}\}/.test(eq)) return false;
  if (/=\(4-2x\)\+\(5-x\)|=\(2x-4\)\+\(5-x\)/.test(e)) return false;
  if (/\\frac\{\(x \+ 1\) \+ \(x - 1\)\}\{\(x - 1\)\(x \+ 1\)\}/.test(eq)) return false;
  if (/^\|[^|]+\|[^=]*=\(.+\)\+\(.+\)/.test(eq.replace(/\s/g, ""))) return false;
  if (/^=\s*\\frac\{/.test(eq)) return false;
  if (/^\\frac\{1\}\{x\}-\\frac\{1\}\{x\+3\}=/.test(e)) return false;
  if (/=3x\^\{2\}\+3x-6$/.test(e) && /\+x\^\{2\}-x-6=/.test(e)) return false;
  if (/^\\sqrt\{x\}=\\frac\{7\}\{3\}$/.test(e)) return false;
  if (/^0=x\^\{2\}-x-3$/.test(e) && /2x\+1=x\^\{2\}/.test(e)) return false;
  if (/^3-2x=x\+4$|^3-2x=-x-4$/.test(e)) return false;
  if (/^\\frac\{1\}\{x\}\+\\frac\{2x\}\{x\^\{2\}-1\}=\\frac\{\(x\^\{2\}-1\)\+2x\^\{2\}\}/.test(e)) return false;
  if (/\\log_a x=c|^9-3x=9$|^x\+1=9$/.test(e)) return false;
  if (/^u=|^u>|\\bu\\b|u\^|u=e\^|u=2\^|u=2x|^f'\(x\)|f'\(/.test(e)) return false;
  const eqNoDelim = eq.replace(/\\left/g, "").replace(/\\right/g, "");
  if (/\\ge(?:[^a-zA-Z]|$)|\\le(?:[^a-zA-Z]|$)|\\geq|\\leq|(?<![\\a-zA-Z])>(?![=])|(?<![\\a-zA-Z])<(?![=])/.test(eqNoDelim) && !/\\lvert/.test(eq))
    return false;
  if (/^x=\d|^x=\pm|^x=\\pm|^n=\d+$/.test(e)) return false;
  if (/=\d+\^[^=]+=\d+/.test(e)) return false;
  if (/^x-\d+>0|^2x-\d+>0|^x>\d+$/.test(e)) return false;
  if (/\\text\{/.test(eq)) return false;
  if (/^x=x$/.test(e)) return false;
  if (/\(x\+y\)\^\{2\}=x\^\{2\}\+2xy\+y\^\{2\}/.test(e)) return false;
  if (/=x\^\{2\}\+2xy\+y\^\{2\}/.test(e)) return false;
  return true;
}

function tsEscape(s) {
  return s.replace(/\\/g, "\\\\");
}

/** Escape for writing into TS template literals on disk (\\frac in file → runtime \\frac). */
function tsFileEscape(s) {
  return s.replace(/\\/g, "\\\\").replace(/\u000C/g, "\\\\frac");
}

function extractBlockEquations(text) {
  const eqs = [];
  for (const m of text.matchAll(/\$\$([^$]+)\$\$/g)) {
    eqs.push(m[1].trim().replace(/\s+/g, " "));
  }
  return eqs;
}

function detectSubstitution(t) {
  const m = t.match(/(?:Substitute|substitution|Let|set) \$u = (e\^x|2\^x|2x - \d+)(?: > 0)?\$/i);
  if (!m) return null;
  const raw = m[1].replace(/\s/g, "");
  if (raw === "e^x") return { kind: "e^x" };
  if (raw === "2^x") return { kind: "2^x" };
  if (/^2x-\d+$/.test(raw)) return { kind: "2x-k", k: raw.slice(3) };
  return null;
}

function convertUeqToX(eq, sub) {
  if (!sub) return eq;
  let r = eq;
  if (sub.kind === "e^x") {
    r = r.replace(/u - \\frac\{(\d+)\}\{u\}/g, (_, n) => `e^x - ${n}e^{-x}`);
    r = r.replace(/u \+ \\frac\{(\d+)\}\{u\}/g, (_, n) => `e^x + ${n}e^{-x}`);
    r = r.replace(/\\frac\{(\d+)\}\{u\}/g, (_, n) => `${n}e^{-x}`);
    r = r.replace(/\\frac\{1\}\{u\}/g, "e^{-x}");
    r = r.replace(/(\d)u\^2/g, (_, n) => `${n}e^{2x}`);
    r = r.replace(/u\^2/g, "e^{2x}");
    r = r.replace(/(\d)u/g, (_, n) => `${n}e^x`);
    r = r.replace(/\bu\b/g, "e^x");
  } else if (sub.kind === "2^x") {
    r = r.replace(/(\d)u \+ \\frac\{1\}\{u\}/g, (_, n) => `${n} \\cdot 2^x + 2^{-x}`);
    r = r.replace(/u - \\frac\{(\d+)\}\{u\}/g, (_, n) => `2^x - ${n} \\cdot 2^{-x}`);
    r = r.replace(/\\frac\{(\d+)\}\{u\}/g, (_, n) => `${n} \\cdot 2^{-x}`);
    r = r.replace(/\\frac\{1\}\{u\}/g, "2^{-x}");
    r = r.replace(/(\d)u\^2/g, (_, n) => `${n} \\cdot 4^x`);
    r = r.replace(/u\^2/g, "4^x");
    r = r.replace(/(\d)u/g, (_, n) => `${n} \\cdot 2^x`);
    r = r.replace(/\bu\b/g, "2^x");
  } else if (sub.kind === "2x-k") {
    r = r.replace(/e\^u/g, `e^{2x-${sub.k}}`);
  }
  return r.replace(/\s+/g, " ").trim();
}

function unwrapSubstitution(t) {
  const sub = detectSubstitution(t);
  if (!sub) return null;
  for (const eq of extractBlockEquations(t)) {
    if (!/\bu\b|u\^2|\\frac\{[^}]*\}\{u\}|e\^u/.test(eq)) continue;
    const converted = convertUeqToX(eq, sub);
    if (isValidStudentEquation(converted)) return converted;
  }
  return null;
}

function inferFromCalculus(t) {
  const fm = t.match(/Let \$f\(x\) = ([^$]+)\$/);
  if (fm) {
    const body = fm[1].trim();
    if (/[xn]/.test(body)) return `${body} = 0`;
  }
  return null;
}

function inferTranscendental(t) {
  if (/e\^x - x|e\^x = x/i.test(t)) return "e^x - x = 0";
  if (/\\ln x \+ x - 1|ln x \+ x - 1/i.test(t)) return "\\ln x + x - 1 = 0";
  return null;
}

function inferWordEq(t) {
  if (/smallest of the three consecutive integers be \$n\$/i.test(t))
    return "n + (n + 1) + (n + 2) = 42";
  if (/Split \$30\$ into two parts where one part is \$4\$ more/i.test(t)) return "x + (x + 4) = 30";
  if (/Three times a number, minus \$5\$, equals \$16\$/i.test(t)) return "3x - 5 = 16";
  if (/Losing one-quarter leaves three-quarters.*\$20\$ litres remain/i.test(t)) return "\\frac{3}{4}x - 10 = 20";
  if (/width is \$4\$ cm and the length is \$3\$ cm more than the width/i.test(t))
    return "2(x + (x + 3)) = 22";
  if (/longer side is \$3\$ cm more than the shorter side.*perimeter is \$22\$/i.test(t))
    return "2(x + (x + 3)) = 22";
  if (/Time on the road is distance divided by average speed/i.test(t)) return "64t = 112";
  if (/One litre of \$8/i.test(t) && /concentration should be \$5/i.test(t))
    return "\\frac{0.08}{1 + w} = 0.05";
  if (/Equal logs with the same base/i.test(t)) {
    for (const eq of extractBlockEquations(t)) {
      if (/x \+ \d+ = \d*x [+-]/.test(eq) && isValidStudentEquation(eq)) return eq;
    }
    return "\\log_3(x + 4) = \\log_3(2x - 1)";
  }
  const iw = t.match(/In words:([^.\n]+)/i);
  if (iw) {
    const w = iw[1];
    const tm = w.match(/twice the original price, plus \$6\$, equals \$14\$/i);
    if (tm) return "2x + 6 = 14";
    const bm = w.match(/half of the original bill minus \$7\$ equals \$4\$/i);
    if (bm) return "\\frac{x - 7}{2} = 4";
  }
  return null;
}

function inferFromRootsOf(t) {
  const m = t.match(/roots of \$(t\^\{2\}[^$]+= 0)\$/);
  if (m) return m[1].replace(/\s+/g, " ");
  return null;
}

function inferEqualLogs(t) {
  const m = t.match(/Equal (?:base-\$?\d+\$? |natural )?logs[^$]*\$\\log(?:_\{?\d+\}?)?\(([^)]+)\) = \\log(?:_\{?\d+\}?)?\(([^)]+)\)/);
  if (m) return `\\log(${m[1]}) = \\log(${m[2]})`;
  return null;
}

function extractEquations(text) {
  const eqs = [];
  for (const m of text.matchAll(/\$\$([^$]+)\$\$/g)) {
    const t = m[1].trim().replace(/\s+/g, " ");
    if (/=/.test(t)) eqs.push(t);
  }
  for (const m of text.matchAll(/\$([^$]+)\$/g)) {
    const t = m[1].trim();
    if (/=/.test(t) && t.length > 3) eqs.push(t);
  }
  return [...new Set(eqs)];
}

function fmtSqrtInner(offset) {
  const o = offset.replace(/\s/g, "");
  if (o.startsWith("-")) return `- ${o.slice(1)}`;
  if (o.startsWith("+")) return `+ ${o.slice(1)}`;
  return `+ ${o}`;
}

function normalizeTex(text) {
  return text.replace(/\\\\/g, "\\");
}

function buildSqrtSumFromLet(exp) {
  const t = normalizeTex(exp);
  const m = t.match(
    /Let \$a = \\sqrt\{x ([+-]\s*\d+)\}\$ and \$b = \\sqrt\{x ([+-]\s*\d+)\}\$, so \$a \+ b = (\d+)/
  );
  if (m) {
    return `\\sqrt{x ${fmtSqrtInner(m[1])}} + \\sqrt{x ${fmtSqrtInner(m[2])}} = ${m[3]}`;
  }
  return null;
}

function inferAbsFromSplit(exp) {
  const t = normalizeTex(exp);
  if (!/Split the absolute values|splits into two cases|First case,/i.test(t)) return null;
  const cases = extractEquations(t).filter((e) => !/\\lvert|\\Delta|^x =/.test(e));
  const byLhs = new Map();
  for (const c of cases) {
    const idx = c.indexOf("=");
    if (idx < 0) continue;
    const lhs = c.slice(0, idx).trim();
    const rhs = c.slice(idx + 1).trim();
    if (!/[x]/.test(lhs)) continue;
    if (!byLhs.has(lhs)) byLhs.set(lhs, []);
    byLhs.get(lhs).push(rhs);
  }
  for (const [lhs, rhsList] of byLhs) {
    if (rhsList.length >= 2) {
      return `\\lvert ${lhs} \\rvert = \\lvert ${rhsList[0]} \\rvert`;
    }
  }
  return null;
}

function inferAbsPostsEq(exp) {
  const t = normalizeTex(exp);
  if (!/Between the posts|kilometre-post|Between \$-?\d/i.test(t)) return null;
  let m = t.match(/Between \$x = (\d+)\$ and \$x = (\d+)\$\.?/);
  if (m) return `\\lvert x - ${m[1]} \\rvert + \\lvert x - ${m[2]} \\rvert = 6`;
  m = t.match(/Between \$(-?\d+)\$ and \$(\d+)\$ the sum is constantly \$(\d+)\$/);
  if (m) return `\\lvert x + ${m[1].replace("-", "")} \\rvert + \\lvert x - ${m[2]} \\rvert = ${m[3]}`.replace("+ -", "- ");
  if (/Between the posts|kilometre-post/i.test(t)) return `\\lvert x - 1 \\rvert + \\lvert x - 7 \\rvert = 6`;
  return null;
}

function inferAbsSumEq(exp) {
  const t = normalizeTex(exp);
  if (!/Breakpoints are/i.test(t)) return null;
  const m = t.match(/Breakpoints are \$x = (\d+)\$ and \$x = (\d+)\$\.?/);
  if (!m) return null;
  const hasNine = /x \+ 1 = 9|= 9 - 3x|=\s*9\b/.test(t);
  const rhs = hasNine ? "9" : "6";
  if (m[1] === "2" && m[2] === "5") return `\\lvert 2x - 4 \\rvert + \\lvert x - 5 \\rvert = ${rhs}`;
  return null;
}

function inferFractionEq(exp) {
  const t = normalizeTex(exp);
  const m = t.match(/Set equal to \$\\frac\{(\d+)\}\{(\d+)\}\$/);
  if (!m) return null;
  if (/\\frac\{3\}\{x\(x \+ 3\)\}/.test(t)) {
    return `\\frac{3}{x(x + 3)} = \\frac{${m[1]}}{${m[2]}}`;
  }
  const after = t.split(/Set equal to \$\\frac\{\d+\}\{\d+\}\$/)[1] || t;
  const eqm = after.match(/\$\$([^$]+)\$\$/);
  if (eqm) {
    const eq = eqm[1].trim().replace(/\s+/g, " ");
    if (/= \\frac\{/.test(eq) && isValidStudentEquation(eq)) return eq;
  }
  const main = extractEquations(t).find(
    (e) =>
      /= \\frac\{\d+\}\{\d+\}$/.test(e) &&
      /\\frac\{3x\^\{2\}|\\frac\{3\}\{x\(x/.test(e) &&
      !/\\frac\{\([^)]+\) \+/.test(e)
  );
  return main || null;
}

function normalizeChainedEq(eq) {
  const parts = eq.split("=").map((s) => s.trim());
  if (parts.length <= 2) return eq;
  return `${parts[0]} = ${parts[parts.length - 1]}`;
}

function inferNegativeExp(t) {
  if (/Negative one is outside|cannot equal \$-1|equal \$-1/i.test(t) && /e\^x/i.test(t)) return "e^x = -1";
  if (/Zero is not in the range of \$e\^x\$|e\^x = 0/i.test(t)) return "e^x = 0";
  if (/cannot equal \$-8/i.test(t) && /2\^x/i.test(t)) return "2^x = -8";
  if (/cannot equal \$-1/i.test(t) && /5\^x/i.test(t)) return "5^x = -1";
  return null;
}

function inferDomainLogEq(t) {
  if (/Matching arguments gives \$5 - x = 2/i.test(t)) return "\\ln(5-x) = \\ln 2";
  if (/argument \$x - 3\$ must be positive before \$\\log_2\$/i.test(t) && /Solving gives \$x = 5\$/i.test(t))
    return "\\log_2(x-3) = 1";
  if (/argument \$x - 4\$ must be positive before \$\\log_2\$/i.test(t)) return "\\log_2(x-4) = 1";
  if (/argument \$x - 3\$ must be positive/i.test(t) && /Any value with \$x \\le 3\$/i.test(t))
    return "\\log(x-3) = 1";
  if (/Arguments require \$x > 3\$/i.test(t) && /x - 1 > 0/i.test(t)) return "\\log((x-1)(x-3)) = 1";
  if (/Both factors must be positive/i.test(t) && /x > 0/i.test(t) && /x - 1 > 0/i.test(t)) return "\\log(x(x-1)) = 1";
  if (/Both arguments must be positive/i.test(t) && /x > 0/i.test(t) && /x - 1 > 0/i.test(t)) return "\\log(x(x-1)) = 1";
  if (/Convert to exponential form with \$x > 0\$/i.test(t) && /9\^\{1\/2\}/i.test(t)) return "\\log_9 x = \\frac{1}{2}";
  return null;
}

function inferImpossibleExp(exp) {
  const t = normalizeTex(exp);
  const neg = t.match(/cannot equal \$-(\d+)\$/);
  if (!neg) return null;
  const baseM = t.match(/value (\d+)\^x is strictly positive/);
  if (baseM) return `${baseM[1]}^x = -${neg[1]}`;
  if (/2\^x/.test(t)) return `2^x = -${neg[1]}`;
  if (/5\^x/.test(t)) return `5^x = -${neg[1]}`;
  return null;
}

function inferFromLet(t) {
  const letMatch = t.match(/Let \$([a-z_][a-z0-9_]*)\$ be/i);
  if (!letMatch) return null;
  const v = letMatch[1];
  for (const eq of extractBlockEquations(t)) {
    if (new RegExp(`\\b${v}\\b`).test(eq) && isValidStudentEquation(eq)) return eq;
  }
  return null;
}

function pickPrimaryEq(exp, overview = "", title = "") {
  const t = normalizeTex(exp);

  const builders = [
    buildSqrtSumFromLet,
    unwrapSubstitution,
    inferFromCalculus,
    inferTranscendental,
    inferFromLet,
    inferWordEq,
    inferFromRootsOf,
    inferEqualLogs,
    inferAbsFromSplit,
    inferAbsPostsEq,
    inferAbsSumEq,
    inferFractionEq,
    inferNegativeExp,
    inferDomainLogEq,
    inferImpossibleExp,
  ];
  for (const fn of builders) {
    const r = fn(t);
    if (r && isValidStudentEquation(r)) return r;
  }

  for (const eq of extractBlockEquations(t)) {
    const normalized = normalizeChainedEq(eq);
    if (isValidStudentEquation(normalized)) return normalized;
    if (isValidStudentEquation(eq)) return eq;
  }

  const inline = extractEquations(t).filter(isValidStudentEquation);
  inline.sort((a, b) => scoreEquation(b) - scoreEquation(a));
  return inline[0] || null;
}

function scoreEquation(e) {
  return (
    (/\\sqrt\{x [+-] \d+\} \+ \\sqrt\{x/.test(e) ? 12 : 0) +
    (/e\^\{2x\}|4\^x/.test(e) ? 11 : 0) +
    (/\\sqrt\{x \+ \d+\} = \d+ \+ \\sqrt\{x/.test(e) ? 11 : 0) +
    (/\\frac\{3\}\{x\(x \+ 3\)\}/.test(e) ? 11 : 0) +
    (/\\frac\{3x\^\{2\}/.test(e) ? 10 : 0) +
    (/\\lvert.*\\lvert/.test(e) ? 10 : 0) +
    (/\\left\\\(\s*\\frac/.test(e) ? 9 : 0) +
    (/= 32$|= -8$|= -1$/.test(e) ? 9 : 0) +
    (/\\sqrt\{x \+ \d+\}/.test(e) ? 9 : 0) +
    (/\\sqrt\{2x|\\sqrt\{x \+/.test(e) ? 8 : 0) +
    (/2\^x|3\^x|5\^x|\\log_3|\\log_2|\\ln x/.test(e) ? 7 : 0) +
    (/x\^\{2\}|\\frac\{[^}]*x/.test(e) ? 6 : 0) +
    (/[^a-z]n[^a-z]/.test(e) ? 5 : 0) +
    (/2x|3x|5x/.test(e) ? 4 : 0) +
    e.length -
    (/^0 = x\^\{2\}/.test(e) ? 3 : 0) -
    (/= 2\^5$/.test(e) ? 4 : 0) -
    (/^x \+ \d+ = \d+ \+ 4\\sqrt/.test(e) ? 8 : 0) -
    (/^\\Delta =/.test(e) ? 5 : 0)
  );
}

function parseRoots(exp) {
  const roots = new Set();
  for (const m of exp.matchAll(/\$\$x = (-?\d+(?:\.\d+)?)\$\$/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/Then \$x = (-?\d+(?:\.\d+)?) or \$x = (-?\d+(?:\.\d+)?)/g)) {
    roots.add(parseFloat(m[1]));
    roots.add(parseFloat(m[2]));
  }
  for (const m of exp.matchAll(/giving \$x = (-?\d+(?:\.\d+)?)/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/The isolated solution is \$x = (-?\d+(?:\.\d+)?)/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/That \$(-?\d+(?:\.\d+)?)\$ is the (?:original|number|change|length|wage|bill|price|mass|amount|starting|side|solution|value|capacity|perimeter|middle|isolated|unique|recovered)/gi)) {
    roots.add(parseFloat(m[1]));
  }
  for (const m of exp.matchAll(/middle integer is \$n \+ 1 = (-?\d+)/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/unique real solution is \$x = (-?\d+(?:\.\d+)?)/gi)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/recovered value is \$(-?\d+(?:\.\d+)?)/gi)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/so \$x = (-?\d+(?:\.\d+)?)/gi)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/\$\$n = (-?\d+(?:\.\d+)?)\$\$/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/Outside, \$x < \d+ gives \$x = (-?\d+) and \$x > \d+ gives \$x = (-?\d+)/g)) {
    roots.add(parseFloat(m[1]));
    roots.add(parseFloat(m[2]));
  }
  for (const m of exp.matchAll(/\$\$x = \\frac\{[^}]+\} \\pm \\sqrt\{[^}]+\}\}\{2\}\$\$/g)) {
    /* keep quadratic roots from meta/disc instead */
  }
  return [...roots].filter((v) => !Number.isNaN(v) && Math.abs(v) < 5000);
}

function meta(exp) {
  const noReal =
    /no real (?:solution|root)|zero real solution|cannot equal \$-|not in the range|A positive output cannot|cannot be reached|no admissible|has no real|There are zero real|contradiction|never true|which is never true|\\Delta = -|\$3 = 5\$|This is impossible|not \$18\$/i.test(
      exp
    );
  const twoDistinct =
    /two distinct real|exactly two real solution|two different real|Those are two distinct|two branches|four different real|four real solution|exactly two admissible|two distinct integer|two real numbers|two real roots|two solutions|So there are two|there are two real/i.test(
      exp
    );
  const repeated = /repeated real root|double root|\\Delta = 0|exactly one real solution, a double|\(x - \d+\)\^\{2\}/i.test(exp);
  const identity = /Every real \$x\$ satisfies|Every real number|identity|infinitely many solution|Every \$x\$ works|Every real \$x\$ works|Every real \$x\$ satisfies it/i.test(exp);
  const contradiction =
    (/never true|contradiction|\$\$0 = 1\$\$|\$\$3 = 5\$\$|\$\$2 = -1\$\$|which is never true/i.test(exp) ||
      (/no real solution/i.test(exp) && !/not none/i.test(exp))) &&
    !identity;
  const roots = parseRoots(exp);
  const discM = exp.match(/\\Delta = (-?\d+(?:\.\d+)?)/);
  const discriminant = discM ? parseFloat(discM[1]) : null;
  return { noReal, twoDistinct, repeated, identity, contradiction, roots, discriminant };
}

function fmt(n) {
  if (!Number.isFinite(n)) return "$0$";
  if (Number.isInteger(n)) return `$${n}$`;
  if (Math.abs(n - 0.125) < 1e-9) return `$\\frac{1}{8}$`;
  if (Math.abs(Math.abs(n) - 49 / 9) < 1e-6) return `$\\frac{49}{9}$`;
  if (Math.abs(n + 1 / 3) < 1e-6) return `$-\\frac{1}{3}$`;
  return `$${n}$`;
}

function wrongVal(v) {
  if (v === 0) return 2;
  const w = v + (Math.abs(v) % 3 === 0 ? 2 : 3);
  return w === v ? v + 5 : w;
}

function quadFromEq(eq) {
  const e = eq.replace(/\s/g, "");
  let m = e.match(/x\^\{2\}([+-]\d+)x([+-]\d+)=0/);
  if (m) return { a: 1, b: parseInt(m[1], 10), c: parseInt(m[2], 10) };
  m = e.match(/x\^\{2\}([+-]\d+)x=0/);
  if (m) return { a: 1, b: parseInt(m[1], 10), c: 0 };
  m = e.match(/x\^\{2\}=(-?\d+)/);
  if (m) return { a: 1, b: 0, c: -parseInt(m[1], 10) };
  m = e.match(/(\d+)x\^\{2\}([+-]\d+)x([+-]\d+)=0/);
  if (m) return { a: parseInt(m[1], 10), b: parseInt(m[2], 10), c: parseInt(m[3], 10) };
  m = e.match(/0=x\^\{2\}([+-]\d+)x([+-]\d+)/);
  if (m) return { a: 1, b: parseInt(m[1], 10), c: parseInt(m[2], 10) };
  m = e.match(/0=x\^\{2\}-x-3/);
  if (m) return { a: 1, b: -1, c: -3 };
  m = e.match(/0=x\^\{2\}\+3x-12/);
  if (m) return { a: 1, b: 3, c: -12 };
  m = e.match(/x\^\{2\}-4x-5=0/);
  if (m) return { a: 1, b: -4, c: -5 };
  return null;
}

function vieta(q) {
  const sum = -q.b / q.a;
  const product = q.c / q.a;
  const disc = q.b * q.b - 4 * q.a * q.c;
  let r1 = null;
  let r2 = null;
  if (disc >= 0) {
    const r = Math.sqrt(disc);
    r1 = (-q.b + r) / (2 * q.a);
    r2 = (-q.b - r) / (2 * q.a);
  }
  return { sum, product, disc, r1, r2 };
}

function dryEq(eq, claim) {
  return `For $${tsEscape(eq)}$, ${claim}.`;
}

function countSingle(isTrue, seed) {
  const t = [
    "the equation has exactly one admissible real solution",
    "the equation has exactly one real solution",
    "exactly one admissible root satisfies the equation",
  ];
  const f = [
    "the equation has no admissible real solution",
    "the equation has two distinct admissible real solutions",
    "the equation has no real solution",
  ];
  return (isTrue ? t : f)[seed % 3];
}

function countDouble(isTrue, seed) {
  const t = [
    "the equation has two distinct real solutions",
    "the equation admits two distinct real roots",
    "exactly two admissible roots satisfy the equation",
  ];
  const f = [
    "the equation has exactly one real solution",
    "the equation has no real solution",
    "exactly one admissible root satisfies the equation",
  ];
  return (isTrue ? t : f)[seed % 3];
}

function countNone(isTrue, seed) {
  const t = [
    "the equation has no real solution",
    "the equation has no admissible real solution",
    "no real root satisfies the equation",
  ];
  const f = [
    "the equation has exactly one real solution",
    "the equation has two distinct real solutions",
    "exactly one admissible root satisfies the equation",
  ];
  return (isTrue ? t : f)[seed % 3];
}

function vietaSingle(isTrue, s, seed) {
  const t = [
    `the sum of all admissible roots equals ${fmt(s)}`,
    `the solutions add up to ${fmt(s)}`,
    `the product of all admissible roots equals ${fmt(s)}`,
    `multiplying all admissible roots gives ${fmt(s)}`,
  ];
  const f = [
    `the sum of all admissible roots equals ${fmt(wrongVal(s))}`,
    `the solutions add up to ${fmt(wrongVal(s))}`,
    `the product of all admissible roots equals ${fmt(wrongVal(Math.round(s) || 1))}`,
    `multiplying all admissible roots gives ${fmt(wrongVal(Math.round(s) || 1))}`,
  ];
  const pool = s === 0 ? (isTrue ? t.slice(0, 2) : f.slice(0, 2)) : isTrue ? t : f;
  return pool[seed % pool.length];
}

function vietaDouble(isTrue, sum, prod, r1, r2, seed) {
  const [a, b] = [r1, r2].sort((x, y) => x - y);
  const t = [
    `the two roots sum to ${fmt(sum)}`,
    `the roots add up to ${fmt(sum)}`,
    `the product of the roots equals ${fmt(prod)}`,
    `the roots multiply to ${fmt(prod)}`,
    `the larger root exceeds the smaller by ${fmt(b - a)}`,
  ];
  const f = [
    `the two roots sum to ${fmt(wrongVal(Math.round(sum)))}`,
    `the product of the roots equals ${fmt(wrongVal(Math.round(prod)))}`,
    `the larger root exceeds the smaller by ${fmt(b - a + 2)}`,
    `the sum of the solutions equals ${fmt(wrongVal(Math.round(sum)))}`,
    `multiplying the roots gives ${fmt(wrongVal(Math.round(prod)))}`,
  ];
  return (isTrue ? t : f)[seed % (isTrue ? 5 : 5)];
}

function vietaNone(isTrue, disc, seed) {
  if (disc != null && disc < 0) {
    const t = [`the discriminant equals ${fmt(disc)}`, `the discriminant is negative`];
    const f = [`the discriminant equals ${fmt(wrongVal(Math.round(disc)))}`, `the discriminant is positive`];
    return (isTrue ? t : f)[seed % 2];
  }
  return countNone(isTrue, seed);
}

function pickSingleClaim(isTrue, s, seed, useVieta) {
  if (!useVieta) return countSingle(isTrue, seed);
  return vietaSingle(isTrue, s, seed);
}

function pickDoubleClaim(isTrue, sum, prod, r1, r2, seed, useVieta) {
  return useVieta ? vietaDouble(isTrue, sum, prod, r1, r2, seed) : countDouble(isTrue, seed);
}

function pickNoneClaim(isTrue, disc, seed, useVieta) {
  return useVieta && disc != null ? vietaNone(isTrue, disc, seed) : countNone(isTrue, seed);
}

function specialStatement(exp, isTrue, eq, seed, useVieta) {
  if (/\$5\^\{2\} - 4\^\{2\}\$|\$5\^{2} - 4\^{2}\$|5\^2 - 4\^2/.test(exp)) {
    return isTrue ? `$5^{2} - 4^{2}$ equals $9$.` : `$5^{2} - 4^{2}$ equals $7$.`;
  }
  if (/side is \$7\$ cm|s = 7|area \$49/i.test(exp) && /49/.test(exp)) {
    return isTrue
      ? `A square of area $49$ m$^{2}$ has side length $7$ m.`
      : `A square of area $49$ m$^{2}$ has side length $8$ m.`;
  }
  if (/Successive percentage factors multiply|1\.20.*0\.90.*0\.98/i.test(exp)) {
    return isTrue
      ? `For $1.20 \\cdot 0.90 \\cdot 0.98 = 1.0584$, the customer pays $5.84\\%$ more than the original list.`
      : `For $1.20 \\cdot 0.90 \\cdot 0.98 = 1.0584$, the customer pays less than $4\\%$ more than the original list.`;
  }
  if (/Two successive \$10/i.test(exp) && /2400/.test(exp)) {
    return isTrue
      ? `For $2400 \\cdot 1.10 \\cdot 1.10 = 2904$, the salary after two $10\\%$ raises is $2904$ EUR.`
      : `For $2400 \\cdot 1.10 \\cdot 1.10 = 2904$, the salary after two $10\\%$ raises is $2800$ EUR.`;
  }
  if (/A \$25.*rise followed by a \$25.*fall/i.test(exp)) {
    return isTrue
      ? `For $1.25 \\cdot 0.75 = 0.9375$, a $25\\%$ rise followed by a $25\\%$ fall leaves $93.75\\%$ of the original.`
      : `For $1.25 \\cdot 0.75 = 0.9375$, a $25\\%$ rise followed by a $25\\%$ fall leaves the full original value.`;
  }
  if (/area is \$13|s\^{2} = 13/i.test(exp)) {
    return isTrue
      ? `A square of area $13$ m$^{2}$ has side length greater than $3$ m.`
      : `A square of area $13$ m$^{2}$ has side length less than $3$ m.`;
  }
  if (/side \$4\$ m|4\^{2} = 16|area \$16/i.test(exp) && /16/.test(exp) && /square/i.test(exp)) {
    return isTrue ? `A square with side $4$ m has area $16$ m$^{2}$.` : `A square with side $4$ m has area $15$ m$^{2}$.`;
  }
  if (/x\^{2} = a with \$a > 0\$|equation \$x\^{2} = a\$ with \$a > 0\$/i.test(exp)) {
    return isTrue
      ? `If $x^{2} = a$ with $a > 0$, the two real roots have opposite signs.`
      : `If $x^{2} = a$ with $a > 0$, the two real roots have the same sign.`;
  }
  if (eq && /x\^{2} = 9/.test(eq)) {
    return isTrue
      ? `For $x^{2} = 9$, the sum of the two real roots equals zero.`
      : `For $x^{2} = 9$, the sum of the two real roots equals $3$.`;
  }
  if (/\\$0 = 1\\$|x = x \+ 1/.test(exp)) {
    const ceq = eq || "0 = 1";
    return dryEq(ceq, pickNoneClaim(isTrue, null, seed, useVieta));
  }
  return null;
}

function rewriteFromExp(exp, isTrue, sub, letterIndex, overview = "", title = "") {
  const m = meta(exp);
  const eq = pickPrimaryEq(exp, overview, title);
  const useVieta = letterIndex % 2 === 0;
  const seed = letterIndex;

  const special = specialStatement(exp, isTrue, eq, seed, useVieta);
  if (special) return special;

  if (m.identity && eq) {
    const t = ["every real number satisfies the equation", "the equation has infinitely many real solutions"];
    const f = ["the equation has exactly one real solution", "the equation has no real solution"];
    return dryEq(eq, (isTrue ? t : f)[seed % 2]);
  }

  if (m.contradiction && eq) {
    return dryEq(eq, pickNoneClaim(isTrue, null, seed, false));
  }

  if (sub === "4.4" && eq) {
    if (m.noReal) {
      return dryEq(eq, pickNoneClaim(isTrue, null, seed, useVieta));
    }
    if (/\\log|\\ln/.test(eq)) {
      const x = m.roots[0];
      if (x != null && useVieta) {
        return dryEq(eq, vietaSingle(isTrue, x, seed));
      }
      return dryEq(
        eq,
        useVieta
          ? vietaSingle(isTrue, m.roots[0] ?? 1, seed)
          : isTrue
            ? countSingle(true, seed)
            : countSingle(false, seed)
      );
    }
    return dryEq(eq, useVieta ? vietaSingle(isTrue, m.roots[0] ?? 2, seed) : countSingle(isTrue, seed));
  }

  if (eq) {
    const q = quadFromEq(eq);
    if (q) {
      const v = vieta(q);
      if (v.disc < 0) return dryEq(eq, pickNoneClaim(isTrue, v.disc, seed, useVieta));
      if (v.disc === 0 || m.repeated) {
        const r = m.roots[0] ?? v.r1 ?? 0;
        if (useVieta) {
          const claim = isTrue
            ? [`the sum of all roots equals ${fmt(2 * r)}`, `the product of the roots equals ${fmt(r * r)}`][seed % 2]
            : [`the sum of all roots equals ${fmt(wrongVal(Math.round(2 * r)))}`, `the product of the roots equals ${fmt(wrongVal(Math.round(r * r)))}`][seed % 2];
          return dryEq(eq, claim);
        }
        return dryEq(eq, isTrue ? countSingle(true, seed) : countSingle(false, seed));
      }
      const roots = m.roots.length >= 2 ? m.roots : [v.r1, v.r2].filter((x) => x != null);
      if (roots.length >= 2) {
        const sum = roots.reduce((a, b) => a + b, 0);
        const prod = roots.reduce((a, b) => a * b, 1);
        return dryEq(eq, pickDoubleClaim(isTrue, sum, prod, roots[0], roots[1], seed, useVieta));
      }
    }
  }

  if (/\\lvert/.test(exp) && m.roots.length >= 2 && eq) {
    const roots = m.roots;
    const sum = roots.reduce((a, b) => a + b, 0);
    const prod = roots.reduce((a, b) => a * b, 1);
    return dryEq(eq, pickDoubleClaim(isTrue, sum, prod, roots[0], roots[1], seed, useVieta));
  }

  if (m.noReal && eq) {
    return dryEq(eq, pickNoneClaim(isTrue, m.discriminant, seed, useVieta));
  }

  if (m.roots.length >= 1 && !m.twoDistinct) {
    const s = m.roots[0];
    if (eq) return dryEq(eq, pickSingleClaim(isTrue, s, seed, useVieta));
  }

  if (m.twoDistinct && m.roots.length >= 2 && eq) {
    const roots = m.roots;
    const sum = roots.reduce((a, b) => a + b, 0);
    const prod = roots.reduce((a, b) => a * b, 1);
    return dryEq(eq, pickDoubleClaim(isTrue, sum, prod, roots[0], roots[1], seed, useVieta));
  }

  if (eq) return dryEq(eq, useVieta ? vietaSingle(isTrue, m.roots[0] ?? 0, seed) : countSingle(isTrue, seed));

  return null;
}

export { isValidStudentEquation, rewriteFromExp, pickPrimaryEq, dryEq, tsEscape, tsFileEscape, normalizeLatexEq };

function formatStatements(arr) {
  return arr.map((s) => `      \`${s}\`,`).join("\n");
}

const isMain = process.argv[1]?.endsWith("rewrite-ch4-root-claims.mjs");
if (isMain) {
let total = 0;
const stats = { vieta: 0, count: 0, special: 0, noEq: 0 };

for (const path of FILES) {
  const { src, tasks } = parseTasks(path);
  let newSrc = src;
  for (let ti = tasks.length - 1; ti >= 0; ti--) {
    const t = tasks[ti];
    const newStmts = t.tactical_explanations.map((exp, i) => {
      total++;
      let stmt = rewriteFromExp(exp, t.answer_key[i] === "true", t.subsection, i, t.overview, t.title);
      if (!stmt) {
        console.error(`FATAL: no statement for ${t.id} letter ${i}`);
        process.exit(1);
      }
      const useVieta = i % 2 === 0;
      if (!stmt.startsWith("For $")) {
        stats.special++;
      } else if (/sum|product|multiply|discriminant|roots add|exceeds the smaller|multiplying/.test(stmt)) {
        useVieta ? stats.vieta++ : stats.count++;
      } else if (/exactly one|two distinct|no real|no admissible|infinitely many|every real/.test(stmt)) {
        stats.count++;
      } else {
        useVieta ? stats.vieta++ : stats.count++;
      }
      return stmt;
    });
    const ss = t.chunk.indexOf("statements: [");
    const closeIdx = t.chunk.indexOf("\n    ],", ss);
    const end = closeIdx + "\n    ],".length;
    const nc = t.chunk.slice(0, ss) + `statements: [\n${formatStatements(newStmts)}\n    ],` + t.chunk.slice(end);
    newSrc = newSrc.slice(0, t.chunkStart) + nc + newSrc.slice(t.chunkStart + t.chunk.length);
  }
  fs.writeFileSync(path, newSrc);
}

console.log(`Rewrote ${total} statements`);
console.log(`Stats: vieta-ish=${stats.vieta}, count-ish=${stats.count}, special=${stats.special}`);

const BAD = [
  /^The equation has (exactly one|no) real solution\.$/,
  /^For \$u =/,
  /^For \$f'\(/,
  /^For \$x = x,/,
  /precisely one real value of the exponent/,
  /more than one real exponent satisfies/,
];
let bad = 0;
for (const path of FILES) {
  const { tasks } = parseTasks(path);
  for (const t of tasks) {
    const stmts = parseBacktickArray(t.chunk, "statements");
    for (const s of stmts) {
      for (const p of BAD) {
        if (p.test(s)) {
          bad++;
          console.error(`BAD [${t.id}]: ${s.slice(0, 100)}`);
          break;
        }
      }
    }
  }
}
console.log(`Bad statement patterns: ${bad}`);
if (bad > 0) process.exit(1);
}
