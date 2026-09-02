import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json", "51_60.json"];

for (const f of files) {
  for (const t of JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"))) {
    if (t.id === "math-5-1") continue;
    for (let i = 0; i < 5; i++) {
      const body = t.tactical_explanations[i];
      const idx = body.indexOf("\n\n");
      const after = body.slice(idx + 2);
      const n = (after.match(/\$\$/g) || []).length / 2;
      const words = after.trim().split(/\s+/).length;
      if (i === 0 && n < 2) {
        console.log(t.id, "A disp", n, "words", words);
      }
    }
  }
}
