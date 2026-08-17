import fs from "node:fs";

/** Mirrors FlashcardMath.hasProseWords: KaTeX is skipped when math holds prose. */
const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

const files = process.argv.slice(2);

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const spans = [];

  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(src))) spans.push({ kind: "display", value: m[1] });

  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(src))) spans.push({ kind: "inline", value: m[1] });

  const broken = spans.filter((s) => hasProseWords(s.value.replace(/\\\\/g, "\\")));
  console.log(`\n=== ${file}`);
  console.log(`spans: ${spans.length}, prose-blocked: ${broken.length}`);
  for (const b of broken.slice(0, 60)) {
    console.log(`  [${b.kind}] ${b.value.trim().slice(0, 110)}`);
  }
  if (broken.length > 60) console.log(`  ... +${broken.length - 60} more`);
}
