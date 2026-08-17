import fs from "node:fs";

const CURRENCY_RE =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/g;

const src = fs.readFileSync("src/data/math-ch1-logic.ts", "utf8");
const lines = src.split("\n");
let hits = 0;
const affected = [];

lines.forEach((line, i) => {
  const matches = line.match(CURRENCY_RE);
  if (!matches) return;
  hits += matches.length;
  affected.push(`${i + 1}: ${line.trim().slice(0, 150)}`);
});

console.log(`chapter 1 lines with currency-looking tokens: ${affected.length}, tokens: ${hits}`);
for (const a of affected.slice(0, 30)) console.log("  " + a);
if (affected.length > 30) console.log(`  ... +${affected.length - 30} more lines`);
