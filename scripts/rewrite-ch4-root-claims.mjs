#!/usr/bin/env node
/**
 * Rewrite ch4 statements: varied root claims (sum / product / count / discriminant).
 * No "after squaring…" patterns. Requires finding roots — non-obvious checks.
 */
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];
const ACTORS = ["A candidate", "A student", "A clerk", "An examiner"];

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
    tasks.push({
      id: chunk.match(/id: `(math-4-\d+)`/)[1],
      subsection: chunk.match(/subsection: `([^`]+)`/)[1],
      chunkStart: m.index,
      chunk,
      statements: parseBacktickArray(chunk, "statements"),
      answer_key: [...chunk.match(/answer_key: \[(.*?)\]/s)[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]),
      tactical_explanations: parseBacktickArray(chunk, "tactical_explanations"),
    });
  }
  return { src, tasks };
}

function actor(n, i) {
  return ACTORS[(n * 3 + i) % ACTORS.length];
}

/** Equation must contain an unknown (x, t, …), not a numeric check. */
function hasUnknown(eq) {
  return /\\frac\{[^}]*[xtsy]|\\sqrt\{[^}]*x|\^x|x\^\{|\\lvert[^$]*x|\([xtsy]\s*[+-]|[^a-z]x[^a-z]|^x[^a-z]|s\^\{|\\log_[^{]*x|e\^\{[^}]*x|2\^x|3\^x|5\^x|10\^x|7\^x|4\^x/.test(eq);
}

function isNumericCheck(eq) {
  const e = eq.replace(/\s/g, "");
  if (/^\\sqrt\{\d|^\\d+\\cdot\\d+|^\\d+\+\\d+=-?\\d+$|^\\d+\^\{2\}|\\neq|^-\\d+\\cdot\\d+|^\\Delta=\(/.test(e)) return true;
  if (/^[^xts]{0,3}\\d+[^xts]*$/.test(e) && !hasUnknown(eq)) return true;
  return false;
}

function extractEquations(text) {
  const eqs = [];
  for (const m of text.matchAll(/\$\$([^$]+)\$\$/g)) {
    const t = m[1].trim().replace(/\s+/g, " ");
    if (/=/.test(t) && hasUnknown(t) && !isNumericCheck(t)) eqs.push(t);
  }
  for (const m of text.matchAll(/\$([^$]+)\$/g)) {
    const t = m[1].trim();
    if (/=/.test(t) && hasUnknown(t) && !isNumericCheck(t) && t.length > 3) eqs.push(t);
  }
  return [...new Set(eqs)];
}

function eqFromOld(old) {
  const m = old.match(/(?:For|The equation|The quadratic equation|The quadratic) \$([^$]+)\$/);
  if (m && hasUnknown(m[1]) && !isNumericCheck(m[1])) return m[1];
  return extractEquations(old)[0] || null;
}

function pickPrimaryEq(old, exp) {
  const fromOld = eqFromOld(old);
  if (fromOld) return fromOld;
  const all = extractEquations(exp);
  all.sort((a, b) => {
    const score = (e) =>
      (/\\sqrt|\\lvert|\\log|\^x|x\^\{2\}/.test(e) ? 6 : 0) +
      (/\\frac\{x|x\^\{2\}/.test(e) ? 4 : 0) +
      e.length;
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
  for (const m of exp.matchAll(/That \$(-?\d+(?:\.\d+)?)\$ is the (?:original|number|change|length|wage|bill|price|mass|amount|starting|side|solution|value|capacity|perimeter|middle|isolated|unique)/gi)) {
    roots.add(parseFloat(m[1]));
  }
  for (const m of exp.matchAll(/middle integer is \$n \+ 1 = (-?\d+)/g)) roots.add(parseFloat(m[1]));
  // Only isolated x = N lines (not from "or" chains already captured)
  for (const m of exp.matchAll(/^\$\$x = (-?\d+(?:\.\d+)?)\$\$/gm)) roots.add(parseFloat(m[1]));
  return [...roots].filter((v) => !Number.isNaN(v) && Math.abs(v) < 5000);
}

function meta(exp) {
  const noReal =
    /no real (?:solution|root)|zero real solution|cannot equal \$-|not in the range|A positive output cannot|cannot be reached|no admissible|has no real|There are zero real|contradiction|never a solution|\\Delta = -|\$3 = 5\$|not \$18\$/i.test(
      exp
    );
  const twoDistinct =
    /two distinct real|exactly two real solution|two different real|Those are two distinct|two branches|four different real|four real solution|exactly two admissible|two distinct integer|two real numbers|two real roots|two solutions/i.test(
      exp
    );
  const repeated = /repeated real root|double root|\\Delta = 0|exactly one real solution, a double|\(x - \d+\)\^\{2\}/i.test(exp);
  const identity = /Every real \$x\$ satisfies|Every real number|identity|infinitely many solution|Every \$x\$ works|Every real \$x\$ works/i.test(exp);
  const contradiction = /never true|no real solution|contradiction|\$\$0 = 1\$\$|\$\$3 = 5\$\$|which is never true|not infinitely many/i.test(exp) && !identity;
  const roots = parseRoots(exp);
  const discM = exp.match(/\\Delta = (-?\d+(?:\.\d+)?)/);
  const discriminant = discM ? parseFloat(discM[1]) : null;
  return { noReal, twoDistinct, repeated, identity, contradiction, roots, discriminant };
}

function fmt(n) {
  if (!Number.isFinite(n)) return "$0$";
  if (Number.isInteger(n)) return `$${n}$`;
  if (Math.abs(n - 0.125) < 1e-9) return `$\\frac{1}{8}$`;
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

function forEq(eq, act, claim) {
  return `For $${eq}$, ${act} claims that ${claim}.`;
}

function isWordProblem(old) {
  return (
    !/(?:For|The equation|The quadratic) \$/.test(old) &&
    /shop|bill|EUR|litres|degrees|batch|sample|tank|wage|price|purse|gardener|chemist|baker|stallholder|rectangle|consecutive|split|share|rod|temperature|motorcyclist|pitch|pipe|worker|box|plan|payroll|jug|can|oil|jerrycan|bed|lawn|surveyor|passenger|driver|coach|scale|mass|perimeter|unknown|number increased|number decreased|Three times|Four times|Twice|Half of|After \$|A number|Splitting|doubl|practice item,/i.test(
      old
    )
  );
}

function stripClaims(old) {
  return old
    .replace(/\s*(?:A candidate|A student|A clerk|An examiner) claims that.+$/i, "")
    .replace(/\s*An examiner claims that\.?\s*$/i, "")
    .trim();
}

function stripEmbeddedAnswers(s) {
  return s
    .replace(/,?\s*Restoring the operations,[^.]+\.?/gi, "")
    .replace(/,?\s*the original number is \$[^.]+\.?/gi, "")
    .replace(/,?\s*Then there are \$[^.]+\.?/gi, "")
    .replace(/,?\s*The shorter piece is \$[^.]+\.?/gi, "")
    .replace(/,?\s*The number is \$[^.]+\.?/gi, "")
    .replace(/,?\s*reports that each box started with \$[^.]+\.?/gi, "")
    .replace(/,?\s*The solution of the equation[^.]+\.?/gi, "")
    .replace(/,?\s*concludes that[^.]+\.?/gi, "")
    .replace(/,?\s*Then the [^.]+\.?/gi, "")
    .replace(/,?\s*A storekeeper reports that[^.]+\.?/gi, "")
    .replace(/,?\s*The baker reports that[^.]+\.?/gi, "")
    .replace(/,?\s*The chemist reports that[^.]+\.?/gi, "")
    .replace(/,?\s*The stallholder concludes that[^.]+\.?/gi, "")
    .trim();
}

// Varied phrasing pools — no "after …" templates
const CLAIMS = {
  singleTrue: (s) => [
    `the sum of all admissible roots equals ${fmt(s)}`,
    `the solutions add up to ${fmt(s)}`,
    `the product of all admissible roots equals ${fmt(s)}`,
    `the roots multiply to ${fmt(s)}`,
    "the equation has exactly one admissible real solution",
    "the equation has exactly one real solution",
    "exactly one admissible root satisfies the equation",
  ],
  singleFalse: (s) => [
    `the sum of all admissible roots equals ${fmt(wrongVal(s))}`,
    `the solutions add up to ${fmt(wrongVal(s))}`,
    `the product of all admissible roots equals ${fmt(wrongVal(s))}`,
    "the equation has no admissible real solution",
    "the equation has two distinct admissible real solutions",
    "the equation has no real solution",
  ],
  doubleTrue: (sum, prod, r1, r2) => {
    const [a, b] = [r1, r2].sort((x, y) => x - y);
    return [
      `the two roots sum to ${fmt(sum)}`,
      `the roots add up to ${fmt(sum)}`,
      `the sum of the solutions equals ${fmt(sum)}`,
      `the product of the roots equals ${fmt(prod)}`,
      `the roots multiply to ${fmt(prod)}`,
      "the equation has two distinct real solutions",
      "the equation admits two distinct real roots",
      `the larger root exceeds the smaller by ${fmt(b - a)}`,
    ];
  },
  doubleFalse: (sum, prod, r1, r2) => {
    const [a, b] = [r1, r2].sort((x, y) => x - y);
    return [
      `the two roots sum to ${fmt(wrongVal(Math.round(sum)))}`,
      `the product of the roots equals ${fmt(wrongVal(Math.round(prod)))}`,
      "the equation has exactly one real solution",
      "the equation has no real solution",
      `the larger root exceeds the smaller by ${fmt(b - a + 2)}`,
      `the sum of the solutions equals ${fmt(wrongVal(Math.round(sum)))}`,
    ];
  },
  noneTrue: (disc) => [
    "the equation has no real solution",
    "the equation has no admissible real solution",
    "no real root satisfies the equation",
    ...(disc != null && disc < 0 ? [`the discriminant equals ${fmt(disc)}`] : []),
  ],
  noneFalse: (disc) => [
    "the equation has exactly one real solution",
    "the equation has two distinct real solutions",
    "exactly one admissible root satisfies the equation",
    ...(disc != null && disc > 0 ? [`the discriminant equals ${fmt(wrongVal(Math.round(disc)))}`] : []),
  ],
  identityTrue: () => [
    "every real number satisfies the equation",
    "the equation has infinitely many real solutions",
    "each real value of the unknown satisfies the equation",
  ],
  identityFalse: () => [
    "the equation has exactly one real solution",
    "the equation has no real solution",
    "exactly one admissible root satisfies the equation",
  ],
  repeatedTrue: (r) => [
    "the equation has a repeated real root",
    "the equation has exactly one real solution",
    `the sum of all roots equals ${fmt(2 * r)}`,
  ],
  repeatedFalse: (r) => [
    "the equation has two distinct real roots",
    "the equation has no real solution",
    `the sum of all roots equals ${fmt(wrongVal(Math.round(2 * r)))}`,
  ],
  expTrue: () => [
    "exactly one real exponent satisfies the equation",
    "the equation has exactly one real solution",
    "precisely one real value of the exponent works",
  ],
  expFalse: () => [
    "no real exponent satisfies the equation",
    "more than one real exponent satisfies the equation",
    "the equation has no real solution",
  ],
  logTrue: (x) => [
    "exactly one positive admissible root exists",
    `the sum of all admissible roots equals ${fmt(x)}`,
    `the product of all admissible roots equals ${fmt(x)}`,
  ],
  logFalse: (x) => [
    "no positive admissible root exists",
    `the sum of all admissible roots equals ${fmt(wrongVal(x))}`,
    "the equation has two distinct admissible roots",
  ],
};

function pick(pool, seed) {
  return pool[seed % pool.length];
}

function rewriteStatement(old, exp, isTrue, sub, act, seed) {
  const m = meta(exp);
  const eq = pickPrimaryEq(old, exp);

  if (/^\$5\^\{2\} - 4\^\{2\}\$ equals/.test(old) || /^\$5\^{2} - 4\^{2}\$ equals/.test(old)) {
    return isTrue ? `$5^{2} - 4^{2}$ equals $9$.` : `$5^{2} - 4^{2}$ equals $7$.`;
  }
  if (/square with side \$4\$|square bed|square of side \$4\$/i.test(old)) {
    return isTrue ? `A square with side $4$ m has area $16$ m$^{2}$.` : `A square with side $4$ m has area $15$ m$^{2}$.`;
  }
  if (/square of area \$13/i.test(old)) {
    return isTrue
      ? `A square of area $13$ m$^{2}$ has side length greater than $3$ m.`
      : `A square of area $13$ m$^{2}$ has side length less than $3$ m.`;
  }
  if (/square of area \$49|s\^\{2\} = 49/.test(old + (eq || ""))) {
    return isTrue
      ? `A square of area $49$ m$^{2}$ has side length $7$ m.`
      : `A square of area $49$ m$^{2}$ has side length $8$ m.`;
  }
  if (/x\^\{2\} = a\b/.test(old) || (eq && /x\^\{2\} = a/.test(eq))) {
    return isTrue
      ? `If $x^{2} = a$ with $a > 0$, the two real roots have opposite signs.`
      : `If $x^{2} = a$ with $a > 0$, the two real roots have the same sign.`;
  }
  if (eq && /x\^\{2\} = 9/.test(eq)) {
    return isTrue
      ? `For $x^{2} = 9$, the sum of the two real roots equals zero.`
      : `For $x^{2} = 9$, the sum of the two real roots equals $3$.`;
  }
  if (/^The equation \$0 = 1\$/.test(old)) {
    return isTrue ? `The equation $0 = 1$ has no real solution.` : `The equation $0 = 1$ has exactly one real solution.`;
  }

  // Linear identity / contradiction (solution count, not Vieta)
  if (m.identity && eq) {
    return forEq(eq, act, pick(isTrue ? CLAIMS.identityTrue() : CLAIMS.identityFalse(), seed));
  }
  if (m.contradiction && eq) {
    return forEq(eq, act, pick(isTrue ? CLAIMS.noneTrue(null) : CLAIMS.noneFalse(null), seed));
  }

  // Word problem
  if (isWordProblem(old) && m.roots.length >= 1) {
    const s = m.roots[0];
    let setup = stripEmbeddedAnswers(stripClaims(old));
    if (!setup.endsWith(".")) setup += ".";
    const pool = isTrue ? CLAIMS.singleTrue(s) : CLAIMS.singleFalse(s);
    return `${setup} ${act} claims that ${pick(pool, seed)}.`;
  }

  // 4.4
  if (sub === "4.4" && eq) {
    if (m.noReal) return forEq(eq, act, pick(isTrue ? CLAIMS.expFalse() : CLAIMS.expTrue(), seed));
    if (/\\log/.test(eq)) {
      const x = m.roots[0];
      if (x != null) return forEq(eq, act, pick(isTrue ? CLAIMS.logTrue(x) : CLAIMS.logFalse(x), seed));
      return forEq(eq, act, isTrue ? "exactly one positive admissible root exists" : "no positive admissible root exists");
    }
    return forEq(eq, act, pick(isTrue ? CLAIMS.expTrue() : CLAIMS.expFalse(), seed));
  }

  // Quadratic
  if (eq) {
    const q = quadFromEq(eq);
    if (q) {
      const v = vieta(q);
      if (v.disc < 0) return forEq(eq, act, pick(isTrue ? CLAIMS.noneTrue(v.disc) : CLAIMS.noneFalse(v.disc), seed));
      if (v.disc === 0 || m.repeated) {
        const r = m.roots[0] ?? v.r1 ?? 0;
        return forEq(eq, act, pick(isTrue ? CLAIMS.repeatedTrue(r) : CLAIMS.repeatedFalse(r), seed));
      }
      const roots = m.roots.length >= 2 ? m.roots : [v.r1, v.r2].filter((x) => x != null);
      if (roots.length >= 2) {
        const sum = roots.reduce((a, b) => a + b, 0);
        const prod = roots.reduce((a, b) => a * b, 1);
        return forEq(eq, act, pick(isTrue ? CLAIMS.doubleTrue(sum, prod, roots[0], roots[1]) : CLAIMS.doubleFalse(sum, prod, roots[0], roots[1]), seed));
      }
    }
  }

  // Abs value — two roots
  if (/\\lvert/.test(old + exp) && m.roots.length >= 2 && eq) {
    const roots = m.roots;
    const sum = roots.reduce((a, b) => a + b, 0);
    const prod = roots.reduce((a, b) => a * b, 1);
    return forEq(eq, act, pick(isTrue ? CLAIMS.doubleTrue(sum, prod, roots[0], roots[1]) : CLAIMS.doubleFalse(sum, prod, roots[0], roots[1]), seed));
  }

  if (m.noReal && eq) {
    return forEq(eq, act, pick(isTrue ? CLAIMS.noneTrue(m.discriminant) : CLAIMS.noneFalse(m.discriminant), seed));
  }

  // Single root
  if (m.roots.length >= 1 && !m.twoDistinct) {
    const s = m.roots[0];
    let setup = stripEmbeddedAnswers(stripClaims(old));
    if (setup.length > 15 && isWordProblem(old)) {
      if (!setup.endsWith(".")) setup += ".";
      const pool = isTrue ? CLAIMS.singleTrue(s) : CLAIMS.singleFalse(s);
      return `${setup} ${act} claims that ${pick(pool, seed)}.`;
    }
    if (eq && hasUnknown(eq)) {
      let pool = isTrue ? CLAIMS.singleTrue(s) : CLAIMS.singleFalse(s);
      if (s === 0) pool = pool.filter((c) => !c.includes("product") && !c.includes("multiply"));
      return forEq(eq, act, pick(pool, seed));
    }
  }

  if (m.twoDistinct && m.roots.length >= 2 && eq) {
    const roots = m.roots;
    const sum = roots.reduce((a, b) => a + b, 0);
    const prod = roots.reduce((a, b) => a * b, 1);
    return forEq(eq, act, pick(isTrue ? CLAIMS.doubleTrue(sum, prod, roots[0], roots[1]) : CLAIMS.doubleFalse(sum, prod, roots[0], roots[1]), seed));
  }

  if (eq && hasUnknown(eq)) {
    return forEq(eq, act, isTrue ? "the equation has exactly one real solution" : "the equation has no real solution");
  }

  return old.replace(/after squaring both sides[^.]*\.?/g, "the equation has exactly one admissible real solution");
}

function formatStatements(arr) {
  return arr.map((s) => `      \`${s}\`,`).join("\n");
}

// Restore clean base then rewrite
let changed = 0;
for (const path of FILES) {
  const { src, tasks } = parseTasks(path);
  let newSrc = src;
  for (let ti = tasks.length - 1; ti >= 0; ti--) {
    const t = tasks[ti];
    const n = parseInt(t.id.split("-")[2], 10);
    const newStmts = t.statements.map((s, i) => {
      const ns = rewriteStatement(s, t.tactical_explanations[i], t.answer_key[i] === "true", t.subsection, actor(n, i), n * 5 + i);
      if (ns !== s) changed++;
      return ns;
    });
    const ss = t.chunk.indexOf("statements: [");
    const closeIdx = t.chunk.indexOf("\n    ],", ss);
    const end = closeIdx + "\n    ],".length;
    const nc = t.chunk.slice(0, ss) + `statements: [\n${formatStatements(newStmts)}\n    ],` + t.chunk.slice(end);
    newSrc = newSrc.slice(0, t.chunkStart) + nc + newSrc.slice(t.chunkStart + t.chunk.length);
  }
  fs.writeFileSync(path, newSrc);
}
console.log(`Rewrote ${changed} statements`);
