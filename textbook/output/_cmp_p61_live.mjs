import { PATCHES as P } from "./_ch8_rhythm_patch_61_87.mjs";
import { MATH_CH8_POWER_FUNCTIONS as t } from "../../src/data/math-ch8-power-functions.ts";

console.log("file patches", P.length);
console.log(
  "targets",
  P.map((p) => `${p.sort_order}.${"ABCDE"[p.explanation_index]}`).join(" "),
);
let exact = 0;
let diff = 0;
for (const p of P) {
  const live = t.find((x) => x.sort_order === p.sort_order).tactical_explanations[
    p.explanation_index
  ];
  if (live === p.text) exact += 1;
  else diff += 1;
}
console.log("exact", exact, "diff", diff);
const hist = {};
for (const p of P) {
  const d = (p.text.match(/\$\$/g) || []).length / 2;
  hist[d] = (hist[d] || 0) + 1;
}
console.log("display", hist);
