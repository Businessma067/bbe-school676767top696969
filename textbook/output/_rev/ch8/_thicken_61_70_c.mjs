import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra) {
  const t = text.trimEnd();
  const idx = t.lastIndexOf("\n");
  return t.slice(0, idx).trimEnd() + "\n\n" + extra.trim() + "\n\n" + t.slice(idx + 1);
}

const extras = {
  "math-8-64": {
    4: `The opposite verdict would have needed a specimen with a larger coefficient, so that $G(64)$ rose through $200$. At $A=8$, sixty-four grams is locked near $181$ cm², and $200$ cm² waits until $m=81$.`,
  },
  "math-8-67": {
    2: `Writing $1.728 A = A$ and "solving" for $A$ is another fake recovery: the only solution is the useless $0=0$ after cancelling. Scale never pins a level. The $500$ kg reference is the missing level, and it cannot be read off the $72.8\\%$ note.`,
    3: `Letter E then reads the $20\\%$ stretch, whose exact factor is the design note $1.728$. A $10\\%$ stretch and a $20\\%$ stretch are different experiments on the same cube, and both sit well above lockstep.`,
  },
  "math-8-69": {
    3: `The $12$ m³/h cutoff is past $10$, not a rounding of it. Changing the nozzle from $4\\sqrt{H}$ to $2\\sqrt{H}$ would have halved composed speed and pushed the inverse to $q=20$, past $12$, flipping the letter. The stem's $4\\sqrt{H}$ locks $q=10$.`,
  },
  "math-8-70": {
    3: `The opposite verdict would have needed the cap at or above $56.25$ drivers. The stem caps the shift at $36$. Letter B's $120$ pallets at the cap is the legal ceiling this letter reads against $150$.`,
    4: `The opposite verdict would have needed a peak in $T$ before $s=36$. Square-root throughput has none. A safety rule that capped pallets directly could bind without capping drivers; this stem caps drivers, and because $T$ rises that cap is also a pallet cap.`,
  },
};

const fp = path.join(__dirname, "61_70.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    t.tactical_explanations[Number(j)] = insertBeforeCloser(
      t.tactical_explanations[Number(j)],
      extra
    );
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) console.log(t.id, t.tactical_explanations.map(words).join(" "));
