import fs from "fs";

const src = fs.readFileSync("src/data/math-ch8-power-functions.ts", "utf8");
const ch13 = JSON.parse(
  fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8")
);

function walk(o, out = []) {
  if (!o || typeof o !== "object") return out;
  if (o.case_id === "MATH 13.18") out.push(o);
  for (const v of Object.values(o)) walk(v, out);
  return out;
}
const ref = walk(ch13)[0].tactical_explanations;

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

function classifyClose(last) {
  if (/so the statement is (True|False)/i.test(last))
    return "so the statement is Tf";
  if (/Matching .+ claim, the statement is/i.test(last))
    return "Matching... statement is Tf";
  if (/claim.?s comparison is incorrect, so the statement is/i.test(last))
    return "claim comparison incorrect, statement Tf";
  if (/Since .+, the statement is/i.test(last)) return "Since..., statement is Tf";
  if (/so the claim holds/i.test(last)) return "so the claim holds";
  if (/, so the claim is (true|false)/i.test(last)) return "so the claim is tf";
  if (/the claim is (true|false)/i.test(last)) return "the claim is tf";
  if (/exactly as the claim states/i.test(last)) return "exactly as claim states";
  if (/matching the claim/i.test(last)) return "matching the claim";
  if (/so the claim/i.test(last)) return "so the claim (other)";
  if (/false\.?$/i.test(last)) return "ends ...false";
  if (/true\.?$/i.test(last)) return "ends ...true";
  return "OTHER: " + last.slice(0, 120);
}

const closeBuckets = {};
const openBuckets = {};
const secondParaBuckets = {};
const imperativeLeads = {};
let hasWrongPathLex = 0;
let usesClaimWord = 0;
let usesStatementWord = 0;
let closeLower = 0;
let closeUpper = 0;
let spoil = 0;
const spoilSamples = [];
const proseBefore = [];
const emSamples = [];
let emDashCount = 0;
const italSamples = [];
let p2math = 0,
  p2trap = 0,
  p2work = 0,
  p2prose = 0;

// More precise spoiler: first sentence after "This claim" contains the decisive numeric result
function firstSentence(text) {
  const m = text.match(/^[\s\S]*?(?:\.|$)(?=\s|$)/);
  // better: split on period+space outside $
  let out = "";
  let inMath = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "$") inMath = !inMath;
    out += ch;
    if (!inMath && ch === "." && (text[i + 1] === " " || text[i + 1] === "\n" || i === text.length - 1))
      break;
  }
  return out.trim();
}

