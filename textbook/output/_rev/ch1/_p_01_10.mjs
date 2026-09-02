import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-2": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already solved $x^2=9$ over the integers and kept both roots, so $A=\\{-3,3\\}$. $B$ is written $\\{3,-3\\}$, the same two numbers in the opposite order. Sets do not care about order, which is why the two lists name one collection. A rushed roster-reader who treats the written first element as special would wrongly demand $A=\\{3,-3\\}$ as a sequenced match. Equality would fail only if the universe had already thrown $-3$ out.",
      "**B.** → True\n\nMembership here is not a second roster scan: $3$ already survived the overview's integer filter because $3\\in Z$ and $3^2=9$. The set-builder is a test, not a printed list you have to see first. The mix-up is waiting for $\\{3\\}$ to appear as a roster before daring to write $3\\in A$. Opposite verdict would need a universe that excludes $3$, which $Z$ does not.",
      "**C.** → False\n\nDropping the negative root is the usual square-root habit: \"the\" square root of $9$ is $3$, so $A$ should be $\\{3\\}$. That quietly replaces the universe $Z$ by the positive integers. Squaring does not discard $-3$, and $-3$ is an integer, so the overview's $A=\\{-3,3\\}$ is forced. The claimed singleton would become correct only after switching the universe to $N$, which is a different set-builder.",
      "**D.** → True\n\nCardinality counts distinct members, not distinct squares. The overview left two integers, $-3$ and $3$, and those are different points on the number line, so $|A|=2$. The tempting error is to count them as one because they square to the same $9$. A one-element $A$ would need one of those roots to fail the integer test, and neither does.",
      "**E.** → False\n\nStatement E does not reuse $A$; it changes the universe to $N$ and re-filters. The overview already did that extra pass: $3$ stays, $-3\\notin N$ leaves, so $C=\\{3\\}$. Equality with $\\{3,-3\\}$ would require $N$ to contain a negative, which it does not. Same equation, different universe, different set: that is the whole point of the set-builder's first slot.",
    ],
  },
  "math-1-3": {
    tactical_explanations: [
      "**A.** → True\n\nEach of the three letters is an independent keep-or-drop, so the power set has $2^3=8$ members. The overview already wrote them all out. A common miscount is $3^2=9$ (treating the letters as ordered pairs) or $3!=6$ (permutations of $A$ itself). Either would need a different construction than \"all subsets.\"",
      "**B.** → False\n\nThe elements of $A$ are the letters $a$, $b$, $c$. The object $\\{a,b\\}$ is a set of letters, not a letter, so it fails $\\in$ even though it passes $\\subseteq$. That $\\in$ versus $\\subseteq$ swap is the whole trap: subsethood asks whether $a$ and $b$ sit in $A$ (they do); membership asks whether the box $\\{a,b\\}$ itself is one of the three listed objects (it is not). The verdict would flip only if $A$ had been defined as a set of sets that included $\\{a,b\\}$.",
      "**C.** → True\n\n$\\emptyset\\subseteq A$ is the empty test: there is no member of $\\emptyset$ that could sit outside $A$, so the inclusion cannot fail. The mix-up is demanding that $\\emptyset$ also appear as an *element* of $A$. The overview's power set does contain $\\emptyset$, but that is $\\emptyset\\in\\mathcal P(A)$, a different line. Vacuous subsethood would fail only for a left-hand set that actually had a stray member.",
      "**D.** → False\n\nProper inclusion needs $A\\subseteq A$ *and* $A\\ne A$. The second half is impossible: the two sides are the same three-letter list. Ordinary $A\\subseteq A$ is true and is not what was asked. The verdict would flip for a *different* set $B$ that contained $A$ strictly, never for $A$ against itself.",
      "**E.** → True\n\nThe overview already named the three pairs $\\{a,b\\}$, $\\{a,c\\}$, $\\{b,c\\}$. Each omits exactly one letter, so there are three of them, matching $\\binom{3}{2}=3$. Counting ordered pairs $(a,b)$ and $(b,a)$ as different would inflate the count to $6$; subsets do not care about order, so those are the same set.",
    ],
  },
  "math-1-4": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's table already marks $\\emptyset$ as a subset of $D$ and not an element. Subsethood asks whether every member of the left-hand set sits in $D$; the empty set has no member that could fail that test. Confusing this line with $\\emptyset\\in D$ is the next letter's trap, not this one. Vacuous inclusion holds for every $D$, including this three-letter list.",
      "**B.** → False\n\n$\\in$ reads the written roster: $a$, $b$, $c$. None of those letters is the empty set, so $\\emptyset\\notin D$. The table's neighbouring column still says $\\emptyset\\subseteq D$, which is why the two symbols get swapped. Membership would become true only if $D$ had been defined to list $\\emptyset$ as one of its objects, for instance $D=\\{a,b,c,\\emptyset\\}$.",
      "**C.** → True\n\nThree independent include/exclude choices give $2^3=8$ subsets, and the overview already displayed $\\mathcal P(D)$. Recounting the display is unnecessary; the trap is $3^2=9$ or forgetting $\\emptyset$ and $D$ itself to land on $6$. Either miscount is a different construction than the power set.",
      "**D.** → False\n\nSplit the \"both\" demand. $\\{a\\}\\subseteq D$ is true because its only member $a$ sits in $D$. $\\{a\\}\\in D$ is false because the roster is three letters, not a singleton set. A conjunction dies as soon as one half dies. The $\\in$ half would flip if $D$ listed the object $\\{a\\}$ among its elements.",
      "**E.** → True\n\nReflexive inclusion $D\\subseteq D$ is immediate from the table: $D$ is a subset of $D$, and it is not an element of $D$. Every member of $D$ is, by construction, a member of $D$. That is a different claim from proper self-inclusion, which would still need $D\\ne D$.",
    ],
  },
  "math-1-5": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's two-by-two already placed $E\\setminus F$ in the \"in $E$, not in $F$\" cell: $\\{1,7\\}$. Difference deletes a member of $E$ only when it also sits in $F$, so $3$ and $5$ leave and $1$ and $7$ stay. A union-minded scan would keep the overlap as well and land on all of $E$. Nearness of $7$ to $F$'s $6$ is not membership.",
      "**B.** → True\n\nThe opposite leftover cell is $F\\setminus E=\\{4,6\\}$. Same overlap $\\{3,5\\}$ deleted, other direction. Swapping $E$ and $F$ in the difference symbol is the usual mix-up and produces $\\{1,7\\}$ instead. The two leftover piles are different regions, not two names for one set.",
      "**C.** → False\n\nThose two leftover cells are $\\{1,7\\}$ and $\\{4,6\\}$. Already $1$ sits in the first and misses the second, so the sets cannot be equal. Difference is not commutative: $X\\setminus Y$ lives in $X$, $Y\\setminus X$ lives in $Y$. Equality would hold only if both leftover regions were the same set, which for these lists they are not.",
      "**D.** → True\n\nSymmetric leftovers joined: $\\{1,7\\}\\cup\\{4,6\\}=\\{1,4,6,7\\}$. Union of the two outer cells never picks up the overlap $\\{3,5\\}$, because those numbers were deleted from both differences. Padding the union with $3$ or $5$ would be rebuilding $E\\cup F$ instead.",
      "**E.** → True\n\nA number in both differences would have to be outside $F$ (to sit in $E\\setminus F$) and inside $F$ (to sit in $F\\setminus E$). That is impossible, so the intersection of the two leftover cells is empty by shape, not by a lucky scan of $\\{1,7\\}$ against $\\{4,6\\}$. The same emptiness holds for any pair of sets, overlapping or not.",
    ],
  },
  "math-1-6": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's scan of $A$ against $B$ already left only $6$. Intersection is the stricter combine: $2,4,8,10$ miss $B$, and $B$'s $3,9,12$ miss $A$. A union scan would keep all of those and report a much larger set. The overlap would grow only if $B$ listed another even from $A$.",
      "**B.** → True\n\nStart from $A$'s five numbers and add $B$'s new ones $3,9,12$; the shared $6$ is not a second copy. That is eight distinct members, matching $|A|+|B|-|A\\cap B|=5+4-1=8$. Counting $6$ twice is the classic inflation to $9$. Union size is never the raw sum when the sets overlap.",
      "**C.** → False\n\nThe overview already walked $C$ against $A$ and kept $\\{1,3,5\\}$. The claimed $\\{1,3\\}$ quietly deletes $5$, even though $5\\notin A$. Difference has no licence to drop a member of $C$ that $A$ never listed. The verdict would flip if $5$ had sat in $A$.",
      "**D.** → False\n\n$B\\setminus C$ is not a copy of $B$. The overview dropped $3$ because $3\\in C$, leaving $\\{6,9,12\\}$. Copying the whole of $B$ treats the two lists as if they missed each other. They do not: $3$ is the witness. Disjointness of $B$ and $C$ would have been required for the claimed copy to work.",
      "**E.** → False\n\n$A\\cap C$ is $\\{2,4\\}$, not $\\{2,4,6\\}$. The extra $6$ is in $A$ but sits past $C$'s last member $5$, so it is not an overlap. Padding an intersection with a number that \"looks nearby\" is the same trap as treating nearness as membership. $C$ would have to list $6$ for that extra element to survive.",
    ],
  },
  "math-1-7": {
    tactical_explanations: [
      "**A.** → True\n\nInclusion-exclusion is the one arithmetic the overlap forces:\n\n$$|M\\cup E|=30+25-12=43.$$\n\nAdding $30+25$ counts the $12$ shared students twice; subtracting once restores a single copy. Skipping the subtraction lands on $55$, which already exceeds the cohort of $50$ and is therefore impossible as a union size.",
      "**B.** → True\n\n\"Neither\" is whoever sits outside the union. The overview already has $|M\\cup E|=43$ inside a cohort of $50$, so $50-43=7$. Subtracting the two headlines $30$ and $25$ from $50$ without restoring the overlap would undercount the union and overcount \"neither.\" The $7$ is the leftover region, not a new survey.",
      "**C.** → True\n\nOnly-Mathematics is the Math headline minus the overlap: $30-12=18$. Using $30-25$ would be comparing the two course sizes instead of peeling the shared $12$ out of $M$. Those $18$ sit in $M$ and not in $E$. The count would drop to $0$ only if every Math student also took Economics.",
      "**D.** → False\n\n$E\\subseteq M$ would need the only-Economics region empty. The overview already computed that region as $25-12=13$. Those $13$ students are in $E$ and not in $M$, which is a concrete witness against the inclusion. The inclusion would hold if the overlap were all $25$ Economics students.",
      "**E.** → False\n\nDisjointness is $|M\\cap E|=0$. The stem already states the overlap is $12$. No further Venn arithmetic is required: twelve shared students are twelve too many. The visual that \"$30$ and $25$ look like different groups\" is exactly the trap; disjointness is about the intersection, not about the headlines looking different.",
    ],
  },
  "math-1-8": {
    tactical_explanations: [
      "**A.** → True\n\nThe three blocks occupy separate thirds of $U$, so the overview's pairwise intersections are all empty. Pairwise disjointness is that fact, not a new scan: $1,2,3$ never meet $4,5,6$ or $7,8,9$. Adjacent-looking endpoints ($3$ next to $4$) are still different numbers. A shared member in any one pair would already kill the claim.",
      "**B.** → True\n\nA partition needs nonempty blocks, pairwise disjointness, and union $U$. The overview already checked all three: each block has three numbers, no pair shares, and $A\\cup B\\cup C=\\{1,\\ldots,9\\}$. Equal block sizes are not required; the one-block partition $\\{U\\}$ would also be legal. Coverage without disjointness, or disjointness with a hole, would each fail on their own.",
      "**C.** → True\n\nThe triple intersection sits inside every pairwise one. Once $A\\cap B=\\emptyset$, intersecting further with $C$ cannot create a member. This is not a new scan of the three lists; it is the observation that an empty pairwise already forces the triple empty. A nonempty triple would have required a number sitting in all three blocks at once.",
      "**D.** → False\n\nEmpty intersection is not empty difference. Because $A$ and $B$ share nothing, subtracting $B$ deletes nobody from $A$, so $A\\setminus B=\\{1,2,3\\}$. The claim treats \"no overlap\" as \"nothing left,\" which would be true of $A\\cap B$, not of $A\\setminus B$. Difference empties only when the first set is already contained in the second.",
      "**E.** → False\n\nThe leap \"empty intersection, so one factor is empty\" is the product-zero habit from arithmetic, not a set identity. Here both $A$ and $B$ have three members and still miss each other. Disjointness bans shared members; it does not erase the sets. One of them would have to be $\\emptyset$ for that implication to hold, and neither is.",
    ],
  },
  "math-1-9": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's table already lists $X^c=\\{7,8,9,10,11,12\\}$: everyone in $U$ who is missing from Python. Complement is a scan of $U$, not of $X$ itself; dropping $1$ through $6$ is the whole move. A rushed solver who also drops $7,8,9$ because those people know SQL is answering a different question ($X\\cup Y)^c$.",
      "**B.** → True\n\n$X\\cup Y$ covers $1$ through $9$, so the complement inside a $12$-person $U$ can only be $\\{10,11,12\\}$. Including $8$ or $9$ would require those employees to miss both skills, but $8,9\\in Y$. Complement of a union is \"outside both,\" which is a stricter test than complement of $X$ alone.",
      "**C.** → True\n\nDe Morgan says $(X\\cup Y)^c=X^c\\cap Y^c$. The overview already has both sides equal to $\\{10,11,12\\}$. The extra content is the meaning: numbers in both complements are people who know neither Python nor SQL. Intersecting $X$ with $Y$ instead would report the overlap $\\{4,5,6\\}$, the opposite region.",
      "**D.** → True\n\nThe second De Morgan identity is the other row of the table: $(X\\cap Y)^c=X^c\\cup Y^c=\\{1,2,3,7,8,9,10,11,12\\}$. Escaping an intersection takes only escaping *one* of the two sets, so the union of complements is large. A solver who copies $(X\\cup Y)^c$ here undercounts by keeping only $\\{10,11,12\\}$.",
      "**E.** → False\n\nThe claimed list $\\{1,2,3,10,11,12\\}$ is exactly $Y^c$, not the union of the two complements. $X^c$ still contributes $7,8,9$ (no Python, but they may know SQL). Omitting them makes the union too small. A union of complements has to keep every member of each complement, including the people who fail only one skill.",
    ],
  },
  "math-1-10": {
    tactical_explanations: [
      "**A.** → False\n\nThe overview already formed $A\\cup B=\\{1,\\ldots,8\\}$, so the complement inside $U=\\{1,\\ldots,10\\}$ is $\\{9,10\\}$. The claimed $\\{8,9,10\\}$ illegally keeps $8$, but $8\\in B$ and therefore $8\\in A\\cup B$. Complement of a union cannot contain a member of either input. Dropping $8$ from the claimed list is the whole correction.",
      "**B.** → True\n\nBoth sides of De Morgan's second law are already on the overview: $(A\\cap B)^c=A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$. The identity is \"outside the overlap iff outside at least one of the two sets.\" Checking one more scan of $A$ against $B$ would only rebuild $A\\cap B=\\{4,5\\}$, which the overview already used.",
      "**C.** → False\n\n$A^c\\cap B^c$ is \"outside both,\" which De Morgan identifies with $(A\\cup B)^c=\\{9,10\\}$. The claimed $\\{6,7,8,9,10\\}$ is $A^c$ alone: those extra $6,7,8$ miss $A$ but still sit in $B$, so they fail $B^c$. Intersecting complements is stricter than taking one complement. The verdict would flip if $B$ also missed $6,7,8$.",
      "**D.** → True\n\nComplement of the overlap: $A\\cap B=\\{4,5\\}$, and removing those two from $U$ leaves $\\{1,2,3,6,7,8,9,10\\}$. That list keeps $1,2,3$ (in $A$ only), $6,7,8$ (in $B$ only), and $9,10$ (in neither). The trap on the neighbouring false claims is keeping $4$ or dropping $6,7,8$; this letter does neither.",
      "**E.** → False\n\n$A^c\\cup B^c$ must include every member of $A^c=\\{6,7,8,9,10\\}$. The claimed $\\{1,2,3,9,10\\}$ is $B^c$ alone, so it drops $6,7,8$. Those three are outside $A$ and therefore belong in any union that includes $A^c$. Writing one complement in place of the union of complements is the undercount.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/01_10.json",
  patches
);
console.log("01_10 edited", n);
