import fs from "node:fs";
import { scalarField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

const BAD = [
  /corresponding monetary figure/i,
  /value computed below/i,
  /comparison below/i,
  /Use the following relationship/i,
  /Record the given quantity/i,
  /Substitute the stated values/i,
];

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const badIds = [];
for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (!ov) continue;
  const text = toValue(ov);
  const caseId = task.body.match(/case_id: `([^`]+)`/)?.[1] ?? task.id;
  if (BAD.some((re) => re.test(text))) badIds.push(caseId);
}
console.log(`bad overviews: ${badIds.length}`);
console.log(badIds.join(", "));

// Also dump which out-batch files still contain the template for a rewrite pass.
for (let b = 1; b <= 6; b++) {
  const out = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  const bad = out.filter((e) => BAD.some((re) => re.test(e.text))).map((e) => e.id);
  console.log(`batch ${b}: ${bad.length} -> ${bad.join(", ")}`);
}
