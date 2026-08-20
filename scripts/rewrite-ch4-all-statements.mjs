#!/usr/bin/env node
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];
const ACTORS = ["A candidate", "A student", "A clerk", "An examiner"];

const FORBIDDEN = [
  /and that solution is/i,
  /solution is \$[0-9]/i,
  /Then the /i,
  /Then each /i,
  /Then its /i,
  /Then the corresponding/i,
  /reports that the (?:original|wage|number|batch|sample)/i,
  /is therefore \$/i,
  /can only equal/i,
  /^Substituting \$u =/i,
  /gives \$u = \$/i,
  /If the true reading is \$/i,
  /If the reading is \$/i,
  /satisfied when \$x = \$/i,
  /Matching bases in/i,
  /^No real value of/i,
  /^A domain check shows/i,
  /^Rewriting \$/i,
  /^After writing/i,
  /^Expressing \$/i,
  /^Common-base rewriting/i,
  /^Strict monotonicity of base/i,
  /^Every admissible root of \$/i,
  /^A candidate reports/i,
  /admits only one positive root/i,
  /leaves a (?:unique|linear|single)/i,
  /determines a unique/i,
  /becomes linear in the exponent/i,
  /reducing to a linear equation/i,
  /turns \$/i,
  /rules out multiple/i,
  /The only real number that works is \$/i,
  /One number that works is \$/i,
  /A number times itself equals/i,
  /therefore holds \$/i,
  /the full jug holds \$/i,
  /the tank therefore holds/i,
  /Squaring is valid.*length is then \$/i,
  /concludes that the purse started with \$/i,
  /concludes that the lawn is \$/i,
  /reports that the outer length is then \$/i,
  /A carpenter reports that the marked length is \$/i,
  /A payroll clerk reports that the wage is \$/i,
  /A student reports that the full jug holds \$/i,
  /A clerk reports that the tank therefore holds \$/i,
  /The stallholder concludes that the purse started with \$/i,
  /The mass in kilograms equals that scale reading/i,
  /is expanded and solved\. A student concludes/i,
  /Translating the sentence into a linear equation and undoing the addition, the number is \$/i,
  /Then the change was \$/i,
];

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
      if (chunk[i] === "\\") { val += chunk[i++]; if (i < chunk.length) val += chunk[i++]; continue; }
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

function actor(n, i) { return ACTORS[(n * 3 + i) % ACTORS.length]; }

function needsRewrite(s, sub) {
  if (FORBIDDEN.some((p) => p.test(s))) return true;
  if (sub === "4.4" && !(/^The equation \$/.test(s) && /=/.test(s) && /claims/i.test(s))) return true;
  if (/^A square of area \$[^$]+\$ has side \$\\sqrt\{[^}]+\}\$ m\.?$/i.test(s)) return true;
  if (/^The radical equation \$/i.test(s)) return true;
  if (/^The equation \$[^$]+\$ has a unique real solution/i.test(s)) return true;
  if (/^The equation \$[^$]+\$ has a real solution/i.test(s)) return true;
  if (/^The equation \$[^$]+\$ has solution \$x =/i.test(s)) return true;
  if (/^The equation \$[^$]+\$ means/i.test(s)) return true;
  if (/^A clerk reports that the original bill was \$/i.test(s)) return true;
  if (/^A shop doubles.*reports that the original price was \$/i.test(s)) return true;
  if (/^A baker doubles.*reports that the original batch was \$/i.test(s)) return true;
  if (/^A chemist takes.*reports that the original sample was \$/i.test(s)) return true;
  if (/^A carpenter reports that the marked length is \$/i.test(s)) return true;
  if (/^A payroll clerk reports that the wage is \$/i.test(s)) return true;
  if (/^A student reports that the full jug holds \$/i.test(s)) return true;
  if (/^A clerk reports that the tank therefore holds \$/i.test(s)) return true;
  if (/^The stallholder concludes that the purse started with \$/i.test(s)) return true;
  // Word problems: require actor + claims
  if (sub === "4.1" && !/A (?:candidate|student|clerk|examiner|coach|passenger|surveyor|gardener|baker|chemist|driver|worker|shopper|plan|payroll clerk|stallholder|carpenter) claims/i.test(s)) return true;
  // Property at end without actor
  if (/(?:exceeds|less than|greater than|is an odd|is an even|is positive|is negative|is divisible|no real|two distinct|exactly one|some real|at least one|holds more|can still match|can be satisfied|reduces to|yields|works|satisfies|accounted for|split into|match if|fill the|doubl|triples|reports|concludes|then gives|then produces|then isolating|then the|then each|then its)\b/i.test(s) &&
    !/A (?:candidate|student|clerk|examiner) claims/i.test(s) &&
    !/^In a practice paper/i.test(s) &&
    !/^The equation \$/i.test(s)) return true;
  // Method-only equation prose (4.2-4.3)
  if ((sub === "4.2" || sub === "4.3") && /^The (?:linear )?equation \$/.test(s) && !/claims/i.test(s)) return true;
  if (/^Expanding \$/.test(s) && !/claims/i.test(s)) return true;
  if (/^Dividing both sides/.test(s) && !/claims/i.test(s)) return true;
  if (/^If \$\\dfrac/.test(s) && !/claims/i.test(s)) return true;
  if (/^Half of a number/.test(s) && !/claims/i.test(s)) return true;
  if (/^Restoring/.test(s) && !/claims/i.test(s)) return true;
  if (/^Translating the sentence/.test(s) && !/claims/i.test(s)) return true;
  if (/^After \$8\$ is subtracted/.test(s) && !/claims/i.test(s)) return true;
  if (/^A number increased by/.test(s) && !/claims/i.test(s)) return true;
  if (/^A scale shows/.test(s) && !/claims/i.test(s)) return true;
  if (/^If one side of a rectangle/.test(s)) return true;
  if (/^If a square of side/.test(s)) return true;
  if (/^Pipe \$A\$ fills/.test(s)) return true;
  if (/^Three times a temperature change.*reports that the change was/i.test(s)) return true;
  if (/^A gardener has a rectangular lawn.*concludes that/i.test(s)) return true;
  if (/^A sports pitch measures.*reports that/i.test(s)) return true;
  if (/^Two pipes fill a tank together.*Then the faster/i.test(s)) return true;
  if (/^Two workers finish a job together.*Then the faster/i.test(s)) return true;
  if (/^A square has area.*Then each side/i.test(s)) return true;
  if (/^An isosceles right triangle.*Then its area/i.test(s)) return true;
  return false;
}

