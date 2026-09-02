import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const DIR = "textbook/output/_ch8_v3";
const before = JSON.parse(fs.readFileSync(path.join(DIR, "_expl_len_before.json"), "utf8"));
const target = process.argv[2] || "11_20.json";
const arr = JSON.parse(fs.readFileSync(path.join(DIR, target), "utf8"));
const letters = "ABCDE";
const problems = [];
let short = 0;
const lens = [];

for (const t of arr) {
  t.tactical_explanations.forEach((e, i) => {
    const want = t.answer_key[i] ? "True" : "False";
    const L = e.length;
    lens.push(L);
    if (L < before[t.id][i]) {
      short += 1;
      problems.push(`${t.id}${letters[i]} shorter ${before[t.id][i]}->${L}`);
    }
    if (!e.startsWith(`**${letters[i]}.** → ${want}`)) problems.push(`${t.id}${letters[i]} opener`);
    if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${t.id}${letters[i]} closer`);
    if (/From Part|as shown above|Extended context/.test(e)) problems.push(`${t.id}${letters[i]} crossref`);
    if (e.includes("—") || e.includes("–") || e.includes("${")) problems.push(`${t.id}${letters[i]} dash/interp`);
    let p = 0;
    while (p < e.length) {
      const s = e.indexOf("$$", p);
      if (s < 0) break;
      const end = e.indexOf("$$", s + 2);
      if (end < 0) {
        problems.push(`${t.id}${letters[i]} unclosed`);
        break;
      }
      try {
        katex.renderToString(e.slice(s + 2, end), { throwOnError: true, displayMode: true });
      } catch (err) {
        problems.push(`${t.id}${letters[i]} katex ${String(err.message).slice(0, 70)}`);
      }
      p = end + 2;
    }
  });
}

console.log(
  target,
  "tasks",
  arr.length,
  "mean",
  Math.round(lens.reduce((a, b) => a + b, 0) / lens.length),
  "min",
  Math.min(...lens),
  "max",
  Math.max(...lens),
  "shortened",
  short,
  "problems",
  problems.length,
);
problems.slice(0, 25).forEach((p) => console.log(" ", p));
