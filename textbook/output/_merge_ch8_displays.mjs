import fs from "node:fs";
import ts from "typescript";

const MAIN = "src/data/math-ch8-power-functions.ts";
const src = fs.readFileSync(MAIN, "utf8");
const sf = ts.createSourceFile(MAIN, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

let arr = null;
const visit = (n) => {
  if (!arr && ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) {
    arr = n.initializer;
  }
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

function isCont(tex) {
  return /^(=|\\approx|\\Rightarrow)/.test(oneLine(tex));
}

const BLOCK = /\$\$\r?\n([\s\S]*?)\r?\n\$\$/g;
const RUN = /(?:\$\$\r?\n[\s\S]*?\r?\n\$\$)(?:\s+\$\$\r?\n[\s\S]*?\r?\n\$\$)+/g;

function mergeRun(blocks) {
  const out = [];
  let acc = oneLine(blocks[0]);
  for (let i = 1; i < blocks.length; i++) {
    const n = oneLine(blocks[i]);
    const shortPair =
      acc.length <= 55 &&
      n.length <= 55 &&
      acc.includes("=") &&
      n.includes("=") &&
      !isCont(n) &&
      !/^[A-Za-z]\s*=\s*[-0-9.]+$/.test(acc);
    if (isCont(n) && (acc.length + 1 + n.length) <= 180) {
      acc = `${acc} ${n}`;
    } else if (shortPair && (acc.length + 10 + n.length) <= 110) {
      acc = `${acc} \\qquad ${n}`;
    } else {
      out.push(acc);
      acc = n;
    }
  }
  out.push(acc);
  return out.map((m) => `$$\n${m}\n$$`).join("\n\n");
}

const ONELINE_RUN = /(?:\$\$[^\n]+\$\$)(?:\s+\$\$[^\n]+\$\$)+/g;
const ONELINE_BLOCK = /\$\$([^\n]+)\$\$/g;

function mergeDisplays(text) {
  const merge = (run, blockRe) => {
    const blocks = [...run.matchAll(blockRe)].map((m) => m[1]);
    if (blocks.length < 2) return run;
    if (blocks.some((b) => /\b(the|then|and|with|from|that|this|when|which)\b/i.test(b))) return run;
    return mergeRun(blocks);
  };
  let out = text.replace(RUN, (run) => merge(run, BLOCK));
  out = out.replace(ONELINE_RUN, (run) => merge(run, ONELINE_BLOCK));
  return out;
}

const replacements = [];
let changed = 0;
let removed = 0;

for (const el of arr.elements) {
  const explProp = el.properties.find(
    (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "tactical_explanations",
  );
  const explArr = explProp.initializer;
  const newEls = explArr.elements.map((e) => {
    const before = e.text;
    const after = mergeDisplays(before);
    if (after !== before) {
      removed += [...before.matchAll(BLOCK)].length - [...after.matchAll(BLOCK)].length;
    }
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
console.log(`tasks ${changed}; blocks joined away ${removed}`);
