import fs from "node:fs";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const inPath = path.join(dir, "_other_batch_c.json");
const outPath = path.join(dir, "_other_out_c.json");

const items = JSON.parse(fs.readFileSync(inPath, "utf8"));

const R = String.raw;

/** [inputIndex, from, to] — exact substring swaps on the runtime string. */
const edits = [];

// ---------------------------------------------------------------- 0: MATH 8.06
edits.push([
  0,
  R`**4.** Place the recorded run against the alarm:

$$\frac{180}{500} = 36\%, \qquad \frac{30}{50} = 60\% \text{ of the trip job count}$$`,
  R`**4.** Place the recorded run against the alarm. The recorded load is a little over a third of the tripping level:

$$\frac{180}{500} = 36\%$$

In job counts the same run sits much closer to the limit, at three fifths of the tripping volume:

$$\frac{30}{50} = 60\%$$

The gap between those two percentages is the squaring at work: a run already past halfway in job count is still well below halfway in load.`,
]);

// ---------------------------------------------------------------- 1: MATH 8.12
edits.push([
  1,
  R`**4.** Average fee splits into two declining power terms:

$$\frac{C(n)}{n} = 200n^{-1} + 30n^{-0.5}, \qquad 5 \to 2 \to 1.22 \text{ across the three engagements}$$`,
  R`**4.** Average fee splits into two declining power terms:

$$\frac{C(n)}{n} = 200n^{-1} + 30n^{-0.5}$$

Both exponents are negative, so the fee per account falls as the engagement grows. Read at account counts $100$, $400$ and $1600$, the average fee runs:

$$5 \to 2 \to 1.22$$

The drop is steep at first because the fixed charge is spread over more accounts, then it flattens as the square root term comes to dominate.`,
]);

// ---------------------------------------------------------------- 2: MATH 8.16
edits.push([
  2,
  R`**2.** Locate the crossing of the uncapped schedules:

$$40\sqrt{u} = 5u \;\Rightarrow\; \sqrt{u} = 8 \;\Rightarrow\; u = 64, \qquad \text{both bill } 320$$`,
  R`**2.** Locate the crossing of the uncapped schedules by setting the two bills equal:

$$40\sqrt{u} = 5u$$

Dividing both sides by $5\sqrt{u}$ leaves a single square root:

$$\sqrt{u} = 8$$

Squaring gives the crossing volume:

$$u = 64$$

At that volume both plans bill $320$.`,
]);

edits.push([
  2,
  R`**5.** Unit costs separate the two shapes:

$$\frac{C_A(u)}{u} = 40u^{-0.5} \text{ (falling)}, \qquad \frac{C_B(u)}{u} = 5 \text{ (constant)}$$`,
  R`**5.** Unit costs separate the two shapes. Plan A's cost per ticket falls as the volume grows:

$$\frac{C_A(u)}{u} = 40u^{-0.5}$$

Plan B's cost per ticket is the same at every volume:

$$\frac{C_B(u)}{u} = 5$$

That is why the ranking flips once and never flips back.`,
]);

// ---------------------------------------------------------------- 3: MATH 8.17 C
edits.push([
  3,
  R`$$1 \to 2 \to 4 \to 8 \quad \text{is three doublings}$$`,
  R`$$1 \to 2 \to 4 \to 8$$

That chain holds three doublings, so the $0.8$ factor is applied three times:`,
]);

// ---------------------------------------------------------------- 4: MATH 8.34
edits.push([
  4,
  R`**4.** Scale factors explain why the surplus must vanish:

$$2^{0.5} \approx 1.414 \text{ for benefit}, \qquad 2^{1.5} \approx 2.828 \text{ for cost}$$`,
  R`**4.** Scale factors explain why the surplus must vanish. Doubling the scale multiplies the benefit by:

$$2^{0.5} \approx 1.414$$

The same doubling multiplies the cost by:

$$2^{1.5} \approx 2.828$$

Cost grows twice as fast as benefit under every doubling, so any surplus held at a small scale is eaten as the programme expands.`,
]);

edits.push([
  4,
  R`**5.** The best scale sits near $x\approx27$, far below break-even — the crossing marks the end of the worthwhile range, not its optimum.`,
  R`**5.** The best scale sits near $x\approx27$, far below break-even. The crossing at $x = 80$ marks the end of the worthwhile range, not its optimum.`,
]);

// ---------------------------------------------------------------- 5: MATH 8.35
edits.push([
  5,
  R`**4.** Scale factors show the sub-proportional response:

$$2^{2/3} \approx 1.587 \;(+59\%), \qquad \text{doubling } T \text{ needs } 2^{3/2} \approx 2.83 \text{ times the gas}$$`,
  R`**4.** Scale factors show the sub-proportional response. Doubling the gas feed multiplies throughput by:

$$2^{2/3} \approx 1.587$$

That is a gain of about $59\%$, well short of a doubling. Read the other way, doubling the throughput calls for a gas factor of:

$$2^{3/2} \approx 2.83$$

So extra output has to be bought with almost three times the feed.`,
]);

edits.push([
  5,
  R`**5.** Gas efficiency declines with the feed, so the licensed maximum is also the least efficient operating point:

$$\frac{T(g)}{g} = 5g^{-1/3}: \quad 2.5,\; 1.67,\; 1.25 \text{ at } g = 8,\,27,\,64$$`,
  R`**5.** Gas efficiency declines with the feed, so the licensed maximum is also the least efficient operating point. Throughput per unit of gas is:

$$\frac{T(g)}{g} = 5g^{-1/3}$$

At feeds of $8$, $27$ and $64$ that ratio reads:

$$2.5,\; 1.67,\; 1.25$$`,
]);

