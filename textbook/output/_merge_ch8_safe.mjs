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

const EN =
  /\b(the|then|and|with|from|that|this|when|which|dividing|sample|plan|leaves|setting|below|after|before|since|because|where|into|for|both|that|this|at|is|of|by)\b/i;

function oneLine(tex) {
  return tex.replace(/\s+/g, " ").trim().replace(/\} =/g, "}=");
}

function hasEnglish(tex) {
  const t = tex.replace(/\\[a-zA-Z]+/g, " ");
  return EN.test(t);
}

function isEqn(s) {
  return /(=|\\approx|\\le|\\ge|\\leq|\\geq|<|>|\\Rightarrow|\\implies|\\iff|\\Longleftrightarrow)/.test(s);
}

function canJoin(acc, next, pieces) {
  if (pieces >= 4) return null;
  if (!acc || !next) return null;
  if (acc.includes("$") || next.includes("$")) return null;
  if (hasEnglish(acc) || hasEnglish(next)) return null;
  if (acc.includes("\\begin") || next.includes("\\begin")) return null;
  if (acc.includes("\\tag") || next.includes("\\tag")) return null;
  const cont = /^(=|\\approx|\\Rightarrow|\\implies)/.test(next);
  if (cont && acc.length + 1 + next.length <= 180) return "cont";
  const short =
    isEqn(acc) &&
    isEqn(next) &&
    next.length <= 80 &&
    acc.length + 10 + next.length <= 155;
  if (short) return "qquad";
  return null;
}

function mergeInners(inners) {
  const cleaned = inners.map(oneLine);
  const out = [];
  let acc = cleaned[0];
  let pieces = 1;
  for (let i = 1; i < cleaned.length; i++) {
    const n = cleaned[i];
    const how = canJoin(acc, n, pieces);
    if (how === "cont") {
      acc = `${acc} ${n}`;
      pieces++;
    } else if (how === "qquad") {
      acc = `${acc} \\qquad ${n}`;
      pieces++;
    } else {
      out.push(acc);
      acc = n;
      pieces = 1;
    }
  }
  out.push(acc);
  return out.map(oneLine);
}

function glueFor(prev, next) {
  const recovered = /(?:^|\\qquad\s*)[Aac]\s*=\s*[-+]?\d+(?:\.\d+)?\s*$/.test(prev);
  if (!recovered) return null;
  if (/^[A-Za-z]_?[A-Za-z0-9]*\(/.test(next)) return "Substitute into the recovered model:";
  if (/\\approx|\\ln/.test(next)) return "The remaining numerical evaluation is";
  if (/^(w|u|d|N|T|h|n|x|t|s)(\^|=)/.test(next)) return "Solving for the remaining unknown then gives";
  return "With the coefficient recovered, the next evaluation is";
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
    parts.push({
      kind: "math",
      raw: text.slice(start, end + 2),
      inner: text.slice(start + 2, end),
    });
    i = end + 2;
  }
  return parts;
}

function process(text) {
  const parts = splitParts(text);
  const merged = [];
  for (let k = 0; k < parts.length; ) {
    const p = parts[k];
    if (p.kind !== "math") {
      merged.push(p);
      k++;
      continue;
    }
    const run = [p];
    let j = k + 1;
    while (
      j + 1 < parts.length &&
      parts[j].kind === "prose" &&
      /^\s*$/.test(parts[j].raw) &&
      parts[j + 1].kind === "math"
    ) {
      run.push(parts[j + 1]);
      j += 2;
    }
    if (run.length === 1) {
      merged.push(p);
    } else {
      const inners = mergeInners(run.map((r) => r.inner));
      for (let t = 0; t < inners.length; t++) {
        if (t) merged.push({ kind: "prose", raw: "\n\n" });
        merged.push({ kind: "math", inner: inners[t], rebuilt: true });
      }
    }
    k = j;
  }

  const glued = [];
  for (let k = 0; k < merged.length; k++) {
    const p = merged[k];
    const prev = glued[glued.length - 1];
    const next = merged[k + 1];
    if (
      p.kind === "prose" &&
      /^\s*$/.test(p.raw) &&
      prev &&
      prev.kind === "math" &&
      next &&
      next.kind === "math"
    ) {
      const g = glueFor(oneLine(prev.inner ?? prev.raw.slice(2, -2)), oneLine(next.inner ?? next.raw.slice(2, -2)));
      if (g) {
        glued.push({ kind: "prose", raw: `\n\n${g}\n\n` });
        continue;
      }
    }
    glued.push(p);
  }

  return glued
    .map((p) => {
      if (p.kind === "prose") return p.raw;
      if (p.rebuilt) return `$$\n${p.inner}\n$$`;
      return p.raw;
    })
    .join("");
}

const replacements = [];
let changed = 0;
let joinedAway = 0;

for (const el of arr.elements) {
  const explProp = el.properties.find(
    (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "tactical_explanations",
  );
  const explArr = explProp.initializer;
  const newEls = explArr.elements.map((e) => {
    const before = e.text;
    const after = process(before);
    if (after !== before) {
      const nb = (before.match(/\$\$/g) || []).length / 2;
      const na = (after.match(/\$\$/g) || []).length / 2;
      joinedAway += nb - na;
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
console.log(`tasks ${changed}; displays joined away ${joinedAway}`);
