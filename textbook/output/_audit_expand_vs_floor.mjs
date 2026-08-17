import { execSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";

const floorSrc = execSync("git show 7dd9982:src/data/math-ch1-logic.ts", {
  encoding: "utf8",
  maxBuffer: 50e6,
});
fs.writeFileSync("textbook/output/_floor-raw.ts", floorSrc);

const require = createRequire(import.meta.url);
// Use dynamic import with strip-types via node flag when running

const { MATH_CH1_LOGIC: NOW } = await import("../../src/data/math-ch1-logic.ts");
const { MATH_CH1_LOGIC: FLOOR } = await import("./_floor-raw.ts");

function norm(s) {
  return s
    .replace(/\r\n/g, "\n")
    .replace(/\uFEFF/g, "")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'");
}

const realShrinks = [];
let expands = 0;
let same = 0;
const tiny = [];

for (let i = 0; i < NOW.length; i++) {
  const n = NOW[i];
  const f = FLOOR[i];
  for (let j = 0; j < 5; j++) {
    const a = norm(n.tactical_explanations[j]);
    const b = norm(f.tactical_explanations[j]);
    if (a.length < b.length) {
      const d = b.length - a.length;
      if (d <= 3 && a === b.slice(0, a.length)) tiny.push([n.id, j, d]);
      else
        realShrinks.push({
          id: n.id,
          j,
          d,
          floorStart: b.slice(0, 100),
          nowStart: a.slice(0, 100),
        });
    } else if (a.length > b.length) expands++;
    else same++;
  }
  const ao = norm(n.solution_overview);
  const bo = norm(f.solution_overview);
  if (ao.length < bo.length) realShrinks.push({ id: n.id, j: "ov", d: bo.length - ao.length });
  else if (ao.length > bo.length) expands++;
  else same++;
}

console.log(JSON.stringify({ expands, same, realShrinks: realShrinks.length, tiny: tiny.length }, null, 2));
if (realShrinks.length) console.log(JSON.stringify(realShrinks.slice(0, 12), null, 2));
if (tiny.length) console.log("tiny", JSON.stringify(tiny.slice(0, 8)));
