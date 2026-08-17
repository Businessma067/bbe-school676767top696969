import fs from "fs";
import { execSync } from "child_process";

const cur = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const head = execSync("git show HEAD:src/data/math-ch11-financial.ts", {
  encoding: "utf8",
  maxBuffer: 50e6,
});

function overview(src, id) {
  const i = src.indexOf("case_id: `" + id + "`");
  const k = "solution_overview: `";
  const s = src.indexOf(k, i) + k.length;
  const e = src.indexOf("`", s);
  return src.slice(s, e);
}

function meta(src, id) {
  const i = src.indexOf("case_id: `" + id + "`");
  const j = src.indexOf("\n  {\n    id:", i + 1);
  const block = src.slice(i, j < 0 ? src.length : j);
  return {
    diff: block.match(/difficulty_level: `([^`]+)`/)[1],
    answers: block.match(/answer_key: (\[[^\]]+\])/)[1],
    statements: (block.match(/statements: \[([\s\S]*?)\],\s*\n\s*answer_key/) || [])[1],
  };
}

const hard = [];
const idRe = /case_id: `([^`]+)`/g;
let m;
const starts = [];
while ((m = idRe.exec(cur)) !== null) starts.push(m[1]);

for (const id of starts) {
  const metaC = meta(cur, id);
  if (metaC.diff !== "4/5" && metaC.diff !== "5/5") continue;
  const a = overview(head, id);
  const b = overview(cur, id);
  hard.push({
    id,
    diff: metaC.diff,
    headLen: a.length,
    curLen: b.length,
    trimmed: a.length - b.length,
    changed: a !== b,
    answerHead: /\*\*Answer\.\*\*/.test(a),
    answerCur: /\*\*Answer\.\*\*/.test(b),
    keySame: meta(head, id).answers === metaC.answers,
    stmtSame: meta(head, id).statements === metaC.statements,
  });
}

const changed = hard.filter((t) => t.changed);
const fives = hard.filter((t) => t.diff === "5/5");
console.log("Hard tasks:", hard.length);
console.log("Changed overviews:", changed.length);
console.log(
  "Total chars trimmed (vs HEAD):",
  changed.reduce((s, t) => s + t.trimmed, 0)
);
console.log("Max 5/5 remaining:", Math.max(...fives.map((t) => t.curLen)));
console.log("Over max now:", hard.filter((t) => (t.diff === "4/5" && t.curLen > 1450) || (t.diff === "5/5" && t.curLen > 1600)).length);
console.log("Answer lines remaining:", hard.filter((t) => t.answerCur).length);
console.log("answer_key mismatches:", hard.filter((t) => !t.keySame).length);
console.log("statements mismatches:", hard.filter((t) => !t.stmtSame).length);
console.log("\nChanged tasks:");
changed
  .sort((a, b) => b.trimmed - a.trimmed)
  .forEach((t) =>
    console.log(
      `${t.diff} ${t.id}: ${t.headLen} → ${t.curLen} (−${t.trimmed}) answer? ${t.answerHead}→${t.answerCur}`
    )
  );

// Sanity: 108 full
console.log("\n---108---\n" + overview(cur, "MATH 11.108"));
