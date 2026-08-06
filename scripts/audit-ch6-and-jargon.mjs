/**
 * Deep quality audit: Ch6 case bank metrics + non-book jargon scan (ch2–ch6)
 * + book PDF / extract scaffolding. Does NOT modify case banks.
 * Output: scripts/audit-ch6-and-jargon-report.json
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts", "audit-ch6-and-jargon-report.json");

const CH6 = "src/data/economics-cases-ch6-subtopics.json";
const BANKS = [
  { ch: 2, path: "src/data/economics-cases-ch2-subtopics.json" },
  { ch: 3, path: "src/data/economics-cases-ch3-subtopics.json" },
  { ch: 4, path: "src/data/economics-cases-ch4-subtopics.json" },
  { ch: 5, path: "src/data/economics-cases-ch5-subtopics.json" },
  { ch: 6, path: "src/data/economics-cases-ch6-subtopics.json" },
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

const ABBREV_BANK =
  /\b(EBIT|EBITDA|ROCE|ROE|EPS|WC|P&L|BS|IS|CF)\b/;

const FORMULA_HINT =
  /\([^)]*(?:divided by|calculated as|defined as|cost of sales divided|equals|means|\/\s*current|current assets\s*\/)[^)]*\)/i;

const META_EXTRACT = /\bon cash-flow extract\s+\d+/i;
const META_EXTRACT2 = /\bextract\s+\d+\s+for a\b/i;
const SEE_EXTRACT_SALT = /\(see the extract prepared for case/i;
const PRE_SUMMED_CF =
  /\|?\s*(?:Net )?change in cash and cash equivalents\s*\|/i;

function isTheoryStmt(stmt, ctxHasTable) {
  const s = String(stmt);
  const hasEuro = /euro|€/i.test(s) && /\d/.test(s);
  const hasRatioNums =
    /\b\d+[.,]?\d*\s*%/.test(s) ||
    (/\b(ratio|turnover|margin|capitalisation|current assets|liabilities)\b/i.test(s) &&
      /\d/.test(s));
  if (ctxHasTable && (hasEuro || hasRatioNums)) return false;
  if (hasEuro && !ctxHasTable) return false;
  return true;
}

function numericFingerprint(stmt) {
  const s = String(stmt);
  if (!/\d/.test(s)) return null;
  if (!/(euro|€|%|ratio|thousand|million)/i.test(s)) return null;
  return norm(s);
}

const JARGON = [
  { key: "EBITDA", re: /\bEBITDA\b/ },
  { key: "EBIT", re: /\bEBIT\b(?!DA)/ },
  { key: "NPV", re: /\bNPV\b|\bnet present value\b/i },
  { key: "IRR", re: /\bIRR\b|\binternal rate of return\b/i },
  { key: "WACC", re: /\bWACC\b|\bweighted average cost of capital\b/i },
  { key: "CAPM", re: /\bCAPM\b|\bcapital asset pricing model\b/i },
  { key: "goodwill_impairment", re: /\bgoodwill impairment\b|\bimpairment of goodwill\b/i },
  { key: "fair_value_hierarchy", re: /\bfair value hierarchy\b|\bLevel [123] (fair )?value\b/i },
  { key: "IFRS_16", re: /\bIFRS\s*16\b/i },
  { key: "deferred_tax_asset", re: /\bdeferred tax assets?\b/i },
  { key: "OCI", re: /\bOCI\b|\bother comprehensive income\b/i },
  { key: "comprehensive_income", re: /\bcomprehensive income\b/i },
  { key: "diluted_EPS", re: /\bdiluted EPS\b|\bdiluted earnings per share\b/i },
  { key: "FCF", re: /\bFCF\b|\bfree cash flow\b/i },
  { key: "DCF", re: /\bDCF\b|\bdiscounted cash flow\b/i },
  { key: "EVA", re: /\bEVA\b|\beconomic value added\b/i },
  { key: "ROIC", re: /\bROIC\b|\breturn on invested capital\b/i },
  { key: "NOPAT", re: /\bNOPAT\b/ },
  { key: "amortised_cost", re: /\bamortis[ez]d cost\b/i },
  { key: "hedge_accounting", re: /\bhedge accounting\b/i },
  { key: "IFRS_9", re: /\bIFRS\s*9\b/i },
  { key: "IAS_36", re: /\bIAS\s*36\b/i },
  { key: "fair_value_through", re: /\bfair value through (profit|OCI|P&L)\b/i },
  { key: "securitisation", re: /\bsecuriti[sz]ation\b/i },
  { key: "leveraged_buyout", re: /\bleveraged buyout\b|\bLBO\b/ },
  { key: "mezzanine", re: /\bmezzanine (financ|debt)\b/i },
  { key: "covenant_lite", re: /\bcovenant[- ]lite\b/i },
  { key: "mark_to_market", re: /\bmark[- ]to[- ]market\b/i },
  { key: "Basel_III", re: /\bBasel\s*III\b/i },
  { key: "VaR", re: /\bVaR\b|\bvalue at risk\b/i },
];

function auditCh6(cases) {
  const exactStmtDups = [];
  const withinNearDup = [];
  const numericExactDups = [];
  const cfLeadingMinus = [];
  const preSummedCf = [];
  const orphanEuros = [];
  const formulaHints = [];
  const abbreviations = [];
  const metaExtractLabels = [];
  const seeExtractSalt = [];

  const stmtMap = new Map();
  const numericMap = new Map();
  const theoryMap = new Map();
  let exactStmtDupsTheoryInstances = 0;
  let exactStmtDupsCalcInstances = 0;

  for (const c of cases) {
    const ctx = String(c.context || "");
    const blob = JSON.stringify(c);
    const ctxHasTable = ctx.includes("|");

    if (PRE_SUMMED_CF.test(ctx)) preSummedCf.push({ id: c.case_id });
    if (/Cash flow from/i.test(ctx) && /\|\s*-\d/.test(ctx)) {
      cfLeadingMinus.push({ id: c.case_id });
    }
    if (ABBREV_BANK.test(blob)) {
      abbreviations.push({ id: c.case_id, match: blob.match(ABBREV_BANK)?.[0] });
    }
    if (META_EXTRACT.test(blob) || META_EXTRACT2.test(blob)) {
      metaExtractLabels.push({ id: c.case_id });
    }
    if (SEE_EXTRACT_SALT.test(blob)) seeExtractSalt.push({ id: c.case_id });

    const stmts = c.statements || [];
    for (let j = 0; j < stmts.length; j++) {
      const stmt = stmts[j];
      const sn = norm(stmt);
      const theory = isTheoryStmt(stmt, ctxHasTable);

      if (stmtMap.has(sn)) {
        exactStmtDups.push({
          a: stmtMap.get(sn),
          b: `${c.case_id}[${j}]`,
          theory,
          preview: stmt.slice(0, 120),
        });
        if (theory) exactStmtDupsTheoryInstances++;
        else exactStmtDupsCalcInstances++;
      } else {
        stmtMap.set(sn, `${c.case_id}[${j}]`);
      }

      const nf = numericFingerprint(stmt);
      if (nf) {
        if (numericMap.has(nf)) {
          numericExactDups.push({
            a: numericMap.get(nf),
            b: `${c.case_id}[${j}]`,
            preview: stmt.slice(0, 120),
          });
        } else numericMap.set(nf, `${c.case_id}[${j}]`);
      }

      if (theory) {
        const t = theoryMap.get(sn) || { count: 0, examples: [] };
        t.count += 1;
        if (t.examples.length < 3) t.examples.push(`${c.case_id}[${j}]`);
        theoryMap.set(sn, t);
      }

      if (FORMULA_HINT.test(stmt)) {
        formulaHints.push({ id: c.case_id, i: j, preview: stmt.slice(0, 100) });
      }

      const claimsEuro = /\d[\d,]*/.test(stmt) && /euro|€/i.test(stmt);
      const selfContained =
        /costing|cost of|residual value|useful life|bought for|purchase price/i.test(stmt) ||
        /\(\d/.test(stmt);
      if (claimsEuro && !ctxHasTable && !selfContained) {
        orphanEuros.push({ id: c.case_id, i: j, preview: stmt.slice(0, 100) });
      }

      for (let k = j + 1; k < stmts.length; k++) {
        const sim = jaccard(stmt, stmts[k]);
        if (sim >= 0.78) {
          withinNearDup.push({
            id: c.case_id,
            i: j,
            j: k,
            sim: Number(sim.toFixed(3)),
            si: stmt.slice(0, 90),
            sj: stmts[k].slice(0, 90),
          });
        }
      }
    }
  }

  const theoryReuseGroups = [...theoryMap.entries()]
    .filter(([, v]) => v.count >= 2)
    .map(([preview, v]) => ({
      count: v.count,
      examples: v.examples,
      preview: preview.slice(0, 110),
    }))
    .sort((a, b) => b.count - a.count);

  const theoryMaxCopies =
    theoryReuseGroups.length === 0 ? 1 : theoryReuseGroups[0].count;

  return {
    caseCount: cases.length,
    metrics: {
      exactStmtDups: exactStmtDups.length,
      exactStmtDupsTheoryInstances,
      exactStmtDupsCalcInstances,
      withinCaseNearDup078: withinNearDup.length,
      theoryStemReuseGroups: theoryReuseGroups.length,
      theoryStemMaxCopies: theoryMaxCopies,
      theoryStemsUsedOver10times: theoryReuseGroups.filter((g) => g.count > 10).length,
      numericExactDups: numericExactDups.length,
      cfLeadingMinusCells: cfLeadingMinus.length,
      preSummedCfNetRows: preSummedCf.length,
      orphanEuros: orphanEuros.length,
      formulaHints: formulaHints.length,
      abbreviations: abbreviations.length,
      metaExtractLabels: metaExtractLabels.length,
      seeTheExtractSalt: seeExtractSalt.length,
    },
    samples: {
      exactStmtDups: exactStmtDups.slice(0, 25),
      exactStmtDupsCalc: exactStmtDups.filter((d) => !d.theory).slice(0, 25),
      withinCaseNearDup078: withinNearDup.slice(0, 25),
      theoryStemTop: theoryReuseGroups.slice(0, 20),
      numericExactDups: numericExactDups.slice(0, 25),
      cfLeadingMinusCells: cfLeadingMinus.slice(0, 20),
      preSummedCfNetRows: preSummedCf.slice(0, 20),
      orphanEuros: orphanEuros.slice(0, 25),
      formulaHints: formulaHints.slice(0, 25),
      abbreviations: abbreviations.slice(0, 25),
      metaExtractLabels: metaExtractLabels.slice(0, 20),
      seeTheExtractSalt: seeExtractSalt.slice(0, 20),
    },
  };
}

