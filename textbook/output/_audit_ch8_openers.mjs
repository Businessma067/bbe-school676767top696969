import fs from "fs";

const src = fs.readFileSync("src/data/math-ch8-power-functions.ts", "utf8");

function extractTasks(ts) {
  const taskRegex =
    /case_id:\s*`([^`]+)`[\s\S]*?tactical_explanations:\s*\[([\s\S]*?)\],\s*\n\s*difficulty_level/g;
  const tasks = [];
  let m;
  while ((m = taskRegex.exec(ts))) {
    const caseId = m[1];
    const block = m[2];
    const exps = [];
    let i = 0;
    while (i < block.length) {
      while (i < block.length && /[\s,]/.test(block[i])) i++;
      if (i >= block.length) break;
      if (block[i] !== "`") {
        i++;
        continue;
      }
      i++;
      let s = "";
      while (i < block.length) {
        if (block[i] === "\\" && i + 1 < block.length) {
          s += block[i] + block[i + 1];
          i += 2;
          continue;
        }
        if (block[i] === "`") {
          i++;
          break;
        }
        s += block[i++];
      }
      exps.push(s);
    }
    tasks.push({ caseId, exps });
  }
  return tasks;
}

const tasks = extractTasks(src);

// Does opening paragraph contain inline math with a conclusive number AND a verdict verb?
let openHasInlineMath = 0;
let openHasVerdictVerb = 0;
let openHasBoth = 0;
let openMetaOnly = 0; // This claim + no result number
const samplesBoth = [];
const samplesMeta = [];

const verdictRe =
  /\b(gives|equals|is|yields|returns|predicts|comes out|stays|clears|breaches|holds|true|false|exactly|about|under|over|below|above|declines|falls|rises|multiplies|leaves)\b/i;

for (const t of tasks) {
  for (const e of t.exps) {
    const open = (e.split(/\n\n+/)[1] || "").trim();
    const hasMath = /\$[^$]+\$/.test(open);
    const hasVerdict = verdictRe.test(open);
    // conclusive: open contains a computed-looking result before any $$
    const looksConclusive =
      hasMath &&
      /\b(gives|equals|is|yields|returns|predicts|comes out|leaves|becomes|multiplies .+ by|a rise of|a fall of|exactly|about)\b/i.test(
        open
      );
    if (hasMath) openHasInlineMath++;
    if (hasVerdict) openHasVerdictVerb++;
    if (looksConclusive) {
      openHasBoth++;
      if (samplesBoth.length < 8)
        samplesBoth.push(t.caseId + ": " + open.replace(/\n/g, " ").slice(0, 160));
    }
    if (/^This claim/.test(open) && !looksConclusive) {
      openMetaOnly++;
      if (samplesMeta.length < 8)
        samplesMeta.push(t.caseId + ": " + open.replace(/\n/g, " ").slice(0, 160));
    }
  }
}

console.log({
  openHasInlineMath,
  openHasVerdictVerb,
  openLooksConclusive: openHasBoth,
  openMetaWithoutConclusive: openMetaOnly,
});
console.log("conclusive samples", samplesBoth);
console.log("meta-only samples", samplesMeta);

// Paragraph role template frequency for ch8:
// H / meta-open / contrast-or-trap / setup / math+ / bridge / math+ / close
const roles = { hasTrapLikeBeforeMath: 0, hasImperativeBeforeMath: 0, hasPedagogyBeforeMath: 0 };
for (const t of tasks) {
  for (const e of t.exps) {
    const before = e.split("$$")[0];
    if (/\b(The trap|The instinct|tempting|standard slip|looks like)\b/i.test(before))
      roles.hasTrapLikeBeforeMath++;
    if (
      /\b(Form the|Evaluate the|Invert the|Write the|Recover |Apply |Set that|Compare )\b/i.test(
        before
      )
    )
      roles.hasImperativeBeforeMath++;
    if (/^This claim/m.test(before)) roles.hasPedagogyBeforeMath++;
  }
}
console.log(roles);

// closing template exact regex counts
const closeExact = {};
for (const t of tasks) {
  for (const e of t.exps) {
    const last = e.trim().split("\n").filter(Boolean).slice(-1)[0];
    let key = "other";
    if (/so the claim is true\.?$/i.test(last)) key = "... so the claim is true.";
    else if (/so the claim is false\.?$/i.test(last)) key = "... so the claim is false.";
    else if (/so the claim holds\.?$/i.test(last)) key = "... so the claim holds.";
    else if (/exactly as the claim states\.?$/i.test(last))
      key = "... exactly as the claim states.";
    else if (/matching the claim\.?$/i.test(last)) key = "... matching the claim.";
    else if (/the claim is false\.?$/i.test(last)) key = "... the claim is false.";
    else if (/the claim is true\.?$/i.test(last)) key = "... the claim is true.";
    else if (/so the statement is (True|False)\.?$/i.test(last))
      key = "... so the statement is Tf.";
    else key = "OTHER :: " + last.slice(-90);
    closeExact[key] = (closeExact[key] || 0) + 1;
  }
}
console.log(
  "closeExact",
  Object.fromEntries(Object.entries(closeExact).sort((a, b) => b[1] - a[1]))
);

// How many body paras are pure display-math in ch8 vs mixed
let pureMathParas = 0,
  totalParas = 0;
for (const t of tasks) {
  for (const e of t.exps) {
    for (const p of e.split(/\n\n+/)) {
      totalParas++;
      if (/^\$\$[\s\S]*\$\$$/.test(p.trim())) pureMathParas++;
    }
  }
}
console.log({ pureMathParas, totalParas, share: pureMathParas / totalParas });
