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

const live = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const originals = new Map();
for (const task of splitTasks(live)) {
  // Originals are in the batch input files, not live (live already has the bad rewrite).
}
const input = JSON.parse(fs.readFileSync("textbook/output/_ch11_ov_batch_2.json", "utf8"));
const out = JSON.parse(fs.readFileSync("textbook/output/_ch11_ov_out_2.json", "utf8"));

const todo = [];
input.forEach((item, i) => {
  if (!BAD.some((re) => re.test(out[i].text))) return;
  todo.push({
    id: item.id,
    caseId: item.caseId,
    min_chars: item.min_chars,
    original_text: item.text,
    bad_text: out[i].text,
  });
});

fs.writeFileSync("textbook/output/_ch11_ov_templates_2.json", JSON.stringify(todo, null, 2));
console.log(`wrote ${todo.length} template victims`);
