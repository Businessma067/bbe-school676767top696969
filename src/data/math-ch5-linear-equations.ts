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

The two depots hold 620 crates between them this week, and the scheduling note says that moving 50 crates from North to South would leave the two holdings equal. Let $x$ be North's crates and $y$ be South's, so the two facts become

$$
x + y = 620
$$

$$
x - 50 = y + 50
$$

The transfer equation rearranges to $x - y = 100$. Adding it to the total equation eliminates $y$:

$$
2x = 620 + 100 = 720
$$

$$
x = 360
$$

North currently holds 360 crates, exactly the figure claimed, so the statement is true.`,
      `**B) The South depot currently holds 240 crates.**  (false)

Let $x$ be North's crates and $y$ be South's. The two depots hold 620 crates together, so $x + y = 620$, and a transfer of 50 crates from North to South would equalize them, so $x - 50 = y + 50$, that is $x - y = 100$. Subtracting the second equation from the first eliminates $x$:

$$
2y = 620 - 100 = 520
$$

$$
y = 260
$$

South holds 260 crates, twenty more than the claimed 240, so the statement is false.`,
      `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.**  (true)

North's current count follows from the two given facts, $x + y = 620$ and $x - 50 = y + 50$. The second rearranges to $x - y = 100$, and adding the pair gives $2x = 720$, so $x = 360$. Reversing the direction of the move means North gains crates rather than losing them:

$$
360 + 30 = 390
$$

North would hold 390 crates, matching the claim, so the statement is true.`,
      `**D) The difference between the two depots today is 120 crates.**  (false)

The current gap follows from the equalizing transfer alone. If moving 50 crates from North to South leaves the two depots equal, then $x - 50 = y + 50$, so

$$
x - y = 100
$$

The depots differ by 100 crates today, not 120, so the statement is false. A 50-crate transfer closes a 100-crate gap because it takes 50 off one side and adds 50 to the other.`,
      `**E) Moving 50 crates from North to South would leave both depots holding 310 crates each.**  (true)

A transfer moves crates between depots without changing the combined holding, which stays at 620. The scheduling note states that this particular transfer leaves the two depots equal, so each would then hold

$$
\\frac{620}{2} = 310
$$

Both depots would hold 310 crates, matching the claim, so the statement is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 1,
    solution_overview: `The North depot and the South depot are together holding 620 crates this week. A scheduling note observes that if 50 crates were transferred from North to South, the two depots would end up holding exactly the same number of crates.

**Part 1: Building the system.**

Let $x$ = crates at the North depot, $y$ = crates at the South depot. The memo's transfer clue must be translated into an equation: after moving 50 crates from North to South, North would have $x - 50$ and South would have $y + 50$, and these are described as equal.

**1. Translate: combined total.** That observation becomes:

$$
x + y = 620
$$

**2. Translate: equalizing transfer.** The transfer is first written as $x - 50 = y + 50$, which rearranges to a clean difference:

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
| #101 | 40 | 25 | \\$185.00 |
| #102 | 15 | 60 | \\$160.50 |`,
    statements: [
      `A notebook costs \\$3.50.`,
      `A pen costs \\$2.10.`,
      `Invoice #101 (40 notebooks and 25 pens) totals \\$185.00.`,
      `10 notebooks and 10 pens purchased together would cost \\$53.00.`,
      `Invoice #102 (15 notebooks and 60 pens) totals \\$172.50.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) A notebook costs \\$3.50.**  (true)

Both invoices bill the same fixed unit prices. Let $x$ be the notebook price and $y$ the pen price:

$$
40x + 25y = 185.00
$$

$$
15x + 60y = 160.50
$$

Dividing the second equation by 15 gives $x + 4y = 10.70$, so $x = 10.70 - 4y$. Substituting into the first:

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

A notebook costs \\$3.50, matching the claim, so the statement is true.`,
      `**B) A pen costs \\$2.10.**  (false)

With $x$ the notebook price and $y$ the pen price, the two invoices read $40x + 25y = 185.00$ and $15x + 60y = 160.50$. Dividing the second by 15 gives $x = 10.70 - 4y$, and substituting into the first:

$$
40(10.70 - 4y) + 25y = 185.00
$$

$$
428.00 - 135y = 185.00
$$

$$
y = \\frac{243.00}{135} = 1.80
$$

A pen costs \\$1.80, thirty cents below the claimed \\$2.10, so the statement is false.`,
      `**C) Invoice #101 (40 notebooks and 25 pens) totals \\$185.00.**  (true)

The supplier's record for Invoice #101 lists 40 notebooks, 25 pens, and an invoice total of \\$185.00. The claim repeats that recorded total exactly, so no unit price has to be recovered and the statement is true.`,
      `**D) 10 notebooks and 10 pens purchased together would cost \\$53.00.**  (true)

This mix appears on neither invoice, so the unit prices must be recovered first. With $x$ the notebook price and $y$ the pen price, the invoices give $40x + 25y = 185.00$ and $15x + 60y = 160.50$. The second divided by 15 is $x + 4y = 10.70$, so $x = 10.70 - 4y$, and substituting into the first gives $428.00 - 135y = 185.00$, so $y = 1.80$ and $x = 10.70 - 7.20 = 3.50$. Ten of each item then costs

$$
10(3.50) + 10(1.80) = 35.00 + 18.00 = 53.00
$$

The order comes to \\$53.00, matching the claim, so the statement is true.`,
      `**E) Invoice #102 (15 notebooks and 60 pens) totals \\$172.50.**  (false)

The supplier's record for Invoice #102, covering 15 notebooks and 60 pens, shows a total of \\$160.50. The claimed \\$172.50 sits \\$12.00 above that recorded figure, so the statement is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 2,
    solution_overview: `Silverline Stationery Co. received two invoices from the same supplier this month.

**Part 1: Building the system.**

Let $x$ = price of one notebook, $y$ = price of one pen.

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

**Answer.** Notebook = \\$3.50 | Pen = \\$1.80`,
  },
  {
    id: "math-5-3",
    case_id: "MATH 5.03",
    title: `Pricing Adult and Child Tickets From a Box-Office Summary`,
    context: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.`,
    tables_markdown: `| Session | Adult Tickets | Child Tickets | Revenue |
| --- | --- | --- | --- |
| Saturday Matinee | 90 | 150 | \\$2,130 |
| Saturday Evening | 160 | 40 | \\$2,200 |`,
    statements: [
      `An adult ticket costs \\$12.00.`,
      `A child ticket costs \\$7.00.`,
      `The Saturday matinee (90 adult, 150 child) generated \\$2,050.00 in revenue.`,
      `The Saturday evening session (160 adult, 40 child) generated \\$2,300.00 in revenue.`,
      `50 adult tickets and 50 child tickets together would generate \\$1,000.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) An adult ticket costs \\$12.00.**  (true)

Both screenings sold at the same fixed prices. Let $a$ be the adult price and $c$ the child price:

$$
90a + 150c = 2130
$$

$$
160a + 40c = 2200
$$

Dividing the evening equation by 40 gives $4a + c = 55$, so $c = 55 - 4a$. Substituting into the matinee equation:

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

An adult ticket costs \\$12.00, matching the claim, so the statement is true.`,
      `**B) A child ticket costs \\$7.00.**  (true)

With $a$ the adult price and $c$ the child price, the matinee gives $90a + 150c = 2130$ and the evening gives $160a + 40c = 2200$. The evening equation divided by 40 is $4a + c = 55$, so $c = 55 - 4a$. Substituting into the matinee equation gives $90a + 8250 - 600a = 2130$, hence $-510a = -6120$ and $a = 12$. Then

$$
c = 55 - 4(12) = 55 - 48 = 7
$$

A child ticket costs \\$7.00, matching the claim, so the statement is true.`,
      `**C) The Saturday matinee (90 adult, 150 child) generated \\$2,050.00 in revenue.**  (false)

The box-office system already logged the matinee, 90 adult and 150 child tickets, at \\$2,130.00 in revenue. The claim understates that recorded figure by \\$80.00, so the statement is false.`,
      `**D) The Saturday evening session (160 adult, 40 child) generated \\$2,300.00 in revenue.**  (false)

The logged revenue for the evening session, 160 adult and 40 child tickets, is \\$2,200.00. The claim overstates the recorded figure by \\$100.00, so the statement is false.`,
      `**E) 50 adult tickets and 50 child tickets together would generate \\$1,000.00.**  (false)

An even 50-and-50 split matches neither session, so the ticket prices have to be recovered first. With $a$ the adult price and $c$ the child price, the sessions give $90a + 150c = 2130$ and $160a + 40c = 2200$. The evening equation divided by 40 is $4a + c = 55$, so $c = 55 - 4a$; substituting into the matinee equation gives $-510a = -6120$, so $a = 12$ and $c = 55 - 48 = 7$. Fifty of each ticket brings in

$$
50(12) + 50(7) = 600 + 350 = 950
$$

That is \\$950.00, fifty dollars short of the claimed \\$1,000.00, so the statement is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 3,
    solution_overview: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.

**Part 1: Building the system.**

Let $a$ = adult ticket price, $c$ = child ticket price.

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

**Answer.** Adult ticket = \\$12.00 | Child ticket = \\$7.00`,
  },
  {
    id: "math-5-4",
    case_id: "MATH 5.04",
    title: `Stripping Out a Delivery Fee Before Pricing a Deli's Menu`,
    context: `Corner Deli delivers office lunches for a flat \\$8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the \\$8.00 delivery fee  -  total charged \\$70.00. Receipt B: 3 sandwiches, 9 wraps, plus the \\$8.00 delivery fee  -  total charged \\$74.00.`,
    statements: [
      `A sandwich costs \\$7.00.`,
      `A wrap costs \\$5.00.`,
      `Receipt A's food subtotal, before the \\$8.00 delivery fee is added, is \\$62.00.`,
      `Receipt B's total, including the \\$8.00 delivery fee, is \\$74.00.`,
      `A pickup order of 5 sandwiches and 5 wraps would cost \\$60.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sandwich costs \\$7.00.**  (true)

Every order carries a flat \\$8.00 delivery fee that belongs to neither menu item, so peel it off before pricing the food. Receipt A's food comes to $70.00 - 8.00 = 62.00$ and Receipt B's to $74.00 - 8.00 = 66.00$. With $x$ the sandwich price and $y$ the wrap price,

$$
6x + 4y = 62.00
$$

$$
3x + 9y = 66.00
$$

Doubling the second equation gives $6x + 18y = 132.00$, and subtracting the first:

$$
14y = 70.00
$$

$$
y = 5.00
$$

Substituting back into $3x + 9y = 66.00$:

$$
3x = 66.00 - 45.00 = 21.00
$$

$$
x = 7.00
$$

A sandwich costs \\$7.00, matching the claim, so the statement is true.`,
      `**B) A wrap costs \\$5.00.**  (true)

The \\$8.00 delivery fee is charged on top of the food, so remove it from each receipt before writing the equations: Receipt A's food is $70.00 - 8.00 = 62.00$ and Receipt B's is $74.00 - 8.00 = 66.00$. With $x$ for a sandwich and $y$ for a wrap, that gives $6x + 4y = 62.00$ and $3x + 9y = 66.00$. Doubling the second and subtracting the first eliminates $x$:

$$
(6x + 18y) - (6x + 4y) = 132.00 - 62.00
$$

$$
14y = 70.00
$$

$$
y = 5.00
$$

A wrap costs \\$5.00, matching the claim, so the statement is true.`,
      `**C) Receipt A's food subtotal, before the \\$8.00 delivery fee is added, is \\$62.00.**  (true)

Receipt A was charged \\$70.00 in total, and that amount includes the flat \\$8.00 delivery fee. Removing the fee leaves the food subtotal:

$$
70.00 - 8.00 = 62.00
$$

The subtotal is \\$62.00, matching the claim, so the statement is true.`,
      `**D) Receipt B's total, including the \\$8.00 delivery fee, is \\$74.00.**  (true)

Receipt B covers 3 sandwiches and 9 wraps plus the flat \\$8.00 delivery fee, and the amount charged was \\$74.00. The claim quotes that fee-inclusive total exactly, so the statement is true. The \\$66.00 figure that drives the pricing equations is the food subtotal, a different quantity from the charged total.`,
      `**E) A pickup order of 5 sandwiches and 5 wraps would cost \\$60.00.**  (true)

A pickup order carries no delivery fee, so only the food prices matter, and those come from the two receipts once the flat \\$8.00 fee is removed: $70.00 - 8.00 = 62.00$ and $74.00 - 8.00 = 66.00$, giving $6x + 4y = 62.00$ and $3x + 9y = 66.00$ for the sandwich price $x$ and the wrap price $y$. Doubling the second and subtracting the first gives $14y = 70.00$, so $y = 5.00$, and then $3x + 45.00 = 66.00$ gives $x = 7.00$. The pickup order costs

$$
5(7.00) + 5(5.00) = 35.00 + 25.00 = 60.00
$$

That is \\$60.00, matching the claim, so the statement is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 4,
    solution_overview: `Corner Deli delivers office lunches for a flat \\$8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the \\$8.00 delivery fee, total charged \\$70.00.

**Part 1: Building the system.**

Let $x$ = price of one sandwich, $y$ = price of one wrap. Before writing any equation, the \\$8.00 delivery fee must be subtracted from each receipt total, since it is not part of either unknown price.

**1. Subtract the delivery fee, then write the food-price equation.** Start from the printed total: $6x + 4y = 70.00 - 8.00 = 62.00$. The clean system equation is:

$$
6x + 4y = 62.00
$$

**2. Subtract the delivery fee, then write the food-price equation.** Start from the printed total: $3x + 9y = 74.00 - 8.00 = 66.00$. The clean system equation is:

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

**Answer.** Sandwich = \\$7.00 | Wrap = \\$5.00`,
  },
  {
    id: "math-5-5",
    case_id: "MATH 5.05",
    title: `Splitting Savings Between Two Interest-Bearing Accounts`,
    context: `An investor split a total of \\$10,000 between two accounts at the start of the year: Account A pays 4% simple annual interest, and Account B pays 7% simple annual interest. No deposits or withdrawals were made all year, and together the two accounts earned \\$520.00 in interest.`,
    statements: [
      `\\$6,500 was placed in Account A.`,
      `\\$4,500 was placed in Account B.`,
      `Account A earned \\$260.00 in interest over the year.`,
      `Account B earned \\$210.00 in interest over the year.`,
      `Had the entire \\$10,000 been placed in Account B alone, total interest for the year would have been \\$700.00.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) \\$6,500 was placed in Account A.**  (false)

The investor split \\$10,000 between Account A at 4% and Account B at 7%, and the two accounts together earned \\$520.00 for the year. With $x$ in Account A and $y$ in Account B,

$$
x + y = 10000
$$

$$
0.04x + 0.07y = 520
$$

Substituting $x = 10000 - y$ into the interest equation:

$$
0.04(10000 - y) + 0.07y = 520
$$

$$
400 + 0.03y = 520
$$

$$
y = \\frac{120}{0.03} = 4000
$$

$$
x = 10000 - 4000 = 6000
$$

Account A holds \\$6,000, five hundred dollars below the claimed \\$6,500, so the statement is false.`,
      `**B) \\$4,500 was placed in Account B.**  (false)

Let $x$ be the amount in Account A at 4% and $y$ the amount in Account B at 7%. The split and the year's interest give $x + y = 10000$ and $0.04x + 0.07y = 520$. Substituting $x = 10000 - y$:

$$
400 - 0.04y + 0.07y = 520
$$

$$
0.03y = 120
$$

$$
y = 4000
$$

Account B holds \\$4,000, not the claimed \\$4,500, so the statement is false.`,
      `**C) Account A earned \\$260.00 in interest over the year.**  (false)

Account A's interest depends on how much of the \\$10,000 sits there. With $x$ in Account A at 4% and $y$ in Account B at 7%, the split gives $x + y = 10000$ and the year's earnings give $0.04x + 0.07y = 520$. Substituting $x = 10000 - y$ leads to $400 + 0.03y = 520$, so $y = 4000$ and $x = 6000$. A full year of simple interest on Account A is

$$
0.04 \\times 6000 = 240
$$

Account A earned \\$240.00, not the claimed \\$260.00, so the statement is false.`,
      `**D) Account B earned \\$210.00 in interest over the year.**  (false)

Account B pays 7% on whatever share of the \\$10,000 it holds. From $x + y = 10000$ and $0.04x + 0.07y = 520$, substituting $x = 10000 - y$ gives $0.03y = 120$, so $y = 4000$ and $x = 6000$. Account B's interest is

$$
0.07 \\times 4000 = 280
$$

