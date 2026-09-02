import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const files = ["51_60.json", "61_70.json", "71_80.json", "81_90.json", "91_97.json"];
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(__dirname, f), "utf8"));
  for (const t of arr) {
    const wc = t.tactical_explanations.map(words);
    const flags = wc.map((n, i) => {
      const rich = n >= 300 && n <= 700;
      const look = n >= 120 && n <= 200;
      const low = n < 120;
      const mid = n > 200 && n < 300;
      const hi = n > 700;
      return `${"ABCDE"[i]}${n}${low ? "<" : mid ? "~" : hi ? ">" : rich ? "*" : ""}`;
    });
    const nrich = wc.filter((n) => n >= 300 && n <= 700).length;
    console.log(t.id, flags.join(" "), "rich", nrich);
  }
}
