import fs from "fs";
import path from "path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const ids = [
  ["math-5-45", "A"],
  ["math-5-45", "E"],
  ["math-5-46", "B"],
  ["math-5-47", "B"],
  ["math-5-47", "D"],
  ["math-5-48", "B"],
  ["math-5-48", "C"],
  ["math-5-48", "E"],
  ["math-5-49", "D"],
  ["math-5-50", "A"],
  ["math-5-52", "A"],
  ["math-5-52", "D"],
  ["math-5-52", "E"],
  ["math-5-53", "C"],
  ["math-5-54", "A"],
  ["math-5-54", "B"],
  ["math-5-54", "D"],
  ["math-5-54", "E"],
  ["math-5-57", "E"],
];
const files = [
  "textbook/output/_rev/ch5/41_50.json",
  "textbook/output/_rev/ch5/51_60.json",
];
function words(s) {
  return s
    .replace(/^\*\*[A-E]\)[\s\S]*?\*\*\s+\((true|false)\)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean).length;
}
const want = new Set(ids.map(([id, l]) => id + ":" + l));
for (const file of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  for (const t of arr) {
    t.tactical_explanations.forEach((e, i) => {
      const letter = "ABCDE"[i];
      if (!want.has(t.id + ":" + letter)) return;
      console.log("\n====", t.id, letter, words(e), "====");
      console.log(e);
    });
  }
}