That is \\$280.00, well above the claimed \\$210.00, so the statement is false. The figure also reconciles with the year's reported earnings, since $240 + 280 = 520$.`,
      `**E) Had the entire \\$10,000 been placed in Account B alone, total interest for the year would have been \\$700.00.**  (true)

Account B pays 7% simple annual interest, so placing the whole \\$10,000 there for the year would earn

$$
0.07 \\times 10000 = 700
$$

That is \\$700.00, matching the claim, so the statement is true. No split has to be recovered here, because the scenario puts the entire principal in one account.`,
    ],
    difficulty_level: "1/5",
    sort_order: 5,
    solution_overview: `An investor split a total of \\$10,000 between two accounts at the start of the year: Account A pays 4% simple annual interest, and Account B pays 7% simple annual interest. No deposits or withdrawals were made all year, and together the two accounts earned \\$520.00 in interest.

**Part 1: Building the system.**

Let $x$ = amount placed in Account A, $y$ = amount placed in Account B.

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

**1.** Solve the first equation for $x$: $x = 10000 - y$.

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

**Answer.** Account A = \\$6,000 | Account B = \\$4,000`,
  },
  {
    id: "math-5-6",
    case_id: "MATH 5.06",
    title: `Pricing Two Chair Grades From a Price Gap and a Shipment Value`,
    context: `Premium-grade office chairs are priced exactly \\$45 more per unit than Standard-grade chairs throughout the current catalogue. A recent shipment of 18 Standard chairs and 12 Premium chairs was valued at \\$9,660.00 in total.`,
    statements: [
      `A Standard chair is priced at \\$304.00.`,
      `A Premium chair is priced at \\$354.00.`,
      `The 12 Premium chairs in the shipment are worth \\$4,188.00 in total.`,
      `The price gap between one Premium chair and one Standard chair is \\$45.00.`,
      `A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than \\$3,000.00.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) A Standard chair is priced at \\$304.00.**  (true)

The catalogue prices a Premium chair exactly \\$45 above a Standard chair, and a shipment of 18 Standard and 12 Premium chairs was valued at \\$9,660.00. Writing $x$ for the Standard price, the Premium price is $x + 45$, so

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

A Standard chair is priced at \\$304.00, matching the claim, so the statement is true.`,
      `**B) A Premium chair is priced at \\$354.00.**  (false)

With $x$ the Standard price, the catalogue rule makes the Premium price $x + 45$, and the \\$9,660.00 shipment of 18 Standard and 12 Premium chairs gives $18x + 12(x + 45) = 9660$. Expanding leaves $30x + 540 = 9660$, so $x = 304$ and

$$
x + 45 = 304 + 45 = 349
$$

A Premium chair costs \\$349.00, five dollars below the claimed \\$354.00, so the statement is false.`,
      `**C) The 12 Premium chairs in the shipment are worth \\$4,188.00 in total.**  (true)

The Premium price sits \\$45 above the Standard price, and the shipment of 18 Standard and 12 Premium chairs came to \\$9,660.00. With $x$ the Standard price, $18x + 12(x + 45) = 9660$ gives $30x = 9120$, so $x = 304$ and the Premium price is $349$. The 12 Premium chairs are therefore worth

$$
12(349) = 4188
$$

That is \\$4,188.00, matching the claim, so the statement is true. The 18 Standard chairs make up the rest, since $18(304) = 5472$ and $4188 + 5472 = 9660$.`,
      `**D) The price gap between one Premium chair and one Standard chair is \\$45.00.**  (true)

The catalogue sets Premium chairs exactly \\$45 more per unit than Standard chairs throughout the current period, so the per-unit gap is \\$45.00 by the pricing rule itself. The claim restates that rule, so the statement is true without any chair price having to be computed.`,
      `**E) A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than \\$3,000.00.**  (true)

This order mixes the grades 5-and-5 rather than the shipment's 18-and-12, so it has to be priced from the unit costs. With $x$ the Standard price, the \\$45 catalogue gap makes the Premium price $x + 45$, and the \\$9,660.00 shipment gives $18x + 12(x + 45) = 9660$, so $30x = 9120$, $x = 304$, and the Premium price is $349$. Five of each costs

$$
5(304) + 5(349) = 1520 + 1745 = 3265
$$

Since $3265 > 3000$, the order does exceed \\$3,000.00 and the statement is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 6,
    solution_overview: `Premium-grade office chairs are priced exactly \\$45 more per unit than Standard-grade chairs throughout the current catalogue. A recent shipment of 18 Standard chairs and 12 Premium chairs was valued at \\$9,660.00 in total.

**Part 1: Building the system.**

Let $x$ = price of a Standard chair, $y$ = price of a Premium chair.

**1. Translate: Premium priced \\$45 above Standard.** That observation becomes:

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

**Answer.** Standard chair = \\$304.00 | Premium chair = \\$349.00`,
  },
  {
    id: "math-5-7",
    case_id: "MATH 5.07",
    title: `Extracting a Hidden Rate Structure From a Mobile Ad`,
    context: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid \\$29.00 in total. A heavy user who went 120 minutes over paid \\$53.00  -  the ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.`,
    statements: [
      `ByteMobile's fixed monthly fee is \\$17.00.`,
      `The extra-minute rate advertised is \\$0.30 per minute.`,
      `A customer using 200 extra minutes in a month would pay \\$80.00.`,
      `A customer using 0 extra minutes would pay \\$0.00 that month.`,
      `The advertised rate (\\$0.30 per minute) is more than double a rival plan's rate of \\$0.20 per minute.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) ByteMobile's fixed monthly fee is \\$17.00.**  (true)

Each bill is a fixed monthly fee plus a constant charge for every extra minute. Let $f$ be the fee and $r$ the rate per extra minute; the two customers quoted in the ad give

$$
f + 40r = 29.00
$$

$$
f + 120r = 53.00
$$

Subtracting the first from the second removes the fee:

$$
80r = 24.00
$$

$$
r = 0.30
$$

Substituting back into the 40-minute bill:

$$
f + 40(0.30) = 29.00
$$

$$
f = 29.00 - 12.00 = 17.00
$$

The fixed monthly fee is \\$17.00, matching the claim, so the statement is true.`,
      `**B) The extra-minute rate advertised is \\$0.30 per minute.**  (true)

The two quoted bills differ only in extra minutes, so the rate comes straight from the gap between them: 40 extra minutes cost \\$29.00 and 120 extra minutes cost \\$53.00, that is \\$24.00 more for 80 more minutes.

$$
r = \\frac{24.00}{80} = 0.30
$$

The rate is \\$0.30 per extra minute, matching the claim, so the statement is true.`,
      `**C) A customer using 200 extra minutes in a month would pay \\$80.00.**  (false)

Both halves of the pricing rule are needed here. With $f$ the fixed fee and $r$ the per-minute rate, the quoted bills give $f + 40r = 29.00$ and $f + 120r = 53.00$; subtracting gives $80r = 24.00$, so $r = 0.30$, and then $f = 29.00 - 12.00 = 17.00$. A month with 200 extra minutes costs

$$
17.00 + 200(0.30) = 17.00 + 60.00 = 77.00
$$

The bill is \\$77.00, three dollars under the claimed \\$80.00, so the statement is false.`,
      `**D) A customer using 0 extra minutes would pay \\$0.00 that month.**  (false)

The per-minute charge sits on top of a fixed monthly fee, so a month with no extra minutes still costs the fee. From the quoted bills $f + 40r = 29.00$ and $f + 120r = 53.00$, subtraction gives $80r = 24.00$, so $r = 0.30$ and $f = 29.00 - 40(0.30) = 17.00$. At zero extra minutes the bill is

$$
17.00 + 0(0.30) = 17.00
$$

The customer would still owe \\$17.00, not \\$0.00, so the statement is false.`,
      `**E) The advertised rate (\\$0.30 per minute) is more than double a rival plan's rate of \\$0.20 per minute.**  (false)

The two quoted bills differ by $53.00 - 29.00 = 24.00$ dollars across $120 - 40 = 80$ extra minutes, so ByteMobile charges $24.00 / 80 = 0.30$ per extra minute, the figure named in the claim. Double the rival's rate would be

$$
2 \\times 0.20 = 0.40
$$

Since $0.30 < 0.40$, ByteMobile's rate is one and a half times the rival's, not more than double it, so the statement is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 7,
    solution_overview: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid \\$29.00 in total. A heavy user who went 120 minutes over paid \\$53.00. The ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.

**Part 1: Building the system.**

Let $f$ = fixed monthly fee, $r$ = rate charged per extra minute. The advertisement never states the fixed fee or the rate directly; both must be recovered from the two example bills it quotes.

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

**Answer.** Fixed fee = \\$17.00 | Extra-minute rate = \\$0.30/min`,
  },
  {
    id: "math-5-8",
    case_id: "MATH 5.08",
    title: `Finding Weekly Output From a Production Report`,
    context: `The table below lists standard specifications for two oven models. This week, the division completed 130 ovens in total and logged 795 assembly hours in total across both models. (Not every figure below is needed to find how many of each model were built.)`,
    tables_markdown: `| Product | Assembly Hrs/Unit | Material Cost/Unit |
| --- | --- | --- |
| Standard Oven | 4 hrs | \\$120 |
| Deluxe Oven | 9 hrs | \\$180 |`,
    statements: [
      `The division built 75 Standard ovens this week.`,
      `The division built 45 Deluxe ovens this week.`,
      `Standard ovens accounted for 300 assembly hours this week.`,
      `Deluxe ovens accounted for 500 assembly hours this week.`,
      `The total material cost of all Standard ovens built this week is \\$9,000.00.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The division built 75 Standard ovens this week.**  (true)

The week produced 130 ovens using 795 assembly hours, with each Standard oven taking 4 hours and each Deluxe oven 9 hours. Let $s$ and $d$ be the two counts:

$$
s + d = 130
$$

$$
4s + 9d = 795
$$

Substituting $s = 130 - d$ into the hours equation:

$$
4(130 - d) + 9d = 795
$$

$$
520 + 5d = 795
$$

$$
d = 55
$$

$$
s = 130 - 55 = 75
$$

The division built 75 Standard ovens, matching the claim, so the statement is true. The material-cost column plays no part in this calculation.`,
      `**B) The division built 45 Deluxe ovens this week.**  (false)

With $s$ Standard ovens at 4 assembly hours each and $d$ Deluxe ovens at 9 hours each, the week's totals give $s + d = 130$ and $4s + 9d = 795$. Substituting $s = 130 - d$:

$$
520 - 4d + 9d = 795
$$

$$
5d = 275
$$

$$
d = 55
$$

The division built 55 Deluxe ovens, ten more than the claimed 45, so the statement is false.`,
      `**C) Standard ovens accounted for 300 assembly hours this week.**  (true)

Standard ovens take 4 assembly hours each, so their share of the week depends on how many were built. From $s + d = 130$ and $4s + 9d = 795$, substituting $s = 130 - d$ gives $520 + 5d = 795$, so $d = 55$ and $s = 75$. The Standard hours are

$$
4 \\times 75 = 300
$$

That is 300 hours, matching the claim, so the statement is true.`,
      `**D) Deluxe ovens accounted for 500 assembly hours this week.**  (false)

Each Deluxe oven takes 9 assembly hours. From the week's totals $s + d = 130$ and $4s + 9d = 795$, substitution gives $5d = 275$, so $d = 55$ Deluxe ovens and $s = 75$ Standard ovens were built. The Deluxe hours are

$$
9 \\times 55 = 495
$$

Deluxe ovens accounted for 495 hours, five short of the claimed 500, so the statement is false. The split reconciles with the report, since the Standard ovens used $4 \\times 75 = 300$ hours and $300 + 495 = 795$.`,
      `**E) The total material cost of all Standard ovens built this week is \\$9,000.00.**  (true)

Standard ovens carry a material cost of \\$120 per unit, so the count has to be recovered first. With 130 ovens and 795 assembly hours in the week, at 4 hours per Standard and 9 per Deluxe, $s + d = 130$ and $4s + 9d = 795$ give $520 + 5d = 795$, so $d = 55$ and $s = 75$. The Standard material cost is

$$
75 \\times 120 = 9000
$$

That is \\$9,000.00, matching the claim, so the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 8,
    solution_overview: `The table below lists standard specifications for two oven models. This week, the division completed 130 ovens in total and logged 795 assembly hours in total across both models.

**Part 1: Building the system.**

Let $s$ = number of Standard ovens built, $d$ = number of Deluxe ovens built. The material-cost column is not needed to find s and d; it becomes relevant only for statement E below.

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
| Riverside | 14 | 22 | \\$9,760 | \\$460 |
| Hillcrest | 20 | 10 | \\$9,300 | \\$300 |`,
    statements: [
      `A sofa sells for \\$350.00.`,
      `An armchair sells for \\$200.00.`,
      `Riverside's net sales (after its \\$460 in returns) were \\$9,300.00.`,
      `Hillcrest's gross sales (before its \\$300 in returns) were \\$9,300.00.`,
      `Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sofa sells for \\$350.00.**  (true)

Only net sales reflect items actually sold at list price, so each branch's returns come off first. Riverside nets $9760 - 460 = 9300$ on 14 sofas and 22 armchairs, and Hillcrest nets $9300 - 300 = 9000$ on 20 sofas and 10 armchairs. With $x$ the sofa price and $y$ the armchair price,

$$
14x + 22y = 9300
$$

$$
20x + 10y = 9000
$$

Dividing the Hillcrest equation by 10 gives $2x + y = 900$, so $y = 900 - 2x$. Substituting into the Riverside equation:

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

A sofa sells for \\$350.00, matching the claim, so the statement is true.`,
      `**B) An armchair sells for \\$200.00.**  (true)

The listed prices follow from net sales, so returns are removed first: Riverside nets $9760 - 460 = 9300$ and Hillcrest nets $9300 - 300 = 9000$. With $x$ for a sofa and $y$ for an armchair, that gives $14x + 22y = 9300$ and $20x + 10y = 9000$. The Hillcrest equation divided by 10 is $2x + y = 900$, so $y = 900 - 2x$; substituting into Riverside's equation gives $-30x = -10500$, so $x = 350$ and

$$
y = 900 - 2(350) = 900 - 700 = 200
$$

An armchair sells for \\$200.00, matching the claim, so the statement is true.`,
      `**C) Riverside's net sales (after its \\$460 in returns) were \\$9,300.00.**  (true)

Riverside recorded \\$9,760 in gross sales and \\$460 in returns, and net sales are gross sales minus returns:

$$
9760 - 460 = 9300
$$

Riverside's net sales were \\$9,300.00, matching the claim, so the statement is true.`,
      `**D) Hillcrest's gross sales (before its \\$300 in returns) were \\$9,300.00.**  (true)

The branch report lists Hillcrest's gross sales as \\$9,300, which is exactly the pre-returns figure the claim names, so the statement is true.`,
      `**E) Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.**  (true)

Net sales are gross sales minus returns, so with returns of zero the two figures coincide. Riverside's gross sales were \\$9,760, giving

$$
9760 - 0 = 9760
$$

Both figures would be \\$9,760.00, matching the claim, so the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 9,
    solution_overview: `Two branches sold sofas and armchairs this month at company-wide fixed prices. "Net sales" (gross sales minus returns) is what actually reflects items sold at their listed prices.

**Part 1: Building the system.**

Let $x$ = price of one sofa, $y$ = price of one armchair. The gross figures cannot be used directly; each branch's returns must be subtracted first to isolate the value of items actually sold at listed prices.

**1. Subtract returns, then write the net-sales equation.** Start from the printed total: $14x + 22y = 9760 - 460 = 9300$. The clean system equation is:

$$
14x + 22y = 9300
$$

**2. Subtract returns, then write the net-sales equation.** Start from the printed total: $20x + 10y = 9300 - 300 = 9000$. The clean system equation is:

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

**Answer.** Sofa = \\$350.00 | Armchair = \\$200.00`,
  },
  {
    id: "math-5-10",
    case_id: "MATH 5.10",
    title: `Comparing a Print Shop's Own Rates Against a Rival's Flat Quote`,
    context: `PrintFast Express charges a fixed setup fee on every order, plus a constant charge per page. Order #58 (120 pages) billed \\$33.00, and Order #96 (300 pages) billed \\$69.00. A rival, QuickCopy Center, instead charges a flat \\$60.00 for any order up to 350 pages, regardless of length.`,
    statements: [
      `PrintFast's setup fee is \\$12.00.`,
      `PrintFast's per-page rate is \\$0.25.`,
      `A 250-page order at PrintFast would cost \\$60.00.`,
      `For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat \\$60.00 fee.`,
      `Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) PrintFast's setup fee is \\$12.00.**  (false)

PrintFast bills a fixed setup fee plus a constant charge per page. With $f$ the fee and $r$ the per-page rate, the two orders give

$$
f + 120r = 33.00
$$

$$
f + 300r = 69.00
$$

Subtracting eliminates the fee:

$$
180r = 36.00
$$

$$
r = 0.20
$$

Substituting into the 120-page order:

$$
f + 120(0.20) = 33.00
$$

$$
f = 33.00 - 24.00 = 9.00
$$

The setup fee is \\$9.00, three dollars below the claimed \\$12.00, so the statement is false.`,
      `**B) PrintFast's per-page rate is \\$0.25.**  (false)

The two orders differ only in length, so the rate is the price gap divided by the page gap: Order #58 covered 120 pages for \\$33.00 and Order #96 covered 300 pages for \\$69.00, a difference of \\$36.00 across 180 pages.

$$
r = \\frac{36.00}{180} = 0.20
$$

The rate is \\$0.20 per page, not the claimed \\$0.25, so the statement is false.`,
      `**C) A 250-page order at PrintFast would cost \\$60.00.**  (false)

Both parts of PrintFast's pricing are needed. With $f$ the setup fee and $r$ the per-page rate, the two orders give $f + 120r = 33.00$ and $f + 300r = 69.00$; subtracting gives $180r = 36.00$, so $r = 0.20$, and then $f = 33.00 - 24.00 = 9.00$. A 250-page order costs

$$
9.00 + 250(0.20) = 9.00 + 50.00 = 59.00
$$

The order comes to \\$59.00, a dollar under the claimed \\$60.00, so the statement is false.`,
      `**D) For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat \\$60.00 fee.**  (false)

PrintFast charges a setup fee plus a per-page rate, both recovered from its two orders: $f + 120r = 33.00$ and $f + 300r = 69.00$ give $180r = 36.00$, so $r = 0.20$ and $f = 33.00 - 24.00 = 9.00$. At 350 pages that comes to

$$
9.00 + 350(0.20) = 9.00 + 70.00 = 79.00
$$

QuickCopy charges a flat \\$60.00 for any order up to 350 pages, and

$$
79.00 > 60.00
$$

PrintFast is \\$19.00 more expensive at that length, not cheaper, so the statement is false.`,
      `**E) Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.**  (true)

Writing $f$ for the setup fee and $r$ for the per-page rate, the two invoices say $f + 120r = 33.00$ and $f + 300r = 69.00$. Subtracting them gives

$$
180r = 36.00
$$

which has a single solution, $r = 0.20$, precisely because the page counts differ and the coefficient $300 - 120 = 180$ is not zero. Either invoice then fixes the fee, $f = 33.00 - 120(0.20) = 9.00$. Neither step leaves any freedom, so exactly one pair, $(f, r) = (9.00, 0.20)$, satisfies both invoices and the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 10,
    solution_overview: `PrintFast Express charges a fixed setup fee on every order, plus a constant charge per page. Order #58 (120 pages) billed \\$33.00, and Order #96 (300 pages) billed \\$69.00.

**Part 1: Building the system.**

Let $f$ = PrintFast's setup fee, $r$ = PrintFast's rate per page.

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

**Answer.** PrintFast setup fee = \\$9.00 | Rate = \\$0.20/page`,
  },
  {
    id: "math-5-11",
    case_id: "MATH 5.11",
    title: `Del Sol Food Truck`,
    context: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid \\$32.00 in total. Ben ordered 2 tacos and 5 burritos  -  and when he compared receipts with Ana afterward, he realized he had paid exactly \\$5.00 more than she did, even though neither of them knew the other's order size in advance.`,
    statements: [
      `Ben paid more for his 5 burritos alone than Ana paid for her entire order.`,
      `A burrito costs \\$2.50 more than a taco.`,
      `Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than \\$28.00.`,
      `Ben's total order price exceeds \\$40.00.`,
      `Buying 6 tacos and 6 burritos together would cost \\$57.00.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) Ben paid more for his 5 burritos alone than Ana paid for her entire order.**  (false)

Ana bought 4 tacos and 3 burritos for \\$32.00, and Ben bought 2 tacos and 5 burritos for \\$5.00 more, that is \\$37.00. With $x$ the taco price and $y$ the burrito price,

$$
4x + 3y = 32.00
$$

$$
2x + 5y = 37.00
$$

Doubling the second equation gives $4x + 10y = 74.00$, and subtracting the first:

$$
7y = 42.00
$$

$$
y = 6.00
$$

Ben's five burritos on their own therefore cost

$$
5(6.00) = 30.00
$$

That is \\$30.00 against Ana's \\$32.00 order, so his burritos alone cost less than her whole meal and the statement is false.`,
      `**B) A burrito costs \\$2.50 more than a taco.**  (true)

Ana paid \\$32.00 for 4 tacos and 3 burritos, and Ben paid \\$5.00 more, \\$37.00, for 2 tacos and 5 burritos. With $x$ for a taco and $y$ for a burrito, that gives $4x + 3y = 32.00$ and $2x + 5y = 37.00$. Doubling the second and subtracting the first gives $7y = 42.00$, so $y = 6.00$, and then $4x + 18.00 = 32.00$ gives $x = 3.50$. The gap is

$$
6.00 - 3.50 = 2.50
$$

A burrito costs \\$2.50 more than a taco, matching the claim, so the statement is true.`,
      `**C) Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than \\$28.00.**  (true)

Ana's actual order of 4 tacos and 3 burritos cost \\$32.00, and Ben's 2 tacos and 5 burritos cost \\$5.00 more, \\$37.00. Solving $4x + 3y = 32.00$ with $2x + 5y = 37.00$: doubling the second gives $4x + 10y = 74.00$, so $7y = 42.00$ and $y = 6.00$, and then $x = 3.50$. Dropping one burrito leaves 4 tacos and 2 burritos:

$$
4(3.50) + 2(6.00) = 14.00 + 12.00 = 26.00
$$

Since $26.00 < 28.00$, the statement is true.`,
      `**D) Ben's total order price exceeds \\$40.00.**  (false)

Ben's total is fixed by the comparison the two friends made after lunch: Ana paid \\$32.00, and Ben paid exactly \\$5.00 more than she did.

$$
32.00 + 5.00 = 37.00
$$

Ben paid \\$37.00, which does not exceed \\$40.00, so the statement is false.`,
      `**E) Buying 6 tacos and 6 burritos together would cost \\$57.00.**  (true)

An equal 6-and-6 order matches neither friend's receipt, so both unit prices are needed. From Ana's \\$32.00 order of 4 tacos and 3 burritos and Ben's \\$37.00 order of 2 tacos and 5 burritos, $4x + 3y = 32.00$ and $2x + 5y = 37.00$; doubling the second and subtracting the first gives $7y = 42.00$, so $y = 6.00$, and $4x + 18.00 = 32.00$ gives $x = 3.50$. Six of each costs

$$
6(3.50) + 6(6.00) = 21.00 + 36.00 = 57.00
$$

That is \\$57.00, matching the claim, so the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid \\$32.00 in total.

**Part 1: Building the system.**

Nothing here states the taco or burrito price directly. What is known is Ana's order and total, plus a comparison between Ben's total and Ana's. That comparison must first be turned into an actual dollar figure for Ben's order before a system of two equations can be written.

**1. Record this independent observation.** In symbols:

$$
4x + 3y = 32.00
$$

**2. Translate: Ben paid \\$5.00 more than Ana.** That comparison becomes $2x + 5y = 32.00 + 5.00 = 37.00$. The clean system equation is:

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

**Answer.** Taco = \\$3.50 | Burrito = \\$6.00`,
  },
  {
    id: "math-5-12",
    case_id: "MATH 5.12",
    title: `Northgate Books Monthly Sales Report`,
    context: `Memo  -  Pricing Desk: "Hardcover editions are priced exactly \\$5 above the paperback price this quarter, across the board."`,
    tables_markdown: `| Metric | Value |
| --- | --- |
| Paperback units sold | 400 |
| Hardcover units sold | 220 |
| Combined revenue (paperback + hardcover) | \\$8,540 |
| Full-time staff on payroll | 12 |
| Loyalty-member share of purchases | 45% |`,
    statements: [
      `A paperback price of \\$12 is consistent with the pricing desk's \\$5 gap rule.`,
      `Hardcover editions are priced above \\$18.`,
      `Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been \\$1,200 higher.`,
      `A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.`,
      `The reported \\$8,540 total could also have come from selling 310 hardcovers alone.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) A paperback price of \\$12 is consistent with the pricing desk's \\$5 gap rule.**  (true)

The memo fixes hardcovers exactly \\$5 above paperbacks, and the month's 400 paperbacks and 220 hardcovers brought in \\$8,540 between them. With $x$ the paperback price, the hardcover price is $x + 5$, so

$$
400x + 220(x + 5) = 8540
$$

$$
620x + 1100 = 8540
$$

$$
x = \\frac{7440}{620} = 12
$$

The paperback price is \\$12 and the hardcover price is $12 + 5 = 17$, which honours the \\$5 gap, so a \\$12 paperback is consistent with the rule and the statement is true.`,
      `**B) Hardcover editions are priced above \\$18.**  (false)

Hardcovers sit \\$5 above paperbacks, and the 400 paperbacks and 220 hardcovers sold produced \\$8,540 in combined revenue. Writing $x$ for the paperback price, $400x + 220(x + 5) = 8540$ gives $620x = 7440$, so $x = 12$ and the hardcover price is

$$
12 + 5 = 17
$$

At \\$17 the hardcover price sits below \\$18, not above it, so the statement is false. The staff headcount and loyalty-member share in the report have no bearing on unit prices.`,
      `**C) Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been \\$1,200 higher.**  (true)

Only the paperback price matters here, because hardcover sales stay as they were. With $x$ the paperback price and hardcovers \\$5 dearer, the reported month gives $400x + 220(x + 5) = 8540$, so $620x = 7440$ and $x = 12$. Selling $500 - 400 = 100$ more paperbacks adds

$$
100 \\times 12 = 1200
$$

Revenue would rise by \\$1,200, matching the claim, so the statement is true.`,
      `**D) A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.**  (false)

Both prices are needed. Hardcovers are \\$5 above paperbacks, and 400 paperbacks with 220 hardcovers produced \\$8,540, so $400x + 220(x + 5) = 8540$, giving $620x = 7440$, $x = 12$, and a hardcover price of $17$. The purchase costs

$$
3(17) + 2(12) = 51 + 24 = 75
$$

That is exactly \\$75, which is not less than \\$75, so the statement is false.`,
      `**E) The reported \\$8,540 total could also have come from selling 310 hardcovers alone.**  (false)

The hardcover price follows from the \\$5 gap rule and the reported month: with $x$ the paperback price, $400x + 220(x + 5) = 8540$ gives $620x = 7440$, so $x = 12$ and hardcovers are $17$. Selling 310 hardcovers and nothing else would bring in

$$
310 \\times 17 = 5270
$$

That is \\$5,270, far short of the \\$8,540 reported, so the statement is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview: `Memo. Pricing Desk: "Hardcover editions are priced exactly \\$5 above the paperback price this quarter, across the board.".

**Part 1: Building the system.**

Let $x$ = paperback price, $y$ = hardcover price. Staff headcount and the loyalty-member percentage do not affect unit pricing and should be set aside.

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

**Answer.** Paperback = \\$12.00 | Hardcover = \\$17.00`,
  },
  {
    id: "math-5-13",
    case_id: "MATH 5.13",
    title: `SkyLink Mobile Promotional Flyer`,
    context: `SKYLINK MOBILE: BASIC  -  \\$15/month base + \\$2.00/GB overage. STANDARD  -  base fee and overage rate confirmed by billing history below. PREMIUM  -  \\$40/month, unlimited, no overage.`,
    tables_markdown: `| Month | Overage Used | Total Bill |
| --- | --- | --- |
| March | 8 GB | \\$62.00 |
| April | 3 GB | \\$47.00 |`,
    statements: [
      `The Standard plan has a lower base fee than the advertised Basic plan.`,
      `The overage rate on the Standard plan is \\$3.00 per GB.`,
      `A Standard customer using 10 GB of overage in May would be billed \\$68.00.`,
      `Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.`,
      `For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The Standard plan has a lower base fee than the advertised Basic plan.**  (false)

Standard's base fee is not advertised, so it comes from the billing history: 8 GB of overage billed \\$62.00 in March and 3 GB billed \\$47.00 in April. With $x$ the base fee and $y$ the per-GB overage rate,

$$
x + 8y = 62.00
$$

$$
x + 3y = 47.00
$$

Subtracting gives $5y = 15.00$, so $y = 3.00$, and then

$$
x = 47.00 - 3(3.00) = 38.00
$$

Standard's base fee is \\$38.00 against Basic's advertised \\$15 per month, so it is higher, not lower, and the statement is false.`,
      `**B) The overage rate on the Standard plan is \\$3.00 per GB.**  (true)

The two Standard bills differ only in overage used: 8 GB cost \\$62.00 in March and 3 GB cost \\$47.00 in April, that is \\$15.00 more for 5 more GB.

$$
y = \\frac{15.00}{5} = 3.00
$$

The overage rate is \\$3.00 per GB, matching the claim, so the statement is true.`,
      `**C) A Standard customer using 10 GB of overage in May would be billed \\$68.00.**  (true)

A Standard bill is a base fee plus an overage charge, both recovered from the billing history. From $x + 8y = 62.00$ and $x + 3y = 47.00$, subtraction gives $5y = 15.00$, so $y = 3.00$ and $x = 47.00 - 9.00 = 38.00$. A month with 10 GB of overage costs

$$
38.00 + 10(3.00) = 38.00 + 30.00 = 68.00
$$

The bill would be \\$68.00, matching the claim, so the statement is true.`,
      `**D) Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.**  (true)

Standard's terms come from its billing history: $x + 8y = 62.00$ and $x + 3y = 47.00$ give $5y = 15.00$, so $y = 3.00$ and $x = 38.00$. At 5 GB of overage the Standard bill is

$$
38.00 + 5(3.00) = 38.00 + 15.00 = 53.00
$$

Premium is a flat \\$40 per month with no overage at all, so the switch saves

$$
53.00 - 40.00 = 13.00
$$

The customer would be \\$13.00 a month better off on Premium, so the statement is true.`,
      `**E) For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.**  (true)

Basic is advertised at \\$15 per month plus \\$2.00 per GB of overage, so 8 GB on Basic costs

$$
15.00 + 8(2.00) = 15.00 + 16.00 = 31.00
$$

Standard's terms have to be recovered from its billing history: $x + 8y = 62.00$ and $x + 3y = 47.00$ give $5y = 15.00$, so $y = 3.00$ and $x = 38.00$. On Standard, 8 GB of overage costs

$$
38.00 + 8(3.00) = 38.00 + 24.00 = 62.00
$$

which is the March bill in the record. Since $31.00 < 62.00$, Basic is the cheaper plan at that usage and the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 13,
    solution_overview: `SKYLINK MOBILE: BASIC: \\$15/month base + \\$2.00/GB overage. STANDARD: base fee and overage rate confirmed by billing history below.

**Part 1: Building the system.**

Let $x$ = Standard plan's base fee, $y$ = its per-GB overage rate. The Basic and Premium prices belong to different plans and should not be substituted into this customer's equations.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

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

**Answer.** Standard base fee = \\$38.00 | Overage rate = \\$3.00/GB`,
  },
  {
    id: "math-5-14",
    case_id: "MATH 5.14",
    title: `Lakeview Inn Booking Confirmations`,
    context: `LAKEVIEW INN  -  Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.`,
    tables_markdown: `| Confirmation | Standard Rooms | Suites | Total Charged (incl. 8% tax) |
| --- | --- | --- | --- |
| Weekend 1 | 10 | 4 | \\$2,419.20 |
| Weekend 2 | 7 | 9 | \\$3,099.60 |`,
    statements: [
      `After removing the occupancy tax, Weekend 1's booking revenue was \\$2,240.00.`,
      `A Suite costs \\$200 more per night than a Standard room.`,
      `Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.`,
      `Including the 8% tax, a single Suite night costs \\$226.80.`,
      `Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by \\$210.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) After removing the occupancy tax, Weekend 1's booking revenue was \\$2,240.00.**  (true)

Weekend 1 was charged \\$2,419.20 with the 8% occupancy tax already included, so the pre-tax revenue is that total divided by $1.08$:

$$
\\frac{2419.20}{1.08} = 2240.00
$$

The pre-tax booking revenue was \\$2,240.00, matching the claim, so the statement is true.`,
      `**B) A Suite costs \\$200 more per night than a Standard room.**  (false)

Both confirmations are quoted with 8% tax included, so convert them to pre-tax revenue first: $2419.20 / 1.08 = 2240.00$ for Weekend 1 and $3099.60 / 1.08 = 2870.00$ for Weekend 2. With $x$ the pre-tax Standard rate and $y$ the pre-tax Suite rate,

$$
10x + 4y = 2240
$$

$$
7x + 9y = 2870
$$

Multiplying the first by 9 and the second by 4 gives $90x + 36y = 20160$ and $28x + 36y = 11480$. Subtracting:

$$
62x = 8680
$$

$$
x = 140
$$

Then $10(140) + 4y = 2240$ gives $4y = 840$, so $y = 210$, and the nightly gap is

$$
210 - 140 = 70
$$

A Suite costs \\$70 more per night, well short of the claimed \\$200, so the statement is false.`,
      `**C) Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.**  (false)

The nightly rates come from the two confirmations once the 8% tax is stripped out: $2419.20 / 1.08 = 2240.00$ and $3099.60 / 1.08 = 2870.00$, giving $10x + 4y = 2240$ and $7x + 9y = 2870$. Multiplying the first by 9 and the second by 4 and subtracting gives $62x = 8680$, so $x = 140$, and then $4y = 2240 - 1400 = 840$, so $y = 210$. Comparing the two bookings before tax:

$$
6(140) = 840
$$

$$
4(210) = 840
$$

Both come to \\$840, so six Standard rooms do not cost less than four Suites and the statement is false.`,
      `**D) Including the 8% tax, a single Suite night costs \\$226.80.**  (true)

The Suite rate has to be recovered from the pre-tax revenues, $2419.20 / 1.08 = 2240.00$ and $3099.60 / 1.08 = 2870.00$, which give $10x + 4y = 2240$ and $7x + 9y = 2870$. Eliminating $y$ (nine times the first equation minus four times the second) leaves $62x = 8680$, so $x = 140$, and then $4y = 2240 - 1400 = 840$, so $y = 210$. Adding the 8% occupancy tax to one Suite night:

$$
210 \\times 1.08 = 226.80
$$

A taxed Suite night costs \\$226.80, matching the claim, so the statement is true.`,
      `**E) Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by \\$210.**  (true)

Only the pre-tax Suite rate matters, since the Standard bookings are unchanged. Removing the 8% tax gives pre-tax revenues of $2419.20 / 1.08 = 2240.00$ and $3099.60 / 1.08 = 2870.00$, so $10x + 4y = 2240$ and $7x + 9y = 2870$. Eliminating $y$ gives $62x = 8680$, so $x = 140$ and $y = 210$. One additional Suite night adds

$$
1 \\times 210 = 210
$$

Pre-tax revenue would rise by \\$210, matching the claim, so the statement is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 14,
    solution_overview: `LAKEVIEW INN. Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.

**Part 1: Building the system.**

Let $x$ = nightly Standard rate, $y$ = nightly Suite rate, both before tax. Each total must first be converted back to a pre-tax figure before it can be used in the model.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
10x + 4y = 2419.20 \\div 1.08 = 2240.00
$$

**2. Record this independent observation.** In symbols:

$$
7x + 9y = 3099.60 \\div 1.08 = 2870.00
$$

**Part 2: The model.**

$$
10x + 4y = 2419.20 \\div 1.08 = 2240.00 \\tag{1}
$$

$$
7x + 9y = 3099.60 \\div 1.08 = 2870.00 \\tag{2}
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

**Answer.** Standard = \\$140.00/night (pre-tax) | Suite = \\$210.00/night (pre-tax)`,
  },
  {
    id: "math-5-15",
    case_id: "MATH 5.15",
    title: `Crestwood Distribution Centre, Inventory Valuation`,
    context: `Only the January and February rows report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs. Warehouse floor space and on-site staff are distractors (not needed below).`,
    tables_markdown: `| Period | Type | Comp. A (units) | Comp. B (units) | Total Value |
| --- | --- | --- | --- | --- |
| January | Actual | 150 | 90 | \\$3,150 |
| February | Actual | 130 | 140 | \\$3,660 |
| March | Forecast | 200 | 100 | \\$4,700 (projected) |`,
    statements: [
      `Component A's unit cost is \\$12.`,
      `Component B's unit cost is \\$18.`,
      `The March forecast assumes higher unit prices than what actually applied in January and February.`,
      `If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be \\$4,700.`,
      `The combined actual inventory value recorded for January and February is \\$6,810.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Component A's unit cost is \\$12.**  (true)

Only the January and February rows record actual inventory values, so those two build the system. With $x$ the unit cost of Component A and $y$ that of Component B,

$$
150x + 90y = 3150
$$

$$
130x + 140y = 3660
$$

Dividing the first by 30 and the second by 10 gives $5x + 3y = 105$ and $13x + 14y = 366$. Multiplying these by 14 and 3 respectively:

$$
70x + 42y = 1470
$$

$$
39x + 42y = 1098
$$

Subtracting:

$$
31x = 372
$$

$$
x = 12
$$

Component A costs \\$12 per unit, matching the claim, so the statement is true.`,
      `**B) Component B's unit cost is \\$18.**  (false)

The actual rows are January, $150x + 90y = 3150$, and February, $130x + 140y = 3660$; the March row is a forecast and cannot be used to price today's stock. Simplifying to $5x + 3y = 105$ and $13x + 14y = 366$ and eliminating $y$ gives $31x = 372$, so $x = 12$. Substituting back:

$$
5(12) + 3y = 105
$$

$$
3y = 45
$$

$$
y = 15
$$

Component B costs \\$15 per unit, not the claimed \\$18, so the statement is false.`,
      `**C) The March forecast assumes higher unit prices than what actually applied in January and February.**  (true)

The actual unit costs come from the two recorded rows, $150x + 90y = 3150$ and $130x + 140y = 3660$, which simplify to $5x + 3y = 105$ and $13x + 14y = 366$. Eliminating $y$ gives $31x = 372$, so $x = 12$, and substituting back gives $3y = 45$, so $y = 15$. Valuing March's forecast quantities at those actual costs:

$$
200(12) + 100(15) = 2400 + 1500 = 3900
$$

The forecast puts the very same basket, 200 units of A and 100 units of B, at \\$4,700, which is \\$800 above the actual-cost valuation. Since the quantities are identical on both sides of that comparison, the higher forecast total can only come from a higher price level overall, so the statement is true. The arithmetic supports only that aggregate conclusion: it shows the weighted valuation is higher without identifying which component's price rises, or by how much.`,
      `**D) If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be \\$4,700.**  (false)

The actual unit costs come from the recorded January and February rows, $150x + 90y = 3150$ and $130x + 140y = 3660$. These simplify to $5x + 3y = 105$ and $13x + 14y = 366$, and eliminating $y$ gives $31x = 372$, so $x = 12$; substituting back gives $3y = 45$, so $y = 15$. Valuing 200 units of A and 100 units of B at those costs:

$$
200(12) + 100(15) = 2400 + 1500 = 3900
$$

The actual-cost valuation is \\$3,900, not the claimed \\$4,700, so the statement is false. The \\$4,700 belongs to the forecast row, which is built on its own price assumptions rather than the recorded ones.`,
      `**E) The combined actual inventory value recorded for January and February is \\$6,810.**  (true)

January and February are the two rows marked as actual, at \\$3,150 and \\$3,660 respectively. Adding them:

$$
3150 + 3660 = 6810
$$

The combined actual value is \\$6,810, matching the claim, so the statement is true. No unit cost is needed here, since both totals are already recorded, and the March forecast row stays out of the sum.`,
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

**Answer.** Component A = \\$12.00/unit | Component B = \\$15.00/unit`,
  },
  {
    id: "math-5-16",
    case_id: "MATH 5.16",
    title: `Sunrise Staffing, Overtime Contract Check`,
    context: `Sunrise Staffing's contract states overtime must be paid at exactly 1.5× the regular hourly wage. A union representative pulled this week's payroll for two workers, both completing a full 40-hour regular week, to check whether that rule was actually followed.`,
    tables_markdown: `| Worker | Regular Hrs | Overtime Hrs | Total Pay |
| --- | --- | --- | --- |
| Worker 1 | 40 | 6 | \\$704 |
| Worker 2 | 40 | 2 | \\$608 |`,
    statements: [
      `The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.`,
      `The regular hourly wage is \\$14.`,
      `Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly \\$6.00 on their overtime hours.`,
      `A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn \\$656.`,
      `That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn \\$644.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.**  (false)

Let $x$ be the regular hourly wage and $y$ the overtime rate actually paid. The two payroll rows give

$$40x + 6y = 704, \\qquad 40x + 2y = 608$$

Subtract:

$$(40x + 6y) - (40x + 2y) = 704 - 608 \\Rightarrow 4y = 96 \\Rightarrow y = 24$$

Then $40x + 2(24) = 608$ gives $40x + 48 = 608$, so $40x = 560$ and $x = 14$. The contract requires

$$1.5 \\times 14 = 21$$

Actual overtime is $24$, not $21$, so the statement is false.`,
      `**B) The regular hourly wage is \\$14.**  (true)

Let $x$ be the regular hourly wage and $y$ the overtime rate actually paid. Worker 1 and Worker 2 give

$$40x + 6y = 704, \\qquad 40x + 2y = 608$$

Subtract to cancel the shared regular-pay term:

$$4y = 96 \\Rightarrow y = 24$$

Substitute into Worker 2:

$$40x + 2(24) = 608 \\Rightarrow 40x + 48 = 608 \\Rightarrow 40x = 560 \\Rightarrow x = 14$$

The regular hourly wage is \\$14, matching the claim.`,
      `**C) Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly \\$6.00 on their overtime hours.**  (true)

From the payroll system $40x + 6y = 704$ and $40x + 2y = 608$, subtraction yields $4y = 96$, so $y = 24$, and then $40x + 48 = 608$ gives $x = 14$. Contract overtime is $1.5 \\times 14 = 21$. Worker 2 has 2 overtime hours, so

$$2(24) - 2(21) = 48 - 42 = 6$$

Worker 2 was overpaid by exactly \\$6.00 on overtime.`,
      `**D) A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn \\$656.**  (true)

The payroll equations $40x + 6y = 704$ and $40x + 2y = 608$ solve to $x = 14$ and $y = 24$. At those actual rates,

$$40(14) + 4(24) = 560 + 96 = 656$$

The third worker would earn \\$656.`,
      `**E) That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn \\$644.**  (true)

