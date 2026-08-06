import fs from "node:fs";

const f = "src/data/economics-cases-ch3-subtopics.json";
const j = JSON.parse(fs.readFileSync(f, "utf8"));

function polish(s) {
  return String(s)
    .replace(
      /\bA small IT-support venture depend on the supplier for quality flour while the supplier depends on their orders\./g,
      "The bakery depends on the supplier for quality flour while the supplier depends on bakery orders.",
    )
    .replace(
      /\bAnalyze a bakery's regular buyers depend on\b/g,
      "Analyze how a bakery's regular buyers depend on",
    )
    .replace(
      /\bAnalyze a bakery's flour supplier relies on\b/g,
      "Analyze how a bakery's flour supplier relies on",
    )
    .replace(
      /\bin a components manufacturer operations\b/g,
      "in a components manufacturer's operations",
    )
    .replace(
      /\bnear a components manufacturer facilities\b/g,
      "near a components manufacturer's facilities",
    );
}

for (const c of j) {
  c.title = polish(c.title);
  c.context = polish(c.context);
  c.statements = c.statements.map(polish);
  c.tactical_explanations = c.tactical_explanations.map(polish);
}

fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
console.log("3.6.32 S2:", j.find((c) => c.case_id === "CASE 3.6.32").statements[2]);
console.log("3.6.25 ctx:", j.find((c) => c.case_id === "CASE 3.6.25").context);
