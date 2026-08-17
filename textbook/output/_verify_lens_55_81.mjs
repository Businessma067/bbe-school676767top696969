import fs from "fs";
import { MATH_CH1_LOGIC as T } from "../../src/data/math-ch1-logic.ts";

const before = JSON.parse(
  fs.readFileSync("textbook/output/_before_lens_55_81_current.json", "utf8")
);

const letters = ["A", "B", "C", "D", "E"];
const expanded = [];
let shortened = false;
let headerMismatch = 0;
let emdash = [];

for (let i = 55; i <= 81; i++) {
  const id = "math-1-" + i;
  const t = T.find((x) => x.id === id);
  const b = before[id];
  const afterOv = t.solution_overview.length;
  const afterTac = t.tactical_explanations.map((s) => s.length);
  if (afterOv < b.overview) {
    shortened = true;
    console.log("SHORTENED OVERVIEW", id, b.overview, "->", afterOv);
  }
  afterTac.forEach((len, j) => {
    if (len < b.tactical[j]) {
      shortened = true;
      console.log("SHORTENED", id, letters[j], b.tactical[j], "->", len);
    }
    if (len !== b.tactical[j]) {
      expanded.push({
        id,
        slot: letters[j],
        before: b.tactical[j],
        after: len,
        delta: len - b.tactical[j],
      });
    }
    const want = t.answer_key[j] ? "True" : "False";
    const head = t.tactical_explanations[j].split("\n")[0];
    const ok = head === `**${letters[j]}.** → ${want}`;
    if (!ok) {
      headerMismatch++;
      console.log("HEADER MISMATCH", id, letters[j], JSON.stringify(head), "want", want);
    }
  });
  for (const s of [t.solution_overview, ...t.tactical_explanations]) {
    if (s.includes("—")) emdash.push(id);
  }
}

console.log("expanded_count", expanded.length);
console.log(JSON.stringify(expanded, null, 2));
console.log("shortened", shortened);
console.log("headerMismatch", headerMismatch);
console.log("emdash", emdash);
console.log("overview_changes", Object.keys(before).filter((id) => {
  const t = T.find((x) => x.id === id);
  return t.solution_overview.length !== before[id].overview;
}));
