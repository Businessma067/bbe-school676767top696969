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

The elimination step gives $x = 360$, and this also satisfies the memo's own equalizing check, so it is consistent both algebraically and in context.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 620 \\\\
x - 50 = y + 50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **North depot = 360 crates | South depot = 260 crates**.`,
      `**B) The South depot currently holds 240 crates.** — **FALSE**

The South depot holds 260 crates, not 240. A common slip is assuming the difference (100) can simply be split from the total the same way as North's value, instead of substituting back into $x + y = 620$.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 620 \\\\
x - 50 = y + 50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **North depot = 360 crates | South depot = 260 crates**.`,
      `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.** — **TRUE**

Moving crates the other way adds to North's total rather than subtracting: $360 + 30 = 390$.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 620 \\\\
x - 50 = y + 50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **North depot = 360 crates | South depot = 260 crates**.`,
      `**D) The difference between the two depots today is 120 crates.** — **FALSE**

The actual difference today is $360 - 260 = 100$ crates. This trap comes from misreading the memo's '50 crates transferred' as itself being the current difference, when in fact a 50-crate transfer is what makes the totals equal, not what separates them today.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 620 \\\\
x - 50 = y + 50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **North depot = 360 crates | South depot = 260 crates**.`,
      `**E) Moving 50 crates from North to South (as the memo describes) would leave both depots holding 310 crates each.** — **TRUE**

This is exactly the memo's own claim, confirmed by the numbers: $360 - 50 = 310$ and $260 + 50 = 310$.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 620 \\\\
x - 50 = y + 50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **North depot = 360 crates | South depot = 260 crates**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 1,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + y = 620 \\\\
x - 50 = y + 50
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** This is now a standard sum-and-difference pair: $x + y = 620$ and $x - y = 100$.

$$
x + y = 620
$$

$$
x - y = 100
$$

**Step 2.** Adding the two equations eliminates y: $2x = 720$, so $x = 360$.

$$
2x = 720
$$

$$
x = 360
$$

**Step 3.** Then $y = 620 - 360=260$.

$$
y = 620 - 360
$$

$$
y = 620 - 360=260
$$

**Step 4.** Check: $360 - 50 = 310$ and $260 + 50 = 310$ — the two depots do end up equal, confirming the translation was
correct.

$$
360 - 50 = 310
$$

$$
260 + 50 = 310
$$

**3. Final answer:** North depot = 360 crates | South depot = 260 crates

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The unit price recovered for a notebook is $3.50, and it satisfies both invoices simultaneously, not just one of them.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Notebook = $3.50 | Pen = $1.80**.`,
      `**B) A pen costs $2.10.** — **FALSE**

A pen actually costs $1.80, not $2.10. Rounding $-135y = -243.00$ carelessly is the most likely source of this kind of error.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Notebook = $3.50 | Pen = $1.80**.`,
      `**C) Invoice #101 (40 notebooks and 25 pens) totals $185.00.** — **TRUE**

This is simply the invoice total as printed, exactly reproduced by 40(3.50) + 25(1.80).

Related equation(s) from the model:

$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Notebook = $3.50 | Pen = $1.80**.`,
      `**D) 10 notebooks and 10 pens purchased together would cost $53.00.** — **TRUE**

10(3.50) + 10(1.80) = 35.00 + 18.00 = $53.00; note this is NOT the same as averaging either invoice total, since the notebook-to-pen ratio here differs from both invoices.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Notebook = $3.50 | Pen = $1.80**.`,
      `**E) Invoice #102 (15 notebooks and 60 pens) totals $172.50.** — **FALSE**

Invoice #102's printed total is $160.50, not $172.50 — a student who mixes up which invoice number goes with which total would produce this kind of error.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Notebook = $3.50 | Pen = $1.80**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 2,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
40x + 25y = 185.00 \\\\
15x + 60y = 160.50
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide Invoice #102 by 15 to simplify: $x + 4y = 10.70$, so $x = 10.70 - 4y$.

$$
x + 4y = 10.70
$$

$$
x = 10.70 - 4y
$$

**Step 2.** Substitute into Invoice #101: 40(10.70 - 4y) + $25y = 185.00$.

$$
25y = 185.00
$$

**Step 3.** This expands to 428.00 - $160y + 25y = 185.00$, so $-135y = -243.00$, giving $y = 1.80$.

$$
160y + 25y = 185.00
$$

$$
-135y = -243.00
$$

$$
y = 1.80
$$

**Step 4.** Then $x = 10.70 - 4$(1.80) = 3.50.

$$
x = 10.70 - 4
$$

**3. Final answer:** Notebook = $3.50 | Pen = $1.80

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The recovered adult price of $12.00 reproduces both session totals correctly.

Related equation(s) from the model:

$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Adult ticket = $12.00 | Child ticket = $7.00**.`,
      `**B) A child ticket costs $7.00.** — **TRUE**

The recovered child price of $7.00 likewise reproduces both totals; swapping which price belongs to 'adult' and which to 'child' is a common mix-up when the two totals are close in size.

Related equation(s) from the model:

$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Adult ticket = $12.00 | Child ticket = $7.00**.`,
      `**C) The Saturday matinee (90 adult, 150 child) generated $2,050.00 in revenue.** — **FALSE**

Using the actual prices, the matinee total is 90(12) + 150(7) = $2,130.00, not $2,050.00 — this simply misquotes the figure already printed in the summary table.

Related equation(s) from the model:

$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Adult ticket = $12.00 | Child ticket = $7.00**.`,
      `**D) The Saturday evening session (160 adult, 40 child) generated $2,300.00 in revenue.** — **FALSE**

The evening total works out to 160(12) + 40(7) = $2,200.00, not $2,300.00 — a $100 overstatement of the value already given.

Related equation(s) from the model:

$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Adult ticket = $12.00 | Child ticket = $7.00**.`,
      `**E) 50 adult tickets and 50 child tickets together would generate $1,000.00.** — **FALSE**

50(12) + 50(7) = 600 + 350 = $950.00, not $1,000.00. This combination appears in neither session, so it must be computed fresh rather than estimated from the table.

Related equation(s) from the model:

$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Adult ticket = $12.00 | Child ticket = $7.00**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 3,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
90a + 150c = 2130 \\\\
160a + 40c = 2200
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide the evening equation by 40: $4a + c = 55$, so $c = 55 - 4a$.

$$
4a + c = 55
$$

$$
c = 55 - 4a
$$

**Step 2.** Substitute into the matinee equation: 90a + 150(55 - 4a) = 2130.

**Step 3.** This
expands to $90a + 8250 - 600a = 2130$, so $-510a = -6120$, giving $a = 12$.

$$
90a + 8250 - 600a = 2130
$$

$$
-510a = -6120
$$

$$
a = 12
$$

**Step 4.** Then $c = 55 - 48=7$.

$$
c = 55 - 48
$$

$$
c = 55 - 48=7
$$

**3. Final answer:** Adult ticket = $12.00 | Child ticket = $7.00

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Once the $8.00 fee is removed from both receipts, the food-only system correctly gives $7.00 per sandwich; using the receipt totals (70 and 74) directly would instead produce the wrong prices.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 70.00 - 8.00 = 62.00 \\\\
3x + 9y = 74.00 - 8.00 = 66.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sandwich = $7.00 | Wrap = $5.00**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
      `**B) A wrap costs $5.00.** — **TRUE**

The wrap price of $5.00 likewise depends on subtracting the fee first — this is the main interpretive step in the task, not the algebra itself.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 70.00 - 8.00 = 62.00 \\\\
3x + 9y = 74.00 - 8.00 = 66.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sandwich = $7.00 | Wrap = $5.00**.`,
      `**C) Receipt A's food subtotal, before the $8.00 delivery fee is added, is $62.00.** — **TRUE**

70.00 - 8.00 = $62.00, matching Receipt A's food-only subtotal used to build the equation.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 70.00 - 8.00 = 62.00 \\\\
3x + 9y = 74.00 - 8.00 = 66.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sandwich = $7.00 | Wrap = $5.00**.`,
      `**D) Receipt B's total, including the $8.00 delivery fee, is $74.00.** — **TRUE**

Receipt B's printed total, delivery fee included, is $74.00 — note this includes the fee, unlike the $66.00 figure used inside the equation itself.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 70.00 - 8.00 = 62.00 \\\\
3x + 9y = 74.00 - 8.00 = 66.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sandwich = $7.00 | Wrap = $5.00**.`,
      `**E) A pickup order (no delivery fee) of 5 sandwiches and 5 wraps would cost $60.00.** — **TRUE**

A pickup order has no delivery fee to add: 5(7) + 5(5) = $60.00.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 70.00 - 8.00 = 62.00 \\\\
3x + 9y = 74.00 - 8.00 = 66.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sandwich = $7.00 | Wrap = $5.00**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 4,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
6x + 4y = 70.00 - 8.00 = 62.00 \\\\
3x + 9y = 74.00 - 8.00 = 66.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply the second equation by 2: $6x + 18y = 132$.

$$
6x + 18y = 132
$$

**Step 2.** Subtract the first equation: $14y = 70$, so $y = 5$.

$$
14y = 70
$$

$$
y = 5
$$

**Step 3.** Substitute back: 3x + 9(5) = 66, so $3x
= 21$, and $x = 7$.

$$
3x
= 21
$$

$$
x = 7
$$

**3. Final answer:** Sandwich = $7.00 | Wrap = $5.00

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Account A actually holds $6,000, not $6,500. Because the two rates (4% and 7%) are close together, it is easy to mis-split the $10,000 roughly in half instead of solving the weighted equation properly.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Account A = $6,000 | Account B = $4,000**.

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.`,
      `**B) $4,500 was placed in Account B.** — **FALSE**

Account B holds $4,000, not $4,500 — the same rough 50/50 guess produces this error too, and the two wrong figures would not even add to $10,000, a useful way to catch the mistake.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Account A = $6,000 | Account B = $4,000**.`,
      `**C) Account A earned $260.00 in interest over the year.** — **FALSE**

Account A's interest is 0.04 \\times 6,000 = $240.00, not $260.00. This kind of error often comes from applying a slightly wrong rate or a small arithmetic slip.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Account A = $6,000 | Account B = $4,000**.`,
      `**D) Account B earned $210.00 in interest over the year.** — **FALSE**

Account B's interest is 0.07 \\times 4,000 = $280.00, not $210.00. Note $240.00 + $280.00 = $520.00 matches the given total, confirming these (not statements C/D) are correct.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Account A = $6,000 | Account B = $4,000**.`,
      `**E) Had the entire $10,000 been placed in Account B alone, total interest for the year would have been $700.00.** — **TRUE**

Placing the full $10,000 at the 7% rate gives 0.07 \\times 10,000 = $700.00, which is indeed higher than the $520.00 actually earned from the mixed allocation.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Account A = $6,000 | Account B = $4,000**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 5,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + y = 10000 \\\\
0.04x + 0.07y = 520
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Solve the first equation for x: $x = 10000 - y$.

$$
x = 10000 - y
$$

**Step 2.** Substitute: 0.04(10000 - y) + $0.07y = 520$.

$$
0.07y = 520
$$

**Step 3.** This expands to 400 - $0.04y + 0.07y = 520$, so
$0.03y = 120$, and $y = 4000$.

$$
0.04y + 0.07y = 520
$$

$$
y = 4000
$$

$$
0.03y = 120
$$

**Step 4.** Then $x = 10000 - 4000=6000$.

$$
x = 10000 - 4000
$$

$$
x = 10000 - 4000=6000
$$

**3. Final answer:** Account A = $6,000 | Account B = $4,000

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The Standard chair price of $304.00 is what makes the shipment value work out exactly, once the $45 price gap is built into the second equation.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard chair = $304.00 | Premium chair = $349.00**.`,
      `**B) A Premium chair is priced at $354.00.** — **FALSE**

A Premium chair costs $349.00, not $354.00 — a tempting but incorrect shortcut is rounding $304 up to $310 first and then adding $45.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard chair = $304.00 | Premium chair = $349.00**.`,
      `**C) The 12 Premium chairs in the shipment are worth $4,188.00 in total.** — **TRUE**

12 \\times 349.00 = $4,188.00, part of the shipment total of $9,660.00 (the remaining $5,472.00 comes from the 18 Standard chairs).

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard chair = $304.00 | Premium chair = $349.00**.`,
      `**D) The price gap between one Premium chair and one Standard chair is $45.00.** — **TRUE**

This is simply the relationship stated in the report and used to build the second equation: 349 - 304 = $45.00.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard chair = $304.00 | Premium chair = $349.00**.`,
      `**E) A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than $3,000.00.** — **TRUE**

5(304) + 5(349) = 1,520 + 1,745 = $3,265.00, which is indeed more than $3,000.00 — this smaller order uses a different ratio (5-and-5) than the shipment (18-and-12), so it must be recalculated rather than scaled down.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard chair = $304.00 | Premium chair = $349.00**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 6,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
y = x + 45 \\\\
18x + 12y = 9660
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Substitute directly: 18x + 12(x + 45) = 9660.

**Step 2.** This expands to $18x + 12x + 540 = 9660$, so $30x = 9120$, and $x = 304$.

$$
18x + 12x + 540 = 9660
$$

$$
x = 304
$$

$$
30x = 9120
$$

**Step 3.** Then $y = 304 + 45=349$.

$$
y = 304 + 45
$$

$$
y = 304 + 45=349
$$

**3. Final answer:** Standard chair = $304.00 | Premium chair = $349.00

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The $17.00 fixed fee is what remains once the per-minute charge is subtracted out of either quoted bill.

Related equation(s) from the model:

$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $17.00 | Extra-minute rate = $0.30/min**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
      `**B) The extra-minute rate advertised is $0.30 per minute.** — **TRUE**

The $0.30 rate is recovered from the DIFFERENCE between the two bills (a $24.00 gap over 80 extra minutes), not from either bill in isolation.

Related equation(s) from the model:

$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $17.00 | Extra-minute rate = $0.30/min**.`,
      `**C) A customer using 200 extra minutes in a month would pay $80.00.** — **FALSE**

The actual charge is 17.00 + 200(0.30) = $77.00, not $80.00.

Related equation(s) from the model:

$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $17.00 | Extra-minute rate = $0.30/min**.`,
      `**D) A customer using 0 extra minutes would pay $0.00 that month.** — **FALSE**

Even with zero extra minutes, the fixed fee of $17.00 still applies, so the bill would be $17.00, not $0.00 — the ad describes extra-minute charges on top of a fee, not instead of one.

Related equation(s) from the model:

$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $17.00 | Extra-minute rate = $0.30/min**.`,
      `**E) The advertised rate ($0.30 per minute) is more than double a rival plan's rate of $0.20 per minute.** — **FALSE**

Double the rival's $0.20 rate would be $0.40, and ByteMobile's $0.30 rate is lower than that, not more than double it.

Related equation(s) from the model:

