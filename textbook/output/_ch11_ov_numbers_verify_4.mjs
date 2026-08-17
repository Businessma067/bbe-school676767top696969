import { readFileSync } from "node:fs";

const dir = "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/";
const raw = readFileSync(dir + "_ch11_ov_out_4.json");
const errors = [];
if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) errors.push("file has UTF-8 BOM");
const rawText = raw.toString("utf8");
if (rawText.includes("\u00e2\u0080")) errors.push("mojibake sequence in file");

const out = JSON.parse(rawText);
const report = JSON.parse(readFileSync(dir + "_ch11_ov_numbers_4.json").toString("utf8"));
const batch = JSON.parse(readFileSync(dir + "_ch11_ov_batch_4.json").toString("utf8"));

if (out.length !== 21) errors.push(`entry count ${out.length}`);
for (let i = 0; i < batch.length; i++) {
  if (out[i].id !== batch[i].id) errors.push(`order mismatch at ${i}`);
  if (Object.keys(out[i]).join(",") !== "id,text") errors.push(`shape ${out[i].id}`);
  if (out[i].text.length < batch[i].min_chars) errors.push(`short ${out[i].id}`);
}

// numeric tokens, mirroring a comma-stripping extractor
const numericSet = (text) => {
  const set = new Set();
  for (const m of text.matchAll(/\d[\d,]*(?:\.\d+)?/g)) {
    const cleaned = m[0].replace(/,/g, "").replace(/\.$/, "");
    const value = Number(cleaned);
    if (Number.isFinite(value)) {
      set.add(String(value));
      set.add(cleaned);
    }
  }
  return set;
};

const byId = new Map(out.map((o) => [o.id, o.text]));
for (const entry of report) {
  const text = byId.get(entry.id);
  const numbers = numericSet(text);
  for (const missing of entry.missing_numbers) {
    const asValue = String(Number(missing));
    if (!numbers.has(missing) && !numbers.has(asValue)) {
      errors.push(`still missing ${missing} in ${entry.id}`);
    }
    // also confirm the figure is not stranded at a sentence end only
    const grouped = Number(missing).toLocaleString("en-US");
    const midSentence = new RegExp(`\\\\\\$${grouped.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\.00)?[^.\\r\\n]`);
    if (!midSentence.test(text)) errors.push(`${entry.id}: ${grouped} appears only at a sentence end`);
  }
  if (text === entry.current_text) errors.push(`unchanged ${entry.id}`);
}

// format rules
const CURRENCY = "\u0001";
for (const item of out) {
  const id = item.id;
  if (/\\text\{/.test(item.text)) errors.push(`\\text{ ${id}`);
  if ((item.text.match(/\$\$/g) || []).length % 2 !== 0) errors.push(`unbalanced $$ ${id}`);
  for (const m of item.text.matchAll(/\$\$([\s\S]*?)\$\$/g)) {
    if (m[1].includes("\\$")) errors.push(`currency inside display ${id}`);
  }
  const withoutDisplays = item.text.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\\\$/g, CURRENCY);
  for (const m of withoutDisplays.matchAll(/\$([^$]*)\$/g)) {
    if (m[1].includes(CURRENCY)) errors.push(`currency inside inline ${id}`);
    if (m[1].length > 45) errors.push(`long inline ${id}`);
  }
  const lines = item.text.split("\r\n");
  for (let j = 0; j < lines.length; j++) {
    const line = lines[j];
    if (line.includes("$$")) {
      if (!/^\$\$[^\r\n]+\$\$$/.test(line)) errors.push(`display not alone ${id} line ${j + 1}`);
      if (j === 0 || lines[j - 1] !== "") errors.push(`no blank before ${id} line ${j + 1}`);
      if (j === lines.length - 1 || lines[j + 1] !== "") errors.push(`no blank after ${id} line ${j + 1}`);
      continue;
    }
    const prose = line.replace(/\\\$/g, CURRENCY).replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\$[^$]*\$/g, " ");
    if (prose.includes("=")) errors.push(`bare = outside math ${id} line ${j + 1}`);
    if (/[A-Za-z]\s*=\s*-?\d/.test(prose)) errors.push(`symbol=number outside math ${id} line ${j + 1}`);
  }
}

console.log(`entries: ${out.length}; number reports checked: ${report.length}`);
for (const entry of report) {
  console.log(`  ${entry.id}: ${entry.missing_numbers.join(", ")}`);
}
if (errors.length) {
  console.log("FAILURES:");
  for (const e of [...new Set(errors)]) console.log("  " + e);
  process.exit(1);
}
console.log("ALL CHECKS PASSED");
