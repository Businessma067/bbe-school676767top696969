import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const files = ["51_60.json", "61_70.json", "71_80.json", "81_90.json", "91_97.json"];
const letters = "ABCDE";
let bad = 0;
for (const f of files) {
  const raw = fs.readFileSync(path.join(__dirname, f), "utf8");
  if (!raw.endsWith("\n") || raw.endsWith("]\n\n")) {
    if (!raw.endsWith("]\n")) {
      console.log("newline?", f, JSON.stringify(raw.slice(-4)));
      bad++;
    }
  }
  const arr = JSON.parse(raw);
  for (const t of arr) {
    if (t.tactical_explanations.length !== 5) {
      console.log(t.id, "not 5 letters");
      bad++;
    }
    const ov = t.solution_overview || "";
    if (!ov.includes("**Part 1") || !ov.includes("**Part 2") || !ov.includes("**Part 3")) {
      console.log(t.id, "overview missing Part headings");
      bad++;
    }
    t.tactical_explanations.forEach((s, i) => {
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${letters[i]}.** → ${want}`;
      if (!s.startsWith(head)) {
        console.log(t.id, letters[i], "header", s.slice(0, 40));
        bad++;
      }
      if (!s.trimEnd().endsWith(`so the statement is ${want}.`)) {
        console.log(t.id, letters[i], "closer", s.slice(-60));
        bad++;
      }
      if (s.includes("—") || s.includes("–")) {
        console.log(t.id, letters[i], "dash");
        bad++;
      }
      if (s.includes("${")) {
        console.log(t.id, letters[i], "${");
        bad++;
      }
      if (/\bwait\b/i.test(s)) {
        console.log(t.id, letters[i], "wait");
        bad++;
      }
      const n = words(s);
      if (n < 120 || n > 700 || (n > 200 && n < 300)) {
        console.log(t.id, letters[i], "band", n);
        bad++;
      }
    });
  }
}
console.log(bad === 0 ? "OK" : "BAD " + bad);
