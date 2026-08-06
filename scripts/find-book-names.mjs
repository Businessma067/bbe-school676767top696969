import fs from "node:fs";

const files = [
  "src/data/economics-cases-ch2-subtopics.json",
  "src/data/economics-cases-ch3-subtopics.json",
];

// Book characters / orgs / branded narrative props students won't know from general theory
const patterns = [
  /\bAT&S\b/i,
  /\bTina\b/i,
  /\bSteve\b/i,
  /\bRed Cross\b/i,
  /\bWWF\b/i,
  /\bWorld Wildlife Fund\b/i,
  /\bGreenpeace\b/i,
  /\bRuntastic\b/i,
  /\bAdidas\b/i,
  /\bFuhrmann\b/i,
  /\bPCB\b/,
  /\bIC substrates?\b/i,
  /\bTina'?s and Steve'?s\b/i,
];

for (const f of files) {
  const cases = JSON.parse(fs.readFileSync(f, "utf8"));
  const hits = [];
  for (const c of cases) {
    const fields = [
      ["title", c.title],
      ["context", c.context],
      ...c.statements.map((s, i) => [`stmt${i}`, s]),
      ...c.tactical_explanations.map((s, i) => [`expl${i}`, s]),
    ];
    const found = [];
    for (const [where, text] of fields) {
      for (const re of patterns) {
        const m = String(text).match(re);
        if (m) found.push({ where, match: m[0], text: String(text).slice(0, 120) });
      }
    }
    if (found.length) hits.push({ id: c.case_id, found });
  }
  console.log("\n===", f, "hit cases", hits.length);
  for (const h of hits.slice(0, 50)) {
    console.log(h.id, h.found.map((x) => x.match + "@" + x.where).join(", "));
  }
  if (hits.length > 50) console.log("… +" + (hits.length - 50));
}
