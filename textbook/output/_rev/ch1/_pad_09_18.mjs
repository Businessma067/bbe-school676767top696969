import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "09_18.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const EX3 = {
  "math-1-31": [
    "Union is the combined list, written once. The recovered six-element roster already includes every multiple of ten that appears in $A$ or in $B$.",
    "Intersection is the overlap cell only. The recovered three shared multiples are $30,40,50$, and that is the whole of $A\\cap B$.",
    "The $A$-only cell is two numbers, not three. Shared $30$ leaves because it sits in $B$. The recovered leftover $\\{10,20\\}$ is that cell after the overlap is removed. Keeping $30$ would reprint part of the intersection under a difference heading.",
    "",
    "Tiny $C$ and large $A$ miss each other because their ranges miss each other. The recovered empty intersection is disjointness, not a size comparison.",
  ],
  "math-1-32": [
    "Five letters in the recovered union are five membership successes: $a,b$ from $A$ only, $c,d$ from both, $e$ from $B$ only. Nothing else appears, and nothing is written twice.",
    "Shared means both lists contain the letter. Only $c$ and $d$ pass. Letter $e$ fails the $A$ test, so the recovered intersection does not contain $e$. A union would have kept it.",
    "Difference asks which letters of $A$ miss $B$. The recovered answer is $a,b$. Letters $c,d$ fail that miss-test because they sit in $B$.",
    "",
    "Disjointness is empty overlap, not 'looks different.' The recovered $A\\cap C$ is empty because $x$ and $y$ are not letters of $A$. If $C$ had included $c$, the claim would fail.",
  ],
  "math-1-33": [
    "Complement of a union is outside both. The recovered $\\{9,10\\}$ is that outside. Number $8$ is inside $B$, so it is inside the union.",
    "Two recovered lists match: $(A\\cup B)^c$ and $A^c\\cap B^c$, both $\\{9,10\\}$. That match is De Morgan, not a new scan of $U$.",
    "Escaping the overlap $\\{4,5\\}$ leaves eight numbers. Joining the complements leaves the same eight. The recovered identity is that agreement.",
    "Scan $U$ and drop $1$ through $5$. What remains is $\\{6,7,8,9,10\\}$, including the $B$-only numbers that miss $A$. The recovered $A^c$ is that scan. Rewriting $A$ backwards would be a different, illegal operation.",
    "Everyone except $4$ and $5$ stays. The recovered eight-number list is $A$-only plus $B$-only plus neither. Dropping $6,7,8$ would mix this complement with the neither-region $\\{9,10\\}$. The claim names the eight-number list, and that is the list the overview recovered.",
  ],
  "math-1-34": [
    "Coverage of $U$ by odds and evens leaves no complement. The recovered empty set is $(A\\cup B)^c$, not $U$ itself.",
    "The two complements are the two blocks, so they miss each other. The recovered intersection of complements is empty, matching the empty complement of the union.",
    "Complement of empty is $U$. The recovered right-hand side $A^c\\cup B^c$ is evens joined with odds, also $U$. Both sides are the twelve-element universe.",
    "Odds deleted from $U$ are the evens. The recovered $A^c$ is $\\{2,4,6,8,10,12\\}$, which is $B$. Dropping $2$ would punch a hole in that block. Including $1$ would keep an odd that $A$ already claimed.",
    "",
  ],
  "math-1-35": [
    "Four letters in, two letters out. The recovered complement of the union is $\\{t,u\\}$. Letter $s$ is in, because $s\\in B$.",
    "Miss both sets, not just one. The recovered intersection of complements is $t,u$. Letter $s$ misses only $A$, so it fails. Letter $p$ misses only $B$, so it fails too. De Morgan matches this pair to $(A\\cup B)^c$.",
    "Five letters remain after deleting $r$. That recovered list is $(A\\cap B)^c$ and also $A^c\\cup B^c$. A two-letter neither-region would be the other De Morgan identity, the one for unions.",
    "Three letters remain after deleting $p,q,r$. The recovered $A^c$ is $\\{s,t,u\\}$, and $s$ stays because the test is 'miss $A$,' not 'miss $A$ and miss $B$.'",
    "The five-letter recovered list keeps $p,q$ ($A$-only), $s$ ($B$-only), and $t,u$ (neither). Dropping $s$ would delete a letter that misses $A$ and therefore survives complement of the intersection. The claim keeps $s$.",
  ],
  "math-1-36": [
    "Product size counts cells, not symbols. Two numbers and three letters make six ordered pairs in the recovered grid. Adding the factor sizes would answer a different question.",
    "The pair $(1,x)$ is the first cell of the recovered grid. First slot $1\\in A$, second slot $x\\in B$. Both tests succeed. The reversed pair is a different cell in a different grid.",
    "",
    "",
    "Counts commute: $2\\cdot 3=3\\cdot 2$. The recovered $B\\times A$ still has six pairs. Those pairs are letter-first, so they are not the $A\\times B$ pairs, but there are still six of them. Size equality is this letter. Member equality was the previous letter, and it failed.",
  ],
  "math-1-37": [
    "The recovered roster has six letter-first pairs. That is $3\\times 2$, the product rule, not an inventory of the five symbols $m,n,p,1,2$. Five symbols can make six ordered pairs because order and repetition of roles matter.",
    "Membership is two slots. Letter $m$ is in $A$, number $1$ is in $B$, so $(m,1)$ sits in the recovered $A\\times B$. A bag $\\{m,1\\}$ is not an ordered pair and is not what the claim named.",
    "The first slot of $(1,m)$ is the number $1$, which is not a letter of $A$. That is the whole failure. The recovered $A\\times B$ list is letter-first throughout. The reversed pair belongs to $B\\times A$, a different product with the same size. What would make $(1,m)$ legal in $A\\times B$? $A$ would have to contain $1$. It contains $m,n,p$ only. Treating pairs as unordered would hide the failure; the product does not treat them as unordered.",
    "Set equality needs matching members. The recovered lists are letter-first versus number-first, disjoint six-element sets. The shared count $6$ is letter E. This letter is the identity claim, and one witness $(m,1)$ already kills it.",
    "Two times three equals three times two. The recovered cell counts match. Different labels on the cells do not change the count. That is why size equality holds while set equality fails.",
  ],
  "math-1-38": [
    "Private to $A$ means misses $B$. The recovered $A\\setminus B$ is $1$ and $9$. Shared $3$ sits in $B$, so difference deletes it. Keeping $3$ would reprint overlap under a difference heading.",
    "Private to $B$ means misses $A$. The recovered $B\\setminus A$ is $11$ and $13$. Copying $\\{1,9\\}$ answers the other leftover. Difference is not commutative, so the two recovered leftovers are different pairs.",
    "Exactly-one is the two outer buckets joined. The recovered $A\\triangle B$ is $\\{1,9,11,13\\}$. The middle bucket $3,5,7$ is absent on purpose. Putting it back would be union, which is at-least-one rather than exactly-one.",
    "The outer buckets cannot overlap: a number cannot miss $B$ and sit in $B$. The recovered empty intersection of leftovers is that impossibility. Reporting $\\{3,5,7\\}$ would be $A\\cap B$, the middle bucket, a different operation.",
    "",
  ],
  "math-1-39": [
    "Subtracting a disjoint $B$ from $A$ deletes nobody. The recovered leftover is $A$ itself, the three evens. Reporting $\\emptyset$ copies the empty overlap into the difference slot, the same mix-up as in the partition task.",
    "Subtracting a disjoint $A$ from $B$ deletes nobody. The recovered leftover is $B$ itself, the three odds. The two leftovers are the two original sets, still disjoint.",
    "Glue the two whole sets together and you get six numbers, each in exactly one set. The recovered symmetric difference is $\\{1,2,3,4,5,6\\}$. That list is also the union, because the middle bucket is empty.",
    "Leftovers equal to $A$ and $B$ remain disjoint, because $A$ and $B$ were disjoint. The recovered intersection of leftovers is empty. Two nonempty sets of opposite parity cannot share a member.",
    "When overlap is empty, at-least-one and exactly-one keep the same members. The recovered $A\\triangle B$ and $A\\cup B$ are the same six-element list. That coincidence is the definition of disjointness, not a numerical accident. In the previous task the middle bucket was nonempty, so the operations split. Here the middle bucket is empty, so they agree. What would make them split again? Any shared member. These lists have none.",
  ],
  "math-1-40": [
    "Inclusion-exclusion subtracts the double-counted six. The recovered union is $31$, not $37$. That $31$ still sits inside the club of $40$. Adding the headlines without subtracting counts the two-game players twice.",
    "Only-chess is headline minus overlap. The recovered $16$ is $22-6$, people in $A$ and not in $B$. Reporting $22$ keeps the six who also play checkers. Reporting $9$ copies checkers-only or neither, different cells.",
    "Outside both circles is club minus union. The recovered neither-count is $9$. The matching checkers-only $9$ is a different region that happens to have the same size. A negative remainder from $40-22-15$ is the route that forgot to restore the overlap.",
    "",
    "Only-checkers is $15-6$. The recovered $9$ people sit in $B$ and miss $A$, inside the union. The neither-cell's $9$ sit outside the union. Same size, different membership tests.",
  ],
};

for (const t of arr) {
  const extras = EX3[t.id];
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, extras[i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
