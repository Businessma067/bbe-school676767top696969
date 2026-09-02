import fs from "node:fs";

export function stripStemCopy(ov) {
  const idx = ov.indexOf("**Part 1:");
  if (idx <= 0) return ov;
  const before = ov.slice(0, idx).trim();
  if (!before.includes("$$")) return ov.slice(idx);
  return ov;
}

export function applyFile(file, letters, skip = new Set(["math-11-1"])) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  let n = 0;
  for (const t of arr) {
    if (skip.has(t.id)) continue;
    if (!letters[t.id]) throw new Error("missing letters for " + t.id);
    if (letters[t.id].length !== 5) throw new Error("need 5 letters for " + t.id);
    t.solution_overview = stripStemCopy(t.solution_overview);
    t.tactical_explanations = letters[t.id];
    n++;
  }
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  return n;
}
