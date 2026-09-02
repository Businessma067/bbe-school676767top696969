import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const patchDir = path.join(root, "textbook/output/_rev/_mid_patches");

function loadPatches() {
  const out = {};
  for (const name of fs.readdirSync(patchDir).filter((x) => x.endsWith(".json"))) {
    const obj = JSON.parse(fs.readFileSync(path.join(patchDir, name), "utf8"));
    Object.assign(out, obj);
  }
  return out;
}

function wordCount(body) {
  return body.trim().split(/\s+/).filter(Boolean).length;
}

function parseJsonFile(abs) {
  const raw = fs.readFileSync(abs, "utf8");
  try {
    return JSON.parse(raw);
  } catch {
    return JSON.parse(raw.slice(0, raw.lastIndexOf("]") + 1));
  }
}

function applyToFile(file, items, patches) {
  const abs = path.join(root, file.replace(/\\/g, "/"));
  const arr = parseJsonFile(abs);
  let n = 0;
  for (const it of items) {
    const key = `${it.id}|${it.letter}`;
    const body = patches[key];
    if (!body) continue;
    const t = arr.find((x) => x.id === it.id);
    if (!t) throw new Error("missing task " + it.id + " in " + file);
    const cur = t.tactical_explanations[it.idx];
    const header = cur.split("\n")[0];
    const text = body.replace(/^\*\*[^\n]*\n+/, "").trim();
    t.tactical_explanations[it.idx] = header + "\n\n" + text;
    n++;
  }
  fs.writeFileSync(abs, JSON.stringify(arr, null, 2) + "\n");
  return n;
}

const patches = loadPatches();
const keys = Object.keys(patches);
console.log("patches loaded", keys.length);

let s = fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch11.json"), "utf8");
const mid11 = JSON.parse(s.slice(0, s.lastIndexOf("]") + 1));
let s8 = fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch8.json"), "utf8");
const mid8 = JSON.parse(s8.slice(0, s8.lastIndexOf("]") + 1));
const all = [...mid11, ...mid8];

const byFile = {};
for (const e of all) {
  const f = e.file.replace(/\\/g, "/");
  (byFile[f] ||= []).push(e);
}

let applied = 0;
const missing = [];
const counts = [];
for (const [file, items] of Object.entries(byFile)) {
  applied += applyToFile(file, items, patches);
}
for (const e of all) {
  const key = `${e.id}|${e.letter}`;
  if (!patches[key]) missing.push(key);
  else counts.push({ key, words: wordCount(patches[key].replace(/^\*\*[^\n]+\n+/, "")) });
}

console.log("applied", applied);
console.log("missing", missing.length, missing.join(", "));
const short = counts.filter((c) => c.words < 160);
const mid = counts.filter((c) => c.words >= 160 && c.words < 280);
const long = counts.filter((c) => c.words >= 280);
console.log("word buckets short<160", short.length, "160-279", mid.length, "280+", long.length);
if (short.length) console.log("still short", short.map((c) => c.key + ":" + c.words).join(" | "));
const em = counts.filter((c) => /[\u2013\u2014]|\$\{/.test(patches[c.key]));
if (em.length) console.log("emdash or ${", em.map((c) => c.key).join(", "));
