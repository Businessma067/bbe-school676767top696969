import fs from "node:fs";
import katex from "katex";
import { listField, scalarField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");

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

const counts = {};
const examples = {};
const note = (kind, detail) => {
  counts[kind] = (counts[kind] ?? 0) + 1;
  if (!examples[kind]) examples[kind] = detail;
};

let fields = 0;
let spans = 0;

const check = (label, value) => {
  fields += 1;
  for (const span of spansOf(value)) {
    spans += 1;
    if (/\\\$/.test(span.body)) note("currency inside math", `${label}: ${span.body.slice(0, 70)}`);
    if (/\\text\s*\{[^}]*[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(span.body)) {
      note("prose inside \\text", `${label}: ${span.body.slice(0, 70)}`);
    }
    if (span.kind === "display" && /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(span.body)) {
      note("prose inside display", `${label}: ${span.body.slice(0, 70)}`);
    }
    if (span.kind === "inline" && !looksLikeMathInner(span.body)) {
      note("inline span shown as raw text", `${label}: ${span.body.slice(0, 70)}`);
    }
    if (span.kind === "inline" && span.body.trim().length > 60) {
      note("long inline equation", `${label}: ${span.body.slice(0, 70)}`);
    }
    try {
      katex.renderToString(span.body, {
        throwOnError: true,
        strict: "ignore",
        displayMode: span.kind === "display",
      });
    } catch (e) {
      note(`KaTeX error (${span.kind})`, `${label}: ${e.message.slice(0, 80)}`);
    }
  }
  for (const line of value.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("**")) continue;
    if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(stripMath(t))) {
      note("unmarked math line", `${label}: ${t.slice(0, 70)}`);
    }
  }
  if (/\\\\[a-zA-Z]/.test(value)) note("over-escaped LaTeX", `${label}: ${value.slice(0, 70)}`);
  if (/[ÂÃ]|â€/.test(value)) note("encoding damage", `${label}: ${value.slice(0, 70)}`);
};

for (const task of splitTasks(src)) {
  const ov = scalarField(task.body, "solution_overview");
  if (ov) check(`${task.id} overview`, toValue(ov));
  listField(task.body, "tactical_explanations").forEach((item, i) => {
    check(`${task.id} expl[${i}]`, toValue(item));
  });
}

console.log(`fields checked: ${fields}, math spans: ${spans}`);
const kinds = Object.keys(counts);
if (!kinds.length) {
  console.log("no problems");
} else {
  for (const kind of kinds) console.log(`  ${counts[kind]} x ${kind}\n      e.g. ${examples[kind]}`);
}
