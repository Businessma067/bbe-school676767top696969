/**
 * Generate scripts/ch6-part-6.3-text.json — textual cases for subsection 6.3,
 * "What can be learnt from reading a balance sheet and an income statement".
 *
 * Scope covered:
 *  - reading a balance sheet and income statement cautiously (single-year figures
 *    can mislead; notes and context matter)
 *  - comparing results across several years to find genuine trends
 *  - benchmarking a business's results against comparable competitors/industry
 *  - the balance between current and non-current assets as a sign of capital intensity
 *  - how equity growth splits between retained earnings and new share capital
 *  - the financing mix: matching non-current assets to equity plus non-current
 *    liabilities (sound long-term financing versus reliance on short-term credit)
 *  - cost of sales as direct production/acquisition costs only
 *  - gross profit = revenue minus cost of sales, calculated before operating expenses
 *  - the operating result (earnings before interest and taxes, spelled out in full)
 *    isolating core trading performance from financing and tax effects
 *  - expenditure versus expense, including depreciation timing
 *  - how the relative growth of revenue and cost of sales drives gross profit margin
 *  - reading the balance sheet and income statement together rather than in isolation
 *
 * Formula weight: moderate. No parenthetical formula hints; all terms spelled out.
 *
 * Run: node scripts/gen-ch6-part-6.3-text.mjs
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const allSlots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.3"];
const slots = allSlots.filter((s) => s.half === "text");
const OUT = "scripts/ch6-part-6.3-text.json";

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------

const SCENE = [
  "Consider a beverage bottling company whose finance team is preparing balance sheet and income statement summaries for a meeting with its bank. Evaluate the following economic assertions:",
  "Consider a paper mill whose directors are comparing this year's results with the previous four years before approving a new investment. Evaluate the following economic assertions:",
  "Consider a ceramics manufacturer whose analysts are benchmarking its financial statements against those of competing firms in the same region. Evaluate the following economic assertions:",
  "Consider an automotive parts supplier whose chief financial officer is reviewing how the balance sheet has changed since a recent factory expansion. Evaluate the following economic assertions:",
  "Consider a commercial bakery chain preparing a presentation on how its cost of sales and gross profit have moved over the past several years. Evaluate the following economic assertions:",
  "Consider a marine equipment supplier whose owners are reviewing how its non-current assets have been financed since the newest warehouse was purchased. Evaluate the following economic assertions:",
  "Consider a joinery and furniture workshop whose accountant is explaining the difference between cash spent on new machinery and the expense recorded in the income statement. Evaluate the following economic assertions:",
  "Consider a plastics moulding company whose management team is examining whether recent equity growth has come from retained profit or from new shares. Evaluate the following economic assertions:",
  "Consider a dairy cooperative whose members are reviewing the balance sheet to judge whether its long-term assets are financed appropriately. Evaluate the following economic assertions:",
  "Consider a mining equipment lessor whose analysts are comparing revenue growth with cost of sales growth over the last several reporting periods. Evaluate the following economic assertions:",
  "Consider a textile dyeing company whose board is discussing how the split between current and non-current assets has changed since a recent plant upgrade. Evaluate the following economic assertions:",
  "Consider an appliance repair network whose finance staff are separating administrative, delivery and sales costs from the direct costs of repairing customer appliances. Evaluate the following economic assertions:",
  "Consider a seed and fertiliser distributor whose members are reviewing the income statement to understand how gross profit was calculated this season. Evaluate the following economic assertions:",
  "Consider a scaffolding rental firm whose investors are examining the operating result to judge performance independent of financing and tax decisions. Evaluate the following economic assertions:",
  "Consider an industrial cleaning company whose accountant is walking new staff through the difference between cost of sales and the operating expenses reported further down the income statement. Evaluate the following economic assertions:",
  "Consider a beverage bottling company comparing this year's balance sheet with last year's to judge whether its financing structure has become more or less risky. Evaluate the following economic assertions:",
  "Consider a paper mill whose analysts are reading its financial statements cautiously before recommending whether to extend further credit. Evaluate the following economic assertions:",
  "Consider a ceramics manufacturer whose finance director is reviewing how retained earnings and share capital have each contributed to equity growth over recent years. Evaluate the following economic assertions:",
];

const themeStems = ["Analyze", "Review", "Examine", "Assess", "Consider"];
const themeConcepts = [
  "why a business's balance sheet and income statement for a single year should be read cautiously rather than taken at face value",
  "how comparing several years of financial statements reveals trends that one year's figures cannot show alone",
  "how benchmarking a business's results against comparable competitors clarifies whether performance is strong or weak",
  "how the balance between current and non-current assets signals how capital-intensive a business is",
  "how the split between retained earnings and new share capital reveals the source of a business's equity growth",
  "why non-current assets are best matched with equity and non-current liabilities rather than short-term credit",
  "how cost of sales is confined to the direct costs of producing or acquiring the goods a business has sold",
  "how gross profit is calculated by deducting cost of sales from revenue before operating expenses are considered",
  "why the operating result, also called earnings before interest and taxes, isolates core trading performance from financing and tax effects",
  "how an expenditure differs from an expense recognised in the income statement",
  "how the relative growth of revenue and cost of sales shapes a business's gross profit margin over time",
  "why reading the balance sheet and income statement together gives a fuller picture than reading either alone",
];
const THEORY = [];
for (const stem of themeStems) {
  for (const concept of themeConcepts) {
    THEORY.push(`${stem} ${concept}. Evaluate the following economic assertions:`);
  }
}

const sceneIndices = [];

// ---------------------------------------------------------------------------
// Titles
// ---------------------------------------------------------------------------

const titleCores = [
  "Reading Financial Statements With Caution",
  "Comparing Results Across Several Years",
  "Benchmarking Against Industry Peers",
  "The Current and Non-Current Asset Balance",
  "Sources of Equity Growth",
  "Matching Long-Term Assets to Long-Term Finance",
  "Defining Cost of Sales",
  "Calculating Gross Profit",
  "Understanding the Operating Result",
  "Expenditure Versus Expense",
  "Revenue and Cost of Sales Trends",
  "Reading the Balance Sheet and Income Statement Together",
];
const titleModifiers = ["in Practice", "Explained", "for Analysts", "Over Time", "in Context"];
const TITLES = [];
for (const core of titleCores) {
  for (const mod of titleModifiers) {
    TITLES.push(`${core} ${mod}`);
  }
}

// ---------------------------------------------------------------------------
// Shared vocabulary for templated statements
// ---------------------------------------------------------------------------

const bizTypes = [
  "a beverage bottling company",
  "a paper mill",
  "a ceramics manufacturer",
  "an automotive parts supplier",
  "a commercial bakery chain",
  "a marine equipment supplier",
  "a joinery and furniture workshop",
  "a plastics moulding company",
  "a dairy cooperative",
  "a mining equipment lessor",
  "a textile dyeing company",
  "an appliance repair network",
  "a seed and fertiliser distributor",
  "a scaffolding rental firm",
  "an industrial cleaning company",
];

const assetNC = [
  "bottling line machinery",
  "papermaking machinery",
  "ceramics kilns and moulding equipment",
  "assembly-line robotics",
  "ovens and proofing equipment",
  "dockside cranes and lifting gear",
  "joinery workshop machinery",
  "injection-moulding machinery",
  "chilling and pasteurising plant",
  "heavy mining equipment held for hire",
  "dyeing vats and finishing lines",
  "diagnostic and repair equipment",
  "seed processing plant",
  "scaffolding held for long-term hire",
  "industrial cleaning machinery",
];

const assetCA = [
  "bottled stock awaiting dispatch",
  "paper roll inventory",
  "finished ceramics stock",
  "spare automotive parts inventory",
  "dough and ingredient stock",
  "spare marine parts inventory",
  "unsold furniture stock",
  "moulded component stock",
  "dairy products awaiting delivery",
  "replacement parts inventory",
  "dyed fabric stock",
  "spare repair components",
  "seed and fertiliser stock",
  "scaffolding materials awaiting short-term hire",
  "cleaning supplies inventory",
];

const liabNC = [
  "a long-term bottling equipment loan",
  "a long-term papermill mortgage",
  "long-term kiln financing",
  "a long-term robotics lease",
  "a long-term bakery expansion loan",
  "a long-term dockyard loan",
  "a long-term workshop mortgage",
  "long-term moulding equipment finance",
  "a long-term dairy plant loan",
  "long-term mining equipment finance",
  "a long-term dyeing plant loan",
  "a long-term equipment finance lease",
  "a long-term seed processing loan",
  "a long-term scaffolding fleet loan",
  "a long-term cleaning equipment loan",
];

const liabC = [
  "short-term credit from bottle and packaging suppliers",
  "short-term credit from pulp suppliers",
  "short-term credit from clay suppliers",
  "a short-term bank overdraft",
  "short-term credit from ingredient suppliers",
  "short-term credit from parts suppliers",
  "short-term credit from timber suppliers",
  "short-term credit from resin suppliers",
  "short-term credit from feed suppliers",
  "a short-term equipment rental payable",
  "short-term credit from dye suppliers",
  "short-term credit from components suppliers",
  "short-term credit from seed suppliers",
  "a short-term scaffolding materials payable",
  "short-term credit from chemical suppliers",
];

const staffRoles = [
  "head office administrators",
  "payroll and accounts clerks",
  "reception and clerical staff",
  "human resources personnel",
  "general office administrators",
  "back-office support staff",
  "corporate finance staff",
  "administrative assistants",
  "office management personnel",
  "clerical support employees",
  "head office coordinators",
  "general administrative staff",
  "office-based support personnel",
  "administrative department employees",
  "head office clerical staff",
];

const shipRoles = [
  "despatch and loading staff",
  "outbound freight handlers",
  "delivery drivers",
  "warehouse dispatch personnel",
  "courier and transport staff",
  "distribution centre employees",
  "outbound logistics coordinators",
  "loading bay workers",
  "delivery fleet staff",
  "freight dispatch clerks",
  "transport scheduling staff",
  "outbound packing staff",
  "courier dispatch personnel",
  "delivery route staff",
  "distribution warehouse staff",
];

const salesRoles = [
  "account managers",
  "field sales representatives",
  "the retail sales team",
  "business development staff",
  "sales commission earners",
  "showroom sales staff",
  "telesales personnel",
  "regional sales agents",
  "the commercial sales force",
  "customer account executives",
  "sales support staff",
  "territory sales representatives",
  "the wholesale sales team",
  "inside sales staff",
  "key account managers",
];

const directCosts = [
  "raw materials consumed directly in production",
  "direct factory labour on the production line",
  "components purchased for direct assembly",
  "production supplies consumed making the units sold",
  "the direct purchase cost of goods bought for resale",
  "materials directly consumed manufacturing the goods sold",
  "direct labour incurred producing the units sold",
  "factory-floor wages tied directly to output produced",
  "the direct cost of goods acquired for resale",
  "production-line materials consumed in manufacturing",
  "direct input costs of the manufacturing process",
  "direct labour hours spent producing the goods sold",
  "materials directly used assembling the units sold",
  "the direct cost of inventory purchased for resale",
  "production costs directly tied to units manufactured",
];

const capexItems = [
  "a bottling line",
  "a papermaking machine",
  "a ceramics kiln",
  "assembly-line robotics",
  "a commercial oven",
  "a dockside crane",
  "joinery workshop machinery",
  "an injection-moulding machine",
  "pasteurising equipment",
  "mining equipment",
  "a dyeing vat",
  "diagnostic repair equipment",
  "seed processing equipment",
  "a scaffolding fleet",
  "industrial cleaning equipment",
];

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

  // --- Concept 1: reading statements cautiously --------------------------
  add(
    "A business's balance sheet and income statement for a single year should be read cautiously, since one year's figures alone can create a misleading impression of overall performance.",
    "One year's figures alone can mislead, so cautious reading is required before drawing conclusions.",
  );
  add(
    "Because a balance sheet and income statement summarise a whole year of trading into a limited set of totals, important detail can be lost and should be sought elsewhere before conclusions are drawn.",
    "Summarising a year's trading into totals can hide detail that matters for a fair conclusion.",
  );
  add(
    "An improvement in profit for the year need not reflect stronger underlying trading, since it could instead result from a one-off event that will not repeat.",
    "A profit improvement can come from a non-recurring event rather than better ongoing trading.",
  );
  add(
    "Reading the explanatory notes that accompany a balance sheet and income statement can clarify movements that the main statements alone leave unexplained.",
    "Explanatory notes often clarify what the main financial statements alone cannot fully explain.",
  );
  add(
    "A cautious reader treats any single figure drawn from the financial statements as a starting point for further inquiry rather than as a final conclusion in itself.",
    "A single figure should prompt further inquiry rather than serve as a final conclusion.",
  );

  // --- Concept 2: multi-year comparison -----------------------------------
  add(
    "Placing several years of a business's balance sheets and income statements side by side reveals directional trends that cannot be seen from any single year.",
    "Multi-year comparison reveals trends invisible within any one year's figures alone.",
  );
  add(
    "Following revenue, cost of sales and profit for the year across several reporting periods helps show the direction in which a business's performance is heading.",
    "Multi-period tracking of key results shows the direction of a business's performance.",
  );
  add(
    "Comparing successive balance sheets shows whether a business's asset base and its sources of finance are expanding, contracting or holding steady over time.",
    "Successive balance sheet comparison shows whether assets and financing are expanding, contracting or stable.",
  );
  add(
    "Looking at several consecutive years of results makes it easier to tell whether an unusual figure was a temporary blip or the start of a lasting change.",
    "Several consecutive years help distinguish a temporary blip from a lasting change.",
  );
  add(
    "A trend that persists across three or more reporting periods carries more weight than a single period's outcome when judging a business's direction of travel.",
    "A trend persisting across several periods is more meaningful than one period's outcome alone.",
  );

  // --- Concept 3: benchmarking ---------------------------------------------
  add(
    "Judging whether a business's results are strong or weak is more reliable when its figures are set alongside those of comparable businesses in the same industry.",
    "Comparable industry figures provide the benchmark for judging whether results are strong or weak.",
  );
  add(
    "A profit margin that appears strong when viewed in isolation may turn out to be unremarkable once measured against the margins earned by similar businesses.",
    "An apparently strong margin can look unremarkable once benchmarked against similar businesses.",
  );
  add(
    "Sector-wide benchmarks help determine whether an individual business's asset structure or profitability is ordinary for its industry or genuinely stands out.",
    "Sector benchmarks reveal whether a business's results are ordinary or exceptional for its industry.",
  );
  add(
    "Comparing a business's statements with those of its direct competitors can reveal whether a change in results reflects conditions across the whole industry or is specific to that one business.",
    "Competitor comparison distinguishes industry-wide changes from company-specific ones.",
  );
  add(
    "Without a suitable point of comparison, a reader has no reliable way of judging whether a given profit margin counts as good or poor performance.",
    "Without a comparison point, judging whether a margin is good or poor is unreliable.",
  );

  // --- Concept 4: current vs non-current asset mix -------------------------
  add(
    "The relative weight of non-current assets against current assets on a business's balance sheet gives an indication of how capital-intensive its operations are.",
    "The non-current versus current asset balance indicates the capital intensity of operations.",
  );
  add(
    "A business holding a larger share of its resources in current assets typically has more of its wealth available for conversion into cash within the coming year.",
    "More current assets relative to non-current assets means more resources convertible into cash soon.",
  );
  add(
    "Studying how the balance between current and non-current assets shifts over time helps explain how a business is choosing to deploy its resources.",
    "Shifts in the current versus non-current asset balance reveal how resources are being deployed.",
  );
  add(
    "An increasing share of non-current assets over successive years can point to a business committing more heavily to long-term productive capacity.",
    "A rising non-current asset share can signal greater commitment to long-term capacity.",
  );
  add(
    "Businesses in capital-intensive industries tend to carry a heavier weighting of non-current assets relative to current assets than businesses that trade mainly in quickly turned-over stock.",
    "Capital-intensive industries tend to carry more non-current assets relative to current assets.",
  );

  // --- Concept 5: equity growth source -------------------------------------
  add(
    "When a business's equity rises mainly because retained earnings have grown while share capital stays the same, that growth has been funded internally out of past profit.",
    "Equity growth from rising retained earnings with static share capital reflects internal funding.",
  );
  add(
    "Tracking share capital and retained earnings separately over successive years shows whether a business's equity growth has come from owner contributions or from accumulated profit.",
    "Separate tracking of share capital and retained earnings reveals the source of equity growth.",
  );
  add(
    "A business that grows its equity mostly through retained earnings is relying less on outside investors than one whose equity growth comes mainly from new share issues.",
    "Retained-earnings-driven equity growth relies less on outside investors than share-issue-driven growth.",
  );
  add(
    "The pattern of a business's equity growth over several years, whether driven by retained profit or fresh capital, reveals something about its underlying financing strategy.",
    "The pattern of equity growth over time reveals a business's financing strategy.",
  );
  add(
    "If share capital has remained unchanged for several years while equity has still grown, retained earnings must account for the entire increase.",
    "Unchanged share capital plus rising equity means retained earnings account for the increase.",
  );

  // --- Concept 6: financing mix / matching maturities -----------------------
  add(
    "A business is considered to be financing its non-current assets soundly when their total value does not exceed the combined total of equity and non-current liabilities.",
    "Non-current assets covered by equity plus non-current liabilities reflects sound long-term financing.",
  );
  add(
    "Relying on long-term sources of finance, rather than short-term borrowing that must soon be renewed, is regarded as the prudent way to fund long-lived assets.",
    "Long-term financing of long-lived assets is regarded as the financially prudent approach.",
  );
  add(
    "When non-current assets exceed the sum of equity and non-current liabilities, part of those long-term assets must be financed by current liabilities, which increases financial risk.",
    "Non-current assets exceeding equity plus non-current liabilities implies risky reliance on current liabilities.",
  );
  add(
    "Matching the expected life of an asset with the maturity of the finance used to fund it is a widely accepted principle of sound financial management.",
    "Matching asset life to financing maturity is a widely accepted sound-finance principle.",
  );
  add(
    "Financing long-lived production assets through short-term credit that must be repaid within a year exposes a business to the risk of needing to refinance repeatedly.",
    "Short-term financing of long-lived assets creates repeated refinancing risk.",
  );

  // --- Concept 7: cost of sales = direct costs only -------------------------
  add(
    "Cost of sales is confined to the direct costs incurred in producing or acquiring the goods a business has actually sold during the period.",
    "Cost of sales captures only the direct costs of producing or acquiring the goods sold.",
  );
  add(
    "Only costs that can be traced directly to manufacturing or acquiring the units a business has sold belong within cost of sales.",
    "Only directly traceable production or acquisition costs belong within cost of sales.",
  );
  add(
    "Materials physically consumed in manufacturing the units sold form part of cost of sales, while costs incurred once production is finished generally do not.",
    "Materials consumed in production belong in cost of sales; post-production costs generally do not.",
  );
  add(
    "Because cost of sales is restricted to direct production costs, functions such as administration and distribution are reported in separate lines of the income statement.",
    "Direct-cost-only cost of sales means administration and distribution appear as separate lines.",
  );
  add(
    "Direct labour spent physically producing the goods sold is treated as part of cost of sales, unlike labour spent on functions unrelated to production.",
    "Direct production labour belongs in cost of sales; labour on unrelated functions does not.",
  );

  // --- Concept 8: gross profit calculation -----------------------------------
  add(
    "Gross profit is arrived at by deducting cost of sales from revenue, before any operating expenses such as distribution or administrative costs are taken into account.",
    "Gross profit equals revenue minus cost of sales, calculated ahead of operating expenses.",
  );
  add(
    "The margin represented by gross profit reflects how much a business earns from producing and selling its goods before overhead costs such as administration are considered.",
    "Gross profit reflects the production and selling margin before overhead costs are considered.",
  );
  add(
    "Distribution costs and administrative expenses are deducted from gross profit, not from revenue directly, on the way to arriving at the operating result.",
    "Distribution and administrative costs are deducted after gross profit, on the way to the operating result.",
  );
  add(
    "Two businesses can report identical gross profit yet end up with very different operating results if their distribution and administrative costs differ.",
    "Identical gross profit can still yield different operating results depending on subsequent operating expenses.",
  );
  add(
    "A widening gap between revenue and cost of sales, expressed as a proportion of revenue, indicates that gross profit margin is improving.",
    "A widening revenue-to-cost-of-sales gap, relative to revenue, means gross profit margin is improving.",
  );

  // --- Concept 9: operating result / earnings before interest and taxes -----
  add(
    "The operating result, also described as earnings before interest and taxes, measures profit from core operations before the effects of financing costs and income tax are included.",
    "The operating result, i.e. earnings before interest and taxes, excludes financing costs and income tax.",
  );
  add(
    "Excluding financing costs and income tax from the operating result allows a business's core trading performance to be judged separately from how it happens to be financed or taxed.",
    "Excluding financing and tax lets the operating result isolate core trading performance.",
  );
  add(
    "Tracking the operating result over several years shows how a business's core trading is developing independently of changes in interest rates or tax policy.",
    "Multi-year operating result tracking isolates trading trends from interest rate or tax changes.",
  );
  add(
    "Two businesses reporting an identical operating result can still end up with different profit for the year if their finance costs or tax rates differ.",
    "Identical operating results can yield different profit for the year given differing finance costs or tax rates.",
  );
  add(
    "A decline in profit for the year alongside a stable or rising operating result suggests the cause lies in financing costs or taxation rather than in core trading.",
    "Falling profit for the year with a stable operating result points to financing or tax causes, not trading.",
  );

  // --- Concept 10: expenditure versus expense --------------------------------
  add(
    "An expenditure is an outflow of cash or resources, while an expense is the portion of that outflow recognised in the income statement as belonging to the current period.",
    "Expenditure is the outflow itself; expense is the portion recognised for the current period.",
  );
  add(
    "Paying in advance for a full year of insurance cover is an expenditure at the time of payment, but it becomes an expense only as each period of cover passes.",
    "A prepayment is an expenditure immediately but becomes an expense only in the periods it covers.",
  );
  add(
    "A single large expenditure can result in expense being recognised gradually across several future accounting periods rather than all at once.",
    "A large expenditure can be spread as expense across several future periods.",
  );
  add(
    "The distinction between expenditure and expense matters because it explains why a business's cash outflow for a year can differ substantially from its reported expenses for that year.",
    "Distinguishing expenditure from expense explains gaps between cash outflow and reported expense in a year.",
  );
  add(
    "Buying an asset that will be used for several years is an expenditure immediately, but only part of its cost becomes an expense in the year of purchase.",
    "Buying a multi-year asset is an immediate expenditure, with only part becoming expense that year.",
  );

  // --- Concept 11: revenue vs cost of sales growth / margin trend -------------
  add(
    "Comparing how quickly revenue grows against how quickly cost of sales grows over successive years shows whether a business is becoming more or less efficient at producing what it sells.",
    "Comparing revenue growth with cost of sales growth reveals changing production efficiency.",
  );
  add(
    "If cost of sales grows more slowly than revenue over a period, the resulting gross profit margin will widen across that period.",
    "Cost of sales growing more slowly than revenue widens the gross profit margin.",
  );
  add(
    "A business whose cost of sales consistently outpaces its revenue growth will see its gross profit margin come under sustained pressure.",
    "Cost of sales consistently outpacing revenue growth puts sustained pressure on the gross profit margin.",
  );
  add(
    "Stable growth in both revenue and cost of sales at similar rates tends to keep a business's gross profit margin relatively steady from year to year.",
    "Revenue and cost of sales growing at similar rates tends to keep the margin steady.",
  );
  add(
    "Rising revenue figures alone do not guarantee improving profitability if cost of sales is rising at an even faster pace.",
    "Rising revenue does not guarantee improving profitability if cost of sales rises even faster.",
  );

  // --- Concept 12: reading the balance sheet and income statement together ---
  add(
    "Reading the balance sheet and income statement together gives a fuller picture of a business's position and performance than studying either statement on its own.",
    "Reading both statements together gives a fuller picture than studying either alone.",
  );
  add(
    "A strong profit for the year shown in the income statement can be undermined by a weak financing position revealed only by the balance sheet.",
    "A strong income statement result can be undermined by weaknesses only the balance sheet reveals.",
  );
  add(
    "Changes in working capital shown on the balance sheet can help explain why cash movements differ from the profit for the year reported in the income statement.",
    "Balance sheet working capital changes help explain gaps between cash movement and reported profit.",
  );
  add(
    "Judging a business's overall financial health requires weighing income statement performance against balance sheet strength rather than looking at either alone.",
    "Overall financial health requires weighing both statements together, not either alone.",
  );
  add(
    "A business could report rising profit for the year while its balance sheet simultaneously shows a deteriorating financing structure, so both statements need to be considered together.",
    "Rising profit can coincide with a deteriorating balance sheet, so both statements matter jointly.",
  );

  // --- Templated Set A: financing mix / asset mix by business type ------------
  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];
    const nc = assetNC[i];
    const ca = assetCA[i];
    const lnc = liabNC[i];

    add(
      `${cap(biz)} is regarded as financing its ${nc} soundly when their value does not exceed equity plus ${lnc}.`,
      `Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.`,
    );
    add(
      `Tracking the balance between ${nc} and ${ca} on ${biz}'s statements over several years shows whether the business is becoming more or less capital-intensive.`,
      `Changes in the non-current versus current asset split over time signal shifting capital intensity.`,
    );
  }

  // --- Templated Set B: cost of sales exclusions by role -----------------------
  for (let i = 0; i < staffRoles.length; i++) {
    const biz = bizTypes[i];
    const staff = staffRoles[i];
    const ship = shipRoles[i];
    const sales = salesRoles[i];
    const direct = directCosts[i];

    add(
      `The wages of ${staff} are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.`,
      `Cost of sales reflects direct production costs only, not general administrative wages.`,
    );
    add(
      `Pay earned by ${ship} is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.`,
      `Distribution wages are incurred after production and are not part of cost of sales.`,
    );
    add(
      `Amounts paid to ${sales} are excluded from cost of sales because selling activity takes place only after the goods have already been produced.`,
      `Selling costs occur after production and are excluded from cost of sales.`,
    );
    add(
      `${cap(direct)} are included within cost of sales because they are incurred directly in producing the goods that ${biz} has sold.`,
      `Direct production or acquisition costs are exactly what cost of sales is meant to capture.`,
    );
  }

  // --- Templated Set C: expenditure versus expense on capital items -------------
  for (let i = 0; i < capexItems.length; i++) {
    const item = capexItems[i];
    const biz = bizTypes[i];

    add(
      `When ${biz} buys ${item}, only the depreciation charged in each period becomes an expense in that period's income statement, even though the full expenditure occurs at purchase.`,
      `Capital expenditure becomes expense gradually, through depreciation, not all at once.`,
    );
    add(
      `Not every expenditure ${biz} makes during a year shows up as an expense in that same year's income statement.`,
      `Some expenditures are capitalised and expensed only gradually in future periods.`,
    );
  }

  // --- Templated Set D: gross profit / margin trend by business type ------------
  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];

    add(
      `${cap(biz)}'s gross profit is calculated by deducting cost of sales from revenue, before distribution costs, administrative costs or other operating items are considered.`,
      `Gross profit sits between revenue less cost of sales and the later deduction of operating expenses.`,
    );
    add(
      `If ${biz}'s cost of sales grows faster than its revenue over several years, its gross profit margin will narrow even while total revenue keeps increasing.`,
      `Cost of sales outpacing revenue growth compresses the gross profit margin.`,
    );
  }

  if (pool.length < 170) throw new Error(`TRUE pool only ${pool.length}, need 170`);
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

  // --- Concept 1 ---------------------------------------------------------
  add(
    "A business's balance sheet and income statement for a single year can always be trusted on their own, since one year's figures alone give a complete impression of overall performance.",
    "One year's figures alone can mislead; caution and wider context are needed before drawing conclusions.",
  );
  add(
    "Because a balance sheet and income statement summarise a whole year of trading into a limited set of totals, no detail is ever lost and nothing further needs to be sought.",
    "Summarising into totals can hide detail, so additional information is often still needed.",
  );
  add(
    "An improvement in profit for the year always reflects stronger underlying trading, since one-off events never affect the reported profit figure.",
    "One-off events can and do affect reported profit, so an improvement need not reflect better trading.",
  );
  add(
    "Reading the explanatory notes that accompany a balance sheet and income statement never adds anything beyond what the main statements alone already show.",
    "Explanatory notes frequently add clarification that the main statements alone do not provide.",
  );
  add(
    "A cautious reader treats any single figure drawn from the financial statements as a final conclusion in itself, with no need for further inquiry.",
    "A single figure is a starting point for inquiry, not a final conclusion on its own.",
  );

  // --- Concept 2 ---------------------------------------------------------
  add(
    "Placing several years of a business's balance sheets and income statements side by side reveals nothing beyond what a single year's figures already show.",
    "Multi-year comparison reveals trends that a single year's figures cannot show.",
  );
  add(
    "Following revenue, cost of sales and profit for the year across several reporting periods provides no indication of the direction in which a business's performance is heading.",
    "Tracking key results over several periods is exactly how a performance direction is identified.",
  );
  add(
    "Comparing successive balance sheets provides no way of telling whether a business's asset base or sources of finance are expanding, contracting or holding steady.",
    "Successive balance sheet comparison is precisely how such changes are detected.",
  );
  add(
    "Looking at several consecutive years of results makes it harder to tell whether an unusual figure was a temporary blip or the start of a lasting change.",
    "More years of data make this distinction easier, not harder, to draw.",
  );
  add(
    "A trend that persists across three or more reporting periods carries no more weight than a single period's outcome when judging a business's direction of travel.",
    "A persistent multi-period trend is more meaningful than a single period's outcome.",
  );

  // --- Concept 3 ---------------------------------------------------------
  add(
    "Judging whether a business's results are strong or weak is unaffected by whether its figures are set alongside those of comparable businesses in the same industry.",
    "Comparison with comparable businesses is exactly what allows strong or weak results to be identified.",
  );
  add(
    "A profit margin that appears strong when viewed in isolation remains equally strong once measured against the margins earned by similar businesses.",
    "Benchmarking against similar businesses can turn an apparently strong margin into an unremarkable one.",
  );
  add(
    "Sector-wide benchmarks provide no basis for determining whether an individual business's asset structure or profitability is ordinary for its industry or genuinely stands out.",
    "Sector benchmarks are precisely what shows whether results are ordinary or exceptional.",
  );
  add(
    "Comparing a business's statements with those of its direct competitors can never reveal whether a change in results reflects conditions across the whole industry or is specific to that one business.",
    "Competitor comparison is exactly how industry-wide effects are separated from company-specific ones.",
  );
  add(
    "Even without a suitable point of comparison, a reader can still judge reliably whether a given profit margin counts as good or poor performance.",
    "Without a comparison point, judging a margin as good or poor is unreliable.",
  );

  // --- Concept 4 ---------------------------------------------------------
  add(
    "The relative weight of non-current assets against current assets on a business's balance sheet gives no indication of how capital-intensive its operations are.",
    "This balance is exactly what indicates how capital-intensive operations are.",
  );
  add(
    "A business holding a larger share of its resources in current assets typically has less of its wealth available for conversion into cash within the coming year.",
    "A larger current-asset share means more, not less, of a business's resources are readily convertible to cash.",
  );
  add(
    "Studying how the balance between current and non-current assets shifts over time reveals nothing about how a business is choosing to deploy its resources.",
    "Such shifts are precisely what reveal changing resource deployment.",
  );
  add(
    "An increasing share of non-current assets over successive years can only point to a business reducing its commitment to long-term productive capacity.",
    "A rising non-current asset share typically signals greater, not reduced, long-term commitment.",
  );
  add(
    "Businesses in capital-intensive industries tend to carry a lighter weighting of non-current assets relative to current assets than businesses that trade mainly in quickly turned-over stock.",
    "Capital-intensive businesses tend to carry heavier, not lighter, non-current asset weightings.",
  );

  // --- Concept 5 ---------------------------------------------------------
  add(
    "When a business's equity rises mainly because retained earnings have grown while share capital stays the same, that growth must have come from a new issue of shares to owners.",
    "With share capital unchanged, equity growth cannot come from new shares; it must be retained earnings.",
  );
  add(
    "Tracking share capital and retained earnings separately over successive years provides no way of telling whether a business's equity growth has come from owner contributions or from accumulated profit.",
    "Separate tracking of these two components is exactly how the source of equity growth is identified.",
  );
  add(
    "A business that grows its equity mostly through retained earnings is relying just as heavily on outside investors as one whose equity growth comes mainly from new share issues.",
    "Growth funded by retained earnings relies less on outside investors than growth funded by new shares.",
  );
  add(
    "The pattern of a business's equity growth over several years reveals nothing about its underlying financing strategy, regardless of whether it is driven by retained profit or fresh capital.",
    "This pattern is precisely what reveals a business's underlying financing strategy.",
  );
  add(
    "If share capital has remained unchanged for several years while equity has still grown, that growth cannot be explained by retained earnings.",
    "With share capital unchanged, retained earnings are exactly what explain rising equity.",
  );

  // --- Concept 6 ---------------------------------------------------------
  add(
    "A business is considered to be financing its non-current assets soundly only when their total value is covered mainly by current liabilities.",
    "Covering long-term assets mainly with current liabilities is considered risky, not sound.",
  );
  add(
    "Relying on short-term borrowing that must soon be renewed, rather than long-term sources of finance, is regarded as the prudent way to fund long-lived assets.",
    "Funding long-lived assets mainly with short-term borrowing is regarded as risky, not prudent.",
  );
  add(
    "When non-current assets exceed the sum of equity and non-current liabilities, this always indicates a conservative and low-risk financing position.",
    "This situation indicates a risky, not conservative, financing position.",
  );
  add(
    "Matching the expected life of an asset with the maturity of the finance used to fund it has no bearing on whether a business is considered soundly financed.",
    "This matching principle is central to being considered a soundly financed business.",
  );
  add(
    "Financing long-lived production assets through short-term credit that must be repaid within a year removes any risk of needing to refinance.",
    "Short-term financing of long-lived assets creates, rather than removes, refinancing risk.",
  );

  // --- Concept 7 ---------------------------------------------------------
  add(
    "Cost of sales includes every cost a business incurs during the period, regardless of whether the cost relates directly to the goods sold.",
    "Cost of sales is limited to direct costs; not every cost incurred belongs there.",
  );
  add(
    "Any cost that benefits the business in some way, even indirectly, belongs within cost of sales.",
    "Only directly traceable costs belong in cost of sales; indirect benefit is not sufficient.",
  );
  add(
    "Materials physically consumed in manufacturing the units sold are excluded from cost of sales because they are considered an overhead.",
    "Materials consumed directly in production are a direct cost and belong within cost of sales.",
  );
  add(
    "Because cost of sales includes every departmental cost, functions such as administration and distribution are absorbed into it rather than reported separately.",
    "Administration and distribution are reported separately, not absorbed into cost of sales.",
  );
  add(
    "Direct labour spent physically producing the goods sold is excluded from cost of sales because wages are always treated as an administrative cost.",
    "Direct production labour is a core component of cost of sales, not an administrative cost.",
  );

  // --- Concept 8 ---------------------------------------------------------
  add(
    "Gross profit is arrived at by deducting all operating expenses, including distribution and administrative costs, from revenue.",
    "Gross profit only deducts cost of sales from revenue; operating expenses are deducted later.",
  );
  add(
    "The margin represented by gross profit reflects a business's overall profitability after every overhead cost, including administration, has already been deducted.",
    "Gross profit is calculated before, not after, overhead costs such as administration are deducted.",
  );
  add(
    "Distribution costs and administrative expenses are deducted directly from revenue at the same stage as cost of sales, before gross profit is calculated.",
    "These costs are deducted after gross profit has already been calculated, not alongside cost of sales.",
  );
  add(
    "Two businesses that report identical gross profit will always end up with identical operating results, regardless of their distribution and administrative costs.",
    "Identical gross profit does not guarantee identical operating results if operating expenses differ.",
  );
  add(
    "A widening gap between revenue and cost of sales, expressed as a proportion of revenue, indicates that gross profit margin is deteriorating.",
    "A widening such gap indicates an improving, not deteriorating, gross profit margin.",
  );

  // --- Concept 9 ---------------------------------------------------------
  add(
    "The operating result, also described as earnings before interest and taxes, is calculated only after financing costs and income tax have already been deducted.",
    "The operating result is calculated before, not after, financing costs and income tax.",
  );
  add(
    "Because the operating result already includes financing costs and income tax, it cannot be used to judge a business's core trading performance separately from financing or tax.",
    "The operating result excludes financing and tax, which is precisely why it isolates trading performance.",
  );
  add(
    "Tracking the operating result over several years cannot show how a business's core trading is developing, since the figure already reflects changes in interest rates and tax policy.",
    "The operating result is unaffected by interest rates and tax, so it can show core trading trends over time.",
  );
  add(
    "Two businesses reporting an identical operating result must always end up with identical profit for the year, regardless of their finance costs or tax rates.",
    "Differing finance costs or tax rates can still produce different profit for the year from the same operating result.",
  );
  add(
    "A decline in profit for the year alongside a stable or rising operating result always means that core trading performance has deteriorated.",
    "A stable operating result alongside falling profit for the year points away from, not toward, deteriorating trading.",
  );

  // --- Concept 10 --------------------------------------------------------
  add(
    "An expenditure and an expense refer to exactly the same amount recognised in exactly the same accounting period, with no distinction between them.",
    "Expenditure and expense can differ; expenditure is the outflow, expense is the period-matched portion.",
  );
  add(
    "Paying in advance for a full year of insurance cover is recognised entirely as an expense at the moment of payment, regardless of which period the cover relates to.",
    "A prepayment becomes an expense gradually, matched to the periods it covers, not entirely at payment.",
  );
  add(
    "A single large expenditure must always be recognised entirely as an expense within the same accounting period in which it occurs.",
    "Expenditure can be spread over future periods as expense rather than recognised all at once.",
  );
  add(
    "The distinction between expenditure and expense is irrelevant because a business's cash outflow for a year is always identical to its reported expenses for that year.",
    "Cash outflow and reported expense for a year often differ, which is exactly why the distinction matters.",
  );
  add(
    "Buying an asset that will be used for several years results in its entire cost becoming an expense in the year of purchase.",
    "Only part of a multi-year asset's cost becomes expense in the year of purchase; the rest is spread forward.",
  );

  // --- Concept 11 --------------------------------------------------------
  add(
    "Comparing how quickly revenue grows against how quickly cost of sales grows over successive years reveals nothing about how efficiently a business produces what it sells.",
    "This comparison is exactly what reveals changing production efficiency.",
  );
  add(
    "If cost of sales grows more slowly than revenue over a period, the resulting gross profit margin will narrow across that period.",
    "Slower cost of sales growth relative to revenue widens, rather than narrows, the margin.",
  );
  add(
    "A business whose cost of sales consistently outpaces its revenue growth will see its gross profit margin improve steadily over time.",
    "Cost of sales outpacing revenue growth puts pressure on, rather than improves, the margin.",
  );
  add(
    "Stable growth in both revenue and cost of sales at similar rates tends to make a business's gross profit margin swing wildly from year to year.",
    "Similar growth rates in revenue and cost of sales tend to stabilise, not destabilise, the margin.",
  );
  add(
    "Rising revenue figures alone always guarantee improving profitability, regardless of how quickly cost of sales is rising.",
    "Rising revenue alone does not guarantee improving profitability if costs rise faster still.",
  );

  // --- Concept 12 --------------------------------------------------------
  add(
    "Reading the balance sheet and income statement together adds nothing beyond what studying either statement on its own would already reveal.",
    "Reading both statements together reveals more than studying either one alone.",
  );
  add(
    "A strong profit for the year shown in the income statement guarantees that the balance sheet will also show a strong financing position.",
    "Strong reported profit does not guarantee a strong balance sheet financing position.",
  );
  add(
    "Changes in working capital shown on the balance sheet have no bearing on why cash movements might differ from the profit for the year reported in the income statement.",
    "Working capital changes are exactly what help explain such differences.",
  );
  add(
    "Judging a business's overall financial health can be done reliably by looking at the income statement alone, without any reference to the balance sheet.",
    "Reliable judgement requires weighing both statements, not the income statement in isolation.",
  );
  add(
    "A business cannot report rising profit for the year while its balance sheet simultaneously shows a deteriorating financing structure, since the two always move in the same direction.",
    "Profit and balance sheet strength can move in different directions, so both need checking.",
  );

  // --- Templated Set A: financing mix / asset mix by business type ------------
  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];
    const nc = assetNC[i];
    const ca = assetCA[i];
    const lc = liabC[i];

    add(
      `${cap(biz)} is regarded as financing its ${nc} soundly only when they are covered mainly by ${lc}.`,
      `Covering long-term assets mainly with current liabilities is considered risky, not sound financing.`,
    );
    add(
      `The balance between ${nc} and ${ca} on ${biz}'s statements has no bearing on whether the business is becoming more or less capital-intensive.`,
      `The asset mix directly reflects capital intensity; the balance is not irrelevant.`,
    );
  }

  // --- Templated Set B: cost of sales exclusions by role -----------------------
  for (let i = 0; i < staffRoles.length; i++) {
    const biz = bizTypes[i];
    const staff = staffRoles[i];
    const ship = shipRoles[i];
    const sales = salesRoles[i];
    const direct = directCosts[i];

    add(
      `The wages of ${staff} are included within cost of sales because every employee contributes in some way to the goods that are sold.`,
      `Only direct production costs belong in cost of sales; general contribution is not enough.`,
    );
    add(
      `Pay earned by ${ship} is included within cost of sales because moving finished goods is considered part of manufacturing them.`,
      `Distribution activity occurs after production and belongs outside cost of sales.`,
    );
    add(
      `Amounts paid to ${sales} are included within cost of sales because generating sales is necessary before any revenue can be recognised.`,
      `Selling costs are operating expenses, not part of cost of sales, regardless of their necessity.`,
    );
    add(
      `${cap(direct)} are excluded from cost of sales because only costs paid in cash during the same month count toward it.`,
      `Cost of sales includes direct production costs regardless of the timing of any related cash payment.`,
    );
  }

  // --- Templated Set C: expenditure versus expense on capital items -------------
  for (let i = 0; i < capexItems.length; i++) {
    const item = capexItems[i];
    const biz = bizTypes[i];

    add(
      `When ${biz} buys ${item}, the full purchase price becomes an expense in that period's income statement immediately, regardless of how many years the asset will be used.`,
      `The cost of a multi-year asset is spread as depreciation, not expensed entirely at purchase.`,
    );
    add(
      `Every expenditure ${biz} makes during a year must show up in full as an expense in that same year's income statement.`,
      `Capital expenditures are matched to future periods through depreciation, not expensed immediately in full.`,
    );
  }

  // --- Templated Set D: gross profit / margin trend by business type ------------
  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];

    add(
      `${cap(biz)}'s gross profit is calculated by deducting distribution costs, administrative costs and other operating items from revenue, alongside cost of sales.`,
      `Gross profit only deducts cost of sales; other operating items are deducted later.`,
    );
    add(
      `If ${biz}'s cost of sales grows faster than its revenue over several years, its gross profit margin will widen because output has increased.`,
      `Faster cost of sales growth relative to revenue narrows, not widens, the margin.`,
    );
  }

  if (pool.length < 120) throw new Error(`FALSE pool only ${pool.length}, need 120`);
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
  "TITLES",
);

if (slots.length < 20) throw new Error(`expected text slots, got ${slots.length}`);
if (SCENE.length < 10) throw new Error(`SCENE pool only ${SCENE.length}`);
if (THEORY.length < 20) throw new Error(`THEORY pool only ${THEORY.length}`);
if (TITLES.length < 50) throw new Error(`TITLES need >= 50, got ${TITLES.length}`);
// sceneIndices empty ⇒ all THEORY contexts (textbook concept stems).

const cases = buildCases({
  subsection: "6.3",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
