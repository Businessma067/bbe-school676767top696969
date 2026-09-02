import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const snapPath = process.argv[3] || path.join(path.dirname(dir), path.basename(dir) + "_frozen.json");
if (!dir) {
  console.error("usage: node lock_fields.mjs <json-dir> [frozen.json]");
  process.exit(1);
}

function loadDir(d) {
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith(".json") && !f.includes("frozen") && !f.startsWith("_"))
    .sort()
    .flatMap((f) => JSON.parse(fs.readFileSync(path.join(d, f), "utf8")));
}

const frozen = JSON.parse(fs.readFileSync(snapPath, "utf8"));
const now = loadDir(dir);
const byId = new Map(now.map((t) => [t.id, t]));
const keys = ["id", "case_id", "title", "subsection", "context", "statements", "answer_key", "difficulty_level", "sort_order", "tables_markdown", "figure"];
let bad = 0;
for (const old of frozen) {
  const t = byId.get(old.id);
  if (!t) {
    console.log("MISSING", old.id);
    bad += 1;
    continue;
  }
  for (const k of keys) {
    const a = JSON.stringify(old[k] ?? null);
    const b = JSON.stringify(t[k] ?? null);
    if (a !== b) {
      console.log("CHANGED", old.id, k);
      bad += 1;
    }
  }
}
console.log(bad === 0 ? `OK ${now.length}` : `FAIL ${bad}`);
process.exit(bad ? 1 : 0);