The same system yields regular wage $x = 14$. Contract overtime is $1.5 \\times 14 = 21$. For 40 regular + 4 overtime hours under the contract rule,

$$40(14) + 4(21) = 560 + 84 = 644$$

That third worker would earn \\$644 under the $1.5\\times$ rule.`,
    ],
    difficulty_level: "2/5",
    sort_order: 16,
    solution_overview: `Sunrise Staffing's contract states overtime must be paid at exactly 1.5× the regular hourly wage. A union representative pulled this week's payroll for two workers, both completing a full 40-hour regular week, to check whether that rule was actually followed.

**Part 1: Building the system.**

Let $x$ = regular hourly wage, $y$ = overtime rate actually paid. Only once both rates are known can they be compared against the contract's 1.5× rule.

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

**Answer.** Regular wage = \\$14.00/hr | Overtime actually paid = \\$24.00/hr (contract requires \\$21.00/hr)`,
  },
  {
    id: "math-5-17",
    case_id: "MATH 5.17",
    title: `Riverside Water Utility, Billing Dispute`,
    context: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed \\$56.10  -  but May's bill also carried a 10% late penalty applied to the entire bill. In June she used 25 m³ with no penalty, billed \\$65.00. The billing office insists its fixed charge is \\$18.00 and its rate is \\$1.85 per m³.`,
    statements: [
      `The billing office's claim of an \\$18.00 fixed monthly charge is correct.`,
      `The rate charged is \\$2.00 per cubic metre.`,
      `After removing the late penalty, May's actual water charge was \\$51.00.`,
      `A customer using 40 m³ in a month would be billed \\$85.00.`,
      `Had the same 10% late penalty been applied to June's \\$65.00 bill, the total would have been \\$71.50.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The billing office's claim of an \\$18.00 fixed monthly charge is correct.**  (false)

May's printed \\$56.10 includes a 10% late penalty on the whole bill, so the genuine May charge is

$$\\frac{56.10}{1.10} = 51.00$$

June needs no correction. Let $x$ be the fixed monthly charge and $y$ the rate per m³:

$$x + 18y = 51, \\qquad x + 25y = 65$$

Subtract: $7y = 14$, so $y = 2$. Then

$$x + 18(2) = 51 \\Rightarrow x + 36 = 51 \\Rightarrow x = 15$$

The fixed charge is \\$15.00, not the office's claimed \\$18.00.`,
      `**B) The rate charged is \\$2.00 per cubic metre.**  (true)

Undo May's 10% late penalty: $56.10 / 1.10 = 51.00$. With June's clean bill, the system is

$$x + 18y = 51, \\qquad x + 25y = 65$$

Their difference isolates usage only:

$$(25 - 18)y = 65 - 51 \\Rightarrow 7y = 14 \\Rightarrow y = 2$$

The rate is \\$2.00 per m³, matching the claim (and contradicting the office's \\$1.85 figure).`,
      `**C) After removing the late penalty, May's actual water charge was \\$51.00.**  (true)

A 10% surcharge means the printed figure is $1.10$ times the genuine charge, so invert the multiplier:

$$\\frac{56.10}{1.10} = 51.00$$

May's actual water charge before the late penalty is \\$51.00.`,
      `**D) A customer using 40 m³ in a month would be billed \\$85.00.**  (false)

After cleaning May to $51$, the bills give $x + 18y = 51$ and $x + 25y = 65$. Subtracting yields $y = 2$, then $x = 15$. At $u = 40$,

$$15 + 2 \\cdot 40 = 15 + 80 = 95$$

The bill is \\$95.00, not \\$85.00.`,
      `**E) Had the same 10% late penalty been applied to June's \\$65.00 bill, the total would have been \\$71.50.**  (true)

June's printed \\$65.00 is already the genuine charge. A 10% late penalty on that whole amount is

$$65.00 \\times 1.10 = 71.50$$

which matches the claim.`,
    ],
    difficulty_level: "2/5",
    sort_order: 17,
    solution_overview: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed \\$56.10, but May's bill also carried a 10% late penalty applied to the entire bill.

**Part 1: Building the system.**

Since the 10% penalty was applied to May's whole bill rather than as a flat add-on, May's reported total must first be divided back down. The fixed charge and rate must be derived independently from the two bills, since the phone claim may not be accurate.

**1. Record this independent observation.** In symbols:

$$
x + 18y = 56.10 \\div 1.10 = 51.00
$$

**2. Read the bill with 25 extra units.** At rate $y$, that bill is:

$$
x + 25y = 65.00
$$

**Part 2: The model.**

$$
x + 18y = 56.10 \\div 1.10 = 51.00 \\tag{1}
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

**Answer.** Fixed charge = \\$15.00 | Rate = \\$2.00/m³ (billing office's claim does not match)`,
  },
  {
    id: "math-5-18",
    case_id: "MATH 5.18",
    title: `CityCab vs. MetroX Fare Comparison`,
    context: `A commuter is deciding between two ride-hailing companies. An 8 km CityCab ride once cost \\$14.00, and a 20 km CityCab ride cost exactly \\$12.00 more than that. Separately, a 5 km MetroX ride cost \\$13.50, with a 15 km MetroX ride costing exactly \\$15.00 more.`,
    statements: [
      `For a 10 km ride, CityCab works out cheaper than MetroX.`,
      `Both companies charge the same base fare of \\$6.00.`,
      `For distances under 4 km, MetroX would be cheaper than CityCab.`,
      `A 30 km CityCab ride costs \\$36.00.`,
      `There is a distance of 5 km at which both companies charge exactly the same fare.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) For a 10 km ride, CityCab works out cheaper than MetroX.**  (true)

CityCab's 20 km ride costs $14 + 12 = 26$, so

$$x_1 + 8y_1 = 14, \\qquad x_1 + 20y_1 = 26$$

Subtract: $12y_1 = 12$, hence $y_1 = 1$ and $x_1 = 14 - 8 = 6$. MetroX's 15 km ride costs $13.50 + 15 = 28.50$, so

$$x_2 + 5y_2 = 13.50, \\qquad x_2 + 15y_2 = 28.50$$

Subtract: $10y_2 = 15$, hence $y_2 = 1.5$ and $x_2 = 13.50 - 7.50 = 6$. At 10 km,

$$6 + 10(1) = 16, \\qquad 6 + 10(1.5) = 21$$

CityCab's \\$16 undercuts MetroX's \\$21.`,
      `**B) Both companies charge the same base fare of \\$6.00.**  (true)

CityCab solves from $x_1 + 8y_1 = 14$ and $x_1 + 20y_1 = 26$ to $y_1 = 1$, $x_1 = 6$. MetroX solves from $x_2 + 5y_2 = 13.50$ and $x_2 + 15y_2 = 28.50$ to $y_2 = 1.5$, $x_2 = 6$. Peel the per-km charge off each shorter ride:

$$14.00 - 8(1) = 6.00, \\qquad 13.50 - 5(1.50) = 6.00$$

Both bases are \\$6.00.`,
      `**C) For distances under 4 km, MetroX would be cheaper than CityCab.**  (false)

CityCab is $6 + d$ and MetroX is $6 + 1.5d$. Their difference is

$$(6 + 1.5d) - (6 + d) = 0.5d$$

which is positive whenever $d > 0$. Even at a short hop such as $d = 3$, MetroX is $6 + 4.50 = 10.50$ against CityCab's $6 + 3 = 9$. MetroX is never cheaper for any positive distance.`,
      `**D) A 30 km CityCab ride costs \\$36.00.**  (true)

CityCab's recovered rule is base \\$6 plus \\$1 per km, so a 30 km ride is

$$6 + 30(1) = 36$$

matching the claim.`,
      `**E) There is a distance of 5 km at which both companies charge exactly the same fare.**  (false)

Equating the two fare formulas:

$$6 + d = 6 + 1.5d \\Rightarrow d = 1.5d \\Rightarrow 0 = 0.5d \\Rightarrow d = 0$$

The companies only match at zero distance. At the claimed 5 km the bills are $6 + 5 = 11$ versus $6 + 5(1.5) = 13.50$, which are not equal.`,
    ],
    difficulty_level: "2/5",
    sort_order: 18,
    solution_overview: `A commuter is deciding between two ride-hailing companies. An 8 km CityCab ride once cost \\$14.00, and a 20 km CityCab ride cost exactly \\$12.00 more than that.

**Part 1: Building the system.**

Each company must be modelled separately. Each "costs X more than" comparison must first be converted into an absolute fare. Let $x_1$, $y_1$ be CityCab's base fare and rate, and $x_2$, $y_2$ be MetroX's.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
\\text{CityCab: } x_1 + 8y_1 = 14.00, x_1 + 20y_1 = 26.00
$$

**2. Record this independent observation.** In symbols:

$$
\\text{MetroX: } x_2 + 5y_2 = 13.50, x_2 + 15y_2 = 28.50
$$

**Part 2: The model.**

$$
\\text{CityCab: } x_1 + 8y_1 = 14.00, x_1 + 20y_1 = 26.00 \\tag{1}
$$

$$
\\text{MetroX: } x_2 + 5y_2 = 13.50, x_2 + 15y_2 = 28.50 \\tag{2}
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

**Answer.** CityCab: base \\$6.00, rate \\$1.00/km | MetroX: base \\$6.00, rate \\$1.50/km`,
  },
  {
    id: "math-5-19",
    case_id: "MATH 5.19",
    title: `Bramble & Co., Vendor Quotation Comparison`,
    context: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright  -  both quotes only show bundled order totals. Bramble needs 40 units of X and 30 units of Y next month.`,
    tables_markdown: `| Vendor | Order | Units X | Units Y | Total |
| --- | --- | --- | --- | --- |
| Vendor A | 1 | 20 | 15 | \\$450 |
| Vendor A | 2 | 25 | 12 | \\$441 |
| Vendor B | 1 | 20 | 15 | \\$460 |
| Vendor B | 2 | 25 | 12 | \\$467 |`,
    statements: [
      `Vendor A charges less than Vendor B for Product X.`,
      `Vendor B charges less than Vendor A for Product Y.`,
      `For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.`,
      `Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by \\$20.`,
      `If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Vendor A charges less than Vendor B for Product X.**  (true)

Vendor A's quotes are $20x_A + 15y_A = 450$ and $25x_A + 12y_A = 441$. Divide the first by 5 to get $4x_A + 3y_A = 90$, so $y_A = 30 - \\frac{4}{3}x_A$. Substitute into the second:

$$25x_A + 12\\left(30 - \\frac{4}{3}x_A\\right) = 441 \\Rightarrow 25x_A + 360 - 16x_A = 441 \\Rightarrow 9x_A = 81 \\Rightarrow x_A = 9$$

Vendor B from $20x_B + 15y_B = 460$ and $25x_B + 12y_B = 467$ yields $x_B = 11$ by the same method. Since $9 < 11$, Vendor A charges less for Product X.`,
      `**B) Vendor B charges less than Vendor A for Product Y.**  (true)

Vendor A solves to $x_A = 9$, and from $4x_A + 3y_A = 90$,

$$y_A = 30 - \\frac{4}{3}(9) = 30 - 12 = 18$$

Vendor B solves to $x_B = 11$. From the reduced first quote $4x_B + 3y_B = 92$,

$$4(11) + 3y_B = 92 \\Rightarrow 44 + 3y_B = 92 \\Rightarrow y_B = 16$$

Since $16 < 18$, Vendor B is cheaper for Product Y.`,
      `**C) For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.**  (true)

Vendor A prices are $x_A = 9$, $y_A = 18$; Vendor B prices are $x_B = 11$, $y_B = 16$. For 40 X + 30 Y,

$$40(9) + 30(18) = 360 + 540 = 900$$

$$40(11) + 30(16) = 440 + 480 = 920$$

A's \\$900 beats B's \\$920 on the bundle.`,
      `**D) Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by \\$20.**  (false)

Vendor A prices $x_A = 9$, $y_A = 18$ and Vendor B prices $x_B = 11$, $y_B = 16$ make the upcoming mix cost

$$40(9) + 30(18) = 900, \\qquad 40(11) + 30(16) = 920$$

Choosing Vendor B instead raises the cost by $920 - 900 = 20$; it does not reduce it. The statement is false.`,
      `**E) If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.**  (true)

With no X in the order, only the Y prices matter. Vendor A has $y_A = 18$ and Vendor B has $y_B = 16$, so

$$60 \\times 18 = 1080, \\qquad 60 \\times 16 = 960$$

Vendor B is \\$120 cheaper on that Y-only run.`,
    ],
    difficulty_level: "2/5",
    sort_order: 19,
    solution_overview: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright; both quotes only show bundled order totals.

**Part 1: Building the system.**

Each vendor's unit prices are independent and must be solved separately. Let $x_A$, $y_A$ denote Vendor A's prices, and $x_B$, $y_B$ denote Vendor B's.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
\\text{Vendor A: } 20x_A + 15y_A = 450, 25x_A + 12y_A = 441
$$

**2. Record this independent observation.** In symbols:

$$
\\text{Vendor B: } 20x_B + 15y_B = 460, 25x_B + 12y_B = 467
$$

**Part 2: The model.**

$$
\\text{Vendor A: } 20x_A + 15y_A = 450, 25x_A + 12y_A = 441 \\tag{1}
$$

$$
\\text{Vendor B: } 20x_B + 15y_B = 460, 25x_B + 12y_B = 467 \\tag{2}
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

**Answer.** Vendor A: X = \\$9, Y = \\$18 | Vendor B: X = \\$11, Y = \\$16`,
  },
  {
    id: "math-5-20",
    case_id: "MATH 5.20",
    title: `Alpha & Beta Holdings, Quarterly Dashboard`,
    context: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned \\$27,200 in Q1 revenue, and Beta earned exactly \\$1,000 more than Alpha. Alpha sold 150 units of P and 80 subscriptions of Q; Beta sold 100 units of P and 130 subscriptions of Q. (Alpha's headcount grew 8% year-on-year versus Beta's 6%  -  a staffing detail with no bearing on pricing.)`,
    statements: [
      `Product P is priced at \\$50 and Service Q at \\$70, identically for both companies.`,
      `Beta generated more Q1 revenue than Alpha.`,
      `If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.`,
      `Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.`,
      `Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Product P is priced at \\$50 and Service Q at \\$70, identically for both companies.**  (true)

Combined revenue $A + B = 27200$ and gap $B - A = 1000$ split the totals: $2B = 28200$, so $B = 14100$ and $A = 13100$. The sales rows become

$$150x + 80y = 13100, \\qquad 100x + 130y = 14100$$

Divide by 10: $15x + 8y = 1310$ and $10x + 13y = 1410$. Multiply by 2 and 3 to match $x$ terms, then subtract: $23y = 1610$, so $y = 70$. Then $10x + 13(70) = 1410$ gives $x = 50$. Check: $150(50) + 80(70) = 7500 + 5600 = 13100$. Product P is \\$50 and Service Q is \\$70.`,
      `**B) Beta generated more Q1 revenue than Alpha.**  (true)

From $A + B = 27200$ and $B - A = 1000$,

$$B = \\frac{27200 + 1000}{2} = 14100, \\qquad A = 27200 - 14100 = 13100$$

Since $14100 > 13100$, Beta's Q1 revenue is larger.`,
      `**C) If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.**  (false)

Alpha currently earns $150(50) + 80(70) = 7500 + 5600 = 13100$. After a 10% lift on P only, the new P price is $55$, so

$$150(55) + 80(70) = 8250 + 5600 = 13850$$

The relative increase is $750 / 13100 \\approx 0.057$, about 5.7%, not 10% of the whole book.`,
      `**D) Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.**  (false)

Alpha's current revenue is $13100$; after raising P by 10% with volumes unchanged it becomes $150(55) + 80(70) = 13850$. Beta's current revenue is $14100$. Since

$$14100 - 13850 = 250$$

the projected Alpha book still sits \\$250 short of Beta's Q1.`,
      `**E) Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.**  (true)

With prices $x = 50$ and $y = 70$,

$$130 \\times 70 = 9100, \\qquad 150 \\times 50 = 7500$$

Beta's Q line of \\$9,100 exceeds Alpha's whole P line of \\$7,500.`,
    ],
    difficulty_level: "2/5",
    sort_order: 20,
    solution_overview: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned \\$27,200 in Q1 revenue, and Beta earned exactly \\$1,000 more than Alpha.

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

**Answer.** Product P = \\$50.00 | Service Q = \\$70.00`,
  },
  {
    id: "math-5-21",
    case_id: "MATH 5.21",
    title: `FitZone Gym  -  Checking the Advertised Rates`,
    context: `FITZONE GYM  -  NEW MEMBER SPECIAL! "Join for just a \\$30 signup fee, then only \\$45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid \\$284 total. Jason, after his 10th monthly payment, had paid \\$448 total.`,
    statements: [
      `The flyer's advertised \\$30 signup fee matches what members are actually being charged.`,
      `The monthly rate members are actually paying is lower than the advertised \\$45/month.`,
      `Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.`,
      `Jason paid more than \\$400 in total by his 10th payment.`,
      `A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay \\$492.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) The flyer's advertised \\$30 signup fee matches what members are actually being charged.**  (false)

Maria and Jason give $x + 6y = 284$ and $x + 10y = 448$. Their difference is four months of the monthly rate:

$$(x + 10y) - (x + 6y) = 448 - 284 \\Rightarrow 4y = 164 \\Rightarrow y = 41$$

Then $x + 6(41) = 284$ leaves $x + 246 = 284$, so $x = 38$. The flyer said \\$30; members are charged \\$38.`,
      `**B) The monthly rate members are actually paying is lower than the advertised \\$45/month.**  (true)

From $x + 6y = 284$ and $x + 10y = 448$, subtraction gives $4y = 164$, so $y = 41$. Compared with the advertised \\$45,

$$45 - 41 = 4$$

the actual monthly charge sits \\$4 below the flyer.`,
      `**C) Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.**  (false)

The flyer's advertised rule at 6 months is

$$30 + 6(45) = 30 + 270 = 300$$

Maria actually paid \\$284. Since $284 < 300$, her real total does not exceed the flyer total.`,
      `**D) Jason paid more than \\$400 in total by his 10th payment.**  (true)

Jason's listed total is \\$448, and $448 > 400$.`,
      `**E) A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay \\$492.**  (true)

From Maria and Jason's histories, $4y = 164$ so the monthly rate is $y = 41$. Dropping the signup fee for 12 months:

$$12 \\times 41 = 492$$

which matches the claim.`,
    ],
    difficulty_level: "3/5",
    sort_order: 21,
    solution_overview: `FITZONE GYM. NEW MEMBER SPECIAL! "Join for just a \\$30 signup fee, then only \\$45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid \\$284 total.

**Part 1: Building the system.**

Let $x$ = the signup fee actually charged, $y$ = the actual monthly rate. The flyer's advertised figures (\\$30 and \\$45) are a claim to be checked, not values to plug directly into the model.

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

**Answer.** Signup fee = \\$38.00 | Monthly rate = \\$41.00/month (flyer's figures do not match)`,
  },
  {
    id: "math-5-22",
    case_id: "MATH 5.22",
    title: `StreamPlus  -  Household Billing Comparison`,
    context: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Customer service pulled combined billing records mixing plan-months across two households.`,
    tables_markdown: `| Household | Basic-Months | Premium-Months | Combined Total |
| --- | --- | --- | --- |
| Household 1 | 4 | 3 | \\$169 |
| Household 2 | 2 | 7 | \\$255 |`,
    statements: [
      `The Basic plan costs \\$19 per month.`,
      `The Premium plan costs \\$35 per month.`,
      `Household 2's combined total is more than double Household 1's combined total.`,
      `There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.`,
      `A household billed for 5 months of Basic and 5 months of Premium would owe a combined \\$250.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The Basic plan costs \\$19 per month.**  (true)

The mixed bills are $4x + 3y = 169$ and $2x + 7y = 255$. Multiply the first by 7 and the second by 3 so the Premium terms match, then subtract:

$$(28x + 21y) - (6x + 21y) = 1183 - 765 \\Rightarrow 22x = 418 \\Rightarrow x = 19$$

Basic costs \\$19 per month.`,
      `**B) The Premium plan costs \\$35 per month.**  (false)

From $4x + 3y = 169$ and $2x + 7y = 255$, elimination gives $x = 19$. Substitute into Household 1:

$$4(19) + 3y = 169 \\Rightarrow 76 + 3y = 169 \\Rightarrow 3y = 93 \\Rightarrow y = 31$$

Premium is \\$31, not \\$35.`,
      `**C) Household 2's combined total is more than double Household 1's combined total.**  (false)

The table prints both combined totals, so compare

$$2 \\times 169 = 338$$

against Household 2's \\$255. Since $255 < 338$, Household 2 is larger but not more than double.`,
      `**D) There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.**  (false)

The plans are pure flat rates $19n$ and $31n$ with no fixed fee. Setting them equal:

$$19n = 31n \\Rightarrow 0 = 12n \\Rightarrow n = 0$$

There is no positive month count at which the pure-plan bills match.`,
      `**E) A household billed for 5 months of Basic and 5 months of Premium would owe a combined \\$250.**  (true)

With $x = 19$ and $y = 31$,

$$5(19) + 5(31) = 95 + 155 = 250$$

which is the claimed combined bill.`,
    ],
    difficulty_level: "3/5",
    sort_order: 22,
    solution_overview: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Customer service pulled combined billing records mixing plan-months across two households.

**Part 1: Building the system.**

Let $x$ = Basic monthly price, $y$ = Premium monthly price.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

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

**Answer.** Basic = \\$19.00/month | Premium = \\$31.00/month`,
  },
  {
    id: "math-5-23",
    case_id: "MATH 5.23",
    title: `Willow Market  -  Grocery Receipts`,
    context: `Two items  -  organic apples and almond milk  -  recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.)`,
    tables_markdown: `| Receipt 1 | Qty | Price |
| --- | --- | --- |
| Bread (loaf) | 1 | \\$3.60 |
| Eggs (dozen) | 1 | \\$4.40 |
| Organic Apples (lb) | 5 | ? |
| Almond Milk (carton) | 3 | ? |
| Receipt Total |  | \\$50.00 |
| Receipt 2 | Qty | Price |
| Bread (loaf) | 1 | \\$3.60 |
| Organic Apples (lb) | 2 | ? |
| Almond Milk (carton) | 5 | ? |
| Receipt Total |  | \\$43.20 |`,
    statements: [
      `Organic apples cost \\$4.80 per pound.`,
      `Almond milk costs less than organic apples, per unit.`,
      `Five pounds of apples costs exactly the same as four cartons of almond milk.`,
      `If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than \\$47.00.`,
      `Buying 10 lb of apples and 2 cartons of milk together costs more than \\$60.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) Organic apples cost \\$4.80 per pound.**  (true)

Peel known items first. Receipt 1: $50.00 - 3.60 - 4.40 = 42.00$, leaving $5x + 3y = 42$. Receipt 2: $43.20 - 3.60 = 39.60$, leaving $2x + 5y = 39.60$. Multiply the first leftover by 5 and the second by 3, then subtract:

