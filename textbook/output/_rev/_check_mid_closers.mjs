import fs from "fs";
import path from "path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const raw = fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5.json"), "utf8");
const idx = JSON.parse(raw.slice(0, raw.lastIndexOf("]") + 1));

function words(s) {
  return s
    .replace(/^\*\*[A-E]\)[\s\S]*?\*\*\s+\((true|false)\)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

const cache = new Map();
const closers = new Map();
const issues = [];
for (const e of idx) {
  const file = e.file.replace(/\\/g, "/");
  if (!cache.has(file)) {
    cache.set(file, JSON.parse(fs.readFileSync(path.join(root, file), "utf8")));
  }
  const t = cache.get(file).find((x) => x.id === e.id);
  const expl = t.tactical_explanations[e.idx];
  const header = expl.split("\n")[0];
  const wantH = `**${e.letter}) ${e.statement}.**  (${e.key ? "true" : "false"})`;
  // statements in index may have slightly different escaping; check prefix
  if (!header.startsWith("**" + e.letter + ")")) issues.push("bad header start " + e.id + e.letter);
  if (expl.includes("\u2014") || expl.includes("\u2013")) issues.push("dash " + e.id + e.letter);
  if (expl.includes("${")) issues.push("interp " + e.id + e.letter);
  const want = e.key ? "so the statement is True." : "so the statement is False.";
  if (!expl.includes(want)) issues.push("closer " + e.id + e.letter);
  const last = expl.trim().split("\n").filter(Boolean).pop();
  const k = last;
  if (!closers.has(k)) closers.set(k, []);
  closers.get(k).push(e.id + " " + e.letter);
}
const dups = [...closers.entries()].filter(([, v]) => v.length > 1);
console.log("issues", issues.length, issues.slice(0, 20));
console.log("dup closers", dups.length);
for (const [k, v] of dups.slice(0, 15)) console.log(v.join(", "), "=>", k.slice(0, 120));
