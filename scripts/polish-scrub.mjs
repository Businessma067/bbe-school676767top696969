/**
 * Final polish after deep scrub: fix Tina/Steve bakery contamination,
 * eU capitalization, awkward doubled phrases.
 */
import fs from "node:fs";

const FILES = [
  "src/data/economics-cases-ch2-subtopics.json",
  "src/data/economics-cases-ch3-subtopics.json",
];

function polish(s) {
  let t = String(s);
  t = t.replace(/\beU\b/g, "EU");
  t = t.replace(/\bConsider mila\b/g, "Consider Mila");
  t = t.replace(/\ba small IT-support venture's bakery\b/gi, "a neighbourhood bakery");
  t = t.replace(/\bA small IT-support venture's bakery\b/g, "A neighbourhood bakery");
  t = t.replace(/\ba small IT-support venture's flour supplier\b/gi, "a bakery's flour supplier");
  t = t.replace(/\ba small IT-support venture's regular buyers\b/gi, "a bakery's regular buyers");
  t = t.replace(/\bA small IT-support venture's regular buyers\b/g, "A bakery's regular buyers");
  t = t.replace(
    /\bA small IT-support venture as owners seek profit and bear risk from how the bakery trades\b/gi,
    "Bakery owners seek profit and bear risk from how the shop trades",
  );
  t = t.replace(
    /\bA small IT-support venture depend on customers for revenue that keeps the bakery trading\b/gi,
    "The bakery depends on customers for revenue that keeps the shop trading",
  );
  t = t.replace(
    /\bFair pricing and reliable quality keep a small IT-support venture's regular buyers returning to the bakery\b/gi,
    "Fair pricing and reliable quality keep regular buyers returning to the bakery",
  );
  t = t.replace(
    /\bBuyers at a small IT-support venture's bakery\b/gi,
    "Buyers at a neighbourhood bakery",
  );
  t = t.replace(
    /\bThe flour supplier expects payment and future orders from a small IT-support venture's bakery\b/gi,
    "The flour supplier expects payment and future orders from the bakery",
  );
  t = t.replace(
    /\bConsider a small IT-support venture's bakery, which affects\b/gi,
    "Consider a neighbourhood bakery, which affects",
  );
  t = t.replace(
    /\bConsider a small IT-support venture's bakery customers, which depend\b/gi,
    "Consider neighbourhood bakery customers, who depend",
  );
  t = t.replace(
    /\bConsider a small IT-support venture's bakery, which has\b/gi,
    "Consider a neighbourhood bakery that has",
  );
  t = t.replace(
    /\bConsider a small IT-support venture's bakery with a components manufacturer\b/gi,
    "Compare a neighbourhood bakery with a large components manufacturer",
  );
  t = t.replace(
    /\bAnalyze a small IT-support venture's regular buyers depend\b/gi,
    "Analyze how a bakery's regular buyers depend",
  );
  t = t.replace(
    /\bAnalyze a small IT-support venture's flour supplier relies\b/gi,
    "Analyze how a bakery's flour supplier relies",
  );
  t = t.replace(/\bThe two co-owners, staff\b/gi, "The owners, staff");
  t = t.replace(/\bTwo co-owners stakeholders\b/gi, "Bakery stakeholder groups");
  t = t.replace(/\bTwo co-owners versus a components manufacturer\b/gi, "Small bakery versus large manufacturer");
  t = t.replace(
    /\bA local repair-shop owner's repair shop profile\b/gi,
    "Local repair shop profile",
  );
  t = t.replace(
    /\bA local repair-shop owner's repair shop with two staff\b/gi,
    "A local repair shop with two staff",
  );
  t = t.replace(
    /\bA local repair-shop owner's\b/gi,
    "A local repair shop owner's",
  );
  t = t.replace(
    /\bEmployees at a components manufacturer electronic components plants\b/gi,
    "Employees at a components manufacturer's plants",
  );
  t = t.replace(
    /\bA components manufacturer manufactures and sells\b/gi,
    "A components manufacturer that manufactures and sells",
  );
  t = t.replace(
    /\bA components manufacturer affects owners\b/gi,
    "A components manufacturer that affects owners",
  );
  t = t.replace(
    /\bA components manufacturer multinational scope\b/gi,
    "Multinational manufacturer scope",
  );
  t = t.replace(
    /\bA components manufacturer stakeholder spread\b/gi,
    "Multinational stakeholder spread",
  );
  t = t.replace(/\s{2,}/g, " ").trim();
  return t;
}

const still = [];
for (const f of FILES) {
  const cases = JSON.parse(fs.readFileSync(f, "utf8"));
  for (const c of cases) {
    c.title = polish(c.title);
    c.context = polish(c.context);
    c.statements = c.statements.map(polish);
    c.tactical_explanations = c.tactical_explanations.map(polish);
    const blob = JSON.stringify(c);
    if (
      /IT-support venture's bakery|repair-shop owner's repair|eU\b|co-founder|AT&S|Tina|Steve|Red Cross|\bWWF\b|Greenpeace|Leoben|\bPCB\b|printed circuit|IC substrate|in the chapter|electronics-components/i.test(
        blob,
      )
    ) {
      still.push(c.case_id);
    }
  }
  fs.writeFileSync(f, JSON.stringify(cases, null, 2) + "\n");
}
console.log("still dirty", still);
process.exit(still.length ? 1 : 0);
