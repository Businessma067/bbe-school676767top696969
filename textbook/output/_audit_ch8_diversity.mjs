import fs from "fs";

const path = "C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch8-power-functions.ts";
const src = fs.readFileSync(path, "utf8");

const taskStarts = [];
const idRe = /id: `math-8-(\d+)`/g;
let m;
while ((m = idRe.exec(src)) !== null) {
  taskStarts.push({ n: +m[1], index: m.index });
}

function extractFieldArray(taskSrc, field) {
  const marker = field + ": [";
  const i = taskSrc.indexOf(marker);
  if (i < 0) return null;
  let j = i + marker.length;
  let depth = 1;
  let inTick = false;
  let inStr = null;
  let esc = false;
  for (; j < taskSrc.length; j++) {
    const c = taskSrc[j];
    if (inTick) {
      if (c === "\\" && !esc) {
        esc = true;
        continue;
      }
      if (c === "`" && !esc) inTick = false;
      esc = false;
      continue;
    }
    if (inStr) {
      if (c === "\\" && !esc) {
        esc = true;
        continue;
      }
      if (c === inStr && !esc) inStr = null;
      esc = false;
      continue;
    }
    if (c === "`") {
      inTick = true;
      continue;
    }
    if (c === "'" || c === '"') {
      inStr = c;
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return taskSrc.slice(i + marker.length, j);
    }
  }
  return null;
}

function extractFieldString(taskSrc, field) {
  const marker = field + ": `";
  const i = taskSrc.indexOf(marker);
  if (i < 0) return null;
  let j = i + marker.length;
  let esc = false;
  for (; j < taskSrc.length; j++) {
    const c = taskSrc[j];
    if (c === "\\" && !esc) {
      esc = true;
      continue;
    }
    if (c === "`" && !esc) return taskSrc.slice(i + marker.length, j);
    esc = false;
  }
  return null;
}

function splitTemplateLiterals(arrBody) {
  const out = [];
  let i = 0;
  while (i < arrBody.length) {
    while (i < arrBody.length && /[\s,]/.test(arrBody[i])) i++;
    if (i >= arrBody.length) break;
    if (arrBody[i] !== "`") {
      i++;
      continue;
    }
    i++;
    let esc = false;
    const start = i;
    for (; i < arrBody.length; i++) {
      const c = arrBody[i];
      if (c === "\\" && !esc) {
        esc = true;
        continue;
      }
      if (c === "`" && !esc) {
        out.push(arrBody.slice(start, i));
        i++;
        break;
      }
      esc = false;
    }
  }
  return out;
}

function countDisplayMath(text) {
  const blocks = text.match(/\$\$[\s\S]*?\$\$/g);
  return blocks ? blocks.length : 0;
}

function proseParagraphs(text, { overview = false } = {}) {
  let t = text.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n+/i, "");
  if (overview) {
    // Keep section headers as structural, but still count prose blocks between math
  }
  t = t.replace(/\$\$[\s\S]*?\$\$/g, "\n\n");
  const parts = t
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  return parts.filter((p) => {
    const letters = (p.match(/[A-Za-z]/g) || []).length;
    // substantial prose (exclude lone labels / short tags)
    return letters >= 20;
  });
}

function allParagraphs(text) {
  let t = text.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n+/i, "");
  t = t.replace(/\$\$[\s\S]*?\$\$/g, "\n\n");
  return t
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

function wordCount(text) {
  const cleaned = text
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/[*_\\{}]/g, " ");
  return cleaned.split(/\s+/).filter(Boolean).length;
}

function openingPattern(text) {
  const body = text.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n+/i, "").trim();
  const firstPara = body.split(/\n\s*\n/)[0] || "";
  const first50 = firstPara.slice(0, 80).replace(/\s+/g, " ");
  // classify opener type
  let type = "other";
  if (/^(A |An |The )?(coefficient|exponent|scale factor|level|rate|jump|difference|ratio|law|model|certification|inversion|doubling|percentage|bench|recorded|shape factor)/i.test(firstPara))
    type = "abstract-noun-lede";
  if (/^(Running|Pushing|Inverting|Splitting|Widening|Raising|Applying|Comparing|Checking|Dividing|Multiplying|Substituting|Cancel)/i.test(firstPara))
    type = "gerund-lede";
  if (/^\$\$/.test(body)) type = "math-first";
  if (/\bis (carried|given|fixed|recovered|stated)/i.test(firstPara)) type = "is-passive-lede";
  return { type, first50 };
}

