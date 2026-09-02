import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-51": {
    tactical_explanations: [
      "**A.** → False\n\nThe criterion is $D\\Rightarrow S$, and $S$ demands both symptoms. R holds the diagnosis, so both symptoms must be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks the necessary condition. The situation described is not merely unlikely; it is ruled out by the wording \"only if both.\"",
      "**B.** → False\n\nPatient S has A but not B, so the conjunction $S$ is false. The contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks the diagnosis. Missing either half of an \"and\" is enough. S cannot be diagnosed with condition X, whatever else is on the chart.",
      "**C.** → False\n\nSufficient would be $S\\Rightarrow D$. The doctor states the opposite: both symptoms do not guarantee the diagnosis, because other conditions must still be ruled out. So $S$ is necessary and not sufficient. The reverse arrow is the claim the criterion explicitly refuses.",
      "**D.** → True\n\nMissing symptom A makes the conjunction $S$ false, regardless of B. Then $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis. An \"and\" is destroyed by either half, so no A means no diagnosis with X. The contrapositive gives this without inspecting B at all.",
      "**E.** → False\n\nThe doctor explicitly allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates a necessary condition from a sufficient one. A patient with A and B who remains undiagnosed is not only possible; it is written into the criterion.",
    ],
  },
  "math-1-52": {
    tactical_explanations: [
      "**A.** → True\n\nDivisible by $3$ and by $5$ means divisible by $15$, and $15$ sits inside $\\{1,\\ldots,20\\}$. One witness is all an $\\exists$ sentence needs. Listing every multiple is unnecessary; $15$ alone settles it. The sentence would fail only if the range stopped before $15$.",
      "**B.** → True\n\nEvery multiple of four is $4k=2(2k)$, hence even. In this range the multiples are $\\{4,8,12,16,20\\}$, all even, as the overview already noted. No exception is possible: divisibility by $4$ always carries divisibility by $2$. The implication would fail only at a multiple of $4$ that was odd, and none exists.",
      "**C.** → False\n\nThe flipped implication breaks at $x=2$: divisible by $2$, not by $4$. One counterexample inside the range kills a universal. The same break occurs at $6,10,14,18$; any one of them is enough. Direction of the arrow is the whole issue.",
      "**D.** → True\n\nAn implication fails only where the \"if\" holds and the \"then\" fails, so its negation is $\\exists x\\,(P\\land\\neg Q)$. Here that is \"some prime in the range is even.\" The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$. Shape first; whether the negation is true is the next letter.",
      "**E.** → True\n\nThe negation asks for an even prime in the range, and $2$ is one: divisors $1$ and $2$ only, and even. So the negation is true in this universe, and \"every prime is odd\" is false here. Inside a range that excluded $2$, the original universal would survive.",
    ],
  },
  "math-1-53": {
    tactical_explanations: [
      "**A.** → True\n\nBanned means $v\\ge 3$. Person T has $v=2$, so $2\\ge 3$ fails and T is not banned. The biconditional \"member iff not banned\" then forces membership. A count of $3$ would have gone the other way; $2$ is strictly below the threshold.",
      "**B.** → False\n\nPerson U has $v=4$, and $4\\ge 3$, so U is banned. The same biconditional makes banned the exact opposite of member. U is not a member. Clearing the threshold by one extra violation is still a clear yes on the banned test.",
      "**C.** → True\n\n\"Member iff not banned\" means the two lists never overlap and never leave a gap: every person is in exactly one of them. That is the definition of complementary sets. A one-way \"only if\" would have left a third possibility; the biconditional does not.",
      "**D.** → False\n\n\"Three or more\" includes $v=3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. The trap is treating the threshold as a grey zone. Once banned $\\iff v\\ge 3$ is fixed, $v=3$ is not discretionary.",
      "**E.** → False\n\nFor each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided. Ambiguity would require a threshold the rule did not write, and none is sitting in the wording.",
    ],
  },
  "math-1-54": {
    tactical_explanations: [
      "**A.** → True\n\nA universal $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. That one counterexample is a complete disproof. Nothing further (no second example, no general argument) is required. The claim that one example suffices is the whole method.",
      "**B.** → True\n\nA counterexample to \"all primes are odd\" must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed. An odd prime such as $3$ would be a confirming example, not a counterexample.",
      "**C.** → True\n\n$P\\Rightarrow Q$ fails only in the case $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility, showing the failure cannot occur. The description in the statement is that method. Opening with $P$ and $Q$ both true would prove nothing about the implication.",
      "**D.** → False\n\nTo prove \"$\\sqrt{2}$ is irrational\" by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=\\frac{a}{b}$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite. The opening move in the statement runs the wrong direction.",
      "**E.** → False\n\nOne confirming example never proves a universal claim. The odd prime $3$ fits \"all primes are odd\" and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample. A universal claim needs an argument about all cases, or it remains open.",
    ],
  },
  "math-1-55": {
    tactical_explanations: [
      "**A.** → True\n\nThe rule is $P\\Rightarrow Q$. An implication is false only in the row $P$ true, $Q$ false, i.e. rain and an uncancelled picnic. The quoted negation is that unique failure case. Any other combination (dry cancellation, rainy cancellation) leaves the original standing.",
      "**B.** → False\n\nThe converse $Q\\Rightarrow P$ reads the rule backwards. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, while the converse fails. One scenario where the two split shows they are not equivalent. The organizer never promised that rain is the only cancelling cause.",
      "**C.** → False\n\nThe inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Equivalence would require matching truth values in every case; this one split already separates them. Inverse pairs with converse, not with the original.",
      "**D.** → True\n\nAssign the venue-conflict day: rain false, cancelled true. The inverse demanded \"no rain, so no cancellation\" and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise. Both halves of the statement hold.",
      "**E.** → True\n\nSwap and negate: $\\neg Q\\Rightarrow\\neg P$, \"if the picnic was not cancelled, then it did not rain.\" That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free with it. It is the one relative that is safe.",
    ],
  },
  "math-1-56": {
    tactical_explanations: [
      "**A.** → True\n\nInclusive \"or\" means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy \"at least one\" and stay inside the count. Nothing in the survey wording narrows it to \"exactly one.\" Exclusive or would drop those $15$; mathematical or does not.",
      "**B.** → True\n\nThe overview already split the survey into both $15$, X-only $25$, Y-only $20$. Inclusive union is $25+15+20=60$, or $40+35-15=60$. The subtraction removes the double count of the both-buyers. Counting $40+35=75$ would count those $15$ twice.",
      "**C.** → True\n\nExclusive or keeps only the two outer regions: $25+20=45$. Equivalently, drop the both-buyers from the inclusive union: $60-15=45$. Either route matches the exclusive count. The both-buyers are in for inclusive or and out for XOR; that is the whole difference.",
      "**D.** → True\n\nThe four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. \"Always the same truth value\" is that description. It is not a claim that both parts are true in reality.",
      "**E.** → False\n\n\"At least one true\" is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there. One true component is not enough for a biconditional. Inclusive or is happy in both mixed cases; the biconditional is false in both.",
    ],
  },
  "math-1-57": {
    tactical_explanations: [
      "**A.** → False\n\nK cleared attendance ($85\\%\\ge 80\\%$) but scored $48<50$, so $F$ is false and $A\\land F$ collapses. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$. K does not pass.",
      "**B.** → False\n\nL's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The conjunction never lets the strong half rescue the weak half. L does not pass either. Compensation would require adding or averaging the two numbers, which the rule never does.",
      "**C.** → False\n\nCompensation would let a high exam score repair low attendance. L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. The two numbers are never added or averaged. Exam points cannot repair attendance.",
      "**D.** → True\n\nA score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses. The student fails no matter how narrow the gap is.",
      "**E.** → True\n\nCompare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen. Each gate is pass/fail on its own number.",
    ],
  },
  "math-1-58": {
    tactical_explanations: [
      "**A.** → False\n\nThe filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item. The AND dies on the first half.",
      "**B.** → False\n\nItem N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough. Each of M and N fails a different conjunct; both stay hidden.",
      "**C.** → False\n\nDe Morgan requires the connective to flip: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent. Keeping the OR while moving the NOT inside is the error.",
      "**D.** → True\n\nPush the NOT inside with the connective flip:\n\n$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O.$$\n\nIn English that is \"not on sale and not out of stock,\" i.e. neither on sale nor out of stock. That is a faithful translation of the filter. The AND is the flipped connective, not an optional extra.",
      "**E.** → True\n\nItem K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The filter displays K. Of the three items, K is the one that meets \"neither on sale nor out of stock.\" A single failed half would have hidden it, as with M and N.",
    ],
  },
  "math-1-59": {
    tactical_explanations: [
      "**A.** → True\n\nFrom $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. \"Not above $10$\" and \"at most $10$\" are the same cutoff. The contrapositive is the one safe rewriting.",
      "**B.** → False\n\nThe converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above $10\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched (because $P$ is false), while the converse fails. Not equivalent. Rate rises have other causes.",
      "**C.** → True\n\n\"$P$ is sufficient for $Q$\" means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$. Sufficient names the tail of the arrow, not the head.",
      "**D.** → False\n\n\"$P$ is necessary for $Q$\" would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The vocabulary is attached to the wrong end. Necessary means \"without this, the other cannot happen\"; the rule does not force high inflation whenever rates rise.",
      "**E.** → False\n\nObserving a rate rise ($Q$ true) and inferring inflation above $10\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. The $4\\%$ currency-defence rise is a case where that inference fails. Walking backwards along the arrow is the classic trap.",
    ],
  },
  "math-1-60": {
    tactical_explanations: [
      "**A.** → True\n\nThe first link is $P\\Leftrightarrow Q$ and $P$ is given true. Agreement forbids $Q$ from being false, so $Q$ is true. The second proposition matches the first. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$.",
      "**B.** → True\n\nThe second link is $Q\\Leftrightarrow R$. From A, $Q$ is true, so $R$ must be true as well. The third proposition is true. The extra fact \"$P$ is true\" has now travelled the whole chain.",
      "**C.** → True\n\nIf $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value. The unstated link is an unavoidable consequence of the two links that are given.",
      "**D.** → True\n\nBiconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false. A false third proposition would drag the first down with it. The backwards reading is as sound as the forwards one.",
      "**E.** → False\n\n$P\\Leftrightarrow R$ alone does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free, so we cannot conclude that the second always matches. The derived link is weaker than the pair it came from.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/08_17.json",
  patches
);
console.log("08_17 edited", n);
