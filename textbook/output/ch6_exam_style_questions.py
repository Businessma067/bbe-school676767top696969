"""Chapter 6.5 word-problem questions (context = question, statements = short answer checks)."""

QUESTION_SPECS: list[dict] = [
    {
        "title": 'Taxi fare budget',
        "diff": '3/5',
        "context": 'A taxi charges 3.50 EUR as a base fare plus 1.20 EUR for every kilometre driven. A passenger has exactly 18 EUR for the ride. What is the greatest whole number of kilometres the passenger can travel without going over budget?',
        "overview": ('Set up a linear inequality for the fare, solve for distance, then round down to a whole number of kilometres.'),
        "items": [
            (
                'The greatest whole number of kilometres is 12.',
                True,
                """**Reading the wording**

Base fare 3.50 EUR plus 1.20 EUR per km; budget 18 EUR. Find the largest whole km count with fare at most 18 EUR.

**Choose a variable**

Let $d$ be the distance in kilometres. For a whole-number answer, $d$ is an integer.

**Translate into an inequality**

Fare: $3.50 + 1.20d$. Budget: $3.50 + 1.20d \le 18$.

**Solve step by step**

$1.20d \le 14.50$
$d \le \dfrac{14.50}{1.20} \approx 12.083$.
Largest whole $d$: 12.

**Interpret the result**

At most about 12.08 km are affordable, so the greatest whole number is 12.

**Compare to the claim**

The claim matches the solution, so it is true.

**Quick check:** $d = 12$ costs $17.90 \le 18$; $d = 13$ costs $19.10 > 18$.""",
            ),
            (
                'Travelling 13 km still stays within the 18 EUR budget.',
                False,
                """**Reading the wording**

Same fare model; check whether 13 km is affordable.

**Choose a variable**

Let $d = 13$.

**Translate into an inequality**

$3.50 + 1.20 \cdot 13 \le 18$?

**Solve step by step**

$3.50 + 15.60 = 19.10 > 18$.

**Interpret the result**

Thirteen kilometres overshoots the budget.

**Compare to the claim**

The claim is false.

**Quick check:** Maximum whole km is 12.""",
            ),
            (
                'The exact continuous maximum distance is greater than 12 km.',
                True,
                """**Reading the wording**

Before rounding to whole kilometres, the continuous bound was about 12.08 km.

**Choose a variable**

Let $d$ be a real distance.

**Translate into an inequality**

$3.50 + 1.20d \le 18$ gives $d \le 12.083\ldots$.

**Solve step by step**

The continuous maximum is about 12.08 km.

**Interpret the result**

That value is greater than 12.

**Compare to the claim**

The claim is true.

**Quick check:** $d = 12.08$ is allowed; $d = 12.09$ is not.""",
            ),
        ],
    },
    {
        "title": 'Mobile data overage',
        "diff": '3/5',
        "context": 'A mobile plan costs 12 EUR per month plus 0.08 EUR for every megabyte used beyond the allowance. A customer has already used 200 MB over the allowance this month and wants the total bill to stay at or under 40 EUR. How many more over-allowance megabytes can they still use?',
        "overview": ('Write the bill as a linear expression in the remaining overage, solve the inequality, and read the upper bound.'),
        "items": [
            (
                'They can still use at most 150 more over-allowance megabytes.',
                True,
                """**Reading the wording**

Fixed 12 EUR; 0.08 EUR per overage MB; already 200 MB over; bill at most 40 EUR.

**Choose a variable**

Let $m$ be additional over-allowance megabytes ($m \ge 0$).

**Translate into an inequality**

$12 + 0.08(200 + m) \le 40$.

**Solve step by step**

$28 + 0.08m \le 40$
$m \le 150$.

**Interpret the result**

At most 150 further MB keep the bill within 40 EUR.

**Compare to the claim**

True.

**Quick check:** $m = 150$ gives bill 40 EUR; $m = 151$ gives 40.08 EUR.""",
            ),
            (
                'Using 160 more over-allowance megabytes still keeps the bill at or under 40 EUR.',
                False,
                """**Reading the wording**

Check $m = 160$ in the same bill formula.

**Choose a variable**

$m = 160$.

**Translate into an inequality**

$12 + 0.08(360) = 40.80$.

**Solve step by step**

$40.80 > 40$.

**Interpret the result**

160 MB more is too much.

**Compare to the claim**

False.

**Quick check:** The cutoff is $m \le 150$.""",
            ),
            (
                'If they use no more overage at all, the bill is already over 40 EUR.',
                False,
                """**Reading the wording**

Check the bill with only the 200 MB already used.

**Choose a variable**

$m = 0$.

**Translate into an inequality**

$12 + 0.08 \cdot 200 = 28$.

**Solve step by step**

$28 \le 40$.

**Interpret the result**

The bill is still well under 40 EUR.

**Compare to the claim**

False.

**Quick check:** They have room for up to 150 more MB.""",
            ),
        ],
    },
    {
        "title": 'Weekend trip savings',
        "diff": '3/5',
        "context": 'Maya already has 40 EUR and saves 25 EUR every week. She needs at least 300 EUR for a weekend trip. What is the smallest number of whole weeks she must keep saving to reach her goal?',
        "overview": ('Solve a linear inequality for weeks and round up to the next whole week.'),
        "items": [
            (
                'The smallest number of whole weeks is 11.',
                True,
                """**Reading the wording**

Start 40 EUR; +25 EUR/week; need at least 300 EUR.

**Choose a variable**

Let $w$ be whole weeks of saving.

**Translate into an inequality**

$40 + 25w \ge 300$.

**Solve step by step**

$25w \ge 260$
$w \ge 10.4$.
Smallest whole $w$: 11.

**Interpret the result**

After 10 weeks she is still short; 11 weeks is the first that works.

**Compare to the claim**

True.

**Quick check:** $w = 10$ gives 290 EUR; $w = 11$ gives 315 EUR.""",
            ),
            (
                'After 10 weeks she already has enough money.',
                False,
                """**Reading the wording**

Evaluate the amount after 10 weeks.

**Choose a variable**

$w = 10$.

**Translate into an inequality**

$40 + 250 = 290$.

**Solve step by step**

$290 < 300$.

**Interpret the result**

She is 10 EUR short.

**Compare to the claim**

False.

**Quick check:** She needs 11 weeks.""",
            ),
            (
                'Any real number of weeks greater than or equal to 10.4 would work if fractional weeks were allowed.',
                True,
                """**Reading the wording**

The continuous solution of the inequality is $w \ge 10.4$.

**Choose a variable**

Real $w \ge 0$.

**Translate into an inequality**

$40 + 25w \ge 300$ iff $w \ge 10.4$.

**Solve step by step**

Every real $w \ge 10.4$ meets the goal.

**Interpret the result**

That is exactly the continuous solution set.

**Compare to the claim**

True.

**Quick check:** In practice she counts whole weeks, so she uses 11.""",
            ),
        ],
    },
    {
        "title": 'Elevator load limit',
        "diff": '2/5',
        "context": 'An elevator may carry at most 600 kg. Three adults of 70 kg, 85 kg, and 90 kg are already inside. Each child weighs 35 kg. What is the greatest number of such children who can still enter without exceeding the limit?',
        "overview": ('Subtract the current load from the capacity and divide by the child mass; take the integer part.'),
        "items": [
            (
                'At most 10 children can still enter.',
                True,
                """**Reading the wording**

Capacity 600 kg; adults already 245 kg; each child 35 kg.

**Choose a variable**

Let $c$ be the number of children (whole number).

**Translate into an inequality**

$245 + 35c \le 600$.

**Solve step by step**

$35c \le 355$
$c \le 10.14\ldots$.
Largest whole $c$: 10.

**Interpret the result**

Ten children add 350 kg for a total of 595 kg.

**Compare to the claim**

True.

**Quick check:** $c = 10$ gives 595 kg; $c = 11$ gives 630 kg.""",
            ),
            (
                'Eleven children can still enter safely.',
                False,
                """**Reading the wording**

Check $c = 11$.

**Choose a variable**

$c = 11$.

**Translate into an inequality**

$245 + 385 = 630$.

**Solve step by step**

$630 > 600$.

**Interpret the result**

Eleven children exceed the limit.

**Compare to the claim**

False.

**Quick check:** Maximum is 10.""",
            ),
            (
                'With no children, more than half of the capacity is already used.',
                False,
                """**Reading the wording**

Adults alone weigh 245 kg; half of 600 is 300 kg.

**Choose a variable**

Compare 245 with 300.

**Translate into an inequality**

$245 < 300$.

**Solve step by step**

Less than half the capacity is used.

**Interpret the result**

About 40.8% of capacity is used by the adults.

**Compare to the claim**

False.

**Quick check:** $245/600 \approx 0.408$.""",
            ),
        ],
    },
    {
        "title": 'Car rental kilometres',
        "diff": '3/5',
        "context": 'A car rental costs 45 EUR per day plus 0.25 EUR per kilometre. A tourist rents the car for exactly 3 days and has a total budget of 200 EUR for the rental. What is the greatest whole number of kilometres they can drive without exceeding the budget?',
        "overview": ('Fix the 3-day charge, solve for kilometres, then take the greatest whole number.'),
        "items": [
            (
                'The greatest whole number of kilometres is 260.',
                True,
                """**Reading the wording**

3 days × 45 EUR = 135 EUR fixed; +0.25 EUR/km; budget 200 EUR.

**Choose a variable**

Let $k$ be kilometres (whole number).

**Translate into an inequality**

$135 + 0.25k \le 200$.

**Solve step by step**

$0.25k \le 65$
$k \le 260$.

**Interpret the result**

Exactly 260 km uses the full budget.

**Compare to the claim**

True.

**Quick check:** $k = 260$ costs 200 EUR; $k = 261$ costs 200.25 EUR.""",
            ),
            (
                'Driving 300 km stays within the 200 EUR budget.',
                False,
                """**Reading the wording**

Check $k = 300$.

**Choose a variable**

$k = 300$.

**Translate into an inequality**

$135 + 75 = 210$.

**Solve step by step**

$210 > 200$.

**Interpret the result**

300 km is over budget.

**Compare to the claim**

False.

**Quick check:** Maximum is 260 km.""",
            ),
            (
                'The fixed 3-day charge alone already uses more than half of the budget.',
                True,
                """**Reading the wording**

Fixed charge 135 EUR; budget 200 EUR; half is 100 EUR.

**Choose a variable**

Compare 135 with 100.

**Translate into an inequality**

$135 > 100$.

**Solve step by step**

The daily charges alone exceed half the budget.

**Interpret the result**

Only 65 EUR remains for kilometres.

**Compare to the claim**

True.

**Quick check:** $135/200 = 0.675$.""",
            ),
        ],
    },
    {
        "title": 'Weekly pay with bonus',
        "diff": '4/5',
        "context": 'Leo earns 14 EUR per hour and receives a 50 EUR bonus if he works more than 25 hours in a week. He wants total pay of at least 450 EUR this week and will work more than 25 hours (so the bonus applies). What is the smallest whole number of hours he must work?',
        "overview": ('Include the bonus in the pay formula, solve the inequality, and round up to a whole hour.'),
        "items": [
            (
                'The smallest whole number of hours is 29.',
                True,
                """**Reading the wording**

For $h > 25$, pay $= 14h + 50$. Need pay at least 450 EUR.

**Choose a variable**

Let $h$ be hours ($h > 25$, whole).

**Translate into an inequality**

$14h + 50 \ge 450$.

**Solve step by step**

$14h \ge 400$
$h \ge \dfrac{400}{14} \approx 28.57$.
Smallest whole $h$: 29.

**Interpret the result**

28 hours give only 442 EUR; 29 hours give 456 EUR.

**Compare to the claim**

True.

**Quick check:** $h = 28$: $442 < 450$; $h = 29$: $456 \ge 450$.""",
            ),
            (
                'Working 28 hours is enough to reach 450 EUR.',
                False,
                """**Reading the wording**

Evaluate pay at 28 hours with bonus.

**Choose a variable**

$h = 28$.

**Translate into an inequality**

$14 \cdot 28 + 50 = 442$.

**Solve step by step**

$442 < 450$.

**Interpret the result**

28 hours is not enough.

**Compare to the claim**

False.

**Quick check:** He needs 29 hours.""",
            ),
            (
                'Without the bonus, he would need more than 32 hours to reach 450 EUR.',
                True,
                """**Reading the wording**

Without bonus, pay $= 14h$. Need $14h \ge 450$.

**Choose a variable**

$h$ hours, no bonus.

**Translate into an inequality**

$h \ge \dfrac{450}{14} \approx 32.14$.

**Solve step by step**

He would need at least 33 whole hours.

**Interpret the result**

That is more than 32 hours.

**Compare to the claim**

True.

**Quick check:** $h = 32$ gives 448 EUR without bonus.""",
            ),
        ],
    },
    {
        "title": 'Fuel budget for a trip',
        "diff": '3/5',
        "context": 'A car uses 0.07 litres of fuel per kilometre. Fuel costs 1.60 EUR per litre. A driver has 56 EUR to spend on fuel for a trip. What is the greatest trip distance in kilometres that stays within this fuel budget?',
        "overview": ('Combine consumption and price into a cost-per-kilometre rate, then solve the budget inequality.'),
        "items": [
            (
                'The greatest distance is exactly 500 km.',
                True,
                """**Reading the wording**

0.07 L/km at 1.60 EUR/L; budget 56 EUR.

**Choose a variable**

Let $d$ be distance in km.

**Translate into an inequality**

Cost: $1.60 \cdot 0.07d = 0.112d \le 56$.

**Solve step by step**

$d \le \dfrac{56}{0.112} = 500$.

**Interpret the result**

The maximum is exactly 500 km.

**Compare to the claim**

True.

**Quick check:** $d = 500$ costs 56 EUR; $d = 501$ costs 56.112 EUR.""",
            ),
            (
                'A 480 km trip costs more than 56 EUR in fuel.',
                False,
                """**Reading the wording**

Compute cost at 480 km.

**Choose a variable**

$d = 480$.

**Translate into an inequality**

$0.112 \cdot 480 = 53.76$.

**Solve step by step**

$53.76 \le 56$.

**Interpret the result**

480 km is still within budget.

**Compare to the claim**

False.

**Quick check:** Only beyond 500 km exceeds 56 EUR.""",
            ),
            (
                'Each kilometre costs 0.112 EUR in fuel.',
                True,
                """**Reading the wording**

Price per litre times litres per kilometre.

**Choose a variable**

Unit cost $= 1.60 \cdot 0.07$.

**Translate into an inequality**

$1.60 \cdot 0.07 = 0.112$ EUR/km.

**Solve step by step**

That is the slope of the cost function.

**Interpret the result**

Budget divided by 0.112 gives 500 km.

**Compare to the claim**

True.

**Quick check:** $56 / 0.112 = 500$.""",
            ),
        ],
    },
    {
        "title": 'Medicine fridge temperature',
        "diff": '4/5',
        "context": 'A medicine fridge must stay between 2 °C and 8 °C inclusive. A technician proposes the condition |T − 5| ≤ 3 as a test for acceptable temperature T. Does this absolute-value condition match the required temperature range exactly?',
        "overview": ('Rewrite the absolute-value inequality as a closed interval and compare it with [2, 8].'),
        "items": [
            (
                'The condition |T − 5| ≤ 3 is exactly the same as 2 ≤ T ≤ 8.',
                True,
                """**Reading the wording**

Required range [2, 8]. Proposed: |T−5|≤3.

**Choose a variable**

Let $T$ be temperature in °C.

**Translate into an inequality**

$|T - 5| \le 3$ means $-3 \le T - 5 \le 3$, so $2 \le T \le 8$.

**Solve step by step**

The two descriptions are identical.

**Interpret the result**

The condition matches the range exactly.

**Compare to the claim**

True.

**Quick check:** $T = 2$ and $T = 8$ give absolute deviation 3; $T = 1$ gives 4.""",
            ),
            (
                'The wider condition |T − 5| ≤ 4 also matches the required range exactly.',
                False,
                """**Reading the wording**

|T−5|≤4 expands to [1, 9], which is wider than [2, 8].

**Choose a variable**

$T$ temperature.

**Translate into an inequality**

$1 \le T \le 9$ versus $2 \le T \le 8$.

**Solve step by step**

The sets are not equal.

**Interpret the result**

The wider condition allows unsafe temperatures.

**Compare to the claim**

False.

**Quick check:** $T = 1$ satisfies |T−5|≤4 but not the required range.""",
            ),
            (
                'Every temperature that satisfies |T − 5| ≤ 3 is at least 2 °C.',
                True,
                """**Reading the wording**

From |T−5|≤3 we get T≥2.

**Choose a variable**

$T$ temperature.

**Translate into an inequality**

$-3 \le T - 5$ implies $T \ge 2$.

**Solve step by step**

The lower bound is included.

**Interpret the result**

Same for the upper bound $T \le 8$.

**Compare to the claim**

True.

**Quick check:** The interval is exactly $[2, 8]$.""",
            ),
        ],
    },
    {
        "title": 'Water tank filling time',
        "diff": '3/5',
        "context": 'An empty tank holds 480 litres. A tap fills it at 12 litres per minute. After how many minutes of continuous filling from empty is the tank exactly half full?',
        "overview": ('Set volume = rate × time and compare with half capacity.'),
        "items": [
            (
                'The tank is exactly half full after 20 minutes.',
                True,
                """**Reading the wording**

Capacity 480 L; half = 240 L; rate 12 L/min.

**Choose a variable**

Let $t$ be minutes.

**Translate into an inequality**

$12t = 240$.

**Solve step by step**

$t = 20$.

**Interpret the result**

After 20 minutes the volume is exactly half.

**Compare to the claim**

True.

**Quick check:** $12 \cdot 20 = 240$.""",
            ),
            (
                'After 30 minutes the tank is still at most half full.',
                False,
                """**Reading the wording**

Volume after 30 min is 360 L; half is 240 L.

**Choose a variable**

$t = 30$.

**Translate into an inequality**

$360 \le 240$?

**Solve step by step**

$360 > 240$.

**Interpret the result**

The tank is three-quarters full.

**Compare to the claim**

False.

**Quick check:** $360/480 = 0.75$.""",
            ),
            (
                'The tank becomes completely full in 40 minutes.',
                True,
                """**Reading the wording**

Full means 480 L at 12 L/min.

**Choose a variable**

$12t = 480$.

**Translate into an inequality**

$t = 40$.

**Solve step by step**

40 minutes fill the tank.

**Interpret the result**

Yes.

**Compare to the claim**

True.

**Quick check:** $12 \cdot 40 = 480$.""",
            ),
        ],
    },
    {
        "title": 'Courier delivery deadline',
        "diff": '3/5',
        "context": 'A courier must finish a delivery within 90 minutes. Driving takes 1.5 minutes per kilometre, and there is a fixed 15-minute stop at the warehouse. What is the greatest delivery distance in kilometres that can still be completed on time?',
        "overview": ('Subtract the fixed stop from the time limit, then divide by the per-kilometre driving time.'),
        "items": [
            (
                'The greatest on-time distance is 50 km.',
                True,
                """**Reading the wording**

Limit 90 min; fixed stop 15 min; 1.5 min/km driving.

**Choose a variable**

Let $d$ be distance in km.

**Translate into an inequality**

$15 + 1.5d \le 90$.

**Solve step by step**

$1.5d \le 75$
$d \le 50$.

**Interpret the result**

Maximum on-time distance is 50 km.

**Compare to the claim**

True.

**Quick check:** $d = 50$ uses exactly 90 min; $d = 51$ uses 91.5 min.""",
            ),
            (
                'A 45 km delivery cannot be completed on time.',
                False,
                """**Reading the wording**

Check time for 45 km.

**Choose a variable**

$d = 45$.

**Translate into an inequality**

$15 + 67.5 = 82.5$.

**Solve step by step**

$82.5 \le 90$.

**Interpret the result**

45 km is on time.

**Compare to the claim**

False.

**Quick check:** Anything up to 50 km works.""",
            ),
            (
                'Without the warehouse stop, the courier could cover more than 50 km in 90 minutes.',
                True,
                """**Reading the wording**

If only driving: $1.5d \le 90$ gives $d \le 60$.

**Choose a variable**

$d$ distance, no stop.

**Translate into an inequality**

$d \le 60$.

**Solve step by step**

60 km is greater than 50 km.

**Interpret the result**

The 15-minute stop costs 10 km of range.

**Compare to the claim**

True.

**Quick check:** $90/1.5 = 60$.""",
            ),
        ],
    },
    {
        "title": 'Shop discount budget',
        "diff": '3/5',
        "context": 'A shop offers 20% off every marked price. Nora has 48 EUR and wants to buy one item after the discount. What is the greatest marked price she can afford?',
        "overview": ('Paying 80% of the marked price, solve 0.8p ≤ 48 for p.'),
        "items": [
            (
                'The greatest affordable marked price is 60 EUR.',
                True,
                """**Reading the wording**

20% off means she pays 80%; cash 48 EUR.

**Choose a variable**

Let $p$ be marked price.

**Translate into an inequality**

$0.8p \le 48$.

**Solve step by step**

$p \le 60$.

**Interpret the result**

Maximum marked price is 60 EUR.

**Compare to the claim**

True.

**Quick check:** $p = 60$ costs 48 EUR; $p = 61$ costs 48.80 EUR.""",
            ),
            (
                'An item marked 55 EUR costs more than 48 EUR after the discount.',
                False,
                """**Reading the wording**

Discounted price of 55 EUR is 44 EUR.

**Choose a variable**

$p = 55$.

**Translate into an inequality**

$0.8 \cdot 55 = 44$.

**Solve step by step**

$44 \le 48$.

**Interpret the result**

44 EUR is affordable.

**Compare to the claim**

False.

**Quick check:** Only marked prices above 60 EUR fail.""",
            ),
            (
                'If the marked price is halved, Nora pays 40% of the original marked price.',
                True,
                """**Reading the wording**

She always pays 80% of the shown mark.

**Choose a variable**

Original mark $p$; new mark $p/2$.

**Translate into an inequality**

Payment $= 0.8 \cdot (p/2) = 0.4p$.

**Solve step by step**

That is 40% of the original mark.

**Interpret the result**

True as a percentage of the original mark.

**Compare to the claim**

True.

**Quick check:** Mark 60 → pay 48; mark 30 → pay 24 = 40% of 60.""",
            ),
        ],
    },
    {
        "title": 'Weighted exam grade',
        "diff": '4/5',
        "context": 'An exam has Part A worth 40% of the grade and Part B worth 60%. Sam scored 70% on Part A. What is the lowest whole-number percent he needs on Part B to reach an overall grade of at least 85%?',
        "overview": ('Write the weighted average inequality and solve for Part B; round up to a whole percent.'),
        "items": [
            (
                'He needs at least 95% on Part B.',
                True,
                """**Reading the wording**

Overall = 0.4·70 + 0.6·b = 28 + 0.6b. Need at least 85.

**Choose a variable**

Let $b$ be Part B percent.

**Translate into an inequality**

$28 + 0.6b \ge 85$.

**Solve step by step**

$0.6b \ge 57$
$b \ge 95$.

**Interpret the result**

The lowest whole percent is 95.

**Compare to the claim**

True.

**Quick check:** $b = 95$ gives 85%; $b = 94$ gives 84.4%.""",
            ),
            (
                'Scoring 80% on Part B is enough for an 85% overall grade.',
                False,
                """**Reading the wording**

Overall at b=80 is 76%.

**Choose a variable**

$b = 80$.

**Translate into an inequality**

$28 + 48 = 76$.

**Solve step by step**

$76 < 85$.

**Interpret the result**

80% on B only yields 76% overall.

**Compare to the claim**

False.

**Quick check:** He needs 95% on B.""",
            ),
            (
                'Part A alone already contributes 28 percentage points to the overall grade.',
                True,
                """**Reading the wording**

$0.4 \cdot 70 = 28$.

**Choose a variable**

Fixed contribution from A.

**Translate into an inequality**

Overall $= 28 + 0.6b$.

**Solve step by step**

28 points are locked in.

**Interpret the result**

He still needs 57 more points from Part B’s 60% weight.

**Compare to the claim**

True.

**Quick check:** $0.6 \cdot 95 = 57$.""",
            ),
        ],
    },
    {
        "title": 'Weekly calorie goal',
        "diff": '3/5',
        "context": 'Ana burns about 8 kcal per minute of jogging. She has already burned 900 kcal from other activity this week and wants a weekly total of at least 2500 kcal. What is the smallest whole number of jogging minutes she still needs?',
        "overview": ('Solve 900 + 8m ≥ 2500 for m and round up.'),
        "items": [
            (
                'She needs at least 200 minutes of jogging.',
                True,
                """**Reading the wording**

Already 900 kcal; +8 kcal/min; goal at least 2500.

**Choose a variable**

Let $m$ be jogging minutes.

**Translate into an inequality**

$900 + 8m \ge 2500$.

**Solve step by step**

$8m \ge 1600$
$m \ge 200$.

**Interpret the result**

Exactly 200 minutes meet the goal.

**Compare to the claim**

True.

**Quick check:** $m = 200$ gives 2500 kcal; $m = 199$ gives 2492.""",
            ),
            (
                'Three hours of jogging (180 minutes) are enough.',
                False,
                """**Reading the wording**

$900 + 8\cdot180 = 2340 < 2500$.

**Choose a variable**

$m = 180$.

**Translate into an inequality**

$2340 \ge 2500$?

**Solve step by step**

No.

**Interpret the result**

Three hours leave her 160 kcal short.

**Compare to the claim**

False.

**Quick check:** She needs 200 minutes.""",
            ),
            (
                'Each additional jogging minute closes the gap by 8 kcal.',
                True,
                """**Reading the wording**

The coefficient of $m$ in $900 + 8m$ is 8.

**Choose a variable**

Rate of calorie burn while jogging.

**Translate into an inequality**

Slope is 8 kcal per minute.

**Solve step by step**

Gap from 900 to 2500 is 1600 kcal.

**Interpret the result**

1600 / 8 = 200 minutes.

**Compare to the claim**

True.

**Quick check:** $900 + 8\cdot200 = 2500$.""",
            ),
        ],
    },
    {
        "title": 'Parcel weight limit',
        "diff": '3/5',
        "context": 'A courier accepts a parcel only if its mass is at most 5 kg. A box with packaging weighs 1.2 kg, and each item placed inside weighs 0.4 kg. What is the greatest number of items that can go in the box and still be accepted?',
        "overview": ('Solve 1.2 + 0.4n ≤ 5 for a whole number n.'),
        "items": [
            (
                'The greatest number of items is 9.',
                True,
                """**Reading the wording**

Max mass 5 kg; box 1.2 kg; items 0.4 kg each.

**Choose a variable**

Let $n$ be the number of items (whole).

**Translate into an inequality**

$1.2 + 0.4n \le 5$.

**Solve step by step**

$0.4n \le 3.8$
$n \le 9.5$.
Largest whole $n$: 9.

**Interpret the result**

Nine items give total mass 4.8 kg.

**Compare to the claim**

True.

**Quick check:** $n = 9$ → 4.8 kg; $n = 10$ → 5.2 kg.""",
            ),
            (
                'Ten items are still accepted.',
                False,
                """**Reading the wording**

$1.2 + 4.0 = 5.2 > 5$.

**Choose a variable**

$n = 10$.

**Translate into an inequality**

$5.2 \le 5$?

**Solve step by step**

No.

**Interpret the result**

Ten items are rejected.

**Compare to the claim**

False.

**Quick check:** Maximum is 9.""",
            ),
            (
                'The empty box alone uses less than 25% of the allowed mass.',
                True,
                """**Reading the wording**

Empty box 1.2 kg; 25% of 5 kg is 1.25 kg.

**Choose a variable**

Compare 1.2 with 1.25.

**Translate into an inequality**

$1.2 < 1.25$.

**Solve step by step**

Slightly under 25%.

**Interpret the result**

True.

**Compare to the claim**

True.

**Quick check:** $1.2/5 = 0.24$.""",
            ),
        ],
    },
    {
        "title": 'Concert group tickets',
        "diff": '3/5',
        "context": 'Concert tickets cost 28 EUR each, and a group booking fee of 12 EUR is added once for the whole group. A club has 160 EUR to spend. What is the greatest number of people they can buy tickets for without going over budget?',
        "overview": ('Solve 28n + 12 ≤ 160 for a whole number n.'),
        "items": [
            (
                'The greatest number of people is 5.',
                True,
                """**Reading the wording**

28 EUR/ticket + 12 EUR fee once; budget 160 EUR.

**Choose a variable**

Let $n$ be the number of tickets (whole, $n \ge 1$).

**Translate into an inequality**

$28n + 12 \le 160$.

**Solve step by step**

$28n \le 148$
$n \le 5.286\ldots$.
Largest whole $n$: 5.

**Interpret the result**

Five tickets cost 152 EUR.

**Compare to the claim**

True.

**Quick check:** $n = 5$ → 152 EUR; $n = 6$ → 180 EUR.""",
            ),
            (
                'Six people can be booked within the 160 EUR budget.',
                False,
                """**Reading the wording**

$28\cdot6 + 12 = 180 > 160$.

**Choose a variable**

$n = 6$.

**Translate into an inequality**

$180 \le 160$?

**Solve step by step**

No.

**Interpret the result**

Six people are over budget.

**Compare to the claim**

False.

**Quick check:** Maximum is 5.""",
            ),
            (
                'The booking fee alone is less than 10% of the club’s budget.',
                True,
                """**Reading the wording**

Fee 12 EUR; budget 160 EUR; 10% of 160 is 16 EUR.

**Choose a variable**

Compare 12 with 16.

**Translate into an inequality**

$12 < 16$.

**Solve step by step**

The fee is 7.5% of the budget.

**Interpret the result**

Most of the budget goes to ticket prices.

**Compare to the claim**

True.

**Quick check:** $12/160 = 0.075$.""",
            ),
        ],
    },
    {
        "title": 'Train arrival speed',
        "diff": '4/5',
        "context": 'A train journey is 180 km long. A passenger needs to arrive in at most 2.5 hours. What is the smallest constant average speed in km/h that gets them there on time?',
        "overview": ('Use time = distance/speed and solve the inequality for speed.'),
        "items": [
            (
                'The smallest sufficient average speed is 72 km/h.',
                True,
                """**Reading the wording**

Distance 180 km; time at most 2.5 h.

**Choose a variable**

Let $v > 0$ be average speed in km/h.

**Translate into an inequality**

$\dfrac{180}{v} \le 2.5$.

**Solve step by step**

$180 \le 2.5v$
$v \ge 72$.

**Interpret the result**

Minimum speed is 72 km/h.

**Compare to the claim**

True.

**Quick check:** $v = 72$ gives time 2.5 h; $v = 71$ gives about 2.535 h.""",
            ),
            (
                'An average speed of 70 km/h is fast enough.',
                False,
                """**Reading the wording**

Time at 70 km/h is about 2.571 h.

**Choose a variable**

$v = 70$.

**Translate into an inequality**

$180/70 \approx 2.571$.

**Solve step by step**

$2.571 > 2.5$.

**Interpret the result**

70 km/h is too slow.

**Compare to the claim**

False.

**Quick check:** Need at least 72 km/h.""",
            ),
            (
                'Higher speed always means shorter travel time for this trip.',
                True,
                """**Reading the wording**

Time $180/v$ decreases as $v$ increases for $v > 0$.

**Choose a variable**

$v$ speed.

**Translate into an inequality**

If $v_1 < v_2$ then $180/v_1 > 180/v_2$.

**Solve step by step**

Larger speed shortens time.

**Interpret the result**

That is why the inequality opens as $v \ge 72$.

**Compare to the claim**

True.

**Quick check:** Doubling speed halves the time.""",
            ),
        ],
    },
    {
        "title": 'Bridge weight capacity',
        "diff": '3/5',
        "context": 'A bridge may carry at most 12 tonnes. Each delivery truck weighs 2.8 tonnes empty and may carry up to 1.5 tonnes of cargo. What is the greatest number of fully loaded trucks that may be on the bridge at the same time?',
        "overview": ('Compute one fully loaded truck’s mass, then solve n · 4.3 ≤ 12 for a whole n.'),
        "items": [
            (
                'At most 2 fully loaded trucks may be on the bridge.',
                True,
                """**Reading the wording**

One full truck: 2.8 + 1.5 = 4.3 tonnes; limit 12 tonnes.

**Choose a variable**

Let $n$ be the number of full trucks (whole).

**Translate into an inequality**

$4.3n \le 12$.

**Solve step by step**

$n \le \dfrac{12}{4.3} \approx 2.79$.
Largest whole $n$: 2.

**Interpret the result**

Two trucks weigh 8.6 tonnes; three would weigh 12.9 tonnes.

**Compare to the claim**

True.

**Quick check:** $n = 2$ → 8.6 ≤ 12; $n = 3$ → 12.9 > 12.""",
            ),
            (
                'Three fully loaded trucks are allowed.',
                False,
                """**Reading the wording**

$4.3 \cdot 3 = 12.9 > 12$.

**Choose a variable**

$n = 3$.

**Translate into an inequality**

$12.9 \le 12$?

**Solve step by step**

No.

**Interpret the result**

Three trucks exceed the limit.

**Compare to the claim**

False.

**Quick check:** Maximum is 2.""",
            ),
            (
                'One empty truck (no cargo) uses less than a quarter of the bridge limit.',
                True,
                """**Reading the wording**

Empty truck 2.8 tonnes; quarter of 12 is 3.

**Choose a variable**

Compare 2.8 with 3.

**Translate into an inequality**

$2.8 < 3$.

**Solve step by step**

About 23.3% of the limit.

**Interpret the result**

True.

**Compare to the claim**

True.

**Quick check:** $2.8/12 \approx 0.233$.""",
            ),
        ],
    },
    {
        "title": 'Comparing two phone plans',
        "diff": '4/5',
        "context": 'Plan A costs 10 EUR per month plus 0.10 EUR per call-minute. Plan B costs 20 EUR per month plus 0.05 EUR per call-minute. For which numbers of call-minutes x is Plan A strictly cheaper than Plan B?',
        "overview": ('Set up the strict inequality between the two linear cost functions and solve for x.'),
        "items": [
            (
                'Plan A is strictly cheaper exactly when x < 200.',
                True,
                """**Reading the wording**

Compare A: 10+0.10x with B: 20+0.05x.

**Choose a variable**

Let $x$ be call-minutes ($x \ge 0$).

**Translate into an inequality**

$10 + 0.10x < 20 + 0.05x$.

**Solve step by step**

$0.05x < 10$
$x < 200$.

**Interpret the result**

A is strictly cheaper iff $x < 200$ (they tie at 200).

**Compare to the claim**

True.

**Quick check:** $x = 100$: A=20, B=25; $x = 200$: both 30; $x = 300$: A=40, B=35.""",
            ),
            (
                'At exactly 200 call-minutes, Plan A is still strictly cheaper.',
                False,
                """**Reading the wording**

At x=200 both plans cost 30 EUR.

**Choose a variable**

$x = 200$.

**Translate into an inequality**

$30 < 30$?

**Solve step by step**

No — they are equal.

**Interpret the result**

Strict inequality fails at the boundary.

**Compare to the claim**

False.

**Quick check:** A is cheaper only for $x < 200$.""",
            ),
            (
                'For heavy users with more than 200 call-minutes, Plan B is cheaper.',
                True,
                """**Reading the wording**

From the same algebra, A costs more than B when $x > 200$.

**Choose a variable**

$x > 200$.

**Translate into an inequality**

$10 + 0.10x > 20 + 0.05x$.

**Solve step by step**

B has the smaller cost.

**Interpret the result**

True.

**Compare to the claim**

True.

**Quick check:** Example $x = 300$: A=40, B=35.""",
            ),
        ],
    },
]