function structuralFeatures(text) {
  const hasList = /^\s*[-*]|\n\s*[-*]\s|\n\d+\.\s/m.test(text);
  const hasTable = /\|.+\|/.test(text) || /\\begin\{array\}/.test(text);
  const hasPartHeaders = /\*\*Part \d/.test(text);
  const hasNumberedSteps = /\*\*\d+\.\*\*/.test(text) || /\n\d+\.\s/.test(text);
  const hasTag = /\\tag\{/.test(text);
  const hasApprox = /\\approx|≈/.test(text);
  const hasCounter = /counter|instead|would require|but not|does not|against the claimed|belongs to|mistaken|trap|wrong figure/i.test(text);
  const hasBoundary = /ceiling|floor|cap|limit|threshold|boundary|edge|rated|certified|trips/i.test(text);
  const hasScale = /doubl|tripling|scale factor|multiplier|k\^|percent|%/i.test(text);
  const hasUnit = /per minute|metres|ms\b|kW|litres|kg|hours|minutes|N\b|newton/i.test(text);
  const hasCompare = /versus|vs\.|compared|rival|competitor|Plan A|Plan B|Turbine|procedure/i.test(text);
  return { hasList, hasTable, hasPartHeaders, hasNumberedSteps, hasTag, hasApprox, hasCounter, hasBoundary, hasScale, hasUnit, hasCompare };
}

const tasks = [];
for (let ti = 0; ti < taskStarts.length; ti++) {
  const start = taskStarts[ti].index;
  const end = ti + 1 < taskStarts.length ? taskStarts[ti + 1].index : src.length;
  const taskSrc = src.slice(start, end);
  const n = taskStarts[ti].n;
  const explArr = extractFieldArray(taskSrc, "tactical_explanations");
  const overview = extractFieldString(taskSrc, "solution_overview");
  const titleMatch = taskSrc.match(/title: `([^`]+)`/);
  const expls = explArr ? splitTemplateLiterals(explArr) : [];
  const explStats = expls.map((e, idx) => {
    const dm = countDisplayMath(e);
    const prose = proseParagraphs(e);
    const allP = allParagraphs(e);
    const words = wordCount(e);
    const letter = String.fromCharCode(65 + idx);
    const opener = openingPattern(e);
    const feats = structuralFeatures(e);
    return {
      letter,
      dm,
      proseCount: prose.length,
      allParaCount: allP.length,
      words,
      openerType: opener.type,
      first50: opener.first50,
      ...feats,
      textLen: e.length,
    };
  });
  const ovDm = overview ? countDisplayMath(overview) : 0;
  const ovProse = overview ? proseParagraphs(overview, { overview: true }) : [];
  const ovAll = overview ? allParagraphs(overview) : [];
  const ovWords = overview ? wordCount(overview) : 0;
  const ovFeats = overview ? structuralFeatures(overview) : {};
  tasks.push({
    n,
    title: titleMatch ? titleMatch[1] : "",
    explStats,
    ovDm,
    ovProseCount: ovProse.length,
    ovAllPara: ovAll.length,
    ovWords,
    ovFeats,
  });
}

function hist(arr, key) {
  const h = {};
  for (const x of arr) {
    const k = String(x[key]);
    h[k] = (h[k] || 0) + 1;
  }
  return Object.fromEntries(Object.entries(h).sort((a, b) => +a[0] - +b[0] || a[0].localeCompare(b[0])));
}

function pct(arr, p) {
  if (!arr.length) return null;
  return arr[Math.floor((arr.length - 1) * p)];
}

const allExpl = [];
for (const t of tasks) {
  for (const e of t.explStats) {
    allExpl.push({ task: t.n, ...e });
  }
}

const report = [];
report.push(`TASK_COUNT ${tasks.length}`);
report.push(`EXPL_COUNT ${allExpl.length}`);

report.push("\n=== TACTICAL: display-math blocks per explanation ===");
report.push(JSON.stringify(hist(allExpl, "dm")));

report.push("\n=== TACTICAL: substantial prose paragraphs (>=20 letters) ===");
report.push(JSON.stringify(hist(allExpl, "proseCount")));

report.push("\n=== TACTICAL: all blank-line chunks ===");
report.push(JSON.stringify(hist(allExpl, "allParaCount")));

const combo = {};
for (const e of allExpl) {
  const k = `${e.dm}dm/${e.proseCount}p`;
  combo[k] = (combo[k] || 0) + 1;
}
report.push("\n=== TACTICAL combo dm/prose (sorted by count) ===");
Object.entries(combo)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => report.push(`${v}\t${k}\t${((100 * v) / allExpl.length).toFixed(1)}%`));

const words = allExpl.map((e) => e.words).sort((a, b) => a - b);
report.push("\n=== TACTICAL words ===");
report.push(
  JSON.stringify({
    min: words[0],
    p10: pct(words, 0.1),
    p25: pct(words, 0.25),
    med: pct(words, 0.5),
    p75: pct(words, 0.75),
    p90: pct(words, 0.9),
    max: words[words.length - 1],
    mean: Math.round(words.reduce((a, b) => a + b, 0) / words.length),
  })
);

report.push("\n=== OVERVIEW: display-math ===");
report.push(JSON.stringify(hist(tasks.map((t) => ({ dm: t.ovDm })), "dm")));
report.push("\n=== OVERVIEW: substantial prose paragraphs ===");
report.push(JSON.stringify(hist(tasks.map((t) => ({ p: t.ovProseCount })), "p")));
report.push("\n=== OVERVIEW: all blank-line chunks ===");
report.push(JSON.stringify(hist(tasks.map((t) => ({ p: t.ovAllPara })), "p")));
const ovWords = tasks.map((t) => t.ovWords).sort((a, b) => a - b);
report.push("\n=== OVERVIEW words ===");
report.push(
  JSON.stringify({
    min: ovWords[0],
    p10: pct(ovWords, 0.1),
    p25: pct(ovWords, 0.25),
    med: pct(ovWords, 0.5),
    p75: pct(ovWords, 0.75),
    p90: pct(ovWords, 0.9),
    max: ovWords[ovWords.length - 1],
    mean: Math.round(ovWords.reduce((a, b) => a + b, 0) / ovWords.length),
  })
);

report.push("\n=== RANGE SUMMARIES ===");
for (const range of [
  [1, 30],
  [31, 60],
  [61, 87],
]) {
  const slice = tasks.filter((t) => t.n >= range[0] && t.n <= range[1]);
  const expls = slice.flatMap((t) => t.explStats);
  const avgDm = (expls.reduce((a, e) => a + e.dm, 0) / expls.length).toFixed(2);
  const avgP = (expls.reduce((a, e) => a + e.proseCount, 0) / expls.length).toFixed(2);
  const avgW = Math.round(expls.reduce((a, e) => a + e.words, 0) / expls.length);
  const dominant = Object.entries(
    expls.reduce((h, e) => {
      const k = `${e.dm}/${e.proseCount}`;
      h[k] = (h[k] || 0) + 1;
      return h;
    }, {})
  ).sort((a, b) => b[1] - a[1]);
  report.push(
    `Range ${range[0]}-${range[1]}: n=${expls.length} avgDm=${avgDm} avgProse=${avgP} avgW=${avgW}`
  );
  report.push(`  top combos: ${dominant.slice(0, 6).map(([k, v]) => `${k}:${v}`).join(", ")}`);
  const pct22ish = expls.filter((e) => e.dm >= 2 && e.dm <= 3 && e.proseCount >= 2 && e.proseCount <= 3).length;
  report.push(`  share in 2-3dm & 2-3p: ${pct22ish}/${expls.length} (${((100 * pct22ish) / expls.length).toFixed(1)}%)`);
}

// opener types
report.push("\n=== OPENER TYPES (tactical) ===");
report.push(JSON.stringify(hist(allExpl, "openerType")));

// structural rarity
const featKeys = ["hasList", "hasTable", "hasNumberedSteps", "hasCounter", "hasBoundary", "hasScale", "hasCompare"];
report.push("\n=== STRUCTURAL FEATURE RATES (tactical) ===");
for (const k of featKeys) {
  const n = allExpl.filter((e) => e[k]).length;
  report.push(`${k}: ${n}/${allExpl.length} (${((100 * n) / allExpl.length).toFixed(1)}%)`);
}

report.push("\n=== OVERVIEW FEATURE RATES ===");
for (const k of ["hasList", "hasTable", "hasPartHeaders", "hasNumberedSteps", "hasTag"]) {
  const n = tasks.filter((t) => t.ovFeats?.[k]).length;
  report.push(`${k}: ${n}/${tasks.length}`);
}

// Most uniform tasks: all 5 explanations have same dm/prose signature, or very low variance
report.push("\n=== MOST UNIFORM TASKS (by expl signature variance) ===");
const taskUniform = tasks.map((t) => {
  const sigs = t.explStats.map((e) => `${e.dm}/${e.proseCount}`);
  const unique = new Set(sigs).size;
  const avgDm = t.explStats.reduce((a, e) => a + e.dm, 0) / 5;
  const avgP = t.explStats.reduce((a, e) => a + e.proseCount, 0) / 5;
  const varDm =
    t.explStats.reduce((a, e) => a + (e.dm - avgDm) ** 2, 0) / 5;
  const varP =
    t.explStats.reduce((a, e) => a + (e.proseCount - avgP) ** 2, 0) / 5;
  const allInBand = t.explStats.every(
    (e) => e.dm >= 2 && e.dm <= 3 && e.proseCount >= 2 && e.proseCount <= 3
  );
  const avgW = Math.round(t.explStats.reduce((a, e) => a + e.words, 0) / 5);
  return {
    n: t.n,
    title: t.title,
    uniqueSigs: unique,
    sigs: sigs.join("|"),
    varDm: +varDm.toFixed(3),
    varP: +varP.toFixed(3),
    allInBand,
    avgDm: +avgDm.toFixed(2),
    avgP: +avgP.toFixed(2),
    avgW,
    ovDm: t.ovDm,
    ovP: t.ovProseCount,
    ovW: t.ovWords,
  };
});

const mostRepetitive = [...taskUniform]
  .filter((t) => t.allInBand)
  .sort((a, b) => a.uniqueSigs - b.uniqueSigs || a.varDm + a.varP - (b.varDm + b.varP) || a.avgW - b.avgW);

report.push("Tasks with all 5 expl in 2-3dm/2-3p band, sorted by signature poverty:");
for (const t of mostRepetitive.slice(0, 40)) {
  report.push(
    `  #${t.n} uniq=${t.uniqueSigs} avgW=${t.avgW} avgDm=${t.avgDm} avgP=${t.avgP} ovDm=${t.ovDm} ovP=${t.ovP} | ${t.sigs} | ${t.title}`
  );
}

