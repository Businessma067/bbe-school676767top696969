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

// spaced numeric ratios (not units)
go(
  /(?<![,\d])(-?\d+(?:\.\d+)?)\s+\/\s+(-?\d+(?:\.\d+)?)(?![0-9,A-Za-z])/g,
  (_, a, b) => `${F}{${a}}{${b}}`,
);

// (algebra)/num
go(
  /\(([^()]{1,80})\)\/(-?\d+(?:\.\d+)?)(?![0-9,A-Za-z])/g,
  (_, a, b) => `${F}{(${a})}{${b}}`,
);

if (/\\frac\{[^}]*\}\{[A-Za-z]\}[A-Za-z]/.test(s)) throw new Error("unit broken");
fs.writeFileSync(path, s);
console.log({ n });
