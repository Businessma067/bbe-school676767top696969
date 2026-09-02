import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-45": [
    `The statement claims Boat A alone would take more than $7$ hours to cover the $356$ km stretch.

The overview already recovered Boat A's speed at $48$ km/h. The extra arithmetic is that quotient.

$$\\frac{356}{48} \\approx 7.417$$

Then $7.417 > 7$. About $7$ hours and $25$ minutes. A solver who used Boat B's $77$ km/h would get about $4.62$ hours and fail the cutoff. A solver who used $250/48 \\approx 5.21$ would be using the other stretch.

Boat A needs about $7.42$ hours for $356$ km, which is more than $7$ hours, so the statement is True.`,

    `The statement looks at the $250$ km meeting: the difference in distance covered by the two boats, compared with half of $250$ km.

They meet after $2$ hours. The overview already has $A=48$ and $B=77$.

**1.** Distance A covers in $2$ hours:

$$2 \\times 48 = 96$$

**2.** Distance B covers in $2$ hours:

$$2 \\times 77 = 154$$

**3.** Difference, then half the stretch:

$$154 - 96 = 58, \\qquad \\frac{250}{2} = 125$$

Then $58 < 125$. The difference is less than half the gap. Because they start from opposite docks and close $250$ km together, the difference in distances is $(77-48)\\times 2=58$, while half the stretch would be the difference only if one boat were stationary.

A solver who reported $154-96=58$ against $250$ itself, or against $96$, would be using the wrong comparison figure. The claim names half of the $250$ km gap.

The distance difference at meeting is $58$ km, less than $125$ km, so the statement is True.`,

    `The statement raises both speeds by $20\\%$ and claims the time to close the original $250$ km gap would fall below $1.5$ hours.

Combined speed is currently $48+77=125$ km/h, so $250/125=2$ hours, matching the stem. After a $20\\%$ rise each, combined speed is $1.2 \\times 125=150$ km/h.

**1.** New time:

$$\\frac{250}{150} \\approx 1.667$$

hours.

**2.** Compare with $1.5$:

$$1.667 > 1.5$$

The new time is about $1$ hour $40$ minutes, which is not below $1.5$ hours. A $20\\%$ speed increase cuts time to $1/1.2 \\approx 0.833$ of the original $2$ hours, which is $1.667$, not $1.5$. To hit $1.5$ hours the combined speed would need $250/1.5 \\approx 166.7$ km/h, a $33\\%$ rise.

A solver who subtracted $20\\%$ of $2$ hours, $2-0.4=1.6$, is close but still not below $1.5$. A solver who used $1.2 \\times 2=2.4$ would have increased time instead of speed.

The $20\\%$ speed-up still takes about $1.67$ hours, not below $1.5$, so the statement is False.`,

    `The statement claims the combined distance both boats would cover in $3$ hours exceeds the $356$ km stretch.

$$3 \\times (48 + 77) = 3 \\times 125 = 375$$

Then $375 > 356$. In $3$ hours they cover $19$ km more than that stretch. This is not the head-start scenario; it is both boats travelling simultaneously for $3$ hours.

A solver who gave B a $3$-hour head start and then one more hour of A, which is the stem's second meeting, would be answering a different clock. The claim is $3$ hours at actual speeds, both boats.

Three hours of combined travel is $375$ km, which exceeds $356$ km, so the statement is True.`,

    `The statement claims Boat B's speed is more than $60\\%$ higher than Boat A's.

$$\\frac{77 - 48}{48} = \\frac{29}{48} \\approx 0.6042$$

about $60.4\\%$, which exceeds $60\\%$. A solver who used $77/48 \\approx 1.604$ and then reported $160\\%$ would have forgotten to subtract $1$. "Higher than" is the relative increase, $60.4\\%$. A solver who used $29/77 \\approx 38\\%$ against B would be using the wrong base.

B is about $60.4\\%$ faster than A, which is more than $60\\%$, so the statement is True.`,
  ],

  "math-5-46": [
    `The statement raises Season 1's Wheat from $240$ t to $260$ t, Barley unchanged, and claims total profit would exceed $\\$44{,}000$.

The overview already recovered Wheat at $\\$95$ per tonne. Season 1 printed $\\$42{,}000$. The extra $20$ t of Wheat add $20 \\times 95$.

**1.** Extra Wheat profit:

$$20 \\times 95 = 1900$$

**2.** New Season 1 total:

$$42000 + 1900 = 43900$$

**3.** Compare with $\\$44{,}000$:

$$43900 < 44000$$

The new total is $\\$43{,}900$, one hundred dollars short of the cutoff. A solver who used Barley's $120$ on the extra $20$ t would get $42000+2400=44400$ and flip the verdict. The extra tonnes are Wheat.

Season 1 at $260$ t Wheat would profit $\\$43{,}900$, which does not exceed $\\$44{,}000$, so the statement is False.`,

    `The statement claims Barley's per-tonne advantage over Wheat is more than $25\\%$ of Wheat's per-tonne profit.

The overview already recovered Wheat $95$ and Barley $120$. The extra arithmetic is the gap and the ratio.

$$120 - 95 = 25, \\qquad \\frac{25}{95} \\approx 0.2632$$

about $26.3\\%$, which exceeds $25\\%$. A solver who used $25/120 \\approx 20.8\\%$ against Barley would fail the cutoff. The claim names Wheat as the base.

Barley's advantage is about $26.3\\%$ of Wheat's rate, more than $25\\%$, so the statement is True.`,

    `The statement claims Season 3's total tonnage is less than Season 2's total tonnage.

The overview already reconstructed Season 3's Wheat as $180$ t, with Barley $300$ t printed. Season 2 is $180$ t Wheat and $260$ t Barley.

**1.** Season 3 total:

$$180 + 300 = 480$$

**2.** Season 2 total:

$$180 + 260 = 440$$

**3.** Compare:

$$480 > 440$$

Season 3 is *more* tonnes, not less. The Wheat columns match at $180$; Season 3's extra $40$ t of Barley is the whole difference.

A solver who left Season 3's Wheat blank and compared $300$ with $440$ would find $300<440$ and accept the claim by dropping the reconstructed Wheat. The reconstruction is $180$ t, and it counts.

Season 3's $480$ t is not less than Season 2's $440$ t, so the statement is False.`,

    `The statement replaces Season 3's reconstructed $180$ t of Wheat with $220$ t and claims the recorded $\\$53{,}100$ would then have been understated by more than $\\$3{,}500$.

The extra $40$ t of Wheat at $\\$95$ per tonne is the understatement.

$$40 \\times 95 = 3800$$

Then $3800 > 3500$. If Season 3 had actually produced $220$ t of Wheat, true profit would be $53100+3800=56900$, and the recorded $53100$ would sit $3800$ low.

A solver who used Barley's $120$ on the $40$ t would get $4800$, still above $3500$, so that swap would not flip the verdict. A solver who used $20$ t extra, mixing letter A's increment, would get $1900$ and fail the cutoff.

The understatement would be $\\$3{,}800$, which is more than $\\$3{,}500$, so the statement is True.`,

    `The statement claims Season 2's profit per tonne of total output exceeds Season 1's.

**1.** Season 1: $240+160=400$ t at $\\$42{,}000$, so $42000/400=105$ per tonne.

**2.** Season 2: $180+260=440$ t at $\\$48{,}300$, so $48300/440=109.772\\ldots$ per tonne.

**3.** Compare: $109.77 > 105$. Season 2 is Barley-heavier, and Barley pays $120$ versus Wheat's $95$, so the average rises.

A solver who compared totals $48300>42000$ without dividing by tonnes would still rank Season 2 higher, but that is not per-tonne. The claim is profit per tonne of total output.

Season 2's about $\\$109.77$ per tonne exceeds Season 1's $\\$105$, so the statement is True.`,
  ],
};

applyLetters("41_50.json", patches);
console.log("applied 45-46");
