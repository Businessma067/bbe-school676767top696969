/**
 * Generate 10 Ch.6 pilot cases from PDF 113–122 style (full FS tables + charts).
 * Full terms only — no EBIT/ROE/ROCE abbreviations in student-facing text.
 * No parenthetical formula hints in statements.
 *
 * Run: node scripts/gen-ch6-pilot-10.mjs
 */
import fs from "node:fs";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}
function nearly(a, b, eps = 1e-6) {
  return Math.abs(a - b) < eps;
}
function pct(n) {
  return n * 100;
}
function fmt(n) {
  return Number(n).toLocaleString("en-GB");
}

const cases = [];

function pushCase(c) {
  cases.push(c);
}

function md2year(headerLeft, rows) {
  // rows: [label, y1, y2] ; use "" for section label y1/y2
  const lines = [`| ${headerLeft} | Year 1 | Year 2 |`, `| --- | ---: | ---: |`];
  for (const [label, a, b] of rows) {
    if (a === "" && b === "") lines.push(`| **${label}** | | |`);
    else lines.push(`| ${label} | ${a} | ${b} |`);
  }
  return lines.join("\n");
}

function mdAmount(headerLeft, rows) {
  const lines = [`| ${headerLeft} | Amount |`, `| --- | ---: |`];
  for (const [label, amt] of rows) {
    if (amt === "") lines.push(`| **${label}** | |`);
    else lines.push(`| ${label} | ${amt} |`);
  }
  return lines.join("\n");
}

function chartBar(title, rows) {
  // rows: "Category | Key=val | Key=val"
  return [
    `[[CHART type="bar" title="${title}"]]`,
    ...rows,
    `[[/CHART]]`,
  ].join("\n");
}

function chartPie(title, slices) {
  return [
    `[[CHART type="pie" title="${title}"]]`,
    ...slices.map(([n, v]) => `${n}=${v}`),
    `[[/CHART]]`,
  ].join("\n");
}

