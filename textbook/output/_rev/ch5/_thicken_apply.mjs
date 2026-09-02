import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

export function thickenLetters(filename, extras) {
  // extras[id] = { 0: "extra paras", 3: "extra paras", ... } keyed by letter index
  const fp = path.join(dir, filename);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  let n = 0;
  for (const t of arr) {
    const ex = extras[t.id];
    if (!ex) continue;
    for (const [k, extra] of Object.entries(ex)) {
      const i = Number(k);
      let s = t.tactical_explanations[i];
      const closer = t.answer_key[i]
        ? "so the statement is True."
        : "so the statement is False.";
      const idx = s.lastIndexOf(closer);
      if (idx < 0) throw new Error("no closer " + t.id + " " + i);
      const insert = extra.trim() + "\n\n";
      t.tactical_explanations[i] = s.slice(0, idx) + insert + s.slice(idx);
    }
    n++;
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  return n;
}
