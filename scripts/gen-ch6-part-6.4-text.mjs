/**
 * Generate scripts/ch6-part-6.4-text.json — 75 textual cases for subsection 6.4.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.4"].filter(
  (s) => s.half === "text",
);
const OUT = "scripts/ch6-part-6.4-text.json";

const SCENE = [
  "Consider a regional manufacturer whose plant managers receive monthly cost breakdowns while shareholders read the published annual report. Evaluate the following economic assertions:",
  "Consider a retail chain whose finance team prepares internal margin reports weekly while lenders review its statutory balance sheet. Evaluate the following economic assertions:",
  "Consider a construction firm whose site supervisors track project spending daily while tax authorities receive its filed financial statements. Evaluate the following economic assertions:",
  "Consider a software company whose product managers review contribution figures while investors study its published income statement. Evaluate the following economic assertions:",
  "Consider a hospital trust whose ward managers monitor departmental budgets while suppliers assess its creditworthiness from public accounts. Evaluate the following economic assertions:",
  "Consider a logistics operator whose depot managers receive fuel-cost summaries while bondholders read its audited annual report. Evaluate the following economic assertions:",
  "Consider a restaurant group whose head chefs see food-cost percentages while banks review its statutory filings. Evaluate the following economic assertions:",
  "Consider an engineering consultancy whose partners decide pricing using internal job-cost records while clients never see those internal schedules. Evaluate the following economic assertions:",
  "Consider a pharmacy chain whose store managers track shrinkage while the media comment on its published profit figure. Evaluate the following economic assertions:",
  "Consider a farming cooperative whose field managers monitor input costs while members receive a simplified annual summary. Evaluate the following economic assertions:",
  "Consider a fitness-club operator whose regional managers review membership revenue splits while auditors test its published accounts. Evaluate the following economic assertions:",
  "Consider a publishing house whose editors see print-run cost estimates while shareholders focus on the statutory profit and loss account. Evaluate the following economic assertions:",
  "Consider a vehicle-leasing company whose fleet managers track maintenance spend while regulators inspect its filed financial statements. Evaluate the following economic assertions:",
  "Consider a textile exporter whose production planners review yarn costs while overseas buyers request its latest balance sheet. Evaluate the following economic assertions:",
  "Consider a dental practice group whose clinic leads review chair-time profitability while lenders study its annual accounts. Evaluate the following economic assertions:",
  "Consider a renewable-energy installer whose project managers track labour hours while investors read its published results. Evaluate the following economic assertions:",
  "Consider a catering firm whose event coordinators see per-menu cost sheets while tax officials receive its statutory returns. Evaluate the following economic assertions:",
  "Consider a property-management company whose building supervisors track repair invoices while owners read the consolidated financial report. Evaluate the following economic assertions:",
  "Consider a craft brewery whose brewmasters monitor ingredient usage while competitors study its publicly filed statements. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how financial accounting information is prepared primarily for external users such as owners, lenders and tax authorities. Evaluate the following economic assertions:",
  "Analyze how management accounting information supports internal planning and control decisions within a business. Evaluate the following economic assertions:",
  "Review the distinction between users inside a business and users outside it when accounts are prepared. Evaluate the following economic assertions:",
  "Analyze why owners may care about return on their investment relative to the risk they bear. Evaluate the following economic assertions:",
  "Review how managers use accounting data to decide whether to cut costs in a particular department. Evaluate the following economic assertions:",
  "Analyze how managers may use cost information to set prices for products or services. Evaluate the following economic assertions:",
  "Review why employees may be interested in whether a business is thriving when they read internal summaries. Evaluate the following economic assertions:",
  "Analyze why suppliers may study a customer's published accounts before extending trade credit. Evaluate the following economic assertions:",
  "Review why competitors may examine publicly available financial statements of rival firms. Evaluate the following economic assertions:",
  "Analyze why investors compare published profit with the capital they have committed to a business. Evaluate the following economic assertions:",
  "Review how tax authorities rely on financial accounting records to assess tax liabilities. Evaluate the following economic assertions:",
  "Analyze why management accounting reports are not usually bound to the same legal presentation rules as published financial statements. Evaluate the following economic assertions:",
  "Review how financial accounting focuses on the balance sheet and income statement in forms suitable for external reporting. Evaluate the following economic assertions:",
  "Analyze why management accounting may be prepared monthly or weekly rather than only once a year. Evaluate the following economic assertions:",
  "Review the role of auditing in checking whether published accounts present a true and fair view. Evaluate the following economic assertions:",
  "Analyze how an independent auditing firm examines evidence supporting the figures in an annual report. Evaluate the following economic assertions:",
  "Review why auditing results are disclosed within or alongside the annual report of larger companies. Evaluate the following economic assertions:",
  "Analyze how internal management reports can focus on a single product line or cost centre. Evaluate the following economic assertions:",
  "Review why discontinue-or-continue decisions for a product may rely on management accounting contribution analysis. Evaluate the following economic assertions:",
  "Analyze why published financial statements alone may be too aggregated for day-to-day operational choices. Evaluate the following economic assertions:",
  "Review how depreciation recorded in financial accounts reduces reported profit without an immediate cash payment. Evaluate the following economic assertions:",
  "Analyze why both financial and management accounting can draw on the same underlying transaction records. Evaluate the following economic assertions:",
  "Review how financial accounting must follow recognised accounting standards for external presentation. Evaluate the following economic assertions:",
  "Analyze why management accounting formats can be tailored to the questions managers are asking. Evaluate the following economic assertions:",
  "Review how media coverage sometimes reacts to headline profit figures from published accounts. Evaluate the following economic assertions:",
  "Analyze why lenders focus on solvency and repayment capacity when reading external financial statements. Evaluate the following economic assertions:",
  "Review how owners who are also managers may use both internal and external reports for different purposes. Evaluate the following economic assertions:",
  "Analyze why external users generally cannot access detailed internal cost schedules prepared for managers. Evaluate the following economic assertions:",
  "Review how an annual report bundles financial statements with governance and audit information for outsiders. Evaluate the following economic assertions:",
  "Analyze why management accounting is sometimes described as serving decision-making rather than statutory compliance. Evaluate the following economic assertions:",
  "Review how financial accounting supports accountability to parties who do not manage the business daily. Evaluate the following economic assertions:",
  "Analyze why budgeting and variance analysis are typical management accounting tools rather than statutory requirements. Evaluate the following economic assertions:",
  "Review how segment reports for divisions illustrate the flexibility of management accounting. Evaluate the following economic assertions:",
  "Analyze why tax planning may use financial accounting figures as a starting point for calculations. Evaluate the following economic assertions:",
  "Review how employee representatives may request summary financial information about employer performance. Evaluate the following economic assertions:",
  "Analyze why investors in listed companies depend on audited published accounts for comparability. Evaluate the following economic assertions:",
  "Review how cost-volume-profit thinking belongs to management accounting rather than external reporting. Evaluate the following economic assertions:",
  "Analyze why a business might prepare internal dashboards that never appear in its annual report. Evaluate the following economic assertions:",
  "Review how financial accounting captures transactions in a structured ledger before statements are produced. Evaluate the following economic assertions:",
  "Analyze why management accounting may reallocate shared costs differently from the figures shown externally. Evaluate the following economic assertions:",
  "Review how bookkeepers record transactions that later feed both internal and external reporting. Evaluate the following economic assertions:",
  "Analyze why external stakeholders need trustworthy figures verified by an independent auditor. Evaluate the following economic assertions:",
  "Review how management accounting can highlight which customer contracts are barely covering their variable costs. Evaluate the following economic assertions:",
  "Analyze why financial accounting emphasises the overall financial position rather than individual product margins. Evaluate the following economic assertions:",
  "Review how strategic pricing decisions often combine market information with internal cost data. Evaluate the following economic assertions:",
  "Analyze why published accounts are usually insufficient for deciding how many units to produce next month. Evaluate the following economic assertions:",
  "Review how return relative to risk motivates owners when they judge whether to keep capital in a business. Evaluate the following economic assertions:",
  "Analyze why suppliers worry about a customer's ability to pay invoices when credit terms are offered. Evaluate the following economic assertions:",
  "Review how competitors infer strategic pressure from rivals' published profitability trends. Evaluate the following economic assertions:",
  "Analyze why financial and management accounting are complementary rather than interchangeable. Evaluate the following economic assertions:",
  "Review how auditing adds credibility to figures that external users cannot verify themselves. Evaluate the following economic assertions:",
  "Analyze why internal reports may include non-financial operating measures alongside cost data. Evaluate the following economic assertions:",
  "Review how the annual report channel differs from informal management spreadsheets used inside a firm. Evaluate the following economic assertions:",
  "Analyze why regulatory filing deadlines apply to financial accounting but not to internal management packs. Evaluate the following economic assertions:",
  "Review how managers interpret accounting information when deciding whether marketing spend should be reduced. Evaluate the following economic assertions:",
  "Analyze why external users generally see only the aggregated results of many internal decisions. Evaluate the following economic assertions:",
];

const TITLES = [
  "Financial Accounting and External Users",
  "Management Accounting for Internal Decisions",
  "Owners, Managers and Employees as Users",
  "Suppliers Reading Customer Accounts",
  "Investors and Published Profit",
  "Tax Authorities and Statutory Accounts",
  "Auditing and the Annual Report",
  "Independent Verification of Accounts",
  "Flexible Formats in Management Accounting",
  "Statutory Presentation in Financial Accounting",
  "Frequency of Internal Versus External Reports",
  "Cost Cutting and Departmental Analysis",
  "Pricing Decisions and Internal Costs",
  "Product-Line Contribution Analysis",
  "Discontinue or Continue Decisions",
  "Return Relative to Owner Risk",
  "Lenders and Repayment Capacity",
  "Competitors Studying Public Filings",
  "Media Reaction to Headline Profit",
  "Segment Reporting for Divisions",
  "Budgeting as a Management Tool",
  "Variance Analysis Internally",
  "Bookkeeping and Transaction Records",
  "Ledger Data Feeding Both Report Types",
  "Accounting Standards for External Reports",
  "Dashboards Not in the Annual Report",
  "Cost-Volume-Profit Thinking",
  "Aggregated External Statements",
  "Detailed Internal Cost Schedules",
  "Depreciation in Published Profit",
  "Non-Cash Expenses and Cash Planning",
  "Accountability to Outside Parties",
  "Operational Choices and Internal Data",
  "Strategic Pricing and Cost Data",
  "Employee Interest in Business Health",
  "Governance Disclosures in Annual Reports",
  "Credibility Added by Auditing",
  "Complementary Accounting Systems",
  "Regulatory Deadlines for Filing",
  "Informal Spreadsheets Versus Annual Reports",
  "Marketing Spend and Management Review",
  "Shared Cost Allocation Internally",
  "Customer Contract Profitability",
  "Insufficient Detail in Published Accounts",
  "Listed Company Comparability",
  "Tax Planning Starting From Accounts",
  "Divisional Performance Reports",
  "Weekly Internal Packs Versus Yearly Filings",
  "Evidence Testing by Auditors",
  "True and Fair View in Auditing",
  "Management Accounting and Compliance",
  "Financial Accounting and Decision Timing",
  "Owner-Managers Using Both Report Types",
  "External Users Without Daily Access",
  "Internal Non-Financial Measures",
  "Strategic Inference From Rivals' Profit",
  "Supplier Credit and Customer Solvency",
  "Recording Transactions Accurately",
  "Supporting Documents Behind Entries",
  "Why Auditing Matters to Outsiders",
  "Management Focus on Control",
  "Financial Focus on Stewardship",
  "Pricing Below Full Cost Traps",
  "Contribution Margin Thinking",
  "Annual Report as External Bundle",
  "Internal Reports for Shift Managers",
  "Bank Covenants and Published Figures",
  "Investor Return Expectations",
  "Cutting Costs in Administration",
  "Cutting Costs in Distribution",
  "Product Mix and Internal Margins",
  "External Profit Versus Internal Detail",
  "Audited Figures for Shareholders",
  "Management Packs for Supervisors",
  "Tax Returns From Financial Records",
  "Competitor Benchmarking From Filings",
  "Closing Review of Accounting Uses",
];

const sceneIndices = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 50)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  const externals = [
    "tax authorities",
    "long-term lenders",
    "trade suppliers",
    "equity investors",
    "financial journalists",
    "bondholders",
    "credit-rating analysts",
    "regulators",
  ];
  const internals = [
    "store managers",
    "production supervisors",
    "regional directors",
    "product managers",
    "department heads",
    "project leaders",
    "shift coordinators",
    "divisional controllers",
  ];
  const sectors = [
    "manufacturer",
    "retailer",
    "service firm",
    "construction contractor",
    "hospitality group",
    "logistics operator",
    "health-care provider",
    "technology company",
  ];

  for (const u of externals) {
    add(
      `Published financial statements prepared under financial accounting are aimed primarily at ${u} and other parties outside day-to-day management.`,
      `Financial accounting serves external stakeholders such as ${u}, not only internal managers.`,
    );
    add(
      `${u.charAt(0).toUpperCase() + u.slice(1)} typically rely on audited annual reports rather than on informal internal spreadsheets when judging a business.`,
      `External parties such as ${u} depend on formal published and often audited accounts.`,
    );
  }

  for (const u of internals) {
    add(
      `Detailed cost schedules prepared for ${u} are examples of management accounting information used inside the business.`,
      `Management accounting supplies internal decision makers such as ${u} with tailored cost and performance data.`,
    );
    add(
      `${u.charAt(0).toUpperCase() + u.slice(1)} may receive weekly or monthly internal reports that are not part of the legally prescribed annual financial statements.`,
      `Management accounting can be produced frequently for ${u} without following the statutory formats used externally.`,
    );
  }

  for (const s of sectors) {
    add(
      `A ${s} may use management accounting to decide whether a product line still covers its variable costs even when published accounts show overall profit.`,
      `Discontinue-or-continue product decisions for a ${s} often draw on internal contribution analysis from management accounting.`,
    );
    add(
      `Managers at a ${s} can use internal accounting data to review whether marketing expenditure should be reduced in a weak quarter.`,
      `Cost-cutting choices at a ${s} are typical management accounting uses rather than purposes of external reporting.`,
    );
    add(
      `Owners of a ${s} may judge whether retained capital is justified by comparing profit with the risk they bear.`,
      `Return relative to risk is a central owner concern when reading accounts of a ${s}.`,
    );
    add(
      `An independent audit of a ${s}'s annual report is intended to increase confidence that the figures are reliable for external users.`,
      `Auditing provides independent verification sought by outsiders reviewing a ${s}.`,
    );
    add(
      `Depreciation charged in a ${s}'s income statement reduces reported profit without causing a cash payment in the same period.`,
      `Depreciation is a non-cash expense in the published accounts of a ${s}.`,
    );
    add(
      `Management accounting reports for a ${s} may be structured by product, region or cost centre rather than mirroring the published financial statements line by line.`,
      `Internal formats for a ${s} can differ from statutory presentation because management accounting serves different questions.`,
    );
  }

  add(
    "Financial accounting must follow recognised presentation rules so that external users can compare businesses on a consistent basis.",
    "Standardised external presentation is a hallmark of financial accounting.",
  );
  add(
    "Management accounting is not usually required to follow the same legally prescribed formats as the published balance sheet and income statement.",
    "Flexibility of format distinguishes management accounting from statutory financial accounting.",
  );
  add(
    "Bookkeepers record business transactions that later support both internal management reports and external financial statements.",
    "The same underlying transaction records can feed both accounting branches.",
  );
  add(
    "Only financial accounting figures appear in the annual report that is filed for external stakeholders.",
    "The annual report channel is part of financial accounting aimed at outsiders.",
  );

  const decisions = [
    "whether to cut distribution costs after a weak quarter",
    "whether to raise the price of a flagship service",
    "whether to close a branch that barely covers its variable costs",
    "whether to outsource cleaning rather than employ staff directly",
    "whether to extend a loss-making contract for strategic reasons",
    "whether to renegotiate supplier terms before the next season",
    "whether to delay a marketing campaign until margins recover",
    "whether to shift production to a cheaper facility",
  ];
  for (const s of sectors) {
    for (const d of decisions) {
      add(
        `Internal management accounting helps a ${s} decide ${d} using information that is not presented in the published annual report.`,
        `Operational choices such as ${d} rely on internal management data rather than external statutory formats.`,
      );
    }
  }

  const audiences = ["bank credit committees", "pension funds", "trade unions", "franchise applicants"];
  for (const a of audiences) {
    for (const s of sectors.slice(0, 6)) {
      add(
        `${a.charAt(0).toUpperCase() + a.slice(1)} reviewing a ${s} typically depend on published financial accounting statements rather than confidential management packs.`,
        `External groups such as ${a} use formal published accounts of a ${s}, not internal management schedules.`,
      );
    }
  }

  const topics = [
    "pricing a new catalogue line",
    "allocating head-office costs to branches",
    "tracking overtime in a single warehouse",
    "comparing margin on two distribution channels",
    "estimating break-even volume for a seasonal product",
    "reviewing scrap rates on a production line",
    "monitoring fuel spend across a vehicle fleet",
    "assessing whether to renew an advertising contract",
  ];
  for (let i = 0; i < topics.length; i++) {
    const biz = sectors[i % sectors.length];
    add(
      `When a ${biz} focuses on ${topics[i]}, the relevant figures are normally drawn from management accounting rather than from the published annual report alone.`,
      `${topics[i].charAt(0).toUpperCase() + topics[i].slice(1)} is a typical internal management accounting use for a ${biz}.`,
    );
    add(
      `Published financial statements of a ${biz} are too aggregated to guide day-to-day choices about ${topics[i]} without supplementary internal reports.`,
      `Internal detail on ${topics[i]} goes beyond what external financial accounting provides for a ${biz}.`,
    );
  }

  const documents = [
    "supplier invoice",
    "customer receipt",
    "bank transfer confirmation",
    "inventory count sheet",
    "payroll summary",
    "delivery note",
    "lease agreement",
    "insurance premium notice",
  ];
  for (const doc of documents) {
    for (const s of sectors) {
      add(
        `Each verified ${doc} recorded by a ${s} becomes part of the ledger that supports both statutory financial statements and selective internal management reports.`,
        `Documentary evidence such as a ${doc} feeds the shared transaction base used by a ${s} for external and internal reporting.`,
      );
    }
  }

  const reportTypes = [
    "branch contribution schedule",
    "product margin comparison",
    "overhead absorption worksheet",
    "rolling cash forecast",
    "labour hour analysis by contract",
  ];
  for (const r of reportTypes) {
    for (const s of sectors) {
      add(
        `A ${r} prepared for managers at a ${s} illustrates management accounting that is not normally reproduced line for line in the published annual report.`,
        `Internal formats such as a ${r} serve managers at a ${s} without replacing statutory financial statements.`,
      );
    }
  }

  if (pool.length < 220) throw new Error(`TRUE pool only ${pool.length}`);
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
    "manufacturer",
    "retailer",
    "service firm",
    "construction contractor",
    "hospitality group",
    "logistics operator",
    "health-care provider",
    "technology company",
    "farm cooperative",
    "publisher",
  ];

  for (const s of sectors) {
    add(
      `Management accounting reports for a ${s} must be filed in exactly the same statutory format as its published balance sheet and income statement.`,
      "Management accounting is not bound to the same legal presentation rules as published financial statements.",
    );
    add(
      `Only financial accounting can ever support a ${s}'s decision on whether to discontinue an unprofitable product line.`,
      "Management accounting contribution analysis is commonly used for discontinue-or-continue product decisions.",
    );
    add(
      `A ${s} prepares management accounting solely for tax authorities and never for its own managers.`,
      "Management accounting primarily serves internal managers; tax authorities rely on financial accounting filings.",
    );
    add(
      `External lenders of a ${s} typically base their credit decisions only on informal internal spreadsheets prepared for supervisors.`,
      "Lenders generally rely on published and often audited financial statements rather than internal management packs.",
    );
    add(
      `An audit of a ${s}'s accounts is performed by the firm's own sales managers to verify daily cash takings.`,
      "Auditing is carried out by an independent firm to test the reliability of published accounts, not by sales managers.",
    );
    add(
      `Depreciation recorded by a ${s} requires an equal cash payment to leave the business in the same month it is charged.`,
      "Depreciation reduces profit but does not by itself cause a cash payment when recorded.",
    );
    add(
      `Published financial statements of a ${s} are prepared mainly for shift supervisors who need tomorrow's production schedule.`,
      "Published financial statements serve external users and overall accountability; daily production scheduling uses internal management information.",
    );
    add(
      `Owners of a ${s} never compare profit with the risk of their investment when reading accounts.`,
      "Owners commonly weigh return against risk when judging whether capital should remain in the business.",
    );
  }

  add(
    "Management accounting and financial accounting are interchangeable names for the same set of reports prepared once a year.",
    "They are distinct branches serving different users, frequencies and presentation rules.",
  );
  add(
    "Suppliers extending trade credit never consult a customer's published accounts before agreeing payment terms.",
    "Suppliers often review a customer's financial statements to judge credit risk.",
  );
  add(
    "Competitors are legally barred from reading any publicly filed financial statements of rival businesses.",
    "Competitors may study publicly available filings when assessing rival performance.",
  );
  add(
    "Employees and managers are always classified as external users of accounting information.",
    "Managers and employees are internal users; tax authorities, lenders and investors are external.",
  );

  const freq = ["weekly", "monthly", "quarterly"];
  for (const f of freq) {
    for (const s of sectors) {
      add(
        `A ${s} may prepare ${f} internal performance summaries for managers even though its statutory financial statements are published only once a year.`,
        `Management accounting at a ${s} can be produced ${f}, unlike the annual external filing cycle.`,
      );
      add(
        `External regulators do not require a ${s} to file ${f} management accounting packs in the same format as its annual balance sheet.`,
        `${f.charAt(0).toUpperCase() + f.slice(1)} internal reports for a ${s} are not statutory external filings.`,
      );
    }
  }

  const wrongClaims = [
    "tax returns are prepared only from management accounting and never from financial accounting records",
    "auditing replaces the need for any bookkeeping at all",
    "owners never read published profit figures",
    "suppliers always ignore a customer's balance sheet before offering credit",
    "management accounting must be signed by the same independent auditor as the annual report",
    "financial accounting is prepared exclusively for shop-floor staff",
    "internal cost schedules are legally filed alongside the balance sheet for every business",
    "depreciation never appears in the income statement",
  ];
  for (const s of sectors) {
    for (const w of wrongClaims) {
      add(
        `It is accurate to say that for a ${s}, ${w}.`,
        `That claim about a ${s} is incorrect and reverses the usual roles of financial and management accounting.`,
      );
    }
  }

  if (pool.length < 220) throw new Error(`FALSE pool only ${pool.length}`);
  return pool;
}

console.log(
  "Pools:",
  buildTruePool().length,
  "TRUE,",
  buildFalsePool().length,
  "FALSE",
);

const cases = buildCases({
  subsection: "6.4",
  slots,
  TRUE: buildTruePool(),
  FALSE: buildFalsePool(),
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
