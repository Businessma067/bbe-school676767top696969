import { patchFile } from "../_apply_1318.mjs";

patchFile("ch1/08_17.json", {
  "math-1-51": {
    solution_overview: `Let $D$ mean diagnosed with condition X, and let $S$ mean the patient shows symptom A and symptom B.

"Diagnosed only if $S$" is the arrow $D\\Rightarrow S$: no diagnosis without both symptoms, which makes $S$ necessary. The doctor also says both symptoms do not guarantee the diagnosis, so the reverse arrow $S\\Rightarrow D$ is refused: $S$ is necessary but not sufficient.

The contrapositive $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis the moment either symptom is missing.`,
    tactical_explanations: [
      `**A.** → False

The criterion is $D\\Rightarrow S$, and $S$ demands both symptoms. Patient R holds the diagnosis, so both symptoms must be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks the necessary condition.

so the statement is False.`,
      `**B.** → False

Patient S has A but not B, so the conjunction $S$ is false. The contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks the diagnosis. Missing either half of an "and" is enough.

so the statement is False.`,
      `**C.** → False

Sufficient would be $S\\Rightarrow D$. The doctor states the opposite: both symptoms do not guarantee the diagnosis, because other conditions must still be ruled out. So $S$ is necessary and not sufficient.

so the statement is False.`,
      `**D.** → True

Missing symptom A makes the conjunction $S$ false, regardless of B. Then $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis. An "and" is destroyed by either half, so no A means no diagnosis with X.

so the statement is True.`,
      `**E.** → False

The doctor explicitly allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates a necessary condition from a sufficient one.

so the statement is False.`,
    ],
  },
  "math-1-52": {
    solution_overview: `The universe is the finite set $\\{1,2,\\ldots,20\\}$. An existential sentence needs one working example. A universal sentence is destroyed by one counterexample.

An implication $P\\Rightarrow Q$ fails only where $P$ holds and $Q$ fails, so its negation is an existential $P\\land\\neg Q$.`,
    tactical_explanations: [
      `**A.** → True

Divisible by $3$ and by $5$ means divisible by $15$, and $15$ sits inside $\\{1,\\ldots,20\\}$. One witness is all an existential sentence needs.

so the statement is True.`,
      `**B.** → True

Every multiple of four can be written $4k=2(2k)$, hence even. In this range the multiples of four are $\\{4,8,12,16,20\\}$, all even, so the implication holds everywhere.

so the statement is True.`,
      `**C.** → False

The flipped implication breaks at $x=2$: divisible by $2$, not by $4$. One counterexample inside the range kills a universal. Direction of the arrow is the whole issue.

so the statement is False.`,
      `**D.** → True

An implication fails only where the "if" holds and the "then" fails, so its negation is "some prime in the range is even":

$$\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$$

The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$.

so the statement is True.`,
      `**E.** → True

The negation asks for an even prime in the range, and $2$ is one: divisors $1$ and $2$ only, and even. So the negated statement is true in this universe.

so the statement is True.`,
    ],
  },
  "math-1-53": {
    solution_overview: `The club rule is a biconditional: a person is a member if and only if they are not on the banned list. The banned list is the people with $3$ or more rule violations. Writing $v$ for the violation count, banned means $v\\ge 3$, and membership is the exact opposite.

Because the two conditions are exact opposites, the two lists never overlap and never leave a gap.`,
    tactical_explanations: [
      `**A.** → True

Banned means $v\\ge 3$. Person T has $v=2$, so $2\\ge 3$ fails and T is not banned. The biconditional "member iff not banned" then forces membership.

so the statement is True.`,
      `**B.** → False

Person U has $v=4$, and $4\\ge 3$, so U is banned. The same biconditional makes banned the exact opposite of member, so U is not a member.

so the statement is False.`,
      `**C.** → True

"Member iff not banned" means the two lists never overlap and never leave a gap: every person is in exactly one of them. That is the definition of complementary sets.

so the statement is True.`,
      `**D.** → False

"Three or more" includes $v=3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. Once banned means $v\\ge 3$, the count $v=3$ is not discretionary.

so the statement is False.`,
      `**E.** → False

For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided.

so the statement is False.`,
    ],
  },
  "math-1-54": {
    solution_overview: `A universal claim $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. One counterexample is a complete disproof. The reverse does not work: a pile of confirming examples never proves a universal.

A contradiction proof of an implication assumes the unique failure case $P\\land\\neg Q$ and derives an impossibility. To prove a claim by contradiction, assume its negation, not the claim itself.`,
    tactical_explanations: [
      `**A.** → True

A universal $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. That one counterexample is a complete disproof. Nothing further is required.

so the statement is True.`,
      `**B.** → True

A counterexample to "all primes are odd" must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed.

so the statement is True.`,
      `**C.** → True

$P\\Rightarrow Q$ fails only in the case $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility, showing the failure cannot occur. The description in the statement is that method.

so the statement is True.`,
      `**D.** → False

To prove "$\\sqrt{2}$ is irrational" by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=\\frac{a}{b}$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite.

so the statement is False.`,
      `**E.** → False

One confirming example never proves a universal claim. The odd prime $3$ fits "all primes are odd" and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample.

so the statement is False.`,
    ],
  },
  "math-1-55": {
    solution_overview: `Write $P$ for "it rains" and $Q$ for "the picnic is cancelled." The organizer's rule is $P\\Rightarrow Q$.

A conditional makes no promise when its "if" part is false. The unique failure is rain with an uncancelled picnic:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

The contrapositive $\\neg Q\\Rightarrow\\neg P$ always shares the original's truth value. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ are a different pair.`,
    tactical_explanations: [
      `**A.** → True

The rule is $P\\Rightarrow Q$. An implication is false only in the row $P$ true, $Q$ false, i.e. rain and an uncancelled picnic. The quoted negation is that unique failure case.

so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ reads the rule backwards. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, while the converse fails. The organizer never promised that rain is the only cancelling cause.

so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Inverse pairs with converse, not with the original.

so the statement is False.`,
      `**D.** → True

Assign the venue-conflict day: rain false, cancelled true. The inverse demanded "no rain, so no cancellation" and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise.

so the statement is True.`,
      `**E.** → True

Swap and negate: $\\neg Q\\Rightarrow\\neg P$, "if the picnic was not cancelled, then it did not rain." That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free with it.

so the statement is True.`,
    ],
  },
  "math-1-56": {
    solution_overview: `A survey of $100$ consumers has $|X|=40$, $|Y|=35$, and $|X\\cap Y|=15$. Inclusive "or" means at least one; exclusive "or" means exactly one.

Inclusion-exclusion counts the inclusive union:

$$\\lvert X\\cup Y\\rvert=\\lvert X\\rvert+\\lvert Y\\rvert-\\lvert X\\cap Y\\rvert$$

A biconditional $P\\Leftrightarrow Q$ is true when $P$ and $Q$ agree, and false the moment their truth values differ.`,
    tactical_explanations: [
      `**A.** → True

Inclusive "or" means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy "at least one" and stay inside the count. Exclusive or would drop those $15$; mathematical or does not.

so the statement is True.`,
      `**B.** → True

Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once:

$$\\lvert X\\cup Y\\rvert=40+35-15=60$$

so the statement is True.`,
      `**C.** → True

Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so

$$25+20=45$$

Equivalently, drop the both-buyers from the inclusive union: $60-15=45$.

so the statement is True.`,
      `**D.** → True

The four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. "Always the same truth value" is that description.

so the statement is True.`,
      `**E.** → False

"At least one true" is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there.

so the statement is False.`,
    ],
  },
  "math-1-57": {
    solution_overview: `Passing is governed by an "and": attendance of at least $80\\%$ and a final score of at least $50$. Writing $A$ and $F$ for those two conditions, the student passes if and only if $A\\land F$.

The words "if and only if" mean the list is complete. One false part sinks the whole condition, however comfortably the other part is satisfied. The rule never adds or averages the two numbers.`,
    tactical_explanations: [
      `**A.** → False

K cleared attendance ($85\\%\\ge 80\\%$) but scored $48<50$, so $F$ is false and $A\\land F$ collapses. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$.

so the statement is False.`,
      `**B.** → False

L's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The conjunction never lets the strong half rescue the weak half, so L does not pass.

so the statement is False.`,
      `**C.** → False

Compensation would let a high exam score repair low attendance. L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. Exam points cannot repair attendance.

so the statement is False.`,
      `**D.** → True

A score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses.

so the statement is True.`,
      `**E.** → True

Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen.

so the statement is True.`,
    ],
  },
  "math-1-58": {
    solution_overview: `Let $S$ mean the item is on sale and $O$ mean the item is out of stock. The filter displays an item when $\\neg(S\\lor O)$ is true.

De Morgan's law turns a negated OR into an AND of the two negations:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

So the filter shows an item only if it is neither on sale nor out of stock.`,
    tactical_explanations: [
      `**A.** → False

The filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item.

so the statement is False.`,
      `**B.** → False

Item N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough.

so the statement is False.`,
      `**C.** → False

De Morgan requires the connective to flip: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent.

so the statement is False.`,
      `**D.** → True

Push the NOT inside with the connective flip:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

In English that is "not on sale and not out of stock," i.e. neither on sale nor out of stock.

so the statement is True.`,
      `**E.** → True

Item K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The filter displays K.

so the statement is True.`,
    ],
  },
  "math-1-59": {
    solution_overview: `$P$: a country's inflation rate exceeds $10\\%$. $Q$: the central bank raises interest rates. The given rule is $P\\Rightarrow Q$.

High inflation forces a rate rise. The rule says nothing about what else might cause one. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always carries the same truth value. In $P\\Rightarrow Q$, $P$ is sufficient for $Q$, while $Q$ is necessary for $P$.`,
    tactical_explanations: [
      `**A.** → True

From $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. "Not above $10$" and "at most $10$" are the same cutoff.

so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above $10\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched (because $P$ is false), while the converse fails.

so the statement is False.`,
      `**C.** → True

"$P$ is sufficient for $Q$" means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$.

so the statement is True.`,
      `**D.** → False

"$P$ is necessary for $Q$" would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The rule does not force high inflation whenever rates rise.

so the statement is False.`,
      `**E.** → False

Observing a rate rise ($Q$ true) and inferring inflation above $10\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. Walking backwards along the arrow is the classic trap.

so the statement is False.`,
    ],
  },
  "math-1-60": {
    solution_overview: `A biconditional $A\\Leftrightarrow B$ is a two-way link: $A$ and $B$ must carry the same truth value, and the link can be read from either end.

Here two links are given, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$, so the three propositions are welded into one chain. A fact about $P$ travels along the chain. The derived end-to-end link $P\\Leftrightarrow R$ mentions only $P$ and $R$, so on its own it leaves $Q$ free.`,
    tactical_explanations: [
      `**A.** → True

The first link is $P\\Leftrightarrow Q$ and $P$ is given true. Agreement forbids $Q$ from being false, so $Q$ is true. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$.

so the statement is True.`,
      `**B.** → True

The second link is $Q\\Leftrightarrow R$. From $P\\Leftrightarrow Q$ and $P$ true, $Q$ is true, so $R$ must be true as well. The extra fact "$P$ is true" has now travelled the whole chain.

so the statement is True.`,
      `**C.** → True

If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value.

so the statement is True.`,
      `**D.** → True

Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false.

so the statement is True.`,
      `**E.** → False

$P\\Leftrightarrow R$ alone does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free.

so the statement is False.`,
    ],
  },
});
