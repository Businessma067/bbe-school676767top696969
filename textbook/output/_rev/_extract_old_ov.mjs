import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const FILES = {
  ch1: "src/data/math-ch1-logic.ts",
  ch5: "src/data/math-ch5-linear-equations.ts",
  ch8: "src/data/math-ch8-power-functions.ts",
  ch11: "src/data/math-ch11-financial.ts",
};

function unescapeTpl(body) {
  return body.replace(/\\`/g, "`").replace(/\\\\/g, "\\");
}

function extractField(src, start, field) {
  const from = src.indexOf(field + ":", start);
  const rest = src.slice(start + 8);
  const nextRel = rest.search(/\n\s+id:\s*[`"]math-/);
  const nextTask = nextRel >= 0 ? start + 8 + nextRel : -1;
  if (from < 0 || (nextTask > 0 && from > nextTask)) return null;
  const after = src.slice(from + field.length + 1).trimStart();
  if (after[0] === "`") {
    let i = 1;
    let body = "";
    while (i < after.length) {
      if (after[i] === "\\" && i + 1 < after.length) {
        body += after[i] + after[i + 1];
        i += 2;
        continue;
      }
      if (after[i] === "`") break;
      body += after[i];
      i++;
    }
    return unescapeTpl(body);
  }
  if (after[0] === '"') {
    let i = 1;
    let body = "";
    while (i < after.length) {
      if (after[i] === "\\" && i + 1 < after.length) {
        const n = after[i + 1];
        if (n === "n") body += "\n";
        else if (n === "t") body += "\t";
        else if (n === '"') body += '"';
        else if (n === "\\") body += "\\";
        else body += n;
        i += 2;
        continue;
      }
      if (after[i] === '"') break;
      body += after[i];
      i++;
    }
    return body;
  }
  return null;
}

function extract(src) {
  const out = {};
  const idRe = /id:\s*(?:`([^`]+)`|"([^"]+)")/g;
  let m;
  let ch1dbg = 0;
  while ((m = idRe.exec(src))) {
    const id = m[1] || m[2];
    if (!id || !id.startsWith("math-")) continue;
    const ov = extractField(src, m.index, "solution_overview");
    if (ch1dbg < 3 && id.startsWith("math-1-")) {
      const from = src.indexOf("solution_overview:", m.index);
      const after = from >= 0 ? src.slice(from, from + 40) : "NO";
      console.log("try", id, "from", from, JSON.stringify(after));
      ch1dbg++;
    }
    if (ov) out[id] = ov;
  }
  return out;
}

const all = {};
for (const [ch, file] of Object.entries(FILES)) {
  const src = execSync(`git show 96cf3e4:${file}`, { encoding: "utf8", maxBuffer: 80e6 });
  const map = extract(src);
  if (ch === "ch1") {
    const ids = [...src.matchAll(/id:\s*(?:`([^`]+)`|"([^"]+)")/g)].map((x) => x[1] || x[2]).filter((x) => x && x.startsWith("math-"));
    console.log("ch1 math ids", ids.length, ids.slice(0, 3));
    const t = src.indexOf('id: "math-1-1"');
    console.log("idx math-1-1", t, "ov after", t >= 0 ? src.indexOf("solution_overview", t) : -1);
    if (t >= 0) console.log("snippet", JSON.stringify(src.slice(t, t + 80)));
  }
  if (ch === "ch1") {
    const missing = [];
    for (let i = 1; i <= 108; i++) {
      const id = "math-1-" + i;
      if (!map[id]) missing.push(id);
    }
    console.log("ch1 missing", missing.length, missing.join(","));
  }
  all[ch] = map;
  const first = Object.keys(map)[0];
  console.log(ch, Object.keys(map).length, first, first && map[first].includes("Part 1") ? "has Part 1" : "no Part 1");
}
fs.writeFileSync("textbook/output/_rev/_old_overviews.json", JSON.stringify(all, null, 2) + "\n");
