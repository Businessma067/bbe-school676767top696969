import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "08_17.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const OV = {
  "math-1-51": `**Part 1.** The setup.

Let $D$ mean diagnosed with condition X, and let $S$ mean the patient shows symptom A and symptom B.

**Part 2.** The operations.

"Diagnosed only if $S$" is the arrow $D\\Rightarrow S$: no diagnosis without both symptoms, which makes $S$ necessary. The doctor also says both symptoms do not guarantee the diagnosis, so the reverse arrow $S\\Rightarrow D$ is refused: $S$ is necessary but not sufficient. The contrapositive $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis the moment either symptom is missing.

**Part 3.** The scans.

Patient R holds the diagnosis, so both symptoms must be present. Patient S has A but not B, so $S$ is false and the diagnosis is blocked. Both symptoms without diagnosis is allowed while other conditions are still being excluded.`,
  "math-1-52": `**Part 1.** The setup.

The universe is the finite set $\\{1,2,\\ldots,20\\}$.

**Part 2.** The operations.

An existential sentence needs one working example. A universal sentence is destroyed by one counterexample. An implication $P\\Rightarrow Q$ fails only where $P$ holds and $Q$ fails, so its negation is an existential $P\\land\\neg Q$.

**Part 3.** The scans.

$15$ sits in the range and is divisible by $3$ and $5$. Every multiple of $4$ in the range is even. $x=2$ is even and not a multiple of $4$. The negation of "all primes are odd" is "some prime is even," and $2$ is that even prime in the range.`,
  "math-1-53": `**Part 1.** The setup.

The club rule is a biconditional: a person is a member if and only if they are not on the banned list. The banned list is the people with $3$ or more rule violations. Writing $v$ for the violation count, banned means $v\\ge 3$, and membership is the exact opposite.

**Part 2.** The operations.

Because the two conditions are exact opposites, the two lists never overlap and never leave a gap. For each integer $v$, the test $v\\ge 3$ returns a definite yes or no.

**Part 3.** The scans.

Person T has $v=2$, so not banned, hence a member. Person U has $v=4$, so banned, hence not a member. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. Exactly $3$ is banned.`,
  "math-1-54": `**Part 1.** The setup.

A universal claim $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. One counterexample is a complete disproof. The reverse does not work: a pile of confirming examples never proves a universal.

**Part 2.** The operations.

A contradiction proof of an implication assumes the unique failure case $P\\land\\neg Q$ and derives an impossibility. To prove a claim by contradiction, assume its negation, not the claim itself.

**Part 3.** The scans.

The number $2$ is prime and even, so it disproves "all primes are odd." A contradiction proof of "$\\sqrt{2}$ is irrational" assumes $\\sqrt{2}$ is rational, not irrational. The odd prime $3$ fits "all primes are odd" and still leaves $2$ untested.`,
  "math-1-55": `**Part 1.** The setup.

The organizer's promise is a conditional: it fires only when it rains. Write $P$ for "it rains" and $Q$ for "the picnic is cancelled", so the rule is $P\\Rightarrow Q$.

**Part 2.** The operations.

A conditional makes no promise at all when its "if" part is false. The only way the rule can be broken is $\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$. The contrapositive always agrees with the original. The converse and inverse do not.

**Part 3.** The scans.

On the venue-conflict day it did not rain ($P$ false) but the picnic was cancelled ($Q$ true). The inverse breaks; the original promised nothing, because it never rained, so it comes through untouched.`,
  "math-1-56": `**Part 1.** The setup.

With $|X|=40$, $|Y|=35$ and $|X\\cap Y|=15$, the survey splits into $15$ both-buyers, $25$ who bought only X, and $20$ who bought only Y.

**Part 2.** The operations.

Inclusive "or" means at least one, so both-buyers stay inside. Exclusive "or" keeps exactly one. A biconditional is true when both parts agree and false the moment their truth values differ.

**Part 3.** The scans.

Inclusive union: $|X\\cup Y|=40+35-15=60$. Exclusive count: $25+20=45$. The mixed row of a biconditional, one true and one false, has at least one true part and a false biconditional.`,
  "math-1-57": `**Part 1.** The setup.

Passing is governed by an and: attendance of at least $80\\%$ and a final score of at least $50$. Writing $A$ and $F$ for those two conditions, pass holds exactly when $A\\land F$ holds.

**Part 2.** The operations.

The words "if and only if" mean the list is complete. And $\\land$ is unforgiving: one false part sinks the whole condition. The rule never adds the two numbers together.

**Part 3.** The scans.

Student K: $85\\%$ attendance so $A$ true; $48$ on the final so $F$ false; K does not pass. Student L: $75\\%$ attendance so $A$ false; $90$ on the final so $F$ true; L does not pass. A student at $(80\\%,50)$ passes while a student at $(79\\%,100)$ fails.`,
  "math-1-58": `**Part 1.** The setup.

Let $S$ mean the item is on sale and $O$ mean the item is out of stock. The filter displays an item when $\\neg(S\\lor O)$ is true.

**Part 2.** The operations.

De Morgan's law turns a negated OR into an AND of the two negations: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$. The connective flips as the NOT moves in. Keeping the OR would be the wrong rewrite.

**Part 3.** The scans.

M is on sale, so $\\neg S$ is false, hidden. N is out of stock, so $\\neg O$ is false, hidden. K is neither on sale nor out of stock, so both halves hold, displayed.`,
  "math-1-59": `**Part 1.** The setup.

$P$: a country's inflation rate exceeds $10\\%$. $Q$: the central bank raises interest rates. The given rule is $P\\Rightarrow Q$.

**Part 2.** The operations.

High inflation forces a rate rise. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always carries the same truth value. The converse $Q\\Rightarrow P$ is a different claim. In $P\\Rightarrow Q$, $P$ is sufficient for $Q$ and $Q$ is necessary for $P$.

**Part 3.** The scans.

A bank may raise rates at $4\\%$ inflation to defend a sliding currency, which leaves the rule intact and the converse in ruins. Observing a rate rise and inferring high inflation is affirming the consequent.`,
  "math-1-60": `**Part 1.** The setup.

A biconditional $A\\Leftrightarrow B$ is a two-way link: $A$ and $B$ must always carry the same truth value. Here two links are given, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$, so the three propositions are welded into one chain $P\\Leftrightarrow Q\\Leftrightarrow R$, and the extra fact that $P$ is true travels along it.

**Part 2.** The operations.

A true $P$ forces $Q$ true through the first link, and a true $Q$ forces $R$ true through the second. The unstated link $P\\Leftrightarrow R$ holds as well. Pulling the chain from the far end works just as smoothly.

**Part 3.** The scans.

$P$ true forces $Q$ true and $R$ true. A false $R$ would drag $Q$ and then $P$ down. On its own, $P\\Leftrightarrow R$ leaves $Q$ free: $P$ and $R$ both true with $Q$ false satisfies the end link without the middle.`,
};

