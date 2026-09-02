import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-32": [
    `The statement places Swift Cargo's recovered dispatch fee halfway between $\\$145$ and $\\$146$.

The overview already recovered the fee $f = 145.50$. Halfway between $145$ and $146$ is $145.50$ exactly.

$$\\frac{145 + 146}{2} = 145.50$$

The recovered fee sits on that midpoint. A solver who rounded $145.50$ to $146$ would have left the halfway point. A solver who used $460-170 \\times 2$ as a fee guess would land on $120$ and miss the claim.

The dispatch fee is $\\$145.50$, which is exactly halfway between $\\$145$ and $\\$146$, so the statement is True.`,

    `The statement claims Swift Cargo's per-mile rate is closer to $\\$1.50$ than to $\\$2.00$.

The overview already recovered $r = 1.85$. The extra arithmetic is the two distances.

**1.** Distance to $\\$1.50$:

$$1.85 - 1.50 = 0.35$$

**2.** Distance to $\\$2.00$:

$$2.00 - 1.85 = 0.15$$

**3.** Compare: $0.15 < 0.35$, so $1.85$ is closer to $2.00$, not to $1.50$. The claim has the nearer neighbour backwards.

A solver who compared $1.85$ with $1.50$ only, noticing "both start with $1$," would call them closer as a digit story. Distance on the number line is what the claim asks. The competitor's flat $\\$1.35$ is a third point, even farther from $1.85$ than $1.50$ is.

Swift's rate $1.85$ sits closer to $2.00$ than to $1.50$, so the statement is False.`,

    `This letter is a new haul: $250$ miles at Swift Cargo, claimed to come in five cents under $\\$608$.

The overview already has $f=145.50$ and $r=1.85$. The extra arithmetic is only evaluating Swift at $250$ miles.

**1.** Mileage charges:

$$250 \\times 1.85 = 462.50$$

**2.** Add the dispatch fee:

$$145.50 + 462.50 = 608.00$$

**3.** Compare with "five cents under $608$":

$$608.00 \\neq 607.95$$

The haul is exactly $\\$608.00$, not five cents under. The claim's five-cent story is a rounding rumour. Both $145.50$ and $462.50$ have a fifty-cent piece; they add to a whole dollar.

A solver who used $250 \\times 1.80 + 145.50 = 450+145.50=595.50$ would undershoot. A solver who used $r=1.85$ but $f=145$ would get $607.50$, which *is* fifty cents under $608$, nearby but not five cents. A solver who computed $250 \\times 1.85=462.50$ and then added $145$ as $607.50$ again dropped the half dollar in the fee.

What would have to change for the opposite verdict? If the fee were $145.45$, the total would be $607.95$, five cents under $608$. The two routes force $f=145.50$, and $250$ miles is then exactly $\\$608$.

The $250$-mile Swift haul is $\\$608.00$ exactly, not five cents under, so the statement is False.`,

    `The statement compares that same $250$-mile haul on Swift Cargo with the flat-rate competitor, and claims choosing the competitor pockets more than $\\$270$.

The competitor charges $\\$1.35$ per mile with no dispatch fee. Letter C already priced Swift at $\\$608$. The extra arithmetic is costing the competitor and subtracting.

**1.** Competitor at $250$ miles:

$$250 \\times 1.35 = 337.50$$

**2.** Swift at $250$ miles, from letter C:

$$608.00$$

**3.** Savings if the competitor is chosen:

$$608.00 - 337.50 = 270.50$$

Then $270.50 > 270$. The savings clear the cutoff by fifty cents.

Where does the $\\$270.50$ come from in pieces? Swift's extra rate is $1.85-1.35=0.50$ per mile, so $250 \\times 0.50=125$ of extra mileage, plus the whole $\\$145.50$ dispatch fee, totals $270.50$. Both pieces are extra cost on Swift; the competitor has neither the fee nor the steeper rate.

A solver who forgot the fee would report only the $\\$125$ rate gap and fail the $\\$270$ cutoff. A solver who used letter C's false $607.95$ would get savings $270.45$, still above $270$, so that slip would not flip the verdict. A solver who compared at Route 1's $170$ miles would get a smaller savings and might fall under $270$.

What would have to change for the opposite verdict? If the competitor charged $1.40$ per mile, the $250$-mile competitor bill would be $350$ and the savings $258$, under $270$. The stem's $1.35$ competitor rate plus Swift's recovered pair forces $270.50$.

Choosing the competitor at $250$ miles saves $\\$270.50$, which is north of $\\$270$, so the statement is True.`,

    `The statement is a uniqueness-and-crossing claim: Swift's fee-plus-rate line and the competitor's through-the-origin line have different slopes, so they intersect somewhere on the number line, even if that intersection is at a negative mileage.

Swift is $145.50 + 1.85m$. The competitor is $1.35m$. The slopes $1.85$ and $1.35$ are not equal, so the lines are not parallel, so they intersect at exactly one $m$.

**1.** Set the two formulas equal:

$$145.50 + 1.85m = 1.35m$$

**2.** Collect the mileage terms:

$$145.50 = 1.35m - 1.85m = -0.50m$$

**3.** Solve:

$$m = \\frac{145.50}{-0.50} = -291$$

The intersection is at $-291$ miles, which is not a real haul. It is still an intersection on the number line. The claim says exactly that: guaranteed to intersect, even though the crossing is negative and therefore meaningless as a route.

A solver who concluded "different slopes, but Swift is always more expensive, so they never meet" would be thinking on $m \\geq 0$ only. On the nonnegative ray they never meet. On the whole line they do. The claim is careful about that distinction.

A solver who used equal slopes would be describing a different competitor. If the competitor also charged $1.85$ per mile with no fee, the lines would be parallel and $145.50$ apart, never meeting. The stem's $1.35$ is what forces a crossing, and the positive fee is what pushes that crossing into negative miles.

The two formulas intersect at $m=-291$, a meaningless mileage but a real intersection, so the statement is True.`,
  ],
};

applyLetters("31_40.json", patches);
console.log("applied 32");
