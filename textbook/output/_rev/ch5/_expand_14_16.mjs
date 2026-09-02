import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-14": [
    `The statement is a claim about Weekend 1's pre-tax revenue, not about either room rate. The charged total $\\$2{,}419.20$ already includes an $8\\%$ occupancy tax.

The extra arithmetic is only stripping that tax. Unit prices are not needed yet.

**1.** Divide the charged total by $1.08$:

$$\\frac{2419.20}{1.08} = 2240$$

Weekend 1's booking revenue before tax is $\\$2{,}240$. A solver who subtracted $8\\%$ of $2419.20$ as $193.54$ would land on $2225.66$ and miss the claim. An $8\\%$ tax is added to the pre-tax figure, so the peel is division by $1.08$, not subtraction of $8\\%$ of the gross.

The pre-tax Weekend 1 revenue is $\\$2{,}240.00$, so the statement is True.`,

    `The statement is a claim about the gap between a Suite and a Standard room, pre-tax. The overview already recovered $x=140$ and $y=210$. The extra arithmetic is only subtracting.

$$210 - 140 = 70$$

The claim writes $\\$200$. That figure is a typical round gap, or $210-10$ after mixing a tax story. The recovered gap is $\\$70$, not $\\$200$.

At a $\\$200$ gap the Weekend 1 pre-tax row $10x+4(x+200)=2240$ would force $x=102.86$, which then fails Weekend 2. With both weekends as charged, the Suite cannot sit $\\$200$ above Standard.

The recovered gap is $\\$70$, not $\\$200$, so the statement is False.`,

    `This letter is a new mix compared with another new mix: $6$ Standard rooms versus $4$ Suites, both pre-tax, and the claim says the six Standards cost less.

The overview already has $x = 140$ and $y = 210$. The extra arithmetic is only costing both baskets.

**1.** Six Standard rooms pre-tax:

$$6 \\times 140 = 840$$

**2.** Four Suites pre-tax:

$$4 \\times 210 = 840$$

**3.** Compare:

$$840 = 840$$

The two bookings cost the same, so six Standards are not cheaper. The inequality is strict, and equality fails it.

The equality is not an accident. One Suite is $1.5$ Standard rooms in price, because $210/140=1.5$. Four Suites are then $6$ Standard rooms exactly. A solver who used the false $\\$200$ gap from letter B, taking Suites at $340$, would get $6(140)=840 < 4(340)=1360$ and flip the verdict. The recovered pair forbids that gap.

Tax does not enter, because the claim is pre-tax. Adding $8\\%$ to both sides would scale both $840$ figures by $1.08$ and leave them equal still.

Six Standards and four Suites both cost $\\$840$ pre-tax, so six Standards are not cheaper, so the statement is False.`,

    `The statement is a claim about one Suite night including the $8\\%$ tax. The overview already recovered the pre-tax Suite rate $y=210$. The extra arithmetic is only applying the tax.

$$210 \\times 1.08 = 226.80$$

A solver who computed $210+8=218$, adding eight dollars instead of eight percent, would miss the claim. A solver who used Standard's $140 \\times 1.08=151.20$ here would have swapped the room types.

A single Suite night including tax costs $\\$226.80$, so the statement is True.`,

    `The statement is a one-Suite increment on Weekend 2, hardcovers unchanged in spirit: Standard rooms unchanged, one extra Suite, pre-tax.

The overview already recovered $y=210$. One extra Suite at that pre-tax rate adds exactly $\\$210$ to Weekend 2's pre-tax revenue. The extra arithmetic is only that increment.

A solver who added the taxed $\\$226.80$ here would be answering a with-tax question. The claim is pre-tax. A solver who used the Standard rate $140$ would undershoot.

Weekend 2's pre-tax revenue would rise by $\\$210$, so the statement is True.`,
  ],

  "math-5-15": [
    `The statement is a claim about Component A's unit cost. Only January and February are actual rows. March is a forecast and does not enter the solve.

The overview already recovered $x = 12$ from those two actual rows. This letter does not rebuild that pair. It only asks whether the recovered A cost is the number in the claim.

Warehouse floor space and on-site staff are distractors. A solver who folded them into the value would manufacture a different unit cost.

The recovered A cost is $\\$12$, so the statement is True.`,

    `The statement is a claim about Component B's unit cost. The overview already recovered $y = 15$. The claim writes $\\$18$, three dollars above that leftover.

**1.** The figure $\\$18$ is a typical misread of the March forecast: $4700$ for $200+100$ items averages about $\\$15.67$, or of February $3660/140 \\approx 26$ after ignoring A. The actual January/February pair forces $y=15$.

**2.** At $y=18$, January would be $150(12)+90(18)=1800+1620=3420$, which overshoots the recorded $\\$3{,}150$ by $\\$270$. Those extra $\\$270$ are ninety B units times a $\\$3$ overstatement.

The claimed $\\$18$ sits $\\$3$ above the recovered $\\$15$, so the statement is False.`,

    `The statement compares the March forecast with the actual January/February unit costs. March is not a third equation. It is a projected mix of $200$ A and $100$ B listed at $\\$4{,}700$.

The overview already recovered $x=12$ and $y=15$. The extra arithmetic is only valuing March's quantities at those actual costs, then comparing with the forecast.

**1.** Two hundred A at the actual A cost:

$$200 \\times 12 = 2400$$

**2.** One hundred B at the actual B cost:

$$100 \\times 15 = 1500$$

**3.** Add and compare with the forecast $\\$4{,}700$:

$$2400 + 1500 = 3900$$

The forecast $\\$4{,}700$ sits $\\$800$ above $\\$3{,}900$. That extra $\\$800$ is the whole content of "assumes higher unit prices." If March used the same unit costs as January and February, the projected value would be $\\$3{,}900$, not $\\$4{,}700$.

A solver who treated March as a third actual row and tried to find a pair that fits all three would find the system inconsistent, which is the same conclusion in different language: March is not using January/February prices.

A solver who compared $\\$4{,}700$ with January $\\$3{,}150$ and called that "higher" would be comparing totals of different quantities, not unit prices. The honest comparison holds quantities fixed at March's $200$ and $100$.

The March forecast of $\\$4{,}700$ exceeds the actual-cost valuation $\\$3{,}900$, so it assumes higher unit prices, so the statement is True.`,

    `The statement claims that March's $200$ A and $100$ B, valued at the actual January/February costs, would equal the forecast $\\$4{,}700$.

Letter C already valued that mix at $x=12$ and $y=15$ and got $\\$3{,}900$. This letter is the other side of the same comparison: it claims the actual-cost valuation *is* $\\$4{,}700$.

**1.** Actual-cost valuation of March's quantities:

$$200(12) + 100(15) = 3900$$

**2.** Compare with $\\$4{,}700$:

$$3900 \\neq 4700$$

The gap is still $\\$800$. A solver who reported the forecast figure as if it were already an actual-cost total would accept the claim without doing the arithmetic. The forecast is a projection, not a valuation at recovered costs.

What would have to change for the opposite verdict? If A were $\\$16$ and B were $\\$15$, the mix would be $3200+1500=4700$. January forbids $x=16$: $150(16)+90(15)=2400+1350=3750$, which overshoots $\\$3{,}150$. With January and February as recorded, March's actual-cost value cannot be $\\$4{,}700$.

The actual-cost valuation is $\\$3{,}900$, not $\\$4{,}700$, so the statement is False.`,

    `The statement is a claim about the combined actual inventory value of January and February. Those two printed totals are $\\$3{,}150$ and $\\$3{,}660$. March is a forecast and is not added.

$$3150 + 3660 = 6810$$

A solver who included March's $\\$4{,}700$ would get $\\$11{,}510$ and miss the claim. The word "actual" in the claim is doing the work: only the two actual rows enter.

The combined actual value is $\\$6{,}810$, so the statement is True.`,
  ],

  "math-5-16": [
    `The statement claims the overtime rate actually paid matches the contract's $1.5\\times$ regular-rate rule.

The overview already recovered $x=14$ and $y=24$. The contract rate would be $1.5 \\times 14 = 21$. Then $24 \\neq 21$.

The actual overtime rate sits $\\$3$ above the contract. That $\\$3$ per overtime hour is the whole discrepancy. A solver who compared $24$ with $1.5 \\times 16$ after misreading the regular wage would manufacture a match. The two payroll rows force $x=14$ and $y=24$, and those do not match the $1.5\\times$ rule.

The actual overtime rate does not match the contract, so the statement is False.`,

    `The statement is a claim about the regular hourly wage. Both workers completed a full $40$-hour regular week, so the regular wage is the shared intercept.

The overview already recovered $x = 14$. The claim writes $\\$14$, which is exactly that intercept.

A solver who divided $\\$608$ by $42$ total hours would land on about $\\$14.48$ and mix overtime into the regular rate. The overtime hours have to be stripped out first.

The recovered regular wage is $\\$14$, so the statement is True.`,

    `The statement is a claim about Worker 2's overtime overpayment relative to the contract, not about Worker 1.

The overview already recovered actual overtime $y=24$ and regular $x=14$, so the contract overtime rate is $21$. Worker 2 had $2$ overtime hours. The extra arithmetic is only the gap times those hours.

**1.** Per-hour overpayment:

$$24 - 21 = 3$$

**2.** Two overtime hours:

$$2 \\times 3 = 6$$

Worker 2 was overpaid $\\$6$ on overtime. A solver who used Worker 1's $6$ overtime hours here would get $\\$18$ and miss the claim. A solver who reported the $\\$3$ per-hour gap as the total would undershoot.

The overtime overpayment on Worker 2 is $\\$6.00$, so the statement is True.`,

    `This letter is a third worker, not in the table: $40$ regular hours plus $4$ overtime hours, paid at the rates actually used this week, $x=14$ and $y=24$.

The extra arithmetic is only costing that new mix at the actual rates.

**1.** Forty regular hours at $\\$14$:

$$40 \\times 14 = 560$$

**2.** Four overtime hours at the actual $\\$24$:

$$4 \\times 24 = 96$$

**3.** Add:

$$560 + 96 = 656$$

The third worker would earn $\\$656$ at this week's actual rates, matching the claim.

A solver who used the contract overtime $21$ here would get $560+84=644$, which is letter E's figure. Mixing the two letters is the main trap: actual rates for D, contract rates for E.

A solver who used Worker 1's $6$ overtime hours or Worker 2's $2$ would be costing a different person. The claim names $4$ overtime hours.

The actual-rate mix of $40+4$ hours is $\\$656$, so the statement is True.`,

    `This letter is the same third worker as letter D, but paid strictly under the $1.5\\times$ contract rule instead of at this week's actual overtime rate.

The overview already has $x=14$, so contract overtime is $1.5 \\times 14 = 21$. The extra arithmetic is only costing $40+4$ hours at those contract rates.

**1.** Forty regular hours at $\\$14$:

$$40 \\times 14 = 560$$

**2.** Four overtime hours at the contract $\\$21$:

$$4 \\times 21 = 84$$

**3.** Add:

$$560 + 84 = 644$$

The third worker would earn $\\$644$ under the contract, matching the claim. Compared with letter D's $\\$656$, the contract saves the firm $\\$12$, which is $4 \\times 3$, four hours times the $\\$3$ per-hour gap.

A solver who used $y=24$ here would be repeating letter D. A solver who took $1.5 \\times 16$ as overtime after a wrong regular wage would miss $644$.

The contract-rate mix of $40+4$ hours is $\\$644$, so the statement is True.`,
  ],
};

applyLetters("11_20.json", patches);
console.log("applied 14-16");