function extractEquations(text) {
  const eqs = [];
  for (const m of text.matchAll(/\$([^$]+)\$/g)) {
    const t = m[1].trim();
    if (/=/.test(t) && t.length > 3 && !/^x = /i.test(t) && !/\\ge|\\le|\\Delta|\\iff|\\ne/i.test(t)) eqs.push(m[1]);
  }
  return eqs;
}

function pickEquation(old, exp) {
  const fromOld = extractEquations(old);
  const fromExp = extractEquations(exp);
  const all = [...new Set([...fromOld, ...fromExp])];
  all.sort((a, b) => {
    const sc = (e) => (fromOld.includes(e) ? 5 : 0) + (/\\sqrt|\\frac|\\lvert|\\log|\\ln|\^|e\^{/.test(e) ? 3 : 0) + (/x/.test(e) ? 2 : 0);
    return sc(b) - sc(a);
  });
  return all[0] || null;
}

function parseSolution(exp) {
  const pats = [
    /(?:isolated|recovered|unique|The) (?:real )?solution is \$x = (-?\d+(?:\.\d+)?)\$/i,
    /The solution is \$x = (-?\d+(?:\.\d+)?)\$/i,
    /That \$(-?\d+(?:\.\d+)?)\$ is the original/i,
    /(?:holds|capacity) \$(-?\d+(?:\.\d+)?)\$/i,
    /The (?:original|change|length|distance|width|wage|fee|number|son|area|price|bill|purse|current|speed|time|concentration|mixture|path|frame|marked length|batch|sample|jug|tank|bill|price) is \$(-?\d+(?:\.\d+)?)/i,
    /\$\$x = (-?\d+(?:\.\d+)?)\$\$/,
  ];
  for (const p of pats) { const m = exp.match(p); if (m) return parseFloat(m[1]); }
  const xs = [...exp.matchAll(/\$x = (-?\d+(?:\.\d+)?)\$/g)];
  if (xs.length) return parseFloat(xs[xs.length - 1][1]);
  if (/2\^x = 2\^5|x = 5/i.test(exp)) return 5;
  if (/x = 3\^2 = 9/i.test(exp)) return 9;
  if (/x = 2\^{-3}|x = \\frac\{1\}\{8\}/i.test(exp)) return 0.125;
  return null;
}

function meta(exp) {
  return {
    noReal: /no real (?:solution|root)|zero real solution|cannot equal \$-|not in the range|A positive output cannot/i.test(exp),
    twoDistinct: /two distinct real (?:solution|root)|exactly two real solution|two different real|two distinct integer/i.test(exp),
    val: parseSolution(exp),
  };
}

function claimText(isTrue, hint, val, sub, exp) {
  const m = meta(exp);
  if (/and that solution is \$(\d+)\$/i.test(hint)) {
    return isTrue ? tp(val, hint) : fp(val, hint);
  }
  if (/and that solution is (odd|even|positive|negative|an integer|not an integer|a non-integer rational number|divisible by \$6\$)/i.test(hint)) {
    return `the unique real solution is ${hint.match(/and that solution is ([^.]+)/i)[1]}`;
  }
  if (/has two distinct integer solutions/i.test(hint)) {
    return isTrue ? "the equation has two distinct integer solutions" : "the equation has exactly one integer solution";
  }
  if (/can only equal/i.test(hint)) {
    return isTrue ? "exactly two distinct real solutions exist" : "exactly one real solution exists";
  }
  if (/^Substituting \$u = e\^x/i.test(hint)) {
    return "substituting $u = e^x > 0$ yields two positive values of $u$";
  }
  if (sub === "4.4") {
    if (/No real value|2\^x = -8|5\^x = -1|7\^x = 0|e\^x = 0|cannot equal \$-|cannot be satisfied|not in the range|can hold for some real/i.test(hint)) {
      return isTrue ? "no real solution exists" : "some real exponent satisfies it";
    }
    if (/2\^x = 32|Matching bases in \$2\^x = 32\$/i.test(hint) && isTrue) return "the unique real solution is an odd integer";
    if (/\\left\(\\frac\{1\}\{2\}\\right\)\^x = \\frac\{1\}\{8\}|Rewriting.*frac\{1\}\{2\}/i.test(hint) && isTrue) return "exactly one real exponent works";
    if (/A student claims that \$5\^x = -1\$ can hold/i.test(hint)) return "some real exponent satisfies it";
    if (/0 < x < 1|Every admissible root.*0 < x < 1/i.test(hint)) return "every admissible root satisfies $0 < x < 1$";
    if (/exactly one positive|one positive root|positive admissible|admits only one positive/i.test(hint)) return "exactly one positive admissible root exists";
    if (/odd integer/i.test(hint)) return isTrue ? tp(val, "odd") : fp(val, "odd");
    if (/negative value|every root.*negative|is negative/i.test(hint)) return isTrue ? tp(val, "negative") : fp(val, "negative");
    if (/positive exponent/i.test(hint)) return isTrue ? tp(val, "positive") : fp(val, "positive");
    if (/more than one|multiple distinct|no admissible|no real exponent|has no admissible/i.test(hint)) {
      return isTrue ? "no real solution exists" : "more than one distinct real solution exists";
    }
    if (/cannot be satisfied/i.test(hint)) return isTrue ? "no real solution exists" : "some real exponent satisfies it";
    return isTrue ? "exactly one real solution exists" : "more than one distinct real solution exists";
  }
  if (/Then the |Then each |Then its |Then the corresponding|was \$|is \$[0-9].*(?:EUR|litres|cm|km|degrees|minutes|hours|seconds|years|m wide|cm wide|km\/h|m\/s|\\%)/i.test(hint)) {
    const wp = isTrue ? tp(val, "exceeds") : fp(val, "exceeds");
    return wp.replace("the unique real solution ", "the recovered value ");
  }
  if (/reports that|concludes that|therefore holds|therefore \$|is therefore \$/i.test(hint)) {
    const wp = isTrue ? tp(val, "exceeds") : fp(val, "exceeds");
    return wp.replace("the unique real solution ", "the recovered value ");
  }
  if (/^A square of area/i.test(hint)) return "the side length is positive";
  if (/^A square has area/i.test(hint)) {
    const wp = isTrue ? tp(val, "exceeds") : fp(val, "exceeds");
    return wp.replace("the unique real solution ", "the side length ");
  }
  if (/times itself equals/i.test(hint)) return isTrue ? "exactly two distinct real solutions exist" : "exactly one real solution exists";
  if (/The only real number that works is \$/i.test(hint)) return isTrue ? "exactly one positive real solution exists" : "exactly two distinct real solutions exist";
  if (/One number that works is \$/i.test(hint)) return isTrue ? "exactly two distinct real solutions exist" : "exactly one real solution exists";
  if (/Squaring is valid.*length is then \$/i.test(hint)) return isTrue ? tp(val, "positive") : fp(val, "positive");
  if (/is expanded and solved/i.test(hint)) return isTrue ? tp(val, "even") : fp(val, "even");
  if (/If the true reading is \$/i.test(hint)) return isTrue ? "the equation has two distinct integer solutions" : "the equation has exactly one integer solution";
  if (m.twoDistinct) return isTrue ? "exactly two distinct real solutions exist" : "exactly one real solution exists";
  if (m.noReal) return isTrue ? "no real solution exists" : sub === "4.4" ? "some real exponent satisfies it" : "at least one real solution exists";
  if (val != null) return isTrue ? tp(val, hint) : fp(val, hint);
  return isTrue ? "exactly one real solution exists" : "no real solution exists";
}

function tp(v, hint) {
  if (/odd/i.test(hint)) return "the unique real solution is an odd integer";
  if (/even/i.test(hint)) return "the unique real solution is an even integer";
  if (/positive/i.test(hint)) return "the unique real solution is positive";
  if (/negative/i.test(hint)) return "the unique real solution is negative";
  if (/non-integer|not an integer/i.test(hint)) return "the unique real solution is not an integer";
  if (/divisible/i.test(hint)) return "the unique real solution is divisible by $6$";
  if (/exceeds|greater|more than/i.test(hint) && v != null) {
    const b = Math.max(0, Math.round(Math.abs(v)) - Math.max(2, Math.floor(Math.abs(v) * 0.25)));
    return `the unique real solution exceeds $${b}$`;
  }
  if (v != null && Number.isInteger(v)) return v % 2 === 0 ? "the unique real solution is an even integer" : "the unique real solution is an odd integer";
  if (v != null && v > 0) return "the unique real solution is positive";
  return "exactly one real solution exists";
}

function fp(v, hint) {
  if (/odd/i.test(hint)) return "the unique real solution is an even integer";
  if (/even/i.test(hint)) return "the unique real solution is an odd integer";
  if (/positive/i.test(hint)) return "the unique real solution is negative";
  if (/negative/i.test(hint)) return "the unique real solution is positive";
  if (/exceeds|greater|more than/i.test(hint) && v != null) {
    return `the unique real solution exceeds $${Math.ceil(Math.abs(v) * 1.5 + 5)}$`;
  }
  if (v != null && Number.isInteger(v)) return v % 2 === 0 ? "the unique real solution is an odd integer" : "the unique real solution is an even integer";
  if (v != null && v > 0) return "the unique real solution is negative";
  return "the unique real solution exceeds $100$";
}

function stripSetup(old) {
  return old
    .replace(/\.\s*(?:A (?:candidate|student|clerk|examiner|coach|passenger|baker|chemist|surveyor|gardener|plan|shopper|driver|worker|payroll clerk|stallholder|carpenter)[^.]*)\.?$/i, "")
    .replace(/\.\s*Then the [^.]+\.?$/i, "")
    .replace(/\.\s*Then (?:each|its|the corresponding) [^.]+\.?$/i, "")
    .replace(/\.\s*The [^.]+ (?:is|was|are) therefore \$[^.]+\.?$/i, "")
    .replace(/\.\s*Translating the sentence into a linear equation and undoing the addition, the number is \$[^.]+\.?$/i, "")
    .replace(/\.\s*Squaring is valid because both sides are nonnegative, and the length is then \$[^.]+\.?$/i, "")
    .replace(/ has a unique real solution, and that solution is [^.]+\.?$/i, "")
    .replace(/ has a real solution, and that solution is [^.]+\.?$/i, "")
    .replace(/ has a unique real solution that is [^.]+\.?$/i, "")
    .replace(/ has solution \$x = [^,$]+\$, and that solution is [^.]+\.?$/i, "")
    .replace(/ is expanded and solved\. A student concludes that its unique real solution is [^.]+\.?$/i, "")
    .replace(/^The (?:radical )?equation \$[^$]+\$\s*/i, "")
    .trim();
}

function rewrite(old, exp, isTrue, sub, act) {
  const eq = pickEquation(old, exp);
  const claim = claimText(isTrue, old, parseSolution(exp), sub, exp);

  // Special: math-4-60 E style sqrt{x+5}=4 false → exceeds 20
  if (/\\sqrt\{x \+ 5\} = 4/.test(old) && /solution is \$21\$/.test(old)) {
    return `The equation $\\sqrt{x + 5} = 4$. ${act} claims the unique real solution exceeds $20$.`;
  }

  // Preserve trailing property clause for word problems already good
  const trailingProp = old.match(/(?:The original bill exceeds|The new area exceeds|The mass in kilograms equals|The number exceeds|The change exceeds|The recovered value exceeds|The wage exceeds|The tank started with more|The original number exceeds|The speed exceeds|The side length|Both numbers are|One of the numbers|exactly two distinct|no real solution|at least one real|some real exponent|every admissible root|exactly one positive|exactly one real|more than one distinct|the discriminant|the equation has|substituting \$u|divisible by|is strictly greater|is at most|is not an integer|is an odd integer|is an even integer|is positive|is negative|is not strictly|can still match|can be satisfied|reduces to|yields two|works when|fill the|holds more|holds less|exceeds \$|less than \$|greater than \$|between \$|accounted for more|split into|no admissible)[^.]*\.?$/i);
  if (trailingProp && !needsRewrite(old.replace(trailingProp[0], ""), sub)) {
    const setup = old.slice(0, old.lastIndexOf(trailingProp[0])).replace(/\.$/, "");
    return `${setup}. ${act} claims that ${trailingProp[0].replace(/^The /, "the ").replace(/\.$/, "")}.`;
  }

  if (sub === "4.4" || (eq && (/^The equation|^The radical|^If \$\\|^Substituting|^Solving|^Clearing|^Matching|^Every admissible|^No real value|^A domain check|^Rewriting|^After writing|^Expressing|^Common-base|^Strict monotonicity|can only equal|\\sqrt|\\frac|\\lvert|x\^2|x\^{2}|\^x|\\log|\\ln|e\^|^The linear equation|^Expanding \$|^Dividing both|^Half of a number|^If \$\\dfrac|^A square root of a length|^A square has area|^A number times itself|^An isosceles|^Two numbers add|^Two pipes fill|^Two workers finish/i.test(old)))) {
    let equation = eq;
    const oldEqs = extractEquations(old);
    if (oldEqs.length) equation = oldEqs.sort((a, b) => b.length - a.length)[0];
    // Fix 4.4 B: use 2^x = -8
    if (/No real value of \$x\$ makes \$2\^x\$ equal \$-8\$/i.test(old)) equation = "2^x = -8";
    // Fix 4.4 E: prefer (1/2)^x form
    if (/\\left\(\\frac\{1\}\{2\}\\right\)\^x = \\frac\{1\}\{8\}/i.test(old)) equation = "\\left(\\frac{1}{2}\\right)^x = \\frac{1}{8}";
    if (equation) {
      const c = claim.startsWith("the ") || claim.startsWith("exactly ") || claim.startsWith("no ") || claim.startsWith("more ") || claim.startsWith("every ") || claim.startsWith("at least ") || claim.startsWith("some ") || claim.startsWith("substituting")
        ? claim : "that " + claim;
      return `The equation $${equation}$. ${act} claims ${c}.`;
    }
  }

  if (/^In a practice paper the equation \$/.test(old)) {
    const e = extractEquations(old)[0];
    return `In a practice paper the equation $${e}$ appears. ${act} claims ${claim}.`;
  }

  let setup = stripSetup(old);
  if (/^Solving \$/.test(old)) setup = old.replace(/ by first subtracting \$2\$ and then multiplying by \$3\$, a candidate claims that the unique real solution is odd\.?$/i, "");
  if (!setup.endsWith(".")) setup += ".";
  return `${setup} ${act} claims that ${claim}.`;
}

function formatStatements(arr) {
  return arr.map((s) => `      \`${s}\`,`).join("\n");
}

let changed = 0, total = 0;
const samples = {};

for (const path of FILES) {
  const { src, tasks } = parseTasks(path);
  let newSrc = src;
  for (let ti = tasks.length - 1; ti >= 0; ti--) {
    const t = tasks[ti];
    const n = parseInt(t.id.split("-")[2], 10);
    const newStmts = t.statements.map((s, i) => {
      total++;
      if (!needsRewrite(s, t.subsection)) return s;
      changed++;
      return rewrite(s, t.tactical_explanations[i], t.answer_key[i] === "true", t.subsection, actor(n, i));
    });
    const ss = t.chunk.indexOf("statements: [");
    const closeIdx = t.chunk.indexOf("\n    ],", ss);
    const end = closeIdx + "\n    ],".length;
    const nc = t.chunk.slice(0, ss) + `statements: [\n${formatStatements(newStmts)}\n    ],` + t.chunk.slice(end);
    newSrc = newSrc.slice(0, t.chunkStart) + nc + newSrc.slice(t.chunkStart + t.chunk.length);
    if (["math-4-1", "math-4-60", "math-4-94"].includes(t.id)) samples[t.id] = newStmts;
  }
  fs.writeFileSync(path, newSrc);
}

console.log(`Changed ${changed}/${total} statements`);
for (const [id, stmts] of Object.entries(samples)) {
  console.log(`\n${id}:`);
  stmts.forEach((s, i) => console.log(`  ${String.fromCharCode(65 + i)}: ${s}`));
}