$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $17.00 | Extra-minute rate = $0.30/min**.`,
    ],
    difficulty_level: "1/5",
    sort_order: 7,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
f + 40r = 29.00 \\\\
f + 120r = 53.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract the first equation from the second: $80r = 24.00$, so $r = 0.30$.

$$
80r = 24.00
$$

$$
r = 0.30
$$

**Step 2.** Substitute back: $f + 12.00 = 29.00$, so $f = 17.00$.

$$
f + 12.00 = 29.00
$$

$$
f = 17.00
$$

**3. Final answer:** Fixed fee = $17.00 | Extra-minute rate = $0.30/min

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The unit and hours totals together pin down 75 Standard ovens; the material-cost column plays no role in finding this figure.

Related equation(s) from the model:

$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard ovens = 75 | Deluxe ovens = 55**.

**Distractor:** The material-cost column is not needed to find the two unknowns — it becomes relevant only for statement E below.`,
      `**B) The division built 45 Deluxe ovens this week.** — **FALSE**

The division built 55 Deluxe ovens, not 45 — a common error is subtracting the hours figures instead of properly eliminating a variable, which tends to understate d.

Related equation(s) from the model:

$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard ovens = 75 | Deluxe ovens = 55**.`,
      `**C) Standard ovens accounted for 300 assembly hours this week.** — **TRUE**

4 hours \\times 75 Standard ovens = 300 hours, part of the 795-hour weekly total (the remaining 495 hours come from the Deluxe ovens).

Related equation(s) from the model:

$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard ovens = 75 | Deluxe ovens = 55**.`,
      `**D) Deluxe ovens accounted for 500 assembly hours this week.** — **FALSE**

Deluxe ovens actually used $9 \\times 55 = 495$ hours, not 500 — note $300 + 495 = 795$ matches the report's total exactly, confirming 495 is correct.

Related equation(s) from the model:

$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard ovens = 75 | Deluxe ovens = 55**.`,
      `**E) The total material cost of all Standard ovens built this week is $9,000.00.** — **TRUE**

This is where the material-cost column finally matters: 75 Standard ovens \\times $120 each = $9,000.00. This statement could not have been answered from the hours data alone.

Related equation(s) from the model:

$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard ovens = 75 | Deluxe ovens = 55**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 8,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
s + d = 130 \\\\
4s + 9d = 795
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** From the total-ovens equation, $s = 130 - d$.

$$
s = 130 - d
$$

**Step 2.** Substitute into the hours equation: 4(130 - d) + $9d = 795$.

$$
9d = 795
$$

**Step 3.** This expands to 520 - $4d + 9d =
795$, giving $5d = 275$, so $d = 55$.

$$
4d + 9d =
795
$$

$$
5d = 275
$$

$$
d = 55
$$

**Step 4.** Then $s = 130 - 55=75$.

$$
s = 130 - 55
$$

$$
s = 130 - 55=75
$$

**3. Final answer:** Standard ovens = 75 | Deluxe ovens = 55

**Distractor:** The material-cost column is not needed to find the two unknowns — it becomes relevant only for statement E below.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The $350.00 sofa price only emerges correctly once each branch's returns have been subtracted from gross sales; using the gross figures directly would give a different (incorrect) system.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 22y = 9760 - 460 = 9300 \\\\
20x + 10y = 9300 - 300 = 9000
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sofa = $350.00 | Armchair = $200.00**.

**Distractor:** The gross figures cannot be used directly — each branch's returns must be subtracted first to isolate the value of items actually sold at listed prices.

**Net, not gross:** Only *net* units (or net dollars) belong in the price equations. Gross − returns comes first; plugging gross totals skews both unknowns.`,
      `**B) An armchair sells for $200.00.** — **TRUE**

The armchair price of $200.00 depends on the same return-deduction step as the sofa price.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 22y = 9760 - 460 = 9300 \\\\
20x + 10y = 9300 - 300 = 9000
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sofa = $350.00 | Armchair = $200.00**.`,
      `**C) Riverside's net sales (after its $460 in returns) were $9,300.00.** — **TRUE**

9,760 - 460 = $9,300.00, exactly the net-sales figure used to build Riverside's equation.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 22y = 9760 - 460 = 9300 \\\\
20x + 10y = 9300 - 300 = 9000
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sofa = $350.00 | Armchair = $200.00**.`,
      `**D) Hillcrest's gross sales (before its $300 in returns) were $9,300.00.** — **TRUE**

Hillcrest's gross sales figure, as printed, is $9,300.00 — note this coincides numerically with Riverside's net sales, but the two are different figures from different branches.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 22y = 9760 - 460 = 9300 \\\\
20x + 10y = 9300 - 300 = 9000
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sofa = $350.00 | Armchair = $200.00**.`,
      `**E) Had Riverside recorded zero returns that month, its gross and net sales would both have equalled $9,760.00.** — **TRUE**

With no returns, net sales would simply equal gross sales, and Riverside's gross figure is $9,760.00.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 22y = 9760 - 460 = 9300 \\\\
20x + 10y = 9300 - 300 = 9000
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Sofa = $350.00 | Armchair = $200.00**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 9,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
14x + 22y = 9760 - 460 = 9300 \\\\
20x + 10y = 9300 - 300 = 9000
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide the Hillcrest equation by 10: $2x + y = 900$, so $y = 900 - 2x$.

$$
2x + y = 900
$$

$$
y = 900 - 2x
$$

**Step 2.** Substitute into Riverside's equation: 14x + 22(900 - 2x) = 9300.

**Step 3.** This
expands to $14x + 19800 - 44x = 9300$, so $-30x = -10500$, giving $x = 350$.

$$
14x + 19800 - 44x = 9300
$$

$$
-30x = -10500
$$

$$
x = 350
$$

**Step 4.** Then $y = 900 - 700=200$.

$$
y = 900 - 700
$$

$$
y = 900 - 700=200
$$

**3. Final answer:** Sofa = $350.00 | Armchair = $200.00

**Distractor:** The gross figures cannot be used directly — each branch's returns must be subtracted first to isolate the value of items actually sold at listed prices.

**Net, not gross:** Only *net* units (or net dollars) belong in the price equations. Gross − returns comes first; plugging gross totals skews both unknowns.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

PrintFast's setup fee is $9.00, not $12.00 — this kind of error can arise from subtracting the two ORDER totals ($69 - 33 = 36$) and mistakenly treating part of that gap as the fee instead of as 180 pages' worth of per-page charges.

Related equation(s) from the model:

$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **PrintFast setup fee = $9.00 | Rate = $0.20/page**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.`,
      `**B) PrintFast's per-page rate is $0.25.** — **FALSE**

The per-page rate is $0.20, not $0.25. The rate comes from dividing the $36.00 gap between the two orders by the 180-page gap between them, so using the wrong page difference is a likely source of error.

Related equation(s) from the model:

$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **PrintFast setup fee = $9.00 | Rate = $0.20/page**.`,
      `**C) A 250-page order at PrintFast would cost $60.00.** — **FALSE**

A 250-page order costs 9.00 + 250(0.20) = $59.00, not $60.00 — close enough to QuickCopy's flat fee to invite a careless rounding error, but not actually equal to it.

Related equation(s) from the model:

$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **PrintFast setup fee = $9.00 | Rate = $0.20/page**.`,
      `**D) For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat $60.00 fee.** — **FALSE**

At 350 pages, PrintFast costs 9.00 + 350(0.20) = $79.00, which is MORE expensive than QuickCopy's flat $60.00, not cheaper — for long orders, PrintFast's per-page charge eventually overtakes a flat competitor's fee.

Related equation(s) from the model:

$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **PrintFast setup fee = $9.00 | Rate = $0.20/page**.`,
      `**E) Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.** — **TRUE**

Because the two invoices describe genuinely different situations (different page counts, different totals), they behave like two non-parallel lines that cross at exactly one point — so exactly one fee-and-rate pair satisfies both at once.

Related equation(s) from the model:

$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **PrintFast setup fee = $9.00 | Rate = $0.20/page**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 10,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
f + 120r = 33.00 \\\\
f + 300r = 69.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract Order #58's equation from Order #96's: $180r = 36.00$, so $r = 0.20$.

$$
180r = 36.00
$$

$$
r = 0.20
$$

**Step 2.** Substitute back: $f + 24.00 = 33.00$, so $f = 9.00$.

$$
f + 24.00 = 33.00
$$

$$
f = 9.00
$$

**Step 3.** For a 250-
page order: 9.00 + 250(0.20) = $59.00.

**Step 4.** For a 350-page order: 9.00 + 350(0.20) = $79.00.

**3. Final answer:** PrintFast setup fee = $9.00 | Rate = $0.20/page

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Ben's 5 burritos alone cost 5 \\times 6.00 = $30.00, less than Ana's full $32.00 order, not more. It's tempting to assume the person who 'paid more overall' also wins every partial comparison, but that isn't guaranteed here.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 32.00 + 5.00 = 37.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Taco = $3.50 | Burrito = $6.00**.`,
      `**B) A burrito costs $2.50 more than a taco.** — **TRUE**

6.00 - 3.50 = $2.50 exactly, matching the solved prices.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 32.00 + 5.00 = 37.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Taco = $3.50 | Burrito = $6.00**.`,
      `**C) Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than $28.00.** — **TRUE**

4 tacos and 2 burritos would cost 4(3.50) + 2(6.00) = $26.00, indeed under $28.00.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 32.00 + 5.00 = 37.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Taco = $3.50 | Burrito = $6.00**.`,
      `**D) Ben's total order price exceeds $40.00.** — **FALSE**

Ben's order was built to total exactly $37.00, which does not exceed $40.00. Forgetting the $5.00 gap was already used to build the model — and adding it again on top of $37 — is a common slip.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 32.00 + 5.00 = 37.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Taco = $3.50 | Burrito = $6.00**.`,
      `**E) Buying 6 tacos and 6 burritos together would cost $57.00.** — **TRUE**

6 tacos and 6 burritos cost 6(3.50) + 6(6.00) = $57.00 exactly.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 32.00 + 5.00 = 37.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Taco = $3.50 | Burrito = $6.00**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
4x + 3y = 32.00 \\\\
2x + 5y = 32.00 + 5.00 = 37.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply the second equation by 2: $4x + 10y = 74.00$.

$$
4x + 10y = 74.00
$$

**Step 2.** Subtract the first ($4x + 3y = 32.00$): $7y = 42.00$, so $y = 6.00$.

$$
4x + 3y = 32.00
$$

$$
7y = 42.00
$$

$$
y = 6.00
$$

**Step 3.** Substituting back: $4x +
18.00 = 32.00$ \\to  $x = 3.50$.

$$
4x +
18.00 = 32.00
$$

$$
x = 3.50
$$

**3. Final answer:** Taco = $3.50 | Burrito = $6.00

Verify by substituting the final values back into both original equations before judging the statements.`,
  },
  {
    id: "math-5-12",
    case_id: "MATH 5.12",
    title: `Northgate Books Monthly Sales Report`,
    context: `Paperback units sold Hardcover units sold Combined revenue (paperback + hardcover) Full-time staff on payroll Loyalty-member share of purchases Memo — Pricing Desk: "Hardcover editions are priced exactly $5 above the paperback price this quarter, across the board."`,
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

With $x = 12$, the memo's rule gives $y = 17$, an exact $5 gap, so the two pieces of information are consistent.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Paperback = $12.00 | Hardcover = $17.00**.

**Distractor:** Staff headcount and the loyalty-member percentage do not affect unit pricing and should be set aside.`,
      `**B) Hardcover editions are priced above $18.** — **FALSE**

The hardcover price settles at exactly $17.00, not above $18. Assuming a 'clean' $20 hardcover price without solving the system is a typical shortcut.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Paperback = $12.00 | Hardcover = $17.00**.`,
      `**C) Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been $1,200 higher.** — **TRUE**

100 extra paperbacks at $12 each adds exactly $1,200, using only the paperback price and the change in quantity.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Paperback = $12.00 | Hardcover = $17.00**.`,
      `**D) A customer buying 3 hardcovers and 2 paperbacks would pay less than $75.** — **FALSE**

3 hardcovers and 2 paperbacks cost 3(17) + 2(12) = $75.00 exactly — equal to, not less than, $75.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Paperback = $12.00 | Hardcover = $17.00**.`,
      `**E) The reported $8,540 total could also have come from selling 310 hardcovers alone.** — **FALSE**

310 hardcovers alone would bring in 310 \\times 17 = $5,270, nowhere near $8,540. The staff and loyalty-share figures are irrelevant distractions.

Related equation(s) from the model:

$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Paperback = $12.00 | Hardcover = $17.00**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
y = x + 5 \\\\
400x + 220y = 8540
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Substitute directly: 400x + 220(x + 5) = 8540.

**Step 2.** Expanding: $620x + 1100 = 8540$ \\to  $620x = 7440$ \\to  $x = 12$.

$$
620x + 1100 = 8540
$$

$$
620x = 7440
$$

$$
x = 12
$$

**Step 3.** Then $y = 12 + 5=17$.

$$
y = 12 + 5
$$

$$
y = 12 + 5=17
$$

**3. Final answer:** Paperback = $12.00 | Hardcover = $17.00

**Distractor:** Staff headcount and the loyalty-member percentage do not affect unit pricing and should be set aside.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Standard's base fee is $38.00, well above Basic's $15.00 — the higher figure buys a lower overage rate instead.

Related equation(s) from the model:

$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard base fee = $38.00 | Overage rate = $3.00/GB**.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
      `**B) The overage rate on the Standard plan is $3.00 per GB.** — **TRUE**

The elimination step isolates $y = 3$ directly, confirmed by both bills.

Related equation(s) from the model:

$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard base fee = $38.00 | Overage rate = $3.00/GB**.`,
      `**C) A Standard customer using 10 GB of overage in May would be billed $68.00.** — **TRUE**

38 + 10(3) = $68.00 exactly, extending the confirmed rate to a new usage figure.

Related equation(s) from the model:

$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard base fee = $38.00 | Overage rate = $3.00/GB**.`,
      `**D) Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.** — **TRUE**

At 5 GB of overage, Standard costs 38 + 15 = $53.00, versus Premium's flat $40.00 — a $13.00 saving.

Related equation(s) from the model:

$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard base fee = $38.00 | Overage rate = $3.00/GB**.`,
      `**E) For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.** — **TRUE**

At 8 GB, Basic costs 15 + 8(2) = $31.00 versus Standard's 38 + 24 = $62.00 — Basic is substantially cheaper here.

Related equation(s) from the model:

$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard base fee = $38.00 | Overage rate = $3.00/GB**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 13,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 8y = 62.00 \\\\
x + 3y = 47.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract directly: $5y = 15$, so $y = 3$.

$$
5y = 15
$$

$$
y = 3
$$

**Step 2.** Substitute back: $x + 9 = 47$, so $x = 38$.

$$
x + 9 = 47
$$

$$
x = 38
$$

**3. Final answer:** Standard base fee = $38.00 | Overage rate = $3.00/GB

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

2419.20 ÷ 1.08 = 2240.00 exactly, matching the pre-tax figure used to build the model.

Related equation(s) from the model:

$$
\\begin{cases}
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\\\
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
      `**B) A Suite costs $200 more per night than a Standard room.** — **FALSE**

The actual gap is 210 - 140 = $70, not $200. Forgetting to strip out the tax before comparing rates tends to inflate this estimate.

Related equation(s) from the model:

$$
\\begin{cases}
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\\\
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)**.`,
      `**C) Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.** — **FALSE**

6 Standard rooms cost 6(140) = $840 and 4 Suites cost 4(210) = $840 — exactly equal, not one less than the other.

Related equation(s) from the model:

$$
\\begin{cases}
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\\\
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)**.`,
      `**D) Including the 8% tax, a single Suite night costs $226.80.** — **TRUE**

210 \\times 1.08 = $226.80, applying the same tax used to convert the confirmations.

Related equation(s) from the model:

$$
\\begin{cases}
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\\\
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)**.`,
      `**E) Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by $210.** — **TRUE**

One additional Suite adds exactly $210 in pre-tax revenue, since the Standard-room count is unchanged.

Related equation(s) from the model:

$$
\\begin{cases}
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\\\
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 14,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
10x + 4y = 2419.20 ÷ 1.08 = 2240.00 \\\\
7x + 9y = 3099.60 ÷ 1.08 = 2870.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** From the first equation, $5x + 2y = 1120$, so y = (1120 - 5x)/2.

$$
5x + 2y = 1120
$$

**Step 2.** Substituting into the second: 14x + 9(1120 - 5x) = 5740 \\to  $-31x = -4340$
\\to  $x = 140$.

$$
o  -31x = -4340
$$

$$
-31x = -4340
$$

$$
x = 140
$$

**Step 3.** Then $y = 210$.

$$
y = 210
$$

**3. Final answer:** Standard = $140.00/night (pre-tax) | Suite = $210.00/night (pre-tax)

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

Verify by substituting the final values back into both original equations before judging the statements.`,
  },
  {
    id: "math-5-15",
    case_id: "MATH 5.15",
    title: `Crestwood Distribution Centre, Inventory Valuation`,
    context: `$4,700 (projected) Warehouse floor space: 12,000 sq ft. On-site staff: 9. (Not needed below.)`,
    tables_markdown: `| Period | Type | Comp. A (units) | Comp. B (units) | Total Value |
| --- | --- | --- | --- | --- |
| January | Actual | 150 | 90 | $3,150 |
| February | Actual | 130 | 140 | $3,660 |
| March | Forecast | 200 | 100 $4,700 | (projected) |
| Warehouse floor space: | 12,000 sq ft. On-site staff: 9. (Not | needed below.) |  |  |`,
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

The elimination confirms x = $12.00 exactly, reconciling with both actual monthly rows.

Related equation(s) from the model:

$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Component A = $12.00/unit | Component B = $15.00/unit**.

**Distractor:** Only the January and February rows report actual recorded values; March is explicitly labelled a forecast and cannot be used to solve for today's unit costs.

**Source check:** Projected rows, ads, and verbal claims are for judging statements — only measured invoices/logs go into the solving system.`,
      `**B) Component B's unit cost is $18.** — **FALSE**

Component B actually costs $15.00, not $18.00. Reading the forecast row's higher implied prices back into the actual data is a natural but incorrect shortcut.

Related equation(s) from the model:

$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Component A = $12.00/unit | Component B = $15.00/unit**.`,
      `**C) The March forecast assumes higher unit prices than what actually applied in January and February.** — **TRUE**

At actual costs, 200(12) + 100(15) = $3,900, well below the $4,700 forecast — the forecast does build in a price increase.

Related equation(s) from the model:

$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Component A = $12.00/unit | Component B = $15.00/unit**.`,
      `**D) If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be $4,700.** — **FALSE**

Valuing March's quantities at actual costs gives $3,900, not $4,700 — the $4,700 figure only appears because the forecast bakes in an assumed price rise.

Related equation(s) from the model:

$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Component A = $12.00/unit | Component B = $15.00/unit**.`,
      `**E) The combined actual inventory value recorded for January and February is $6,810.** — **TRUE**

Simply adding the two actual monthly totals, 3,150 + 3,660 = $6,810, without needing the unit costs at all.

Related equation(s) from the model:

$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Component A = $12.00/unit | Component B = $15.00/unit**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 15,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
150x + 90y = 3150 \\\\
130x + 140y = 3660
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide by 30 and 10 respectively: $5x + 3y = 105$; $13x + 14y = 366$.

$$
5x + 3y = 105
$$

$$
13x + 14y = 366
$$

**Step 2.** Multiply by 14 and 3: $70x + 42y = 1470$; $39x + 42y = 1098$.

$$
70x + 42y = 1470
$$

$$
39x + 42y = 1098
$$

**Step 3.** Subtracting: $31x = 372$, so $x = 12$.

$$
31x = 372
$$

$$
x = 12
$$

**Step 4.** Then $3y = 45$, $y = 15$.

$$
3y = 45
$$

$$
y = 15
$$

**3. Final answer:** Component A = $12.00/unit | Component B = $15.00/unit

**Distractor:** Only the January and February rows report actual recorded values; March is explicitly labelled a forecast and cannot be used to solve for today's unit costs.

**Source check:** Projected rows, ads, and verbal claims are for judging statements — only measured invoices/logs go into the solving system.

Verify by substituting the final values back into both original equations before judging the statements.`,
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
      `**A) The overtime rate actually paid matches the contractual 1.5\\times regular-rate rule.** — **FALSE**

1.5 \\times $14.00 = $21.00, but the payroll data shows $24.00 was actually paid — the contract's rule was not followed.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 6y = 704 \\\\
40x + 2y = 608
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)**.`,
      `**B) The regular hourly wage is $14.** — **TRUE**

The elimination step isolates x = $14.00 directly, and it checks out against both workers' totals.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 6y = 704 \\\\
40x + 2y = 608
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)**.`,
      `**C) Relative to the 1.5\\times contract rule, Worker 2 was overpaid by exactly $6.00 on their overtime hours.** — **TRUE**

Under contract, 2 overtime hours should cost 2(21) = $42; the worker was actually paid 2(24) = $48, an overpayment of $6.00.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 6y = 704 \\\\
40x + 2y = 608
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)**.`,
      `**D) A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn $656.** — **TRUE**

Using rates actually paid: 40(14) + 4(24) = $656.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 6y = 704 \\\\
40x + 2y = 608
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)**.`,
      `**E) That same third worker, paid strictly under the 1.5\\times contract rule instead, would earn $644.** — **TRUE**

Using the contractual rate: 40(14) + 4(21) = $644, $12 less than the company's actual practice.

Related equation(s) from the model:

$$
\\begin{cases}
40x + 6y = 704 \\\\
40x + 2y = 608
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 16,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
40x + 6y = 704 \\\\
40x + 2y = 608
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtracting cancels the 40x term: $4y = 96$, so $y = 24$.

$$
4y = 96
$$

$$
y = 24
$$

**Step 2.** Substituting back: $40x + 48 = 608$, so $x = 14$.

$$
40x + 48 = 608
$$

$$
x = 14
$$

**3. Final answer:** Regular wage = $14.00/hr | Overtime actually paid = $24.00/hr (contract requires $21.00/hr)

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The bills actually support a fixed charge of $15.00, not the claimed $18.00 — the billing office's own figure is wrong.

Related equation(s) from the model:

$$
\\begin{cases}
x + 18y = 56.10 ÷ 1.10 = 51.00 \\\\
x + 25y = 65.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
      `**B) The rate charged is $2.00 per cubic metre.** — **TRUE**

