import fs from "fs";

const files = [
  new URL("./01_10.json", import.meta.url),
  new URL("./11_20.json", import.meta.url),
];

const overviews = {
  "math-5-1": `The week's $620$ crates are a conserved total, so an equalizing transfer of $50$ from North to South would split that total in half. Equal holdings of a conserved pile are

$$
\\frac{620}{2} = 310
$$

each. North must currently sit $50$ above that level (it is the depot that would give crates away) and South $50$ below it:

$$
x = 310 + 50 = 360, \\qquad y = 310 - 50 = 260
$$

The same pair is the sum-and-difference system $x + y = 620$ and $x - y = 100$, because moving $50$ off one side and onto the other closes a gap of $100$. Adding those two equations recovers $2x = 720$, so $x = 360$ again, and $y = 620 - 360 = 260$. After the scheduled move both depots hold $310$, confirming the split.`,

  "math-5-2": `Invoice #102 has every coefficient divisible by $15$, so that is the invoice to simplify first. Let $x$ be the notebook price and $y$ the pen price, both fixed across the two bills.

#102 billed $15$ notebooks and $60$ pens at $160.50$:

$$
15x + 60y = 160.50
$$

$$
x + 4y = 10.70, \\qquad x = 10.70 - 4y
$$

Invoice #101 billed $40$ notebooks and $25$ pens at $185.00$. Substitute the expression for $x$:

$$
40(10.70 - 4y) + 25y = 185.00
$$

$$
428.00 - 160y + 25y = 185.00
$$

$$
-135y = -243.00, \\qquad y = \\frac{243.00}{135} = 1.80
$$

Then

$$
x = 10.70 - 4(1.80) = 10.70 - 7.20 = 3.50
$$

The pair rebuilds both printed totals: $40(3.50) + 25(1.80) = 185.00$ and $15(3.50) + 60(1.80) = 160.50$.`,

  "math-5-3": `The evening session is the cleaner of the two logged rows, because every coefficient is a multiple of $40$. Let $a$ be the adult price and $c$ the child price, both fixed through Saturday.

Evening sold $160$ adult and $40$ child tickets for $2200$:

$$
160a + 40c = 2200
$$

$$
4a + c = 55, \\qquad c = 55 - 4a
$$

The matinee sold $90$ adult and $150$ child tickets for $2130$. Put the evening expression for $c$ into that row:

$$
90a + 150(55 - 4a) = 2130
$$

$$
90a + 8250 - 600a = 2130
$$

$$
-510a = -6120, \\qquad a = \\frac{6120}{510} = 12
$$

Then $c = 55 - 4(12) = 55 - 48 = 7$. The two Saturday mixes rebuild as $90(12) + 150(7) = 2130$ and $160(12) + 40(7) = 2200$.`,

  "math-5-4": `The $\\$8$ delivery fee sits on every receipt and belongs to neither menu item, so peel it off before any pricing equation is written. Receipt A was charged $70$, so its food is $70 - 8 = 62$. Receipt B was charged $74$, so its food is $74 - 8 = 66$. Let $x$ be the sandwich price and $y$ the wrap price.

The food-only pair is then

$$
6x + 4y = 62, \\qquad 3x + 9y = 66
$$

Double the second equation so the sandwich terms match:

$$
6x + 18y = 132
$$

Subtract the first:

$$
14y = 70, \\qquad y = \\frac{70}{14} = 5
$$

Back in Receipt B's food row, $3x + 9(5) = 66$ gives $3x = 21$, so $x = 7$. The two food subtotals rebuild as $6(7) + 4(5) = 62$ and $3(7) + 9(5) = 66$.`,

  "math-5-5": `If the whole $\\$10{,}000$ had sat in the $4\\%$ account, the year would have earned $400$. The actual $520$ of interest is $120$ above that floor, and each dollar shifted into the $7\\%$ account earns an extra $3$ cents. Let $y$ be the amount in Account B.

That leftover interest is exactly the rate gap acting on $y$:

$$
0.03y = 120, \\qquad y = \\frac{120}{0.03} = 4000
$$

Account A then holds the rest of the principal:

$$
x = 10000 - 4000 = 6000
$$

The year's interest at that split is $0.04(6000) + 0.07(4000) = 240 + 280 = 520$, matching the reported total. The same figures come from substituting $x = 10000 - y$ into $0.04x + 0.07y = 520$.`,

  "math-5-6": `The shipment is $18 + 12 = 30$ chairs worth $9660$, so the mix averages

$$
\\frac{9660}{30} = 322
$$

per chair. Premium sits $\\$45$ above Standard, and $12$ of the $30$ chairs are Premium, which lifts the average by

$$
\\frac{12}{30} \\times 45 = 18
$$

above the Standard price. Let $x$ be that Standard price:

$$
x + 18 = 322, \\qquad x = 304
$$

The catalogue rule then prices Premium at $y = 304 + 45 = 349$. Direct substitution of $y = x + 45$ into $18x + 12y = 9660$ gives the same pair: $30x + 540 = 9660$, so $30x = 9120$ and $x = 304$. The shipment rebuilds as $18(304) + 12(349) = 5472 + 4188 = 9660$.`,

  "math-5-7": `The two quoted bills share the same monthly fee, so the entire $\\$24$ gap between them is extra minutes. The heavy user went $120 - 40 = 80$ minutes further over allowance and paid $53.00 - 29.00 = 24.00$ more. Let $r$ be the extra-minute rate:

$$
80r = 24.00, \\qquad r = \\frac{24.00}{80} = 0.30
$$

The $40$-minute bill then isolates the fee $f$:

$$
f + 40(0.30) = 29.00, \\qquad f + 12.00 = 29.00, \\qquad f = 17.00
$$

The $120$-minute bill agrees: $17.00 + 120(0.30) = 17.00 + 36.00 = 53.00$. Every later quote is $17.00 + 0.30m$ for $m$ extra minutes.`,

  "math-5-8": `Hours, not material cost, pin the week's counts. Let $s$ be Standard ovens and $d$ Deluxe ovens. The division finished $130$ ovens and logged $795$ assembly hours at $4$ hours per Standard and $9$ per Deluxe:

$$
s + d = 130, \\qquad 4s + 9d = 795
$$

Multiply the headcount equation by $4$ so the Standard-hour terms match:

$$
4s + 4d = 520
$$

Subtract from the hours row:

$$
5d = 275, \\qquad d = \\frac{275}{5} = 55
$$

Then $s = 130 - 55 = 75$. Those counts log $4(75) + 9(55) = 300 + 495 = 795$ hours, matching the report. The $\\$120$ and $\\$180$ material columns are not used until a cost question asks for them.`,

  "math-5-9": `Listed prices explain net sales, so each branch's returns come off first. Riverside nets $9760 - 460 = 9300$ on $14$ sofas and $22$ armchairs. Hillcrest nets $9300 - 300 = 9000$ on $20$ sofas and $10$ armchairs. Let $x$ be the sofa price and $y$ the armchair price.

Hillcrest's net row divides by $10$:

$$
2x + y = 900, \\qquad y = 900 - 2x
$$

Substitute into Riverside:

$$
14x + 22(900 - 2x) = 9300
$$

$$
14x + 19800 - 44x = 9300
$$

$$
-30x = -10500, \\qquad x = \\frac{10500}{30} = 350
$$

Then $y = 900 - 2(350) = 900 - 700 = 200$. The two net rows rebuild as $14(350) + 22(200) = 9300$ and $20(350) + 10(200) = 9000$.`,

  "math-5-10": `The $180$-page gap between the two PrintFast orders carries the whole $\\$36$ price gap, because the setup fee is the same on every bill. Let $f$ be that fee and $r$ the per-page rate.

Order #58 covered $120$ pages for $33.00$ and Order #96 covered $300$ pages for $69.00$:

$$
f + 120r = 33.00, \\qquad f + 300r = 69.00
$$

Subtract:

$$
180r = 36.00, \\qquad r = \\frac{36.00}{180} = 0.20
$$

Order #58 then gives $f = 33.00 - 120(0.20) = 33.00 - 24.00 = 9.00$. Order #96 agrees: $9.00 + 300(0.20) = 69.00$. Any later $p$-page quote is $9.00 + 0.20p$.`,

  "math-5-11": `Ben paid $\\$5$ more than Ana, and Ana's ticket is already $\\$32$, so Ben's total is an ordinary dollar figure before any prices are named: $32 + 5 = 37$. Let $x$ be the taco price and $y$ the burrito price.

Ana's $4$ tacos and $3$ burritos, and Ben's $2$ tacos and $5$ burritos, then read

$$
4x + 3y = 32, \\qquad 2x + 5y = 37
$$

Double Ben's equation so the taco terms match, and subtract Ana:

$$
4x + 10y = 74
$$

$$
7y = 42, \\qquad y = \\frac{42}{7} = 6
$$

Ana's order then gives $4x + 3(6) = 32$, so $4x = 14$ and $x = \\frac{14}{4} = 3.50$. The two receipts rebuild as $4(3.50) + 3(6) = 32$ and $2(3.50) + 5(6) = 37$.`,

  "math-5-12": `Staff headcount and the loyalty-member share do not price a book. The memo's $\\$5$ hardcover gap and the $\\$8540$ combined revenue do. Let $x$ be the paperback price, so a hardcover is $x + 5$.

The month sold $400$ paperbacks and $220$ hardcovers:

$$
400x + 220(x + 5) = 8540
$$

$$
620x + 1100 = 8540
$$

$$
620x = 7440, \\qquad x = \\frac{7440}{620} = 12
$$

Hardcovers then list at $12 + 5 = 17$. The reported revenue rebuilds as $400(12) + 220(17) = 4800 + 3740 = 8540$.`,

  "math-5-13": `Standard never prints a base fee or an overage rate; March and April have to supply both. The two months share that unknown base, so the $5$ GB gap in overage is the whole $\\$15$ gap in the bills. Let $x$ be Standard's monthly base and $y$ the charge per GB of overage.

March used $8$ GB for $62.00$ and April used $3$ GB for $47.00$:

$$
x + 8y = 62, \\qquad x + 3y = 47
$$

Subtract:

$$
5y = 15, \\qquad y = \\frac{15}{5} = 3
$$

April then gives $x + 3(3) = 47$, so $x = 38$. March agrees: $38 + 8(3) = 62$. Basic ($\\$15$ plus $\\$2$ per GB) and Premium (flat $\\$40$) stay on the flyer until a comparison needs them.`,

  "math-5-14": `Every confirmation total already includes the $8\\%$ occupancy tax, so the first move is to divide it back out. Weekend $1$ was charged $2419.20$ and Weekend $2$ was charged $3099.60$:

$$
\\frac{2419.20}{1.08} = 2240, \\qquad \\frac{3099.60}{1.08} = 2870
$$

Let $x$ be the pre-tax Standard rate and $y$ the pre-tax Suite rate. The two weekends booked $10$ Standard and $4$ Suites, then $7$ Standard and $9$ Suites:

$$
10x + 4y = 2240, \\qquad 7x + 9y = 2870
$$

Nine times the first and four times the second match the Suite terms:

$$
90x + 36y = 20160, \\qquad 28x + 36y = 11480
$$

Subtract: $62x = 8680$, so $x = \\frac{8680}{62} = 140$. Then $10(140) + 4y = 2240$ gives $4y = 840$ and $y = 210$.`,

  "math-5-15": `March is labelled a forecast, so it stays out of the pricing system; only January and February record actual value. Let $x$ be Component A's unit cost and $y$ Component B's.

January held $150$ of A and $90$ of B for $3150$. February held $130$ of A and $140$ of B for $3660$:

$$
150x + 90y = 3150, \\qquad 130x + 140y = 3660
$$

Divide by $30$ and by $10$:

$$
5x + 3y = 105, \\qquad 13x + 14y = 366
$$

Fourteen times the first and three times the second match the $y$ terms:

$$
70x + 42y = 1470, \\qquad 39x + 42y = 1098
$$

Subtract: $31x = 372$, so $x = \\frac{372}{31} = 12$. Then $5(12) + 3y = 105$ gives $3y = 45$ and $y = 15$. Those costs rebuild January as $150(12) + 90(15) = 3150$ and February as $130(12) + 140(15) = 3660$. March's forecast basket of $200$ A and $100$ B, valued at the same actual costs, is $200(12) + 100(15) = 3900$, which sits $800$ below the projected $4700$.`,

  "math-5-16": `Both workers completed the same $40$ regular hours, so the $\\$96$ gap between their totals is overtime talking. Worker $1$ logged $6 - 2 = 4$ more overtime hours than Worker $2$ and was paid $704 - 608 = 96$ more. Let $x$ be the regular wage and $y$ the overtime rate actually paid.

$$
40x + 6y = 704, \\qquad 40x + 2y = 608
$$

Subtract:

$$
4y = 96, \\qquad y = \\frac{96}{4} = 24
$$

Worker $2$'s row then gives $40x + 2(24) = 608$, so $40x = 560$ and $x = 14$. The contract would have paid overtime at $1.5 \\times 14 = 21$, which is $3$ below the $24$ actually used. Both payroll totals rebuild at $(x, y) = (14, 24)$.`,

  "math-5-17": `May's printed $\\$56.10$ is not the water charge: a $10\\%$ late penalty sits on the whole bill, so divide it back out before pairing the months. The genuine May charge is

$$
\\frac{56.10}{1.10} = 51.00
$$

June, with no penalty, is already $65.00$ for $25\\,\\mathrm{m}^{3}$. Let $x$ be the fixed monthly charge and $y$ the rate per cubic metre:

$$
x + 18y = 51, \\qquad x + 25y = 65
$$

The extra $7\\,\\mathrm{m}^{3}$ in June cost an extra $14$:

$$
7y = 14, \\qquad y = \\frac{14}{7} = 2
$$

May then gives $x + 18(2) = 51$, so $x = 15$. June agrees: $15 + 25(2) = 65$. The office's $\\$18$ fixed charge and $\\$1.85$ rate are not the pair these two bills support.`,

  "math-5-18": `Each company quotes one fare outright and one fare only as a difference, so turn those differences into totals before any rate is named. CityCab's $20\\,\\mathrm{km}$ ride cost $14 + 12 = 26$. MetroX's $15\\,\\mathrm{km}$ ride cost $13.50 + 15 = 28.50$. Let $b_{1}$ and $r_{1}$ be CityCab's base and per-kilometre rate, and $b_{2}$ and $r_{2}$ MetroX's.

CityCab:

$$
b_{1} + 8r_{1} = 14, \\qquad b_{1} + 20r_{1} = 26
$$

The extra $12\\,\\mathrm{km}$ cost an extra $12$, so $r_{1} = \\frac{12}{12} = 1$ and $b_{1} = 14 - 8(1) = 6$.

MetroX:

$$
b_{2} + 5r_{2} = 13.50, \\qquad b_{2} + 15r_{2} = 28.50
$$

The extra $10\\,\\mathrm{km}$ cost an extra $15$, so $r_{2} = \\frac{15}{10} = 1.5$ and $b_{2} = 13.50 - 5(1.5) = 6$. Both bases land on $6$; CityCab then charges $6 + d$ and MetroX charges $6 + 1.5d$.`,

  "math-5-19": `The two vendors are separate price lists, so their quotation pairs are two independent systems. Vendor A's first quote divides by $5$. Let $x_{A}$ and $y_{A}$ be A's unit prices for X and Y:

$$
4x_{A} + 3y_{A} = 90, \\qquad y_{A} = 30 - \\frac{4}{3}x_{A}
$$

The second quote $25x_{A} + 12y_{A} = 441$ then becomes

$$
25x_{A} + 12\\left(30 - \\frac{4}{3}x_{A}\\right) = 441
$$

$$
9x_{A} = 81, \\qquad x_{A} = 9, \\qquad y_{A} = 18
$$

Vendor B's first quote likewise divides by $5$: $4x_{B} + 3y_{B} = 92$. The same substitution into $25x_{B} + 12y_{B} = 467$ yields $x_{B} = 11$ and $y_{B} = 16$. A's list is therefore $(9, 18)$ and B's is $(11, 16)$.`,

  "math-5-20": `Combined Q1 revenue is $27200$ and Beta earned $1000$ more than Alpha, a sum-and-difference pair that splits the two books before any unit price appears:

$$
A + B = 27200, \\qquad B - A = 1000
$$

Adding gives $2B = 28200$, so $B = 14100$ and $A = 13100$. Those two totals, with identical market prices $x$ for Product P and $y$ for Service Q, become

$$
150x + 80y = 13100, \\qquad 100x + 130y = 14100
$$

Divide by $10$, then match the $x$ terms by doubling the first and tripling the second:

$$
15x + 8y = 1310, \\qquad 10x + 13y = 1410
$$

$$
30x + 16y = 2620, \\qquad 30x + 39y = 4230
$$

Subtract: $23y = 1610$, so $y = \\frac{1610}{23} = 70$. Then $10x + 13(70) = 1410$ gives $10x = 500$ and $x = 50$. Alpha rebuilds as $150(50) + 80(70) = 13100$ and Beta as $100(50) + 130(70) = 14100$.`,
};

