#!/usr/bin/env node
/**
 * Merge textbook/output/wiso_german_texts/t.1.json … t.10.json
 * into src/data/wiso/german/texts.json
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "textbook/output/wiso_german_texts");
const OUT = join(ROOT, "src/data/wiso/german/texts.json");

const EXAM_TITLES = [
  "Absätze 1–3",
  "Absätze 4–6",
  "Absätze 7–9",
  "Schlussfolgerungen & Wortbedeutung im Kontext",
  "Querschnitt & Argumentstruktur",
  "Zahlen, Fakten & Details",
  "Ursache und Wirkung",
  "Gewichtung & Haltung im Text",
  "Chronologie & Vergleiche",
  "Gesamtschluss & offene Fragen",
];

const files = readdirSync(DIR)
  .filter((f) => /^t\.\d+\.json$/.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

if (files.length !== 10) {
  console.error(`Expected 10 text files, found ${files.length}:`, files);
  process.exit(1);
}

const subsections = [];
const tasks = [];
const errors = [];

for (const file of files) {
  const raw = JSON.parse(readFileSync(join(DIR, file), "utf8"));
  const sub = raw.subsection;
  if (!sub?.id || !sub.passage || !sub.title) {
    errors.push(`${file}: missing subsection fields`);
    continue;
  }
  const paras = (sub.passage.match(/\(\d+\)/g) || []).length;
  if (paras !== 9) errors.push(`${file}: expected 9 paragraphs, got ${paras}`);
  if ((raw.tasks || []).length !== 10) errors.push(`${file}: expected 10 tasks`);

  subsections.push({
    id: sub.id,
    title: sub.title,
    passage: sub.passage,
    paragraph_count: sub.paragraph_count ?? 9,
  });

  for (const [i, t] of (raw.tasks || []).entries()) {
    for (const field of ["statements", "answer_key", "tactical_explanations", "highlights"]) {
      if (!Array.isArray(t[field]) || t[field].length !== 5) {
        errors.push(`${file} task ${i + 1}: ${field} must have length 5`);
      }
    }
    for (const h of t.highlights || []) {
      if (h && !sub.passage.includes(h)) {
        errors.push(`${file} task ${i + 1}: highlight not in passage: ${JSON.stringify(h).slice(0, 80)}`);
      }
    }
    if (t.exam_title !== EXAM_TITLES[i]) {
      // warn only
      console.warn(`${file} task ${i + 1}: exam_title="${t.exam_title}" (expected "${EXAM_TITLES[i]}")`);
    }
    tasks.push(t);
  }
}

if (errors.length) {
  console.error("Validation errors:\n" + errors.join("\n"));
  process.exit(1);
}

const bank = {
  source: "WISO_German_Sprachverstaendnis_v1",
  subsections,
  tasks,
};

writeFileSync(OUT, JSON.stringify(bank, null, 2) + "\n");
console.log(`Wrote ${subsections.length} texts, ${tasks.length} tasks → ${OUT}`);
