import fs from "node:fs";
import katex from "katex";

const DIR = "textbook/output/_ch8_rewrite";
const all = JSON.parse(fs.readFileSync(`${DIR}/all.json`, "utf8"));
const byId = Object.fromEntries(all.map((t) => [t.id, t]));
const files = fs.readdirSync(DIR).filter((f) => f.startsWith("out_") && f.endsWith(".json")).sort();

const letters = "ABCDE";
const problems = [];
const rows = [];
let katexFails = 0;
let mathSpans = 0;

function spans(text) {
  const out = [];
  for (const m of text.matchAll(/\$\$([\s\S]*?)\$\$/g)) out.push({ body: m[1], display: true });
  const stripped = text.replace(/\$\$[\s\S]*?\$\$/g, "");
  for (const m of stripped.matchAll(/\$([^$\n]+)\$/g)) out.push({ body: m[1], display: false });
  return out;
}

const covered = new Set();
for (const f of files) {
  const obj = JSON.parse(fs.readFileSync(`${DIR}/${f}`, "utf8"));
  for (const [id, expls] of Object.entries(obj)) {
    covered.add(id);
    const task = byId[id];
    if (!task) {
      problems.push(`${id}: unknown id`);
      continue;
    }
    if (!Array.isArray(expls) || expls.length !== 5) {
      problems.push(`${id}: ${expls?.length} explanations`);
      continue;
    }
    const lens = expls.map((e) => e.length);
    const openings = [];
    expls.forEach((e, i) => {
      const letter = letters[i];
      const want = task.answer_key[i] ? "True" : "False";
      if (!e.startsWith(`**${letter}.** → ${want}`)) problems.push(`${id}${letter}: opener`);
      if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${id}${letter}: closer`);
      if (e.includes("Extended context check")) problems.push(`${id}${letter}: extended`);
      if (e.includes("**Part 1:")) problems.push(`${id}${letter}: overview dump`);
      if (e.includes("—")) problems.push(`${id}${letter}: emdash`);
      if (e.includes("${")) problems.push(`${id}${letter}: interpolation`);
      if (/From Part [A-E]/i.test(e) || /as shown above/i.test(e)) problems.push(`${id}${letter}: cross-ref`);
      const firstBody = e.split("\n").filter((l) => l.trim() && !l.startsWith("**"))[0] || "";
      openings.push(firstBody.slice(0, 70));
      for (const span of spans(e)) {
        mathSpans += 1;
        try {
          katex.renderToString(span.body, { throwOnError: true, displayMode: span.display });
        } catch (err) {
          katexFails += 1;
          if (katexFails <= 15) problems.push(`${id}${letter}: katex ${span.body.slice(0, 40)} :: ${String(err.message).slice(0, 70)}`);
        }
      }
    });
    const uniqOpen = new Set(openings.map((o) => o.slice(0, 40)));
    if (uniqOpen.size < 4) problems.push(`${id}: cloned openings (${uniqOpen.size})`);
    rows.push({
      id,
      min: Math.min(...lens),
      max: Math.max(...lens),
      ratio: +(Math.max(...lens) / Math.min(...lens)).toFixed(2),
      openings,
    });
  }
}

const missing = all.map((t) => t.id).filter((id) => !covered.has(id));
console.log(`patch files: ${files.length}`);
console.log(`covered: ${covered.size} / ${all.length}; missing: ${missing.join(",") || "none"}`);
console.log(`math spans: ${mathSpans}; katex fails: ${katexFails}`);
console.log(`problems: ${problems.length}`);
problems.slice(0, 40).forEach((p) => console.log(" ", p));
console.log("\nlength sample:");
rows.slice(0, 12).forEach((r) => console.log(`  ${r.id} ${r.min}..${r.max} x${r.ratio}`));
if (rows.length) {
  const ratios = rows.map((r) => r.ratio).sort((a, b) => a - b);
  console.log(`ratio min=${ratios[0]} median=${ratios[Math.floor(ratios.length / 2)]} max=${ratios.at(-1)}`);
}
