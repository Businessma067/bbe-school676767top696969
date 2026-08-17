/**
 * Safe Ch11 division→frac (clean tree).
 * Critical: never match digit-runs that are part of 8,000-style groups
 * unless the FULL grouped number is consumed on each side as appropriate.
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");
const before = s;
const F = "\\\\frac";
let n = 0;

function skipDiff(offset) {
  const left = s.slice(Math.max(0, offset - 48), offset);
  return /difficulty_level:\s*`?\s*$/.test(left) || /difficulty_level:\s*`\d+$/.test(left);
}

function go(re, build) {
  s = s.replace(re, (...args) => {
    const offset = args[args.length - 2];
    if (typeof offset === "number" && skipDiff(offset)) return args[0];
    n += 1;
    return build(...args);
  });
}

const bags = [];
function protect() {
  bags.length = 0;
  s = s.replace(/\\+frac\{[^{}]*\}\{[^{}]*\}/g, (m) => {
    const k = `⟦${bags.length}⟧`;
    bags.push(m);
    return k;
  });
}
function restore() {
  for (let i = bags.length - 1; i >= 0; i -= 1) {
    s = s.split(`⟦${i}⟧`).join(bags[i]);
  }
  bags.length = 0;
}

protect();

// ^{a/b}
go(/\^\{(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)\}/g, (_, a, b) => `^{${F}{${a}}{${b}}}`);

// both sides comma-grouped: 80,000/50,000
go(
  /(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?)\/(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// left comma-grouped / plain: 8,000/1.10  or  6,000/270
go(
  /(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)(?![0-9,])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// plain / comma-grouped
go(
  /(?<![,\d])(-?\d+(?:\.\d+)?)\/(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// plain/plain — not preceded by comma or digit (avoids ,000/…)
go(
  /(?<![,\d])(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)(?![0-9,])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// spaced plain
go(
  /(?<![,\d])(-?\d+(?:\.\d+)?)\s+\/\s+(-?\d+(?:\.\d+)?)(?![0-9,])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

restore();
protect();

go(
  /(?<=[$\s=(+\-{,])([A-Za-z])\/(\d+(?:\.\d+)?)(?![0-9.A-Za-z])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);
go(/(?<![.\\d])1\/\(([A-Za-z0-9.+]+)\)(\^\{[^}]+\})?/g, (_, d, e) => `${F}{1}{(${d})${e || ""}}`);
go(/(?<![A-Za-z.\\])a\/\(1-k\)/g, () => `${F}{a}{(1-k)}`);
go(/a\(1-k\^\{n\}\)\/\(1-k\)/g, () => `${F}{a(1-k^{n})}{(1-k)}`);
go(/r\^\{2\}\/2/g, () => `${F}{r^{2}}{2}`);
go(/dt\^\*\/dr/g, () => `${F}{dt^*}{dr}`);
go(
  /(?<=[$\s=(+\-{,])([A-Za-z](?:_[A-Za-z0-9]+)?(?:\([^()]{0,20}\))?)\s*\/\s*([A-Za-z](?:_[A-Za-z0-9]+)?(?:\([^()]{0,20}\))?)/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);
go(
  /(?<=[$\s=(+\-{,])([A-Za-z](?:\([^()]{0,20}\))?)\s*\/\s*(e\^\{[^}]+\})/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);
go(/\(([^()]{1,80})\)\s*\/\s*\(([^()]{1,80})\)/g, (_, a, b) => `${F}{(${a})}{(${b})}`);
go(/\(([^()]{1,80})\)\s*\/\s*(-?\d+(?:\.\d+)?)/g, (_, a, b) => `${F}{(${a})}{${b}}`);

restore();

// ln forms — always emit \\ln (two backslashes in file)
go(
  /\\+ln\(([A-Za-z0-9_]+(?:\([^()]{0,15}\))?)\/([A-Za-z0-9_]+(?:\([^()]{0,15}\))?)\)/g,
  (_, a, b) => `\\ln(${F}{${a}}{${b}})`,
);
go(
  /\\+ln\((\\+frac\{[^{}]*\}\{[^{}]*\})\)\s*\/\s*(\([^()]{1,60}\)|[A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{\\ln(${a})}{${b}}`,
);
go(
  /\\+ln\(([^()\\/\u0370-\u03FF]+?)\)\s*\/\s*(\([^()]{1,60}\)|\\+ln\([^()]+\)|[A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{\\ln(${a})}{${b}}`,
);
go(
  /\\+ln\s+(-?\d+(?:\.\d+)?|[A-Za-z])\s*\/\s*\\+ln(?:\s+|\()(-?\d+(?:\.\d+)?|[A-Za-z](?:\([^()]+\))?)/g,
  (_, a, b) => `${F}{\\ln ${a}}{\\ln ${b}}`,
);
go(
  /\\+ln\s+(-?\d+(?:\.\d+)?|[A-Za-z])\s*\/\s*([A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?)/g,
  (_, a, b) => `${F}{\\ln ${a}}{${b}}`,
);
go(/-\\+ln\(([^()]+)\)\s*\/\s*([A-Za-z\\]+)/g, (_, a, b) => `-${F}{\\ln(${a})}{${b}}`);

s = s.replace(/\\{3,}frac/g, "\\\\frac");

if ((s.match(/difficulty_level:\s*`\d+\/5`/g) || []).length !== 123) {
  throw new Error("difficulty corrupted");
}
const corrupt = s.match(/\d,\\+frac\{/g) || [];
if (corrupt.length) {
  throw new Error("comma-frac corruption: " + corrupt.slice(0, 5).join(" | "));
}
if ((s.match(/\{\\ln\(/g) || []).length) {
  s = s.replace(/\{\\ln\(/g, "{\\\\ln(");
  s = s.replace(/\{\\ln /g, "{\\\\ln ");
}

fs.writeFileSync(path, s);
console.log({
  n,
  changed: s !== before,
  left072: (s.match(/0\.072\/12/g) || []).length,
  frac072: (s.match(/\\\\frac\{0\.072\}\{12\}/g) || []).length,
  frac8000: (s.match(/\\\\frac\{8,000\}\{1\.10\}/g) || []).length,
  corrupt: (s.match(/\d,\\+frac\{/g) || []).length,
  diffs: (s.match(/difficulty_level:\s*`\d+\/5`/g) || []).length,
});