// ---------- 6.1.01 ← PDF 115 comparative BS ----------
{
  const y1 = {
    buildings: 300,
    machinery: 150,
    office: 45,
    patents: 30,
    inv: 100,
    recv: 90,
    cash: 60,
    share: 150,
    re: 220,
    lt: 245,
    bonds: 50,
    pay: 70,
    od: 40,
  };
  const y2 = {
    buildings: 340,
    machinery: 170,
    office: 50,
    patents: 30,
    inv: 125,
    recv: 115,
    cash: 45,
    share: 150,
    re: 285,
    lt: 275,
    bonds: 55,
    pay: 75,
    od: 35,
  };
  const tot = (y) =>
    y.buildings + y.machinery + y.office + y.patents + y.inv + y.recv + y.cash;
  const eq = (y) => y.share + y.re;
  const liab = (y) => y.lt + y.bonds + y.pay + y.od;
  assert(tot(y1) === 775 && tot(y2) === 875, "115 assets");
  assert(eq(y1) + liab(y1) === 775 && eq(y2) + liab(y2) === 875, "115 bal");

  const eqGrowth = (eq(y2) - eq(y1)) / eq(y1);
  const nca = (y) => y.buildings + y.machinery + y.office + y.patents;
  const ncaShare1 = nca(y1) / tot(y1);
  const ncaShare2 = nca(y2) / tot(y2);
  const ca = (y) => y.inv + y.recv + y.cash;
  const cl = (y) => y.pay + y.od;
  const wc1 = ca(y1) - cl(y1);
  const wc2 = ca(y2) - cl(y2);

  const keys = [
    eqGrowth > 0.2, // false ~17.6%
    y1.share === y2.share && y2.re > y1.re, // true
    ncaShare2 < ncaShare1, // true
    false, // trade payables are current, not non-current
    wc2 > 2 * wc1, // false
  ];
  assert(!keys[0] && keys[1] && keys[2] && !keys[3] && !keys[4], "6.1.01");

  pushCase({
    subsection: "6.1",
    case_id: "CASE 6.1.01",
    title: "Two-Year Balance Sheet Growth and Structure",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

${chartBar("Equity and total assets", [
  `Year 1 | Equity=${eq(y1)} | Total assets=${tot(y1)}`,
  `Year 2 | Equity=${eq(y2)} | Total assets=${tot(y2)}`,
])}

${md2year("€ in thousands", [
  ["ASSETS", "", ""],
  ["Buildings", y1.buildings, y2.buildings],
  ["Machinery", y1.machinery, y2.machinery],
  ["Office equipment", y1.office, y2.office],
  ["Patents, trademarks and licences", y1.patents, y2.patents],
  ["Inventory", y1.inv, y2.inv],
  ["Trade receivables", y1.recv, y2.recv],
  ["Cash and cash equivalents", y1.cash, y2.cash],
  ["Total assets", `**${tot(y1)}**`, `**${tot(y2)}**`],
  ["EQUITY", "", ""],
  ["Share capital", y1.share, y2.share],
  ["Retained earnings", y1.re, y2.re],
  ["Total equity", `**${eq(y1)}**`, `**${eq(y2)}**`],
  ["LIABILITIES", "", ""],
  ["Long-term bank loan", y1.lt, y2.lt],
  ["Bonds payable", y1.bonds, y2.bonds],
  ["Trade payables", y1.pay, y2.pay],
  ["Bank overdraft", y1.od, y2.od],
  ["Total liabilities", `**${liab(y1)}**`, `**${liab(y2)}**`],
  ["Total equity and liabilities", `**${tot(y1)}**`, `**${tot(y2)}**`],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Total equity increased by more than 20% from Year 1 to Year 2.",
      "Since share capital remained unchanged, the entire increase in equity between Year 1 and Year 2 came from internal sources rather than from new capital contributed by the owners.",
      "Non-current assets as a percentage of total assets decreased from Year 1 to Year 2.",
      "Trade payables are classified under non-current liabilities because businesses are normally allowed more than a year to pay their suppliers.",
      "Working capital more than doubled between Year 1 and Year 2.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Equity rose from ${eq(y1)} to ${eq(y2)}, an increase of ${eq(y2) - eq(y1)}. Relative growth is about ${pct(eqGrowth).toFixed(1)}%, which is below 20%.`,
      `TRUE — Share capital stayed at ${y1.share} in both years, so the entire equity increase of ${eq(y2) - eq(y1)} came from retained earnings (${y1.re} → ${y2.re}), i.e. from internal sources.`,
      `TRUE — Non-current assets were ${nca(y1)} in Year 1 (${pct(ncaShare1).toFixed(1)}% of assets) and ${nca(y2)} in Year 2 (${pct(ncaShare2).toFixed(1)}%). The share fell slightly.`,
      "FALSE — Trade payables normally arise from short-term supplier credit and are classified as a current liability, not a non-current liability.",
      `FALSE — Working capital was ${wc1} in Year 1 and ${wc2} in Year 2, an increase of only about ${pct((wc2 - wc1) / wc1).toFixed(0)}%, nowhere near doubling.`,
    ],
  });
}

// ---------- 6.1.02 ← PDF 120 comparative BS gearing ----------
{
  const y1 = {
    buildings: 350,
    machinery: 170,
    patents: 80,
    inv: 100,
    recv: 90,
    cash: 40,
    share: 100,
    re: 120,
    lt: 400,
    bonds: 50,
    pay: 120,
    od: 40,
  };
  const y2 = {
    buildings: 380,
    machinery: 185,
    patents: 85,
    inv: 115,
    recv: 105,
    cash: 40,
    share: 100,
    re: 125,
    lt: 435,
    bonds: 55,
    pay: 150,
    od: 45,
  };
  const tot = (y) => y.buildings + y.machinery + y.patents + y.inv + y.recv + y.cash;
  const eq = (y) => y.share + y.re;
  const liab = (y) => y.lt + y.bonds + y.pay + y.od;
  const ncl = (y) => y.lt + y.bonds;
  const nca = (y) => y.buildings + y.machinery + y.patents;
  assert(tot(y1) === 830 && tot(y2) === 910, "120 assets");
  assert(eq(y1) + liab(y1) === 830 && eq(y2) + liab(y2) === 910, "120 bal");

  const er1 = eq(y1) / tot(y1);
  const er2 = eq(y2) / tot(y2);
  const dr1 = liab(y1) / tot(y1);
  const dr2 = liab(y2) / tot(y2);
  const growth = (tot(y2) - tot(y1)) / tot(y1);

  const keys = [
    er2 > er1, // false — fell
    dr2 < dr1, // false — rose
    ncl(y1) > eq(y1) && ncl(y2) > eq(y2), // true high geared
    nca(y1) <= eq(y1) + ncl(y1) && nca(y2) <= eq(y2) + ncl(y2), // true
    growth > 0.12, // false ~9.6%
  ];
  assert(!keys[0] && !keys[1] && keys[2] && keys[3] && !keys[4], "6.1.02");

  pushCase({
    subsection: "6.1",
    case_id: "CASE 6.1.02",
    title: "Comparative Balance Sheet Gearing",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

${chartBar("Equity versus non-current liabilities", [
  `Year 1 | Equity=${eq(y1)} | Non-current liabilities=${ncl(y1)}`,
  `Year 2 | Equity=${eq(y2)} | Non-current liabilities=${ncl(y2)}`,
])}

${md2year("€ in thousands", [
  ["ASSETS", "", ""],
  ["Buildings", y1.buildings, y2.buildings],
  ["Machinery", y1.machinery, y2.machinery],
  ["Patents, trademarks and licences", y1.patents, y2.patents],
  ["Inventory", y1.inv, y2.inv],
  ["Trade receivables", y1.recv, y2.recv],
  ["Cash and cash equivalents", y1.cash, y2.cash],
  ["Total assets", `**${tot(y1)}**`, `**${tot(y2)}**`],
  ["EQUITY", "", ""],
  ["Share capital", y1.share, y2.share],
  ["Retained earnings", y1.re, y2.re],
  ["Total equity", `**${eq(y1)}**`, `**${eq(y2)}**`],
  ["LIABILITIES", "", ""],
  ["Long-term bank loan", y1.lt, y2.lt],
  ["Bonds payable", y1.bonds, y2.bonds],
  ["Trade payables", y1.pay, y2.pay],
  ["Bank overdraft", y1.od, y2.od],
  ["Total liabilities", `**${liab(y1)}**`, `**${liab(y2)}**`],
  ["Total equity and liabilities", `**${tot(y1)}**`, `**${tot(y2)}**`],
])}

Evaluate the following economic assertions:`,
    statements: [
      "The equity ratio improved from Year 1 to Year 2.",
      "The debt ratio decreased from Year 1 to Year 2.",
      "Given that its non-current liabilities are far greater than its equity in both years, this business would be considered high geared in both Year 1 and Year 2.",
      "Non-current assets are fully covered by the sum of equity and non-current liabilities in both years.",
      "Total assets grew by more than 12% from Year 1 to Year 2.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Equity ratio Year 1 ≈ ${pct(er1).toFixed(1)}%; Year 2 ≈ ${pct(er2).toFixed(1)}%. The ratio fell.`,
      `FALSE — Debt ratio Year 1 ≈ ${pct(dr1).toFixed(1)}%; Year 2 ≈ ${pct(dr2).toFixed(1)}%. The ratio rose.`,
      `TRUE — Non-current liabilities (${ncl(y1)} then ${ncl(y2)}) far exceed equity (${eq(y1)} then ${eq(y2)}) in both years, so the business is high geared.`,
      `TRUE — Year 1 non-current assets ${nca(y1)} ≤ equity plus non-current liabilities ${eq(y1) + ncl(y1)}. Year 2: ${nca(y2)} ≤ ${eq(y2) + ncl(y2)}. Covered in both years.`,
      `FALSE — Total assets grew from ${tot(y1)} to ${tot(y2)}, about ${pct(growth).toFixed(1)}%, which is not more than 12%.`,
    ],
  });
}

// ---------- 6.2.01 ← PDF 114 cash flow ----------
{
  const y2 = { opBefore: 195, op: 150, inv: -250, ofcf: -100, fcf: -120, fin: 110, chg: -10, fx: -6, end: 102 };
  const y1 = { opBefore: 150, op: 140, inv: -120, ofcf: 20, fcf: 5, fin: 30, chg: 35, fx: 3, end: 118 };
  const opGrowth = (y2.op - y1.op) / y1.op;
  const endFall = (y1.end - y2.end) / y1.end;
  const keys = [
    opGrowth > 0.1, // false ~7.1%
    false, // negative investing ≠ difficulty
    y2.op < y2.opBefore && y1.op < y1.opBefore, // true
    true, // receivable collection is operating
    endFall > 0.2, // false ~13.6%
  ];
  assert(!keys[0] && !keys[1] && keys[2] && keys[3] && !keys[4], "6.2.01");

  pushCase({
    subsection: "6.2",
    case_id: "CASE 6.2.01",
    title: "Comparative Cash Flow Statement Extract",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following cash flow statement extract (in € thousands) for a business whose identity is not disclosed, comparing the current year (Year 2) with the prior year (Year 1).

${chartBar("Operating and investing cash flows", [
  `Year 1 | Operating=${y1.op} | Investing=${y1.inv}`,
  `Year 2 | Operating=${y2.op} | Investing=${y2.inv}`,
])}

${md2year("Item (€ thousands)", [
  ["Cash flow from operating activities before changes in working capital", y1.opBefore, y2.opBefore],
  ["Cash flow from operating activities", y1.op, y2.op],
  ["Cash flow from investing activities", `(${Math.abs(y1.inv)})`, `(${Math.abs(y2.inv)})`],
  ["Operating free cash flow", y1.ofcf, `(${Math.abs(y2.ofcf)})`],
  ["Free cash flow", y1.fcf, `(${Math.abs(y2.fcf)})`],
  ["Cash flow from financing activities", y1.fin, y2.fin],
  ["Change in cash and cash equivalents", y1.chg, `(${Math.abs(y2.chg)})`],
  ["Currency effects on cash and cash equivalents", y1.fx, `(${Math.abs(y2.fx)})`],
  ["Cash and cash equivalents at end of the year", y1.end, y2.end],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Cash flow from operating activities increased by more than 10% from Year 1 to Year 2.",
      "A negative cash flow from investing activities always means that a business is in financial difficulty.",
      "In both years, cash flow from operating activities was lower than cash flow from operating activities before changes in working capital.",
      "If a customer settles an outstanding invoice during the year, the resulting cash inflow would be recorded within cash flow from operating activities, since it relates to the core activities of the business.",
      "Cash and cash equivalents at the end of the year fell by more than 20% from Year 1 to Year 2.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Operating cash flow rose from ${y1.op} to ${y2.op}, about ${pct(opGrowth).toFixed(1)}%, which is below 10%.`,
      "FALSE — A negative investing cash flow usually indicates investment in long-term assets, not financial distress; investing inflows typically come from selling assets.",
      `TRUE — Year 1: ${y1.op} is below ${y1.opBefore}; Year 2: ${y2.op} is below ${y2.opBefore}.`,
      "TRUE — Collecting a trade receivable is a core operating change in a current asset, so the cash inflow sits in operating activities.",
      `FALSE — Ending cash fell from ${y1.end} to ${y2.end}, about ${pct(endFall).toFixed(1)}%, which is not more than 20%.`,
    ],
  });
}

// ---------- 6.2.02 ← PDF 116 comparative P&L ----------
{
  const y1 = {
    rev: 780,
    cos: 510,
    gp: 270,
    dist: 42,
    admin: 30,
    other: 3,
    op: 201,
    fi: 5,
    fc: 18,
    fnet: 13,
    pbt: 188,
    tax: 40,
    pat: 148,
  };
  const y2 = {
    rev: 920,
    cos: 600,
    gp: 320,
    dist: 50,
    admin: 37,
    other: -2,
    op: 231,
    fi: 4,
    fc: 23,
    fnet: 19,
    pbt: 212,
    tax: 54,
    pat: 158,
  };
  assert(y1.rev - y1.cos === y1.gp && y2.rev - y2.cos === y2.gp, "116 gp");
  const gm1 = y1.gp / y1.rev;
  const gm2 = y2.gp / y2.rev;
  const tax1 = y1.tax / y1.pbt;
  const tax2 = y2.tax / y2.pbt;
  const fnetWorse = y2.fnet - y1.fnet;

  const keys = [
    gm2 > gm1, // true
    y2.op > 2 * y1.op, // false
    tax2 > tax1, // true
    false, // dist/admin not before gross profit
    fnetWorse > 10, // false — worsened by 6
  ];
  assert(keys[0] && !keys[1] && keys[2] && !keys[3] && !keys[4], "6.2.02");

  pushCase({
    subsection: "6.2",
    case_id: "CASE 6.2.02",
    title: "Two-Year Statement of Profit and Loss",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

${chartBar("Revenue, gross profit and operating result", [
  `Year 1 | Revenue=${y1.rev} | Gross profit=${y1.gp} | Operating result=${y1.op}`,
  `Year 2 | Revenue=${y2.rev} | Gross profit=${y2.gp} | Operating result=${y2.op}`,
])}

${md2year("Item (€ thousands)", [
  ["Revenue", y1.rev, y2.rev],
  ["Cost of sales", `(${y1.cos})`, `(${y2.cos})`],
  ["Gross profit", y1.gp, y2.gp],
  ["Distribution costs", `(${y1.dist})`, `(${y2.dist})`],
  ["General and administrative costs", `(${y1.admin})`, `(${y2.admin})`],
  ["Other operating result", y1.other, `(${Math.abs(y2.other)})`],
  ["Operating result", y1.op, y2.op],
  ["Finance income", y1.fi, y2.fi],
  ["Finance costs", `(${y1.fc})`, `(${y2.fc})`],
  ["Finance costs – net", `(${y1.fnet})`, `(${y2.fnet})`],
  ["Profit before tax", y1.pbt, y2.pbt],
  ["Income taxes", `(${y1.tax})`, `(${y2.tax})`],
  ["Profit for the year", y1.pat, y2.pat],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Gross profit as a percentage of revenue was higher in Year 2 than in Year 1.",
      "The operating result more than doubled from Year 1 to Year 2.",
      "Income taxes as a percentage of profit before tax were higher in Year 2 than in Year 1.",
      "Distribution costs and general and administrative costs are subtracted from revenue before gross profit is calculated.",
      "Finance costs – net worsened by more than €10 thousand between Year 1 and Year 2.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Gross margin Year 1 ≈ ${pct(gm1).toFixed(1)}%; Year 2 ≈ ${pct(gm2).toFixed(1)}%. The proportion rose slightly.`,
      `FALSE — Operating result rose from ${y1.op} to ${y2.op}, about ${pct((y2.op - y1.op) / y1.op).toFixed(1)}%, far short of doubling.`,
      `TRUE — Tax / profit before tax Year 1 ≈ ${pct(tax1).toFixed(1)}%; Year 2 ≈ ${pct(tax2).toFixed(1)}%. The proportion rose.`,
      "FALSE — Gross profit is revenue minus cost of sales only. Distribution costs, general and administrative costs and other operating result are deducted after gross profit on the way to the operating result.",
      `FALSE — Finance costs – net moved from (${y1.fnet}) to (${y2.fnet}), a worsening of only ${fnetWorse}, not more than 10.`,
    ],
  });
}

// ---------- 6.3.01 ← PDF 119 BS + IS + CF ----------
{
  const a = {
    buildings: 380,
    machinery: 180,
    patents: 90,
    inv: 150,
    recv: 120,
    cash: 70,
    share: 260,
    re: 330,
    lt: 180,
    bonds: 50,
    pay: 120,
    od: 50,
    rev: 1180,
    cos: 760,
    gp: 420,
    opex: 230,
    other: 12,
    op: 202,
    cfOp: 195,
    cfInv: -240,
    cfFin: 70,
    cashBeg: 60,
  };
  const tot = a.buildings + a.machinery + a.patents + a.inv + a.recv + a.cash;
  const eq = a.share + a.re;
  const liab = a.lt + a.bonds + a.pay + a.od;
  assert(tot === 990 && eq + liab === 990, "119 bal");
  assert(a.rev - a.cos === a.gp, "119 gp");
  assert(a.gp - a.opex + a.other === a.op, "119 op");
  const roce = a.op / (eq + a.lt + a.bonds); // wait ROE not ROCE for stmt1
  const roe = a.op / eq; // PDF uses 202/590 — operating result / equity as ROE proxy in explanations
  const ca = a.inv + a.recv + a.cash;
  const cl = a.pay + a.od;
  const wc = ca - cl;
  const netChg = a.cfOp + a.cfInv + a.cfFin;
  const cashEnd = a.cashBeg + netChg;

  const keys = [
    roe > 0.35, // false ~34.2%
    true, // ROCE useful comparatively
    wc === 150, // false — 170
    netChg === 25, // true
    cashEnd > 90, // false — 85
  ];
  assert(!keys[0] && keys[1] && !keys[2] && keys[3] && !keys[4], "6.3.01");

  pushCase({
    subsection: "6.3",
    case_id: "CASE 6.3.01",
    title: "Balance Sheet With Income and Cash Flow Extracts",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following balance sheet and income statement extracts (in € thousands) for a business whose identity is not disclosed.

${chartPie("Asset composition", [
  ["Buildings", a.buildings],
  ["Machinery", a.machinery],
  ["Patents, trademarks and licences", a.patents],
  ["Inventory", a.inv],
  ["Trade receivables", a.recv],
  ["Cash and cash equivalents", a.cash],
])}

${mdAmount("€ in thousands", [
  ["ASSETS", ""],
  ["Buildings", a.buildings],
  ["Machinery", a.machinery],
  ["Patents, trademarks and licences", a.patents],
  ["Inventory", a.inv],
  ["Trade receivables", a.recv],
  ["Cash and cash equivalents", a.cash],
  ["Total assets", `**${tot}**`],
  ["EQUITY", ""],
  ["Share capital", a.share],
  ["Retained earnings", a.re],
  ["Total equity", `**${eq}**`],
  ["LIABILITIES", ""],
  ["Long-term bank loan", a.lt],
  ["Bonds payable", a.bonds],
  ["Trade payables", a.pay],
  ["Bank overdraft", a.od],
  ["Total liabilities", `**${liab}**`],
  ["Total equity and liabilities", `**${tot}**`],
])}

${mdAmount("Income statement item (€ thousands)", [
  ["Revenue", fmt(a.rev)],
  ["Cost of sales", `(${a.cos})`],
  ["Gross profit", a.gp],
  ["Operating expenses", `(${a.opex})`],
  ["Other operating result", a.other],
  ["Operating result", a.op],
])}

${mdAmount("Cash flow statement extract (€ thousands)", [
  ["Cash flow from operating activities", a.cfOp],
  ["Cash flow from investing activities", `(${Math.abs(a.cfInv)})`],
  ["Cash flow from financing activities", a.cfFin],
  ["Cash and cash equivalents at the beginning of the year", a.cashBeg],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Return on equity exceeds 35%.",
      "Return on capital employed figures are mainly useful for comparing profitability between similar businesses, or for one business's performance over time, rather than being meaningful on their own.",
      "Working capital equals €150 thousand.",
      "The net change in cash and cash equivalents for the year equals €25 thousand.",
      "Cash and cash equivalents at the end of the year exceed €90 thousand.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Using operating result over equity, return on equity ≈ ${pct(roe).toFixed(1)}%, which is below 35%.`,
      "TRUE — A single return on capital employed figure says little in isolation; it becomes useful when compared with peers or tracked over time.",
      `FALSE — Current assets ${ca} minus current liabilities ${cl} gives working capital ${wc}, not 150.`,
      `TRUE — Net change = ${a.cfOp} + (${a.cfInv}) + ${a.cfFin} = ${netChg}.`,
      `FALSE — Beginning cash ${a.cashBeg} plus net change ${netChg} equals ending cash ${cashEnd}, which does not exceed 90.`,
    ],
  });
  void roce;
}

// ---------- 6.3.02 ← PDF 122 combined mega ----------
{
  const a = {
    buildings: 500,
    machinery: 250,
    patents: 100,
    inv: 180,
    recv: 150,
    cash: 100,
    share: 200,
    re: 290,
    lt: 400,
    bonds: 70,
    pay: 230,
    od: 90,
    rev: 1420,
    cos: 930,
    gp: 490,
    opex: 295,
    other: 6,
    op: 201,
    fnet: 28,
    pbt: 173,
    tax: 42,
    pat: 131,
    cfOp: 205,
    cfInv: -275,
    cfFin: 45,
    cashBeg: 80,
  };
  const tot = a.buildings + a.machinery + a.patents + a.inv + a.recv + a.cash;
  const eq = a.share + a.re;
  const liab = a.lt + a.bonds + a.pay + a.od;
  assert(tot === 1280 && eq + liab === 1280, "122 bal");
  assert(a.rev - a.cos === a.gp && a.gp - a.opex + a.other === a.op, "122 is");
  assert(a.op - a.fnet === a.pbt && a.pbt - a.tax === a.pat, "122 bottom");
  const ce = eq + a.lt + a.bonds;
  const roce = a.op / ce;
  const ca = a.inv + a.recv + a.cash;
  const cl = a.pay + a.od;
  const wc = ca - cl;
  const netChg = a.cfOp + a.cfInv + a.cfFin;
  const taxRate = a.tax / a.pbt;

  const keys = [
    roce > 0.25, // false ~20.9%
    true, // conceptual
    wc === 150, // false — 110
    netChg < 0, // true
    taxRate < 0.2, // false ~24.3%
  ];
  assert(!keys[0] && keys[1] && !keys[2] && keys[3] && !keys[4], "6.3.02");

  pushCase({
    subsection: "6.3",
    case_id: "CASE 6.3.02",
    title: "Combined Balance Sheet, Profit and Loss, and Cash Flow",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

${chartPie("Asset composition", [
  ["Buildings", a.buildings],
  ["Machinery", a.machinery],
  ["Patents, trademarks and licences", a.patents],
  ["Inventory", a.inv],
  ["Trade receivables", a.recv],
  ["Cash and cash equivalents", a.cash],
])}

${mdAmount("€ in thousands", [
  ["ASSETS", ""],
  ["Buildings", a.buildings],
  ["Machinery", a.machinery],
  ["Patents, trademarks and licences", a.patents],
  ["Inventory", a.inv],
  ["Trade receivables", a.recv],
  ["Cash and cash equivalents", a.cash],
  ["Total assets", `**${fmt(tot)}**`],
  ["EQUITY", ""],
  ["Share capital", a.share],
  ["Retained earnings", a.re],
  ["Total equity", `**${eq}**`],
  ["LIABILITIES", ""],
  ["Long-term bank loan", a.lt],
  ["Bonds payable", a.bonds],
  ["Trade payables", a.pay],
  ["Bank overdraft", a.od],
  ["Total liabilities", `**${liab}**`],
  ["Total equity and liabilities", `**${fmt(tot)}**`],
])}

${mdAmount("Statement of profit and loss extract (€ thousands)", [
  ["Revenue", fmt(a.rev)],
  ["Cost of sales", `(${a.cos})`],
  ["Gross profit", a.gp],
  ["Operating expenses", `(${a.opex})`],
  ["Other operating result", a.other],
  ["Operating result", a.op],
  ["Finance costs – net", `(${a.fnet})`],
  ["Profit before tax", a.pbt],
  ["Income taxes", `(${a.tax})`],
  ["Profit for the year", a.pat],
])}

${mdAmount("Cash flow statement extract (€ thousands)", [
  ["Cash flow from operating activities", a.cfOp],
  ["Cash flow from investing activities", `(${Math.abs(a.cfInv)})`],
  ["Cash flow from financing activities", a.cfFin],
  ["Cash and cash equivalents at the beginning of the year", a.cashBeg],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Return on capital employed is above 25%.",
      "A positive cash flow from operating activities combined with a negative cash flow from investing activities is typically a sign that a business is generating cash from its core operations while also investing in long-term assets, rather than a sign that it is in trouble.",
      "Working capital equals €150 thousand.",
      "The net change in cash and cash equivalents for the year is negative, meaning the year-end cash balance is lower than the beginning balance.",
      "Income taxes as a percentage of profit before tax are below 20%.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Capital employed = equity ${eq} + non-current liabilities ${a.lt + a.bonds} = ${ce}. Return on capital employed = ${a.op}/${ce} ≈ ${pct(roce).toFixed(1)}%, below 25%.`,
      "TRUE — Operating cash generation paired with investing outflows usually means the firm invests in long-term assets while its core business produces cash — often a healthy growth pattern.",
      `FALSE — Current assets ${ca} minus current liabilities ${cl} equals working capital ${wc}, not 150.`,
      `TRUE — Net change = ${a.cfOp} + (${a.cfInv}) + ${a.cfFin} = ${netChg}, so year-end cash (${a.cashBeg + netChg}) is below the beginning balance.`,
      `FALSE — Income taxes / profit before tax = ${a.tax}/${a.pbt} ≈ ${pct(taxRate).toFixed(1)}%, which is above 20%.`,
    ],
  });
}

// ---------- 6.4.01 ← PDF 117 depreciation ----------
{
  const A = { cost: 150000, life: 10, resid: 0 };
  const B = { cost: 54000, life: 6, resid: 6000 };
  const C = { cost: 21000, life: 3, resid: 0 };
  const depA = (A.cost - A.resid) / A.life;
  const depB = (B.cost - B.resid) / B.life;
  const depC = (C.cost - C.resid) / C.life;
  assert(depA === 15000 && depB === 8000 && depC === 7000, "117 dep");
  const ann = depA + depB + depC;
  assert(ann === 30000, "117 ann");
  const bvB3 = B.cost - 3 * depB;
  const bvA3 = A.cost - 3 * depA;
  const bvC3 = C.cost - 3 * depC;
  const combined3 = bvA3 + bvB3 + bvC3;

  const keys = [
    ann === 30000, // true
    bvB3 === 24000, // false — 30000
    bvC3 === 0, // true
    combined3 > 150000, // false — 135000
    true, // conceptual
  ];
  assert(keys[0] && !keys[1] && keys[2] && !keys[3] && keys[4], "6.4.01");

  pushCase({
    subsection: "6.4",
    case_id: "CASE 6.4.01",
    title: "Straight-Line Depreciation Across Three Assets",
    difficulty_level: "5/5",
    tier: "full",
    context: `A business owns the following fixed assets, all depreciated on a straight-line basis.

${chartBar("Annual depreciation by asset", [
  `Machinery | Annual depreciation=${depA}`,
  `Delivery truck | Annual depreciation=${depB}`,
  `Computer equipment | Annual depreciation=${depC}`,
])}

${mdAmount("Asset details", [
  ["Asset A – Machinery", "€150,000 purchase price, 10-year useful life, no residual value"],
  ["Asset B – Delivery truck", "€54,000 purchase price, 6-year useful life, €6,000 residual value"],
  ["Asset C – Computer equipment", "€21,000 purchase price, 3-year useful life, no residual value"],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Combined annual depreciation for all three assets is €30,000.",
      "After three years, the book value of the delivery truck is €24,000.",
      "After three years, the computer equipment is fully depreciated.",
      "After three years, the combined book value of all three assets exceeds €150,000.",
      "Recording depreciation is necessary because, without it, the value of these assets shown in the accounts would be inaccurate and overstated.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Annual charges are ${fmt(depA)}, ${fmt(depB)} and ${fmt(depC)}, which sum to ${fmt(ann)}.`,
      `FALSE — After three years the truck's book value is ${fmt(B.cost)} − ${fmt(3 * depB)} = ${fmt(bvB3)}, not 24,000.`,
      `TRUE — After three years accumulated depreciation equals the full purchase price of ${fmt(C.cost)}, so book value is zero.`,
      `FALSE — Combined book value after three years is ${fmt(combined3)}, which does not exceed 150,000.`,
      "TRUE — Fixed assets lose value as they are used; without depreciation they would remain at original cost and overstate their worth.",
    ],
  });
}

// ---------- 6.4.02 financial vs management accounting (refreshed) ----------
{
  const keys = [true, false, true, true, false];
  pushCase({
    subsection: "6.4",
    case_id: "CASE 6.4.02",
    title: "Financial Versus Management Accounting Uses",
    difficulty_level: "4/5",
    tier: "full",
    context: `A mid-sized manufacturer whose identity is not disclosed prepares both a published annual report for external users and detailed internal cost reports for plant managers.

[[CHART type="bar" title="Illustrative reporting audiences"]]
External users | Typical report volume=1
Internal managers | Typical report volume=12
[[/CHART]]

Evaluate the following economic assertions:`,
    statements: [
      "Financial accounting information in the annual report is aimed primarily at external users such as owners, lenders and tax authorities.",
      "Management accounting reports must follow the same legally prescribed formats as the published financial statements.",
      "Depreciation appears as an expense in the income statement even though it does not by itself cause a cash payment in the year it is recognised.",
      "Internal management reports may be prepared more frequently than once a year and can focus on product costs or department performance.",
      "Only financial accounting can ever be used to decide whether to continue or discontinue a product line.",
    ],
    answer_key: keys,
    tactical_explanations: [
      "TRUE — Financial accounting serves external stakeholders with the published financial statements and related disclosures.",
      "FALSE — Management accounting is not bound to the statutory presentation of published financial statements; formats are chosen for internal decision needs.",
      "TRUE — Depreciation allocates the cost of a fixed asset over its useful life and does not itself move cash when the charge is recorded.",
      "TRUE — Management accounts are often monthly or weekly and can zoom in on products, customers or cost centres.",
      "FALSE — Discontinue / continue decisions routinely rely on management accounting cost and contribution analysis, not only on published financial statements.",
    ],
  });
}

// ---------- 6.5.01 ← PDF 118 liquidity ----------
{
  const a = {
    store: 400,
    warehouse: 130,
    fixtures: 50,
    inv: 250,
    recv: 65,
    cash: 30,
    share: 140,
    re: 115,
    lt: 320,
    bonds: 55,
    pay: 225,
    od: 70,
  };
  const tot = a.store + a.warehouse + a.fixtures + a.inv + a.recv + a.cash;
  const eq = a.share + a.re;
  const liab = a.lt + a.bonds + a.pay + a.od;
  assert(tot === 925 && eq + liab === 925, "118 bal");
  const ca = a.inv + a.recv + a.cash;
  const cl = a.pay + a.od;
  const cr = ca / cl;
  const wc = ca - cl;
  const er = eq / tot;
  const withoutInv = (ca - a.inv) / cl;

  const keys = [
    cr >= 1.5 && cr <= 2, // false ~1.17
    wc === 50, // true
    true, // acid-test concept
    er < 0.25, // false ~27.6%
    withoutInv > 1, // false ~0.32
  ];
  assert(!keys[0] && keys[1] && keys[2] && !keys[3] && !keys[4], "6.5.01");

  pushCase({
    subsection: "6.5",
    case_id: "CASE 6.5.01",
    title: "Retail Balance Sheet Liquidity Analysis",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

${chartPie("Asset composition", [
  ["Store buildings", a.store],
  ["Warehouse", a.warehouse],
  ["Fixtures and fittings", a.fixtures],
  ["Merchandise inventory", a.inv],
  ["Trade receivables", a.recv],
  ["Cash and cash equivalents", a.cash],
])}

${mdAmount("€ in thousands", [
  ["ASSETS", ""],
  ["Store buildings", a.store],
  ["Warehouse", a.warehouse],
  ["Fixtures and fittings", a.fixtures],
  ["Merchandise inventory", a.inv],
  ["Trade receivables", a.recv],
  ["Cash and cash equivalents", a.cash],
  ["Total assets", `**${tot}**`],
  ["EQUITY", ""],
  ["Share capital", a.share],
  ["Retained earnings", a.re],
  ["Total equity", `**${eq}**`],
  ["LIABILITIES", ""],
  ["Long-term bank loan", a.lt],
  ["Bonds payable", a.bonds],
  ["Trade payables", a.pay],
  ["Bank overdraft", a.od],
  ["Total liabilities", `**${liab}**`],
  ["Total equity and liabilities", `**${tot}**`],
])}

Evaluate the following economic assertions:`,
    statements: [
      "The current ratio falls between 1.5 and 2, the range often considered ideal.",
      "Working capital equals €50 thousand.",
      "Because inventory is not always quickly convertible into cash, the acid-test ratio excludes it from current assets to give a stricter test of a business's liquidity than the current ratio.",
      "The equity ratio is below 25%.",
      "If merchandise inventory alone were excluded from current assets, the remaining current assets would still be enough to cover current liabilities more than once.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Current assets ${ca} / current liabilities ${cl} ≈ ${cr.toFixed(2)}, which is below the 1.5–2 range.`,
      `TRUE — Working capital = ${ca} − ${cl} = ${wc}.`,
      "TRUE — The acid-test ratio removes inventory because it can be harder to turn into cash quickly, giving a stricter liquidity check than the current ratio.",
      `FALSE — Equity ratio = ${eq}/${tot} ≈ ${pct(er).toFixed(1)}%, which is above 25%.`,
      `FALSE — Remaining current assets ${ca - a.inv} cover current liabilities only about ${withoutInv.toFixed(2)} times, below 1.`,
    ],
  });
}

// ---------- 6.5.02 ← PDF 121 turnover ----------
{
  const rev = 1080;
  const cos = 705;
  const assetsBeg = 840;
  const assetsEnd = 930;
  const invBeg = 140;
  const invEnd = 170;
  const avgAssets = (assetsBeg + assetsEnd) / 2;
  const avgInv = (invBeg + invEnd) / 2;
  const assetTurn = rev / avgAssets;
  const invTurn = cos / avgInv;
  const invShare = avgInv / avgAssets;
  const invGrowth = (invEnd - invBeg) / invBeg;

  const keys = [
    assetTurn > 1.5, // false ~1.22
    invTurn < 5, // true ~4.55
    invShare < 0.15, // false ~17.5%
    true, // conceptual
    invGrowth > 0.25, // false ~21.4%
  ];
  assert(!keys[0] && keys[1] && !keys[2] && keys[3] && !keys[4], "6.5.02");

  pushCase({
    subsection: "6.5",
    case_id: "CASE 6.5.02",
    title: "Asset and Inventory Turnover Extract",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following extract (in € thousands) for a business whose identity is not disclosed.

${chartBar("Beginning versus ending balances", [
  `Total assets | Beginning=${assetsBeg} | Ending=${assetsEnd}`,
  `Inventory | Beginning=${invBeg} | Ending=${invEnd}`,
])}

${mdAmount("Item (€ thousands)", [
  ["Revenue", fmt(rev)],
  ["Cost of sales", cos],
  ["Total assets at the beginning of the year", assetsBeg],
  ["Total assets at the end of the year", assetsEnd],
  ["Inventory at the beginning of the year", invBeg],
  ["Inventory at the end of the year", invEnd],
])}

Evaluate the following economic assertions:`,
    statements: [
      "Asset turnover is above 1.5.",
      "Inventory turnover is below 5 times per year.",
      "Average inventory represents less than 15% of average total assets.",
      "A higher inventory turnover figure generally indicates that goods are selling well and are not remaining in stock for a long time, meaning less money is tied up in inventory.",
      "The increase in inventory from the beginning to the end of the year represents a rise of more than 25%.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Average total assets = ${avgAssets}; asset turnover = ${rev}/${avgAssets} ≈ ${assetTurn.toFixed(2)}, below 1.5.`,
      `TRUE — Average inventory = ${avgInv}; inventory turnover = ${cos}/${avgInv} ≈ ${invTurn.toFixed(2)}, which is below 5.`,
      `FALSE — Average inventory / average assets ≈ ${pct(invShare).toFixed(1)}%, which is not less than 15%.`,
      "TRUE — High inventory turnover means stock turns over quickly, so less cash is locked in inventory for long periods.",
      `FALSE — Inventory rose from ${invBeg} to ${invEnd}, about ${pct(invGrowth).toFixed(1)}%, which is not more than 25%.`,
    ],
  });
}

assert(cases.length === 10, `expected 10 got ${cases.length}`);

const ban = /\b(EBIT|EBITDA|ROCE|ROE|WC|MCAP|P&L)\b/;
for (const c of cases) {
  const blob = [c.context, ...c.statements, ...c.tactical_explanations].join("\n");
  if (ban.test(blob)) throw new Error(`Abbreviation found in ${c.case_id}: ${blob.match(ban)[0]}`);
  assert(c.statements.length === 5, c.case_id);
  assert(c.answer_key.length === 5, c.case_id);
  assert(c.tactical_explanations.length === 5, c.case_id);
  for (let i = 0; i < 5; i++) {
    const want = c.answer_key[i] ? "TRUE" : "FALSE";
    assert(c.tactical_explanations[i].startsWith(`${want} —`), `${c.case_id} expl ${i}`);
  }
  assert(/Evaluate the following economic assertions:\s*$/.test(c.context.trim()), c.case_id);
  // no formula hints in statements
  for (const s of c.statements) {
    if (/\([^)]*(?:divided by|calculated as|defined as)[^)]*\)/i.test(s)) {
      throw new Error(`Formula hint in ${c.case_id}: ${s}`);
    }
  }
}

fs.writeFileSync(
  "src/data/economics-cases-ch6-pilot.json",
  JSON.stringify(cases, null, 2) + "\n",
);

function esc(s) {
  return String(s).replace(/'/g, "''");
}
function arr(a) {
  return "ARRAY[" + a.map((x) => `'${esc(x)}'`).join(", ") + "]";
}
function barr(a) {
  return "ARRAY[" + a.map((x) => (x ? "true" : "false")).join(", ") + "]";
}

const lines = [];
lines.push("-- Chapter 6 pilot: 10 Full Course PDF-style cases with tables + charts (6.1–6.5).");
lines.push(
  "DELETE FROM public.economics_cases WHERE case_id LIKE 'CASE 6.%' AND tier = 'full' AND subsection IN ('6.1','6.2','6.3','6.4','6.5');",
);
lines.push("");
lines.push("INSERT INTO public.economics_cases");
lines.push(
  "  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)",
);
lines.push("VALUES");
lines.push(
  cases
    .map((c) => {
      const sort = Number(c.case_id.split(".").pop());
      return `( '${c.subsection}', '${esc(c.case_id)}', '${esc(c.title)}', '${esc(c.context)}', ${arr(c.statements)}, ${barr(c.answer_key)}, ${arr(c.tactical_explanations)}, '${esc(c.difficulty_level)}', ${sort}, 'full' )`;
    })
    .join(",\n"),
);
lines.push("ON CONFLICT (case_id, tier) DO UPDATE SET");
lines.push("  subsection = EXCLUDED.subsection,");
lines.push("  title = EXCLUDED.title,");
lines.push("  context = EXCLUDED.context,");
lines.push("  statements = EXCLUDED.statements,");
lines.push("  answer_key = EXCLUDED.answer_key,");
lines.push("  tactical_explanations = EXCLUDED.tactical_explanations,");
lines.push("  difficulty_level = EXCLUDED.difficulty_level,");
lines.push("  sort_order = EXCLUDED.sort_order;");
lines.push("");

fs.writeFileSync(
  "supabase/migrations/20260806210000_economics_ch6_pilot_cases.sql",
  lines.join("\n"),
);

console.log("OK", cases.length, "cases");
for (const c of cases) {
  const t = c.answer_key.filter(Boolean).length;
  console.log(c.case_id, c.subsection, `TRUE=${t}`, c.difficulty_level, c.context.includes("[[CHART") ? "chart" : "no-chart");
}
