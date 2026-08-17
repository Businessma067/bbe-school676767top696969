import fs from "node:fs";
import { scalarField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

const patterns = [
  /corresponding monetary figure/i,
  /value computed below/i,
  /as shown below/i,
  /the following relationship/i,
  /Record the given quantity/i,
  /placeholder/i,
  /TODO/i,
];

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const hits = [];
for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (!ov) continue;
  const text = toValue(ov);
  const caseId = task.body.match(/case_id: `([^`]+)`/)?.[1] ?? task.id;
  for (const re of patterns) {
    if (re.test(text)) {
      const m = text.match(new RegExp(`.{0,40}${re.source}.{0,60}`, re.flags));
      hits.push(`${caseId}: ${m?.[0]?.replace(/\n/g, " ")}`);
    }
  }
}
console.log(`hits: ${hits.length}`);
for (const h of hits.slice(0, 40)) console.log("  " + h);
if (hits.length > 40) console.log(`  ... +${hits.length - 40}`);