// Shortest / longest explanations for expand/shorten candidates
report.push("\n=== SHORTEST EXPLANATIONS (shorten candidates only if padded) ===");
[...allExpl]
  .sort((a, b) => a.words - b.words)
  .slice(0, 25)
  .forEach((e) =>
    report.push(
      `  ${e.task}${e.letter} words=${e.words} dm=${e.dm} p=${e.proseCount} | ${e.first50}`
    )
  );

report.push("\n=== LONGEST EXPLANATIONS ===");
[...allExpl]
  .sort((a, b) => b.words - a.words)
  .slice(0, 15)
  .forEach((e) =>
    report.push(
      `  ${e.task}${e.letter} words=${e.words} dm=${e.dm} p=${e.proseCount} | ${e.first50}`
    )
  );

// Explanations with exactly 2dm/2p — the modal "uniform" template
report.push("\n=== COUNT of exact 2dm/2p by range ===");
for (const range of [
  [1, 30],
  [31, 60],
  [61, 87],
]) {
  const n = allExpl.filter(
    (e) => e.task >= range[0] && e.task <= range[1] && e.dm === 2 && e.proseCount === 2
  ).length;
  const tot = allExpl.filter((e) => e.task >= range[0] && e.task <= range[1]).length;
  report.push(`  ${range[0]}-${range[1]}: ${n}/${tot} (${((100 * n) / tot).toFixed(1)}%)`);
}

