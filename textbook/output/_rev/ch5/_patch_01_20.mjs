import fs from "fs";

const files = [
  new URL("./01_10.json", import.meta.url),
  new URL("./11_20.json", import.meta.url),
];

const patch = {
  "math-5-1": {
    overview: `Together the depots hold $620$ crates. After $50$ leave North and land on South, the two piles match, so each must then be half of that conserved total:

$$
\\frac{620}{2} = 310
$$

North is the depot that would give crates away, so it currently sits $50$ above the split:

$$
x = 310 + 50 = 360
$$

South sits $50$ below it:

$$
y = 310 - 50 = 260
$$`,
    tacticals: [
      `**A.** → True

North currently holds $360$ crates. That is the count the claim names.`,
      `**B.** → False

South currently holds $260$ crates. The claim names $240$, twenty crates short of that total.`,
      `**C.** → True

North starts at the overview's $360$. Moving $30$ crates the other way, from South onto North, adds those $30$ rather than subtracting them:

$$
360 + 30 = 390
$$

North would then hold $390$ crates.`,
      `**D.** → False

North at $360$ and South at $260$ differ by

$$
360 - 260 = 100
$$

not $120$. A transfer of $50$ closes a gap of $100$, because it takes $50$ off one side and adds $50$ to the other.`,
      `**E.** → True

The scheduled $50$-crate shift is the move that produced the overview's equal piles of $310$. Both depots would then hold $310$ each.`,
    ],
  },

  "math-5-2": {
    overview: `Notebooks and pens keep the same unit prices on both invoices, so the two bills are two equations in those two prices. Let $x$ be the notebook price and $y$ the pen price.

Invoice #102 billed $15$ notebooks and $60$ pens at $160.50$, and every coefficient is a multiple of $15$:

$$
15x + 60y = 160.50
$$

$$
x + 4y = 10.70
$$

$$
x = 10.70 - 4y
$$

Invoice #101 billed $40$ notebooks and $25$ pens at $185.00$. Substitute the expression for $x$:

$$
40(10.70 - 4y) + 25y = 185.00
$$

$$
428.00 - 160y + 25y = 185.00
$$

$$
428.00 - 135y = 185.00
$$

$$
-135y = -243.00
$$

$$
y = \\frac{243.00}{135} = 1.80
$$

Then

$$
x = 10.70 - 4(1.80)
$$

$$
x = 10.70 - 7.20 = 3.50
$$`,
    tacticals: [
      `**A.** → True

A notebook lists at $3.50$. That is the unit cost the claim names.`,
      `**B.** → False

A pen lists at $1.80$. The claim names $\\$2.10$, thirty cents above that recovered price.`,
      `**C.** → True

Invoice #101 already prints $\\$185.00$ for $40$ notebooks and $25$ pens. Costing that mix at $3.50$ and $1.80$ rebuilds the same printed total.`,
      `**D.** → True

Ten notebooks and ten pens appear on neither invoice, so price the mix from the recovered pair. Ten notebooks:

$$
10 \\times 3.50 = 35.00
$$

Ten pens:

$$
10 \\times 1.80 = 18.00
$$

Add those two lines:

$$
35.00 + 18.00 = 53.00
$$

The order comes to $\\$53.00$.`,
      `**E.** → False

Invoice #102 already prints $\\$160.50$ for $15$ notebooks and $60$ pens. The claim names $\\$172.50$, twelve dollars above that printed figure.`,
    ],
  },

  "math-5-3": {
    overview: `Adult and child tickets stay at fixed prices through Saturday, which makes the two sessions a pair of linear equations. Let $a$ be the adult price and $c$ the child price.

The evening row is $160$ adult and $40$ child tickets for $2200$. Divide by $40$:

$$
4a + c = 55
$$

$$
c = 55 - 4a
$$

The matinee is $90$ adult and $150$ child tickets for $2130$. Divide by $30$:

$$
3a + 5c = 71
$$

Fold the evening expression for $c$ into that reduced matinee row:

$$
3a + 5(55 - 4a) = 71
$$

$$
3a + 275 - 20a = 71
$$

$$
-17a = -204
$$

$$
a = \\frac{204}{17} = 12
$$

Then

$$
c = 55 - 4(12) = 7
$$`,
    tacticals: [
      `**A.** → True

An adult ticket is $12$. That is the $\\$12.00$ the claim names.`,
      `**B.** → True

A child ticket is $7$. That is the $\\$7.00$ the claim names.`,
      `**C.** → False

The matinee already logged $\\$2{,}130$ for $90$ adult and $150$ child tickets. The claim names $\\$2{,}050$, an $\\$80$ understatement of that printed row.`,
      `**D.** → False

The evening session already logged $\\$2{,}200$. The claim names $\\$2{,}300$, a $\\$100$ overstatement of that session.`,
      `**E.** → False

Fifty of each ticket is a mix neither session sold. Fifty adult tickets at the recovered $12$:

$$
50 \\times 12 = 600
$$

Fifty child tickets at the recovered $7$:

$$
50 \\times 7 = 350
$$

Add:

$$
600 + 350 = 950
$$

That is $\\$950$, fifty dollars short of the claimed $\\$1{,}000$.`,
    ],
  },

  "math-5-4": {
    overview: `The $\\$8$ delivery fee is charged on every receipt and is not a sandwich or a wrap, so it comes off before any menu equation is written. Receipt A was charged $70$, so its food is $70 - 8 = 62$. Receipt B was charged $74$, so its food is $74 - 8 = 66$. Let $x$ be the sandwich price and $y$ the wrap price.

The food-only pair is then

$$
6x + 4y = 62
$$

$$
3x + 9y = 66
$$

Double the second equation so the sandwich terms match:

$$
6x + 18y = 132
$$

Subtract the first:

$$
14y = 70
$$

$$
y = \\frac{70}{14} = 5
$$

Back in Receipt B's food row:

$$
3x + 9(5) = 66
$$

$$
3x + 45 = 66
$$

$$
3x = 21, \\qquad x = 7
$$`,
    tacticals: [
      `**A.** → True

A sandwich is $7$ on the recovered menu. That is the $\\$7.00$ the claim names.`,
      `**B.** → True

A wrap is $5$. That is the $\\$5.00$ the claim names.`,
      `**C.** → True

Receipt A was charged $70$ including the flat $\\$8$ fee, so the food subtotal is already the overview's $62$. The claim's $\\$62.00$ is that fee-free food figure.`,
      `**D.** → True

Receipt B's charged total is already printed as $\\$74.00$, fee included. The claim restates that billed figure.`,
      `**E.** → True

A pickup order carries no delivery fee, so only the recovered food prices matter. Five sandwiches:

$$
5 \\times 7 = 35
$$

Five wraps:

$$
5 \\times 5 = 25
$$

Add:

$$
35 + 25 = 60
$$

which is the $\\$60.00$ the claim names.`,
    ],
  },

  "math-5-5": {
    overview: `If the whole $\\$10{,}000$ had sat in the $4\\%$ account, the year would have earned only $400$. The actual $520$ of interest is $120$ above that floor, and each dollar shifted into the $7\\%$ account earns an extra $3$ cents. Let $y$ be the amount in Account B.

That leftover interest is the rate gap acting on $y$:

$$
0.03y = 120
$$

$$
y = \\frac{120}{0.03} = 4000
$$

Account A then holds the rest of the principal:

$$
x = 10000 - 4000 = 6000
$$`,
    tacticals: [
      `**A.** → False

Account A holds $6000$. The claim names $\\$6{,}500$, five hundred dollars above that split.`,
      `**B.** → False

Account B holds $4000$. The claim names $\\$4{,}500$, which also would make the two accounts add to $11000$ rather than $10000$.`,
      `**C.** → False

Account A's year of simple interest on the recovered $6000$ is

$$
0.04 \\times 6000 = 240
$$

That is $\\$240.00$, not the claimed $\\$260.00$.`,
      `**D.** → False

Account B's year of simple interest on the recovered $4000$ is

$$
0.07 \\times 4000 = 280
$$

That is $\\$280.00$, not the claimed $\\$210.00$.`,
      `**E.** → True

Account B pays $7\\%$ on whatever principal it holds. Placing the entire $\\$10{,}000$ there for the year would earn

$$
0.07 \\times 10000 = 700
$$

which is the $\\$700.00$ the claim names. No split is needed, because this scenario puts the whole principal in one account.`,
    ],
  },

  "math-5-6": {
    overview: `The catalogue prices Premium exactly $\\$45$ above Standard, so one unknown is enough. Let $x$ be the Standard price, which makes Premium $x + 45$. Eighteen Standard and twelve Premium chairs were valued at $9660$:

$$
18x + 12(x + 45) = 9660
$$

$$
18x + 12x + 540 = 9660
$$

$$
30x + 540 = 9660
$$

$$
30x = 9120
$$

$$
x = \\frac{9120}{30} = 304
$$

Premium is then

$$
304 + 45 = 349
$$`,
    tacticals: [
      `**A.** → True

Standard lists at $304$. That is the $\\$304.00$ catalogue price the claim names.`,
      `**B.** → False

Premium lists at $349$. The claim names $\\$354.00$, five dollars above that recovered price.`,
      `**C.** → True

The $12$ Premium chairs in the shipment, at the recovered $349$ each, are worth

$$
12 \\times 349 = 4188
$$

which is the $\\$4{,}188.00$ the claim names.`,
      `**D.** → True

The catalogue prices Premium exactly $\\$45$ more per unit than Standard. The claim restates that listed gap.`,
      `**E.** → True

Five of each grade is a mix the shipment did not make. Five Standard chairs:

$$
5 \\times 304 = 1520
$$

Five Premium chairs:

$$
5 \\times 349 = 1745
$$

Add:

$$
1520 + 1745 = 3265
$$

Since $3265 > 3000$, the order does exceed $\\$3{,}000.00$.`,
    ],
  },

  "math-5-7": {
    overview: `The two quoted bills share the same monthly fee, so the entire price gap is extra minutes. The heavy user went $120 - 40 = 80$ minutes further over allowance and paid $53.00 - 29.00 = 24.00$ more. Let $r$ be the extra-minute rate and $f$ the fee.

$$
80r = 24.00
$$

$$
r = \\frac{24.00}{80} = 0.30
$$

The $40$-minute bill then isolates the fee:

$$
f + 40(0.30) = 29.00
$$

$$
f + 12.00 = 29.00
$$

$$
f = 17.00
$$`,
    tacticals: [
      `**A.** → True

The monthly fee that survives after peeling off the minutes is $17.00$. That is the fixed charge the claim names.`,
      `**B.** → True

The extra-minute rate is $0.30$. That is the $\\$0.30$ the ad's two bills force once the shared fee cancels.`,
      `**C.** → False

A month with $200$ extra minutes, billed at the recovered fee and rate, starts with the minutes charge:

$$
200 \\times 0.30 = 60.00
$$

Add the fee:

$$
17.00 + 60.00 = 77.00
$$

The bill is $\\$77.00$, three dollars under the claimed $\\$80.00$.`,
      `**D.** → False

A month with no extra minutes still owes the recovered fee, because that base does not depend on minutes at all:

$$
17.00 + 0 \\times 0.30 = 17.00
$$

The customer would pay $\\$17.00$, not $\\$0.00$.`,
      `**E.** → False

Double the rival's $\\$0.20$ rate would be

$$
2 \\times 0.20 = 0.40
$$

ByteMobile's recovered $0.30$ sits below that $0.40$, so the advertised rate is one and a half times the rival's, not more than double it.`,
    ],
  },

  "math-5-8": {
    overview: `Hours, not material cost, pin the week's counts. Let $s$ be Standard ovens and $d$ Deluxe ovens. The division finished $130$ ovens and logged $795$ assembly hours at $4$ hours per Standard and $9$ per Deluxe:

$$
s + d = 130
$$

$$
4s + 9d = 795
$$

Multiply the headcount equation by $4$ so the Standard-hour terms match:

$$
4s + 4d = 520
$$

Subtract from the hours row:

$$
5d = 275
$$

$$
d = \\frac{275}{5} = 55
$$

Then

$$
s = 130 - 55 = 75
$$

The $\\$120$ and $\\$180$ material columns sit unused until a cost question asks for them.`,
    tacticals: [
      `**A.** → True

The week produced $75$ Standard ovens. That is the count the claim names.`,
      `**B.** → False

The week produced $55$ Deluxe ovens. The claim names $45$, ten short of that recovered count.`,
      `**C.** → True

Each Standard oven takes $4$ assembly hours, and $75$ of them were built:

$$
4 \\times 75 = 300
$$

matching the claim.`,
      `**D.** → False

Each Deluxe oven takes $9$ assembly hours, and $55$ of them were built:

$$
9 \\times 55 = 495
$$

that is five short of the claimed $500$.`,
      `**E.** → True

This is the first place the material-cost column is needed. Standard ovens carry $\\$120$ of material each, and $75$ of them were built:

$$
75 \\times 120 = 9000
$$

which is the $\\$9{,}000.00$ the claim names.`,
    ],
  },

  "math-5-9": {
    overview: `Listed prices explain net sales, never the gross column, so each branch's returns come off first. Riverside nets $9760 - 460 = 9300$ on $14$ sofas and $22$ armchairs. Hillcrest nets $9300 - 300 = 9000$ on $20$ sofas and $10$ armchairs. Let $x$ be the sofa price and $y$ the armchair price.

Hillcrest's net row divides by $10$:

$$
2x + y = 900
$$

$$
y = 900 - 2x
$$

Substitute into Riverside:

$$
14x + 22(900 - 2x) = 9300
$$

$$
14x + 19800 - 44x = 9300
$$

$$
-30x = -10500
$$

$$
x = \\frac{10500}{30} = 350
$$

Then

$$
y = 900 - 2(350) = 200
$$`,
    tacticals: [
      `**A.** → True

A sofa lists at $350$. That is the $\\$350.00$ the claim names.`,
      `**B.** → True

An armchair lists at $200$. That is the $\\$200.00$ the claim names.`,
      `**C.** → True

Riverside's net is already the overview's $9760 - 460 = 9300$. The claim's $\\$9{,}300.00$ is that after-returns figure.`,
      `**D.** → True

The branch table already lists Hillcrest's gross sales as $\\$9{,}300$. That is the pre-returns total the claim names.`,
      `**E.** → True

Net sales equal gross minus returns, so with returns of $0$ the two figures coincide. Riverside's gross was $9760$:

$$
9760 - 0 = 9760
$$

Both would read $\\$9{,}760.00$.`,
    ],
  },

  "math-5-10": {
    overview: `PrintFast's setup fee appears on every order, so it cancels when the two invoices are subtracted. Let $f$ be that fee and $r$ the per-page rate. Order #58 covered $120$ pages for $33.00$ and Order #96 covered $300$ pages for $69.00$:

$$
f + 120r = 33.00
$$

$$
f + 300r = 69.00
$$

Subtract:

$$
180r = 36.00
$$

$$
r = \\frac{36.00}{180} = 0.20
$$

Order #58 then gives

$$
f = 33.00 - 120(0.20)
$$

$$
f = 33.00 - 24.00 = 9.00
$$`,
    tacticals: [
      `**A.** → False

PrintFast's setup fee is $9.00$. The claim names $\\$12.00$, three dollars above that recovered fee.`,
      `**B.** → False

PrintFast's per-page rate is $0.20$. The claim names $\\$0.25$, five cents above that recovered rate.`,
      `**C.** → False

A $250$-page order at the recovered fee and rate starts with the page charge:

$$
250 \\times 0.20 = 50.00
$$

Add the fee:

$$
9.00 + 50.00 = 59.00
$$

The order comes to $\\$59.00$, a dollar under the claimed $\\$60.00$.`,
      `**D.** → False

At $350$ pages PrintFast charges

$$
350 \\times 0.20 = 70.00
$$

$$
9.00 + 70.00 = 79.00
$$

QuickCopy's flat fee for any order up to $350$ pages is $60.00$, and $79.00 > 60.00$, so PrintFast is $\\$19$ more expensive at that length, not cheaper.`,
      `**E.** → True

The two invoices differ by $180$ pages, a nonzero gap, so subtracting them isolates one rate and then one fee. Had both orders covered the same page count, that gap would vanish and the pair $(f, r)$ would not be pinned down.`,
    ],
  },

  "math-5-11": {
    overview: `Ben paid $\\$5$ more than Ana, and Ana's ticket is already $\\$32$, so Ben's total is an ordinary dollar figure before any prices are named:

$$
32 + 5 = 37
$$

Let $x$ be the taco price and $y$ the burrito price. Ana's $4$ tacos and $3$ burritos, and Ben's $2$ tacos and $5$ burritos, then read

$$
4x + 3y = 32
$$

$$
2x + 5y = 37
$$

Double Ben's equation so the taco terms match:

$$
4x + 10y = 74
$$

Subtract Ana:

$$
7y = 42
$$

$$
y = \\frac{42}{7} = 6
$$

Ana's order then gives

$$
4x + 3(6) = 32
$$

$$
4x + 18 = 32
$$

$$
4x = 14, \\qquad x = 3.50
$$`,
    tacticals: [
      `**A.** → False

Ben's five burritos, at the recovered $y = 6$, cost

$$
5 \\times 6 = 30
$$

Ana's entire order was $32$, and $30 < 32$, so the burritos alone came to less than her meal.`,
      `**B.** → True

A burrito is $6$ and a taco is $3.50$:

$$
6 - 3.50 = 2.50
$$

A burrito costs $\\$2.50$ more than a taco.`,
      `**C.** → True

Dropping one burrito from Ana's order leaves $4$ tacos and $2$ burritos. Four tacos at $3.50$:

$$
4 \\times 3.50 = 14
$$

Two burritos at $6$:

$$
2 \\times 6 = 12
$$

Add:

$$
14 + 12 = 26
$$

Since $26 < 28$, she would have paid less than $\\$28.00$.`,
      `**D.** → False

Ben's total is already the overview's $37$. That $\\$37$ does not exceed $\\$40$.`,
      `**E.** → True

Six of each item is a mix neither friend ordered. Six tacos:

$$
6 \\times 3.50 = 21
$$

Six burritos:

$$
6 \\times 6 = 36
$$

Add:

$$
21 + 36 = 57
$$

which is the $\\$57.00$ the claim names.`,
    ],
  },

  "math-5-12": {
    overview: `Staff headcount and the loyalty-member share do not price a book. The memo's $\\$5$ hardcover gap and the $\\$8540$ combined revenue do. Let $x$ be the paperback price, so a hardcover is $x + 5$.

The month sold $400$ paperbacks and $220$ hardcovers:

$$
400x + 220(x + 5) = 8540
$$

$$
400x + 220x + 1100 = 8540
$$

$$
620x = 7440
$$

$$
x = \\frac{7440}{620} = 12
$$

Hardcovers then list at

$$
12 + 5 = 17
$$`,
    tacticals: [
      `**A.** → True

A paperback lists at $12$, and the memo then prices hardcovers at $17$. A $\\$12$ paperback therefore honours both the $\\$5$ gap rule and the revenue row.`,
      `**B.** → False

Hardcovers list at $17$. That sits below $\\$18$, not above it.`,
      `**C.** → True

Hardcover sales stay at $220$, so the entire revenue change is $100$ extra paperbacks at the recovered $x = 12$:

$$
100 \\times 12 = 1200
$$

Revenue would be $\\$1{,}200$ higher.`,
      `**D.** → False

Three hardcovers at the recovered $17$:

$$
3 \\times 17 = 51
$$

Two paperbacks at the recovered $12$:

$$
2 \\times 12 = 24
$$

Add:

$$
51 + 24 = 75
$$

That is exactly $\\$75$, which is not less than $\\$75$.`,
      `**E.** → False

Selling $310$ hardcovers and nothing else, at the recovered $17$, would bring in

$$
310 \\times 17 = 5270
$$

That is $\\$5{,}270$, far short of the reported $\\$8{,}540$.`,
    ],
  },

  "math-5-13": {
    overview: `Standard never prints a base fee or an overage rate; March and April have to supply both. The two months share that unknown base, so the $5$ GB gap in overage is the whole $\\$15$ gap in the bills. Let $x$ be Standard's monthly base and $y$ the charge per GB of overage.

March used $8$ GB for $62$ and April used $3$ GB for $47$:

$$
x + 8y = 62
$$

$$
x + 3y = 47
$$

Subtract:

$$
5y = 15
$$

$$
y = \\frac{15}{5} = 3
$$

April then gives

$$
x + 3(3) = 47
$$

$$
x + 9 = 47, \\qquad x = 38
$$

Basic ($\\$15$ plus $\\$2$ per GB) and Premium (flat $\\$40$) stay on the flyer until a comparison needs them.`,
    tacticals: [
      `**A.** → False

Standard's base fee is $38$, against Basic's advertised $\\$15$. Since $38 > 15$, Standard's base is higher, not lower.`,
      `**B.** → True

Standard's overage rate is $3$. That is the $\\$3.00$ per GB the claim names.`,
      `**C.** → True

A Standard month with $10$ GB of overage, at the recovered base and rate, starts with the overage line:

$$
10 \\times 3 = 30
$$

Add the base:

$$
38 + 30 = 68
$$

which is the $\\$68.00$ the claim names.`,
      `**D.** → True

At $5$ GB of overage the Standard bill is

$$
5 \\times 3 = 15
$$

$$
38 + 15 = 53
$$

Premium is a flat $\\$40$ with no overage. The switch saves

$$
53 - 40 = 13
$$

The customer would be $\\$13$ better off on Premium.`,
      `**E.** → True

Basic at $8$ GB of overage costs

$$
8 \\times 2 = 16
$$

$$
15 + 16 = 31
$$

Standard at the same usage is the March bill:

$$
8 \\times 3 = 24
$$

$$
38 + 24 = 62
$$

Since $31 < 62$, Basic is the cheaper plan at that usage.`,
    ],
  },

  "math-5-14": {
    overview: `Every confirmation total already includes the $8\\%$ occupancy tax, so divide that tax back out first. Weekend $1$ was charged $2419.20$ and Weekend $2$ was charged $3099.60$:

$$
\\frac{2419.20}{1.08} = 2240
$$

$$
\\frac{3099.60}{1.08} = 2870
$$

Let $x$ be the pre-tax Standard rate and $y$ the pre-tax Suite rate. The two weekends booked $10$ Standard and $4$ Suites, then $7$ Standard and $9$ Suites:

$$
10x + 4y = 2240
$$

$$
7x + 9y = 2870
$$

Nine times the first and four times the second match the Suite terms:

$$
90x + 36y = 20160
$$

$$
28x + 36y = 11480
$$

Subtract:

$$
62x = 8680
$$

$$
x = \\frac{8680}{62} = 140
$$

Then

$$
10(140) + 4y = 2240
$$

$$
1400 + 4y = 2240
$$

$$
4y = 840, \\qquad y = 210
$$`,
    tacticals: [
      `**A.** → True

Weekend $1$'s charged total, divided by $1.08$, is already the overview's pre-tax $2240$. The claim's $\\$2{,}240.00$ is that stripped booking revenue.`,
      `**B.** → False

A Suite is $210$ and a Standard room is $140$. The nightly gap is $70$, not $200$.`,
      `**C.** → False

Six Standard rooms pre-tax cost

$$
6 \\times 140 = 840
$$

Four Suites pre-tax cost

$$
4 \\times 210 = 840
$$

The two bookings match at $\\$840$, so six Standard rooms do not cost less than four Suites.`,
      `**D.** → True

One Suite night at the recovered pre-tax $210$, with the $8\\%$ occupancy tax put back on, costs

$$
210 \\times 1.08 = 226.80
$$

which is the taxed figure the claim names.`,
      `**E.** → True

Weekend $2$'s Standard count is unchanged, so one extra Suite night adds exactly the recovered pre-tax Suite rate of $210$. Pre-tax revenue would rise by $\\$210$.`,
    ],
  },

  "math-5-15": {
    overview: `March is labelled a forecast, so it stays out of the pricing system; only January and February record actual value. Let $x$ be Component A's unit cost and $y$ Component B's.

January held $150$ of A and $90$ of B for $3150$. February held $130$ of A and $140$ of B for $3660$:

$$
150x + 90y = 3150
$$

$$
130x + 140y = 3660
$$

Divide by $30$ and by $10$:

$$
5x + 3y = 105
$$

$$
13x + 14y = 366
$$

Fourteen times the first and three times the second match the $y$ terms:

$$
70x + 42y = 1470
$$

$$
39x + 42y = 1098
$$

Subtract:

$$
31x = 372
$$

$$
x = \\frac{372}{31} = 12
$$

Then

$$
5(12) + 3y = 105
$$

$$
60 + 3y = 105
$$

$$
3y = 45, \\qquad y = 15
$$

March's forecast basket of $200$ A and $100$ B, valued at those actual costs, is $200(12) + 100(15) = 3900$, against a forecast total of $4700$.`,
    tacticals: [
      `**A.** → True

Component A costs $12$ from the January and February actual rows. That is the $\\$12$ the claim names.`,
      `**B.** → False

Component B costs $15$. The claim names $\\$18$, which is the kind of figure you get by reading the forecast row back into the actual data.`,
      `**C.** → True

March's forecast puts $200$ A and $100$ B at $\\$4{,}700$. The same basket at the recovered actual costs is the overview's $3900$. Identical quantities with a higher total can come only from a higher price level overall.`,
      `**D.** → False

Valuing March's quantities at the actual January and February costs gives $3900$, not $4700$. The $\\$4{,}700$ belongs to the forecast row's own price assumptions.`,
      `**E.** → True

January and February are the two rows marked actual, at $3150$ and $3660$:

$$
3150 + 3660 = 6810
$$

The March forecast stays out of the sum.`,
    ],
  },

  "math-5-16": {
    overview: `Both workers completed the same $40$ regular hours, so the $\\$96$ gap between their totals is overtime talking. Worker $1$ logged $6 - 2 = 4$ more overtime hours than Worker $2$ and was paid $704 - 608 = 96$ more. Let $x$ be the regular wage and $y$ the overtime rate actually paid.

$$
40x + 6y = 704
$$

$$
40x + 2y = 608
$$

Subtract:

$$
4y = 96
$$

$$
y = \\frac{96}{4} = 24
$$

Worker $2$'s row then gives

$$
40x + 2(24) = 608
$$

$$
40x + 48 = 608
$$

$$
40x = 560, \\qquad x = 14
$$

The contract would have paid overtime at $1.5 \\times 14 = 21$, which is $3$ below the $24$ actually used.`,
    tacticals: [
      `**A.** → False

Payroll actually paid overtime at $24$. The contract requires $21$ per overtime hour, so the two rates differ by $3$.`,
      `**B.** → True

The regular hourly wage is $14$. That is the $\\$14$ the claim names.`,
      `**C.** → True

Contract overtime is $21$ and actual overtime is $24$. Worker $2$ has $2$ overtime hours, so the overtime overpayment is

$$
24 - 21 = 3
$$

$$
2 \\times 3 = 6
$$

which is the $\\$6.00$ the claim names.`,
      `**D.** → True

A third worker with $40$ regular hours and $4$ overtime hours, paid at the recovered actual rates, starts with regular pay:

$$
40 \\times 14 = 560
$$

Overtime:

$$
4 \\times 24 = 96
$$

Add:

$$
560 + 96 = 656
$$

matching the claim.`,
      `**E.** → True

The same third worker, paid overtime at the contractual $21$ instead, keeps the $560$ of regular pay and replaces the overtime line:

$$
4 \\times 21 = 84
$$

$$
560 + 84 = 644
$$

which is $\\$12$ less than the company's actual practice and matches the claim.`,
    ],
  },

  "math-5-17": {
    overview: `May's printed $\\$56.10$ is not the water charge: a $10\\%$ late penalty sits on the whole bill, so divide it back out before pairing the months. The genuine May charge is

$$
\\frac{56.10}{1.10} = 51.00
$$

June, with no penalty, is already $65.00$ for $25\\,\\mathrm{m}^{3}$. Let $x$ be the fixed monthly charge and $y$ the rate per cubic metre:

$$
x + 18y = 51
$$

$$
x + 25y = 65
$$

The extra $7\\,\\mathrm{m}^{3}$ in June cost an extra $14$:

$$
7y = 14
$$

$$
y = \\frac{14}{7} = 2
$$

May then gives

$$
x + 18(2) = 51
$$

$$
x + 36 = 51, \\qquad x = 15
$$

The office's $\\$18$ fixed charge and $\\$1.85$ rate are not the pair these two bills support.`,
    tacticals: [
      `**A.** → False

The office's claimed $\\$18$ does not survive the two cleaned bills. The pair that does is a $15$ fixed charge together with a $2$ per-cubic-metre rate.`,
      `**B.** → True

Usage is billed at $2$ per cubic metre. That contradicts the office's $\\$1.85$ figure.`,
      `**C.** → True

May's printed $56.10$ is $1.10$ times the genuine charge, so inverting the multiplier is already the overview's $51.00$. The claim's $\\$51.00$ is that stripped water charge.`,
      `**D.** → False

At the recovered $x = 15$ and $y = 2$, a month of $40\\,\\mathrm{m}^{3}$ starts with usage:

$$
2 \\times 40 = 80
$$

Add the fixed charge:

$$
15 + 80 = 95
$$

The bill is $\\$95.00$, which is $10$ above the claimed $\\$85.00$.`,
      `**E.** → True

June's printed $\\$65.00$ is already the genuine charge. A $10\\%$ late penalty on that whole amount is

$$
65.00 \\times 1.10 = 71.50
$$

matching the claim.`,
    ],
  },

  "math-5-18": {
    overview: `Each company quotes one fare outright and one fare only as a difference, so turn those differences into totals before any rate is named. CityCab's $20\\,\\mathrm{km}$ ride cost $14 + 12 = 26$. MetroX's $15\\,\\mathrm{km}$ ride cost $13.50 + 15 = 28.50$. Let $b_{1}$ and $r_{1}$ be CityCab's base and per-kilometre rate, and $b_{2}$ and $r_{2}$ MetroX's.

CityCab:

$$
b_{1} + 8r_{1} = 14
$$

$$
b_{1} + 20r_{1} = 26
$$

The extra $12\\,\\mathrm{km}$ cost an extra $12$:

$$
12r_{1} = 12
$$

$$
r_{1} = 1
$$

$$
b_{1} = 14 - 8(1) = 6
$$

MetroX:

$$
b_{2} + 5r_{2} = 13.50
$$

$$
b_{2} + 15r_{2} = 28.50
$$

The extra $10\\,\\mathrm{km}$ cost an extra $15$:

$$
10r_{2} = 15
$$

$$
r_{2} = \\frac{15}{10} = 1.5
$$

$$
b_{2} = 13.50 - 5(1.5) = 6
$$

Both bases land on $6$; CityCab then charges $6 + d$ and MetroX charges $6 + 1.5d$.`,
    tacticals: [
      `**A.** → True

CityCab at $10\\,\\mathrm{km}$:

$$
10 \\times 1 = 10
$$

$$
6 + 10 = 16
$$

MetroX at the same distance:

$$
10 \\times 1.5 = 15
$$

$$
6 + 15 = 21
$$

CityCab's $\\$16$ undercuts MetroX's $\\$21$ by $\\$5$.`,
      `**B.** → True

Both recovered bases are $6$. Peeling the per-kilometre charge off each company's shorter quoted ride lands on the same $\\$6.00$ for both.`,
      `**C.** → False

The two fares are $6 + d$ and $6 + 1.5d$, so MetroX exceeds CityCab by $0.5d$ whenever $d > 0$. Even at a short hop of $d = 3$:

$$
6 + 3 = 9
$$

$$
6 + 3 \\times 1.5 = 10.50
$$

Sharing a base while carrying the higher rate, MetroX is never cheaper for any positive distance.`,
      `**D.** → True

CityCab is base plus $1$ per kilometre, so a $30\\,\\mathrm{km}$ ride is

$$
6 + 30 \\times 1 = 36
$$

No extra fee sits on top of that linear rule, and the cost is the $\\$36.00$ the claim names.`,
      `**E.** → False

Equating $6 + d = 6 + 1.5d$ forces $d = 0$. At the claimed $5\\,\\mathrm{km}$ the bills are

$$
6 + 5 = 11
$$

$$
6 + 5 \\times 1.5 = 13.50
$$

which are not equal. The companies match only at zero distance.`,
    ],
  },

  "math-5-19": {
    overview: `The two vendors are separate price lists, so their quotation pairs are two independent systems.

Vendor A's first quote divides by $5$. Let $x_{A}$ and $y_{A}$ be A's unit prices for X and Y:

$$
4x_{A} + 3y_{A} = 90
$$

Four times that row matches the $y$ terms on the second quote $25x_{A} + 12y_{A} = 441$:

$$
16x_{A} + 12y_{A} = 360
$$

Subtract from the second quote:

$$
9x_{A} = 81
$$

$$
x_{A} = 9
$$

Then

$$
4(9) + 3y_{A} = 90
$$

$$
36 + 3y_{A} = 90
$$

$$
3y_{A} = 54, \\qquad y_{A} = 18
$$

Vendor B's first quote likewise divides by $5$: $4x_{B} + 3y_{B} = 92$, so $y_{B} = \\frac{92 - 4x_{B}}{3}$. Fold that into $25x_{B} + 12y_{B} = 467$ and clear the denominator:

$$
75x_{B} + 12(92 - 4x_{B}) = 1401
$$

$$
75x_{B} + 1104 - 48x_{B} = 1401
$$

$$
27x_{B} = 297
$$

$$
x_{B} = 11
$$

Then

$$
4(11) + 3y_{B} = 92
$$

$$
44 + 3y_{B} = 92
$$

$$
3y_{B} = 48, \\qquad y_{B} = 16
$$

A's list is therefore $(9, 18)$ and B's is $(11, 16)$.`,
    tacticals: [
      `**A.** → True

Vendor A charges $9$ per unit of X, while Vendor B charges $11$. Since $9 < 11$, A is cheaper for each X unit.`,
      `**B.** → True

On Y the ranking flips. B's $16$ undercuts A's $18$.`,
      `**C.** → True

For $40$ of X and $30$ of Y, Vendor A's list gives

$$
40 \\times 9 = 360
$$

$$
30 \\times 18 = 540
$$

$$
360 + 540 = 900
$$

Vendor B's list gives

$$
40 \\times 11 = 440
$$

$$
30 \\times 16 = 480
$$

$$
440 + 480 = 920
$$

A's $\\$900$ beats B's $\\$920$ on the bundle even though B wins on Y alone.`,
      `**D.** → False

The upcoming mix costs $900$ at A and $920$ at B, so switching the entire order to B raises the total by $20$ rather than reducing it. The $\\$20$ is an increase, the opposite of a saving.`,
      `**E.** → True

With no X in the order, only the Y prices matter. Sixty units at A's $18$:

$$
60 \\times 18 = 1080
$$

Sixty units at B's $16$:

$$
60 \\times 16 = 960
$$

Vendor B is $\\$120$ cheaper on that Y-only run.`,
    ],
  },

  "math-5-20": {
    overview: `Combined Q1 revenue is $27200$ and Beta earned $1000$ more than Alpha, a sum-and-difference pair that splits the two books before any unit price appears:

$$
A + B = 27200
$$

$$
B - A = 1000
$$

Adding gives

$$
2B = 28200, \\qquad B = 14100
$$

and $A = 13100$. Those two totals, with identical market prices $x$ for Product P and $y$ for Service Q, become

$$
150x + 80y = 13100
$$

$$
100x + 130y = 14100
$$

Divide by $10$:

$$
15x + 8y = 1310
$$

$$
10x + 13y = 1410
$$

Double the first and triple the second so the $x$ terms match:

$$
30x + 16y = 2620
$$

$$
30x + 39y = 4230
$$

Subtract:

$$
23y = 1610
$$

$$
y = \\frac{1610}{23} = 70
$$

Then

$$
10x + 13(70) = 1410
$$

$$
10x + 910 = 1410
$$

$$
10x = 500, \\qquad x = 50
$$`,
    tacticals: [
      `**A.** → True

Product P is $50$ and Service Q is $70$, and both companies sell at those same prices. That is the pair the claim names.`,
      `**B.** → True

The overview split already puts Beta at $14100$ and Alpha at $13100$. Beta's Q1 revenue is larger by the given $\\$1{,}000$.`,
      `**C.** → False

Alpha currently earns $13100$. Product P's share of that book is

$$
150 \\times 50 = 7500
$$

Raising P by $10\\%$ takes that price to

$$
50 \\times 1.10 = 55
$$

Volumes unchanged:

$$
150 \\times 55 = 8250
$$

$$
80 \\times 70 = 5600
$$

$$
8250 + 5600 = 13850
$$

The lift is

$$
13850 - 13100 = 750
$$

As a share of the original book:

$$
\\frac{750}{13100} \\approx 0.057
$$

About $5.7\\%$ of the whole book, not $10\\%$, because P is only part of Alpha's revenue.`,
      `**D.** → False

After that $10\\%$ lift on P, Alpha's projected book is $13850$. Beta's current Q1 is $14100$:

$$
14100 - 13850 = 250
$$

The projection still sits $\\$250$ short of Beta.`,
      `**E.** → True

Beta's Service Q line is

$$
130 \\times 70 = 9100
$$

Alpha's entire Product P line is

$$
150 \\times 50 = 7500
$$

Since $9100 > 7500$, Beta's Q subscriptions alone exceed Alpha's whole P revenue.`,
    ],
  },
};

