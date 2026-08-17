import fs from "node:fs";
import katex from "katex";
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";

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

const collectTs = (src) => {
  const backticks = [...src.matchAll(/`((?:[^`\\]|\\[\s\S])*)`/g)].map((m) =>
    m[1].replace(/\\\\/g, "\\").replace(/\\`/g, "`"),
  );
  // Some chapters store content in double-quoted strings instead.
  const quoted = [];
  for (const m of src.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)) {
    try {
      quoted.push(JSON.parse(`"${m[1]}"`));
    } catch {
      /* not a plain string literal */
    }
  }
  return [...backticks, ...quoted];
};

const collectJson = (raw) => {
  const out = [];
  const walk = (node) => {
    if (typeof node === "string") out.push(node);
    else if (Array.isArray(node)) node.forEach(walk);
    else if (node && typeof node === "object") Object.values(node).forEach(walk);
  };
  walk(JSON.parse(raw));
  return out;
};

const files = [
  ["ch1", "src/data/math-ch1-logic.ts", collectTs],
  ["ch5", "src/data/math-ch5-linear-equations.ts", collectTs],
  ["ch8", "src/data/math-ch8-power-functions.ts", collectTs],
  ["ch13", "src/data/math-cases-ch13-binomial.json", collectJson],
];

for (const [label, path, collect] of files) {
  const values = collect(fs.readFileSync(path, "utf8"));
  const counts = {};
  const examples = {};
  const all = {};
  const note = (kind, detail) => {
    counts[kind] = (counts[kind] ?? 0) + 1;
    if (!examples[kind]) examples[kind] = detail;
    (all[kind] ??= []).push(detail);
  };
  let spanCount = 0;

  for (const value of values) {
    if (!value.includes("$")) continue;
    for (const span of spansOf(value)) {
      spanCount += 1;
      if (span.kind === "display" && /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(span.body)) {
        note("prose inside display", span.body.slice(0, 70));
      }
      if (span.kind === "inline" && !looksLikeMathInner(span.body)) {
        note("inline span shown as raw text", span.body.slice(0, 70));
      }
      if (span.kind === "inline" && span.body.trim().length > 60) {
        note("long inline equation", span.body.slice(0, 70));
      }
      try {
        katex.renderToString(span.body, {
          throwOnError: true,
          strict: "ignore",
          displayMode: span.kind === "display",
        });
      } catch (e) {
        note(`KaTeX error (${span.kind})`, e.message.slice(0, 80));
      }
    }
    // Displays span several lines in some chapters, so strip them before reading lines.
    for (const line of stripMath(value).split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("**")) continue;
      if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(t)) note("unmarked math line", t.slice(0, 70));
    }
  }

  console.log(`\n=== ${label}: ${values.length} strings, ${spanCount} math spans`);
  const kinds = Object.keys(counts);
  if (!kinds.length) console.log("  clean");
  for (const kind of kinds) {
    console.log(`  ${counts[kind]} x ${kind}`);
    for (const sample of [...new Set(all[kind])].slice(0, 25)) console.log(`      ${sample}`);
  }
}
