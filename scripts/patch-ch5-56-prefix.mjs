import fs from "node:fs";
import { spawnSync } from "node:child_process";

const path = "src/data/economics-cases-ch5-subtopics.json";
const cases = JSON.parse(fs.readFileSync(path, "utf8"));
const byId = Object.fromEntries(cases.map((c) => [c.case_id, c]));

function set(id, i, stmt, expl) {
  byId[id].statements[i] = stmt;
  if (expl) byId[id].tactical_explanations[i] = expl;
}

set(
  "CASE 5.6.88",
  2,
  "Uniform mass marketing across regions typically achieves lower unit costs than operating many geographically tailored niche campaigns.",
  "TRUE — Economies of scale favour broad identical output over numerous small geographic niches.",
);
set(
  "CASE 5.6.92",
  3,
  "Selling one standardised product nationwide usually spreads fixed costs more efficiently than maintaining many demographic micro-niches.",
  "TRUE — Mass marketing benefits from economies of scale relative to fragmented demographic niches.",
);
set(
  "CASE 5.6.96",
  0,
  "High-volume undifferentiated promotion generally reduces average cost per unit compared with serving many separate psychographic niches.",
  "TRUE — Economies of scale are linked to mass marketing rather than numerous psychographic niches.",
);
set(
  "CASE 5.5.34",
  0,
  "A business recording 9 million euros of sales in a 36 million euro market holds a 25 per cent absolute market share.",
  "TRUE — Absolute market share equals firm sales divided by total market sales.",
);
set(
  "CASE 5.6.73",
  0,
  "Scaling shampoo production to high weekly volumes can spread fixed plant costs and reduce the cost attributed to each bottle.",
  "TRUE — Higher output can lower average unit cost when fixed costs are shared.",
);
set(
  "CASE 5.6.73",
  2,
  "Broadcast advertising for a single national shampoo formula can spread promotional spending across a very large audience.",
  "TRUE — Mass promotion amortises advertising cost over a broad customer base.",
);
set(
  "CASE 5.6.99",
  2,
  "A single behavioural mass offer can lower production and marketing cost per unit relative to many narrowly defined behavioural segments.",
  "TRUE — Mass marketing exploits scale advantages instead of multiplying behavioural niche variants.",
);

fs.writeFileSync(path, JSON.stringify(cases, null, 2) + "\n");
const bySub = {};
for (const c of cases) (bySub[c.subsection] ??= []).push(c);
for (const [sub, part] of Object.entries(bySub)) {
  fs.writeFileSync(`scripts/ch5-part-${sub}.json`, JSON.stringify(part, null, 2) + "\n");
}
spawnSync("node", ["scripts/merge-ch5-banks.mjs"], { stdio: "inherit" });
console.log("patched 7 statements");
