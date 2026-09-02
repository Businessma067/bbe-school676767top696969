import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "11_20.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
const add = {
  "math-1-11": { 1: "Two recovered partitions of the same $A$ already have different block counts, so the 'must' is false as a general rule." },
  "math-1-12": { 0: "Five keep-or-drop choices multiply to $32$, empty set included. That recovered total is the power-set count this letter names.", 1: "Proper keeps the empty set and drops only $A$. The recovered $31$ is that family, not the nonempty family." },
  "math-1-14": { 2: "Exact two is raw pair minus triple. The recovered $20$ is that subtraction. Copying $30$ skips it.", 3: "The $+10$ repair is the triple added back. The recovered $40$ includes it; the claimed $30$ does not." },
  "math-1-15": { 1: "Equal cardinality with a proper subset is the recovered point of $E$ inside $N$. The word 'must' is the finite slogan, and it fails." },
  "math-1-16": { 1: "The recovered roster has no nested sets. The singleton box is a subset and not an element." },
  "math-1-17": { 0: "The recovered two-element set matches $B$. Equality of sets is that match, not a preferred writing order." },
  "math-1-18": { 0: "Four independent choices give $16$ subsets. The recovered power-set size includes $\\emptyset$ and $D$.", 2: "Four omissions give four triples. The recovered $\\binom{4}{3}=4$ is that count.", 4: "Six visible pairs, none extra. The recovered $\\binom{4}{2}=6$ is not $5$." },
  "math-1-20": { 3: "Overlap at $2$ is enough. The recovered $\\mathcal S'$ fails disjointness even if the union still covers $G$.", 4: "An outsider cannot sit in a block of a partition of $G$. The recovered $7$ is that outsider." },
};
for (const t of arr) {
  const map = add[t.id] || {};
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, map[i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
