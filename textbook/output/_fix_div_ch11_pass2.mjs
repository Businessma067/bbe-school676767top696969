/**
 * Pass 2: remaining spaced numeric ratios and simple math forms in Ch11.
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");
const before = s;
const F = "\\\\frac";
let n = 0;

function skipDifficulty(offset) {
  const left = s.slice(Math.max(0, offset - 40), offset);
  return /difficulty_level:\s*`?\s*$/.test(left) || /difficulty_level:\s*`\d+$/.test(left);
}

function go(re, build) {
  s = s.replace(re, (...args) => {
    const offset = args[args.length - 2];
    if (typeof offset === "number" && skipDifficulty(offset)) return args[0];
    n += 1;
    return build(...args);
  });
}

// Spaced numeric: 0.693147 / 0.055
go(/(-?\d+(?:\.\d+)?)\s+\/\s+(-?\d+(?:\.\d+)?)/g, (_, a, b) => `${F}{${a}}{${b}}`);

// i/2, r/n inside already-math (avoid words)
go(/(?<=[($\s=+\-{,])([A-Za-z])\/(\d+(?:\.\d+)?)(?![0-9.A-Za-z])/g, (_, a, b) => `${F}{${a}}{${b}}`);

// 1/(nt) → \frac{1}{nt}
go(/(?<![.\\])1\/\(([A-Za-z0-9]+)\)/g, (_, den) => `${F}{1}{${den}}`);

// \ln(f)/\delta and -\ln(f)/\delta
go(/(-)?\\+ln\(([^()]+)\)\s*\/\s*([A-Za-z\\]+)/g, (_, neg, a, b) => `${neg || ""}${F}{\\ln(${a})}{${b}}`);

// \ln(\frac{1}{f})/\delta  — frac already inside
go(/\\+ln\((\\+frac\{[^{}]*\}\{[^{}]*\})\)\s*\/\s*([A-Za-z\\]+)/g, (_, a, b) => {
  n += 1;
  return `${F}{\\ln(${a})}{${b}}`;
});

// S(t)/S_0 already in frac from earlier? check leftover
go(/S\(t\)\/S_0/g, () => `${F}{S(t)}{S_0}`);

s = s.replace(/\\{3,}frac/g, "\\\\frac");

if (/difficulty_level:\s*`\\+frac/.test(s)) throw new Error("difficulty corrupted");

fs.writeFileSync(path, s);
console.log({ n, changed: s !== before, spacedLeft: (s.match(/\d+\s+\/\s+\d+/g) || []).length });