$$(25x + 15y) - (6x + 15y) = 210 - 118.80 \\Rightarrow 19x = 91.20 \\Rightarrow x = 4.80$$

Organic apples cost \\$4.80 per pound.`,
      `**B) Almond milk costs less than organic apples, per unit.**  (false)

After peeling known items, $5x + 3y = 42$ and $2x + 5y = 39.60$ solve to $x = 4.80$. Then

$$5(4.80) + 3y = 42 \\Rightarrow 24 + 3y = 42 \\Rightarrow 3y = 18 \\Rightarrow y = 6$$

Almond milk is \\$6.00 per carton and apples are \\$4.80 per pound. Since $6.00 > 4.80$, milk is the dearer unit, not the cheaper one.`,
      `**C) Five pounds of apples costs exactly the same as four cartons of almond milk.**  (true)

The recovered prices are $x = 4.80$ and $y = 6.00$, so

$$5(4.80) = 24.00, \\qquad 4(6.00) = 24.00$$

Five pounds and four cartons land on the same \\$24.`,
      `**D) If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than \\$47.00.**  (false)

Receipt 1 printed \\$50.00 with no loyalty card. Five percent off that printed total is

$$50.00 \\times 0.05 = 2.50, \\qquad 50.00 - 2.50 = 47.50$$

\\$47.50 is still above \\$47, so the discounted bill would not fall below the claimed cutoff.`,
      `**E) Buying 10 lb of apples and 2 cartons of milk together costs more than \\$60.**  (false)

With $x = 4.80$ and $y = 6$,

$$10(4.80) + 2(6) = 48 + 12 = 60$$

Equal to \\$60 is not "more than \\$60".`,
    ],
    difficulty_level: "3/5",
    sort_order: 23,
    solution_overview: `Two items, organic apples and almond milk, recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.).

**Part 1: Building the system.**

Let $x$ = current price per lb of organic apples, $y$ = current price per carton of almond milk. Bread and egg prices are already known, and the loyalty-discount note is a distractor that does not apply here.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Subtract known items, then write the remaining-price equation.** Start from the printed total: $5x + 3y = 50.00 - 3.60 - 4.40 = 42.00$. The clean system equation is:

$$
5x + 3y = 42.00
$$

**2. Subtract known items, then write the remaining-price equation.** Start from the printed total: $2x + 5y = 43.20 - 3.60 = 39.60$. The clean system equation is:

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

**Answer.** Organic apples = \\$4.80/lb | Almond milk = \\$6.00/carton`,
  },
  {
    id: "math-5-24",
    case_id: "MATH 5.24",
    title: `BrightHome Energy  -  Monthly Utility Bills`,
    context: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is \\$0.24/unit, unverified against real data. BrightHome also offers a Solar Offset Plan with no connection fee, at a flat \\$0.29/unit.`,
    tables_markdown: `| Bill | Units Consumed | Total Charge |
| --- | --- | --- |
| Bill 1 | 240 | \\$83.40 |
| Bill 2 | 380 | \\$112.80 |`,
    statements: [
      `The fixed connection fee is \\$33.`,
      `Customer service's claimed rate of \\$0.24 per unit is correct.`,
      `At 280 units of usage, the standard plan costs less than \\$95.`,
      `The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.`,
      `At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The fixed connection fee is \\$33.**  (true)

The standard plan is $x + yu$. Bill 1 and Bill 2 give $x + 240y = 83.40$ and $x + 380y = 112.80$. Their difference is 140 units of usage:

$$140y = 112.80 - 83.40 = 29.40 \\Rightarrow y = 0.21$$

Then $x + 240(0.21) = 83.40$ is $x + 50.40 = 83.40$, so $x = 33$. The fixed connection fee is \\$33.`,
      `**B) Customer service's claimed rate of \\$0.24 per unit is correct.**  (false)

From the two bills $x + 240y = 83.40$ and $x + 380y = 112.80$,

$$(380 - 240)y = 112.80 - 83.40 \\Rightarrow 140y = 29.40 \\Rightarrow y = 0.21$$

The actual rate is \\$0.21 per unit, not the claimed \\$0.24.`,
      `**C) At 280 units of usage, the standard plan costs less than \\$95.**  (true)

The recovered standard model is $33 + 0.21u$. At $u = 280$,

$$33 + 0.21 \\cdot 280 = 33 + 58.80 = 91.80$$

Since $91.80 < 95$, the claim is true.`,
      `**D) The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.**  (false)

Standard is $33 + 0.21u$ and Solar is $0.29u$. Set them equal:

$$33 + 0.21u = 0.29u \\Rightarrow 33 = 0.08u \\Rightarrow u = \\frac{33}{0.08} = 412.5$$

Solar wins for $0 < u < 412.5$, but past $412.5$ units the standard plan's cheaper per-unit rate takes over. The claim that Solar wins at every positive usage is false.`,
      `**E) At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.**  (false)

Standard is $33 + 0.21u$ and Solar is $0.29u$. They meet at $u = 412.5$. At $u = 500$,

$$33 + 0.21 \\cdot 500 = 33 + 105 = 138$$

$$0.29 \\cdot 500 = 145$$

Standard's \\$138 undercuts Solar's \\$145, so Solar is not cheaper at 500 units.`,
    ],
    difficulty_level: "3/5",
    sort_order: 24,
    solution_overview: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is \\$0.24/unit, unverified against real data.

**Part 1: Building the system.**

Let $x$ = fixed connection fee, $y$ = rate per unit under the standard plan. Treat the \\$0.24/unit figure as a claim to verify.

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

**Answer.** Fixed fee = \\$33.00 | Rate = \\$0.21/unit (customer service's figure does not match)`,
  },
  {
    id: "math-5-25",
    case_id: "MATH 5.25",
    title: `Trattoria Bella  -  Off-Peak vs. Peak Bills`,
    context: `Trattoria Bella serves pasta and appetizers at consistent prices. Off-peak tables carry no service fee; peak tables automatically have a 10% service charge added before the bill is printed. Table 5 (off-peak) printed \\$174.00 for 6 pasta + 4 appetizers, with no fee. Table 8 (peak, fee already included) came to \\$46.00 more than Table 5's total, for 5 pasta + 7 appetizers.`,
    statements: [
      `A pasta dish costs \\$19.`,
      `An appetizer costs more than a pasta dish.`,
      `Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly \\$26.00.`,
      `If Table 5 had also been charged the 10% peak-hour service fee, its total would have been \\$191.40.`,
      `Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than \\$150.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) A pasta dish costs \\$19.**  (true)

Table 5 is a clean food total: $6x + 4y = 174$. Table 8 printed \\$46 more than that, so its fee-included total is $174 + 46 = 220$. Strip the 10% service charge: $220 / 1.10 = 200$. The food system is then $6x + 4y = 174$ and $5x + 7y = 200$. Halve the first, multiply by 7, and subtract twice the second:

$$(21x + 14y) - (10x + 14y) = 609 - 400 \\Rightarrow 11x = 209 \\Rightarrow x = 19$$

A pasta dish costs \\$19.`,
      `**B) An appetizer costs more than a pasta dish.**  (false)

After removing Table 8's fee, the system $6x + 4y = 174$ and $5x + 7y = 200$ solves to $x = 19$. From the halved Table 5 equation $3x + 2y = 87$,

$$3(19) + 2y = 87 \\Rightarrow 57 + 2y = 87 \\Rightarrow y = 15$$

Since $15 < 19$, an appetizer is cheaper than a pasta dish, not more expensive.`,
      `**C) Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly \\$26.00.**  (true)

Table 8's printed total is $174 + 46 = 220$. Undo the 10% charge:

$$\\frac{220}{1.10} = 200$$

Then $200 - 174 = 26$. The food-only gap is exactly \\$26.00 (the printed \\$46 gap was measured after the service charge).`,
      `**D) If Table 5 had also been charged the 10% peak-hour service fee, its total would have been \\$191.40.**  (true)

Table 5's food total is already \\$174. Attach the peak multiplier:

$$174.00 \\times 1.10 = 191.40$$

which matches the claim.`,
      `**E) Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than \\$150.**  (true)

With pasta $x = 19$ and appetizer $y = 15$, the food subtotal is

$$4(19) + 4(15) = 76 + 60 = 136$$

Then $136 \\times 1.10 = 149.60$. Since $149.60 < 150$, the claim is true.`,
    ],
    difficulty_level: "3/5",
    sort_order: 25,
    solution_overview: `Trattoria Bella serves pasta and appetizers at consistent prices. Off-peak tables carry no service fee; peak tables automatically have a 10% service charge added before the bill is printed.

**Part 1: Building the system.**

Let $x$ = price of one pasta dish, $y$ = price of one appetizer. Table 8's total must first be reconstructed as Table 5's total plus \\$46.00, and only then can the 10% service charge be stripped back out.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
6x + 4y = 174.00
$$

**2. Record this independent observation.** In symbols:

$$
5x + 7y = (174.00 + 46.00) \\div 1.10 = 200.00
$$

**Part 2: The model.**

$$
6x + 4y = 174.00 \\tag{1}
$$

$$
5x + 7y = (174.00 + 46.00) \\div 1.10 = 200.00 \\tag{2}
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

**Answer.** Pasta dish = \\$19.00 | Appetizer = \\$15.00`,
  },
  {
    id: "math-5-26",
    case_id: "MATH 5.26",
    title: `Meridian Distribution  -  Warehouse Inventory Summary`,
    context: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost  -  but only item counts and cost determine unit pricing.`,
    tables_markdown: `| Shipment | Item M Units | Item N Units | Wt. M (kg) | Wt. N (kg) | Cost |
| --- | --- | --- | --- | --- | --- |
| Shipment 1 | 110 | 80 | 2.4 | 1.7 | \\$4,470 |
| Shipment 2 | 70 | 150 | 2.4 | 1.7 | \\$5,520 |`,
    statements: [
      `Item M costs \\$21 per unit.`,
      `Item N costs \\$30 per unit.`,
      `Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.`,
      `150 units of Item N alone would cost \\$4,050.`,
      `Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Item M costs \\$21 per unit.**  (true)

Cost depends on counts, not the weight columns: $110x + 80y = 4470$ and $70x + 150y = 5520$. Divide by 10, then multiply by 15 and 8 so the $y$ terms match at $120y$:

$$(165x + 120y) - (56x + 120y) = 6705 - 4416 \\Rightarrow 109x = 2289 \\Rightarrow x = 21$$

Item M costs \\$21 per unit.`,
      `**B) Item N costs \\$30 per unit.**  (false)

From $110x + 80y = 4470$ and $70x + 150y = 5520$, elimination gives $x = 21$. On the reduced first equation $11x + 8y = 447$,

$$11(21) + 8y = 447 \\Rightarrow 231 + 8y = 447 \\Rightarrow 8y = 216 \\Rightarrow y = 27$$

Item N costs \\$27, not \\$30.`,
      `**C) Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.**  (false)

Each shipment's item count is the sum of its two columns:

$$\\frac{4470}{110 + 80} = \\frac{4470}{190} \\approx 23.53$$

$$\\frac{5520}{70 + 150} = \\frac{5520}{220} = 25.09\\overline{09}$$

The two averages are not the same.`,
      `**D) 150 units of Item N alone would cost \\$4,050.**  (true)

From the shipment system, $y = 27$. Then

$$150 \\times 27 = 4050$$

matching the claim. No Item M enters that order.`,
      `**E) Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.**  (false)

The cost identities are $110(21) + 80(27) = 2310 + 2160 = 4470$ and $70(21) + 150(27) = 1470 + 4050 = 5520$. Weight never appears as a coefficient. Shipment 1 is cheaper because it bought a cheaper mix of units, not because its total weight $110(2.4) + 80(1.7) = 400$ kg happens to sit below Shipment 2's $70(2.4) + 150(1.7) = 423$ kg.`,
    ],
    difficulty_level: "3/5",
    sort_order: 26,
    solution_overview: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost, but only item counts and cost determine unit pricing.

**Part 1: Building the system.**

Let $x$ = cost per unit of Item M, $y$ = cost per unit of Item N. Weight and volume are logged for freight billing and play no role in the item pricing itself.

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

**Answer.** Item M = \\$21.00/unit | Item N = \\$27.00/unit`,
  },
  {
    id: "math-5-27",
    case_id: "MATH 5.27",
    title: `Green Horizons Landscaping  -  Job Quotation`,
    context: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly. Job 1: 7 bundles  -  Total \\$1,946. Job 2: 13 Standard + 21 Premium  -  Total \\$1,301. New Quotation: 8 Standard + 19 Premium  -  Quoted Total: \\$1,068.`,
    statements: [
      `Standard planting costs \\$29 per unit.`,
      `Premium planting costs \\$50 per unit.`,
      `Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.`,
      `The Premium portion alone of Job 1 cost more than the entirety of Job 2.`,
      `The new quotation of \\$1,068 is mathematically consistent with the confirmed rates.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Standard planting costs \\$29 per unit.**  (true)

Each Job 1 bundle is 2 Standard + 5 Premium, so 7 bundles become $14x + 35y = 1946$. Job 2 is already in units: $13x + 21y = 1301$. Divide Job 1 by 7 to get $2x + 5y = 278$, multiply that by 21 and Job 2 by 5, then subtract the $105y$ terms:

$$(65x + 105y) - (42x + 105y) = 6505 - 5838 \\Rightarrow 23x = 667 \\Rightarrow x = 29$$

Standard planting costs \\$29 per unit.`,
      `**B) Premium planting costs \\$50 per unit.**  (false)

After expanding Job 1, the system $14x + 35y = 1946$ and $13x + 21y = 1301$ reduces to $2x + 5y = 278$ with $x = 29$. Then

$$2(29) + 5y = 278 \\Rightarrow 58 + 5y = 278 \\Rightarrow 5y = 220 \\Rightarrow y = 44$$

Premium is \\$44, not \\$50.`,
      `**C) Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.**  (true)

One bundle is defined as 2 Standard + 5 Premium, so seven of them unpack as

$$7 \\times 2 = 14, \\qquad 7 \\times 5 = 35$$

Those are the coefficients that belong in Job 1's equation.`,
      `**D) The Premium portion alone of Job 1 cost more than the entirety of Job 2.**  (true)

Job 1 expands to 35 Premium units. The rates solve to $x = 29$ and $y = 44$, so Job 1's Premium share is

$$35 \\times 44 = 1540$$

Job 2's whole invoice is \\$1,301, and $1540 > 1301$.`,
      `**E) The new quotation of \\$1,068 is mathematically consistent with the confirmed rates.**  (true)

The confirmed rates are $x = 29$ and $y = 44$. Rebuild the quoted mix:

$$8(29) + 19(44) = 232 + 836 = 1068$$

The issued \\$1,068 matches exactly.`,
    ],
    difficulty_level: "3/5",
    sort_order: 27,
    solution_overview: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly.

**Part 1: Building the system.**

Let $x$ = price per Standard unit, $y$ = price per Premium unit. Job 1's bundles must first be converted into individual Standard and Premium units before the system can be written.

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

**Answer.** Standard = \\$29.00/unit | Premium = \\$44.00/unit`,
  },
  {
    id: "math-5-28",
    case_id: "MATH 5.28",
    title: `Horizon Consulting  -  Travel Reimbursement Memo`,
    context: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is \\$0.40/mile, unconfirmed against payroll data. One of three reports contains a data-entry error making it financially impossible.`,
    tables_markdown: `| Report | Meal Days | Miles Driven | Total Reimbursed |
| --- | --- | --- | --- |
| Report 1 | 5 | 150 | \\$323 |
| Report 2 | 3 | 250 | \\$245 |
| Report 3 | 7 | 40 | \\$120 |`,
    statements: [
      `The per diem is \\$55 per day.`,
      `Finance's belief that the mileage rate is \\$0.40/mile is correct.`,
      `Report 3 is impossible, since 7 meal days alone would require at least \\$385 at the confirmed per-diem rate  -  far more than its reported \\$120 total.`,
      `Report 1's total exceeds Report 2's total by more than \\$80.`,
      `Reports 1 and 2 combined reimbursed at least \\$550.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The per diem is \\$55 per day.**  (true)

Three reports and two unknowns leave the model underdetermined until one report is set aside. Treat Reports 1 and 2 as the trusted pair (the working assumption that keeps both rows financially consistent with a shared per diem and mileage rate):

$$5x + 150y = 323, \\qquad 3x + 250y = 245$$

Multiply by 3 and 5 so the $x$ terms match, then subtract:

$$(15x + 1250y) - (15x + 450y) = 1225 - 969 \\Rightarrow 800y = 256 \\Rightarrow y = 0.32$$

Back into Report 1: $5x + 150(0.32) = 323$ is $5x + 48 = 323$, so $5x = 275$ and $x = 55$. Against that pair, Report 3 fails immediately: seven meal days alone cost $7 \\times 55 = 385$, already far above its reported \\$120. Under the Reports 1 and 2 assumption, the per diem is \\$55.`,
      `**B) Finance's belief that the mileage rate is \\$0.40/mile is correct.**  (false)

Under the working assumption that Reports 1 and 2 are trusted,

$$5x + 150y = 323, \\qquad 3x + 250y = 245$$

elimination yields $800y = 256$, so

$$y = \\frac{256}{800} = 0.32$$

Finance quoted \\$0.40/mile; the recovered rate is \\$0.32, which is \\$0.08 short. (Report 3 is inconsistent with this pair, since $7 \\times 55 = 385 > 120$, so it is not used to recover $y$.)`,
      `**C) Report 3 is impossible, since 7 meal days alone would require at least \\$385 at the confirmed per-diem rate  -  far more than its reported \\$120 total.**  (true)

Working from Reports 1 and 2 as the trusted pair gives per diem $x = 55$. Seven meal days, ignoring miles entirely, already cost

$$7 \\times 55 = 385$$

Report 3 lists only \\$120. Even with zero miles, $385 > 120$, so that row cannot be a valid reimbursement under the rates implied by Reports 1 and 2. The stem alone does not prove which report is the error, but this check shows Report 3 fails against the consistent pair.`,
      `**D) Report 1's total exceeds Report 2's total by more than \\$80.**  (false)

The two printed totals differ by

$$323 - 245 = 78$$

\\$78 is less than \\$80, so the gap does not clear the claimed threshold.`,
      `**E) Reports 1 and 2 combined reimbursed at least \\$550.**  (true)

Add the two printed totals:

$$323 + 245 = 568$$

Since $568 \\ge 550$, the claim holds.`,
    ],
    difficulty_level: "3/5",
    sort_order: 28,
    solution_overview: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is \\$0.40/mile, unconfirmed against payroll data.

**Part 1: Building the system.**

Let $x$ = per-diem rate, $y$ = per-mile rate. Identify which report cannot possibly be correct before building the model, and treat Finance's \\$0.40/mile belief as a claim to be checked.

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

**Answer.** Per diem = \\$55.00/day | Mileage rate = \\$0.32/mile (Finance's belief does not match)`,
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

Week 2's counts come from the sticky note: $B = A + 8$ and $A + B = 58$. Substitute: $A + (A + 8) = 58$, so $2A + 8 = 58$, $2A = 50$, $A = 25$, and $B = 33$. Week 1 and Week 2 are then

$$35x + 20y = 445, \\qquad 25x + 33y = 505$$

Multiply by 33 and 20 so the $y$ terms match at $660y$, and subtract:

$$(1155x + 660y) - (500x + 660y) = 14685 - 10100 \\Rightarrow 655x = 4585 \\Rightarrow x = 7$$

Widget A requires 7 hours. Check: with $y = 10$, $35(7) + 20(10) = 245 + 200 = 445$.`,
      `**B) Widget B requires 12 hours of labor to assemble.**  (false)

Recover Week 2 as 25 A and 33 B from $B = A + 8$ and $A + B = 58$. The two-week system $35x + 20y = 445$ and $25x + 33y = 505$ solves to $x = 7$. Then Week 1 gives

$$35(7) + 20y = 445 \\Rightarrow 245 + 20y = 445 \\Rightarrow 20y = 200 \\Rightarrow y = 10$$

Widget B needs 10 hours, not 12.`,
      `**C) Week 2 actually produced 25 Widget A units and 33 Widget B units.**  (true)

The sticky note is a small sum-and-difference system:

$$B = A + 8, \\qquad A + B = 58$$

Substitute: $A + (A + 8) = 58$, so $2A + 8 = 58$, $2A = 50$, $A = 25$, and $B = 33$.`,
      `**D) If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.**  (false)

The confirmed times are $x = 7$ and $y = 10$. The new A time is $7 \\times 1.20 = 8.4$. Week 1 would then use

$$35(8.4) + 20(10) = 294 + 200 = 494$$

The relative increase is $(494 - 445) / 445 = 49 / 445 \\approx 0.110$, about 11%, not 20%.`,
      `**E) The illegible Week 3 entry can be reconstructed as 20 Widget A units.**  (true)

With labor times $x = 7$ and $y = 10$, Week 3 still shows 15 Widget B and 290 hours:

$$7A + 10(15) = 290 \\Rightarrow 7A + 150 = 290 \\Rightarrow 7A = 140 \\Rightarrow A = 20$$

The missing Widget A count is 20.`,
    ],
    difficulty_level: "3/5",
    sort_order: 29,
    solution_overview: `Cedarline assembles Widget A and Widget B on the same line, each requiring a fixed number of labor-hours. Week 1's log is fully legible.

**Part 1: Building the system.**

