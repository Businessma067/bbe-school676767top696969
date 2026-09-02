import { applyLetters } from "./_apply_letters.mjs";

const patches = {
  "math-1-71": {
    C: `**C.** → True

Now the premises are $P\\Rightarrow Q$ and $\\neg Q$, concluding $\\neg P$. That is modus tollens, equivalently running the contrapositive $\\neg Q\\Rightarrow\\neg P$. Valid. From "sales did not rise" to "the budget did not rise" is the one reshuffle that is safe.

A solver who mixed this with letter B would have denied $P$ and concluded $\\neg Q$. The recovered safe move denies $Q$ and concludes $\\neg P$.

The original memo affirmed $Q$ and concluded $P$, which is the illegal reverse walk. This restatement flips the observed fact to $\\neg Q$ and walks the legal contrapose. A departing competitor cannot produce "sales did not rise" while the implication $P\\Rightarrow Q$ holds and $P$ is true; if sales stayed flat, the budget cannot have been increased. That is why this rewrite is valid and the original memo is not.

The original memo observed $Q$ and walked backwards. This letter observes $\\neg Q$ and walks the contrapose, which is the one legal reverse. Mixing the two directions is how a student copies letter B's inverse and calls it a repair. The recovered safe skeleton is $P\\Rightarrow Q$, $\\neg Q$, therefore $\\neg P$.

so the statement is True.`,
    D: `**D.** → True

The memo needs the missing arrow $Q\\Rightarrow P$. Upgrading the premise to $P\\Leftrightarrow Q$ supplies both directions. Then observing $Q$ really does force $P$, and the original conclusion follows. A biconditional is the cheapest honest way to buy the converse alongside the original.

A solver who kept $P\\Rightarrow Q$ and still wanted $P$ from $Q$ would have been affirming the consequent again. The extra repair is the second arrow, not a louder first arrow.

**1.** Original skeleton: $P\\Rightarrow Q$, $Q$, therefore $P$. Invalid, because $Q$ can arrive by other routes.

**2.** With $P\\Leftrightarrow Q$, the reverse $Q\\Rightarrow P$ is now a premise. Observing $Q$ yields $P$ by a legal modus ponens on that reverse arrow.

**3.** A one-way strengthening such as "sales increase only if we increase the budget" is exactly $Q\\Rightarrow P$, which would also repair the memo. The claim names the biconditional, which includes that reverse and keeps the original $P\\Rightarrow Q$. Both repairs work; the biconditional is the one named.

What would leave the memo invalid? Keeping a one-way "if budget then sales" after observing sales. That is the unrepaired stem. Against a biconditional rewrite, the recovered conclusion $P$ follows.

A competitor leaving the market is then no longer a counter-model, because $Q$ without $P$ would break the new reverse arrow. That is the whole point of buying $Q\\Rightarrow P$: it outlaws the extra-cause story that made the original memo invalid. The cheapest honest upgrade is the one the claim named.

The recovered original skeleton is invalid precisely because that extra-cause story is allowed. A biconditional deletes the story. Observing sales then really does force the budget increase, which is the memo's conclusion, now legally drawn.

so the statement is True.`,
  },
  "math-1-72": {
    A: `**A.** → True

$\\sqrt{2}$ is not a ratio of integers, so irrational; $-\\sqrt{2}$ likewise. Their sum is

$$\\sqrt{2}+(-\\sqrt{2})=0=\\frac{0}{1}$$

which is rational. Two irrational inputs, rational sum: the universal claim fails on this pair. Both numbers qualify as inputs, and the promised property fails on a legitimate pair.

A solver who rejected $-\\sqrt{2}$ as "not a real irrational" would have been inventing a restriction. Negatives of irrationals are irrational.

The recovered pair is the classical cancellation. Other pairs such as $\\sqrt{8}+(-\\sqrt{8})$ would also work, but existence of one counterexample is the whole job. The claim named this pair, and the arithmetic lands on a rational.

Zero is $0/1$, a ratio of integers, so it is rational by the definition this chapter uses. Neither input was rational, so the "always irrational" promise fails on a legal pair, not on a trick about zero being "not a number." The recovered arithmetic is a cancellation, and cancellation to a rational is allowed.

so the statement is True.`,
    B: `**B.** → True

A $\\forall$ claim dies at the first counterexample. The pair $\\sqrt{2}$ and $-\\sqrt{2}$ is that counterexample, so no further pairs need be checked. One failure shows the statement is not a true universal. A claim carrying the word "always" is destroyed by a single failure.

A solver who wanted a second pair such as $\\sqrt{8}+(-\\sqrt{8})$ would have been collecting evidence, not finishing a disproof.

Letter A exhibited the pair. This letter only records the quantifier fact: universals do not survive a single miss. Proving the claim would have required an argument covering every irrational pair, which is the opposite workload. Disproof is the cheap direction, and it is already finished.

Checking a thousand other irrational sums that stay irrational would not restore the word "always." The recovered counterexample is enough, and further examples are optional illustration, not extra proof. Universals die at the first miss; they are not averaged. Letter A named the pair; this letter only records that one pair is the whole disproof.

so the statement is True.`,
    E: `**E.** → True

An $\\exists$ claim asks for one witness. Exhibiting a single $x$ with $P(x)$ true completes the proof. That is the standard existence argument, the mirror image of using one counterexample to kill a $\\forall$ claim. "There exists" asks for one witness and nothing more.

A solver who demanded a second witness would have been proving a stronger "at least two" claim.

The neighbouring universal about irrational sums needed one counterexample to die. An existential needs one example to live. Those two lopsided facts are the overview's table. This letter is the existence half of that table, not a second run of the $\\sqrt{2}$ pair.

Euclid's proof that there is no largest prime is a different job: it proves a universal by contradiction, which is the expensive direction. Existence stays cheap. One witness finishes it. This letter is that cheap direction, named in the overview table's existence row. One witness, one finished proof; a second witness would be a different, stronger claim.

so the statement is True.`,
  },
  "math-1-73": {
    D: `**D.** → True

"All fish live in water" is $\\forall x\\,(P(x)\\Rightarrow Q(x))$. Negate by flipping the quantifier and rewriting the implication as its failure case:

$$\\neg\\forall x\\,(P(x)\\Rightarrow Q(x))\\equiv\\exists x\\,(P(x)\\land\\neg Q(x))$$

In words: there exists a fish that does not live in water. That is the quoted sentence.

A solver who wrote "all fish do not live in water" would have negated to another universal.

The dolphin, lizard, and snake files test converse, contrapose, and inverse of the original rule. This letter is a different job: negate the universal "all fish live in water." The recovered negation is an existential failure case, not a rival "no fish live in water." One dry fish would suffice, whether or not such a fish exists in nature. The claim only asks for the correct form.

"All fish do not live in water" would be $\\forall x\\,(P(x)\\Rightarrow\\neg Q(x))$, a different universal. Negation of "all" is "some not," which is the recovered existential. Form, not zoology, is the test. The dolphin and snake files are other relatives; they are not this negation.

so the statement is True.`,
  },
  "math-1-74": {
    C: `**C.** → True

Alex paid on day $45$. Compare with the $30$-day line: $45>30$, so $P$ is false. Alex did not receive the discount, so $Q$ is false. An implication $P\\Rightarrow Q$ is true whenever $P$ is false, whatever $Q$ does. Alex therefore sits outside the policy's promise and cannot serve as a counterexample. A counterexample would need $P$ true and $Q$ false.

The extra arithmetic is $45>30$, which is this letter's own comparison, not a scan of a roster. A solver who treated day $45$ as "almost day $30$" would have folded Alex into $P$.

**1.** Hypothesis check: paying within $30$ days? Day $45$ fails, so $P$ is false.

**2.** Failure row of the policy is on-time payment with no discount. Alex is late with no discount, which is $\\neg P\\land\\neg Q$, the idle-idle row, not the failure row.

**3.** What would make Alex a counterexample? Paying on day $20$ with no discount, or rewriting "within $30$" as "within $45$." Against the printed cutoff, $45$ is late.

The recovered policy never promised anything to late payers. Consistency with the policy is exactly that silence. Alex does not refute it.

A customer who paid on day $20$ and still missed the discount would be the genuine counterexample. Alex is five days past the cutoff, not five days inside it. Nearness to day $30$ is not membership in $P$. The recovered comparison $45>30$ keeps Alex idle for the original implication.

The policy's unique failure is punctual payment with no discount. Alex is late with no discount, a different row. Folding day $45$ into "within $30$" would rewrite the cutoff. Against the printed $30$, Alex is consistent with the rule and is not a counterexample.

so the statement is True.`,
  },
  "math-1-75": {
    C: `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: revenue at most 1 million dollars, therefore no audit. The same voluntary filer has $\\neg P$ true and $\\neg Q$ false. True hypothesis, false conclusion: the inverse fails. Equivalence would require matching truth values in every scenario; this one split already separates them. The inverse tells small companies not to file, which the regulation never said.

A solver who identified inverse with original would have mixed the pairs.

The original pairs with the contrapositive. The inverse pairs with the converse. A 300,000-dollar firm that files anyway is idle for $P\\Rightarrow Q$ (hypothesis false) and fatal for $\\neg P\\Rightarrow\\neg Q$. One such firm is enough to show the inverse is not the regulation. What would make them equivalent? A biconditional "audit if and only if revenue exceeds 1 million dollars." The stem wrote a one-way rule for large firms.

Letter B used the same small filer against the converse. Inverse and converse share a truth value, so the same file does double duty. It still does not touch the original regulation, whose hypothesis never fired. Equivalence of inverse with original would have required that idle file to break $P\\Rightarrow Q$, which it does not.

The recovered pairing chart puts the inverse with the converse, not with the original. A one-way rule for large firms never told small firms they must skip audits. The 300,000-dollar voluntary filer is exactly why that extra promise is false. Original and inverse live in opposite pairs; knocking down the inverse does not knock down the regulation, and claiming they are equivalent is the pairing error this letter names. The recovered original is a one-way rule about large firms; the inverse is a one-way rule about small firms. Those are different promises.

so the statement is False.`,
    D: `**D.** → True

Swap and negate: "no audit, therefore revenue does not exceed 1 million dollars." That sentence is $\\neg Q\\Rightarrow\\neg P$, the contrapositive, so it is equivalent to the regulation and must hold with it. This is the one rewriting that inherits the regulation's truth.

A solver who wrote $\\neg P\\Rightarrow\\neg Q$ would have produced the inverse, letter C.

The recovered pairing is original with contrapose, converse with inverse. Letter C's voluntary filer does not touch this contrapose: that firm filed, so $\\neg Q$ is false and the contrapose is idle. A genuine test of the contrapose would be a non-filer, who must then sit at or below 1 million dollars if the regulation holds. Equivalence is the pairing, not a new arithmetic check.

Company X in letter E, a non-filer above the threshold, would break both the original and this contrapose together, which is exactly what equivalence predicts. The inverse in letter C does not travel with them. This letter is the one relative that must share the regulation's truth value.

so the statement is True.`,
    E: `**E.** → True

Company X has revenue 2 million dollars. Compare with the threshold: $2>1$, so $P$ is true. X did not file an audit, so $Q$ is false. That is exactly $P\\land\\neg Q$, the unique failure of $P\\Rightarrow Q$. One such company is enough to prove the regulation false. Revenue 2 million dollars with no audit is the shape the negation calls for.

The extra arithmetic is $2>1$, this letter's own threshold check. A solver who used X against the converse would have had the wrong shape: X has $P$ true, which is the original's hypothesis, not the converse's.

A counterexample has to sit inside the "if" and fail the "then." X does both. A 300,000-dollar voluntary filer, used against the inverse, is the opposite shape and would not refute the original. Changing $2$ to $1$ would put X on the boundary, where "exceeds" fails and $P$ is false. Against 2 million dollars, the recovered comparison $2>1$ puts X in the failure row.

One offender is the whole negation. The regulation is a universal promise about large firms, and X is a named large firm that skipped the audit. That is $P\\land\\neg Q$, matching the recovered failure shape.

The extra comparison $2>1$ is this letter's own threshold check, not a reprint of the overview's algebra. Sitting at 1 million dollars even would have failed "exceeds" and left $P$ false. X is above the line and skipped the filing, so the original is false if X is observed. One such offender is the recovered negation's shape, and X is named in the stem. The extra arithmetic $2>1$ is this letter's own threshold check. A firm at exactly 1 million dollars would have failed "exceeds" and would not be this witness.

so the statement is True.`,
  },
  "math-1-76": {
    A: `**A.** → False

Pilot A's file: $300\\ge 250$ so $H$ is true; written exam passed so $W$ is true; practical test failed so $T$ is false. Then

$$H\\land W\\land T=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

One failed conjunct denies the license. $300$ hours notwithstanding, A is not licensed.

A solver who let hours override the failed practical would have been running an or. The recovered grant condition is an and of three.

The overview's table already marked A's practical column false. This letter only reads that row. Hours are necessary, and they are not sufficient: A's extra $50$ hours do not repair $T$. Letter C will name that sufficiency error in general; here the named pilot is already a no.

The recovered grant condition is a three-part and. One false conjunct is a denial, however strong the other two look. $300$ hours and a passed written exam do not rewrite a failed practical. The recovered three-part and dies at $T$, which is this letter's only extra evaluation.

so the statement is False.`,
    B: `**B.** → False

Pilot B has $240$ hours ($H$ false) but passed both exams. Hours are necessary: $240<250$ already kills the conjunction, so B is not licensed. Both exams cannot repair a shortfall of $10$ hours. The hours gate is not optional.

The extra arithmetic is $240<250$, a $10$-hour shortfall. A solver who rounded $240$ up to $250$ would have folded B into $H$.

A's failure was the practical. B's failure is the hours. Opposite missing conjuncts, same denied license. The recovered biconditional demands all three parts. Ten hours below the cutoff is still below the cutoff.

Passing both exams does not create a waiver. Necessity of $H$ is the opening sentence of the stem, and $240<250$ is this letter's own comparison. B is a no for a different reason than A, and both reasons are fatal. Rounding $240$ up would invent a tenth hour the logbook does not have. The recovered hours gate is a strict comparison, and B sits on the wrong side of $250$.

so the statement is False.`,
    C: `**C.** → False

Necessary means: no license unless $H$ holds. Sufficient would mean: $H$ alone forces a license, regardless of $W$ and $T$. Pilot A has $H$ true ($300\\ge 250$) and still fails because $T$ is false. Hours by themselves never grant the license. Hours are one requirement of three.

A solver who treated "necessary" as "enough" would have licensed A. Letter A already refused A.

The opening sentence of the stem says hours are necessary, which is the $H$ conjunct, not a solo ticket. The "if and only if" then joins hours to two exams. Pilot A is the recovered witness that extra hours without a practical pass still yield no license. Sufficiency of $H$ would have licensed A; it did not.

Necessary and sufficient split on A's file: hours are present, license is absent. That split is the whole letter. A solver who licensed everyone with $250$ or more hours would have dropped $W$ and $T$ from the recovered formula.

so the statement is False.`,
    E: `**E.** → True

The claim is existential: some pilot with more than $250$ hours is still unlicensed. Pilot A's file is the witness: $300$ hours, written passed, practical failed. $H$ is true and $T$ is false, so $H\\land W\\land T$ fails. That one file proves such a pilot exists.

A solver who wanted a second witness would have been proving "at least two." Existence needs A, and A is in the stem.

Pilot B cannot serve as this witness, because $240$ is not more than $250$. The extra comparison $300>250$ is this letter's own check, and it holds. Letter A already refused A's license; this letter only records that the refused pilot still cleared the hours gate. One such file is the whole existential.

The claim does not ask how many such pilots exist, and it does not ask whether B is licensed. It asks whether the combination "hours over $250$, still unlicensed" occurs. A's row is that combination.

so the statement is True.`,
  },
  "math-1-77": {
    A: `**A.** → False

The $650$ score does fail $S$, but $C$ is true, and an OR needs only one true part. With the $35\\%$ ratio also satisfied:

$$(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$$

P is approved. The claim that credit score alone blocks P ignores the OR in the bracket.

A solver who treated the bracket as an and would have denied P. The recovered P row is a yes.

The claimed reason "score alone is below $700$" would have been correct if the rule had demanded score and co-signer. The recovered rule demands score or co-signer, then the ratio. P's co-signer fills the bracket, and $35<40$ fills $D$. The low score is idle, not fatal.

Q will fail for the opposite reason, a ratio outside the outer and. This letter is only P, and P's recovered row is approved. Treating a false $S$ as a veto ignores the or. The claimed "because their credit score alone is below $700$" names the wrong connective.

so the statement is False.`,
    C: `**C.** → False

A score of at least $700$ makes $S$ true, which fills $S\\lor C$. Approval still requires the outer conjunct $D$: ratio below $40\\%$. Applicant Q is the check: $720\\ge 700$ but $45\\%\\ge 40\\%$. The score cannot override a failed ratio, so "always approved regardless of DTI" is false.

Q is the named witness. A solver who invented a waiver for DTI would have rewritten the recovered formula.

The outer "and" is the absolute gate. Inside the bracket, score and co-signer substitute for each other. Outside the bracket, nothing substitutes for $D$. Q has a strong score and still fails because $45$ is not below $40$. That is this letter's own comparison, and it kills the "always" claim.

"Regardless of DTI" would delete the outer conjunct. The recovered formula keeps it. Q is the named file that has $S$ true and $D$ false, which is exactly the shape that slogan cannot allow. A score of $720$ fills the bracket and still loses to $45\\%$ against $40\\%$.

so the statement is False.`,
    E: `**E.** → True

Applicant P is the witness: score $650<700$ so $S$ is false; a qualified co-signer so $C$ is true; ratio $35\\%<40\\%$ so $D$ is true. Then

$$(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$$

A score below $700$ is allowed whenever the co-signer fills the OR and the ratio clears $40\\%$.

A solver who denied every sub-$700$ file would have ignored the OR. P is the extra case that the OR exists for.

Letter A already recovered P as approved. This letter names the general possibility that P illustrates: low score, co-signer present, ratio in range. Drop the co-signer, and the same $650$ would fail the bracket. Drop the ratio, and even a co-signer would not save a $45\\%$ file (that is Q's shape, with a high score instead). Against P's actual file, the recovered formula returns true.

The or inside the bracket is why a score below $700$ is not an automatic no. P is the extra case the or was written for, and the claim only asks whether that case can be approved. It can.

Existence here is illustrated by P's recovered row: $650$, co-signer, $35\\%$. Change any one of those three and the possibility can die. Against the actual file, the recovered formula is true, so a sub-$700$ approval is possible.

Q cannot illustrate this possibility: Q's score is already at least $700$, and Q fails $D$. The extra case is a low score rescued by the or, which is P, not Q. The recovered P row is the witness the claim asked for. Score-or-co-signer is why a file below $700$ can still clear the bracket when $C$ and $D$ hold.

so the statement is True.`,
  },
  "math-1-78": {
    C: `**C.** → False

The original policy is $P\\Rightarrow Q$: order dessert, get a point. It fails only on dessert with no point. Sam skipped dessert and still got a birthday point: $\\neg P\\land Q$. The policy never promised anything about diners who skip dessert, so Sam does not touch $P\\Rightarrow Q$. To kill $P\\Rightarrow Q$ you need $P\\land\\neg Q$; Sam offers the opposite pair.

A solver who thought "Sam got a point strangely, so the policy is broken" would have used the converse's witness on the original.

Sam's shape is $Q$ without $P$. That is the failure of the converse "point guarantees dessert" and of the inverse "no dessert, no point." It is not the failure of "dessert guarantees a point." The restaurant can still honour every dessert order and run a birthday promotion on the side. What would make Sam a counterexample to the original? A dessert order with no point. That is not Sam's file.

The policy is a one-way promise to dessert-orderers. Birthday points are an extra source of $Q$, which breaks the converse and leaves the original idle. Using Sam against the original is the classic mix-up of those two arrows.

Sam would refute "every point-earner ordered dessert." That is a different policy, the converse. The stem's policy never said that. The recovered failure shape for the original is dessert with no point, and Sam is the opposite pair. Birthday $Q$ without dessert is idle for $P\\Rightarrow Q$ and fatal for $Q\\Rightarrow P$. This letter is the original, so Sam is the wrong witness. The recovered policy survives Sam; the converse does not. Mixing those two arrows is how a birthday point gets misread as a policy breach.

so the statement is False.`,
  },
  "math-1-79": {
    A: `**A.** → True

The inner claim at $m=4$ asks for a positive integer $n$ with $4n=100$. Dividing gives $n=25$, and $25$ is a positive integer. Check:

$$4\\cdot 25=100$$

The inner existential is satisfied at $m=4$. $4$ divides $100$, which is what that $n$ needs.

A solver who reported $n=100/4$ as a non-integer would have misdivided.

This letter does not settle the outer "for every $m$." It only checks one instance. Letter C will use $m=3$, which has no integer partner. At $m=4$ the recovered partner $25$ works, so this inner existential holds.

The order of quantifiers allows $n$ to depend on $m$. For this $m$, the dependence is $n=100/m=25$. That is a positive integer, so the inner $\\exists n$ is true at $m=4$. A different $m$ is a different inner question. Success here is not a proof of the outer universal. Letter C will kill that universal at $m=3$; this letter only records that $m=4$ has a partner.

so the statement is True.`,
    C: `**C.** → False

The overall claim is $\\forall m\\,\\exists n:\\, mn=100$: every positive integer $m$ must have some positive integer partner $n$. At $m=3$ that partner would have to be $100/3$, which is not an integer. One failing $m$ is enough, so the "for every $m$" sentence is false. "For every" admits no exceptions.

A solver who saw $m=4$ work and concluded the universal holds would have treated one success as a clean sweep.

Letter A recovered a working partner at $m=4$. Universals are not proved by a single success. They are disproved by a single failure, and $m=3$ is that failure: $n=100/3$ is not a positive integer, and the equation $3n=100$ has no other solution. The recovered overall statement is therefore false.

Divisors of $100$ would all work as $m$; $3$ is not among them. One non-divisor is enough to kill "for every positive integer $m$." The inner success at $m=4$ is a different letter. "For every" has no majority exception.

so the statement is False.`,
    D: `**D.** → True

Pushing a negation through nested quantifiers flips each one and negates the core: $\\forall$ becomes $\\exists$, $\\exists$ becomes $\\forall$, and $mn=100$ becomes $mn\\ne 100$. The witness $m=3$ works: for every positive integer $n$, $3n\\ne 100$. The sentence given is the correct negation, and $m=3$ is the witness it promises.

A solver who wrote "for every $m$ there is no $n$" would have kept $\\forall m$ and only flipped the inner piece.

**1.** $\\neg\\forall m\\,\\exists n\\,P(m,n)$ is $\\exists m\\,\\forall n\\,\\neg P(m,n)$. That is the quoted form with $P$ as equality to $100$.

**2.** At $m=3$, $3n=100$ forces a non-integer, so $3n\\ne 100$ for every positive integer $n$.

**3.** A weaker negation such as "there exists $m$ for which some $n$ fails" would be true of almost every $m$ and would not capture the nested failure. The inner $\\forall n$ is required, because the original inner $\\exists n$ is what failed.

Letter C already used $m=3$ to kill the universal. This letter only records that the same $m$ is the existential witness in the correctly flipped negation.

Keeping $\\forall m$ and writing "there is no $n$" would still be a universal, which is the wrong outer quantifier. The recovered negation opens with $\\exists m$, and $m=3$ fills that opening. For that $m$, every positive integer $n$ misses $100$, which is the inner $\\forall n$.

The extra check is that $3n=100$ has a unique real solution, not an integer, so the inner "for every $n$" really does hold. Form of the negation plus that witness is this letter's own work, not a reprint of letter A's $m=4$ success. Flipping both quantifiers and the equation is the recovered negation, and $m=3$ is its witness. Letter C used that $m$ to kill the universal; this letter records the matching existential form. The two letters share a witness and ask different questions.

so the statement is True.`,
  },
  "math-1-80": {
    B: `**B.** → False

The setup says exactly one of the four is guilty. Clue (3) names Dan as guilty. Uniqueness then clears Ann, Ben, and Cara. Ann is therefore innocent. The claim that Ann is guilty contradicts both clue (3) and the "exactly one" constraint. The guilty slot holds one person and Dan occupies it.

A solver who thought Ann could share guilt would have dropped "exactly one."

Clue (1), "if Ann is guilty then Dan is innocent," has a false hypothesis once Ann is cleared, so it holds vacuously and adds nothing. The recovered table already marks Ann innocent from uniqueness plus clue (3). This letter only reads Ann's cell. Changing the stem to "at least one guilty" would reopen sharing; the stem said exactly one.

Ben and Cara are cleared by the same uniqueness, but they are other letters. Ann's guilt would require two guilty people, Dan and Ann, which the setup forbids. The recovered guilty name is Dan, and only Dan.

so the statement is False.`,
  },
};

const { n, report } = applyLetters(
  new URL("./28_02.json", import.meta.url),
  patches
);
console.log("rewritten", n);
for (const r of report) console.log(r.id, r.letter, r.words);
