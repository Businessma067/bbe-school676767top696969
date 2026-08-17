import fs from "fs";

const path = "C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts";
const src = fs.readFileSync(path, "utf8");

const taskStarts = [];
const idRe = /id:\s*`([^`]+)`/g;
let m;
while ((m = idRe.exec(src)) !== null) {
  taskStarts.push({ id: m[1], index: m.index });
}

const tasks = [];
for (let i = 0; i < taskStarts.length; i++) {
  const start = taskStarts[i].index;
  const end = i + 1 < taskStarts.length ? taskStarts[i + 1].index : src.length;
  const block = src.slice(start, end);
  const diff = block.match(/difficulty_level:\s*`([^`]+)`/);
  if (!diff || (diff[1] !== "4/5" && diff[1] !== "5/5")) continue;
  const ov = block.match(/solution_overview:\s*`([\s\S]*?)`,\s*\n\s*tactical_explanations/);
  const ov2 = ov || block.match(/solution_overview:\s*`([\s\S]*?)`/);
  if (!ov2) continue;
  tasks.push({
    id: taskStarts[i].id,
    diff: diff[1],
    len: ov2[1].length,
    overview: ov2[1],
    start,
    end,
  });
}

console.log("Found", tasks.length, "tasks with 4/5 or 5/5");
const need = tasks.filter(
  (t) =>
    (t.diff === "4/5" && t.len > 1450) || (t.diff === "5/5" && t.len > 1600)
);
console.log("Need trim:", need.length);
console.log("\nAll lengths (desc):");
[...tasks]
  .sort((a, b) => b.len - a.len)
  .forEach((t) => {
    const max = t.diff === "4/5" ? 1450 : 1600;
    const flag = t.len > max ? "TRIM" : "ok";
    console.log(`${t.diff}\t${t.len}\t${flag}\t${t.id}`);
  });

fs.writeFileSync(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch11_hard_overviews.json",
  JSON.stringify(
    need.map(({ id, diff, len, overview }) => ({ id, diff, len, overview })),
    null,
    2
  )
);
console.log("\nWrote", need.length, "overviews needing trim");
