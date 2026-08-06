/**
 * Patch remaining near-duplicate statements in ch4 + ch5 (keep answer_key alignment).
 */
import fs from "node:fs";
import { spawnSync } from "node:child_process";

const patches = [
  // ch4 — rewrite second occurrence in each near-dup pair
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.1.09", 0, true,
    "A sole proprietorship combines ownership and day-to-day management in a single individual without separate partners.",
    "TRUE — One person owns and runs the business in a sole proprietorship."],
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.1.29", 0, true,
    "Once a business current account is opened, an overdraft facility can provide flexible short-term credit for cash shortfalls.",
    "TRUE — Overdrafts are flexible short-term credit linked to a business bank account."],
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.1.42", 2, true,
    "Capital contributed by the owner together with investor funds and creditor finance counts as external finance for the firm.",
    "TRUE — Owner investment plus investor and creditor funds are external sources of finance."],
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.3.31", 2, true,
    "Investors may acquire shares directly from the corporation at issue or purchase them later from an existing shareholder.",
    "TRUE — Shares trade at initial issue or on the secondary market between shareholders."],
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.5.20", 0, true,
    "Profit kept inside the firm rather than distributed to owners supplies internal equity finance through retained earnings.",
    "TRUE — Retained earnings are internal equity from undistributed profit."],
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.6.43", 0, true,
    "When gearing is already high, management should prefer internal funds or new equity investors over another major loan.",
    "TRUE — High gearing makes internal finance or investors preferable to additional large borrowing."],
  ["src/data/economics-cases-ch4-subtopics.json", "CASE 4.6.36", 2, true,
    "Short-term credit suits revenue spending on inputs consumed quickly because it avoids locking the firm into long repayment schedules.",
    "TRUE — Short-term credit matches quickly consumed revenue expenditure."],
  // ch5
  ["src/data/economics-cases-ch5-subtopics.json", "CASE 5.5.25", 4, true,
    "Absolute market share equals the sales of one business divided by total market sales, expressed as a percentage.",
    "TRUE — Market share is firm sales divided by total market sales."],
  ["src/data/economics-cases-ch5-subtopics.json", "CASE 5.7.78", 0, true,
    "Promotional messages aimed at retirees should remain consistent with the product features, price level, and distribution channels selected.",
    "TRUE — Promotion must align with product, price, and place decisions for the retiree segment."],
  ["src/data/economics-cases-ch5-subtopics.json", "CASE 5.7.80", 4, true,
    "Adding a budget variant within an existing line can attract retiree buyers without expanding the full product mix width.",
    "TRUE — Line extension adds variants within a line rather than widening the whole mix."],
];

for (const [file, caseId, idx, expectTrue, stmt, expl] of patches) {
  const cases = JSON.parse(fs.readFileSync(file, "utf8"));
  const c = cases.find((x) => x.case_id === caseId);
  if (!c) throw new Error(`missing ${caseId}`);
  if (c.answer_key[idx] !== expectTrue) throw new Error(`key mismatch ${caseId}[${idx}]`);
  c.statements[idx] = stmt;
  c.tactical_explanations[idx] = `${expectTrue ? "TRUE" : "FALSE"} — ${expl.replace(/^(TRUE|FALSE)\s*[—–-]\s*/i, "")}`;
  fs.writeFileSync(file, JSON.stringify(cases, null, 2) + "\n");
  const sub = c.subsection;
  const part = cases.filter((x) => x.subsection === sub);
  if (file.includes("ch4")) {
    fs.writeFileSync(`scripts/ch4-part-${sub}.json`, JSON.stringify(part, null, 2) + "\n");
  } else {
    fs.writeFileSync(`scripts/ch5-part-${sub}.json`, JSON.stringify(part, null, 2) + "\n");
  }
}

console.log("patched", patches.length, "statements");
