/**
 * Chapter 5  -  Linear equations in two unknowns
 * Structured prose + markdown tables from PDF (UI-native, no screenshots).
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [
  {
    id: "math-5-1",
    case_id: "MATH 5.01",
    title: `Balancing Crate Counts Between Two Depots`,
    context: `The North depot and the South depot are together holding 620 crates this week. A scheduling note observes that if 50 crates were transferred from North to South, the two depots would end up holding exactly the same number of crates.`,
    statements: [
      `The North depot currently holds 360 crates.`,
      `The South depot currently holds 240 crates.`,
      `If 30 crates were moved from South to North instead, North would then hold 390 crates.`,
      `The difference between the two depots today is 120 crates.`,
      `Moving 50 crates from North to South would leave both depots holding 310 crates each.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The North depot currently holds 360 crates.**  (true)

This claim gives North's current count. Solving the sum-and-difference system gives $2x=620+100=720$, so $x=360$; moving 50 crates then leaves North with $310$.

The elimination step gives $x = 360$, and this also satisfies the memo's own equalizing check, so it is consistent both algebraically and in context.

Let $x$ be North's crates and $y$ South's. The total and the equalizing transfer give

$$
x + y = 620, \\qquad x - 50 = y + 50
$$

The second equation rearranges to $x - y = 100$. Adding the pair:

$$
(x + y) + (x - y) = 620 + 100
$$

$$
2x = 720
$$

$$
x = 360
$$

North holds 360 crates, which is the figure in the claim.`,
      `**B) The South depot currently holds 240 crates.**  (false)

The South depot holds 260 crates, not 240. A common slip is assuming the difference (100) can simply be split from the total the same way as North's value, instead of substituting back into $x + y = 620$.

From Part A, $x = 360$. Substitute into the total:

$$
y = 620 - x = 620 - 360 = 260
$$

South is 260, twenty crates above the claimed 240.`,
      `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.**  (true)

This claim changes the direction of the move, so North gains crates. Starting from $360$, North would hold $360+30=390$.

North currently holds $x = 360$. After receiving 30 crates:

$$
x + 30 = 360 + 30 = 390
$$

That matches the claimed 390 crates, so the statement is true.`,
      `**D) The difference between the two depots today is 120 crates.**  (false)

The actual difference today is 360 - 260 = 100 crates. This trap comes from misreading the memo's '50 crates transferred' as itself being the current difference, when in fact a 50-crate transfer is what makes the totals equal, not what separates them today.

With $x = 360$ and $y = 260$:

$$
x - y = 360 - 260 = 100
$$

The claimed difference of 120 does not equal 100, so the statement is false.`,
      `**E) Moving 50 crates from North to South would leave both depots holding 310 crates each.**  (true)

This claim checks the equalizing transfer. The new counts are $360-50=310$ and $260+50=310$, so they match.

Start from the recovered counts $x = 360$ and $y = 260$, then apply the 50-crate transfer:

$$
x - 50 = 360 - 50 = 310
$$

$$
y + 50 = 260 + 50 = 310
$$

Both depots hold 310 crates, matching the claim.`,
    ],
    difficulty_level: "1/5",
    sort_order: 1,
    solution_overview: `The North depot and the South depot are together holding 620 crates this week. A scheduling note observes that if 50 crates were transferred from North to South, the two depots would end up holding exactly the same number of crates.

**Part 1: Building the system.**

Let $x =$ crates at the North depot, y = crates at the South depot. The memo's transfer clue must be translated into an equation: after moving 50 crates from North to South, North would have $x - 50$ and South would have $y + 50$, and these are described as equal.

**1. Translate: combined total.** That observation becomes:

$$
x + y = 620
$$

**2. Turn that story beat into symbols.** The transfer is first written as $x - 50 = y + 50$, which rearranges to a clean difference:

$$
x - y = 100
$$

**Part 2: The model.**

$$
x + y = 620 \\tag{1}
$$

$$
x - y = 100 \\tag{2}
$$

**Part 3: Solve.**

**1.** This is now a standard sum-and-difference pair: $x + y = 620$ and $x - y = 100$.

**2.** Adding the two equations eliminates $y$:

$$
(x + y) + (x - y) = 620 + 100
$$

$$
2x = 720
$$

$$
x = 360
$$

**3.** Then substitute $x = 360$ into the total:

$$
y = 620 - 360 = 260
$$

**4.** Check the equalizing transfer:

$$
x - 50 = 360 - 50 = 310
$$

$$
y + 50 = 260 + 50 = 310
$$

The two depots do end up equal, confirming the translation was correct.

**Answer.** North depot = 360 crates | South depot = 260 crates`,
  },
  {
    id: "math-5-2",
    case_id: "MATH 5.02",
    title: `Reading Unit Prices Off Two Supplier Invoices`,
    context: `Silverline Stationery Co. received two invoices from the same supplier this month. Notebooks and pens are billed at fixed unit prices that stayed the same on both invoices.`,
    tables_markdown: `| Invoice | Notebooks | Pens | Invoice Total |
| --- | --- | --- | --- |
| #101 | 40 | 25 | $185.00 |
| #102 | 15 | 60 | $160.50 |`,
    statements: [
      `A notebook costs $3.50.`,
      `A pen costs $2.10.`,
      `Invoice #101 (40 notebooks and 25 pens) totals $185.00.`,
      `10 notebooks and 10 pens purchased together would cost $53.00.`,
      `Invoice #102 (15 notebooks and 60 pens) totals $172.50.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) A notebook costs $3.50.**  (true)

This claim states the notebook unit price. The solution gives $x=3.50$, and it fits Invoice #101 because $40(3.50)+25(1.80)=185.00$.

The unit price recovered for a notebook is $3.50, and it satisfies both invoices simultaneously, not just one of them.

Let $x$ be the notebook price and $y$ the pen price. Invoice #102 divided by 15 gives $x + 4y = 10.70$, so $x = 10.70 - 4y$. Substitute into Invoice #101:

$$
40(10.70 - 4y) + 25y = 185.00
$$

$$
428.00 - 160y + 25y = 185.00
$$

$$
-135y = -243.00
$$

$$
y = 1.80
$$

Then

$$
x = 10.70 - 4(1.80) = 10.70 - 7.20 = 3.50
$$

A notebook is $3.50, the price the claim stated.`,
      `**B) A pen costs $2.10.**  (false)

A pen actually costs $1.80, not $2.10. Rounding $-135y = -243.00$ carelessly is the most likely source of this kind of error.

From the same substitution as in A,

$$
y = \\frac{243.00}{135} = 1.80
$$

Pens are $1.80$, not the claimed $2.10$.`,
      `**C) Invoice #101 (40 notebooks and 25 pens) totals $185.00.**  (true)

This claim checks the first invoice with the recovered prices. Its cost is $40(3.50)+25(1.80)=140.00+45.00=185.00$.

Plug $x = 3.50$ and $y = 1.80$ into Invoice #101:

$$
40(3.50) + 25(1.80) = 140.00 + 45.00 = 185.00
$$

That matches the printed $185.00 total, so the statement is true.`,
      `**D) 10 notebooks and 10 pens purchased together would cost $53.00.**  (true)

10(3.50) + 10(1.80) = 35.00 + 18.00 = $53.00; note this is NOT the same as averaging either invoice total, since the notebook-to-pen ratio here differs from both invoices.

Using the recovered prices:

$$
10(3.50) + 10(1.80) = 35.00 + 18.00 = 53.00
$$

The mixed order costs $53.00, matching the claim.`,
      `**E) Invoice #102 (15 notebooks and 60 pens) totals $172.50.**  (false)

This claim gives an incorrect total for the second invoice. Using the prices gives $15(3.50)+60(1.80)=52.50+108.00=160.50$.

Invoice #102's printed total is $160.50, not $172.50. A student who mixes up which invoice number goes with which total would produce this kind of error.

Plug $x = 3.50$ and $y = 1.80$ into Invoice #102:

$$
15(3.50) + 60(1.80) = 52.50 + 108.00 = 160.50
$$

The computed total is $160.50, not the claimed $172.50, so the statement is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 2,
    solution_overview: `Silverline Stationery Co. received two invoices from the same supplier this month.

**Part 1: Building the system.**

Let $x =$ price of one notebook, y = price of one pen.

**1. Translate: Invoice #101.** That observation becomes:

$$
40x + 25y = 185.00
$$

**2. Translate: Invoice #102.** That observation becomes:

$$
15x + 60y = 160.50
$$

**Part 2: The model.**

$$
40x + 25y = 185.00 \\tag{1}
$$

$$
15x + 60y = 160.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Invoice #102 by 15 to simplify: $x + 4y = 10.70$, so $x = 10.70 - 4y$.

**2.** Substitute into Invoice #101: $40(10.70 - 4y) + 25y = 185.00$.

**3.** This expands to $428.00 - 160y + 25y = 185.00$, so $-135y = -243.00$, giving

$$
y = \\frac{243.00}{135} = 1.80
$$

**4.** Then

$$
x = 10.70 - 4(1.80) = 10.70 - 7.20 = 3.50
$$

**Answer.** Notebook = $3.50 | Pen = $1.80`,
  },
  {
    id: "math-5-3",
    case_id: "MATH 5.03",
    title: `Pricing Adult and Child Tickets From a Box-Office Summary`,
    context: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.`,
    tables_markdown: `| Session | Adult Tickets | Child Tickets | Revenue |
| --- | --- | --- | --- |
| Saturday Matinee | 90 | 150 | $2,130 |
| Saturday Evening | 160 | 40 | $2,200 |`,
    statements: [
      `An adult ticket costs $12.00.`,
      `A child ticket costs $7.00.`,
      `The Saturday matinee (90 adult, 150 child) generated $2,050.00 in revenue.`,
      `The Saturday evening session (160 adult, 40 child) generated $2,300.00 in revenue.`,
      `50 adult tickets and 50 child tickets together would generate $1,000.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) An adult ticket costs $12.00.**  (true)

This claim gives the adult price. Solving the system produces $a=12$, and the evening revenue checks as $160(12)+40(7)=2200$.

The recovered adult price of $12.00 reproduces both session totals correctly.

The evening equation divided by 40 is $4a + c = 55$, so $c = 55 - 4a$. Substitute into the matinee equation:

$$
90a + 150(55 - 4a) = 2130
$$

$$
90a + 8250 - 600a = 2130
$$

$$
-510a = -6120
$$

$$
a = 12
$$

Adult tickets are $12.00, as claimed.`,
      `**B) A child ticket costs $7.00.**  (true)

This claim gives the child price. After $a=12$, the simplified evening equation gives $c=55-4(12)=7$.

The recovered child price of $7.00 likewise reproduces both totals; swapping which price belongs to 'adult' and which to 'child' is a common mix-up when the two totals are close in size.

From $c = 55 - 4a$ and $a = 12$:

$$
c = 55 - 4(12) = 55 - 48 = 7
$$

The child price is $7.00, matching the claim.`,
      `**C) The Saturday matinee (90 adult, 150 child) generated $2,050.00 in revenue.**  (false)

Using the actual prices, the matinee total is 90(12) + 150(7) = $2,130.00, not $2,050.00. This simply misquotes the figure already printed in the summary table.

Plug $a = 12$ and $c = 7$ into the matinee mix:

$$
90(12) + 150(7) = 1080 + 1050 = 2130
$$

The computed (and printed) total is $2,130.00, not the claimed $2,050.00, so the statement is false.`,
      `**D) The Saturday evening session (160 adult, 40 child) generated $2,300.00 in revenue.**  (false)

The evening total works out to 160(12) + 40(7) = $2,200.00, not $2,300.00. That is a $100 overstatement of the value already given.

Plug $a = 12$ and $c = 7$ into the evening mix:

$$
160(12) + 40(7) = 1920 + 280 = 2200
$$

The computed total is $2,200.00, not the claimed $2,300.00, so the statement is false.`,
      `**E) 50 adult tickets and 50 child tickets together would generate $1,000.00.**  (false)

50(12) + 50(7) = 600 + 350 = $950.00, not $1,000.00. This combination appears in neither session, so it must be computed fresh rather than estimated from the table.

Using the recovered prices:

$$
50(12) + 50(7) = 600 + 350 = 950
$$

Fifty of each ticket type costs $950, not $1,000.`,
    ],
    difficulty_level: "1/5",
    sort_order: 3,
    solution_overview: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.

**Part 1: Building the system.**

Let $a =$ adult ticket price, c = child ticket price.

**1. Translate: Saturday matinee.** That observation becomes:

$$
90a + 150c = 2130
$$

**2. Translate: Saturday evening.** That observation becomes:

$$
160a + 40c = 2200
$$

**Part 2: The model.**

$$
90a + 150c = 2130 \\tag{1}
$$

$$
160a + 40c = 2200 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide the evening equation by 40: $4a + c = 55$, so $c = 55 - 4a$.

**2.** Substitute into the matinee equation: $90a + 150(55 - 4a) = 2130$.

**3.** This expands to $90a + 8250 - 600a = 2130$, so $-510a = -6120$, giving

$$
a = \\frac{6120}{510} = 12
$$

**4.** Then

$$
c = 55 - 4(12) = 55 - 48 = 7
$$

**Answer.** Adult ticket = $12.00 | Child ticket = $7.00`,
  },
  {
    id: "math-5-4",
    case_id: "MATH 5.04",
    title: `Stripping Out a Delivery Fee Before Pricing a Deli's Menu`,
    context: `Corner Deli delivers office lunches for a flat $8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the $8.00 delivery fee  -  total charged $70.00. Receipt B: 3 sandwiches, 9 wraps, plus the $8.00 delivery fee  -  total charged $74.00.`,
    statements: [
      `A sandwich costs $7.00.`,
      `A wrap costs $5.00.`,
      `Receipt A's food subtotal, before the $8.00 delivery fee is added, is $62.00.`,
      `Receipt B's total, including the $8.00 delivery fee, is $74.00.`,
      `A pickup order of 5 sandwiches and 5 wraps would cost $60.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sandwich costs $7.00.**  (true)

This claim gives the sandwich price after the delivery fee is removed. The system gives $x=7$, and Receipt A's food is $6(7)+4(5)=62$.

Once the $8.00 fee is removed from both receipts, the food-only system correctly gives $7.00 per sandwich; using the receipt totals (70 and 74) directly would instead produce the wrong prices.

Peel the $8.00 fee first: Receipt A food is $70.00 - 8.00 = 62.00$, Receipt B food is $74.00 - 8.00 = 66.00$. Double the second equation and subtract:

$$
(6x + 18y) - (6x + 4y) = 132 - 62
$$

$$
14y = 70
$$

$$
y = 5
$$

Then

$$
3x + 9(5) = 66 \\Rightarrow 3x = 21 \\Rightarrow x = 7
$$

Sandwiches are $7.00 on the food-only system.`,
      `**B) A wrap costs $5.00.**  (true)

This claim gives the wrap price. Eliminating sandwiches gives $14y=70$, so $y=5$.

The wrap price of $5.00 likewise depends on subtracting the fee first. This is the main interpretive step in the task, not the algebra itself.

From the elimination in A:

$$
14y = 70 \\Rightarrow y = \\frac{70}{14} = 5
$$

The wrap price is $5.00, matching the claim.`,
      `**C) Receipt A's food subtotal, before the $8.00 delivery fee is added, is $62.00.**  (true)

This claim separates the food from the delivery charge. Receipt A's subtotal is $70.00-8.00=62.00$.

The printed total includes the fee, so subtract it:

$$
70.00 - 8.00 = 62.00
$$

Receipt A's food is $62 once the fee is peeled off.`,
      `**D) Receipt B's total, including the $8.00 delivery fee, is $74.00.**  (true)

This claim refers to the printed, fee-included receipt. Its food subtotal is $66.00$, and $66.00+8.00=74.00$.

Receipt B's printed total, delivery fee included, is $74.00. Note this includes the fee, unlike the $66.00 figure used inside the equation itself.

Check by rebuilding from the recovered food prices:

$$
3(7) + 9(5) = 21 + 45 = 66
$$

$$
66 + 8 = 74
$$

The fee-included total is $74.00, matching the claim.`,
      `**E) A pickup order of 5 sandwiches and 5 wraps would cost $60.00.**  (true)

This claim is about food without delivery. The cost is $5(7)+5(5)=35+25=60$.

Pickup means no delivery fee, so use only the unit prices:

$$
5(7) + 5(5) = 35 + 25 = 60
$$

The pickup order costs $60.00, matching the claim.`,
    ],
    difficulty_level: "1/5",
    sort_order: 4,
    solution_overview: `Corner Deli delivers office lunches for a flat $8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the $8.00 delivery fee, total charged $70.00.

**Part 1: Building the system.**

Let $x =$ price of one sandwich, y = price of one wrap. Before writing any equation, the $8.00 delivery fee must be subtracted from each receipt total, since it is not part of either unknown price.

**1. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $6x + 4y = 70.00 - 8.00 = 62.00$. The clean system equation is:

$$
6x + 4y = 62.00
$$

**2. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $3x + 9y = 74.00 - 8.00 = 66.00$. The clean system equation is:

$$
3x + 9y = 66.00
$$

**Part 2: The model.**

$$
6x + 4y = 62.00 \\tag{1}
$$

$$
3x + 9y = 66.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the second equation by 2: $6x + 18y = 132$.

**2.** Subtract the first equation:

$$
(6x + 18y) - (6x + 4y) = 132 - 62
$$

$$
14y = 70
$$

$$
y = 5
$$

**3.** Substitute back:

$$
3x + 9(5) = 66
$$

$$
3x = 21
$$

$$
x = 7
$$

**Answer.** Sandwich = $7.00 | Wrap = $5.00`,
  },
  {
    id: "math-5-5",
    case_id: "MATH 5.05",
    title: `Splitting Savings Between Two Interest-Bearing Accounts`,
    context: `An investor split a total of $10,000 between two accounts at the start of the year: Account A pays 4% simple annual interest, and Account B pays 7% simple annual interest. No deposits or withdrawals were made all year, and together the two accounts earned $520.00 in interest.`,
    statements: [
      `$6,500 was placed in Account A.`,
      `$4,500 was placed in Account B.`,
      `Account A earned $260.00 in interest over the year.`,
      `Account B earned $210.00 in interest over the year.`,
      `Had the entire $10,000 been placed in Account B alone, total interest for the year would have been $700.00.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) $6,500 was placed in Account A.**  (false)

This claim gives an amount for the 4% account. The solved amount is $x=6000$, not $6500$.

Account A actually holds $6,000, not $6,500. Because the two rates (4% and 7%) are close together, it is easy to mis-split the $10,000 roughly in half instead of solving the weighted equation properly.

The split and interest equations are $x + y = 10000$ and $0.04x + 0.07y = 520$. Substitute $x = 10000 - y$:

$$
0.04(10000 - y) + 0.07y = 520
$$

$$
400 - 0.04y + 0.07y = 520
$$

$$
0.03y = 120
$$

$$
y = 4000
$$

Then

$$
x = 10000 - 4000 = 6000
$$

Account A holds $6,000, five hundred short of the claimed split.`,
      `**B) $4,500 was placed in Account B.**  (false)

This claim gives an amount for the 7% account. The system gives $y=4000$, not $4500$; moreover, $6500+4500$ would exceed the $10,000 total.

Account B holds $4,000, not $4,500. The same rough 50/50 guess produces this error too, and the two wrong figures would not even add to $10,000, a useful way to catch the mistake.

From the substitution in A:

$$
y = \\frac{120}{0.03} = 4000
$$

The claimed $4,500$ does not equal $4,000$. Also $6500 + 4500 = 11000 \\ne 10000$, so the statement is false.`,
      `**C) Account A earned $260.00 in interest over the year.**  (false)

This claim calculates interest for Account A incorrectly. At 4%, its $6,000 balance earns $240 (because 0.04 × 6000 = 240).

Account A's interest is 0.04 \\times 6,000 = $240.00, not $260.00. This kind of error often comes from applying a slightly wrong rate or a small arithmetic slip.

Simple interest on Account A:

$$
0.04 \\times 6000 = 240
$$

The earned interest is $240.00, not the claimed $260.00, so the statement is false.`,
      `**D) Account B earned $210.00 in interest over the year.**  (false)

Account B's interest is 0.07 \\times 4,000 = $280.00, not $210.00. Note $240.00 + $280.00 = $520.00 matches the given total, confirming these (not statements C/D) are correct.

Simple interest on Account B:

$$
0.07 \\times 4000 = 280
$$

Check against the given total interest:

$$
240 + 280 = 520
$$

The earned interest is $280.00, not the claimed $210.00, so the statement is false.`,
      `**E) Had the entire $10,000 been placed in Account B alone, total interest for the year would have been $700.00.**  (true)

Placing the full $10,000 at the 7% rate gives 0.07 \\times 10,000 = $700.00, which is indeed higher than the $520.00 actually earned from the mixed allocation.

Put the whole principal at Account B's rate:

$$
0.07 \\times 10000 = 700
$$

The all-B interest is $700.00, matching the claim.`,
    ],
    difficulty_level: "1/5",
    sort_order: 5,
    solution_overview: `An investor split a total of $10,000 between two accounts at the start of the year: Account A pays 4% simple annual interest, and Account B pays 7% simple annual interest. No deposits or withdrawals were made all year, and together the two accounts earned $520.00 in interest.

**Part 1: Building the system.**

Let $x =$ amount placed in Account A, y = amount placed in Account B.

**1. Translate: total split.** That observation becomes:

$$
x + y = 10000
$$

**2. Translate: total interest.** That observation becomes:

$$
0.04x + 0.07y = 520
$$

**Part 2: The model.**

$$
x + y = 10000 \\tag{1}
$$

$$
0.04x + 0.07y = 520 \\tag{2}
$$

**Part 3: Solve.**

**1.** Solve the first equation for x: $x = 10000 - y$.

**2.** Substitute: $0.04(10000 - y) + 0.07y = 520$.

**3.** This expands to $400 - 0.04y + 0.07y = 520$, so

$$
0.03y = 120
$$

$$
y = \\frac{120}{0.03} = 4000
$$

**4.** Then

$$
x = 10000 - 4000 = 6000
$$

**Answer.** Account A = $6,000 | Account B = $4,000`,
  },
  {
    id: "math-5-6",
    case_id: "MATH 5.06",
    title: `Pricing Two Chair Grades From a Price Gap and a Shipment Value`,
    context: `Premium-grade office chairs are priced exactly $45 more per unit than Standard-grade chairs throughout the current catalogue. A recent shipment of 18 Standard chairs and 12 Premium chairs was valued at $9,660.00 in total.`,
    statements: [
      `A Standard chair is priced at $304.00.`,
      `A Premium chair is priced at $354.00.`,
      `The 12 Premium chairs in the shipment are worth $4,188.00 in total.`,
      `The price gap between one Premium chair and one Standard chair is $45.00.`,
      `A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than $3,000.00.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) A Standard chair is priced at $304.00.**  (true)

This claim states the Standard-chair price. Substitution into the shipment equation gives $x=304$.

The Standard chair price of $304.00 is what makes the shipment value work out exactly, once the $45 price gap is built into the second equation.

Premium is $y = x + 45$. Substitute into the shipment:

$$
18x + 12(x + 45) = 9660
$$

$$
18x + 12x + 540 = 9660
$$

$$
30x = 9120
$$

$$
x = 304
$$

Standard chairs list at $304.00.`,
      `**B) A Premium chair is priced at $354.00.**  (false)

A Premium chair costs $349.00, not $354.00. A tempting but incorrect shortcut is rounding $304 up to $310 first and then adding $45.

From $y = x + 45$ and $x = 304$:

$$
y = 304 + 45 = 349
$$

The Premium price is $349.00, not the claimed $354.00, so the statement is false.`,
      `**C) The 12 Premium chairs in the shipment are worth $4,188.00 in total.**  (true)

This claim uses the Premium-chair value. Their part of the shipment is $12(349)=4188$.

12 \\times 349.00 = $4,188.00, part of the shipment total of $9,660.00 (the remaining $5,472.00 comes from the 18 Standard chairs).

Using $y = 349$:

$$
12(349) = 4188
$$

Check the Standard share:

$$
18(304) = 5472
$$

$$
4188 + 5472 = 9660
$$

The Premium share is $4,188.00, matching the claim.`,
      `**D) The price gap between one Premium chair and one Standard chair is $45.00.**  (true)

This is simply the relationship stated in the report and used to build the second equation: 349 - 304 = $45.00.

From the recovered prices:

$$
y - x = 349 - 304 = 45
$$

The gap is $45.00, matching the claim.`,
      `**E) A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than $3,000.00.**  (true)

5(304) + 5(349) = 1,520 + 1,745 = $3,265.00, which is indeed more than $3,000.00. This smaller order uses a different ratio (5-and-5) than the shipment (18-and-12), so it must be recalculated rather than scaled down.

Using the recovered prices:

$$
5(304) + 5(349) = 1520 + 1745 = 3265
$$

Since $3265 > 3000$, the statement is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 6,
    solution_overview: `Premium-grade office chairs are priced exactly $45 more per unit than Standard-grade chairs throughout the current catalogue. A recent shipment of 18 Standard chairs and 12 Premium chairs was valued at $9,660.00 in total.

**Part 1: Building the system.**

Let $x =$ price of a Standard chair, y = price of a Premium chair.

**1. Translate: Premium priced $45 above Standard.** That observation becomes:

$$
y = x + 45
$$

**2. Translate: shipment value.** That observation becomes:

$$
18x + 12y = 9660
$$

**Part 2: The model.**

$$
y = x + 45 \\tag{1}
$$

$$
18x + 12y = 9660 \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute directly: $18x + 12(x + 45) = 9660$.

**2.** This expands to $18x + 12x + 540 = 9660$, so

$$
30x = 9120
$$

$$
x = \\frac{9120}{30} = 304
$$

**3.** Then

$$
y = 304 + 45 = 349
$$

**Answer.** Standard chair = $304.00 | Premium chair = $349.00`,
  },
  {
    id: "math-5-7",
    case_id: "MATH 5.07",
    title: `Extracting a Hidden Rate Structure From a Mobile Ad`,
    context: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid $29.00 in total. A heavy user who went 120 minutes over paid $53.00  -  the ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.`,
    statements: [
      `ByteMobile's fixed monthly fee is $17.00.`,
      `The extra-minute rate advertised is $0.30 per minute.`,
      `A customer using 200 extra minutes in a month would pay $80.00.`,
      `A customer using 0 extra minutes would pay $0.00 that month.`,
      `The advertised rate ($0.30 per minute) is more than double a rival plan's rate of $0.20 per minute.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) ByteMobile's fixed monthly fee is $17.00.**  (true)

This claim gives the part of every bill that does not depend on minutes. With $r=0.30$, the 40-minute bill leaves $29.00-40(0.30)=17.00$.

The $17.00 fixed fee is what remains once the per-minute charge is subtracted out of either quoted bill.

The two bills are $f + 40r = 29.00$ and $f + 120r = 53.00$. Subtract:

$$
(f + 120r) - (f + 40r) = 53.00 - 29.00
$$

$$
80r = 24.00
$$

$$
r = 0.30
$$

Then

$$
f + 40(0.30) = 29.00
$$

$$
f + 12.00 = 29.00
$$

$$
f = 17.00
$$

The fixed fee is $17.00, matching the claim.`,
      `**B) The extra-minute rate advertised is $0.30 per minute.**  (true)

The $0.30 rate is recovered from the DIFFERENCE between the two bills (a $24.00 gap over 80 extra minutes), not from either bill in isolation.

The extra minutes between the two quoted bills are $120 - 40 = 80$, and the extra charge is $53.00 - 29.00 = 24.00$:

$$
r = \\frac{24.00}{80} = 0.30
$$

The extra-minute rate is $0.30, matching the claim.`,
      `**C) A customer using 200 extra minutes in a month would pay $80.00.**  (false)

This claim evaluates a 200-minute bill. The charge is $17.00+200(0.30)=17.00+60.00=77.00$.

The recovered model is $f + r \\cdot m = 17.00 + 0.30m$. At $m = 200$:

$$
17.00 + 200(0.30) = 17.00 + 60.00 = 77.00
$$

The bill is $77.00, not the claimed $80.00, so the statement is false.`,
      `**D) A customer using 0 extra minutes would pay $0.00 that month.**  (false)

This claim ignores the plan's base cost. At zero extra minutes, the bill is $17.00+0(0.30)=17.00$.

Even with zero extra minutes, the fixed fee of $17.00 still applies, so the bill would be $17.00, not $0.00. The ad describes extra-minute charges on top of a fee, not instead of one.

At $m = 0$:

$$
17.00 + 0(0.30) = 17.00
$$

The bill is $17.00, not $0.00, so the statement is false.`,
      `**E) The advertised rate ($0.30 per minute) is more than double a rival plan's rate of $0.20 per minute.**  (false)

Double the rival's $0.20 rate would be $0.40, and ByteMobile's $0.30 rate is lower than that, not more than double it.

Double the rival rate:

$$
2 \\times 0.20 = 0.40
$$

ByteMobile's recovered rate is $0.30$. Since $0.30 < 0.40$, it is not more than double $0.20$, so the statement is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 7,
    solution_overview: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid $29.00 in total. A heavy user who went 120 minutes over paid $53.00. The ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.

**Part 1: Building the system.**

Let $f =$ fixed monthly fee, r = rate charged per extra minute. The advertisement never states the fixed fee or the rate directly; both must be recovered from the two example bills it quotes.

**1. Read the bill with 40 extra units.** At rate $r$, that bill is:

$$
f + 40r = 29.00
$$

**2. Read the bill with 120 extra units.** At rate $r$, that bill is:

$$
f + 120r = 53.00
$$

**Part 2: The model.**

$$
f + 40r = 29.00 \\tag{1}
$$

$$
f + 120r = 53.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract the first equation from the second:

$$
(f + 120r) - (f + 40r) = 53.00 - 29.00
$$

$$
80r = 24.00
$$

$$
r = 0.30
$$

**2.** Substitute back:

$$
f + 40(0.30) = 29.00
$$

$$
f + 12.00 = 29.00
$$

$$
f = 17.00
$$

**Answer.** Fixed fee = $17.00 | Extra-minute rate = $0.30/min`,
  },
  {
    id: "math-5-8",
    case_id: "MATH 5.08",
    title: `Finding Weekly Output From a Production Report`,
    context: `The table below lists standard specifications for two oven models. This week, the division completed 130 ovens in total and logged 795 assembly hours in total across both models. (Not every figure below is needed to find how many of each model were built.)`,
    tables_markdown: `| Product | Assembly Hrs/Unit | Material Cost/Unit |
| --- | --- | --- |
| Standard Oven | 4 hrs | $120 |
| Deluxe Oven | 9 hrs | $180 |`,
    statements: [
      `The division built 75 Standard ovens this week.`,
      `The division built 45 Deluxe ovens this week.`,
      `Standard ovens accounted for 300 assembly hours this week.`,
      `Deluxe ovens accounted for 500 assembly hours this week.`,
      `The total material cost of all Standard ovens built this week is $9,000.00.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The division built 75 Standard ovens this week.**  (true)

This claim gives the Standard-oven count. The system gives $s=130-55=75$.

The unit and hours totals together pin down 75 Standard ovens; the material-cost column plays no role in finding this figure.

Let $s$ be Standard ovens and $d$ Deluxe ovens. From $s + d = 130$ we have $s = 130 - d$. Substitute into hours:

$$
4(130 - d) + 9d = 795
$$

$$
520 - 4d + 9d = 795
$$

$$
5d = 275
$$

$$
d = 55
$$

Then

$$
s = 130 - 55 = 75
$$

The Standard count is 75, matching the claim.`,
      `**B) The division built 45 Deluxe ovens this week.**  (false)

This claim understates the Deluxe count. The hours equation leads to $5d=275$, so $d=55$.

The division built 55 Deluxe ovens, not 45. A common error is subtracting the hours figures instead of properly eliminating a variable, which tends to understate d.

From the substitution in A:

$$
d = \\frac{275}{5} = 55
$$

Deluxe output is 55 ovens, ten more than the claim.`,
      `**C) Standard ovens accounted for 300 assembly hours this week.**  (true)

4 hours \\times 75 Standard ovens = 300 hours, part of the 795-hour weekly total (the remaining 495 hours come from the Deluxe ovens).

Each Standard oven takes 4 hours:

$$
4 \\times 75 = 300
$$

Standard ovens used 300 hours, matching the claim.`,
      `**D) Deluxe ovens accounted for 500 assembly hours this week.**  (false)

Deluxe ovens actually used 9 \\times 55 = 495 hours, not 500. Note 300 + 495 = 795 matches the report's total exactly, confirming 495 is correct.

Each Deluxe oven takes 9 hours:

$$
9 \\times 55 = 495
$$

Check against the weekly total:

$$
300 + 495 = 795
$$

Deluxe ovens used 495 hours, not the claimed 500, so the statement is false.`,
      `**E) The total material cost of all Standard ovens built this week is $9,000.00.**  (true)

This claim now uses the material-cost figure for Standard ovens. At $120 each, the cost is $9,000 (because 75 × 120 = 9000).

This is where the material-cost column finally matters: 75 Standard ovens \\times $120 each = $9,000.00. This statement could not have been answered from the hours data alone.

Using the recovered count and the table's $120 unit cost:

$$
75 \\times 120 = 9000
$$

The Standard material cost is $9,000.00, matching the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 8,
    solution_overview: `The table below lists standard specifications for two oven models. This week, the division completed 130 ovens in total and logged 795 assembly hours in total across both models.

**Part 1: Building the system.**

Let $s =$ number of Standard ovens built, d = number of Deluxe ovens built. The material-cost column is not needed to find s and d; it becomes relevant only for statement E below.

**1. Translate: total ovens built.** That observation becomes:

$$
s + d = 130
$$

**2. Translate: total assembly hours.** That observation becomes:

$$
4s + 9d = 795
$$

**Part 2: The model.**

$$
s + d = 130 \\tag{1}
$$

$$
4s + 9d = 795 \\tag{2}
$$

**Part 3: Solve.**

**1.** From the total-ovens equation, $s = 130 - d$.

**2.** Substitute into the hours equation: $4(130 - d) + 9d = 795$.

**3.** This expands to $520 - 4d + 9d = 795$, giving

$$
5d = 275
$$

$$
d = 55
$$

**4.** Then

$$
s = 130 - 55 = 75
$$

**Answer.** Standard ovens = 75 | Deluxe ovens = 55`,
  },
  {
    id: "math-5-9",
    case_id: "MATH 5.09",
    title: `Recovering Furniture Prices From Two Branches' Net Sales`,
    context: `Two branches sold sofas and armchairs this month at company-wide fixed prices. "Net sales" (gross sales minus returns) is what actually reflects items sold at their listed prices.`,
    tables_markdown: `| Branch | Sofas Sold | Armchairs Sold | Gross Sales | Returns |
| --- | --- | --- | --- | --- |
| Riverside | 14 | 22 | $9,760 | $460 |
| Hillcrest | 20 | 10 | $9,300 | $300 |`,
    statements: [
      `A sofa sells for $350.00.`,
      `An armchair sells for $200.00.`,
      `Riverside's net sales (after its $460 in returns) were $9,300.00.`,
      `Hillcrest's gross sales (before its $300 in returns) were $9,300.00.`,
      `Had Riverside recorded zero returns that month, its gross and net sales would both have equalled $9,760.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sofa sells for $350.00.**  (true)

This claim gives the sofa price. The net-sales system solves to $x=350$.

The $350.00 sofa price only emerges correctly once each branch's returns have been subtracted from gross sales; using the gross figures directly would give a different (incorrect) system.

Riverside net sales: $9760 - 460 = 9300$. Hillcrest net sales: $9300 - 300 = 9000$. Divide Hillcrest by 10: $2x + y = 900$, so $y = 900 - 2x$. Substitute into Riverside:

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
x = 350
$$

Sofas sell at $350.00.`,
      `**B) An armchair sells for $200.00.**  (true)

This claim gives the armchair price. From $2x+y=900$, $y=900-2(350)=200$.

The armchair price of $200.00 depends on the same return-deduction step as the sofa price.

From $y = 900 - 2x$ and $x = 350$:

$$
y = 900 - 2(350) = 900 - 700 = 200
$$

Armchairs are $200.`,
      `**C) Riverside's net sales (after its $460 in returns) were $9,300.00.**  (true)

This claim checks Riverside's return adjustment. Its net sales are $9760-460=9300$.

9,760 - 460 = $9,300.00, exactly the net-sales figure used to build Riverside's equation.

Gross minus returns:

$$
9760 - 460 = 9300
$$

Riverside's net sales are $9,300.00, matching the claim.`,
      `**D) Hillcrest's gross sales (before its $300 in returns) were $9,300.00.**  (true)

This claim names Hillcrest's gross-sales figure. The $9300$ gross total becomes $9000$ net after subtracting $300$ in returns.

Hillcrest's gross sales figure, as printed, is $9,300.00. Note this coincides numerically with Riverside's net sales, but the two are different figures from different branches.

The table lists Hillcrest gross sales as $9300$. After returns:

$$
9300 - 300 = 9000
$$

The printed gross figure is $9,300.00, matching the claim.`,
      `**E) Had Riverside recorded zero returns that month, its gross and net sales would both have equalled $9,760.00.**  (true)

This claim removes Riverside's returns entirely. With no returns, net sales equal gross sales, which is $9760$.

With no returns, net sales would simply equal gross sales, and Riverside's gross figure is $9,760.00.

If returns are $0$:

$$
\\text{net} = \\text{gross} - 0 = 9760
$$

Both figures would be $9,760.00, matching the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 9,
    solution_overview: `Two branches sold sofas and armchairs this month at company-wide fixed prices. "Net sales" (gross sales minus returns) is what actually reflects items sold at their listed prices.

**Part 1: Building the system.**

Let $x =$ price of one sofa, y = price of one armchair. The gross figures cannot be used directly; each branch's returns must be subtracted first to isolate the value of items actually sold at listed prices.

**1. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $14x + 22y = 9760 - 460 = 9300$. The clean system equation is:

$$
14x + 22y = 9300
$$

**2. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $20x + 10y = 9300 - 300 = 9000$. The clean system equation is:

$$
20x + 10y = 9000
$$

**Part 2: The model.**

$$
14x + 22y = 9300 \\tag{1}
$$

$$
20x + 10y = 9000 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide the Hillcrest equation by 10: $2x + y = 900$, so $y = 900 - 2x$.

**2.** Substitute into Riverside's equation: $14x + 22(900 - 2x) = 9300$.

**3.** This expands to $14x + 19800 - 44x = 9300$, so $-30x = -10500$, giving

$$
x = \\frac{10500}{30} = 350
$$

**4.** Then

$$
y = 900 - 2(350) = 900 - 700 = 200
$$

**Answer.** Sofa = $350.00 | Armchair = $200.00`,
  },
  {
    id: "math-5-10",
    case_id: "MATH 5.10",
    title: `Comparing a Print Shop's Own Rates Against a Rival's Flat Quote`,
    context: `PrintFast Express charges a fixed setup fee on every order, plus a constant charge per page. Order #58 (120 pages) billed $33.00, and Order #96 (300 pages) billed $69.00. A rival, QuickCopy Center, instead charges a flat $60.00 for any order up to 350 pages, regardless of length.`,
    statements: [
      `PrintFast's setup fee is $12.00.`,
      `PrintFast's per-page rate is $0.25.`,
      `A 250-page order at PrintFast would cost $60.00.`,
      `For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat $60.00 fee.`,
      `Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) PrintFast's setup fee is $12.00.**  (false)

This claim gives the fixed portion of a PrintFast bill. Once the rate is $0.20$, the 120-page order leaves $33.00-24.00=9.00$ for the fee.

PrintFast's setup fee is $9.00, not $12.00. This kind of error can arise from subtracting the two ORDER totals (69 - 33 = 36) and mistakenly treating part of that gap as the fee instead of as 180 pages' worth of per-page charges.

The bills are $f + 120r = 33.00$ and $f + 300r = 69.00$. Subtract:

$$
(f + 300r) - (f + 120r) = 69.00 - 33.00
$$

$$
180r = 36.00
$$

$$
r = 0.20
$$

Then

$$
f + 120(0.20) = 33.00
$$

$$
f + 24.00 = 33.00
$$

$$
f = 9.00
$$

PrintFast's fee is $9, three dollars below the claimed $12.`,
      `**B) PrintFast's per-page rate is $0.25.**  (false)

The per-page rate is $0.20, not $0.25. The rate comes from dividing the $36.00 gap between the two orders by the 180-page gap between them, so using the wrong page difference is a likely source of error.

The extra pages are $300 - 120 = 180$ and the extra charge is $69.00 - 33.00 = 36.00$:

$$
r = \\frac{36.00}{180} = 0.20
$$

The rate is $0.20 per page, not the claimed $0.25, so the statement is false.`,
      `**C) A 250-page order at PrintFast would cost $60.00.**  (false)

A 250-page order costs 9.00 + 250(0.20) = $59.00, not $60.00. Close enough to QuickCopy's flat fee to invite a careless rounding error, but not actually equal to it.

PrintFast's model is $f + r \\cdot p = 9.00 + 0.20p$. At $p = 250$:

$$
9.00 + 250(0.20) = 9.00 + 50.00 = 59.00
$$

The order costs $59.00, not the claimed $60.00, so the statement is false.`,
      `**D) For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat $60.00 fee.**  (false)

At 350 pages, PrintFast costs 9.00 + 350(0.20) = $79.00, which is MORE expensive than QuickCopy's flat $60.00, not cheaper. For long orders, PrintFast's per-page charge eventually overtakes a flat competitor's fee.

At $p = 350$:

$$
9.00 + 350(0.20) = 9.00 + 70.00 = 79.00
$$

Compare with QuickCopy's flat $60.00$:

$$
79.00 > 60.00
$$

PrintFast is more expensive, not cheaper, so the statement is false.`,
      `**E) Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.**  (true)

This claim concerns whether the two bills determine the pricing rule uniquely. Their differing page counts make the rate solvable from the difference, and then either bill fixes the fee.

Because the two invoices describe genuinely different situations (different page counts, different totals), they behave like two non-parallel lines that cross at exactly one point, so exactly one fee-and-rate pair satisfies both at once.

The coefficient matrix of

$$
f + 120r = 33.00, \\qquad f + 300r = 69.00
$$

has determinant $300 - 120 = 180 \\ne 0$, so there is a unique solution $(f, r) = (9.00, 0.20)$. The statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 10,
    solution_overview: `PrintFast Express charges a fixed setup fee on every order, plus a constant charge per page. Order #58 (120 pages) billed $33.00, and Order #96 (300 pages) billed $69.00.

**Part 1: Building the system.**

Let $f =$ PrintFast's setup fee, r = PrintFast's rate per page.

**1. Translate: Order #58.** That observation becomes:

$$
f + 120r = 33.00
$$

**2. Translate: Order #96.** That observation becomes:

$$
f + 300r = 69.00
$$

**Part 2: The model.**

$$
f + 120r = 33.00 \\tag{1}
$$

$$
f + 300r = 69.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Order #58's equation from Order #96's:

$$
(f + 300r) - (f + 120r) = 69.00 - 33.00
$$

$$
180r = 36.00
$$

$$
r = 0.20
$$

**2.** Substitute back:

$$
f + 120(0.20) = 33.00
$$

$$
f + 24.00 = 33.00
$$

$$
f = 9.00
$$

**3.** For a 250-page order:

$$
9.00 + 250(0.20) = 9.00 + 50.00 = 59.00
$$

**4.** For a 350-page order:

$$
9.00 + 350(0.20) = 9.00 + 70.00 = 79.00
$$

**Answer.** PrintFast setup fee = $9.00 | Rate = $0.20/page`,
  },
  {
    id: "math-5-11",
    case_id: "MATH 5.11",
    title: `Del Sol Food Truck`,
    context: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid $32.00 in total. Ben ordered 2 tacos and 5 burritos  -  and when he compared receipts with Ana afterward, he realized he had paid exactly $5.00 more than she did, even though neither of them knew the other's order size in advance.`,
    statements: [
      `Ben paid more for his 5 burritos alone than Ana paid for her entire order.`,
      `A burrito costs $2.50 more than a taco.`,
      `Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than $28.00.`,
      `Ben's total order price exceeds $40.00.`,
      `Buying 6 tacos and 6 burritos together would cost $57.00.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) Ben paid more for his 5 burritos alone than Ana paid for her entire order.**  (false)

Ben's 5 burritos alone cost 5 \\times 6.00 = $30.00, less than Ana's full $32.00 order, not more. It's tempting to assume the person who 'paid more overall' also wins every partial comparison, but that isn't guaranteed here.

Ana's order is $4x + 3y = 32.00$. Ben paid $5.00 more, so $2x + 5y = 32.00 + 5.00 = 37.00$. Double Ben's equation and subtract Ana's:

$$
(4x + 10y) - (4x + 3y) = 74.00 - 32.00
$$

$$
7y = 42.00
$$

$$
y = 6.00
$$

Then Ben's 5 burritos alone cost

$$
5(6.00) = 30.00
$$

Compare with Ana's full order: $30.00 < 32.00$, so the statement is false.`,
      `**B) A burrito costs $2.50 more than a taco.**  (true)

This claim compares the two recovered item prices. The difference is $6.00-3.50=2.50$.

From $4x + 3(6.00) = 32.00$:

$$
4x + 18.00 = 32.00
$$

$$
4x = 14.00
$$

$$
x = 3.50
$$

The price gap is

$$
y - x = 6.00 - 3.50 = 2.50
$$

A burrito costs $2.50 more than a taco, matching the claim.`,
      `**C) Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than $28.00.**  (true)

This claim changes Ana's order by removing one burrito. The new total would be $4(3.50)+2(6.00)=14.00+12.00=26.00$, below $28.00$.

Using $x = 3.50$ and $y = 6.00$:

$$
4(3.50) + 2(6.00) = 14.00 + 12.00 = 26.00
$$

Since $26.00 < 28.00$, the statement is true.`,
      `**D) Ben's total order price exceeds $40.00.**  (false)

Ben's order was built to total exactly $37.00, which does not exceed $40.00. Forgetting the $5.00 gap was already used to build the model, and adding it again on top of $37, is a common slip.

Ben's total is Ana's $32.00 plus the $5.00 gap:

$$
32.00 + 5.00 = 37.00
$$

Check with the recovered prices:

$$
2(3.50) + 5(6.00) = 7.00 + 30.00 = 37.00
$$

Since $37.00$ does not exceed $40.00$, the statement is false.`,
      `**E) Buying 6 tacos and 6 burritos together would cost $57.00.**  (true)

This claim makes an equal-quantity order. Its cost is $6(3.50)+6(6.00)=21.00+36.00=57.00$.

Using $x = 3.50$ and $y = 6.00$:

$$
6(3.50) + 6(6.00) = 21.00 + 36.00 = 57.00
$$

The mixed order costs $57.00, matching the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid $32.00 in total.

**Part 1: Building the system.**

Nothing here states the taco or burrito price directly. What is known is Ana's order and total, plus a comparison between Ben's total and Ana's. That comparison must first be turned into an actual dollar figure for Ben's order before a system of two equations can be written.

**1. Record this independent observation.** In symbols:

$$
4x + 3y = 32.00
$$

**2. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $2x + 5y = 32.00 + 5.00 = 37.00$. The clean system equation is:

$$
2x + 5y = 37.00
$$

**Part 2: The model.**

$$
4x + 3y = 32.00 \\tag{1}
$$

$$
2x + 5y = 37.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the second equation by 2: $4x + 10y = 74.00$.

**2.** Subtract the first ($4x + 3y = 32.00$):

$$
(4x + 10y) - (4x + 3y) = 74.00 - 32.00
$$

$$
7y = 42.00
$$

$$
y = 6.00
$$

**3.** Substituting back:

$$
4x + 3(6.00) = 32.00
$$

$$
4x + 18.00 = 32.00
$$

$$
x = 3.50
$$

**Answer.** Taco = $3.50 | Burrito = $6.00`,
  },
  {
    id: "math-5-12",
    case_id: "MATH 5.12",
    title: `Northgate Books Monthly Sales Report`,
    context: `Memo  -  Pricing Desk: "Hardcover editions are priced exactly $5 above the paperback price this quarter, across the board."`,
    tables_markdown: `| Metric | Value |
| --- | --- |
| Paperback units sold | 400 |
| Hardcover units sold | 220 |
| Combined revenue (paperback + hardcover) | $8,540 |
| Full-time staff on payroll | 12 |
| Loyalty-member share of purchases | 45% |`,
    statements: [
      `A paperback price of $12 is consistent with the pricing desk's $5 gap rule.`,
      `Hardcover editions are priced above $18.`,
      `Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been $1,200 higher.`,
      `A customer buying 3 hardcovers and 2 paperbacks would pay less than $75.`,
      `The reported $8,540 total could also have come from selling 310 hardcovers alone.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) A paperback price of $12 is consistent with the pricing desk's $5 gap rule.**  (true)

This claim checks the paperback price against the pricing rule. If $x=12$, then $y=12+5=17$, so the gap is exactly $5$.

The pricing desk requires $y = x + 5$, and combined revenue is $400x + 220y = 8540$. Substitute:

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
x = 12
$$

Then $y = 12 + 5 = 17$, so the $5 gap holds. A paperback price of $12 is consistent with the rule.`,
      `**B) Hardcover editions are priced above $18.**  (false)

This claim describes the hardcover price incorrectly. The solved hardcover price is exactly $17.00$, not above $18$.

The hardcover price settles at exactly $17.00, not above $18. Assuming a 'clean' $20 hardcover price without solving the system is a typical shortcut.

From $y = x + 5$ and $x = 12$:

$$
y = 12 + 5 = 17
$$

Since $17$ is not above $18$, the statement is false.`,
      `**C) Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been $1,200 higher.**  (true)

This claim adds 100 paperbacks while leaving hardcovers unchanged. The extra revenue is $100(12)=1200$.

100 extra paperbacks at $12 each adds exactly $1,200, using only the paperback price and the change in quantity.

The extra paperbacks are $500 - 400 = 100$, each at $x = 12$:

$$
100 \\times 12 = 1200
$$

Revenue would be $1,200 higher, matching the claim.`,
      `**D) A customer buying 3 hardcovers and 2 paperbacks would pay less than $75.**  (false)

This claim totals a mixed customer purchase. The cost is $3(17)+2(12)=51+24=75$, exactly equal to $75$.

Using $x = 12$ and $y = 17$:

$$
3(17) + 2(12) = 51 + 24 = 75
$$

The purchase costs exactly $75.00, which is not less than $75, so the statement is false.`,
      `**E) The reported $8,540 total could also have come from selling 310 hardcovers alone.**  (false)

This claim treats the report as a hardcover-only sale. But $310(17)=5270$, far below $8540$.

310 hardcovers alone would bring in 310 \\times 17 = $5,270, nowhere near $8,540. The staff and loyalty-share figures are irrelevant distractions.

Using $y = 17$:

$$
310 \\times 17 = 5270
$$

Since $5270 \\ne 8540$, the statement is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview: `Memo. Pricing Desk: "Hardcover editions are priced exactly $5 above the paperback price this quarter, across the board.".

**Part 1: Building the system.**

Let $x =$ paperback price, y = hardcover price. Staff headcount and the loyalty-member percentage do not affect unit pricing and should be set aside.

**1. Record this independent observation.** In symbols:

$$
y = x + 5
$$

**2. Record this independent observation.** In symbols:

$$
400x + 220y = 8540
$$

**Part 2: The model.**

$$
y = x + 5 \\tag{1}
$$

$$
400x + 220y = 8540 \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute directly: $400x + 220(x + 5) = 8540$.

**2.** Expanding:

$$
400x + 220x + 1100 = 8540
$$

$$
620x = 7440
$$

$$
x = 12
$$

**3.** Then

$$
y = 12 + 5 = 17
$$

**Answer.** Paperback = $12.00 | Hardcover = $17.00`,
  },
  {
    id: "math-5-13",
    case_id: "MATH 5.13",
    title: `SkyLink Mobile Promotional Flyer`,
    context: `SKYLINK MOBILE: BASIC  -  $15/month base + $2.00/GB overage. STANDARD  -  base fee and overage rate confirmed by billing history below. PREMIUM  -  $40/month, unlimited, no overage.`,
    tables_markdown: `| Month | Overage Used | Total Bill |
| --- | --- | --- |
| March | 8 GB | $62.00 |
| April | 3 GB | $47.00 |`,
    statements: [
      `The Standard plan has a lower base fee than the advertised Basic plan.`,
      `The overage rate on the Standard plan is $3.00 per GB.`,
      `A Standard customer using 10 GB of overage in May would be billed $68.00.`,
      `Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.`,
      `For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The Standard plan has a lower base fee than the advertised Basic plan.**  (false)

This claim compares Standard's base fee with Basic's advertised $15$. Standard's solved base fee is $38$, which is higher.

Standard's base fee is $38.00, well above Basic's $15.00. The higher figure buys a lower overage rate instead.

Standard bills: $x + 8y = 62.00$ and $x + 3y = 47.00$. Subtract:

$$
(x + 8y) - (x + 3y) = 62.00 - 47.00
$$

$$
5y = 15
$$

$$
y = 3
$$

Then

$$
x + 3(3) = 47
$$

$$
x + 9 = 47
$$

$$
x = 38
$$

Basic's advertised base is $15$. Since $38 > 15$, Standard's base is not lower, so the statement is false.`,
      `**B) The overage rate on the Standard plan is $3.00 per GB.**  (true)

This claim gives the variable charge. The two bills differ by $62-47=15$ over $8-3=5$ GB, so $y=15/5=3$.

The elimination step isolates $y = 3$ directly, confirmed by both bills.

The extra usage is $8 - 3 = 5$ GB and the extra charge is $62.00 - 47.00 = 15.00$:

$$
y = \\frac{15}{5} = 3
$$

Standard overage is $3 per GB.`,
      `**C) A Standard customer using 10 GB of overage in May would be billed $68.00.**  (true)

This claim applies Standard's confirmed pricing to 10 GB. The bill is $38+10(3)=68$.

Standard's model is $x + y \\cdot g = 38 + 3g$. At $g = 10$:

$$
38 + 10(3) = 38 + 30 = 68
$$

Ten GB of Standard overage bills at $68.`,
      `**D) Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.**  (true)

This claim compares plans at 5 GB. Standard costs $38+5(3)=53$, while Premium is a flat $40$, saving $13$.

At 5 GB of overage:

$$
\\text{Standard} = 38 + 5(3) = 38 + 15 = 53
$$

Premium is a flat $40$ with no overage. The saving is

$$
53 - 40 = 13
$$

Switching saves $13.00, so the statement is true.`,
      `**E) For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.**  (true)

At 8 GB, Basic costs 15 + 8(2) = $31.00 versus Standard's 38 + 24 = $62.00. Basic is substantially cheaper here.

Basic is $15 + 2g$ and Standard is $38 + 3g$. At $g = 8$:

$$
\\text{Basic} = 15 + 8(2) = 15 + 16 = 31
$$

$$
\\text{Standard} = 38 + 8(3) = 38 + 24 = 62
$$

Since $31 < 62$, Basic is cheaper, so the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 13,
    solution_overview: `SKYLINK MOBILE: BASIC: $15/month base + $2.00/GB overage. STANDARD: base fee and overage rate confirmed by billing history below.

**Part 1: Building the system.**

Let $x =$ Standard plan's base fee, y = its per-GB overage rate. The Basic and Premium prices belong to different plans and should not be substituted into this customer's equations.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides. Time coefficients come from the story's clocks (head-starts, overtime hours, or duration multipliers), not from the headline total alone.

**1. Read the bill with 8 extra units.** At rate $y$, that bill is:

$$
x + 8y = 62.00
$$

**2. Read the bill with 3 extra units.** At rate $y$, that bill is:

$$
x + 3y = 47.00
$$

**Part 2: The model.**

$$
x + 8y = 62.00 \\tag{1}
$$

$$
x + 3y = 47.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract directly:

$$
(x + 8y) - (x + 3y) = 62.00 - 47.00
$$

$$
5y = 15
$$

$$
y = 3
$$

**2.** Substitute back:

$$
x + 3(3) = 47
$$

$$
x + 9 = 47
$$

$$
x = 38
$$

**Answer.** Standard base fee = $38.00 | Overage rate = $3.00/GB`,
  },
  {
    id: "math-5-14",
    case_id: "MATH 5.14",
    title: `Lakeview Inn Booking Confirmations`,
    context: `LAKEVIEW INN  -  Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.`,
    tables_markdown: `| Confirmation | Standard Rooms | Suites | Total Charged (incl. 8% tax) |
| --- | --- | --- | --- |
| Weekend 1 | 10 | 4 | $2,419.20 |
| Weekend 2 | 7 | 9 | $3,099.60 |`,
    statements: [
      `After removing the occupancy tax, Weekend 1's booking revenue was $2,240.00.`,
      `A Suite costs $200 more per night than a Standard room.`,
      `Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.`,
      `Including the 8% tax, a single Suite night costs $226.80.`,
      `Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by $210.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) After removing the occupancy tax, Weekend 1's booking revenue was $2,240.00.**  (true)

This claim reverses the 8% tax on Weekend 1. Dividing the printed total gives $2419.20\\div1.08=2240.00$.

The printed total includes 8% tax, so divide by $1.08$:

$$
\\frac{2419.20}{1.08} = 2240.00
$$

Weekend 1's pre-tax revenue is $2,240.00, matching the claim.`,
      `**B) A Suite costs $200 more per night than a Standard room.**  (false)

The actual gap is 210 - 140 = $70, not $200. Forgetting to strip out the tax before comparing rates tends to inflate this estimate.

Weekend 2 pre-tax: $3099.60 / 1.08 = 2870.00$. From $10x + 4y = 2240$, divide by 2: $5x + 2y = 1120$, so $y = (1120 - 5x)/2$. Substitute into the doubled Weekend 2 equation $14x + 18y = 5740$:

$$
14x + 9(1120 - 5x) = 5740
$$

$$
14x + 10080 - 45x = 5740
$$

$$
-31x = -4340
$$

$$
x = 140
$$

Then

$$
y = \\frac{1120 - 5(140)}{2} = \\frac{1120 - 700}{2} = \\frac{420}{2} = 210
$$

The gap is

$$
y - x = 210 - 140 = 70
$$

A Suite costs $70 more, not the claimed $200, so the statement is false.`,
      `**C) Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.**  (false)

This claim compares two pre-tax bookings. Six Standard rooms cost $6(140)=840$, and four Suites cost $4(210)=840$.

Using $x = 140$ and $y = 210$:

$$
6(140) = 840
$$

$$
4(210) = 840
$$

The two bookings cost the same $840, so six Standard rooms do not cost less. The statement is false.`,
      `**D) Including the 8% tax, a single Suite night costs $226.80.**  (true)

210 \\times 1.08 = $226.80, applying the same tax used to convert the confirmations.

The pre-tax Suite rate is $y = 210$. Apply the 8% occupancy tax:

$$
210 \\times 1.08 = 226.80
$$

A taxed Suite night costs $226.80, matching the claim.`,
      `**E) Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by $210.**  (true)

This claim adds exactly one Suite while leaving everything else unchanged. One more Suite contributes its pre-tax rate of $210$.

The extra Suite is $10 - 9 = 1$, at the pre-tax rate $y = 210$:

$$
1 \\times 210 = 210
$$

Pre-tax revenue would rise by $210, matching the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 14,
    solution_overview: `LAKEVIEW INN. Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.

**Part 1: Building the system.**

Let $x =$ nightly Standard rate, y = nightly Suite rate, both before tax. Each total must first be converted back to a pre-tax figure before it can be used in the model.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
10x + 4y = 2419.20 ÷ 1.08 = 2240.00
$$

**2. Record this independent observation.** In symbols:

$$
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
$$

**Part 2: The model.**

$$
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\tag{1}
$$

$$
7x + 9y = 3099.60 ÷ 1.08 = 2870.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** From the first equation, $5x + 2y = 1120$, so $y = (1120 - 5x)/2$.

**2.** Substituting into the second (after doubling it to $14x + 18y = 5740$):

$$
14x + 9(1120 - 5x) = 5740
$$

$$
14x + 10080 - 45x = 5740
$$

$$
-31x = -4340
$$

$$
x = 140
$$

**3.** Then

$$
y = \\frac{1120 - 5(140)}{2} = \\frac{420}{2} = 210
$$

**Answer.** Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)`,
  },
  {
    id: "math-5-15",
    case_id: "MATH 5.15",
    title: `Crestwood Distribution Centre, Inventory Valuation`,
    context: `Only the January and February rows report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs. Warehouse floor space and on-site staff are distractors (not needed below).`,
    tables_markdown: `| Period | Type | Comp. A (units) | Comp. B (units) | Total Value |
| --- | --- | --- | --- | --- |
| January | Actual | 150 | 90 | $3,150 |
| February | Actual | 130 | 140 | $3,660 |
| March | Forecast | 200 | 100 | $4,700 (projected) |`,
    statements: [
      `Component A's unit cost is $12.`,
      `Component B's unit cost is $18.`,
      `The March forecast assumes higher unit prices than what actually applied in January and February.`,
      `If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be $4,700.`,
      `The combined actual inventory value recorded for January and February is $6,810.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Component A's unit cost is $12.**  (true)

This claim gives Component A's actual cost. Elimination produces $31x=372$, so $x=12$.

The elimination confirms x = $12.00 exactly, reconciling with both actual monthly rows.

January: $150x + 90y = 3150$. February: $130x + 140y = 3660$. Divide by 30 and 10: $5x + 3y = 105$ and $13x + 14y = 366$. Multiply by 14 and 3:

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
x = 12
$$

Component A costs $12 a unit.`,
      `**B) Component B's unit cost is $18.**  (false)

This claim mistakes the forecast implication for the actual price. After $x=12$, $5(12)+3y=105$ gives $y=15$, not $18$.

Component B actually costs $15.00, not $18.00. Reading the forecast row's higher implied prices back into the actual data is a natural but incorrect shortcut.

From $5x + 3y = 105$ and $x = 12$:

$$
5(12) + 3y = 105
$$

$$
60 + 3y = 105
$$

$$
3y = 45
$$

$$
y = 15
$$

Component B costs $15, not the claimed $18, so the statement is false.`,
      `**C) The March forecast assumes higher unit prices than what actually applied in January and February.**  (true)

This claim compares March's forecast with the actual prices. At actual costs, the forecast quantities would value at $200(12)+100(15)=3900$, below the forecast total of $4700$.

Value March's 200 A + 100 B at the actual costs $x = 12$, $y = 15$:

$$
200(12) + 100(15) = 2400 + 1500 = 3900
$$

The forecast total is $4700$. Since $3900 < 4700$, the forecast assumes higher unit prices, so the statement is true.`,
      `**D) If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be $4,700.**  (false)

This claim uses the wrong valuation basis. The actual-price value is $200(12)+100(15)=2400+1500=3900$.

Valuing March's quantities at actual costs gives $3,900, not $4,700. The $4,700 figure only appears because the forecast bakes in an assumed price rise.

From C:

$$
200(12) + 100(15) = 3900
$$

The actual-cost valuation is $3,900, not the claimed $4,700, so the statement is false.`,
      `**E) The combined actual inventory value recorded for January and February is $6,810.**  (true)

This claim combines the two actual monthly values. Adding them gives $3150+3660=6810$.

Simply adding the two actual monthly totals, 3,150 + 3,660 = $6,810, without needing the unit costs at all.

The table's actual totals:

$$
3150 + 3660 = 6810
$$

The combined actual value is $6,810, matching the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 15,
    solution_overview: `Only the January and February rows report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs.

**Part 1: Building the system.**

Only the January and February rows report actual recorded values; March is explicitly labelled a forecast and cannot be used to solve for today's unit costs.

Only the observation rows that report actual measured totals enter the system; forecast or unused rows stay out of the coefficients.

**1. Use the January row (actual data).** Write the equation:

$$
150x + 90y = 3150
$$

**2. Use the February row (actual data).** Write the equation:

$$
130x + 140y = 3660
$$

**Part 2: The model.**

$$
150x + 90y = 3150 \\tag{1}
$$

$$
130x + 140y = 3660 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide by 30 and 10 respectively: $5x + 3y = 105$; $13x + 14y = 366$.

**2.** Multiply by 14 and 3: $70x + 42y = 1470$; $39x + 42y = 1098$.

**3.** Subtracting:

$$
(70x + 42y) - (39x + 42y) = 1470 - 1098
$$

$$
31x = 372
$$

$$
x = 12
$$

**4.** Then from $5(12) + 3y = 105$:

$$
60 + 3y = 105
$$

$$
3y = 45
$$

$$
y = 15
$$

**Answer.** Component A = $12.00/unit | Component B = $15.00/unit`,
  },
  {
    id: "math-5-16",
    case_id: "MATH 5.16",
    title: `Sunrise Staffing, Overtime Contract Check`,
    context: `Sunrise Staffing's contract states overtime must be paid at exactly 1.5× the regular hourly wage. A union representative pulled this week's payroll for two workers, both completing a full 40-hour regular week, to check whether that rule was actually followed.`,
    tables_markdown: `| Worker | Regular Hrs | Overtime Hrs | Total Pay |
| --- | --- | --- | --- |
| Worker 1 | 40 | 6 | $704 |
| Worker 2 | 40 | 2 | $608 |`,
    statements: [
      `The overtime rate actually paid matches the contractual 1.5\\times regular-rate rule.`,
      `The regular hourly wage is $14.`,
      `Relative to the 1.5\\times contract rule, Worker 2 was overpaid by exactly $6.00 on their overtime hours.`,
      `A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn $656.`,
      `That same third worker, paid strictly under the 1.5\\times contract rule instead, would earn $644.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.**  (false)

The regular rate is $14$, so the contract requires $1.5(14)=21$ per overtime hour. Payroll used $24$, which is $3$ higher per overtime hour.

Worker 1: $40x + 6y = 704$. Worker 2: $40x + 2y = 608$. Subtract:

$$
(40x + 6y) - (40x + 2y) = 704 - 608
$$

$$
4y = 96
$$

$$
y = 24
$$

Then $40x + 2(24) = 608$ gives $x = 14$. The contract requires

$$
1.5 \\times 14 = 21
$$

Actual overtime is $24$, not $21$, so the statement is false.`,
      `**B) The regular hourly wage is $14.**  (true)

Subtracting the two payroll equations cancels the $40x$ regular-pay term and gives $4y=96$, so $y=24$. Then $40x+2(24)=608$ gives $x=14$.

The elimination step isolates x = $14.00 directly, and it checks out against both workers' totals.

From A, $y = 24$. Substitute into Worker 2:

$$
40x + 2(24) = 608
$$

$$
40x + 48 = 608
$$

$$
40x = 560
$$

$$
x = 14
$$

Regular pay is $14 an hour.`,
      `**C) Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly $6.00 on their overtime hours.**  (true)

Worker 2 has 2 overtime hours. Contract pay would be $2(21)=42$, but actual overtime pay was $2(24)=48$, a difference of $6$.

Contract overtime rate is $21$; actual is $24$. Worker 2 has 2 overtime hours:

$$
2(24) - 2(21) = 48 - 42 = 6
$$

Worker 2 was overpaid by $6.00 on overtime, matching the claim.`,
      `**D) A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn $656.**  (true)

At the actual rates, the worker earns $40(14)+4(24)$. That is $560+96=656$.

Using $x = 14$ and $y = 24$:

$$
40(14) + 4(24) = 560 + 96 = 656
$$

The third worker would earn $656, matching the claim.`,
      `**E) That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn $644.**  (true)

Using the contractual rate: 40(14) + 4(21) = $644, $12 less than the company's actual practice.

The contract overtime rate is $1.5 \\times 14 = 21$:

$$
40(14) + 4(21) = 560 + 84 = 644
$$

Under the 1.5× rule that third worker earns $644.`,
    ],
    difficulty_level: "2/5",
    sort_order: 16,
    solution_overview: `Sunrise Staffing's contract states overtime must be paid at exactly 1.5× the regular hourly wage. A union representative pulled this week's payroll for two workers, both completing a full 40-hour regular week, to check whether that rule was actually followed.

**Part 1: Building the system.**

Let $x =$ regular hourly wage, y = overtime rate actually paid. Only once both rates are known can they be compared against the contract's 1.5× rule.

Time coefficients come from the story's clocks (head-starts, overtime hours, or duration multipliers), not from the headline total alone.

**1. Record this independent observation.** In symbols:

$$
40x + 6y = 704
$$

**2. Record this independent observation.** In symbols:

$$
40x + 2y = 608
$$

**Part 2: The model.**

$$
40x + 6y = 704 \\tag{1}
$$

$$
40x + 2y = 608 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting cancels the $40x$ term:

$$
(40x + 6y) - (40x + 2y) = 704 - 608 \\Rightarrow 4y = 96 \\Rightarrow y = 24
$$

**2.** Substituting back into Worker 2:

$$
40x + 2(24) = 608 \\Rightarrow 40x + 48 = 608 \\Rightarrow x = 14
$$

**Answer.** Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)`,
  },
  {
    id: "math-5-17",
    case_id: "MATH 5.17",
    title: `Riverside Water Utility, Billing Dispute`,
    context: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed $56.10  -  but May's bill also carried a 10% late penalty applied to the entire bill. In June she used 25 m³ with no penalty, billed $65.00. The billing office insists its fixed charge is $18.00 and its rate is $1.85 per m³.`,
    statements: [
      `The billing office's claim of an $18.00 fixed monthly charge is correct.`,
      `The rate charged is $2.00 per cubic metre.`,
      `After removing the late penalty, May's actual water charge was $51.00.`,
      `A customer using 40 m³ in a month would be billed $85.00.`,
      `Had the same 10% late penalty been applied to June's $65.00 bill, the total would have been $71.50.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The billing office's claim of an $18.00 fixed monthly charge is correct.**  (false)

After removing the penalty, May's bill is $51$. With a $2$ rate, its usage costs $18(2)=36$, leaving a fixed charge of $15$, not $18$.

The bills actually support a fixed charge of $15.00, not the claimed $18.00. The billing office's own figure is wrong.

May's printed $56.10 already includes a 10% late penalty on the whole bill, so the genuine May charge is $56.10 / 1.10$. June needs no correction: $x + 25y = 65$. Subtracting the cleaned pair $x + 18y = 51$ and $x + 25y = 65$ cancels $x$ and leaves $7y = 14$, hence $y = 2$. Back-substitution is then

$$
x + 18(2) = 51 \\Rightarrow x + 36 = 51 \\Rightarrow x = 15
$$

$15$ is not the office's $18$.`,
      `**B) The rate charged is $2.00 per cubic metre.**  (true)

The bills differ by $65-51=14$ after May is corrected. Usage differs by $25-18=7$ m³, so the rate is $14\\div7=2$ dollars per m³.

The elimination step gives y = $2.00 per m³ exactly, contradicting the claimed $1.85.

Once May is divided back to $51$, the two clean bills are $x + 18y = 51$ and $x + 25y = 65$. Their difference is only usage:

$$
(25 - 18)y = 65 - 51 \\Rightarrow 7y = 14 \\Rightarrow y = 2
$$

That recovered rate, not $1.85$, is what both months actually used.`,
      `**C) After removing the late penalty, May's actual water charge was $51.00.**  (true)

56.10 ÷ 1.10 = $51.00, undoing the 10% penalty rather than simply subtracting a flat amount.

A 10% surcharge means the printed figure is $1.10$ times the genuine charge, so invert the multiplier:

$$
\\frac{56.10}{1.10} = 51.00
$$

Subtracting $5.61$ (10% of the printed total) would be the wrong undo and would not land on $51$.`,
      `**D) A customer using 40 m³ in a month would be billed $85.00.**  (false)

The correct formula is $15+2u$. At $u=40$, the bill is $15+2(40)=95$.

With the recovered fixed charge and rate,

$$
15 + 2 \\cdot 40 = 15 + 80 = 95
$$

$95$ is $10$ above the claimed $85$, so the $85$ figure is not the bill this model produces.`,
      `**E) Had the same 10% late penalty been applied to June's $65.00 bill, the total would have been $71.50.**  (true)

65.00 \\times 1.10 = $71.50, applying the same 10% multiplier used to recover May's genuine charge.

June's printed $65$ is already the genuine charge. A 10% late penalty on that whole amount is

$$
65.00 \\times 1.10 = 71.50
$$

which is exactly the figure in the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 17,
    solution_overview: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed $56.10, but May's bill also carried a 10% late penalty applied to the entire bill.

**Part 1: Building the system.**

Since the 10% penalty was applied to May's whole bill rather than as a flat add-on, May's reported total must first be divided back down. The fixed charge and rate must be derived independently from the two bills, since the phone claim may not be accurate.

**1. Record this independent observation.** In symbols:

$$
x + 18y = 56.10 ÷ 1.10 = 51.00
$$

**2. Read the bill with 25 extra units.** At rate $y$, that bill is:

$$
x + 25y = 65.00
$$

**Part 2: The model.**

$$
x + 18y = 56.10 ÷ 1.10 = 51.00 \\tag{1}
$$

$$
x + 25y = 65.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting cancels $x$:

$$
(x + 25y) - (x + 18y) = 65.00 - 51.00
$$

$$
7y = 14.00 \\Rightarrow y = 2.00
$$

**2.** Substituting back into the cleaned May equation:

$$
x + 18(2.00) = 51.00 \\Rightarrow x + 36 = 51 \\Rightarrow x = 15.00
$$

**Answer.** Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)`,
  },
  {
    id: "math-5-18",
    case_id: "MATH 5.18",
    title: `CityCab vs. MetroX Fare Comparison`,
    context: `A commuter is deciding between two ride-hailing companies. An 8 km CityCab ride once cost $14.00, and a 20 km CityCab ride cost exactly $12.00 more than that. Separately, a 5 km MetroX ride cost $13.50, with a 15 km MetroX ride costing exactly $15.00 more.`,
    statements: [
      `For a 10 km ride, CityCab works out cheaper than MetroX.`,
      `Both companies charge the same base fare of $6.00.`,
      `For distances under 4 km, MetroX would be cheaper than CityCab.`,
      `A 30 km CityCab ride costs $36.00.`,
      `There is a distance of 5 km at which both companies charge exactly the same fare.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) For a 10 km ride, CityCab works out cheaper than MetroX.**  (true)

CityCab charges $6+10(1)=16$. MetroX charges $6+10(1.5)=21$, so CityCab is $5$ cheaper.

Recover the two fare rules first. CityCab's 20 km ride is $14 + 12 = 26$, so $x_1 + 8y_1 = 14$ and $x_1 + 20y_1 = 26$. Subtracting: $12y_1 = 12$, hence $y_1 = 1$ and $x_1 = 14 - 8 = 6$. MetroX's 15 km ride is $13.50 + 15 = 28.50$, so $x_2 + 5y_2 = 13.50$ and $x_2 + 15y_2 = 28.50$. Subtracting: $10y_2 = 15$, hence $y_2 = 1.5$ and $x_2 = 13.50 - 7.50 = 6$. At 10 km the two formulas give

$$
6 + 10(1) = 16, \\qquad 6 + 10(1.5) = 21
$$

CityCab's $16$ undercuts MetroX's $21$.`,
      `**B) Both companies charge the same base fare of $6.00.**  (true)

CityCab's rate is $1$, so $14-8(1)=6$. MetroX's rate is $1.50$, so $13.50-5(1.50)=6$.

Both systems independently solve to a $6.00 base fare, a coincidence worth double-checking rather than assuming.

Peel the per-km charge off each company's shorter quoted ride:

$$
14.00 - 8(1) = 6.00
$$

$$
13.50 - 5(1.50) = 13.50 - 7.50 = 6.00
$$

The two bases land on the same $6.00$.`,
      `**C) For distances under 4 km, MetroX would be cheaper than CityCab.**  (false)

Their fares are $6+d$ and $6+1.5d$. For every positive $d$, $1.5d>d$, so MetroX costs more.

Since both share the same base fare and MetroX's rate is higher, MetroX is never actually cheaper for any positive distance. They only tie at 0 km.

The difference of the two fare rules is

$$
(6 + 1.5d) - (6 + d) = 0.5d
$$

which is positive whenever $d > 0$. Even at a short hop such as $d = 3$, MetroX is $6 + 4.50 = 10.50$ against CityCab's $6 + 3 = 9$.`,
      `**D) A 30 km CityCab ride costs $36.00.**  (true)

CityCab's formula is $6+d$. At 30 km, $6+30=36$.

CityCab is base plus $1$ per km, so a 30 km ride is just

$$
6 + 30(1) = 36
$$

No extra fee sits on top of that linear rule.`,
      `**E) There is a distance of 5 km at which both companies charge exactly the same fare.**  (false)

Equating $6+d$ and $6+1.5d$ gives $d=1.5d$, so $d=0$. At 5 km, the fares are $11$ and $13.50$.

Setting the two fare formulas equal gives $d = 0$, not 5 km. The companies only match at zero distance.

$$
6 + d = 6 + 1.5d \\Rightarrow d = 1.5d \\Rightarrow 0 = 0.5d \\Rightarrow d = 0
$$

At the claimed 5 km the two bills are $6 + 5 = 11$ versus $6 + 5(1.5) = 13.50$, which are not equal.`,
    ],
    difficulty_level: "2/5",
    sort_order: 18,
    solution_overview: `A commuter is deciding between two ride-hailing companies. An 8 km CityCab ride once cost $14.00, and a 20 km CityCab ride cost exactly $12.00 more than that.

**Part 1: Building the system.**

Each company must be modelled separately. Each "costs X more than" comparison must first be converted into an absolute fare. Let x1, y1 be CityCab's base fare and rate, and x2, y2 be MetroX's.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00
$$

**2. Record this independent observation.** In symbols:

$$
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
$$

**Part 2: The model.**

$$
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\tag{1}
$$

$$
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** For CityCab, subtracting cancels $x_1$:

$$
(x_1 + 20y_1) - (x_1 + 8y_1) = 26.00 - 14.00
$$

$$
12y_1 = 12 \\Rightarrow y_1 = 1
$$

Then $x_1 + 8(1) = 14$, so $x_1 = 6$.

**2.** For MetroX the same difference of the two quoted rides is

$$
(x_2 + 15y_2) - (x_2 + 5y_2) = 28.50 - 13.50
$$

$$
10y_2 = 15 \\Rightarrow y_2 = 1.5
$$

Then $x_2 + 5(1.5) = 13.50$, so $x_2 = 6$.

**Answer.** CityCab: base $6.00, rate $1.00/km | MetroX: base $6.00, rate $1.50/km`,
  },
  {
    id: "math-5-19",
    case_id: "MATH 5.19",
    title: `Bramble & Co., Vendor Quotation Comparison`,
    context: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright  -  both quotes only show bundled order totals. Bramble needs 40 units of X and 30 units of Y next month.`,
    tables_markdown: `| Vendor | Order | Units X | Units Y | Total |
| --- | --- | --- | --- | --- |
| Vendor A | 1 | 20 | 15 | $450 |
| Vendor A | 2 | 25 | 12 | $441 |
| Vendor B | 1 | 20 | 15 | $460 |
| Vendor B | 2 | 25 | 12 | $467 |`,
    statements: [
      `Vendor A charges less than Vendor B for Product X.`,
      `Vendor B charges less than Vendor A for Product Y.`,
      `For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.`,
      `Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by $20.`,
      `If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Vendor A charges less than Vendor B for Product X.**  (true)

Vendor A charges $9$ per X, while Vendor B charges $11$ per X. Therefore A is $2$ cheaper for each X unit.

Vendor A's $9 for Product X undercuts Vendor B's $11.

Vendor A's two quotes are $20x_A + 15y_A = 450$ and $25x_A + 12y_A = 441$. Divide the first by 5 to get $4x_A + 3y_A = 90$, so $y_A = 30 - \\frac{4}{3}x_A$. Feed that into the second quote:

$$
25x_A + 12\\left(30 - \\frac{4}{3}x_A\\right) = 441
$$

$$
25x_A + 360 - 16x_A = 441 \\Rightarrow 9x_A = 81 \\Rightarrow x_A = 9
$$

Vendor B, treated the same way from $20x_B + 15y_B = 460$ and $25x_B + 12y_B = 467$, yields $x_B = 11$. So $9 < 11$.`,
      `**B) Vendor B charges less than Vendor A for Product Y.**  (true)

Vendor B's Y price is $16$, compared with Vendor A's $18$. B is therefore $2$ cheaper per Y unit.

Vendor B's $16 for Product Y is cheaper than Vendor A's $18, the reverse pattern from Product X.

From A's reduced first quote, $y_A = 30 - \\frac{4}{3}(9) = 30 - 12 = 18$. From B's reduced first quote $4x_B + 3y_B = 92$ and $x_B = 11$,

$$
4(11) + 3y_B = 92 \\Rightarrow 44 + 3y_B = 92 \\Rightarrow y_B = 16
$$

$16 < 18$, so B is the cheaper Y supplier.`,
      `**C) For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.**  (true)

For 40 X + 30 Y, Vendor A totals $900, while Vendor B totals $920. Vendor A is $20 cheaper overall despite losing on Product Y alone.

Plug the recovered prices into the upcoming mix:

$$
40(9) + 30(18) = 360 + 540 = 900
$$

$$
40(11) + 30(16) = 440 + 480 = 920
$$

A's $900$ beats B's $920$ on the bundle even though B wins on Y.`,
      `**D) Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by $20.**  (false)

The current Vendor A total is $900$, while Vendor B would cost $920$. Switching raises the cost by $20$.

The two bundle totals from C already settle this: $920 - 900 = 20$ is an increase, not a saving. Switching to B would cost Bramble twenty dollars more, the opposite of the claim.`,
      `**E) If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.**  (true)

For Y only, Vendor A costs $60(18)=1080$ and Vendor B costs $60(16)=960$. Vendor B saves $120$.

For 60 units of Y alone, Vendor A costs $1,080 while Vendor B costs $960. Here Vendor B's advantage on Y is the only thing that matters.

With no X in the order the comparison collapses to the two Y prices:

$$
60 \\times 18 = 1080, \\qquad 60 \\times 16 = 960
$$

B is $120$ cheaper on that Y-only run.`,
    ],
    difficulty_level: "2/5",
    sort_order: 19,
    solution_overview: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright; both quotes only show bundled order totals.

**Part 1: Building the system.**

Each vendor's unit prices are independent and must be solved separately. Let xA, yA denote Vendor A's prices, and xB, yB denote Vendor B's.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441
$$

**2. Record this independent observation.** In symbols:

$$
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
$$

**Part 2: The model.**

$$
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\tag{1}
$$

$$
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467 \\tag{2}
$$

**Part 3: Solve.**

**1.** Vendor A: divide the first quote by 5 to get $4x_A + 3y_A = 90$, so $y_A = 30 - \\frac{4}{3}x_A$. Substitute into $25x_A + 12y_A = 441$:

$$
25x_A + 12\\left(30 - \\frac{4}{3}x_A\\right) = 441
$$

$$
25x_A + 360 - 16x_A = 441 \\Rightarrow 9x_A = 81 \\Rightarrow x_A = 9
$$

Then $y_A = 30 - 12 = 18$.

**2.** Vendor B: divide $20x_B + 15y_B = 460$ by 5 to get $4x_B + 3y_B = 92$. The same substitution into $25x_B + 12y_B = 467$ produces

$$
25x_B + 12\\cdot\\frac{92 - 4x_B}{3} = 467 \\Rightarrow 75x_B + 1104 - 48x_B = 1401
$$

$$
27x_B = 297 \\Rightarrow x_B = 11, \\qquad y_B = \\frac{92 - 44}{3} = 16
$$

**Answer.** Vendor A: X = $9, Y = $18 | Vendor B: X = $11, Y = $16`,
  },
  {
    id: "math-5-20",
    case_id: "MATH 5.20",
    title: `Alpha & Beta Holdings, Quarterly Dashboard`,
    context: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned $27,200 in Q1 revenue, and Beta earned exactly $1,000 more than Alpha. Alpha sold 150 units of P and 80 subscriptions of Q; Beta sold 100 units of P and 130 subscriptions of Q. (Alpha's headcount grew 8% year-on-year versus Beta's 6%  -  a staffing detail with no bearing on pricing.)`,
    statements: [
      `Product P is priced at $50 and Service Q at $70, identically for both companies.`,
      `Beta generated more Q1 revenue than Alpha.`,
      `If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.`,
      `Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.`,
      `Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Product P is priced at $50 and Service Q at $70, identically for both companies.**  (true)

Using Alpha's $13,100$ and Beta's $14,100$ revenue equations gives $x=50$ and $y=70$. Both equations use those same market prices.

The elimination confirms x = $50 and y = $70, holding for both companies' revenue rows simultaneously.

Combined revenue $A + B = 27200$ and the gap $B - A = 1000$ first split the two company totals: adding them gives $2B = 28200$, so $B = 14100$ and $A = 13100$. Those become the right-hand sides of

$$
150x + 80y = 13100, \\qquad 100x + 130y = 14100
$$

Divide by 10 and eliminate. One convenient path is $15x + 8y = 1310$ against $10x + 13y = 1410$; clearing $x$ produces $y = 70$, then $150(50) + 80(70) = 7500 + 5600 = 13100$ confirms $x = 50$.`,
      `**B) Beta generated more Q1 revenue than Alpha.**  (true)

The sum-and-difference information gives Beta $14,100$ and Alpha $13,100$. Beta is exactly $1,000$ higher.

That $1,000$ gap is given directly, but the two separate totals still need the sum:

$$
B = \\frac{27200 + 1000}{2} = 14100, \\qquad A = 27200 - 14100 = 13100
$$

$14100 > 13100$, so Beta's Q1 revenue is the larger of the two.`,
      `**C) If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.**  (false)

A 10% rise on Product P alone raises Alpha's revenue from $13,100 to $13,850, an increase of only about 5.7%, not 10%. Product P is only part of Alpha's total revenue.

Alpha currently earns $150(50) + 80(70) = 7500 + 5600 = 13100$. After a 10% lift on P only, the new P price is $55$, so

$$
150(55) + 80(70) = 8250 + 5600 = 13850
$$

The relative increase is $750 / 13100 \\approx 0.057$, about 5.7%, nowhere near a full 10% on the whole book.`,
      `**D) Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.**  (false)

Alpha's projected revenue is $13,850$. Beta's current revenue is $14,100$, so Alpha remains $250$ lower.

The $13,850$ figure is the one computed in C. Beta's current total is still $14,100$, and

$$
14100 - 13850 = 250
$$

so the projected Alpha book still sits $250$ short of Beta's Q1.`,
      `**E) Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.**  (true)

Beta's Q revenue is $130(70)=9100$. Alpha's P revenue is $150(50)=7500$, so $9100>7500$.

Beta's Service Q revenue is $9,100, while Alpha's entire Product P revenue is $7,500. Beta's single revenue line from Q alone beats Alpha's whole P line.

$$
130 \\times 70 = 9100, \\qquad 150 \\times 50 = 7500
$$

$9100$ clears $7500$ by $1,600$.`,
    ],
    difficulty_level: "2/5",
    sort_order: 20,
    solution_overview: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned $27,200 in Q1 revenue, and Beta earned exactly $1,000 more than Alpha.

**Part 1: Building the system.**

Individual Q1 revenue figures are not stated directly, only their combined total and the gap between them. Those must first be turned into Alpha's and Beta's separate revenue figures (a small sum-and-difference step) before the unit-sales data can be used.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
Stage 1: A + B = 27200, B - A = 1000
$$

**2. Record this independent observation.** In symbols:

$$
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
$$

**Part 2: The model.**

$$
Stage 1: A + B = 27200, B - A = 1000 \\tag{1}
$$

$$
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100 \\tag{2}
$$

**Part 3: Solve.**

**1.** Adding the Stage 1 equations:

$$
(A + B) + (B - A) = 27200 + 1000 \\Rightarrow 2B = 28200 \\Rightarrow B = 14100
$$

Then $A = 27200 - 14100 = 13100$.

**2.** Stage 2, after dividing by 10, is $15x + 8y = 1310$ and $10x + 13y = 1410$. Multiply the first by 2 and the second by 3 so the $x$ terms match:

$$
30x + 16y = 2620, \\qquad 30x + 39y = 4230
$$

Subtract: $23y = 1610$, so $y = 70$. Then $10x + 13(70) = 1410$ gives $10x = 500$ and $x = 50$.

Check: $150(50) + 80(70) = 7500 + 5600 = 13100$ and $100(50) + 130(70) = 5000 + 9100 = 14100$.

**Answer.** Product P = $50.00 | Service Q = $70.00`,
  },
  {
    id: "math-5-21",
    case_id: "MATH 5.21",
    title: `FitZone Gym  -  Checking the Advertised Rates`,
    context: `FITZONE GYM  -  NEW MEMBER SPECIAL! "Join for just a $30 signup fee, then only $45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid $284 total. Jason, after his 10th monthly payment, had paid $448 total.`,
    statements: [
      `The flyer's advertised $30 signup fee matches what members are actually being charged.`,
      `The monthly rate members are actually paying is lower than the advertised $45/month.`,
      `Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.`,
      `Jason paid more than $400 in total by his 10th payment.`,
      `A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay $492.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) The flyer's advertised $30 signup fee matches what members are actually being charged.**  (false)

The records give a signup fee of $38$. That is $8$ more than the advertised $30$.

The real signup fee is $38, not the advertised $30. The flyer understates what members are actually charged up front.

Maria and Jason give $x + 6y = 284$ and $x + 10y = 448$. Their difference is four months of the same monthly rate:

$$
(x + 10y) - (x + 6y) = 448 - 284 \\Rightarrow 4y = 164 \\Rightarrow y = 41
$$

Then $x + 6(41) = 284$ leaves $x + 246 = 284$, so $x = 38$. The flyer said $30$; payroll used $38$.`,
      `**B) The monthly rate members are actually paying is lower than the advertised $45/month.**  (true)

The monthly rate from the two histories is $41$. Since $41<45$, the ongoing charge is lower than advertised.

The real monthly rate is $41, indeed lower than the advertised $45. The flyer overstates the ongoing cost while understating the signup fee.

That $41$ is the $y$ recovered in A: $164 / 4 = 41$. Compared with the advertised $45$,

$$
45 - 41 = 4
$$

so the actual monthly charge sits $4$ below the flyer.`,
      `**C) Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.**  (false)

The flyer's own rates over 6 months would total 30 + 6(45) = $300; Maria's real total of $284 is actually less than that, not more.

Run the flyer's advertised rule $30 + 45m$ at $m = 6$:

$$
30 + 6(45) = 30 + 270 = 300
$$

Maria actually paid $284$. $284 < 300$, so her real total does not exceed the flyer total.`,
      `**D) Jason paid more than $400 in total by his 10th payment.**  (true)

Jason's listed total is $448$. Since $448>400$, the claim follows directly.

Jason's real total is $448, indeed more than $400.

The same recovered rule $x + 10y$ rebuilds that listed total:

$$
38 + 10(41) = 38 + 410 = 448
$$

and $448 > 400$.`,
      `**E) A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay $492.**  (true)

12 \\times $41 = $492 exactly, a direct scaling of the confirmed real monthly rate with no signup fee included.

Drop $x$ and keep only the recovered monthly rate for a year:

$$
12 \\times 41 = 492
$$

That is the no-signup 12-month bill.`,
    ],
    difficulty_level: "3/5",
    sort_order: 21,
    solution_overview: `FITZONE GYM. NEW MEMBER SPECIAL! "Join for just a $30 signup fee, then only $45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid $284 total.

**Part 1: Building the system.**

Let $x =$ the signup fee actually charged, y = the actual monthly rate. The flyer's advertised figures ($30 and $45) are a claim to be checked, not values to plug directly into the model.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Maria.** That observation becomes:

$$
x + 6y = 284
$$

**2. Translate: Jason.** That observation becomes:

$$
x + 10y = 448
$$

**Part 2: The model.**

$$
x + 6y = 284 \\tag{1}
$$

$$
x + 10y = 448 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting Jason minus Maria:

$$
(x + 10y) - (x + 6y) = 448 - 284 \\Rightarrow 4y = 164 \\Rightarrow y = 41
$$

**2.** Substituting back into Maria's history:

$$
x + 6(41) = 284 \\Rightarrow x + 246 = 284 \\Rightarrow x = 38
$$

**Answer.** Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)`,
  },
  {
    id: "math-5-22",
    case_id: "MATH 5.22",
    title: `StreamPlus  -  Household Billing Comparison`,
    context: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Customer service pulled combined billing records mixing plan-months across two households.`,
    tables_markdown: `| Household | Basic-Months | Premium-Months | Combined Total |
| --- | --- | --- | --- |
| Household 1 | 4 | 3 | $169 |
| Household 2 | 2 | 7 | $255 |`,
    statements: [
      `The Basic plan costs $19 per month.`,
      `The Premium plan costs $35 per month.`,
      `Household 2's combined total is more than double Household 1's combined total.`,
      `There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.`,
      `A household billed for 5 months of Basic and 5 months of Premium would owe a combined $250.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The Basic plan costs $19 per month.**  (true)

Elimination gives $22x=418$. Therefore $x=19$ dollars per Basic plan-month.

Solving the system gives x = $19 exactly, consistent with both households' combined bills.

The two mixed bills are $4x + 3y = 169$ and $2x + 7y = 255$. Multiply the first by 7 and the second by 3 so the Premium terms match ($21y$), then subtract:

$$
(28x + 21y) - (6x + 21y) = 1183 - 765 \\Rightarrow 22x = 418 \\Rightarrow x = 19
$$

Household 1 then rebuilds as $4(19) + 3y = 169$.`,
      `**B) The Premium plan costs $35 per month.**  (false)

After finding Basic at $19$, $4(19)+3y=169$ gives $3y=93$ and $y=31$. Premium is not $35$.

Premium actually costs $31/month, not $35; substituting an assumed 'round' value instead of finishing the elimination is a common shortcut.

Finish that last substitution instead of guessing $35$:

$$
76 + 3y = 169 \\Rightarrow 3y = 93 \\Rightarrow y = 31
$$

$31 \\ne 35$.`,
      `**C) Household 2's combined total is more than double Household 1's combined total.**  (false)

Household 2's total is $255, while double Household 1's total is $338; $255 falls short, so it is not more than double.

The table already prints both combined totals, so the comparison is just

$$
2 \\times 169 = 338
$$

and $255 < 338$. Household 2 is larger, but not twice as large.`,
      `**D) There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.**  (false)

Since neither plan carries a fixed fee, an n-month Basic bill costs 19n and Premium costs 31n. These are equal only when $n = 0$. There is no positive month count at which they ever match.

Set the two pure-plan bills equal:

$$
19n = 31n \\Rightarrow 0 = 12n \\Rightarrow n = 0
$$

A positive $n$ would require $19 = 31$.`,
      `**E) A household billed for 5 months of Basic and 5 months of Premium would owe a combined $250.**  (true)

5(19) + 5(31) = $250 exactly, a direct application of both confirmed monthly rates.

Equal months of each plan:

$$
5(19) + 5(31) = 95 + 155 = 250
$$

which is the claimed combined bill.`,
    ],
    difficulty_level: "3/5",
    sort_order: 22,
    solution_overview: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Customer service pulled combined billing records mixing plan-months across two households.

**Part 1: Building the system.**

Let $x =$ Basic monthly price, y = Premium monthly price.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides. Time coefficients come from the story's clocks (head-starts, overtime hours, or duration multipliers), not from the headline total alone.

**1. Record this independent observation.** In symbols:

$$
4x + 3y = 169
$$

**2. Record this independent observation.** In symbols:

$$
2x + 7y = 255
$$

**Part 2: The model.**

$$
4x + 3y = 169 \\tag{1}
$$

$$
2x + 7y = 255 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the first by 7 and the second by 3: $28x + 21y = 1183$; $6x + 21y = 765$.

**2.** Subtracting:

$$
(28x + 21y) - (6x + 21y) = 1183 - 765 \\Rightarrow 22x = 418 \\Rightarrow x = 19
$$

**3.** Substituting back into Household 1:

$$
4(19) + 3y = 169 \\Rightarrow 76 + 3y = 169 \\Rightarrow y = 31
$$

**Answer.** Basic = $19.00/month | Premium = $31.00/month`,
  },
  {
    id: "math-5-23",
    case_id: "MATH 5.23",
    title: `Willow Market  -  Grocery Receipts`,
    context: `Two items  -  organic apples and almond milk  -  recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.)`,
    tables_markdown: `| Receipt 1 | Qty | Price |
| --- | --- | --- |
| Bread (loaf) | 1 | $3.60 |
| Eggs (dozen) | 1 | $4.40 |
| Organic Apples (lb) | 5 | ? |
| Almond Milk (carton) | 3 | ? |
| Receipt Total |  | $50.00 |
| Receipt 2 | Qty | Price |
| Bread (loaf) | 1 | $3.60 |
| Organic Apples (lb) | 2 | ? |
| Almond Milk (carton) | 5 | ? |
| Receipt Total |  | $43.20 |`,
    statements: [
      `Organic apples cost $4.80 per pound.`,
      `Almond milk costs less than organic apples, per unit.`,
      `Five pounds of apples costs exactly the same as four cartons of almond milk.`,
      `If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than $47.00.`,
      `Buying 10 lb of apples and 2 cartons of milk together costs more than $60.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) Organic apples cost $4.80 per pound.**  (true)

After known items are removed, elimination gives $19x=91.20$. Hence $x=4.80$ per pound.

After removing the known bread and egg prices, solving the resulting system gives exactly $4.80/lb.

Receipt 1 still has bread and eggs on it, so peel those first: $50.00 - 3.60 - 4.40 = 42.00$, leaving $5x + 3y = 42$. Receipt 2 peels only bread: $43.20 - 3.60 = 39.60$, leaving $2x + 5y = 39.60$. Multiply the first leftover by 5 and the second by 3, then subtract the $15y$ terms:

$$
(25x + 15y) - (6x + 15y) = 210 - 118.80 \\Rightarrow 19x = 91.20 \\Rightarrow x = 4.80
$$

That is the apple price the two unknown columns share.`,
      `**B) Almond milk costs less than organic apples, per unit.**  (false)

Almond milk costs $6$ per carton, while apples cost $4.80$ per pound. Numerically, $6>4.80$.

Almond milk is actually the more expensive item, $6.00/carton versus apples' $4.80/lb. The reverse of the claim.

From $5(4.80) + 3y = 42$:

$$
24 + 3y = 42 \\Rightarrow 3y = 18 \\Rightarrow y = 6
$$

$6.00 > 4.80$, so milk is the dearer unit, not the cheaper one.`,
      `**C) Five pounds of apples costs exactly the same as four cartons of almond milk.**  (true)

5(4.80) = $24.00 and 4(6.00) = $24.00. Exactly equal, not just close.

The two recovered prices make that identity immediate:

$$
5(4.80) = 24.00, \\qquad 4(6.00) = 24.00
$$

Five pounds and four cartons land on the same $24$.`,
      `**D) If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than $47.00.**  (false)

A 5% discount on $50$ is $2.50$. The reduced total would be $50-2.50=47.50$, which is above $47$.

Receipt 1 printed $50.00$ with no loyalty card. Five percent off that printed total is

$$
50.00 \\times 0.05 = 2.50, \\qquad 50.00 - 2.50 = 47.50
$$

$47.50$ is still above $47$, so the discounted bill would not have fallen below the claimed cutoff.`,
      `**E) Buying 10 lb of apples and 2 cartons of milk together costs more than $60.**  (false)

The cost is $10(4.80)+2(6)=48+12=60$. It equals $60$; it does not exceed it.

$$
10(4.80) + 2(6) = 48 + 12 = 60
$$

Equal to $60$ is not "more than $60$".`,
    ],
    difficulty_level: "3/5",
    sort_order: 23,
    solution_overview: `Two items, organic apples and almond milk, recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.).

**Part 1: Building the system.**

Let $x =$ current price per lb of organic apples, y = current price per carton of almond milk. Bread and egg prices are already known, and the loyalty-discount note is a distractor that does not apply here.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $5x + 3y = 50.00 - 3.60 - 4.40 = 42.00$. The clean system equation is:

$$
5x + 3y = 42.00
$$

**2. Peel the fixed fee/tax, then write the food×price row.** Start from the printed total: $2x + 5y = 43.20 - 3.60 = 39.60$. The clean system equation is:

$$
2x + 5y = 39.60
$$

**Part 2: The model.**

$$
5x + 3y = 42.00 \\tag{1}
$$

$$
2x + 5y = 39.60 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the first by 5 and the second by 3: $25x + 15y = 210$; $6x + 15y = 118.80$.

**2.** Subtracting:

$$
(25x + 15y) - (6x + 15y) = 210 - 118.80 \\Rightarrow 19x = 91.20 \\Rightarrow x = 4.80
$$

**3.** Substituting back into the first leftover:

$$
5(4.80) + 3y = 42.00 \\Rightarrow 24.00 + 3y = 42.00 \\Rightarrow y = 6.00
$$

**Answer.** Organic apples = $4.80/lb | Almond milk = $6.00/carton`,
  },
  {
    id: "math-5-24",
    case_id: "MATH 5.24",
    title: `BrightHome Energy  -  Monthly Utility Bills`,
    context: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is $0.24/unit, unverified against real data. BrightHome also offers a Solar Offset Plan with no connection fee, at a flat $0.29/unit.`,
    tables_markdown: `| Bill | Units Consumed | Total Charge |
| --- | --- | --- |
| Bill 1 | 240 | $83.40 |
| Bill 2 | 380 | $112.80 |`,
    statements: [
      `The fixed connection fee is $33.`,
      `Customer service's claimed rate of $0.24 per unit is correct.`,
      `At 280 units of usage, the standard plan costs less than $95.`,
      `The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.`,
      `At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The fixed connection fee is $33.**  (true)

At 240 units, usage costs $240(0.21)=50.40$. Subtracting from $83.40$ leaves $33$.

Subtracting the two bills isolates y first, and back-substitution confirms a $33.00 fixed fee exactly.

The standard plan is $x + yu$. Bill 1 and Bill 2 give $x + 240y = 83.40$ and $x + 380y = 112.80$. Their difference is 140 units of usage:

$$
140y = 112.80 - 83.40 = 29.40 \\Rightarrow y = 0.21
$$

Then $x + 240(0.21) = 83.40$ is $x + 50.40 = 83.40$, so $x = 33$.`,
      `**B) Customer service's claimed rate of $0.24 per unit is correct.**  (false)

The bill difference is $112.80-83.40=29.40$ for $380-240=140$ extra units. Thus the rate is $29.40\\div140=0.21$.

The actual rate is $0.21/unit, not the claimed $0.24. The phone figure was never checked against real bills until now.

That $0.21$ is the $y$ from A. Customer service quoted $0.24$, and $0.21 \\ne 0.24$. Using the claimed rate on Bill 1 would have produced $33 + 240(0.24) = 33 + 57.60 = 90.60$, which is not the printed $83.40$.`,
      `**C) At 280 units of usage, the standard plan costs less than $95.**  (true)

The standard bill is $33+280(0.21)=33+58.80=91.80$. Since $91.80<95$, the claim is true.

The recovered standard model is $33 + 0.21u$. At $u = 280$:

$$
33 + 0.21 \\cdot 280 = 33 + 58.80 = 91.80
$$

$91.80$ sits $3.20$ under $95$.`,
      `**D) The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.**  (false)

Solar is $0.29u$, while standard is $33+0.21u$. They meet at $412.5$ units; above that, standard's lower rate wins.

The two plans cross at 412.5 units: below that, Solar is cheaper, but above it the standard plan's lower rate wins out.

Set the two formulas equal and solve for the crossover usage $u$:

$$
33 + 0.21u = 0.29u
$$

$$
33 = 0.08u
$$

$$
u = \\frac{33}{0.08} = 412.5
$$

Solar has no connection fee, so it wins for $0 < u < 412.5$. Past $412.5$ units the standard plan's cheaper per-unit rate takes over. The claim that Solar wins at every positive usage is therefore false.`,
      `**E) At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.**  (false)

The two models are standard $33 + 0.21u$ and Solar $0.29u$. They meet where $33 + 0.21u = 0.29u$, which rearranges to $33 = 0.08u$ and $u = 412.5$. Five hundred units sits above that crossover, so the lower-rate standard plan should already be cheaper. Check by substituting $u = 500$ into each formula:

$$
33 + 0.21 \\cdot 500 = 33 + 105 = 138
$$

$$
0.29 \\cdot 500 = 145
$$

Standard's $138$ undercuts Solar's $145$, so Solar is not the cheaper plan at 500 units.`,
    ],
    difficulty_level: "3/5",
    sort_order: 24,
    solution_overview: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is $0.24/unit, unverified against real data.

**Part 1: Building the system.**

Let $x =$ fixed connection fee, y = rate per unit under the standard plan. Treat the $0.24/unit figure as a claim to verify.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Read the bill with 240 extra units.** At rate $y$, that bill is:

$$
x + 240y = 83.40
$$

**2. Read the bill with 380 extra units.** At rate $y$, that bill is:

$$
x + 380y = 112.80
$$

**Part 2: The model.**

$$
x + 240y = 83.40 \\tag{1}
$$

$$
x + 380y = 112.80 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting Bill 2 minus Bill 1:

$$
(x + 380y) - (x + 240y) = 112.80 - 83.40
$$

$$
140y = 29.40 \\Rightarrow y = 0.21
$$

**2.** Substituting back into Bill 1:

$$
x + 240(0.21) = 83.40 \\Rightarrow x + 50.40 = 83.40 \\Rightarrow x = 33.00
$$

**3.** Crossover with Solar ($0.29u$, no connection fee):

$$
33 + 0.21u = 0.29u \\Rightarrow 33 = 0.08u \\Rightarrow u = 412.5
$$

**Answer.** Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)`,
  },
  {
    id: "math-5-25",
    case_id: "MATH 5.25",
    title: `Trattoria Bella  -  Off-Peak vs. Peak Bills`,
    context: `Trattoria Bella serves pasta and appetizers at consistent prices. Off-peak tables carry no service fee; peak tables automatically have a 10% service charge added before the bill is printed. Table 5 (off-peak) printed $174.00 for 6 pasta + 4 appetizers, with no fee. Table 8 (peak, fee already included) came to $46.00 more than Table 5's total, for 5 pasta + 7 appetizers.`,
    statements: [
      `A pasta dish costs $19.`,
      `An appetizer costs more than a pasta dish.`,
      `Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly $26.00.`,
      `If Table 5 had also been charged the 10% peak-hour service fee, its total would have been $191.40.`,
      `Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than $150.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) A pasta dish costs $19.**  (true)

After Table 8's fee is removed, solving the menu system gives $x=19$. Substitution also gives appetizer price $y=15$.

Once Table 8's total is reconstructed and the fee removed, elimination gives x = $19.00 exactly, confirmed by both tables.

Table 5 is already a clean food total: $6x + 4y = 174$. Table 8 printed $46$ more than that, so its fee-included total is $174 + 46 = 220$; strip the 10% service charge by dividing: $220 / 1.10 = 200$. The food system is then $6x + 4y = 174$ and $5x + 7y = 200$. Halve the first, multiply by 7, and subtract twice the second:

$$
(21x + 14y) - (10x + 14y) = 609 - 400 \\Rightarrow 11x = 209 \\Rightarrow x = 19
$$

Pasta is $19$.`,
      `**B) An appetizer costs more than a pasta dish.**  (false)

An appetizer costs $15$, while pasta costs $19$. Since $15<19$, the appetizer is cheaper.

The appetizer is actually cheaper, at $15.00, versus the pasta dish's $19.00. The reverse of the claim.

From the halved Table 5 equation $3x + 2y = 87$ and $x = 19$:

$$
3(19) + 2y = 87 \\Rightarrow 57 + 2y = 87 \\Rightarrow y = 15
$$

$15 < 19$, so an appetizer is not the more expensive dish.`,
      `**C) Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly $26.00.**  (true)

The pre-tax subtotal is $200.00 against Table 5's $174.00. A gap of exactly $26.00, different from the printed $46.00 gap, which was measured after Table 8's service charge was added.

Table 8's printed total is $174 + 46 = 220$. Undo the 10% charge:

$$
\\frac{220}{1.10} = 200
$$

Then $200 - 174 = 26$. The $46$ printed gap is the post-fee comparison; the food-only gap is $26$.`,
      `**D) If Table 5 had also been charged the 10% peak-hour service fee, its total would have been $191.40.**  (true)

174.00 \\times 1.10 = $191.40, applying the same 10% multiplier used to strip the charge from Table 8.

Table 5's food total is already $174$. Attach the peak multiplier:

$$
174.00 \\times 1.10 = 191.40
$$

That is the billed total Table 5 would have shown as a peak table.`,
      `**E) Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than $150.**  (true)

Subtotal = 4(19) + 4(15) = $136.00; with the 10% charge, 136 \\times 1.10 = $149.60, just under $150. A close call rewarding exact decimals over early rounding.

Food first, then the 10% peak charge:

$$
4(19) + 4(15) = 76 + 60 = 136
$$

$$
136 \\times 1.10 = 149.60
$$

$149.60 < 150$.`,
    ],
    difficulty_level: "3/5",
    sort_order: 25,
    solution_overview: `Trattoria Bella serves pasta and appetizers at consistent prices. Off-peak tables carry no service fee; peak tables automatically have a 10% service charge added before the bill is printed.

**Part 1: Building the system.**

Let $x =$ price of one pasta dish, y = price of one appetizer. Table 8's total must first be reconstructed as Table 5's total plus $46.00, and only then can the 10% service charge be stripped back out.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
6x + 4y = 174.00
$$

**2. Record this independent observation.** In symbols:

$$
5x + 7y = (174.00 + 46.00) ÷ 1.10 = 200.00
$$

**Part 2: The model.**

$$
6x + 4y = 174.00 \\tag{1}
$$

$$
5x + 7y = (174.00 + 46.00) ÷ 1.10 = 200.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Table 5's equation by 2: $3x + 2y = 87$.

**2.** Multiply by 7: $21x + 14y = 609$.

**3.** Multiply Table 8's equation by 2: $10x + 14y = 400$.

**4.** Subtracting:

$$
(21x + 14y) - (10x + 14y) = 609 - 400 \\Rightarrow 11x = 209 \\Rightarrow x = 19
$$

**5.** Substituting back into $3x + 2y = 87$:

$$
3(19) + 2y = 87 \\Rightarrow 57 + 2y = 87 \\Rightarrow y = 15
$$

**Answer.** Pasta dish = $19.00 | Appetizer = $15.00`,
  },
  {
    id: "math-5-26",
    case_id: "MATH 5.26",
    title: `Meridian Distribution  -  Warehouse Inventory Summary`,
    context: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost  -  but only item counts and cost determine unit pricing.`,
    tables_markdown: `| Shipment | Item M Units | Item N Units | Wt. M (kg) | Wt. N (kg) | Cost |
| --- | --- | --- | --- | --- | --- |
| Shipment 1 | 110 | 80 | 2.4 | 1.7 | $4,470 |
| Shipment 2 | 70 | 150 | 2.4 | 1.7 | $5,520 |`,
    statements: [
      `Item M costs $21 per unit.`,
      `Item N costs $30 per unit.`,
      `Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.`,
      `150 units of Item N alone would cost $4,050.`,
      `Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Item M costs $21 per unit.**  (true)

Elimination gives $109x=2289$. Therefore $x=21$ dollars per M unit.

The elimination confirms $21.00 per unit for Item M, consistent with both shipments.

Cost depends on counts, not the weight columns: $110x + 80y = 4470$ and $70x + 150y = 5520$. Divide by 10, then multiply by 15 and 8 so the $y$ terms match at $120y$:

$$
(165x + 120y) - (56x + 120y) = 6705 - 4416 \\Rightarrow 109x = 2289 \\Rightarrow x = 21
$$

Both shipments rebuild with that $x$.`,
      `**B) Item N costs $30 per unit.**  (false)

With $x=21$, the reduced first equation becomes $231+8y=447$. Thus $8y=216$ and $y=27$, not $30$.

Item N actually costs $27, not $30; scanning the weight and volume columns for a price signal is a common but irrelevant distraction.

Finish the substitution on $11x + 8y = 447$:

$$
11(21) + 8y = 447 \\Rightarrow 231 + 8y = 447 \\Rightarrow 8y = 216 \\Rightarrow y = 27
$$

$27$ is the N price; $30$ is not.`,
      `**C) Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.**  (false)

Shipment 1 averages $4470\\div190\\approx23.53$ per item. Shipment 2 averages $5520\\div220\\approx25.09$, so the averages differ.

Each shipment's item count is the sum of its two columns:

$$
\\frac{4470}{110 + 80} = \\frac{4470}{190} \\approx 23.53
$$

$$
\\frac{5520}{70 + 150} = \\frac{5520}{220} = 25.09\\overline{09}
$$

The two averages are not the same number.`,
      `**D) 150 units of Item N alone would cost $4,050.**  (true)

Item N costs $27$ each. Thus $150(27)=4050$.

150(27) = $4,050 exactly, scaling the confirmed unit price for Item N.

$$
150 \\times 27 = 4050
$$

No Item M is in that order, so the $21$ price never enters.`,
      `**E) Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.**  (false)

The cost equations use only item counts and the $21$ and $27$ unit prices. Weight is not a coefficient in either cost model.

Shipment cost is determined entirely by item quantities and unit prices; the weight/volume figures are freight-billing data logged separately and play no causal role in the total, despite sitting right next to it.

The two cost identities are $110(21) + 80(27) = 2310 + 2160 = 4470$ and $70(21) + 150(27) = 1470 + 4050 = 5520$. Weight never appears. Shipment 1 is cheaper because it bought a cheaper mix of units, not because $110(2.4) + 80(1.7) = 400$ kg happens to sit below Shipment 2's $70(2.4) + 150(1.7) = 423$ kg.`,
    ],
    difficulty_level: "3/5",
    sort_order: 26,
    solution_overview: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost, but only item counts and cost determine unit pricing.

**Part 1: Building the system.**

Let $x =$ cost per unit of Item M, y = cost per unit of Item N. Weight and volume are logged for freight billing and play no role in the item pricing itself.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
110x + 80y = 4470
$$

**2. Record this independent observation.** In symbols:

$$
70x + 150y = 5520
$$

**Part 2: The model.**

$$
110x + 80y = 4470 \\tag{1}
$$

$$
70x + 150y = 5520 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide by 10: $11x + 8y = 447$; $7x + 15y = 552$.

**2.** Multiply by 15 and 8: $165x + 120y = 6705$; $56x + 120y = 4416$.

**3.** Subtracting:

$$
(165x + 120y) - (56x + 120y) = 6705 - 4416 \\Rightarrow 109x = 2289 \\Rightarrow x = 21
$$

**4.** Substituting back into $11x + 8y = 447$:

$$
11(21) + 8y = 447 \\Rightarrow 231 + 8y = 447 \\Rightarrow y = 27
$$

**Answer.** Item M = $21.00/unit | Item N = $27.00/unit`,
  },
  {
    id: "math-5-27",
    case_id: "MATH 5.27",
    title: `Green Horizons Landscaping  -  Job Quotation`,
    context: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly. Job 1: 7 bundles  -  Total $1,946. Job 2: 13 Standard + 21 Premium  -  Total $1,301. New Quotation: 8 Standard + 19 Premium  -  Quoted Total: $1,068.`,
    statements: [
      `Standard planting costs $29 per unit.`,
      `Premium planting costs $50 per unit.`,
      `Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.`,
      `The Premium portion alone of Job 1 cost more than the entirety of Job 2.`,
      `The new quotation of $1,068 is mathematically consistent with the confirmed rates.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Standard planting costs $29 per unit.**  (true)

After expanding Job 1, elimination yields $x=29$. The original Job 1 total checks as $14(29)+35(44)=1946$.

Elimination confirms x = $29 exactly, once Job 1's bundles are correctly expanded into individual units.

Each Job 1 bundle is 2 Standard + 5 Premium, so 7 bundles become $14x + 35y = 1946$. Job 2 is already in units: $13x + 21y = 1301$. Divide Job 1 by 7 to get $2x + 5y = 278$, multiply that by 21 and Job 2 by 5, then subtract the $105y$ terms:

$$
(65x + 105y) - (42x + 105y) = 6505 - 5838 \\Rightarrow 23x = 667 \\Rightarrow x = 29
$$

Check: $14(29) + 35(44) = 406 + 1540 = 1946$.`,
      `**B) Premium planting costs $50 per unit.**  (false)

Using $x=29$ in $2x+5y=278$ gives $58+5y=278$. Therefore $y=44$, not $50$.

Premium actually prices at $44, not $50; a likely slip is treating an intermediate elimination value as the finished answer.

$$
2(29) + 5y = 278 \\Rightarrow 58 + 5y = 278 \\Rightarrow 5y = 220 \\Rightarrow y = 44
$$

$44 \\ne 50$.`,
      `**C) Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.**  (true)

7 bundles \\times 2 Standard = 14, and 7 bundles \\times 5 Premium = 35. The conversion needed before Job 1 can enter the model at all.

One bundle is defined as 2 Standard + 5 Premium, so seven of them unpack as

$$
7 \\times 2 = 14, \\qquad 7 \\times 5 = 35
$$

Those are the coefficients that belong in Job 1's equation.`,
      `**D) The Premium portion alone of Job 1 cost more than the entirety of Job 2.**  (true)

Job 1's Premium portion alone is 35(44) = $1,540, indeed more than Job 2's entire total of $1,301. A single line item from one job can outweigh a whole other job.

Job 1's Premium share uses the recovered $y = 44$ and the expanded count 35:

$$
35 \\times 44 = 1540
$$

Job 2's whole invoice is $1301$, and $1540 > 1301$.`,
      `**E) The new quotation of $1,068 is mathematically consistent with the confirmed rates.**  (true)

The quoted 8(29) + 19(44) = $1,068 matches the issued quotation exactly, so it is internally consistent with the confirmed rates.

Rebuild the quoted mix from $x = 29$ and $y = 44$:

$$
8(29) + 19(44) = 232 + 836 = 1068
$$

The issued $1,068$ is exactly that total.`,
    ],
    difficulty_level: "3/5",
    sort_order: 27,
    solution_overview: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly.

**Part 1: Building the system.**

Let $x =$ price per Standard unit, y = price per Premium unit. Job 1's bundles must first be converted into individual Standard and Premium units before the system can be written.

Time coefficients come from the story's clocks (head-starts, overtime hours, or duration multipliers), not from the headline total alone.

**1. Translate: Job 1, bundles expanded: 7×2, 7×5.** That observation becomes:

$$
14x + 35y = 1946
$$

**2. Translate: Job 2, as invoiced.** That observation becomes:

$$
13x + 21y = 1301
$$

**Part 2: The model.**

$$
14x + 35y = 1946 \\tag{1}
$$

$$
13x + 21y = 1301 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Job 1's equation by 7: $2x + 5y = 278$.

**2.** Multiply by 21 and Job 2's by 5: $42x + 105y = 5838$; $65x + 105y = 6505$.

**3.** Subtracting:

$$
(65x + 105y) - (42x + 105y) = 6505 - 5838 \\Rightarrow 23x = 667 \\Rightarrow x = 29
$$

**4.** Substituting back into $2x + 5y = 278$:

$$
2(29) + 5y = 278 \\Rightarrow 58 + 5y = 278 \\Rightarrow y = 44
$$

**5.** Check the new quotation:

$$
8(29) + 19(44) = 232 + 836 = 1068
$$

**Answer.** Standard = $29.00/unit | Premium = $44.00/unit`,
  },
  {
    id: "math-5-28",
    case_id: "MATH 5.28",
    title: `Horizon Consulting  -  Travel Reimbursement Memo`,
    context: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is $0.40/mile, unconfirmed against payroll data. One of three reports contains a data-entry error making it financially impossible.`,
    tables_markdown: `| Report | Meal Days | Miles Driven | Total Reimbursed |
| --- | --- | --- | --- |
| Report 1 | 5 | 150 | $323 |
| Report 2 | 3 | 250 | $245 |
| Report 3 | 7 | 40 | $120 |`,
    statements: [
      `The per diem is $55 per day.`,
      `Finance's belief that the mileage rate is $0.40/mile is correct.`,
      `Report 3 is impossible, since 7 meal days alone would require at least $385 at the confirmed per-diem rate  -  far more than its reported $120 total.`,
      `Report 1's total exceeds Report 2's total by more than $80.`,
      `Reports 1 and 2 combined reimbursed at least $550.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The per diem is $55 per day.**  (true)

Using the valid reports gives $y=0.32$ per mile. Report 1 then gives $5x+150(0.32)=323$, so $5x=275$ and $x=55$.

Using Reports 1 and 2 (Report 3 set aside as impossible), elimination gives a per diem of exactly $55.00.

Reports 1 and 2 are $5x + 150y = 323$ and $3x + 250y = 245$. Multiply by 3 and 5 so the $x$ terms match at $15x$, then subtract:

$$
(15x + 1250y) - (15x + 450y) = 1225 - 969 \\Rightarrow 800y = 256 \\Rightarrow y = 0.32
$$

Back into Report 1: $5x + 150(0.32) = 323$ is $5x + 48 = 323$, so $5x = 275$ and $x = 55$.`,
      `**B) Finance's belief that the mileage rate is $0.40/mile is correct.**  (false)

Elimination gives $800y=256$. Thus $y=0.32$, which is $0.08$ below Finance's claimed rate.

The mileage rate is actually $0.32/mile, not the claimed $0.40. The belief was never checked against the underlying reports until now.

$$
y = \\frac{256}{800} = 0.32
$$

Finance quoted $0.40$, and $0.32$ is $0.08$ short of that quoted rate.`,
      `**C) Report 3 is impossible, since 7 meal days alone would require at least $385 at the confirmed per-diem rate  -  far more than its reported $120 total.**  (true)

At $55/day, 7 meal days alone would need $385, already far above Report 3's $120 total before a single mile is counted. That confirms it as the report that had to be excluded.

The per diem recovered from the two consistent reports is $x = 55$. Seven meal days, ignoring miles entirely, already cost

$$
7 \\times 55 = 385
$$

Report 3 lists only $120$. Even with zero miles, $385 > 120$, so that row cannot be a valid reimbursement.`,
      `**D) Report 1's total exceeds Report 2's total by more than $80.**  (false)

Report 1's total is $323 and Report 2's is $245, a gap of exactly $78. Not more than $80, only just short of it.

The two printed totals differ by

$$
323 - 245 = 78
$$

$78$ is less than $80$, so the gap does not clear the claimed threshold.`,
      `**E) Reports 1 and 2 combined reimbursed at least $550.**  (true)

323 + 245 = $568, which does satisfy 'at least $550,' unlike statement D's stricter '$80' gap, which narrowly fails.

Add the two valid reports:

$$
323 + 245 = 568
$$

$568 \\ge 550$.`,
    ],
    difficulty_level: "3/5",
    sort_order: 28,
    solution_overview: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is $0.40/mile, unconfirmed against payroll data.

**Part 1: Building the system.**

Let $x =$ per-diem rate, y = per-mile rate. Identify which report cannot possibly be correct before building the model, and treat Finance's $0.40/mile belief as a claim to be checked.

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Report 1.** That observation becomes:

$$
5x + 150y = 323
$$

**2. Translate: Report 2.** That observation becomes:

$$
3x + 250y = 245
$$

**Part 2: The model.**

$$
5x + 150y = 323 \\tag{1}
$$

$$
3x + 250y = 245 \\tag{2}
$$

**Part 3: Solve.**

**1.** Report 3 must be checked before use. Once $x = 55$ is in hand, 7 meal days alone cost $7 \\times 55 = 385$, already far above the reported $120$, so that row is set aside as an entry error. (Even before solving, any per diem in the same range as Reports 1 and 2 already overshoots $120$.)

**2.** Multiply the remaining two equations by 3 and 5: $15x + 450y = 969$; $15x + 1250y = 1225$.

**3.** Subtracting:

$$
(15x + 1250y) - (15x + 450y) = 1225 - 969 \\Rightarrow 800y = 256 \\Rightarrow y = 0.32
$$

**4.** Substituting back into Report 1:

$$
5x + 150(0.32) = 323 \\Rightarrow 5x + 48 = 323 \\Rightarrow x = 55
$$

**Answer.** Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)`,
  },
  {
    id: "math-5-29",
    case_id: "MATH 5.29",
    title: `Cedarline Manufacturing  -  Weekly Production Log`,
    context: `Cedarline assembles Widget A and Widget B on the same line, each requiring a fixed number of labor-hours. Week 1's log is fully legible. Week 2's log is smudged: unit counts are gone, but a sticky note reads "8 more Widget B than Widget A, 58 units total, using 505 labor- hours." Week 3 is water-damaged: the Widget A count is illegible.`,
    tables_markdown: `| Week | Widget A | Widget B | Total Labor-Hours |
| --- | --- | --- | --- |
| Week 1 | 35 | 20 | 445 |
| Week 2 | (see note) | (see note) | 505 |
| Week 3 | (illegible) | 15 | 290 |`,
    statements: [
      `Widget A requires 7 hours of labor to assemble.`,
      `Widget B requires 12 hours of labor to assemble.`,
      `Week 2 actually produced 25 Widget A units and 33 Widget B units.`,
      `If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.`,
      `The illegible Week 3 entry can be reconstructed as 20 Widget A units.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Widget A requires 7 hours of labor to assemble.**  (true)

Using Week 1 and recovered Week 2 counts, elimination gives $x=7$. Week 1 then has $35(7)+20(10)=445$.

Solving the recovered two-week system gives exactly 7 hours per Widget A, confirmed against both weeks' totals.

Week 2's counts come from the sticky note first (see C): 25 A and 33 B. Then Week 1 and Week 2 are $35x + 20y = 445$ and $25x + 33y = 505$. Multiply by 33 and 20 so the $y$ terms match at $660y$, and subtract:

$$
(1155x + 660y) - (500x + 660y) = 14685 - 10100 \\Rightarrow 655x = 4585 \\Rightarrow x = 7
$$

Week 1 rebuilds as $35(7) + 20(10) = 245 + 200 = 445$.`,
      `**B) Widget B requires 12 hours of labor to assemble.**  (false)

After $x=7$, Week 1 gives $245+20y=445$. Thus $20y=200$ and $y=10$, not $12$.

Widget B actually needs 10 hours, not 12; a common mistake is mixing up which coefficient belongs to A and which to B partway through elimination.

$$
35(7) + 20y = 445 \\Rightarrow 245 + 20y = 445 \\Rightarrow 20y = 200 \\Rightarrow y = 10
$$

Ten hours per B, not twelve.`,
      `**C) Week 2 actually produced 25 Widget A units and 33 Widget B units.**  (true)

From B = A + 8 and $A + B = 58$, substitution gives $2A + 8 = 58$, so $A = 25$ and $B = 33$. The counts must be recovered this way before Week 2 can be used at all.

The sticky note is a small sum-and-difference system of its own:

$$
B = A + 8, \\qquad A + B = 58
$$

Substitute: $A + (A + 8) = 58$, so $2A + 8 = 58$, $2A = 50$, $A = 25$, and $B = 33$.`,
      `**D) If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.**  (false)

A 20% rise in Widget A's hours (7 \\to 8.4) raises Week 1's total from 445 to 494, an increase of only about 11%, not 20%. Widget A's hours are only part of the week's total time.

The new A time is $7 \\times 1.20 = 8.4$. Week 1 would then use

$$
35(8.4) + 20(10) = 294 + 200 = 494
$$

The relative increase is $(494 - 445) / 445 = 49 / 445 \\approx 0.110$, about 11%, not 20%. A 20% lift on only one of the two products cannot scale the whole week by 20%.`,
      `**E) The illegible Week 3 entry can be reconstructed as 20 Widget A units.**  (true)

Substituting the surviving Widget B count and total hours into the confirmed model, 7A + 10(15) = 290, gives $A = 20$. A legitimate reconstruction, not a guess.

Week 3 still shows 15 Widget B and 290 hours. With $x = 7$ and $y = 10$:

$$
7A + 10(15) = 290 \\Rightarrow 7A + 150 = 290 \\Rightarrow 7A = 140 \\Rightarrow A = 20
$$

That is the missing Widget A count.`,
    ],
    difficulty_level: "3/5",
    sort_order: 29,
    solution_overview: `Cedarline assembles Widget A and Widget B on the same line, each requiring a fixed number of labor-hours. Week 1's log is fully legible.

**Part 1: Building the system.**

Let $x =$ labor-hours per Widget A, y = labor-hours per Widget B. Week 2's unit counts must first be recovered from the sticky note (a small sum-and-difference step) before the main system can be written.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Week 1.** That observation becomes:

$$
35x + 20y = 445
$$

**2. Translate: Week 2, recovered counts.** That observation becomes:

$$
25x + 33y = 505
$$

**Part 2: The model.**

$$
35x + 20y = 445 \\tag{1}
$$

$$
25x + 33y = 505 \\tag{2}
$$

**Part 3: Solve.**

**1.** Recover Week 2 first:

$$
B = A + 8, \\qquad A + B = 58 \\Rightarrow 2A + 8 = 58 \\Rightarrow A = 25,\\ B = 33
$$

**2.** Multiply Week 1 by 33 and Week 2 by 20: $1155x + 660y = 14685$; $500x + 660y = 10100$.

**3.** Subtracting:

$$
(1155x + 660y) - (500x + 660y) = 14685 - 10100 \\Rightarrow 655x = 4585 \\Rightarrow x = 7
$$

**4.** Substituting back into Week 1:

$$
35(7) + 20y = 445 \\Rightarrow 245 + 20y = 445 \\Rightarrow y = 10
$$

**5.** Reconstruct Week 3:

$$
7A + 10(15) = 290 \\Rightarrow 7A = 140 \\Rightarrow A = 20
$$

**Answer.** Widget A = 7 hrs/unit | Widget B = 10 hrs/unit`,
  },
  {
    id: "math-5-30",
    case_id: "MATH 5.30",
    title: `Sterling Distributors  -  Regional Sales Dashboard`,
    context: `Sterling Distributors' dashboard reports quarterly unit sales and revenue for Products X and Y, sold at company-wide fixed prices, across three branches. Two of the three branch reports are known to reconcile correctly; the third contains an uncorrected data-entry error, though the dashboard does not indicate which one.`,
    tables_markdown: `| Branch | Product X Units | Product Y Units | Reported Revenue |
| --- | --- | --- | --- |
| North | 85 | 70 | $4,145 |
| South | 55 | 95 | $3,875 |
| East | 65 | 50 | $3,200 |`,
    statements: [
      `Product X is priced at $29.`,
      `Product Y is priced at $28.`,
      `The East branch's reported revenue is fully consistent with the derived prices.`,
      `If the East branch's reported revenue were corrected to reflect the derived prices, it should read $3,085.`,
      `North's reported revenue exceeds South's and East's reported revenues combined.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Product X is priced at $29.**  (true)

Using the reconciled North and South reports, elimination gives $169x=4901$. Therefore $x=29$.

Solving the North and South reports together gives x = $29 exactly, and this pair is internally consistent with each other.

North and South are $85x + 70y = 4145$ and $55x + 95y = 3875$. Divide by 5, then multiply by 19 and 14 so the $y$ terms match at $266y$:

$$
(323x + 266y) - (154x + 266y) = 15751 - 10850 \\Rightarrow 169x = 4901 \\Rightarrow x = 29
$$

Those two branches rebuild each other with this $x$, so they are the consistent pair.`,
      `**B) Product Y is priced at $28.**  (false)

Substituting $x=29$ into $17x+14y=829$ gives $493+14y=829$. Hence $14y=336$ and $y=24$.

Product Y prices out at $24, not $28; stopping partway through elimination and reading off an intermediate value is the likely source of this error.

$$
17(29) + 14y = 829 \\Rightarrow 493 + 14y = 829 \\Rightarrow 14y = 336 \\Rightarrow y = 24
$$

$24 \\ne 28$.`,
      `**C) The East branch's reported revenue is fully consistent with the derived prices.**  (false)

65(29) + 50(24) = $3,085, not the reported $3,200; that $115 gap is exactly the data-entry error the dashboard warns about, and East is the branch responsible.

East's counts at the North/South prices:

$$
65(29) + 50(24) = 1885 + 1200 = 3085
$$

The dashboard printed $3200$. The $115$ discrepancy ($3200 - 3085$) marks East as the broken row.`,
      `**D) If the East branch's reported revenue were corrected to reflect the derived prices, it should read $3,085.**  (true)

East sells 65 X units and 50 Y units. Its corrected revenue is $65(29)+50(24)=1885+1200=3085$.

The corrected East figure, using the derived prices, is $3,085, matching the calculation above.

That is the same rebuild as in C. Replace the printed $3,200$ with $3,085$ and East would sit on the same price pair as North and South.`,
      `**E) North's reported revenue exceeds South's and East's reported revenues combined.**  (false)

North reports $4145$. South and East report $3875+3200=7075$, which is much greater than $4145$.

North's reported revenue is $4,145, while South and East together report $7,075. North falls well short of that combined figure, despite being the single largest branch on its own.

Use the printed dashboard totals (the claim compares reported figures, not the corrected East):

$$
3875 + 3200 = 7075
$$

$4145 < 7075$, so North does not exceed the other two combined.`,
    ],
    difficulty_level: "3/5",
    sort_order: 30,
    solution_overview: `Sterling Distributors' dashboard reports quarterly unit sales and revenue for Products X and Y, sold at company-wide fixed prices, across three branches. Two of the three branch reports are known to reconcile correctly; the third contains an uncorrected data-entry error, though the dashboard does not indicate which one.

**Part 1: Building the system.**

Let $x =$ price of Product X, y = price of Product Y.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: North.** That observation becomes:

$$
85x + 70y = 4145
$$

**2. Translate: South.** That observation becomes:

$$
55x + 95y = 3875
$$

**Part 2: The model.**

$$
85x + 70y = 4145 \\tag{1}
$$

$$
55x + 95y = 3875 \\tag{2}
$$

**Part 3: Solve.**

**1.** North and South are used to derive the prices, since they reconcile with each other.

**2.** Divide by 5: $17x + 14y = 829$; $11x + 19y = 775$.

**3.** Multiply by 19 and 14: $323x + 266y = 15751$; $154x + 266y = 10850$.

**4.** Subtracting:

$$
(323x + 266y) - (154x + 266y) = 15751 - 10850 \\Rightarrow 169x = 4901 \\Rightarrow x = 29
$$

**5.** Substituting back into $17x + 14y = 829$:

$$
17(29) + 14y = 829 \\Rightarrow 493 + 14y = 829 \\Rightarrow y = 24
$$

**6.** Testing East:

$$
65(29) + 50(24) = 1885 + 1200 = 3085
$$

which does not match East's reported $3,200. The $115$ discrepancy reveals East as the erroneous branch.

**Answer.** Product X = $29.00/unit | Product Y = $24.00/unit`,
  },
  {
    id: "math-5-31",
    case_id: "MATH 5.31",
    title: `Riverside Hardware Supply  -  Two Fastener Invoices`,
    context: `Riverside Hardware Supply ships Type A Bolts and Type B Hinges by the case, at fixed per-case prices.`,
    tables_markdown: `| Invoice | Type A Cases | Type B Cases | Total |
| --- | --- | --- | --- |
| Invoice 1 | 9 | 13 | $527.45 |
| Invoice 2 | 7 | 19 | $657.35 |`,
    statements: [
      `Rounding Type A's case price up to the next whole dollar lands on exactly $19.00.`,
      `A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.`,
      `If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the $24 mark.`,
      `Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.`,
      `Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Rounding Type A's case price up to the next whole dollar lands on exactly $19.00.**  (true)

Type A costs $18.45 per case. Rounding $18.45 up to the next whole dollar gives $19.

Type A solves to $18.45; rounding up (ceiling) to the next whole dollar gives $19.00 exactly.

The two invoices are $9x + 13y = 527.45$ and $7x + 19y = 657.35$. Multiply the first by 19 and the second by 13:

$$
171x + 247y = 10021.55, \\qquad 91x + 247y = 8545.55
$$

Subtract to clear $y$:

$$
80x = 10021.55 - 8545.55 = 1476.00, \\qquad x = \\frac{1476.00}{80} = 18.45
$$

Ceiling of $18.45$ is the next integer $19$, so the claim holds.`,
      `**B) A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.**  (true)

The price gap is $27.80 − $18.45 = $9.35. That is greater than $9 and less than $10.

From Part A, $x = 18.45$. Put that back into Invoice 1:

$$
9(18.45) + 13y = 527.45
$$

$$
166.05 + 13y = 527.45, \\qquad 13y = 361.40, \\qquad y = 27.80
$$

The difference is then

$$
y - x = 27.80 - 18.45 = 9.35
$$

and $9 < 9.35 < 10$.`,
      `**C) If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the $24 mark.**  (true)

Invoice 2 has 7 + 19 = 26 cases and totals $657.35. Its equal per-case share is $657.35 ÷ 26 ≈ $25.28, which is above $24.

The equal-share formula is total divided by case count:

$$
7 + 19 = 26, \\qquad \\frac{657.35}{26} = 25.2827\\ldots
$$

That per-case figure sits above $24$, so the statement is true.`,
      `**D) Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.**  (false)

The prices are not close ($18.45 vs $27.80, a $9.35 gap), and the swapped order actually totals 13(18.45) + 9(27.80) = $490.05, not $527.45.

Swap the Invoice 1 counts while keeping the recovered prices:

$$
13(18.45) + 9(27.80) = 239.85 + 250.20 = 490.05
$$

Invoice 1's printed total is $527.45$. Because $490.05 \\ne 527.45$, swapping does change the bill. The $9.35$ gap is also far from "close together."`,
      `**E) Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.**  (false)

There is no bulk premium in a fixed-unit-price model: 16 Type A + 32 Type B is exactly the sum of both invoices' quantities, so its cost is necessarily exactly $527.45 + $657.35 = $1,184.80, not more.

Invoice 1 ships $9+7=16$ of Type A and $13+19=32$ of Type B. Under fixed unit prices the combined cost is just the sum of the two bills:

$$
16x + 32y = (9x + 13y) + (7x + 19y) = 527.45 + 657.35 = 1184.80
$$

A bulk premium would have to appear as an extra term, and none is in the model.`,
    ],
    difficulty_level: "3/5",
    sort_order: 31,
    solution_overview: `Riverside Hardware Supply ships Type A Bolts and Type B Hinges by the case, at fixed per-case prices.

**Part 1: Building the system.**

Let $x =$ price per case of Type A, y = price per case of Type B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
9x + 13y = 527.45
$$

**2. Record this independent observation.** In symbols:

$$
7x + 19y = 657.35
$$

**Part 2: The model.**

$$
9x + 13y = 527.45 \\tag{1}
$$

$$
7x + 19y = 657.35 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Invoice 1 by 19 and Invoice 2 by 13 so the $y$ terms both become $247y$:

$$
19(9x + 13y) = 19(527.45) \\Rightarrow 171x + 247y = 10021.55
$$

$$
13(7x + 19y) = 13(657.35) \\Rightarrow 91x + 247y = 8545.55
$$

**2.** Subtract the scaled Invoice 2 from the scaled Invoice 1:

$$
(171x + 247y) - (91x + 247y) = 10021.55 - 8545.55
$$

$$
80x = 1476.00 \\Rightarrow x = \\frac{1476.00}{80} = 18.45
$$

**3.** Substitute $x = 18.45$ into Invoice 1:

$$
9(18.45) + 13y = 527.45 \\Rightarrow 166.05 + 13y = 527.45
$$

$$
13y = 361.40 \\Rightarrow y = 27.80
$$

**Answer.** Type A costs $18.45 per case and Type B costs $27.80 per case.`
  },
  {
    id: "math-5-32",
    case_id: "MATH 5.32",
    title: `Swift Cargo Co. vs. a Flat-Rate Competitor`,
    context: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile. A competitor charges a flat $1.35 per mile with no dispatch fee at all.`,
    tables_markdown: `| Route | Miles | Total Charged by Swift Cargo |
| --- | --- | --- |
| Route 1 | 170 | $460.00 |
| Route 2 | 305 | $709.75 |`,
    statements: [
      `The dispatch fee sits exactly halfway between $145 and $146.`,
      `Per mile, Swift Cargo's rate is closer to $1.50 than to $2.00.`,
      `A 250-mile haul comes in five cents under six hundred and eight dollars.`,
      `At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of $270.`,
      `Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) The dispatch fee sits exactly halfway between $145 and $146.**  (true)

The dispatch fee is $145.50. It is exactly halfway between $145.00 and $146.00.

Swift's two routes give $x + 170y = 460.00$ and $x + 305y = 709.75$. Subtract the first from the second:

$$
(305 - 170)y = 709.75 - 460.00 \\Rightarrow 135y = 249.75 \\Rightarrow y = \\frac{249.75}{135} = 1.85
$$

Then $x + 170(1.85) = 460.00$, so $x + 314.50 = 460.00$ and $x = 145.50$. Halfway from $145$ to $146$ is $(145+146)/2 = 145.50$, matching the fee.`,
      `**B) Per mile, Swift Cargo's rate is closer to $1.50 than to $2.00.**  (false)

Swift's rate is $1.85 per mile. It is $0.15 from $2.00 but $0.35 from $1.50, so it is closer to $2.00.

Rebuild the expression from the solved system rather than treating a coefficient, fee, or converted unit as if it were already the final answer.

The per-mile rate recovered above is $y = 1.85$. Distances to the two reference prices:

$$
|1.85 - 1.50| = 0.35, \\qquad |1.85 - 2.00| = 0.15
$$

Because $0.15 < 0.35$, the rate is closer to $2.00$, and the claim is false.`,
      `**C) A 250-mile haul comes in five cents under six hundred and eight dollars.**  (false)

At 250 miles, Swift costs $145.50 + 250($1.85) = $608.00. That is exactly $608, not five cents under.

Plug the recovered fee and rate into Swift's formula at $d = 250$:

$$
x + 250y = 145.50 + 250(1.85) = 145.50 + 462.50 = 608.00
$$

The bill is exactly $608.00$, not $607.95$.`,
      `**D) At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of $270.**  (true)

The competitor charges 250($1.35) = $337.50. Swift costs $608.00, so the competitor saves $270.50, which is more than $270.

The competitor's formula is $1.35d$ with no dispatch fee. At 250 miles:

$$
1.35(250) = 337.50
$$

Savings versus Swift's $608.00$ from Part C:

$$
608.00 - 337.50 = 270.50
$$

and $270.50 > 270$.`,
      `**E) Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.**  (true)

Setting 145.50 + $1.85d = 1$.35d gives $d = -291$  -  an algebraic intersection does exist, just not at any real-world (positive) distance.

Equate Swift's charge with the competitor's:

$$
145.50 + 1.85d = 1.35d
$$

$$
145.50 = 1.35d - 1.85d = -0.50d
$$

$$
d = \\frac{145.50}{-0.50} = -291
$$

The lines meet at $d = -291$ miles, a negative (hence meaningless) distance, but an intersection still exists on the number line.`,
    ],
    difficulty_level: "3/5",
    sort_order: 32,
    solution_overview: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile.

**Part 1: Building the system.**

Let $x =$ Swift Cargo's fixed dispatch fee, y = Swift Cargo's rate per mile.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides. Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Read the bill with 170 extra units.** At rate $y$, that bill is:

$$
x + 170y = 460.00
$$

**2. Read the bill with 305 extra units.** At rate $y$, that bill is:

$$
x + 305y = 709.75
$$

**Part 2: The model.**

$$
x + 170y = 460.00 \\tag{1}
$$

$$
x + 305y = 709.75 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Route 1 from Route 2 to cancel the shared dispatch fee $x$:

$$
(x + 305y) - (x + 170y) = 709.75 - 460.00
$$

$$
135y = 249.75 \\Rightarrow y = \\frac{249.75}{135} = 1.85
$$

**2.** Substitute $y = 1.85$ into Route 1:

$$
x + 170(1.85) = 460.00 \\Rightarrow x + 314.50 = 460.00 \\Rightarrow x = 145.50
$$

**Answer.** Swift Cargo charges a $145.50 dispatch fee plus $1.85 per mile.`,
  },
  {
    id: "math-5-33",
    case_id: "MATH 5.33",
    title: `Café Lumière  -  Two Till Receipts`,
    context: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only. Receipt 1: 7 Specialty Drinks + 9 Pastries  -  Total: $78.65  -  (listed) Total Calories: 6,100 Receipt 2: 11 Specialty Drinks + 4 Pastries  -  Total: $85.05  -  (listed) Total Calories: 5,400`,
    statements: [
      `A Specialty Drink's price, tripled, would clear twenty dollars.`,
      `Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.`,
      `Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.`,
      `Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past $4.90.`,
      `A week of daily 2-Drink-2-Pastry orders costs enough that, left over from $150, you'd have less than $8 in change.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) A Specialty Drink's price, tripled, would clear twenty dollars.**  (false)

Three Specialty Drinks cost 3($6.35) = $19.05. Since $19.05 is below $20.00, the price does not clear twenty dollars.

The receipts are $7x + 9y = 78.65$ and $11x + 4y = 85.05$. Multiply the first by 4 and the second by 9:

$$
28x + 36y = 314.60, \\qquad 99x + 36y = 765.45
$$

Subtract:

$$
71x = 765.45 - 314.60 = 450.85, \\qquad x = \\frac{450.85}{71} = 6.35
$$

Then $3x = 3(6.35) = 19.05$, and $19.05 < 20$, so tripling does not clear twenty dollars.`,
      `**B) Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.**  (true)

Four Pastries cost 4($3.80) = $15.20. One drink and one pastry cost $6.35 + $3.80 = $10.15, so four pastries cost $5.05 more.

From $x = 6.35$ in Part A, Invoice 1 gives the pastry price:

$$
7(6.35) + 9y = 78.65 \\Rightarrow 44.45 + 9y = 78.65 \\Rightarrow 9y = 34.20 \\Rightarrow y = 3.80
$$

Compare $4y$ with $x + y$:

$$
4(3.80) = 15.20, \\qquad 6.35 + 3.80 = 10.15, \\qquad 15.20 - 10.15 = 5.05
$$

Four pastries cost more, by $5.05$.`,
      `**C) Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.**  (false)

The listed calorie totals are 6,100 and 5,400, but they give no calorie amount per drink or pastry. The quantities and dollar totals are the information that identify the prices.

The calorie figures are unrelated nutritional data; without the item quantities, no price can be derived from them no matter how they're combined with the totals.

Two numbers $6100$ and $5400$ plus two dollar totals still leave four unknowns (price per drink, price per pastry, calories per drink, calories per pastry). A $2 \\times 2$ price system needs the item counts as coefficients. The calorie column cannot replace those counts.`,
      `**D) Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past $4.90.**  (true)

Receipt 1 has 7 + 9 = 16 items. Its average is $78.65 ÷ 16 ≈ $4.9156 per item, just above $4.90.

$$
7 + 9 = 16, \\qquad \\frac{78.65}{16} = 4.915625
$$

That average is above $4.90$ (by about a cent and a half), so the claim is true.`,
      `**E) A week of daily 2-Drink-2-Pastry orders costs enough that, left over from $150, you'd have less than $8 in change.**  (true)

A 2-drink, 2-pastry order costs 2($6.35) + 2($3.80) = $20.30. For seven days that is $142.10, leaving $150.00 − $142.10 = $7.90.

Daily cost using the recovered prices:

$$
2(6.35) + 2(3.80) = 12.70 + 7.60 = 20.30
$$

Seven days, then change from $150$:

$$
7(20.30) = 142.10, \\qquad 150.00 - 142.10 = 7.90
$$

Change of $7.90$ is less than $8$.`,
    ],
    difficulty_level: "3/5",
    sort_order: 33,
    solution_overview: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only.

**Part 1: Building the system.**

Let $x =$ price per Specialty Drink, y = price per Pastry.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
7x + 9y = 78.65
$$

**2. Record this independent observation.** In symbols:

$$
11x + 4y = 85.05
$$

**Part 2: The model.**

$$
7x + 9y = 78.65 \\tag{1}
$$

$$
11x + 4y = 85.05 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Receipt 1 by 4 and Receipt 2 by 9 so the $y$ coefficients both become $36y$:

$$
4(7x + 9y) = 4(78.65) \\Rightarrow 28x + 36y = 314.60
$$

$$
9(11x + 4y) = 9(85.05) \\Rightarrow 99x + 36y = 765.45
$$

**2.** Subtract the first scaled equation from the second:

$$
(99x + 36y) - (28x + 36y) = 765.45 - 314.60
$$

$$
71x = 450.85 \\Rightarrow x = \\frac{450.85}{71} = 6.35
$$

**3.** Substitute $x = 6.35$ into Receipt 1:

$$
7(6.35) + 9y = 78.65 \\Rightarrow 44.45 + 9y = 78.65
$$

$$
9y = 34.20 \\Rightarrow y = 3.80
$$

**Answer.** A Specialty Drink costs $6.35 and a Pastry costs $3.80.`,
  },
  {
    id: "math-5-34",
    case_id: "MATH 5.34",
    title: `Northgate Bakery Wholesale  -  Order Confirmation Emails`,
    context: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes. Total cost: $297.30." Email 2: "Order confirmed: 6 dozen croissants + 23 dozen baguettes. Total cost: $299.30."`,
    statements: [
      `Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.`,
      `The per-dozen gap between croissants and baguettes is closer to four dollars than to five.`,
      `Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.`,
      `Per dozen-item ordered, Email 1 runs pricier than Email 2  -  and the gap clears two dollars.`,
      `Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.**  (true)

Four dozen croissants cost 4($13.85) = $55.40. That is greater than $55.00.

Email 1 and Email 2 are $14x + 11y = 297.30$ and $6x + 23y = 299.30$. Multiply the first by 23 and the second by 11:

$$
322x + 253y = 6837.90, \\qquad 66x + 253y = 3292.30
$$

Subtract:

$$
256x = 6837.90 - 3292.30 = 3545.60, \\qquad x = \\frac{3545.60}{256} = 13.85
$$

Then $4x = 4(13.85) = 55.40$, and $55.40 > 55$.`,
      `**B) The per-dozen gap between croissants and baguettes is closer to four dollars than to five.**  (true)

The price gap is $13.85 − $9.40 = $4.45. It is $0.45 from $4 and $0.55 from $5, making it closer to $4.

With $x = 13.85$, Email 1 recovers $y$:

$$
14(13.85) + 11y = 297.30 \\Rightarrow 193.90 + 11y = 297.30 \\Rightarrow 11y = 103.40 \\Rightarrow y = 9.40
$$

Gap and distances:

$$
13.85 - 9.40 = 4.45, \\qquad |4.45 - 4| = 0.45, \\qquad |4.45 - 5| = 0.55
$$

Closer to $4$ because $0.45 < 0.55$.`,
      `**C) Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.**  (false)

Ten dozen croissants cost $138.50, while ten dozen of each costs $138.50 + $94.00 = $232.50. The croissant share is about 59.6%, which is below three-fifths, or 60%.

Using the recovered prices:

$$
10(13.85) = 138.50, \\qquad 10(9.40) = 94.00
$$

$$
138.50 + 94.00 = 232.50, \\qquad \\frac{138.50}{232.50} = \\frac{277}{465} \\approx 0.5957
$$

Three-fifths is $0.60$, and $0.5957 < 0.60$, so croissants fall short of that share.`,
      `**D) Per dozen-item ordered, Email 1 runs pricier than Email 2  -  and the gap clears two dollars.**  (false)

Email 1 averages $297.30 ÷ 25 ≈ $11.89 per dozen-item, while Email 2 averages $299.30 ÷ 29 ≈ $10.32. The difference is about $1.57, not more than $2.

Email 1 has $14+11=25$ dozen-items; Email 2 has $6+23=29$:

$$
\\frac{297.30}{25} = 11.892, \\qquad \\frac{299.30}{29} \\approx 10.321
$$

$$
11.892 - 10.321 = 1.571
$$

The gap is about $1.57$, which does not clear $2$.`,
      `**E) Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.**  (true)

Adding $3 makes each baguette dozen $12.40. Email 2 would become 6($13.85) + 23($12.40) = $368.30.

New baguette price $y+3 = 9.40+3 = 12.40$. Email 2 with that price:

$$
6(13.85) + 23(12.40) = 83.10 + 285.20 = 368.30
$$

The cents digits of $368.30$ are $30$, as claimed.`,
    ],
    difficulty_level: "3/5",
    sort_order: 34,
    solution_overview: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes.

**Part 1: Building the system.**

Let $x =$ wholesale price per dozen croissants, y = wholesale price per dozen baguettes.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
14x + 11y = 297.30
$$

**2. Record this independent observation.** In symbols:

$$
6x + 23y = 299.30
$$

**Part 2: The model.**

$$
14x + 11y = 297.30 \\tag{1}
$$

$$
6x + 23y = 299.30 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Email 1 by 23 and Email 2 by 11 so the $y$ terms both become $253y$:

$$
23(14x + 11y) = 23(297.30) \\Rightarrow 322x + 253y = 6837.90
$$

$$
11(6x + 23y) = 11(299.30) \\Rightarrow 66x + 253y = 3292.30
$$

**2.** Subtract:

$$
(322x + 253y) - (66x + 253y) = 6837.90 - 3292.30
$$

$$
256x = 3545.60 \\Rightarrow x = \\frac{3545.60}{256} = 13.85
$$

**3.** Substitute $x = 13.85$ into Email 1:

$$
14(13.85) + 11y = 297.30 \\Rightarrow 193.90 + 11y = 297.30
$$

$$
11y = 103.40 \\Rightarrow y = 9.40
$$

**Answer.** Croissants cost $13.85 per dozen and baguettes cost $9.40 per dozen.`,
  },
  {
    id: "math-5-35",
    case_id: "MATH 5.35",
    title: `Meridian Textiles  -  Quarterly Margin Verification`,
    context: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.`,
    tables_markdown: `| Quarter | Fabric Rolls | Yarn Spools | Total Profit |
| --- | --- | --- | --- |
| Q1 | 240 | 175 | $10,029.00 |
| Q2 | 310 | 90 | $10,260.50 |`,
    statements: [
      `Fabric Roll margins clear the $27 line, though not by enough to also clear $27.50.`,
      `Yarn Spool's per-unit margin, doubled, would just clear forty dollars.`,
      `Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears $8,400  -  but only by a slender margin.`,
      `The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.`,
      `Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round $13,675  -  no cents required.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Fabric Roll margins clear the $27 line, though not by enough to also clear $27.50.**  (true)

A Fabric Roll margin is $27.35. It is above $27.00 but below $27.50.

Q1 and Q2 are $240x + 175y = 10029.00$ and $310x + 90y = 10260.50$. Multiply the first by 90 and the second by 175:

$$
21600x + 15750y = 902610, \\qquad 54250x + 15750y = 1795587.5
$$

Subtract:

$$
32650x = 1795587.5 - 902610 = 892977.5, \\qquad x = \\frac{892977.5}{32650} = 27.35
$$

Then $27.00 < 27.35 < 27.50$.`,
      `**B) Yarn Spool's per-unit margin, doubled, would just clear forty dollars.**  (false)

Twice the Yarn Spool margin is 2($19.80) = $39.60. That does not exceed $40.00.

From $x = 27.35$ in Q1:

$$
240(27.35) + 175y = 10029.00 \\Rightarrow 6564.00 + 175y = 10029.00
$$

$$
175y = 3465.00 \\Rightarrow y = 19.80
$$

Double that margin: $2(19.80) = 39.60$, and $39.60 < 40$.`,
      `**C) Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears $8,400  -  but only by a slender margin.**  (true)

The new mix earns 200($27.35) + 150($19.80) = $5,470 + $2,970 = $8,440. That is $40 above $8,400.

Plug the recovered margins into the hypothetical mix:

$$
200(27.35) + 150(19.80) = 5470 + 2970 = 8440
$$

$$
8440 - 8400 = 40
$$

It clears $8,400$ by $40$.`,
      `**D) The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.**  (true)

The difference between the reported totals is $10,260.50 − $10,029.00 = $231.50. Removing the smallest hundred leaves $131.50, which still has three digits before the decimal.

The gap is $231.50; subtracting $100 leaves $131.50, still a three-digit figure before the decimal.

$$
10260.50 - 10029.00 = 231.50, \\qquad 231.50 - 100 = 131.50
$$

$131.50$ still has three digits to the left of the decimal point.`,
      `**E) Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round $13,675  -  no cents required.**  (true)

Five hundred Fabric Rolls produce 500($27.35) = $13,675.00. This is exactly the stated round-dollar amount.

With $y = 0$ in the profit formula:

$$
500(27.35) + 0(19.80) = 13675.00
$$

That is exactly $13,675$ with no leftover cents.`,
    ],
    difficulty_level: "4/5",
    sort_order: 35,
    solution_overview: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.

**Part 1: Building the system.**

Let $x =$ profit per Fabric Roll, y = profit per Yarn Spool.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
240x + 175y = 10029.00
$$

**2. Record this independent observation.** In symbols:

$$
310x + 90y = 10260.50
$$

**Part 2: The model.**

$$
240x + 175y = 10029.00 \\tag{1}
$$

$$
310x + 90y = 10260.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Q1 by 90 and Q2 by 175 so the $y$ coefficients both become $15750y$:

$$
90(240x + 175y) = 90(10029.00) \\Rightarrow 21600x + 15750y = 902610
$$

$$
175(310x + 90y) = 175(10260.50) \\Rightarrow 54250x + 15750y = 1795587.5
$$

**2.** Subtract the scaled Q1 from the scaled Q2:

$$
(54250x + 15750y) - (21600x + 15750y) = 1795587.5 - 902610
$$

$$
32650x = 892977.5 \\Rightarrow x = \\frac{892977.5}{32650} = 27.35
$$

**3.** Substitute $x = 27.35$ into Q1:

$$
240(27.35) + 175y = 10029.00 \\Rightarrow 6564.00 + 175y = 10029.00
$$

$$
175y = 3465.00 \\Rightarrow y = 19.80
$$

**Answer.** Fabric Roll margin = $27.35 per unit; Yarn Spool margin = $19.80 per unit.`,
  },
  {
    id: "math-5-36",
    case_id: "MATH 5.36",
    title: `Continental Gas Supply  -  Reconstructing Cylinder Prices`,
    context: `A consultant reviewing Continental Gas Supply's cylinder pricing agreement was given three monthly supplier invoices for Nitrogen-type and Oxygen-type cylinders.`,
    tables_markdown: `| Invoice | Nitrogen Units | Oxygen Units | Total |
| --- | --- | --- | --- |
| Invoice 1 | 15 | 20 | $699.00 |
| Invoice 2 | 9 | 12 | $419.40 |
| Invoice 3 | 13 | 5 | $326.45 |`,
    statements: [
      `Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.`,
      `Nitrogen-type cylinders are priced closer to $17.00 than to $16.00.`,
      `Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.`,
      `Double Invoice 3's order exactly, and the resulting bill would land above $655.`,
      `Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the $20 mark.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.**  (true)

419.40/699.00 = 0.60 exactly, and the quantities scale the same way  -  Invoice 2 duplicates Invoice 1's information rather than adding to it.

Compare Invoice 2 with Invoice 1 coefficient by coefficient:

$$
\\frac{9}{15} = 0.60, \\qquad \\frac{12}{20} = 0.60, \\qquad \\frac{419.40}{699.00} = 0.60
$$

Every entry of Invoice 2 is exactly $0.6$ times the matching Invoice 1 entry, so Invoice 2 is a scaled copy, not a second independent observation.`,
      `**B) Nitrogen-type cylinders are priced closer to $17.00 than to $16.00.**  (false)

Nitrogen-type is $16.40  -  $0.40 from $16.00 but $0.60 from $17.00  -  closer to $16.00, not $17.00.

Use Invoice 1 with Invoice 3 (the independent pair). Multiply Invoice 3 by 4:

$$
4(13x + 5y) = 4(326.45) \\Rightarrow 52x + 20y = 1305.80
$$

Subtract Invoice 1 ($15x + 20y = 699.00$):

$$
(52x + 20y) - (15x + 20y) = 1305.80 - 699.00 \\Rightarrow 37x = 606.80 \\Rightarrow x = 16.40
$$

Distances: $|16.40-16.00|=0.40$ and $|16.40-17.00|=0.60$. Closer to $16.00$.`,
      `**C) Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.**  (true)

Four Oxygen cylinders cost 4($22.65) = $90.60. Six Nitrogen cylinders cost 6($16.40) = $98.40, so the Oxygen total is lower.

From $x = 16.40$ in Invoice 1:

$$
15(16.40) + 20y = 699.00 \\Rightarrow 246.00 + 20y = 699.00 \\Rightarrow 20y = 453.00 \\Rightarrow y = 22.65
$$

Then

$$
4(22.65) = 90.60, \\qquad 6(16.40) = 98.40
$$

and $90.60 < 98.40$.`,
      `**D) Double Invoice 3's order exactly, and the resulting bill would land above $655.**  (false)

Doubling Invoice 3 gives 26 Nitrogen and 10 Oxygen cylinders. The bill is 26($16.40) + 10($22.65) = $652.90, below $655.

Invoice 3 is 13 Nitrogen and 5 Oxygen, so the doubled mix is 26 and 10:

$$
26(16.40) + 10(22.65) = 426.40 + 226.50 = 652.90
$$

$652.90 < 655$, so the doubled bill does not land above $655$.`,
      `**E) Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the $20 mark.**  (true)

Invoices 1 and 3 together total $699.00 + $326.45 = $1,025.45 for 15 + 20 + 13 + 5 = 53 cylinders. The average is about $19.35 per cylinder, below $20.

$$
699.00 + 326.45 = 1025.45, \\qquad 15+20+13+5 = 53
$$

$$
\\frac{1025.45}{53} = 19.348\\ldots
$$

That blended per-cylinder figure is below $20$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 36,
    solution_overview: `A consultant reviewing Continental Gas Supply's cylinder pricing agreement was given three monthly supplier invoices for Nitrogen-type and Oxygen-type cylinders.

**Part 1: Building the system.**

Let $x =$ price per Nitrogen-type cylinder, y = price per Oxygen-type cylinder.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Invoice 1.** That observation becomes:

$$
15x + 20y = 699.00
$$

**2. Translate: Invoice 3, independent of Invoice 1.** That observation becomes:

$$
13x + 5y = 326.45
$$

**Part 2: The model.**

$$
15x + 20y = 699.00 \\tag{1}
$$

$$
13x + 5y = 326.45 \\tag{2}
$$

**Part 3: Solve.**

**1.** Check Invoice 2 against Invoice 1 first:

$$
\\frac{9}{15} = \\frac{12}{20} = \\frac{419.40}{699.00} = 0.60
$$

Invoice 2's quantities (9, 12) are exactly 0.6 times Invoice 1's (15, 20), so Invoice 2 is redundant.

**2.** Multiply Invoice 3 by 4 so its Oxygen coefficient matches Invoice 1:

$$
4(13x + 5y) = 4(326.45) \\Rightarrow 52x + 20y = 1305.80
$$

**3.** Subtract Invoice 1:

$$
(52x + 20y) - (15x + 20y) = 1305.80 - 699.00
$$

$$
37x = 606.80 \\Rightarrow x = \\frac{606.80}{37} = 16.40
$$

**4.** Substitute $x = 16.40$ into Invoice 1:

$$
15(16.40) + 20y = 699.00 \\Rightarrow 246.00 + 20y = 699.00
$$

$$
20y = 453.00 \\Rightarrow y = 22.65
$$

**Answer.** Nitrogen-type cylinders cost $16.40 each and Oxygen-type cylinders cost $22.65 each.`,
  },
  {
    id: "math-5-37",
    case_id: "MATH 5.37",
    title: `Ferro Machine Shop  -  Two Technicians, Two Sessions`,
    context: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.`,
    statements: [
      `Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.`,
      `Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.`,
      `Their combined hourly output, expressed as a fraction, reduces to exactly 13/100  -  no more, no less.`,
      `Bianchi's slice of Tuesday's finished work, as a fraction, is closer to 1/7 than to 1/8.`,
      `Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A) Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.**  (false)

Alvarez's solo time is 1 ÷ 0.085 ≈ 11.76 hours. Rounded to the nearest hour, that is 12 hours.

Monday and Tuesday give $4x + 7y = 0.655$ and $9x + 3y = 0.900$. Multiply the first by 9 and the second by 4:

$$
36x + 63y = 5.895, \\qquad 36x + 12y = 3.600
$$

Subtract:

$$
51y = 5.895 - 3.600 = 2.295, \\qquad y = \\frac{2.295}{51} = 0.045
$$

Then $4x + 7(0.045) = 0.655$, so $4x + 0.315 = 0.655$ and $x = 0.085$. Solo time:

$$
\\frac{1}{0.085} \\approx 11.7647
$$

Nearest whole hour is $12$, not $11$.`,
      `**B) Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.**  (false)

Bianchi alone needs 1/0.045 ≈ 22.22 hours for one job; Alvarez alone needs 2/0.085 ≈ 23.53 hours for two jobs  -  Bianchi's single-job time is actually the shorter of the two.

Using the rates from Part A:

$$
\\frac{1}{0.045} \\approx 22.222, \\qquad \\frac{2}{0.085} \\approx 23.529
$$

Bianchi's one-job time ($22.22$ h) is shorter than Alvarez's two-job time ($23.53$ h), so the claim is false.`,
      `**C) Their combined hourly output, expressed as a fraction, reduces to exactly 13/100  -  no more, no less.**  (true)

Together they complete 0.085 + 0.045 = 0.130 job per hour. As a fraction, 0.130 = 13/100.

Add the two recovered rates:

$$
x + y = 0.085 + 0.045 = 0.130 = \\frac{13}{100}
$$

The reduced fraction is exactly $13/100$.`,
      `**D) Bianchi's slice of Tuesday's finished work, as a fraction, is closer to 1/7 than to 1/8.**  (true)

Bianchi contributed 3(0.045) = 0.135 on Tuesday; 1/7 ≈ 0.1429 is about 0.008 away, while 1/8 = 0.125 is about 0.010 away  -  marginally closer to 1/7.

Tuesday, Bianchi's 3 hours at rate $y$:

$$
3(0.045) = 0.135
$$

Compare with $1/7$ and $1/8$:

$$
\\left|0.135 - \\frac{1}{7}\\right| = \\left|0.135 - 0.142857\\ldots\\right| \\approx 0.00786
$$

$$
\\left|0.135 - \\frac{1}{8}\\right| = |0.135 - 0.125| = 0.010
$$

Closer to $1/7$ because $0.00786 < 0.010$.`,
      `**E) Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.**  (true)

The total work completed is 0.655 + 0.900 = 1.555 jobs over 23 logged hours. The average is 1.555 ÷ 23 ≈ 0.0676, or 6.76% per hour.

Hours logged: $4+7+9+3 = 23$. Work finished:

$$
0.655 + 0.900 = 1.555, \\qquad \\frac{1.555}{23} \\approx 0.06761
$$

That is $6.761\\%$ per hour, which does not clear $7\\%$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 37,
    solution_overview: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.

**Part 1: Building the system.**

Let $x =$ fraction of a job Alvarez completes per hour, y = fraction of a job Bianchi completes per hour.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Monday.** That observation becomes:

$$
4x + 7y = 0.655
$$

**2. Translate: Tuesday.** That observation becomes:

$$
9x + 3y = 0.900
$$

**Part 2: The model.**

$$
4x + 7y = 0.655 \\tag{1}
$$

$$
9x + 3y = 0.900 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Monday by 9 and Tuesday by 4 so the $x$ coefficients both become $36x$:

$$
9(4x + 7y) = 9(0.655) \\Rightarrow 36x + 63y = 5.895
$$

$$
4(9x + 3y) = 4(0.900) \\Rightarrow 36x + 12y = 3.600
$$

**2.** Subtract the scaled Tuesday from the scaled Monday:

$$
(36x + 63y) - (36x + 12y) = 5.895 - 3.600
$$

$$
51y = 2.295 \\Rightarrow y = \\frac{2.295}{51} = 0.045
$$

**3.** Substitute $y = 0.045$ into Monday:

$$
4x + 7(0.045) = 0.655 \\Rightarrow 4x + 0.315 = 0.655
$$

$$
4x = 0.340 \\Rightarrow x = 0.085
$$

**Answer.** Alvarez completes 0.085 job/hour (8.5%/hour), and Bianchi completes 0.045 job/hour (4.5%/hour).`,
  },
  {
    id: "math-5-38",
    case_id: "MATH 5.38",
    title: `Vantage Apparel  -  A Water-Damaged Production Report`,
    context: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting $9,793.50. Season 2: 275 T-Shirts and 410 Hoodies, netting $10,747.75. Season 3's paperwork survived only in part: 310 Hoodies and an overall profit of $8,558.25 are legible, but water damage erased the T-Shirt count entirely.`,
    statements: [
      `T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.`,
      `Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.`,
      `Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.`,
      `Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.`,
      `Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses $8,700  -  clearing it by less than $40.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.**  (false)

A T-Shirt margin is $11.65. It is $0.35 from $12 but $0.65 from $11, so it is closer to $12.

Season 1 and Season 2 are $430x + 260y = 9793.50$ and $275x + 410y = 10747.75$. Multiply the first by 410 and the second by 260:

$$
176300x + 106600y = 4015335, \\qquad 71500x + 106600y = 2794415
$$

Subtract:

$$
104800x = 4015335 - 2794415 = 1220920, \\qquad x = \\frac{1220920}{104800} = 11.65
$$

Distances: $|11.65-11|=0.65$ and $|11.65-12|=0.35$. Closer to $12$, not $11$.`,
      `**B) Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.**  (true)

A Hoodie margin is $18.40. It is $0.40 from $18 and $0.60 from $19, so it is closer to $18.

From $x = 11.65$ in Season 1:

$$
430(11.65) + 260y = 9793.50 \\Rightarrow 5009.50 + 260y = 9793.50
$$

$$
260y = 4784.00 \\Rightarrow y = 18.40
$$

Then $|18.40-18|=0.40$ and $|18.40-19|=0.60$, so closer to $18$.`,
      `**C) Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.**  (false)

The missing Season 3 count is 245 T-Shirts. Although 245 is divisible by 5, it is not divisible by 10.

The reconstructed count is 245 units  -  a multiple of five, but not of ten.

Season 3 has 310 Hoodies and profit $8558.25$:

$$
11.65T + 18.40(310) = 8558.25
$$

$$
11.65T + 5704.00 = 8558.25 \\Rightarrow 11.65T = 2854.25 \\Rightarrow T = 245
$$

$245$ ends in $5$, so it is not a multiple of $10$.`,
      `**D) Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.**  (true)

Season 2 exceeds Season 1 by $10,747.75 − $9,793.50 = $954.25. Fifty-two Hoodies earn 52($18.40) = $956.80, so the gap is $2.55 short.

$$
10747.75 - 9793.50 = 954.25
$$

$$
52(18.40) = 956.80, \\qquad 956.80 - 954.25 = 2.55
$$

The season gap is $2.55$ short of 52 Hoodies' margin.`,
      `**E) Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses $8,700  -  clearing it by less than $40.**  (true)

With 260 T-Shirts and 310 Hoodies, profit is 260($11.65) + 310($18.40) = $8,733.00. It clears $8,700 by $33, which is less than $40.

$$
260(11.65) + 310(18.40) = 3029.00 + 5704.00 = 8733.00
$$

$$
8733.00 - 8700.00 = 33.00
$$

It clears $8,700$ by $33$, which is less than $40$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 38,
    solution_overview: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting $9,793.50.

**Part 1: Building the system.**

Let $x =$ profit per T-Shirt, y = profit per Hoodie.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Season 1.** That observation becomes:

$$
430x + 260y = 9793.50
$$

**2. Translate: Season 2.** That observation becomes:

$$
275x + 410y = 10747.75
$$

**Part 2: The model.**

$$
430x + 260y = 9793.50 \\tag{1}
$$

$$
275x + 410y = 10747.75 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Season 1 by 410 and Season 2 by 260 so the $y$ coefficients both become $106600y$:

$$
410(430x + 260y) = 410(9793.50) \\Rightarrow 176300x + 106600y = 4015335
$$

$$
260(275x + 410y) = 260(10747.75) \\Rightarrow 71500x + 106600y = 2794415
$$

**2.** Subtract:

$$
(176300x + 106600y) - (71500x + 106600y) = 4015335 - 2794415
$$

$$
104800x = 1220920 \\Rightarrow x = \\frac{1220920}{104800} = 11.65
$$

**3.** Substitute $x = 11.65$ into Season 1:

$$
430(11.65) + 260y = 9793.50 \\Rightarrow 5009.50 + 260y = 9793.50
$$

$$
260y = 4784.00 \\Rightarrow y = 18.40
$$

**4.** Reconstruct Season 3's T-Shirt count $T$:

$$
11.65T + 18.40(310) = 8558.25 \\Rightarrow 11.65T + 5704.00 = 8558.25
$$

$$
11.65T = 2854.25 \\Rightarrow T = 245
$$

**Answer.** T-Shirts earn $11.65 each, Hoodies earn $18.40 each, and Season 3 made 245 T-Shirts.`,
  },
  {
    id: "math-5-39",
    case_id: "MATH 5.39",
    title: `Continental Freight Co.  -  Cross-Unit Billing Audit`,
    context: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped. One branch records weights in pounds (1 kg ≈ 2.2 lb). A third shipment is under audit.`,
    tables_markdown: `| Shipment | Weight | Total Charged |
| --- | --- | --- |
| Shipment 1 (Metric) | 185 kg | $677.35 |
| Shipment 2 (Imperial) | 572 lb | $913.60 |
| Shipment 3 (Imperial, audit) | 99 lb | $239.80 |`,
    statements: [
      `Knock five dollars and forty cents off the flat handling fee and you'd land on an even $89.20  -  implying the real fee currently overshoots $89 by roughly six percent.`,
      `The per-kilogram rate, tripled, would land just shy of $9.50.`,
      `Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.`,
      `Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.`,
      `Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Knock five dollars and forty cents off the flat handling fee and you'd land on an even $89.20  -  implying the real fee currently overshoots $89 by roughly six percent.**  (true)

$94.60 - 5.40 = $89.20; relative to $89.00, the real fee overshoots by (94.60-89)/89 ≈ 6.3%, roughly six percent.

Convert Shipment 2 first: $572 \\div 2.2 = 260$ kg. The two metric bills are $x + 185y = 677.35$ and $x + 260y = 913.60$. Subtract:

$$
75y = 913.60 - 677.35 = 236.25, \\qquad y = \\frac{236.25}{75} = 3.15
$$

Then $x + 185(3.15) = 677.35$, so $x + 582.75 = 677.35$ and $x = 94.60$.

$$
94.60 - 5.40 = 89.20, \\qquad \\frac{94.60 - 89}{89} = \\frac{5.60}{89} \\approx 0.0629
$$

That is about $6.3\\%$, matching "roughly six percent."`,
      `**B) The per-kilogram rate, tripled, would land just shy of $9.50.**  (true)

Three times the $3.15/kg rate is $9.45. That is just below $9.50.

From Part A, $y = 3.15$:

$$
3(3.15) = 9.45
$$

and $9.45 < 9.50$, just shy of the mark.`,
      `**C) Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.**  (true)

Shipment 3 weighs 99 ÷ 2.2 = 45 kg, so the model predicts $94.60 + 45($3.15) = $236.35. The actual $239.80 bill differs by $3.45, which is within $4 but not exact.

$$
\\frac{99}{2.2} = 45, \\qquad 94.60 + 45(3.15) = 94.60 + 141.75 = 236.35
$$

$$
239.80 - 236.35 = 3.45
$$

$3.45 < 4$ and $236.35 \\ne 239.80$.`,
      `**D) Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.**  (false)

Ninety-nine pounds converts to 99 ÷ 2.2 = 45 kg. Since 45 is not divisible by 7, the claim is false.

Rebuild the expression from the solved system rather than treating a coefficient, fee, or converted unit as if it were already the final answer.

$$
\\frac{99}{2.2} = 45, \\qquad 45 \\div 7 = 6 \\text{ remainder } 3
$$

$45$ is not a multiple of $7$.`,
      `**E) Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.**  (true)

At 400 kg, the charge is $94.60 + 400($3.15) = $1,354.60. This is $4.60 above $1,350.

$$
94.60 + 400(3.15) = 94.60 + 1260.00 = 1354.60
$$

$$
1354.60 - 1350.00 = 4.60
$$

It creeps past $1,350$ by $4.60$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 39,
    solution_overview: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped.

**Part 1: Building the system.**

Let $x =$ flat handling fee, y = rate per kilogram. Weights must be converted to kilograms before the model is built.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Shipment 1, already in kg.** That observation becomes:

$$
x + 185y = 677.35
$$

**2. Translate: Shipment 2: 572 lb ÷ 2.2 = 260 kg.** That observation becomes:

$$
x + 260y = 913.60
$$

**Part 2: The model.**

$$
x + 185y = 677.35 \\tag{1}
$$

$$
x + 260y = 913.60 \\tag{2}
$$

**Part 3: Solve.**

**1.** Convert Shipment 2's weight to kilograms:

$$
\\frac{572}{2.2} = 260 \\text{ kg}
$$

**2.** Subtract Shipment 1 from the converted Shipment 2:

$$
(x + 260y) - (x + 185y) = 913.60 - 677.35
$$

$$
75y = 236.25 \\Rightarrow y = \\frac{236.25}{75} = 3.15
$$

**3.** Substitute $y = 3.15$ into Shipment 1:

$$
x + 185(3.15) = 677.35 \\Rightarrow x + 582.75 = 677.35 \\Rightarrow x = 94.60
$$

**4.** Audit Shipment 3:

$$
\\frac{99}{2.2} = 45 \\text{ kg}
$$

**5.** The model predicts

$$
94.60 + 45(3.15) = 94.60 + 141.75 = 236.35
$$

but Shipment 3 was charged $239.80, a $3.45 discrepancy.

**Answer.** The handling fee is $94.60 and the rate is $3.15/kg; Shipment 3 should cost $236.35 rather than $239.80.`,
  },
  {
    id: "math-5-40",
    case_id: "MATH 5.40",
    title: `Vantage Cloud Services  -  A Doubled Invoice That Doesn't Double`,
    context: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.`,
    tables_markdown: `| Client | Compute Units | Storage Units | Reported Total |
| --- | --- | --- | --- |
| Client A | 11 | 7 | $483.70 |
| Client B | 22 | 14 | $952.10 |`,
    statements: [
      `Doubling every line of Client A's invoice implies Client B should owe $967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.`,
      `For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $952.10 billed amount.`,
      `The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.`,
      `Plugging in a purely hypothetical $14.20 per compute-unit and $31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of $375.`,
      `Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A ($967.40), the other assuming a 50%-heavier surcharge instead of a full double ($725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Doubling every line of Client A's invoice implies Client B should owe $967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.**  (true)

Twice Client A's $483.70 invoice is $967.40. The excess over Client B's $952.10 is $15.30, and $15.30 ÷ $952.10 ≈ 1.607%.

Client B's usage is exactly double Client A's, so a consistent scheme would scale Client A's bill by 2:

$$
2(483.70) = 967.40
$$

$$
967.40 - 952.10 = 15.30, \\qquad \\frac{15.30}{952.10} \\approx 0.01607
$$

That overshoot is a hair over $1.6\\%$ of the billed $952.10$.`,
      `**B) For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $952.10 billed amount.**  (true)

If B's doubled usage total is $952.10, A would need to be exactly half: $952.10 ÷ 2 = $476.05. A's reported $483.70 is not that value, exposing the inconsistency.

Consistency plus doubled usage means $2(11x+7y) = 22x+14y$, so the totals must satisfy $2A = B$:

$$
\\frac{952.10}{2} = 476.05
$$

Client A reported $483.70$, and $483.70 \\ne 476.05$.`,
      `**C) The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.**  (true)

1.61% is closer to 1/60 ≈ 1.67% (about 0.06 points away) than to 1/50 = 2% (0.39 points away).

From Part A the relative error is $15.30/952.10 \\approx 1.607\\%$. Compare with $1/60$ and $1/50$:

$$
\\frac{1}{60} \\approx 0.01667, \\qquad \\frac{1}{50} = 0.02000
$$

$$
|0.01607 - 0.01667| \\approx 0.00060, \\qquad |0.01607 - 0.02000| = 0.00393
$$

Nearer to $1/60$.`,
      `**D) Plugging in a purely hypothetical $14.20 per compute-unit and $31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of $375.**  (false)

The hypothetical prices give 11($14.20) + 7($31.75) = $156.20 + $222.25 = $378.45. That is above $375, not just below it.

$$
11(14.20) + 7(31.75) = 156.20 + 222.25 = 378.45
$$

$378.45 > 375$, so the hypothetical total is not just shy of $375$.`,
      `**E) Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A ($967.40), the other assuming a 50%-heavier surcharge instead of a full double ($725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.**  (true)

The clean-doubling hypothesis is $15.30 away from $952.10. The 50%-heavier hypothesis, $725.55, is $226.55 away, so doubling is much closer.

$$
|967.40 - 952.10| = 15.30, \\qquad |725.55 - 952.10| = 226.55
$$

$15.30 < 226.55$, so the doubling guess is closer even though it is still wrong.`,
    ],
    difficulty_level: "4/5",
    sort_order: 40,
    solution_overview: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.

**Part 1: Building the system.**

Let $x =$ price per compute-unit, y = price per storage-unit.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Client A.** That observation becomes:

$$
11x + 7y = 483.70
$$

**2. Translate: Client B, as reported.** That observation becomes:

$$
22x + 14y = 952.10
$$

**Part 2: The model.**

$$
11x + 7y = 483.70 \\tag{1}
$$

$$
22x + 14y = 952.10 \\tag{2}
$$

**Part 3: Solve.**

**1.** Client B's coefficients $(22, 14)$ are exactly double Client A's $(11, 7)$. Scaling Client A's equation by 2:

$$
2(11x + 7y) = 2(483.70) \\Rightarrow 22x + 14y = 967.40
$$

**2.** Client B's reported total is $952.10$, not $967.40$:

$$
967.40 - 952.10 = 15.30
$$

The two equations are inconsistent by $15.30$.

**3.** The coefficient pairs are proportional ($22:14 = 11:7$) while the constants are not ($967.40 \\ne 952.10$), which is the parallel-lines case. No pair $(x, y)$ satisfies both invoices at once.

**Answer.** No consistent compute and storage prices exist for both invoices; they disagree by $15.30.`,
  },
  {
    id: "math-5-41",
    case_id: "MATH 5.41",
    title: `Sterling Family Trust  -  Two-Fund Return Reconstruction`,
    context: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%. The officer's notes state Fund B's balance is $4,000 more than twice Fund A's balance, and the combined annual return from both funds is $762.00.`,
    statements: [
      `The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.`,
      `If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above $800.00.`,
      `The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).`,
      `Had the trust instead been split evenly ($9,200.00 in each fund) at the original rates, the total return would have come within $5.00 of the actual $762.00.`,
      `The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.**  (false)

Fund A earns 0.0525(4,800) = $252.00; Fund B earns 0.0375(13,600) = $510.00. Triple Fund A's interest would be $756.00, and $510.00 does not reach that.

Fund B's balance is $y = 2x + 4000$, and the combined return is $0.0525x + 0.0375y = 762$. Substitute:

$$
0.0525x + 0.0375(2x + 4000) = 762
$$

$$
0.0525x + 0.075x + 150 = 762 \\Rightarrow 0.1275x = 612 \\Rightarrow x = 4800
$$

Then $y = 2(4800) + 4000 = 13600$. Interest:

$$
0.0525(4800) = 252, \\qquad 0.0375(13600) = 510, \\qquad 3(252) = 756
$$

$510 < 756$, so B's interest is not more than triple A's.`,
      `**B) If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above $800.00.**  (true)

At the raised rate, Fund A would earn 0.0675(4,800) = $324.00, giving a combined return of $324.00 + $510.00 = $834.00, above $800.00.

Keep the balances $x = 4800$ and $y = 13600$, and replace only A's rate:

$$
0.0675(4800) + 0.0375(13600) = 324 + 510 = 834
$$

$834 > 800$.`,
      `**C) The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).**  (true)

The total trust is $4,800 + $13,600 = $18,400. Its $762 return is $762 ÷ $18,400 ≈ 4.14%, which exceeds 4%.

$$
4800 + 13600 = 18400, \\qquad \\frac{762}{18400} = 0.041413\\ldots
$$

That is about $4.14\\%$, which is more than $4\\%$.`,
      `**D) Had the trust instead been split evenly ($9,200.00 in each fund) at the original rates, the total return would have come within $5.00 of the actual $762.00.**  (false)

An even split would earn 9,200(0.0525 + 0.0375) = $828.00, which is $66.00 away from the actual $762.00  -  far more than $5.00.

Half the $18,400 total is $9,200$ in each fund:

$$
9200(0.0525) + 9200(0.0375) = 483 + 345 = 828
$$

$$
828 - 762 = 66
$$

$66$ is far more than $5$.`,
      `**E) The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.**  (true)

The balance difference is $13,600 − $4,800 = $8,800. Relative to the smaller $4,800 balance, $8,800 ÷ $4,800 ≈ 183.3%, above 180%.

$$
13600 - 4800 = 8800, \\qquad \\frac{8800}{4800} = \\frac{11}{6} \\approx 1.8333
$$

That is about $183.3\\%$, which exceeds $180\\%$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 41,
    solution_overview: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%.

**Part 1: Building the system.**

Let $x =$ balance in Fund A, y = balance in Fund B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Fund B's balance, from the stated relationship.** That observation becomes:

$$
y = 2x + 4000
$$

**2. Translate: combined annual return.** That observation becomes:

$$
0.0525x + 0.0375y = 762
$$

**Part 2: The model.**

$$
y = 2x + 4000 \\tag{1}
$$

$$
0.0525x + 0.0375y = 762 \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute $y = 2x + 4000$ into the return equation:

$$
0.0525x + 0.0375(2x + 4000) = 762
$$

$$
0.0525x + 0.075x + 150 = 762 \\Rightarrow 0.1275x + 150 = 762
$$

$$
0.1275x = 612 \\Rightarrow x = \\frac{612}{0.1275} = 4800
$$

**2.** Substitute back:

$$
y = 2(4800) + 4000 = 9600 + 4000 = 13600
$$

**Answer.** Fund A holds $4,800 and Fund B holds $13,600.`,
  },
  {
    id: "math-5-42",
    case_id: "MATH 5.42",
    title: `Solventis Labs  -  Ratio-Blended Batch Reconstruction`,
    context: `Solventis Labs combines Stock Solution A and Stock Solution B in a stated volume ratio. The log records total volume and mixing ratio (A:B) rather than individual volumes.`,
    tables_markdown: `| Batch | Total Volume | Mixing Ratio (A:B) | Total Salt Content |
| --- | --- | --- | --- |
| Batch 1 | 10 L | 3 : 2 | 144 g |
| Batch 2 | 12 L | 5 : 1 | 184 g |
| Batch 3 (QC review) | 8 L | 1 : 3 | 109 g (recorded) |`,
    statements: [
      `The combined salt content of Batch 1 and Batch 2, if poured together into one container, would exceed 300 g.`,
      `Solution B's concentration is more than 70% of Solution A's concentration.`,
      `If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.`,
      `Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.`,
      `Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The combined salt content of Batch 1 and Batch 2, if poured together into one container, would exceed 300 g.**  (true)

Batch 1 contains 144 g and Batch 2 contains 184 g. Together they contain 328 g, which exceeds 300 g.

The log already lists those two salt totals, so adding them is direct:

$$
144 + 184 = 328
$$

and $328 > 300$.`,
      `**B) Solution B's concentration is more than 70% of Solution A's concentration.**  (true)

Solution B's concentration compared with A's is 12 ÷ 16 = 0.75, or 75%. Since 75% is more than 70%, the statement is true.

Batch 1 (10 L at 3:2) is $6$ L of A and $4$ L of B; Batch 2 (12 L at 5:1) is $10$ L of A and $2$ L of B:

$$
6x + 4y = 144, \\qquad 10x + 2y = 184
$$

Divide by 2: $3x + 2y = 72$ and $5x + y = 92$, so $y = 92 - 5x$. Substitute:

$$
3x + 2(92 - 5x) = 72 \\Rightarrow 3x + 184 - 10x = 72 \\Rightarrow -7x = -112 \\Rightarrow x = 16
$$

Then $y = 92 - 5(16) = 92 - 80 = 12$. Ratio:

$$
\\frac{y}{x} = \\frac{12}{16} = 0.75
$$

$75\\% > 70\\%$.`,
      `**C) If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.**  (true)

Keeping A at 2 L, the corrected B volume V satisfies 2(16) + 12V = 109. Thus V = 77/12 ≈ 6.4167 L, much closer to 6.4 L than 6.0 L.

Batch 3 is 8 L at 1:3, so the log's split is $2$ L of A and $6$ L of B. Hold A at $2$ L and solve for the B volume $V$ that would produce the recorded $109$ g:

$$
2(16) + 12V = 109 \\Rightarrow 32 + 12V = 109 \\Rightarrow 12V = 77 \\Rightarrow V = \\frac{77}{12} \\approx 6.4167
$$

$|6.4167-6.4|=0.0167$ versus $|6.4167-6.0|=0.4167$, so closer to $6.4$ L.`,
      `**D) Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.**  (false)

In a 3:1 A:B mixture, A is 3/4 of total volume and B is 1/4. Salt is 16(0.75V) + 12(0.25V) = 15V, so 15V = 130 gives V ≈ 8.67 L.

For total volume $V$:

$$
16\\left(\\frac{3}{4}V\\right) + 12\\left(\\frac{1}{4}V\\right) = 12V + 3V = 15V
$$

$$
15V = 130 \\Rightarrow V = \\frac{130}{15} \\approx 8.667
$$

That is not $7.5$ L.`,
      `**E) Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.**  (true)

Batch 2's 5:1 ratio means A is 5/6 ≈ 83.3% of volume, while Batch 1's 3:2 ratio means A is only 3/5 = 60%  -  Batch 2's proportion is higher.

$$
\\frac{5}{5+1} = \\frac{5}{6} \\approx 0.833, \\qquad \\frac{3}{3+2} = \\frac{3}{5} = 0.60
$$

$0.833 > 0.60$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 42,
    solution_overview: `Solventis Labs combines Stock Solution A and Stock Solution B in a stated volume ratio. The log records total volume and mixing ratio (A:B) rather than individual volumes.

**Part 1: Building the system.**

Let $x =$ grams of salt per liter in Solution A, y = grams of salt per liter in Solution B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Batch 1: 10 L split 3:2 → 6 L of A, 4 L of B.** That observation becomes:

$$
6x + 4y = 144
$$

**2. Translate: Batch 2: 12 L split 5:1 → 10 L of A, 2 L of B.** That observation becomes:

$$
10x + 2y = 184
$$

**Part 2: The model.**

$$
6x + 4y = 144 \\tag{1}
$$

$$
10x + 2y = 184 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide both equations by 2:

$$
3x + 2y = 72, \\qquad 5x + y = 92 \\Rightarrow y = 92 - 5x
$$

**2.** Substitute into the first simplified equation:

$$
3x + 2(92 - 5x) = 72 \\Rightarrow 3x + 184 - 10x = 72
$$

$$
-7x = -112 \\Rightarrow x = 16
$$

**3.** Then

$$
y = 92 - 5(16) = 92 - 80 = 12
$$

**4.** Audit Batch 3 (8 L at 1:3 is $2$ L of A and $6$ L of B):

$$
2(16) + 6(12) = 32 + 72 = 104
$$

versus 109 g recorded, a 5 g discrepancy.

**Answer.** Solution A has 16 g/L and Solution B has 12 g/L; Batch 3 is predicted to contain 104 g, versus 109 g recorded.`,
  },
  {
    id: "math-5-43",
    case_id: "MATH 5.43",
    title: `Union Mills Manufacturing  -  Fractional-Hour Overtime Reconstruction`,
    context: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, $765.00 gross. Employee B: 40 regular + 7 OT hours, $882.00 gross.`,
    statements: [
      `If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed $6.00.`,
      `Employee B's overtime pay is more than 40% of his total gross pay.`,
      `The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.`,
      `If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.`,
      `The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed $6.00.**  (true)

Employee A's overtime rate is $17.50 + $8.50 = $26.00 per hour. Her 2.5 overtime hours pay $65.00, and 10% is $6.50, above $6.

A's equation is $42.5x + 2.5y = 765$ and B's is $47x + 7y = 882$. Multiply A's by $2.8$ so the $y$ coefficients match:

$$
119x + 7y = 2142
$$

Subtract B:

$$
(119x + 7y) - (47x + 7y) = 2142 - 882 \\Rightarrow 72x = 1260 \\Rightarrow x = 17.50
$$

Then $42.5(17.50) + 2.5y = 765$, so $743.75 + 2.5y = 765$ and $y = 8.50$. Overtime rate $x+y = 26.00$:

$$
2.5(26.00) = 65.00, \\qquad 0.10(65.00) = 6.50
$$

$6.50 > 6$.`,
      `**B) Employee B's overtime pay is more than 40% of his total gross pay.**  (false)

Employee B's overtime pay is 7($26.00) = $182.00. As a share of $882, that is about 20.6%, well below 40%.

$$
7(26.00) = 182.00, \\qquad \\frac{182.00}{882.00} \\approx 0.2063
$$

About $20.6\\%$ is well below $40\\%$.`,
      `**C) The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.**  (true)

At 45 base-rate hours each, each employee would earn 45($17.50) = $787.50, or $1,575 total. Their actual combined gross pay is $765 + $882 = $1,647, which is higher.

$$
45(17.50) = 787.50, \\qquad 2(787.50) = 1575
$$

$$
765 + 882 = 1647
$$

$1647 > 1575$.`,
      `**D) If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.**  (false)

A 15% higher base wage is $17.50(1.15) = $20.125 per hour. At that flat rate for 42.5 hours, A would earn about $855.31, which is greater than $765.

$$
17.50(1.15) = 20.125, \\qquad 42.5(20.125) = 855.3125
$$

$855.31 > 765$, so A's pay would increase, not decrease.`,
      `**E) The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).**  (true)

7 ÷ 2.5 = 2.8, while 882 ÷ 765 ≈ 1.153  -  the hours ratio is indeed greater than the pay ratio, since overtime hours are only a partial driver of total pay.

$$
\\frac{7}{2.5} = 2.8, \\qquad \\frac{882}{765} = \\frac{294}{255} = 1.1529\\ldots
$$

$2.8 > 1.153$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 43,
    solution_overview: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, $765.00 gross.

**Part 1: Building the system.**

Let $x =$ base hourly wage, y = overtime premium per hour (on top of the base wage, per OT hour).

Time coefficients come from the story's clocks - head-starts, overtime hours, or duration multipliers - not from the headline total alone.

**1. Translate: Employee A: 40 regular + 2.5 OT hours, each OT hour paid at x+y.** That observation becomes:

$$
42.5x + 2.5y = 765
$$

**2. Translate: Employee B: 40 regular + 7 OT hours.** That observation becomes:

$$
47x + 7y = 882
$$

**Part 2: The model.**

$$
42.5x + 2.5y = 765 \\tag{1}
$$

$$
47x + 7y = 882 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Employee A's equation by $2.8$ so its $y$ coefficient matches B's $7y$:

$$
2.8(42.5x + 2.5y) = 2.8(765) \\Rightarrow 119x + 7y = 2142
$$

**2.** Subtract Employee B:

$$
(119x + 7y) - (47x + 7y) = 2142 - 882
$$

$$
72x = 1260 \\Rightarrow x = \\frac{1260}{72} = 17.50
$$

**3.** Substitute $x = 17.50$ into A's equation:

$$
42.5(17.50) + 2.5y = 765 \\Rightarrow 743.75 + 2.5y = 765
$$

$$
2.5y = 21.25 \\Rightarrow y = 8.50
$$

**Answer.** The base wage is $17.50/hour and the overtime premium is $8.50/hour, so overtime pays $26.00/hour.`,
  },
  {
    id: "math-5-44",
    case_id: "MATH 5.44",
    title: `Greenfield Landscaping  -  Redundant Project Reconciliation`,
    context: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.`,
    tables_markdown: `| Project | Wood Fencing | Wire Fencing | Total Cost |
| --- | --- | --- | --- |
| Project 1 | 18 m | 24 m | $750.00 |
| Project 2 | 27 m | 36 m | $1,125.00 |
| Project 3 | 10 m | 40 m | $710.00 |`,
    statements: [
      `If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded $950.00.`,
      `The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.`,
      `Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs ($750.00 + $710.00).`,
      `If wire fencing rose by $2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.`,
      `Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded $950.00.**  (true)

The changed Project 3 would cost 20($27) + 40($11) = $540 + $440 = $980. This is greater than $950.

Project 2 is a scaled copy of Project 1: $(27, 36) = 1.5(18, 24)$ and $1.5(750) = 1125$, so drop Project 2. Divide Project 1 by 6 and Project 3 by 10:

$$
3x + 4y = 125, \\qquad x + 4y = 71
$$

Subtract: $2x = 54$, so $x = 27$. Then $27 + 4y = 71$ gives $y = 11$. Hypothetical Project 3:

$$
20(27) + 40(11) = 540 + 440 = 980
$$

$980 > 950$.`,
      `**B) The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.**  (true)

The price gap is $27 − $11 = $16. One hundred forty-five percent of the $11 wire price is 1.45($11) = $15.95, so $16 is greater.

$$
x - y = 27 - 11 = 16, \\qquad 1.45(11) = 15.95
$$

$16 > 15.95$.`,
      `**C) Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs ($750.00 + $710.00).**  (false)

The combined project costs 28(27) + 64(11) = $1,460.00, which equals $750.00 + $710.00 exactly  -  the same, not less, since cost scales linearly with meters.

$$
28(27) + 64(11) = 756 + 704 = 1460
$$

$$
750 + 710 = 1460
$$

The combined cost equals the sum, so it is not less.`,
      `**D) If wire fencing rose by $2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.**  (false)

At $13.00/m wire, Project 1 would cost 18(27) + 24(13) = $798.00, an increase of $48.00, only about 6.4%  -  well under 15%.

$$
18(27) + 24(13) = 486 + 312 = 798
$$

$$
798 - 750 = 48, \\qquad \\frac{48}{750} = 0.064
$$

A $6.4\\%$ increase is well under $15\\%$.`,
      `**E) Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.**  (false)

Project 3's rate is $710.00 ÷ 50 m = $14.20/m, while Project 1's rate is $750.00 ÷ 42 m ≈ $17.86/m  -  Project 3's rate is lower, not higher.

$$
10 + 40 = 50, \\qquad \\frac{710}{50} = 14.20
$$

$$
18 + 24 = 42, \\qquad \\frac{750}{42} \\approx 17.857
$$

$14.20 < 17.86$, so Project 3's per-meter cost is lower.`,
    ],
    difficulty_level: "4/5",
    sort_order: 44,
    solution_overview: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.

**Part 1: Building the system.**

Let $x =$ price per meter of cedar wood fencing, y = price per meter of galvanized wire fencing.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Project 1.** That observation becomes:

$$
18x + 24y = 750
$$

**2. Translate: Project 3, independent of Project 1.** That observation becomes:

$$
10x + 40y = 710
$$

**Part 2: The model.**

$$
18x + 24y = 750 \\tag{1}
$$

$$
10x + 40y = 710 \\tag{2}
$$

**Part 3: Solve.**

**1.** Check Project 2 against Project 1:

$$
(27, 36) = 1.5(18, 24), \\qquad 1.5(750) = 1125
$$

That matches Project 2 exactly, so Project 2 is redundant.

**2.** Divide Project 1 by 6 and Project 3 by 10:

$$
3x + 4y = 125, \\qquad x + 4y = 71
$$

**3.** Subtract:

$$
(3x + 4y) - (x + 4y) = 125 - 71 \\Rightarrow 2x = 54 \\Rightarrow x = 27
$$

**4.** Substitute $x = 27$ into $x + 4y = 71$:

$$
27 + 4y = 71 \\Rightarrow 4y = 44 \\Rightarrow y = 11
$$

**Answer.** Cedar wood costs $27/m and galvanized wire costs $11/m.`,
  },
  {
    id: "math-5-45",
    case_id: "MATH 5.45",
    title: `Meridian Rail  -  Two-Route Speed Reconstruction`,
    context: `Two Meridian Rail boats travel at fixed constant speeds. On one 250 km stretch, they start from opposite docks and meet after 2 hours. On a separate 356 km stretch, Boat B gets a 3-hour head start before Boat A departs; they meet exactly 1 hour after Boat A's departure.`,
    statements: [
      `The time it would take Boat A alone to travel the full 356 km stretch is more than 7 hours.`,
      `In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.`,
      `If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.`,
      `The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.`,
      `Boat B's speed is more than 60% higher than Boat A's speed.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The time it would take Boat A alone to travel the full 356 km stretch is more than 7 hours.**  (true)

Boat A travels at 48 km/h. Its time for 356 km is 356 ÷ 48 ≈ 7.42 hours, which is more than 7.

Opposite docks, 250 km in 2 hours: $2(x+y) = 250$, so $x + y = 125$. With B's 3-hour head start plus A's 1 hour on the 356 km stretch: $x + 4y = 356$. Subtract:

$$
(x + 4y) - (x + y) = 356 - 125 \\Rightarrow 3y = 231 \\Rightarrow y = 77
$$

Then $x + 77 = 125$, so $x = 48$. Solo time for 356 km:

$$
\\frac{356}{48} \\approx 7.417
$$

which is more than 7 hours.`,
      `**B) In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.**  (true)

In 2 hours, Boat A covers 2(48) = 96 km and Boat B covers 2(77) = 154 km. Their distance difference is 58 km, less than half of 250 km, which is 125 km.

$$
2(48) = 96, \\qquad 2(77) = 154, \\qquad 154 - 96 = 58
$$

$$
\\frac{250}{2} = 125
$$

$58 < 125$.`,
      `**C) If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.**  (false)

A 20% increase gives speeds 57.6 km/h and 92.4 km/h, for a 150 km/h closing speed. Closing 250 km then takes 250 ÷ 150 ≈ 1.667 hours, above 1.5 hours.

$$
1.2(48) = 57.6, \\qquad 1.2(77) = 92.4, \\qquad 57.6 + 92.4 = 150
$$

$$
\\frac{250}{150} \\approx 1.667
$$

$1.667 > 1.5$.`,
      `**D) The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.**  (true)

Their combined speed is 48 + 77 = 125 km/h. In 3 hours they cover 3(125) = 375 km, which exceeds 356 km.

$$
48 + 77 = 125, \\qquad 3(125) = 375
$$

$375 > 356$.`,
      `**E) Boat B's speed is more than 60% higher than Boat A's speed.**  (true)

Boat B is 77 − 48 = 29 km/h faster than Boat A. Relative to A, 29 ÷ 48 ≈ 60.4%, which is more than 60%.

$$
77 - 48 = 29, \\qquad \\frac{29}{48} \\approx 0.6042
$$

About $60.4\\% > 60\\%$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 45,
    solution_overview: `Two Meridian Rail boats travel at fixed constant speeds. On one 250 km stretch, they start from opposite docks and meet after 2 hours.

**Part 1: Building the system.**

Let $x =$ Boat A's speed (km/h), y = Boat B's speed (km/h).

Time coefficients come from the story's clocks - head-starts, overtime hours, or duration multipliers - not from the headline total alone.

**1. Translate: 250 km gap closed in 2 hrs: 2(x+y) = 250.** That observation becomes:

$$
x + y = 125
$$

**2. Translate: Boat A travels 1 hr; Boat B travels its 3-hr head start plus 1 more = 4 hrs.** That observation becomes:

$$
x + 4y = 356
$$

**Part 2: The model.**

$$
x + y = 125 \\tag{1}
$$

$$
x + 4y = 356 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract the first equation from the second:

$$
(x + 4y) - (x + y) = 356 - 125
$$

$$
3y = 231 \\Rightarrow y = \\frac{231}{3} = 77
$$

**2.** Substitute $y = 77$ into $x + y = 125$:

$$
x + 77 = 125 \\Rightarrow x = 48
$$

**Answer.** Boat A travels 48 km/h and Boat B travels 77 km/h.`,
  },
  {
    id: "math-5-46",
    case_id: "MATH 5.46",
    title: `Meridian Textiles  -  Three-Season Profit Reconstruction`,
    context: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.`,
    tables_markdown: `| Season | Wheat | Barley | Total Profit |
| --- | --- | --- | --- |
| Season 1 | 240 t | 160 t | $42,000 |
| Season 2 | 180 t | 260 t | $48,300 |
| Season 3 (illegible) |  | 300 t | $53,100 |`,
    statements: [
      `If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded $44,000.`,
      `Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.`,
      `Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.`,
      `Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of $53,100 would have been understated by more than $3,500.`,
      `Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded $44,000.**  (false)

Wheat earns $95/t and Barley earns $120/t. For the hypothetical Season 1, profit = 260(95) + 160(120). 24,700 + 19,200 = $43,900, and $43,900 is not more than $44,000.`,
      `**B) Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.**  (true)

Compare the per-tonne profit gap with 25% of Wheat's rate. Barley advantage = 120 - 95; benchmark = 0.25(95). The advantage is $25/t, while 25% of $95 is $23.75/t. Since 25 > 23.75, the advantage is more than 25%.`,
      `**C) Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.**  (false)

Season 3's missing Wheat tonnage was reconstructed as 180 t. Season 3 total = 180 + 300; Season 2 total = 180 + 260. Season 3 produced 480 t and Season 2 produced 440 t. Since 480 is greater than 440, it is not less.`,
      `**D) Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of $53,100 would have been understated by more than $3,500.**  (true)

The hypothetical changes only Season 3 Wheat from 180 t to 220 t. Profit = 220(95) + 300(120). The hypothetical profit is $20,900 + $36,000 = $56,900. Its gap above the recorded $53,100 is $3,800, which is more than $3,500.`,
      `**E) Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.**  (true)

Average profit per tonne is total profit divided by total tonnage. Season 1: 42,000/400. Season 2: 48,300/440. Season 1 is $105.00/t; Season 2 is about $109.77/t. The Season 2 average is higher.

$$
240 + 160 = 400, \\qquad \\frac{42000}{400} = 105
$$

$$
180 + 260 = 440, \\qquad \\frac{48300}{440} \\approx 109.773
$$

$109.77 > 105$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 46,
    solution_overview: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.

**Part 1: Building the system.**

Let $x =$ profit per tonne of Wheat, y = profit per tonne of Barley.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Season 1: 240x+160y=42000, ÷80.** That observation becomes:

$$
3x + 2y = 525
$$

**2. Translate: Season 2: 180x+260y=48300, ÷20.** That observation becomes:

$$
9x + 13y = 2415
$$

**Part 2: The model.**

$$
3x + 2y = 525 \\tag{1}
$$

$$
9x + 13y = 2415 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the simplified Season 1 by 13 and Season 2 by 2 so the $y$ coefficients both become $26y$:

$$
13(3x + 2y) = 13(525) \\Rightarrow 39x + 26y = 6825
$$

$$
2(9x + 13y) = 2(2415) \\Rightarrow 18x + 26y = 4830
$$

**2.** Subtract:

$$
(39x + 26y) - (18x + 26y) = 6825 - 4830
$$

$$
21x = 1995 \\Rightarrow x = \\frac{1995}{21} = 95
$$

**3.** Substitute $x = 95$ into $3x + 2y = 525$:

$$
3(95) + 2y = 525 \\Rightarrow 285 + 2y = 525 \\Rightarrow 2y = 240 \\Rightarrow y = 120
$$

**4.** Reconstruct Season 3's Wheat tonnage $T$:

$$
95T + 120(300) = 53100 \\Rightarrow 95T + 36000 = 53100
$$

$$
95T = 17100 \\Rightarrow T = 180
$$

**Answer.** Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes`,
  },
  {
    id: "math-5-47",
    case_id: "MATH 5.47",
    title: `Bramwell & Co.  -  Double-Condition Age Reconstruction`,
    context: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.`,
    statements: [
      `Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.`,
      `The current age gap (x - y) is more than 45% of the elder employee's current age.`,
      `Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.`,
      `Ten years ago, the sum of their ages was less than 40.`,
      `There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.**  (true)

The present ages are elder 47 and younger 19. In 15 years, compare 47 + 15 with 2(19 + 15). The ages will be 62 and 34, and twice 34 is 68. Since 62 < 68, the elder will be less than double the younger.`,
      `**B) The current age gap (x - y) is more than 45% of the elder employee's current age.**  (true)

The present age gap is compared with 45% of the elder's present age. Gap = 47 - 19; benchmark = 0.45(47). The gap is 28 years and 45% of 47 is 21.15 years. Since 28 > 21.15, the condition holds.`,
      `**C) Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.**  (false)

Halfway to the nine-year mark is 4.5 years from now. Ratio = (47 + 4.5)/(19 + 4.5). The ratio is 51.5/23.5 ≈ 2.19, which is not more than 2.5.`,
      `**D) Ten years ago, the sum of their ages was less than 40.**  (false)

Go back ten years from the present ages. Sum = (47 - 10) + (19 - 10). The sum was 37 + 9 = 46, and 46 is not less than 40.`,
      `**E) There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.**  (true)

The original condition says the elder was three times the younger five years ago. Time ago = 5 years; compare 5 with 4. Five years ago is indeed more than four years ago, so that required point in time exists.

The scenario states this was true exactly five years ago, and five years is indeed more than four years ago.

Check the ages five years ago against the triple condition:

$$
47 - 5 = 42, \\qquad 19 - 5 = 14, \\qquad 3(14) = 42
$$

The elder was exactly three times the younger five years ago, and $5 > 4$.`,
    ],
    difficulty_level: "4/5",
    sort_order: 47,
    solution_overview: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.

**Part 1: Building the system.**

Let $x =$ elder employee's current age, y = younger employee's current age.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: five years ago, elder was 3× younger.** That observation becomes:

$$
x - 5 = 3(y - 5)
$$

**2. Translate: in nine years, elder will be 2× younger.** That observation becomes:

$$
x + 9 = 2(y + 9)
$$

**Part 2: The model.**

$$
x - 5 = 3(y - 5) \\tag{1}
$$

$$
x + 9 = 2(y + 9) \\tag{2}
$$

**Part 3: Solve.**

**1.** Expand both age conditions:

$$
x - 5 = 3(y - 5) \\Rightarrow x - 5 = 3y - 15 \\Rightarrow x = 3y - 10
$$

$$
x + 9 = 2(y + 9) \\Rightarrow x + 9 = 2y + 18 \\Rightarrow x = 2y + 9
$$

**2.** Set the two expressions for $x$ equal:

$$
3y - 10 = 2y + 9 \\Rightarrow y = 19
$$

**3.** Substitute $y = 19$ into $x = 2y + 9$:

$$
x = 2(19) + 9 = 38 + 9 = 47
$$

**Answer.** Elder employee = 47 years old | Younger employee = 19 years old`,
  },
  {
    id: "math-5-48",
    case_id: "MATH 5.48",
    title: `Crestline Retail Group  -  Decimal Markup Reconstruction`,
    context: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.`,
    tables_markdown: `| Order | Product A Units | Product B Units | Retail Total |
| --- | --- | --- | --- |
| Order 1 | 8 | 5 | $1,052.80 |
| Order 2 | 16 | 10 | $2,105.60 |
| Order 3 | 3 | 12 | $1,350.60 |`,
    statements: [
      `If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual $1,350.60.`,
      `The dollar markup on Product B is more than 80% of the dollar markup on Product A.`,
      `Order 1's total retail markup exceeds $150.00.`,
      `If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than $280.00.`,
      `The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual $1,350.60.**  (false)

Swapping the markup multipliers changes Product A to 1.18x and Product B to 1.32y. Swapped Order 3 total = 3(1.18×55) + 12(1.32×80). The total is $194.70 + $1,267.20 = $1,461.90, which is above the actual $1,350.60.

$$
1.18(55) = 64.90, \\qquad 1.32(80) = 105.60
$$

$$
3(64.90) + 12(105.60) = 194.70 + 1267.20 = 1461.90
$$

$1461.90 > 1350.60$, so the swapped-markup total increases, not decreases.`,
      `**B) The dollar markup on Product B is more than 80% of the dollar markup on Product A.**  (true)

Compare each product's dollar markup per unit. A markup = 0.32(55); B markup = 0.18(80). A's markup is $17.60 and B's is $14.40. Then 14.40/17.60 ≈ 81.8%, which exceeds 80%.`,
      `**C) Order 1's total retail markup exceeds $150.00.**  (true)

Order 1's markup is retail total minus wholesale total. Wholesale = 8(55) + 5(80); markup = 1,052.80 - wholesale. Wholesale is $840.00, so the markup is $212.80. This exceeds $150.00.`,
      `**D) If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than $280.00.**  (true)

Only Product B's quantity rises, by 3 units. Extra retail value = 3[1.18(80)]. One B sells for $94.40, so 3 more add $283.20. Since $283.20 > $280, the claim holds.`,
      `**E) The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.**  (true)

Wholesale ratio: 80 ÷ 55 ≈ 1.4545. Retail ratio: (1.18\\times 80) ÷ (1.32\\times 55) ≈ 1.3003. The wholesale ratio is larger because Product A carries the bigger markup, compressing its retail-side gap.

$$
\\frac{80}{55} \\approx 1.4545
$$

$$
1.18(80) = 94.40, \\qquad 1.32(55) = 72.60, \\qquad \\frac{94.40}{72.60} \\approx 1.3003
$$

$1.4545 > 1.3003$.`,
    ],
    difficulty_level: "5/5",
    sort_order: 48,
    solution_overview: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.

**Part 1: Building the system.**

Let $x =$ wholesale cost of Product A, y = wholesale cost of Product B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Order 1: retail A is 1.32x, retail B is 1.18y.** That observation becomes:

$$
10.56x + 5.9y = 1052.80
$$

**2. Translate: Order 3, independent of Order 1.** That observation becomes:

$$
3.96x + 14.16y = 1350.60
$$

**Part 2: The model.**

$$
10.56x + 5.9y = 1052.80 \\tag{1}
$$

$$
3.96x + 14.16y = 1350.60 \\tag{2}
$$

**Part 3: Solve.**

**1.** Order 2 $(16, 10, 2105.60)$ is exactly double Order 1 $(8, 5, 1052.80)$, so it is redundant and set aside.

**2.** Multiply Order 1 by $0.375$ so its $x$ coefficient matches Order 3's $3.96x$:

$$
0.375(10.56x + 5.9y) = 0.375(1052.80)
$$

$$
3.96x + 2.2125y = 394.80
$$

**3.** Subtract from Order 3:

$$
(3.96x + 14.16y) - (3.96x + 2.2125y) = 1350.60 - 394.80
$$

$$
11.9475y = 955.80 \\Rightarrow y = \\frac{955.80}{11.9475} = 80.00
$$

**4.** Substitute $y = 80$ into Order 1:

$$
10.56x + 5.9(80) = 1052.80 \\Rightarrow 10.56x + 472 = 1052.80
$$

$$
10.56x = 580.80 \\Rightarrow x = 55.00
$$

**Answer.** Product A wholesale = $55.00 | Product B wholesale = $80.00`,
  },
  {
    id: "math-5-49",
    case_id: "MATH 5.49",
    title: `Fairview Amateur League  -  Cross-Team Points Reconstruction`,
    context: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points. The Ravens: 7 wins, 6 draws, 1 loss in 14 matches, 8 points fewer than the Falcons.`,
    statements: [
      `If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.`,
      `The Ravens earned more than 45% of their total points from draws alone.`,
      `Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.`,
      `The Falcons' win-to-draw point contribution ratio exceeds 15.`,
      `A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.**  (true)

A win is worth 7 points, so half a win is 3.5 points. Falcons at that draw value = 9(7) + 4(3.5). The score would be 63 + 14 = 77, greater than the actual 75.`,
      `**B) The Ravens earned more than 45% of their total points from draws alone.**  (false)

The Ravens earned 67 points total, including points from six draws. Draw share = 6(3)/67. Draw points are 18, and 18/67 ≈ 26.9%, far below 45%.`,
      `**C) Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.**  (true)

Apply the stated alternate scoring system to both records. Falcons = 9(2)+4(1); Ravens = 7(2)+6(1). The Falcons score 22 and the Ravens score 20, so the Falcons remain ahead.`,
      `**D) The Falcons' win-to-draw point contribution ratio exceeds 15.**  (false)

Compare the Falcons' points from wins with their points from draws. Ratio = 9(7)/[4(3)]. The contributions are 63 and 12, giving 63/12 = 5.25. That does not exceed 15.`,
      `**E) A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.**  (false)

Three draws become wins, leaving 12 wins and 1 draw. Revised score = 12(7) + 1(3); increase = revised - 75. The revised score is 87, so the increase is 12 points, not more than 20.`,
    ],
    difficulty_level: "5/5",
    sort_order: 49,
    solution_overview: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points.

**Part 1: Building the system.**

Let $x =$ points per win, y = points per draw.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Falcons.** That observation becomes:

$$
9x + 4y = 75
$$

**2. Translate: Ravens: 75 - 8 = 67 total points.** That observation becomes:

$$
7x + 6y = 67
$$

**Part 2: The model.**

$$
9x + 4y = 75 \\tag{1}
$$

$$
7x + 6y = 67 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the Falcons equation by 3 and the Ravens equation by 2 so the $y$ coefficients both become $12y$:

$$
3(9x + 4y) = 3(75) \\Rightarrow 27x + 12y = 225
$$

$$
2(7x + 6y) = 2(67) \\Rightarrow 14x + 12y = 134
$$

**2.** Subtract:

$$
(27x + 12y) - (14x + 12y) = 225 - 134
$$

$$
13x = 91 \\Rightarrow x = 7
$$

**3.** Substitute $x = 7$ into the Falcons equation:

$$
9(7) + 4y = 75 \\Rightarrow 63 + 4y = 75 \\Rightarrow 4y = 12 \\Rightarrow y = 3
$$

**Answer.** Win = 7 points | Draw = 3 points`,
  },
  {
    id: "math-5-50",
    case_id: "MATH 5.50",
    title: `Meridian Alloys  -  Decimal Density Reconstruction and Audit`,
    context: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).`,
    tables_markdown: `| Batch | Metal A | Metal B | Total Mass |
| --- | --- | --- | --- |
| Batch 1 | 12 L | 8 L | 182.4 kg |
| Batch 2 | 5 L | 15 L | 209.0 kg |
| Batch 3 (audit) | 9.5 L (conv.) | 6 L | 147.0 kg (recorded) |`,
    statements: [
      `If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.`,
      `Metal B's density is more than 50% greater than Metal A's density.`,
      `The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.`,
      `If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.`,
      `Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.**  (true)

Use Metal A's 7.6 kg/L and Metal B's 11.4 kg/L in the altered Batch 1. Mass = 12(7.6) + 10(11.4). The mass is 91.2 + 114 = 205.2 kg, which exceeds 200 kg.`,
      `**B) Metal B's density is more than 50% greater than Metal A's density.**  (false)

“More than 50% greater” is stricter than being exactly 50% greater. Relative increase = (11.4 - 7.6)/7.6. The increase is 3.8/7.6 = 0.50 = 50% exactly, not more than 50%.`,
      `**C) The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.**  (true)

Batch 3's predicted mass is 140.6 kg while its recorded mass is 147.0 kg. Discrepancy percentage = 6.4/147.0 × 100%. This is about 4.35%, which is more than 4%.

$$
9.5(7.6) + 6(11.4) = 72.2 + 68.4 = 140.6
$$

$$
147.0 - 140.6 = 6.4, \\qquad \\frac{6.4}{147.0} \\approx 0.04354
$$

About $4.35\\% > 4\\%$.`,
      `**D) If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.**  (false)

Replace Batch 3's converted 9.5 L of A with 10 L while keeping B at 6 L. Predicted mass = 10(7.6) + 6(11.4). The result is 76 + 68.4 = 144.4 kg. Its distance from 147.0 kg is 2.6 kg, not within 2 kg.`,
      `**E) Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.**  (true)

Combining batches adds each metal's volumes before applying the same densities. Combined mass = 17(7.6) + 23(11.4). This gives 129.2 + 262.2 = 391.4 kg, exactly equal to 182.4 + 209.0.`,
    ],
    difficulty_level: "5/5",
    sort_order: 50,
    solution_overview: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).

**Part 1: Building the system.**

Let $x =$ mass per liter of Metal A (kg/L), y = mass per liter of Metal B (kg/L).

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Batch 1.** That observation becomes:

$$
12x + 8y = 182.4
$$

**2. Translate: Batch 2.** That observation becomes:

$$
5x + 15y = 209.0
$$

**Part 2: The model.**

$$
12x + 8y = 182.4 \\tag{1}
$$

$$
5x + 15y = 209.0 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Batch 1 by 4 and Batch 2 by 5:

$$
3x + 2y = 45.6, \\qquad x + 3y = 41.8 \\Rightarrow x = 41.8 - 3y
$$

**2.** Substitute into the first simplified equation:

$$
3(41.8 - 3y) + 2y = 45.6 \\Rightarrow 125.4 - 9y + 2y = 45.6
$$

$$
-7y = 45.6 - 125.4 = -79.8 \\Rightarrow y = \\frac{79.8}{7} = 11.4
$$

**3.** Substitute $y = 11.4$ back:

$$
x = 41.8 - 3(11.4) = 41.8 - 34.2 = 7.6
$$

**4.** Audit Batch 3:

$$
9.5(7.6) + 6(11.4) = 72.2 + 68.4 = 140.6
$$

versus 147.0 kg recorded, a 6.4 kg discrepancy.

**Answer.** Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)`,
  },
  {
    id: "math-5-51",
    case_id: "MATH 5.51",
    title: `Halcyon Ventures  -  Fee Structure Reconstruction from Client Differentials`,
    context: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is $600,000, fee $10,800. Client 1's AUM exceeds Client 2's by $150,000 and pays $2,400 more in total fees. The flat retainer is identical for every client, so it cancels out of any fee-difference comparison.`,
    statements: [
      `A client with AUM of $850,000 would pay a fee representing less than 1.75% of their AUM.`,
      `The flat retainer accounts for more than 10% of Client 2's total fee.`,
      `If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM $750,000) would decrease compared to its actual amount.`,
      `The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.`,
      `A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) A client with AUM of $850,000 would pay a fee representing less than 1.75% of their AUM.**  (true)

The fee formula is 0.016(AUM) + 1,200. Fee at $850,000 = 0.016(850,000) + 1,200; effective rate = fee/850,000. The fee is $14,800, and 14,800/850,000 ≈ 1.7412%. That is less than 1.75%.`,
      `**B) The flat retainer accounts for more than 10% of Client 2's total fee.**  (true)

Compare the $1,200 retainer with Client 2's $10,800 total fee. Retainer share = 1,200/10,800. The share is about 11.11%, which exceeds 10%.`,
      `**C) If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM $750,000) would decrease compared to its actual amount.**  (true)

Client 1 has $750,000 AUM; both the rate and retainer are changed in the hypothetical. Actual = 0.016(750,000)+1,200; revised = 0.014(750,000)+2,400. Actual fee = $13,200; revised fee = $12,900. The revised fee is lower.`,
      `**D) The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.**  (false)

Effective fee rates include the retainer and therefore differ by client. Client 1 = 13,200/750,000; Client 2 = 10,800/600,000. The rates are 1.76% and 1.80%, a difference of 0.04 percentage points. That is not more than 0.05.`,
      `**E) A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.**  (false)

Triple Client 2's AUM is $1,800,000, but the $1,200 retainer is not tripled. Fee = 0.016(1,800,000)+1,200; compare with 3(10,800). The new fee is $30,000, while triple Client 2's fee is $32,400. It is not more.`,
    ],
    difficulty_level: "5/5",
    sort_order: 51,
    solution_overview: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is $600,000, fee $10,800.

**Part 1: Building the system.**

Let $x =$ the percentage fee rate (as a decimal), y = the flat retainer (in dollars).

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Client 2's total fee.** That observation becomes:

$$
600000x + y = 10800
$$

**2. Translate: fee difference ÷ AUM difference  -  retainer cancels.** That observation becomes:

$$
150000x = 2400
$$

**Part 2: The model.**

$$
600000x + y = 10800 \\tag{1}
$$

$$
150000x = 2400 \\tag{2}
$$

**Part 3: Solve.**

**1.** The fee-difference equation already isolates the rate:

$$
150000x = 2400 \\Rightarrow x = \\frac{2400}{150000} = 0.016
$$

(that is $1.6\\%$).

**2.** Substitute into Client 2's total:

$$
600000(0.016) + y = 10800 \\Rightarrow 9600 + y = 10800 \\Rightarrow y = 1200
$$

**Answer.** Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)`,
  },
  {
    id: "math-5-52",
    case_id: "MATH 5.52",
    title: `Solventis Labs  -  Multi-Unit Suspension Concentration Reconstruction`,
    context: `Solventis blends two drug suspensions, each with a fixed mg/mL concentration. A third batch's Suspension A volume was logged in liters, then converted to mL.`,
    tables_markdown: `| Batch | Suspension A | Suspension B | Total Content |
| --- | --- | --- | --- |
| Batch 1 | 500 mL | 300 mL | 8,880 mg |
| Batch 2 | 200 mL | 700 mL | 12,600 mg |
| Batch 3 (QC) | 0.32 L (=320 mL) | 450 mL | 9,700 mg (recorded) |`,
    statements: [
      `Suspension B's concentration is more than 85% higher than Suspension A's concentration.`,
      `Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.`,
      `If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.`,
      `The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.`,
      `Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Suspension B's concentration is more than 85% higher than Suspension A's concentration.**  (true)

The unknowns are concentrations: A = 8.4 mg/mL and B = 15.6 mg/mL. Relative concentration increase = (15.6 - 8.4)/8.4. The increase is 7.2/8.4 ≈ 0.8571 = 85.71%, which is more than 85%.

$$
15.6 - 8.4 = 7.2, \\qquad \\frac{7.2}{8.4} = \\frac{72}{84} = \\frac{6}{7} \\approx 0.8571
$$

About $85.71\\% > 85\\%$.`,
      `**B) Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.**  (false)

Batch 3's A volume is 0.32 L = 320 mL, so its predicted content is 320(8.4) + 450(15.6) = 9,708 mg. Percentage difference = |9,708 - 9,700|/9,700 × 100%. The gap is 8 mg, and 8/9,700 ≈ 0.0825%, far below 1%.`,
      `**C) If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.**  (true)

The hypothetical doubles Batch 1's B volume from 300 mL to 600 mL, while A remains 500 mL. Content = 500(8.4) + 600(15.6). The content is 4,200 + 9,360 = 13,560 mg, which exceeds 13,500 mg.`,
      `**D) The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.**  (true)

Pool the recorded contents of Batches 1 and 2, then compare with twice Batch 2 alone. Pooled = 8,880 + 12,600; benchmark = 2(12,600). Pooled content is 21,480 mg and the benchmark is 25,200 mg. Since 21,480 < 25,200, the claim holds.`,
      `**E) Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.**  (true)

Compare what fraction of each batch's total volume is Suspension B. Batch 2 B share = 700/900; Batch 3 B share = 450/(320+450). Batch 2 is about 77.78% B; Batch 3 is 450/770 ≈ 58.44% B. Batch 2's share is higher.`,
    ],
    difficulty_level: "5/5",
    sort_order: 52,
    solution_overview: `Solventis blends two drug suspensions, each with a fixed mg/mL concentration. A third batch's Suspension A volume was logged in liters, then converted to mL.

**Part 1: Building the system.**

Let $x =$ mg/mL concentration of Suspension A, y = mg/mL concentration of Suspension B.

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Batch 1.** That observation becomes:

$$
500x + 300y = 8880
$$

**2. Translate: Batch 2.** That observation becomes:

$$
200x + 700y = 12600
$$

**Part 2: The model.**

$$
500x + 300y = 8880 \\tag{1}
$$

$$
200x + 700y = 12600 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Batch 1 by 100 and Batch 2 by 100:

$$
5x + 3y = 88.8, \\qquad 2x + 7y = 126
$$

**2.** Multiply the first by 7 and the second by 3 so the $y$ coefficients both become $21y$:

$$
35x + 21y = 621.6, \\qquad 6x + 21y = 378
$$

**3.** Subtract:

$$
(35x + 21y) - (6x + 21y) = 621.6 - 378
$$

$$
29x = 243.6 \\Rightarrow x = \\frac{243.6}{29} = 8.4
$$

**4.** Substitute $x = 8.4$ into $2x + 7y = 126$:

$$
2(8.4) + 7y = 126 \\Rightarrow 16.8 + 7y = 126 \\Rightarrow 7y = 109.2 \\Rightarrow y = 15.6
$$

**5.** Audit Batch 3 ($0.32$ L $= 320$ mL of A):

$$
320(8.4) + 450(15.6) = 2688 + 7020 = 9708
$$

versus 9,700 mg recorded, an 8 mg discrepancy.

**Answer.** Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)`,
  },
  {
    id: "math-5-53",
    case_id: "MATH 5.53",
    title: `Ridgeline Construction  -  Waste-Adjusted Material Cost Reconstruction`,
    context: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall. Job 1 needed 200 usable studs + 150 usable sheets, invoice $7,164.00. Job 2 needed 350 usable studs + 175 usable sheets, invoice $8,946.00.`,
    statements: [
      `The total waste-related cost on Invoice 1 exceeds $700.00.`,
      `If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than $150.00.`,
      `Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.`,
      `The drywall price (y) is more than 8 times the stud price (x).`,
      `Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The total waste-related cost on Invoice 1 exceeds $700.00.**  (false)

Job 1 orders 24 waste studs and 12 waste drywall sheets beyond the usable amounts. Waste cost = 24(4.50) + 12(38). Waste studs cost $108 and waste sheets cost $456, for $564 total. That does not exceed $700.

Waste quantities are $12\\%$ of 200 studs and $8\\%$ of 150 sheets:

$$
200(0.12) = 24, \\qquad 150(0.08) = 12
$$

$$
24(4.50) + 12(38) = 108 + 456 = 564
$$

$564 < 700$.`,
      `**B) If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than $150.00.**  (true)

Reducing drywall waste to 5% changes Job 2's ordered drywall to 175(1.05) = 183.75 sheets. New invoice = 392(4.50) + 183.75(38). The new total is $8,746.50, a decrease of $199.50 from $8,946.00. This is more than $150.`,
      `**C) Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.**  (true)

The usable-only cost excludes waste but uses Job 2's 350 studs and 175 sheets. Usable cost = 350(4.50)+175(38); benchmark = 0.90(8,946). Usable cost is $8,225, while 90% of the invoice is $8,051.40. Since $8,225 is higher, the claim is true.`,
      `**D) The drywall price (y) is more than 8 times the stud price (x).**  (true)

Compare drywall's unit price with eight times the stud's unit price. Ratio = 38/4.50. 38/4.50 ≈ 8.44, which is more than 8.`,
      `**E) Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.**  (true)

Each job's waste percentage is waste cost divided by usable-material cost. Job 1 increase = (7,164-6,600)/6,600; Job 2 increase = (8,946-8,225)/8,225. Job 1 increases by about 8.545%; Job 2 by about 8.767%. Job 1's increase is smaller.

Usable costs at the recovered prices:

$$
200(4.50) + 150(38) = 900 + 5700 = 6600
$$

$$
350(4.50) + 175(38) = 1575 + 6650 = 8225
$$

$$
\\frac{7164 - 6600}{6600} = \\frac{564}{6600} \\approx 0.08545
$$

$$
\\frac{8946 - 8225}{8225} = \\frac{721}{8225} \\approx 0.08766
$$

Job 1's $8.545\\%$ is smaller than Job 2's $8.767\\%$.`,
    ],
    difficulty_level: "5/5",
    sort_order: 53,
    solution_overview: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall.

**Part 1: Building the system.**

Let $x =$ price per stud, y = price per drywall sheet. The ordered (waste-inflated) quantities must be computed from the usable amounts before any pricing model can be built.

Waste allowances change how many units are purchased relative to usable amounts; the equations follow the as-ordered quantities that actually appear on the invoice.

**1. Translate: Job 1: 200×1.12=224 studs, 150×1.08=162 sheets.** That observation becomes:

$$
224x + 162y = 7164
$$

**2. Translate: Job 2: 350×1.12=392 studs, 175×1.08=189 sheets.** That observation becomes:

$$
392x + 189y = 8946
$$

**Part 2: The model.**

$$
224x + 162y = 7164 \\tag{1}
$$

$$
392x + 189y = 8946 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Job 1 by $1.75$ so its stud coefficient matches Job 2's $392x$ ($224 \\times 1.75 = 392$):

$$
1.75(224x + 162y) = 1.75(7164) \\Rightarrow 392x + 283.5y = 12537
$$

**2.** Subtract Job 2:

$$
(392x + 283.5y) - (392x + 189y) = 12537 - 8946
$$

$$
94.5y = 3591 \\Rightarrow y = \\frac{3591}{94.5} = 38.00
$$

**3.** Substitute $y = 38$ into Job 1:

$$
224x + 162(38) = 7164 \\Rightarrow 224x + 6156 = 7164
$$

$$
224x = 1008 \\Rightarrow x = 4.50
$$

**Answer.** Stud price = $4.50 | Drywall sheet price = $38.00`,
  },
  {
    id: "math-5-54",
    case_id: "MATH 5.54",
    title: `Precision Dynamics  -  Sensor Calibration Curve Reconstruction`,
    context: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.`,
    tables_markdown: `| Point | Reading | Reference True Value | Role |
| --- | --- | --- | --- |
| Point 1 | 12.4 | 56.90 | Calibration |
| Point 2 | 31.7 | 124.45 | Calibration |
| Point 3 | 45.0 | 172.20 | Verification (recorded) |`,
    statements: [
      `The scale factor exceeds 3.4 by more than 2.5%.`,
      `If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.`,
      `The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.`,
      `The percentage increase in true value between Point 1 and Point 2 is more than 100%.`,
      `A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The scale factor exceeds 3.4 by more than 2.5%.**  (true)

The scale factor is 3.5, compared with 3.4. Relative excess = (3.5-3.4)/3.4 × 100%. The excess is about 2.94%, which is more than 2.5%.

From the two calibration points:

$$
x = \\frac{124.45 - 56.90}{31.7 - 12.4} = \\frac{67.55}{19.3} = 3.50
$$

$$
\\frac{3.50 - 3.40}{3.40} = \\frac{0.10}{3.40} \\approx 0.02941
$$

About $2.94\\% > 2.5\\%$.`,
      `**B) If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.**  (true)

Double the offset 13.5 to 27 while keeping scale 3.5. True value at 20 = 3.5(20)+27. The value is 70+27 = 97, which exceeds 95.`,
      `**C) The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.**  (false)

At reading 45.0, the curve predicts 171.00 while the reference is 172.20. Difference = 171.00 - 172.20. The difference is -1.20, so the prediction is lower, not higher; it cannot exceed the reference by more than 1%.

The predicted value (171.00) is actually lower than the recorded value (172.20), not higher  -  so it cannot exceed it by any positive percentage.`,
      `**D) The percentage increase in true value between Point 1 and Point 2 is more than 100%.**  (true)

Compare the change from Point 1's 56.90 to Point 2's 124.45 with Point 1. Percentage increase = (124.45-56.90)/56.90 × 100%. The increase is 67.55/56.90 ≈ 118.7%, which exceeds 100%.`,
      `**E) A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).**  (false)

Predict the true value at reading 8.0 and compare it with half of 56.90. Prediction = 3.5(8)+13.5; half benchmark = 56.90/2. The prediction is 41.5; half of Point 1 is 28.45. Since 41.5 is not less than 28.45, the claim fails.`,
    ],
    difficulty_level: "5/5",
    sort_order: 54,
    solution_overview: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.

**Part 1: Building the system.**

Let $x =$ the sensor's scale factor, y = the sensor's offset, so that True Value = x·(Reading) + y.

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Point 1.** That observation becomes:

$$
12.4x + y = 56.90
$$

**2. Translate: Point 2.** That observation becomes:

$$
31.7x + y = 124.45
$$

**Part 2: The model.**

$$
12.4x + y = 56.90 \\tag{1}
$$

$$
31.7x + y = 124.45 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Point 1 from Point 2 to cancel the offset $y$:

$$
(31.7x + y) - (12.4x + y) = 124.45 - 56.90
$$

$$
19.3x = 67.55 \\Rightarrow x = \\frac{67.55}{19.3} = 3.50
$$

**2.** Substitute $x = 3.50$ into Point 1:

$$
12.4(3.50) + y = 56.90 \\Rightarrow 43.40 + y = 56.90 \\Rightarrow y = 13.50
$$

**3.** Verification at reading $45.0$:

$$
45.0(3.50) + 13.50 = 157.50 + 13.50 = 171.00
$$

versus recorded 172.20, a $1.20$ discrepancy.

**Answer.** Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)`,
  },
  {
    id: "math-5-55",
    case_id: "MATH 5.55",
    title: `Meridian Commodities  -  Blended Shipment Price Reconstruction`,
    context: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost $2,943.20. Shipment 2: 800 kg total, mixed 5:3 Coffee:Cocoa, cost $4,555.00.`,
    statements: [
      `Coffee costs more than 25% more per kilogram than Cocoa.`,
      `Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.`,
      `If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual $4,555.00.`,
      `The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.`,
      `The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Coffee costs more than 25% more per kilogram than Cocoa.**  (true)

Coffee costs $6.20/kg and Cocoa costs $4.85/kg. Relative price premium = (6.20-4.85)/4.85 × 100%. The premium is 1.35/4.85 ≈ 27.84%, which is more than 25%.`,
      `**B) Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.**  (true)

Shipment 1 has 312 kg of Coffee out of its 3:2 split. Coffee cost share = 312(6.20)/2,943.20. Coffee contributes $1,934.40, and $1,934.40/$2,943.20 ≈ 65.72%. This exceeds 65%.

$$
\\frac{3}{5}(520) = 312, \\qquad 312(6.20) = 1934.40
$$

$$
\\frac{1934.40}{2943.20} \\approx 0.6572
$$

About $65.72\\% > 65\\%$.`,
      `**C) If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual $4,555.00.**  (true)

A 1:1 split of 800 kg gives 400 kg of each commodity. Cost = 400(6.20)+400(4.85). The hypothetical cost is $2,480+$1,940 = $4,420, less than $4,555.`,
      `**D) The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.**  (false)

Add the Coffee kilograms and Cocoa kilograms across both shipments, then price each total. Coffee = 812(6.20); Cocoa = 508(4.85). Coffee costs $5,034.40 in total; Cocoa costs $2,463.80. Cocoa does not exceed Coffee.

Shipment 2 at 5:3 over 800 kg is $500$ kg Coffee and $300$ kg Cocoa. Combined:

$$
312 + 500 = 812, \\qquad 208 + 300 = 508
$$

$$
812(6.20) = 5034.40, \\qquad 508(4.85) = 2463.80
$$

$2463.80 < 5034.40$.`,
      `**E) The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.**  (true)

Compare the $1.35 price gap with 30% of Coffee's $6.20 price. Gap = 6.20-4.85; benchmark = 0.30(6.20). The gap is $1.35 and the benchmark is $1.86. Since 1.35 < 1.86, the claim is true.`,
    ],
    difficulty_level: "5/5",
    sort_order: 55,
    solution_overview: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost $2,943.20.

**Part 1: Building the system.**

Let $x =$ price per kg of Coffee, y = price per kg of Cocoa. Individual weights within each shipment must be worked out from the total weight and ratio before a pricing model can be built.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Shipment 1: 520 kg split 3:2 → 312 kg Coffee, 208 kg Cocoa.** That observation becomes:

$$
312x + 208y = 2943.2
$$

**2. Translate: Shipment 2: 800 kg split 5:3 → 500 kg Coffee, 300 kg Cocoa.** That observation becomes:

$$
500x + 300y = 4555
$$

**Part 2: The model.**

$$
312x + 208y = 2943.2 \\tag{1}
$$

$$
500x + 300y = 4555 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Shipment 1 by 8 and Shipment 2 by 100:

$$
39x + 26y = 367.9, \\qquad 5x + 3y = 45.55 \\Rightarrow x = 9.11 - 0.6y
$$

**2.** Substitute into the first simplified equation:

$$
39(9.11 - 0.6y) + 26y = 367.9
$$

$$
355.29 - 23.4y + 26y = 367.9 \\Rightarrow 355.29 + 2.6y = 367.9
$$

$$
2.6y = 12.61 \\Rightarrow y = \\frac{12.61}{2.6} = 4.85
$$

**3.** Substitute $y = 4.85$ back:

$$
x = 9.11 - 0.6(4.85) = 9.11 - 2.91 = 6.20
$$

**Answer.** Coffee = $6.20/kg | Cocoa = $4.85/kg`,
  },
  {
    id: "math-5-56",
    case_id: "MATH 5.56",
    title: `Continental Freight  -  Fleet Fuel Rate Reconstruction`,
    context: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).`,
    tables_markdown: `| Route | Truck | Van | Total Fuel |
| --- | --- | --- | --- |
| Route 1 | 850 km | 620 km | 383.6 L |
| Route 2 | 500 km | 900 km | 322.0 L |
| Route 3 (audit) | 155.3 mi (≈250 km) | 400 km | 155.0 L (recorded) |`,
    statements: [
      `Truck fuel consumption is more than 75% higher than Van fuel consumption.`,
      `Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.`,
      `If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.`,
      `Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.`,
      `Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Truck fuel consumption is more than 75% higher than Van fuel consumption.**  (true)

Trucks use 32 L/100 km and Vans use 18 L/100 km. Relative excess = (32-18)/18 × 100%. The excess is 14/18 ≈ 77.78%, which is more than 75%.`,
      `**B) Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.**  (false)

Route 3's predicted fuel is 152 L and its recorded fuel is 155 L. Percent below recorded = (155-152)/155 × 100%. The difference is 3 L, or about 1.94% of 155 L. That is not more than 2%.

$$
2.5(32) + 4(18) = 80 + 72 = 152
$$

$$
155 - 152 = 3, \\qquad \\frac{3}{155} \\approx 0.01935
$$

About $1.94\\%$, which is not more than $2\\%$.`,
      `**C) If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.**  (true)

Convert the hypothetical distances to hundreds of km for rates given per 100 km. Fuel = 8.5(32)+9(18). The total is 272+162 = 434 L, which exceeds 430 L.`,
      `**D) Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.**  (true)

Route 2's combined fuel rate is found from its total fuel and total distance. Average = 322/(500+900)×100. The rate is 23 L/100 km. It is 5 from the Van rate 18 and 9 from the Truck rate 32, so it is closer to Van.`,
      `**E) Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.**  (true)

Route 1's actual two-vehicle fuel is compared with two separate full-distance runs. Full-distance comparison = 14.7(32)+14.7(18). This hypothetical sum is 470.4+264.6 = 735 L, greater than Route 1's actual 383.6 L.`,
    ],
    difficulty_level: "5/5",
    sort_order: 56,
    solution_overview: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).

**Part 1: Building the system.**

Let $x =$ Truck fuel consumption (L/100km), y = Van fuel consumption (L/100km).

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Route 1, distances in hundreds of km.** That observation becomes:

$$
8.5x + 6.2y = 383.6
$$

**2. Translate: Route 2, distances in hundreds of km.** That observation becomes:

$$
5x + 9y = 322
$$

**Part 2: The model.**

$$
8.5x + 6.2y = 383.6 \\tag{1}
$$

$$
5x + 9y = 322 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Route 1 by 9 and Route 2 by 6.2 so the $y$ coefficients both become $55.8y$:

$$
9(8.5x + 6.2y) = 9(383.6) \\Rightarrow 76.5x + 55.8y = 3452.4
$$

$$
6.2(5x + 9y) = 6.2(322) \\Rightarrow 31x + 55.8y = 1996.4
$$

**2.** Subtract:

$$
(76.5x + 55.8y) - (31x + 55.8y) = 3452.4 - 1996.4
$$

$$
45.5x = 1456 \\Rightarrow x = \\frac{1456}{45.5} = 32.0
$$

**3.** Substitute $x = 32$ into Route 2:

$$
5(32) + 9y = 322 \\Rightarrow 160 + 9y = 322 \\Rightarrow 9y = 162 \\Rightarrow y = 18.0
$$

**4.** Audit Route 3 ($155.3$ mi $\\approx 250$ km $= 2.5$ hundreds of km):

$$
2.5(32) + 4(18) = 80 + 72 = 152
$$

versus 155 L recorded, a 3 L discrepancy.

**Answer.** Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)`,
  },
  {
    id: "math-5-57",
    case_id: "MATH 5.57",
    title: `Whitmore Scholarship Fund  -  Blended-Return Rate Reconstruction`,
    context: `The $45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation ($27,000 Bonds, $18,000 Equities) returns $2,646.00. A proposed reallocation swapping those amounts ($18,000 Bonds, $27,000 Equities) would return $2,754.00.`,
    statements: [
      `The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.`,
      `Under the current allocation, the blended rate is less than 6%.`,
      `If the entire $45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns ($2,646.00 + $2,754.00 = $5,400.00).`,
      `A 50/50 split ($22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.`,
      `The bond rate is more than 80% of the equity rate.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.**  (true)

Bonds earn 5.4% and Equities earn 6.6%. Relative rate advantage = (6.6-5.4)/5.4 × 100%. The advantage is 1.2/5.4 ≈ 22.22%, which is more than 20%.`,
      `**B) Under the current allocation, the blended rate is less than 6%.**  (true)

The current allocation returns $2,646 on a $45,000 fund. Blended rate = 2,646/45,000 × 100%. The blended rate is 5.88%, which is less than 6%.`,
      `**C) If the entire $45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns ($2,646.00 + $2,754.00 = $5,400.00).**  (false)

Put all $45,000 in Equities at 6.6% and compare with the sum of both described returns. All-equity return = 45,000(0.066); benchmark = 2,646+2,754. The all-equity return is $2,970, while the benchmark is $5,400. It does not exceed it.`,
      `**D) A 50/50 split ($22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.**  (true)

A 50/50 allocation places $22,500 in each portfolio. Return = 22,500(0.054)+22,500(0.066); average = (2,646+2,754)/2. Both calculations give $2,700 exactly.`,
      `**E) The bond rate is more than 80% of the equity rate.**  (true)

Test the Bond rate as a percentage of the Equity rate. 5.4/6.6 × 100%. This is about 81.8%, which is more than 80%.`,
    ],
    difficulty_level: "5/5",
    sort_order: 57,
    solution_overview: `The $45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation ($27,000 Bonds, $18,000 Equities) returns $2,646.00.

**Part 1: Building the system.**

Let $x =$ Bond Portfolio's annual rate (%), y = Equity Portfolio's annual rate (%).

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: current allocation.** That observation becomes:

$$
270x + 180y = 2646
$$

**2. Translate: proposed reallocation.** That observation becomes:

$$
180x + 270y = 2754
$$

**Part 2: The model.**

$$
270x + 180y = 2646 \\tag{1}
$$

$$
180x + 270y = 2754 \\tag{2}
$$

**Part 3: Solve.**

**1.** Add the two allocation equations:

$$
(270x + 180y) + (180x + 270y) = 2646 + 2754
$$

$$
450x + 450y = 5400 \\Rightarrow x + y = 12
$$

**2.** Subtract the first from the second:

$$
(180x + 270y) - (270x + 180y) = 2754 - 2646
$$

$$
-90x + 90y = 108 \\Rightarrow y - x = 1.2 \\Rightarrow y = x + 1.2
$$

**3.** Substitute into $x + y = 12$:

$$
x + (x + 1.2) = 12 \\Rightarrow 2x + 1.2 = 12 \\Rightarrow 2x = 10.8 \\Rightarrow x = 5.4
$$

Then $y = 5.4 + 1.2 = 6.6$.

**Answer.** Bond rate = 5.4% | Equity rate = 6.6%`,
  },
  {
    id: "math-5-58",
    case_id: "MATH 5.58",
    title: `Ashford Mutual Insurance  -  Premium Structure Reconstruction`,
    context: `Ashford prices every policy as a fixed administrative fee plus a rate per $1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.`,
    tables_markdown: `| Policy | Coverage | Premium |
| --- | --- | --- |
| Auto | $85,000 | $612.50 |
| Home | $210,000 | $1,197.50 |
| Renters | (illegible) | $331.70 |`,
    statements: [
      `The reconstructed Renters coverage amount is less than $30,000.`,
      `The fixed administrative fee represents more than 60% of the Auto policy's total premium.`,
      `If the rate per $1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than $75.00.`,
      `The Home policy's premium per $1,000 of coverage is more than twice the Auto policy's premium per $1,000 of coverage.`,
      `Combining the Auto and Home coverage into a single hypothetical policy (295 units of $1,000 coverage total) would cost less than the sum of their separate premiums ($612.50 + $1,197.50 = $1,810.00).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The reconstructed Renters coverage amount is less than $30,000.**  (true)

The Renters policy's premium reconstructs 25 units of $1,000 coverage. Coverage = 25×$1,000. The coverage is $25,000, which is less than $30,000.`,
      `**B) The fixed administrative fee represents more than 60% of the Auto policy's total premium.**  (false)

The administrative fee is $214.70 and the Auto premium is $612.50. Fee share = 214.70/612.50 × 100%. The share is about 35.05%, which does not exceed 60%.`,
      `**C) If the rate per $1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than $75.00.**  (true)

Only the per-$1,000 rate rises 10%; the fixed $214.70 fee stays unchanged. New rate = 1.10(4.68) = 5.148; new Home premium = 214.70+210(5.148). The new premium is $1,295.78, an increase of $98.28 from $1,197.50. This is more than $75.`,
      `**D) The Home policy's premium per $1,000 of coverage is more than twice the Auto policy's premium per $1,000 of coverage.**  (false)

Home's premium per $1,000 is 1,197.50/210 ≈ $5.70; Auto's is 612.50/85 ≈ $7.21. Home's per-unit rate is actually lower than Auto's, not more than double it  -  the fixed fee weighs more heavily on the smaller Auto policy.

$$
\\frac{1197.50}{210} \\approx 5.702, \\qquad \\frac{612.50}{85} \\approx 7.206
$$

$5.70$ is less than $7.21$, so Home's effective per-$1,000$ figure is not more than twice Auto's.`,
      `**E) Combining the Auto and Home coverage into a single hypothetical policy (295 units of $1,000 coverage total) would cost less than the sum of their separate premiums ($612.50 + $1,197.50 = $1,810.00).**  (true)

Combine 85 and 210 coverage units, paying the fixed fee once. Combined premium = 214.70+295(4.68). The result is $1,595.30, which is less than $1,810.00 for two separate policies.`,
    ],
    difficulty_level: "5/5",
    sort_order: 58,
    solution_overview: `Ashford prices every policy as a fixed administrative fee plus a rate per $1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.

**Part 1: Building the system.**

Let $x =$ the fixed administrative fee per policy (in dollars), y = the rate per $1,000 of coverage (in dollars).

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides. Time coefficients come from the story's clocks - head-starts, overtime hours, or duration multipliers - not from the headline total alone.

**1. Translate: Auto, coverage in units of $1,000.** That observation becomes:

$$
x + 85y = 612.50
$$

**2. Translate: Home.** That observation becomes:

$$
x + 210y = 1197.50
$$

**Part 2: The model.**

$$
x + 85y = 612.50 \\tag{1}
$$

$$
x + 210y = 1197.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Auto from Home to cancel the fixed fee $x$:

$$
(x + 210y) - (x + 85y) = 1197.50 - 612.50
$$

$$
125y = 585 \\Rightarrow y = \\frac{585}{125} = 4.68
$$

**2.** Substitute $y = 4.68$ into Auto:

$$
x + 85(4.68) = 612.50 \\Rightarrow x + 397.80 = 612.50 \\Rightarrow x = 214.70
$$

**3.** Reconstruct the Renters coverage $C$ (in units of $1,000$):

$$
214.70 + 4.68C = 331.70 \\Rightarrow 4.68C = 117.00 \\Rightarrow C = 25
$$

that is $25,000$ of coverage.

**Answer.** Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000`,
  },
  {
    id: "math-5-59",
    case_id: "MATH 5.59",
    title: `Cedar Hollow Reserve  -  Linear Population Growth Reconstruction`,
    context: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340). At Year 6: combined population = 1,772. Species A grows at exactly twice the annual rate of Species B.`,
    statements: [
      `By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.`,
      `If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.`,
      `The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth: Species B's growth) is greater than 2.5: 1.`,
      `At some point between Year 2 and Year 6, the two species had equal populations.`,
      `Species A overtakes Species B in total population size before Year 5.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.**  (true)

Species A grows by 72/year and B by 36/year over four years after Year 2. Year 6 values: $A = 610+4$(72); $B = 730+4$(36). $A = 898$ and $B = 874$, making a gap of 24. Since 24 > 20, the claim holds.`,
      `**B) If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.**  (true)

In the hypothetical, B uses A's actual 72/year growth rate. Hypothetical $B = 730+4$(72); total = 898+that value. B would be 1,018 and the combined total 1,916. The increase over 1,772 is 144, more than 140.`,
      `**C) The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth: Species B's growth) is greater than 2.5: 1.**  (false)

Compare total growth over the same four-year interval. A growth:B growth = 4(72):4(36). The growths are 288 and 144, so the ratio is 2:1. It is not greater than 2.5:1.`,
      `**D) At some point between Year 2 and Year 6, the two species had equal populations.**  (true)

B leads at Year 2, but A leads at Year 6 under constant linear change. Year 2 difference $A-B = 610-730$; Year 6 difference = 898-874. The difference changes from -120 to +24. A linear difference that changes sign must equal zero between those times.`,
      `**E) Species A overtakes Species B in total population size before Year 5.**  (false)

Solve for when the two population formulas are equal. 610+72(t-2) = 730+36(t-2). 36(t-2)=120, so t≈5.33. The crossover is after Year 5, not before.

Set $A(t) = B(t)$ with $t$ measured in years:

$$
610 + 72(t - 2) = 730 + 36(t - 2)
$$

$$
72(t-2) - 36(t-2) = 730 - 610 \\Rightarrow 36(t-2) = 120 \\Rightarrow t - 2 = \\frac{120}{36} = \\frac{10}{3}
$$

$$
t = 2 + \\frac{10}{3} \\approx 5.333
$$

The populations meet after Year 5, not before.`,
    ],
    difficulty_level: "5/5",
    sort_order: 59,
    solution_overview: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340).

**Part 1: Building the system.**

Let $x =$ Species A's net annual change (individuals/year), y = Species B's net annual change.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: combined growth of 432 over 4 years, Year 2 to Year 6: 4x+4y=432.** That observation becomes:

$$
x + y = 108
$$

**2. Translate: Species A grows at twice Species B's rate.** That observation becomes:

$$
x = 2y
$$

**Part 2: The model.**

$$
x + y = 108 \\tag{1}
$$

$$
x = 2y \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute $x = 2y$ into $x + y = 108$:

$$
2y + y = 108 \\Rightarrow 3y = 108 \\Rightarrow y = 36
$$

**2.** Then

$$
x = 2(36) = 72
$$

Year 6 populations, for later claims: $A = 610 + 4(72) = 898$ and $B = 730 + 4(36) = 874$.

**Answer.** Species A = +72 individuals/year | Species B = +36 individuals/year`,
  },
  {
    id: "math-5-60",
    case_id: "MATH 5.60",
    title: `Continental Power Grid  -  Plant Output Rate Reconstruction`,
    context: `Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs).`,
    tables_markdown: `| Day | Plant A | Plant B | Total Energy |
| --- | --- | --- | --- |
| Day 1 | 14 hrs | 20 hrs | 3,990 MWh |
| Day 2 | 22 hrs | 9 hrs | 4,072 MWh |
| Day 3 (audit) | 1,020 min (=17 hrs) | 11 hrs | 3,553 MWh (recorded) |`,
    statements: [
      `Plant A's output rate exceeds Plant B's by more than 45%.`,
      `Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.`,
      `If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).`,
      `The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.`,
      `Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) Plant A's output rate exceeds Plant B's by more than 45%.**  (true)

Plant A produces 145 MWh/hr and Plant B produces 98 MWh/hr. Relative excess = (145-98)/98 × 100%. The excess is 47/98 ≈ 47.96%, which is more than 45%.`,
      `**B) Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.**  (true)

Day 3's predicted output is 3,543 MWh and the recorded output is 3,553 MWh. Percentage difference = 10/3,553 × 100%. The discrepancy is about 0.2815%, which is less than 0.3%.

$$
17(145) + 11(98) = 2465 + 1078 = 3543
$$

$$
|3553 - 3543| = 10, \\qquad \\frac{10}{3553} \\approx 0.002815
$$

About $0.2815\\% < 0.3\\%$.`,
      `**C) If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).**  (false)

The hypothetical gives A 29 hours and B 36 hours, reversing the actual combined hours. Output = 29(145)+36(98). The output is 4,205+3,528 = 7,733 MWh, less than the actual 8,062 MWh.`,
      `**D) The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.**  (true)

Compare the two-plant combined rate with 2.4 times Plant B's rate. Combined rate = 145+98; benchmark = 2.4(98). The combined rate is 243 MWh/hr, and the benchmark is 235.2 MWh/hr. Since 243 > 235.2, the claim is true.`,
      `**E) Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.**  (true)

Add the recorded daily outputs across all three days. Total = 3,990+4,072+3,553. The three-day total is 11,615 MWh, which exceeds 11,600 MWh.`,
    ],
    difficulty_level: "5/5",
    sort_order: 60,
    solution_overview: `Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs).

**Part 1: Building the system.**

Let $x =$ Plant A's output rate (MWh/operating hr), y = Plant B's output rate (MWh/operating hr).

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Day 1.** That observation becomes:

$$
14x + 20y = 3990
$$

**2. Translate: Day 2.** That observation becomes:

$$
22x + 9y = 4072
$$

**Part 2: The model.**

$$
14x + 20y = 3990 \\tag{1}
$$

$$
22x + 9y = 4072 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Day 1 by 2:

$$
7x + 10y = 1995
$$

**2.** Multiply that simplified equation by 9:

$$
63x + 90y = 17955
$$

**3.** Multiply Day 2 by 10:

$$
10(22x + 9y) = 10(4072) \\Rightarrow 220x + 90y = 40720
$$

**4.** Subtract the scaled Day 1 from the scaled Day 2:

$$
(220x + 90y) - (63x + 90y) = 40720 - 17955
$$

$$
157x = 22765 \\Rightarrow x = \\frac{22765}{157} = 145.0
$$

**5.** Substitute $x = 145$ into $7x + 10y = 1995$:

$$
7(145) + 10y = 1995 \\Rightarrow 1015 + 10y = 1995 \\Rightarrow 10y = 980 \\Rightarrow y = 98.0
$$

**6.** Audit Day 3 ($1020$ min $= 17$ hrs):

$$
17(145) + 11(98) = 2465 + 1078 = 3543
$$

versus 3,553 MWh recorded, a 10 MWh discrepancy.

**Answer.** Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)`,
  },
];
