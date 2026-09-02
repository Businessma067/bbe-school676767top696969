import { load, save, applyTask } from "./_dedupe_apply.mjs";

const bodies = {
  "math-5-21": [
    `The overview already recovered the signup fee $x = 38$, which is $8$ more than the advertised $\\$30$. The flyer understates what members are actually charged up front. Treating Maria's $\\$284$ as $30 + 6y$ would force the wrong monthly rate as well.`,
    `The overview already recovered $y = 41$. Compared with the advertised $\\$45$,

$$
45 - 41 = 4
$$

the actual monthly charge sits $\\$4$ below the flyer. The flyer overstates the ongoing cost while understating the signup fee.`,
    `Run the flyer's advertised rule $30 + 45m$ at $m = 6$:

$$
30 + 6(45) = 30 + 270 = 300
$$

Maria actually paid $\\$284$. Since $284 < 300$, her real total does not exceed the flyer total. The higher signup fee is more than offset, over six months, by the cheaper monthly rate.`,
    `Jason's listed total is already $\\$448$. The recovered rule rebuilds that total:

$$
38 + 10(41) = 38 + 410 = 448
$$

and $448 > 400$. The claim is a cutoff on the printed total, not a new solve.`,
    `Dropping the recovered signup fee and paying only the monthly rate for $12$ months:

$$
12 \\times 41 = 492
$$

Using the flyer's $\\$45$ here would produce $540$ and miss the negotiated-rate question.`,
  ],
  "math-5-22": [
    `The overview already recovered the Basic price $x = 19$. There is no separate connection fee, so this $19$ is the whole monthly Basic charge. Swapping Basic with Premium would hand Basic the $31$ instead.`,
    `The overview already recovered $y = 31$, not $\\$35$. Guessing Premium as "about double Basic" lands near $38$, and rounding $31$ up toward $35$ is the other common miss. The simultaneous mix of plan-months is what pins $31$.`,
    `The table already prints both combined totals. Double Household 1 is

$$
2 \\times 169 = 338
$$

against Household 2's $\\$255$. Since $255 < 338$, Household 2 is larger but not more than double. The unit prices are not needed for this comparison.`,
    `Neither plan carries a fixed fee, so an $n$-month Basic bill costs $19n$ and Premium costs $31n$. Setting them equal:

$$
19n = 31n, \\qquad 0 = 12n, \\qquad n = 0
$$

There is no positive month count at which the pure-plan bills match. Different positive monthly rates with no base fee cannot cross.`,
    `Equal months of each plan at the recovered rates:

$$
5(19) + 5(31) = 95 + 155 = 250
$$

That combined bill is $\\$250$. Using $y = 35$ here would overshoot to $270$.`,
  ],
  "math-5-23": [
    `The overview already recovered $x = 4.80$ after peeling bread and eggs off the receipts. Leaving those known items inside the totals would push the apple price off $4.80$. The loyalty-discount note does not apply to either receipt.`,
    `The overview already recovered $y = 6$ per carton against $x = 4.80$ per pound. Numerically $6.00 > 4.80$, so milk is the dearer unit, not the cheaper one. Comparing a pound to a carton is exactly the per-unit comparison the claim asks for, and milk still wins.`,
    `Five pounds of apples versus four cartons of milk, at the recovered prices:

$$
5(4.80) = 24.00, \\qquad 4(6.00) = 24.00
$$

Both land on $\\$24$. A different apple or milk price would break the tie.`,
    `Receipt 1 printed $\\$50$ with no loyalty card. Five percent off that printed total is

$$
50 \\times 0.05 = 2.50, \\qquad 50 - 2.50 = 47.50
$$

$\\$47.50$ is still above $\\$47$, so the discounted bill would not fall below the cutoff. The trap is rounding $47.50$ down, or taking $5\\%$ off only the apple-and-milk leftover.`,
    `With $x = 4.80$ and $y = 6$:

$$
10(4.80) + 2(6) = 48 + 12 = 60
$$

Equal to $\\$60$ is not "more than $\\$60$". A strict inequality fails on the boundary.`,
  ],
  "math-5-24": [
    `The overview already recovered the connection fee $x = 33$. At $240$ units, usage costs $240(0.21) = 50.40$, and $83.40 - 50.40$ leaves $33$. Treating customer service's $0.24$ as the rate would force a different fee.`,
    `The overview already recovered $y = 0.21$, not the claimed $0.24$. Using $0.24$ on Bill 1 with the recovered fee would produce $33 + 240(0.24) = 90.60$, which is not the printed $83.40$.`,
    `The recovered standard model is $33 + 0.21u$. At $u = 280$:

$$
33 + 0.21 \\cdot 280 = 33 + 58.80 = 91.80
$$

Since $91.80 < 95$, the bill sits $3.20$ under $\\$95$. Using the claimed $0.24$ here would push the bill over $95$.`,
    `The overview already found the crossover with Solar at $u = 412.5$, where $33 + 0.21u = 0.29u$. Solar has no connection fee, so it wins for $0 < u < 412.5$. Past $412.5$ units the standard plan's cheaper per-unit rate takes over. Solar does not win at every positive usage.`,
    `Five hundred units sits above the overview's crossover of $412.5$, so the lower-rate standard plan should already be cheaper. Check by substituting $u = 500$:

$$
33 + 0.21 \\cdot 500 = 33 + 105 = 138
$$

$$
0.29 \\cdot 500 = 145
$$

Standard's $\\$138$ undercuts Solar's $\\$145$.`,
  ],
  "math-5-25": [
    `The overview already recovered the pasta price $x = 19$ after stripping Table 8's $10\\%$ service charge. The printed $\\$46$ gap between tables is a post-fee comparison; feeding that gap in as food would push $x$ off $19$.`,
    `The overview already recovered $y = 15$ against pasta at $19$. Since $15 < 19$, the appetizer is cheaper, the reverse of the claim. Peak-hour tables look more expensive because of the service charge, not because appetizers outprice pasta.`,
    `The overview already reconstructed Table 8's food subtotal as $\\frac{174 + 46}{1.10} = 200$. The food-only gap against Table 5 is

$$
200 - 174 = 26
$$

The printed $\\$46$ gap was measured after the service charge. Undoing $10\\%$ by subtracting $22$ from $220$ would miss $200$ and then miss this $26$.`,
    `Table 5's food total is already $\\$174$. Attach the peak multiplier:

$$
174 \\times 1.10 = 191.40
$$

That is the billed total Table 5 would have shown as a peak table. Applying $10\\%$ only to pasta, and not to appetizers, would understate it.`,
    `Food first at the recovered prices, then the $10\\%$ peak charge:

$$
4(19) + 4(15) = 76 + 60 = 136, \\qquad 136 \\times 1.10 = 149.60
$$

Since $149.60 < 150$, the taxed mix still sits under the cutoff. Skipping the $10\\%$ would report $136$ and answer a different question.`,
  ],
  "math-5-26": [
    `The overview already recovered $x = 21$. The cost model uses item counts only; the weight and volume columns do not enter either cost equation. The claim is reading that recovered M price.`,
    `The overview already recovered $y = 27$, not $\\$30$. Scanning the weight columns for a price signal is irrelevant. Rounding $27$ up to a round $30$ is the usual miss.`,
    `Each shipment's item count is the sum of its two columns:

$$
\\frac{4470}{110 + 80} = \\frac{4470}{190} \\approx 23.53
$$

$$
\\frac{5520}{70 + 150} = \\frac{5520}{220} = 25.09\\overline{09}
$$

The two averages are not the same number. Different mixes of $21$ and $27$ items cannot share a per-unit average unless the mix ratios match.`,
    `Item N costs $27$ each, and no Item M enters that order:

$$
150 \\times 27 = 4050
$$

Using $y = 30$ here would produce $4500$ and miss the recovered price.`,
    `The cost identities rebuild from counts and recovered prices, not from weight:

$$
110(21) + 80(27) = 2310 + 2160 = 4470
$$

Weight never appears as a coefficient. Shipment 1 is cheaper because it bought a cheaper mix of units, not because its total weight $110(2.4) + 80(1.7) = 400$ kg happens to sit below Shipment 2's $423$ kg.`,
  ],
  "math-5-27": [
    `The overview already recovered $x = 29$ after expanding Job 1's seven bundles into $14$ Standard and $35$ Premium units. Treating those seven bundles as seven Standard units would push $x$ off $29$.`,
    `The overview already recovered $y = 44$, not $\\$50$. Rounding $44$ up to $50$, or pricing a whole bundle as if it were one Premium unit, is how $50$ appears.`,
    `One bundle is $2$ Standard + $5$ Premium, so seven of them unpack as

$$
7 \\times 2 = 14, \\qquad 7 \\times 5 = 35
$$

Those are already the coefficients in the overview's Job 1 equation. Skipping the expansion and treating "7 bundles" as $7$ of something else would write the wrong system.`,
    `Job 1 expands to $35$ Premium units at $y = 44$, so Job 1's Premium share is

$$
35 \\times 44 = 1540
$$

Job 2's whole invoice is $\\$1{,}301$, and $1540 > 1301$. A single line from one job can outweigh a whole other job.`,
    `The overview already checked the quoted mix:

$$
8(29) + 19(44) = 232 + 836 = 1068
$$

The issued $\\$1{,}068$ matches the recovered rates. Using $y = 50$ here would overshoot the quotation.`,
  ],
  "math-5-28": [
    `The overview already recovered the per diem $x = 55$ from Reports 1 and 2. Report 3 cannot be used to recover $x$: seven meal days alone already overshoot its printed $\\$120$. Finance's $0.40$/mile belief is a claim to check, not an input.`,
    `The overview already recovered $y = 0.32$, not Finance's $0.40$. The $\\$0.08$ gap is what you get by treating the mileage column as if it carried a round $40$ cents. Report 3 is inconsistent with this pair, so it is not used to recover $y$.`,
    `Working from Reports 1 and 2, seven meal days, ignoring miles entirely, already cost

$$
7 \\times 55 = 385
$$

Report 3 lists only $\\$120$. Even with zero miles, $385 > 120$, so that row cannot be a valid reimbursement under these rates. Three reports and two unknowns do not by themselves prove which row is the error, but this check shows Report 3 fails against the consistent pair.`,
    `The two printed totals differ by

$$
323 - 245 = 78
$$

$\\$78$ is less than $\\$80$, so the gap does not clear the claimed threshold. The per diem and mileage rate are not needed for this comparison.`,
    `Add the two printed totals from Reports 1 and 2:

$$
323 + 245 = 568
$$

Since $568 \\ge 550$, the combined reimbursement clears the cutoff. Including Report 3's $\\$120$ would be adding a row the overview already set aside.`,
  ],
  "math-5-29": [
    `The overview already recovered Widget A's labor time $x = 7$ from Week 1 and the recovered Week 2 counts. The sticky note's sum-and-difference step has to happen first; using the smudged Week 2 without unpacking it would write the wrong second equation.`,
    `The overview already recovered $y = 10$, not $12$ hours. Rounding $10$ up, or assigning Widget B the leftover after treating Widget A as $7$ and splitting $445$ poorly, is how $12$ appears.`,
    `The overview already recovered Week 2 from the sticky note: $B = A + 8$ and $A + B = 58$ give $A = 25$ and $B = 33$. Those counts are what made Week 2's labor equation $25x + 33y = 505$. The labor times are not needed to read the sticky note.`,
    `The confirmed times are $x = 7$ and $y = 10$. The new A time is $7 \\times 1.20 = 8.4$. Week 1 would then use

$$
35(8.4) + 20(10) = 294 + 200 = 494
$$

The relative increase is $\\frac{494 - 445}{445} = \\frac{49}{445} \\approx 0.110$, about $11\\%$, not $20\\%$. A $20\\%$ lift on only one of the two products cannot scale the whole week by $20\\%$.`,
    `The overview already reconstructed Week 3: $7A + 10(15) = 290$ gives $A = 20$. That is the missing Widget A count, not a guess. Using $y = 12$ here would force a different A and fail to hit $290$.`,
  ],
  "math-5-30": [
    `The overview already recovered $x = 29$ from North and South as the trusted pair. East is then the inconsistent branch, so it is not used to recover $x$. Treating East as trusted instead would move the X price off $29$.`,
    `The overview already recovered $y = 24$, not $\\$28$. East is inconsistent with this pair, since the overview already tested $65(29) + 50(24) = 3085$ against the reported $\\$3{,}200$, so East is not used to recover $y$.`,
    `The overview already costed East at the North-South prices:

$$
65(29) + 50(24) = 1885 + 1200 = 3085
$$

The dashboard printed $\\$3{,}200$. The $\\$115$ discrepancy marks East as inconsistent with that price pair, so the reported East revenue is not fully consistent.`,
    `Letter C already rebuilt East at $\\$3{,}085$ from the recovered prices. Replacing the printed $\\$3{,}200$ with $\\$3{,}085$ would put East on the same price pair as North and South.`,
    `Use the printed dashboard totals (the claim compares reported figures, not a corrected East):

$$
3875 + 3200 = 7075
$$

North reports $\\$4{,}145$. Since $4145 < 7075$, North falls well short of South and East combined, despite being the single largest branch on its own.`,
  ],
};

const data = load("21_30.json");
for (const t of data) applyTask(t, bodies[t.id]);
save("21_30.json", data);
console.log("wrote 21_30", data.map((t) => t.id).join(", "));
