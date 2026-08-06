import fs from "node:fs";
import path from "node:path";

const neu = JSON.parse(
  fs.readFileSync("src/data/economics-cases-ch2-subtopics.json", "utf8"),
);

function norm(s) {
  return String(s)
    .replace(/''/g, "'")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

const dir = "supabase/migrations";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".sql"));

/** Full Course legacy: subsection '2' (not 2.1). Collect quotes from those seeds only. */
function extractLegacyCh2Quotes() {
  const quotes = [];
  for (const f of files) {
    if (f.includes("ch2_subtopic") || f.includes("06010000")) continue; // skip our banks
    const sql = fs.readFileSync(path.join(dir, f), "utf8");
    if (!sql.includes("economics_cases")) continue;
    // slices that look like chapter-2 legacy inserts
    const chunks = sql.split(/\('2'\s*,/);
    for (let i = 1; i < chunks.length; i++) {
      const chunk = chunks[i].slice(0, 8000);
      if (!/CASE 2\.\d+/i.test(chunk)) continue;
      const parts = [...chunk.matchAll(/'((?:[^']|''){20,})'/g)].map((m) =>
        m[1].replace(/''/g, "'"),
      );
      quotes.push(...parts);
    }
  }
  return quotes;
}

const legacy = extractLegacyCh2Quotes();
const legacySet = new Set(legacy.map(norm));
const legacy60 = new Set([...legacySet].map((s) => s.slice(0, 60)));

let exactStmt = 0;
let exactCtx = 0;
let fuzzy60 = 0;
const exactHits = [];
const fuzzyHits = [];

for (const c of neu) {
  if (legacySet.has(norm(c.context))) {
    exactCtx++;
    exactHits.push({ kind: "context", id: c.case_id, text: c.context.slice(0, 120) });
  }
  for (const s of c.statements) {
    const n = norm(s);
    if (legacySet.has(n)) {
      exactStmt++;
      exactHits.push({ kind: "statement", id: c.case_id, text: s.slice(0, 120) });
    } else if (legacy60.has(n.slice(0, 60))) {
      fuzzy60++;
      fuzzyHits.push({ id: c.case_id, text: s.slice(0, 120) });
    }
  }
}

// also titles
let exactTitle = 0;
for (const c of neu) {
  if (legacySet.has(norm(c.title))) exactTitle++;
}

console.log("New bank:", neu.length, "cases /", neu.length * 5, "statements");
console.log("Legacy ch2 quotes extracted:", legacy.length);
console.log("Exact statement overlaps:", exactStmt);
console.log("Exact context overlaps:", exactCtx);
console.log("Exact title overlaps:", exactTitle);
console.log("Fuzzy first-60-char statement overlaps:", fuzzy60);
console.log("\nExact hits:");
for (const h of exactHits.slice(0, 20)) console.log("-", h.kind, h.id, h.text);
console.log("\nFuzzy hits sample:");
for (const h of fuzzyHits.slice(0, 15)) console.log("-", h.id, h.text);
