import { applyLetters } from "./_apply_letters.mjs";

const patches = {
  "math-1-92": {
    B: `**B.** → True

The converse is $Q\\Rightarrow P$: if a password is classified as strong, then it is at least $12$ characters. That sentence lives in the other equivalence pair, with the inverse, not with the original policy.

The twelve-a string collapsed $P\\Rightarrow Q$. Collapse of one pair never decides the other pair. Settling the converse needs either a strong password shorter than $12$ characters, or a proof that no such password exists. Neither is supplied by "aaaaaaaaaaaa," which is long and not strong.

A rushed solver who thought "the policy is false, so every relative is false" would have condemned the converse automatically. Relatives travel in pairs, not as a block of four.

The recovered objects that kill the policy are length $12$ with $Q$ false. Those objects sit on the original's failure row $P\\land\\neg Q$. The converse fails only on $Q\\land\\neg P$: a classified-strong password that is still short. The twelve-a file has $Q$ false, so it never even enters the converse's "if" slot. Vacuous holding on that one file is not a proof of the converse, and it is not a refutation either.

What would settle the converse the other way? A system that labels some $8$-character string as strong, or a second rule that forbids any strong label below length $12$. The stem supplies neither. Length-only collapse of the original therefore leaves $Q\\Rightarrow P$ as unpaid work.

Independence here is not a slogan. It is a mismatch of failure shapes: the recovered password witnesses one pair and is silent on the other.

The original's contrapositive, "not strong, therefore under $12$ characters," falls with the original at the same twelve-a file. That is still the first pair. The converse is not in that pair, so it is not settled by watching the policy collapse.

so the statement is True.`,
  },
  "math-1-93": {
    A: `**A.** → True

The manager's sentence is a universal: every one of the $500$ chips in Batch $12$ passes the stress test. Inspection found chip #$317$ in Batch $12$ failed. A universal claim fails as soon as one member of the domain fails it.

The other $499$ chips have no bearing on that verdict. Even if all of them passed, the one failed chip is enough. The recovered counterexample is that single numbered chip, not a census of the batch.

A rushed solver who wanted "most chips pass, so the claim is roughly true" would be using a different standard. Universals do not admit a majority exception.

Batch $13$ is a different story, empty and idle. This letter is only Batch $12$, which has a named inhabitant that failed. Changing the stem so that #$317$ passed, or so that it belonged to another batch, would remove the witness. Against the given inspection, the recovered failure is already on the roster.

The manager's universal is therefore false as a claim about Batch $12$.

so the statement is True.`,
  },
  "math-1-95": {
    B: `**B.** → False

The rule is $n^{2}$ even $\\Rightarrow$ $n$ even. Contraposition starts from the denial of the conclusion and derives the denial of the hypothesis: assume $n$ is odd, derive that $n^{2}$ is odd.

The plan in the claim assumes $n$ even and derives that $n^{2}$ is even. That proves the converse $C$, not $R$. The opening assumption is the wrong half of the implication. This is a labelling error, not an algebra error: the even-to-even calculation is correct for $C$ and mislabelled as contraposition of $R$.

**1.** Contraposition of $R$: start from $n$ odd, conclude $n^{2}$ odd. Write $n=2k+1$, expand $n^{2}=4k^{2}+4k+1$, and read off the remainder $1$.

**2.** Direct proof of $C$: start from $n$ even, conclude $n^{2}$ even. Write $n=2k$, expand $n^{2}=4k^{2}$. Those are opposite opening lines and opposite expansions.

**3.** A rushed solver who thought "assume the even case, because evenness is the topic" would have proved the easier converse and labelled it contraposition of $R$. Labels matter: the same even-to-even algebra is a correct proof of $C$ and a mislabelled proof of $R$. Another rushed move is to think "contrapositive means swap the two even facts." Swapping without negating produces the converse, which is exactly this letter's plan.

What would make the claimed plan correct? If the target had been $C$ rather than $R$, or if the plan had opened with $n$ odd. Against $R$, opening with $n$ even is the wrong door.

The recovered IDs do not rescue the label either. $1234$ is even with an even square, which is a file for $C$, not a contrapose of $R$. $4321$ is odd with an odd square, which is the contrapose of $C$. Neither file is the opening "assume even, derive even square" dressed as a contrapose of $R$.

The recovered contraposition of $R$ still opens with $n$ odd, so the claimed plan is the wrong proof of the wrong relative.

so the statement is False.`,
    C: `**C.** → True

The given square $4321^{2}=18{,}671{,}041$ ends in $1$, so it is odd. The fact doing the work is "$n^{2}$ odd implies $n$ odd," which is the contrapositive of the converse $C$ ($n$ even implies $n^{2}$ even), and also the direct reading of "odd square, therefore odd ID."

An odd square really does force an odd ID. Direct check: $4321=2\\times 2160+1$, remainder $1$, so $4321$ is odd. Hypothesis (odd square) true, conclusion (odd ID) true.

A rushed solver who applied $R$ itself here would be stuck: $R$ speaks only about even squares, and this square is odd, so $R$ is idle. The letter correctly names the contrapositive direction that handles odd squares.

The neighbouring file $1234$ is the even-square case and is idle for this sentence. Swapping the two IDs would make the odd-square rule silent. Against $4321$, the recovered odd-square implication fires and matches the odd remainder. The last digit $1$ is already enough to read oddness; the full square $18{,}671{,}041$ is listed only to confirm that digit.

so the statement is True.`,
    D: `**D.** → False

Rule $R$ is $n^{2}$ even $\\Rightarrow$ $n$ even. Its converse $C$ is $n$ even $\\Rightarrow$ $n^{2}$ even. They point opposite ways. Both happen to be true for integers, but two true statements with two proofs are still two statements, not "logically the same."

$C$ is proved from $n=2k$, giving $n^{2}=4k^{2}$. $R$ is proved from $n=2k+1$, giving $n^{2}$ odd, which is the contrapositive route. Different opening assumptions, different algebra.

A rushed solver treats "both true" as "logically the same." Logical sameness would mean each is equivalent to the other as formulas, which would make $R$ equivalent to its converse in general, false for an arbitrary implication.

On integers the two arrows happen to travel together because evenness of $n$ and of $n^{2}$ are equivalent. That is a number-theory coincidence, not a law of implication. A different predicate, such as "if $n$ is divisible by $4$, then $n$ is even," is true while its converse is not. The stem's $R$ and $C$ still have two names, two proofs, and two opening lines.

The recovered $R$ and $C$ remain distinct implications.

so the statement is False.`,
  },
  "math-1-96": {
    E: `**E.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: not inscribed that way, therefore no right angle. That sentence is equivalent to the converse, never to the original. The original pairs with the contrapositive.

Truth of Thales' theorem therefore does not hand over the inverse. Here the inverse is true only because the midpoint construction makes the converse true, which then carries the inverse with it. The claimed reason ("inverse always equivalent to the original") is false.

A rushed solver who treated all four relatives as clones of the original would have accepted this letter. The pairing chart is the whole content: original with contrapositive, converse with inverse.

A triangle that is not inscribed on a diameter can still have a right angle for other reasons, or fail to have one. That freedom is why the inverse is not a free gift of Thales. The recovered pairing puts the inverse with the converse. Sharing a truth value with the original would require a biconditional from the start, which this letter's reason never supplied.

The recovered inverse is not equivalent to the original.

so the statement is False.`,
  },
  "math-1-97": {
    A: `**A.** → True

The theorem is $S\\Rightarrow O$: perfect square, therefore an odd number of positive divisors. Negating an implication keeps the "if" and rejects the "then": $S\\land\\neg O$, a perfect square with an even divisor count. That is the quoted sentence.

Correct formation is about shape. The pairing argument later shows no integer actually fits that shape, so the negation is a false sentence with the right form. This letter only asks whether the form is right.

A rushed solver who wanted the negation to be "if square then even count" would have written another implication $S\\Rightarrow\\neg O$. The true negation is a single counterexample shape, not a rival theorem.

Sample $36$ has nine divisors, odd, so it is not a witness of $S\\land\\neg O$. Sample $20$ is not a square, so it is not a witness either. The form can be correct while remaining empty of examples. Emptiness is a later letter's news. Here the recovered negation is still $S\\land\\neg O$.

so the statement is True.`,
    C: `**C.** → True

Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $n$ is a perfect square. So if the divisor count is odd, that leftover partner must exist, and $n$ is a square. That is the converse: odd count $\\Rightarrow$ square.

It sits beside the original theorem $S\\Rightarrow O$. Both directions hold here, by the same pairing. This is extra number theory on the recovered pairing, not a free gift of the original arrow.

**1.** If $n$ is not a square, every $d$ has a partner $n/d\\ne d$, so the list comes in pairs and the count is even. The contrapositive of the converse is therefore true, which is the same as the converse being true.

**2.** Sample $36$: nine divisors, leftover partner $6$, odd count, and $36$ is a square. Sample $20$: six divisors, no leftover, even count, and $20$ is not a square. Both samples match the converse.

**3.** A rushed solver who thought "converses always fail" would have rejected this one on principle. The leftover square-root partner is why this converse is true. Another rushed move is to think "odd count could come from some other leftover." The only way a divisor is its own partner is $d^{2}=n$.

What would make the converse false? A non-square with an odd divisor count, which would require a self-partner that was not a square root. The pairing forbids that.

The original theorem is $S\\Rightarrow O$. This letter is the reverse arrow $O\\Rightarrow S$. They are two sentences that happen to be jointly true, which is why both directions of the implication hold. A solver who treated "both true" as "the same sentence" would be answering letter D of a neighbouring ID-parity task. Here the pairing really does buy the converse.

The recovered pairing therefore licenses the converse as well as the original.

so the statement is True.`,
  },
  "math-1-98": {
    C: `**C.** → True

Clue (3) says Grace is not a teacher, so clue (2) forces Felix not to be an engineer, and clue (1) then makes Emma the doctor. Clue (4) places Hugo as the lawyer. Two jobs remain, Engineer and Teacher, for Felix and Grace, and Felix is already barred from Engineer.

With Doctor taken by Emma and Lawyer by Hugo, Grace engineers. That is extra placement after Emma's job was recovered: split the last two jobs using Felix's ban.

A rushed solver who gave Grace Teacher despite clue (3) would have broken the opening fact. A solver who gave her Lawyer would have collided with Hugo.

Felix then takes Teacher, the last remaining job. The recovered permutation is Emma doctor, Felix teacher, Grace engineer, Hugo lawyer. This letter only names Grace's cell in that permutation. Swapping Grace with Felix would restore Felix as engineer and Grace as teacher, which clue (3) forbids.

The leftover job recovered for Grace is Engineer.

so the statement is True.`,
  },
  "math-1-99": {
    C: `**C.** → True

The inverse is "does not converge, therefore not bounded," equivalent to the converse. The same sequence $(-1)^{n}$ diverges (alternating) and stays inside $[-1,1]$ (bounded). Hypothesis of the inverse true, conclusion false.

The inverse is false for the same reason the converse is, with the same witness. Inverse and converse always share a truth value. No new sequence is required.

A rushed solver who went looking for an unbounded divergent sequence (such as $a_{n}=n$) would have found a file that satisfies the inverse rather than refuting it. The refuting file must be divergent and bounded, which is exactly the oscillation already in hand.

**1.** Write $P$ for convergence and $Q$ for boundedness. The theorem is $P\\Rightarrow Q$. The inverse is $\\neg P\\Rightarrow\\neg Q$. Failure of the inverse is $\\neg P\\land Q$: diverges, yet bounded.

**2.** The recovered oscillation has $\\neg P$ (no limit) and $Q$ (values in $\\{-1,1\\}$). That is the inverse's unique failure row. The converse $Q\\Rightarrow P$ fails on the same row, which is why one sequence does double duty.

**3.** The original theorem is idle on this file: $P$ is false, so $P\\Rightarrow Q$ holds vacuously. Knocking down the inverse does not knock down the theorem. That is the pairing, not a new analysis fact.

What would make the inverse true? Every divergent sequence would have to be unbounded. The stem's oscillation is the standard reason that extra promise is false. A solver who replaced $(-1)^{n}$ by $n$ would have been illustrating divergence with unboundedness, which supports the inverse instead of breaking it.

The original theorem survives this file because its hypothesis never fires. The converse and the inverse do not survive, because their hypotheses do fire: boundedness for the converse, divergence for the inverse. Same witness, two names, one truth value for that pair.

The recovered inverse therefore falls with the converse at $(-1)^{n}$. Bounded divergence is the whole of this letter: not a new sequence, and not a claim about the original theorem.

so the statement is True.`,
  },
  "math-1-100": {
    A: `**A.** → True

Suppose J tells the truth. Then "exactly one truth-teller" is true, and J is that one, so K and L are both liars. L said "K and I are the same type." Both liars really are the same type, so L's sentence would be true. A liar cannot say a true sentence.

The J-truthful branch is impossible, so J is a liar. That is the recovered first collapse. This letter only asks J's type, which that collapse pins.

A rushed solver who started by believing J would have been in the dead branch. The contradiction on L is the reason J cannot tell the truth.

K's accusation and L's count are later letters. They are not needed to finish J. Once the truthful-J branch dies, J is a liar in every surviving assignment. Changing L's line so that two liars would not be "the same type" would reopen the branch. Against the given lines, the recovered type for J is liar.

so the statement is True.`,
    B: `**B.** → True

From the dead J-truthful branch, J is a liar. K's sentence is "J is lying," which is then true. A true sentence can come only from a truth-teller. K is a truth-teller.

Equivalently, K talks about J, so J and K always have opposite types: K's sentence is true exactly when J lies. Once J is a liar, K is forced to be a truth-teller.

A rushed solver who thought "K accused J, so K is a liar too" would have missed that an accusation of lying is true when the target really lies.

The recovered opposite-types fact is special to K's wording, not to L. L talks about matching K, which is a later constraint. This letter only needs K's sentence evaluated on a lying J. The evaluation is true, so K tells the truth. If K had said "J tells the truth," the same lying J would have made K a liar. The actual wording is an accusation of lying, and that accusation holds.

so the statement is True.`,
    C: `**C.** → True

J's sentence is false, so the count of truth-tellers cannot be exactly one, and K is already one, so a second is needed and L is all that is left. L's own sentence then checks out: K and L really are the same type.

If L were a liar instead, K would be the sole truth-teller and J's "exactly one" claim would become true, which a liar cannot say. That second collapse forces L to be a truth-teller. The two constraints work together: J's false count forbids a unique truth-teller, and K is already a truth-teller, so L cannot be a liar.

**1.** Surviving types so far: J liar, K truth-teller. Remaining question: L.

**2.** L a liar would make the truth-teller count equal $1$, restoring J's sentence. J is a liar, so J's sentence cannot be restored. L cannot be a liar.

**3.** L a truth-teller makes the count $2$, keeps J's sentence false, and makes L's "same type as K" sentence true, which a truth-teller is allowed to say.

A rushed solver who stopped after placing J and K would have left L open. The count constraint, J's false sentence, closes L. Another rushed move is to think L could still be either type because L's sentence is about K, not about J. L's sentence is satisfied in the truth-teller case and the count constraint independently forbids the liar case.

What would leave L free? If J had said "at least one truth-teller," both L-types might survive. J said "exactly one," and that exact count is already used up by K unless L joins. The recovered type for L is therefore truth-teller, matching K.

so the statement is True.`,
    D: `**D.** → False

J said "exactly one of us is a truth-teller." J is a liar, so that count is wrong. In the surviving assignment K and L are both truth-tellers, so the actual count is two, not one.

"Exactly one" is J's own line, and a liar's sentence has to be false. The real count is two. A rushed solver who copied J's words as the answer would have been trusting a liar.

What would make the claim true? A surviving assignment with K as the sole truth-teller, which the L-collapse forbids. Count one is J's line, and J is a liar, so the count cannot be one.

The three recovered types are liar, truth-teller, truth-teller. That is two truth-tellers. Copying J's census after placing J as a liar is the same error as treating a false sentence as data. Letter A already forced J's type; this letter only counts the surviving truth-tellers and refuses J's number.

so the statement is False.`,
  },
};

const { n, report } = applyLetters(
  new URL("./13_22.json", import.meta.url),
  patches
);
console.log("rewritten", n);
for (const r of report) console.log(r.id, r.letter, r.words);