The elimination step gives y = $2.00 per m³ exactly, contradicting the claimed $1.85.

Related equation(s) from the model:

$$
\\begin{cases}
x + 18y = 56.10 ÷ 1.10 = 51.00 \\\\
x + 25y = 65.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)**.`,
      `**C) After removing the late penalty, May's actual water charge was $51.00.** — **TRUE**

56.10 ÷ 1.10 = $51.00, undoing the 10% penalty rather than simply subtracting a flat amount.

Related equation(s) from the model:

$$
\\begin{cases}
x + 18y = 56.10 ÷ 1.10 = 51.00 \\\\
x + 25y = 65.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)**.`,
      `**D) A customer using 40 m³ in a month would be billed $85.00.** — **FALSE**

40 m³ actually costs 15 + 80 = $95.00, not $85.00.

Related equation(s) from the model:

$$
\\begin{cases}
x + 18y = 56.10 ÷ 1.10 = 51.00 \\\\
x + 25y = 65.00
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)**.`,
      `**E) Had the same 10% late penalty been applied to June's $65.00 bill, the total would have been $71.50.** — **TRUE**

65.00 \\times 1.10 = $71.50, applying the same 10% multiplier used to recover May's genuine charge.

Related equation(s) from the model:

$$
\\begin{cases}
x + 18y = 56.10 ÷ 1.10 = 51.00 \\\\
x + 25y = 65.00
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 17,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 18y = 56.10 ÷ 1.10 = 51.00 \\\\
x + 25y = 65.00
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtracting cancels x: $7y = 14.00$, so $y = 2.00$.

$$
7y = 14.00
$$

$$
y = 2.00
$$

**Step 2.** Substituting back: $x + 36 = 51$, so $x = 15.00$.

$$
x + 36 = 51
$$

$$
x = 15.00
$$

**3. Final answer:** Fixed charge = $15.00 | Rate = $2.00/m³ (billing office's claim does not match)

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

At 10 km, CityCab charges $16.00 while MetroX charges $21.00, so CityCab is cheaper.

Related equation(s) from the model:

$$
\\begin{cases}
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\\\
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km**.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.`,
      `**B) Both companies charge the same base fare of $6.00.** — **TRUE**

Both systems independently solve to a $6.00 base fare, a coincidence worth double-checking rather than assuming.

Related equation(s) from the model:

$$
\\begin{cases}
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\\\
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km**.`,
      `**C) For distances under 4 km, MetroX would be cheaper than CityCab.** — **FALSE**

Since both share the same base fare and MetroX's rate is higher, MetroX is never actually cheaper for any positive distance — they only tie at 0 km.

Related equation(s) from the model:

$$
\\begin{cases}
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\\\
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km**.`,
      `**D) A 30 km CityCab ride costs $36.00.** — **TRUE**

6 + 30(1) = $36.00 exactly.

Related equation(s) from the model:

$$
\\begin{cases}
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\\\
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km**.`,
      `**E) There is a distance of 5 km at which both companies charge exactly the same fare.** — **FALSE**

Setting the two fare formulas equal gives $d = 0$, not 5 km — the companies only match at zero distance.

Related equation(s) from the model:

$$
\\begin{cases}
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\\\
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 18,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
CityCab: x1 + 8y1 = 14.00, x1 + 20y1 = 26.00 \\\\
MetroX: x2 + 5y2 = 13.50, x2 + 15y2 = 28.50
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** For CityCab, subtracting cancels x1: 12y1 = 12, so y1 = 1, x1 = 6.

**Step 2.** For MetroX: 10y2 = 15, so y2 = 1.5, x2 = 6.

**3. Final answer:** CityCab — base $6.00, rate $1.00/km | MetroX — base $6.00, rate $1.50/km

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Vendor A's $9 for Product X undercuts Vendor B's $11.

Related equation(s) from the model:

$$
\\begin{cases}
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\\\
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16**.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.`,
      `**B) Vendor B charges less than Vendor A for Product Y.** — **TRUE**

Vendor B's $16 for Product Y is cheaper than Vendor A's $18, the reverse pattern from Product X.

Related equation(s) from the model:

$$
\\begin{cases}
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\\\
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16**.`,
      `**C) For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.** — **TRUE**

For 40 X + 30 Y, Vendor A totals $900, while Vendor B totals $920 — Vendor A is $20 cheaper overall despite losing on Product Y alone.

Related equation(s) from the model:

$$
\\begin{cases}
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\\\
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16**.`,
      `**D) Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by $20.** — **FALSE**

Switching to Vendor B would actually raise costs from $900 to $920, an increase of $20, not a reduction.

Related equation(s) from the model:

$$
\\begin{cases}
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\\\
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16**.`,
      `**E) If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.** — **TRUE**

For 60 units of Y alone, Vendor A costs $1,080 while Vendor B costs $960 — here Vendor B's advantage on Y is the only thing that matters.

Related equation(s) from the model:

$$
\\begin{cases}
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\\\
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 19,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
Vendor A: 20xA + 15yA = 450, 25xA + 12yA = 441 \\\\
Vendor B: 20xB + 15yB = 460, 25xB + 12yB = 467
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Vendor A: dividing the first by 5 gives 4xA + 3yA = 90; solving with the second gives xA = 9, yA = 18.

$$
A = 90
$$

**Step 2.** Vendor B: the same approach gives
xB = 11, yB = 16.

$$
B = 11
$$

**3. Final answer:** Vendor A — X = $9, Y = $18 | Vendor B — X = $11, Y = $16

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The elimination confirms x = $50 and y = $70, holding for both companies' revenue rows simultaneously.

Related equation(s) from the model:

$$
\\begin{cases}
Stage 1: A + B = 27200, B - A = 1000 \\\\
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product P = $50.00 | Service Q = $70.00**.

**Source check:** Projected rows, ads, and verbal claims are for judging statements — only measured invoices/logs go into the solving system.`,
      `**B) Beta generated more Q1 revenue than Alpha.** — **TRUE**

Beta's $14,100 exceeds Alpha's $13,100 by $1,000, straight out of the Stage 1 sum-and-difference step.

Related equation(s) from the model:

$$
\\begin{cases}
Stage 1: A + B = 27200, B - A = 1000 \\\\
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product P = $50.00 | Service Q = $70.00**.`,
      `**C) If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.** — **FALSE**

A 10% rise on Product P alone raises Alpha's revenue from $13,100 to $13,850, an increase of only about 5.7%, not 10% — because Product P is only part of Alpha's total revenue.

Related equation(s) from the model:

$$
\\begin{cases}
Stage 1: A + B = 27200, B - A = 1000 \\\\
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Product P = $50.00 | Service Q = $70.00**.`,
      `**D) Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.** — **FALSE**

Alpha's projected revenue of $13,850 still falls short of Beta's current $14,100.

Related equation(s) from the model:

$$
\\begin{cases}
Stage 1: A + B = 27200, B - A = 1000 \\\\
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Product P = $50.00 | Service Q = $70.00**.`,
      `**E) Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.** — **TRUE**

Beta's Service Q revenue is $9,100, while Alpha's entire Product P revenue is $7,500 — Beta's single revenue line from Q alone beats Alpha's whole P line.

Related equation(s) from the model:

$$
\\begin{cases}
Stage 1: A + B = 27200, B - A = 1000 \\\\
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product P = $50.00 | Service Q = $70.00**.`,
    ],
    difficulty_level: "2/5",
    sort_order: 20,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
Stage 1: A + B = 27200, B - A = 1000 \\\\
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Adding the Stage 1 equations: $2B = 28200$, so $B = 14100$, $A = 13100$.

$$
2B = 28200
$$

$$
B = 14100
$$

$$
A = 13100
$$

**Step 2.** For Stage 2, dividing by 10 and eliminating gives $x = 50$, $y = 70$.

$$
x = 50
$$

$$
y = 70
$$

**3. Final answer:** Product P = $50.00 | Service Q = $70.00

**Source check:** Projected rows, ads, and verbal claims are for judging statements — only measured invoices/logs go into the solving system.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The real signup fee is $38, not the advertised $30 — the flyer understates what members are actually charged up front.

Related equation(s) from the model:

$$
\\begin{cases}
x + 6y = 284 \\\\
x + 10y = 448
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)**.

**Distractor:** The flyer's advertised figures ($30 and $45) are a claim to be checked, not values to plug directly into the model.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
      `**B) The monthly rate members are actually paying is lower than the advertised $45/month.** — **TRUE**

The real monthly rate is $41, indeed lower than the advertised $45 — the flyer overstates the ongoing cost while understating the signup fee.

Related equation(s) from the model:

$$
\\begin{cases}
x + 6y = 284 \\\\
x + 10y = 448
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)**.`,
      `**C) Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.** — **FALSE**

The flyer's own rates over 6 months would total 30 + 6(45) = $300; Maria's real total of $284 is actually less than that, not more.

Related equation(s) from the model:

$$
\\begin{cases}
x + 6y = 284 \\\\
x + 10y = 448
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)**.`,
      `**D) Jason paid more than $400 in total by his 10th payment.** — **TRUE**

Jason's real total is $448, indeed more than $400.

Related equation(s) from the model:

$$
\\begin{cases}
x + 6y = 284 \\\\
x + 10y = 448
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)**.`,
      `**E) A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay $492.** — **TRUE**

12 \\times $41 = $492 exactly, a direct scaling of the confirmed real monthly rate with no signup fee included.

Related equation(s) from the model:

$$
\\begin{cases}
x + 6y = 284 \\\\
x + 10y = 448
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 21,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 6y = 284 \\\\
x + 10y = 448
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtracting directly: $4y = 164$, so $y = 41$.

$$
4y = 164
$$

$$
y = 41
$$

**Step 2.** Substituting back: $x + 246 = 284$, so $x = 38$.

$$
x + 246 = 284
$$

$$
x = 38
$$

**3. Final answer:** Signup fee = $38.00 | Monthly rate = $41.00/month (flyer's figures do not match)

**Distractor:** The flyer's advertised figures ($30 and $45) are a claim to be checked, not values to plug directly into the model.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Solving the system gives x = $19 exactly, consistent with both households' combined bills.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 169 \\\\
2x + 7y = 255
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Basic = $19.00/month | Premium = $31.00/month**.`,
      `**B) The Premium plan costs $35 per month.** — **FALSE**

Premium actually costs $31/month, not $35; substituting an assumed 'round' value instead of finishing the elimination is a common shortcut.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 169 \\\\
2x + 7y = 255
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Basic = $19.00/month | Premium = $31.00/month**.`,
      `**C) Household 2's combined total is more than double Household 1's combined total.** — **FALSE**

Household 2's total is $255, while double Household 1's total is $338; $255 falls short, so it is not more than double.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 169 \\\\
2x + 7y = 255
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Basic = $19.00/month | Premium = $31.00/month**.`,
      `**D) There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.** — **FALSE**

Since neither plan carries a fixed fee, an n-month Basic bill costs 19n and Premium costs 31n. These are equal only when $n = 0$ — there is no positive month count at which they ever match.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 169 \\\\
2x + 7y = 255
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Basic = $19.00/month | Premium = $31.00/month**.`,
      `**E) A household billed for 5 months of Basic and 5 months of Premium would owe a combined $250.** — **TRUE**

5(19) + 5(31) = $250 exactly, a direct application of both confirmed monthly rates.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 3y = 169 \\\\
2x + 7y = 255
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Basic = $19.00/month | Premium = $31.00/month**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 22,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
4x + 3y = 169 \\\\
2x + 7y = 255
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply the first by 7 and the second by 3: $28x + 21y = 1183$; $6x + 21y = 765$.

$$
28x + 21y = 1183
$$

$$
6x + 21y = 765
$$

**Step 2.** Subtracting: $22x = 418$, so $x = 19$.

$$
22x = 418
$$

$$
x = 19
$$

**Step 3.** Substituting back: 76 +
$3y = 169$, so $y = 31$.

$$
3y = 169
$$

$$
y = 31
$$

**3. Final answer:** Basic = $19.00/month | Premium = $31.00/month

Verify by substituting the final values back into both original equations before judging the statements.`,
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

After removing the known bread and egg prices, solving the resulting system gives exactly $4.80/lb.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 3y = 50.00 - 3.60 - 4.40 = 42.00 \\\\
2x + 5y = 43.20 - 3.60 = 39.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Organic apples = $4.80/lb | Almond milk = $6.00/carton**.

**Distractor:** Bread and egg prices are already known, and the loyalty-discount note is a distractor that does not apply here.

**Receipt:** Knock off every known-priced line first; only the leftover money feeds the system for the mystery items.`,
      `**B) Almond milk costs less than organic apples, per unit.** — **FALSE**

Almond milk is actually the more expensive item, $6.00/carton versus apples' $4.80/lb — the reverse of the claim.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 3y = 50.00 - 3.60 - 4.40 = 42.00 \\\\
2x + 5y = 43.20 - 3.60 = 39.60
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Organic apples = $4.80/lb | Almond milk = $6.00/carton**.`,
      `**C) Five pounds of apples costs exactly the same as four cartons of almond milk.** — **TRUE**

5(4.80) = $24.00 and 4(6.00) = $24.00 — exactly equal, not just close.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 3y = 50.00 - 3.60 - 4.40 = 42.00 \\\\
2x + 5y = 43.20 - 3.60 = 39.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Organic apples = $4.80/lb | Almond milk = $6.00/carton**.`,
      `**D) If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than $47.00.** — **FALSE**

5% of $50.00 is $2.50, leaving $47.50 — not less than $47.00, only barely above it.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 3y = 50.00 - 3.60 - 4.40 = 42.00 \\\\
2x + 5y = 43.20 - 3.60 = 39.60
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Organic apples = $4.80/lb | Almond milk = $6.00/carton**.`,
      `**E) Buying 10 lb of apples and 2 cartons of milk together costs more than $60.** — **FALSE**

10(4.80) + 2(6.00) = $60.00 exactly — not more than $60, but equal to it.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 3y = 50.00 - 3.60 - 4.40 = 42.00 \\\\
2x + 5y = 43.20 - 3.60 = 39.60
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Organic apples = $4.80/lb | Almond milk = $6.00/carton**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 23,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
5x + 3y = 50.00 - 3.60 - 4.40 = 42.00 \\\\
2x + 5y = 43.20 - 3.60 = 39.60
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply the first by 5 and the second by 3: $25x + 15y = 210$; $6x + 15y = 118.80$.

$$
25x + 15y = 210
$$

$$
6x + 15y = 118.80
$$

**Step 2.** Subtracting: $19x = 91.20$, so $x = 4.80$.

$$
19x = 91.20
$$

$$
x = 4.80
$$

**Step 3.** Substituting back:
24.00 + $3y = 42.00$, so $y = 6.00$.

$$
3y = 42.00
$$

$$
y = 6.00
$$

**3. Final answer:** Organic apples = $4.80/lb | Almond milk = $6.00/carton

**Distractor:** Bread and egg prices are already known, and the loyalty-discount note is a distractor that does not apply here.

**Receipt:** Knock off every known-priced line first; only the leftover money feeds the system for the mystery items.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Subtracting the two bills isolates y first, and back-substitution confirms a $33.00 fixed fee exactly.

Related equation(s) from the model:

$$
\\begin{cases}
x + 240y = 83.40 \\\\
x + 380y = 112.80
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
      `**B) Customer service's claimed rate of $0.24 per unit is correct.** — **FALSE**

