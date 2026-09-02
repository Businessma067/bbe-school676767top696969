import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-41": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already stripped the double count: $34+28-12=50$. Adding $34+28$ without subtracting counts the $12$ bilingual students twice and inflates the union to $62$. Inclusion-exclusion restores a single copy of the overlap.",
      "**B.** → True\n\nSpanish-only is the Spanish headline minus the overlap: $34-12=22$. Using $34-28$ would be comparing the two course sizes instead of peeling the shared $12$ out of $A$. Those $22$ sit in $A$ and not in $B$.",
      "**C.** → True\n\nNeither is the cohort minus the union: $60-50=10$. The overview's three-region rebuild $22+12+16=50$ confirms the leftover. Subtracting both headlines from $60$ without restoring the overlap would overcount \"neither.\"",
      "**D.** → False\n\nThe $12$ double-enrolled students are themselves part of the $50$ who take at least one course, so $12<50$. Intersection cannot outnumber the union that contains it; $|A\\cap B|>|A\\cup B|$ is impossible for any pair of sets. The trap treats the two totals as unrelated headline numbers.",
      "**E.** → True\n\nFrench-only is $28-12=16$. Rebuild the union from the three regions: $22+12+16=50$, matching A, so the peel is consistent. The $16$ is a playing region, not to be confused with a leftover \"neither\" count.",
    ],
  },
  "math-1-42": {
    tactical_explanations: [
      "**A.** → True\n\nInclusion-exclusion on the gym counts: $20+18-5=33$. The five \"both\" members were in each headline, so one copy comes off. Adding $20+18$ without subtracting inflates the union to $38$.",
      "**B.** → True\n\nPool-only is $20-5=15$. Those $15$ use the pool and not the sauna. Copying $|B|=18$ here would be the wrong headline. The count would remain $20$ only if the facilities shared nobody.",
      "**C.** → True\n\nNeither is $50-33=17$. Out of $50$ members, $33$ use a facility, leaving $17$ who use neither. The four-region check $15+5+13+17=50$ confirms the leftover.",
      "**D.** → False\n\nCompare $5>33$: false. The five \"both\" members are already among the $33$. Containment $A\\cap B\\subseteq A\\cup B$ forbids the intersection from beating the union, whatever the gym numbers. Flipping a containment into a size comparison is the trap.",
      "**E.** → True\n\nSauna-only is $18-5=13$. The three playing regions sum to $15+5+13=33$, recovering the union. Two different $13$-ish figures (sauna-only versus a mis-subtracted neither) are easy to mix; this $13$ is the checkers-side peel of letter E's sibling in the previous task, here the sauna.",
    ],
  },
  "math-1-43": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already ran the three-set formula to $53$:\n\n$$30+25+20-10-8-7+3=53.$$\n\nThe closing $+3$ puts back the all-three members who were subtracted once too often. Stopping after the pairwise subtractions would leave $50$ and undercount the union.",
      "**B.** → True\n\nSomeone who does all three activities automatically does each pair, so those $3$ people already sit inside the pairwise totals $10$, $8$, and $7$. That is why inclusion-exclusion adds them back at the end: they were subtracted once too often. They are not a fourth disjoint group hiding outside the pairs.",
      "**C.** → True\n\nPhotography-and-hiking including cooks is $10$; removing the $3$ who also cook isolates the exact-pair region $10-3=7$. Leaving the raw $10$ mixes \"at least those two\" with \"exactly those two.\" Every pairwise headline in a three-set survey needs that triple subtracted before it names an exact-pair region.",
      "**D.** → True\n\nThe triple group is a subset of each pair, so its size cannot exceed any pairwise size: $3\\le 10$, $3\\le 8$, $3\\le 7$. The inequality $3\\le\\min(10,8,7)$ is structural, not a coincidence of these hobby counts. A triple larger than a pair would mean people in all three who somehow missed one of the pairs, which is impossible.",
      "**E.** → False\n\nThe raw sum $75$ counts overlapping members several times, while the union counts each person once, so $53<75$. The claimed $53>75$ is backwards. A union matches the raw sum only when the three groups are completely separate; here the overlaps are substantial, so inclusion-exclusion pulls the total down.",
    ],
  },
  "math-1-44": {
    tactical_explanations: [
      "**A.** → False\n\nThe overview's table already evaluates $P\\land Q$ on the known row $T,F$ as false. Conjunction needs both halves; $7$ is prime but not even, so \"both\" collapses. An \"or\" would survive on the prime side alone, which is the next letter, not this one.",
      "**B.** → True\n\nInclusive or needs only one true side. $P$ is true, so $P\\lor Q$ is true even though $Q$ is false. Exclusive or would reject this row; mathematical \"or\" does not. The even side being false does no damage.",
      "**C.** → True\n\nThe inner conjunction is already false, and negation flips it to true. It is indeed not the case that $7$ is both prime and even. This is $\\neg(P\\land Q)$, not $\\neg P\\land\\neg Q$; those two part company on the next letter.",
      "**D.** → False\n\n\"Neither prime nor even\" is $\\neg P\\land\\neg Q$. But $\\neg P$ is false because $7$ *is* prime, so the conjunction of negations is false. De Morgan says $\\neg(P\\land Q)\\equiv\\neg P\\lor\\neg Q$, an *or* of negations; replacing that or by an and is the mix-up with C.",
      "**E.** → False\n\n$P\\lor Q$ is true, so its negation is false. Equivalently $\\neg(P\\lor Q)\\equiv\\neg P\\land\\neg Q$, the same false conjunction as D. Claiming this would mean $7$ is neither prime nor even, which fails on the first count.",
    ],
  },
  "math-1-45": {
    tactical_explanations: [
      "**A.** → True\n\nAn even integer above $2$ is divisible by $1$, by $2$, and by itself: three divisors, one too many for a prime. The only even prime is $2$, and the statement excludes it by $p>2$. Every remaining prime is odd. The restriction $p>2$ is load-bearing; without it, $2$ would be a counterexample.",
      "**B.** → False\n\nA counterexample must live inside the domain and fail the conclusion. $2>2$ is false, so $2$ never enters the quantified range. It is an even prime, which looks perfect, but the statement never claimed anything about $2$. A genuine counterexample would need to be an even prime greater than $2$, and none exists.",
      "**C.** → True\n\nNegating a universal swaps $\\forall$ for $\\exists$ and \"odd\" for \"even,\" keeping $p>2$. The quoted sentence is that negation. The original is true, so this existential is false, but it is still the correctly formed negation. \"All primes greater than $2$ are even\" would be a different, stronger false sentence.",
      "**D.** → False\n\nThis reverses the implication into its converse. Test $9$: odd, greater than $2$, and $9=3\\cdot 3$ is not prime. One counterexample kills \"every odd above $2$ is prime.\" The original arrow is prime $\\Rightarrow$ odd, not the reverse.",
      "**E.** → True\n\nEuclid supplies infinitely many primes; dropping the single prime $2$ leaves $3,5,7,\\ldots$, still infinite, all greater than $2$. Removing one element from an infinite set leaves an infinite set. Finiteness would require the primes above $2$ to run out, which Euclid forbids.",
    ],
  },
  "math-1-46": {
    tactical_explanations: [
      "**A.** → True\n\nRule (1) is \"enrolled in Advanced $\\Rightarrow$ passed Intermediate.\" Maria is enrolled in Advanced, so modus ponens yields the Intermediate pass. Without that pass, rule (1) would have forbidden the enrolment she currently has. The rule does not say she passed with any particular grade; it says she passed.",
      "**B.** → True\n\nThe chain is Advanced $\\Rightarrow$ Intermediate $\\Rightarrow$ Principles. Letter A already forced the Intermediate pass; rule (2) then forces Principles. The arrows run left to right from the observed enrolment. Skipping Intermediate in the chain would leave Principles unforced, which the two rules do not allow.",
      "**C.** → True\n\nComposing the two arrows gives \"enrolled in Advanced $\\Rightarrow$ passed Principles.\" Necessary means Advanced cannot occur without Principles, which is exactly that composed arrow. Sufficient would be the reverse arrow, which the next letter wrongly claims.",
      "**D.** → False\n\nSufficient would require \"passed Principles $\\Rightarrow$ enrolled in Advanced.\" A student may pass Principles, skip Intermediate, and never reach Advanced. Principles sits on the necessary side of the chain, not the sufficient side. The classic swap of those two words is the trap.",
      "**E.** → False\n\nThe two rules mention only \"passed\" and \"enrolled.\" No grade, mark, or \"perfect\" appears. From Maria's enrolment we recover two pass/fail facts, not a score. A perfect grade is extra information the premises do not carry.",
    ],
  },
  "math-1-47": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already recorded $P\\cap E=\\{2\\}$, the only even prime in these lists. Every other prime here is odd, so it misses $E$. Intersection is that single shared number, not a claim that all primes are even.",
      "**B.** → True\n\n$P\\setminus E$ throws $2$ out of $P$ and keeps the five odd primes $\\{3,5,7,11,13\\}$. Difference deletes a member of $P$ only when it also sits in $E$. Dropping $3$ as well would be treating \"small\" as \"even.\"",
      "**C.** → False\n\nA \"for every\" sentence needs a clean sweep, and this one stumbles at $x=2$: in $P$ and even. One counterexample inside the domain makes $\\forall x\\in P$ false. Every other prime in the list is odd, which is why the claim looks tempting; universal claims do not forgive a single exception.",
      "**D.** → True\n\nThe extra hypothesis $x\\ne 2$ removes the even prime. What remains is $\\{3,5,7,11,13\\}$, all odd, so no remaining $x$ makes the \"if\" true and the \"then\" false. Restricting the domain is what repairs C; without $x\\ne 2$ the same $2$ would still kill it.",
      "**E.** → False\n\n$P\\subseteq E$ would need every prime in the list to be even. Already $3\\in P$ and $3\\notin E$. One miss kills the inclusion. Only the overlap $\\{2\\}$ sits inside $E$; five of the six primes lie outside.",
    ],
  },
  "math-1-48": {
    tactical_explanations: [
      "**A.** → True\n\nIf $x>10$, then $x>5$ automatically because $10>5$. That is $P\\Rightarrow Q$, which is what \"$P$ is sufficient for $Q$\" means. A number past $10$ cannot fail to be past $5$. The reverse arrow is a different claim, and it fails at $x=7$.",
      "**B.** → False\n\nNecessary would require $Q\\Rightarrow P$: every $x>5$ would have to satisfy $x>10$. Test $x=7$: $7>5$ holds and $7>10$ fails. The whole interval $(5,10]$ supplies further counterexamples. $P$ is stronger than $Q$, not required by it.",
      "**C.** → True\n\n\"$Q$ is necessary for $P$\" is the same arrow $P\\Rightarrow Q$ as in A, read from the other end: $x>10$ cannot hold unless $x>5$ also holds. One true arrow supports two true vocabulary sentences. The necessary condition is the one the arrow points at.",
      "**D.** → False\n\nEquivalence needs both arrows. $P\\Rightarrow Q$ holds, but $Q\\Rightarrow P$ fails at $x=7$ (and on the whole interval $(5,10]$). So $x>5$ is strictly weaker than $x>10$. The two inequalities are not interchangeable.",
      "**E.** → True\n\nA counterexample to \"$x>5$ implies $x>10$\" must make the hypothesis true and the conclusion false. $7>5$ holds and $7>10$ fails, which is that pattern. Any other point of $(5,10]$ would work equally well; $7$ is a perfectly good witness.",
    ],
  },
  "math-1-49": {
    tactical_explanations: [
      "**A.** → True\n\nP's file is score $750\\ge 700$ and ratio $35\\%<40\\%$. Both halves of $R$ hold, so P meets the bank's requirement in full. Meeting $R$ is not yet approval; that is the next letter. An \"and\" with two true parts is true.",
      "**B.** → False\n\nThe wording is \"approved only if $R$,\" i.e. $L\\Rightarrow R$. Meeting $R$ is necessary, not sufficient. P has $R$ true, but that does not force $L$. The reverse arrow $R\\Rightarrow L$ is not in the rule, so clearing the hurdle keeps the application alive without forcing a yes.",
      "**C.** → True\n\nQ clears the score test $720\\ge 700$ but fails the ratio: $45\\%$ is not below $40\\%$. One false conjunct makes $R$ false. The two requirements are joined by \"and,\" so one failure means Q does not satisfy both.",
      "**D.** → True\n\nThe contrapositive of $L\\Rightarrow R$ is $\\neg R\\Rightarrow\\neg L$. From C, Q has $\\neg R$, so the loan is not approved. Failing a necessary condition is enough to force refusal. The original \"only if\" is at full strength when read backwards through negation.",
      "**E.** → False\n\nA ratio below $40\\%$ is only one conjunct of $R$. An applicant with ratio $30\\%$ and score $650$ already fails the score test, so $R$ is false and approval is blocked. Even a full $R$ would still be only necessary, not sufficient. One half of $R$ never guarantees a loan.",
    ],
  },
  "math-1-50": {
    tactical_explanations: [
      "**A.** → True\n\nNegating a universal produces an existential of the negated predicate: $\\neg\\forall x\\,(x^2\\ge 0)\\equiv\\exists x\\,(x^2<0)$. The quoted sentence is that negation, correctly formed, even though no real number actually has a negative square. Shape of the negation is a separate question from whether the negation is true.",
      "**B.** → False\n\nSquares of reals are never negative: $0^2=0$, $1^2=1$, $(-1)^2=1$. No real $x$ satisfies $x^2=-1$. The existence claim would succeed over the complex numbers, but the universe here is $\\mathbb R$. One missing solution in the universe is enough.",
      "**C.** → True\n\nNegating an existential produces a universal of the negated predicate: $\\neg\\exists x\\,(x>100)\\equiv\\forall x\\,(x\\le 100)$. To deny that some number exceeds $100$, every number must stay at or below it. The inequality flips from $>$ to $\\le$, not to $<$; $x=100$ must be included in the negation.",
      "**D.** → True\n\nBecause $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every positive $x$. The order $\\forall x\\,\\exists y$ licenses that dependence: each $x$ gets its own $y$. A bigger real always exists.",
      "**E.** → False\n\nNow a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered, $x=\\max(y+1,1)$ is a positive number bigger than it. No champion exists. This is the classic quantifier-order trap: $\\exists y\\,\\forall x$ is far stronger than the true $\\forall x\\,\\exists y$ in D.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/19_07.json",
  patches
);
console.log("19_07 edited", n);
