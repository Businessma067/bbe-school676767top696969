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
const t1318 = walk(ch13)[0];
const ref = t1318.tactical_explanations;

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
      // Keep as stored in TS template literal content (\\n stays as backslash-n sequences? )
      // In the source, newlines are real newlines inside `...`, and \\ is escaped backslash for LaTeX.
      const text = s;
      exps.push(text);
    }
    tasks.push({ caseId, exps });
  }
  return tasks;
}

const tasks = extractTasks(src);
console.log("tasks", tasks.length, "exps", tasks.reduce((a, t) => a + t.exps.length, 0));

function features(text, label) {
  const lines = text.split("\n");
  const first = lines[0] || "";
  const paras = text.split(/\n\n+/);
  const bodyParas = paras.slice(1);
  const lastNonempty = text
    .trim()
    .split("\n")
    .filter(Boolean)
    .slice(-1)[0];
  const secondPara = bodyParas[1] || "";
  const firstBody = bodyParas[0] || "";

  return {
    label,
    headerFullStatement: /^\*\*[A-E]\) /.test(first),
    headerShortArrow: /^\*\*[A-E]\.\*\* → /.test(first),
    headerParenTF: /\((true|false)\)\s*$/i.test(first),
    headerArrowTF: /→\s*(True|False)\s*$/.test(first),
    firstBodyStartsThisClaim: /^This claim\b/.test(firstBody.trim()),
    firstBodyStartsConcept: /^(A |The |For |Clearing |“|Using |Write |Independence|Each |Side |Mean|Variance|Standard|Doubling|Raising|Inverting|Applying|Form |Evaluate |Invert |Both |Named|Named|Perfect|Percentage)/i.test(
      firstBody.trim()
    ) && !/^This claim\b/.test(firstBody.trim()),
    hasTrapLexicon:
      /\b(The trap|The instinct|tempting|standard slip|trap is|looks like|belongs to)\b/i.test(
        text
      ),
    hasPedagogyMeta:
      /\b(This claim asks|This claim reads|This claim is about|This claim tests|This claim runs|This claim checks|This claim compares|This claim concerns)\b/i.test(
        text
      ),
    closingClaimStyle:
      /\b(so the claim holds|the claim is false|exactly as the claim states|so the claim is false|the claimed .+ is false)\b/i.test(
        lastNonempty
      ) ||
      /\b(so the claim holds|the claim is false|exactly as the claim states)\b/i.test(
        text.slice(-200)
      ),
    closingStatementStyle:
      /\b(so the statement is (True|False)|the statement is (True|False)|Matching these .+ claim|Against the claim|Comparing this value with the claim|Matching this ratio to the claim)\b/i.test(
        text.slice(-250)
      ),
    hasItalicSingleStar: /(^|[^*])\*[^*\n]+\*(?!\*)/.test(text),
    hasEmDash: /—/.test(text),
    hasDoubleHyphenAsDash: /(^|[^\-])--([^\-]|$)/.test(text),
    wordCount: text.split(/\s+/).filter(Boolean).length,
    paraCount: paras.length,
    displayMathCount: (text.match(/\$\$/g) || []).length / 2,
    inlineMathCount: (() => {
      const noDisp = text.replace(/\$\$[\s\S]*?\$\$/g, "");
      return (noDisp.match(/\$/g) || []).length / 2;
    })(),
    firstLine: first,
    firstBodyPreview: firstBody.replace(/\n/g, " ").slice(0, 140),
    secondBodyPreview: secondPara.replace(/\n/g, " ").slice(0, 140),
    lastLine: lastNonempty,
  };
}

