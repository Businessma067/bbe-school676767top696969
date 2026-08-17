import fs from "node:fs";
import katex from "katex";
import { blockedSpans, hasProseWords } from "./_ch11_textcmd_lib.mjs";

const problems = [];
let checked = 0;

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

for (let b = 1; b <= 4; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_textcmd_batch_${b}.json`, "utf8"));
  const outPath = `textbook/output/_ch11_textcmd_out_${b}.json`;
  if (!fs.existsSync(outPath)) {
    problems.push(`batch ${b}: missing ${outPath}`);
    continue;
  }
  const output = JSON.parse(fs.readFileSync(outPath, "utf8"));
  if (output.length !== input.length) {
    problems.push(`batch ${b}: ${output.length} entries vs ${input.length} expected`);
  }

  input.forEach((item, i) => {
    const out = output[i];
    const tag = `${item.id}/${item.kind}${item.letter ? ` ${item.letter}` : ""}`;
    if (!out) {
      problems.push(`${tag}: missing output entry`);
      return;
    }
    checked += 1;
    if (out.id !== item.id || out.kind !== item.kind || (out.index ?? null) !== (item.index ?? null)) {
      problems.push(`${tag}: identity mismatch (${out.id}/${out.kind}/${out.index})`);
    }
    const text = out.text;
    if (typeof text !== "string" || !text.trim()) {
      problems.push(`${tag}: empty text`);
      return;
    }
    if (text.length < item.min_chars) {
      problems.push(`${tag}: shortened ${item.min_chars} -> ${text.length}`);
    }
    if (item.kind === "tactical_explanations") {
      const before = item.text.split("\n")[0];
      const after = text.split("\n")[0];
      if (before !== after) problems.push(`${tag}: header changed\n  - ${before}\n  + ${after}`);
    }
    const stillBlocked = blockedSpans(text);
    if (stillBlocked.length) {
      problems.push(`${tag}: prose still inside math -> ${stillBlocked[0].slice(0, 90)}`);
    }
    // The header repeats the live statement verbatim, so its currency style is fixed.
    const body = item.kind === "tactical_explanations" ? text.split("\n").slice(1).join("\n") : text;
    for (const span of mathSpans(body)) {
      if (hasProseWords(span.body) && /\\(?:text|operatorname)\{/.test(span.body)) {
        problems.push(`${tag}: prose command in ${span.kind} span -> ${span.body.slice(0, 80)}`);
      }
      if (/\\\$/.test(span.body)) {
        problems.push(`${tag}: escaped currency inside math -> ${span.body.slice(0, 80)}`);
      }
      try {
        katex.renderToString(span.body, { throwOnError: true, strict: "ignore" });
      } catch (e) {
        problems.push(`${tag}: KaTeX error in ${span.kind} -> ${span.body.slice(0, 80)} :: ${e.message.slice(0, 90)}`);
      }
    }
    if (/\\\\[a-zA-Z]/.test(text)) problems.push(`${tag}: over-escaped LaTeX command`);
    if (/(?:Trap:|from Part [A-E]|as shown above)/i.test(text)) {
      problems.push(`${tag}: scaffolding language`);
    }
  });
}

console.log(`checked items: ${checked}`);
console.log(`problems: ${problems.length}`);
for (const p of problems.slice(0, 40)) console.log(`  - ${p}`);
if (problems.length > 40) console.log(`  ... +${problems.length - 40} more`);
process.exit(problems.length ? 1 : 0);
