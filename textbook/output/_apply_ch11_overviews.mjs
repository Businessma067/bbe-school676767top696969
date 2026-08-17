import fs from "node:fs";
import katex from "katex";
import { toSource } from "./_ch11_textcmd_lib.mjs";
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

const spansOf = (value) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) spans.push({ kind: "display", body: m[1] });
  const withoutDisplays = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(withoutDisplays))) spans.push({ kind: "inline", body: m[1] });
  return spans;
};

// The chapter's tactical explanations write thousands as plain commas inside math,
// so keep the overviews on the same convention.
const plainThousands = (value) =>
  value
    .replace(/\$\$[\s\S]*?\$\$/g, (m) => m.replace(/\{,\}/g, ","))
    .replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, (m) => m.replace(/\{,\}/g, ","));

const problems = [];
const edits = [];

for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const outPath = `textbook/output/_ch11_ov_out_${b}.json`;
  if (!fs.existsSync(outPath)) {
    problems.push(`batch ${b}: missing output`);
    continue;
  }
  const output = JSON.parse(fs.readFileSync(outPath, "utf8"));
  if (output.length !== input.length) {
    problems.push(`batch ${b}: ${output.length} entries vs ${input.length}`);
  }

  input.forEach((item, i) => {
    const out = output[i];
    const tag = item.caseId;
    if (!out || out.id !== item.id) {
      problems.push(`${tag}: missing or mismatched entry`);
      return;
    }
    const text = plainThousands(out.text);
    if (typeof text !== "string" || !text.trim()) {
      problems.push(`${tag}: empty text`);
      return;
    }
    if (text.length < item.min_chars) {
      problems.push(`${tag}: shortened ${item.min_chars} -> ${text.length}`);
    }
    // Every figure from the old overview must survive the reformat.
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
    const before = numbers(item.text);
    const after = numbers(text);
    const missing = [...before].filter((n) => !after.has(n));
    if (missing.length) problems.push(`${tag}: numbers dropped -> ${missing.slice(0, 6).join(", ")}`);

    const displays = (text.match(/\$\$/g) ?? []).length;
    if (displays === 0) problems.push(`${tag}: no display blocks`);
    if (displays % 2 !== 0) problems.push(`${tag}: unbalanced $$ delimiters`);

    for (const span of spansOf(text)) {
      if (/\\\$/.test(span.body)) {
        problems.push(`${tag}: currency inside math -> ${span.body.slice(0, 60)}`);
      }
      if (span.kind === "display" && hasProseWords(span.body)) {
        problems.push(`${tag}: prose inside display -> ${span.body.slice(0, 60)}`);
      }
      if (span.kind === "inline") {
        if (!looksLikeMathInner(span.body)) {
          problems.push(`${tag}: inline span renders as text -> ${span.body.slice(0, 60)}`);
        }
        if (span.body.trim().length > 48) {
          problems.push(`${tag}: long inline equation -> ${span.body.slice(0, 60)}`);
        }
      }
      try {
        katex.renderToString(span.body, {
          throwOnError: true,
          strict: "ignore",
          displayMode: span.kind === "display",
        });
      } catch (e) {
        problems.push(`${tag}: KaTeX ${span.kind} -> ${e.message.slice(0, 70)}`);
      }
    }

    // Unmarked math lines print in the prose font next to KaTeX and look broken.
    for (const line of text.split("\n")) {
      const t = line.trim();
      if (!t || t.includes("$") || t.startsWith("**")) continue;
      if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(t)) {
        problems.push(`${tag}: unmarked math line -> ${t.slice(0, 60)}`);
      }
    }
    if (/\\\\[a-zA-Z]/.test(text)) problems.push(`${tag}: over-escaped LaTeX`);

    edits.push({ item, text });
  });
}

console.log(`checked: ${edits.length}, problems: ${problems.length}`);
for (const p of problems.slice(0, 40)) console.log(`  - ${p}`);
if (problems.length > 40) console.log(`  ... +${problems.length - 40} more`);
if (problems.length) process.exit(1);

const FILE = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(FILE, "utf8");
for (const { item, text } of edits) {
  const before = toSource(item.text);
  const after = toSource(text);
  if (src.split(before).length - 1 !== 1) {
    console.log(`FAILED: overview not unique for ${item.caseId}`);
    process.exit(1);
  }
  src = src.replace(before, () => after);
}
fs.writeFileSync(FILE, src);
console.log(`applied ${edits.length} overviews`);
