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
  return /\\frac\{[^}]*[xtsy]|\\sqrt\{[^}]*x|\^x|x\^\{|\\lvert[^$]*x|\([xtsy]|[^a-z]x[^a-z]|^x[^a-z]|s\^\{|\\log_[^{]*x|e\^\{[^}]*x|2\^x|3\^x|5\^x|10\^x|7\^x|4\^x|6\^x|25\^x|\\ln\s*\(/i.test(eq);
}

function isNumericCheck(eq) {
  const e = eq.replace(/\s/g, "");
  return (
    /^\\sqrt\{\d|^\\d+\\cdot\\d+|^\\d+\+\\d+=-?\\d+$|^\\d+\^\{2\}|\\neq|^-\\d+\\cdot\\d+|^\\Delta=\(/.test(e) ||
    (/^[^xts]{0,3}\\d+[^xts]*$/.test(e) && !hasUnknown(eq))
  );
}

function isValidStudentEquation(eq) {
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
  return true;
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
  if (!/Between the posts|kilometre-post/i.test(t)) return null;
  const pm = t.match(/posts?\s+\$?(\d+)\$?\s+and\s+\$?(\d+)\$?/i);
  if (pm) return `\\lvert x - ${pm[1]} \\rvert + \\lvert x - ${pm[2]} \\rvert = 6`;
  return `\\lvert x - 1 \\rvert + \\lvert x - 7 \\rvert = 6`;
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

function pickPrimaryEq(exp, overview = "", title = "") {
  const t = normalizeTex(exp);
  const ov = normalizeTex(overview);

  const built = buildSqrtSumFromLet(t);
  if (built && isValidStudentEquation(built)) return built;

  const inferrers = [
    inferAbsFromSplit(t),
    inferAbsPostsEq(t),
    inferAbsSumEq(t),
    inferFractionEq(t),
    inferImpossibleExp(t),
  ];
  for (const inferred of inferrers) {
    if (inferred && isValidStudentEquation(inferred)) return inferred;
  }

  const all = [...extractEquations(t), ...extractEquations(ov)].filter(isValidStudentEquation);
  all.sort((a, b) => {
    const score = (e) =>
      (/\\sqrt\{x [+-] \d+\} \+ \\sqrt\{x/.test(e) ? 12 : 0) +
      (/\\sqrt\{x \+ \d+\} = \d+ \+ \\sqrt\{x/.test(e) ? 11 : 0) +
      (/\\frac\{3\}\{x\(x \+ 3\)\}/.test(e) ? 11 : 0) +
      (/\\frac\{3x\^\{2\}/.test(e) ? 10 : 0) +
      (/\\lvert.*\\lvert/.test(e) ? 10 : 0) +
      (/= 32$|= -8$|= -1$/.test(e) ? 9 : 0) +
      (/\\sqrt\{x \+ \d+\}/.test(e) ? 9 : 0) +
      (/\\sqrt\{2x|\\sqrt\{x \+/.test(e) ? 8 : 0) +
      (/2\^x|3\^x|5\^x|\\log_3|\\log_2/.test(e) ? 7 : 0) +
      (/x\^\{2\}|\\frac\{[^}]*x/.test(e) ? 6 : 0) +
      (/2x|3x|5x/.test(e) ? 4 : 0) +
      e.length -
      (/^0 = x\^\{2\}/.test(e) ? 3 : 0) -
      (/= 2\^5$/.test(e) ? 4 : 0) -
      (/^x \+ \d+ = \d+ \+ 4\\sqrt/.test(e) ? 8 : 0) -
      (/^x \+ \d+ = \d+ \\+/.test(e) ? 6 : 0) -
      (/^\\Delta =/.test(e) ? 5 : 0);
    return score(b) - score(a);
  });
  return all[0] || null;
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
  for (const m of exp.matchAll(/hence \$a = (\d+) and \$b = (\d+)/g)) {
    /* sqrt substitution — x recovered separately */
  }
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
  return `For $${eq}$, ${claim}.`;
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
      const t = ["no real exponent satisfies the equation", "the equation has no real solution"];
      const f = ["exactly one real exponent satisfies the equation", "precisely one real value of the exponent works"];
      return dryEq(eq, (isTrue ? t : f)[seed % 2]);
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
            ? "exactly one positive admissible root exists"
            : "no positive admissible root exists"
      );
    }
    const t = ["exactly one real exponent satisfies the equation", "precisely one real value of the exponent works"];
    const f = ["no real exponent satisfies the equation", "more than one real exponent satisfies the equation"];
    return dryEq(eq, useVieta ? vietaSingle(isTrue, m.roots[0] ?? 2, seed) : (isTrue ? t : f)[seed % 2]);
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

  return `The equation has ${isTrue ? "exactly one" : "no"} real solution.`;
}

function formatStatements(arr) {
  return arr.map((s) => `      \`${s}\`,`).join("\n");
}

let total = 0;
const stats = { vieta: 0, count: 0, special: 0, noEq: 0 };

for (const path of FILES) {
  const { src, tasks } = parseTasks(path);
  let newSrc = src;
  for (let ti = tasks.length - 1; ti >= 0; ti--) {
    const t = tasks[ti];
    const newStmts = t.tactical_explanations.map((exp, i) => {
      total++;
      const stmt = rewriteFromExp(exp, t.answer_key[i] === "true", t.subsection, i, t.overview, t.title);
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
