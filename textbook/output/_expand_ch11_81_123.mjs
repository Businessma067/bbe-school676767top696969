import fs from "fs";
import { addons as a1, skip as s1 } from "./_ch11_exp_81_90.mjs";
import { addons as a2, skip as s2 } from "./_ch11_exp_91_105.mjs";
import { addons as a3, skip as s3 } from "./_ch11_exp_106_123.mjs";

const dump = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_81_123_dump.json", "utf8"),
);
const path = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(path, "utf8");

const addons = { ...a1, ...a2, ...a3 };
const skip = new Set([...s1, ...s2, ...s3]);

function runtimeToFile(s) {
  return s.replace(/\\/g, "\\\\").replace(/\n/g, "\r\n");
}

function findFileChunk(runtimeOld) {
  const fileOld = runtimeToFile(runtimeOld);
  const i = src.indexOf(fileOld);
  if (i < 0) return -1;
  return i;
}

let applied = 0;
let skipped = 0;
const missing = [];

for (const t of dump) {
  for (const slot of t.tactical) {
    const key = `${t.id}|${slot.letter}`;
    const append = addons[t.id]?.[slot.letter];
    let runtime = slot.text;
    // Always strip em dashes in touched 81-123 tactical slots
    const dashed = runtime.includes("\u2014");
    if (dashed) {
      runtime = runtime
        .replace(/\\% — /g, "\\%. ")
        .replace(/positive — /g, "positive, ")
        .replace(/not met — /g, "not met: ")
        .replace(/% — /g, "%: ")
        .replace(/that — /g, "that, ")
        .replace(/not lower — /g, "not lower: ")
        .replace(/root — /g, "root, ")
        .replace(/\u2014/g, ": ");
    }
    if (runtime !== slot.text) {
      const i = findFileChunk(slot.text);
      if (i < 0) missing.push("DASH " + key);
      else {
        src =
          src.slice(0, i) +
          runtimeToFile(runtime) +
          src.slice(i + runtimeToFile(slot.text).length);
      }
    }
    if (!append) {
      skipped++;
      continue;
    }
    if (skip.has(key)) {
      skipped++;
      continue;
    }
    const fileOld = runtimeToFile(runtime);
    const fileAdd = runtimeToFile(append);
    const i = src.indexOf(fileOld);
    if (i < 0) {
      missing.push("APPEND " + key + " :: " + runtime.slice(0, 80));
      continue;
    }
    if (src.slice(i + fileOld.length, i + fileOld.length + fileAdd.length + 4).includes(fileAdd.slice(0, 40))) {
      skipped++;
      continue;
    }
    src =
      src.slice(0, i + fileOld.length) +
      "\n\n" +
      fileAdd +
      src.slice(i + fileOld.length);
    applied++;
  }
}

// Overview patches: complete truncated 122 and add missing NPV work.
const ovPatches = [
  [
    `**8.** Step 5: Converting each root to $r = 1/s - 1$: the first root gives $r \\\\approx -1.291$ (i.e.`,
    `**8.** Step 5: Converting each root to $r = 1/s - 1$: the first root gives $r \\\\approx -1.291$ (that is, $r < -1$, so it is discarded). The second root gives $r = 1/2.430 - 1 \\\\approx -0.5884 = -58.84\\\\%$, the unique valid internal rate of return.

**9.** Option 2 cash-flow sum: $-50{,}000 + 6{,}000 + 6{,}000 = -\\\\$38{,}000$, not $-\\\\$40{,}000$.

**10.** One-year truncated Option 2: $r = (6{,}000/50{,}000) - 1 = -0.88 = -88\\\\%$, which is lower than $-58.84\\\\%$.`,
  ],
];

// The overview strings in the file use \\approx as two backslashes. Search for the unique truncated tail.
const trunc = `the first root gives $r \\\\approx -1.291$ (i.e.`;
const truncIdx = src.indexOf(trunc);
if (truncIdx < 0) {
  // try single-escaped search of raw file content
  const trunc2 = "the first root gives $r \\\\approx -1.291$ (i.e.";
  console.log("trunc search failed, dumping nearby 122 overview end");
} else {
  console.log("found trunc at", truncIdx);
}

fs.writeFileSync(path, src);
console.log("applied", applied, "skipped", skipped, "missing", missing.length);
if (missing.length) console.log(missing.slice(0, 20).join("\n"));
