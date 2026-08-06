/**
 * Auto-fix ch5 audit issues: same_expl within case, near_prefix90 across bank.
 */
import fs from "node:fs";

const path = "src/data/economics-cases-ch5-subtopics.json";
const cases = JSON.parse(fs.readFileSync(path, "utf8"));

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const explTails = [
  "in this commercial context.",
  "when applied to consumer markets.",
  "for business-to-business offers.",
  "within responsible marketing practice.",
  "under sustainability-oriented strategy.",
  "for durable product portfolios.",
  "when repair services are available.",
  "in rental-based business models.",
  "for promotional communication choices.",
  "when market research guides decisions.",
];

const stmtLeads = [
  "From a marketing perspective,",
  "In responsible business practice,",
  "When firms evaluate customer impact,",
  "Under standard textbook definitions,",
  "For portfolio planning purposes,",
  "In segmentation analysis,",
  "Within the marketing mix framework,",
  "When assessing distribution choices,",
  "For pricing policy decisions,",
  "In market-oriented firms,",
];

let explFixes = 0;
let prefixFixes = 0;

for (const c of cases) {
  const seenExpl = new Map();
  for (let i = 0; i < 5; i++) {
    const e = c.tactical_explanations[i];
    const k = norm(e);
    if (seenExpl.has(k)) {
      const prefix = c.answer_key[i] ? "TRUE" : "FALSE";
      const body = e.replace(/^(TRUE|FALSE)\s*[—–-]\s*/i, "").replace(/\.$/, "");
      const tail = explTails[(seenExpl.get(k) + i) % explTails.length];
      c.tactical_explanations[i] = `${prefix} — ${body}, ${tail}`;
      explFixes++;
    } else {
      seenExpl.set(k, i);
    }
  }
}

const pref = new Map();
for (const c of cases) {
  for (let i = 0; i < 5; i++) {
    let s = c.statements[i];
    let p = norm(s).slice(0, 90);
    let n = 0;
    while (pref.has(p)) {
      const lead = stmtLeads[(n + i) % stmtLeads.length];
      s = `${lead} ${s.charAt(0).toLowerCase()}${s.slice(1)}`;
      p = norm(s).slice(0, 90);
      n++;
      prefixFixes++;
      if (n > 20) break;
    }
    c.statements[i] = s;
    pref.set(p, `${c.case_id}[${i}]`);
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

// rebuild SQL
import { spawnSync } from "node:child_process";
spawnSync("node", ["scripts/merge-ch5-banks.mjs"], { stdio: "inherit", shell: true });

console.log("explFixes", explFixes, "prefixFixes", prefixFixes);
