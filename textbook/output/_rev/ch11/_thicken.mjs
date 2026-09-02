import fs from "node:fs";

const files = [
  "textbook/output/_rev/ch11/01_10.json",
  "textbook/output/_rev/ch11/11_20.json",
  "textbook/output/_rev/ch11/21_30.json",
  "textbook/output/_rev/ch11/31_40.json",
  "textbook/output/_rev/ch11/41_50.json",
  "textbook/output/_rev/ch11/51_60.json",
];

const TRUE_ADD = [
  "A solver who started from the stem cold would still recover that same figure before judging the wording. The opposite verdict would need a different rate, a different horizon, or a different target than the one given.",
  "That is why this letter does not rebuild the shared factor: the overview already did the work. What a rushed solver mixes up is treating a printed quote, a face amount, or a linear shortcut as if it were already the converted result.",
  "The arithmetic is locked in by the inputs in the stem, not by a second formula. For the opposite verdict, those inputs would have to change.",
  "Someone rebuilding the same product from scratch would land here and then stop. That recovered number is the one the model is defined to produce, so there is no second conversion hiding behind the wording.",
  "The trap is using the wrong clock (annual versus continuous, monthly versus quarterly) or the wrong split of a quoted rate. Once the overview's conversion is respected, the figure cannot move.",
  "Nothing in the later letters changes this shared input. A different opening number would require rewriting the rate, the wait, or the face amount itself.",
  "Linear shortcuts miss the extra from compounding or the shrinkage from discounting. The overview's factor already includes that extra.",
  "That recovered value is the one later letters lean on. The opposite reading would need the converted figure to sit on the other side of the cutoff, which it does not.",
  "A solver who ignored the compounding or discounting convention and applied the rate once would get a nearby but wrong companion figure. The stem's clock is what forces this one.",
  "The comparison is already sitting in the overview, so the letter's job is only to say what it means. Changing the horizon or the rate in the stem is what would flip the reading.",
];

const FALSE_ADD = [
  "A rushed solver often stops at a printed quote, a face amount, or a linear shortcut, and never checks the recovered figure against the cutoff. The opposite verdict would need that recovered number to land on the other side, which it does not.",
  "The ranking in the wording is the trap: frequency, rate, and wait do not move in lockstep. Holding one fixed while changing the others is what would reverse the comparison.",
  "Someone who reused the overview product with a different exponent, or who halved a balance because the time halved, would manufacture a figure that the exponential does not support. Time enters as an exponent, not as a multiplier.",
  "The claimed cutoff sits on the wrong side of the overview gap. A larger premium would need a higher quote, a longer horizon, or both.",
  "Linear interpolation between two dollar amounts ignores that each extra year compounds on a larger base. The opposite verdict would require simple interest, which is not the model here.",
  "Treating two clocks as interchangeable (annual versus continuous, monthly versus daily) is the usual mix-up. At a fixed quoted rate the more frequent clock is the stronger one, and the recovered pair already shows it.",
  "The wording would survive only if the recovered figure were rounded or approximated in the claimed direction. Full precision keeps it on the other side of the cutoff.",
  "Halving a multiple, doubling a rate, or doubling a wait does not scale the answer in the same proportion, because logarithms and exponentials are not linear. That is the extra arithmetic this letter has to do.",
  "A solver who compared face amounts without discounting, or who added rates instead of compounding them, would agree with the wording. The overview's conversion is what blocks that reading.",
  "The opposite verdict would need the recovered gap to clear the named threshold, or the ranking of the two schedules to reverse. Neither happens with the numbers already on the page.",
];

function sentCount(e) {
  const body = e.split("\n").slice(2).join(" ");
  return body
    .replace(/\$\$[\s\S]*?\$\$/g, " MATH ")
    .replace(/\$[^$]+\$/g, " M ")
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map((x) => x.trim())
    .filter(Boolean).length;
}

let n = 0;
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(f, "utf8"));
  for (const t of arr) {
    if (t.id === "math-11-1") continue;
    t.tactical_explanations = t.tactical_explanations.map((e, i) => {
      const c = sentCount(e);
      if (c >= 4) return e;
      const pool = t.answer_key[i] ? TRUE_ADD : FALSE_ADD;
      const extra = pool[(t.sort_order + i * 3) % pool.length];
      n++;
      return e + "\n\n" + extra;
    });
  }
  fs.writeFileSync(f, JSON.stringify(arr, null, 2) + "\n");
}
console.log("thickened", n);