The actual rate is $0.21/unit, not the claimed $0.24 — the phone figure was never checked against real bills until now.

Related equation(s) from the model:

$$
\\begin{cases}
x + 240y = 83.40 \\\\
x + 380y = 112.80
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)**.`,
      `**C) At 280 units of usage, the standard plan costs less than $95.** — **TRUE**

33 + 280(0.21) = $91.80, indeed less than $95.

Related equation(s) from the model:

$$
\\begin{cases}
x + 240y = 83.40 \\\\
x + 380y = 112.80
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)**.`,
      `**D) The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.** — **FALSE**

The two plans cross at 412.5 units: below that, Solar is cheaper, but above it the standard plan's lower rate wins out.

Related equation(s) from the model:

$$
\\begin{cases}
x + 240y = 83.40 \\\\
x + 380y = 112.80
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)**.`,
      `**E) At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.** — **FALSE**

At 500 units (above the 412.5-unit crossover), the standard plan costs $138.00 while Solar costs $145.00 — the standard plan is actually cheaper here.

Related equation(s) from the model:

$$
\\begin{cases}
x + 240y = 83.40 \\\\
x + 380y = 112.80
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 24,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 240y = 83.40 \\\\
x + 380y = 112.80
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtracting directly: $140y = 29.40$, so $y = 0.21$.

$$
140y = 29.40
$$

$$
y = 0.21
$$

**Step 2.** Substituting back: $x + 50.40 = 83.40$, so $x = 33.00$.

$$
x + 50.40 = 83.40
$$

$$
x = 33.00
$$

**Step 3.** To find the crossover with Solar: 33 +
$0.21u = 0$.29u \\to  $u = 412.5$ units.

$$
0.21u = 0.29
$$

$$
0.21u = 0
$$

$$
u = 412.5
$$

**3. Final answer:** Fixed fee = $33.00 | Rate = $0.21/unit (customer service's figure does not match)

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Once Table 8's total is reconstructed and the fee removed, elimination gives x = $19.00 exactly, confirmed by both tables.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 174.00 \\\\
5x + 7y =
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Pasta dish = $19.00 | Appetizer = $15.00**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.`,
      `**B) An appetizer costs more than a pasta dish.** — **FALSE**

The appetizer is actually cheaper, at $15.00, versus the pasta dish's $19.00 — the reverse of the claim.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 174.00 \\\\
5x + 7y =
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Pasta dish = $19.00 | Appetizer = $15.00**.`,
      `**C) Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly $26.00.** — **TRUE**

The pre-tax subtotal is $200.00 against Table 5's $174.00 — a gap of exactly $26.00, different from the printed $46.00 gap, which was measured after Table 8's service charge was added.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 174.00 \\\\
5x + 7y =
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Pasta dish = $19.00 | Appetizer = $15.00**.`,
      `**D) If Table 5 had also been charged the 10% peak-hour service fee, its total would have been $191.40.** — **TRUE**

174.00 \\times 1.10 = $191.40, applying the same 10% multiplier used to strip the charge from Table 8.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 174.00 \\\\
5x + 7y =
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Pasta dish = $19.00 | Appetizer = $15.00**.`,
      `**E) Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than $150.** — **TRUE**

Subtotal = 4(19) + 4(15) = $136.00; with the 10% charge, 136 \\times 1.10 = $149.60, just under $150 — a close call rewarding exact decimals over early rounding.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 174.00 \\\\
5x + 7y =
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Pasta dish = $19.00 | Appetizer = $15.00**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 25,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
6x + 4y = 174.00 \\\\
5x + 7y =
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide Table 5's equation by 2: $3x + 2y = 87$.

$$
3x + 2y = 87
$$

**Step 2.** Multiply by 7: $21x + 14y = 609$.

$$
21x + 14y = 609
$$

**Step 3.** Multiply Table 8's equation by 2: $10x + 14y = 400$.

$$
10x + 14y = 400
$$

**Step 4.** Subtracting: $11x = 209$, so $x = 19$.

$$
11x = 209
$$

$$
x = 19
$$

**Step 5.** Substituting back: 3(19) + $2y = 87$, so $y = 15$.

$$
2y = 87
$$

$$
y = 15
$$

**3. Final answer:** Pasta dish = $19.00 | Appetizer = $15.00

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The elimination confirms $21.00 per unit for Item M, consistent with both shipments.

Related equation(s) from the model:

$$
\\begin{cases}
110x + 80y = 4470 \\\\
70x + 150y = 5520
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Item M = $21.00/unit | Item N = $27.00/unit**.

**Distractor:** Weight and volume are logged for freight billing and play no role in the item pricing itself.`,
      `**B) Item N costs $30 per unit.** — **FALSE**

Item N actually costs $27, not $30; scanning the weight and volume columns for a price signal is a common but irrelevant distraction.

Related equation(s) from the model:

$$
\\begin{cases}
110x + 80y = 4470 \\\\
70x + 150y = 5520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Item M = $21.00/unit | Item N = $27.00/unit**.`,
      `**C) Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.** — **FALSE**

Shipment 1 averages 4470/190 ≈ $23.53/unit, while Shipment 2 averages 5520/220 ≈ $25.09/unit — close, but not equal.

Related equation(s) from the model:

$$
\\begin{cases}
110x + 80y = 4470 \\\\
70x + 150y = 5520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Item M = $21.00/unit | Item N = $27.00/unit**.`,
      `**D) 150 units of Item N alone would cost $4,050.** — **TRUE**

150(27) = $4,050 exactly, scaling the confirmed unit price for Item N.

Related equation(s) from the model:

$$
\\begin{cases}
110x + 80y = 4470 \\\\
70x + 150y = 5520
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Item M = $21.00/unit | Item N = $27.00/unit**.`,
      `**E) Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.** — **FALSE**

Shipment cost is determined entirely by item quantities and unit prices; the weight/volume figures are freight-billing data logged separately and play no causal role in the total, despite sitting right next to it.

Related equation(s) from the model:

$$
\\begin{cases}
110x + 80y = 4470 \\\\
70x + 150y = 5520
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Item M = $21.00/unit | Item N = $27.00/unit**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 26,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
110x + 80y = 4470 \\\\
70x + 150y = 5520
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide by 10: $11x + 8y = 447$; $7x + 15y = 552$.

$$
11x + 8y = 447
$$

$$
7x + 15y = 552
$$

**Step 2.** Multiply by 15 and 8: $165x + 120y = 6705$; $56x + 120y = 4416$.

$$
165x + 120y = 6705
$$

$$
56x + 120y = 4416
$$

**Step 3.** Subtracting: $109x = 2289$,
so $x = 21$.

$$
109x = 2289
$$

$$
x = 21
$$

**Step 4.** Substituting back: 231 + $8y = 447$, so $y = 27$.

$$
8y = 447
$$

$$
y = 27
$$

**3. Final answer:** Item M = $21.00/unit | Item N = $27.00/unit

**Distractor:** Weight and volume are logged for freight billing and play no role in the item pricing itself.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Elimination confirms x = $29 exactly, once Job 1's bundles are correctly expanded into individual units.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 35y = 1946 \\\\
13x + 21y = 1301
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $29.00/unit | Premium = $44.00/unit**.`,
      `**B) Premium planting costs $50 per unit.** — **FALSE**

Premium actually prices at $44, not $50; a likely slip is treating an intermediate elimination value as the finished answer.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 35y = 1946 \\\\
13x + 21y = 1301
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Standard = $29.00/unit | Premium = $44.00/unit**.`,
      `**C) Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.** — **TRUE**

7 bundles \\times 2 Standard = 14, and 7 bundles \\times 5 Premium = 35 — the conversion needed before Job 1 can enter the model at all.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 35y = 1946 \\\\
13x + 21y = 1301
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $29.00/unit | Premium = $44.00/unit**.`,
      `**D) The Premium portion alone of Job 1 cost more than the entirety of Job 2.** — **TRUE**

Job 1's Premium portion alone is 35(44) = $1,540, indeed more than Job 2's entire total of $1,301 — a single line item from one job can outweigh a whole other job.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 35y = 1946 \\\\
13x + 21y = 1301
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $29.00/unit | Premium = $44.00/unit**.`,
      `**E) The new quotation of $1,068 is mathematically consistent with the confirmed rates.** — **TRUE**

The quoted 8(29) + 19(44) = $1,068 matches the issued quotation exactly, so it is internally consistent with the confirmed rates.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 35y = 1946 \\\\
13x + 21y = 1301
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Standard = $29.00/unit | Premium = $44.00/unit**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 27,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
14x + 35y = 1946 \\\\
13x + 21y = 1301
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide Job 1's equation by 7: $2x + 5y = 278$.

$$
2x + 5y = 278
$$

**Step 2.** Multiply by 21 and Job 2's by 5: $42x + 105y = 5838$; $65x + 105y = 6505$.

$$
42x + 105y = 5838
$$

$$
65x + 105y = 6505
$$

**Step 3.** Subtracting: $23x =
667$, so $x = 29$.

$$
23x =
667
$$

$$
x = 29
$$

**Step 4.** Substituting back: 58 + $5y = 278$, so $y = 44$.

$$
5y = 278
$$

$$
y = 44
$$

**Step 5.** Check the new quotation: 8(29) + 19(44) = $1,068, matching exactly.

**3. Final answer:** Standard = $29.00/unit | Premium = $44.00/unit

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Using Reports 1 and 2 (Report 3 set aside as impossible), elimination gives a per diem of exactly $55.00.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 150y = 323 \\\\
3x + 250y = 245
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)**.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
      `**B) Finance's belief that the mileage rate is $0.40/mile is correct.** — **FALSE**

The mileage rate is actually $0.32/mile, not the claimed $0.40 — the belief was never checked against the underlying reports until now.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 150y = 323 \\\\
3x + 250y = 245
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)**.`,
      `**C) Report 3 is impossible, since 7 meal days alone would require at least $385 at the confirmed per-diem rate — far more than its reported $120 total.** — **TRUE**

At $55/day, 7 meal days alone would need $385, already far above Report 3's $120 total before a single mile is counted — confirming it as the report that had to be excluded.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 150y = 323 \\\\
3x + 250y = 245
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)**.`,
      `**D) Report 1's total exceeds Report 2's total by more than $80.** — **FALSE**

Report 1's total is $323 and Report 2's is $245, a gap of exactly $78 — not more than $80, only just short of it.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 150y = 323 \\\\
3x + 250y = 245
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)**.`,
      `**E) Reports 1 and 2 combined reimbursed at least $550.** — **TRUE**

323 + 245 = $568, which does satisfy 'at least $550,' unlike statement D's stricter '$80' gap, which narrowly fails.

Related equation(s) from the model:

$$
\\begin{cases}
5x + 150y = 323 \\\\
3x + 250y = 245
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 28,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
5x + 150y = 323 \\\\
3x + 250y = 245
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Report 3 must be checked before use: 7 meal days alone at any reasonable per-diem rate close to the other two reports' implied range
already exceeds $120 — it is set aside as an entry error.

**Step 2.** Multiply the remaining two equations by 3 and 5: $15x + 450y = 969$; $15x + 1250y
= 1225$.

$$
15x + 450y = 969
$$

$$
15x + 1250y
= 1225
$$

**Step 3.** Subtracting: $800y = 256$, so $y = 0.32$.

$$
800y = 256
$$

$$
y = 0.32
$$

**Step 4.** Substituting back: $5x + 48 = 323$, so $x = 55$.

$$
5x + 48 = 323
$$

$$
x = 55
$$

**3. Final answer:** Per diem = $55.00/day | Mileage rate = $0.32/mile (Finance's belief does not match)

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Solving the recovered two-week system gives exactly 7 hours per Widget A, confirmed against both weeks' totals.

Related equation(s) from the model:

$$
\\begin{cases}
35x + 20y = 445 \\\\
25x + 33y = 505
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Widget A = 7 hrs/unit | Widget B = 10 hrs/unit**.

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.`,
      `**B) Widget B requires 12 hours of labor to assemble.** — **FALSE**

Widget B actually needs 10 hours, not 12; a common mistake is mixing up which coefficient belongs to A and which to B partway through elimination.

Related equation(s) from the model:

$$
\\begin{cases}
35x + 20y = 445 \\\\
25x + 33y = 505
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Widget A = 7 hrs/unit | Widget B = 10 hrs/unit**.`,
      `**C) Week 2 actually produced 25 Widget A units and 33 Widget B units.** — **TRUE**

From B = A + 8 and $A + B = 58$, substitution gives $2A + 8 = 58$, so $A = 25$ and $B = 33$ — the counts must be recovered this way before Week 2 can be used at all.

Related equation(s) from the model:

$$
\\begin{cases}
35x + 20y = 445 \\\\
25x + 33y = 505
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Widget A = 7 hrs/unit | Widget B = 10 hrs/unit**.`,
      `**D) If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.** — **FALSE**

A 20% rise in Widget A's hours (7 \\to 8.4) raises Week 1's total from 445 to 494, an increase of only about 11%, not 20% — because Widget A's hours are only part of the week's total time.

Related equation(s) from the model:

$$
\\begin{cases}
35x + 20y = 445 \\\\
25x + 33y = 505
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Widget A = 7 hrs/unit | Widget B = 10 hrs/unit**.`,
      `**E) The illegible Week 3 entry can be reconstructed as 20 Widget A units.** — **TRUE**

Substituting the surviving Widget B count and total hours into the confirmed model, 7A + 10(15) = 290, gives $A = 20$ — a legitimate reconstruction, not a guess.

Related equation(s) from the model:

$$
\\begin{cases}
35x + 20y = 445 \\\\
25x + 33y = 505
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Widget A = 7 hrs/unit | Widget B = 10 hrs/unit**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 29,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
35x + 20y = 445 \\\\
25x + 33y = 505
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Recover Week 2 first: B = A + 8, $A + B = 58$, so $2A + 8 = 58$, $A = 25$, $B = 33$.

$$
B = A + 8
$$

$$
A + B = 58
$$

$$
2A + 8 = 58
$$

$$
A = 25
$$

$$
B = 33
$$

**Step 2.** Multiply Week 1 by 33 and Week 2 by 20: $1155x + 660y =
14685$; $500x + 660y = 10100$.

$$
1155x + 660y =
14685
$$

$$
500x + 660y = 10100
$$

**Step 3.** Subtracting: $655x = 4585$, so $x = 7$.

$$
655x = 4585
$$

$$
x = 7
$$

**Step 4.** Substituting back: 245 + $20y = 445$, so $y = 10$.

$$
20y = 445
$$

$$
y = 10
$$

**Step 5.** Reconstruct Week 3: 7A
+ 10(15) = 290, so $A = 20$.

$$
A = 20
$$

**3. Final answer:** Widget A = 7 hrs/unit | Widget B = 10 hrs/unit

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Solving the North and South reports together gives x = $29 exactly, and this pair is internally consistent with each other.

Related equation(s) from the model:

$$
\\begin{cases}
85x + 70y = 4145 \\\\
55x + 95y = 3875
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product X = $29.00/unit | Product Y = $24.00/unit**.`,
      `**B) Product Y is priced at $28.** — **FALSE**

Product Y prices out at $24, not $28; stopping partway through elimination and reading off an intermediate value is the likely source of this error.

Related equation(s) from the model:

$$
\\begin{cases}
85x + 70y = 4145 \\\\
55x + 95y = 3875
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Product X = $29.00/unit | Product Y = $24.00/unit**.`,
      `**C) The East branch's reported revenue is fully consistent with the derived prices.** — **FALSE**

65(29) + 50(24) = $3,085, not the reported $3,200; that $115 gap is exactly the data-entry error the dashboard warns about, and East is the branch responsible.

Related equation(s) from the model:

$$
\\begin{cases}
85x + 70y = 4145 \\\\
55x + 95y = 3875
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Product X = $29.00/unit | Product Y = $24.00/unit**.`,
      `**D) If the East branch's reported revenue were corrected to reflect the derived prices, it should read $3,085.** — **TRUE**

The corrected East figure, using the derived prices, is $3,085, matching the calculation above.

Related equation(s) from the model:

$$
\\begin{cases}
85x + 70y = 4145 \\\\
55x + 95y = 3875
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product X = $29.00/unit | Product Y = $24.00/unit**.`,
      `**E) North's reported revenue exceeds South's and East's reported revenues combined.** — **FALSE**

North's reported revenue is $4,145, while South and East together report $7,075 — North falls well short of that combined figure, despite being the single largest branch on its own.

Related equation(s) from the model:

$$
\\begin{cases}
85x + 70y = 4145 \\\\
55x + 95y = 3875
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Product X = $29.00/unit | Product Y = $24.00/unit**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 30,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
85x + 70y = 4145 \\\\
55x + 95y = 3875
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** North and South are used to derive the prices, since they reconcile with each other.

**Step 2.** Divide by 5: $17x + 14y = 829$; $11x + 19y = 775$.

$$
17x + 14y = 829
$$

$$
11x + 19y = 775
$$

**Step 3.** Multiply by 19 and 14: $323x + 266y = 15751$; $154x + 266y = 10850$.

$$
323x + 266y = 15751
$$

$$
154x + 266y = 10850
$$

**Step 4.** Subtracting: $169x = 4901$, so $x = 29$.

$$
169x = 4901
$$

$$
x = 29
$$

**Step 5.** Substituting back: 493 + $14y =
829$, so $y = 24$.

$$
14y =
829
$$

$$
y = 24
$$

**Step 6.** Testing East: 65(29) + 50(24) = $3,085, which does not match East's reported $3,200 — a $115 discrepancy, revealing
East as the erroneous branch.

**3. Final answer:** Product X = $29.00/unit | Product Y = $24.00/unit

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Type A solves to $18.45; rounding up (ceiling) to the next whole dollar gives $19.00 exactly.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Type A = $18.45/case | Type B = $27.80/case**.`,
      `**B) A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.** — **TRUE**

The actual gap is 27.80 - 18.45 = $9.35 — more than $9.00 and less than $10.00.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Type A = $18.45/case | Type B = $27.80/case**.`,
      `**C) If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the $24 mark.** — **TRUE**

$657.35 ÷ 26 cases ≈ $25.28, which clears $24.00.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Type A = $18.45/case | Type B = $27.80/case**.`,
      `**D) Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.** — **FALSE**

The prices are not close ($18.45 vs $27.80, a $9.35 gap), and the swapped order actually totals 13(18.45) + 9(27.80) = $490.05 — not $527.45.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Type A = $18.45/case | Type B = $27.80/case**.`,
      `**E) Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.** — **FALSE**

There is no bulk premium in a fixed-unit-price model: 16 Type A + 32 Type B is exactly the sum of both invoices' quantities, so its cost is necessarily exactly $527.45 + $657.35 = $1,184.80 — not more.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Type A = $18.45/case | Type B = $27.80/case**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 31,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
9x + 13y = 527.45 \\\\
7x + 19y = 657.35
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 19 and 13: $171x + 247y = 10021.55$; $91x + 247y = 8545.55$.

$$
171x + 247y = 10021.55
$$

$$
91x + 247y = 8545.55
$$

**Step 2.** Subtracting: $80x = 1476.00$, so $x = 18.45$.

$$
80x = 1476.00
$$

$$
x = 18.45
$$

**Step 3.** Substituting back:
166.05 + $13y = 527.45$, so $y = 27.80$.

$$
13y = 527.45
$$

$$
y = 27.80
$$

**3. Final answer:** Type A = $18.45/case | Type B = $27.80/case

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The fee solves to $145.50, precisely the midpoint of $145.00 and $146.00.

Related equation(s) from the model:

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Dispatch fee = $145.50 | Rate = $1.85/mile**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.`,
      `**B) Per mile, Swift Cargo's rate is closer to $1.50 than to $2.00.** — **FALSE**

The rate is $1.85 — $0.35 from $1.50 but only $0.15 from $2.00 — closer to $2.00, not $1.50.

Related equation(s) from the model:

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Dispatch fee = $145.50 | Rate = $1.85/mile**.`,
      `**C) A 250-mile haul comes in five cents under six hundred and eight dollars.** — **FALSE**

145.50 + 250(1.85) = $608.00 exactly — not five cents under it.

Related equation(s) from the model:

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Dispatch fee = $145.50 | Rate = $1.85/mile**.`,
      `**D) At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of $270.** — **TRUE**

$608.00 (Swift Cargo) - $337.50 (250 \\times 1.35, competitor) = $270.50 — just north of $270.

Related equation(s) from the model:

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Dispatch fee = $145.50 | Rate = $1.85/mile**.`,
      `**E) Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line — even though that intersection falls at a negative, and therefore meaningless, mileage.** — **TRUE**

Setting 145.50 + $1.85d = 1$.35d gives $d = -291$ — an algebraic intersection does exist, just not at any real-world (positive) distance.

Related equation(s) from the model:

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Dispatch fee = $145.50 | Rate = $1.85/mile**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 32,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 170y = 460.00 \\\\
x + 305y = 709.75
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract directly: $135y = 249.75$, so $y = 1.85$.

$$
135y = 249.75
$$

$$
y = 1.85
$$

**Step 2.** Substituting back: $x + 314.50 = 460.00$, so $x = 145.50$.

$$
x + 314.50 = 460.00
$$

$$
x = 145.50
$$

**3. Final answer:** Dispatch fee = $145.50 | Rate = $1.85/mile

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Two boards:** Treat each vendor/plan as its own board: solve one price pair completely, then start the other — never pour both totals into one messy system.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

6.35 \\times 3 = $19.05, which does not clear $20.00.

Related equation(s) from the model:

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Specialty Drink = $6.35 | Pastry = $3.80**.`,
      `**B) Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined — quite a bit more, in fact.** — **TRUE**

4(3.80) = $15.20 versus 6.35 + 3.80 = $10.15 — $5.05 more.

Related equation(s) from the model:

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Specialty Drink = $6.35 | Pastry = $3.80**.`,
      `**C) Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.** — **FALSE**

The calorie figures are unrelated nutritional data; without the item quantities, no price can be derived from them no matter how they're combined with the totals.

Related equation(s) from the model:

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Specialty Drink = $6.35 | Pastry = $3.80**.`,
      `**D) Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past $4.90.** — **TRUE**

78.65/16 ≈ $4.9156, just above $4.90.

Related equation(s) from the model:

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Specialty Drink = $6.35 | Pastry = $3.80**.`,
      `**E) A week of daily 2-Drink-2-Pastry orders costs enough that, left over from $150, you'd have less than $8 in change.** — **TRUE**

Daily cost $20.30 \\times 7 = $142.10; $150.00 - $142.10 = $7.90, which is less than $8.00.

Related equation(s) from the model:

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Specialty Drink = $6.35 | Pastry = $3.80**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 33,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
7x + 9y = 78.65 \\\\
11x + 4y = 85.05
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 4 and 9: $28x + 36y = 314.60$; $99x + 36y = 765.45$.

$$
28x + 36y = 314.60
$$

$$
99x + 36y = 765.45
$$

**Step 2.** Subtracting: $71x = 450.85$, so $x = 6.35$.

$$
71x = 450.85
$$

$$
x = 6.35
$$

**Step 3.** Substituting back: 44.45 + $9y =
78.65$, so $y = 3.80$.

$$
9y =
78.65
$$

$$
y = 3.80
$$

**3. Final answer:** Specialty Drink = $6.35 | Pastry = $3.80

Verify by substituting the final values back into both original equations before judging the statements.`,
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

