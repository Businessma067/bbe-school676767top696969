import fs from "node:fs";
import { scalarField, splitTasks, toSource, toValue } from "./_ch11_textcmd_lib.mjs";

const FILE = "src/data/math-ch11-financial.ts";
const src = fs.readFileSync(FILE, "utf8");

const items = [];
let roundTripFailures = 0;

for (const task of splitTasks(src)) {
  const source = scalarField(task.body, "solution_overview");
  if (!source) continue;
  if (toSource(toValue(source)) !== source) {
    roundTripFailures += 1;
    continue;
  }
  const value = toValue(source);
  items.push({
    id: task.id,
    caseId: task.body.match(/case_id: `([^`]+)`/)?.[1] ?? task.id,
    title: task.body.match(/title: `([^`]+)`/)?.[1] ?? "",
    subsection: task.body.match(/subsection: `([^`]+)`/)?.[1] ?? "",
    min_chars: value.length,
    text: value,
  });
}

console.log(`overviews: ${items.length}, round-trip failures: ${roundTripFailures}`);

const batches = Number(process.argv[2] ?? 6);
const perBatch = Math.ceil(items.length / batches);
for (let b = 0; b < batches; b++) {
  const slice = items.slice(b * perBatch, (b + 1) * perBatch);
  const out = `textbook/output/_ch11_ov_batch_${b + 1}.json`;
  fs.writeFileSync(out, JSON.stringify(slice, null, 2));
  console.log(`${out}: ${slice.length} (${slice[0]?.caseId} … ${slice.at(-1)?.caseId})`);
}
