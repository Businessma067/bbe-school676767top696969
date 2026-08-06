/**
 * Generate Ch.6 Part 2 table/chart banks: 75 cases × 5 subtopics (CASE 6.x.051–125).
 * Run: node scripts/gen-ch6-table-bank.mjs
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
  genPnL2y,
  genShareSeries,
  hashSeed,
  mdAmount,
  mkExpl,
  mulberry32,
  pct,
  pnlTable2y,
  ri,
  validateTableCase,
} from "./ch6-table-gen-shared.mjs";

const plan = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"));
const SUBS = ["6.1", "6.2", "6.3", "6.4", "6.5"];

const FS_TITLES = [
  "Comparative Balance Sheet Structure",
  "Two-Year Equity Development",
  "Balance Sheet Liquidity Extract",
  "Gearing From Comparative Balance Sheets",
  "Working Capital From Balance Sheet Data",
  "Current Ratio Calculation Set",
  "Acid-Test Ratio Balance Sheet",
  "Non-Current Asset Share Trend",
  "Debt Ratio Comparative Analysis",
  "Equity Ratio Movement",
  "Comparative Assets and Liabilities",
  "Balance Sheet Financing Mix",
  "Two-Year Balance Sheet Comparison",
  "Balance Sheet Point-in-Time Analysis",
  "Comparative Cash Flow Statement",
  "Two-Year Profit and Loss Account",
  "Operating Cash Flow Movement",
  "Cash Flow Versus Profit Distinction",
  "Statement of Profit and Loss Trends",
  "Combined Financial Statement Pack",
  "Balance Sheet With Income Extract",
  "Cash Flow Linked to Balance Sheet",
  "Integrated Accounts Review",
  "Three-Asset Depreciation Schedule",
  "Depreciation and Book Value",
  "Balance Sheet With Depreciation Context",
  "Retail Balance Sheet Liquidity",
  "Turnover and Asset Base Review",
  "Return on Equity From Extract",
  "Liquidity Ratio Assertion Pack",
];

const CHART_TITLES = [
  "Chart: Equity Versus Total Assets",
  "Chart: Asset Composition Pie",
  "Chart: Share Price Movement",
  "Chart: Market Capitalisation Trend",
  "Chart: Earnings Per Share Bar",
  "Chart: Operating and Investing Flows",
  "Chart: Revenue and Operating Result",
  "Chart: Beginning Versus Ending Balances",
  "Chart: Annual Depreciation by Asset",
  "Listed Company Performance Extract",
  "Stock Market Reporting Extract",
  "Share Turnover and Price Table",
];

function titleFor(sub, idx, chart) {
  const list = chart ? CHART_TITLES : FS_TITLES;
  const base = list[idx % list.length];
  const n = Math.floor(idx / list.length);
  return n === 0 ? base : `${base} ${n + 1}`;
}

function introBs2y() {
  return "Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.";
}
function introBs1y() {
  return "Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.";
}
function introCf2y() {
  return "Consider the following cash flow statement extract (in € thousands) for a business whose identity is not disclosed, comparing the current year (Year 2) with the prior year (Year 1).";
}
function introPnl2y() {
  return "Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.";
}
function introCombined() {
  return "Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.";
}
function introListed() {
  return "Consider share-price and reporting figures for a listed business whose identity is not disclosed.";
}
function introDep() {
  return "A business owns the following fixed assets, all depreciated on a straight-line basis for a business whose identity is not disclosed.";
}
function introTurnover() {
  return "Consider the following extract (in € thousands) for a business whose identity is not disclosed.";
}

function finish(slot, context, statements, explBodies) {
  return {
    subsection: slot.subsection,
    case_id: slot.case_id,
    title: titleFor(slot.subsection, Number(slot.case_id.split(".").pop()) - 51, context.includes("[[CHART")),
    difficulty_level: slot.difficulty_level,
    tier: "full",
    half: "table",
    context,
    statements,
    answer_key: [...slot.answer_key],
    tactical_explanations: mkExpl(slot.answer_key, explBodies),
  };
}

function normStmt(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

function pickFive(candidates, want) {
  const chosen = [];
  const used = new Set();
  function backtrack(pos) {
    if (pos === 5) return true;
    for (let i = 0; i < candidates.length; i++) {
      if (used.has(i)) continue;
      if (Boolean(candidates[i].val) !== Boolean(want[pos])) continue;
      if (chosen.some((c) => jaccard(c.stmt, candidates[i].stmt) >= 0.78)) continue;
      used.add(i);
      chosen.push(candidates[i]);
      if (backtrack(pos + 1)) return true;
      chosen.pop();
      used.delete(i);
    }
    return false;
  }
  if (!backtrack(0)) return null;
  return chosen;
}

function pack(slot, context, candidates, usedStmts) {
  let fresh = candidates.filter((c) => !usedStmts.has(normStmt(c.stmt)));
  let picked = pickFive(fresh, slot.answer_key);
  if (!picked) return null;
  for (const p of picked) usedStmts.add(normStmt(p.stmt));
  return finish(
    slot,
    context,
    picked.map((c) => c.stmt),
    picked.map((c) => c.expl),
  );
}

function archetypeBs2y(slot, rng, usedStmts) {
  const y1 = genBalanceSheet(rng);
  const y2 = evolveBs(y1, rng, 0.05 + rng() * 0.08);
  const eqGrowth = (y2.equity - y1.equity) / y1.equity;
  const nca1 = y1.nca / y1.assets;
  const nca2 = y2.nca / y2.assets;
  const wc1 = y1.ca - y1.cl;
  const wc2 = y2.ca - y2.cl;
  const er1 = y1.equity / y1.assets;
  const er2 = y2.equity / y2.assets;
  const dr1 = y1.liab / y1.assets;
  const dr2 = y2.liab / y2.assets;
  const ag = (y2.assets - y1.assets) / y1.assets;
  const chart = chartBar("Equity and total assets", [
    `Year 1 | Equity=${y1.equity} | Total assets=${y1.assets}`,
    `Year 2 | Equity=${y2.equity} | Total assets=${y2.assets}`,
  ]);
  const ctx = `${introBs2y()}\n\n${chart}\n\n${bsTable2y(y1, y2)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `Total equity increased by more than 18% from Year 1 to Year 2 on this balance sheet where total assets reached €${y2.assets} thousand in Year 2.`, val: eqGrowth > 0.18, expl: `Equity rose about ${pct(eqGrowth).toFixed(1)}%.` },
    { stmt: `Since share capital remained unchanged at €${y1.share} thousand, the entire increase in equity between Year 1 and Year 2 came from internal sources rather than from new capital contributed by the owners.`, val: y1.share === y2.share && y2.retained > y1.retained, expl: y1.share === y2.share ? `Share capital stayed at ${y1.share}; retained earnings rose.` : `Share capital changed.` },
    { stmt: `Non-current assets as a percentage of total assets decreased from Year 1 to Year 2 when total assets moved from €${y1.assets} thousand to €${y2.assets} thousand.`, val: nca2 < nca1, expl: `Shares were ${pct(nca1).toFixed(1)}% then ${pct(nca2).toFixed(1)}%.` },
    { stmt: `Trade payables of €${y2.payables} thousand in Year 2 are classified under non-current liabilities because suppliers are normally allowed more than a year to be paid.`, val: false, expl: `Trade payables are current liabilities.` },
    { stmt: `Working capital more than doubled between Year 1 and Year 2, moving from €${wc1} thousand to €${wc2} thousand.`, val: wc2 > wc1 * 1.9, expl: `Working capital moved from ${wc1} to ${wc2}.` },
    { stmt: `The equity ratio on total assets of €${y2.assets} thousand improved from Year 1 to Year 2 on these published figures.`, val: er2 > er1, expl: `Equity ratio: ${pct(er1).toFixed(1)}% then ${pct(er2).toFixed(1)}%.` },
    { stmt: `The debt ratio on assets of €${y2.assets} thousand decreased from Year 1 to Year 2 when total liabilities fell relative to assets.`, val: dr2 < dr1, expl: `Debt ratio: ${pct(dr1).toFixed(1)}% then ${pct(dr2).toFixed(1)}%.` },
    { stmt: `Total assets grew from €${y1.assets} thousand to €${y2.assets} thousand, an increase of more than 12% on this comparative balance sheet.`, val: ag > 0.12, expl: `Asset growth about ${pct(ag).toFixed(1)}%.` },
    { stmt: `Non-current assets of €${y1.nca} thousand in Year 1 are fully covered by the sum of equity and non-current liabilities in that year.`, val: y1.nca <= y1.equity + y1.ncl, expl: `Year 1 cover: ${y1.nca} vs ${y1.equity + y1.ncl}.` },
    { stmt: `Non-current liabilities of €${y1.ncl} thousand exceed equity of €${y1.equity} thousand in Year 1, indicating a highly geared capital structure in that year.`, val: y1.ncl > y1.equity, expl: `Non-current liabilities exceed equity in Year 1.` },
    { stmt: `Cash and cash equivalents fell from €${y1.cash} thousand to €${y2.cash} thousand between Year 1 and Year 2 on this balance sheet.`, val: y2.cash < y1.cash, expl: `Cash moved from ${y1.cash} to ${y2.cash}.` },
    { stmt: `Inventory of €${y2.inventory} thousand was higher in Year 2 than inventory of €${y1.inventory} thousand in Year 1 on these figures.`, val: y2.inventory > y1.inventory, expl: `Inventory was ${y1.inventory} then ${y2.inventory}.` },
  ], usedStmts);
}

function archetypeBs1y(slot, rng, usedStmts) {
  const b = genBalanceSheet(rng);
  const cr = b.ca / b.cl;
  const wc = b.ca - b.cl;
  const acid = (b.ca - b.inventory) / b.cl;
  const er = b.equity / b.assets;
  const pie = chartPie("Asset composition", [
    ["Buildings", b.buildings],
    ["Machinery", b.machinery],
    ["Patents, trademarks and licences", b.patents],
    ["Inventory", b.inventory],
    ["Trade receivables", b.receivables],
    ["Cash and cash equivalents", b.cash],
  ]);
  const ctx = `${introBs1y()}\n\n${pie}\n\n${bsTableSingle(b)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `On this balance sheet showing total assets of €${b.assets} thousand, the current ratio falls between 1.5 and 2, the range often considered ideal.`, val: cr >= 1.5 && cr <= 2, expl: `Current ratio is about ${cr.toFixed(2)}.` },
    { stmt: `Working capital on these figures equals €${wc} thousand and is positive.`, val: wc > 0, expl: `Working capital equals ${wc}.` },
    { stmt: `For this business with inventory of €${b.inventory} thousand, excluding inventory from current assets gives a stricter liquidity test than the current ratio alone.`, val: true, expl: `The acid-test ratio removes inventory for a stricter liquidity test.` },
    { stmt: `The equity ratio on total assets of €${b.assets} thousand is below 25%.`, val: er < 0.25, expl: `Equity ratio is about ${pct(er).toFixed(1)}%.` },
    { stmt: `Excluding inventory of €${b.inventory} thousand, remaining current assets of €${b.ca - b.inventory} thousand still cover current liabilities of €${b.cl} thousand more than once.`, val: acid > 1, expl: `Acid-test ratio is about ${acid.toFixed(2)}.` },
    { stmt: `Total assets of €${b.assets} thousand equal total equity plus total liabilities on this balance sheet.`, val: true, expl: `The balance sheet balances at ${b.assets}.` },
    { stmt: `Inventory of €${b.inventory} thousand is classified as a non-current intangible asset on this balance sheet.`, val: false, expl: `Inventory is a current asset.` },
    { stmt: `The long-term bank loan of €${b.lt} thousand is classified as equity on this balance sheet.`, val: false, expl: `It is a non-current liability.` },
    { stmt: `The current ratio on this balance sheet of €${b.assets} thousand is below 0.8.`, val: cr < 0.8, expl: `Current ratio is about ${cr.toFixed(2)}.` },
    { stmt: `Buildings of €${b.buildings} thousand represent more than half of total assets of €${b.assets} thousand.`, val: b.buildings / b.assets > 0.5, expl: `Buildings share is about ${pct(b.buildings / b.assets).toFixed(1)}%.` },
  ], usedStmts);
}

function archetypeCf2y(slot, rng, usedStmts) {
  const { y1, y2 } = genCf2y(rng);
  const opGrowth = (y2.op - y1.op) / y1.op;
  const endFall = y1.end > 0 ? (y1.end - y2.end) / y1.end : 0;
  const chart = chartBar("Operating and investing cash flows", [
    `Year 1 | Operating=${y1.op} | Investing=${y1.inv}`,
    `Year 2 | Operating=${y2.op} | Investing=${y2.inv}`,
  ]);
  const ctx = `${introCf2y()}\n\n${chart}\n\n${cfTable2y({ y1, y2 })}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `Cash flow from operating activities rose from €${y1.op} thousand in Year 1 to €${y2.op} thousand in Year 2, an increase of more than 10%.`, val: opGrowth > 0.1, expl: `Operating growth about ${pct(opGrowth).toFixed(1)}%.` },
    { stmt: `Because investing cash flow was €${y2.inv} thousand in Year 2, the business must be in financial difficulty.`, val: false, expl: `Negative investing often reflects asset purchases.` },
    { stmt: `In Year 2, operating cash flow of €${y2.op} thousand was lower than operating cash flow before working capital changes of €${y2.opBefore} thousand.`, val: y2.op < y2.opBefore, expl: `Operating cash was below the pre-working-capital figure in Year 2.` },
    { stmt: `In Year 1, operating cash flow of €${y1.op} thousand was lower than operating cash flow before working capital changes of €${y1.opBefore} thousand.`, val: y1.op < y1.opBefore, expl: `The same pattern held in Year 1.` },
    { stmt: `Cash and cash equivalents at the end of the year fell from €${y1.end} thousand to €${y2.end} thousand, a drop of more than 20%.`, val: endFall > 0.2, expl: `End cash fell about ${pct(endFall).toFixed(1)}%.` },
    { stmt: `Cash flow from investing activities was €${y1.inv} thousand in Year 1 and €${y2.inv} thousand in Year 2, both negative on this extract.`, val: y1.inv < 0 && y2.inv < 0, expl: `Investing outflows were negative in both years.` },
    { stmt: `Cash flow from financing activities was positive in Year 2 at €${y2.fin} thousand.`, val: y2.fin > 0, expl: `Year 2 financing cash flow was ${y2.fin}.` },
    { stmt: `The net change in cash and cash equivalents was positive in Year 1 at €${y1.chg} thousand.`, val: y1.chg > 0, expl: `Year 1 net change was ${y1.chg}.` },
  ], usedStmts);
}

function archetypePnl2y(slot, rng, usedStmts) {
  const pnl = genPnL2y(rng);
  const { y1, y2 } = pnl;
  const gm1 = y1.gp / y1.rev;
  const gm2 = y2.gp / y2.rev;
  const fWorse = y2.fnet - y1.fnet;
  const chart = chartBar("Revenue and operating result", [
    `Year 1 | Revenue=${y1.rev} | Operating result=${y1.op}`,
    `Year 2 | Revenue=${y2.rev} | Operating result=${y2.op}`,
  ]);
  const ctx = `${introPnl2y()}\n\n${chart}\n\n${pnlTable2y(pnl)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `Gross profit as a percentage of revenue was higher in Year 2 than in Year 1 on this income statement where Year 2 revenue was €${y2.rev} thousand.`, val: gm2 > gm1, expl: `Margins were ${pct(gm1).toFixed(1)}% then ${pct(gm2).toFixed(1)}%.` },
    { stmt: `The operating result more than doubled from €${y1.op} thousand in Year 1 to €${y2.op} thousand in Year 2.`, val: y2.op > y1.op * 2, expl: `Operating result moved from ${y1.op} to ${y2.op}.` },
    { stmt: `On this income statement, distribution costs of €${y2.dist} thousand are deducted from revenue before gross profit is calculated.`, val: false, expl: `Gross profit is revenue minus cost of sales only.` },
    { stmt: `Finance costs – net worsened by more than €10 thousand between Year 1 and Year 2 on these figures.`, val: fWorse > 10, expl: `Finance costs – net changed by ${fWorse}.` },
    { stmt: `Revenue was higher in Year 2 at €${y2.rev} thousand than in Year 1 at €${y1.rev} thousand.`, val: y2.rev > y1.rev, expl: `Revenue rose from ${y1.rev} to ${y2.rev}.` },
    { stmt: `Profit for the year was higher in Year 2 at €${y2.pat} thousand than in Year 1 at €${y1.pat} thousand.`, val: y2.pat > y1.pat, expl: `Profit for the year was ${y1.pat} then ${y2.pat}.` },
    { stmt: `Cost of sales of €${y2.cos} thousand exceeded revenue of €${y2.rev} thousand in Year 2.`, val: y2.cos > y2.rev, expl: `Cost of sales was ${y2.cos} against revenue ${y2.rev}.` },
  ], usedStmts);
}

function archetypeCombined(slot, rng, usedStmts) {
  const b = genBalanceSheet(rng);
  const op = ri(rng, 150, 240);
  const cfOp = op + ri(rng, -20, 30);
  const cfInv = -ri(rng, 180, 300);
  const cfFin = ri(rng, 30, 80);
  const cashBeg = b.cash - (cfOp + cfInv + cfFin);
  const roce = op / (b.equity + b.ncl);
  const roe = op / b.equity;
  const wc = b.ca - b.cl;
  const net = cfOp + cfInv + cfFin;
  const pie = chartPie("Asset composition", [
    ["Buildings", b.buildings],
    ["Machinery", b.machinery],
    ["Inventory", b.inventory],
    ["Trade receivables", b.receivables],
    ["Cash and cash equivalents", b.cash],
  ]);
  const ctx = `${introCombined()}\n\n${pie}\n\n${bsTableSingle(b)}\n\n${mdAmount("Income statement extract (€ thousands)", [["Operating result", op]])}\n\n${mdAmount("Cash flow statement extract (€ thousands)", [
    ["Cash flow from operating activities", cfOp],
    ["Cash flow from investing activities", `(${Math.abs(cfInv)})`],
    ["Cash flow from financing activities", cfFin],
    ["Cash and cash equivalents at the beginning of the year", cashBeg],
  ])}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `With operating result of €${op} thousand and equity of €${b.equity} thousand, return on equity exceeds 35%.`, val: roe > 0.35, expl: `Return on equity is about ${pct(roe).toFixed(1)}%.` },
    { stmt: `Return on capital employed of about ${pct(roce).toFixed(1)}% on equity of €${b.equity} thousand is mainly useful when compared with similar businesses or past years rather than judged alone.`, val: true, expl: `Comparative context makes return on capital employed meaningful.` },
    { stmt: `Working capital on this combined extract equals €${wc} thousand.`, val: wc === 150, expl: `Working capital equals ${wc}.` },
    { stmt: `The net change in cash and cash equivalents for the year equals €${net} thousand.`, val: net === 25, expl: `Net change equals ${net}.` },
    { stmt: `Cash and cash equivalents at the end of the year equal €${cashBeg + net} thousand and exceed €90 thousand.`, val: cashBeg + net > 90, expl: `Ending cash is about ${cashBeg + net}.` },
    { stmt: `Return on capital employed exceeds 20% on these combined figures.`, val: roce > 0.2, expl: `Return on capital employed is about ${pct(roce).toFixed(1)}%.` },
    { stmt: `Cash flow from investing activities of €${cfInv} thousand was an inflow during the year.`, val: cfInv > 0, expl: `Investing cash flow was ${cfInv}.` },
  ], usedStmts);
}

function archetypeDep(slot, rng, usedStmts) {
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
  const combined3 = costA - 3 * annA + bvB3;
  const chart = chartBar("Annual depreciation by asset", [
    `Machinery | Annual depreciation=${Math.round(annA)}`,
    `Delivery truck | Annual depreciation=${Math.round(annB)}`,
    `Computer equipment | Annual depreciation=${Math.round(annC)}`,
  ]);
  const ctx = `${introDep()}\n\n${chart}\n\n${mdAmount("Asset details", [
    ["Asset A – Machinery", `€${fmt(costA)} purchase price, ${lifeA}-year useful life, no residual value`],
    ["Asset B – Delivery truck", `€${fmt(costB)} purchase price, ${lifeB}-year useful life, €${fmt(residB)} residual value`],
    ["Asset C – Computer equipment", `€${fmt(costC)} purchase price, ${lifeC}-year useful life, no residual value`],
  ])}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `Combined annual depreciation for machinery, the delivery truck and computer equipment totals €${fmt(Math.round(ann))}.`, val: Math.abs(ann - Math.round(ann)) < 1, expl: `Annual charges sum to ${fmt(Math.round(ann))}.` },
    { stmt: `After three years, the book value of the delivery truck purchased for €${fmt(costB)} is €24,000.`, val: Math.abs(bvB3 - 24000) < 500, expl: `Truck book value after three years is ${fmt(Math.round(bvB3))}.` },
    { stmt: `After three years, the €${fmt(costC)} computer equipment is fully depreciated.`, val: true, expl: `Asset C is fully written down after ${lifeC} years.` },
    { stmt: `After three years, the combined book value of all three assets exceeds €150,000 on this schedule.`, val: combined3 > 150000, expl: `Combined book value is about ${fmt(Math.round(combined3))}.` },
    { stmt: `Without recording annual depreciation on machinery costing €${fmt(costA)}, the balance sheet would overstate asset values.`, val: true, expl: `Without depreciation, assets would remain at historical cost and be overstated.` },
    { stmt: `Straight-line depreciation on the delivery truck charges €${fmt(Math.round(annB))} in every year of its ${lifeB}-year useful life.`, val: true, expl: `Straight-line depreciation spreads cost evenly across useful life.` },
    { stmt: `The €${fmt(residB)} residual value of the delivery truck is ignored when calculating its straight-line depreciation charge.`, val: false, expl: `Residual value is deducted before spreading cost over useful life.` },
  ], usedStmts);
}

function archetypeTurnover(slot, rng, usedStmts) {
  const rev = ri(rng, 900, 1300);
  const cos = Math.round(rev * (0.62 + rng() * 0.08));
  const aBeg = ri(rng, 750, 900);
  const aEnd = ri(rng, 920, 1050);
  const iBeg = ri(rng, 120, 170);
  const iEnd = ri(rng, 150, 200);
  const avgA = (aBeg + aEnd) / 2;
  const avgI = (iBeg + iEnd) / 2;
  const at = rev / avgA;
  const it = cos / avgI;
  const invShare = avgI / avgA;
  const invGrowth = (iEnd - iBeg) / iBeg;
  const chart = chartBar("Beginning versus ending balances", [
    `Total assets | Beginning=${aBeg} | Ending=${aEnd}`,
    `Inventory | Beginning=${iBeg} | Ending=${iEnd}`,
  ]);
  const ctx = `${introTurnover()}\n\n${chart}\n\n${mdAmount("Item (€ thousands)", [
    ["Revenue", fmt(rev)],
    ["Cost of sales", cos],
    ["Total assets at the beginning of the year", aBeg],
    ["Total assets at the end of the year", aEnd],
    ["Inventory at the beginning of the year", iBeg],
    ["Inventory at the end of the year", iEnd],
  ])}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `With revenue of €${rev} thousand and average total assets of €${avgA.toFixed(0)} thousand, asset turnover is above 1.5.`, val: at > 1.5, expl: `Asset turnover is about ${at.toFixed(2)}.` },
    { stmt: `With cost of sales of €${cos} thousand and average inventory of €${avgI.toFixed(0)} thousand, inventory turnover is below 5 times per year.`, val: it < 5, expl: `Inventory turnover is about ${it.toFixed(2)}.` },
    { stmt: `Average inventory of €${avgI.toFixed(0)} thousand represents less than 15% of average total assets of €${avgA.toFixed(0)} thousand.`, val: invShare < 0.15, expl: `Inventory share is about ${pct(invShare).toFixed(1)}%.` },
    { stmt: `Inventory rising from €${iBeg} thousand to €${iEnd} thousand suggests more money may be tied up in stock unless turnover improves.`, val: iEnd > iBeg, expl: `Higher inventory can tie up cash if turnover does not improve.` },
    { stmt: `Inventory increased from €${iBeg} thousand to €${iEnd} thousand, a rise of more than 25%.`, val: invGrowth > 0.25, expl: `Inventory growth is about ${pct(invGrowth).toFixed(1)}%.` },
    { stmt: `Revenue of €${rev} thousand exceeds €1,200 thousand on this extract.`, val: rev > 1200, expl: `Revenue is ${rev}.` },
    { stmt: `Total assets fell from €${aBeg} thousand to €${aEnd} thousand during the year.`, val: aEnd < aBeg, expl: `Assets moved from ${aBeg} to ${aEnd}.` },
  ], usedStmts);
}

function archetypeShare(slot, rng, usedStmts) {
  const sh = genShareSeries(rng);
  const rise = (sh.end - sh.start) / sh.start;
  const mcapEnd = (sh.end * sh.shares) / 1_000_000;
  const earnings = ri(rng, 180, 280);
  const sharesM = sh.shares / 1000;
  const eps = earnings / sharesM;
  const line = chartLine("Closing share price", sh.lineRows);
  const priceTable = ["| Month | Closing price (€) | Shares outstanding |", "| --- | ---: | ---: |"];
  for (const [m, p, s] of sh.rows) priceTable.push(`| ${m} | ${p} | ${fmt(s)} |`);
  const ctx = `${introListed()}\n\n${line}\n\n${priceTable.join("\n")}\n\n${mdAmount("Annual figures (€ thousands)", [
    ["Operating result", earnings],
    ["Shares outstanding", fmt(sh.shares)],
  ])}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `The share price rose from €${sh.start} to €${sh.end}, an increase of more than 20%.`, val: rise > 0.2, expl: `Price change is about ${pct(rise).toFixed(1)}%.` },
    { stmt: `With ${fmt(sh.shares)} shares outstanding at a closing price of €${sh.end}, market capitalisation exceeds €11 million.`, val: mcapEnd > 11, expl: `Market capitalisation is about €${mcapEnd.toFixed(1)} million.` },
    { stmt: `With operating result of €${earnings} thousand and ${fmt(sh.shares)} shares outstanding, earnings per share exceeds €0.35.`, val: eps > 0.35, expl: `Earnings per share is about €${eps.toFixed(2)}.` },
    { stmt: `The last closing price of €${sh.end} is more than 50% above the first closing price of €${sh.start}.`, val: sh.end > sh.start * 1.5, expl: `The price rise compared with the 50% threshold.` },
    { stmt: `The number of shares outstanding is ${fmt(sh.shares)}, which is positive.`, val: sh.shares > 0, expl: `Shares outstanding equal ${fmt(sh.shares)}.` },
    { stmt: `The share price fell from €${sh.start} to €${sh.end} over the months shown.`, val: sh.end < sh.start, expl: `The last price ${sh.end} compared with the first ${sh.start}.` },
    { stmt: `Operating result of €${earnings} thousand was below €200 thousand.`, val: earnings < 200, expl: `Operating result was ${earnings}.` },
  ], usedStmts);
}

function archetypeBsGearing(slot, rng, usedStmts) {
  const y1 = genBalanceSheet(rng);
  const y2 = evolveBs(y1, rng, 0.04 + rng() * 0.05);
  const er1 = y1.equity / y1.assets;
  const er2 = y2.equity / y2.assets;
  const dr1 = y1.liab / y1.assets;
  const dr2 = y2.liab / y2.assets;
  const growth = (y2.assets - y1.assets) / y1.assets;
  const chart = chartBar("Equity versus non-current liabilities", [
    `Year 1 | Equity=${y1.equity} | Non-current liabilities=${y1.ncl}`,
    `Year 2 | Equity=${y2.equity} | Non-current liabilities=${y2.ncl}`,
  ]);
  const ctx = `${introBs2y()}\n\n${chart}\n\n${bsTable2y(y1, y2)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `The equity ratio improved from ${pct(er1).toFixed(1)}% in Year 1 to ${pct(er2).toFixed(1)}% in Year 2.`, val: er2 > er1, expl: `Equity ratio rose between the two years.` },
    { stmt: `The debt ratio fell from ${pct(dr1).toFixed(1)}% in Year 1 to ${pct(dr2).toFixed(1)}% in Year 2.`, val: dr2 < dr1, expl: `Debt ratio declined between the two years.` },
    { stmt: `Non-current liabilities of €${y1.ncl} thousand and €${y2.ncl} thousand exceed equity in both years, indicating high gearing throughout.`, val: y1.ncl > y1.equity && y2.ncl > y2.equity, expl: `Non-current liabilities exceed equity in both years.` },
    { stmt: `Non-current assets of €${y1.nca} thousand and €${y2.nca} thousand are fully covered by equity plus non-current liabilities in both years on this comparative balance sheet.`, val: y1.nca <= y1.equity + y1.ncl && y2.nca <= y2.equity + y2.ncl, expl: `Coverage holds in both years on the figures shown.` },
    { stmt: `Total assets grew from €${y1.assets} thousand to €${y2.assets} thousand, an increase of more than 12%.`, val: growth > 0.12, expl: `Asset growth is about ${pct(growth).toFixed(1)}%.` },
    { stmt: `Share capital increased from €${y1.share} thousand to €${y2.share} thousand between the two years.`, val: y2.share > y1.share, expl: `Share capital was ${y1.share} then ${y2.share}.` },
    { stmt: `Retained earnings fell from €${y1.retained} thousand to €${y2.retained} thousand between the two years.`, val: y2.retained < y1.retained, expl: `Retained earnings were ${y1.retained} then ${y2.retained}.` },
  ], usedStmts);
}

function archetypeTunedBs(slot, rng, usedStmts) {
  const b = genBalanceSheet(rng);
  const cr = b.ca / b.cl;
  const wc = b.ca - b.cl;
  const er = b.equity / b.assets;
  const acid = (b.ca - b.inventory) / b.cl;
  const ctx = `${introBs1y()}\n\n${bsTableSingle(b)}\n\nEvaluate the following economic assertions:`;
  return pack(slot, ctx, [
    { stmt: `On total assets of €${b.assets} thousand, the current ratio exceeds 1.20.`, val: cr > 1.2, expl: `Current ratio is about ${cr.toFixed(2)}.` },
    { stmt: `Working capital of €${wc} thousand is positive on this balance sheet.`, val: wc > 0, expl: `Working capital equals ${wc}.` },
    { stmt: `The equity ratio on assets of €${b.assets} thousand is below 30%.`, val: er < 0.3, expl: `Equity ratio is about ${pct(er).toFixed(1)}%.` },
    { stmt: `Inventory of €${b.inventory} thousand is recorded as a non-current intangible asset.`, val: false, expl: `Inventory is a current asset.` },
    { stmt: `Excluding inventory, current assets of €${b.ca - b.inventory} thousand exceed current liabilities of €${b.cl} thousand.`, val: acid > 1, expl: `Acid-test ratio is about ${acid.toFixed(2)}.` },
    { stmt: `The current ratio on total assets of €${b.assets} thousand is below 1.00 on these figures.`, val: cr < 1, expl: `Current ratio is about ${cr.toFixed(2)}.` },
    { stmt: `Buildings of €${b.buildings} thousand exceed machinery of €${b.machinery} thousand.`, val: b.buildings > b.machinery, expl: `Buildings ${b.buildings} vs machinery ${b.machinery}.` },
    { stmt: `Cash of €${b.cash} thousand exceeds trade receivables of €${b.receivables} thousand.`, val: b.cash > b.receivables, expl: `Cash ${b.cash} vs receivables ${b.receivables}.` },
    { stmt: `Total liabilities of €${b.liab} thousand exceed total equity of €${b.equity} thousand.`, val: b.liab > b.equity, expl: `Liabilities ${b.liab} vs equity ${b.equity}.` },
    { stmt: `Share capital of €${b.share} thousand equals retained earnings of €${b.retained} thousand.`, val: b.share === b.retained, expl: `Share capital ${b.share} vs retained ${b.retained}.` },
    { stmt: `The long-term bank loan of €${b.lt} thousand is classified as equity.`, val: false, expl: `It is a non-current liability.` },
    { stmt: `Total assets equal total equity plus total liabilities at €${b.assets} thousand.`, val: true, expl: `The balance sheet balances.` },
  ], usedStmts);
}

function pickBuilders(sub, idx, chart) {
  if (chart) {
    if (sub === "6.1") return [archetypeBs1y, archetypeBs2y, archetypeShare];
    if (sub === "6.2") return [archetypeCf2y, archetypePnl2y, archetypeShare];
    if (sub === "6.3") return [archetypeCombined, archetypePnl2y, archetypeShare];
    if (sub === "6.4") return [archetypeDep, archetypeBs1y, archetypeShare];
    return [archetypeTurnover, archetypeBs1y, archetypeShare];
  }
  if (sub === "6.1") return [archetypeBs2y, archetypeBs1y, archetypeBsGearing];
  if (sub === "6.2") return [archetypeCf2y, archetypePnl2y, archetypeCombined];
  if (sub === "6.3") return [archetypeCombined, archetypePnl2y, archetypeBs2y];
  if (sub === "6.4") return [archetypeDep, archetypeBs1y, archetypeBs2y];
  return [archetypeTurnover, archetypeBs1y, archetypeCombined];
}

function generateCase(slot, usedStmts) {
  const idx = Number(slot.case_id.split(".").pop()) - 51;
  const chart = idx >= 45;
  const builders = [...pickBuilders(slot.subsection, idx, chart), archetypeTunedBs];
  for (let attempt = 0; attempt < 120; attempt++) {
    const rng = mulberry32(hashSeed(`${slot.case_id}:${attempt}`));
    const builder = builders[(idx + attempt) % builders.length];
    const c = builder(slot, rng, usedStmts);
    if (c) return c;
  }
  throw new Error(`failed ${slot.case_id}`);
}

const usedStmts = new Set();
for (const sub of SUBS) {
  const slots = plan[sub].filter((s) => s.half === "table");
  assert(slots.length === 75, `${sub} table slots`);
  const cases = slots.map((slot) => {
    const c = generateCase(slot, usedStmts);
    validateTableCase(c);
    return c;
  });
  const out = `scripts/ch6-part-${sub}-table.json`;
  fs.writeFileSync(out, JSON.stringify(cases, null, 2) + "\n");
  console.log("OK", sub, cases.length, "→", out);
}

console.log("TOTAL table cases", SUBS.length * 75);
