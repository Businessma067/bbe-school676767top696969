/**
 * Chapter 5  -  Linear equations in two unknowns
 * Structured prose + markdown tables from PDF (UI-native, no screenshots).
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [
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
      `**A) The North depot currently holds 360 crates.**  (true)

The two holdings add to $620$, and moving $50$ crates from North to South equalizes them. With $x$ at North and $y$ at South:

$$x+y=620$$

$$x-y=100$$

Adding eliminates $y$:

$$2x=720$$

$$x=360$$

The recovered North count is $360$, so the statement is True.`,
      `**B) The South depot currently holds 240 crates.**  (false)

The same pair of equations:

$$x+y=620$$

$$x-y=100$$

Subtracting eliminates $x$:

$$2y=520$$

$$y=260$$

The claim is $240$, which is $20$ crates short of $260$, so the statement is False.`,
      `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.**  (true)

From the sum and difference,

$$x+y=620,\\qquad x-y=100$$

adding gives $x=360$. Reversing the transfer adds $30$ crates to North:

$$360+30=390$$

North gains crates rather than losing them, so the statement is True.`,
      `**D) The difference between the two depots today is 120 crates.**  (false)

The transfer equation $x-50=y+50$ rearranges at once to today's gap:

$$x-y=100$$

Checking the recovered counts $x=360$ and $y=260$ gives the same figure:

$$360-260=100$$

The claim's $120$ is larger, so the statement is False.`,
      `**E) Moving 50 crates from North to South would leave both depots holding 310 crates each.**  (true)

A transfer does not create or destroy crates, so if the holdings become equal each must be half the total:

$$\\frac{620}{2}=310$$

Checking the recovered pair: $360-50=310$ and $260+50=310$. Both sides match $310$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 1,
    solution_overview: `The North depot and the South depot together hold $620$ crates. If $50$ crates move from North to South, the two holdings become equal.

Let $x$ be crates at North and $y$ crates at South. The conserved total and the equalizing transfer give

$$x+y=620$$

$$x-50=y+50$$

The second equation is the same as $x-y=100$.`,
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
      `Invoice #101 (40 notebooks and 25 pens) totals \\$185.00.`,
      `10 notebooks and 10 pens purchased together would cost \\$53.00.`,
      `Invoice #102 (15 notebooks and 60 pens) totals \\$172.50.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) A notebook costs \\$3.50.**  (true)

The two invoices share the same unit prices. With $x$ the notebook price and $y$ the pen price:

$$40x+25y=185$$

$$15x+60y=160.50$$

Divide the second row by $15$:

$$x+4y=10.70$$

$$x=10.70-4y$$

Substitute into the first invoice:

$$40(10.70-4y)+25y=185$$

$$428-160y+25y=185$$

$$-135y=-243$$

$$y=1.80$$

Then

$$x=10.70-4(1.80)=10.70-7.20=3.50$$

The recovered notebook price is $\\$3.50$, so the statement is True.`,
      `**B) A pen costs \\$2.10.**  (false)

Notebooks and pens are billed at fixed unit prices $x$ and $y$. The invoices are

$$40x+25y=185$$

$$15x+60y=160.50$$

Multiply the second by $\\frac{8}{3}$ so the notebook coefficients match:

$$40x+160y=428$$

Subtract the first invoice:

$$135y=243$$

$$y=1.80$$

The claim is $\\$2.10$, which sits $\\$0.30$ above $1.80$, so the statement is False.`,
      `**C) Invoice #101 (40 notebooks and 25 pens) totals \\$185.00.**  (true)

Invoice #101 is already printed at $\\$185.00$ for $40$ notebooks and $25$ pens. That row is the first observation:

$$40x+25y=185$$

The claimed total is the printed total, so the statement is True.`,
      `**D) 10 notebooks and 10 pens purchased together would cost \\$53.00.**  (true)

The $10$-and-$10$ mix is on neither invoice, so the unit prices have to be recovered first. From the two bills,

$$40x+25y=185$$

$$15x+60y=160.50$$

dividing the second by $15$ gives $x=10.70-4y$. Substituting into the first:

$$40(10.70-4y)+25y=185$$

$$y=1.80,\\qquad x=3.50$$

Costing ten of each:

$$10(3.50)+10(1.80)=35+18=53$$

That mix is $\\$53.00$, so the statement is True.`,
      `**E) Invoice #102 (15 notebooks and 60 pens) totals \\$172.50.**  (false)

Invoice #102 printed $\\$160.50$ for $15$ notebooks and $60$ pens. Recovering the same prices from both invoices,

$$15x+60y=160.50$$

and $x=3.50$, $y=1.80$ rebuilds that row:

$$15(3.50)+60(1.80)=52.50+108=160.50$$

The claim's $\\$172.50$ is $\\$12$ too high, so the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 2,
    solution_overview: `Notebooks and pens keep the same unit prices on both invoices this month.

Let $x$ be the price of one notebook and $y$ the price of one pen. The two printed totals give

$$40x+25y=185$$

$$15x+60y=160.50$$`,
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
      `The Saturday matinee (90 adult, 150 child) generated \\$2,050.00 in revenue.`,
      `The Saturday evening session (160 adult, 40 child) generated \\$2,300.00 in revenue.`,
      `50 adult tickets and 50 child tickets together would generate \\$1,000.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) An adult ticket costs \\$12.00.**  (true)

The two sessions share the same ticket prices. With $a$ adult and $c$ child:

$$90a+150c=2130$$

$$160a+40c=2200$$

Divide the evening row by $40$:

$$4a+c=55$$

$$c=55-4a$$

Substitute into the matinee:

$$90a+150(55-4a)=2130$$

$$90a+8250-600a=2130$$

$$-510a=-6120$$

$$a=12$$

The recovered adult price is $\\$12.00$, so the statement is True.`,
      `**B) A child ticket costs \\$7.00.**  (true)

Adult and child tickets are $a$ and $c$ throughout the day. The evening session divides cleanly:

$$160a+40c=2200$$

$$4a+c=55$$

The matinee is $90a+150c=2130$. Putting $c=55-4a$ into that row yields $a=12$, and then

$$c=55-4(12)=55-48=7$$

The recovered child price is $\\$7.00$, so the statement is True.`,
      `**C) The Saturday matinee (90 adult, 150 child) generated \\$2,050.00 in revenue.**  (false)

The box-office already logged the matinee at $\\$2{,}130$. Rebuilding that mix at the recovered prices $a=12$ and $c=7$:

$$90(12)+150(7)=1080+1050=2130$$

The claimed $\\$2{,}050$ sits $\\$80$ below the logged figure, so the statement is False.`,
      `**D) The Saturday evening session (160 adult, 40 child) generated \\$2,300.00 in revenue.**  (false)

The evening session was logged at $\\$2{,}200$. From the evening equation divided by $40$,

$$4a+c=55$$

the pair $a=12$, $c=7$ rebuilds the printed revenue:

$$160(12)+40(7)=1920+280=2200$$

The claimed $\\$2{,}300$ is $\\$100$ too high, so the statement is False.`,
      `**E) 50 adult tickets and 50 child tickets together would generate \\$1,000.00.**  (false)

A $50$-and-$50$ split matches neither logged session, so the prices must be recovered first. The evening row $160a+40c=2200$ divides to $c=55-4a$. The matinee then forces $a=12$ and $c=7$. Costing fifty of each:

$$50(12)+50(7)=600+350=950$$

That is $\\$950$, not $\\$1{,}000$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 3,
    solution_overview: `Adult and child tickets keep the same prices across both Saturday sessions.

Let $a$ be the adult price and $c$ the child price. The two logged revenues give

$$90a+150c=2130$$

$$160a+40c=2200$$`,
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
      `**A) A sandwich costs \\$7.00.**  (true)

The $\\$8$ delivery fee is not part of either food price, so both receipts must be peeled first:

$$6x+4y=70-8=62$$

$$3x+9y=74-8=66$$

Double the second food equation:

$$6x+18y=132$$

Subtract the first:

$$14y=70$$

$$y=5$$

Then $3x+9(5)=66$ gives $3x=21$, so $x=7$. The recovered sandwich price is $\\$7.00$, so the statement is True.`,
      `**B) A wrap costs \\$5.00.**  (true)

After removing the flat $\\$8$ fee, the food equations are

$$6x+4y=62$$

$$3x+9y=66$$

Doubling the second and subtracting the first isolates wraps:

$$14y=70$$

$$y=5$$

The recovered wrap price is $\\$5.00$, so the statement is True.`,
      `**C) Receipt A's food subtotal, before the \\$8.00 delivery fee is added, is \\$62.00.**  (true)

Receipt A was charged $\\$70$ including the flat $\\$8$ fee. The food subtotal is the charged total minus that fee:

$$70-8=62$$

Rebuilding the food mix at $x=7$ and $y=5$ confirms the same figure:

$$6(7)+4(5)=42+20=62$$

so the statement is True.`,
      `**D) Receipt B's total, including the \\$8.00 delivery fee, is \\$74.00.**  (true)

Receipt B is printed at $\\$74$, fee included. That is the charged total in the stem, so the statement is True.`,
      `**E) A pickup order of 5 sandwiches and 5 wraps would cost \\$60.00.**  (true)

A pickup order carries no delivery fee, so only the food prices matter. Peeling $\\$8$ off both receipts gives $6x+4y=62$ and $3x+9y=66$, which recover $x=7$ and $y=5$. Five of each then costs

$$5(7)+5(5)=35+25=60$$

That is $\\$60$ with no fee added, so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 4,
    solution_overview: `Each receipt adds a flat $\\$8$ delivery fee on top of the food. Sandwiches and wraps keep fixed unit prices.

Let $x$ be the sandwich price and $y$ the wrap price. Peeling the fee off both charged totals leaves the food system

$$6x+4y=62$$

$$3x+9y=66$$`,
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
      `**A) \\$6,500 was placed in Account A.**  (false)

The split and the interest total are

$$x+y=10000$$

$$0.04x+0.07y=520$$

Substitute $x=10000-y$ into the interest equation:

$$0.04(10000-y)+0.07y=520$$

$$400+0.03y=520$$

$$0.03y=120$$

$$y=4000$$

Then $x=10000-4000=6000$. The claim's $\\$6{,}500$ overshoots the recovered principal, so the statement is False.`,
      `**B) \\$4,500 was placed in Account B.**  (false)

With $x$ in the $4\\%$ account and $y$ in the $7\\%$ account,

$$x+y=10000$$

$$0.04x+0.07y=520$$

the interest gap isolates $y$:

$$0.03y=120$$

$$y=4000$$

The claim is $\\$4{,}500$. Even the claimed pair fails the total, since $6500+4500=11000$, so the statement is False.`,
      `**C) Account A earned \\$260.00 in interest over the year.**  (false)

From $x+y=10000$ and $0.04x+0.07y=520$, the principals are $x=6000$ and $y=4000$. Account A's interest is then

$$0.04\\times 6000=240$$

That is $\\$240$, not the claimed $\\$260$, so the statement is False.`,
      `**D) Account B earned \\$210.00 in interest over the year.**  (false)

The same principals $x=6000$ and $y=4000$ give Account B's interest as

$$0.07\\times 4000=280$$

The claim is $\\$210$. The two interest figures also add to the year's $\\$520$, since $240+280=520$, so the statement is False.`,
      `**E) Had the entire \\$10,000 been placed in Account B alone, total interest for the year would have been \\$700.00.**  (true)

This letter does not need the split. Account B pays $7\\%$ simple interest on whatever principal it holds, so parking the whole $\\$10{,}000$ there earns

$$0.07\\times 10000=700$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 5,
    solution_overview: `The $\\$10{,}000$ is split between a $4\\%$ account and a $7\\%$ account, and the two accounts together earn $\\$520$ of simple interest.

Let $x$ be the amount in Account A and $y$ the amount in Account B. The conserved principal and the interest total give

$$x+y=10000$$

$$0.04x+0.07y=520$$`,
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
      `**A) A Standard chair is priced at \\$304.00.**  (true)

Premium sits $\\$45$ above Standard, and the shipment totals $\\$9{,}660$:

$$y=x+45$$

$$18x+12y=9660$$

Substitute the gap into the shipment:

$$18x+12(x+45)=9660$$

$$30x+540=9660$$

$$30x=9120$$

$$x=304$$

The recovered Standard price is $\\$304.00$, so the statement is True.`,
      `**B) A Premium chair is priced at \\$354.00.**  (false)

The catalogue rule is $y=x+45$, and the shipment is $18x+12y=9660$. Substituting gives $x=304$, so

$$y=304+45=349$$

The claim is $\\$354$, five dollars above $349$, so the statement is False.`,
      `**C) The 12 Premium chairs in the shipment are worth \\$4,188.00 in total.**  (true)

From $y=x+45$ and $18x+12y=9660$, the Premium price is $y=349$. The twelve Premium chairs in the shipment are then worth

$$12(349)=4188$$

so the statement is True.`,
      `**D) The price gap between one Premium chair and one Standard chair is \\$45.00.**  (true)

The catalogue already prices Premium exactly $\\$45$ above Standard:

$$y=x+45$$

Checking the recovered pair $x=304$ and $y=349$ gives the same gap:

$$349-304=45$$

so the statement is True.`,
      `**E) A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than \\$3,000.00.**  (true)

The $5$-and-$5$ mix is not the shipment, so the unit prices must be recovered first. Substituting $y=x+45$ into $18x+12y=9660$ yields $x=304$ and $y=349$. Five of each then costs

$$5(304)+5(349)=1520+1745=3265$$

Since $3265>3000$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 6,
    solution_overview: `Premium chairs are priced exactly $\\$45$ above Standard chairs. A shipment of $18$ Standard and $12$ Premium chairs is valued at $\\$9{,}660$.

Let $x$ be the Standard price and $y$ the Premium price. The catalogue gap and the shipment value give

$$y=x+45$$

$$18x+12y=9660$$`,
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
      `The advertised rate (\\$0.30 per minute) is more than double a rival plan's rate of \\$0.20 per minute.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) ByteMobile's fixed monthly fee is \\$17.00.**  (true)

The two billed customers differ only in extra minutes:

$$f+40r=29$$

$$f+120r=53$$

Subtract:

$$80r=24$$

$$r=0.30$$

Then $f+40(0.30)=29$ gives $f=17$. The recovered fee is $\\$17.00$, so the statement is True.`,
      `**B) The extra-minute rate advertised is \\$0.30 per minute.**  (true)

The $\\$24$ gap between the two bills is $80$ extra minutes' worth of the rate:

$$(f+120r)-(f+40r)=53-29$$

$$80r=24$$

$$r=0.30$$

The advertised extra-minute rate is $\\$0.30$ per minute, so the statement is True.`,
      `**C) A customer using 200 extra minutes in a month would pay \\$80.00.**  (false)

From $f+40r=29$ and $f+120r=53$, the pair is $f=17$ and $r=0.30$. A month with $200$ extra minutes is then

$$17+200(0.30)=17+60=77$$

The bill is $\\$77$, not $\\$80$, so the statement is False.`,
      `**D) A customer using 0 extra minutes would pay \\$0.00 that month.**  (false)

A month with no extra minutes still costs the recovered fee. From the two bills, $f=17$, so

$$17+0(0.30)=17$$

The customer would still owe $\\$17$, not $\\$0$, so the statement is False.`,
      `**E) The advertised rate (\\$0.30 per minute) is more than double a rival plan's rate of \\$0.20 per minute.**  (false)

The recovered rate is $r=0.30$. Double the rival's $0.20$ would be

$$2\\times 0.20=0.40$$

Since $0.30<0.40$, ByteMobile's rate is not more than double the rival's, so the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 7,
    solution_overview: `Each quoted bill is a fixed monthly fee plus a constant charge per extra minute.

Let $f$ be the fee and $r$ the extra-minute rate. The two example bills give

$$f+40r=29$$

$$f+120r=53$$`,
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
      `**A) The division built 75 Standard ovens this week.**  (true)

The week's count and hours are

$$s+d=130$$

$$4s+9d=795$$

Substitute $s=130-d$ into the hours equation:

$$4(130-d)+9d=795$$

$$520+5d=795$$

$$5d=275$$

$$d=55$$

Then $s=130-55=75$. The recovered Standard count is $75$, so the statement is True.`,
      `**B) The division built 45 Deluxe ovens this week.**  (false)

From $s+d=130$ and $4s+9d=795$, eliminating $s$ gives $5d=275$, so $d=55$. The claim is $45$ Deluxe ovens, ten short of $55$, so the statement is False.`,
      `**C) Standard ovens accounted for 300 assembly hours this week.**  (true)

The recovered Standard count is $s=75$, and each Standard oven takes $4$ hours:

$$4\\times 75=300$$

Standard ovens accounted for $300$ hours, so the statement is True.`,
      `**D) Deluxe ovens accounted for 500 assembly hours this week.**  (false)

Each Deluxe oven takes $9$ hours, and $d=55$:

$$9\\times 55=495$$

Deluxe ovens accounted for $495$ hours, five short of the claimed $500$, so the statement is False.`,
      `**E) The total material cost of all Standard ovens built this week is \\$9,000.00.**  (true)

This is where the material-cost column matters. Standard ovens cost $\\$120$ each, and $s=75$:

$$75\\times 120=9000$$

The Standard material total is $\\$9{,}000$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 8,
    solution_overview: `The division built $130$ ovens and logged $795$ assembly hours. Standard ovens take $4$ hours each and Deluxe ovens take $9$.

Let $s$ be the number of Standard ovens and $d$ the number of Deluxe ovens. The count and the hours give

$$s+d=130$$

$$4s+9d=795$$

The material-cost column is not needed to recover $s$ and $d$.`,
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
      `Riverside's net sales (after its \\$460 in returns) were \\$9,300.00.`,
      `Hillcrest's gross sales (before its \\$300 in returns) were \\$9,300.00.`,
      `Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sofa sells for \\$350.00.**  (true)

Riverside's net is $9760-460=9300$ and Hillcrest's net is $9300-300=9000$:

$$14x+22y=9300$$

$$20x+10y=9000$$

Divide Hillcrest by $10$:

$$2x+y=900$$

$$y=900-2x$$

Substitute into Riverside:

$$14x+22(900-2x)=9300$$

$$14x+19800-44x=9300$$

$$-30x=-10500$$

$$x=350$$

The recovered sofa price is $\\$350.00$, so the statement is True.`,
      `**B) An armchair sells for \\$200.00.**  (true)

After peeling returns, Hillcrest divides to $2x+y=900$. Riverside then forces $x=350$, so

$$y=900-2(350)=900-700=200$$

The recovered armchair price is $\\$200.00$, so the statement is True.`,
      `**C) Riverside's net sales (after its \\$460 in returns) were \\$9,300.00.**  (true)

Riverside's net sales are gross minus returns:

$$9760-460=9300$$

Rebuilding Riverside at $x=350$ and $y=200$ confirms the same net:

$$14(350)+22(200)=4900+4400=9300$$

so the statement is True.`,
      `**D) Hillcrest's gross sales (before its \\$300 in returns) were \\$9,300.00.**  (true)

Hillcrest's printed gross is already $\\$9{,}300$. Net sales sit $\\$300$ below that, and the $20$ sofas and $10$ armchairs account for the net:

$$20(350)+10(200)=7000+2000=9000$$

$$9000+300=9300$$

so the statement is True.`,
      `**E) Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.**  (true)

Net sales are gross minus returns. If Riverside's returns are zero, the two figures coincide:

$$9760-0=9760$$

Both would read $\\$9{,}760$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 9,
    solution_overview: `Net sales, not gross, are the value of items sold at listed prices. Sofas and armchairs keep company-wide unit prices.

Let $x$ be the sofa price and $y$ the armchair price. Subtracting each branch's returns leaves

$$14x+22y=9300$$

$$20x+10y=9000$$`,
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
      `**A) PrintFast's setup fee is \\$12.00.**  (false)

The two PrintFast orders differ only in page count:

$$f+120r=33$$

$$f+300r=69$$

Subtract:

$$180r=36$$

$$r=0.20$$

Then $f+120(0.20)=33$ gives $f=9$. The recovered setup fee is $\\$9$, not $\\$12$, so the statement is False.`,
      `**B) PrintFast's per-page rate is \\$0.25.**  (false)

Subtracting the two invoices isolates the page rate:

$$(f+300r)-(f+120r)=69-33$$

$$180r=36$$

$$r=0.20$$

The claim is $\\$0.25$ per page, five cents above $0.20$, so the statement is False.`,
      `**C) A 250-page order at PrintFast would cost \\$60.00.**  (false)

From $f+120r=33$ and $f+300r=69$, the pair is $f=9$ and $r=0.20$. A $250$-page order at PrintFast is then

$$9+250(0.20)=9+50=59$$

That is $\\$59$, not $\\$60$, so the statement is False.`,
      `**D) For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat \\$60.00 fee.**  (false)

QuickCopy charges a flat $\\$60$ up to $350$ pages. PrintFast's recovered rule $f=9$, $r=0.20$ prices $350$ pages at

$$9+350(0.20)=9+70=79$$

Since $79>60$, PrintFast is more expensive at that length, not cheaper, so the statement is False.`,
      `**E) Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.**  (true)

The two invoices cover different page counts, so subtracting them isolates a unique rate: the coefficient $300-120=180$ is not zero. That forces a unique pair $(f,r)=(9,0.20)$. Had both orders covered the same number of pages, the fee would cancel and leave $r$ undetermined, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 10,
    solution_overview: `PrintFast charges a setup fee plus a constant per-page rate. QuickCopy instead charges a flat $\\$60$ for any order up to $350$ pages.

Let $f$ be PrintFast's setup fee and $r$ the per-page rate. The two PrintFast invoices give

$$f+120r=33$$

$$f+300r=69$$`,
  },
  {
    id: `math-5-11`,
    case_id: `MATH 5.11`,
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

Ana's receipt and Ben's $\\$5$ gap give

$$4x+3y=32$$

$$2x+5y=37$$

Double the second and subtract the first:

$$7y=42$$

$$y=6$$

Ben's five burritos alone cost $5(6)=30$. Ana's whole order was $\\$32$, and $30<32$, so the statement is False.`,
      `**B) A burrito costs \\$2.50 more than a taco.**  (true)

From $4x+3y=32$ and $2x+5y=37$, doubling Ben's row and subtracting Ana's isolates $y=6$. Then $4x+18=32$ gives $x=3.50$. The gap is

$$6-3.50=2.50$$

A burrito sits $\\$2.50$ above a taco, so the statement is True.`,
      `**C) Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than \\$28.00.**  (true)

The recovered pair is $x=3.50$ and $y=6$. Dropping one burrito from Ana's order leaves

$$4(3.50)+2(6)=14+12=26$$

Since $26<28$, so the statement is True.`,
      `**D) Ben's total order price exceeds \\$40.00.**  (false)

Ben paid $\\$5$ more than Ana's $\\$32$:

$$32+5=37$$

Rebuilding his mix at $x=3.50$ and $y=6$ confirms $2(3.50)+5(6)=37$. Since $37$ does not exceed $40$, so the statement is False.`,
      `**E) Buying 6 tacos and 6 burritos together would cost \\$57.00.**  (true)

A $6$-and-$6$ mix matches neither receipt, so recover $x=3.50$ and $y=6$ from $4x+3y=32$ and $2x+5y=37$, then cost the new mix:

$$6(3.50)+6(6)=21+36=57$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 11,
    solution_overview: `Ana paid $\\$32$ for $4$ tacos and $3$ burritos. Ben ordered $2$ tacos and $5$ burritos and paid $\\$5$ more than Ana.

Let $x$ be the taco price and $y$ the burrito price. Ben's total is $32+5=37$, so the two receipts give

$$4x+3y=32$$

$$2x+5y=37$$`,
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
      `Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been \\$1,200 higher.`,
      `A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.`,
      `The reported \\$8,540 total could also have come from selling 310 hardcovers alone.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) A paperback price of \\$12 is consistent with the pricing desk's \\$5 gap rule.**  (true)

The pricing rule and the combined revenue are

$$y=x+5$$

$$400x+220y=8540$$

Substitute:

$$400x+220(x+5)=8540$$

$$620x+1100=8540$$

$$620x=7440$$

$$x=12$$

A paperback at $\\$12$ fits the $\\$5$ gap, so the statement is True.`,
      `**B) Hardcover editions are priced above \\$18.**  (false)

Substituting $y=x+5$ into $400x+220y=8540$ recovers $x=12$, so

$$y=12+5=17$$

Hardcovers are $\\$17$, which is not above $\\$18$, so the statement is False.`,
      `**C) Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been \\$1,200 higher.**  (true)

The recovered paperback price is $x=12$. Selling $100$ extra paperbacks, hardcovers unchanged, adds

$$100\\times 12=1200$$

so the statement is True.`,
      `**D) A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.**  (false)

From $y=x+5$ and the revenue row, $x=12$ and $y=17$. Three hardcovers and two paperbacks cost

$$3(17)+2(12)=51+24=75$$

That equals $\\$75$, so it is not less than $\\$75$, so the statement is False.`,
      `**E) The reported \\$8,540 total could also have come from selling 310 hardcovers alone.**  (false)

At the recovered hardcover price $y=17$, three hundred ten hardcovers alone would bring

$$310\\times 17=5270$$

That is far below the reported $\\$8{,}540$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 12,
    solution_overview: `Hardcovers are priced exactly $\\$5$ above paperbacks. The desk sold $400$ paperbacks and $220$ hardcovers for $\\$8{,}540$ combined. Staff count and loyalty share are unused.

Let $x$ be the paperback price and $y$ the hardcover price. The gap and the revenue give

$$y=x+5$$

$$400x+220y=8540$$`,
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
      `**A) The Standard plan has a lower base fee than the advertised Basic plan.**  (false)

Subtracting the two Standard bills isolates the overage rate:

$$(x+8y)-(x+3y)=62-47$$

$$5y=15$$

$$y=3$$

Then $x+9=47$ gives $x=38$. Basic's base is only $\\$15$, so Standard's base is higher, not lower, so the statement is False.`,
      `**B) The overage rate on the Standard plan is \\$3.00 per GB.**  (true)

The $\\$15$ gap between March and April is $5$ GB of overage:

$$5y=15$$

$$y=3$$

The Standard overage rate is $\\$3$ per GB, so the statement is True.`,
      `**C) A Standard customer using 10 GB of overage in May would be billed \\$68.00.**  (true)

Standard recovers as $x=38$ and $y=3$. Ten GB of overage would bill

$$38+10(3)=38+30=68$$

so the statement is True.`,
      `**D) Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.**  (true)

A Standard customer with $5$ GB of overage pays $38+5(3)=53$. Premium is a flat $\\$40$, and $53>40$, so switching to Premium saves money so the statement is True.`,
      `**E) For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.**  (true)

Basic at $8$ GB is $15+8(2)=31$. Standard's March bill for the same $8$ GB is $\\$62$. Since $31<62$, Basic is cheaper, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 13,
    solution_overview: `The Standard plan's base fee and overage rate are not printed; they have to be read off March and April. Basic is $\\$15$ plus $\\$2$ per GB, and Premium is a flat $\\$40$.

Let $x$ be Standard's monthly base and $y$ the Standard overage rate per GB. The two Standard bills give

$$x+8y=62$$

$$x+3y=47$$`,
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
      `Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.`,
      `Including the 8% tax, a single Suite night costs \\$226.80.`,
      `Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by \\$210.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) After removing the occupancy tax, Weekend 1's booking revenue was \\$2,240.00.**  (true)

Weekend 1's charged total includes $8\\%$ tax. Stripping that tax leaves

$$\\frac{2419.20}{1.08}=2240$$

so the statement is True.`,
      `**B) A Suite costs \\$200 more per night than a Standard room.**  (false)

After dividing both charged totals by $1.08$,

$$10x+4y=2240$$

$$7x+9y=2870$$

the pair is $x=140$ and $y=210$. The gap is

$$210-140=70$$

not $\\$200$, so the statement is False.`,
      `**C) Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.**  (false)

Six Standard rooms pre-tax cost $6(140)=840$. Four Suites cost $4(210)=840$. The two bookings cost the same, so six Standards are not cheaper, so the statement is False.`,
      `**D) Including the 8% tax, a single Suite night costs \\$226.80.**  (true)

A Suite's pre-tax rate is $y=210$. Adding the $8\\%$ tax:

$$210\\times 1.08=226.80$$

so the statement is True.`,
      `**E) Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by \\$210.**  (true)

One extra Suite at the recovered pre-tax rate adds

$$210$$

to Weekend 2's pre-tax revenue, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 14,
    solution_overview: `Every charged total includes an $8\\%$ occupancy tax, so the pre-tax room revenue is the charged figure divided by $1.08$. Standard rooms and suites keep fixed pre-tax nightly rates.

Let $x$ be the Standard pre-tax rate and $y$ the Suite pre-tax rate. Weekend 1 charged $\\$2{,}419.20$ and Weekend 2 charged $\\$3{,}099.60$, so the pre-tax system is

$$10x+4y=\\frac{2419.20}{1.08}=2240$$

$$7x+9y=\\frac{3099.60}{1.08}=2870$$`,
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
      `If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be \\$4,700.`,
      `The combined actual inventory value recorded for January and February is \\$6,810.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Component A's unit cost is \\$12.**  (true)

The actual inventory equations are

$$150x+90y=3150$$

$$130x+140y=3660$$

Dividing by $30$ and $10$ and eliminating $y$ recovers $x=12$. Component A's unit cost is $\\$12$, so the statement is True.`,
      `**B) Component B's unit cost is \\$18.**  (false)

The same January/February system recovers $y=15$, not $\\$18$. The forecast row is unused. The claim overstates B's cost, so the statement is False.`,
      `**C) The March forecast assumes higher unit prices than what actually applied in January and February.**  (true)

At the actual costs $x=12$ and $y=15$, March's $200$ A and $100$ B would be worth

$$200(12)+100(15)=2400+1500=3900$$

The forecast lists $\\$4{,}700$, which is higher, so the statement is True.`,
      `**D) If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be \\$4,700.**  (false)

Valuing March's quantities at the actual costs gives $\\$3{,}900$, not the forecast $\\$4{,}700$, so the statement is False.`,
      `**E) The combined actual inventory value recorded for January and February is \\$6,810.**  (true)

January recorded $\\$3{,}150$ and February recorded $\\$3{,}660$:

$$3150+3660=6810$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 15,
    solution_overview: `January and February are actual counts; March is only a forecast and is not used to recover today's unit costs.

Let $x$ be Component A's unit cost and $y$ Component B's. The two actual rows give

$$150x+90y=3150$$

$$130x+140y=3660$$`,
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
      `**A) The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.**  (false)

Subtracting the two payroll rows cancels regular pay:

$$4y=96$$

$$y=24$$

Then $40x+48=608$ gives $x=14$. The contract would have paid $1.5(14)=21$ for overtime, and $24\\neq 21$, so the statement is False.`,
      `**B) The regular hourly wage is \\$14.**  (true)

From $40x+6y=704$ and $40x+2y=608$, the regular wage is $x=14$. That is $\\$14$ per hour, so the statement is True.`,
      `**C) Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly \\$6.00 on their overtime hours.**  (true)

The actual overtime rate is $y=24$ and the contract rate is $21$. Worker 2 had $2$ overtime hours, so the overpayment is

$$2(24-21)=6$$

so the statement is True.`,
      `**D) A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn \\$656.**  (true)

A third worker at the rates actually used, $x=14$ and $y=24$, with $4$ overtime hours earns

$$40(14)+4(24)=560+96=656$$

so the statement is True.`,
      `**E) That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn \\$644.**  (true)

Under the contract, overtime is $1.5(14)=21$. The same $40+4$ hours then pay

$$40(14)+4(21)=560+84=644$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 16,
    solution_overview: `Both workers completed $40$ regular hours. The contract requires overtime at $1.5$ times the regular wage; the payroll rows show what was actually paid.

Let $x$ be the regular hourly wage and $y$ the overtime rate actually paid. The two pay packets give

$$40x+6y=704$$

$$40x+2y=608$$`,
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
      `**A) The billing office's claim of an \\$18.00 fixed monthly charge is correct.**  (false)

May's underlying charge is $56.10/1.10=51$. Subtracting the two clean bills:

$$7y=14$$

$$y=2$$

Then $x+36=51$ gives $x=15$. The office claimed $\\$18$, so the statement is False.`,
      `**B) The rate charged is \\$2.00 per cubic metre.**  (true)

The $7\\,\\mathrm{m}^{3}$ gap between June and the peeled May bill is

$$7y=14$$

$$y=2$$

The rate is $\\$2.00$ per cubic metre, so the statement is True.`,
      `**C) After removing the late penalty, May's actual water charge was \\$51.00.**  (true)

May's billed $\\$56.10$ already includes a $10\\%$ late penalty on the entire charge:

$$\\frac{56.10}{1.10}=51$$

so the statement is True.`,
      `**D) A customer using 40 m³ in a month would be billed \\$85.00.**  (false)

From $x=15$ and $y=2$, a $40\\,\\mathrm{m}^{3}$ month bills

$$15+40(2)=15+80=95$$

not $\\$85$, so the statement is False.`,
      `**E) Had the same 10% late penalty been applied to June's \\$65.00 bill, the total would have been \\$71.50.**  (true)

Applying the same $10\\%$ penalty to June's $\\$65$ gives

$$65\\times 1.10=71.50$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 17,
    solution_overview: `May's $\\$56.10$ includes a $10\\%$ late penalty on the whole bill, so the underlying water charge is $56.10/1.10$. June has no penalty. The billing office's $\\$18$ fee and $\\$1.85$ rate are a claim, not inputs.

Let $x$ be the fixed monthly charge and $y$ the rate per cubic metre. After peeling May's penalty,

$$x+18y=51$$

$$x+25y=65$$`,
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
      `**A) For a 10 km ride, CityCab works out cheaper than MetroX.**  (true)

CityCab's $12\\,\\mathrm{km}$ gap between the two rides isolates $r=1$, so $c=6$. MetroX's $10\\,\\mathrm{km}$ gap isolates $s=1.50$, so $m=6$. A $10\\,\\mathrm{km}$ ride then costs

$$6+10(1)=16$$

on CityCab and $6+10(1.50)=21$ on MetroX. CityCab is cheaper, so the statement is True.`,
      `**B) Both companies charge the same base fare of \\$6.00.**  (true)

CityCab: $c+8r=14$ and $c+20r=26$ recover $c=6$. MetroX: $m+5s=13.50$ and $m+15s=28.50$ recover $m=6$. Both bases are $\\$6.00$, so the statement is True.`,
      `**C) For distances under 4 km, MetroX would be cheaper than CityCab.**  (false)

Both companies share the $\\$6$ base, but MetroX's rate $s=1.50$ exceeds CityCab's $r=1$. For any positive distance MetroX is strictly more expensive, so it is not cheaper under $4\\,\\mathrm{km}$, so the statement is False.`,
      `**D) A 30 km CityCab ride costs \\$36.00.**  (true)

CityCab's recovered rule is $6+r$ with $r=1$. Thirty kilometres cost

$$6+30(1)=36$$

so the statement is True.`,
      `**E) There is a distance of 5 km at which both companies charge exactly the same fare.**  (false)

Setting $6+d=6+1.50d$ forces $d=0$. There is no $5\\,\\mathrm{km}$ distance at which the fares match, so the statement is False.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 18,
    solution_overview: `Each company charges its own base fare plus a constant per-kilometre rate. CityCab's $20\\,\\mathrm{km}$ ride cost $\\$12$ more than its $8\\,\\mathrm{km}$ ride. MetroX's $15\\,\\mathrm{km}$ ride cost $\\$15$ more than its $5\\,\\mathrm{km}$ ride.

Let $c$ and $r$ be CityCab's base and rate, and $m$ and $s$ MetroX's. The four observations give

$$c+8r=14$$

$$c+20r=26$$

$$m+5s=13.50$$

$$m+15s=28.50$$`,
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
      `**A) Vendor A charges less than Vendor B for Product X.**  (true)

Vendor A's two bundles recover $x_A$ and $y_A$ from

$$20x_A+15y_A=450$$

$$25x_A+12y_A=441$$

which give $x_A=9$. Vendor B's two bundles recover $x_B=11$. Since $9<11$, Vendor A is cheaper on X, so the statement is True.`,
      `**B) Vendor B charges less than Vendor A for Product Y.**  (true)

The same four bundle equations give $y_A=18$ and $y_B=16$. Since $16<18$, Vendor B is cheaper on Y, so the statement is True.`,
      `**C) For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.**  (true)

The upcoming mix is $40$ of X and $30$ of Y. At the recovered prices,

$$40(9)+30(18)=360+540=900$$

for Vendor A and $40(11)+30(16)=920$ for Vendor B. Vendor A is cheaper overall, so the statement is True.`,
      `**D) Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by \\$20.**  (false)

Switching the $40$/$30$ order to Vendor B raises the total from $\\$900$ to $\\$920$, an increase of $\\$20$, not a reduction, so the statement is False.`,
      `**E) If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.**  (true)

Sixty units of Y only cost $60(18)=1080$ at Vendor A and $60(16)=960$ at Vendor B. Vendor B is cheaper, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 19,
    solution_overview: `Each vendor quotes two bundles at its own pair of unit prices. Bramble needs $40$ of X and $30$ of Y next month.

Let $x_A,y_A$ be Vendor A's prices and $x_B,y_B$ Vendor B's. The four bundle totals give

$$20x_A+15y_A=450$$

$$25x_A+12y_A=441$$

$$20x_B+15y_B=460$$

$$25x_B+12y_B=467$$`,
  },
  {
    id: `math-5-20`,
    case_id: `MATH 5.20`,
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

Beta earned $\\$1{,}000$ more than Alpha and the two revenues sum to $\\$27{,}200$, so Alpha has $13100$ and Beta $14100$:

$$150p+80q=13100$$

$$100p+130q=14100$$

The unique pair is $p=50$ and $q=70$, so the statement is True.`,
      `**B) Beta generated more Q1 revenue than Alpha.**  (true)

Beta earned $\\$1{,}000$ more than Alpha, so Beta's Q1 revenue is larger, so the statement is True.`,
      `**C) If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.**  (false)

Alpha's P revenue is $150(50)=7500$. A $10\\%$ rise in P's price, volumes unchanged, adds $750$, which is not $10\\%$ of Alpha's whole $13100$. so the statement is False.`,
      `**D) Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.**  (false)

After that $10\\%$ P increase Alpha would have $13100+750=13850$. Beta's Q1 total is $14100$, and $13850<14100$, so the statement is False.`,
      `**E) Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.**  (true)

Beta's Q subscriptions bring $130(70)=9100$. Alpha's entire P line is $150(50)=7500$. Since $9100>7500$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 20,
    solution_overview: `Alpha and Beta sell Product P and Service Q at the same market prices. Combined Q1 revenue is $\\$27{,}200$, and Beta earned $\\$1{,}000$ more than Alpha. Headcount growth is unused.

Let $p$ be the price of P and $q$ the price of Q. Alpha's revenue is $13100$ and Beta's is $14100$, so

$$150p+80q=13100$$

$$100p+130q=14100$$`,
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
      `**A) The flyer's advertised \\$30 signup fee matches what members are actually being charged.**  (false)

Subtracting Maria from Jason isolates the monthly rate:

$$4y=164$$

$$y=41$$

Then $x+6(41)=284$ gives $x=38$. The flyer claimed $\\$30$, so the statement is False.`,
      `**B) The monthly rate members are actually paying is lower than the advertised \\$45/month.**  (true)

The four extra months between Jason and Maria cost $448-284=164$:

$$4y=164$$

$$y=41$$

Since $41<45$, members pay less per month than the flyer states, so the statement is True.`,
      `**C) Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.**  (false)

The flyer's advertised rule at six months is

$$30+6(45)=30+270=300$$

Maria actually paid $\\$284$. Since $284<300$, her total does not exceed the flyer figure, so the statement is False.`,
      `**D) Jason paid more than \\$400 in total by his 10th payment.**  (true)

Jason's listed total is already $\\$448$, and $448>400$. Rebuilding at $x=38$ and $y=41$ gives $38+10(41)=448$ as well, so the statement is True.`,
      `**E) A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay \\$492.**  (true)

Dropping the recovered signup fee and paying only $y=41$ for twelve months:

$$12\\times 41=492$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 21,
    solution_overview: `The flyer claims a $\\$30$ signup fee and $\\$45$ per month. Maria's and Jason's actual totals are the data.

Let $x$ be the signup fee actually charged and $y$ the actual monthly rate. The two payment histories give

$$x+6y=284$$

$$x+10y=448$$`,
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
      `**A) The Basic plan costs \\$19 per month.**  (true)

Double Household 2 and subtract Household 1:

$$(4x+14y)-(4x+3y)=510-169$$

$$11y=341$$

$$y=31$$

Then $4x+93=169$ gives $x=19$. Basic is $\\$19$ per month, so the statement is True.`,
      `**B) The Premium plan costs \\$35 per month.**  (false)

The same two household equations recover $y=31$, not $\\$35$. Premium is $\\$31$ per month, so the statement is False.`,
      `**C) Household 2's combined total is more than double Household 1's combined total.**  (false)

Household 2 billed $\\$255$ and Household 1 billed $\\$169$. Double Household 1 is $338$, and $255<338$, so Household 2 is not more than double, so the statement is False.`,
      `**D) There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.**  (false)

Equal cost for $n$ months of only Basic versus only Premium would require $nx=ny$, hence $x=y$. The recovered prices are $19$ and $31$, which are not equal, so the statement is False.`,
      `**E) A household billed for 5 months of Basic and 5 months of Premium would owe a combined \\$250.**  (true)

Five months of each plan, at $x=19$ and $y=31$, cost

$$5(19)+5(31)=95+155=250$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 22,
    solution_overview: `Basic and Premium are flat monthly plans with no connection fee.

Let $x$ be the Basic monthly price and $y$ the Premium monthly price. The two household mixes give

$$4x+3y=169$$

$$2x+7y=255$$`,
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
      `**A) Organic apples cost \\$4.80 per pound.**  (true)

Receipt 1's unknown items total $50-3.60-4.40=42$, and Receipt 2's unknown items total $43.20-3.60=39.60$:

$$5x+3y=42$$

$$2x+5y=39.60$$

Eliminating $x$ recovers $y=6$ and then $x=4.80$. Apples are $\\$4.80$ per pound, so the statement is True.`,
      `**B) Almond milk costs less than organic apples, per unit.**  (false)

The same leftover system recovers $x=4.80$ and $y=6$. Almond milk costs more per unit than apples, not less, so the statement is False.`,
      `**C) Five pounds of apples costs exactly the same as four cartons of almond milk.**  (true)

Five pounds of apples cost $5(4.80)=24$. Four cartons of milk cost $4(6)=24$. The two baskets match, so the statement is True.`,
      `**D) If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than \\$47.00.**  (false)

A $5\\%$ loyalty discount on Receipt 1's $\\$50$ would charge

$$50\\times 0.95=47.50$$

That is not less than $\\$47$, so the statement is False.`,
      `**E) Buying 10 lb of apples and 2 cartons of milk together costs more than \\$60.**  (false)

Ten pounds of apples and two cartons of milk cost

$$10(4.80)+2(6)=48+12=60$$

That equals $\\$60$, so it is not more than $\\$60$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 23,
    solution_overview: `Neither receipt is a loyalty ticket, so the printed totals are undiscounted. Bread and eggs have listed prices; apples and almond milk do not.

Let $x$ be the apple price per pound and $y$ the almond-milk price per carton. Stripping the known items leaves

$$5x+3y=42$$

$$2x+5y=39.60$$`,
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
      `**A) The fixed connection fee is \\$33.**  (true)

The $140$-unit gap between the bills isolates the rate:

$$140r=29.40$$

$$r=0.21$$

Then $f+240(0.21)=83.40$ gives $f=33$. The connection fee is $\\$33$, so the statement is True.`,
      `**B) Customer service's claimed rate of \\$0.24 per unit is correct.**  (false)

The recovered rate is $r=0.21$, not the $\\$0.24$ customer service claimed, so the statement is False.`,
      `**C) At 280 units of usage, the standard plan costs less than \\$95.**  (true)

At $f=33$ and $r=0.21$, two hundred eighty units cost

$$33+280(0.21)=33+58.80=91.80$$

Since $91.80<95$, so the statement is True.`,
      `**D) The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.**  (false)

Solar Offset costs $0.29u$ and the standard plan costs $33+0.21u$. Solar is cheaper only when $0.08u<33$, that is $u<412.5$. At low usage the standard plan is cheaper, so Solar is not cheaper at every positive usage, so the statement is False.`,
      `**E) At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.**  (false)

At $500$ units, Solar Offset is $0.29(500)=145$ and the standard plan is $33+500(0.21)=138$. Solar is more expensive there, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 24,
    solution_overview: `The standard plan is a fixed connection fee plus a constant rate per unit. Customer service's $\\$0.24$ rate is a claim. Solar Offset has no fee and charges $\\$0.29$ per unit.

Let $f$ be the connection fee and $r$ the standard per-unit rate. The two bills give

$$f+240r=83.40$$

$$f+380r=112.80$$`,
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
      `**A) A pasta dish costs \\$19.**  (true)

Table 5 is already food-only. Table 8 printed $174+46=220$, and stripping the $10\\%$ fee leaves the food system

$$6p+4a=174$$

$$5p+7a=200$$

Eliminating $a$ recovers $p=19$. Pasta is $\\$19$, so the statement is True.`,
      `**B) An appetizer costs more than a pasta dish.**  (false)

The same pair recovers $a=15$. An appetizer costs less than a pasta dish, not more, so the statement is False.`,
      `**C) Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly \\$26.00.**  (true)

Table 8's pre-fee subtotal is $220/1.10=200$. Table 5's total is $174$, and

$$200-174=26$$

so the statement is True.`,
      `**D) If Table 5 had also been charged the 10% peak-hour service fee, its total would have been \\$191.40.**  (true)

Adding the $10\\%$ peak fee to Table 5's $\\$174$:

$$174\\times 1.10=191.40$$

so the statement is True.`,
      `**E) Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than \\$150.**  (true)

Four pasta and four appetizers at $p=19$ and $a=15$ cost $76+60=136$ before the fee. With $10\\%$ added:

$$136\\times 1.10=149.60$$

which is less than $\\$150$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 25,
    solution_overview: `Off-peak tables have no service fee. Peak tables add $10\\%$ before the bill is printed. Table 8's printed total is $\\$46$ above Table 5's $\\$174$.

Let $p$ be the pasta price and $a$ the appetizer price. Table 5 is already food-only. Table 8's food subtotal is $220/1.10=200$, so

$$6p+4a=174$$

$$5p+7a=200$$`,
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
      `**A) Item M costs \\$21 per unit.**  (true)

Only counts and cost fix the prices. The two shipments give

$$110x+80y=4470$$

$$70x+150y=5520$$

Dividing by $10$ and eliminating $y$ recovers $x=21$. Item M costs $\\$21$ per unit, so the statement is True.`,
      `**B) Item N costs \\$30 per unit.**  (false)

The same two cost equations recover $y=27$, not $\\$30$. Item N costs $\\$27$ per unit, so the statement is False.`,
      `**C) Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.**  (false)

Shipment 1 averages $4470/190\\approx 23.53$ per unit and Shipment 2 averages $5520/220=25.09$. The averages are not equal, so the statement is False.`,
      `**D) 150 units of Item N alone would cost \\$4,050.**  (true)

At the recovered price $y=27$, one hundred fifty units of N cost

$$150\\times 27=4050$$

so the statement is True.`,
      `**E) Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.**  (false)

The weights never enter the pricing equations. Shipment 1 is cheaper because it is a different mix at the same unit prices, not because it is lighter, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 26,
    solution_overview: `Unit weights are distractors. Only counts and shipment cost fix the prices.

Let $x$ be Item M's unit price and $y$ Item N's. The two shipments give

$$110x+80y=4470$$

$$70x+150y=5520$$`,
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
      `**A) Standard planting costs \\$29 per unit.**  (true)

Job 1 is seven bundles of $2$ Standard and $5$ Premium, so $14$ Standard and $35$ Premium:

$$14x+35y=1946$$

$$13x+21y=1301$$

Eliminating $x$ recovers $y=44$ and then $x=29$. Standard planting is $\\$29$ per unit, so the statement is True.`,
      `**B) Premium planting costs \\$50 per unit.**  (false)

The recovered Premium price is $y=44$, not $\\$50$, so the statement is False.`,
      `**C) Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.**  (true)

Each of Job 1's seven bundles holds $2$ Standard and $5$ Premium, so the job is

$$7\\times 2=14$$

Standard units and $7\\times 5=35$ Premium units, so the statement is True.`,
      `**D) The Premium portion alone of Job 1 cost more than the entirety of Job 2.**  (true)

Job 1's Premium slice at $y=44$ is $35(44)=1540$. Job 2's whole invoice is $\\$1{,}301$, and $1540>1301$, so the statement is True.`,
      `**E) The new quotation of \\$1,068 is mathematically consistent with the confirmed rates.**  (true)

The new mix at $x=29$ and $y=44$ costs

$$8(29)+19(44)=232+836=1068$$

which matches the quoted total, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 27,
    solution_overview: `Each bundle is $2$ Standard plus $5$ Premium. Job 1 billed seven bundles; Job 2 listed units directly.

Let $x$ be the Standard unit price and $y$ the Premium unit price. Expanding Job 1's bundles gives

$$14x+35y=1946$$

$$13x+21y=1301$$`,
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
      `**A) The per diem is \\$55 per day.**  (true)

Reports 1 and 2, treated as the consistent pair, give

$$5x+150y=323$$

$$3x+250y=245$$

Eliminating $x$ recovers $y=0.32$ and then $x=55$. The per-diem is $\\$55$ per day, so the statement is True.`,
      `**B) Finance's belief that the mileage rate is \\$0.40/mile is correct.**  (false)

The recovered mileage rate is $y=0.32$, not Finance's $\\$0.40$, so the statement is False.`,
      `**C) Report 3 is impossible, since 7 meal days alone would require at least \\$385 at the confirmed per-diem rate  -  far more than its reported \\$120 total.**  (true)

Seven meal days at $x=55$ already cost $385$, before any miles. Report 3 lists only $\\$120$, which cannot cover those days, so the statement is True.`,
      `**D) Report 1's total exceeds Report 2's total by more than \\$80.**  (false)

Report 1 billed $\\$323$ and Report 2 billed $\\$245$. The gap is $78$, which is not more than $\\$80$, so the statement is False.`,
      `**E) Reports 1 and 2 combined reimbursed at least \\$550.**  (true)

Reports 1 and 2 together reimbursed

$$323+245=568$$

which is at least $\\$550$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 28,
    solution_overview: `Reimbursement is a per-diem plus a mileage rate. One of the three reports is inconsistent with the other two.

Let $x$ be the per-diem and $y$ the mileage rate. Working from Reports 1 and 2, which share a consistent pair,

$$5x+150y=323$$

$$3x+250y=245$$

Report 3 is treated as the erroneous row.`,
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
      `If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.`,
      `The illegible Week 3 entry can be reconstructed as 20 Widget A units.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Widget A requires 7 hours of labor to assemble.**  (true)

Week 2's note is $A+B=58$ and $B=A+8$, so $A=25$ and $B=33$. Together with Week 1,

$$35a+20b=445$$

$$25a+33b=505$$

the hours system recovers $a=7$. Widget A takes $7$ hours, so the statement is True.`,
      `**B) Widget B requires 12 hours of labor to assemble.**  (false)

The same two weeks recover $b=10$, not $12$. Widget B takes $10$ hours, so the statement is False.`,
      `**C) Week 2 actually produced 25 Widget A units and 33 Widget B units.**  (true)

Week 2 produced $58$ units with $8$ more B than A:

$$A+(A+8)=58$$

$$A=25,\\qquad B=33$$

so the statement is True.`,
      `**D) If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.**  (false)

Week 1 used $35(7)+20(10)=445$ hours. Raising only A's time by $20\\%$ gives $35(8.4)+200=494$, whereas $20\\%$ of the whole week would be $534$. The totals do not match, so the statement is False.`,
      `**E) The illegible Week 3 entry can be reconstructed as 20 Widget A units.**  (true)

Week 3 logged $15$ of B and $290$ hours. With $a=7$ and $b=10$,

$$7A+10(15)=290$$

$$7A=140$$

$$A=20$$

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 29,
    solution_overview: `Each widget type takes a fixed number of labour-hours. Week 1 is complete. Week 2's note says $58$ units with $8$ more B than A. Week 3's A count is missing.

Let $a$ be hours per Widget A and $b$ hours per Widget B. Week 1 and the reconstructed Week 2 counts give

$$35a+20b=445$$

$$25a+33b=505$$`,
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
      `**A) Product X is priced at \\$29.**  (true)

North and South reconcile, so they are the working pair:

$$85x+70y=4145$$

$$55x+95y=3875$$

The consistent prices are $x=29$ and $y=24$. Product X is $\\$29$, so the statement is True.`,
      `**B) Product Y is priced at \\$28.**  (false)

The recovered Y price is $y=24$, not $\\$28$, so the statement is False.`,
      `**C) The East branch's reported revenue is fully consistent with the derived prices.**  (false)

East's mix at the recovered prices is

$$65(29)+50(24)=1885+1200=3085$$

East reported $\\$3{,}200$, which does not match, so the statement is False.`,
      `**D) If the East branch's reported revenue were corrected to reflect the derived prices, it should read \\$3,085.**  (true)

The same East rebuild is $\\$3{,}085$, so correcting the reported revenue to the derived prices gives that figure, so the statement is True.`,
      `**E) North's reported revenue exceeds South's and East's reported revenues combined.**  (false)

North reported $\\$4{,}145$. South and East together reported $3875+3200=7075$. North does not exceed that combined figure, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 30,
    solution_overview: `X and Y sell at company-wide prices. Two of the three branch rows are consistent; the third is a data-entry error.

Let $x$ be Product X's price and $y$ Product Y's. North and South reconcile, so

$$85x+70y=4145$$

$$55x+95y=3875$$

East is the row that will be checked against this pair.`,
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
      `Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.`,
      `Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Rounding Type A's case price up to the next whole dollar lands on exactly \\$19.00.**  (true)

Type A and Type B keep fixed case prices $x$ and $y$:

$$9x+13y=527.45$$

$$7x+19y=657.35$$

Eliminating $y$ recovers $x=18.45$. Rounding that case price up to the next whole dollar lands on $19$, so the statement is True.`,
      `**B) A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.**  (true)

The same system recovers $y=27.80$. The gap is

$$27.80-18.45=9.35$$

which sits between $9$ and $10$, so the statement is True.`,
      `**C) If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the \\$24 mark.**  (true)

Invoice 2 billed $\\$657.35$ across $7+19=26$ cases:

$$\\frac{657.35}{26}=25.282\\ldots$$

which clears $\\$24$, so the statement is True.`,
      `**D) Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.**  (false)

Swapping Invoice 1's counts would charge $13(18.45)+9(27.80)=490.05$, not $527.45$. The totals change, so the statement is False.`,
      `**E) Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.**  (false)

The two invoices together order $16$ of A and $32$ of B, and linearity says that combined order costs exactly $527.45+657.35$. There is no bulk premium in the model, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 31,
    solution_overview: `Type A bolts and Type B hinges keep fixed per-case prices.

Let $x$ be Type A's case price and $y$ Type B's. The two invoices give

$$9x+13y=527.45$$

$$7x+19y=657.35$$`,
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
      `**A) The dispatch fee sits exactly halfway between \\$145 and \\$146.**  (true)

Swift Cargo's two routes are a fee plus a per-mile rate:

$$f+170r=460$$

$$f+305r=709.75$$

The $135$-mile gap isolates $r=1.85$, and then $f+170(1.85)=460$ gives $f=145.50$. That fee sits halfway between $145$ and $146$, so the statement is True.`,
      `**B) Per mile, Swift Cargo's rate is closer to \\$1.50 than to \\$2.00.**  (false)

The recovered rate is $r=1.85$. The distance to $1.50$ is $0.35$ and the distance to $2.00$ is $0.15$, so $1.85$ is closer to $2.00$, so the statement is False.`,
      `**C) A 250-mile haul comes in five cents under six hundred and eight dollars.**  (false)

A $250$-mile haul at $f=145.50$ and $r=1.85$ costs

$$145.50+250(1.85)=145.50+462.50=608$$

exactly $\\$608$, not five cents under, so the statement is False.`,
      `**D) At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of \\$270.**  (true)

The competitor's $250$-mile price is $250(1.35)=337.50$. Swift's is $\\$608$, and the saving is

$$608-337.50=270.50$$

which is north of $\\$270$, so the statement is True.`,
      `**E) Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.**  (true)

Setting $145.50+1.85m=1.35m$ forces $145.50=-0.50m$, so $m=-291$. The lines meet at a negative mileage, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 32,
    solution_overview: `Swift Cargo charges a dispatch fee plus a constant rate per mile. The competitor charges $\\$1.35$ per mile with no fee.

Let $f$ be Swift's dispatch fee and $r$ the per-mile rate. The two routes give

$$f+170r=460$$

$$f+305r=709.75$$`,
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
      `**A) A Specialty Drink's price, tripled, would clear twenty dollars.**  (false)

Drinks and pastries keep fixed prices $d$ and $p$. The two till totals give

$$7d+9p=78.65$$

$$11d+4p=85.05$$

Eliminating $p$ recovers $d=6.35$. Tripling that price is

$$3(6.35)=19.05$$

which does not clear $\\$20$, so the statement is False.`,
      `**B) Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.**  (true)

The recovered pastry price is $p=3.80$. Four pastries cost $15.20$, while one drink and one pastry cost $6.35+3.80=10.15$. Since $15.20>10.15$, so the statement is True.`,
      `**C) Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.**  (false)

Calories are a separate printed total. Without the item quantities they do not determine $d$ and $p$, so the statement is False.`,
      `**D) Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past \\$4.90.**  (true)

Receipt 1 billed $\\$78.65$ across $7+9=16$ items:

$$\\frac{78.65}{16}=4.915625$$

which creeps past $\\$4.90$, so the statement is True.`,
      `**E) A week of daily 2-Drink-2-Pastry orders costs enough that, left over from \\$150, you'd have less than \\$8 in change.**  (true)

A daily $2$-drink $2$-pastry order costs $2(6.35)+2(3.80)=20.30$. Over seven days that is $142.10$, and

$$150-142.10=7.90$$

which is less than $\\$8$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 33,
    solution_overview: `Specialty drinks and pastries keep fixed prices. The printed calorie counts are unused.

Let $d$ be the drink price and $p$ the pastry price. The two till totals give

$$7d+9p=78.65$$

$$11d+4p=85.05$$`,
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
      `**A) Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.**  (true)

Croissants and baguettes are priced by the dozen. The confirmation emails give

$$14c+11b=297.30$$

$$6c+23b=299.30$$

Eliminating $b$ recovers $c=13.85$. Four dozen croissants cost

$$4(13.85)=55.40$$

which blows past $\\$55$, so the statement is True.`,
      `**B) The per-dozen gap between croissants and baguettes is closer to four dollars than to five.**  (true)

The recovered baguette price is $b=9.40$. The per-dozen gap is

$$13.85-9.40=4.45$$

which is closer to $4$ than to $5$, so the statement is True.`,
      `**C) Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.**  (false)

Ten dozen of each would bill $10(13.85)+10(9.40)=232.50$. Croissants' share is

$$\\frac{138.50}{232.50}\\approx 0.5957$$

which is not more than three-fifths, so the statement is False.`,
      `**D) Per dozen-item ordered, Email 1 runs pricier than Email 2  -  and the gap clears two dollars.**  (false)

Email 1 averages $297.30/25=11.892$ per dozen and Email 2 averages $299.30/29\\approx 10.321$. The gap is about $1.57$, which does not clear two dollars, so the statement is False.`,
      `**E) Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.**  (true)

Raising baguettes by $\\$3$ in Email 2's mix leaves croissants at $13.85$ and baguettes at $12.40$:

$$6(13.85)+23(12.40)=83.10+285.20=368.30$$

The cents digit is $30$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 34,
    solution_overview: `Croissants and baguettes are sold by the dozen at fixed wholesale prices.

Let $c$ be the croissant price per dozen and $b$ the baguette price per dozen. The two confirmation emails give

$$14c+11b=297.30$$

$$6c+23b=299.30$$`,
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
      `**A) Fabric Roll margins clear the \\$27 line, though not by enough to also clear \\$27.50.**  (true)

Each product carries a fixed margin. The two quarters give

$$240f+175y=10029$$

$$310f+90y=10260.50$$

Eliminating $y$ recovers $f=27.35$. That margin clears $\\$27$ but not $\\$27.50$, so the statement is True.`,
      `**B) Yarn Spool's per-unit margin, doubled, would just clear forty dollars.**  (false)

The recovered spool margin is $y=19.80$. Doubling it gives $39.60$, which does not clear $\\$40$, so the statement is False.`,
      `**C) Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears \\$8,400  -  but only by a slender margin.**  (true)

Two hundred rolls and one hundred fifty spools at the recovered margins profit

$$200(27.35)+150(19.80)=5470+2970=8440$$

which clears $\\$8{,}400$ by $\\$40$, so the statement is True.`,
      `**D) The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.**  (true)

Q2 minus Q1 is $10260.50-10029=231.50$. Dropping one hundred leaves $131.50$, still a three-digit number, so the statement is True.`,
      `**E) Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round \\$13,675  -  no cents required.**  (true)

Five hundred rolls and no spools profit

$$500(27.35)=13675$$

exactly $\\$13{,}675$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 35,
    solution_overview: `Each product carries a fixed profit margin per unit.

Let $f$ be the Fabric Roll margin and $y$ the Yarn Spool margin. The two quarters give

$$240f+175y=10029$$

$$310f+90y=10260.50$$`,
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
      `**A) Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.**  (true)

Invoice 2's counts and total are $0.6$ times Invoice 1's:

$$0.6(15)=9$$

$$0.6(20)=12$$

$$0.6(699)=419.40$$

That row is a scaled restatement, so the statement is True.`,
      `**B) Nitrogen-type cylinders are priced closer to \\$17.00 than to \\$16.00.**  (false)

Invoice 1 with Invoice 3 recovers $n=16.40$. The distance to $\\$16$ is $0.40$ and the distance to $\\$17$ is $0.60$, so $16.40$ is closer to $16$, so the statement is False.`,
      `**C) Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.**  (true)

Four Oxygen cylinders cost $4(22.65)=90.60$. Six Nitrogen cylinders cost $6(16.40)=98.40$. Since $90.60<98.40$, so the statement is True.`,
      `**D) Double Invoice 3's order exactly, and the resulting bill would land above \\$655.**  (false)

Doubling Invoice 3's charged total gives $2(326.45)=652.90$, which is not above $\\$655$, so the statement is False.`,
      `**E) Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the \\$20 mark.**  (true)

Invoices 1 and 3 together cover $28$ Nitrogen and $25$ Oxygen cylinders for $699+326.45=1025.45$. The blended per-cylinder figure is

$$\\frac{1025.45}{53}\\approx 19.35$$

which fails to reach $\\$20$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 36,
    solution_overview: `Nitrogen and Oxygen cylinders keep fixed unit prices. Invoice 2 is a $60\\%$ scale of Invoice 1, so it restates the same line rather than adding a second independent observation.

Let $n$ be the Nitrogen price and $o$ the Oxygen price. Invoice 1 and Invoice 3 give the independent pair

$$15n+20o=699$$

$$13n+5o=326.45$$`,
  },
  {
    id: `math-5-37`,
    case_id: `MATH 5.37`,
    title: `Ferro Machine Shop  -  Two Technicians, Two Sessions`,
    context: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.`,
    statements: [
      `Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.`,
      `Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.`,
      `Their combined hourly output, expressed as a fraction, reduces to exactly \\frac{13}{100}  -  no more, no less.`,
      `Bianchi's slice of Tuesday's finished work, as a fraction, is closer to \\frac{1}{7} than to \\frac{1}{8}.`,
      `Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A) Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.**  (false)

Each technician completes a fixed fraction of one job per hour. Monday and Tuesday give

$$4x+7y=0.655$$

$$9x+3y=0.900$$

The pair recovers $x=0.085$. Alvarez working alone would take

$$\\frac{1}{0.085}\\approx 11.76$$

hours, which rounds to $12$, not down to $11$, so the statement is False.`,
      `**B) Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.**  (false)

Bianchi's rate is $y=0.045$, so one solo job takes $1/0.045\\approx 22.22$ hours. Alvarez finishing two jobs takes $2/0.085\\approx 23.53$ hours. Bianchi's one job is shorter, so the statement is False.`,
      `**C) Their combined hourly output, expressed as a fraction, reduces to exactly \\frac{13}{100}  -  no more, no less.**  (true)

Their combined hourly output is

$$0.085+0.045=0.130=\\frac{13}{100}$$

so the statement is True.`,
      `**D) Bianchi's slice of Tuesday's finished work, as a fraction, is closer to \\frac{1}{7} than to \\frac{1}{8}.**  (true)

Tuesday Bianchi completed $3(0.045)=0.135$ of the job, out of $0.900$ finished, which is $0.15$. That sits closer to $1/7\\approx 0.143$ than to $1/8=0.125$, so the statement is True.`,
      `**E) Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.**  (true)

Across both days they logged $23$ hours and finished $0.655+0.900=1.555$ jobs. The average is

$$\\frac{1.555}{23}\\approx 0.0676$$

which does not quite clear $7\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 37,
    solution_overview: `Each technician completes a fixed fraction of one job per hour.

Let $x$ be Alvarez's job-fraction per hour and $y$ Bianchi's. Monday and Tuesday give

$$4x+7y=0.655$$

$$9x+3y=0.900$$`,
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
      `Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses \\$8,700  -  clearing it by less than \\$40.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.**  (false)

T-shirt and hoodie margins $T$ and $H$ are fixed. Seasons 1 and 2 give

$$430T+260H=9793.50$$

$$275T+410H=10747.75$$

Eliminating $H$ recovers $T=11.65$. That figure sits closer to $12$ than to $11$, so the statement is False.`,
      `**B) Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.**  (true)

The same pair recovers $H=18.40$, which sits closer to $18$ than to $19$, so the statement is True.`,
      `**C) Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.**  (false)

Season 3 is $T_{3}(11.65)+310(18.40)=8558.25$. Then $11.65T_{3}=2854.25$, so $T_{3}=245$, which is not a multiple of ten, so the statement is False.`,
      `**D) Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.**  (true)

Season 2 outearned Season 1 by $10747.75-9793.50=954.25$. Fifty-two hoodies margin $52(18.40)=956.80$, and $954.25$ fails to cover that, so the statement is True.`,
      `**E) Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses \\$8,700  -  clearing it by less than \\$40.**  (true)

Replacing Season 3's $245$ T-shirts with $260$ would profit

$$260(11.65)+310(18.40)=3029+5704=8733$$

which crosses $\\$8{,}700$ by $33$, less than $\\$40$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 38,
    solution_overview: `T-shirts and hoodies earn fixed profit per unit. Season 3's T-shirt count is missing.

Let $T$ be the T-shirt margin and $H$ the hoodie margin. Seasons 1 and 2 give

$$430T+260H=9793.50$$

$$275T+410H=10747.75$$`,
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
      `**A) Knock five dollars and forty cents off the flat handling fee and you'd land on an even \\$89.20  -  implying the real fee currently overshoots \\$89 by roughly six percent.**  (true)

Shipment 2 converts as $572/2.2=260$ kg. The two complete bills are

$$f+185r=677.35$$

$$f+260r=913.60$$

Subtracting isolates $r=3.15$ and then $f=94.60$. Knocking $\\$5.40$ off that fee lands on $89.20$, so the statement is True.`,
      `**B) The per-kilogram rate, tripled, would land just shy of \\$9.50.**  (true)

The recovered rate is $r=3.15$. Tripling it gives $9.45$, just shy of $\\$9.50$, so the statement is True.`,
      `**C) Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.**  (true)

Shipment 3 is $99/2.2=45$ kg. The model predicts

$$94.60+45(3.15)=94.60+141.75=236.35$$

against a billed $\\$239.80$. The gap is $3.45$, within four dollars but not exact, so the statement is True.`,
      `**D) Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.**  (false)

Ninety-nine pounds convert to $99/2.2=45$ kg, and $45$ is not divisible by $7$, so the statement is False.`,
      `**E) Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.**  (true)

At $400$ kg the model charges

$$94.60+400(3.15)=94.60+1260=1354.60$$

which creeps past $\\$1{,}350$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 39,
    solution_overview: `Every shipment is a flat handling fee plus a constant rate per kilogram. Imperial weights convert at $1\\,\\mathrm{kg}\\approx 2.2\\,\\mathrm{lb}$.

Let $f$ be the handling fee and $r$ the per-kilogram rate. Shipment 2 is $572/2.2=260$ kg, so the two complete bills give

$$f+185r=677.35$$

$$f+260r=913.60$$`,
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
      `Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A (\\$967.40), the other assuming a 50%-heavier surcharge instead of a full double (\\$725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Doubling every line of Client A's invoice implies Client B should owe \\$967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.**  (true)

Client B's usage is exactly double Client A's, so a consistent tariff would double the bill:

$$2(483.70)=967.40$$

Client B was billed $952.10$. The overshoot is $15.30$, which is $15.30/952.10\\approx 1.61\\%$ of the real total, so the statement is True.`,
      `**B) For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's \\$952.10 billed amount.**  (true)

A consistent scheme would require Client A's bill to be exactly half of Client B's $952.10$, namely $476.05$. That is the working condition, so the statement is True.`,
      `**C) The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.**  (true)

The $\\$15.30$ discrepancy on a $952.10$ bill is about $1.61\\%$. Then $1/60\\approx 1.67\\%$ and $1/50=2\\%$, so the error sits nearer to $1$-in-$60$, so the statement is True.`,
      `**D) Plugging in a purely hypothetical \\$14.20 per compute-unit and \\$31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of \\$375.**  (false)

The hypothetical rates $14.20$ and $31.75$ would price Client A at

$$11(14.20)+7(31.75)=156.20+222.25=378.45$$

which is above $\\$375$, not just shy of it, so the statement is False.`,
      `**E) Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A (\\$967.40), the other assuming a 50%-heavier surcharge instead of a full double (\\$725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.**  (true)

The doubling hypothesis misses Client B by $15.30$. A $50\\%$-heavier surcharge would predict $483.70\\times 1.5=725.55$, which misses by $226.55$. Doubling is closer, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 40,
    solution_overview: `The contract is a per-compute-unit price plus a per-storage-unit price. Client B's usage is exactly double Client A's in both categories, so a consistent tariff would also double the bill.

Let $c$ be the compute price and $s$ the storage price. The two invoices are

$$11c+7s=483.70$$

$$22c+14s=952.10$$

The second left-hand side is double the first, but $952.10\\neq 2(483.70)=967.40$, so no pair $(c,s)$ satisfies both invoices.`,
  },
  {
    id: `math-5-41`,
    case_id: `MATH 5.41`,
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

Substitute $y=2x+4000$ into the return equation:

$$0.0525x+0.0375(2x+4000)=762$$

$$0.1275x=612$$

$$x=4800,\\qquad y=13600$$

Fund A earns $0.0525(4800)=252$ and Fund B earns $0.0375(13600)=510$. Triple A's interest is $756$, and $510<756$, so the statement is False.`,
      `**B) If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above \\$800.00.**  (true)

Raising A's rate to $6.75\\%$ with the recovered balances gives

$$0.0675(4800)+0.0375(13600)=324+510=834$$

which is above $\\$800$, so the statement is True.`,
      `**C) The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).**  (true)

The combined trust is $4800+13600=18400$. The $\\$762$ return is

$$\\frac{762}{18400}\\approx 0.0414$$

which is more than $4\\%$, so the statement is True.`,
      `**D) Had the trust instead been split evenly (\\$9,200.00 in each fund) at the original rates, the total return would have come within \\$5.00 of the actual \\$762.00.**  (false)

An even $\\$9{,}200$ split at the original rates would earn

$$9200(0.0525+0.0375)=9200(0.09)=828$$

which sits $\\$66$ from $\\$762$, not within $\\$5$, so the statement is False.`,
      `**E) The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.**  (true)

Relative to the smaller balance,

$$\\frac{13600-4800}{4800}=\\frac{8800}{4800}\\approx 1.833$$

which exceeds $180\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 41,
    solution_overview: `Fund A pays $5.25\\%$ and Fund B pays $3.75\\%$. Fund B's balance is $\\$4{,}000$ more than twice Fund A's, and the combined simple return is $\\$762$.

Let $x$ be Fund A's balance and $y$ Fund B's. The notes give

$$y=2x+4000$$

$$0.0525x+0.0375y=762$$`,
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
      `If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.`,
      `Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.`,
      `Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The combined salt content of Batch 1 and Batch 2, if poured together into one container, would exceed 300 g.**  (true)

Batch 1 recorded $144$ g and Batch 2 recorded $184$ g:

$$144+184=328$$

which exceeds $300$ g, so the statement is True.`,
      `**B) Solution B's concentration is more than 70% of Solution A's concentration.**  (true)

The two complete batches recover $a=16$ and $b=12$. Then

$$\\frac{12}{16}=0.75$$

so B is $75\\%$ of A's concentration, more than $70\\%$, so the statement is True.`,
      `**C) If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.**  (true)

Batch 3 is $2$ L of A and $6$ L of B. The model predicts $2(16)+6(12)=104$ g against $109$ g recorded. If A's $2$ L is held fixed,

$$32+12B=109$$

$$B\\approx 6.42$$

which is closer to $6.4$ L than to $6.0$ L, so the statement is True.`,
      `**D) Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.**  (false)

A $3:1$ mix with total volume $V$ has $0.75V$ of A and $0.25V$ of B. Setting the salt to $130$ g:

$$0.75V(16)+0.25V(12)=15V=130$$

$$V\\approx 8.67$$

not $7.5$ L, so the statement is False.`,
      `**E) Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.**  (true)

Batch 2 used $10/12$ of its volume as A. Batch 1 used $6/10$. Since $5/6>3/5$, Batch 2 used the higher A share, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 42,
    solution_overview: `Each stock solution has a fixed salt concentration. Batch volumes split according to the stated A:B ratio.

Let $a$ be Solution A's grams per litre and $b$ Solution B's. Batch 1 is $6$ L of A and $4$ L of B; Batch 2 is $10$ L of A and $2$ L of B:

$$6a+4b=144$$

$$10a+2b=184$$`,
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
      `The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed \\$6.00.**  (true)

Pay is base $b$ plus overtime at $b+p$. The two gross figures give

$$40b+2.5(b+p)=765$$

$$40b+7(b+p)=882$$

The pair recovers $b=17.50$ and $p=8.50$, so overtime pays $26$ per hour. Employee A's $2.5$ overtime hours earned $65$, and $10\\%$ of that is $6.50$, which exceeds $\\$6$, so the statement is True.`,
      `**B) Employee B's overtime pay is more than 40% of his total gross pay.**  (false)

Employee B's overtime pay is $7(26)=182$ out of $882$:

$$\\frac{182}{882}\\approx 0.206$$

which is not more than $40\\%$, so the statement is False.`,
      `**C) The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.**  (true)

Combined actual gross is $765+882=1647$. Two people working $45$ hours at the base with no premium would earn $2(45)(17.50)=1575$. Since $1647>1575$, so the statement is True.`,
      `**D) If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.**  (false)

A $15\\%$ rise in the base with no premium would pay Employee A $42.5(17.50)(1.15)=855.3125$, which is more than $765$, not a decrease, so the statement is False.`,
      `**E) The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).**  (true)

The overtime-hour ratio is $7/2.5=2.8$. The gross-pay ratio is $882/765\\approx 1.15$. Since $2.8>1.15$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 43,
    solution_overview: `Pay is a base hourly wage plus a fixed overtime premium on hours beyond $40$. Overtime therefore pays base plus premium.

Let $b$ be the base wage and $p$ the overtime premium. The two gross pays give

$$40b+2.5(b+p)=765$$

$$40b+7(b+p)=882$$`,
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
      `If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded \\$950.00.`,
      `The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.`,
      `Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs (\\$750.00 + \\$710.00).`,
      `If wire fencing rose by \\$2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.`,
      `Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded \\$950.00.**  (true)

Project 1 with Project 3 recovers $x=27$ and $y=11$. Replacing Project 3's wood with $20$ m would cost

$$20(27)+40(11)=540+440=980$$

which exceeds $\\$950$, so the statement is True.`,
      `**B) The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.**  (true)

The recovered gap is $27-11=16$. Then $16/11\\approx 1.455$, which is more than $145\\%$ of the wire price, so the statement is True.`,
      `**C) Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs (\\$750.00 + \\$710.00).**  (false)

Combining the two projects costs $750+710$ because prices are linear. The hypothetical total is not less than the sum, so the statement is False.`,
      `**D) If wire fencing rose by \\$2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.**  (false)

Raising wire by $\\$2$ adds $24(2)=48$ to Project 1. Then $48/750=0.064$, a $6.4\\%$ increase, not more than $15\\%$, so the statement is False.`,
      `**E) Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.**  (false)

Project 3 averages $710/50=14.20$ per metre. Project 1 averages $750/42\\approx 17.86$. Project 3 is cheaper per metre, so the statement is False.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 44,
    solution_overview: `Wood and wire fencing keep fixed prices per metre. Project 2 is a $1.5$ scale of Project 1, so it restates the same line.

Let $x$ be the wood price per metre and $y$ the wire price per metre. Project 1 and Project 3 give the independent pair

$$18x+24y=750$$

$$10x+40y=710$$`,
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
      `**A) The time it would take Boat A alone to travel the full 356 km stretch is more than 7 hours.**  (true)

Dividing the first meeting by $2$ gives $x+y=125$. With $x+4y=356$, the pair is $x=48$ and $y=77$. Boat A alone on $356$ km would take

$$\\frac{356}{48}\\approx 7.42$$

hours, more than $7$, so the statement is True.`,
      `**B) In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.**  (true)

When they meet on the $250$ km stretch, A has covered $96$ km and B has covered $154$ km. The difference is $58$ km, which is less than half of $250$, so the statement is True.`,
      `**C) If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.**  (false)

Raising both speeds by $20\\%$ raises the closing speed from $125$ to $150$ km/h. Closing $250$ km then takes $250/150\\approx 1.67$ hours, which is not below $1.5$, so the statement is False.`,
      `**D) The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.**  (true)

In $3$ hours the two boats together cover $3(48+77)=375$ km, which exceeds $356$, so the statement is True.`,
      `**E) Boat B's speed is more than 60% higher than Boat A's speed.**  (true)

Boat B's speed over A's is $77/48-1\\approx 0.604$, more than $60\\%$ higher, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 45,
    solution_overview: `The boats travel at constant speeds. On the $250$ km stretch they start together and meet after $2$ hours. On the $356$ km stretch, Boat B has a $3$-hour head start and they meet $1$ hour after Boat A starts, so B has been moving for $4$ hours.

Let $x$ be Boat A's speed and $y$ Boat B's. The two meetings give

$$2x+2y=250$$

$$x+4y=356$$`,
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
      `If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded \\$44,000.`,
      `Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.`,
      `Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.`,
      `Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.`,
      `Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded \\$44,000.**  (false)

The two complete seasons recover $w=95$ and $b=120$. Replacing Season 1's wheat with $260$ t would profit

$$260(95)+160(120)=24700+19200=43900$$

which does not exceed $\\$44{,}000$, so the statement is False.`,
      `**B) Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.**  (true)

Barley's advantage is $120-95=25$, and $25/95\\approx 0.263$, more than $25\\%$ of wheat's margin, so the statement is True.`,
      `**C) Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.**  (false)

Season 3 is $95T+120(300)=53100$, so $T=180$. Season 3's total tonnage is $180+300=480$ and Season 2's is $440$. Season 3 is larger, so the statement is False.`,
      `**D) Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.**  (true)

An extra $40$ t of wheat at $95$ per tonne would add $3800$, which is more than $\\$3{,}500$, so the recorded $\\$53{,}100$ would have been understated by that amount, so the statement is True.`,
      `**E) Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.**  (true)

Season 2 averages $48300/440\\approx 109.77$ per tonne. Season 1 averages $42000/400=105$. Season 2 is higher, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 46,
    solution_overview: `Wheat and barley earn fixed profit per tonne. Season 3's wheat tonnage is missing.

Let $w$ be wheat profit per tonne and $b$ barley profit per tonne. Seasons 1 and 2 give

$$240w+160b=42000$$

$$180w+260b=48300$$`,
  },
  {
    id: `math-5-47`,
    case_id: `MATH 5.47`,
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

Five years ago the elder was three times the younger, and nine years from now twice:

$$x-5=3(y-5)$$

$$x+9=2(y+9)$$

The pair recovers $x=47$ and $y=19$. Fifteen years from now they will be $62$ and $34$. Double $34$ is $68$, and $62<68$, so the statement is True.`,
      `**B) The current age gap (x - y) is more than 45% of the elder employee's current age.**  (true)

The current gap is $47-19=28$, and $28/47\\approx 0.596$, more than $45\\%$ of the elder's age, so the statement is True.`,
      `**C) Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.**  (false)

In $4.5$ years they will be $51.5$ and $23.5$. Then $2.5(23.5)=58.75$, and $51.5$ is not more than $58.75$, so the statement is False.`,
      `**D) Ten years ago, the sum of their ages was less than 40.**  (false)

Ten years ago the ages were $37$ and $9$, which sum to $46$, not less than $40$, so the statement is False.`,
      `**E) There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.**  (true)

Setting $x-t=3(y-t)$ with the recovered ages gives $t=5$. That point is more than $4$ years ago, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 47,
    solution_overview: `Five years ago the elder was three times the younger. Nine years from now the elder will be twice the younger.

Let $x$ be the elder's current age and $y$ the younger's. Those two snapshots give

$$x-5=3(y-5)$$

$$x+9=2(y+9)$$`,
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
      `If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual \\$1,350.60.`,
      `The dollar markup on Product B is more than 80% of the dollar markup on Product A.`,
      `Order 1's total retail markup exceeds \\$150.00.`,
      `If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than \\$280.00.`,
      `The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual \\$1,350.60.**  (false)

Product A is marked up $32\\%$ and Product B $18\\%$. Order 1 and Order 3 give

$$8(1.32x)+5(1.18y)=1052.80$$

$$3(1.32x)+12(1.18y)=1350.60$$

The pair recovers $x=55$ and $y=80$, so A retails at $72.60$ and B at $94.40$. Swapping the markups would retail A at $64.90$ and B at $105.60$, and Order 3 would then bill $1461.90$, an increase, so the statement is False.`,
      `**B) The dollar markup on Product B is more than 80% of the dollar markup on Product A.**  (true)

B's dollar markup is $0.18(80)=14.40$ and A's is $0.32(55)=17.60$. Then $14.40/17.60=0.818$, more than $80\\%$, so the statement is True.`,
      `**C) Order 1's total retail markup exceeds \\$150.00.**  (true)

Order 1's total markup is $8(17.60)+5(14.40)=212.80$, which exceeds $\\$150$, so the statement is True.`,
      `**D) If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than \\$280.00.**  (true)

Three extra units of B at the retail price $94.40$ add $283.20$, which is more than $\\$280$, so the statement is True.`,
      `**E) The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.**  (true)

The wholesale ratio is $80/55\\approx 1.455$ and the retail ratio is $94.40/72.60\\approx 1.300$. The wholesale ratio is larger, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 48,
    solution_overview: `Product A is marked up $32\\%$ and Product B $18\\%$ over wholesale. Order 2 is exactly double Order 1, so it restates the same line.

Let $x$ be A's wholesale cost and $y$ B's. Order 1 and Order 3 give

$$8(1.32x)+5(1.18y)=1052.80$$

$$3(1.32x)+12(1.18y)=1350.60$$`,
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
      `A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.**  (true)

A win is worth $w$ and a draw $d$. The Falcons scored $75$ and the Ravens $67$:

$$9w+4d=75$$

$$7w+6d=67$$

The pair recovers $w=7$ and $d=3$. If a draw were half a win, $d$ would be $3.5$ and the Falcons would score $9(7)+4(3.5)=77$, which is more than $75$, so the statement is True.`,
      `**B) The Ravens earned more than 45% of their total points from draws alone.**  (false)

The Ravens' $18$ draw points out of $67$ are about $26.9\\%$, not more than $45\\%$, so the statement is False.`,
      `**C) Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.**  (true)

Under $2$ per win and $1$ per draw, the Falcons score $22$ and the Ravens score $20$. The Falcons still finish ahead, so the statement is True.`,
      `**D) The Falcons' win-to-draw point contribution ratio exceeds 15.**  (false)

The Falcons' win points over draw points are $63/12=5.25$, which does not exceed $15$, so the statement is False.`,
      `**E) A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.**  (false)

Twelve wins and one draw at $w=7$ and $d=3$ score $87$. That is only $12$ above $75$, not more than $20$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 49,
    solution_overview: `A win is worth a fixed $w$ points and a draw a fixed $d$; a loss is worth $0$. The Falcons scored $75$ points. The Ravens scored $8$ fewer.

Let $w$ be points for a win and $d$ points for a draw. The two records give

$$9w+4d=75$$

$$7w+6d=67$$`,
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
      `If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.`,
      `Metal B's density is more than 50% greater than Metal A's density.`,
      `The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.`,
      `If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.`,
      `Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.**  (true)

The two complete batches recover $a=7.6$ and $b=11.4$. Replacing Batch 1's B volume with $10$ L would mass

$$12(7.6)+10(11.4)=91.2+114=205.2$$

which exceeds $200$ kg, so the statement is True.`,
      `**B) Metal B's density is more than 50% greater than Metal A's density.**  (false)

Then $11.4/7.6=1.5$, so B is exactly $50\\%$ denser than A, not more than $50\\%$ denser, so the statement is False.`,
      `**C) The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.**  (true)

Batch 3 is predicted at $9.5(7.6)+6(11.4)=140.6$ kg against $147.0$ kg recorded. The $6.4$ kg gap is $6.4/147\\approx 4.35\\%$ of the recorded mass, more than $4\\%$, so the statement is True.`,
      `**D) If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.**  (false)

If Batch 3's A volume were $10$ L, the model would predict $10(7.6)+6(11.4)=144.4$ kg. The gap to $147.0$ is $2.6$ kg, not within $2$ kg, so the statement is False.`,
      `**E) Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.**  (true)

Mass is linear in volume, so combining the two batches just adds $182.4+209.0$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 50,
    solution_overview: `Each metal has a fixed mass per litre. Batch 3 converted $2.5$ gal to $9.5$ L.

Let $a$ be Metal A's kg per litre and $b$ Metal B's. Batches 1 and 2 give

$$12a+8b=182.4$$

$$5a+15b=209$$`,
  },
  {
    id: `math-5-51`,
    case_id: `MATH 5.51`,
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

The AUM gap of $\\$150{,}000$ produces a $\\$2{,}400$ fee gap, and Client 2's bill is

$$150000r=2400$$

$$600000r+y=10800$$

Then $r=0.016$ and $y=1200$. An $\\$850{,}000$ client would pay $850000(0.016)+1200=14800$, which is

$$\\frac{14800}{850000}\\approx 0.01741$$

less than $1.75\\%$ of AUM, so the statement is True.`,
      `**B) The flat retainer accounts for more than 10% of Client 2's total fee.**  (true)

The retainer is $1200$ out of Client 2's $10800$:

$$\\frac{1200}{10800}\\approx 0.111$$

which is more than $10\\%$, so the statement is True.`,
      `**C) If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM \\$750,000) would decrease compared to its actual amount.**  (true)

Client 1's AUM is $750000$ and the actual fee is $13200$. At $1.4\\%$ with a doubled retainer the fee would be $750000(0.014)+2400=12900$, a decrease, so the statement is True.`,
      `**D) The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.**  (false)

Client 1's effective rate is $13200/750000=1.76\\%$ and Client 2's is $10800/600000=1.80\\%$. The gap is $0.04$ percentage points, not more than $0.05$, so the statement is False.`,
      `**E) A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.**  (false)

Triple Client 2's AUM is $1{,}800{,}000$, which would fee $28800+1200=30000$. Triple Client 2's fee is $32400$, and $30000$ is not more than $32400$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 51,
    solution_overview: `The annual fee is a percentage of AUM plus a flat retainer that is the same for every client. Client 2 has $\\$600{,}000$ of AUM and pays $\\$10{,}800$. Client 1 has $\\$150{,}000$ more AUM and pays $\\$2{,}400$ more.

Let $r$ be the fee rate and $y$ the retainer. The retainer cancels in the difference, so

$$150000r=2400$$

$$600000r+y=10800$$`,
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
      `If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.`,
      `The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.`,
      `Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Suspension B's concentration is more than 85% higher than Suspension A's concentration.**  (true)

The two complete batches are

$$500a+300b=8880$$

$$200a+700b=12600$$

Eliminating $b$ recovers $a=8.4$ and $b=15.6$. Then $15.6/8.4-1\\approx 0.857$, more than $85\\%$ higher, so the statement is True.`,
      `**B) Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.**  (false)

Batch 3 is predicted at $320(8.4)+450(15.6)=9708$ mg against $9700$ mg recorded. The $8$ mg gap is $8/9700\\approx 0.082\\%$ of the recorded value, not more than $1\\%$, so the statement is False.`,
      `**C) If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.**  (true)

Doubling Batch 1's B volume gives $500(8.4)+600(15.6)=13560$ mg, which exceeds $13{,}500$ mg, so the statement is True.`,
      `**D) The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.**  (true)

Pooling Batches 1 and 2 yields $8880+12600=21480$ mg. Twice Batch 2 is $25200$ mg, and $21480<25200$, so the statement is True.`,
      `**E) Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.**  (true)

Batch 2 used $700/900$ of its volume as B. Batch 3 used $450/770$. Since $0.778>0.584$, Batch 2 used the higher B share, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 52,
    solution_overview: `Each suspension has a fixed concentration in mg/mL. Batch 3's $0.32$ L is $320$ mL.

Let $a$ be Suspension A's mg per mL and $b$ Suspension B's. Batches 1 and 2 give

$$500a+300b=8880$$

$$200a+700b=12600$$`,
  },
  {
    id: `math-5-53`,
    case_id: `MATH 5.53`,
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

Job 1 orders $224$ studs and $162$ sheets; Job 2 orders $392$ studs and $189$ sheets:

$$224x+162y=7164$$

$$392x+189y=8946$$

The pair recovers $x=4.50$ and $y=38$. Invoice 1's waste is $24$ studs and $12$ sheets, costing $24(4.50)+12(38)=564$, which does not exceed $\\$700$, so the statement is False.`,
      `**B) If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than \\$150.00.**  (true)

Cutting drywall waste from $8\\%$ to $5\\%$ on Job 2 would order $183.75$ sheets instead of $189$. The saving is $5.25(38)=199.50$, more than $\\$150$, so the statement is True.`,
      `**C) Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.**  (true)

Job 2's usable material costs $350(4.50)+175(38)=8225$. Then $8225/8946\\approx 0.919$, more than $90\\%$ of the invoice, so the statement is True.`,
      `**D) The drywall price (y) is more than 8 times the stud price (x).**  (true)

The recovered prices give $38/4.50\\approx 8.44$, more than $8$ times, so the statement is True.`,
      `**E) Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.**  (true)

Invoice 1's waste is $564$ on $6600$ of usable cost, about $8.55\\%$. Invoice 2's waste is $721$ on $8225$, about $8.77\\%$. Job 1 added the smaller percentage, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 53,
    solution_overview: `Every order buys $12\\%$ extra studs and $8\\%$ extra drywall beyond the usable counts. Invoices charge the as-ordered quantities.

Let $x$ be the stud price and $y$ the drywall-sheet price. Job 1 orders $224$ studs and $162$ sheets; Job 2 orders $392$ studs and $189$ sheets:

$$224x+162y=7164$$

$$392x+189y=8946$$`,
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
      `If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.`,
      `The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.`,
      `The percentage increase in true value between Point 1 and Point 2 is more than 100%.`,
      `A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The scale factor exceeds 3.4 by more than 2.5%.**  (true)

The two calibration points are

$$12.4s+b=56.90$$

$$31.7s+b=124.45$$

Subtracting isolates $s=3.50$ and then $b=13.50$. The scale exceeds $3.4$ by $0.10/3.4\\approx 2.94\\%$, more than $2.5\\%$, so the statement is True.`,
      `**B) If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.**  (true)

Doubling the offset to $27$ at a reading of $20$ predicts $3.50(20)+27=97$, which exceeds $95$, so the statement is True.`,
      `**C) The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.**  (false)

At a reading of $45$ the curve predicts $3.50(45)+13.50=171.00$ against a recorded $172.20$. The prediction sits below the recorded value, not above it, so the statement is False.`,
      `**D) The percentage increase in true value between Point 1 and Point 2 is more than 100%.**  (true)

Point 2 over Point 1 is $124.45/56.90-1\\approx 1.187$, more than a $100\\%$ increase, so the statement is True.`,
      `**E) A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).**  (false)

A reading of $8.0$ predicts $3.50(8)+13.50=41.50$. Half of Point 1 is $28.45$, and $41.50$ is not less than that, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 54,
    solution_overview: `The conversion is a linear calibration, true value equal to a scale factor times the reading plus an offset. Points 1 and 2 are the calibration pair; Point 3 is a check.

Let $s$ be the scale factor and $b$ the offset. The two calibration points give

$$12.4s+b=56.90$$

$$31.7s+b=124.45$$`,
  },
  {
    id: `math-5-55`,
    case_id: `MATH 5.55`,
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

Shipment 1 is $312$ kg coffee with $208$ kg cocoa; Shipment 2 is $500$ kg coffee with $300$ kg cocoa:

$$312x+208y=2943.20$$

$$500x+300y=4555$$

The pair recovers $x=6.20$ and $y=4.85$. Then $6.20/4.85-1\\approx 0.278$, more than $25\\%$ more per kilogram, so the statement is True.`,
      `**B) Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.**  (true)

Shipment 1's coffee costs $312(6.20)=1934.40$ out of $2943.20$, about $65.7\\%$, more than $65\\%$, so the statement is True.`,
      `**C) If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual \\$4,555.00.**  (true)

A $1:1$ split of Shipment 2 would be $400$ kg of each and would cost $400(6.20+4.85)=4420$, which is lower than $\\$4{,}555$, so the statement is True.`,
      `**D) The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.**  (false)

Cocoa across both shipments is $508(4.85)=2463.80$. Coffee across both is $812(6.20)=5034.40$. Cocoa does not exceed coffee, so the statement is False.`,
      `**E) The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.**  (true)

The gap is $6.20-4.85=1.35$, and $1.35/6.20\\approx 0.218$, less than $30\\%$ of coffee's price, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 55,
    solution_overview: `Coffee and cocoa keep fixed prices per kilogram. Shipment 1's $520$ kg splits $3:2$ and Shipment 2's $800$ kg splits $5:3$.

Let $x$ be coffee's price per kg and $y$ cocoa's. The splits give $312$ kg coffee with $208$ kg cocoa, and $500$ kg coffee with $300$ kg cocoa:

$$312x+208y=2943.20$$

$$500x+300y=4555$$`,
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
      `If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.`,
      `Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.`,
      `Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Truck fuel consumption is more than 75% higher than Van fuel consumption.**  (true)

Fuel is litres per $100$ km. Routes 1 and 2 give

$$8.5T+6.2V=383.6$$

$$5T+9V=322$$

The pair recovers $T=32$ and $V=18$. Then $32/18-1\\approx 0.778$, more than $75\\%$ higher, so the statement is True.`,
      `**B) Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.**  (false)

Route 3 is predicted at $2.5(32)+4(18)=152$ L against $155$ L recorded. The $3$ L gap is $3/155\\approx 1.94\\%$ below the recorded value, not more than $2\\%$, so the statement is False.`,
      `**C) If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.**  (true)

Replacing Route 1's van distance with $900$ km would burn $8.5(32)+9(18)=434$ L, which exceeds $430$ L, so the statement is True.`,
      `**D) Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.**  (true)

Route 2 used $322$ L over $1400$ km, an average of $23$ L/$100$ km. That sits $5$ from the van's $18$ and $9$ from the truck's $32$, so it is closer to the van, so the statement is True.`,
      `**E) Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.**  (true)

If each type alone covered $1470$ km, the truck would burn $470.4$ L and the van $264.6$ L, summing to $735$ L. Route 1 used only $383.6$ L, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 56,
    solution_overview: `Each vehicle type burns a fixed number of litres per $100$ km. Route 3 converted $155.3$ mi to $250$ km.

Let $T$ be the truck rate and $V$ the van rate, in L/$100$ km. Routes 1 and 2 give

$$8.5T+6.2V=383.6$$

$$5T+9V=322$$`,
  },
  {
    id: `math-5-57`,
    case_id: `MATH 5.57`,
    title: `Whitmore Scholarship Fund  -  Blended-Return Rate Reconstruction`,
    context: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00. A proposed reallocation swapping those amounts (\\$18,000 Bonds, \\$27,000 Equities) would return \\$2,754.00.`,
    statements: [
      `The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.`,
      `Under the current allocation, the blended rate is less than 6%.`,
      `If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns (\\$2,646.00 + \\$2,754.00 = \\$5,400.00).`,
      `A \\frac{50}{50} split (\\$22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.`,
      `The bond rate is more than 80% of the equity rate.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.**  (true)

The current and proposed allocations give

$$27000x+18000y=2646$$

$$18000x+27000y=2754$$

The pair recovers $x=0.054$ and $y=0.066$. The equity premium over the bond rate is $1.2$ percentage points, and $1.2/5.4\\approx 0.222$, more than $20\\%$ of the bond rate, so the statement is True.`,
      `**B) Under the current allocation, the blended rate is less than 6%.**  (true)

The current return on $\\$45{,}000$ is

$$\\frac{2646}{45000}=0.0588$$

which is less than $6\\%$, so the statement is True.`,
      `**C) If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns (\\$2,646.00 + \\$2,754.00 = \\$5,400.00).**  (false)

All equities would return $45000(0.066)=2970$. The two described allocations together return $2646+2754=5400$, and $2970$ does not exceed $5400$, so the statement is False.`,
      `**D) A \\frac{50}{50} split (\\$22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.**  (true)

A $\\$22{,}500$ split of each earns $22500(0.054+0.066)=2700$. The average of $2646$ and $2754$ is also $2700$, so the statement is True.`,
      `**E) The bond rate is more than 80% of the equity rate.**  (true)

Then $5.4/6.6\\approx 0.818$, more than $80\\%$ of the equity rate, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 57,
    solution_overview: `The $\\$45{,}000$ fund splits between a bond portfolio and an equity portfolio, each with a fixed rate.

Let $x$ be the bond rate and $y$ the equity rate. The current and proposed allocations give

$$27000x+18000y=2646$$

$$18000x+27000y=2754$$`,
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
      `If the rate per \\$1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than \\$75.00.`,
      `The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.`,
      `Combining the Auto and Home coverage into a single hypothetical policy (295 units of \\$1,000 coverage total) would cost less than the sum of their separate premiums (\\$612.50 + \\$1,197.50 = \\$1,810.00).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The reconstructed Renters coverage amount is less than \\$30,000.**  (true)

Auto is $85$ units of coverage and Home is $210$:

$$f+85r=612.50$$

$$f+210r=1197.50$$

Subtracting isolates $r=4.68$ and then $f=214.70$. The renters premium $331.70$ then reconstructs $25$ units of coverage, that is $\\$25{,}000$, which is less than $\\$30{,}000$, so the statement is True.`,
      `**B) The fixed administrative fee represents more than 60% of the Auto policy's total premium.**  (false)

The fee is $214.70$ out of Auto's $612.50$, about $35\\%$, not more than $60\\%$, so the statement is False.`,
      `**C) If the rate per \\$1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than \\$75.00.**  (true)

A $10\\%$ rate increase on Home's $210$ units adds $0.10(210)(4.68)=98.28$, which is more than $\\$75$, so the statement is True.`,
      `**D) The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.**  (false)

Home's premium per $\\$1{,}000$ is $1197.50/210\\approx 5.70$ and Auto's is $612.50/85\\approx 7.21$. Home is not twice Auto, so the statement is False.`,
      `**E) Combining the Auto and Home coverage into a single hypothetical policy (295 units of \\$1,000 coverage total) would cost less than the sum of their separate premiums (\\$612.50 + \\$1,197.50 = \\$1,810.00).**  (true)

A single combined policy would pay the fee once: $214.70+295(4.68)=1595.30$, which is less than $612.50+1197.50=1810$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 58,
    solution_overview: `Every policy is a fixed administrative fee plus a rate per $\\$1{,}000$ of coverage. The renters coverage amount is missing.

Let $f$ be the fee and $r$ the rate per $\\$1{,}000$. Auto is $85$ units of coverage and Home is $210$:

$$f+85r=612.50$$

$$f+210r=1197.50$$`,
  },
  {
    id: `math-5-59`,
    case_id: `MATH 5.59`,
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

Species A grows at twice Species B's annual rate $r$. Four years of combined growth give

$$4(2r+r)=1772-1340$$

$$12r=432$$

so $r=36$ and $2r=72$. By Year 6, A is $610+4(72)=898$ and B is $730+4(36)=874$. The gap is $24$, more than $20$, so the statement is True.`,
      `**B) If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.**  (true)

If B also grew at $72$ per year, the combined Year 6 total would rise by an extra $4(36)=144$, more than $140$, so the statement is True.`,
      `**C) The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth: Species B's growth) is greater than 2.5: 1.**  (false)

From Year 2 to Year 6, A grows by $288$ and B by $144$. The ratio is $2:1$, not greater than $2.5:1$, so the statement is False.`,
      `**D) At some point between Year 2 and Year 6, the two species had equal populations.**  (true)

Setting $610+72t=730+36t$ gives $t=10/3$ years after Year 2, which lies between Year 2 and Year 6, so the statement is True.`,
      `**E) Species A overtakes Species B in total population size before Year 5.**  (false)

Equality arrives at Year $2+10/3\\approx 5.33$, which is not before Year 5, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 59,
    solution_overview: `Each species changes by a fixed net count each year. Species A grows at twice Species B's annual rate. Year 2 populations are $610$ and $730$; four years later the combined total is $1772$.

Let $r$ be Species B's annual change. Then A's annual change is $2r$, and the four-year combined growth gives

$$4(2r+r)=1772-1340$$

$$12r=432$$`,
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
      `If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).`,
      `The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.`,
      `Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) Plant A's output rate exceeds Plant B's by more than 45%.**  (true)

Days 1 and 2 give

$$14x+20y=3990$$

$$22x+9y=4072$$

The pair recovers $x=145$ and $y=98$. Then $145/98-1\\approx 0.480$, more than $45\\%$ higher, so the statement is True.`,
      `**B) Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.**  (true)

Day 3 is predicted at $17(145)+11(98)=3543$ MWh against $3553$ MWh recorded. The $10$ MWh gap is $10/3553\\approx 0.281\\%$ of the recorded value, less than $0.3\\%$, so the statement is True.`,
      `**C) If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).**  (false)

Swapping the combined hours would produce $29(145)+36(98)=7733$ MWh. Days 1 and 2 together actually produced $8062$ MWh, and $7733$ does not exceed that, so the statement is False.`,
      `**D) The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.**  (true)

The combined rate is $145+98=243$. Then $2.4(98)=235.2$, and $243>235.2$, so the statement is True.`,
      `**E) Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.**  (true)

Using the recorded Day 3 figure, $3990+4072+3553=11615$, which exceeds $11{,}600$ MWh, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 60,
    solution_overview: `Each plant produces a fixed MWh per hour. Day 3 converted $1{,}020$ min to $17$ hours.

Let $x$ be Plant A's MWh per hour and $y$ Plant B's. Days 1 and 2 give

$$14x+20y=3990$$

$$22x+9y=4072$$`,
  },
];
