import fs from "fs";

const path = new URL("./31_40.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));
const orig = JSON.parse(JSON.stringify(data));

const patch = {
  "math-5-31": {
    overview: `Two mixed fastener invoices at fixed case prices are enough to pin both unit costs, once the hinge counts are lined up. Let $x$ be the price per case of Type A Bolts and $y$ the price per case of Type B Hinges.

Invoice $1$ shipped $9$ of A and $13$ of B for $527.45$:

$$
9x + 13y = 527.45
$$

Invoice $2$ shipped $7$ of A and $19$ of B for $657.35$:

$$
7x + 19y = 657.35
$$

Clear hinges by multiplying the first by $19$ and the second by $13$:

$$
171x + 247y = 10021.55, \\qquad 91x + 247y = 8545.55
$$

Subtract:

$$
80x = 1476.00
$$

$$
x = \\frac{1476.00}{80} = 18.45
$$

Back into Invoice $1$:

$$
9(18.45) + 13y = 527.45
$$

$$
166.05 + 13y = 527.45
$$

$$
y = 27.80
$$

Type A at $18.45$ per case and Type B at $27.80$ rebuild both invoices.`,
    tacticals: [
      `**A.** → True

Type A's recovered case price is $x = 18.45$. Rounding up to the next whole dollar means taking the smallest integer at or above $18.45$, which is $19$. The rounded price is therefore $19.00$ exactly.`,
      `**B.** → True

The recovered prices are $x = 18.45$ and $y = 27.80$. Their difference is

$$
27.80 - 18.45 = 9.35
$$

Because $9 < 9.35 < 10$, Type B exceeds Type A by more than nine dollars and less than ten.`,
      `**C.** → True

Invoice $2$ ships $7 + 19 = 26$ cases for a printed $657.35$. Splitting that total evenly:

$$
\\frac{657.35}{26} = 25.2827\\ldots
$$

An implied share of about $25.28$ per case sits above $24$, so it clears the $24$ mark.`,
      `**D.** → False

Swapping Invoice $1$'s counts would cost

$$
13(18.45) + 9(27.80) = 239.85 + 250.20 = 490.05
$$

The printed total is $527.45$, so the swap changes the bill by $37.40$. The two prices differ by $9.35$ and are not close together, so neither half of the claim holds.`,
      `**E.** → False

Fixed per-case prices make a combined order linear. Adding the two invoices' quantities gives $16$ of A and $32$ of B, which costs

$$
16x + 32y = 527.45 + 657.35 = 1184.80
$$

exactly the sum of the separate bills, not strictly more. No bulk-order premium appears in the pricing rule.`,
    ],
  },
  "math-5-32": {
    overview: `The extra $135$ miles from Route $1$ to Route $2$ cost an extra $249.75$, and that ratio is Swift Cargo's per-mile rate. Let $x$ be the dispatch fee and $y$ the rate per mile. The competitor's flat $1.35$ per mile is a separate formula, used only after Swift's pair is recovered.

Route $1$ covered $170$ miles for $460.00$:

$$
x + 170y = 460.00
$$

Route $2$ covered $305$ miles for $709.75$:

$$
x + 305y = 709.75
$$

Subtract:

$$
135y = 249.75
$$

$$
y = \\frac{249.75}{135} = 1.85
$$

Back into Route $1$:

$$
x + 170(1.85) = 460.00
$$

$$
x + 314.50 = 460.00
$$

$$
x = 145.50
$$

Swift Cargo therefore charges $145.50 + 1.85d$. At $d = 250$:

$$
145.50 + 250(1.85) = 145.50 + 462.50 = 608.00
$$

That $250$-mile Swift haul is $608.00$.`,
    tacticals: [
      `**A.** → True

The recovered dispatch fee is $x = 145.50$. Halfway between $145$ and $146$ is $\\frac{145 + 146}{2} = 145.50$, so the fee sits exactly on that midpoint.`,
      `**B.** → False

The recovered per-mile rate is $y = 1.85$. Distances to the two reference prices:

$$
|1.85 - 1.50| = 0.35
$$

$$
|1.85 - 2.00| = 0.15
$$

A $0.15$ gap to $2.00$ beats a $0.35$ gap to $1.50$, so the rate sits nearer to $2.00$, not $1.50$.`,
      `**C.** → False

A $250$-mile Swift haul costs the overview's $608.00$. Five cents under $608$ would be $607.95$. The haul lands on the round figure rather than just below it.`,
      `**D.** → True

At $250$ miles Swift charges the overview's $608.00$. The competitor at the same distance is

$$
1.35(250) = 337.50
$$

The saving from switching is

$$
608.00 - 337.50 = 270.50
$$

That $270.50$ does clear $270$.`,
      `**E.** → True

Swift's slope $1.85$ differs from the competitor's $1.35$, so the two lines cross exactly once. Setting the formulas equal:

$$
145.50 + 1.85d = 1.35d
$$

$$
145.50 = -0.50d
$$

$$
d = \\frac{145.50}{-0.50} = -291
$$

A negative distance has no physical meaning, but the algebraic intersection exists.`,
    ],
  },
  "math-5-33": {
    overview: `The calorie totals are printed for the customer, not for the till, so they do not enter the price equations. Let $x$ be the Specialty Drink price and $y$ the Pastry price.

Receipt $1$ listed $7$ drinks and $9$ pastries for $78.65$:

$$
7x + 9y = 78.65
$$

Receipt $2$ listed $11$ drinks and $4$ pastries for $85.05$:

$$
11x + 4y = 85.05
$$

Clear pastries by multiplying the first by $4$ and the second by $9$:

$$
28x + 36y = 314.60, \\qquad 99x + 36y = 765.45
$$

Subtract:

$$
71x = 450.85
$$

$$
x = \\frac{450.85}{71} = 6.35
$$

Back into Receipt $1$:

$$
7(6.35) + 9y = 78.65
$$

$$
44.45 + 9y = 78.65
$$

$$
y = 3.80
$$

A drink at $6.35$ and a pastry at $3.80$ rebuild both till totals. The $6100$ and $5400$ calorie figures remain unused.`,
    tacticals: [
      `**A.** → False

Tripling the recovered drink price:

$$
3(6.35) = 19.05
$$

At $19.05$ the tripled price falls $0.95$ short of $20$, so it does not clear twenty dollars.`,
      `**B.** → True

Four pastries cost $4(3.80) = 15.20$. One drink and one pastry cost $6.35 + 3.80 = 10.15$. The four-pastry basket exceeds the mixed pair by $5.05$, so it costs more, and by a sizable margin.`,
      `**C.** → False

The two calorie figures, $6100$ and $5400$, are whole-receipt totals with no per-item calorie value attached. Bringing them in adds two fresh unknowns without saying anything about money. Prices become recoverable only because the item counts $7$, $9$, $11$, and $4$ tie the unknown prices to the dollar totals. Strip those counts away and the calorie column cannot stand in for them.`,
      `**D.** → True

Receipt $1$ lists $7 + 9 = 16$ items for $78.65$:

$$
\\frac{78.65}{16} = 4.915625
$$

At about $4.92$ per item the average sits above $4.90$ by roughly a cent and a half, the narrow margin the claim describes.`,
      `**E.** → True

A daily order of two drinks and two pastries costs $2(6.35) + 2(3.80) = 20.30$. Over seven days that is $7(20.30) = 142.10$. Change from $150$ is

$$
150.00 - 142.10 = 7.90
$$

The leftover $7.90$ sits under $8$.`,
    ],
  },
  "math-5-34": {
    overview: `The two confirmation emails land within two dollars of each other despite very different croissant-to-baguette mixes, which is what makes the prices recoverable. Let $x$ be the wholesale price per dozen croissants and $y$ the price per dozen baguettes.

Email $1$ confirmed $14$ dozen croissants and $11$ dozen baguettes for $297.30$:

$$
14x + 11y = 297.30
$$

Email $2$ confirmed $6$ dozen croissants and $23$ dozen baguettes for $299.30$:

$$
6x + 23y = 299.30
$$

Clear baguettes by multiplying the first by $23$ and the second by $11$:

$$
322x + 253y = 6837.90, \\qquad 66x + 253y = 3292.30
$$

Subtract:

$$
256x = 3545.60
$$

$$
x = \\frac{3545.60}{256} = 13.85
$$

Back into Email $1$:

$$
14(13.85) + 11y = 297.30
$$

$$
193.90 + 11y = 297.30
$$

$$
y = 9.40
$$

Croissants at $13.85$ per dozen and baguettes at $9.40$ rebuild both confirmation totals.`,
    tacticals: [
      `**A.** → True

Four dozen croissants at the recovered $x = 13.85$:

$$
4(13.85) = 55.40
$$

That $55.40$ sits $0.40$ past $55$, so four dozen do blow past fifty-five dollars.`,
      `**B.** → True

The per-dozen gap is $13.85 - 9.40 = 4.45$. Distances to the two round figures:

$$
|4.45 - 4| = 0.45
$$

$$
|4.45 - 5| = 0.55
$$

A $0.45$ gap to four dollars beats a $0.55$ gap to five, so $4.45$ sits nearer to four.`,
      `**C.** → False

Ten dozen of each costs $10(13.85) = 138.50$ in croissants and $10(9.40) = 94.00$ in baguettes, for a combined $232.50$. The croissant share is

$$
\\frac{138.50}{232.50} \\approx 0.5957
$$

Three-fifths is $0.60$, and $0.5957$ falls just below it, so croissants come up short of that share.`,
      `**D.** → False

Email $1$ covers $14 + 11 = 25$ dozen-items for $297.30$, and Email $2$ covers $6 + 23 = 29$ for $299.30$:

$$
\\frac{297.30}{25} = 11.892
$$

$$
\\frac{299.30}{29} \\approx 10.3207
$$

Email $1$ is the pricier per dozen-item, but the gap is only about $1.57$, which does not clear two dollars.`,
      `**E.** → True

Raising only the baguette price by three dollars makes it $9.40 + 3 = 12.40$ per dozen. Email $2$'s mix then costs

$$
6(13.85) + 23(12.40) = 83.10 + 285.20 = 368.30
$$

The new total is $368.30$, whose cents are exactly thirty.`,
    ],
  },
  "math-5-35": {
    overview: `Q2 shipped more rolls and fewer spools than Q1, yet total profit barely moved, so the two margins can be read off that mix shift. Let $x$ be the profit per Fabric Roll and $y$ the profit per Yarn Spool.

Q1 shipped $240$ rolls and $175$ spools for $10029.00$:

$$
240x + 175y = 10029.00
$$

Q2 shipped $310$ rolls and $90$ spools for $10260.50$:

$$
310x + 90y = 10260.50
$$

Clear spools by multiplying Q1 by $18$ and Q2 by $35$, matching both at $3150y$:

$$
4320x + 3150y = 180522.00
$$

$$
10850x + 3150y = 359117.50
$$

Subtract:

$$
6530x = 178595.50
$$

$$
x = \\frac{178595.50}{6530} = 27.35
$$

Back into Q1:

$$
240(27.35) + 175y = 10029.00
$$

$$
6564.00 + 175y = 10029.00
$$

$$
y = 19.80
$$

A Fabric Roll margin of $27.35$ and a Yarn Spool margin of $19.80$ rebuild both quarterly profits.`,
    tacticals: [
      `**A.** → True

The Fabric Roll margin is $x = 27.35$. That figure sits $0.35$ above $27.00$ and $0.15$ below $27.50$, so it clears the first line and not the second.`,
      `**B.** → False

Doubling the recovered spool margin:

$$
2(19.80) = 39.60
$$

At $39.60$ the doubled margin falls $0.40$ short of forty dollars instead of just clearing it.`,
      `**C.** → True

Two hundred Fabric Rolls at the recovered margin:

$$
200(27.35) = 5470.00
$$

One hundred fifty Yarn Spools:

$$
150(19.80) = 2970.00
$$

$$
5470.00 + 2970.00 = 8440.00
$$

Profit of $8440$ clears $8400$ by $40$, a slender margin under half a percent above the line.`,
      `**D.** → True

The printed quarterly totals differ by

$$
10260.50 - 10029.00 = 231.50
$$

Dropping the smallest hundred means subtracting $100$:

$$
231.50 - 100 = 131.50
$$

The remaining $131.50$ still carries three digits ahead of the decimal point.`,
      `**E.** → True

Five hundred Fabric Rolls and no Yarn Spools, at the recovered roll margin:

$$
500(27.35) = 13675.00
$$

The profit is exactly $13675$ with no cents left over, matching the claimed round figure.`,
    ],
  },
  "math-5-36": {
    overview: `Invoice $2$ copies Invoice $1$ at $60\\%$ scale in every column, so it adds no new pricing information and the independent pair is Invoice $1$ with Invoice $3$. Let $x$ be the price per Nitrogen cylinder and $y$ the price per Oxygen cylinder.

Invoice $1$ lists $15$ Nitrogen and $20$ Oxygen for $699.00$. Invoice $2$ lists $9$ and $12$ for $419.40$:

$$
\\frac{9}{15} = \\frac{12}{20} = \\frac{419.40}{699.00} = 0.60
$$

Every entry of Invoice $2$ is $0.6$ times the matching entry of Invoice $1$, so Invoice $2$ is Invoice $1$ multiplied through by $0.6$ and can be set aside.

Invoice $3$ lists $13$ Nitrogen and $5$ Oxygen for $326.45$:

$$
15x + 20y = 699.00, \\qquad 13x + 5y = 326.45
$$

Multiply Invoice $3$ by $4$ to match the Oxygen terms, then subtract Invoice $1$:

$$
52x + 20y = 1305.80
$$

$$
37x = 606.80
$$

$$
x = \\frac{606.80}{37} = 16.40
$$

Back into Invoice $1$:

$$
15(16.40) + 20y = 699.00
$$

$$
246.00 + 20y = 699.00
$$

$$
y = 22.65
$$

Nitrogen at $16.40$ and Oxygen at $22.65$ rebuild Invoice $1$ and Invoice $3$.`,
    tacticals: [
      `**A.** → True

Every entry of Invoice $2$ is exactly $0.6$ times the matching entry of Invoice $1$. Rescaling an equation cannot narrow down its solutions, so Invoice $2$ restates Invoice $1$ rather than corroborating it with independent evidence.`,
      `**B.** → False

The recovered Nitrogen price is $x = 16.40$. Distances to the two reference prices:

$$
|16.40 - 16.00| = 0.40
$$

$$
|16.40 - 17.00| = 0.60
$$

A $0.40$ gap to $16.00$ beats a $0.60$ gap to $17.00$, so the price is closer to $16.00$, not $17.00$.`,
      `**C.** → True

Four Oxygen cylinders cost $4(22.65) = 90.60$. Six Nitrogen cylinders cost $6(16.40) = 98.40$. Because $90.60 < 98.40$, four Oxygen cylinders cost less than six Nitrogen ones.`,
      `**D.** → False

Cylinder prices are fixed per unit, so doubling every quantity on Invoice $3$ doubles its total:

$$
2(326.45) = 652.90
$$

The doubled order would come to $652.90$, which falls $2.10$ short of $655$ instead of landing above it.`,
      `**E.** → True

Pooling Invoice $1$ and Invoice $3$ gives $699.00 + 326.45 = 1025.45$ over $15 + 20 + 13 + 5 = 53$ cylinders:

$$
\\frac{1025.45}{53} \\approx 19.35
$$

At roughly $19.35$ per cylinder the blended figure stays below $20$.`,
    ],
  },
  "math-5-37": {
    overview: `Monday and Tuesday report fractions of a finished job rather than dollars, so Alvarez's and Bianchi's hourly rates are themselves fractions of one overhaul. Let $x$ be the fraction of a job Alvarez finishes per hour and $y$ the fraction Bianchi finishes per hour.

Monday's $4$ hours from Alvarez and $7$ from Bianchi left the overhaul $65.5\\%$ done:

$$
4x + 7y = 0.655
$$

Tuesday's $9$ hours from Alvarez and $3$ from Bianchi left an identical job $90.0\\%$ done:

$$
9x + 3y = 0.900
$$

Clear Alvarez by multiplying Monday by $9$ and Tuesday by $4$:

$$
36x + 63y = 5.895, \\qquad 36x + 12y = 3.600
$$

Subtract:

$$
51y = 2.295
$$

$$
y = \\frac{2.295}{51} = 0.045
$$

Back into Monday:

$$
4x + 7(0.045) = 0.655
$$

$$
4x + 0.315 = 0.655
$$

$$
x = 0.085
$$

Alvarez finishes $0.085$ of a job per hour and Bianchi $0.045$. Combined they finish $0.085 + 0.045 = 0.130 = \\frac{13}{100}$ of a job per hour.`,
    tacticals: [
      `**A.** → False

Alvarez's solo time is one whole job over his recovered rate:

$$
\\frac{1}{0.085} \\approx 11.76
$$

Because $11.76$ lies past the $11.5$ midpoint, it rounds up to $12$ hours rather than down to $11$.`,
      `**B.** → False

Bianchi's solo job takes $\\frac{1}{0.045} \\approx 22.22$ hours. Alvarez finishing two jobs takes $\\frac{2}{0.085} \\approx 23.53$ hours. Bianchi's single job is shorter than Alvarez's pair, so the comparison runs the other way.`,
      `**C.** → True

Their combined hourly output is the overview's $0.085 + 0.045 = 0.130$, which is exactly $\\frac{13}{100}$. The reduced fraction matches the claim with no leftover factors.`,
      `**D.** → True

Bianchi logged $3$ hours on Tuesday, so his slice is $3(0.045) = 0.135$. Distances to the two candidate fractions:

$$
\\left|0.135 - \\frac{1}{7}\\right| \\approx 0.00786
$$

$$
\\left|0.135 - \\frac{1}{8}\\right| = 0.010
$$

The distance to $\\frac{1}{7}$ is the smaller of the two, so the slice is closer to $\\frac{1}{7}$.`,
      `**E.** → True

Hours across both days add to $4 + 7 + 9 + 3 = 23$, and work finished is $0.655 + 0.900 = 1.555$ jobs:

$$
\\frac{1.555}{23} \\approx 0.06761
$$

An average of about $6.76\\%$ of a job per logged hour stays just under $7\\%$.`,
    ],
  },
  "math-5-38": {
    overview: `Seasons $1$ and $2$ survived intact, so they fix both unit margins; Season $3$'s missing T-shirt count is reconstructed afterward. Let $x$ be the profit per T-Shirt and $y$ the profit per Hoodie.

Season $1$ sold $430$ T-Shirts and $260$ Hoodies for $9793.50$:

$$
430x + 260y = 9793.50
$$

Season $2$ sold $275$ T-Shirts and $410$ Hoodies for $10747.75$:

$$
275x + 410y = 10747.75
$$

Divide Season $1$ by $10$ and Season $2$ by $5$, then clear Hoodies by multiplying those by $41$ and $13$:

$$
43x + 26y = 979.35, \\qquad 55x + 82y = 2149.55
$$

$$
1763x + 1066y = 40153.35, \\qquad 715x + 1066y = 27944.15
$$

Subtract:

$$
1048x = 12209.20
$$

$$
x = \\frac{12209.20}{1048} = 11.65
$$

Back into Season $1$:

$$
430(11.65) + 260y = 9793.50
$$

$$
5009.50 + 260y = 9793.50
$$

$$
y = 18.40
$$

Season $3$ shows $310$ Hoodies and $8558.25$ of profit, so its T-Shirt count $T$ satisfies

$$
11.65T + 18.40(310) = 8558.25
$$

$$
11.65T + 5704.00 = 8558.25, \\qquad T = 245
$$

T-Shirts earn $11.65$, Hoodies earn $18.40$, and Season $3$ made $245$ T-Shirts.`,
    tacticals: [
      `**A.** → False

The recovered T-Shirt margin is $x = 11.65$. Distances to the two round figures are $|11.65 - 11| = 0.65$ and $|11.65 - 12| = 0.35$, so the margin sits closer to twelve dollars, not eleven.`,
      `**B.** → True

The recovered Hoodie margin is $y = 18.40$. That figure is $0.40$ from eighteen dollars and $0.60$ from nineteen, so it is the closer of the two to eighteen.`,
      `**C.** → False

Season $3$ reconstructed to $245$ T-Shirts. A count ending in $5$ is a multiple of five, not of ten.`,
      `**D.** → True

Season $2$'s printed profit minus Season $1$'s is the extra amount Season $2$ earned:

$$
10747.75 - 9793.50 = 954.25
$$

Fifty-two Hoodies at the recovered margin $y = 18.40$ would be worth

$$
52(18.40) = 956.80
$$

Because $954.25 < 956.80$, that extra profit would just barely fail to cover exactly $52$ Hoodies' worth of margin, falling $2.55$ short.`,
      `**E.** → True

Hold Hoodies at the recorded $310$ and replace the reconstructed T-Shirt count with $260$:

$$
260(11.65) = 3029.00
$$

$$
310(18.40) = 5704.00
$$

$$
3029.00 + 5704.00 = 8733.00
$$

That $8733$ crosses $8700$ and clears it by $33$, which is under $40$.`,
    ],
  },
  "math-5-39": {
    overview: `Shipment $2$ is logged in pounds, so divide by $2.2$ before the handling fee and the per-kilogram rate can share an equation with the metric bill. Let $x$ be the flat handling fee and $y$ the rate per kilogram.

Shipment $2$ weighed $572$ lb:

$$
\\frac{572}{2.2} = 260 \\text{ kg}
$$

Shipment $1$ already in kilograms billed $185$ kg at $677.35$, and the converted Shipment $2$ billed $260$ kg at $913.60$:

$$
x + 185y = 677.35, \\qquad x + 260y = 913.60
$$

Subtract:

$$
75y = 236.25
$$

$$
y = \\frac{236.25}{75} = 3.15
$$

Back into Shipment $1$:

$$
x + 185(3.15) = 677.35
$$

$$
x + 582.75 = 677.35
$$

$$
x = 94.60
$$

The model is $94.60 + 3.15w$ for $w$ kilograms. Shipment $3$'s $99$ lb convert the same way:

$$
\\frac{99}{2.2} = 45 \\text{ kg}
$$

so the model predicts $94.60 + 45(3.15) = 236.35$ against a billed $239.80$.`,
    tacticals: [
      `**A.** → True

The recovered handling fee is $x = 94.60$. Knocking $5.40$ off it lands on $89.20$. Measured against $89$:

$$
\\frac{94.60 - 89}{89} = \\frac{5.60}{89} \\approx 0.0629
$$

An overshoot of about $6.3\\%$ is roughly six percent, so both halves of the claim hold.`,
      `**B.** → True

Tripling the recovered per-kilogram rate:

$$
3(3.15) = 9.45
$$

That $9.45$ sits five cents below $9.50$, so the tripled rate lands just shy of $9.50$.`,
      `**C.** → True

The model predicts the overview's $236.35$ for Shipment $3$. Against the $239.80$ actually billed the gap is $3.45$. That sits inside four dollars but is not an exact match.`,
      `**D.** → False

Ninety-nine pounds convert to the overview's $45$ kg. Dividing by seven:

$$
45 = 7(6) + 3
$$

A remainder of $3$ means $45$ is not a multiple of seven. The neighbouring multiples are $42$ and $49$.`,
      `**E.** → True

At $400$ kilograms the recovered model charges

$$
94.60 + 400(3.15) = 94.60 + 1260.00 = 1354.60
$$

The charge passes $1350$ by only $4.60$, so it does just barely creep past.`,
    ],
  },
  "math-5-40": {
    overview: `Client B used exactly twice Client A's compute and twice Client A's storage, so under one fixed-rate scheme the bill would have to double as well. It does not. Let $x$ be the price per compute unit and $y$ the price per storage unit.

Client A used $11$ compute and $7$ storage for $483.70$:

$$
11x + 7y = 483.70
$$

Client B used $22$ compute and $14$ storage for $952.10$:

$$
22x + 14y = 952.10
$$

Client B's coefficients are exactly double Client A's, so scaling Client A's equation by $2$ produces

$$
22x + 14y = 2(483.70) = 967.40
$$

The left-hand sides match, but the constants do not: $967.40 \\neq 952.10$. The discrepancy is

$$
967.40 - 952.10 = 15.30
$$

relative to Client B's billed amount as $\\frac{15.30}{952.10} \\approx 0.01607$. The coefficient pairs are proportional while the constants are not, the parallel-lines case. No pair $(x, y)$ satisfies both invoices at once.`,
    tacticals: [
      `**A.** → True

Doubling Client A's $483.70$ gives the overview's $967.40$ that Client B ought to owe under one fixed-rate structure. Against the billed $952.10$ the overshoot is $15.30$, and $\\frac{15.30}{952.10} \\approx 0.01607$ is a hair over $1.6\\%$ of the real total.`,
      `**B.** → True

Consistency would force Client B's $952.10$ to be twice Client A's total, so Client A would have needed to report

$$
\\frac{952.10}{2} = 476.05
$$

exactly half of Client B's figure. Client A actually reported $483.70$, so the invoices fail that test, but the halving condition itself is the consistency requirement.`,
      `**C.** → True

The relative discrepancy is the overview's $0.01607$. Comparing with the two candidate benchmarks:

$$
\\frac{1}{60} \\approx 0.01667, \\qquad \\frac{1}{50} = 0.02000
$$

$$
|0.01607 - 0.01667| \\approx 0.00060
$$

$$
|0.01607 - 0.02000| \\approx 0.00393
$$

The $1$-in-$60$ benchmark is several times nearer.`,
      `**D.** → False

Evaluating Client A's $11$ compute units and $7$ storage units at the hypothetical rates:

$$
11(14.20) + 7(31.75) = 156.20 + 222.25 = 378.45
$$

At $378.45$ the hypothetical total sits $3.45$ above $375$ rather than just below it.`,
      `**E.** → True

Both rival figures scale Client A's $483.70$: a clean double is the overview's $967.40$ and a $50\\%$ surcharge is $1.5(483.70) = 725.55$. Against Client B's actual $952.10$:

$$
|967.40 - 952.10| = 15.30
$$

$$
|725.55 - 952.10| = 226.55
$$

The doubling hypothesis misses by $15.30$ against $226.55$ for the other, so it lands closer despite being wrong.`,
    ],
  },
};

const freezeKeys = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];

