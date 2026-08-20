/**
 * 13.18-style long explanations + clean exam statements (no parens/hints).
 */

export function cleanStmt(s) {
  let t = s
    .replace(/^In an exam item,\s+/i, "")
    .replace(/^Suppose that\s+/i, "")
    .replace(/^Consider a case where\s+/i, "")
    .replace(/^Under these conditions,\s+/i, "")
    .replace(/\s*;\s*domain[^.]*\./gi, ".")
    .replace(/\s*\(base \$10\$\)/gi, "")
    .replace(/\s*\(decadic[^)]*\)/gi, "")
    .replace(/\s*\(pure dilution\)/gi, "")
    .replace(/\s*\(ignore death\)/gi, "")
    .replace(/\s*\(domain respected\)/gi, "")
    .replace(/\s*\(bank rounds[^)]*\)/gi, "")
    .replace(/\s*\(not the arithmetic mean[^)]*\)/gi, "")
    .replace(/\s*\(both open[^)]*\)/gi, "")
    .replace(/\s*\(entire fund[^)]*\)/gi, "")
    .replace(/\s*\(volumes add[^)]*\)/gi, "")
    .replace(/\s*\(no spillage\)/gi, "")
    .replace(/\s*\(nothing remains\)/gi, "")
    .replace(/\s*\(use \$[^)]+\)/gi, "")
    .replace(/\s*\(no withdrawals\)/gi, "")
    .replace(/\s*\(exact surd[^)]*\)/gi, "")
    .replace(/\s*\(\$x\\neq[^)]+\)/gi, "")
    .replace(/\s*\(use \$[^)]+\)/gi, "")
    .replace(/\s*\(years\)/gi, "")
    .replace(/\s*\(right angle[^)]*\)/gi, "");

  const parts = t.split(/(\$[^$]+\$)/);
  t = parts
    .map((p, i) => (i % 2 === 1 ? p : p.replace(/\s*\([^)]+\)/g, "")))
    .join("")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
  return t;
}

/** Keep task numbers exam-sized. */
export function capInt(n, max = 96) {
  if (!Number.isFinite(n)) return 12;
  if (Math.abs(n) <= max) return Math.round(n);
  return ((Math.round(n) % max) + max) % max || 12;
}

export function fracStr(num, den) {
  if (num === den) return "$1$";
  if (num * 2 === den) return `$\\frac{1}{2}$`;
  if (num * 3 === den) return `$\\frac{1}{3}$`;
  if (num * 4 === den) return `$\\frac{1}{4}$`;
  if (num * 5 === den) return `$\\frac{1}{5}$`;
  return `$\\frac{${num}}{${den}}$`;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

/** Clean numeric display: prefer small fractions, else at most 2 decimals. */
export function fmtNum(n, { maxDec = 2 } = {}) {
  if (!Number.isFinite(n)) return "0";
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));

  for (const den of [2, 3, 4, 5, 6, 7, 8, 9, 10, 12]) {
    const num = Math.round(n * den);
    if (Math.abs(num / den - n) < 1e-9) {
      if (num === 0) return "0";
      const g = gcd(num, den);
      const n2 = num / g;
      const d2 = den / g;
      if (d2 === 1) return String(n2);
      if (Math.abs(n2) > 24 || d2 > 8) continue;
      if (n2 < 0) return `-\\frac{${-n2}}{${d2}}`;
      return `\\frac{${n2}}{${d2}}`;
    }
  }

  const r = Math.round(n * 10 ** maxDec) / 10 ** maxDec;
  return String(r);
}

/** Wrap fmtNum for inline math mode. */
export function fmtMath(n) {
  const s = fmtNum(n);
  return s.includes("\\frac") ? `$${s}$` : `$${s}$`;
}

/**
 * Long explanation in MATH 13.18 style: intro → model → steps → verdict.
 */
export function mkExplLong(isTrue, { intro, model, steps = [], check, verdict }) {
  const out = [`**{L}.** → ${isTrue ? "True" : "False"}`, ""];
  if (intro) {
    out.push(intro, "");
  }
  if (model) {
    out.push(model, "");
  }
  for (const step of steps) {
    if (!step) continue;
    out.push(step, "");
  }
  if (check) {
    out.push(check, "");
  }
  out.push(verdict || `The statement is ${isTrue ? "True" : "False"}.`);
  return out.join("\n");
}

export function explIntro(kind) {
  const map = {
    linear:
      "Translate the wording into one linear equation in a single unknown. Isolate the variable and compare the recovered value with the closing claim.",
    quadratic:
      "Form a quadratic equation from the geometry or number conditions. Factor when possible, reject inadmissible roots, then test the claim.",
    rational:
      "Write the work-rate or rational model as an equation in one variable. Clear denominators if needed, solve, and check against the claim.",
    radical:
      "State the equation implied by the geometry or radical condition. Square only after checking the domain, then verify the claim.",
    abs:
      "Split the absolute-value equation into the two linear cases, solve each on its domain, and combine the admissible results before judging the claim.",
    explog:
      "Use log and exponential laws to reduce the equation to a single logarithm or power. Respect the domain, solve for the variable, then compare with the claim.",
  };
  return map[kind] || map.linear;
}

export function verdict1318(isTrue, detail) {
  if (detail) {
    return `Matching ${detail} to the claim, the statement is ${isTrue ? "True" : "False"}.`;
  }
  return `Matching the solved value to the claim, the statement is ${isTrue ? "True" : "False"}.`;
}