Let $x$ = labor-hours per Widget A, $y$ = labor-hours per Widget B. Week 2's unit counts must first be recovered from the sticky note (a small sum-and-difference step) before the main system can be written.

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
| North | 85 | 70 | \\$4,145 |
| South | 55 | 95 | \\$3,875 |
| East | 65 | 50 | \\$3,200 |`,
    statements: [
      `Product X is priced at \\$29.`,
      `Product Y is priced at \\$28.`,
      `The East branch's reported revenue is fully consistent with the derived prices.`,
      `If the East branch's reported revenue were corrected to reflect the derived prices, it should read \\$3,085.`,
      `North's reported revenue exceeds South's and East's reported revenues combined.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Product X is priced at \\$29.**  (true)

Three branches and two unknowns leave the model underdetermined until one branch is treated as the error. Treat North and South as the trusted pair (the working assumption that both reconcile to the same company-wide prices):

$$85x + 70y = 4145, \\qquad 55x + 95y = 3875$$

Divide by 5 to get $17x + 14y = 829$ and $11x + 19y = 775$. Multiply by 19 and 14 so the $y$ terms match at $266y$:

$$(323x + 266y) - (154x + 266y) = 15751 - 10850 \\Rightarrow 169x = 4901 \\Rightarrow x = 29$$

Then $17(29) + 14y = 829$ gives $493 + 14y = 829$, so $y = 24$. Against that pair, East fails: $65(29) + 50(24) = 3085 \\neq 3200$. Under the North-South assumption, Product X is \\$29.`,
      `**B) Product Y is priced at \\$28.**  (false)

Under the working assumption that North and South are trusted, divide those rows by 5 to get $17x + 14y = 829$ and $11x + 19y = 775$. Elimination yields $x = 29$. Then

$$17(29) + 14y = 829 \\Rightarrow 493 + 14y = 829 \\Rightarrow 14y = 336 \\Rightarrow y = 24$$

Product Y is \\$24, not \\$28. (East is inconsistent with this pair, since $65(29) + 50(24) = 3085$ is not the reported \\$3,200, so East is not used to recover $y$.)`,
      `**C) The East branch's reported revenue is fully consistent with the derived prices.**  (false)

Working from North and South as the trusted pair gives $x = 29$ and $y = 24$. East's counts at those prices:

$$65(29) + 50(24) = 1885 + 1200 = 3085$$

The dashboard printed \\$3,200. The \\$115 discrepancy marks East as inconsistent with the North and South price pair, so the reported East revenue is not fully consistent.`,
      `**D) If the East branch's reported revenue were corrected to reflect the derived prices, it should read \\$3,085.**  (true)

Using North and South as the trusted pair, the company-wide prices are $x = 29$ and $y = 24$. East sells 65 X and 50 Y, so the corrected revenue is

$$65(29) + 50(24) = 1885 + 1200 = 3085$$

Replacing the printed \\$3,200 with \\$3,085 would put East on the same price pair as North and South.`,
      `**E) North's reported revenue exceeds South's and East's reported revenues combined.**  (false)

Use the printed dashboard totals (the claim compares reported figures):

$$3875 + 3200 = 7075$$

North reports \\$4,145. Since $4145 < 7075$, North does not exceed the other two combined.`,
    ],
    difficulty_level: "3/5",
    sort_order: 30,
    solution_overview: `Sterling Distributors' dashboard reports quarterly unit sales and revenue for Products X and Y, sold at company-wide fixed prices, across three branches. Two of the three branch reports are known to reconcile correctly; the third contains an uncorrected data-entry error, though the dashboard does not indicate which one.

**Part 1: Building the system.**

Let $x$ = price of Product X, $y$ = price of Product Y.

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

which does not match East's reported \\$3,200. The $115$ discrepancy reveals East as the erroneous branch.

**Answer.** Product X = \\$29.00/unit | Product Y = \\$24.00/unit`,
  },
  {
    id: "math-5-31",
    case_id: "MATH 5.31",
    title: `Riverside Hardware Supply  -  Two Fastener Invoices`,
    context: `Riverside Hardware Supply ships Type A Bolts and Type B Hinges by the case, at fixed per-case prices.`,
    tables_markdown: `| Invoice | Type A Cases | Type B Cases | Total |
| --- | --- | --- | --- |
| Invoice 1 | 9 | 13 | \\$527.45 |
| Invoice 2 | 7 | 19 | \\$657.35 |`,
    statements: [
      `Rounding Type A's case price up to the next whole dollar lands on exactly \\$19.00.`,
      `A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.`,
      `If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the \\$24 mark.`,
      `Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.`,
      `Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Rounding Type A's case price up to the next whole dollar lands on exactly \\$19.00.**  (true)

Riverside charges fixed per-case prices, so the two invoices together pin those prices down. Let $x$ be the price per case of Type A Bolts and $y$ the price per case of Type B Hinges. Invoice 1 ships 9 cases of Type A and 13 of Type B for \\$527.45, and Invoice 2 ships 7 and 19 for \\$657.35:

$$
9x + 13y = 527.45, \\\\qquad 7x + 19y = 657.35
$$

Only the Type A price is at issue, so eliminate $y$. Multiplying the first equation by 19 and the second by 13 makes both hinge terms $247y$:

$$
171x + 247y = 10021.55
$$

$$
91x + 247y = 8545.55
$$

Subtracting the second from the first removes $y$ entirely:

$$
80x = 1476.00, \\\\qquad x = \\\\frac{1476.00}{80} = 18.45
$$

A case of Type A costs \\$18.45. Rounding up to the next whole dollar means taking the smallest whole number at or above 18.45, which is 19, so the rounded price is \\$19.00 exactly and the claim holds.`,
      `**B) A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.**  (true)

This comparison turns on both per-case prices, so both must be recovered from the invoices. Let $x$ be the price per case of Type A Bolts and $y$ the price per case of Type B Hinges. Invoice 1's 9 and 13 cases and Invoice 2's 7 and 19 cases give

$$
9x + 13y = 527.45, \\\\qquad 7x + 19y = 657.35
$$

Scaling the first by 19 and the second by 13 so each carries $247y$, then subtracting:

$$
171x + 247y = 10021.55, \\\\qquad 91x + 247y = 8545.55
$$

$$
80x = 1476.00, \\\\qquad x = 18.45
$$

Putting that price back into Invoice 1 recovers the hinge price:

$$
9(18.45) + 13y = 527.45
$$

$$
166.05 + 13y = 527.45, \\\\qquad 13y = 361.40, \\\\qquad y = 27.80
$$

The gap between the two prices is

$$
y - x = 27.80 - 18.45 = 9.35
$$

Since $9 < 9.35 < 10$, the gap does exceed nine dollars while staying under ten, so the clerk is right.`,
      `**C) If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the \\$24 mark.**  (true)

An even split deliberately ignores which case holds which fastener, so no unit prices are needed and Invoice 2's own printed figures settle it. That invoice ships 7 cases of Type A and 19 of Type B, which is $7 + 19 = 26$ cases, for a total of \\$657.35. Dividing the total by the case count:

$$
\\\\frac{657.35}{26} = 25.2827\\\\ldots
$$

An implied share of about \\$25.28 per case sits above \\$24, so the statement is true.`,
      `**D) Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.**  (false)

Swapping the two quantities leaves a bill unchanged only when the two unit prices are equal, so the prices themselves decide this. Let $x$ be the price per case of Type A Bolts and $y$ the price per case of Type B Hinges:

$$
9x + 13y = 527.45, \\\\qquad 7x + 19y = 657.35
$$

Multiplying the first by 19 and the second by 13 gives matching $247y$ terms, and subtracting leaves

$$
171x + 247y = 10021.55, \\\\qquad 91x + 247y = 8545.55
$$

$$
80x = 1476.00, \\\\qquad x = 18.45
$$

Substituting into Invoice 1:

$$
9(18.45) + 13y = 527.45, \\\\qquad 13y = 361.40, \\\\qquad y = 27.80
$$

The prices are \\$18.45 and \\$27.80, which differ by \\$9.35 and are therefore not close together at all. Applying the swapped counts, 13 cases of Type A and 9 of Type B:

$$
13(18.45) + 9(27.80) = 239.85 + 250.20 = 490.05
$$

Invoice 1's printed total is \\$527.45, so the swap changes the bill by \\$37.40. Both halves of the claim fail.`,
      `**E) Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.**  (false)

Riverside charges fixed per-case prices, so a bill is a linear function of the quantities ordered and there is no premium term anywhere in the model. Adding the two invoices' quantities gives $9 + 7 = 16$ cases of Type A and $13 + 19 = 32$ cases of Type B, so with per-case prices $x$ and $y$ the combined order costs

$$
16x + 32y = (9x + 13y) + (7x + 19y) = 527.45 + 657.35 = 1184.80
$$

The combined order comes to exactly \\$1,184.80, precisely the sum of the two separate bills rather than strictly more. A bulk premium would have to appear as an extra term in the pricing rule, and none exists, so the statement is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 31,
    solution_overview: `Riverside Hardware Supply ships Type A Bolts and Type B Hinges by the case, at fixed per-case prices.

**Part 1: Building the system.**

Let $x$ = price per case of Type A, $y$ = price per case of Type B.

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

**Answer.** Type A costs \\$18.45 per case and Type B costs \\$27.80 per case.`
  },
  {
    id: "math-5-32",
    case_id: "MATH 5.32",
    title: `Swift Cargo Co. vs. a Flat-Rate Competitor`,
    context: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile. A competitor charges a flat \\$1.35 per mile with no dispatch fee at all.`,
    tables_markdown: `| Route | Miles | Total Charged by Swift Cargo |
| --- | --- | --- |
| Route 1 | 170 | \\$460.00 |
| Route 2 | 305 | \\$709.75 |`,
    statements: [
      `The dispatch fee sits exactly halfway between \\$145 and \\$146.`,
      `Per mile, Swift Cargo's rate is closer to \\$1.50 than to \\$2.00.`,
      `A 250-mile haul comes in five cents under six hundred and eight dollars.`,
      `At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of \\$270.`,
      `Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) The dispatch fee sits exactly halfway between \\$145 and \\$146.**  (true)

Swift Cargo's bill is a fixed dispatch fee plus a constant rate per mile, so let $x$ be the dispatch fee and $y$ the rate per mile. Route 1 covers 170 miles for \\$460.00 and Route 2 covers 305 miles for \\$709.75:

$$
x + 170y = 460.00, \\\\qquad x + 305y = 709.75
$$

Both routes carry the same fee, so subtracting the first from the second cancels $x$ and isolates the mileage rate:

$$
(305 - 170)y = 709.75 - 460.00
$$

$$
135y = 249.75, \\\\qquad y = \\\\frac{249.75}{135} = 1.85
$$

Putting that rate back into Route 1 recovers the fee:

$$
x + 170(1.85) = 460.00, \\\\qquad x + 314.50 = 460.00, \\\\qquad x = 145.50
$$

The midpoint of \\$145 and \\$146 is $(145 + 146)/2 = 145.50$, exactly the dispatch fee, so the claim holds.`,
      `**B) Per mile, Swift Cargo's rate is closer to \\$1.50 than to \\$2.00.**  (false)

Only the per-mile rate is in question, and it can be isolated without ever finding the dispatch fee. Writing the fee as $x$ and the rate as $y$, the two recorded routes read

$$
x + 170y = 460.00, \\\\qquad x + 305y = 709.75
$$

Because the identical fee appears in both, subtracting the first from the second removes it and leaves the rate alone:

$$
135y = 249.75, \\\\qquad y = \\\\frac{249.75}{135} = 1.85
$$

The rate is \\$1.85 per mile, and which reference price it is closer to is decided by comparing the two distances:

$$
|1.85 - 1.50| = 0.35, \\\\qquad |1.85 - 2.00| = 0.15
$$

A gap of 15 cents to \\$2.00 beats a gap of 35 cents to \\$1.50, so the rate sits nearer to \\$2.00, the opposite of the claim, and the statement is false.`,
      `**C) A 250-mile haul comes in five cents under six hundred and eight dollars.**  (false)

Pricing a 250-mile haul needs both parts of Swift Cargo's formula, so start from the two recorded routes with $x$ as the dispatch fee and $y$ as the rate per mile:

$$
x + 170y = 460.00, \\\\qquad x + 305y = 709.75
$$

Subtracting cancels the shared fee:

$$
135y = 249.75, \\\\qquad y = 1.85
$$

and Route 1 then gives the fee:

$$
x + 170(1.85) = 460.00, \\\\qquad x = 460.00 - 314.50 = 145.50
$$

At 250 miles the charge is therefore

$$
145.50 + 250(1.85) = 145.50 + 462.50 = 608.00
$$

Five cents under six hundred and eight dollars would be \\$607.95. The haul costs exactly \\$608.00, landing on the round figure rather than just below it, so the statement is false.`,
      `**D) At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of \\$270.**  (true)

Comparing the carriers at 250 miles means pricing both, so Swift Cargo's formula has to be rebuilt first. With $x$ as its dispatch fee and $y$ as its rate per mile, the two recorded routes are

$$
x + 170y = 460.00, \\\\qquad x + 305y = 709.75
$$

Subtracting removes the shared fee and gives the rate, and Route 1 then gives the fee:

$$
135y = 249.75, \\\\qquad y = 1.85
$$

$$
x + 170(1.85) = 460.00, \\\\qquad x = 145.50
$$

Swift Cargo's 250-mile charge is then

$$
145.50 + 250(1.85) = 145.50 + 462.50 = 608.00
$$

The competitor charges a flat \\$1.35 per mile with no dispatch fee at all, so its 250-mile charge is

$$
1.35(250) = 337.50
$$

The saving from switching is

$$
608.00 - 337.50 = 270.50
$$

At \\$270.50 the saving does clear \\$270, so the statement is true.`,
      `**E) Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.**  (true)

Two straight lines with different slopes cross exactly once, and here the crossover can be located explicitly once Swift Cargo's formula is known. Taking $x$ as its dispatch fee and $y$ as its rate per mile, the two recorded routes give

$$
x + 170y = 460.00, \\\\qquad x + 305y = 709.75
$$

$$
135y = 249.75, \\\\qquad y = 1.85
$$

$$
x + 170(1.85) = 460.00, \\\\qquad x = 145.50
$$

So Swift Cargo charges $145.50 + 1.85d$ for a haul of $d$ miles, while the competitor charges $1.35d$. The slopes, \\$1.85 and \\$1.35 per mile, are different, which guarantees a single crossing. Setting the two charges equal:

$$
145.50 + 1.85d = 1.35d
$$

$$
145.50 = 1.35d - 1.85d = -0.50d
$$

$$
d = \\\\frac{145.50}{-0.50} = -291
$$

The two formulas do meet, at $d = -291$ miles. A negative distance has no physical meaning, so the crossover exists algebraically while being commercially irrelevant, and the statement is true.`,
    ],
    difficulty_level: "3/5",
    sort_order: 32,
    solution_overview: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile.

**Part 1: Building the system.**

Let $x$ = Swift Cargo's fixed dispatch fee, $y$ = Swift Cargo's rate per mile.

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

**Answer.** Swift Cargo charges a \\$145.50 dispatch fee plus \\$1.85 per mile.`,
  },
  {
    id: "math-5-33",
    case_id: "MATH 5.33",
    title: `Café Lumière  -  Two Till Receipts`,
    context: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only. Receipt 1: 7 Specialty Drinks + 9 Pastries  -  Total: \\$78.65  -  (listed) Total Calories: 6,100 Receipt 2: 11 Specialty Drinks + 4 Pastries  -  Total: \\$85.05  -  (listed) Total Calories: 5,400`,
    statements: [
      `A Specialty Drink's price, tripled, would clear twenty dollars.`,
      `Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.`,
      `Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.`,
      `Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past \\$4.90.`,
      `A week of daily 2-Drink-2-Pastry orders costs enough that, left over from \\$150, you'd have less than \\$8 in change.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) A Specialty Drink's price, tripled, would clear twenty dollars.**  (false)

Only the drink price is at issue, so it can be isolated from the two receipts. Let $x$ be the price of a Specialty Drink and $y$ the price of a Pastry. Receipt 1 lists 7 drinks and 9 pastries for \\$78.65, Receipt 2 lists 11 drinks and 4 pastries for \\$85.05:

$$
7x + 9y = 78.65, \\\\qquad 11x + 4y = 85.05
$$

Multiplying the first by 4 and the second by 9 makes both pastry terms $36y$, so subtracting eliminates the pastry price:

$$
28x + 36y = 314.60, \\\\qquad 99x + 36y = 765.45
$$

$$
71x = 450.85, \\\\qquad x = \\\\frac{450.85}{71} = 6.35
$$

Tripling that price gives

$$
3(6.35) = 19.05
$$

At \\$19.05 the tripled price falls 95 cents short of \\$20, so it does not clear twenty dollars and the statement is false.`,
      `**B) Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.**  (true)

Weighing four pastries against one of each item needs both prices. With $x$ the price of a Specialty Drink and $y$ the price of a Pastry, the two receipts read

$$
7x + 9y = 78.65, \\\\qquad 11x + 4y = 85.05
$$

Scaling the first by 4 and the second by 9 gives a shared $36y$, and subtracting isolates the drink price:

$$
28x + 36y = 314.60, \\\\qquad 99x + 36y = 765.45
$$

$$
71x = 450.85, \\\\qquad x = 6.35
$$

Substituting back into Receipt 1 recovers the pastry price:

$$
7(6.35) + 9y = 78.65, \\\\qquad 44.45 + 9y = 78.65, \\\\qquad 9y = 34.20, \\\\qquad y = 3.80
$$

Now compare the two baskets:

$$
4y = 4(3.80) = 15.20, \\\\qquad x + y = 6.35 + 3.80 = 10.15
$$

$$
15.20 - 10.15 = 5.05
$$

Four pastries cost \\$15.20 against \\$10.15 for a drink and a pastry, half again as much, so both the comparison and the "quite a bit more" hold.`,
      `**C) Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.**  (false)

The two calorie figures, 6,100 and 5,400, are whole-receipt totals with no per-item calorie value attached, so bringing them in adds two fresh unknowns, calories per drink and calories per pastry, without saying anything about money. Prices become recoverable only because the item counts, 7 and 9 on Receipt 1 and 11 and 4 on Receipt 2, act as the coefficients tying the unknown prices to the \\$78.65 and \\$85.05 totals. Strip those counts away and the dollar totals are two bare numbers with nothing left to multiply, and the calorie column cannot stand in for them because it carries no price information at all. The prices cannot be pinned down that way, so the statement is false.`,
      `**D) Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past \\$4.90.**  (true)

An even split needs only Receipt 1's own printed figures, not the individual prices. That receipt lists 7 Specialty Drinks and 9 Pastries, which is $7 + 9 = 16$ items, for a total of \\$78.65:

$$
\\\\frac{78.65}{16} = 4.915625
$$

At about \\$4.92 per item the average sits above \\$4.90 by roughly a cent and a half, exactly the narrow margin the claim describes, so the statement is true.`,
      `**E) A week of daily 2-Drink-2-Pastry orders costs enough that, left over from \\$150, you'd have less than \\$8 in change.**  (true)

Costing this standing order requires both prices, so recover them from the two receipts. With $x$ the drink price and $y$ the pastry price:

$$
7x + 9y = 78.65, \\\\qquad 11x + 4y = 85.05
$$

Multiplying by 4 and 9 respectively gives matching $36y$ terms, and subtracting leaves

$$
71x = 765.45 - 314.60 = 450.85, \\\\qquad x = 6.35
$$

Receipt 1 then gives the pastry price:

$$
7(6.35) + 9y = 78.65, \\\\qquad 9y = 34.20, \\\\qquad y = 3.80
$$

A daily order of two drinks and two pastries costs

$$
2(6.35) + 2(3.80) = 12.70 + 7.60 = 20.30
$$

Over seven days, and measured against \\$150:

$$
7(20.30) = 142.10, \\\\qquad 150.00 - 142.10 = 7.90
$$

The change is \\$7.90, ten cents under \\$8, so the statement is true.`,
    ],
    difficulty_level: "3/5",
    sort_order: 33,
    solution_overview: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only.

**Part 1: Building the system.**

Let $x$ = price per Specialty Drink, $y$ = price per Pastry.

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

**Answer.** A Specialty Drink costs \\$6.35 and a Pastry costs \\$3.80.`,
  },
  {
    id: "math-5-34",
    case_id: "MATH 5.34",
    title: `Northgate Bakery Wholesale  -  Order Confirmation Emails`,
    context: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes. Total cost: \\$297.30." Email 2: "Order confirmed: 6 dozen croissants + 23 dozen baguettes. Total cost: \\$299.30."`,
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

Only the croissant price matters, so it can be extracted from the two order confirmations. Let $x$ be the wholesale price per dozen croissants and $y$ the price per dozen baguettes. Email 1 confirms 14 dozen croissants and 11 dozen baguettes for \\$297.30, and Email 2 confirms 6 and 23 dozen for \\$299.30:

$$
14x + 11y = 297.30, \\\\qquad 6x + 23y = 299.30
$$

Multiplying the first by 23 and the second by 11 makes both baguette terms $253y$, so subtracting clears them:

$$
322x + 253y = 6837.90, \\\\qquad 66x + 253y = 3292.30
$$

$$
256x = 3545.60, \\\\qquad x = \\\\frac{3545.60}{256} = 13.85
$$

Four dozen at that price cost

$$
4(13.85) = 55.40
$$

\\$55.40 is 40 cents past \\$55, so four dozen do blow past fifty-five dollars and the statement is true.`,
      `**B) The per-dozen gap between croissants and baguettes is closer to four dollars than to five.**  (true)

A gap between the two prices needs both of them. With $x$ the price per dozen croissants and $y$ the price per dozen baguettes, the two emails give

$$
14x + 11y = 297.30, \\\\qquad 6x + 23y = 299.30
$$

Scaling by 23 and 11 makes the baguette terms match at $253y$, and subtracting leaves

$$
256x = 6837.90 - 3292.30 = 3545.60, \\\\qquad x = 13.85
$$

Substituting into Email 1 recovers the baguette price:

$$
14(13.85) + 11y = 297.30, \\\\qquad 193.90 + 11y = 297.30, \\\\qquad 11y = 103.40, \\\\qquad y = 9.40
$$

The gap and its distances to the two round figures are

$$
x - y = 13.85 - 9.40 = 4.45, \\\\qquad |4.45 - 4| = 0.45, \\\\qquad |4.45 - 5| = 0.55
$$

A 45-cent gap to four dollars beats a 55-cent gap to five, so the \\$4.45 difference sits nearer to four dollars and the statement is true.`,
      `**C) Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.**  (false)

With equal dozens of each item, the croissant share of the bill is the croissant price over the sum of the two prices, so both are needed. From the two emails, with $x$ per dozen croissants and $y$ per dozen baguettes:

$$
14x + 11y = 297.30, \\\\qquad 6x + 23y = 299.30
$$

Scaling by 23 and 11 and subtracting gives

$$
256x = 3545.60, \\\\qquad x = 13.85
$$

and Email 1 then yields

$$
193.90 + 11y = 297.30, \\\\qquad 11y = 103.40, \\\\qquad y = 9.40
$$

Ten dozen of each costs

$$
10(13.85) = 138.50, \\\\qquad 10(9.40) = 94.00, \\\\qquad 138.50 + 94.00 = 232.50
$$

so the croissant share is

$$
\\\\frac{138.50}{232.50} \\\\approx 0.5957
$$

Three-fifths is $0.60$, and $0.5957$ falls just below it, so croissants come up short of that share and the statement is false.`,
      `**D) Per dozen-item ordered, Email 1 runs pricier than Email 2  -  and the gap clears two dollars.**  (false)

Averaging each email's total over the dozens it covers uses only the printed figures, so neither unit price is required. Email 1 covers $14 + 11 = 25$ dozen-items for \\$297.30 and Email 2 covers $6 + 23 = 29$ dozen-items for \\$299.30:

$$
\\\\frac{297.30}{25} = 11.892, \\\\qquad \\\\frac{299.30}{29} \\\\approx 10.3207
$$

The gap between the two averages is

$$
11.892 - 10.3207 \\\\approx 1.5713
$$

Email 1 is indeed the pricier of the two per dozen-item, but the gap is only about \\$1.57. That second half of the claim fails, so the statement is false.`,
      `**E) Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.**  (true)

Repricing Email 2 needs both original prices, since the croissant line stays exactly as it was. From the two confirmations, with $x$ per dozen croissants and $y$ per dozen baguettes:

$$
14x + 11y = 297.30, \\\\qquad 6x + 23y = 299.30
$$

Scaling by 23 and 11 and subtracting gives

$$
256x = 3545.60, \\\\qquad x = 13.85
$$

$$
14(13.85) + 11y = 297.30, \\\\qquad 11y = 103.40, \\\\qquad y = 9.40
$$

Raising only the baguette price by three dollars makes it $9.40 + 3 = 12.40$ per dozen, so Email 2's 6 dozen croissants and 23 dozen baguettes now cost

$$
6(13.85) + 23(12.40) = 83.10 + 285.20 = 368.30
$$

