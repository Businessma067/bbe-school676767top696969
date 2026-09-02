import { applyLetters } from "./_apply_letters.mjs";

const patches = {
  "math-1-41": {
    D: `**D.** → False

Intersection is a subset of the union, so its size cannot exceed the union size. The overview recovered $|A\\cap B|=12$ and $|A\\cup B|=50$. Already $12<50$.

The claimed $|A\\cap B|>|A\\cup B|$ would need people in both languages who somehow missed the union. That is impossible: anyone in both is in at least one.

**1.** Containment $A\\cap B\\subseteq A\\cup B$ is true of every pair of sets, whatever the survey numbers. Size comparison cannot reverse a containment.

**2.** A rushed solver who compared $12$ with $34-28=6$ might have thought the overlap was "large," then jumped to "larger than the union." Large compared with the gap between headlines is not large compared with $50$.

**3.** What would make the inequality true? Nothing, for finite sets: the overlap is one of the three playing regions inside the union. Even if every Spanish student also took French, the overlap would equal the smaller headline $28$, still below the union.

Think of the $50$ union as a box and the $12$ overlap as a box inside it. An inner box cannot have more members than the outer box. The claimed inequality asks the inner box to outgrow the outer one.

Even in the extreme where every French student also takes Spanish, the overlap would be $\\min(34,28)=28$, and the union would be $34$, still $28<34$. No rearrangement of these headlines produces $|A\\cap B|>|A\\cup B|$.

A solver who compared $12$ with $10$ (the neither-count) and thought "overlap beats leftover, so overlap is huge" would have been comparing the wrong pair. Huge relative to $10$ is not huge relative to $50$. The recovered $12$ sits strictly below the recovered $50$, which is the only size pair this inequality named. Spanish-only $22$ and French-only $16$ are the other two cells of that same union box; adding them to the overlap rebuilds $50$, not a number smaller than $12$.

so the statement is False.`,
  },
  "math-1-42": {
    B: `**B.** → True

Pool-only is the pool headline minus the overlap. The overview recovered $|A\\setminus B|=15$ as $20-5$. Those $15$ use the pool and not the sauna.

The count would stay $20$ only if the facilities shared nobody. Using $20-18$ would compare headlines, not peel the shared $5$.

Pool-only $15$ is the pool headline after the five "both" members leave. If the sauna overlap had been $8$ instead of $5$, this count would be $12$, not $15$. Against the given $5$, it is $15$.

A solver who reported $20-18=2$ would have compared headlines. Headline comparison is not a peel. A solver who reported $20$ would have kept the overlap inside "only," which is the opposite of an only-count. The recovered pool-only cell is the $15$ named in the claim. Neither, later, is $50-33=17$; that leftover lives outside both facilities and is not an "A only" count. Letter E's sauna-only $13$ is the matching peel on the other side.

so the statement is True.`,
    D: `**D.** → False

Containment $A\\cap B\\subseteq A\\cup B$ forbids the intersection from beating the union. Compare the two recovered sizes: $|A\\cap B|=5$ and $|A\\cup B|=33$. Already $5<33$.

Flipping a containment into a size comparison is the trap. The five "both" members already sit inside the $33$. They cannot outnumber the set that contains them.

**1.** Even if every sauna user also used the pool, the overlap would be $18$, still below $33$.

**2.** A rushed solver who compared $5$ with $20-18=2$ might call $5$ "large" and then leap to "larger than the union." Large compared with the headline gap is not large compared with $33$.

**3.** What would make $|A\\cap B|>|A\\cup B|$? A person in both who missed the union, which cannot happen. The inequality is impossible for these sets, and for any sets.

Five people sit in both facilities. Thirty-three people sit in at least one. Five cannot exceed thirty-three. The claimed inequality is a containment error dressed as a size comparison.

A solver who thought "both is a stricter requirement, so maybe it is a larger set" would have mixed strictness of membership tests with size. Stricter tests produce smaller sets, or equal sets, never larger ones.

Even saturating the overlap at $\\min(20,18)=18$ still leaves $18$ below the union, which would then be $20$. The inequality never flips. Letter B's pool-only $15$ and letter E's sauna-only $13$ sit beside the $5$ inside that $33$; none of those three cells can outgrow the box they live in.

The same containment that blocked Spanish-and-French in the neighbouring cohort blocks pool-and-sauna here. The numbers changed ($5$ against $33$, not $12$ against $50$), but the shape did not: the overlap is a subset of the union, so its size cannot exceed the union size.

so the statement is False.`,
    E: `**E.** → True

Sauna-only peels the overlap out of $B$. The overview recovered $|B\\setminus A|=13$ as $18-5$. Pool-only is $15$, so the three playing regions sum to $15+5+13=33$, recovering the union.

This $13$ is the sauna-side peel, not a leftover "neither" count of $17$. Mixing those two leftovers is the usual swap.

Sauna-only $13$ is $18-5$, the sauna headline after the overlap leaves. Mixing this $13$ with the neither-count $17$ is the usual swap of the two leftovers on the sauna side.

A solver who reported $18$ would have kept the five "both" members in the "only" pile. They used the pool as well. A solver who copied letter B's $15$ would have answered the pool-only cell. The recovered sauna-only cell is $13$. The neither leftover $17$ is a third number, outside the gym's two facilities, and is not this peel. Adding $13$ to pool-only $15$ and overlap $5$ rebuilds the union $33$.

so the statement is True.`,
  },
  "math-1-43": {
    E: `**E.** → False

The raw sum counts overlapping members several times. The overview recovered $|A|+|B|+|C|=75$ and $|A\\cup B\\cup C|=53$. Already $53<75$. The claimed $53>75$ is backwards.

A union matches the raw sum only when the three groups are completely separate. Here the pairwise totals $10$, $8$, and $7$ are all positive, so the union must undershoot $75$.

**1.** Inclusion-exclusion subtracts those pairwise totals and then adds the triple back, which is a net decrease from $75$ to $53$. The inequality cannot flip.

**2.** A rushed solver who remembered "add the triple at the end" might have thought the $+3$ could push the union above $75$. Adding $3$ after subtracting $10+8+7=25$ still leaves a net $-22$.

**3.** What would make the union larger than the raw sum? Nothing, for nonnegative overlaps. The union counts each person once; the raw sum counts some people two or three times.

The raw sum $75$ counts some people twice and the triple group three times. The union counts each person once, so it must be smaller whenever overlaps exist. Here they do: three positive pairwise totals.

Net correction: subtract $10+8+7=25$, add $3$, a decrease of $22$. Nothing in that arithmetic can push $53$ above $75$. The claimed inequality is the raw sum and the union with their roles reversed. A solver who treated the triple $+3$ as a bonus on top of $75$ skipped the pairwise subtractions that the overview already performed.

If the three clubs had been pairwise disjoint, the union would have matched $75$ and the inequality would still have failed, because $>$ is strict. Positive overlaps make the gap even wider. The recovered $53$ is the smaller figure, and the claim wrote the comparison the wrong way round.

so the statement is False.`,
  },
  "math-1-44": {
    D: `**D.** → False

"Neither prime nor even" is $\\neg P\\land\\neg Q$. But $\\neg P$ is false because $7$ is prime, so the conjunction of negations is false.

De Morgan says $\\neg(P\\land Q)\\equiv\\neg P\\lor\\neg Q$, an or of negations. Replacing that or by an and is the mix-up with $\\neg(P\\land Q)$, which was true in letter C.

**1.** $7$ is prime, so it cannot be "neither prime nor even." One true property already kills "neither."

**2.** A rushed solver treats "not both" as "neither." Those are De Morgan partners only after the "and" becomes an "or." Keeping the "and" is the error.

**3.** What would make "neither" true? A composite odd number such as $9$, which is not prime and not even. $7$ is prime, so it is the wrong sample.

"Neither" is the harsher sentence: not prime and not even. Seven is prime, so "neither" is already dead. Letter C's "not both" survived on the even failure alone; "neither" needs both failures.

A solver who treated De Morgan as "keep the and when you negate" would have identified letter C with letter D. They are different rows: C is true, D is false. The recovered $P$ is true and the recovered $Q$ is false, so $\\neg P\\land\\neg Q$ has a false first conjunct. That is enough.

"Neither" would describe a number that fails primality and fails evenness together. Seven fails only evenness. The evenness failure is what made "not both" true; it cannot, by itself, make "neither" true. Those two English words look like cousins and they are opposite in strength: one is an or of denials, the other is an and of denials. Sample $9$ would have made this letter true; sample $7$ does not.

so the statement is False.`,
  },
  "math-1-45": {
    B: `**B.** → False

A counterexample must live inside the domain and fail the conclusion. The test $2>2$ is false, so $2$ never enters the quantified range. It is an even prime, which looks perfect, but the statement never claimed anything about $2$.

A genuine counterexample would need to be an even prime greater than $2$, and none exists. The word "greater than $2$" is doing the work of excluding the one even prime.

**1.** Domain check: $2$ fails $p>2$, so it is not a candidate.

**2.** Conclusion check is idle once the domain check fails. Being even is irrelevant for a point outside the domain.

**3.** A rushed solver drops the restriction, treats "prime" as the whole domain, and points at $2$. That would refute "every prime is odd," which is a different sentence.

What would make $2$ a counterexample? If the statement had said "every prime is odd," without $p>2$. Against the actual wording, $2$ is outside the net.

Counterexamples have to be members of the domain. $2$ fails the membership test $p>2$, so it is not available as a counterexample, however even it is.

A genuine counterexample would be an even prime strictly larger than $2$. Euclid's observation that $2$ is the unique even prime is why none exists. Pointing at $2$ is pointing at a point the sentence already carved out. The recovered domain starts at $3$, and every prime there is odd.

A solver who tested $9$ would have left the prime domain as well as the evenness conclusion. A solver who tested $4$ would have left the prime domain. The only tempting even prime is $2$, and the stem already excluded it by writing "greater than $2$." That exclusion is the content of the letter, not a footnote.

so the statement is False.`,
  },
  "math-1-46": {
    D: `**D.** → False

Sufficient would require "passed Principles $\\Rightarrow$ enrolled in Advanced." A student may pass Principles, skip Intermediate, and never reach Advanced. Principles sits on the necessary side of the chain, not the sufficient side.

The classic swap of those two words is the trap. Passing the first course in a chain is never, by itself, a ticket to the last course.

**1.** The recovered arrows run $A\\Rightarrow I\\Rightarrow P$, left to right from enrolment. The reverse $P\\Rightarrow A$ is not supplied.

**2.** A concrete counter-model: pass Principles, fail Intermediate, never enrol in Advanced. Both numbered rules hold, and $P\\Rightarrow A$ fails.

**3.** What would make Principles sufficient for Advanced? A rule that skipped Intermediate or made Principles imply both later enrolments. The stem has no such rule.

Sufficient would let Principles alone push Maria into Advanced. The chain has a missing middle: Intermediate. A student with Principles and without Intermediate is allowed by both numbered rules and is not in Advanced.

That student is the counter-model. The recovered arrows do not reverse. Swapping "necessary" and "sufficient" is the whole error, and it is the error this chapter repeats on purpose. Maria's actual enrolment in Advanced travels the chain forward, from $A$ to $I$ to $P$. This letter asked about the backward ticket from $P$ to $A$, which the rules never printed.

Passing Principles is necessary for Intermediate, and Intermediate is necessary for Advanced, so Principles is necessary for Advanced by transitivity. Necessary is the opposite of the word the claim used. A sufficient first course would have been a course whose mere pass forced both later enrolments, and the catalogue did not write that. Maria's file travels the chain forward; this letter asked for a reverse ticket.

so the statement is False.`,
  },
  "math-1-47": {
    A: `**A.** → True

Scan $P$ against $E$. The overview recovered $P\\cap E=\\{2\\}$, the even prime in these lists. Every other prime here is odd, so it misses $E$. Intersection is that single shared number, not a claim that all primes are even.

A rushed solver who listed $\\{2,4\\}$ would have padded with a non-prime. The recovered overlap is the singleton $\\{2\\}$.

The even primes less than $15$ are just $2$. Intersection with $E$ therefore cannot contain $4$ or $6$, which are even but not prime, and cannot contain $3$, which is prime but not even.

The recovered singleton $\\{2\\}$ is that unique overlap. Padding it is the usual error. Letter E will ask whether the whole of $P$ sits in $E$; this letter only names the overlap cell. A union of the two lists would have kept every odd prime and every even composite; that combined roster is not the claim. Difference $P\\setminus E$ is the five odd primes, the other leftover, not this intersection.

so the statement is True.`,
    E: `**E.** → False

$P\\subseteq E$ would need every prime in the list to be even. Already $3\\in P$ and $3\\notin E$. One miss kills the inclusion. Only the overlap $\\{2\\}$ sits inside $E$; five of the six primes lie outside.

A rushed solver who checked only $2$ would have thought the inclusion held. Subsethood is a clean sweep, and $3,5,7,11,13$ are five misses.

Subsethood needs every member of $P$ to sit in $E$. Five odd primes miss $E$. One miss, $3$, already kills it; five misses are five too many.

A solver who checked only the overlap $\\{2\\}$ would have verified a different claim, $P\\cap E\\subseteq E$, which is always true and is not $P\\subseteq E$. The recovered $P$ is the six-prime list, not the singleton from letter A.

What would make the inclusion true? A world in which every prime less than $15$ was even. That world contains only $2$, so it is not this $P$. Against the given lists, five odd primes sit outside $E$, and any one of them is a witness.

so the statement is False.`,
  },
  "math-1-48": {
    A: `**A.** → True

If $x>10$, then $x>5$ automatically because $10>5$. That is $P\\Rightarrow Q$, which is what "$P$ is sufficient for $Q$" means. A number past $10$ cannot fail to be past $5$. The reverse arrow is a different claim.

A rushed solver who swapped sufficient with necessary would have rejected this true sentence. Sufficient names the tail of the arrow.

A number larger than $10$ is automatically larger than $5$, because $10$ itself is larger than $5$. Sufficient means that automatic push. No extra hypothesis is required.

A solver who wanted a number between $5$ and $10$ to witness a failure of this direction would have been testing the converse. That strip is letter E's witness, not a hole in $P\\Rightarrow Q$. The recovered sufficient direction is the one that holds.

Necessary would be the other reading of the same arrow: $x>5$ is necessary for $x>10$. That sentence is also true, but it is not this letter. This letter only names sufficiency of the stricter cutoff.

so the statement is True.`,
    D: `**D.** → False

Equivalence needs both arrows. $P\\Rightarrow Q$ holds, but $Q\\Rightarrow P$ fails at $x=7$ (and on the whole interval $(5,10]$). So $x>5$ is strictly weaker than $x>10$. The two inequalities are not interchangeable.

A rushed solver who saw both as "large $x$" would have called them equivalent. Strength is not sameness: every $x>10$ is $>5$, not conversely.

Equivalence would need $x>10$ whenever $x>5$. The strip $(5,10]$ is exactly the set of points where $x>5$ holds and $x>10$ fails. Nonempty disagreement means the two predicates are not the same.

A solver who treated them as "both large" would have ignored that strip. Large is not a single predicate here; it has two cutoffs. Letter A bought one arrow. Letter E names a witness against the other. Two arrows would have been a biconditional, which the recovered pair is not.

What would make them equivalent? Equal cutoffs, or a restricted universe that never meets $(5,10]$. On the reals the strip is nonempty, so the predicates disagree.

so the statement is False.`,
    E: `**E.** → True

A counterexample to "$x>5$ implies $x>10$" must make the hypothesis true and the conclusion false. Check $x=7$: $7>5$ true, $7>10$ false. Any other point of $(5,10]$ would work equally well; $7$ is a perfectly good witness.

A rushed solver who tested $x=12$ would have found both sides true, which does not refute the implication. Refutation needs the $(5,10]$ strip.

$x=7$ is inside $(5,10]$. Hypothesis of the converse true, conclusion false. That is a counterexample by definition.

$x=12$ would satisfy both sides and would not refute anything. $x=4$ would satisfy neither and would not refute anything. The witness has to sit in the strip, and $7$ does. The recovered converse $Q\\Rightarrow P$ therefore fails at this named point.

Any other interior point, $x=6$ or $x=9$ or $x=10$ itself (where $x>10$ fails and $x>5$ holds), would have done the same job. The claim named $7$, and $7$ is legal. Letter D's equivalence claim dies on this same strip; this letter only names one witness.

so the statement is True.`,
  },
  "math-1-49": {
    B: `**B.** → False

The wording is "approved only if $R$," i.e. $L\\Rightarrow R$. Meeting $R$ is necessary, not sufficient. P has $R$ true, but that does not force $L$. The reverse arrow $R\\Rightarrow L$ is not in the rule, so clearing the hurdle keeps the application alive without forcing a yes.

**1.** "Only if" names a necessary condition. P cleared it. Necessary conditions do not grant the prize.

**2.** Extra bank tests (identity, collateral) could still refuse P while $R$ holds. The stem never forbade those extra tests.

**3.** A rushed solver who treated "only if" as "if and only if" would have concluded approval. That is the classic strengthening of a necessary condition into a sufficient one.

What would make the claim true? A biconditional "approved if and only if $R$." The stem wrote "only if."

"Only if" is $L\\Rightarrow R$. P has $R$, which is the conclusion of that arrow, not the hypothesis. Affirming the conclusion does not yield the hypothesis. The bank can still refuse for reasons the stem never listed.

This is the same skeleton as a later memo about marketing and sales: $P\\Rightarrow Q$, $Q$, therefore $P$ is invalid. Here $L\\Rightarrow R$, $R$, therefore $L$ is the same invalid step. Q's file, which fails $R$, is a different letter: the contrapositive really does refuse Q. P's file meets $R$ and still does not force a yes.

Score $750$ and ratio $35\\%$ put P on the legal side of both gates. That is all the stem tells us about P. Approval is a further decision the "only if" rule does not make. Treating a cleared hurdle as a stamp is the error. The recovered rule is still $L\\Rightarrow R$, not $R\\Rightarrow L$.

so the statement is False.`,
    C: `**C.** → True

Q clears the score test $720\\ge 700$ but fails the ratio: $45\\%$ is not below $40\\%$. One false conjunct makes $R$ false. The two requirements are joined by "and," so one failure means Q does not satisfy both.

A rushed solver who treated the tests as an "or" would have let the score rescue Q. The recovered $R$ is a conjunction.

Q's ratio $45\\%$ is not below $40\\%$. Conjunction dies at one false conjunct, even though the score $720$ clears $700$. "Both required conditions" means both, not "the score one."

A solver who let the score override the ratio would have been running an or. The recovered $R$ is an and. Letter B asked whether meeting $R$ forces approval; this letter only asks whether Q meets $R$, and the failed ratio already answers no. The gap $45-40=5$ percentage points is this letter's own comparison: $45$ is not below $40$, so the second conjunct is false.

so the statement is True.`,
  },
  "math-1-50": {
    B: `**B.** → False

Squares of reals are never negative: $0^{2}=0$, $1^{2}=1$, $(-1)^{2}=1$. No real $x$ satisfies $x^{2}=-1$. The existence claim would succeed over the complex numbers, but the universe here is $\\mathbb R$. One missing solution in the universe is enough.

A rushed solver who remembered $i^{2}=-1$ would have left the stated universe. The recovered universe is the reals.

$x^{2}=-1$ has solutions in $\\mathbb C$, not in $\\mathbb R$. The universe is $\\mathbb R$, so the existence claim is false. Checking $0$, $1$, and $-1$ already shows squares landing on $0$ or $1$, never $-1$.

A solver who left the universe would have answered a different course's question. The recovered existential is empty over the reals, which is why the claim is false.

Squares of reals land in $[0,\\infty)$. The target $-1$ sits off that ray. Changing the universe to $\\mathbb C$ would make the claim true, because $i$ would be a witness. The stem named $\\mathbb R$, so that witness is unavailable.

so the statement is False.`,
    C: `**C.** → True

Negating an existential produces a universal of the negated predicate. To deny that some number exceeds $100$, every number must stay at or below it. The inequality flips from $>$ to $\\le$, not to $<$; $x=100$ must be included in the negation.

A rushed solver who wrote $x<100$ would have left $100$ unaccounted for. The recovered negation includes the boundary.

Denying "some $x>100$" means every $x$ satisfies the complementary inequality. Completing $>$ gives $\\le$, including $100$. A solver who wrote $x<100$ would have left a hole at $100$, and $100$ is a real number in the universe.

The recovered negation is a universal with a closed inequality. A solver who kept $\\exists$ and only flipped the inequality would have written another existential, which is not a negation. Mirror the quantifier, then close the cut.

A solver who wrote $\\forall x\\,(x<100)$ would have excluded $100$, yet $100>100$ is already false, so $100$ is not a witness of the original existential and must survive in the negation. The closed inequality $\\le$ is the recovered complementary cut.

so the statement is True.`,
  },
};

const { n, report } = applyLetters(
  new URL("./19_07.json", import.meta.url),
  patches
);
console.log("rewritten", n);
for (const r of report) console.log(r.id, r.letter, r.words);
