import fs from "node:fs";
import { listField, scalarField, splitTasks, toSource, toValue } from "./_ch11_textcmd_lib.mjs";

const FILE = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(FILE, "utf8");

const inMath = (value, fn) =>
  value
    .replace(/\$\$[\s\S]*?\$\$/g, (m) => fn(m))
    .replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, (m) => fn(m));

const plain = (value) => inMath(value, (span) => span.replace(/\{,\}/g, ","));

let changed = 0;
const rewrite = (source) => {
  const value = toValue(source);
  const next = plain(value);
  if (next === value) return;
  const before = toSource(value);
  const after = toSource(next);
  if (src.split(before).length - 1 !== 1) {
    console.log(`skip (not unique): ${value.slice(0, 60)}`);
    return;
  }
  src = src.replace(before, () => after);
  changed += 1;
};

for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (ov) rewrite(ov);
  for (const item of listField(task.body, "tactical_explanations")) rewrite(item);
}

fs.writeFileSync(FILE, src);
const leftover = (src.match(/\{,\}/g) ?? []).length;
console.log(`normalized fields: ${changed}, remaining {,} in file: ${leftover}`);
