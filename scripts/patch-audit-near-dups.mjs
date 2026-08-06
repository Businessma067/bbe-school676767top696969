/** One-shot patches for audit near-paraphrases + jargon slip leftovers. */
import fs from "node:fs";

function patchFile(path, replacements) {
  const j = JSON.parse(fs.readFileSync(path, "utf8"));
  let n = 0;
  for (const c of j) {
    for (let i = 0; i < c.statements.length; i++) {
      for (const [from, to] of replacements) {
        if (c.statements[i] === from) {
          c.statements[i] = to;
          n++;
          break;
        }
      }
    }
  }
  fs.writeFileSync(path, JSON.stringify(j, null, 2) + "\n");
  console.log(path, "patched", n);
}

patchFile("src/data/economics-cases-ch2-subtopics.json", [
  [
    "Barter requires double coincidence of wants, which money as medium of exchange helps overcome.",
    "Without money, exchange under barter fails unless each party wants exactly what the other offers at the same moment.",
  ],
  [
    "Opportunity cost is the benefit of the next-best alternative given up when one option is chosen.",
    "Choosing one course of action means forgoing the benefit that the next-best feasible alternative would have delivered.",
  ],
  [
    "Nationwide statistics on total car sales after a bonus programme would be macroeconomic analysis.",
    "Totals for national car sales after an incentive scheme belong to macroeconomic rather than firm-level analysis.",
  ],
  [
    "Consumer sovereignty improves when households choose among competing mobile plans.",
    "Households exercising choice across rival mobile tariffs illustrate stronger consumer sovereignty in the market.",
  ],
]);

patchFile("src/data/economics-cases-ch3-subtopics.json", [
  [
    "Technical troubleshooting supplies labour as human resources.",
    "Hands-on technical fault-finding by staff is counted as the labour factor among the firm's resources.",
  ],
  [
    "Diagnostic tools and software licences represent technology in the service model.",
    "Diagnostic equipment and licensed software count as technology supporting the service offer.",
  ],
  [
    "Online order fulfilment from a warehouse is tertiary logistics.",
    "Picking and dispatching online orders from a warehouse belongs to tertiary logistics services.",
  ],
]);

patchFile("scripts/ch4-part-4.6.json", [
  [
    "Intended use is irrelevant when comparing a bank loan with a bond for buying production materials.",
    "Whether materials are bought with a bank loan or a bond issue does not by itself decide which source is suitable; matching maturity and conditions still matters.",
  ],
  [
    "Expecting a return on equity automatically reclassifies equity investors as creditors under debt finance.",
    "Expecting owners to earn a return on equity does not turn equity providers into creditors of the business.",
  ],
]);

patchFile("scripts/ch4-part-4.2.json", [
  [
    "Partners need a partnership agreement to settle rights, responsibilities, and the division of profits and loss",
    "A written partnership agreement is used to define partners' rights, duties, and how profit and loss are shared.",
  ],
]);

patchFile("scripts/ch4-part-4.6.json", [
  [
    "Revenue expenditure on production materials must be financed exclusively through twenty-year mortgage loans.",
    "Day-to-day materials spend should not be funded only by ultra-long mortgage borrowing; financing maturity should fit the use of funds.",
  ],
]);
