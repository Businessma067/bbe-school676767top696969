import { apply } from "./_patch_batch.mjs";

apply(new URL("./28_02.json", import.meta.url), {
  "math-1-71": {
    solution_overview: `Strip the memo down to its skeleton, with $P$ = "we increased the marketing budget" and $Q$ = "sales increased":

premise $P\\Rightarrow Q$; premise $Q$; conclusion $P$.

That is affirming the consequent. The premise licenses traffic in one direction only, and walking back along the arrow is not allowed. Concretely: a competitor may have left the market, lifting sales while the budget never moved. No premise is violated, yet the conclusion is false, which is exactly what "invalid" means.

From $\\neg P$ (no extra budget) to $\\neg Q$ (no sales growth) is the inverse, the same mistake in a different hat, and the departing competitor refutes it too.

From $\\neg Q$ (sales did not rise) to $\\neg P$ (the budget did not rise) is modus tollens, and it is valid, because it merely runs the contrapositive $\\neg Q\\Rightarrow\\neg P$ forwards.

What the memo helps itself to is the missing direction $Q\\Rightarrow P$. The cheapest honest repair is to upgrade the premise to a biconditional $P\\Leftrightarrow Q$, which contains both arrows at once.`,
    tactical_explanations: [
      `**A.** → False

That is the original memo: $Q$ observed, $P$ concluded. Affirming the consequent is invalid, and the rival-exit story already shows why.`,
      `**B.** → False

The restatement is the inverse $\\neg P\\Rightarrow\\neg Q$. The original conditional is silent once the budget is *not* increased; the same rival-exit story has sales up anyway.`,
      `**C.** → True

Premises $P\\Rightarrow Q$ and $\\neg Q$, conclusion $\\neg P$: modus tollens, the contrapose run forwards.`,
      `**D.** → True

A biconditional $P\\Leftrightarrow Q$ adds the missing arrow $Q\\Rightarrow P$. With both directions present, observing $Q$ really does force $P$.`,
      `**E.** → True

Wet ground plus the rain rule, concluding rain: $P\\Rightarrow Q$ and $Q$, therefore $P$. Same skeleton as the memo, with a sprinkler playing the departing competitor.`,
    ],
  },
  "math-1-72": {
    solution_overview: `Two lopsided facts drive this whole task: one example can destroy a "for all" claim but can never establish one, while for a "there exists" claim a single example is the entire job.

| Claim | To prove it | To disprove it |
| --- | --- | --- |
| $\\forall x\\, P(x)$ | an argument covering every $x$ | one counterexample |
| $\\exists x\\, P(x)$ | one witness | an argument covering every $x$ |

"The sum of two irrational numbers is always irrational" is a $\\forall$ claim, so one bad pair finishes it. Take $\\sqrt{2}$ and $-\\sqrt{2}$: both are irrational, and

$$\\sqrt{2}+(-\\sqrt{2})=0,$$

which is rational, since $0=\\tfrac{0}{1}$. The word "always" cannot survive that.

A proof by contradiction always opens with the negation of the target. The target "there is no largest prime" is negated by "there is a largest prime, call it $p$", so that is the first line; the proof then manufactures a prime larger than $p$ and the assumption collapses.`,
    tactical_explanations: [
      `**A.** → True

Both inputs are irrational and the sum $0=\\tfrac{0}{1}$ is rational. That pair is a genuine counterexample.`,
      `**B.** → True

A $\\forall$ claim dies at the first failure. The pair in A is that failure; no further pairs need be checked.`,
      `**C.** → True

Contradiction proofs open with the negation of the target. The negation of "there is no largest prime" is "there is one, call it $p$." That is the correct first line.`,
      `**D.** → False

Checking $x=1$ and $x=2$ proves those two instances only. Let $P(x)$ be $x^2<9$: it holds at $1$ and $2$ and fails at $3$. A universal claim needs an argument covering every $x$, not a two-point checklist.`,
      `**E.** → True

An $\\exists$ claim asks for one witness. Exhibiting a single $x$ with $P(x)$ true completes the proof. That is the standard existence argument, the mirror image of using one counterexample to kill a $\\forall$ claim.`,
    ],
  },
  "math-1-73": {
    solution_overview: `Write $P$ for "is a fish" and $Q$ for "lives in water." The biology rule is $P\\Rightarrow Q$. Each animal below tests a different way of using it.

The dolphin argument, "it lives in water, so it must be a fish," argues from $Q$ back to $P$. That is the converse. The dolphin refutes it in person: it lives in water and is a mammal, not a fish.

The lizard argument, "it does not live in water, so it is not a fish," argues from $\\neg Q$ to $\\neg P$. That is the contrapositive, the one form logically equivalent to the rule.

The snake argument, "it is not a fish, so it does not live in water," argues from $\\neg P$ to $\\neg Q$, the inverse. Water snakes exist, so this pattern is unreliable.

"All fish live in water" is $\\forall x\\,(P(x)\\Rightarrow Q(x))$, and its negation is

$$\\exists x\\,(P(x)\\land\\neg Q(x)),$$

a fish that does not live in water. That is the shape any counterexample must have, which is why the dolphin ( $P$ false, $Q$ true) cannot serve as one.`,
    tactical_explanations: [
      `**A.** → True

Arguing from water back to fish is the converse $Q\\Rightarrow P$. The dolphin already refutes that pattern: water, not a fish.`,
      `**B.** → True

From "no water" to "no fish" is $\\neg Q\\Rightarrow\\neg P$, the contrapose of the biology rule. Equivalent, so the lizard argument is valid.`,
      `**C.** → False

The snake argument is the inverse, but inverse reasoning is not guaranteed. A water snake is no fish and still lives in water: $\\neg P$ true, $\\neg Q$ false.`,
      `**D.** → True

The quoted sentence is the existential already recovered: a fish that does not live in water. That is $\\exists x\\,(P(x)\\land\\neg Q(x))$.`,
      `**E.** → False

A counterexample must be a fish out of water ($P$ true, $Q$ false). The dolphin is the reverse pair, not a fish, so it never touches "all fish live in water."`,
    ],
  },
  "math-1-74": {
    solution_overview: `$P$ = "the customer pays within $30$ days", $Q$ = "the customer gets the $5\\%$ discount", and the policy is $P\\Rightarrow Q$.

To deny a promise you keep its condition and destroy its result:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q.$$

A customer who paid on time *and* received the discount is the policy being honoured, not broken; that sentence is $P\\land Q$.

Alex paid on day $45$ and received nothing, so $P$ is false and $Q$ is false. The policy makes promises only about punctual payers, so Alex falls outside it entirely: no violation, and no counterexample.

Only the contrapositive $\\neg Q\\Rightarrow\\neg P$, "no discount, therefore the payment was late", is guaranteed. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ both assume the discount can arrive only through punctuality. A holiday promotion handing $5\\%$ to a late payer breaks both while leaving the policy untouched.`,
    tactical_explanations: [
      `**A.** → False

The offered sentence is $P\\land Q$: paid on time *and* received the discount. That is the policy working, not $\\neg(P\\Rightarrow Q)$, which needs $P\\land\\neg Q$.`,
      `**B.** → False

The converse would mean the discount arrives only through prompt payment. A holiday $5\\%$ for a late payer has $P$ false and $Q$ true, so $Q\\Rightarrow P$ fails while the policy stands.`,
      `**C.** → True

Alex is $P$ false, $Q$ false: paid on day $45$, no discount. The policy is idle on late payers, so he is consistent with it and is not a counterexample.`,
      `**D.** → False

The inverse forbids discounts to late payers. The same holiday promotion gives a late payer $5\\%$, so $\\neg P$ true and $Q$ true: the inverse fails.`,
      `**E.** → False

The claim says the contrapose is *not* guaranteed. That is the one rewriting that *is* locked to the policy: $\\neg Q\\Rightarrow\\neg P$ always matches $P\\Rightarrow Q$.`,
    ],
  },
  "math-1-75": {
    solution_overview: `$P$ = "a company's annual revenue exceeds \\$1 million", $Q$ = "the company files an annual audit". The regulation is $P\\Rightarrow Q$.

A regulation is overturned by a single offender, so

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q,$$

that is, *some* company with revenue above \\$1 million filed no audit. The sentence "if revenue exceeds \\$1 million, then no audit is filed" is a rival regulation binding *every* large company; that is a far stronger claim, and not the negation at all.

Nothing forbids a firm with \\$300,000 of revenue from filing voluntarily, giving $Q$ true with $P$ false. That case is fatal to the converse $Q\\Rightarrow P$ and equally fatal to the inverse $\\neg P\\Rightarrow\\neg Q$, while the regulation itself is untouched.

Company X, at \\$2 million with no audit, has $P$ true and $Q$ false, precisely the shape the negation calls for. Meanwhile the contrapositive $\\neg Q\\Rightarrow\\neg P$ is the only rewriting that inherits the regulation's truth.`,
    tactical_explanations: [
      `**A.** → False

The quoted sentence is another regulation, $P\\Rightarrow\\neg Q$, binding every large company. The negation is far more modest: one offender, $P\\land\\neg Q$.`,
      `**B.** → False

Take a firm with \\$300,000 of revenue that files voluntarily: $P$ false, $Q$ true. Then $Q\\Rightarrow P$ fails, while the original $P\\Rightarrow Q$ is idle because the revenue gate never opened.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: revenue at most \\$1 million, therefore no audit. The same voluntary filer has $\\neg P$ true (revenue \\$300,000) and $\\neg Q$ false (an audit was filed). True hypothesis, false conclusion: the inverse fails, so it is not equivalent to the original.`,
      `**D.** → True

Swap and negate: "no audit, therefore revenue does not exceed \\$1 million." That sentence is $\\neg Q\\Rightarrow\\neg P$, the contrapositive, so it is equivalent to the regulation and must hold with it.`,
      `**E.** → True

Company X has revenue \\$2 million. Compare with the threshold: $2>1$, so $P$ is true. X did not file an audit, so $Q$ is false. That is exactly $P\\land\\neg Q$, the unique failure of $P\\Rightarrow Q$.`,
    ],
  },
  "math-1-76": {
    solution_overview: `"If and only if" fixes the requirements exactly: flight hours, written exam, and practical test, all three joined by *and*.

$$\\text{Licensed}\\Leftrightarrow H\\land W\\land T.$$

In a conjunction every part is necessary and no part is sufficient on its own: a single failure anywhere sinks the application.

| Pilot | $H$ (250+ hours) | $W$ (written exam) | $T$ (practical test) | Licensed? |
| --- | --- | --- | --- | --- |
| A, $300$ hours | true | true | false | no |
| B, $240$ hours | false | true | true | no |

Both applicants fail, for opposite reasons. Pilot A is worth keeping in view: a pilot well past $250$ hours who still walks away without a license.`,
    tactical_explanations: [
      `**A.** → False

Pilot A's file: $300\\ge 250$ so $H$ is true; written exam passed so $W$ is true; practical test failed so $T$ is false. Then $H\\land W\\land T=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$. One failed conjunct denies the license.`,
      `**B.** → False

Pilot B has $240$ hours ($H$ false) but passed both exams. Hours are necessary: $240<250$ already kills the conjunction.`,
      `**C.** → False

Necessary means: no license unless $H$ holds. Sufficient would mean: $H$ alone forces a license, regardless of $W$ and $T$. Pilot A has $H$ true ($300\\ge 250$) and still fails because $T$ is false.`,
      `**D.** → True

If the practical test fails, $T$ is false, and a false conjunct makes the whole conjunction false even when $H$ and $W$ both hold. Pilot A is that row: $300$ hours, written passed, practical failed, unlicensed.`,
      `**E.** → True

The claim is existential: some pilot with more than $250$ hours is still unlicensed. Pilot A's file is the witness: $300$ hours, written passed, practical failed.`,
    ],
  },
  "math-1-77": {
    solution_overview: `The approval rule mixes both connectives, and the bracket is where the meaning lives:

$$\\text{Approved}\\Leftrightarrow(S\\lor C)\\land D$$

with $S$ = credit score at least $700$, $C$ = a qualified co-signer, $D$ = debt-to-income ratio below $40\\%$.

Inside the bracket, score and co-signer are alternatives; an *or* is satisfied by either one, so a weak score is not fatal when a co-signer is present. Outside the bracket, $D$ is chained on with *and*, which turns the debt ratio into an absolute requirement that nothing can offset.

Applicant P: score $650$, so $S$ is false, but the co-signer makes $C$ true and the bracket holds; the $35\\%$ ratio makes $D$ true. Both parts hold, so P is approved.

Applicant Q: score $720$, so the bracket holds easily; the $45\\%$ ratio makes $D$ false. The excellent score cannot buy off the ratio, so Q is denied.`,
    tactical_explanations: [
      `**A.** → False

The reasoning stops one step too early. The $650$ score does fail $S$, but $C$ is true, and an OR needs only one true part. With the $35\\%$ ratio also satisfied, $(S\\lor C)\\land D$ holds, so P *is* approved.`,
      `**B.** → False

Q's file: $720\\ge 700$ so $S$ holds; no co-signer so $C$ is false; $45\\%\\ge 40\\%$ so $D$ is false. The bracket is true ($S$ alone fills it), but the outer AND still needs $D$:

$$(\\mathrm{T}\\lor\\mathrm{F})\\land\\mathrm{F}=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}.$$`,
      `**C.** → False

A score of at least $700$ fills $S\\lor C$. Approval still requires $D$: ratio below $40\\%$. Applicant Q is the check: $720\\ge 700$ but $45\\%\\ge 40\\%$. The score cannot override a failed ratio.`,
      `**D.** → True

If the ratio is $40\\%$ or above, $D$ is false, and

$$(S\\lor C)\\land\\mathrm{F}=\\mathrm{F}$$

no matter whether $S$ or $C$ holds. A $720$ score or a co-signer can fill the bracket and still leave the outer AND false.`,
      `**E.** → True

Applicant P is the witness: score $650<700$ so $S$ is false; a qualified co-signer so $C$ is true; ratio $35\\%<40\\%$ so $D$ is true. Then $(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$.`,
    ],
  },
  "math-1-78": {
    solution_overview: `$P$ = "the diner orders dessert", $Q$ = "the diner receives a loyalty point", and the policy is $P\\Rightarrow Q$. Sam's birthday point gives him $P$ false, $Q$ true.

To refute a conditional you need its "if" half true and its "then" half false. For the converse $Q\\Rightarrow P$ ("every point-earner ordered dessert") that means a point without dessert, Sam exactly. For the inverse $\\neg P\\Rightarrow\\neg Q$ ("no dessert, no point") it means no dessert but a point anyway, Sam again. For the original policy it would mean dessert with no point, $P\\land\\neg Q$, which is not Sam at all; the restaurant's promise therefore stands.

The contradiction argument mentioned in the statements is the same observation in formal dress: to prove "not every point-earning diner ordered dessert", assume the opposite (the converse $Q\\Rightarrow P$), then produce Sam and watch the assumption die.`,
    tactical_explanations: [
      `**A.** → True

The converse says every point-earner ordered dessert. Sam's shape is $P$ false, $Q$ true, which is exactly how $Q\\Rightarrow P$ fails.`,
      `**B.** → True

The target is "not every point-earning diner ordered dessert." Its opposite is "every diner who received a point ordered dessert," which is $Q\\Rightarrow P$. Assume that opposite. Sam received a point without ordering dessert, so the assumption is false. That is a correctly opened proof by contradiction.`,
      `**C.** → False

The original policy fails only on dessert with no point. Sam skipped dessert and still got a birthday point: $\\neg P\\land Q$. The policy never promised anything about diners who skip dessert, so Sam does not touch $P\\Rightarrow Q$.`,
      `**D.** → True

Negating $P\\Rightarrow Q$ produces $P\\land\\neg Q$: a diner who ordered dessert and did not receive a point. Sam's coordinates are the opposite pair (no dessert, got a point). Finding Sam therefore cannot be the correctly formed negation of the policy.`,
      `**E.** → True

The inverse says: skip dessert, therefore receive no point. Sam skipped dessert ($\\neg P$ true) and still received a birthday point ($\\neg Q$ false). True hypothesis, false conclusion: the inverse is false.`,
    ],
  },
  "math-1-79": {
    solution_overview: `The statement is $\\forall m\\,\\exists n:\\, m\\cdot n=100$, and the order matters: first someone hands you $m$, then you go hunting for a matching $n$. So the choice of $n$ is allowed to depend on $m$.

For a given $m$ the equation forces $n=\\frac{100}{m}$, and that is a legal answer only when $m$ divides $100$.

$m=4$: $n=25$, a positive integer, and $4\\cdot 25=100$. Fine.

$m=3$: $n=\\frac{100}{3}=33.\\overline{3}$, not an integer, and no other value can rescue it, since the equation has just one solution. So $m=3$ has no partner, and one failure is enough to sink a "for every" claim: the overall statement is false.

Negating it flips each quantifier and negates the equation:

$$\\neg\\big(\\forall m\\,\\exists n:\\, mn=100\\big)\\equiv\\exists m\\,\\forall n:\\, mn\\ne 100,$$

and $m=3$ is a ready-made witness for that.

Swapping the quantifiers produces a much bolder claim, $\\exists n\\,\\forall m:\\, mn=100$: one fixed $n$ serving every $m$ at once. Since $m=1$ demands $n=100$ while $m=2$ demands $n=50$, no such $n$ exists, so the reversed statement is false as well.`,
    tactical_explanations: [
      `**A.** → True

At $m=4$ the inner claim asks for a positive integer $n$ with $4n=100$. Dividing gives $n=25$, and $4\\cdot 25=100$.`,
      `**B.** → False

Fix $m=3$. Solving $3n=100$ gives

$$n=\\frac{100}{3}=33.\\overline{3},$$

which is not an integer. A linear equation has only that one root, so no positive integer $n$ pairs with $m=3$.`,
      `**C.** → False

The overall claim is that every positive integer $m$ has some positive integer partner $n$. At $m=3$ that partner would have to be $\\frac{100}{3}$, which is not an integer. One failing $m$ is enough.`,
      `**D.** → True

Pushing a negation through nested quantifiers flips each one and negates the core: $\\forall$ becomes $\\exists$, $\\exists$ becomes $\\forall$, and $mn=100$ becomes $mn\\ne 100$. The witness $m=3$ works: for every positive integer $n$, $3n\\ne 100$.`,
      `**E.** → True

With the quantifiers reversed, a single $n$ must work for every $m$ at once: $m=1$ demands $n=100$ and $m=2$ demands $n=50$. No number is both. The original allowed $n$ to depend on $m$; the reversal freezes one $n$ for all $m$.`,
    ],
  },
  "math-1-80": {
    solution_overview: `Four suspects, exactly one guilty, and one clue that simply hands the answer over.

Clue (3) is not a conditional at all. It is a plain assertion: Dan is guilty. Combine it with "exactly one of the four is guilty" and the whole picture is fixed before the if-then clues are even read.

| Suspect | Verdict | Where it comes from |
| --- | --- | --- |
| Dan | guilty | clue (3), stated outright |
| Ann | innocent | only one can be guilty, and Dan holds that place |
| Ben | innocent | same reason |
| Cara | innocent | same reason |

Check the conditionals against those verdicts. Clue (1), $A\\Rightarrow\\neg D$, has a false "if" part, so it is automatically satisfied and yields nothing new. Clue (2), $\\neg B\\Rightarrow\\neg C$, only re-confirms Cara's innocence, which the counting had already given. Clue (4), $C\\Rightarrow A$, is likewise vacuous with $C$ false. All three are consistent with the solution, and all three are redundant here.`,
    tactical_explanations: [
      `**A.** → True

Clue (3) is the atomic sentence "Dan is guilty," not an implication. Statement A asks only about Dan, which that sentence already settles.`,
      `**B.** → False

The setup says exactly one of the four is guilty. Clue (3) names Dan as guilty. Uniqueness then clears Ann, Ben, and Cara. Ann is therefore innocent.`,
      `**C.** → False

Cara's innocence is forced without opening clue (2). Clue (3) makes Dan guilty; "exactly one guilty" then makes Cara innocent. Clue (2) holds afterwards (Ben is already innocent), but it is not the step that established Cara's innocence. Dropping clue (2) leaves Cara still innocent.`,
      `**D.** → True

With Ann innocent, clue (1) has a false "if" part, so it is automatically satisfied and produces nothing. A conditional with a false antecedent yields no new fact about anyone.`,
      `**E.** → True

Clue (3) asserts Dan's guilt with no "if." Even if the "exactly one guilty" constraint were dropped, clue (3) would still say Dan is guilty. Uniqueness is used only to clear Ann, Ben, and Cara.`,
    ],
  },
});