for (const [i, t] of data.entries()) {
  const p = patch[t.id];
  if (!p) throw new Error("missing patch " + t.id);
  if (p.tacticals.length !== 5) throw new Error(t.id + " tactical count");
  t.solution_overview = p.overview;
  t.tactical_explanations = p.tacticals;
  const o = orig[i];
  for (const k of Object.keys(o)) {
    if (k === "solution_overview" || k === "tactical_explanations") continue;
    if (JSON.stringify(o[k]) !== JSON.stringify(t[k])) {
      throw new Error(t.id + " mutated " + k);
    }
  }
}

const letters = ["A", "B", "C", "D", "E"];
const forbidden = [
  "Part 1:",
  "Part 2:",
  "Part 3:",
  "**Answer.**",
  "—",
  "–",
  "${",
  "so the statement is True",
  "so the statement is False",
  "so the statement is true",
  "so the statement is false",
  "The recovered law is",
];

for (const t of data) {
  const texts = [t.solution_overview, ...t.tactical_explanations];
  for (const [j, text] of texts.entries()) {
    for (const n of forbidden) {
      if (text.includes(n)) {
        throw new Error(t.id + " [" + j + "] contains " + JSON.stringify(n));
      }
    }
  }
  if (!t.solution_overview.includes("\\frac")) {
    throw new Error(t.id + " overview missing \\\\frac");
  }
  for (let i = 0; i < 5; i++) {
    const want = t.answer_key[i] ? "True" : "False";
    const head = `**${letters[i]}.** → ${want}`;
    if (!t.tactical_explanations[i].startsWith(head)) {
      throw new Error(t.id + " header mismatch " + letters[i]);
    }
    const prose = t.tactical_explanations[i]
      .replace(/\$\$[\s\S]*?\$\$/g, " ")
      .replace(/\$[^$]+\$/g, " ")
      .replace(/\*\*[^*]+\*\*/g, " ")
      .replace(/→/g, " ");
    const words = prose.trim().split(/\s+/).filter(Boolean);
    if (words.length < 12) {
      throw new Error(t.id + " " + letters[i] + " short prose " + words.length);
    }
  }
}

fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
console.log("wrote", data.map((t) => t.id).join(", "));
console.log("count", data.length);
