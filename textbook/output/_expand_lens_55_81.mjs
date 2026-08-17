import fs from "fs";

const path = "src/data/math-ch1-logic.ts";
let src = fs.readFileSync(path, "utf8");

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function append(uniqueClose, paragraph) {
  const n = src.split(uniqueClose).length - 1;
  if (n !== 1) {
    throw new Error(`match count ${n} for ${JSON.stringify(uniqueClose)}`);
  }
  if (!uniqueClose.endsWith('",')) {
    throw new Error(`ending must close a TS string: ${JSON.stringify(uniqueClose)}`);
  }
  const body = uniqueClose.slice(0, -2);
  const insert = body + "\\n\\n" + escapeTs(paragraph) + '",';
  src = src.replace(uniqueClose, insert);
}

// math-1-55 E
append(
  `comes free with it.**",`,
  `Start from the given sentence “If it rains, the picnic is cancelled.” Swap the two halves and negate each: “If the picnic was not cancelled, then it did not rain.” That is $\\neg Q \\Rightarrow \\neg P$, word for word the sentence in the claim, so the equivalence holds.`
);

// math-1-56 B
append(
  `**60 is right.**",`,
  `The survey gives $|X|=40$, $|Y|=35$, and $|X \\cap Y|=15$. The claim asks for the inclusive count of people who bought at least one of the two products. Inclusive union keeps the 15 both-buyers once: $40+35-15=60$. That is the figure claimed.`
);

// math-1-57 A
append(
  `$A \\\\land F$ collapses with it. **K does not pass.**",`,
  `The pass rule is $A \\land F$: attendance at least 80% and a final of at least 50. K's file is the pair $(85\\%, 48)$. Attendance clears the first gate, but $48<50$ fails the second. One false conjunct makes the whole condition false.`
);

// math-1-57 B
append(
  `**L does not pass either.**",`,
  `L's file is $(75\\%, 90)$. The same two gates apply: $75\\%<80\\%$ fails attendance, even though 90 clears the exam. The conjunction never lets the strong half rescue the weak half.`
);

// math-1-58 A
append(
  `**The filter hides M.**",`,
  `The filter displays an item only when $\\neg S \\land \\neg O$. Item M is on sale and in stock, so $S$ is true and $O$ is false. Then $\\neg S$ is already false, and a false half kills the AND.`
);

// math-1-58 B
append(
  `**N is hidden too.**",`,
  `Item N is not on sale and is out of stock: $S$ false, $O$ true. The filter still needs both $\\neg S$ and $\\neg O$. $\\neg O$ fails, so N stays hidden.`
);

// math-1-58 E
append(
  `shopper actually sees.**",`,
  `Item K is not on sale and is in stock: $S$ false, $O$ false. Both $\\neg S$ and $\\neg O$ hold, so $\\neg S \\land \\neg O$ is true and the filter displays K.`
);

// math-1-59 C
append(
  `**$P$ is a sufficient condition for $Q$.**",`,
  `The given rule is $P \\Rightarrow Q$: inflation above 10% forces a rate rise. “Sufficient” asks whether $P$ alone is enough to guarantee $Q$. That is exactly what the arrow asserts: once inflation exceeds 10%, the bank must raise rates.`
);

// math-1-60 A
append(
  `forbids $Q$ from differing from it. **$Q$ is true.**",`,
  `The data give $P \\Leftrightarrow Q$ and “$P$ is true.” A biconditional forbids the two sides from differing, so a true $P$ forces $Q$ true. The second proposition is true.`
);

// math-1-60 B
append(
  `**$R$ is true as well.**",`,
  `The second given link is $Q \\Leftrightarrow R$. With $Q$ already forced true, the same agreement rule now pins $R$. The third proposition is true as well.`
);

// math-1-61 C
append(
  `the same rule in different clothing.**",`,
  `The given unless-rule is $\\neg S \\Rightarrow C$. Rewrite an implication as an OR: $A \\Rightarrow B$ is $\\neg A \\lor B$, so $\\neg S \\Rightarrow C$ becomes $S \\lor C$. OR is symmetric, so $C \\lor S$ is the same formula.`
);

// math-1-62 A
append(
  `**P gets the discount.**",`,
  `The discount is $A \\land (D \\lor L)$. Rider P is 70 (so $A$ holds), has no disability ($D$ false), and earns \\$18,000 (so $L$ holds). The age gate opens and the income fills the bracket, so $A \\land (D \\lor L)$ is true. P qualifies.`
);

// math-1-63 B
append(
  `**The description is accurate.**",`,
  `The claim is $\\forall n$, so after the $n=1$ check you still need a step that covers every later integer. That step is: assume the formula at $n=k$, then prove it at $n=k+1$. The statement describes exactly that move.`
);

// math-1-63 E
append(
  `**The value checks out.**",`,
  `The claimed formula is $1+2+\\cdots+n=\\frac{n(n+1)}{2}$. Plug in the given $n=10$: $\\frac{10\\cdot 11}{2}=55$. That is the value stated, so the check holds.`
);