for (const t of tasks) {
  for (const e of t.exps) {
    const paras = e.split(/\n\n+/);
    const firstBody = (paras[1] || "").trim();
    const second = (paras[2] || "").trim();
    const last = e.trim().split("\n").filter(Boolean).slice(-1)[0];
    const cb = classifyClose(last);
    closeBuckets[cb] = (closeBuckets[cb] || 0) + 1;

    const ow = firstBody.split(/\s+/).slice(0, 5).join(" ");
    openBuckets[ow] = (openBuckets[ow] || 0) + 1;

    let sp = "other";
    if (/^\$\$/.test(second)) sp = "starts with display math";
    else if (/^(The trap|The instinct)/i.test(second)) sp = "trap/instinct";
    else if (/tempting|looks like|standard slip|belongs to/i.test(second))
      sp = "soft trap";
    else if (
      /^(Both|Write|Form|Evaluate|Invert|Apply|Recover|Set |Match |Add |Split|Raise|Using|Side |For )/i.test(
        second
      )
    )
      sp = "work cue";
    else if (/^(The |A |This |That )/i.test(second)) sp = "explanatory prose";
    secondParaBuckets[sp] = (secondParaBuckets[sp] || 0) + 1;

    if (
      /\b(The trap|The instinct|tempting|standard slip|looks like the answer|belongs to a linear)\b/i.test(
        e
      )
    )
      hasWrongPathLex++;

    if (/\bclaim\b/i.test(e)) usesClaimWord++;
    if (/\bstatement\b/i.test(e)) usesStatementWord++;
    if (/\b(true|false)\.?$/i.test(last) && !/\b(True|False)\b/.test(last))
      closeLower++;
    if (/\b(True|False)\b/.test(last)) closeUpper++;

    if (/^\$\$/.test(second)) p2math++;
    else if (/trap|instinct|tempting|slip|looks like/i.test(second)) p2trap++;
    else if (
      /^(Write|Form|Evaluate|Invert|Both|Recover|Set|Match|Add|Split)/i.test(
        second
      )
    )
      p2work++;
    else p2prose++;

    const idx = e.indexOf("$$");
    const before = idx < 0 ? e : e.slice(0, idx);
    proseBefore.push(before.split(/\s+/).length);

    const ms = [...e.matchAll(/[^\n]{0,50}—[^\n]{0,50}/g)];
    emDashCount += ms.length;
    if (emSamples.length < 10 && ms[0]) emSamples.push(t.caseId + ": " + ms[0][0]);

    for (const m of e.matchAll(/(^|[^*])\*([^*\n]+)\*(?!\*)/g)) {
      if (italSamples.length < 15)
        italSamples.push(t.caseId + ": *" + m[2] + "*");
    }

    const beforeMath = e.split("$$")[0];
    for (const x of beforeMath.match(
      /\b(Write|Form|Evaluate|Invert|Apply|Recover|Set|Match|Add|Split|Raise|Compute|Compare)\b/g
    ) || []) {
      imperativeLeads[x] = (imperativeLeads[x] || 0) + 1;
    }

    // spoiler detection
    const s1 = firstSentence(firstBody);
    const hasNumResult =
      /\$[^$]{1,40}\$/.test(s1) &&
      /\b(gives|is|equals|yields|predicts|comes out|stays|clears|breaches|about|exactly|below|above|under|over|true|false|holds)\b/i.test(
        s1
      );
    // stronger: reconstruction gives A=3; rate ... is 24; rise of about 68.2%; predicts about 101.9; level is about 40.3
    if (
      /gives \$| is \$|is about \$|predicts about \$|a rise of about \$|comes out|three units below|just above|just below|which stays under|clears \$|breaches/i.test(
        s1
      ) ||
      (hasNumResult &&
        /reconstruction gives|rate at|multiplies the|level is about|model predicts|rise of about/i.test(
          s1
        ))
    ) {
      spoil++;
      if (spoilSamples.length < 12)
        spoilSamples.push(t.caseId + " " + e.split("\n")[0] + " :: " + s1.slice(0, 180));
    }
  }
}

proseBefore.sort((a, b) => a - b);
const refBefore = ref.map((e) => {
  const i = e.indexOf("$$");
  return (i < 0 ? e : e.slice(0, i)).split(/\s+/).length;
});

console.log(
  "closeBuckets",
  Object.fromEntries(Object.entries(closeBuckets).sort((a, b) => b[1] - a[1]))
);
console.log(
  "openBuckets top25",
  Object.entries(openBuckets).sort((a, b) => b[1] - a[1]).slice(0, 25)
);
console.log("secondParaBuckets", secondParaBuckets);
console.log("p2 distribution", { p2math, p2trap, p2work, p2prose });
console.log("hasWrongPathLex", hasWrongPathLex);
console.log("usesClaimWord", usesClaimWord, "usesStatementWord", usesStatementWord);
console.log("closeLower", closeLower, "closeUpper", closeUpper);
console.log("imperativeLeads", imperativeLeads);
console.log(
  "wordsBeforeFirstDisplayMath ch8",
  {
    min: proseBefore[0],
    p25: proseBefore[62],
    med: proseBefore[125],
    p75: proseBefore[187],
    max: proseBefore[249],
    mean: +(proseBefore.reduce((a, b) => a + b, 0) / 250).toFixed(1),
  }
);
console.log("wordsBeforeFirstDisplayMath 13.18", refBefore);
console.log("emDashCount", emDashCount, emSamples);
console.log("italSamples", italSamples);
console.log("spoilers", spoil, spoilSamples);

