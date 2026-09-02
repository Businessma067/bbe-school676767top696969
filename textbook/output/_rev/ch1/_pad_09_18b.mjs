import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "09_18.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const extra = {
  "math-1-33": { 2: "Escaping an intersection is weaker than escaping a union. A letter or number needs only to miss one of the two sets. That is why $1,2,3$ (miss $B$) and $6,7,8$ (miss $A$) both survive, together with $9,10$ (miss both). The recovered eight-number list is that weaker filter. The stricter filter, miss both, is $\\{9,10\\}$, already used in letter A. Swapping the two filters is the standard De Morgan slip, and it would shrink this list by six numbers. What would make the eight-number list fail? If $6$ sat in $A$, it would be in the overlap and would leave the complement. The given $A$ stops at $5$. The identity $(A\\cap B)^c=A^c\\cup B^c$ is the observation that two recovered lists match, not a licence to rescan $U$ from scratch." },
  "math-1-34": { 4: "Because $A$ and $B$ partition $U$, their intersection is empty, so complementing that intersection cannot delete anyone. Every integer from $1$ to $12$ is odd or even, hence outside the empty overlap, hence in the recovered $(A\\cap B)^c$. That list is $U$ itself, twelve numbers, which is also $A^c\\cup B^c$ by De Morgan. Reporting $\\emptyset$ copies $A\\cap B$ into a complement slot. Reporting the evens copies $A^c$ into a complement-of-intersection slot. Neither is this claim. The claim is the full universe, and that is what the overview recovered. What would make the complement empty? The overlap would have to be all of $U$, which would require every integer to be both odd and even." },
  "math-1-35": { 4: "Complement of a singleton overlap inside a six-letter $U$ must have five letters. The recovered list $\\{p,q,s,t,u\\}$ is those five: $A$-only, $B$-only, and neither. Letter $r$ is the one deletion. Letter $s$ looks dangerous because it sits in $B$, but missing $A$ is enough to escape an intersection. Dropping $s$ would mix this complement with $(A\\cup B)^c=\\{t,u\\}$, the stricter outside-both filter. The two De Morgan identities are different recovered lists, two letters versus five. This claim names the five. What would make a two-letter list honest here? The claim would have to name $(A\\cup B)^c$, not $(A\\cap B)^c$." },
  "math-1-39": { 1: "The three odds are $B$, and they all miss the evens, so difference deletes nobody. The recovered leftover is $\\{1,3,5\\}$, not a proper subset of $B$ and not the evens. Copying $\\{2,4,6\\}$ would reverse the difference and answer letter A again. Disjointness makes each leftover equal to the original set on that side. That is the point of this pair of lists: empty middle bucket, full outer buckets." },
};

for (const t of arr) {
  const map = extra[t.id];
  if (!map) continue;
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, map[i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
