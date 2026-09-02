import fs from "node:fs";
import path from "node:path";

let n = 0;
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const p = path.join(dir, f);
    const arr = JSON.parse(fs.readFileSync(p, "utf8"));
    let changed = false;
    for (const t of arr) {
      const ov = t.solution_overview || "";
      const next = ov.replace(/\u2014/g, ",").replace(/\u2013/g, "-");
      if (next !== ov) {
        t.solution_overview = next;
        changed = true;
        n++;
      }
      t.tactical_explanations = t.tactical_explanations.map((e) => {
        const nl = e.indexOf("\n");
        if (nl < 0) return e;
        const head = e.slice(0, nl);
        const rest = e.slice(nl).replace(/\u2014/g, ",").replace(/\u2013/g, "-");
        const body = head + rest;
        if (body !== e) {
          changed = true;
          n++;
        }
        return body;
      });
    }
    if (changed) fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
  }
}
console.log("dash fields patched", n);
