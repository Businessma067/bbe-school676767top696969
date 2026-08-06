/**
 * Generate scripts/ch6-part-6.3-text.json — 75 textual cases for subsection 6.3
 * "What can be learnt from reading a balance sheet and an income statement".
 *
 * Concepts covered:
 *  - reading financial statements cautiously (no single figure/year tells the whole story)
 *  - comparing results over time and against competitors
 *  - the mix of current versus non-current assets
 *  - how equity develops (retained earnings vs new share capital) and the financing mix
 *  - non-current assets should be covered by equity plus non-current liabilities (long-term finance)
 *  - cost of sales = direct production/acquisition costs only, NOT admin, shipping or sales staff
 *  - gross profit = revenue minus cost of sales, calculated before operating expenses
 *  - the operating result, i.e. earnings before interest and taxes, spelled out in full
 *  - expenditure versus expense
 *  - how revenue and cost of sales develop over time
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
  "Consider a family-run furniture workshop reviewing its newly prepared balance sheet and income statement before meeting its bank manager. Evaluate the following economic assertions:",
  "Consider a regional supermarket chain comparing this year's financial statements with those from the previous three years ahead of its annual shareholder meeting. Evaluate the following economic assertions:",
  "Consider a construction contractor whose finance director is benchmarking the company's balance sheet against those of rival firms in the same region. Evaluate the following economic assertions:",
  "Consider a freight and logistics company whose new chief financial officer is examining how the balance sheet has evolved since the business last expanded its vehicle fleet. Evaluate the following economic assertions:",
  "Consider a specialist engineering firm preparing a presentation that compares its cost of sales and gross profit trends over the past five years. Evaluate the following economic assertions:",
  "Consider a hotel group whose owners are reviewing how the business's non-current assets have been financed since the newest property was purchased. Evaluate the following economic assertions:",
  "Consider a food processing company whose accountant is explaining the difference between cash spent on new equipment and the expense recognised in the income statement. Evaluate the following economic assertions:",
  "Consider an electronics retailer whose management team is analysing whether recent growth in equity has come from retained profit or from new share issues. Evaluate the following economic assertions:",
  "Consider a printing business whose owner is reviewing the balance sheet to judge whether long-term assets are being financed appropriately. Evaluate the following economic assertions:",
  "Consider a pharmaceutical distributor whose analysts are comparing revenue growth with cost of sales growth over the last several reporting periods. Evaluate the following economic assertions:",
  "Consider a textile manufacturer whose board is discussing how the split between current and non-current assets has changed since the factory was expanded. Evaluate the following economic assertions:",
  "Consider a vehicle repair chain whose finance team is separating administrative, delivery and sales costs from the direct costs of servicing customer vehicles. Evaluate the following economic assertions:",
  "Consider an agricultural cooperative whose members are reviewing the income statement to understand how gross profit was calculated this season. Evaluate the following economic assertions:",
  "Consider a software services company whose investors are examining the operating result to judge performance independent of financing and tax decisions. Evaluate the following economic assertions:",
  "Consider a wholesale hardware supplier whose accountant is walking new staff through the difference between cost of sales and the operating expenses reported below it. Evaluate the following economic assertions:",
  "Consider a bakery chain whose owners are comparing this year's balance sheet with last year's to judge whether the business's financing structure has become more or less risky. Evaluate the following economic assertions:",
  "Consider a shipping company whose analysts are reading the financial statements cautiously before recommending whether to extend further credit. Evaluate the following economic assertions:",
  "Consider a furniture retailer whose finance director is reviewing how retained earnings and share capital have each contributed to the growth in equity over recent years. Evaluate the following economic assertions:",
  "Consider a manufacturing group whose management accountants are tracing how an expenditure on new machinery will be expensed gradually over its useful life. Evaluate the following economic assertions:",
];

const themeStems = ["Analyze", "Review", "Examine", "Assess", "Consider"];
const themeConcepts = [
  "how a single year's balance sheet or income statement can be misleading without wider context",
  "why comparing financial statements across several years reveals trends invisible in one year alone",
  "how benchmarking a business's results against similar competitors clarifies whether performance is strong or weak",
  "how the balance between current and non-current assets reflects a business's capital intensity",
  "how the source of growth in equity, retained earnings versus new share capital, reveals a business's financing pattern",
  "why non-current assets are best financed by equity and non-current liabilities rather than short-term borrowing",
  "how cost of sales captures only the direct costs of producing the goods a business sells",
  "why administrative, distribution and selling costs are excluded from cost of sales",
  "how gross profit is calculated before operating expenses are deducted from revenue",
  "why the operating result, also known as earnings before interest and taxes, isolates core trading performance from financing and tax effects",
  "how an expenditure differs from an expense recognised in the income statement",
  "how the relative growth of revenue and cost of sales over time affects a business's gross profit margin",
];
const THEORY = [];
for (const stem of themeStems) {
  for (const concept of themeConcepts) {
    THEORY.push(`${stem} ${concept}. Evaluate the following economic assertions:`);
  }
}

const sceneIndices = [
  2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74,
];

// ---------------------------------------------------------------------------
// Titles
// ---------------------------------------------------------------------------

const titleCores = [
  "Reading Financial Statements Cautiously",
  "Comparing Results Across Years",
  "Benchmarking Against Competitors",
  "The Current and Non-Current Asset Mix",
  "Sources of Equity Growth",
  "Financing Mix and Capital Structure",
  "Matching Non-Current Assets to Long-Term Finance",
  "Defining Cost of Sales",
  "Excluding Overheads from Cost of Sales",
  "Calculating Gross Profit",
  "Understanding the Operating Result",
  "Expenditure Versus Expense",
  "Revenue Growth Patterns",
  "Cost of Sales Trends",
  "Gross Profit Margin Behaviour",
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
  "a furniture manufacturer",
  "a supermarket chain",
  "a construction contractor",
  "a freight and logistics company",
  "a specialist engineering firm",
  "a hotel group",
  "a food processing company",
  "an electronics retailer",
  "a printing business",
  "a pharmaceutical distributor",
  "a textile manufacturer",
  "a vehicle repair chain",
  "an agricultural cooperative",
  "a software services company",
  "a wholesale hardware supplier",
];

const assetNC = [
  "factory buildings",
  "production machinery",
  "office equipment",
  "patents, trademarks and licences",
  "delivery vehicles",
  "computer hardware",
  "leasehold premises",
  "specialist production plant",
  "warehouse facilities",
  "manufacturing tooling",
  "long-term equipment investments",
  "company-owned land",
  "processing plant",
  "distribution centre buildings",
  "capitalised development costs",
];

const assetCA = [
  "inventory",
  "trade receivables",
  "cash and cash equivalents",
  "prepaid expenses",
  "short-term investments",
  "raw material stocks",
  "finished goods stock",
  "accrued income",
  "supplies on hand",
  "marketable securities",
  "work in progress",
  "advance payments to suppliers",
  "short-term deposits",
  "spare parts inventory",
  "outstanding customer invoices",
];

const liabNC = [
  "a long-term bank loan",
  "bonds payable",
  "a long-term lease liability",
  "a long-term mortgage",
  "long-term borrowings",
  "long-term supplier financing",
  "deferred tax liabilities",
  "long-term pension obligations",
  "a long-term equipment loan",
  "long-term debentures",
  "a long-term construction loan",
  "long-term finance lease obligations",
  "a long-term shareholder loan",
  "long-term bank financing",
  "a long-term infrastructure loan",
];

const liabC = [
  "trade payables",
  "a bank overdraft",
  "accrued wages",
  "short-term loans",
  "taxes payable",
  "unearned revenue",
  "accrued interest",
  "the current portion of long-term debt",
  "dividends payable",
  "short-term supplier credit",
  "accrued utility bills",
  "short-term borrowings",
  "outstanding supplier invoices",
  "a short-term line of credit",
  "accrued operating costs",
];

const staffRoles = [
  "administrative staff",
  "office administrators",
  "human resources personnel",
  "accounting clerks",
  "finance department employees",
  "reception and clerical staff",
  "management support staff",
  "back-office employees",
  "payroll administrators",
  "general office staff",
  "head office administrators",
  "corporate support staff",
  "office management personnel",
  "administrative assistants",
  "clerical support employees",
];

const shippingRoles = [
  "delivery drivers",
  "warehouse dispatch staff",
  "shipping coordinators",
  "outbound logistics personnel",
  "freight and courier staff",
  "distribution centre workers",
  "despatch clerks",
  "outbound delivery staff",
  "delivery fleet employees",
  "packing and shipping staff",
  "transport and delivery staff",
  "loading dock workers",
  "courier dispatch employees",
  "shipping department staff",
  "outbound freight handlers",
];

const salesRoles = [
  "sales representatives",
  "sales commission staff",
  "the sales team",
  "account managers",
  "sales staff",
  "the retail sales force",
  "business development staff",
  "sales department employees",
  "customer-facing sales staff",
  "the commercial sales team",
  "field sales agents",
  "showroom sales staff",
  "telesales staff",
  "sales support employees",
  "regional sales representatives",
];

const directCosts = [
  "raw materials consumed in production",
  "direct production labour",
  "components purchased for assembly",
  "manufacturing overhead directly tied to output",
  "materials used to manufacture the goods sold",
  "direct labour on the factory floor",
  "production supplies consumed making the goods sold",
  "the purchase cost of goods bought for resale",
  "direct costs of the manufacturing process",
  "costs directly incurred to produce the units sold",
  "direct materials used in the goods sold",
  "factory floor wages tied directly to output",
  "the cost of goods purchased for resale",
  "direct input costs of production",
  "production-line labour costs",
];

const capexItems = [
  "a delivery van",
  "a new machine",
  "office furniture",
  "a production line",
  "a company vehicle",
  "computer hardware",
  "a warehouse extension",
  "specialist equipment",
  "a company building",
  "manufacturing tooling",
  "a new production facility",
  "office computer equipment",
  "a fleet of delivery trucks",
  "processing equipment",
  "a piece of factory machinery",
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

  // --- Atomic statements, four per concept -------------------------------

  add(
    "A single year's balance sheet or income statement rarely tells the full story about a business, so the figures are best interpreted alongside additional context rather than read in isolation.",
    "Figures from one year alone lack context, so readers should look beyond a single year before drawing conclusions.",
  );
  add(
    "Because published financial statements condense complex operations into a handful of line items, readers should interpret the figures cautiously rather than draw firm conclusions from any single number.",
    "Summarised statements can hide detail, so single figures deserve cautious interpretation.",
  );
  add(
    "A rise in profit for the year does not by itself prove that a business is being managed well, since the improvement could stem from a one-off item rather than from the core operations.",
    "A profit increase may come from a one-off gain rather than genuinely improved management.",
  );
  add(
    "Notes accompanying the financial statements often explain unusual movements that the main balance sheet and income statement alone do not make clear.",
    "Supporting notes provide context that the main statements alone cannot always convey.",
  );

  add(
    "Comparing a business's balance sheet and income statement across several years reveals trends that a single year's figures cannot show on their own.",
    "Multi-year comparison exposes trends hidden within any single year's figures.",
  );
  add(
    "Tracking revenue, cost of sales and profit for the year over multiple years helps show whether a business's performance is improving or deteriorating.",
    "Multi-year tracking of key figures reveals the direction of a business's performance.",
  );
  add(
    "A year-on-year comparison of the balance sheet can reveal whether a business's asset base and financing structure are expanding or contracting over time.",
    "Comparing balance sheets year on year shows whether assets and financing are growing or shrinking.",
  );
  add(
    "Reviewing several consecutive years of financial statements helps distinguish a temporary fluctuation from a lasting change in a business's performance.",
    "Multiple years of data help separate a one-off blip from a genuine, lasting change.",
  );

  add(
    "Comparing a business's financial statements with those of similar businesses in the same industry provides a benchmark for judging whether its results are strong or weak.",
    "Industry peers provide the benchmark needed to judge whether results are strong or weak.",
  );
  add(
    "A profit figure that looks impressive when viewed alone may appear only ordinary once it is compared with the results of similar businesses in the same industry.",
    "Context from comparable businesses can turn an apparently impressive figure into an ordinary one.",
  );
  add(
    "Industry benchmarks allow analysts to judge whether a business's asset structure or profitability is typical for its sector rather than exceptional or weak.",
    "Sector benchmarks show whether results are typical, exceptional or weak for that industry.",
  );
  add(
    "Reading a business's financial statements alongside those of its competitors helps reveal whether its performance reflects the whole industry or is specific to that business.",
    "Comparing with competitors clarifies whether a result is industry-wide or company-specific.",
  );

  add(
    "The proportion of a business's total assets held as non-current assets compared with current assets indicates how capital-intensive its operations are.",
    "The non-current versus current asset split signals how capital-intensive a business is.",
  );
  add(
    "A business with a high share of current assets relative to non-current assets tends to hold more resources that can be turned into cash within a year.",
    "A current-asset-heavy structure means more resources are convertible into cash within a year.",
  );
  add(
    "Analyzing the split between current and non-current assets on the balance sheet helps explain how a business ties up its resources.",
    "The current versus non-current split explains how a business's resources are tied up.",
  );
  add(
    "A rising share of non-current assets over successive years may indicate that a business is investing more heavily in long-term production capacity.",
    "A growing non-current asset share can signal heavier long-term investment.",
  );

  add(
    "Comparing share capital and retained earnings over time shows whether growth in equity stems from new owner contributions or from the accumulation of prior profits.",
    "Tracking share capital versus retained earnings reveals the source of equity growth.",
  );
  add(
    "A business's financing mix, meaning the balance between equity and the various liabilities on its balance sheet, can be examined by tracking its composition over successive years.",
    "The financing mix of equity and liabilities can be tracked over successive balance sheets.",
  );
  add(
    "An increase in equity that comes mainly from retained earnings rather than new share capital indicates that a business is financing its growth internally.",
    "Equity growth driven by retained earnings rather than new shares reflects internal financing.",
  );
  add(
    "Reviewing how a business's equity has developed over several years reveals whether it relies more on retained profit or on external owner contributions for growth.",
    "Multi-year equity review shows reliance on retained profit versus external contributions.",
  );

  add(
    "Non-current assets are considered adequately financed when their value is covered by the sum of equity and non-current liabilities.",
    "Non-current assets are adequately financed when covered by equity plus non-current liabilities.",
  );
  add(
    "Financing non-current assets primarily with long-term sources of capital, rather than short-term borrowing, is regarded as financially sound practice.",
    "Long-term financing of long-term assets is regarded as sound financial practice.",
  );
  add(
    "If non-current assets exceed the combined total of equity and non-current liabilities, part of those long-term assets is being financed by current liabilities, which is considered risky.",
    "Non-current assets exceeding equity plus non-current liabilities implies risky short-term financing of long-term assets.",
  );
  add(
    "Long-term investments such as buildings and machinery are best matched with long-term sources of finance rather than short-term credit that must soon be repaid.",
    "Long-term assets should be matched with long-term finance, not short-term credit.",
  );

  add(
    "Cost of sales comprises the direct costs of producing or acquiring the goods that a business has sold, such as materials and direct production labour.",
    "Cost of sales is limited to direct production or acquisition costs such as materials and direct labour.",
  );
  add(
    "Cost of sales is limited to the direct costs of production, so administrative overheads and selling expenses appear elsewhere in the income statement.",
    "Administrative and selling expenses sit outside cost of sales, further down the income statement.",
  );
  add(
    "The cost of raw materials consumed in manufacturing the goods sold forms part of cost of sales, unlike costs incurred after production is complete.",
    "Raw materials consumed in production belong in cost of sales; post-production costs do not.",
  );
  add(
    "Because cost of sales captures only direct production costs, a business's administrative and distribution functions are reported separately further down the income statement.",
    "Direct-cost-only cost of sales means administration and distribution are reported separately.",
  );

  add(
    "Gross profit is calculated by deducting cost of sales from revenue, before any operating expenses such as distribution or administrative costs are subtracted.",
    "Gross profit equals revenue minus cost of sales, ahead of any operating expense deductions.",
  );
  add(
    "A business's gross profit reflects the margin earned on producing and selling goods before overheads such as administration and distribution are considered.",
    "Gross profit reflects the production and selling margin before overheads are deducted.",
  );
  add(
    "Distribution costs and general administrative costs are deducted after gross profit has already been calculated, on the way to the operating result.",
    "Distribution and administrative costs are deducted after gross profit, on the way to the operating result.",
  );
  add(
    "Because gross profit is calculated before operating expenses, two businesses with identical gross profit can still end up with very different operating results.",
    "Identical gross profit can still lead to different operating results depending on operating expenses.",
  );

  add(
    "The operating result, also referred to as earnings before interest and taxes, measures profit generated from a business's core operations before financing costs and income tax are taken into account.",
    "The operating result, also called earnings before interest and taxes, excludes financing costs and income tax.",
  );
  add(
    "Because the operating result excludes finance costs and income tax, it allows the core trading performance of a business to be assessed separately from how it is financed or taxed.",
    "Excluding finance costs and tax lets the operating result show core trading performance alone.",
  );
  add(
    "Comparing the operating result across several years shows how a business's core trading performance is developing independently of financing decisions or tax rates.",
    "Multi-year operating result comparison isolates trading performance from financing and tax choices.",
  );
  add(
    "Two businesses with the same operating result can end up with different profit for the year if their finance costs or tax rates differ.",
    "Equal operating results can still lead to different profit for the year due to financing or tax differences.",
  );

  add(
    "An expenditure represents an outflow of cash or resources, whereas an expense represents the portion of that outflow recognised in the income statement as relating to the current period.",
    "Expenditure is the outflow itself; expense is the portion recognised for the current period.",
  );
  add(
    "Prepaying next year's insurance premium is an expenditure in the current year, but it only becomes an expense once the coverage period it relates to has passed.",
    "A prepayment is an expenditure now but becomes an expense only in the period it covers.",
  );
  add(
    "Distinguishing expenditure from expense matters because a large cash outflow in one year can be spread across several years' worth of expense recognition.",
    "One large expenditure can translate into expense recognised over several future years.",
  );
  add(
    "A business can make a substantial expenditure in a given year while recognising only a small portion of it as an expense in that year's income statement.",
    "A large expenditure need not translate into a large expense in the same year.",
  );

  add(
    "Tracking revenue over several years shows whether a business's sales are growing, stagnating or declining.",
    "Multi-year revenue tracking reveals whether sales are growing, stagnating or declining.",
  );
  add(
    "A business whose revenue rises every year is not necessarily improving profitability, since its costs could be rising even faster.",
    "Rising revenue alone does not guarantee improving profitability if costs rise faster still.",
  );
  add(
    "Consistent revenue growth over multiple years is a more reliable signal of business health than a single year's strong sales figure.",
    "Sustained multi-year growth is a more reliable health signal than one strong year.",
  );
  add(
    "A sudden jump in revenue in one year deserves closer examination before assuming that a business's underlying demand has permanently improved.",
    "A one-year revenue jump warrants scrutiny before assuming a lasting demand improvement.",
  );

  add(
    "Comparing the growth rate of revenue with the growth rate of cost of sales over successive years shows whether a business is becoming more or less efficient at producing what it sells.",
    "Comparing revenue growth with cost of sales growth reveals changing production efficiency.",
  );
  add(
    "A business whose cost of sales rises broadly in line with its revenue is likely to maintain a stable gross profit margin from one year to the next.",
    "Cost of sales rising in step with revenue tends to keep the gross profit margin stable.",
  );
  add(
    "If revenue grows while cost of sales grows more slowly, a business's gross profit margin will widen over that period.",
    "Revenue outpacing cost of sales growth widens the gross profit margin.",
  );
  add(
    "Examining how revenue and cost of sales move together over time helps explain changes in a business's gross profit margin.",
    "Joint examination of revenue and cost of sales trends explains gross profit margin changes.",
  );

  // --- Templated statements ------------------------------------------------

  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];
    const nc = assetNC[i];
    const ca = assetCA[i];
    const lnc = liabNC[i];

    add(
      `${cap(biz)} is regarded as financing its ${nc} soundly when their value is covered by equity together with ${lnc}.`,
      `Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.`,
    );
    add(
      `Tracking the proportion of ${nc} against ${ca} on ${biz}'s balance sheet over several years shows whether the business is becoming more or less capital-intensive.`,
      `Changes in the non-current versus current asset split over time signal shifting capital intensity.`,
    );
    add(
      `If ${biz}'s retained earnings increase while share capital stays unchanged, the resulting rise in equity has come from internally generated profit rather than new owner investment.`,
      `With share capital unchanged, rising equity must stem from retained earnings, i.e. internal financing.`,
    );
  }

  for (let i = 0; i < staffRoles.length; i++) {
    const biz = bizTypes[i];
    const staff = staffRoles[i];
    const shipping = shippingRoles[i];
    const sales = salesRoles[i];
    const direct = directCosts[i];

    add(
      `The pay of ${staff} is excluded from cost of sales because their work does not directly relate to producing the goods that are sold.`,
      `Cost of sales reflects direct production costs only, not general administrative pay.`,
    );
    add(
      `Wages earned by ${shipping} are treated as a distribution cost rather than cost of sales, since they relate to delivering goods after production is complete.`,
      `Delivery and shipping wages are distribution costs, incurred after production, not cost of sales.`,
    );
    add(
      `Compensation paid to ${sales} is kept out of cost of sales because selling activity takes place after the goods have already been produced.`,
      `Selling costs are separate from production costs and excluded from cost of sales.`,
    );
    add(
      `${cap(direct)} are included within cost of sales because they are directly incurred in producing the goods a business sells.`,
      `Cost of sales captures the direct costs of production, such as materials and direct labour.`,
    );
    add(
      `For ${biz}, cost of sales reflects only the direct costs of producing what is sold, while administrative and selling costs sit further down the income statement.`,
      `Only direct production costs belong in cost of sales; administrative and selling costs appear separately.`,
    );
  }

  for (let i = 0; i < capexItems.length; i++) {
    const item = capexItems[i];
    const biz = bizTypes[i];

    add(
      `Buying ${item} is a capital expenditure, and only the depreciation charged in each accounting period becomes an expense in that period's income statement.`,
      `Capital expenditure is turned into expense gradually through depreciation over the asset's useful life.`,
    );
    add(
      `Not every expenditure ${biz} makes during the year appears immediately as an expense in that year's income statement.`,
      `Capital expenditures are recognised as expenses gradually, not fully in the year of payment.`,
    );
  }

  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];

    add(
      `${cap(biz)}'s gross profit is found by deducting cost of sales from revenue, before distribution costs, administrative costs or other operating items are taken into account.`,
      `Gross profit sits between revenue less cost of sales and the deduction of operating expenses.`,
    );
    add(
      `${cap(biz)}'s operating result, also referred to as earnings before interest and taxes, is calculated before finance costs and income tax are deducted, isolating core trading performance from financing and tax effects.`,
      `The operating result, i.e. earnings before interest and taxes, excludes financing and tax items by definition.`,
    );
    add(
      `If ${biz}'s cost of sales grows faster than its revenue over several years, its gross profit margin will narrow even while total revenue keeps rising.`,
      `Cost of sales outpacing revenue growth compresses the gross profit margin.`,
    );
  }

  if (pool.length < 225) throw new Error(`TRUE pool only ${pool.length}, need 225`);
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

  add(
    "A single year's balance sheet or income statement always tells the full story about a business, so no other years or comparisons are ever needed.",
    "A single year's figures rarely tell the full story; wider context and comparison are needed.",
  );
  add(
    "Because financial statements present exact figures, readers never need to interpret them cautiously or look for additional explanation.",
    "Summarised figures still require cautious interpretation and often benefit from additional explanation.",
  );
  add(
    "A rise in profit for the year always proves that a business is being managed well, regardless of whether the improvement stems from a one-off item.",
    "A profit rise can stem from a one-off item rather than genuinely improved management.",
  );
  add(
    "Notes accompanying the financial statements are optional extras that never explain movements shown in the main balance sheet and income statement.",
    "Notes often explain unusual movements that the main statements alone do not make clear.",
  );

  add(
    "A single year's balance sheet and income statement reveal every trend in a business's performance without needing figures from other years.",
    "Trends only become visible when several years of figures are compared, not from one year alone.",
  );
  add(
    "Tracking revenue, cost of sales and profit for the year over multiple years adds no useful information beyond what one year's figures already show.",
    "Multi-year tracking reveals trends that a single year's figures cannot show.",
  );
  add(
    "A year-on-year comparison of the balance sheet cannot reveal anything about whether a business's asset base or financing structure is changing.",
    "Year-on-year balance sheet comparison is exactly how changes in assets and financing are detected.",
  );
  add(
    "Reviewing several consecutive years of financial statements makes it harder, not easier, to distinguish a temporary fluctuation from a lasting change.",
    "More years of data make it easier, not harder, to separate a blip from a lasting change.",
  );

  add(
    "Comparing a business's financial statements with those of similar businesses in the same industry provides no useful benchmark for judging its results.",
    "Industry comparisons are exactly the benchmark used to judge whether results are strong or weak.",
  );
  add(
    "A profit figure that looks impressive when viewed alone remains equally impressive once compared with similar businesses in the same industry.",
    "A seemingly impressive figure can look merely ordinary once compared with industry peers.",
  );
  add(
    "Industry benchmarks are irrelevant to judging whether a business's asset structure or profitability is typical for its sector.",
    "Industry benchmarks are precisely what shows whether results are typical for the sector.",
  );
  add(
    "Reading a business's financial statements alongside its competitors' statements never helps explain whether its performance is industry-wide or specific to that business.",
    "Comparing with competitors helps distinguish industry-wide trends from company-specific results.",
  );

  add(
    "The proportion of a business's total assets held as non-current versus current assets says nothing about how capital-intensive its operations are.",
    "The non-current versus current asset split is a direct indicator of capital intensity.",
  );
  add(
    "A business with a high share of current assets relative to non-current assets tends to hold fewer resources that can be quickly converted into cash.",
    "A higher share of current assets means more, not fewer, resources convertible into cash quickly.",
  );
  add(
    "Analyzing the split between current and non-current assets on the balance sheet provides no insight into how a business ties up its resources.",
    "The current versus non-current split is precisely what shows how resources are tied up.",
  );
  add(
    "A rising share of non-current assets over successive years always indicates declining investment in long-term production capacity.",
    "A rising non-current asset share typically signals more, not less, long-term investment.",
  );

  add(
    "Comparing share capital and retained earnings over time can never reveal whether equity growth stems from new owner contributions or accumulated profit.",
    "Comparing share capital and retained earnings is exactly how the source of equity growth is revealed.",
  );
  add(
    "A business's financing mix, meaning the balance between equity and liabilities, cannot be examined by tracking its balance sheet composition over time.",
    "Tracking balance sheet composition over time is precisely how the financing mix is examined.",
  );
  add(
    "An increase in equity that comes mainly from retained earnings rather than new share capital indicates that new capital has been contributed by the owners.",
    "If share capital is unchanged, equity growth must come from retained earnings, not new capital.",
  );
  add(
    "Reviewing how a business's equity has developed over several years reveals nothing about whether it relies on retained profit or external contributions.",
    "Multi-year equity review is exactly how reliance on retained profit versus external contributions is judged.",
  );

  add(
    "Non-current assets are considered adequately financed only when their value is covered entirely by current liabilities.",
    "Non-current assets are adequately financed when covered by equity and non-current liabilities, not current liabilities.",
  );
  add(
    "Financing non-current assets primarily with short-term borrowing rather than long-term capital is regarded as the financially sound approach.",
    "Financing long-term assets mainly with short-term borrowing is considered risky, not sound.",
  );
  add(
    "If non-current assets exceed the combined total of equity and non-current liabilities, this is always a sign of prudent financial management.",
    "Non-current assets exceeding equity plus non-current liabilities signals risky, not prudent, financing.",
  );
  add(
    "Long-term investments such as buildings and machinery are best matched with short-term credit that must soon be repaid.",
    "Long-term assets are best matched with long-term finance, not short-term credit.",
  );

  add(
    "Cost of sales includes every cost a business incurs, from production through to administration and delivery.",
    "Cost of sales is limited to direct production costs; administration and delivery sit elsewhere.",
  );
  add(
    "Cost of sales covers administrative overheads and selling expenses in addition to the direct costs of production.",
    "Administrative overheads and selling expenses are excluded from cost of sales.",
  );
  add(
    "The cost of raw materials consumed in manufacturing the goods sold is excluded from cost of sales because it is a production cost.",
    "Raw materials consumed in production are a direct cost and belong within cost of sales.",
  );
  add(
    "Because cost of sales captures every departmental cost, a business's administrative and distribution functions are reported within it rather than separately.",
    "Administrative and distribution costs are reported separately from cost of sales, not within it.",
  );

  add(
    "Gross profit is calculated by deducting all operating expenses, including distribution and administrative costs, from revenue.",
    "Gross profit only deducts cost of sales from revenue; operating expenses are deducted later.",
  );
  add(
    "A business's gross profit reflects overall profitability after administration and distribution overheads have already been deducted.",
    "Gross profit is calculated before, not after, administration and distribution overheads.",
  );
  add(
    "Distribution costs and general administrative costs are deducted before gross profit is calculated, alongside cost of sales.",
    "Distribution and administrative costs are deducted after gross profit, not alongside cost of sales.",
  );
  add(
    "Because gross profit already reflects operating expenses, two businesses with identical gross profit must always report identical operating results.",
    "Identical gross profit can still lead to different operating results depending on operating expenses.",
  );

  add(
    "The operating result, also referred to as earnings before interest and taxes, is calculated after deducting finance costs and income tax.",
    "The operating result is calculated before, not after, finance costs and income tax.",
  );
  add(
    "Because the operating result includes finance costs and income tax, it cannot be used to assess a business's core trading performance separately from financing.",
    "The operating result excludes finance costs and tax, which is exactly why it isolates core trading performance.",
  );
  add(
    "Comparing the operating result across several years reveals nothing about a business's core trading performance because it already reflects financing and tax decisions.",
    "The operating result excludes financing and tax decisions, so its trend reflects core trading performance.",
  );
  add(
    "Two businesses with the same operating result must always report the same profit for the year regardless of their finance costs or tax rates.",
    "Differing finance costs or tax rates can still produce different profit for the year from the same operating result.",
  );

  add(
    "An expenditure and an expense always occur in the same accounting period and therefore mean exactly the same thing.",
    "Expenditure is a cash outflow while expense is the portion recognised in a period; they can differ in timing.",
  );
  add(
    "Prepaying next year's insurance premium is recognised as a full expense in the income statement of the year it is paid.",
    "A prepayment becomes an expense only in the period the coverage relates to, not when paid.",
  );
  add(
    "Distinguishing expenditure from expense is unnecessary because every cash outflow is automatically an expense in the period it occurs.",
    "Not every cash outflow is an expense in the period it occurs; some are spread over future periods.",
  );
  add(
    "A business that makes a substantial expenditure in a given year must recognise the entire amount as an expense in that same year.",
    "A large expenditure can be recognised as expense gradually over several future years.",
  );

  add(
    "Tracking revenue over several years provides no indication of whether a business's sales are growing, stagnating or declining.",
    "Multi-year revenue tracking is exactly how growth, stagnation or decline in sales is identified.",
  );
  add(
    "A business whose revenue rises every year is automatically improving its profitability, regardless of how its costs are behaving.",
    "Rising revenue does not guarantee improving profitability if costs are rising even faster.",
  );
  add(
    "A single year's strong sales figure is a more reliable signal of business health than consistent revenue growth over multiple years.",
    "Sustained multi-year growth is a more reliable signal than one strong year alone.",
  );
  add(
    "A sudden jump in revenue in one year should always be assumed to reflect a permanent improvement in underlying demand.",
    "A one-year revenue jump warrants closer examination rather than an assumption of permanence.",
  );

  add(
    "Comparing the growth rate of revenue with the growth rate of cost of sales over successive years reveals nothing about production efficiency.",
    "Comparing revenue and cost of sales growth rates is exactly how changes in production efficiency are revealed.",
  );
  add(
    "A business whose cost of sales rises broadly in line with its revenue will typically see its gross profit margin swing wildly from year to year.",
    "Cost of sales rising in line with revenue tends to keep the gross profit margin stable, not volatile.",
  );
  add(
    "If revenue grows while cost of sales grows more slowly, a business's gross profit margin will narrow over that period.",
    "Revenue outpacing cost of sales growth widens, rather than narrows, the gross profit margin.",
  );
  add(
    "Examining how revenue and cost of sales move together over time provides no explanation for changes in a business's gross profit margin.",
    "Joint examination of revenue and cost of sales trends is exactly what explains gross profit margin changes.",
  );

  // --- Templated statements ------------------------------------------------

  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];
    const nc = assetNC[i];
    const ca = assetCA[i];
    const lc = liabC[i];

    add(
      `${cap(biz)} is considered financially sound when its ${nc} are financed mainly through ${lc}, since short-term liabilities are cheaper to arrange.`,
      `Financing long-term assets with current liabilities is risky, since short-term liabilities must soon be repaid or renewed.`,
    );
    add(
      `The mix of ${nc} and ${ca} on ${biz}'s balance sheet has no bearing on how capital-intensive the business is.`,
      `The asset mix directly reflects capital intensity: more non-current assets means a more capital-intensive business.`,
    );
    add(
      `If ${biz}'s retained earnings increase while share capital stays unchanged, the resulting rise in equity must have come from new shares issued to the owners.`,
      `With share capital unchanged, equity growth cannot come from new shares; it must stem from retained earnings.`,
    );
  }

  for (let i = 0; i < staffRoles.length; i++) {
    const biz = bizTypes[i];
    const staff = staffRoles[i];
    const shipping = shippingRoles[i];
    const sales = salesRoles[i];
    const direct = directCosts[i];

    add(
      `The pay of ${staff} is included within cost of sales because every employee ultimately contributes to a business's output.`,
      `Only direct production costs belong in cost of sales; administrative pay is excluded regardless of overall contribution.`,
    );
    add(
      `Wages earned by ${shipping} are included within cost of sales because delivering the product is considered part of production.`,
      `Delivery activity happens after production and is a distribution cost, not cost of sales.`,
    );
    add(
      `Compensation paid to ${sales} is included within cost of sales because selling is necessary to generate revenue.`,
      `Selling costs are operating expenses incurred after production, not cost of sales.`,
    );
    add(
      `${cap(direct)} are excluded from cost of sales because only cash payments count as production costs.`,
      `Cost of sales includes all direct production costs regardless of the timing of any related cash payment.`,
    );
    add(
      `For ${biz}, cost of sales includes administrative and selling costs because all costs eventually relate to sales.`,
      `Administrative and selling costs are excluded from cost of sales and reported separately.`,
    );
  }

  for (let i = 0; i < capexItems.length; i++) {
    const item = capexItems[i];
    const biz = bizTypes[i];

    add(
      `Buying ${item} is fully recorded as an expense in the income statement in the year of purchase, regardless of how many years the asset will be used.`,
      `The cost of a long-lived asset is spread over its useful life as depreciation, not expensed entirely upfront.`,
    );
    add(
      `Every expenditure ${biz} makes during the year must appear as an expense in that same year's income statement.`,
      `Capital expenditures are matched to future periods through depreciation rather than expensed immediately.`,
    );
  }

  for (let i = 0; i < bizTypes.length; i++) {
    const biz = bizTypes[i];

    add(
      `${cap(biz)}'s gross profit is found by deducting all operating expenses, including distribution and administrative costs, from revenue.`,
      `Gross profit only deducts cost of sales from revenue; operating expenses are deducted later to reach the operating result.`,
    );
    add(
      `${cap(biz)}'s operating result, also referred to as earnings before interest and taxes, already includes finance costs and income tax, so it represents the final profit for the year.`,
      `The operating result excludes finance costs and income tax; profit for the year is the figure after those deductions.`,
    );
    add(
      `If ${biz}'s cost of sales grows faster than its revenue over several years, its gross profit margin will automatically widen because more goods are being produced.`,
      `Faster cost of sales growth relative to revenue narrows, not widens, the gross profit margin.`,
    );
  }

  if (pool.length < 150) throw new Error(`FALSE pool only ${pool.length}, need 150`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE,", SCENE.length, "SCENE,", THEORY.length, "THEORY,", TITLES.length, "TITLES");

if (slots.length !== 75) throw new Error(`expected 75 text slots, got ${slots.length}`);
if (SCENE.length < 19) throw new Error(`SCENE pool only ${SCENE.length}, need >= 19`);
if (THEORY.length < 55) throw new Error(`THEORY pool only ${THEORY.length}, need >= 55`);
if (TITLES.length !== 75) throw new Error(`TITLES must be exactly 75, got ${TITLES.length}`);
if (sceneIndices.length !== 19) throw new Error(`sceneIndices must be 19, got ${sceneIndices.length}`);

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
