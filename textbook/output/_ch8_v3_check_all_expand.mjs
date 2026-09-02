import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const DIR = "textbook/output/_ch8_v3";
const before = JSON.parse(fs.readFileSync(path.join(DIR, "_expl_len_before.json"), "utf8"));
const files = [
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
  "61_70.json",
  "71_80.json",
  "81_90.json",
  "91_97.json",
];
const letters = "ABCDE";
const problems = [];
let short = 0;
const lens = [];
let qchain = 0;

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
  for (const t of arr) {
    t.tactical_explanations.forEach((e, i) => {
      const want = t.answer_key[i] ? "True" : "False";
      const L = e.length;
      lens.push(L);
      if (L < before[t.id][i]) {
        short += 1;
        problems.push(`${t.id}${letters[i]} shorter`);
      }
      if (!e.startsWith(`**${letters[i]}.** → ${want}`)) problems.push(`${t.id}${letters[i]} opener`);
      if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${t.id}${letters[i]} closer`);
      if (/From Part|as shown above|Extended context/.test(e)) problems.push(`${t.id}${letters[i]} crossref`);
      if (e.includes("—") || e.includes("–") || e.includes("${")) problems.push(`${t.id}${letters[i]} dash`);
      if ((e.match(/\\qquad/g) || []).length >= 2) qchain += 1;
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
}

const old = Object.values(before).flat();
console.log(
  "letters",
  lens.length,
  "old mean",
  Math.round(old.reduce((a, b) => a + b, 0) / old.length),
  "new mean",
  Math.round(lens.reduce((a, b) => a + b, 0) / lens.length),
  "new min",
  Math.min(...lens),
  "new max",
  Math.max(...lens),
  "shortened",
  short,
  "multi-qquad letters",
  qchain,
  "problems",
  problems.length,
);
problems.slice(0, 30).forEach((p) => console.log(" ", p));
