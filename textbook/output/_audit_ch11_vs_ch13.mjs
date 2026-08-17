import fs from "node:fs";
import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

let broken = 0;
let labelEq = 0;
let text = 0;
const samples = [];
for (const t of T) {
  const blob = [t.solution_overview || "", ...t.tactical_explanations].join("\n");
  if (/\$[A-Za-z]+\$\s*=/.test(blob)) {
    broken++;
    if (samples.length < 8) samples.push(`${t.id}: ${blob.match(/\$[A-Za-z]+\$\s*=[^.\n]{0,50}/)?.[0]}`);
  }
  if (/\*\*\d+\.\*\*[^\n]*\$=/.test(blob)) labelEq++;
  text += (blob.match(/\\text\{/g) || []).length;
}
console.log(JSON.stringify({ n: T.length, broken, labelEq, text, samples }, null, 2));
console.log("---11-1 Part3---");
console.log(T[0].solution_overview.split("Part 3")[1]?.slice(0, 550));
