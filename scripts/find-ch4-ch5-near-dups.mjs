/**
 * Find cross-case near-duplicate statement clusters in ch4+ch5 (jaccard >= 0.88).
 */
import fs from "node:fs";

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
  const u = A.size + B.size - inter;
  return u ? inter / u : 0;
}

const all = [];
for (const path of [
  "src/data/economics-cases-ch4-subtopics.json",
  "src/data/economics-cases-ch5-subtopics.json",
]) {
  for (const c of JSON.parse(fs.readFileSync(path, "utf8"))) {
    for (let i = 0; i < 5; i++) {
      all.push({
        id: `${c.case_id}[${i}]`,
        sub: c.subsection,
        text: c.statements[i],
        expl: c.tactical_explanations[i],
        case: c,
        idx: i,
      });
    }
  }
}

// Union-find clustering within buckets
const buckets = new Map();
for (const item of all) {
  const key = norm(item.text).split(" ").slice(0, 4).join(" ");
  if (!buckets.has(key)) buckets.set(key, []);
  buckets.get(key).push(item);
}

const clusters = [];
for (const bucket of buckets.values()) {
  if (bucket.length < 2) continue;
  const used = new Set();
  for (let i = 0; i < bucket.length; i++) {
    if (used.has(i)) continue;
    const cluster = [bucket[i]];
    used.add(i);
    for (let j = i + 1; j < bucket.length; j++) {
      if (used.has(j)) continue;
      if (jaccard(bucket[i].text, bucket[j].text) >= 0.88) {
        cluster.push(bucket[j]);
        used.add(j);
      }
    }
    if (cluster.length > 1) clusters.push(cluster);
  }
}

clusters.sort((a, b) => b.length - a.length);
console.log("Clusters (>=0.88):", clusters.length);
console.log("Statements in clusters:", clusters.reduce((s, c) => s + c.length, 0));
for (const cl of clusters.slice(0, 30)) {
  console.log("\n--- cluster size", cl.length, "---");
  console.log("sample:", cl[0].text.slice(0, 120));
  console.log(
    "ids:",
    cl.map((x) => x.id).join(", "),
  );
}

fs.writeFileSync(
  "scripts/ch4-ch5-near-dup-clusters.json",
  JSON.stringify(
    clusters.map((cl) => ({
      size: cl.length,
      sample: cl[0].text,
      ids: cl.map((x) => x.id),
    })),
    null,
    2,
  ) + "\n",
);
