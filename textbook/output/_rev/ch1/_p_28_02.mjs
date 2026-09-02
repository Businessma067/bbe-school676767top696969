import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-71": {
    tactical_explanations: [
      "**A.** → False\n\nThe memo's skeleton is: $P\\Rightarrow Q$, $Q$, therefore $P$. That is affirming the consequent. A rival leaving the market can make $Q$ true while $P$ stays false: both premises hold and the conclusion fails. The premise licenses traffic in one direction only, and walking back along the arrow is not allowed. Invalid.",
      "**B.** → False\n\nThe restatement is $P\\Rightarrow Q$, $\\neg P$, therefore $\\neg Q$: the inverse. The same rival-exit story has $\\neg P$ true and $Q$ true, so $\\neg Q$ is false. Still invalid. From \"we did not increase the budget\" the original conditional says nothing about sales. Concluding that sales fell is another walk in the wrong direction.",
      "**C.** → True\n\nNow the premises are $P\\Rightarrow Q$ and $\\neg Q$, concluding $\\neg P$. That is modus tollens, equivalently running the contrapositive $\\neg Q\\Rightarrow\\neg P$. Valid. From \"sales did not rise\" to \"the budget did not rise\" is the one reshuffle that is safe.",
      "**D.** → True\n\nThe memo needs the missing arrow $Q\\Rightarrow P$. Upgrading the premise to $P\\Leftrightarrow Q$ supplies both directions. Then observing $Q$ really does force $P$, and the original conclusion follows. A biconditional is the cheapest honest way to buy the converse alongside the original.",
      "**E.** → True\n\n\"If it rains, the ground gets wet; the ground is wet; therefore it is raining\" is $P\\Rightarrow Q$, $Q$, therefore $P$. Same form as the memo. A sprinkler plays the role of the departing competitor. Same fallacy, different story. Wet ground does not prove rain any more than rising sales prove a bigger marketing budget.",
    ],
  },
  "math-1-72": {
    tactical_explanations: [
      "**A.** → True\n\n$\\sqrt{2}$ is not a ratio of integers, so irrational; $-\\sqrt{2}$ likewise; $\\sqrt{2}+(-\\sqrt{2})=0=\\frac{0}{1}$, which is rational. Two irrational inputs, rational sum: the universal claim fails on this pair. Both numbers qualify as inputs, and the promised property fails on a legitimate pair.",
      "**B.** → True\n\nA $\\forall$ claim dies at the first counterexample. The pair in A is that counterexample, so no further pairs need be checked. One failure shows the statement is not a true universal. A claim carrying the word \"always\" is destroyed by a single failure, and there is nothing left to repair.",
      "**C.** → True\n\nThe target is \"there is no largest prime.\" Its negation is \"there is a largest prime.\" A contradiction proof opens with that negation, names the supposed largest prime $p$, and derives a contradiction. That is the correct first line. Opening with \"there is no largest prime\" would assume the conclusion.",
      "**D.** → False\n\nChecking $x=1$ and $x=2$ proves those two instances only. Let $P(x)$ be $x^{2}<9$: it holds at $1$ and $2$ and fails at $3$. A universal claim needs an argument covering every $x$, not a two-point checklist. Any finite checklist leaves unchecked values that may fail.",
      "**E.** → True\n\nAn $\\exists$ claim asks for one witness. Exhibiting a single $x$ with $P(x)$ true completes the proof. That is the standard existence argument, the mirror image of using one counterexample to kill a $\\forall$ claim. \"There exists\" asks for one witness and nothing more.",
    ],
  },
  "math-1-73": {
    tactical_explanations: [
      "**A.** → True\n\nWrite $P$ for \"is a fish\" and $Q$ for \"lives in water.\" The given rule is $P\\Rightarrow Q$. The dolphin argument runs the other way: it lives in water, therefore it must be a fish, which is $Q\\Rightarrow P$. Plug the dolphin in: $Q$ is true and $P$ is false. An implication with a true \"if\" and a false \"then\" is false, so the converse fails and the argument is invalid.",
      "**B.** → True\n\nThe lizard argument starts from \"does not live in water\" ($\\neg Q$) and concludes \"is not a fish\" ($\\neg P$). That is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which is equivalent to the given rule, so the argument is valid. From \"no water\" to \"no fish\" is the one form logically identical to the biology rule.",
      "**C.** → False\n\nThe snake argument starts from \"not a fish\" ($\\neg P$) and concludes \"does not live in water\" ($\\neg Q$). That is the inverse. A water snake is not a fish and still lives in water: $\\neg P$ true, $Q$ true, so $\\neg Q$ false. The inverse therefore has a true hypothesis and a false conclusion. Inverse reasoning is not guaranteed. The first half of the claim (this is the inverse) is right; the \"always valid\" half is not.",
      "**D.** → True\n\n\"All fish live in water\" is $\\forall x\\,(P(x)\\Rightarrow Q(x))$. Negate by flipping the quantifier and rewriting the implication as its failure case:\n\n$$\\neg\\forall x\\,(P(x)\\Rightarrow Q(x))\\equiv\\exists x\\,(P(x)\\land\\neg Q(x)).$$\n\nIn words: there exists a fish that does not live in water. That is the quoted sentence.",
      "**E.** → False\n\nA counterexample to $\\forall x\\,(P(x)\\Rightarrow Q(x))$ must satisfy $P$ and fail $Q$: some fish that does not live in water. The dolphin is not a fish, so $P$ is already false. It therefore never enters the \"if\" half of the universal claim, and living in water cannot refute \"all fish live in water.\" The dolphin is the reverse of what is needed.",
    ],
  },
  "math-1-74": {
    tactical_explanations: [
      "**A.** → False\n\nThe policy is $P\\Rightarrow Q$. The unique failure row is $P$ true and $Q$ false, that is $P\\land\\neg Q$: paid on time and did *not* get the discount. The offered sentence keeps both halves true ($P\\land Q$). That is the policy being honoured, not denied. The trap is flipping the wrong half of the conjunction, or writing another conditional.",
      "**B.** → False\n\nThe policy $P\\Rightarrow Q$ constrains only punctual payers. It never says the discount arrives *only* through prompt payment. A late payer who still gets a holiday $5\\%$ has $P$ false and $Q$ true. Then $P\\Rightarrow Q$ holds (false antecedent), while the converse $Q\\Rightarrow P$ fails. One such customer separates the two.",
      "**C.** → True\n\nAlex paid on day $45$. Compare with the $30$-day line: $45>30$, so $P$ is false. Alex did not receive the discount, so $Q$ is false. An implication $P\\Rightarrow Q$ is true whenever $P$ is false, whatever $Q$ does. Alex therefore sits outside the policy's promise and cannot serve as a counterexample. A counterexample would need $P$ true and $Q$ false.",
      "**D.** → False\n\nThe inverse is $\\neg P\\Rightarrow\\neg Q$: pay late and you get nothing. The policy never speaks about late payers. A holiday promotion can still give a late payer the $5\\%$, making $\\neg P$ true and $Q$ true, so the inverse fails while the policy stands. The inverse forbids discounts to late payers, which the store is free to hand out anyway.",
      "**E.** → False\n\nThis statement denies the single rewriting that *is* guaranteed. \"No discount, therefore the payment was late\" is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which always carries the same truth value as the policy. Claiming that \"only the original itself\" is guaranteed is exactly wrong: the contrapositive is locked to it. The contrapositive does hold, so the statement is mistaken.",
    ],
  },
  "math-1-75": {
    tactical_explanations: [
      "**A.** → False\n\nThe regulation is $P\\Rightarrow Q$: revenue above $\\$1$ million forces an audit. Its negation is the single failure row $P\\land\\neg Q$: some company with revenue above $\\$1$ million that did not file. The quoted sentence is $P\\Rightarrow\\neg Q$, a rival rule about *every* large company. That is a different (and stronger) claim, not $\\neg(P\\Rightarrow Q)$. A rival \"if... then not...\" rule is the classic wrong shape.",
      "**B.** → False\n\nThe converse claims that filing an audit forces revenue above $\\$1$ million. Take a firm with $\\$300{,}000$ of revenue that files voluntarily: $P$ false, $Q$ true. Then $Q\\Rightarrow P$ fails, while the original $P\\Rightarrow Q$ is idle because the revenue gate never opened. The regulation does not lock the converse. Only large firms file is a claim the regulation never made.",
      "**C.** → False\n\nThe inverse is $\\neg P\\Rightarrow\\neg Q$: revenue at most $\\$1$ million, therefore no audit. The same voluntary filer has $\\neg P$ true and $\\neg Q$ false. True hypothesis, false conclusion: the inverse fails. Equivalence would require matching truth values in every scenario; this one split already separates them. The inverse tells small companies not to file, which the regulation never said.",
      "**D.** → True\n\nSwap and negate: \"no audit, therefore revenue does not exceed $\\$1$ million.\" That sentence is $\\neg Q\\Rightarrow\\neg P$, the contrapositive, so it is equivalent to the regulation and must hold with it. This is the one rewriting that inherits the regulation's truth.",
      "**E.** → True\n\nCompany X has revenue $\\$2$ million. Compare with the threshold: $2>1$, so $P$ is true. X did not file an audit, so $Q$ is false. That is exactly $P\\land\\neg Q$, the unique failure of $P\\Rightarrow Q$. One such company is enough to prove the regulation false. Revenue $\\$2$ million with no audit is the shape the negation calls for.",
    ],
  },
  "math-1-76": {
    tactical_explanations: [
      "**A.** → False\n\nThe license rule is $H\\land W\\land T$. Pilot A's file: $300\\ge 250$ so $H$ is true; written exam passed so $W$ is true; practical test failed so $T$ is false. Then $H\\land W\\land T=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$. One failed conjunct denies the license. $300$ hours notwithstanding, A is not licensed.",
      "**B.** → False\n\nPilot B has $240$ hours ($H$ false) but passed both exams. Hours are necessary: $240<250$ already kills the conjunction, so B is not licensed. Both exams cannot repair a shortfall of $10$ hours. The hours gate is not optional.",
      "**C.** → False\n\nNecessary means: no license unless $H$ holds. Sufficient would mean: $H$ alone forces a license, regardless of $W$ and $T$. Pilot A has $H$ true ($300\\ge 250$) and still fails because $T$ is false. Hours by themselves never grant the license. Hours are one requirement of three.",
      "**D.** → True\n\nThe grant condition is the conjunction $H\\land W\\land T$. If the practical test fails, $T$ is false, and a false conjunct makes the whole conjunction false even when $H$ and $W$ both hold. Pilot A is that row: $300$ hours, written passed, practical failed, unlicensed. Failing the practical test is an absolute bar.",
      "**E.** → True\n\nThe claim is existential: some pilot with more than $250$ hours is still unlicensed. Pilot A's file is the witness: $300$ hours, written passed, practical failed. $H$ is true and $T$ is false, so $H\\land W\\land T$ fails. That one file proves such a pilot exists. The overview's table already has this row.",
    ],
  },
  "math-1-77": {
    tactical_explanations: [
      "**A.** → False\n\nThe reasoning stops one step too early. The $650$ score does fail $S$, but $C$ is true, and an OR needs only one true part; with the $35\\%$ ratio also satisfied, P is approved. Explicitly: $S$ false, $C$ true, $D$ true ($35\\%<40\\%$), so $(S\\lor C)\\land D$ holds. The claim that credit score alone blocks P ignores the OR in the bracket.",
      "**B.** → False\n\nQ's file: credit score $720$, so $S$ holds; no co-signer, so $C$ is false; debt-to-income $45\\%$, so $D$ is false. The rule is $(S\\lor C)\\land D$. The bracket is true ($S$ alone fills it), but the outer AND still needs $D$: $\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$. Q is not approved. The excellent score cannot buy off the ratio.",
      "**C.** → False\n\nA score of at least $700$ makes $S$ true, which fills $S\\lor C$. Approval still requires the outer conjunct $D$: ratio below $40\\%$. Applicant Q is the check: $720\\ge 700$ but $45\\%\\ge 40\\%$. The score cannot override a failed ratio, so \"always approved regardless of DTI\" is false. A good score fills the bracket and does nothing else.",
      "**D.** → True\n\nThe approval formula is $(S\\lor C)\\land D$. If the ratio is $40\\%$ or above, $D$ is false, and $(S\\lor C)\\land\\mathrm{F}=\\mathrm{F}$ no matter whether $S$ or $C$ holds. A $720$ score or a co-signer can fill the bracket and still leave the outer AND false. A ratio of $40\\%$ or above is an absolute bar.",
      "**E.** → True\n\nApplicant P is the witness: score $650<700$ so $S$ is false; a qualified co-signer so $C$ is true; ratio $35\\%<40\\%$ so $D$ is true. Then $(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$. A score below $700$ is allowed whenever the co-signer fills the OR and the ratio clears $40\\%$. A weak score is survivable when the bracket is filled another way.",
    ],
  },
  "math-1-78": {
    tactical_explanations: [
      "**A.** → True\n\nThe converse is $Q\\Rightarrow P$: every loyalty-point diner ordered dessert. Sam received a point ($Q$ true) as a birthday promotion and did not order dessert ($P$ false). True \"if\", false \"then\": $Q\\Rightarrow P$ fails on Sam. That is the unique failure row of the converse. He is the ideal refutation.",
      "**B.** → True\n\nThe target is \"not every point-earning diner ordered dessert.\" Its opposite is \"every diner who received a point ordered dessert,\" which is $Q\\Rightarrow P$. Assume that opposite. Sam received a point without ordering dessert, so the assumption is false. That is a correctly opened proof by contradiction, with Sam as the colliding case.",
      "**C.** → False\n\nThe original policy is $P\\Rightarrow Q$: order dessert, get a point. It fails only on dessert with no point. Sam skipped dessert and still got a birthday point: $\\neg P\\land Q$. The policy never promised anything about diners who skip dessert, so Sam does not touch $P\\Rightarrow Q$. To kill $P\\Rightarrow Q$ you need $P\\land\\neg Q$; Sam offers the opposite pair.",
      "**D.** → True\n\nNegating $P\\Rightarrow Q$ produces $P\\land\\neg Q$: a diner who ordered dessert and did not receive a point. Sam's coordinates are the opposite pair (no dessert, got a point). Finding Sam therefore cannot be the correctly formed negation of the policy. The diner who would negate the policy differs from Sam in both coordinates.",
      "**E.** → True\n\nThe inverse says: skip dessert, therefore receive no point. Sam skipped dessert ($\\neg P$ true) and still received a birthday point ($\\neg Q$ false). True hypothesis, false conclusion: the inverse is false, and Sam is the witness. The inverse promises no point to anyone skipping dessert, and Sam walked out with one.",
    ],
  },
  "math-1-79": {
    tactical_explanations: [
      "**A.** → True\n\nThe inner claim at $m=4$ asks for a positive integer $n$ with $4n=100$. Dividing gives $n=25$, and $25$ is a positive integer. Check: $4\\cdot 25=100$. The inner existential is satisfied at $m=4$. $4$ divides $100$, which is what that $n$ needs.",
      "**B.** → False\n\nFix $m=3$. The inner claim asks for a positive integer $n$ with $3n=100$. Solving gives $n=\\frac{100}{3}$, which is not an integer. No other $n$ can satisfy a linear equation with a unique root, so $m=3$ has no partner. $\\frac{100}{3}$ is not a whole number, and the equation offers no second candidate.",
      "**C.** → False\n\nThe overall claim is $\\forall m\\,\\exists n:\\,mn=100$: every positive integer $m$ must have some positive integer partner $n$. At $m=3$ that partner would have to be $\\frac{100}{3}$, which is not an integer. One failing $m$ is enough, so the \"for every $m$\" sentence is false. \"For every\" admits no exceptions.",
      "**D.** → True\n\nPushing a negation through nested quantifiers flips each one and negates the core: $\\forall$ becomes $\\exists$, $\\exists$ becomes $\\forall$, and $mn=100$ becomes $mn\\ne 100$. The witness $m=3$ works: for every positive integer $n$, $3n\\ne 100$. The sentence given is the correct negation, and $m=3$ is the witness it promises.",
      "**E.** → True\n\nWith the quantifiers reversed, a single $n$ must work for every $m$ at once: $m=1$ demands $n=100$ and $m=2$ demands $n=50$. No number is both. The original allowed $n$ to depend on $m$; the reversal freezes one $n$ for all $m$. The reversed statement is false. Same symbols, opposite strength.",
    ],
  },
  "math-1-80": {
    tactical_explanations: [
      "**A.** → True\n\nClue (3) is the atomic sentence \"Dan is guilty,\" not an implication. No other clue is needed to read that sentence. Combined with \"exactly one of Ann, Ben, Cara, Dan is guilty,\" Dan occupies the unique guilty slot. Statement A asks only about Dan, which clue (3) already settles.",
      "**B.** → False\n\nThe setup says exactly one of the four is guilty. Clue (3) names Dan as guilty. Uniqueness then clears Ann, Ben, and Cara. Ann is therefore innocent. The claim that Ann is guilty contradicts both clue (3) and the \"exactly one\" constraint. The guilty slot holds one person and Dan occupies it.",
      "**C.** → False\n\nCara's innocence is forced without opening clue (2). Clue (3) makes Dan guilty; \"exactly one guilty\" then makes Cara innocent. Clue (2) says: if Ben is innocent, then Cara is innocent. After uniqueness, Ben is already innocent, so clue (2) holds, but it is not the step that established Cara's innocence. Dropping clue (2) leaves Cara still innocent.",
      "**D.** → True\n\nWith Ann innocent, clue (1) has a false \"if\" part, so it is automatically satisfied and produces nothing. Its contrapositive $D\\Rightarrow\\neg A$ could in principle have cleared Ann, but the counting had already done that job. A conditional with a false antecedent yields no new fact about anyone. Clue (1) adds no information in this puzzle.",
      "**E.** → True\n\nClue (3) asserts Dan's guilt with no \"if.\" Even if the \"exactly one guilty\" constraint were dropped, clue (3) would still say Dan is guilty. Uniqueness is used only to clear Ann, Ben, and Cara. Dan's guilt does not depend on it. Clue (3) is a flat assertion rather than a conditional, so it needs no supporting premises.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/28_02.json",
  patches
);
console.log("28_02 edited", n);
