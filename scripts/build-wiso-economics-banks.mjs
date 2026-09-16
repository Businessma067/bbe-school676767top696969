#!/usr/bin/env node
/**
 * Remap BBE Fuhrmann economics cases into Wirtschaft verstehen subsections.
 * Keeps title/context/statements/answers/explanations byte-identical to BBE.
 * Leaves WiSo chapters 2 and 4 empty (no BBE counterpart).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "src/data");
const outDir = path.join(dataDir, "wiso");

const BBE_TO_WISO = {
  "2.1": "1.1",
  "2.2": "1.3",
  "2.3": "1.3",
  "2.4": "1.4",
  "2.5": "1.4",
  "2.6": "1.4",
  "2.7": "1.4",
  "3.1": "3.1",
  "3.2": "3.1",
  "3.3": "3.1",
  "3.4": "3.1",
  "3.5": "3.1",
  "3.6": "3.1",
  "4.1": "3.2",
  "4.2": "3.2",
  "4.3": "3.2",
  "4.4": "3.2",
  "4.5": "3.3",
  "4.6": "3.3",
  "5.1": "3.5",
  "5.2": "3.5",
  "5.3": "3.5",
  "5.4": "3.5",
  "5.5": "3.5",
  "5.6": "3.5",
  "5.7": "3.5",
  "6.1": "3.4",
  "6.2": "3.4",
  "6.3": "3.4",
  "6.4": "3.4",
  "6.5": "3.4",
};

const KW_1_2 = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "specialise",
  "specialize",
];

function blob(row) {
  return [row.title, row.context, ...(row.statements || [])].join("\n").toLowerCase();
}

function mapSubsection(row) {
  const src = row.subsection;
  if (src === "2.4") {
    const text = blob(row);
    if (KW_1_2.some((k) => text.includes(k))) return "1.2";
  }
  return BBE_TO_WISO[src] ?? null;
}

function chapterOf(sub) {
  return Number(String(sub).split(".")[0]);
}

fs.mkdirSync(outDir, { recursive: true });

const byChapter = { 1: [], 2: [], 3: [], 4: [] };
const counts = {};

for (const ch of [2, 3, 4, 5, 6]) {
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
  fs.writeFileSync(out, `${JSON.stringify(rows, null, 2)}\n`);
  console.log(`ch${ch}: ${rows.length} cases → ${path.relative(root, out)}`);
}

console.log("subsection counts:", counts);
console.log("done");
