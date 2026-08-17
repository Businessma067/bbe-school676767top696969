import fs from "node:fs";
import { listField, scalarField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const wanted = process.argv.slice(2);

for (const task of splitTasks(src)) {
  const caseId = task.body.match(/case_id: `([^`]+)`/)?.[1] ?? task.id;
  if (wanted.length && !wanted.some((w) => caseId.includes(w))) continue;
  console.log(`===== ${caseId} =====`);
  console.log(toValue(scalarField(task.body, "solution_overview") ?? "(none)"));
  console.log(`\n----- explanation A (for contrast) -----`);
  console.log(toValue(listField(task.body, "tactical_explanations")[0] ?? ""));
}
