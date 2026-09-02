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

const BLOCK = /\$\$\r?\n([\s\S]*?)\r?\n\$\$/g;
const HAS_EN = /\b(the|then|and|with|from|that|this|when|which|since|because|so|for|into|after|before|next)\b/i;

function inner(block) {
  const m = block.match(/^\$\$\r?\n([\s\S]*?)\r?\n\$\$$/);
  return m ? m[1].trim() : null;
}

function joinRun(run) {
  const blocks = [];
  BLOCK.lastIndex = 0;
  let m;
  while ((m = BLOCK.exec(run))) blocks.push(m[0]);
  if (blocks.length < 2) return run;

  const inners = blocks.map(inner);
  if (inners.some((x) => x == null)) return run;

  const out = [inners[0]];
  for (let i = 1; i < inners.length; i++) {
    const prev = out[out.length - 1];
    const next = inners[i];
    const nextCont = /^(=|\\approx|\\Rightarrow)/.test(next);
    const prevOne = !prev.includes("\n");
    const nextOne = !next.includes("\n");
    const prevLen = prev.replace(/\s+/g, " ").length;
    const nextLen = next.replace(/\s+/g, " ").length;
    const combined = prevLen + nextLen + 10;
    const shortPair = prevOne && nextOne && prevLen <= 90 && nextLen <= 90 && combined <= 170;
    if (nextCont || shortPair) {
      out[out.length - 1] = nextCont ? `${prev} ${next}` : `${prev} \\qquad ${next}`;
    } else {
      out.push(next);
    }
  }
  return out.map((x) => `$$\n${x}\n$$`).join("\n\n");
}

function addGlue(text) {
  // Only bridge a recovered number immediately followed by a new calculation.
  const re = /(\$\$\r?\n[\s\S]*?\r?\n\$\$)(\s+)(\$\$\r?\n[\s\S]*?\r?\n\$\$)/g;
  return text.replace(re, (all, a, ws, b) => {
    const first = inner(a) || "";
    const next = inner(b) || "";
    if (!next || !first) return all;
    if (HAS_EN.test(first) || HAS_EN.test(next)) return all;
    const recovered = /(?:^|\\qquad\s*)(?:[A-Za-z]|r_[A-Za-z])\s*=\s*[-+]?\d+(?:\.\d+)?\s*$/.test(first.replace(/\n/g, " "));
    if (!recovered) return all;
    let glue = "With that coefficient in hand, the next evaluation is";
    if (/^[A-Za-z]_?[A-Za-z0-9]*\(/.test(next)) glue = "Substitute into the recovered model:";
    else if (/\\approx|\\ln/.test(next)) glue = "The remaining numerical evaluation is";
    else if (/^(w|u|d|N|T|h|n|x|t|s)\^/.test(next) || /^(w|u|d|N|T|h|n|x|t|s)=/.test(next)) {
      glue = "Solving for the remaining unknown then gives";
    }
    return `${a}\n\n${glue}\n\n${b}`;
  });
}

function tidyEquals(text) {
  return text.replace(/\$\$\r?\n([\s\S]*?)\r?\n\$\$/g, (all, inner) => {
    const t = inner.replace(/\} =/g, "}=");
    return `$$\n${t}\n$$`;
  });
}

function transform(text) {
  let t = text.replace(/(?:\$\$\r?\n[\s\S]*?\r?\n\$\$)(?:\s+\$\$\r?\n[\s\S]*?\r?\n\$\$)+/g, joinRun);
  t = addGlue(t);
  t = tidyEquals(t);
  return t;
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const chunks = [];
let cursor = 0;
let changed = 0;
for (const el of arr.elements) {
  const explInit = get(el, "tactical_explanations");
  for (const e of explInit.elements) {
    if (!ts.isNoSubstitutionTemplateLiteral(e) && e.kind !== ts.SyntaxKind.StringLiteral) continue;
    const raw = e.getText(sf);
    const innerS = e.text;
    const next = transform(innerS);
    if (next === innerS) continue;
    chunks.push(src.slice(cursor, e.getStart(sf)));
    const q = raw[0];
    chunks.push(q === "`" ? `\`${esc(next)}\`` : JSON.stringify(next));
    cursor = e.getEnd();
    changed++;
  }
}
chunks.push(src.slice(cursor));
fs.writeFileSync(MAIN, chunks.join(""));
console.log("changed strings", changed);
