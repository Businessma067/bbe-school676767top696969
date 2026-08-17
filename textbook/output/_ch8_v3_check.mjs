import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import katex from "katex";

const DIR = "textbook/output/_ch8_v3";
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

function checkTask(t, problems) {
  const id = t.id;
  if (!Array.isArray(t.statements) || t.statements.length !== 5) problems.push(`${id}: statements`);
  if (!Array.isArray(t.answer_key) || t.answer_key.length !== 5) problems.push(`${id}: keys`);
  if (!Array.isArray(t.tactical_explanations) || t.tactical_explanations.length !== 5) problems.push(`${id}: expl`);
  const letters = "ABCDE";
  (t.tactical_explanations || []).forEach((e, i) => {
    const want = t.answer_key[i] ? "True" : "False";
    if (!e.startsWith(`**${letters[i]}.** → ${want}`)) problems.push(`${id}${letters[i]}: opener`);
    if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${id}${letters[i]}: closer`);
    if (e.includes("Extended context check")) problems.push(`${id}${letters[i]}: extended`);
    if (e.includes("${")) problems.push(`${id}${letters[i]}: interpolation`);
    if (e.includes("—") || e.includes("–")) problems.push(`${id}${letters[i]}: dash`);
    const text = e;
    let p = 0;
    while (p < text.length) {
      const s = text.indexOf("$$", p);
      if (s < 0) break;
      const end = text.indexOf("$$", s + 2);
      if (end < 0) {
        problems.push(`${id}${letters[i]}: unclosed $$`);
        break;
      }
      const body = text.slice(s + 2, end);
      try {
        katex.renderToString(body, { throwOnError: true, displayMode: true });
      } catch (err) {
        problems.push(`${id}${letters[i]}: katex ${String(err.message).slice(0, 70)}`);
      }
      p = end + 2;
    }
  });
  if (!String(t.context).includes("Evaluate each statement")) problems.push(`${id}: stem closer`);
}

const all = [];
const problems = [];
for (const f of files) {
  const p = path.join(DIR, f);
  if (!fs.existsSync(p)) {
    problems.push(`missing ${f}`);
    continue;
  }
  let arr;
  try {
    arr = JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    problems.push(`parse ${f}: ${e.message}`);
    continue;
  }
  if (!Array.isArray(arr)) {
    problems.push(`${f} not array`);
    continue;
  }
  console.log(f, arr.length);
  arr.forEach((t) => {
    all.push(t);
    checkTask(t, problems);
  });
}

const ids = all.map((t) => t.id);
const expect = [];
for (let n = 11; n <= 97; n++) expect.push(`math-8-${n}`);
const missing = expect.filter((id) => !ids.includes(id));
const extra = ids.filter((id) => !expect.includes(id));
if (missing.length) problems.push(`missing ids ${missing.join(",")}`);
if (extra.length) problems.push(`extra ids ${extra.join(",")}`);

console.log("tasks", all.length, "problems", problems.length);
problems.slice(0, 40).forEach((p) => console.log(" ", p));
