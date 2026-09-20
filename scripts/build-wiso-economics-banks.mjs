#!/usr/bin/env node
/**
 * Remap BBE Fuhrmann economics cases into Wirtschaft verstehen subsections.
 * Preserves existing WiSo-native banks for chapters 2 and 4 when remap yields no rows.
 * Excludes BBE marketing (5.x). Reclassifies money/inflation into 1.4.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "src/data");
const outDir = path.join(dataDir, "wiso");

const BBE_TO_WISO = {
  "2.1": "1.2",
  "2.2": "1.2",
  "2.3": "1.2",
  "2.4": "1.1",
  "2.5": "1.1",
  "2.6": "1.1",
  "2.7": "1.1",
  "3.1": "3.1",
  "3.2": "3.1",
  "3.3": "3.1",
  "3.4": "3.1",
  "3.5": "3.1",
  "3.6": "3.1",
  "4.1": "3.1",
  "4.2": "3.1",
  "4.3": "3.1",
  "4.4": "3.1",
  "4.5": "3.2",
  "4.6": "3.2",
  "6.1": "3.3",
  "6.2": "3.3",
  "6.3": "3.3",
  "6.4": "3.3",
  "6.5": "3.3",
};

const KW_1_3 = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "arbeitsteilung",
  "spezialisierung",
];

/** Prefer title hits; body needs a strong noun phrase, not verb "specialise" alone. */
const KW_1_3_TITLE = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "task split",
  "assembly line",
];

/** Title-only cues for Geld / Zinsen / Inflation (avoid incidental euro mentions). */
const KW_1_4_TITLE = [
  "inflation",
  "hyperinflation",
  "deflation",
  "purchasing power",
  "price level",
  "interest rate",
  "interest rates",
  "monetary policy",
  "central bank",
  "ecb",
  "money's three",
  "three functions",
  "functions of money",
  "medium of exchange",
  "unit of account",
  "store of value",
  "too much money",
  "note-issuance",
  "note issuance",
  "mortgage rate",
  "rate rise",
  "barter",
];

function blob(row) {
  return [row.title, row.context, ...(row.statements || [])].join("\n").toLowerCase();
}

function titleBlob(row) {
  return String(row.title || "").toLowerCase();
}

function hasAny(text, keywords) {
  return keywords.some((k) => text.includes(k));
}

function mapSubsection(row) {
  const src = row.subsection;
  const text = blob(row);
  const title = titleBlob(row);

  // Money / interest / inflation — title match only, so circular-flow cases stay in 1.1.
  if (String(src).startsWith("2.") && hasAny(title, KW_1_4_TITLE)) {
    return "1.4";
  }

  if (src === "2.4" && (hasAny(title, KW_1_3_TITLE) || hasAny(title, KW_1_3))) return "1.3";

  return BBE_TO_WISO[src] ?? null;
}

function chapterOf(sub) {
  return Number(String(sub).split(".")[0]);
}

fs.mkdirSync(outDir, { recursive: true });

const byChapter = { 1: [], 2: [], 3: [], 4: [] };
const counts = {};

for (const ch of [2, 3, 4, 6]) {
  const file = path.join(dataDir, `economics-cases-ch${ch}-subtopics.json`);
  const rows = JSON.parse(fs.readFileSync(file, "utf8"));
  for (const row of rows) {
    const wisoSub = mapSubsection(row);
    if (!wisoSub) continue;
    const wisoCh = chapterOf(wisoSub);
    const next = {
      ...row,
      subsection: wisoSub,
      source_bbe_subsection: row.subsection,
      source_bbe_case_id: row.case_id,
      // Keep case_id stable for progress continuity across tracks.
      case_id: row.case_id,
    };
    byChapter[wisoCh].push(next);
    counts[wisoSub] = (counts[wisoSub] || 0) + 1;
  }
}

for (const ch of [1, 2, 3, 4]) {
  const rows = byChapter[ch].sort((a, b) => {
    const sub = a.subsection.localeCompare(b.subsection, "en", { numeric: true });
    if (sub !== 0) return sub;
    return String(a.case_id).localeCompare(String(b.case_id), "en", { numeric: true });
  });
  const out = path.join(outDir, `economics-cases-ch${ch}.json`);
  // WiSo-native content (e.g. Nachhaltigkeit / Digitalisierung) lives only in these files.
  // Do not wipe it when the BBE remap contributes zero rows.
  if ((ch === 2 || ch === 4) && rows.length === 0 && fs.existsSync(out)) {
    const existing = JSON.parse(fs.readFileSync(out, "utf8"));
    const n = Array.isArray(existing) ? existing.length : 0;
    console.log(`ch${ch}: preserve native bank (${n} cases) → ${path.relative(root, out)}`);
    continue;
  }
  fs.writeFileSync(out, `${JSON.stringify(rows, null, 2)}\n`);
  console.log(`ch${ch}: ${rows.length} cases → ${path.relative(root, out)}`);
}

console.log("subsection counts:", counts);
console.log("done");
