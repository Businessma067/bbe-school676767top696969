import fs from "node:fs";
import { blockedSpans, toSource } from "./_ch11_textcmd_lib.mjs";

const FILE = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(FILE, "utf8");

const items = [];
for (let b = 1; b <= 4; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_textcmd_batch_${b}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_ch11_textcmd_out_${b}.json`, "utf8"));
  input.forEach((item, i) => items.push({ ...item, next: output[i].text }));
}

let applied = 0;
const failures = [];

for (const item of items) {
  const before = toSource(item.text);
  const after = toSource(item.next);
  const occurrences = src.split(before).length - 1;
  if (occurrences !== 1) {
    failures.push(`${item.id}/${item.kind} ${item.letter ?? ""}: ${occurrences} matches in source`);
    continue;
  }
  src = src.replace(before, () => after);
  applied += 1;
}

if (failures.length) {
  console.log(`FAILED, nothing written. ${failures.length} problems:`);
  for (const f of failures.slice(0, 20)) console.log(`  - ${f}`);
  process.exit(1);
}

fs.writeFileSync(FILE, src);
console.log(`applied: ${applied} items`);

const remaining = blockedSpans(src.replace(/\\\\/g, "\\"));
console.log(`blocked math spans left in chapter 11: ${remaining.length}`);
for (const r of remaining.slice(0, 10)) console.log(`  - ${r.slice(0, 100)}`);