const refF = ref.map((t, i) =>
  features(t, "13.18-" + String.fromCharCode(65 + i))
);
console.log("\n=== 13.18 FEATURES ===");
for (const f of refF) {
  console.log(
    JSON.stringify(
      {
        label: f.label,
        header: f.firstLine,
        words: f.wordCount,
        paras: f.paraCount,
        math: f.displayMathCount,
        trap: f.hasTrapLexicon,
        thisClaim: f.firstBodyStartsThisClaim,
        closeStmt: f.closingStatementStyle,
        closeClaim: f.closingClaimStyle,
        firstBody: f.firstBodyPreview,
        last: f.lastLine,
      },
      null,
      0
    )
  );
}

const all = [];
for (const t of tasks) {
  t.exps.forEach((e, i) =>
    all.push({
      ...features(e, t.caseId + "-" + String.fromCharCode(65 + i)),
      caseId: t.caseId,
      letter: String.fromCharCode(65 + i),
    })
  );
}

const count = (pred) => all.filter(pred).length;
const stats = (arr) => {
  const s = [...arr].sort((a, b) => a - b);
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return {
    min: s[0],
    p25: s[Math.floor(s.length * 0.25)],
    med: s[Math.floor(s.length / 2)],
    p75: s[Math.floor(s.length * 0.75)],
    max: s[s.length - 1],
    mean: +mean.toFixed(1),
  };
};

console.log("\n=== CH8 AGGREGATES n=" + all.length + " ===");
const keys = [
  "headerFullStatement",
  "headerShortArrow",
  "headerParenTF",
  "headerArrowTF",
  "firstBodyStartsThisClaim",
  "hasTrapLexicon",
  "hasPedagogyMeta",
  "closingClaimStyle",
  "closingStatementStyle",
  "hasItalicSingleStar",
  "hasEmDash",
];
for (const k of keys) console.log(k, count((f) => f[k]));
console.log("wordCount", stats(all.map((f) => f.wordCount)));
console.log("paraCount", stats(all.map((f) => f.paraCount)));
console.log("displayMath", stats(all.map((f) => f.displayMathCount)));
console.log(
  "13.18 words/paras/math",
  ref.map((t) => [
    t.split(/\s+/).length,
    t.split(/\n\n+/).length,
    (t.match(/\$\$/g) || []).length / 2,
  ])
);

// Header pattern inventory
const headerPatterns = {};
for (const f of all) {
  let p = "other";
  if (f.headerFullStatement && f.headerParenTF) p = "**L) full stmt.**  (tf)";
  else if (f.headerShortArrow && f.headerArrowTF) p = "**L.** → Tf";
  else if (f.headerFullStatement) p = "**L) full stmt.** (no tf?)";
  else if (f.headerArrowTF) p = "arrow TF other";
  headerPatterns[p] = (headerPatterns[p] || 0) + 1;
}
console.log("\nheaderPatterns", headerPatterns);

// Closing inventory
const closePatterns = {};
for (const f of all) {
  const last = f.lastLine || "";
  let p = "other";
  if (/so the claim holds/i.test(last)) p = "so the claim holds";
  else if (/the claim is false/i.test(last)) p = "the claim is false";
  else if (/exactly as the claim states/i.test(last)) p = "exactly as claim states";
  else if (/so the statement is (True|False)/i.test(last))
    p = "so the statement is Tf";
  else if (/the statement is (True|False)/i.test(last))
    p = "the statement is Tf";
  else if (/Matching .* claim/i.test(last)) p = "Matching ... claim";
  else if (/claim holds/i.test(last)) p = "claim holds (other)";
  else if (/false\.?$/i.test(last)) p = "ends false";
  else if (/true\.?$/i.test(last)) p = "ends true";
  closePatterns[p] = (closePatterns[p] || 0) + 1;
}
console.log("closePatterns", closePatterns);

