/**
 * Generate scripts/ch6-part-6.5-text.json — 75 textual cases for subsection 6.5.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.5"].filter(
  (s) => s.half === "text",
);
const OUT = "scripts/ch6-part-6.5-text.json";

const SCENE = [
  "Consider a supermarket chain with heavy inventory levels reviewing its liquidity ratios before negotiating supplier credit. Evaluate the following economic assertions:",
  "Consider a consulting firm with few inventories comparing its working capital with that of a goods-based rival. Evaluate the following economic assertions:",
  "Consider a listed manufacturer whose shareholders compare its return on equity with sector peers. Evaluate the following economic assertions:",
  "Consider a highly geared construction group whose lenders focus on its debt ratio and interest cover. Evaluate the following economic assertions:",
  "Consider a fashion retailer monitoring inventory turnover because unsold seasonal stock ties up cash. Evaluate the following economic assertions:",
  "Consider a capital-intensive utility comparing its return on capital employed with a lighter service business. Evaluate the following economic assertions:",
  "Consider a wholesaler that raised a short-term overdraft to pay suppliers and is reviewing the effect on working capital. Evaluate the following economic assertions:",
  "Consider an online retailer with rapid sales growth tracking asset turnover relative to its investment base. Evaluate the following economic assertions:",
  "Consider a hotel operator with high trade payables assessing whether its current ratio sits in the commonly cited ideal range. Evaluate the following economic assertions:",
  "Consider a pharmaceutical distributor excluding inventory when calculating a stricter liquidity measure for its bankers. Evaluate the following economic assertions:",
  "Consider a family-owned bakery comparing this year's profitability ratios with its own figures from five years ago. Evaluate the following economic assertions:",
  "Consider a steel producer whose investors demand context before interpreting a single return on capital employed figure. Evaluate the following economic assertions:",
  "Consider a grocery cooperative worried that negative working capital might signal risky short-term financing. Evaluate the following economic assertions:",
  "Consider a software subscription business with low inventory explaining why its acid-test ratio differs from a manufacturer's. Evaluate the following economic assertions:",
  "Consider a transport fleet owner reviewing whether revenue growth is matched by efficient use of total assets. Evaluate the following economic assertions:",
  "Consider a property developer comparing equity ratio trends across two consecutive balance sheet dates. Evaluate the following economic assertions:",
  "Consider a craft exporter whose bank asks for both current ratio and acid-test ratio before renewing a facility. Evaluate the following economic assertions:",
  "Consider a medical-device maker benchmarking inventory turnover against another firm in the same industry. Evaluate the following economic assertions:",
  "Consider a cinema chain analysing whether short-term borrowing improved cash but weakened working capital. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review the four broad purposes of financial statement analysis: liquidity, profitability, financial efficiency and financial structure. Evaluate the following economic assertions:",
  "Analyze why ratio results should be interpreted alongside industry context or a business's own history. Evaluate the following economic assertions:",
  "Review how working capital is defined as current assets minus current liabilities. Evaluate the following economic assertions:",
  "Analyze why positive working capital is generally preferred to negative working capital. Evaluate the following economic assertions:",
  "Review how the current ratio compares current assets with current liabilities. Evaluate the following economic assertions:",
  "Analyze why a current ratio between one and a half and two is often described as a comfortable range. Evaluate the following economic assertions:",
  "Review how the acid-test ratio removes inventory from current assets before comparing with current liabilities. Evaluate the following economic assertions:",
  "Analyze why the acid-test ratio is a stricter liquidity test than the current ratio for inventory-heavy businesses. Evaluate the following economic assertions:",
  "Review how short-term borrowing can increase cash but also raise current liabilities and reduce working capital. Evaluate the following economic assertions:",
  "Analyze why improving working capital sustainably may require more equity or long-term finance rather than repeated short-term loans. Evaluate the following economic assertions:",
  "Review how return on equity relates profit before interest and tax to total equity. Evaluate the following economic assertions:",
  "Analyze how return on capital employed relates profit before interest and tax to capital employed. Evaluate the following economic assertions:",
  "Review how capital employed can be approximated as equity plus non-current liabilities. Evaluate the following economic assertions:",
  "Analyze why a single return on capital employed figure is most informative when compared over time or with similar firms. Evaluate the following economic assertions:",
  "Review how asset turnover relates revenue to average total assets. Evaluate the following economic assertions:",
  "Analyze how inventory turnover relates cost of sales to average inventory. Evaluate the following economic assertions:",
  "Review why a higher inventory turnover generally suggests stock is sold and replaced more quickly. Evaluate the following economic assertions:",
  "Analyze why retailers often carry more inventory relative to service firms, affecting working capital needs. Evaluate the following economic assertions:",
  "Review how the equity ratio shows equity as a percentage of total assets. Evaluate the following economic assertions:",
  "Analyze how the debt ratio shows total liabilities as a percentage of total assets. Evaluate the following economic assertions:",
  "Review why liquidity analysis focuses on ability to pay short-term obligations on time. Evaluate the following economic assertions:",
  "Analyze why profitability analysis relates profit to the size of equity or capital employed. Evaluate the following economic assertions:",
  "Review why financial efficiency analysis asks how effectively assets generate revenue. Evaluate the following economic assertions:",
  "Analyze why financial structure analysis examines the balance between equity and borrowed funds. Evaluate the following economic assertions:",
  "Review how comparing ratios with direct competitors in the same sector improves interpretation. Evaluate the following economic assertions:",
  "Analyze why comparing a business with itself across several years can reveal trends in efficiency or risk. Evaluate the following economic assertions:",
  "Review how inventory that is slow to sell can depress the acid-test ratio even when the current ratio looks adequate. Evaluate the following economic assertions:",
  "Analyze why working capital problems are related to but not identical to cash flow problems. Evaluate the following economic assertions:",
  "Review how trade credit from suppliers increases current liabilities and can reduce working capital. Evaluate the following economic assertions:",
  "Analyze why investors may prefer a comparatively high return on capital employed within an industry. Evaluate the following economic assertions:",
  "Review how average figures are used when calculating asset turnover over a year. Evaluate the following economic assertions:",
  "Analyze how average inventory smooths beginning and ending stock levels in turnover calculations. Evaluate the following economic assertions:",
  "Review why a business with a current ratio below one may struggle to meet short-term debts from current assets alone. Evaluate the following economic assertions:",
  "Analyze why excluding inventory from the acid-test ratio recognises conversion risk. Evaluate the following economic assertions:",
  "Review how financial structure influences lender perception of risk. Evaluate the following economic assertions:",
  "Analyze why a high debt ratio may accompany higher financial risk for owners. Evaluate the following economic assertions:",
  "Review how return on equity highlights profit relative to owners' capital. Evaluate the following economic assertions:",
  "Analyze why service businesses may show different typical current ratios from manufacturers. Evaluate the following economic assertions:",
  "Review how asset turnover falls when revenue grows more slowly than the asset base. Evaluate the following economic assertions:",
  "Analyze why inventory turnover is expressed as times per year in ratio analysis. Evaluate the following economic assertions:",
  "Review how liquidity, profitability and structure interact when reading a set of accounts. Evaluate the following economic assertions:",
  "Analyze why ratio analysis never replaces careful reading of the underlying statements. Evaluate the following economic assertions:",
  "Review how working capital supports day-to-day operations after short-term debts are considered. Evaluate the following economic assertions:",
  "Analyze why a firm can report profit yet still face a liquidity squeeze. Evaluate the following economic assertions:",
  "Review how comparing acid-test and current ratios together gives a fuller liquidity picture. Evaluate the following economic assertions:",
  "Analyze why capital employed measures the long-term funds financing the business operations. Evaluate the following economic assertions:",
  "Review how return measures should be read with the same profit definition throughout a comparison. Evaluate the following economic assertions:",
  "Analyze why inventory-heavy sectors accept different liquidity benchmarks from asset-light sectors. Evaluate the following economic assertions:",
  "Review how financial efficiency links revenue generation to the asset base employed. Evaluate the following economic assertions:",
  "Analyze why a rising debt ratio may signal increased reliance on borrowed funds. Evaluate the following economic assertions:",
  "Review how equity ratio and debt ratio move in opposite directions when structure changes. Evaluate the following economic assertions:",
  "Analyze why lenders may require minimum liquidity ratios in loan agreements. Evaluate the following economic assertions:",
  "Review how owners interpret return on equity when deciding whether performance justifies risk. Evaluate the following economic assertions:",
  "Analyze why inventory turnover complements margin analysis when judging retail performance. Evaluate the following economic assertions:",
  "Review how asset turnover helps assess whether expansion increased revenue proportionally. Evaluate the following economic assertions:",
  "Analyze why ratio benchmarks from unrelated industries can mislead if applied blindly. Evaluate the following economic assertions:",
];

const TITLES = [
  "Four Lenses of Financial Analysis",
  "Liquidity and Solvency",
  "Working Capital Defined",
  "Positive Working Capital Preference",
  "Current Ratio Explained",
  "Ideal Current Ratio Range",
  "Acid-Test Ratio Without Inventory",
  "Stricter Liquidity Testing",
  "Short-Term Borrowing Effects",
  "Sustainable Working Capital Improvement",
  "Return on Equity Concept",
  "Return on Capital Employed Concept",
  "Capital Employed Approximation",
  "Comparative Return Interpretation",
  "Asset Turnover Measure",
  "Inventory Turnover Measure",
  "High Inventory Turnover Meaning",
  "Retailers Versus Service Firms",
  "Equity Ratio Structure",
  "Debt Ratio Structure",
  "Profitability Relative to Size",
  "Financial Efficiency of Assets",
  "Structure Between Equity and Debt",
  "Peer Sector Comparison",
  "Trend Analysis Over Years",
  "Inventory and Acid-Test Interaction",
  "Working Capital Versus Cash Flow",
  "Trade Credit and Liabilities",
  "Investor Return Preferences",
  "Average Assets in Turnover",
  "Average Inventory in Turnover",
  "Current Ratio Below One",
  "Inventory Conversion Risk",
  "Lender View of Structure",
  "High Debt and Financial Risk",
  "Owners' Return Benchmark",
  "Sector-Specific Liquidity Norms",
  "Asset Turnover and Expansion",
  "Turnover Expressed Per Year",
  "Ratios Plus Statement Reading",
  "Profit With Liquidity Squeeze",
  "Pairing Current and Acid-Test",
  "Long-Term Funds in Capital Employed",
  "Consistent Profit Definitions",
  "Inventory-Heavy Benchmarks",
  "Revenue Relative to Assets",
  "Rising Debt Ratio Signal",
  "Equity and Debt Ratio Movement",
  "Loan Covenant Liquidity Floors",
  "Risk-Adjusted Owner Returns",
  "Inventory Turnover in Retail",
  "Expansion and Revenue Match",
  "Cross-Industry Benchmark Traps",
  "Liquidity for Supplier Payments",
  "Efficiency When Assets Grow",
  "Structure and Independence",
  "Comparing Similar Businesses",
  "Historical Ratio Trends",
  "Cash Injection Versus Structure",
  "Operating Cushion After Short Debts",
  "Acid-Test for Inventory-Heavy Firms",
  "Return Compared Over Time",
  "Turnover and Tied-Up Stock",
  "Asset Base and Revenue Growth",
  "Debt Ratio Versus Equity Ratio",
  "Working Capital in Operations",
  "Analysis Without Underlying Figures",
  "Service Firm Working Capital",
  "Manufacturer Stock Levels",
  "Return on Capital Employed Context",
  "Return on Equity Context",
  "Liquidity Before Credit Negotiation",
  "Efficiency Across Asset Types",
  "Structure and Gearing Concerns",
  "Turnover Speed and Cash Tied Up",
  "Closing Review of Ratio Analysis",
];

const sceneIndices = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 50)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const sectors = [
    "supermarket chain",
    "consulting firm",
    "manufacturer",
    "construction group",
    "fashion retailer",
    "utility company",
    "wholesaler",
    "online retailer",
    "hotel operator",
    "pharmaceutical distributor",
    "transport operator",
    "software subscription business",
    "medical-device maker",
    "cinema chain",
  ];
  const heavyInv = ["supermarket chain", "fashion retailer", "wholesaler", "pharmaceutical distributor"];
  const lightInv = ["consulting firm", "software subscription business", "hotel operator"];

  for (const s of sectors) {
    add(
      `Working capital for a ${s} is calculated by subtracting current liabilities from current assets.`,
      `The standard working capital definition applies to a ${s}: current assets minus current liabilities.`,
    );
    add(
      `A ${s} should normally prefer positive working capital so that current assets exceed current liabilities after short-term debts are considered.`,
      `Positive working capital is generally desirable for a ${s} because it leaves a cushion after meeting short-term obligations.`,
    );
    add(
      `The current ratio of a ${s} compares total current assets with total current liabilities.`,
      `Current ratio analysis for a ${s} uses the current assets to current liabilities relationship.`,
    );
    add(
      `When interpreting return on capital employed for a ${s}, comparing the figure with similar businesses or with its own past years adds meaning.`,
      `Return on capital employed for a ${s} is most useful comparatively rather than in isolation.`,
    );
    add(
      `Return on equity for a ${s} relates profit before interest and tax to the equity shown on the balance sheet.`,
      `Return on equity links owner capital to profit before interest and tax for a ${s}.`,
    );
    add(
      `Asset turnover for a ${s} relates revenue to the average total assets employed during the year.`,
      `Asset turnover measures how much revenue a ${s} generates per unit of average assets.`,
    );
    add(
      `The equity ratio for a ${s} shows what proportion of total assets is financed by equity.`,
      `Equity ratio analysis for a ${s} expresses equity as a share of total assets.`,
    );
    add(
      `The debt ratio for a ${s} shows what proportion of total assets is financed by liabilities.`,
      `Debt ratio analysis for a ${s} expresses total liabilities relative to total assets.`,
    );
  }

  for (const s of heavyInv) {
    add(
      `Because a ${s} holds substantial inventory that may not convert to cash quickly, the acid-test ratio provides a stricter liquidity check than the current ratio.`,
      `Excluding inventory in the acid-test ratio matters for inventory-heavy businesses such as a ${s}.`,
    );
    add(
      `A higher inventory turnover at a ${s} generally indicates that goods are sold and replaced more quickly, tying up less money in stock.`,
      `Rapid stock rotation at a ${s} is what a higher inventory turnover signals.`,
    );
    add(
      `Inventory turnover for a ${s} relates cost of sales to average inventory over the period.`,
      `Inventory turnover connects purchasing or production cost with average stock levels for a ${s}.`,
    );
  }

  for (const s of lightInv) {
    add(
      `A ${s} with little inventory may show a current ratio and acid-test ratio that are closer together than those of an inventory-heavy retailer.`,
      `Low inventory at a ${s} narrows the gap between current and acid-test liquidity measures.`,
    );
  }

  for (const s of sectors) {
    add(
      `If a ${s} borrows additional short-term funds to pay suppliers, its cash may rise while working capital can fall because current liabilities increase.`,
      `Short-term borrowing can boost cash yet reduce working capital for a ${s}.`,
    );
    add(
      `Liquidity analysis for a ${s} asks whether bills and short-term debts can be paid on time from available resources.`,
      `Solvency in the short run is the focus of liquidity analysis for a ${s}.`,
    );
    add(
      `Profitability analysis for a ${s} judges whether profit is adequate relative to equity or capital employed rather than in isolation.`,
      `Profit size alone is insufficient without relating it to capital for a ${s}.`,
    );
    add(
      `Financial structure analysis for a ${s} examines how assets are financed between equity and borrowed funds.`,
      `The equity-debt mix is the focus of structure analysis for a ${s}.`,
    );
  }

  add(
    "A current ratio between one and a half and two is often described as a comfortable liquidity range, though sector norms still matter.",
    "The one-and-a-half to two band is a common guideline for the current ratio when context is considered.",
  );
  add(
    "Ratio analysis should combine liquidity, profitability, financial efficiency and financial structure rather than relying on one measure alone.",
    "The four analysis purposes complement one another in a full review.",
  );
  add(
    "Comparing ratio figures with businesses in unrelated industries can mislead because typical structures differ widely.",
    "Industry context is essential when benchmarking ratios.",
  );

  const wcNotes = [
    "raising long-term equity rather than repeated overdrafts",
    "collecting receivables faster without cutting sales",
    "negotiating longer supplier terms without harming relationships",
    "reducing slow-moving inventory through targeted promotions",
    "refinancing short-term debt into a long-term loan",
  ];
  for (const s of sectors) {
    for (const n of wcNotes) {
      add(
        `Improving working capital at a ${s} sustainably may involve ${n} rather than relying on another short-term overdraft alone.`,
        `${n.charAt(0).toUpperCase() + n.slice(1)} is a structural way to strengthen working capital at a ${s}.`,
      );
    }
  }

  if (pool.length < 140) throw new Error(`TRUE pool only ${pool.length}`);
  return pool;
}

function buildFalsePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup FALSE: ${s.slice(0, 50)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const sectors = [
    "supermarket chain",
    "consulting firm",
    "manufacturer",
    "construction group",
    "fashion retailer",
    "utility company",
    "wholesaler",
    "online retailer",
    "hotel operator",
    "software subscription business",
  ];

  for (const s of sectors) {
    add(
      `Working capital for a ${s} is calculated by subtracting current assets from current liabilities.`,
      "Working capital is current assets minus current liabilities, not the reverse.",
    );
    add(
      `A ${s} with negative working capital always has more cash than it needs for daily operations.`,
      "Negative working capital means current liabilities exceed current assets and does not imply excess cash.",
    );
    add(
      `The acid-test ratio for a ${s} includes inventory in current assets before dividing by current liabilities.`,
      "The acid-test ratio excludes inventory to provide a stricter liquidity test.",
    );
    add(
      `A single return on capital employed figure for a ${s} is always meaningful without comparing it to other years or similar firms.`,
      "Return on capital employed gains meaning chiefly from comparisons over time or with peers.",
    );
    add(
      `Return on equity for a ${s} is calculated using only the cash balance rather than total equity.`,
      "Return on equity uses profit before interest and tax relative to equity, not cash alone.",
    );
    add(
      `Inventory turnover for a ${s} is calculated by dividing revenue by average inventory rather than using cost of sales.`,
      "Inventory turnover uses cost of sales relative to average inventory, not revenue.",
    );
    add(
      `A higher inventory turnover at a ${s} always means more money is tied up in stock for longer periods.`,
      "Higher inventory turnover indicates faster stock rotation and less money tied up, not more.",
    );
    add(
      `If a ${s} takes out a short-term loan, working capital always rises because cash increases.`,
      "Short-term borrowing can increase cash yet reduce working capital when current liabilities rise.",
    );
    add(
      `The current ratio and acid-test ratio for a ${s} always produce identical results regardless of inventory levels.`,
      "When inventory is material, the acid-test ratio differs from the current ratio.",
    );
    add(
      `Asset turnover for a ${s} compares profit before interest and tax with average total assets.`,
      "Asset turnover relates revenue to average assets, not profit to assets.",
    );
  }

  add(
    "Financial statement ratios from different industries can always be compared directly without adjusting for business model differences.",
    "Industry and business-model context is required before comparing ratios across firms.",
  );
  add(
    "A business with a current ratio below one always has more than enough liquid resources to settle every short-term obligation immediately.",
    "A current ratio below one suggests current assets may not fully cover current liabilities.",
  );
  add(
    "Working capital problems and cash flow problems are exactly the same issue described with different names.",
    "They are related but distinct: working capital is a balance-sheet snapshot concept whereas cash flow tracks movements over time.",
  );
  add(
    "Return on capital employed is best interpreted without reference to how capital employed was calculated.",
    "Understanding capital employed is part of interpreting return on capital employed correctly.",
  );

  const benchmarks = [
    "a five-year trend in its own accounts",
    "a close competitor in the same sector",
    "the average for firms with similar inventory intensity",
    "its performance before a major acquisition",
    "its results after a restructuring programme",
  ];
  for (const s of sectors) {
    for (const b of benchmarks) {
      add(
        `Interpreting the return on capital employed of a ${s} alongside ${b} is more informative than treating one year's figure alone as decisive.`,
        `Comparative context such as ${b} helps interpret return on capital employed for a ${s}.`,
      );
      add(
        `A ${s} that compares its inventory turnover with ${b} gains more insight than from a single turnover number viewed in isolation.`,
        `Benchmarking inventory turnover against ${b} aids interpretation for a ${s}.`,
      );
    }
  }

  const mistakes = [
    "dividing revenue by average inventory",
    "treating working capital as total assets minus equity",
    "using cash alone instead of total equity in a return measure",
    "ignoring inventory when claiming the acid-test equals the current ratio",
    "comparing a service firm's current ratio with a supermarket without context",
  ];
  for (const s of sectors) {
    for (const m of mistakes) {
      add(
        `A common analytical mistake for a ${s} is ${m}, which would distort the intended ratio meaning.`,
        `Correct ratio construction for a ${s} avoids errors such as ${m}.`,
      );
    }
  }

  const ratioTraps = [
    "treating a one-off windfall profit as proof of permanently high return on equity",
    "ignoring seasonality when judging inventory turnover at year end only",
    "using year-end assets only instead of an average in asset turnover",
    "assuming a high current ratio guarantees strong long-term profitability",
    "comparing acid-test ratios between a grocer and a software firm without adjustment",
    "reading a rising debt ratio as always positive for owners",
    "equating negative investing cash flow with immediate insolvency",
  ];
  for (const s of sectors) {
    for (const t of ratioTraps) {
      add(
        `An analyst reviewing a ${s} would be misled by ${t}.`,
        `Sound analysis of a ${s} avoids the trap of ${t}.`,
      );
    }
  }

  if (pool.length < 140) throw new Error(`FALSE pool only ${pool.length}`);
  return pool;
}

const cases = buildCases({
  subsection: "6.5",
  slots,
  TRUE: buildTruePool(),
  FALSE: buildFalsePool(),
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
