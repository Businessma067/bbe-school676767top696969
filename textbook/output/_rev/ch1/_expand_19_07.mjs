import { applyExpand } from "./_expand_lib.mjs";

const patches = {
  "math-1-41": {
    tactical_explanations: [
      `**A.** → True

The letter asks how many of the $60$ students take at least one language. That is the union size, not a course headline and not the overlap. The overview recovered $|A\\cup B|=50$ by inclusion-exclusion on $|A|=34$, $|B|=28$, and the shared $12$.

This letter does not rebuild that scan. It asks whether the claimed $50$ is that recovered union.

A rushed solver who added $34+28$ without subtracting would land on $62$, two copies of the bilingual $12$. Another rushed move is to subtract $12$ from $60$ and call that the union; that would be a leftover, not a union.

What would change the verdict? If the overlap had been $10$ instead of $12$, the union would be $52$, not $50$. Against the given $12$, the recovered union is $50$.

The claimed $|A\\cup B|=50$ matches the recovered union, so the statement is True.`,

      `**B.** → True

Spanish-only is the Spanish headline minus the overlap. The overview recovered $|A\\setminus B|=22$ as $34-12$. Those $22$ sit in $A$ and not in $B$.

Using $34-28$ would compare course sizes instead of removing the shared $12$. Using $34$ itself would pretend the overlap was empty. Neither of those is the only-Spanish region.

A consistency check that does not repeat the overview's union display: the three playing regions $22+12+16$ rebuild $50$. That $22$ is the piece this letter names.

The recovered Spanish-only count is $22$, so the statement is True.`,

      `**C.** → True

Neither is whoever sits outside the union. The overview recovered the union $50$ and the leftover $60-50=10$.

This letter's extra arithmetic is only the last subtraction from the cohort, not a second inclusion-exclusion. Subtracting both headlines from $60$ without restoring the overlap would overcount this leftover: $60-34-28=-2$, which is nonsense, and adding the $12$ back is how you return to $10$.

A rushed solver who reported $60-34-28+12$ in the wrong order might still land on $10$ by luck, or might stop at $60-50$ after using $62$ for the union and report $0$. The recovered leftover is $10$.

The recovered neither-count is $10$, so the statement is True.`,

      `**D.** → False

Intersection is a subset of the union, so its size cannot exceed the union size. The overview recovered $|A\\cap B|=12$ and $|A\\cup B|=50$. Already $12<50$.

The claimed $|A\\cap B|>|A\\cup B|$ would need people in both languages who somehow missed the union. That is impossible: anyone in both is in at least one.

**1.** Containment $A\\cap B\\subseteq A\\cup B$ is true of every pair of sets, whatever the survey numbers. Size comparison cannot reverse a containment.

**2.** A rushed solver who compared $12$ with $34-28=6$ might have thought the overlap was "large," then jumped to "larger than the union." Large compared with the gap between headlines is not large compared with $50$.

**3.** What would make the inequality true? Nothing, for finite sets: the overlap is one of the three playing regions inside the union. Even if every Spanish student also took French, the overlap would equal the smaller headline $28$, still below the union.

The recovered $12$ sits strictly below the recovered $50$, so the statement is False.`,

      `**E.** → True

French-only peels the overlap out of $B$. The overview recovered $|B\\setminus A|=16$ as $28-12$. Spanish-only is $22$, so the three playing regions rebuild the union: $22+12+16=50$.

This $16$ is the French-side peel, not a leftover "neither" count. A rushed solver who computed $28-34$ would have a negative, or who used $28-10$ would have mixed the neither-count into the peel.

The recovered French-only count is $16$, so the statement is True.`,
    ],
  },
  "math-1-42": {
    tactical_explanations: [
      `**A.** → True

The five members who use both facilities appear in each headline, so one copy comes off. The overview recovered $|A\\cup B|=33$ from $20+18-5$.

Adding $20+18$ without subtracting inflates the union to $38$, two copies of the overlap. The claim is $33$, matching the recovered union, not that inflated $38$.

A rushed solver who subtracted $5$ from the gym size $50$ would be computing a leftover, not a union.

The recovered union is $33$, so the statement is True.`,

      `**B.** → True

Pool-only is the pool headline minus the overlap. The overview recovered $|A\\setminus B|=15$ as $20-5$. Those $15$ use the pool and not the sauna.

The count would stay $20$ only if the facilities shared nobody. Using $20-18$ would compare headlines, not peel the shared $5$.

The recovered pool-only count is $15$, so the statement is True.`,

      `**C.** → True

First the union of facility users, recovered as $33$. The leftover among $50$ members is $50-33=17$.

The four regions $15+5+13+17=50$ then account for the whole gym. Subtracting pool plus sauna from $50$ without restoring the five "both" members would overcount unused lockers: $50-20-18=-12$ before adding $5$ back.

A rushed solver who used union $38$ would report leftover $12$ instead of $17$. The recovered leftover is $17$.

The recovered neither-count is $17$, so the statement is True.`,

      `**D.** → False

Containment $A\\cap B\\subseteq A\\cup B$ forbids the intersection from beating the union. Compare the two recovered sizes: $|A\\cap B|=5$ and $|A\\cup B|=33$. Already $5<33$.

Flipping a containment into a size comparison is the trap. The five "both" members already sit inside the $33$. They cannot outnumber the set that contains them.

**1.** Even if every sauna user also used the pool, the overlap would be $18$, still below $33$.

**2.** A rushed solver who compared $5$ with $20-18=2$ might call $5$ "large" and then leap to "larger than the union." Large compared with the headline gap is not large compared with $33$.

**3.** What would make $|A\\cap B|>|A\\cup B|$? A person in both who missed the union, which cannot happen. The inequality is impossible for these sets, and for any sets.

The recovered $5$ sits strictly below the recovered $33$, so the statement is False.`,

      `**E.** → True

Sauna-only peels the overlap out of $B$. The overview recovered $|B\\setminus A|=13$ as $18-5$. Pool-only is $15$, so the three playing regions sum to $15+5+13=33$, recovering the union.

This $13$ is the sauna-side peel, not a leftover "neither" count of $17$. Mixing those two leftovers is the usual swap.

The recovered sauna-only count is $13$, so the statement is True.`,
    ],
  },
  "math-1-43": {
    tactical_explanations: [
      `**A.** → True

Write the three-set formula and consult the recovered union. The overview substituted the survey counts and recovered $|A\\cup B\\cup C|=53$. The closing $+3$ puts back the all-three members who were subtracted once too often.

Stopping after the pairwise subtractions would leave $50$ and undercount the union. The claimed $53$ matches the recovered total, not that $50$.

A rushed solver who added $30+25+20=75$ and stopped would have counted overlapping members several times. The union counts each person once.

The recovered union is $53$, so the statement is True.`,

      `**B.** → True

Someone who does all three activities automatically does each pair. Those $3$ people already sit inside the pairwise totals $10$, $8$, and $7$. That is why inclusion-exclusion adds them back at the end: they were subtracted once too often.

They are not a fourth disjoint group hiding outside the pairs. A rushed solver who added $3$ as an extra region on top of $10$, $8$, and $7$ would double-count the triple group.

The recovered triple sits inside every pairwise headline, so the statement is True.`,

      `**C.** → True

The pairwise total $|A\\cap B|=10$ still includes the cooks. Removing the triple isolates the exact-pair region. The extra arithmetic this letter needs is that single peel:

$$|A\\cap B\\cap C^{c}|=10-3=7$$

Leaving the raw $10$ mixes "at least those two" with "exactly those two." Every pairwise headline in a three-set survey needs that triple subtracted before it names an exact-pair region.

A rushed solver who subtracted $3$ from $30$ instead would be peeling the triple out of photography's headline, a different region. The claim is photography and hiking but not cooking, which is the $A\\cap B$ peel, not the $A$ peel.

The recovered exact-pair count is $7$, so the statement is True.`,

      `**D.** → True

The triple group is a subset of each pair, so its size cannot exceed any pairwise size. Check the three comparisons against the recovered counts:

$$3\\le 10,\\qquad 3\\le 8,\\qquad 3\\le 7$$

Hence $3\\le\\min(10,8,7)$. A triple larger than a pair would mean people in all three who somehow missed one of the pairs, which is impossible.

A rushed solver who compared $3$ with the union $53$ would have a true but irrelevant inequality. The letter asks for the min of the three pairwise sizes, and $3$ clears that bar.

The recovered triple sits at or below every pairwise size, so the statement is True.`,

      `**E.** → False

The raw sum counts overlapping members several times. The overview recovered $|A|+|B|+|C|=75$ and $|A\\cup B\\cup C|=53$. Already $53<75$. The claimed $53>75$ is backwards.

A union matches the raw sum only when the three groups are completely separate. Here the pairwise totals $10$, $8$, and $7$ are all positive, so the union must undershoot $75$.

**1.** Inclusion-exclusion subtracts those pairwise totals and then adds the triple back, which is a net decrease from $75$ to $53$. The inequality cannot flip.

**2.** A rushed solver who remembered "add the triple at the end" might have thought the $+3$ could push the union above $75$. Adding $3$ after subtracting $10+8+7=25$ still leaves a net $-22$.

**3.** What would make the union larger than the raw sum? Nothing, for nonnegative overlaps. The union counts each person once; the raw sum counts some people two or three times.

The recovered $53$ sits strictly below $75$, so the statement is False.`,
    ],
  },
  "math-1-44": {
    tactical_explanations: [
      `**A.** → False

Conjunction needs both halves true. The overview recovered $P$ true ($7$ is prime) and $Q$ false ($7$ is not even), so $P\\land Q$ is false. "Both prime and even" therefore fails.

An "or" would survive on the prime side alone. This letter asks for the "and." A rushed solver who read "both" as "at least one" would have accepted it.

The recovered conjunction is false, so the statement is False.`,

      `**B.** → True

Inclusive or needs only one true side. $P$ is true, so $P\\lor Q$ is true even though $Q$ is false. Exclusive or would reject this row; mathematical "or" does not. The even side being false does no damage.

A rushed solver who wanted both sides true would have been running an "and." The recovered disjunction holds on the prime half.

The recovered $P\\lor Q$ is true, so the statement is True.`,

      `**C.** → True

The inner conjunction $P\\land Q$ is already false, and negation flips it: $\\neg(P\\land Q)$ is true. It is indeed not the case that $7$ is both prime and even.

This is $\\neg(P\\land Q)$, not $\\neg P\\land\\neg Q$. De Morgan identifies the first with $\\neg P\\lor\\neg Q$, an or of negations, which holds because $\\neg Q$ is true.

A rushed solver who replaced the outer "not both" by "neither" would have landed on letter D's false sentence.

The recovered $\\neg(P\\land Q)$ is true, so the statement is True.`,

      `**D.** → False

"Neither prime nor even" is $\\neg P\\land\\neg Q$. But $\\neg P$ is false because $7$ is prime, so the conjunction of negations is false.

De Morgan says $\\neg(P\\land Q)\\equiv\\neg P\\lor\\neg Q$, an or of negations. Replacing that or by an and is the mix-up with $\\neg(P\\land Q)$, which was true in letter C.

**1.** $7$ is prime, so it cannot be "neither prime nor even." One true property already kills "neither."

**2.** A rushed solver treats "not both" as "neither." Those are De Morgan partners only after the "and" becomes an "or." Keeping the "and" is the error.

**3.** What would make "neither" true? A composite odd number such as $9$, which is not prime and not even. $7$ is prime, so it is the wrong sample.

The recovered $\\neg P\\land\\neg Q$ is false, so the statement is False.`,

      `**E.** → False

$P\\lor Q$ is true, so its negation is false. Claiming $\\neg(P\\lor Q)$ would mean $7$ is neither prime nor even, which already fails because $7$ is prime.

This is the same false sentence as letter D, written as a negated or. De Morgan identifies $\\neg(P\\lor Q)$ with $\\neg P\\land\\neg Q$.

A rushed solver who negated the "or" by negating only the even half would have kept "prime or not even," which is a different sentence and happens to be true. The letter negates the whole disjunction.

The recovered $\\neg(P\\lor Q)$ is false, so the statement is False.`,
    ],
  },
  "math-1-45": {
    tactical_explanations: [
      `**A.** → True

If an integer larger than $2$ were even, then $2$ would divide it as well, giving it at least three divisors. So it could not be prime. The only even prime is $2$, and the statement excludes it by $p>2$. Every remaining prime is odd.

The restriction $p>2$ is load-bearing; without it, $2$ would be a counterexample. The recovered statement is a true universal on that restricted domain.

A rushed solver who thought "2 is even and prime, so the statement fails" would have ignored $p>2$. That is letter B's trap, not this letter's.

The recovered claim holds for every prime greater than $2$, so the statement is True.`,

      `**B.** → False

A counterexample must live inside the domain and fail the conclusion. The test $2>2$ is false, so $2$ never enters the quantified range. It is an even prime, which looks perfect, but the statement never claimed anything about $2$.

A genuine counterexample would need to be an even prime greater than $2$, and none exists. The word "greater than $2$" is doing the work of excluding the one even prime.

**1.** Domain check: $2$ fails $p>2$, so it is not a candidate.

**2.** Conclusion check is idle once the domain check fails. Being even is irrelevant for a point outside the domain.

**3.** A rushed solver drops the restriction, treats "prime" as the whole domain, and points at $2$. That would refute "every prime is odd," which is a different sentence.

What would make $2$ a counterexample? If the statement had said "every prime is odd," without $p>2$. Against the actual wording, $2$ is outside the net.

The recovered domain excludes $2$, so the statement is False.`,

      `**C.** → True

Negating a universal swaps $\\forall$ for $\\exists$ and "odd" for "even," keeping $p>2$. The quoted sentence is that negation. The original is true, so this existential is false, but it is still the correctly formed negation.

A rushed solver who dropped $p>2$ from the negation would have produced "there exists an even prime," which is true (witness $2$) and is not the negation of the restricted statement.

The recovered negation is the existential named in the claim, so the statement is True.`,

      `**D.** → False

This reverses the implication into its converse: every odd number above $2$ is prime. Test $9$: odd, greater than $2$, and $9=3\\cdot 3$ is not prime. One counterexample kills "every odd above $2$ is prime."

The original arrow is prime $\\Rightarrow$ odd, not the reverse. Composite odds such as $9$, $15$, and $21$ are plentiful.

**1.** $9>2$ and $9$ odd, yet $9$ is composite. That is the converse's failure row.

**2.** A rushed solver who thought "the original is true, so the reverse is true" would have mixed the pairs. Original true, converse false, is the ordinary split.

**3.** What would make the converse true? A world with no composite odds, which the integers do not supply.

The recovered converse fails at $9$, so the statement is False.`,

      `**E.** → True

Euclid supplies infinitely many primes. Dropping the single prime $2$ leaves $3,5,7,\\ldots$, still infinite, all greater than $2$. Removing one element from an infinite set leaves an infinite set.

Finiteness would require the primes above $2$ to run out, which Euclid forbids. A rushed solver who thought "throwing out $2$ might leave only finitely many" would have treated infinity as a finite pile minus one.

The recovered list of primes greater than $2$ is infinite, so the statement is True.`,
    ],
  },
  "math-1-46": {
    tactical_explanations: [
      `**A.** → True

Rule (1) is "enrolled in Advanced $\\Rightarrow$ passed Intermediate." Maria is enrolled in Advanced, so modus ponens yields the Intermediate pass. Without that pass, rule (1) would have forbidden the enrolment she currently has.

The rule does not say she passed with any particular grade. This letter only asks whether she passed Intermediate.

A rushed solver who thought "only if" ran the other way, from Intermediate to Advanced, would have been using a sufficient-condition reading the rules do not give.

The recovered Intermediate pass is forced, so the statement is True.`,

      `**B.** → True

Compose the two rules: Advanced $\\Rightarrow$ Intermediate $\\Rightarrow$ Principles. Maria is in Advanced, so the first arrow forces Intermediate and the second forces Principles.

Skipping Intermediate in the chain would leave Principles unforced, which the two rules do not allow. The recovered chain is two steps, and both fire.

A rushed solver who applied only rule (1) would have stopped at Intermediate and missed Principles. This letter needs both arrows.

The recovered Principles pass is forced, so the statement is True.`,

      `**C.** → True

Composing the two arrows gives "enrolled in Advanced $\\Rightarrow$ passed Principles." Necessary means Advanced cannot occur without Principles, which is exactly that composed implication.

Sufficient would be the reverse arrow $P\\Rightarrow A$, which is a different claim. This letter asks for necessary, and the composed chain supplies it.

A rushed solver who swapped those two words would have rejected a true necessary-condition sentence. The necessary condition is the one the arrow points at.

The recovered composed implication makes Principles necessary for Advanced, so the statement is True.`,

      `**D.** → False

Sufficient would require "passed Principles $\\Rightarrow$ enrolled in Advanced." A student may pass Principles, skip Intermediate, and never reach Advanced. Principles sits on the necessary side of the chain, not the sufficient side.

The classic swap of those two words is the trap. Passing the first course in a chain is never, by itself, a ticket to the last course.

**1.** The recovered arrows run $A\\Rightarrow I\\Rightarrow P$, left to right from enrolment. The reverse $P\\Rightarrow A$ is not supplied.

**2.** A concrete counter-model: pass Principles, fail Intermediate, never enrol in Advanced. Both numbered rules hold, and $P\\Rightarrow A$ fails.

**3.** What would make Principles sufficient for Advanced? A rule that skipped Intermediate or made Principles imply both later enrolments. The stem has no such rule.

The recovered chain does not make Principles sufficient, so the statement is False.`,

      `**E.** → False

The two rules mention only "passed" and "enrolled." No grade, mark, or "perfect" appears. From Maria's enrolment we recover two pass/fail facts, not a score.

A perfect grade is extra information the premises do not carry. A rushed solver who padded "passed" into "passed perfectly" would have imported a fact the registrar never recorded.

What would make the claim true? A rule about marks, which is not in the stem. The recovered facts are two passes, nothing more.

The premises do not yield a perfect grade, so the statement is False.`,
    ],
  },
  "math-1-47": {
    tactical_explanations: [
      `**A.** → True

Scan $P$ against $E$. The overview recovered $P\\cap E=\\{2\\}$, the even prime in these lists. Every other prime here is odd, so it misses $E$. Intersection is that single shared number, not a claim that all primes are even.

A rushed solver who listed $\\{2,4\\}$ would have padded with a non-prime. The recovered overlap is the singleton $\\{2\\}$.

The recovered intersection is $\\{2\\}$, so the statement is True.`,

      `**B.** → True

Difference $P\\setminus E$ deletes a member of $P$ only when it also sits in $E$. The overview recovered $P\\setminus E=\\{3,5,7,11,13\\}$ by throwing $2$ out of $P$. Dropping $3$ as well would be treating "small" as "even."

A rushed solver who reported $\\{2,3,5,7,11,13\\}$ would have forgotten to delete the overlap. The recovered difference is the five odd primes.

The recovered $P\\setminus E$ is the five odd primes, so the statement is True.`,

      `**C.** → False

A "for every" sentence needs a clean sweep, and this one stumbles at $x=2$: in $P$ and even. One counterexample inside the domain makes $\\forall x\\in P$ false. Every other prime in the list is odd, which is why the claim looks tempting; universal claims do not forgive a single exception.

A rushed solver who excluded $2$ by habit, copying letter D's extra hypothesis, would have made this true. The unrestricted universal has no such extra hypothesis.

The recovered $2\\in P$ is even, so the statement is False.`,

      `**D.** → True

The extra hypothesis $x\\ne 2$ removes the even prime. What remains is $\\{3,5,7,11,13\\}$, all odd, so no remaining $x$ makes the "if" true and the "then" false. Restricting the domain is what repairs the unrestricted universal; without $x\\ne 2$ the same $2$ would still kill it.

A rushed solver who thought "adding a hypothesis cannot save a false universal" would have missed that the hypothesis changes the domain. The repaired implication never fires at $2$.

The recovered restricted claim holds on the five odd primes, so the statement is True.`,

      `**E.** → False

$P\\subseteq E$ would need every prime in the list to be even. Already $3\\in P$ and $3\\notin E$. One miss kills the inclusion. Only the overlap $\\{2\\}$ sits inside $E$; five of the six primes lie outside.

A rushed solver who checked only $2$ would have thought the inclusion held. Subsethood is a clean sweep, and $3,5,7,11,13$ are five misses.

The recovered $P$ is not a subset of $E$, so the statement is False.`,
    ],
  },
  "math-1-48": {
    tactical_explanations: [
      `**A.** → True

If $x>10$, then $x>5$ automatically because $10>5$. That is $P\\Rightarrow Q$, which is what "$P$ is sufficient for $Q$" means. A number past $10$ cannot fail to be past $5$. The reverse arrow is a different claim.

A rushed solver who swapped sufficient with necessary would have rejected this true sentence. Sufficient names the tail of the arrow.

The recovered $P\\Rightarrow Q$ holds, so the statement is True.`,

      `**B.** → False

Necessary would require $Q\\Rightarrow P$: every $x>5$ would have to satisfy $x>10$. Test $x=7$:

$$7>5\\quad\\text{holds},\\qquad 7>10\\quad\\text{fails}$$

The whole interval $(5,10]$ supplies further counterexamples. $P$ is stronger than $Q$, not required by it.

**1.** $x=7$ is the named witness: $Q$ true, $P$ false.

**2.** $x=10$ itself: $10>5$ true, $10>10$ false. The closed end $10$ is another witness if $P$ is the strict $x>10$.

**3.** A rushed solver who thought "larger threshold is necessary for the smaller one" would have mixed strength with necessity. The stronger condition is sufficient, not necessary.

What would make $x>10$ necessary for $x>5$? If the two thresholds were equal, or if no reals lived in $(5,10]$. Neither is the case.

The recovered $Q\\Rightarrow P$ fails at $7$, so the statement is False.`,

      `**C.** → True

"$Q$ is necessary for $P$" is the same arrow $P\\Rightarrow Q$, read from the other end: $x>10$ cannot hold unless $x>5$ also holds. One true arrow supports two true vocabulary sentences. The necessary condition is the one the arrow points at.

A rushed solver who thought "necessary means the larger number" would have wanted $x>10$ as necessary for $x>5$, which is letter B's false claim.

The recovered $P\\Rightarrow Q$ makes $x>5$ necessary for $x>10$, so the statement is True.`,

      `**D.** → False

Equivalence needs both arrows. $P\\Rightarrow Q$ holds, but $Q\\Rightarrow P$ fails at $x=7$ (and on the whole interval $(5,10]$). So $x>5$ is strictly weaker than $x>10$. The two inequalities are not interchangeable.

A rushed solver who saw both as "large $x$" would have called them equivalent. Strength is not sameness: every $x>10$ is $>5$, not conversely.

The recovered pair is not $P\\Leftrightarrow Q$, so the statement is False.`,

      `**E.** → True

A counterexample to "$x>5$ implies $x>10$" must make the hypothesis true and the conclusion false. Check $x=7$: $7>5$ true, $7>10$ false. Any other point of $(5,10]$ would work equally well; $7$ is a perfectly good witness.

A rushed solver who tested $x=12$ would have found both sides true, which does not refute the implication. Refutation needs the $(5,10]$ strip.

The recovered $x=7$ is a genuine counterexample to $Q\\Rightarrow P$, so the statement is True.`,
    ],
  },
  "math-1-49": {
    tactical_explanations: [
      `**A.** → True

P's file is score $750\\ge 700$ and ratio $35\\%<40\\%$. Both halves of $R$ hold, so P meets the bank's requirement in full. Meeting $R$ is not yet approval; that is a different claim. An "and" with two true parts is true.

A rushed solver who mixed this letter with letter B would have refused to say P satisfies $R$ because approval is not guaranteed. Satisfying $R$ and being approved are two questions.

The recovered $R$ is true for P, so the statement is True.`,

      `**B.** → False

The wording is "approved only if $R$," i.e. $L\\Rightarrow R$. Meeting $R$ is necessary, not sufficient. P has $R$ true, but that does not force $L$. The reverse arrow $R\\Rightarrow L$ is not in the rule, so clearing the hurdle keeps the application alive without forcing a yes.

**1.** "Only if" names a necessary condition. P cleared it. Necessary conditions do not grant the prize.

**2.** Extra bank tests (identity, collateral) could still refuse P while $R$ holds. The stem never forbade those extra tests.

**3.** A rushed solver who treated "only if" as "if and only if" would have concluded approval. That is the classic strengthening of a necessary condition into a sufficient one.

What would make the claim true? A biconditional "approved if and only if $R$." The stem wrote "only if."

The recovered rule does not force P's approval, so the statement is False.`,

      `**C.** → True

Q clears the score test $720\\ge 700$ but fails the ratio: $45\\%$ is not below $40\\%$. One false conjunct makes $R$ false. The two requirements are joined by "and," so one failure means Q does not satisfy both.

A rushed solver who treated the tests as an "or" would have let the score rescue Q. The recovered $R$ is a conjunction.

The recovered $R$ is false for Q, so the statement is True.`,

      `**D.** → True

The contrapositive of $L\\Rightarrow R$ is $\\neg R\\Rightarrow\\neg L$. Q fails the ratio test, so $R$ is false, and the loan is not approved. Failing a necessary condition is enough to force refusal. The original "only if" is at full strength when read backwards through negation.

A rushed solver who thought "we cannot conclude anything from a failed $R$" would have been thinking of a sufficient condition's failure, which is idle. Necessary-condition failure is decisive.

The recovered contrapositive refuses Q, so the statement is True.`,

      `**E.** → False

A ratio below $40\\%$ is only one conjunct of $R$. An applicant with ratio $30\\%$ and score $650$ already fails the score test, so $R$ is false and approval is blocked. Even a full $R$ would still be only necessary, not sufficient. One half of $R$ never guarantees a loan.

A rushed solver who treated the ratio as a standalone sufficient condition would have skipped the score and skipped the "only if." Both mistakes are needed to accept this letter.

The recovered rule does not make a low ratio sufficient, so the statement is False.`,
    ],
  },
  "math-1-50": {
    tactical_explanations: [
      `**A.** → True

Negating a universal produces an existential of the negated predicate. The quoted sentence is that negation, correctly formed, even though no real number actually has a negative square. Shape of the negation is a separate question from whether the negation is true.

A rushed solver who flipped $\\ge$ to $\\le$ instead of $<$ would have produced a different (wrong) negation. The recovered flip is $x^{2}<0$.

The recovered negation is $\\exists x\\,(x^{2}<0)$, so the statement is True.`,

      `**B.** → False

Squares of reals are never negative: $0^{2}=0$, $1^{2}=1$, $(-1)^{2}=1$. No real $x$ satisfies $x^{2}=-1$. The existence claim would succeed over the complex numbers, but the universe here is $\\mathbb R$. One missing solution in the universe is enough.

A rushed solver who remembered $i^{2}=-1$ would have left the stated universe. The recovered universe is the reals.

The recovered $x^{2}=-1$ has no real solution, so the statement is False.`,

      `**C.** → True

Negating an existential produces a universal of the negated predicate. To deny that some number exceeds $100$, every number must stay at or below it. The inequality flips from $>$ to $\\le$, not to $<$; $x=100$ must be included in the negation.

A rushed solver who wrote $x<100$ would have left $100$ unaccounted for. The recovered negation includes the boundary.

The recovered negation is $\\forall x\\,(x\\le 100)$, so the statement is True.`,

      `**D.** → True

Because $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every positive $x$. The order $\\forall x\\,\\exists y$ licenses that dependence: each $x$ gets its own $y$. A bigger real always exists.

A rushed solver who tried to freeze one $y$ first would have been reading letter E's stronger claim. Dependence on $x$ is allowed here.

The recovered $\\forall x\\,\\exists y$ holds by $y=x+1$, so the statement is True.`,

      `**E.** → False

Now a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered, $x=\\max(y+1,1)$ is a positive number bigger than it. No champion exists. This is the classic quantifier-order trap: $\\exists y\\,\\forall x$ is far stronger than the true $\\forall x\\,\\exists y$.

**1.** Try $y=100$: then $x=101$ is a positive number exceeding it.

**2.** Try $y=10^{6}$: then $x=10^{6}+1$ still exceeds it. No finite champion works.

**3.** A rushed solver who reused $y=x+1$ from letter D would have missed that $y$ is no longer allowed to depend on $x$. The extra arithmetic here is naming, for each candidate $y$, a larger positive $x$.

What would make the reversed claim true? A largest positive real, which $\\mathbb R$ does not have.

The recovered $\\exists y\\,\\forall x$ fails, so the statement is False.`,
    ],
  },
};

const file = new URL("./19_07.json", import.meta.url);
const counts = applyExpand(file, patches);
console.log(JSON.stringify(counts, null, 2));