// Opening verb inventory for first body
const openPatterns = {};
for (const f of all) {
  const fb = (f.firstBodyPreview || "").trim();
  let p = "other";
  if (/^This claim asks/.test(fb)) p = "This claim asks";
  else if (/^This claim reads/.test(fb)) p = "This claim reads";
  else if (/^This claim is about/.test(fb)) p = "This claim is about";
  else if (/^This claim tests/.test(fb)) p = "This claim tests";
  else if (/^This claim runs/.test(fb)) p = "This claim runs";
  else if (/^This claim /.test(fb)) p = "This claim (other)";
  else if (/^The /.test(fb)) p = "The ...";
  else if (/^A /.test(fb)) p = "A ...";
  else if (/^For /.test(fb)) p = "For ...";
  else if (/^Both /.test(fb)) p = "Both ...";
  else if (/^Doubling|^Raising|^Inverting|^Applying|^Form |^Evaluate |^Invert /.test(fb))
    p = "Imperative/math move";
  openPatterns[p] = (openPatterns[p] || 0) + 1;
}
console.log("openPatterns", openPatterns);

// Trap paragraph position: usually 2nd body para in ch8
let trapInPara2 = 0;
for (const t of tasks) {
  for (const e of t.exps) {
    const paras = e.split(/\n\n+/);
    if (paras[2] && /\b(The trap|The instinct|tempting|standard slip)\b/i.test(paras[2]))
      trapInPara2++;
  }
}
console.log("trapOftenSecondBodyPara", trapInPara2);

// Per-task consistency: does every task use same header style?
let mixedHeaderTasks = 0;
for (const t of tasks) {
  const styles = new Set(
    t.exps.map((e) =>
      /^\*\*[A-E]\) /.test(e.split("\n")[0]) ? "full" : "other"
    )
  );
  if (styles.size > 1) mixedHeaderTasks++;
}
console.log("mixedHeaderTasks", mixedHeaderTasks);

// Length by letter
for (const L of "ABCDE") {
  const subset = all.filter((f) => f.letter === L);
  console.log(
    "letter",
    L,
    "words",
    stats(subset.map((f) => f.wordCount)),
    "math",
    stats(subset.map((f) => f.displayMathCount))
  );
}

// Dump a few representative full texts for qualitative
const samples = ["MATH 8.01", "MATH 8.25", "MATH 8.50"];
const out = {};
for (const id of samples) {
  const t = tasks.find((x) => x.caseId === id);
  out[id] = t.exps.map((e) => ({
    header: e.split("\n")[0],
    paras: e.split(/\n\n+/).length,
    words: e.split(/\s+/).length,
    structure: e.split(/\n\n+/).map((p, i) => ({
      i,
      preview: p.replace(/\n/g, " ").slice(0, 180),
    })),
  }));
}
out["MATH 13.18"] = ref.map((e) => ({
  header: e.split("\n")[0],
  paras: e.split(/\n\n+/).length,
  words: e.split(/\s+/).length,
  structure: e.split(/\n\n+/).map((p, i) => ({
    i,
    preview: p.replace(/\n/g, " ").slice(0, 180),
  })),
}));
fs.writeFileSync(
  "textbook/output/_audit_ch8_vs_1318_samples.json",
  JSON.stringify(out, null, 2)
);

