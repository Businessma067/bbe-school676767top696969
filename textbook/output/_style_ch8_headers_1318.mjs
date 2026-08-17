/** Restore MATH 13.18 headers + context endings on the assembled Chapter 8 bank. */
import fs from "node:fs";

const path = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
let source = fs.readFileSync(path, "utf8");

let headerCount = 0;
source = source.replace(
  /\*\*([A-E])\) [^\n]+?\.\*\*  \((true|false)\)/g,
  (_, letter, verdict) => {
    headerCount += 1;
    return `**${letter}.** → ${verdict === "true" ? "True" : "False"}`;
  },
);

let contextCount = 0;
source = source.replace(/^(\s+context: `)(.*?)(`,)$/gm, (_, prefix, context, suffix) => {
  contextCount += 1;
  const instruction = " Evaluate each statement. Mark it TRUE or FALSE.";
  return `${prefix}${context.endsWith(instruction) ? context : context + instruction}${suffix}`;
});

fs.writeFileSync(path, source);
console.log(JSON.stringify({ headerCount, contextCount }, null, 2));