The new total is \\$368.30, whose cents are exactly 30, so the statement is true.`,
    ],
    difficulty_level: "3/5",
    sort_order: 34,
    solution_overview: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes.

**Part 1: Building the system.**

Let $x$ = wholesale price per dozen croissants, $y$ = wholesale price per dozen baguettes.

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

**Answer.** Croissants cost \\$13.85 per dozen and baguettes cost \\$9.40 per dozen.`,
  },
  {
    id: "math-5-35",
    case_id: "MATH 5.35",
    title: `Meridian Textiles  -  Quarterly Margin Verification`,
    context: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.`,
    tables_markdown: `| Quarter | Fabric Rolls | Yarn Spools | Total Profit |
| --- | --- | --- | --- |
| Q1 | 240 | 175 | \\$10,029.00 |
| Q2 | 310 | 90 | \\$10,260.50 |`,
    statements: [
      `Fabric Roll margins clear the \\$27 line, though not by enough to also clear \\$27.50.`,
      `Yarn Spool's per-unit margin, doubled, would just clear forty dollars.`,
      `Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears \\$8,400  -  but only by a slender margin.`,
      `The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.`,
      `Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round \\$13,675  -  no cents required.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Fabric Roll margins clear the \\$27 line, though not by enough to also clear \\$27.50.**  (true)

Meridian's margin per unit is fixed, so the two quarters pin it down. Let $x$ be the profit per Fabric Roll and $y$ the profit per Yarn Spool. Q1 shipped 240 rolls and 175 spools for \\$10,029.00 of profit, and Q2 shipped 310 rolls and 90 spools for \\$10,260.50:

$$
240x + 175y = 10029.00, \\\\qquad 310x + 90y = 10260.50
$$

Only the roll margin is needed, so eliminate $y$. The least common multiple of 175 and 90 is 3,150, so multiply Q1 by 18 and Q2 by 35:

$$
4320x + 3150y = 180522.00
$$

$$
10850x + 3150y = 359117.50
$$

Subtracting the first from the second:

$$
6530x = 178595.50, \\\\qquad x = \\\\frac{178595.50}{6530} = 27.35
$$

The Fabric Roll margin is \\$27.35, which sits 35 cents above \\$27.00 and 15 cents below \\$27.50. It clears the first line and not the second, exactly as claimed.`,
      `**B) Yarn Spool's per-unit margin, doubled, would just clear forty dollars.**  (false)

Only the spool margin is at stake, so it can be isolated directly. With $x$ the profit per Fabric Roll and $y$ the profit per Yarn Spool, the two quarters give

$$
240x + 175y = 10029.00, \\\\qquad 310x + 90y = 10260.50
$$

The least common multiple of 240 and 310 is 7,440, so multiply Q1 by 31 and Q2 by 24 to match the roll terms, then subtract:

$$
7440x + 5425y = 310899.00
$$

$$
7440x + 2160y = 246252.00
$$

$$
3265y = 64647.00, \\\\qquad y = \\\\frac{64647.00}{3265} = 19.80
$$

Doubling the spool margin gives

$$
2(19.80) = 39.60
$$

At \\$39.60 the doubled margin falls 40 cents short of forty dollars instead of just clearing it, so the statement is false.`,
      `**C) Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears \\$8,400  -  but only by a slender margin.**  (true)

A new mix has to be priced with both per-unit margins, so recover them from the two quarters. With $x$ per Fabric Roll and $y$ per Yarn Spool:

$$
240x + 175y = 10029.00, \\\\qquad 310x + 90y = 10260.50
$$

Multiplying Q1 by 18 and Q2 by 35 gives a shared $3150y$, and subtracting leaves

$$
6530x = 359117.50 - 180522.00 = 178595.50, \\\\qquad x = 27.35
$$

Substituting that margin into Q1:

$$
240(27.35) + 175y = 10029.00, \\\\qquad 6564.00 + 175y = 10029.00, \\\\qquad 175y = 3465.00, \\\\qquad y = 19.80
$$

The proposed mix then earns

$$
200(27.35) + 150(19.80) = 5470.00 + 2970.00 = 8440.00
$$

$$
8440.00 - 8400.00 = 40.00
$$

Profit of \\$8,440 clears \\$8,400 by just \\$40, under half a percent above the line, so both the threshold and the slender margin hold.`,
      `**D) The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.**  (true)

Both quarterly totals are reported outright, so no per-unit margins are needed. The gap between them is

$$
10260.50 - 10029.00 = 231.50
$$

Dropping the smallest hundred means subtracting \\$100:

$$
231.50 - 100 = 131.50
$$

\\$131.50 still carries three digits ahead of the decimal point, so the statement is true.`,
      `**E) Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round \\$13,675  -  no cents required.**  (true)

With no Yarn Spools in the mix, only the Fabric Roll margin matters. Writing $x$ for the roll margin and $y$ for the spool margin, the two quarters read

$$
240x + 175y = 10029.00, \\\\qquad 310x + 90y = 10260.50
$$

Multiplying Q1 by 18 and Q2 by 35 lines the spool terms up at $3150y$, and subtracting removes them:

$$
6530x = 178595.50, \\\\qquad x = 27.35
$$

Five hundred rolls at that margin, with the absent spools contributing nothing, give

$$
500(27.35) = 13675.00
$$

Because \\$27.35 times 500 works out to a whole number of dollars, the profit is exactly \\$13,675.00 with no cents left over, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 35,
    solution_overview: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.

**Part 1: Building the system.**

Let $x$ = profit per Fabric Roll, $y$ = profit per Yarn Spool.

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

**Answer.** Fabric Roll margin = \\$27.35 per unit; Yarn Spool margin = \\$19.80 per unit.`,
  },
  {
    id: "math-5-36",
    case_id: "MATH 5.36",
    title: `Continental Gas Supply  -  Reconstructing Cylinder Prices`,
    context: `A consultant reviewing Continental Gas Supply's cylinder pricing agreement was given three monthly supplier invoices for Nitrogen-type and Oxygen-type cylinders.`,
    tables_markdown: `| Invoice | Nitrogen Units | Oxygen Units | Total |
| --- | --- | --- | --- |
| Invoice 1 | 15 | 20 | \\$699.00 |
| Invoice 2 | 9 | 12 | \\$419.40 |
| Invoice 3 | 13 | 5 | \\$326.45 |`,
    statements: [
      `Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.`,
      `Nitrogen-type cylinders are priced closer to \\$17.00 than to \\$16.00.`,
      `Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.`,
      `Double Invoice 3's order exactly, and the resulting bill would land above \\$655.`,
      `Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the \\$20 mark.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.**  (true)

Whether an invoice adds new information is settled by comparing it entry by entry against another, with no prices required. Invoice 1 lists 15 Nitrogen units and 20 Oxygen units for \\$699.00; Invoice 2 lists 9 and 12 for \\$419.40. Taking each ratio in turn:

$$
\\\\frac{9}{15} = 0.60, \\\\qquad \\\\frac{12}{20} = 0.60, \\\\qquad \\\\frac{419.40}{699.00} = 0.60
$$

Every entry of Invoice 2 is exactly 0.6 times the matching entry of Invoice 1, which means Invoice 2's equation is simply Invoice 1's equation multiplied through by 0.6. Rescaling an equation cannot narrow down its solutions, so Invoice 2 restates rather than corroborates and the statement is true.`,
      `**B) Nitrogen-type cylinders are priced closer to \\$17.00 than to \\$16.00.**  (false)

The Nitrogen price must come from two genuinely independent invoices. Invoice 2 is 0.6 times Invoice 1 in every entry, since $9/15 = 12/20 = 419.40/699.00 = 0.60$, so it has to be set aside; Invoice 1 and Invoice 3 are the usable pair. With $x$ the price per Nitrogen cylinder and $y$ the price per Oxygen cylinder:

$$
15x + 20y = 699.00, \\\\qquad 13x + 5y = 326.45
$$

Multiplying Invoice 3 by 4 matches the Oxygen terms:

$$
52x + 20y = 1305.80
$$

Subtracting Invoice 1 clears $y$:

$$
37x = 1305.80 - 699.00 = 606.80, \\\\qquad x = \\\\frac{606.80}{37} = 16.40
$$

The distances from \\$16.40 to the two reference prices are

$$
|16.40 - 16.00| = 0.40, \\\\qquad |16.40 - 17.00| = 0.60
$$

A 40-cent gap to \\$16.00 beats a 60-cent gap to \\$17.00, so the price is closer to \\$16.00 and the statement is false.`,
      `**C) Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.**  (true)

Both cylinder prices are needed. Invoice 2 is only Invoice 1 rescaled, since $9/15 = 12/20 = 419.40/699.00 = 0.60$, so the independent pair is Invoice 1 and Invoice 3. With $x$ per Nitrogen cylinder and $y$ per Oxygen cylinder:

$$
15x + 20y = 699.00, \\\\qquad 13x + 5y = 326.45
$$

Multiplying Invoice 3 by 4 and subtracting Invoice 1:

$$
52x + 20y = 1305.80, \\\\qquad 37x = 606.80, \\\\qquad x = 16.40
$$

Substituting back into Invoice 1:

$$
15(16.40) + 20y = 699.00, \\\\qquad 246.00 + 20y = 699.00, \\\\qquad 20y = 453.00, \\\\qquad y = 22.65
$$

Comparing the two purchases:

$$
4(22.65) = 90.60, \\\\qquad 6(16.40) = 98.40
$$

At \\$90.60 against \\$98.40, four Oxygen cylinders do cost less than six Nitrogen ones, so the statement is true.`,
      `**D) Double Invoice 3's order exactly, and the resulting bill would land above \\$655.**  (false)

Cylinder prices are fixed per unit, so a bill is a linear function of the quantities ordered. Doubling every quantity on Invoice 3 therefore doubles its total exactly, and the individual prices never need unpicking:

$$
2(326.45) = 652.90
$$

The doubled order, 26 Nitrogen and 10 Oxygen cylinders, would come to \\$652.90, which falls \\$2.10 short of \\$655 instead of landing above it, so the statement is false.`,
      `**E) Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the \\$20 mark.**  (true)

Pooling two invoices and dividing uses only their printed figures. Invoice 1 covers $15 + 20 = 35$ cylinders for \\$699.00 and Invoice 3 covers $13 + 5 = 18$ cylinders for \\$326.45, so the blend is

$$
699.00 + 326.45 = 1025.45, \\\\qquad 35 + 18 = 53
$$

$$
\\\\frac{1025.45}{53} \\\\approx 19.35
$$

At roughly \\$19.35 per cylinder the blended figure stays below \\$20, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 36,
    solution_overview: `A consultant reviewing Continental Gas Supply's cylinder pricing agreement was given three monthly supplier invoices for Nitrogen-type and Oxygen-type cylinders.

**Part 1: Building the system.**

Let $x$ = price per Nitrogen-type cylinder, $y$ = price per Oxygen-type cylinder.

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

**Answer.** Nitrogen-type cylinders cost \\$16.40 each and Oxygen-type cylinders cost \\$22.65 each.`,
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

Solo time is one whole job divided by Alvarez's hourly rate, so that rate is what must be found. Let $x$ be the fraction of a job Alvarez finishes per hour and $y$ the fraction Bianchi finishes per hour. Monday's 4 and 7 hours left the overhaul 65.5% done, and Tuesday's 9 and 3 hours left an identical job 90.0% done:

$$
4x + 7y = 0.655, \\\\qquad 9x + 3y = 0.900
$$

Only Alvarez's rate is needed, so eliminate $y$ using the least common multiple of 7 and 3, which is 21. Multiply Monday by 3 and Tuesday by 7:

$$
12x + 21y = 1.965
$$

$$
63x + 21y = 6.300
$$

Subtracting the first from the second:

$$
51x = 4.335, \\\\qquad x = \\\\frac{4.335}{51} = 0.085
$$

Alvarez finishes 8.5% of a job per hour, so one whole job takes

$$
\\\\frac{1}{0.085} \\\\approx 11.76 \\\\text{ hours}
$$

Because 11.76 lies past the 11.5 midpoint, it rounds up to 12 hours rather than down to 11, so the statement is false.`,
      `**B) Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.**  (false)

Both hourly rates are needed to compare the two durations. With $x$ as the fraction of a job Alvarez finishes per hour and $y$ as Bianchi's fraction, the two days give

$$
4x + 7y = 0.655, \\\\qquad 9x + 3y = 0.900
$$

To isolate Bianchi's rate, match the Alvarez terms at $36x$ by multiplying Monday by 9 and Tuesday by 4, then subtract:

$$
36x + 63y = 5.895, \\\\qquad 36x + 12y = 3.600
$$

$$
51y = 2.295, \\\\qquad y = \\\\frac{2.295}{51} = 0.045
$$

Substituting back into Monday recovers Alvarez's rate:

$$
4x + 7(0.045) = 0.655, \\\\qquad 4x + 0.315 = 0.655, \\\\qquad 4x = 0.340, \\\\qquad x = 0.085
$$

The two durations in question are

$$
\\\\frac{1}{0.045} \\\\approx 22.22 \\\\text{ hours}, \\\\qquad \\\\frac{2}{0.085} \\\\approx 23.53 \\\\text{ hours}
$$

Bianchi's single job takes about 22.22 hours, shorter than the roughly 23.53 hours Alvarez needs for two, so the comparison runs the other way and the statement is false.`,
      `**C) Their combined hourly output, expressed as a fraction, reduces to exactly 13/100  -  no more, no less.**  (true)

Combined output is the sum of the two hourly rates, so both are needed. With $x$ for Alvarez and $y$ for Bianchi:

$$
4x + 7y = 0.655, \\\\qquad 9x + 3y = 0.900
$$

Multiplying Monday by 9 and Tuesday by 4 gives matching $36x$ terms, and subtracting leaves

$$
51y = 5.895 - 3.600 = 2.295, \\\\qquad y = 0.045
$$

Monday then gives Alvarez's rate:

$$
4x + 0.315 = 0.655, \\\\qquad 4x = 0.340, \\\\qquad x = 0.085
$$

Their combined hourly output is

$$
x + y = 0.085 + 0.045 = 0.130 = \\\\frac{130}{1000} = \\\\frac{13}{100}
$$

The reduced fraction is exactly $13/100$, so the statement is true.`,
      `**D) Bianchi's slice of Tuesday's finished work, as a fraction, is closer to 1/7 than to 1/8.**  (true)

Bianchi logged 3 hours on Tuesday, so his slice of that day's work is three times his hourly rate and only that rate is needed. With $x$ for Alvarez and $y$ for Bianchi:

$$
4x + 7y = 0.655, \\\\qquad 9x + 3y = 0.900
$$

Multiplying Monday by 9 and Tuesday by 4 so both carry $36x$, then subtracting:

$$
36x + 63y = 5.895, \\\\qquad 36x + 12y = 3.600
$$

$$
51y = 2.295, \\\\qquad y = 0.045
$$

Bianchi's slice of Tuesday's work is therefore

$$
3(0.045) = 0.135
$$

Comparing that with the two candidate fractions:

$$
\\\\left|0.135 - \\\\frac{1}{7}\\\\right| \\\\approx |0.135 - 0.142857| \\\\approx 0.00786
$$

$$
\\\\left|0.135 - \\\\frac{1}{8}\\\\right| = |0.135 - 0.125| = 0.010
$$

The distance to $1/7$ is the smaller of the two, marginally, so the slice is closer to $1/7$ and the statement is true.`,
      `**E) Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.**  (true)

This average uses only the logged hours and the reported completion figures, so the individual rates are not needed. The hours add to $4 + 7 + 9 + 3 = 23$, matching the figure in the claim, and the work finished is $0.655 + 0.900 = 1.555$ jobs. Dividing:

$$
\\\\frac{1.555}{23} \\\\approx 0.06761
$$

An average of about 6.76% of a job per logged hour stays just under 7%, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 37,
    solution_overview: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.

**Part 1: Building the system.**

Let $x$ = fraction of a job Alvarez completes per hour, $y$ = fraction of a job Bianchi completes per hour.

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
    context: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting \\$9,793.50. Season 2: 275 T-Shirts and 410 Hoodies, netting \\$10,747.75. Season 3's paperwork survived only in part: 310 Hoodies and an overall profit of \\$8,558.25 are legible, but water damage erased the T-Shirt count entirely.`,
    statements: [
      `T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.`,
      `Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.`,
      `Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.`,
      `Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.`,
      `Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses \\$8,700  -  clearing it by less than \\$40.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.**  (false)

Vantage earns a fixed profit per unit, so the two intact seasons pin the margins down. Let $x$ be the profit per T-Shirt and $y$ the profit per Hoodie. Season 1 sold 430 T-Shirts and 260 Hoodies for \\$9,793.50, and Season 2 sold 275 and 410 for \\$10,747.75:

$$
430x + 260y = 9793.50, \\\\qquad 275x + 410y = 10747.75
$$

Only the T-Shirt margin is needed. Dividing Season 1 by 10 and Season 2 by 5 keeps the arithmetic manageable:

$$
43x + 26y = 979.35, \\\\qquad 55x + 82y = 2149.55
$$

Multiplying the first by 41 and the second by 13 makes both Hoodie terms $1066y$:

$$
1763x + 1066y = 40153.35
$$

$$
715x + 1066y = 27944.15
$$

Subtracting the second from the first:

$$
1048x = 12209.20, \\\\qquad x = \\\\frac{12209.20}{1048} = 11.65
$$

The distances from \\$11.65 to the two round figures are $|11.65 - 11| = 0.65$ and $|11.65 - 12| = 0.35$, so the margin sits closer to twelve dollars, not eleven, and the statement is false.`,
      `**B) Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.**  (true)

Only the Hoodie margin is at stake, so it can be isolated directly. With $x$ the profit per T-Shirt and $y$ the profit per Hoodie, the two intact seasons give

$$
430x + 260y = 9793.50, \\\\qquad 275x + 410y = 10747.75
$$

Dividing both by 5 first:

$$
86x + 52y = 1958.70, \\\\qquad 55x + 82y = 2149.55
$$

To clear $x$, multiply the first by 55 and the second by 86:

$$
4730x + 2860y = 107728.50
$$

$$
4730x + 7052y = 184861.30
$$

Subtracting the first from the second:

$$
4192y = 77132.80, \\\\qquad y = \\\\frac{77132.80}{4192} = 18.40
$$

The Hoodie margin is \\$18.40, which is 40 cents from eighteen dollars and 60 cents from nineteen. It is the closer of the two to eighteen, so the statement is true.`,
      `**C) Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.**  (false)

Reconstructing the lost count needs both per-unit margins first. With $x$ the profit per T-Shirt and $y$ the profit per Hoodie, Seasons 1 and 2 give

$$
430x + 260y = 9793.50, \\\\qquad 275x + 410y = 10747.75
$$

Dividing by 10 and 5 respectively gives $43x + 26y = 979.35$ and $55x + 82y = 2149.55$; scaling those by 41 and 13 makes both Hoodie terms $1066y$, and subtracting leaves

$$
1048x = 40153.35 - 27944.15 = 12209.20, \\\\qquad x = 11.65
$$

Substituting back into Season 1:

$$
430(11.65) + 260y = 9793.50, \\\\qquad 5009.50 + 260y = 9793.50, \\\\qquad 260y = 4784.00, \\\\qquad y = 18.40
$$

Season 3's legible figures are 310 Hoodies and \\$8,558.25 of profit, so its T-Shirt count $T$ satisfies

$$
11.65T + 18.40(310) = 8558.25
$$

$$
11.65T + 5704.00 = 8558.25, \\\\qquad 11.65T = 2854.25, \\\\qquad T = \\\\frac{2854.25}{11.65} = 245
$$

Season 3 made 245 T-Shirts. That number ends in 5, so it is a multiple of five but not of ten, and the statement is false.`,
      `**D) Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.**  (true)

The season gap comes straight from the reported profits, but comparing it against 52 Hoodies requires the Hoodie margin. With $x$ the profit per T-Shirt and $y$ the profit per Hoodie:

$$
430x + 260y = 9793.50, \\\\qquad 275x + 410y = 10747.75
$$

Dividing both by 5 gives $86x + 52y = 1958.70$ and $55x + 82y = 2149.55$; scaling those by 55 and 86 matches the T-Shirt terms at $4730x$, and subtracting leaves

$$
4192y = 184861.30 - 107728.50 = 77132.80, \\\\qquad y = 18.40
$$

The gap between the two seasons is

$$
10747.75 - 9793.50 = 954.25
$$

while 52 Hoodies are worth

$$
52(18.40) = 956.80
$$

$$
956.80 - 954.25 = 2.55
$$

The gap falls \\$2.55 short of covering 52 Hoodies, a shortfall of about a quarter of one percent, so it does just barely fail and the statement is true.`,
      `**E) Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses \\$8,700  -  clearing it by less than \\$40.**  (true)

Pricing that rewritten season needs both margins. From Seasons 1 and 2, with $x$ the profit per T-Shirt and $y$ the profit per Hoodie:

$$
430x + 260y = 9793.50, \\\\qquad 275x + 410y = 10747.75
$$

Dividing by 10 and 5 gives $43x + 26y = 979.35$ and $55x + 82y = 2149.55$; scaling those by 41 and 13 matches the Hoodie terms, and subtracting leaves

$$
1048x = 12209.20, \\\\qquad x = 11.65
$$

$$
430(11.65) + 260y = 9793.50, \\\\qquad 260y = 4784.00, \\\\qquad y = 18.40
$$

With 260 T-Shirts and 310 Hoodies the season's profit would be

$$
260(11.65) + 310(18.40) = 3029.00 + 5704.00 = 8733.00
$$

$$
8733.00 - 8700.00 = 33.00
$$

The rewritten season crosses \\$8,700 and clears it by \\$33, which is under \\$40, so both halves of the statement hold.`,
    ],
    difficulty_level: "4/5",
    sort_order: 38,
    solution_overview: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting \\$9,793.50.

**Part 1: Building the system.**

Let $x$ = profit per T-Shirt, $y$ = profit per Hoodie.

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

**Answer.** T-Shirts earn \\$11.65 each, Hoodies earn \\$18.40 each, and Season 3 made 245 T-Shirts.`,
  },
  {
    id: "math-5-39",
    case_id: "MATH 5.39",
    title: `Continental Freight Co.  -  Cross-Unit Billing Audit`,
    context: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped. One branch records weights in pounds (1 kg ≈ 2.2 lb). A third shipment is under audit.`,
    tables_markdown: `| Shipment | Weight | Total Charged |
| --- | --- | --- |
| Shipment 1 (Metric) | 185 kg | \\$677.35 |
| Shipment 2 (Imperial) | 572 lb | \\$913.60 |
| Shipment 3 (Imperial, audit) | 99 lb | \\$239.80 |`,
    statements: [
      `Knock five dollars and forty cents off the flat handling fee and you'd land on an even \\$89.20  -  implying the real fee currently overshoots \\$89 by roughly six percent.`,
      `The per-kilogram rate, tripled, would land just shy of \\$9.50.`,
      `Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.`,
      `Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.`,
      `Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Knock five dollars and forty cents off the flat handling fee and you'd land on an even \\$89.20  -  implying the real fee currently overshoots \\$89 by roughly six percent.**  (true)

The handling fee has to be recovered from two bills expressed in the same unit, so Shipment 2's weight is converted first:

$$
\\\\frac{572}{2.2} = 260 \\\\text{ kg}
$$

Let $x$ be the flat handling fee and $y$ the rate per kilogram. The two shipments then read

$$
x + 185y = 677.35, \\\\qquad x + 260y = 913.60
$$

Both carry the same fee, so subtracting the first from the second cancels it:

$$
75y = 236.25, \\\\qquad y = \\\\frac{236.25}{75} = 3.15
$$

Shipment 1 then gives the fee:

$$
x + 185(3.15) = 677.35, \\\\qquad x + 582.75 = 677.35, \\\\qquad x = 94.60
$$

Removing \\$5.40 from that fee gives

$$
94.60 - 5.40 = 89.20
$$

and measured against \\$89 the real fee runs

$$
\\\\frac{94.60 - 89}{89} = \\\\frac{5.60}{89} \\\\approx 0.0629
$$

An overshoot of about 6.3% is indeed roughly six percent, so both halves of the statement hold.`,
      `**B) The per-kilogram rate, tripled, would land just shy of \\$9.50.**  (true)

Only the per-kilogram rate is needed, and it can be isolated without ever finding the handling fee. The two usable bills must first share one unit, so convert Shipment 2's weight:

$$
\\\\frac{572}{2.2} = 260 \\\\text{ kg}
$$

With $x$ the flat handling fee and $y$ the rate per kilogram:

$$
x + 185y = 677.35, \\\\qquad x + 260y = 913.60
$$

The identical fee in both bills disappears on subtraction:

$$
(260 - 185)y = 913.60 - 677.35, \\\\qquad 75y = 236.25, \\\\qquad y = \\\\frac{236.25}{75} = 3.15
$$

Tripling the rate gives

$$
3(3.15) = 9.45
$$

\\$9.45 sits five cents below \\$9.50, so the tripled rate does land just shy of it and the statement is true.`,
      `**C) Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.**  (true)

Auditing Shipment 3 requires the whole model, fee and rate alike. Converting Shipment 2 to kilograms first:

$$
\\\\frac{572}{2.2} = 260 \\\\text{ kg}
$$

With $x$ the flat handling fee and $y$ the rate per kilogram, the two reference bills are

$$
x + 185y = 677.35, \\\\qquad x + 260y = 913.60
$$

Subtracting removes the shared fee, and Shipment 1 then gives the fee itself:

$$
75y = 236.25, \\\\qquad y = 3.15
$$

$$
x + 185(3.15) = 677.35, \\\\qquad x = 94.60
$$

Shipment 3's 99 pounds convert to

$$
\\\\frac{99}{2.2} = 45 \\\\text{ kg}
$$

so the model predicts

$$
94.60 + 45(3.15) = 94.60 + 141.75 = 236.35
$$

Against the \\$239.80 actually billed:

$$
239.80 - 236.35 = 3.45
$$

The prediction sits \\$3.45 away, inside four dollars but not an exact match, so the statement is true.`,
      `**D) Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.**  (false)

This is a claim about the converted weight alone, so neither the handling fee nor the per-kilogram rate enters into it:

$$
\\\\frac{99}{2.2} = 45 \\\\text{ kg}
$$

Dividing 45 by 7 leaves a remainder:

$$
45 = 7(6) + 3
$$

Since 45 is not a multiple of seven, the statement is false.`,
      `**E) Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.**  (true)

Charging a 400 kg shipment needs both parts of the billing formula. Shipment 2's weight converts to

$$
\\\\frac{572}{2.2} = 260 \\\\text{ kg}
$$

so with $x$ the flat handling fee and $y$ the rate per kilogram the two reference bills are

$$
x + 185y = 677.35, \\\\qquad x + 260y = 913.60
$$

Subtracting cancels the fee and gives the rate, and Shipment 1 then gives the fee:

$$
75y = 236.25, \\\\qquad y = 3.15
$$

$$
x + 582.75 = 677.35, \\\\qquad x = 94.60
$$

At 400 kilograms the charge is

$$
94.60 + 400(3.15) = 94.60 + 1260.00 = 1354.60
$$

$$
1354.60 - 1350.00 = 4.60
$$

The charge passes \\$1,350 by only \\$4.60, so it does just barely creep past and the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 39,
    solution_overview: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped.

**Part 1: Building the system.**

Let $x$ = flat handling fee, $y$ = rate per kilogram. Weights must be converted to kilograms before the model is built.

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

but Shipment 3 was charged \\$239.80, a \\$3.45 discrepancy.

**Answer.** The handling fee is \\$94.60 and the rate is \\$3.15/kg; Shipment 3 should cost \\$236.35 rather than \\$239.80.`,
  },
  {
    id: "math-5-40",
    case_id: "MATH 5.40",
    title: `Vantage Cloud Services  -  A Doubled Invoice That Doesn't Double`,
    context: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.`,
    tables_markdown: `| Client | Compute Units | Storage Units | Reported Total |
| --- | --- | --- | --- |
| Client A | 11 | 7 | \\$483.70 |
| Client B | 22 | 14 | \\$952.10 |`,
    statements: [
      `Doubling every line of Client A's invoice implies Client B should owe \\$967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.`,
      `For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's \\$952.10 billed amount.`,
      `The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.`,
      `Plugging in a purely hypothetical \\$14.20 per compute-unit and \\$31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of \\$375.`,
      `Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A (\\$967.40), the other assuming a 50%-heavier surcharge instead of a full double (\\$725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Doubling every line of Client A's invoice implies Client B should owe \\$967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.**  (true)

Client B's usage, 22 compute units and 14 storage units, is exactly twice Client A's 11 and 7. Under one fixed-rate structure with $x$ per compute unit and $y$ per storage unit, that forces

$$
22x + 14y = 2(11x + 7y)
$$

so doubling Client A's \\$483.70 total gives what Client B ought to owe:

$$
2(483.70) = 967.40
$$

Client B was actually billed \\$952.10, so the overshoot and its size relative to the real total are

$$
967.40 - 952.10 = 15.30, \\\\qquad \\\\frac{15.30}{952.10} \\\\approx 0.01607
$$

At about 1.607% the overshoot is a hair over 1.6% of the billed amount, so the statement is true.`,
      `**B) For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's \\$952.10 billed amount.**  (true)

Client B's usage doubles Client A's in both categories, 22 against 11 compute units and 14 against 7 storage units. With one fixed price $x$ per compute unit and $y$ per storage unit, Client B's charge is therefore forced to be twice Client A's:

$$
22x + 14y = 2(11x + 7y)
$$

If both invoices described that one scheme, Client B's \\$952.10 would have to be twice Client A's total, so Client A's total would have to be

$$
\\\\frac{952.10}{2} = 476.05
$$

precisely half of Client B's figure, which is what the statement asserts. Client A actually reported \\$483.70, so the requirement is not met in practice, but the halving condition itself is exactly right and the statement is true.`,
      `**C) The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.**  (true)

The discrepancy has to be measured before it can be classified. Client B's 22 compute units and 14 storage units are exactly double Client A's 11 and 7, so under one fixed-rate structure Client B's bill is forced to be twice Client A's \\$483.70:

$$
2(483.70) = 967.40
$$

Client B was billed \\$952.10 instead, so the error and its relative size are

$$
967.40 - 952.10 = 15.30, \\\\qquad \\\\frac{15.30}{952.10} \\\\approx 0.01607
$$

Comparing that rate with the two candidate benchmarks:

$$
\\\\frac{1}{60} \\\\approx 0.01667, \\\\qquad \\\\frac{1}{50} = 0.02000
$$

$$
|0.01607 - 0.01667| \\\\approx 0.00060, \\\\qquad |0.01607 - 0.02000| \\\\approx 0.00393
$$

The 1-in-60 benchmark is several times nearer, so the statement is true.`,
      `**D) Plugging in a purely hypothetical \\$14.20 per compute-unit and \\$31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of \\$375.**  (false)

Both prices are handed to us, so this is a single evaluation of Client A's 11 compute units and 7 storage units:

$$
11(14.20) + 7(31.75) = 156.20 + 222.25 = 378.45
$$

At \\$378.45 the hypothetical total sits \\$3.45 above \\$375 rather than just below it, so the statement is false.`,
      `**E) Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A (\\$967.40), the other assuming a 50%-heavier surcharge instead of a full double (\\$725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.**  (true)

Both rival figures are supplied and both scale Client A's \\$483.70 total, since $2(483.70) = 967.40$ and $1.5(483.70) = 725.55$. Client B's actual bill is \\$952.10, so the two errors are

$$
|967.40 - 952.10| = 15.30, \\\\qquad |725.55 - 952.10| = 226.55
$$

The doubling hypothesis misses by \\$15.30 against \\$226.55 for the other, roughly fifteen times closer, so despite being wrong it is much the better guess and the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 40,
    solution_overview: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.

**Part 1: Building the system.**

Let $x$ = price per compute-unit, $y$ = price per storage-unit.

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

**Answer.** No consistent compute and storage prices exist for both invoices; they disagree by \\$15.30.`,
  },
  {
    id: "math-5-41",
    case_id: "MATH 5.41",
    title: `Sterling Family Trust  -  Two-Fund Return Reconstruction`,
    context: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%. The officer's notes state Fund B's balance is \\$4,000 more than twice Fund A's balance, and the combined annual return from both funds is \\$762.00.`,
    statements: [
      `The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.`,
      `If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above \\$800.00.`,
      `The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).`,
      `Had the trust instead been split evenly (\\$9,200.00 in each fund) at the original rates, the total return would have come within \\$5.00 of the actual \\$762.00.`,
      `The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.**  (false)

Comparing the two interest amounts needs both balances. Let $x$ be Fund A's balance and $y$ Fund B's. The officer's notes say Fund B holds \\$4,000 more than twice Fund A, and the rates of 5.25% and 3.75% together yield \\$762.00:

$$
y = 2x + 4000, \\\\qquad 0.0525x + 0.0375y = 762
$$

Substituting the first equation into the second:

$$
0.0525x + 0.0375(2x + 4000) = 762
$$

$$
0.0525x + 0.075x + 150 = 762, \\\\qquad 0.1275x = 612, \\\\qquad x = \\\\frac{612}{0.1275} = 4800
$$

$$
y = 2(4800) + 4000 = 13600
$$

The interest each fund earns is

$$
0.0525(4800) = 252, \\\\qquad 0.0375(13600) = 510
$$

Triple Fund A's interest would be $3(252) = 756$, and Fund B's \\$510 falls well short of that. Fund B earns a little over double, not more than triple, so the statement is false.`,
      `**B) If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above \\$800.00.**  (true)

Repricing one fund's rate requires both balances. With $x$ for Fund A and $y$ for Fund B, the notes give

$$
y = 2x + 4000, \\\\qquad 0.0525x + 0.0375y = 762
$$

Substituting:

$$
0.0525x + 0.075x + 150 = 762, \\\\qquad 0.1275x = 612, \\\\qquad x = 4800
$$

$$
y = 2(4800) + 4000 = 13600
$$

Holding the balances fixed and applying 6.75% to Fund A while Fund B stays at 3.75%:

$$
0.0675(4800) + 0.0375(13600) = 324 + 510 = 834
$$

The combined return rises to \\$834.00, comfortably above \\$800.00, so the statement is true.`,
      `**C) The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).**  (true)

The \\$762.00 return is given, but the trust's total value has to be reconstructed. With $x$ for Fund A's balance and $y$ for Fund B's:

$$
y = 2x + 4000, \\\\qquad 0.0525x + 0.0375y = 762
$$

Substituting the first into the second:

$$
0.1275x + 150 = 762, \\\\qquad 0.1275x = 612, \\\\qquad x = 4800
$$

$$
y = 2(4800) + 4000 = 13600
$$

The trust therefore holds

$$
4800 + 13600 = 18400
$$

and the return as a share of the whole is

$$
\\\\frac{762}{18400} \\\\approx 0.04141
$$

About 4.14% is more than 4%, which fits a blend of a 5.25% fund and a 3.75% fund weighted toward the lower rate, so the statement is true.`,
      `**D) Had the trust instead been split evenly (\\$9,200.00 in each fund) at the original rates, the total return would have come within \\$5.00 of the actual \\$762.00.**  (false)

Both hypothetical balances are supplied, so this is a direct evaluation at the stated rates of 5.25% and 3.75%:

$$
9200(0.0525) + 9200(0.0375) = 483 + 345 = 828
$$

Comparing with the actual \\$762.00 return:

$$
828 - 762 = 66
$$

An even split would earn \\$828.00, \\$66.00 away from the real figure rather than within \\$5.00, so the statement is false.`,
      `**E) The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.**  (true)

Both balances are needed. With $x$ for Fund A and $y$ for Fund B, the notes give

$$
y = 2x + 4000, \\\\qquad 0.0525x + 0.0375y = 762
$$

Substituting:

$$
0.1275x + 150 = 762, \\\\qquad 0.1275x = 612, \\\\qquad x = 4800
$$

$$
y = 2(4800) + 4000 = 13600
$$

Fund A's \\$4,800 is the smaller balance, so the difference measured against it is

$$
\\\\frac{13600 - 4800}{4800} = \\\\frac{8800}{4800} = \\\\frac{11}{6} \\\\approx 1.8333
$$

That is about 183.3%, which exceeds 180%, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 41,
    solution_overview: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%.

**Part 1: Building the system.**

Let $x$ = balance in Fund A, $y$ = balance in Fund B.

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

**Answer.** Fund A holds \\$4,800 and Fund B holds \\$13,600.`,
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

Salt is conserved when two batches are poured together, so their recorded totals simply add and neither concentration is needed. The log gives 144 g for Batch 1 and 184 g for Batch 2:

$$
144 + 184 = 328
$$

At 328 g the combined container holds 28 g more than 300 g, so the statement is true.`,
      `**B) Solution B's concentration is more than 70% of Solution A's concentration.**  (true)

Both concentrations are needed, and the log's ratios must be turned into litres first. Batch 1's 10 L at 3:2 is $\\\\frac{3}{5}(10) = 6$ L of A and $\\\\frac{2}{5}(10) = 4$ L of B; Batch 2's 12 L at 5:1 is $\\\\frac{5}{6}(12) = 10$ L of A and $\\\\frac{1}{6}(12) = 2$ L of B. Writing $x$ for grams of salt per litre in Solution A and $y$ for Solution B:

$$
6x + 4y = 144, \\\\qquad 10x + 2y = 184
$$

Halving both equations:

$$
3x + 2y = 72, \\\\qquad 5x + y = 92
$$

The second gives $y = 92 - 5x$, and substituting into the first:

$$
3x + 2(92 - 5x) = 72, \\\\qquad 3x + 184 - 10x = 72, \\\\qquad -7x = -112, \\\\qquad x = 16
$$

$$
y = 92 - 5(16) = 12
$$

Solution A carries 16 g/L and Solution B 12 g/L, so B's concentration relative to A's is

$$
\\\\frac{12}{16} = 0.75
$$

At 75% that is more than 70%, so the statement is true.`,
      `**C) If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.**  (true)

Reworking Batch 3's volume needs both concentrations. Batch 1's 10 L at 3:2 is 6 L of A and 4 L of B, and Batch 2's 12 L at 5:1 is 10 L of A and 2 L of B, so with $x$ grams per litre in Solution A and $y$ in Solution B:

$$
6x + 4y = 144, \\\\qquad 10x + 2y = 184
$$

Halving gives $3x + 2y = 72$ and $5x + y = 92$, so $y = 92 - 5x$ and

$$
3x + 2(92 - 5x) = 72, \\\\qquad -7x = -112, \\\\qquad x = 16, \\\\qquad y = 92 - 80 = 12
$$

Batch 3's log reads 8 L at 1:3, that is 2 L of A and 6 L of B, which would carry $2(16) + 6(12) = 104$ g against the 109 g recorded, the 5 g discrepancy in question. Holding Solution A at 2 L and letting $V$ be the true volume of Solution B:

$$
2(16) + 12V = 109, \\\\qquad 32 + 12V = 109, \\\\qquad 12V = 77, \\\\qquad V = \\\\frac{77}{12} \\\\approx 6.4167
$$

Comparing that with the two candidate volumes:

$$
|6.4167 - 6.4| \\\\approx 0.0167, \\\\qquad |6.4167 - 6.0| \\\\approx 0.4167
$$

The corrected volume is far closer to 6.4 L, so the statement is true.`,
      `**D) Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.**  (false)

Sizing this batch needs both concentrations. Batch 1's 10 L at 3:2 is 6 L of A and 4 L of B, and Batch 2's 12 L at 5:1 is 10 L of A and 2 L of B, so with $x$ grams per litre in Solution A and $y$ in Solution B:

$$
6x + 4y = 144, \\\\qquad 10x + 2y = 184
$$

Halving gives $3x + 2y = 72$ and $5x + y = 92$, hence $y = 92 - 5x$ and

$$
3x + 2(92 - 5x) = 72, \\\\qquad -7x = -112, \\\\qquad x = 16, \\\\qquad y = 12
$$

A 3:1 mix of total volume $V$ is $\\\\frac{3}{4}V$ litres of Solution A and $\\\\frac{1}{4}V$ of Solution B, so its salt content is

$$
16\\\\left(\\\\frac{3}{4}V\\\\right) + 12\\\\left(\\\\frac{1}{4}V\\\\right) = 12V + 3V = 15V
$$

Requiring exactly 130 g:

$$
15V = 130, \\\\qquad V = \\\\frac{130}{15} \\\\approx 8.67
$$

The batch would need about 8.67 L, not 7.5 L, so the statement is false.`,
      `**E) Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.**  (true)

