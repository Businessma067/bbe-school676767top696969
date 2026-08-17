import fs from "node:fs";
import { splitTasks } from "./_ch11_textcmd_lib.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
for (const id of ["MATH 11.32", "MATH 11.53"]) {
  for (const task of splitTasks(src)) {
    const caseId = task.body.match(/case_id: `([^`]+)`/)?.[1];
    if (caseId !== id) continue;
    const title = task.body.match(/title: `([^`]+)`/)?.[1];
    const sub = task.body.match(/subsection: `([^`]+)`/)?.[1];
    console.log(caseId, sub, title);
  }
}
