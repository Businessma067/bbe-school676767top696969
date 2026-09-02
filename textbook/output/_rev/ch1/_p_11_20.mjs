import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-11": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already checked $P$: the three pairs use distinct numbers and cover $A=\\{1,\\ldots,6\\}$. Nonempty, pairwise disjoint, union equal to $A$: that is the definition. A partition does not also need equal block sizes or a prescribed number of blocks; these three pairs just happen to be the same size.",
      "**B.** → False\n\nBlock count is free. The same six-element $A$ admits the one-block partition $\\{A\\}$ and the six-singleton partition, both valid, already named in the overview. Forcing \"number of blocks equals $n$\" would ban clumping. Any $n\\ge 2$ has at least those two constructions, so the \"must\" is false.",
      "**C.** → False\n\n$Q$ fails pairwise disjointness: the two blocks share $3$. Coverage is then irrelevant; one broken condition already disqualifies a partition. The trap is checking only that the union still equals $A$ (it does) and ignoring the overlap. A legal two-block split would need to put $3$ in exactly one block.",
      "**D.** → False\n\n$R$'s blocks are nonempty and disjoint, but the union is $\\{1,2,3,4,5\\}$, which misses $6\\in A$. Coverage is the third partition demand, and a hole kills it. Pairwise disjointness cannot rescue a missing element. Adding $\\{6\\}$ as a fourth block would repair this particular $R$.",
      "**E.** → True\n\nFor this $A$ with $n=6\\ge 2$, the overview already exhibited two different partitions (one block versus six singletons). The same two constructions work for any set with at least two elements. A set of size $1$ would have only one partition, which is why the claim needs $n\\ge 2$.",
    ],
  },
  "math-1-12": {
    tactical_explanations: [
      "**A.** → True\n\nEach of five elements is an independent include/exclude, so $2^5=32$ subsets. The overview's table already has that total. A common miscount is $5^2=25$ or $5!=120$. Either is a different construction than the power set.",
      "**B.** → True\n\nProper subsets are all subsets except $A$ itself: $32-1=31$. That is not the same subtraction as \"nonempty,\" even though the two counts happen to agree for this $n$ (both drop one set: $A$ versus $\\emptyset$). Forgetting to drop $A$ would report all $32$.",
      "**C.** → False\n\nChoosing $4$ out of $5$ is choosing which one element to omit, five ways:\n\n$$\\binom{5}{4}=5,$$\n\nnot $10$. The $10$ looks like $\\binom{5}{2}$, the two-element count. Size $4$ and size $2$ are complementary, but they are not equal when $n=5$ is odd.",
      "**D.** → True\n\nNonempty subsets drop only $\\emptyset$, leaving $32-1=31$. Same numeral as the proper-subset count, different missing set. The trap is thinking proper and nonempty are the same family; they agree in size here only because $|A|$ is finite and we drop one set either way.",
      "**E.** → False\n\nEven sizes $0,2,4$:\n\n$$\\binom{5}{0}+\\binom{5}{2}+\\binom{5}{4}=1+10+5=16.$$\n\nSaying $15$ is the off-by-one from forgetting $\\emptyset$ or from $32/2-1$. For any finite set the even-sized and odd-sized subsets are equally many, here $16$ and $16$, so $15$ cannot be right.",
    ],
  },
  "math-1-13": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already tightened both inequalities to $5\\le x\\le 10$, i.e. $[5,10]$. Both endpoints survive: $5$ is the closed left end of $B$ and sits in $A$, and $10$ is the closed right end of $A$ and sits in $B$. Opening either end would throw out a point that passed both tests. Below $5$ or above $10$, one of the two intervals has already ended.",
      "**B.** → False\n\nUnion runs from just above $0$ to just below $15$, so $(0,15)$, not $(0,15]$. The right end $15$ fails $x<15$ in $B$ and fails $x\\le 10$ in $A$, so $15\\notin A\\cup B$. Closing a half-open union is the classic endpoint trap: a union cannot include a point that both inputs excluded.",
      "**C.** → True\n\n$10$ is the right endpoint of $A=(0,10]$, hence in $A$, and $5\\le 10<15$, hence in $B$. Both memberships hold, so $10$ sits in the intersection $[5,10]$. The neighbouring false claims fiddle with whether $10$ is open or closed; here both intervals include it.",
      "**D.** → False\n\n$A\\setminus B$ is $A$ minus $B$, i.e. the overview's leftover $(0,5)$. The point $5$ sits in $A$ *and* in $B$ (it is $B$'s closed left end), so difference deletes it. $5\\in A\\setminus B$ would require $5\\notin B$, which is false. Closed versus open at $5$ is the whole issue.",
      "**E.** → False\n\n\"$x\\in A\\Rightarrow x\\in B$ for all $x$\" is $A\\subseteq B$. Any witness in $(0,5)$ breaks it; $x=1$ is in $A$ and below $B$'s left end. One counterexample kills a universal inclusion. The implication would hold if $A$ had started at $5$ instead of just above $0$.",
    ],
  },
  "math-1-14": {
    tactical_explanations: [
      "**A.** → False\n\nInclusion-exclusion on the given counts is\n\n$$80+70+60-30-25-20+10=145,$$\n\nnot $155$. The $155$ overshoots both the formula and the survey size $150$, so it cannot be a union of surveyed tourists. Forgetting the final $+10$ (or subtracting the triple instead of adding it) is the usual route to a wrong total.",
      "**B.** → True\n\n\"None\" is survey size minus union: $150-145=5$. That leftover is not a new region to estimate; it is whatever the $150$ still have after $145$ visitors are placed. Using the false $155$ from A would make \"none\" negative, which is another warning that $155$ was already illegal.",
      "**C.** → False\n\nThe pair total $30$ still includes the $10$ who also saw $C$. Exact $A$ and $B$ not $C$ is $30-10=20$. Leaving the raw $30$ mixes \"at least those two\" with \"exactly those two.\" Every pairwise headline in a three-set survey needs that triple subtracted before it names an exact-pair region.",
      "**D.** → False\n\nOnly-$A$ subtracts both pair totals from $80$, then adds the triple back once (those $10$ were removed twice):\n\n$$80-30-20+10=40.$$\n\nThe claimed $80-30-20=30$ forgets the $+10$. That correction is the same over-subtraction that inclusion-exclusion repairs with its closing plus.",
      "**E.** → False\n\nAt least two museums = three exact-pair regions plus the triple: $20+15+10+10=55$, not $65$. Adding the raw pair totals $30+25+20$ would triple-count the middle $10$ and overshoot. The $65$ looks like that raw sum minus something ad hoc; the region-by-region peel is $55$.",
    ],
  },
  "math-1-15": {
    tactical_explanations: [
      "**A.** → True\n\nEvery even natural is already a natural, and $1\\in N\\setminus E$, so $E$ is a proper subset of $N$. Proper needs both inclusion and inequality; missing the odd $1$ supplies the inequality. $E=N$ would require every natural to be even, which $1$ refutes.",
      "**B.** → False\n\nFinite intuition says a proper subset is smaller. The overview's bijection $f(n)=2n$ pairs each natural with a unique even and hits every even, so $|E|=|N|$ despite $E\\subsetneq N$. \"Must have fewer\" is a finite-set slogan. The verdict would hold for finite $N$, not for this infinite pair.",
      "**C.** → False\n\n$f(n)=2n$ always outputs an even: $f(1)=2$, $f(2)=4$, never an odd. So it is the standard bijection onto the *evens*, not onto the odds. A bijection onto the odds would need something like $2n-1$. Same formula, wrong target.",
      "**D.** → True\n\nTwo facts already in hand: $E\\subsetneq N$ (odds missing) and $f(n)=2n$ a bijection, so $|E|=|N|$. That pair is exactly why \"proper subset $\\Rightarrow$ fewer elements\" fails for infinite sets. The slogan is not being denied for finite sets; it is being denied *here*.",
      "**E.** → False\n\n$E$ itself is the counterexample: infinite (no last even) and still missing every odd, so not equal to $N$. Infinite subset does not mean \"the whole set.\" Any infinite proper subset of $N$, such as the multiples of $3$, works the same way.",
    ],
  },
  "math-1-16": {
    tactical_explanations: [
      "**A.** → True\n\n$6$ is written on the roster $\\{2,4,6,8,10,12\\}$, so $6\\in A$. Membership is that lookup, not a subset test. The neighbouring trap is wrapping $6$ in braces; this letter asks about the number, not the singleton.",
      "**B.** → False\n\n$\\{6\\}$ is a set, and $A$'s roster is six even integers, none of them a set. So $\\{6\\}\\notin A$ even though $\\{6\\}\\subseteq A$ (because $6\\in A$). That $\\in$ versus $\\subseteq$ swap is the whole point. Membership would flip only if $A$ had been defined as a set of sets that listed $\\{6\\}$.",
      "**C.** → True\n\n$\\{6,8\\}\\subseteq A$ asks whether each of $6$ and $8$ sits on the roster; both do. Subsethood never asks whether the box $\\{6,8\\}$ itself appears as an element. The $\\in$ version $\\{6,8\\}\\in A$ would be false for the same reason B is false.",
      "**D.** → True\n\n$\\emptyset$ has no member that could sit outside $A$, so $\\emptyset\\subseteq A$ vacuously. This is not $\\emptyset\\in A$; the empty set is not one of the six even numbers. Vacuous subsethood holds for every set, including this one.",
      "**E.** → True\n\nSix distinct numbers give $2^6=64$ subsets; proper subsets drop only $A$ itself, leaving $63$. The trap is $64-1-1=62$ (also dropping $\\emptyset$) or $2^6-6=58$ (dropping singletons). Proper means \"not equal to $A$,\" and $\\emptyset$ is a perfectly good proper subset.",
    ],
  },
  "math-1-17": {
    solution_overview:
      "Solve first, filter second.\n\n$$x^2-5x+6=(x-2)(x-3)=0\\implies x=2\\text{ or }x=3.$$\n\nBoth roots are integers, so $A=\\{2,3\\}$. The given $B=\\{2,3\\}$ is the same set, and $|A|=2$.\n\nFor $C$, keep natural-number roots that also satisfy $x>2$: that drops $2$ and leaves **$\\{3\\}$**.",
    tactical_explanations: [
      "**A.** → True\n\nThe overview already factored the quadratic and kept both integer roots, so $A=\\{2,3\\}=B$. Sets ignore order, so writing $B$ as $\\{2,3\\}$ rather than $\\{3,2\\}$ changes nothing. Equality would fail only if the universe had already thrown one root out.",
      "**B.** → True\n\n$3$ already survived the overview's integer filter: $3\\in Z$ and the quadratic vanishes at $3$. Membership is that defining test succeeding, not a second roster scan. Opposite verdict would need $3$ to fail either the universe or the equation.",
      "**C.** → False\n\nKeeping \"only the smaller root\" deletes a valid integer root. Both $2$ and $3$ solve the equation over $Z$, so $A=\\{2,3\\}$, not $\\{2\\}$. The trap quietly adds an extra constraint $x<3$ that the set-builder never wrote. That extra filter appears later in $C$, not in $A$.",
      "**D.** → True\n\nTwo distinct integer roots give $|A|=2$. Cardinality counts members, not the degree of the polynomial in some other sense. A one-element $A$ would need one root to fail the integer test, and neither does.",
      "**E.** → True\n\nThis *is* a new filter: natural roots of the same quadratic, plus $x>2$. The overview re-checked: $2>2$ fails, $3>2$ holds, so $C=\\{3\\}$. The extra inequality is what drops $2$; without it, $C$ would have been $\\{2,3\\}$ again. Universe plus inequality together force the singleton.",
    ],
  },
  "math-1-18": {
    tactical_explanations: [
      "**A.** → True\n\nFour letters, $2^4=16$ subsets, so $|\\mathcal P(D)|=16$. The overview already recorded that total. Miscounting as $4^2=16$ happens to land on the same numeral for the wrong reason (ordered pairs of letters); the actual construction is include/exclude on each letter.",
      "**B.** → True\n\n$S\\in\\mathcal P(D)$ means $S\\subseteq D$. Both $w$ and $x$ are letters of $D$, so $\\{w,x\\}\\subseteq D$ and therefore $\\{w,x\\}\\in\\mathcal P(D)$. That is not $\\{w,x\\}\\in D$; $D$'s elements are letters, not pairs. Power-set membership is subsethood of $D$.",
      "**C.** → True\n\nEach $3$-element subset omits exactly one of the four letters, so there are four of them, matching $\\binom{4}{3}=4$. The overview's size table already has that row. Counting $\\binom{4}{2}=6$ here would be answering the two-element question instead.",
      "**D.** → True\n\nThe power set contains every subset of $D$, including $D$ itself, because $D\\subseteq D$. This is $D\\in\\mathcal P(D)$, not $D\\in D$. A set is rarely an element of itself; it is always a subset of itself, hence always an element of its power set.",
      "**E.** → False\n\nThe pairs of four letters number $\\binom{4}{2}=6$, and the overview listed them. Claiming $5$ drops one pair with no justification. Complementary count: $\\binom{4}{2}=\\binom{4}{2}$, not $\\binom{4}{2}-1$. The even-size total would be $1+6+1=8$, another way to see that $5$ is too small.",
    ],
  },
  "math-1-19": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already walked $1,2,3$ into $F=\\{1,2,3,4\\}$. Every member of $E$ appears in $F$, so $E\\subseteq F$. This inclusion does not yet ask whether the sets are equal; that is the next letter. A counterexample would have to be a member of $E$ missing from $F$, and there is none.",
      "**B.** → True\n\nProper inclusion is $E\\subseteq F$ together with $E\\ne F$. The extra $4\\in F\\setminus E$ supplies the inequality. Without that extra element the inclusion would still be true but no longer proper. Proper is the stricter label, and $4$ is the witness that earns it.",
      "**C.** → False\n\nReverse inclusion would need every member of the larger $F$ to sit in $E$. The same $4$ is now a counterexample: $4\\in F$ and $4\\notin E$. One witness kills $F\\subseteq E$. Subsethood is not symmetric; $E\\subseteq F$ never hands you $F\\subseteq E$ for free.",
      "**D.** → True\n\n$E\\subseteq E$ is reflexive: $1,2,3$ all sit in $E$ by construction. This is ordinary inclusion, not proper. The two symbols $\\subseteq$ and $\\subsetneq$ part company exactly on the self-test, which is the next letter.",
      "**E.** → False\n\nProper self-inclusion would need $E\\ne E$ as well. The two sides are the same list $\\{1,2,3\\}$, so the inequality half is impossible. Ordinary $E\\subseteq E$ remains true; the proper variant never holds for any set against itself.",
    ],
  },
  "math-1-20": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already recorded that the three pairs use distinct numbers, so every pairwise intersection is empty. Pairwise disjointness is that fact. A shared endpoint (say $2$ appearing in two blocks) would kill it; here each of $1$ through $6$ appears in exactly one block.",
      "**B.** → True\n\n$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$. Coverage is the second partition demand, and the overview already checked it. A hole such as missing $6$ would fail this letter even if the blocks stayed disjoint. Union equal to $G$ is not the same as pairwise disjointness; both are needed later.",
      "**C.** → True\n\nNonempty, pairwise disjoint (A), union equal to $G$ (B): all three partition conditions hold, so $\\mathcal S$ partitions $G$. That is the definition applied to a candidate the overview already verified. Equal block sizes are not an extra requirement.",
      "**D.** → False\n\n$\\mathcal S'$ overlaps at $2$: $\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$. Pairwise disjointness fails, so $\\mathcal S'$ is not a partition even though the union still covers $G$. Coverage cannot rescue an overlap. Putting $2$ in exactly one of those two blocks would repair it.",
      "**E.** → False\n\nA block of a partition of $G$ must be a subset of $G$. $\\{5,6,7\\}$ smuggles $7\\notin G$. Disjointness and a union that happens to cover $G$ cannot legalize an outsider. Replacing $\\{5,6\\}$ by $\\{5,6,7\\}$ would be a partition of $\\{1,\\ldots,7\\}$, not of $G$.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/11_20.json",
  patches
);
console.log("11_20 edited", n);
