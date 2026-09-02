import fs from "fs";

const path = new URL("./41_50.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));
const orig = JSON.parse(JSON.stringify(data));

const patch = {
  "math-5-41": {
    overview: `The two rates sit on the page already, so the work is recovering how the trust was split. Let $x$ be Fund A's balance and $y$ Fund B's.

Fund B holds $4000$ more than twice Fund A:

$$
y = 2x + 4000
$$

Together the funds return $762$ at $5.25\\%$ and $3.75\\%$:

$$
0.0525x + 0.0375y = 762
$$

Fold the balance relation into the return:

$$
0.0525x + 0.0375(2x + 4000) = 762
$$

$$
0.0525x + 0.075x + 150 = 762
$$

$$
0.1275x = 612
$$

$$
x = \\frac{612}{0.1275} = 4800
$$

Then

$$
y = 2(4800) + 4000 = 13600
$$

Fund A therefore holds $4800$ and Fund B $13600$, for a combined $18400$. The dollar returns that go with those balances are

$$
0.0525(4800) = 252, \\qquad 0.0375(13600) = 510
$$

and $252 + 510 = 762$, matching the officer's combined figure.`,
    tacticals: [
      `**A.** → False

Fund A's recovered interest is $252$ and Fund B's is $510$. Triple of Fund A's interest is

$$
3(252) = 756
$$

Fund B's $510$ sits well below $756$. The larger balance earns a little over double Fund A's return, not more than triple.`,
      `**B.** → True

Hold the recovered balances $4800$ and $13600$ fixed and lift Fund A's rate from $5.25\\%$ to $6.75\\%$, leaving Fund B at $3.75\\%$:

$$
0.0675(4800) + 0.0375(13600) = 324 + 510 = 834
$$

The new combined return is $834$, which clears the $800$ line.`,
      `**C.** → True

The trust's recovered total is $4800 + 13600 = 18400$, and the given combined return is $762$. As a share of the whole:

$$
\\frac{762}{18400} \\approx 0.04141
$$

About $4.14\\%$ sits above $4\\%$. That blend is what a $5.25\\%$ fund mixed with a larger $3.75\\%$ fund should produce.`,
      `**D.** → False

An even split of $9200$ in each fund at the original rates pays

$$
9200(0.0525) + 9200(0.0375) = 483 + 345 = 828
$$

Distance from the actual $762$ is

$$
828 - 762 = 66
$$

Sixty-six dollars is far outside a $5$ window.`,
      `**E.** → True

Fund A at $4800$ is the smaller balance. The gap relative to that smaller figure is

$$
\\frac{13600 - 4800}{4800} = \\frac{8800}{4800} = \\frac{11}{6} \\approx 1.833
$$

A $180\\%$ gap would be a ratio of $1.80$, and $1.833 > 1.80$. The larger fund stands about $183\\%$ above the smaller one.`,
    ],
  },
  "math-5-42": {
    overview: `Before any concentration can be named, each mixing ratio has to be turned into litres. Let $x$ be grams of salt per litre in Solution A and $y$ the same in Solution B.

Batch $1$ is $10$ L at $3:2$, so $\\frac{3}{5}(10) = 6$ L of A and $\\frac{2}{5}(10) = 4$ L of B, carrying $144$ g:

$$
6x + 4y = 144
$$

Batch $2$ is $12$ L at $5:1$, so $\\frac{5}{6}(12) = 10$ L of A and $\\frac{1}{6}(12) = 2$ L of B, carrying $184$ g:

$$
10x + 2y = 184
$$

Halve both:

$$
3x + 2y = 72, \\qquad 5x + y = 92
$$

From the second, $y = 92 - 5x$. Substitute:

$$
3x + 2(92 - 5x) = 72
$$

$$
3x + 184 - 10x = 72
$$

$$
-7x = -112
$$

$$
x = \\frac{112}{7} = 16, \\qquad y = 92 - 5(16) = 12
$$

Solution A is $16$ g/L and Solution B is $12$ g/L. Batch $3$'s log of $8$ L at $1:3$ is $2$ L of A and $6$ L of B, which those concentrations predict as

$$
2(16) + 6(12) = 32 + 72 = 104
$$

against $109$ g recorded, a $5$ g discrepancy.`,
    tacticals: [
      `**A.** → True

Salt is conserved when two finished batches are poured together, so the recorded totals add as they stand:

$$
144 + 184 = 328
$$

The pooled container holds $328$ g, which is $28$ g above $300$.`,
      `**B.** → True

The recovered concentrations are $16$ g/L in A and $12$ g/L in B. Solution B as a fraction of Solution A is

$$
\\frac{12}{16} = 0.75
$$

Seventy-five percent is above the $70\\%$ cutoff.`,
      `**C.** → True

Batch $3$ was logged as $2$ L of A and $6$ L of B, and the $5$ g gap is the difference between the predicted $104$ g and the recorded $109$ g. Hold A's $2$ L fixed and let $V$ be the true volume of B:

$$
2(16) + 12V = 109
$$

$$
32 + 12V = 109, \\qquad V = \\frac{77}{12} \\approx 6.417
$$

Distance to $6.4$ is about $0.017$; distance to $6.0$ is about $0.417$. The corrected volume sits much nearer $6.4$ L.`,
      `**D.** → False

A $3:1$ mix of total volume $V$ is $\\frac{3}{4}V$ litres of A and $\\frac{1}{4}V$ of B. At the recovered $16$ g/L and $12$ g/L:

$$
16\\left(\\frac{3}{4}V\\right) + 12\\left(\\frac{1}{4}V\\right) = 12V + 3V = 15V
$$

Requiring $130$ g of salt:

$$
15V = 130, \\qquad V = \\frac{130}{15} \\approx 8.67
$$

The batch needs about $8.67$ L, not $7.5$ L.`,
      `**E.** → True

A mixing ratio fixes volume shares on its own. Batch $2$ at $5:1$ puts Solution A at

$$
\\frac{5}{5 + 1} = \\frac{5}{6} \\approx 0.833
$$

of the volume, while Batch $1$ at $3:2$ puts Solution A at

$$
\\frac{3}{3 + 2} = \\frac{3}{5} = 0.60
$$

About $83\\%$ against $60\\%$ makes Batch $2$ the richer in A.`,
    ],
  },
  "math-5-43": {
    overview: `Overtime is billed as base plus premium, so each extra hour carries both unknowns at once. Let $x$ be the base hourly wage and $y$ the overtime premium per overtime hour.

Employee A worked $40$ regular hours plus $2.5$ overtime hours for $765$:

$$
40x + 2.5(x + y) = 42.5x + 2.5y = 765
$$

Employee B worked $40$ regular plus $7$ overtime for $882$:

$$
40x + 7(x + y) = 47x + 7y = 882
$$

Scale A's equation by $2.8$ so the premium term matches B's $7y$:

$$
119x + 7y = 2142
$$

Subtract B:

$$
(119x + 7y) - (47x + 7y) = 2142 - 882
$$

$$
72x = 1260
$$

$$
x = \\frac{1260}{72} = 17.50
$$

Back into A's equation:

$$
42.5(17.50) + 2.5y = 765
$$

$$
743.75 + 2.5y = 765, \\qquad y = 8.50
$$

The base wage is $17.50$ an hour and the premium is $8.50$, so overtime pays $x + y = 26.00$ an hour.`,
    tacticals: [
      `**A.** → True

Employee A's $2.5$ overtime hours at the recovered $26.00$ rate earned

$$
2.5(26.00) = 65.00
$$

Ten percent of that overtime pay is

$$
0.10(65.00) = 6.50
$$

A $6.50$ bonus clears the $6.00$ line.`,
      `**B.** → False

Employee B's $7$ overtime hours at $26.00$ produce

$$
7(26.00) = 182.00
$$

As a share of the printed $882$ gross:

$$
\\frac{182}{882} \\approx 0.206
$$

About $20.6\\%$ is barely half of the claimed $40\\%$ threshold.`,
      `**C.** → True

Actual combined gross is the two printed totals:

$$
765 + 882 = 1647
$$

Forty-five hours each at the recovered base wage of $17.50$, with no premium, would pay

$$
45(17.50) = 787.50, \\qquad 2(787.50) = 1575
$$

The real payroll of $1647$ exceeds that $1575$ flat-rate figure by $72$.`,
      `**D.** → False

A $15\\%$ rise on the recovered base of $17.50$ makes a flat wage of

$$
17.50(1.15) = 20.125
$$

Employee A's same $42.5$ hours at that single rate pay

$$
42.5(20.125) = 855.3125
$$

About $855$ sits roughly $90$ above her actual $765$, so the hypothetical raises pay rather than cutting it.`,
      `**E.** → True

Both ratios are built from figures already on the pay records:

$$
\\frac{7}{2.5} = 2.8, \\qquad \\frac{882}{765} = \\frac{98}{85} \\approx 1.153
$$

The overtime-hours ratio of $2.8$ is larger than the gross-pay ratio of about $1.15$. Shared regular hours dilute the overtime gap in the pay totals.`,
    ],
  },
  "math-5-44": {
    overview: `Three invoices are printed, but one of them is a scaled copy and cannot pin a second price. Let $x$ be the cedar price per metre and $y$ the wire price per metre.

Project $2$'s $27$ m of wood and $36$ m of wire are exactly $1.5$ times Project $1$'s $18$ m and $24$ m, and

$$
1.5(750) = 1125
$$

matches Project $2$'s printed total, so that row repeats Project $1$ at scale. The usable pair is Project $1$ and Project $3$:

$$
18x + 24y = 750, \\qquad 10x + 40y = 710
$$

Divide the first by $6$ and the second by $10$:

$$
3x + 4y = 125, \\qquad x + 4y = 71
$$

Subtract:

$$
2x = 54
$$

$$
x = \\frac{54}{2} = 27
$$

Then $27 + 4y = 71$, so $4y = 44$ and $y = 11$. Cedar is $27$ per metre and wire is $11$ per metre. Project $1$ rebuilds as $18(27) + 24(11) = 486 + 264 = 750$, and Project $3$ as $10(27) + 40(11) = 270 + 440 = 710$.`,
    tacticals: [
      `**A.** → True

With wood at $27$ per metre and wire at $11$, a Project $3$ variant of $20$ m wood and $40$ m wire would cost

$$
20(27) + 40(11) = 540 + 440 = 980
$$

Nine hundred eighty exceeds $950$ by $30$.`,
      `**B.** → True

The recovered prices are $x = 27$ and $y = 11$. The per-metre gap and the $145\\%$ wire-price threshold are

$$
x - y = 27 - 11 = 16, \\qquad 1.45(11) = 15.95
$$

Sixteen clears $15.95$ by five cents, so the gap is more than $145\\%$ of the wire price.`,
      `**C.** → False

Greenfield charges a fixed price per metre, so cost is linear in the metres installed. Adding Project $1$'s $18$ m wood and $24$ m wire to Project $3$'s $10$ m and $40$ m produces exactly the claimed $28$ m and $64$ m, and

$$
28x + 64y = (18x + 24y) + (10x + 40y) = 750 + 710 = 1460
$$

The combined project costs $1460$, the same as the two bills added, not less.`,
      `**D.** → False

Only the wire price moves, by $2$ on each of Project $1$'s $24$ m of wire:

$$
24(2) = 48
$$

Against Project $1$'s printed $750$:

$$
\\frac{48}{750} = 0.064
$$

A $6.4\\%$ increase, taking the project to $798$, is well short of $15\\%$.`,
      `**E.** → False

Each project's cost per metre uses its own printed figures. Project $3$ installed $10 + 40 = 50$ m for $710$, and Project $1$ installed $18 + 24 = 42$ m for $750$:

$$
\\frac{710}{50} = 14.20, \\qquad \\frac{750}{42} \\approx 17.86
$$

Project $3$ averages $14.20$ per metre against Project $1$'s roughly $17.86$, because Project $3$ leans on the cheaper wire. Project $3$'s rate is the lower of the two.`,
    ],
  },
  "math-5-45": {
    overview: `Closing a gap from opposite docks is a combined-speed problem, not two separate journeys. Let $x$ be Boat A's speed and $y$ Boat B's, both in km/h.

On the $250$ km stretch they meet after $2$ hours, so they close $250$ km together:

$$
2(x + y) = 250, \\qquad x + y = 125
$$

On the $356$ km stretch Boat B runs a $3$-hour head start plus the hour after Boat A departs, four hours in all, while Boat A runs $1$ hour:

$$
x + 4y = 356
$$

Subtract the combined-speed equation:

$$
(x + 4y) - (x + y) = 356 - 125
$$

$$
3y = 231
$$

$$
y = \\frac{231}{3} = 77, \\qquad x = 125 - 77 = 48
$$

Boat A travels at $48$ km/h and Boat B at $77$ km/h. Those speeds add back to $125$, and $48 + 4(77) = 48 + 308 = 356$.`,
    tacticals: [
      `**A.** → True

At the recovered $48$ km/h, Boat A alone on the $356$ km stretch needs

$$
\\frac{356}{48} \\approx 7.42
$$

hours. That duration is more than $7$ hours.`,
      `**B.** → True

In the $2$ hours before they meet on the $250$ km stretch, Boat A covers $2(48) = 96$ km and Boat B covers $2(77) = 154$ km. The difference is

$$
154 - 96 = 58
$$

Half of the $250$ km gap is $125$ km, and $58$ sits well under $125$.`,
      `**C.** → False

Raising both speeds by $20\\%$ raises their sum by the same factor. The recovered combined speed is $125$ km/h, so the new closing speed is

$$
1.2(125) = 150
$$

Time to close the original $250$ km gap:

$$
t = \\frac{250}{150} = \\frac{5}{3} \\approx 1.667
$$

About $1$ hour $40$ minutes is still longer than $1.5$ hours.`,
      `**D.** → True

Distance covered by the pair is combined speed times time. Over $3$ hours at the recovered $125$ km/h:

$$
3(125) = 375
$$

The same total comes from $3(48) + 3(77) = 144 + 231 = 375$. That $375$ km exceeds the $356$ km stretch by $19$ km.`,
      `**E.** → True

Boat B's advantage against Boat A's recovered $48$ km/h is

$$
\\frac{77 - 48}{48} = \\frac{29}{48} \\approx 0.604
$$

About $60.4\\%$ is more than $60\\%$, though only just.`,
    ],
  },
  "math-5-46": {
    overview: `Season $3$ is missing a Wheat figure, so the two intact seasons have to yield the rates first. Let $x$ be Wheat profit per tonne and $y$ Barley profit per tonne.

Season $1$ sold $240$ t of Wheat and $160$ t of Barley for $42000$. Divide by $80$:

$$
3x + 2y = 525
$$

Season $2$ sold $180$ t and $260$ t for $48300$. Divide by $20$:

$$
9x + 13y = 2415
$$

Multiply the first by $13$ and the second by $2$ so both carry $26y$:

$$
39x + 26y = 6825, \\qquad 18x + 26y = 4830
$$

Subtract:

$$
21x = 1995
$$

$$
x = \\frac{1995}{21} = 95
$$

Then $3(95) + 2y = 525$, so $285 + 2y = 525$ and $y = 120$. Wheat earns $95$ per tonne and Barley $120$. Season $3$ still shows $300$ t of Barley and $53100$ of profit, so its Wheat tonnage $T$ satisfies

$$
95T + 120(300) = 53100
$$

$$
95T = 17100, \\qquad T = 180
$$

Season $3$ therefore grew $180$ t of Wheat alongside the logged $300$ t of Barley.`,
    tacticals: [
      `**A.** → False

At the recovered $95$ and $120$ per tonne, a Season $1$ mix of $260$ t Wheat and $160$ t Barley would earn

$$
260(95) + 160(120) = 24700 + 19200 = 43900
$$

That $43900$ does not exceed $44000$.`,
      `**B.** → True

Barley's advantage over Wheat is $120 - 95 = 25$. Twenty-five percent of Wheat's rate is

$$
0.25(95) = 23.75
$$

Since $25 > 23.75$, the gap is more than $25\\%$ of Wheat's profit per tonne.`,
      `**C.** → False

Season $3$'s reconstructed Wheat is $180$ t beside $300$ t of Barley, so its total is $180 + 300 = 480$ t. Season $2$'s printed total is $180 + 260 = 440$ t. Because $480 > 440$, Season $3$ is the heavier season, not the lighter one.`,
      `**D.** → True

A Season $3$ mix of $220$ t Wheat and $300$ t Barley at the recovered rates would earn

$$
220(95) + 300(120) = 20900 + 36000 = 56900
$$

The gap above the recorded $53100$ is $56900 - 53100 = 3800$. That $3800$ understatement exceeds $3500$.`,
      `**E.** → True

Average profit per tonne is a season's printed profit over its printed tonnage. Season $1$ moved $240 + 160 = 400$ t for $42000$, and Season $2$ moved $180 + 260 = 440$ t for $48300$:

$$
\\frac{42000}{400} = 105, \\qquad \\frac{48300}{440} \\approx 109.77
$$

Season $2$'s $109.77$ per tonne exceeds Season $1$'s $105$.`,
    ],
  },
  "math-5-47": {
    overview: `Each flagged record is an age at a shifted clock, not a present-day multiple. Let $x$ be the elder employee's current age and $y$ the younger's.

Five years ago the elder was three times the younger, which is the ratio

$$
\\frac{x - 5}{y - 5} = 3
$$

or $x - 5 = 3(y - 5)$, hence $x = 3y - 10$. Nine years from now the elder will be twice the younger:

$$
x + 9 = 2(y + 9)
$$

which expands to $x = 2y + 9$. The two expressions for $x$ must agree:

$$
3y - 10 = 2y + 9
$$

$$
y = 19
$$

Then $x = 2(19) + 9 = 47$. The elder is $47$ today and the younger is $19$. Checking the first record: $47 - 5 = 42$ and $3(19 - 5) = 42$. Checking the second: $47 + 9 = 56$ and $2(19 + 9) = 56$.`,
    tacticals: [
      `**A.** → True

Fifteen years from the recovered ages $47$ and $19$ the pair will be $62$ and $34$. Double the younger age at that date is $2(34) = 68$. The elder's $62$ is less than $68$.`,
      `**B.** → True

The current gap is $47 - 19 = 28$. Forty-five percent of the elder's $47$ is

$$
0.45(47) = 21.15
$$

The gap of $28$ exceeds $21.15$, so it is more than $45\\%$ of the elder's present age.`,
      `**C.** → False

In $4.5$ years the recovered ages become $51.5$ and $23.5$. Their ratio is

$$
\\frac{51.5}{23.5} \\approx 2.191
$$

That $2.19$ factor is below $2.5$, not above it.`,
      `**D.** → False

Ten years ago the recovered ages were $37$ and $9$, which sum to $46$. Forty-six is larger than $40$, so the past sum was not less than $40$.`,
      `**E.** → True

The first flagged record already places the triple relationship five years back, and the recovered ages confirm it: $47 - 5 = 42$ and $3(14) = 42$. Five years ago is more than four years ago, so such a moment does exist.`,
    ],
  },
  "math-5-48": {
    overview: `Retail totals hide wholesale costs behind two different markup factors. Let $x$ be Product A's wholesale cost and $y$ Product B's. A $32\\%$ markup makes A retail at $1.32x$; an $18\\%$ markup makes B retail at $1.18y$.

Order $1$ sells $8$ of A and $5$ of B for $1052.80$:

$$
8(1.32x) + 5(1.18y) = 10.56x + 5.9y = 1052.80
$$

Order $2$ lists $16$ of A, $10$ of B and $2105.60$, exactly double Order $1$, so it repeats the same relationship. Order $3$ sells $3$ of A and $12$ of B for $1350.60$:

$$
3(1.32x) + 12(1.18y) = 3.96x + 14.16y = 1350.60
$$

Scale Order $1$ by $0.375$ to match the $3.96x$ term:

$$
3.96x + 2.2125y = 394.80
$$

Subtract from Order $3$:

$$
11.9475y = 955.80
$$

$$
y = \\frac{955.80}{11.9475} = 80
$$

Back into Order $1$: $10.56x + 5.9(80) = 1052.80$, so $10.56x + 472 = 1052.80$ and

$$
x = \\frac{580.80}{10.56} = 55
$$

Product A costs $55$ wholesale and Product B costs $80$. Those costs rebuild Order $1$ as $8(1.32)(55) + 5(1.18)(80) = 580.80 + 472 = 1052.80$.`,
    tacticals: [
      `**A.** → False

Swap the markups on Order $3$'s recovered wholesale costs $55$ and $80$:

$$
3(1.18)(55) + 12(1.32)(80) = 194.70 + 1267.20 = 1461.90
$$

The swapped total of $1461.90$ sits above the actual $1350.60$, so the bill rises rather than falls.`,
      `**B.** → True

Product A's dollar markup is $0.32(55) = 17.60$ and Product B's is $0.18(80) = 14.40$. The comparison is

$$
\\frac{14.40}{17.60} = 0.818
$$

About $81.8\\%$ exceeds $80\\%$.`,
      `**C.** → True

Order $1$'s wholesale cost for $8$ of A and $5$ of B is $8(55) + 5(80) = 440 + 400 = 840$. Markup against the printed retail of $1052.80$ is

$$
1052.80 - 840 = 212.80
$$

The same $212.80$ is $0.32(440) + 0.18(400)$. That markup clears $150$.`,
      `**D.** → True

Only Product B's count moves, from $12$ units to $15$. One unit of B retails at $1.18(80) = 94.40$, so three extra units add

$$
3(94.40) = 283.20
$$

An increase of $283.20$ exceeds $280$.`,
      `**E.** → True

The wholesale ratio of B to A is $\\frac{80}{55} \\approx 1.455$. Retail prices are $1.18(80) = 94.40$ and $1.32(55) = 72.60$, so the retail ratio is

$$
\\frac{94.40}{72.60} \\approx 1.300
$$

The wholesale ratio of about $1.455$ exceeds the retail ratio of about $1.300$, because A's larger markup lifts A's retail price relatively more.`,
    ],
  },
  "math-5-49": {
    overview: `A loss is worth nothing, so the two club records are linear in wins and draws alone. Let $x$ be points per win and $y$ points per draw.

The Falcons took $9$ wins and $4$ draws for $75$ points:

$$
9x + 4y = 75
$$

The Ravens took $7$ wins and $6$ draws, $8$ points behind, so they finished on $75 - 8 = 67$:

$$
7x + 6y = 67
$$

Triple the Falcons equation and double the Ravens equation so both carry $12y$:

$$
27x + 12y = 225, \\qquad 14x + 12y = 134
$$

Subtract:

$$
13x = 91
$$

$$
x = \\frac{91}{13} = 7
$$

Then $9(7) + 4y = 75$, so $63 + 4y = 75$ and $y = 3$. A win is worth $7$ points and a draw $3$. Those values rebuild the Falcons as $9(7) + 4(3) = 63 + 12 = 75$ and the Ravens as $7(7) + 6(3) = 49 + 18 = 67$.`,
    tacticals: [
      `**A.** → True

If a draw were half a win, the draw would be worth $3.5$ while the win stayed at the recovered $7$. The Falcons would then score

$$
9(7) + 4(3.5) = 63 + 14 = 77
$$

Seventy-seven is $2$ above their actual $75$.`,
      `**B.** → False

The Ravens' $6$ draws at $3$ points each contribute $18$. Against their $67$ total:

$$
\\frac{18}{67} \\approx 0.269
$$

About $26.9\\%$ of their points came from draws, well below $45\\%$.`,
      `**C.** → True

The halved system awards $2$ per win and $1$ per draw, independent of the recovered $7$ and $3$. Falcons: $9(2) + 4(1) = 22$. Ravens: $7(2) + 6(1) = 20$. Twenty-two still beats twenty, so the Falcons remain ahead.`,
      `**D.** → False

The Falcons' win contribution is $9(7) = 63$ and their draw contribution is $4(3) = 12$. The ratio of those contributions is

$$
\\frac{63}{12} = 5.25
$$

Five and a quarter is far short of $15$.`,
      `**E.** → False

Converting three Falcons draws into wins leaves $12$ wins and $1$ draw, which at the recovered $7$ and $3$ scores

$$
12(7) + 1(3) = 84 + 3 = 87
$$

The gain over $75$ is $12$, not more than $20$. Each converted draw adds only the $7 - 3 = 4$ point gap.`,
    ],
  },
  "math-5-50": {
    overview: `The third batch mixed units, so the first two rows are the only density pair. Let $x$ be Metal A's mass per litre and $y$ Metal B's, in kg/L.

Batch $1$ blended $12$ L of A with $8$ L of B for $182.4$ kg. Divide by $4$:

$$
3x + 2y = 45.6
$$

Batch $2$ blended $5$ L of A with $15$ L of B for $209.0$ kg. Divide by $5$:

$$
x + 3y = 41.8
$$

so $x = 41.8 - 3y$. Substitute:

$$
3(41.8 - 3y) + 2y = 45.6
$$

$$
125.4 - 9y + 2y = 45.6
$$

$$
-7y = -79.8
$$

$$
y = \\frac{79.8}{7} = 11.4, \\qquad x = 41.8 - 3(11.4) = 7.6
$$

Metal A is $7.6$ kg/L and Metal B is $11.4$ kg/L. Batch $3$ used $9.5$ L of A, converted from $2.5$ gal, with $6$ L of B, which those densities predict as

$$
9.5(7.6) + 6(11.4) = 72.2 + 68.4 = 140.6
$$

against $147.0$ kg recorded, a $6.4$ kg discrepancy.`,
    tacticals: [
      `**A.** → True

At the recovered $7.6$ kg/L and $11.4$ kg/L, Batch $1$ with $10$ L of B instead of $8$ L would mass

$$
12(7.6) + 10(11.4) = 91.2 + 114 = 205.2
$$

That $205.2$ kg exceeds $200$ kg.`,
      `**B.** → False

Metal B's recovered density relative to Metal A's is

$$
\\frac{11.4 - 7.6}{7.6} = \\frac{3.8}{7.6} = 0.50
$$

The increase is exactly $50\\%$, not more than $50\\%$.`,
      `**C.** → True

Batch $3$'s predicted mass is $140.6$ kg against $147.0$ kg recorded, a $6.4$ kg gap. As a share of the recorded total:

$$
\\frac{6.4}{147.0} \\approx 0.0435
$$

About $4.35\\%$ of the recorded $147.0$ kg clears the $4\\%$ cutoff.`,
      `**D.** → False

Replace Batch $3$'s converted $9.5$ L of A with $10$ L, keeping $6$ L of B:

$$
10(7.6) + 6(11.4) = 76 + 68.4 = 144.4
$$

Distance from the recorded $147.0$ is $2.6$ kg, which is larger than a $2$ kg window.`,
      `**E.** → True

Pooling the two batches adds the volumes before the fixed densities apply:

$$
17(7.6) + 23(11.4) = 129.2 + 262.2 = 391.4
$$

The two recorded masses already add to $182.4 + 209.0 = 391.4$. Because mass per litre is fixed, the combined batch weighs exactly the sum of the separate masses.`,
    ],
  },
};

const frozen = [
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
