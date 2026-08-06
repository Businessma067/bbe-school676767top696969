/**
 * Generate scripts/ch6-part-6.5-text.json — textual cases for subsection 6.5
 * "Analysis of financial statements" (liquidity, profitability, financial
 * efficiency and financial structure ratios).
 *
 * Concepts covered:
 *  - liquidity: working capital, the current ratio, the acid-test ratio
 *  - profitability: return on equity, return on capital employed (spelled out
 *    in full — never abbreviated), capital employed as equity plus
 *    non-current liabilities
 *  - financial efficiency: asset turnover, inventory turnover
 *  - financial structure: the equity ratio, the debt ratio
 *  - why single ratio figures need comparison (trend or peer) to be meaningful
 *  - how short-term borrowing and trade credit interact with working capital
 *  - why inventory-heavy and asset-light businesses show different typical
 *    liquidity and turnover profiles
 *
 * Heavy conceptual use of ratios, zero parenthetical formula hints, and no
 * "line item A of €X exceeds line item B of €Y" read-offs — every statement
 * requires definitional, directional or comparative reasoning.
 *
 * Run: node scripts/gen-ch6-part-6.5-text.mjs
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const allSlots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.5"];
const slots = allSlots.filter((s) => s.half === "text");
const OUT = "scripts/ch6-part-6.5-text.json";

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function art(s) {
  if (s === "utility company") return "a";
  return /^[aeiou]/i.test(s) ? "an" : "a";
}

// ---------------------------------------------------------------------------
// Sectors — diverse, anonymous
// ---------------------------------------------------------------------------

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
  "brewery group",
  "packaging plant",
  "office-furniture retailer",
  "dairy cooperative",
  "publishing house",
  "telecommunications provider",
  "agricultural machinery dealer",
  "ceramics manufacturer",
  "courier network",
  "renewable energy developer",
];

const heavyInv = [
  "supermarket chain",
  "fashion retailer",
  "wholesaler",
  "pharmaceutical distributor",
  "office-furniture retailer",
  "dairy cooperative",
  "packaging plant",
  "agricultural machinery dealer",
  "ceramics manufacturer",
  "manufacturer",
];

const lightInv = [
  "consulting firm",
  "software subscription business",
  "hotel operator",
  "utility company",
  "telecommunications provider",
  "courier network",
  "renewable energy developer",
  "publishing house",
];

// ---------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------

const SCENE = [
  "Consider a supermarket chain with heavy inventory levels reviewing its liquidity ratios before negotiating supplier credit. Evaluate the following economic assertions:",
  "Consider a consulting firm with few inventories comparing its working capital with that of a goods-based rival. Evaluate the following economic assertions:",
  "Consider a listed manufacturer whose shareholders compare its return on equity with sector peers. Evaluate the following economic assertions:",
  "Consider a highly geared construction group whose lenders focus on its debt ratio before renewing a credit facility. Evaluate the following economic assertions:",
  "Consider a fashion retailer monitoring inventory turnover because unsold seasonal stock ties up cash. Evaluate the following economic assertions:",
  "Consider a capital-intensive utility comparing its return on capital employed with a lighter service business. Evaluate the following economic assertions:",
  "Consider a wholesaler that drew down a short-term facility to pay suppliers and is reviewing the effect on working capital. Evaluate the following economic assertions:",
  "Consider an online retailer with rapid sales growth tracking asset turnover relative to its investment base. Evaluate the following economic assertions:",
  "Consider a hotel operator with high trade payables assessing whether its current ratio sits in the commonly cited comfortable range. Evaluate the following economic assertions:",
  "Consider a pharmaceutical distributor excluding inventory when calculating a stricter liquidity measure for its bankers. Evaluate the following economic assertions:",
  "Consider a transport operator comparing this year's profitability ratios with its own figures from five years earlier. Evaluate the following economic assertions:",
  "Consider a software subscription business with low inventory explaining why its acid-test ratio differs from a manufacturer's. Evaluate the following economic assertions:",
  "Consider a medical-device maker whose investors demand context before interpreting a single return on capital employed figure. Evaluate the following economic assertions:",
  "Consider a cinema chain worried that negative working capital might signal risky short-term financing. Evaluate the following economic assertions:",
  "Consider a brewery group reviewing whether revenue growth is matched by efficient use of its total asset base. Evaluate the following economic assertions:",
  "Consider a packaging plant comparing equity ratio trends across two consecutive balance sheet dates. Evaluate the following economic assertions:",
  "Consider an office-furniture retailer whose bank asks for both the current ratio and the acid-test ratio before renewing a facility. Evaluate the following economic assertions:",
  "Consider a dairy cooperative benchmarking inventory turnover against another firm in the same industry. Evaluate the following economic assertions:",
  "Consider a publishing house analysing whether short-term borrowing improved cash but weakened working capital. Evaluate the following economic assertions:",
  "Consider a telecommunications provider whose analysts separate financial efficiency from financial structure when reading its accounts. Evaluate the following economic assertions:",
];

const themeStems = ["Analyze", "Review", "Examine", "Assess", "Consider"];
const themeConcepts = [
  "how working capital is defined and why a positive balance is generally preferred to a negative one",
  "how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses",
  "why short-term borrowing can raise a business's cash balance while simultaneously weakening its working capital",
  "how return on equity relates profit before interest and tax to the equity that owners have invested in the business",
  "how return on capital employed relates profit before interest and tax to the long-term capital financing a business",
  "why a single return on capital employed figure is best interpreted alongside comparable years or similar businesses rather than in isolation",
  "how asset turnover links revenue generated during a period to the average total assets employed to produce it",
  "how inventory turnover links cost of sales to average inventory, and what a rising figure typically indicates",
  "how the equity ratio and the debt ratio together describe the way a business finances its total assets",
  "why comparing ratios with industry peers or with a business's own history over time improves interpretation",
  "how the four broad areas of liquidity, profitability, financial efficiency and financial structure fit together in a rounded analysis",
  "why applying ratio benchmarks drawn from an unrelated industry can mislead rather than inform",
];
const THEORY = [];
for (const stem of themeStems) {
  for (const concept of themeConcepts) {
    THEORY.push(`${stem} ${concept}. Evaluate the following economic assertions:`);
  }
}

const sceneIndices = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62];

// ---------------------------------------------------------------------------
// Titles
// ---------------------------------------------------------------------------

const titleCores = [
  "Working Capital Fundamentals",
  "Liquidity Through the Current Ratio",
  "The Acid-Test Liquidity Check",
  "Short-Term Borrowing and Working Capital",
  "Return on Equity Explained",
  "Return on Capital Employed Explained",
  "Capital Employed and Long-Term Funds",
  "Asset Turnover and Revenue Generation",
  "Inventory Turnover and Stock Rotation",
  "The Equity Ratio in Financial Structure",
  "The Debt Ratio in Financial Structure",
  "Comparing Ratios Across Time and Peers",
  "The Four Pillars of Ratio Analysis",
  "Liquidity Versus Profitability",
  "Financial Efficiency of the Asset Base",
  "Sector Norms in Ratio Interpretation",
];
const titleModifiers = ["in Practice", "Explained", "for Analysts", "Across Sectors", "in Context"];
const TITLES = [];
for (const core of titleCores) {
  for (const mod of titleModifiers) {
    TITLES.push(`${core} ${mod}`);
  }
}

// ---------------------------------------------------------------------------
// TRUE pool
// ---------------------------------------------------------------------------

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  // --- Atomic conceptual statements --------------------------------------

  add(
    "Working capital is defined as current assets minus current liabilities, so a business with more current liabilities than current assets reports negative working capital.",
    "Working capital equals current assets minus current liabilities by definition.",
  );
  add(
    "A comfortable liquidity position generally means current assets are large enough to cover current liabilities with some margin to spare, though the exact margin needed varies by sector.",
    "Some margin of current assets over current liabilities is generally desired, with the required size depending on the sector.",
  );
  add(
    "The current ratio expresses how many times current assets cover current liabilities, so a ratio above one indicates current assets exceed current liabilities.",
    "A current ratio above one means current assets are larger than current liabilities.",
  );
  add(
    "A current ratio commonly cited as comfortable falls somewhere between one and a half and two, though this guideline should be read alongside the norms of the specific industry.",
    "One and a half to two is a common guideline for the current ratio, tempered by industry context.",
  );
  add(
    "A current ratio below one suggests that current liabilities exceed current assets, which can signal difficulty meeting short-term obligations from those assets alone.",
    "A current ratio below one means liabilities exceed current assets, a possible liquidity warning sign.",
  );
  add(
    "The acid-test ratio removes inventory from current assets before comparing the remainder with current liabilities, producing a stricter measure of immediate liquidity.",
    "Excluding inventory before comparing with current liabilities is what defines the acid-test ratio.",
  );
  add(
    "Because inventory can take time to sell and convert into cash, the acid-test ratio gives a more cautious liquidity picture than the current ratio for businesses holding substantial stock.",
    "Slow-to-sell inventory is why the acid-test ratio is stricter than the current ratio for stock-heavy businesses.",
  );
  add(
    "Raising a short-term loan to pay suppliers can increase a business's cash balance while simultaneously increasing current liabilities, so the net effect on working capital may be negative rather than positive.",
    "Short-term borrowing can raise cash yet still reduce working capital because current liabilities also rise.",
  );
  add(
    "Relying on extended supplier credit increases current liabilities, which can erode working capital even while the cash balance on hand remains unchanged.",
    "Extended supplier credit raises current liabilities and can reduce working capital without any change in cash.",
  );
  add(
    "Strengthening working capital on a lasting basis typically calls for long-term finance or genuine operational improvement rather than another round of short-term borrowing.",
    "Sustainable working capital improvement relies on long-term finance or operational change, not repeated short-term loans.",
  );
  add(
    "Working capital problems and cash flow problems are related concepts but are not identical, since working capital reflects a balance-sheet position at a point in time while cash flow tracks movements over a period.",
    "Working capital is a point-in-time balance-sheet concept, distinct from cash flow, which tracks movements over time.",
  );
  add(
    "Return on equity relates profit before interest and tax generated during the period to the equity invested by owners, showing how effectively that equity produced a return.",
    "Return on equity links profit before interest and tax to owners' equity.",
  );
  add(
    "Because return on equity is judged against the risk owners bear by investing in the business, a modest return may still be considered inadequate if the business carries substantial risk.",
    "Risk borne by owners is part of judging whether a given return on equity is adequate.",
  );
  add(
    "Return on capital employed relates profit before interest and tax to the long-term capital employed in the business, combining funds contributed by both owners and long-term lenders.",
    "Return on capital employed links profit before interest and tax to combined owner and long-term lender funds.",
  );
  add(
    "Capital employed can be approximated by adding non-current liabilities to equity, representing the long-term funds financing the business.",
    "Capital employed is approximated as equity plus non-current liabilities.",
  );
  add(
    "A single return on capital employed figure is most informative when set against the same business's results in earlier years or against similar businesses in the same industry.",
    "Comparative context, not an isolated figure, is what makes return on capital employed informative.",
  );
  add(
    "When comparing return measures across two businesses, using the same definition of profit throughout the comparison avoids distorted conclusions.",
    "A consistent profit definition across a comparison prevents distorted return conclusions.",
  );
  add(
    "Asset turnover relates revenue generated during the period to the average total assets employed to generate that revenue.",
    "Asset turnover links revenue to average total assets.",
  );
  add(
    "If revenue grows more slowly than the asset base a business has invested in, asset turnover will decline even while revenue itself keeps rising.",
    "Assets outgrowing revenue causes asset turnover to fall despite rising revenue.",
  );
  add(
    "Using average asset or inventory balances rather than a single year-end figure helps smooth out timing distortions when calculating turnover ratios.",
    "Averaging balances reduces timing distortions in turnover ratio calculations.",
  );
  add(
    "Inventory turnover relates the cost of sales incurred during the period to the average inventory held over that same period.",
    "Inventory turnover links cost of sales to average inventory.",
  );
  add(
    "A higher inventory turnover figure generally indicates that stock is sold and replaced more quickly, tying up less money in unsold goods.",
    "Faster stock rotation and less money tied up in stock is what a higher inventory turnover signals.",
  );
  add(
    "Inventory turnover is typically expressed as a number of times per year, reflecting how often stock is estimated to be replaced.",
    "Inventory turnover is conventionally expressed as a number of times per year.",
  );
  add(
    "The equity ratio expresses equity as a percentage of total assets, showing what proportion of the asset base owners have financed themselves.",
    "The equity ratio is equity expressed as a percentage of total assets.",
  );
  add(
    "The debt ratio expresses total liabilities as a percentage of total assets, showing what proportion of the asset base has been financed through borrowing.",
    "The debt ratio is total liabilities expressed as a percentage of total assets.",
  );
  add(
    "Because equity and liabilities together finance the whole of the balance sheet, the equity ratio and the debt ratio move in opposite directions as one rises the other falls correspondingly.",
    "Equity and liabilities financing the same total assets means the equity ratio and debt ratio move inversely.",
  );
  add(
    "A rising debt ratio generally signals greater reliance on borrowed funds and, with it, increased financial risk for the owners of the business.",
    "A rising debt ratio reflects greater borrowing reliance and higher financial risk for owners.",
  );
  add(
    "Financial statement analysis is commonly organised around four broad questions: whether a business can pay its short-term obligations, whether it is sufficiently profitable, how efficiently it uses its assets, and how it is financed.",
    "Liquidity, profitability, financial efficiency and financial structure are the four broad analytical questions.",
  );
  add(
    "Liquidity analysis is primarily concerned with whether a business can meet its short-term obligations as they fall due.",
    "Meeting short-term obligations on time is the focus of liquidity analysis.",
  );
  add(
    "Profitability analysis judges profit not in isolation but in relation to the size of the equity or capital employed that generated it.",
    "Relating profit to equity or capital employed, not viewing it alone, is the essence of profitability analysis.",
  );
  add(
    "Financial efficiency analysis asks how effectively a business converts the assets it holds into revenue.",
    "Converting assets into revenue effectively is the focus of financial efficiency analysis.",
  );
  add(
    "Financial structure analysis examines the balance between funds contributed by owners and funds borrowed from lenders.",
    "The owner-versus-lender funding balance is the focus of financial structure analysis.",
  );
  add(
    "Comparing a business's ratios with those of close competitors in the same industry provides a benchmark that a single isolated figure cannot offer.",
    "Peer comparison provides a benchmark an isolated ratio figure lacks.",
  );
  add(
    "Tracking the same ratio for one business across several consecutive years can reveal a trend that a single year's figure would conceal.",
    "Multi-year tracking reveals trends a single year's figure would hide.",
  );
  add(
    "Applying liquidity or gearing benchmarks drawn from an unrelated industry to a business in a very different sector can produce a misleading assessment.",
    "Cross-industry benchmarks applied without adjustment can mislead.",
  );
  add(
    "Because liquidity, profitability, financial efficiency and financial structure each capture a different dimension of performance, a rounded assessment of a business draws on all four rather than any single ratio.",
    "A rounded assessment combines all four analytical dimensions rather than relying on one ratio.",
  );
  add(
    "A business carrying large seasonal inventories can show a materially lower acid-test ratio than its current ratio would suggest, even when its overall liquidity position is otherwise adequate.",
    "Large seasonal inventory can widen the gap between the acid-test ratio and the current ratio without implying a liquidity problem.",
  );
  add(
    "Lenders sometimes write minimum liquidity or gearing requirements into loan agreements, using ratios such as the current ratio or the debt ratio to monitor ongoing risk.",
    "Loan agreements can embed minimum liquidity or gearing ratios as ongoing risk monitors.",
  );
  add(
    "Negative working capital is not automatically a sign of financial distress for a business that collects cash from customers well before it must pay its own suppliers.",
    "Fast cash collection ahead of supplier payment can make negative working capital manageable rather than distressed.",
  );
  add(
    "A business can report a profit for the year and still face a liquidity squeeze if that profit is tied up in inventory or receivables rather than held as cash.",
    "Profit tied up in inventory or receivables, rather than cash, can still leave a business facing a liquidity squeeze.",
  );
  add(
    "Return on equity and return on capital employed both start from profit before interest and tax but relate it to a different capital base, owners' equity in one case and total long-term capital in the other.",
    "Both return measures use profit before interest and tax but divide it by different capital bases.",
  );
  add(
    "A firm's inventory turnover and asset turnover can move in different directions in the same year if inventory management improves while overall investment in non-current assets expands.",
    "Inventory turnover and asset turnover need not move together, since they relate to different parts of the asset base.",
  );

  // --- Per-sector templates ------------------------------------------------

  for (const s of sectors) {
    add(
      `Working capital for ${art(s)} ${s} is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.`,
      `The standard working capital definition applies to ${art(s)} ${s}: current assets minus current liabilities.`,
    );
    add(
      `${cap(art(s))} ${s} is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.`,
      `Positive working capital is generally preferable for ${art(s)} ${s} as a cushion over short-term obligations.`,
    );
    add(
      `The current ratio for ${art(s)} ${s} sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.`,
      `Current ratio analysis for ${art(s)} ${s} compares current assets with current liabilities.`,
    );
    add(
      `Return on equity for ${art(s)} ${s} relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.`,
      `Return on equity for ${art(s)} ${s} links profit before interest and tax to owners' equity.`,
    );
    add(
      `A return on capital employed figure for ${art(s)} ${s} carries more weight when read alongside the business's own results from earlier years or against similar firms in its industry.`,
      `Return on capital employed for ${art(s)} ${s} is most useful in comparison rather than in isolation.`,
    );
    add(
      `Asset turnover for ${art(s)} ${s} relates revenue earned during the period to the average total assets employed to generate that revenue.`,
      `Asset turnover measures how much revenue ${art(s)} ${s} generates per unit of average assets.`,
    );
    add(
      `The equity ratio for ${art(s)} ${s} expresses the proportion of total assets financed by owners' equity rather than by borrowed funds.`,
      `Equity ratio analysis for ${art(s)} ${s} expresses equity as a share of total assets.`,
    );
    add(
      `The debt ratio for ${art(s)} ${s} expresses the proportion of total assets financed through liabilities rather than through owners' equity.`,
      `Debt ratio analysis for ${art(s)} ${s} expresses total liabilities relative to total assets.`,
    );
    add(
      `If ${art(s)} ${s} draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.`,
      `Short-term borrowing can boost cash yet reduce working capital for ${art(s)} ${s}.`,
    );
  }

  for (const s of heavyInv) {
    add(
      `Because ${art(s)} ${s} typically carries substantial inventory that cannot always be converted into cash quickly, the acid-test ratio offers a stricter liquidity check than the current ratio.`,
      `Excluding inventory in the acid-test ratio matters for inventory-heavy businesses such as ${art(s)} ${s}.`,
    );
    add(
      `A rising inventory turnover figure at ${art(s)} ${s} generally points to stock being sold and replaced more quickly, leaving less capital tied up in unsold goods.`,
      `Rapid stock rotation at ${art(s)} ${s} is what a rising inventory turnover signals.`,
    );
    add(
      `Inventory turnover for ${art(s)} ${s} relates the cost of sales incurred over the period to the average inventory held during that same period.`,
      `Inventory turnover connects cost of sales with average stock levels for ${art(s)} ${s}.`,
    );
  }

  for (const s of lightInv) {
    add(
      `${cap(art(s))} ${s} that holds comparatively little inventory tends to show a current ratio and an acid-test ratio that sit closer together than those of an inventory-heavy retailer.`,
      `Low inventory levels at ${art(s)} ${s} narrow the gap between current and acid-test liquidity measures.`,
    );
  }

  if (pool.length < 230) throw new Error(`TRUE pool only ${pool.length}, need >= 230`);
  return pool;
}

// ---------------------------------------------------------------------------
// FALSE pool
// ---------------------------------------------------------------------------

function buildFalsePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup FALSE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  // --- Atomic conceptual misconceptions ------------------------------------

  add(
    "Working capital is defined as current liabilities minus current assets, so a larger current asset balance always reduces working capital.",
    "Working capital is current assets minus current liabilities, not the reverse; a larger current asset balance raises it.",
  );
  add(
    "A business with negative working capital automatically holds more cash than it needs for its daily operations.",
    "Negative working capital means current liabilities exceed current assets and does not imply excess cash.",
  );
  add(
    "The current ratio expresses how many times current liabilities cover current assets, so a ratio above one means liabilities exceed assets.",
    "The current ratio compares current assets with current liabilities; a ratio above one means assets exceed liabilities, not the reverse.",
  );
  add(
    "A current ratio between one and a half and two is an exact legal requirement that every business in every industry must satisfy.",
    "The one-and-a-half to two range is a common guideline, not a legal requirement, and industry norms still matter.",
  );
  add(
    "A current ratio below one guarantees that a business can comfortably settle every short-term obligation immediately.",
    "A current ratio below one suggests current assets may not fully cover current liabilities, the opposite of a guarantee.",
  );
  add(
    "The acid-test ratio adds inventory to current assets before comparing the total with current liabilities, giving a more lenient measure than the current ratio.",
    "The acid-test ratio excludes inventory, giving a stricter, not more lenient, measure than the current ratio.",
  );
  add(
    "Because inventory converts into cash instantly, the acid-test ratio and the current ratio always produce identical results for any business.",
    "Inventory does not convert into cash instantly, which is exactly why the acid-test ratio can differ from the current ratio.",
  );
  add(
    "Raising a short-term loan to pay suppliers always increases working capital because the cash received immediately outweighs any increase in liabilities.",
    "Short-term borrowing raises current liabilities alongside cash, so working capital can fall rather than rise.",
  );
  add(
    "Extending supplier credit terms has no effect whatsoever on a business's current liabilities or its working capital.",
    "Extended supplier credit increases current liabilities and can reduce working capital.",
  );
  add(
    "Working capital can be strengthened permanently only by taking out repeated short-term loans, since long-term finance has no bearing on the current asset and liability position.",
    "Long-term finance and operational improvement, not repeated short-term loans, sustainably strengthen working capital.",
  );
  add(
    "Working capital and cash flow describe exactly the same concept and can always be used interchangeably without any loss of meaning.",
    "Working capital is a balance-sheet snapshot while cash flow tracks movements over time; the two are related but distinct.",
  );
  add(
    "Return on equity is calculated by comparing a business's cash balance with its total liabilities rather than relating profit to equity.",
    "Return on equity relates profit before interest and tax to equity, not cash to liabilities.",
  );
  add(
    "A low return on equity is always acceptable regardless of how much risk the owners have taken on by investing in the business.",
    "Risk borne by owners is precisely what makes a low return on equity potentially unacceptable.",
  );
  add(
    "Return on capital employed relates profit before interest and tax to inventory levels rather than to the long-term capital financing the business.",
    "Return on capital employed relates profit to long-term capital employed, not to inventory levels.",
  );
  add(
    "Capital employed is calculated by subtracting non-current liabilities from equity rather than adding the two together.",
    "Capital employed is approximated by adding non-current liabilities to equity, not subtracting them.",
  );
  add(
    "A single return on capital employed figure is always fully meaningful on its own and requires no comparison with other years or similar businesses.",
    "Return on capital employed gains meaning chiefly from comparison over time or with peers, not in isolation.",
  );
  add(
    "Comparing return measures calculated using different definitions of profit across two businesses always produces a fair and reliable comparison.",
    "Mixing different profit definitions across a comparison distorts rather than clarifies the result.",
  );
  add(
    "Asset turnover relates profit for the year to average total assets rather than relating revenue to those assets.",
    "Asset turnover relates revenue to average assets, not profit to assets.",
  );
  add(
    "Asset turnover automatically rises whenever a business adds more assets, regardless of what happens to revenue.",
    "Asset turnover falls, rather than rises, if added assets are not matched by proportional revenue growth.",
  );
  add(
    "Using a single year-end balance instead of an average figure never distorts a turnover ratio calculation.",
    "A single year-end balance can distort turnover ratios, which is exactly why averages are preferred.",
  );
  add(
    "Inventory turnover relates revenue to average inventory rather than relating cost of sales to average inventory.",
    "Inventory turnover uses cost of sales relative to average inventory, not revenue.",
  );
  add(
    "A higher inventory turnover figure generally indicates that more money is being tied up in unsold stock for longer periods.",
    "Higher inventory turnover indicates faster stock rotation and less money tied up, not more.",
  );
  add(
    "Inventory turnover is always expressed in currency units rather than as a number of times per year.",
    "Inventory turnover is conventionally expressed as a number of times per year, not in currency units.",
  );
  add(
    "The equity ratio expresses total liabilities as a percentage of total assets rather than expressing equity as a percentage of total assets.",
    "The equity ratio is equity, not liabilities, expressed as a percentage of total assets; that description matches the debt ratio instead.",
  );
  add(
    "The debt ratio expresses equity as a percentage of total assets rather than expressing total liabilities as a percentage of total assets.",
    "The debt ratio is total liabilities, not equity, expressed as a percentage of total assets; that description matches the equity ratio instead.",
  );
  add(
    "The equity ratio and the debt ratio always move in the same direction, both rising or both falling together.",
    "Because equity and liabilities finance the same total assets, the equity ratio and debt ratio move inversely, not together.",
  );
  add(
    "A rising debt ratio always reduces financial risk for the owners of a business regardless of how the additional funds are used.",
    "A rising debt ratio generally signals greater reliance on borrowing and higher, not lower, financial risk for owners.",
  );
  add(
    "Financial statement analysis is concerned only with profitability and has no established framework for examining liquidity, efficiency or structure.",
    "Financial statement analysis is commonly organised around liquidity, profitability, efficiency and structure together, not profitability alone.",
  );
  add(
    "Liquidity analysis is primarily concerned with long-term profitability rather than whether short-term obligations can be met.",
    "Liquidity analysis focuses on meeting short-term obligations, not long-term profitability.",
  );
  add(
    "Profitability analysis judges profit in absolute currency terms alone, without ever relating it to equity or capital employed.",
    "Profitability analysis relates profit to the equity or capital employed that generated it, not just its absolute size.",
  );
  add(
    "Financial efficiency analysis has nothing to do with how assets are used to generate revenue.",
    "Financial efficiency analysis is specifically about how effectively assets generate revenue.",
  );
  add(
    "Financial structure analysis focuses exclusively on inventory levels rather than the balance between equity and borrowed funds.",
    "Financial structure analysis examines the equity-versus-borrowing balance, not inventory levels.",
  );
  add(
    "Comparing a business's ratios with unrelated competitors in a completely different industry always produces the most reliable benchmark.",
    "Same-industry peers, not unrelated competitors, provide the most reliable ratio benchmark.",
  );
  add(
    "Tracking the same ratio for a business over several years reveals nothing beyond what a single year's figure already shows.",
    "Multi-year tracking reveals trends that a single year's figure cannot show on its own.",
  );
  add(
    "Benchmarks drawn from any industry can be applied to any other industry without adjustment and will always remain reliable.",
    "Cross-industry benchmarks require adjustment for differing business models to remain reliable.",
  );
  add(
    "A rounded assessment of a business can rely entirely on a single liquidity ratio without any need to consider profitability, efficiency or structure.",
    "A rounded assessment draws on liquidity, profitability, efficiency and structure together, not one ratio alone.",
  );
  add(
    "Return on equity and return on capital employed are calculated in exactly the same way and always produce identical results for the same business.",
    "The two measures use the same profit figure but divide it by different capital bases, so they generally differ.",
  );
  add(
    "Inventory turnover and asset turnover must always move in the same direction within a given year for any business.",
    "Inventory turnover and asset turnover relate to different parts of the asset base and can move independently.",
  );

  // --- Per-sector templates -------------------------------------------------

  for (const s of sectors) {
    add(
      `Working capital for ${art(s)} ${s} is calculated by subtracting current assets from current liabilities.`,
      "Working capital is current assets minus current liabilities, not the reverse.",
    );
    add(
      `A ${s} reporting negative working capital always holds more cash than it needs for its daily operations.`,
      "Negative working capital means current liabilities exceed current assets and does not imply excess cash.",
    );
    add(
      `The acid-test ratio for ${art(s)} ${s} includes inventory within current assets before comparing the total with current liabilities.`,
      "The acid-test ratio excludes inventory to provide a stricter liquidity test.",
    );
    add(
      `A single return on capital employed figure for ${art(s)} ${s} is always fully meaningful on its own, without any need to compare it against other years or similar businesses.`,
      "Return on capital employed gains meaning chiefly from comparisons over time or with peers.",
    );
    add(
      `Return on equity for ${art(s)} ${s} is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.`,
      "Return on equity relates profit before interest and tax to equity, not cash to liabilities.",
    );
    add(
      `Inventory turnover for ${art(s)} ${s} is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.`,
      "Inventory turnover uses cost of sales relative to average inventory, not revenue.",
    );
    add(
      `The current ratio and the acid-test ratio for ${art(s)} ${s} always produce identical results, regardless of how much inventory the business holds.`,
      "When inventory is material, the acid-test ratio differs from the current ratio.",
    );
  }

  if (pool.length < 170) throw new Error(`FALSE pool only ${pool.length}, need >= 170`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log(
  "Pools:",
  TRUE.length,
  "TRUE,",
  FALSE.length,
  "FALSE,",
  SCENE.length,
  "SCENE,",
  THEORY.length,
  "THEORY,",
  TITLES.length,
  "TITLES,",
  slots.length,
  "slots",
);

if (slots.length < 20) throw new Error(`expected text slots, got ${slots.length}`);
if (SCENE.length < 10) throw new Error(`SCENE pool only ${SCENE.length}`);
if (THEORY.length < 20) throw new Error(`THEORY pool only ${THEORY.length}`);
if (TITLES.length < slots.length) throw new Error(`TITLES need >= ${slots.length}, got ${TITLES.length}`);
if (TITLES.length < 64) throw new Error(`TITLES need >= 64, got ${TITLES.length}`);
if (sceneIndices.length < 8) throw new Error(`sceneIndices too short: ${sceneIndices.length}`);

const cases = buildCases({
  subsection: "6.5",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
