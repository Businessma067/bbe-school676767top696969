/**
 * Generate 10 Ch.6 pilot cases with programmatic formula verification.
 * Full terms only (no EBIT/ROE/ROCE/EBITDA abbreviations in student-facing text).
 */
import fs from "node:fs";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}
function nearly(a, b, eps = 1e-9) {
  return Math.abs(a - b) < eps;
}
function pct(n) {
  return n * 100;
}

const cases = [];

// ---------- 6.1.01 Comparative balance sheets ----------
{
  const y1 = {
    land: 450,
    machinery: 160,
    inventory: 95,
    receivables: 72,
    cash: 53,
    share: 250,
    retained: 170,
    ltLoan: 280,
    payables: 95,
    stLoan: 35,
  };
  const y2 = {
    land: 506,
    machinery: 205,
    inventory: 118,
    receivables: 90,
    cash: 41,
    share: 250,
    retained: 230,
    ltLoan: 316,
    payables: 120,
    stLoan: 44,
  };
  const tot1 =
    y1.land + y1.machinery + y1.inventory + y1.receivables + y1.cash;
  const tot2 =
    y2.land + y2.machinery + y2.inventory + y2.receivables + y2.cash;
  assert(tot1 === 830, `y1 assets ${tot1}`);
  assert(tot2 === 960, `y2 assets ${tot2}`);
  const eq1 = y1.share + y1.retained;
  const eq2 = y2.share + y2.retained;
  const liab1 = y1.ltLoan + y1.payables + y1.stLoan;
  const liab2 = y2.ltLoan + y2.payables + y2.stLoan;
  assert(eq1 + liab1 === tot1, "y1 balance");
  assert(eq2 + liab2 === tot2, "y2 balance");
  const growth = tot2 - tot1;
  const er1 = eq1 / tot1;
  const er2 = eq2 / tot2;
  const ca1 = y1.inventory + y1.receivables + y1.cash;
  const cl1 = y1.payables + y1.stLoan;
  const ca2 = y2.inventory + y2.receivables + y2.cash;
  const cl2 = y2.payables + y2.stLoan;
  const wc1 = ca1 - cl1;
  const wc2 = ca2 - cl2;
  const loanGrowth = (y2.ltLoan - y1.ltLoan) / y1.ltLoan;
  const payGrowth = (y2.payables - y1.payables) / y1.payables;

  const keys = [
    growth > 110, // 130 > 110
    eq2 > eq1 && er2 < er1, // equity up, ratio down
    y2.cash < y1.cash &&
      y2.land > y1.land &&
      y2.machinery > y1.machinery &&
      y2.inventory > y1.inventory &&
      y2.receivables > y1.receivables,
    wc2 - wc1 === 15, // actually -5, false
    loanGrowth > payGrowth, // false
  ];
  assert(keys[0] && keys[1] && keys[2] && !keys[3] && !keys[4], "6.1.01 keys");

  cases.push({
    subsection: "6.1",
    case_id: "CASE 6.1.01",
    title: "Comparative Balance Sheets Over Two Years",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following comparative balance sheet extracts (in € thousands) for a business whose identity is not disclosed.

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Land and buildings | 450 | 506 |
| Machinery | 160 | 205 |
| Inventory | 95 | 118 |
| Trade receivables | 72 | 90 |
| Cash and cash equivalents | 53 | 41 |
| **Total assets** | **830** | **960** |
| Share capital | 250 | 250 |
| Retained earnings | 170 | 230 |
| Long-term bank loan | 280 | 316 |
| Trade payables | 95 | 120 |
| Short-term loan | 35 | 44 |

Evaluate the following economic assertions:`,
    statements: [
      "Total assets grew by more than €110 thousand between the two years.",
      "Equity increased, but the equity ratio declined.",
      "Cash and cash equivalents fell even though every other asset category on the extract increased.",
      "Working capital increased by exactly €15 thousand.",
      "The long-term bank loan grew at a higher percentage rate than trade payables.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Total assets rose from 830 to 960, an increase of ${growth}, which is more than 110.`,
      `TRUE — Equity rose from ${eq1} to ${eq2}. The equity ratio fell from ${(pct(er1)).toFixed(2)}% (${eq1}/830) to ${(pct(er2)).toFixed(2)}% (${eq2}/960), so the ratio declined despite higher equity.`,
      "TRUE — Cash fell from 53 to 41. Land and buildings, machinery, inventory, and trade receivables all increased.",
      `FALSE — Working capital was ${wc1} in Year 1 (${ca1} − ${cl1}) and ${wc2} in Year 2 (${ca2} − ${cl2}). The change is ${wc2 - wc1}, not +15.`,
      `FALSE — The long-term bank loan grew by about ${(pct(loanGrowth)).toFixed(1)}%, while trade payables grew by about ${(pct(payGrowth)).toFixed(1)}%. Trade payables grew faster, not the loan.`,
    ],
  });
}