function scanJargon() {
  const perChapter = {};
  const termTotals = {};
  for (const { key } of JARGON) termTotals[key] = 0;

  for (const { ch, path: p } of BANKS) {
    const full = path.join(ROOT, p);
    if (!fs.existsSync(full)) {
      perChapter[`ch${ch}`] = { missing: true, hits: 0, byTerm: {}, examples: [] };
      continue;
    }
    const cases = JSON.parse(fs.readFileSync(full, "utf8"));
    const byTerm = {};
    const examples = [];
    for (const { key } of JARGON) byTerm[key] = 0;

    for (const c of cases) {
      const blob = JSON.stringify(c);
      for (const { key, re } of JARGON) {
        const m = blob.match(re);
        if (m) {
          byTerm[key] += 1;
          termTotals[key] += 1;
          if (examples.length < 40) {
            examples.push({ term: key, id: c.case_id, match: m[0] });
          }
        }
      }
    }

    perChapter[`ch${ch}`] = {
      cases: cases.length,
      hits: Object.values(byTerm).reduce((a, b) => a + b, 0),
      byTerm: Object.fromEntries(Object.entries(byTerm).filter(([, n]) => n > 0)),
      examples: examples.slice(0, 25),
    };
  }

  return {
    note: "Heuristic: advanced finance jargon uncommon in Fuhrmann Intro Business/Economics undergrad text. Book-ish spell-outs (return on equity, working capital, market capitalisation) are NOT flagged; NPV/IRR/WACC/ROIC etc. flag even when spelled out.",
    perChapter,
    termTotals: Object.fromEntries(Object.entries(termTotals).filter(([, n]) => n > 0)),
    totalHits: Object.values(termTotals).reduce((a, b) => a + b, 0),
  };
}

