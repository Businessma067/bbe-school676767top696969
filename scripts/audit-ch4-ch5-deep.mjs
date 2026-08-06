/**
 * Deep quality audit for Economics FC Ch.4 + Ch.5 case banks.
 * Does NOT modify case data. Writes scripts/audit-ch4-ch5-deep-report.json
 */
import fs from "node:fs";

const FILES = [
  { ch: 4, path: "src/data/economics-cases-ch4-subtopics.json" },
  { ch: 5, path: "src/data/economics-cases-ch5-subtopics.json" },
];

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s) {
  return new Set(norm(s).split(" ").filter((w) => w.length > 2));
}

function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sampleN(arr, n, seed) {
  const rng = mulberry32(seed);
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

const FORMULA_HINT =
  /\([^)]*(?:divided by|calculated as|defined as|cost of sales divided|equals|means|formula|ratio of|computed as|equal to)[^)]*\)/i;

const ABBREV_RE = /\b(EBIT|EBITDA|ROE|ROCE|EPS|P&L|WC)\b/g;

const SPELLED_OUT = {
  EBIT: /\bearnings before interest and tax(es)?\b/i,
  EBITDA: /\bearnings before interest[, ]?tax(es)?[, ]?depreciation and amorti[sz]ation\b/i,
  ROE: /\breturn on equity\b/i,
  ROCE: /\breturn on capital employed\b/i,
  EPS: /\bearnings per share\b/i,
  "P&L": /\b(profit and loss|income statement)\b/i,
  WC: /\bworking capital\b/i,
};