// ---------------------------------------------------------------- 6: MATH 8.36
edits.push([
  6,
  R`**5.** Equation (2) has exponent $1$, so each extra metre of depth stores more than the last:

$$12,\; 30,\; 45 \text{ cubic metres per metre at } d = 4,\,10,\,15$$`,
  R`**5.** Equation (2) has exponent $1$, so each extra metre of depth stores more than the last. Volume per metre of depth reads:

$$12,\; 30,\; 45$$

Those three figures are cubic metres per metre, taken at depths of $4$, $10$ and $15$ metres. They climb in direct proportion to the depth, which is what an exponent of $1$ means.`,
]);

// ---------------------------------------------------------------- 7: MATH 8.43
edits.push([
  7,
  R`**2.** The composed scale factor for a doubling:

$$2^{1.5} \approx 2.83, \qquad \text{via stages: } \left(2^{0.5}\right)^{3} \approx 1.414^{3} \approx 2.83$$`,
  R`**2.** The composed scale factor for a doubling of the wind speed:

$$2^{1.5} \approx 2.83$$

Working stage by stage gives the same number. Surge rises by the square root factor, and the loss stage cubes it:

$$\left(2^{0.5}\right)^{3} \approx 1.414^{3} \approx 2.83$$`,
]);

// -------------------------------------------------------------------- apply
const texts = items.map((it) => it.text);
for (const [i, from, to] of edits) {
  const t = texts[i];
  const at = t.indexOf(from);
  if (at === -1) throw new Error(`item ${i}: pattern not found:\n${from}`);
  if (t.indexOf(from, at + 1) !== -1) throw new Error(`item ${i}: pattern not unique`);
  texts[i] = t.slice(0, at) + to + t.slice(at + from.length);
}

const out = texts.map((text, i) => ({ i, text }));
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");

// -------------------------------------------------------------------- verify
const parsed = JSON.parse(fs.readFileSync(outPath, "utf8"));
const problems = [];
if (parsed.length !== items.length) problems.push(`count ${parsed.length} != ${items.length}`);

const proseRe = /[A-Za-z]{3,}\s+[A-Za-z]{3,}/;

function mathSpans(text) {
  const spans = [];
  let i = 0;
  while (i < text.length) {
    if (text.startsWith("$$", i)) {
      const end = text.indexOf("$$", i + 2);
      if (end !== -1) {
        spans.push(text.slice(i + 2, end).trim());
        i = end + 2;
        continue;
      }
    }
    if (text[i] === "\\" && text[i + 1] === "$") {
      i += 2;
      continue;
    }
    if (text[i] === "$") {
      let end = -1;
      for (let j = i + 1; j < text.length; j++) {
        if (text[j] === "$" && text[j - 1] !== "\\") {
          end = j;
          break;
        }
      }
      if (end !== -1) {
        spans.push(text.slice(i + 1, end).trim());
        i = end + 1;
        continue;
      }
    }
    i += 1;
  }
  return spans;
}

parsed.forEach((row, idx) => {
  const src = items[idx];
  if (row.i !== idx) problems.push(`row ${idx}: bad index ${row.i}`);
  if (row.text.length < src.min_chars) {
    problems.push(`${src.caseId}: ${row.text.length} < min ${src.min_chars}`);
  }
  const oldFirst = src.text.split("\n")[0];
  const newFirst = row.text.split("\n")[0];
  if (oldFirst !== newFirst) problems.push(`${src.caseId}: first line changed`);
  for (const chunk of src.rawChunks) {
    if (row.text.includes(chunk)) problems.push(`${src.caseId}: rawChunk survives`);
  }
  for (const span of mathSpans(row.text)) {
    if (proseRe.test(span)) problems.push(`${src.caseId}: prose in math -> ${span.slice(0, 90)}`);
    if (/\\\$/.test(span)) problems.push(`${src.caseId}: escaped dollar inside math`);
  }
  const textCmds = row.text.match(/\\(?:text|operatorname)\{[^}]*\}/g) || [];
  for (const c of textCmds) {
    const inner = c.replace(/^\\\w+\{/, "").replace(/\}$/, "");
    if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(inner) || /\b(?:for|the|and|per|at|is|of|via)\b/i.test(inner)) {
      problems.push(`${src.caseId}: prose \\text -> ${c}`);
    }
  }
  if (/[\u2014\u2013]/.test(row.text)) problems.push(`${src.caseId}: dash character present`);
  const dd = (row.text.match(/\$\$/g) || []).length;
  if (dd % 2 !== 0) problems.push(`${src.caseId}: unbalanced $$`);
  const oldBlocks = (src.text.match(/\$\$/g) || []).length / 2;
  const newBlocks = dd / 2;
  if (newBlocks < oldBlocks) problems.push(`${src.caseId}: lost display blocks ${newBlocks} < ${oldBlocks}`);
  console.log(
    `${src.caseId.padEnd(10)} len ${String(src.text.length).padStart(5)} -> ${String(row.text.length).padStart(5)}  (min ${src.min_chars})  displays ${oldBlocks} -> ${newBlocks}`,
  );
});

console.log(problems.length ? "\nPROBLEMS:\n" + problems.join("\n") : "\nAll checks passed.");
