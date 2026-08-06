/**
 * Patch weak/broken contexts in ch2-part-2.1-2.3.json toward FC style lock.
 */
import fs from "node:fs";

const path = "src/data/ch2-part-2.1-2.3.json";
const cases = JSON.parse(fs.readFileSync(path, "utf8"));

const FORCE = {
  "CASE 2.1.01":
    "Analyze scarcity, economising, and who participates in economic decision-making. Evaluate the following economic assertions:",
  "CASE 2.1.03":
    "Analyze the roles of households and entrepreneurs in everyday exchange of goods and services. Evaluate the following economic assertions:",
  "CASE 2.1.05":
    "Consider a corner café where customers buy bags of coffee beans and pay baristas to prepare drinks. Evaluate the following economic assertions:",
  "CASE 2.1.12":
    "Analyze claims about needs, wants, and which actors in the economy face them. Evaluate the following economic assertions:",
  "CASE 2.1.19":
    "Analyze whether households or businesses can successfully opt out of economic decisions. Evaluate the following economic assertions:",
  "CASE 2.1.22":
    "Review subtle classification traps distinguishing goods from services. Evaluate the following economic assertions:",
  "CASE 2.1.25":
    "Analyze how broadly exchange can occur between households and businesses. Evaluate the following economic assertions:",
  "CASE 2.1.27":
    "Review whether businesses themselves have operational needs in addition to household needs. Evaluate the following economic assertions:",
  "CASE 2.1.28":
    "Analyze the claim that nobody can fully opt out of making economic decisions. Evaluate the following economic assertions:",
  "CASE 2.3.09":
    "Analyze traps students face when classifying examples as microeconomic rather than macroeconomic. Evaluate the following economic assertions:",
  "CASE 2.3.21":
    "Review the scientific aims of economics in explaining and predicting observed phenomena. Evaluate the following economic assertions:",
  "CASE 2.3.25":
    "Analyze traps students face when classifying examples as macroeconomic rather than microeconomic. Evaluate the following economic assertions:",
};

function polish(ctx, title) {
  let t = String(ctx).trim();
  if (FORCE[title]) return FORCE[title]; // wrong - key by id
  return t;
}

let n = 0;
for (const c of cases) {
  if (FORCE[c.case_id]) {
    c.context = FORCE[c.case_id];
    n++;
    continue;
  }
  let t = String(c.context).trim();
  // strip leading lone period
  t = t.replace(/^\.\s*/, "");
  // remove duplicated evaluate clause
  t = t.replace(
    /Evaluate the following assertions[^.]*\.\s*Evaluate the following economic assertions:\s*$/i,
    "Evaluate the following economic assertions:",
  );
  // At a → Consider
  if (/^At a /i.test(t)) {
    t = t.replace(/^At a /i, "Consider a ");
  }
  // bare life scene without academic opener
  if (
    !/^(Analyze|Consider|Review|Assess|Evaluate)\b/i.test(t) &&
    /Evaluate the following economic assertions:\s*$/i.test(t)
  ) {
    const body = t.replace(/\s*Evaluate the following economic assertions:\s*$/i, "").trim();
    t = `Consider ${body.charAt(0).toLowerCase()}${body.slice(1)} Evaluate the following economic assertions:`;
    // fix double spaces / missing comma
    t = t.replace(/\.\s*Evaluate/, ". Evaluate");
  }
  // weak filler
  if (/^Review the economic concepts in this case\./i.test(t)) {
    t = `Analyze the economic roles and exchange relationships described in this setting. Evaluate the following economic assertions:`;
  }
  if (!/Evaluate the following economic assertions:\s*$/i.test(t)) {
    t = t.replace(/\.?\s*$/, "") + ". Evaluate the following economic assertions:";
  }
  if (c.context !== t) {
    c.context = t;
    n++;
  }
}

fs.writeFileSync(path, JSON.stringify(cases, null, 2) + "\n");
console.log("patched contexts", n);