const tacticals = {
  "math-5-1": [
    `**A.** → True

The overview recovers North at $x = 360$ crates, as the depot sitting $50$ above the equalized level of $310$. The claim names that same North holding of $360$ crates.`,
    `**B.** → False

South holds the overview's $y = 260$ crates, the count sitting $50$ below the equalized $310$. The claim names $240$, which is $20$ crates short of that recovered South total.`,
    `**C.** → True

North currently holds the overview's $360$ crates. Moving $30$ crates the other way, from South onto North, adds those $30$ rather than subtracting them:

$$
360 + 30 = 390
$$

North would then hold $390$ crates, the figure the claim names.`,
    `**D.** → False

The overview pair is $360$ at North and $260$ at South, so today's gap is

$$
360 - 260 = 100
$$

not the claimed $120$. A transfer of $50$ closes a gap of $100$, because it takes $50$ off one side and adds $50$ to the other.`,
    `**E.** → True

Apply the scheduled $50$-crate shift to the overview counts: North falls from $360$ to $310$ and South rises from $260$ to $310$. The same $310$ is half of the conserved $620$ crates, so both depots would hold $310$ each.`,
  ],
  "math-5-2": [
    `**A.** → True

The recovered notebook price is $x = 3.50$. That is exactly the unit cost the claim names for one notebook.`,
    `**B.** → False

The recovered pen price is $y = 1.80$, thirty cents below the claimed $\\$2.10$. Invoice #102's simplified row $x + 4y = 10.70$ is what forces that $1.80$, not $2.10$.`,
    `**C.** → True

Invoice #101 already prints a total of $\\$185.00$ for $40$ notebooks and $25$ pens. Costing that mix at the recovered prices confirms the same figure:

$$
40(3.50) + 25(1.80) = 140.00 + 45.00 = 185.00
$$

The claim restates that printed, and rebuilt, total.`,
    `**D.** → True

Ten of each item is a mix that appears on neither invoice, so price it from the recovered pair:

$$
10(3.50) + 10(1.80) = 35.00 + 18.00 = 53.00
$$

That order comes to $\\$53.00$, matching the claim.`,
    `**E.** → False

Invoice #102 already prints $\\$160.50$ for $15$ notebooks and $60$ pens, and the recovered prices rebuild that total:

$$
15(3.50) + 60(1.80) = 52.50 + 108.00 = 160.50
$$

The claim names $\\$172.50$, which is $\\$12.00$ above the printed and rebuilt figure.`,
  ],
  "math-5-3": [
    `**A.** → True

The recovered adult price is $a = 12$. That is the $\\$12.00$ ticket the claim names.`,
    `**B.** → True

The recovered child price is $c = 7$. That is the $\\$7.00$ ticket the claim names.`,
    `**C.** → False

The matinee mix of $90$ adult and $150$ child tickets, at the recovered prices, brings in

$$
90(12) + 150(7) = 1080 + 1050 = 2130
$$

The box-office already logged $\\$2{,}130$, while the claim names $\\$2{,}050$, an $\\$80$ understatement of the printed row.`,
    `**D.** → False

The evening mix of $160$ adult and $40$ child tickets, at the recovered prices, brings in

$$
160(12) + 40(7) = 1920 + 280 = 2200
$$

The log already shows $\\$2{,}200$, while the claim names $\\$2{,}300$, a $\\$100$ overstatement of that session.`,
    `**E.** → False

Fifty of each ticket, priced from the recovered pair, would generate

$$
50(12) + 50(7) = 600 + 350 = 950
$$

That is $\\$950$, fifty dollars short of the claimed $\\$1{,}000$.`,
  ],
  "math-5-4": [
    `**A.** → True

The recovered sandwich price is $x = 7$. That is the $\\$7.00$ menu price the claim names.`,
    `**B.** → True

The recovered wrap price is $y = 5$. That is the $\\$5.00$ menu price the claim names.`,
    `**C.** → True

The overview already peeled Receipt A's $\\$8$ fee and left a food subtotal of $62$. Costing $6$ sandwiches and $4$ wraps at the recovered prices confirms that same subtotal:

$$
6(7) + 4(5) = 42 + 20 = 62
$$

The claim's $\\$62.00$ is that fee-free food figure.`,
    `**D.** → True

Receipt B's charged total of $\\$74.00$ is the printed fee-inclusive figure. Rebuilding it from the recovered menu and the flat fee gives $3(7) + 9(5) = 66$ of food plus $8$ of delivery, which is $74$ again.`,
    `**E.** → True

A pickup order carries no delivery fee, so only the recovered food prices matter. Five sandwiches and five wraps cost

$$
5(7) + 5(5) = 35 + 25 = 60
$$

which is the $\\$60.00$ the claim names.`,
  ],
  "math-5-5": [
    `**A.** → False

Account A holds the overview's $x = 6000$, five hundred dollars short of the claimed $\\$6{,}500$. A rough half-and-half split of the $\\$10{,}000$ ignores the weighted interest equation that fixed $6000$ and $4000$.`,
    `**B.** → False

Account B holds the overview's $y = 4000$, not the claimed $\\$4{,}500$. The pair $6500$ and $4500$ also adds to $11000$, which already overshoots the $\\$10{,}000$ actually invested.`,
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

That is $\\$280.00$, well above the claimed $\\$210.00$. Together with A's $240$, the $280$ also reconstitutes the reported $520$.`,
    `**E.** → True

Account B pays $7\\%$ on whatever principal it holds. Placing the entire $\\$10{,}000$ there for the year would earn

$$
0.07 \\times 10000 = 700
$$

which is the $\\$700.00$ the claim names. No split is needed, because this scenario puts the whole principal in one account.`,
  ],
  "math-5-6": [
    `**A.** → True

The recovered Standard price is $x = 304$. That is the $\\$304.00$ catalogue price the claim names.`,
    `**B.** → False

The recovered Premium price is $y = 349$, five dollars below the claimed $\\$354.00$. Adding the $\\$45$ gap to $304$ produces $349$, not $354$.`,
    `**C.** → True

The $12$ Premium chairs in the shipment, at the recovered $349$ each, are worth

$$
12(349) = 4188
$$

which is the $\\$4{,}188.00$ the claim names. The $18$ Standard chairs make up the rest: $18(304) = 5472$, and $4188 + 5472 = 9660$.`,
    `**D.** → True

The catalogue prices Premium exactly $\\$45$ more per unit than Standard throughout the current period. The claim restates that pricing rule, so the per-unit gap is $\\$45.00$ by the rule itself.`,
    `**E.** → True

Five of each grade, at the recovered prices, costs

$$
5(304) + 5(349) = 1520 + 1745 = 3265
$$

Since $3265 > 3000$, the order does exceed $\\$3{,}000.00$.`,
  ],
  "math-5-7": [
    `**A.** → True

The recovered fixed monthly fee is $f = 17.00$. That is what remains after the per-minute charge is subtracted from either quoted bill, and it matches the claim.`,
    `**B.** → True

The recovered extra-minute rate is $r = 0.30$. That is the $\\$0.30$ per extra minute the ad's two bills force once the shared fee cancels.`,
    `**C.** → False

A month with $200$ extra minutes, billed at the recovered fee and rate, costs

$$
17.00 + 200(0.30) = 17.00 + 60.00 = 77.00
$$

The bill is $\\$77.00$, three dollars under the claimed $\\$80.00$.`,
    `**D.** → False

A month with no extra minutes still owes the recovered fee of $17.00$, because that base does not depend on minutes at all:

$$
17.00 + 0(0.30) = 17.00
$$

The customer would pay $\\$17.00$, not $\\$0.00$.`,
    `**E.** → False

Double the rival's $\\$0.20$ rate would be $2 \\times 0.20 = 0.40$. ByteMobile's recovered $0.30$ sits below that $0.40$, so the advertised rate is one and a half times the rival's, not more than double it.`,
  ],
  "math-5-8": [
    `**A.** → True

The recovered Standard count is $s = 75$. That is the number of Standard ovens the claim names for the week.`,
    `**B.** → False

The recovered Deluxe count is $d = 55$, ten more than the claimed $45$. Subtracting the two weekly totals without eliminating a variable is a common route to that understated Deluxe figure.`,
    `**C.** → True

Each Standard oven takes $4$ assembly hours, and $75$ of them were built, so Standard hours are

$$
4 \\times 75 = 300
$$

matching the claim.`,
    `**D.** → False

Each Deluxe oven takes $9$ assembly hours, and $55$ of them were built, so Deluxe hours are

$$
9 \\times 55 = 495
$$

that is five short of the claimed $500$. Those $495$ hours plus Standard's $300$ reconstitute the logged $795$.`,
    `**E.** → True

Standard ovens carry $\\$120$ of material each, and $75$ of them were built, so the Standard material bill is

$$
75 \\times 120 = 9000
$$

which is the $\\$9{,}000.00$ the claim names. This is the first place the material-cost column is needed.`,
  ],
  "math-5-9": [
    `**A.** → True

The recovered sofa price is $x = 350$. That is the $\\$350.00$ list price the claim names.`,
    `**B.** → True

The recovered armchair price is $y = 200$. That is the $\\$200.00$ list price the claim names.`,
    `**C.** → True

The overview already has Riverside's net at $9300$ after the $\\$460$ of returns. Costing its $14$ sofas and $22$ armchairs at the recovered prices rebuilds that same net:

$$
14(350) + 22(200) = 4900 + 4400 = 9300
$$

The claim's $\\$9{,}300.00$ is that net figure.`,
    `**D.** → True

The branch report already lists Hillcrest's gross sales as $\\$9{,}300$, the pre-returns total the claim names. After the $\\$300$ of returns, net is $9000$, and $20(350) + 10(200) = 9000$ rebuilds that net from the recovered prices. The $\\$9{,}300$ gross happens to match Riverside's net numerically, but those are different quantities at different branches.`,
    `**E.** → True

Net sales equal gross minus returns, so with returns of $0$ the two figures coincide. Riverside's gross was $9760$, and $9760 - 0 = 9760$. Both would read $\\$9{,}760.00$. Removing the returns changes only the deduction, never the listed prices.`,
  ],
  "math-5-10": [
    `**A.** → False

The recovered setup fee is $f = 9.00$, three dollars below the claimed $\\$12.00$. The $\\$36$ gap between the two order totals is $180$ pages of per-page charges, so none of that gap is fee.`,
    `**B.** → False

The recovered per-page rate is $r = 0.20$, not the claimed $\\$0.25$. Dividing the $\\$36$ gap by the $180$-page difference is what forces $0.20$; a wrong page difference is the usual source of $0.25$.`,
    `**C.** → False

A $250$-page order at the recovered fee and rate costs

$$
9.00 + 250(0.20) = 9.00 + 50.00 = 59.00
$$

The order comes to $\\$59.00$, a dollar under the claimed $\\$60.00$.`,
    `**D.** → False

At $350$ pages PrintFast charges $9.00 + 350(0.20) = 79.00$. QuickCopy's flat fee for any order up to $350$ pages is $60.00$, and $79.00 > 60.00$, so PrintFast is $\\$19$ more expensive at that length, not cheaper.`,
    `**E.** → True

The two invoices differ by $180$ pages, a nonzero gap, so subtracting them isolates a unique rate $r = 0.20$ and then a unique fee $f = 9.00$. The coefficient matrix has determinant $300 - 120 = 180 \\neq 0$, so the two lines cross at exactly one point. Had both orders covered the same page count, that determinant would vanish and the pair $(f, r)$ would not be pinned down.`,
  ],
  "math-5-11": [
    `**A.** → False

Ben's five burritos, at the recovered $y = 6$, cost $5(6) = 30$. Ana's entire order was $32$, and $30 < 32$, so the burritos alone came to less than her meal. Paying more overall does not force every partial comparison to go the same way.`,
    `**B.** → True

The recovered prices are $x = 3.50$ for a taco and $y = 6$ for a burrito, so the gap is

$$
6 - 3.50 = 2.50
$$

A burrito costs $\\$2.50$ more than a taco, matching the claim.`,
    `**C.** → True

Dropping one burrito from Ana's order leaves $4$ tacos and $2$ burritos. At the recovered prices that mix costs

$$
4(3.50) + 2(6) = 14 + 12 = 26
$$

Since $26 < 28$, she would have paid less than $\\$28.00$.`,
    `**D.** → False

Ben's total is already fixed by the $\\$5$ comparison: $32 + 5 = 37$, and the recovered prices rebuild $2(3.50) + 5(6) = 37$. That $\\$37$ does not exceed $\\$40$. Adding the $\\$5$ difference a second time on top of $37$ is the slip that pushes a figure past $40$.`,
    `**E.** → True

Six of each item, priced from the recovered pair, costs

$$
6(3.50) + 6(6) = 21 + 36 = 57
$$

which is the $\\$57.00$ the claim names.`,
  ],
  "math-5-12": [
    `**A.** → True

The recovered paperback price is $x = 12$, and the memo then prices hardcovers at $12 + 5 = 17$. A $\\$12$ paperback therefore honours both the $\\$5$ gap rule and the $\\$8{,}540$ revenue row.`,
    `**B.** → False

Hardcovers list at the recovered $17$, which sits below $\\$18$, not above it. Staff headcount and the loyalty-member share in the report have no bearing on that unit price.`,
    `**C.** → True

Hardcover sales stay at $220$, so the entire revenue change is $100$ extra paperbacks at the recovered $x = 12$:

$$
100 \\times 12 = 1200
$$

Revenue would be $\\$1{,}200$ higher, matching the claim.`,
    `**D.** → False

Three hardcovers and two paperbacks, at the recovered $17$ and $12$, cost

$$
3(17) + 2(12) = 51 + 24 = 75
$$

That is exactly $\\$75$, which is not less than $\\$75$.`,
    `**E.** → False

Selling $310$ hardcovers and nothing else, at the recovered $17$, would bring in

$$
310 \\times 17 = 5270
$$

That is $\\$5{,}270$, far short of the reported $\\$8{,}540$.`,
  ],
  "math-5-13": [
    `**A.** → False

Standard's recovered base fee is $x = 38$, against Basic's advertised $\\$15$. Since $38 > 15$, Standard's base is higher, not lower, by $\\$23$ a month.`,
    `**B.** → True

The recovered Standard overage rate is $y = 3$. That is the $\\$3.00$ per GB the claim names, isolated by the $5$ GB gap between March and April.`,
    `**C.** → True

A Standard month with $10$ GB of overage, at the recovered base and rate, costs

$$
38 + 10(3) = 38 + 30 = 68
$$

which is the $\\$68.00$ the claim names.`,
    `**D.** → True

At $5$ GB of overage the Standard bill is $38 + 5(3) = 53$. Premium is a flat $\\$40$ with no overage, so the switch saves $53 - 40 = 13$ a month. The customer would be $\\$13$ better off on Premium.`,
    `**E.** → True

Basic at $8$ GB of overage costs $15 + 8(2) = 31$. Standard at the same usage is the March bill, $38 + 8(3) = 62$. Since $31 < 62$, Basic is the cheaper plan at that usage.`,
  ],
  "math-5-14": [
    `**A.** → True

Weekend $1$'s charged total of $2419.20$, divided by $1.08$, is the overview's pre-tax $2240$. Running the tax forward confirms $2240 \\times 1.08 = 2419.20$. The claim's $\\$2{,}240.00$ is that stripped booking revenue.`,
    `**B.** → False

The recovered nightly rates are $x = 140$ for Standard and $y = 210$ for a Suite, so the gap is $210 - 140 = 70$, not $200$. Comparing the tax-inclusive confirmation totals instead of stripping the $8\\%$ first is what inflates the estimate.`,
    `**C.** → False

Six Standard rooms pre-tax cost $6(140) = 840$. Four Suites pre-tax cost $4(210) = 840$. The two bookings match at $\\$840$, so six Standard rooms do not cost less than four Suites.`,
    `**D.** → True

One Suite night at the recovered pre-tax $210$, with the $8\\%$ occupancy tax put back on, costs

$$
210 \\times 1.08 = 226.80
$$

which is the taxed figure the claim names.`,
    `**E.** → True

Weekend $2$'s Standard count is unchanged, so one extra Suite night adds exactly the recovered pre-tax Suite rate:

$$
1 \\times 210 = 210
$$

Pre-tax revenue would rise by $\\$210$.`,
  ],
  "math-5-15": [
    `**A.** → True

The recovered unit cost of Component A is $x = 12$. That is the $\\$12$ the claim names, taken from the January and February actual rows only.`,
    `**B.** → False

The recovered unit cost of Component B is $y = 15$, not the claimed $\\$18$. Reading the forecast row's higher implied prices back into the actual data is the usual shortcut to $18$.`,
    `**C.** → True

The overview values March's forecast quantities at the actual January and February costs and gets $3900$, against a projected $4700$. That $\\$800$ gap sits on identical quantities, $200$ of A and $100$ of B, so it can come only from a higher price level in the forecast than the recorded costs.`,
    `**D.** → False

The claim treats the forecast's $4700$ as if it were the actual-cost valuation of $200$ A and $100$ B. The overview already priced that basket at the recovered $12$ and $15$ and got $3900$. The $\\$4{,}700$ is the forecast's own assumption, not the January and February unit costs applied to March's quantities.`,
    `**E.** → True

January and February are the two rows marked actual, at $3150$ and $3660$. Adding those recorded totals gives

$$
3150 + 3660 = 6810
$$

No unit cost is needed, and the March forecast stays out of the sum.`,
  ],
  "math-5-16": [
    `**A.** → False

Payroll actually paid overtime at the recovered $y = 24$. The contract requires $1.5 \\times 14 = 21$ per overtime hour. Those two rates differ by $3$, so the overtime actually paid does not match the $1.5\\times$ rule.`,
    `**B.** → True

The recovered regular hourly wage is $x = 14$. That is the $\\$14$ the claim names, isolated once the shared $40$ regular hours cancel.`,
    `**C.** → True

Contract overtime is $21$ and actual overtime is $24$. Worker $2$ has $2$ overtime hours, so the overtime overpayment is

$$
2(24 - 21) = 2(3) = 6
$$

which is the $\\$6.00$ the claim names.`,
    `**D.** → True

A third worker with $40$ regular hours and $4$ overtime hours, paid at the recovered actual rates, earns

$$
40(14) + 4(24) = 560 + 96 = 656
$$

matching the claim.`,
    `**E.** → True

The same third worker, paid overtime at the contractual $21$ instead, earns

$$
40(14) + 4(21) = 560 + 84 = 644
$$

which is $\\$12$ less than the company's actual practice and matches the claim.`,
  ],
  "math-5-17": [
    `**A.** → False

The recovered fixed charge is $x = 15$, not the office's claimed $\\$18$. After the penalty is stripped, May's $51$ of water charge leaves $51 - 18(2) = 15$ once usage is priced at $2$ per cubic metre.`,
    `**B.** → True

The recovered rate is $y = 2$. That is $\\$2.00$ per cubic metre, forced by the $7\\,\\mathrm{m}^{3}$ gap between the cleaned May bill and June, and it contradicts the office's $\\$1.85$ figure.`,
    `**C.** → True

The overview already inverted May's $10\\%$ penalty and left a genuine water charge of $51.00$. Subtracting $10\\%$ of the printed $56.10$ would be the wrong undo, because a $10\\%$ surcharge is a multiplier of $1.10$, not a $5.61$ slice of the inflated total.`,
    `**D.** → False

At the recovered $x = 15$ and $y = 2$, a month of $40\\,\\mathrm{m}^{3}$ costs $15 + 2 \\times 40 = 95$. The bill is $\\$95.00$, which is $10$ above the claimed $\\$85.00$.`,
    `**E.** → True

June's printed $\\$65.00$ is already the genuine charge. A $10\\%$ late penalty on that whole amount is

$$
65.00 \\times 1.10 = 71.50
$$

matching the claim.`,
  ],
  "math-5-18": [
    `**A.** → True

At $10\\,\\mathrm{km}$ the recovered fare formulas give $6 + 10(1) = 16$ on CityCab and $6 + 10(1.5) = 21$ on MetroX. CityCab's $\\$16$ undercuts MetroX's $\\$21$ by $\\$5$.`,
    `**B.** → True

Both recovered bases are $b_{1} = 6$ and $b_{2} = 6$. Peeling the per-kilometre charge off each company's shorter quoted ride lands on the same $\\$6.00$ for both.`,
    `**C.** → False

The two fares are $6 + d$ and $6 + 1.5d$, so MetroX exceeds CityCab by $0.5d$ whenever $d > 0$. Even at a short hop of $d = 3$, MetroX is $10.50$ against CityCab's $9$. Sharing a base while carrying the higher rate, MetroX is never cheaper for any positive distance.`,
    `**D.** → True

CityCab is base plus $1$ per kilometre, so a $30\\,\\mathrm{km}$ ride is $6 + 30(1) = 36$. No extra fee sits on top of that linear rule, and the cost is the $\\$36.00$ the claim names.`,
    `**E.** → False

Equating $6 + d = 6 + 1.5d$ forces $d = 0$. At the claimed $5\\,\\mathrm{km}$ the bills are $6 + 5 = 11$ versus $6 + 5(1.5) = 13.50$, which are not equal. The companies match only at zero distance.`,
  ],
  "math-5-19": [
    `**A.** → True

Vendor A charges the recovered $x_{A} = 9$ per unit of X, while Vendor B charges $x_{B} = 11$. Since $9 < 11$, A is $\\$2$ cheaper for each X unit.`,
    `**B.** → True

Vendor B charges the recovered $y_{B} = 16$ per unit of Y, while Vendor A charges $y_{A} = 18$. Since $16 < 18$, B is $\\$2$ cheaper per Y unit, the reverse of the pattern on X.`,
    `**C.** → True

For $40$ of X and $30$ of Y the two lists give $40(9) + 30(18) = 900$ at A and $40(11) + 30(16) = 920$ at B. A's $\\$900$ beats B's $\\$920$ on the bundle even though B wins on Y alone.`,
    `**D.** → False

The upcoming mix costs $900$ at A and $920$ at B, so switching the entire order to B raises the total by $20$ rather than reducing it. The $\\$20$ is an increase, the opposite of a saving.`,
    `**E.** → True

With no X in the order, only the Y prices matter: $60 \\times 18 = 1080$ at A and $60 \\times 16 = 960$ at B. Vendor B is $\\$120$ cheaper on that Y-only run.`,
  ],
  "math-5-20": [
    `**A.** → True

The recovered market prices are $x = 50$ for Product P and $y = 70$ for Service Q, and both companies sell at those same prices. That is the pair the claim names.`,
    `**B.** → True

The overview split already puts Beta at $B = 14100$ and Alpha at $A = 13100$. Since $14100 > 13100$, Beta's Q1 revenue is larger by the given $\\$1{,}000$.`,
    `**C.** → False

Alpha currently earns $13100$, of which Product P is $150(50) = 7500$. Raising P by $10\\%$ to $55$ with volumes unchanged yields

$$
150(55) + 80(70) = 8250 + 5600 = 13850
$$

an increase of $750$. The relative lift is $\\frac{750}{13100} \\approx 0.057$, about $5.7\\%$ of the whole book, not $10\\%$, because P is only part of Alpha's revenue.`,
    `**D.** → False

Alpha's Product P line is $150 \\times 50 = 7500$. A $10\\%$ lift on that line alone adds $750$, taking Alpha from $13100$ to $13850$. Beta's current Q1 is $14100$, and $14100 - 13850 = 250$, so the projection still sits $\\$250$ short of Beta.`,
    `**E.** → True

Beta's Service Q line is $130 \\times 70 = 9100$. Alpha's entire Product P line is $150 \\times 50 = 7500$. Since $9100 > 7500$, Beta's Q subscriptions alone exceed Alpha's whole P revenue, by $\\$1{,}600$.`,
  ],
};