A mixing ratio fixes the proportions on its own, so neither concentrations nor absolute volumes are needed. Batch 2 was mixed 5:1, which makes Solution A

$$
\\\\frac{5}{5 + 1} = \\\\frac{5}{6} \\\\approx 0.833
$$

of the volume, while Batch 1 was mixed 3:2, making Solution A

$$
\\\\frac{3}{3 + 2} = \\\\frac{3}{5} = 0.60
$$

of the volume. About 83.3% against 60% makes Batch 2 the richer in Solution A, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 42,
    solution_overview: `Solventis Labs combines Stock Solution A and Stock Solution B in a stated volume ratio. The log records total volume and mixing ratio (A:B) rather than individual volumes.

**Part 1: Building the system.**

Let $x$ = grams of salt per liter in Solution A, $y$ = grams of salt per liter in Solution B.

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
    context: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, \\$765.00 gross. Employee B: 40 regular + 7 OT hours, \\$882.00 gross.`,
    statements: [
      `If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed \\$6.00.`,
      `Employee B's overtime pay is more than 40% of his total gross pay.`,
      `The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.`,
      `If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.`,
      `The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed \\$6.00.**  (true)

Overtime hours are paid at the base wage plus the premium, so both unknowns are needed. Let $x$ be the base hourly wage and $y$ the overtime premium per overtime hour. Employee A worked 40 regular hours plus 2.5 overtime hours for \\$765.00, so her overtime hours cost $2.5(x + y)$ and her gross pay is

$$
40x + 2.5(x + y) = 42.5x + 2.5y = 765
$$

Employee B's 40 regular plus 7 overtime hours for \\$882.00 give

$$
40x + 7(x + y) = 47x + 7y = 882
$$

Multiplying A's equation by 14 and B's by 5 makes both premium terms $35y$:

$$
595x + 35y = 10710
$$

$$
235x + 35y = 4410
$$

Subtracting:

$$
360x = 6300, \\\\qquad x = \\\\frac{6300}{360} = 17.50
$$

Substituting into A's equation:

$$
42.5(17.50) + 2.5y = 765, \\\\qquad 743.75 + 2.5y = 765, \\\\qquad 2.5y = 21.25, \\\\qquad y = 8.50
$$

Overtime therefore pays $x + y = 26.00$ per hour, so her actual overtime pay and the proposed bonus are

$$
2.5(26.00) = 65.00, \\\\qquad 0.10(65.00) = 6.50
$$

A \\$6.50 bonus exceeds \\$6.00, so the statement is true.`,
      `**B) Employee B's overtime pay is more than 40% of his total gross pay.**  (false)

Employee B's overtime pay is 7 hours at the base wage plus the premium, so both must be recovered. With $x$ the base hourly wage and $y$ the overtime premium per overtime hour, the two pay records are

$$
42.5x + 2.5y = 765, \\\\qquad 47x + 7y = 882
$$

Multiplying the first by 14 and the second by 5 matches the premium terms at $35y$:

$$
595x + 35y = 10710, \\\\qquad 235x + 35y = 4410
$$

$$
360x = 6300, \\\\qquad x = 17.50
$$

$$
42.5(17.50) + 2.5y = 765, \\\\qquad 2.5y = 21.25, \\\\qquad y = 8.50
$$

Overtime pays $17.50 + 8.50 = 26.00$ per hour, so Employee B's overtime pay and its share of his \\$882.00 gross are

$$
7(26.00) = 182.00, \\\\qquad \\\\frac{182.00}{882.00} \\\\approx 0.2063
$$

At about 20.6% the overtime portion is barely half the claimed 40% threshold, so the statement is false.`,
      `**C) The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.**  (true)

The actual combined pay is given outright, \\$765.00 plus \\$882.00, but the hypothetical needs the base wage. With $x$ the base hourly wage and $y$ the overtime premium per overtime hour:

$$
42.5x + 2.5y = 765, \\\\qquad 47x + 7y = 882
$$

Multiplying the first by 14 and the second by 5 gives matching $35y$ terms, and subtracting leaves

$$
360x = 10710 - 4410 = 6300, \\\\qquad x = 17.50
$$

At the base rate alone, 45 hours each would pay

$$
45(17.50) = 787.50, \\\\qquad 2(787.50) = 1575.00
$$

against actual earnings of

$$
765.00 + 882.00 = 1647.00
$$

The real payroll of \\$1,647.00 exceeds \\$1,575.00 by \\$72.00, so the statement is true.`,
      `**D) If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.**  (false)

The hypothetical flat wage is built from the base wage, so that has to be recovered. With $x$ the base hourly wage and $y$ the overtime premium per overtime hour:

$$
42.5x + 2.5y = 765, \\\\qquad 47x + 7y = 882
$$

Scaling the first by 14 and the second by 5 lines the premium terms up at $35y$, and subtracting gives

$$
360x = 6300, \\\\qquad x = 17.50
$$

A 15% rise makes the flat wage

$$
17.50(1.15) = 20.125
$$

and 42.5 hours at that single rate pay

$$
42.5(20.125) = 855.3125
$$

About \\$855.31 is roughly \\$90 above her actual \\$765.00, so her pay would rise rather than decrease and the statement is false.`,
      `**E) The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).**  (true)

Both ratios are built from figures already printed on the pay records, so no wage needs recovering:

$$
\\\\frac{7}{2.5} = 2.8, \\\\qquad \\\\frac{882}{765} = \\\\frac{98}{85} \\\\approx 1.153
$$

The hours ratio of 2.8 is larger than the pay ratio of about 1.153. That fits the pay structure, since the 40 regular hours both employees share dominate their gross pay and dilute the effect of differing overtime, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 43,
    solution_overview: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, \\$765.00 gross.

**Part 1: Building the system.**

Let $x$ = base hourly wage, $y$ = overtime premium per hour (on top of the base wage, per OT hour).

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

**Answer.** The base wage is \\$17.50/hour and the overtime premium is \\$8.50/hour, so overtime pays \\$26.00/hour.`,
  },
  {
    id: "math-5-44",
    case_id: "MATH 5.44",
    title: `Greenfield Landscaping  -  Redundant Project Reconciliation`,
    context: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.`,
    tables_markdown: `| Project | Wood Fencing | Wire Fencing | Total Cost |
| --- | --- | --- | --- |
| Project 1 | 18 m | 24 m | \\$750.00 |
| Project 2 | 27 m | 36 m | \\$1,125.00 |
| Project 3 | 10 m | 40 m | \\$710.00 |`,
    statements: [
      `If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded \\$950.00.`,
      `The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.`,
      `Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs (\\$750.00 + \\$710.00).`,
      `If wire fencing rose by \\$2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.`,
      `Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded \\$950.00.**  (true)

Repricing Project 3 needs both per-meter prices, and only two of the three projects carry independent information. Project 2's 27 m and 36 m are exactly 1.5 times Project 1's 18 m and 24 m, and $1.5(750) = 1125$ matches Project 2's printed total, so Project 2 is a scaled repeat and Projects 1 and 3 are the usable pair. With $x$ the price per meter of cedar wood and $y$ the price per meter of galvanized wire:

$$
18x + 24y = 750, \\\\qquad 10x + 40y = 710
$$

Dividing the first by 6 and the second by 10:

$$
3x + 4y = 125, \\\\qquad x + 4y = 71
$$

Subtracting removes the wire term:

$$
2x = 54, \\\\qquad x = 27
$$

$$
27 + 4y = 71, \\\\qquad 4y = 44, \\\\qquad y = 11
$$

With 20 m of wood and 40 m of wire the project would cost

$$
20(27) + 40(11) = 540 + 440 = 980
$$

\\$980.00 exceeds \\$950.00 by \\$30.00, so the statement is true.`,
      `**B) The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.**  (true)

Both prices are needed, and one project must be discarded first: Project 2's 27 m and 36 m are 1.5 times Project 1's 18 m and 24 m, and $1.5(750) = 1125$ is exactly Project 2's total, so it repeats Project 1 at scale and carries no new information. Using Projects 1 and 3, with $x$ the price per meter of cedar wood and $y$ the price per meter of galvanized wire:

$$
18x + 24y = 750, \\\\qquad 10x + 40y = 710
$$

Dividing by 6 and 10 respectively:

$$
3x + 4y = 125, \\\\qquad x + 4y = 71
$$

$$
2x = 54, \\\\qquad x = 27, \\\\qquad 4y = 71 - 27 = 44, \\\\qquad y = 11
$$

The gap and the threshold it must beat are

$$
x - y = 27 - 11 = 16, \\\\qquad 1.45(11) = 15.95
$$

At \\$16.00 against \\$15.95 the gap clears the threshold by five cents, narrowly but genuinely, so the statement is true.`,
      `**C) Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs (\\$750.00 + \\$710.00).**  (false)

Greenfield charges fixed prices per meter, so cost is a linear function of the meters installed and the model contains no volume discount. The proposed project is exactly the two originals added together, since Project 1's 18 m of wood and 24 m of wire plus Project 3's 10 m and 40 m give $18 + 10 = 28$ m of wood and $24 + 40 = 64$ m of wire. With per-meter prices $x$ and $y$:

$$
28x + 64y = (18x + 24y) + (10x + 40y) = 750 + 710 = 1460
$$

The combined project costs exactly \\$1,460.00, the same as the two projects billed separately rather than less, so the statement is false.`,
      `**D) If wire fencing rose by \\$2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.**  (false)

Only the wire price moves, so the increase is simply the extra \\$2.00 charged on each of Project 1's 24 m of wire, and neither original price is needed:

$$
24(2.00) = 48.00
$$

Measured against Project 1's \\$750.00 total:

$$
\\\\frac{48.00}{750.00} = 0.064
$$

A 6.4% increase, taking the project to \\$798.00, is far below the claimed 15%, so the statement is false.`,
      `**E) Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.**  (false)

Each project's cost per meter comes from its own printed figures. Project 3 installed $10 + 40 = 50$ m for \\$710.00 and Project 1 installed $18 + 24 = 42$ m for \\$750.00:

$$
\\\\frac{710}{50} = 14.20, \\\\qquad \\\\frac{750}{42} \\\\approx 17.86
$$

Project 3 averages \\$14.20 per meter against Project 1's roughly \\$17.86, because Project 3 leans mostly on the cheaper wire while Project 1 uses a much larger share of wood. Project 3's rate is the lower of the two, so the statement is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 44,
    solution_overview: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.

**Part 1: Building the system.**

Let $x$ = price per meter of cedar wood fencing, $y$ = price per meter of galvanized wire fencing.

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

**Answer.** Cedar wood costs \\$27/m and galvanized wire costs \\$11/m.`,
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

Boat A's own speed is what this needs. Let $x$ be Boat A's speed and $y$ Boat B's, both in km/h. Starting from opposite docks on the 250 km stretch, the two boats close the whole gap in 2 hours:

$$
2(x + y) = 250, \\\\qquad x + y = 125
$$

On the 356 km stretch Boat B travels its 3-hour head start plus the hour after Boat A departs, four hours in all, while Boat A travels 1 hour, and between them they cover the full distance:

$$
x + 4y = 356
$$

Subtracting the first equation from the second:

$$
3y = 356 - 125 = 231, \\\\qquad y = 77
$$

$$
x + 77 = 125, \\\\qquad x = 48
$$

At 48 km/h, Boat A alone would need

$$
\\\\frac{356}{48} \\\\approx 7.42 \\\\text{ hours}
$$

That is more than 7 hours, so the statement is true.`,
      `**B) In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.**  (true)

Each boat's distance depends on its own speed, so both speeds are needed. With $x$ as Boat A's speed and $y$ as Boat B's in km/h, the 250 km stretch closed in 2 hours from opposite docks gives

$$
2(x + y) = 250, \\\\qquad x + y = 125
$$

and the 356 km stretch, where Boat B runs its 3-hour head start plus 1 more hour while Boat A runs 1 hour, gives

$$
x + 4y = 356
$$

Subtracting the first from the second:

$$
3y = 231, \\\\qquad y = 77, \\\\qquad x = 125 - 77 = 48
$$

In the 2 hours before they meet:

$$
2(48) = 96 \\\\text{ km}, \\\\qquad 2(77) = 154 \\\\text{ km}, \\\\qquad 154 - 96 = 58 \\\\text{ km}
$$

Half of the 250 km gap is 125 km, and the 58 km difference is comfortably under that, so the statement is true.`,
      `**C) If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.**  (false)

Raising both speeds by the same 20% raises their combined closing speed by 20% as well, so the individual speeds never need separating. The 250 km stretch closed in 2 hours from opposite docks fixes that combined speed:

$$
2(x + y) = 250, \\\\qquad x + y = 125 \\\\text{ km/h}
$$

After the increase:

$$
1.2(125) = 150 \\\\text{ km/h}
$$

so closing 250 km would take

$$
\\\\frac{250}{150} \\\\approx 1.67 \\\\text{ hours}
$$

About 1 hour 40 minutes is still above 1.5 hours, so the statement is false.`,
      `**D) The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.**  (true)

Distance covered by the two boats together depends only on their combined speed, which the first scenario supplies directly: from opposite docks they close a 250 km gap in 2 hours, so

$$
2(x + y) = 250, \\\\qquad x + y = 125 \\\\text{ km/h}
$$

In 3 hours they would together cover

$$
3(125) = 375 \\\\text{ km}
$$

375 km exceeds the 356 km stretch by 19 km, so the statement is true.`,
      `**E) Boat B's speed is more than 60% higher than Boat A's speed.**  (true)

Both speeds are needed for this comparison. With $x$ as Boat A's speed and $y$ as Boat B's in km/h, the 250 km stretch closed in 2 hours from opposite docks gives

$$
2(x + y) = 250, \\\\qquad x + y = 125
$$

and the 356 km stretch, where Boat B travels its 3-hour head start plus 1 more hour while Boat A travels 1 hour, gives

$$
x + 4y = 356
$$

Subtracting the first from the second:

$$
3y = 231, \\\\qquad y = 77, \\\\qquad x = 125 - 77 = 48
$$

Boat B's advantage measured against Boat A's speed is

$$
\\\\frac{77 - 48}{48} = \\\\frac{29}{48} \\\\approx 0.6042
$$

At about 60.4% that is more than 60%, though only just, so the statement is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 45,
    solution_overview: `Two Meridian Rail boats travel at fixed constant speeds. On one 250 km stretch, they start from opposite docks and meet after 2 hours.

**Part 1: Building the system.**

Let $x$ = Boat A's speed (km/h), $y$ = Boat B's speed (km/h).

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
| Season 1 | 240 t | 160 t | \\$42,000 |
| Season 2 | 180 t | 260 t | \\$48,300 |
| Season 3 (illegible) |  | 300 t | \\$53,100 |`,
    statements: [
      `If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded \\$44,000.`,
      `Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.`,
      `Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.`,
      `Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.`,
      `Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded \\$44,000.**  (false)

Let $x$ be Wheat profit per tonne and $y$ Barley profit per tonne. Season 1 and Season 2 give

$$
240x + 160y = 42000, \\qquad 180x + 260y = 48300
$$

Divide the first by $80$ and the second by $20$:

$$
3x + 2y = 525, \\qquad 9x + 13y = 2415
$$

Multiply the first by $13$ and the second by $2$, then subtract:

$$
39x + 26y = 6825, \\qquad 18x + 26y = 4830
$$

$$
21x = 1995 \\Rightarrow x = 95, \\qquad 3(95) + 2y = 525 \\Rightarrow y = 120
$$

At the hypothetical Season 1 mix of $260$ t Wheat and $160$ t Barley:

$$
260(95) + 160(120) = 24700 + 19200 = 43900
$$

\\$43,900 does not exceed \\$44,000, so the statement is false.`,
      `**B) Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.**  (true)

From Season 1 and Season 2, $x = 95$ and $y = 120$ (Wheat and Barley profit per tonne). The advantage is $y - x = 25$, while $25\\%$ of Wheat's rate is $0.25(95) = 23.75$. Since $25 > 23.75$, the advantage is more than $25\\%$ of Wheat's profit per tonne.`,
      `**C) Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.**  (false)

With $x = 95$ and $y = 120$ from Seasons 1 and 2, Season 3's Wheat tonnage $T$ satisfies $95T + 120(300) = 53100$, so $95T = 17100$ and $T = 180$. Season 3 total is $180 + 300 = 480$ t and Season 2 total is $180 + 260 = 440$ t. Since $480 > 440$, Season 3 is not less than Season 2.`,
      `**D) Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.**  (true)

Using $x = 95$ and $y = 120$, a Season 3 mix of $220$ t Wheat and $300$ t Barley would earn

$$
220(95) + 300(120) = 20900 + 36000 = 56900
$$

The gap above the recorded \\$53,100 is $56900 - 53100 = 3800$, and $3800 > 3500$, so the recorded total would have been understated by more than \\$3,500.`,
      `**E) Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.**  (true)

Season averages use only the printed totals and tonnages:

$$
\\frac{42000}{240 + 160} = \\frac{42000}{400} = 105, \\qquad \\frac{48300}{180 + 260} = \\frac{48300}{440} \\approx 109.773
$$

Season 2's about \\$109.77/t exceeds Season 1's \\$105/t.`,
    ],
    difficulty_level: "4/5",
    sort_order: 46,
    solution_overview: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.

**Part 1: Building the system.**

Let $x$ = profit per tonne of Wheat, $y$ = profit per tonne of Barley.

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

**Answer.** Wheat = \\$95.00/t | Barley = \\$120.00/t | Season 3 Wheat reconstructed = 180 tonnes`,
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

Let $x$ be the elder's present age and $y$ the younger's. The two age conditions give

$$
x - 5 = 3(y - 5), \\qquad x + 9 = 2(y + 9)
$$

Expanding: $x = 3y - 10$ and $x = 2y + 9$. Set equal:

$$
3y - 10 = 2y + 9 \\Rightarrow y = 19, \\qquad x = 2(19) + 9 = 47
$$

In $15$ years the ages are $62$ and $34$. Twice $34$ is $68$, and $62 < 68$, so the elder is less than double the younger.`,
      `**B) The current age gap (x - y) is more than 45% of the elder employee's current age.**  (true)

From the two age conditions, the present ages are $x = 47$ and $y = 19$. The gap is $47 - 19 = 28$, while $45\\%$ of the elder's age is $0.45(47) = 21.15$. Since $28 > 21.15$, the gap is more than $45\\%$ of the elder's current age.`,
      `**C) Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.**  (false)

With present ages $47$ and $19$, in $4.5$ years the ages are $51.5$ and $23.5$. The ratio is

$$
\\frac{51.5}{23.5} \\approx 2.191
$$

which is not more than $2.5$.`,
      `**D) Ten years ago, the sum of their ages was less than 40.**  (false)

With present ages $47$ and $19$, ten years ago the ages were $37$ and $9$, summing to $46$. Since $46$ is not less than $40$, the statement is false.`,
      `**E) There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.**  (true)

The scenario itself places that exact triple condition five years ago. Checking with present ages $47$ and $19$:

$$
47 - 5 = 42, \\qquad 19 - 5 = 14, \\qquad 3(14) = 42
$$

Five years ago is more than four years ago, so such a point exists.`,
    ],
    difficulty_level: "4/5",
    sort_order: 47,
    solution_overview: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.

**Part 1: Building the system.**

Let $x$ = elder employee's current age, $y$ = younger employee's current age.

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
| Order 1 | 8 | 5 | \\$1,052.80 |
| Order 2 | 16 | 10 | \\$2,105.60 |
| Order 3 | 3 | 12 | \\$1,350.60 |`,
    statements: [
      `If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual \\$1,350.60.`,
      `The dollar markup on Product B is more than 80% of the dollar markup on Product A.`,
      `Order 1's total retail markup exceeds \\$150.00.`,
      `If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than \\$280.00.`,
      `The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual \\$1,350.60.**  (false)

Let $x$ and $y$ be wholesale costs of A and B. With $32\\%$ and $18\\%$ markups, Orders 1 and 3 give

$$
8(1.32)x + 5(1.18)y = 1052.80, \\qquad 3(1.32)x + 12(1.18)y = 1350.60
$$

$$
10.56x + 5.9y = 1052.80, \\qquad 3.96x + 14.16y = 1350.60
$$

Order 2 is exactly double Order 1, so it is redundant. Multiply Order 1 by $0.375$ and subtract from Order 3:

$$
3.96x + 2.2125y = 394.80
$$

$$
11.9475y = 955.80 \\Rightarrow y = 80, \\qquad 10.56x + 5.9(80) = 1052.80 \\Rightarrow x = 55
$$

With swapped markups on Order 3:

$$
3(1.18)(55) + 12(1.32)(80) = 194.70 + 1267.20 = 1461.90
$$

\\$1,461.90 is above the actual \\$1,350.60, so the total increases rather than decreases.`,
      `**B) The dollar markup on Product B is more than 80% of the dollar markup on Product A.**  (true)

From Orders 1 and 3, wholesale costs are $x = 55$ and $y = 80$. A's dollar markup is $0.32(55) = 17.60$ and B's is $0.18(80) = 14.40$. Then

$$
\\frac{14.40}{17.60} = 0.8181\\ldots
$$

about $81.8\\%$, which exceeds $80\\%$.`,
      `**C) Order 1's total retail markup exceeds \\$150.00.**  (true)

With wholesale costs $x = 55$ and $y = 80$, Order 1 wholesale is $8(55) + 5(80) = 840$. Retail markup is $1052.80 - 840 = 212.80$, which exceeds \\$150.00.`,
      `**D) If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than \\$280.00.**  (true)

With $y = 80$, Product B's retail price is $1.18(80) = 94.40$. Three extra B units add $3(94.40) = 283.20$, and $283.20 > 280$, so the increase exceeds \\$280.00.`,
      `**E) The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.**  (true)

With $x = 55$ and $y = 80$:

$$
\\frac{y}{x} = \\frac{80}{55} \\approx 1.4545
$$

$$
\\frac{1.18(80)}{1.32(55)} = \\frac{94.40}{72.60} \\approx 1.3003
$$

The wholesale ratio is larger than the retail ratio.`,
    ],
    difficulty_level: "5/5",
    sort_order: 48,
    solution_overview: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.

**Part 1: Building the system.**

Let $x$ = wholesale cost of Product A, $y$ = wholesale cost of Product B.

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

**Answer.** Product A wholesale = \\$55.00 | Product B wholesale = \\$80.00`,
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

Let $x$ be points per win and $y$ points per draw. The Falcons and Ravens give

$$
9x + 4y = 75, \\qquad 7x + 6y = 67
$$

Multiply the first by $3$ and the second by $2$, then subtract:

$$
27x + 12y = 225, \\qquad 14x + 12y = 134
$$

$$
13x = 91 \\Rightarrow x = 7, \\qquad 9(7) + 4y = 75 \\Rightarrow y = 3
$$

If a draw were worth half a win, then $y = 3.5$, and the Falcons would score $9(7) + 4(3.5) = 63 + 14 = 77$, which is above their actual $75$.`,
      `**B) The Ravens earned more than 45% of their total points from draws alone.**  (false)

From the league system, $x = 7$ and $y = 3$, so the Ravens' $67$ points include $6(3) = 18$ from draws. The draw share is $18/67 \\approx 0.2687$, about $26.9\\%$, far below $45\\%$.`,
      `**C) Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.**  (true)

Apply the stated alternate scoring directly to both records: Falcons $9(2) + 4(1) = 22$ and Ravens $7(2) + 6(1) = 20$. The Falcons remain ahead.`,
      `**D) The Falcons' win-to-draw point contribution ratio exceeds 15.**  (false)

With $x = 7$ and $y = 3$, Falcons win points are $9(7) = 63$ and draw points are $4(3) = 12$. The ratio is $63/12 = 5.25$, which does not exceed $15$.`,
      `**E) A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.**  (false)

With $x = 7$ and $y = 3$, the revised score is $12(7) + 1(3) = 87$. The increase over $75$ is only $12$, not more than $20$.`,
    ],
    difficulty_level: "5/5",
    sort_order: 49,
    solution_overview: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points.

