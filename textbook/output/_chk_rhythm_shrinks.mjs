import { MATH_CH8_POWER_FUNCTIONS as now } from "../../src/data/math-ch8-power-functions.ts";
import { PATCHES as P01 } from "./_ch8_rhythm_patch_01_30.mjs";
import { PATCHES as P31 } from "./_ch8_rhythm_patch_31_60.mjs";
import { PATCHES as P61 } from "./_ch8_rhythm_patch_61_87.mjs";
import { execSync } from "node:child_process";

// Get pre-patch lengths from HEAD for patched slots
const headSrc = execSync("git show HEAD:src/data/math-ch8-power-functions.ts", {
  encoding: "utf8",
  maxBuffer: 20_000_000,
});
const tmp = "_tmp_ch8_head_for_len.ts";
import fs from "node:fs";
fs.writeFileSync(new URL("./" + tmp, import.meta.url), headSrc);

const { MATH_CH8_POWER_FUNCTIONS: old } = await import("./" + tmp + "?t=" + Date.now());

const patches = [...P01, ...P31, ...P61];
const shrinks = [];
for (const p of patches) {
  const before = old.find((t) => t.sort_order === p.sort_order).tactical_explanations[p.explanation_index];
  const after = now.find((t) => t.sort_order === p.sort_order).tactical_explanations[p.explanation_index];
  const ratio = (after.length - before.length) / before.length;
  if (ratio < -0.05) {
    shrinks.push({
      id: `${p.sort_order}${"ABCDE"[p.explanation_index]}`,
      before: before.length,
      after: after.length,
      pct: Math.round(ratio * 1000) / 10,
    });
  }
}
shrinks.sort((a, b) => a.pct - b.pct);
console.log("shrinks", shrinks.length);
console.log(shrinks.map((s) => `${s.id} ${s.before}->${s.after} (${s.pct}%)`).join("\n"));
fs.unlinkSync(new URL("./" + tmp, import.meta.url));
