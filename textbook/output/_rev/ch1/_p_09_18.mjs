import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-31": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's tag table already assembled every row into the union $\\{10,20,30,40,50,60\\}$. $60$ is the one newcomer from $B$; $30,40,50$ are not second copies. A union can never drop a tagged number, so ending at $50$ would throw $60$ away. The claimed list is exactly those six tagged values.",
      "**B.** → True\n\nRows with two \"yes\" marks are the intersection: $\\{30,40,50\\}$. $10$ and $20$ miss $B$, and $60$ misses $A$. Intersection is the stricter combine, so a union-minded scan that kept $10$ or $60$ would be answering a different question. The overlap would grow only if another multiple of ten sat in both lists.",
      "**C.** → True\n\n$A\\setminus B$ is the \"yes $A$, no $B$\" rows: $\\{10,20\\}$. Difference deletes a member of $A$ only when it also sits in $B$, so $30,40,50$ leave and $10,20$ stay. Dropping $20$ because it is \"close\" to $B$'s $30$ would be treating nearness as membership. The leftover is two numbers, not three.",
      "**D.** → False\n\nThe opposite leftover is the single \"no $A$, yes $B$\" row $B\\setminus A=\\{60\\}$. Already the sizes disagree ($2$ versus $1$), and $10$ sits in the first leftover but not the second. Difference is not commutative: $A\\setminus B$ lives in $A$, $B\\setminus A$ lives in $B$. Equality would need both leftover cells to be the same set.",
      "**E.** → True\n\n$C=\\{1,2,3\\}$ never enters the multiples-of-ten table. Every member of $A$ is at least $10$, while $C$ stops at $3$, so $A\\cap C=\\emptyset$. Disjointness is that empty overlap, not a claim that the lists \"look different.\" A shared number such as $10\\in C$ would immediately kill it.",
    ],
  },
  "math-1-32": {
    solution_overview:
      "Lining $A=\\{a,b,c,d\\}$ up against $B=\\{c,d,e\\}$: the letters $c$ and $d$ appear in both, $a$ and $b$ only in $A$, and $e$ only in $B$. That one observation gives the **intersection** $A\\cap B=\\{c,d\\}$, the **union** $A\\cup B=\\{a,b,c,d,e\\}$ with each letter written once, and the two **differences** $A\\setminus B=\\{a,b\\}$ and $B\\setminus A=\\{e\\}$, which are plainly not the same collection.\n\nThe third set $C=\\{x,y\\}$ shares no letter with $A$, so $A\\cap C=\\emptyset$ and those two sets are **disjoint**.",
    tactical_explanations: [
      "**A.** → True\n\nThe overview already joined the two letter lists into $\\{a,b,c,d,e\\}$. $e$ is $B$'s only newcomer; $c$ and $d$ are not written twice. Union keeps every tagged letter once. Stopping at $d$ would throw $e$ away, and inserting $x$ would smuggle in a letter from $C$.",
      "**B.** → True\n\nShared letters are $c$ and $d$ only. $a$ and $b$ miss $B$, and $e$ misses $A$. Intersection is that overlap, not the combined five-letter list. A solver who copied the union here would report five letters instead of two.",
      "**C.** → True\n\n$A\\setminus B$ keeps $A$'s private letters $a$ and $b$. $c$ and $d$ sit in $B$, so they leave. Difference does not delete a letter of $A$ merely because it is \"next to\" $B$'s range. The leftover $\\{a,b\\}$ is two letters, not three.",
      "**D.** → False\n\n$B\\setminus A=\\{e\\}$, a singleton, while $A\\setminus B=\\{a,b\\}$. Different sizes already forbid equality, and $a$ sits in one leftover but not the other. Order of subtraction matters: the two private regions are opposite sides of the overlap, not two names for one set.",
      "**E.** → True\n\n$C=\\{x,y\\}$ shares no letter with $A=\\{a,b,c,d\\}$. Disjointness is $A\\cap C=\\emptyset$, which the overview already recorded. The lists looking like different alphabets is a hint, not the test; a single shared letter such as $c\\in C$ would be enough to fail.",
    ],
  },
  "math-1-33": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already has $A\\cup B=\\{1,\\ldots,8\\}$, so the complement inside $U=\\{1,\\ldots,10\\}$ is $\\{9,10\\}$. Those two numbers sit in neither $A$ nor $B$. Including $8$ would require $8\\notin A\\cup B$, but $8\\in B$. Complement of a union is \"outside both,\" a stricter test than complement of $A$ alone.",
      "**B.** → True\n\nDe Morgan's first law is the overview's first identity row: $(A\\cup B)^c=A^c\\cap B^c=\\{9,10\\}$. Escaping a union means escaping both sets at once. $6$ is outside $A$ but inside $B$, so it fails the \"outside both\" test. The two sides matching is the law, not a new scan.",
      "**C.** → True\n\nThe second identity row: $(A\\cap B)^c=A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$. Escaping an intersection takes only escaping one of the two sets, so the union of complements is large. Copying $(A\\cup B)^c$ here would undercount down to $\\{9,10\\}$.",
      "**D.** → True\n\n$A^c$ is $U$ minus $A$: drop $1$ through $5$, keep $\\{6,7,8,9,10\\}$. Complement is a scan of the universe, not of $A$ rewritten backwards. A solver who also dropped $6,7,8$ because those sit in $B$ would be computing $(A\\cup B)^c$ instead.",
      "**E.** → True\n\n$A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves $\\{1,2,3,6,7,8,9,10\\}$. That list keeps $A$-only, $B$-only, and neither. The neighbouring trap on similar tasks is keeping $4$ or dropping $6,7,8$; this letter does neither.",
    ],
  },
  "math-1-34": {
    tactical_explanations: [
      "**A.** → True\n\nOdds union evens reconstructs all of $U$, so the overview has $A\\cup B=U$ and therefore $(A\\cup B)^c=\\emptyset$. Complement of the whole universe is empty; there is no leftover integer between $1$ and $12$. A hole would exist only if some number of $U$ were neither odd nor even, which none is.",
      "**B.** → True\n\n$A^c$ is the evens and $B^c$ is the odds, so their intersection is empty: nothing is even and odd at once. That matches $(A\\cup B)^c=\\emptyset$, which is De Morgan in this extreme case. The identity does not get a special exception just because the union filled $U$.",
      "**C.** → True\n\n$A\\cap B=\\emptyset$ because no integer is odd and even, so $(A\\cap B)^c=U$. The other side $A^c\\cup B^c$ is evens joined with odds, again $U$. Complementing the empty set relative to $U$ always restores $U$ in full; it does not leave a smaller leftover.",
      "**D.** → True\n\nDeleting the odds from $U$ leaves the evens, so $A^c=B=\\{2,4,6,8,10,12\\}$. Complement of a partition block is the other block. Writing $A^c=A$ would be the complementary mistake: odds are not their own complement.",
      "**E.** → True\n\nRemoving nothing from $U$ leaves $U$, so $(A\\cap B)^c=U$. The mix-up is thinking an empty intersection somehow produces a small complement. Complementing $\\emptyset$ relative to a universe always gives the universe back; the claimed list is that full $\\{1,\\ldots,12\\}$.",
    ],
  },
  "math-1-35": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already has $A\\cup B=\\{p,q,r,s\\}$, so of the six letters in $U$ only $t$ and $u$ are left out. Complement of the union is \"untouched by either set.\" Including $s$ would require $s\\notin B$, but $s\\in B$. The leftover pair $\\{t,u\\}$ is forced by those four covered letters.",
      "**B.** → True\n\n$A^c=\\{s,t,u\\}$ and $B^c=\\{p,q,t,u\\}$ share $t$ and $u$, matching $(A\\cup B)^c$. Letter $s$ fails because $s\\in B$. De Morgan's first law is that agreement, not a second walk through $U$. Intersecting $A$ with $B$ instead would report $\\{r\\}$, the opposite region.",
      "**C.** → True\n\n$A\\cap B=\\{r\\}$, so $(A\\cap B)^c$ is every letter of $U$ except $r$. Joining the two complements produces the same five letters $\\{p,q,s,t,u\\}$. Escaping an intersection takes only missing one of the two sets: $p$ misses $B$, $s$ misses $A$.",
      "**D.** → True\n\nDrop $p,q,r$ from $U$ and $\\{s,t,u\\}$ remain, which is $A^c$. Complement does not also drop $s$ just because $s\\in B$; that would be $A^c\\cap B^c$. The three-letter list is $U$ minus $A$, nothing more.",
      "**E.** → True\n\nRemove the single shared letter $r$ from $U$ and $\\{p,q,s,t,u\\}$ stay. $p$ and $q$ stay because they miss $B$; $s$ stays because it misses $A$. The claimed list is that complement, not the union $\\{p,q,r,s\\}$. Keeping $r$ would mean not complementing the intersection at all.",
    ],
  },
  "math-1-36": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's grid has two rows and three columns, so six ordered pairs, matching $|A|\\cdot|B|=2\\cdot 3=6$. Product size is the number of cells, not the number of distinct symbols used ($1,2,x,y,z$ would be five, the wrong count). A pair is determined by both slots, so $(1,x)$ and $(2,x)$ are different cells.",
      "**B.** → True\n\n$(1,x)$ is the top-left cell: first slot from $A$, second from $B$. Both membership tests succeed. The pair is not \"the number $1$ and the letter $x$ floating free\"; it is that ordered pair in that order. Swapping the slots would leave this product.",
      "**C.** → False\n\n$(x,1)$ has a letter in the first slot, and $x\\notin A$. Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects; the second lives in $B\\times A$, not in $A\\times B$. Having both symbols available somewhere is not enough unless they sit in the slots $A\\times B$ requires.",
      "**D.** → False\n\nEvery pair in $A\\times B$ reads (number, letter); every pair in $B\\times A$ reads (letter, number). In particular $(1,x)$ sits in the first product and cannot sit in the second, because $1\\notin B$. Equal size does not rescue set equality: the two grids share no cell.",
      "**E.** → True\n\nSize ignores order: $2\\cdot 3=6$ and $3\\cdot 2=6$. Both products hold six pairs even though the pairs themselves differ. Cardinality equality is not set equality; statement D already showed the member lists are disjoint.",
    ],
  },
  "math-1-37": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already listed six letter-then-number pairs, matching $3\\cdot 2=6$. Product size is cells in the grid, not the five distinct symbols $\\{m,n,p,1,2\\}$. Each letter pairs with both numbers, so the count is forced once the two sizes are known.",
      "**B.** → True\n\n$(m,1)$ opens the overview's list: $m\\in A$ and $1\\in B$. Both slots of $A\\times B$ are filled correctly. Membership is that two-slot test, not a search for $m$ and $1$ appearing somewhere in either set. The swapped pair $(1,m)$ is a different object.",
      "**C.** → False\n\n$(1,m)$ puts a number first, and $1\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$). The trap is forgetting that ordered pairs care about position: having $m$ and $1$ available is not enough.",
      "**D.** → False\n\nThe overview wrote both products: letter-first versus number-first, six pairs each, no pair in common. Witness: $(m,1)$ is on the first list and missing from the second. Set equality needs identical members, not identical counts. The two products are disjoint as well as unequal.",
      "**E.** → True\n\n$3\\cdot 2=6$ and $2\\cdot 3=6$. The counts agree while the member lists in D share no pair. Size equality is the product rule, which is commutative; set equality of Cartesian products is not. A different pair of sizes, say $|A|=3$ and $|B|=1$, would still give equal counts both ways, still with different members.",
    ],
  },
  "math-1-38": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's three-bucket table already placed $A\\setminus B=\\{1,9\\}$. Shared $3,5,7$ leave $A$; $1$ and $9$ stay because they miss $B$. Difference does not also drop $9$ for sitting \"near\" $B$'s $11$. The leftover is the left outer bucket, two numbers.",
      "**B.** → True\n\nThe right outer bucket is $B\\setminus A=\\{11,13\\}$. Same shared triple deleted, other side. Copying $A\\setminus B$ here would report $\\{1,9\\}$ and miss both of $B$'s private numbers. The two leftovers are opposite private regions.",
      "**C.** → True\n\nSymmetric difference joins those two outer buckets:\n\n$$A\\triangle B=\\{1,9\\}\\cup\\{11,13\\}=\\{1,9,11,13\\}.$$\n\nEach of those four sits in exactly one of the original sets. Including $3$ would be keeping the middle bucket, which is the union, not the symmetric difference.",
      "**D.** → True\n\nThe two outer buckets cannot overlap: a number in $A\\setminus B$ is outside $B$, a number in $B\\setminus A$ is inside $B$. That emptiness is structural, so intersecting $\\{1,9\\}$ with $\\{11,13\\}$ is only a check, not a new discovery. The same emptiness holds for any pair of sets.",
      "**E.** → False\n\nUnion keeps the middle bucket $\\{3,5,7\\}$; symmetric difference throws it away. So $\\{1,9,11,13\\}\\ne\\{1,3,5,7,9,11,13\\}$. The two operations agree only when the overlap is empty, which it is not: $3$ sits in both original sets. Belonging to both is exactly what $A\\triangle B$ rejects.",
    ],
  },
  "math-1-39": {
    tactical_explanations: [
      "**A.** → True\n\n$A$ is evens and $B$ is odds, so they share nothing. Subtracting $B$ from $A$ therefore deletes nobody, and $A\\setminus B=A=\\{2,4,6\\}$. Difference empties only when the first set is contained in the second. Here the first set misses the second entirely.",
      "**B.** → True\n\nThe same disjointness the other way: $B\\setminus A=B=\\{1,3,5\\}$. None of those odds is even, so nothing is deleted. Copying $A$ here would report evens instead of odds. Opposite leftover, opposite list.",
      "**C.** → True\n\nWith an empty middle bucket, symmetric difference is the two whole sets glued together:\n\n$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}.$$\n\nEach of the six numbers sits in exactly one of $A$ or $B$, which is the entry rule. There is no overlap to discard.",
      "**D.** → True\n\nThe leftovers are the two whole sets, evens and odds. No even equals an odd, so their intersection is empty. That is the same structural emptiness as in the overlapping case: the two outer buckets of a Venn diagram never overlap, even when they happen to be the full original sets.",
      "**E.** → True\n\nUsually the union is bigger than the symmetric difference because it also keeps the shared members. Here the shared part is empty, so there is nothing extra for the union to add, and both sides equal $\\{1,2,3,4,5,6\\}$. Disjointness is exactly the situation in which $A\\triangle B=A\\cup B$. A single shared number would split them again.",
    ],
  },
  "math-1-40": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already peeled the club into chess-only $16$, both $6$, checkers-only $9$, summing to $31$. Inclusion-exclusion is the same number in one step: $22+15-6=31$. Adding $22+15$ without subtracting counts the six two-game players twice and inflates the union to $37$.",
      "**B.** → True\n\nChess-only is the chess headline minus the overlap: $22-6=16$. Those $16$ sit in $A$ and not in $B$. Using $22-15$ would be comparing the two headlines instead of peeling the shared $6$ out of $A$. The count would be $22$ only if nobody played both.",
      "**C.** → True\n\nNeither is the club total minus the union: $40-31=9$. The overview's four-region check $16+6+9+9=40$ confirms the leftover. Subtracting $22$ and $15$ from $40$ without restoring the overlap would overcount \"neither.\"",
      "**D.** → False\n\nEveryone playing both games is already someone playing at least one, so $A\\cap B\\subseteq A\\cup B$ always. Here $6<31$. The inequality $|A\\cap B|>|A\\cup B|$ is impossible for any pair of sets, not just these enrolment numbers. Intersection cannot outnumber the union that contains it.",
      "**E.** → True\n\nCheckers-only is $15-6=9$. Same peel on the other headline. Together with chess-only $16$ and both $6$, the three playing regions rebuild the union $31$. The $9$ here is a playing region, not to be confused with the other $9$ who play neither.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/09_18.json",
  patches
);
console.log("09_18 edited", n);
