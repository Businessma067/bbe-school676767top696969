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

const re = /\$\$\s*\n([\s\S]*?)\n\$\$/g;
let nCont = 0;
let nShortPair = 0;
const samples = [];

for (const el of arr.elements) {
  const id = get(el, "id").text;
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  expls.forEach((e, i) => {
    const letter = "ABCDE"[i];
    const blocks = [...e.matchAll(re)].map((m) => m[1].replace(/\s+/g, " ").trim());
    for (let k = 1; k < blocks.length; k++) {
      const prev = blocks[k - 1];
      const cur = blocks[k];
      const continuation = /^=/.test(cur);
      const bothShort = prev.length <= 80 && cur.length <= 50;
      if (continuation || bothShort) {
        if (continuation) nCont++;
        else nShortPair++;
        if (samples.length < 40) {
          samples.push({ id, letter, k, prev, cur, continuation, plen: prev.length, clen: cur.length });
        }
      }
    }
  });
}
console.log(`continuation (=) blocks: ${nCont}`);
console.log(`other short consecutive pairs: ${nShortPair}`);
for (const s of samples) {
  console.log(`\n${s.id}${s.letter} #${s.k} cont=${s.continuation} ${s.plen}+${s.clen}`);
  console.log("  P:", s.prev);
  console.log("  C:", s.cur);
}
