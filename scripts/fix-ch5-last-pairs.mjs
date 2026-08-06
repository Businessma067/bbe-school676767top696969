/** Kill leftover Ch5 near-dup pairs; preserve answer_key truth values. */
import fs from "node:fs";

function load(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function save(p, d) {
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
}

function setStmt(cases, caseId, idx, text) {
  const c = cases.find((x) => x.case_id === caseId);
  if (!c) throw new Error("missing " + caseId);
  c.statements[idx] = text;
}

{
  const p = "scripts/ch5-part-5.4.json";
  const cases = load(p);
  // FALSE claims: sales success ≠ ethical advertising
  setStmt(
    cases,
    "CASE 5.4.100",
    1,
    "For jewellery retailers in consumer electronics markets, any rise in sales proves every advertisement used was ethically acceptable.",
  );
  setStmt(
    cases,
    "CASE 5.4.100",
    3,
    "For jewellery retailers when credit makes impulse buying easier, ethical standards are met automatically whenever credit-fuelled sales rise.",
  );
  setStmt(
    cases,
    "CASE 5.4.100",
    4,
    "For jewellery retailers where rental platforms operate alongside retail, higher turnover alone means the advertising was ethical by definition.",
  );
  // TRUE claims: created wants / overspend
  setStmt(
    cases,
    "CASE 5.4.96",
    4,
    "For eyewear retailers when seasonal campaigns intensify, stimulating wants through marketing differs from merely reacting to wishes customers already voiced.",
  );
  setStmt(
    cases,
    "CASE 5.4.98",
    4,
    "For art-supply stores in consumer electronics markets, new collections plus campaigns can awaken desires shoppers did not bring to the store.",
  );
  setStmt(
    cases,
    "CASE 5.4.29",
    1,
    "For eyewear retailers in apparel retailing, successive introductions and ads can enlarge demand beyond needs already on record.",
  );
  setStmt(
    cases,
    "CASE 5.4.75",
    3,
    "For art-supply stores in household durable-goods sectors, shoppers may leave with a higher bill than planned once promotions add extras.",
  );
  save(p, cases);
  console.log("5.4 pair break ok");
}

{
  const p = "scripts/ch5-part-5.5.json";
  const cases = load(p);
  const map = {
    "CASE 5.5.55": {
      i: 3,
      t: "Printed-circuit-board producer sales of 40 million euros inside a 200 million euro market leave an absolute share of 20 per cent.",
    },
    "CASE 5.5.64": {
      i: 1,
      t: "Organic breakfast cereals at 108 million euros of sales versus a 540 million euro market mean a 20 per cent absolute market share.",
    },
    "CASE 5.5.72": {
      i: 0,
      t: "Specialty coffee roasting sales of 176 million euros in an 880 million euro market correspond to a 20 per cent absolute market share.",
    },
  };
  for (const [id, { i, t }] of Object.entries(map)) setStmt(cases, id, i, t);
  save(p, cases);
  console.log("5.5 frame break ok");
}
