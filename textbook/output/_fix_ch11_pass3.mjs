import fs from "node:fs";
const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");
const before = s;

s = s.replace(/\$([^$\n]{1,60}?) \$=/g, "$$$1 =");

s = s.replace(
  /with n \$= 1, \$R_a = nominal rate = ([^$]+) exactly\$\./g,
  (_m, p) => `with $n = 1$, $R_a$ = nominal rate $= ${p}$ exactly.`,
);

fs.writeFileSync(PATH, s);
const left = s.match(/\$[^$\n]{1,40} \$=/g) || [];
console.log("changed", before !== s, "left", left.slice(0, 15));
