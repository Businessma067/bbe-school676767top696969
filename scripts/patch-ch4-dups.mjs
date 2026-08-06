import fs from "node:fs";

const path = "src/data/economics-cases-ch4-subtopics.json";
const j = JSON.parse(fs.readFileSync(path, "utf8"));
const byId = Object.fromEntries(j.map((c) => [c.case_id, c]));

function setStmt(id, i, text, expl) {
  const c = byId[id];
  c.statements[i] = text;
  if (expl) c.tactical_explanations[i] = expl;
}

setStmt(
  "CASE 4.4.33",
  1,
  "A sole trader is an unincorporated form because the business lacks separate legal personality from the owner.",
  "TRUE — Sole traders are unincorporated and are not legal entities of their own.",
);
setStmt(
  "CASE 4.4.33",
  2,
  "A partnership is likewise unincorporated: the firm is not treated as a legal person separate from the partners.",
  "TRUE — Partnerships remain unincorporated legal structures without separate personality.",
);

setStmt(
  "CASE 4.6.47",
  2,
  "Expecting a return on equity automatically reclassifies equity investors as creditors under debt finance.",
  "FALSE — Investor equity remains equity finance even when investors seek financial return.",
);
setStmt(
  "CASE 4.6.47",
  4,
  "Customer payments that later become retained profit transform those earnings into external equity finance.",
  "FALSE — Retained earnings stay internal equity after profit is kept in the firm.",
);
setStmt(
  "CASE 4.6.48",
  4,
  "Transferability of bonds on secondary markets turns long-term bond finance into short-term equity finance.",
  "FALSE — Bond financing remains long-term debt for the issuer regardless of secondary trading.",
);

setStmt(
  "CASE 4.2.36",
  0,
  "Unlimited liability does not stop partners from combining personal savings to fund the business.",
  "TRUE — Unlimited liability coexists with pooling partner savings for investment.",
);
setStmt(
  "CASE 4.2.18",
  2,
  "Partners remain fully liable for partnership debts even while they pool personal savings to invest in the firm.",
  "TRUE — Unlimited liability and pooled investment operate together.",
);
setStmt(
  "CASE 4.2.40",
  2,
  "Relative to a sole trader, several partners can usually contribute a larger pool of personal funds at start-up.",
  "TRUE — Multiple partners often invest more combined savings than one proprietor.",
);
setStmt(
  "CASE 4.2.40",
  4,
  "When seeking bank credit, partners may collectively pledge more private property as security than a lone owner could.",
  "TRUE — Combined collateral from partners can support larger loans.",
);
setStmt(
  "CASE 4.2.42",
  2,
  "Limited-partnership status by itself caps every partner's exposure at capital contributed, including managing partners.",
  "FALSE — Managing partners retain unlimited liability; only non-managing limited partners are capped.",
);

setStmt(
  "CASE 4.6.17",
  2,
  "When several funding routes exist, selection usually weighs costs, the purpose of the funds, and the firm's gearing.",
  "TRUE — Costs, intended use, and financial situation jointly shape the choice.",
);
setStmt(
  "CASE 4.6.26",
  1,
  "Elevated gearing points the firm toward retained funds or new investors rather than stacking another major loan.",
  "TRUE — High loan capital makes internal equity or outside investors preferable.",
);
setStmt(
  "CASE 4.6.44",
  4,
  "Even under high gearing, managers should still prefer repeating large bank borrowings over seeking equity investors.",
  "FALSE — Further large loans raise insolvency risk; internal funds or investors are safer options.",
);

fs.writeFileSync(path, JSON.stringify(j, null, 2) + "\n");

const bySub = {};
for (const c of j) {
  (bySub[c.subsection] ??= []).push(c);
}
for (const [sub, cases] of Object.entries(bySub)) {
  fs.writeFileSync(`scripts/ch4-part-${sub}.json`, JSON.stringify(cases, null, 2) + "\n");
}
console.log("patched", Object.keys(byId).length);
