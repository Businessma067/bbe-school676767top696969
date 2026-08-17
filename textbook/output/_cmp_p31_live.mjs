import { PATCHES as P31 } from "./_ch8_rhythm_patch_31_60.mjs";
import { MATH_CH8_POWER_FUNCTIONS as cur } from "../../src/data/math-ch8-power-functions.ts";
import { execSync } from "node:child_process";
import fs from "node:fs";

fs.writeFileSync(
  new URL("./_head_ch8.ts", import.meta.url),
  execSync("git show HEAD~1:src/data/math-ch8-power-functions.ts", {
    encoding: "utf8",
    maxBuffer: 20_000_000,
  }),
);
const { MATH_CH8_POWER_FUNCTIONS: base } = await import("./_head_ch8.ts?v=3");

let exact = 0;
let stillBase = 0;
let differs = 0;
const overshort = [];

for (const p of P31) {
  const live = cur.find((t) => t.sort_order === p.sort_order).tactical_explanations[p.explanation_index];
  const old = base.find((t) => t.sort_order === p.sort_order).tactical_explanations[p.explanation_index];
  const ratio = (p.text.length - old.length) / old.length;
  if (ratio < -0.1) overshort.push(`${p.sort_order}${"ABCDE"[p.explanation_index]} ${Math.round(ratio * 100)}%`);
  if (live === p.text) exact += 1;
  else if (live === old) stillBase += 1;
  else differs += 1;
}

console.log("P31", P31.length);
console.log("already_exact", exact, "still_base", stillBase, "live_differs", differs);
console.log("overshort", overshort.length ? overshort.join(", ") : "none");
console.log(
  "targets",
  P31.map((p) => `${p.sort_order}${"ABCDE"[p.explanation_index]}`).join(" "),
);
