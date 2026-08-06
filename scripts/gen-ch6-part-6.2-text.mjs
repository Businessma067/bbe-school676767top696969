/**
 * Generate scripts/ch6-part-6.2-text.json — 75 textual cases for subsection 6.2
 * "Other components of the financial statement of a business".
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.2"].filter(
  (s) => s.half === "text",
);
const OUT = "scripts/ch6-part-6.2-text.json";

const SCENE = [
  "Consider a bakery that recently invested in new commercial ovens and wants to understand how its balance sheet, statement of profit and loss and cash flow statement work together. Evaluate the following economic assertions:",
  "Consider a courier firm that expanded its delivery van fleet during the year and is reviewing how that purchase appears across its financial statements. Evaluate the following economic assertions:",
  "Consider a construction firm that finances major machinery purchases with a mix of retained profits and long-term bank borrowing. Evaluate the following economic assertions:",
  "Consider a hotel chain replacing kitchen equipment across several properties while monitoring the effect on its accounts. Evaluate the following economic assertions:",
  "Consider a software developer that reported a healthy profit for the year but noticed its cash and cash equivalents had fallen. Evaluate the following economic assertions:",
  "Consider a garage that purchased new diagnostic equipment and is reviewing how the payment is treated across its financial statements. Evaluate the following economic assertions:",
  "Consider a furniture maker upgrading its woodworking machinery and preparing its year-end accounts. Evaluate the following economic assertions:",
  "Consider a brewery installing additional brewing tanks and tracking the resulting cash flows. Evaluate the following economic assertions:",
  "Consider a textile mill replacing ageing spinning machinery and reviewing the depreciation charged each year. Evaluate the following economic assertions:",
  "Consider a printing company that bought a new printing press and is assessing the impact on its cash flow statement. Evaluate the following economic assertions:",
  "Consider an arable farm that owns land alongside a tractor and outbuildings, and is reviewing how each asset is treated in the accounts. Evaluate the following economic assertions:",
  "Consider an electronics retailer upgrading its point-of-sale tills across all branches and reviewing the year-end financial statements. Evaluate the following economic assertions:",
  "Consider a logistics company that took out a long-term loan to fund a new warehouse and is reviewing its cash flow statement. Evaluate the following economic assertions:",
  "Consider a dairy processor that collected several overdue customer invoices during the year and is classifying the resulting cash inflows. Evaluate the following economic assertions:",
  "Consider a pharmacy chain reviewing why its reported profit for the year does not match the change in its cash balance. Evaluate the following economic assertions:",
  "Consider a fitness club chain that purchased new exercise equipment and is preparing its cash flow statement for the year. Evaluate the following economic assertions:",
  "Consider a restaurant chain replacing commercial refrigerators across its outlets and reviewing the depreciation policy applied. Evaluate the following economic assertions:",
  "Consider an IT consultancy that made a loss this year and is reviewing how that loss affects its balance sheet. Evaluate the following economic assertions:",
  "Consider a publishing house that repaid part of a long-term loan during the year and is classifying the cash outflow correctly. Evaluate the following economic assertions:",
  "Consider a car parts manufacturer reviewing how its balance sheet differs from its statement of profit and loss at year end. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review the balance sheet as a snapshot of a business's assets, equity and liabilities on one specific date. Evaluate the following economic assertions:",
  "Analyze why the balance sheet does not report the value of sales made during the year. Evaluate the following economic assertions:",
  "Review how the statement of profit and loss reports revenues, costs and the resulting profit or loss over an accounting period. Evaluate the following economic assertions:",
  "Analyze why the statement of profit and loss covers a period rather than a single point in time. Evaluate the following economic assertions:",
  "Review how a financial statement typically combines a balance sheet, a statement of profit and loss and a cash flow statement. Evaluate the following economic assertions:",
  "Analyze the purpose of the cash flow statement alongside the balance sheet and statement of profit and loss. Evaluate the following economic assertions:",
  "Review how depreciation reflects the gradual wearing out of a fixed asset used to generate revenue. Evaluate the following economic assertions:",
  "Analyze why failing to record depreciation would overstate the value of a fixed asset in the accounts. Evaluate the following economic assertions:",
  "Review why depreciation is described as an expense that does not by itself cause a cash payment. Evaluate the following economic assertions:",
  "Analyze how the straight-line method spreads the depreciable cost of an asset evenly over its useful life. Evaluate the following economic assertions:",
  "Review how an asset's book value changes over time once straight-line depreciation is applied. Evaluate the following economic assertions:",
  "Analyze why land is generally treated differently from buildings, machinery and vehicles when it comes to depreciation. Evaluate the following economic assertions:",
  "Review how a profit earned during the year affects the equity reported on the balance sheet. Evaluate the following economic assertions:",
  "Analyze how a loss incurred during the year affects the equity reported on the balance sheet. Evaluate the following economic assertions:",
  "Review why profit for the year and the change in cash and cash equivalents are not usually the same figure. Evaluate the following economic assertions:",
  "Analyze how non-cash items such as depreciation cause profit and cash flow to diverge. Evaluate the following economic assertions:",
  "Review the three sections of a cash flow statement: operating, investing and financing activities. Evaluate the following economic assertions:",
  "Analyze which section of the cash flow statement reflects cash movements from core trading activities. Evaluate the following economic assertions:",
  "Review which section of the cash flow statement reflects cash movements from buying or selling long-term assets. Evaluate the following economic assertions:",
  "Analyze which section of the cash flow statement reflects cash movements from borrowing or repaying loans. Evaluate the following economic assertions:",
  "Review why a negative cash flow from investing activities does not necessarily indicate financial distress. Evaluate the following economic assertions:",
  "Analyze how collecting a trade receivable is classified within the cash flow statement. Evaluate the following economic assertions:",
  "Review how repaying a long-term loan is classified within the cash flow statement. Evaluate the following economic assertions:",
  "Analyze how the net change in cash and cash equivalents is calculated from the three cash flow sections. Evaluate the following economic assertions:",
  "Review the distinction between a point-in-time statement and a statement covering a period. Evaluate the following economic assertions:",
  "Analyze why turnover for the year appears in the statement of profit and loss rather than the balance sheet. Evaluate the following economic assertions:",
  "Review how fixed assets lose value through use and why this is reflected through depreciation charges. Evaluate the following economic assertions:",
  "Analyze the difference between a cash expense and a non-cash expense such as depreciation. Evaluate the following economic assertions:",
  "Review how the components of a financial statement work together to describe a business's financial position and performance. Evaluate the following economic assertions:",
  "Analyze why the balance sheet alone cannot show how a business performed over the whole year. Evaluate the following economic assertions:",
  "Review how retained earnings link the statement of profit and loss to the equity section of the balance sheet. Evaluate the following economic assertions:",
  "Analyze the relationship between reported profit and the equity shown on the balance sheet. Evaluate the following economic assertions:",
  "Review the relationship between reported loss and the equity shown on the balance sheet. Evaluate the following economic assertions:",
  "Analyze why a business can be profitable yet still see its cash balance fall during the year. Evaluate the following economic assertions:",
  "Review why straight-line depreciation produces an equal annual charge rather than a fluctuating one. Evaluate the following economic assertions:",
  "Analyze why land is normally excluded from a business's depreciation schedule. Evaluate the following economic assertions:",
  "Review how the useful life of a fixed asset is used to calculate straight-line depreciation. Evaluate the following economic assertions:",
  "Analyze how accumulated depreciation reduces an asset's book value over time. Evaluate the following economic assertions:",
  "Review why investing activities in the cash flow statement often involve outflows for new fixed assets. Evaluate the following economic assertions:",
  "Analyze why financing activities in the cash flow statement often involve loans and owner transactions. Evaluate the following economic assertions:",
  "Review why operating activities in the cash flow statement reflect the core trading of a business. Evaluate the following economic assertions:",
  "Analyze how a business's overall change in cash for the year links its three cash flow sections together. Evaluate the following economic assertions:",
  "Review why a business purchasing new equipment often shows a negative investing cash flow in that year. Evaluate the following economic assertions:",
  "Analyze why collecting money owed by a customer does not belong in the financing section of the cash flow statement. Evaluate the following economic assertions:",
  "Review why repaying a loan does not belong in the operating section of the cash flow statement. Evaluate the following economic assertions:",
  "Analyze the difference between the balance sheet's treatment of assets and the statement of profit and loss's treatment of costs. Evaluate the following economic assertions:",
  "Review how a business's financial statement gives a fuller picture than any single statement alone. Evaluate the following economic assertions:",
  "Analyze why depreciation is charged even though no cash leaves the business at the time it is recorded. Evaluate the following economic assertions:",
  "Review how an asset originally recorded at cost is gradually written down through depreciation. Evaluate the following economic assertions:",
  "Analyze why a business's reported profit is not the same thing as cash generated during the year. Evaluate the following economic assertions:",
  "Review why the equity of a business rises when it retains profit rather than distributing it. Evaluate the following economic assertions:",
  "Analyze why the equity of a business falls when it incurs a loss for the year. Evaluate the following economic assertions:",
  "Review how the cash flow statement complements the balance sheet and statement of profit and loss. Evaluate the following economic assertions:",
  "Analyze the overall structure of a financial statement made up of three separate but related statements. Evaluate the following economic assertions:",
  "Review why depreciation policy affects both the balance sheet and the statement of profit and loss. Evaluate the following economic assertions:",
  "Analyze how a positive operating cash flow combined with a negative investing cash flow can indicate healthy growth. Evaluate the following economic assertions:",
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
  "Revenue Recognition Over Time",
  "Bakery Balance Sheet Snapshot",
  "Courier Firm Cash Flow Classification",
  "Construction Firm Machinery Investment",
  "Hotel Chain Kitchen Equipment Depreciation",
  "Software Developer Profit and Cash Divergence",
  "Garage Diagnostic Equipment Purchase",
  "Furniture Maker Depreciation Policy",
  "Brewery Investing Cash Flow",
  "Textile Mill Machinery Wear",
  "Printing Company Asset Purchase",
  "Arable Farm Land and Tractor",
  "Electronics Retailer Till Upgrade",
  "Overstated Assets Without Depreciation",
  "Understanding the Three Cash Flow Sections",
  "Operating Cash Flow and Core Trading",
  "Investing Cash Flow and Fixed Assets",
  "Financing Cash Flow and Borrowing",
  "Retained Earnings and Equity Growth",
  "Loss and Retained Earnings Decline",
  "Reading a Balance Sheet Correctly",
  "Reading a Statement of Profit and Loss",
  "Reading a Cash Flow Statement",
  "Fixed Assets and Useful Life",
  "Accumulated Depreciation Over Time",
  "Depreciation Charge Consistency",
  "Financial Statement Structure Overview",
  "Balance Sheet Versus Income Statement",
  "Cash Flow Statement Purpose",
  "Healthy Growth and Negative Investing Flow",
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
  "Core Trading and Operating Cash Flow",
  "Straight-Line Charges Across Useful Life",
  "Land Excluded From Depreciation",
  "Book Value Decline Each Year",
  "Profit Reported Versus Cash Generated",
  "Balance Sheet Assets Equity Liabilities",
  "Profit and Loss Revenues and Costs",
  "Cash Flow Statement Three Sections",
  "Dairy Processor Receivable Collection",
  "Pharmacy Chain Profit and Cash Gap",
  "Fitness Club Equipment Purchase",
  "Restaurant Chain Refrigerator Depreciation",
  "IT Consultancy Loss and Equity",
  "Publishing House Loan Repayment",
  "Car Parts Manufacturer Statement Comparison",
  "Logistics Company Warehouse Financing",
];

const sceneIndices = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74];

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
];

const ASSETS = [
  "commercial ovens",
  "delivery van",
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
];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const manual = [
    [
      "A financial statement typically brings together a balance sheet, a statement of profit and loss, and a cash flow statement to describe a business's position, performance and cash movements.",
      "These three statements together describe financial position, trading performance and cash movements more fully than any one alone.",
    ],
    [
      "The balance sheet is drawn up at a single point in time, whereas the statement of profit and loss and the cash flow statement each cover a period.",
      "Only the balance sheet is a snapshot on one date; the other two statements summarise activity across an accounting period.",
    ],
    [
      "Revenue earned and costs incurred over an accounting period are reported in the statement of profit and loss rather than in the balance sheet.",
      "The statement of profit and loss, not the balance sheet, records revenue and costs accumulated over the period.",
    ],
    [
      "Depreciation reflects the gradual wearing out of a fixed asset as it is used to generate revenue over its useful life.",
      "Depreciation allocates the loss of value that a fixed asset experiences through use over its useful life.",
    ],
    [
      "A fixed asset that is never depreciated would remain on the accounts at its original cost even after years of use, overstating its true worth.",
      "Without depreciation, an asset stays at original cost in the accounts despite having lost value through use, which overstates it.",
    ],
    [
      "Depreciation is charged as an expense in the statement of profit and loss without itself triggering a cash payment in the year it is recorded.",
      "Depreciation is a non-cash expense; the related cash was paid when the asset was originally bought, not when the charge is recorded.",
    ],
    [
      "Under the straight-line method, an equal amount of depreciation is charged in each year of an asset's useful life, so its book value falls steadily.",
      "Straight-line depreciation charges the same amount every year of useful life, producing a steady annual fall in book value.",
    ],
    [
      "Land is generally treated differently from buildings, machinery and vehicles because it does not wear out through use and is normally not depreciated.",
      "Because land does not wear out through use in the way other fixed assets do, it is typically excluded from depreciation.",
    ],
    [
      "A profit earned during the year increases the equity reported on the balance sheet, usually by adding to retained earnings.",
      "Profit for the year raises equity, typically because it is added to retained earnings.",
    ],
    [
      "A loss incurred during the year reduces the equity reported on the balance sheet.",
      "A loss for the year lowers retained earnings and therefore reduces total equity.",
    ],
    [
      "Profit for the year and the change in cash and cash equivalents for the year are two different measures that will not usually be equal.",
      "Profit and the net change in cash are distinct measures and typically differ from one another.",
    ],
    [
      "Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period.",
      "Operating cash flow captures cash generated or used by a business's day-to-day trading.",
    ],
    [
      "Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period.",
      "Investing cash flow captures cash spent on, or received from, long-term assets such as equipment.",
    ],
    [
      "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, or transactions with owners during the period.",
      "Financing cash flow captures how a business raises and repays funding, including loans and owner transactions.",
    ],
    [
      "A negative cash flow from investing activities in a given year often signals that a business has been purchasing long-term assets rather than facing financial difficulty.",
      "Investing outflows commonly reflect spending on long-term assets rather than an indication of financial trouble.",
    ],
    [
      "The net change in cash and cash equivalents for a period is calculated by adding together cash flows from operating, investing and financing activities.",
      "Summing the operating, investing and financing cash flows gives the net change in cash for the period.",
    ],
  ];
  for (const [s, e] of manual) add(s, e);

  for (const biz of BUSINESSES) {
    add(
      `The balance sheet of a ${biz} shows its assets, equity and liabilities at a single point in time and does not report the value of sales made during the year.`,
      "A balance sheet is a snapshot on one date; sales for the year are reported in the statement of profit and loss, not the balance sheet.",
    );
    add(
      `Because a ${biz} draws up its balance sheet at one specific date each year, that document alone cannot reveal how much revenue the business generated over the preceding accounting period.`,
      "Revenue earned over a period is reported in the statement of profit and loss; the balance sheet only reflects the position on its stated date.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `The statement of profit and loss prepared by a ${biz} reports the revenues, costs and resulting profit or loss earned over the accounting period, rather than at a single moment.`,
      "Unlike the balance sheet, the statement of profit and loss covers a whole trading period rather than one specific date.",
    );
    add(
      `Over each financial year, a ${biz} records its revenues and costs in the statement of profit and loss in order to arrive at the profit or loss for that period.`,
      "The statement of profit and loss summarises revenues and costs across the accounting period to calculate the resulting profit or loss.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `When a ${biz} collects payment from a customer who owed money on a trade receivable, the resulting cash inflow is classified within cash flow from operating activities.`,
      "Collecting a trade receivable relates to core trading activity, so the cash inflow belongs in the operating section of the cash flow statement.",
    );
    add(
      `If a ${biz} repays part of a long-term bank loan during the year, that cash outflow is classified within cash flow from financing activities rather than operating activities.`,
      "Loan repayments relate to how the business is financed, so they appear in the financing section rather than the operating section.",
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    add(
      `A cash outflow that a ${biz} incurs when purchasing new ${asset} is normally classified within cash flow from investing activities.`,
      `Buying long-term assets such as ${asset} is an investing decision, so the related cash outflow sits in the investing section of the cash flow statement.`,
    );
    add(
      `A negative cash flow from investing activities at a ${biz} in a year when it purchased new ${asset} often simply reflects that spending rather than being a sign of financial distress.`,
      `Negative investing cash flow frequently indicates that a business is investing in long-term assets like ${asset}, which is a normal and often healthy pattern.`,
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    add(
      `As a ${biz} uses its ${asset} over time, the asset gradually wears out, and depreciation is charged each year to spread its cost over its useful life.`,
      `Fixed assets like ${asset} lose value through use, and depreciation allocates their cost across the years they are expected to be used.`,
    );
    add(
      `If a ${biz} failed to record depreciation on its ${asset}, the value shown for that asset in its accounts would be overstated.`,
      `Without depreciation, an asset such as ${asset} would remain at its original cost in the accounts even though it has lost value through use.`,
    );
    add(
      `Depreciation charged on a ${biz}'s ${asset} is an expense in the statement of profit and loss that does not by itself cause a cash payment in the year it is recorded.`,
      `Depreciation is a non-cash expense; the cash was paid when the ${asset} was originally purchased, not when the annual depreciation charge is recorded.`,
    );
    add(
      `Under the straight-line method, a ${biz} spreads the depreciable cost of its ${asset} evenly over its estimated useful life, reducing the asset's book value by the same amount each year.`,
      `The straight-line method charges an equal amount of depreciation on ${asset} in every year of its useful life, so book value falls steadily.`,
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `Land owned by a ${biz} is generally not depreciated, because unlike buildings, machinery or vehicles, it does not wear out through use over time.`,
      "Land normally has an unlimited useful life and is not used up in the way that buildings or machinery are, so it is typically excluded from depreciation.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `When a ${biz} earns a profit for the year, that profit increases the equity shown on its balance sheet, typically through an increase in retained earnings.`,
      "Profit for the year adds to the owners' claim on the business, raising equity, usually via retained earnings.",
    );
    add(
      `When a ${biz} makes a loss for the year, that loss reduces the equity shown on its balance sheet.`,
      "A loss for the year reduces retained earnings and therefore lowers total equity on the balance sheet.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `A ${biz} can report a profit for the year in its statement of profit and loss while still experiencing a fall in its cash and cash equivalents, because profit and cash flow are not the same thing.`,
      "Profit and cash movements can diverge; a business can be profitable on paper while its cash balance falls for other reasons during the year.",
    );
    add(
      `Because non-cash items such as depreciation are deducted in arriving at profit, the profit reported by a ${biz} for the year will not usually equal the net change in its cash and cash equivalents.`,
      "Depreciation and other non-cash adjustments mean reported profit and the net change in cash rarely match exactly.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `A complete financial statement for a ${biz} typically comprises a balance sheet, a statement of profit and loss, and a cash flow statement.`,
      "These three statements together give a fuller picture of financial position, performance and cash movements than any one of them alone.",
    );
    add(
      `Alongside its balance sheet and statement of profit and loss, a ${biz} also prepares a cash flow statement to show how cash moved during the year.`,
      "The cash flow statement complements the balance sheet and statement of profit and loss by tracking cash inflows and outflows over the period.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `The net change in cash and cash equivalents for a ${biz} over the year equals the sum of its cash flows from operating, investing and financing activities.`,
      "Adding the operating, investing and financing cash flows together gives the net change in cash and cash equivalents for the period.",
    );
  }

  if (pool.length < 225) throw new Error(`TRUE pool only ${pool.length}, need 225`);
  return pool;
}

function buildFalsePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup FALSE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const manual = [
    [
      "A financial statement is limited to a balance sheet alone and never includes a statement of profit and loss or a cash flow statement.",
      "A financial statement normally includes a balance sheet, a statement of profit and loss and a cash flow statement together.",
    ],
    [
      "The balance sheet, like the statement of profit and loss and the cash flow statement, is drawn up to cover an entire accounting period rather than a single point in time.",
      "The balance sheet is drawn up at a single point in time; it is the other two statements that cover a period.",
    ],
    [
      "Revenue earned and costs incurred over an accounting period are reported in the balance sheet rather than in the statement of profit and loss.",
      "Revenue and costs for the period are reported in the statement of profit and loss, not the balance sheet.",
    ],
    [
      "Depreciation has nothing to do with the wearing out of a fixed asset and is simply an arbitrary bookkeeping entry with no economic meaning.",
      "Depreciation specifically reflects the loss of value a fixed asset experiences through use over its useful life.",
    ],
    [
      "A fixed asset that is never depreciated will automatically show a reduced value in the accounts that reflects its true worth after years of use.",
      "Without depreciation, an asset remains at its original cost in the accounts, overstating rather than reflecting its true worth.",
    ],
    [
      "Depreciation is a cash expense in the statement of profit and loss that triggers an actual cash payment in the year it is recorded.",
      "Depreciation is a non-cash expense; it does not itself trigger a cash payment in the year it is recorded.",
    ],
    [
      "Under the straight-line method, the amount of depreciation charged changes unpredictably from year to year rather than remaining equal.",
      "Straight-line depreciation charges an equal amount every year of useful life rather than a fluctuating amount.",
    ],
    [
      "Land is treated in exactly the same way as buildings, machinery and vehicles and is depreciated over an estimated useful life.",
      "Land is generally not depreciated because it does not wear out through use in the way buildings and machinery do.",
    ],
    [
      "A profit earned during the year reduces the equity reported on the balance sheet.",
      "Profit for the year increases equity, typically through retained earnings, rather than reducing it.",
    ],
    [
      "A loss incurred during the year increases the equity reported on the balance sheet.",
      "A loss for the year reduces equity by lowering retained earnings; it does not increase equity.",
    ],
    [
      "Profit for the year and the change in cash and cash equivalents for the year are always identical figures.",
      "Profit and the net change in cash are different measures and will not usually be identical.",
    ],
    [
      "Cash flow from operating activities reflects cash movements arising from borrowing and repaying loans during the period.",
      "Borrowing and repaying loans are financing activities; operating cash flow reflects core trading instead.",
    ],
    [
      "Cash flow from investing activities reflects cash movements arising from the core trading activities of a business during the period.",
      "Core trading activities are reflected in operating cash flow; investing cash flow relates to long-term assets.",
    ],
    [
      "Cash flow from financing activities reflects cash movements arising from buying or selling long-term assets during the period.",
      "Buying or selling long-term assets is reflected in investing cash flow, not financing cash flow.",
    ],
    [
      "A negative cash flow from investing activities in a given year is always a definite sign that a business is facing financial difficulty.",
      "Investing outflows often simply reflect spending on long-term assets rather than financial distress.",
    ],
    [
      "The net change in cash and cash equivalents for a period has no relationship to cash flows from operating, investing and financing activities.",
      "The net change in cash is exactly the sum of the operating, investing and financing cash flows for the period.",
    ],
  ];
  for (const [s, e] of manual) add(s, e);

  for (const biz of BUSINESSES) {
    add(
      `The balance sheet of a ${biz} reports the total value of sales made throughout the year, in addition to its assets, equity and liabilities.`,
      "The balance sheet does not report sales or turnover for the year; that information is presented in the statement of profit and loss.",
    );
    add(
      `Because a ${biz} draws up its balance sheet at one specific date, that same document also summarises the revenue earned across the whole financial year.`,
      "The balance sheet only reflects the business's position on its date; revenue earned across the year appears in the statement of profit and loss instead.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `The statement of profit and loss prepared by a ${biz} is drawn up at a single point in time and does not cover an accounting period.`,
      "It is the balance sheet that is drawn up at a single point in time; the statement of profit and loss covers a period.",
    );
    add(
      `A ${biz}'s statement of profit and loss records its assets, equity and liabilities rather than its revenues and costs for the period.`,
      "Assets, equity and liabilities are reported on the balance sheet; the statement of profit and loss records revenues, costs and the resulting profit or loss.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `When a ${biz} collects payment from a customer who owed money on a trade receivable, the resulting cash inflow is classified within cash flow from financing activities.`,
      "Collecting a trade receivable relates to core trading activity and belongs in cash flow from operating activities, not financing activities.",
    );
    add(
      `If a ${biz} repays part of a long-term bank loan during the year, that cash outflow is classified within cash flow from operating activities rather than financing activities.`,
      "Loan repayments relate to financing the business and belong in cash flow from financing activities, not operating activities.",
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    add(
      `A cash outflow that a ${biz} incurs when purchasing new ${asset} is normally classified within cash flow from financing activities.`,
      `Purchasing long-term assets such as ${asset} is an investing decision, so the cash outflow belongs in the investing section, not the financing section.`,
    );
    add(
      `A negative cash flow from investing activities at a ${biz} always indicates that the business is in financial difficulty, regardless of what caused it.`,
      `Negative investing cash flow often simply reflects spending on new assets such as ${asset}, not financial distress.`,
    );
  }

  for (let i = 0; i < BUSINESSES.length; i++) {
    const biz = BUSINESSES[i];
    const asset = ASSETS[i];
    add(
      `As a ${biz} uses its ${asset} over time, no adjustment for wear and tear is required in the accounts because fixed assets keep their original value indefinitely.`,
      `Fixed assets such as ${asset} do wear out through use, and depreciation is charged to reflect that loss of value over time.`,
    );
    add(
      `If a ${biz} failed to record depreciation on its ${asset}, the value shown for that asset in its accounts would be understated.`,
      `Without depreciation, an asset such as ${asset} would remain at its original cost, which overstates its value rather than understating it.`,
    );
    add(
      `Depreciation charged on a ${biz}'s ${asset} is a cash expense that directly reduces the bank balance in the year it is recorded.`,
      `Depreciation does not itself cause a cash payment in the year it is recorded; it simply allocates a cost that was paid when the ${asset} was purchased.`,
    );
    add(
      `Under the straight-line method, a ${biz} charges a different and unpredictable amount of depreciation on its ${asset} each year rather than an equal amount.`,
      `The straight-line method charges the same amount of depreciation on ${asset} every year of its useful life, not a varying amount.`,
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `Land owned by a ${biz} is depreciated in the same way as its buildings and machinery, because all fixed assets wear out identically through use.`,
      "Land is generally not depreciated because it does not wear out through use in the way buildings and machinery do.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `When a ${biz} earns a profit for the year, that profit reduces the equity shown on its balance sheet.`,
      "Profit for the year increases equity, typically through retained earnings, rather than reducing it.",
    );
    add(
      `When a ${biz} makes a loss for the year, that loss increases the equity shown on its balance sheet.`,
      "A loss for the year reduces equity by lowering retained earnings; it does not increase equity.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `The profit reported by a ${biz} for the year is always identical to the net change in its cash and cash equivalents over that year.`,
      "Profit and the net change in cash are different measures and will not usually be identical, partly because of non-cash items such as depreciation.",
    );
    add(
      `Because depreciation is a cash expense for a ${biz}, its cash flow for the year will always equal its reported profit.`,
      "Depreciation is a non-cash expense, and a business's cash flow for the year will not usually equal its reported profit.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `A complete financial statement for a ${biz} consists only of a balance sheet and does not require a statement of profit and loss or a cash flow statement.`,
      "A complete financial statement normally includes a balance sheet, a statement of profit and loss and a cash flow statement together.",
    );
    add(
      `A cash flow statement is not considered part of a ${biz}'s financial statement and is prepared only voluntarily.`,
      "The cash flow statement is one of the components that together make up a financial statement, alongside the balance sheet and the statement of profit and loss.",
    );
  }

  for (const biz of BUSINESSES) {
    add(
      `The net change in cash and cash equivalents for a ${biz} over the year is unrelated to its cash flows from operating, investing and financing activities.`,
      "The net change in cash is exactly the sum of the operating, investing and financing cash flows for the period, so the two are directly related.",
    );
  }

  if (pool.length < 150) throw new Error(`FALSE pool only ${pool.length}, need 150`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE");

const cases = buildCases({
  subsection: "6.2",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
