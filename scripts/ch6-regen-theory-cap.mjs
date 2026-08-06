/**
 * Single-process regen so theoryUsage cap applies chapter-wide across text+table.
 * Run: node scripts/ch6-regen-theory-cap.mjs
 */
import { execSync } from "node:child_process";
import { resetTheoryUsage, THEORY_MAX_USES } from "./ch6-theory-pool.mjs";

// Each generator is still a separate process → shared Map does not persist.
// Instead: generate tables first (they inject the short Fuhrmann pool), then text.
// Caps apply within each process; table bank is where mass exact reuse lived.
console.log("THEORY_MAX_USES =", THEORY_MAX_USES);
resetTheoryUsage();

const steps = [
  "node scripts/gen-ch6-table-bank.mjs",
  "node scripts/gen-ch6-part-6.1-text.mjs",
  "node scripts/gen-ch6-part-6.2-text.mjs",
  "node scripts/gen-ch6-part-6.3-text.mjs",
  "node scripts/gen-ch6-part-6.4-text.mjs",
  "node scripts/gen-ch6-part-6.5-text.mjs",
  "node scripts/merge-ch6-banks.mjs",
];

for (const cmd of steps) {
  console.log("\n>>", cmd);
  execSync(cmd, { stdio: "inherit" });
}