// ---------- 6.1.02 Single balance sheet structure ----------
{
  const a = {
    buildings: 410,
    machinery: 265,
    patents: 35,
    inventory: 128,
    receivables: 94,
    cash: 58,
    share: 180,
    retained: 165,
    ltLoan: 400,
    payables: 180,
    stLoan: 65,
  };
  const assets =
    a.buildings + a.machinery + a.patents + a.inventory + a.receivables + a.cash;
  const equity = a.share + a.retained;
  const liab = a.ltLoan + a.payables + a.stLoan;
  assert(assets === 990 && equity + liab === 990, "6.1.02 balance");
  const debtRatio = liab / assets;
  const equityIf = equity - 20;
  const equityRatioIf = equityIf / assets;
  const keys = [
    equity < a.buildings,
    debtRatio > 0.65,
    equityRatioIf < 0.32, // 325/990 ≈ 0.3283 — false
    a.ltLoan / a.stLoan > 6,
    true, // non-current assets > current? NC=410+265+35=710, C=128+94+58=280 — true but use different claim
  ];
  // Replace 5 with: "Non-current assets exceed 700."
  keys[4] = a.buildings + a.machinery + a.patents > 700;
  assert(keys[0] && keys[1] && !keys[2] && keys[3] && keys[4], "6.1.02 keys");

  cases.push({
    subsection: "6.1",
    case_id: "CASE 6.1.02",
    title: "Balance Sheet Structure and Equity Claims",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following balance sheet extract (in € thousands) for a business whose identity is not disclosed.

| Assets (€ thousands) | Amount | Liabilities and equity (€ thousands) | Amount |
| --- | ---: | --- | ---: |
| Buildings | 410 | Share capital | 180 |
| Machinery | 265 | Retained earnings | 165 |
| Patents | 35 | Long-term bank loan | 400 |
| Inventory | 128 | Trade payables | 180 |
| Trade receivables | 94 | Short-term loan | 65 |
| Cash and cash equivalents | 58 | | |
| **Total assets** | **990** | **Total liabilities and equity** | **990** |

Evaluate the following economic assertions:`,
    statements: [
      "Equity is less than the recorded value of the buildings.",
      "The debt ratio exceeds 65%.",
      "If retained earnings had been €20 thousand lower, the equity ratio would have fallen below 32%.",
      "Non-current liabilities are more than six times the size of the short-term loan.",
      "Non-current assets on this extract exceed €700 thousand.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Equity = share capital + retained earnings = ${equity}. Buildings are recorded at 410, so equity (${equity}) is less than buildings.`,
      `TRUE — Total liabilities = ${liab}. Debt ratio = ${liab}/990 ≈ ${(pct(debtRatio)).toFixed(2)}%, which sits just above 65%.`,
      `FALSE — Equity would become ${equityIf}. Equity ratio = ${equityIf}/990 ≈ ${(pct(equityRatioIf)).toFixed(2)}%, which is still above 32%, not below it.`,
      `TRUE — Long-term bank loan 400 divided by short-term loan 65 is about ${(a.ltLoan / a.stLoan).toFixed(2)}, which is more than six.`,
      `TRUE — Buildings + machinery + patents = ${a.buildings + a.machinery + a.patents}, which exceeds 700.`,
    ],
  });
}

