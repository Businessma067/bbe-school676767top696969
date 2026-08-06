/**
 * Generate scripts/ch6-part-6.1-text.json — textual Full Course cases for
 * Chapter 6 subsection 6.1 "What a balance sheet is".
 *
 * Scope (moderate formula weight): the balance sheet equation, current vs
 * non-current assets and liabilities, tangible vs intangible assets, equity,
 * the equity ratio, and classification by intended use (dealer stock vs a
 * fixed asset used in operations). No parenthetical formula hints.
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

// ---------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------

const SCENE = [
  "Consider a stationery wholesaler that keeps boxed printers as stock for sale while relying on its own office printer for internal paperwork. Evaluate the following economic assertions:",
  "Consider a boatyard that owns its lifting crane for hauling vessels while holding a range of outboard motors as stock awaiting sale. Evaluate the following economic assertions:",
  "Consider a coffee roastery that owns its roasting drum for daily production while purchasing green coffee beans on credit from an overseas supplier. Evaluate the following economic assertions:",
  "Consider a textile manufacturer that owns its weaving looms outright while financing a new dyeing plant with a long-term bank loan. Evaluate the following economic assertions:",
  "Consider a bicycle shop that displays bicycles for sale in its window while using its own cargo bike to run local deliveries. Evaluate the following economic assertions:",
  "Consider a brewery that owns its fermentation tanks for production while carrying an overdraft to smooth out seasonal demand. Evaluate the following economic assertions:",
  "Consider an orchard business that owns tractors for cultivation while holding harvested fruit in cold storage awaiting sale. Evaluate the following economic assertions:",
  "Consider a media company that holds broadcasting rights on its programming while renting the studio space it films in. Evaluate the following economic assertions:",
  "Consider a resort operator that owns its buildings and pool equipment while settling supplier invoices for food and linen on short-term credit. Evaluate the following economic assertions:",
  "Consider a haulage operator that owns its own trailers while carrying bonds issued to fund a new maintenance depot. Evaluate the following economic assertions:",
  "Consider a metalworking firm that owns specialised cutting equipment while also holding raw steel awaiting use in customer orders. Evaluate the following economic assertions:",
  "Consider a franchise café operator that owns its franchise agreement outright while making monthly payments on a four-year equipment loan. Evaluate the following economic assertions:",
  "Consider a nursery business that owns its greenhouses while holding young plants as stock ready for sale to landscapers. Evaluate the following economic assertions:",
  "Consider a courier firm that owns its sorting equipment while carrying a debenture issued to fund a new depot. Evaluate the following economic assertions:",
  "Consider a dairy processor that owns its pasteurising equipment while owing suppliers for recently delivered packaging materials. Evaluate the following economic assertions:",
  "Consider a mobile app developer that owns a valuable trading platform while leasing its office hardware under a long-term arrangement. Evaluate the following economic assertions:",
  "Consider a homeware chain that owns its shop fittings while holding seasonal stock as inventory awaiting the next selling period. Evaluate the following economic assertions:",
  "Consider a component manufacturer that owns its factory building outright while financing new tooling through a long-term bank loan. Evaluate the following economic assertions:",
  "Consider a private clinic that owns its diagnostic scanners while settling invoices from medical suppliers on standard credit terms. Evaluate the following economic assertions:",
  "Consider a hardware wholesaler that holds fasteners as stock for resale while using its own computers to manage orders and accounts. Evaluate the following economic assertions:",
];

const THEORY = [
  "Analyze how the balance sheet equation requires total assets to equal the sum of total liabilities and total equity. Evaluate the following economic assertions:",
  "Review how owner's equity is derived as the residual claim remaining once liabilities are deducted from assets. Evaluate the following economic assertions:",
  "Analyze the distinction drawn between non-current assets and current assets based on expected holding period. Evaluate the following economic assertions:",
  "Review why non-current assets are expected to deliver benefit to a business for more than one year. Evaluate the following economic assertions:",
  "Analyze why current assets are expected to convert into cash within the normal operating cycle. Evaluate the following economic assertions:",
  "Review how tangible non-current assets differ from intangible non-current assets in physical form. Evaluate the following economic assertions:",
  "Analyze how intangible assets qualify as non-current assets despite lacking physical substance. Evaluate the following economic assertions:",
  "Review how buildings, machinery and office equipment are classified as tangible non-current assets. Evaluate the following economic assertions:",
  "Analyze how inventory, trade receivables and cash are classified among current assets. Evaluate the following economic assertions:",
  "Review why an identical physical item can be a non-current asset for one holder and inventory for another. Evaluate the following economic assertions:",
  "Analyze how intended use rather than resale intent determines an asset's balance sheet classification. Evaluate the following economic assertions:",
  "Review the distinction between current liabilities and non-current liabilities based on settlement timing. Evaluate the following economic assertions:",
  "Analyze why amounts owed to suppliers are classified as a current liability. Evaluate the following economic assertions:",
  "Review why long-term bank loans and corporate bonds are classified as non-current liabilities. Evaluate the following economic assertions:",
  "Analyze how the equity ratio expresses total equity as a proportion of total assets. Evaluate the following economic assertions:",
  "Review why a higher equity ratio indicates greater financial independence from creditors. Evaluate the following economic assertions:",
  "Analyze why equity does not require repayment on a fixed schedule, unlike borrowed funds. Evaluate the following economic assertions:",
  "Review how equity acts as a buffer that absorbs losses before creditors are affected. Evaluate the following economic assertions:",
  "Analyze how an asset swap leaves the balance sheet equation unchanged. Evaluate the following economic assertions:",
  "Review how a credit purchase increases an asset and a liability at the same time. Evaluate the following economic assertions:",
  "Analyze the difference between a cash purchase and a credit purchase in their effect on the balance sheet. Evaluate the following economic assertions:",
  "Review how reclassifying an asset from resale stock to operational use changes its balance sheet category. Evaluate the following economic assertions:",
  "Analyze how a dealer's stock differs from an operating business's equipment when both hold an identical item. Evaluate the following economic assertions:",
  "Review why settlement timing, rather than the size of a debt, determines its current or non-current classification. Evaluate the following economic assertions:",
  "Analyze how partial repayment due within a year moves part of a long-term loan into current liabilities. Evaluate the following economic assertions:",
  "Review how a business's equity ratio changes when new equity is raised from its owners. Evaluate the following economic assertions:",
  "Analyze how a business's equity ratio changes when additional debt is taken on without new equity. Evaluate the following economic assertions:",
  "Review why the balance sheet reports figures at a single point in time rather than over a period. Evaluate the following economic assertions:",
  "Analyze how total equity and liabilities together must equal total assets. Evaluate the following economic assertions:",
  "Review why physical form is not a requirement for an item to qualify as a non-current asset. Evaluate the following economic assertions:",
  "Analyze how the operating cycle helps define which assets are classified as current. Evaluate the following economic assertions:",
  "Review the benefit-period concept underlying non-current asset classification. Evaluate the following economic assertions:",
  "Analyze how amounts owed to suppliers arise from receiving goods or services before paying for them. Evaluate the following economic assertions:",
  "Review how comparing amounts owed to suppliers with amounts owed by customers reveals net short-term obligations. Evaluate the following economic assertions:",
  "Analyze how a vehicle can be a fixed asset for one business and inventory for a dealer. Evaluate the following economic assertions:",
  "Review how a piece of equipment used in daily operations differs in classification from an identical item held for resale. Evaluate the following economic assertions:",
  "Analyze how a licence held for long-term use is classified as an intangible non-current asset. Evaluate the following economic assertions:",
  "Review how a customer relationship acquired in a takeover can be recognised as an intangible non-current asset. Evaluate the following economic assertions:",
  "Analyze how a mortgage on business premises is classified as a non-current liability. Evaluate the following economic assertions:",
  "Review how a bank overdraft is classified as a current liability. Evaluate the following economic assertions:",
  "Analyze how wages payable to employees are classified as a current liability. Evaluate the following economic assertions:",
  "Review how tax payable to the authorities is classified as a current liability. Evaluate the following economic assertions:",
  "Analyze how a lease liability's classification depends on its settlement timing. Evaluate the following economic assertions:",
  "Review how a manufacturing firm's balance sheet reflects both fixed assets and working capital items. Evaluate the following economic assertions:",
  "Analyze how a retail chain's balance sheet separates fixed shop fittings from seasonal inventory. Evaluate the following economic assertions:",
  "Review how equity contributions differ from borrowed funds in their effect on a business's balance sheet structure. Evaluate the following economic assertions:",
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
  "Licences as Intangible Assets",
  "Trading Rights on the Balance Sheet",
  "Buildings and Machinery as Fixed Assets",
  "Office Equipment as a Fixed Asset",
  "Equipment for Use Versus Resale",
  "Inventory as a Current Asset",
  "Trade Receivables Explained",
  "Cash and Cash Equivalents",
  "Current Liabilities Overview",
  "Non-Current Liabilities Overview",
  "Amounts Owed to Suppliers",
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
  "Dealer Stock Versus Operating Assets",
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
  "Supplier Credit and Payables",
  "Comparing Payables and Receivables",
  "Vehicles as Fixed or Resale Assets",
  "Cranes in Fixed Versus Current Assets",
  "Ovens Held for Use or Sale",
  "Looms and Asset Classification",
  "Tanks as Operating Equipment",
  "Tractors in Farm Business Balance Sheets",
  "Scanners as Fixed Assets",
  "Printers for Office Use",
  "Delivery Vehicles as Non-Current Assets",
  "Franchise Agreements as Intangibles",
  "Operating Licences on the Balance Sheet",
  "Distribution Rights Explained",
  "Customer Relationships From Acquisitions",
  "Broadcasting Rights as an Intangible Asset",
  "Software Platforms and Long-Term Value",
  "Mortgages as Non-Current Liabilities",
  "Term Loans and Settlement Dates",
  "Overdrafts as Current Liabilities",
  "Wages Payable and Settlement Timing",
  "Tax Payable as a Current Obligation",
  "Lease Liabilities and Classification",
  "Manufacturing Firms and Fixed Assets",
  "Retail Chains and Inventory Classification",
  "Haulage Operators and Vehicle Assets",
  "Civil Engineering Contractors and Equipment",
  "Resorts and Non-Current Asset Bases",
  "Clinics and Balance Sheet Structure",
  "Process Firms and Loan Classification",
  "Beverage Producers and Working Assets",
  "Courier Firms and Debt Structure",
  "Equity Contributions Versus Borrowed Funds",
  "Closing Review of Balance Sheet Basics",
];

const sceneIndices = [];

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

  const tangibleItems = [
    "pallet loader",
    "industrial dishwasher",
    "warehouse crane",
    "delivery scooter",
    "packaging line",
    "concrete mixer",
    "laptop computer",
    "refrigerated van",
    "woodworking lathe",
    "espresso machine",
    "printing press",
    "conveyor belt",
  ];
  const opUse = "an operating business";
  const resaleUse = "a dealer for resale to customers";

  for (const item of tangibleItems) {
    add(
      `${art(item)} ${item} kept in service by ${opUse} for more than one year is classified as a non-current tangible asset.`,
      `Continued operational use beyond one year makes the ${item} a non-current tangible asset.`,
    );
    add(
      `${art(item)} ${item} held by ${resaleUse} is classified as inventory, a current asset, rather than a non-current asset.`,
      `Held for resale rather than use, the ${item} counts as inventory within current assets.`,
    );
    add(
      `The same ${item} may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.`,
      `Intended use versus resale intent, not physical form, decides whether the ${item} is non-current or current.`,
    );
    add(
      `Classifying ${artLower(item)} ${item} as a non-current asset depends on management's intention to use it in operations rather than to sell it quickly.`,
      `An intention to use the ${item} over the long term is the deciding factor for non-current classification.`,
    );
    add(
      `When ${artLower(item)} ${item} is acquired to be resold rather than used, it belongs among current assets as inventory.`,
      `Resale intent places the ${item} in inventory, a current-asset category.`,
    );
    add(
      `${art(item)} ${item} bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.`,
      `Multi-period operational benefit qualifies the ${item} as a tangible fixed asset.`,
    );
    add(
      `${art(item)} ${item} that a dealer displays for sale is not a fixed asset of that dealer.`,
      `Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.`,
    );
  }

  const intangibleItems = [
    "operating licence",
    "brand name",
    "registered design",
    "development patent",
    "trading permit",
    "service mark",
    "proprietary formula",
    "concession right",
    "exclusive distribution agreement",
    "software platform licence",
  ];
  for (const item of intangibleItems) {
    add(
      `${art(item)} ${item} lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.`,
      `Long-term expected benefit, not physical form, justifies classifying ${artLower(item)} ${item} as non-current.`,
    );
    add(
      `Although ${artLower(item)} ${item} cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.`,
      `Long-term value places an intangible ${item} among non-current rather than current assets.`,
    );
    add(
      `${art(item)} ${item} is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.`,
      `Intangible and tangible non-current assets, including ${artLower(item)} ${item}, sit within the same balance sheet section.`,
    );
    add(
      `The absence of physical form does not prevent ${artLower(item)} ${item} from being classified as a non-current asset.`,
      `Physical form is not a requirement for classifying ${artLower(item)} ${item} as non-current.`,
    );
    add(
      `${art(item)} ${item} acquired to protect or support a business's operations over several years is grouped with intangible non-current assets.`,
      `Multi-year protective or operational value groups ${artLower(item)} ${item} with intangible non-current assets.`,
    );
    add(
      `${art(item)} ${item} is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.`,
      `Because ${artLower(item)} ${item} is not expected to convert into cash within the operating cycle, it is excluded from current assets.`,
    );
  }

  const nonCurrentLiab = [
    "ten-year bank loan",
    "corporate debenture",
    "premises mortgage",
    "seven-year term loan",
    "long-term finance lease",
  ];
  const currentLiab = [
    "supplier balances",
    "overdraft borrowings",
    "short-term bank borrowings",
    "employee wages",
    "corporation tax liabilities",
  ];
  const liabBiz = [
    "packaging manufacturer",
    "clothing retailer",
    "freight company",
    "civil engineering contractor",
    "cloud software provider",
    "private clinic",
    "resort operator",
    "process engineering firm",
    "beverage producer",
    "haulage operator",
  ];
  for (let i = 0; i < liabBiz.length; i++) {
    const ncl = nonCurrentLiab[i % nonCurrentLiab.length];
    const cl = currentLiab[i % currentLiab.length];
    const biz = liabBiz[i];
    add(
      `${art(biz)} ${biz} that takes out ${artLower(ncl)} ${ncl} repayable in more than one year classifies the obligation as a non-current liability.`,
      `Repayment due beyond one year places the ${ncl} among the non-current liabilities of ${artLower(biz)} ${biz}.`,
    );
    add(
      `${art(biz)} ${biz} that owes ${cl} due within the next year classifies the obligation as a current liability.`,
      `Settlement within one year places the ${cl} among the current liabilities of ${artLower(biz)} ${biz}.`,
    );
    add(
      `For ${artLower(biz)} ${biz}, ${artLower(ncl)} ${ncl} appears separately from current liabilities because it falls due after more than one year.`,
      `A longer settlement horizon separates the ${ncl} from the current liabilities of ${artLower(biz)} ${biz}.`,
    );
    add(
      `For ${artLower(biz)} ${biz}, the ${cl} appear within current liabilities because settlement is expected within one year.`,
      `A short settlement horizon places the ${cl} within the current liabilities of ${artLower(biz)} ${biz}.`,
    );
    add(
      `${art(ncl)} ${ncl} owed by ${artLower(biz)} ${biz} does not increase current liabilities because it is not due within the coming year.`,
      `Because the ${ncl} of ${artLower(biz)} ${biz} is not due within a year, it stays outside current liabilities.`,
    );
    add(
      `If part of ${artLower(biz)} ${biz}'s ${ncl} becomes due within the next twelve months, that portion should move into current liabilities.`,
      `A ${ncl} nearing its due date within a year has that portion reclassified into current liabilities for ${artLower(biz)} ${biz}.`,
    );
  }

  const equityBiz = [
    "family-run enterprise",
    "publicly traded corporation",
    "boutique manufacturer",
    "early-stage venture",
    "member-owned cooperative",
    "professional partnership",
    "recently incorporated trader",
    "overseas subsidiary",
    "credit-union-financed firm",
    "venture-capital-backed company",
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
      `Because equity does not need to be repaid on a fixed schedule, a ${biz2} that relies more on equity faces less repayment pressure than one relying mainly on debt.`,
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
      `Added debt without new equity raises the share of assets financed by liabilities, lowering a ${biz2}'s equity ratio.`,
    );
  }

  const trueSpecific = [
    [
      "A balance sheet reports total assets, total liabilities and total equity as at a specific date rather than over a period.",
      "The balance sheet is a snapshot at one point in time, unlike the income statement, which covers a period.",
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
      "When a business acquires inventory for cash, total assets remain unchanged because one asset simply replaces another.",
      "Cash falls while inventory rises by the same amount, leaving total assets unaffected.",
    ],
    [
      "When a business acquires equipment on credit, both total assets and total liabilities increase by the purchase amount.",
      "An asset increase funded by a payable raises both sides of the balance sheet equally.",
    ],
    [
      "An asset swap, such as exchanging cash for equipment, keeps the balance sheet in balance without changing total liabilities or equity.",
      "Swapping one asset for another of equal value leaves total assets, and the balance sheet equation, unchanged.",
    ],
    [
      "A credit purchase increases a liability such as amounts owed to suppliers at the same time as it increases an asset.",
      "Recording a credit purchase requires a matching increase in an asset and a liability to keep the balance sheet balanced.",
    ],
    [
      "Amounts owed to suppliers typically arise when a business receives goods or services before paying for them.",
      "This liability reflects the timing gap between receiving goods and paying suppliers.",
    ],
    [
      "A business that owes suppliers more than its customers owe it has a net short-term obligation to suppliers.",
      "Comparing what is owed to suppliers with what is owed by customers reveals net short-term obligations.",
    ],
    [
      "Non-current liabilities include obligations such as long-term loans that will not be settled within the next twelve months.",
      "A settlement date beyond one year is the defining feature of non-current liabilities.",
    ],
    [
      "Current liabilities include obligations such as amounts owed to suppliers and bank overdrafts due within the next twelve months.",
      "Current liabilities share a settlement horizon of roughly one year or less.",
    ],
    [
      "The equity ratio expresses total equity as a proportion of total assets.",
      "Equity ratio shows how much of the assets a business owns outright rather than through borrowing.",
    ],
    [
      "A business financed mostly by equity is generally considered less risky for lenders than one financed mostly by debt.",
      "Higher equity financing gives lenders more of a cushion before losses reach them.",
    ],
    [
      "Because equity holders bear losses ahead of creditors, equity is often described as a buffer that protects lenders.",
      "This buffering role is one reason equity matters to a business's financial structure.",
    ],
    [
      "A patent is an intangible non-current asset because it grants long-term exclusive rights without physical form.",
      "Patents provide long-term legal protection and value despite lacking physical substance.",
    ],
    [
      "A brand name can appear on a balance sheet as an intangible non-current asset when it has been acquired or otherwise recognised.",
      "Brand names with recognised value are recorded among intangible non-current assets.",
    ],
    [
      "Buildings and machinery used in a business's own operations are examples of tangible non-current assets.",
      "Physical items retained for continued operational use are classic tangible non-current assets.",
    ],
    [
      "A business that both owns machinery for production and holds unsold goods for sale will show items in both non-current and current assets.",
      "Non-current assets such as machinery and current assets such as inventory can coexist on the same balance sheet.",
    ],
    [
      "Total equity and liabilities on a balance sheet always equal total assets, reflecting how the business's resources were financed.",
      "This equality shows that every asset is financed either by equity or by liabilities.",
    ],
    [
      "A laptop bought by an accounting firm for staff use is a non-current asset, while an identical laptop bought by an electronics retailer for resale is inventory.",
      "Intended use versus resale intent explains why identical laptops can sit in different balance sheet categories.",
    ],
    [
      "A business that reclassifies an asset from stock held for resale to equipment used in operations moves its value from current to non-current assets.",
      "A change in intended use, from resale to operational use, shifts the asset out of inventory and into non-current assets.",
    ],
  ];
  for (const [s, e] of trueSpecific) add(s, e);

  const fillers = [
    "entry-level accounting",
    "core balance sheet doctrine",
    "the standard classification framework",
    "basic asset and liability theory",
    "elementary financial reporting rules",
    "principal balance sheet guidance",
    "fundamental ledger classification",
    "primary accounting vocabulary",
    "opening balance sheet concepts",
    "essential accounting-equation theory",
  ];
  const roles = [
    "reporting accountant",
    "finance assistant",
    "owner-manager",
    "chief financial officer",
    "ledger clerk",
    "collections officer",
    "stores supervisor",
    "purchasing manager",
    "site accountant",
    "cash-flow analyst",
  ];
  for (let i = 0; i < fillers.length; i++) {
    const f = fillers[i];
    const r = roles[i];
    add(
      `Under ${f}, total assets must equal total liabilities plus total equity at every balance sheet date.`,
      `${cap(f)} treats the balance sheet equation as holding at every reporting date.`,
    );
    add(
      `Under ${f}, assets expected to remain in use beyond one year, such as those tracked by a ${r}, are classified as non-current.`,
      `${cap(f)} classifies long-term-use assets, including those tracked by a ${r}, as non-current.`,
    );
    add(
      `Under ${f}, assets expected to convert into cash within the operating cycle, such as stock tracked by a ${r}, are classified as current.`,
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
      `Under ${f}, a ${r} would classify an intangible item such as a licence among non-current assets despite its lack of physical form.`,
      `${cap(f)} groups intangible items such as licences, as a ${r} would record them, within non-current assets.`,
    );
  }

  if (pool.length < 170) throw new Error(`TRUE pool only ${pool.length}, need at least 170`);
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

  const tangibleItems = [
    "pallet loader",
    "industrial dishwasher",
    "warehouse crane",
    "delivery scooter",
    "packaging line",
    "concrete mixer",
    "laptop computer",
    "refrigerated van",
    "woodworking lathe",
    "espresso machine",
    "printing press",
    "conveyor belt",
  ];
  const opUse = "an operating business";
  const resaleUse = "a dealer for resale to customers";

  for (const item of tangibleItems) {
    add(
      `${art(item)} ${item} used by ${opUse} is classified as inventory because inventory can include any physical equipment a business owns.`,
      `Long-term operational use makes the ${item} a non-current tangible asset, not inventory.`,
    );
    add(
      `${art(item)} ${item} held by ${resaleUse} is classified as a non-current asset because the dealer is a business rather than a household.`,
      `Resale intent, not the dealer's status as a business, places the ${item} in inventory rather than among non-current assets.`,
    );
    add(
      `The same ${item} must always be classified identically on every balance sheet regardless of how it is held.`,
      `Classification of the ${item} depends on whether it is used or held for resale, so identical items can differ across balance sheets.`,
    );
    add(
      `Classifying ${artLower(item)} ${item} as a non-current asset depends mainly on its purchase price rather than on management's intended use.`,
      `Intended use, not purchase price, drives the non-current classification of the ${item}.`,
    );
    add(
      `${art(item)} ${item} acquired for resale still counts among non-current assets as long as it remains unsold for several months.`,
      `Resale intent keeps the ${item} in inventory as a current asset regardless of how long it stays unsold.`,
    );
    add(
      `${art(item)} ${item} used daily in a business's own operations should be recorded as inventory because it wears out over time.`,
      `Continued operational use makes the ${item} a non-current asset; inventory is reserved for goods held for resale.`,
    );
    add(
      `Once a dealer sells ${artLower(item)} ${item} from its stock, the buyer must continue to record it as inventory.`,
      `A buyer intending to use the ${item} in operations records it as a non-current asset, not inventory, after purchase.`,
    );
  }

  const intangibleItems = [
    "operating licence",
    "brand name",
    "registered design",
    "development patent",
    "trading permit",
    "service mark",
    "proprietary formula",
    "concession right",
    "exclusive distribution agreement",
    "software platform licence",
  ];
  for (const item of intangibleItems) {
    add(
      `${art(item)} ${item} is excluded from non-current assets because it has no physical substance.`,
      `Physical substance is not required for non-current classification; ${artLower(item)} ${item} qualifies through its long-term value.`,
    );
    add(
      `${art(item)} ${item} is classified as a current asset because, being intangible, it is easily converted into cash within a year.`,
      `${art(item)} ${item} is a non-current intangible asset because it provides benefit over several years, not because it converts to cash quickly.`,
    );
    add(
      `Because ${artLower(item)} ${item} cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet.`,
      `${art(item)} ${item} with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.`,
    );
    add(
      `Non-current assets can never include ${artLower(item)} ${item} because that section is reserved strictly for tangible items such as machinery.`,
      `The non-current assets section includes intangible items such as ${artLower(item)} ${item} alongside tangible assets.`,
    );
    add(
      `${art(item)} ${item} is treated as inventory because it is intended for use rather than for display.`,
      `Long-term exclusive use, not physical display, places ${artLower(item)} ${item} among non-current intangible assets, not inventory.`,
    );
    add(
      `${art(item)} ${item} loses its non-current classification as soon as the business begins actively using it.`,
      `Active use does not remove ${artLower(item)} ${item}'s non-current classification; it confirms the long-term benefit that justifies it.`,
    );
  }

  const nonCurrentLiab = [
    "ten-year bank loan",
    "corporate debenture",
    "premises mortgage",
    "seven-year term loan",
    "long-term finance lease",
  ];
  const currentLiab = [
    "supplier balances",
    "overdraft borrowings",
    "short-term bank borrowings",
    "employee wages",
    "corporation tax liabilities",
  ];
  const liabBiz = [
    "packaging manufacturer",
    "clothing retailer",
    "freight company",
    "civil engineering contractor",
    "cloud software provider",
    "private clinic",
    "resort operator",
    "process engineering firm",
    "beverage producer",
    "haulage operator",
  ];
  for (let i = 0; i < liabBiz.length; i++) {
    const ncl = nonCurrentLiab[i % nonCurrentLiab.length];
    const cl = currentLiab[i % currentLiab.length];
    const biz = liabBiz[i];
    add(
      `${art(biz)} ${biz} classifies ${artLower(ncl)} ${ncl} as a current liability because the total amount owed is large.`,
      `Settlement timing, not the size of the debt, determines that the ${ncl} of ${artLower(biz)} ${biz} is non-current.`,
    );
    add(
      `${art(biz)} ${biz} classifies ${cl} as a non-current liability because suppliers are long-term business partners.`,
      `${cap(cl)} are current liabilities for ${artLower(biz)} ${biz} because settlement is expected within one year, regardless of relationship length.`,
    );
    add(
      `${art(ncl)} ${ncl} owed by ${artLower(biz)} ${biz} is included in current liabilities because interest on it is paid every year.`,
      `Annual interest payments do not make the ${ncl} of ${artLower(biz)} ${biz} current; only the principal's settlement date within one year would.`,
    );
    add(
      `${cap(cl)} owed by ${artLower(biz)} ${biz} are excluded from current liabilities as long as the business intends to negotiate an extension.`,
      `Intention to negotiate does not change the classification of the ${cl} for ${artLower(biz)} ${biz}; the agreed settlement date does.`,
    );
    add(
      `${art(biz)} ${biz} cannot report both ${artLower(ncl)} ${ncl} and ${cl} on the same balance sheet at the same time.`,
      `${art(biz)} ${biz} may report ${artLower(ncl)} ${ncl} under non-current liabilities and ${cl} under current liabilities simultaneously.`,
    );
    add(
      `${art(ncl)} ${ncl} automatically becomes a current liability for ${artLower(biz)} ${biz} once any portion of it has been repaid.`,
      `Partial repayment does not reclassify the remaining ${ncl} of ${artLower(biz)} ${biz}; only the portion due within a year moves to current liabilities.`,
    );
  }

  const equityBiz = [
    "family-run enterprise",
    "publicly traded corporation",
    "boutique manufacturer",
    "early-stage venture",
    "member-owned cooperative",
    "professional partnership",
    "recently incorporated trader",
    "overseas subsidiary",
    "credit-union-financed firm",
    "venture-capital-backed company",
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
      `Additional debt without new equity lowers a ${biz2}'s equity ratio, since liabilities rise relative to equity.`,
    );
    add(
      `Creditors of a ${biz2} absorb losses before the owners' equity is affected.`,
      `Owners' equity of a ${biz2} absorbs losses before creditors are affected, acting as a buffer for lenders.`,
    );
    add(
      `A low equity ratio for a ${biz2} signals greater financial independence from external lenders.`,
      `A low equity ratio for a ${biz2} signals greater reliance on external financing, not greater independence.`,
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
      "When a business acquires inventory for cash, total assets increase because inventory has been added.",
      "Cash falls by the same amount inventory rises, so total assets stay unchanged in a straightforward asset swap.",
    ],
    [
      "When a business acquires equipment on credit, only total assets increase while liabilities stay the same.",
      "A credit purchase increases both an asset and a liability such as amounts owed to suppliers, not assets alone.",
    ],
    [
      "An asset swap increases total liabilities because one of the assets involved must have been financed by borrowing.",
      "An asset swap simply exchanges one asset for another of equal value and does not by itself change liabilities.",
    ],
    [
      "A credit purchase increases an asset without affecting any liability because payment is deferred.",
      "Deferring payment creates a liability such as amounts owed to suppliers, which rises alongside the asset.",
    ],
    [
      "Amounts owed to suppliers arise when a business pays a supplier in cash immediately upon delivery.",
      "This liability arises from buying on credit, not from immediate cash payment.",
    ],
    [
      "A business that owes suppliers less than its customers owe it has a net short-term obligation to suppliers.",
      "If customers owe more than is owed to suppliers, the net short-term position favours the business, not its suppliers.",
    ],
    [
      "Non-current liabilities are amounts a business must settle within the next twelve months.",
      "Non-current liabilities are due after more than one year; obligations due within a year are current liabilities.",
    ],
    [
      "Amounts owed to suppliers are classified as a non-current liability because supplier relationships often last for many years.",
      "This liability is current because individual invoices are normally settled within a short period, regardless of relationship length.",
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
      "A brand name cannot appear on a balance sheet because its value is too subjective to record.",
      "Brand names with recognised value can be recorded as intangible non-current assets.",
    ],
    [
      "Buildings and machinery used in a business's own operations are examples of current assets because they support ongoing activity.",
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
      "A laptop bought by an accounting firm for staff use and an identical laptop bought by an electronics retailer for resale must both be classified as non-current assets.",
      "The accounting firm's laptop is a non-current asset, while the retailer's identical laptop held for resale is inventory, a current asset.",
    ],
    [
      "A business that reclassifies an asset from stock held for resale to equipment used in operations keeps the item permanently within current assets.",
      "A change in intended use, from resale to operational use, shifts the asset out of inventory and into non-current assets.",
    ],
  ];
  for (const [s, e] of falseSpecific) add(s, e);

  const fillers = [
    "entry-level accounting",
    "core balance sheet doctrine",
    "the standard classification framework",
    "basic asset and liability theory",
    "elementary financial reporting rules",
    "principal balance sheet guidance",
    "fundamental ledger classification",
    "primary accounting vocabulary",
    "opening balance sheet concepts",
    "essential accounting-equation theory",
  ];
  const roles = [
    "reporting accountant",
    "finance assistant",
    "owner-manager",
    "chief financial officer",
    "ledger clerk",
    "collections officer",
    "stores supervisor",
    "purchasing manager",
    "site accountant",
    "cash-flow analyst",
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
      `Under ${f}, a ${r} would classify an intangible item such as a licence among current assets because it has no physical form to store.`,
      `${cap(f)} groups intangible items such as licences within non-current assets despite their lack of physical form, as a ${r} would record them.`,
    );
  }

  if (pool.length < 120) throw new Error(`FALSE pool only ${pool.length}, need at least 120`);
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