4(13.85) = $55.40, which clears $55.00.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Croissants = $13.85/dozen | Baguettes = $9.40/dozen**.`,
      `**B) The per-dozen gap between croissants and baguettes is closer to four dollars than to five.** — **TRUE**

13.85 - 9.40 = $4.45 — $0.45 from $4.00 but $0.55 from $5.00 — closer to $4.00.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Croissants = $13.85/dozen | Baguettes = $9.40/dozen**.`,
      `**C) Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.** — **FALSE**

10(13.85) = $138.50 out of a combined $232.50 is about 59.6% — just short of three-fifths (60%).

Related equation(s) from the model:

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Croissants = $13.85/dozen | Baguettes = $9.40/dozen**.`,
      `**D) Per dozen-item ordered, Email 1 runs pricier than Email 2 — and the gap clears two dollars.** — **FALSE**

Email 1 averages $297.30/25 ≈ $11.89 per item, Email 2 averages $299.30/29 ≈ $10.32 — a gap of about $1.57, which does not clear $2.00.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Croissants = $13.85/dozen | Baguettes = $9.40/dozen**.`,
      `**E) Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.** — **TRUE**

New baguette price $12.40: 6(13.85) + 23(12.40) = $368.30 — the cents digit is indeed 30.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Croissants = $13.85/dozen | Baguettes = $9.40/dozen**.`,
    ],
    difficulty_level: "3/5",
    sort_order: 34,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
14x + 11y = 297.30 \\\\
6x + 23y = 299.30
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 23 and 11: $322x + 253y = 6837.90$; $66x + 253y = 3292.30$.

$$
322x + 253y = 6837.90
$$

$$
66x + 253y = 3292.30
$$

**Step 2.** Subtracting: $256x = 3545.60$, so $x = 13.85$.

$$
256x = 3545.60
$$

$$
x = 13.85
$$

**Step 3.** Substituting back:
193.90 + $11y = 297.30$, so $y = 9.40$.

$$
11y = 297.30
$$

$$
y = 9.40
$$

**3. Final answer:** Croissants = $13.85/dozen | Baguettes = $9.40/dozen

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The margin is $27.35 — above $27.00 but below $27.50.

Related equation(s) from the model:

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fabric Roll = $27.35/unit | Yarn Spool = $19.80/unit**.`,
      `**B) Yarn Spool's per-unit margin, doubled, would just clear forty dollars.** — **FALSE**

19.80 \\times 2 = $39.60, which does not clear $40.00.

Related equation(s) from the model:

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fabric Roll = $27.35/unit | Yarn Spool = $19.80/unit**.`,
      `**C) Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears $8,400 — but only by a slender margin.** — **TRUE**

200(27.35) + 150(19.80) = $8,440.00 — $40 above $8,400.

Related equation(s) from the model:

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fabric Roll = $27.35/unit | Yarn Spool = $19.80/unit**.`,
      `**D) The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.** — **TRUE**

The gap is $231.50; subtracting $100 leaves $131.50, still a three-digit figure before the decimal.

Related equation(s) from the model:

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fabric Roll = $27.35/unit | Yarn Spool = $19.80/unit**.`,
      `**E) Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round $13,675 — no cents required.** — **TRUE**

500 \\times 27.35 = $13,675.00 exactly.

Related equation(s) from the model:

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fabric Roll = $27.35/unit | Yarn Spool = $19.80/unit**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 35,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
240x + 175y = 10029.00 \\\\
310x + 90y = 10260.50
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 90 and 175: $21600x + 15750y = 902610$; $54250x + 15750y = 1795587.5$.

$$
21600x + 15750y = 902610
$$

$$
54250x + 15750y = 1795587.5
$$

**Step 2.** Subtracting: $32650x = 892977.5$, so $x = 27.35$.

$$
32650x = 892977.5
$$

$$
x = 27.35
$$

**Step 3.** Substituting back: 6564.00 + $175y = 10029.00$, so $y = 19.80$.

$$
175y = 10029.00
$$

$$
y = 19.80
$$

**3. Final answer:** Fabric Roll = $27.35/unit | Yarn Spool = $19.80/unit

Verify by substituting the final values back into both original equations before judging the statements.`,
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

419.40/699.00 = 0.60 exactly, and the quantities scale the same way — Invoice 2 duplicates Invoice 1's information rather than adding to it.

Related equation(s) from the model:

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Nitrogen-type = $16.40/unit | Oxygen-type = $22.65/unit**.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
      `**B) Nitrogen-type cylinders are priced closer to $17.00 than to $16.00.** — **FALSE**

Nitrogen-type is $16.40 — $0.40 from $16.00 but $0.60 from $17.00 — closer to $16.00, not $17.00.

Related equation(s) from the model:

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Nitrogen-type = $16.40/unit | Oxygen-type = $22.65/unit**.`,
      `**C) Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.** — **TRUE**

4(22.65) = $90.60 versus 6(16.40) = $98.40 — the four Oxygen-type cylinders do cost less.

Related equation(s) from the model:

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Nitrogen-type = $16.40/unit | Oxygen-type = $22.65/unit**.`,
      `**D) Double Invoice 3's order exactly, and the resulting bill would land above $655.** — **FALSE**

Doubling Invoice 3's quantities gives 26(16.40) + 10(22.65) = $652.90 — not above $655.00.

Related equation(s) from the model:

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Nitrogen-type = $16.40/unit | Oxygen-type = $22.65/unit**.`,
      `**E) Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the $20 mark.** — **TRUE**

($699.00 + $326.45)/(15+20+13+5) = $1,025.45/53 ≈ $19.35, which does not reach $20.00.

Related equation(s) from the model:

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Nitrogen-type = $16.40/unit | Oxygen-type = $22.65/unit**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 36,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
15x + 20y = 699.00 \\\\
13x + 5y = 326.45
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Check Invoice 2 against Invoice 1 first: 419.40/699.00 = 0.60 exactly, and Invoice 2's quantities (9,12) are exactly 0.6 times Invoice 1's
(15,20) — Invoice 2 is redundant.

**Step 2.** Multiply Invoice 3 by 4: $52x + 20y = 1305.80$.

$$
52x + 20y = 1305.80
$$

**Step 3.** Subtract Invoice 1: $37x = 606.80$, so $x = 16.40$.

$$
37x = 606.80
$$

$$
x = 16.40
$$

**Step 4.** Substituting back: 246.00 + $20y = 699.00$, so $y = 22.65$.

$$
20y = 699.00
$$

$$
y = 22.65
$$

**3. Final answer:** Nitrogen-type = $16.40/unit | Oxygen-type = $22.65/unit

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

1/0.085 ≈ 11.76 hours, which rounds up to 12, not down to 11.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Alvarez = 0.085 job/hour (8.5%/hour) | Bianchi = 0.045 job/hour (4.5%/hour)**.

**Rate × time:** Each person/plant contributes (rate)×(hours). Percents finished are just the right-hand sides — convert them to decimals before eliminating.`,
      `**B) Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.** — **FALSE**

Bianchi alone needs 1/0.045 ≈ 22.22 hours for one job; Alvarez alone needs 2/0.085 ≈ 23.53 hours for two jobs — Bianchi's single-job time is actually the shorter of the two.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Alvarez = 0.085 job/hour (8.5%/hour) | Bianchi = 0.045 job/hour (4.5%/hour)**.`,
      `**C) Their combined hourly output, expressed as a fraction, reduces to exactly 13/100 — no more, no less.** — **TRUE**

$0.085 + 0.045 = 0.130$ = 13/100 exactly.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Alvarez = 0.085 job/hour (8.5%/hour) | Bianchi = 0.045 job/hour (4.5%/hour)**.`,
      `**D) Bianchi's slice of Tuesday's finished work, as a fraction, is closer to 1/7 than to 1/8.** — **TRUE**

Bianchi contributed 3(0.045) = 0.135 on Tuesday; 1/7 ≈ 0.1429 is about 0.008 away, while 1/8 = 0.125 is about 0.010 away — marginally closer to 1/7.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Alvarez = 0.085 job/hour (8.5%/hour) | Bianchi = 0.045 job/hour (4.5%/hour)**.`,
      `**E) Tally every hour either technician logged across both days — 23 in all — and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.** — **TRUE**

(0.655 + 0.900)/23 ≈ 6.76%, which stays under 7%.

Related equation(s) from the model:

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Alvarez = 0.085 job/hour (8.5%/hour) | Bianchi = 0.045 job/hour (4.5%/hour)**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 37,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
4x + 7y = 0.655 \\\\
9x + 3y = 0.900
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 9 and 4: $36x + 63y = 5.895$; $36x + 12y = 3.600$.

$$
36x + 63y = 5.895
$$

$$
36x + 12y = 3.600
$$

**Step 2.** Subtracting: $51y = 2.295$, so $y = 0.045$.

$$
51y = 2.295
$$

$$
y = 0.045
$$

**Step 3.** Substituting back: $4x + 0.315 =
0.655$, so $x = 0.085$.

$$
4x + 0.315 =
0.655
$$

$$
x = 0.085
$$

**3. Final answer:** Alvarez = 0.085 job/hour (8.5%/hour) | Bianchi = 0.045 job/hour (4.5%/hour)

**Rate × time:** Each person/plant contributes (rate)×(hours). Percents finished are just the right-hand sides — convert them to decimals before eliminating.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The margin is $11.65 — $0.65 from $11.00 but only $0.35 from $12.00 — closer to $12.00.

Related equation(s) from the model:

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **T-Shirt = $11.65/unit | Hoodie = $18.40/unit | Season 3 T-Shirts reconstructed = 245 units**.`,
      `**B) Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.** — **TRUE**

The margin is $18.40 — $0.40 from $18.00 but $0.60 from $19.00 — closer to $18.00.

Related equation(s) from the model:

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **T-Shirt = $11.65/unit | Hoodie = $18.40/unit | Season 3 T-Shirts reconstructed = 245 units**.`,
      `**C) Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.** — **FALSE**

The reconstructed count is 245 units — a multiple of five, but not of ten.

Related equation(s) from the model:

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **T-Shirt = $11.65/unit | Hoodie = $18.40/unit | Season 3 T-Shirts reconstructed = 245 units**.`,
      `**D) Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.** — **TRUE**

The gap is $954.25; 52 Hoodies at $18.40 each would cost $956.80 — the gap falls just $2.55 short of covering that.

Related equation(s) from the model:

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **T-Shirt = $11.65/unit | Hoodie = $18.40/unit | Season 3 T-Shirts reconstructed = 245 units**.`,
      `**E) Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses $8,700 — clearing it by less than $40.** — **TRUE**

11.65(260) + 18.40(310) = $8,733.00, which clears $8,700 by $33 — less than $40.

Related equation(s) from the model:

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **T-Shirt = $11.65/unit | Hoodie = $18.40/unit | Season 3 T-Shirts reconstructed = 245 units**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 38,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
430x + 260y = 9793.50 \\\\
275x + 410y = 10747.75
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 410 and 260: $176300x + 106600y = 4015335$; $71500x + 106600y = 2794415$.

$$
176300x + 106600y = 4015335
$$

$$
71500x + 106600y = 2794415
$$

**Step 2.** Subtracting: $104800x = 1220920$, so $x = 11.65$.

$$
104800x = 1220920
$$

$$
x = 11.65
$$

**Step 3.** Substituting back: 5009.50 + $260y = 9793.50$, so $y = 18.40$.

$$
260y = 9793.50
$$

$$
y = 18.40
$$

**Step 4.** Reconstruct Season 3's T-Shirt count T: 11.65T + 18.40(310) = 8558.25, so
$11.65T = 2854.25$, $T = 245$.

$$
11.65T = 2854.25
$$

$$
T = 245
$$

**3. Final answer:** T-Shirt = $11.65/unit | Hoodie = $18.40/unit | Season 3 T-Shirts reconstructed = 245 units

Verify by substituting the final values back into both original equations before judging the statements.`,
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

