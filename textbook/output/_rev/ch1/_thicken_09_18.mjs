import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "09_18.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const EX2 = {
  "math-1-31": [
    "The recovered union is larger than $A$ by exactly one newcomer, $60$. Dropping that newcomer would reprint $A$ under a union heading. The claimed roster keeps it.",
    "Three shared multiples of ten is the whole overlap. $10$ and $20$ miss $B$; $60$ misses $A$. The recovered intersection does not borrow from either leftover.",
    "Difference keeps the $A$-only cell. The recovered cell is $10$ and $20$, not the shared $30,40,50$ and not $B$'s private $60$.",
    "A student who writes $A\\setminus B=B\\setminus A$ as a slogan is importing commutativity from union and intersection. Union and intersection commute. Difference does not. The recovered leftovers $\\{10,20\\}$ and $\\{60\\}$ are the picture of that failure: different sizes, different members, one witness $10$ already enough. What would make them equal? The two lists would have to be the same set. They are not. $A$ owns $10$ and $20$ that $B$ never had, and $B$ owns $60$ that $A$ never had. Checking that both leftovers are 'what remains after the overlap' describes the construction and then stops. The claim asks whether the remaining members match. They do not.",
    "Ranges that do not meet cannot share a member. $C$ tops out at $3$; $A$ begins at $10$. The recovered empty overlap is that gap, not a guess.",
  ],
  "math-1-32": [
    "Five distinct letters, each written once, is the recovered union. Shared $c$ and $d$ are not a second copy each.",
    "Overlap is $c,d$ only. Letter $e$ is $B$-only and cannot survive an intersection with $A$.",
    "Private to $A$ means $a,b$. Letters $c,d$ sit in $B$, so difference deletes them. The recovered leftover does not keep a letter just because it started in $A$.",
    "The recovered leftovers are $\\{a,b\\}$ and $\\{e\\}$. A pair is not a singleton. Equality of sets is equality of members, and $a$ is not $e$. The slogan that both leftovers are 'what remains after removing $c,d$' is true as a description of the method and false as a claim that the results match. What would make them match? $A$ and $B$ would need the same private letters. Here $A$ keeps two letters $B$ never listed, and $B$ keeps $e$ that $A$ never listed. Difference fails to commute on any overlapping pair that is not equal, and these letter lists are a small picture of that.",
    "Letters $x,y$ are not among $a,b,c,d$. One missing shared letter is all disjointness needs, and here both of $C$'s letters miss $A$.",
  ],
  "math-1-33": [
    "The neither-region inside a ten-element $U$ is $9$ and $10$ only. Number $8$ sits in $B$, so it sits in the union, so it cannot sit in the complement of the union. The recovered list does not pad that closed end.",
    "De Morgan's first law is the observation that two recovered lists match: complement of the union, and intersection of the complements. Both are $\\{9,10\\}$. Numbers $6,7,8$ miss $A$ and hit $B$, so they survive $A^c$ and die in the intersection.",
    "The eight-number list is everyone except the overlap $\\{4,5\\}$. That is complement of the intersection, and it is also the union of the complements. The recovered agreement is De Morgan's second law on these lists. Swapping to an intersection of complements would shrink the list to $\\{9,10\\}$ and break the identity.",
    "Complement of $A$ still includes $B$-only numbers. Those miss $A$, which is the only test $A^c$ runs. The recovered $\\{6,7,8,9,10\\}$ is that scan of $U$, not a rewrite of $A$ backwards.",
    "Keep $A$-only $1,2,3$, keep $B$-only $6,7,8$, keep neither $9,10$, drop only $4,5$. That is the recovered complement of the overlap. It is not $A^c$ alone and not the neither-region alone.",
  ],
  "math-1-34": [
    "Odds and evens together are all of $U$. Complement of that union has nowhere to live. The recovered empty complement is that coverage, not an empty universe.",
    "A partition block intersected with its complement is empty. Here $A^c=B$ and $B^c=A$, so $A^c\\cap B^c=B\\cap A=\\emptyset$, matching $(A\\cup B)^c$. The recovered De Morgan check is that extreme case.",
    "Complement of the empty overlap is the whole universe. Reporting $\\emptyset$ on the right-hand side would copy the intersection instead of complementing it. The recovered $(A\\cap B)^c$ is all twelve numbers, which is also $A^c\\cup B^c$, evens joined with odds.",
    "Delete the odds, keep the evens. The recovered $A^c$ is $B$ itself. Complement of a partition block is the other block. Including $1$ would keep an odd; dropping $2$ would lose an even.",
    "This identity is the extreme complement: remove nothing, keep $U$. The claimed roster is $\\{1,\\ldots,12\\}$. A student who writes $\\emptyset$ has answered the intersection, not its complement. Because $A$ and $B$ partition $U$, the overlap is empty, so complementing it restores every integer from $1$ to $12$. That is why the recovered list is the full universe, not a hole and not the evens alone. What would make the complement empty? The overlap would have to be $U$, which would need every integer to be both odd and even. None is.",
  ],
  "math-1-35": [
    "Of six letters, four sit in the union $p,q,r,s$. The recovered outside is the other two, $t$ and $u$. Letter $s$ is not outside: it sits in $B$.",
    "Intersection of complements keeps letters that miss both $A$ and $B$. The recovered pair is $t,u$. Letter $s$ misses $A$ and hits $B$, so it fails the second filter.",
    "Delete the one shared letter $r$ and five letters remain. Joining $A^c$ with $B^c$ produces the same five. The recovered De Morgan side is that five-letter list, not the neither-pair $\\{t,u\\}$.",
    "Complement of $A$ keeps $s$, because $s$ misses $A$. Deleting $s$ would run a second filter the claim did not ask for. The recovered $A^c$ is $\\{s,t,u\\}$.",
    "Letter $s$ is $B$-only, so it misses $A$, so it survives complement of the intersection. Dropping $s$ would shrink the recovered five-letter list to the neither-region. The claim names the five-letter list.",
  ],
  "math-1-36": [
    "Two rows and three columns are six cells. Adding $2+3$ counts the factor sizes, not the pairs. The recovered grid has six ordered pairs.",
    "Both slots match: $1\\in A$ and $x\\in B$. The recovered first cell is that pair. Reversing it is a different object.",
    "The recovered $A\\times B$ grid is number-first. The pair $(x,1)$ is letter-first, so it fails the first-slot test. It does sit in $B\\times A$. Treating ordered pairs as unordered two-element sets would accept both $(1,x)$ and $(x,1)$ and then erase the distinction the product was built to keep. The first coordinate is a role. What would make $(x,1)\\in A\\times B$? $A$ would have to contain the letter $x$. The given $A$ is $\\{1,2\\}$. The matching count $6=6$ is a separate true claim and does not move this pair across products.",
    "Same size is letter E. This letter asks whether the member lists match. They do not: every recovered $A\\times B$ pair is number-first, every recovered $B\\times A$ pair is letter-first, and $(1,x)$ is a witness in one list missing from the other. Naming the products equal is a false figure built from the product rule commuting as arithmetic. Arithmetic commutes. Ordered pairs do not. What would make $A\\times B=B\\times A$? The two factors would need to be the same set. Here one is numbers and one is letters.",
    "The product rule $2\\cdot 3=3\\cdot 2$ is why the counts agree. The turned grid still has six cells. Different names on those cells are letter D's problem, not this letter's.",
  ],
  "math-1-37": [
    "Three letters times two numbers is six pairs, not five symbols. The recovered roster lists those six letter-first pairs.",
    "Letter then number: $m\\in A$ and $1\\in B$. The recovered roster begins with $(m,1)$. Both slots succeed.",
    "Number-first $(1,m)$ fails the first slot because $1\\notin A$. The recovered $A\\times B$ list never begins with a number. That reversed pair lives in $B\\times A$. What would make it legal in $A\\times B$? $A$ would have to contain $1$. The given $A$ is $\\{m,n,p\\}$. Equal size of the two products does not relocate the pair. Order is the whole test.",
    "Letter-first versus number-first is a complete split of the two recovered lists. They share no pair. The count $6$ agrees and is a different claim. Naming the lists equal copies that count into a set identity it does not support. A witness $(m,1)$ sits in $A\\times B$ and misses $B\\times A$ because $m\\notin B$.",
    "Turn the grid: two rows of three become three rows of two, still six cells. The recovered counts match. The names on the cells all change, which is why set equality fails while size equality holds.",
  ],
  "math-1-38": [
    "The $A$-only bucket is $1$ and $9$. Shared $3,5,7$ leave because they sit in $B$. The recovered leftover is that outer cell, not the overlap.",
    "The $B$-only bucket is $11$ and $13$. Copying $\\{1,9\\}$ would reverse the difference. The recovered opposite leftover is $B$'s private odds.",
    "Join the outer buckets and you get four numbers, each in exactly one set. The recovered symmetric difference has no $3$. Putting $3$ back would be union.",
    "Outside $B$ cannot be inside $B$. The two recovered leftovers are disjoint by that clash, not by a coincidence of these particular odds. Intersecting $A$ with $B$ instead would report the middle bucket $\\{3,5,7\\}$, a different question.",
    "Union means at least one. Symmetric difference means exactly one. The recovered lists differ by the middle bucket $\\{3,5,7\\}$. Naming the operations equal puts that bucket back after the definition removed it. What would make them coincide? Empty overlap. The overview filled the middle bucket with three numbers. Copying the next task, where disjoint lists make the operations agree, would miss that these lists are not disjoint. The recovered union has seven members; the recovered symmetric difference has four.",
  ],
  "math-1-39": [
    "No shared member means difference deletes nobody. The recovered $A\\setminus B$ is the three evens, not $\\emptyset$. Empty overlap is the middle cell, not the left cell.",
    "The three odds all miss $A$, so they all stay. The recovered $B\\setminus A$ is $B$ itself. Copying the evens would reverse the difference.",
    "Empty middle bucket means symmetric difference is the two whole sets glued together. The recovered list is the six small integers, each in exactly one of $A$ or $B$. Dropping the evens or the odds would write one leftover instead of both.",
    "Evens versus odds is the recovered disjointness. Their leftovers are the same two sets, still disjoint. Nonempty leftovers need not overlap. These two cannot overlap, because no even equals an odd.",
    "This is the special case the previous task named. With nothing in the middle bucket, 'at least one' and 'exactly one' keep the same members. The recovered common list is $\\{1,2,3,4,5,6\\}$. Copying the previous false verdict, where overlap $3,5,7$ made union larger, would ignore the disjointness that is the whole point of these lists. Disjointness is exactly when $A\\triangle B=A\\cup B$. Here both recovered sides are the six numbers.",
  ],
  "math-1-40": [
    "Six two-game players counted twice make $37$. Subtracting once restores $31$. The recovered union is that cleaned total, still inside the club of $40$.",
    "Chess-only is not the chess headline $22$. The recovered $16$ has already removed the six who also play checkers. Those sixteen sit in $A$ and miss $B$.",
    "Neither is outside both circles: club minus union. The recovered $9$ is $40-31$. Checkers-only is also $9$ by coincidence of sizes, a different cell: in $B$, not in $A$, still inside the union. Subtracting both headlines from $40$ without restoring the overlap goes negative and is the wrong route.",
    "The both-games six are already among the at-least-one thirty-one. A region cannot outnumber a region that contains it. The false inequality $6>31$ is the wrong direction for any two sets, not a close miss on these numbers. The recovered gap $6<31$ is the expected direction. Mixing the headlines $22$ and $15$ into this comparison replaces intersection-versus-union with a different pair of counts. What would make the claim true? Nothing in the algebra of sets. Intersection sits inside union always.",
    "Checkers-only is $15-6=9$, people in $B$ and not in $A$. Matching the neither-count $9$ is coincidence. The recovered checkers-only cell is still inside the union, not outside both circles.",
  ],
};

for (const t of arr) {
  const extras = EX2[t.id];
  if (!extras) throw new Error("missing " + t.id);
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, extras[i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
console.log("thickened", fp);
