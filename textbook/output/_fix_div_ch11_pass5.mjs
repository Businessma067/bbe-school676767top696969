/**
 * Pass 5: finish leftovers + fix any single-backslash \ln written into the TS source.
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");
const F = "\\\\frac";
let n = 0;
const go = (re, build) => {
  s = s.replace(re, (...args) => {
    n += 1;
    return build(...args);
  });
};

// Fix bare \ln (one backslash in source) → \\ln (two backslashes in .ts file)
go(/(?<!\\)\\ln\b/g, () => "\\\\ln");

// M^{1/t} → M^{\frac{1}{t}}
go(/M\^\{1\/t\}/g, () => `M^{${F}{1}{t}}`);

// r/n remaining (after 1+)
go(/(?<![A-Za-z])r\/n(?![A-Za-z])/g, () => `${F}{r}{n}`);

// 1/f, 2/r, -1/t, 1/t in exponents already handled
go(/(?<![.\d\\])1\/f(?![A-Za-z])/g, () => `${F}{1}{f}`);
go(/(?<![.\d\\])2\/r(?![A-Za-z])/g, () => `${F}{2}{r}`);
go(/-1\/t(?![A-Za-z])/g, () => `-${F}{1}{t}`);

// 5,000/n^{p}, 5,000/n, 1,000/n, 1/n^{p}
go(/(\d{1,3}(?:,\d{3})+)\/([A-Za-z])(\^\{[^}]+\})?/g, (_, a, b, e) => `${F}{${a}}{${b}${e || ""}}`);
go(/(?<![.\d\\])1\/n(\^\{[^}]+\})?/g, (_, e) => `${F}{1}{n${e || ""}}`);

// V_4/(1.06)^{4}
go(/V_4\/\(1\.06\)\^\{4\}/g, () => `${F}{V_4}{(1.06)^{4}}`);
go(/([A-Za-z]_?\d*)\/\((1\.\d+)\)(\^\{[^}]+\})/g, (_, a, b, e) => `${F}{${a}}{(${b})${e}}`);

// \ln(...)/\delta  and  \ln(\frac{...})/\delta
go(
  /\\+ln\((\\+frac\{[^{}]*\}\{[^{}]*\})\)\s*\/\s*(\\+delta|[A-Za-z\\]+)/g,
  (_, a, b) => `${F}{\\\\ln(${a})}{${b}}`,
);
go(
  /\\+ln\(([^()]+)\)\s*\/\s*(\\+delta|[A-Za-z\\]+)/g,
  (_, a, b) => `${F}{\\\\ln(${a})}{${b}}`,
);

// T/S_0 and S(t)/S_0 still inside \left( ... \right)
go(/\\+left\(([A-Za-z0-9()]+)\/([A-Za-z0-9_]+)\\+right\)/g, (_, a, b) => `\\left(${F}{${a}}{${b}}\\right)`);

if ((s.match(/difficulty_level:\s*`\d+\/5`/g) || []).length !== 123) throw new Error("diff");
if ((s.match(/\d,\\+frac\{/g) || []).length) throw new Error("comma corrupt");

fs.writeFileSync(path, s);
console.log({ n });
