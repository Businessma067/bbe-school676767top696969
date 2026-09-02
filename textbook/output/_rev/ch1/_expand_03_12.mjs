import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "03_12.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const OV = {
  "math-1-81": `**Part 1.** The setup.

Every islander is either a truth-teller, whose every sentence is true, or a liar, whose every sentence is false. Write $x$ for "X is a truth-teller" and $y$ for "Y is a truth-teller". X's sentence claims $\\neg y$; Y's sentence claims $\\neg x \\land \\neg y$.

**Part 2.** The operations.

There are only two possibilities for X, so test them both. A case that forces someone to be both a truth-teller and a liar is impossible.

**Part 3.** The scans.

Case 1: X is a liar. Then X's sentence is false, so Y is a truth-teller. But a truth-teller's sentence must be true, so $\\neg x \\land \\neg y$ holds, making Y a liar. Y cannot be both. This case is impossible.

Case 2: X is a truth-teller. Then Y is a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. This case works.

One case collapses and one survives: X tells the truth and Y lies, which also makes Y's sentence "X and I are both liars" false.`,
  "math-1-82": `**Part 1.** The setup.

Write $G(s,e)$ for "student $s$ scored above $90$ on exam $e$". Statement 1 picks the student first: $S_1$ is $\\exists s\\,\\forall e\\; G(s,e)$. Statement 2 names the exam first: $S_2$ is $\\forall e\\,\\exists s\\; G(s,e)$.

**Part 2.** The operations.

In $S_1$ one student must survive every exam. In $S_2$ a different student may cover each exam. Quantifier order is the whole difference.

**Part 3.** The scans.

$S_1$ implies $S_2$ by handing the same student to every exam. The reverse fails on a two-exam class with a rotating top scorer. With a single exam both statements shrink to $\\exists s\\; G(s,e_1)$.`,
  "math-1-83": `**Part 1.** The setup.

The committee rule has two independent gates, and a candidate is approved the moment one of them opens. Let $Y$ be the number of yes-votes. Gate 1: $Y\\ge 3$, names ignored. Gate 2: $Y=2$ and R1 is one of the two, name matters.

**Part 2.** The operations.

Three or four yes-votes always open gate 1. Exactly two yes-votes open gate 2 only when R1 is inside. One or zero yes-votes open neither gate.

**Part 3.** The scans.

This candidate: R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 closed, gate 2 open, approved. Yes from R2 and R3 only: both gates closed, rejected. Yes from R2, R3, R4: gate 1 opens even if R1 votes no.`,
  "math-1-84": `**Part 1.** The setup.

Let $C$ mean the product is used commercially, $W$ mean the manufacturer approved commercial use in writing, and $S$ mean the product is serviced every year.

**Part 2.** The operations.

If $C$ is false the clause never fires. If $C$ is true the warranty is void unless the rescue clause applies, and the rescue needs $W$ and $S$ together. One missing half sinks the whole rescue.

**Part 3.** The scans.

Company Z: $C$ true, $W$ true, $S$ false, so $W\\land S$ is false and the warranty is void. Written approval alone does not rescue. Servicing without approval does not rescue. If $C$ is false, servicing is never asked.`,
  "math-1-85": `**Part 1.** The setup.

Two ideas do most of the work here. A proof by contradiction must open by assuming the opposite of what you want to prove. Negating a sentence flips "for all" into "there exists" and "and" into "or".

**Part 2.** The operations.

An existential claim is settled by one witness. A universal claim needs an argument that runs for an arbitrary value, not a finite list of successes.

**Part 3.** The scans.

Assuming a smallest positive $x$ and noting $x/2$ is smaller is a legal contradiction opening. Assuming $\\sqrt{3}$ is irrational in order to prove it is irrational assumes the conclusion. The negation of "all flights delayed and all trains on time" is an or of existential failures, not a double "no." The negation of "some employee is always late" is "every employee has an on-time day," not "nobody is ever late."`,
  "math-1-86": `**Part 1.** The setup.

Write $E(x)$ for "$x$ is an economist", $H(x)$ for "$x$ studies human behaviour", and $G(x)$ for "$x$ specializes in game theory". The argument is P1: $\\forall x\\,(E(x)\\Rightarrow H(x))$. P2: $\\exists x\\,(E(x)\\land G(x))$. Conclusion: $\\exists x\\,(G(x)\\land H(x))$.

**Part 2.** The operations.

Validity asks only: whenever the premises are true, must the conclusion be true? Soundness adds that the premises are in fact true. Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$.

**Part 3.** The scans.

From P2 take a person $a$ who is economist and game theorist; P1 gives $H(a)$; then $G(a)\\land H(a)$. Replacing P2 by "no economists specialize in game theory" allows a world with no game theorists, so the modified argument is invalid. False P1 would lose soundness and keep validity.`,
  "math-1-87": `**Part 1.** The setup.

For a single game let $P$ mean "some player scored over $30$ points" and $Q$ mean "the team won". The fan claims $P\\Rightarrow Q$ for every game.

**Part 2.** The operations.

An implication has exactly one way of failing: true hypothesis, false conclusion. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always agrees with the original. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ form a separate pair, independent of the original.

**Part 3.** The scans.

Player X scored $35$ and the team lost $90$-$95$: $P$ true, $Q$ false, so the fan's rule fails, and so does its contrapositive. The reported game is a defeat, so the converse is idle. The inverse is tested by games with no $30$-point scorer, which this game is not.`,
  "math-1-88": `**Part 1.** The setup.

Writing $s$ for the score, the baseline rule (no curve) is $B$ if and only if $s\\ge 70$. When a curve is applied the bar drops by ten points: $B$ if and only if $s\\ge 60$.

**Part 2.** The operations.

If and only if runs in both directions: clearing the active cut-off earns the grade, missing it denies the grade. Scores in $60\\le s<70$ earn a B only when the curve is on.

**Part 3.** The scans.

This exam used a curve and W scored $65$, so $65\\ge 60$ earns the B. Without a curve, $65<70$ would deny it. A student at $62$ is in the same band. Clearing $70$ still clears $60$, so the curve never raises the bar.`,
  "math-1-89": `**Part 1.** The setup.

Two whole numbers are coprime when $\\mathrm{gcd}(m,n)=1$, equivalently when no prime divides both. Pair 1 has tooth counts $15$ and $28$. Pair 2 has tooth counts $24$ and $36$.

**Part 2.** The operations.

The quickest test is to break each number into prime factors and look for anything shared. The negation of "coprime" is "there exists a prime dividing both." Two even numbers always share the prime $2$. Coprime numbers need not themselves be prime.

**Part 3.** The scans.

$15=3\\times 5$ and $28=2^2\\times 7$ share no prime, so $\\mathrm{gcd}(15,28)=1$. $24=2^3\\times 3$ and $36=2^2\\times 3^2$ share $2$ and $3$, so $\\mathrm{gcd}(24,36)=12\\ne 1$. Pair 1 is two composites that are still coprime.`,
  "math-1-90": `**Part 1.** The setup.

Let $d$ be the number of days between cancelling and the renewal date, and $u$ the share of the service used.

**Part 2.** The operations.

Branch 1, cancelled early, $d\\ge 3$: no renewal and no charge. Usage is never mentioned in this branch. Branch 2, cancelled late, $d<3$: the subscription renews and the subscriber is charged. Afterwards a partial refund is issued exactly when $u<10\\%$. Because this is an if and only if, low usage both triggers the refund and is required for it.

**Part 3.** The scans.

K cancelled $2$ days out, so $d<3$, late branch: the subscription renews. K used $15\\%$, so $u<10\\%$ fails and there is no refund. At $5\\%$ usage the refund would open. At $d=4$ the early branch would apply and usage would never be read.`,
};