function checkScaffolding() {
  const bookPdf =
    "c:\\Users\\bubli\\Downloads\\2019_Fuhrmann_B_Introduction_to_Business_and_Economics (1).pdf";
  const ch6ExtractMd = path.join(ROOT, "scripts", "_ch6-book-extract.md");
  const pdfTxts = [
    "_pdf_ch2_5.txt",
    "_pdf_ch4_shares.txt",
    "_pdf_ch4_shares2.txt",
    "_pdf_ch6.txt",
    "_pdf_full.txt",
  ].map((n) => {
    const p = path.join(ROOT, "scripts", n);
    const exists = fs.existsSync(p);
    return {
      path: `scripts/${n}`,
      exists,
      bytes: exists ? fs.statSync(p).size : 0,
    };
  });

  return {
    bookPdf: {
      path: bookPdf,
      exists: fs.existsSync(bookPdf),
      bytes: fs.existsSync(bookPdf) ? fs.statSync(bookPdf).size : 0,
    },
    ch6BookExtractMd: {
      path: "scripts/_ch6-book-extract.md",
      exists: fs.existsSync(ch6ExtractMd),
    },
    pdfTextExtracts: pdfTxts,
    hasAnyPdfTxt: pdfTxts.some((x) => x.exists),
    hasCh6PdfTxt: pdfTxts.some((x) => x.path.includes("_pdf_ch6") && x.exists),
    hasFullPdfTxt: pdfTxts.some((x) => x.path.includes("_pdf_full") && x.exists),
  };
}