const forbiddenOverview = [
  "Part 1:",
  "Part 2:",
  "Part 3:",
  "Building the model",
  "The model.",
  "**Answer.**",
  "—",
  "–",
  "${",
];

const forbiddenTactical = [
  "so the statement is True.",
  "so the statement is False.",
  "so the statement is true.",
  "so the statement is false.",
  "The recovered law is",
  "—",
  "–",
  "${",
];

const frozenKeys = [
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

function headerFor(i, key) {
  const letter = "ABCDE"[i];
  return `**${letter}.** → ${key ? "True" : "False"}`;
}

function wordCountOutsideMath(s) {
  const stripped = s.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\$[^$]+\$/g, " ");
  return stripped.trim().split(/\s+/).filter(Boolean).length;
}

let count = 0;
const openings = [];
const issues = [];

for (const fileUrl of files) {
  const path = fileUrl;
  const data = JSON.parse(fs.readFileSync(path, "utf8"));
  const before = data.map((t) => {
    const snap = {};
    for (const k of frozenKeys) {
      if (k in t) snap[k] = JSON.stringify(t[k]);
    }
    return snap;
  });

  for (let ti = 0; ti < data.length; ti++) {
    const task = data[ti];
    if (!overviews[task.id]) throw new Error(`missing overview ${task.id}`);
    if (!tacticals[task.id]) throw new Error(`missing tacticals ${task.id}`);
    task.solution_overview = overviews[task.id];
    task.tactical_explanations = tacticals[task.id];
    count++;
    openings.push([task.id, task.solution_overview.split("\n")[0].slice(0, 90)]);

    for (const needle of forbiddenOverview) {
      if (task.solution_overview.includes(needle)) {
        issues.push(`${task.id} overview contains ${JSON.stringify(needle)}`);
      }
    }
    if (!task.solution_overview.includes("\\frac")) {
      issues.push(`${task.id} overview missing \\frac`);
    }
    if (task.tactical_explanations.length !== 5) {
      issues.push(`${task.id} expected 5 tacticals`);
    }
    for (let i = 0; i < 5; i++) {
      const t = task.tactical_explanations[i];
      const want = headerFor(i, task.answer_key[i]);
      if (!t.startsWith(want)) {
        issues.push(`${task.id} ${"ABCDE"[i]} header want ${want}`);
      }
      for (const needle of forbiddenTactical) {
        if (t.includes(needle)) {
          issues.push(`${task.id} ${"ABCDE"[i]} contains ${JSON.stringify(needle)}`);
        }
      }
      const words = wordCountOutsideMath(t);
      if (words < 12) {
        issues.push(`${task.id} ${"ABCDE"[i]} only ${words} words outside math`);
      }
    }

    for (const k of frozenKeys) {
      if (k in task && JSON.stringify(task[k]) !== before[ti][k]) {
        issues.push(`${task.id} froze ${k} changed`);
      }
    }
  }

  fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}

console.log("wrote", count, "tasks");
for (const [id, open] of openings) console.log(id, open);
