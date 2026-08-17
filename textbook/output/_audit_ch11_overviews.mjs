import fs from "node:fs";
import { scalarField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
let parts = 0;
let longInline = 0;
let bareMathLines = 0;
let currencyInMath = 0;
let withDisplays = 0;
let total = 0;
const bareSamples = [];
const longSamples = [];

for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (!ov) continue;
  total += 1;
  const value = toValue(ov);
  if (/\*\*Part 1/.test(value)) parts += 1;
  if (/\$\$/.test(value)) withDisplays += 1;

  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  let m;
  while ((m = inlineRe.exec(value))) {
    if (m[1].length > 60) {
      longInline += 1;
      if (longSamples.length < 5) longSamples.push(m[1].slice(0, 100));
    }
    if (/\\\$/.test(m[1])) currencyInMath += 1;
  }

  for (const line of value.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("**") || t.includes("$")) continue;
    if (/[A-Za-z]\s*=\s*[\d.]/.test(t) || /^[A-Za-z] = /.test(t)) {
      bareMathLines += 1;
      if (bareSamples.length < 6) bareSamples.push(t.slice(0, 90));
    }
  }
}

console.log({ total, parts, withDisplays, longInline, currencyInMath, bareMathLines });
console.log("\nlong inline samples:");
for (const s of longSamples) console.log("  " + s);
console.log("\nunmarked math line samples:");
for (const s of bareSamples) console.log("  " + s);