// ---------- 6.2.01 Cash flow ----------
{
  const op = 84,
    inv = -132,
    fin = 55,
    beg = 18;
  const net = op + inv + fin;
  const end = beg + net;
  assert(net === 7 && end === 25, "cf totals");
  const keys = [
    net === 9, // false
    Math.abs(inv) > 2 * fin, // true 132 > 110
    end === 30, // false
    100 + inv + fin > 0, // true
    beg > end, // false
  ];
  assert(!keys[0] && keys[1] && !keys[2] && keys[3] && !keys[4], "6.2.01");

  cases.push({
    subsection: "6.2",
    case_id: "CASE 6.2.01",
    title: "Cash Flow Statement Extract",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following cash flow statement extract (in € thousands) for a business whose identity is not disclosed.

| Item | Amount (€ thousands) |
| --- | ---: |
| Cash flow from operating activities | 84 |
| Cash flow from investing activities | (132) |
| Cash flow from financing activities | 55 |
| Net change in cash and cash equivalents | 7 |
| Cash and cash equivalents at beginning of year | 18 |
| Cash and cash equivalents at end of year | 25 |

Evaluate the following economic assertions:`,
    statements: [
      "The net change in cash and cash equivalents is €9 thousand.",
      "Cash flow from investing activities, in absolute terms, is more than double the financing inflow.",
      "Ending cash and cash equivalents equal €30 thousand.",
      "If operating activities had instead generated €100 thousand, the net change in cash would have been positive.",
      "Beginning cash and cash equivalents exceed ending cash and cash equivalents.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Operating 84 plus investing (−132) plus financing 55 equals a net change of ${net}, not 9.`,
      `TRUE — Absolute investing outflow is 132. Double the financing inflow of 55 is 110. Because 132 is greater than 110, investing is more than double the financing inflow.`,
      `FALSE — Beginning cash 18 plus net change ${net} equals ending cash ${end}, not 30.`,
      `TRUE — With operating cash flow of 100, net change would be 100 − 132 + 55 = ${100 + inv + fin}, which is positive.`,
      `FALSE — Beginning cash (${beg}) is lower than ending cash (${end}), so beginning does not exceed ending.`,
    ],
  });
}

// ---------- 6.2.02 Income statement ----------
{
  const rev = 2140,
    cos = 1380,
    dist = 145,
    admin = 210,
    dep = 95;
  const gp = rev - cos;
  const ebit = gp - dist - admin - dep;
  const ebitda = ebit + dep;
  assert(gp === 760 && ebit === 310 && ebitda === 405, "is");
  const keys = [
    ebitda / ebit > 1.3,
    Math.round(pct(gp / rev)) === 36,
    dist > 2 * dep, // false
    ebit + 40 > 360, // 350 > 360 false
    ebit / rev < 0.14, // 14.49% false
  ];
  assert(keys[0] && keys[1] && !keys[2] && !keys[3] && !keys[4], "6.2.02");

  cases.push({
    subsection: "6.2",
    case_id: "CASE 6.2.02",
    title: "Income Statement With Missing Totals",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following income statement extract (in € thousands) for a business whose identity is not disclosed. Gross profit and the operating result must be calculated from the figures given.

| Item | Amount (€ thousands) |
| --- | ---: |
| Revenue | 2,140 |
| Cost of sales | 1,380 |
| Gross profit | ? |
| Distribution costs | 145 |
| General and administrative costs | 210 |
| Depreciation and amortisation | 95 |
| Operating result | ? |

Evaluate the following economic assertions:`,
    statements: [
      "Operating result before depreciation and amortisation is more than 30% higher than the operating result.",
      "The gross profit margin, rounded to the nearest whole percent, is 36%.",
      "Distribution costs are more than double depreciation and amortisation.",
      "If general and administrative costs had been €40 thousand lower, the operating result would exceed €360 thousand.",
      "The operating margin is below 14%.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Gross profit = 2,140 − 1,380 = ${gp}. Operating result = ${gp} − 145 − 210 − 95 = ${ebit}. Operating result before depreciation and amortisation = ${ebit} + 95 = ${ebitda}. ${ebitda}/${ebit} ≈ ${(ebitda / ebit).toFixed(3)}, which is more than 30% higher.`,
      `TRUE — Gross profit margin = ${gp}/2,140 ≈ ${(pct(gp / rev)).toFixed(2)}%. Rounded to the nearest whole percent this is 36%.`,
      `FALSE — 145 / 95 ≈ ${(dist / dep).toFixed(2)}, which is less than double. Double would require at least 190.`,
      `FALSE — Lowering administrative costs by 40 would raise the operating result from ${ebit} to ${ebit + 40}, which is still below 360.`,
      `FALSE — Operating margin = ${ebit}/2,140 ≈ ${(pct(ebit / rev)).toFixed(2)}%, which is above 14%, not below it.`,
    ],
  });
}

