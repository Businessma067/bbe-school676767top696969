import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-12:B": `The statement is a claim that hardcover editions sit above $\\$18$. The pricing desk prices hardcovers exactly $\\$5$ above paperbacks this quarter, across the board. The overview already recovered $x=12$, so $y=12+5=17$. Then $17 > 18$ is false. This letter does not rebuild the substitution into $\\$8{,}540$. It only asks whether the recovered hardcover clears an $\\$18$ bar.

**1.** Form the recovered hardcover from the recovered paperback plus the desk's gap:

$$12 + 5 = 17$$

**2.** Compare with the claimed cutoff. Then $17 > 18$ is false.

**3.** If hardcovers really were $\\$18$ and the $\\$5$ gap still held, paperbacks would be $\\$13$, and the reported mix would be

$$400 \\times 13 + 220 \\times 18 = 5200 + 3960 = 9160$$

which overshoots $\\$8{,}540$ by $\\$620$. The stem's revenue forbids that pair.

The trap figure $\\$18$ is the gap plus a round $\\$13$ paperback, or $\\$8540/220 \\approx 38$ after ignoring paperbacks, then halved. The recovered hardcover is $\\$17$, one dollar short of the cutoff. Staff headcount $12$ and loyalty $45\\%$ never push $17$ across $18$. A solver who treated $\\$18$ as "about $\\$17$, close enough" would be rounding a cutoff the claim wrote as a strict bar. Hardcovers at $17$ fail "above $18$" by a full dollar, not by a rounding.

Another wrong route is $8540/(400+220) \\approx 13.77$ as a blended book, then adding the $\\$5$ gap to get $18.77$ and calling hardcovers "above $\\$18$." That blend still contains paperbacks. The desk's hardcover is $17$, recovered from $x+5$ at $x=12$, and $17$ is not above $18$.

The opposite verdict would need a paperback above $\\$13$, or a gap above $\\$6$. With $x=12$ and a $\\$5$ gap, hardcovers are $\\$17$, which is not above $\\$18$.

Hardcovers are $\\$17$, which is not above $\\$18$, so the statement is False.`,

  "math-5-13:A": `The statement compares Standard's recovered base fee with Basic's advertised $\\$15$ base, and claims Standard's base is lower. March billed $\\$62$ for $8$ GB of overage. April billed $\\$47$ for $3$ GB. Those two Standard bills recover the intercept. Basic's $\\$15$ is printed on the flyer, not recovered.

The overview already recovered Standard's base $x = 38$. Basic's base is printed at $\\$15$. Then $38 < 15$ is false. This letter does not rebuild the subtraction $5y=15$. It only asks which intercept is smaller.

**1.** Compare the two bases:

$$38 - 15 = 23$$

Standard's base sits $\\$23$ above Basic's, not below it. Standard's base is more than double Basic's.

**2.** The $5$ GB gap between March and April, at the recovered overage rate $y=3$, is $15$, and $62-15=47$, which rebuilds April. That check uses Standard's own bills. It never pulls Basic's $\\$15$ into Standard's intercept.

**3.** A solver who mixed Basic's $\\$15$ into the Standard intercept, or who averaged $\\$62$ and $\\$47$ toward something below $\\$15$, would manufacture a false "Standard is cheaper" story. Averaging two overage bills cannot isolate a base below $\\$15$ when both bills already sit at $\\$47$ and $\\$62$.

Standard also has a steeper overage rate, $\\$3$ per GB against Basic's $\\$2$. Both pieces of Standard are more expensive than Basic, not less. Premium's $\\$40$ unlimited is a third plan and does not lower Standard's base. A customer who glanced at Premium, saw $\\$40$, and thought Standard must sit between Basic $\\$15$ and Premium $\\$40$ would still not be entitled to put Standard *below* Basic. Between is $38$, which is where the bills already are.

The opposite verdict would need Standard's March and April bills to recover an intercept below $\\$15$. With $\\$62$ at $8$ GB and $\\$47$ at $3$ GB, the intercept is $\\$38$.

