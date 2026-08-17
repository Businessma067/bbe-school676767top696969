import fs from "fs";
const text = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const tasks = text.split(/\r?\n  \{\r?\n    id: `/);
console.log("chunks", tasks.length);
const pat =
  /(which is|which exceeds|which would|making it|so the|so it |UNDERVALUED|OVERVALUED|good buy|worse buy|UNDERSTATES|OVERSTATES|shortfall|less than half|more than half)/i;
let n = 0;
for (const chunk of tasks.slice(1)) {
  const m = chunk.match(/^(math-11-\d+)`/);
  if (!m) continue;
  const sm = chunk.match(/statements: \[([\s\S]*?)\],\r?\n    answer_key:/);
  if (!sm) {
    console.log("no stmts", m[1]);
    continue;
  }
  const stmts = [...sm[1].matchAll(/`([^`]*)`/g)].map((x) => x[1]);
  stmts.forEach((s, i) => {
    if (pat.test(s)) {
      n++;
      console.log(m[1] + "." + String.fromCharCode(65 + i) + ": " + s.slice(0, 200));
    }
  });
}
console.log("TOTAL", n);