// ---------- 6.3.01 Comparative income statements ----------
{
  const y1 = { rev: 1250, cos: 800, dist: 95, admin: 140, dep: 60 };
  const y2 = { rev: 1400, cos: 868, dist: 110, admin: 155, dep: 70 };
  const gp1 = y1.rev - y1.cos,
    gp2 = y2.rev - y2.cos;
  const op1 = gp1 - y1.dist - y1.admin - y1.dep;
  const op2 = gp2 - y2.dist - y2.admin - y2.dep;
  assert(gp1 === 450 && gp2 === 532 && op1 === 155 && op2 === 197, "6.3.01");
  const revGrowth = (y2.rev - y1.rev) / y1.rev;
  const gm1 = gp1 / y1.rev,
    gm2 = gp2 / y2.rev;
  const ebitda2 = op2 + y2.dep;
  const keys = [
    revGrowth > 0.11,
    gm2 - gm1 > 0.03, // +0.02 false
    ebitda2 / op2 > 1.3,
    op2 + 20 > 220, // 217 false
    op2 / y2.rev - op1 / y1.rev > 0.015,
  ];
  assert(keys[0] && !keys[1] && keys[2] && !keys[3] && keys[4], "6.3.01k");

  cases.push({
    subsection: "6.3",
    case_id: "CASE 6.3.01",
    title: "Comparative Income Statements Across Two Years",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following comparative income statement extracts (in € thousands) for a business whose identity is not disclosed.

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 1,250 | 1,400 |
| Cost of sales | 800 | 868 |
| Gross profit | 450 | 532 |
| Distribution costs | 95 | 110 |
| General and administrative costs | 140 | 155 |
| Depreciation and amortisation | 60 | 70 |
| Operating result | 155 | 197 |

Evaluate the following economic assertions:`,
    statements: [
      "Revenue grew by more than 11%.",
      "The gross profit margin improved by more than 3 percentage points.",
      "In Year 2, operating result before depreciation and amortisation is more than 30% above the Year 2 operating result.",
      "If Year 2 general and administrative costs had been €20 thousand lower, Year 2 operating result would exceed €220 thousand.",
      "The operating margin rose by more than 1.5 percentage points.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Revenue growth = (1,400 − 1,250) / 1,250 = ${(pct(revGrowth)).toFixed(1)}%, which exceeds 11%.`,
      `FALSE — Gross margin Year 1 = 450/1,250 = ${(pct(gm1)).toFixed(2)}%. Year 2 = 532/1,400 ≈ ${(pct(gm2)).toFixed(2)}%. The improvement is about ${(pct(gm2 - gm1)).toFixed(2)} percentage points, which is not more than 3.`,
      `TRUE — Year 2 operating result before depreciation and amortisation = 197 + 70 = ${ebitda2}. Relative to operating result 197 this is about ${(pct(ebitda2 / op2 - 1)).toFixed(1)}% higher, which is more than 30%.`,
      `FALSE — Cutting administrative costs by 20 would lift Year 2 operating result from 197 to 217, which is still below 220.`,
      `TRUE — Operating margin Year 1 = 155/1,250 = ${(pct(op1 / y1.rev)).toFixed(2)}%. Year 2 = 197/1,400 ≈ ${(pct(op2 / y2.rev)).toFixed(2)}%. The rise is about ${(pct(op2 / y2.rev - op1 / y1.rev)).toFixed(2)} percentage points, more than 1.5.`,
    ],
  });
}

