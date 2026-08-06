/**
 * Deep quality audit for Economics Full Course cases Ch2 & Ch3.
 * Read-only analysis; does not modify case data.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const FILES = {
  ch2: path.join(root, "src/data/economics-cases-ch2-subtopics.json"),
  ch3: path.join(root, "src/data/economics-cases-ch3-subtopics.json"),
};

const STOP = new Set([
  "a","an","the","and","or","of","to","in","on","for","with","by","as","is","are","be","been","was","were",
  "that","this","these","those","it","its","at","from","than","then","into","over","under","between",
  "about","not","no","yes","if","when","while","which","who","whom","what","how","does","do","did",
  "can","could","should","would","may","might","must","will","shall","have","has","had","their","there",
  "they","them","he","she","his","her","we","our","you","your","i","me","my",
]);

function normalize(s) {
  return String(s)
    .toLowerCase()
    .replace(/[€$£]/g, "euro")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s) {
  return normalize(s)
    .split(" ")
    .filter((t) => t.length > 1 && !STOP.has(t));
}

function jaccard(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  if (!A.size && !B.size) return 1;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
}

const FORMULA_HINT =
  /\([^)]*(divided by|calculated as|defined as|equals|means)[^)]*\)/i;
const ABBREV =
  /\b(EBIT|EBITDA|ROE|ROCE|EPS|P&L|BS|IS|CF)\b/g;
const META =
  /on cash[- ]flow extract\s*n\b|see the extract prepared for case|cash[- ]flow extract|prepared for case|according to the extract above|using the extract|from the (p&l|balance sheet|cash flow) extract/i;
const BANNED =
  /\b(tina|steve|at&s|gerstenmayer|greenpeace|red cross|fuhrmann notes|world wildlife)\b/i;
const BANNED_EXTRA = /fuhrmann\s+notes|world\s+wildlife|at\s*&\s*s/i;

const CALC_QUAL =
  /\b(calculat|comput|deriv|equals|equal to|ratio|margin|percent|percentage|divided|multiply|minus|plus|subtract|add(?:ing|ed)?|difference|sum of|product of|after tax|before tax|net of|implied|implies|therefore|hence|measure|indicator|formula|definitionally|by definition)\b/i;

const COMPARISON =
  /\b(greater than|less than|higher than|lower than|exceeds|falls short|above|below|more than|smaller than|larger than|equals?|identical to|same as|matches)\b/i;

const LINE_ITEMISH =
  /\b(revenue|sales|turnover|cost of goods|cogs|gross profit|operating (?:profit|income|expense)|ebit|ebitda|net (?:profit|income|loss)|cash (?:flow|inflow|outflow)|equity|liabilit(?:y|ies)|asset|inventory|receivable|payable|depreciation|amortisation|amortization|interest (?:expense|income)|dividend|retained earnings|balance sheet|profit and loss|p&l|working capital)\b/i;

const EURO_AMT = /(?:€\s*\d[\d.,]*|\d[\d.,]*\s*(?:euros?|eur)\b|\b\d{1,3}(?:[.,]\d{3})+(?:[.,]\d+)?\s*euros?\b)/i;
const HAS_NUMBERS = /\d/;
const TABLEISH = /\b(table|extract|figure|schedule|ledger|trial balance|accounts?|line items?|shown below|following (?:figures?|data|numbers?))\b|€|\beuros?\b|\beur\b|\d[\d.,]*\s*%/i;
const COST_LIFE_GIVEN =
  /\b(cost(?:s|ing)?|purchase price|acquisition|useful life|residual|scrap|depreciat|amortis|amortiz|years?|months?|€|\beuros?\b|\beur\b|\d)\b/i;

function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

function sampleN(arr, n, seed) {
  const rnd = seededRandom(seed);
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function auditChapter(name, cases) {
  const bySubsection = {};
  for (const c of cases) {
    bySubsection[c.subsection] = (bySubsection[c.subsection] || 0) + 1;
  }

  // Exact duplicates (normalized statements across cases)
  const normMap = new Map(); // norm -> [{case_id, idx, text}]
  for (const c of cases) {
    (c.statements || []).forEach((st, idx) => {
      const n = normalize(st);
      if (!n) return;
      if (!normMap.has(n)) normMap.set(n, []);
      normMap.get(n).push({ case_id: c.case_id, idx, text: st });
    });
  }
  const exactDupGroups = [...normMap.entries()]
    .filter(([, occ]) => occ.length >= 2)
    .map(([norm, occ]) => ({
      normalized: norm.slice(0, 160),
      count: occ.length,
      case_ids: [...new Set(occ.map((o) => o.case_id))],
      occurrences: occ.map((o) => ({ case_id: o.case_id, idx: o.idx, text: o.text.slice(0, 140) })),
    }))
    .sort((a, b) => b.count - a.count);
  const topExactOffenders = exactDupGroups.slice(0, 15);

  // Within-case near-duplicates Jaccard >= 0.78
  const withinNear = [];
  for (const c of cases) {
    const sts = c.statements || [];
    const toks = sts.map(tokens);
    for (let i = 0; i < sts.length; i++) {
      for (let j = i + 1; j < sts.length; j++) {
        const jac = jaccard(toks[i], toks[j]);
        if (jac >= 0.78) {
          withinNear.push({
            case_id: c.case_id,
            i,
            j,
            jaccard: Math.round(jac * 1000) / 1000,
            a: sts[i].slice(0, 140),
            b: sts[j].slice(0, 140),
          });
        }
      }
    }
  }

  // Cross-case near-duplicate pairs Jaccard >= 0.90
  // Index statements as {case_id, idx, tokens, text, norm}
  const allStmts = [];
  for (const c of cases) {
    (c.statements || []).forEach((st, idx) => {
      allStmts.push({
        case_id: c.case_id,
        subsection: c.subsection,
        idx,
        text: st,
        norm: normalize(st),
        toks: tokens(st),
      });
    });
  }
  // Skip exact matches already counted; use token-signature buckets to reduce O(n^2)
  const buckets = new Map();
  for (let i = 0; i < allStmts.length; i++) {
    const t = allStmts[i].toks;
    // key by sorted first 3 unique tokens (or all if fewer)
    const uniq = [...new Set(t)].sort();
    const keys = new Set();
    if (uniq.length === 0) keys.add("__empty__");
    else {
      for (let k = 0; k < Math.min(3, uniq.length); k++) keys.add(uniq[k]);
      // also full first-3 combo
      keys.add(uniq.slice(0, 3).join("|"));
    }
    for (const key of keys) {
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(i);
    }
  }
  const seenPairs = new Set();
  const crossNear = [];
  for (const idxs of buckets.values()) {
    if (idxs.length < 2 || idxs.length > 800) continue; // skip huge buckets
    for (let a = 0; a < idxs.length; a++) {
      for (let b = a + 1; b < idxs.length; b++) {
        const i = idxs[a], j = idxs[b];
        if (i === j) continue;
        const A = allStmts[i], B = allStmts[j];
        if (A.case_id === B.case_id) continue;
        if (A.norm === B.norm) continue; // exact handled separately
        const pairKey = A.case_id < B.case_id
          ? `${A.case_id}#${A.idx}|${B.case_id}#${B.idx}`
          : `${B.case_id}#${B.idx}|${A.case_id}#${A.idx}`;
        if (seenPairs.has(pairKey)) continue;
        seenPairs.add(pairKey);
        const jac = jaccard(A.toks, B.toks);
        if (jac >= 0.9) {
          crossNear.push({
            jaccard: Math.round(jac * 1000) / 1000,
            a: { case_id: A.case_id, idx: A.idx, text: A.text.slice(0, 140) },
            b: { case_id: B.case_id, idx: B.idx, text: B.text.slice(0, 140) },
          });
        }
      }
    }
  }
  crossNear.sort((x, y) => y.jaccard - x.jaccard);

  // Formula hints
  const formulaHints = [];
  for (const c of cases) {
    (c.statements || []).forEach((st, idx) => {
      const m = st.match(FORMULA_HINT);
      if (m) formulaHints.push({ case_id: c.case_id, idx, match: m[0], text: st.slice(0, 160) });
    });
  }

  // Abbreviations
  const abbrevs = [];
  for (const c of cases) {
    const blob = [c.context, ...(c.statements || []), ...(c.tactical_explanations || [])].join("\n");
    const found = new Set();
    let m;
    const re = new RegExp(ABBREV.source, "g");
    while ((m = re.exec(blob))) found.add(m[1]);
    // also check statements individually for reporting
    (c.statements || []).forEach((st, idx) => {
      const hits = [...st.matchAll(new RegExp(ABBREV.source, "g"))].map((x) => x[1]);
      if (hits.length) {
        abbrevs.push({ case_id: c.case_id, idx, hits: [...new Set(hits)], text: st.slice(0, 140) });
      }
    });
    // context-only
    const ctxHits = [...(c.context || "").matchAll(new RegExp(ABBREV.source, "g"))].map((x) => x[1]);
    if (ctxHits.length && !abbrevs.some((a) => a.case_id === c.case_id && a.idx === -1)) {
      // only add context hit if no statement hit for same abbrevs already covering
    }
  }

  // Meta labels
  const metaLabels = [];
  for (const c of cases) {
    const fields = [
      ["context", c.context],
      ...((c.statements || []).map((st, idx) => [`statement[${idx}]`, st])),
    ];
    for (const [field, text] of fields) {
      if (META.test(text || "")) {
        metaLabels.push({ case_id: c.case_id, field, text: String(text).slice(0, 160) });
      }
    }
  }

  // Obvious read-offs
  const readOffs = [];
  for (const c of cases) {
    (c.statements || []).forEach((st, idx) => {
      if (!COMPARISON.test(st)) return;
      if (CALC_QUAL.test(st)) return;
      // two line-itemish mentions (crude: count matches)
      const items = st.match(new RegExp(LINE_ITEMISH.source, "gi")) || [];
      if (items.length >= 2) {
        readOffs.push({ case_id: c.case_id, idx, text: st.slice(0, 160), items });
      }
    });
  }

  // Orphan euro amounts
  const orphanEuros = [];
  for (const c of cases) {
    const ctx = c.context || "";
    const ctxHasTableOrNums = TABLEISH.test(ctx) || EURO_AMT.test(ctx) || HAS_NUMBERS.test(ctx);
    (c.statements || []).forEach((st, idx) => {
      if (!EURO_AMT.test(st)) return;
      // statement itself lacks cost/life givens? if it has euro AND no broader cost/life framing beyond the amount itself
      // User: "when context has no table/numbers and statement lacks cost/life givens"
      if (ctxHasTableOrNums) return;
      if (COST_LIFE_GIVEN.test(st)) {
        // still flag if the ONLY numbers are the orphan amount and no cost/life vocabulary beyond euro
        // reinterpret: statement lacks cost/life givens means no cost/useful life language
        const withoutEuro = st.replace(EURO_AMT, " ");
        if (/\b(cost|purchase|acquisition|useful life|residual|scrap|depreciat|amortis|amortiz|years?|months?)\b/i.test(withoutEuro)) {
          return; // has givens
        }
      }
      // context has no numbers/table — statement has euro → orphan
      orphanEuros.push({ case_id: c.case_id, idx, text: st.slice(0, 160), context_snip: ctx.slice(0, 100) });
    });
  }

  // Banned wording
  const banned = [];
  for (const c of cases) {
    const parts = [
      ["context", c.context],
      ...((c.statements || []).map((st, i) => [`statement[${i}]`, st])),
      ...((c.tactical_explanations || []).map((t, i) => [`explanation[${i}]`, t])),
      ["title", c.title],
    ];
    for (const [field, text] of parts) {
      if (!text) continue;
      if (BANNED.test(text) || BANNED_EXTRA.test(text)) {
        const m = text.match(BANNED) || text.match(BANNED_EXTRA);
        banned.push({ case_id: c.case_id, field, match: m?.[0], text: String(text).slice(0, 160) });
      }
    }
  }

  // Sample 8 random cases — textbook vs invented
  const sample = sampleN(cases, 8, name === "ch2" ? 20260207 : 30360308).map((c) => {
    const statements = c.statements || [];
    // heuristic judge
    const jargonHits = statements.filter((st) =>
      /\b(synergy|paradigm|disrupt|ecosystem|moonshot|growth hack|kpi dashboard|north star|stakeholder value proposition|blue ocean|lean startup)\b/i.test(st)
    ).length;
    const textbookish = statements.filter((st) =>
      /\b(scarcity|economis|household|entrepreneur|opportunity cost|supply|demand|price|market|goods?|services?|need|want|exchange|barter|factor|capital|labour|labor|production|consumption|utility|elasticity|cost|revenue|profit|margin|balance|asset|liabilit|equity|cash flow|invest|saving|interest|inflation|tax|gdp|unemployment|circular flow|speciali[sz]ation|division of labour|productivity|fixed cost|variable cost|break[- ]even|contribution|depreciation|amortisation)\b/i.test(st)
    ).length;
    let verdict = "textbook_fuhrmann_likely";
    let note = "Statements use core micro/business-economics vocabulary consistent with school texts.";
    if (jargonHits >= 1) {
      verdict = "invented_jargon_risk";
      note = "Contains buzzword/jargon atypical of Fuhrmann textbook voice.";
    } else if (textbookish < statements.length * 0.4) {
      verdict = "mixed_or_thin";
      note = "Fewer textbook trigger terms; may be scenario-specific narrative rather than jargon.";
    }
    return {
      case_id: c.case_id,
      title: c.title,
      subsection: c.subsection,
      context: (c.context || "").slice(0, 180),
      statements: statements.map((s) => s.slice(0, 120)),
      verdict,
      note,
      textbook_keyword_hits: textbookish,
      jargon_hits: jargonHits,
    };
  });

  return {
    chapter: name,
    total_cases: cases.length,
    by_subsection: bySubsection,
    exact_duplicate_statements: {
      group_count: exactDupGroups.length,
      statement_occurrences_in_dups: exactDupGroups.reduce((s, g) => s + g.count, 0),
      top_offenders: topExactOffenders,
      all_groups: exactDupGroups,
    },
    within_case_near_duplicates: {
      threshold: 0.78,
      pair_count: withinNear.length,
      pairs: withinNear.slice(0, 50),
      all_pairs: withinNear,
    },
    cross_case_near_duplicates: {
      threshold: 0.9,
      pair_count: crossNear.length,
      examples_10: crossNear.slice(0, 10),
      // keep first 100 for file size
      pairs_sample: crossNear.slice(0, 100),
    },
    formula_hints_in_parentheses: {
      count: formulaHints.length,
      items: formulaHints,
    },
    abbreviations: {
      count: abbrevs.length,
      items: abbrevs,
    },
    meta_labels: {
      count: metaLabels.length,
      items: metaLabels,
    },
    obvious_read_offs: {
      count: readOffs.length,
      items: readOffs.slice(0, 80),
    },
    orphan_euro_amounts: {
      count: orphanEuros.length,
      items: orphanEuros.slice(0, 80),
    },
    suspicious_banned_wording: {
      count: banned.length,
      items: banned,
    },
    random_sample_judgment: sample,
  };
}

function severitySummary(ch2, ch3) {
  const rows = [];
  function add(sev, area, detail) {
    rows.push({ severity: sev, area, detail });
  }

  for (const ch of [ch2, ch3]) {
    const label = ch.chapter.toUpperCase();
    if (ch.exact_duplicate_statements.group_count > 0) {
      add(
        ch.exact_duplicate_statements.group_count >= 10 || ch.exact_duplicate_statements.statement_occurrences_in_dups >= 30
          ? "CRITICAL"
          : ch.exact_duplicate_statements.group_count >= 3
            ? "HIGH"
            : "MEDIUM",
        `${label} exact duplicate statements`,
        `${ch.exact_duplicate_statements.group_count} groups (${ch.exact_duplicate_statements.statement_occurrences_in_dups} occurrences); top: ${
          ch.exact_duplicate_statements.top_offenders[0]
            ? `"${ch.exact_duplicate_statements.top_offenders[0].normalized.slice(0, 60)}…" x${ch.exact_duplicate_statements.top_offenders[0].count} in ${ch.exact_duplicate_statements.top_offenders[0].case_ids.slice(0, 5).join(", ")}`
            : "n/a"
        }`
      );
    } else {
      add("OK", `${label} exact duplicate statements`, "0 groups");
    }

    if (ch.within_case_near_duplicates.pair_count > 0) {
      add(
        ch.within_case_near_duplicates.pair_count >= 20 ? "HIGH" : ch.within_case_near_duplicates.pair_count >= 5 ? "MEDIUM" : "LOW",
        `${label} within-case near-dups (J≥0.78)`,
        `${ch.within_case_near_duplicates.pair_count} pairs`
      );
    } else add("OK", `${label} within-case near-dups`, "0 pairs");

    if (ch.cross_case_near_duplicates.pair_count > 0) {
      add(
        ch.cross_case_near_duplicates.pair_count >= 50 ? "CRITICAL" : ch.cross_case_near_duplicates.pair_count >= 15 ? "HIGH" : "MEDIUM",
        `${label} cross-case near-dups (J≥0.90)`,
        `${ch.cross_case_near_duplicates.pair_count} pairs`
      );
    } else add("OK", `${label} cross-case near-dups`, "0 pairs");

    add(
      ch.formula_hints_in_parentheses.count ? (ch.formula_hints_in_parentheses.count >= 5 ? "HIGH" : "MEDIUM") : "OK",
      `${label} formula hints in parentheses`,
      `${ch.formula_hints_in_parentheses.count} hits`
    );
    add(
      ch.abbreviations.count ? (ch.abbreviations.count >= 10 ? "HIGH" : "MEDIUM") : "OK",
      `${label} finance abbreviations (EBIT|…|CF)`,
      `${ch.abbreviations.count} statement hits`
    );
    add(
      ch.meta_labels.count ? (ch.meta_labels.count >= 5 ? "HIGH" : "MEDIUM") : "OK",
      `${label} meta extract labels`,
      `${ch.meta_labels.count} hits`
    );
    add(
      ch.obvious_read_offs.count ? (ch.obvious_read_offs.count >= 15 ? "HIGH" : "MEDIUM") : "OK",
      `${label} obvious read-offs`,
      `${ch.obvious_read_offs.count} statements`
    );
    add(
      ch.orphan_euro_amounts.count ? (ch.orphan_euro_amounts.count >= 10 ? "HIGH" : "MEDIUM") : "OK",
      `${label} orphan euro amounts`,
      `${ch.orphan_euro_amounts.count} statements`
    );
    add(
      ch.suspicious_banned_wording.count ? "CRITICAL" : "OK",
      `${label} banned-ish wording`,
      `${ch.suspicious_banned_wording.count} hits`
    );

    const badSample = ch.random_sample_judgment.filter((s) => s.verdict === "invented_jargon_risk").length;
    const mixed = ch.random_sample_judgment.filter((s) => s.verdict === "mixed_or_thin").length;
    add(
      badSample ? "HIGH" : mixed >= 4 ? "MEDIUM" : "LOW",
      `${label} random sample (n=8) textbook vs jargon`,
      `${8 - badSample - mixed} textbook_likely, ${mixed} mixed/thin, ${badSample} jargon_risk`
    );
  }

  const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3, OK: 4 };
  rows.sort((a, b) => order[a.severity] - order[b.severity]);
  return rows;
}

const ch2cases = JSON.parse(fs.readFileSync(FILES.ch2, "utf8"));
const ch3cases = JSON.parse(fs.readFileSync(FILES.ch3, "utf8"));

console.log("Auditing Ch2...");
const ch2 = auditChapter("ch2", ch2cases);
console.log("Auditing Ch3...");
const ch3 = auditChapter("ch3", ch3cases);

const severity_ranked = severitySummary(ch2, ch3);

const report = {
  generated_at: new Date().toISOString(),
  source_files: FILES,
  method_notes: {
    normalize: "lowercased; punctuation stripped; €→euro; whitespace collapsed",
    within_near: "Jaccard on stopword-filtered tokens >= 0.78, same case",
    cross_near: "Jaccard >= 0.90, different cases, exact-normalized matches excluded; bucketed by token keys",
    formula_hint: String(FORMULA_HINT),
    abbreviations: "EBIT|EBITDA|ROE|ROCE|EPS|P&L|BS|IS|CF as whole words in statements",
    sample: "seeded shuffle: ch2 seed 20260207, ch3 seed 30360308",
  },
  ch2,
  ch3,
  severity_ranked_summary: severity_ranked,
};

// Slim all_groups in top-level if huge — keep full in chapter
const outPath = path.join(root, "scripts/audit-ch2-ch3-deep-report.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log("Wrote", outPath);

// Console synopsis
const order = ["CRITICAL", "HIGH", "MEDIUM", "LOW", "OK"];
for (const sev of order) {
  const items = severity_ranked.filter((r) => r.severity === sev);
  if (!items.length) continue;
  console.log("\n== " + sev + " ==");
  for (const r of items) console.log(`- [${r.area}] ${r.detail}`);
}
console.log("\nCh2 totals:", ch2.total_cases, ch2.by_subsection);
console.log("Ch3 totals:", ch3.total_cases, ch3.by_subsection);
console.log("Exact dup groups:", ch2.exact_duplicate_statements.group_count, ch3.exact_duplicate_statements.group_count);
console.log("Within near:", ch2.within_case_near_duplicates.pair_count, ch3.within_case_near_duplicates.pair_count);
console.log("Cross near:", ch2.cross_case_near_duplicates.pair_count, ch3.cross_case_near_duplicates.pair_count);