Standard's base is $\\$38$, which is higher than Basic's $\\$15$, so the statement is False.`,

  "math-5-14:A": `The statement is a claim about Weekend 1's pre-tax revenue, not about either room rate. Weekend 1 charged $\\$2{,}419.20$ for $10$ Standard rooms and $4$ Suites, already including an $8\\%$ occupancy tax. The extra arithmetic is only stripping that tax. Unit prices are not needed yet.

**1.** Divide the charged total by $1.08$:

$$\\frac{2419.20}{1.08} = 2240$$

**2.** A solver who subtracted $8\\%$ of $2419.20$ as $193.536$ would land on $2225.664$ and miss the claim. An $8\\%$ tax is added to the pre-tax figure, so the peel is division by $1.08$, not subtraction of $8\\%$ of the gross. The trap figure $2225.66$ is that wrong peel.

**3.** Rebuild Weekend 1 at the recovered pre-tax rates $x=140$ and $y=210$, as a check:

$$10 \\times 140 + 4 \\times 210 = 1400 + 840 = 2240$$

Both routes give $\\$2{,}240$. Weekend 2's charged $\\$3{,}099.60$ is a different weekend and a different peel, $3099.60/1.08=2870$. Mixing that $2870$ into Weekend 1 would miss the claim.

Breakfast and Wi-Fi are listed as free and do not sit inside the occupancy tax. Mixing Weekend 2's charged $\\$3{,}099.60$ into this peel, or averaging the two charged weekends, manufactures a different pre-tax figure. The claim names Weekend 1 specifically.

The opposite verdict would need a different charged total or a different tax rate. With $\\$2{,}419.20$ at $8\\%$, Weekend 1's booking revenue before tax is $\\$2{,}240$. A solver who reported the charged $\\$2{,}419.20$ as pre-tax would have skipped the peel entirely.

The pre-tax Weekend 1 revenue is $\\$2{,}240.00$, so the statement is True.`,

  "math-5-14:B": `The statement is a claim about the gap between a Suite and a Standard room, pre-tax. The overview already recovered $x=140$ and $y=210$. The extra arithmetic is only subtracting those two recovered nightly rates, then testing whether a $\\$200$ gap could still fit both weekends.

**1.** Recovered Suite minus recovered Standard:

$$210 - 140 = 70$$

**2.** The claim writes $\\$200$. Compare:

$$70 \\neq 200$$

**3.** At a $\\$200$ gap the Weekend 1 pre-tax row would be $10x+4(x+200)=2240$, so $14x+800=2240$, $14x=1440$, $x=102.86$. Weekend 2 would then be $7(102.86)+9(302.86) \\approx 3447$, far above the peeled $\\$2{,}870$. With both weekends as charged, the Suite cannot sit $\\$200$ above Standard.

The trap figure $\\$200$ is a typical round gap, or $210-10$ after mixing a tax story, or a misread of "Suite is half again Standard" as "Suite is $\\$200$ more." Half again of $140$ is $210$, which is the recovered Suite, and the gap on that pair is $70$, not $200$. Tax does not create a $\\$200$ gap either: $1.08 \\times 70 = 75.60$, still nowhere near $200$. A solver who compared taxed Suite $226.80$ with taxed Standard $151.20$ would still get a $75.60$ gap.

The opposite verdict would need a different pair of peeled weekend totals. With Weekend 1 at $\\$2{,}240$ pre-tax and Weekend 2 at $\\$2{,}870$ pre-tax, the gap is $\\$70$.

The recovered gap is $\\$70$, not $\\$200$, so the statement is False.`,

  "math-5-14:E": `The statement is a one-Suite increment on Weekend 2: Standard rooms unchanged, one extra Suite, pre-tax. Weekend 2 actually booked $7$ Standard rooms and $9$ Suites. The claim pushes Suites from $9$ to $10$.

The overview already recovered $y=210$ as the pre-tax Suite rate. The extra arithmetic is only that increment.