$94.60 - $5.40 = $89.20; relative to $89.00, the real fee overshoots by (94.60-89)/89 ≈ 6.3%, roughly six percent.

Related equation(s) from the model:

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Handling fee = $94.60 | Rate = $3.15/kg | Shipment 3 predicted = $236.35 (vs. $239.80 charged — a $3.45 discrepancy)**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.`,
      `**B) The per-kilogram rate, tripled, would land just shy of $9.50.** — **TRUE**

3.15 \\times 3 = $9.45, just under $9.50.

Related equation(s) from the model:

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Handling fee = $94.60 | Rate = $3.15/kg | Shipment 3 predicted = $236.35 (vs. $239.80 charged — a $3.45 discrepancy)**.`,
      `**C) Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed — but doesn't match it exactly.** — **TRUE**

Predicted $236.35 vs. actual $239.80 — a $3.45 gap, within $4.00 but not an exact match.

Related equation(s) from the model:

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Handling fee = $94.60 | Rate = $3.15/kg | Shipment 3 predicted = $236.35 (vs. $239.80 charged — a $3.45 discrepancy)**.`,
      `**D) Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.** — **FALSE**

99/2.2 = 45 kg, and 45 is not divisible by 7 (45/7 ≈ 6.43).

Related equation(s) from the model:

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Handling fee = $94.60 | Rate = $3.15/kg | Shipment 3 predicted = $236.35 (vs. $239.80 charged — a $3.45 discrepancy)**.`,
      `**E) Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.** — **TRUE**

94.60 + 400(3.15) = $1,354.60, just above $1,350.00.

Related equation(s) from the model:

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Handling fee = $94.60 | Rate = $3.15/kg | Shipment 3 predicted = $236.35 (vs. $239.80 charged — a $3.45 discrepancy)**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 39,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 185y = 677.35 \\\\
x + 260y = 913.60
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Convert Shipment 2's weight: 572/2.2 = 260 kg.

**Step 2.** Subtract directly: $75y = 236.25$, so $y = 3.15$.

$$
75y = 236.25
$$

$$
y = 3.15
$$

**Step 3.** Substituting back: $x + 582.75 = 677.35$, so $x
= 94.60$.

$$
x + 582.75 = 677.35
$$

$$
x
= 94.60
$$

**Step 4.** Audit Shipment 3: 99/2.2 = 45 kg.

**Step 5.** Model predicts 94.60 + 45(3.15) = $236.35, but Shipment 3 was charged $239.80 — a $3.45
discrepancy.

**3. Final answer:** Handling fee = $94.60 | Rate = $3.15/kg | Shipment 3 predicted = $236.35 (vs. $239.80 charged — a $3.45 discrepancy)

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

2 \\times 483.70 = $967.40; the overshoot is 15.30/952.10 ≈ 1.607%, just over 1.6%.

Related equation(s) from the model:

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **No consistent solution exists for (x, y); the invoices contradict one another by $15.30.**.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.`,
      `**B) For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $952.10 billed amount.** — **TRUE**

Since Client B's usage is exactly double Client A's, consistency requires Client A's total to equal 952.10/2 = $476.05 exactly — precisely half.

Related equation(s) from the model:

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **No consistent solution exists for (x, y); the invoices contradict one another by $15.30.**.`,
      `**C) The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.** — **TRUE**

1.61% is closer to 1/60 ≈ 1.67% (about 0.06 points away) than to 1/50 = 2% (0.39 points away).

Related equation(s) from the model:

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **No consistent solution exists for (x, y); the invoices contradict one another by $15.30.**.`,
      `**D) Plugging in a purely hypothetical $14.20 per compute-unit and $31.75 per storage-unit — numbers with no basis in the real contract — Client A's invoice would compute to a figure just shy of $375.** — **FALSE**

11(14.20) + 7(31.75) = 156.20 + 222.25 = $378.45, which is above $375, not just shy of it.

Related equation(s) from the model:

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **No consistent solution exists for (x, y); the invoices contradict one another by $15.30.**.`,
      `**E) Compare Client B's actual bill to two rival hypotheses — one assuming a clean doubling of Client A ($967.40), the other assuming a 50%-heavier surcharge instead of a full double ($725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.** — **TRUE**

|952.10 - 967.40| = $15.30 versus |952.10 - 725.55| = $226.55 — the doubling hypothesis is far closer to reality.

Related equation(s) from the model:

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **No consistent solution exists for (x, y); the invoices contradict one another by $15.30.**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 40,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
11x + 7y = 483.70 \\\\
22x + 14y = 952.10
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Client B's coefficients (22,14) are exactly double Client A's (11,7), so scaling Client A's equation by 2 gives $22x + 14y = 967.40$.

$$
22x + 14y = 967.40
$$

**Step 2.** Since the
reported total is $952.10, not $967.40, the two equations are inconsistent — a $15.30 contradiction.

**Step 3.** No values of x and y satisfy both
equations simultaneously: this is the parallel-lines case (proportional coefficients, non-proportional constants).

**3. Final answer:** No consistent solution exists for (x, y); the invoices contradict one another by $15.30.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Fund A earns 0.0525(4,800) = $252.00; Fund B earns 0.0375(13,600) = $510.00. Triple Fund A's interest would be $756.00, and $510.00 does not reach that.

Related equation(s) from the model:

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fund A = $4,800.00 | Fund B = $13,600.00**.

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.`,
      `**B) If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above $800.00.** — **TRUE**

At the raised rate, Fund A would earn 0.0675(4,800) = $324.00, giving a combined return of $324.00 + $510.00 = $834.00, above $800.00.

Related equation(s) from the model:

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fund A = $4,800.00 | Fund B = $13,600.00**.`,
      `**C) The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).** — **TRUE**

Total trust value is $18,400.00, and $762.00 ÷ $18,400.00 ≈ 4.14%, which exceeds 4%.

Related equation(s) from the model:

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fund A = $4,800.00 | Fund B = $13,600.00**.`,
      `**D) Had the trust instead been split evenly ($9,200.00 in each fund) at the original rates, the total return would have come within $5.00 of the actual $762.00.** — **FALSE**

An even split would earn 9,200(0.0525 + 0.0375) = $828.00, which is $66.00 away from the actual $762.00 — far more than $5.00.

Related equation(s) from the model:

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fund A = $4,800.00 | Fund B = $13,600.00**.`,
      `**E) The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.** — **TRUE**

(13,600 - 4,800) ÷ 4,800 = 8,800 ÷ 4,800 ≈ 1.8333, or about 183.3%, which exceeds 180%.

Related equation(s) from the model:

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fund A = $4,800.00 | Fund B = $13,600.00**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 41,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
y = 2x + 4000 \\\\
0.0525x + 0.0375y = 762
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Substitute the first equation into the second: 0.0525x + 0.0375(2x + 4000) = 762 \\to  $0.1275x + 150 = 762$ \\to  $0.1275x = 612$ \\to  $x = 4800$.

$$
0.1275x + 150 = 762
$$

$$
0.1275x = 612
$$

$$
x = 4800
$$

**Step 2.** Substitute back: $y = 2$(4800) + 4000 = 13600.

$$
y = 2
$$

**3. Final answer:** Fund A = $4,800.00 | Fund B = $13,600.00

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Batch 1 contains 144 g and Batch 2 contains 184 g; combined, 328 g, which exceeds 300 g.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Solution A = 16 g/L | Solution B = 12 g/L | Batch 3 predicted = 104 g (vs. 109 g recorded)**.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
      `**B) Solution B's concentration is more than 70% of Solution A's concentration.** — **TRUE**

12 ÷ 16 = 0.75, or 75%, which is more than 70%.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Solution A = 16 g/L | Solution B = 12 g/L | Batch 3 predicted = 104 g (vs. 109 g recorded)**.`,
      `**C) If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.** — **TRUE**

If 2 L of A is correct, 2(16) + $12V = 109$ \\to $V = 77$/12 ≈ 6.4167 L, only 0.0167 L from 6.4 L but 0.4167 L from 6.0 L.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Solution A = 16 g/L | Solution B = 12 g/L | Batch 3 predicted = 104 g (vs. 109 g recorded)**.`,
      `**D) Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.** — **FALSE**

In a 3:1 ratio, salt content = 16(0.75V) + 12(0.25V) = 15V. Setting $15V = 130$ gives V ≈ 8.67 L, not 7.5 L.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Solution A = 16 g/L | Solution B = 12 g/L | Batch 3 predicted = 104 g (vs. 109 g recorded)**.`,
      `**E) Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.** — **TRUE**

Batch 2's 5:1 ratio means A is 5/6 ≈ 83.3% of volume, while Batch 1's 3:2 ratio means A is only 3/5 = 60% — Batch 2's proportion is higher.

Related equation(s) from the model:

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Solution A = 16 g/L | Solution B = 12 g/L | Batch 3 predicted = 104 g (vs. 109 g recorded)**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 42,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
6x + 4y = 144 \\\\
10x + 2y = 184
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide by 2: $3x + 2y = 72$; $5x + y = 92$, so $y = 92 - 5x$.

$$
3x + 2y = 72
$$

$$
5x + y = 92
$$

$$
y = 92 - 5x
$$

**Step 2.** Substitute: 3x + 2(92 - 5x) = 72 \\to  $-7x = -112$ \\to  $x = 16$.

$$
o  -7x = -112
$$

$$
-7x = -112
$$

$$
x = 16
$$

**Step 3.** Then $y = 92 - 80=12$.

$$
y = 92 - 80
$$

$$
y = 92 - 80=12
$$

**Step 4.** Audit Batch 3 (1:3 over 8 $L = 2$ L A, 6 L B): predicted = 2(16) + 6(12) = 104 g, vs. 109 g recorded — a 5 g discrepancy.

$$
L = 2
$$

**3. Final answer:** Solution A = 16 g/L | Solution B = 12 g/L | Batch 3 predicted = 104 g (vs. 109 g recorded)

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Her actual 2.5 hours of OT pay = 2.5(26) = $65.00; 10% of that is $6.50, which exceeds $6.00.

Related equation(s) from the model:

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Base wage = $17.50/hour | Overtime premium = $8.50/hour (overtime rate = $26.00/hour)**.`,
      `**B) Employee B's overtime pay (the portion earned specifically for hours beyond 40) is more than 40% of his total gross pay.** — **FALSE**

Employee B's overtime pay is 7(26) = $182.00, and $182.00 ÷ $882.00 ≈ 20.6%, well short of 40%.

Related equation(s) from the model:

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Base wage = $17.50/hour | Overtime premium = $8.50/hour (overtime rate = $26.00/hour)**.`,
      `**C) The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.** — **TRUE**

At 45 hours and the base rate alone, each would earn 45(17.5) = $787.50, combined $1,575.00. Their actual combined pay is $1,647.00, which is higher.

Related equation(s) from the model:

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Base wage = $17.50/hour | Overtime premium = $8.50/hour (overtime rate = $26.00/hour)**.`,
      `**D) If the overtime premium were eliminated (overtime paid at the base rate) but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.** — **FALSE**

The new base wage would be 17.5(1.15) = $20.125/hour, so 42.5 hours at that flat rate ≈ $855.31 — higher than her actual $765.00, not lower.

Related equation(s) from the model:

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Base wage = $17.50/hour | Overtime premium = $8.50/hour (overtime rate = $26.00/hour)**.`,
      `**E) The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).** — **TRUE**

7 ÷ 2.5 = 2.8, while 882 ÷ 765 ≈ 1.153 — the hours ratio is indeed greater than the pay ratio, since overtime hours are only a partial driver of total pay.

Related equation(s) from the model:

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Base wage = $17.50/hour | Overtime premium = $8.50/hour (overtime rate = $26.00/hour)**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 43,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
42.5x + 2.5y = 765 \\\\
47x + 7y = 882
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply the first by 2.8 (so its y-coefficient matches): $119x + 7y = 2142$.

$$
119x + 7y = 2142
$$

**Step 2.** Subtract the second: $72x = 1260$, so $x = 17.5$.

$$
72x = 1260
$$

$$
x = 17.5
$$

**Step 3.** Substitute back:
42.5(17.5) + $2.5y = 765$ \\to  $2.5y = 21.25$ \\to  $y = 8.5$.

$$
2.5y = 765
$$

$$
2.5y = 21.25
$$

$$
y = 8.5
$$

**3. Final answer:** Base wage = $17.50/hour | Overtime premium = $8.50/hour (overtime rate = $26.00/hour)

Verify by substituting the final values back into both original equations before judging the statements.`,
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

20(27) + 40(11) = 540 + 440 = $980.00, which exceeds $950.00.

Related equation(s) from the model:

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Cedar wood = $27.00/m | Galvanized wire = $11.00/m**.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.** — **TRUE**

$x - y = 27 - 11$ = 16, while 145% of the wire price is 1.45(11) = $15.95 — 16 exceeds 15.95, though only barely.

Related equation(s) from the model:

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Cedar wood = $27.00/m | Galvanized wire = $11.00/m**.`,
      `**C) Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs ($750.00 + $710.00).** — **FALSE**

The combined project costs 28(27) + 64(11) = $1,460.00, which equals $750.00 + $710.00 exactly — the same, not less, since cost scales linearly with meters.

Related equation(s) from the model:

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Cedar wood = $27.00/m | Galvanized wire = $11.00/m**.`,
      `**D) If wire fencing rose by $2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.** — **FALSE**

At $13.00/m wire, Project 1 would cost 18(27) + 24(13) = $798.00, an increase of $48.00, only about 6.4% — well under 15%.

Related equation(s) from the model:

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Cedar wood = $27.00/m | Galvanized wire = $11.00/m**.`,
      `**E) Project 3's cost per total meter installed (cost ÷ total meters of both materials) is higher than Project 1's cost per total meter installed.** — **FALSE**

Project 3's rate is $710.00 ÷ 50 m = $14.20/m, while Project 1's rate is $750.00 ÷ 42 m ≈ $17.86/m — Project 3's rate is lower, not higher.

Related equation(s) from the model:

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Cedar wood = $27.00/m | Galvanized wire = $11.00/m**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 44,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
18x + 24y = 750 \\\\
10x + 40y = 710
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Check Project 2 against Project 1: (27,36) = 1.5 \\times  (18,24), and 1.5 \\times  $750.00 = $1,125.00, matching Project 2 exactly — it is redundant.

$$
750.00 =
$$

**Step 2.** Divide Project 1 by 6: $3x + 4y = 125$.

$$
3x + 4y = 125
$$

**Step 3.** Divide Project 3 by 10: $x + 4y = 71$.

$$
x + 4y = 71
$$

**Step 4.** Subtract: $2x = 54$, so $x = 27$.

$$
2x = 54
$$

$$
x = 27
$$

**Step 5.** Substitute back: 27 + $4y = 71$, so $y
= 11$.

$$
4y = 71
$$

$$
y
= 11
$$

**3. Final answer:** Cedar wood = $27.00/m | Galvanized wire = $11.00/m

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

356 ÷ 48 ≈ 7.42 hours, which exceeds 7 hours.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Boat A = 48 km/h | Boat B = 77 km/h**.

**Closing speed:** When two craft move toward each other, the distance equation is (speed₁ + speed₂)×time = stretch — one equation is a sum of rates, not a difference.`,
      `**B) In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.** — **TRUE**

At meeting, Boat B has covered 2(77)=154 km and Boat A 2(48)=96 km; the difference is 58 km, less than half of 250 km (125 km).

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Boat A = 48 km/h | Boat B = 77 km/h**.`,
      `**C) If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.** — **FALSE**

At +20%, speeds become 57.6 and 92.4 km/h, combined 150 km/h; 250 ÷ 150 ≈ 1.667 hours, still above 1.5 hours.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Boat A = 48 km/h | Boat B = 77 km/h**.`,
      `**D) The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.** — **TRUE**

Combined speed is 125 km/h, so in 3 hours they together cover 375 km, which exceeds 356 km.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Boat A = 48 km/h | Boat B = 77 km/h**.`,
      `**E) Boat B's speed is more than 60% higher than Boat A's speed.** — **TRUE**

(77 - 48) ÷ 48 = 29/48 ≈ 60.4%, just over 60%.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Boat A = 48 km/h | Boat B = 77 km/h**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 45,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + y = 125 \\\\
x + 4y = 356
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract the first from the second: $3y = 231$, so $y = 77$.

$$
3y = 231
$$

$$
y = 77
$$

**Step 2.** Substitute back: $x + 77 = 125$, so $x = 48$.

$$
x + 77 = 125
$$

$$
x = 48
$$

**3. Final answer:** Boat A = 48 km/h | Boat B = 77 km/h

**Closing speed:** When two craft move toward each other, the distance equation is (speed₁ + speed₂)×time = stretch — one equation is a sum of rates, not a difference.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

260(95) + 160(120) = $43,900, which falls just short of $44,000.

Related equation(s) from the model:

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes**.

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.** — **TRUE**

$y - x = 120 - 95$ = 25, and 25% of Wheat's profit (95) is 23.75 — 25 exceeds 23.75.

