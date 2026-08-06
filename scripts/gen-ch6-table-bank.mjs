/**
 * Ch.6 TABLE/CHART bank — rebuilt from scratch on top of the slot plan.
 *
 * Design goals (see scripts/CH6-GEN-BRIEF.md and the rebuild task):
 *  - EXACT case_id / answer_key / difficulty_level per scripts/ch6-slot-plan.json.
 *  - Mix per subtopic's table slots: ~60% financial statements (BS/CF/P&L),
 *    ~40% charts (share price, market cap, EPS, pies/bars).
 *  - Subtopic weighting: 6.1 BS focus, 6.2 CF/P&L/depreciation, 6.3 combined
 *    extracts, 6.4 small dep/BS + conceptual companion only, 6.5 liquidity/
 *    turnover/return calc + listed-company charts.
 *  - No obvious read-offs: statements require ratio calc, growth %, threshold
 *    tests, classification judgment, or exact-figure verification — never a
 *    bare "A of €X exceeds B of €Y" comparison of two printed line items.
 *  - No abbreviations, no parenthetical formula hints, globally unique
 *    statement text, no near-duplicates (Jaccard >= 0.78) within a case.
 */
import fs from "node:fs";
import { jaccard } from "./ch6-fc-gen-shared.mjs";
import {
  assert,
  bsTable2y,
  bsTableSingle,
  cfTable2y,
  chartBar,
  chartLine,
  chartPie,
  evolveBs,
  fmt,
  genBalanceSheet,
  genCf2y,
  genDepPair,
  genPnL2y,
  genShareSeries,
  genSmallBs,
  hashSeed,
  mdAmount,
  mkExpl,
  mulberry32,
  pct,
  pnlTable2y,
  ri,
  smallBsTable,
  validateTableCase,
} from "./ch6-table-gen-shared.mjs";
import { sampleTheoryAvailable, topicsForSubsection, canUseTheory, noteTheoryUse, resetTheoryUsage } from "./ch6-theory-pool.mjs";

const plan = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"));
const SUBS = ["6.1", "6.2", "6.3", "6.4", "6.5"];

