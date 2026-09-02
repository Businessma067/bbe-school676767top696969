import fs from "node:fs";
import ts from "typescript";

const MAIN = "src/data/math-ch8-power-functions.ts";
const src = fs.readFileSync(MAIN, "utf8");
const sf = ts.createSourceFile(MAIN, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
let arr = null;
const visit = (n) => {
  if (!arr && ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) arr = n.initializer;
  ts.forEachChild(n, visit);
};
visit(sf);
const get = (obj, name) => obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === name)?.initializer;

const RUN = /(?:\$\$\r?\n[\s\S]*?\r?\n\$\$)(?:\s+\$\$\r?\n[\s\S]*?\r?\n\$\$)+/g;
let n = 0;
for (const el of arr.elements) {
  const id = get(el, "id").text;
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  expls.forEach((e, i) => {
    const runs = e.match(RUN) || [];
    if (!runs.length) return;
    n++;
    if (n <= 18) {
      const preview = runs[0].replace(/\s+/g, " ").slice(0, 120);
      console.log(`${id}${"ABCDE"[i]} ${preview}`);
    }
  });
}
console.log("total leftover multiline runs", n);
