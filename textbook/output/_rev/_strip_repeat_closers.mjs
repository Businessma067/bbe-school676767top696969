import fs from "fs";
import path from "path";

function lastPara(e) {
  const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
  const paras = body.split(/\n\n+/);
  return paras[paras.length - 1].replace(/\s+/g, " ").trim();
}

const files = [];
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    files.push(path.join(dir, f));
  }
}

const counts = new Map();
for (const fp of files) {
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const t of arr) {
    for (const e of t.tactical_explanations) {
      const p = lastPara(e);
      if (p.length < 60) continue;
      counts.set(p, (counts.get(p) || 0) + 1);
    }
  }
}

const drop = new Set([...counts.entries()].filter(([, n]) => n >= 3).map(([p]) => p));
console.log("closer phrases to strip", drop.size);

let stripped = 0;
for (const fp of files) {
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  let changed = false;
  for (const t of arr) {
    t.tactical_explanations = t.tactical_explanations.map((e) => {
      const p = lastPara(e);
      if (!drop.has(p)) return e;
      const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
      const paras = body.split(/\n\n+/);
      if (paras.length < 2) return e;
      const header = e.split("\n")[0];
      const next = header + "\n\n" + paras.slice(0, -1).join("\n\n");
      stripped++;
      changed = true;
      return next;
    });
  }
  if (changed) fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
}
console.log("stripped letters", stripped);
