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

let dollarInMath = 0;
let samples = [];
for (const el of arr.elements) {
  const id = get(el, "id").text;
  get(el, "tactical_explanations").elements.forEach((e, i) => {
    let t = e.text;
    let p = 0;
    while (p < t.length) {
      const s = t.indexOf("$$", p);
      if (s < 0) break;
      const end = t.indexOf("$$", s + 2);
      if (end < 0) break;
      const inner = t.slice(s + 2, end);
      if (inner.includes("$")) {
        dollarInMath++;
        if (samples.length < 8) samples.push(`${id}${"ABCDE"[i]} :: ${inner.trim().slice(0, 80)}`);
      }
      p = end + 2;
    }
  });
}
console.log("dollar-in-math", dollarInMath);
samples.forEach((s) => console.log(s));
