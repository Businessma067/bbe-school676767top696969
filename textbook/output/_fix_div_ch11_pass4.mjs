/**
 * Pass 4: finish specific leftover slash forms (math-only patterns).
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");
const before = s;
const F = "\\\\frac";
let n = 0;

const reps = [
  // t = \ln(B_0/A_0)/(r_A + \delta_B)
  [
    /\\+ln\((B_0\/A_0)\)\/\((r_A \+ \\+delta_B)\)/g,
    () => `${F}{\\ln(${F}{B_0}{A_0})}{(r_A + \\delta_B)}`,
  ],
  [
    /\\+ln\((\\+frac\{B_0\}\{A_0\})\)\/\((r_A \+ \\+delta_B)\)/g,
    (_, inner) => `${F}{\\ln(${inner})}{(r_A + \\delta_B)}`,
  ],
  // \ln(v(t)/v_0)/t
  [
    /\\+ln\(v\(t\)\/v_0\)\/t/g,
    () => `${F}{\\ln(${F}{v(t)}{v_0})}{t}`,
  ],
  [
    /\\+ln\((\\+frac\{v\(t\)\}\{v_0\})\)\/t/g,
    (_, inner) => `${F}{\\ln(${inner})}{t}`,
  ],
  // r^{2}/2
  [/r\^\{2\}\/2/g, () => `${F}{r^{2}}{2}`],
  // dt^*/dr
  [/\$dt\^\*\/dr\$/g, () => `$${F}{dt^*}{dr}$`],
  [/dt\^\*\/dr/g, () => `${F}{dt^*}{dr}`],
  // s_n = a(1-k^{n})/(1-k)
  [
    /a\(1-k\^\{n\}\)\/\(1-k\)/g,
    () => `${F}{a(1-k^{n})}{(1-k)}`,
  ],
  // a/(1-k)
  [/a\/\(1-k\)/g, () => `${F}{a}{(1-k)}`],
  // 1/(1+r)^{n}
  [/1\/\(1\+r\)\^\{n\}/g, () => `${F}{1}{(1+r)^{n}}`],
  // 1/(1.06)^{20}
  [/1\/\(1\.06\)\^\{20\}/g, () => `${F}{1}{(1.06)^{20}}`],
  // 1/(1+r)
  [/1\/\(1\+r\)/g, () => `${F}{1}{(1+r)}`],
  // remaining \ln(X/Y) insides that are still slash
  [
    /\\+ln\(([A-Za-z0-9_(),]+?)\/([A-Za-z0-9_(),]+?)\)/g,
    (_, a, b) => `\\ln(${F}{${a}}{${b}})`,
  ],
];

for (const [re, build] of reps) {
  s = s.replace(re, (...args) => {
    n += 1;
    return build(...args);
  });
}

s = s.replace(/\\{3,}frac/g, "\\\\frac");
if ((s.match(/difficulty_level:\s*`\d+\/5`/g) || []).length !== 123) {
  throw new Error("difficulty count changed");
}

fs.writeFileSync(path, s);
console.log({ n, changed: s !== before });
