/**
 * Dump tasks 31-60 of Chapter 8 into readable text chunks for review.
 * Run: node textbook/output/_ch8_dump_31_60.cjs
 */
const fs = require("node:fs");
const { T } = require("./_ch8_live.cjs");

const chunks = [
  [31, 36],
  [37, 42],
  [43, 48],
  [49, 54],
  [55, 60],
];

for (const [a, b] of chunks) {
  const out = [];
  for (const t of T) {
    if (t.sort_order < a || t.sort_order > b) continue;
    out.push(`===== TASK ${t.sort_order} (${t.difficulty_level}) ${t.title} =====`);
    out.push(`CONTEXT: ${t.context}`);
    t.statements.forEach((s, i) => out.push(`STMT ${i} [${t.answer_key[i]}]: ${s}`));
    t.tactical_explanations.forEach((e, i) => {
      const disp = (e.match(/\$\$/g) || []).length / 2;
      out.push(`--- EXPL idx=${i} len=${e.length} displays=${disp} ---`);
      out.push(e);
    });
    out.push("");
  }
  fs.writeFileSync(`textbook/output/_ch8_dump_${a}_${b}.txt`, out.join("\n"));
  console.log(a, b, "written");
}
