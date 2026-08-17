import { execSync } from "child_process";

const diff = execSync("git diff -- src/data/math-ch1-logic.ts", {
  encoding: "utf8",
  maxBuffer: 20_000_000,
});
const hunks = diff.split(/(?=^@@)/m);
let early = 0;
let mid = 0;
let late = 0;
const midStarts = [];
for (const h of hunks) {
  const m = h.match(/^@@ -(\d+)/);
  if (!m) continue;
  const n = +m[1];
  if (n < 1480) early++;
  else if (n < 2300) {
    mid++;
    midStarts.push(n);
  } else late++;
}
console.log({ early, mid, late, midStarts });
