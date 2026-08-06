/**
 * Generate scripts/ch6-part-6.1-text.json — 75 textual Full Course cases for
 * subsection 6.1 "What a balance sheet is".
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const allSlots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.1"];
const slots = allSlots.filter((s) => s.half === "text");
const OUT = "scripts/ch6-part-6.1-text.json";

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const VOWEL_RE = /^[aeiou]/i;
function art(word) {
  return VOWEL_RE.test(word) ? "An" : "A";
}
function artLower(word) {
  return VOWEL_RE.test(word) ? "an" : "a";
}

const SCENE = [
  "Consider a computer retailer that stocks laptops for sale to customers while relying on its own back-office desktops to run daily administration. Evaluate the following economic assertions:",
  "Consider a vehicle dealership that displays cars for sale on its forecourt while using a separate delivery van to move parts between branches. Evaluate the following economic assertions:",
  "Consider a bakery that owns its ovens and mixers for daily production while also holding boxed pastries as stock awaiting sale. Evaluate the following economic assertions:",
  "Consider a construction contractor that owns cranes and excavators for its projects while purchasing steel beams on credit from a supplier. Evaluate the following economic assertions:",
  "Consider a furniture retailer that keeps display sofas for sale while using its own delivery trucks to serve customers. Evaluate the following economic assertions:",
  "Consider a printing company that owns its presses outright while financing a new warehouse with a ten-year bank loan. Evaluate the following economic assertions:",
  "Consider a farm business that owns tractors for cultivation while holding harvested grain in storage awaiting sale. Evaluate the following economic assertions:",
  "Consider a technology licensing firm that holds patents on its inventions while renting its office space rather than owning it. Evaluate the following economic assertions:",
  "Consider a hotel group that owns its buildings and furnishings while settling supplier invoices for linen and food on short-term credit. Evaluate the following economic assertions:",
  "Consider a logistics company that owns its warehouse forklifts while carrying an overdraft to cover seasonal cash shortfalls. Evaluate the following economic assertions:",
  "Consider an engineering firm that owns specialised testing equipment while also holding raw materials awaiting use in customer orders. Evaluate the following economic assertions:",
  "Consider a franchise operator that owns its franchise licence outright while making monthly payments on a five-year equipment loan. Evaluate the following economic assertions:",
  "Consider a garden centre that owns its greenhouses while holding potted plants as stock ready for sale to customers. Evaluate the following economic assertions:",
  "Consider a transport operator that owns its fleet of lorries while carrying bonds issued to fund a new depot. Evaluate the following economic assertions:",
  "Consider a food producer that owns its processing machinery while owing suppliers for recently delivered packaging materials. Evaluate the following economic assertions:",
  "Consider a software company that owns a valuable trademark while leasing its office computers under a long-term arrangement. Evaluate the following economic assertions:",
  "Consider a retail chain that owns its shop fittings while holding seasonal merchandise as inventory awaiting the next sales period. Evaluate the following economic assertions:",
  "Consider a manufacturing firm that owns its factory building outright while financing new machinery through a long-term bank loan. Evaluate the following economic assertions:",
  "Consider a hospital trust that owns its diagnostic equipment while settling invoices from medical suppliers on standard credit terms. Evaluate the following economic assertions:",
  "Consider an electronics wholesaler that holds components as stock for resale while using its own computers to manage orders and accounts. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how the balance sheet equation requires total assets to equal total liabilities plus total equity. Evaluate the following economic assertions:",
  "Analyze how owner's equity is derived as the residual claim after liabilities are deducted from assets. Evaluate the following economic assertions:",
  "Review the distinction between non-current assets and current assets based on expected holding period. Evaluate the following economic assertions:",
  "Analyze why non-current assets are expected to provide benefit for more than one year. Evaluate the following economic assertions:",
  "Review why current assets are expected to convert into cash within the normal operating cycle. Evaluate the following economic assertions:",
  "Analyze how tangible non-current assets differ from intangible non-current assets in physical form. Evaluate the following economic assertions:",
  "Review how intangible assets such as patents and trademarks qualify as non-current assets despite lacking physical form. Evaluate the following economic assertions:",
  "Analyze how buildings, machinery and office equipment are classified as tangible non-current assets. Evaluate the following economic assertions:",
  "Review how inventory, trade receivables and cash are classified as current assets. Evaluate the following economic assertions:",
  "Analyze why the same physical item can be a non-current asset for one holder and inventory for another. Evaluate the following economic assertions:",
  "Review how intended use versus resale intent determines an asset's balance sheet classification. Evaluate the following economic assertions:",
  "Analyze the distinction between current liabilities and non-current liabilities based on settlement timing. Evaluate the following economic assertions:",
  "Review why trade payables are classified as a current liability. Evaluate the following economic assertions:",
  "Analyze why long-term bank loans and bonds are classified as non-current liabilities. Evaluate the following economic assertions:",
  "Review how the equity ratio is calculated by dividing total equity by total assets. Evaluate the following economic assertions:",
  "Analyze why a higher equity ratio indicates greater financial independence from creditors. Evaluate the following economic assertions:",
  "Review why equity does not require repayment on a fixed schedule, unlike borrowed funds. Evaluate the following economic assertions:",
  "Analyze how equity acts as a buffer that absorbs losses before creditors are affected. Evaluate the following economic assertions:",
  "Review how an asset swap keeps total assets and the balance sheet equation unchanged. Evaluate the following economic assertions:",
  "Analyze how a credit purchase increases both an asset and a liability simultaneously. Evaluate the following economic assertions:",
  "Review the difference between a cash purchase and a credit purchase in their effect on the balance sheet. Evaluate the following economic assertions:",
  "Analyze how reclassifying an asset from resale stock to operational use changes its balance sheet category. Evaluate the following economic assertions:",
  "Review how a dealer's stock differs from an operating business's equipment when both hold an identical item. Evaluate the following economic assertions:",
  "Analyze why settlement timing, not the size of a debt, determines its current or non-current classification. Evaluate the following economic assertions:",
  "Review how partial repayment due within a year moves part of a long-term loan into current liabilities. Evaluate the following economic assertions:",
  "Analyze how a business's equity ratio changes when new equity is raised from owners. Evaluate the following economic assertions:",
  "Review how a business's equity ratio changes when additional debt is taken on without new equity. Evaluate the following economic assertions:",
  "Analyze why the balance sheet reports figures at a single point in time rather than over a period. Evaluate the following economic assertions:",
  "Review how total equity and liabilities together must equal total assets. Evaluate the following economic assertions:",
  "Analyze why physical form is not required for an item to qualify as a non-current asset. Evaluate the following economic assertions:",
  "Review how the operating cycle helps define which assets are classified as current. Evaluate the following economic assertions:",
  "Analyze the benefit period concept underlying non-current asset classification. Evaluate the following economic assertions:",
  "Review how trade payables arise from receiving goods or services before paying suppliers. Evaluate the following economic assertions:",
  "Analyze how comparing trade payables with trade receivables reveals net short-term obligations. Evaluate the following economic assertions:",
  "Review how a vehicle can be a fixed asset for one business and inventory for a dealer. Evaluate the following economic assertions:",
  "Analyze how a forklift truck used in a warehouse differs in classification from one held for resale. Evaluate the following economic assertions:",
  "Review how a commercial oven used in daily production is classified compared with one held as stock. Evaluate the following economic assertions:",
  "Analyze how a sewing machine used for years in production is classified as a non-current asset. Evaluate the following economic assertions:",
  "Review how a generator used continuously in operations differs in classification from one awaiting sale. Evaluate the following economic assertions:",
  "Analyze how a tractor used on a farm is classified compared with one held by an equipment dealer. Evaluate the following economic assertions:",
  "Review how a server rack used to run internal systems is classified as a tangible non-current asset. Evaluate the following economic assertions:",
  "Analyze how a photocopier used for office administration is classified as a fixed asset. Evaluate the following economic assertions:",
  "Review how a delivery van used to distribute goods is classified as a non-current asset. Evaluate the following economic assertions:",
  "Analyze how a franchise licence held for long-term use is classified as an intangible non-current asset. Evaluate the following economic assertions:",
  "Review how an import licence held for ongoing trading rights is classified on the balance sheet. Evaluate the following economic assertions:",
  "Analyze how a distribution licence supporting long-term operations is classified as an intangible asset. Evaluate the following economic assertions:",
  "Review how a customer list acquired in a takeover can be recognised as an intangible non-current asset. Evaluate the following economic assertions:",
  "Analyze how copyright protection is classified as an intangible non-current asset. Evaluate the following economic assertions:",
  "Review how a software licence used over several years is classified as a non-current asset. Evaluate the following economic assertions:",
  "Analyze how a mortgage on business premises is classified as a non-current liability. Evaluate the following economic assertions:",
  "Review how a five-year term loan is classified based on its settlement date. Evaluate the following economic assertions:",
  "Analyze how a bank overdraft is classified as a current liability. Evaluate the following economic assertions:",
  "Review how wages payable to employees are classified as a current liability. Evaluate the following economic assertions:",
  "Analyze how tax payable to the authorities is classified as a current liability. Evaluate the following economic assertions:",
  "Review how a lease liability is classified depending on its settlement timing. Evaluate the following economic assertions:",
  "Analyze how a manufacturing firm's balance sheet reflects both fixed assets and working capital items. Evaluate the following economic assertions:",
  "Review how a retail chain's balance sheet separates fixed shop fittings from seasonal inventory. Evaluate the following economic assertions:",
  "Analyze how a logistics company's balance sheet reflects vehicles as non-current assets. Evaluate the following economic assertions:",
  "Review how a construction contractor's balance sheet reflects equipment financed through long-term loans. Evaluate the following economic assertions:",
  "Analyze how equity contributions differ from borrowed funds in their effect on a business's balance sheet structure. Evaluate the following economic assertions:",
];

const TITLES = [
  "The Balance Sheet Equation",
  "Assets Equal Liabilities Plus Equity",
  "Owner's Equity as a Residual Claim",
  "Non-Current Versus Current Assets",
  "Defining Non-Current Assets",
  "Defining Current Assets",
  "Tangible Non-Current Assets",
  "Intangible Non-Current Assets",
  "Patents as Intangible Assets",
  "Trademarks on the Balance Sheet",
  "Licences as Intangible Assets",
  "Buildings and Machinery as Fixed Assets",
  "Office Equipment as a Fixed Asset",
  "Computers for Use Versus Resale",
  "Inventory as a Current Asset",
  "Trade Receivables Explained",
  "Cash and Cash Equivalents",
  "Current Liabilities Overview",
  "Non-Current Liabilities Overview",
  "Trade Payables as a Current Liability",
  "Long-Term Loans as Non-Current Liabilities",
  "Bonds Payable and Settlement Timing",
  "The Equity Ratio Explained",
  "Financial Independence and Equity",
  "Equity as a Buffer for Creditors",
  "Why Equity Does Not Require Repayment",
  "Asset Swaps and the Balance Sheet",
  "Credit Purchases and Balance Sheet Balance",
  "Cash Purchases Versus Credit Purchases",
  "Reclassifying Assets by Intended Use",
  "Dealer Inventory Versus Operating Assets",
  "Same Item Different Classification",
  "Settlement Timing for Liabilities",
  "Partial Repayment and Reclassification",
  "Equity Ratio and Lender Risk",
  "Raising Equity Versus Taking on Debt",
  "Balance Sheet as a Point in Time",
  "Total Equity and Liabilities Identity",
  "Physical Form and Asset Classification",
  "Operating Cycle and Current Assets",
  "Benefit Period and Non-Current Assets",
  "Supplier Credit and Trade Payables",
  "Comparing Payables and Receivables",
  "Vehicles as Fixed or Resale Assets",
  "Forklifts in Fixed Versus Current Assets",
  "Ovens Held for Use or Sale",
  "Sewing Machines and Asset Classification",
  "Generators as Operating Equipment",
  "Tractors in Farm Business Balance Sheets",
  "Server Racks as Fixed Assets",
  "Photocopiers for Office Use",
  "Delivery Vans as Non-Current Assets",
  "Franchise Licences as Intangibles",
  "Import Licences on the Balance Sheet",
  "Distribution Licences Explained",
  "Customer Lists From Acquisitions",
  "Copyright as an Intangible Asset",
  "Software Licences and Long-Term Value",
  "Mortgages as Non-Current Liabilities",
  "Term Loans and Settlement Dates",
  "Overdrafts as Current Liabilities",
  "Wages Payable and Settlement Timing",
  "Tax Payable as a Current Obligation",
  "Lease Liabilities and Classification",
  "Manufacturing Firms and Fixed Assets",
  "Retail Chains and Inventory Classification",
  "Logistics Companies and Vehicle Assets",
  "Construction Contractors and Equipment",
  "Hotels and Non-Current Asset Bases",
  "Hospitals and Balance Sheet Structure",
  "Engineering Firms and Loan Classification",
  "Food Producers and Working Assets",
  "Transport Operators and Debt Structure",
  "Equity Contributions Versus Borrowed Funds",
  "Closing Review of Balance Sheet Basics",
];

const sceneIndices = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const items = [
    "office computer",
    "delivery van",
    "forklift truck",
    "photocopier",
    "company vehicle",
    "diesel generator",
    "commercial oven",
    "industrial sewing machine",
    "farm tractor",
    "server rack",
  ];
  const opUse = "an operating business";
  const resaleUse = "a dealer for resale to customers";

  for (const item of items) {
    add(
      `${art(item)} ${item} kept in service by ${opUse} for more than one year is classified as a non-current tangible asset.`,
      `Continued use beyond one year by the business itself makes the ${item} a non-current tangible asset.`,
    );
    add(
      `${art(item)} ${item} held by ${resaleUse} is classified as inventory, a current asset, rather than as a non-current asset.`,
      `Held for resale rather than use, the ${item} counts as inventory under current assets.`,
    );
    add(
      `The same ${item} may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.`,
      `Intended use versus resale, not physical form, decides whether the ${item} is non-current or current.`,
    );
    add(
      `Classifying ${artLower(item)} ${item} as a non-current asset depends on management's intention to use it in operations rather than to sell it quickly.`,
      `Intention to use over the long term is the deciding factor for non-current classification of the ${item}.`,
    );
    add(
      `When ${artLower(item)} ${item} is purchased to be resold rather than used, it belongs among current assets as inventory.`,
      `Resale intent places the ${item} in inventory, a current asset category.`,
    );
    add(
      `${art(item)} ${item} bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit over several accounting periods.`,
      `Multi-period operational benefit qualifies the ${item} as a tangible fixed asset.`,
    );
    add(
      `${art(item)} ${item} that a dealer displays for sale on its showroom floor is not a fixed asset of that dealer.`,
      `Showroom stock awaiting sale is inventory, not a fixed asset, for the dealer.`,
    );
    add(
      `If a business converts ${artLower(item)} ${item} previously held for resale into equipment used in its own operations, its balance sheet classification should move from current to non-current.`,
      `A change in intended use from resale to operational use reclassifies the ${item} from inventory to a non-current asset.`,
    );
  }

  const intangibles = [
    "patent",
    "trademark",
    "brand licence",
    "franchise licence",
    "software licence",
    "import licence",
    "distribution licence",
    "trademark registration",
    "copyright",
    "customer list acquired in a takeover",
  ];
  for (const item of intangibles) {
    add(
      `${art(item)} ${item} lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.`,
      `Long-term expected benefit, not physical form, justifies the non-current classification of ${artLower(item)} ${item}.`,
    );
    add(
      `Although ${artLower(item)} ${item} cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.`,
      `Long-term value places an intangible ${item} among non-current rather than current assets.`,
    );
    add(
      `${art(item)} ${item} is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.`,
      `Intangible and tangible non-current assets, including ${artLower(item)} ${item}, sit together in the same balance sheet section.`,
    );
    add(
      `The absence of physical form does not prevent ${artLower(item)} ${item} from being classified as a non-current asset.`,
      `Physical form is not a requirement for non-current classification of ${artLower(item)} ${item}.`,
    );
    add(
      `${art(item)} ${item} purchased to protect or exploit a business's operations over several years is grouped with intangible non-current assets.`,
      `Multi-year protective or exploitative value groups ${artLower(item)} ${item} with intangible non-current assets.`,
    );
    add(
      `${art(item)} ${item} is not classified as a current asset because it is not expected to be converted into cash within the normal operating cycle.`,
      `Because ${artLower(item)} ${item} is not expected to convert into cash within the operating cycle, it is excluded from current assets.`,
    );
    add(
      `A business holding ${artLower(item)} ${item} for continued exclusive use records it as an intangible non-current asset rather than as inventory.`,
      `Continued exclusive use, not resale intent, keeps ${artLower(item)} ${item} out of inventory and within intangible non-current assets.`,
    );
  }

  const nonCurrentLiab = [
    "long-term bank loan",
    "corporate bond",
    "mortgage on the premises",
    "five-year term loan",
    "long-term lease liability",
  ];
  const currentLiab = [
    "trade payables to suppliers",
    "bank overdraft",
    "short-term loan due within the year",
    "wages payable to employees",
    "tax payable to the authorities",
  ];
  const liabBiz = [
    "manufacturing firm",
    "retail chain",
    "logistics company",
    "construction contractor",
    "software company",
    "hospital trust",
    "hotel group",
    "engineering firm",
    "food producer",
    "transport operator",
  ];
  for (let i = 0; i < liabBiz.length; i++) {
    const ncl = nonCurrentLiab[i % nonCurrentLiab.length];
    const cl = currentLiab[i % currentLiab.length];
    const biz = liabBiz[i];
    add(
      `${art(biz)} ${biz} that takes out a ${ncl} repayable in more than one year classifies the obligation as a non-current liability.`,
      `Repayment due beyond one year places the ${ncl} among non-current liabilities for ${artLower(biz)} ${biz}.`,
    );
    add(
      `${art(biz)} ${biz} that owes ${cl} due within the next year classifies the obligation as a current liability.`,
      `Settlement within one year places ${cl} among current liabilities for ${artLower(biz)} ${biz}.`,
    );
    add(
      `For ${artLower(biz)} ${biz}, a ${ncl} appears separately from current liabilities because it falls due after more than one year.`,
      `A longer settlement horizon separates a ${ncl} from the current liabilities of ${artLower(biz)} ${biz}.`,
    );
    add(
      `For ${artLower(biz)} ${biz}, ${cl} appears within current liabilities because settlement is expected within one year.`,
      `A short settlement horizon places ${cl} within the current liabilities of ${artLower(biz)} ${biz}.`,
    );
    add(
      `A ${ncl} owed by ${artLower(biz)} ${biz} does not increase current liabilities because it is not due within the coming year.`,
      `Because the ${ncl} of ${artLower(biz)} ${biz} is not due within a year, it stays out of current liabilities.`,
    );
    add(
      `If part of ${artLower(biz)} ${biz}'s ${ncl} becomes due within the next twelve months, that portion should move into current liabilities.`,
      `A ${ncl} nearing its due date within a year is reclassified into current liabilities for ${artLower(biz)} ${biz}.`,
    );
    add(
      `${art(biz)} ${biz} continues to record ${cl} as a current liability no matter how large the outstanding balance becomes.`,
      `Amount owed does not change the current classification of ${cl} for ${artLower(biz)} ${biz}; timing does.`,
    );
  }

  const equityBiz = [
    "family-owned business",
    "listed company",
    "small manufacturer",
    "start-up",
    "cooperative",
    "partnership",
    "converted sole-trader company",
    "multinational subsidiary",
    "regional bank client",
    "private-equity-backed firm",
  ];
  for (const biz2 of equityBiz) {
    add(
      `A ${biz2} with a high equity ratio relies less on external creditors to finance its assets.`,
      `A high equity ratio means a ${biz2} finances more of its assets from owners rather than from creditors.`,
    );
    add(
      `A ${biz2} with a low equity ratio finances a larger share of its assets through liabilities rather than equity.`,
      `A low equity ratio for a ${biz2} implies heavier reliance on liabilities to finance assets.`,
    );
    add(
      `Because equity does not need to be repaid on a fixed schedule, a ${biz2} with more equity faces less repayment pressure than one relying mainly on debt.`,
      `Equity's lack of a fixed repayment date reduces repayment pressure on a ${biz2} that relies more on equity.`,
    );
    add(
      `Equity provides a ${biz2} with a buffer that absorbs losses before creditors are affected.`,
      `Losses reduce a ${biz2}'s equity first, buffering creditors from immediate impact.`,
    );
    add(
      `A ${biz2} that raises new equity from its owners increases its equity ratio, all else being equal.`,
      `New equity contributions raise the numerator of a ${biz2}'s equity ratio, increasing the ratio.`,
    );
    add(
      `A ${biz2} that takes on additional debt without raising new equity lowers its equity ratio, all else being equal.`,
      `Added debt without new equity raises total assets financed by liabilities, lowering a ${biz2}'s equity ratio.`,
    );
    add(
      `A higher equity ratio generally signals greater financial independence for a ${biz2} from external lenders.`,
      `Financial independence from lenders rises with a ${biz2}'s equity ratio.`,
    );
  }

  const trueSpecific = [
    [
      "A balance sheet reports total assets, total liabilities and total equity as at a specific date rather than over a period.",
      "The balance sheet is a snapshot at one point in time, unlike the income statement which covers a period.",
    ],
    [
      "Total assets always equal the sum of total liabilities and total equity on a balance sheet.",
      "The balance sheet equation requires assets to equal liabilities plus equity at all times.",
    ],
    [
      "Owner's equity can be calculated as total assets minus total liabilities.",
      "Rearranging the balance sheet equation gives equity as assets minus liabilities.",
    ],
    [
      "Non-current assets are expected to provide economic benefit to a business for more than one year.",
      "A benefit period beyond one year is the defining feature of non-current assets.",
    ],
    [
      "Current assets are listed separately from non-current assets because of their shorter expected holding period.",
      "Current assets are distinguished by conversion into cash or use within roughly one year.",
    ],
    [
      "Cash and cash equivalents are classified as a current asset because they are already liquid or nearly so.",
      "Cash and near-cash items are the most liquid current assets.",
    ],
    [
      "Trade receivables are amounts owed to a business by its customers for goods or services already delivered.",
      "Trade receivables represent credit extended to customers, expected to be collected as cash.",
    ],
    [
      "Inventory is classified as a current asset because it is normally sold and converted into cash within the operating cycle.",
      "Inventory turns over within the operating cycle, justifying current-asset classification.",
    ],
    [
      "When a business purchases inventory for cash, total assets remain unchanged because one asset replaces another.",
      "Cash decreases while inventory increases by the same amount, leaving total assets unaffected.",
    ],
    [
      "When a business purchases equipment on credit, both total assets and total liabilities increase by the purchase amount.",
      "An asset increase funded by a payable increases both sides of the balance sheet equally.",
    ],
    [
      "An asset swap, such as exchanging cash for equipment, keeps the balance sheet in balance without changing total liabilities or equity.",
      "Swapping one asset for another of equal value leaves total assets, and the balance sheet equation, unchanged.",
    ],
    [
      "A credit purchase increases a liability such as trade payables at the same time as it increases an asset.",
      "Recording a credit purchase requires a matching increase in both an asset and a liability to keep the balance sheet balanced.",
    ],
    [
      "Trade payables typically arise when a business receives goods or services from a supplier before paying for them.",
      "Trade payables reflect the timing gap between receiving goods and paying suppliers.",
    ],
    [
      "A business with more trade payables than trade receivables owes more to its suppliers than its customers owe to it.",
      "Comparing trade payables and trade receivables shows net short-term obligations to suppliers versus amounts due from customers.",
    ],
    [
      "Non-current liabilities include obligations such as long-term loans that will not be settled within the next twelve months.",
      "The defining feature of non-current liabilities is a settlement date beyond one year.",
    ],
    [
      "Current liabilities include obligations such as trade payables and bank overdrafts due within the next twelve months.",
      "Current liabilities share a settlement horizon of roughly one year or less.",
    ],
    [
      "The equity ratio is calculated by dividing total equity by total assets.",
      "Equity ratio expresses equity as a proportion of the assets it helps finance.",
    ],
    [
      "A business financed mostly by equity is generally considered less risky for lenders than one financed mostly by debt.",
      "Higher equity financing provides more of a cushion for lenders before losses reach them.",
    ],
    [
      "Because equity holders bear losses ahead of creditors, equity is often described as a buffer that protects lenders.",
      "This buffering role is one of the key reasons equity matters to a business's financial structure.",
    ],
    [
      "A patent is an intangible non-current asset because it grants long-term exclusive rights without physical form.",
      "Patents provide long-term legal protection and value despite lacking physical substance.",
    ],
    [
      "A trademark can appear on a balance sheet as an intangible non-current asset when it has been purchased or otherwise recognised.",
      "Trademarks with recognised value are recorded among intangible non-current assets.",
    ],
    [
      "Buildings and machinery used in a business's operations are examples of tangible non-current assets.",
      "Physical items retained for continued operational use are classic tangible non-current assets.",
    ],
    [
      "A business that both owns machinery for production and holds unsold goods for sale will show items in both non-current and current assets.",
      "Non-current assets like machinery and current assets like inventory can coexist on the same balance sheet.",
    ],
    [
      "Total equity and liabilities on a balance sheet always equal total assets, reflecting how the business's resources were financed.",
      "The equality of both sides shows that every asset is financed by either equity or liabilities.",
    ],
    [
      "A computer bought by an accounting firm for use by its staff is a non-current asset, while an identical computer bought by an electronics retailer for resale is inventory.",
      "Intended use versus resale intent explains why identical computers can sit in different balance sheet categories.",
    ],
  ];
  for (const [s, e] of trueSpecific) add(s, e);

  const fillers = [
    "introductory accounting",
    "standard balance sheet theory",
    "the textbook balance sheet framework",
    "basic asset and liability classification",
    "foundational balance sheet theory",
    "elementary accounting classification",
    "core balance sheet definitions",
    "primary financial accounting vocabulary",
    "initial balance sheet concepts",
    "fundamental accounting equation theory",
  ];
  const roles = [
    "financial controller",
    "accounts assistant",
    "small business owner",
    "finance director",
    "bookkeeper",
    "credit controller",
    "warehouse manager",
    "procurement officer",
    "branch accountant",
    "treasury analyst",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, total assets must equal total liabilities plus total equity at every balance sheet date.`,
      `${cap(f)} treats the balance sheet equation as holding at every reporting date.`,
    );
    add(
      `Under ${f}, assets expected to remain in use beyond one year, such as those managed by a ${r}, are classified as non-current.`,
      `${cap(f)} classifies long-term-use assets, including those handled by a ${r}, as non-current.`,
    );
    add(
      `Under ${f}, assets expected to be converted into cash within the operating cycle, such as stock tracked by a ${r}, are classified as current.`,
      `${cap(f)} classifies short-cycle assets, including stock tracked by a ${r}, as current.`,
    );
    add(
      `Under ${f}, a ${r} would record amounts owed to suppliers as a current liability.`,
      `${cap(f)} places supplier amounts, as tracked by a ${r}, within current liabilities.`,
    );
    add(
      `Under ${f}, a ${r} would record a loan not due for several years as a non-current liability.`,
      `${cap(f)} places long-dated loans, as tracked by a ${r}, within non-current liabilities.`,
    );
    add(
      `Under ${f}, equity is viewed as financing that does not require scheduled repayment, unlike a loan a ${r} might arrange.`,
      `${cap(f)} distinguishes equity from loans a ${r} might arrange by its lack of scheduled repayment.`,
    );
    add(
      `Under ${f}, a ${r} calculates the equity ratio by dividing equity by total assets.`,
      `${cap(f)} defines the equity ratio as equity divided by total assets, as a ${r} would calculate it.`,
    );
    add(
      `Under ${f}, a ${r} would classify an intangible item such as a licence among non-current assets despite its lack of physical form.`,
      `${cap(f)} groups intangible items like licences, as a ${r} would record them, within non-current assets.`,
    );
  }

  if (pool.length < 226) throw new Error(`TRUE pool only ${pool.length}, need at least 226`);
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

  const items = [
    "office computer",
    "delivery van",
    "forklift truck",
    "photocopier",
    "company vehicle",
    "diesel generator",
    "commercial oven",
    "industrial sewing machine",
    "farm tractor",
    "server rack",
  ];
  const opUse = "an operating business";
  const resaleUse = "a dealer for resale to customers";

  for (const item of items) {
    add(
      `${art(item)} ${item} used by ${opUse} is classified as inventory because inventory can include any physical equipment a business owns.`,
      `Operational use over the long term makes the ${item} a non-current tangible asset, not inventory.`,
    );
    add(
      `${art(item)} ${item} held by ${resaleUse} is classified as a non-current asset because the dealer is a business, not a household.`,
      `Resale intent, not the dealer's status as a business, places the ${item} in inventory rather than among non-current assets.`,
    );
    add(
      `The same ${item} must always be classified identically on every balance sheet regardless of how it is held.`,
      `Classification of the ${item} depends on whether it is used or held for resale, so identical items can differ across balance sheets.`,
    );
    add(
      `Classifying ${artLower(item)} ${item} as a non-current asset depends mainly on its purchase price rather than on management's intended use.`,
      `Intended use, not purchase price, drives non-current classification of the ${item}.`,
    );
    add(
      `${art(item)} ${item} purchased to be resold still counts among non-current assets as long as it remains unsold for several months.`,
      `Resale intent keeps the ${item} in inventory as a current asset regardless of how long it remains unsold.`,
    );
    add(
      `${art(item)} ${item} used daily in a business's own operations should be recorded as inventory because it depreciates like stock.`,
      `Continued operational use makes the ${item} a non-current asset; inventory is reserved for goods held for resale.`,
    );
    add(
      `Once a dealer sells ${artLower(item)} ${item} from its showroom, the buyer must continue to record it as inventory.`,
      `A buyer intending to use the ${item} in operations records it as a non-current asset, not inventory, after purchase.`,
    );
    add(
      `${art(item)} ${item} converted from resale stock into equipment used in operations keeps its original inventory classification permanently.`,
      `A change in intended use reclassifies the ${item} from inventory to a non-current asset.`,
    );
  }

  const intangibles = [
    "patent",
    "trademark",
    "brand licence",
    "franchise licence",
    "software licence",
    "import licence",
    "distribution licence",
    "trademark registration",
    "copyright",
    "customer list acquired in a takeover",
  ];
  for (const item of intangibles) {
    add(
      `${art(item)} ${item} is excluded from non-current assets because it has no physical substance.`,
      `Physical substance is not required for non-current classification; ${artLower(item)} ${item} qualifies through its long-term value.`,
    );
    add(
      `${art(item)} ${item} is classified as a current asset because it is intangible and therefore easily converted into cash within a year.`,
      `${art(item)} ${item} is a non-current intangible asset because it provides benefit over several years, not because it converts to cash quickly.`,
    );
    add(
      `Because ${artLower(item)} ${item} cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet.`,
      `${art(item)} ${item} with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.`,
    );
    add(
      `Non-current assets can never include ${artLower(item)} ${item} because that section is reserved strictly for tangible items like machinery.`,
      `The non-current assets section includes intangible items such as ${artLower(item)} ${item} alongside tangible assets.`,
    );
    add(
      `${art(item)} ${item} is treated as inventory because it is intended for use rather than for physical display.`,
      `Long-term exclusive use, not physical display, places ${artLower(item)} ${item} among non-current intangible assets, not inventory.`,
    );
    add(
      `${art(item)} ${item} loses its non-current classification as soon as the business begins actively using it.`,
      `Active use does not remove ${artLower(item)} ${item}'s non-current classification; it confirms the long-term benefit that justifies it.`,
    );
    add(
      `${art(item)} ${item} counts as a current asset whenever its value is difficult to estimate precisely.`,
      `Valuation difficulty does not reclassify ${artLower(item)} ${item}; expected long-term benefit keeps it a non-current intangible asset.`,
    );
  }

  const nonCurrentLiab = [
    "long-term bank loan",
    "corporate bond",
    "mortgage on the premises",
    "five-year term loan",
    "long-term lease liability",
  ];
  const currentLiab = [
    "trade payables to suppliers",
    "bank overdraft",
    "short-term loan due within the year",
    "wages payable to employees",
    "tax payable to the authorities",
  ];
  const liabBiz = [
    "manufacturing firm",
    "retail chain",
    "logistics company",
    "construction contractor",
    "software company",
    "hospital trust",
    "hotel group",
    "engineering firm",
    "food producer",
    "transport operator",
  ];
  for (let i = 0; i < liabBiz.length; i++) {
    const ncl = nonCurrentLiab[i % nonCurrentLiab.length];
    const cl = currentLiab[i % currentLiab.length];
    const biz = liabBiz[i];
    add(
      `${art(biz)} ${biz} classifies a ${ncl} as a current liability because the total amount owed is large.`,
      `Settlement timing, not the size of the debt, determines that ${artLower(biz)} ${biz}'s ${ncl} is non-current.`,
    );
    add(
      `${art(biz)} ${biz} classifies ${cl} as a non-current liability because suppliers are long-term business partners.`,
      `${cap(cl)} is a current liability for ${artLower(biz)} ${biz} because settlement is expected within one year, regardless of the relationship's length.`,
    );
    add(
      `A ${ncl} owed by ${artLower(biz)} ${biz} is included in current liabilities because interest on it is paid every year.`,
      `Annual interest payments do not make ${artLower(biz)} ${biz}'s ${ncl} current; only the principal's settlement date within one year would.`,
    );
    add(
      `${cap(cl)} owed by ${artLower(biz)} ${biz} is excluded from current liabilities as long as the business intends to negotiate an extension.`,
      `Intention to negotiate does not change the classification of ${cl} for ${artLower(biz)} ${biz}; the agreed settlement date does.`,
    );
    add(
      `${art(biz)} ${biz} cannot report both a ${ncl} and ${cl} on the same balance sheet at the same time.`,
      `${art(biz)} ${biz} may report a ${ncl} under non-current liabilities and ${cl} under current liabilities simultaneously.`,
    );
    add(
      `A ${ncl} automatically becomes a current liability for ${artLower(biz)} ${biz} once any portion of it has been repaid.`,
      `Partial repayment does not reclassify ${artLower(biz)} ${biz}'s remaining ${ncl}; only the portion due within a year moves to current liabilities.`,
    );
    add(
      `${art(biz)} ${biz} classifies ${cl} as non-current whenever the total balance exceeds that of its ${ncl}.`,
      `Balance size does not determine classification; ${cl} remains current for ${artLower(biz)} ${biz} based on its settlement timing.`,
    );
  }

  const equityBiz = [
    "family-owned business",
    "listed company",
    "small manufacturer",
    "start-up",
    "cooperative",
    "partnership",
    "converted sole-trader company",
    "multinational subsidiary",
    "regional bank client",
    "private-equity-backed firm",
  ];
  for (const biz2 of equityBiz) {
    add(
      `A ${biz2} with a high equity ratio relies more heavily on external creditors than one with a low equity ratio.`,
      `A high equity ratio for a ${biz2} means more financing from owners and less reliance on creditors, the opposite of this claim.`,
    );
    add(
      `Equity contributed to a ${biz2} must be repaid to the owners by a fixed date, similar to a bank loan.`,
      `Equity contributed to a ${biz2} carries no obligation for scheduled repayment, unlike a bank loan.`,
    );
    add(
      `A ${biz2} that raises new equity from its owners automatically lowers its equity ratio.`,
      `Raising new equity increases a ${biz2}'s equity ratio, all else being equal, rather than lowering it.`,
    );
    add(
      `A ${biz2} that takes on additional debt without raising equity increases its equity ratio.`,
      `Additional debt without new equity lowers a ${biz2}'s equity ratio, since total liabilities rise relative to equity.`,
    );
    add(
      `Creditors of a ${biz2} absorb losses before the owners' equity is affected.`,
      `Owners' equity of a ${biz2} absorbs losses before creditors are affected, acting as a buffer for lenders.`,
    );
    add(
      `A low equity ratio for a ${biz2} signals greater financial independence from external lenders.`,
      `A low equity ratio for a ${biz2} signals greater reliance on external financing, not greater independence.`,
    );
    add(
      `The equity ratio of a ${biz2} measures the proportion of total liabilities financed by short-term creditors.`,
      `The equity ratio measures the proportion of total assets financed by owners' equity, not liabilities financed by creditors.`,
    );
  }

  const falseSpecific = [
    [
      "A balance sheet reports revenues and expenses accumulated over an accounting period, similar to the income statement.",
      "The balance sheet is a snapshot at a point in time; revenues and expenses over a period appear on the income statement.",
    ],
    [
      "Total assets can exceed the sum of total liabilities and total equity if a business is performing well.",
      "The balance sheet equation always holds; assets equal liabilities plus equity regardless of performance.",
    ],
    [
      "Owner's equity is calculated as total liabilities minus total assets.",
      "Equity equals total assets minus total liabilities, not the reverse subtraction.",
    ],
    [
      "Non-current assets are defined by being physically large rather than by the length of the benefit period.",
      "Non-current assets are defined by providing benefit for more than one year, not by physical size.",
    ],
    [
      "Current assets are separated from non-current assets mainly because they cost less.",
      "The current versus non-current split is based on expected holding period, not cost.",
    ],
    [
      "Cash and cash equivalents are classified as a non-current asset because businesses hold cash for the long term.",
      "Cash and cash equivalents are current assets because of their immediate liquidity.",
    ],
    [
      "Trade receivables represent amounts a business owes to its suppliers.",
      "Trade receivables are amounts owed to the business by its customers, the opposite of payables.",
    ],
    [
      "Inventory is classified as a non-current asset because manufacturing businesses hold it for years before selling it.",
      "Inventory is a current asset, expected to be sold within the normal operating cycle, typically within a year.",
    ],
    [
      "When a business purchases inventory for cash, total assets increase because inventory has been added.",
      "Cash decreases by the same amount inventory increases, so total assets stay unchanged in a straightforward asset swap.",
    ],
    [
      "When a business purchases equipment on credit, only total assets increase while liabilities stay the same.",
      "A credit purchase increases both an asset and a liability such as trade payables, not assets alone.",
    ],
    [
      "An asset swap increases total liabilities because one of the assets involved must have been financed by borrowing.",
      "An asset swap simply exchanges one asset for another of equal value and does not by itself change liabilities.",
    ],
    [
      "A credit purchase increases an asset without affecting any liability because payment is deferred.",
      "Deferring payment creates a liability such as trade payables, which increases alongside the asset.",
    ],
    [
      "Trade payables arise when a business pays a supplier in cash immediately upon delivery.",
      "Trade payables arise from buying on credit, not from immediate cash payment.",
    ],
    [
      "A business with more trade payables than trade receivables is owed more by its customers than it owes to its suppliers.",
      "Higher trade payables than trade receivables means the business owes suppliers more than customers owe it.",
    ],
    [
      "Non-current liabilities are amounts a business must settle within the next twelve months.",
      "Non-current liabilities are due after more than one year; obligations due within a year are current liabilities.",
    ],
    [
      "Trade payables are classified as a non-current liability because supplier relationships often last for many years.",
      "Trade payables are a current liability because individual invoices are normally settled within a short period, regardless of relationship length.",
    ],
    [
      "The equity ratio is calculated by dividing total liabilities by total assets.",
      "The equity ratio divides total equity, not liabilities, by total assets.",
    ],
    [
      "A business financed mostly by debt is generally considered less risky for lenders than one financed mostly by equity.",
      "Heavier debt financing typically increases risk for lenders because there is a smaller equity buffer to absorb losses.",
    ],
    [
      "Because creditors bear losses ahead of equity holders, equity is considered a source of risk rather than a buffer.",
      "Equity holders bear losses ahead of creditors, which is why equity acts as a buffer protecting lenders.",
    ],
    [
      "A patent is a tangible non-current asset because it has clear legal and financial value.",
      "A patent is an intangible non-current asset; legal or financial value does not require physical substance.",
    ],
    [
      "A trademark cannot appear on a balance sheet because its value is too subjective to record.",
      "Trademarks with recognised value can be recorded as intangible non-current assets.",
    ],
    [
      "Buildings and machinery used in a business's operations are examples of current assets because they support ongoing activity.",
      "Buildings and machinery used in operations are tangible non-current assets, not current assets.",
    ],
    [
      "A business can only show items in either non-current assets or current assets, never both, depending on its industry.",
      "Most businesses show items in both non-current assets, such as machinery, and current assets, such as inventory.",
    ],
    [
      "Total equity and liabilities can differ from total assets when a business has intangible assets.",
      "Total equity and liabilities always equal total assets regardless of whether intangible assets are present.",
    ],
    [
      "A computer bought by an accounting firm for staff use and an identical computer bought by an electronics retailer for resale must both be classified as non-current assets.",
      "The accounting firm's computer is a non-current asset, while the retailer's identical computer held for resale is inventory, a current asset.",
    ],
  ];
  for (const [s, e] of falseSpecific) add(s, e);

  const fillers = [
    "introductory accounting",
    "standard balance sheet theory",
    "the textbook balance sheet framework",
    "basic asset and liability classification",
    "foundational balance sheet theory",
    "elementary accounting classification",
    "core balance sheet definitions",
    "primary financial accounting vocabulary",
    "initial balance sheet concepts",
    "fundamental accounting equation theory",
  ];
  const roles = [
    "financial controller",
    "accounts assistant",
    "small business owner",
    "finance director",
    "bookkeeper",
    "credit controller",
    "warehouse manager",
    "procurement officer",
    "branch accountant",
    "treasury analyst",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, total assets may differ from total liabilities plus total equity if a ${r} makes a recording error that is never corrected.`,
      `${cap(f)} requires assets to equal liabilities plus equity; a ${r} would correct any error rather than accept a permanent imbalance.`,
    );
    add(
      `Under ${f}, a ${r} classifies assets as non-current based on their cost rather than their expected period of use.`,
      `${cap(f)} classifies assets as non-current based on expected period of use, not cost.`,
    );
    add(
      `Under ${f}, a ${r} classifies stock expected to sell within weeks as a non-current asset.`,
      `${cap(f)} classifies quickly-selling stock, as a ${r} would track it, as a current asset.`,
    );
    add(
      `Under ${f}, a ${r} would record amounts owed to suppliers as a non-current liability regardless of when payment is due.`,
      `${cap(f)} places supplier amounts within current liabilities when due within a year, as a ${r} would record.`,
    );
    add(
      `Under ${f}, a ${r} would record a loan due next month as a non-current liability because loans are always long-term.`,
      `${cap(f)} places a loan due within a year in current liabilities, as a ${r} would record it, regardless of the loan's original term.`,
    );
    add(
      `Under ${f}, equity is viewed as financing that must be repaid on a fixed date, just like a loan a ${r} might arrange.`,
      `${cap(f)} distinguishes equity from a loan a ${r} might arrange precisely because equity carries no fixed repayment date.`,
    );
    add(
      `Under ${f}, a ${r} calculates the equity ratio by dividing total liabilities by total equity.`,
      `${cap(f)} defines the equity ratio as equity divided by total assets, not liabilities divided by equity, as a ${r} would calculate it.`,
    );
    add(
      `Under ${f}, a ${r} would classify an intangible item such as a licence among current assets because it has no physical form to store.`,
      `${cap(f)} groups intangible items like licences within non-current assets despite lacking physical form, as a ${r} would record them.`,
    );
  }

  if (pool.length < 149) throw new Error(`FALSE pool only ${pool.length}, need at least 149`);
  return pool;
}

const TRUE = buildTruePool();
const FALSE = buildFalsePool();

console.log("Pools:", TRUE.length, "TRUE,", FALSE.length, "FALSE");

const cases = buildCases({
  subsection: "6.1",
  slots,
  TRUE,
  FALSE,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