// math-1-64 D
append(
  `**A faithful rewording.**",`,
  `The original claim is $P \\Rightarrow Q$: if inflation increases, unemployment decreases. The sentence offered negates both halves and swaps them: “if unemployment does not decrease, then inflation does not increase.” That is $\\neg Q \\Rightarrow \\neg P$, the contrapositive of the original, so the two are equivalent.`
);

// math-1-65 A
append(
  `**Flight 305 is cancelled today.**",`,
  `The log gives $D \\Rightarrow C$ and today's observation that $D$ is true (Flight 202 is delayed). Modus ponens on that pair yields $C$. Flight 305 is cancelled today.`
);

// math-1-65 B
append(
  `**The ground crew works overtime today.**",`,
  `From A we already have $C$ true, and clue (2) is $C \\Rightarrow O$. The same rule fires again: cancellation forces overtime. The ground crew works overtime today.`
);

// math-1-66 E
append(
  `**The inference is valid.**",`,
  `The professor's claim is $P \\Rightarrow Q$. Its contrapositive is $\\neg Q \\Rightarrow \\neg P$: anyone who failed studied under 10 hours. The claim here starts from a known failure ($\\neg Q$) and asks whether $\\neg P$ follows. That is exactly the contrapositive, so the inference is valid.`
);

// math-1-67 A
append(
  `**The symbolisation is correct.**",`,
  `The clause says: if the contractor misses the deadline, a penalty applies. That is condition $F$ first, consequence $P$ second. “$F$ is sufficient for $P$” is the same arrow $F \\Rightarrow P$. The reading matches the signed clause.`
);

// math-1-68 B
append(
  `**N is eligible.**",`,
  `Eligibility is $G \\land (C \\lor W)$. Student N has GPA 3.6 (so $G$ holds), 45 credits (so $C$ fails), and a Dean's waiver (so $W$ holds). The GPA sits outside the bracket and is fine; the waiver fills the bracket in place of the missing credits. N is eligible.`
);

// math-1-72 B
append(
  `**One counterexample settles the matter.**",`,
  `The claim under attack is a universal one: “the sum of two irrationals is always irrational.” A $\\forall$ statement dies as soon as one pair fails. The pair $\\sqrt{2}+(-\\sqrt{2})=0$ is that failure, so the single counterexample is enough.`
);

// math-1-73 B
append(
  `**The lizard argument is sound.**",`,
  `The biology rule is $P \\Rightarrow Q$: fish live in water. The lizard argument starts from “does not live in water” ($\\neg Q$) and concludes “is not a fish” ($\\neg P$). That is the contrapositive $\\neg Q \\Rightarrow \\neg P$, which is equivalent to the given rule, so the argument is valid.`
);

// math-1-74 D
append(
  `**The policy does not guarantee this.**",`,
  `The policy is $P \\Rightarrow Q$: pay within 30 days and you get the discount. The inverse is $\\neg P \\Rightarrow \\neg Q$: pay late and you get nothing. The policy never speaks about late payers. A holiday promotion can still give a late payer the 5%, making $\\neg P$ true and $Q$ true, so the inverse fails while the policy stands.`
);

// math-1-75 D
append(
  `**Given the regulation, this must hold too.**",`,
  `The regulation is $P \\Rightarrow Q$: revenue above \\$1 million forces an audit. Swap and negate: “no audit, therefore revenue does not exceed \\$1 million.” That sentence is $\\neg Q \\Rightarrow \\neg P$, the contrapositive, so it is equivalent to the regulation and must hold with it.`
);

// math-1-76 B
append(
  `**No license.**",`,
  `The license needs $H \\land W \\land T$. Pilot B has 240 hours ($H$ false) but passed both the written exam and the practical test. Hours are necessary: $240<250$ already kills the conjunction, so B is not licensed.`
);

// math-1-76 E
append(
  `**Such a pilot exists.**",`,
  `The claim is existential: some pilot with more than 250 hours is still unlicensed. Pilot A's file is the witness: 300 hours, written passed, practical failed. $H$ is true and $T$ is false, so $H \\land W \\land T$ fails. That one file proves such a pilot exists.`
);

// math-1-79 A
append(
  `**The condition holds at $m = 4$.**",`,
  `The inner claim at $m=4$ asks for a positive integer $n$ with $4n=100$. Dividing gives $n=25$, and $25$ is a positive integer. Check: $4\\cdot 25=100$. So the statement holds at $m=4$.`
);

// math-1-80 A
append(
  `no reasoning required. **Dan is guilty.**",`,
  `The investigation lists four clues. Clue (3) is not an implication; it asserts outright that Dan is guilty. No other clue is needed to read that sentence. Dan is guilty.`
);

// math-1-81 B
append(
  `**Y is a liar.**",`,
  `From A, X is a truth-teller, so X's sentence “Y always lies” must itself be true. That sentence is $\\neg y$, so Y is a liar, not a truth-teller. The claim that Y tells the truth is false.`
);

fs.writeFileSync(path, src);
console.log("WROTE", path, "bytes", src.length);
