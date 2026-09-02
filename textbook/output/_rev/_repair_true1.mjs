import fs from "node:fs";
import path from "node:path";

const dir = "textbook/output/_rev/ch1";
let nTrue = 0;
let nBs = 0;

function repairExpl(e) {
  let out = e.replace(/True(?=[\d$\\,%-])/g, () => {
    nTrue++;
    return "$1";
  });
  out = out.replace(/\$Bs\b/g, () => {
    nBs++;
    return "$B$'s";
  });
  return out;
}

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
  const p = path.join(dir, f);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
  let changed = false;
  for (const t of arr) {
    t.tactical_explanations = t.tactical_explanations.map((e) => {
      const next = repairExpl(e);
      if (next !== e) changed = true;
      return next;
    });
  }
  if (changed) fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
}

console.log("True->$1 replacements", nTrue, "$Bs fixes", nBs);
