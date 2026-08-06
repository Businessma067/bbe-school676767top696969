/**
 * Shared programmatic generators for Ch.6 Part 2 table/chart cases.
 */
import { jaccard } from "./ch6-fc-gen-shared.mjs";

export function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

export function pct(n) {
  return n * 100;
}

export function fmt(n) {
  return Number(n).toLocaleString("en-GB");
}

export function hashSeed(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function ri(rng, min, max) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

export function chartBar(title, rows) {
  return [
    `[[CHART type="bar" title="${title}"]]`,
    ...rows,
    `[[/CHART]]`,
  ].join("\n");
}

export function chartLine(title, rows) {
  return [
    `[[CHART type="line" title="${title}"]]`,
    ...rows,
    `[[/CHART]]`,
  ].join("\n");
}

export function chartPie(title, slices) {
  return [
    `[[CHART type="pie" title="${title}"]]`,
    ...slices.map(([n, v]) => `${n}=${v}`),
    `[[/CHART]]`,
  ].join("\n");
}

export function md2year(headerLeft, rows) {
  const lines = [`| ${headerLeft} | Year 1 | Year 2 |`, `| --- | ---: | ---: |`];
  for (const [label, a, b] of rows) {
    if (a === "" && b === "") lines.push(`| **${label}** | | |`);
    else lines.push(`| ${label} | ${a} | ${b} |`);
  }
  return lines.join("\n");
}

export function mdAmount(headerLeft, rows) {
  const lines = [`| ${headerLeft} | Amount |`, `| --- | ---: |`];
  for (const [label, amt] of rows) {
    if (amt === "") lines.push(`| **${label}** | |`);
    else lines.push(`| ${label} | ${amt} |`);
  }
  return lines.join("\n");
}

/** Build a balanced single-year balance sheet (€ thousands). */
export function genBalanceSheet(rng) {
  const buildings = ri(rng, 280, 520);
  const machinery = ri(rng, 120, 280);
  const office = ri(rng, 30, 80);
  const patents = ri(rng, 20, 100);
  const inventory = ri(rng, 80, 280);
  const receivables = ri(rng, 60, 180);
  const cash = ri(rng, 30, 120);
  const assets = buildings + machinery + office + patents + inventory + receivables + cash;

  const share = ri(rng, 100, 300);
  let retained = ri(rng, 80, 350);
  const lt = ri(rng, 180, 450);
  const bonds = ri(rng, 40, 90);
  const payables = ri(rng, 60, 250);
  const overdraft = ri(rng, 25, 90);
  let equity = share + retained;
  let liab = lt + bonds + payables + overdraft;
  const diff = assets - equity - liab;
  retained += diff;
  equity = share + retained;
  assert(equity + liab === assets, "bs balance");
  return {
    buildings,
    machinery,
    office,
    patents,
    inventory,
    receivables,
    cash,
    assets,
    share,
    retained,
    equity,
    lt,
    bonds,
    payables,
    overdraft,
    liab,
    nca: buildings + machinery + office + patents,
    ca: inventory + receivables + cash,
    ncl: lt + bonds,
    cl: payables + overdraft,
  };
}

export function evolveBs(base, rng, growth = 0.08) {
  const f = (n, spread = 0.15) => Math.max(5, Math.round(n * (1 + growth + (rng() - 0.5) * spread)));
  const y2 = {
    buildings: f(base.buildings),
    machinery: f(base.machinery),
    office: f(base.office, 0.1),
    patents: base.patents,
    inventory: f(base.inventory, 0.2),
    receivables: f(base.receivables, 0.18),
    cash: Math.max(20, f(base.cash, 0.25)),
    share: base.share,
    retained: f(base.retained, 0.12),
    lt: f(base.lt, 0.1),
    bonds: f(base.bonds, 0.08),
    payables: f(base.payables, 0.15),
    overdraft: Math.max(15, f(base.overdraft, 0.2)),
  };
  y2.assets =
    y2.buildings + y2.machinery + y2.office + y2.patents + y2.inventory + y2.receivables + y2.cash;
  y2.equity = y2.share + y2.retained;
  y2.liab = y2.lt + y2.bonds + y2.payables + y2.overdraft;
  const diff = y2.assets - y2.equity - y2.liab;
  y2.retained += diff;
  y2.equity = y2.share + y2.retained;
  y2.nca = y2.buildings + y2.machinery + y2.office + y2.patents;
  y2.ca = y2.inventory + y2.receivables + y2.cash;
  y2.ncl = y2.lt + y2.bonds;
  y2.cl = y2.payables + y2.overdraft;
  assert(y2.equity + y2.liab === y2.assets, "y2 balance");
  return y2;
}

export function bsTableSingle(b) {
  return mdAmount("€ in thousands", [
    ["ASSETS", ""],
    ["Buildings", b.buildings],
    ["Machinery", b.machinery],
    ["Office equipment", b.office],
    ["Patents, trademarks and licences", b.patents],
    ["Inventory", b.inventory],
    ["Trade receivables", b.receivables],
    ["Cash and cash equivalents", b.cash],
    ["Total assets", `**${b.assets}**`],
    ["EQUITY", ""],
    ["Share capital", b.share],
    ["Retained earnings", b.retained],
    ["Total equity", `**${b.equity}**`],
    ["LIABILITIES", ""],
    ["Long-term bank loan", b.lt],
    ["Bonds payable", b.bonds],
    ["Trade payables", b.payables],
    ["Bank overdraft", b.overdraft],
    ["Total liabilities", `**${b.liab}**`],
    ["Total equity and liabilities", `**${b.assets}**`],
  ]);
}

export function bsTable2y(y1, y2) {
  return md2year("€ in thousands", [
    ["ASSETS", "", ""],
    ["Buildings", y1.buildings, y2.buildings],
    ["Machinery", y1.machinery, y2.machinery],
    ["Office equipment", y1.office, y2.office],
    ["Patents, trademarks and licences", y1.patents, y2.patents],
    ["Inventory", y1.inventory, y2.inventory],
    ["Trade receivables", y1.receivables, y2.receivables],
    ["Cash and cash equivalents", y1.cash, y2.cash],
    ["Total assets", `**${y1.assets}**`, `**${y2.assets}**`],
    ["EQUITY", "", ""],
    ["Share capital", y1.share, y2.share],
    ["Retained earnings", y1.retained, y2.retained],
    ["Total equity", `**${y1.equity}**`, `**${y2.equity}**`],
    ["LIABILITIES", "", ""],
    ["Long-term bank loan", y1.lt, y2.lt],
    ["Bonds payable", y1.bonds, y2.bonds],
    ["Trade payables", y1.payables, y2.payables],
    ["Bank overdraft", y1.overdraft, y2.overdraft],
    ["Total liabilities", `**${y1.liab}**`, `**${y2.liab}**`],
    ["Total equity and liabilities", `**${y1.assets}**`, `**${y2.assets}**`],
  ]);
}

export function genPnL2y(rng) {
  const y1 = {
    rev: ri(rng, 700, 1100),
    cosPct: 0.58 + rng() * 0.08,
    dist: ri(rng, 35, 55),
    admin: ri(rng, 25, 45),
    other: ri(rng, -3, 5),
    fc: ri(rng, 14, 22),
    taxPct: 0.19 + rng() * 0.06,
  };
  y1.cos = Math.round(y1.rev * y1.cosPct);
  y1.gp = y1.rev - y1.cos;
  y1.op = y1.gp - y1.dist - y1.admin + y1.other;
  y1.fnet = y1.fc - ri(rng, 3, 7);
  y1.pbt = y1.op - y1.fnet;
  y1.tax = Math.round(y1.pbt * y1.taxPct);
  y1.pat = y1.pbt - y1.tax;

  const y2 = {
    rev: Math.round(y1.rev * (1.12 + rng() * 0.1)),
    cosPct: y1.cosPct + (rng() - 0.5) * 0.02,
    dist: y1.dist + ri(rng, 5, 15),
    admin: y1.admin + ri(rng, 5, 12),
    other: ri(rng, -4, 4),
    fc: y1.fc + ri(rng, 2, 8),
    taxPct: y1.taxPct + (rng() - 0.4) * 0.03,
  };
  y2.cos = Math.round(y2.rev * y2.cosPct);
  y2.gp = y2.rev - y2.cos;
  y2.op = y2.gp - y2.dist - y2.admin + y2.other;
  y2.fnet = y2.fc - ri(rng, 2, 6);
  y2.pbt = y2.op - y2.fnet;
  y2.tax = Math.round(y2.pbt * y2.taxPct);
  y2.pat = y2.pbt - y2.tax;
  return { y1, y2 };
}

export function pnlTable2y({ y1, y2 }) {
  const neg = (n) => (n < 0 ? `(${Math.abs(n)})` : n);
  return md2year("Item (€ thousands)", [
    ["Revenue", y1.rev, y2.rev],
    ["Cost of sales", `(${y1.cos})`, `(${y2.cos})`],
    ["Gross profit", y1.gp, y2.gp],
    ["Distribution costs", `(${y1.dist})`, `(${y2.dist})`],
    ["General and administrative costs", `(${y1.admin})`, `(${y2.admin})`],
    ["Other operating result", neg(y1.other), neg(y2.other)],
    ["Operating result", y1.op, y2.op],
    ["Finance costs", `(${y1.fc})`, `(${y2.fc})`],
    ["Finance costs – net", `(${y1.fnet})`, `(${y2.fnet})`],
    ["Profit before tax", y1.pbt, y2.pbt],
    ["Income taxes", `(${y1.tax})`, `(${y2.tax})`],
    ["Profit for the year", y1.pat, y2.pat],
  ]);
}

export function genCf2y(rng) {
  // Book-style extract: operating / investing / financing components.
  // Never pre-sum a net change or ending-cash line — students must compute if needed.
  const y1 = {
    op: ri(rng, 280, 400),
    inv: -ri(rng, 240, 360),
    div: ri(rng, 35, 70),
    borrow: ri(rng, 50, 110),
  };
  y1.fin = -y1.div + y1.borrow;
  y1.chg = y1.op + y1.inv + y1.fin;
  const y2 = {
    op: y1.op + ri(rng, 20, 70),
    inv: -ri(rng, 280, 420),
    div: y1.div + ri(rng, 5, 25),
    borrow: Math.max(20, y1.borrow - ri(rng, 5, 40)),
  };
  y2.fin = -y2.div + y2.borrow;
  y2.chg = y2.op + y2.inv + y2.fin;
  return { y1, y2 };
}

export function cfTable2y({ y1, y2 }) {
  return md2year("Item (€ thousands)", [
    ["Cash flow from operating activities", y1.op, y2.op],
    ["Cash flow from investing activities", `(${Math.abs(y1.inv)})`, `(${Math.abs(y2.inv)})`],
    ["Dividends paid", `(${y1.div})`, `(${y2.div})`],
    ["Proceeds from new borrowing", y1.borrow, y2.borrow],
    ["Cash flow from financing activities", y1.fin, y2.fin],
  ]);
}

export function genShareSeries(rng) {
  const months = ["January", "February", "March", "April", "May", "June"];
  const shares = ri(rng, 400, 900) * 1000;
  // Force a clear journey: start mid-range, apply a real trend + noise so
  // the series never looks almost flat on a 0–20 chart.
  let price = 18 + rng() * 22; // typically ~18–40
  const endTarget = price * (0.55 + rng() * 0.95); // end between ~55% and 150% of start
  const step = (endTarget - price) / (months.length - 1);
  const rows = [];
  const lineRows = [];
  const volRows = [];
  let totalVol = 0;
  for (let i = 0; i < months.length; i++) {
    const m = months[i];
    const noise = (rng() - 0.5) * price * 0.12;
    price = Math.max(8, price + step + noise);
    const p = Math.max(8, Math.round(price));
    const vol = ri(rng, 18, 95) * 1000;
    totalVol += vol;
    rows.push([m, p, shares, vol]);
    lineRows.push(`${m} | Price=${p}`);
    volRows.push(`${m} | Volume=${vol}`);
  }
  // Guarantee meaningful spread (at least 20% range relative to low)
  const prices = rows.map((r) => r[1]);
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  if ((hi - lo) / lo < 0.2) {
    const bump = Math.max(3, Math.round(lo * 0.25));
    rows[rows.length - 1][1] = lo + bump;
    lineRows[lineRows.length - 1] = `${months[months.length - 1]} | Price=${lo + bump}`;
  }
  return {
    months,
    shares,
    rows,
    lineRows,
    volRows,
    totalVol,
    start: rows[0][1],
    end: rows[rows.length - 1][1],
  };
}

export function mkExpl(keys, texts) {
  return keys.map((k, i) => `${k ? "TRUE" : "FALSE"} — ${texts[i]}`);
}

/** Small balance sheet (fewer line items) for the half-page 6.4 scope. */
export function genSmallBs(rng) {
  const buildings = ri(rng, 200, 380);
  const inventory = ri(rng, 60, 160);
  const cash = ri(rng, 30, 90);
  const assets = buildings + inventory + cash;

  const share = ri(rng, 80, 180);
  let retained = ri(rng, 40, 140);
  const loan = ri(rng, 90, 200);
  const payables = ri(rng, 30, 100);
  let equity = share + retained;
  let liab = loan + payables;
  const diff = assets - equity - liab;
  retained += diff;
  equity = share + retained;
  assert(equity + liab === assets, "small bs balance");
  return {
    buildings,
    inventory,
    cash,
    assets,
    share,
    retained,
    equity,
    loan,
    payables,
    liab,
    nca: buildings,
    ca: inventory + cash,
    ncl: loan,
    cl: payables,
  };
}

export function smallBsTable(b) {
  return mdAmount("€ in thousands", [
    ["ASSETS", ""],
    ["Buildings", b.buildings],
    ["Inventory", b.inventory],
    ["Cash and cash equivalents", b.cash],
    ["Total assets", `**${b.assets}**`],
    ["EQUITY", ""],
    ["Share capital", b.share],
    ["Retained earnings", b.retained],
    ["Total equity", `**${b.equity}**`],
    ["LIABILITIES", ""],
    ["Long-term bank loan", b.loan],
    ["Trade payables", b.payables],
    ["Total liabilities", `**${b.liab}**`],
    ["Total equity and liabilities", `**${b.assets}**`],
  ]);
}

/** One or two depreciating assets, straight-line, for the half-page 6.4 scope. */
export function genDepPair(rng) {
  const cost = ri(rng, 60, 120) * 1000;
  const life = ri(rng, 4, 8);
  const ann = cost / life;
  const cost2 = ri(rng, 20, 40) * 1000;
  const resid2 = ri(rng, 2, 5) * 1000;
  const life2 = 5;
  const ann2 = (cost2 - resid2) / life2;
  return { cost, life, ann, cost2, resid2, life2, ann2 };
}

const LINE_ITEM_PHRASES = [
  "cash flow from operating activities before changes in working capital",
  "cash flow from operating activities",
  "cash flow from investing activities",
  "cash flow from financing activities",
  "change in cash and cash equivalents",
  "cash and cash equivalents at the beginning of the year",
  "cash and cash equivalents at the end of the year",
  "cash and cash equivalents",
  "general and administrative costs",
  "patents, trademarks and licences",
  "non-current liabilities",
  "trade receivables",
  "current liabilities",
  "non-current assets",
  "long-term bank loan",
  "distribution costs",
  "profit before tax",
  "income taxes",
  "profit for the year",
  "bank overdraft",
  "bonds payable",
  "trade payables",
  "office equipment",
  "current assets",
  "total liabilities",
  "share capital",
  "retained earnings",
  "total equity",
  "total assets",
  "operating result",
  "finance costs",
  "cost of sales",
  "gross profit",
  "inventory",
  "buildings",
  "machinery",
  "revenue",
  "equity",
  "liabilities",
  "assets",
  "receivables",
  "payables",
];

const COMPARISON_VERB = /\bexceed(?:s)?\b|\b(?:is|are)\s+(?:greater|higher|lower|less|more|smaller|bigger)\b.{0,40}\bthan\b|\b(?:is|are)\s+below\b|\b(?:is|are)\s+above\b/i;

const CALC_QUALIFIER = /%|percent|ratio|\btimes\b|more than half|less than half|\bhalf of\b|\bdouble\b|\btwice\b|\btriple\b|growth|grew|\bgrow\b|\brose\b|\brisen\b|\bfell\b|\bfallen\b|declin|increas|decreas|per share|turnover|coverage|margin|proportion|share of|account(?:s)? for|on average|average\b/i;

/** Heuristic ban on trivial "read two numbers off the table and compare" statements. */
function findObviousReadOff(stmt) {
  if (!COMPARISON_VERB.test(stmt)) return null;
  if (CALC_QUALIFIER.test(stmt)) return null;
  const lower = stmt.toLowerCase();
  const mentioned = LINE_ITEM_PHRASES.filter((p) => lower.includes(p));
  // collapse phrases that are substrings of a longer mentioned phrase (avoid double count)
  const distinct = mentioned.filter(
    (p) => !mentioned.some((q) => q !== p && q.includes(p)),
  );
  if (distinct.length >= 2) return stmt;
  const hasBothYears = /\byear 1\b/i.test(stmt) && /\byear 2\b/i.test(stmt);
  const hasBeginEnd = /beginning of the year/i.test(stmt) && /end of the year/i.test(stmt);
  if (distinct.length >= 1 && (hasBothYears || hasBeginEnd)) return stmt;
  return null;
}

export function validateTableCase(c) {
  const ban = /\b(EBIT|EBITDA|ROCE|ROE|EPS|WC|P&L|BS|IS|CF)\b/;
  const hint = /\([^)]*(?:divided by|calculated as|defined as|cost of sales divided)[^)]*\)/i;
  const blob = [c.context, ...c.statements, ...c.tactical_explanations].join("\n");
  if (ban.test(blob)) throw new Error(`abbrev in ${c.case_id}`);
  if (/\(see the extract prepared for case/i.test(blob)) {
    throw new Error(`case cross-ref hint in ${c.case_id}`);
  }
  // Never pre-sum the cash-flow table (students compute net change themselves).
  if (
    /\|?\s*Net change in cash and cash equivalents\s*\|/i.test(c.context) ||
    /\|?\s*Change in cash and cash equivalents\s*\|/i.test(c.context) ||
    /\|?\s*Cash and cash equivalents at end of the year\s*\|/i.test(c.context)
  ) {
    throw new Error(`pre-summed cash-flow total row in ${c.case_id}`);
  }
  if (!/Evaluate the following economic assertions:\s*$/.test(c.context.trim())) {
    throw new Error(`bad context end ${c.case_id}`);
  }
  if (!c.context.includes("|")) throw new Error(`no table ${c.case_id}`);
  const theoryCount = c.statements.filter((s) =>
    /dividends paid to shareholders|balance sheet identity|owner's equity|preferred shares|market price|common shareholders|managerial accounting|financial accounting|depreciation recognises|straight-line method|liquidity refers|working capital should|positive cash flow is not identical|collecting payment on a trade|purchase of a plant|repaying a bank loan|negative cash flow from investing|cost of sales covers|gross profit shows|land is not subject|share buyback|price-earnings ratio|acid test|carrying value per share|vote at the|secondary.market|does not itself provide|not obliged to pay a dividend|retained earnings on the balance sheet, but it does not appear/i.test(
      s,
    ),
  ).length;
  // Soft check: PDF ideal mixes ≥1 concept statement; we require ≥1 match on known theory stems
  // (generators also mark .theory — count both ways).
  void theoryCount;
  for (const s of c.statements) {
    if (hint.test(s)) throw new Error(`hint in ${c.case_id}: ${s}`);
    if (/\bequals exactly\b/i.test(s)) {
      throw new Error(`flat exact-number quiz in ${c.case_id}: ${s}`);
    }
    // Skip read-off guard for long textbook-concept statements (PDF cases mix these in).
    const isConcept =
      s.length > 110 ||
      /\b(textbook|shareholders' meeting|preferred shares|financing activities|managerial accounting|financial accounting|straight-line|non-cash|secondary|issuing company|inflation|retained earnings|core trading)\b/i.test(
        s,
      );
    if (!isConcept) {
      const readOff = findObviousReadOff(s);
      if (readOff) throw new Error(`obvious read-off in ${c.case_id}: ${readOff}`);
    }
    for (const other of c.statements) {
      if (other !== s && jaccard(s, other) >= 0.78) throw new Error(`near dup in ${c.case_id}`);
    }
  }
  assert(c.statements.length === 5, c.case_id);
}
