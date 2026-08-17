import fs from "fs";

const s = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
console.log("count", s.split("0.072/12 = 0.006").length - 1);

const NUM = String.raw`-?\d+(?:\.\d+)?`;
const frac = "\\\\frac";
const body = "0.072/12 = 0.006";
const out = body.replace(
  new RegExp(`(${NUM})\\s*/\\s*(${NUM})`, "g"),
  (_, a, b) => `${frac}{${a}}{${b}}`,
);
console.log("out", JSON.stringify(out));

// Manual replace in file
const before = s;
const next = s.replaceAll(
  "$0.072/12 = 0.006$",
  `$\\\\frac{0.072}{12} = 0.006$`.replace("\\\\", "\\"),
);
// Fix: in TS file we need $\\frac in the written content
const next2 = s.replaceAll("$0.072/12 = 0.006$", "$\\\\frac{0.072}{12} = 0.006$");
// Wait - replaceAll string: to get \\ in file we need \\\\ in JS string
const next3 = s.replaceAll("$0.072/12 = 0.006$", "$\\\\frac{0.072}{12} = 0.006$");
console.log("would change", next3 !== before, "occurrences would be", (before.match(/\$0\.072\/12 = 0\.006\$/g) || []).length);

// Actually write with correct escaping: file should contain $\\frac{0.072}{12} = 0.006$
const replacement = "$" + "\\" + "\\frac{0.072}{12} = 0.006$";
console.log("replacement json", JSON.stringify(replacement));
const next4 = s.replaceAll("$0.072/12 = 0.006$", replacement);
fs.writeFileSync("src/data/math-ch11-financial.ts", next4);
console.log("wrote", next4 !== before);
console.log("remaining", next4.split("0.072/12 = 0.006").length - 1);
console.log("frac count", next4.split("\\frac{0.072}{12} = 0.006").length - 1);