function severitySummary(ch6, jargon, scaffold) {
  const m = ch6.metrics;
  const findings = [];

  const crit = [
    ["orphanEuros", m.orphanEuros, "Euro amounts in statements without table or self-contained givens"],
    ["formulaHints", m.formulaHints, "Parenthetical formula hints in statements"],
    ["cfLeadingMinusCells", m.cfLeadingMinusCells, "Cash-flow outflows with leading minus instead of (amount)"],
    ["preSummedCfNetRows", m.preSummedCfNetRows, "Pre-summed net change in cash row printed in extract"],
    ["metaExtractLabels", m.metaExtractLabels, "Meta 'cash-flow extract N' labels"],
    ["seeTheExtractSalt", m.seeTheExtractSalt, "Generator salt '(see the extract prepared for case…)' leaked"],
    ["abbreviations", m.abbreviations, "Banned bank abbreviations (EBIT/EBITDA/ROE/EPS/…)"],
  ];
  for (const [metric, count, note] of crit) {
    if (count > 0) findings.push({ severity: "critical", metric, count, note });
  }

  if (m.exactStmtDupsCalcInstances > 0) {
    findings.push({
      severity: "high",
      metric: "exactStmtDupsCalcInstances",
      count: m.exactStmtDupsCalcInstances,
      note: "Exact duplicate numeric/calc statements (non-theory)",
    });
  }
  if (m.withinCaseNearDup078 > 0) {
    findings.push({
      severity: "high",
      metric: "withinCaseNearDup078",
      count: m.withinCaseNearDup078,
      note: "Within-case near-duplicate statements (Jaccard ≥ 0.78)",
    });
  }
  if (m.numericExactDups > 0) {
    findings.push({
      severity: "high",
      metric: "numericExactDups",
      count: m.numericExactDups,
      note: "Exact duplicate numeric/euro/% claim statements",
    });
  }
  if (m.theoryStemMaxCopies > 15) {
    findings.push({
      severity: "high",
      metric: "theoryStemMaxCopies",
      count: m.theoryStemMaxCopies,
      note: `Heaviest theory stem reused ${m.theoryStemMaxCopies}×; ${m.theoryStemsUsedOver10times} stems >10×`,
    });
  }

  if (m.exactStmtDups > 0) {
    findings.push({
      severity: "medium",
      metric: "exactStmtDups",
      count: m.exactStmtDups,
      note: `All exact statement dups (theoryInstances=${m.exactStmtDupsTheoryInstances}, calcInstances=${m.exactStmtDupsCalcInstances})`,
    });
  }

  const jh = jargon.totalHits;
  if (jh > 30) {
    findings.push({
      severity: "high",
      metric: "nonBookJargonHits",
      count: jh,
      note: "Many advanced-finance jargon hits across ch2–ch6",
    });
  } else if (jh > 0) {
    findings.push({
      severity: "medium",
      metric: "nonBookJargonHits",
      count: jh,
      note: "Some advanced-finance jargon hits (see jargonScan.perChapter)",
    });
  } else {
    findings.push({
      severity: "info",
      metric: "nonBookJargonHits",
      count: 0,
      note: "No flagged advanced jargon hits in ch2–ch6 banks",
    });
  }

  if (!scaffold.bookPdf.exists) {
    findings.push({
      severity: "medium",
      metric: "bookPdfMissing",
      count: 1,
      note: "Book PDF not found at expected Downloads path",
    });
  } else {
    findings.push({
      severity: "info",
      metric: "bookPdfPresent",
      count: 1,
      note: `Book PDF present (${scaffold.bookPdf.bytes} bytes)`,
    });
  }
  if (!scaffold.ch6BookExtractMd.exists) {
    findings.push({
      severity: "low",
      metric: "ch6BookExtractMdMissing",
      count: 1,
      note: "scripts/_ch6-book-extract.md absent (txt extracts may still exist)",
    });
  }
  if (!scaffold.hasCh6PdfTxt) {
    findings.push({
      severity: "medium",
      metric: "pdfCh6TxtMissing",
      count: 1,
      note: "scripts/_pdf_ch6.txt missing",
    });
  } else {
    findings.push({
      severity: "info",
      metric: "pdfCh6TxtPresent",
      count: 1,
      note: "scripts/_pdf_ch6.txt present for book-term alignment",
    });
  }

  if (m.theoryStemMaxCopies <= 15) {
    findings.push({
      severity: "info",
      metric: "theoryStemMaxCopies",
      count: m.theoryStemMaxCopies,
      note: `Theory stem max copies ${m.theoryStemMaxCopies}; reuse groups ${m.theoryStemReuseGroups}`,
    });
  }

  const worst =
    ["critical", "high", "medium", "low", "info"].find((s) =>
      findings.some((f) => f.severity === s)
    ) || "clean";

  const ch6GateClean =
    m.withinCaseNearDup078 === 0 &&
    m.numericExactDups === 0 &&
    m.cfLeadingMinusCells === 0 &&
    m.preSummedCfNetRows === 0 &&
    m.orphanEuros === 0 &&
    m.formulaHints === 0 &&
    m.abbreviations === 0 &&
    m.metaExtractLabels === 0 &&
    m.seeTheExtractSalt === 0 &&
    m.exactStmtDupsCalcInstances === 0;

  return {
    worst,
    countsBySeverity: {
      critical: findings.filter((f) => f.severity === "critical").length,
      high: findings.filter((f) => f.severity === "high").length,
      medium: findings.filter((f) => f.severity === "medium").length,
      low: findings.filter((f) => f.severity === "low").length,
      info: findings.filter((f) => f.severity === "info").length,
    },
    findings,
    headline: {
      ch6GateClean,
      exactStmtDupsMostlyTheoryReuse:
        m.exactStmtDupsCalcInstances === 0 && m.exactStmtDups > 0,
      jargonHits: jh,
      scaffoldingOk:
        scaffold.bookPdf.exists && scaffold.hasCh6PdfTxt && scaffold.hasFullPdfTxt,
    },
  };
}

const ch6Path = path.join(ROOT, CH6);
if (!fs.existsSync(ch6Path)) {
  console.error("Missing", CH6);
  process.exit(1);
}
const cases = JSON.parse(fs.readFileSync(ch6Path, "utf8"));
const ch6Audit = auditCh6(cases);
const jargonScan = scanJargon();
const scaffolding = checkScaffolding();
const severity = severitySummary(ch6Audit, jargonScan, scaffolding);

const report = {
  generatedAt: new Date().toISOString(),
  scope: {
    ch6Bank: CH6,
    ch6Cases: cases.length,
    banksScannedForJargon: BANKS.map((b) => b.path),
  },
  ch6Quality: ch6Audit,
  jargonScan,
  scaffolding,
  severity,
};

fs.writeFileSync(OUT, JSON.stringify(report, null, 2) + "\n");
console.log("Wrote", OUT);
console.log(JSON.stringify({ worst: severity.worst, metrics: ch6Audit.metrics, jargon: jargonScan.totalHits, headline: severity.headline }, null, 2));
