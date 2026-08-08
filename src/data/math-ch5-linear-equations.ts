/**
 * Chapter 5 — Linear equations in two unknowns
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
      `Moving 50 crates from North to South (as the memo describes) would leave both depots holding 310 crates each.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The North depot currently holds 360 crates.** — **TRUE**

This claim gives North's current count. Solving the sum-and-difference system gives $2x=620+100=720$, so $x=360$; moving 50 crates then leaves North with $310$.`,
      `**B) The South depot currently holds 240 crates.** — **FALSE**

This claim identifies South's current count. Once North is $360$, the total equation gives $y=620-360=260$, not $240$.`,
      `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.** — **TRUE**

This claim changes the direction of the move, so North gains crates. Starting from $360$, North would hold $360+30=390$.

**Watch.** A move into North is addition for North`,
      `**D) The difference between the two depots today is 120 crates.** — **FALSE**

This claim concerns the current gap, not the number transferred in the memo. The actual difference is $360-260=100$ crates.

**Why it fails.** The 50-crate transfer closes a $100$-crate gap because both sides change`,
      `**E) Moving 50 crates from North to South (as the memo describes) would leave both depots holding 310 crates each.** — **TRUE**

This claim checks the equalizing transfer. The new counts are $360-50=310$ and $260+50=310$, so they match.

**Watch.** Check both depot totals after the same transfer`,
    ],
    difficulty_level: "1/5",
    sort_order: 1,
    solution_overview: `**What's going on.** Let $x$ be the number of crates currently at the North depot and $y$ the number currently at the South depot. The first observation gives their combined stock, while the transfer note says that taking 50 from North and adding 50 to South makes the two stocks equal.

**Model.**
$$
\\begin{cases}
x + y = 620 \\\\
x - y = 100
\\end{cases}
$$

**Solve.**
**Step 1.** Add the equations: $2x=720$, so $x=360$.

**Step 2.** Substitute into the total: $y=620-360=260$.

**Step 3.** Check the transfer described in the memo: $360-50=310$ and $260+50=310$.

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
      `**A) A notebook costs $3.50.** — **TRUE**

This claim states the notebook unit price. The solution gives $x=3.50$, and it fits Invoice #101 because $40(3.50)+25(1.80)=185.00$.`,
      `**B) A pen costs $2.10.** — **FALSE**

This claim states the pen unit price. The elimination gives $-135y=-243.00$, so $y=1.80$, not $2.10$.`,
      `**C) Invoice #101 (40 notebooks and 25 pens) totals $185.00.** — **TRUE**

This claim checks the first invoice with the recovered prices. Its cost is $40(3.50)+25(1.80)=140.00+45.00=185.00$.`,
      `**D) 10 notebooks and 10 pens purchased together would cost $53.00.** — **TRUE**

This claim creates a new equal-quantity purchase. The total is $10(3.50)+10(1.80)=35.00+18.00=53.00$.

**Watch.** Recalculate a new order instead of averaging old invoices`,
      `**E) Invoice #102 (15 notebooks and 60 pens) totals $172.50.** — **FALSE**

This claim gives an incorrect total for the second invoice. Using the prices gives $15(3.50)+60(1.80)=52.50+108.00=160.50$.`,
    ],
    difficulty_level: "1/5",
    sort_order: 2,
    solution_overview: `**What's going on.** Let $x$ be the price of one notebook and $y$ the price of one pen. The two invoices record different quantities of those same items, so each invoice total gives one price equation.

**Model.**
$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

**Solve.**
**Step 1.** Divide the second equation by $15$: $x+4y=10.70$, so $x=10.70-4y$.

**Step 2.** Substitute into the first invoice: $40(10.70-4y)+25y=185.00$. This becomes $428.00-160y+25y=185.00$, so $-135y=-243.00$ and $y=1.80$.

**Step 3.** Find the notebook price: $x=10.70-4(1.80)=3.50$.

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
      `**A) An adult ticket costs $12.00.** — **TRUE**

This claim gives the adult price. Solving the system produces $a=12$, and the evening revenue checks as $160(12)+40(7)=2200$.`,
      `**B) A child ticket costs $7.00.** — **TRUE**

This claim gives the child price. After $a=12$, the simplified evening equation gives $c=55-4(12)=7$.`,
      `**C) The Saturday matinee (90 adult, 150 child) generated $2,050.00 in revenue.** — **FALSE**

This claim understates the matinee revenue. The actual calculation is $90(12)+150(7)=1080+1050=2130$, not $2050$.`,
      `**D) The Saturday evening session (160 adult, 40 child) generated $2,300.00 in revenue.** — **FALSE**

This claim overstates the evening revenue. Its total is $160(12)+40(7)=1920+280=2200$.`,
      `**E) 50 adult tickets and 50 child tickets together would generate $1,000.00.** — **FALSE**

This claim describes a fresh ticket mix. It would bring in $50(12)+50(7)=600+350=950$.

**Why it fails.** Equal ticket counts do not make the two ticket prices equal`,
    ],
    difficulty_level: "1/5",
    sort_order: 3,
    solution_overview: `**What's going on.** Let $a$ be the adult-ticket price and $c$ the child-ticket price. The matinee and evening had different mixes of adult and child tickets, but both sessions used the same two prices.

**Model.**
$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

**Solve.**
**Step 1.** Divide the evening equation by $40$: $4a+c=55$, so $c=55-4a$.

**Step 2.** Substitute into the matinee equation: $90a+150(55-4a)=2130$. Then $90a+8250-600a=2130$, so $-510a=-6120$ and $a=12$.

**Step 3.** Find the child price: $c=55-4(12)=7$.

**Answer.** Adult ticket = $12.00 | Child ticket = $7.00`,
  },
  {
    id: "math-5-4",
    case_id: "MATH 5.04",
    title: `Stripping Out a Delivery Fee Before Pricing a Deli's Menu`,
    context: `Corner Deli delivers office lunches for a flat $8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the $8.00 delivery fee — total charged $70.00. Receipt B: 3 sandwiches, 9 wraps, plus the $8.00 delivery fee — total charged $74.00.`,
    statements: [
      `A sandwich costs $7.00.`,
      `A wrap costs $5.00.`,
      `Receipt A's food subtotal, before the $8.00 delivery fee is added, is $62.00.`,
      `Receipt B's total, including the $8.00 delivery fee, is $74.00.`,
      `A pickup order (no delivery fee) of 5 sandwiches and 5 wraps would cost $60.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sandwich costs $7.00.** — **TRUE**

This claim gives the sandwich price after the delivery fee is removed. The system gives $x=7$, and Receipt A's food is $6(7)+4(5)=62$.

**Watch.** Remove the shared delivery fee before solving for food prices`,
      `**B) A wrap costs $5.00.** — **TRUE**

This claim gives the wrap price. Eliminating sandwiches gives $14y=70$, so $y=5$.`,
      `**C) Receipt A's food subtotal, before the $8.00 delivery fee is added, is $62.00.** — **TRUE**

This claim separates the food from the delivery charge. Receipt A's subtotal is $70.00-8.00=62.00$.`,
      `**D) Receipt B's total, including the $8.00 delivery fee, is $74.00.** — **TRUE**

This claim refers to the printed, fee-included receipt. Its food subtotal is $66.00$, and $66.00+8.00=74.00$.`,
      `**E) A pickup order (no delivery fee) of 5 sandwiches and 5 wraps would cost $60.00.** — **TRUE**

This claim is about food without delivery. The cost is $5(7)+5(5)=35+25=60$.

**Watch.** Do not attach a delivery fee to a pickup order`,
    ],
    difficulty_level: "1/5",
    sort_order: 4,
    solution_overview: `**What's going on.** Let $x$ be the sandwich price and $y$ the wrap price. Each receipt includes the same $8.00 delivery fee, so the food-only totals must be found before comparing the two lunch orders.

**Model.**
$$
\\begin{cases}
6x + 4y = 62.00 \\\\
3x + 9y = 66.00
\\end{cases}
$$

**Solve.**
**Step 1.** Remove the delivery fee: $70.00-8.00=62.00$ and $74.00-8.00=66.00$.

**Step 2.** Multiply the second food equation by $2$: $6x+18y=132$. Subtract $6x+4y=62$ to get $14y=70$, so $y=5$.

**Step 3.** Substitute into $3x+9y=66$: $3x+9(5)=66$, so $3x=21$ and $x=7$.

**Answer.** Sandwich = $7.00 | Wrap = $5.00

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
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
      `**A) $6,500 was placed in Account A.** — **FALSE**

This claim gives an amount for the 4% account. The solved amount is $x=6000$, not $6500$.`,
      `**B) $4,500 was placed in Account B.** — **FALSE**

This claim gives an amount for the 7% account. The system gives $y=4000$, not $4500$; moreover, $6500+4500$ would exceed the $10,000 total.`,
      `**C) Account A earned $260.00 in interest over the year.** — **FALSE**

This claim calculates interest for Account A incorrectly. At 4%, its $6000 balance earns $0.04(6000)=240$.`,
      `**D) Account B earned $210.00 in interest over the year.** — **FALSE**

This claim calculates the 7% account's interest incorrectly. Account B earns $0.07(4000)=280$, and $240+280=520$.`,
      `**E) Had the entire $10,000 been placed in Account B alone, total interest for the year would have been $700.00.** — **TRUE**

This claim places every dollar in the 7% account. The interest would be $0.07(10000)=700$.`,
    ],
    difficulty_level: "1/5",
    sort_order: 5,
    solution_overview: `**What's going on.** Let $x$ be the amount placed in Account A and $y$ the amount placed in Account B. The accounts together received $10,000, and their different interest rates produced a combined $520 in interest.

**Model.**
$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

**Solve.**
**Step 1.** From the total split, $x=10000-y$.

**Step 2.** Substitute into the interest equation: $0.04(10000-y)+0.07y=520$. This gives $400-0.04y+0.07y=520$, so $0.03y=120$ and $y=4000$.

**Step 3.** Find Account A's balance: $x=10000-4000=6000$.

**Answer.** Account A = $6,000 | Account B = $4,000

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.`,
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
      `**A) A Standard chair is priced at $304.00.** — **TRUE**

This claim states the Standard-chair price. Substitution into the shipment equation gives $x=304$.`,
      `**B) A Premium chair is priced at $354.00.** — **FALSE**

This claim is $5 too high. The Premium price is $304+45=349$, not $354$.

**Why it fails.** Add the exact catalogue gap to the solved Standard price`,
      `**C) The 12 Premium chairs in the shipment are worth $4,188.00 in total.** — **TRUE**

This claim uses the Premium-chair value. Their part of the shipment is $12(349)=4188$.`,
      `**D) The price gap between one Premium chair and one Standard chair is $45.00.** — **TRUE**

This claim checks the stated relationship. The solved prices differ by $349-304=45$.`,
      `**E) A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than $3,000.00.** — **TRUE**

This claim evaluates a different order. Its value is $5(304)+5(349)=1520+1745=3265$, which exceeds $3000$.`,
    ],
    difficulty_level: "1/5",
    sort_order: 6,
    solution_overview: `**What's going on.** Let $x$ be the price of a Standard chair and $y$ the price of a Premium chair. Premium chairs cost $45 more each, while the shipment value combines 18 Standard and 12 Premium chairs.

**Model.**
$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

**Solve.**
**Step 1.** Replace $y$ in the shipment equation: $18x+12(x+45)=9660$.

**Step 2.** Expand: $18x+12x+540=9660$, so $30x=9120$ and $x=304$.

**Step 3.** Use the price gap: $y=304+45=349$.

**Answer.** Standard chair = $304.00 | Premium chair = $349.00`,
  },
  {
    id: "math-5-7",
    case_id: "MATH 5.07",
    title: `Extracting a Hidden Rate Structure From a Mobile Ad`,
    context: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid $29.00 in total. A heavy user who went 120 minutes over paid $53.00 — the ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.`,
    statements: [
      `ByteMobile's fixed monthly fee is $17.00.`,
      `The extra-minute rate advertised is $0.30 per minute.`,
      `A customer using 200 extra minutes in a month would pay $80.00.`,
      `A customer using 0 extra minutes would pay $0.00 that month.`,
      `The advertised rate ($0.30 per minute) is more than double a rival plan's rate of $0.20 per minute.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) ByteMobile's fixed monthly fee is $17.00.** — **TRUE**

This claim gives the part of every bill that does not depend on minutes. With $r=0.30$, the 40-minute bill leaves $29.00-40(0.30)=17.00$.`,
      `**B) The extra-minute rate advertised is $0.30 per minute.** — **TRUE**

This claim gives the overage rate. The bills differ by $53.00-29.00=24.00$ over $120-40=80$ minutes, so $r=24/80=0.30$.`,
      `**C) A customer using 200 extra minutes in a month would pay $80.00.** — **FALSE**

This claim evaluates a 200-minute bill. The charge is $17.00+200(0.30)=17.00+60.00=77.00$.

**Why it fails.** Include both the fixed fee and the per-minute charge`,
      `**D) A customer using 0 extra minutes would pay $0.00 that month.** — **FALSE**

This claim ignores the plan's base cost. At zero extra minutes, the bill is $17.00+0(0.30)=17.00$.

**Why it fails.** Zero usage does not remove a fixed monthly fee`,
      `**E) The advertised rate ($0.30 per minute) is more than double a rival plan's rate of $0.20 per minute.** — **FALSE**

This claim compares the two per-minute rates. Double $0.20$ is $0.40$, and $0.30$ is below that amount.

**Why it fails.** Compare the rate with $2(0.20)$, not with $0.20$ itself`,
    ],
    difficulty_level: "1/5",
    sort_order: 7,
    solution_overview: `**What's going on.** Let $f$ be ByteMobile's fixed monthly fee and $r$ its charge for each extra minute. The two customers paid for different overage amounts, but each bill includes the same fixed fee.

**Model.**
$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

**Solve.**
**Step 1.** Subtract the first bill from the second: $80r=24.00$, so $r=0.30$.

**Step 2.** Substitute into the first bill: $f+40(0.30)=29.00$. Thus $f+12.00=29.00$, so $f=17.00$.

**Answer.** Fixed fee = $17.00 | Extra-minute rate = $0.30/min

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
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
      `**A) The division built 75 Standard ovens this week.** — **TRUE**

This claim gives the Standard-oven count. The system gives $s=130-55=75$.`,
      `**B) The division built 45 Deluxe ovens this week.** — **FALSE**

This claim understates the Deluxe count. The hours equation leads to $5d=275$, so $d=55$.`,
      `**C) Standard ovens accounted for 300 assembly hours this week.** — **TRUE**

This claim converts the Standard count into hours. Standard ovens use $4(75)=300$ hours.`,
      `**D) Deluxe ovens accounted for 500 assembly hours this week.** — **FALSE**

This claim gives the wrong Deluxe-hour contribution. Deluxe ovens used $9(55)=495$ hours, and $300+495=795$.`,
      `**E) The total material cost of all Standard ovens built this week is $9,000.00.** — **TRUE**

This claim now uses the material-cost figure for Standard ovens. At $120 each, the cost is $75(120)=9000$.`,
    ],
    difficulty_level: "2/5",
    sort_order: 8,
    solution_overview: `**What's going on.** Let $s$ be the number of Standard ovens and $d$ the number of Deluxe ovens built this week. Their total count is 130, and their different assembly-hour requirements add to 795 hours.

**Model.**
$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

**Solve.**
**Step 1.** From the oven-count equation, $s=130-d$.

**Step 2.** Substitute into the hours equation: $4(130-d)+9d=795$. This becomes $520-4d+9d=795$, so $5d=275$ and $d=55$.

**Step 3.** Find the Standard count: $s=130-55=75$.

**Answer.** Standard ovens = 75 | Deluxe ovens = 55

**Distractor:** The material-cost column is not needed to find the two unknowns — it becomes relevant only for statement E below.`,
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
      `**A) A sofa sells for $350.00.** — **TRUE**

This claim gives the sofa price. The net-sales system solves to $x=350$.`,
      `**B) An armchair sells for $200.00.** — **TRUE**

This claim gives the armchair price. From $2x+y=900$, $y=900-2(350)=200$.`,
      `**C) Riverside's net sales (after its $460 in returns) were $9,300.00.** — **TRUE**

This claim checks Riverside's return adjustment. Its net sales are $9760-460=9300$.`,
      `**D) Hillcrest's gross sales (before its $300 in returns) were $9,300.00.** — **TRUE**

This claim names Hillcrest's gross-sales figure. The $9300$ gross total becomes $9000$ net after subtracting $300$ in returns.`,
      `**E) Had Riverside recorded zero returns that month, its gross and net sales would both have equalled $9,760.00.** — **TRUE**

This claim removes Riverside's returns entirely. With no returns, net sales equal gross sales, which is $9760$.`,
    ],
    difficulty_level: "2/5",
    sort_order: 9,
    solution_overview: `**What's going on.** Let $x$ be the sofa price and $y$ the armchair price. Each branch's gross sales must first be reduced by returns, leaving the net sales generated by its furniture mix.

**Model.**
$$
\\begin{cases}
14x + 22y = 9300 \\\\
20x + 10y = 9000
\\end{cases}
$$

**Solve.**
**Step 1.** Compute net sales: $9760-460=9300$ for Riverside and $9300-300=9000$ for Hillcrest.

**Step 2.** Divide the Hillcrest equation by $10$: $2x+y=900$, so $y=900-2x$.

**Step 3.** Substitute into Riverside's equation: $14x+22(900-2x)=9300$. Then $14x+19800-44x=9300$, so $-30x=-10500$ and $x=350$.

**Step 4.** Find the armchair price: $y=900-2(350)=200$.

**Answer.** Sofa = $350.00 | Armchair = $200.00

**Distractor:** The gross figures cannot be used directly — each branch's returns must be subtracted first to isolate the value of items actually sold at listed prices.

**Net, not gross:** Only *net* units (or net dollars) belong in the price equations. Gross − returns comes first; plugging gross totals skews both unknowns.`,
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
      `**A) PrintFast's setup fee is $12.00.** — **FALSE**

This claim gives the fixed portion of a PrintFast bill. Once the rate is $0.20$, the 120-page order leaves $33.00-24.00=9.00$ for the fee.

**Why it fails.** The difference between order totals comes from extra pages, not from a second setup fee`,
      `**B) PrintFast's per-page rate is $0.25.** — **FALSE**

This claim gives the page charge. The bill increase is $69.00-33.00=36.00$ for $300-120=180$ pages, so $r=36/180=0.20$.`,
      `**C) A 250-page order at PrintFast would cost $60.00.** — **FALSE**

This claim evaluates a new PrintFast order. Its exact cost is $9.00+250(0.20)=59.00$.

**Why it fails.** Do not round $59.00$ up to the rival's flat quote`,
      `**D) For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat $60.00 fee.** — **FALSE**

This claim compares the two companies at 350 pages. PrintFast costs $9.00+350(0.20)=79.00$, which is greater than QuickCopy's $60.00$.

**Why it fails.** The per-page charge makes PrintFast more expensive for this long order`,
      `**E) Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.** — **TRUE**

This claim concerns whether the two bills determine the pricing rule uniquely. Their differing page counts make the rate solvable from the difference, and then either bill fixes the fee.

**Watch.** Once the rate is fixed, one invoice determines the only possible setup fee`,
    ],
    difficulty_level: "2/5",
    sort_order: 10,
    solution_overview: `**What's going on.** Let $f$ be PrintFast's setup fee and $r$ its per-page rate. The two orders have different page counts, so the bill difference isolates the charge for 180 additional pages.

**Model.**
$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

**Solve.**
**Step 1.** Subtract the first order from the second: $180r=36.00$, so $r=0.20$.

**Step 2.** Substitute into the first order: $f+120(0.20)=33.00$. Thus $f+24.00=33.00$, so $f=9.00$.

**Step 3.** For 250 pages, $9.00+250(0.20)=59.00$. For 350 pages, $9.00+350(0.20)=79.00$.

**Answer.** PrintFast setup fee = $9.00 | Rate = $0.20/page

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.`,
  },
  {
    id: "math-5-11",
    case_id: "MATH 5.11",
    title: `Del Sol Food Truck`,
    context: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid $32.00 in total. Ben ordered 2 tacos and 5 burritos — and when he compared receipts with Ana afterward, he realized he had paid exactly $5.00 more than she did, even though neither of them knew the other's order size in advance.`,
    statements: [
      `Ben paid more for his 5 burritos alone than Ana paid for her entire order.`,
      `A burrito costs $2.50 more than a taco.`,
      `Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than $28.00.`,
      `Ben's total order price exceeds $40.00.`,
      `Buying 6 tacos and 6 burritos together would cost $57.00.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) Ben paid more for his 5 burritos alone than Ana paid for her entire order.** — **FALSE**

This claim compares only Ben's burritos with all of Ana's order. Five burritos cost $5(6.00)=30.00$, which is less than Ana's $32.00$ total.`,
      `**B) A burrito costs $2.50 more than a taco.** — **TRUE**

This claim compares the two recovered item prices. The difference is $6.00-3.50=2.50$.`,
      `**C) Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than $28.00.** — **TRUE**

This claim changes Ana's order by removing one burrito. The new total would be $4(3.50)+2(6.00)=14.00+12.00=26.00$, below $28.00$.

**Watch.** Reprice the changed order rather than subtracting an arbitrary amount`,
      `**D) Ben's total order price exceeds $40.00.** — **FALSE**

This claim concerns Ben's complete order. His total is $32.00+5.00=37.00$, which does not exceed $40.00$.`,
      `**E) Buying 6 tacos and 6 burritos together would cost $57.00.** — **TRUE**

This claim makes an equal-quantity order. Its cost is $6(3.50)+6(6.00)=21.00+36.00=57.00$.

**Watch.** Multiply both unit prices by six before adding`,
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview: `**What's going on.** Let $x$ be the taco price and $y$ the burrito price. Ana's receipt gives one total, while Ben paid $5 more than Ana for a different taco-and-burrito order.

**Model.**
$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 37.00
\\end{cases}
$$

**Solve.**
**Step 1.** Ben's total is $32.00+5.00=37.00$.

**Step 2.** Multiply Ben's equation by $2$: $4x+10y=74.00$. Subtract Ana's equation to get $7y=42.00$, so $y=6.00$.

**Step 3.** Substitute into Ana's receipt: $4x+3(6.00)=32.00$. Then $4x=14.00$, so $x=3.50$.

**Answer.** Taco = $3.50 | Burrito = $6.00`,
  },
  {
    id: "math-5-12",
    case_id: "MATH 5.12",
    title: `Northgate Books Monthly Sales Report`,
    context: `Memo — Pricing Desk: "Hardcover editions are priced exactly $5 above the paperback price this quarter, across the board."`,
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
      `**A) A paperback price of $12 is consistent with the pricing desk's $5 gap rule.** — **TRUE**

This claim checks the paperback price against the pricing rule. If $x=12$, then $y=12+5=17$, so the gap is exactly $5$.`,
      `**B) Hardcover editions are priced above $18.** — **FALSE**

This claim describes the hardcover price incorrectly. The solved hardcover price is exactly $17.00$, not above $18$.

**Why it fails.** The $5 gap is added to $12$, not to a guessed round price`,
      `**C) Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been $1,200 higher.** — **TRUE**

This claim adds 100 paperbacks while leaving hardcovers unchanged. The extra revenue is $100(12)=1200$.

**Watch.** Only the changed item count affects the increase`,
      `**D) A customer buying 3 hardcovers and 2 paperbacks would pay less than $75.** — **FALSE**

This claim totals a mixed customer purchase. The cost is $3(17)+2(12)=51+24=75$, exactly equal to $75$.

**Why it fails.** “Less than” excludes an amount that is exactly $75$`,
      `**E) The reported $8,540 total could also have come from selling 310 hardcovers alone.** — **FALSE**

This claim treats the report as a hardcover-only sale. But $310(17)=5270$, far below $8540$.

**Why it fails.** The report's revenue depends on both paperback and hardcover sales`,
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview: `**What's going on.** Let $x$ be the paperback price and $y$ the hardcover price. The sales report gives revenue from 400 paperbacks and 220 hardcovers, while the pricing memo says each hardcover costs $5 more than a paperback.

**Model.**
$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

**Solve.**
**Step 1.** Substitute the memo rule into the revenue equation: $400x+220(x+5)=8540$.

**Step 2.** Expand: $620x+1100=8540$, so $620x=7440$ and $x=12$.

**Step 3.** Use the $5 gap: $y=12+5=17$.

**Answer.** Paperback = $12.00 | Hardcover = $17.00

**Distractor:** Staff headcount and the loyalty-member percentage do not affect unit pricing and should be set aside.`,
  },
  {
    id: "math-5-13",
    case_id: "MATH 5.13",
    title: `SkyLink Mobile Promotional Flyer`,
    context: `SKYLINK MOBILE: BASIC — $15/month base + $2.00/GB overage. STANDARD — base fee and overage rate confirmed by billing history below. PREMIUM — $40/month, unlimited, no overage.`,
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
      `**A) The Standard plan has a lower base fee than the advertised Basic plan.** — **FALSE**

This claim compares Standard's base fee with Basic's advertised $15$. Standard's solved base fee is $38$, which is higher.

**Why it fails.** Compare base fees only, not the plans' overage rates`,
      `**B) The overage rate on the Standard plan is $3.00 per GB.** — **TRUE**

This claim gives the variable charge. The two bills differ by $62-47=15$ over $8-3=5$ GB, so $y=15/5=3$.

**Watch.** Subtract bills to remove the common base fee`,
      `**C) A Standard customer using 10 GB of overage in May would be billed $68.00.** — **TRUE**

This claim applies Standard's confirmed pricing to 10 GB. The bill is $38+10(3)=68$.

**Watch.** Add the base fee once, then add the usage charge`,
      `**D) Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.** — **TRUE**

This claim compares plans at 5 GB. Standard costs $38+5(3)=53$, while Premium is a flat $40$, saving $13$.

**Watch.** Compare both plans at the same usage level`,
      `**E) For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.** — **TRUE**

This claim compares Basic and Standard at 8 GB. Basic costs $15+8(2)=31$, while Standard costs $38+8(3)=62$.

**Watch.** Use each plan's own base fee and rate`,
    ],
    difficulty_level: "2/5",
    sort_order: 13,
    solution_overview: `**What's going on.** Let $x$ be the Standard plan's base fee and $y$ its overage rate per GB. The billing history gives two Standard-plan bills with different overage usage, while the flyer supplies Basic and Premium prices for comparison.

**Model.**
$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

**Solve.**
**Step 1.** Subtract the second bill from the first: $5y=15$, so $y=3$.

**Step 2.** Substitute into $x+3y=47$: $x+9=47$, so $x=38$.

**Answer.** Standard base fee = $38.00 | Overage rate = $3.00/GB

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
  },
  {
    id: "math-5-14",
    case_id: "MATH 5.14",
    title: `Lakeview Inn Booking Confirmations`,
    context: `LAKEVIEW INN — Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.`,
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
      `**A) After removing the occupancy tax, Weekend 1's booking revenue was $2,240.00.** — **TRUE**

This claim reverses the 8% tax on Weekend 1. Dividing the printed total gives $2419.20\\div1.08=2240.00$.

**Watch.** Undo a percentage increase by dividing by its multiplier`,
      `**B) A Suite costs $200 more per night than a Standard room.** — **FALSE**

This claim overstates the room-rate gap. The pre-tax difference is $210-140=70$.

**Why it fails.** Compare pre-tax room rates, not tax-included totals`,
      `**C) Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.** — **FALSE**

This claim compares two pre-tax bookings. Six Standard rooms cost $6(140)=840$, and four Suites cost $4(210)=840$.

**Why it fails.** The amounts are equal, so neither booking costs less`,
      `**D) Including the 8% tax, a single Suite night costs $226.80.** — **TRUE**

This claim adds occupancy tax to one Suite. The taxed cost is $210(1.08)=226.80$.

**Watch.** Apply the tax multiplier after finding the pre-tax rate`,
      `**E) Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by $210.** — **TRUE**

This claim adds exactly one Suite while leaving everything else unchanged. One more Suite contributes its pre-tax rate of $210$.

**Watch.** With quantities otherwise fixed, one added room changes revenue by one unit price`,
    ],
    difficulty_level: "2/5",
    sort_order: 14,
    solution_overview: `**What's going on.** Let $x$ be the pre-tax nightly rate for a Standard room and $y$ the pre-tax nightly rate for a Suite. The two booking confirmations include 8% occupancy tax, so each printed total must be divided by $1.08$ before it can describe room revenue.

**Model.**
$$
\\begin{cases}
10x + 4y = 2240.00 \\\\
7x + 9y = 2870.00
\\end{cases}
$$

**Solve.**
**Step 1.** Remove tax: $2419.20\\div1.08=2240.00$ and $3099.60\\div1.08=2870.00$.

**Step 2.** Divide the first equation by $2$: $5x+2y=1120$, so $y=(1120-5x)/2$.

**Step 3.** Substitute into the second equation. Doubling first gives $14x+9(1120-5x)=5740$, so $14x+10080-45x=5740$. Thus $-31x=-4340$ and $x=140$.

**Step 4.** Find the Suite rate: $y=(1120-5(140))/2=210$.

**Answer.** Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
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
      `**A) Component A's unit cost is $12.** — **TRUE**

This claim gives Component A's actual cost. Elimination produces $31x=372$, so $x=12$.`,
      `**B) Component B's unit cost is $18.** — **FALSE**

This claim mistakes the forecast implication for the actual price. After $x=12$, $5(12)+3y=105$ gives $y=15$, not $18$.`,
      `**C) The March forecast assumes higher unit prices than what actually applied in January and February.** — **TRUE**

This claim compares March's forecast with the actual prices. At actual costs, the forecast quantities would value at $200(12)+100(15)=3900$, below the forecast total of $4700$.

**Watch.** A higher total for the same forecast quantities signals an assumed price increase`,
      `**D) If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be $4,700.** — **FALSE**

This claim uses the wrong valuation basis. The actual-price value is $200(12)+100(15)=2400+1500=3900$.

**Why it fails.** The $4700$ total belongs to the forecast's increased-price assumption`,
      `**E) The combined actual inventory value recorded for January and February is $6,810.** — **TRUE**

This claim combines the two actual monthly values. Adding them gives $3150+3660=6810$.`,
    ],
    difficulty_level: "2/5",
    sort_order: 15,
    solution_overview: `**What's going on.** Let $x$ be Component A's actual unit cost and $y$ Component B's actual unit cost. January and February provide actual quantity-and-value records; March is only a forecast and is used later to judge claims about the projected prices.

**Model.**
$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

**Solve.**
**Step 1.** Simplify the equations: $5x+3y=105$ and $13x+14y=366$.

**Step 2.** Multiply them to align $y$: $70x+42y=1470$ and $39x+42y=1098$.

**Step 3.** Subtract: $31x=372$, so $x=12$.

**Step 4.** Substitute into $5x+3y=105$: $5(12)+3y=105$, so $3y=45$ and $y=15$.

**Answer.** Component A = $12.00/unit | Component B = $15.00/unit

**Distractor:** Only the January and February rows report actual recorded values; March is explicitly labelled a forecast and cannot be used to solve for today's unit costs.

**Source check:** Projected rows, ads, and verbal claims are for judging statements — only measured invoices/logs go into the solving system.`,
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
      `**A) The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.** — **FALSE**

The regular rate is $14$, so the contract requires $1.5(14)=21$ per overtime hour. Payroll used $24$, which is $3$ higher per overtime hour.`,
      `**B) The regular hourly wage is $14.** — **TRUE**

Subtracting the two payroll equations cancels the $40x$ regular-pay term and gives $4y=96$, so $y=24$. Then $40x+2(24)=608$ gives $x=14$.`,
      `**C) Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly $6.00 on their overtime hours.** — **TRUE**

Worker 2 has 2 overtime hours. Contract pay would be $2(21)=42$, but actual overtime pay was $2(24)=48$, a difference of $6$.`,
      `**D) A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn $656.** — **TRUE**

At the actual rates, the worker earns $40(14)+4(24)$. That is $560+96=656$.

**Watch.** This statement uses the observed $24$ overtime rate, not the contract rate`,
      `**E) That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn $644.** — **TRUE**

Under the contract, overtime is $21$ per hour. The total would be $40(14)+4(21)=560+84=644$.

**Why it fails.** Only the overtime portion changes from $656$ to $644$`,
    ],
    difficulty_level: "2/5",
    sort_order: 16,
    solution_overview: `**What's going on.** The two payroll totals combine 40 regular hours with different numbers of overtime hours. Solving them reveals the rates that were actually paid, then those rates can be compared with the contract.

**Model.**
$$
\\begin{cases}
40x+6y=704 \\\\
40x+2y=608
\\end{cases}
$$

**Solve.**
**Step 1.** Subtract the second equation from the first: $4y=96$, so $y=24$.

**Step 2.** Substitute $y=24$ into $40x+2y=608$: $40x+48=608$, so $x=14$.

**Step 3.** The contract rate would be $1.5(14)=21$, while the actual overtime rate is $24$.

**Answer.** Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)`,
  },
  {
    id: "math-5-17",
    case_id: "MATH 5.17",
    title: `Riverside Water Utility, Billing Dispute`,
    context: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed $56.10 — but May's bill also carried a 10% late penalty applied to the entire bill. In June she used 25 m³ with no penalty, billed $65.00. The billing office insists its fixed charge is $18.00 and its rate is $1.85 per m³.`,
    statements: [
      `The billing office's claim of an $18.00 fixed monthly charge is correct.`,
      `The rate charged is $2.00 per cubic metre.`,
      `After removing the late penalty, May's actual water charge was $51.00.`,
      `A customer using 40 m³ in a month would be billed $85.00.`,
      `Had the same 10% late penalty been applied to June's $65.00 bill, the total would have been $71.50.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The billing office's claim of an $18.00 fixed monthly charge is correct.** — **FALSE**

After removing the penalty, May's bill is $51$. With a $2$ rate, its usage costs $18(2)=36$, leaving a fixed charge of $15$, not $18$.`,
      `**B) The rate charged is $2.00 per cubic metre.** — **TRUE**

The bills differ by $65-51=14$ after May is corrected. Usage differs by $25-18=7$ m³, so the rate is $14\\div7=2$ dollars per m³.

**Watch.** The rate comes from changes in bill and usage, because the fixed fee cancels`,
      `**C) After removing the late penalty, May's actual water charge was $51.00.** — **TRUE**

The $56.10$ total is 110% of the original bill. Dividing by $1.10$ gives $51.00$.`,
      `**D) A customer using 40 m³ in a month would be billed $85.00.** — **FALSE**

The correct formula is $15+2u$. At $u=40$, the bill is $15+2(40)=95$.

**Watch.** Keep the fixed $15$ charge when projecting another month's bill`,
      `**E) Had the same 10% late penalty been applied to June's $65.00 bill, the total would have been $71.50.** — **TRUE**

A 10% penalty multiplies the bill by $1.10$. Thus $65(1.10)=71.50$.

**Why it fails.** The extra charge is $6.50$, so the final total is $71.50$, not $6.50$`,
    ],
    difficulty_level: "2/5",
    sort_order: 17,
    solution_overview: `**What's going on.** May's printed amount includes a 10% late penalty, so it must first be converted back to its unpenalized bill. The two clean charge equations then determine the fixed fee and per-cubic-metre rate.

**Model.**
$$
\\begin{cases}
x+18y=56.10\\div1.10=51.00 \\\\
x+25y=65.00
\\end{cases}
$$

**Solve.**
**Step 1.** Remove May's penalty: $56.10\\div1.10=51.00$.

**Step 2.** Subtract the first equation from the second: $7y=14$, so $y=2$.

**Step 3.** Substitute into $x+18y=51$: $x+36=51$, so $x=15$.

**Answer.** Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)

**Peel-first:** Remove a percentage penalty with division by its multiplier; subtracting 10% of the printed bill would not undo the charge correctly.`,
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
      `**A) For a 10 km ride, CityCab works out cheaper than MetroX.** — **TRUE**

CityCab charges $6+10(1)=16$. MetroX charges $6+10(1.5)=21$, so CityCab is $5$ cheaper.`,
      `**B) Both companies charge the same base fare of $6.00.** — **TRUE**

CityCab's rate is $1$, so $14-8(1)=6$. MetroX's rate is $1.50$, so $13.50-5(1.50)=6$.`,
      `**C) For distances under 4 km, MetroX would be cheaper than CityCab.** — **FALSE**

Their fares are $6+d$ and $6+1.5d$. For every positive $d$, $1.5d>d$, so MetroX costs more.

**Watch.** A shared base means the larger per-kilometre rate loses immediately after 0 km`,
      `**D) A 30 km CityCab ride costs $36.00.** — **TRUE**

CityCab's formula is $6+d$. At 30 km, $6+30=36$.`,
      `**E) There is a distance of 5 km at which both companies charge exactly the same fare.** — **FALSE**

Equating $6+d$ and $6+1.5d$ gives $d=1.5d$, so $d=0$. At 5 km, the fares are $11$ and $13.50$.`,
    ],
    difficulty_level: "2/5",
    sort_order: 18,
    solution_overview: `**What's going on.** Each company has a base fare plus a per-kilometre charge, but the two companies must be solved separately. Their resulting formulas can then be compared at any distance.

**Model.**
$$
\\begin{cases}
x_1+8y_1=14 \\\\
x_1+20y_1=26 \\\\
x_2+5y_2=13.50 \\\\
x_2+15y_2=28.50
\\end{cases}
$$

**Solve.**
**Step 1.** For CityCab, subtract to get $12y_1=12$, hence $y_1=1$ and $x_1=6$.

**Step 2.** For MetroX, subtract to get $10y_2=15$, hence $y_2=1.5$ and $x_2=6$.

**Step 3.** The formulas are $6+d$ and $6+1.5d$.

**Answer.** CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km

**Two boards:** Solve one company's pair of fares fully before comparing it with the other company.`,
  },
  {
    id: "math-5-19",
    case_id: "MATH 5.19",
    title: `Bramble & Co., Vendor Quotation Comparison`,
    context: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright — both quotes only show bundled order totals. Bramble needs 40 units of X and 30 units of Y next month.`,
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
      `**A) Vendor A charges less than Vendor B for Product X.** — **TRUE**

Vendor A charges $9$ per X, while Vendor B charges $11$ per X. Therefore A is $2$ cheaper for each X unit.

**Watch.** Compare the two X prices only; Y's prices answer a different claim`,
      `**B) Vendor B charges less than Vendor A for Product Y.** — **TRUE**

Vendor B's Y price is $16$, compared with Vendor A's $18$. B is therefore $2$ cheaper per Y unit.

**Why it fails.** The cheaper vendor switches between X and Y, so there is no single always-cheaper supplier`,
      `**C) For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.** — **TRUE**

Vendor A costs $40(9)+30(18)=900$. Vendor B costs $40(11)+30(16)=920$, so A is lower by $20$.`,
      `**D) Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by $20.** — **FALSE**

The current Vendor A total is $900$, while Vendor B would cost $920$. Switching raises the cost by $20$.

**Why it fails.** State the direction of the difference as well as its size`,
      `**E) If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.** — **TRUE**

For Y only, Vendor A costs $60(18)=1080$ and Vendor B costs $60(16)=960$. Vendor B saves $120$.

**Watch.** With no X units, A's lower X price is irrelevant`,
    ],
    difficulty_level: "2/5",
    sort_order: 19,
    solution_overview: `**What's going on.** The same two products have different unit prices at two vendors, so each vendor requires its own system. Once both price lists are known, the proposed order can be priced under each one.

**Model.**
$$
\\begin{cases}
20x_A+15y_A=450 \\\\
25x_A+12y_A=441 \\\\
20x_B+15y_B=460 \\\\
25x_B+12y_B=467
\\end{cases}
$$

**Solve.**
**Step 1.** Solve Vendor A's equations to get $x_A=9$ and $y_A=18$.

**Step 2.** Solve Vendor B's equations to get $x_B=11$ and $y_B=16$.

**Step 3.** For $40$ X and $30$ Y, the totals are $40(9)+30(18)=900$ and $40(11)+30(16)=920$.

**Answer.** Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16

**Two boards:** A lower price for one product does not make a vendor cheaper for every order.`,
  },
  {
    id: "math-5-20",
    case_id: "MATH 5.20",
    title: `Alpha & Beta Holdings, Quarterly Dashboard`,
    context: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned $27,200 in Q1 revenue, and Beta earned exactly $1,000 more than Alpha. Alpha sold 150 units of P and 80 subscriptions of Q; Beta sold 100 units of P and 130 subscriptions of Q. (Alpha's headcount grew 8% year-on-year versus Beta's 6% — a staffing detail with no bearing on pricing.)`,
    statements: [
      `Product P is priced at $50 and Service Q at $70, identically for both companies.`,
      `Beta generated more Q1 revenue than Alpha.`,
      `If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.`,
      `Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.`,
      `Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Product P is priced at $50 and Service Q at $70, identically for both companies.** — **TRUE**

Using Alpha's $13,100$ and Beta's $14,100$ revenue equations gives $x=50$ and $y=70$. Both equations use those same market prices.`,
      `**B) Beta generated more Q1 revenue than Alpha.** — **TRUE**

The sum-and-difference information gives Beta $14,100$ and Alpha $13,100$. Beta is exactly $1,000$ higher.`,
      `**C) If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.** — **FALSE**

P rises from $50$ to $55$, adding $150(5)=750$ to Alpha's $13,100$. The new total is $13,850$, an increase of about $5.7%$.

**Watch.** A percentage change in one revenue component is not the same percentage change in the whole total`,
      `**D) Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.** — **FALSE**

Alpha's projected revenue is $13,850$. Beta's current revenue is $14,100$, so Alpha remains $250$ lower.

**Why it fails.** Calculate the new Alpha total before comparing it with Beta's benchmark`,
      `**E) Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.** — **TRUE**

Beta's Q revenue is $130(70)=9100$. Alpha's P revenue is $150(50)=7500$, so $9100>7500$.`,
    ],
    difficulty_level: "2/5",
    sort_order: 20,
    solution_overview: `**What's going on.** The total revenue and the $1,000 difference first determine each company's Q1 revenue. Those revenues then form two equations for the common prices of Product P and Service Q.

**Model.**
$$
\\begin{cases}
A+B=27200 \\\\
B-A=1000 \\\\
150x+80y=13100 \\\\
100x+130y=14100
\\end{cases}
$$

**Solve.**
**Step 1.** Add the first two equations: $2B=28200$, so $B=14100$ and $A=13100$.

**Step 2.** Eliminate from $150x+80y=13100$ and $100x+130y=14100$ to get $x=50$ and $y=70$.

**Answer.** Product P = $50.00 | Service Q = $70.00

**Source check:** The headcount percentages do not affect revenue pricing and do not belong in the system.`,
  },
  {
    id: "math-5-21",
    case_id: "MATH 5.21",
    title: `FitZone Gym — Checking the Advertised Rates`,
    context: `FITZONE GYM — NEW MEMBER SPECIAL! "Join for just a $30 signup fee, then only $45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid $284 total. Jason, after his 10th monthly payment, had paid $448 total.`,
    statements: [
      `The flyer's advertised $30 signup fee matches what members are actually being charged.`,
      `The monthly rate members are actually paying is lower than the advertised $45/month.`,
      `Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.`,
      `Jason paid more than $400 in total by his 10th payment.`,
      `A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay $492.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) The flyer's advertised $30 signup fee matches what members are actually being charged.** — **FALSE**

The records give a signup fee of $38$. That is $8$ more than the advertised $30$.

**Why it fails.** Infer the fee from the histories instead of trusting the promotion`,
      `**B) The monthly rate members are actually paying is lower than the advertised $45/month.** — **TRUE**

The monthly rate from the two histories is $41$. Since $41<45$, the ongoing charge is lower than advertised.

**Watch.** The flyer is wrong in two different directions: the fee is higher, but the monthly rate is lower`,
      `**C) Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.** — **FALSE**

The flyer would produce $30+6(45)=300$. Maria actually paid $284$, which is $16$ less.

**Why it fails.** Include the one-time signup fee when making the six-month flyer comparison`,
      `**D) Jason paid more than $400 in total by his 10th payment.** — **TRUE**

Jason's listed total is $448$. Since $448>400$, the claim follows directly.

**Watch.** This is about the recorded total, not a recomputation using the flyer`,
      `**E) A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay $492.** — **TRUE**

With no signup fee, only the $41$ monthly rate remains. Thus $12(41)=492$.

**Why it fails.** Do not add the $38$ fee after the statement explicitly removes it`,
    ],
    difficulty_level: "3/5",
    sort_order: 21,
    solution_overview: `**What's going on.** Both members paid the same signup fee plus the same monthly rate, but for different month counts. Their payment histories reveal the actual charges, which can be tested against the flyer.

**Model.**
$$
\\begin{cases}
x+6y=284 \\\\
x+10y=448
\\end{cases}
$$

**Solve.**
**Step 1.** Subtract the first equation from the second: $4y=164$, so $y=41$.

**Step 2.** Substitute into Maria's equation: $x+6(41)=284$, so $x=38$.

**Answer.** Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)

**Distractor:** The advertised $30$ and $45$ are claims to test, not the values to insert into the model.`,
  },
  {
    id: "math-5-22",
    case_id: "MATH 5.22",
    title: `StreamPlus — Household Billing Comparison`,
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
      `**A) The Basic plan costs $19 per month.** — **TRUE**

Elimination gives $22x=418$. Therefore $x=19$ dollars per Basic plan-month.`,
      `**B) The Premium plan costs $35 per month.** — **FALSE**

After finding Basic at $19$, $4(19)+3y=169$ gives $3y=93$ and $y=31$. Premium is not $35$.

**Why it fails.** Finish the substitution rather than guessing a round price`,
      `**C) Household 2's combined total is more than double Household 1's combined total.** — **FALSE**

Household 2 totals $255$. Double Household 1's $169$ is $338$, and $255<338$.

**Watch.** “More than double” requires comparing with $338$, not merely noting that $255$ is larger than $169$`,
      `**D) There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.** — **FALSE**

For $n$ months the costs are $19n$ and $31n$. They are equal only if $12n=0$, so $n=0$, not a positive number.

**Why it fails.** With no fixed fee, unequal monthly rates cannot cross after zero months`,
      `**E) A household billed for 5 months of Basic and 5 months of Premium would owe a combined $250.** — **TRUE**

The charge is $5(19)+5(31)=95+155=250$.

**Watch.** Both five-month portions must be included once`,
    ],
    difficulty_level: "3/5",
    sort_order: 22,
    solution_overview: `**What's going on.** The household totals are combinations of Basic and Premium plan-months with no connection fee. Solving the two equations gives each plan's monthly price.

**Model.**
$$
\\begin{cases}
4x+3y=169 \\\\
2x+7y=255
\\end{cases}
$$

**Solve.**
**Step 1.** Multiply the first equation by $7$ and the second by $3$ to make $21y$ in both equations.

**Step 2.** Subtract: $22x=418$, so $x=19$.

**Step 3.** Substitute into $4x+3y=169$: $76+3y=169$, so $y=31$.

**Answer.** Basic = $19.00/month | Premium = $31.00/month`,
  },
  {
    id: "math-5-23",
    case_id: "MATH 5.23",
    title: `Willow Market — Grocery Receipts`,
    context: `Two items — organic apples and almond milk — recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.)`,
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
      `**A) Organic apples cost $4.80 per pound.** — **TRUE**

After known items are removed, elimination gives $19x=91.20$. Hence $x=4.80$ per pound.`,
      `**B) Almond milk costs less than organic apples, per unit.** — **FALSE**

Almond milk costs $6$ per carton, while apples cost $4.80$ per pound. Numerically, $6>4.80$.

**Why it fails.** Use the solved unit prices rather than comparing item quantities on a receipt`,
      `**C) Five pounds of apples costs exactly the same as four cartons of almond milk.** — **TRUE**

Five pounds cost $5(4.80)=24$. Four cartons cost $4(6)=24$.`,
      `**D) If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than $47.00.** — **FALSE**

A 5% discount on $50$ is $2.50$. The reduced total would be $50-2.50=47.50$, which is above $47$.

**Why it fails.** “Less than $47$” is stricter than “about $47$.”`,
      `**E) Buying 10 lb of apples and 2 cartons of milk together costs more than $60.** — **FALSE**

The cost is $10(4.80)+2(6)=48+12=60$. It equals $60$; it does not exceed it.

**Watch.** Respect the strict wording “more than.”`,
    ],
    difficulty_level: "3/5",
    sort_order: 23,
    solution_overview: `**What's going on.** Known bread and egg charges are removed from the receipts, leaving equations only for apples and almond milk. The loyalty note is irrelevant because neither receipt received that discount.

**Model.**
$$
\\begin{cases}
5x+3y=50.00-3.60-4.40=42.00 \\\\
2x+5y=43.20-3.60=39.60
\\end{cases}
$$

**Solve.**
**Step 1.** Multiply the equations by $5$ and $3$, respectively, so each has $15y$.

**Step 2.** Subtract: $19x=91.20$, so $x=4.80$.

**Step 3.** Substitute into $5x+3y=42$: $24+3y=42$, so $y=6$.

**Answer.** Organic apples = $4.80/lb | Almond milk = $6.00/carton

**Receipt:** Remove every known-price line before using a receipt to solve for the unknown items.`,
  },
  {
    id: "math-5-24",
    case_id: "MATH 5.24",
    title: `BrightHome Energy — Monthly Utility Bills`,
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
      `**A) The fixed connection fee is $33.** — **TRUE**

At 240 units, usage costs $240(0.21)=50.40$. Subtracting from $83.40$ leaves $33$.

**Watch.** Back-substitution is the direct way to recover the fixed portion`,
      `**B) Customer service's claimed rate of $0.24 per unit is correct.** — **FALSE**

The bill difference is $112.80-83.40=29.40$ for $380-240=140$ extra units. Thus the rate is $29.40\\div140=0.21$.`,
      `**C) At 280 units of usage, the standard plan costs less than $95.** — **TRUE**

The standard bill is $33+280(0.21)=33+58.80=91.80$. Since $91.80<95$, the claim is true.

**Watch.** Include the connection fee as well as the usage charge`,
      `**D) The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.** — **FALSE**

Solar is $0.29u$, while standard is $33+0.21u$. They meet at $412.5$ units; above that, standard's lower rate wins.

**Why it fails.** A plan with no fee can be cheaper initially without being cheaper forever`,
      `**E) At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.** — **FALSE**

Standard costs $33+500(0.21)=138$. Solar costs $500(0.29)=145$, so Solar is $7$ more.

**Watch.** Since 500 is above 412.5, use the post-crossover conclusion`,
    ],
    difficulty_level: "3/5",
    sort_order: 24,
    solution_overview: `**What's going on.** Standard bills contain one fixed connection fee plus a per-unit usage charge. After solving that formula, it can be compared with Solar's no-fee $0.29$ per-unit plan.

**Model.**
$$
\\begin{cases}
x+240y=83.40 \\\\
x+380y=112.80
\\end{cases}
$$

**Solve.**
**Step 1.** Subtract: $140y=29.40$, so $y=0.21$.

**Step 2.** Substitute into the first bill: $x+240(0.21)=83.40$, so $x=33$.

**Step 3.** Set $33+0.21u=0.29u$ to get the crossover $u=412.5$.

**Answer.** Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)

**Base + rate:** The fixed fee matters at low usage; the lower standard rate matters after the crossover.`,
  },
  {
    id: "math-5-25",
    case_id: "MATH 5.25",
    title: `Trattoria Bella — Off-Peak vs. Peak Bills`,
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
      `**A) A pasta dish costs $19.** — **TRUE**

After Table 8's fee is removed, solving the menu system gives $x=19$. Substitution also gives appetizer price $y=15$.

**Watch.** Do not use the $220$ printed Table 8 amount as its pre-fee food total`,
      `**B) An appetizer costs more than a pasta dish.** — **FALSE**

An appetizer costs $15$, while pasta costs $19$. Since $15<19$, the appetizer is cheaper.

**Why it fails.** The quantity of appetizers in Table 8 does not indicate its unit price`,
      `**C) Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly $26.00.** — **TRUE**

Table 8's subtotal is $220\\div1.10=200$. Comparing it with Table 5's $174$ gives $200-174=26$.`,
      `**D) If Table 5 had also been charged the 10% peak-hour service fee, its total would have been $191.40.** — **TRUE**

Apply the multiplier to Table 5's $174$ subtotal: $174(1.10)=191.40$.

**Why it fails.** Add 10% of $174$, which is $17.40$, rather than adding a flat $10$`,
      `**E) Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than $150.** — **TRUE**

The subtotal is $4(19)+4(15)=136$. With service, $136(1.10)=149.60$, which is below $150$.

**Watch.** Keep the cents: rounding $149.60$ early can obscure the strict comparison`,
    ],
    difficulty_level: "3/5",
    sort_order: 25,
    solution_overview: `**What's going on.** Table 8's printed total includes a 10% service charge, so its food subtotal must be recovered before the two menu-price equations are formed. Table 5 already gives an off-peak subtotal.

**Model.**
$$
\\begin{cases}
6x+4y=174 \\\\
5x+7y=(174+46)\\div1.10=200
\\end{cases}
$$

**Solve.**
**Step 1.** Divide the first equation by $2$ to get $3x+2y=87$.

**Step 2.** Multiply this by $7$ and the second equation by $2$; subtracting gives $11x=209$, so $x=19$.

**Step 3.** Substitute: $3(19)+2y=87$, so $y=15$.

**Answer.** Pasta dish = $19.00 | Appetizer = $15.00

**Peel-first:** The $220$ printed peak bill is 110% of its $200$ food subtotal.`,
  },
  {
    id: "math-5-26",
    case_id: "MATH 5.26",
    title: `Meridian Distribution — Warehouse Inventory Summary`,
    context: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost — but only item counts and cost determine unit pricing.`,
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
      `**A) Item M costs $21 per unit.** — **TRUE**

Elimination gives $109x=2289$. Therefore $x=21$ dollars per M unit.`,
      `**B) Item N costs $30 per unit.** — **FALSE**

With $x=21$, the reduced first equation becomes $231+8y=447$. Thus $8y=216$ and $y=27$, not $30$.`,
      `**C) Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.** — **FALSE**

Shipment 1 averages $4470\\div190\\approx23.53$ per item. Shipment 2 averages $5520\\div220\\approx25.09$, so the averages differ.`,
      `**D) 150 units of Item N alone would cost $4,050.** — **TRUE**

Item N costs $27$ each. Thus $150(27)=4050$.

**Why it fails.** This uses only N's unit price; Item M has no role in an N-only purchase`,
      `**E) Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.** — **FALSE**

The cost equations use only item counts and the $21$ and $27$ unit prices. Weight is not a coefficient in either cost model.`,
    ],
    difficulty_level: "3/5",
    sort_order: 26,
    solution_overview: `**What's going on.** Shipment cost depends on quantities of Items M and N and their unit prices. The logged weight and volume are not part of the pricing equations.

**Model.**
$$
\\begin{cases}
110x+80y=4470 \\\\
70x+150y=5520
\\end{cases}
$$

**Solve.**
**Step 1.** Divide by $10$: $11x+8y=447$ and $7x+15y=552$.

**Step 2.** Multiply by $15$ and $8$ to eliminate $y$: $109x=2289$, so $x=21$.

**Step 3.** Substitute: $11(21)+8y=447$, so $y=27$.

**Answer.** Item M = $21.00/unit | Item N = $27.00/unit

**Distractor:** Weight and volume may matter for freight records, but they do not determine these item prices.`,
  },
  {
    id: "math-5-27",
    case_id: "MATH 5.27",
    title: `Green Horizons Landscaping — Job Quotation`,
    context: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly. Job 1: 7 bundles — Total $1,946. Job 2: 13 Standard + 21 Premium — Total $1,301. New Quotation: 8 Standard + 19 Premium — Quoted Total: $1,068.`,
    statements: [
      `Standard planting costs $29 per unit.`,
      `Premium planting costs $50 per unit.`,
      `Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.`,
      `The Premium portion alone of Job 1 cost more than the entirety of Job 2.`,
      `The new quotation of $1,068 is mathematically consistent with the confirmed rates.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Standard planting costs $29 per unit.** — **TRUE**

After expanding Job 1, elimination yields $x=29$. The original Job 1 total checks as $14(29)+35(44)=1946$.`,
      `**B) Premium planting costs $50 per unit.** — **FALSE**

Using $x=29$ in $2x+5y=278$ gives $58+5y=278$. Therefore $y=44$, not $50$.`,
      `**C) Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.** — **TRUE**

Each of the 7 bundles has 2 Standard and 5 Premium units. So the counts are $7(2)=14$ and $7(5)=35$.`,
      `**D) The Premium portion alone of Job 1 cost more than the entirety of Job 2.** — **TRUE**

Job 1's Premium portion costs $35(44)=1540$. Job 2's whole invoice is $1301$, so $1540>1301$.

**Why it fails.** A component total can exceed another job's full total when its quantity is large enough`,
      `**E) The new quotation of $1,068 is mathematically consistent with the confirmed rates.** — **TRUE**

The quote should be $8(29)+19(44)=232+836=1068$. This matches the stated $1,068$ exactly.`,
    ],
    difficulty_level: "3/5",
    sort_order: 27,
    solution_overview: `**What's going on.** Job 1's seven bundles must be expanded into individual Standard and Premium units before it can be compared with Job 2. The solved rates can then test the new quotation.

**Model.**
$$
\\begin{cases}
14x+35y=1946 \\\\
13x+21y=1301
\\end{cases}
$$

**Solve.**
**Step 1.** Expand Job 1: $7(2)=14$ Standard and $7(5)=35$ Premium units.

**Step 2.** Divide the first equation by $7$ and eliminate to get $x=29$.

**Step 3.** From $2(29)+5y=278$, get $y=44$. The quotation is $8(29)+19(44)=1068$.

**Answer.** Standard = $29.00/unit | Premium = $44.00/unit`,
  },
  {
    id: "math-5-28",
    case_id: "MATH 5.28",
    title: `Horizon Consulting — Travel Reimbursement Memo`,
    context: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is $0.40/mile, unconfirmed against payroll data. One of three reports contains a data-entry error making it financially impossible.`,
    tables_markdown: `| Report | Meal Days | Miles Driven | Total Reimbursed |
| --- | --- | --- | --- |
| Report 1 | 5 | 150 | $323 |
| Report 2 | 3 | 250 | $245 |
| Report 3 | 7 | 40 | $120 |`,
    statements: [
      `The per diem is $55 per day.`,
      `Finance's belief that the mileage rate is $0.40/mile is correct.`,
      `Report 3 is impossible, since 7 meal days alone would require at least $385 at the confirmed per-diem rate — far more than its reported $120 total.`,
      `Report 1's total exceeds Report 2's total by more than $80.`,
      `Reports 1 and 2 combined reimbursed at least $550.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The per diem is $55 per day.** — **TRUE**

Using the valid reports gives $y=0.32$ per mile. Report 1 then gives $5x+150(0.32)=323$, so $5x=275$ and $x=55$.`,
      `**B) Finance's belief that the mileage rate is $0.40/mile is correct.** — **FALSE**

Elimination gives $800y=256$. Thus $y=0.32$, which is $0.08$ below Finance's claimed rate.`,
      `**C) Report 3 is impossible, since 7 meal days alone would require at least $385 at the confirmed per-diem rate — far more than its reported $120 total.** — **TRUE**

Seven meal days cost $7(55)=385$ before mileage is added. A reported total of $120$ cannot pay even that portion.

**Watch.** A nonnegative mileage charge cannot reduce the required reimbursement`,
      `**D) Report 1's total exceeds Report 2's total by more than $80.** — **FALSE**

The difference is $323-245=78$. Since $78$ is not greater than $80$, the statement fails.

**Why it fails.** “More than $80$” excludes a difference of $80$ or less`,
      `**E) Reports 1 and 2 combined reimbursed at least $550.** — **TRUE**

Their combined total is $323+245=568$. Since $568\\ge550$, the claim is true.

**Watch.** “At least” allows equality, but this sum is actually $18$ above the threshold`,
    ],
    difficulty_level: "3/5",
    sort_order: 28,
    solution_overview: `**What's going on.** Reports 1 and 2 each combine meal-day per diem with mileage reimbursement. Report 3 is impossible because its listed total is below the meal-day amount alone, so it must be excluded.

**Model.**
$$
\\begin{cases}
5x+150y=323 \\\\
3x+250y=245
\\end{cases}
$$

**Solve.**
**Step 1.** Multiply the equations by $3$ and $5$ to make $15x$.

**Step 2.** Subtract: $800y=256$, so $y=0.32$.

**Step 3.** Substitute into Report 1: $5x+48=323$, so $x=55$.

**Answer.** Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)

**Base + rate:** Reject a record that cannot cover its fixed per-day component before using it to solve the system.`,
  },
  {
    id: "math-5-29",
    case_id: "MATH 5.29",
    title: `Cedarline Manufacturing — Weekly Production Log`,
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
      `**A) Widget A requires 7 hours of labor to assemble.** — **TRUE**

Using Week 1 and recovered Week 2 counts, elimination gives $x=7$. Week 1 then has $35(7)+20(10)=445$.`,
      `**B) Widget B requires 12 hours of labor to assemble.** — **FALSE**

After $x=7$, Week 1 gives $245+20y=445$. Thus $20y=200$ and $y=10$, not $12$.`,
      `**C) Week 2 actually produced 25 Widget A units and 33 Widget B units.** — **TRUE**

The note says $B=A+8$ and $A+B=58$. Substitution gives $2A+8=58$, hence $A=25$ and $B=33$.`,
      `**D) If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.** — **FALSE**

A's time becomes $7(1.20)=8.4$ hours. Week 1 would use $35(8.4)+20(10)=494$ hours, up $49$ from $445$, about 11%.

**Why it fails.** Only Widget A's share of the weekly labor changes`,
      `**E) The illegible Week 3 entry can be reconstructed as 20 Widget A units.** — **TRUE**

With 15 Widget B units, their labor is $15(10)=150$ hours. The remaining $290-150=140$ hours make $140\\div7=20$ Widget A units.`,
    ],
    difficulty_level: "3/5",
    sort_order: 29,
    solution_overview: `**What's going on.** Week 2's smudged counts can be recovered from its total of 58 units and its 8-unit difference. Those recovered counts and Week 1 then determine the labor-hours required by each widget.

**Model.**
$$
\\begin{cases}
35x+20y=445 \\\\
25x+33y=505
\\end{cases}
$$

**Solve.**
**Step 1.** With $B=A+8$ and $A+B=58$, $2A+8=58$, so $A=25$ and $B=33$.

**Step 2.** Eliminate from the two week equations to get $x=7$, then $y=10$.

**Step 3.** Week 3 satisfies $7A+10(15)=290$, so $A=20$.

**Answer.** Widget A = 7 hrs/unit | Widget B = 10 hrs/unit

**Missing cell:** Reconstruct the missing Week 2 counts before using its labor total in the pricing system.`,
  },
  {
    id: "math-5-30",
    case_id: "MATH 5.30",
    title: `Sterling Distributors — Regional Sales Dashboard`,
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
      `**A) Product X is priced at $29.** — **TRUE**

Using the reconciled North and South reports, elimination gives $169x=4901$. Therefore $x=29$.`,
      `**B) Product Y is priced at $28.** — **FALSE**

Substituting $x=29$ into $17x+14y=829$ gives $493+14y=829$. Hence $14y=336$ and $y=24$.`,
      `**C) The East branch's reported revenue is fully consistent with the derived prices.** — **FALSE**

At the derived prices, East should earn $65(29)+50(24)=3085$. Its reported revenue is $3200$, a discrepancy of $115$.`,
      `**D) If the East branch's reported revenue were corrected to reflect the derived prices, it should read $3,085.** — **TRUE**

East sells 65 X units and 50 Y units. Its corrected revenue is $65(29)+50(24)=1885+1200=3085$.

**Watch.** The correction follows the fixed company-wide prices, not the erroneous reported total`,
      `**E) North's reported revenue exceeds South's and East's reported revenues combined.** — **FALSE**

North reports $4145$. South and East report $3875+3200=7075$, which is much greater than $4145$.`,
    ],
    difficulty_level: "3/5",
    sort_order: 30,
    solution_overview: `**What's going on.** North and South are the two reports that reconcile to common company-wide prices. Once those prices are found, East can be tested to locate and correct its data-entry error.

**Model.**
$$
\\begin{cases}
85x+70y=4145 \\\\
55x+95y=3875
\\end{cases}
$$

**Solve.**
**Step 1.** Divide both equations by $5$: $17x+14y=829$ and $11x+19y=775$.

**Step 2.** Eliminate $y$ to get $169x=4901$, so $x=29$.

**Step 3.** Substitute: $493+14y=829$, so $y=24$. East should be $65(29)+50(24)=3085$.

**Answer.** Product X = $29.00/unit | Product Y = $24.00/unit`,
  },
  {
    id: "math-5-31",
    case_id: "MATH 5.31",
    title: `Riverside Hardware Supply — Two Fastener Invoices`,
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
      `**A) Rounding Type A's case price up to the next whole dollar lands on exactly $19.00.** — **TRUE**

Type A costs $18.45 per case. Rounding $18.45 up to the next whole dollar gives $19.

**Watch.** “Round up” means go to $19 even though $18.45 would round to $18 under ordinary nearest-dollar rounding`,
      `**B) A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.** — **TRUE**

The price gap is $27.80 − $18.45 = $9.35. That is greater than $9 and less than $10.

**Watch.** Compare the actual difference, $9.35, to both endpoints rather than estimating from the invoice totals`,
      `**C) If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the $24 mark.** — **TRUE**

Invoice 2 has 7 + 19 = 26 cases and totals $657.35. Its equal per-case share is $657.35 ÷ 26 ≈ $25.28, which is above $24.`,
      `**D) Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.** — **FALSE**

Swapping Invoice 1's quantities gives 13($18.45) + 9($27.80) = $490.05. That is not the original $527.45 total.`,
      `**E) Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.** — **FALSE**

The combined quantities are 16 Type A cases and 32 Type B cases. Their cost is 16($18.45) + 32($27.80) = $1,184.80, exactly $527.45 + $657.35.

**Why it fails.** Fixed unit prices make combining orders additive; no bulk premium was included in the model`,
    ],
    difficulty_level: "3/5",
    sort_order: 31,
    solution_overview: `**What's going on.** Let x be the Type A case price and y be the Type B case price. The two invoices give two equations for those fixed prices.

**Model.**

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply the first equation by 19 and the second by 13: 171x + 247y = 10021.55 and 91x + 247y = 8545.55.

**Step 2.** Subtract to get 80x = 1476.00, so x = 18.45; then 9(18.45) + 13y = 527.45 gives y = 27.80.

**Answer.** Type A costs $18.45 per case and Type B costs $27.80 per case.`,
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
      `Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line — even though that intersection falls at a negative, and therefore meaningless, mileage.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) The dispatch fee sits exactly halfway between $145 and $146.** — **TRUE**

The dispatch fee is $145.50. It is exactly halfway between $145.00 and $146.00.

**Watch.** The midpoint of consecutive whole dollars ends in 50 cents`,
      `**B) Per mile, Swift Cargo's rate is closer to $1.50 than to $2.00.** — **FALSE**

Swift's rate is $1.85 per mile. It is $0.15 from $2.00 but $0.35 from $1.50, so it is closer to $2.00.`,
      `**C) A 250-mile haul comes in five cents under six hundred and eight dollars.** — **FALSE**

At 250 miles, Swift costs $145.50 + 250($1.85) = $608.00. That is exactly $608, not five cents under.

**Why it fails.** Keep the $145.50 fee in the calculation; using only the mileage charge gives the wrong total`,
      `**D) At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of $270.** — **TRUE**

The competitor charges 250($1.35) = $337.50. Swift costs $608.00, so the competitor saves $270.50, which is more than $270.`,
      `**E) Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line — even though that intersection falls at a negative, and therefore meaningless, mileage.** — **TRUE**

Set the two prices equal: $145.50 + 1.85d = 1.35d. This gives 0.50d = −145.50, so d = −291.`,
    ],
    difficulty_level: "3/5",
    sort_order: 32,
    solution_overview: `**What's going on.** Let x be Swift Cargo's dispatch fee and y be its mileage rate. The two quoted Swift bills determine both values; the competitor is then a separate comparison.

**Model.**

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

**Solve.**

**Step 1.** Subtract the first bill from the second: 135y = 249.75, so y = 1.85.

**Step 2.** Then x + 170(1.85) = 460.00 gives x = 145.50.

**Answer.** Swift Cargo charges a $145.50 dispatch fee plus $1.85 per mile.

For a fixed fee plus a rate, subtract two bills first: the shared fixed fee disappears.`,
  },
  {
    id: "math-5-33",
    case_id: "MATH 5.33",
    title: `Café Lumière — Two Till Receipts`,
    context: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only. Receipt 1: 7 Specialty Drinks + 9 Pastries — Total: $78.65 — (listed) Total Calories: 6,100 Receipt 2: 11 Specialty Drinks + 4 Pastries — Total: $85.05 — (listed) Total Calories: 5,400`,
    statements: [
      `A Specialty Drink's price, tripled, would clear twenty dollars.`,
      `Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined — quite a bit more, in fact.`,
      `Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.`,
      `Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past $4.90.`,
      `A week of daily 2-Drink-2-Pastry orders costs enough that, left over from $150, you'd have less than $8 in change.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) A Specialty Drink's price, tripled, would clear twenty dollars.** — **FALSE**

Three Specialty Drinks cost 3($6.35) = $19.05. Since $19.05 is below $20.00, the price does not clear twenty dollars.`,
      `**B) Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined — quite a bit more, in fact.** — **TRUE**

Four Pastries cost 4($3.80) = $15.20. One drink and one pastry cost $6.35 + $3.80 = $10.15, so four pastries cost $5.05 more.`,
      `**C) Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.** — **FALSE**

The listed calorie totals are 6,100 and 5,400, but they give no calorie amount per drink or pastry. The quantities and dollar totals are the information that identify the prices.`,
      `**D) Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past $4.90.** — **TRUE**

Receipt 1 has 7 + 9 = 16 items. Its average is $78.65 ÷ 16 ≈ $4.9156 per item, just above $4.90.`,
      `**E) A week of daily 2-Drink-2-Pastry orders costs enough that, left over from $150, you'd have less than $8 in change.** — **TRUE**

A 2-drink, 2-pastry order costs 2($6.35) + 2($3.80) = $20.30. For seven days that is $142.10, leaving $150.00 − $142.10 = $7.90.

**Watch.** Multiply the daily total by all 7 days before finding the change`,
    ],
    difficulty_level: "3/5",
    sort_order: 33,
    solution_overview: `**What's going on.** Let x be a Specialty Drink price and y be a Pastry price. The dollar totals, not the unrelated calorie figures, form the system.

**Model.**

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply the equations by 4 and 9, giving 28x + 36y = 314.60 and 99x + 36y = 765.45.

**Step 2.** Subtract to get 71x = 450.85, so x = 6.35; substituting gives y = 3.80.

**Answer.** A Specialty Drink costs $6.35 and a Pastry costs $3.80.`,
  },
  {
    id: "math-5-34",
    case_id: "MATH 5.34",
    title: `Northgate Bakery Wholesale — Order Confirmation Emails`,
    context: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes. Total cost: $297.30." Email 2: "Order confirmed: 6 dozen croissants + 23 dozen baguettes. Total cost: $299.30."`,
    statements: [
      `Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.`,
      `The per-dozen gap between croissants and baguettes is closer to four dollars than to five.`,
      `Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.`,
      `Per dozen-item ordered, Email 1 runs pricier than Email 2 — and the gap clears two dollars.`,
      `Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.** — **TRUE**

Four dozen croissants cost 4($13.85) = $55.40. That is greater than $55.00.`,
      `**B) The per-dozen gap between croissants and baguettes is closer to four dollars than to five.** — **TRUE**

The price gap is $13.85 − $9.40 = $4.45. It is $0.45 from $4 and $0.55 from $5, making it closer to $4.`,
      `**C) Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.** — **FALSE**

Ten dozen croissants cost $138.50, while ten dozen of each costs $138.50 + $94.00 = $232.50. The croissant share is about 59.6%, which is below three-fifths, or 60%.

**Why it fails.** Compare $138.50 with the full $232.50 combined bill, not with the baguette cost alone`,
      `**D) Per dozen-item ordered, Email 1 runs pricier than Email 2 — and the gap clears two dollars.** — **FALSE**

Email 1 averages $297.30 ÷ 25 ≈ $11.89 per dozen-item, while Email 2 averages $299.30 ÷ 29 ≈ $10.32. The difference is about $1.57, not more than $2.

**Why it fails.** Use the total number of dozen-items in each email: 25 and 29`,
      `**E) Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.** — **TRUE**

Adding $3 makes each baguette dozen $12.40. Email 2 would become 6($13.85) + 23($12.40) = $368.30.`,
    ],
    difficulty_level: "3/5",
    sort_order: 34,
    solution_overview: `**What's going on.** Let x be the wholesale price per dozen croissants and y be the price per dozen baguettes. Each email supplies one order-total equation.

**Model.**

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

**Solve.**

**Step 1.** Match the y-coefficients by multiplying the equations by 23 and 11.

**Step 2.** Subtraction gives 256x = 3545.60, so x = 13.85, and the first email then gives y = 9.40.

**Answer.** Croissants cost $13.85 per dozen and baguettes cost $9.40 per dozen.`,
  },
  {
    id: "math-5-35",
    case_id: "MATH 5.35",
    title: `Meridian Textiles — Quarterly Margin Verification`,
    context: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.`,
    tables_markdown: `| Quarter | Fabric Rolls | Yarn Spools | Total Profit |
| --- | --- | --- | --- |
| Q1 | 240 | 175 | $10,029.00 |
| Q2 | 310 | 90 | $10,260.50 |`,
    statements: [
      `Fabric Roll margins clear the $27 line, though not by enough to also clear $27.50.`,
      `Yarn Spool's per-unit margin, doubled, would just clear forty dollars.`,
      `Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears $8,400 — but only by a slender margin.`,
      `The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.`,
      `Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round $13,675 — no cents required.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Fabric Roll margins clear the $27 line, though not by enough to also clear $27.50.** — **TRUE**

A Fabric Roll margin is $27.35. It is above $27.00 but below $27.50.`,
      `**B) Yarn Spool's per-unit margin, doubled, would just clear forty dollars.** — **FALSE**

Twice the Yarn Spool margin is 2($19.80) = $39.60. That does not exceed $40.00.`,
      `**C) Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears $8,400 — but only by a slender margin.** — **TRUE**

The new mix earns 200($27.35) + 150($19.80) = $5,470 + $2,970 = $8,440. That is $40 above $8,400.`,
      `**D) The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.** — **TRUE**

The difference between the reported totals is $10,260.50 − $10,029.00 = $231.50. Removing the smallest hundred leaves $131.50, which still has three digits before the decimal.

**Watch.** “Drop the smallest hundred” means subtract $100, not remove a digit from $231.50`,
      `**E) Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round $13,675 — no cents required.** — **TRUE**

Five hundred Fabric Rolls produce 500($27.35) = $13,675.00. This is exactly the stated round-dollar amount.

**Watch.** The no-Yarn condition means there is only one term in this calculation`,
    ],
    difficulty_level: "4/5",
    sort_order: 35,
    solution_overview: `**What's going on.** Let x be the profit margin on a Fabric Roll and y the margin on a Yarn Spool. The two quarter reports determine the two per-unit margins.

**Model.**

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

**Solve.**

**Step 1.** Eliminating y gives 32650x = 892977.50, so x = 27.35.

**Step 2.** Substituting into the first quarter equation gives y = 19.80.

**Answer.** Fabric Roll margin = $27.35 per unit; Yarn Spool margin = $19.80 per unit.`,
  },
  {
    id: "math-5-36",
    case_id: "MATH 5.36",
    title: `Continental Gas Supply — Reconstructing Cylinder Prices`,
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
      `**A) Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.** — **TRUE**

Invoice 2's $419.40 is 60% of Invoice 1's $699.00. Its quantities, 9 and 12, are also 60% of 15 and 20.

**Watch.** Check both the quantities and the total before calling one invoice a scaled repeat`,
      `**B) Nitrogen-type cylinders are priced closer to $17.00 than to $16.00.** — **FALSE**

Nitrogen costs $16.40. It is $0.40 from $16 and $0.60 from $17, so it is closer to $16.`,
      `**C) Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.** — **TRUE**

Four Oxygen cylinders cost 4($22.65) = $90.60. Six Nitrogen cylinders cost 6($16.40) = $98.40, so the Oxygen total is lower.

**Watch.** Different quantities matter here: compare the two finished totals, not just $22.65 with $16.40`,
      `**D) Double Invoice 3's order exactly, and the resulting bill would land above $655.** — **FALSE**

Doubling Invoice 3 gives 26 Nitrogen and 10 Oxygen cylinders. The bill is 26($16.40) + 10($22.65) = $652.90, below $655.

**Why it fails.** Doubling every quantity doubles the original $326.45 invoice to $652.90 exactly`,
      `**E) Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the $20 mark.** — **TRUE**

Invoices 1 and 3 together total $699.00 + $326.45 = $1,025.45 for 15 + 20 + 13 + 5 = 53 cylinders. The average is about $19.35 per cylinder, below $20.`,
    ],
    difficulty_level: "4/5",
    sort_order: 36,
    solution_overview: `**What's going on.** Let x be the Nitrogen-type price and y be the Oxygen-type price. Invoice 2 is a 60% copy of Invoice 1, so use Invoice 1 and the independent Invoice 3.

**Model.**

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply Invoice 3 by 4 and subtract Invoice 1: 37x = 606.80, so x = 16.40.

**Step 2.** Substituting into Invoice 1 gives y = 22.65.

**Answer.** Nitrogen-type cylinders cost $16.40 each and Oxygen-type cylinders cost $22.65 each.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
  },
  {
    id: "math-5-37",
    case_id: "MATH 5.37",
    title: `Ferro Machine Shop — Two Technicians, Two Sessions`,
    context: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.`,
    statements: [
      `Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.`,
      `Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.`,
      `Their combined hourly output, expressed as a fraction, reduces to exactly 13/100 — no more, no less.`,
      `Bianchi's slice of Tuesday's finished work, as a fraction, is closer to 1/7 than to 1/8.`,
      `Tally every hour either technician logged across both days — 23 in all — and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A) Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.** — **FALSE**

Alvarez's solo time is 1 ÷ 0.085 ≈ 11.76 hours. Rounded to the nearest hour, that is 12 hours.

**Why it fails.** A value of 11.76 rounds up because its decimal part is at least 0.5`,
      `**B) Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.** — **FALSE**

Bianchi needs 1 ÷ 0.045 ≈ 22.22 hours for one job. Alvarez needs 2 ÷ 0.085 ≈ 23.53 hours for two jobs, so Bianchi's time is shorter.`,
      `**C) Their combined hourly output, expressed as a fraction, reduces to exactly 13/100 — no more, no less.** — **TRUE**

Together they complete 0.085 + 0.045 = 0.130 job per hour. As a fraction, 0.130 = 13/100.`,
      `**D) Bianchi's slice of Tuesday's finished work, as a fraction, is closer to 1/7 than to 1/8.** — **TRUE**

On Tuesday Bianchi completes 3(0.045) = 0.135 of a job. Its distance from 1/7 is about 0.0079, while its distance from 1/8 is 0.010.`,
      `**E) Tally every hour either technician logged across both days — 23 in all — and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.** — **TRUE**

The total work completed is 0.655 + 0.900 = 1.555 jobs over 23 logged hours. The average is 1.555 ÷ 23 ≈ 0.0676, or 6.76% per hour.

**Watch.** Combine both days' completed-work amounts before dividing by the 23 total hours`,
    ],
    difficulty_level: "4/5",
    sort_order: 37,
    solution_overview: `**What's going on.** Let x and y be Alvarez's and Bianchi's job-completion rates in jobs per hour. Each day's finished percentage equals the sum of each technician's rate-times-hours contribution.

**Model.**

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply the first equation by 9 and the second by 4, then subtract: 51y = 2.295, so y = 0.045.

**Step 2.** Substituting gives x = 0.085.

**Answer.** Alvarez completes 0.085 job/hour (8.5%/hour), and Bianchi completes 0.045 job/hour (4.5%/hour).

**Rate × time:** Each person/plant contributes (rate)×(hours). Percents finished are just the right-hand sides — convert them to decimals before eliminating.`,
  },
  {
    id: "math-5-38",
    case_id: "MATH 5.38",
    title: `Vantage Apparel — A Water-Damaged Production Report`,
    context: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting $9,793.50. Season 2: 275 T-Shirts and 410 Hoodies, netting $10,747.75. Season 3's paperwork survived only in part: 310 Hoodies and an overall profit of $8,558.25 are legible, but water damage erased the T-Shirt count entirely.`,
    statements: [
      `T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.`,
      `Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.`,
      `Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.`,
      `Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.`,
      `Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses $8,700 — clearing it by less than $40.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.** — **FALSE**

A T-Shirt margin is $11.65. It is $0.35 from $12 but $0.65 from $11, so it is closer to $12.`,
      `**B) Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.** — **TRUE**

A Hoodie margin is $18.40. It is $0.40 from $18 and $0.60 from $19, so it is closer to $18.`,
      `**C) Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.** — **FALSE**

The missing Season 3 count is 245 T-Shirts. Although 245 is divisible by 5, it is not divisible by 10.`,
      `**D) Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.** — **TRUE**

Season 2 exceeds Season 1 by $10,747.75 − $9,793.50 = $954.25. Fifty-two Hoodies earn 52($18.40) = $956.80, so the gap is $2.55 short.

**Watch.** “Barely fail to cover” means the profit gap must be less than, but near, the 52-Hoodie amount`,
      `**E) Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses $8,700 — clearing it by less than $40.** — **TRUE**

With 260 T-Shirts and 310 Hoodies, profit is 260($11.65) + 310($18.40) = $8,733.00. It clears $8,700 by $33, which is less than $40.

**Watch.** Replace only the missing T-Shirt count; keep the 310 Hoodies unchanged`,
    ],
    difficulty_level: "4/5",
    sort_order: 38,
    solution_overview: `**What's going on.** Let x be the T-Shirt margin and y be the Hoodie margin. The first two seasons determine those margins, and Season 3 then reveals its missing T-Shirt count.

**Model.**

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

**Solve.**

**Step 1.** Elimination gives 104800x = 1220920, so x = 11.65; then the first season gives y = 18.40.

**Step 2.** In Season 3, 11.65T + 18.40(310) = 8558.25, so T = 245.

**Answer.** T-Shirts earn $11.65 each, Hoodies earn $18.40 each, and Season 3 made 245 T-Shirts.`,
  },
  {
    id: "math-5-39",
    case_id: "MATH 5.39",
    title: `Continental Freight Co. — Cross-Unit Billing Audit`,
    context: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped. One branch records weights in pounds (1 kg ≈ 2.2 lb). A third shipment is under audit.`,
    tables_markdown: `| Shipment | Weight | Total Charged |
| --- | --- | --- |
| Shipment 1 (Metric) | 185 kg | $677.35 |
| Shipment 2 (Imperial) | 572 lb | $913.60 |
| Shipment 3 (Imperial, audit) | 99 lb | $239.80 |`,
    statements: [
      `Knock five dollars and forty cents off the flat handling fee and you'd land on an even $89.20 — implying the real fee currently overshoots $89 by roughly six percent.`,
      `The per-kilogram rate, tripled, would land just shy of $9.50.`,
      `Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed — but doesn't match it exactly.`,
      `Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.`,
      `Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Knock five dollars and forty cents off the flat handling fee and you'd land on an even $89.20 — implying the real fee currently overshoots $89 by roughly six percent.** — **TRUE**

The fee is $94.60, and $94.60 − $5.40 = $89.20. Its excess over $89 is $5.60, and $5.60 ÷ $89 ≈ 6.3%.

**Watch.** The percentage comparison uses $89 as the reference amount, not $94.60`,
      `**B) The per-kilogram rate, tripled, would land just shy of $9.50.** — **TRUE**

Three times the $3.15/kg rate is $9.45. That is just below $9.50.

**Watch.** “Just shy” means less than the target, and $9.45 is 5 cents below it`,
      `**C) Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed — but doesn't match it exactly.** — **TRUE**

Shipment 3 weighs 99 ÷ 2.2 = 45 kg, so the model predicts $94.60 + 45($3.15) = $236.35. The actual $239.80 bill differs by $3.45, which is within $4 but not exact.

**Watch.** Convert 99 pounds to 45 kg before applying the per-kilogram charge`,
      `**D) Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.** — **FALSE**

Ninety-nine pounds converts to 99 ÷ 2.2 = 45 kg. Since 45 is not divisible by 7, the claim is false.`,
      `**E) Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.** — **TRUE**

At 400 kg, the charge is $94.60 + 400($3.15) = $1,354.60. This is $4.60 above $1,350.

**Watch.** Include the flat $94.60 fee in addition to the 400-kilogram charge`,
    ],
    difficulty_level: "4/5",
    sort_order: 39,
    solution_overview: `**What's going on.** Let x be the flat handling fee and y be the price per kilogram. Convert the pound-recorded shipment to kilograms before solving the two billing equations.

**Model.**

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

**Solve.**

**Step 1.** Shipment 2 is 572 ÷ 2.2 = 260 kg.

**Step 2.** Subtraction gives 75y = 236.25, so y = 3.15, and x = 677.35 − 185(3.15) = 94.60.

**Answer.** The handling fee is $94.60 and the rate is $3.15/kg; Shipment 3 should cost $236.35 rather than $239.80.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
  },
  {
    id: "math-5-40",
    case_id: "MATH 5.40",
    title: `Vantage Cloud Services — A Doubled Invoice That Doesn't Double`,
    context: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.`,
    tables_markdown: `| Client | Compute Units | Storage Units | Reported Total |
| --- | --- | --- | --- |
| Client A | 11 | 7 | $483.70 |
| Client B | 22 | 14 | $952.10 |`,
    statements: [
      `Doubling every line of Client A's invoice implies Client B should owe $967.40 — a figure that overshoots what was actually billed by a hair over 1.6% of the real total.`,
      `For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $952.10 billed amount.`,
      `The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.`,
      `Plugging in a purely hypothetical $14.20 per compute-unit and $31.75 per storage-unit — numbers with no basis in the real contract — Client A's invoice would compute to a figure just shy of $375.`,
      `Compare Client B's actual bill to two rival hypotheses — one assuming a clean doubling of Client A ($967.40), the other assuming a 50%-heavier surcharge instead of a full double ($725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Doubling every line of Client A's invoice implies Client B should owe $967.40 — a figure that overshoots what was actually billed by a hair over 1.6% of the real total.** — **TRUE**

Twice Client A's $483.70 invoice is $967.40. The excess over Client B's $952.10 is $15.30, and $15.30 ÷ $952.10 ≈ 1.607%.

**Watch.** The percent overshoot is measured against the actual $952.10 bill`,
      `**B) For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $952.10 billed amount.** — **TRUE**

If B's doubled usage total is $952.10, A would need to be exactly half: $952.10 ÷ 2 = $476.05. A's reported $483.70 is not that value, exposing the inconsistency.`,
      `**C) The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.** — **TRUE**

The error rate is about 1.61%. This is closer to 1/60 ≈ 1.67% than to 1/50 = 2%.`,
      `**D) Plugging in a purely hypothetical $14.20 per compute-unit and $31.75 per storage-unit — numbers with no basis in the real contract — Client A's invoice would compute to a figure just shy of $375.** — **FALSE**

The hypothetical prices give 11($14.20) + 7($31.75) = $156.20 + $222.25 = $378.45. That is above $375, not just below it.`,
      `**E) Compare Client B's actual bill to two rival hypotheses — one assuming a clean doubling of Client A ($967.40), the other assuming a 50%-heavier surcharge instead of a full double ($725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.** — **TRUE**

The clean-doubling hypothesis is $15.30 away from $952.10. The 50%-heavier hypothesis, $725.55, is $226.55 away, so doubling is much closer.

**Watch.** Closeness is based on absolute differences, even when neither proposed bill is correct`,
    ],
    difficulty_level: "4/5",
    sort_order: 40,
    solution_overview: `**What's going on.** Client B used exactly twice Client A's compute and storage units. Therefore, a consistent fixed-price invoice for B would have to be exactly twice A's total.

**Model.**

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

**Solve.**

**Step 1.** Doubling Client A's equation gives 22x + 14y = 967.40.

**Step 2.** The reported B equation has the same left side but a $952.10 total, a $15.30 contradiction.

**Answer.** No consistent compute and storage prices exist for both invoices; they disagree by $15.30.

When every coefficient doubles, the total must double too; otherwise the system has no solution.`,
  },
  {
    id: "math-5-41",
    case_id: "MATH 5.41",
    title: `Sterling Family Trust — Two-Fund Return Reconstruction`,
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
      `**A) The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.** — **FALSE**

Fund A earns 0.0525($4,800) = $252, while Fund B earns 0.0375($13,600) = $510. Triple A's interest is $756, and $510 is not more than that.

**Why it fails.** Compare B's $510 with three times A's interest, not three times A's balance`,
      `**B) If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above $800.00.** — **TRUE**

At 6.75%, Fund A would earn 0.0675($4,800) = $324. Adding Fund B's unchanged $510 gives $834, above $800.`,
      `**C) The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).** — **TRUE**

The total trust is $4,800 + $13,600 = $18,400. Its $762 return is $762 ÷ $18,400 ≈ 4.14%, which exceeds 4%.

**Watch.** Divide total interest by the combined balance to get the overall return rate`,
      `**D) Had the trust instead been split evenly ($9,200.00 in each fund) at the original rates, the total return would have come within $5.00 of the actual $762.00.** — **FALSE**

An even $9,200 split earns $9,200(0.0525 + 0.0375) = $828. That is $66 away from $762, not within $5.`,
      `**E) The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.** — **TRUE**

The balance difference is $13,600 − $4,800 = $8,800. Relative to the smaller $4,800 balance, $8,800 ÷ $4,800 ≈ 183.3%, above 180%.`,
    ],
    difficulty_level: "4/5",
    sort_order: 41,
    solution_overview: `**What's going on.** Let x be Fund A's balance and y be Fund B's balance. The balance relationship plus the combined-interest equation determines both fund amounts.

**Model.**

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

**Solve.**

**Step 1.** Substitute y = 2x + 4000: 0.0525x + 0.0375(2x + 4000) = 762.

**Step 2.** This gives 0.1275x = 612, so x = 4800 and y = 13600.

**Answer.** Fund A holds $4,800 and Fund B holds $13,600.

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.`,
  },
  {
    id: "math-5-42",
    case_id: "MATH 5.42",
    title: `Solventis Labs — Ratio-Blended Batch Reconstruction`,
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
      `**A) The combined salt content of Batch 1 and Batch 2, if poured together into one container, would exceed 300 g.** — **TRUE**

Batch 1 contains 144 g and Batch 2 contains 184 g. Together they contain 328 g, which exceeds 300 g.`,
      `**B) Solution B's concentration is more than 70% of Solution A's concentration.** — **TRUE**

Solution B's concentration compared with A's is 12 ÷ 16 = 0.75, or 75%. Since 75% is more than 70%, the statement is true.

**Watch.** “B as a percent of A” means divide B's 12 g/L by A's 16 g/L`,
      `**C) If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.** — **TRUE**

Keeping A at 2 L, the corrected B volume V satisfies 2(16) + 12V = 109. Thus V = 77/12 ≈ 6.4167 L, much closer to 6.4 L than 6.0 L.`,
      `**D) Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.** — **FALSE**

In a 3:1 A:B mixture, A is 3/4 of total volume and B is 1/4. Salt is 16(0.75V) + 12(0.25V) = 15V, so 15V = 130 gives V ≈ 8.67 L.`,
      `**E) Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.** — **TRUE**

Batch 1's 3:2 ratio makes A 3/5 = 60% of its volume. Batch 2's 5:1 ratio makes A 5/6 ≈ 83.3%, which is higher.`,
    ],
    difficulty_level: "4/5",
    sort_order: 42,
    solution_overview: `**What's going on.** The stated ratios first convert each batch into separate A and B volumes. Let x and y be the salt concentrations in g/L of Solutions A and B.

**Model.**

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

**Solve.**

**Step 1.** Divide by 2 to get 3x + 2y = 72 and 5x + y = 92.

**Step 2.** Substitute y = 92 − 5x to obtain x = 16 and y = 12.

**Answer.** Solution A has 16 g/L and Solution B has 12 g/L; Batch 3 is predicted to contain 104 g, versus 109 g recorded.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
  },
  {
    id: "math-5-43",
    case_id: "MATH 5.43",
    title: `Union Mills Manufacturing — Fractional-Hour Overtime Reconstruction`,
    context: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, $765.00 gross. Employee B: 40 regular + 7 OT hours, $882.00 gross.`,
    statements: [
      `If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed $6.00.`,
      `Employee B's overtime pay (the portion earned specifically for hours beyond 40) is more than 40% of his total gross pay.`,
      `The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.`,
      `If the overtime premium were eliminated (overtime paid at the base rate) but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.`,
      `The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed $6.00.** — **TRUE**

Employee A's overtime rate is $17.50 + $8.50 = $26.00 per hour. Her 2.5 overtime hours pay $65.00, and 10% is $6.50, above $6.`,
      `**B) Employee B's overtime pay (the portion earned specifically for hours beyond 40) is more than 40% of his total gross pay.** — **FALSE**

Employee B's overtime pay is 7($26.00) = $182.00. As a share of $882, that is about 20.6%, well below 40%.

**Why it fails.** Divide the $182 overtime amount by the full $882 gross pay to form the percentage`,
      `**C) The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.** — **TRUE**

At 45 base-rate hours each, each employee would earn 45($17.50) = $787.50, or $1,575 total. Their actual combined gross pay is $765 + $882 = $1,647, which is higher.

**Watch.** The comparison scenario gives both employees the same 45-hour base-only calculation`,
      `**D) If the overtime premium were eliminated (overtime paid at the base rate) but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.** — **FALSE**

A 15% higher base wage is $17.50(1.15) = $20.125 per hour. At that flat rate for 42.5 hours, A would earn about $855.31, which is greater than $765.

**Why it fails.** Removing the premium does not mean removing payment for the overtime hours; all 42.5 hours still earn the raised base rate`,
      `**E) The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).** — **TRUE**

The overtime-hours ratio is 7 ÷ 2.5 = 2.8. The gross-pay ratio is $882 ÷ $765 ≈ 1.153, so the hours ratio is larger.

**Watch.** Compare like ratios: B to A in overtime hours, then B to A in total gross pay`,
    ],
    difficulty_level: "4/5",
    sort_order: 43,
    solution_overview: `**What's going on.** Let x be the base hourly wage and y be the extra overtime premium per overtime hour. An overtime hour pays x + y, so each employee's equation includes base pay for all worked hours plus the premium only for overtime hours.

**Model.**

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply the first equation by 2.8 to match the 7y term.

**Step 2.** Subtracting the second equation gives 72x = 1260, so x = 17.50; substitution gives y = 8.50.

**Answer.** The base wage is $17.50/hour and the overtime premium is $8.50/hour, so overtime pays $26.00/hour.`,
  },
  {
    id: "math-5-44",
    case_id: "MATH 5.44",
    title: `Greenfield Landscaping — Redundant Project Reconciliation`,
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
      `Project 3's cost per total meter installed (cost ÷ total meters of both materials) is higher than Project 1's cost per total meter installed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded $950.00.** — **TRUE**

The changed Project 3 would cost 20($27) + 40($11) = $540 + $440 = $980. This is greater than $950.`,
      `**B) The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.** — **TRUE**

The price gap is $27 − $11 = $16. One hundred forty-five percent of the $11 wire price is 1.45($11) = $15.95, so $16 is greater.

**Watch.** Convert 145% to 1.45 before multiplying by the wire price`,
      `**C) Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs ($750.00 + $710.00).** — **FALSE**

The combined materials cost 28($27) + 64($11) = $1,460. This equals $750 + $710 exactly, not less.

**Why it fails.** Fixed per-meter pricing is linear, so joining the materials does not change their combined cost`,
      `**D) If wire fencing rose by $2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.** — **FALSE**

At $13/m wire, Project 1 costs 18($27) + 24($13) = $798. The increase is $48, and $48 ÷ $750 = 6.4%, not more than 15%.

**Why it fails.** Only the 24 wire meters increase by $2; the 18 wood meters remain at $27`,
      `**E) Project 3's cost per total meter installed (cost ÷ total meters of both materials) is higher than Project 1's cost per total meter installed.** — **FALSE**

Project 3 averages $710 ÷ 50 = $14.20 per total meter. Project 1 averages $750 ÷ 42 ≈ $17.86 per total meter, so Project 3 is lower.`,
    ],
    difficulty_level: "4/5",
    sort_order: 44,
    solution_overview: `**What's going on.** Let x be the cedar wood price per meter and y the wire price per meter. Project 2 is a 1.5-times copy of Project 1, so Project 1 and Project 3 are the independent equations.

**Model.**

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

**Solve.**

**Step 1.** Divide the equations by 6 and 10: 3x + 4y = 125 and x + 4y = 71.

**Step 2.** Subtract to get 2x = 54, so x = 27 and y = 11.

**Answer.** Cedar wood costs $27/m and galvanized wire costs $11/m.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-45",
    case_id: "MATH 5.45",
    title: `Meridian Rail — Two-Route Speed Reconstruction`,
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
      `**A) The time it would take Boat A alone to travel the full 356 km stretch is more than 7 hours.** — **TRUE**

Boat A travels at 48 km/h. Its time for 356 km is 356 ÷ 48 ≈ 7.42 hours, which is more than 7.

**Watch.** Solo travel time is distance divided by that boat's speed`,
      `**B) In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.** — **TRUE**

In 2 hours, Boat A covers 2(48) = 96 km and Boat B covers 2(77) = 154 km. Their distance difference is 58 km, less than half of 250 km, which is 125 km.

**Watch.** Find both meeting distances first, then subtract them before comparing with 125 km`,
      `**C) If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.** — **FALSE**

A 20% increase gives speeds 57.6 km/h and 92.4 km/h, for a 150 km/h closing speed. Closing 250 km then takes 250 ÷ 150 ≈ 1.667 hours, above 1.5 hours.

**Why it fails.** Increasing both speeds by 20% changes the closing speed to 1.2(125) = 150, not enough to reach the claimed time`,
      `**D) The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.** — **TRUE**

Their combined speed is 48 + 77 = 125 km/h. In 3 hours they cover 3(125) = 375 km, which exceeds 356 km.`,
      `**E) Boat B's speed is more than 60% higher than Boat A's speed.** — **TRUE**

Boat B is 77 − 48 = 29 km/h faster than Boat A. Relative to A, 29 ÷ 48 ≈ 60.4%, which is more than 60%.

**Watch.** “Higher than Boat A” makes Boat A's 48 km/h the percentage denominator`,
    ],
    difficulty_level: "4/5",
    sort_order: 45,
    solution_overview: `**What's going on.** Let x be Boat A's speed and y be Boat B's speed. The opposite-direction trip supplies their closing-speed sum, while the head-start trip gives B four hours of travel and A one hour.

**Model.**

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

**Solve.**

**Step 1.** Subtract the first equation from the second: 3y = 231, so y = 77.

**Step 2.** Then x = 125 − 77 = 48.

**Answer.** Boat A travels 48 km/h and Boat B travels 77 km/h.

For craft moving toward each other, add their speeds to get the closing speed.`,
  },
  {
    id: "math-5-46",
    case_id: "MATH 5.46",
    title: `Meridian Textiles — Three-Season Profit Reconstruction`,
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
      `Season 2's profit per tonne of total output (total profit ÷ total tonnage) exceeds Season 1's profit per tonne of total output.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded $44,000.** — **FALSE**

Wheat earns $95/t and Barley earns $120/t. 24,700 + 19,200 = $43,900, and $43,900 is not more than $44,000.`,
      `**B) Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.** — **TRUE**

Compare the per-tonne profit gap with 25% of Wheat's rate. The advantage is $25/t, while 25% of $95 is $23.75/t. Since 25 > 23.75, the advantage is more than 25%.

**Watch.** A percentage comparison needs a reference amount: “25% of Wheat” means divide or multiply using Wheat's rate, not Barley's`,
      `**C) Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.** — **FALSE**

Season 3's missing Wheat tonnage was reconstructed as 180 t. Season 3 produced 480 t and Season 2 produced 440 t. Since 480 is greater than 440, it is not less.

**Why it fails.** Keep each season's row together before comparing totals; swapping a 300 with a 260 changes the conclusion`,
      `**D) Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of $53,100 would have been understated by more than $3,500.** — **TRUE**

The hypothetical changes only Season 3 Wheat from 180 t to 220 t. The hypothetical profit is $20,900 + $36,000 = $56,900. Its gap above the recorded $53,100 is $3,800, which is more than $3,500.

**Watch.** When one quantity changes, recompute that row's total; do not treat the added 40 t as if it earned Barley's rate`,
      `**E) Season 2's profit per tonne of total output (total profit ÷ total tonnage) exceeds Season 1's profit per tonne of total output.** — **TRUE**

Average profit per tonne is total profit divided by total tonnage. Season 1 is $105.00/t; Season 2 is about $109.77/t. The Season 2 average is higher.`,
    ],
    difficulty_level: "4/5",
    sort_order: 46,
    solution_overview: `**What's going on.** Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.

**Model.**

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply by 13 and 2: $39x + 26y = 6825$; $18x + 26y = 4830$.

**Step 2.** Subtract: $21x = 1995$, so $x = 95$.

**Step 3.** Substitute back: 285 + $2y = 525$, so $y = 120$.

**Step 4.** Reconstruct Season 3's Wheat tonnage T: 95T + 120(300) = 53100 → $T = 180$.

**Answer.** Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-47",
    case_id: "MATH 5.47",
    title: `Bramwell & Co. — Double-Condition Age Reconstruction`,
    context: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.`,
    statements: [
      `Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.`,
      `The current age gap (x - y) is more than 45% of the elder employee's current age.`,
      `Exactly 4.5 years from now (halfway to the nine-year mark), the elder employee will be more than 2.5 times the younger employee's age.`,
      `Ten years ago, the sum of their ages was less than 40.`,
      `There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.** — **TRUE**

The present ages are elder 47 and younger 19. The ages will be 62 and 34, and twice 34 is 68. Since 62 < 68, the elder will be less than double the younger.

**Watch.** Advance both ages by the same number of years before applying “double.”`,
      `**B) The current age gap (x - y) is more than 45% of the elder employee's current age.** — **TRUE**

The present age gap is compared with 45% of the elder's present age. The gap is 28 years and 45% of 47 is 21.15 years. Since 28 > 21.15, the condition holds.

**Watch.** “Of the elder's age” fixes 47 as the denominator; using the younger age answers a different question`,
      `**C) Exactly 4.5 years from now (halfway to the nine-year mark), the elder employee will be more than 2.5 times the younger employee's age.** — **FALSE**

Halfway to the nine-year mark is 4.5 years from now. The ratio is 51.5/23.5 ≈ 2.19, which is not more than 2.5.

**Why it fails.** With fractional time, retain the .5 in both ages instead of rounding their ratio`,
      `**D) Ten years ago, the sum of their ages was less than 40.** — **FALSE**

Go back ten years from the present ages. The sum was 37 + 9 = 46, and 46 is not less than 40.

**Why it fails.** “Ten years ago” applies to both people, even though the younger age becomes a single digit`,
      `**E) There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.** — **TRUE**

The original condition says the elder was three times the younger five years ago. Five years ago is indeed more than four years ago, so that required point in time exists.

**Watch.** An existence claim can be settled by one stated example; there is no need to solve for another date`,
    ],
    difficulty_level: "4/5",
    sort_order: 47,
    solution_overview: `**What's going on.** Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.

**Model.**

$$
\\begin{cases}
x − 5 = 3(y − 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

**Solve.**

**Step 1.** Expand: x = 3y − 10, and x = 2y + 9.

**Step 2.** Setting equal: 3y − 10 = 2y + 9, so $y = 19$.

**Step 3.** Substitute back: $x = 2$(19) + 9 = 47.

**Answer.** Elder employee = 47 years old | Younger employee = 19 years old

**Ages shift:** Ages change by the same number of years on both sides. Translate 'n years ago' by subtracting n from *both* present ages before equating.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-48",
    case_id: "MATH 5.48",
    title: `Crestline Retail Group — Decimal Markup Reconstruction`,
    context: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.`,
    tables_markdown: `| Order | Product A Units | Product B Units | Retail Total |
| --- | --- | --- | --- |
| Order 1 | 8 | 5 | $1,052.80 |
| Order 2 | 16 | 10 | $2,105.60 |
| Order 3 | 3 | 12 | $1,350.60 |`,
    statements: [
      `If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual $1,350.60.`,
      `The dollar markup on Product B is more than 80% of the dollar markup on Product A.`,
      `Order 1's total retail markup (retail total minus wholesale cost total) exceeds $150.00.`,
      `If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than $280.00.`,
      `The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual $1,350.60.** — **FALSE**

Swapping the markup multipliers changes Product A to 1.18x and Product B to 1.32y. The total is $194.70 + $1,267.20 = $1,461.90, which is above the actual $1,350.60.`,
      `**B) The dollar markup on Product B is more than 80% of the dollar markup on Product A.** — **TRUE**

Compare each product's dollar markup per unit. A's markup is $17.60 and B's is $14.40. Then 14.40/17.60 ≈ 81.8%, which exceeds 80%.

**Watch.** Compare the markup dollars, not the 18% and 32% labels alone; the wholesale costs differ`,
      `**C) Order 1's total retail markup (retail total minus wholesale cost total) exceeds $150.00.** — **TRUE**

Order 1's markup is retail total minus wholesale total. Wholesale is $840.00, so the markup is $212.80. This exceeds $150.00.`,
      `**D) If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than $280.00.** — **TRUE**

Only Product B's quantity rises, by 3 units. One B sells for $94.40, so 3 more add $283.20. Since $283.20 > $280, the claim holds.

**Watch.** For a one-item quantity change, find that item's retail unit price and multiply only by the change in quantity`,
      `**E) The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.** — **TRUE**

Compare B:A ratios before and after the unequal markups. Wholesale B:A ≈ 1.4545; retail B:A ≈ 1.3003. The wholesale ratio is larger.`,
    ],
    difficulty_level: "5/5",
    sort_order: 48,
    solution_overview: `**What's going on.** Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.

**Model.**

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

**Solve.**

**Step 1.** Order 2 (16,10,$2,105.60) is exactly double Order 1 — redundant, set aside.

**Step 2.** Multiply Order 1 by 0.375 (so its x-coefficient matches Order 3's): $3.96x + 2.2125y = 394.80$.

**Step 3.** Subtract from Order 3: $11.9475y = 955.80$, so $y = 80.00$.

**Step 4.** Substitute back into Order 1: $10.56x + 472 = 1052.80$, so $x = 55.00$.

**Answer.** Product A wholesale = $55.00 | Product B wholesale = $80.00

**Markup:** Selling price = wholesale × (1 + markup). If statements quote markups, convert them to multipliers before comparing order totals.`,
  },
  {
    id: "math-5-49",
    case_id: "MATH 5.49",
    title: `Fairview Amateur League — Cross-Team Points Reconstruction`,
    context: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points. The Ravens: 7 wins, 6 draws, 1 loss in 14 matches, 8 points fewer than the Falcons.`,
    statements: [
      `If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.`,
      `The Ravens earned more than 45% of their total points from draws alone.`,
      `Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.`,
      `The Falcons' win-to-draw point contribution ratio (points from wins ÷ points from draws) exceeds 15.`,
      `A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.** — **TRUE**

A win is worth 7 points, so half a win is 3.5 points. The score would be 63 + 14 = 77, greater than the actual 75.`,
      `**B) The Ravens earned more than 45% of their total points from draws alone.** — **FALSE**

The Ravens earned 67 points total, including points from six draws. Draw points are 18, and 18/67 ≈ 26.9%, far below 45%.

**Why it fails.** A contribution percentage uses the team's total points as the denominator, not its number of matches`,
      `**C) Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.** — **TRUE**

Apply the stated alternate scoring system to both records. The Falcons score 22 and the Ravens score 20, so the Falcons remain ahead.`,
      `**D) The Falcons' win-to-draw point contribution ratio (points from wins ÷ points from draws) exceeds 15.** — **FALSE**

Compare the Falcons' points from wins with their points from draws. The contributions are 63 and 12, giving 63/12 = 5.25. That does not exceed 15.`,
      `**E) A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.** — **FALSE**

Three draws become wins, leaving 12 wins and 1 draw. The revised score is 87, so the increase is 12 points, not more than 20.

**Why it fails.** Converting a draw to a win adds 7 - 3 = 4 points each time, a quick way to track this change`,
    ],
    difficulty_level: "5/5",
    sort_order: 49,
    solution_overview: `**What's going on.** The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points.

**Model.**

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply by 3 and 2: $27x + 12y = 225$; $14x + 12y = 134$.

**Step 2.** Subtract: $13x = 91$, so $x = 7$.

**Step 3.** Substitute back: 63 + $4y = 75$, so $y = 3$.

**Answer.** Win = 7 points | Draw = 3 points

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-50",
    case_id: "MATH 5.50",
    title: `Meridian Alloys — Decimal Density Reconstruction and Audit`,
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
      `**A) If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.** — **TRUE**

Use Metal A's 7.6 kg/L and Metal B's 11.4 kg/L in the altered Batch 1. The mass is 91.2 + 114 = 205.2 kg, which exceeds 200 kg.`,
      `**B) Metal B's density is more than 50% greater than Metal A's density.** — **FALSE**

“More than 50% greater” is stricter than being exactly 50% greater. The increase is 3.8/7.6 = 0.50 = 50% exactly, not more than 50%.

**Why it fails.** For “greater than” language, equality fails the claim even when the result looks close`,
      `**C) The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.** — **TRUE**

Batch 3's predicted mass is 140.6 kg while its recorded mass is 147.0 kg. This is about 4.35%, which is more than 4%.

**Watch.** Audit percentages here are measured against the recorded total specified in the claim`,
      `**D) If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.** — **FALSE**

Replace Batch 3's converted 9.5 L of A with 10 L while keeping B at 6 L. The result is 76 + 68.4 = 144.4 kg. Its distance from 147.0 kg is 2.6 kg, not within 2 kg.

**Why it fails.** “Within 2 kg” means an absolute gap of 2 kg or less, not a rounded display value`,
      `**E) Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.** — **TRUE**

Combining batches adds each metal's volumes before applying the same densities. This gives 129.2 + 262.2 = 391.4 kg, exactly equal to 182.4 + 209.0.`,
    ],
    difficulty_level: "5/5",
    sort_order: 50,
    solution_overview: `**What's going on.** Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).

**Model.**

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

**Solve.**

**Step 1.** Divide by 4 and 5: $3x + 2y = 45.6$; $x + 3y = 41.8$, so $x = 41.8$ − 3y.

**Step 2.** Substitute: 3(41.8 − 3y) + $2y = 45.6$ → −7y = −79.8 → $y = 11.4$.

**Step 3.** Substitute back: $x = 41.8$ − 34.2 = 7.6.

**Step 4.** Audit Batch 3: predicted = 9.5(7.6) + 6(11.4) = 140.6 kg, vs. 147.0 kg recorded — a 6.4 kg discrepancy.

**Answer.** Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
  },
  {
    id: "math-5-51",
    case_id: "MATH 5.51",
    title: `Halcyon Ventures — Fee Structure Reconstruction from Client Differentials`,
    context: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is $600,000, fee $10,800. Client 1's AUM exceeds Client 2's by $150,000 and pays $2,400 more in total fees. The flat retainer is identical for every client, so it cancels out of any fee-difference comparison.`,
    statements: [
      `A client with AUM of $850,000 would pay a fee representing less than 1.75% of their AUM.`,
      `The flat retainer accounts for more than 10% of Client 2's total fee.`,
      `If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM $750,000) would decrease compared to its actual amount.`,
      `The percentage-point difference in effective fee rate (total fee ÷ AUM) between Client 1 and Client 2 is more than 0.05 percentage points.`,
      `A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) A client with AUM of $850,000 would pay a fee representing less than 1.75% of their AUM.** — **TRUE**

The fee formula is 0.016(AUM) + 1,200. The fee is $14,800, and 14,800/850,000 ≈ 1.7412%. That is less than 1.75%.

**Watch.** The flat retainer makes the effective rate different from the stated 1.6% management rate`,
      `**B) The flat retainer accounts for more than 10% of Client 2's total fee.** — **TRUE**

Compare the $1,200 retainer with Client 2's $10,800 total fee. The share is about 11.11%, which exceeds 10%.

**Watch.** Use the total fee in the denominator when a claim asks what portion of that fee the retainer represents`,
      `**C) If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM $750,000) would decrease compared to its actual amount.** — **TRUE**

Client 1 has $750,000 AUM; both the rate and retainer are changed in the hypothetical. Actual fee = $13,200; revised fee = $12,900. The revised fee is lower.

**Watch.** Percentage points are decimal-rate changes: 1.6% minus 0.2 points is 1.4%, or 0.014`,
      `**D) The percentage-point difference in effective fee rate (total fee ÷ AUM) between Client 1 and Client 2 is more than 0.05 percentage points.** — **FALSE**

Effective fee rates include the retainer and therefore differ by client. The rates are 1.76% and 1.80%, a difference of 0.04 percentage points. That is not more than 0.05.

**Why it fails.** Subtract percentages in percentage points; 1.80% - 1.76% is 0.04 points, not 4%`,
      `**E) A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.** — **FALSE**

Triple Client 2's AUM is $1,800,000, but the $1,200 retainer is not tripled. The new fee is $30,000, while triple Client 2's fee is $32,400. It is not more.

**Why it fails.** Fixed charges break simple scaling: tripling the input does not triple a total that includes a one-time retainer`,
    ],
    difficulty_level: "5/5",
    sort_order: 51,
    solution_overview: `**What's going on.** Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is $600,000, fee $10,800.

**Model.**

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

**Solve.**

**Step 1.** The second equation already isolates x: $150000x = 2400$, so $x = 0.016$ (1.6%).

**Step 2.** Substitute into the first: 600000(0.016) + $y = 10800$, so $y = 1200$.

**Answer.** Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-52",
    case_id: "MATH 5.52",
    title: `Solventis Labs — Multi-Unit Suspension Concentration Reconstruction`,
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
      `**A) Suspension B's concentration is more than 85% higher than Suspension A's concentration.** — **TRUE**

The unknowns are concentrations: A = 8.4 mg/mL and B = 15.6 mg/mL. The increase is 7.2/8.4 ≈ 0.8571 = 85.71%, which is more than 85%.

**Watch.** Concentration comparisons use mg/mL values directly; they are not mixture ratios or amounts of suspension`,
      `**B) Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.** — **FALSE**

Batch 3's A volume is 0.32 L = 320 mL, so its predicted content is 320(8.4) + 450(15.6) = 9,708 mg. The gap is 8 mg, and 8/9,700 ≈ 0.0825%, far below 1%.

**Why it fails.** Convert liters to milliliters before multiplying by mg/mL: 0.32 L is 320 mL, not 0.32 mL`,
      `**C) If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.** — **TRUE**

The hypothetical doubles Batch 1's B volume from 300 mL to 600 mL, while A remains 500 mL. The content is 4,200 + 9,360 = 13,560 mg, which exceeds 13,500 mg.`,
      `**D) The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.** — **TRUE**

Pool the recorded contents of Batches 1 and 2, then compare with twice Batch 2 alone. Pooled content is 21,480 mg and the benchmark is 25,200 mg. Since 21,480 < 25,200, the claim holds.

**Watch.** This comparison uses total milligrams, so add content values—not concentration labels or volumes`,
      `**E) Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.** — **TRUE**

Compare what fraction of each batch's total volume is Suspension B. Batch 2 is about 77.78% B; Batch 3 is 450/770 ≈ 58.44% B. Batch 2's share is higher.`,
    ],
    difficulty_level: "5/5",
    sort_order: 52,
    solution_overview: `**What's going on.** Solventis blends two drug suspensions, each with a fixed mg/mL concentration. A third batch's Suspension A volume was logged in liters, then converted to mL. The two unknowns are the concentrations; batch volumes are known coefficients (convert L → mL first).

**Model.**

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

**Solve.**

**Step 1.** Divide by 100: $5x + 3y = 88.8$; $2x + 7y = 126$.

**Step 2.** Multiply by 7 and 3: $35x + 21y = 621.6$; $6x + 21y = 378$.

**Step 3.** Subtract: $29x = 243.6$, so $x = 8.4$.

**Step 4.** Substitute back: 16.8 + $7y = 126$, so $y = 15.6$.

**Step 5.** Audit Batch 3: predicted = 320(8.4) + 450(15.6) = 9,708 mg, vs. 9,700 mg recorded — an 8 mg discrepancy.

**Answer.** Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)

**Concentration:** Volumes are the known coefficients; the unknowns are the two concentrations (mg/mL). Convert every volume to the same unit before multiplying.`,
  },
  {
    id: "math-5-53",
    case_id: "MATH 5.53",
    title: `Ridgeline Construction — Waste-Adjusted Material Cost Reconstruction`,
    context: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall. Job 1 needed 200 usable studs + 150 usable sheets, invoice $7,164.00. Job 2 needed 350 usable studs + 175 usable sheets, invoice $8,946.00.`,
    statements: [
      `The total waste-related cost on Invoice 1 (the cost of the studs and drywall beyond the usable amounts) exceeds $700.00.`,
      `If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than $150.00.`,
      `Job 2's usable-material cost (studs and drywall priced at their per-unit rates, using only the 350 usable studs and 175 usable sheets, ignoring waste) is more than 90% of Invoice 2's actual as-ordered total.`,
      `The drywall price (y) is more than 8 times the stud price (x).`,
      `Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The total waste-related cost on Invoice 1 (the cost of the studs and drywall beyond the usable amounts) exceeds $700.00.** — **FALSE**

Job 1 orders 24 waste studs and 12 waste drywall sheets beyond the usable amounts. Waste studs cost $108 and waste sheets cost $456, for $564 total. That does not exceed $700.`,
      `**B) If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than $150.00.** — **TRUE**

Reducing drywall waste to 5% changes Job 2's ordered drywall to 175(1.05) = 183.75 sheets. The new total is $8,746.50, a decrease of $199.50 from $8,946.00. This is more than $150.

**Watch.** The stud allowance remains 12%, so keep the 392 ordered studs in the revised invoice`,
      `**C) Job 2's usable-material cost (studs and drywall priced at their per-unit rates, using only the 350 usable studs and 175 usable sheets, ignoring waste) is more than 90% of Invoice 2's actual as-ordered total.** — **TRUE**

The usable-only cost excludes waste but uses Job 2's 350 studs and 175 sheets. Usable cost is $8,225, while 90% of the invoice is $8,051.40. Since $8,225 is higher, the claim is true.

**Watch.** “More than 90%” is tested against 90% of the actual invoice, not by subtracting 10% of usable cost`,
      `**D) The drywall price (y) is more than 8 times the stud price (x).** — **TRUE**

Compare drywall's unit price with eight times the stud's unit price. 38/4.50 ≈ 8.44, which is more than 8.

**Watch.** “More than 8 times” is a multiplicative test; dividing the two prices avoids comparing unlike dollar gaps`,
      `**E) Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.** — **TRUE**

Each job's waste percentage is waste cost divided by usable-material cost. Job 1 increases by about 8.545%; Job 2 by about 8.767%. Job 1's increase is smaller.`,
    ],
    difficulty_level: "5/5",
    sort_order: 53,
    solution_overview: `**What's going on.** Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall.

**Model.**

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply the first by 1.75 (so its x-coefficient, 224×1.75=392, matches the second): $392x + 283.5y = 12537$.

**Step 2.** Subtract the second: $94.5y = 3591$, so $y = 38.00$.

**Step 3.** Substitute back: $224x + 6156 = 7164$, so $x = 4.50$.

**Answer.** Stud price = $4.50 | Drywall sheet price = $38.00`,
  },
  {
    id: "math-5-54",
    case_id: "MATH 5.54",
    title: `Precision Dynamics — Sensor Calibration Curve Reconstruction`,
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
      `**A) The scale factor exceeds 3.4 by more than 2.5%.** — **TRUE**

The scale factor is 3.5, compared with 3.4. The excess is about 2.94%, which is more than 2.5%.

**Watch.** “Exceeds 3.4 by” asks for the difference relative to 3.4, not relative to 3.5`,
      `**B) If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.** — **TRUE**

Double the offset 13.5 to 27 while keeping scale 3.5. The value is 70+27 = 97, which exceeds 95.`,
      `**C) The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.** — **FALSE**

At reading 45.0, the curve predicts 171.00 while the reference is 172.20. The difference is -1.20, so the prediction is lower, not higher; it cannot exceed the reference by more than 1%.

**Why it fails.** Keep the sign of an audit difference; an underprediction cannot satisfy an “exceeding” statement`,
      `**D) The percentage increase in true value between Point 1 and Point 2 is more than 100%.** — **TRUE**

Compare the change from Point 1's 56.90 to Point 2's 124.45 with Point 1. The increase is 67.55/56.90 ≈ 118.7%, which exceeds 100%.

**Watch.** Percentage increase is based on the starting value, Point 1, not the later value`,
      `**E) A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).** — **FALSE**

Predict the true value at reading 8.0 and compare it with half of 56.90. The prediction is 41.5; half of Point 1 is 28.45. Since 41.5 is not less than 28.45, the claim fails.

**Why it fails.** Calculate the requested half separately; do not halve the reading and assume the offset halves too`,
    ],
    difficulty_level: "5/5",
    sort_order: 54,
    solution_overview: `**What's going on.** A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.

**Model.**

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

**Solve.**

**Step 1.** Subtract the first from the second: $19.3x = 67.55$, so $x = 3.50$.

**Step 2.** Substitute back: 43.4 + $y = 56.90$, so $y = 13.50$.

**Step 3.** Verification: predicted = 45.0(3.5) + 13.5 = 171.00, vs. recorded 172.20 — a 1.20 discrepancy.

**Answer.** Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)

**Affine map:** Here the two unknowns *are* the slope and intercept of True = (scale)×Reading + offset. Two calibration points → one 2×2 system.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-55",
    case_id: "MATH 5.55",
    title: `Meridian Commodities — Blended Shipment Price Reconstruction`,
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
      `**A) Coffee costs more than 25% more per kilogram than Cocoa.** — **TRUE**

Coffee costs $6.20/kg and Cocoa costs $4.85/kg. The premium is 1.35/4.85 ≈ 27.84%, which is more than 25%.

**Watch.** “More than 25% more than Cocoa” uses Cocoa, the lower reference price, as the denominator`,
      `**B) Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.** — **TRUE**

Shipment 1 has 312 kg of Coffee out of its 3:2 split. Coffee contributes $1,934.40, and $1,934.40/$2,943.20 ≈ 65.72%. This exceeds 65%.

**Watch.** Cost share is not weight share: multiply Coffee's kilograms by its own price before dividing by shipment cost`,
      `**C) If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual $4,555.00.** — **TRUE**

A 1:1 split of 800 kg gives 400 kg of each commodity. The hypothetical cost is $2,480+$1,940 = $4,420, less than $4,555.`,
      `**D) The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.** — **FALSE**

Add the Coffee kilograms and Cocoa kilograms across both shipments, then price each total. Coffee costs $5,034.40 in total; Cocoa costs $2,463.80. Cocoa does not exceed Coffee.`,
      `**E) The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.** — **TRUE**

Compare the $1.35 price gap with 30% of Coffee's $6.20 price. The gap is $1.35 and the benchmark is $1.86. Since 1.35 < 1.86, the claim is true.

**Watch.** This statement names Coffee as the reference, which differs from a “more than Cocoa” percentage comparison`,
    ],
    difficulty_level: "5/5",
    sort_order: 55,
    solution_overview: `**What's going on.** Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost $2,943.20.

**Model.**

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

**Solve.**

**Step 1.** Divide by 8 and 100: $39x + 26y = 367.9$; $5x + 3y = 45.55$, so $x = 9.11$ − 0.6y.

**Step 2.** Substitute: 39(9.11 − 0.6y) + $26y = 367.9$ → $2.6y = 12.61$ → $y = 4.85$.

**Step 3.** Substitute back: $x = 9.11$ − 2.91 = 6.20.

**Answer.** Coffee = $6.20/kg | Cocoa = $4.85/kg

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
  },
  {
    id: "math-5-56",
    case_id: "MATH 5.56",
    title: `Continental Freight — Fleet Fuel Rate Reconstruction`,
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
      `Route 2's fleet-wide average fuel efficiency (total fuel ÷ total distance, in L/100km) is closer to the Van's individual rate than to the Truck's individual rate.`,
      `Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Truck fuel consumption is more than 75% higher than Van fuel consumption.** — **TRUE**

Trucks use 32 L/100 km and Vans use 18 L/100 km. The excess is 14/18 ≈ 77.78%, which is more than 75%.

**Watch.** Compare consumption rates in the same L/100 km unit; do not invert them into km/L midway`,
      `**B) Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.** — **FALSE**

Route 3's predicted fuel is 152 L and its recorded fuel is 155 L. The difference is 3 L, or about 1.94% of 155 L. That is not more than 2%.

**Why it fails.** “Below recorded” fixes 155 L as the percentage base, not the predicted 152 L`,
      `**C) If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.** — **TRUE**

Convert the hypothetical distances to hundreds of km for rates given per 100 km. The total is 272+162 = 434 L, which exceeds 430 L.`,
      `**D) Route 2's fleet-wide average fuel efficiency (total fuel ÷ total distance, in L/100km) is closer to the Van's individual rate than to the Truck's individual rate.** — **TRUE**

Route 2's combined fuel rate is found from its total fuel and total distance. The rate is 23 L/100 km. It is 5 from the Van rate 18 and 9 from the Truck rate 32, so it is closer to Van.`,
      `**E) Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.** — **TRUE**

Route 1's actual two-vehicle fuel is compared with two separate full-distance runs. This hypothetical sum is 470.4+264.6 = 735 L, greater than Route 1's actual 383.6 L.

**Watch.** The comparison deliberately counts the combined distance twice—once for each vehicle type—so do not merge it into one 1,470 km run`,
    ],
    difficulty_level: "5/5",
    sort_order: 56,
    solution_overview: `**What's going on.** Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).

**Model.**

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

**Solve.**

**Step 1.** Multiply by 9 and 6.2: $76.5x + 55.8y = 3452.4$; $31x + 55.8y = 1996.4$.

**Step 2.** Subtract: $45.5x = 1456$, so $x = 32.0$.

**Step 3.** Substitute back: 160 + $9y = 322$, so $y = 18.0$.

**Step 4.** Audit Route 3: predicted = 2.5(32) + 4(18) = 152 L, vs. 155 L recorded — a 3 L discrepancy.

**Answer.** Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.`,
  },
  {
    id: "math-5-57",
    case_id: "MATH 5.57",
    title: `Whitmore Scholarship Fund — Blended-Return Rate Reconstruction`,
    context: `The $45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation ($27,000 Bonds, $18,000 Equities) returns $2,646.00. A proposed reallocation swapping those amounts ($18,000 Bonds, $27,000 Equities) would return $2,754.00.`,
    statements: [
      `The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.`,
      `Under the current allocation, the blended rate (total return ÷ total fund) is less than 6%.`,
      `If the entire $45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns ($2,646.00 + $2,754.00 = $5,400.00).`,
      `A 50/50 split ($22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.`,
      `The bond rate is more than 80% of the equity rate.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.** — **TRUE**

Bonds earn 5.4% and Equities earn 6.6%. The advantage is 1.2/5.4 ≈ 22.22%, which is more than 20%.

**Watch.** The phrase “of the bond rate” makes 5.4%, not 6.6%, the reference for the relative comparison`,
      `**B) Under the current allocation, the blended rate (total return ÷ total fund) is less than 6%.** — **TRUE**

The current allocation returns $2,646 on a $45,000 fund. The blended rate is 5.88%, which is less than 6%.

**Watch.** A blended investment rate uses the fund's total return over its total principal`,
      `**C) If the entire $45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns ($2,646.00 + $2,754.00 = $5,400.00).** — **FALSE**

Put all $45,000 in Equities at 6.6% and compare with the sum of both described returns. The all-equity return is $2,970, while the benchmark is $5,400. It does not exceed it.`,
      `**D) A 50/50 split ($22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.** — **TRUE**

A 50/50 allocation places $22,500 in each portfolio. Both calculations give $2,700 exactly.`,
      `**E) The bond rate is more than 80% of the equity rate.** — **TRUE**

Test the Bond rate as a percentage of the Equity rate. This is about 81.8%, which is more than 80%.

**Watch.** “Bond is what percent of Equity” requires Bond divided by Equity, not the reverse`,
    ],
    difficulty_level: "5/5",
    sort_order: 57,
    solution_overview: `**What's going on.** The $45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation ($27,000 Bonds, $18,000 Equities) returns $2,646.00.

**Model.**

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

**Solve.**

**Step 1.** Add the two equations: $450x + 450y = 5400$, so $x + y = 12$.

**Step 2.** Subtract the first from the second: −$90x + 90y = 108$, so y − $x = 1.2$, i.e. y = x + 1.2.

**Step 3.** Substitute: x + (x+1.2) = 12, so $x = 5.4$, and $y = 6.6$.

**Answer.** Bond rate = 5.4% | Equity rate = 6.6%

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
  },
  {
    id: "math-5-58",
    case_id: "MATH 5.58",
    title: `Ashford Mutual Insurance — Premium Structure Reconstruction`,
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
      `**A) The reconstructed Renters coverage amount is less than $30,000.** — **TRUE**

The Renters policy's premium reconstructs 25 units of $1,000 coverage. The coverage is $25,000, which is less than $30,000.

**Watch.** The solved C = 25 is measured in thousands of dollars, so translate its unit before reporting coverage`,
      `**B) The fixed administrative fee represents more than 60% of the Auto policy's total premium.** — **FALSE**

The administrative fee is $214.70 and the Auto premium is $612.50. The share is about 35.05%, which does not exceed 60%.

**Why it fails.** Separate the fixed fee from the total before converting it to a percentage of the premium`,
      `**C) If the rate per $1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than $75.00.** — **TRUE**

Only the per-$1,000 rate rises 10%; the fixed $214.70 fee stays unchanged. The new premium is $1,295.78, an increase of $98.28 from $1,197.50. This is more than $75.

**Watch.** Apply the 10% increase to the rate component, not to the whole premium containing the fixed fee`,
      `**D) The Home policy's premium per $1,000 of coverage is more than twice the Auto policy's premium per $1,000 of coverage.** — **FALSE**

Divide each total premium by its coverage units to compare premium per $1,000. Home is about $5.70 per $1,000 and Auto about $7.21 per $1,000. Home is not more than twice Auto.

**Why it fails.** A fixed fee inflates the per-unit average of smaller policies, so do not confuse these averages with the quoted variable rate`,
      `**E) Combining the Auto and Home coverage into a single hypothetical policy (295 units of $1,000 coverage total) would cost less than the sum of their separate premiums ($612.50 + $1,197.50 = $1,810.00).** — **TRUE**

Combine 85 and 210 coverage units, paying the fixed fee once. The result is $1,595.30, which is less than $1,810.00 for two separate policies.

**Watch.** Combining policies saves exactly one administrative fee; the coverage-rate portion is unchanged`,
    ],
    difficulty_level: "5/5",
    sort_order: 58,
    solution_overview: `**What's going on.** Ashford prices every policy as a fixed administrative fee plus a rate per $1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.

**Model.**

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

**Solve.**

**Step 1.** Subtract directly: $125y = 585$, so $y = 4.68$.

**Step 2.** Substitute back: $x + 397.80 = 612.50$, so $x = 214.70$.

**Step 3.** Reconstruct the Renters coverage C: 214.70 + $4.68C = 331.70$, so $C = 25$, i.e.

**Step 4.** $25,000.

**Answer.** Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
  },
  {
    id: "math-5-59",
    case_id: "MATH 5.59",
    title: `Cedar Hollow Reserve — Linear Population Growth Reconstruction`,
    context: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340). At Year 6: combined population = 1,772. Species A grows at exactly twice the annual rate of Species B.`,
    statements: [
      `By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.`,
      `If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.`,
      `The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth : Species B's growth) is greater than 2.5 : 1.`,
      `At some point between Year 2 and Year 6, the two species had equal populations.`,
      `Species A overtakes Species B in total population size before Year 5.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.** — **TRUE**

Species A grows by 72/year and B by 36/year over four years after Year 2. A = 898 and B = 874, making a gap of 24. Since 24 > 20, the claim holds.

**Watch.** From Year 2 to Year 6 there are four growth intervals, not six`,
      `**B) If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.** — **TRUE**

In the hypothetical, B uses A's actual 72/year growth rate. B would be 1,018 and the combined total 1,916. The increase over 1,772 is 144, more than 140.

**Watch.** Keep Species A at its actual Year 6 value; the hypothetical changes B's growth rate only`,
      `**C) The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth : Species B's growth) is greater than 2.5 : 1.** — **FALSE**

Compare total growth over the same four-year interval. The growths are 288 and 144, so the ratio is 2:1. It is not greater than 2.5:1.`,
      `**D) At some point between Year 2 and Year 6, the two species had equal populations.** — **TRUE**

B leads at Year 2, but A leads at Year 6 under constant linear change. The difference changes from -120 to +24. A linear difference that changes sign must equal zero between those times.`,
      `**E) Species A overtakes Species B in total population size before Year 5.** — **FALSE**

Solve for when the two population formulas are equal. 36(t-2)=120, so t≈5.33. The crossover is after Year 5, not before.`,
    ],
    difficulty_level: "5/5",
    sort_order: 59,
    solution_overview: `**What's going on.** Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340).

**Model.**

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

**Solve.**

**Step 1.** Substitute the second into the first: $2y + y = 108$, so $y = 36$.

**Step 2.** Then $x = 2$(36) = 72.

**Answer.** Species A = +72 individuals/year | Species B = +36 individuals/year`,
  },
  {
    id: "math-5-60",
    case_id: "MATH 5.60",
    title: `Continental Power Grid — Plant Output Rate Reconstruction`,
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
      `**A) Plant A's output rate exceeds Plant B's by more than 45%.** — **TRUE**

Plant A produces 145 MWh/hr and Plant B produces 98 MWh/hr. The excess is 47/98 ≈ 47.96%, which is more than 45%.

**Watch.** “More than B's rate” means use B's 98 MWh/hr as the percentage reference`,
      `**B) Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.** — **TRUE**

Day 3's predicted output is 3,543 MWh and the recorded output is 3,553 MWh. The discrepancy is about 0.2815%, which is less than 0.3%.

**Watch.** Convert 1,020 minutes to 17 hours before rate × time; otherwise the day-total units will be wrong`,
      `**C) If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).** — **FALSE**

The hypothetical gives A 29 hours and B 36 hours, reversing the actual combined hours. The output is 4,205+3,528 = 7,733 MWh, less than the actual 8,062 MWh.`,
      `**D) The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.** — **TRUE**

Compare the two-plant combined rate with 2.4 times Plant B's rate. The combined rate is 243 MWh/hr, and the benchmark is 235.2 MWh/hr. Since 243 > 235.2, the claim is true.

**Watch.** This asks for a sum of rates at the same time, not a time-weighted average output rate`,
      `**E) Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.** — **TRUE**

Add the recorded daily outputs across all three days. The three-day total is 11,615 MWh, which exceeds 11,600 MWh.`,
    ],
    difficulty_level: "5/5",
    sort_order: 60,
    solution_overview: `**What's going on.** Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs).

**Model.**

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

**Solve.**

**Step 1.** Divide the first by 2: $7x + 10y = 1995$.

**Step 2.** Multiply by 9: $63x + 90y = 17955$.

**Step 3.** Multiply the second by 10: $220x + 90y = 40720$.

**Step 4.** Subtract: $157x = 22765$, so $x = 145.0$.

**Step 5.** Substitute back: 1015 + $10y = 1995$, so $y = 98.0$.

**Step 6.** Audit Day 3: predicted = 17(145) + 11(98) = 3,543 MWh, vs. 3,553 MWh recorded — a 10 MWh discrepancy.

**Answer.** Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)

**Rate × time:** Each person/plant contributes (rate)×(hours). Percents finished are just the right-hand sides — convert them to decimals before eliminating.`,
  },
];