function normStmt(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

/* ---------------------------------------------------------------------- */
/* small numeric helpers for statement generation                          */
/* ---------------------------------------------------------------------- */

/** Percentage / percentage-point threshold with one decimal place for a large, near-collision-free value space. */
function pctTh(rng, lo, hi) {
  return Math.round((lo + rng() * (hi - lo)) * 10) / 10;
}

/** Whole-number threshold (used for day counts etc.). */
function intTh(rng, lo, hi) {
  return Math.round(lo + rng() * (hi - lo));
}

function timesTh(rng, lo, hi, dec = 2) {
  return Number((lo + rng() * (hi - lo)).toFixed(dec));
}

/** Draw a percentage threshold ONCE and hand it to `build` — avoids the classic bug of
 * calling pctTh twice (once for display, once for the check) and getting two different draws. */
function withPct(rng, lo, hi, build) {
  return build(pctTh(rng, lo, hi));
}

/** Same idea for a "times" (ratio) threshold. */
function withTimes(rng, lo, hi, build, dec = 2) {
  return build(timesTh(rng, lo, hi, dec));
}

/** Exact whole-number amount check: half the time the claim is exactly right. */
function exactAmt(rng, actual, { deltaMin, deltaMax, truthProb = 0.5 } = {}) {
  const a = Math.round(actual);
  if (rng() < truthProb) return { claimed: a, val: true };
  const mag = deltaMin + rng() * (deltaMax - deltaMin);
  const sign = rng() < 0.5 ? -1 : 1;
  const claimed = Math.round(a + sign * mag);
  return { claimed, val: claimed === a };
}

/** Exact percentage check (one decimal place). */
function exactPct(rng, actualFrac, { deltaMin, deltaMax, truthProb = 0.5 } = {}) {
  const a = Number((actualFrac * 100).toFixed(1));
  if (rng() < truthProb) return { claimed: a, val: true };
  const mag = deltaMin + rng() * (deltaMax - deltaMin);
  const sign = rng() < 0.5 ? -1 : 1;
  const claimed = Number((a + sign * mag).toFixed(1));
  return { claimed, val: Math.abs(claimed - a) < 0.05 };
}

/** Exact ratio check (two decimal places). */
function exactRatio(rng, actual, { deltaMin, deltaMax, truthProb = 0.5 } = {}) {
  const a = Number(actual.toFixed(2));
  if (rng() < truthProb) return { claimed: a, val: true };
  const mag = deltaMin + rng() * (deltaMax - deltaMin);
  const sign = rng() < 0.5 ? -1 : 1;
  const claimed = Number((a + sign * mag).toFixed(2));
  return { claimed, val: Math.abs(claimed - a) < 0.005 };
}

function growthUp(rng, subject, growth, lo, hi) {
  const th = pctTh(rng, lo, hi);
  return {
    stmt: `${subject} grew by more than ${th}% between Year 1 and Year 2.`,
    val: growth * 100 > th,
    expl: `${subject} changed by about ${pct(growth).toFixed(1)}% between the two years.`,
  };
}

function growthDown(rng, subject, growth, lo, hi) {
  const th = pctTh(rng, lo, hi);
  return {
    stmt: `${subject} fell by more than ${th}% between Year 1 and Year 2.`,
    val: -growth * 100 > th,
    expl: `${subject} changed by about ${pct(growth).toFixed(1)}% between the two years.`,
  };
}

function shareAbove(rng, subject, ofWhat, frac, lo, hi) {
  const th = pctTh(rng, lo, hi);
  return {
    stmt: `${subject} make up more than ${th}% of ${ofWhat}.`,
    val: frac * 100 > th,
    expl: `${subject} are about ${pct(frac).toFixed(1)}% of ${ofWhat}.`,
  };
}

function shareBelow(rng, subject, ofWhat, frac, lo, hi) {
  const th = pctTh(rng, lo, hi);
  return {
    stmt: `${subject} make up less than ${th}% of ${ofWhat}.`,
    val: frac * 100 < th,
    expl: `${subject} are about ${pct(frac).toFixed(1)}% of ${ofWhat}.`,
  };
}

/* ---------------------------------------------------------------------- */
/* case assembly                                                           */
/* ---------------------------------------------------------------------- */

function pickFive(candidates, want, { minTheory = 1, maxTheory = 3 } = {}) {
  const chosen = [];
  const used = new Set();
  let nodes = 0;
  const LIMIT = 25000;
  function theoryN(list) {
    return list.filter((c) => c.theory).length;
  }
  function backtrack(pos) {
    if (++nodes > LIMIT) return false;
    if (pos === 5) {
      const t = theoryN(chosen);
      return t >= minTheory && t <= maxTheory;
    }
    const needTheory = theoryN(chosen) < minTheory;
    const theoryFull = theoryN(chosen) >= maxTheory;
    const order = [];
    for (let i = 0; i < candidates.length; i++) {
      if (!used.has(i) && Boolean(candidates[i].val) === Boolean(want[pos])) {
        if (theoryFull && candidates[i].theory) continue;
        order.push(i);
      }
    }
    order.sort((a, b) => {
      const ta = Number(!!candidates[a].theory);
      const tb = Number(!!candidates[b].theory);
      if (needTheory) return tb - ta;
      return ta - tb;
    });
    for (const i of order) {
      if (chosen.some((c) => jaccard(c.stmt, candidates[i].stmt) >= 0.78)) continue;
      used.add(i);
      chosen.push(candidates[i]);
      if (backtrack(pos + 1)) return true;
      chosen.pop();
      used.delete(i);
    }
    return false;
  }
  if (backtrack(0)) return chosen;
  if (minTheory > 0) return pickFive(candidates, want, { minTheory: 0, maxTheory: 5 });
  return null;
}

function pack(slot, title, context, candidates, usedStmts, rng, topicOverride) {
  const topics = topicOverride || topicsForSubsection(slot.subsection);
  const theory = sampleTheoryAvailable(topics, rng || (() => 0.5), 16);
  const calc = candidates
    .filter((c) => !/\bequals exactly\b|\bis exactly €|\bis exactly \d/i.test(c.stmt))
    .map((c) => ({ ...c, theory: !!c.theory }))
    .filter((c) => !c.theory || canUseTheory(c.stmt));
  const fresh = [...calc, ...theory].filter((c) => !usedStmts.has(normStmt(c.stmt)));
  const picked = pickFive(fresh, slot.answer_key);
  if (!picked) return null;
  for (const p of picked) {
    if (p.theory) noteTheoryUse(p.stmt);
    else usedStmts.add(normStmt(p.stmt));
  }
  return {
    subsection: slot.subsection,
    case_id: slot.case_id,
    title,
    difficulty_level: slot.difficulty_level,
    tier: "full",
    half: "table",
    context,
    statements: picked.map((c) => c.stmt),
    answer_key: [...slot.answer_key],
    tactical_explanations: mkExpl(
      slot.answer_key,
      picked.map((c) => c.expl),
    ),
  };
}

function titleFor(slot, kind) {
  const n = Number(slot.case_id.split(".").pop());
  const bases = {
    bs2y: ["Comparative Balance Sheet Analysis", "Gearing From Comparative Figures", "Two-Year Balance Sheet Review"],
    bs1y: ["Liquidity From the Balance Sheet", "Asset Composition Chart", "Balance Sheet Structure Review"],
    cf2y: ["Cash Flow Statement Over Two Years", "Cash Flow Mix Over Two Years"],
    pnl2y: ["Profit and Loss Over Two Years", "Revenue and Operating Result Chart"],
    dep: ["Depreciation Schedule Review", "Annual Depreciation Chart"],
    combined: ["Combined Statement Extract", "Return and Cash Flow Extract"],
    turnover: ["Turnover and Liquidity Extract", "Asset and Inventory Turnover"],
    share: ["Share Price and Market Capitalisation", "Listed Company Performance Charts", "Earnings Per Share From Reported Figures"],
    bsSmall: ["Short Balance Sheet Extract"],
    depSmall: ["Short Depreciation Extract"],
  }[kind] || ["Statement Extract"];
  return `${bases[n % bases.length]} ${n}`;
}

/* ---------------------------------------------------------------------- */
/* archetype: comparative (two-year) balance sheet — 6.1 focus              */
/* ---------------------------------------------------------------------- */

function bs2y(slot, rng, used) {
  const y1 = genBalanceSheet(rng);
  const y2 = evolveBs(y1, rng, 0.05 + rng() * 0.09);

  const eqG = (y2.equity - y1.equity) / y1.equity;
  const ag = (y2.assets - y1.assets) / y1.assets;
  const ncaShare1 = y1.nca / y1.assets;
  const ncaShare2 = y2.nca / y2.assets;
  const wc1 = y1.ca - y1.cl;
  const wc2 = y2.ca - y2.cl;
  const er1 = y1.equity / y1.assets;
  const er2 = y2.equity / y2.assets;
  const dr1 = y1.liab / y1.assets;
  const dr2 = y2.liab / y2.assets;
  const gearing1 = y1.ncl / y1.equity;
  const gearing2 = y2.ncl / y2.equity;
  const cr1 = y1.ca / y1.cl;
  const cr2 = y2.ca / y2.cl;
  const coverage1 = (y1.equity + y1.ncl) / y1.nca;
  const invG = (y2.inventory - y1.inventory) / y1.inventory;
  const payG = (y2.payables - y1.payables) / y1.payables;
  const retG = (y2.retained - y1.retained) / y1.retained;
  const cashG = (y2.cash - y1.cash) / y1.cash;
  const equityIncrease = y2.equity - y1.equity;

  const chart = chartBar("Equity and total assets", [
    `Year 1 | Equity=${y1.equity} | Total assets=${y1.assets}`,
    `Year 2 | Equity=${y2.equity} | Total assets=${y2.assets}`,
  ]);
  const ctx = `Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n${chart}\n\n${bsTable2y(y1, y2)}\n\nEvaluate the following economic assertions:`;

  const cands = [
    growthUp(rng, "Total equity", eqG, 8, 30),
    growthUp(rng, "Total assets", ag, 6, 24),
    growthUp(rng, "Inventory", invG, 10, 35),
    growthUp(rng, "Trade payables", payG, 8, 30),
    growthDown(rng, "Cash and cash equivalents", cashG, 5, 30),
    withPct(rng, 2, 9, (th) => ({
      stmt: `The equity ratio improved by more than ${th} percentage points between Year 1 and Year 2.`,
      val: (er2 - er1) * 100 > th,
      expl: `Equity ratio moved from ${pct(er1).toFixed(1)}% to ${pct(er2).toFixed(1)}%.`,
    })),
    withPct(rng, 2, 9, (th) => ({
      stmt: `The debt ratio fell by more than ${th} percentage points between Year 1 and Year 2.`,
      val: (dr1 - dr2) * 100 > th,
      expl: `Debt ratio moved from ${pct(dr1).toFixed(1)}% to ${pct(dr2).toFixed(1)}%.`,
    })),
    withPct(rng, 45, 110, (th) => ({
      stmt: `Non-current liabilities amount to more than ${th}% of total equity in Year 1.`,
      val: gearing1 * 100 > th,
      expl: `Non-current liabilities are about ${pct(gearing1).toFixed(1)}% of equity in Year 1.`,
    })),
    withPct(rng, 55, 130, (th) => ({
      stmt: `Non-current liabilities amount to less than ${th}% of total equity in Year 2.`,
      val: gearing2 * 100 < th,
      expl: `Non-current liabilities are about ${pct(gearing2).toFixed(1)}% of equity in Year 2.`,
    })),
    shareAbove(rng, "Non-current assets", "total assets in Year 2", ncaShare2, 55, 78),
    withPct(rng, 1, 7, (th) => ({
      stmt: `The share of total assets held in non-current assets fell by more than ${th} percentage points from Year 1 to Year 2.`,
      val: (ncaShare1 - ncaShare2) * 100 > th,
      expl: `Non-current asset share moved from ${pct(ncaShare1).toFixed(1)}% to ${pct(ncaShare2).toFixed(1)}%.`,
    })),
    wc1 > 0
      ? {
          stmt: `Working capital more than doubled between Year 1 and Year 2.`,
          val: wc2 > wc1 * 2,
          expl: `Working capital moved from ${wc1} to ${wc2}.`,
        }
      : {
          stmt: `Working capital turned positive by Year 2 after being negative in Year 1.`,
          val: wc1 < 0 && wc2 > 0,
          expl: `Working capital moved from ${wc1} to ${wc2}.`,
        },
    withTimes(rng, 1.1, 2.1, (th) => ({
      stmt: `Current liabilities are covered by current assets less than ${th} times over in Year 2.`,
      val: cr2 < th,
      expl: `Current ratio in Year 2 is about ${cr2.toFixed(2)}.`,
    })),
    withPct(rng, 5, 40, (th) => ({
      stmt: `The combined total of equity and non-current liabilities exceeds non-current assets by more than ${th}% in Year 1.`,
      val: coverage1 - 1 > th / 100,
      expl: `Long-term financing covers non-current assets by about ${pct(coverage1 - 1).toFixed(1)}% in Year 1.`,
    })),
    {
      stmt: `Retained earnings grew faster than total equity as a whole between Year 1 and Year 2.`,
      val: retG > eqG,
      expl: `Retained earnings growth ≈ ${pct(retG).toFixed(1)}% versus total equity growth ≈ ${pct(eqG).toFixed(1)}%.`,
    },
    {
      stmt: `Trade payables of €${fmt(y2.payables)} thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.`,
      val: true,
      expl: `Trade payables are a current liability regardless of the amount.`,
    },
    {
      stmt: `The long-term bank loan of €${fmt(y2.lt)} thousand in Year 2 should be reclassified as a current liability because nothing in the extract indicates it falls due within one year.`,
      val: false,
      expl: `With no indication of a repayment due within one year, the loan stays non-current.`,
    },
    (() => {
      const { claimed, val } = exactAmt(rng, equityIncrease, { deltaMin: 15, deltaMax: 45 });
      return {
        stmt: `Because share capital stayed at €${fmt(y1.share)} thousand in both years, total equity increased by exactly €${fmt(claimed)} thousand from Year 1 to Year 2, all of it from retained earnings.`,
        val: y1.share === y2.share && val,
        expl: `Equity rose from ${y1.equity} to ${y2.equity}, an increase of €${fmt(equityIncrease)} thousand.`,
      };
    })(),
    (() => {
      const { claimed, val } = exactRatio(rng, cr1, { deltaMin: 0.2, deltaMax: 0.6 });
      return {
        stmt: `The current ratio in Year 1 is exactly ${claimed.toFixed(2)}.`,
        val,
        expl: `Current ratio in Year 1 is ${cr1.toFixed(2)}.`,
      };
    })(),
    growthUp(rng, "Total liabilities", (y2.liab - y1.liab) / y1.liab, 8, 26),
  ];

  return pack(slot, titleFor(slot, "bs2y"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: single-year balance sheet — liquidity / composition           */
/* ---------------------------------------------------------------------- */

function bs1yCandidates(b, rng) {
  const cr = b.ca / b.cl;
  const wc = b.ca - b.cl;
  const acid = (b.ca - b.inventory) / b.cl;
  const er = b.equity / b.assets;
  const dr = b.liab / b.assets;
  const buildingsShare = b.buildings / b.assets;
  const invShareCA = b.inventory / b.ca;
  const recShareCA = b.receivables / b.ca;
  const cashShareCA = b.cash / b.ca;
  const coverage = (b.equity + b.ncl) / b.nca;

  return [
    withTimes(rng, 1.0, 1.9, (th) => ({
      stmt: `The current ratio exceeds ${th}.`,
      val: cr > th,
      expl: `Current ratio ≈ ${cr.toFixed(2)}.`,
    })),
    withTimes(rng, 0.6, 1.3, (th) => ({
      stmt: `The current ratio is below ${th}.`,
      val: cr < th,
      expl: `Current ratio ≈ ${cr.toFixed(2)}.`,
    })),
    {
      stmt: `Working capital of €${fmt(Math.abs(wc))} thousand is positive on this balance sheet.`,
      val: wc > 0,
      expl: `Working capital = ${wc}.`,
    },
    withTimes(rng, 0.6, 1.4, (th) => ({
      stmt: `After excluding inventory, the remaining current assets still cover current liabilities more than ${th} times over.`,
      val: acid > th,
      expl: `Acid-test ratio ≈ ${acid.toFixed(2)}.`,
    })),
    withPct(rng, 15, 45, (th) => ({
      stmt: `The equity ratio is below ${th}%.`,
      val: er * 100 < th,
      expl: `Equity ratio ≈ ${pct(er).toFixed(1)}%.`,
    })),
    withPct(rng, 45, 78, (th) => ({
      stmt: `The debt ratio exceeds ${th}%.`,
      val: dr * 100 > th,
      expl: `Debt ratio ≈ ${pct(dr).toFixed(1)}%.`,
    })),
    shareAbove(rng, "Buildings", "total assets", buildingsShare, 35, 58),
    shareAbove(rng, "Inventory", "current assets", invShareCA, 30, 58),
    shareBelow(rng, "Trade receivables", "current assets", recShareCA, 30, 55),
    shareAbove(rng, "Cash and cash equivalents", "current assets", cashShareCA, 12, 35),
    withPct(rng, 4, 35, (th) => ({
      stmt: `The combined total of equity and non-current liabilities exceeds non-current assets by more than ${th}%.`,
      val: coverage - 1 > th / 100,
      expl: `Long-term financing covers non-current assets by about ${pct(coverage - 1).toFixed(1)}%.`,
    })),
    {
      stmt: `Inventory of €${fmt(b.inventory)} thousand is correctly classified as a current asset rather than a non-current intangible asset.`,
      val: true,
      expl: `Inventory is always a current asset.`,
    },
    {
      stmt: `The long-term bank loan of €${fmt(b.lt)} thousand should be classified within equity rather than liabilities.`,
      val: false,
      expl: `A bank loan is a liability, not equity, regardless of its size.`,
    },
    {
      stmt: `The bank overdraft of €${fmt(b.overdraft)} thousand belongs under non-current liabilities because overdrafts usually run for several years.`,
      val: false,
      expl: `A bank overdraft is a current liability.`,
    },
    withTimes(rng, 1.1, 2.2, (th) => ({
      stmt: `The current ratio exceeds ${th.toFixed(2)}.`,
      val: cr > th,
      expl: `Current ratio is ${cr.toFixed(2)}.`,
    })),
    {
      stmt: `Working capital is positive on this balance sheet.`,
      val: wc > 0,
      expl: `Working capital = ${wc}.`,
    },
    withPct(rng, 30, 55, (th) => ({
      stmt: `The equity ratio exceeds ${th}%.`,
      val: er * 100 > th,
      expl: `Equity ratio ≈ ${pct(er).toFixed(1)}%.`,
    })),
    withTimes(rng, 0.7, 1.4, (th) => ({
      stmt: `The acid-test ratio exceeds ${th.toFixed(2)}.`,
      val: acid > th,
      expl: `Acid-test ratio ≈ ${acid.toFixed(2)}.`,
    })),
    {
      stmt: `Total assets of €${fmt(b.assets)} thousand equal total equity plus total liabilities.`,
      val: true,
      expl: `The balance sheet balances at ${b.assets}.`,
    },
    {
      stmt: `On a balance sheet with total assets of €${fmt(b.assets)} thousand, the acid-test ratio is more conservative than the current ratio because it leaves inventory out of current assets.`,
      val: true,
      expl: `Excluding inventory always makes the acid-test ratio no higher than the current ratio.`,
    },
    withPct(rng, 20, 90, (th) => ({
      stmt: `Non-current assets exceed current assets by more than ${th}% of current assets.`,
      val: ((b.nca - b.ca) / b.ca) * 100 > th,
      expl: `Non-current assets are ${b.nca}, current assets are ${b.ca}.`,
    })),
    withPct(rng, 55, 82, (th) => ({
      stmt: `Current assets make up less than ${th}% of total assets.`,
      val: (b.ca / b.assets) * 100 < th,
      expl: `Current assets are about ${pct(b.ca / b.assets).toFixed(1)}% of total assets.`,
    })),
    withPct(rng, 30, 65, (th) => ({
      stmt: `Trade payables amount to more than ${th}% of total current liabilities.`,
      val: (b.payables / b.cl) * 100 > th,
      expl: `Trade payables are about ${pct(b.payables / b.cl).toFixed(1)}% of current liabilities.`,
    })),
    withPct(rng, 40, 75, (th) => ({
      stmt: `Non-current liabilities make up more than ${th}% of total liabilities.`,
      val: (b.ncl / b.liab) * 100 > th,
      expl: `Non-current liabilities are about ${pct(b.ncl / b.liab).toFixed(1)}% of total liabilities.`,
    })),
  ];
}

function bs1y(slot, rng, used) {
  const b = genBalanceSheet(rng);
  const pie = chartPie("Asset composition", [
    ["Buildings", b.buildings],
    ["Machinery", b.machinery],
    ["Patents, trademarks and licences", b.patents],
    ["Inventory", b.inventory],
    ["Trade receivables", b.receivables],
    ["Cash and cash equivalents", b.cash],
  ]);
  const ctx = `Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n${pie}\n\n${bsTableSingle(b)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, titleFor(slot, "bs1y"), ctx, bs1yCandidates(b, rng), used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: two-year cash flow statement — 6.2 focus                      */
/* ---------------------------------------------------------------------- */

function cf2y(slot, rng, used) {
  const { y1, y2 } = genCf2y(rng);
  const opG = (y2.op - y1.op) / y1.op;
  const divG = (y2.div - y1.div) / y1.div;
  const finUp = y2.fin > y1.fin;

  const chart = chartBar("Operating and investing cash flows", [
    `Year 1 | Operating=${y1.op} | Investing=${y1.inv}`,
    `Year 2 | Operating=${y2.op} | Investing=${y2.inv}`,
  ]);
  const ctx = `Consider the following two-year cash flow statement extract (in € thousands) for a business whose identity is not disclosed.\n\n${chart}\n\n${cfTable2y({ y1, y2 })}\n\nEvaluate the following economic assertions:`;

  const cands = [
    {
      stmt: `Cash flow from financing activities was higher in Year 2 than in Year 1.`,
      val: finUp,
      expl: `Financing moved from ${y1.fin} to ${y2.fin}.`,
    },
    withPct(rng, 8, 30, (th) => ({
      stmt: `Cash flow from operating activities grew by more than ${th}% from Year 1 to Year 2.`,
      val: opG * 100 > th,
      expl: `Operating cash flow rose by about ${pct(opG).toFixed(1)}%.`,
    })),
    withPct(rng, 10, 40, (th) => ({
      stmt: `The increase in dividends paid from Year 1 to Year 2 was proportionally smaller than the increase in cash flow from operating activities.`,
      val: divG < opG && divG * 100 < th,
      expl: `Dividends grew ≈ ${pct(divG).toFixed(1)}%; operating cash flow grew ≈ ${pct(opG).toFixed(1)}%.`,
    })),
    {
      stmt: `Investing cash flow is an outflow in both years.`,
      val: y1.inv < 0 && y2.inv < 0,
      expl: `Investing: ${y1.inv}, ${y2.inv}.`,
    },
    {
      stmt: `Proceeds from new borrowing were lower in Year 2 than in Year 1.`,
      val: y2.borrow < y1.borrow,
      expl: `Borrowing proceeds: ${y1.borrow} then ${y2.borrow}.`,
    },
    {
      stmt: `Dividends paid rose from Year 1 to Year 2.`,
      val: y2.div > y1.div,
      expl: `Dividends: ${y1.div} then ${y2.div}.`,
    },
    growthUp(rng, "Cash flow from operating activities", opG, 6, 25),
  ];

  return pack(slot, titleFor(slot, "cf2y"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: two-year profit and loss — 6.2 focus                          */
/* ---------------------------------------------------------------------- */

function pnl2y(slot, rng, used) {
  const pnl = genPnL2y(rng);
  const { y1, y2 } = pnl;
  const gm1 = y1.gp / y1.rev;
  const gm2 = y2.gp / y2.rev;
  const om1 = y1.op / y1.rev;
  const om2 = y2.op / y2.rev;
  const cover1 = y1.op / y1.fc;
  const cover2 = y2.op / y2.fc;
  const taxRate1 = y1.tax / y1.pbt;
  const taxRate2 = y2.tax / y2.pbt;
  const revG = (y2.rev - y1.rev) / y1.rev;
  const patG = (y2.pat - y1.pat) / y1.pat;

  const chart = chartBar("Revenue and operating result", [
    `Year 1 | Revenue=${y1.rev} | Operating result=${y1.op}`,
    `Year 2 | Revenue=${y2.rev} | Operating result=${y2.op}`,
  ]);
  const ctx = `Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.\n\n${chart}\n\n${pnlTable2y(pnl)}\n\nEvaluate the following economic assertions:`;

  const cands = [
    withPct(rng, 1, 6, (th) => ({
      stmt: `The gross profit margin, gross profit taken as a share of revenue, is more than ${th} percentage points higher in Year 2 than in Year 1.`,
      val: (gm2 - gm1) * 100 > th,
      expl: `Gross margins were ${pct(gm1).toFixed(1)}% then ${pct(gm2).toFixed(1)}%.`,
    })),
    growthUp(rng, "The operating result", (y2.op - y1.op) / y1.op, 15, 60),
    growthUp(rng, "Revenue", revG, 8, 22),
    growthUp(rng, "Profit for the year", patG, 8, 40),
    withPct(rng, 10, 45, (th) => ({
      stmt: `Finance costs grew by more than ${th}% between Year 1 and Year 2, outpacing the growth in the operating result.`,
      val: ((y2.fc - y1.fc) / y1.fc) * 100 > th && (y2.fc - y1.fc) / y1.fc > (y2.op - y1.op) / y1.op,
      expl: `Finance costs moved from ${y1.fc} to ${y2.fc}; operating result moved from ${y1.op} to ${y2.op}.`,
    })),
    withTimes(rng, 4, 12, (th) => ({
      stmt: `The operating result covers finance costs more than ${th} times over in Year 1.`,
      val: cover1 > th,
      expl: `Interest coverage in Year 1 ≈ ${cover1.toFixed(1)} times.`,
    })),
    withTimes(rng, 5, 14, (th) => ({
      stmt: `The operating result covers finance costs less than ${th} times over in Year 2.`,
      val: cover2 < th,
      expl: `Interest coverage in Year 2 ≈ ${cover2.toFixed(1)} times.`,
    })),
    withPct(rng, 8, 22, (th) => ({
      stmt: `The operating margin, operating result taken as a share of revenue, exceeds ${th}% in Year 2.`,
      val: om2 * 100 > th,
      expl: `Operating margin in Year 2 ≈ ${pct(om2).toFixed(1)}%.`,
    })),
    withPct(rng, 20, 32, (th) => ({
      stmt: `The effective tax rate, income taxes taken as a share of profit before tax, is below ${th}% in Year 1.`,
      val: taxRate1 * 100 < th,
      expl: `Effective tax rate in Year 1 ≈ ${pct(taxRate1).toFixed(1)}%.`,
    })),
    withPct(rng, 1, 6, (th) => ({
      stmt: `The effective tax rate rose by more than ${th} percentage points between Year 1 and Year 2.`,
      val: (taxRate2 - taxRate1) * 100 > th,
      expl: `Effective tax rate moved from ${pct(taxRate1).toFixed(1)}% to ${pct(taxRate2).toFixed(1)}%.`,
    })),
    { stmt: `Distribution costs and general and administrative costs are deducted before gross profit is calculated.`, val: false, expl: `Gross profit is revenue minus cost of sales only; those costs are deducted afterwards.` },
    { stmt: `Cost of sales is deducted from revenue to arrive at gross profit.`, val: true, expl: `Gross profit = revenue − cost of sales.` },
    withPct(rng, 100, 130, (th) => ({
      stmt: `Cost of sales amounts to more than ${th}% of revenue in Year 2, meaning gross profit is negative that year.`,
      val: (y2.cos / y2.rev) * 100 > th,
      expl: `Cost of sales is about ${pct(y2.cos / y2.rev).toFixed(1)}% of revenue in Year 2.`,
    })),
    (() => {
      const { claimed, val } = exactPct(rng, gm2, { deltaMin: 3, deltaMax: 9 });
      return { stmt: `The gross profit margin in Year 2 is exactly ${claimed.toFixed(1)}%.`, val, expl: `Gross margin in Year 2 ≈ ${pct(gm2).toFixed(1)}%.` };
    })(),
    (() => {
      const { claimed, val } = exactAmt(rng, y2.pat - y1.pat, { deltaMin: 8, deltaMax: 25 });
      return { stmt: `Profit for the year increased by exactly €${fmt(claimed)} thousand from Year 1 to Year 2.`, val, expl: `Profit moved from ${y1.pat} to ${y2.pat}.` };
    })(),
    (() => {
      const { claimed, val } = exactPct(rng, revG, { deltaMin: 3, deltaMax: 8 });
      return { stmt: `Revenue grew by exactly ${claimed.toFixed(1)}% from Year 1 to Year 2.`, val, expl: `Actual revenue growth ≈ ${pct(revG).toFixed(1)}%.` };
    })(),
  ];

  return pack(slot, titleFor(slot, "pnl2y"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: depreciation schedule — 6.2 focus (chart-centric)             */
/* ---------------------------------------------------------------------- */

function dep(slot, rng, used) {
  const costA = ri(rng, 120, 180) * 1000;
  const lifeA = ri(rng, 8, 12);
  const annA = costA / lifeA;
  const costB = ri(rng, 45, 60) * 1000;
  const residB = ri(rng, 4, 8) * 1000;
  const lifeB = 6;
  const annB = (costB - residB) / lifeB;
  const costC = ri(rng, 18, 24) * 1000;
  const lifeC = 3;
  const annC = costC / lifeC;
  const ann = annA + annB + annC;
  const bvB3 = costB - 3 * annB;
  const bvA3 = costA - 3 * annA;
  const combined3 = bvA3 + bvB3;
  const pctDepA3 = (3 * annA) / costA;

  const chart = chartBar("Annual depreciation by asset", [
    `Machinery | Annual depreciation=${Math.round(annA)}`,
    `Delivery truck | Annual depreciation=${Math.round(annB)}`,
    `Computer equipment | Annual depreciation=${Math.round(annC)}`,
  ]);
  const ctx = `A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.\n\n${chart}\n\n${mdAmount("Asset details", [
    ["Asset A – Machinery", `€${fmt(costA)} purchase price, ${lifeA}-year useful life, no residual value`],
    ["Asset B – Delivery truck", `€${fmt(costB)} purchase price, ${lifeB}-year useful life, €${fmt(residB)} residual value`],
    ["Asset C – Computer equipment", `€${fmt(costC)} purchase price, ${lifeC}-year useful life, no residual value`],
  ])}\n\nEvaluate the following economic assertions:`;

  const cands = [
    (() => {
      const { claimed, val } = exactAmt(rng, ann, { deltaMin: 900, deltaMax: 3200 });
      return { stmt: `Combined annual depreciation for the three assets is €${fmt(claimed)}.`, val, expl: `Sum of annual charges ≈ €${fmt(Math.round(ann))}.` };
    })(),
    (() => {
      const { claimed, val } = exactAmt(rng, bvB3, { deltaMin: 2000, deltaMax: 6000 });
      return { stmt: `After three years, the delivery truck's carrying value is €${fmt(claimed)}.`, val, expl: `Carrying value ≈ €${fmt(Math.round(bvB3))}.` };
    })(),
    { stmt: `After three years, the computer equipment, originally costing €${fmt(costC)}, is fully written down to nil.`, val: 3 >= lifeC, expl: `Useful life is ${lifeC} years with no residual value.` },
    (() => {
      const mult = 0.85 + rng() * 0.1;
      const thAmt = Math.round(combined3 * mult);
      return {
        stmt: `After three years, the combined carrying value of all three assets exceeds €${fmt(thAmt)}.`,
        val: combined3 > thAmt,
        expl: `Combined carrying value ≈ €${fmt(Math.round(combined3))}.`,
      };
    })(),
    { stmt: `Without recording depreciation on the €${fmt(costA)} machinery, non-current assets on the balance sheet would be overstated.`, val: true, expl: `Assets would stay at historical cost without write-downs.` },
    { stmt: `Straight-line depreciation on the €${fmt(costA)} machinery charges the same amount each year of its useful life, since it has no residual value.`, val: true, expl: `Straight-line spreads depreciable cost evenly.` },
    { stmt: `Residual value of the €${fmt(costB)} delivery truck is ignored when calculating its annual depreciation.`, val: false, expl: `Residual value is deducted from cost before spreading the remainder.` },
    withPct(rng, 25, 45, (th) => ({
      stmt: `After three years, more than ${th}% of the machinery's purchase price has been depreciated.`,
      val: pctDepA3 * 100 > th,
      expl: `About ${pct(pctDepA3).toFixed(1)}% of the machinery's cost is depreciated after three years.`,
    })),
    withPct(rng, 40, 90, (th) => ({
      stmt: `The delivery truck's annual depreciation charge is more than ${th}% higher than the computer equipment's annual depreciation charge.`,
      val: ((annB - annC) / annC) * 100 > th,
      expl: `Delivery truck ≈ €${fmt(Math.round(annB))} a year versus computer equipment ≈ €${fmt(Math.round(annC))} a year.`,
    })),
    withPct(rng, 55, 75, (th) => ({
      stmt: `The machinery accounts for more than ${th}% of the combined annual depreciation charge.`,
      val: (annA / ann) * 100 > th,
      expl: `Machinery's share of the combined charge ≈ ${pct(annA / ann).toFixed(1)}%.`,
    })),
    (() => {
      const { claimed, val } = exactAmt(rng, annA, { deltaMin: 800, deltaMax: 2500 });
      return { stmt: `The machinery's annual depreciation charge is exactly €${fmt(claimed)}.`, val, expl: `Machinery annual charge = €${fmt(Math.round(annA))}.` };
    })(),
    { stmt: `Comparing the ${lifeA}-year machinery with the ${lifeC}-year computer equipment, a shorter useful life, all else equal, produces a higher annual straight-line depreciation charge.`, val: true, expl: `Spreading the same depreciable amount over fewer years increases the annual charge.` },
    { stmt: `Depreciation on the €${fmt(costA)} machinery, the €${fmt(costB)} delivery truck and the €${fmt(costC)} computer equipment is charged directly against cash in the year it is recorded.`, val: false, expl: `Depreciation is a non-cash accounting charge, not a cash payment.` },
  ];

  return pack(slot, titleFor(slot, "dep"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: combined extract (BS + P&L + CF) — 6.3 focus                  */
/* ---------------------------------------------------------------------- */

function combined(slot, rng, used) {
  const b = genBalanceSheet(rng);
  const op = ri(rng, 150, 240);
  const cfOp = op + ri(rng, -20, 30);
  const cfInv = -ri(rng, 180, 300);
  const cfFin = ri(rng, 30, 80);
  const roce = op / (b.equity + b.ncl);
  const roe = op / b.equity;
  const wc = b.ca - b.cl;
  const cashConversion = cfOp / op;
  const invShareAssets = b.inventory / b.assets;

  const pie = chartPie("Asset composition", [
    ["Buildings", b.buildings],
    ["Machinery", b.machinery],
    ["Inventory", b.inventory],
    ["Trade receivables", b.receivables],
    ["Cash and cash equivalents", b.cash],
  ]);
  const ctx = `Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.\n\n${pie}\n\n${bsTableSingle(b)}\n\n${mdAmount("Income statement extract (€ thousands)", [["Operating result", op]])}\n\n${mdAmount("Cash flow statement extract (€ thousands)", [
    ["Cash flow from operating activities", cfOp],
    ["Cash flow from investing activities", `(${Math.abs(cfInv)})`],
    ["Cash flow from financing activities", cfFin],
  ])}\n\nEvaluate the following economic assertions:`;

  const cands = [
    withPct(rng, 22, 45, (th) => ({
      stmt: `Return on equity, the operating result taken as a percentage of total equity, exceeds ${th}%.`,
      val: roe * 100 > th,
      expl: `Return on equity ≈ ${pct(roe).toFixed(1)}%.`,
    })),
    withPct(rng, 12, 26, (th) => ({
      stmt: `Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds ${th}%.`,
      val: roce * 100 > th,
      expl: `Return on capital employed ≈ ${pct(roce).toFixed(1)}%.`,
    })),
    withPct(rng, 35, 55, (th) => ({
      stmt: `The equity ratio exceeds ${th}%.`,
      val: (b.equity / b.assets) * 100 > th,
      expl: `Equity ratio ≈ ${pct(b.equity / b.assets).toFixed(1)}%.`,
    })),
    withPct(rng, 75, 105, (th) => ({
      stmt: `Cash flow from operating activities amounts to less than ${th}% of the operating result, indicating profit is only partly backed by cash.`,
      val: cashConversion * 100 < th,
      expl: `Cash conversion ≈ ${pct(cashConversion).toFixed(1)}% of the operating result.`,
    })),
    shareAbove(rng, "Inventory", "total assets", invShareAssets, 10, 28),
    {
      stmt: `Working capital is positive on this extract.`,
      val: wc > 0,
      expl: `Working capital = ${wc}.`,
    },
    {
      stmt: `Cash flow from investing activities was an outflow this year.`,
      val: cfInv < 0,
      expl: `Investing cash flow = ${cfInv}.`,
    },
  ];

  return pack(slot, titleFor(slot, "combined"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: turnover / activity ratios — 6.5 focus                        */
/* ---------------------------------------------------------------------- */

function turnover(slot, rng, used) {
  const rev = ri(rng, 900, 1300);
  const cos = Math.round(rev * (0.62 + rng() * 0.08));
  const aBeg = ri(rng, 750, 900);
  const aEnd = ri(rng, 920, 1050);
  const iBeg = ri(rng, 120, 170);
  const iEnd = ri(rng, 150, 200);
  const rBeg = ri(rng, 90, 140);
  const rEnd = ri(rng, 100, 160);
  const avgA = (aBeg + aEnd) / 2;
  const avgI = (iBeg + iEnd) / 2;
  const avgR = (rBeg + rEnd) / 2;
  const at = rev / avgA;
  const it = cos / avgI;
  const rt = rev / avgR;
  const collectionDays = 365 / rt;
  const invShare = avgI / avgA;
  const invG = (iEnd - iBeg) / iBeg;

  const chart = chartBar("Beginning versus ending balances", [
    `Total assets | Beginning=${aBeg} | Ending=${aEnd}`,
    `Inventory | Beginning=${iBeg} | Ending=${iEnd}`,
  ]);
  const ctx = `Consider the following extract (in € thousands) for a business whose identity is not disclosed.\n\n${chart}\n\n${mdAmount("Item (€ thousands)", [
    ["Revenue", fmt(rev)],
    ["Cost of sales", cos],
    ["Total assets at the beginning of the year", aBeg],
    ["Total assets at the end of the year", aEnd],
    ["Inventory at the beginning of the year", iBeg],
    ["Inventory at the end of the year", iEnd],
    ["Trade receivables at the beginning of the year", rBeg],
    ["Trade receivables at the end of the year", rEnd],
  ])}\n\nEvaluate the following economic assertions:`;

  const cands = [
    withTimes(rng, 1.0, 1.6, (th) => ({
      stmt: `Asset turnover, revenue taken relative to average total assets, is above ${th}.`,
      val: at > th,
      expl: `Asset turnover ≈ ${at.toFixed(2)}.`,
    })),
    withTimes(rng, 4.5, 7.5, (th) => ({
      stmt: `Inventory turnover, cost of sales taken relative to average inventory, is below ${th} times per year.`,
      val: it < th,
      expl: `Inventory turnover ≈ ${it.toFixed(2)}.`,
    })),
    withTimes(rng, 7, 11, (th) => ({
      stmt: `Trade receivables turnover, revenue taken relative to average trade receivables, exceeds ${th} times per year.`,
      val: rt > th,
      expl: `Receivables turnover ≈ ${rt.toFixed(2)}.`,
    })),
    (() => {
      const th = intTh(rng, 30, 60);
      return {
        stmt: `On average, revenue remains outstanding in trade receivables for more than ${th} days.`,
        val: collectionDays > th,
        expl: `Average collection period ≈ ${collectionDays.toFixed(0)} days.`,
      };
    })(),
    shareBelow(rng, "Average inventory", "average total assets", invShare, 12, 20),
    {
      stmt: `With inventory turnover of about ${it.toFixed(1)} times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.`,
      val: true,
      expl: `High turnover signals faster stock rotation.`,
    },
    growthUp(rng, "Inventory", invG, 15, 40),
    (() => {
      const mult = 0.85 + rng() * 0.2;
      const thAmt = Math.round(rev * mult);
      return { stmt: `Revenue exceeds €${fmt(thAmt)} thousand.`, val: rev > thAmt, expl: `Revenue = ${fmt(rev)}.` };
    })(),
    { stmt: `Total assets grew during the year.`, val: aEnd > aBeg, expl: `Assets moved from ${aBeg} to ${aEnd}.` },
    withPct(rng, 58, 72, (th) => ({
      stmt: `Cost of sales amounts to more than ${th}% of revenue.`,
      val: (cos / rev) * 100 > th,
      expl: `Cost of sales is about ${pct(cos / rev).toFixed(1)}% of revenue.`,
    })),
    (() => {
      const { claimed, val } = exactRatio(rng, at, { deltaMin: 0.15, deltaMax: 0.4 });
      return { stmt: `Asset turnover is exactly ${claimed.toFixed(2)}.`, val, expl: `Asset turnover ≈ ${at.toFixed(2)}.` };
    })(),
    (() => {
      const { claimed, val } = exactRatio(rng, it, { deltaMin: 0.4, deltaMax: 1.2 });
      return { stmt: `Inventory turnover is exactly ${claimed.toFixed(2)} times per year.`, val, expl: `Inventory turnover ≈ ${it.toFixed(2)}.` };
    })(),
    {
      stmt: `Inventory turnover is higher than trade receivables turnover, meaning stock rotates faster than customer collections.`,
      val: it > rt,
      expl: `Inventory turnover ≈ ${it.toFixed(2)} versus receivables turnover ≈ ${rt.toFixed(2)}.`,
    },
    withPct(rng, 5, 25, (th) => ({
      stmt: `Trade receivables grew by more than ${th}% between the beginning and the end of the year.`,
      val: ((rEnd - rBeg) / rBeg) * 100 > th,
      expl: `Trade receivables moved from ${rBeg} to ${rEnd}.`,
    })),
  ];

  return pack(slot, titleFor(slot, "turnover"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* archetype: listed-company charts — share price / market cap / EPS        */
/* ---------------------------------------------------------------------- */

function share(slot, rng, used) {
  const sh = genShareSeries(rng);
  const rise = (sh.end - sh.start) / sh.start;
  const mcapStart = (sh.start * sh.shares) / 1_000_000;
  const mcapEnd = (sh.end * sh.shares) / 1_000_000;
  const earnings = ri(rng, 180, 320);
  const eps = earnings / (sh.shares / 1000);
  const prices = sh.rows.map((r) => r[1]);
  const vols = sh.rows.map((r) => r[3]);
  const maxP = Math.max(...prices);
  const minP = Math.min(...prices);
  const maxVol = Math.max(...vols);
  const minVol = Math.min(...vols);
  const volTurn = sh.totalVol / sh.shares;
  let risingMonths = 0;
  for (let i = 1; i < prices.length; i++) if (prices[i] > prices[i - 1]) risingMonths++;

  const line = chartLine("Closing share price", sh.lineRows);
  const volChart = chartBar("Monthly share turnover", sh.volRows);
  const rows = [
    "| Month | Closing price (€) | Shares traded |",
    "| --- | ---: | ---: |",
  ];
  for (const [m, p, , v] of sh.rows) rows.push(`| ${m} | ${p} | ${fmt(v)} |`);
  const ctx = `Consider the share market extract below for a listed business whose identity is not disclosed.\n\n${line}\n\n${volChart}\n\n${rows.join("\n")}\n\n${mdAmount("Annual figures", [
    ["Operating result (€ thousands)", earnings],
    ["Shares outstanding", fmt(sh.shares)],
    ["Total shares traded (six months)", fmt(sh.totalVol)],
  ])}\n\nEvaluate the following economic assertions:`;

  const cands = [
    withPct(rng, 8, 35, (th) => ({
      stmt: `The closing share price rose by more than ${th}% from first to last month.`,
      val: rise * 100 > th,
      expl: `Price change ≈ ${pct(rise).toFixed(1)}%.`,
    })),
    (() => {
      const thAmt = Number((mcapEnd * (0.75 + rng() * 0.2)).toFixed(1));
      return {
        stmt: `Market capitalisation at the last month exceeds €${thAmt} million.`,
        val: mcapEnd > thAmt,
        expl: `Market capitalisation ≈ €${mcapEnd.toFixed(1)} million.`,
      };
    })(),
    withPct(rng, 8, 35, (th) => ({
      stmt: `Market capitalisation rose by more than ${th}% over the period.`,
      val: ((mcapEnd - mcapStart) / mcapStart) * 100 > th,
      expl: `€${mcapStart.toFixed(1)}m → €${mcapEnd.toFixed(1)}m.`,
    })),
    (() => {
      const thAmt = Number((eps * (0.7 + rng() * 0.25)).toFixed(2));
      return {
        stmt: `Earnings per share exceeds €${thAmt}.`,
        val: eps > thAmt,
        expl: `Earnings per share ≈ €${eps.toFixed(2)}.`,
      };
    })(),
    withPct(rng, 12, 45, (th) => ({
      stmt: `Highest closing price is more than ${th}% above the lowest.`,
      val: ((maxP - minP) / minP) * 100 > th,
      expl: `Range €${minP}–€${maxP}.`,
    })),
    withPct(rng, 8, 40, (th) => ({
      stmt: `Total shares traded over six months exceed ${th}% of shares outstanding.`,
      val: volTurn * 100 > th,
      expl: `Turnover ≈ ${pct(volTurn).toFixed(1)}% of shares outstanding.`,
    })),
    (() => {
      const th = intTh(rng, Math.round(maxVol * 0.6), Math.round(maxVol * 1.15));
      return {
        stmt: `Peak monthly share turnover exceeds ${fmt(th)} shares.`,
        val: maxVol > th,
        expl: `Peak monthly volume = ${fmt(maxVol)}.`,
      };
    })(),
    {
      stmt: `Share turnover peaked in the same month as the highest closing price.`,
      val: prices.indexOf(maxP) === vols.indexOf(maxVol),
      expl: `Peak price month vs peak volume month.`,
    },
    {
      stmt: `Closing price rose in more than half of the month-to-month steps.`,
      val: risingMonths > (prices.length - 1) / 2,
      expl: `Rose in ${risingMonths} of ${prices.length - 1} steps.`,
    },
    { stmt: `Shares outstanding equal ${fmt(sh.shares)}.`, val: true, expl: `Shares outstanding = ${fmt(sh.shares)}.` },
    { stmt: `The last closing price is below the first.`, val: sh.end < sh.start, expl: `${sh.start} → ${sh.end}.` },
    (() => {
      const th = intTh(rng, 190, 300);
      return { stmt: `Operating result is below €${th} thousand.`, val: earnings < th, expl: `Operating result = ${earnings}.` };
    })(),
  ];

  return pack(slot, titleFor(slot, "share"), ctx, cands, used, rng, ["shares", "analysis"]);
}

/* ---------------------------------------------------------------------- */
/* archetype: small balance sheet — 6.4 (half-page + conceptual companion)  */
/* ---------------------------------------------------------------------- */

function conceptualPool(rng, anchorLabel, anchorAmt) {
  const a = `€${fmt(anchorAmt)} thousand`;
  return [
    {
      stmt: `A published version of the extract above, showing ${anchorLabel} of ${a}, is an example of external financial reporting that a lender might study before extending credit.`,
      val: true,
      expl: `Financial accounting reports are prepared for external users such as lenders and shareholders.`,
    },
    {
      stmt: `Because the extract above (${anchorLabel} of ${a}) covers only one financial year, external users such as shareholders could not rely on it at all.`,
      val: false,
      expl: `External users routinely rely on single-year financial statements, often alongside prior-year comparatives.`,
    },
    {
      stmt: `An independent audit of the extract above, including the ${anchorLabel} of ${a}, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee.`,
      val: true,
      expl: `Audits provide reasonable, not absolute, assurance.`,
    },
    {
      stmt: `Internal management reports covering the same period as the extract above (${anchorLabel} of ${a}) must follow the identical statutory format shown here.`,
      val: false,
      expl: `Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.`,
    },
    {
      stmt: `Because the extract above discloses ${anchorLabel} of ${a} to outside parties, it is best described as financial accounting rather than management accounting.`,
      val: true,
      expl: `Reports aimed at external parties fall under financial accounting.`,
    },
    {
      stmt: `The ${anchorLabel} of ${a} shown above would never be disclosed to any party outside the business under any circumstances.`,
      val: false,
      expl: `Figures such as this are routinely published for external users like tax authorities and shareholders.`,
    },
    {
      stmt: `An auditor reviewing the extract above, including ${anchorLabel} of ${a}, is responsible for forming an opinion on the figures, not for guaranteeing the business will remain profitable.`,
      val: true,
      expl: `Audit opinions relate to the fairness of the figures, not to future business performance.`,
    },
    {
      stmt: `Tax authorities have no legitimate interest in the ${anchorLabel} of ${a} disclosed above.`,
      val: false,
      expl: `Tax authorities are a standard external user of published financial statements.`,
    },
  ];
}

function bsSmall(slot, rng, used) {
  const b = genSmallBs(rng);
  const cr = b.ca / b.cl;
  const wc = b.ca - b.cl;
  const er = b.equity / b.assets;

  const bar = chartBar("Equity and liabilities", [
    `Total equity=${b.equity}`,
    `Total liabilities=${b.liab}`,
  ]);
  const ctx = `Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n${bar}\n\n${smallBsTable(b)}\n\nEvaluate the following economic assertions:`;

  const numeric = [
    withTimes(rng, 1.0, 1.8, (th) => ({
      stmt: `The current ratio exceeds ${th}.`,
      val: cr > th,
      expl: `Current ratio ≈ ${cr.toFixed(2)}.`,
    })),
    { stmt: `Working capital is positive on this extract.`, val: wc > 0, expl: `Working capital = ${wc}.` },
    withPct(rng, 20, 50, (th) => ({
      stmt: `The equity ratio is below ${th}%.`,
      val: er * 100 < th,
      expl: `Equity ratio ≈ ${pct(er).toFixed(1)}%.`,
    })),
    { stmt: `Inventory of €${fmt(b.inventory)} thousand is correctly classified as a current asset.`, val: true, expl: `Inventory is always current.` },
    { stmt: `The long-term bank loan of €${fmt(b.loan)} thousand is correctly classified within equity.`, val: false, expl: `A loan is a liability, never equity.` },
    (() => {
      const { claimed, val } = exactRatio(rng, cr, { deltaMin: 0.2, deltaMax: 0.5 });
      return { stmt: `The current ratio is exactly ${claimed.toFixed(2)}.`, val, expl: `Current ratio ≈ ${cr.toFixed(2)}.` };
    })(),
  ];
  const conceptual = conceptualPool(rng, "total assets", b.assets);
  const cands = [...numeric, ...conceptual];

  return pack(slot, titleFor(slot, "bsSmall"), ctx, cands, used, rng);
}

function depSmall(slot, rng, used) {
  const d = genDepPair(rng);
  const bar = chartBar("Annual depreciation", [`Asset A=${Math.round(d.ann)}`, `Asset B=${Math.round(d.ann2)}`]);
  const ctx = `A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.\n\n${bar}\n\n${mdAmount("Asset details", [
    ["Asset A", `€${fmt(d.cost)} purchase price, ${d.life}-year useful life, no residual value`],
    ["Asset B", `€${fmt(d.cost2)} purchase price, ${d.life2}-year useful life, €${fmt(d.resid2)} residual value`],
  ])}\n\nEvaluate the following economic assertions:`;

  const numeric = [
    (() => {
      const { claimed, val } = exactAmt(rng, d.ann, { deltaMin: 500, deltaMax: 1800 });
      return { stmt: `Asset A's annual depreciation charge is exactly €${fmt(claimed)}.`, val, expl: `Asset A annual charge = €${fmt(Math.round(d.ann))}.` };
    })(),
    (() => {
      const { claimed, val } = exactAmt(rng, d.ann2, { deltaMin: 500, deltaMax: 1500 });
      return { stmt: `Asset B's annual depreciation charge is exactly €${fmt(claimed)}.`, val, expl: `Asset B annual charge = €${fmt(Math.round(d.ann2))}.` };
    })(),
    { stmt: `Residual value reduces the amount of Asset B's cost that is spread as depreciation.`, val: true, expl: `Depreciable amount = cost minus residual value.` },
    { stmt: `Asset A will be fully written down to nil residual value at the end of its useful life.`, val: true, expl: `Asset A has no residual value.` },
    withPct(rng, 15, 45, (th) => ({
      stmt: `Asset A's annual depreciation charge is more than ${th}% higher than Asset B's annual depreciation charge.`,
      val: ((d.ann - d.ann2) / d.ann2) * 100 > th,
      expl: `Asset A ≈ €${fmt(Math.round(d.ann))} a year versus Asset B ≈ €${fmt(Math.round(d.ann2))} a year.`,
    })),
  ];
  const conceptual = conceptualPool(rng, "the combined asset cost", d.cost + d.cost2);
  const cands = [...numeric, ...conceptual];

  return pack(slot, titleFor(slot, "depSmall"), ctx, cands, used, rng);
}

/* ---------------------------------------------------------------------- */
/* per-subtopic archetype weighting                                        */
/* ---------------------------------------------------------------------- */

function buildersFor(sub, chartHeavy) {
  // chartHeavy ≈ last 40% of table slots → listed share charts dominate
  if (chartHeavy) {
    if (sub === "6.1") return [share, share, bs1y];
    if (sub === "6.2") return [share, share, dep];
    if (sub === "6.3") return [share, share, combined];
    if (sub === "6.4") return [share, depSmall, bsSmall];
    return [share, share, share, turnover];
  }
  if (sub === "6.1") return [bs2y, bs2y, bs1y];
  if (sub === "6.2") return [cf2y, pnl2y, dep, cf2y];
  if (sub === "6.3") return [combined, pnl2y, bs2y];
  if (sub === "6.4") return [bsSmall, depSmall];
  return [turnover, bs1y, combined, turnover];
}

function rescue(slot, rng, used) {
  // Last-resort archetype: reuses the large bs1y pool with a fresh balance sheet
  // draw so it has as much headroom as the primary archetypes.
  const b = genBalanceSheet(rng);
  const bar = chartBar("Current assets and current liabilities", [
    `Current assets=${b.ca}`,
    `Current liabilities=${b.cl}`,
  ]);
  const ctx = `Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n${bar}\n\n${bsTableSingle(b)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, titleFor(slot, "bs1y"), ctx, bs1yCandidates(b, rng), used, rng);
}

function generateCase(slot, used, tableIndex, tableCount) {
  // ~40% of table slots → listed share / market charts
  const marketBand = tableIndex / Math.max(1, tableCount) >= 0.6;
  const builders = marketBand
    ? [share, share, share]
    : [...buildersFor(slot.subsection, false), rescue];
  for (let attempt = 0; attempt < 400; attempt++) {
    const rng = mulberry32(hashSeed(`${slot.case_id}:${attempt}`));
    let builder = builders[(tableIndex + attempt) % builders.length];
    if (marketBand && attempt >= 250) builder = rescue;
    const c = builder(slot, rng, used);
    if (c) return c;
  }
  throw new Error(`failed ${slot.case_id}`);
}

/* ---------------------------------------------------------------------- */
/* main                                                                     */
/* ---------------------------------------------------------------------- */

const usedStmts = new Set();
resetTheoryUsage();
let grand = 0;
for (const sub of SUBS) {
  const slots = plan[sub].filter((s) => s.half === "table");
  assert(slots.length > 0, `${sub} no table slots`);
  const cases = slots.map((slot, i) => {
    const c = generateCase(slot, usedStmts, i, slots.length);
    validateTableCase(c);
    return c;
  });
  fs.writeFileSync(`scripts/ch6-part-${sub}-table.json`, JSON.stringify(cases, null, 2) + "\n");
  console.log("OK", sub, "table", cases.length);
  grand += cases.length;
}
console.log("TOTAL table", grand);