// ---------- 6.3.02 Balance sheet + income statement learning ----------
{
  const assets = 1350,
    share = 300,
    retained = 260,
    lt = 520,
    pay = 210,
    st = 60,
    ebit = 189;
  const equity = share + retained;
  const ce = equity + lt;
  const liab = lt + pay + st;
  assert(equity + liab === assets, "6.3.02 bal");
  const roce = ebit / ce;
  const roe = ebit / equity;
  const debt = liab / assets;
  const keys = [
    roce > 0.18, // 17.5% false
    roe > 2 * roce, // 33.75 / 17.5 ≈ 1.93 false
    debt < 0.58, // 58.5% false
    ce < 2 * (pay + st), // 1080 < 540 false
    (ebit + 21) / ce > 0.19, // true
  ];
  assert(!keys[0] && !keys[1] && !keys[2] && !keys[3] && keys[4], "6.3.02k");

  cases.push({
    subsection: "6.3",
    case_id: "CASE 6.3.02",
    title: "Reading Returns From Balance Sheet And Operating Result",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following balance sheet extract and operating result figure (in € thousands) for a business whose identity is not disclosed.

| Assets (€ thousands) | Amount | Liabilities and equity (€ thousands) | Amount |
| --- | ---: | --- | ---: |
| Property | 620 | Share capital | 300 |
| Machinery | 380 | Retained earnings | 260 |
| Patents | 55 | Long-term bank loan | 520 |
| Inventory | 90 | Trade payables | 210 |
| Trade receivables | 140 | Short-term loan | 60 |
| Cash and cash equivalents | 65 | | |
| **Total assets** | **1,350** | **Total liabilities and equity** | **1,350** |

| Income statement extract | Amount (€ thousands) |
| --- | ---: |
| Operating result | 189 |

Evaluate the following economic assertions:`,
    statements: [
      "Return on capital employed exceeds 18%.",
      "Return on equity is more than double return on capital employed.",
      "The debt ratio is below 58%.",
      "Capital employed is less than twice the combined value of trade payables and the short-term loan.",
      "If the operating result had been €21 thousand higher, return on capital employed would exceed 19%.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `FALSE — Capital employed = equity ${equity} + long-term bank loan 520 = ${ce}. Return on capital employed = 189/${ce} ≈ ${(pct(roce)).toFixed(2)}%, which does not exceed 18%.`,
      `FALSE — Return on equity = 189/${equity} ≈ ${(pct(roe)).toFixed(2)}%. Dividing by return on capital employed ≈ ${(roe / roce).toFixed(2)}, which falls just short of double.`,
      `FALSE — Total liabilities = ${liab}. Debt ratio = ${liab}/1,350 ≈ ${(pct(debt)).toFixed(2)}%, which is above 58%, not below it.`,
      `FALSE — Trade payables plus short-term loan = ${pay + st}; twice that is ${2 * (pay + st)}. Capital employed (${ce}) is well above that amount, not below it.`,
      `TRUE — A higher operating result of 189 + 21 = 210 gives return on capital employed = 210/${ce} ≈ ${(pct((ebit + 21) / ce)).toFixed(2)}%, which exceeds 19%.`,
    ],
  });
}

// ---------- 6.4.01 Depreciation ----------
{
  const cost = 96000,
    life = 8,
    ann = cost / life;
  assert(ann === 12000, "dep");
  const bv = (y) => cost - y * ann;
  const acc = (y) => y * ann;
  const keys = [
    nearly(bv(5) / bv(7), 3),
    nearly(acc(3), bv(5)),
    nearly((cost / 6 - ann) / ann, 1 / 3),
    bv(5) / cost > 0.25,
    true, // depreciation non-cash
  ];
  assert(keys.every(Boolean), "6.4.01");

  cases.push({
    subsection: "6.4",
    case_id: "CASE 6.4.01",
    title: "Straight-Line Depreciation Schedule",
    difficulty_level: "5/5",
    tier: "full",
    context: `An asset is purchased for €96,000 with an expected useful life of 8 years and zero residual value. It is depreciated on a straight-line basis for a business whose identity is not disclosed.

| End of year | Accumulated depreciation (€) | Book value (€) |
| ---: | ---: | ---: |
| 3 | 36,000 | 60,000 |
| 5 | 60,000 | 36,000 |
| 7 | 84,000 | 12,000 |

*Note: annual depreciation = 96,000 ÷ 8 = 12,000. The Year 3 book value in the table above is 96,000 − 36,000 = 60,000.*

Evaluate the following economic assertions:`,
    statements: [
      "The book value at the end of Year 5 is exactly triple the book value at the end of Year 7.",
      "Accumulated depreciation after Year 3 equals the book value remaining after Year 5.",
      "If the useful life had instead been 6 years (cost unchanged), annual depreciation would be exactly one-third higher than under the 8-year plan.",
      "The asset retains more than 25% of its original cost at the end of Year 5.",
      "Depreciation expense reduces reported profit but does not itself change the cash and cash equivalents balance.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Book value Year 5 = 96,000 − 5 × 12,000 = ${bv(5)}. Book value Year 7 = ${bv(7)}. ${bv(5)} ÷ ${bv(7)} = 3 exactly.`,
      `TRUE — Accumulated depreciation after Year 3 = 3 × 12,000 = ${acc(3)}. This equals the Year 5 book value (${bv(5)}). That equality is a feature of these numbers, not a general rule.`,
      `TRUE — With a 6-year life, annual depreciation = 96,000 ÷ 6 = 16,000. Compared with 12,000 this is an increase of 4,000, and 4,000 ÷ 12,000 = one-third.`,
      `TRUE — Year 5 book value ${bv(5)} divided by original cost 96,000 = ${(pct(bv(5) / cost)).toFixed(1)}%, which is above 25%.`,
      "TRUE — Depreciation is a non-cash expense: it lowers profit on the income statement but does not by itself move cash into or out of the business.",
    ],
  });
}

