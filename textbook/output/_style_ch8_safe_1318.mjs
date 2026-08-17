/**
 * Safe MATH 13.18 alignment for Chapter 8 (no italics stripping — that breaks **headers**).
 * 1) Restores **L.** → True/False headers from old **L) stmt.** (verdict) form
 * 2) Adds context TRUE/FALSE instruction
 * 3) Flattens multiline $$ blocks
 * 4) Normalizes closings to "statement is True/False"
 * 5) Softens labeled trap openers
 */
import fs from "node:fs";

const path = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
let src = fs.readFileSync(path, "utf8");

let headers = 0;
src = src.replace(
  /\*\*([A-E])\) [^\n]+?\.\*\*  \((true|false)\)/g,
  (_, letter, verdict) => {
    headers += 1;
    return `**${letter}.** → ${verdict === "true" ? "True" : "False"}`;
  },
);

// Repair headers destroyed by prior italics strip: "A. → True" / leftover "*A.* → True"
src = src.replace(
  /(?:\*)?([A-E])\.\*?\s*→\s*(True|False)/g,
  (_, letter, verdict) => {
    headers += 1;
    return `**${letter}.** → ${verdict}`;
  },
);

let contexts = 0;
src = src.replace(/^(\s+context: `)(.*?)(`,)$/gm, (_, prefix, context, suffix) => {
  contexts += 1;
  const instruction = " Evaluate each statement. Mark it TRUE or FALSE.";
  return `${prefix}${context.endsWith(instruction) ? context : context + instruction}${suffix}`;
});

let flatDollars = 0;
src = src.replace(/\$\$\n([\s\S]*?)\n\$\$/g, (_, body) => {
  flatDollars += 1;
  const one = body
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join(" ");
  return `$$${one}$$`;
});

let closings = 0;
src = src.replace(/so the claim is (true|false)\./gi, (_, v) => {
  closings += 1;
  return `so the statement is ${v[0].toUpperCase()}${v.slice(1).toLowerCase()}.`;
});
src = src.replace(/the claim holds\./gi, () => {
  closings += 1;
  return "the statement is True.";
});
src = src.replace(/exactly as the claim states\./gi, () => {
  closings += 1;
  return "so the statement is True.";
});
src = src.replace(/Therefore the statement is (true|false)\./gi, (_, v) => {
  closings += 1;
  return `Therefore the statement is ${v[0].toUpperCase()}${v.slice(1).toLowerCase()}.`;
});

let traps = 0;
src = src.replace(/^The trap is to /gm, () => {
  traps += 1;
  return "A common mistake is to ";
});
src = src.replace(/^The instinct (?:that|to) /gm, () => {
  traps += 1;
  return "It is not the case that ";
});
src = src.replace(/^The temptation is to /gm, () => {
  traps += 1;
  return "A common mistake is to ";
});

fs.writeFileSync(path, src);
console.log(JSON.stringify({ headers, contexts, flatDollars, closings, traps }, null, 2));
