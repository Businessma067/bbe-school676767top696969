import fs from "node:fs";
const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");
const before = s;

const prefixes = [
  "Percentage of original",
  "Doubling",
  "Tripling",
  "Quadrupling",
  "Solve",
  "Naive linear projection",
];
for (const p of prefixes) {
  const re = new RegExp("\\$(" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(:)? = ", "g");
  s = s.replace(re, (_m, label, colon) => `${label}${colon || ""} $= `);
  s = s.replace(new RegExp("\\$(" + p + "): \\$", "g"), "$1: $");
}

// $Solve $math  leftover
s = s.replace(/\$Solve \$/g, "Solve $");

// units inside inline math at end of numbered steps
s = s.replace(
  /\\\\approx ([0-9.]+) months \\\\approx ([0-9.]+) years\$/g,
  "\\\\approx $1$ months $\\\\approx $2$ years",
);
s = s.replace(/\\\\approx ([0-9.]+) years\$/g, "\\\\approx $1$ years");
s = s.replace(/ = ([0-9.]+) years\$/g, " = $1$ years");
s = s.replace(/\\\\approx ([0-9.]+) months\$/g, "\\\\approx $1$ months");

// E-slot raw 0.24 in trap for task 1
s = s.replace(
  /Trap: the actual gap is only 7\.44% - 7\.20% = 0\.24 percentage points/g,
  "Trap: the actual gap is only $7.44\\\\% - 7.20\\\\% = 0.24$ percentage points",
);

s = s.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

fs.writeFileSync(PATH, s);
console.log("changed", before !== s);
