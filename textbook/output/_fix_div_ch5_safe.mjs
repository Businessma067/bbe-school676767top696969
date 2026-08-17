/**
 * Safe Ch5: only clear math ratios → frac. Leave unit rates (/month, /min, /GB, km/h).
 */
import fs from "fs";

const path = "src/data/math-ch5-linear-equations.ts";
let s = fs.readFileSync(path, "utf8");
const F = "\\\\frac";
let n = 0;
const go = (re, build) => {
  s = s.replace(re, (...args) => {
    n += 1;
    return build(...args);
  });
};

const bags = [];
s = s.replace(/\\+frac\{[^{}]*\}\{[^{}]*\}/g, (m) => {
  const k = `⟦${bags.length}⟧`;
  bags.push(m);
  return k;
});

// ^{a/b}
go(/\^\{(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)\}/g, (_, a, b) => `^{${F}{${a}}{${b}}}`);

// plain numeric in math-ish contexts (not units): require not followed by letter unit
go(
  /(?<![,\d])(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)(?![0-9,A-Za-z])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// (expr)/num when followed by = or end of math
go(/\(([^()]{1,60})\)\/(-?\d+(?:\.\d+)?)(?=\s*=)/g, (_, a, b) => `${F}{(${a})}{${b}}`);

// a/b style single letters in $...$ only — do via limited patterns
go(/\$([A-Za-z])\/([A-Za-z])\$/g, (_, a, b) => `$${F}{${a}}{${b}}$`);
go(/\$([A-Za-z])\/(\d+)\$/g, (_, a, b) => `$${F}{${a}}{${b}}$`);
go(/\$(\d+)\/([A-Za-z])\$/g, (_, a, b) => `$${F}{${a}}{${b}}$`);

// ÷ and \div
go(/÷/g, () => "/");
go(/\\div/g, () => "/");
// then convert those newly introduced numeric if any — skip

for (let i = bags.length - 1; i >= 0; i -= 1) {
  s = s.split(`⟦${i}⟧`).join(bags[i]);
}

// Convert leftover ÷-style already slash that look like math: $24.00 / 80$
go(/\$(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\$/g, (_, a, b) => `$${F}{${a}}{${b}}$`);

if ((s.match(/\d,\\+frac\{/g) || []).length) throw new Error("comma corrupt");
// must not break /min /GB
if (/\\frac\{[^}]*\}\{m\}in/.test(s) || /\\frac\{[^}]*\}\{G\}B/.test(s)) {
  throw new Error("unit broken");
}

fs.writeFileSync(path, s);
console.log({ n, changed: s !== fs.readFileSync(path, "utf8") ? "?" : "ok" });
// re-read
const out = fs.readFileSync(path, "utf8");
console.log({
  n,
  badUnit: /\\frac\{[^}]*\}\{[A-Za-z]\}[A-Za-z]/.test(out),
  sample300: (out.match(/\\\\frac\{24\.00\}\{80\}/g) || []).length,
});
