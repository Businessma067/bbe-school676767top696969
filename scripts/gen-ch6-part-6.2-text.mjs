/**
 * Generate scripts/ch6-part-6.2-text.json — textual cases for subsection 6.2:
 * the statement of profit and loss, the cash flow statement (operating,
 * investing, financing), depreciation (straight-line, carrying value, non-cash
 * nature) and the divergence between profit and cash.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.2"].filter(
  (s) => s.half === "text",
);
const OUT = "scripts/ch6-part-6.2-text.json";

function fmt(n) {
  return n.toLocaleString("en-US");
}

const BUSINESSES = [
  "bakery",
  "courier firm",
  "construction firm",
  "hotel chain",
  "software developer",
  "garage",
  "furniture maker",
  "brewery",
  "textile mill",
  "printing company",
  "arable farm",
  "electronics retailer",
  "logistics company",
  "dairy processor",
  "pharmacy chain",
  "fitness club chain",
  "restaurant chain",
  "IT consultancy",
  "publishing house",
  "car parts manufacturer",
  "packaging manufacturer",
  "catering company",
  "recycling firm",
  "ceramics workshop",
];

const ASSETS = [
  "commercial ovens",
  "delivery vans",
  "heavy construction machinery",
  "kitchen equipment",
  "office computer equipment",
  "diagnostic equipment",
  "woodworking machinery",
  "brewing tanks",
  "spinning machinery",
  "printing press",
  "tractor",
  "point-of-sale tills",
  "forklift trucks",
  "refrigerated trucks",
  "dispensing equipment",
  "exercise equipment",
  "commercial refrigerators",
  "laptop computers",
  "binding machines",
  "stamping presses",
  "packaging machinery",
  "catering vans",
  "sorting machinery",
  "kiln equipment",
];

function depScenario(i) {
  const cost = 24000 + i * 4500;
  const life = [4, 5, 6, 8, 10][i % 5];
  let residual = 2000 + (i % 6) * 800;
  while ((cost - residual) % life !== 0) residual += 100;
  const annual = (cost - residual) / life;
  return { cost, residual, life, annual };
}

function cfScenario(i) {
  const operating = 26000 + i * 1600;
  const investing = 9000 + (i % 5) * 1800;
  const financingIsInflow = i % 2 === 0;
  const financing = financingIsInflow ? 5500 + i * 220 : 4200 + i * 180;
  const net = operating - investing + (financingIsInflow ? financing : -financing);
  return { operating, investing, financingIsInflow, financing, net };
}

const SCENE = [
  "Consider a bakery that installed new commercial ovens and wants to see how the purchase flows through its statement of profit and loss, cash flow statement and balance sheet. Evaluate the following economic assertions:",
  "Consider a courier firm that expanded its delivery van fleet and is reviewing how the cash outflow is classified in its cash flow statement. Evaluate the following economic assertions:",
  "Consider a construction firm financing new heavy machinery partly with retained profits and partly with a long-term loan. Evaluate the following economic assertions:",
  "Consider a hotel chain replacing kitchen equipment across several properties and tracking the depreciation charged each year. Evaluate the following economic assertions:",
  "Consider a software developer that reported a healthy profit for the year but noticed its cash and cash equivalents had fallen. Evaluate the following economic assertions:",
  "Consider a garage that bought new diagnostic equipment and is working out the straight-line depreciation to charge on it. Evaluate the following economic assertions:",
  "Consider a furniture maker upgrading its woodworking machinery and preparing its year-end statement of profit and loss. Evaluate the following economic assertions:",
  "Consider a brewery installing additional brewing tanks and reviewing the resulting cash flow from investing activities. Evaluate the following economic assertions:",
  "Consider a textile mill replacing ageing spinning machinery and calculating the machinery's carrying value after several years of use. Evaluate the following economic assertions:",
  "Consider a printing company that bought a new printing press and is assessing how the purchase affects its cash flow statement. Evaluate the following economic assertions:",
  "Consider an arable farm that owns land alongside a tractor and is reviewing how each asset is treated for depreciation purposes. Evaluate the following economic assertions:",
  "Consider an electronics retailer upgrading its point-of-sale tills across all branches and reviewing the accumulated depreciation recorded. Evaluate the following economic assertions:",
  "Consider a logistics company that took out a long-term loan to buy new forklift trucks and is classifying the resulting cash flows. Evaluate the following economic assertions:",
  "Consider a dairy processor that collected several overdue customer invoices during the year and is classifying the resulting cash inflows. Evaluate the following economic assertions:",
  "Consider a pharmacy chain reviewing why its reported profit for the year does not match the change in its cash balance. Evaluate the following economic assertions:",
  "Consider a fitness club chain that purchased new exercise equipment and is preparing the investing section of its cash flow statement. Evaluate the following economic assertions:",
  "Consider a restaurant chain replacing commercial refrigerators across its outlets and reviewing the depreciation policy applied to them. Evaluate the following economic assertions:",
  "Consider an IT consultancy that made a loss this year and is reviewing how that loss affects the equity on its balance sheet. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review the balance sheet as a snapshot of a business's assets, equity and liabilities on one specific date. Evaluate the following economic assertions:",
  "Analyze why the balance sheet does not report the sales made during the accounting period. Evaluate the following economic assertions:",
  "Review how the statement of profit and loss reports revenues, costs and the resulting profit or loss over an accounting period. Evaluate the following economic assertions:",
  "Analyze why the statement of profit and loss covers a period rather than a single point in time. Evaluate the following economic assertions:",
  "Review how a complete financial statement typically combines a balance sheet, a statement of profit and loss and a cash flow statement. Evaluate the following economic assertions:",
  "Analyze the purpose of the cash flow statement alongside the balance sheet and the statement of profit and loss. Evaluate the following economic assertions:",
  "Review how depreciation reflects the gradual wearing out of a fixed asset used to generate revenue. Evaluate the following economic assertions:",
  "Analyze why failing to record depreciation would overstate the value of a fixed asset in the accounts. Evaluate the following economic assertions:",
  "Review why depreciation is described as an expense that does not by itself cause a cash payment. Evaluate the following economic assertions:",
  "Analyze how the straight-line method spreads the depreciable amount of an asset evenly over its useful life. Evaluate the following economic assertions:",
  "Review how an asset's carrying value changes over time once straight-line depreciation is applied. Evaluate the following economic assertions:",
  "Analyze why land is generally treated differently from buildings, machinery and vehicles when it comes to depreciation. Evaluate the following economic assertions:",
  "Review how a profit earned during the year affects the equity reported on the balance sheet. Evaluate the following economic assertions:",
  "Analyze how a loss incurred during the year affects the equity reported on the balance sheet. Evaluate the following economic assertions:",
  "Review why profit for the year and the change in cash and cash equivalents are not usually the same figure. Evaluate the following economic assertions:",
  "Analyze how non-cash items such as depreciation cause profit and cash flow to diverge. Evaluate the following economic assertions:",
  "Review the three sections of a cash flow statement: operating, investing and financing activities. Evaluate the following economic assertions:",
  "Analyze which section of the cash flow statement reflects cash movements from core trading activities. Evaluate the following economic assertions:",
  "Review which section of the cash flow statement reflects cash movements from buying or selling long-term assets. Evaluate the following economic assertions:",
  "Analyze which section of the cash flow statement reflects cash movements from borrowing, repaying loans or transactions with owners. Evaluate the following economic assertions:",
  "Review why a negative cash flow from investing activities does not necessarily indicate financial distress. Evaluate the following economic assertions:",
  "Analyze how collecting a trade receivable is classified within the cash flow statement. Evaluate the following economic assertions:",
  "Review how repaying a long-term loan is classified within the cash flow statement. Evaluate the following economic assertions:",
  "Analyze how the net change in cash and cash equivalents is calculated from the three cash flow sections. Evaluate the following economic assertions:",
  "Review how straight-line depreciation is calculated from an asset's cost, residual value and useful life. Evaluate the following economic assertions:",
  "Analyze how accumulated depreciation is used to calculate an asset's carrying value after several years of use. Evaluate the following economic assertions:",
  "Review why the depreciable amount of an asset excludes its expected residual value. Evaluate the following economic assertions:",
  "Analyze how the number of years an asset has been used affects the accumulated depreciation recorded against it. Evaluate the following economic assertions:",
  "Review why turnover for the year appears in the statement of profit and loss rather than the balance sheet. Evaluate the following economic assertions:",
  "Analyze the difference between a cash expense and a non-cash expense such as depreciation. Evaluate the following economic assertions:",
  "Review how the components of a financial statement work together to describe a business's financial position and performance. Evaluate the following economic assertions:",
  "Analyze why the balance sheet alone cannot show how a business performed over the whole year. Evaluate the following economic assertions:",
  "Review how retained earnings link the statement of profit and loss to the equity section of the balance sheet. Evaluate the following economic assertions:",
  "Analyze the relationship between reported profit and the equity shown on the balance sheet. Evaluate the following economic assertions:",
  "Review the relationship between reported loss and the equity shown on the balance sheet. Evaluate the following economic assertions:",
  "Analyze why a business can be profitable yet still see its cash balance fall during the year. Evaluate the following economic assertions:",
  "Review why straight-line depreciation produces an equal annual charge rather than a fluctuating one. Evaluate the following economic assertions:",
  "Analyze why depreciation is added back to profit when working out cash generated from operating activities. Evaluate the following economic assertions:",
  "Review how a rise in inventory or trade receivables can use cash without reducing reported profit in the same period. Evaluate the following economic assertions:",
  "Analyze why investing activities in the cash flow statement often involve outflows for new fixed assets. Evaluate the following economic assertions:",
  "Review why financing activities in the cash flow statement often involve loans, share capital or dividends. Evaluate the following economic assertions:",
  "Analyze why operating activities in the cash flow statement reflect the core trading of a business. Evaluate the following economic assertions:",
  "Review how a business's overall change in cash for the year links its three cash flow sections together. Evaluate the following economic assertions:",
  "Analyze why a business purchasing new equipment often shows a negative investing cash flow in that year. Evaluate the following economic assertions:",
  "Review why a business's reported profit for the year is not the same thing as the cash it generated during the year. Evaluate the following economic assertions:",
];

const TITLES = [
  "Balance Sheet as a Point-in-Time Snapshot",
  "Profit and Loss Over an Accounting Period",
  "Components of a Financial Statement",
  "Cash Flow From Operating Activities",
  "Cash Flow From Investing Activities",
  "Cash Flow From Financing Activities",
  "Negative Investing Cash Flow Explained",
  "Collecting a Trade Receivable",
  "Repaying a Long-Term Loan",
  "Net Change in Cash and Cash Equivalents",
  "Depreciation and Asset Wear",
  "Depreciation as a Non-Cash Expense",
  "Straight-Line Depreciation Method",
  "Book Value After Depreciation",
  "Land and Non-Depreciable Assets",
  "Profit Raises Equity",
  "Loss Reduces Equity",
  "Profit Versus Cash Flow",
  "Turnover and the Balance Sheet",
  "Depreciable Amount and Residual Value",
  "Bakery Oven Depreciation Charge",
  "Courier Van Fleet Cash Outflow",
  "Construction Firm Machinery Financing",
  "Hotel Chain Kitchen Equipment Depreciation",
  "Software Developer Profit and Cash Gap",
  "Garage Diagnostic Equipment Charge",
  "Furniture Maker Depreciation Policy",
  "Brewery Investing Cash Flow",
  "Textile Mill Machinery Book Value",
  "Printing Press Cash Flow Impact",
  "Arable Farm Land and Tractor",
  "Electronics Retailer Till Upgrade",
  "Overstated Assets Without Depreciation",
  "Understanding the Three Cash Flow Sections",
  "Operating Cash Flow and Core Trading",
  "Investing Cash Flow and Fixed Assets",
  "Financing Cash Flow and Borrowing",
  "Retained Earnings and Equity Growth",
  "Loss and Retained Earnings Decline",
  "Reading a Statement of Profit and Loss",
  "Reading a Cash Flow Statement",
  "Fixed Assets and Useful Life",
  "Accumulated Depreciation Over Time",
  "Depreciation Charge Consistency",
  "Financial Statement Structure Overview",
  "Balance Sheet Versus Income Statement",
  "Cash Flow Statement Purpose",
  "Trade Receivable Cash Classification",
  "Loan Repayment Cash Classification",
  "Combining Three Financial Statements",
  "Point-in-Time Versus Period Statements",
  "Equity Movements From Profit",
  "Equity Movements From Loss",
  "Depreciation Policy and Reported Profit",
  "Non-Cash Adjustments to Profit",
  "Asset Purchase and Investing Outflows",
  "Loan Financing and Cash Outflows",
  "Straight-Line Charges Across Useful Life",
  "Land Excluded From Depreciation",
  "Profit Reported Versus Cash Generated",
];

const sceneIndices = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 70)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const manual = [
    [
      "A complete financial statement for a business typically brings together a balance sheet, a statement of profit and loss and a cash flow statement.",
      "These three statements together give a fuller picture of financial position, performance and cash movements than any single statement alone.",
    ],
    [
      "The balance sheet is drawn up at a single point in time, whereas the statement of profit and loss and the cash flow statement each summarise activity across an accounting period.",
      "Only the balance sheet is dated at one moment; the other two statements report on a period of trading.",
    ],
    [
      "Turnover for the year is reported in the statement of profit and loss rather than in the balance sheet.",
      "The balance sheet does not show sales made during the year; that figure belongs in the statement of profit and loss.",
    ],
    [
      "Depreciation reflects the gradual wearing out of a fixed asset as it is used to help generate revenue over its useful life.",
      "Depreciation allocates the loss of value a fixed asset suffers through use across the years it is expected to be used.",
    ],
    [
      "If a fixed asset were never depreciated, it would remain on the accounts at its original cost even after years of productive use, overstating its true worth.",
      "Skipping depreciation leaves an asset recorded above its real economic value once it has been used for some time.",
    ],
    [
      "Depreciation is charged as an expense in the statement of profit and loss without itself requiring a fresh cash payment in the year it is recorded.",
      "The cash for a depreciating asset was paid when it was bought; the annual charge that follows does not involve any further cash leaving the business.",
    ],
    [
      "Under the straight-line method, the depreciable amount of an asset, its cost less any expected residual value, is spread evenly over its useful life.",
      "Straight-line depreciation divides cost minus residual value by the number of years of useful life to give an equal annual charge.",
    ],
    [
      "Land is generally treated differently from buildings, machinery and vehicles because it does not wear out through use and is normally not depreciated.",
      "An unlimited useful life is the usual reason land is excluded from a depreciation schedule.",
    ],
    [
      "A profit earned during the year increases the equity reported on the balance sheet, usually because it is added to retained earnings.",
      "Profit raises the owners' stake in the business by boosting retained earnings within equity.",
    ],
    [
      "A loss incurred during the year reduces the equity reported on the balance sheet.",
      "A loss lowers retained earnings and therefore reduces total equity.",
    ],
    [
      "Profit for the year and the net change in cash and cash equivalents for the year are different measures that will not usually be equal.",
      "Non-cash items and timing differences mean profit and cash movement typically diverge.",
    ],
    [
      "Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period.",
      "Day-to-day trading, such as receipts from customers and payments to suppliers and employees, is captured in the operating section.",
    ],
    [
      "Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period.",
      "Spending on or proceeds from long-term assets such as equipment or property sit in the investing section.",
    ],
    [
      "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period.",
      "Transactions with lenders and owners are grouped in the financing section of the cash flow statement.",
    ],
    [
      "A negative cash flow from investing activities in a given year often simply reflects that a business has been purchasing long-term assets, rather than facing financial difficulty.",
      "Investing outflows commonly indicate expansion through asset purchases rather than distress.",
    ],
    [
      "The net change in cash and cash equivalents for a period is calculated by adding together the cash flows from operating, investing and financing activities.",
      "Summing the three sections of the cash flow statement gives the overall change in cash for the period.",
    ],
    [
      "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is added back to profit because it did not involve a cash payment.",
      "Depreciation is a non-cash charge, so it is added back to profit when working out cash generated from operations.",
    ],
    [
      "Accumulated depreciation is deducted from the original cost of a fixed asset to arrive at its carrying value, also called its carrying value.",
      "Carrying value equals original cost less the depreciation built up against the asset since it was acquired.",
    ],
    [
      "A rise in inventory or trade receivables during the year uses cash but does not by itself reduce the profit reported for the period, which helps explain why profit and operating cash flow can differ.",
      "Working capital movements affect cash without moving through the statement of profit and loss in the same way, creating a gap between profit and operating cash flow.",
    ],
    [
      "A business can report a profit for the year in its statement of profit and loss while still seeing its cash and cash equivalents fall, because profit and cash movement are not the same thing.",
      "Non-cash charges and the timing of cash receipts and payments mean a profitable year can still coincide with a falling cash balance.",
    ],
  ];
  for (const [s, e] of manual) add(s, e);

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const { annual } = depScenario(i);
    add(
      `Straight-line annual depreciation on ${asset} bought by a ${biz} is ${fmt(annual)} euros when cost, residual value and useful life are applied correctly.`,
      `That is the correct annual straight-line charge for this ${asset}.`,
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const { cost, annual } = depScenario(i);
    const bv2 = cost - 2 * annual;
    add(
      `After two years, the carrying value of a ${biz}'s ${asset} is ${fmt(bv2)} euros.`,
      `Cost less two years of depreciation leaves ${fmt(bv2)} euros.`,
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const { annual } = depScenario(i);
    add(
      `Accumulated depreciation on a ${biz}'s ${asset} after three years is ${fmt(annual * 3)} euros.`,
      `Three annual charges of ${fmt(annual)} euros accumulate to ${fmt(annual * 3)} euros.`,
    );
  }

  // Long cash-flow word problems removed — numeric CF practice uses table contexts below.

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const type = i % 3;
    if (type === 0) {
      add(
        `When a ${biz} collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities.`,
        "Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.",
      );
    } else if (type === 1) {
      add(
        `When a ${biz} repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.`,
        "Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.",
      );
    } else {
      add(
        `When a ${biz} purchases new ${asset} for use in the business, the resulting cash outflow belongs in cash flow from investing activities.`,
        `Buying long-term assets such as ${asset} is an investing decision, so the outflow is classified as an investing cash flow.`,
      );
    }
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    add(
      `The balance sheet of a ${biz} shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.`,
      "The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.",
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    if (i % 2 === 0) {
      add(
        `When a ${biz} earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.`,
        "Profit for the year raises retained earnings, which in turn increases total equity.",
      );
    } else {
      add(
        `When a ${biz} makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.`,
        "A loss for the year lowers retained earnings, which in turn reduces total equity.",
      );
    }
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    if (i % 2 === 0) {
      add(
        `Land owned by a ${biz} is normally left out of the depreciation schedule because, unlike its ${asset}, land does not wear out through ordinary use.`,
        "Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.",
      );
    } else {
      add(
        `The depreciation that a ${biz} charges on its ${asset} each year is a non-cash expense, since the related cash was already paid out when the ${asset} was originally purchased.`,
        "Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.",
      );
    }
  }

  if (pool.length < 160) throw new Error(`TRUE pool only ${pool.length}, need 160`);
  return pool;
}

function buildFalsePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup FALSE: ${s.slice(0, 70)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const manual = [
    [
      "A complete financial statement is limited to a balance sheet alone and never includes a statement of profit and loss or a cash flow statement.",
      "A financial statement normally combines a balance sheet, a statement of profit and loss and a cash flow statement.",
    ],
    [
      "The balance sheet, like the statement of profit and loss and the cash flow statement, is drawn up to summarise an entire accounting period rather than one specific date.",
      "It is only the balance sheet that is dated at a single point in time; the other two statements cover a period.",
    ],
    [
      "Turnover for the year is reported in the balance sheet rather than in the statement of profit and loss.",
      "Sales for the year appear in the statement of profit and loss, not the balance sheet.",
    ],
    [
      "Depreciation has nothing to do with the wearing out of a fixed asset and is simply an arbitrary entry with no economic meaning.",
      "Depreciation specifically reflects the loss of value a fixed asset experiences through use.",
    ],
    [
      "A fixed asset that is never depreciated will automatically show a reduced value in the accounts that reflects its true worth after years of use.",
      "Without depreciation, an asset stays at its original cost in the accounts, overstating rather than reflecting its real worth.",
    ],
    [
      "Depreciation is a cash expense in the statement of profit and loss that triggers an actual cash payment in the year it is recorded.",
      "Depreciation does not itself cause a cash payment in the year it is charged; the cash was paid when the asset was bought.",
    ],
    [
      "Under the straight-line method, the depreciable amount of an asset is spread unevenly across its useful life, producing a different charge each year.",
      "Straight-line depreciation produces an equal annual charge across the useful life, not a varying one.",
    ],
    [
      "Land is depreciated in exactly the same way as buildings, machinery and vehicles because all fixed assets wear out identically through use.",
      "Land is generally excluded from depreciation because it does not wear out through use the way other fixed assets do.",
    ],
    [
      "A profit earned during the year reduces the equity reported on the balance sheet.",
      "Profit increases equity, typically through retained earnings, rather than reducing it.",
    ],
    [
      "A loss incurred during the year increases the equity reported on the balance sheet.",
      "A loss reduces equity by lowering retained earnings; it does not increase equity.",
    ],
    [
      "Profit for the year and the net change in cash and cash equivalents for the year are always identical figures.",
      "Profit and the net change in cash are distinct measures that will not usually match exactly.",
    ],
    [
      "Cash flow from operating activities reflects cash movements arising from borrowing and repaying loans during the period.",
      "Borrowing and loan repayments are financing activities; operating cash flow instead reflects core trading.",
    ],
    [
      "Cash flow from investing activities reflects cash movements arising from the core day-to-day trading of a business during the period.",
      "Core trading is reflected in operating cash flow; investing cash flow relates to long-term assets.",
    ],
    [
      "Cash flow from financing activities reflects cash movements arising from buying or selling long-term assets during the period.",
      "Buying or selling long-term assets is an investing activity, not a financing one.",
    ],
    [
      "A negative cash flow from investing activities is always a definite sign that a business is in financial difficulty, regardless of the cause.",
      "Investing outflows often simply reflect spending on new long-term assets rather than financial distress.",
    ],
    [
      "The net change in cash and cash equivalents for a period has no relationship to the cash flows from operating, investing and financing activities.",
      "The net change in cash is exactly the sum of the operating, investing and financing cash flows for the period.",
    ],
    [
      "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is deducted a second time from profit.",
      "Depreciation is added back to profit in this reconciliation, not deducted again, because it never involved a cash payment.",
    ],
    [
      "Accumulated depreciation is added to the original cost of a fixed asset to arrive at its carrying value.",
      "Carrying value equals cost less accumulated depreciation, not cost plus accumulated depreciation.",
    ],
    [
      "A rise in inventory or trade receivables during the year has no effect on cash and is fully reflected in profit for the period in exactly the same way.",
      "Working capital increases use cash without moving through profit the same way, which is part of why profit and operating cash flow diverge.",
    ],
    [
      "A business that reports a profit for the year can never see its cash and cash equivalents fall over that same year.",
      "Non-cash charges and timing differences mean a profitable business can still see its cash balance fall during the year.",
    ],
  ];
  for (const [s, e] of manual) add(s, e);

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const { cost, residual, life, annual } = depScenario(i);
    const wrongAnnual = Math.round(cost / life);
    add(
      `Straight-line annual depreciation on ${asset} bought by a ${biz} is ${fmt(wrongAnnual)} euros when residual value is ignored.`,
      `Ignoring residual value overstates the charge; the correct annual amount is ${fmt(annual)} euros.`,
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const { cost, annual } = depScenario(i);
    const wrongBV = cost + 2 * annual;
    add(
      `After two years, the carrying value of a ${biz}'s ${asset} is ${fmt(wrongBV)} euros.`,
      `Depreciation reduces carrying value; the correct figure is ${fmt(cost - 2 * annual)} euros.`,
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const { annual } = depScenario(i);
    add(
      `Accumulated depreciation on a ${biz}'s ${asset} after three years is ${fmt(annual * 2)} euros.`,
      `Three years of use accumulate ${fmt(annual * 3)} euros, not two years' worth.`,
    );
  }

  // Long cash-flow word-problem FALSE items removed — numeric CF is table-based.

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    const type = i % 3;
    if (type === 0) {
      add(
        `When a ${biz} collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.`,
        "Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.",
      );
    } else if (type === 1) {
      add(
        `When a ${biz} repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities.`,
        "Loan repayments relate to how the business is financed, so they belong in the financing section, not the operating section.",
      );
    } else {
      add(
        `When a ${biz} purchases new ${asset} for use in the business, the resulting cash outflow belongs in cash flow from operating activities.`,
        `Buying long-term assets such as ${asset} is an investing decision, so the outflow belongs in the investing section, not the operating section.`,
      );
    }
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    add(
      `The balance sheet of a ${biz} reports the revenue earned and costs incurred across the whole accounting period, while its statement of profit and loss shows assets, equity and liabilities on one specific date.`,
      "This reverses the two statements: the balance sheet is the point-in-time snapshot, and the statement of profit and loss covers the period.",
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    if (i % 2 === 0) {
      add(
        `When a ${biz} earns a profit for the year, that profit is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.`,
        "Profit adds to retained earnings and increases equity; it does not reduce it.",
      );
    } else {
      add(
        `When a ${biz} makes a loss for the year, that loss is added to retained earnings and therefore increases the equity shown on its balance sheet.`,
        "A loss lowers retained earnings and reduces equity; it does not increase it.",
      );
    }
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    if (i % 2 === 0) {
      add(
        `Land owned by a ${biz} is depreciated in exactly the same way as its ${asset}, because all fixed assets wear out identically through use.`,
        "Land does not wear out through use the way equipment does, so it is normally excluded from depreciation.",
      );
    } else {
      add(
        `The depreciation that a ${biz} charges on its ${asset} each year is a cash expense that directly reduces its bank balance at the time it is recorded.`,
        `Depreciation does not itself cause a cash payment; the related cash was already paid when the ${asset} was purchased.`,
      );
    }
  }

  if (pool.length < 100) throw new Error(`FALSE pool only ${pool.length}, need 100`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE");

function cfTableCase(slot, idx) {
  const biz = BUSINESSES[idx % BUSINESSES.length];
  const asset = ASSETS[idx % ASSETS.length];
  const sc = cfScenario(idx);
  const div = 8000 + ((idx * 1700) % 22000);
  const borrow = sc.financingIsInflow
    ? sc.financing + div
    : Math.max(5000, div - sc.financing);
  // Reconstruct financing so:fin = -div + borrow
  const fin = -div + borrow;
  const context = `Consider the following cash flow statement extract (€) for a ${biz}.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | ${sc.operating} |
| Cash flow from investing activities | (${sc.investing}) |
| Dividends paid | (${div}) |
| Proceeds from new borrowing | ${borrow} |
| Cash flow from financing activities | ${fin} |

Evaluate the following economic assertions:`;

  const opCoversInv = sc.operating > sc.investing;
  const pool = [
    {
      t: true,
      s: `Dividends paid to shareholders sit in financing activities, not operating activities.`,
      e: `Dividend payments are a financing activity.`,
    },
    {
      t: true,
      s: `A business can report an investing outflow and still pay a dividend in the same year, because investing and financing are separate sections.`,
      e: `Investing and financing are recorded separately.`,
    },
    {
      t: true,
      s: `Collecting payment on a trade receivable is an operating cash inflow from the core trading cycle.`,
      e: `Customer collections belong in operating cash flow.`,
    },
    {
      t: true,
      s: `Buying new ${asset} is classified as an investing cash outflow.`,
      e: `Long-term asset purchases are investing outflows.`,
    },
    {
      t: true,
      s: `A positive cash figure is still not the same thing as a profit, because profit includes non-cash charges and accruals.`,
      e: `Profit and cash movement are different concepts.`,
    },
    {
      t: false,
      s: `The dividends paid line of (${div}) euros belongs in investing activities.`,
      e: `Dividends are financing outflows, not investing.`,
    },
    {
      t: false,
      s: `The investing outflow of ${fmt(sc.investing)} euros means the business must be failing.`,
      e: `Negative investing cash flow often just means assets were purchased.`,
    },
    {
      t: false,
      s: `Repayments of borrowed money count as operating cash outflows.`,
      e: `Loan repayments are financing, not operating.`,
    },
    {
      t: false,
      s: `Customer collections of receivables are financing cash inflows.`,
      e: `They are operating inflows.`,
    },
    {
      t: sc.operating > 30000,
      s: `Cash flow from operating activities exceeds 30,000 euros.`,
      e: `Operating cash flow is ${sc.operating} euros.`,
    },
    {
      t: sc.operating <= 30000,
      s: `Cash flow from operating activities is at most 30,000 euros.`,
      e: `Operating cash flow is ${sc.operating} euros.`,
    },
    {
      t: div > 15000,
      s: `Dividends paid exceed 15,000 euros.`,
      e: `Dividends paid are ${div} euros.`,
    },
    {
      t: div <= 15000,
      s: `Dividends paid are at most 15,000 euros.`,
      e: `Dividends paid are ${div} euros.`,
    },
    {
      t: borrow > div,
      s: `Proceeds from new borrowing (${borrow} euros) exceed dividends paid (${div} euros).`,
      e: `Borrowing ${borrow} versus dividends ${div}.`,
    },
    {
      t: borrow <= div,
      s: `Proceeds from new borrowing (${borrow} euros) do not exceed dividends paid (${div} euros).`,
      e: `Borrowing ${borrow} versus dividends ${div}.`,
    },
    {
      t: opCoversInv,
      s: `Operating cash flow (${sc.operating}) more than covers the investing outflow (${sc.investing}).`,
      e: `Operating ${sc.operating} versus investing ${sc.investing}.`,
    },
    {
      t: !opCoversInv,
      s: `Operating cash flow (${sc.operating}) does not cover the investing outflow (${sc.investing}).`,
      e: `Operating ${sc.operating} versus investing ${sc.investing}.`,
    },
    {
      t: fin > 0,
      s: `Cash flow from financing activities is positive at ${fin} euros.`,
      e: `Financing cash flow is ${fin}.`,
    },
    {
      t: fin <= 0,
      s: `Cash flow from financing activities is not positive; it is ${fin} euros.`,
      e: `Financing cash flow is ${fin}.`,
    },
  ].map((p) => ({
    ...p,
    s: `On cash-flow extract ${idx + 1} for a ${biz}: ${p.s}`,
  }));

  const statements = [];
  const tactical_explanations = [];
  const used = new Set();
  const tokens = (s) =>
    new Set(
      s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean),
    );
  const tooClose = (a, b) => {
    const A = tokens(a);
    const B = tokens(b);
    let inter = 0;
    for (const t of A) if (B.has(t)) inter++;
    const uni = A.size + B.size - inter;
    return uni ? inter / uni >= 0.75 : false;
  };
  // Prefer conceptual (textbook) statements first — PDF-style mix.
  const ordered = [...pool].sort((a, b) => {
    const score = (s) =>
      /sit in financing|separate sections|trade receivable|classified as an investing|not the same thing as a profit|belongs in investing|must be failing|count as operating|financing cash inflows/.test(
        s,
      )
        ? 1
        : 0;
    return score(b.s) - score(a.s);
  });
  for (const want of slot.answer_key) {
    const item = ordered.find(
      (p) => p.t === want && !used.has(p.s) && !statements.some((s) => tooClose(s, p.s)),
    );
    if (!item) throw new Error(`cfTableCase pool miss ${slot.case_id} want=${want}`);
    used.add(item.s);
    statements.push(item.s);
    tactical_explanations.push(`${want ? "TRUE" : "FALSE"} — ${item.e}`);
  }

  return {
    subsection: "6.2",
    case_id: slot.case_id,
    title: TITLES[idx % TITLES.length] ?? `Cash Flow Extract ${idx + 1}`,
    context,
    statements,
    answer_key: slot.answer_key,
    tactical_explanations,
    difficulty_level: slot.difficulty_level,
    tier: "full",
    half: "text",
  };
}

const conceptual = buildCases({
  subsection: "6.2",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

// ~1/3 of text slots get book-style CF tables + short statements
const cases = conceptual.map((c, idx) => (idx % 3 === 0 ? cfTableCase(slots[idx], idx) : c));

validateAndWrite(cases, slots, OUT);
