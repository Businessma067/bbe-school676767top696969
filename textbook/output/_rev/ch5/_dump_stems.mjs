import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const files = ["11_20.json", "21_30.json", "31_40.json", "41_50.json", "51_60.json"];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  console.log("\n==========", f, "n=", data.length, "==========");
  for (const t of data) {
    const ov = t.solution_overview || "";
    const firstPara = ov.split("\n\n")[0].replace(/\n/g, " ").slice(0, 180);
    const ctx = (t.context || "").replace(/\n/g, " ").slice(0, 120);
    console.log("\n---", t.id, t.title);
    console.log("CTX:", ctx);
    console.log("OV1:", firstPara);
    console.log("KEY:", t.answer_key.join(","));
    t.statements.forEach((s, i) => {
      const L = "ABCDE"[i];
      const expl = (t.tactical_explanations[i] || "").replace(/\n/g, " | ").slice(0, 220);
      console.log(`  ${L}) ${t.answer_key[i] ? "T" : "F"} ${s.slice(0, 90)}`);
    });
  }
}
