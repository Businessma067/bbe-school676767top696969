/**
 * Generate src/data/ch2-part-2.4-2.5.json — 50 FC cases each for 2.4 and 2.5.
 * Run: node scripts/generate-ch2-part-2.4-2.5.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { EXT_24 } from "./ch2-part-2.4-ext.mjs";
import { EXT_25 } from "./ch2-part-2.5-ext.mjs";
import {
  FC_SUFFIX,
  TRUE_ORDER_50,
  fixContext,
  validatePart,
  pad,
  countTrues,
} from "./ch2-part-2.4-2.5-shared.mjs";

const root = path.resolve(import.meta.dirname, "..");
const basePath = path.join(root, "src", "data", "economics-cases-ch2-subtopics.json");
const outPath = path.join(root, "src", "data", "ch2-part-2.4-2.5.json");

function sanitizeCase(c) {
  const title = String(c.title)
    .replace(/\bFuhrmann\b.*$/i, "Economic Systems")
    .replace(/^Assess summary claims about economic systems in Economic Systems:?$/i, "Economic Systems Compared")
    .replace(/Policals/i, "Politicians");
  let context = fixContext(c.context);
  if (/Fuhrmann/i.test(context)) {
    context = "Analyze core claims about market and planned economic systems. " + FC_SUFFIX;
  }
  return {
    ...c,
    title,
    context,
    tier: "full",
  };
}

function fromExt(entry, subsection, num) {
  const answer_key = entry.expls.map((e) => e.startsWith("TRUE —"));
  let context = fixContext(entry.context);
  return {
    subsection,
    case_id: `CASE ${subsection}.${pad(num)}`,
    title: entry.title,
    context,
    statements: [...entry.stmts],
    answer_key,
    tactical_explanations: [...entry.expls],
    difficulty_level: entry.diff,
    tier: "full",
  };
}

function buildSection(subsection, extPool) {
  const baseAll = JSON.parse(fs.readFileSync(basePath, "utf8"))
    .filter((c) => c.subsection === subsection)
    .map(sanitizeCase);

  const buckets = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (const c of baseAll) {
    const tc = countTrues(c.answer_key);
    buckets[tc].push(c);
  }

  const extBuckets = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (const e of extPool) {
    const tc = e.expls.filter((x) => x.startsWith("TRUE —")).length;
    extBuckets[tc].push(e);
  }

  const out = [];
  for (let i = 0; i < 50; i++) {
    const need = TRUE_ORDER_50[i];
    const num = i + 1;
    if (i < 30) {
      const c = buckets[need].shift();
      if (!c) throw new Error(`${subsection}: missing base case with ${need}T for slot ${num}`);
      out.push({
        ...c,
        case_id: `CASE ${subsection}.${pad(num)}`,
      });
    } else {
      const e = extBuckets[need].shift();
      if (!e) throw new Error(`${subsection}: missing ext case with ${need}T for slot ${num}`);
      out.push(fromExt(e, subsection, num));
    }
  }
  return out;
}

const cases = [...buildSection("2.4", EXT_24), ...buildSection("2.5", EXT_25)];

const errors = [...validatePart(cases, "2.4"), ...validatePart(cases, "2.5")];
if (cases.length !== 100) errors.push(`Total ${cases.length} ≠ 100`);

const globalStmts = new Map();
for (const c of cases) {
  for (const s of c.statements) {
    const fp = s.trim().toLowerCase();
    if (globalStmts.has(fp)) errors.push(`Global duplicate: ${c.case_id} <-> ${globalStmts.get(fp)}`);
    else globalStmts.set(fp, c.case_id);
  }
}

if (errors.length) {
  console.error("Validation failed:\n" + errors.slice(0, 80).join("\n"));
  if (errors.length > 80) console.error(`… +${errors.length - 80} more`);
  process.exit(1);
}

fs.writeFileSync(outPath, JSON.stringify(cases, null, 2) + "\n");

console.log(`OK: wrote ${outPath} (${cases.length} cases)`);
for (const sub of ["2.4", "2.5"]) {
  const subCases = cases.filter((c) => c.subsection === sub);
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of subCases) hist[countTrues(c.answer_key)]++;
  console.log(`${sub} histogram`, hist);
}
console.log("\nSample CASE 2.4.01:");
console.log(JSON.stringify(cases.find((c) => c.case_id === "CASE 2.4.01"), null, 2));
