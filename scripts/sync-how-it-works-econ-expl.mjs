import fs from "node:fs";

const srcPath = "src/data/how-it-works-tasks.ts";
const src = fs.readFileSync(srcPath, "utf8");
const banks = [2, 3, 4, 5, 6].flatMap((ch) =>
  JSON.parse(fs.readFileSync(`src/data/economics-cases-ch${ch}-subtopics.json`, "utf8")),
);
const byId = new Map(banks.map((c) => [c.case_id, c]));

let n = 0;
const out = src.replace(
  /"caseId": "(CASE [^"]+)"([\s\S]*?)"explanations": \[([\s\S]*?)\]/g,
  (m, id, mid) => {
    const c = byId.get(id);
    if (!c) return m;
    n += 1;
    const formatted = c.tactical_explanations
      .map((e) => `        ${JSON.stringify(e)}`)
      .join(",\n");
    return `"caseId": "${id}"${mid}"explanations": [\n${formatted}\n      ]`;
  },
);

fs.writeFileSync(srcPath, out);
console.log("updated", n, "econ how-it-works tasks");
