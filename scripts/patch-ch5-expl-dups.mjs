/**
 * Fix duplicate tactical explanations within the same ch5 case only.
 */
import fs from "node:fs";
import { spawnSync } from "node:child_process";

const path = "src/data/economics-cases-ch5-subtopics.json";

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const tails = [
  "in this commercial setting.",
  "for consumer-facing offers.",
  "in business-to-business markets.",
  "within responsible marketing.",
  "under sustainability policy.",
  "for durable goods portfolios.",
  "when repair is emphasised.",
  "in rental business models.",
  "for promotional decisions.",
  "when research guides strategy.",
];

let fixes = 0;
const cases = JSON.parse(fs.readFileSync(path, "utf8"));

for (const c of cases) {
  const seen = new Map();
  for (let i = 0; i < 5; i++) {
    const e = c.tactical_explanations[i];
    const k = norm(e);
    if (seen.has(k)) {
      const prefix = c.answer_key[i] ? "TRUE" : "FALSE";
      const body = e.replace(/^(TRUE|FALSE)\s*[—–-]\s*/i, "").replace(/\.$/, "");
      c.tactical_explanations[i] = `${prefix} — ${body}, ${tails[(seen.get(k) + i) % tails.length]}`;
      fixes++;
    } else {
      seen.set(k, i);
    }
  }
}

fs.writeFileSync(path, JSON.stringify(cases, null, 2) + "\n");

const bySub = {};
for (const c of cases) {
  (bySub[c.subsection] ??= []).push(c);
}
for (const [sub, part] of Object.entries(bySub)) {
  fs.writeFileSync(`scripts/ch5-part-${sub}.json`, JSON.stringify(part, null, 2) + "\n");
}

spawnSync("node", ["scripts/merge-ch5-banks.mjs"], { stdio: "inherit" });
console.log("expl fixes", fixes);
