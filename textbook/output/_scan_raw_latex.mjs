import fs from "node:fs";
import { toValue } from "./_ch11_textcmd_lib.mjs";
// Rule extracted verbatim from src/components/FlashcardMath.tsx, so the checker
// can never drift from what the practice UI actually renders.
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

function rawChunks(value) {
  const out = [];
  const withoutDisplays = value.replace(/\$\$([\s\S]*?)\$\$/g, (whole, body) => {
    if (hasProseWords(body)) out.push({ kind: "display", body: body.trim() });
    return " ";
  });
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  let m;
  while ((m = inlineRe.exec(withoutDisplays))) {
    const body = m[1];
    if (/\\[a-zA-Z]+/.test(body) && !looksLikeMathInner(body)) {
      out.push({ kind: "inline", body: body.trim() });
    }
  }
  return out;
}

let total = 0;
for (const file of process.argv.slice(2)) {
  const chunks = rawChunks(toValue(fs.readFileSync(file, "utf8")));
  total += chunks.length;
  console.log(`${String(chunks.length).padStart(3)}  ${file}`);
  for (const c of chunks.slice(0, 12)) console.log(`       [${c.kind}] ${c.body.slice(0, 120)}`);
  if (chunks.length > 12) console.log(`       ... +${chunks.length - 12} more`);
}
console.log(`\ntotal raw LaTeX chunks: ${total}`);
process.exit(total ? 1 : 0);
