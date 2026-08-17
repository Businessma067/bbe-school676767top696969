/**
 * Conservative global slash→frac for Chapter 11.
 * No $ span walking — only explicit safe patterns.
 * Never touch difficulty_level `n/5`.
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");
const before = s;
const F = "\\\\frac";
let n = 0;

function skipDifficulty(s, offset) {
  const ctx = s.slice(Math.max(0, offset - 40), offset + 10);
  if (/difficulty_level:\s*`?\s*$/.test(s.slice(Math.max(0, offset - 40), offset))) return true;
  if (/difficulty_level:\s*`\d+$/.test(ctx.replace(/\n/g, " "))) return true;
  // rated 1/5 to 5/5 style meta
  if (/\b(?:rated|to)\s+\d+$/i.test(s.slice(Math.max(0, offset - 20), offset))) return true;
  return false;
}

function replacer(re, build) {
  s = s.replace(re, (...args) => {
    const offset = args[args.length - 2];
    if (typeof offset === "number" && skipDifficulty(s, offset)) return args[0];
    n += 1;
    return build(...args);
  });
}

// Protect existing \\frac{...}{...} from further slash rewrites inside
const bags = [];
s = s.replace(/\\+frac\{[^{}]*\}\{[^{}]*\}/g, (m) => {
  const k = `⟦${bags.length}⟧`;
  bags.push(m);
  return k;
});

// ^{a/b} and ^a/b in exponents already written as ^{...}
replacer(/\^\{(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)\}/g, (_, a, b) => `^{${F}{${a}}{${b}}}`);
replacer(/\^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)(?![0-9.])/g, (_, a, b) => `^{${F}{${a}}{${b}}}`);

// Plain numeric ratios: 0.072/12, 2419.20/1.08, etc.
replacer(/(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)(?![0-9.])/g, (_, a, b) => `${F}{${a}}{${b}}`);

// Restore fracs
for (let i = bags.length - 1; i >= 0; i -= 1) {
  s = s.split(`⟦${i}⟧`).join(bags[i]);
}

// \ln(a)/\ln(b)  and  \ln a / \ln b  (no nested paren rewrite)
replacer(
  /\\+ln\(([^()]+)\)\s*\/\s*\\+ln\(([^()]+)\)/g,
  (_, a, b) => `${F}{\\ln(${a})}{\\ln(${b})}`,
);
replacer(
  /\\+ln\s+(-?\d+(?:\.\d+)?)\s*\/\s*\\+ln\s+(-?\d+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{\\ln ${a}}{\\ln ${b}}`,
);

// \ln(expr)/t or \ln M / \ln(1+i) already handled; \ln(1+i)/n style
replacer(
  /\\+ln\(([^()]+)\)\s*\/\s*([A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{\\ln(${a})}{${b}}`,
);
replacer(
  /\\+ln\s+([A-Za-z]|-?\d+(?:\.\d+)?)\s*\/\s*([A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{\\ln ${a}}{${b}}`,
);

// Simple 1/n, r/n, M/r, P/A when not already frac (letter/letter or num/letter)
// Only inside math-ish contexts: preceded by $ or = or ( or space after math punctuation
replacer(
  /(?<=[$\s=(+\-{,])([A-Za-z]|-?\d+(?:\.\d+)?)\/([A-Za-z](?:_[A-Za-z0-9]+)?)(?![A-Za-z0-9])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// Normalize over-escaped
s = s.replace(/\\{3,}frac/g, "\\\\frac");

// Guardrails
if (/difficulty_level:\s*`\\+frac/.test(s) || /difficulty_level:\s*`\d+\\+frac/.test(s)) {
  throw new Error("difficulty corrupted");
}
if (/\\{3,}frac/.test(s)) {
  throw new Error("triple-backslash frac remains");
}
// Broken ln forms like \frac{\ln(S(t)}{S}_0)
if (/\\frac\{\\ln\([^}]*\{[^}]*\}\{[^}]*\}/.test(s) === false) {
  // check specific bad pattern
}
if (/frac\{\\+ln\([^)]*\/[^)]*\}/.test(s)) {
  // ok - frac of ln of ratio
}
if (/\\\\frac\{\\\\ln\([^}]+\/[^}]+\}/.test(s)) {
  console.warn("warn: possible broken ln frac");
}

fs.writeFileSync(path, s);
console.log({
  conversions: n,
  changed: s !== before,
  leftover072: (s.match(/0\.072\/12/g) || []).length,
  frac072: (s.match(/\\\\frac\{0\.072\}\{12\}/g) || []).length,
  badTriple: (s.match(/\\{3,}frac/g) || []).length,
  diffOk: (s.match(/difficulty_level:\s*`\d+\/5`/g) || []).length,
});
