import fs from "fs";
import path from "path";

const last = new Map();
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      t.tactical_explanations.forEach((e, i) => {
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const paras = body.split(/\n\n+/);
        const closer = paras[paras.length - 1].replace(/\s+/g, " ").trim();
        if (closer.length < 40) return;
        const k = closer.slice(0, 160);
        if (!last.has(k)) last.set(k, []);
        last.get(k).push(`${t.id}${"ABCDE"[i]}`);
      });
    }
  }
}
const dups = [...last.entries()].filter(([, ids]) => ids.length >= 3).sort((a, b) => b[1].length - a[1].length);
console.log("repeated closers (>=3)", dups.length);
for (const [text, ids] of dups.slice(0, 20)) {
  console.log(ids.length, ids.slice(0, 8).join(","));
  console.log(" ", text.slice(0, 140));
}
