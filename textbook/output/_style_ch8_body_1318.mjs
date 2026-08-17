/**
 * Align Chapter 8 tactical explanations with MATH 13.18 body craft.
 * Headers are already **L.** → True/False. This pass:
 *  1) flattens multiline $$ blocks
 *  2) strips *italics* and em-dashes
 *  3) normalizes closings to "statement is True/False"
 *  4) demotes common imperative cues before math
 *  5) softens labeled trap openers into contrast clauses
 *
 * Does NOT rewrite "This claim…" openers wholesale (needs content care).
 * Run: node textbook/output/_style_ch8_body_1318.mjs
 */
import fs from "node:fs";

const path = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
let src = fs.readFileSync(path, "utf8");

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

let italics = 0;
src = src.replace(/(?<!\$)\*([^*\n]+)\*(?!\$)/g, (_, inner) => {
  italics += 1;
  return inner;
});

let emdashes = 0;
src = src.replace(/ — /g, () => {
  emdashes += 1;
  return ", ";
});

let closings = 0;
src = src.replace(
  /so the claim is (true|false)\./gi,
  (_, v) => {
    closings += 1;
    return `so the statement is ${v[0].toUpperCase()}${v.slice(1).toLowerCase()}.`;
  },
);
src = src.replace(/the claim holds\./gi, () => {
  closings += 1;
  return "the statement is True.";
});
src = src.replace(/exactly as the claim states\./gi, () => {
  closings += 1;
  return "so the statement is True.";
});
src = src.replace(
  /Matching these figures to the claim, the statement is (True|False)\./g,
  (m) => m,
);

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

let cues = 0;
const cueMap = [
  [/^Evaluate the /gm, "The "],
  [/^Form the /gm, "The "],
  [/^Recover the /gm, "The "],
  [/^Write (?:both|the) /gm, "Both "],
  [/^Apply the /gm, "The "],
  [/^Take the /gm, "The "],
  [/^Set that against /gm, "Against "],
  [/^Check (?:the |with |numerically )/gm, "Checking "],
  [/^Confirm (?:with |through |against )/gm, "Confirming "],
  [/^Invert the /gm, "Inverting the "],
  [/^Substitute /gm, "Substituting "],
  [/^Compute the /gm, "The "],
  [/^Compare with /gm, "Compared with "],
  [/^Locate the /gm, "The "],
  [/^Verify /gm, "Verifying "],
];
for (const [re, rep] of cueMap) {
  src = src.replace(re, () => {
    cues += 1;
    return rep;
  });
}

fs.writeFileSync(path, src);
console.log(
  JSON.stringify(
    { flatDollars, italics, emdashes, closings, traps, cues },
    null,
    2,
  ),
);
