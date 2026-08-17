/** Emit-escape round-trip + collision check against the live Chapter 8 bank. */
import fs from "node:fs";
import { BATCH } from "./_ch8_add_79_87.mjs";

const esc = (s) =>
  String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

let problems = [];
for (const t of BATCH) {
  const fields = [
    ["title", t.title],
    ["context", t.context],
    ...t.statements.map((s, i) => ["s" + i, s]),
    ...t.tactical_explanations.map((s, i) => ["e" + i, s]),
    ["ov", t.solution_overview],
  ];
  for (const [k, v] of fields) {
    const emitted = esc(v);
    // eslint-disable-next-line no-new-func
    const back = new Function("return `" + emitted + "`;")();
    if (back !== v) problems.push(`${t.case_id} ${k}: round-trip mismatch`);
    if (/(^|[^\\])\$\{/.test(emitted)) problems.push(`${t.case_id} ${k}: unescaped interpolation`);
    if (/(^|[^\\])`/.test(emitted)) problems.push(`${t.case_id} ${k}: unescaped backtick`);
  }
}

const src = fs.readFileSync("src/data/math-ch8-power-functions.ts", "utf8");
const liveTitles = [...src.matchAll(/title: `([^`]+)`/g)].map((m) => m[1]);
const liveIds = [...src.matchAll(/case_id: `([^`]+)`/g)].map((m) => m[1]);
for (const t of BATCH) {
  if (liveTitles.includes(t.title)) problems.push(`${t.case_id}: title collides with live bank`);
  if (liveIds.includes(t.case_id)) problems.push(`${t.case_id}: case_id already in live bank`);
}

// context-scenario keyword overlap with live contexts (cheap duplicate sniff)
const liveContexts = [...src.matchAll(/context: `([^`]+)`/g)].map((m) => m[1].toLowerCase());
const keywords = {
  "MATH 8.79": ["pellet", "rotor"],
  "MATH 8.80": ["membrane"],
  "MATH 8.81": ["settlement", "soil"],
  "MATH 8.82": ["berry", "picker"],
  "MATH 8.83": ["snow"],
  "MATH 8.84": ["price index", "deflat", "contractor"],
  "MATH 8.85": ["café", "cup"],
  "MATH 8.86": ["compost", "green waste"],
  "MATH 8.87": ["recycling", "sorting"],
};
for (const [cid, words] of Object.entries(keywords)) {
  for (const w of words) {
    const hits = liveContexts.filter((c) => c.includes(w)).length;
    if (hits) problems.push(`${cid}: live bank already uses the word "${w}" in ${hits} context(s)`);
  }
}

console.log("live ch8 tasks:", liveIds.length, "| new ids:", BATCH.map((t) => t.case_id).join(" "));
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "no problems found");
process.exit(problems.length ? 1 : 0);
