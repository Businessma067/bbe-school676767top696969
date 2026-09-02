import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-61": {
    tactical_explanations: [
      "**A.** → True\n\n\"Cancelled unless $S$\" means: if the exception $S$ fails, cancellation occurs. That is $\\neg S\\Rightarrow C$. If the rain does not stop before 6 PM, the concert is cancelled. The unless-clause is an escape, not a two-way guarantee. This translation is the rule in implication form.",
      "**B.** → False\n\n$S\\Rightarrow\\neg C$ would say that stopping rain guarantees the concert happens. A 5 PM stop plus a power failure has $S$ true and $C$ true: $S\\lor C$ (the rule) holds, while $S\\Rightarrow\\neg C$ fails. Stopping rain removes one reason to cancel, not every reason. Not an equivalent form.",
      "**C.** → True\n\nRewrite $\\neg S\\Rightarrow C$ as an OR: $A\\Rightarrow B$ is $\\neg A\\lor B$, so $\\neg(\\neg S)\\lor C$, i.e. $S\\lor C$. OR is symmetric, so $C\\lor S$ is the same formula. This is the rule in different clothing, not a stronger promise.",
      "**D.** → False\n\nOnce $S$ is true, the antecedent $\\neg S$ of the rule is false, so the implication is silent. It does not assert $\\neg C$. A power cut can still cancel the concert after the rain stops. No guarantee that the concert happens. Reading a rescue into the escape clause is the trap.",
      "**E.** → True\n\nThe contrapositive of $\\neg S\\Rightarrow C$ is $\\neg C\\Rightarrow S$. If the concert is not cancelled, the rain must have stopped before 6 PM. A concert that went ahead proves $S$. This is the one relative that always shares the original's truth value.",
    ],
  },
  "math-1-62": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's table already has P qualifying: age $70\\ge 65$, no disability, income $\\$18{,}000<\\$20{,}000$, so $D\\lor L$ is true on the income half and the conjunction holds. The bracket is an or; income alone fills it. Disability is not required once $L$ holds.",
      "**B.** → False\n\nQ is $67$, has a qualifying disability, and earns $\\$50{,}000$. Then $D\\lor L$ is true on the disability half, so Q does qualify. The claim that income above $\\$20{,}000$ blocks Q ignores the OR in the bracket. Failing $L$ while $D$ holds leaves the OR true.",
      "**C.** → False\n\nQ is the counterexample: income $\\$50{,}000$ fails $L$, yet $D$ is true, so the discount still applies. The income threshold is only one of two interchangeable options inside $D\\lor L$. An income above $\\$20{,}000$ disqualifies nobody by itself.",
      "**D.** → True\n\nInvent the rider: age $70$ ($A$ true), no disability, income $\\$25{,}000$ so both bracket options are false. Then $D\\lor L$ fails and the conjunction is false. That 70-year-old does not qualify, so the scenario exists. Age opens the gate; it does not fill the bracket.",
      "**E.** → False\n\nAge alone makes $A$ true but leaves the bracket untouched. The rider in D has $A$ true and $D\\lor L$ false, so the conjunction fails. Being at least $65$ is necessary, not sufficient. A ticket that skipped the hardship tests would need a different rule.",
    ],
  },
  "math-1-63": {
    tactical_explanations: [
      "**A.** → True\n\nThe claim ranges over the positive integers, so the first domino is $n=1$, and $1=\\frac{1\\cdot 2}{2}=1$. Right base case, correctly verified. Starting at $n=0$ would be a different domain; starting at $n=2$ would skip the first positive integer.",
      "**B.** → True\n\nAfter verifying $n=1$, the remaining infinitely many $n$ are covered by one step: assume the formula at $n=k$, then prove it at $n=k+1$. That is the inductive step as stated. Checking $k$ and $k+1$ as two numerical examples is not the same as a general step from $k$ to $k+1$.",
      "**C.** → False\n\nChecking $n=1,2,3,4,5$ confirms five instances and says nothing about $n=6$. A proof by induction needs the general step from $k$ to $k+1$. Five numerical checks are evidence, not a complete inductive proof. Infinitely many unchecked $n$ remain.",
      "**D.** → True\n\nThe algebra quoted is the inductive step: add $(k+1)$ to the hypothesis and factor.\n\n$$\\frac{k(k+1)}{2}+(k+1)=\\frac{k(k+1)+2(k+1)}{2}=\\frac{(k+1)(k+2)}{2}.$$\n\nThat is the formula at $n=k+1$. The overview already displayed this line; the letter is naming that it *is* the step, not recomputing a new identity.",
      "**E.** → True\n\nPlug in $n=10$: $\\frac{10\\cdot 11}{2}=55$. That is a sanity check on the formula, not a substitute for the inductive step. The value $55$ is what the closed form gives; adding $1$ through $10$ by hand would agree, but the formula is the point.",
    ],
  },
  "math-1-64": {
    tactical_explanations: [
      "**A.** → False\n\n\"For $Q$ to happen, $P$ must happen\" makes $P$ necessary for $Q$, which is $Q\\Rightarrow P$. The original is $P\\Rightarrow Q$. That is the converse, not an equivalent form. Inflation *must* increase for unemployment to decrease is the reverse arrow.",
      "**B.** → True\n\n\"$P$ is sufficient for $Q$\" is $P\\Rightarrow Q$. The original claim is \"if inflation increases, then unemployment decreases,\" the same arrow. Sufficient names the tail of the arrow. Equivalent wording, not a stronger claim.",
      "**C.** → False\n\n\"$Q$ can only decrease if $P$\" is \"$Q$ only if $P$,\" i.e. $Q\\Rightarrow P$. Again the converse. The original does not restrict unemployment decreases to inflation-increase days. \"Only if\" is the phrase most often misread as the original arrow.",
      "**D.** → True\n\nNegate both halves and swap: $\\neg Q\\Rightarrow\\neg P$, \"if unemployment does not decrease, then inflation does not increase.\" That is the contrapositive of $P\\Rightarrow Q$, hence equivalent. It is the one rewriting that always matches.",
      "**E.** → True\n\n\"$Q$ is necessary for $P$\" is $P\\Rightarrow Q$: the arrow points at the necessary condition. Falling unemployment is named as necessary for inflation to increase, which is exactly the original implication. Necessary names the head of the arrow, matching C's dictionary in the overview.",
    ],
  },
  "math-1-65": {
    tactical_explanations: [
      "**A.** → True\n\nPremises: $D\\Rightarrow C$ and $D$ true (Flight 202 delayed). Modus ponens yields $C$. Flight 305 is cancelled today. Rule (1) is loaded and its trigger has fired. No other clue is needed for this one conclusion.",
      "**B.** → True\n\nFrom A, $C$ is true. Premise (2) is $C\\Rightarrow O$. Modus ponens again yields $O$. The ground crew works overtime today. The cancellation just established becomes the trigger for rule (2). The cascade is $D\\to C\\to O$.",
      "**C.** → True\n\nClues (1) and (3) mention only $D$ and $C$. From those two you obtain $C$ and then stop: the letter $O$ never appears. Without (2) there is no bridge from cancellation to overtime. Clue (2) is the indispensable bridge.",
      "**D.** → False\n\nIf $D$ is false, rule (1) has a false antecedent and is silent. It does not yield $\\neg C$. Inferring \"no delay, so no cancellation\" is the inverse of (1), which is not equivalent. A crew shortage could still cancel Flight 305. The guarantee claimed here does not exist.",
      "**E.** → False\n\nFrom (3), $D$ is true. Then (1) forces $C$, and (2) forces $O$. Any assignment with $O$ false would have to break (2) once $C$ is true. There is no model of (1), (2), and (3) in which the crew is off duty. The three clues leave no leftover freedom.",
    ],
  },
  "math-1-66": {
    tactical_explanations: [
      "**A.** → True\n\nThe professor asserts $P\\Rightarrow Q$. The unique false row is $P$ true and $Q$ false: studied at least $10$ hours and did not pass. That is $P\\land\\neg Q$, matching the quoted negation. It is a single counterexample, not another if-then rule.",
      "**B.** → False\n\nThe converse is $Q\\Rightarrow P$. Anna: $P$ false (no studying), $Q$ true (pass). Then $Q\\Rightarrow P$ fails, while $P\\Rightarrow Q$ holds because its antecedent is false. A true original does not force a true converse. The professor never said that *only* 10-hour students pass.",
      "**C.** → True\n\nAnna is $P$ false, $Q$ true. The converse \"every passer studied $10$ hours\" is false of her. The original only constrains students with $P$ true, so she is outside its scope. She is a counterexample to the converse and not to the original. Both halves of the statement hold.",
      "**D.** → False\n\nThe inverse is $\\neg P\\Rightarrow\\neg Q$. The contrapositive is $\\neg Q\\Rightarrow\\neg P$. The arrows run opposite ways. Anna makes the inverse false ($\\neg P$ true, $\\neg Q$ false) and leaves the contrapositive untouched (she is not a failure). They are not equivalent; the inverse pairs with the converse.",
      "**E.** → True\n\nFrom a known failure $\\neg Q$, the contrapositive $\\neg Q\\Rightarrow\\neg P$ yields $\\neg P$: the student studied less than $10$ hours. That is modus tollens on the professor's claim. The inference is valid because the contrapositive inherits the original's guarantee.",
    ],
  },
  "math-1-67": {
    tactical_explanations: [
      "**A.** → True\n\nThe clause is $F\\Rightarrow P$: miss the deadline, then a penalty applies. \"$F$ is sufficient for $P$\" is that same arrow. Missing the deadline is enough, on its own, to trigger the fee. Sufficient names the tail of the signed clause, not every other breach.",
      "**B.** → False\n\nThe converse $P\\Rightarrow F$ would make every penalty a proof of lateness. An on-time but faulty job has $F$ false and $P$ true: the original holds, the converse fails. The clause does not guarantee the converse. Contracts fine people for other things.",
      "**C.** → True\n\nSwap and negate: $\\neg P\\Rightarrow\\neg F$, \"no penalty, therefore the contractor did not miss the deadline.\" That is the contrapositive of $F\\Rightarrow P$, so it is guaranteed by the clause. Signing the clause commits you to this rewriting too.",
      "**D.** → False\n\nThe inverse $\\neg F\\Rightarrow\\neg P$ says punctual contractors are never fined. The same on-time faulty job has $\\neg F$ true and $P$ true, so the inverse fails while the original stands. Not guaranteed. The inverse is a promise about *other* breaches that the clause never made.",
      "**E.** → True\n\nThe converse $P\\Rightarrow F$ has contrapositive $\\neg F\\Rightarrow\\neg P$, which is the inverse. Those two always share a truth value. Neither pair is equivalent to the original $F\\Rightarrow P$ in general. The pairing described is a general fact about conditionals, and here the second pair is false together.",
    ],
  },
  "math-1-68": {
    tactical_explanations: [
      "**A.** → False\n\nEligibility is $G\\land(C\\lor W)$. Student M: GPA $3.7$ so $G$ true; credits $50<60$ so $C$ false; no waiver so $W$ false. Then $C\\lor W$ is false, and the conjunction fails. M is not eligible. The GPA sits outside the bracket and cannot fill it.",
      "**B.** → True\n\nStudent N: GPA $3.6$ so $G$ true; credits $45<60$ so $C$ false; waiver granted so $W$ true. Then $C\\lor W$ is true and the conjunction holds. N is eligible despite being $15$ credits short. The waiver exists for exactly that shortfall.",
      "**C.** → True\n\nKeep M's GPA $3.7$ and $50$ credits, and set $W$ true. Then $C\\lor W$ becomes true while $G$ stays true, so $G\\land(C\\lor W)$ turns true. M would become eligible. The waiver is the one thing missing from M's file.",
      "**D.** → False\n\nA waiver fills only the bracket $C\\lor W$. It cannot make $G$ true. A student with GPA $3.0$ and a waiver has $G$ false, so the conjunction is false no matter how $W$ is set. The Dean waives the credit-hour requirement, nothing else. The waiver is never sufficient on its own.",
      "**E.** → False\n\nGPA below $3.5$ makes $G$ false. Credits and waiver live inside the bracket and cannot repair a false outer conjunct. Even $W$ true and $C$ true leave $G\\land(C\\lor W)$ false when $G$ is false. No such eligible student exists. $G$ guards every entrance.",
    ],
  },
  "math-1-69": {
    tactical_explanations: [
      "**A.** → True\n\nPayout is $(M\\lor A)\\land T$. Traveler M: documented medical emergency so $M$ true; purchased $20$ days out, and $20\\ge 14$, so $T$ true. Both hurdles cleared. M is paid. The reason bracket is an or; medical emergency alone fills it.",
      "**B.** → False\n\nTraveler N: airline cancellation so $A$ true, hence $M\\lor A$ true; purchased $5$ days out, so $T$ false. Then $(M\\lor A)\\land T$ is false. N is not paid. An impeccable reason does not repair a late purchase. $T$ sits outside the bracket, joined by AND.",
      "**C.** → True\n\n$T$ sits outside the bracket, joined by AND. If the policy was bought fewer than $14$ days out, $T$ is false and the whole condition is false. The reason for cancellation is never reached. A late purchase blocks every claim, medical or airline.",
      "**D.** → False\n\nEarly purchase makes $T$ true but leaves the reason bracket empty unless $M$ or $A$ holds. A change of mind $30$ days out has $T$ true and $M\\lor A$ false, so no payout. Timing is necessary, not sufficient. One hurdle of two is not a free pass.",
      "**E.** → False\n\nThe claim asks for a payout with $\\neg M$ and $\\neg T$, using only $A$. Even with $A$ true, $\\neg T$ still falsifies the outer AND. Traveler N is this pattern (airline cancel, late purchase) and receives nothing. An accepted reason substitutes for the other reason, never for the purchase date.",
    ],
  },
  "math-1-70": {
    tactical_explanations: [
      "**A.** → True\n\nThe law is $P\\Rightarrow Q$. Its unique failure is $P\\land\\neg Q$: a citizen who is not eligible to vote. The quoted sentence is that failure case, so it is the correct negation. Eligibility, not the act of voting, is the predicate $Q$.",
      "**B.** → True\n\nJohn has $\\neg Q$ (not eligible). The contrapositive $\\neg Q\\Rightarrow\\neg P$ yields $\\neg P$: John is not a citizen. That is modus tollens on the law. The conclusion is validly drawn because the contrapositive inherits the law's truth.",
      "**C.** → False\n\n$Q$ is eligibility, not the act of voting. Maria is a citizen who keeps her eligibility whether or not she registers. She has $P$ true and $Q$ true, which satisfies $P\\Rightarrow Q$. A counterexample would need a citizen barred from voting. Staying home does not flip $Q$.",
      "**D.** → True\n\nA non-citizen long-term resident who may vote has $Q$ true and $P$ false. That is exactly how $Q\\Rightarrow P$ fails. The original law never forbids eligibility for non-citizens, so the converse can be false in such a country. The original only forces eligibility *for citizens*.",
      "**E.** → True\n\nThe inverse $\\neg P\\Rightarrow\\neg Q$ has contrapositive $Q\\Rightarrow P$, the converse. Those two always agree. The long-term resident who may vote makes both false together. In a country with no such residents both could be true together. Shared truth value is the pairing, not a claim that either is true here.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/18_27.json",
  patches
);
console.log("18_27 edited", n);
