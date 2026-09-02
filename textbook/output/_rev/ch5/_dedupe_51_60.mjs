import { load, save, applyTask } from "./_dedupe_apply.mjs";

const bodies = {
  "math-5-51": [
    `The overview already recovered $x = 0.016$ and $y = 1200$. At AUM \\$850,000:

$$
0.016(850000) + 1200 = 14800, \\qquad \\frac{14800}{850000} \\approx 0.01741
$$

About $1.741\\%$ is less than $1.75\\%$. The flat retainer's share shrinks as AUM grows, which is what pulls the effective rate down.`,
    `The recovered retainer is $1200$ against Client 2's \\$10,800:

$$
\\frac{1200}{10800} \\approx 0.111
$$

About $11.1\\%$ exceeds $10\\%$. Treating the whole \\$10,800 as rate-only would hide the retainer entirely.`,
    `Client 1's AUM is $600000 + 150000 = 750000$, so the actual fee is $0.016(750000) + 1200 = 13200$. Under $1.4\\%$ and a doubled retainer:

$$
0.014(750000) + 2(1200) = 10500 + 2400 = 12900
$$

\\$12,900 is lower than \\$13,200. The rate cut outweighs the extra retainer at this AUM.`,
    `Letter C already built Client 1's actual fee of $13200$. Effective rates are total fee over AUM:

$$
\\frac{13200}{750000} = 0.0176, \\qquad \\frac{10800}{600000} = 0.0180
$$

The gap is $0.04$ percentage points, which is not more than $0.05$. The same retainer spreads over a larger asset base for Client 1.`,
    `Triple Client 2's AUM is \\$1,800,000. The fee is $0.016(1800000) + 1200 = 30000$, while triple Client 2's fee is $3(10800) = 32400$. Because the retainer does not triple, \\$30,000 is not more than \\$32,400.`,
  ],
  "math-5-52": [
    `The overview already recovered $x = 8.4$ and $y = 15.6$. The relative increase is

$$
\\frac{15.6 - 8.4}{8.4} = \\frac{7.2}{8.4} = \\frac{6}{7} \\approx 0.857
$$

about $85.7\\%$, which is more than $85\\%$. Measuring the $7.2$ gap against B's $15.6$ instead of A's $8.4$ would understate the jump.`,
    `The overview already audited Batch 3 at $9708$ mg against $9700$ recorded. The gap is $8$ mg:

$$
\\frac{8}{9700} \\approx 0.000825
$$

about $0.08\\%$, far below $1\\%$. Skipping the L-to-mL conversion would feed $0.32$ into an mL equation and wreck the prediction.`,
    `Doubling Batch 1's B volume to $600$ mL, with A unchanged at $500$:

$$
500(8.4) + 600(15.6) = 4200 + 9360 = 13560
$$

$13560$ mg exceeds $13500$. The extra $300$ mL of B at $15.6$ add $4680$ mg to Batch 1's $8880$.`,
    `Pooling the printed contents: $8880 + 12600 = 21480$. Twice Batch 2 alone is $2(12600) = 25200$. Since $21480 < 25200$, the combined pool is less than twice Batch 2. Batch 1 is the weaker of the two by total content.`,
    `Volume shares need no concentrations. Batch 2 is $\\frac{700}{900} \\approx 0.778$ Suspension B, while Batch 3 is $\\frac{450}{320 + 450} = \\frac{450}{770} \\approx 0.584$. Batch 2 used the higher B proportion.`,
  ],
  "math-5-53": [
    `The overview already recovered $x = 4.50$ and $y = 38$. Job 1's waste is $24$ studs and $12$ sheets:

$$
24(4.50) + 12(38) = 108 + 456 = 564
$$

$\\$564$ does not exceed $\\$700$. Pricing the whole invoice as waste would wildly overshoot.`,
    `Job 2 still orders $392$ studs, but drywall becomes $175(1.05) = 183.75$ sheets:

$$
392(4.50) + 183.75(38) = 1764 + 6982.50 = 8746.50
$$

The decrease from $\\$8{,}946$ is $199.50$, which is more than $\\$150$. Stud waste is unchanged, so only the sheet line moves.`,
    `Job 2's usable-only cost is $350(4.50) + 175(38) = 8225$. Ninety percent of the as-ordered invoice is $0.90(8946) = 8051.40$. Since $8225 > 8051.40$, usable materials account for more than $90\\%$ of Invoice 2.`,
    `The recovered ratio is $\\frac{38}{4.50} \\approx 8.444$. Eight studs cost $8(4.50) = 36$, and one sheet at $\\$38$ costs more than that, so the ratio clears $8$.`,
    `Job 1's usable cost is $200(4.50) + 150(38) = 6600$, so waste adds $\\frac{564}{6600} \\approx 0.0855$. Job 2's usable cost is $8225$, so waste adds $\\frac{721}{8225} \\approx 0.0877$. Job 1's $8.55\\%$ is smaller than Job 2's $8.77\\%$, because Job 2 leans more on the $12\\%$ stud allowance.`,
  ],
  "math-5-54": [
    `The overview already recovered $x = 3.50$. Relative excess over $3.4$ is

$$
\\frac{3.50 - 3.40}{3.40} \\approx 0.0294
$$

about $2.94\\%$, which is more than $2.5\\%$. Using the offset $13.50$ in this comparison would mix a shift with a scale.`,
    `Doubling the recovered offset to $27$, at a reading of $20$:

$$
3.50(20) + 27 = 70 + 27 = 97
$$

which exceeds $95$. Leaving the offset at $13.50$ would give $83.50$ and miss the doubled-offset question.`,
    `The overview already verified reading $45$ at $171$ against the recorded $172.20$. The prediction sits $1.20$ below the reference:

$$
\\frac{1.20}{172.20} \\approx 0.0070
$$

about $0.70\\%$ short, so it does not exceed the recorded value at all, let alone by more than $1\\%$.`,
    `The certified true values rise from $56.90$ to $124.45$:

$$
\\frac{124.45 - 56.90}{56.90} = \\frac{67.55}{56.90} \\approx 1.187
$$

About $118.7\\%$ is more than $100\\%$. The scale factor is not needed for this comparison of the printed reference values.`,
    `At a reading of $8.0$:

$$
3.50(8) + 13.50 = 28 + 13.50 = 41.5
$$

Half of Point 1's $56.90$ is $28.45$. Since $41.5 > 28.45$, the offset keeps the curve well above the origin, so halving the reading does not halve the true value.`,
  ],
  "math-5-55": [
    `The overview already recovered $x = 6.20$ and $y = 4.85$. Coffee's premium over Cocoa is

$$
\\frac{6.20 - 4.85}{4.85} = \\frac{1.35}{4.85} \\approx 0.278
$$

about $27.8\\%$, which is more than $25\\%$. Measuring that $1.35$ gap against Coffee's $6.20$ instead would answer letter E, not this one.`,
    `Shipment 1's Coffee cost is $312(6.20) = 1934.40$. As a share of $\\$2{,}943.20$:

$$
\\frac{1934.40}{2943.20} \\approx 0.657
$$

About $65.7\\%$ clears $65\\%$. Cocoa's $208$ kg cannot out-earn Coffee's $312$ kg at these prices.`,
    `A $1:1$ split of the same $800$ kg puts $400$ kg in each:

$$
400(6.20) + 400(4.85) = 2480 + 1940 = 4420
$$

$\\$4{,}420$ is lower than the actual $\\$4{,}555$. Shifting $100$ kg out of the dearer Coffee and into Cocoa is what cuts the bill.`,
    `Coffee across both shipments is $312 + 500 = 812$ kg, Cocoa $208 + 300 = 508$ kg:

$$
812(6.20) = 5034.40, \\qquad 508(4.85) = 2463.80
$$

Cocoa's $\\$2{,}463.80$ falls well short of Coffee's $\\$5{,}034.40$. Both shipments lean toward Coffee by weight, and Coffee is also dearer.`,
    `The recovered gap is $6.20 - 4.85 = 1.35$. Thirty percent of Coffee's price is $0.30(6.20) = 1.86$. Since $1.35 < 1.86$, the gap is about $21.8\\%$ of Coffee's price, not $30\\%$.`,
  ],
  "math-5-56": [
    `The overview already recovered $x = 32$ and $y = 18$. The relative excess is

$$
\\frac{32 - 18}{18} = \\frac{14}{18} \\approx 0.778
$$

about $77.8\\%$, which is more than $75\\%$. Measuring against the Truck rate would shrink the percentage and miss the cutoff.`,
    `The overview already audited Route 3 at $152$ L against $155$ recorded. The shortfall is $3$ L:

$$
\\frac{3}{155} \\approx 0.0194
$$

about $1.94\\%$, which does not clear $2\\%$. Leaving the Truck leg in miles would price the wrong unit.`,
    `With Truck still at $850$ km and Van at $900$ km:

$$
8.5(32) + 9(18) = 272 + 162 = 434
$$

$434$ L exceeds $430$ L. The extra $280$ km of Van at $18$ L/$100$ km add $50.4$ L to Route 1's $383.6$.`,
    `Route 2's fleet average is $\\frac{322}{500 + 900} \\times 100 = 23$ L per $100$ km. The distance to the Van rate $18$ is $5$, while the distance to the Truck rate $32$ is $9$, so the average sits closer to the Van. Route 2 is Van-heavy by distance.`,
    `Each vehicle covering the whole $1470$ km alone would use $14.7(32) + 14.7(18) = 470.4 + 264.6 = 735$ L. Route 1's actual $383.6$ L is far below that, because the $1{,}470$ km is split between the two vehicles rather than driven twice.`,
  ],
  "math-5-57": [
    `The overview already recovered $x = 5.4$ and $y = 6.6$. The relative excess is

$$
\\frac{6.6 - 5.4}{5.4} = \\frac{1.2}{5.4} \\approx 0.222
$$

about $22.2\\%$, which is more than $20\\%$. The blended fund rate in letter B is a different comparison and cannot be reused here.`,
    `The current $\\$2{,}646$ on $\\$45{,}000$ is a blended $\\frac{2646}{45000} = 0.0588$, or $5.88\\%$, which is less than $6\\%$. Most of the money sits in the lower-yielding Bonds.`,
    `Placing the entire fund in Equities earns $45000(0.066) = 2970$. The benchmark $2646 + 2754 = 5400$ counts a year's return twice, once for each allocation. $\\$2{,}970$ is well short of $\\$5{,}400$.`,
    `A $\\frac{50}{50}$ split returns $22500(0.054) + 22500(0.066) = 2700$. The average of the two described returns is $\\frac{2646 + 2754}{2} = 2700$ as well, so they match. That is because a $50$/$50$ mix sits halfway between the two mirrored allocations.`,
    `The Bond rate as a fraction of Equity is $\\frac{5.4}{6.6} \\approx 0.818$. Eighty percent of $6.6$ is $5.28$, and $5.4 > 5.28$, so Bonds clear $80\\%$ of Equities.`,
  ],
  "math-5-58": [
    `The overview already reconstructed Renters coverage as $C = 25$ units of $\\$1{,}000$, that is $\\$25{,}000$, which is less than $\\$30{,}000$. Using Auto's $85$ units here would reconstruct the wrong policy.`,
    `The recovered fee $214.70$ against Auto's $\\$612.50$ is $\\frac{214.70}{612.50} \\approx 0.351$, about $35\\%$, which is not more than $60\\%$. Sixty percent of Auto would be $367.50$, and the fee sits well below that.`,
    `Raising the recovered rate by $10\\%$ adds $0.10(4.68) = 0.468$ per unit. Home's $210$ units then add

$$
210(0.468) = 98.28
$$

which is more than $\\$75$. The fee is unchanged, so only the coverage line moves.`,
    `Effective premium per $\\$1{,}000$ is the whole premium over coverage units: Home $\\frac{1197.50}{210} \\approx 5.70$ and Auto $\\frac{612.50}{85} \\approx 7.21$. Home's figure is the lower of the two, not twice Auto's, because the same $\\$214.70$ fee spreads over more units on Home.`,
    `A single policy covering $85 + 210 = 295$ units pays the fee once:

$$
214.70 + 295(4.68) = 214.70 + 1380.60 = 1595.30
$$

Two separate policies total $1810$. The saving is exactly one administrative fee of $\\$214.70$.`,
  ],
  "math-5-59": [
    `The overview already projected Year 6 as $A = 898$ and $B = 874$. The gap is

$$
898 - 874 = 24
$$

which exceeds $20$. Using Year 2's $610$ versus $730$ here would reverse the comparison.`,
    `If B also grew at the recovered $72$ per year, then B at Year 6 would be $730 + 4(72) = 1018$. Combined with A's $898$, the total is $1916$. The excess over $1772$ is $144$, which is more than $140$.`,
    `Four years of the recovered rates add $4(72) = 288$ and $4(36) = 144$. The ratio is $\\frac{288}{144} = 2$, which is not greater than $2.5$. Because both species are measured over the same window, the growth ratio simply reproduces the rate ratio $x = 2y$.`,
    `Year 2's difference is $610 - 730 = -120$ and Year 6's is $898 - 874 = 24$. The difference moves from negative to positive across a linear path, so it must pass through zero between Year 2 and Year 6.`,
    `Setting the two linear populations equal:

$$
610 + 72(t - 2) = 730 + 36(t - 2)
$$

gives $36(t - 2) = 120$, so $t = 2 + \\frac{10}{3} \\approx 5.333$. At Year 5, $A = 826$ and $B = 838$, so A is still behind. The overtake lands after Year 5, not before it.`,
  ],
  "math-5-60": [
    `The overview already recovered $x = 145$ and $y = 98$. The relative excess is

$$
\\frac{145 - 98}{98} = \\frac{47}{98} \\approx 0.480
$$

about $48\\%$, which is more than $45\\%$. Measuring against Plant A's $145$ instead would understate the gap.`,
    `The overview already audited Day 3 at $3543$ MWh against $3553$ recorded. The gap is $10$ MWh:

$$
\\frac{10}{3553} \\approx 0.00282
$$

about $0.28\\%$, which is less than $0.3\\%$. Leaving Plant A's log in minutes would feed $1020$ into an hours equation.`,
    `Plant A actually ran $14 + 22 = 36$ hours across Days 1 and 2, and Plant B ran $20 + 9 = 29$. Swapping those hours:

$$
29(145) + 36(98) = 4205 + 3528 = 7733
$$

against the actual $3990 + 4072 = 8062$. Moving hours from the faster plant to the slower one costs output, so $7733 < 8062$.`,
    `The combined rate is $145 + 98 = 243$. Then $2.4(98) = 235.2$, and $243 > 235.2$. Equivalently $\\frac{243}{98} \\approx 2.48$, above the factor of $2.4$.`,
    `The claim uses Day 3 as recorded, so it adds the printed figures:

$$
3990 + 4072 + 3553 = 11615
$$

$11{,}615$ MWh clears $11{,}600$ by $15$ MWh. The recovered rates are not needed for this sum.`,
  ],
};

const data = load("51_60.json");
for (const t of data) applyTask(t, bodies[t.id]);
save("51_60.json", data);
console.log("wrote 51_60", data.map((t) => t.id).join(", "));
