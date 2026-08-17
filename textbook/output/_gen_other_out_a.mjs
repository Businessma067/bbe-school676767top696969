import fs from "node:fs";

const IN = "textbook/output/_other_batch_a.json";
const OUT = "textbook/output/_other_out_a.json";
const items = JSON.parse(fs.readFileSync(IN, "utf8"));

// Each body is everything after the original first line; it starts with a newline
// so that `firstLine + "\n" + body` reproduces the blank-line header break.
const bodies = [];

bodies[0] = String.raw`
**Turn each rule into an interval**

The frost condition $T^2<16$ holds exactly when $-4<T<4$. Both boundaries fail, because $(-4)^2=4^2=16$ and $16$ is not *less* than $16$, so the frost set keeps both of its ends open:

$$A = (-4, 4)$$

The irrigation condition $T\ge-1$ allows $-1$ itself, so $B=[-1,\infty)$ with a closed left end.

**Where both rules hold at once**

A temperature must satisfy $-4<T<4$ *and* $T\ge-1$. Keep the tighter limit at each end: the lower limit becomes $-1$ (included), the upper limit stays $4$ (excluded).

$$A\cap B=[-1,4)$$

The left end is closed because $-1$ passes both rules, and the right end stays open because $4$ fails the frost rule.

**Where at least one rule holds**

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$; the two pieces overlap, so together they reach every temperature above $-4$, giving $A\cup B=(-4,\infty)$. Nothing at $-4$ or colder is covered.

**Outside A**

The **complement** $A^c$ collects every real number that A missed: $A^c=(-\infty,-4]\cup[4,\infty)$. Since $-4$ and $4$ were never in A, they land here, and both of them are included on this outer side.

**Frost-safe but dry**

Subtracting one set from the other gives $A\setminus B=(-4,-1)$, cold yet safe temperatures, such as $-2$, where irrigation stays off.`;

bodies[1] = String.raw`
From any conditional you can build three relatives, and they fall into **two equivalence pairs**. The first pair holds the original clause together with its contrapositive:

$$F \Rightarrow P \;\equiv\; \neg P \Rightarrow \neg F$$

The second pair holds the converse together with the inverse:

$$P \Rightarrow F \;\equiv\; \neg F \Rightarrow \neg P$$

The second pairing is easy to verify: swap and negate the two halves of the converse $P \Rightarrow F$ and the inverse falls out. So converse and inverse always share a truth value, but that shared value has nothing to do with the truth of the clause itself.

**Why the second pair can fail here.** Contracts punish other breaches too. A contractor who finishes on time but delivers faulty work can still be fined: $F$ false, $P$ true. That one situation makes the converse and the inverse false together, while the clause the parties actually signed stands untouched.`;

bodies[2] = String.raw`
The two rules therefore form a chain. Write $A$ for enrolling in Advanced, $I$ for passing Intermediate and $P$ for passing Principles:

$$A \Rightarrow I \Rightarrow P$$

Maria is enrolled in Advanced, so following the arrows from left to right settles both questions about her record: she passed Intermediate, and before that she passed Principles.

The arrows do not run backwards. A **sufficient** condition would be an arrow pointing the other way, $P \Rightarrow A$, and nothing in the rules supplies it, a student may pass Principles and stop there without ever enrolling in Advanced.

One last caution: the rules speak only of passing and enrolling. They record no marks, so nothing whatsoever follows about *how well* Maria did.`;

bodies[3] = String.raw`
If $C$ is false the clause never fires, it has nothing to say about that owner. If $C$ is true the warranty is void **unless** the rescue clause applies, and the rescue clause needs $W$ and $S$ together. For a commercially used product the warranty survives exactly when both halves hold:

$$W \wedge S$$

The word "and" is unforgiving: one missing half sinks the whole rescue.

**Company Z on this path**

Z uses the product commercially, so the path enters the voiding clause. Z has written approval but has never serviced the product, so $W \wedge S$ is false and the rescue does not apply. **Z's warranty is void.**

**All four commercially used cases**

| Written approval | Serviced annually | Warranty |
| --- | --- | --- |
| yes | yes | valid |
| yes | no | void, this is Company Z |
| no | yes | void |
| no | no | void |

Only the first row survives, which is another way of saying that approval alone and servicing alone are each worth nothing on their own.`;

bodies[4] = String.raw`
$$B \iff s \ge 70$$

That is the baseline rule, the one that applies when no curve is used. When the curve is switched on the bar drops by ten points:

$$B \iff s \ge 60$$

"If and only if" runs in both directions, clearing the active cut-off earns the grade, missing it denies the grade.

**This exam.** The curve was applied, so the live cut-off is 60. Student W scored 65 and $65 \ge 60$, so **W earns a B or higher**. Had the curve not been applied, the cut-off would sit at 70 and W's 65 would fall short.

**Three bands of scores**

• $s \ge 70$: a B either way.

• $60 \le s < 70$: a B **only** when the curve is applied. Both 62 and W's 65 live here.

• $s < 60$: no B in either regime.

Since the curve moves the bar from 70 down to 60, everybody who already had a B keeps it and the middle band gains one, which is precisely what "lowers the threshold and never raises it" means.

**A word on the "if and only if".** It is written for the baseline regime, and the "unless" clause overrides it whenever a curve is used. So "at least 70" is necessary and sufficient only in the no-curve case, as W, with 65 and a B, demonstrates.`;

bodies[5] = String.raw`
**Branch 1, cancelled early, $d \ge 3$.** No renewal and no charge. Usage is never mentioned in this branch, so it plays no part whatsoever.

**Branch 2, cancelled late, $d < 3$.** The subscription renews and the subscriber is charged. Afterwards a partial refund is issued exactly when the share of the service used stayed below a tenth:

$$u < 10\%$$

Because this is an "if and only if", low usage both triggers the refund and is required for it.

**Subscriber K.** $d = 2$, which is under 3, so K is in branch 2: **the subscription renews and K is charged**. Then the refund test: $u = 15\%$, and $15\% < 10\%$ is false, so **no refund**.

**Two what-ifs.** Change only the usage to 5%: K stays in branch 2, the test now passes, and the refund is issued. Change only the timing to 4 days: $4 \ge 3$ moves K into branch 1, where the subscription never renews, no charge is made, and the refund clause is never reached, so the 15% figure becomes irrelevant.

Notice where the usage condition lives: inside branch 2 only. Subscribers who cancel three or more days ahead are settled by timing alone.`;

bodies[6] = String.raw`
The complementary event is that both tests record zero false positives, so subtract the probability of that event from 1 to get the chance that at least one test records a false positive:

$$1 - P(A=0)P(B=0)$$

$$= 1 - (0.996)^{500}(0.988)^{500} \approx 0.9997$$

Since $0.9997 \ge 0.999$, the statement is False.`;

const out = items.map((it, i) => {
  const firstLine = it.text.split("\n")[0];
  return { i, text: firstLine + "\n" + bodies[i] };
});

fs.writeFileSync(OUT, JSON.stringify(out, null, 2), "utf8");
console.log("wrote", OUT, out.length, "entries");
