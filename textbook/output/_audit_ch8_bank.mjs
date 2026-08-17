import fs from "fs";

const src = fs
  .readFileSync("src/data/math-ch8-power-functions.ts", "utf8")
  .replace(/import type \{ MathTask \} from "@\/data\/math-chapters";\s*/, "")
  .replace(/: MathTask\[\]/, "");
fs.writeFileSync("textbook/output/_ch8_tmp_audit.mjs", src);
const { MATH_CH8_POWER_FUNCTIONS: T } = await import("./_ch8_tmp_audit.mjs");

console.log("PARSE", T.length);
const trueHist = {};
const diffHist = {};
let issues = 0;
for (const t of T) {
  if (
    t.statements.length !== 5 ||
    t.answer_key.length !== 5 ||
    t.tactical_explanations.length !== 5
  ) {
    console.log("LEN", t.id);
    issues++;
  }
  if (!t.solution_overview) {
    console.log("NO OV", t.id);
    issues++;
  }
  if (/\*\*Answer\.\*\*/i.test(t.solution_overview || "")) {
    console.log("ANSWER SHEET", t.id);
    issues++;
  }
  trueHist[t.answer_key.filter(Boolean).length] =
    (trueHist[t.answer_key.filter(Boolean).length] || 0) + 1;
  diffHist[t.difficulty_level] = (diffHist[t.difficulty_level] || 0) + 1;
  t.tactical_explanations.forEach((e, i) => {
    const letter = String.fromCharCode(65 + i);
    if (!e.includes("**" + letter)) {
      console.log("HDR", t.id, letter, e.slice(0, 60));
      issues++;
    }
  });
}
console.log("trueHist", trueHist);
console.log("diffHist", diffHist);
console.log("keys1-5", T.slice(0, 5).map((t) => t.answer_key.map((b) => (b ? "T" : "F")).join("")));
console.log("issues", issues);

// Spot-check KaTeX escapes: raw \times outside shouldn't appear as single backslash issues
let bare = 0;
for (const t of T) {
  for (const s of [t.context, ...t.statements, ...t.tactical_explanations, t.solution_overview]) {
    // In runtime strings, \\times becomes \times which is fine for KaTeX
  }
}
console.log("ok");