const EX = {
  "math-1-51": [
    "Necessary means the diagnosis cannot occur without both symptoms. Patient R is already diagnosed, so both symptoms had to be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks $D\\Rightarrow S$. The recovered necessary condition does not allow that gap. What would make the claim true? A different rule, 'diagnosed if A,' dropping B. The doctor wrote both.",
    "Patient S is missing B, so the conjunction $S$ is false. The recovered contrapositive then blocks the diagnosis. Missing either half of an 'and' is enough. Being close to having B is not having B. What would let S be diagnosed? Exhibiting B as well, and then still surviving the other exclusions. Without B the first gate never opens.",
    "Sufficient would be $S\\Rightarrow D$: both symptoms force the diagnosis. The doctor explicitly refuses that reverse arrow. Other conditions must still be ruled out. The recovered rule is necessary and not sufficient. Naming both symptoms as sufficient is the classic swap of those two words. What would make sufficiency true? Dropping the 'however' clause. The stem keeps it.",
    "No A means the conjunction $S$ is false, regardless of B. The recovered contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks X. An 'and' is destroyed by either half. This letter is the missing-A half; letter B was the missing-B half. Same gate, other side.",
    "The doctor allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates necessary from sufficient. The recovered rule does not force diagnosis from the two symptoms alone. Claiming it is impossible is claiming sufficiency, which the stem refused. A patient can show A and B and still wait on other tests.",
  ],
  "math-1-52": [
    "One witness settles an existential. The recovered witness $15$ is in the range and divisible by $15$, hence by both $3$ and $5$. No other example is required. A universal would need every $x$; this letter is existential.",
    "Every multiple of four is even, in this range and in general: $4k=2(2k)$. The recovered list $\\{4,8,12,16,20\\}$ are all even. The implication holds everywhere in the universe. Direction of the arrow is the next letter's fight.",
    "The flipped implication breaks at $x=2$: even, not a multiple of $4$. One counterexample inside the range kills a universal. The recovered $2$ is that witness. Direction of the arrow is the whole issue. Letter B's true direction does not grant this reverse. What would make the reverse true? A universe with no even non-multiple of $4$, for instance only multiples of $4$. This universe contains $2,6,10,14,18$ as well.",
    "Negating a universal implication produces an existential failure case: some prime in the range is even. The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$. The recovered form is $\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$, not 'no primes are odd' and not 'all primes are even.'",
    "The even prime $2$ sits in the range. Divisors $1$ and $2$ only, and even. So the negated statement is true in this universe. The recovered witness is $2$. Without $2$ in the universe the existential negation would fail; with $2$ it holds. This letter asks whether that negation is true, not merely whether it is the correct negation, which was letter D.",
  ],
  "math-1-53": [
    "Banned means $v\\ge 3$. Person T has $2$, so $2\\ge 3$ fails. The recovered biconditional then forces membership. Not banned is exactly member. There is no third status. T is a member because the count sits below the cutoff, not because of an unstated appeal.",
    "Person U has $4$, and $4\\ge 3$, so U is banned. The recovered biconditional makes banned the exact opposite of member, so U is not a member. A high violation count cannot be rescued by some other unstated factor. The rule named only the cutoff.",
    "Member iff not banned means the two lists never overlap and never leave a gap. The recovered picture is complementary sets: every person is in exactly one of them. That is the definition of complementary, not a coincidence of T and U.",
    "Three or more includes $3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. Once banned means $v\\ge 3$, the count $v=3$ is not discretionary. The false claim treats $3$ as a maybe. The recovered rule has no maybe. What would make $v=3$ ambiguous? A different cutoff, such as 'more than $3$,' or an extra unstated factor. The stem wrote $3$ or more, and that is a closed test. Exactly $3$ is on the banned side, not on the fence.",
    "For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided. The recovered rule is a complete partition of the possible counts. Existence of an ambiguous $v$ would need a hole in that partition. There is no hole. Letter D already checked the boundary $v=3$ and found it banned, not ambiguous.",
  ],
  "math-1-54": [
    "A universal dies at one counterexample. Nothing further is required. The recovered method is that one-witness disproof, not a need to check every prime. Confirming examples never do this job; that is letter E.",
    "A counterexample must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed. The recovered witness is $2$. Some other even composite would fail the prime half and would not be a counterexample.",
    "An implication fails only on $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility. The description in the statement is that method. Opening with the conclusion instead is letter D's mistake, a different method.",
    "To prove $\\sqrt{2}$ is irrational by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=a/b$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite. The recovered legal opening is the rational case. Opening with the target itself leaves nothing to contradict. That is not a contradiction proof. It is restating the claim and stopping. What would make the described opening legal? A different target, such as proving $\\sqrt{2}$ is rational, whose negation is irrationality. The target here is irrationality, so the opening must be rationality.",
    "One confirming example never proves a universal. The odd prime $3$ fits 'all primes are odd' and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample. The recovered lesson is the reverse of letter A: one counterexample kills a universal, one success does not prove one. Existential claims are the ones settled by a single success.",
  ],
  "math-1-55": [
    "An implication is false only in the row $P$ true, $Q$ false. The quoted negation is rain and an uncancelled picnic, that unique failure case. The recovered $\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$ is that row, not another if-then rule, and not the inverse.",
    "The converse $Q\\Rightarrow P$ reads the rule backwards. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, while the converse fails. The organizer never promised that rain is the only cancelling cause. The recovered test day is already a counterexample to the converse. Equivalence would need both arrows. Only one is given.",
    "The inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Inverse pairs with converse, not with the original. The recovered table already marks inverse as not following from the rule. Equivalence with the original is a false figure.",
    "Assign the venue-conflict day: rain false, cancelled true. The inverse demanded 'no rain, so no cancellation' and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise. The recovered test day is built to separate those two. This letter is that separation, not a new assignment of truth values.",
    "Swap and negate: $\\neg Q\\Rightarrow\\neg P$, if the picnic was not cancelled, then it did not rain. That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free with it. The recovered table marks that row yes. Converse and inverse do not come free; this one does.",
  ],
  "math-1-56": [
    "Inclusive or means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy at least one and stay inside the count. Exclusive or would drop those $15$; mathematical or does not. The recovered inclusive reading keeps them. This letter is the meaning of 'or,' not yet the count $60$.",
    "Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once. The recovered inclusive union is $60$. That $60$ includes the $15$, matching letter A's reading. Reporting $75$ forgets the subtraction. Reporting $45$ answers the exclusive count, the next letter.",
    "Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so $25+20=45$. Equivalently, drop the both-buyers from the inclusive union: $60-15=45$. The recovered XOR count is $45$. This is a different connective from letter B, and the two recovered counts $60$ and $45$ must not be swapped.",
    "The four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. Always the same truth value is that description. The recovered biconditional is agreement, not 'at least one true,' which is letter E's false figure.",
    "At least one true is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there. The recovered connective is agreement of truth values. Naming it as a disguised or is a false figure. What would make 'at least one true' the right condition? An inclusive or, letter A, not a biconditional. The four-row table already shows two agreement rows and two disagreement rows, and only agreement makes $\\Leftrightarrow$ true.",
  ],
  "math-1-57": [
    "K cleared attendance and missed the exam cutoff. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$. The recovered $A\\land F$ is false for K. A high attendance cannot repair a $48$. Thresholds do not average.",
    "L's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The recovered conjunction never lets the strong half rescue the weak half, so L does not pass. This is the other missing half from letter A. Compensation is letter C, and it fails for the same reason.",
    "Compensation would let a high exam score repair low attendance. L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. Exam points cannot repair attendance. The recovered rule checks two thresholds, not a weighted sum. What would make compensation true? A different rule that averages the two numbers. The stem wrote an and.",
    "A score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses. The recovered cutoff is $50$, not 'close to $50$.' This letter is the exam half of the and; letter A already applied it to K.",
    "Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen. The recovered rule is not an average. A student who 'did better overall' can still fail one gate. That is the point of an and of two cutoffs, not a bug in the wording.",
  ],
  "math-1-58": [
    "The filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item. The recovered AND hides M. Letter E's K is the item that passes both halves.",
    "Item N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough. The recovered filter is both halves, not one. This is M's story on the other conjunct.",
    "De Morgan requires the connective to flip: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent. The recovered rewrite is the AND. Keeping the OR is a false figure: the NOT moved in and the connective stayed, which is the standard De Morgan slip. What would make the OR form equivalent? Nothing; it is a different connective. Item M is the witness that they disagree.",
    "Push the NOT inside with the connective flip and you get not on sale and not out of stock, i.e. neither on sale nor out of stock. The recovered De Morgan identity is that AND. This letter is the correct rewrite; letter C was the incorrect one. They are not interchangeable.",
    "Item K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The recovered filter displays K. M failed the first half, N failed the second, K passes both. That is the neither-nor reading of the AND. Displaying K is not a licence to display M or N.",
  ],
  "math-1-59": [
    "From $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. Not above $10$ and at most $10$ are the same cutoff. The recovered contrapositive is that rewriting, which always agrees with the original.",
    "The converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above $10\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched (because $P$ is false), while the converse fails. The recovered counter-scenario separates converse from original. Equivalence would need both arrows. Only one is given. Necessary versus sufficient in the later letters is this same swap.",
    "$P$ is sufficient for $Q$ means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$. The recovered reading is sufficiency of high inflation for a rise, not necessity. Necessity would be the converse, letter D.",
    "$P$ is necessary for $Q$ would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The rule does not force high inflation whenever rates rise. The recovered labels sit at opposite ends of the arrow. Swapping necessary and sufficient is the same error as treating the converse as the original. A $4\\%$ currency-defence rise is again a picture of $Q$ without $P$.",
    "Observing a rate rise ($Q$ true) and inferring inflation above $10\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. Walking backwards along the arrow is the classic trap. The recovered original does not licence that reverse step. A valid conclusion from a rate rise would need the converse, which letter B already refused. The $4\\%$ defence rise is a concrete case where $Q$ holds and $P$ fails, so the inference is not only invalid in form but false in that picture.",
  ],
  "math-1-60": [
    "The first link is $P\\Leftrightarrow Q$ and $P$ is given true. Agreement forbids $Q$ from being false, so $Q$ is true. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$. The recovered chain carries truth from $P$ into $Q$. This letter is the first step; letter B is the second.",
    "The second link is $Q\\Leftrightarrow R$. From $P\\Leftrightarrow Q$ and $P$ true, $Q$ is true, so $R$ must be true as well. The extra fact that $P$ is true has now travelled the whole chain. The recovered $R$ is true. Skipping the middle and jumping to letter E's weaker end-link would leave $R$ unsettled; the given middle link settles it.",
    "If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value. The recovered chain forces that unstated link. It is weaker than the pair it came from, which is letter E's warning, but it does hold.",
    "Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false. The recovered chain pulls both ways. This letter is the far-end pull; letters A and B were the near-end push.",
    "Knowing only $P\\Leftrightarrow R$ does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free. The recovered derived link is weaker than the pair it came from. The given task has both middle links, which is why A through D hold, but this letter asks whether the end link alone would pin $Q$. It would not. A true-true pair at the ends with a false middle is the standard picture of that gap. What would pin $Q$? One of the original links involving $Q$, which this letter's hypothesis does not supply.",
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
