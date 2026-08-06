/**
 * Build slot plan + generate all Ch.6 banks + merge.
 * Run: node scripts/gen-ch6-all.mjs
 */
import { execSync } from "node:child_process";

const steps = [
  "node scripts/ch6-build-slot-plan.mjs",
  "node scripts/gen-ch6-part-6.1-text.mjs",
  "node scripts/gen-ch6-part-6.2-text.mjs",
  "node scripts/gen-ch6-part-6.3-text.mjs",
  "node scripts/gen-ch6-part-6.4-text.mjs",
  "node scripts/gen-ch6-part-6.5-text.mjs",
  "node scripts/gen-ch6-table-bank.mjs",
  "node scripts/merge-ch6-banks.mjs",
];

for (const cmd of steps) {
  console.log("\n>>", cmd);
  execSync(cmd, { stdio: "inherit" });
}
