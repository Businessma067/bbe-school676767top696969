import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-91": {
    tactical_explanations: [
      "**A.** → True\n\nThe guideline is $P\\Rightarrow Q$: fever above $38^{\\circ}\\mathrm{C}$ forces antibiotics. An implication fails only on $P\\land\\neg Q$. The quoted sentence is exactly that row: a patient with fever above $38^{\\circ}\\mathrm{C}$ who is not prescribed antibiotics. Observing such a patient would violate the guideline. That is the unique failure case, not another if-then rule.",
      "**B.** → False\n\n\"Above $38$\" is a strict inequality. A reading of $38.0^{\\circ}\\mathrm{C}$ is not above $38$, so $P$ is false. The guideline $P\\Rightarrow Q$ is then idle, whatever the prescription. A counterexample needs $P$ true and $Q$ false: fever strictly above $38$ and no antibiotics. This patient never fires the hypothesis. The trap is the word *above*.",
      "**C.** → True\n\nThe inverse is $\\neg P\\Rightarrow\\neg Q$: fever not above $38$, therefore no antibiotics. A patient at $37.5^{\\circ}\\mathrm{C}$ with a bacterial infection who still receives antibiotics has $\\neg P$ true and $\\neg Q$ false. That is the failure row of the inverse. Such patients are ordinary in a clinic, so the inverse can be false in practice while the original guideline still holds.",
      "**D.** → False\n\nThe converse is $Q\\Rightarrow P$: antibiotics, therefore fever above $38$. The $37.5^{\\circ}\\mathrm{C}$ patient who receives antibiotics has $Q$ true and $P$ false. True \"if\", false \"then\": the converse fails. The original guideline only constrains high-fever patients, so it does not lock this converse. The trap is treating an implication as if it also forced its converse.",
      "**E.** → True\n\nThe target is \"not every patient prescribed antibiotics has a fever above $38^{\\circ}\\mathrm{C}$.\" Its opposite is \"every such patient does have a fever above $38^{\\circ}\\mathrm{C}$,\" which is the assumption the claim describes. A patient at $37.5^{\\circ}\\mathrm{C}$ who still receives antibiotics is a case that assumption cannot allow. The opening described is the legal way to start a contradiction proof.",
    ],
  },
  "math-1-92": {
    tactical_explanations: [
      "**A.** → True\n\nCount the letters in \"aaaaaaaaaaaa\": twelve identical a's, so length $12$ and $P$ is true. The system does not classify it as strong, so $Q$ is false. That is the unique failure row of $P\\Rightarrow Q$. One such password is enough to show the policy is false as an absolute rule. Other long passwords cannot rescue it.",
      "**B.** → True\n\nThe converse $Q\\Rightarrow P$ (\"strong, therefore at least $12$ characters\") lives in the other equivalence pair. Collapse of the original $P\\Rightarrow Q$ does not decide it. Settling the converse needs a strong password shorter than $12$ characters, or a proof that none exists. Neither is supplied by \"aaaaaaaaaaaa.\"",
      "**C.** → False\n\nThe converse $Q\\Rightarrow P$ asks something only when $Q$ is true, that is, only of passwords that *are* classified as strong. An $8$-character password that is not strong has $P$ false and $Q$ false. False antecedent: the converse holds vacuously on that password and learns nothing. Only a *strong* short password would refute $Q\\Rightarrow P$.",
      "**D.** → False\n\nThe inverse $\\neg P\\Rightarrow\\neg Q$ is equivalent to the converse $Q\\Rightarrow P$, not to the contrapositive $\\neg Q\\Rightarrow\\neg P$. The contrapositive travels with the original policy. Because the inverse pairs with the converse, its truth *can* be read off the converse. Both halves of the claim reverse that pairing.",
      "**E.** → False\n\n\"If a password is not strong, it is under $12$ characters\" is $\\neg Q\\Rightarrow\\neg P$, the contrapositive of the policy. A contrapositive always shares the original's truth value. The policy is false (witness \"aaaaaaaaaaaa\"), so this sentence is false too. The same password shows it: not strong, yet length $12$, so \"under $12$\" fails. No separate check is needed.",
    ],
  },
  "math-1-93": {
    tactical_explanations: [
      "**A.** → True\n\nThe manager claims that all $500$ chips in Batch $12$ pass. Inspection found chip #$317$ in Batch $12$ failed. A universal claim fails as soon as one member fails it. The other $499$ chips have no bearing on that verdict. The manager is wrong.",
      "**B.** → False\n\nThe manager's claim is $\\forall x\\,\\mathrm{Pass}(x)$ on Batch $12$. Negating a universal gives an existential:\n\n$$\\neg\\forall x\\,\\mathrm{Pass}(x)\\equiv\\exists x\\,\\neg\\mathrm{Pass}(x),$$\n\n\"at least one chip fails.\" Chip #$317$ already witnesses that. \"All chips fail\" would be $\\forall x\\,\\neg\\mathrm{Pass}(x)$, which needs all $500$ failures and is a different sentence. The trap is replacing $\\exists$ with $\\forall$ when flipping a universal.",
      "**C.** → True\n\nBatch $13$ was cancelled before production, so it contains zero chips. To falsify \"all chips in Batch $13$ pass\" you would have to point at a chip in Batch $13$ that failed. There is no such chip, so the universal cannot be made false. No chips means no possible failures. That is exactly the situation described by *vacuously true*.",
      "**D.** → False\n\nSentence 1 is $\\forall f\\,\\exists c\\,\\mathrm{Explains}(c,f)$: after the chip is named, a code may be chosen. Sentence 2 is $\\exists c\\,\\forall f\\,\\mathrm{Explains}(c,f)$: one code is chosen first and must cover every failure. Ten failures with ten different codes make sentence 1 true and sentence 2 false. Quantifier order is the whole difference.",
      "**E.** → True\n\n\"Some chip in Batch $12$ failed\" is $\\exists x\\,\\neg\\mathrm{Pass}(x)$. Chip #$317$ is in Batch $12$ and failed the stress test, which is one witness for that existential. Existence claims are proved by exhibiting one example. Nothing else about the batch matters.",
    ],
  },
  "math-1-94": {
    tactical_explanations: [
      "**A.** → False\n\nIf $6\\mid n$, write $n=6k=3(2k)$. Then $2k$ is an integer, so $3\\mid n$ automatically. The pair \"divisible by $6$ and not by $3$\" is empty. The claim says that empty situation occurs for infinitely many $n$. Empty is not infinite. The negation of a true universal implication never happens.",
      "**B.** → True\n\nThe converse claims: if $n$ is divisible by $3$, then $n$ is divisible by $6$. Test $n=9$: $9=3\\times 3$, so $3$ divides $9$, but $9=6\\times 1+3$, so $6$ does not. Hypothesis true, conclusion false. $9$ is a perfectly good counterexample. The reason is that $6$ also demands a factor $2$, and $9$ is odd.",
      "**C.** → True\n\nThe inverse is $6\\nmid n\\Rightarrow 3\\nmid n$. Test $n=9$: $6\\nmid 9$ (hypothesis true), yet $3\\mid 9$, so $3\\nmid 9$ is false. True hypothesis, false conclusion: the inverse fails at $9$, matching the already-false converse. Inverse and converse always march together. Both halves of the claim hold.",
      "**D.** → False\n\nThe original is $6\\mid n\\Rightarrow 3\\mid n$, proved by $n=6k=3(2k)$. Its contrapositive is $3\\nmid n\\Rightarrow 6\\nmid n$, the same implication in other clothes. A statement true for every integer cannot fail for some $n$. Directly: a number untouched by $3$ cannot be a multiple of $6$. No such $n$ exists.",
      "**E.** → False\n\nThe original $6\\mid n\\Rightarrow 3\\mid n$ was proved for every integer $n$. The converse $3\\mid n\\Rightarrow 6\\mid n$ is a different implication, already refuted by $n=9$. Falsity of the converse never leaks into the original. The two statements are independent, and the original remains true. That is the classic mix-up of the two equivalence pairs.",
    ],
  },
  "math-1-95": {
    tactical_explanations: [
      "**A.** → True\n\nThe given square is $1234^{2}=1{,}522{,}756$, which ends in $6$, so it is even. Rule $R$ says: even square implies even ID. Applying it in the stated direction gives that $1234$ is even. Direct check: $1234=2\\times 617$. Hypothesis true, conclusion true: the rule is used correctly on this ID.",
      "**B.** → False\n\nThe rule is $n^{2}$ even $\\Rightarrow$ $n$ even. Contraposition starts from the denial of the conclusion ($n$ odd) and derives the denial of the hypothesis ($n^{2}$ odd). The plan in the claim assumes $n$ even and derives that $n^{2}$ is even. That proves the converse $C$, not $R$. The opening assumption is the wrong half of the implication.",
      "**C.** → True\n\nThe fact doing the work is \"$n^{2}$ odd implies $n$ odd,\" which is the contrapositive of \"$n$ even implies $n^{2}$ even\" rather than of the rule itself. Since that statement is proved too, an odd square really does force an odd ID, and $4321=2\\times 2160+1$ confirms it. The conclusion holds. Worth noticing which relative is being used.",
      "**D.** → False\n\nRule $R$ is $n^{2}$ even $\\Rightarrow$ $n$ even. Its converse $C$ is $n$ even $\\Rightarrow$ $n^{2}$ even. They point opposite ways. $C$ is proved from $n=2k$, giving $n^{2}=4k^{2}$. $R$ is proved from $n=2k+1$, giving $n^{2}$ odd. Two true statements with two proofs are still two statements, not \"logically the same.\" The trap is treating \"both true\" as \"logically the same.\"",
      "**E.** → True\n\nAn implication $R$ fails only on $n^{2}$ even and $n$ odd. A contradiction proof of $R$ therefore assumes exactly that pair, then derives an impossibility. From $n=2k+1$ one gets $n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$, odd, colliding with \"$n^{2}$ even.\" The opening the claim describes is the legal one.",
    ],
  },
  "math-1-96": {
    tactical_explanations: [
      "**A.** → True\n\nThe theorem is $\\forall t\\,(P(t)\\Rightarrow Q(t))$: every such inscribed triangle has a right angle at the third vertex. Negating a universal implication yields $\\exists t\\,(P(t)\\land\\neg Q(t))$, one inscribed triangle without a right angle. To deny a claim about every triangle you need only promise a single misbehaving triangle. Correctly formed.",
      "**B.** → True\n\nThales' theorem establishes the original universal. A statement and its negation cannot both hold, so the existential \"there exists such a triangle without a right angle\" must be false. The theorem is proved, so the misbehaving triangle the negation demands does not exist. A proved statement always leaves its negation false.",
      "**C.** → True\n\nStart with an arbitrary right triangle, hypotenuse $AB$, right angle at $C$. Let $M$ be the midpoint of $AB$. Then $MA=MB$ by construction, and a classical theorem gives $MC=MA$ as well. The circle centred at $M$ with radius $MA$ therefore passes through $A$, $B$, and $C$, and $AB$ is a diameter. Every right triangle can be inscribed that way, so the converse is true.",
      "**D.** → True\n\nThales' theorem gives $P\\Rightarrow Q$: inscribed on a diameter, therefore a right angle. The midpoint construction gives $Q\\Rightarrow P$: a right angle, therefore inscribable on the hypotenuse as diameter. Both directions hold, so here $P\\Leftrightarrow Q$. That is a proved geometric fact, not a free gift of every implication. Most converses fail.",
      "**E.** → False\n\nThe inverse is $\\neg P\\Rightarrow\\neg Q$: not inscribed that way, therefore no right angle. That sentence is equivalent to the converse, never to the original. The original pairs with the contrapositive. Truth of Thales' theorem therefore does not hand over the inverse; here the inverse is true only because the midpoint construction makes the converse true. The claimed reason (\"inverse always equivalent to the original\") is false.",
    ],
  },
  "math-1-97": {
    tactical_explanations: [
      "**A.** → True\n\nThe theorem is $S\\Rightarrow O$: perfect square, therefore an odd number of positive divisors. Negating an implication keeps the \"if\" and rejects the \"then\": $S\\land\\neg O$, a perfect square with an even divisor count. That is the quoted sentence. Correct formation is about shape; the pairing argument later shows no integer actually fits it.",
      "**B.** → True\n\n$36$ is $6^{2}$, so the hypothesis \"perfect square\" holds. The listed divisors are $1,2,3,4,6,9,12,18,36$: nine, which is odd. Hypothesis true and conclusion true: $36$ supports the theorem. A counterexample would need a square with an even divisor count, which this is not.",
      "**C.** → True\n\nDivisors pair as $d$ with $\\frac{n}{d}$. A divisor is its own partner only when $n$ is a perfect square. So if the divisor count is odd, that leftover partner must exist, and $n$ is a square. That is the converse, and it sits beside the original theorem. Both directions hold here.",
      "**D.** → False\n\nThe theorem speaks only about perfect squares. $20$ sits between $4^{2}=16$ and $5^{2}=25$, so $20$ is not a square and the hypothesis is false. Its divisors number $6$, even, as the pairing for non-squares predicts. An implication with a false \"if\" is not tested, let alone refuted, by $20$. The trap is treating a non-square with an even list as if it broke \"square $\\Rightarrow$ odd count.\"",
      "**E.** → True\n\nThe inverse is \"not a square, therefore even divisor count,\" equivalent to the converse. $20$ is not a square and has $6$ divisors, even, matching it. The pairing argument gives the same conclusion in general: with no leftover square-root partner, every divisor has a distinct mate and the count is even. The inverse holds here because the converse does.",
    ],
  },
  "math-1-98": {
    tactical_explanations: [
      "**A.** → True\n\nOpen clue (3): Grace is not a teacher. Clue (2) is a biconditional, so \"Felix is an engineer\" must match \"Grace is a teacher.\" The right-hand side is false, therefore Felix is not an engineer. Clue (1) is \"Emma is a doctor $\\Leftrightarrow$ Felix is not an engineer.\" The right-hand side is now true, so Emma is a doctor. Each link is forced; there is no other job for her.",
      "**B.** → False\n\nFelix does teach, but the justification attached to the claim is broken. Clue (2) connects two unknowns and on its own names nobody; even with clue (3) it yields only \"Felix is not the engineer,\" and pinning him to Teacher needs Emma placed by clue (1) and Hugo placed by clue (4). The trap is treating a correct conclusion as if a single clue delivered it. A right job with a wrong reason makes the statement false.",
      "**C.** → True\n\nClue (3) says Grace is not a teacher, so clue (2) forces Felix not to be an engineer, and clue (1) then makes Emma the doctor. Clue (4) places Hugo as the lawyer. Two jobs remain, Engineer and Teacher, for Felix and Grace, and Felix is already barred from Engineer. With Doctor taken by Emma and Lawyer by Hugo, Grace engineers.",
      "**D.** → True\n\nDrop clue (3) and try Grace as teacher. Clue (2) then makes Felix the engineer. Clue (1) then makes \"Emma is a doctor\" false. Clue (4) already placed Hugo as lawyer, so the only job left for Emma is Doctor. That contradicts \"Emma is not a doctor.\" Clues (1), (2), and (4) already forbid Grace-as-teacher, so clue (3) is redundant.",
      "**E.** → True\n\nThe chain to Emma's job used only clues (3), (2), and (1): Grace not teacher $\\Rightarrow$ Felix not engineer $\\Rightarrow$ Emma is doctor. Clue (4) names Hugo as lawyer and is used only later to split Engineer from Teacher between Felix and Grace. Remove clue (4) and Emma is still the doctor. The path never mentioned Hugo.",
    ],
  },
  "math-1-99": {
    tactical_explanations: [
      "**A.** → True\n\nThe theorem says: if a sequence converges, then it is bounded. Its negation would be a sequence that converges and is not bounded. Because the theorem is proved for every sequence, that combination never occurs. The theorem holds for every sequence, so nothing can converge while running off to infinity. The description picks out an empty collection.",
      "**B.** → True\n\nThe converse claims: bounded, therefore convergent. For $a_{n}=(-1)^{n}$ the terms are only $-1$ and $1$, so every term lies in $[-1,1]$ and the sequence is bounded. It never settles near a single limit: odd and even subsequences stay at different values. Bounded with no limit: the converse fails, and this sequence is the witness.",
      "**C.** → True\n\nThe inverse is \"does not converge, therefore not bounded,\" equivalent to the converse. The same sequence $(-1)^{n}$ diverges (alternating) and stays inside $[-1,1]$ (bounded). Hypothesis of the inverse true, conclusion false. The inverse is false for the same reason the converse is, with the same witness. Inverse and converse always share a truth value.",
      "**D.** → True\n\nThe contrapositive is \"not bounded, therefore does not converge,\" equivalent to the proved theorem, hence true. For the sequences $n$, $2n$, and $n^{2}$, unboundedness is immediate ($n\\to\\infty$), and the contrapositive then yields divergence without a separate $\\varepsilon$-argument. Both halves of the claim hold: true, and genuinely useful.",
      "**E.** → False\n\nThe theorem $P\\Rightarrow Q$ (convergent $\\Rightarrow$ bounded) sits with its contrapositive. The converse $Q\\Rightarrow P$ sits with the inverse. Falsity of the converse (witness $(-1)^{n}$) does not touch the theorem. A convergent sequence is still bounded; some bounded sequences (this one) fail to converge. The original theorem remains true. Falsity does not leak across the two pairs.",
    ],
  },
  "math-1-100": {
    tactical_explanations: [
      "**A.** → True\n\nSuppose J tells the truth. Then \"exactly one truth-teller\" is true, and J is that one, so K and L are both liars. L said \"K and I are the same type.\" Both liars really are the same type, so L's sentence would be true. A liar cannot say a true sentence. The J-truthful branch is impossible, so J is a liar.",
      "**B.** → True\n\nThe only surviving branch has J as a liar, so J's sentence is false. K's sentence is \"J is lying,\" which is then true. A true sentence can come only from a truth-teller. K is a truth-teller. The overview already noted that J and K always have opposite types.",
      "**C.** → True\n\nJ's sentence is false, so the count of truth-tellers cannot be exactly one, and K is already one, so a second is needed and L is all that is left. L's own sentence then checks out: K and L really are the same type. If L were a liar instead, K would be the sole truth-teller and J's \"exactly one\" claim would become true, which a liar cannot say.",
      "**D.** → False\n\nJ said \"exactly one of us is a truth-teller.\" J is a liar, so that count is wrong. In the surviving assignment K and L are both truth-tellers, so the actual count is two, not one. \"Exactly one\" is J's own line, and a liar's sentence has to be false. The real count is two.",
      "**E.** → False\n\nThe J-truthful branch died on L's sentence. In the surviving branch J is a liar, so K's \"J is lying\" is true and K is a truth-teller. The count of truth-tellers is then not exactly one, so L must also be a truth-teller. If instead L were a liar, K would be the sole truth-teller and J's \"exactly one\" would become true, which a liar cannot say. Every alternative closes. The assignment is unique.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/13_22.json",
  patches
);
console.log("13_22 edited", n);