Related equation(s) from the model:

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes**.`,
      `**C) Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.** — **FALSE**

Season 3's total is $180 + 300 = 480$ tonnes, while Season 2's total is $180 + 260 = 440$ tonnes — Season 3's total is greater, not less.

Related equation(s) from the model:

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes**.`,
      `**D) Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of $53,100 would have been understated by more than $3,500.** — **TRUE**

At 220 tonnes: 220(95) + 300(120) = $56,900. The gap from the recorded $53,100 is $3,800, which exceeds $3,500.

Related equation(s) from the model:

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes**.`,
      `**E) Season 2's profit per tonne of total output (total profit ÷ total tonnage) exceeds Season 1's profit per tonne of total output.** — **TRUE**

Season 1's rate is $42,000 ÷ 400 t = $105.00/t; Season 2's rate is $48,300 ÷ 440 t ≈ $109.77/t — Season 2's rate is higher.

Related equation(s) from the model:

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 46,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
3x + 2y = 525 \\\\
9x + 13y = 2415
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 13 and 2: $39x + 26y = 6825$; $18x + 26y = 4830$.

$$
39x + 26y = 6825
$$

$$
18x + 26y = 4830
$$

**Step 2.** Subtract: $21x = 1995$, so $x = 95$.

$$
21x = 1995
$$

$$
x = 95
$$

**Step 3.** Substitute back: 285 + $2y = 525$, so $y = 120$.

$$
2y = 525
$$

$$
y = 120
$$

**Step 4.** Reconstruct Season 3's Wheat tonnage T: 95T + 120(300) = 53100 \\to  $T = 180$.

$$
T = 180
$$

**3. Final answer:** Wheat = $95.00/t | Barley = $120.00/t | Season 3 Wheat reconstructed = 180 tonnes

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

In fifteen years: elder = 62, younger = 34. Double the younger's age would be 68, and 62 is less than 68.

Related equation(s) from the model:

$$
\\begin{cases}
x - 5 = 3(y - 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Elder employee = 47 years old | Younger employee = 19 years old**.

**Ages shift:** Ages change by the same number of years on both sides. Translate 'n years ago' by subtracting n from *both* present ages before equating.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) The current age gap (x - y) is more than 45% of the elder employee's current age.** — **TRUE**

The gap is $47 - 19 = 28$, and 45% of the elder's age (47) is 21.15 — 28 exceeds 21.15.

Related equation(s) from the model:

$$
\\begin{cases}
x - 5 = 3(y - 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Elder employee = 47 years old | Younger employee = 19 years old**.`,
      `**C) Exactly 4.5 years from now (halfway to the nine-year mark), the elder employee will be more than 2.5 times the younger employee's age.** — **FALSE**

At 4.5 years from now: elder = 51.5, younger = 23.5. 51.5 ÷ 23.5 ≈ 2.19, which does not exceed 2.5.

Related equation(s) from the model:

$$
\\begin{cases}
x - 5 = 3(y - 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Elder employee = 47 years old | Younger employee = 19 years old**.`,
      `**D) Ten years ago, the sum of their ages was less than 40.** — **FALSE**

Ten years ago: elder = 37, younger = 9, sum = 46, which is not less than 40.

Related equation(s) from the model:

$$
\\begin{cases}
x - 5 = 3(y - 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Elder employee = 47 years old | Younger employee = 19 years old**.`,
      `**E) There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.** — **TRUE**

The scenario states this was true exactly five years ago, and five years is indeed more than four years ago.

Related equation(s) from the model:

$$
\\begin{cases}
x - 5 = 3(y - 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Elder employee = 47 years old | Younger employee = 19 years old**.`,
    ],
    difficulty_level: "4/5",
    sort_order: 47,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x - 5 = 3(y - 5) \\\\
x + 9 = 2(y + 9)
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Expand: x = 3y - 10, and x = 2y + 9.

$$
x = 3
$$

$$
x = 2
$$

**Step 2.** Setting equal: 3y - 10 = 2y + 9, so $y = 19$.

$$
3y - 10 = 2
$$

$$
y = 19
$$

**Step 3.** Substitute back: $x = 2$(19) + 9 = 47.

$$
x = 2
$$

**3. Final answer:** Elder employee = 47 years old | Younger employee = 19 years old

**Ages shift:** Ages change by the same number of years on both sides. Translate 'n years ago' by subtracting n from *both* present ages before equating.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

With swapped markups, Order 3's retail total becomes 3(1.18\\times 55) + 12(1.32\\times 80) = $1,461.90, higher than the actual $1,350.60, not lower.

Related equation(s) from the model:

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Product A wholesale = $55.00 | Product B wholesale = $80.00**.

**Markup:** Selling price = wholesale × (1 + markup). If statements quote markups, convert them to multipliers before comparing order totals.`,
      `**B) The dollar markup on Product B is more than 80% of the dollar markup on Product A.** — **TRUE**

Product B's markup is 0.18(80) = $14.40; Product A's is 0.32(55) = $17.60. 14.40 ÷ 17.60 ≈ 81.8%, which exceeds 80%.

Related equation(s) from the model:

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product A wholesale = $55.00 | Product B wholesale = $80.00**.`,
      `**C) Order 1's total retail markup (retail total minus wholesale cost total) exceeds $150.00.** — **TRUE**

Order 1's wholesale total is 8(55) + 5(80) = $840.00; its retail total is $1,052.80, so the markup is $212.80, which exceeds $150.00.

Related equation(s) from the model:

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product A wholesale = $55.00 | Product B wholesale = $80.00**.`,
      `**D) If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than $280.00.** — **TRUE**

Product B's retail price is 1.18(80) = $94.40 per unit; 3 extra units add $283.20, which exceeds $280.00.

Related equation(s) from the model:

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product A wholesale = $55.00 | Product B wholesale = $80.00**.`,
      `**E) The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.** — **TRUE**

Wholesale ratio: 80 ÷ 55 ≈ 1.4545. Retail ratio: (1.18\\times 80) ÷ (1.32\\times 55) ≈ 1.3003. The wholesale ratio is larger because Product A carries the bigger markup, compressing its retail-side gap.

Related equation(s) from the model:

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Product A wholesale = $55.00 | Product B wholesale = $80.00**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 48,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
10.56x + 5.9y = 1052.80 \\\\
3.96x + 14.16y = 1350.60
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Order 2 (16,10,$2,105.60) is exactly double Order 1 — redundant, set aside.

**Step 2.** Multiply Order 1 by 0.375 (so its x-coefficient matches Order
3's): $3.96x + 2.2125y = 394.80$.

$$
3.96x + 2.2125y = 394.80
$$

**Step 3.** Subtract from Order 3: $11.9475y = 955.80$, so $y = 80.00$.

$$
11.9475y = 955.80
$$

$$
y = 80.00
$$

**Step 4.** Substitute back into Order 1: $10.56x + 472 =
1052.80$, so $x = 55.00$.

$$
10.56x + 472 =
1052.80
$$

$$
x = 55.00
$$

**3. Final answer:** Product A wholesale = $55.00 | Product B wholesale = $80.00

**Markup:** Selling price = wholesale × (1 + markup). If statements quote markups, convert them to multipliers before comparing order totals.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

At half a win's value, a draw would be worth 3.5: 9(7) + 4(3.5) = 77, more than the actual 75.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Win = 7 points | Draw = 3 points**.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) The Ravens earned more than 45% of their total points from draws alone.** — **FALSE**

The Ravens' draw points total 6(3) = 18, and 18 ÷ 67 ≈ 26.9%, well short of 45%.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Win = 7 points | Draw = 3 points**.`,
      `**C) Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.** — **TRUE**

Under 2-and-1 scoring: Falcons = 9(2) + 4(1) = 22; Ravens = 7(2) + 6(1) = 20. The Falcons still finish ahead.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Win = 7 points | Draw = 3 points**.`,
      `**D) The Falcons' win-to-draw point contribution ratio (points from wins ÷ points from draws) exceeds 15.** — **FALSE**

The Falcons' win points total 9(7) = 63 and draw points total 4(3) = 12; 63 ÷ 12 = 5.25, which does not exceed 15.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Win = 7 points | Draw = 3 points**.`,
      `**E) A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.** — **FALSE**

The revised record would score 12(7) + 1(3) = 87, only 12 points above the actual 75 — not more than 20.

Related equation(s) from the model:

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Win = 7 points | Draw = 3 points**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 49,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
9x + 4y = 75 \\\\
7x + 6y = 67
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 3 and 2: $27x + 12y = 225$; $14x + 12y = 134$.

$$
27x + 12y = 225
$$

$$
14x + 12y = 134
$$

**Step 2.** Subtract: $13x = 91$, so $x = 7$.

$$
13x = 91
$$

$$
x = 7
$$

**Step 3.** Substitute back: 63 + $4y = 75$, so $y = 3$.

$$
4y = 75
$$

$$
y = 3
$$

**3. Final answer:** Win = 7 points | Draw = 3 points

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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
| Batch 3 (audit) 9.5 | L (conv.) | 6 L 147.0 kg | (recorded) |`,
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

12(7.6) + 10(11.4) = $91.2 + 114 = 205.2$ kg, which exceeds 200 kg.

Related equation(s) from the model:

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)**.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
      `**B) Metal B's density is more than 50% greater than Metal A's density.** — **FALSE**

(11.4 - 7.6) ÷ 7.6 = 3.8/7.6 = 0.50 exactly, or 50% — equal to 50%, not more than it.

Related equation(s) from the model:

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)**.`,
      `**C) The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.** — **TRUE**

6.4 ÷ 147.0 ≈ 4.35%, which exceeds 4%.

Related equation(s) from the model:

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)**.`,
      `**D) If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.** — **FALSE**

At 10 L: 10(7.6) + 6(11.4) = 144.4 kg. The gap from 147.0 kg is 2.6 kg, which is not within 2 kg.

Related equation(s) from the model:

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)**.`,
      `**E) Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.** — **TRUE**

17(7.6) + 23(11.4) = 391.4 kg, which equals $182.4 + 209.0 = 391.4$ kg exactly — mass combines linearly, as expected.

Related equation(s) from the model:

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 50,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
12x + 8y = 182.4 \\\\
5x + 15y = 209.0
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide by 4 and 5: $3x + 2y = 45.6$; $x + 3y = 41.8$, so $x = 41.8 - 3y$.

$$
3x + 2y = 45.6
$$

$$
x + 3y = 41.8
$$

$$
x = 41.8 - 3y
$$

**Step 2.** Substitute: 3(41.8 - 3y) + $2y = 45.6$ \\to  $-7y = -79.8$ \\to  $y = 11.4$.

$$
2y = 45.6
$$

$$
-7y = -79.8
$$

$$
y = 11.4
$$

**Step 3.** Substitute back: $x = 41.8 - 34.2=7.6$.

$$
x = 41.8 - 34.2
$$

$$
x = 41.8 - 34.2=7.6
$$

**Step 4.** Audit Batch 3: predicted = 9.5(7.6) + 6(11.4) = 140.6 kg, vs. 147.0 kg recorded — a 6.4 kg
discrepancy.

$$
d = 9.5
$$

**3. Final answer:** Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Fee = 0.016(850,000) + 1,200 = $14,800.00. As a share of AUM: 14,800/850,000 ≈ 1.7412%, less than 1.75%.

Related equation(s) from the model:

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)**.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) The flat retainer accounts for more than 10% of Client 2's total fee.** — **TRUE**

The retainer is $1,200.00 and Client 2's total fee is $10,800.00; 1,200/10,800 ≈ 11.11%, which exceeds 10%.

Related equation(s) from the model:

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)**.`,
      `**C) If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM $750,000) would decrease compared to its actual amount.** — **TRUE**

Client 1's AUM is $750,000, actual fee = 0.016(750,000) + 1,200 = $13,200.00. Under revised terms: 0.014(750,000) + 2,400 = $12,900.00, lower.

Related equation(s) from the model:

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)**.`,
      `**D) The percentage-point difference in effective fee rate (total fee ÷ AUM) between Client 1 and Client 2 is more than 0.05 percentage points.** — **FALSE**

Client 1's effective rate is 13,200/750,000 = 1.76%. Client 2's is 10,800/600,000 = 1.80%. The gap is only 0.04 percentage points, not more than 0.05.

Related equation(s) from the model:

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)**.`,
      `**E) A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.** — **FALSE**

Triple Client 2's AUM ($1,800,000) gives a fee of 0.016(1,800,000) + 1,200 = $30,000.00. Triple Client 2's fee would be $32,400.00 — the actual fee falls short because the flat retainer does not scale with AUM.

Related equation(s) from the model:

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 51,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
600000x + y = 10800 \\\\
150000x = 2400
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** The second equation already isolates x: $150000x = 2400$, so $x = 0.016$ (1.6%).

$$
150000x = 2400
$$

$$
x = 0.016
$$

**Step 2.** Substitute into the first: 600000(0.016) + $y = 10800$, so $y =
1200$.

$$
y = 10800
$$

$$
y =
1200
$$

**3. Final answer:** Fee rate = 1.6% of AUM | Retainer = $1,200.00 (Fee = 0.016·AUM + 1200)

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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
| Batch 3 (QC) 0.32 | L (=320 mL) | 450 mL 9,700 | mg (recorded) |`,
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

(15.6 - 8.4)/8.4 = 7.2/8.4 ≈ 85.71%, which exceeds 85%, though only just.

Related equation(s) from the model:

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)**.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
      `**B) Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.** — **FALSE**

The predicted/recorded difference is 8 mg, and 8/9,700 ≈ 0.0825%, far below 1%.

Related equation(s) from the model:

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)**.`,
      `**C) If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.** — **TRUE**

500(8.4) + 600(15.6) = 4,200 + 9,360 = 13,560 mg, which exceeds 13,500 mg.

Related equation(s) from the model:

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)**.`,
      `**D) The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.** — **TRUE**

Pooled content is 8,880 + 12,600 = 21,480 mg, while twice Batch 2 alone is 25,200 mg; 21,480 is less than 25,200.

Related equation(s) from the model:

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)**.`,
      `**E) Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.** — **TRUE**

Batch 2's Suspension B share is 700/900 ≈ 77.78% of its volume; Batch 3's is 450/770 ≈ 58.44% — Batch 2's proportion is higher.

Related equation(s) from the model:

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 52,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
500x + 300y = 8880 \\\\
200x + 700y = 12600
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide by 100: $5x + 3y = 88.8$; $2x + 7y = 126$.

$$
5x + 3y = 88.8
$$

$$
2x + 7y = 126
$$

**Step 2.** Multiply by 7 and 3: $35x + 21y = 621.6$; $6x + 21y = 378$.

$$
35x + 21y = 621.6
$$

$$
6x + 21y = 378
$$

**Step 3.** Subtract: $29x = 243.6$, so $x = 8.4$.

$$
29x = 243.6
$$

$$
x = 8.4
$$

**Step 4.** Substitute back: 16.8 + $7y = 126$, so $y = 15.6$.

$$
7y = 126
$$

$$
y = 15.6
$$

**Step 5.** Audit Batch 3: predicted = 320(8.4) + 450(15.6) = 9,708 mg, vs. 9,700 mg recorded — an 8
mg discrepancy.

$$
d = 320
$$

**3. Final answer:** Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

Waste studs = 24 at $4.50 = $108.00; waste sheets = 12 at $38.00 = $456.00; combined waste cost = $564.00, which does not exceed $700.00.

Related equation(s) from the model:

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Stud price = $4.50 | Drywall sheet price = $38.00**.`,
      `**B) If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than $150.00.** — **TRUE**

At 5% drywall waste, ordered sheets = 183.75; new Invoice 2 = 392(4.50) + 183.75(38) = $8,746.50, a decrease of $199.50 from $8,946.00 — more than $150.00.

Related equation(s) from the model:

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Stud price = $4.50 | Drywall sheet price = $38.00**.`,
      `**C) Job 2's usable-material cost (studs and drywall priced at their per-unit rates, using only the 350 usable studs and 175 usable sheets, ignoring waste) is more than 90% of Invoice 2's actual as-ordered total.** — **TRUE**

Usable-only cost = 350(4.50) + 175(38) = $8,225.00. Ninety percent of $8,946.00 is $8,051.40, and $8,225.00 exceeds that.

Related equation(s) from the model:

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Stud price = $4.50 | Drywall sheet price = $38.00**.`,
      `**D) The drywall price (y) is more than 8 times the stud price (x).** — **TRUE**

38.00 ÷ 4.50 ≈ 8.44, which is more than 8.

Related equation(s) from the model:

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Stud price = $4.50 | Drywall sheet price = $38.00**.`,
      `**E) Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.** — **TRUE**

Job 1: usable cost = $6,600.00 vs. actual $7,164.00 — an 8.545% increase. Job 2: usable cost = $8,225.00 vs. actual $8,946.00 — an 8.767% increase. Job 1's percentage increase is the smaller of the two.

Related equation(s) from the model:

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Stud price = $4.50 | Drywall sheet price = $38.00**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 53,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
224x + 162y = 7164 \\\\
392x + 189y = 8946
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply the first by 1.75 (so its x-coefficient, $224\\times 1.75=392$, matches the second): $392x + 283.5y = 12537$.

$$
392x + 283.5y = 12537
$$

$$
224\\times 1.75=392
$$

**Step 2.** Subtract the second: $94.5y =
3591$, so $y = 38.00$.

$$
94.5y =
3591
$$

$$
y = 38.00
$$

**Step 3.** Substitute back: $224x + 6156 = 7164$, so $x = 4.50$.

$$
224x + 6156 = 7164
$$

$$
x = 4.50
$$

**3. Final answer:** Stud price = $4.50 | Drywall sheet price = $38.00

Verify by substituting the final values back into both original equations before judging the statements.`,
  },
  {
    id: "math-5-54",
    case_id: "MATH 5.54",
    title: `Precision Dynamics — Sensor Calibration Curve Reconstruction`,
    context: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.`,
    tables_markdown: `| Point | Reading | Reference True Value Role | Role |
| --- | --- | --- | --- |
| Point 1 | 12.4 | 56.90 Calibration |  |
| Point 2 | 31.7 | 124.45 Calibration |  |
| Point 3 | 45.0 | 172.20 Verification (recorded) |  |`,
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

(3.5 - 3.4)/3.4 ≈ 2.94%, which exceeds 2.5%.

Related equation(s) from the model:

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)**.

**Affine map:** Here the two unknowns *are* the slope and intercept of True = (scale)×Reading + offset. Two calibration points → one 2×2 system.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.** — **TRUE**

At double the offset (27.0): predicted = 3.5(20) + 27 = 97, which exceeds 95.

Related equation(s) from the model:

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)**.`,
      `**C) The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.** — **FALSE**

The predicted value (171.00) is actually lower than the recorded value (172.20), not higher — so it cannot exceed it by any positive percentage.

Related equation(s) from the model:

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)**.`,
      `**D) The percentage increase in true value between Point 1 and Point 2 is more than 100%.** — **TRUE**

(124.45 - 56.90)/56.90 = 67.55/56.90 ≈ 118.7%, which exceeds 100%.

Related equation(s) from the model:

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)**.`,
      `**E) A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).** — **FALSE**

At a reading of 8.0: predicted = 3.5(8) + 13.5 = 41.5. Half of Point 1's value is 28.45, and 41.5 is not less than 28.45.

Related equation(s) from the model:

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 54,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
12.4x + y = 56.90 \\\\
31.7x + y = 124.45
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract the first from the second: $19.3x = 67.55$, so $x = 3.50$.

$$
19.3x = 67.55
$$

$$
x = 3.50
$$

**Step 2.** Substitute back: 43.4 + $y = 56.90$, so $y = 13.50$.

$$
y = 56.90
$$

$$
y = 13.50
$$

**Step 3.** Verification: predicted =
45.0(3.5) + 13.5 = 171.00, vs. recorded 172.20 — a 1.20 discrepancy.

$$
d =
45.0
$$

**3. Final answer:** Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)

**Affine map:** Here the two unknowns *are* the slope and intercept of True = (scale)×Reading + offset. Two calibration points → one 2×2 system.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

(6.20 - 4.85)/4.85 = 1.35/4.85 ≈ 27.84%, which exceeds 25%.

Related equation(s) from the model:

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Coffee = $6.20/kg | Cocoa = $4.85/kg**.

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
      `**B) Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.** — **TRUE**

