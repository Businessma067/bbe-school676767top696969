import fs from "node:fs";
import katex from "katex";
import { STYLES } from "./_literals.mjs";
import { rawChunks } from "./_build_other_chapters_targets.mjs";

const mathSpans = (value) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) spans.push({ kind: "display", body: m[1] });
  const withoutDisplays = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(withoutDisplays))) spans.push({ kind: "inline", body: m[1] });
  return spans;
};

const problems = [];
const edits = [];

for (const name of ["a", "b", "c"]) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_other_batch_${name}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_other_out_${name}.json`, "utf8"));
  if (output.length !== input.length) {
    problems.push(`batch ${name}: ${output.length} entries vs ${input.length}`);
  }
  for (const entry of output) {
    const item = input[entry.i];
    if (!item) {
      problems.push(`batch ${name}: index ${entry.i} out of range`);
      continue;
    }
    const tag = `${item.caseId}${item.letter ? ` ${item.letter}` : ""}`;
    const text = entry.text;
    if (typeof text !== "string" || !text.trim()) {
      problems.push(`${tag}: empty text`);
      continue;
    }
    if (text.length < item.min_chars) {
      problems.push(`${tag}: shortened ${item.min_chars} -> ${text.length}`);
    }
    if (text.split("\n")[0] !== item.text.split("\n")[0]) {
      problems.push(`${tag}: first line changed`);
    }
    const left = rawChunks(text);
    if (left.length) problems.push(`${tag}: raw LaTeX remains -> ${left[0].slice(0, 90)}`);
    for (const span of mathSpans(text)) {
      try {
        katex.renderToString(span.body, {
          throwOnError: true,
          strict: "ignore",
          displayMode: span.kind === "display",
        });
      } catch (e) {
        problems.push(`${tag}: KaTeX ${span.kind} error -> ${e.message.slice(0, 80)}`);
      }
    }
    if (/\\\\[a-zA-Z]/.test(text)) problems.push(`${tag}: over-escaped LaTeX`);
    edits.push({ item, text });
  }
}

console.log(`checked: ${edits.length} strings, problems: ${problems.length}`);
for (const p of problems.slice(0, 30)) console.log(`  - ${p}`);
if (problems.length) process.exit(1);

const byFile = new Map();
for (const edit of edits) {
  byFile.set(edit.item.file, [...(byFile.get(edit.item.file) ?? []), edit]);
}

for (const [file, fileEdits] of byFile) {
  let src = fs.readFileSync(file, "utf8");
  for (const { item, text } of fileEdits) {
    const before = STYLES[item.style].toSource(item.text);
    const after = STYLES[item.style].toSource(text);
    if (src.split(before).length - 1 !== 1) {
      console.log(`FAILED ${file}: source literal not unique for ${item.caseId}`);
      process.exit(1);
    }
    src = src.replace(before, () => after);
  }
  fs.writeFileSync(file, src);
  console.log(`${file}: applied ${fileEdits.length} strings`);
}
