import fs from "fs";

const files = ["51_60.json", "61_70.json", "71_80.json", "81_90.json", "91_97.json"];
const letters = ["A", "B", "C", "D", "E"];
const bans = ["the overview already", "Part 1", "Part 2", "Part 3", "\u2014", "\u2013", "${"];
let n = 0;
let L = 0;

for (const f of files) {
  const raw = fs.readFileSync(new URL(f, import.meta.url), "utf8");
  if (!raw.endsWith("\n")) throw new Error("no nl " + f);
  const arr = JSON.parse(raw);
  n += arr.length;
  for (const t of arr) {
    if (t.tactical_explanations.length !== 5) throw new Error("letters " + t.id);
    L += 5;
    t.tactical_explanations.forEach((s, i) => {
      const want = `**${letters[i]}.** → ${t.answer_key[i] ? "True" : "False"}`;
      if (s.split("\n")[0] !== want) throw new Error("head " + t.id + " " + s.split("\n")[0]);
      const close = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
      if (!s.includes(close)) throw new Error("close " + t.id + " " + letters[i]);
    });
    const blob = t.solution_overview + "\n" + t.tactical_explanations.join("\n");
    for (const ban of bans) {
      if (blob.includes(ban)) throw new Error("ban " + ban + " " + t.id);
    }
  }
}

console.log("tasks", n, "letters", L);
