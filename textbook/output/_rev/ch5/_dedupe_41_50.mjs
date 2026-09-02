import { load, save, applyTask } from "./_dedupe_apply.mjs";

const bodies = {
  "math-5-41": [
    `The overview already recovered $x = 4800$ and $y = 13600$. The interest each fund earns is

$$
0.0525(4800) = 252, \\qquad 0.0375(13600) = 510
$$

Triple Fund A's interest would be $3(252) = 756$, and Fund B's $\\$510$ falls well short. Fund B earns a little over double, not more than triple.`,
    `Holding the recovered balances fixed and lifting Fund A to $6.75\\%$:

$$
0.0675(4800) + 0.0375(13600) = 324 + 510 = 834
$$

The combined return rises to $\\$834$, comfortably above $\\$800$. The extra $1.5$ points on $\\$4{,}800$ add $\\$72$ to the original $\\$762$.`,
    `The overview already recovered the two balances, so the trust holds $4800 + 13600 = 18400$. The given $\\$762$ return as a share of the whole is

$$
\\frac{762}{18400} \\approx 0.04141
$$

About $4.14\\%$ is more than $4\\%$, which fits a blend of $5.25\\%$ and $3.75\\%$ weighted toward the larger, lower-rate fund.`,
    `Both hypothetical balances are supplied, so this is a direct evaluation at the stated rates, not a new solve:

$$
9200(0.0525) + 9200(0.0375) = 483 + 345 = 828
$$

$$
828 - 762 = 66
$$

An even split would earn $\\$828$, $\\$66$ away from the real $\\$762$ rather than within $\\$5$.`,
    `The recovered balances differ by $13600 - 4800 = 8800$. Relative to the smaller:

$$
\\frac{8800}{4800} = \\frac{11}{6} \\approx 1.833
$$

About $183\\%$ exceeds $180\\%$. Measuring against the larger balance instead would understate the percentage.`,
  ],
  "math-5-42": [
    `Salt is conserved when two batches are poured together, so their recorded totals add and neither concentration is needed:

$$
144 + 184 = 328
$$

At $328$ g the combined container holds $28$ g more than $300$ g.`,
    `The overview already recovered $x = 16$ and $y = 12$. B's concentration relative to A's is

$$
\\frac{12}{16} = 0.75
$$

At $75\\%$ that is more than $70\\%$. Using the volumes rather than the concentrations would compare the wrong quantities.`,
    `The overview already predicted Batch 3 at $104$ g against $109$ g recorded. Holding Solution A at $2$ L and letting $V$ be the true volume of B:

$$
2(16) + 12V = 109, \\qquad 12V = 77, \\qquad V = \\frac{77}{12} \\approx 6.417
$$

$6.417$ sits closer to $6.4$ than to $6.0$. Attributing the $5$ g to Solution A instead would move a different unknown.`,
    `A $3:1$ mix of total volume $V$ is $\\frac{3}{4}V$ of A and $\\frac{1}{4}V$ of B. At the recovered concentrations:

$$
16\\left(\\frac{3}{4}V\\right) + 12\\left(\\frac{1}{4}V\\right) = 15V
$$

$$
15V = 130, \\qquad V = \\frac{130}{15} \\approx 8.67
$$

The batch would need about $8.67$ L, not $7.5$ L. Using $7.5$ with these rates would yield only $112.5$ g.`,
    `A mixing ratio fixes the proportions on its own, so neither concentration is needed. Batch 2 was mixed $5:1$, making Solution A $\\frac{5}{6} \\approx 0.833$ of the volume, while Batch 1 was mixed $3:2$, making Solution A $\\frac{3}{5} = 0.60$. About $83\\%$ against $60\\%$ makes Batch 2 the richer in A.`,
  ],
  "math-5-43": [
    `The overview already recovered $x = 17.50$ and overtime pay of $x + y = 26$ per hour. Employee A's $2.5$ overtime hours cost $2.5(26) = 65$, so a $10\\%$ bonus on that overtime is

$$
0.10(65) = 6.50
$$

which exceeds $\\$6$. Using the premium $8.50$ alone, without the base, would understate the overtime block.`,
    `Employee B's overtime is $7$ hours at $26$:

$$
7(26) = 182, \\qquad \\frac{182}{882} \\approx 0.206
$$

At about $20.6\\%$ the overtime portion is barely half the claimed $40\\%$. The $40$ shared regular hours dilute overtime's share of gross.`,
    `Actual combined pay is $765 + 882 = 1647$. At the recovered base alone, $45$ hours each would pay

$$
45(17.50) = 787.50, \\qquad 2(787.50) = 1575
$$

The real payroll exceeds $\\$1{,}575$ by $\\$72$. Dropping the overtime premium is what opens that gap.`,
    `A $15\\%$ rise makes the flat wage $17.50(1.15) = 20.125$. Then $42.5$ hours at that single rate pay

$$
42.5(20.125) = 855.3125
$$

About $\\$855$ is roughly $\\$90$ above her actual $\\$765$, so her pay would rise rather than decrease.`,
    `Both ratios are built from figures already printed:

$$
\\frac{7}{2.5} = 2.8, \\qquad \\frac{882}{765} \\approx 1.153
$$

The hours ratio of $2.8$ is larger than the pay ratio. The $40$ regular hours both employees share dominate gross pay and dilute differing overtime.`,
  ],
  "math-5-44": [
    `The overview already recovered $x = 27$ and $y = 11$ after setting Project 2 aside as a $1.5\\times$ repeat of Project 1. With $20$ m of wood and $40$ m of wire:

$$
20(27) + 40(11) = 540 + 440 = 980
$$

$\\$980$ exceeds $\\$950$ by $\\$30$.`,
    `The recovered gap is $27 - 11 = 16$. The threshold it must beat is

$$
1.45(11) = 15.95
$$

At $\\$16$ against $\\$15.95$ the gap clears by five cents. Using Project 2 in place of Project 3 would not pin the prices down.`,
    `Greenfield charges fixed prices per meter, so cost is linear. The proposed project is exactly the two originals added together:

$$
28x + 64y = 750 + 710 = 1460
$$

The combined project costs exactly the sum of the two bills, not less. A volume discount would have to appear as an extra term, and none exists.`,
    `Only the wire price moves, so the increase is $\\$2$ on each of Project 1's $24$ m of wire:

$$
24(2) = 48, \\qquad \\frac{48}{750} = 0.064
$$

A $6.4\\%$ increase is far below $15\\%$. The wood price never enters.`,
    `Each project's cost per meter comes from its own printed figures:

$$
\\frac{710}{10 + 40} = 14.20, \\qquad \\frac{750}{18 + 24} \\approx 17.86
$$

Project 3 averages $\\$14.20$ per meter against Project 1's roughly $\\$17.86$, because Project 3 leans mostly on the cheaper wire.`,
  ],
  "math-5-45": [
    `The overview already recovered $x = 48$. At $48$ km/h, Boat A alone would need

$$
\\frac{356}{48} \\approx 7.42
$$

hours, which is more than $7$. Using Boat B's $77$ here would undercut $5$ hours and miss the claim.`,
    `In the $2$ hours before they meet, at the recovered speeds:

$$
2(48) = 96, \\qquad 2(77) = 154, \\qquad 154 - 96 = 58
$$

Half of the $250$ km gap is $125$ km, and the $58$ km difference is under that.`,
    `Raising both speeds by $20\\%$ raises their sum by $20\\%$ as well. The overview's combined speed is $125$, so the new closing speed is $1.2(125) = 150$, and

$$
\\frac{250}{150} = \\frac{5}{3} \\approx 1.667
$$

About $1$ hour $40$ minutes is still longer than $1.5$ hours. The individual speeds are not needed once $x + y$ is known.`,
    `Over $3$ hours the pair covers $3(125) = 375$ km, which is $19$ km more than the $356$ km stretch. The same total is $3(48) + 3(77) = 375$.`,
    `Boat B's advantage measured against Boat A's recovered speed:

$$
\\frac{77 - 48}{48} = \\frac{29}{48} \\approx 0.604
$$

At about $60.4\\%$ that is more than $60\\%$, though only just.`,
  ],
  "math-5-46": [
    `The overview already recovered $x = 95$ and $y = 120$. At a hypothetical Season 1 mix of $260$ t Wheat and $160$ t Barley:

$$
260(95) + 160(120) = 24700 + 19200 = 43900
$$

$\\$43{,}900$ does not exceed $\\$44{,}000$. Twenty extra tonnes of Wheat at $\\$95$ add $\\$1{,}900$ to the printed $\\$42{,}000$, which still sits $\\$100$ short of the cutoff.`,
    `The recovered advantage is $120 - 95 = 25$, while $25\\%$ of Wheat's rate is $0.25(95) = 23.75$. Since $25 > 23.75$, the advantage is more than $25\\%$ of Wheat's profit per tonne.`,
    `The overview already reconstructed Season 3 Wheat as $T = 180$. The two season totals are

$$
180 + 300 = 480, \\qquad 180 + 260 = 440
$$

Since $480 > 440$, Season 3 is not the lighter harvest. Dropping Barley's $300$ t from Season 3 would reverse the comparison.`,
    `A Season 3 mix of $220$ t Wheat and $300$ t Barley at the recovered rates would earn

$$
220(95) + 300(120) = 20900 + 36000 = 56900
$$

The gap above the recorded $\\$53{,}100$ is $3800$, and $3800 > 3500$. Forty extra tonnes of Wheat at $\\$95$ add $\\$3{,}800$.`,
    `Average profit per tonne uses only the printed rows:

$$
\\frac{42000}{240 + 160} = 105, \\qquad \\frac{48300}{180 + 260} \\approx 109.77
$$

Season 2's $\\$109.77$ per tonne exceeds Season 1's $\\$105$. Season 2 leans more on the higher-margin Barley.`,
  ],
  "math-5-47": [
    `The overview already recovered $x = 47$ and $y = 19$. In $15$ years the ages are $62$ and $34$. Twice $34$ is $68$, and $62 < 68$, so the elder is less than double the younger. The nine-years-from-now record already has the elder at exactly double; fifteen years later the younger has closed relatively.`,
    `The recovered gap is $47 - 19 = 28$, while $45\\%$ of the elder's age is $0.45(47) = 21.15$. Since $28 > 21.15$, the gap is more than $45\\%$ of the elder's current age.`,
    `In $4.5$ years the ages are $51.5$ and $23.5$. The ratio is

$$
\\frac{51.5}{23.5} \\approx 2.191
$$

which is not more than $2.5$. The future double-age moment is nine years out, not $4.5$.`,
    `Ten years ago the ages were $37$ and $9$, summing to $46$. Since $46$ is not less than $40$, the claim fails. The younger would have been negative twenty years ago, so ten years is still a legal look-back.`,
    `The overview's first record already places the triple relationship five years back, and the recovered ages confirm it: $47 - 5 = 42$ and $3(19 - 5) = 42$. Five years ago is more than four years ago, so such a point exists.`,
  ],
  "math-5-48": [
    `The overview already recovered $x = 55$ and $y = 80$ after setting Order 2 aside as a double of Order 1. With swapped markups on Order 3:

$$
3(1.18)(55) + 12(1.32)(80) = 194.70 + 1267.20 = 1461.90
$$

$\\$1{,}461.90$ is above the actual $\\$1{,}350.60$, so the total increases rather than decreases. Order 3 is B-heavy, and B's markup would rise.`,
    `A's dollar markup is $0.32(55) = 17.60$ and B's is $0.18(80) = 14.40$. Then $\\frac{14.40}{17.60} \\approx 0.818$, about $81.8\\%$, which exceeds $80\\%$.`,
    `Order 1's wholesale total at the recovered costs is $8(55) + 5(80) = 840$, so the markup is

$$
1052.80 - 840 = 212.80
$$

$\\$212.80$ exceeds $\\$150$. The same figure is $0.32(440) + 0.18(400)$.`,
    `One unit of B retails at $1.18(80) = 94.40$, so three extra units add

$$
3(94.40) = 283.20
$$

which is more than $\\$280$. Product A is unchanged, so its line does not move.`,
    `The wholesale ratio is $\\frac{80}{55} \\approx 1.455$. The retail prices are $1.18(80) = 94.40$ and $1.32(55) = 72.60$, so the retail ratio is $\\frac{94.40}{72.60} \\approx 1.300$. The wholesale ratio is larger because Product A carries the bigger markup, which compresses the gap on the retail side.`,
  ],
  "math-5-49": [
    `The overview already recovered $x = 7$ and $y = 3$. If a draw were worth half a win, then $y = 3.5$, and the Falcons would score

$$
9(7) + 4(3.5) = 63 + 14 = 77
$$

which is above their actual $75$. Draws are currently worth less than half a win ($3 < 3.5$).`,
    `The Ravens' $67$ points include $6(3) = 18$ from draws. The draw share is $\\frac{18}{67} \\approx 0.269$, about $27\\%$, far below $45\\%$.`,
    `Under $2$ per win and $1$ per draw, the same records score

$$
9(2) + 4(1) = 22, \\qquad 7(2) + 6(1) = 20
$$

The Falcons stay ahead $22$ to $20$. The actual $7$/$3$ system is not needed once the halved values are applied to the printed records.`,
    `Falcons points from wins versus draws: $9(7) = 63$ and $4(3) = 12$, so $\\frac{63}{12} = 5.25$, well short of $15$. Treating wins as $9$ and draws as $4$ without the point values would mix counts with contributions.`,
    `Converting three Falcons draws into wins leaves $12$ wins and $1$ draw:

$$
12(7) + 1(3) = 87, \\qquad 87 - 75 = 12
$$

Each converted draw adds only $7 - 3 = 4$ points, so three conversions add $12$, not more than $20$.`,
  ],
  "math-5-50": [
    `The overview already recovered $x = 7.6$ and $y = 11.4$. At $12$ L of A and $10$ L of B:

$$
12(7.6) + 10(11.4) = 91.2 + 114 = 205.2
$$

$205.2$ kg exceeds $200$ kg. Two extra litres of B at $11.4$ add $22.8$ kg to Batch 1's $182.4$.`,
    `The relative increase is $\\frac{11.4 - 7.6}{7.6} = \\frac{3.8}{7.6} = 0.50$, exactly $50\\%$, not more than $50\\%$. A strict inequality fails on the boundary.`,
    `The overview already audited Batch 3 at $140.6$ kg against $147.0$ recorded. The discrepancy is $6.4$ kg:

$$
\\frac{6.4}{147} \\approx 0.0435
$$

about $4.35\\%$ of the recorded mass, which is more than $4\\%$. Leaving the $2.5$ gal unconverted would feed the wrong A volume into this percentage.`,
    `Replacing $9.5$ L of A with $10$ L:

$$
10(7.6) + 6(11.4) = 76 + 68.4 = 144.4
$$

The distance from $147.0$ is $2.6$ kg, which is not within $2$ kg.`,
    `Pooling is linear in the volumes:

$$
17(7.6) + 23(11.4) = 129.2 + 262.2 = 391.4
$$

and $182.4 + 209.0 = 391.4$. Because mass per litre is fixed, pouring the batches together changes nothing.`,
  ],
};

const data = load("41_50.json");
for (const t of data) applyTask(t, bodies[t.id]);
save("41_50.json", data);
console.log("wrote 41_50", data.map((t) => t.id).join(", "));
