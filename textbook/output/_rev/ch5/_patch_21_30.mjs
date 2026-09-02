import fs from "fs";

const path = new URL("./21_30.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));
const orig = JSON.parse(JSON.stringify(data));

const patch = {
  "math-5-21": {
    overview: `Jason's history is Maria's plus four extra months, and the extra dollars on his row are therefore four copies of the monthly charge with no extra signup. Let $x$ be the signup fee actually charged and $y$ the monthly rate actually charged. The flyer's $\\$30$ and $\\$45$ stay on the advertisement until a later comparison needs them.

Maria, after six months, had paid $284$:

$$
x + 6y = 284
$$

Jason, after ten months, had paid $448$:

$$
x + 10y = 448
$$

Subtract Maria from Jason:

$$
4y = 164
$$

$$
y = \\frac{164}{4} = 41
$$

Maria's row then gives

$$
x + 6(41) = 284
$$

$$
x + 246 = 284
$$

$$
x = 38
$$

Actual billing therefore runs $38 + 41m$. Rebuilding Jason as $38 + 10(41) = 448$ matches the printed total.`,
    tacticals: [
      `**A.** → False

Signup sits at the overview's $x = 38$. The flyer advertised $\\$30$ up front. Those two figures differ by $8$, with the histories charging more at signup than the advertisement claims.`,
      `**B.** → True

Members actually pay the overview's $y = 41$ each month. The flyer quoted $\\$45$. The actual charge sits $4$ below that advertised monthly figure.`,
      `**C.** → False

The flyer's advertised rule, not the recovered pair, is what this six-month comparison uses:

$$
30 + 6(45) = 30 + 270 = 300
$$

Maria actually paid $284$. Because $284 < 300$, her six-month total does not exceed what the advertised rates would have produced.`,
      `**D.** → True

Jason's history already lists $448$ after his tenth monthly payment. That printed total sits $48$ above the $400$ cutoff, so he had already cleared $400$ by that payment.`,
      `**E.** → True

Dropping the signup fee leaves only the recovered monthly rate $y = 41$. Twelve months at that rate:

$$
12 \\times 41 = 492
$$

The claimed $492$ matches that product exactly.`,
    ],
  },
  "math-5-22": {
    overview: `Neither household pays a connection fee, so the two mixed bills are already a clean pair in Basic months and Premium months. Let $x$ be the Basic monthly price and $y$ the Premium monthly price.

Household $1$ mixed $4$ Basic with $3$ Premium for $169$:

$$
4x + 3y = 169
$$

Household $2$ mixed $2$ Basic with $7$ Premium for $255$:

$$
2x + 7y = 255
$$

Clear Premium by multiplying the first by $7$ and the second by $3$:

$$
28x + 21y = 1183, \\qquad 6x + 21y = 765
$$

Subtract:

$$
22x = 418
$$

$$
x = \\frac{418}{22} = 19
$$

Household $1$ then gives Premium:

$$
4(19) + 3y = 169
$$

$$
76 + 3y = 169
$$

$$
y = 31
$$

Basic at $19$ and Premium at $31$ rebuild both combined totals.`,
    tacticals: [
      `**A.** → True

Basic is the overview's $x = 19$ per month. That is exactly the price named in the claim, and it is the unique value that fits both household mixes.`,
      `**B.** → False

Premium recovered at $y = 31$, not $35$. The $35$ figure is $4$ above the rate the two bills actually support.`,
      `**C.** → False

The table already prints both combined totals, so double Household $1$ and compare:

$$
2 \\times 169 = 338
$$

Household $2$ printed $255$. Since $255 < 338$, the larger bill is not more than double the smaller one.`,
      `**D.** → False

With no connection fee, $n$ months of Basic cost $19n$ and $n$ months of Premium cost $31n$. Setting those equal:

$$
19n = 31n
$$

$$
0 = 12n
$$

$$
n = 0
$$

The only solution is zero months. No positive month count equates a pure-Basic bill with a pure-Premium bill.`,
      `**E.** → True

Five months of each plan at the recovered rates:

$$
5(19) + 5(31) = 95 + 155 = 250
$$

The combined bill is $250$, matching the claimed figure.`,
    ],
  },
  "math-5-23": {
    overview: `Bread and eggs print at known prices, so they come off each receipt before apples and milk can be isolated. Let $x$ be the organic-apple price per pound and $y$ the almond-milk price per carton. Loyalty's $5\\%$ off is a distractor: neither receipt used a loyalty card.

Receipt $1$ totaled $50.00$ with $3.60$ of bread and $4.40$ of eggs:

$$
50.00 - 3.60 - 4.40 = 42.00
$$

$$
5x + 3y = 42
$$

Receipt $2$ totaled $43.20$ with $3.60$ of bread:

$$
43.20 - 3.60 = 39.60
$$

$$
2x + 5y = 39.60
$$

Clear milk by multiplying the first leftover by $5$ and the second by $3$:

$$
25x + 15y = 210, \\qquad 6x + 15y = 118.80
$$

Subtract:

$$
19x = 91.20
$$

$$
x = \\frac{91.20}{19} = 4.80
$$

Back into the first leftover:

$$
5(4.80) + 3y = 42
$$

$$
24 + 3y = 42
$$

$$
y = 6
$$

Apples at $4.80$ per pound and milk at $6$ per carton rebuild both leftovers.`,
    tacticals: [
      `**A.** → True

Organic apples are the overview's $x = 4.80$ per pound. That is the unit price named in the claim.`,
      `**B.** → False

Almond milk recovered at $y = 6$ per carton, while apples recovered at $x = 4.80$ per pound. Numerically $6.00 > 4.80$, so milk is the dearer unit, not the cheaper one.`,
      `**C.** → True

Five pounds of apples and four cartons of milk at the recovered prices:

$$
5(4.80) = 24.00
$$

$$
4(6.00) = 24.00
$$

Both baskets land on $24$, so the two purchases cost the same.`,
      `**D.** → False

Receipt $1$ printed $50.00$ with no loyalty card. Five percent off that printed total:

$$
50.00 \\times 0.95 = 47.50
$$

The discounted bill would be $47.50$, which still sits above $47$ rather than falling below it.`,
      `**E.** → False

Ten pounds of apples and two cartons of milk at the recovered prices:

$$
10(4.80) + 2(6) = 48 + 12 = 60
$$

The basket costs exactly $60$, which is not more than $60$.`,
    ],
  },
  "math-5-24": {
    overview: `The connection fee is the same on both bills, which means the extra $140$ units between them carry the whole extra $29.40$. Let $x$ be the fixed connection fee and $y$ the standard-plan rate per unit. Customer service's $0.24$ per unit is a claim, not a coefficient.

Bill $1$ used $240$ units for $83.40$:

$$
x + 240y = 83.40
$$

Bill $2$ used $380$ units for $112.80$:

$$
x + 380y = 112.80
$$

Subtract:

$$
140y = 29.40
$$

$$
y = \\frac{29.40}{140} = 0.21
$$

Back into Bill $1$:

$$
x + 240(0.21) = 83.40
$$

$$
x + 50.40 = 83.40
$$

$$
x = 33
$$

The standard plan is therefore $33 + 0.21u$. Solar Offset has no connection fee and charges $0.29$ per unit. Setting the two equal:

$$
33 + 0.21u = 0.29u
$$

$$
u = \\frac{33}{0.08} = 412.5
$$

Solar is cheaper below $412.5$ units; the standard plan is cheaper above that crossover.`,
    tacticals: [
      `**A.** → True

The recovered connection fee is $x = 33$. That is exactly the fee named in the claim.`,
      `**B.** → False

The bill difference isolated $y = 0.21$ per unit. Customer service claimed $0.24$. The recovered rate is $0.03$ below that figure, so the claimed rate does not match the two bills.`,
      `**C.** → True

The recovered standard model at $u = 280$:

$$
33 + 0.21 \\cdot 280 = 33 + 58.80 = 91.80
$$

Since $91.80 < 95$, a $280$-unit bill sits under the $95$ cutoff.`,
      `**D.** → False

The two plans meet at the overview's $u = 412.5$. Solar has no connection fee, so it wins for $0 < u < 412.5$. Past that crossover the standard plan's cheaper per-unit rate takes over. Solar is therefore not cheaper at every positive usage.`,
      `**E.** → False

Five hundred units sits above the $412.5$ crossover. Substituting $u = 500$:

$$
33 + 0.21 \\cdot 500 = 138
$$

$$
0.29 \\cdot 500 = 145
$$

Standard's $138$ undercuts Solar's $145$, so Solar is not cheaper at $500$ units.`,
    ],
  },
  "math-5-25": {
    overview: `Table $8$'s printed total is Table $5$ plus $46$, but that $220$ still includes a $10\\%$ peak charge that has to come off before the food mix is comparable. Let $x$ be the pasta price and $y$ the appetizer price.

Table $5$ is already a clean off-peak food total:

$$
6x + 4y = 174
$$

Table $8$ printed $174 + 46 = 220$. Undo the $10\\%$ service charge:

$$
\\frac{220}{1.10} = 200
$$

$$
5x + 7y = 200
$$

Seven copies of Table $5$ and four copies of Table $8$'s food row match the appetizer terms:

$$
42x + 28y = 1218, \\qquad 20x + 28y = 800
$$

Subtract:

$$
22x = 418
$$

$$
x = 19
$$

Back into Table $5$:

$$
6(19) + 4y = 174
$$

$$
114 + 4y = 174
$$

$$
y = 15
$$

Pasta at $19$ and an appetizer at $15$ rebuild both food totals.`,
    tacticals: [
      `**A.** → True

A pasta dish is the overview's $x = 19$. That is the price named in the claim.`,
      `**B.** → False

An appetizer recovered at $y = 15$, while pasta recovered at $x = 19$. Because $15 < 19$, the appetizer is cheaper than the pasta dish, the reverse of the claim.`,
      `**C.** → True

Table $8$'s food-only subtotal is the overview's $200$. Table $5$'s food total is $174$. The gap is

$$
200 - 174 = 26
$$

exactly $26$ before the service charge, not the printed $46$ measured after it.`,
      `**D.** → True

Table $5$'s food total is already $174$. Attaching the peak multiplier:

$$
174.00 \\times 1.10 = 191.40
$$

That is the billed total Table $5$ would have shown as a peak table, matching the claimed $191.40$.`,
      `**E.** → True

Four pasta dishes and four appetizers at the recovered prices, then the $10\\%$ peak charge:

$$
4(19) + 4(15) = 136
$$

$$
136 \\times 1.10 = 149.60
$$

Since $149.60 < 150$, that peak basket stays under $150$.`,
    ],
  },
  "math-5-26": {
    overview: `Weight and volume sit in the log for freight, not for pricing, so the cost equations use only the item counts. Let $x$ be the unit price of Item M and $y$ the unit price of Item N.

Shipment $1$ moved $110$ of M and $80$ of N for $4470$:

$$
110x + 80y = 4470
$$

Shipment $2$ moved $70$ of M and $150$ of N for $5520$:

$$
70x + 150y = 5520
$$

Divide both by $10$:

$$
11x + 8y = 447, \\qquad 7x + 15y = 552
$$

Clear N by multiplying the first by $15$ and the second by $8$:

$$
165x + 120y = 6705, \\qquad 56x + 120y = 4416
$$

Subtract:

$$
109x = 2289
$$

$$
x = \\frac{2289}{109} = 21
$$

Back into $11x + 8y = 447$:

$$
11(21) + 8y = 447
$$

$$
231 + 8y = 447
$$

$$
y = 27
$$

Item M at $21$ and Item N at $27$ rebuild both shipment costs. The kilogram columns never enter.`,
    tacticals: [
      `**A.** → True

Item M is the overview's $x = 21$ per unit. That is the unit price named in the claim.`,
      `**B.** → False

Item N recovered at $y = 27$, not $30$. The $30$ figure is $3$ above the rate both shipments support.`,
      `**C.** → False

Each shipment's per-unit average is its cost over its combined item count:

$$
\\frac{4470}{110 + 80} = \\frac{4470}{190} \\approx 23.53
$$

$$
\\frac{5520}{70 + 150} = \\frac{5520}{220} = 25.09\\overline{09}
$$

The two averages are different numbers, so they are not equal.`,
      `**D.** → True

Item N costs $y = 27$ each, and this order contains no Item M:

$$
150 \\times 27 = 4050
$$

One hundred fifty units of N alone cost $4050$, matching the claim.`,
      `**E.** → False

The cost identities are $110(21) + 80(27) = 4470$ and $70(21) + 150(27) = 5520$. Weight never appears as a coefficient. Shipment $1$ is cheaper because it bought a cheaper mix of units, not because $110(2.4) + 80(1.7) = 400$ kg happens to sit below Shipment $2$'s $70(2.4) + 150(1.7) = 423$ kg.`,
    ],
  },
  "math-5-27": {
    overview: `Job $1$ invoices bundles rather than plants, so seven bundles have to be unpacked into Standard and Premium units before they can sit beside Job $2$. Let $x$ be the Standard unit price and $y$ the Premium unit price.

Each bundle is $2$ Standard plus $5$ Premium, and Job $1$ billed seven of them for $1946$:

$$
7 \\times 2 = 14, \\qquad 7 \\times 5 = 35
$$

$$
14x + 35y = 1946
$$

Job $2$ listed $13$ Standard and $21$ Premium for $1301$:

$$
13x + 21y = 1301
$$

Divide Job $1$ by $7$ to get one bundle: $2x + 5y = 278$. Clear Premium by multiplying that by $21$ and Job $2$ by $5$:

$$
42x + 105y = 5838, \\qquad 65x + 105y = 6505
$$

Subtract:

$$
23x = 667
$$

$$
x = \\frac{667}{23} = 29
$$

Back into the bundle equation:

$$
2(29) + 5y = 278
$$

$$
58 + 5y = 278
$$

$$
y = 44
$$

Standard at $29$ and Premium at $44$ rebuild Job $1$ as $14(29) + 35(44) = 1946$ and Job $2$ as $13(29) + 21(44) = 1301$.`,
    tacticals: [
      `**A.** → True

Standard planting is the overview's $x = 29$ per unit. That is the unit price named in the claim.`,
      `**B.** → False

Premium recovered at $y = 44$, not $50$. The $50$ figure is $6$ above the rate both jobs support.`,
      `**C.** → True

One bundle is defined as $2$ Standard plus $5$ Premium, so seven of them unpack as the overview's $14$ Standard and $35$ Premium. Those are the unit counts that belong in Job $1$'s equation, matching the claim.`,
      `**D.** → True

Job $1$ expands to $35$ Premium units at $y = 44$:

$$
35 \\times 44 = 1540
$$

Job $2$'s whole invoice is $1301$. Because $1540 > 1301$, Job $1$'s Premium line alone outweighs all of Job $2$.`,
      `**E.** → True

The quoted mix at the recovered rates:

$$
8(29) + 19(44) = 232 + 836 = 1068
$$

The issued $1068$ matches exactly, so the quotation is consistent with the two job invoices.`,
    ],
  },
  "math-5-28": {
    overview: `Three reports cannot all be right for two rates. Treating Reports $1$ and $2$ as the working pair leaves Report $3$ to be tested afterward. Let $x$ be the meal-day per diem and $y$ the mileage rate. Finance's $0.40$ per mile is a claim to check.

Report $1$ reimbursed $5$ meal days and $150$ miles for $323$:

$$
5x + 150y = 323
$$

Report $2$ reimbursed $3$ meal days and $250$ miles for $245$:

$$
3x + 250y = 245
$$

Match the per-diem terms by multiplying the first by $3$ and the second by $5$:

$$
15x + 450y = 969, \\qquad 15x + 1250y = 1225
$$

Subtract:

$$
800y = 256
$$

$$
y = \\frac{256}{800} = 0.32
$$

Back into Report $1$:

$$
5x + 150(0.32) = 323
$$

$$
5x + 48 = 323
$$

$$
x = 55
$$

Under Reports $1$ and $2$, the per diem is $55$ and mileage is $0.32$ per mile.`,
    tacticals: [
      `**A.** → True

The per diem is the overview's $x = 55$ per meal day. That is the daily figure named in the claim, under the Reports $1$ and $2$ working pair.`,
      `**B.** → False

Mileage recovered at $y = 0.32$ per mile. Finance quoted $0.40$. The recovered rate is $0.08$ short of that belief, so the $0.40$ figure does not match payroll.`,
      `**C.** → True

Seven meal days at the recovered per diem $x = 55$, ignoring miles entirely:

$$
7 \\times 55 = 385
$$

Report $3$ lists only $120$. Even with zero miles, $385 > 120$, so that row cannot be a valid reimbursement under the rates implied by Reports $1$ and $2$.`,
      `**D.** → False

The two printed totals from Reports $1$ and $2$ differ by

$$
323 - 245 = 78
$$

A gap of $78$ does not clear $80$, so Report $1$ does not exceed Report $2$ by more than $80$.`,
      `**E.** → True

Add the two printed totals from Reports $1$ and $2$:

$$
323 + 245 = 568
$$

Since $568 \\ge 550$, the combined reimbursement from those two reports clears the $550$ cutoff.`,
    ],
  },
  "math-5-29": {
    overview: `Week $2$'s counts are missing from the log but not from the sticky note: eight more Widget B than Widget A, fifty-eight units in all. Recover those counts first, then the two labor times. Let $x$ be hours per Widget A and $y$ hours per Widget B.

The sticky note is a small sum-and-difference system:

$$
B = A + 8, \\qquad A + B = 58
$$

$$
A + (A + 8) = 58, \\qquad 2A = 50, \\qquad A = 25, \\qquad B = 33
$$

Week $1$ is fully legible: $35$ of A and $20$ of B for $445$ hours:

$$
35x + 20y = 445
$$

Week $2$ then reads $25$ of A and $33$ of B for $505$ hours:

$$
25x + 33y = 505
$$

Clear B by multiplying Week $1$ by $33$ and Week $2$ by $20$:

$$
1155x + 660y = 14685, \\qquad 500x + 660y = 10100
$$

Subtract:

$$
655x = 4585
$$

$$
x = \\frac{4585}{655} = 7
$$

Back into Week $1$:

$$
35(7) + 20y = 445
$$

$$
245 + 20y = 445
$$

$$
y = 10
$$

Widget A takes $7$ hours and Widget B takes $10$. Week $1$ rebuilds as $35(7) + 20(10) = 445$.`,
    tacticals: [
      `**A.** → True

Widget A requires the overview's $x = 7$ hours of labor. That matches the claim.`,
      `**B.** → False

Widget B recovered at $y = 10$ hours, not $12$. The $12$-hour figure is $2$ hours above the time both weeks support.`,
      `**C.** → True

The sticky note unpacked as $A = 25$ and $B = 33$ before those counts entered the labor model. Week $2$ therefore produced $25$ Widget A units and $33$ Widget B units, matching the claim.`,
      `**D.** → False

A $20\\%$ lift on Widget A alone makes its time $7 \\times 1.20 = 8.4$. Week $1$ would then use

$$
35(8.4) + 20(10) = 294 + 200 = 494
$$

The relative increase is $\\frac{494 - 445}{445} = \\frac{49}{445} \\approx 0.110$, about $11\\%$, not $20\\%$. Raising only one product's time cannot scale the whole week by $20\\%$.`,
      `**E.** → True

Week $3$ still shows $15$ Widget B and $290$ hours. With $x = 7$ and $y = 10$:

$$
7A + 10(15) = 290
$$

$$
7A + 150 = 290
$$

$$
A = 20
$$

The missing Widget A count reconstructs as $20$, matching the claim.`,
    ],
  },
  "math-5-30": {
    overview: `Two of the three branches reconcile; the working pair is North with South, and East is tested after the prices are in hand. Let $x$ be the company-wide price of Product X and $y$ the price of Product Y.

North sold $85$ of X and $70$ of Y for $4145$:

$$
85x + 70y = 4145
$$

South sold $55$ of X and $95$ of Y for $3875$:

$$
55x + 95y = 3875
$$

Divide both by $5$:

$$
17x + 14y = 829, \\qquad 11x + 19y = 775
$$

Clear Y by multiplying the first by $19$ and the second by $14$:

$$
323x + 266y = 15751, \\qquad 154x + 266y = 10850
$$

Subtract:

$$
169x = 4901
$$

$$
x = \\frac{4901}{169} = 29
$$

Back into $17x + 14y = 829$:

$$
17(29) + 14y = 829
$$

$$
493 + 14y = 829
$$

$$
y = 24
$$

East sold $65$ of X and $50$ of Y. At those prices:

$$
65(29) + 50(24) = 1885 + 1200 = 3085
$$

The dashboard printed $3200$ for East, a $115$ discrepancy. Under the North-South pair, Product X is $29$ and Product Y is $24$, and East is the inconsistent row.`,
    tacticals: [
      `**A.** → True

Product X is the overview's $x = 29$. That is the company-wide price named in the claim, under the North-South working pair.`,
      `**B.** → False

Product Y recovered at $y = 24$, not $28$. The $28$ figure is $4$ above the price North and South jointly support.`,
      `**C.** → False

East's counts at the recovered prices produce the overview's $3085$. The dashboard printed $3200$. The $115$ gap marks East as inconsistent with the North-South price pair, so the reported East revenue is not fully consistent.`,
      `**D.** → True

East sold $65$ of X and $50$ of Y. At the recovered prices that mix is the overview's $3085$. Replacing the printed $3200$ with $3085$ would put East on the same price pair as North and South.`,
      `**E.** → False

Use the printed dashboard totals, including East's uncorrected $3200$:

$$
3875 + 3200 = 7075
$$

North reports $4145$. Because $4145 < 7075$, North falls well short of South and East combined.`,
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
