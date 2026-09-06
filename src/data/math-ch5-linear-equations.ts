/**
 * Chapter 5  -  Linear equations in two unknowns (subsections 5 and 5.5).
 * Structured prose + markdown tables from PDF (UI-native, no screenshots).
 * 5.5 exam-style tasks from math-ch5-exam.json.
 */

import type { MathTask } from "@/data/math-chapters";
import ch5Exam from "@/data/math-ch5-exam.json";

export const MATH_CH5_SUBSECTIONS = [
  { id: "5", title: "Linear equations in two unknowns" },
  { id: "5.5", title: "Exam-Style" },
] as const;

const MATH_CH5_CORE: MathTask[] = [
  {
    id: `math-5-1`,
    case_id: `MATH 5.01`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates today's North holding:

$$
x=360
$$

The claim asserts

$$
x=360
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read today's South holding:

$$
y=260
$$

The claim asserts

$$
y = 240
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → True

This is not the overview's equalizing transfer. North starts at the recovered $x=360$ and receives $30$ crates from South:

$$360 + 30$$

$$= 390$$

Compare the computed value with the claim ($390$). The two sides agree.

So the statement is True.`,
      `**D.** → False

The gap between the two recovered unknowns is their difference:

$$
d = x - y
$$

Using the recovered solution values $x=360$ and $y=260$ as inputs for this claim:

Today's gap is

$$360 - 260$$

$$= 100$$

The claim asserts

$$120$$

$.

The computed figure does not match the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is False.`,
      `**E.** → True

A transfer shifts one recovered holding into the other by the stated amount:

$$
x' = x - t,\\quad y'
$$

$$
= y + t
$$

Using the recovered solution values $x=360$ and $y=260$ as inputs for this claim:

Moving $50$ crates from North to South gives

$$360 - 50$$

$$= 310$$

$$260 + 50$$

$$= 310$$

Both sides are $310$.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 1,
    solution_overview: `The North depot and the South depot are together holding 620 crates this week. If 50 crates were transferred from North to South, the two depots would hold the same number.

**Part 1: Building the system.**

Let $x$ = crates at North and $y$ = crates at South.

**1. Translate: combined total.**

$$x + y = 620 \\tag{1}$$

**2. Translate: equalizing transfer.** After the move, $x - 50 = y + 50$, so

$$x - y = 100 \\tag{2}$$

**Part 2: Solve.**

Add (1) and (2):

$$(x + y) + (x - y) = 620 + 100$$

$$2x = 720$$

$$x = 360$$

From (1):

$$y=620 - 360$$

$$=260$$

**Answer.** North = 360 crates | South = 260 crates`,
  },
  {
    id: `math-5-2`,
    case_id: `MATH 5.02`,
    title: `Reading Unit Prices Off Two Supplier Invoices`,
    context: `Silverline Stationery Co. received two invoices from the same supplier this month. Notebooks and pens are billed at fixed unit prices that stayed the same on both invoices.`,
    tables_markdown: `| Invoice | Notebooks | Pens | Invoice Total |
| --- | --- | --- | --- |
| #101 | 40 | 25 | \\$185.00 |
| #102 | 15 | 60 | \\$160.50 |`,
    statements: [
      `A notebook costs \\$3.50.`,
      `A pen costs \\$2.10.`,
      `Invoice #101 totals \\$185.00.`,
      `10 notebooks and 10 pens purchased together would cost \\$53.00.`,
      `Invoice #102 totals \\$172.50.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the notebook price:

$$
x=3.50
$$

The claim asserts

$$
x=3.50
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the pen price:

$$
y=1.80
$$

The claim asserts

$$
y=2.10
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → True

Once the unit prices are recovered, each stem total is fixed. Read the printed figure for this claim, then compare it with the card.

The printed total is

$$185$$

The claim asserts

$$185$$

Those two displays agree.

So the statement is True.`,
      `**D.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=3.50$ and $y=1.80$ as inputs for this claim:

Ten of each costs

$$10 \\times 3.50$$

$$= 35$$

$$10 \\times 1.80$$

$$= 18$$

$$35 + 18$$

$$= 53$$

The claim asserts

$$53.00$$

The computed figure and the claim agree.

So the statement is True.`,
      `**E.** → False

Once the unit prices are recovered, each stem total is fixed. Read the printed figure for this claim, then compare it with the card.

The printed total is

$$160$$

The claim asserts

$$172$$

Those two displays do not agree.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 2,
    solution_overview: `Silverline Stationery Co. received two invoices from the same supplier this month. Notebooks and pens keep the same unit prices on both bills.

**Part 1: Building the system.**

Let $x$ = price of one notebook and $y$ = price of one pen.

**1. Translate: Invoice #101.**

$$40x + 25y = 185 \\tag{1}$$

**2. Translate: Invoice #102.**

$$15x + 60y = 160.50 \\tag{2}$$

**Part 2: Solve.**

Divide (2) by $15$:

$$x + 4y = 10.70$$

$$x = 10.70 - 4y$$

Substitute into (1):

$$40(10.70 - 4y) + 25y = 185$$

$$428 - 160y + 25y = 185$$

$$-135y = -243$$

$$y=\\frac{243}{135}$$

$$=1.80$$

Then

$$x = 10.70 - 4(1.80)$$

$$x=10.70 - 7.20$$

$$=3.50$$

**Answer.** Notebook = \\$3.50 | Pen = \\$1.80`,
  },
  {
    id: `math-5-3`,
    case_id: `MATH 5.03`,
    title: `Pricing Adult and Child Tickets From a Box-Office Summary`,
    context: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.`,
    tables_markdown: `| Session | Adult Tickets | Child Tickets | Revenue |
| --- | --- | --- | --- |
| Saturday Matinee | 90 | 150 | \\$2,130 |
| Saturday Evening | 160 | 40 | \\$2,200 |`,
    statements: [
      `An adult ticket costs \\$12.00.`,
      `A child ticket costs \\$7.00.`,
      `The Saturday matinee generated \\$2,050.00 in revenue.`,
      `The Saturday evening session generated \\$2,300.00 in revenue.`,
      `50 adult tickets and 50 child tickets together would generate \\$1,000.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the adult ticket price:

$$
a=12
$$

The claim asserts

$$
a=12
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the child ticket price:

$$
c=7
$$

The claim asserts

$$
c=7
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → False

Once the unit prices are recovered, each stem total is fixed. Read the printed figure for this claim, then compare it with the card.

The printed total is

$$2130$$

The claim asserts

$$2050$$

Those two displays do not agree.

So the statement is False.`,
      `**D.** → False

Once the unit prices are recovered, each stem total is fixed. Read the printed figure for this claim, then compare it with the card.

The printed total is

$$2200$$

The claim asserts

$$2300$$

Those two displays do not agree.

So the statement is False.`,
      `**E.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $a=12$ and $c=7$ as inputs for this claim:

Fifty of each would generate

$$50 \\times 12$$

$$= 600$$

$$50 \\times 7$$

$$= 350$$

$$600 + 350$$

$$= 950$$

The claim asserts

$$1000.00$$

The computed figure does not match the claim.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 3,
    solution_overview: `The Riverside Community Cinema logged two Saturday screenings of the same film. Adult and child tickets keep fixed prices throughout the day.

**Part 1: Building the system.**

Let $a$ = adult ticket price and $c$ = child ticket price.

**1. Translate: Saturday matinee.**

$$90a + 150c = 2130 \\tag{1}$$

**2. Translate: Saturday evening.**

$$160a + 40c = 2200 \\tag{2}$$

**Part 2: Solve.**

Divide (2) by $40$:

$$4a + c = 55$$

$$c = 55 - 4a$$

Substitute into (1):

$$90a + 150(55 - 4a) = 2130$$

$$90a + 8250 - 600a = 2130$$

$$-510a = -6120$$

$$a=\\frac{6120}{510}$$

$$=12$$

Then

$$c = 55 - 4(12)$$

$$c=55 - 48$$

$$=7$$

**Answer.** Adult = \\$12.00 | Child = \\$7.00`,
  },
  {
    id: `math-5-4`,
    case_id: `MATH 5.04`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the sandwich price:

$$
x=7
$$

The claim asserts

$$
x=7
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the wrap price:

$$
y=5
$$

The claim asserts

$$
y=5
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → True

Receipt A's food subtotal uses the recovered unit prices on the stem quantities, before the delivery fee.

The overview recovered $x=7$ and $y=5$. Receipt A has $6$ sandwiches and $4$ wraps:

$$6 \\times 7$$

$$= 42$$

$$4 \\times 5$$

$$= 20$$

$$42 + 20$$

$$= 62$$

The claim asserts

$$
62
$$

Those two displays agree.

So the statement is True.`,
      `**D.** → True

Once the unit prices are recovered, each stem total is fixed. Read the printed figure for this claim, then compare it with the card.

The printed total is

$$74.00$$

The claim asserts

$$74.00$$

Those two displays agree.

So the statement is True.`,
      `**E.** → True

This is a pickup, so there is no delivery fee. The overview recovered $x=7$ and $y=5$. Five of each costs

$$5 \\times 7$$

$$= 35$$

$$5 \\times 5$$

$$= 25$$

$$35 + 25$$

$$= 60$$

Compare the computed value with the claim (\\$60.00). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 4,
    solution_overview: `Corner Deli adds a flat \\$8.00 delivery fee on top of food cost. Receipt A charged \\$70.00 for 6 sandwiches and 4 wraps. Receipt B charged \\$74.00 for 3 sandwiches and 9 wraps.

**Part 1: Building the system.**

Let $x$ = sandwich price and $y$ = wrap price. Subtract the shared delivery fee before writing the food equations.

Receipt A food:

$$70 - 8 = 62$$

$$6x + 4y = 62 \\tag{1}$$

Receipt B food:

$$74 - 8 = 66$$

$$3x + 9y = 66 \\tag{2}$$

**Part 2: Solve.**

Double (2):

$$6x + 18y = 132$$

Subtract (1):

$$(6x + 18y) - (6x + 4y) = 132 - 62$$

$$14y = 70$$

$$y = 5$$

Substitute into (2):

$$3x + 9(5) = 66$$

$$3x = 21$$

$$x = 7$$

**Answer.** Sandwich = \\$7.00 | Wrap = \\$5.00`,
  },
  {
    id: `math-5-5`,
    case_id: `MATH 5.05`,
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
      `**A.** → False

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the amount in Account A:

$$
x=6000
$$

The claim asserts

$$
x=6500
$$

Those two displays do not agree.

So the statement is False.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the amount in Account B:

$$
y=4000
$$

The claim asserts

$$
y=4500
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $x=6000$ in Account A. Interest on that principal at $4\\%$ is

$$0.04 \\times 6000$$

$$= 240$$

The claim asserts

$$260.00$$

.

So the statement is False.`,
      `**D.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $y=4000$ in Account B. Interest on that principal at $7\\%$ is

$$0.07 \\times 4000$$

$$= 280$$

The claim asserts

$$210.00$$

.

So the statement is False.`,
      `**E.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The whole \\$10,000 would sit in Account B at $7\\%$:

$$0.07 \\times 10000$$

$$= 700$$

The claim asserts

$$700.00$$

.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 5,
    solution_overview: `An investor split \\$10,000 between Account A at $4\\%$ simple annual interest and Account B at $7\\%$ simple annual interest. Together the two accounts earned \\$520.00 in interest.

**Part 1: Building the system.**

Let $x$ = amount placed in Account A and $y$ = amount placed in Account B.

**1. Translate: total split.**

$$x + y = 10000 \\tag{1}$$

**2. Translate: total interest.**

$$0.04x + 0.07y = 520 \\tag{2}$$

**Part 2: Solve.**

From (1), $x = 10000 - y$. Substitute into (2):

$$0.04(10000 - y) + 0.07y = 520$$

$$400 - 0.04y + 0.07y = 520$$

$$0.03y = 120$$

$$y=\\frac{120}{0.03}$$

$$=4000$$

Then

$$x=10000 - 4000$$

$$=6000$$

**Answer.** Account A = \\$6,000 | Account B = \\$4,000`,
  },
  {
    id: `math-5-6`,
    case_id: `MATH 5.06`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the Standard price:

$$
x=304
$$

The claim asserts

$$
x=304
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the Premium price:

$$
y=349
$$

The claim asserts

$$
y=354.00
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $y=349$. Twelve Premium chairs are worth

$$12 \\times 349$$

$$= 4188$$

The claim asserts

$$4188.00$$

.

So the statement is True.`,
      `**D.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The overview recovered $x=304$ and $y=349$. The Premium–Standard gap is

$$349 - 304$$

$$= 45$$

The claim asserts

$$
45
$$

Those two displays agree.

So the statement is True.`,
      `**E.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=304$ and $y=349$ as inputs for this claim:

Five of each costs

$$5 \\times 304$$

$$= 1520$$

$$5 \\times 349$$

$$= 1745$$

$$1520 + 1745$$

$$= 3265$$

Then $3265 > 3000$.

That computed value matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 6,
    solution_overview: `Premium-grade chairs are priced exactly \\$45 more per unit than Standard-grade chairs. A shipment of 18 Standard chairs and 12 Premium chairs was valued at \\$9,660.00.

**Part 1: Building the system.**

Let $x$ = Standard price and $y$ = Premium price.

**1. Translate: the \\$45 gap.**

$$y = x + 45 \\tag{1}$$

**2. Translate: shipment value.**

$$18x + 12y = 9660 \\tag{2}$$

**Part 2: Solve.**

Substitute (1) into (2):

$$18x + 12(x + 45) = 9660$$

$$18x + 12x + 540 = 9660$$

$$30x = 9120$$

$$x=\\frac{9120}{30}$$

$$=304$$

Then

$$y=304 + 45$$

$$=349$$

**Answer.** Standard = \\$304.00 | Premium = \\$349.00`,
  },
  {
    id: `math-5-7`,
    case_id: `MATH 5.07`,
    title: `Extracting a Hidden Rate Structure From a Mobile Ad`,
    context: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid \\$29.00 in total. A heavy user who went 120 minutes over paid \\$53.00  -  the ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.`,
    statements: [
      `ByteMobile's fixed monthly fee is \\$17.00.`,
      `The extra-minute rate advertised is \\$0.30 per minute.`,
      `A customer using 200 extra minutes in a month would pay \\$80.00.`,
      `A customer using 0 extra minutes would pay \\$0.00 that month.`,
      `The advertised extra-minute rate is more than double a rival plan's rate of \\$0.20 per minute.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the fixed monthly fee:

$$
f=17
$$

The claim asserts

$$
f=17
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the extra-minute rate:

$$
r=0.30
$$

The claim asserts

$$
r=0.30
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $f=17$ and $r=0.30$ as inputs for this claim:

Two hundred extra minutes would cost

$$200 \\times 0.30$$

$$= 60$$

$$17 + 60$$

$$= 77$$

The claim asserts

$$80.00$$

The computed figure does not match the claim.

So the statement is False.`,
      `**D.** → False

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

From the overview relation:

$$f=17$$

The claim asserts

$$0.00$$

The recovered figure is

$$17$$

Those two displays do not agree.

So the statement is False.`,
      `**E.** → False

Use the recovered values from the overview for this claim-specific check.

Double the rival rate of \\$0.20 is

$$2 \\times 0.20$$

$$= 0.40$$

The recovered extra-minute rate is $r=0.30$. Then $0.30 < 0.40$.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 7,
    solution_overview: `ByteMobile quotes two bills: 40 extra minutes cost \\$29.00 in total, and 120 extra minutes cost \\$53.00. Each bill is a fixed monthly fee plus a constant extra-minute rate.

**Part 1: Building the system.**

Let $f$ = fixed monthly fee and $r$ = extra-minute rate.

**1. Translate: 40 extra minutes.**

$$f + 40r = 29 \\tag{1}$$

**2. Translate: 120 extra minutes.**

$$f + 120r = 53 \\tag{2}$$

**Part 2: Solve.**

Subtract (1) from (2):

$$(f + 120r) - (f + 40r) = 53 - 29$$

$$80r = 24$$

$$r = 0.30$$

Substitute into (1):

$$f + 40(0.30) = 29$$

$$f + 12 = 29$$

$$f = 17$$

**Answer.** Fixed fee = \\$17.00 | Extra-minute rate = \\$0.30/min`,
  },
  {
    id: `math-5-8`,
    case_id: `MATH 5.08`,
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
      `**A.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the second recovered coordinate:

$$
y=\\frac{\\Delta_y}{\\Delta}
$$

Substitute the stem numbers:

$$
s = 130 - 55
$$

$$
= 75
$$

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**B.** → False

Use the recovered values from the overview for this claim-specific check.

$$
d=55
$$

The claim asserts

$$
d=45
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $s=75$ Standard ovens at 4 hours each:

$$75 \\times 4$$

$$= 300$$

The claim asserts

$$300$$

$ assembly hours.

So the statement is True.`,
      `**D.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $d=55$ Deluxe ovens at 9 hours each:

$$55 \\times 9$$

$$= 495$$

The claim asserts

$$500$$

$ assembly hours.

So the statement is False.`,
      `**E.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $s=75$ Standard ovens at \\$120 each:

$$75 \\times 120$$

$$= 9000$$

The claim asserts

$$9000.00$$

.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 8,
    solution_overview: `The division completed 130 ovens and logged 795 assembly hours. Standard ovens take 4 hours each and Deluxe ovens take 9 hours each.

**Part 1: Building the system.**

Let $s$ = number of Standard ovens and $d$ = number of Deluxe ovens.

**1. Translate: total ovens.**

$$s + d = 130 \\tag{1}$$

**2. Translate: total assembly hours.**

$$4s + 9d = 795 \\tag{2}$$

**Part 2: Solve.**

From (1), $s = 130 - d$. Substitute into (2):

$$4(130 - d) + 9d = 795$$

$$520 - 4d + 9d = 795$$

$$5d = 275$$

$$d = 55$$

Then

$$s=130 - 55$$

$$=75$$

**Answer.** Standard = 75 | Deluxe = 55`,
  },
  {
    id: `math-5-9`,
    case_id: `MATH 5.09`,
    title: `Recovering Furniture Prices From Two Branches' Net Sales`,
    context: `Two branches sold sofas and armchairs this month at company-wide fixed prices. "Net sales" (gross sales minus returns) is what actually reflects items sold at their listed prices.`,
    tables_markdown: `| Branch | Sofas Sold | Armchairs Sold | Gross Sales | Returns |
| --- | --- | --- | --- | --- |
| Riverside | 14 | 22 | \\$9,760 | \\$460 |
| Hillcrest | 20 | 10 | \\$9,300 | \\$300 |`,
    statements: [
      `A sofa sells for \\$350.00.`,
      `An armchair sells for \\$200.00.`,
      `Riverside's net sales were \\$9,300.00.`,
      `Hillcrest's gross sales were \\$9,300.00.`,
      `Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the sofa price:

$$
x=350
$$

The claim asserts

$$
x=350
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the armchair price:

$$
y=200
$$

The claim asserts

$$
y=200
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the first recovered coordinate:

$$
x=\\frac{\\Delta_x}{\\Delta}
$$

Substitute the stem numbers:

$$9300 - 300$$

$$= 9000$$

That computed value matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**D.** → True

Once the unit prices are recovered, each stem total is fixed. Read the printed figure for this claim, then compare it with the card.

The printed total is

$$9300$$

The claim asserts

$$9300$$

Those two displays agree.

So the statement is True.`,
      `**E.** → True

Once the unit prices are recovered, this session total is fixed by the stem quantities. Read the printed total, then compare it with the claim.

Use the recovered values from the overview for this claim-specific check.

Riverside's gross sales are printed at \\$9,760. With zero returns,

$$9760 - 0$$

$$= 9760$$

Gross and net would both equal \\$9,760.00.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 9,
    solution_overview: `Two branches sold sofas and armchairs at company-wide fixed prices. Net sales equal gross sales minus returns, and those net totals are the values of items sold at listed prices.

**Part 1: Building the system.**

Let $x$ = sofa price and $y$ = armchair price. Subtract returns before writing the equations.

Riverside net:

$$9760 - 460 = 9300$$

$$14x + 22y = 9300 \\tag{1}$$

Hillcrest net:

$$9300 - 300 = 9000$$

$$20x + 10y = 9000 \\tag{2}$$

**Part 2: Solve.**

Divide (2) by $10$:

$$2x + y = 900$$

$$y = 900 - 2x$$

Substitute into (1):

$$14x + 22(900 - 2x) = 9300$$

$$14x + 19800 - 44x = 9300$$

$$-30x = -10500$$

$$x=\\frac{10500}{30}$$

$$=350$$

Then

$$y = 900 - 2(350)$$

$$y=900 - 700$$

$$=200$$

**Answer.** Sofa = \\$350.00 | Armchair = \\$200.00`,
  },
  {
    id: `math-5-10`,
    case_id: `MATH 5.10`,
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
      `**A.** → False

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates PrintFast's setup fee:

$$
f=9
$$

The claim asserts

$$
f=12.00
$$

Those two displays do not agree.

So the statement is False.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read PrintFast's per-page rate:

$$
r=0.20
$$

The claim asserts

$$
r=0.25
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $f=9$ and $r=0.20$ as inputs for this claim:

A 250-page PrintFast order costs

$$250 \\times 0.20$$

$$= 50$$

$$9 + 50$$

$$= 59$$

The claim asserts

$$60.00$$

The computed figure does not match the claim.

So the statement is False.`,
      `**D.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $f=9$ and $r=0.20$ as inputs for this claim:

A 350-page PrintFast order costs

$$350 \\times 0.20$$

$$= 70$$

$$9 + 70$$

$$= 79$$

QuickCopy's flat fee is \\$60. Then $79 > 60$.

So the statement is False.`,
      `**E.** → True

Two independent PrintFast bills give two linear equations in the setup fee and the per-page rate. Different page counts make the coefficient rows independent, so the system determines a unique pair.

The overview recovers

$$
f=9
$$

$$
r=0.20
$$

So there is exactly one consistent pricing scheme, matching the claim.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 10,
    solution_overview: `PrintFast Express charges a fixed setup fee plus a constant per-page rate. Order #58 billed \\$33.00 for 120 pages, and Order #96 billed \\$69.00 for 300 pages.

**Part 1: Building the system.**

Let $f$ = setup fee and $r$ = per-page rate.

**1. Translate: Order #58.**

$$f + 120r = 33 \\tag{1}$$

**2. Translate: Order #96.**

$$f + 300r = 69 \\tag{2}$$

**Part 2: Solve.**

Subtract (1) from (2):

$$(f + 300r) - (f + 120r) = 69 - 33$$

$$180r = 36$$

$$r = 0.20$$

Substitute into (1):

$$f + 120(0.20) = 33$$

$$f + 24 = 33$$

$$f = 9$$

**Answer.** Setup fee = \\$9.00 | Rate = \\$0.20/page`,
  },
  {
    id: `math-5-11`,
    case_id: `MATH 5.11`,
    title: `Del Sol Food Truck`,
    context: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid \\$32.00 in total. Ben ordered 2 tacos and 5 burritos  -  and when he compared receipts with Ana afterward, he realized he had paid exactly \\$5.00 more than she did, even though neither of them knew the other's order size in advance.`,
    statements: [
      `Ben paid more for his 5 burritos alone than Ana paid for her entire order.`,
      `A burrito costs \\$2.50 more than a taco.`,
      `Had Ana ordered one fewer burrito, she would have paid less than \\$28.00.`,
      `Ben's total order price exceeds \\$40.00.`,
      `Buying 6 tacos and 6 burritos together would cost \\$57.00.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $y=6$. Ben's 5 burritos alone cost

$$5 \\times 6$$

$$= 30$$

Ana's entire order was \\$32.00. Then $30 < 32$.

So the statement is False.`,
      `**B.** → True

A mixed purchase is the linear combination of the recovered unit prices:

$$
C = n_x x + n_y y
$$

Using the recovered solution values $x=3.50$ and $y=6$ as inputs for this claim:

The gap is

$$6 - 3.50$$

$$= 2.50$$

The claim asserts

$$2.50$$

.

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**C.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $y=6$. One fewer burrito from Ana's \\$32.00 order leaves

$$32 - 6$$

$$= 26$$

Then $26 < 28$.

So the statement is True.`,
      `**D.** → False

Use the recovered values from the overview for this claim-specific check.

$$
37
$$

That recovered value is not the figure on the card.

So the statement is False.`,
      `**E.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=3.50$ and $y=6$ as inputs for this claim:

Six of each costs

$$6 \\times 3.50$$

$$= 21$$

$$6 \\times 6$$

$$= 36$$

$$21 + 36$$

$$= 57$$

The claim asserts

$$57.00$$

The computed figure and the claim agree.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 11,
    solution_overview: `The food truck sells tacos and burritos at fixed prices. Ana ordered 4 tacos and 3 burritos for \\$32.00. Ben ordered 2 tacos and 5 burritos and paid exactly \\$5.00 more than Ana.

**Part 1: Building the system.**

Let $x$ = taco price and $y$ = burrito price.

**1. Translate: Ana.**

$$4x + 3y = 32 \\tag{1}$$

**2. Translate: Ben.** He paid \\$5 more than Ana, so

$$2x + 5y = 32 + 5$$

$$2x + 5y = 37 \\tag{2}$$

**Part 2: Solve.**

Double (2):

$$4x + 10y = 74$$

Subtract (1):

$$(4x + 10y) - (4x + 3y) = 74 - 32$$

$$7y = 42$$

$$y = 6$$

Substitute into (1):

$$4x + 3(6) = 32$$

$$4x + 18 = 32$$

$$4x = 14$$

$$x = 3.50$$

**Answer.** Taco = \\$3.50 | Burrito = \\$6.00`,
  },
  {
    id: `math-5-12`,
    case_id: `MATH 5.12`,
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
      `Had 500 paperbacks been sold instead of 400, revenue would have been \\$1,200 higher.`,
      `A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.`,
      `The reported \\$8,540 total could also have come from selling 310 hardcovers alone.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the paperback price, and equation (1) is the \\$5 gap rule:

$$
x=12
$$

The claim asserts

$$
x=12
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the hardcover price:

$$
y=17
$$

The claim asserts

$$
y=18
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $x=12$. One hundred extra paperbacks add

$$100 \\times 12$$

$$= 1200$$

The claim asserts

$$1200$$

 higher.

So the statement is True.`,
      `**D.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=12$ and $y=17$ as inputs for this claim:

Three hardcovers and two paperbacks cost

$$3 \\times 17$$

$$= 51$$

$$2 \\times 12$$

$$= 24$$

$$51 + 24$$

$$= 75$$

The claim needs a total less than \\$75. We have equality.

So the statement is False.`,
      `**E.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $y=17$. Three hundred ten hardcovers alone would be

$$310 \\times 17$$

$$= 5270$$

The reported total is \\$8,540. Then $5270 \\ne 8540$.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 12,
    solution_overview: `Hardcover editions are priced exactly \\$5 above the paperback price. Combined revenue from 400 paperbacks and 220 hardcovers was \\$8,540. Staff headcount and the loyalty-member share are not used.

**Part 1: Building the system.**

Let $x$ = paperback price and $y$ = hardcover price.

**1. Translate: the \\$5 gap.**

$$y = x + 5 \\tag{1}$$

**2. Translate: combined revenue.**

$$400x + 220y = 8540 \\tag{2}$$

**Part 2: Solve.**

Substitute (1) into (2):

$$400x + 220(x + 5) = 8540$$

$$400x + 220x + 1100 = 8540$$

$$620x = 7440$$

$$x=\\frac{7440}{620}$$

$$=12$$

Then

$$y=12 + 5$$

$$=17$$

**Answer.** Paperback = \\$12.00 | Hardcover = \\$17.00`,
  },
  {
    id: `math-5-13`,
    case_id: `MATH 5.13`,
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
      `**A.** → False

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates Standard's base fee:

$$
x=38
$$

The claim names a different figure, so the displays do not agree.

So the statement is False.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read Standard's overage rate:

$$
y=3
$$

The claim asserts

$$
y=3
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=38$ and $y=3$ as inputs for this claim:

Ten GB of overage on Standard costs

$$10 \\times 3$$

$$= 30$$

$$38 + 30$$

$$= 68$$

The claim asserts

$$68.00$$

The computed figure and the claim agree.

So the statement is True.`,
      `**D.** → True

The overview recovered Standard as $x=38$ and $y=3$. Five GB of overage on Standard costs

$$5 \\times 3$$

$$= 15$$

$$38 + 15$$

$$= 53$$

Premium is \\$40 unlimited. Then $40 < 53$.

So the statement is True.`,
      `**E.** → True

Use the recovered values from the overview for this claim-specific check.

At 8 GB of overage, Basic costs

$$8 \\times 2$$

$$= 16$$

$$15 + 16$$

$$= 31$$

Standard's March bill at 8 GB is the recovered \\$62. Then $31 < 62$.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 13,
    solution_overview: `SkyLink advertises Basic at \\$15/month plus \\$2.00/GB overage, and Premium at \\$40/month unlimited. Standard's base fee and overage rate are recovered from two bills: 8 GB for \\$62.00 and 3 GB for \\$47.00.

**Part 1: Building the system.**

Let $x$ = Standard base fee and $y$ = Standard overage rate per GB.

**1. Translate: March.**

$$x + 8y = 62 \\tag{1}$$

**2. Translate: April.**

$$x + 3y = 47 \\tag{2}$$

**Part 2: Solve.**

Subtract (2) from (1):

$$(x + 8y) - (x + 3y) = 62 - 47$$

$$5y = 15$$

$$y = 3$$

Substitute into (2):

$$x + 3(3) = 47$$

$$x + 9 = 47$$

$$x = 38$$

**Answer.** Standard base = \\$38.00 | Overage = \\$3.00/GB`,
  },
  {
    id: `math-5-14`,
    case_id: `MATH 5.14`,
    title: `Lakeview Inn Booking Confirmations`,
    context: `LAKEVIEW INN  -  Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.`,
    tables_markdown: `| Confirmation | Standard Rooms | Suites | Total Charged (incl. 8% tax) |
| --- | --- | --- | --- |
| Weekend 1 | 10 | 4 | \\$2,419.20 |
| Weekend 2 | 7 | 9 | \\$3,099.60 |`,
    statements: [
      `After removing the occupancy tax, Weekend 1's booking revenue was \\$2,240.00.`,
      `A Suite costs \\$200 more per night than a Standard room.`,
      `Booking 6 Standard rooms for one night costs less than booking 4 Suites.`,
      `Including the 8% tax, a single Suite night costs \\$226.80.`,
      `Had Weekend 2 booked 10 Suites instead of 9, pre-tax revenue would have risen by \\$210.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

A transfer shifts one recovered holding into the other by the stated amount:

$$
x' = x - t,\\quad y'
$$

$$
= y + t
$$

Substitute the stem numbers recovered in the overview:

$$
2240
$$

That computed value matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**B.** → False

A mixed purchase is the linear combination of the recovered unit prices:

$$
C = n_x x + n_y y
$$

Using the recovered solution values $x=140$ and $y=210$ as inputs for this claim:

The Suite premium is

$$210 - 140$$

$$= 70$$

The claim asserts

$$200$$

 more.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is False.`,
      `**C.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=140$ and $y=210$ as inputs for this claim:

Six Standard rooms cost

$$6 \\times 140$$

$$= 840$$

Four Suites cost

$$4 \\times 210$$

$$= 840$$

The two bookings match, so six Standard rooms are not cheaper.

So the statement is False.`,
      `**D.** → True

The shared elimination already recovered the pre-tax Suite rate. State that value in its own display before testing the claim:

$$
y=210
$$

Including $8\\%$ tax:

$$210 \\times 1.08$$

$$= 226.80$$

Compare the computed value with the claim (\\$226.80). The two sides agree.

So the statement is True.`,
      `**E.** → True

Compare the overview’s recovered unknown with the figure the claim prints on the card.

Read off the overview value for the pre-tax Suite rate:

$$
y=210
$$

The claim asserts

$$
y=210
$$

Those two displays agree.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 14,
    solution_overview: `Lakeview Inn adds an 8% occupancy tax to every booking. Weekend 1 charged \\$2,419.20 for 10 Standard rooms and 4 Suites. Weekend 2 charged \\$3,099.60 for 7 Standard rooms and 9 Suites.

**Part 1: Building the system.**

Let $x$ = pre-tax Standard rate and $y$ = pre-tax Suite rate. Divide each billed total by $1.08$ before writing the equations.

Weekend 1 pre-tax:

$$\\frac{2419.20}{1.08} = 2240$$

$$10x + 4y = 2240 \\tag{1}$$

Weekend 2 pre-tax:

$$\\frac{3099.60}{1.08} = 2870$$

$$7x + 9y = 2870 \\tag{2}$$

**Part 2: Solve.**

Halve (1):

$$5x + 2y = 1120$$

$$2y = 1120 - 5x$$

Double (2):

$$14x + 18y = 5740$$

Substitute $18y = 9(1120 - 5x)$:

$$14x + 9(1120 - 5x) = 5740$$

$$14x + 10080 - 45x = 5740$$

$$-31x = -4340$$

$$x=\\frac{4340}{31}$$

$$=140$$

Then

$$2y = 1120 - 5(140)$$

$$2y = 420$$

$$y = 210$$

**Answer.** Standard = \\$140.00/night pre-tax | Suite = \\$210.00/night pre-tax`,
  },
  {
    id: `math-5-15`,
    case_id: `MATH 5.15`,
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
      `If March's forecast quantities were valued at the actual January/February unit costs, the result would be \\$4,700.`,
      `The combined actual inventory value recorded for January and February is \\$6,810.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates Component A's unit cost:

$$
x=12
$$

The claim asserts

$$
x=12
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read Component B's unit cost:

$$
y=15
$$

The claim asserts

$$
y=18
$$

Those two displays do not agree.

So the statement is False.`,
      `**C.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=12$ and $y=15$ as inputs for this claim:

March's forecast quantities at those actual costs would be

$$200 \\times 12$$

$$= 2400$$

$$100 \\times 15$$

$$= 1500$$

$$2400 + 1500$$

$$= 3900$$

The March forecast total is \\$4,700. Then $4700 > 3900$.

The computed figure matches the claim.

So the statement is True.`,
      `**D.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=12$ and $y=15$ as inputs for this claim:

March's forecast quantities at those actual costs would be

$$200 \\times 12$$

$$= 2400$$

$$100 \\times 15$$

$$= 1500$$

$$2400 + 1500$$

$$= 3900$$

The claim asserts

$$4700$$

. Then $3900 \\ne 4700$.

The computed figure does not match the claim.

So the statement is False.`,
      `**E.** → True

Use the recovered values from the overview for this claim-specific check.

January's actual value is \\$3,150 and February's is \\$3,660:

$$3150 + 3660$$

$$= 6810$$

The claim asserts

$$6810$$

.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 15,
    solution_overview: `January and February report actual inventory values. March is a forecast and is not used to recover unit costs.

**Part 1: Building the system.**

Let $x$ = Component A unit cost and $y$ = Component B unit cost.

**1. Translate: January (actual).**

$$150x + 90y = 3150 \\tag{1}$$

**2. Translate: February (actual).**

$$130x + 140y = 3660 \\tag{2}$$

**Part 2: Solve.**

Divide (1) by $30$ and (2) by $10$:

$$5x + 3y = 105$$

$$13x + 14y = 366$$

Multiply the first by $14$ and the second by $3$:

$$70x + 42y = 1470$$

$$39x + 42y = 1098$$

Subtract:

$$(70x + 42y) - (39x + 42y) = 1470 - 1098$$

$$31x = 372$$

$$x = 12$$

Then

$$5(12) + 3y = 105$$

$$60 + 3y = 105$$

$$3y = 45$$

$$y = 15$$

**Answer.** Component A = \\$12.00/unit | Component B = \\$15.00/unit`,
  },
  {
    id: `math-5-16`,
    case_id: `MATH 5.16`,
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
      `**A.** → False

Use the recovered values from the overview for this claim-specific check.

$$
y=24
$$

The claim asserts

$$
y=1.5
$$

Those two displays do not agree.

So the statement is False.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the regular hourly wage:

$$
x=14
$$

The claim asserts

$$
x=14
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → True

The overview recovered actual overtime $y=24$ and contract overtime \\$21. Worker 2 had 2 overtime hours, so the overpayment is

$$2 \\times (24 - 21)$$

$$= 6$$

Compare the computed value with the claim (\\$6.00). The two sides agree.

So the statement is True.`,
      `**D.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=14$ and $y=24$ as inputs for this claim:

Forty regular hours plus 4 overtime hours at those actual rates:

$$40 \\times 14$$

$$= 560$$

$$4 \\times 24$$

$$= 96$$

$$560 + 96$$

$$= 656$$

The claim asserts

$$656$$

.

So the statement is True.`,
      `**E.** → True

The overview recovered $x=14$ and contract overtime \\$21. Forty regular hours plus 4 overtime hours under the contract rule:

$$40 \\times 14$$

$$= 560$$

$$4 \\times 21$$

$$= 84$$

$$560 + 84$$

$$= 644$$

Compare the computed value with the claim (\\$644). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 16,
    solution_overview: `Sunrise Staffing's contract requires overtime at $1.5$ times the regular wage. Two workers each completed 40 regular hours: Worker 1 also had 6 overtime hours for \\$704, and Worker 2 had 2 overtime hours for \\$608.

**Part 1: Building the system.**

Let $x$ = regular hourly wage actually paid and $y$ = overtime rate actually paid.

**1. Translate: Worker 1.**

$$40x + 6y = 704 \\tag{1}$$

**2. Translate: Worker 2.**

$$40x + 2y = 608 \\tag{2}$$

**Part 2: Solve.**

Subtract (2) from (1):

$$(40x + 6y) - (40x + 2y) = 704 - 608$$

$$4y = 96$$

$$y = 24$$

Substitute into (2):

$$40x + 2(24) = 608$$

$$40x + 48 = 608$$

$$40x = 560$$

$$x = 14$$

The contract overtime rate is then

$$1.5 \\times 14 = 21$$

**Answer.** Regular wage = \\$14.00/hr | Overtime actually paid = \\$24.00/hr | Contract overtime = \\$21.00/hr`,
  },
  {
    id: `math-5-17`,
    case_id: `MATH 5.17`,
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
      `**A.** → False

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the fixed monthly charge:

$$
x=15
$$

The claim asserts

$$
x=18.00
$$

Those two displays do not agree.

So the statement is False.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

From the overview solve, read the rate per cubic metre:

$$
y=2
$$

The claim asserts

$$
y=2
$$

Those two displays agree.

So the statement is True.`,
      `**C.** → True

A transfer shifts one recovered holding into the other by the stated amount:

$$
x' = x - t,\\quad y'
$$

$$
= y + t
$$

Substitute the stem numbers recovered in the overview:

$$
y = 51
$$

That computed value matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**D.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=15$ and $y=2$ as inputs for this claim:

Forty cubic metres would be billed

$$40 \\times 2$$

$$= 80$$

$$15 + 80$$

$$= 95$$

The claim asserts

$$85.00$$

The computed figure does not match the claim.

So the statement is False.`,
      `**E.** → True

Use the recovered values from the overview for this claim-specific check.

June's printed bill is \\$65.00. A 10% late penalty on that total is

$$65 \\times 1.10$$

$$= 71.50$$

The claim asserts

$$71.50$$

.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 17,
    solution_overview: `May used 18 m$^3$ and was billed \\$56.10 after a 10% late penalty on the whole bill. June used 25 m$^3$ with no penalty and was billed \\$65.00. The office claims a \\$18.00 fixed charge and \\$1.85 per m$^3$.

**Part 1: Building the system.**

Let $x$ = fixed monthly charge and $y$ = rate per cubic metre. Undo May's 10% penalty before writing the equation.

May without penalty:

$$\\frac{56.10}{1.10} = 51$$

$$x + 18y = 51 \\tag{1}$$

June:

$$x + 25y = 65 \\tag{2}$$

**Part 2: Solve.**

Subtract (1) from (2):

$$(x + 25y) - (x + 18y) = 65 - 51$$

$$7y = 14$$

$$y = 2$$

Substitute into (1):

$$x + 18(2) = 51$$

$$x + 36 = 51$$

$$x = 15$$

**Answer.** Fixed charge = \\$15.00 | Rate = \\$2.00/m$^3$`,
  },
  {
    id: `math-5-18`,
    case_id: `MATH 5.18`,
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
      `**A.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $C(d)=6+d$ and $M(d)=6+1.5d$ as inputs for this claim:

At $10$ km:

$$
C(10) = 6 + 10
$$

$$
= 16
$$

$$1.5 \\times 10$$

$$= 15$$

$$
M(10) = 6 + 15
$$

$$
= 21
$$

Then $16 < 21$.

The computed figure matches the claim.

So the statement is True.`,
      `**B.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the first recovered coordinate:

$$
x_1 = 6
$$

That computed value matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**C.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $C(d)=6+d$ and $M(d)=6+1.5d$ as inputs for this claim:

At $3$ km, which is under $4$ km:

$$
C(3) = 6 + 3
$$

$$
= 9
$$

$$1.5 \\times 3$$

$$= 4.50$$

$$
M(3) = 6 + 4.50
$$

$$
= 10.50
$$

Then $10.50 > 9$, so MetroX is not cheaper.

The computed figure does not match the claim.

So the statement is False.`,
      `**D.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $C(d)=6+d$. At $30$ km:

$$
C(30) = 6 + 30
$$

$$
= 36
$$

The claim asserts

$$36.00$$

.

So the statement is True.`,
      `**E.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $C(d)=6+d$. A 5 km CityCab ride costs

$$
C(5) = 6 + 5
$$

$$
= 11
$$

The stem already prices a 5 km MetroX ride at \\$13.50. Then $11 \\ne 13.50$.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 18,
    solution_overview: `An 8 km CityCab ride cost \\$14.00, and a 20 km CityCab ride cost \\$12.00 more than that. A 5 km MetroX ride cost \\$13.50, and a 15 km MetroX ride cost \\$15.00 more.

**Part 1: Building the system.**

Let $x_1$, $y_1$ be CityCab's base fare and per-km rate, and $x_2$, $y_2$ be MetroX's.

CityCab, converting the \\$12 gap into a 20 km fare of \\$26:

$$x_1 + 8y_1 = 14$$

$$x_1 + 20y_1 = 26$$

MetroX, converting the \\$15 gap into a 15 km fare of \\$28.50:

$$x_2 + 5y_2 = 13.50$$

$$x_2 + 15y_2 = 28.50$$

**Part 2: Solve.**

CityCab, subtract:

$$(x_1 + 20y_1) - (x_1 + 8y_1) = 26 - 14$$

$$12y_1 = 12$$

$$y_1 = 1$$

$$x_1 + 8(1) = 14$$

$$x_1 = 6$$

MetroX, subtract:

$$(x_2 + 15y_2) - (x_2 + 5y_2) = 28.50 - 13.50$$

$$10y_2 = 15$$

$$y_2 = 1.5$$

$$x_2 + 5(1.5) = 13.50$$

$$x_2 = 6$$

The recovered fare rules are

$$C(d) = 6 + d$$

$$M(d) = 6 + 1.5d$$

**Answer.** CityCab: base \\$6.00, \\$1.00/km | MetroX: base \\$6.00, \\$1.50/km`,
  },
  {
    id: `math-5-19`,
    case_id: `MATH 5.19`,
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
      `**A.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the first recovered coordinate:

$$
y_A = 30 - \\frac{4}{3}x_A
$$

Substitute the stem numbers:

$$
x_A = 9
$$

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**B.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the second recovered coordinate:

$$
y_B = \\frac{92 - 44}{3}
$$

$$
= 16
$$

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**C.** → True

The overview recovered Vendor A at $x_A=9$, $y_A=18$ and Vendor B at $x_B=11$, $y_B=16$. For 40 of X and 30 of Y, Vendor A costs

$$40 \\times 9$$

$$= 360$$

$$30 \\times 18$$

$$= 540$$

$$360 + 540$$

$$= 900$$

Vendor B costs

$$40 \\times 11$$

$$= 440$$

$$30 \\times 16$$

$$= 480$$

$$440 + 480$$

$$= 920$$

Then $900 < 920$.

So the statement is True.`,
      `**D.** → False

The overview recovered Vendor A at $x_A=9$, $y_A=18$ and Vendor B at $x_B=11$, $y_B=16$. For the upcoming 40 of X and 30 of Y, Vendor A costs

$$40 \\times 9$$

$$= 360$$

$$30 \\times 18$$

$$= 540$$

$$360 + 540$$

$$= 900$$

Vendor B costs

$$40 \\times 11$$

$$= 440$$

$$30 \\times 16$$

$$= 480$$

$$440 + 480$$

$$= 920$$

$$920 - 900$$

$$= 20$$

Switching to Vendor B raises the cost by $20$, it does not reduce it.

So the statement is False.`,
      `**E.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $y_A=18$ and $y_B=16$ as inputs for this claim:

Sixty units of Y only:

$$60 \\times 18$$

$$= 1080$$

$$60 \\times 16$$

$$= 960$$

Then $960 < 1080$.

The computed figure matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 19,
    solution_overview: `Bramble needs 40 units of X and 30 units of Y next month. Each vendor quotes two bundled totals, so each vendor's unit prices are recovered separately.

**Part 1: Building the system.**

Let $x_A$, $y_A$ be Vendor A's prices and $x_B$, $y_B$ be Vendor B's.

Vendor A:

$$20x_A + 15y_A = 450$$

$$25x_A + 12y_A = 441$$

Vendor B:

$$20x_B + 15y_B = 460$$

$$25x_B + 12y_B = 467$$

**Part 2: Solve.**

Vendor A, divide the first quote by $5$:

$$4x_A + 3y_A = 90$$

$$y_A = 30 - \\frac{4}{3}x_A$$

Substitute into the second quote:

$$25x_A + 12\\left(30 - \\frac{4}{3}x_A\\right) = 441$$

$$25x_A + 360 - 16x_A = 441$$

$$9x_A = 81$$

$$x_A = 9$$

$$y_A=30 - 12$$

$$=18$$

Vendor B, divide the first quote by $5$:

$$4x_B + 3y_B = 92$$

Substitute into the second quote:

$$25x_B + 12 \\cdot \\frac{92 - 4x_B}{3} = 467$$

$$75x_B + 1104 - 48x_B = 1401$$

$$27x_B = 297$$

$$x_B = 11$$

$$y_B=\\frac{92 - 44}{3}$$

$$=16$$

**Answer.** Vendor A: X = \\$9, Y = \\$18 | Vendor B: X = \\$11, Y = \\$16`,
  },
  {
    id: `math-5-20`,
    case_id: `MATH 5.20`,
    title: `Alpha & Beta Holdings, Quarterly Dashboard`,
    context: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned \\$27,200 in Q1 revenue, and Beta earned exactly \\$1,000 more than Alpha. Alpha sold 150 units of P and 80 subscriptions of Q; Beta sold 100 units of P and 130 subscriptions of Q. (Alpha's headcount grew 8% year-on-year versus Beta's 6%  -  a staffing detail with no bearing on pricing.)`,
    statements: [
      `Product P is priced at \\$50 and Service Q at \\$70, identically for both companies.`,
      `Beta generated more Q1 revenue than Alpha.`,
      `If Alpha raises Product P's price by 10% next quarter, its total revenue would increase by exactly 10%.`,
      `Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.`,
      `Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the first recovered coordinate:

$$
x=\\frac{\\Delta_x}{\\Delta}
$$

Substitute the stem numbers:

$$
x = 50
$$

That computed value matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**B.** → True

Elimination on two independent linear equations recovers a unique value for each unknown. The claim names the first recovered coordinate:

$$
x=\\frac{\\Delta_x}{\\Delta}
$$

Substitute the stem numbers:

$$
A = 27200 - 14100
$$

$$
= 13100
$$

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**C.** → False

The overview recovered Alpha's revenue $A=13100$ with Product P at $x=50$. Product P currently contributes

$$150 \\times 50$$

$$= 7500$$

A $10\\%$ increase on Product P only adds

$$0.10 \\times 7500$$

$$= 750$$

Alpha's new total would be

$$13100 + 750$$

$$= 13850$$

A $10\\%$ increase of the whole revenue would be

$$0.10 \\times 13100$$

$$= 1310$$

The increase is $750$, not $1310$.

So the statement is False.`,
      `**D.** → False

The overview recovered Alpha at $A=13100$ with $x=50$ and $y=70$. After a $10\\%$ increase on Product P the new P price is $55$:

$$150 \\times 55$$

$$= 8250$$

$$80 \\times 70$$

$$= 5600$$

$$8250 + 5600$$

$$= 13850$$

Beta's recovered Q1 revenue is $14100$. Then $13850 < 14100$.

So the statement is False.`,
      `**E.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x=50$ and $y=70$ as inputs for this claim:

Beta's Service Q revenue is

$$130 \\times 70$$

$$= 9100$$

Alpha's Product P revenue is

$$150 \\times 50$$

$$= 7500$$

Then $9100 > 7500$.

The computed figure matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 20,
    solution_overview: `Alpha and Beta sell Product P and Service Q at identical prices. Combined Q1 revenue was \\$27,200, and Beta earned \\$1,000 more than Alpha. Alpha sold 150 units of P and 80 of Q; Beta sold 100 units of P and 130 of Q.

**Part 1: Building the system.**

Let $A$ and $B$ be Alpha's and Beta's Q1 revenue, and let $x$ and $y$ be the prices of P and Q.

**1. Translate: the revenue split.**

$$A + B = 27200$$

$$B - A = 1000$$

**2. Translate: unit sales.** After the split is known,

$$150x + 80y = A$$

$$100x + 130y = B$$

**Part 2: Solve.**

Add the split equations:

$$(A + B) + (B - A) = 27200 + 1000$$

$$2B = 28200$$

$$B = 14100$$

$$A=27200 - 14100$$

$$=13100$$

The price system is then

$$150x + 80y = 13100$$

$$100x + 130y = 14100$$

Divide by $10$:

$$15x + 8y = 1310$$

$$10x + 13y = 1410$$

Double the first and triple the second:

$$30x + 16y = 2620$$

$$30x + 39y = 4230$$

Subtract:

$$23y = 1610$$

$$y = 70$$

Then

$$10x + 13(70) = 1410$$

$$10x + 910 = 1410$$

$$10x = 500$$

$$x = 50$$

**Answer.** Product P = \\$50 | Service Q = \\$70 | Alpha = \\$13,100 | Beta = \\$14,100`,
  },
  {
    id: `math-5-21`,
    case_id: `MATH 5.21`,
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
      `**A.** → False

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the signup fee members are actually charged:

$$
x = 38
$$

The claim asserts

$$
x=30
$$

Those two displays do not agree.

So the statement is False.`,
      `**B.** → True

The shared elimination already recovered the actual monthly rate. State that value in its own display before testing the claim:

$$
y = 41
$$

The flyer advertised \\$45 per month.

$$41 < 45$$

Members pay less per month than the flyer states.

So the statement is True.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

Maria actually paid \\$284 over 6 months. The flyer would have charged a \\$30 signup plus \\$45 per month:

$$6 \\times 45$$

$$= 270$$

$$30 + 270$$

$$= 300$$

$$284 < 300$$

Her actual total does not exceed the flyer figure.

So the statement is False.`,
      `**D.** → True

Use the recovered values from the overview for this claim-specific check.

Jason's printed total after his 10th payment is \\$448.

$$448 > 400$$

He paid more than \\$400.

So the statement is True.`,
      `**E.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

This member pays no signup fee, only the recovered monthly rate $y = 41$ for 12 months:

$$12 \\times 41$$

$$= 492$$

The claim asserts

$$492$$

.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 21,
    solution_overview: `FITZONE GYM advertises a \\$30 signup fee and then \\$45 per month. Maria had paid \\$284 after her 6th monthly payment. Jason had paid \\$448 after his 10th.

**Part 1: Building the system.**

Let $x$ = the signup fee actually charged, $y$ = the actual monthly rate. The flyer's \\$30 and \\$45 are claims to check, not values to plug in.

**1. Translate: Maria.**

$$x + 6y = 284 \\tag{1}$$

**2. Translate: Jason.**

$$x + 10y = 448 \\tag{2}$$

**Part 2: Solve.**

Subtract (2) minus (1):

$$
(x + 10y) - (x + 6y) = 448 - 284
$$

$$
4y = 164 \\Rightarrow y = 41
$$

Substitute into (1):

$$
x + 6(41) = 284 \\Rightarrow x + 246 = 284 \\Rightarrow x = 38
$$

**Answer.** Signup fee = \\$38.00 | Monthly rate = \\$41.00/month`,
  },
  {
    id: `math-5-22`,
    case_id: `MATH 5.22`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the Basic monthly price:

$$
x = 19
$$

The claim asserts

$$
x = 19
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered the Premium monthly price. State that value in its own display before testing the claim:

$$
y = 31
$$

The claim writes \\$35.

$$31 \\ne 35.$$

So the statement is False.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

Household 1 billed \\$169. Household 2 billed \\$255. Double Household 1:

$$2 \\times 169$$

$$= 338$$

$$255 < 338$$

Household 2 is not more than double Household 1.

So the statement is False.`,
      `**D.** → False

The shared solve is done; only this claim’s comparison remains.

Equal cost for $n$ months of only Basic and $n$ months of only Premium would require $nx = ny$ with $n > 0$, hence $x = y$. The overview recovered $x = 19$ and $y = 31$.

$$19 \\ne 31$$

The two flat plans never match for a positive run of months.

So the statement is False.`,
      `**E.** → True

This mix is 5 months of Basic and 5 months of Premium at the recovered prices $x = 19$ and $y = 31$:

$$5 \\times 19$$

$$= 95$$

$$5 \\times 31$$

$$= 155$$

$$95 + 155$$

$$= 250$$

Compare the computed value with the claim (\\$250). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 22,
    solution_overview: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Two mixed household bills are on the page.

**Part 1: Building the system.**

Let $x$ = Basic monthly price, $y$ = Premium monthly price.

**1. Translate: Household 1.**

$$4x + 3y = 169 \\tag{1}$$

**2. Translate: Household 2.**

$$2x + 7y = 255 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 7 and (2) by 3:

$$28x + 21y = 1183, \\qquad 6x + 21y = 765$$

Subtract:

$$
(28x + 21y) - (6x + 21y) = 1183 - 765 \\Rightarrow 22x = 418 \\Rightarrow x = 19
$$

Substitute into (1):

$$
4(19) + 3y = 169 \\Rightarrow 76 + 3y = 169 \\Rightarrow y = 31
$$

**Answer.** Basic = \\$19.00/month | Premium = \\$31.00/month`,
  },
  {
    id: `math-5-23`,
    case_id: `MATH 5.23`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the apple price per pound:

$$
x = 4.80
$$

The claim asserts

$$
x = 4.80
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $x = 4.80$ per pound of apples and $y = 6$ per carton of milk.

$$6 > 4.80$$

Milk is the dearer unit.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Five pounds of apples and four cartons of milk, at the recovered prices:

$$5 \\times 4.80$$

$$= 24$$

$$4 \\times 6$$

$$= 24$$

$$24 = 24$$

The two baskets match.

So the statement is True.`,
      `**D.** → False

For this claim, use the recovered values from the overview for this claim-specific check.

Neither printed receipt received the 5% loyalty discount. Applied to Receipt 1's \\$50:

$$50 \\times 0.95$$

$$= 47.50$$

$$47.50 > 47$$

The discounted total is not less than \\$47.

So the statement is False.`,
      `**E.** → False

Next, use the recovered values from the overview for this claim-specific check.

Ten pounds of apples and two cartons of milk, at the recovered prices:

$$10 \\times 4.80$$

$$= 48$$

$$2 \\times 6$$

$$= 12$$

$$48 + 12$$

$$= 60$$

The mix equals \\$60, so it is not more than \\$60.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 23,
    solution_overview: `Organic apples and almond milk have updated prices. Neither receipt belongs to a loyalty member, so the 5% loyalty note does not apply. Bread is \\$3.60 and eggs are \\$4.40.

**Part 1: Building the system.**

Let $x$ = price per lb of organic apples, $y$ = price per carton of almond milk. Peel the known items off each total first.

**1. Receipt 1 leftover.** $50.00 - 3.60 - 4.40 = 42.00$:

$$5x + 3y = 42.00 \\tag{1}$$

**2. Receipt 2 leftover.** $43.20 - 3.60 = 39.60$:

$$2x + 5y = 39.60 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 5 and (2) by 3:

$$25x + 15y = 210, \\qquad 6x + 15y = 118.80$$

Subtract:

$$
(25x + 15y) - (6x + 15y) = 210 - 118.80 \\Rightarrow 19x = 91.20 \\Rightarrow x = 4.80
$$

Substitute into (1):

$$
5(4.80) + 3y = 42.00 \\Rightarrow 24.00 + 3y = 42.00 \\Rightarrow y = 6.00
$$

**Answer.** Organic apples = \\$4.80/lb | Almond milk = \\$6.00/carton`,
  },
  {
    id: `math-5-24`,
    case_id: `MATH 5.24`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the fixed connection fee:

$$
x = 33
$$

The claim asserts

$$
x = 33
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered the standard-plan rate. State that value in its own display before testing the claim:

$$
y = 0.21
$$

Customer service claimed \\$0.24 per unit.

$$0.21 \\ne 0.24.$$

So the statement is False.`,
      `**C.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The standard plan at 280 units uses the recovered fee $x = 33$ and rate $y = 0.21$:

$$280 \\times 0.21$$

$$= 58.80$$

$$33 + 58.80$$

$$= 91.80$$

$$91.80 < 95.$$

So the statement is True.`,
      `**D.** → False

The Solar Offset Plan is $0.29u$ with no connection fee. The standard plan is $33 + 0.21u$. Set them equal:

$$33 + 0.21u = 0.29u$$

$$33 = 0.08u$$

$$\$$

$$\Rightarrow u$$

$$
= 412.5
$$

For $u > 412.5$ the standard plan is cheaper, so Solar is not cheaper at every positive usage.

So the statement is False.`,
      `**E.** → False

Read the recovered pair, then run the arithmetic the claim asks for.

At 500 units, Solar and the standard plan are

$$0.29 \\times 500$$

$$= 145$$

$$33 + 0.21 \\times 500$$

$$= 33 + 105$$

$$
= 138
$$

$$145 > 138$$

Solar is not cheaper at 500 units.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 24,
    solution_overview: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is \\$0.24/unit. Two standard-plan bills are on the page.

**Part 1: Building the system.**

Let $x$ = fixed connection fee, $y$ = rate per unit on the standard plan. Treat \\$0.24/unit as a claim to check.

**1. Translate: Bill 1.**

$$x + 240y = 83.40 \\tag{1}$$

**2. Translate: Bill 2.**

$$x + 380y = 112.80 \\tag{2}$$

**Part 2: Solve.**

Subtract (2) minus (1):

$$
(x + 380y) - (x + 240y) = 112.80 - 83.40
$$

$$
140y = 29.40 \\Rightarrow y = 0.21
$$

Substitute into (1):

$$
x + 240(0.21) = 83.40 \\Rightarrow x + 50.40 = 83.40 \\Rightarrow x = 33.00
$$

**Answer.** Fixed fee = \\$33.00 | Rate = \\$0.21/unit`,
  },
  {
    id: `math-5-25`,
    case_id: `MATH 5.25`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the pasta price:

$$
x = 19
$$

The claim asserts

$$
x = 19
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $x = 19$ for pasta and $y = 15$ for an appetizer.

$$15 < 19$$

An appetizer costs less than a pasta dish.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Table 8's food subtotal, after stripping the 10% peak charge, is \\$200. Table 5's total is \\$174.

$$200 - 174$$

$$= 26$$

The pre-service-charge gap is exactly \\$26.

So the statement is True.`,
      `**D.** → True

Use the recovered values from the overview for this claim-specific check.

Table 5's off-peak total is \\$174. Adding the 10% peak-hour service fee:

$$174 \\times 1.10$$

$$= 191.40$$

The claim asserts

$$191.40$$

.

So the statement is True.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Four pasta dishes and four appetizers at the recovered prices, then the 10% service charge:

$$4 \\times 19$$

$$= 76$$

$$4 \\times 15$$

$$= 60$$

$$76 + 60$$

$$= 136$$

$$136 \\times 1.10$$

$$= 149.60$$

$$149.60 < 150.$$

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 25,
    solution_overview: `Trattoria Bella sells pasta and appetizers at fixed prices. Off-peak tables have no service fee. Peak tables already include a 10% service charge in the printed total. Table 5 (off-peak) is \\$174.00 for 6 pasta and 4 appetizers. Table 8 (peak) came to \\$46.00 more than Table 5.

**Part 1: Building the system.**

Let $x$ = price of one pasta dish, $y$ = price of one appetizer. Table 8's printed total is $174 + 46 = 220$, and that figure already includes the 10% peak charge, so the food subtotal is $\\frac{220}{1.10} = 200$.

**1. Translate: Table 5.**

$$6x + 4y = 174.00 \\tag{1}$$

**2. Translate: Table 8 food subtotal.**

$$5x + 7y = 200.00 \\tag{2}$$

**Part 2: Solve.**

Divide (1) by 2: $3x + 2y = 87$. Multiply by 7: $21x + 14y = 609$. Multiply (2) by 2: $10x + 14y = 400$. Subtract:

$$
(21x + 14y) - (10x + 14y) = 609 - 400 \\Rightarrow 11x = 209 \\Rightarrow x = 19
$$

Substitute into $3x + 2y = 87$:

$$
3(19) + 2y = 87 \\Rightarrow 57 + 2y = 87 \\Rightarrow y = 15
$$

**Answer.** Pasta dish = \\$19.00 | Appetizer = \\$15.00`,
  },
  {
    id: `math-5-26`,
    case_id: `MATH 5.26`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates Item M's unit cost:

$$
x = 21
$$

The claim asserts

$$
x = 21
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered Item N's unit cost. State that value in its own display before testing the claim:

$$
y = 27
$$

The claim writes \\$30.

$$27 \\ne 30.$$

So the statement is False.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

Shipment 1 moved $110 + 80 = 190$ units for \\$4,470. Shipment 2 moved $70 + 150 = 220$ units for \\$5,520.

$$\\frac{4470}{190}$$

$$= 23.53$$

$$\\frac{5520}{220}$$

$$= 25.09$$

The per-unit averages are not equal.

So the statement is False.`,
      `**D.** → True

Use the recovered values from the overview for this claim-specific check.

One hundred fifty units of Item N at the recovered $y = 27$:

$$150 \\times 27$$

$$= 4050$$

The claim asserts

$$4050$$

.

So the statement is True.`,
      `**E.** → False

The recovered prices come from unit counts, not from the logged weights. Shipment 1 weighs

$$110 \\times 2.4$$

$$= 264$$

$$80 \\times 1.7$$

$$= 136$$

$$264 + 136$$

$$= 400$$

kilograms, and Shipment 2 weighs

$$70 \\times 2.4$$

$$= 168$$

$$150 \\times 1.7$$

$$= 255$$

$$168 + 255$$

$$= 423$$

kilograms. Those weights do not set the dollar totals; the cheaper mix of Item M does.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 26,
    solution_overview: `Meridian Distribution ships Item M and Item N. Unit weights are logged, but only item counts and shipment cost determine the unit prices.

**Part 1: Building the system.**

Let $x$ = cost per unit of Item M, $y$ = cost per unit of Item N.

**1. Translate: Shipment 1.**

$$110x + 80y = 4470 \\tag{1}$$

**2. Translate: Shipment 2.**

$$70x + 150y = 5520 \\tag{2}$$

**Part 2: Solve.**

Divide by 10: $11x + 8y = 447$ and $7x + 15y = 552$. Multiply by 15 and 8:

$$165x + 120y = 6705, \\qquad 56x + 120y = 4416$$

Subtract:

$$
(165x + 120y) - (56x + 120y) = 6705 - 4416 \\Rightarrow 109x = 2289 \\Rightarrow x = 21
$$

Substitute into $11x + 8y = 447$:

$$
11(21) + 8y = 447 \\Rightarrow 231 + 8y = 447 \\Rightarrow y = 27
$$

**Answer.** Item M = \\$21.00/unit | Item N = \\$27.00/unit`,
  },
  {
    id: `math-5-27`,
    case_id: `MATH 5.27`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the Standard unit price:

$$
x = 29
$$

The claim asserts

$$
x = 29
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered the Premium unit price. State that value in its own display before testing the claim:

$$
y = 44
$$

The claim writes \\$50.

$$44 \\ne 50.$$

So the statement is False.`,
      `**C.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The overview expanded Job 1 to 14 Standard units and 35 Premium units. The claim is those same counts.

So the statement is True.`,
      `**D.** → True

Use the recovered values from the overview for this claim-specific check.

Job 1's Premium slice at the recovered $y = 44$, compared with Job 2's whole total of \\$1,301:

$$35 \\times 44$$

$$= 1540$$

$$1540 > 1301.$$

So the statement is True.`,
      `**E.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The new quotation is 8 Standard and 19 Premium at the recovered prices:

$$8 \\times 29$$

$$= 232$$

$$19 \\times 44$$

$$= 836$$

$$232 + 836$$

$$= 1068$$

The quoted \\$1,068 matches.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 27,
    solution_overview: `Green Horizons prices Standard and Premium planting. Job 1 is invoiced in bundles (each bundle is 2 Standard + 5 Premium). Job 2 lists individual units: 13 Standard + 21 Premium for \\$1,301. Job 1: 7 bundles for \\$1,946.

**Part 1: Building the system.**

Let $x$ = price per Standard unit, $y$ = price per Premium unit. Expand Job 1's 7 bundles first: $7 \\times 2 = 14$ Standard and $7 \\times 5 = 35$ Premium.

**1. Translate: Job 1, expanded.**

$$14x + 35y = 1946 \\tag{1}$$

**2. Translate: Job 2.**

$$13x + 21y = 1301 \\tag{2}$$

**Part 2: Solve.**

Divide (1) by 7: $2x + 5y = 278$. Multiply by 21, and multiply (2) by 5:

$$42x + 105y = 5838, \\qquad 65x + 105y = 6505$$

Subtract:

$$
(65x + 105y) - (42x + 105y) = 6505 - 5838 \\Rightarrow 23x = 667 \\Rightarrow x = 29
$$

Substitute into $2x + 5y = 278$:

$$
2(29) + 5y = 278 \\Rightarrow 58 + 5y = 278 \\Rightarrow y = 44
$$

**Answer.** Standard = \\$29.00/unit | Premium = \\$44.00/unit`,
  },
  {
    id: `math-5-28`,
    case_id: `MATH 5.28`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates the per diem:

$$
x = 55
$$

The claim asserts

$$
x = 55
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered the mileage rate. State that value in its own display before testing the claim:

$$
y = 0.32
$$

Finance claimed \\$0.40 per mile.

$$0.32 \\ne 0.40.$$

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Seven meal days at the recovered per diem $x = 55$, before any mileage:

$$7 \\times 55$$

$$= 385$$

$$385 > 120$$

Report 3's \\$120 cannot cover even the meal days.

So the statement is True.`,
      `**D.** → False

Use the recovered values from the overview for this claim-specific check.

Report 1 reimbursed \\$323. Report 2 reimbursed \\$245.

$$323 - 245$$

$$= 78$$

$$78 < 80$$

The gap is not more than \\$80.

So the statement is False.`,
      `**E.** → True

Use the recovered values from the overview for this claim-specific check.

Reports 1 and 2 together:

$$323 + 245$$

$$= 568$$

$$568 \\ge 550.$$

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 28,
    solution_overview: `Reimbursement is a fixed per diem for each meal day plus a fixed rate per mile. Finance believes the mileage rate is \\$0.40/mile. One of the three reports contains an entry error. Reports 1 and 2 are used as the working pair.

**Part 1: Building the system.**

Let $x$ = per-diem rate, $y$ = per-mile rate.

**1. Translate: Report 1.**

$$5x + 150y = 323 \\tag{1}$$

**2. Translate: Report 2.**

$$3x + 250y = 245 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 3 and (2) by 5:

$$15x + 450y = 969, \\qquad 15x + 1250y = 1225$$

Subtract:

$$
(15x + 1250y) - (15x + 450y) = 1225 - 969 \\Rightarrow 800y = 256 \\Rightarrow y = 0.32
$$

Substitute into (1):

$$
5x + 150(0.32) = 323 \\Rightarrow 5x + 48 = 323 \\Rightarrow x = 55
$$

**Answer.** Per diem = \\$55.00/day | Mileage rate = \\$0.32/mile`,
  },
  {
    id: `math-5-29`,
    case_id: `MATH 5.29`,
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
      `If Widget A's assembly time increased by 20%, Week 1's total labor-hours would also increase by 20%.`,
      `The illegible Week 3 entry can be reconstructed as 20 Widget A units.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates Widget A's assembly time:

$$
x = 7
$$

The claim asserts

$$
x = 7
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered Widget B's assembly time. State that value in its own display before testing the claim:

$$
y = 10
$$

The claim writes 12 hours.

$$10 \\ne 12.$$

So the statement is False.`,
      `**C.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered Week 2's counts as 25 Widget A and 33 Widget B from the sticky note. The claim is that same pair.

So the statement is True.`,
      `**D.** → False

Widget A's recovered time is $7$ hours, so a 20% increase affects only those hours. Week 1 currently uses $35 \\times 7 = 245$ hours on Widget A:

$$245 \\times 0.20$$

$$= 49$$

$$445 + 49$$

$$= 494$$

A 20% rise in the whole week would have been $445 \\times 0.20 = 89$ hours. The week rises by 49 hours, not 20%.

So the statement is False.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Week 3 has 15 Widget B and 290 labor-hours. With the recovered times $x = 7$ and $y = 10$:

$$7A + 10(15)$$

$$= 290$$

$$7A + 150$$

$$= 290$$

$$\$$

$$\Rightarrow 7A$$

$$= 140$$

$$\$$

$$\Rightarrow A$$

$$
= 20.
$$

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 29,
    solution_overview: `Cedarline assembles Widget A and Widget B, each taking a fixed number of labor-hours. Week 1 is fully legible: 35 A and 20 B used 445 hours. Week 2's counts are missing, but a note says 8 more Widget B than Widget A, 58 units total, and 505 labor-hours.

**Part 1: Building the system.**

Let $x$ = labor-hours per Widget A, $y$ = labor-hours per Widget B. Recover Week 2's counts first:

$$
B = A + 8, \\qquad A + B = 58 \\Rightarrow 2A + 8 = 58 \\Rightarrow A = 25,\\ B = 33
$$

**1. Translate: Week 1.**

$$35x + 20y = 445 \\tag{1}$$

**2. Translate: Week 2.**

$$25x + 33y = 505 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 33 and (2) by 20:

$$1155x + 660y = 14685, \\qquad 500x + 660y = 10100$$

Subtract:

$$
(1155x + 660y) - (500x + 660y) = 14685 - 10100 \\Rightarrow 655x = 4585 \\Rightarrow x = 7
$$

Substitute into (1):

$$
35(7) + 20y = 445 \\Rightarrow 245 + 20y = 445 \\Rightarrow y = 10
$$

**Answer.** Widget A = 7 hrs/unit | Widget B = 10 hrs/unit`,
  },
  {
    id: `math-5-30`,
    case_id: `MATH 5.30`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The shared solve isolates Product X's price:

$$
x = 29
$$

The claim asserts

$$
x = 29
$$

Those two displays agree.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered Product Y's price. State that value in its own display before testing the claim:

$$
y = 24
$$

The claim writes \\$28.

$$24 \\ne 28.$$

So the statement is False.`,
      `**C.** → False

Once the unit prices are recovered from the shared solve, this stem total is fixed. Read the printed figure and compare it with the claim.

Reprice the reported basket at the recovered unit costs from the overview, then compare that corrected total with the claim.

Read the figure already produced by the shared solve, then compare it with the claim.

The overview priced East at \\$3,085. East reported \\$3,200.

$$3085 \\ne 3200.$$

So the statement is False.`,
      `**D.** → True

Reprice the reported basket at the recovered unit costs from the overview, then compare that corrected total with the claim.

The claim asserts

$$3085$$

So the statement is True.`,
      `**E.** → False

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

North reported \\$4,145. South and East reported \\$3,875 and \\$3,200.

$$3875 + 3200$$

$$= 7075$$

$$4145 < 7075$$

North does not exceed the other two combined.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 30,
    solution_overview: `Sterling Distributors sells Products X and Y at company-wide fixed prices. Two of the three branch reports reconcile; the third has an entry error. North and South are used as the working pair.

**Part 1: Building the system.**

Let $x$ = price of Product X, $y$ = price of Product Y.

**1. Translate: North.**

$$85x + 70y = 4145 \\tag{1}$$

**2. Translate: South.**

$$55x + 95y = 3875 \\tag{2}$$

**Part 2: Solve.**

Divide by 5: $17x + 14y = 829$ and $11x + 19y = 775$. Multiply by 19 and 14:

$$323x + 266y = 15751, \\qquad 154x + 266y = 10850$$

Subtract:

$$
(323x + 266y) - (154x + 266y) = 15751 - 10850 \\Rightarrow 169x = 4901 \\Rightarrow x = 29
$$

Substitute into $17x + 14y = 829$:

$$
17(29) + 14y = 829 \\Rightarrow 493 + 14y = 829 \\Rightarrow y = 24
$$

Testing East at the recovered prices:

$$65(29) + 50(24)=1885 + 1200$$

$$=3085$$

East reported \\$3,200, so that row does not reconcile.

**Answer.** Product X = \\$29.00/unit | Product Y = \\$24.00/unit`,
  },
  {
    id: `math-5-31`,
    case_id: `MATH 5.31`,
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
      `Swapping which quantity applies to which fastener type in Invoice 1 leaves the total unchanged.`,
      `The combined order must cost strictly more than placing both invoices separately.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The shared elimination already recovered Type A's case price. State that value in its own display before testing the claim:

$$
x = 18.45
$$

Rounding up to the next whole dollar:

$$\\lceil 18.45 \\rceil = 19$$

Compare the computed value with the claim (\\$19.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

Start from the recovered solution pair and apply the claim's extra arithmetic:

Using the recovered solution values $x = 18.45$ and $y = 27.80$ as inputs for this claim:

The gap is

$$27.80 - 18.45$$

$$= 9.35$$

$$9 < 9.35 < 10.$$

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
      `**C.** → True

Use the recovered values from the overview for this claim-specific check.

Invoice 2 totals \\$657.35 across $7 + 19 = 26$ cases:

$$\\frac{657.35}{26}$$

$$= 25.28$$

$$25.28 > 24.$$

So the statement is True.`,
      `**D.** → False

The shared solve is done; only this claim’s comparison remains.

Swap Invoice 1's counts and cost it at the recovered prices:

$$13 \\times 18.45$$

$$= 239.85$$

$$9 \\times 27.80$$

$$= 250.20$$

$$239.85 + 250.20$$

$$= 490.05$$

$$490.05 \\ne 527.45$$

The total changes.

So the statement is False.`,
      `**E.** → False

Read the recovered pair, then run the arithmetic the claim asks for.

Placing both invoices together is just the sum of the two printed totals:

$$527.45 + 657.35$$

$$= 1184.80$$

That is the same as placing them separately, so the combined order is not strictly more.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 31,
    solution_overview: `Riverside Hardware Supply ships Type A bolts and Type B hinges by the case at fixed per-case prices.

**Part 1: Building the system.**

Let $x$ = price per case of Type A, $y$ = price per case of Type B.

**1. Translate: Invoice 1.**

$$9x + 13y = 527.45 \\tag{1}$$

**2. Translate: Invoice 2.**

$$7x + 19y = 657.35 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 19 and (2) by 13:

$$
171x + 247y = 10021.55, \\qquad 91x + 247y = 8545.55
$$

Subtract:

$$
(171x + 247y) - (91x + 247y) = 10021.55 - 8545.55
$$

$$
80x = 1476.00 \\Rightarrow x = \\frac{1476.00}{80} = 18.45
$$

Substitute into (1):

$$
9(18.45) + 13y = 527.45 \\Rightarrow 166.05 + 13y = 527.45
$$

$$
13y = 361.40 \\Rightarrow y = 27.80
$$

**Answer.** Type A = \\$18.45/case | Type B = \\$27.80/case`,
  },
  {
    id: `math-5-32`,
    case_id: `MATH 5.32`,
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
      `**A.** → True

The shared elimination already recovered the dispatch fee. State that value in its own display before testing the claim:

$$
x = 145.50
$$

Halfway between \\$145 and \\$146 is

$$\\frac{145 + 146}{2}$$

$$= 145.50$$

The recovered fee is that midpoint.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered Swift Cargo's per-mile rate. State that value in its own display before testing the claim:

$$
y = 1.85
$$

$$1.85 - 1.50$$

$$= 0.35$$

$$2.00 - 1.85$$

$$= 0.15$$

$$0.15 < 0.35$$

The rate is closer to \\$2.00 than to \\$1.50.

So the statement is False.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

A 250-mile Swift haul at the recovered fee $x = 145.50$ and rate $y = 1.85$:

$$250 \\times 1.85$$

$$= 462.50$$

$$145.50 + 462.50$$

$$= 608.00$$

Five cents under \\$608 would be \\$607.95. The haul is exactly \\$608.00.

So the statement is False.`,
      `**D.** → True

The shared solve is done; only this claim’s comparison remains.

A 250-mile Swift haul at the recovered $x = 145.50$ and $y = 1.85$:

$$250 \\times 1.85$$

$$= 462.50$$

$$145.50 + 462.50$$

$$= 608.00$$

The competitor charges \\$1.35 per mile with no fee:

$$250 \\times 1.35$$

$$= 337.50$$

$$608.00 - 337.50$$

$$= 270.50$$

$$270.50 > 270.$$

So the statement is True.`,
      `**E.** → True

Swift is $145.50 + 1.85m$. The competitor is $1.35m$. The slopes $1.85$ and $1.35$ differ, so the lines meet:

$$145.50 + 1.85m = 1.35m$$

$$145.50 = -0.50m$$

$$\$$

$$\Rightarrow m$$

$$
= \\frac{145.50}{-0.50}
$$

$$
= -291
$$

The crossing is at $-291$ miles, a meaningless haul but a real intersection.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 32,
    solution_overview: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile. A competitor charges a flat \\$1.35 per mile with no dispatch fee.

**Part 1: Building the system.**

Let $x$ = Swift Cargo's dispatch fee, $y$ = Swift Cargo's rate per mile.

**1. Translate: Route 1.**

$$x + 170y = 460.00 \\tag{1}$$

**2. Translate: Route 2.**

$$x + 305y = 709.75 \\tag{2}$$

**Part 2: Solve.**

Subtract (1) from (2):

$$
(x + 305y) - (x + 170y) = 709.75 - 460.00
$$

$$
135y = 249.75 \\Rightarrow y = \\frac{249.75}{135} = 1.85
$$

Substitute into (1):

$$
x + 170(1.85) = 460.00 \\Rightarrow x + 314.50 = 460.00 \\Rightarrow x = 145.50
$$

**Answer.** Swift Cargo charges a \\$145.50 dispatch fee plus \\$1.85 per mile.`,
  },
  {
    id: `math-5-33`,
    case_id: `MATH 5.33`,
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
      `**A.** → False

The shared elimination already recovered the Specialty Drink price. State that value in its own display before testing the claim:

$$
x = 6.35
$$

Tripled:

$$3 \\times 6.35$$

$$= 19.05$$

$$19.05 < 20$$

That product does not clear twenty dollars.

So the statement is False.`,
      `**B.** → True

Use the recovered values from the overview for this claim-specific check.

Four pastries versus one drink and one pastry, at the recovered prices:

$$4 \\times 3.80$$

$$= 15.20$$

$$6.35 + 3.80$$

$$= 10.15$$

$$15.20 > 10.15.$$

So the statement is True.`,
      `**C.** → False

The calorie totals 6,100 and 5,400 are printed for reference only. They are not coefficients of $x$ or $y$, so they cannot replace the item counts in (1) and (2). The prices are recovered from quantities and dollar totals.

So the statement is False.`,
      `**D.** → True

Use the recovered values from the overview for this claim-specific check.

Receipt 1 totals \\$78.65 across $7 + 9 = 16$ items:

$$\\frac{78.65}{16}$$

$$= 4.915625$$

$$4.915625 > 4.90.$$

So the statement is True.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

A daily 2-drink 2-pastry order at the recovered prices, for seven days:

$$2(6.35 + 3.80)$$

$$= 20.30$$

$$7 \\times 20.30$$

$$= 142.10$$

$$150 - 142.10$$

$$= 7.90$$

$$7.90 < 8.$$

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 33,
    solution_overview: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also print calorie totals for reference only; those calorie counts are not part of the price system.

**Part 1: Building the system.**

Let $x$ = price per Specialty Drink, $y$ = price per Pastry.

**1. Translate: Receipt 1.**

$$7x + 9y = 78.65 \\tag{1}$$

**2. Translate: Receipt 2.**

$$11x + 4y = 85.05 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 4 and (2) by 9:

$$
28x + 36y = 314.60, \\qquad 99x + 36y = 765.45
$$

Subtract:

$$
(99x + 36y) - (28x + 36y) = 765.45 - 314.60
$$

$$
71x = 450.85 \\Rightarrow x = \\frac{450.85}{71} = 6.35
$$

Substitute into (1):

$$
7(6.35) + 9y = 78.65 \\Rightarrow 44.45 + 9y = 78.65
$$

$$
9y = 34.20 \\Rightarrow y = 3.80
$$

**Answer.** Specialty Drink = \\$6.35 | Pastry = \\$3.80`,
  },
  {
    id: `math-5-34`,
    case_id: `MATH 5.34`,
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
      `**A.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $x = 13.85$ per dozen croissants. Four dozen:

$$4 \\times 13.85$$

$$= 55.40$$

$$55.40 > 55.$$

So the statement is True.`,
      `**B.** → True

The gap between the two recovered unknowns is their difference:

$$
d = x - y
$$

Using the recovered solution values $x = 13.85$ and $y = 9.40$ as inputs for this claim:

The per-dozen gap is

$$13.85 - 9.40$$

$$= 4.45$$

Distance to 4 is $0.45$; distance to 5 is $0.55$. The gap is closer to four dollars.

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

Ten dozen of each at the recovered prices:

$$10 \\times 13.85$$

$$= 138.50$$

$$10 \\times 9.40$$

$$= 94.00$$

$$138.50 + 94.00$$

$$= 232.50$$

$$\\frac{138.50}{232.50}$$

$$\\approx 0.596 < \\frac{3}{5}$$

Croissants do not account for more than three-fifths.

So the statement is False.`,
      `**D.** → False

For this claim, use the recovered values from the overview for this claim-specific check.

Email 1 has 25 dozen-items for \\$297.30. Email 2 has 29 dozen-items for \\$299.30.

$$\\frac{297.30}{25}$$

$$= 11.892$$

$$\\frac{299.30}{29}$$

$$\\approx 10.321$$

$$11.892 - 10.321$$

$$= 1.571$$

Email 1 is pricier per dozen-item, but the gap does not clear two dollars.

So the statement is False.`,
      `**E.** → True

Next, use the recovered values from the overview for this claim-specific check.

Raise Email 2's baguette price by \\$3 and keep croissants at $x = 13.85$:

$$9.40 + 3$$

$$= 12.40$$

$$6 \\times 13.85 + 23 \\times 12.40$$

$$= 83.10 + 285.20$$

$$
= 368.30
$$

The cents digit is 30.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 34,
    solution_overview: `Northgate Bakery Wholesale sells croissants and baguettes by the dozen at fixed wholesale prices. Email 1: 14 dozen croissants + 11 dozen baguettes for \\$297.30. Email 2: 6 dozen croissants + 23 dozen baguettes for \\$299.30.

**Part 1: Building the system.**

Let $x$ = wholesale price per dozen croissants, $y$ = wholesale price per dozen baguettes.

**1. Translate: Email 1.**

$$14x + 11y = 297.30 \\tag{1}$$

**2. Translate: Email 2.**

$$6x + 23y = 299.30 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 23 and (2) by 11:

$$
322x + 253y = 6837.90, \\qquad 66x + 253y = 3292.30
$$

Subtract:

$$
(322x + 253y) - (66x + 253y) = 6837.90 - 3292.30
$$

$$
256x = 3545.60 \\Rightarrow x = \\frac{3545.60}{256} = 13.85
$$

Substitute into (1):

$$
14(13.85) + 11y = 297.30 \\Rightarrow 193.90 + 11y = 297.30
$$

$$
11y = 103.40 \\Rightarrow y = 9.40
$$

**Answer.** Croissants = \\$13.85/dozen | Baguettes = \\$9.40/dozen`,
  },
  {
    id: `math-5-35`,
    case_id: `MATH 5.35`,
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
      `**A.** → True

The shared elimination already recovered the Fabric Roll margin. State that value in its own display before testing the claim:

$$
x = 27.35
$$

$$27 < 27.35 < 27.50$$

It clears \\$27 but not \\$27.50.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered the Yarn Spool margin. State that value in its own display before testing the claim:

$$
y = 19.80
$$

Doubled:

$$2 \\times 19.80$$

$$= 39.60$$

$$39.60 < 40$$

That product does not clear forty dollars.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Two hundred Fabric Rolls and 150 Yarn Spools at the recovered margins:

$$200 \\times 27.35$$

$$= 5470$$

$$150 \\times 19.80$$

$$= 2970$$

$$5470 + 2970$$

$$= 8440$$

$$8440 > 8400$$

The mix clears \\$8,400 by \\$40.

So the statement is True.`,
      `**D.** → True

The shared solve is done; only this claim’s comparison remains.

Q2 profit minus Q1 profit:

$$10260.50 - 10029.00$$

$$= 231.50$$

Drop the smallest hundred:

$$231.50 - 100$$

$$= 131.50$$

$131.50$ is still a three-digit number.

So the statement is True.`,
      `**E.** → True

Use the recovered values from the overview for this claim-specific check.

Five hundred Fabric Rolls and no Yarn Spools, at the recovered $x = 27.35$:

$$500 \\times 27.35$$

$$= 13675$$

The profit is exactly \\$13,675.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 35,
    solution_overview: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.

**Part 1: Building the system.**

Let $x$ = profit per Fabric Roll, $y$ = profit per Yarn Spool.

**1. Translate: Q1.**

$$240x + 175y = 10029.00 \\tag{1}$$

**2. Translate: Q2.**

$$310x + 90y = 10260.50 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 90 and (2) by 175:

$$
21600x + 15750y = 902610, \\qquad 54250x + 15750y = 1795587.5
$$

Subtract:

$$
(54250x + 15750y) - (21600x + 15750y) = 1795587.5 - 902610
$$

$$
32650x = 892977.5 \\Rightarrow x = \\frac{892977.5}{32650} = 27.35
$$

Substitute into (1):

$$
240(27.35) + 175y = 10029.00 \\Rightarrow 6564.00 + 175y = 10029.00
$$

$$
175y = 3465.00 \\Rightarrow y = 19.80
$$

**Answer.** Fabric Roll margin = \\$27.35/unit | Yarn Spool margin = \\$19.80/unit`,
  },
  {
    id: `math-5-36`,
    case_id: `MATH 5.36`,
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
      `**A.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The overview found Invoice 2 is a $0.60$-scale copy of Invoice 1. The claim is that same redundancy.

So the statement is True.`,
      `**B.** → False

The shared elimination already recovered the Nitrogen price. State that value in its own display before testing the claim:

$$
x = 16.40
$$

$$16.40 - 16.00$$

$$= 0.40$$

$$17.00 - 16.40$$

$$= 0.60$$

$$0.40 < 0.60$$

Nitrogen is closer to \\$16.00 than to \\$17.00.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Four Oxygen cylinders versus six Nitrogen cylinders, at the recovered prices:

$$4 \\times 22.65$$

$$= 90.60$$

$$6 \\times 16.40$$

$$= 98.40$$

$$90.60 < 98.40.$$

So the statement is True.`,
      `**D.** → False

Use the recovered values from the overview for this claim-specific check.

Double Invoice 3's total of \\$326.45:

$$2 \\times 326.45$$

$$= 652.90$$

$$652.90 < 655$$

The doubled bill does not land above \\$655.

So the statement is False.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Blend Invoices 1 and 3, dollars and cylinders:

$$699.00 + 326.45$$

$$= 1025.45$$

$$15 + 20 + 13 + 5$$

$$= 53$$

$$\\frac{1025.45}{53}$$

$$\\approx 19.35$$

$$19.35 < 20$$

The blended per-cylinder price fails to reach \\$20.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 36,
    solution_overview: `A consultant was given three monthly invoices for Nitrogen-type and Oxygen-type cylinders. Invoice 2 is a 60% scale copy of Invoice 1, so the independent pair is Invoice 1 with Invoice 3.

**Part 1: Building the system.**

Let $x$ = price per Nitrogen-type cylinder, $y$ = price per Oxygen-type cylinder.

Invoice 2 versus Invoice 1:

$$\\frac{9}{15}=\\frac{12}{20}$$

$$=\\frac{419.40}{699.00}$$

$$=0.60$$

**1. Translate: Invoice 1.**

$$15x + 20y = 699.00 \\tag{1}$$

**2. Translate: Invoice 3.**

$$13x + 5y = 326.45 \\tag{2}$$

**Part 2: Solve.**

Multiply (2) by 4:

$$
52x + 20y = 1305.80
$$

Subtract (1):

$$
(52x + 20y) - (15x + 20y) = 1305.80 - 699.00
$$

$$
37x = 606.80 \\Rightarrow x = \\frac{606.80}{37} = 16.40
$$

Substitute into (1):

$$
15(16.40) + 20y = 699.00 \\Rightarrow 246.00 + 20y = 699.00
$$

$$
20y = 453.00 \\Rightarrow y = 22.65
$$

**Answer.** Nitrogen = \\$16.40 | Oxygen = \\$22.65`,
  },
  {
    id: `math-5-37`,
    case_id: `MATH 5.37`,
    title: `Ferro Machine Shop  -  Two Technicians, Two Sessions`,
    context: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.`,
    statements: [
      `Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.`,
      `Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.`,
      `Their combined hourly output, expressed as a fraction, reduces to exactly $\\frac{13}{100}$  -  no more, no less.`,
      `Bianchi's slice of Tuesday's finished work, as a fraction, is closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$.`,
      `Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

Use the recovered values from the overview for this claim-specific check.

Alvarez's solo time is the reciprocal of the recovered $x = 0.085$:

$$\\frac{1}{0.085}$$

$$\\approx 11.76$$

Rounded to the nearest whole hour that is 12, not 11.

So the statement is False.`,
      `**B.** → False

Apply only this claim’s extra arithmetic to the recovered unknowns.

Bianchi alone, and Alvarez on two jobs, at the recovered rates:

$$\\frac{1}{0.045}$$

$$\\approx 22.22$$

$$\\frac{2}{0.085}$$

$$\\approx 23.53$$

$$22.22 < 23.53$$

Bianchi's one job is not longer than Alvarez's two.

So the statement is False.`,
      `**C.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

Combined hourly output is the sum of the recovered rates:

$$0.085 + 0.045$$

$$= 0.130$$

$$
= \\frac{13}{100}.
$$

So the statement is True.`,
      `**D.** → True

Bianchi's Tuesday hours are 3 at $y = 0.045$, out of Tuesday's $0.900$:

$$3 \\times 0.045$$

$$= 0.135$$

$$\\frac{0.135}{0.900}$$

$$= 0.15$$

$$\\left|0.15 - \\frac{1}{7}\\right| \\approx 0.0071, \\qquad \\left|0.15 - \\frac{1}{8}\\right| = 0.025$$

The slice is closer to $\\frac{1}{7}$.

So the statement is True.`,
      `**E.** → True

Total work across both days, divided by the 23 hours logged:

$$0.655 + 0.900$$

$$= 1.555$$

$$\\frac{1.555}{23}$$

$$\\approx 0.0676$$

That average is about $6.76\\%$, which does not clear seven percent.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 37,
    solution_overview: `On Monday, Alvarez logged 4 hours and Bianchi 7 hours on the same overhaul, leaving it 65.5% finished. On Tuesday, Alvarez logged 9 hours and Bianchi 3 hours on an identical job, leaving it 90.0% complete.

**Part 1: Building the system.**

Let $x$ = fraction of a job Alvarez completes per hour, $y$ = fraction of a job Bianchi completes per hour.

**1. Translate: Monday.**

$$4x + 7y = 0.655 \\tag{1}$$

**2. Translate: Tuesday.**

$$9x + 3y = 0.900 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 9 and (2) by 4:

$$
36x + 63y = 5.895, \\qquad 36x + 12y = 3.600
$$

Subtract:

$$
(36x + 63y) - (36x + 12y) = 5.895 - 3.600
$$

$$
51y = 2.295 \\Rightarrow y = \\frac{2.295}{51} = 0.045
$$

Substitute into (1):

$$
4x + 7(0.045) = 0.655 \\Rightarrow 4x + 0.315 = 0.655
$$

$$
4x = 0.340 \\Rightarrow x = 0.085
$$

**Answer.** Alvarez = 0.085 job/hour | Bianchi = 0.045 job/hour`,
  },
  {
    id: `math-5-38`,
    case_id: `MATH 5.38`,
    title: `Vantage Apparel  -  A Water-Damaged Production Report`,
    context: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting \\$9,793.50. Season 2: 275 T-Shirts and 410 Hoodies, netting \\$10,747.75. Season 3's paperwork survived only in part: 310 Hoodies and an overall profit of \\$8,558.25 are legible, but water damage erased the T-Shirt count entirely.`,
    statements: [
      `T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.`,
      `Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.`,
      `Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.`,
      `Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.`,
      `Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count, and the profit crosses \\$8,700.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

The shared elimination already recovered the T-Shirt margin. State that value in its own display before testing the claim:

$$
x = 11.65
$$

$$11.65 - 11$$

$$= 0.65$$

$$12 - 11.65$$

$$= 0.35$$

$$0.35 < 0.65$$

The margin sits closer to twelve dollars than to eleven.

So the statement is False.`,
      `**B.** → True

The shared elimination already recovered the Hoodie margin. State that value in its own display before testing the claim:

$$
y = 18.40
$$

$$18.40 - 18$$

$$= 0.40$$

$$19 - 18.40$$

$$= 0.60$$

$$0.40 < 0.60$$

The margin sits closer to eighteen than to nineteen.

So the statement is True.`,
      `**C.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered Season 3's T-Shirt count as $T = 245$.

$$245 = 24 \\times 10 + 5$$

$245$ is not a multiple of ten.

So the statement is False.`,
      `**D.** → True

The shared solve is done; only this claim’s comparison remains.

Season 2 minus Season 1, versus 52 Hoodies at the recovered $y = 18.40$:

$$10747.75 - 9793.50$$

$$= 954.25$$

$$52 \\times 18.40$$

$$= 956.80$$

$$954.25 < 956.80$$

The earnings gap just fails to cover 52 Hoodies.

So the statement is True.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Replace the recovered $T = 245$ with 260 T-Shirts, keeping 310 Hoodies:

$$260 \\times 11.65$$

$$= 3029$$

$$310 \\times 18.40$$

$$= 5704$$

$$3029 + 5704$$

$$= 8733$$

$$8733 > 8700.$$

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 38,
    solution_overview: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies netted \\$9,793.50. Season 2: 275 T-Shirts and 410 Hoodies netted \\$10,747.75. Season 3 lists 310 Hoodies and \\$8,558.25, with the T-Shirt count missing.

**Part 1: Building the system.**

Let $x$ = profit per T-Shirt, $y$ = profit per Hoodie.

**1. Translate: Season 1.**

$$430x + 260y = 9793.50 \\tag{1}$$

**2. Translate: Season 2.**

$$275x + 410y = 10747.75 \\tag{2}$$

**Part 2: Solve.**

Multiply (1) by 410 and (2) by 260:

$$
176300x + 106600y = 4015335, \\qquad 71500x + 106600y = 2794415
$$

Subtract:

$$
(176300x + 106600y) - (71500x + 106600y) = 4015335 - 2794415
$$

$$
104800x = 1220920 \\Rightarrow x = \\frac{1220920}{104800} = 11.65
$$

Substitute into (1):

$$
430(11.65) + 260y = 9793.50 \\Rightarrow 5009.50 + 260y = 9793.50
$$

$$
260y = 4784.00 \\Rightarrow y = 18.40
$$

Season 3's missing T-Shirt count $T$ then satisfies

$$
11.65T + 18.40(310) = 8558.25 \\Rightarrow 11.65T + 5704.00 = 8558.25
$$

$$
11.65T = 2854.25 \\Rightarrow T = 245
$$

**Answer.** T-Shirt = \\$11.65 | Hoodie = \\$18.40 | Season 3 T-Shirts = 245`,
  },
  {
    id: `math-5-39`,
    case_id: `MATH 5.39`,
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
      `**A.** → True

The shared elimination already recovered the handling fee. State that value in its own display before testing the claim:

$$
x = 94.60
$$

Knock off \\$5.40:

$$94.60 - 5.40$$

$$= 89.20$$

Relative to \\$89,

$$\\frac{94.60}{89} - 1$$

$$\\approx 0.063$$

the real fee overshoots \\$89 by about 6%.

So the statement is True.`,
      `**B.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $y = 3.15$ per kilogram. Tripled:

$$3 \\times 3.15$$

$$= 9.45$$

$$9.45 < 9.50$$

That product lands just shy of \\$9.50.

So the statement is True.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Convert Shipment 3's 99 lb and apply the recovered model:

$$\\frac{99}{2.2}$$

$$= 45$$

$$45 \\times 3.15$$

$$= 141.75$$

$$94.60 + 141.75$$

$$= 236.35$$

The billed total is \\$239.80, and $239.80 - 236.35 = 3.45$, which is within four dollars but not an exact match.

So the statement is True.`,
      `**D.** → False

Use the recovered values from the overview for this claim-specific check.

Ninety-nine pounds converted at 2.2 lb per kilogram:

$$\\frac{99}{2.2}$$

$$= 45$$

$$45 = 7 \\times 6 + 3$$

$45$ is not divisible by seven.

So the statement is False.`,
      `**E.** → True

Use the recovered values from the overview for this claim-specific check.

At 400 kg with the recovered fee $x = 94.60$ and rate $y = 3.15$:

$$400 \\times 3.15$$

$$= 1260$$

$$94.60 + 1260$$

$$= 1354.60$$

$$1354.60 > 1350.$$

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 39,
    solution_overview: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram. Shipment 2 is recorded in pounds, with $1$ kg $\\approx 2.2$ lb.

**Part 1: Building the system.**

Let $x$ = flat handling fee, $y$ = rate per kilogram. Convert Shipment 2 before writing its equation:

$$
\\frac{572}{2.2} = 260
$$

**1. Translate: Shipment 1.**

$$x + 185y = 677.35 \\tag{1}$$

**2. Translate: Shipment 2, in kilograms.**

$$x + 260y = 913.60 \\tag{2}$$

**Part 2: Solve.**

Subtract (1) from (2):

$$
(x + 260y) - (x + 185y) = 913.60 - 677.35
$$

$$
75y = 236.25 \\Rightarrow y = \\frac{236.25}{75} = 3.15
$$

Substitute into (1):

$$
x + 185(3.15) = 677.35 \\Rightarrow x + 582.75 = 677.35 \\Rightarrow x = 94.60
$$

**Answer.** Handling fee = \\$94.60 | Rate = \\$3.15/kg`,
  },
  {
    id: `math-5-40`,
    case_id: `MATH 5.40`,
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
      `The doubling-of-Client-A hypothesis for Client B's bill lands closer to the real figure than the 50%-heavier-surcharge hypothesis.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The overview scaled Client A to \\$967.40, which overshoots the billed \\$952.10 by \\$15.30.

$$\\frac{15.30}{952.10}$$

$$\\approx 0.01607$$

$$\\approx 1.61\\%.$$

So the statement is True.`,
      `**B.** → True

Apply only this claim’s extra arithmetic to the recovered unknowns.

Consistency would require Client B to be exactly double Client A, so Client A would have to be half of \\$952.10:

$$\\frac{952.10}{2}$$

$$= 476.05$$

The actual Client A total is \\$483.70, not \\$476.05. The statement names that consistency requirement.

So the statement is True.`,
      `**C.** → True

The invoices disagree by \\$15.30 on a \\$952.10 bill:

$$\\frac{15.30}{952.10}$$

$$\\approx 0.01607$$

$$\\frac{1}{60} \\approx 0.01667, \\qquad \\frac{1}{50} = 0.02$$

$0.01607$ is nearer to $\\frac{1}{60}$ than to $\\frac{1}{50}$.

So the statement is True.`,
      `**D.** → False

The shared solve is done; only this claim’s comparison remains.

Those hypothetical unit prices on Client A's 11 compute and 7 storage units:

$$11 \\times 14.20$$

$$= 156.20$$

$$7 \\times 31.75$$

$$= 222.25$$

$$156.20 + 222.25$$

$$= 378.45$$

$$378.45 > 375$$

The total is not shy of \\$375.

So the statement is False.`,
      `**E.** → True

The doubling hypothesis prices Client B at \\$967.40. A 50% surcharge on Client A would price Client B at

$$1.5 \\times 483.70$$

$$= 725.55$$

Distances to the billed \\$952.10:

$$|967.40 - 952.10|$$

$$= 15.30$$

$$|725.55 - 952.10|$$

$$= 226.55$$

Doubling is closer.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 40,
    solution_overview: `Vantage Cloud Services bills a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.

**Part 1: Building the system.**

Let $x$ = price per compute-unit, $y$ = price per storage-unit.

**1. Translate: Client A.**

$$11x + 7y = 483.70 \\tag{1}$$

**2. Translate: Client B, as reported.**

$$22x + 14y = 952.10 \\tag{2}$$

**Part 2: Solve.**

Client B's coefficients $(22, 14)$ are exactly double Client A's $(11, 7)$. Scaling (1) by 2:

$$
2(11x + 7y) = 2(483.70) \\Rightarrow 22x + 14y = 967.40
$$

The reported Client B total is $952.10$, not $967.40$:

$$
967.40 - 952.10 = 15.30
$$

The left-hand sides are proportional while the totals are not, so the two invoices are inconsistent. No pair $(x, y)$ satisfies both at once.

**Answer.** No consistent prices exist; the invoices disagree by \\$15.30.`,
  },
  {
    id: `math-5-41`,
    case_id: `MATH 5.41`,
    title: `Sterling Family Trust  -  Two-Fund Return Reconstruction`,
    context: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%. The officer's notes state Fund B's balance is \\$4,000 more than twice Fund A's balance, and the combined annual return from both funds is \\$762.00.`,
    statements: [
      `The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.`,
      `If Fund A's rate were raised by 1.5 percentage points while Fund B's rate stayed the same, the combined annual return would rise above \\$800.00.`,
      `The combined annual return represents more than 4% of the total trust value.`,
      `Had the trust instead been split evenly at the original rates, the total return would have come within \\$5.00 of the actual \\$762.00.`,
      `The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

The overview recovered Fund A at $4800$ and Fund B at $13600$. Dollar interest is principal times the stated simple rate.

$$4800 \\times 0.0525$$

$$= 252$$

$$13600 \\times 0.0375$$

$$= 510$$

Triple of Fund A's interest is

$$3 \\times 252$$

$$= 756$$

Since $510 < 756$, Fund B does not earn more than triple Fund A's dollars.

So the statement is False.`,
      `**B.** → True

The overview recovered $A = 4800$ and $B = 13600$. Raising Fund A's rate by $1.5$ percentage points makes that rate $6.75\\%$, while Fund B stays at $3.75\\%$.

$$4800 \\times 0.0675$$

$$= 324$$

$$13600 \\times 0.0375$$

$$= 510$$

$$324 + 510$$

$$= 834$$

Since $834 > 800$, the combined return would rise above \\$800.

So the statement is True.`,
      `**C.** → True

The overview recovered balances $4800$ and $13600$, and the stem gives combined return \\$762.

$$4800 + 13600$$

$$= 18400$$

$$\\frac{762}{18400}$$

$$= 0.041413\\ldots$$

That blended rate is about $4.14\\%$, which is more than $4\\%$.

So the statement is True.`,
      `**D.** → False

The shared solve is done; only this claim’s comparison remains.

An even split of the recovered total $18400$ puts \\$9,200 in each fund at the original rates.

$$9200 \\times 0.0525$$

$$= 483$$

$$9200 \\times 0.0375$$

$$= 345$$

$$483 + 345$$

$$= 828$$

$$|828 - 762|$$

$$= 66$$

The even-split return is \\$66 from the actual \\$762, not within \\$5.

So the statement is False.`,
      `**E.** → True

The overview recovered the two balances $4800$ (smaller) and $13600$. The relative gap versus the smaller balance is

$$\\frac{13600 - 4800}{4800}$$

$$= \\frac{8800}{4800}$$

$$
= 1.8\\overline{3}
$$

about $183.3\\%$, which exceeds $180\\%$.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 41,
    solution_overview: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%. Fund B's balance is \\$4,000 more than twice Fund A's balance, and the combined annual return from both funds is \\$762.00.

**Part 1: Building the system.**

Let $x$ = balance in Fund A, $y$ = balance in Fund B.

**1. Translate: Fund B's balance, from the stated relationship.** That observation becomes:

$$y = 2x + 4000 \\tag{1}$$

**2. Translate: combined annual return.** That observation becomes:

$$0.0525x + 0.0375y = 762 \\tag{2}$$

**Part 2: Solve.**

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

$$y=2(4800) + 4000$$

$$=9600 + 4000$$

$$=13600$$

**Answer.** Fund A holds \\$4,800 and Fund B holds \\$13,600.`,
  },
  {
    id: `math-5-42`,
    case_id: `MATH 5.42`,
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
      `If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B, the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.`,
      `Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.`,
      `Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Use the recovered values from the overview for this claim-specific check.

Batch 1 printed $144$ g of salt and Batch 2 printed $184$ g. Pouring them together does not create or destroy salt.

$$144 + 184$$

$$= 328$$

Since $328 > 300$, the combined salt exceeds $300$ g.

So the statement is True.`,
      `**B.** → True

The overview recovered $A = 16$ g/L and $B = 12$ g/L.

$$\\frac{12}{16}$$

$$= 0.75$$

Since $0.75 > 0.70$, Solution B's concentration is more than $70\\%$ of Solution A's.

So the statement is True.`,
      `**C.** → True

The overview predicted $104$ g for Batch 3 against $109$ g recorded, a $5$ g discrepancy, with recovered $B = 12$ g/L. Batch 3's logged split is $2$ L of A and $6$ L of B. If the extra $5$ g sits only in B,

$$\\frac{5}{12}$$

$$\\approx 0.4167$$

$$6 + 0.4167$$

$$\\approx 6.417$$

The distance to $6.4$ is about $0.017$, and the distance to $6.0$ is about $0.417$, so the true B volume is closer to $6.4$ L.

So the statement is True.`,
      `**D.** → False

The overview recovered $A = 16$ g/L and $B = 12$ g/L. A $3:1$ mix of A:B is $75\\%$ A and $25\\%$ B, so the blend concentration in g/L is

$$0.75 \\times 16 + 0.25 \\times 12$$

$$= 12 + 3$$

$$
= 15
$$

The volume that holds $130$ g is then

$$\\frac{130}{15}$$

$$\\approx 8.667$$

which is not $7.5$ L.

So the statement is False.`,
      `**E.** → True

This comparison uses the mixing ratios, not the recovered concentrations. Batch 1 is mixed $3:2$, and Batch 2 is mixed $5:1$.

$$\\frac{3}{5}$$

$$= 0.60$$

$$\\frac{5}{6}$$

$$\\approx 0.833$$

Since $0.833 > 0.60$, Batch 2 used a higher volume share of Solution A.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 42,
    solution_overview: `Solventis Labs combines Stock Solution A and Stock Solution B in a stated volume ratio. The log records total volume and mixing ratio (A:B) rather than individual volumes. Batch 1 is 10 L mixed 3:2 with 144 g of salt. Batch 2 is 12 L mixed 5:1 with 184 g of salt. Batch 3 is an 8 L QC mix at 1:3 with 109 g recorded.

**Part 1: Building the system.**

Let $x$ = grams of salt per liter in Solution A, $y$ = grams of salt per liter in Solution B.

**1. Translate: Batch 1: 10 L split 3:2 is 6 L of A and 4 L of B.** That observation becomes:

$$6x + 4y = 144 \\tag{1}$$

**2. Translate: Batch 2: 12 L split 5:1 is 10 L of A and 2 L of B.** That observation becomes:

$$10x + 2y = 184 \\tag{2}$$

**Part 2: Solve.**

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

$$y=92 - 5(16)$$

$$=92 - 80$$

$$=12$$

**4.** Audit Batch 3 (8 L at 1:3 is $2$ L of A and $6$ L of B):

$$2(16) + 6(12)=32 + 72$$

$$=104$$

versus 109 g recorded, a 5 g discrepancy.

**Answer.** Solution A has 16 g/L and Solution B has 12 g/L; Batch 3 is predicted to contain 104 g, versus 109 g recorded.`,
  },
  {
    id: `math-5-43`,
    case_id: `MATH 5.43`,
    title: `Union Mills Manufacturing  -  Fractional-Hour Overtime Reconstruction`,
    context: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, \\$765.00 gross. Employee B: 40 regular + 7 OT hours, \\$882.00 gross.`,
    statements: [
      `If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed \\$6.00.`,
      `Employee B's overtime pay is more than 40% of his total gross pay.`,
      `The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.`,
      `If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.`,
      `The ratio of Employee B's overtime hours to Employee A's is greater than the ratio of their gross pay amounts.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered overtime pay at \\$26 per hour. Employee A's actual overtime pay for $2.5$ hours, and then $10\\%$ of that, is

$$2.5 \\times 26$$

$$= 65$$

$$0.10 \\times 65$$

$$= 6.50$$

Since $6.50 > 6$, the bonus exceeds \\$6.

So the statement is True.`,
      `**B.** → False

The overview recovered overtime at \\$26 per hour. Employee B worked $7$ overtime hours on a \\$882 gross.

$$7 \\times 26$$

$$= 182$$

$$\\frac{182}{882}$$

$$\\approx 0.2063$$

About $20.6\\%$ is not more than $40\\%$.

So the statement is False.`,
      `**C.** → True

Combined actual gross is the sum of the two printed totals. The counterfactual is both employees at $45$ hours of the recovered base \\$17.50, with no premium.

$$765 + 882$$

$$= 1647$$

$$2 \\times 45 \\times 17.50$$

$$= 1575$$

Since $1647 > 1575$, the actual combined gross is larger.

So the statement is True.`,
      `**D.** → False

The overview recovered base $x = 17.50$. Raising that base by $15\\%$ and dropping the premium gives a new rate of $17.50 \\times 1.15 = 20.125$ on all $42.5$ hours.

$$42.5 \\times 20.125$$

$$= 855.3125$$

Compared with A's actual \\$765, the new gross increases rather than decreases.

So the statement is False.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Employee B had $7$ overtime hours and \\$882 gross; Employee A had $2.5$ overtime hours and \\$765 gross.

$$\\frac{7}{2.5}$$

$$= 2.8$$

$$\\frac{882}{765}$$

$$\\approx 1.153$$

Since $2.8 > 1.153$, the overtime-hours ratio is greater than the gross-pay ratio.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 43,
    solution_overview: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, \\$765.00 gross. Employee B: 40 regular + 7 OT hours, \\$882.00 gross.

**Part 1: Building the system.**

Let $x$ = base hourly wage, $y$ = overtime premium per hour (on top of the base wage, per OT hour). Each overtime hour is paid at $x+y$.

**1. Translate: Employee A.** That observation becomes:

$$42.5x + 2.5y = 765 \\tag{1}$$

**2. Translate: Employee B.** That observation becomes:

$$47x + 7y = 882 \\tag{2}$$

**Part 2: Solve.**

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
    id: `math-5-44`,
    case_id: `MATH 5.44`,
    title: `Greenfield Landscaping  -  Redundant Project Reconciliation`,
    context: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.`,
    tables_markdown: `| Project | Wood Fencing | Wire Fencing | Total Cost |
| --- | --- | --- | --- |
| Project 1 | 18 m | 24 m | \\$750.00 |
| Project 2 | 27 m | 36 m | \\$1,125.00 |
| Project 3 | 10 m | 40 m | \\$710.00 |`,
    statements: [
      `If Project 3 had instead used 20 m of wood, its total cost would have exceeded \\$950.00.`,
      `The per-meter price gap between wood and wire is more than 145% of the wire price per meter.`,
      `Combining Project 1 and Project 3's materials into one hypothetical project would cost less than the sum of their individual costs.`,
      `If wire fencing rose by \\$2.00 per meter, Project 1's total cost would increase by more than 15%.`,
      `Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The overview recovered wood at \\$27 per m and wire at \\$11 per m. Project 3 with $20$ m of wood and $40$ m of wire costs

$$20 \\times 27$$

$$= 540$$

$$40 \\times 11$$

$$= 440$$

$$540 + 440$$

$$= 980$$

Since $980 > 950$, the total would exceed \\$950.

So the statement is True.`,
      `**B.** → True

The overview recovered wood $x = 27$ and wire $y = 11$. The per-meter gap as a share of the wire price is

$$27 - 11$$

$$= 16$$

$$\\frac{16}{11}$$

$$\\approx 1.4545$$

Since $1.4545 > 1.45$, the gap is more than $145\\%$ of the wire price.

So the statement is True.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

At fixed per-meter prices, combining Project 1 and Project 3 is linear. Combined metres are $28$ m wood and $64$ m wire.

$$28(27) + 64(11)$$

$$= 756 + 704$$

$$
= 1460
$$

$$750 + 710$$

$$= 1460$$

The combined project costs the same as the two projects separately, not less.

So the statement is False.`,
      `**D.** → False

For this claim, use the recovered values from the overview for this claim-specific check.

Project 1 has $24$ m of wire. A \\$2 per-meter rise on that wire, as a share of the printed \\$750, is

$$24 \\times 2$$

$$= 48$$

$$\\frac{48}{750}$$

$$= 0.064$$

$6.4\\%$ is not more than $15\\%$.

So the statement is False.`,
      `**E.** → False

Next, use the recovered values from the overview for this claim-specific check.

Project 3 installed $10 + 40 = 50$ m for \\$710. Project 1 installed $18 + 24 = 42$ m for \\$750.

$$\\frac{710}{50}$$

$$= 14.20$$

$$\\frac{750}{42}$$

$$\\approx 17.86$$

Since $14.20 < 17.86$, Project 3's cost per meter is lower, not higher.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 44,
    solution_overview: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new. Project 1: 18 m wood, 24 m wire, \\$750.00. Project 2: 27 m wood, 36 m wire, \\$1,125.00. Project 3: 10 m wood, 40 m wire, \\$710.00.

**Part 1: Building the system.**

Let $x$ = price per meter of cedar wood fencing, $y$ = price per meter of galvanized wire fencing.

**1. Translate: Project 1.** That observation becomes:

$$18x + 24y = 750 \\tag{1}$$

**2. Translate: Project 3, independent of Project 1.** That observation becomes:

$$10x + 40y = 710 \\tag{2}$$

**Part 2: Solve.**

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
    id: `math-5-45`,
    case_id: `MATH 5.45`,
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
      `**A.** → True

The overview recovered Boat A's speed $x = 48$ km/h. Solo time on the $356$ km stretch is

$$\\frac{356}{48}$$

$$\\approx 7.4167$$

about $7$ hours $25$ minutes, which is more than $7$ hours.

So the statement is True.`,
      `**B.** → True

Apply only this claim’s extra arithmetic to the recovered unknowns.

They meet after $2$ hours on the $250$ km stretch. Distances at the recovered speeds $48$ and $77$ km/h are

$$2 \\times 48$$

$$= 96$$

$$2 \\times 77$$

$$= 154$$

$$
154 - 96 = 58, \\qquad \\frac{250}{2}
$$

$$
= 125
$$

Since $58 < 125$, the difference is less than half the gap.

So the statement is True.`,
      `**C.** → False

Combined speed is currently $48 + 77 = 125$ km/h. After a $20\\%$ rise on each boat, combined speed is $1.2 \\times 125 = 150$ km/h.

$$\\frac{250}{150}$$

$$\\approx 1.667$$

Since $1.667 > 1.5$, the new time does not fall below $1.5$ hours.

So the statement is False.`,
      `**D.** → True

The overview recovered speeds $48$ and $77$ km/h. Three hours of simultaneous travel at those speeds covers

$$48 + 77$$

$$= 125$$

$$3 \\times 125$$

$$= 375$$

Since $375 > 356$, the combined distance exceeds the $356$ km stretch.

So the statement is True.`,
      `**E.** → True

The overview recovered $A = 48$ km/h and $B = 77$ km/h. The relative increase of B over A is

$$77 - 48$$

$$= 29$$

$$\\frac{29}{48}$$

$$\\approx 0.60417$$

about $60.4\\%$, which is more than $60\\%$.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 45,
    solution_overview: `Two Meridian Rail boats travel at fixed constant speeds. On one 250 km stretch, they start from opposite docks and meet after 2 hours. On a separate 356 km stretch, Boat B gets a 3-hour head start before Boat A departs; they meet exactly 1 hour after Boat A's departure.

**Part 1: Building the system.**

Let $x$ = Boat A's speed (km/h), $y$ = Boat B's speed (km/h).

**1. Translate: 250 km gap closed in 2 hours.** That observation becomes:

$$2(x + y) = 250 \\Rightarrow x + y = 125 \\tag{1}$$

**2. Translate: Boat A travels 1 hour; Boat B travels its 3-hour head start plus 1 more, so 4 hours.** That observation becomes:

$$x + 4y = 356 \\tag{2}$$

**Part 2: Solve.**

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
    id: `math-5-46`,
    case_id: `MATH 5.46`,
    title: `Meridian Textiles  -  Three-Season Profit Reconstruction`,
    context: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.`,
    tables_markdown: `| Season | Wheat | Barley | Total Profit |
| --- | --- | --- | --- |
| Season 1 | 240 t | 160 t | \\$42,000 |
| Season 2 | 180 t | 260 t | \\$48,300 |
| Season 3 (illegible) |  | 300 t | \\$53,100 |`,
    statements: [
      `If Season 1's Wheat output had instead been 260 tonnes, total profit would have exceeded \\$44,000.`,
      `Barley's profit-per-tonne advantage over Wheat represents more than 25% of Wheat's profit per tonne.`,
      `Season 3's total tonnage is less than Season 2's total tonnage.`,
      `Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.`,
      `Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

The overview recovered Wheat at \\$95/t and Barley at \\$120/t. Season 1 with Wheat raised to $260$ t, Barley still $160$ t, would earn

$$260 \\times 95 + 160 \\times 120$$

$$= 24700 + 19200$$

$$
= 43900
$$

Since $43900 < 44000$, the total would not exceed \\$44,000.

So the statement is False.`,
      `**B.** → True

Start from the recovered solution pair and apply the claim's extra arithmetic:

Using the recovered solution values $x = 95$ and $y = 120$ as inputs for this claim:

Barley's advantage as a share of Wheat's profit per tonne is

$$\\frac{120 - 95}{95} = \\frac{25}{95}$$

$$\\approx 0.2632$$

about $26.3\\%$, which is more than $25\\%$.

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → False

The overview reconstructed Season 3 Wheat at $180$ t, with $300$ t of Barley. Season 2 is $180 + 260 = 440$ t.

$$180 + 300$$

$$= 480$$

Since $480 > 440$, Season 3's total tonnage is not less than Season 2's.

So the statement is False.`,
      `**D.** → True

The overview reconstructed Season 3 Wheat at $180$ t. An actual $220$ t instead is $40$ extra tonnes of Wheat at \\$95/t.

$$40 \\times 95$$

$$= 3800$$

That understatement of \\$3,800 is more than \\$3,500.

So the statement is True.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Season 2 printed \\$48,300 on $180 + 260 = 440$ t. Season 1 printed \\$42,000 on $240 + 160 = 400$ t.

$$\\frac{48300}{440}$$

$$\\approx 109.77$$

$$\\frac{42000}{400}$$

$$= 105$$

Season 2's profit per tonne of total output is higher.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 46,
    solution_overview: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 1: 240 t Wheat, 160 t Barley, \\$42,000. Season 2: 180 t Wheat, 260 t Barley, \\$48,300. Season 3's paperwork was water-damaged: Barley tonnage 300 t and total profit \\$53,100 survived, but Wheat tonnage is illegible.

**Part 1: Building the system.**

Let $x$ = profit per tonne of Wheat, $y$ = profit per tonne of Barley.

**1. Translate: Season 1, then divide by 80.** That observation becomes:

$$240x + 160y = 42000 \\Rightarrow 3x + 2y = 525 \\tag{1}$$

**2. Translate: Season 2, then divide by 20.** That observation becomes:

$$180x + 260y = 48300 \\Rightarrow 9x + 13y = 2415 \\tag{2}$$

**Part 2: Solve.**

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

**Answer.** Wheat = \\$95.00/t | Barley = \\$120.00/t | Season 3 Wheat reconstructed = 180 tonnes.`,
  },
  {
    id: `math-5-47`,
    case_id: `MATH 5.47`,
    title: `Bramwell & Co.  -  Double-Condition Age Reconstruction`,
    context: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.`,
    statements: [
      `Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.`,
      `The current age gap is more than 45% of the elder employee's current age.`,
      `Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.`,
      `Ten years ago, the sum of their ages was less than 40.`,
      `There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered current ages $47$ and $19$. Fifteen years from now those ages are $62$ and $34$.

$$2 \\times 34$$

$$= 68$$

Since $62 < 68$, the elder will be less than double the younger at that time.

So the statement is True.`,
      `**B.** → True

The gap between the two recovered unknowns is their difference:

$$
d = x - y
$$

Using the recovered solution values $x = 47$ and $y = 19$ as inputs for this claim:

The current gap as a share of the elder's age is

$$47 - 19$$

$$= 28$$

$$\\frac{28}{47}$$

$$\\approx 0.5957$$

about $59.6\\%$, which is more than $45\\%$.

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → False

The overview recovered current ages $47$ and $19$. After $4.5$ years the ages are $51.5$ and $23.5$.

$$\\frac{51.5}{23.5}$$

$$\\approx 2.191$$

Since $2.191 < 2.5$, the elder will not be more than $2.5$ times the younger.

So the statement is False.`,
      `**D.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered current ages $47$ and $19$. Ten years ago the ages were $37$ and $9$.

$$37 + 9$$

$$= 46$$

Since $46 > 40$, the sum was not less than $40$.

So the statement is False.`,
      `**E.** → True

Let $t$ be years ago. The claim is that $x - t = 3(y - t)$ for some $t > 4$. Using the recovered ages $47$ and $19$,

$$47 - t = 3(19 - t)$$

$$
47 - t = 57 - 3t \\Rightarrow 2t
$$

$$= 10$$

$$\\Rightarrow t$$

$$
= 5
$$

Since $5 > 4$, such a time exists.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 47,
    solution_overview: `Bramwell's HR system flagged an elder and a younger employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.

**Part 1: Building the system.**

Let $x$ = elder employee's current age, $y$ = younger employee's current age.

**1. Translate: five years ago, the elder was three times the younger.** That observation becomes:

$$x - 5 = 3(y - 5) \\tag{1}$$

**2. Translate: in nine years, the elder will be twice the younger.** That observation becomes:

$$x + 9 = 2(y + 9) \\tag{2}$$

**Part 2: Solve.**

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

$$x=2(19) + 9$$

$$=38 + 9$$

$$=47$$

**Answer.** Elder employee = 47 years old | Younger employee = 19 years old.`,
  },
  {
    id: `math-5-48`,
    case_id: `MATH 5.48`,
    title: `Crestline Retail Group  -  Decimal Markup Reconstruction`,
    context: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.`,
    tables_markdown: `| Order | Product A Units | Product B Units | Retail Total |
| --- | --- | --- | --- |
| Order 1 | 8 | 5 | \\$1,052.80 |
| Order 2 | 16 | 10 | \\$2,105.60 |
| Order 3 | 3 | 12 | \\$1,350.60 |`,
    statements: [
      `If the two markup percentages were swapped, Order 3's retail total would decrease compared to its actual \\$1,350.60.`,
      `The dollar markup on Product B is more than 80% of the dollar markup on Product A.`,
      `Order 1's total retail markup exceeds \\$150.00.`,
      `If Order 3's Product B quantity rose from 12 to 15 units, the retail total would increase by more than \\$280.00.`,
      `The wholesale cost ratio of Product B to Product A is greater than the retail price ratio of Product B to Product A.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

The overview recovered wholesale $x = 55$ and $y = 80$. Swapping the markups puts $18\\%$ on A and $32\\%$ on B. Order 3 would then be

$$3(55)(1.18) + 12(80)(1.32)$$

$$= 194.70 + 1267.20$$

$$
= 1461.90
$$

Compared with the actual \\$1,350.60, the swapped total increases rather than decreases.

So the statement is False.`,
      `**B.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x = 55$ and $y = 80$ as inputs for this claim:

Dollar markups are $0.32x$ and $0.18y$.

$$0.32 \\times 55$$

$$= 17.60$$

$$0.18 \\times 80$$

$$= 14.40$$

$$\\frac{14.40}{17.60}$$

$$= 0.8181\\ldots$$

Since $0.818 > 0.80$, B's dollar markup is more than $80\\%$ of A's.

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x = 55$ and $y = 80$ as inputs for this claim:

Unit markups are $0.32 \\times 55 = 17.60$ and $0.18 \\times 80 = 14.40$, so Order 1's total markup is

$$8 \\times 17.60 + 5 \\times 14.40$$

$$= 140.80 + 72.00$$

$$
= 212.80
$$

Since $212.80 > 150$, the markup exceeds \\$150.

That computed value matches the claim.

So the statement is True.`,
      `**D.** → True

The overview recovered $y = 80$, so retail B is $1.18 \\times 80 = 94.40$. Raising Order 3's B quantity from $12$ to $15$ adds three units.

$$3 \\times 94.40$$

$$= 283.20$$

Since $283.20 > 280$, the retail total would increase by more than \\$280.

So the statement is True.`,
      `**E.** → True

A mixed purchase is the linear combination of the recovered unit prices:

$$
C = n_x x + n_y y
$$

Using the recovered solution values $x = 55$ and $y = 80$ as inputs for this claim:

Retail prices are $1.32x = 72.60$ and $1.18y = 94.40$.

$$\\frac{80}{55}$$

$$\\approx 1.4545$$

$$\\frac{94.40}{72.60}$$

$$\\approx 1.3003$$

The wholesale ratio is larger than the retail ratio.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 48,
    solution_overview: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another. Order 1: 8 of A and 5 of B, retail \\$1,052.80. Order 2: 16 of A and 10 of B, retail \\$2,105.60. Order 3: 3 of A and 12 of B, retail \\$1,350.60.

**Part 1: Building the system.**

Let $x$ = wholesale cost of Product A, $y$ = wholesale cost of Product B. Retail A is $1.32x$ and retail B is $1.18y$.

**1. Translate: Order 1.** That observation becomes:

$$10.56x + 5.9y = 1052.80 \\tag{1}$$

**2. Translate: Order 3, independent of Order 1.** That observation becomes:

$$3.96x + 14.16y = 1350.60 \\tag{2}$$

**Part 2: Solve.**

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

**Answer.** Product A wholesale = \\$55.00 | Product B wholesale = \\$80.00.`,
  },
  {
    id: `math-5-49`,
    case_id: `MATH 5.49`,
    title: `Fairview Amateur League  -  Cross-Team Points Reconstruction`,
    context: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points. The Ravens: 7 wins, 6 draws, 1 loss in 14 matches, 8 points fewer than the Falcons.`,
    statements: [
      `If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.`,
      `The Ravens earned more than 45% of their total points from draws alone.`,
      `Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.`,
      `The Falcons' win-to-draw point contribution ratio exceeds 15.`,
      `A hypothetical team with the Falcons' record but 3 additional wins converted from draws would score more than 20 points higher than the Falcons' actual total.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The overview recovered $x = 7$ points per win. If a draw were worth half of that, a draw would be $3.5$ points. The Falcons would then have

$$9 \\times 7 + 4 \\times 3.5$$

$$= 63 + 14$$

$$
= 77
$$

Since $77 > 75$, their total would increase.

So the statement is True.`,
      `**B.** → False

The overview recovered $x = 7$ and $y = 3$, so the Ravens have $67$ points with $6 \\times 3 = 18$ from draws.

$$\\frac{18}{67}$$

$$\\approx 0.2687$$

About $26.9\\%$ is not more than $45\\%$.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Under $2$ points per win and $1$ per draw, the two records become

$$9 \\times 2 + 4 \\times 1$$

$$= 22$$

$$7 \\times 2 + 6 \\times 1$$

$$= 20$$

The Falcons would still have more points.

So the statement is True.`,
      `**D.** → False

The Falcons' win contribution is $9 \\times 7 = 63$ and their draw contribution is $4 \\times 3 = 12$.

$$\\frac{63}{12}$$

$$= 5.25$$

The win-to-draw ratio is $5.25$, which is not greater than $15$.

So the statement is False.`,
      `**E.** → False

Read the recovered pair, then run the arithmetic the claim asks for.

Converting three of the Falcons' draws into wins leaves $12$ wins and $1$ draw.

$$12 \\times 7 + 1 \\times 3$$

$$= 87$$

$$87 - 75$$

$$= 12$$

The increase is $12$ points, not more than $20$.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 49,
    solution_overview: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points. The Ravens: 7 wins, 6 draws, 1 loss in 14 matches, 8 points fewer than the Falcons.

**Part 1: Building the system.**

Let $x$ = points per win, $y$ = points per draw.

**1. Translate: Falcons.** That observation becomes:

$$9x + 4y = 75 \\tag{1}$$

**2. Translate: Ravens, with $75 - 8 = 67$ total points.** That observation becomes:

$$7x + 6y = 67 \\tag{2}$$

**Part 2: Solve.**

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

**Answer.** Win = 7 points | Draw = 3 points.`,
  },
  {
    id: `math-5-50`,
    case_id: `MATH 5.50`,
    title: `Meridian Alloys  -  Decimal Density Reconstruction and Audit`,
    context: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).`,
    tables_markdown: `| Batch | Metal A | Metal B | Total Mass |
| --- | --- | --- | --- |
| Batch 1 | 12 L | 8 L | 182.4 kg |
| Batch 2 | 5 L | 15 L | 209.0 kg |
| Batch 3 (audit) | 9.5 L (conv.) | 6 L | 147.0 kg (recorded) |`,
    statements: [
      `If Batch 1's Metal B volume had been 10 L instead of 8 L, the total mass would have exceeded 200 kg.`,
      `Metal B's density is more than 50% greater than Metal A's density.`,
      `The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.`,
      `If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L, the predicted mass would come within 2 kg of the recorded 147.0 kg.`,
      `Combining Batch 1 and Batch 2 into a single hypothetical batch would yield a total mass equal to the sum of their individual masses.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered $A = 7.6$ kg/L and $B = 11.4$ kg/L. Batch 1 with $10$ L of B instead of $8$ L would mass

$$12(7.6) + 10(11.4)$$

$$= 91.2 + 114$$

$$
= 205.2
$$

Since $205.2 > 200$, the total would exceed $200$ kg.

So the statement is True.`,
      `**B.** → False

Start from the recovered solution pair and apply the claim's extra arithmetic:

Using the recovered solution values $x = 7.6$ and $y = 11.4$ as inputs for this claim:

The relative density advantage of B over A is

$$\\frac{11.4 - 7.6}{7.6}$$

$$= \\frac{3.8}{7.6}$$

$$
= 0.50
$$

That is $50\\%$ greater, not more than $50\\%$.

The computed figure does not match the claim.

So the statement is False.`,
      `**C.** → True

The overview predicted $140.6$ kg for Batch 3 against $147.0$ kg recorded, a $6.4$ kg discrepancy.

$$\\frac{6.4}{147.0}$$

$$\\approx 0.04354$$

about $4.35\\%$, which is more than $4\\%$ of the recorded mass.

So the statement is True.`,
      `**D.** → False

The shared solve is done; only this claim’s comparison remains.

If Batch 3 used $10$ L of A instead of $9.5$ L, with $6$ L of B still, the predicted mass at the recovered densities is

$$10(7.6) + 6(11.4)$$

$$= 76 + 68.4$$

$$
= 144.4
$$

$$|144.4 - 147.0|$$

$$= 2.6$$

The gap is $2.6$ kg, which is not within $2$ kg of $147.0$.

So the statement is False.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

At fixed densities, combining two batches is linear. The combined mass is the sum of the printed masses.

$$182.4 + 209.0$$

$$= 391.4$$

That equals the sum of the individual masses.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 50,
    solution_overview: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. Batch 1: 12 L of A and 8 L of B, 182.4 kg. Batch 2: 5 L of A and 15 L of B, 209.0 kg. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal $\\approx$ 9.5 L), with 6 L of B and 147.0 kg recorded.

**Part 1: Building the system.**

Let $x$ = mass per liter of Metal A (kg/L), $y$ = mass per liter of Metal B (kg/L).

**1. Translate: Batch 1.** That observation becomes:

$$12x + 8y = 182.4 \\tag{1}$$

**2. Translate: Batch 2.** That observation becomes:

$$5x + 15y = 209.0 \\tag{2}$$

**Part 2: Solve.**

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

$$x=41.8 - 3(11.4)$$

$$=41.8 - 34.2$$

$$=7.6$$

**4.** Audit Batch 3:

$$9.5(7.6) + 6(11.4)=72.2 + 68.4$$

$$=140.6$$

versus 147.0 kg recorded, a 6.4 kg discrepancy.

**Answer.** Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded).`,
  },
  {
    id: `math-5-51`,
    case_id: `MATH 5.51`,
    title: `Halcyon Ventures  -  Fee Structure Reconstruction from Client Differentials`,
    context: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is \\$600,000, fee \\$10,800. Client 1's AUM exceeds Client 2's by \\$150,000 and pays \\$2,400 more in total fees. The flat retainer is identical for every client, so it cancels out of any fee-difference comparison.`,
    statements: [
      `A client with AUM of \\$850,000 would pay a fee representing less than 1.75% of their AUM.`,
      `The flat retainer accounts for more than 10% of Client 2's total fee.`,
      `If the fee rate were reduced by 0.2 percentage points while the retainer doubled, Client 1's total fee would decrease compared to its actual amount.`,
      `The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.`,
      `A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The overview recovered rate $x = 0.016$ and retainer $y = 1200$. A client with AUM \\$850,000 pays

$$850000 \\times 0.016 + 1200$$

$$= 13600 + 1200$$

$$
= 14800
$$

$$\\frac{14800}{850000}$$

$$\\approx 0.017412$$

about $1.741\\%$, which is less than $1.75\\%$.

So the statement is True.`,
      `**B.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered retainer $y = 1200$ on Client 2's fee \\$10,800.

$$\\frac{1200}{10800}$$

$$\\approx 0.1111$$

about $11.1\\%$, which is more than $10\\%$.

So the statement is True.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Client 1 has AUM \\$750,000 and actual fee $750000(0.016) + 1200 = 13200$. After a $0.2$ percentage-point rate cut and a doubled retainer, the new fee is

$$750000 \\times 0.014 + 2400$$

$$= 10500 + 2400$$

$$
= 12900
$$

Since $12900 < 13200$, Client 1's fee would decrease.

So the statement is True.`,
      `**D.** → False

For this claim, use the recovered values from the overview for this claim-specific check.

Client 1's effective rate and Client 2's effective rate are

$$
\\frac{13200}{750000} = 0.0176, \\qquad \\frac{10800}{600000}
$$

$$
= 0.018
$$

$$0.018 - 0.0176$$

$$= 0.0004$$

That is $0.04$ percentage points, which is not more than $0.05$.

So the statement is False.`,
      `**E.** → False

Next, use the recovered values from the overview for this claim-specific check.

Triple of Client 2's AUM is \\$1,800,000. That client's fee, versus triple of Client 2's \\$10,800, is

$$1800000 \\times 0.016 + 1200$$

$$= 28800 + 1200$$

$$
= 30000
$$

$$3 \\times 10800$$

$$= 32400$$

Since $30000 < 32400$, the fee is not more than triple.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 51,
    solution_overview: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is \\$600,000, fee \\$10,800. Client 1's AUM exceeds Client 2's by \\$150,000 and pays \\$2,400 more in total fees. The flat retainer is identical for every client, so it cancels out of any fee-difference comparison.

**Part 1: Building the system.**

Let $x$ = the percentage fee rate (as a decimal), $y$ = the flat retainer (in dollars).

**1. Translate: Client 2's total fee.** That observation becomes:

$$600000x + y = 10800 \\tag{1}$$

**2. Translate: fee difference over AUM difference; the retainer cancels.** That observation becomes:

$$150000x = 2400 \\tag{2}$$

**Part 2: Solve.**

**1.** The fee-difference equation already isolates the rate:

$$
150000x = 2400 \\Rightarrow x = \\frac{2400}{150000} = 0.016
$$

(that is $1.6\\%$).

**2.** Substitute into Client 2's total:

$$
600000(0.016) + y = 10800 \\Rightarrow 9600 + y = 10800 \\Rightarrow y = 1200
$$

**Answer.** Fee rate = 1.6% of AUM | Retainer = \\$1,200.00.`,
  },
  {
    id: `math-5-52`,
    case_id: `MATH 5.52`,
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
      `If Batch 1's Suspension B volume were doubled, the new total content would exceed 13,500 mg.`,
      `The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.`,
      `Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered $A = 8.4$ mg/mL and $B = 15.6$ mg/mL. The relative increase of B over A is

$$\\frac{15.6 - 8.4}{8.4} = \\frac{7.2}{8.4}$$

$$\\approx 0.8571$$

about $85.7\\%$, which is more than $85\\%$.

So the statement is True.`,
      `**B.** → False

The overview predicted $9708$ mg for Batch 3 against $9700$ mg recorded.

$$\\frac{|9708 - 9700|}{9700} = \\frac{8}{9700}$$

$$\\approx 0.000825$$

about $0.0825\\%$, which is not more than $1\\%$.

So the statement is False.`,
      `**C.** → True

A mixed purchase is the linear combination of the recovered unit prices:

$$
C = n_x x + n_y y
$$

Using the recovered solution values $A = 8.4$ and $B = 15.6$ as inputs for this claim:

Doubling Batch 1's Suspension B volume from $300$ mL to $600$ mL gives

$$500(8.4) + 600(15.6)$$

$$= 4200 + 9360$$

$$
= 13560
$$

Since $13560 > 13500$, the new total would exceed $13500$ mg.

The computed figure matches the claim.

So the statement is True.`,
      `**D.** → True

The shared solve is done; only this claim’s comparison remains.

Pooling uses the printed contents. Twice Batch 2 is $2 \\times 12600 = 25200$.

$$8880 + 12600$$

$$= 21480$$

Since $21480 < 25200$, the pooled total is less than twice Batch 2.

So the statement is True.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

Batch 2 has $700$ mL of B out of $200 + 700 = 900$ mL. Batch 3 has $450$ mL of B out of $320 + 450 = 770$ mL.

$$\\frac{700}{900}$$

$$\\approx 0.7778$$

$$\\frac{450}{770}$$

$$\\approx 0.5844$$

Batch 2's B-share is higher.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 52,
    solution_overview: `Solventis blends two drug suspensions, each with a fixed mg/mL concentration. Batch 1: 500 mL of A and 300 mL of B, 8,880 mg. Batch 2: 200 mL of A and 700 mL of B, 12,600 mg. A third batch's Suspension A volume was logged in liters, then converted to mL: 0.32 L $= 320$ mL of A, 450 mL of B, 9,700 mg recorded.

**Part 1: Building the system.**

Let $x$ = mg/mL concentration of Suspension A, $y$ = mg/mL concentration of Suspension B.

**1. Translate: Batch 1.** That observation becomes:

$$500x + 300y = 8880 \\tag{1}$$

**2. Translate: Batch 2.** That observation becomes:

$$200x + 700y = 12600 \\tag{2}$$

**Part 2: Solve.**

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

$$320(8.4) + 450(15.6)=2688 + 7020$$

$$=9708$$

versus 9,700 mg recorded, an 8 mg discrepancy.

**Answer.** Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded).`,
  },
  {
    id: `math-5-53`,
    case_id: `MATH 5.53`,
    title: `Ridgeline Construction  -  Waste-Adjusted Material Cost Reconstruction`,
    context: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall. Job 1 needed 200 usable studs + 150 usable sheets, invoice \\$7,164.00. Job 2 needed 350 usable studs + 175 usable sheets, invoice \\$8,946.00.`,
    statements: [
      `The total waste-related cost on Invoice 1 exceeds \\$700.00.`,
      `If the drywall waste allowance were reduced from 8% to 5%, Invoice 2's total would decrease by more than \\$150.00.`,
      `Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.`,
      `The drywall price is more than 8 times the stud price.`,
      `Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x = 4.50$ and $y = 38$ as inputs for this claim:

Invoice 1's waste is $200 \\times 0.12 = 24$ studs and $150 \\times 0.08 = 12$ sheets.

$$24 \\times 4.50 + 12 \\times 38$$

$$= 108 + 456$$

$$
= 564
$$

Since $564 < 700$, the waste-related cost does not exceed \\$700.

So the statement is False.`,
      `**B.** → True

Apply only this claim’s extra arithmetic to the recovered unknowns.

Invoice 2 ordered $175 \\times 1.08 = 189$ drywall sheets. Cutting the allowance from $8\\%$ to $5\\%$ removes $175 \\times 0.03 = 5.25$ sheets at \\$38 each.

$$5.25 \\times 38$$

$$= 199.50$$

Since $199.50 > 150$, Invoice 2 would decrease by more than \\$150.

So the statement is True.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Job 2's usable-material cost at the recovered prices, as a share of the printed \\$8,946, is

$$350 \\times 4.50 + 175 \\times 38$$

$$= 1575 + 6650$$

$$
= 8225
$$

$$\\frac{8225}{8946}$$

$$\\approx 0.9194$$

about $91.9\\%$, which is more than $90\\%$.

So the statement is True.`,
      `**D.** → True

The overview recovered drywall $y = 38$ and studs $x = 4.50$.

$$\\frac{38}{4.50}$$

$$\\approx 8.444$$

Since $8.444 > 8$, the drywall price is more than $8$ times the stud price.

So the statement is True.`,
      `**E.** → True

Job 1 usable cost and Job 2 usable cost at the recovered prices $x = 4.50$ and $y = 38$ are

$$200 \\times 4.50 + 150 \\times 38$$

$$= 900 + 5700$$

$$
= 6600
$$

$$350 \\times 4.50 + 175 \\times 38$$

$$= 1575 + 6650$$

$$
= 8225
$$

Waste as a share of usable cost:

$$\\frac{7164 - 6600}{6600} = \\frac{564}{6600}$$

$$\\approx 0.08545$$

$$\\frac{8946 - 8225}{8225} = \\frac{721}{8225}$$

$$\\approx 0.08766$$

Job 1's $8.545\\%$ is smaller than Job 2's $8.766\\%$.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 53,
    solution_overview: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall. Job 1 needed 200 usable studs + 150 usable sheets, invoice \\$7,164.00. Job 2 needed 350 usable studs + 175 usable sheets, invoice \\$8,946.00.

**Part 1: Building the system.**

Let $x$ = price per stud, $y$ = price per drywall sheet. The ordered quantities are the usable amounts inflated by the waste allowances.

**1. Translate: Job 1, $200 \\times 1.12 = 224$ studs and $150 \\times 1.08 = 162$ sheets.** That observation becomes:

$$224x + 162y = 7164 \\tag{1}$$

**2. Translate: Job 2, $350 \\times 1.12 = 392$ studs and $175 \\times 1.08 = 189$ sheets.** That observation becomes:

$$392x + 189y = 8946 \\tag{2}$$

**Part 2: Solve.**

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

**Answer.** Stud price = \\$4.50 | Drywall sheet price = \\$38.00.`,
  },
  {
    id: `math-5-54`,
    case_id: `MATH 5.54`,
    title: `Precision Dynamics  -  Sensor Calibration Curve Reconstruction`,
    context: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.`,
    tables_markdown: `| Point | Reading | Reference True Value | Role |
| --- | --- | --- | --- |
| Point 1 | 12.4 | 56.90 | Calibration |
| Point 2 | 31.7 | 124.45 | Calibration |
| Point 3 | 45.0 | 172.20 | Verification (recorded) |`,
    statements: [
      `The scale factor exceeds 3.4 by more than 2.5%.`,
      `If the offset were doubled, the predicted true value at a reading of 20 would exceed 95.`,
      `The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.`,
      `The percentage increase in true value between Point 1 and Point 2 is more than 100%.`,
      `A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The overview recovered scale factor $x = 3.50$. The excess over $3.4$, relative to $3.4$, is

$$\\frac{3.50 - 3.4}{3.4} = \\frac{0.10}{3.4}$$

$$\\approx 0.02941$$

about $2.94\\%$, which is more than $2.5\\%$.

So the statement is True.`,
      `**B.** → True

An extended bill adds the recovered per-unit charge on top of the recovered fee:

$$
B = f + t\\cdot r
$$

Using the recovered solution values $x = 3.50$ and $y = 13.50$ as inputs for this claim:

Doubling the offset gives $27$, so at reading $20$

$$3.50 \\times 20 + 27$$

$$= 70 + 27$$

$$
= 97
$$

Since $97 > 95$, the predicted true value would exceed $95$.

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → False

The overview predicted $171.00$ at reading $45.0$ against recorded $172.20$.

$$
\\frac{|171.00 - 172.20|}{172.20} = \\frac{1.20}{172.20}
$$

$$\\approx 0.00697$$

about $0.70\\%$ of the recorded value, which is not more than $1\\%$.

So the statement is False.`,
      `**D.** → True

The shared solve is done; only this claim’s comparison remains.

Point 1's true value is $56.90$ and Point 2's is $124.45$. The percentage increase is

$$
\\frac{124.45 - 56.90}{56.90} = \\frac{67.55}{56.90}
$$

$$\\approx 1.1868$$

about $118.7\\%$, which is more than $100\\%$.

So the statement is True.`,
      `**E.** → False

Read the recovered pair, then run the arithmetic the claim asks for.

At reading $8.0$, the recovered calibration gives

$$3.50 \\times 8.0 + 13.50$$

$$= 28 + 13.50$$

$$
= 41.50
$$

Half of Point 1's true value $56.90$ is $28.45$. Since $41.50 > 28.45$, the prediction is not less than half of Point 1.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 54,
    solution_overview: `A sensor's raw reading converts to a true value via True Value = (scale factor)$\\times$(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check. Point 1: reading 12.4, true value 56.90. Point 2: reading 31.7, true value 124.45. Point 3: reading 45.0, recorded reference 172.20.

**Part 1: Building the system.**

Let $x$ = the sensor's scale factor, $y$ = the sensor's offset, so that $\\mathrm{True\\ Value} = x \\cdot (\\mathrm{Reading}) + y$.

**1. Translate: Point 1.** That observation becomes:

$$12.4x + y = 56.90 \\tag{1}$$

**2. Translate: Point 2.** That observation becomes:

$$31.7x + y = 124.45 \\tag{2}$$

**Part 2: Solve.**

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

$$45.0(3.50) + 13.50=157.50 + 13.50$$

$$=171.00$$

versus recorded 172.20, a $1.20$ discrepancy.

**Answer.** Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded).`,
  },
  {
    id: `math-5-55`,
    case_id: `MATH 5.55`,
    title: `Meridian Commodities  -  Blended Shipment Price Reconstruction`,
    context: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost \\$2,943.20. Shipment 2: 800 kg total, mixed 5:3 Coffee:Cocoa, cost \\$4,555.00.`,
    statements: [
      `Coffee costs more than 25% more per kilogram than Cocoa.`,
      `Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.`,
      `If Shipment 2's ratio had instead been 1:1 rather than 5:3, its total cost would have been lower than the actual \\$4,555.00.`,
      `The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.`,
      `The price gap between Coffee and Cocoa is less than 30% of Coffee's price.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered Coffee $x = 6.20$ and Cocoa $y = 4.85$. Coffee's premium over Cocoa is

$$\\frac{6.20 - 4.85}{4.85} = \\frac{1.35}{4.85}$$

$$\\approx 0.2784$$

about $27.8\\%$, which is more than $25\\%$.

So the statement is True.`,
      `**B.** → True

Apply only this claim’s extra arithmetic to the recovered unknowns.

Shipment 1 has $312$ kg of Coffee at \\$6.20/kg, against a printed total of \\$2,943.20.

$$312 \\times 6.20$$

$$= 1934.40$$

$$\\frac{1934.40}{2943.20}$$

$$\\approx 0.6572$$

about $65.7\\%$, which is more than $65\\%$.

So the statement is True.`,
      `**C.** → True

For this claim, use the recovered values from the overview for this claim-specific check.

An $800$ kg shipment mixed $1:1$ is $400$ kg of each at the recovered prices.

$$400 \\times 6.20 + 400 \\times 4.85$$

$$= 2480 + 1940$$

$$
= 4420
$$

Since $4420 < 4555$, the $1:1$ mix would cost less than the actual \\$4,555.

So the statement is True.`,
      `**D.** → False

Next, use the recovered values from the overview for this claim-specific check.

Cocoa across both shipments is $208 + 300 = 508$ kg. Coffee is $312 + 500 = 812$ kg.

$$508 \\times 4.85$$

$$= 2463.80$$

$$812 \\times 6.20$$

$$= 5034.40$$

Cocoa's dollar total is smaller, not larger.

So the statement is False.`,
      `**E.** → True

The gap between the two recovered unknowns is their difference:

$$
d = x - y
$$

Using the recovered solution values $x = 6.20$ and $y = 4.85$ as inputs for this claim:

The gap as a share of Coffee's price is

$$\\frac{6.20 - 4.85}{6.20} = \\frac{1.35}{6.20}$$

$$\\approx 0.2177$$

about $21.8\\%$, which is less than $30\\%$.

The computed figure matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 55,
    solution_overview: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost \\$2,943.20. Shipment 2: 800 kg total, mixed 5:3 Coffee:Cocoa, cost \\$4,555.00.

**Part 1: Building the system.**

Let $x$ = price per kg of Coffee, $y$ = price per kg of Cocoa.

**1. Translate: Shipment 1, 520 kg split 3:2 is 312 kg Coffee and 208 kg Cocoa.** That observation becomes:

$$312x + 208y = 2943.2 \\tag{1}$$

**2. Translate: Shipment 2, 800 kg split 5:3 is 500 kg Coffee and 300 kg Cocoa.** That observation becomes:

$$500x + 300y = 4555 \\tag{2}$$

**Part 2: Solve.**

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

$$x=9.11 - 0.6(4.85)$$

$$=9.11 - 2.91$$

$$=6.20$$

**Answer.** Coffee = \\$6.20/kg | Cocoa = \\$4.85/kg.`,
  },
  {
    id: `math-5-56`,
    case_id: `MATH 5.56`,
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
      `If Route 1's Van distance had instead been 900 km, total fuel would have exceeded 430 L.`,
      `Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.`,
      `Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance at its own rate.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered Truck $x = 32.0$ L/100km and Van $y = 18.0$ L/100km.

$$\\frac{32.0 - 18.0}{18.0} = \\frac{14}{18}$$

$$\\approx 0.7778$$

about $77.8\\%$, which is more than $75\\%$.

So the statement is True.`,
      `**B.** → False

The overview predicted $152.0$ L for Route 3 against $155.0$ L recorded.

$$\\frac{155.0 - 152.0}{155.0} = \\frac{3}{155}$$

$$\\approx 0.01935$$

about $1.94\\%$ below the recorded value, which is not more than $2\\%$.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

Route 1 currently uses $383.6$ L with $620$ km of van. Replacing that van distance by $900$ km adds $280$ km at the recovered van rate $18.0$ L/100km.

$$2.8 \\times 18.0$$

$$= 50.4$$

$$383.6 + 50.4$$

$$= 434.0$$

Since $434.0 > 430$, total fuel would exceed $430$ L.

So the statement is True.`,
      `**D.** → True

For this claim, use the recovered values from the overview for this claim-specific check.

Route 2 covers $500 + 900 = 1400$ km on $322.0$ L, so the fleet average in L/100km is

$$\\frac{322.0}{14}$$

$$= 23.0$$

Distances to the two individual rates: $|23.0 - 18.0| = 5.0$ versus $|23.0 - 32.0| = 9.0$. The average is closer to the Van rate.

So the statement is True.`,
      `**E.** → True

Next, use the recovered values from the overview for this claim-specific check.

Route 1's combined distance is $850 + 620 = 1470$ km. Each type covering that whole distance at its own recovered rate would use

$$14.7 \\times 32.0$$

$$= 470.4$$

$$14.7 \\times 18.0$$

$$= 264.6$$

$$470.4 + 264.6$$

$$= 735.0$$

Actual Route 1 fuel $383.6$ L is less than that sum.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 56,
    solution_overview: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. Route 1: 850 km truck, 620 km van, 383.6 L. Route 2: 500 km truck, 900 km van, 322.0 L. A third route's Truck distance was logged in miles and converted to km (155.3 mi $\\approx$ 250 km), with 400 km of van and 155.0 L recorded.

**Part 1: Building the system.**

Let $x$ = Truck fuel consumption (L/100km), $y$ = Van fuel consumption (L/100km). Distances enter as hundreds of km so that the coefficients match litres.

**1. Translate: Route 1.** That observation becomes:

$$8.5x + 6.2y = 383.6 \\tag{1}$$

**2. Translate: Route 2.** That observation becomes:

$$5x + 9y = 322 \\tag{2}$$

**Part 2: Solve.**

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

$$2.5(32) + 4(18)=80 + 72$$

$$=152$$

versus 155 L recorded, a 3 L discrepancy.

**Answer.** Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded).`,
  },
  {
    id: `math-5-57`,
    case_id: `MATH 5.57`,
    title: `Whitmore Scholarship Fund  -  Blended-Return Rate Reconstruction`,
    context: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00. A proposed reallocation swapping those amounts (\\$18,000 Bonds, \\$27,000 Equities) would return \\$2,754.00.`,
    statements: [
      `The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.`,
      `Under the current allocation, the blended rate is less than 6%.`,
      `If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns.`,
      `A $\\frac{50}{50}$ split would produce a blended return exactly equal to the average of the two described allocations' returns.`,
      `The bond rate is more than 80% of the equity rate.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered bond $5.4\\%$ and equity $6.6\\%$. The relative gap of equity over bonds is

$$\\frac{6.6 - 5.4}{5.4} = \\frac{1.2}{5.4}$$

$$\\approx 0.2222$$

about $22.2\\%$, which is more than $20\\%$.

So the statement is True.`,
      `**B.** → True

Start from the overview's recovered unknowns, apply only this claim's extra check, and compare with the stated figure.

The current allocation returns \\$2,646 on \\$45,000.

$$\\frac{2646}{45000}$$

$$= 0.0588$$

$5.88\\%$ is less than $6\\%$.

So the statement is True.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

All \\$45,000 in equities at $6.6\\%$ would return

$$45000 \\times 0.066$$

$$= 2970$$

The combined total of the two described allocations is $2646 + 2754 = 5400$. Since $2970 < 5400$, the all-equity return does not exceed that combined total.

So the statement is False.`,
      `**D.** → True

The shared solve is done; only this claim’s comparison remains.

A $\\frac{50}{50}$ split puts \\$22,500 in each portfolio.

$$22500 \\times 0.054 + 22500 \\times 0.066$$

$$= 2700$$

The average of the two described returns is

$$\\frac{2646 + 2754}{2}$$

$$= 2700$$

The two figures match.

So the statement is True.`,
      `**E.** → True

Start from the recovered solution pair and apply the claim's extra arithmetic:

Using the recovered solution values $5.4\\%$ and $6.6\\%$ as inputs for this claim:

$$\\frac{5.4}{6.6}$$

$$\\approx 0.8182$$

about $81.8\\%$, which is more than $80\\%$.

The computed figure matches the claim.

The shared elimination already fixed the unique pair; this letter only tests the claim's extra arithmetic.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 57,
    solution_overview: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00. A proposed reallocation swapping those amounts (\\$18,000 Bonds, \\$27,000 Equities) would return \\$2,754.00.

**Part 1: Building the system.**

Let $x$ = Bond Portfolio's annual rate in percent, $y$ = Equity Portfolio's annual rate in percent.

**1. Translate: current allocation.** That observation becomes:

$$270x + 180y = 2646 \\tag{1}$$

**2. Translate: proposed reallocation.** That observation becomes:

$$180x + 270y = 2754 \\tag{2}$$

**Part 2: Solve.**

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

**Answer.** Bond rate = 5.4% | Equity rate = 6.6%.`,
  },
  {
    id: `math-5-58`,
    case_id: `MATH 5.58`,
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
      `If the rate per \\$1,000 of coverage increased by 10%, the Home policy's premium would increase by more than \\$75.00.`,
      `The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.`,
      `Combining the Auto and Home coverage into a single hypothetical policy would cost less than the sum of their separate premiums.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview reconstructed Renters coverage at \\$25,000. That is less than \\$30,000.

So the statement is True.`,
      `**B.** → False

The overview recovered the fixed fee $x = 214.70$ on Auto's premium \\$612.50.

$$\\frac{214.70}{612.50}$$

$$\\approx 0.3505$$

about $35.1\\%$, which is not more than $60\\%$.

So the statement is False.`,
      `**C.** → True

Start from the overview’s recovered unknowns, then test the named figure.

A $10\\%$ increase in the recovered rate $y = 4.68$ adds $0.468$ per \\$1,000. Home has $210$ thousands of coverage.

$$210 \\times 0.468$$

$$= 98.28$$

Since $98.28 > 75$, the Home premium would increase by more than \\$75.

So the statement is True.`,
      `**D.** → False

Premium per \\$1,000 is the printed premium divided by coverage in thousands.

$$\\frac{1197.50}{210}$$

$$\\approx 5.702$$

$$\\frac{612.50}{85}$$

$$\\approx 7.206$$

Home's $5.702$ is not more than twice Auto's $7.206$.

So the statement is False.`,
      `**E.** → True

Read the recovered pair, then run the arithmetic the claim asks for.

A single combined policy has one administrative fee and $85 + 210 = 295$ thousands of coverage.

$$214.70 + 295 \\times 4.68$$

$$= 214.70 + 1380.60$$

$$
= 1595.30
$$

$$612.50 + 1197.50$$

$$= 1810.00$$

The combined policy costs less than the sum of the separate premiums.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 58,
    solution_overview: `Ashford prices every policy as a fixed administrative fee plus a rate per \\$1,000 of coverage. Auto: \\$85,000 coverage, premium \\$612.50. Home: \\$210,000 coverage, premium \\$1,197.50. A third (Renters) policy's coverage amount is illegible, but its premium \\$331.70 survived.

**Part 1: Building the system.**

Let $x$ = the fixed administrative fee per policy (in dollars), $y$ = the rate per \\$1,000 of coverage (in dollars).

**1. Translate: Auto, coverage in units of \\$1,000.** That observation becomes:

$$x + 85y = 612.50 \\tag{1}$$

**2. Translate: Home.** That observation becomes:

$$x + 210y = 1197.50 \\tag{2}$$

**Part 2: Solve.**

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

**3.** Reconstruct the Renters coverage $C$, measured in thousands of dollars:

$$
214.70 + 4.68C = 331.70 \\Rightarrow 4.68C = 117.00 \\Rightarrow C = 25
$$

that is \\$25,000 of coverage.

**Answer.** Fixed fee = \\$214.70 | Rate = \\$4.68 per \\$1,000 | Renters coverage reconstructed = \\$25,000.`,
  },
  {
    id: `math-5-59`,
    case_id: `MATH 5.59`,
    title: `Cedar Hollow Reserve  -  Linear Population Growth Reconstruction`,
    context: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340). At Year 6: combined population = 1,772. Species A grows at exactly twice the annual rate of Species B.`,
    statements: [
      `By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.`,
      `If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.`,
      `The ratio of the two species' total population growth from Year 2 to Year 6 is greater than 2.5: 1.`,
      `At some point between Year 2 and Year 6, the two species had equal populations.`,
      `Species A overtakes Species B in total population size before Year 5.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The overview recovered Year 6 populations $A = 898$ and $B = 874$.

$$898 - 874$$

$$= 24$$

Since $24 > 20$, Species A exceeds Species B by more than $20$ individuals.

So the statement is True.`,
      `**B.** → True

Apply only this claim’s extra arithmetic to the recovered unknowns.

If Species B also grew at $72$ per year, combined growth from Year 2 to Year 6 would be $4(72 + 72) = 576$.

$$1340 + 576$$

$$= 1916$$

$$1916 - 1772$$

$$= 144$$

The excess over the actual $1772$ is $144$, which is more than $140$.

So the statement is True.`,
      `**C.** → False

Start from the overview’s recovered unknowns, then test the named figure.

From Year 2 to Year 6, Species A grows by $4 \\times 72 = 288$ and Species B by $4 \\times 36 = 144$.

$$\\frac{288}{144}$$

$$= 2$$

The growth ratio is $2:1$, which is not greater than $2.5:1$.

So the statement is False.`,
      `**D.** → True

The populations are equal $t$ years after Year 2 when

$$610 + 72t = 730 + 36t$$

$$
36t = 120 \\Rightarrow t
$$

$$= \\frac{10}{3}$$

$$\\approx 3.333$$

That is Year $5.333$, which lies between Year 2 and Year 6.

So the statement is True.`,
      `**E.** → False

Set $610 + 72t = 730 + 36t$ to find when A catches B:

$$
36t = 120 \\Rightarrow t
$$

$$= \\frac{10}{3}$$

$$\\approx 3.333$$

so equality is at Year $5.333$. At Year 5, three years after Year 2,

$$610 + 3(72)$$

$$= 826$$

$$730 + 3(36)$$

$$= 838$$

A is still behind at Year 5, and equality comes after Year 5.

So the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 59,
    solution_overview: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340). At Year 6: combined population = 1,772. Species A grows at exactly twice the annual rate of Species B.

**Part 1: Building the system.**

Let $x$ = Species A's net annual change (individuals/year), $y$ = Species B's net annual change.

**1. Translate: combined growth of $1772 - 1340 = 432$ over 4 years.** That observation becomes:

$$4x + 4y = 432 \\Rightarrow x + y = 108 \\tag{1}$$

**2. Translate: Species A grows at twice Species B's rate.** That observation becomes:

$$x = 2y \\tag{2}$$

**Part 2: Solve.**

**1.** Substitute $x = 2y$ into $x + y = 108$:

$$
2y + y = 108 \\Rightarrow 3y = 108 \\Rightarrow y = 36
$$

**2.** Then

$$x=2(36)$$

$$=72$$

**3.** Year 6 populations:

$$
A = 610 + 4(72) = 898, \\qquad B = 730 + 4(36) = 874
$$

**Answer.** Species A = +72 individuals/year | Species B = +36 individuals/year | Year 6: A = 898, B = 874.`,
  },
  {
    id: `math-5-60`,
    case_id: `MATH 5.60`,
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
      `If Plant A had operated for the combined time Plant B actually operated across Days 1–2, while Plant B operated for the combined time Plant A actually did, the grand total would exceed the actual combined Day 1 + Day 2 total.`,
      `The combined output rate of both plants together is more than 2.4 times Plant B's rate alone.`,
      `Across all three days combined, total energy production exceeds 11,600 MWh.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered $A = 145$ MWh/hr and $B = 98$ MWh/hr.

$$\\frac{145 - 98}{98} = \\frac{47}{98}$$

$$\\approx 0.4796$$

about $48.0\\%$, which is more than $45\\%$.

So the statement is True.`,
      `**B.** → True

The overview predicted $3543$ MWh for Day 3 against $3553$ MWh recorded.

$$\\frac{|3543 - 3553|}{3553} = \\frac{10}{3553}$$

$$\\approx 0.002815$$

about $0.28\\%$, which is less than $0.3\\%$.

So the statement is True.`,
      `**C.** → False

Across Days 1 and 2, Plant B operated $20 + 9 = 29$ hours and Plant A operated $14 + 22 = 36$ hours. Swapping those totals at the recovered rates gives

$$29 \\times 145 + 36 \\times 98$$

$$= 4205 + 3528$$

$$
= 7733
$$

The actual combined Day 1 + Day 2 total is $3990 + 4072 = 8062$. Since $7733 < 8062$, the swapped grand total does not exceed the actual combined total.

So the statement is False.`,
      `**D.** → True

The combined output rate is $145 + 98 = 243$ MWh/hr.

$$\\frac{243}{98}$$

$$\\approx 2.4796$$

which is more than $2.4$ times Plant B's rate.

So the statement is True.`,
      `**E.** → True

The three recorded daily totals are $3990$, $4072$, and $3553$ MWh.

$$3990 + 4072 + 3553$$

$$= 11615$$

Since $11615 > 11600$, combined production exceeds $11600$ MWh.

So the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 60,
    solution_overview: `Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 1: 14 hrs of A and 20 hrs of B, 3,990 MWh. Day 2: 22 hrs of A and 9 hrs of B, 4,072 MWh. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs), with 11 hrs of B and 3,553 MWh recorded.

**Part 1: Building the system.**

Let $x$ = Plant A's output rate (MWh/operating hr), $y$ = Plant B's output rate (MWh/operating hr).

**1. Translate: Day 1.** That observation becomes:

$$14x + 20y = 3990 \\tag{1}$$

**2. Translate: Day 2.** That observation becomes:

$$22x + 9y = 4072 \\tag{2}$$

**Part 2: Solve.**

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

$$17(145) + 11(98)=2465 + 1078$$

$$=3543$$

versus 3,553 MWh recorded, a 10 MWh discrepancy.

**Answer.** Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded).`,
  },
];

export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [
  ...MATH_CH5_CORE.map((task) => ({
    ...task,
    subsection: task.subsection ?? "5",
  })),
  ...(ch5Exam.tasks as MathTask[]),
];
