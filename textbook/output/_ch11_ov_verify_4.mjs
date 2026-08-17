import { readFileSync } from "node:fs";

const dir = "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/";
const CURRENCY = "\u0001";

const raw = readFileSync(dir + "_ch11_ov_out_4.json");
const errors = [];
if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) errors.push("file has UTF-8 BOM");
const rawText = raw.toString("utf8");
if (rawText.includes("\u00e2\u0080")) errors.push("mojibake sequence found in file");

const out = JSON.parse(rawText);
const batch = JSON.parse(readFileSync(dir + "_ch11_ov_batch_4.json").toString("utf8"));
const fixes = JSON.parse(readFileSync(dir + "_ch11_ov_fix_4.json").toString("utf8"));

if (out.length !== 21) errors.push(`entry count ${out.length}`);
if (out.length !== batch.length) errors.push("count differs from batch");

const stripMath = (line) =>
  line
    .replace(/\\\$/g, CURRENCY)
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]*\$/g, " ");

for (let i = 0; i < batch.length; i++) {
  const src = batch[i];
  const item = out[i];
  const id = src.id;
  if (item.id !== id) errors.push(`order mismatch at ${i}: ${item.id}`);
  if (Object.keys(item).join(",") !== "id,text") errors.push(`shape ${id}`);
  if (item.text.length < src.min_chars) errors.push(`short ${id}: ${item.text.length} < ${src.min_chars}`);
  if (item.text.includes("\u00e2\u0080")) errors.push(`mojibake ${id}`);
  if (/\\text\{/.test(item.text)) errors.push(`\\text{ ${id}`);

  const headersSrc = (src.text.match(/^\*\*Part[^\r\n]+/gm) || []).join("|");
  const headersOut = (item.text.match(/^\*\*Part[^\r\n]+/gm) || []).join("|");
  if (headersSrc !== headersOut) errors.push(`part headers ${id}`);
  const stepsSrc = (src.text.match(/^\*\*\d+\.\*\*/gm) || []).join("|");
  const stepsOut = (item.text.match(/^\*\*\d+\.\*\*/gm) || []).join("|");
  if (stepsSrc !== stepsOut) errors.push(`step markers ${id}`);

  const displayDelims = (item.text.match(/\$\$/g) || []).length;
  if (displayDelims % 2 !== 0) errors.push(`unbalanced $$ ${id}`);
  for (const m of item.text.matchAll(/\$\$([\s\S]*?)\$\$/g)) {
    if (m[1].includes("\\$")) errors.push(`currency inside display ${id}`);
  }

  const withoutDisplays = item.text.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\\\$/g, CURRENCY);
  for (const m of withoutDisplays.matchAll(/\$([^$]*)\$/g)) {
    if (m[1].includes(CURRENCY)) errors.push(`currency inside inline ${id}`);
    if (m[1].length > 45) errors.push(`long inline ${id}: ${m[1].length}`);
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
    const prose = stripMath(line);
    if (prose.includes("=")) errors.push(`bare = outside math ${id} line ${j + 1}: ${prose.trim().slice(0, 80)}`);
    if (/[A-Za-z]\s*=\s*-?\d/.test(prose)) errors.push(`symbol=number outside math ${id} line ${j + 1}`);
    if (/[A-Za-z]\s*[<>]\s*-?\d/.test(prose)) console.log(`  note: comparison outside math ${id} line ${j + 1}`);
  }
}

const outById = new Map(out.map((o) => [o.id, o.text]));
for (const fix of fixes) {
  const text = outById.get(fix.id);
  for (const issue of fix.issues) {
    const flagged = issue.replace(/^unmarked math in this line: /, "");
    if (text.includes(flagged)) errors.push(`issue survives ${fix.id}`);
  }
  if (text === fix.text) errors.push(`unchanged ${fix.id}`);
}

const untouched = batch.filter((b) => !fixes.some((f) => f.id === b.id)).map((b) => b.id);
console.log(`checked ${out.length} entries; ${fixes.length} listed for repair`);
console.log(`untouched ids: ${untouched.join(", ")}`);
if (errors.length) {
  console.log("FAILURES:");
  for (const e of [...new Set(errors)]) console.log("  " + e);
  process.exit(1);
}
console.log("ALL CHECKS PASSED");