**Part 1: Building the system.**

Let $x$ = points per win, $y$ = points per draw.

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

Let $x$ and $y$ be mass per liter of Metals A and B. Batches 1 and 2 give

$$
12x + 8y = 182.4, \\qquad 5x + 15y = 209.0
$$

Divide by $4$ and $5$: $3x + 2y = 45.6$ and $x + 3y = 41.8$, so $x = 41.8 - 3y$. Substitute:

$$
3(41.8 - 3y) + 2y = 45.6 \\Rightarrow 125.4 - 7y = 45.6 \\Rightarrow y = 11.4, \\qquad x = 7.6
$$

At $12$ L of A and $10$ L of B:

$$
12(7.6) + 10(11.4) = 91.2 + 114 = 205.2
$$

$205.2$ kg exceeds $200$ kg.`,
      `**B) Metal B's density is more than 50% greater than Metal A's density.**  (false)

From Batches 1 and 2, $x = 7.6$ kg/L and $y = 11.4$ kg/L. The relative increase is

$$
\\frac{11.4 - 7.6}{7.6} = \\frac{3.8}{7.6} = 0.50
$$

exactly $50\\%$, not more than $50\\%$.`,
      `**C) The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.**  (true)

With densities $x = 7.6$ and $y = 11.4$, Batch 3 predicts

$$
9.5(7.6) + 6(11.4) = 72.2 + 68.4 = 140.6
$$

versus $147.0$ kg recorded, a $6.4$ kg gap. Then $6.4/147.0 \\approx 0.04354$, about $4.35\\%$, which is more than $4\\%$.`,
      `**D) If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.**  (false)

With $x = 7.6$ and $y = 11.4$, the predicted mass at $10$ L of A and $6$ L of B is $10(7.6) + 6(11.4) = 144.4$ kg. The distance from $147.0$ kg is $2.6$ kg, which is not within $2$ kg.`,
      `**E) Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.**  (true)

With densities $x = 7.6$ and $y = 11.4$, the combined mass is $17(7.6) + 23(11.4) = 129.2 + 262.2 = 391.4$ kg, exactly equal to $182.4 + 209.0 = 391.4$ kg.`,
    ],
    difficulty_level: "5/5",
    sort_order: 50,
    solution_overview: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).

**Part 1: Building the system.**

Let $x$ = mass per liter of Metal A (kg/L), $y$ = mass per liter of Metal B (kg/L).

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
    context: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is \\$600,000, fee \\$10,800. Client 1's AUM exceeds Client 2's by \\$150,000 and pays \\$2,400 more in total fees. The flat retainer is identical for every client, so it cancels out of any fee-difference comparison.`,
    statements: [
      `A client with AUM of \\$850,000 would pay a fee representing less than 1.75% of their AUM.`,
      `The flat retainer accounts for more than 10% of Client 2's total fee.`,
      `If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM \\$750,000) would decrease compared to its actual amount.`,
      `The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.`,
      `A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) A client with AUM of \\$850,000 would pay a fee representing less than 1.75% of their AUM.**  (true)

Let $x$ be the fee rate as a decimal and $y$ the flat retainer. Client 2 and the fee-difference clue give

$$
600000x + y = 10800, \\qquad 150000x = 2400
$$

so $x = 2400/150000 = 0.016$. Then $600000(0.016) + y = 10800$ yields $y = 1200$. At AUM \\$850,000:

$$
0.016(850000) + 1200 = 14800, \\qquad \\frac{14800}{850000} \\approx 0.017412
$$

about $1.741\\%$, which is less than $1.75\\%$.`,
      `**B) The flat retainer accounts for more than 10% of Client 2's total fee.**  (true)

From the fee system, the retainer is $y = 1200$ and Client 2's total fee is \\$10,800. The share is $1200/10800 \\approx 0.1111$, about $11.11\\%$, which exceeds $10\\%$.`,
      `**C) If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM \\$750,000) would decrease compared to its actual amount.**  (true)

With $x = 0.016$ and $y = 1200$, Client 1's AUM is $600000 + 150000 = 750000$, so the actual fee is $0.016(750000) + 1200 = 13200$. Under the revised terms:

$$
0.014(750000) + 2(1200) = 10500 + 2400 = 12900
$$

\\$12,900 is lower than \\$13,200.`,
      `**D) The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.**  (false)

With fees \\$13,200 on \\$750,000 and \\$10,800 on \\$600,000, the effective rates are $13200/750000 = 0.0176$ and $10800/600000 = 0.0180$, or $1.76\\%$ and $1.80\\%$. The gap is $0.04$ percentage points, not more than $0.05$.`,
      `**E) A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.**  (false)

Triple Client 2's AUM is \\$1,800,000. With $x = 0.016$ and $y = 1200$, the fee is $0.016(1800000) + 1200 = 30000$. Triple Client 2's fee is $3(10800) = 32400$. Since \\$30,000 is not more than \\$32,400, the statement is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 51,
    solution_overview: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is \\$600,000, fee \\$10,800.

**Part 1: Building the system.**

Let $x$ = the percentage fee rate (as a decimal), $y$ = the flat retainer (in dollars).

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

**Answer.** Fee rate = 1.6% of AUM | Retainer = \\$1,200.00 (Fee = 0.016·AUM + 1200)`,
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

Let $x$ and $y$ be mg/mL concentrations of Suspensions A and B. Batches 1 and 2 give

$$
500x + 300y = 8880, \\qquad 200x + 700y = 12600
$$

Divide by $100$: $5x + 3y = 88.8$ and $2x + 7y = 126$. Multiply by $7$ and $3$, then subtract:

$$
35x + 21y = 621.6, \\qquad 6x + 21y = 378
$$

$$
29x = 243.6 \\Rightarrow x = 8.4, \\qquad 2(8.4) + 7y = 126 \\Rightarrow y = 15.6
$$

The relative increase is $(15.6 - 8.4)/8.4 = 7.2/8.4 = 6/7 \\approx 0.8571$, about $85.71\\%$, which is more than $85\\%$.`,
      `**B) Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.**  (false)

With $x = 8.4$ and $y = 15.6$, and $0.32$ L $= 320$ mL of A, Batch 3 predicts $320(8.4) + 450(15.6) = 2688 + 7020 = 9708$ mg. The gap from the recorded $9700$ mg is $8$ mg, and $8/9700 \\approx 0.000825$, about $0.0825\\%$, far below $1\\%$.`,
      `**C) If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.**  (true)

With $x = 8.4$ and $y = 15.6$, doubling Batch 1's B volume to $600$ mL gives $500(8.4) + 600(15.6) = 4200 + 9360 = 13560$ mg, which exceeds $13{,}500$ mg.`,
      `**D) The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.**  (true)

Pooled content is $8880 + 12600 = 21480$ mg, while twice Batch 2 alone is $2(12600) = 25200$ mg. Since $21480 < 25200$, the claim holds.`,
      `**E) Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.**  (true)

Batch 2's B share is $700/(200+700) = 700/900 \\approx 0.7778$. Batch 3's B share is $450/(320+450) = 450/770 \\approx 0.5844$. Batch 2's share is higher.`,
    ],
    difficulty_level: "5/5",
    sort_order: 52,
    solution_overview: `Solventis blends two drug suspensions, each with a fixed mg/mL concentration. A third batch's Suspension A volume was logged in liters, then converted to mL.

**Part 1: Building the system.**

Let $x$ = mg/mL concentration of Suspension A, $y$ = mg/mL concentration of Suspension B.

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
    context: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall. Job 1 needed 200 usable studs + 150 usable sheets, invoice \\$7,164.00. Job 2 needed 350 usable studs + 175 usable sheets, invoice \\$8,946.00.`,
    statements: [
      `The total waste-related cost on Invoice 1 exceeds \\$700.00.`,
      `If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than \\$150.00.`,
      `Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.`,
      `The drywall price (y) is more than 8 times the stud price (x).`,
      `Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The total waste-related cost on Invoice 1 exceeds \\$700.00.**  (false)

Let $x$ be the stud price and $y$ the drywall price. With $12\\%$ stud waste and $8\\%$ drywall waste, ordered quantities are $200(1.12) = 224$ studs and $150(1.08) = 162$ sheets on Job 1, and $350(1.12) = 392$ studs and $175(1.08) = 189$ sheets on Job 2:

$$
224x + 162y = 7164, \\qquad 392x + 189y = 8946
$$

Multiply Job 1 by $1.75$ and subtract Job 2:

$$
392x + 283.5y = 12537
$$

$$
94.5y = 3591 \\Rightarrow y = 38, \\qquad 224x + 162(38) = 7164 \\Rightarrow x = 4.50
$$

Waste quantities on Job 1 are $24$ studs and $12$ sheets, costing $24(4.50) + 12(38) = 108 + 456 = 564$. Since \\$564 does not exceed \\$700, the statement is false.`,
      `**B) If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than \\$150.00.**  (true)

With $x = 4.50$ and $y = 38$, Job 2 still orders $392$ studs, but drywall becomes $175(1.05) = 183.75$ sheets. The new invoice is $392(4.50) + 183.75(38) = 1764 + 6982.50 = 8746.50$. The decrease from \\$8,946.00 is $199.50$, which is more than \\$150.00.`,
      `**C) Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.**  (true)

With $x = 4.50$ and $y = 38$, usable-only cost on Job 2 is $350(4.50) + 175(38) = 1575 + 6650 = 8225$. Ninety percent of the invoice is $0.90(8946) = 8051.40$. Since $8225 > 8051.40$, usable cost is more than $90\\%$ of the as-ordered total.`,
      `**D) The drywall price (y) is more than 8 times the stud price (x).**  (true)

From the waste-adjusted invoices, $x = 4.50$ and $y = 38$. The ratio is $38/4.50 \\approx 8.444$, which is more than $8$.`,
      `**E) Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.**  (true)

With $x = 4.50$ and $y = 38$, usable costs are $200(4.50) + 150(38) = 6600$ on Job 1 and $350(4.50) + 175(38) = 8225$ on Job 2. Waste add-ons are

$$
\\frac{7164 - 6600}{6600} = \\frac{564}{6600} \\approx 0.08545, \\qquad \\frac{8946 - 8225}{8225} = \\frac{721}{8225} \\approx 0.08766
$$

Job 1's about $8.545\\%$ is smaller than Job 2's about $8.767\\%$.`,
    ],
    difficulty_level: "5/5",
    sort_order: 53,
    solution_overview: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall.

**Part 1: Building the system.**

Let $x$ = price per stud, $y$ = price per drywall sheet. The ordered (waste-inflated) quantities must be computed from the usable amounts before any pricing model can be built.

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

**Answer.** Stud price = \\$4.50 | Drywall sheet price = \\$38.00`,
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

Let $x$ be the scale factor and $y$ the offset. The two calibration points give

$$
12.4x + y = 56.90, \\qquad 31.7x + y = 124.45
$$

Subtract to cancel $y$:

$$
19.3x = 67.55 \\Rightarrow x = 3.50, \\qquad 12.4(3.50) + y = 56.90 \\Rightarrow y = 13.50
$$

Relative excess over $3.4$ is $(3.50 - 3.40)/3.40 = 0.10/3.40 \\approx 0.02941$, about $2.94\\%$, which is more than $2.5\\%$.`,
      `**B) If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.**  (true)

From the calibration points, $x = 3.50$ and $y = 13.50$. Doubling the offset to $27$ gives $3.50(20) + 27 = 70 + 27 = 97$, which exceeds $95$.`,
      `**C) The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.**  (false)

With $x = 3.50$ and $y = 13.50$, the prediction at reading $45.0$ is $45.0(3.50) + 13.50 = 157.50 + 13.50 = 171.00$. The recorded reference is $172.20$, so the prediction is $1.20$ lower, not higher. It cannot exceed the recorded value by more than $1\\%$.`,
      `**D) The percentage increase in true value between Point 1 and Point 2 is more than 100%.**  (true)

Using the printed reference values directly:

$$
\\frac{124.45 - 56.90}{56.90} = \\frac{67.55}{56.90} \\approx 1.187
$$

about $118.7\\%$, which exceeds $100\\%$.`,
      `**E) A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).**  (false)

With $x = 3.50$ and $y = 13.50$, the prediction at reading $8.0$ is $3.50(8) + 13.50 = 28 + 13.50 = 41.5$. Half of Point 1's true value is $56.90/2 = 28.45$. Since $41.5$ is not less than $28.45$, the statement is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 54,
    solution_overview: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.

**Part 1: Building the system.**

Let $x$ = the sensor's scale factor, $y$ = the sensor's offset, so that $\\mathrm{True\\ Value} = x \\cdot (\\mathrm{Reading}) + y$.

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
    context: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost \\$2,943.20. Shipment 2: 800 kg total, mixed 5:3 Coffee:Cocoa, cost \\$4,555.00.`,
    statements: [
      `Coffee costs more than 25% more per kilogram than Cocoa.`,
      `Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.`,
      `If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual \\$4,555.00.`,
      `The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.`,
      `The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Coffee costs more than 25% more per kilogram than Cocoa.**  (true)

Let $x$ and $y$ be Coffee and Cocoa prices per kg. Shipment 1 is $520$ kg at $3:2$, so $312$ kg Coffee and $208$ kg Cocoa; Shipment 2 is $800$ kg at $5:3$, so $500$ kg Coffee and $300$ kg Cocoa:

$$
312x + 208y = 2943.2, \\qquad 500x + 300y = 4555
$$

Divide by $8$ and $100$: $39x + 26y = 367.9$ and $5x + 3y = 45.55$, so $x = 9.11 - 0.6y$. Substitute:

$$
39(9.11 - 0.6y) + 26y = 367.9 \\Rightarrow 355.29 + 2.6y = 367.9 \\Rightarrow y = 4.85, \\qquad x = 6.20
$$

The premium is $(6.20 - 4.85)/4.85 = 1.35/4.85 \\approx 0.2784$, about $27.84\\%$, which is more than $25\\%$.`,
      `**B) Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.**  (true)

With $x = 6.20$ and Shipment 1's $312$ kg of Coffee, Coffee cost is $312(6.20) = 1934.40$. The share of the \\$2,943.20 total is $1934.40/2943.20 \\approx 0.6572$, about $65.72\\%$, which exceeds $65\\%$.`,
      `**C) If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual \\$4,555.00.**  (true)

With $x = 6.20$ and $y = 4.85$, a $1:1$ split of $800$ kg costs $400(6.20) + 400(4.85) = 2480 + 1940 = 4420$, which is lower than \\$4,555.00.`,
      `**D) The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.**  (false)

With $x = 6.20$ and $y = 4.85$, combined Coffee is $312 + 500 = 812$ kg and combined Cocoa is $208 + 300 = 508$ kg. Coffee costs $812(6.20) = 5034.40$ and Cocoa costs $508(4.85) = 2463.80$. Cocoa does not exceed Coffee.`,
      `**E) The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.**  (true)

With $x = 6.20$ and $y = 4.85$, the gap is $1.35$ while $30\\%$ of Coffee's price is $0.30(6.20) = 1.86$. Since $1.35 < 1.86$, the claim holds.`,
    ],
    difficulty_level: "5/5",
    sort_order: 55,
    solution_overview: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost \\$2,943.20.

**Part 1: Building the system.**

Let $x$ = price per kg of Coffee, $y$ = price per kg of Cocoa. Individual weights within each shipment must be worked out from the total weight and ratio before a pricing model can be built.

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

**Answer.** Coffee = \\$6.20/kg | Cocoa = \\$4.85/kg`,
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

Let $x$ and $y$ be Truck and Van fuel rates in L per $100$ km. Expressing distances in hundreds of km:

$$
8.5x + 6.2y = 383.6, \\qquad 5x + 9y = 322
$$

Multiply the first by $9$ and the second by $6.2$, then subtract:

$$
76.5x + 55.8y = 3452.4, \\qquad 31x + 55.8y = 1996.4
$$

$$
45.5x = 1456 \\Rightarrow x = 32, \\qquad 5(32) + 9y = 322 \\Rightarrow y = 18
$$

The relative excess is $(32 - 18)/18 = 14/18 \\approx 0.7778$, about $77.78\\%$, which is more than $75\\%$.`,
      `**B) Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.**  (false)

With $x = 32$ and $y = 18$, and $155.3$ mi $\\approx 250$ km $= 2.5$ hundreds of km, Route 3 predicts $2.5(32) + 4(18) = 80 + 72 = 152$ L. Versus $155$ L recorded, the shortfall is $3/155 \\approx 0.01935$, about $1.94\\%$, which is not more than $2\\%$.`,
      `**C) If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.**  (true)

With $x = 32$ and $y = 18$, the hypothetical uses $8.5(32) + 9(18) = 272 + 162 = 434$ L, which exceeds $430$ L.`,
      `**D) Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.**  (true)

With $x = 32$ and $y = 18$, Route 2's fleet average is $322/(500+900)\\times 100 = 23$ L/$100$ km. The distance to the Van rate $18$ is $5$, while the distance to the Truck rate $32$ is $9$, so the average is closer to the Van.`,
      `**E) Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.**  (true)

With $x = 32$ and $y = 18$, two separate full-distance runs over $14.7$ hundreds of km would use $14.7(32) + 14.7(18) = 470.4 + 264.6 = 735$ L, far above Route 1's actual $383.6$ L.`,
    ],
    difficulty_level: "5/5",
    sort_order: 56,
    solution_overview: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).

**Part 1: Building the system.**

Let $x$ = Truck fuel consumption (L/100km), $y$ = Van fuel consumption (L/100km).

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
    context: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00. A proposed reallocation swapping those amounts (\\$18,000 Bonds, \\$27,000 Equities) would return \\$2,754.00.`,
    statements: [
      `The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.`,
      `Under the current allocation, the blended rate is less than 6%.`,
      `If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns (\\$2,646.00 + \\$2,754.00 = \\$5,400.00).`,
      `A 50/50 split (\\$22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.`,
      `The bond rate is more than 80% of the equity rate.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.**  (true)

Let $x$ and $y$ be the Bond and Equity annual rates in percent. The two allocations give

$$
27000\\cdot\\frac{x}{100} + 18000\\cdot\\frac{y}{100} = 2646, \\qquad 18000\\cdot\\frac{x}{100} + 27000\\cdot\\frac{y}{100} = 2754
$$

or equivalently $270x + 180y = 2646$ and $180x + 270y = 2754$. Adding and subtracting:

$$
x + y = 12, \\qquad y - x = 1.2
$$

so $x = 5.4$ and $y = 6.6$. The relative excess is $(6.6 - 5.4)/5.4 = 1.2/5.4 \\approx 0.2222$, about $22.22\\%$, which is more than $20\\%$.`,
      `**B) Under the current allocation, the blended rate is less than 6%.**  (true)

The current return on the \\$45,000 fund is \\$2,646, so the blended rate is $2646/45000 = 0.0588 = 5.88\\%$, which is less than $6\\%$.`,
      `**C) If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns (\\$2,646.00 + \\$2,754.00 = \\$5,400.00).**  (false)

With equity rate $y = 6.6\\%$, an all-equity fund returns $45000(0.066) = 2970$. That is far below the combined \\$5,400 benchmark, so it does not exceed it.`,
      `**D) A 50/50 split (\\$22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.**  (true)

With $x = 5.4\\%$ and $y = 6.6\\%$, a $50/50$ split returns $22500(0.054) + 22500(0.066) = 1215 + 1485 = 2700$. The average of the two described returns is $(2646 + 2754)/2 = 2700$ as well, so they match exactly.`,
      `**E) The bond rate is more than 80% of the equity rate.**  (true)

With $x = 5.4$ and $y = 6.6$, the ratio is $5.4/6.6 \\approx 0.8182$, about $81.8\\%$, which is more than $80\\%$.`,
    ],
    difficulty_level: "5/5",
    sort_order: 57,
    solution_overview: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00.

**Part 1: Building the system.**

Let $x$ = Bond Portfolio's annual rate (%), $y$ = Equity Portfolio's annual rate (%).

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
    context: `Ashford prices every policy as a fixed administrative fee plus a rate per \\$1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.`,
    tables_markdown: `| Policy | Coverage | Premium |
| --- | --- | --- |
| Auto | \\$85,000 | \\$612.50 |
| Home | \\$210,000 | \\$1,197.50 |
| Renters | (illegible) | \\$331.70 |`,
    statements: [
      `The reconstructed Renters coverage amount is less than \\$30,000.`,
      `The fixed administrative fee represents more than 60% of the Auto policy's total premium.`,
      `If the rate per \\$1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than \\$75.00.`,
      `The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.`,
      `Combining the Auto and Home coverage into a single hypothetical policy (295 units of \\$1,000 coverage total) would cost less than the sum of their separate premiums (\\$612.50 + \\$1,197.50 = \\$1,810.00).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The reconstructed Renters coverage amount is less than \\$30,000.**  (true)

Let $x$ be the fixed administrative fee and $y$ the rate per \\$1,000 of coverage. Auto and Home give

$$
x + 85y = 612.50, \\qquad x + 210y = 1197.50
$$

Subtract to cancel $x$:

$$
125y = 585 \\Rightarrow y = 4.68, \\qquad x + 85(4.68) = 612.50 \\Rightarrow x = 214.70
$$

For Renters, $214.70 + 4.68C = 331.70$ yields $C = 25$ units of \\$1,000, so coverage is \\$25,000, which is less than \\$30,000.`,
      `**B) The fixed administrative fee represents more than 60% of the Auto policy's total premium.**  (false)

From Auto and Home, $x = 214.70$. The fee share of Auto's \\$612.50 premium is $214.70/612.50 \\approx 0.3505$, about $35.05\\%$, which does not exceed $60\\%$.`,
      `**C) If the rate per \\$1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than \\$75.00.**  (true)

With $x = 214.70$ and $y = 4.68$, the new rate is $1.10(4.68) = 5.148$. The new Home premium is $214.70 + 210(5.148) = 214.70 + 1081.08 = 1295.78$. The increase from \\$1,197.50 is $98.28$, which is more than \\$75.00.`,
      `**D) The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.**  (false)

Effective premiums per \\$1,000 from the printed figures are $1197.50/210 \\approx 5.702$ for Home and $612.50/85 \\approx 7.206$ for Auto. Home's figure is lower than Auto's, not more than twice as large.`,
      `**E) Combining the Auto and Home coverage into a single hypothetical policy (295 units of \\$1,000 coverage total) would cost less than the sum of their separate premiums (\\$612.50 + \\$1,197.50 = \\$1,810.00).**  (true)

With $x = 214.70$ and $y = 4.68$, one combined policy costs $214.70 + 295(4.68) = 214.70 + 1380.60 = 1595.30$, which is less than \\$1,810.00 because the fixed fee is paid only once.`,
    ],
    difficulty_level: "5/5",
    sort_order: 58,
    solution_overview: `Ashford prices every policy as a fixed administrative fee plus a rate per \\$1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.

**Part 1: Building the system.**

Let $x$ = the fixed administrative fee per policy (in dollars), $y$ = the rate per \\$1,000 of coverage (in dollars).

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Auto, coverage in units of \\$1,000.** That observation becomes:

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

**Answer.** Fixed fee = \\$214.70 | Rate = \\$4.68/\\$1,000 | Renters coverage reconstructed = \\$25,000`,
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

Let $x$ and $y$ be Species A's and B's annual net changes. Combined growth from Year 2 to Year 6 is $1772 - 1340 = 432$ over $4$ years, and A grows at twice B's rate:

$$
4x + 4y = 432 \\Rightarrow x + y = 108, \\qquad x = 2y
$$

so $3y = 108$, $y = 36$, and $x = 72$. Year 6 populations are $610 + 4(72) = 898$ and $730 + 4(36) = 874$. The gap is $24$, which exceeds $20$.`,
      `**B) If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.**  (true)

With $x = 72$ and $y = 36$, if B also grew at $72$ per year then B at Year 6 would be $730 + 4(72) = 1018$. Combined with A's $898$, the total is $1916$. The excess over $1772$ is $144$, which is more than $140$.`,
      `**C) The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth: Species B's growth) is greater than 2.5: 1.**  (false)

With $x = 72$ and $y = 36$, four-year growths are $4(72) = 288$ and $4(36) = 144$, so the ratio is $288:144 = 2:1$, not greater than $2.5:1$.`,
      `**D) At some point between Year 2 and Year 6, the two species had equal populations.**  (true)

With linear growth at $72$ and $36$ per year, the Year 2 difference $A - B = 610 - 730 = -120$ becomes $898 - 874 = +24$ by Year 6. A continuous linear difference that changes sign must cross zero between those times.`,
      `**E) Species A overtakes Species B in total population size before Year 5.**  (false)

Set $610 + 72(t - 2) = 730 + 36(t - 2)$:

$$
36(t - 2) = 120 \\Rightarrow t - 2 = \\frac{10}{3} \\Rightarrow t = 2 + \\frac{10}{3} \\approx 5.333
$$

The crossover is after Year 5, not before.`,
    ],
    difficulty_level: "5/5",
    sort_order: 59,
    solution_overview: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340).

**Part 1: Building the system.**

Let $x$ = Species A's net annual change (individuals/year), $y$ = Species B's net annual change.

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

Let $x$ and $y$ be Plant A and Plant B output rates in MWh per operating hour. Days 1 and 2 give

$$
14x + 20y = 3990, \\qquad 22x + 9y = 4072
$$

Divide Day 1 by $2$ to get $7x + 10y = 1995$. Multiply that by $9$ and Day 2 by $10$, then subtract:

$$
63x + 90y = 17955, \\qquad 220x + 90y = 40720
$$

$$
157x = 22765 \\Rightarrow x = 145, \\qquad 7(145) + 10y = 1995 \\Rightarrow y = 98
$$

The relative excess is $(145 - 98)/98 = 47/98 \\approx 0.4796$, about $47.96\\%$, which is more than $45\\%$.`,
      `**B) Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.**  (true)

With $x = 145$ and $y = 98$, and $1020$ min $= 17$ hrs, Day 3 predicts $17(145) + 11(98) = 2465 + 1078 = 3543$ MWh. The gap from the recorded $3553$ MWh is $10/3553 \\approx 0.002815$, about $0.2815\\%$, which is less than $0.3\\%$.`,
      `**C) If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).**  (false)

With $x = 145$ and $y = 98$, the swapped-hours total is $29(145) + 36(98) = 4205 + 3528 = 7733$ MWh, which is less than the actual $8062$ MWh, not greater.`,
      `**D) The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.**  (true)

With $x = 145$ and $y = 98$, the combined rate is $243$ MWh/hr while $2.4(98) = 235.2$. Since $243 > 235.2$, the claim holds.`,
      `**E) Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.**  (true)

Adding the recorded daily totals: $3990 + 4072 + 3553 = 11615$ MWh, which exceeds $11{,}600$ MWh.`,
    ],
    difficulty_level: "5/5",
    sort_order: 60,
    solution_overview: `Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs).

**Part 1: Building the system.**

Let $x$ = Plant A's output rate (MWh/operating hr), $y$ = Plant B's output rate (MWh/operating hr).

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
