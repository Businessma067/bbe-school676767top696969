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

function parts(text) {
  const out = [];
  let i = 0;
  while (i < text.length) {
    const s = text.indexOf("$$", i);
    if (s < 0) break;
    if (s > i) out.push({ kind: "prose", raw: text.slice(i, s) });
    const e = text.indexOf("$$", s + 2);
    if (e < 0) break;
    out.push({ kind: "math", inner: text.slice(s + 2, e).replace(/\s+/g, " ").trim() });
    i = e + 2;
  }
  return out;
}

let n = 0;
for (const el of arr.elements) {
  const id = get(el, "id").text;
  get(el, "tactical_explanations").elements.forEach((e, i) => {
    const ps = parts(e.text);
    for (let k = 0; k < ps.length - 2; k++) {
      if (ps[k].kind === "math" && ps[k + 1].kind === "prose" && /^\s*$/.test(ps[k + 1].raw) && ps[k + 2].kind === "math") {
        n++;
        if (n <= 25) {
          console.log(`${id}${"ABCDE"[i]}`);
          console.log("  ", ps[k].inner.slice(0, 90));
          console.log("  ", ps[k + 2].inner.slice(0, 90));
        }
      }
    }
  });
}
console.log("leftover consecutive", n);