**1.** One extra Suite at the recovered pre-tax Suite rate:

$$1 \\times 210 = 210$$

**2.** Weekend 2's new pre-tax total would be the peeled $\\$2{,}870$ plus that increment:

$$2870 + 210 = 3080$$

**3.** A solver who added the taxed Suite night $\\$226.80$ here would be answering a with-tax question. The claim is pre-tax. A solver who used the Standard rate $140$ would report a $\\$140$ rise and miss the claim. A solver who used letter B's false $\\$200$ gap, adding $200$ onto $140$, would happen to land on $340$ or on $200$ depending on which end they grabbed, neither of which is $210$.

Standard rooms are unchanged, so they add $0$ to the increment. Occupancy tax is not applied in this letter; the claim names pre-tax revenue. Adding a tenth Suite after tax would raise the charged total by $210 \\times 1.08 = 226.80$, which is letter D's neighbourhood, not this increment.

The opposite verdict would need a different recovered Suite rate. With $y=210$, one extra Suite raises Weekend 2's pre-tax revenue by $\\$210$. That $\\$210$ is the Suite's own pre-tax price, not a coincidence with the $\\$200$ false gap in letter B.

Weekend 2's pre-tax revenue would rise by the claimed $\\$210$, so the statement is True.`,

  "math-5-15:A": `The statement is a claim about Component A's unit cost at Crestwood. Only January and February report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs.

The overview already recovered $x = 12$ from those two actual rows. This letter does not rebuild that pair. It only asks whether the recovered A cost is the number in the claim.

**1.** The recovered $12$ is attached to Component A, not to Component B. A solver who quoted $\\$15$ here would have swapped the labels.

**2.** A solver who divided January's $\\$3{,}150$ by $150$ units of A, ignoring the $90$ units of B, would land on $\\$21$ and miss the claim. The trap figure $\\$21$ is an A-only split of a mixed January row. Warehouse floor space and on-site staff are distractors; folding them into the value would manufacture a different unit cost.

The opposite verdict would need a different recorded January or February total. With $\\$3{,}150$ and $\\$3{,}660$ as actuals, Component A cannot cost anything other than $\\$12$.

The recovered A cost matches the claimed $\\$12$, so the statement is True.`,

  "math-5-15:B": `The statement is a claim about Component B's unit cost. The overview already recovered $y = 15$ from the January and February actuals. The claim writes $\\$18$, three dollars above that leftover. March is a forecast and does not enter the solve.

**1.** Rebuild January at $x=12$ and the claimed $y=18$:

$$150 \\times 12 + 90 \\times 18 = 1800 + 1620 = 3420$$

**2.** Compare with the recorded January value:

$$3420 - 3150 = 270$$

Those extra $\\$270$ are ninety B units times a $\\$3$ overstatement.

**3.** February at the same false $y$ would be $130(12)+140(18)=1560+2520=4080$, which overshoots the recorded $\\$3{,}660$ by $\\$420$. Those extra $\\$420$ are $140 \\times 3$. Both actual rows reject $\\$18$.

The trap figure $\\$18$ is a typical misread of the March forecast: $4700$ for $200+100$ items averages about $\\$15.67$, or of February $3660/140 \\approx 26$ after ignoring A. Warehouse floor space does not price B. March's forecast quantities $200$ A and $100$ B at the actual costs would be $200(12)+100(15)=3900$, not $18$ on B. Using March to recover $y$ is the error the stem warned against: March is a forecast row.

The opposite verdict would need January's recorded value to be $\\$3{,}420$ instead of $\\$3{,}150$. With the two actual rows as printed, Component B cannot cost $\\$18$.

The claimed $\\$18$ sits $\\$3$ above the recovered $\\$15$, so the statement is False.`,

  "math-5-16:A": `The statement claims the overtime rate actually paid matches the contract's $1.5\\times$ regular-rate rule. Worker 1 earned $\\$704$ for $40$ regular hours plus $6$ overtime hours. Worker 2 earned $\\$608$ for $40$ regular hours plus $2$ overtime hours. Both completed a full $40$-hour regular week.

The overview already recovered $x=14$ and $y=24$. The extra arithmetic is only forming the contract overtime rate and comparing it with the actual overtime rate.

**1.** Contract overtime at $1.5$ times the recovered regular wage:

$$1.5 \\times 14 = 21$$

**2.** Compare with the overtime rate actually paid:

$$24 \\neq 21$$

**3.** The per-hour gap is $3$. Worker 1's six overtime hours therefore carry $6 \\times 3=18$ extra dollars, and Worker 2's two overtime hours carry $2 \\times 3=6$ extra dollars. Those extras are how the two payroll rows refuse the $1.5\\times$ rule.

A solver who compared $24$ with $1.5 \\times 16$ after misreading the regular wage would manufacture a match at $24=24$. The trap figure $\\$16$ is $\\$608/38$ after dropping two hours, or a blend of regular and overtime. The two payroll rows force $x=14$ and $y=24$, and those do not match the $1.5\\times$ rule. A solver who checked only Worker 2, $608$ against $40(14)+2(21)=560+42=602$, would already see a $\\$6$ miss, which is letter C's extra, not a match. Matching the contract would require both extras to be zero.

The opposite verdict would need the actual overtime rate to be $\\$21$. With $\\$704$ and $\\$608$ as paid, it is $\\$24$.

The actual overtime rate does not match the contract, so the statement is False.`,

  "math-5-16:B": `The statement is a claim about the regular hourly wage at Sunrise Staffing. Both workers completed a full $40$-hour regular week, so the regular wage is the shared intercept of the two payroll rows.

The overview already recovered $x = 14$. The claim writes $\\$14$, which is exactly that intercept. This letter does not rebuild the subtraction that isolated overtime. It only asks whether the recovered regular wage is the number in the claim.

**1.** The recovered $14$ is attached to regular hours, not to overtime. A solver who quoted $\\$24$ here would have swapped the rates.

**2.** A solver who divided Worker 2's $\\$608$ by $42$ total hours would land on about $\\$14.48$ and mix overtime into the regular rate. The trap figure $\\$14.48$ is an all-hours split of a mixed week. The overtime hours have to be stripped out first.

The opposite verdict would need a different pair of payroll totals. With $\\$704$ and $\\$608$ as paid, the regular wage cannot be anything other than $\\$14$.

The recovered regular wage matches the claimed $\\$14$, so the statement is True.`,

  "math-5-16:C": `The statement is a claim about Worker 2's overtime overpayment relative to the contract, not about Worker 1. The overview already recovered actual overtime $y=24$ and regular $x=14$, so the contract overtime rate is $1.5 \\times 14 = 21$. Worker 2 had $2$ overtime hours. The extra arithmetic is only the gap times those hours.

**1.** Per-hour overpayment against the contract:

$$24 - 21 = 3$$

**2.** Two overtime hours at that per-hour extra:

$$2 \\times 3 = 6$$

**3.** Worker 2's whole extra is therefore $\\$6$, matching the claim. Worker 1's six overtime hours would have been $6 \\times 3=18$, which is a different letter. A solver who used Worker 1's hours here would get $\\$18$ and miss the claim. A solver who reported the $\\$3$ per-hour gap as the total would undershoot.

The trap figure $\\$18$ is Worker 1's overtime extra, parked on Worker 2. The trap figure $\\$3$ is the rate gap left unmultiplied. Neither is Worker 2's two-hour extra. Worker 2's whole pay $\\$608$ minus the contract rebuild $40(14)+2(21)=602$ is the same $\\$6$, a useful check that does not re-solve the rates.

The opposite verdict would need Worker 2 to have a different overtime count, or a different actual overtime rate. With $2$ overtime hours at $\\$24$ against a $\\$21$ contract rate, the overtime overpayment is $\\$6$.

The overtime overpayment on Worker 2 is $\\$6.00$, so the statement is True.`,

  "math-5-17:A": `The statement claims the billing office's $\\$18$ fixed monthly charge is correct. May used $18\\,\\mathrm{m}^{3}$ and was billed $\\$56.10$ including a $10\\%$ late penalty on the entire bill. June used $25\\,\\mathrm{m}^{3}$ with no penalty, billed $\\$65.00$. After peeling May, those two clean bills recover a different intercept.

The overview already recovered $x = 15$. The office claimed $\\$18$, which sits $\\$3$ above that intercept. This letter does not rebuild $7y=14$. It only asks whether $\\$18$ can be the fee that sits on both peeled bills.

**1.** At $x=18$ and the recovered rate $y=2$, May's clean bill would be

$$18 + 18 \\times 2 = 54$$

but the peeled May charge is $\\$51$. Those extra $\\$3$ are the overstated fee.

**2.** June at the same false fee would be $18+25(2)=68$, which overshoots the printed $\\$65$ by the same $\\$3$.

**3.** The office also claimed $\\$1.85$ per cubic metre, which is not the recovered $y=2$. At $x=18$ and $y=1.85$, June would be $18+46.25=64.25$, close to $\\$65$ but not on it, and peeled May would be $18+33.30=51.30$, close to $\\$51$ but not on it. Nearby is not a match.

The trap figure $\\$18$ is the office's own claim, sitting in the stem as a disputed number. Quoting the office is not reading the bills. Nearby is not a match: the office's pair $(18, 1.85)$ misses both peeled totals, so it is not the plan.

The opposite verdict would need the peeled May charge to be $\\$54$ instead of $\\$51$. With $\\$51$ and $\\$65$ as clean totals, the fixed charge cannot be $\\$18$.

The recovered fixed charge is $\\$15$, not $\\$18$, so the statement is False.`,

  "math-5-17:B": `The statement is a claim about the per-cubic-metre rate. After peeling May, the $7\\,\\mathrm{m}^{3}$ gap between June and May isolates that slope.

The overview already recovered $y = 2$. The claim writes $\\$2.00$ per cubic metre, which is exactly that slope. This letter does not rebuild the intercept. It only asks whether the recovered rate is the number in the claim.

**1.** The recovered $2$ is attached to usage, not to the fixed charge. A solver who quoted $\\$15$ here would have swapped rate and fee.

**2.** A solver who used the office's $\\$1.85$ here would be quoting the disputed claim, not the bills. A solver who divided June's $\\$65$ by $25$ would land on $\\$2.60$ and forget the fixed charge. The trap figure $\\$2.60$ is an all-in split of June. The trap figure $\\$1.85$ is the office's rate.

The opposite verdict would need a different pair of clean bills. With peeled May at $\\$51$ and June at $\\$65$, the rate cannot be anything other than $\\$2$.

The recovered rate matches the claimed $\\$2.00$ per cubic metre, so the statement is True.`,

  "math-5-17:C": `The statement is a claim about May's water charge after the $10\\%$ late penalty is removed. May was billed $\\$56.10$ including that penalty on the entire bill. The extra arithmetic is only dividing by $1.10$. Unit prices are not needed yet.

**1.** Divide the billed May total by $1.10$:

$$\\frac{56.10}{1.10} = 51$$

**2.** A solver who subtracted $10\\%$ of $56.10$ as $5.61$ would land on $50.49$ and miss the claim. The penalty was applied to the whole bill, so the peel is division by $1.10$, not subtraction of $10\\%$ of the gross. The trap figure $50.49$ is that wrong peel.

**3.** Rebuild May at the recovered plan $x=15$, $y=2$:

$$15 + 18 \\times 2 = 51$$

Both routes give $\\$51$. June's $\\$65$ is already clean and should not be peeled. A solver who divided June by $1.10$ as well would get $59.09$ and have invented a penalty the stem says June did not carry. A solver who reported $\\$56.10$ as the water charge would have left the penalty in.

The opposite verdict would need a different May billed total or a penalty that was a flat add-on rather than $10\\%$ of the whole bill. With $\\$56.10$ as $1.10$ times the water charge, May's actual water charge is $\\$51$.

May's actual water charge was $\\$51.00$, so the statement is True.`,

  "math-5-17:E": `The statement applies May's $10\\%$ late penalty to June's already-clean $\\$65$ bill. June had no penalty. The claim is a counterfactual. The extra arithmetic is only multiplying the printed June total by $1.10$. The recovered fee and rate are not needed, because June's $\\$65$ is already the clean water charge.

**1.** Apply a $10\\%$ penalty to the whole June bill:

$$65 \\times 1.10 = 71.50$$

**2.** A solver who added $\\$10$ as a round penalty would get $\\$75$. A solver who applied $10\\%$ only to the usage portion $50$, leaving the $\\$15$ fee unpenalized, would get $65+5=70$. The stem says May's penalty was applied to the entire bill, so the same rule on June hits the whole $\\$65$.

**3.** Rebuilding June from the recovered plan and then penalizing gives the same figure: $15+25(2)=65$, then $65 \\times 1.10=71.50$. That is a check, not a second solve.

The trap figure $\\$75$ is a round ten-dollar penalty. The trap figure $\\$70$ is a fee-exempt $10\\%$. Neither is "the same $10\\%$ late penalty" the stem described for May. A solver who took $10\\%$ of $65$ as $6.50$ and then added it to May's $\\$56.10$ would be mixing months. June's counterfactual stands on June's $\\$65$ alone.

The opposite verdict would need June's clean bill to be a different total, or a penalty rule that skipped the fixed charge. With $\\$65$ penalized at $10\\%$ on the whole bill, the total would have been $\\$71.50$.

A $10\\%$ penalty on June would have produced $\\$71.50$, so the statement is True.`,

  "math-5-19:A": `The statement compares Vendor A's price for Product X with Vendor B's price for Product X. Each vendor quoted two bundles, and each vendor's pair was solved separately. The overview already recovered $x_A=9$ and $x_B=11$. Then $9<11$, so Vendor A is cheaper on X.

**1.** Compare the two recovered X prices:

$$11 - 9 = 2$$

Vendor A charges $\\$2$ less per unit of X.

**2.** Vendor A's bundles were $20X+15Y=450$ and $25X+12Y=441$. Vendor B's matching mixes were $460$ and $467$. The $\\$10$ and $\\$26$ gaps on those bundles are not the unit-X gap. A solver who compared bundle totals $\\$450$ and $\\$460$ would reach the same ranking for those particular bundles, but the claim is about unit X, not about a mixed bundle.

**3.** A solver who swapped X and Y would compare $18$ with $16$ and conclude Vendor A is *more* expensive, flipping the verdict. Y is letter B's question. This letter is X.

The opposite verdict would need Vendor A's recovered X to sit at or above Vendor B's $11$. With the four bundle totals as printed, $x_A=9$ and $x_B=11$. Upcoming order size $40$ of X and $30$ of Y does not rewrite those unit prices. That mix is letter C's costing. This letter only ranks the two X prices. Vendor B is cheaper on Y, which is the next letter, and that fact does not reverse the X ranking.

The opposite verdict would need Vendor A's recovered X to sit at or above Vendor B's $11$. With the four bundle totals as printed, $x_A=9$ and $x_B=11$.

Vendor A charges $\\$9$ for X and Vendor B charges $\\$11$, so Vendor A is cheaper on X, so the statement is True.`,
};

const patches = [];
for (const e of index) {
  const body = bodies[`${e.id}:${e.letter}`];
  if (!body) continue;
  patches.push({
    file: e.file,
    id: e.id,
    idx: e.idx,
    letter: e.letter,
    key: e.key,
    body,
  });
}

const applied = applyMidPatches(patches);
for (const a of applied) {
  const flag = a.words < 160 ? "UNDER160" : a.words < 280 && a.words > 220 ? "MID" : "";
  console.log(a.id, a.letter, a.words, flag);
}
console.log("applied", applied.length);
