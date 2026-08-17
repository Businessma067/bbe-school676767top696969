import { BATCH as B61 } from "./_ch8_add_61_69.mjs";
import { BATCH as B70 } from "./_ch8_add_70_78.mjs";
import { BATCH as B79 } from "./_ch8_add_79_87.mjs";
import { MATH_CH8_POWER_FUNCTIONS as t } from "../../src/data/math-ch8-power-functions.ts";

const pairs = [
  ["61", B61[0]],
  ["70", B70[0]],
  ["79", B79[0]],
  ["87", B79[8]],
];

for (const [label, bt] of pairs) {
  const at = t.find((x) => x.case_id === bt.case_id);
  console.log(
    label,
    "batchOv",
    bt.solution_overview.length,
    "srcOv",
    at?.solution_overview.length,
    "same",
    bt.solution_overview === at?.solution_overview,
  );
  console.log("  batchTitle", bt.title.slice(0, 60));
  console.log("  srcTitle", at?.title?.slice(0, 60));
  console.log(
    "  expl0",
    bt.tactical_explanations[0].length,
    "->",
    at?.tactical_explanations[0].length,
  );
  if (bt.solution_overview !== at?.solution_overview) {
    console.log("  batch head", JSON.stringify(bt.solution_overview.slice(0, 120)));
    console.log("  src head", JSON.stringify(at?.solution_overview?.slice(0, 120)));
  }
}
