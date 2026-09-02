import fs from "fs";
import path from "path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";

function words(s) {
  return s
    .replace(/^\*\*[A-E]\)[\s\S]*?\*\*\s+\((true|false)\)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function applyMidPatches(patches) {
  const byFile = new Map();
  const applied = [];
  for (const p of patches) {
    const file = p.file.replace(/\\/g, "/");
    if (!byFile.has(file)) {
      byFile.set(file, JSON.parse(fs.readFileSync(path.join(root, file), "utf8")));
    }
    const arr = byFile.get(file);
    const t = arr.find((x) => x.id === p.id);
    if (!t) throw new Error("missing " + p.id);
    const old = t.tactical_explanations[p.idx];
    const header = old.split("\n")[0];
    if (!header.startsWith("**" + p.letter + ")")) {
      throw new Error("header mismatch " + p.id + " " + p.letter + " got " + header);
    }
    const body = p.body.trim();
    const want = p.key ? "so the statement is True." : "so the statement is False.";
    if (!body.includes(want)) throw new Error("missing closer " + p.id + " " + p.letter);
    if (body.includes("\u2014") || body.includes("\u2013")) {
      throw new Error("dash " + p.id + " " + p.letter);
    }
    if (body.includes("${")) throw new Error("interpol " + p.id + " " + p.letter);
    const next = header + "\n\n" + body;
    t.tactical_explanations[p.idx] = next;
    applied.push({
      id: p.id,
      letter: p.letter,
      words: words(next),
      key: p.key,
    });
  }
  for (const [file, arr] of byFile) {
    fs.writeFileSync(path.join(root, file), JSON.stringify(arr, null, 2) + "\n");
  }
  return applied;
}

if (process.argv[1] && process.argv[1].includes("_apply_mid_ch5")) {
  console.log("import applyMidPatches");
}
