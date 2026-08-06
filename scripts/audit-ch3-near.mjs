/**
 * Find near-duplicate statements / identical explanations within ch3 cases.
 */
import fs from "node:fs";

const cases = JSON.parse(
  fs.readFileSync("src/data/economics-cases-ch3-subtopics.json", "utf8"),
);

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s) {
  return new Set(norm(s).split(" ").filter((w) => w.length > 2));
}

function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

const issues = [];

for (const c of cases) {
  // identical explanations
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      if (norm(c.tactical_explanations[i]) === norm(c.tactical_explanations[j])) {
        issues.push({
          type: "same_explanation",
          id: c.case_id,
          i,
          j,
          expl: c.tactical_explanations[i],
          si: c.statements[i],
          sj: c.statements[j],
        });
      }
      const sim = jaccard(c.statements[i], c.statements[j]);
      if (sim >= 0.72) {
        issues.push({
          type: "near_stmt",
          id: c.case_id,
          i,
          j,
          sim: Number(sim.toFixed(2)),
          si: c.statements[i],
          sj: c.statements[j],
        });
      }
    }
  }
}

console.log("issues", issues.length);
for (const x of issues) {
  console.log(JSON.stringify(x));
}
