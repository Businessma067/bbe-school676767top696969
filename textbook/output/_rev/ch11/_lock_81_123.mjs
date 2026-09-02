import fs from "fs";
import path from "path";

const snapPath = new URL("../ch11_frozen.json", import.meta.url);
const frozen = JSON.parse(fs.readFileSync(snapPath, "utf8"));
const files = ["81_90.json", "91_100.json", "101_110.json", "111_120.json", "121_123.json"];
const now = files.flatMap((f) => JSON.parse(fs.readFileSync(new URL(f, import.meta.url), "utf8")));
const byId = new Map(now.map((t) => [t.id, t]));
const keys = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];
let bad = 0;
const ids = now.map((t) => t.id);
for (const old of frozen.filter((t) => ids.includes(t.id))) {
  const t = byId.get(old.id);
  if (!t) {
    console.log("MISSING", old.id);
    bad++;
    continue;
  }
  for (const k of keys) {
    if (JSON.stringify(old[k] ?? null) !== JSON.stringify(t[k] ?? null)) {
      console.log("CHANGED", old.id, k);
      bad++;
    }
  }
}
console.log(bad === 0 ? `OK ${now.length}` : `FAIL ${bad}`);
process.exit(bad ? 1 : 0);
