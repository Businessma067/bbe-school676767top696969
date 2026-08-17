import fs from "node:fs";
import { splitTasks } from "./_ch11_textcmd_lib.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const by = {};
for (const t of splitTasks(src)) {
  const caseId = t.body.match(/case_id: `([^`]+)`/)?.[1];
  const sub = t.body.match(/subsection: `([^`]+)`/)?.[1];
  (by[sub] ??= []).push(caseId);
}
for (const [sub, ids] of Object.entries(by)) {
  console.log(sub, ids.length, ids[0], "..", ids.at(-1));
  const i32 = ids.indexOf("MATH 11.32");
  const i53 = ids.indexOf("MATH 11.53");
  if (i32 >= 0) console.log("  11.32 is task", i32 + 1);
  if (i53 >= 0) console.log("  11.53 is task", i53 + 1);
}
