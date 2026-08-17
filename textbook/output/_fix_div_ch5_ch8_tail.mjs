import fs from "fs";

// Finish Ch8 pi leftovers and Ch5 unit "per" rates inside math-ish answer lines.
let ch8 = fs.readFileSync("src/data/math-ch8-power-functions.ts", "utf8");
const before8 = ch8;
ch8 = ch8.replace(/\$(\d+)\/\\\\pi/g, (_, a) => `$\\\\frac{${a}}{\\\\pi}`);
ch8 = ch8.replace(/(\d+)\/\\\\pi\\approx/g, (_, a) => `\\\\frac{${a}}{\\\\pi}\\approx`);
ch8 = ch8.replace(/\$Q\/\(\\\\pi r\^\{2\}\)\$/g, `$\\\\frac{Q}{\\\\pi r^{2}}$`);
ch8 = ch8.replace(/Q\/\(\\\\pi r\^\{2\}\)/g, `\\\\frac{Q}{\\\\pi r^{2}}`);
fs.writeFileSync("src/data/math-ch8-power-functions.ts", ch8);
console.log("ch8 changed", ch8 !== before8);

let ch5 = fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8");
const before5 = ch5;
// Convert Answer-line unit rates to text-denominator fractions when clearly "price per unit"
ch5 = ch5.replace(
  /(?<![\d.\\])(\d+(?:\.\d+)?)\/(month|night|unit|lb|mile|day)\b/g,
  (_, a, u) => `\\\\frac{${a}}{\\\\text{${u}}}`,
);
// leftover ÷
ch5 = ch5.replace(/÷/g, "/");
fs.writeFileSync("src/data/math-ch5-linear-equations.ts", ch5);
console.log("ch5 changed", ch5 !== before5);
