import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const edited = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_current_thin.json"), "utf8"),
);
const listed = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_thin30.json"), "utf8"),
);

const banned = [
  "Linear thinking is the trap",
  "The arithmetic is locked in",
  "Nothing in the later letters",
  "Linear interpolation between two dollar amounts",
  "A solver who compared face amounts without discounting",
  "A solver who ignored the compounding or discounting convention",
  "The opposite verdict would need the recovered gap",
  "That is why this letter does not rebuild the shared factor",
  "The trap is using the wrong clock",
  "The claimed cutoff sits on the wrong side",
  "Linear shortcuts miss the extra from compounding",
  "Halving a multiple, doubling a rate",
  "The wording would survive only if the recovered figure were rounded",
  "That recovered value is the one later letters lean on",
  "Treating two clocks as interchangeable",
  "Someone rebuilding the same product from scratch",
  "The comparison is already sitting in the overview",
  "Someone who reused the overview product with a different exponent",
  "The ranking in the wording is the trap",
  "A rushed solver often stops at a printed quote",
];

function headerPolarity(header) {
  if (/\(true\)\s*$/i.test(header) || /→\s*True/.test(header)) return true;
  if (/\(false\)\s*$/i.test(header) || /→\s*False/.test(header)) return false;
  throw new Error(`cannot read polarity: ${header}`);
}

function checkList(list, label) {
  const issues = [];
  const wcs = [];
  const cache = new Map();
  for (const e of list) {
    if (!cache.has(e.file)) {
      cache.set(e.file, JSON.parse(fs.readFileSync(path.join(root, e.file), "utf8")));
    }
    const arr = cache.get(e.file);
    const t = arr.find((x) => x.id === e.id);
    const letter = t.tactical_explanations[e.idx];
    const header = letter.split("\n")[0];
    const body = letter.replace(/^\*\*[^\n]+\n+/, "").trim();
    const wc = body.split(/\s+/).filter(Boolean).length;
    wcs.push(wc);
    if (header !== e.header) issues.push(`${label} HEADER ${e.id} ${e.letter}`);
    if (headerPolarity(header) !== t.answer_key[e.idx]) {
      issues.push(`${label} KEY ${e.id} ${e.letter} h=${headerPolarity(header)} k=${t.answer_key[e.idx]}`);
    }
    if (t.answer_key[e.idx] !== e.key) issues.push(`${label} LISTKEY ${e.id} ${e.letter}`);
    for (const b of banned) if (body.includes(b)) issues.push(`${label} BANNED ${e.id} ${e.letter}: ${b}`);
    if (/[\u2013\u2014]/.test(body)) issues.push(`${label} DASH ${e.id} ${e.letter}`);
    if (body.includes("${")) issues.push(`${label} TPL ${e.id} ${e.letter}`);
    // invalid JSON percent is already parsed, but check source text for raw \%
    const raw = JSON.stringify(letter);
    if (/[^\\]\\%/.test(raw.replace(/\\\\/g, ""))) issues.push(`${label} RAW PCT ${e.id} ${e.letter}`);
  }
  return { issues, min: Math.min(...wcs), max: Math.max(...wcs), n: list.length };
}

const a = checkList(edited, "CUR");
const b = checkList(listed, "LIST30");
console.log("current-thin-list", a);
console.log("thin30-list", b);

// remaining <30 in ch11
const still = [];
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join(root, "textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      t.tactical_explanations.forEach((e, i) => {
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const words = body.split(/\s+/).filter(Boolean).length;
        if (words < 30) still.push(`${t.id} ${"ABCDE"[i]} w=${words}`);
      });
    }
  }
}
console.log("still <30", still.length);
console.log(still.join("\n"));
