import { patchFile } from "../_apply_1318.mjs";

patchFile("ch1/03_12.json", {
  "math-1-81": {
    solution_overview: `Every islander is either a truth-teller, whose every sentence is true, or a liar, whose every sentence is false. Write $x$ for "X is a truth-teller" and $y$ for "Y is a truth-teller".

X's sentence claims $\\neg y$. Y's sentence claims $\\neg x\\land\\neg y$. Each type assignment must make a truth-teller's sentence true and a liar's sentence false.`,
    tactical_explanations: [
      `**A.** → True

Suppose X is a liar. Then X's sentence "$Y$ always lies" is false, so Y is a truth-teller. A truth-teller's sentence must be true, so $\\neg x\\land\\neg y$ holds, which requires $\\neg y$ and makes Y a liar. Y cannot be both. The liar-X case is impossible, so X is a truth-teller.

so the statement is True.`,
      `**B.** → False

Suppose Y is a truth-teller. Then Y's sentence is true: both X and Y are liars. That requires Y to be a liar, contradicting the opening assumption. So Y is not a truth-teller.

so the statement is False.`,
      `**C.** → True

Y said that X and Y are both liars. If that sentence were true, Y would be a liar, so the sentence would be false. A sentence cannot be true and false, so Y's statement is false.

so the statement is True.`,
      `**D.** → False

Two types for X can be tested. X a liar forces Y to be both a truth-teller and a liar: contradiction. X a truth-teller forces Y to be a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. One surviving assignment is not two.

so the statement is False.`,
      `**E.** → True

A lying X makes "Y always lies" false, so Y would have to be truthful; but a truthful Y's sentence demands that Y be a liar. The two demands on Y cannot both hold, so the opening assumption that X lies must be rejected.

so the statement is True.`,
    ],
  },
  "math-1-82": {
    solution_overview: `Write $G(s,e)$ for "student $s$ scored above $90$ on exam $e$". Statement 1 picks the student first:

$$S_1:\\ \\exists s\\,\\forall e\\; G(s,e)$$

Statement 2 names the exam first, so the student is allowed to change:

$$S_2:\\ \\forall e\\,\\exists s\\; G(s,e)$$

In $S_1$ one student must survive every exam. In $S_2$ a different student may cover each exam.`,
    tactical_explanations: [
      `**A.** → True

Statement 1 is $\\exists s\\,\\forall e\\, G(s,e)$. Fix that student $s_0$, then pick an arbitrary exam $e$: $G(s_0,e)$ holds, so $\\forall e\\,\\exists s\\, G(s,e)$ follows at once. Hand that same student to whichever exam you are asked about.

so the statement is True.`,
      `**B.** → False

Two exams, two students: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 is true, yet nobody clears both exams, so Statement 1 fails. A single such class is enough. The reverse arrow does not hold.

so the statement is False.`,
      `**C.** → False

Equivalence needs both arrows. Statement 1 implies Statement 2, but a two-student class with a different top scorer on each exam sends Statement 2 true and Statement 1 false, so the arrow back is missing. Same predicates, different quantifier order.

so the statement is False.`,
      `**D.** → True

"Each exam has a high scorer, but the high scorer keeps changing" is exactly that split: Statement 2 can be true while Statement 1 is false. One class with a rotating top scorer is a witness.

so the statement is True.`,
      `**E.** → True

Restrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ and the inner existential in Statement 2 both collapse to $G(s,e_1)$. With a single exam there is nothing for the two quantifiers to disagree about: both statements shrink to $\\exists s\\; G(s,e_1)$.

so the statement is True.`,
    ],
  },
  "math-1-83": {
    solution_overview: `The committee rule has two independent gates, and a candidate is approved the moment one of them opens. Let $Y$ be the number of yes-votes.

Gate 1: $Y\\ge 3$. Only the count matters; names are ignored.

Gate 2: $Y=2$ and R1 is one of the two. Here the name matters.

R1's special power lives only in the two-vote rows. With three yes-votes the count alone decides.`,
    tactical_explanations: [
      `**A.** → True

The given votes are R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 asks $Y\\ge 3$: $2\\ge 3$ fails. Gate 2 asks whether $Y=2$ and R1 is among the yes-votes: both hold, so gate 2 opens. The candidate is approved.

so the statement is True.`,
      `**B.** → False

The tie-breaking power is written for R1 by name, not for any two reviewers. With yes-votes from R2 and R3 the count is still $2$, so gate 1 stays shut, and R1 voted no, so gate 2 stays shut. Same $Y=2$ as the given candidate, but R1's absence flips the outcome.

so the statement is False.`,
      `**C.** → True

Gate 1 is $Y\\ge 3$, and names are ignored there. Any three yes-votes give $Y=3$, which meets that count, so gate 1 opens no matter which three reviewers they are.

so the statement is True.`,
      `**D.** → False

"Necessary in every scenario" is a strong claim, and one counter-scenario sinks it: yes-votes from R2, R3 and R4 give $Y=3$, gate 1 opens, and R1 voted no. R1 is decisive only in the two-vote case.

so the statement is False.`,
      `**E.** → True

Yes from R2 and R3 only: $2<3$ closes gate 1, and R1's absence closes gate 2. That is one scenario with exactly two yes-votes and no approval, which is all an "there exists" claim needs.

so the statement is True.`,
    ],
  },
  "math-1-84": {
    solution_overview: `Let $C$ mean the product is used commercially, $W$ mean the manufacturer approved commercial use in writing, and $S$ mean the product is serviced every year.

If $C$ is false the clause never fires. If $C$ is true the warranty is void unless the rescue clause applies, and the rescue needs $W$ and $S$ together. For a commercially used product the warranty survives exactly when both halves hold:

$$W\\land S$$

One missing half sinks the whole rescue.`,
    tactical_explanations: [
      `**A.** → True

Company Z uses the product commercially ($C$ true), has written approval ($W$ true), and has never serviced it ($S$ false). The rescue needs $W$ and $S$ together, and $S$ is missing, so the rescue never opens. Commercial use puts Z inside the voiding clause. The warranty is void.

so the statement is True.`,
      `**B.** → False

Approval is one half of the rescue, and half of an "and" rescues nothing. Z has $W$ true and $S$ false, so $W\\land S$ is false. Z is the living counterexample: written approval in hand, warranty gone.

so the statement is False.`,
      `**C.** → True

The rescue formula is $W$ and $S$: both halves of the exception must hold. Approval without servicing leaves the conjunction false; servicing without approval does the same. Satisfying only one of the two is not enough.

so the statement is True.`,
      `**D.** → False

Servicing appears only inside the exception, and the exception opens with written approval. Without approval, $W$ is false, so $W\\land S$ is false even if $S$ is true. Annual servicing is not an independent escape hatch.

so the statement is False.`,
      `**E.** → False

The servicing requirement sits inside an exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing.

so the statement is False.`,
    ],
  },
  "math-1-85": {
    solution_overview: `Two ideas do most of the work here. A proof by contradiction must open by assuming the opposite of what you want to prove. Negating a sentence flips "for all" into "there exists" and "and" into "or".

An existential claim is settled by one witness. A universal claim needs an argument that runs for an arbitrary value, not a finite list of successes.`,
    tactical_explanations: [
      `**A.** → True

The target is "there is no smallest positive real," so the legal opening is the opposite: suppose such an $x>0$ exists. Then $\\frac{x}{2}$ is still positive and strictly smaller than $x$, so $x$ was not smallest after all. The proof opens with the negation of the target and ends in an impossibility.

so the statement is True.`,
      `**B.** → False

A contradiction proof of "$\\sqrt{3}$ is irrational" must assume the negation: $\\sqrt{3}=\\frac{p}{q}$ in lowest terms. Opening with "assume $\\sqrt{3}$ is irrational" assumes the conclusion itself. There is then nothing left to contradict.

so the statement is False.`,
      `**C.** → False

The original is $(\\forall f\\,D(f))\\land(\\forall t\\,O(t))$. Negating an AND yields an OR, and negating "all" yields "some not":

$$\\exists f\\,\\neg D(f)\\ \\lor\\ \\exists t\\,\\neg O(t)$$

The offered sentence keeps the AND and strengthens both halves. One on-time flight already falsifies the original while leaving that offered sentence false.

so the statement is False.`,
      `**D.** → False

"Some employee always arrives late" is $\\exists x\\,\\forall d\\,L(x,d)$. Flip both quantifiers and negate inside: $\\forall x\\,\\exists d\\,\\neg L(x,d)$, every employee has at least one on-time day. "All employees are never late" is $\\forall x\\,\\forall d\\,\\neg L(x,d)$, a much stronger ban.

so the statement is False.`,
      `**E.** → True

An existential $\\exists x\\, P(x)$ is settled by exhibiting one value that works. A universal $\\forall x\\, P(x)$ is not settled by any finite list of successes, because unchecked values remain; it needs an argument that runs for an arbitrary $x$.

so the statement is True.`,
    ],
  },
  "math-1-86": {
    solution_overview: `Write $E(x)$ for "$x$ is an economist", $H(x)$ for "$x$ studies human behaviour", and $G(x)$ for "$x$ specializes in game theory". The argument is

P1: $\\forall x\\,(E(x)\\Rightarrow H(x))$.

P2: $\\exists x\\,(E(x)\\land G(x))$.

Conclusion: $\\exists x\\,(G(x)\\land H(x))$.

Validity asks only: whenever the premises are true, must the conclusion be true? Soundness adds that the premises are in fact true. Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$.`,
    tactical_explanations: [
      `**A.** → True

Premise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behaviour, so $H(a)$ follows. Then $G(a)\\land H(a)$, which is the conclusion. The same three steps work for any $a$ supplied by Premise 2, so the argument is valid.

so the statement is True.`,
      `**B.** → False

Replace Premise 2 by "no economists specialize in game theory." Picture a world with economists who all study human behaviour and with nobody at all in game theory. Both modified premises hold, yet the conclusion $\\exists x\\,(G(x)\\land H(x))$ fails because there is no game theorist. Premises true, conclusion false: the modified argument is invalid.

so the statement is False.`,
      `**C.** → True

Validity asks only: whenever the premises are true, must the conclusion be true? It does not inspect whether Premise 1 or Premise 2 actually holds in the real world. Soundness is the stricter label that adds "and the premises are in fact true."

so the statement is True.`,
      `**D.** → True

Validity is about the derivation from the premises: it never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form and true premises.

so the statement is True.`,
      `**E.** → False

Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal implication about economists and an existential about game theory, with no bare consequent used to recover the antecedent. An instance of affirming the consequent would be invalid, so the label does not fit.

so the statement is False.`,
    ],
  },
  "math-1-87": {
    solution_overview: `For a single game let $P$ mean "some player scored over $30$ points" and $Q$ mean "the team won". The fan claims $P\\Rightarrow Q$ for every game.

An implication has exactly one way of failing: true hypothesis, false conclusion. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always agrees with the original. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ form a separate pair, independent of the original.`,
    tactical_explanations: [
      `**A.** → True

The fan's rule is: if a player scores over $30$, the team wins. In the given game Player X scored $35$, so the hypothesis holds, and the team lost $90$-$95$, so the conclusion fails. That is the one combination an implication forbids.

so the statement is True.`,
      `**B.** → True

The existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is exactly that pair of facts. An "there exists" sentence needs a single example, and this game supplies it.

so the statement is True.`,
      `**C.** → True

The contrapositive is the same claim wearing different clothes, so it dies with the original. You can also read it off the game: the team did not win, yet a player scored $35$, exactly what "no win means nobody over $30$" forbids.

so the statement is True.`,
      `**D.** → False

Falsity does not spread to all four relatives. The converse sits in the other pair, and deciding it would take a game the team won. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ therefore does not force falsity of $Q\\Rightarrow P$.

so the statement is False.`,
      `**E.** → True

The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule.

so the statement is True.`,
    ],
  },
  "math-1-88": {
    solution_overview: `Writing $s$ for the score, the baseline rule (no curve) is $B$ if and only if $s\\ge 70$. When a curve is applied the bar drops by ten points: $B$ if and only if $s\\ge 60$.

"If and only if" runs in both directions: clearing the active cut-off earns the grade, missing it denies the grade. Scores in $60\\le s<70$ earn a B only when the curve is on.`,
    tactical_explanations: [
      `**A.** → True

The task states that the professor did apply a curve, so the live cut-off is $s\\ge 60$. Student W scored $65$, and $65\\ge 60$ holds. Curve on, so the bar sits at $60$, and $65$ clears it. W gets the B.

so the statement is True.`,
      `**B.** → False

Without a curve the live cut-off is $s\\ge 70$. Student W scored $65$, and $65<70$, so the baseline biconditional denies the B. W's $65$ sits in the band $60\\le s<70$ that the curve alone unlocks.

so the statement is False.`,
      `**C.** → True

The baseline uses $70$; the curve replaces it with $60$. Compare: $60<70$, so the threshold moves down, not up. Anyone with $s\\ge 70$ still has $s\\ge 60$, so a B already earned under the baseline is never taken away.

so the statement is True.`,
      `**D.** → True

A score of $62$ satisfies $60\\le 62<70$. Under a curve the cut-off is $60$, so $62\\ge 60$ earns the B. Without a curve the cut-off is $70$, so $62<70$ denies it. The B at $62$ therefore occurs only if the curve is applied.

so the statement is True.`,
      `**E.** → False

The baseline biconditional is $B$ iff $s\\ge 70$, and the "unless" clause replaces the cut-off by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. So "at least $70$ is necessary in all circumstances" is false.

so the statement is False.`,
    ],
  },
  "math-1-89": {
    solution_overview: `Two whole numbers are coprime when $\\mathrm{gcd}(m,n)=1$, equivalently when no prime divides both. The quickest test is to break each number into prime factors and look for anything shared.

Pair 1 has tooth counts $15$ and $28$. Pair 2 has tooth counts $24$ and $36$. The negation of "coprime" is "there exists a prime dividing both." Two even numbers always share the prime $2$. Coprime numbers need not themselves be prime.`,
    tactical_explanations: [
      `**A.** → True

Factor the two counts:

$$15=3\\times 5,\\qquad 28=2^2\\times 7$$

The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Coprime tooth counts wear evenly, so Pair 1 passes.

so the statement is True.`,
      `**B.** → False

Factor Pair 2:

$$24=2^3\\times 3,\\qquad 36=2^2\\times 3^2$$

Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives $\\mathrm{gcd}(24,36)=2^2\\times 3=12\\ne 1$. Pair 2 is not coprime.

so the statement is False.`,
      `**C.** → True

Coprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal claim produces an existential one: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$.

so the statement is True.`,
      `**D.** → True

Given $\\mathrm{gcd}(m,n)=1$ with both greater than $1$, suppose both were even. Then the prime $2$ would divide each of them, forcing $\\mathrm{gcd}(m,n)\\ge 2$ and contradicting $\\mathrm{gcd}=1$. So a coprime pair is never two even numbers.

so the statement is True.`,
      `**E.** → False

Coprime means no shared prime factor, not "at least one of $m,n$ is prime." Pair 1 is the counterexample: $15=3\\times 5$ and $28=2^2\\times 7$ are both composite, yet $\\mathrm{gcd}(15,28)=1$.

so the statement is False.`,
    ],
  },
  "math-1-90": {
    solution_overview: `Let $d$ be the number of days between cancelling and the renewal date, and $u$ the share of the service used.

Branch 1, cancelled early, $d\\ge 3$: no renewal and no charge. Usage is never mentioned in this branch.

Branch 2, cancelled late, $d<3$: the subscription renews and the subscriber is charged. Afterwards a partial refund is issued exactly when $u<10\\%$. Because this is an "if and only if", low usage both triggers the refund and is required for it.`,
    tactical_explanations: [
      `**A.** → True

K cancelled $2$ days before renewal. The early branch needs $d\\ge 3$; here $2<3$, so K is in the late branch. Late branch: the subscription still renews (and a charge applies). Usage $15\\%$ is irrelevant to whether it renews; usage is consulted only for the later refund test.

so the statement is True.`,
      `**B.** → False

K cancelled $2$ days out, so $d<3$ and the late branch applies. A partial refund is issued if and only if $u<10\\%$. K used $15\\%$ of the service, and $15<10$ is false. The biconditional therefore withholds the refund.

so the statement is False.`,
      `**C.** → True

K still cancelled $2$ days out, so $d<3$ and the late branch still applies. Change only the usage to $5\\%$. Then $5\\%<10\\%$ holds, so the refund side of that biconditional opens.

so the statement is True.`,
      `**D.** → True

Change only the timing to $4$ days: $4\\ge 3$, so K moves into the early branch. Early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch.

so the statement is True.`,
      `**E.** → False

The $10\\%$ usage test is written only in the late-cancellation paragraph ($d<3$). If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question.

so the statement is False.`,
    ],
  },
});
