import fs from "node:fs";

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const spans = [];
const displayRe = /\$\$([\s\S]*?)\$\$/g;
let m;
while ((m = displayRe.exec(src))) spans.push({ kind: "display", value: m[1] });
const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
while ((m = inlineRe.exec(src))) spans.push({ kind: "inline", value: m[1] });

const broken = spans
  .map((s) => ({ ...s, value: s.value.replace(/\\\\/g, "\\").trim() }))
  .filter((s) => hasProseWords(s.value));

const buckets = new Map();
for (const b of broken) {
  const phrases = [...b.value.matchAll(/\\text\{([^}]*)\}/g)].map((x) => x[1].trim());
  const key = phrases.length ? phrases.join(" | ") : `NO-TEXT-CMD :: ${b.value.slice(0, 60)}`;
  const bucket = buckets.get(key) ?? { count: 0, kinds: new Set(), sample: b.value };
  bucket.count += 1;
  bucket.kinds.add(b.kind);
  buckets.set(key, bucket);
}

const rows = [...buckets.entries()].sort((a, b) => b[1].count - a[1].count);
console.log(`broken spans: ${broken.length}, distinct phrase groups: ${rows.length}\n`);
for (const [key, v] of rows) {
  console.log(`${String(v.count).padStart(3)}x [${[...v.kinds].join(",")}] ${key}`);
  console.log(`      e.g. ${v.sample.slice(0, 120)}`);
}
