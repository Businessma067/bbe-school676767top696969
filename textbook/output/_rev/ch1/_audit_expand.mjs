import fs from "node:fs";
import { wordCount } from "./_expand_lib.mjs";

const files = [
  "13_22.json",
  "18_27.json",
  "19_07.json",
  "21_08.json",
  "23_30.json",
  "28_02.json",
];

const dir = new URL("./", import.meta.url);
let tasks = 0;
let letters = 0;
const rows = [];
for (const name of files) {
  const arr = JSON.parse(fs.readFileSync(new URL(name, dir), "utf8"));
  for (const t of arr) {
    tasks++;
    if (!/\*\*Part 1/.test(t.solution_overview) || !/\*\*Part 2/.test(t.solution_overview) || !/\*\*Part 3/.test(t.solution_overview)) {
      console.log("MISSING PARTS", t.id);
    }
    const ws = t.tactical_explanations.map(wordCount);
    letters += 5;
    for (let i = 0; i < 5; i++) {
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${"ABCDE"[i]}.** → ${want}`;
      const body = t.tactical_explanations[i];
      if (!body.startsWith(head)) console.log("HEADER", t.id, "ABCDE"[i]);
      const close = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
      if (!body.trimEnd().endsWith(close)) console.log("CLOSER", t.id, "ABCDE"[i]);
      if (body.includes("${") || /[\u2013\u2014]/.test(body)) console.log("DASH", t.id, "ABCDE"[i]);
    }
    rows.push({
      file: name,
      id: t.id,
      words: ws,
      min: Math.min(...ws),
      max: Math.max(...ws),
      vary: Math.max(...ws) - Math.min(...ws),
    });
  }
}

console.log("tasks", tasks, "letters", letters);
console.log("min<120", rows.filter((r) => r.min < 120).length);
console.log("max>=250", rows.filter((r) => r.max >= 250).length);
console.log("max>=300", rows.filter((r) => r.max >= 300).length);
console.log("vary<40", rows.filter((r) => r.vary < 40).length);
console.log("--- per file ---");
for (const name of files) {
  const rs = rows.filter((r) => r.file === name);
  console.log(
    name,
    "tasks",
    rs.length,
    "min",
    Math.min(...rs.map((r) => r.min)),
    "max",
    Math.max(...rs.map((r) => r.max)),
    "cloneish",
    rs.filter((r) => r.vary < 40).length
  );
}