function wordCount(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/\*\*[^*]+\*\*/g, " ")
    .replace(/→/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const letters = "ABCDE";
let count = 0;
const lengths = [];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  for (const t of data) {
    const p = patch[t.id];
    if (!p) throw new Error("missing patch for " + t.id);
    if (p.tacticals.length !== 5) throw new Error(t.id + " needs 5 letters");
    t.solution_overview = p.overview;
    t.tactical_explanations = p.tacticals;
    count += 1;

    const ow = wordCount(t.solution_overview);
    const lw = t.tactical_explanations.map(wordCount);
    lengths.push({ id: t.id, overview: ow, letters: lw });

    for (const field of [t.solution_overview, ...t.tactical_explanations]) {
      if (field.includes("—") || field.includes("–")) {
        throw new Error(t.id + " has dash");
      }
      if (field.includes("${")) {
        throw new Error(t.id + " has ${");
      }
      if (/Part\s+[123]/i.test(field)) {
        throw new Error(t.id + " has Part header");
      }
    }
    for (let i = 0; i < 5; i++) {
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${letters[i]}.** → ${want}`;
      if (!t.tactical_explanations[i].startsWith(head)) {
        throw new Error(t.id + " header mismatch " + letters[i]);
      }
    }
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log("wrote", file.pathname.split("/").pop(), data.length);
}

console.log("tasks", count);
for (const row of lengths) {
  console.log(row.id, "ov", row.overview, "L", row.letters.join("/"));
}
