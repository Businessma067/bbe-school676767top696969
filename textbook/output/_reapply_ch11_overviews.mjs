import fs from "node:fs";
import katex from "katex";
import { toSource } from "./_ch11_textcmd_lib.mjs";
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";

const BAD = [
  /corresponding monetary figure/i,
  /value computed below/i,
  /comparison below/i,
  /Use the following relationship/i,
  /Record the given quantity/i,
  /Substitute the stated values/i,
];

const plainThousands = (value) =>
  value
    .replace(/\$\$[\s\S]*?\$\$/g, (m) => m.replace(/\{,\}/g, ","))
    .replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, (m) => m.replace(/\{,\}/g, ","));

const spansOf = (value) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) spans.push({ kind: "display", body: m[1] });
  const rest = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(rest))) spans.push({ kind: "inline", body: m[1] });
  return spans;
};

const stripMath = (s) =>
  s.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, " ");

const numbers = (s) =>
  new Set(
    (s.replace(/\{,\}/g, ",").match(/\d[\d,.]*/g) ?? []).map((n) =>
      n
        .replace(/,/g, "")
        .replace(/\.+$/, "")
        .replace(/(\.\d*?)0+$/, "$1")
        .replace(/\.$/, ""),
    ),
  );

const problems = [];
const edits = [];

for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  if (output.length !== input.length) problems.push(`batch ${b}: count mismatch`);

  input.forEach((item, i) => {
    const out = output[i];
    const tag = item.caseId;
    if (!out || out.id !== item.id) {
      problems.push(`${tag}: missing/mismatched`);
      return;
    }
    const text = plainThousands(out.text);
    if (text.length < item.min_chars) problems.push(`${tag}: shortened`);
    for (const re of BAD) {
      if (re.test(text)) problems.push(`${tag}: template "${re.source}"`);
    }
    if (((text.match(/\$\$/g) ?? []).length || 0) % 2 !== 0) problems.push(`${tag}: unbalanced $$`);
    if (!(text.match(/\$\$/g) ?? []).length) problems.push(`${tag}: no displays`);

    for (const span of spansOf(text)) {
      if (/\\\$/.test(span.body)) problems.push(`${tag}: currency in math`);
      if (span.kind === "inline" && !looksLikeMathInner(span.body)) {
        problems.push(`${tag}: inline raw -> ${span.body.slice(0, 50)}`);
      }
      if (span.kind === "inline" && span.body.trim().length > 60) {
        problems.push(`${tag}: long inline`);
      }
      try {
        katex.renderToString(span.body, {
          throwOnError: true,
          strict: "ignore",
          displayMode: span.kind === "display",
        });
      } catch (e) {
        problems.push(`${tag}: KaTeX ${e.message.slice(0, 60)}`);
      }
    }
    for (const line of stripMath(text).split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("**")) continue;
      if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(t)) problems.push(`${tag}: unmarked -> ${t.slice(0, 50)}`);
    }
    const missing = [...numbers(item.text)].filter((n) => !numbers(text).has(n));
    // Ignore short artifacts like "03" from "$2S_0$,$3S_0$" where a comma sits between zeros.
    const realMissing = missing.filter((n) => n.length >= 2 && !/^0\d$/.test(n));
    if (realMissing.length) problems.push(`${tag}: dropped ${realMissing.slice(0, 5).join(",")}`);
    edits.push({ item, text });
  });
}

console.log(`checked ${edits.length}, problems ${problems.length}`);
for (const p of problems.slice(0, 50)) console.log("  - " + p);
if (problems.length) process.exit(1);

// Apply onto live source using CURRENT live overview as the search key when possible,
// falling back to the batch original.
let src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const { splitTasks, scalarField, toValue } = await import("./_ch11_textcmd_lib.mjs");
const liveById = new Map();
for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (ov) liveById.set(task.id, toValue(ov));
}

let applied = 0;
for (const { item, text } of edits) {
  const after = toSource(text);
  const candidates = [liveById.get(item.id), item.text].filter(Boolean);
  let replaced = false;
  for (const cand of candidates) {
    const before = toSource(cand);
    if (src.split(before).length - 1 === 1) {
      src = src.replace(before, () => after);
      replaced = true;
      break;
    }
  }
  if (!replaced) {
    console.log(`FAILED to locate overview for ${item.caseId}`);
    process.exit(1);
  }
  applied += 1;
}

fs.writeFileSync("src/data/math-ch11-financial.ts", src);
console.log(`applied ${applied}`);
