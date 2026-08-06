/** Fix 5.4 cases where five statements share the same core claim with only opener variants. */
import fs from "node:fs";
import { spawnSync } from "node:child_process";

const path = "src/data/economics-cases-ch5-subtopics.json";
const cases = JSON.parse(fs.readFileSync(path, "utf8"));
const byId = Object.fromEntries(cases.map((c) => [c.case_id, c]));

function setAllTrue(id, stmts, expls) {
  const c = byId[id];
  if (c.answer_key.filter(Boolean).length !== 5) throw new Error(`${id} not 5/5 true`);
  stmts.forEach((s, i) => {
    c.statements[i] = s;
    c.tactical_explanations[i] = `TRUE — ${expls[i]}`;
  });
}

setAllTrue(
  "CASE 5.4.20",
  [
    "Marketing may stimulate new customer wishes through continuous product development and promotional activity, not only by meeting existing demand.",
    "Greater awareness of sustainable production and consumption is desirable for both businesses and consumers.",
    "Repairing functional computers and equipment extends useful life instead of discarding repairable devices.",
    "High-quality garments that remain wearable can be exchanged among friends rather than replaced with cheap throwaway items.",
    "Responsible businesses recognise that promotional activity can encourage purchases beyond strict necessity.",
  ],
  [
    "Marketing can create wants through new products and advertising rather than only responding to existing demand.",
    "Sustainability awareness is valued on both the business and consumer side of the market.",
    "Maintenance and repair support sustainability by postponing unnecessary replacement.",
    "Informal clothing exchange extends use without new purchases of low-quality apparel.",
    "Responsible marketing acknowledges that advertising may push spending beyond strict need.",
  ],
);

setAllTrue(
  "CASE 5.4.87",
  [
    "Consumers often spend more than they can afford when marketing and convenient purchasing channels encourage additional unplanned buying.",
    "Many purchases are used only briefly before disposal, illustrating overconsumption of short-lived goods.",
    "Renting quality clothes for a single event can be preferable to buying cheap outfits that will rarely be worn again.",
    "Ethical advertising practices form part of responsible marketing rather than manipulative persuasion alone.",
    "Businesses and consumers are expected to act more responsibly and sustainably rather than prioritising volume alone.",
  ],
  [
    "Easy purchasing and advertising can push spending beyond affordable limits for many households.",
    "Brief use followed by discard is a textbook example of overconsumption.",
    "Rental access can replace one-off purchases of rarely used low-quality clothing.",
    "Ethical promotion is part of the responsibility framework in marketing.",
    "Sustainable and responsible behaviour is expected from both firms and consumers.",
  ],
);

fs.writeFileSync(path, JSON.stringify(cases, null, 2) + "\n");
const part = cases.filter((c) => c.subsection === "5.4");
fs.writeFileSync("scripts/ch5-part-5.4.json", JSON.stringify(part, null, 2) + "\n");
spawnSync("node", ["scripts/merge-ch5-banks.mjs"], { stdio: "inherit" });
console.log("patched CASE 5.4.20 and 5.4.87");
