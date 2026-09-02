import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-31": [
    `The statement is a rounding claim about Type A's recovered case price, not about Invoice 1's total.

The overview already recovered Type A at $\\$18.45$ per case. Rounding that price up to the next whole dollar is the extra arithmetic.

**1.** Type A's price sits between $18$ and $19$. The next whole dollar above $18.45$ is $19$.

**2.** Rounding *to* the nearest dollar would also land on $18$, because $18.45$ is closer to $18$ than to $19$. The claim says "up to the next whole dollar," which is a ceiling, not nearest-even rounding. Ceiling of $18.45$ is $19$.

A solver who rounded $18.45$ to $18$ would be using nearest-dollar instead of rounding up. A solver who rounded Invoice 1's $\\$527.45$ and then divided by $22$ cases would be rounding the wrong object.

Ceiling of the recovered Type A price is $\\$19.00$, so the statement is True.`,

    `The statement is a clerk's claim about the gap between Type B and Type A: more than nine dollars but less than ten.

The overview already recovered Type A at $18.45$ and Type B at $27.80$. The extra arithmetic is only the difference.

$$27.80 - 18.45 = 9.35$$

Then $9 < 9.35 < 10$. The gap sits in the open interval the clerk named.

A solver who rounded both prices first, $28-18=10$, would land on the boundary and fail "less than ten." A solver who used $27.80-18.00=9.80$ after dropping A's cents would still sit inside the interval, so that particular slip would not flip the verdict. The honest gap is $9.35$.

Type B exceeds Type A by $\\$9.35$, which is more than nine and less than ten, so the statement is True.`,

    `The statement splits Invoice 2's total evenly across its $26$ cases, ignoring fastener type, and asks whether that implied share clears $\\$24$.

Invoice 2 printed $\\$657.35$ for $7+19=26$ cases. The extra arithmetic is only that quotient. Unit prices are not re-solved.

**1.** Cases on Invoice 2:

$$7 + 19 = 26$$

**2.** Even split of the printed total:

$$\\frac{657.35}{26} = 25.282\\ldots$$

**3.** Compare with $\\$24$:

$$25.28 > 24$$

The implied share clears $\\$24$ by about $\\$1.28$. That average sits between the two recovered prices $18.45$ and $27.80$, as any mix average must. Invoice 2 is heavy on Type B ($19$ versus $7$), so the average leans toward $27.80$, which is why it clears $24$ comfortably.

A solver who split Invoice 1 instead, $527.45/22 \\approx 23.97$, would fall just *under* $\\$24$ and flip the verdict. The claim names Invoice 2. A solver who used $657.35/19$, ignoring Type A, would overshoot further.

Invoice 2's even split is about $\\$25.28$ per case, which clears $\\$24$, so the statement is True.`,

    `The statement claims that swapping Invoice 1's quantities $13$ and $9$ across fastener types would leave the total unchanged, "because both prices are so close together."

The overview already recovered $A=18.45$ and $B=27.80$. Those prices are $9.35$ apart, not close. The extra arithmetic is costing both assignments.

**1.** Actual Invoice 1: $9$ of A and $13$ of B.

$$9(18.45) + 13(27.80) = 166.05 + 361.40 = 527.45$$

That rebuilds the printed total, as it should.

**2.** Swapped assignment: $13$ of A and $9$ of B.

$$13(18.45) + 9(27.80) = 239.85 + 250.20 = 490.05$$

**3.** Compare:

$$490.05 \\neq 527.45$$

The swapped mix is $\\$37.40$ cheaper. That gap is $4$ cases moved from B onto A, times the $\\$9.35$ price gap: $4 \\times 9.35 = 37.40$. The totals match only if the two prices are equal. They are not.

A solver who glanced at $18.45$ and $27.80$ and called them "close" because both start with a $2$-looking dollar after rounding would still be wrong by more than $\\$9$ per case. "Close together" is the false premise that manufactures an unchanged total.

Swapping the quantities changes Invoice 1's total from $\\$527.45$ to $\\$490.05$, so the statement is False.`,

    `The statement claims that combining the two invoices into one order of $16$ A cases and $32$ B cases must cost strictly more than placing both invoices separately, because of a bulk-order premium.

The two invoices already *are* $9+7=16$ of A and $13+19=32$ of B. At fixed per-case prices there is no bulk premium in the model. The extra arithmetic is adding the two printed totals and comparing with the combined mix at recovered prices.

**1.** Separate invoices:

$$527.45 + 657.35 = 1184.80$$

**2.** Combined mix at recovered prices:

$$16(18.45) + 32(27.80) = 295.20 + 889.60 = 1184.80$$

**3.** Compare: the figures match. Linearity says they must. A bulk premium would have to be stated in the stem, and it is not. Common sense about "bigger order, bigger discount or bigger premium" is a story the invoices do not tell.

A solver who added a round $5\\%$ premium onto $\\$1{,}184.80$ would get about $\\$1{,}244$ and accept the claim. That premium is invented. A solver who thought $16$ and $32$ were new counts, not the sums of the two invoices, might cost a different mix; $16$ and $32$ are exactly those sums.

The combined order costs the same $\\$1{,}184.80$ as the two invoices placed separately, so it does not cost strictly more, so the statement is False.`,
  ],
};

applyLetters("31_40.json", patches);
console.log("applied 31 only");