// Closing phrase normalization candidates
const closeRewrite = {
  "so the claim holds": 0,
  "so the claim is true": 0,
  "so the claim is false": 0,
  "the claim is false": 0,
  "the claim is true": 0,
  "exactly as the claim states": 0,
  "matching the claim": 0,
  "and the claim is false": 0,
  "and the claimed": 0,
};
for (const t of tasks) {
  for (const e of t.exps) {
    const last = e.trim().split("\n").filter(Boolean).slice(-1)[0];
    for (const k of Object.keys(closeRewrite)) {
      if (last.toLowerCase().includes(k)) closeRewrite[k]++;
    }
  }
}
console.log("closeRewriteHitsOnLastLine", closeRewrite);

// How often wrong-path is BEFORE first math (structural)
let trapBeforeMath = 0;
for (const t of tasks) {
  for (const e of t.exps) {
    const before = e.split("$$")[0];
    if (/\b(The trap|The instinct|tempting|standard slip)\b/i.test(before))
      trapBeforeMath++;
  }
}
console.log("trapBeforeFirstMath", trapBeforeMath);

// 13.18: wrong-path style is embedded as contrast in concept paras, not labeled trap
console.log("\n=== 13.18 wrong-path / contrast sentences ===");
ref.forEach((e, i) => {
  const hits = e
    .split(/\n\n+/)
    .filter((p) =>
      /would only|not when|not the|miss the|understates|Double would|compares this/i.test(
        p
      )
    )
    .map((p) => p.replace(/\n/g, " ").slice(0, 140));
  console.log(String.fromCharCode(65 + i), hits);
});

// Check display math formatting: multiline $$ \\n ... \\n $$ vs inline $$...$$
let multilineDisplay = 0,
  onelineDisplay = 0;
for (const t of tasks) {
  for (const e of t.exps) {
    const blocks = e.match(/\$\$[\s\S]*?\$\$/g) || [];
    for (const b of blocks) {
      if (b.includes("\n")) multilineDisplay++;
      else onelineDisplay++;
    }
  }
}
let refMulti = 0,
  refOne = 0;
for (const e of ref) {
  for (const b of e.match(/\$\$[\s\S]*?\$\$/g) || []) {
    if (b.includes("\n")) refMulti++;
    else refOne++;
  }
}
console.log("ch8 display math multiline/oneline", multilineDisplay, onelineDisplay);
console.log("13.18 display math multiline/oneline", refMulti, refOne);

// qquad usage
let qquad8 = 0,
  qquad13 = 0;
for (const t of tasks)
  for (const e of t.exps) if (/\\qquad/.test(e)) qquad8++;
for (const e of ref) if (/\\qquad/.test(e)) qquad13++;
console.log("explanations with qquad ch8", qquad8, "ref", qquad13);

// "claim" vs "statement" in last 80 chars
let lastClaim = 0,
  lastStatement = 0;
for (const t of tasks) {
  for (const e of t.exps) {
    const tail = e.slice(-80);
    if (/\bclaim\b/i.test(tail)) lastClaim++;
    if (/\bstatement\b/i.test(tail)) lastStatement++;
  }
}
console.log("tail has claim", lastClaim, "tail has statement", lastStatement);

// Sample mid/late tasks structure
for (const id of ["MATH 8.20", "MATH 8.35", "MATH 8.50"]) {
  const t = tasks.find((x) => x.caseId === id);
  console.log("\n====", id, "====");
  t.exps.forEach((e, i) => {
    const paras = e.split(/\n\n+/);
    console.log(
      String.fromCharCode(65 + i),
      "paras",
      paras.length,
      "words",
      e.split(/\s+/).length
    );
    console.log("  open:", paras[1]?.replace(/\n/g, " ").slice(0, 160));
    console.log("  p2  :", paras[2]?.replace(/\n/g, " ").slice(0, 120));
    console.log("  end :", paras[paras.length - 1]?.replace(/\n/g, " ").slice(0, 140));
  });
}
