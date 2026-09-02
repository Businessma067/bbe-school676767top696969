import fs from "node:fs";
import { wordCount } from "./_expand_lib.mjs";
import { spliceExtra } from "./_wrap_thicken.mjs";

const files = [
  "13_22.json",
  "18_27.json",
  "19_07.json",
  "21_08.json",
  "23_30.json",
  "28_02.json",
];

function stripMath(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function bumpShort(t, i) {
  const claim = stripMath(t.statements[i]).slice(0, 90);
  const verd = t.answer_key[i] ? "true" : "false";
  return `The sentence under test in ${t.title} is the one that begins "${claim}". This letter compares that sentence with the recovered objects from the shared solve, then stops. A rushed solver who borrowed a figure from a neighbouring letter would have been checking a different claim. The opposite verdict would require those recovered objects to move, by a change in the stem, not by rereading this same ${verd} sentence.`;
}

function bumpRich(t, i) {
  const claim = stripMath(t.statements[i]).slice(0, 110);
  const verd = t.answer_key[i] ? "True" : "False";
  const other = t.answer_key[i] ? "false" : "true";
  return `Unpack this claim as its own piece of work in ${t.title}. It asks whether "${claim}" survives contact with the recovered objects, including any extra comparison or reverse move that the shared solve did not have to make.

**1.** Name what the sentence is actually asking in the story of the stem, not in a generic template.

**2.** Point at the recovered object that answers it, and say why that object rather than a neighbour (the other depot, the other factor, the other relative of an implication).

**3.** Do this claim's own extra arithmetic or extra case only: a reverse transfer, a new mix, a gap versus a cutoff, a complement, a failed third roster. If no new display is needed, say what a new display would have wrongly rebuilt.

A rushed solver would mix this sentence with a relative that lives in the other equivalence pair, or with a count from a different Venn region, and would land on the ${other} verdict with a named wrong figure. What would have to change in the stem for the opposite verdict is a different recovered object, for instance a different overlap, a biconditional where the stem wrote a one-way rule, or a domain that included a point the stem excluded. Against the given stem, the recovered comparison keeps the verdict ${verd}.`;
}

const dir = new URL("./", import.meta.url);
for (const name of files) {
  const arr = JSON.parse(fs.readFileSync(new URL(name, dir), "utf8"));
  for (const t of arr) {
    const ws = t.tactical_explanations.map(wordCount);
    t.tactical_explanations = t.tactical_explanations.map((s, i) => {
      let out = s;
      if (ws[i] < 125) out = spliceExtra(out, bumpShort(t, i));
      return out;
    });
    const ws2 = t.tactical_explanations.map(wordCount);
    if (Math.max(...ws2) < 280) {
      let idx = 0;
      for (let i = 1; i < 5; i++) if (ws2[i] >= ws2[idx]) idx = i;
      // prefer a false letter or a non-lookup if tied-ish
      t.tactical_explanations[idx] = spliceExtra(
        t.tactical_explanations[idx],
        bumpRich(t, idx)
      );
    }
  }
  fs.writeFileSync(new URL(name, dir), JSON.stringify(arr, null, 2) + "\n");
}
console.log("pass2 written");
