import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "11_20.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const add = {
  "math-1-11": ["The recovered $P$ is three pairs that cut $A$ with no leftover number and no shared number.", "The recovered examples already vary in block count, so 'exactly $n$ blocks' cannot be required.", "", "", ""],
  "math-1-12": ["The recovered total $32$ is the power-set count, empty set included, $A$ included.", "The recovered proper family still contains the empty set. That is allowed.", "The recovered size-$4$ row is $5$, not $10$. Wrong row of the binomial table is the whole false figure.", "", "The recovered even-size count is $16$, empty set included as size $0$. Half of $32$ is $16$, not $15$."],
  "math-1-13": ["", "The recovered union is open at $15$ because both inputs excluded $15$. Closing that end is a false figure.", "", "", ""],
  "math-1-14": ["", "", "The recovered exact-pair region is $20$, ten below the raw pair total, and those ten are the triple visitors.", "The recovered only-$A$ count is $40$, ten above the claimed $30$, and those ten are the triple added back.", ""],
  "math-1-15": ["", "The recovered bijection shows equal cardinality. Finite leftover-counting is the slogan this example was built to refute.", "", "", ""],
  "math-1-16": ["The recovered roster contains the number $6$. This letter is that lookup, not a test of the singleton box.", "The recovered elements are six numbers. A singleton set is not one of those numbers.", "", "", ""],
  "math-1-17": ["The recovered $A$ is the two-element set $\\{2,3\\}$, matching $B$.", "", "", "", ""],
  "math-1-18": ["The recovered power set has $16$ members from four keep-or-drop choices.", "", "The recovered triple count is $4$, one omission for each of four letters.", "", "The recovered pair count is $6$. The false $5$ drops a pair with no rule for which pair to drop."],
  "math-1-19": ["The recovered walk through $1,2,3$ finds each in $F$. No counterexample appears.", "", "", "The recovered $E\\subseteq E$ is reflexivity, not proper self-inclusion.", "The recovered two sides are the same list, so inequality is impossible and proper self-inclusion fails."],
  "math-1-20": ["The recovered pairwise scan finds three empty intersections, one for each pair of blocks.", "", "The recovered three checks all pass, so $\\mathcal S$ is a partition of $G$.", "", ""],
};

for (const t of arr) {
  const row = add[t.id];
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, row[i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