// Phrase frequency: ch8-specific vs 13.18
const phrases = [
  "This claim",
  "The trap",
  "The instinct",
  "so the claim",
  "the statement is",
  "So the statement",
  "Matching these",
  "Against the claim",
  "exactly as the claim states",
  "standard slip",
  "tempting",
  "Form the",
  "Evaluate the",
  "Invert the",
  "Applying the",
];
console.log("\n=== PHRASE HITS ===");
for (const ph of phrases) {
  const re = new RegExp(ph.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  const ch8n = all.filter((f) => {
    const t = tasks
      .find((x) => f.label.startsWith(x.caseId))
      ?.exps.find((_, i) => f.letter === String.fromCharCode(65 + i));
    return false;
  });
  // recount properly
  let c8 = 0;
  for (const t of tasks) for (const e of t.exps) if (re.test(e)) c8++;
  let c13 = 0;
  for (const e of ref) if (re.test(e)) c13++;
  console.log(JSON.stringify(ph), "ch8", c8, "/250", "ref13.18", c13, "/5");
}

// Check whether ch8 restates full statement in header
let headerLen = all.map((f) => f.firstLine.length);
console.log("headerLen", stats(headerLen));
console.log(
  "13.18 headerLen",
  ref.map((e) => e.split("\n")[0].length)
);

// Math density: words per display math
const dens = all
  .filter((f) => f.displayMathCount > 0)
  .map((f) => f.wordCount / f.displayMathCount);
console.log("wordsPerDisplayMath", stats(dens));
console.log(
  "13.18 wordsPerDisplayMath",
  ref.map((t) => {
    const m = (t.match(/\$\$/g) || []).length / 2;
    return m ? t.split(/\s+/).length / m : null;
  })
);

// Second-person / coaching voice
const coach = [
  "watch the",
  "notice that",
  "do not",
  "don't",
  "you ",
  "we need",
  "we add",
  "we got",
  "Let us",
];
console.log("\n=== VOICE ===");
for (const ph of coach) {
  const re = new RegExp(ph, "i");
  let c8 = 0,
    c13 = 0;
  for (const t of tasks) for (const e of t.exps) if (re.test(e)) c8++;
  for (const e of ref) if (re.test(e)) c13++;
  console.log(JSON.stringify(ph), "ch8", c8, "ref", c13);
}

// Paragraph role fingerprint for ch8 A items
console.log("\n=== TYPICAL 8.01-8.05 A STRUCTURE ===");
for (const t of tasks.slice(0, 5)) {
  const e = t.exps[0];
  const paras = e.split(/\n\n+/);
  console.log(
    t.caseId,
    "paras",
    paras.length,
    paras.map((p, i) => i + ":" + p.replace(/\n/g, " ").slice(0, 70))
  );
}

console.log("\n=== 13.18 STRUCTURE ===");
ref.forEach((e, i) => {
  const paras = e.split(/\n\n+/);
  console.log(
    "13.18-" + String.fromCharCode(65 + i),
    "paras",
    paras.length,
    paras.map((p, j) => j + ":" + p.replace(/\n/g, " ").slice(0, 70))
  );
});

// Detect "answer in opening sentence" pattern in ch8
let answerInOpen = 0;
for (const t of tasks) {
  for (const e of t.exps) {
    const firstBody = e.split(/\n\n+/)[1] || "";
    if (
      /gives \$|is about|is \$|predicts|comes out|equals|which stays|three units|just above|just below/i.test(
        firstBody
      ) && /^This claim/.test(firstBody.trim())
    )
      answerInOpen++;
  }
}
console.log("thisClaimOpenAlsoPreviewsAnswer", answerInOpen);

// Systematic deviations list candidates
const deviations = {
  header_restates_full_statement: count((f) => f.headerFullStatement),
  header_lowercase_tf_in_parens: count((f) => f.headerParenTF),
  opens_with_This_claim_meta: count((f) => f.firstBodyStartsThisClaim),
  contains_trap_instinct_coaching: count((f) => f.hasTrapLexicon),
  closes_with_claim_not_statement: count((f) => f.closingClaimStyle),
  uses_italic_emphasis_single_star: count((f) => f.hasItalicSingleStar),
  uses_em_dash: count((f) => f.hasEmDash),
};
console.log("\n=== DEVIATION COUNTS ===", deviations);

// Save per-explanation feature table
fs.writeFileSync(
  "textbook/output/_audit_ch8_vs_1318_features.json",
  JSON.stringify(
    {
      ref: refF,
      ch8: all.map(({ firstBodyPreview, secondBodyPreview, ...rest }) => rest),
      deviations,
      headerPatterns,
      closePatterns,
      openPatterns,
    },
    null,
    2
  )
);
console.log("\nWrote audit JSON files.");