// Fix table Year 3 BV in context - I wrote 60,000 correctly. Acc 3 = 36k, BV5 = 36k for statement 2. Good.

// ---------- 6.4.02 Who uses which accounts ----------
{
  // Table of report uses - conceptual, verify logical statements carefully
  cases.push({
    subsection: "6.4",
    case_id: "CASE 6.4.02",
    title: "Financial Accounting Versus Management Accounting Uses",
    difficulty_level: "4/5",
    tier: "full",
    context: `The following overview summarises typical uses of accounting information for a business whose identity is not disclosed.

| Report or record | Primary users | Typical purpose |
| --- | --- | --- |
| Published balance sheet | External investors and creditors | Assess financial position and security |
| Published income statement | External investors and creditors | Assess profitability over a period |
| Detailed cost report by product line | Internal managers | Decide pricing and cost control |
| Cash budget for next quarter | Internal managers | Plan short-term liquidity |
| Annual financial statements filed under law | Authorities and the public | Meet legal reporting duties |

Evaluate the following economic assertions:`,
    statements: [
      "Detailed cost reports by product line belong primarily to management accounting because they support internal decision-making.",
      "A published balance sheet is intended first and foremost as an internal weekly tool for shop-floor supervisors.",
      "Cash budgets for the next quarter are management accounting instruments used to plan liquidity.",
      "Financial accounting focuses on standardised reports that can be shown to external parties such as investors and creditors.",
      "Management accounting information is useful only after it has been published in the annual financial statements.",
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      "TRUE — Cost reports broken down by product line are prepared for managers inside the firm to control costs and pricing; that is management accounting.",
      "FALSE — A published balance sheet is a financial accounting statement aimed at external users, not a weekly shop-floor control sheet.",
      "TRUE — Forward-looking cash budgets are internal planning tools and form part of management accounting.",
      "TRUE — Financial accounting produces formal, comparable statements for outsiders such as investors and creditors.",
      "FALSE — Management accounting information is prepared for internal use and often never appears in the published annual statements.",
    ],
  });
}

