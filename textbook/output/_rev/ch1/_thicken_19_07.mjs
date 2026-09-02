import fs from "node:fs";
import { wordCount } from "./_expand_lib.mjs";

const file = new URL("./19_07.json", import.meta.url);
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const extra = {
  "math-1-41": [
    `The $12$ bilingual students are the reason $34+28$ is illegal as a union count. Inclusion-exclusion is not optional decoration; it is the only way to count people once. A solver who treated the two courses as disjoint would have reported $62$ and missed the claim.\n\nThe recovered $50$ is also $22+12+16$, the three playing regions. That rebuild is extra arithmetic that does not repeat the overview's $34+28-12$ display. Both routes agree, which is how we know the $50$ is not a mis-subtraction.`,
    `Spanish-only is not "Spanish minus French as course sizes." The $12$ shared students are inside the $34$, so they have to come off the $34$, not off a comparison of $34$ with $28$.\n\nIf the overlap had been $0$, Spanish-only would have been $34$. The stem's $12$ common students are why it is $22$. A solver who reported $34$ would have ignored the overlap entirely.`,
    `Neither-language is a leftover, so it lives outside the union. The extra step is $60-50$, using the recovered union, not a new inclusion-exclusion.\n\nA solver who computed $60-34=26$ and stopped would have treated French as invisible. A solver who computed $60-28=32$ would have treated Spanish as invisible. Both headlines have to leave before the leftover is named, and the overlap has to be restored so it is not subtracted twice.`,
    `Think of the $50$ union as a box and the $12$ overlap as a box inside it. An inner box cannot have more members than the outer box. The claimed inequality asks the inner box to outgrow the outer one.\n\nEven in the extreme where every French student also takes Spanish, the overlap would be $\\min(34,28)=28$, and the union would be $34$, still $28<34$. No rearrangement of these headlines produces $|A\\cap B|>|A\\cup B|$.\n\nA solver who compared $12$ with $10$ (the neither-count) and thought "overlap beats leftover, so overlap is huge" would have been comparing the wrong pair. Huge relative to $10$ is not huge relative to $50$.`,
    `French-only $16$ plus Spanish-only $22$ plus both $12$ is $50$, matching the recovered union. That rebuild uses the peel this letter names, so it is extra arithmetic rather than a second inclusion-exclusion.\n\nA solver who reported $28$ for French-only would have kept the bilingual students in the "only" pile. They are not only-French; they are both.`,
  ],
  "math-1-42": [
    `The product-rule habit of adding $20+18$ is the gym version of double-counting. Five people used both, so they appear in both headlines. The recovered $33$ is the count of distinct members, not the count of memberships.\n\nA solver who reported $38$ would have counted those five people twice. A solver who reported $15$ would have been naming pool-only, a different region.`,
    `Pool-only $15$ is the pool headline after the five "both" members leave. If the sauna overlap had been $8$ instead of $5$, this count would be $12$, not $15$. Against the given $5$, it is $15$.\n\nA solver who reported $20-18=2$ would have compared headlines. Headline comparison is not a peel.`,
    `The leftover $17$ is membership minus the recovered union $33$. It is not $50-20-18$. That last arithmetic subtracts the five "both" members twice and overshoots into a negative before anyone restores them.\n\nThe four-region total $15+5+13+17=50$ is extra arithmetic confirming the leftover. If the leftover had been $12$, those four numbers would overshoot or undershoot $50$.`,
    `Five people sit in both facilities. Thirty-three people sit in at least one. Five cannot exceed thirty-three. The claimed inequality is a containment error dressed as a size comparison.\n\nA solver who thought "both is a stricter requirement, so maybe it is a larger set" would have mixed strictness of membership tests with size. Stricter tests produce smaller sets, or equal sets, never larger ones.\n\nEven saturating the overlap at $\\min(20,18)=18$ still leaves $18$ below the union, which would then be $20$. The inequality never flips.`,
    `Sauna-only $13$ is $18-5$, the sauna headline after the overlap leaves. Mixing this $13$ with the neither-count $17$ is the usual swap of the two leftovers on the sauna side.\n\nA solver who reported $18$ would have kept the five "both" members in the "only" pile. They used the pool as well.`,
  ],
  "math-1-43": [
    `The $+3$ at the end is easy to drop. Pairwise subtractions remove the triple group once too often, because those $3$ people sit in every pair. Putting them back is how $50$ becomes the recovered $53$.\n\nA solver who reported $75$ never left the raw sum. A solver who reported $50$ stopped one correction too soon.`,
    `The triple group is not a bonus pile sitting beside the pairs. It is already inside $|A\\cap B|$, $|A\\cap C|$, and $|B\\cap C|$. That nested containment is why the last $+3$ exists in the formula.\n\nA solver who drew the triple as a fourth disjoint island would have overcounted the union by $3$.`,
    `Exact-pair regions are pairwise totals minus the triple. The extra $10-3=7$ is this letter's own arithmetic. The overview recovered the pairwise $10$ and the triple $3$; this letter peels them.\n\nA solver who left the $10$ untouched would have been answering "at least photography and hiking," which still includes the three cooks.`,
    `A subset cannot outgrow any set that contains it. The triple is a subset of each pair, so $3$ cannot exceed $10$, $8$, or $7$. The min of those three pairwise sizes is $7$, and $3\\le 7$.\n\nA solver who compared $3$ with $53$ would have used the union, which is the wrong comparison even though $3\\le 53$ happens to hold.`,
    `The raw sum $75$ counts some people twice and the triple group three times. The union counts each person once, so it must be smaller whenever overlaps exist. Here they do: three positive pairwise totals.\n\nNet correction: subtract $10+8+7=25$, add $3$, a decrease of $22$. Nothing in that arithmetic can push $53$ above $75$. The claimed inequality is the raw sum and the union with their roles reversed.`,
  ],
  "math-1-44": [
    `Seven is the standard odd prime used to test "and" versus "or." Both properties would require an even prime other than the topic's $7$, and $7$ is not even. The recovered $P\\land Q$ is the false row T/F.\n\nA solver who knew $2$ is even and prime would have been answering a different question about $2$, not about $7$.`,
    `Inclusive or is the T/F row: true on the prime side. Exclusive or would demand "prime or even but not both," which would reject this row because prime holds. Mathematics uses inclusive or unless told otherwise.\n\nA solver who wanted $7$ to be even as well would have been running letter A's conjunction.`,
    `"Not both" is the negation of an "and." It is true whenever at least one half fails. Here the even half fails, so "not both" holds. It would also hold if $7$ failed to be prime, and it would fail only if $7$ were both.\n\nDe Morgan's or-of-negations, "not prime or not even," has a true second disjunct $\\neg Q$. Same truth value, different shape from "neither."`,
    `"Neither" is the harsher sentence: not prime and not even. Seven is prime, so "neither" is already dead. Letter C's "not both" survived on the even failure alone; "neither" needs both failures.\n\nA solver who treated De Morgan as "keep the and when you negate" would have identified letter C with letter D. They are different rows: C is true, D is false.`,
    `Negating an or produces an and of negations. Because $7$ is prime, $\\neg P$ is false, so the and of negations is false. This letter is letter D in other clothes.\n\nA solver who negated $P\\lor Q$ by writing "not prime or not even" would have dropped a negation and landed on De Morgan's form of letter C, which is true. The quoted sentence keeps the outer "it is not true that," which is the full $\\neg(P\\lor Q)$.`,
  ],
  "math-1-45": [
    `The argument is local to each prime $p>2$: evenness would introduce the extra divisor $2$, so primality would fail. The only even prime is excluded by the domain. That is why the universal holds.\n\nWithout $p>2$ the same argument would fail at $2$, which is prime and even. The restriction is doing real work.`,
    `Counterexamples have to be members of the domain. $2$ fails the membership test $p>2$, so it is not available as a counterexample, however even it is.\n\nA genuine counterexample would be an even prime strictly larger than $2$. Euclid's observation that $2$ is the unique even prime is why none exists. Pointing at $2$ is pointing at a point the sentence already carved out.`,
    `Formation and truth are separate. The quoted existential is the correctly formed negation, and because the original is true the existential is false. Chip-style thinking: you still write "there exists a failing $p>2$," even when inspection later finds none.\n\nA solver who wrote "there exists an even prime" without $p>2$ would have a true sentence that is not this negation.`,
    `$9$ is odd, greater than $2$, and composite. That single sample kills the converse. The original arrow never claimed that oddness produces primality; it claimed that primality (above $2$) produces oddness.\n\n$15=3\\times 5$ and $21=3\\times 7$ are further composite odds. One is enough. A solver who tested only primes would never have seen the converse fail.`,
    `Infinite minus one is infinite. Euclid's list $2,3,5,7,\\ldots$ remains infinite after deleting $2$. The primes greater than $2$ are exactly that tail.\n\nA solver who thought "the statement is about a restricted set, so maybe it is finite" would have confused a restriction with a bound. $p>2$ removes one prime, not all but finitely many.`,
  ],
  "math-1-46": [
    `Maria is sitting in Advanced right now. Rule (1) is an "only if" from that enrolment back to Intermediate. Modus ponens is the whole content: the "if" fired, so the "then" is in hand.\n\nA solver who waited for a grade sheet would have been answering letter E. This letter is pass/fail, and "passed Intermediate" is forced.`,
    `Two arrows fire in sequence. Advanced forces Intermediate by (1); Intermediate forces Principles by (2). Maria's current enrolment is the spark at the left end.\n\nA solver who applied (2) without (1) would have needed an Intermediate enrolment the stem does not state directly. The stem states Advanced; (1) supplies Intermediate; (2) then supplies Principles.`,
    `Necessary is the head of the arrow. Composing $A\\Rightarrow I\\Rightarrow P$ puts Principles at the far head, so Principles is necessary for Advanced. Maria cannot be in Advanced unless Principles was passed, even though the stem never wrote that composed sentence in one line.\n\nA solver who wanted Principles to enrol her in Advanced would have been reading sufficient, letter D.`,
    `Sufficient would let Principles alone push Maria into Advanced. The chain has a missing middle: Intermediate. A student with Principles and without Intermediate is allowed by both numbered rules and is not in Advanced.\n\nThat student is the counter-model. The recovered arrows do not reverse. Swapping "necessary" and "sufficient" is the whole error, and it is the error this chapter repeats on purpose.`,
    `"Passed" is a binary predicate in these rules. No numerical mark appears. Inferring a perfect grade from an enrolment is padding.\n\nA solver who wrote "she must have done well, otherwise she would not be in Advanced" would have imported a story about standards the rules never mention. The rules mention passing, and passing is all that follows.`,
  ],
  "math-1-47": [
    `The even primes less than $15$ are just $2$. Intersection with $E$ therefore cannot contain $4$ or $6$, which are even but not prime, and cannot contain $3$, which is prime but not even.\n\nThe recovered singleton $\\{2\\}$ is that unique overlap. Padding it is the usual error.`,
    `Deleting $2$ from $P$ is the whole difference. The five leftover primes are all odd, so they miss $E$ and stay. A solver who also deleted $3$ because "$3$ is next to $2$" would have treated nearness as evenness.\n\nThe recovered roster $\\{3,5,7,11,13\\}$ is $P$ with the overlap removed, not $P$ with the small numbers removed.`,
    `Universals fail at one interior point. $2$ is in $P$ and even, so "every member of $P$ is odd" is false. The other five members being odd is a distraction, which is why the sentence looks almost true.\n\nLetter D repairs it by excluding $2$. This letter does not exclude $2$. One exception is fatal.`,
    `The extra $x\\ne 2$ takes $2$ out of the firing line. On the remaining five primes the conclusion "odd" holds, so the implication has no false row. Restricting a domain can save a universal; it is not cheating, it is a different sentence.\n\nA solver who thought the extra hypothesis was idle would have kept letter C's counterexample. That counterexample is exactly what $x\\ne 2$ removes.`,
    `Subsethood needs every member of $P$ to sit in $E$. Five odd primes miss $E$. One miss, $3$, already kills it; five misses are five too many.\n\nA solver who checked only the overlap $\\{2\\}$ would have verified a different claim, $P\\cap E\\subseteq E$, which is always true and is not $P\\subseteq E$.`,
  ],
  "math-1-48": [
    `A number larger than $10$ is automatically larger than $5$, because $10$ itself is larger than $5$. Sufficient means that automatic push. No extra hypothesis is required.\n\nA solver who wanted a number between $5$ and $10$ to witness a failure of this direction would have been testing the converse.`,
    `Necessary would put $x>10$ on the required side of $x>5$. The strip $(5,10]$ is full of counterexamples. $7$ is the named one; $6$, $8$, $9$, and $10$ work the same way.\n\nStrength and necessity run opposite to a common habit: the stricter threshold is sufficient for the weaker one, not necessary for it. $x>10$ is the stricter test.`,
    `Reading the same true arrow from the head: $x>5$ is required for $x>10$, because nothing past $10$ can fail to be past $5$. That is letter A's arrow with the vocabulary word "necessary" instead of "sufficient."\n\nOne arrow, two true English sentences. The false English is letter B, which puts "necessary" on the tail.`,
    `Equivalence would need $x>10$ whenever $x>5$. The strip $(5,10]$ is exactly the set of points where $x>5$ holds and $x>10$ fails. Nonempty disagreement means the two predicates are not the same.\n\nA solver who treated them as "both large" would have ignored that strip. Large is not a single predicate here; it has two cutoffs.`,
    `$x=7$ is inside $(5,10]$. Hypothesis of the converse true, conclusion false. That is a counterexample by definition.\n\n$x=12$ would satisfy both sides and would not refute anything. $x=4$ would satisfy neither and would not refute anything. The witness has to sit in the strip, and $7$ does.`,
  ],
  "math-1-49": [
    `P's two numbers both clear their bars: $750$ is at least $700$, and $35\\%$ is below $40\\%$. Conjunction of two truths is true. The letter asks whether P satisfies $R$, not whether the bank must say yes.\n\nA solver who answered "we cannot be sure P satisfies $R$" would have been hedging about approval. $R$ is a file check, and P's file passes it.`,
    `"Only if" is $L\\Rightarrow R$. P has $R$, which is the conclusion of that arrow, not the hypothesis. Affirming the conclusion does not yield the hypothesis. The bank can still refuse for reasons the stem never listed.\n\nThis is the same skeleton as a later memo about marketing and sales: $P\\Rightarrow Q$, $Q$, therefore $P$ is invalid. Here $L\\Rightarrow R$, $R$, therefore $L$ is the same invalid step.`,
    `Q's ratio $45\\%$ is not below $40\\%$. Conjunction dies at one false conjunct, even though the score $720$ clears $700$. "Both required conditions" means both, not "the score one."\n\nA solver who let the score override the ratio would have been running an or. The recovered $R$ is an and.`,
    `Failing a necessary condition refuses the loan. That is the contrapositive, and it is the one direction "only if" really licenses. Q fails $R$, so Q is not approved.\n\nA solver who thought "maybe the bank will waive the ratio" would have been inventing a waiver the stem does not grant. The stated rule has no waiver.`,
    `A low ratio without a high enough score already fails $R$. A low ratio with a high score still only makes $R$ true, which is necessary, not sufficient. Either way, "ratio below $40\\%$ guarantees approval" is false.\n\nApplicant Q is the wrong witness for this letter (Q's ratio is high). The witness is a low-score, low-ratio applicant, or even P, whose full $R$ still does not force $L$.`,
  ],
  "math-1-50": [
    `The quoted existential is the mirror of the universal, with $x^{2}\\ge 0$ flipped to $x^{2}<0$. No real square is negative, so the existential is false, but the letter asked whether the negation was correctly formed, not whether it was true.\n\nA solver who wrote $\\exists x\\,(x^{2}\\le 0)$ would have included $0$, which does not negate $\\ge 0$. The strict flip is required.`,
    `$x^{2}=-1$ has solutions in $\\mathbb C$, not in $\\mathbb R$. The universe is $\\mathbb R$, so the existence claim is false. Checking $0$, $1$, and $-1$ already shows squares landing on $0$ or $1$, never $-1$.\n\nA solver who left the universe would have answered a different course's question.`,
    `Denying "some $x>100$" means every $x$ satisfies the complementary inequality. Completing $>$ gives $\\le$, including $100$. A solver who wrote $x<100$ would have left a hole at $100$, and $100$ is a real number in the universe.\n\nThe recovered negation is a universal with a closed inequality.`,
    `For each positive $x$, pick $y=x+1$. Then $y>x$ holds, and $y$ is allowed to depend on $x$ because $\\exists y$ sits inside $\\forall x$. That recipe is extra arithmetic this letter is allowed: one new $y$ per $x$, not a scan the overview already displayed as a closed form.\n\nA solver who wanted a single $y$ for all $x$ would have been reading letter E.`,
    `A single champion $y$ would have to exceed $1$, $2$, $100$, and every larger positive. No real number does that. For any candidate $y$, the extra arithmetic is $x=\\max(y+1,1)$, a positive real larger than $y$.\n\nThat is the order trap: $\\forall x\\,\\exists y$ is "there is always a bigger," which is true; $\\exists y\\,\\forall x$ is "there is a biggest," which is false on the positive reals.`,
  ],
};

function splice(body, add) {
  const closeTrue = "so the statement is True.";
  const closeFalse = "so the statement is False.";
  const close = body.includes(closeTrue) ? closeTrue : closeFalse;
  if (!add) return body;
  return body.replace(close, `${add}\n\n${close}`);
}

for (const t of arr) {
  const ex = extra[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((s, i) => splice(s, ex[i]));
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  const ws = t.tactical_explanations.map(wordCount);
  console.log(t.id, ws.join(", "), "min", Math.min(...ws), "max", Math.max(...ws));
}
