import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-81": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already killed the liar-X case: it would make Y a truth-teller whose sentence then forced Y to be a liar. The surviving case is X a truth-teller. Assuming X lies is the contradiction; the other assumption runs into no trouble. X is a truth-teller.",
      "**B.** → False\n\nFrom A, X is a truth-teller, so X's sentence \"Y always lies\" is true. That sentence is $\\neg y$, so Y is a liar, not a truth-teller. A liar cannot be a truth-teller. The other case, X a liar, already collapsed, so this assignment is forced.",
      "**C.** → True\n\nY said \"$\\neg x\\land\\neg y$.\" In the surviving assignment X is a truth-teller, so $\\neg x$ is false. A conjunction with a false half is false. That matches Y being a liar: a liar's sentence must be false. Checking the other conjunct is unnecessary once one half fails.",
      "**D.** → False\n\nTwo types for X were tested. X a liar forces Y to be both a truth-teller and a liar: contradiction. X a truth-teller forces Y to be a liar, and Y's false conjunction is consistent. One surviving assignment is not two. Uniqueness is the other side of \"one case collapses.\"",
      "**E.** → True\n\nA lying X makes \"Y always lies\" false, so Y would have to be truthful; but a truthful Y's sentence demands that Y be a liar. The two demands on Y cannot both hold, so the opening assumption that X lies must be rejected. That collapse is precisely why the overview ruled the case out.",
    ],
  },
  "math-1-82": {
    tactical_explanations: [
      "**A.** → True\n\nStatement 1 is $\\exists s\\,\\forall e\\, G(s,e)$. Fix that student $s_0$, then pick an arbitrary exam $e$: $G(s_0,e)$ holds, so $\\forall e\\,\\exists s\\, G(s,e)$ follows at once. Hand that same student to whichever exam you are asked about. No class can make Statement 1 true and Statement 2 false.",
      "**B.** → False\n\nThe overview's two-student class is the break: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 is true, yet nobody clears both exams, so Statement 1 fails. A single such class is enough. The reverse arrow does not hold.",
      "**C.** → False\n\nEquivalence needs both arrows. The arrow from Statement 1 to Statement 2 is fine, but the two-student class sends Statement 2 true and Statement 1 false, so the arrow back is missing. The trap is thinking \"same predicates, so same meaning\": the predicates match, but the quantifier order does not.",
      "**D.** → True\n\n\"Each exam has a high scorer, but the high scorer keeps changing\" is a description of exactly that two-student class. Statement 2 can be true while Statement 1 is false; this really can happen. The claim is naming the counterexample pattern already used against B and C, not inventing a new class.",
      "**E.** → True\n\nRestrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ and the inner existential in Statement 2 both collapse to $G(s,e_1)$. With a single exam there is nothing for the two quantifiers to disagree about: both statements shrink to $\\exists s\\; G(s,e_1)$. Equivalent in that special case only.",
    ],
  },
  "math-1-83": {
    tactical_explanations: [
      "**A.** → True\n\nThe given votes are R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 asks $Y\\ge 3$: $2\\ge 3$ fails. Gate 2 asks whether $Y=2$ and R1 is among the yes-votes: both hold, so gate 2 opens. Two yes-votes with R1 inside the pair is the row the overview's table marks approved.",
      "**B.** → False\n\nThe trap is treating the tie-breaking power as belonging to \"any two reviewers.\" It is written for R1 by name. With yes-votes from R2 and R3 the count is still $2$, so gate 1 stays shut, and R1 voted no, so gate 2 stays shut. Same $Y=2$ as the given candidate, but R1's absence flips the outcome. Rejected.",
      "**C.** → True\n\nGate 1 is $Y\\ge 3$, and names are ignored there. Any three yes-votes give $Y=3$, which meets that count, so gate 1 opens no matter which three reviewers they are. All four possible triples give approval. R1's special power lives only in the two-vote rows.",
      "**D.** → False\n\n\"Necessary in every scenario\" is a strong claim, and one counter-scenario sinks it: yes-votes from R2, R3 and R4 give $Y=3$, gate 1 opens, and R1 voted no. The trap is confusing \"sometimes decisive\" with \"always required.\" R1 is decisive only in the two-vote case.",
      "**E.** → True\n\nYes from R2 and R3 only: $2<3$ closes gate 1, and R1's absence closes gate 2. That is one scenario with exactly two yes-votes and no approval, which is all an \"there exists\" claim needs. The same pair already appeared in B as a rejection case. Any two-yes pair that excludes R1 works the same way.",
    ],
  },
  "math-1-84": {
    tactical_explanations: [
      "**A.** → True\n\nCompany Z uses the product commercially ($C$ true), has written approval ($W$ true), and has never serviced it ($S$ false). The rescue needs $W$ and $S$ together, and $S$ is missing, so the rescue never opens. Commercial use puts Z inside the voiding clause. The warranty is void.",
      "**B.** → False\n\nZ is the living counterexample: written approval in hand, warranty gone. Approval is one half of the rescue, and half of an \"and\" rescues nothing.\n\n$$W\\land S=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}.$$\n\nApproval alone does not keep the warranty valid.",
      "**C.** → True\n\nThe rescue formula is $W$ and $S$: both halves of the exception must hold. Approval without servicing leaves the conjunction false; servicing without approval does the same. The middle rows of the overview's table say it directly. Satisfying only one of the two is not enough.",
      "**D.** → False\n\nThe trap is treating servicing as a second, independent way to keep cover. Servicing appears only inside the exception, and the exception opens with written approval. Without approval, $W$ is false, so $W\\land S$ is false even if $S$ is true. Annual servicing is not an independent escape hatch.",
      "**E.** → False\n\nThe servicing requirement sits inside an exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing. The trap is reading a nested proviso as a freestanding duty that applies to every owner.",
    ],
  },
  "math-1-85": {
    tactical_explanations: [
      "**A.** → True\n\nThe target is \"there is no smallest positive real,\" so the legal opening is the opposite: suppose such an $x>0$ exists. Then $\\frac{x}{2}$ is still positive and strictly smaller than $x$, so $x$ was not smallest after all. The proof opens with the negation of the target and ends in an impossibility: the two things a contradiction proof must do.",
      "**B.** → False\n\nA contradiction proof of \"$\\sqrt{3}$ is irrational\" must assume the negation: $\\sqrt{3}=\\frac{p}{q}$ in lowest terms. Opening with \"assume $\\sqrt{3}$ is irrational\" assumes the conclusion itself. There is then nothing left to contradict. The trap is copying the phrase \"assume ...\" without checking that the assumption is the *opposite* of the target.",
      "**C.** → False\n\nThe original is $(\\forall f\\,D(f))\\land(\\forall t\\,O(t))$. Negating an AND yields an OR, and negating \"all\" yields \"some not\":\n\n$$\\exists f\\,\\neg D(f)\\ \\lor\\ \\exists t\\,\\neg O(t).$$\n\nThe offered sentence keeps the AND and strengthens both halves. One on-time flight already falsifies the original while leaving that offered sentence false.",
      "**D.** → False\n\n\"Some employee always arrives late\" is $\\exists x\\,\\forall d\\,L(x,d)$. Flip both quantifiers and negate inside: $\\forall x\\,\\exists d\\,\\neg L(x,d)$, every employee has at least one on-time day. \"All employees are never late\" is $\\forall x\\,\\forall d\\,\\neg L(x,d)$, a much stronger ban. An office where everyone is late some days but nobody is late every day makes the original false and the offered \"negation\" false together.",
      "**E.** → True\n\nAn existential $\\exists x\\, P(x)$ is settled by exhibiting one value that works. A universal $\\forall x\\, P(x)$ is not settled by any finite list of successes, because unchecked values remain; it needs an argument that runs for an arbitrary $x$. One witness for \"there exists\", a general argument for \"for all\": that is the asymmetry between the two quantifiers.",
    ],
  },
  "math-1-86": {
    tactical_explanations: [
      "**A.** → True\n\nPremise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behaviour, so $H(a)$ follows. Then $G(a)\\land H(a)$, which is the conclusion. The same three steps work for any $a$ supplied by Premise 2, so the argument is valid. Nothing in those moves used a special feature of $a$.",
      "**B.** → False\n\nReplace Premise 2 by \"no economists specialize in game theory.\" Picture a world with economists who all study human behaviour and with nobody at all in game theory. Both modified premises hold, yet the conclusion $\\exists x\\,(G(x)\\land H(x))$ fails because there is no game theorist. Premises true, conclusion false: the modified argument is invalid.",
      "**C.** → True\n\nValidity asks only: whenever the premises are true, must the conclusion be true? It does not inspect whether Premise 1 or Premise 2 actually holds in the real world. Soundness is the stricter label that adds \"and the premises are in fact true.\" Adding that extra demand would give soundness instead of validity.",
      "**D.** → True\n\nValidity is about the three-move derivation from the premises: it never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form *and* true premises. That is exactly the pairing the claim describes.",
      "**E.** → False\n\nAffirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal implication about economists and an existential about game theory, with no bare consequent used to recover the antecedent. The argument was already shown valid in A. An instance of affirming the consequent would be invalid, so the label does not fit.",
    ],
  },
  "math-1-87": {
    tactical_explanations: [
      "**A.** → True\n\nThe fan's rule is: if a player scores over $30$, the team wins. In the given game Player X scored $35$, so the hypothesis holds, and the team lost $90$-$95$, so the conclusion fails. That is the one combination an implication forbids. A textbook counterexample.",
      "**B.** → True\n\nThe existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is exactly that pair of facts. An \"there exists\" sentence needs a single example, and this game supplies it.",
      "**C.** → True\n\nThe contrapositive is the same claim wearing different clothes, so it dies with the original. You can also read it off the game: the team did not win, yet a player scored $35$, exactly what \"no win means nobody over $30$\" forbids. Matching the numbers: $\\neg Q$ holds (loss) while $\\neg P$ fails ($35>30$).",
      "**D.** → False\n\nThe trap is assuming that falsity spreads to all four relatives. It does not: the converse sits in the other pair, and deciding it would take a game the team *won*. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ therefore does not force falsity of $Q\\Rightarrow P$.",
      "**E.** → True\n\nThe inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer ($\\neg P$). The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule.",
    ],
  },
  "math-1-88": {
    tactical_explanations: [
      "**A.** → True\n\nThe task states that the professor did apply a curve, so the live cut-off is $s\\ge 60$. Student W scored $65$, and $65\\ge 60$ holds. Curve on, so the bar sits at $60$, and $65$ clears it. W gets the B. Without the curve the bar would sit at $70$ and this letter would go the other way.",
      "**B.** → False\n\nWithout a curve the live cut-off is $s\\ge 70$. Student W scored $65$, and $65<70$, so the baseline biconditional denies the B. W's $65$ sits in the band $60\\le s<70$ that the curve alone unlocks. Removing the curve removes the B.",
      "**C.** → True\n\nThe baseline uses $70$; the curve replaces it with $60$. Compare: $60<70$, so the threshold moves down, not up. Anyone with $s\\ge 70$ still has $s\\ge 60$, so a B already earned under the baseline is never taken away. Lowered, never raised.",
      "**D.** → True\n\nA score of $62$ satisfies $60\\le 62<70$. Under a curve the cut-off is $60$, so $62\\ge 60$ earns the B. Without a curve the cut-off is $70$, so $62<70$ denies it. The B at $62$ therefore occurs only if the curve is applied. A still lower score such as $55$ fails even with the curve, so this is an \"only if,\" not a guarantee for every score.",
      "**E.** → False\n\nThe baseline biconditional is $B\\Leftrightarrow s\\ge 70$, and the \"unless\" clause replaces the cut-off by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. So \"at least $70$ is necessary in all circumstances\" is false: the exception the rule itself writes already drops the necessity of $70$.",
    ],
  },
  "math-1-89": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already factored $15=3\\times 5$ and $28=2^{2}\\times 7$. The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\gcd(15,28)=1$. Coprime tooth counts wear evenly, so Pair 1 passes. A shared prime such as $5$ on both sides would have killed it.",
      "**B.** → False\n\nThe overview already has $\\gcd(24,36)=12\\ne 1$. Both counts are even, so $2$ alone already kills coprimality; they share $3$ as well. Pair 2 is not coprime. Both even is a shortcut: two even numbers never form a coprime pair.",
      "**C.** → True\n\nCoprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal claim produces an existential one: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$. Pair 2 is a live example of that negation, with $p=2$ (and $p=3$).",
      "**D.** → True\n\nGiven $\\gcd(m,n)=1$ with both greater than $1$, suppose both were even. Then the prime $2$ would divide each of them, forcing $\\gcd(m,n)\\ge 2$ and contradicting $\\gcd=1$. So a coprime pair is never two even numbers. Pair 2 shows the forbidden configuration; Pair 1 shows a legal one.",
      "**E.** → False\n\nCoprime means no *shared* prime factor, not \"at least one of $m,n$ is prime.\" Pair 1 is the counterexample: $15$ and $28$ are both composite, yet $\\gcd(15,28)=1$. A coprime pair of integers greater than $1$ need not include a prime. The claim confuses \"no common prime\" with \"at least one prime among the pair.\"",
    ],
  },
  "math-1-90": {
    tactical_explanations: [
      "**A.** → True\n\nK cancelled $2$ days before renewal. The early branch needs $d\\ge 3$; here $2<3$, so K is in the late branch. Late branch: the subscription still renews (and a charge applies). Usage $15\\%$ is irrelevant to whether it renews; usage is consulted only for the later refund test. K's subscription renews.",
      "**B.** → False\n\nK is in the late branch, so a partial refund is issued if and only if $u<10\\%$. K used $15\\%$ of the service, and $15<10$ is false. The biconditional therefore withholds the refund. An \"if and only if\" leaves no room for a discretionary refund at $15\\%$.",
      "**C.** → True\n\nK still cancelled $2$ days out, so $d<3$ and the late branch still applies. Change only the usage to $5\\%$. Then $5\\%<10\\%$ holds, so the refund side of that biconditional opens. Same timing, different usage, and $5\\%$ is under the $10\\%$ line, which is all the refund clause asks for.",
      "**D.** → True\n\nChange only the timing to $4$ days: $4\\ge 3$, so K moves into the early branch. Early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch. Both halves of the claim hold: no renewal, and the usage number becomes irrelevant.",
      "**E.** → False\n\nThe $10\\%$ usage test is written only in the late-cancellation paragraph ($d<3$). If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question. The trap is treating a branch-local condition as a global policy that follows the subscriber into every cancellation timeline.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/03_12.json",
  patches
);
console.log("03_12 edited", n);
