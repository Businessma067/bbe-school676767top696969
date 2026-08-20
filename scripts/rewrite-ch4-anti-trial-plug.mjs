#!/usr/bin/env node
/**
 * Rewrite Chapter 4 statements so claims require full algebra, not trial plug-in.
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

function extractEquations(text) {
  const eqs = [];
  for (const m of text.matchAll(/\$\$([^$]+)\$\$/g)) {
    const t = m[1].trim().replace(/\s+/g, " ");
    if (/=/.test(t) && /x|s|t|u|y/.test(t)) eqs.push(t);
  }
  for (const m of text.matchAll(/\$([^$]+)\$/g)) {
    const t = m[1].trim();
    if (/=/.test(t) && t.length > 3 && /x|s|t|u|y|\\lvert|\\sqrt|\\frac|\\log|\^/.test(t)) eqs.push(t);
  }
  return [...new Set(eqs)];
}

function parseRoots(exp) {
  const roots = new Set();
  for (const m of exp.matchAll(/\$\$x = (-?\d+(?:\.\d+)?)\$\$/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/\$x = (-?\d+(?:\.\d+)?)\$/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/Then \$x = (-?\d+(?:\.\d+)?) or \$x = (-?\d+(?:\.\d+)?)/g)) {
    roots.add(parseFloat(m[1]));
    roots.add(parseFloat(m[2]));
  }
  for (const m of exp.matchAll(/giving \$x = (-?\d+(?:\.\d+)?)/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/The isolated solution is \$x = (-?\d+(?:\.\d+)?)/g)) roots.add(parseFloat(m[1]));
  for (const m of exp.matchAll(/That \$(-?\d+(?:\.\d+)?)\$ is the (?:original|number|change|length|wage|bill|price|mass|batch|sample|volume|capacity|perimeter|middle|amount|starting|side)/gi)) {
    roots.add(parseFloat(m[1]));
  }
  for (const m of exp.matchAll(/middle integer is \$n \+ 1 = (-?\d+)/g)) roots.add(parseFloat(m[1]));
  if (/\\Delta = 0[\s\S]*x = 2/i.test(exp)) roots.add(2);
  if (/s = 7/i.test(exp) && S2.test(exp) && /= 49/.test(exp)) roots.add(7);
  return [...roots].filter((v) => !Number.isNaN(v));
}

function parseDiscriminant(exp) {
  const m = exp.match(/\\Delta = (-?\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

function meta(exp, sub) {
  const noReal =
    /no real (?:solution|root)|zero real solution|cannot equal \$-|not in the range|A positive output cannot|cannot be reached|no admissible|has no real|There are zero real|\\Delta = -/i.test(
      exp
    );
  const twoDistinct =
    /two distinct real|exactly two real solution|two different real|Those are two distinct|two branches|x = 8.*x = -2|x = -5 or \$x = 2|x = -2 or \$x = 8/i.test(
      exp
    );
  const repeated = /repeated real root|double root|\\Delta = 0|exactly one real solution, a double|\(x - 2\)\^\{2\}/i.test(exp);
  const roots = parseRoots(exp);
  const discriminant = parseDiscriminant(exp);
  const eqs = extractEquations(exp);
  return { noReal, twoDistinct, repeated, roots, discriminant, eqs, sub };
}

const X2 = /x\^\{2\}/;
const S2 = /s\^\{2\}/;

function num(n) {
  if (Number.isInteger(n)) return String(n);
  if (Math.abs(n - 0.125) < 1e-9) return "\\frac{1}{8}";
  if (Math.abs(n - 0.5) < 1e-9) return "\\frac{1}{2}";
  return String(n);
}

function fmt(n) {
  return `$${num(n)}$`;
}

function forEq(eq, act, claim) {
  return `For $${eq}$, ${act} claims that ${claim}.`;
}

function affineClaim(coeff, offset, target, isTrue) {
  const a = Math.abs(coeff);
  const b = Math.abs(offset);
  const signB = offset >= 0 ? "increased" : "decreased";
  let wrong = target + (isTrue ? 0 : target % 2 === 0 ? 3 : 2);
  if (!isTrue && wrong === target) wrong += 4;
  const val = isTrue ? target : wrong;
  const subj = a === 1 ? "the unknown" : `${a} times the unknown`;
  if (b === 0) return `${subj} equals ${fmt(val)}`;
  return `${subj}, ${signB} by ${fmt(b)}, equals ${fmt(val)}`;
}

function verbalLinear(eq) {
  const e = eq.replace(/\s/g, "");
  if (/^(\d+)x-(\d+)=(\d+)$/.test(e)) {
    const [, a, b, c] = e.match(/^(\d+)x-(\d+)=(\d+)$/);
    return `${a} times an unknown, decreased by $${b}$, equals $${c}$`;
  }
  if (/^(\d+)x\+(\d+)=(\d+)$/.test(e)) {
    const [, a, b, c] = e.match(/^(\d+)x\+(\d+)=(\d+)$/);
    return `${a} times an unknown, increased by $${b}$, equals $${c}$`;
  }
  if (/^(\d+)x=(\d+)$/.test(e)) {
    const [, a, c] = e.match(/^(\d+)x=(\d+)$/);
    return `${a} times an unknown equals $${c}$`;
  }
  if (/^\\frac\{x\}\{2\}=(\d+)$/.test(e)) {
    const [, c] = e.match(/^\\frac\{x\}\{2\}=(\d+)$/);
    return `one-half of an unknown equals $${c}$`;
  }
  if (/^(\d+)\(x([+-])(\d+)\)=(\d+)$/.test(e)) {
    const [, a, sign, b, c] = e.match(/^(\d+)\(x([+-])(\d+)\)=(\d+)$/);
    return `${a} times the quantity unknown ${sign === "+" ? "plus" : "minus"} $${b}$, equals $${c}$`;
  }
  return null;
}

function stripWordSetup(old) {
  return old
    .replace(/\.\s*(?:A (?:candidate|student|clerk|examiner)[^.]*)\.?$/i, "")
    .replace(/\.\s*(?:The stallholder|A baker|A chemist|A shop|An examiner|A student|A clerk|A candidate|A gardener|A payroll clerk|A carpenter|A sports pitch|Two pipes|Two workers|A scale|A number|Three times|After \$|Four times|In a practice paper)[^.]*claims[^.]*\.?$/i, "")
    .replace(/ has a unique real solution[^.]*\.?$/i, "")
    .replace(/ is an odd integer greater than \$[^.]+\.?$/i, "")
    .replace(/ The jerrycan \.?/i, "")
    .replace(/ whose absolute value \.?/i, "")
    .replace(/\. A student claims that exceeds \$[^.]+\.?$/i, "")
    .replace(/\. An examiner claims that holds more than \$[^.]+\.?$/i, "")
    .replace(/\. A candidate claims that the new area exceeds \$[^.]+\.?$/i, "")
    .trim();
}

function pickPrimaryEq(old, exp) {
  const all = [...new Set([...extractEquations(old), ...extractEquations(exp)])];
  all.sort((a, b) => {
    const score = (e) =>
      (/\\sqrt|\\frac|\\lvert|\\log|\^|e\^{/.test(e) ? 4 : 0) +
      (/x|s/.test(e) ? 2 : 0) +
      (e.length > 8 ? 1 : 0) -
      (/^0 = 1|^1 -|^12 \\cdot/.test(e) ? 10 : 0);
    return score(b) - score(a);
  });
  return all.find((e) => !/^0 = 1|^1 - \\frac|^12 \\cdot \\frac/.test(e)) || all[0] || null;
}

function quadFromEq(eq) {
  const e = eq.replace(/\s/g, "");
  const m = e.match(/x\^\{2\}([+-]\d+)x([+-]\d+)=0/);
  if (m) return { a: 1, b: parseInt(m[1], 10), c: parseInt(m[2], 10) };
  const m2 = e.match(/x\^\{2\}=(-?\d+)/);
  if (m2) return { a: 1, b: 0, c: -parseInt(m2[1], 10) };
  const m3 = e.match(/x\^\{2\}([+-]\d+)x=0/);
  if (m3) return { a: 1, b: parseInt(m3[1], 10), c: 0 };
  const m4 = e.match(/s\^\{2\}=(\d+)/);
  if (m4) return { a: 1, b: 0, c: -parseInt(m4[1], 10), var: "s" };
  return null;
}

function vietaClaim(q, isTrue, seed = 0) {
  const sum = -q.b / q.a;
  const product = q.c / q.a;
  const disc = q.b * q.b - 4 * q.a * q.c;
  const idx = Math.abs(Math.round(product * 3 + sum + seed)) % 4;
  if (disc < 0) {
    const val = isTrue ? disc : disc + 8;
    return idx % 2 === 0 ? `the discriminant equals ${fmt(val)}` : "the discriminant is negative";
  }
  if (disc === 0) {
    const r = -q.b / (2 * q.a);
    const sq = isTrue ? r * r : r * r + 1;
    return `the repeated root satisfies $x^{2} = ${num(sq)}$`;
  }
  const r = Math.sqrt(disc);
  const r1 = (-q.b + r) / (2 * q.a);
  const r2 = (-q.b - r) / (2 * q.a);
  const diff = Math.abs(r1 - r2);
  const claims = [
    () => {
      const val = isTrue ? product : product + (product >= 0 ? 2 : -2);
      return `the product of the two roots equals ${fmt(val)}`;
    },
    () => {
      const val = isTrue ? sum : sum + 3;
      return `the sum of the two roots equals ${fmt(val)}`;
    },
    () => {
      const val = isTrue ? disc : disc + 5;
      return `the discriminant equals ${fmt(val)}`;
    },
    () => {
      const val = isTrue ? diff : diff + 2;
      return `the larger root minus the smaller equals ${fmt(val)}`;
    },
  ];
  return claims[idx]();
}

function rewriteLinear(old, exp, isTrue, act) {
  const m = meta(exp, "4.1");
  const x = m.roots[0];
  const eq = pickPrimaryEq(old, exp);
  const setup = stripWordSetup(old);
  const isWord =
    setup &&
    !/^The equation/i.test(setup) &&
    !/^In a practice paper the equation/i.test(setup) &&
    setup.length > 20 &&
    !/^\$/.test(setup);

  // Pure arithmetic / identity checks
  if (/^\$5\^\{2\} - 4\^\{2\}\$ equals/.test(old)) {
    return isTrue ? `$5^{2} - 4^{2}$ equals $9$.` : `$5^{2} - 4^{2}$ equals $7$.`;
  }
  if (/^The equation \$0 = 1\$/.test(old)) {
    return isTrue
      ? `The statement $0 = 1$ is a contradiction, so no unknown makes it true.`
      : `The statement $0 = 1$ can be satisfied by choosing the unknown equal to $1$.`;
  }
  if (/km\/h is equivalent to \$15\$ m\/s|km\/h.*\$15\$ m\/s/i.test(old)) {
    return isTrue
      ? `A speed of $54$ km/h equals $15$ m/s because $54 \\div 3.6 = 15$.`
      : `A speed of $54$ km/h equals $20$ m/s because $54 \\div 3.6 = 20$.`;
  }

  if (x != null) {
    const coeffs = [
      [3, 1, 3 * x + 1],
      [2, -2, 2 * x - 2],
      [4, 3, 4 * x + 3],
      [1, 5, x + 5],
    ];
    const [a, b, target] = coeffs[Math.abs(Math.round(x * 7)) % coeffs.length];
    const claim = affineClaim(a, b, target, isTrue);
    if (isWord) return `${setup}. ${act} claims that ${claim}.`;
    const verbal = eq ? verbalLinear(eq) : null;
    if (verbal) return `In a practice item, ${verbal}. ${act} claims that ${claim}.`;
    if (eq) return `In a practice item, an equation equivalent to $${eq}$ is posed. ${act} claims that ${claim}.`;
    return `${setup || "A linear story is posed"}. ${act} claims that ${claim}.`;
  }

  if (isWord) {
    return `${setup}. ${act} claims that translating the story and isolating the unknown requires undoing two inverse operations in order.`;
  }
  return `In a practice item, a linear equation in one unknown is posed. ${act} claims that isolating the unknown requires undoing exactly one multiplication or division step.`;
}

function rewriteQuadratic(old, exp, isTrue, act) {
  const m = meta(exp, "4.2");
  const eqMatch = old.match(/(?:The equation|The quadratic equation|The quadratic) \$([^$]+)\$/);
  const eq = eqMatch ? eqMatch[1] : pickPrimaryEq(old, exp);

  if (/^\$5\^\{2\} - 4\^\{2\}\$ equals/.test(old)) {
    return isTrue ? `$5^{2} - 4^{2}$ equals $9$.` : `$5^{2} - 4^{2}$ equals $7$.`;
  }

  if (/^The equation \$0 = 1\$/.test(old)) {
    return isTrue
      ? `The statement $0 = 1$ is a contradiction, so no unknown makes it true.`
      : `The statement $0 = 1$ can be satisfied by choosing the unknown equal to $1$.`;
  }

  if (eq && /discriminant of/i.test(old) && m.discriminant != null) {
    const val = isTrue ? m.discriminant : m.discriminant + 4;
    return `For $${eq}$, the discriminant equals ${fmt(val)}.`;
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

  if (eq && S2.test(eq) && /= 49/.test(eq)) {
    return isTrue
      ? `A square of area $49$ m$^{2}$ has side length $7$ m.`
      : `A square of area $49$ m$^{2}$ has side length $8$ m.`;
  }

  if (eq && S2.test(eq) && /= 81/.test(eq)) {
    return forEq(eq, act, isTrue ? "the positive geometric root equals $9$" : "the positive geometric root equals $10$");
  }

  if (eq && /has two distinct positive real roots/i.test(old)) {
    const q = quadFromEq(eq);
    if (q) return forEq(eq, act, vietaClaim(q, isTrue, 1));
  }

  if (m.repeated && m.roots.length) {
    const r = m.roots[0];
    const sq = isTrue ? r * r : r * r + 1;
    return forEq(eq || pickPrimaryEq(old, exp), act, `the repeated root satisfies $x^{2} = ${num(sq)}$`);
  }

  if (m.twoDistinct && m.roots.length >= 2) {
    const [r1, r2] = m.roots.sort((a, b) => a - b);
    const diff = r2 - r1;
    const val = isTrue ? diff : diff + 1;
    return forEq(eq || pickPrimaryEq(old, exp), act, `the larger root minus the smaller equals ${fmt(val)}`);
  }

  if (m.noReal && eq) {
    const q = quadFromEq(eq);
    if (q) {
      const disc = q.b * q.b - 4 * q.a * q.c;
      const val = isTrue ? disc : disc + 8;
      return forEq(eq, act, `the discriminant equals ${fmt(val)}`);
    }
  }

  if (eq) {
    const q = quadFromEq(eq);
    if (q) return forEq(eq, act, vietaClaim(q, isTrue, eq.length));
    if (/\(x -/.test(eq)) {
      return forEq(eq, act, isTrue ? "expanding gives a quadratic with two real roots" : "expanding gives a quadratic with no real roots");
    }
  }

  const setup = stripWordSetup(old);
  if (setup && setup.length > 15 && !/^The equation/i.test(setup) && !/^The quadratic/i.test(setup)) {
    return `${setup}. ${act} claims that ${vietaClaim({ a: 1, b: -5, c: 6 }, isTrue, 2)}.`;
  }
  if (eq) return forEq(eq, act, vietaClaim(quadFromEq(eq) || { a: 1, b: -5, c: 6 }, isTrue, 3));
  return `A quadratic equation is posed. ${act} claims that ${isTrue ? "the discriminant is positive" : "the discriminant is negative"}.`;
}

function rewriteRationalRadical(old, exp, isTrue, act) {
  const m = meta(exp, "4.3");
  const eq = pickPrimaryEq(old, exp);
  const setup = stripWordSetup(old);

  if (/gardener adds.*square bed|new bed is still square/i.test(old)) {
    return isTrue
      ? `A square bed with side $4$ m has area $16$ m$^{2}$, which exceeds $15$ m$^{2}$.`
      : `A square bed with side $4$ m has area $16$ m$^{2}$, which is less than $17$ m$^{2}$.`;
  }

  if (/square of area \$13/i.test(old)) {
    return isTrue
      ? `A square of area $13$ m$^{2}$ has side $\\sqrt{13}$ m, and $\\sqrt{13} > 3$.`
      : `A square of area $13$ m$^{2}$ has side $\\sqrt{13}$ m, and $\\sqrt{13} < 3$.`;
  }

  if (/jerrycan|litres of oil|three litres/i.test(old) && !eq) {
    return isTrue
      ? `Three litres split into equal shares that are each one-fourth of a jerrycan. ${act} claims that clearing denominators gives capacity $12$ litres.`
      : `Three litres fill one-fourth of a jerrycan. ${act} claims the capacity is $-12$ litres.`;
  }

  if (/\\lvert/.test(old + exp)) {
    if (m.twoDistinct && m.roots.length >= 2) {
      const [r1, r2] = m.roots.sort((a, b) => a - b);
      const diff = Math.abs(r2 - r1);
      const val = isTrue ? diff : diff + 2;
      return forEq(eq || pickPrimaryEq(old, exp), act, `the two solutions differ by ${fmt(val)} units`);
    }
    if (m.roots.length === 1) {
      const x = m.roots[0];
      const val = isTrue ? 2 * x + 1 : 2 * x + 3;
      return forEq(eq || pickPrimaryEq(old, exp), act, `twice the solution plus one equals ${fmt(val)}`);
    }
  }

  if (/\\sqrt/.test(old + exp) && eq && m.roots.length) {
    const x = m.roots[0];
    const inner = isTrue ? x + 5 : x + 6;
    return forEq(
      eq,
      act,
      `after squaring both sides, checking whether $x + 5$ equals ${fmt(inner)} succeeds`
    );
  }

  if (/\\frac|\\dfrac/.test(old + exp) && eq) {
    if (m.roots.length) {
      const x = m.roots[0];
      const val = isTrue ? 2 * x - 4 : 2 * x - 1;
      return forEq(eq, act, `twice the admissible solution, decreased by four, equals ${fmt(val)}`);
    }
    if (m.noReal) {
      return forEq(eq, act, "clearing denominators yields a linear equation with no admissible root");
    }
  }

  if (setup && setup.length > 20 && !/^The equation/i.test(setup)) {
    return `${setup}. ${act} claims that clearing fractions leads to a linear equation whose solution makes every denominator nonzero.`;
  }
  if (eq) return forEq(eq, act, "every admissible solution makes all denominators nonzero");
  return `A rational or radical equation is posed. ${act} claims that domain restrictions eliminate at least one candidate root.`;
}

function rewriteExponential(old, exp, isTrue, act) {
  const eq = pickPrimaryEq(old, exp);
  const m = meta(exp, "4.4");

  if (m.noReal && eq) {
    const trueClaims = [
      "the right-hand target lies outside the range of the left-hand exponential",
      "no real exponent can produce the given target because the base output stays positive",
      "converting to logarithmic form would require a nonpositive argument",
    ];
    const falseClaims = [
      "a real exponent exists because the base is positive",
      "taking natural logarithms of both sides yields a real solution without restriction",
      "the target sign matches the range of the exponential function",
    ];
    const idx = Math.abs(eq.split("").reduce((s, c) => s + c.charCodeAt(0), 0)) % 3;
    return forEq(eq, act, isTrue ? trueClaims[idx] : falseClaims[idx]);
  }

  if (/0 < x < 1|Every admissible root.*0 < x < 1/i.test(exp) && isTrue) {
    return forEq(eq || pickPrimaryEq(old, exp), act, "every admissible root lies strictly between $0$ and $1$");
  }

  if (/substitut.*u = e\^x/i.test(exp)) {
    return isTrue
      ? `For $${eq || "e^{2x} - 3e^x + 2 = 0"}$, substituting $u = e^x$ yields a quadratic in $u$ with two positive roots.`
      : `For $${eq || "e^{2x} - 3e^x + 2 = 0"}$, substituting $u = e^x$ yields a quadratic in $u$ with no positive roots.`;
  }

  if (eq && /\\log/.test(eq)) {
    const x = m.roots[0];
    if (x != null) {
      const power = isTrue ? (Number.isInteger(Math.log(x) / Math.log(3)) ? Math.round(Math.log(x) / Math.log(3)) : 2) : 5;
      return forEq(eq, act, `converting to exponential form gives $x = 3^{${power}}$`);
    }
    return forEq(eq, act, "the logarithm is defined only for positive arguments");
  }

  if (eq && /\^/.test(eq)) {
    const trueClaims = [
      "after matching bases, the resulting exponent equation is linear in $x$",
      "strict monotonicity of the base guarantees at most one real exponent",
      "rewriting both sides with a common base yields equal exponents",
    ];
    const falseClaims = [
      "matching bases produces two distinct real exponents",
      "the equation has no real solution despite a positive target",
      "the exponent equation obtained is quadratic in $x$",
    ];
    const idx = Math.abs(eq.split("").reduce((s, c) => s + c.charCodeAt(0), 0)) % 3;
    return forEq(eq, act, isTrue ? trueClaims[idx] : falseClaims[idx]);
  }

  return `An exponential or logarithmic equation is posed. ${act} claims that ${isTrue ? "a common-base rewrite reduces it to a linear exponent equation" : "no common-base rewrite exists"}.`;
}

function rewriteStatement(old, exp, isTrue, sub, act) {
  if (sub === "4.1") return rewriteLinear(old, exp, isTrue, act);
  if (sub === "4.2") return rewriteQuadratic(old, exp, isTrue, act);
  if (sub === "4.3") return rewriteRationalRadical(old, exp, isTrue, act);
  if (sub === "4.4") return rewriteExponential(old, exp, isTrue, act);
  return old;
}

function formatStatements(arr) {
  return arr.map((s) => `      \`${s}\`,`).join("\n");
}

let changed = 0;
const samples = {};

for (const path of FILES) {
  const { src, tasks } = parseTasks(path);
  let newSrc = src;
  for (let ti = tasks.length - 1; ti >= 0; ti--) {
    const t = tasks[ti];
    const n = parseInt(t.id.split("-")[2], 10);
    const newStmts = t.statements.map((s, i) => {
      const ns = rewriteStatement(s, t.tactical_explanations[i], t.answer_key[i] === "true", t.subsection, actor(n, i));
      if (ns !== s) changed++;
      return ns;
    });
    if (["math-4-1", "math-4-34", "math-4-60", "math-4-94"].includes(t.id)) samples[t.id] = newStmts;
    const ss = t.chunk.indexOf("statements: [");
    const closeIdx = t.chunk.indexOf("\n    ],", ss);
    const end = closeIdx + "\n    ],".length;
    const nc = t.chunk.slice(0, ss) + `statements: [\n${formatStatements(newStmts)}\n    ],` + t.chunk.slice(end);
    newSrc = newSrc.slice(0, t.chunkStart) + nc + newSrc.slice(t.chunkStart + t.chunk.length);
  }
  fs.writeFileSync(path, newSrc);
}

console.log(`Rewrote ${changed} statements`);
for (const [id, stmts] of Object.entries(samples)) {
  console.log(`\n${id}:`);
  stmts.forEach((s, i) => console.log(`  ${String.fromCharCode(65 + i)}: ${s.slice(0, 150)}`));
}