report.push("\n=== COUNT of 2-3dm & 2-3p band by range ===");
for (const range of [
  [1, 30],
  [31, 60],
  [61, 87],
]) {
  const n = allExpl.filter(
    (e) =>
      e.task >= range[0] &&
      e.task <= range[1] &&
      e.dm >= 2 &&
      e.dm <= 3 &&
      e.proseCount >= 2 &&
      e.proseCount <= 3
  ).length;
  const tot = allExpl.filter((e) => e.task >= range[0] && e.task <= range[1]).length;
  report.push(`  ${range[0]}-${range[1]}: ${n}/${tot} (${((100 * n) / tot).toFixed(1)}%)`);
}

// Per-letter patterns (A often recovery, E often boundary)
report.push("\n=== BY LETTER: avg dm / prose / words ===");
for (const letter of ["A", "B", "C", "D", "E"]) {
  const subset = allExpl.filter((e) => e.letter === letter);
  const avgDm = (subset.reduce((a, e) => a + e.dm, 0) / subset.length).toFixed(2);
  const avgP = (subset.reduce((a, e) => a + e.proseCount, 0) / subset.length).toFixed(2);
  const avgW = Math.round(subset.reduce((a, e) => a + e.words, 0) / subset.length);
  report.push(`  ${letter}: avgDm=${avgDm} avgP=${avgP} avgW=${avgW}`);
}

