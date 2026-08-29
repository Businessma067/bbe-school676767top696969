"""Additional 6.5 tasks: varied real-life word inequalities with detailed explanations."""

LIFE_SPECS: list[dict] = [
    {
        "title": 'Real-life inequalities — bills, rides, and limits',
        "diff": '3/5',
        "overview": ('Everyday linear inequalities: mobile overage, a taxi budget, weekly savings, an elevator load, and a rental-car kilometre package. Read each claim, name a variable, write the inequality the wording forces, then solve and check the claim.'),
        "items": [
            (
                'A mobile plan costs 12 EUR per month plus 0.08 EUR for every megabyte over the included allowance. A customer has already used 200 MB beyond the allowance. They claim that if they use at most 150 more over-allowance megabytes this month, their total bill will stay at or under 40 EUR. That claim is correct.',
                True,
                """**Reading the wording**

There is a fixed monthly charge of 12 EUR. Each megabyte over the allowance costs an extra 0.08 EUR. The customer already has 200 MB of overage and plans to add at most 150 MB more. The claim is that the resulting bill will be at most 40 EUR.

Useful phrases: “plus 0.08 EUR for every megabyte”, “at most 150 more”, “at or under 40 EUR”.

**Choose a variable**

Let $m$ be the number of additional over-allowance megabytes still to be used this month ($m \ge 0$).

**Translate into an inequality**

Total overage: $200 + m$ megabytes.
Bill: $12 + 0.08(200 + m)$.
“At or under 40” means
$12 + 0.08(200 + m) \le 40$.

**Solve step by step**

$12 + 16 + 0.08m \le 40$
$28 + 0.08m \le 40$
$0.08m \le 12$
$m \le \dfrac{12}{0.08} = 150$.

**Interpret the result**

The bill stays within 40 EUR exactly when the extra usage is at most 150 MB — the same bound the customer stated.

**Compare to the claim**

The claim matches the solved inequality, so it is true.

**Quick check:** $m = 150$ gives $12 + 0.08 \cdot 350 = 40$; $m = 151$ gives $40.08 > 40$.""",
            ),
            (
                'A taxi charges 3.50 EUR as a base fare plus 1.20 EUR per kilometre. A passenger has 18 EUR and says they can travel any distance up to 15 km without going over budget. That statement is true.',
                False,
                """**Reading the wording**

The fare starts at 3.50 EUR and grows by 1.20 EUR for each kilometre. The passenger’s budget is 18 EUR. The claim is that every trip of length at most 15 km stays within that budget.

Useful phrases: “base fare”, “per kilometre”, “without going over budget”, “any distance up to 15 km”.

**Choose a variable**

Let $d$ be the distance in kilometres ($d \ge 0$).

**Translate into an inequality**

Fare: $3.50 + 1.20d$.
“Without going over” means
$3.50 + 1.20d \le 18$.

**Solve step by step**

$1.20d \le 14.50$
$d \le \dfrac{14.50}{1.20} = \dfrac{145}{12} \approx 12.08$ km.

**Interpret the result**

Only distances up to about 12.08 km stay within 18 EUR. Fifteen kilometres is larger than that limit.

**Compare to the claim**

At $d = 15$, the fare is $3.50 + 18 = 21.50$ EUR, which is over budget. The claim is false.

**Quick check:** $d = 12$ gives $3.50 + 14.40 = 17.90 \le 18$; $d = 13$ gives $19.10 > 18$.""",
            ),
            (
                'Maya saves 25 EUR from her wages every week and already has 40 EUR in her jar. She needs at least 300 EUR for a weekend trip. She claims that after 10 more weeks of saving she will have enough. That claim is true.',
                False,
                """**Reading the wording**

She starts with 40 EUR and adds 25 EUR each week. She needs the total to reach at least 300 EUR. The claim is that 10 weeks of saving is enough.

Useful phrases: “every week”, “already has 40”, “at least 300”, “after 10 more weeks”.

**Choose a variable**

Let $w$ be the number of whole weeks she continues saving ($w \ge 0$).

**Translate into an inequality**

Amount after $w$ weeks: $40 + 25w$.
“At least 300” means
$40 + 25w \ge 300$.

**Solve step by step**

$25w \ge 260$
$w \ge \dfrac{260}{25} = 10.4$.

Because $w$ must be a whole number, the smallest admissible value is 11.

**Interpret the result**

After 10 weeks she has $40 + 250 = 290$ EUR, which is still short of 300 EUR.

**Compare to the claim**

Saying that 10 weeks is enough is false.

**Quick check:** $w = 10$ gives 290 EUR; $w = 11$ gives $40 + 275 = 315 \ge 300$.""",
            ),
            (
                'An elevator may carry at most 600 kg. Three adults of 70 kg, 85 kg, and 90 kg are already inside. They claim that two children of 35 kg each can still enter without exceeding the limit. That claim is true.',
                True,
                """**Reading the wording**

The hard limit is 600 kg in total. Three adults are already on board. The claim is that adding two children of 35 kg each still keeps the total mass at most 600 kg.

Useful phrases: “at most 600 kg”, “already inside”, “without exceeding”.

**Choose a variable**

Let $c$ be the number of 35 kg children who enter. The claim fixes $c = 2$.

**Translate into an inequality**

Current load: $70 + 85 + 90 = 245$ kg.
With $c$ children: $245 + 35c \le 600$.

**Solve step by step**

$35c \le 355$
$c \le \dfrac{355}{35} \approx 10.14$.

So up to 10 such children would be allowed. In particular $c = 2$ is allowed.

**Interpret the result**

Two children add 70 kg, for a total of 315 kg, well under 600 kg.

**Compare to the claim**

The claim is true.

**Quick check:** $245 + 70 = 315 \le 600$.""",
            ),
            (
                'A car rental costs 45 EUR per day plus 0.25 EUR per kilometre. A tourist rents for exactly 3 days and has a total budget of 200 EUR for the rental. They claim that they can drive up to 300 km without exceeding the budget. That tourist claim is wrong.',
                True,
                """**Reading the wording**

Daily charge 45 EUR, plus 0.25 EUR per kilometre. The rental lasts 3 days, so the daily part is fixed at $3 \cdot 45 = 135$ EUR. The tourist’s budget is 200 EUR. They claim that driving up to 300 km stays within budget. Our statement says that tourist claim is wrong.

Useful phrases: “per day”, “per kilometre”, “exactly 3 days”, “up to 300 km”, “without exceeding”.

**Choose a variable**

Let $k$ be the number of kilometres driven ($k \ge 0$).

**Translate into an inequality**

Cost: $135 + 0.25k$.
Within budget: $135 + 0.25k \le 200$.

**Solve step by step**

$0.25k \le 65$
$k \le \dfrac{65}{0.25} = 260$.

**Interpret the result**

They may drive at most 260 km. Three hundred kilometres would overshoot the budget.

**Compare to the claim**

At $k = 300$, cost is $135 + 75 = 210 > 200$. So the tourist claim is indeed wrong, and our statement is true.

**Quick check:** $k = 260$ gives exactly 200 EUR; $k = 261$ gives 200.25 EUR.""",
            ),
        ],
    },
    {
        "title": 'Real-life inequalities — work, fuel, and temperature',
        "diff": '4/5',
        "overview": ('Hourly wages with a bonus, a fuel budget for a road trip, a fridge temperature window, a water-tank filling time, and a courier delivery deadline.'),
        "items": [
            (
                'Leo earns 14 EUR per hour and gets a 50 EUR bonus if he works more than 25 hours in a week. He claims that working 28 hours this week will bring him at least 450 EUR in total pay. That claim is true.',
                False,
                """**Reading the wording**

Base pay is 14 EUR per hour. A bonus of 50 EUR is added only when hours exceed 25. Leo plans 28 hours (so the bonus applies) and claims his total will be at least 450 EUR.

Useful phrases: “per hour”, “bonus if … more than 25 hours”, “at least 450 EUR”.

**Choose a variable**

Let $h$ be hours worked. Here $h = 28 > 25$, so pay $= 14h + 50$.

**Translate into an inequality**

“At least 450” with the bonus means
$14h + 50 \ge 450$.

**Solve step by step**

$14h \ge 400$
$h \ge \dfrac{400}{14} \approx 28.57$.

Even with the bonus, he needs more than 28 hours.

**Interpret the result**

At 28 hours: $14 \cdot 28 + 50 = 442$ EUR, which is less than 450 EUR.

**Compare to the claim**

The claim is false.

**Quick check:** $h = 29$ gives $14 \cdot 29 + 50 = 456 \ge 450$.""",
            ),
            (
                'A car uses 0.07 litres of fuel per kilometre. Fuel costs 1.60 EUR per litre. For a trip, the driver has 56 EUR to spend on fuel only. They claim that any trip of 500 km or less stays within that fuel budget. That claim is true.',
                True,
                """**Reading the wording**

Fuel use is 0.07 L per km. Price is 1.60 EUR per litre. The fuel budget is 56 EUR. The claim is that every trip with distance at most 500 km costs at most 56 EUR in fuel.

**Choose a variable**

Let $d$ be the trip distance in kilometres.

**Translate into an inequality**

Litres used: $0.07d$.
Cost: $1.60 \cdot 0.07d = 0.112d$.
Budget: $0.112d \le 56$.

**Solve step by step**

$d \le \dfrac{56}{0.112} = 500$.

**Interpret the result**

The maximum affordable distance is exactly 500 km, so every trip of 500 km or less fits the budget.

**Compare to the claim**

The claim matches the solution, so it is true.

**Quick check:** $d = 500$ costs 56 EUR; $d = 501$ costs 56.112 EUR.""",
            ),
            (
                'A medicine fridge must stay between 2 °C and 8 °C inclusive. A technician says that if the temperature reading T satisfies |T − 5| ≤ 4, then the fridge is always inside the required range. That statement is true.',
                False,
                """**Reading the wording**

The required band is $2 \le T \le 8$. The technician claims that $|T - 5| \le 4$ is enough to guarantee that band.

Useful phrases: “between 2 and 8 inclusive”, “always inside the required range”.

**Choose a variable**

Let $T$ be the temperature in °C.

**Translate into an inequality**

$|T - 5| \le 4$ rewrites as $-4 \le T - 5 \le 4$, so $1 \le T \le 9$.

**Solve / compare the sets**

Required set: $[2, 8]$.
Technician’s set: $[1, 9]$.

The technician’s set is wider: it includes $T = 1$ and $T = 9$, which lie outside $[2, 8]$.

**Interpret the result**

Satisfying $|T - 5| \le 4$ does not force the fridge into the safe range.

**Compare to the claim**

The claim is false. (The matching absolute-value form for $[2, 8]$ would be $|T - 5| \le 3$.)

**Quick check:** $T = 1$ gives $|1 - 5| = 4 \le 4$, but 1 °C is below the allowed minimum of 2 °C.""",
            ),
            (
                'An empty tank holds 480 litres. A tap fills it at 12 litres per minute. Someone claims that after 30 minutes of filling from empty, the tank is still not more than half full. That claim is false.',
                True,
                """**Reading the wording**

Capacity is 480 L, so half full means 240 L. The tap adds 12 L each minute from empty. After 30 minutes the volume is $12 \cdot 30$. The claim “still not more than half full” is being called false — we verify that judgment.

**Choose a variable**

Let $t$ be minutes of filling. Here $t = 30$.

**Translate into an inequality**

Volume: $12t$.
“Not more than half full” means $12t \le 240$, i.e. $t \le 20$.

**Solve step by step**

At $t = 30$: volume $= 360$ L $> 240$ L.

**Interpret the result**

After 30 minutes the tank is three-quarters full, not “at most half”.

**Compare to the claim**

The “not more than half full” claim is wrong, so the statement that it is false is true.

**Quick check:** half full needs $t = 20$ min; at 30 min, $360/480 = 0.75$.""",
            ),
            (
                'A courier must deliver a package within 90 minutes. The drive takes 1.5 minutes per kilometre, and there is a fixed 15-minute stop at the warehouse. The courier claims that any delivery address within 45 km can be served on time. That courier claim is incorrect.',
                False,
                """**Reading the wording**

Total time allowed: 90 minutes. Fixed warehouse stop: 15 minutes. Driving: 1.5 min per km. The courier claims every address within 45 km finishes on time. Our statement says that courier claim is incorrect.

**Choose a variable**

Let $d$ be the distance in kilometres.

**Translate into an inequality**

Time: $15 + 1.5d$.
On time: $15 + 1.5d \le 90$.

**Solve step by step**

$1.5d \le 75$
$d \le 50$.

**Interpret the result**

Addresses up to 50 km are on time. In particular, 45 km is allowed.

**Compare to the claim**

At $d = 45$: time $= 15 + 67.5 = 82.5 \le 90$. The courier’s claim is actually correct, so calling it “incorrect” is false.

**Quick check:** $d = 50$ uses exactly 90 minutes; $d = 51$ uses 91.5 minutes.""",
            ),
        ],
    },
    {
        "title": 'Real-life inequalities — shopping, school, and fitness',
        "diff": '3/5',
        "overview": ('Discount shopping with a spending cap, a weighted exam score target, a weekly calorie-burn goal, a shipping weight limit, and a group ticket budget.'),
        "items": [
            (
                'A shop offers 20% off the marked price. Nora has 48 EUR and wants to buy one item. She claims that any item with a marked price of at most 60 EUR will cost her no more than 48 EUR after the discount. That claim is true.',
                True,
                """**Reading the wording**

A 20% discount means she pays 80% of the marked price. Her cash limit is 48 EUR. She claims every marked price of at most 60 EUR leads to a discounted price of at most 48 EUR.

**Choose a variable**

Let $p$ be the marked price in EUR ($p > 0$).

**Translate into an inequality**

Discounted price: $0.8p$.
Affordable: $0.8p \le 48$.

**Solve step by step**

$p \le \dfrac{48}{0.8} = 60$.

**Interpret the result**

Marked prices up to 60 EUR are exactly the ones she can afford after the discount.

**Compare to the claim**

The claim matches the solution, so it is true.

**Quick check:** $p = 60$ costs 48 EUR; $p = 61$ costs 48.80 EUR.""",
            ),
            (
                'An exam has two parts: Part A is worth 40% of the grade and Part B is worth 60%. Sam scored 70% on Part A. He claims that scoring at least 80% on Part B is enough to reach an overall grade of at least 85%. That claim is true.',
                False,
                """**Reading the wording**

Overall grade is $0.4 \cdot A + 0.6 \cdot B$. Part A is fixed at 70%. Sam claims that Part B at least 80% forces overall at least 85%.

**Choose a variable**

Let $b$ be Sam’s Part B percentage.

**Translate into an inequality**

Overall: $0.4 \cdot 70 + 0.6b = 28 + 0.6b$.
Target: $28 + 0.6b \ge 85$.

**Solve step by step**

$0.6b \ge 57$
$b \ge \dfrac{57}{0.6} = 95$.

**Interpret the result**

He needs at least 95% on Part B. Eighty percent is not enough.

**Compare to the claim**

At $b = 80$: overall $= 28 + 48 = 76 < 85$. The claim is false.

**Quick check:** $b = 95$ gives $28 + 57 = 85$; $b = 94$ gives $28 + 56.4 = 84.4 < 85$.""",
            ),
            (
                'In one week, Ana burns about 8 kcal per minute of jogging. She has already burned 900 kcal from other activity and wants a weekly total of at least 2500 kcal. She claims that 3 hours of jogging this week will be enough. That claim is true.',
                False,
                """**Reading the wording**

She already has 900 kcal. Jogging adds 8 kcal per minute. Three hours is 180 minutes. She wants the weekly total to be at least 2500 kcal.

**Choose a variable**

Let $m$ be minutes of jogging. The claim uses $m = 180$.

**Translate into an inequality**

Total kcal: $900 + 8m \ge 2500$.

**Solve step by step**

$8m \ge 1600$
$m \ge 200$.

**Interpret the result**

She needs at least 200 minutes (about 3 hours 20 minutes). Three hours is only 180 minutes.

**Compare to the claim**

$900 + 8 \cdot 180 = 900 + 1440 = 2340 < 2500$. The claim is false.

**Quick check:** $m = 200$ gives exactly 2500 kcal.""",
            ),
            (
                'A courier service accepts a parcel only if its mass is at most 5 kg. A box with packaging weighs 1.2 kg. A shop claims that they can put in any number of 0.4 kg items up to and including 10 items and still be accepted. That claim is false.',
                True,
                """**Reading the wording**

Maximum accepted mass: 5 kg. Empty box with packaging: 1.2 kg. Each item: 0.4 kg. The shop claims that packing up to 10 items is always accepted. Our statement says that shop claim is false.

**Choose a variable**

Let $n$ be the number of 0.4 kg items ($n \ge 0$, whole number).

**Translate into an inequality**

Total mass: $1.2 + 0.4n \le 5$.

**Solve step by step**

$0.4n \le 3.8$
$n \le \dfrac{3.8}{0.4} = 9.5$.

So the largest whole number is $n = 9$.

**Interpret the result**

Ten items give $1.2 + 4.0 = 5.2 > 5$ kg, so they would be rejected.

**Compare to the claim**

The shop’s “up to 10 items” claim is wrong, so our statement is true.

**Quick check:** $n = 9$ gives $1.2 + 3.6 = 4.8 \le 5$; $n = 10$ gives 5.2 kg.""",
            ),
            (
                'Concert tickets cost 28 EUR each, and a group booking fee of 12 EUR is added once for the whole group. A club has 160 EUR and claims that they can buy tickets for at most 5 people without going over budget. That claim is true.',
                True,
                """**Reading the wording**

Each ticket is 28 EUR, plus one fixed booking fee of 12 EUR for the group. The club has 160 EUR. They claim that buying for at most 5 people stays within budget.

**Choose a variable**

Let $n$ be the number of people (tickets), a whole number $n \ge 1$.

**Translate into an inequality**

Cost: $28n + 12$.
Within budget: $28n + 12 \le 160$.

**Solve step by step**

$28n \le 148$
$n \le \dfrac{148}{28} \approx 5.286$.

So the largest whole $n$ is 5.

**Interpret the result**

Five tickets cost $140 + 12 = 152 \le 160$. Six tickets would cost $168 + 12 = 180 > 160$.

**Compare to the claim**

“At most 5 people” matches the solution, so the claim is true.

**Quick check:** $n = 5$ costs 152 EUR; $n = 6$ costs 180 EUR.""",
            ),
        ],
    },
    {
        "title": 'Real-life inequalities — mixing, travel time, and capacity',
        "diff": '4/5',
        "overview": ('A coffee blend cost target, average speed needed to arrive on time, a bridge weight limit for identical trucks, a phone-battery charge window, and comparing two phone plans.'),
        "items": [
            (
                'A café mixes beans that cost 8 EUR/kg with beans that cost 14 EUR/kg. They use equal masses of each type. They claim that any batch of at least 6 kg of the blend (half and half) will have a total ingredient cost of at most 60 EUR. That claim is false.',
                True,
                """**Reading the wording**

Equal masses means half the batch is cheap beans and half is expensive beans. Total batch mass is $M$ kg. The café claims every batch with $M \ge 6$ costs at most 60 EUR. Our statement says that claim is false.

**Choose a variable**

Let $M$ be the total mass of the blend in kilograms ($M > 0$).

**Translate into an inequality**

Cost: $\dfrac{M}{2}\cdot 8 + \dfrac{M}{2}\cdot 14 = 4M + 7M = 11M$.
“At most 60 EUR” means $11M \le 60$, so $M \le \dfrac{60}{11} \approx 5.45$.

**Solve step by step**

Batches of at least 6 kg have $M \ge 6 > 5.45$, so their cost is at least $11 \cdot 6 = 66 > 60$ EUR.

**Interpret the result**

Larger batches cost more, not less. The café’s claim reverses the inequality direction.

**Compare to the claim**

The café claim is wrong, so our statement is true.

**Quick check:** $M = 5$ costs 55 EUR $\le 60$; $M = 6$ costs 66 EUR $> 60$.""",
            ),
            (
                'A train journey is 180 km. A passenger needs to arrive in at most 2.5 hours. They claim that any constant average speed of at least 70 km/h is fast enough. That claim is true.',
                False,
                """**Reading the wording**

Distance 180 km, time at most 2.5 hours. Average speed $v$ must be large enough. The claim is that every $v \ge 70$ works.

Useful phrases: “at most 2.5 hours”, “average speed of at least 70 km/h”, “fast enough”.

**Choose a variable**

Let $v$ be average speed in km/h ($v > 0$).

**Translate into an inequality**

Time: $\dfrac{180}{v}$.
On time: $\dfrac{180}{v} \le 2.5$.

**Solve step by step**

Since $v > 0$, multiply both sides by $v$: $180 \le 2.5v$
$v \ge \dfrac{180}{2.5} = 72$.

**Interpret the result**

They need at least 72 km/h. Seventy km/h is too slow.

**Compare to the claim**

At $v = 70$: time $= \dfrac{180}{70} \approx 2.57 > 2.5$ hours. The claim is false.

**Quick check:** $v = 72$ gives exactly 2.5 hours.""",
            ),
            (
                'A bridge may carry at most 12 tonnes. Each delivery truck weighs 2.8 tonnes when empty and may carry up to 1.5 tonnes of cargo. A planner claims that three fully loaded trucks can be on the bridge at the same time. That claim is true.',
                False,
                """**Reading the wording**

Bridge limit: 12 tonnes. One fully loaded truck: $2.8 + 1.5 = 4.3$ tonnes. The planner claims that three such trucks can share the bridge at once.

**Choose a variable**

Let $n$ be the number of fully loaded trucks ($n \ge 0$, whole number).

**Translate into an inequality**

$4.3n \le 12$.

**Solve step by step**

$n \le \dfrac{12}{4.3} \approx 2.79$.

So the largest whole number is $n = 2$. Three trucks are not allowed.

**Interpret the result**

Three trucks would weigh $12.9$ tonnes, which exceeds 12 tonnes.

**Compare to the claim**

The claim is false.

**Quick check:** $n = 2$ gives $8.6 \le 12$; $n = 3$ gives $12.9 > 12$.""",
            ),
            (
                'A phone battery is at 20% and charges at about 2 percentage points per minute while plugged in. A student claims that charging for 25 minutes will be enough to reach at least 80%. That claim is true.',
                False,
                """**Reading the wording**

Start at 20%. Gain 2 percentage points each minute. Target: at least 80%. Claim: 25 minutes is enough.

**Choose a variable**

Let $t$ be minutes of charging ($t \ge 0$).

**Translate into an inequality**

Charge level: $20 + 2t$.
Target: $20 + 2t \ge 80$.

**Solve step by step**

$2t \ge 60$
$t \ge 30$.

**Interpret the result**

They need at least 30 minutes. Twenty-five minutes only reaches 70%.

**Compare to the claim**

$20 + 2 \cdot 25 = 70 < 80$. The claim is false.

**Quick check:** $t = 30$ gives exactly 80%.""",
            ),
            (
                'Plan A costs 10 EUR per month plus 0.10 EUR per call-minute. Plan B costs 20 EUR per month plus 0.05 EUR per call-minute. A user claims that Plan A is strictly cheaper than Plan B whenever they use fewer than 200 call-minutes in a month. That claim is true.',
                True,
                """**Reading the wording**

Compare two linear pricing plans. The user claims Plan A costs less than Plan B whenever call-minutes are fewer than 200.

**Choose a variable**

Let $x$ be call-minutes in a month ($x \ge 0$).

**Translate into an inequality**

Plan A: $10 + 0.10x$.
Plan B: $20 + 0.05x$.
“A strictly cheaper than B” means
$10 + 0.10x < 20 + 0.05x$.

**Solve step by step**

$0.10x - 0.05x < 20 - 10$
$0.05x < 10$
$x < 200$.

**Interpret the result**

Plan A is strictly cheaper exactly when $x < 200$. At $x = 200$ the plans cost the same; for $x > 200$, Plan B is cheaper.

**Compare to the claim**

The claim matches the solution, so it is true.

**Quick check:** $x = 100$ gives A $= 20$, B $= 25$; $x = 200$ gives both $30$; $x = 300$ gives A $= 40$, B $= 35$.""",
            ),
        ],
    },
    {
        "title": 'Real-life inequalities — bakery, garden, and parking',
        "diff": '4/5',
        "overview": ('A bakery flour stock, a three-sided garden fence against a wall, a parking-garage height limit, a loan payoff schedule, and a humidity comfort band.'),
        "items": [
            (
                'A bakery has 25 kg of flour. Each loaf needs 0.4 kg of flour. The baker claims that it is possible to bake 60 loaves from this stock. That claim is true.',
                True,
                """**Reading the wording**

Flour available: 25 kg. Each loaf uses 0.4 kg. The claim is that 60 loaves are feasible.

**Choose a variable**

Let $n$ be the number of loaves (whole number, $n \ge 0$).

**Translate into an inequality**

$0.4n \le 25$.

**Solve step by step**

$n \le \dfrac{25}{0.4} = 62.5$.

So up to 62 whole loaves are possible. Sixty is allowed.

**Interpret the result**

Sixty loaves use $0.4 \cdot 60 = 24$ kg $\le 25$ kg.

**Compare to the claim**

The claim is true.

**Quick check:** $n = 62$ uses 24.8 kg; $n = 63$ uses 25.2 kg $> 25$.""",
            ),
            (
                'A gardener fences three sides of a rectangular bed against an existing wall (the wall is the fourth side). There are 40 m of fencing. The gardener wants the area to be at least 96 $m^{2}$ and claims that every width from 4 m to 18 m inclusive is possible. That claim is true.',
                False,
                """**Reading the wording**

Three sides are fenced: two widths $w$ and one length $L$ parallel to the wall, using all 40 m: $2w + L = 40$. Area must be at least 96 $m^{2}$. The claim is that every width in $[4, 18]$ works.

**Choose a variable**

Let $w$ be the width perpendicular to the wall ($w > 0$). Then $L = 40 - 2w$ (and we need $L > 0$, so $w < 20$).

**Translate into an inequality**

$w(40 - 2w) \ge 96$
$40w - 2w^{2} \ge 96$
$2w^{2} - 40w + 96 \le 0$
$w^{2} - 20w + 48 \le 0$.

**Solve step by step**

$(w - 4)(w - 16) \le 0$, so $4 \le w \le 16$.

**Interpret the result**

Only widths from 4 m to 16 m give enough area. Width 18 m would give length $40 - 36 = 4$ m and area $72 < 96$.

**Compare to the claim**

The interval $[4, 18]$ is too wide. The claim is false.

**Quick check:** $w = 16$ gives area $16 \cdot 8 = 128 \ge 96$; $w = 18$ gives area $18 \cdot 4 = 72 < 96$.""",
            ),
            (
                'A parking garage has a clearance of 2.10 m. A car is 1.70 m tall and a roof box adds 0.35 m. The driver claims the car with the roof box can enter the garage. That claim is true.',
                True,
                """**Reading the wording**

Clearance 2.10 m. Car height 1.70 m plus roof box 0.35 m. The claim is that the total height is at most the clearance.

**Choose a variable**

Let $h$ be total height: $h = 1.70 + 0.35$.

**Translate into an inequality**

Entry is allowed when $h \le 2.10$.

**Solve step by step**

$1.70 + 0.35 = 2.05 \le 2.10$.

**Interpret the result**

There are 0.05 m (5 cm) to spare.

**Compare to the claim**

The claim is true.

**Quick check:** if the box were 0.45 m tall, total would be 2.15 m $> 2.10$ m and entry would fail.""",
            ),
            (
                'A student owes 1,200 EUR on an interest-free loan and can pay 150 EUR at the end of each month. They claim that the loan will be fully paid after at most 8 monthly payments. That claim is true.',
                True,
                """**Reading the wording**

Debt 1,200 EUR, no interest. Each payment is 150 EUR. Claim: at most 8 payments clear the debt.

**Choose a variable**

Let $n$ be the number of monthly payments (whole number, $n \ge 0$).

**Translate into an inequality**

$150n \ge 1200$.

**Solve step by step**

$n \ge \dfrac{1200}{150} = 8$.

So the smallest number of payments is exactly 8, which is “at most 8” in the sense that 8 payments suffice and are needed.

**Interpret the result**

Eight payments give exactly 1,200 EUR.

**Compare to the claim**

The claim is true.

**Quick check:** $n = 7$ pays 1,050 EUR, still 150 EUR short; $n = 8$ pays 1,200 EUR.""",
            ),
            (
                'A storage room should keep relative humidity between 42% and 48% inclusive. A sensor alert is set to trigger unless |H − 45| ≤ 5. A technician claims that whenever the alert does not trigger, the humidity is automatically inside the 42%–48% band. That claim is true.',
                False,
                """**Reading the wording**

Required band: $42 \le H \le 48$. Alert stays off when $|H - 45| \le 5$, i.e. $40 \le H \le 50$. The technician claims that “alert off” guarantees the required band.

**Choose a variable**

Let $H$ be relative humidity in percent.

**Translate into an inequality**

Alert off: $|H - 45| \le 5$ means $40 \le H \le 50$.

**Solve / compare the sets**

Required: $[42, 48]$.
Alert-off: $[40, 50]$.

The alert-off set is larger. For example $H = 41$ keeps the alert off but is below 42%.

**Interpret the result**

“No alert” does not guarantee the narrow comfort band.

**Compare to the claim**

The claim is false. (A matching condition for $[42, 48]$ would be $|H - 45| \le 3$.)

**Quick check:** $H = 41$ gives $|41 - 45| = 4 \le 5$, but 41% is outside $[42, 48]$.""",
            ),
        ],
    },
    {
        "title": 'Real-life inequalities — drones, paint, and overtime',
        "diff": '5/5',
        "overview": ('A delivery-drone battery range, a paint-mix cost cap, overtime pay to hit a weekly earnings goal, a swimming-pool chlorine window, and a shared-taxi fare split.'),
        "items": [
            (
                'A delivery drone can fly for at most 40 minutes on one battery. It uses 0.8 minutes of battery per kilometre of route. A dispatcher claims that any one-way delivery of 55 km can be completed on a single charge. That claim is true.',
                False,
                """**Reading the wording**

Battery life at most 40 minutes. Consumption 0.8 min per km. Claim: every 55 km one-way trip fits in one charge.

**Choose a variable**

Let $d$ be the one-way distance in kilometres.

**Translate into an inequality**

Time: $0.8d$.
Feasible: $0.8d \le 40$.

**Solve step by step**

$d \le \dfrac{40}{0.8} = 50$.

**Interpret the result**

The maximum range is 50 km. Fifty-five kilometres needs 44 minutes.

**Compare to the claim**

$0.8 \cdot 55 = 44 > 40$. The claim is false.

**Quick check:** $d = 50$ uses exactly 40 minutes.""",
            ),
            (
                'A painter mixes 2 litres of white paint (3 EUR per litre) with 1 litre of colour concentrate (9 EUR per litre) to make 3 litres of blend. They claim that any amount of this same 2:1 mix whose total volume is at most 12 litres will cost at most 50 EUR in materials. That claim is true.',
                False,
                """**Reading the wording**

The mix ratio is always 2 parts white : 1 part colour. For total volume $V$ litres, white is $\dfrac{2}{3}V$ and colour is $\dfrac{1}{3}V$. The claim is that every batch with $V \le 12$ costs at most 50 EUR.

**Choose a variable**

Let $V$ be the total volume of blend in litres ($V > 0$).

**Translate into an inequality**

Cost: $\dfrac{2}{3}V \cdot 3 + \dfrac{1}{3}V \cdot 9 = 2V + 3V = 5V$.
“At most 50 EUR” means $5V \le 50$, so $V \le 10$.

**Solve step by step**

Batches up to 12 litres include $V = 12$, which costs $5 \cdot 12 = 60 > 50$ EUR.

**Interpret the result**

Only volumes up to 10 litres stay within 50 EUR.

**Compare to the claim**

The claim is false.

**Quick check:** $V = 10$ costs 50 EUR; $V = 12$ costs 60 EUR.""",
            ),
            (
                'Jordan earns 12 EUR per hour for the first 40 hours in a week and 18 EUR per hour for each overtime hour after that. They claim that working 46 hours in a week will earn them at least 600 EUR. That claim is true.',
                False,
                """**Reading the wording**

Regular: 12 EUR/h for up to 40 hours. Overtime: 18 EUR/h beyond 40. Claim: 46 hours yields at least 600 EUR.

**Choose a variable**

Let $h$ be total hours. Here $h = 46$, so overtime hours $= 6$.

**Translate into an inequality**

Pay: $12 \cdot 40 + 18 \cdot (h - 40)$ for $h > 40$.
Target: $480 + 18(h - 40) \ge 600$.

**Solve step by step**

$18(h - 40) \ge 120$
$h - 40 \ge \dfrac{120}{18} = \dfrac{20}{3} \approx 6.67$
$h \ge 46.67$.

**Interpret the result**

At 46 hours: $480 + 18 \cdot 6 = 480 + 108 = 588 < 600$.

**Compare to the claim**

The claim is false.

**Quick check:** $h = 47$ gives $480 + 18 \cdot 7 = 606 \ge 600$.""",
            ),
            (
                'A swimming pool’s free chlorine should stay between 1.0 and 3.0 mg/L inclusive. A caretaker says that if the reading C satisfies |C − 2| ≤ 1, then the chlorine level is always acceptable. That statement is true.',
                True,
                """**Reading the wording**

Required band: $1.0 \le C \le 3.0$. The caretaker claims $|C - 2| \le 1$ guarantees that band.

**Choose a variable**

Let $C$ be chlorine concentration in mg/L.

**Translate into an inequality**

$|C - 2| \le 1$ means $-1 \le C - 2 \le 1$, so $1 \le C \le 3$.

**Solve / compare the sets**

The caretaker’s condition is exactly $[1, 3]$, which matches the required band.

**Interpret the result**

Whenever $|C - 2| \le 1$, the reading is acceptable, and conversely.

**Compare to the claim**

The claim is true.

**Quick check:** $C = 1$ and $C = 3$ give absolute deviation 1; $C = 0.5$ gives $|0.5 - 2| = 1.5 > 1$ and is outside the band.""",
            ),
            (
                'Four friends share a taxi. The meter shows a fare of F EUR, and there is a fixed booking fee of 4 EUR added once. They claim that if each person pays at most 9 EUR, then the meter fare F must have been at most 32 EUR. That claim is true.',
                True,
                """**Reading the wording**

Total cost: $F + 4$. Split equally among 4 people. Each pays at most 9 EUR. The claim is that this forces $F \le 32$.

**Choose a variable**

Let $F$ be the meter fare in EUR ($F \ge 0$).

**Translate into an inequality**

Each person’s share: $\dfrac{F + 4}{4} \le 9$.

**Solve step by step**

$F + 4 \le 36$
$F \le 32$.

**Interpret the result**

“Each pays at most 9” is equivalent to “meter fare at most 32 EUR”.

**Compare to the claim**

The claim matches the algebra, so it is true.

**Quick check:** $F = 32$ gives total 36, share 9 EUR; $F = 33$ gives total 37, share 9.25 EUR.""",
            ),
        ],
    },
]
