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

function escapeTpl(s) {
  if (s.includes("${")) throw new Error("forbidden ${");
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function oneLine(tex) {
  return tex.replace(/\s+/g, " ").trim();
}

function leftoverGlue(next) {
  const n = oneLine(next);
  if (/^[AacbkrF]\s*=/.test(n)) return null;
  if (/^[A-Za-z]_?[A-Za-z0-9]*\(/.test(n) || /^[A-Za-z]_?[A-Za-z0-9]*\\left\(/.test(n)) {
    return "Substitute into the recovered model:";
  }
  if (/^(w|u|d|N|T|h|n|x|t|s|p)\s*=/.test(n)) return "Solving for the remaining unknown then gives";
  return null;
}

function splitParts(text) {
  const parts = [];
  let i = 0;
  while (i < text.length) {
    const start = text.indexOf("$$", i);
    if (start < 0) {
      parts.push({ kind: "prose", raw: text.slice(i) });
      break;
    }
    if (start > i) parts.push({ kind: "prose", raw: text.slice(i, start) });
    const end = text.indexOf("$$", start + 2);
    if (end < 0) {
      parts.push({ kind: "prose", raw: text.slice(i) });
      break;
    }
    parts.push({ kind: "math", raw: text.slice(start, end + 2), inner: text.slice(start + 2, end) });
    i = end + 2;
  }
  return parts;
}

function process(text) {
  const parts = splitParts(text);
  const out = [];
  for (let k = 0; k < parts.length; k++) {
    const p = parts[k];
    const prev = out[out.length - 1];
    const next = parts[k + 1];
    if (
      p.kind === "prose" &&
      /^\s*$/.test(p.raw) &&
      prev &&
      prev.kind === "math" &&
      next &&
      next.kind === "math"
    ) {
      const g = leftoverGlue(next.inner);
      if (g) {
        out.push({ kind: "prose", raw: `\n\n${g}\n\n` });
        continue;
      }
    }
    out.push(p);
  }
  return out.map((p) => p.raw).join("");
}

const replacements = [];
let changed = 0;
let glues = 0;
for (const el of arr.elements) {
  const explProp = el.properties.find(
    (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "tactical_explanations",
  );
  const explArr = explProp.initializer;
  const newEls = explArr.elements.map((e) => {
    const before = e.text;
    const after = process(before);
    if (after !== before) glues++;
    return after;
  });
  if (newEls.every((t, i) => t === explArr.elements[i].text)) continue;
  changed++;
  const inner = newEls.map((t) => `      \`${escapeTpl(t)}\``).join(",\n");
  replacements.push({ start: explArr.getStart(sf), end: explArr.end, text: `[\n${inner},\n    ]` });
}
replacements.sort((a, b) => b.start - a.start);
let next = src;
for (const r of replacements) next = next.slice(0, r.start) + r.text + next.slice(r.end);
fs.writeFileSync(MAIN, next);
console.log(`tasks ${changed}; letters glued ${glues}`);
