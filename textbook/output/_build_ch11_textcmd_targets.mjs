import fs from "node:fs";
import {
  blockedSpans,
  listField,
  scalarField,
  splitTasks,
  toSource,
  toValue,
} from "./_ch11_textcmd_lib.mjs";

const FILE = "src/data/math-ch11-financial.ts";
const src = fs.readFileSync(FILE, "utf8");
const tasks = splitTasks(src);

let roundTripFailures = 0;
const items = [];
let spanTotal = 0;

for (const task of tasks) {
  const caseId = task.body.match(/case_id: `([^`]+)`/)?.[1] ?? "";
  const statements = listField(task.body, "statements").map(toValue);
  const explanations = listField(task.body, "tactical_explanations");

  const check = (source) => {
    if (toSource(toValue(source)) !== source) roundTripFailures += 1;
  };

  explanations.forEach((source, i) => {
    check(source);
    const value = toValue(source);
    const spans = blockedSpans(value);
    if (!spans.length) return;
    spanTotal += spans.length;
    items.push({
      id: task.id,
      caseId,
      kind: "tactical_explanations",
      index: i,
      letter: "ABCDE"[i],
      statement: statements[i] ?? null,
      spans,
      min_chars: value.length,
      text: value,
    });
  });

  for (const name of ["context", "solution_overview"]) {
    const source = scalarField(task.body, name);
    if (!source) continue;
    check(source);
    const value = toValue(source);
    const spans = blockedSpans(value);
    if (!spans.length) continue;
    spanTotal += spans.length;
    items.push({
      id: task.id,
      caseId,
      kind: name,
      index: null,
      letter: null,
      statement: null,
      spans,
      min_chars: value.length,
      text: value,
    });
  }
}

console.log(`tasks parsed: ${tasks.length}`);
console.log(`round-trip failures: ${roundTripFailures}`);
console.log(`blocked items: ${items.length}, blocked spans: ${spanTotal}`);

const batches = Number(process.argv[2] ?? 4);
const perBatch = Math.ceil(items.length / batches);
for (let b = 0; b < batches; b++) {
  const slice = items.slice(b * perBatch, (b + 1) * perBatch);
  const name = `textbook/output/_ch11_textcmd_batch_${b + 1}.json`;
  fs.writeFileSync(name, JSON.stringify(slice, null, 2));
  console.log(`${name}: ${slice.length} items (${slice[0]?.id} … ${slice.at(-1)?.id})`);
}
