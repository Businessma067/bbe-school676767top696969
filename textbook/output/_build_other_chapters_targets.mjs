import fs from "node:fs";
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";
import { STYLES, literals } from "./_literals.mjs";

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

export function rawChunks(value) {
  const out = [];
  const withoutDisplays = value.replace(/\$\$([\s\S]*?)\$\$/g, (whole, body) => {
    if (hasProseWords(body)) out.push(body.trim());
    return " ";
  });
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  let m;
  while ((m = inlineRe.exec(withoutDisplays))) {
    if (/\\[a-zA-Z]+/.test(m[1]) && !looksLikeMathInner(m[1])) out.push(m[1].trim());
  }
  return out;
}

const FILES = [
  { path: "src/data/math-ch1-logic.ts", chapter: 1 },
  { path: "src/data/math-ch5-linear-equations.ts", chapter: 5 },
  { path: "src/data/math-ch8-power-functions.ts", chapter: 8 },
  { path: "src/data/math-cases-ch13-binomial.json", chapter: 13 },
];

const items = [];
const skipped = [];

for (const file of FILES) {
  const src = fs.readFileSync(file.path, "utf8");
  for (const lit of literals(src)) {
    const chunks = rawChunks(lit.value);
    if (!chunks.length) continue;
    if (STYLES[lit.style].toSource(lit.value) !== lit.source) {
      skipped.push(`${file.path}: round-trip failed for ${lit.style} literal at ${lit.index}`);
      continue;
    }
    if (src.split(lit.source).length - 1 !== 1) {
      skipped.push(`${file.path}: literal is not unique at ${lit.index}`);
      continue;
    }
    const before = src.slice(0, lit.index);
    const caseId =
      [...before.matchAll(/case_id"?:\s*[`"']([^`"']+)[`"']/g)].at(-1)?.[1] ?? "unknown";
    items.push({
      file: file.path,
      style: lit.style,
      chapter: file.chapter,
      caseId,
      letter: lit.value.match(/^\*\*([A-E])[.)]/)?.[1] ?? null,
      rawChunks: chunks,
      min_chars: lit.value.length,
      text: lit.value,
    });
  }
}

console.log(`strings to rewrite: ${items.length}`);
console.log(`raw chunks: ${items.reduce((n, x) => n + x.rawChunks.length, 0)}`);
const perChapter = {};
for (const x of items) {
  perChapter[x.chapter] = perChapter[x.chapter] ?? { strings: 0, chunks: 0 };
  perChapter[x.chapter].strings += 1;
  perChapter[x.chapter].chunks += x.rawChunks.length;
}
for (const [ch, v] of Object.entries(perChapter)) {
  console.log(`  ch${ch}: ${v.strings} strings, ${v.chunks} chunks`);
}
for (const s of skipped) console.log(`  SKIPPED ${s}`);

const groups = { a: [1, 13], b: [5], c: [8] };
for (const [name, chapters] of Object.entries(groups)) {
  const slice = items.filter((x) => chapters.includes(x.chapter));
  const out = `textbook/output/_other_batch_${name}.json`;
  fs.writeFileSync(out, JSON.stringify(slice, null, 2));
  console.log(`${out}: ${slice.length} strings (ch ${chapters.join(", ")})`);
}
