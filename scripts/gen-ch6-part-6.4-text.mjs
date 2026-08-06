/**
 * Generate scripts/ch6-part-6.4-text.json — 24 textual cases for subsection 6.4.
 *
 * Scope (half-page subtopic, minimal formula weight, conceptual only):
 *   - financial accounting vs management accounting
 *   - users of accounts: owners, managers, employees, lenders, tax authorities, investors
 *   - auditing
 *   - frequency / flexibility of reports
 * Nothing else (no depreciation, no ratios, no statement-reading arithmetic).
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch6-fc-gen-shared.mjs";

const slots = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"))["6.4"].filter(
  (s) => s.half === "text",
);
const OUT = "scripts/ch6-part-6.4-text.json";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const SCENE = [
  "Consider a regional manufacturer whose managers review weekly cost summaries while its lenders wait for the annual audited financial statements. Evaluate the following economic assertions:",
  "Consider a retail chain whose employees hear informal updates on trading performance while tax authorities rely solely on its filed financial accounts. Evaluate the following economic assertions:",
  "Consider a construction contractor whose site managers track job costs daily while outside investors read only its published annual report. Evaluate the following economic assertions:",
  "Consider a hospitality group whose owners compare profit with the capital they have invested while an independent auditor checks the underlying figures. Evaluate the following economic assertions:",
  "Consider a logistics operator whose managers redesign internal cost reports each month while its financial accounting statements keep the same format every year. Evaluate the following economic assertions:",
  "Consider a health-care provider whose employees ask about job security after an internal trading update while lenders study its audited balance sheet. Evaluate the following economic assertions:",
  "Consider a technology company whose managers commission a one-off report on a single product line while investors wait for the next published financial statements. Evaluate the following economic assertions:",
  "Consider a service firm whose owners request more frequent internal figures than the statutory annual accounts provide. Evaluate the following economic assertions:",
  "Consider a farm cooperative whose auditor is appointed independently of its own managers before the annual report is released. Evaluate the following economic assertions:",
  "Consider a publishing house whose tax authorities assess liabilities from filed financial accounts rather than from internal management reports. Evaluate the following economic assertions:",
];

const THEORY = [
  "Analyze why financial accounting and management accounting are prepared for different groups of users. Evaluate the following economic assertions:",
  "Review how owners, lenders, tax authorities and investors are generally classified as external users of accounting information. Evaluate the following economic assertions:",
  "Analyze why managers and employees are generally classified as internal users of accounting information. Evaluate the following economic assertions:",
  "Review why owners weigh the return on their investment against the risk they are taking. Evaluate the following economic assertions:",
  "Analyze why lenders focus on a business's ability to repay what it owes. Evaluate the following economic assertions:",
  "Review why tax authorities depend on financial accounting records when assessing liabilities. Evaluate the following economic assertions:",
  "Analyze why investors study published financial statements before committing further capital. Evaluate the following economic assertions:",
  "Review why employees may take an interest in accounting information about job security and pay. Evaluate the following economic assertions:",
  "Analyze why managers rely on management accounting information to control costs and choose between options. Evaluate the following economic assertions:",
  "Review why financial accounting statements must follow recognised presentation rules. Evaluate the following economic assertions:",
  "Analyze why management accounting is not bound by the same presentation rules as financial accounting. Evaluate the following economic assertions:",
  "Review why financial accounting statements are normally published only once a year. Evaluate the following economic assertions:",
  "Analyze why management accounting reports can be produced weekly or monthly for internal users. Evaluate the following economic assertions:",
  "Review the purpose of an independent audit of a business's financial accounting statements. Evaluate the following economic assertions:",
  "Analyze why an auditor must be independent of the managers whose figures are being checked. Evaluate the following economic assertions:",
  "Review how auditing gives external users confidence in published financial statements. Evaluate the following economic assertions:",
  "Analyze why management accounting reports are not normally subject to the same audit as financial accounting statements. Evaluate the following economic assertions:",
  "Review why external users generally cannot see the detailed internal reports prepared for managers. Evaluate the following economic assertions:",
  "Analyze why financial accounting and management accounting can draw on the same underlying transactions. Evaluate the following economic assertions:",
  "Review why recognised presentation rules help external users compare different businesses. Evaluate the following economic assertions:",
  "Analyze why internal reports can be laid out however best suits the decision being made. Evaluate the following economic assertions:",
  "Review why owners and investors are often treated as separate but related user groups. Evaluate the following economic assertions:",
  "Analyze why tax authorities are treated as external users of financial accounting information. Evaluate the following economic assertions:",
  "Review how the frequency of reporting differs between financial accounting and management accounting. Evaluate the following economic assertions:",
  "Analyze why flexibility of format is a distinguishing feature of management accounting. Evaluate the following economic assertions:",
  "Review why an audited annual report carries more weight with external users than an unaudited internal summary. Evaluate the following economic assertions:",
  "Analyze the difference between users who work inside a business and users who assess it from outside. Evaluate the following economic assertions:",
  "Review why lenders and investors are both classified as external users despite having different concerns. Evaluate the following economic assertions:",
  "Analyze why management accounting can focus on a single decision rather than the whole business. Evaluate the following economic assertions:",
  "Review why bookkeeping continues even after a business's accounts have been audited. Evaluate the following economic assertions:",
];

const TITLES = [
  "Financial Accounting and External Users",
  "Management Accounting for Internal Users",
  "Owners Weighing Return Against Risk",
  "Lenders and Repayment Capacity",
  "Tax Authorities and Filed Accounts",
  "Investors and Published Statements",
  "Managers Controlling Costs Internally",
  "Employees and Job Security",
  "Internal Versus External Users",
  "Frequency of Financial Reporting",
  "Frequency of Management Reporting",
  "Flexible Formats in Management Accounting",
  "Statutory Formats in Financial Accounting",
  "Independent Auditing Explained",
  "Audit Independence From Management",
  "A True and Fair View",
  "Assurance for External Users",
  "Unaudited Internal Reports",
  "Shared Transactions, Different Purposes",
  "Recognised Rules for Comparability",
  "Owners and Investors as Separate Users",
  "Annual Statements Versus Monthly Reports",
  "Tailored Reports for Managers",
  "Why Employees Read Trading Updates",
  "Why Lenders Study Balance Sheets",
  "Why Tax Authorities Need Filed Accounts",
  "Why Investors Wait for Annual Reports",
  "Internal Reports Not Publicly Filed",
  "External Users Without Daily Access",
  "One-Off Reports for a Single Decision",
  "Bookkeeping Behind Both Report Types",
  "Auditors Independent of Managers",
  "Confidence Through Independent Checks",
  "Comparing Businesses Using Published Rules",
  "Weekly Figures for Internal Managers",
  "Annual Cycle for External Statements",
  "Distinguishing the Two Accounting Branches",
  "Users Inside and Outside the Business",
  "Reliability of Audited Statements",
  "Purpose Behind Internal Reporting Choices",
];

const sceneIndices = [];

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

const externalUsers = [
  { name: "owners", note: "the return earned on the capital they have invested" },
  { name: "lenders", note: "whether the business will be able to repay what it owes" },
  { name: "tax authorities", note: "how much tax is due on the business's profit" },
  { name: "investors", note: "the likely return and risk before committing further capital" },
];
const internalUsers = [
  { name: "managers", note: "controlling costs and choosing between courses of action" },
  { name: "employees", note: "how secure their jobs and future pay are likely to be" },
];
const allUsers = [...externalUsers, ...internalUsers];

function buildTruePool() {
  const pool = [];
  const seen = new Set();
  const add = (s, e) => {
    if (seen.has(s)) throw new Error(`dup TRUE: ${s.slice(0, 60)}`);
    seen.add(s);
    pool.push([s, e]);
  };

  for (const sector of sectors) {
    for (const u of externalUsers) {
      add(
        `${cap(u.name)} of a ${sector} are users outside day-to-day management, so they mainly rely on the business's published financial accounting statements.`,
        `${cap(u.name)} sit outside daily management and depend on financial accounting rather than internal management reports.`,
      );
      add(
        `${cap(u.name)} of a ${sector} normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.`,
        `Financial accounting statements reach external users such as ${u.name} on the statutory annual cycle.`,
      );
    }
    for (const u of internalUsers) {
      add(
        `${cap(u.name)} of a ${sector} work inside the business and can be given management accounting reports designed around their own questions.`,
        `${cap(u.name)} are internal users who can receive management accounting tailored to their needs.`,
      );
      add(
        `${cap(u.name)} of a ${sector} can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.`,
        `Management accounting can reach internal users such as ${u.name} far more frequently than annual financial accounting.`,
      );
      add(
        `Reports prepared for ${u.name} of a ${sector} can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.`,
        `Management accounting for internal users such as ${u.name} is flexible in format, unlike statutory financial accounting.`,
      );
    }
    for (const u of allUsers) {
      add(
        `${cap(u.name)} of a ${sector} look at accounting information mainly to judge ${u.note}.`,
        `${cap(u.name)} focus on ${u.note} when they use accounting information.`,
      );
    }
  }

  for (const sector of sectors) {
    add(
      `An independent auditor examines a ${sector}'s financial accounting statements before they are published, to check whether the figures give a true and fair view.`,
      `Auditing is an independent check on published financial accounting statements.`,
    );
    add(
      `The auditor of a ${sector} is independent of its own managers, which allows external users to place more trust in the published financial statements.`,
      `Audit independence from management is what gives external users confidence in published accounts.`,
    );
    add(
      `Financial accounting and management accounting at a ${sector} both draw on the same underlying transactions, yet they are prepared for different users and different purposes.`,
      `The two branches share a data source but differ in users and purpose.`,
    );
  }
  for (const sector of sectors) {
    for (const u of externalUsers) {
      add(
        `Auditing gives ${u.name} of a ${sector} some assurance that the published financial accounting statements can be relied upon.`,
        `Audited statements provide assurance to external users such as ${u.name}.`,
      );
      add(
        `A ${sector} must prepare its financial accounting statements according to recognised rules so that ${u.name} can compare its performance with other businesses.`,
        `Recognised presentation rules for financial accounting exist so external users such as ${u.name} can compare businesses.`,
      );
    }
    for (const u of internalUsers) {
      add(
        `Management accounting reports produced only for ${u.name} inside a ${sector} are not normally subject to the same independent audit as its financial accounting statements.`,
        `Internal management accounting is not typically audited in the way financial accounting is.`,
      );
      add(
        `Because management accounting is not governed by the same rules as financial accounting, a ${sector} can design internal reports around whatever question ${u.name} are asking.`,
        `Freedom from statutory rules lets management accounting be shaped around the needs of internal users such as ${u.name}.`,
      );
    }
  }

  if (pool.length < 100) throw new Error(`TRUE pool only ${pool.length}`);
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

  for (const sector of sectors) {
    for (const u of externalUsers) {
      add(
        `${cap(u.name)} of a ${sector} are internal users who receive management accounting reports every week, in the same way as its own managers.`,
        `${cap(u.name)} are external users who rely on annual financial accounting, not weekly internal management reports.`,
      );
      add(
        `${cap(u.name)} of a ${sector} base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.`,
        `${cap(u.name)} typically rely on published financial accounting statements, not informal internal notes.`,
      );
    }
    for (const u of internalUsers) {
      add(
        `${cap(u.name)} of a ${sector} are not allowed to see any accounting information more often than the once-a-year published financial statements.`,
        `Internal users such as ${u.name} can receive management accounting far more often than the annual financial statements.`,
      );
      add(
        `Management accounting reports prepared for ${u.name} of a ${sector} must use exactly the same statutory format as the published financial statements.`,
        `Management accounting for internal users such as ${u.name} is not tied to the statutory format used for financial accounting.`,
      );
    }
    for (const u of allUsers) {
      add(
        `${cap(u.name)} of a ${sector} have no interest in ${u.note} when they look at accounting information.`,
        `${cap(u.name)} are typically concerned with ${u.note}.`,
      );
    }
  }

  for (const sector of sectors) {
    add(
      `A ${sector} may present its financial accounting statements in any layout management prefers, without following any recognised presentation rules.`,
      `Financial accounting must follow recognised presentation rules; it is not left to management's free choice.`,
    );
    add(
      `The audit of a ${sector} is carried out by its own managers, who check their own figures before the statements are published.`,
      `An audit is carried out by an independent party, not by the business's own managers.`,
    );
    add(
      `Once a ${sector}'s financial accounting statements have been audited, no further bookkeeping records need to be kept afterwards.`,
      `Auditing checks existing records; it does not remove the ongoing need for bookkeeping.`,
    );
    add(
      `Financial accounting and management accounting at a ${sector} are simply two names for identical reports produced with the same frequency and format.`,
      `The two branches differ in users, frequency and format; they are not identical.`,
    );
  }
  for (const sector of sectors) {
    for (const u of externalUsers) {
      add(
        `A ${sector} need not follow any recognised presentation rules in its financial accounting statements, since ${u.name} can compare businesses however they wish.`,
        `Recognised presentation rules exist precisely so that external users such as ${u.name} can compare businesses consistently.`,
      );
    }
  }

  if (pool.length < 80) throw new Error(`FALSE pool only ${pool.length}`);
  return pool;
}

const truePool = buildTruePool();
const falsePool = buildFalsePool();
console.log("Pools:", truePool.length, "TRUE,", falsePool.length, "FALSE");

const cases = buildCases({
  subsection: "6.4",
  slots,
  TRUE: truePool,
  FALSE: falsePool,
  SCENE,
  THEORY,
  TITLES,
  sceneIndices,
});

validateAndWrite(cases, slots, OUT);
