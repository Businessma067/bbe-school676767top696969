import fs from "fs";

// Finish Ch5 parenthetical ratios and leave unit prose alone.
let ch5 = fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8");
const before = ch5;
ch5 = ch5.replace(
  /\$\(([^$]+)\)\/(\d+(?:\.\d+)?)\$/g,
  (_, num, den) => `$\\\\frac{${num}}{${den}}$`,
);
ch5 = ch5.replace(
  /\(([^()]+)\)\/(\d+(?:\.\d+)?)(?=\s*=)/g,
  (_, num, den) => `\\\\frac{${num}}{${den}}`,
);
// \$27/m price-per-meter in answer lines → keep as prose OR use text denom
ch5 = ch5.replace(
  /\\\$(\d+(?:\.\d+)?)\/(m)\b/g,
  (_, a, u) => `\\\\$\\\\frac{${a}}{\\\\text{${u}}}`,
);
fs.writeFileSync("src/data/math-ch5-linear-equations.ts", ch5);
console.log("ch5 changed", ch5 !== before);