// ---------- 6.5.01 Share chart + returns ----------
{
  const prices = { jan: 20, feb: 22, mar: 24, apr: 26, may: 24 };
  const shares = 500_000;
  const ebit = 210,
    equity = 1200,
    ce = 1800; // € thousands
  const mcapMay = prices.may * shares;
  const rise = (prices.apr - prices.jan) / prices.jan;
  const roce = ebit / ce;
  const roe = ebit / equity;
  const keys = [
    mcapMay > 11_000_000,
    rise > 0.25,
    roce > 0.11,
    roe > roce,
    nearly((26 * shares) / (20 * shares), 1.3),
  ];
  assert(keys.every(Boolean), "6.5.01");

  cases.push({
    subsection: "6.5",
    case_id: "CASE 6.5.01",
    title: "Share Price Chart And Return Measures",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider share-price and performance figures for a listed business whose identity is not disclosed.

**Closing share prices (€)**

\`\`\`
€
26 |             ●
24 |         ●       ●
22 |     ●
20 | ●
   +------------------
     Jan Feb Mar Apr May
\`\`\`

| Month | Closing price (€) | Shares outstanding |
| --- | ---: | ---: |
| January | 20 | 500,000 |
| February | 22 | 500,000 |
| March | 24 | 500,000 |
| April | 26 | 500,000 |
| May | 24 | 500,000 |

| Annual figure (€ thousands) | Amount |
| --- | ---: |
| Operating result | 210 |
| Equity | 1,200 |
| Capital employed | 1,800 |

Evaluate the following economic assertions:`,
    statements: [
      "Market capitalisation in May exceeds €11 million.",
      "From January to April the share price rose by more than 25%.",
      "Return on capital employed exceeds 11%.",
      "Return on equity is higher than return on capital employed.",
      "If May’s closing price had stayed at €26 instead of falling to €24, May market capitalisation would equal January’s market capitalisation multiplied by 1.3.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — May market capitalisation = 24 × 500,000 = ${mcapMay.toLocaleString("en-GB")}, which is more than €11 million.`,
      `TRUE — Price rise from 20 to 26 is (26 − 20) / 20 = ${(pct(rise)).toFixed(0)}%, which exceeds 25%.`,
      `TRUE — Return on capital employed = 210 / 1,800 = ${(pct(roce)).toFixed(2)}%, which exceeds 11%.`,
      `TRUE — Return on equity = 210 / 1,200 = ${(pct(roe)).toFixed(1)}%, which is higher than return on capital employed (${(pct(roce)).toFixed(2)}%).`,
      `TRUE — At €26, May market capitalisation = 13,000,000. January market capitalisation = 10,000,000. 13,000,000 ÷ 10,000,000 = 1.3 exactly.`,
    ],
  });
}

