import fs from "fs";
import { BATCH } from "./_ch8_add_61_69.mjs";

const pads = {
  "MATH 8.63":
    " The same crossover arithmetic also shows why a mid-range batch such as $x=36$ still prefers the quadratic schedule: $36^{2}=1296$ sits below $40\\cdot36=1440$, so the gap is $144$ euros a year until the curves meet.",
  "MATH 8.64":
    " Average product therefore falls even while total product rises, which is the classic diminishing-returns signature of an exponent strictly between $0$ and $1$.",
  "MATH 8.67":
    " Once both constants are known, every later batch size is a pure evaluation of $C(x)=3x^{2/3}$, so the recorded gap is doing double duty as a scale check and as a coefficient pin.",
};

let src = fs.readFileSync(new URL("./_ch8_add_61_69.mjs", import.meta.url), "utf8");
for (const t of BATCH) {
  if (t.solution_overview.length >= 1440) continue;
  const pad = pads[t.case_id];
  if (!pad) {
    console.log("no pad for", t.case_id, t.solution_overview.length);
    continue;
  }
  // Insert pad just before **Answer.**
  const needle = "**Answer.**";
  const idx = t.solution_overview.lastIndexOf(needle);
  if (idx < 0) throw new Error("no Answer in " + t.case_id);
  const newOv = t.solution_overview.slice(0, idx).trimEnd() + pad + "\n\n" + t.solution_overview.slice(idx);
  if (!src.includes(t.solution_overview)) {
    // String.raw in file may differ from runtime only by escaping; search a unique 80-char window
    const window = t.solution_overview.slice(0, 80);
    console.log("direct match fail", t.case_id, "window", JSON.stringify(window));
  }
  // Replace using a unique suffix of the overview before Answer
  const before = t.solution_overview.slice(Math.max(0, idx - 120), idx);
  const after = t.solution_overview.slice(idx, idx + 40);
  if (!src.includes(before)) {
    console.log("before not found", t.case_id);
    continue;
  }
  src = src.replace(before + after, before.trimEnd() + pad + "\n\n" + after);
  console.log(t.case_id, t.solution_overview.length, "->", newOv.length);
}

fs.writeFileSync(new URL("./_ch8_add_61_69.mjs", import.meta.url), src);
console.log("written");
