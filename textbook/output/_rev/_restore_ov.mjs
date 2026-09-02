import fs from "node:fs";
import path from "node:path";

const ovs = JSON.parse(fs.readFileSync("textbook/output/_rev/_old_overviews.json", "utf8"));
let n = 0;
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  const map = ovs[ch];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const fp = path.join(dir, f);
    const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
    let changed = false;
    for (const t of arr) {
      if (map[t.id]) {
        t.solution_overview = map[t.id];
        changed = true;
        n++;
      }
    }
    if (changed) fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  }
}
console.log("restored overviews", n);