// Tasks where ALL five are 2/2 or 3/2 or 2/3 — hyper-uniform
report.push("\n=== HYPER-UNIFORM: uniqueSigs==1 (all five identical shape) ===");
taskUniform
  .filter((t) => t.uniqueSigs === 1)
  .forEach((t) => report.push(`  #${t.n} ${t.sigs} avgW=${t.avgW} | ${t.title}`));

report.push("\n=== NEAR-UNIFORM: uniqueSigs==2 and allInBand ===");
taskUniform
  .filter((t) => t.uniqueSigs === 2 && t.allInBand)
  .forEach((t) => report.push(`  #${t.n} ${t.sigs} avgW=${t.avgW} | ${t.title}`));

// Outliers for diversity already present
report.push("\n=== ALREADY DIVERSE (uniqueSigs>=4 OR outside band) ===");
taskUniform
  .filter((t) => t.uniqueSigs >= 4 || !t.allInBand)
  .slice(0, 30)
  .forEach((t) =>
    report.push(
      `  #${t.n} uniq=${t.uniqueSigs} band=${t.allInBand} ${t.sigs} avgW=${t.avgW} | ${t.title}`
    )
  );

// Overview template: Part 1/2/3 structure
report.push("\n=== OVERVIEW STRUCTURE ===");
let part123 = 0;
let hasAnswerLine = 0;
for (const t of tasks) {
  // re-read overview from file via tasks - we didn't store text; recount from src
}
// re-extract briefly
for (let ti = 0; ti < taskStarts.length; ti++) {
  const start = taskStarts[ti].index;
  const end = ti + 1 < taskStarts.length ? taskStarts[ti + 1].index : src.length;
  const taskSrc = src.slice(start, end);
  const overview = extractFieldString(taskSrc, "solution_overview") || "";
  if (/\*\*Part 1:/.test(overview) && /\*\*Part 2:/.test(overview) && /\*\*Part 3:/.test(overview))
    part123++;
  if (/\*\*Answer\.\*\*/.test(overview)) hasAnswerLine++;
}
report.push(`Part1-2-3 template: ${part123}/${tasks.length}`);
report.push(`Answer line: ${hasAnswerLine}/${tasks.length}`);

// Write detailed JSON for further inspection
const detail = {
  tasks: taskUniform,
  explanations: allExpl.map(({ textLen, first50, ...rest }) => ({ ...rest, first50, textLen })),
};
fs.writeFileSync(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch8_diversity_detail.json",
  JSON.stringify(detail, null, 2)
);

const outPath = "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch8_diversity_report.txt";
fs.writeFileSync(outPath, report.join("\n"));
console.log(report.join("\n"));
console.log("\nWrote", outPath);
