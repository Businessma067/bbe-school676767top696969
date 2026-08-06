/**
 * Generate all Ch.5 part banks (7 × 100 cases) using programmatic pools.
 */
import fs from "node:fs";
import { buildCases, validateAndWrite } from "./ch5-fc-gen-shared.mjs";
import { POOL_BUILDERS, sceneIndices100 } from "./ch5-programmatic-pools.mjs";

const plan = JSON.parse(fs.readFileSync("scripts/ch5-slot-plan.json", "utf8"));
const subs = ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7"];

for (const sub of subs) {
  const slots = plan[sub];
  const pools = POOL_BUILDERS[sub]();
  if (pools.TRUE.length < 300) throw new Error(`${sub} TRUE pool ${pools.TRUE.length} < 300`);
  if (pools.FALSE.length < 220) throw new Error(`${sub} FALSE pool ${pools.FALSE.length} < 220`);

  const seed = Number(sub.replace(".", "")) * 9973;
  const cases = buildCases({
    subsection: sub,
    slots,
    TRUE: pools.TRUE,
    FALSE: pools.FALSE,
    SCENE: pools.SCENE,
    THEORY: pools.THEORY,
    TITLES: pools.TITLES,
    sceneIndices: sceneIndices100(seed),
  });

  const out = `scripts/ch5-part-${sub}.json`;
  validateAndWrite(cases, slots, out);
}

console.log("All ch5 parts generated.");