const EX = {
  "math-1-81": [
    "Suppose X is a liar. Then X's sentence is false, so Y is a truth-teller. A truth-teller's sentence must be true, so both are liars, which makes Y a liar. Y cannot be both. The liar-X case is impossible, so X is a truth-teller. The recovered Case 1 collapse is that contradiction on Y. This letter is that surviving type for X, not yet Y's type.",
    "Suppose Y is a truth-teller. Then Y's sentence is true: both X and Y are liars. That requires Y to be a liar, contradicting the opening assumption. So Y is not a truth-teller. The recovered unique solution has Y a liar. A truth-telling Y is the other collapsed case, visible already in Case 1 and again by this direct assumption.",
    "Y said that X and Y are both liars. If that sentence were true, Y would be a liar, so the sentence would be false. A sentence cannot be true and false, so Y's statement is false. The recovered Case 2 already made Y a liar, whose sentence had to be false. This letter is that forced falsity of the conjunction, independent of X's type in the surviving assignment, though the surviving assignment agrees.",
    "Two types for X can be tested. X a liar forces Y to be both a truth-teller and a liar: contradiction. X a truth-teller forces Y to be a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. One surviving assignment is not two. The recovered uniqueness is that Case 1 dies and Case 2 lives. 'Equally valid solutions' would need both cases to survive. They do not. The island puzzle is forced, not a fork.",
    "A lying X makes 'Y always lies' false, so Y would have to be truthful; but a truthful Y's sentence demands that Y be a liar. The two demands on Y cannot both hold, so the opening assumption that X lies must be rejected. The recovered Case 1 is that contradiction. This letter is the same collapse as letter A, now named as a contradiction from the liar-X hypothesis. What would make liar-X possible? A different sentence from Y that did not claim Y was a liar. The given Y-sentence does claim that, and it clashes with Y being forced truthful.",
  ],
  "math-1-82": [
    "Statement 1 is a student who clears every exam. Fix that student $s_0$, then pick an arbitrary exam $e$: $G(s_0,e)$ holds, so Statement 2 follows at once. Hand that same student to whichever exam you are asked about. The recovered implication is that reuse, not a new search for a different student per exam. $S_1$ is stronger, so it yields $S_2$.",
    "Two exams, two students: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 is true, yet nobody clears both exams, so Statement 1 fails. A single such class is enough. The reverse arrow does not hold. The recovered counterexample is a rotating top scorer. Quantifier order is the whole difference: the student is allowed to change in $S_2$ and not in $S_1$. What would make the reverse true? A class in which the high scorer is forced to be the same person, for instance a single student in the class. The stem's comparison is for a general class, and a two-student rotating class is legal.",
    "Equivalence needs both arrows. Statement 1 implies Statement 2, but a two-student class with a different top scorer on each exam sends Statement 2 true and Statement 1 false, so the arrow back is missing. Same predicates, different quantifier order. The recovered nonequivalence is letter A's arrow plus letter B's missing reverse. Two statements that share $G$ and disagree in order are not the same claim.",
    "Each exam has a high scorer, but the high scorer keeps changing: that is exactly Statement 2 true and Statement 1 false. One class with a rotating top scorer is a witness. The recovered split is letter B's class, now named in the stem's own words. This letter is that witness, not a second implication test.",
    "Restrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ and the inner existential in Statement 2 both collapse to $G(s,e_1)$. With a single exam there is nothing for the two quantifiers to disagree about: both statements shrink to $\\exists s\\; G(s,e_1)$. The recovered collapse is that agreement on a singleton domain. Rotating top scorers need at least two exams to exist. One exam makes the order irrelevant. What would keep them nonequivalent? Two or more exams, which is letter B's picture.",
  ],
  "math-1-83": [
    "The given votes are R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 asks $Y\\ge 3$: $2\\ge 3$ fails. Gate 2 asks whether $Y=2$ and R1 is among the yes-votes: both hold, so gate 2 opens. The recovered table's middle-with-R1 row is approval. This candidate is that row. Names matter only at $Y=2$, and here R1 is inside.",
    "The tie-breaking power is written for R1 by name, not for any two reviewers. With yes-votes from R2 and R3 the count is still $2$, so gate 1 stays shut, and R1 voted no, so gate 2 stays shut. Same $Y=2$ as the given candidate, but R1's absence flips the outcome. The recovered table's middle-without-R1 row is rejection. This counterfactual is that row. What would approve R2-and-R3? A rule that let any two yes-votes suffice, or a gate 1 at $Y\\ge 2$. The stem's gate 2 names R1 only.",
    "Gate 1 is $Y\\ge 3$, and names are ignored there. Any three yes-votes give $Y=3$, which meets that count, so gate 1 opens no matter which three reviewers they are. The recovered table's top row is approval for any names. R1's special power lives only in the two-vote rows. This letter is the count-only gate.",
    "Necessary in every scenario is a strong claim, and one counter-scenario sinks it: yes-votes from R2, R3 and R4 give $Y=3$, gate 1 opens, and R1 voted no. R1 is decisive only in the two-vote case. The recovered table already shows a three-vote approval with R1 outside. What would make R1 necessary always? Dropping gate 1, so that only gate 2 could approve. The stem keeps gate 1, which ignores names.",
    "Yes from R2 and R3 only: $2<3$ closes gate 1, and R1's absence closes gate 2. That is one scenario with exactly two yes-votes and no approval, which is all a 'there exists' claim needs. The recovered middle-without-R1 row is that scenario. Letter B used the same row as a counterfactual about the given candidate. This letter only needs existence of some two-vote rejection, and that row supplies it.",
  ],
  "math-1-84": [
    "Company Z uses the product commercially, has written approval, and has never serviced it. The rescue needs $W$ and $S$ together, and $S$ is missing, so the rescue never opens. Commercial use puts Z inside the voiding clause. The recovered warranty is void. Half of an and rescues nothing. Z is the living picture of $W$ true and $S$ false.",
    "Approval is one half of the rescue, and half of an and rescues nothing. Z has $W$ true and $S$ false, so $W\\land S$ is false. Z is the living counterexample: written approval in hand, warranty gone. The recovered rescue never opened. What would make approval alone sufficient? Dropping the servicing half from the exception. The stem wrote both. Letter C names that both-halves demand in general; this letter is Z as the witness that one half is not enough.",
    "The rescue formula is $W$ and $S$: both halves of the exception must hold. Approval without servicing leaves the conjunction false; servicing without approval does the same. Satisfying only one of the two is not enough. The recovered exception is an and, not an or. Z already showed approval without servicing. A company with servicing and no written approval would show the other missing half, letter D's picture.",
    "Servicing appears only inside the exception, and the exception opens with written approval. Without approval, $W$ is false, so $W\\land S$ is false even if $S$ is true. Annual servicing is not an independent escape hatch. The recovered rescue still needs $W$. What would make servicing-without-approval work? A different exception that listed $S$ alone, or an or of $W$ and $S$. The stem wrote $W$ and $S$ inside an exception that itself opens only after commercial use with approval.",
    "The servicing requirement sits inside an exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing. The recovered $C$-false region does not mention $S$. Applying the annual-servicing requirement to a non-commercial user reads a nested exception as a standing duty. It is not a standing duty. It is a half of a rescue that never opens if $C$ is false.",
  ],
  "math-1-85": [
    "The target is 'there is no smallest positive real,' so the legal opening is the opposite: suppose such an $x>0$ exists. Then $x/2$ is still positive and strictly smaller than $x$, so $x$ was not smallest after all. The recovered proof opens with the negation of the target and ends in an impossibility. That is a valid contradiction proof. Opening with the target itself would be letter B's mistake on a different claim.",
    "A contradiction proof of '$\\sqrt{3}$ is irrational' must assume the negation: $\\sqrt{3}=p/q$ in lowest terms. Opening with 'assume $\\sqrt{3}$ is irrational' assumes the conclusion itself. There is then nothing left to contradict. The recovered legal opening is rationality, as with $\\sqrt{2}$ in the earlier task. This writeup assumes the conclusion and is not a contradiction proof. What would make that opening legal? A different target, proving rationality. The target here is irrationality.",
    "The original is all flights delayed and all trains on time. Negating an AND yields an OR, and negating 'all' yields 'some not': some flight is on time, or some train is delayed. The offered sentence keeps the AND and strengthens both halves to 'no flight delayed and no train on time.' One on-time flight already falsifies the original while leaving that offered sentence false, so the offered sentence is not the negation. The recovered negation is an or of existential failures, not a double ban. De Morgan plus quantifier flip is the whole rewrite.",
    "Some employee always arrives late is $\\exists x\\,\\forall d\\,L(x,d)$. Flip both quantifiers and negate inside: $\\forall x\\,\\exists d\\,\\neg L(x,d)$, every employee has at least one on-time day. 'All employees are never late' is $\\forall x\\,\\forall d\\,\\neg L(x,d)$, a much stronger ban. The recovered correct negation is the weaker 'each person has an on-time day,' not a universal never. One on-time day per employee already kills 'some employee is late every day.' Requiring nobody ever late is more than the negation needs.",
    "An existential is settled by exhibiting one value that works. A universal is not settled by any finite list of successes, because unchecked values remain; it needs an argument that runs for an arbitrary $x$. The recovered pair of standards is that split. Letter A's smallest-positive proof is a universal-style argument (no such $x$). One example of a small positive real would not prove there is no smallest. One example would prove an existential such as 'there is a positive real.'",
  ],
  "math-1-86": [
    "Premise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behaviour, so $H(a)$ follows. Then $G(a)\\land H(a)$, which is the conclusion. The same three steps work for any $a$ supplied by Premise 2, so the argument is valid. The recovered derivation does not inspect whether the premises are true in the real world. That inspection is soundness, letter D.",
    "Replace Premise 2 by 'no economists specialize in game theory.' Picture a world with economists who all study human behaviour and with nobody at all in game theory. Both modified premises hold, yet the conclusion fails because there is no game theorist. Premises true, conclusion false: the modified argument is invalid. The recovered counter-world is empty of game theorists. Validity of the original used Premise 2 as a witness-supplier. Removing that witness-supply breaks the derivation. The number $39$ in the stem is stray text, not a count used here.",
    "Validity asks only: whenever the premises are true, must the conclusion be true? It does not inspect whether Premise 1 or Premise 2 actually holds in the real world. Soundness is the stricter label that adds 'and the premises are in fact true.' The recovered distinction is that split. This letter is the definition; letter D applies it when Premise 1 is false in reality.",
    "Validity is about the derivation from the premises: it never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form and true premises. The recovered labels split: valid, unsound. A false premise does not turn a valid form invalid. It turns a sound argument unsound.",
    "Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal implication about economists and an existential about game theory, with no bare consequent used to recover the antecedent. An instance of affirming the consequent would be invalid, so the label does not fit. The recovered argument is valid, letter A, and affirming the consequent is an invalid pattern. Those cannot be the same. The form here is 'all $E$ are $H$, some $E$ are $G$, therefore some $G$ are $H$,' a standard valid syllogism shape, not $Q$ therefore $P$.",
  ],
  "math-1-87": [
    "The fan's rule is: if a player scores over $30$, the team wins. In the given game Player X scored $35$, so the hypothesis holds, and the team lost $90$-$95$, so the conclusion fails. That is the one combination an implication forbids. The recovered game is a genuine counterexample. A win with a $35$-point scorer would have fit the rule. This game is a loss.",
    "The existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is exactly that pair of facts. An 'there exists' sentence needs a single example, and this game supplies it. The recovered witness is the same game that killed the fan's universal rule. Letter A was the universal dying; this letter is the existential living on the same facts.",
    "The contrapositive is the same claim wearing different clothes, so it dies with the original. You can also read it off the game: the team did not win, yet a player scored $35$, exactly what 'no win means nobody over $30$' forbids. The recovered contrapositive fails on the same $P$ true, $Q$ false row. Letter E's inverse does not automatically fail with the original; this relative does.",
    "Falsity does not spread to all four relatives. The converse sits in the other pair, and deciding it would take a game the team won. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ therefore does not force falsity of $Q\\Rightarrow P$. The recovered game does not test the converse at all. A later win without a $30$-point scorer would kill the converse; a later win with a $35$-point scorer would fit it. Neither is this game. Automatically false is the false figure: spreading one failure to an untested relative.",
    "The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule. The recovered independence is that other pair. Letter D's converse is the partner of this inverse. Neither is forced by the original's failure. A game with no $30$-point scorer that the team still won would kill the inverse; this game cannot speak to it.",
  ],
  "math-1-88": [
    "The task states that the professor did apply a curve, so the live cut-off is $s\\ge 60$. Student W scored $65$, and $65\\ge 60$ holds. Curve on, so the bar sits at $60$, and $65$ clears it. W gets the B. The recovered active cutoff is $60$, not $70$. Letter B will turn the curve off and drop W below the baseline bar.",
    "Without a curve the live cut-off is $s\\ge 70$. Student W scored $65$, and $65<70$, so the baseline biconditional denies the B. W's $65$ sits in the band $60\\le s<70$ that the curve alone unlocks. The recovered no-curve outcome is no B. This letter is the counterfactual with the curve off. The same $65$ that passed letter A fails here because the active cutoff moved back to $70$.",
    "The baseline uses $70$; the curve replaces it with $60$. Compare: $60<70$, so the threshold moves down, not up. Anyone with $s\\ge 70$ still has $s\\ge 60$, so a B already earned under the baseline is never taken away. The recovered curve strictly lowers the bar. Raising it would be a different rule. This letter is that direction, not W's particular $65$.",
    "A score of $62$ satisfies $60\\le 62<70$. Under a curve the cut-off is $60$, so $62\\ge 60$ earns the B. Without a curve the cut-off is $70$, so $62<70$ denies it. The B at $62$ therefore occurs only if the curve is applied. The recovered band $60\\le s<70$ is the curve-only region. W's $65$ sits in the same band, letter A versus letter B. This letter names $62$ as another point of that band.",
    "The baseline biconditional is $B$ iff $s\\ge 70$, and the unless clause replaces the cut-off by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. So 'at least $70$ is necessary in all circumstances' is false. The recovered exception is doing real work. If and only if in the baseline is not a freeze that survives the unless clause. What would make $70$ necessary always? Dropping the curve exception. The stem wrote the exception, and this exam used it.",
  ],
  "math-1-89": [
    "Factor the two counts: $15=3\\times 5$ and $28=2^2\\times 7$. The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Coprime tooth counts wear evenly, so Pair 1 passes. The recovered gcd is $1$. Sharing no prime is the test, not 'looking different.'",
    "Factor Pair 2: $24=2^3\\times 3$ and $36=2^2\\times 3^2$. Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives $\\mathrm{gcd}(24,36)=12\\ne 1$. Pair 2 is not coprime. The recovered gcd is $12$. Sharing two primes is more than enough to fail. Letter A's disjoint prime lists are the contrast. These lists overlap.",
    "Coprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal claim produces an existential one: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$. The recovered negation is that existential. Pair 2 is a witness that such a $p$ can exist, namely $2$ or $3$. This letter is the form of the negation, not a claim about a particular pair.",
    "Given $\\mathrm{gcd}(m,n)=1$ with both greater than $1$, suppose both were even. Then the prime $2$ would divide each of them, forcing $\\mathrm{gcd}(m,n)\\ge 2$ and contradicting $\\mathrm{gcd}=1$. So a coprime pair is never two even numbers. The recovered ban on two evens is that shared $2$. Pair 1 is odd-and-even, which is allowed. Two odds can be coprime or not; two evens cannot be coprime.",
    "Coprime means no shared prime factor, not 'at least one of $m,n$ is prime.' Pair 1 is the counterexample: $15=3\\times 5$ and $28=2^2\\times 7$ are both composite, yet $\\mathrm{gcd}(15,28)=1$. The recovered Pair 1 is two composites that still miss each other in primes. The false figure is 'coprime implies one factor is prime,' which would ban Pair 1. What would make the claim true? A different definition, such as 'at least one is prime.' Coprimality is about shared primes, not about either number being prime. $9$ and $4$ are another composite coprime pair; $15$ and $28$ already suffice.",
  ],
  "math-1-90": [
    "K cancelled $2$ days before renewal. The early branch needs $d\\ge 3$; here $2<3$, so K is in the late branch. Late branch: the subscription still renews and a charge applies. Usage $15\\%$ is irrelevant to whether it renews; usage is consulted only for the later refund test. The recovered branch is late, so renewal holds. Letter B will ask about the refund, a different gate.",
    "K cancelled $2$ days out, so $d<3$ and the late branch applies. A partial refund is issued if and only if $u<10\\%$. K used $15\\%$ of the service, and $15<10$ is false. The biconditional therefore withholds the refund. The recovered usage test fails. Near-misses do not count: $15\\%$ is not below $10\\%$. Letter C will drop usage to $5\\%$ and open the refund. This letter is K's actual $15\\%$.",
    "K still cancelled $2$ days out, so $d<3$ and the late branch still applies. Change only the usage to $5\\%$. Then $5\\%<10\\%$ holds, so the refund side of that biconditional opens. The recovered counterfactual keeps the late branch and flips only $u$. Timing $d=2$ is unchanged, so renewal still happens, letter A, and the refund now happens as well. Low usage is necessary and sufficient for the refund inside the late branch, not a replacement for timing.",
    "Change only the timing to $4$ days: $4\\ge 3$, so K moves into the early branch. Early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch. The recovered early branch ignores $u$. Usage is nested inside late cancellation. An early cancel never consults it. Letter E will claim the usage test applies regardless of timing; this letter is the picture that it does not.",
    "The $10\\%$ usage test is written only in the late-cancellation paragraph ($d<3$). If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question. The recovered usage test is nested, not global. Claiming it applies regardless of how many days before renewal the subscriber cancels reads a nested biconditional as a standing duty. Letter D already moved K to $d=4$ and found usage irrelevant. This letter is that nesting in general language. What would make usage global? Writing the $10\\%$ test outside both branches. The stem wrote it only in the late branch.",
  ],
};

for (const t of arr) {
  if (!OV[t.id] || !EX[t.id]) throw new Error("missing " + t.id);
  t.solution_overview = OV[t.id];
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, EX[t.id][i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
  for (const L of t.tactical_explanations) {
    if (L.includes("\u2014") || L.includes("${")) throw new Error(t.id + " bad char");
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
