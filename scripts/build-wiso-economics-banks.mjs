#!/usr/bin/env node
/**
 * Remap BBE Fuhrmann economics cases into Wirtschaft verstehen 2026 subsections.
 *
 * - Reassigns existing WiSo German banks (ch1/ch3) by source_bbe_subsection.
 * - Imports BBE marketing (5.x) into WiSo 3.5 (English source; translation pass later).
 * - Preserves WiSo-native chapter 2.
 * - Leaves chapter 4 empty for native authoring from the Lernunterlage.
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

const KW_SPEZ_TITLE = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "arbeitsteilung",
  "spezialisierung",
  "spezialisieren",
  "fabrikspezialisierung",
  "aufgabenteilung",
  "task split",
  "assembly line",
  "fließband",
  "fliessband",
];

const KW_SPEZ_BLOB = [
  "arbeitsteilung",
  "spezialisierung",
  "spezialisieren",
  "aufgabenteilung",
  "division of labour",
  "specialisation",
  "specialization",
];

const KW_MONEY_TITLE = [
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
  "geld",
  "zinsen",
  "zins",
  "kaufkraft",
  "tauschmittel",
  "wertaufbewahrung",
  "rechnungseinheit",
  "deflation",
  "preisniveau",
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
  const src = String(row.source_bbe_subsection || row.subsection || "");
  const title = titleBlob(row);
  const text = blob(row);

  // Money / interest / inflation → 1.5
  if (src.startsWith("2.") && hasAny(title, KW_MONEY_TITLE)) return "1.5";
  if (src.startsWith("2.") && hasAny(text.slice(0, 200), ["wertaufbewahrung", "tauschmittel", "rechnungseinheit"]) && hasAny(title, ["geld", "inflation", "zins", "money", "barter"])) {
    return "1.5";
  }

  // Specialisation / Arbeitsteilung → 1.2
  if (
    (src === "2.4" || src.startsWith("2.")) &&
    (hasAny(title, KW_SPEZ_TITLE) || hasAny(text, KW_SPEZ_BLOB))
  ) {
    // Prefer 1.2 when the case is clearly about division of labour / specialisation
    // rather than circular-flow public goods that only mention "Abteilung" incidentally.
    if (hasAny(title, KW_SPEZ_TITLE) || hasAny(title + " " + String(row.context || "").toLowerCase(), KW_SPEZ_BLOB)) {
      return "1.2";
    }
  }

  return BBE_TO_WISO[src] ?? null;
}

function chapterOf(sub) {
  return Number(String(sub).split(".")[0]);
}

function loadJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, rel), "utf8"));
}

fs.mkdirSync(outDir, { recursive: true });

// --- Chapter 1: reassign existing WiSo German bank ---
const ch1Old = loadJson("wiso/economics-cases-ch1.json");
const ch1Out = [];
for (const row of ch1Old) {
  const sub = mapSubsection(row);
  if (!sub || chapterOf(sub) !== 1) continue;
  ch1Out.push({ ...row, subsection: sub });
}
ch1Out.sort((a, b) =>
  a.subsection.localeCompare(b.subsection, "en", { numeric: true }) ||
  String(a.case_id).localeCompare(String(b.case_id), "en", { numeric: true }),
);
fs.writeFileSync(path.join(outDir, "economics-cases-ch1.json"), JSON.stringify(ch1Out, null, 2) + "\n");

// --- Chapter 3: reassign + import marketing ---
const ch3Old = loadJson("wiso/economics-cases-ch3.json");
const ch3Out = [];
for (const row of ch3Old) {
  const sub = mapSubsection(row);
  if (!sub || chapterOf(sub) !== 3) continue;
  ch3Out.push({ ...row, subsection: sub });
}

// Marketing from BBE English bank → 3.5 (flag for DE translation)
const marketing = loadJson("economics-cases-ch5-subtopics.json");
const existingIds = new Set(ch3Out.map((r) => r.source_bbe_case_id || r.case_id));
for (const row of marketing) {
  const sub = mapSubsection({ ...row, source_bbe_subsection: row.subsection });
  if (sub !== "3.5") continue;
  const id = row.case_id;
  if (existingIds.has(id)) continue;
  ch3Out.push({
    subsection: "3.5",
    case_id: id,
    title: row.title,
    context: row.context,
    statements: row.statements,
    answer_key: row.answer_key,
    tactical_explanations: row.tactical_explanations,
    difficulty_level: row.difficulty_level,
    tier: row.tier || "full",
    source_bbe_subsection: row.subsection,
    source_bbe_case_id: row.case_id,
    needs_de_translation: true,
  });
}

ch3Out.sort((a, b) =>
  a.subsection.localeCompare(b.subsection, "en", { numeric: true }) ||
  String(a.case_id).localeCompare(String(b.case_id), "en", { numeric: true }),
);
fs.writeFileSync(path.join(outDir, "economics-cases-ch3.json"), JSON.stringify(ch3Out, null, 2) + "\n");

// Chapter 2 untouched; chapter 4 stays empty until authored.
const counts = (rows) => {
  const c = {};
  for (const r of rows) c[r.subsection] = (c[r.subsection] || 0) + 1;
  return c;
};
console.log("ch1", ch1Out.length, counts(ch1Out));
console.log("ch3", ch3Out.length, counts(ch3Out));
console.log("ch3 marketing pending DE", ch3Out.filter((r) => r.needs_de_translation).length);
