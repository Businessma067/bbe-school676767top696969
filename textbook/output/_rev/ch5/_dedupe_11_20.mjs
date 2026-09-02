import { load, save, applyTask } from "./_dedupe_apply.mjs";

const bodies = {
  "math-5-11": [
    `The overview already recovered $y = 6$, so Ben's five burritos on their own cost

$$
5(6) = 30
$$

Ana's full order was $\\$32$. Since $30 < 32$, his burritos alone came to less than her entire meal. It is tempting to assume the person who paid more overall also wins every partial comparison, but that is not guaranteed.`,
    `The overview already recovered $x = 3.50$ and $y = 6$. The gap between those prices is new:

$$
6.00 - 3.50 = 2.50
$$

A burrito sits $\\$2.50$ above a taco. Swapping the two recovered prices would reverse the gap and flip the verdict.`,
    `Dropping one burrito from Ana's recovered mix is not the overview's original order:

$$
4(3.50) + 2(6) = 14 + 12 = 26
$$

Since $26 < 28$, the cheaper order still clears the cutoff. Subtracting $\\$6$ from Ana's $\\$32$ is the same $26$, provided the recovered burrito price is used rather than a guessed $\\$4$.`,
    `Ben's total is already in the overview as $32 + 5 = 37$. Rebuilding his order at the recovered prices confirms it:

$$
2(3.50) + 5(6) = 7 + 30 = 37
$$

$\\$37$ does not exceed $\\$40$. Adding the $\\$5$ difference a second time on top of $\\$37$ is the slip that pushes an answer past $\\$40$.`,
    `A $6$-and-$6$ mix matches neither friend's receipt, so it is a new costing:

$$
6(3.50) + 6(6) = 21 + 36 = 57
$$

That lands on $\\$57$. Averaging the two receipts and scaling would not give this figure, because Ana and Ben used different mixes.`,
  ],
  "math-5-12": [
    `The overview already recovered $x = 12$ and $y = 17$. Those two prices differ by exactly $5$, which is the memo's gap rule, so a $\\$12$ paperback is consistent with both the rule and the $\\$8{,}540$ revenue. Staff headcount and the loyalty-member share never enter the prices.`,
    `The overview already recovered the hardcover price $y = 17$, which sits below $\\$18$, not above it. Adding the $\\$5$ gap onto a guessed paperback of $\\$14$, or rounding $17$ up, is how an "$\\$18$+" hardcover appears.`,
    `Hardcover sales stay as they were, so the entire revenue change is $100$ extra paperbacks at the recovered paperback price:

$$
100 \\times 12 = 1200
$$

Revenue would be $\\$1{,}200$ higher. Using the hardcover price here, or treating the extra $100$ units as a mixed basket, would miss that the hardcover column did not move.`,
    `This $3$-hardcover $2$-paperback mix is not the month's $400$-and-$220$, so it has to be costed from the recovered prices:

$$
3(17) + 2(12) = 51 + 24 = 75
$$

That is exactly $\\$75$, which is not less than $\\$75$. A strict inequality fails on the boundary; the opposite verdict would need the mix to cost $\\$74.99$ or less.`,
    `Selling $310$ hardcovers and nothing else, at the recovered hardcover price:

$$
310 \\times 17 = 5270
$$

That is $\\$5{,}270$, far short of the reported $\\$8{,}540$. The reported total needed both products; hardcovers alone at this price cannot reconstruct it.`,
  ],
  "math-5-13": [
    `The overview already recovered Standard's base fee $x = 38$. Basic advertises a $\\$15$ base, and $38 > 15$, so Standard's base is higher, not lower, by $\\$23$. Comparing overage rates here instead of bases would look at the wrong half of each plan.`,
    `The overview already recovered $y = 3$ from the $\\$15$ gap across $5$ GB. The rate has to come from the difference between March and April, because each bill also contains the $\\$38$ base. Dividing either bill by its GB without subtracting the base inflates $y$.`,
    `A month with $10$ GB of overage is not in the billing history:

$$
38 + 10(3) = 38 + 30 = 68
$$

The bill would be $\\$68$. Using Basic's $\\$15$ base with Standard's $3$/GB rate, or the reverse, would miss this total.`,
    `At $5$ GB of overage the recovered Standard bill is

$$
38 + 5(3) = 38 + 15 = 53
$$

Premium is a flat $\\$40$ with no overage, so the switch saves $53 - 40 = 13$. The opposite verdict would need typical usage high enough that Standard undercut $\\$40$, which this $5$ GB customer does not.`,
    `Basic is advertised at $\\$15$ plus $\\$2$ per GB, so $8$ GB on Basic costs

$$
15 + 8(2) = 15 + 16 = 31
$$

The overview already recovered Standard as $38 + 8(3) = 62$, which is the March bill. Since $31 < 62$, Basic is cheaper at that usage. The trap is comparing bases only and ignoring that Standard's overage rate is also higher.`,
  ],
  "math-5-14": [
    `The overview already converted Weekend 1 by dividing the taxed total: $\\frac{2419.20}{1.08} = 2240$. Undoing $8\\%$ means dividing by $1.08$, not subtracting $8\\%$ of the printed $\\$2{,}419.20$. That distinction is what produces the clean $\\$2{,}240$.`,
    `The overview already recovered $x = 140$ and $y = 210$. The nightly gap is

$$
210 - 140 = 70
$$

A suite costs $\\$70$ more, well short of $\\$200$. Comparing the tax-inclusive confirmation totals instead of stripping the $8\\%$ out first is what inflates this estimate.`,
    `Six Standard rooms versus four Suites, at the recovered pre-tax rates:

$$
6(140) = 840, \\qquad 4(210) = 840
$$

Both come to $\\$840$, so six Standard rooms do not cost less. The two bookings tie; a strict "less than" fails on the equality.`,
    `The recovered Suite rate is pre-tax. Adding the $8\\%$ occupancy tax is new:

$$
210 \\times 1.08 = 226.80
$$

A taxed Suite night costs $\\$226.80$. Applying $8\\%$ to the Standard rate of $140$ instead would produce $151.20$ and miss this letter.`,
    `Weekend 2's Standard bookings stay put, so one extra Suite adds the recovered pre-tax Suite rate:

$$
1 \\times 210 = 210
$$

Pre-tax revenue would rise by $\\$210$. Adding $8\\%$ onto that increment would be answering a different, tax-inclusive question.`,
  ],
  "math-5-15": [
    `The overview already recovered Component A's unit cost $x = 12$ from the two actual rows. March is a forecast and cannot be used to price today's stock; feeding the $\\$4{,}700$ row into the system would push $x$ off $12$.`,
    `The overview already recovered $y = 15$, not $\\$18$. Reading the forecast row's higher implied prices back into the actual data is a natural but incorrect shortcut. Warehouse floor space and on-site staff never enter the unit costs.`,
    `Valuing March's forecast quantities at the recovered actual costs is new:

$$
200(12) + 100(15) = 2400 + 1500 = 3900
$$

The forecast puts the same basket at $\\$4{,}700$, which is $\\$800$ above that actual-cost valuation. Because the quantities match, the higher forecast total can only come from a higher price level overall; the arithmetic does not say which component's price rises.`,
    `Letter C already valued March's $200$ A + $100$ B at the actual costs and got $\\$3{,}900$. The claimed $\\$4{,}700$ is the forecast row's own total, built on forecast prices rather than the recorded ones. Using $\\$4{,}700$ here is treating the projection as if it were an actual-cost rebuild.`,
    `January and February are the two rows marked as actual, at $\\$3{,}150$ and $\\$3{,}660$:

$$
3150 + 3660 = 6810
$$

No unit cost is needed, and the March forecast stays out of the sum. Adding March's $\\$4{,}700$ as well would overshoot $\\$6{,}810$.`,
  ],
  "math-5-16": [
    `The overview already recovered $x = 14$ and $y = 24$. The contract requires

$$
1.5 \\times 14 = 21
$$

per overtime hour. Payroll used $24$, which is $3$ higher per overtime hour. Actual overtime is not $21$, so the contractual $1.5\\times$ rule was not followed.`,
    `The overview already recovered the regular wage $x = 14$. Both workers finished the same $40$ regular hours, so subtracting the two payrolls cancelled that shared block and left the overtime rate first; $x$ then followed by substitution. The claim is reading that recovered regular wage.`,
    `Contract overtime is $21$ and actual overtime is $24$. Worker 2 has $2$ overtime hours, so the overpayment is

$$
2(24) - 2(21) = 48 - 42 = 6
$$

Worker 2 was overpaid by $\\$6$ on overtime. Using Worker 1's $6$ overtime hours here would produce $18$ and miss this letter.`,
    `A third worker at the rates actually paid, $x = 14$ and $y = 24$:

$$
40(14) + 4(24) = 560 + 96 = 656
$$

That is $\\$656$. Pricing the $4$ overtime hours at the contract $21$ instead would be letter E's calculation, not this one.`,
    `Using the contractual overtime rate $1.5 \\times 14 = 21$ on the same $40+4$ week:

$$
40(14) + 4(21) = 560 + 84 = 644
$$

Under the $1.5\\times$ rule that third worker earns $\\$644$, which is $\\$12$ less than the company's actual practice of $\\$656$.`,
  ],
  "math-5-17": [
    `The overview already recovered the fixed charge $x = 15$, not the office's $\\$18$. After the late penalty is stripped from May, usage at $y = 2$ costs $18(2) = 36$, leaving $51 - 36 = 15$. Keeping the penalty inside May's $\\$56.10$ is what inflates the fixed charge toward $18$.`,
    `The overview already recovered $y = 2$ from the $\\$14$ gap across $7$ m$^3$. That rate contradicts the office's $\\$1.85$. Undoing the $10\\%$ surcharge by subtracting $10\\%$ of $\\$56.10$ instead of dividing by $1.10$ would dirty May's right-hand side and move $y$ off $2$.`,
    `The overview already divided May's printed total: $\\frac{56.10}{1.10} = 51$. Subtracting $5.61$ ($10\\%$ of the printed total) would be the wrong undo and would not land on $51$. The genuine May charge before the late penalty is $\\$51$.`,
    `With the recovered formula $15 + 2u$ at $u = 40$:

$$
15 + 2 \\cdot 40 = 15 + 80 = 95
$$

The bill is $\\$95$, ten dollars above the claimed $\\$85$. Using the office's $18 + 1.85u$ at $40$ m$^3$ is a route toward a different figure, and skipping the fixed charge entirely would give $80$.`,
    `June's printed $\\$65$ is already the genuine charge, with no penalty. A $10\\%$ late penalty on that whole amount is

$$
65 \\times 1.10 = 71.50
$$

This letter does not need the recovered $x$ and $y$. Applying $10\\%$ only to the usage portion, and not the fixed charge, would understate the penalized total.`,
  ],
  "math-5-18": [
    `The overview already recovered CityCab as $6 + 1 \\cdot d$ and MetroX as $6 + 1.5d$. At $10$ km:

$$
6 + 10(1) = 16, \\qquad 6 + 10(1.5) = 21
$$

CityCab's $\\$16$ undercuts MetroX's $\\$21$ by $\\$5$. Both share the same base, so the cheaper per-km rate is what decides this distance.`,
    `The overview already recovered both bases as $x_1 = 6$ and $x_2 = 6$. Peeling the per-km charge off each company's shorter quoted ride is how those bases appeared. A solver who assigned CityCab's $\\$14$ short ride to MetroX, or vice versa, would split the bases.`,
    `The two fares are $6 + d$ and $6 + 1.5d$. Their difference is

$$
(6 + 1.5d) - (6 + d) = 0.5d
$$

which is positive whenever $d > 0$. Even at a short hop such as $d = 3$, MetroX is $6 + 4.50 = 10.50$ against CityCab's $6 + 3 = 9$. Same base and a higher MetroX rate mean MetroX is never cheaper for any positive distance.`,
    `CityCab is base plus $\\$1$ per km, so a $30$ km ride is

$$
6 + 30(1) = 36
$$

No extra fee sits on top of that linear rule. Using MetroX's $1.50$ here would produce $51$ and answer the wrong company.`,
    `Equating the two fare formulas:

$$
6 + d = 6 + 1.5d, \\qquad 0 = 0.5d, \\qquad d = 0
$$

The companies only match at zero distance. At the claimed $5$ km the bills are $6 + 5 = 11$ versus $6 + 7.50 = 13.50$, which are not equal. Same bases and different rates cannot cross at a positive $d$.`,
  ],
  "math-5-19": [
    `The overview already recovered $x_A = 9$ and $x_B = 11$. Since $9 < 11$, Vendor A is $\\$2$ cheaper per X unit. Comparing Y prices here, or comparing the bundled quotation totals without unpacking X, would look at the wrong product.`,
    `The overview already recovered $y_A = 18$ and $y_B = 16$. Since $16 < 18$, Vendor B is $\\$2$ cheaper per Y unit, the reverse pattern from Product X. A cheaper X vendor need not be cheaper on Y.`,
    `For the upcoming mix of $40$ X and $30$ Y, cost each vendor from the recovered prices:

$$
40(9) + 30(18) = 360 + 540 = 900
$$

$$
40(11) + 30(16) = 440 + 480 = 920
$$

A's $\\$900$ beats B's $\\$920$ on the bundle even though B wins on Y alone.`,
    `Letter C already costed the upcoming order at $\\$900$ for A and $\\$920$ for B, so

$$
920 - 900 = 20
$$

is an increase, not a saving. Switching the entire order to Vendor B raises Bramble's cost by $\\$20$, the opposite of the claim.`,
    `With no X in the order, only the recovered Y prices matter:

$$
60 \\times 18 = 1080, \\qquad 60 \\times 16 = 960
$$

Vendor B is $\\$120$ cheaper on that Y-only run. The mixed $40$/$30$ order in letter C went the other way, because that mix is X-heavy.`,
  ],
  "math-5-20": [
    `The overview already recovered $x = 50$ and $y = 70$, and both companies' revenue rows use those same market prices. Headcount growth rates in the stem never enter the prices. The claim is reading that recovered pair.`,
    `The overview already split Q1 as $A = 13100$ and $B = 14100$ from the sum $\\$27{,}200$ and the $\\$1{,}000$ gap. Since $14100 > 13100$, Beta's Q1 is larger by exactly that gap. The unit prices are not needed for this comparison.`,
    `Alpha currently earns $150(50) + 80(70) = 7500 + 5600 = 13100$. After a $10\\%$ lift on Product P alone, the new P price is $55$:

$$
150(55) + 80(70) = 8250 + 5600 = 13850
$$

The relative increase is $\\frac{750}{13100} \\approx 0.057$, about $5.7\\%$, not $10\\%$ of the whole book, because Product P is only part of Alpha's revenue.`,
    `Letter C already projected Alpha at $\\$13{,}850$ after the $10\\%$ P increase. Beta's current revenue is $14100$, and

$$
14100 - 13850 = 250
$$

so the projected Alpha book still sits $\\$250$ short of Beta's Q1. A $10\\%$ lift on P is not enough to close the $\\$1{,}000$ gap.`,
    `With the recovered prices $x = 50$ and $y = 70$:

$$
130 \\times 70 = 9100, \\qquad 150 \\times 50 = 7500
$$

Beta's Q line of $\\$9{,}100$ exceeds Alpha's whole P line of $\\$7{,}500$ by $\\$1{,}600$. Comparing Beta's whole revenue to Alpha's whole revenue would be letter B, not this partial-line comparison.`,
  ],
};

const data = load("11_20.json");
for (const t of data) applyTask(t, bodies[t.id]);
save("11_20.json", data);
console.log("wrote 11_20", data.map((t) => t.id).join(", "));
