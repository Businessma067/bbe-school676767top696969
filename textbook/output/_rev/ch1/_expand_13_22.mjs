import { applyExpand } from "./_expand_lib.mjs";

const patches = {
  "math-1-91": {
    tactical_explanations: [
      `**A.** → True

The guideline on the ward is a one-way promise: if a patient has a fever above $38^{\\circ}\\mathrm{C}$, then antibiotics are prescribed. Write $P$ for that strict fever test and $Q$ for the prescription. The overview recovered the implication $P\\Rightarrow Q$, and the unique failure of an implication is the row $P\\land\\neg Q$.

This letter asks whether the quoted sentence is that failure row, not whether such a patient has already been observed.

**1.** Fever strictly above $38^{\\circ}\\mathrm{C}$ makes $P$ true. Withholding antibiotics makes $Q$ false. Together those two facts are $P\\land\\neg Q$, matching the quoted sentence.

**2.** A rushed solver who negated by writing another if-then, "if fever then no antibiotics," would have produced $P\\Rightarrow\\neg Q$, a rival rule about every high-fever patient. The true negation is a single observed violation, not a new policy.

Observing one such patient would show the guideline was broken. No other truth-table row can do that: a patient without fever, or a patient who did receive antibiotics, leaves $P\\Rightarrow Q$ intact.

The recovered failure case is $P\\land\\neg Q$, matching the quoted sentence, so the statement is True.`,

      `**B.** → False

The guideline fires only when the fever is above $38^{\\circ}\\mathrm{C}$. That recovered test is a strict inequality $T>38$, not the closed test $T\\ge 38$. Boundary temperatures are where rushed readings quietly change the predicate, and this letter is entirely about that boundary.

The claimed counterexample is a patient at exactly $38.0^{\\circ}\\mathrm{C}$ who is not prescribed antibiotics. Compare that reading with the recovered threshold before calling the file a refutation. A counterexample has to sit inside the hypothesis and fail the conclusion. Sitting on the printed number $38$ feels as if it should count, which is why the trap is tempting.

**1.** The comparison $38.0>38$ is false, so $P$ is false for this patient. When $P$ is false, the implication $P\\Rightarrow Q$ is idle: it makes no demand about antibiotics. Whether $Q$ is true or false, the guideline holds vacuously on this file. No antibiotics at $38.0$ is compatible with the rule, because the rule never switched on.

**2.** A genuine counterexample needs $P$ true and $Q$ false together: fever strictly above $38$ and no antibiotics. A patient at $38.1$ with no prescription would be that file. A patient at $38.0$ with no prescription is not. The $0.1$ gap is the whole content of the word "above."

**3.** A rushed solver treats "above $38$" as "at least $38$," folding the boundary into $P$. That misread would make $38.0$ a counterexample. The stem's wording is "above," and the recovered $P$ excludes the boundary. Another rushed move is to treat a thermometer rounding to $38.0$ as if it were already $38.1$. Rounding is not membership in $T>38$.

What would have to change for the opposite verdict? If the guideline had said "at least $38^{\\circ}\\mathrm{C}$" or "$38$ or higher," then $P$ would be true at $38.0$ and a missing prescription would break it. Against the actual wording, $38.0$ sits on the idle side of the arrow. The same idle-side fact would hold at $37.9$ or at $38.0$ equally: both fail $T>38$.

The recovered $P$ is a strict inequality, so the statement is False.`,

      `**C.** → True

The inverse of the guideline is $\\neg P\\Rightarrow\\neg Q$: if the fever is not above $38^{\\circ}\\mathrm{C}$, then antibiotics are not prescribed. That sentence is a different implication from the recovered $P\\Rightarrow Q$. Original and inverse live in opposite equivalence pairs, so the clinic can obey the guideline while routinely violating the inverse.

The letter supplies a concrete file: a patient at $37.5^{\\circ}\\mathrm{C}$ with a bacterial infection who still receives antibiotics. That is not a high-fever case, and it is not a missing-prescription case. It is a low-grade temperature with a prescription, which is the inverse's failure shape and the original's idle row at the same time.

**1.** Compare $37.5$ with the recovered threshold. The test $37.5>38$ fails, so $P$ is false and $\\neg P$ is true. Antibiotics were prescribed, so $Q$ is true and $\\neg Q$ is false.

**2.** The inverse therefore has a true "if" and a false "then" on this file. That is the unique failure row of $\\neg P\\Rightarrow\\neg Q$. One such file is enough to show the inverse can be false in practice.

**3.** The original guideline is silent here. Its hypothesis $P$ never fired, so $P\\Rightarrow Q$ holds vacuously on the same patient. The inverse can be false in practice while the guideline still holds. That is the whole point of the two equivalence pairs: knocking down the inverse does not knock down the original.

A rushed solver who thought "inverse means the original backwards, so it must travel with the guideline" would have expected this file to break the original as well. It does not. The original only constrains patients whose fever is strictly above $38$. A $37.5$ reading never enters that constraint.

What would make the inverse true in this clinic is a second rule forbidding antibiotics whenever the fever is not above $38$. The stem never wrote that second rule. Ordinary bacterial cases at $37.5$ are exactly why it would be a bad extra promise: the clinic has reasons to prescribe that have nothing to do with crossing $38$. A solver who treated $37.5$ as "close enough to $38$" would also have misplaced this file into $P$, which is a different error from mixing up inverse and original, but it would still hide the idle row.

The $37.5$ bacterial file is a genuine failure of the inverse and a non-event for the guideline, so the statement is True.`,

      `**D.** → False

The converse of the guideline is $Q\\Rightarrow P$: if a patient is prescribed antibiotics, then the fever is above $38^{\\circ}\\mathrm{C}$. The overview recovered $P\\Rightarrow Q$, which points the other way. Converses are not free gifts of true implications. Signing a one-way promise about high-fever patients does not sign a one-way promise about who is allowed to receive antibiotics.

The same $37.5^{\\circ}\\mathrm{C}$ bacterial patient who receives antibiotics is the witness. That file was used in letter C against the inverse; here it is reused against the converse, which is legitimate because inverse and converse share a truth value. The extra work is to check the converse's own failure shape, $Q$ true and $P$ false.

**1.** Antibiotics were prescribed, so $Q$ is true. The fever $37.5$ is not above $38$, so $P$ is false. True "if" and false "then": $Q\\Rightarrow P$ fails on this file.

**2.** The original guideline only constrains high-fever patients. It says nothing about who may receive antibiotics when the fever is $37.5$. A clinic that treats bacterial infection at low-grade temperatures obeys $P\\Rightarrow Q$ and breaks $Q\\Rightarrow P$ at the same time. The two arrows are independent.

**3.** A rushed solver treats an implication as if it also forced its converse, reading "antibiotics, therefore high fever" out of "high fever, therefore antibiotics." Those are opposite arrows. The recovered pair puts the original with its contrapositive, not with this converse. Another rushed move is to think the $37.5$ patient is "too close to $38$ to count." Close is not membership in $T>38$.

For the converse to be guaranteed, the stem would have needed a biconditional: antibiotics if and only if fever above $38$. The guideline is only one direction. The $37.5$ patient who is treated anyway is allowed by the original and fatal to the converse. A patient at $39$ who is treated would satisfy both arrows and would not separate them. Separation needs the $Q$ without $P$ file, which is exactly the bacterial case already named.

The recovered implication does not lock $Q\\Rightarrow P$, so the statement is False.`,

      `**E.** → True

The target sentence is "not every patient prescribed antibiotics has a fever above $38^{\\circ}\\mathrm{C}$." That is the denial of the universal $Q\\Rightarrow P$ (every treated patient has a high fever). A proof by contradiction of a denial opens by assuming the thing being denied.

The claim describes that opening: assume every such patient does have a fever above $38$, then exhibit a real case that assumption cannot allow.

**1.** The opposite of the target is "every patient prescribed antibiotics has a fever above $38$." That is exactly the assumption named in the letter.

**2.** The $37.5^{\\circ}\\mathrm{C}$ patient who still receives antibiotics has $Q$ true and $P$ false, so the assumed universal is false. That file is a legal colliding case.

The opening described is the legal way to start a contradiction proof of the target. It does not yet finish the proof; it only names the correct first line and a case that first line cannot survive.

The recovered proof shape matches the claim, so the statement is True.`,
    ],
  },
  "math-1-92": {
    tactical_explanations: [
      `**A.** → True

Write $P$ for "the password has at least $12$ characters" and $Q$ for "it is classified as strong." The policy claims $P\\Rightarrow Q$ for every password. The stem hands over one concrete string: "aaaaaaaaaaaa".

Count the letters: twelve identical a's, so length $12$ and $P$ is true. The system does not classify it as strong, so $Q$ is false. That is the unique failure row of $P\\Rightarrow Q$.

One such password is enough to show the policy is false as an absolute rule. Other long mixed passwords that happen to be classified as strong cannot rescue a universal implication after a single $P\\land\\neg Q$ witness.

A rushed solver who thought "counterexample must be shorter than $12$" would be hunting the converse instead. This letter is about the original policy, and the twelve-a string is exactly its failure shape.

The recovered witness has $P$ true and $Q$ false, so the statement is True.`,

      `**B.** → True

The converse is $Q\\Rightarrow P$: if a password is classified as strong, then it is at least $12$ characters. That sentence lives in the other equivalence pair, with the inverse, not with the original policy.

The twelve-a string collapsed $P\\Rightarrow Q$. Collapse of one pair never decides the other pair. Settling the converse needs either a strong password shorter than $12$ characters, or a proof that no such password exists. Neither is supplied by "aaaaaaaaaaaa," which is long and not strong.

A rushed solver who thought "the policy is false, so every relative is false" would have condemned the converse automatically. Relatives travel in pairs, not as a block of four.

The converse is a logically separate claim, so the statement is True.`,

      `**C.** → False

The converse $Q\\Rightarrow P$ asks something only when $Q$ is true, that is, only of passwords that are classified as strong. An $8$-character, highly randomized password that is not classified as strong has $P$ false and $Q$ false. Randomness and rejection are two different coordinates, and this letter mixes them.

**1.** On that password the converse has a false antecedent, so it holds vacuously and learns nothing. False "if" cannot refute an implication. The same vacuous hold would apply to a $4$-character rejected password or a $20$-character rejected password: once $Q$ is false, $Q\\Rightarrow P$ is idle.

**2.** The file that would refute $Q\\Rightarrow P$ is a password that is classified as strong ($Q$ true) and is shorter than $12$ characters ($P$ false). High randomization with a rejected classification is the opposite shape: $Q$ is false, so the converse is not even tested. Strength in the ordinary English sense (lots of entropy) is not the predicate $Q$. $Q$ is the system's classification.

**3.** A rushed solver confuses "short and rejected" with "short and accepted." Only the accepted short password is a counterexample to "strong implies length at least $12$." The stem never exhibits such a password. Another rushed move is to think the original's failure at "aaaaaaaaaaaa" already kills the converse. That string is long and not strong, which is $P\\land\\neg Q$, the original's failure row, not the converse's.

What would have to change: if the system had classified that $8$-character random string as strong, then $Q$ would be true, $P$ false, and the converse would die. Against the given classification, the $8$-character rejection is idle for the converse. Length $8$ is doing no work here except to make $P$ false, which is the idle side of $Q\\Rightarrow P$.

The offered password does not disprove $Q\\Rightarrow P$, so the statement is False.`,

      `**D.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: under $12$ characters, therefore not strong. The contrapositive of the original is $\\neg Q\\Rightarrow\\neg P$: not strong, therefore under $12$ characters. Those two arrows run opposite ways.

The inverse is equivalent to the converse $Q\\Rightarrow P$, not to the contrapositive. The contrapositive travels with the original policy. Because the inverse pairs with the converse, its truth can be read off the converse. Both halves of the claim reverse that pairing: they say the inverse is equivalent to the contrapositive, and therefore that its truth cannot be inferred from the converse.

**1.** Pairing chart: original with contrapositive; converse with inverse. The claim swaps those pairs.

**2.** If the converse were settled, the inverse would be settled automatically, which is the opposite of "cannot be inferred from the converse."

A rushed solver who memorized "all four relatives are different" would miss that two pairs always share a truth value. The letter's "so" clause is the wrong pairing, twice.

The inverse is not equivalent to the contrapositive, so the statement is False.`,

      `**E.** → False

"If a password is not strong, it is under $12$ characters" is $\\neg Q\\Rightarrow\\neg P$, the contrapositive of the policy. A contrapositive always shares the original's truth value. No separate check is needed once the original is settled.

The policy is false, witnessed by "aaaaaaaaaaaa": length $12$ so $P$ is true, not classified as strong so $Q$ is false. The same password shows the contrapositive false: not strong, yet length $12$, so "under $12$" fails.

The claim says the contrapositive of a false statement can sometimes still be true, so we cannot determine this sentence without checking it separately. That is the one rewriting that cannot float free. Original false forces contrapositive false.

A rushed solver who thought "false statements have mixed relatives" would have gone looking for a new password. The twelve-a string already kills both members of the first pair.

The recovered contrapositive is false with the original, so the statement is False.`,
    ],
  },
  "math-1-93": {
    tactical_explanations: [
      `**A.** → True

The manager's sentence is a universal: every one of the $500$ chips in Batch $12$ passes the stress test. Inspection found chip #$317$ in Batch $12$ failed. A universal claim fails as soon as one member of the domain fails it.

The other $499$ chips have no bearing on that verdict. Even if all of them passed, the one failed chip is enough. The recovered counterexample is that single numbered chip, not a census of the batch.

A rushed solver who wanted "most chips pass, so the claim is roughly true" would be using a different standard. Universals do not admit a majority exception.

The manager's claim about Batch $12$ is false, so the statement is True.`,

      `**B.** → False

The manager's claim is $\\forall x\\,\\mathrm{Pass}(x)$ on Batch $12$. Negating a universal produces an existential, not another universal:

$$\\neg\\forall x\\,\\mathrm{Pass}(x)\\equiv\\exists x\\,\\neg\\mathrm{Pass}(x)$$

In words: at least one chip fails. Chip #$317$ already witnesses that existential. The quoted negation, "all chips in Batch $12$ fail," is $\\forall x\\,\\neg\\mathrm{Pass}(x)$, which needs all $500$ failures. That is a much stronger sentence: it claims a clean sweep of failures, not the existence of one.

**1.** Those two sentences part company as soon as some chips pass and some fail. One failure makes the existential true and the "all fail" universal false. If $499$ chips passed and only #$317$ failed, "not all pass" is true and "all fail" is false. That mixed batch is the ordinary inspection outcome, and it already kills the manager without killing every chip.

**2.** A rushed solver replaces $\\exists$ with $\\forall$ when flipping a universal, copying the word "all" from the original and only changing "pass" to "fail." Negation changes the quantifier as well as the predicate. Another rushed move is to think chip #$317$ proves every chip failed. One numbered failure is the existential witness, not a census.

What would make the quoted sentence the correct negation? Nothing in this logic: "all fail" is stronger than "not all pass." The correct negation is the weaker existential, which chip #$317$ already supplies. For "all fail" to be the right reading, the manager would have had to claim "some chip passes," whose negation really is "all fail." That is not the manager's sentence.

The recovered negation is "at least one fails," not "all fail," so the statement is False.`,

      `**C.** → True

Batch $13$ was cancelled before production, so it contains zero chips. The sentence "all chips in Batch $13$ pass" is a universal over an empty domain.

To falsify that universal you would have to point at a chip in Batch $13$ that failed. There is no such chip, because there are no chips at all. A universal cannot be made false when the domain supplies no candidate counterexample.

That is exactly the situation described by vacuously true. The empty batch is not a trick about cancelled paperwork; it is the logical fact that $\\forall$ over $\\emptyset$ has no failing witness.

A rushed solver who thought "no chips means the claim is false, because nothing passed" would be requiring a positive example, which is the standard for existentials, not universals.

The recovered empty-domain universal is vacuously true, so the statement is True.`,

      `**D.** → False

Sentence 1 is $\\forall f\\,\\exists c\\,\\mathrm{Explains}(c,f)$: after the failed chip is named, a defect code may be chosen for that chip. Sentence 2 is $\\exists c\\,\\forall f\\,\\mathrm{Explains}(c,f)$: one code is chosen first and must cover every failure.

Quantifier order is the whole difference. The first allows the code to depend on the chip; the second freezes one code for the whole batch. English can hide that order behind similar-looking "there is a code" talk, which is why the two sentences sound interchangeable until the variables are written in order.

**1.** Ten failures with ten different codes make sentence 1 true (each failure gets its own code) and sentence 2 false (no single code covers all ten). That mixed-code batch is allowed by "for every failure there exists a code" and forbidden by "there exists a code for every failure."

**2.** One master code that happens to explain every failure would make both sentences true. That special case is a coincidence, not a translation. The stem never forces a master code.

**3.** A rushed solver who treated $\\forall\\exists$ and $\\exists\\forall$ as interchangeable would call those two English sentences "the same thing." They are not. Dependence on the order of "for every" and "there exists" is the classic trap. Another rushed move is to think chip #$317$'s own defect code already names a master code for the batch. A code that explains #$317$ need not explain any other chip.

What would make them equivalent? Only a world in which one code happens to explain every failure, which is a special case of sentence 1, not a translation of it. Swapping the quantifiers in the other direction, $\\exists c\\,\\forall f$ implying $\\forall f\\,\\exists c$, is valid, but that is a one-way implication, not sameness.

The two recovered quantifier orders are different claims, so the statement is False.`,

      `**E.** → True

"Some chip in Batch $12$ failed" is $\\exists x\\,\\neg\\mathrm{Pass}(x)$. An existential is proved by exhibiting one witness. Chip #$317$ is in Batch $12$ and failed the stress test, which is that witness.

Nothing else about the batch matters: not the other $499$ chips, not Batch $13$, not defect codes. Existence claims do not require a second example, and they do not require a universal companion.

A rushed solver who wanted a full list of failures before accepting "some failed" would be proving a stronger sentence than the one asked. Another rushed move is to think you must first prove the manager's universal false by some other route. Chip #$317$ is already the witness; the existential is the manager's negation, and it is proved by exhibition.

What would make the claim false? A world in which #$317$ was not in Batch $12$, or did not fail. The stem places that chip in Batch $12$ and records the failure.

The recovered witness is chip #$317$, so the statement is True.`,
    ],
  },
  "math-1-94": {
    tactical_explanations: [
      `**A.** → False

The original number-theory rule is $6\\mid n\\Rightarrow 3\\mid n$. If $6$ divides $n$, write $n=6k=3(2k)$. Then $2k$ is an integer, so $3$ divides $n$ automatically. The pair "divisible by $6$ and not by $3$" is empty.

The letter claims that empty situation occurs for infinitely many integers $n$. Empty is not infinite. The negation of a true universal implication never happens, let alone happens infinitely often.

A rushed solver who negated $P\\Rightarrow Q$ as $P\\land\\neg Q$ and then assumed that form must be populated would be confusing "correctly formed negation" with "the negation is true." The form $6\\mid n$ and $3\\nmid n$ is the correct shape of the negation, and that shape has no integer inhabitants.

What would make the claim true? A world in which some multiple of $6$ avoided $3$, which the factorization $n=3(2k)$ forbids.

The recovered pairing is empty, so the statement is False.`,

      `**B.** → True

The converse claims: if $n$ is divisible by $3$, then $n$ is divisible by $6$. That is $3\\mid n\\Rightarrow 6\\mid n$, a different arrow from the recovered original.

Test $n=9$. Division by $3$:

$$9=3\\times 3$$

so $3$ divides $9$. Division by $6$:

$$9=6\\times 1+3$$

so $6$ does not divide $9$. Hypothesis true, conclusion false: $9$ is a perfectly good counterexample.

The reason is that $6$ also demands a factor $2$, and $9$ is odd. Any odd multiple of $3$ (such as $15$ or $21$) would work equally well; the letter names $9$, which is enough.

A rushed solver who thought "divisible by $3$ is almost divisible by $6$" would have treated nearness as divisibility. Remainder $3$ is not remainder $0$.

The recovered converse fails at $n=9$, so the statement is True.`,

      `**C.** → True

The inverse is $6\\nmid n\\Rightarrow 3\\nmid n$: if $6$ does not divide $n$, then $3$ does not divide $n$. Inverse and converse always share a truth value, so a counterexample to one is a counterexample to the other.

Test $n=9$ again, now against the inverse. The hypothesis $6\\nmid 9$ is true, as the remainder $3$ already showed. The conclusion $3\\nmid 9$ is false, because $9=3\\times 3$. True hypothesis, false conclusion: the inverse fails at $9$.

That matches the already-false converse. Both halves of the claim hold: the inverse is equivalent to the converse, and $n=9$ serves both.

A rushed solver who thought they needed a new integer for the inverse would have gone hunting. The same odd multiple of $3$ does both jobs, because the two sentences are contrapose of each other.

The recovered inverse fails at $9$ with the converse, so the statement is True.`,

      `**D.** → False

The original $6\\mid n\\Rightarrow 3\\mid n$ holds for every integer, by the factorization $n=6k=3(2k)$. Its contrapositive is $3\\nmid n\\Rightarrow 6\\nmid n$, the same implication in other clothes. A statement true for every integer cannot fail for some $n$.

Directly: a number untouched by $3$ cannot be a multiple of $6$, because every multiple of $6$ is a multiple of $3$. No such $n$ exists.

A rushed solver who thought "contrapositive is a different claim, so it might fail even if the original holds" would be breaking the one pairing that never breaks. Original and contrapositive always march together.

What would make the contrapositive false? An integer not divisible by $3$ yet divisible by $6$. That integer would also kill the original, which the factorization $n=6k=3(2k)$ forbids. No extra search is needed: the original's proof is the contrapositive's proof.

The recovered contrapositive is true for every integer, so the statement is False.`,

      `**E.** → False

The original $6\\mid n\\Rightarrow 3\\mid n$ holds for every integer $n$. The converse $3\\mid n\\Rightarrow 6\\mid n$ is a different implication, already refuted by $n=9$. Falsity of the converse never leaks into the original.

The two statements are independent: they live in opposite equivalence pairs. A rushed solver who thought "if the reverse arrow fails, the forward arrow fails" is mixing up those pairs. That is the classic mix-up this chapter is built to catch.

**1.** The original says a stronger condition (divisible by $6$) forces a weaker one (divisible by $3$). That direction is cheap: extra factors can only help. The converse says the weaker condition forces the stronger, which asks for a factor of $2$ that $9$ does not have.

**2.** Check $n=9$ against both arrows. For the original: $6$ does not divide $9$, so the hypothesis is false and the implication holds vacuously. For the converse: $3$ divides $9$ and $6$ does not, so the converse fails. One integer, two different verdicts.

**3.** The same split occurs at $15$, $21$, $27$, any odd multiple of $3$. The original stays true on that infinite family because its hypothesis is false there. The converse dies on that family because its hypothesis is true there.

What would make the original false? An integer divisible by $6$ but not by $3$, which the factorization forbids. Nine is divisible by $3$ and not by $6$, which is the converse's failure shape, the opposite of the original's. A second rushed move is to think "divisibility claims stand or fall as a block." $6\\mid n\\Rightarrow 3\\mid n$ can be true while $3\\mid n\\Rightarrow 6\\mid n$ is false, and that is the ordinary situation for a strictly stronger condition implying a weaker one.

The recovered original remains true, so the statement is False.`,
    ],
  },
  "math-1-95": {
    tactical_explanations: [
      `**A.** → True

The given square is $1234^{2}=1{,}522{,}756$, which ends in $6$, so it is even. Rule $R$ says: even square implies even ID. Applying it in the stated direction gives that $1234$ itself is even.

Direct check: $1234=2\\times 617$. Hypothesis true, conclusion true: the rule is used correctly on this ID. The letter is not proving $R$ from scratch; it is firing the recovered implication on a file where the hypothesis holds.

A rushed solver who ran the converse here would have started from "1234 is even" and deduced the square is even, which is also true but is a different rule. This letter uses $R$ in the direction written: even square, therefore even ID.

The recovered rule applies to $1234$ in the stated direction, so the statement is True.`,

      `**B.** → False

The rule is $n^{2}$ even $\\Rightarrow$ $n$ even. Contraposition starts from the denial of the conclusion and derives the denial of the hypothesis: assume $n$ is odd, derive that $n^{2}$ is odd.

The plan in the claim assumes $n$ even and derives that $n^{2}$ is even. That proves the converse $C$, not $R$. The opening assumption is the wrong half of the implication. This is a labelling error, not an algebra error: the even-to-even calculation is correct for $C$ and mislabelled as contraposition of $R$.

**1.** Contraposition of $R$: start from $n$ odd, conclude $n^{2}$ odd. Write $n=2k+1$, expand $n^{2}=4k^{2}+4k+1$, and read off the remainder $1$.

**2.** Direct proof of $C$: start from $n$ even, conclude $n^{2}$ even. Write $n=2k$, expand $n^{2}=4k^{2}$. Those are opposite opening lines and opposite expansions.

**3.** A rushed solver who thought "assume the even case, because evenness is the topic" would have proved the easier converse and labelled it contraposition of $R$. Labels matter: the same even-to-even algebra is a correct proof of $C$ and a mislabelled proof of $R$. Another rushed move is to think "contrapositive means swap the two even facts." Swapping without negating produces the converse, which is exactly this letter's plan.

What would make the claimed plan correct? If the target had been $C$ rather than $R$, or if the plan had opened with $n$ odd. Against $R$, opening with $n$ even is the wrong door.

The recovered contraposition of $R$ opens with $n$ odd, so the statement is False.`,

      `**C.** → True

The given square $4321^{2}=18{,}671{,}041$ ends in $1$, so it is odd. The fact doing the work is "$n^{2}$ odd implies $n$ odd," which is the contrapositive of the converse $C$ ($n$ even implies $n^{2}$ even), and also the direct reading of "odd square, therefore odd ID."

An odd square really does force an odd ID. Direct check: $4321=2\\times 2160+1$, remainder $1$, so $4321$ is odd. Hypothesis (odd square) true, conclusion (odd ID) true.

A rushed solver who applied $R$ itself here would be stuck: $R$ speaks only about even squares, and this square is odd, so $R$ is idle. The letter correctly names the contrapositive direction that handles odd squares.

The recovered odd-square rule applies to $4321$, so the statement is True.`,

      `**D.** → False

Rule $R$ is $n^{2}$ even $\\Rightarrow$ $n$ even. Its converse $C$ is $n$ even $\\Rightarrow$ $n^{2}$ even. They point opposite ways. Both happen to be true for integers, but two true statements with two proofs are still two statements, not "logically the same."

$C$ is proved from $n=2k$, giving $n^{2}=4k^{2}$. $R$ is proved from $n=2k+1$, giving $n^{2}$ odd, which is the contrapositive route. Different opening assumptions, different algebra.

A rushed solver treats "both true" as "logically the same." Logical sameness would mean each is equivalent to the other as formulas, which would make $R$ equivalent to its converse in general, false for an arbitrary implication.

The recovered $R$ and $C$ are distinct implications, so the statement is False.`,

      `**E.** → True

An implication $R$ fails only on $n^{2}$ even and $n$ odd. A contradiction proof of $R$ therefore assumes exactly that pair, then derives an impossibility.

From $n=2k+1$ one gets

$$n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$$

which is odd, colliding with the assumption that $n^{2}$ is even. The opening the claim describes is the legal one: assume the failure row, then watch it collapse.

A rushed solver who opened by assuming $n$ even would be proving $C$ again. Contradiction proofs of an implication open on the unique false row of that implication.

What would make this opening wrong? If the claim had been a contradiction proof of $C$, the opening pair would be $n$ even and $n^{2}$ odd, which is a different row. The letter names $n^{2}$ even and $n$ odd, which is $R$'s row, not $C$'s.

The recovered contradiction opening matches the claim, so the statement is True.`,
    ],
  },
  "math-1-96": {
    tactical_explanations: [
      `**A.** → True

Thales' theorem is a universal implication: every triangle inscribed in a semicircle with the diameter as one side has a right angle at the third vertex. Write $P(t)$ for that inscription and $Q(t)$ for the right angle. The theorem is $\\forall t\\,(P(t)\\Rightarrow Q(t))$.

Negating a universal implication yields $\\exists t\\,(P(t)\\land\\neg Q(t))$: there exists such a triangle without a right angle. To deny a claim about every triangle you need only promise a single misbehaving triangle.

The quoted sentence is that existential. Correct formation is about shape. The theorem later shows no such triangle exists, which makes the negation false, not incorrectly formed.

A rushed solver who negated by writing "every such triangle lacks a right angle" would have produced another universal. Universals negate to existentials.

The recovered negation is the existential named in the claim, so the statement is True.`,

      `**B.** → True

Thales' theorem establishes the original universal. A statement and its negation cannot both hold, so the existential "there exists such a triangle without a right angle" must be false.

The theorem is proved, so the misbehaving triangle the negation demands does not exist. A proved statement always leaves its negation false. That is not extra geometry; it is the relation between a sentence and its negation.

A rushed solver who thought "the negation is correctly formed, so it might still be true" would be confusing formation with truth. Letter A settled formation; this letter settles truth value.

What would make the negation true? A triangle inscribed on a diameter with a non-right third angle. Thales' theorem says that triangle does not exist. Correct formation plus a theorem is a false existential, not an open question.

The recovered theorem leaves its negation false, so the statement is True.`,

      `**C.** → True

The converse is: if a triangle has a right angle, it can be inscribed in a semicircle with its hypotenuse as the diameter. Start with an arbitrary right triangle, hypotenuse $AB$, right angle at $C$. Let $M$ be the midpoint of $AB$.

Then $MA=MB$ by construction, and a classical theorem gives $MC=MA$ as well. The circle centred at $M$ with radius $MA$ therefore passes through $A$, $B$, and $C$, and $AB$ is a diameter. Every right triangle can be inscribed that way. That is a genuine extra construction, not a reread of Thales' theorem.

This is extra geometry, not a free gift of Thales' theorem. The overview recovered the original $P\\Rightarrow Q$; this letter proves $Q\\Rightarrow P$ by the midpoint construction. The two directions use different ideas: Thales starts from a diameter and produces a right angle; the converse starts from a right angle and produces a diameter.

A rushed solver who thought "converses always fail" would have rejected a true geometric converse on principle. Most converses fail; this one happens to be a theorem. Another rushed move is to think the converse is "the same picture as Thales, so it comes for free." The midpoint has to be introduced and the equalities $MA=MB=MC$ have to be used. Without $M$, there is no circle to name.

What would make the converse false? A right triangle that could not be placed with its hypotenuse as a diameter of a circle through the third vertex. The midpoint construction shows no such triangle exists. A non-right triangle can still be inscribed in some circle, but not with a side as diameter in the Thales sense, which is a different claim.

The recovered converse holds by the midpoint construction, so the statement is True.`,

      `**D.** → True

Thales' theorem gives $P\\Rightarrow Q$: inscribed on a diameter, therefore a right angle. The midpoint construction gives $Q\\Rightarrow P$: a right angle, therefore inscribable on the hypotenuse as diameter. Both directions hold, so here $P\\Leftrightarrow Q$.

That is a proved geometric fact, not a free gift of every implication. Most converses fail, which is why the letter is careful to say "even though converses are not true in general." This pair is an example of a biconditional that had to be earned twice, once in each direction.

A rushed solver who thought "biconditional means we only proved one arrow" would have missed the converse work in letter C. Both arrows are present, so the implication is effectively a biconditional on this geometric pair.

The recovered pair is $P\\Leftrightarrow Q$, so the statement is True.`,

      `**E.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: not inscribed that way, therefore no right angle. That sentence is equivalent to the converse, never to the original. The original pairs with the contrapositive.

Truth of Thales' theorem therefore does not hand over the inverse. Here the inverse is true only because the midpoint construction makes the converse true, which then carries the inverse with it. The claimed reason ("inverse always equivalent to the original") is false.

A rushed solver who treated all four relatives as clones of the original would have accepted this letter. The pairing chart is the whole content: original with contrapositive, converse with inverse.

The recovered inverse is not equivalent to the original, so the statement is False.`,
    ],
  },
  "math-1-97": {
    tactical_explanations: [
      `**A.** → True

The theorem is $S\\Rightarrow O$: perfect square, therefore an odd number of positive divisors. Negating an implication keeps the "if" and rejects the "then": $S\\land\\neg O$, a perfect square with an even divisor count. That is the quoted sentence.

Correct formation is about shape. The pairing argument later shows no integer actually fits that shape, so the negation is a false sentence with the right form. This letter only asks whether the form is right.

A rushed solver who wanted the negation to be "if square then even count" would have written another implication $S\\Rightarrow\\neg O$. The true negation is a single counterexample shape, not a rival theorem.

The recovered negation is $S\\land\\neg O$, so the statement is True.`,

      `**B.** → True

$36$ is $6^{2}$, so the hypothesis "perfect square" holds. The listed divisors are $1,2,3,4,6,9,12,18,36$: nine numbers, and nine is odd. Hypothesis true and conclusion true: $36$ supports the theorem.

A counterexample would need a square with an even divisor count, which this is not. Count the list:

$$9=2\\times 4+1$$

odd, as the leftover square-root partner $6$ predicts. A rushed solver who counted $8$ by dropping $36$ itself, or $10$ by double-counting $6$, would have thought they had found a counterexample. The given roster has nine members.

What would make $36$ a counterexample? An even count on this square, which would require the leftover partner $6$ not to be listed. It is listed. The theorem is supported, not threatened.

The recovered example is consistent with the theorem, so the statement is True.`,

      `**C.** → True

Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $n$ is a perfect square. So if the divisor count is odd, that leftover partner must exist, and $n$ is a square. That is the converse: odd count $\\Rightarrow$ square.

It sits beside the original theorem $S\\Rightarrow O$. Both directions hold here, by the same pairing. This is extra number theory on the recovered pairing, not a free gift of the original arrow.

**1.** If $n$ is not a square, every $d$ has a partner $n/d\\ne d$, so the list comes in pairs and the count is even. The contrapositive of the converse is therefore true, which is the same as the converse being true.

**2.** Sample $36$: nine divisors, leftover partner $6$, odd count, and $36$ is a square. Sample $20$: six divisors, no leftover, even count, and $20$ is not a square. Both samples match the converse.

**3.** A rushed solver who thought "converses always fail" would have rejected this one on principle. The leftover square-root partner is why this converse is true. Another rushed move is to think "odd count could come from some other leftover." The only way a divisor is its own partner is $d^{2}=n$.

What would make the converse false? A non-square with an odd divisor count, which would require a self-partner that was not a square root. The pairing forbids that.

The recovered pairing gives both directions, so the statement is True.`,

      `**D.** → False

The theorem speaks only about perfect squares. $20$ sits between $4^{2}=16$ and $5^{2}=25$, so $20$ is not a square and the hypothesis $S$ is false. Its divisors number $6$, even, as the pairing for non-squares predicts.

An implication with a false "if" is not tested, let alone refuted, by $20$. A counterexample to $S\\Rightarrow O$ would need $S$ true and $O$ false: a square with an even divisor count.

**1.** The six divisors $\\{1,2,4,5,10,20\\}$ confirm even count for a non-square, which supports the inverse, not a refutation of the original. Even count on a non-square is what the pairing promised.

**2.** A rushed solver treats a non-square with an even list as if it broke "square $\\Rightarrow$ odd count." That is the inverse's success shape, not a counterexample to the theorem. Another rushed move is to think $20$ is "close to $16$ and $25$, so almost a square." Close is not membership in $S$.

**3.** Compare $36$ from letter B: square, odd count, supports the theorem. Compare $20$: non-square, even count, idle for the theorem. The two samples are not interchangeable.

The recovered $20$ never fires the hypothesis, so the statement is False.`,

      `**E.** → True

The inverse is "not a square, therefore even divisor count," equivalent to the converse. $20$ is not a square and has $6$ divisors, even, matching it. The pairing argument gives the same conclusion in general: with no leftover square-root partner, every divisor has a distinct mate and the count is even.

The inverse holds here because the converse does. A rushed solver who thought they needed a separate proof for the inverse would have missed the pairing: converse true forces inverse true.

What would make the inverse false? A non-square with an odd divisor count, the same monster that would kill the converse. The pairing argument shows that monster does not exist, which is why $20$'s even list is typical rather than exceptional.

The recovered inverse holds with the converse, so the statement is True.`,
    ],
  },
  "math-1-98": {
    tactical_explanations: [
      `**A.** → True

Four friends, four distinct jobs. Open clue (3): Grace is not a teacher. Clue (2) is a biconditional, so "Felix is an engineer" must match "Grace is a teacher." The right-hand side is false, therefore Felix is not an engineer.

Clue (1) is "Emma is a doctor $\\Leftrightarrow$ Felix is not an engineer." The right-hand side is now true, so Emma is a doctor. Each link is forced; there is no other job for her.

The overview recovered that chain. This letter only asks Emma's job, which the chain pins before Hugo is ever used.

A rushed solver who started from clue (4) and tried to place Emma among the leftovers would have been doing extra work. The path to Emma never mentions Hugo.

The recovered assignment makes Emma the doctor, so the statement is True.`,

      `**B.** → False

Felix does teach in the surviving assignment, but the justification attached to the claim is broken. Clue (2) connects two unknowns and on its own names nobody: it only says Felix is an engineer exactly when Grace is a teacher. A biconditional with both sides unset is a constraint, not a naming.

Even with clue (3) shutting Grace out of Teacher, clue (2) yields only "Felix is not the engineer." Pinning him to Teacher still needs Emma placed as doctor by clue (1) and Hugo placed as lawyer by clue (4), so that Engineer and Teacher are the two remaining jobs and Felix is barred from Engineer. Until those two placements happen, Felix could still be Doctor or Lawyer in a world that had not yet used (1) and (4).

**1.** Clue (2) alone: two biconditional sides, both unknown. No name is forced. Grace might be the teacher and Felix the engineer, or neither, and clue (2) is equally happy with both matching-true and matching-false.

**2.** Clues (2) and (3): Felix is not Engineer. Two jobs still open besides Doctor and Lawyer, which have not been assigned yet. "Not Engineer" is not "is Teacher."

**3.** The trap is treating a correct conclusion as if a single clue delivered it. A right job with a wrong reason makes the whole statement false. Another trap is to read "if and only if" as "Felix is the engineer," dropping the right-hand side.

What would make the claim true? A clue that named Felix as teacher outright. Clue (2) is not that clue. The recovered job happens to be Teacher, which is why the letter is tempting: the destination is right and the route is wrong.

The recovered job for Felix is Teacher, but not from clue (2) alone, so the statement is False.`,

      `**C.** → True

Clue (3) says Grace is not a teacher, so clue (2) forces Felix not to be an engineer, and clue (1) then makes Emma the doctor. Clue (4) places Hugo as the lawyer. Two jobs remain, Engineer and Teacher, for Felix and Grace, and Felix is already barred from Engineer.

With Doctor taken by Emma and Lawyer by Hugo, Grace engineers. That is extra placement after Emma's job was recovered: split the last two jobs using Felix's ban.

A rushed solver who gave Grace Teacher despite clue (3) would have broken the opening fact. A solver who gave her Lawyer would have collided with Hugo.

The recovered leftover job for Grace is Engineer, so the statement is True.`,

      `**D.** → True

Drop clue (3) and try Grace as teacher. Clue (2) then makes Felix the engineer. Clue (1) then makes "Emma is a doctor" false, so Emma is not the doctor. Clue (4) already placed Hugo as lawyer, so the only job left for Emma is Doctor. That contradicts "Emma is not a doctor."

The attempted Grace-as-teacher assignment is therefore impossible from (1), (2), and (4) alone. Clues (1), (2), and (4) already forbid Grace-as-teacher. The attempted assignment collapses without clue (3). So clue (3) is redundant: the full job assignment can be determined without it.

This is extra case work, not a reread of the main chain. The main chain used (3) as a convenient starter. Convenience is not necessity. Starting from (4) instead, Hugo is lawyer; then the Grace-as-teacher trial still collides with Emma's leftover job as above.

A rushed solver who thought "every numbered clue must be load-bearing" would have kept (3) out of habit. Redundancy is a logical fact about the remaining clues, not a comment on how the puzzle was written. Another rushed move is to drop (3) and then claim the assignment is underdetermined. It is not: the collision on Emma still forces Grace not to be the teacher, which is the content of (3), recovered from the other three clues.

What would make (3) essential? A puzzle in which Grace-as-teacher did not force Emma into a missing job. Here clue (4) tying up Lawyer is what makes Emma's leftover job collide. Without (4) the redundancy argument would fail, which is a different letter.

The recovered assignment is forced even without clue (3), so the statement is True.`,

      `**E.** → True

The chain to Emma's job used only clues (3), (2), and (1): Grace not teacher $\\Rightarrow$ Felix not engineer $\\Rightarrow$ Emma is doctor. Clue (4) names Hugo as lawyer and is used only later to split Engineer from Teacher between Felix and Grace.

Remove clue (4) and Emma is still the doctor. The path never mentioned Hugo. Two jobs among Felix and Grace might then be less settled, but this letter only asks whether Emma's job is still determined.

A rushed solver who thought "losing any clue loses every placement" would have dropped Emma as well. Load-bearing is local: clue (4) is load-bearing for Hugo and for the Felix/Grace split, not for Emma.

The recovered path to Emma never uses clue (4), so the statement is True.`,
    ],
  },
  "math-1-99": {
    tactical_explanations: [
      `**A.** → True

The theorem says: if a sequence converges, then it is bounded. Its negation would be a sequence that converges and is not bounded. Because the theorem is proved for every sequence, that combination never occurs.

The theorem holds for every sequence, so nothing can converge while running off to infinity. The description picks out an empty collection. Empty is the correct inhabitant count for the negation of a true universal.

A rushed solver who thought "negation of a theorem must happen sometimes" would be confusing "correctly formed" with "true." The negation is correctly formed and false.

What would populate that collection? A convergent unbounded sequence. The theorem says that object does not exist, which is why the letter calls the situation impossible.

The recovered pairing "convergent and unbounded" is impossible, so the statement is True.`,

      `**B.** → True

The converse claims: bounded, therefore convergent. For $a_{n}=(-1)^{n}$ the terms are only $-1$ and $1$, so every term lies in $[-1,1]$ and the sequence is bounded. It never settles near a single limit: odd terms stay at $-1$ and even terms stay at $1$, two different values.

Bounded with no limit: the converse fails, and this sequence is the witness. The overview recovered that oscillating example; this letter only checks that it has the converse's failure shape, $Q$ true and $P$ false.

**1.** Boundedness: every term satisfies $-1\\le a_{n}\\le 1$. No term escapes any bound of size $1$ or more.

**2.** Divergence: if a limit $L$ existed, both the odd subsequence and the even subsequence would have to approach $L$. They approach $-1$ and $1$ instead, so no single $L$ works.

A rushed solver who thought "bounded sequences look convergent" would have missed the two subsequences. Oscillation inside a closed interval is bounded divergence. Another rushed move is to think the converse fails only for unbounded sequences. Unbounded sequences kill the inverse's conclusion, not the converse.

The recovered sequence is bounded and divergent, so the statement is True.`,

      `**C.** → True

The inverse is "does not converge, therefore not bounded," equivalent to the converse. The same sequence $(-1)^{n}$ diverges (alternating) and stays inside $[-1,1]$ (bounded). Hypothesis of the inverse true, conclusion false.

The inverse is false for the same reason the converse is, with the same witness. Inverse and converse always share a truth value. No new sequence is required.

A rushed solver who went looking for an unbounded divergent sequence (such as $a_{n}=n$) would have found a file that satisfies the inverse rather than refuting it. The refuting file must be divergent and bounded, which is exactly the oscillation already in hand.

The recovered inverse fails at $(-1)^{n}$ with the converse, so the statement is True.`,

      `**D.** → True

The contrapositive is "not bounded, therefore does not converge," equivalent to the proved theorem, hence true. For the sequences $n$, $2n$, and $n^{2}$, unboundedness is immediate ($n\\to\\infty$), and the contrapositive then yields divergence without a separate $\\varepsilon$-argument.

Both halves of the claim hold: the contrapositive is true, and it is genuinely the version used to prove those specific sequences diverge. This is extra commentary on usefulness, not a second proof of the theorem.

A rushed solver who thought "contrapositive is just a rewriting, so it cannot be the usual proof" would have rejected the second half. Analysts really do argue "unbounded, therefore divergent" on $n$, $2n$, and $n^{2}$.

The recovered contrapositive is true and used that way, so the statement is True.`,

      `**E.** → False

The theorem $P\\Rightarrow Q$ (convergent $\\Rightarrow$ bounded) sits with its contrapositive. The converse $Q\\Rightarrow P$ sits with the inverse. Falsity of the converse, witnessed by $(-1)^{n}$, does not touch the theorem.

A convergent sequence is still bounded; some bounded sequences (this oscillating one) fail to converge. The original theorem remains true. Falsity does not leak across the two pairs.

**1.** Feed $(-1)^{n}$ to the original: the sequence does not converge, so $P$ is false and $P\\Rightarrow Q$ holds vacuously. The same sequence kills the converse because $Q$ is true and $P$ is false.

**2.** Feed a convergent sequence, say $a_{n}=1/n$, to the original: it converges and is bounded, so both sides hold. That file cannot settle the converse.

**3.** A rushed solver who thought "if boundedness does not force convergence, then convergence does not force boundedness" would have mixed the arrows. That is the same pair-mix as in the divisibility task: converse false, original true. Another rushed move is to think the oscillation is a counterexample to "convergent implies bounded." Oscillation is not convergent, so it never enters that hypothesis.

The recovered theorem stays true, so the statement is False.`,
    ],
  },
  "math-1-100": {
    tactical_explanations: [
      `**A.** → True

Suppose J tells the truth. Then "exactly one truth-teller" is true, and J is that one, so K and L are both liars. L said "K and I are the same type." Both liars really are the same type, so L's sentence would be true. A liar cannot say a true sentence.

The J-truthful branch is impossible, so J is a liar. That is the recovered first collapse. This letter only asks J's type, which that collapse pins.

A rushed solver who started by believing J would have been in the dead branch. The contradiction on L is the reason J cannot tell the truth.

The recovered type for J is liar, so the statement is True.`,

      `**B.** → True

From the dead J-truthful branch, J is a liar. K's sentence is "J is lying," which is then true. A true sentence can come only from a truth-teller. K is a truth-teller.

Equivalently, K talks about J, so J and K always have opposite types: K's sentence is true exactly when J lies. Once J is a liar, K is forced to be a truth-teller.

A rushed solver who thought "K accused J, so K is a liar too" would have missed that an accusation of lying is true when the target really lies.

The recovered type for K is truth-teller, so the statement is True.`,

      `**C.** → True

J's sentence is false, so the count of truth-tellers cannot be exactly one, and K is already one, so a second is needed and L is all that is left. L's own sentence then checks out: K and L really are the same type.

If L were a liar instead, K would be the sole truth-teller and J's "exactly one" claim would become true, which a liar cannot say. That second collapse forces L to be a truth-teller. The two constraints work together: J's false count forbids a unique truth-teller, and K is already a truth-teller, so L cannot be a liar.

**1.** Surviving types so far: J liar, K truth-teller. Remaining question: L.

**2.** L a liar would make the truth-teller count equal $1$, restoring J's sentence. J is a liar, so J's sentence cannot be restored. L cannot be a liar.

**3.** L a truth-teller makes the count $2$, keeps J's sentence false, and makes L's "same type as K" sentence true, which a truth-teller is allowed to say.

A rushed solver who stopped after placing J and K would have left L open. The count constraint, J's false sentence, closes L. Another rushed move is to think L could still be either type because L's sentence is about K, not about J. L's sentence is satisfied in the truth-teller case and the count constraint independently forbids the liar case.

The recovered type for L is truth-teller, so the statement is True.`,

      `**D.** → False

J said "exactly one of us is a truth-teller." J is a liar, so that count is wrong. In the surviving assignment K and L are both truth-tellers, so the actual count is two, not one.

"Exactly one" is J's own line, and a liar's sentence has to be false. The real count is two. A rushed solver who copied J's words as the answer would have been trusting a liar.

What would make the claim true? A surviving assignment with K as the sole truth-teller, which the L-collapse forbids. Count one is J's line, and J is a liar, so the count cannot be one.

The recovered count is two truth-tellers, so the statement is False.`,

      `**E.** → False

The J-truthful branch died on L's sentence. In the surviving branch J is a liar, so K's "J is lying" is true and K is a truth-teller. The count of truth-tellers is then not exactly one, so L must also be a truth-teller.

If instead L were a liar, K would be the sole truth-teller and J's "exactly one" would become true, which a liar cannot say. Every alternative closes. The assignment is unique: J liar, K and L truth-tellers.

**1.** Eight type triples exist in the abstract. The J-truthful half (four triples) dies because L's "same type" sentence would then be true of two liars. That leaves four triples with J a liar.

**2.** Among those, K must be a truth-teller, because K said J is lying and that is now true. Two triples remain: L truth-teller or L liar.

**3.** L liar restores "exactly one truth-teller," making J's sentence true. J is a liar, so that triple dies. One triple remains.

A rushed solver who thought "three people, eight type assignments, surely two survive" would have skipped the two collapses. Both leftover branches die. Another rushed move is to flip K and L while keeping J a liar: K a liar would make "J is lying" false, but J is a liar, so K's accusation would be true, which a liar K cannot say.

The recovered assignment is unique, so the statement is False.`,
    ],
  },
}

const file = new URL("./13_22.json", import.meta.url);
const counts = applyExpand(file, patches);
console.log(JSON.stringify(counts, null, 2));
