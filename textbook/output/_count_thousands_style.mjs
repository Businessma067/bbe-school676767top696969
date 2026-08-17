import fs from "node:fs";
import { listField, scalarField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
let ovGroups = 0;
let expGroups = 0;
let otherGroups = 0;
const samples = [];

for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (ov) {
    const hits = (toValue(ov).match(/\{,\}/g) ?? []).length;
    ovGroups += hits;
    if (hits && samples.length < 3) {
      samples.push(`overview ${task.id}: ${toValue(ov).match(/.{0,40}\{,\}.{0,20}/)?.[0]}`);
    }
  }
  for (const item of listField(task.body, "tactical_explanations")) {
    const value = toValue(item);
    const hits = (value.match(/\{,\}/g) ?? []).length;
    expGroups += hits;
    if (hits && samples.length < 6) {
      samples.push(`explanation ${task.id}: ${value.match(/.{0,40}\{,\}.{0,20}/)?.[0]}`);
    }
  }
}

const totalInFile = (src.match(/\{,\}/g) ?? []).length;
otherGroups = totalInFile - ovGroups - expGroups;
console.log({ totalInFile, ovGroups, expGroups, otherGroups });
for (const s of samples) console.log("  " + s);