const META_EXTRACT = /\(see the extract prepared for case/i;

const BANNED_NAMES =
  /\b(tina|steve|at&s|ats|t&s computer|gerstenmayer|greenpeace|world wildlife|wwf|red cross|fuhrmann|\bpcb\b)\b/i;

const BANNED_META =
  /\b(the book|according to the book|\(alt\b|fuhrmann notes)\b/i;

/** Strip industry/producer filler for skeleton comparison */
function numericSkeleton(s) {
  return norm(s)
    .replace(/\d[\d.,]*/g, "#")
    .replace(
      /\b(a|an|the)\s+([a-z]+(?:\s+[a-z]+){0,5})\s+producer\b/g,
      "a PRODUCER",
    )
    .replace(
      /\b(for|among)\s+[a-z]+(?:\s+[a-z]+){0,4}\s+(retailers?|stores?|firms?|shops?)\b/g,
      "for RETAILER",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function hasEmbeddedGivens(stmt) {
  const s = String(stmt);
  // Both a firm figure and a market/total figure, or if-clause with euros
  const euroSpans =
    s.match(/\d[\d.,]*\s*(million|billion)?\s*(euro|euros|€)/gi) || [];
  if (euroSpans.length >= 2) return true;
  if (/from\s+[\d.,]+\s*(million|billion)?\s*(euro|euros)?\s+to\s+[\d.,]+/i.test(s))
    return true;
  if (
    /if\b.+\d.+(euro|euros|€|per cent|percent|%)/i.test(s) &&
    /(sells?|sales|market|share|rise|from|to)\b/i.test(s)
  )
    return true;
  if (
    /(costing|cost of|residual value|useful life|bought for|purchase price|sold for|priced at|investment of|capital of|assets? of|sales of|revenue of|worth|valued at|with sales|with revenue|market of|volume of)\s+[\d€$]/i.test(
      s,
    )
  )
    return true;
  if (/\(\s*\d/.test(s)) return true;
  if (/of\s+\d[\d,.]+\s*(euro|euros|€|%)/i.test(s) && /\d/.test(s)) return true;
  return false;
}

function isOrphanNumeric(stmt, context) {
  const s = String(stmt);
  const ctx = String(context);
  const ctxHasTable = ctx.includes("|");
  const ctxHasNumbers =
    /\d/.test(ctx) &&
    /(\d[\d.,]*\s*(euro|euros|€|%|percent)|sales of|revenue of|price of|costs? of|capital of|volume of|worth|valued)/i.test(
      ctx,
    );
  const claimsEuro = /\d[\d,]*/.test(s) && /(euro|euros|€)/i.test(s);
  const claimsPercentWithNum = /\d[\d.,]*\s*%/.test(s) || /\d[\d.,]*\s*percent/i.test(s);
  const quizLike =
    /\b(equals?|is equal to|amounts? to|totals?|comes to|results? in|yields?|holds? a\s+\d)/i.test(s) &&
    /\d/.test(s);

  if (!(claimsEuro || (claimsPercentWithNum && quizLike))) return false;
  // Illustrative list prices (charm / psychological pricing) are not compute-quizzes.
  if (/\b(charm pricing|psychological pricing|priced at|list price)\b/i.test(s))
    return false;
  if (/€\s*9\.99|€\s*10\.00|\b9\.99\b|\b10\.00\b/.test(s) && /\b(price|pricing|charm|psychological)\b/i.test(s))
    return false;
  if (ctxHasTable || ctxHasNumbers) return false;
  if (hasEmbeddedGivens(s)) return false; // conditions live in the statement
  return true;
}

function isSelfContainedNumericNoContext(stmt, context) {
  const s = String(stmt);
  const ctx = String(context);
  if (ctx.includes("|")) return false;
  const ctxHasNumbers =
    /\d/.test(ctx) &&
    /(\d[\d.,]*\s*(euro|euros|€|%|percent)|sales of|revenue of)/i.test(ctx);
  if (ctxHasNumbers) return false;
  const claimsEuro = /\d[\d,]*/.test(s) && /(euro|euros|€)/i.test(s);
  return claimsEuro && hasEmbeddedGivens(s);
}

// Textbook TOC-aligned topic cues (from scripts/_pdf_full.txt)
const SUBTOPIC_HINTS = {
  "4.1": ["sole propriet", "sole trader", "unlimited liability", "proprietor", "personal"],
  "4.2": ["partnership", "partner", "joint", "unlimited", "agreement"],
  "4.3": ["corporation", "shareholder", "limited compan", "equity", "shares", "board", "dividend"],
  "4.4": ["ownership", "sole", "partnership", "corporation", "liability", "compare", "forms"],
  "4.5": ["source", "financ", "internal", "external", "debt", "equity", "retained", "loan", "credit", "overdraft", "bond"],
  "4.6": ["choice", "source", "financ", "cost", "control", "risk", "flexibility", "gear", "loan", "credit"],
  "5.1": ["product", "good", "service", "feature", "want", "need", "benefit"],
  "5.2": ["objective", "marketing", "sales", "profit", "market share", "growth", "awareness", "customer"],
  "5.3": ["product orientation", "market orientation", "orient", "research", "customer need", "production"],
  "5.4": ["sustainab", "responsib", "ethic", "environment", "wish", "need", "advertis", "green"],
  "5.5": ["research", "primary", "secondary", "survey", "market share", "market size", "customer", "data", "segment"],
  "5.6": ["segmentation", "segment", "target", "niche", "mass market", "demographic", "position", "differenti"],
  "5.7": ["marketing mix", "price", "product", "place", "promotion", "four p", "blend", "mix"],
};

const SUBTOPIC_LABELS = {
  "4.1": "Sole proprietorship / sole traders",
  "4.2": "Partnership",
  "4.3": "Corporations",
  "4.4": "Summary: Overview of forms of business ownership",
  "4.5": "Overview of sources of finance",
  "4.6": "The choice of the source of finance",
  "5.1": "What a product is",
  "5.2": "Objectives of marketing",
  "5.3": "Product orientation versus market orientation",
  "5.4": "The need for more responsibility and sustainability",
  "5.5": "Market research",
  "5.6": "Market segmentation and targeting strategies",
  "5.7": "The marketing mix",
};

function alignmentJudgment(c) {
  const blob = norm([c.title, c.context, ...(c.statements || [])].join(" "));
  const hints = SUBTOPIC_HINTS[c.subsection] || [];
  const hits = hints.filter((h) => blob.includes(norm(h)));
  const hitRate = hints.length ? hits.length / hints.length : 0;
  let score = "aligned";
  let note = `TOC topic «${SUBTOPIC_LABELS[c.subsection] || c.subsection}»: matched ${hits.length}/${hints.length} cues (${hits.slice(0, 5).join(", ") || "none"}).`;
  if (hitRate < 0.2) {
    score = "weak";
    note = `Weak vs TOC «${SUBTOPIC_LABELS[c.subsection]}». Hits: ${hits.join(", ") || "none"}. Title: ${c.title}`;
  } else if (hitRate < 0.35) {
    score = "partial";
    note = `Partial vs TOC «${SUBTOPIC_LABELS[c.subsection]}». Hits: ${hits.join(", ")}.`;
  }
  const keys = c.answer_key || [];
  const trueN = keys.filter(Boolean).length;
  const issues = [];
  if (trueN === 0 || trueN === 5) issues.push(`answer skew ${trueN}T`);
  const stmtLens = (c.statements || []).map((s) => s.length);
  if (stmtLens.some((n) => n < 30 || n > 220)) issues.push("stmt length outlier");
  if (BANNED_NAMES.test(JSON.stringify(c))) issues.push("banned name");
  return {
    case_id: c.case_id,
    title: c.title,
    subsection: c.subsection,
    toc_topic: SUBTOPIC_LABELS[c.subsection] || null,
    judgment: score,
    note,
    issues,
    sample_statement: (c.statements || [])[0]?.slice(0, 140),
  };
}

function analyzeChapter(ch, cases) {
  const bySubsection = {};
  for (const c of cases) {
    bySubsection[c.subsection] = (bySubsection[c.subsection] || 0) + 1;
  }

  const stmtMap = new Map();
  for (const c of cases) {
    for (let i = 0; i < (c.statements || []).length; i++) {
      const text = c.statements[i];
      const k = norm(text);
      if (!stmtMap.has(k)) stmtMap.set(k, []);
      stmtMap.get(k).push({ id: `${c.case_id}[${i}]`, text });
    }
  }
  const exactDupGroups = [];
  for (const [, refs] of stmtMap) {
    if (refs.length < 2) continue;
    exactDupGroups.push({
      count: refs.length,
      statement: refs[0].text.slice(0, 140),
      locations: refs.map((r) => r.id),
    });
  }
  exactDupGroups.sort((a, b) => b.count - a.count);
  const exactDupExtraSlots = exactDupGroups.reduce((n, g) => n + (g.count - 1), 0);
  const exactDupStatementSlots = exactDupGroups.reduce((n, g) => n + g.count, 0);

  const withinNear = [];
  for (const c of cases) {
    const stmts = c.statements || [];
    for (let i = 0; i < stmts.length; i++) {
      for (let j = i + 1; j < stmts.length; j++) {
        const sim = jaccard(stmts[i], stmts[j]);
        if (sim >= 0.78) {
          withinNear.push({
            case_id: c.case_id,
            i,
            j,
            sim: Number(sim.toFixed(3)),
            a: stmts[i].slice(0, 100),
            b: stmts[j].slice(0, 100),
          });
        }
      }
    }
  }
  withinNear.sort((a, b) => b.sim - a.sim);

  const stmtList = [];
  for (const c of cases) {
    for (let i = 0; i < (c.statements || []).length; i++) {
      stmtList.push({
        id: `${c.case_id}[${i}]`,
        case_id: c.case_id,
        i,
        text: c.statements[i],
        n: norm(c.statements[i]),
      });
    }
  }
  const buckets = new Map();
  for (const item of stmtList) {
    const words = item.n.split(" ");
    const keys = new Set([
      words.slice(0, 2).join(" "),
      words.slice(0, 3).join(" "),
      words.slice(0, 1).join(" ") + " " + (words[2] || ""),
    ]);
    for (const key of keys) {
      if (!key.trim()) continue;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(item);
    }
  }
  const seenPair = new Set();
  const crossNear = [];
  for (const bucket of buckets.values()) {
    const uniq = [];
    const seenId = new Set();
    for (const it of bucket) {
      if (seenId.has(it.id)) continue;
      seenId.add(it.id);
      uniq.push(it);
    }
    if (uniq.length < 2) continue;
    for (let i = 0; i < uniq.length; i++) {
      for (let j = i + 1; j < uniq.length; j++) {
        if (uniq[i].case_id === uniq[j].case_id) continue;
        if (uniq[i].n === uniq[j].n) continue;
        const pairKey = [uniq[i].id, uniq[j].id].sort().join("|");
        if (seenPair.has(pairKey)) continue;
        const sim = jaccard(uniq[i].text, uniq[j].text);
        if (sim >= 0.9) {
          seenPair.add(pairKey);
          crossNear.push({
            sim: Number(sim.toFixed(3)),
            a: uniq[i].id,
            b: uniq[j].id,
            sa: uniq[i].text.slice(0, 110),
            sb: uniq[j].text.slice(0, 110),
          });
        }
      }
    }
  }
  const byFirst = new Map();
  for (const item of stmtList) {
    const fw = item.n.split(" ")[0] || "";
    if (!byFirst.has(fw)) byFirst.set(fw, []);
    byFirst.get(fw).push(item);
  }
  for (const [, list] of byFirst) {
    if (list.length < 2 || list.length > 400) continue;
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[i].case_id === list[j].case_id) continue;
        if (list[i].n === list[j].n) continue;
        const pairKey = [list[i].id, list[j].id].sort().join("|");
        if (seenPair.has(pairKey)) continue;
        const la = list[i].n.length;
        const lb = list[j].n.length;
        if (Math.min(la, lb) / Math.max(la, lb) < 0.75) continue;
        const sim = jaccard(list[i].text, list[j].text);
        if (sim >= 0.9) {
          seenPair.add(pairKey);
          crossNear.push({
            sim: Number(sim.toFixed(3)),
            a: list[i].id,
            b: list[j].id,
            sa: list[i].text.slice(0, 110),
            sb: list[j].text.slice(0, 110),
          });
        }
      }
    }
  }
  crossNear.sort((a, b) => b.sim - a.sim);

  // Numeric skeleton duplicates (same figures/structure, swapped industry nouns)
  const skelMap = new Map();
  for (const item of stmtList) {
    if (!/\d/.test(item.text) || !/(euro|euros|€|percent|per cent|%)/i.test(item.text)) continue;
    const sk = numericSkeleton(item.text);
    if (sk.split(" ").length < 8) continue;
    if (!skelMap.has(sk)) skelMap.set(sk, []);
    skelMap.get(sk).push(item);
  }
  const skeletonGroups = [];
  for (const [sk, refs] of skelMap) {
    const uniqCases = new Set(refs.map((r) => r.case_id));
    if (uniqCases.size < 2) continue;
    skeletonGroups.push({
      count: refs.length,
      distinct_cases: uniqCases.size,
      skeleton: sk.slice(0, 160),
      locations: refs.map((r) => r.id).slice(0, 20),
      example: refs[0].text.slice(0, 140),
    });
  }
  skeletonGroups.sort((a, b) => b.count - a.count);

  const formulaHints = [];
  for (const c of cases) {
    for (let i = 0; i < (c.statements || []).length; i++) {
      const m = c.statements[i].match(FORMULA_HINT);
      if (m) {
        formulaHints.push({
          id: `${c.case_id}[${i}]`,
          match: m[0].slice(0, 80),
          statement: c.statements[i].slice(0, 140),
        });
      }
    }
  }

  const abbrevHits = [];
  const spelledCounts = {};
  for (const abbr of Object.keys(SPELLED_OUT)) spelledCounts[abbr] = 0;
  for (const c of cases) {
    const blob = JSON.stringify(c);
    for (const [abbr, re] of Object.entries(SPELLED_OUT)) {
      const matches = blob.match(new RegExp(re.source, "gi"));
      if (matches) spelledCounts[abbr] += matches.length;
    }
    let m;
    const re = new RegExp(ABBREV_RE.source, "g");
    while ((m = re.exec(blob)) !== null) {
      abbrevHits.push({
        case_id: c.case_id,
        abbr: m[1],
        snippet: blob.slice(Math.max(0, m.index - 20), m.index + m[0].length + 40).replace(/\\"/g, '"'),
      });
    }
  }
  const abbrevByType = {};
  for (const h of abbrevHits) abbrevByType[h.abbr] = (abbrevByType[h.abbr] || 0) + 1;

  const metaExtract = [];
  for (const c of cases) {
    const blob = JSON.stringify(c);
    if (META_EXTRACT.test(blob)) {
      metaExtract.push({ case_id: c.case_id });
    }
  }

  const orphans = [];
  const selfContainedNumeric = [];
  for (const c of cases) {
    for (let i = 0; i < (c.statements || []).length; i++) {
      if (isOrphanNumeric(c.statements[i], c.context)) {
        orphans.push({
          id: `${c.case_id}[${i}]`,
          statement: c.statements[i].slice(0, 140),
          context_snip: String(c.context).slice(0, 100),
        });
      } else if (isSelfContainedNumericNoContext(c.statements[i], c.context)) {
        selfContainedNumeric.push({
          id: `${c.case_id}[${i}]`,
          statement: c.statements[i].slice(0, 140),
        });
      }
    }
  }

  const banned = [];
  for (const c of cases) {
    const blob = JSON.stringify(c);
    const nameM = blob.match(BANNED_NAMES);
    const metaM = blob.match(BANNED_META);
    if (nameM || metaM) {
      banned.push({
        case_id: c.case_id,
        match: (nameM || metaM)[0],
        kind: nameM ? "book_example_name" : "meta_phrase",
      });
    }
  }

  // Soft PCB long-form (book AT&S theme) — not auto-banned but noted
  const pcbLong = [];
  for (const c of cases) {
    if (/printed circuit board/i.test(JSON.stringify(c))) {
      pcbLong.push({ case_id: c.case_id, title: c.title });
    }
  }

  const sample = sampleN(cases, 8, 4000 + ch).map(alignmentJudgment);

  return {
    chapter: ch,
    total_cases: cases.length,
    by_subsection: bySubsection,
    exact_duplicate_statements: {
      groups: exactDupGroups.length,
      duplicate_slots: exactDupStatementSlots,
      extra_copies: exactDupExtraSlots,
      top_offenders: exactDupGroups.slice(0, 15),
      all_groups_sample: exactDupGroups.slice(0, 40),
    },
    within_case_near_duplicates: {
      threshold: 0.78,
      count: withinNear.length,
      examples: withinNear.slice(0, 20),
    },
    cross_case_near_duplicates: {
      threshold: 0.9,
      count: crossNear.length,
      examples: crossNear.slice(0, 25),
    },
    numeric_skeleton_duplicates: {
      note: "Same figures/structure with industry/retailer noun swaps; Jaccard may stay <0.90 because filler tokens differ.",
      groups: skeletonGroups.length,
      top_offenders: skeletonGroups.slice(0, 15),
    },
    formula_hints: {
      count: formulaHints.length,
      examples: formulaHints.slice(0, 25),
    },
    abbreviations: {
      count: abbrevHits.length,
      by_type: abbrevByType,
      spelled_out_counts: spelledCounts,
      preference_note:
        "Spelled-out forms are preferred for student-facing FC text; abbreviations EBIT|EBITDA|ROE|ROCE|EPS|P&L|WC should be avoided as whole words.",
      examples: abbrevHits.slice(0, 30),
    },
    meta_extract_crossref: {
      count: metaExtract.length,
      examples: metaExtract.slice(0, 20),
    },
    orphan_numeric_quizzes: {
      count: orphans.length,
      definition:
        "Euro/percent quiz claiming a numerical result where context lacks givens/table AND the statement itself does not embed the conditions.",
      examples: orphans.slice(0, 25),
    },
    self_contained_numeric_no_context: {
      count: selfContainedNumeric.length,
      definition:
        "Numeric/euro quiz with embedded givens (not a true orphan) but context has no supporting figures — often templates.",
      examples: selfContainedNumeric.slice(0, 20),
    },
    banned_book_names: {
      count: banned.length,
      examples: banned.slice(0, 30),
      printed_circuit_board_mentions: {
        count: pcbLong.length,
        note: "Long-form 'printed circuit board' (book AT&S theme) — not matched by \\bpcb\\b ban list; for awareness.",
        examples: pcbLong.slice(0, 10),
      },
    },
    sample_textbook_alignment: sample,
  };
}

function severityRank(chapters) {
  const findings = [];
  for (const ch of chapters) {
    const push = (severity, category, count, detail) => {
      if (count > 0)
        findings.push({ severity, chapter: ch.chapter, category, count, detail });
    };
    push(
      "critical",
      "banned_book_names",
      ch.banned_book_names.count,
      "Student-facing use of textbook person/company names (Tina, Steve, AT&S, Gerstenmayer, Greenpeace, etc.)",
    );
    push(
      "critical",
      "meta_extract_crossref",
      ch.meta_extract_crossref.count,
      'Salt string "(see the extract prepared for case…" leaking into content',
    );
    push(
      "high",
      "exact_duplicate_statements",
      ch.exact_duplicate_statements.extra_copies,
      `${ch.exact_duplicate_statements.groups} groups; ${ch.exact_duplicate_statements.extra_copies} redundant copies`,
    );
    push(
      "high",
      "within_case_near_duplicates",
      ch.within_case_near_duplicates.count,
      "Jaccard ≥ 0.78 statement pairs inside the same case",
    );
    push(
      "high",
      "orphan_numeric_quizzes",
      ch.orphan_numeric_quizzes.count,
      "Numeric/euro quiz statements without conditions in context or statement",
    );
    push(
      "high",
      "numeric_skeleton_duplicates",
      ch.numeric_skeleton_duplicates.groups,
      `Template clones (same numbers/structure, swapped nouns); top size ${ch.numeric_skeleton_duplicates.top_offenders[0]?.count || 0}`,
    );
    push(
      "medium",
      "cross_case_near_duplicates",
      ch.cross_case_near_duplicates.count,
      "Jaccard ≥ 0.90 cross-case near-duplicate statement pairs",
    );
    push(
      "medium",
      "self_contained_numeric_no_context",
      ch.self_contained_numeric_no_context.count,
      "Self-contained euro quizzes with no figures in context (template smell)",
    );
    push(
      "medium",
      "formula_hints",
      ch.formula_hints.count,
      "Parenthetical formula hints (divided by / calculated as / defined as / …)",
    );
    push(
      "medium",
      "abbreviations",
      ch.abbreviations.count,
      `Abbrev hits by type: ${JSON.stringify(ch.abbreviations.by_type)}; spelled-out preferred`,
    );
    const pcb = ch.banned_book_names.printed_circuit_board_mentions?.count || 0;
    push(
      "low",
      "printed_circuit_board_theme",
      pcb,
      "Long-form printed-circuit-board wording (near book AT&S example theme)",
    );
    const weakAlign = ch.sample_textbook_alignment.filter((s) => s.judgment === "weak").length;
    const partialAlign = ch.sample_textbook_alignment.filter((s) => s.judgment === "partial").length;
    if (weakAlign)
      push(
        "medium",
        "sample_alignment_weak",
        weakAlign,
        `${weakAlign}/8 sampled cases weakly aligned to TOC subsection cues`,
      );
    if (partialAlign)
      push(
        "low",
        "sample_alignment_partial",
        partialAlign,
        `${partialAlign}/8 sampled cases partially aligned`,
      );
  }
  const order = { critical: 0, high: 1, medium: 2, low: 3 };
  findings.sort((a, b) => order[a.severity] - order[b.severity] || b.count - a.count);
  return findings;
}

const chapterReports = [];
for (const { ch, path: p } of FILES) {
  const cases = JSON.parse(fs.readFileSync(p, "utf8"));
  console.log(`Analyzing Ch.${ch} (${cases.length} cases)…`);
  const t0 = Date.now();
  const report = analyzeChapter(ch, cases);
  console.log(`  done in ${Date.now() - t0}ms`);
  console.log(
    `  exact=${report.exact_duplicate_statements.groups} withinNear=${report.within_case_near_duplicates.count} crossNear=${report.cross_case_near_duplicates.count} skel=${report.numeric_skeleton_duplicates.groups} formula=${report.formula_hints.count} abbr=${report.abbreviations.count} meta=${report.meta_extract_crossref.count} orphan=${report.orphan_numeric_quizzes.count} selfNum=${report.self_contained_numeric_no_context.count} banned=${report.banned_book_names.count}`,
  );
  chapterReports.push(report);
}

const severity = severityRank(chapterReports);

const out = {
  generated_at: new Date().toISOString(),
  source_files: FILES.map((f) => f.path),
  note: "Deep audit of Ch.4+Ch.5 FC banks. Case data was not modified. Prior scripts/audit-ch4-ch5-report.json is a narrower/stale checklist (neon_false, context dups, Jaccard≥0.82).",
  chapters: chapterReports,
  severity_ranked_summary: severity,
  totals_across_chapters: {
    cases: chapterReports.reduce((n, c) => n + c.total_cases, 0),
    exact_dup_groups: chapterReports.reduce((n, c) => n + c.exact_duplicate_statements.groups, 0),
    exact_dup_extra_copies: chapterReports.reduce((n, c) => n + c.exact_duplicate_statements.extra_copies, 0),
    within_case_near: chapterReports.reduce((n, c) => n + c.within_case_near_duplicates.count, 0),
    cross_case_near: chapterReports.reduce((n, c) => n + c.cross_case_near_duplicates.count, 0),
    numeric_skeleton_groups: chapterReports.reduce((n, c) => n + c.numeric_skeleton_duplicates.groups, 0),
    formula_hints: chapterReports.reduce((n, c) => n + c.formula_hints.count, 0),
    abbreviations: chapterReports.reduce((n, c) => n + c.abbreviations.count, 0),
    meta_extract: chapterReports.reduce((n, c) => n + c.meta_extract_crossref.count, 0),
    orphan_numeric: chapterReports.reduce((n, c) => n + c.orphan_numeric_quizzes.count, 0),
    self_contained_numeric: chapterReports.reduce(
      (n, c) => n + c.self_contained_numeric_no_context.count,
      0,
    ),
    banned_names: chapterReports.reduce((n, c) => n + c.banned_book_names.count, 0),
  },
};

fs.writeFileSync("scripts/audit-ch4-ch5-deep-report.json", JSON.stringify(out, null, 2) + "\n");
console.log("\nWrote scripts/audit-ch4-ch5-deep-report.json");
console.log("\n=== SEVERITY SUMMARY ===");
for (const f of severity) {
  console.log(`[${f.severity}] Ch.${f.chapter} ${f.category}: ${f.count} — ${f.detail}`);
}
console.log("\n=== COUNTS BY CHAPTER ===");
for (const ch of chapterReports) {
  console.log(
    `Ch.${ch.chapter}: cases=${ch.total_cases}`,
    JSON.stringify(ch.by_subsection),
  );
  console.log(
    `  exact_groups=${ch.exact_duplicate_statements.groups} within_near=${ch.within_case_near_duplicates.count} cross_near=${ch.cross_case_near_duplicates.count} skeleton_groups=${ch.numeric_skeleton_duplicates.groups}`,
  );
  console.log(
    `  formula=${ch.formula_hints.count} abbr=${ch.abbreviations.count} meta=${ch.meta_extract_crossref.count} orphan=${ch.orphan_numeric_quizzes.count} self_num=${ch.self_contained_numeric_no_context.count} banned=${ch.banned_book_names.count}`,
  );
  const align = ch.sample_textbook_alignment.reduce((a, s) => {
    a[s.judgment] = (a[s.judgment] || 0) + 1;
    return a;
  }, {});
  console.log("  sample_alignment", align);
  if (ch.numeric_skeleton_duplicates.top_offenders[0]) {
    console.log("  top_skeleton", ch.numeric_skeleton_duplicates.top_offenders[0].count, ch.numeric_skeleton_duplicates.top_offenders[0].example.slice(0, 100));
  }
}