// ---------- 6.5.02 Liquidity ratios ----------
{
  const inv = 310,
    rec = 145,
    cash = 42,
    pay = 250,
    st = 87;
  const ca = inv + rec + cash;
  const cl = pay + st;
  const cr = ca / cl;
  const acid = (ca - inv) / cl;
  const keys = [
    Math.abs(cr - 1.5) < Math.abs(cr - 1.4),
    acid > 0.5 * cr, // false
    inv / ca < 2 / 3,
    ca - cl > 150,
    (ca - inv) / (cl + 40) > acid, // false — falls
  ];
  assert(keys[0] && !keys[1] && keys[2] && keys[3] && !keys[4], "6.5.02");

  cases.push({
    subsection: "6.5",
    case_id: "CASE 6.5.02",
    title: "Liquidity Analysis From Current Items",
    difficulty_level: "5/5",
    tier: "full",
    context: `Consider the following balance sheet extract of current items (in € thousands) for a business whose identity is not disclosed.

| Item | Amount (€ thousands) |
| --- | ---: |
| Inventory | 310 |
| Trade receivables | 145 |
| Cash and cash equivalents | 42 |
| Trade payables | 250 |
| Short-term loan | 87 |

Evaluate the following economic assertions:`,
    statements: [
      "The current ratio is closer to 1.5 than to 1.4.",
      "The acid-test ratio is more than half the current ratio.",
      "Inventory accounts for less than two-thirds of current assets.",
      "Working capital is greater than €150 thousand.",
      "If the short-term loan were €40 thousand higher (all else equal), the acid-test ratio would rise.",
    ],
    answer_key: keys,
    tactical_explanations: [
      `TRUE — Current assets = ${ca}; current liabilities = ${cl}; current ratio ≈ ${cr.toFixed(3)}. Distance to 1.5 is ${Math.abs(cr - 1.5).toFixed(3)}; distance to 1.4 is ${Math.abs(cr - 1.4).toFixed(3)}. It is closer to 1.5.`,
      `FALSE — Acid-test ratio = (${ca} − 310)/${cl} ≈ ${acid.toFixed(3)}. Half of the current ratio is about ${(0.5 * cr).toFixed(3)}. Because ${acid.toFixed(3)} is below that half, the claim is false.`,
      `TRUE — Inventory share = 310/${ca} ≈ ${(pct(inv / ca)).toFixed(1)}%, which is below two-thirds (≈66.7%).`,
      `TRUE — Working capital = ${ca} − ${cl} = ${ca - cl}, which is greater than 150.`,
      `FALSE — With the short-term loan raised by 40, current liabilities become ${cl + 40} and the acid-test ratio becomes ${(ca - inv) / (cl + 40)} ≈ ${((ca - inv) / (cl + 40)).toFixed(3)}, which is lower than the original ${acid.toFixed(3)}, so the ratio would fall, not rise.`,
    ],
  });
}

assert(cases.length === 10, `expected 10 got ${cases.length}`);

// ban abbreviations in student-facing fields
const ban = /\b(EBIT|EBITDA|ROCE|ROE|WC|MCAP|P&L)\b/;
for (const c of cases) {
  const blob = [c.context, ...c.statements, ...c.tactical_explanations].join("\n");
  if (ban.test(blob)) throw new Error(`Abbreviation found in ${c.case_id}`);
  assert(c.statements.length === 5, c.case_id);
  assert(c.answer_key.length === 5, c.case_id);
  assert(c.tactical_explanations.length === 5, c.case_id);
  for (let i = 0; i < 5; i++) {
    const want = c.answer_key[i] ? "TRUE" : "FALSE";
    assert(c.tactical_explanations[i].startsWith(`${want} —`), `${c.case_id} expl ${i}`);
  }
  assert(/Evaluate the following economic assertions:\s*$/.test(c.context.trim()), c.case_id);
}

fs.writeFileSync(
  "src/data/economics-cases-ch6-pilot.json",
  JSON.stringify(cases, null, 2) + "\n",
);

// SQL
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
lines.push("-- Chapter 6 pilot: 10 Full Course table-based cases (6.1–6.5).");
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
    .map((c, i) => {
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
  console.log(c.case_id, c.subsection, `TRUE=${t}`, c.difficulty_level);
}
