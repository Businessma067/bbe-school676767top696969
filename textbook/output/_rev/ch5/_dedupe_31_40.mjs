import { load, save, applyTask } from "./_dedupe_apply.mjs";

const bodies = {
  "math-5-31": [
    `The overview already recovered $x = 18.45$. Rounding up to the next whole dollar means taking the smallest whole number at or above $18.45$, which is $19$. Rounding to nearest instead would also land on $19$, but rounding down would miss it.`,
    `The overview already recovered $x = 18.45$ and $y = 27.80$. The gap is

$$
27.80 - 18.45 = 9.35
$$

Since $9 < 9.35 < 10$, the gap exceeds nine dollars while staying under ten. Treating the two invoice totals as if they priced a single fastener type would miss this gap entirely.`,
    `An even split ignores which case holds which fastener, so the recovered prices are not needed. Invoice 2 ships $7 + 19 = 26$ cases for $\\$657.35$:

$$
\\frac{657.35}{26} = 25.2827\\ldots
$$

An implied share of about $\\$25.28$ per case sits above $\\$24$. Using Invoice 1's mix here would answer a different row.`,
    `The recovered prices differ by $9.35$, so they are not close together. Applying the swapped counts on Invoice 1:

$$
13(18.45) + 9(27.80) = 239.85 + 250.20 = 490.05
$$

Invoice 1's printed total is $\\$527.45$, so the swap changes the bill by $\\$37.40$. Both halves of the claim fail: the total moves, and the prices are not close.`,
    `Riverside charges fixed per-case prices, so a bill is linear in the quantities and there is no premium term. Adding the two invoices' quantities gives $16$ of Type A and $32$ of Type B:

$$
16x + 32y = 527.45 + 657.35 = 1184.80
$$

The combined order comes to exactly the sum of the two separate bills, not strictly more.`,
  ],
  "math-5-32": [
    `The overview already recovered the dispatch fee $x = 145.50$. The midpoint of $\\$145$ and $\\$146$ is $\\frac{145 + 146}{2} = 145.50$, exactly that fee. Rounding the fee to a whole dollar would hide the halfway claim.`,
    `The overview already recovered $y = 1.85$. Distances to the two reference prices:

$$
|1.85 - 1.50| = 0.35, \\qquad |1.85 - 2.00| = 0.15
$$

A $15$-cent gap to $\\$2.00$ beats a $35$-cent gap to $\\$1.50$, so the rate sits nearer to $\\$2.00$, the opposite of the claim.`,
    `A $250$-mile haul at the recovered formula:

$$
145.50 + 250(1.85) = 145.50 + 462.50 = 608.00
$$

Five cents under $\\$608$ would be $\\$607.95$. The haul lands on the round figure rather than just below it.`,
    `Letter C already costed Swift Cargo's $250$-mile haul at $\\$608$. The competitor charges a flat $\\$1.35$ per mile with no dispatch fee:

$$
1.35(250) = 337.50
$$

$$
608.00 - 337.50 = 270.50
$$

The saving clears $\\$270$. Ignoring Swift's dispatch fee would understate the gap.`,
    `Swift Cargo charges $145.50 + 1.85d$ and the competitor charges $1.35d$. Different slopes guarantee a single crossing. Setting them equal:

$$
145.50 + 1.85d = 1.35d, \\qquad 145.50 = -0.50d, \\qquad d = \\frac{145.50}{-0.50} = -291
$$

The formulas meet at $d = -291$ miles. A negative distance has no physical meaning, so the crossover exists algebraically while being commercially irrelevant.`,
  ],
  "math-5-33": [
    `The overview already recovered $x = 6.35$. Tripling that price:

$$
3(6.35) = 19.05
$$

At $\\$19.05$ the tripled price falls $95$ cents short of $\\$20$. Rounding $6.35$ up to $\\$7$ before tripling is how a solver clears $20$.`,
    `The overview already recovered $x = 6.35$ and $y = 3.80$. Compare the two baskets:

$$
4(3.80) = 15.20, \\qquad 6.35 + 3.80 = 10.15
$$

$$
15.20 - 10.15 = 5.05
$$

Four pastries cost $\\$15.20$ against $\\$10.15$ for a drink and a pastry, half again as much.`,
    `The calorie figures $6100$ and $5400$ are whole-receipt totals with no per-item calorie value attached, so bringing them in adds two fresh unknowns without saying anything about money. Prices become recoverable only because the item counts act as coefficients on the dollar totals. The calorie column cannot stand in for those counts.`,
    `An even split needs only Receipt 1's printed figures. That receipt lists $7 + 9 = 16$ items for $\\$78.65$:

$$
\\frac{78.65}{16} = 4.915625
$$

At about $\\$4.92$ per item the average sits above $\\$4.90$ by roughly a cent and a half.`,
    `A daily order of two drinks and two pastries at the recovered prices:

$$
2(6.35) + 2(3.80) = 12.70 + 7.60 = 20.30
$$

Over seven days, measured against $\\$150$:

$$
7(20.30) = 142.10, \\qquad 150 - 142.10 = 7.90
$$

The change is $\\$7.90$, ten cents under $\\$8$.`,
  ],
  "math-5-34": [
    `The overview already recovered $x = 13.85$. Four dozen at that price cost

$$
4(13.85) = 55.40
$$

$\\$55.40$ is $40$ cents past $\\$55$. Using the baguette price here would undercut $55$ instead of blowing past it.`,
    `The overview already recovered $x = 13.85$ and $y = 9.40$. The gap and its distances:

$$
13.85 - 9.40 = 4.45, \\qquad |4.45 - 4| = 0.45, \\qquad |4.45 - 5| = 0.55
$$

A $45$-cent gap to four dollars beats a $55$-cent gap to five, so $\\$4.45$ sits nearer to four.`,
    `Ten dozen of each at the recovered prices:

$$
10(13.85) = 138.50, \\qquad 10(9.40) = 94.00, \\qquad 138.50 + 94.00 = 232.50
$$

The croissant share is $\\frac{138.50}{232.50} \\approx 0.5957$. Three-fifths is $0.60$, and $0.5957$ falls just below it.`,
    `Averaging each email's total over the dozens it covers uses only the printed figures:

$$
\\frac{297.30}{14 + 11} = \\frac{297.30}{25} = 11.892, \\qquad \\frac{299.30}{6 + 23} = \\frac{299.30}{29} \\approx 10.3207
$$

The gap is about $1.57$, not two dollars. Email 1 is pricier per dozen-item, but the second half of the claim fails.`,
    `Raising only the recovered baguette price by three dollars makes it $9.40 + 3 = 12.40$. Email 2 then costs

$$
6(13.85) + 23(12.40) = 83.10 + 285.20 = 368.30
$$

The new total is $\\$368.30$, whose cents are exactly $30$. Raising croissants instead would change a different line.`,
  ],
  "math-5-35": [
    `The overview already recovered $x = 27.35$. That sits $35$ cents above $\\$27.00$ and $15$ cents below $\\$27.50$, so it clears the first line and not the second.`,
    `The overview already recovered $y = 19.80$. Doubling the spool margin:

$$
2(19.80) = 39.60
$$

At $\\$39.60$ the doubled margin falls $40$ cents short of forty dollars instead of just clearing it.`,
    `The proposed mix at the recovered margins:

$$
200(27.35) + 150(19.80) = 5470 + 2970 = 8440
$$

Profit of $\\$8{,}440$ clears $\\$8{,}400$ by $\\$40$, under half a percent above the line.`,
    `The two printed quarterly totals differ by

$$
10260.50 - 10029.00 = 231.50
$$

Dropping the smallest hundred:

$$
231.50 - 100 = 131.50
$$

$131.50$ still sits in the three-digit band below $1{,}000$. No per-unit margin is needed for this comparison.`,
    `With no Yarn Spools in the mix, only the recovered Fabric Roll margin matters:

$$
500(27.35) = 13675
$$

Because $27.35$ times $500$ works out to a whole number of dollars, the profit is exactly $\\$13{,}675$ with no cents left over.`,
  ],
  "math-5-36": [
    `The overview already checked Invoice 2 against Invoice 1:

$$
\\frac{9}{15} = \\frac{12}{20} = \\frac{419.40}{699.00} = 0.60
$$

Every entry of Invoice 2 is $0.6$ times the matching entry of Invoice 1, so Invoice 2's equation is Invoice 1 multiplied through by $0.6$. Rescaling cannot narrow the solutions; Invoice 2 restates rather than corroborates.`,
    `The overview already recovered $x = 16.40$ from the independent pair Invoice 1 and Invoice 3. Distances:

$$
|16.40 - 16.00| = 0.40, \\qquad |16.40 - 17.00| = 0.60
$$

A $40$-cent gap to $\\$16$ beats a $60$-cent gap to $\\$17$, so the price is closer to $\\$16$. Using the redundant Invoice 2 in place of Invoice 3 would not pin $x$ down at all.`,
    `The overview already recovered $x = 16.40$ and $y = 22.65$. Compare the two purchases:

$$
4(22.65) = 90.60, \\qquad 6(16.40) = 98.40
$$

Four Oxygen cylinders at $\\$90.60$ cost less than six Nitrogen at $\\$98.40$. Swapping the two prices would reverse the comparison.`,
    `Cylinder prices are fixed per unit, so doubling every quantity on Invoice 3 doubles its total exactly:

$$
2(326.45) = 652.90
$$

The doubled order comes to $\\$652.90$, which falls $\\$2.10$ short of $\\$655$. Unpicking the unit prices is unnecessary here.`,
    `Pooling the printed figures from Invoices 1 and 3:

$$
699.00 + 326.45 = 1025.45, \\qquad 35 + 18 = 53
$$

$$
\\frac{1025.45}{53} \\approx 19.35
$$

At roughly $\\$19.35$ per cylinder the blended figure stays below $\\$20$. Including the redundant Invoice 2 would double-count Invoice 1's information.`,
  ],
  "math-5-37": [
    `The overview already recovered Alvarez's rate $x = 0.085$. One whole job takes

$$
\\frac{1}{0.085} \\approx 11.76
$$

hours. Because $11.76$ lies past the $11.5$ midpoint, it rounds up to $12$ rather than down to $11$.`,
    `The overview already recovered $x = 0.085$ and $y = 0.045$. The two durations:

$$
\\frac{1}{0.045} \\approx 22.22, \\qquad \\frac{2}{0.085} \\approx 23.53
$$

Bianchi's single job takes about $22.22$ hours, shorter than the roughly $23.53$ hours Alvarez needs for two. The comparison runs the other way.`,
    `Combined hourly output is the sum of the recovered rates:

$$
0.085 + 0.045 = 0.130 = \\frac{13}{100}
$$

The reduced fraction is exactly $\\frac{13}{100}$. Adding the two days' completion percentages and dividing by hours would be a different average, letter E's quantity.`,
    `Bianchi logged $3$ hours on Tuesday, so his slice is three times the recovered hourly rate:

$$
3(0.045) = 0.135
$$

$$
\\left|0.135 - \\frac{1}{7}\\right| \\approx 0.00786, \\qquad \\left|0.135 - \\frac{1}{8}\\right| = 0.010
$$

The distance to $\\frac{1}{7}$ is the smaller of the two.`,
    `This average uses only the logged hours and the reported completion figures. Hours add to $4 + 7 + 9 + 3 = 23$, and the work finished is $0.655 + 0.900 = 1.555$ jobs:

$$
\\frac{1.555}{23} \\approx 0.06761
$$

About $6.76\\%$ of a job per logged hour stays just under $7\\%$. The individual rates are not needed.`,
  ],
  "math-5-38": [
    `The overview already recovered $x = 11.65$. Distances: $|11.65 - 11| = 0.65$ and $|11.65 - 12| = 0.35$, so the margin sits closer to twelve dollars, not eleven.`,
    `The overview already recovered $y = 18.40$, which is $40$ cents from eighteen and $60$ cents from nineteen. It is the closer of the two to eighteen.`,
    `The overview already reconstructed Season 3's T-Shirt count as $T = 245$. That number ends in $5$, so it is a multiple of five but not of ten. Rounding $245$ to $250$ is how a multiple of ten appears.`,
    `The gap between the two intact seasons is

$$
10747.75 - 9793.50 = 954.25
$$

while $52$ Hoodies at the recovered margin are worth

$$
52(18.40) = 956.80, \\qquad 956.80 - 954.25 = 2.55
$$

The gap falls $\\$2.55$ short of covering $52$ Hoodies.`,
    `With $260$ T-Shirts and $310$ Hoodies at the recovered margins, instead of the reconstructed $245$:

$$
260(11.65) + 310(18.40) = 3029 + 5704 = 8733
$$

$$
8733 - 8700 = 33
$$

The rewritten season crosses $\\$8{,}700$ and clears it by $\\$33$, which is under $\\$40$.`,
  ],
  "math-5-39": [
    `The overview already recovered $x = 94.60$. Removing $\\$5.40$:

$$
94.60 - 5.40 = 89.20
$$

Measured against $\\$89$, the real fee runs $\\frac{94.60 - 89}{89} = \\frac{5.60}{89} \\approx 0.0629$, about $6.3\\%$, which is roughly six percent.`,
    `The overview already recovered $y = 3.15$. Tripling the rate:

$$
3(3.15) = 9.45
$$

$\\$9.45$ sits five cents below $\\$9.50$. Using pounds instead of kilograms in the rate would produce a different $y$ and miss this.`,
    `The overview already audited Shipment 3: $\\frac{99}{2.2} = 45$ kg, and the model predicts $94.60 + 45(3.15) = 236.35$ against the billed $\\$239.80$. The gap is $239.80 - 236.35 = 3.45$, inside four dollars but not an exact match.`,
    `This is a claim about the converted weight alone:

$$
\\frac{99}{2.2} = 45
$$

Then $45 = 7(6) + 3$, so $\\frac{45}{7}$ is not whole. The multiples of seven on either side are $42$ and $49$. The fee and rate never enter.`,
    `At $400$ kg the recovered formula gives

$$
94.60 + 400(3.15) = 94.60 + 1260 = 1354.60
$$

The charge passes $\\$1{,}350$ by $\\$4.60$. Leaving the weight in pounds would price the wrong unit.`,
  ],
  "math-5-40": [
    `The overview already scaled Client A's invoice: $2(483.70) = 967.40$. Client B was billed $\\$952.10$, so

$$
967.40 - 952.10 = 15.30, \\qquad \\frac{15.30}{952.10} \\approx 0.01607
$$

At about $1.607\\%$ the overshoot is a hair over $1.6\\%$ of the billed amount. No consistent $(x, y)$ pair can make both invoices true at once.`,
    `Because Client B's usage doubles Client A's in both categories, a consistent scheme would force Client B's bill to be twice Client A's. That would make Client A's total

$$
\\frac{952.10}{2} = 476.05
$$

exactly half of Client B's figure. Client A actually reported $\\$483.70$, so the requirement is not met in practice, but the halving condition itself is exactly what consistency would demand.`,
    `Letter A already measured the relative error at about $0.01607$. Comparing that with the two benchmarks:

$$
\\frac{1}{60} \\approx 0.01667, \\qquad \\frac{1}{50} = 0.02000
$$

The distance to $1$-in-$60$ is about $0.00060$, several times nearer than the distance to $1$-in-$50$.`,
    `Both hypothetical prices are handed over, so this is a single evaluation of Client A's mix, not a recovery from the invoices:

$$
11(14.20) + 7(31.75) = 156.20 + 222.25 = 378.45
$$

At $\\$378.45$ the total sits $\\$3.45$ above $\\$375$ rather than just below it.`,
    `Both rival figures scale Client A's $\\$483.70$: $2(483.70) = 967.40$ and $1.5(483.70) = 725.55$. Against Client B's actual $\\$952.10$:

$$
|967.40 - 952.10| = 15.30, \\qquad |725.55 - 952.10| = 226.55
$$

The doubling hypothesis misses by $\\$15.30$ against $\\$226.55$ for the other, so despite being wrong it is much the better guess.`,
  ],
};

const data = load("31_40.json");
for (const t of data) applyTask(t, bodies[t.id]);
save("31_40.json", data);
console.log("wrote 31_40", data.map((t) => t.id).join(", "));