Coffee's cost in Shipment 1 is 312(6.20) = $1,934.40, and $1,934.40 ÷ $2,943.20 ≈ 65.72%, which exceeds 65%.

Related equation(s) from the model:

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Coffee = $6.20/kg | Cocoa = $4.85/kg**.`,
      `**C) If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual $4,555.00.** — **TRUE**

At 400 kg each: 400(6.20) + 400(4.85) = $4,420.00, which is lower than $4,555.00.

Related equation(s) from the model:

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Coffee = $6.20/kg | Cocoa = $4.85/kg**.`,
      `**D) The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.** — **FALSE**

Total Coffee weight is 812 kg, costing $5,034.40. Total Cocoa weight is 508 kg, costing $2,463.80 — Coffee's total cost is far higher, not lower.

Related equation(s) from the model:

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Coffee = $6.20/kg | Cocoa = $4.85/kg**.`,
      `**E) The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.** — **TRUE**

The price gap is 1.35, and 30% of Coffee's price is 1.86; 1.35 is less than 1.86.

Related equation(s) from the model:

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Coffee = $6.20/kg | Cocoa = $4.85/kg**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 55,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
312x + 208y = 2943.2 \\\\
500x + 300y = 4555
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide by 8 and 100: $39x + 26y = 367.9$; $5x + 3y = 45.55$, so $x = 9.11 - 0.6y$.

$$
39x + 26y = 367.9
$$

$$
5x + 3y = 45.55
$$

$$
x = 9.11 - 0.6y
$$

**Step 2.** Substitute: 39(9.11 - 0.6y) + $26y = 367.9$ \\to  $2.6y = 12.61$ \\to
$y = 4.85$.

$$
26y = 367.9
$$

$$
2.6y = 12.61
$$

$$
y = 4.85
$$

**Step 3.** Substitute back: $x = 9.11 - 2.91=6.20$.

$$
x = 9.11 - 2.91
$$

$$
x = 9.11 - 2.91=6.20
$$

**3. Final answer:** Coffee = $6.20/kg | Cocoa = $4.85/kg

**Base + rate:** Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first (or keep it as a shared unknown) so you do not invent a third fake variable.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.

Verify by substituting the final values back into both original equations before judging the statements.`,
  },
  {
    id: "math-5-56",
    case_id: "MATH 5.56",
    title: `Continental Freight — Fleet Fuel Rate Reconstruction`,
    context: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).`,
    tables_markdown: `| Route | Truck | Van | Total Fuel |
| --- | --- | --- | --- |
| Route 1 850 | km 620 | km | 383.6 L |
| Route 2 500 | km 900 | km | 322.0 L |
| Route 3 (audit) 155.3 mi (≈250 | km) 400 | km 155.0 L | (recorded) |`,
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

(32 - 18)/18 = 14/18 ≈ 77.78%, which exceeds 75%.

Related equation(s) from the model:

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)**.

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.`,
      `**B) Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.** — **FALSE**

The difference is 3 L, and 3/155 ≈ 1.94%, which is not more than 2%.

Related equation(s) from the model:

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)**.`,
      `**C) If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.** — **TRUE**

8.5(32) + 9(18) = $272 + 162 = 434$ L, which exceeds 430 L.

Related equation(s) from the model:

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)**.`,
      `**D) Route 2's fleet-wide average fuel efficiency (total fuel ÷ total distance, in L/100km) is closer to the Van's individual rate than to the Truck's individual rate.** — **TRUE**

Route 2's combined rate is 322/$14 \\times 100 = 23.0$ L/100km. This is 5.0 away from the Van's rate (18) but 9.0 away from the Truck's rate (32) — closer to the Van.

Related equation(s) from the model:

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)**.`,
      `**E) Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.** — **TRUE**

If each vehicle alone covered 1,470 km: 14.7(32) + 14.7(18) = 735.0 L, far more than Route 1's actual 383.6 L.

Related equation(s) from the model:

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 56,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
8.5x + 6.2y = 383.6 \\\\
5x + 9y = 322
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Multiply by 9 and 6.2: $76.5x + 55.8y = 3452.4$; $31x + 55.8y = 1996.4$.

$$
76.5x + 55.8y = 3452.4
$$

$$
31x + 55.8y = 1996.4
$$

**Step 2.** Subtract: $45.5x = 1456$, so $x = 32.0$.

$$
45.5x = 1456
$$

$$
x = 32.0
$$

**Step 3.** Substitute back: 160 + $9y =
322$, so $y = 18.0$.

$$
9y =
322
$$

$$
y = 18.0
$$

**Step 4.** Audit Route 3: predicted = 2.5(32) + 4(18) = 152 L, vs. 155 L recorded — a 3 L discrepancy.

$$
d = 2.5
$$

**3. Final answer:** Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)

**Missing cell:** When one entry is missing but another row is an exact scale (or double), rebuild the lost quantity from that proportion first, then solve for prices.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The gap is $6.6 - 5.4 = 1.2$, and 20% of the bond rate (5.4) is 1.08; 1.2 exceeds 1.08.

Related equation(s) from the model:

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Bond rate = 5.4% | Equity rate = 6.6%**.

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.`,
      `**B) Under the current allocation, the blended rate (total return ÷ total fund) is less than 6%.** — **TRUE**

The current blended rate is 2,646/45,000 = 5.88%, which is less than 6%.

Related equation(s) from the model:

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Bond rate = 5.4% | Equity rate = 6.6%**.`,
      `**C) If the entire $45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns ($2,646.00 + $2,754.00 = $5,400.00).** — **FALSE**

All-equity return would be 45,000(0.066) = $2,970.00, which does not exceed the combined $5,400.00 figure from the two described allocations.

Related equation(s) from the model:

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Bond rate = 5.4% | Equity rate = 6.6%**.`,
      `**D) A 50/50 split ($22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.** — **TRUE**

A 50/50 split returns 22,500(0.054) + 22,500(0.066) = $2,700.00, which exactly equals the average of $2,646.00 and $2,754.00 — namely $2,700.00.

Related equation(s) from the model:

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Bond rate = 5.4% | Equity rate = 6.6%**.`,
      `**E) The bond rate is more than 80% of the equity rate.** — **TRUE**

5.4 ÷ 6.6 ≈ 81.8%, which is more than 80%.

Related equation(s) from the model:

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Bond rate = 5.4% | Equity rate = 6.6%**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 57,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
270x + 180y = 2646 \\\\
180x + 270y = 2754
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Add the two equations: $450x + 450y = 5400$, so $x + y = 12$.

$$
450x + 450y = 5400
$$

$$
x + y = 12
$$

**Step 2.** Subtract the first from the second: $-90x + 90y = 108$, so $y - x = 1.2$, i.e. y = x
+ 1.2.

$$
-90x + 90y = 108
$$

$$
y - x = 1.2
$$

**Step 3.** Substitute: x + (x+1.2) = 12, so $x = 5.4$, and $y = 6.6$.

$$
x = 5.4
$$

$$
y = 6.6
$$

**3. Final answer:** Bond rate = 5.4% | Equity rate = 6.6%

**Interest mix:** Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. The rates are coefficients — do not average them and split the pile in half.

**Mixture:** Turn the given ratio into two linked amounts (or one free unknown + a multiple) before writing the cost/mass equation — do not treat the ratio as a second price.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

The reconstructed coverage is $25,000, which is less than $30,000.

Related equation(s) from the model:

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000**.

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.`,
      `**B) The fixed administrative fee represents more than 60% of the Auto policy's total premium.** — **FALSE**

214.70/612.50 ≈ 35.05%, which does not exceed 60%.

Related equation(s) from the model:

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000**.`,
      `**C) If the rate per $1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than $75.00.** — **TRUE**

At a 10%-higher rate (5.148): new Home premium = 214.70 + 210(5.148) = $1,295.78, an increase of $98.28 — more than $75.00.

Related equation(s) from the model:

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000**.`,
      `**D) The Home policy's premium per $1,000 of coverage is more than twice the Auto policy's premium per $1,000 of coverage.** — **FALSE**

Home's premium per $1,000 is 1,197.50/210 ≈ $5.70; Auto's is 612.50/85 ≈ $7.21. Home's per-unit rate is actually lower than Auto's, not more than double it — the fixed fee weighs more heavily on the smaller Auto policy.

Related equation(s) from the model:

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000**.`,
      `**E) Combining the Auto and Home coverage into a single hypothetical policy (295 units of $1,000 coverage total) would cost less than the sum of their separate premiums ($612.50 + $1,197.50 = $1,810.00).** — **TRUE**

A combined policy would cost 214.70 + 295(4.68) = $1,595.30, which is less than $1,810.00 because only one fixed fee applies instead of two.

Related equation(s) from the model:

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 58,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + 85y = 612.50 \\\\
x + 210y = 1197.50
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Subtract directly: $125y = 585$, so $y = 4.68$.

$$
125y = 585
$$

$$
y = 4.68
$$

**Step 2.** Substitute back: $x + 397.80 = 612.50$, so $x = 214.70$.

$$
x + 397.80 = 612.50
$$

$$
x = 214.70
$$

**Step 3.** Reconstruct the Renters coverage C:
214.70 + $4.68C = 331.70$, so $C = 25$, i.e.

$$
4.68C = 331.70
$$

$$
C = 25
$$

**Step 4.** $25,000.

**3. Final answer:** Fixed fee = $214.70 | Rate = $4.68/$1,000 | Renters coverage reconstructed = $25,000

**Peel-first:** Strip the fixed fee, tax, or penalty out of each total before writing the two-unknown system — leave only the pure price × quantity rows.

**Exact vs strict:** Several false claims swing on *exact* equality vs *more than* / *less than*. Compute the exact value, then compare — a near miss is still false.

Verify by substituting the final values back into both original equations before judging the statements.`,
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

At Year 6: Species $A = 610 + 4$(72) = 898; Species $B = 730 + 4$(36) = 874. The gap is 24, which exceeds 20.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Species A = +72 individuals/year | Species B = +36 individuals/year**.`,
      `**B) If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.** — **TRUE**

If Species B also grew at 72/year: Species B at Year 6 = 730 + 4(72) = 1,018. New combined total = 898 + 1,018 = 1,916, exceeding the actual 1,772 by 144 — more than 140.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Species A = +72 individuals/year | Species B = +36 individuals/year**.`,
      `**C) The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth : Species B's growth) is greater than 2.5 : 1.** — **FALSE**

Species A's growth over 4 years is 4(72) = 288; Species B's is 4(36) = 144. The ratio is 288/144 = 2.0, not greater than 2.5.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Species A = +72 individuals/year | Species B = +36 individuals/year**.`,
      `**D) At some point between Year 2 and Year 6, the two species had equal populations.** — **TRUE**

At Year 2, Species B leads (730 vs. 610). At Year 6, Species A leads (898 vs. 874). Since both change at a constant linear rate, this reversal means they must have been exactly equal at some point in between.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Species A = +72 individuals/year | Species B = +36 individuals/year**.`,
      `**E) Species A overtakes Species B in total population size before Year 5.** — **FALSE**

Setting 610 + 72(t-2) = 730 + 36(t-2) gives 36(t-2) = 120, so t-2 ≈ 3.33, t ≈ 5.33 — the crossover happens after Year 5, not before.

Related equation(s) from the model:

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Species A = +72 individuals/year | Species B = +36 individuals/year**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 59,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
x + y = 108 \\\\
x = 2y
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Substitute the second into the first: $2y + y = 108$, so $y = 36$.

$$
2y + y = 108
$$

$$
y = 36
$$

**Step 2.** Then $x = 2$(36) = 72.

$$
x = 2
$$

**3. Final answer:** Species A = +72 individuals/year | Species B = +36 individuals/year

Verify by substituting the final values back into both original equations before judging the statements.`,
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
| Day 3 (audit) 1,020 min (=17 | hrs) | 11 hrs 3,553 MWh | (recorded) |`,
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

(145 - 98)/98 = 47/98 ≈ 47.96%, which exceeds 45%.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)**.

**Rate × time:** Each person/plant contributes (rate)×(hours). Percents finished are just the right-hand sides — convert them to decimals before eliminating.`,
      `**B) Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.** — **TRUE**

The discrepancy is 10 MWh, and 10/3,553 ≈ 0.2815%, which is less than 0.3%.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)**.`,
      `**C) If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).** — **FALSE**

With the hours swapped: 29(145) + 36(98) = 4,205 + 3,528 = 7,733 MWh, which is less than the actual 8,062 MWh — giving the higher- output plant fewer hours reduces the grand total.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

Check: using the solved values from above, recompute what the claim asserts. The result disagrees with the wording (wrong figure, wrong direction, wrong threshold, or a fee/distractor left out), so the statement is false.

Values to use: **Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)**.`,
      `**D) The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.** — **TRUE**

$x + y = 145 + 98$ = 243, and 2.4 times Plant B's rate is 2.4(98) = 235.2; 243 exceeds 235.2.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)**.`,
      `**E) Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.** — **TRUE**

3,990 + 4,072 + 3,553 = 11,615 MWh, which exceeds 11,600 MWh.

Related equation(s) from the model:

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

Check: after the system is solved above, substitute the recovered values back into this claim (or recompute the described scenario with those values). The numbers match exactly, so the statement is true.

Values to use: **Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)**.`,
    ],
    difficulty_level: "5/5",
    sort_order: 60,
    solution_overview: `**1. Mathematical model**

Translate each quantitative condition into an equation. (You may name the unknowns however you like.)

$$
\\begin{cases}
14x + 20y = 3990 \\\\
22x + 9y = 4072
\\end{cases}
$$

**2. Solve the system step by step**

We solve carefully with elimination or substitution, writing each algebra step clearly.

**Step 1.** Divide the first by 2: $7x + 10y = 1995$.

$$
7x + 10y = 1995
$$

**Step 2.** Multiply by 9: $63x + 90y = 17955$.

$$
63x + 90y = 17955
$$

**Step 3.** Multiply the second by 10: $220x + 90y = 40720$.

$$
220x + 90y = 40720
$$

**Step 4.** Subtract: $157x
= 22765$, so $x = 145.0$.

$$
157x
= 22765
$$

$$
x = 145.0
$$

**Step 5.** Substitute back: 1015 + $10y = 1995$, so $y = 98.0$.

$$
10y = 1995
$$

$$
y = 98.0
$$

**Step 6.** Audit Day 3: predicted = 17(145) + 11(98) = 3,543 MWh, vs.
3,553 MWh recorded — a 10 MWh discrepancy.

$$
d = 17
$$

**3. Final answer:** Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)

**Rate × time:** Each person/plant contributes (rate)×(hours). Percents finished are just the right-hand sides — convert them to decimals before eliminating.

Verify by substituting the final values back into both original equations before judging the statements.`,
  },
];
