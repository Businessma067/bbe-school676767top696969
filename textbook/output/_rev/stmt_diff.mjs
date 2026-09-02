import { execSync } from "node:child_process";
import fs from "node:fs";
import ts from "typescript";

function load(src, varName) {
  const sf = ts.createSourceFile("x.ts", src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  let arr = null;
  const visit = (n) => {
    if (
      !arr &&
      ts.isVariableDeclaration(n) &&
      n.name.getText(sf) === varName &&
      n.initializer &&
      ts.isArrayLiteralExpression(n.initializer)
    ) {
      arr = n.initializer;
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (!arr) throw new Error("no " + varName);
  const get = (obj, key) => obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === key);
  return arr.elements.map((el) => {
    const id = get(el, "id").initializer.text;
    const stmts = get(el, "statements").initializer.elements.map((e) => e.text);
    return { id, stmts };
  });
}

const files = [
  ["ch1", "src/data/math-ch1-logic.ts", "MATH_CH1_LOGIC"],
  ["ch5", "src/data/math-ch5-linear-equations.ts", "MATH_CH5_LINEAR_EQUATIONS"],
  ["ch8", "src/data/math-ch8-power-functions.ts", "MATH_CH8_POWER_FUNCTIONS"],
  ["ch11", "src/data/math-ch11-financial.ts", "MATH_CH11_FINANCIAL"],
];

for (const [name, file, varName] of files) {
  const oldSrc = execSync(`git show HEAD:${file}`, { encoding: "utf8", maxBuffer: 20e6 });
  const newSrc = fs.readFileSync(file, "utf8");
  const oldA = load(oldSrc, varName);
  const newA = load(newSrc, varName);
  const oldM = new Map(oldA.map((t) => [t.id, t.stmts]));
  let tasks = 0, all5 = 0, some = 0, none = 0, letters = 0, changedLetters = 0, shown = 0;
  const unchangedIds = [];
  for (const t of newA) {
    const prev = oldM.get(t.id);
    if (!prev) continue;
    tasks += 1;
    let c = 0;
    for (let i = 0; i < 5; i++) {
      letters += 1;
      if (prev[i] !== t.stmts[i]) {
        c += 1;
        changedLetters += 1;
      }
    }
    if (c === 5) all5 += 1;
    else if (c > 0) some += 1;
    else {
      none += 1;
      unchangedIds.push(t.id);
    }
    if (shown < 2 && c > 0) {
      shown += 1;
      console.log("  ex", t.id);
      console.log("    old A:", JSON.stringify(prev[0]).slice(0, 120));
      console.log("    new A:", JSON.stringify(t.stmts[0]).slice(0, 120));
    }
  }
  console.log(name, "tasks", tasks, "all5_changed", all5, "partial", some, "unchanged_tasks", none, "letters", changedLetters + "/" + letters);
  if (unchangedIds.length) console.log("  unchanged", unchangedIds.join(", "));
}
