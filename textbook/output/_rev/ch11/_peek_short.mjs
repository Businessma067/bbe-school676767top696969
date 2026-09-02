import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const want = {
  "math-11-60": [3],
  "math-11-63": [4],
  "math-11-66": [2, 3],
  "math-11-67": [2],
  "math-11-68": [2, 4],
  "math-11-69": [1, 2, 3, 4],
  "math-11-70": [3],
  "math-11-71": [4],
  "math-11-72": [2, 3],
  "math-11-73": [1, 2, 3, 4],
  "math-11-74": [4],
  "math-11-75": [4],
  "math-11-76": [2, 3, 4],
  "math-11-77": [2, 3, 4],
  "math-11-78": [3],
  "math-11-79": [1, 2, 4],
};

for (const f of ["51_60", "61_70", "71_80"]) {
  const arr = JSON.parse(
    fs.readFileSync(new URL(`./${f}.json`, import.meta.url), "utf8")
  );
  for (const t of arr) {
    const idxs = want[t.id];
    if (!idxs) continue;
    console.log("\n====", t.id, "====");
    for (const i of idxs) {
      const e = t.tactical_explanations[i];
      console.log("\n--", "ABCDE"[i], wc(e), "w --");
      console.log(e.slice(-900));
    }
  }
}
