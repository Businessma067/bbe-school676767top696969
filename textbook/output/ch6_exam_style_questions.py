"""Chapter 6.5 exam-style questions: 18 tasks × 5 independent TRUE/FALSE statements."""

QUESTION_SPECS: list[dict] = [
    {
        "title": 'Exam-style inequalities — set A',
        "diff": '4/5',
        "overview": ('Classic exam mix: fencing ratio, quadratic height, average cost, factory constraints, algebraic system.'),
        "items": [
            (
                'A farmer is planning a rectangular field. He has 80 meters of fencing available. If he wants the area to be at least 48 m^2 and to keep a 3:1 ratio between the longer and shorter sides, then the shorter side can be between 4 and 20 meters long (both values included).',
                False,
                """**Reading the wording**

        Fencing ≤ 80 m; area ≥ 48; sides 3:1. Claim: shorter side may be any value in [4, 20].

        **Choose a variable**

        Let $w>0$ be the shorter side; longer side $3w$.

        **Translate into an inequality**

        Fencing $2(3w+w)\le 80$. Area $3w^{2}\ge 48$.

        **Solve step by step**

        $8w\le 80\Rightarrow w\le 10$.
$w^{2}\ge 16\Rightarrow w\ge 4$.
Intersection: $4\le w\le 10$.

        **Interpret the result**

        True range is $[4,10]$, not $[4,20]$.

        **Compare to the claim**

        False — $w=20$ needs 160 m of fence.

        **Quick check:** $w=4$ area 48; $w=10$ uses 80 m; $w=20$ needs 160 m.""",
            ),
            (
                'If the height in meters after x seconds is $f(x)=-5x^{2}+70x+3$, then the object is more than 123 meters above the ground between 2 and 12 seconds.',
                True,
                """**Reading the wording**

        Claim: $f(x)>123$ holds between 2 and 12 seconds.

        **Choose a variable**

        Let $x$ be time in seconds.

        **Translate into an inequality**

        $-5x^{2}+70x+3>123$.

        **Solve step by step**

        $-5x^{2}+70x-120>0$. Divide by $-5$ (reverse): $x^{2}-14x+24<0$
$(x-2)(x-12)<0\Rightarrow 2<x<12$.

        **Interpret the result**

        Strictly above 123 m on the open interval $(2,12)$.

        **Compare to the claim**

        True — matches the claim’s open timing window.

        **Quick check:** $f(7)=248>123$; $f(2)=f(12)=123$.""",
            ),
            (
                'If producing x units costs $150+0.2x$ EUR, then at least 83 whole units must be produced for the average cost per unit to fall below 2 EUR.',
                False,
                """**Reading the wording**

Average cost $<2$ EUR; whole units. Claim: 83 already works.

**Choose a variable**

Let $x>0$ be whole units.

**Translate into an inequality**

$\dfrac{150+0.2x}{x}<2$.

**Solve step by step**

$x>150/1.8=83.\overline{3}$. Smallest whole $x$ is 84.

**Interpret the result**

At 83 the average is still slightly above 2 EUR.

**Compare to the claim**

False.

**Quick check:** $x=83\approx 2.007$ EUR; $x=84\approx 1.986$ EUR.""",
            ),
            (
                'One product uses 3 units of A, 2 of B, and 4 of C at 40, 50, and 25 EUR, plus 12 EUR finishing. Budget 21,400 EUR and storage at most 475 raw units. The maximum number of products is less than 50.',
                False,
                """**Reading the wording**

9 raw units and 332 EUR per product.

**Choose a variable**

Let $n$ be whole products.

**Translate into an inequality**

$9n\le 475$ and $332n\le 21400$.

**Solve step by step**

$n\le 52$ (storage binds); budget allows up to 64.

**Interpret the result**

Maximum is 52, not less than 50.

**Compare to the claim**

False.

**Quick check:** $n=52$ stores 468, costs 17264; $n=53$ needs 477 stored units.""",
            ),
            (
                'The inequality system $\\dfrac{4}{x}<x<|2-3x|$ is satisfied if and only if $|x|>2$.',
                False,
                """**Reading the wording**

Claim: solution equals $|x|>2$.

**Choose a variable**

Domain $x\ne 0$.

**Translate into an inequality**

Solve $\dfrac{4}{x}<x$ and $x<|2-3x|$ separately, then intersect.

**Solve step by step**

Left: $(2,\infty)\cup(-2,0)$. Right: $x<\tfrac{1}{2}$ or $x>1$. Intersection: $(-2,0)\cup(2,\infty)$.

**Interpret the result**

$|x|>2$ includes $(-\infty,-2)$ and drops $(-2,0)$.

**Compare to the claim**

False — sets differ.

**Quick check:** $x=-1$ works but $|-1|\not>2$; $x=-3$ fails the left part.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set B',
        "diff": '3/5',
        "overview": ('Claims about greatest/smallest whole values and a closed quadratic height interval.'),
        "items": [
            (
                'A taxi charges 3.50 EUR base plus 1.20 EUR per kilometre. With 18 EUR, the greatest whole number of kilometres without going over budget is 15.',
                False,
                """**Reading the wording**

Claim: max whole km is 15.

**Choose a variable**

Let $d$ be whole kilometres.

**Translate into an inequality**

$3.50+1.20d\le 18$.

**Solve step by step**

$d\le 14.5/1.2\approx 12.08\Rightarrow$ max whole $d=12$.

**Interpret the result**

15 km costs 21.50 EUR.

**Compare to the claim**

False.

**Quick check:** $d=12$ costs 17.90; $d=13$ costs 19.10.""",
            ),
            (
                'Maya has 40 EUR and saves 25 EUR each week. The smallest number of whole weeks needed to reach at least 300 EUR is 10.',
                False,
                """**Reading the wording**

Claim: 10 weeks suffice.

**Choose a variable**

Let $w$ be whole weeks.

**Translate into an inequality**

$40+25w\ge 300$.

**Solve step by step**

$w\ge 10.4\Rightarrow$ smallest whole $w=11$.

**Interpret the result**

After 10 weeks she has 290 EUR.

**Compare to the claim**

False.

**Quick check:** $w=10\to 290$; $w=11\to 315$.""",
            ),
            (
                'If $s(t)=-4t^{2}+32t+5$, then $s(t)\\ge 53$ for every t in the closed interval $[2,6]$.',
                True,
                """**Reading the wording**

Claim: height ≥ 53 throughout $[2,6]$.

**Choose a variable**

Let $t$ be seconds.

**Translate into an inequality**

$-4t^{2}+32t+5\ge 53$.

**Solve step by step**

$t^{2}-8t+12\le 0\Rightarrow (t-2)(t-6)\le 0\Rightarrow 2\le t\le 6$.

**Interpret the result**

Solution set is exactly $[2,6]$.

**Compare to the claim**

True.

**Quick check:** $s(2)=s(6)=53$; $s(4)=69$.""",
            ),
            (
                'A 3-day car rental costs 45 EUR/day plus 0.25 EUR/km with a 200 EUR budget. The greatest whole number of kilometres allowed is 260.',
                True,
                """**Reading the wording**

Claim: max km is 260.

**Choose a variable**

Let $k$ be whole kilometres.

**Translate into an inequality**

$135+0.25k\le 200$.

**Solve step by step**

$k\le 260$.

**Interpret the result**

260 km uses the budget exactly.

**Compare to the claim**

True.

**Quick check:** $k=260\to 200$; $k=261\to 200.25$.""",
            ),
            (
                'An elevator limit is 600 kg. Adults of 70, 85, and 90 kg are already inside. At most 8 children of 35 kg each can still enter.',
                False,
                """**Reading the wording**

Claim: maximum children is 8.

**Choose a variable**

Let $c$ be children.

**Translate into an inequality**

$245+35c\le 600$.

**Solve step by step**

$c\le 10.14\Rightarrow$ max $c=10$.

**Interpret the result**

8 is allowed, but the maximum is 10.

**Compare to the claim**

False.

**Quick check:** $c=10\to 595$ kg; $c=11\to 630$ kg.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set C',
        "diff": '3/5',
        "overview": ('Sufficiency claims, plan comparison, fuel range, discount ceiling, courier timing.'),
        "items": [
            (
                'Leo earns 14 EUR/h plus a 50 EUR bonus when he works more than 25 hours. Working 28 hours is enough to earn at least 450 EUR.',
                False,
                """**Reading the wording**

Claim: 28 hours with bonus reach ≥ 450.

**Choose a variable**

Let $h=28>25$.

**Translate into an inequality**

$14h+50\ge 450$.

**Solve step by step**

$h\ge 400/14\approx 28.57$. At $h=28$: pay $=442<450$.

**Interpret the result**

Need at least 29 hours.

**Compare to the claim**

False.

**Quick check:** $h=29\to 456$ EUR.""",
            ),
            (
                'Plan A costs 10 EUR plus 0.10 EUR per call-minute; Plan B costs 20 EUR plus 0.05 EUR per call-minute. Plan A is strictly cheaper whenever fewer than 200 call-minutes are used.',
                True,
                """**Reading the wording**

Claim: A < B for $x<200$.

**Choose a variable**

Let $x$ be call-minutes.

**Translate into an inequality**

$10+0.10x<20+0.05x$.

**Solve step by step**

$0.05x<10\Rightarrow x<200$.

**Interpret the result**

Strict inequality holds exactly for $x<200$.

**Compare to the claim**

True.

**Quick check:** $x=100$: A=20, B=25; $x=200$: both 30.""",
            ),
            (
                'A car uses 0.07 L/km and fuel costs 1.60 EUR/L. With 56 EUR for fuel, any trip of 500 km or less stays within budget.',
                True,
                """**Reading the wording**

Claim: every $d\le 500$ is affordable.

**Choose a variable**

Let $d$ be km.

**Translate into an inequality**

$0.112d\le 56$.

**Solve step by step**

$d\le 500$.

**Interpret the result**

500 km is the exact cutoff.

**Compare to the claim**

True.

**Quick check:** $d=500\to 56$; $d=501\to 56.112$.""",
            ),
            (
                'A shop offers 20% off. With 48 EUR, Nora can afford any item whose marked price is at most 55 EUR.',
                False,
                """**Reading the wording**

Claim: marked-price ceiling is 55 EUR.

**Choose a variable**

Let $p$ be marked price.

**Translate into an inequality**

$0.8p\le 48\Rightarrow p\le 60$.

**Solve step by step**

She can afford up to 60 EUR marked.

**Interpret the result**

55 understates the true ceiling.

**Compare to the claim**

False.

**Quick check:** $p=60\to 48$ EUR; $p=55\to 44$ EUR.""",
            ),
            (
                'A courier has 90 minutes including a fixed 15-minute warehouse stop and drives at 1.5 min/km. Every address within 45 km can be reached on time.',
                True,
                """**Reading the wording**

Claim: all $d\le 45$ finish within 90 min.

**Choose a variable**

Let $d$ be km.

**Translate into an inequality**

$15+1.5d\le 90\Rightarrow d\le 50$.

**Solve step by step**

$[0,45]\subset[0,50]$.

**Interpret the result**

45 km is safely inside the limit.

**Compare to the claim**

True.

**Quick check:** $d=45\to 82.5$ min; $d=50\to 90$ min.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set D',
        "diff": '4/5',
        "overview": ('Absolute-value bands, iff claims, square-root domain, compound linear inequality.'),
        "items": [
            (
                'A medicine fridge must stay between 2 °C and 8 °C inclusive. The condition $|T-5|\\le 4$ describes exactly that required range.',
                False,
                """**Reading the wording**

Claim: $|T-5|\le 4$ equals $[2,8]$.

**Choose a variable**

Let $T$ be °C.

**Translate into an inequality**

$|T-5|\le 4\Rightarrow 1\le T\le 9$.

**Solve step by step**

Compare $[1,9]$ with $[2,8]$.

**Interpret the result**

The absolute-value set is wider.

**Compare to the claim**

False — correct form is $|T-5|\le 3$.

**Quick check:** $T=1$ satisfies $|T-5|\le 4$ but not $[2,8]$.""",
            ),
            (
                'Pool chlorine should stay between 1.0 and 3.0 mg/L inclusive. The reading C is acceptable if and only if $|C-2|\\le 1$.',
                True,
                """**Reading the wording**

Claim: acceptable iff $|C-2|\le 1$.

**Choose a variable**

Let $C$ be mg/L.

**Translate into an inequality**

$|C-2|\le 1\Rightarrow 1\le C\le 3$.

**Solve step by step**

Sets coincide.

**Interpret the result**

Iff claim is correct.

**Compare to the claim**

True.

**Quick check:** $C=1,3$ are boundaries; $C=0.5$ fails.""",
            ),
            (
                'A storage room should keep humidity between 42% and 48%. Whenever $|H-45|\\le 5$, the humidity is automatically inside that band.',
                False,
                """**Reading the wording**

Claim: $|H-45|\le 5$ forces $[42,48]$.

**Choose a variable**

Let $H$ be humidity %.

**Translate into an inequality**

$|H-45|\le 5\Rightarrow 40\le H\le 50$.

**Solve step by step**

$[40,50]$ properly contains $[42,48]$.

**Interpret the result**

$H=41$ keeps the abs bound but is too dry.

**Compare to the claim**

False.

**Quick check:** $|41-45|=4\le 5$, yet $41\notin[42,48]$.""",
            ),
            (
                'The solution set of $\\sqrt{x+3}\\ge 2$ is exactly $x\\ge 1$.',
                True,
                """**Reading the wording**

Claim: solution is $x\ge 1$.

**Choose a variable**

Domain $x\ge -3$.

**Translate into an inequality**

Square: $x+3\ge 4\Rightarrow x\ge 1$.

**Solve step by step**

Intersect with domain: still $x\ge 1$.

**Interpret the result**

Matches the claim.

**Compare to the claim**

True.

**Quick check:** $x=1\to\sqrt{4}=2$; $x=0\to\sqrt{3}<2$.""",
            ),
            (
                'The compound inequality $-1\\le 2x-5\\le 7$ has solution set $[2,6]$.',
                True,
                """**Reading the wording**

Claim: solution is $[2,6]$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$-1\le 2x-5$ and $2x-5\le 7$.

**Solve step by step**

$x\ge 2$ and $x\le 6$.

**Interpret the result**

Closed interval $[2,6]$.

**Compare to the claim**

True.

**Quick check:** $x=2\to -1$; $x=6\to 7$.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set E',
        "diff": '3/5',
        "overview": ('Packing, tickets, bakery, paint mix, drone range.'),
        "items": [
            (
                'A parcel may weigh at most 5 kg. The box is 1.2 kg and each item is 0.4 kg. Packing 10 items is still allowed.',
                False,
                """**Reading the wording**

Claim: $n=10$ stays ≤ 5 kg.

**Choose a variable**

Let $n$ be items.

**Translate into an inequality**

$1.2+0.4n\le 5\Rightarrow n\le 9.5$.

**Solve step by step**

Max whole $n=9$.

**Interpret the result**

10 items weigh 5.2 kg.

**Compare to the claim**

False.

**Quick check:** $n=9\to 4.8$ kg; $n=10\to 5.2$ kg.""",
            ),
            (
                'Concert tickets cost 28 EUR each plus a one-time 12 EUR fee. With 160 EUR, a club can buy tickets for at most 5 people.',
                True,
                """**Reading the wording**

Claim: max people is 5.

**Choose a variable**

Let $n\ge 1$ be people.

**Translate into an inequality**

$28n+12\le 160\Rightarrow n\le 5.286$.

**Solve step by step**

Max whole $n=5$.

**Interpret the result**

5 costs 152 EUR; 6 costs 180 EUR.

**Compare to the claim**

True.

**Quick check:** $n=5\to 152$; $n=6\to 180$.""",
            ),
            (
                'A bakery has 25 kg of flour and each loaf needs 0.4 kg. It is possible to bake 60 loaves from this stock.',
                True,
                """**Reading the wording**

Claim: 60 loaves are feasible.

**Choose a variable**

Let $n$ be loaves.

**Translate into an inequality**

$0.4n\le 25\Rightarrow n\le 62.5$.

**Solve step by step**

60 ≤ 62.5, so allowed.

**Interpret the result**

60 loaves use 24 kg.

**Compare to the claim**

True.

**Quick check:** $n=62\to 24.8$ kg; $n=63\to 25.2$ kg.""",
            ),
            (
                'A 2:1 paint mix (white 3 EUR/L, colour 9 EUR/L) costs at most 50 EUR whenever total blend volume is at most 12 litres.',
                False,
                """**Reading the wording**

Claim: every $V\le 12$ costs ≤ 50 EUR.

**Choose a variable**

Let $V$ be litres of blend.

**Translate into an inequality**

Cost $5V\le 50\Rightarrow V\le 10$.

**Solve step by step**

At $V=12$, cost is 60 EUR.

**Interpret the result**

Only up to 10 L stay within 50 EUR.

**Compare to the claim**

False.

**Quick check:** $V=10\to 50$; $V=12\to 60$.""",
            ),
            (
                'A drone can fly at most 40 minutes and uses 0.8 min per kilometre. Any one-way delivery of 55 km can be completed on one charge.',
                False,
                """**Reading the wording**

Claim: 55 km fits in 40 min.

**Choose a variable**

Let $d$ be one-way km.

**Translate into an inequality**

$0.8d\le 40\Rightarrow d\le 50$.

**Solve step by step**

55 km needs 44 minutes.

**Interpret the result**

Beyond battery life.

**Compare to the claim**

False.

**Quick check:** $d=50\to 40$ min; $d=55\to 44$ min.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set F',
        "diff": '4/5',
        "overview": ('Train speed, overtime, loan payoff, parking, quadratic profit solution set.'),
        "items": [
            (
                'A 180 km train trip must finish in at most 2.5 hours. Any constant average speed of at least 70 km/h is fast enough.',
                False,
                """**Reading the wording**

Claim: every $v\ge 70$ works.

**Choose a variable**

Let $v>0$ be km/h.

**Translate into an inequality**

$\dfrac{180}{v}\le 2.5\Rightarrow v\ge 72$.

**Solve step by step**

At $v=70$, time ≈ 2.57 h > 2.5.

**Interpret the result**

Need at least 72 km/h.

**Compare to the claim**

False.

**Quick check:** $v=72\to$ exactly 2.5 h.""",
            ),
            (
                'Jordan earns 12 EUR/h for the first 40 hours and 18 EUR/h thereafter. Working 46 hours yields at least 600 EUR.',
                False,
                """**Reading the wording**

Claim: 46 hours → ≥ 600 EUR.

**Choose a variable**

Let $h=46$.

**Translate into an inequality**

Pay $=480+18\cdot 6=588$.

**Solve step by step**

$588<600$. Need $h\ge 46.67\Rightarrow$ at least 47.

**Interpret the result**

46 hours fall short.

**Compare to the claim**

False.

**Quick check:** $h=47\to 606$ EUR.""",
            ),
            (
                'A student owes 1,200 EUR interest-free and pays 150 EUR each month. The loan is fully paid after at most 8 monthly payments.',
                True,
                """**Reading the wording**

Claim: ≤ 8 payments clear 1200 EUR.

**Choose a variable**

Let $n$ be payments.

**Translate into an inequality**

$150n\ge 1200\Rightarrow n\ge 8$.

**Solve step by step**

Exactly 8 payments clear the debt.

**Interpret the result**

8 is necessary and sufficient.

**Compare to the claim**

True.

**Quick check:** $n=7\to 1050$; $n=8\to 1200$.""",
            ),
            (
                'A parking garage has 2.10 m clearance. A car 1.70 m tall with a 0.35 m roof box can enter.',
                True,
                """**Reading the wording**

Claim: $1.70+0.35\le 2.10$.

**Choose a variable**

Total height $h=2.05$.

**Translate into an inequality**

$2.05\le 2.10$.

**Solve step by step**

5 cm spare.

**Interpret the result**

Entry allowed.

**Compare to the claim**

True.

**Quick check:** A 0.45 m box would give 2.15 m and fail.""",
            ),
            (
                'If $p(x)=-2x^{2}+24x-10$, then the solution set of $p(x)>50$ is exactly the closed interval $[4,8]$.',
                False,
                """**Reading the wording**

Claim: $p(x)>50$ iff $x\in[4,8]$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$x^{2}-12x+30<0$.

**Solve step by step**

Roots $6\pm\sqrt{6}$; solution $(6-\sqrt{6},\,6+\sqrt{6})$, open.

**Interpret the result**

Not the closed interval $[4,8]$.

**Compare to the claim**

False.

**Quick check:** $p(4)=54>50$, but true endpoints are $6\pm\sqrt{6}$.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set G',
        "diff": '4/5',
        "overview": ('Fence-and-area geometry with changing ratios and a square plot.'),
        "items": [
            (
                'A gardener fences three sides of a rectangular bed against a wall with 40 m of fencing. For area at least 96 m^2, every width from 4 m to 18 m inclusive is possible.',
                False,
                """**Reading the wording**

Claim: every $w\in[4,18]$ works.

**Choose a variable**

Let $w$ be width; $L=40-2w$.

**Translate into an inequality**

$w(40-2w)\ge 96\Rightarrow w^{2}-20w+48\le 0$.

**Solve step by step**

$(w-4)(w-16)\le 0\Rightarrow 4\le w\le 16$.

**Interpret the result**

Width 18 m gives area 72 < 96.

**Compare to the claim**

False.

**Quick check:** $w=16\to 128$; $w=18\to 72$.""",
            ),
            (
                'A rectangular courtyard uses at most 96 m of fencing, keeps a 5:2 length-to-width ratio, and needs area at least 160 m^2. Every shorter-side length from 8 m to 12 m inclusive is feasible.',
                True,
                """**Reading the wording**

Claim: every $w\in[8,12]$ works.

**Choose a variable**

Width $w$, length $5w/2$.

**Translate into an inequality**

$7w\le 96$ and $\tfrac{5}{2}w^{2}\ge 160$.

**Solve step by step**

$8\le w\le 96/7\approx 13.71$, which contains $[8,12]$.

**Interpret the result**

All claimed widths are feasible.

**Compare to the claim**

True.

**Quick check:** $w=12$ uses 84 m and has area 360.""",
            ),
            (
                'A square plot uses at most 40 m of fencing and must have area at least 81 m^2. Every side length from 9 m to 12 m inclusive is feasible.',
                False,
                """**Reading the wording**

Claim: every $s\in[9,12]$ works.

**Choose a variable**

Let $s$ be side length.

**Translate into an inequality**

$4s\le 40$ and $s^{2}\ge 81$.

**Solve step by step**

$9\le s\le 10$.

**Interpret the result**

Side 12 m needs 48 m of fence.

**Compare to the claim**

False.

**Quick check:** $s=10$ uses 40 m; $s=12$ needs 48 m.""",
            ),
            (
                'A rectangular pen uses at most 60 m of fencing with sides in ratio 2:1 and needs area at least 72 m^2. The shorter side can be any length from 6 m to 15 m inclusive.',
                False,
                """**Reading the wording**

Claim: shorter side in $[6,15]$.

**Choose a variable**

Sides $w$ and $2w$.

**Translate into an inequality**

$6w\le 60$ and $2w^{2}\ge 72$.

**Solve step by step**

$6\le w\le 10$.

**Interpret the result**

15 m exceeds fencing.

**Compare to the claim**

False.

**Quick check:** $w=10$ uses 60 m; $w=15$ would need 90 m.""",
            ),
            (
                'A greenhouse uses at most 120 m of fencing, keeps a 5:3 length-to-width ratio, and needs area at least 375 m^2. The shorter side can be any length from 5 m to 15 m inclusive.',
                False,
                """**Reading the wording**

Claim: shorter side in $[5,15]$.

**Choose a variable**

Width $w$, length $5w/3$.

**Translate into an inequality**

$\tfrac{16w}{3}\le 120$ and $\tfrac{5}{3}w^{2}\ge 375$.

**Solve step by step**

$15\le w\le 22.5$.

**Interpret the result**

Width 5 m fails area badly.

**Compare to the claim**

False.

**Quick check:** $w=15$ area 375, uses 80 m of fence.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set H',
        "diff": '5/5',
        "overview": ('Mostly algebraic solution-set claims plus one average-cost boundary trap.'),
        "items": [
            (
                'The inequality $x^{2}-9x+14\\le 0$ has solution set $[2,7]$.',
                True,
                """**Reading the wording**

Claim: solution is $[2,7]$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$(x-2)(x-7)\le 0$.

**Solve step by step**

Closed interval between roots: $[2,7]$.

**Interpret the result**

Matches.

**Compare to the claim**

True.

**Quick check:** $x=4\to -6\le 0$; $x=8\to 6>0$.""",
            ),
            (
                'The inequality $|x-3|\\le 5$ has solution set $[-2,8]$.',
                True,
                """**Reading the wording**

Claim: solution is $[-2,8]$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$-5\le x-3\le 5$.

**Solve step by step**

$-2\le x\le 8$.

**Interpret the result**

Matches.

**Compare to the claim**

True.

**Quick check:** $x=-2$ and $x=8$ give abs value 5.""",
            ),
            (
                'The inequality $|2x+1|>5$ has solution set $x<-3$ or $x>2$.',
                True,
                """**Reading the wording**

Claim: $x<-3$ or $x>2$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$2x+1>5$ or $2x+1<-5$.

**Solve step by step**

$x>2$ or $x<-3$.

**Interpret the result**

Matches.

**Compare to the claim**

True.

**Quick check:** $x=0$ fails; $x=3$ works.""",
            ),
            (
                'The inequality $\\dfrac{x-2}{x+1}\\le 0$ has solution set $-1<x\\le 2$.',
                True,
                """**Reading the wording**

Claim: $-1<x\le 2$.

**Choose a variable**

Domain $x\ne -1$.

**Translate into an inequality**

Sign chart for $(x-2)/(x+1)\le 0$.

**Solve step by step**

Between roots, exclude $-1$, include 2: $-1<x\le 2$.

**Interpret the result**

Matches.

**Compare to the claim**

True.

**Quick check:** $x=0\to -2\le 0$; $x=3\to 1/4>0$.""",
            ),
            (
                'If producing x units costs $90+0.6x$ EUR, then 150 whole units are the fewest that make average cost strictly less than 1.20 EUR.',
                False,
                """**Reading the wording**

Claim: 150 is the first whole $x$ with average $<1.20$.

**Choose a variable**

Let $x$ be whole units.

**Translate into an inequality**

$\dfrac{90+0.6x}{x}<1.20\Rightarrow x>150$.

**Solve step by step**

First whole is 151; at 150 average equals 1.20.

**Interpret the result**

Strict inequality excludes 150.

**Compare to the claim**

False.

**Quick check:** $x=150\to 1.20$; $x=151\approx 1.196$.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set I',
        "diff": '3/5',
        "overview": ('Fitness, charging, tank filling, exam weighting, taxi fare implication.'),
        "items": [
            (
                'Ana has already burned 900 kcal and burns 8 kcal per minute of jogging. Three hours of jogging are enough to reach a weekly total of at least 2500 kcal.',
                False,
                """**Reading the wording**

Claim: 180 minutes suffice.

**Choose a variable**

Let $m$ be jogging minutes.

**Translate into an inequality**

$900+8m\ge 2500\Rightarrow m\ge 200$.

**Solve step by step**

At $m=180$: total 2340 < 2500.

**Interpret the result**

Need 200 minutes.

**Compare to the claim**

False.

**Quick check:** $m=200\to$ exactly 2500.""",
            ),
            (
                'A phone battery at 20% charges at 2 percentage points per minute. Charging for 25 minutes is enough to reach at least 80%.',
                False,
                """**Reading the wording**

Claim: 25 min → ≥ 80%.

**Choose a variable**

Let $t$ be minutes.

**Translate into an inequality**

$20+2t\ge 80\Rightarrow t\ge 30$.

**Solve step by step**

At $t=25$: level 70%.

**Interpret the result**

Need 30 minutes.

**Compare to the claim**

False.

**Quick check:** $t=30\to$ exactly 80%.""",
            ),
            (
                'An empty 480 L tank fills at 12 L/min. After 30 minutes of filling from empty, the tank is still not more than half full.',
                False,
                """**Reading the wording**

Claim: after 30 min, volume ≤ 240 L.

**Choose a variable**

Let $t=30$.

**Translate into an inequality**

$12\cdot 30=360>240$.

**Solve step by step**

Tank is three-quarters full.

**Interpret the result**

Claim is wrong.

**Compare to the claim**

False.

**Quick check:** Half full at $t=20$.""",
            ),
            (
                'An exam is 40% Part A and 60% Part B. With 70% on Part A, scoring at least 80% on Part B is enough for an overall grade of at least 85%.',
                False,
                """**Reading the wording**

Claim: $b\ge 80$ gives overall ≥ 85.

**Choose a variable**

Let $b$ be Part B %.

**Translate into an inequality**

$28+0.6b\ge 85\Rightarrow b\ge 95$.

**Solve step by step**

At $b=80$: overall 76%.

**Interpret the result**

Need 95% on B.

**Compare to the claim**

False.

**Quick check:** $b=95\to$ exactly 85%.""",
            ),
            (
                'Four friends share a taxi with meter fare F EUR plus a 4 EUR booking fee. If each person pays at most 9 EUR, then the meter fare F must have been at most 32 EUR.',
                True,
                """**Reading the wording**

Claim: each ≤ 9 EUR forces $F\le 32$.

**Choose a variable**

Let $F$ be meter fare.

**Translate into an inequality**

$\dfrac{F+4}{4}\le 9\Rightarrow F\le 32$.

**Solve step by step**

Equivalent inequality.

**Interpret the result**

Implication holds.

**Compare to the claim**

True.

**Quick check:** $F=32\to$ share 9; $F=33\to$ share 9.25.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set J',
        "diff": '4/5',
        "overview": ('Factory, bridge, coffee blend, mobile overage, 4:1 fencing.'),
        "items": [
            (
                'Each product uses 2 of A, 3 of B, and 1 of C at 30, 20, and 40 EUR, plus 8 EUR finishing. Budget 10,000 EUR and storage at most 200 raw units. The maximum number of products is less than 30.',
                False,
                """**Reading the wording**

Claim: max products < 30.

**Choose a variable**

Let $n$ be products.

**Translate into an inequality**

$6n\le 200$ and $168n\le 10000$.

**Solve step by step**

Storage binds: $n\le 33$.

**Interpret the result**

Max is 33, not < 30.

**Compare to the claim**

False.

**Quick check:** $n=33$ stores 198, costs 5544.""",
            ),
            (
                'A bridge limit is 12 tonnes. Each fully loaded truck weighs 4.3 tonnes. Three fully loaded trucks can be on the bridge at once.',
                False,
                """**Reading the wording**

Claim: $n=3$ is allowed.

**Choose a variable**

Let $n$ be trucks.

**Translate into an inequality**

$4.3n\le 12\Rightarrow n\le 2.79$.

**Solve step by step**

Max $n=2$; three weigh 12.9 tonnes.

**Interpret the result**

Not allowed.

**Compare to the claim**

False.

**Quick check:** $n=2\to 8.6$ tonnes.""",
            ),
            (
                'A café mixes equal masses of 8 EUR/kg and 14 EUR/kg beans. Any batch of at least 6 kg of this blend costs at most 60 EUR.',
                False,
                """**Reading the wording**

Claim: every $M\ge 6$ costs ≤ 60.

**Choose a variable**

Let $M$ be total kg.

**Translate into an inequality**

Cost $11M\le 60\Rightarrow M\le 5.45$.

**Solve step by step**

$M=6$ costs 66 EUR.

**Interpret the result**

Larger batches cost more.

**Compare to the claim**

False.

**Quick check:** $M=5\to 55$; $M=6\to 66$.""",
            ),
            (
                'A mobile plan costs 12 EUR plus 0.08 EUR per over-allowance megabyte. After 200 MB overage already used, using at most 150 more MB keeps the bill at or under 40 EUR.',
                True,
                """**Reading the wording**

Claim: ≤ 150 more MB keeps bill ≤ 40.

**Choose a variable**

Let $m$ be additional MB.

**Translate into an inequality**

$12+0.08(200+m)\le 40\Rightarrow m\le 150$.

**Solve step by step**

Bound matches the claim.

**Interpret the result**

True.

**Compare to the claim**

True.

**Quick check:** $m=150\to 40$; $m=151\to 40.08$.""",
            ),
            (
                'A gardener has 80 m of fencing for a 4:1 rectangular plot and needs area at least 64 m^2. The shorter side can be any length from 4 m to 20 m inclusive.',
                False,
                """**Reading the wording**

Claim: shorter side in $[4,20]$.

**Choose a variable**

Sides $w$ and $4w$.

**Translate into an inequality**

$10w\le 80$ and $4w^{2}\ge 64$.

**Solve step by step**

$4\le w\le 8$.

**Interpret the result**

20 m needs 200 m of fence.

**Compare to the claim**

False.

**Quick check:** $w=8$ uses 80 m; $w=20$ needs 200 m.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set K',
        "diff": '4/5',
        "overview": ('Average cost, projectile window, two-resource factory, quadratic open interval, abs inequality.'),
        "items": [
            (
                'If producing x units costs $200+0.5x$ EUR, then at least 45 whole units must be made for average cost to fall below 5 EUR.',
                True,
                """**Reading the wording**

Claim: first whole $x$ is 45.

**Choose a variable**

Let $x$ be whole units.

**Translate into an inequality**

$\dfrac{200+0.5x}{x}<5\Rightarrow x>44.44$.

**Solve step by step**

Smallest whole $x=45$.

**Interpret the result**

44 still averages above 5.

**Compare to the claim**

True.

**Quick check:** $x=44\approx 5.045$; $x=45\approx 4.944$.""",
            ),
            (
                'If $h(t)=-5t^{2}+40t+8$, then the object is more than 83 m above ground between 3 and 5 seconds.',
                True,
                """**Reading the wording**

Claim: $h(t)>83$ on $(3,5)$.

**Choose a variable**

Let $t$ be seconds.

**Translate into an inequality**

$h(t)>83\Rightarrow (t-3)(t-5)<0$.

**Solve step by step**

$3<t<5$.

**Interpret the result**

Open interval matches.

**Compare to the claim**

True.

**Quick check:** $h(4)=88$; $h(3)=83$.""",
            ),
            (
                'Each finished good uses 4 of A and 3 of B at 25 and 40 EUR, plus 10 EUR finishing. Budget 9,000 EUR and storage ≤ 180 raw units. The maximum output is less than 25.',
                False,
                """**Reading the wording**

Claim: max output < 25.

**Choose a variable**

Let $n$ be output.

**Translate into an inequality**

$7n\le 180$ and $230n\le 9000$.

**Solve step by step**

$n\le 25$ from storage ($7\cdot 25=175$).

**Interpret the result**

Maximum is 25, not less than 25.

**Compare to the claim**

False.

**Quick check:** $n=25$ stores 175, costs 5750.""",
            ),
            (
                'If $f(x)=-x^{2}+10x+4$, then $f(x)>20$ between 1 and 9, endpoints included.',
                False,
                """**Reading the wording**

Claim: solution is closed $[1,9]$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$(x-2)(x-8)<0\Rightarrow 2<x<8$.

**Solve step by step**

Open $(2,8)$; endpoints 1 and 9 fail.

**Interpret the result**

Not $[1,9]$.

**Compare to the claim**

False.

**Quick check:** $f(1)=13$; $f(5)=29$.""",
            ),
            (
                'The inequality $|x+4|\\ge 3$ has solution set $x\\le -7$ or $x\\ge -1$.',
                True,
                """**Reading the wording**

Claim: $x\le -7$ or $x\ge -1$.

**Choose a variable**

Let $x$ be real.

**Translate into an inequality**

$x+4\ge 3$ or $x+4\le -3$.

**Solve step by step**

$x\ge -1$ or $x\le -7$.

**Interpret the result**

Matches.

**Compare to the claim**

True.

**Quick check:** $x=-4\to 0<3$; $x=-7\to 3$.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set L',
        "diff": '3/5',
        "overview": ('Everyday budgets: streaming downloads, gym guests, printer paper, rideshare distance, cafeteria lunches.'),
        "items": [
            (
                'A streaming service costs 9 EUR per month plus 0.03 EUR per downloaded track. With a 15 EUR budget, a user can download at most 250 tracks.',
                False,
                """**Reading the wording**

        Monthly fee 9 EUR plus 0.03 EUR per track; budget 15 EUR. Claim: maximum downloads is 250.

        **Choose a variable**

        Let $n$ be the number of downloaded tracks.

        **Translate into an inequality**

        $9 + 0.03n \le 15$.

        **Solve step by step**

        $0.03n \le 6$
$n \le 200$.

        **Interpret the result**

        At most 200 tracks fit the budget, not 250.

        **Compare to the claim**

        False — 250 tracks would cost 16.50 EUR.

        **Quick check:** $n = 200$ costs exactly 15 EUR; $n = 250$ costs 16.50 EUR.""",
            ),
            (
                'A gym membership is 40 EUR per month and each guest pass costs 6 EUR. With 70 EUR this month, at most 5 guest passes can be bought.',
                True,
                """**Reading the wording**

        Fixed 40 EUR plus 6 EUR per guest; budget 70 EUR. Claim: maximum guest passes is 5.

        **Choose a variable**

        Let $g$ be the number of guest passes.

        **Translate into an inequality**

        $40 + 6g \le 70$.

        **Solve step by step**

        $6g \le 30$
$g \le 5$.

        **Interpret the result**

        The greatest whole number of guest passes is 5.

        **Compare to the claim**

        True — the claim matches the solution.

        **Quick check:** $g = 5$ costs 70 EUR; $g = 6$ costs 76 EUR.""",
            ),
            (
                'A printer cartridge costs 22 EUR and premium paper is 0.05 EUR per sheet. With 30 EUR total, printing 200 premium sheets including one cartridge is affordable.',
                False,
                """**Reading the wording**

        One cartridge plus paper cost; budget 30 EUR. Claim: 200 sheets are affordable.

        **Choose a variable**

        Let $s$ be the number of premium sheets.

        **Translate into an inequality**

        $22 + 0.05s \le 30$.

        **Solve step by step**

        $0.05s \le 8$
$s \le 160$.

        **Interpret the result**

        At most 160 sheets fit; 200 sheets overshoot.

        **Compare to the claim**

        False — 200 sheets cost 32 EUR in total.

        **Quick check:** $s = 160$ costs 30 EUR; $s = 200$ costs 32 EUR.""",
            ),
            (
                'A rideshare charges 2.50 EUR pickup plus 0.90 EUR per kilometre. With 20 EUR, any trip of at most 22 km stays within budget.',
                False,
                """**Reading the wording**

        Pickup 2.50 EUR plus 0.90 EUR/km; budget 20 EUR. Claim: every distance ≤ 22 km is affordable.

        **Choose a variable**

        Let $d$ be the trip distance in kilometres.

        **Translate into an inequality**

        $2.50 + 0.90d \le 20$.

        **Solve step by step**

        $0.90d \le 17.50$
$d \le \dfrac{17.50}{0.90} \approx 19.44$.

        **Interpret the result**

        Trips longer than about 19.44 km exceed the budget, so 22 km does not always work.

        **Compare to the claim**

        False — 22 km costs 22.30 EUR.

        **Quick check:** $d = 19$ costs 19.60 EUR; $d = 22$ costs 22.30 EUR.""",
            ),
            (
                'A cafeteria card starts with 25 EUR and lunch costs 3.20 EUR each day. The card lasts for at least 8 full lunch days.',
                False,
                """**Reading the wording**

        Each lunch 3.20 EUR; starting balance 25 EUR. Claim: at least 8 full lunches are possible.

        **Choose a variable**

        Let $n$ be the number of full lunch days.

        **Translate into an inequality**

        $3.20n \le 25$.

        **Solve step by step**

        $n \le \dfrac{25}{3.20} = 7.8125$.
Largest whole $n$: 7.

        **Interpret the result**

        Only 7 full lunches fit; 8 would overspend.

        **Compare to the claim**

        False — eight lunches cost 25.60 EUR.

        **Quick check:** $n = 7$ costs 22.40 EUR; $n = 8$ costs 25.60 EUR.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set M',
        "diff": '4/5',
        "overview": ('Energy use, bike-share minutes, draining tank, shipping comparison, and overtime pay.'),
        "items": [
            (
                'Home heating costs 55 EUR fixed plus 0.12 EUR per kWh. With a 100 EUR energy budget, at most 400 kWh can be used.',
                False,
                """**Reading the wording**

        Fixed 55 EUR plus 0.12 EUR/kWh; budget 100 EUR. Claim: maximum usage is 400 kWh.

        **Choose a variable**

        Let $k$ be the number of kilowatt-hours.

        **Translate into an inequality**

        $55 + 0.12k \le 100$.

        **Solve step by step**

        $0.12k \le 45$
$k \le 375$.

        **Interpret the result**

        At most 375 kWh are affordable, not 400.

        **Compare to the claim**

        False — 400 kWh would cost 103 EUR.

        **Quick check:** $k = 375$ costs 100 EUR; $k = 400$ costs 103 EUR.""",
            ),
            (
                'A bike-share charges 1 EUR to unlock plus 0.15 EUR per minute. With 10 EUR, a ride of 65 minutes stays within budget.',
                False,
                """**Reading the wording**

        Unlock 1 EUR plus 0.15 EUR/min; budget 10 EUR. Claim: 65 minutes is affordable.

        **Choose a variable**

        Let $t$ be the ride time in minutes.

        **Translate into an inequality**

        $1 + 0.15t \le 10$.

        **Solve step by step**

        $0.15t \le 9$
$t \le 60$.

        **Interpret the result**

        At most 60 minutes fit the budget.

        **Compare to the claim**

        False — 65 minutes cost 10.75 EUR.

        **Quick check:** $t = 60$ costs 10 EUR; $t = 65$ costs 10.75 EUR.""",
            ),
            (
                'A full 480 L tank drains at 8 L per minute. After 50 minutes of draining from full, at least one quarter of the water remains.',
                False,
                """**Reading the wording**

        Start 480 L; drain 8 L/min for 50 min. Claim: remaining volume ≥ 120 L.

        **Choose a variable**

        Let $t = 50$ be the draining time in minutes.

        **Translate into an inequality**

        Volume left $= 480 - 8t$. Need $480 - 8t \ge 120$.

        **Solve step by step**

        At $t = 50$: volume $= 480 - 400 = 80$.
$80 < 120$.

        **Interpret the result**

        Only 80 L remain, which is less than one quarter.

        **Compare to the claim**

        False — a quarter remains only while $t \le 45$.

        **Quick check:** At $t = 45$, volume $= 120$; at $t = 50$, volume $= 80$.""",
            ),
            (
                'Shipper A charges 12 EUR plus 0.80 EUR per kg; shipper B charges 20 EUR plus 0.40 EUR per kg. For a 25 kg parcel, A is strictly cheaper than B.',
                False,
                """**Reading the wording**

        Compare A and B at weight 25 kg. Claim: A < B at that weight.

        **Choose a variable**

        Let $w = 25$ be the parcel mass in kilograms.

        **Translate into an inequality**

        A $= 12 + 0.80w$. B $= 20 + 0.40w$.

        **Solve step by step**

        A $= 12 + 20 = 32$.
B $= 20 + 10 = 30$.
$32 > 30$.

        **Interpret the result**

        B is cheaper at 25 kg. Crossing point: $12 + 0.80w = 20 + 0.40w \Rightarrow w = 20$.

        **Compare to the claim**

        False — A is cheaper only when $w < 20$.

        **Quick check:** $w = 15$: A $= 24$, B $= 26$; $w = 25$: A $= 32$, B $= 30$.""",
            ),
            (
                'Pat earns 11 EUR per hour up to 40 hours and 16.50 EUR per hour thereafter. Working 43 hours yields at least 500 EUR.',
                False,
                """**Reading the wording**

        Regular 11 EUR/h for 40 h, then 16.50 EUR/h. Claim: 43 hours → pay ≥ 500 EUR.

        **Choose a variable**

        Let $h = 43$ be hours worked.

        **Translate into an inequality**

        Pay $= 11 \cdot 40 + 16.50 \cdot (h - 40)$ for $h > 40$.

        **Solve step by step**

        Pay $= 440 + 16.50 \cdot 3 = 440 + 49.50 = 489.50$.
$489.50 < 500$.

        **Interpret the result**

        43 hours fall short of 500 EUR.

        **Compare to the claim**

        False — need at least 44 hours (506 EUR).

        **Quick check:** $h = 43 \to 489.50$; $h = 44 \to 506$.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set N',
        "diff": '4/5',
        "overview": ('Quadratic height window, average-cost threshold, absolute-value interval, compound inequality, and storage-bound production.'),
        "items": [
            (
                'If $f(x)=-5x^{2}+30x+10$, then the object is at least 40 m above the ground for every t in $[1,5]$, endpoints included.',
                False,
                """**Reading the wording**

        Height model $f$; claim $f(t) \ge 40$ on the whole closed interval $[1,5]$.

        **Choose a variable**

        Let $t$ be time in seconds.

        **Translate into an inequality**

        $-5t^{2}+30t+10 \ge 40$
$-5t^{2}+30t-30 \ge 0$
$t^{2}-6t+6 \le 0$.

        **Solve step by step**

        Roots $3 \pm \sqrt{3} \approx 1.27, 4.73$.
Solution: $3-\sqrt{3} \le t \le 3+\sqrt{3}$.

        **Interpret the result**

        The true window is roughly $[1.27, 4.73]$, narrower than $[1,5]$.

        **Compare to the claim**

        False — $f(1) = f(5) = 35 < 40$.

        **Quick check:** $f(3) = 55 \ge 40$; $f(1) = 35 < 40$.""",
            ),
            (
                'If producing x units costs $120+0.25x$ EUR, then 80 whole units are enough to bring average cost strictly below 1.70 EUR.',
                False,
                """**Reading the wording**

        Total cost $120 + 0.25x$; claim average cost at $x = 80$ is already $< 1.70$.

        **Choose a variable**

        Let $x$ be the number of whole units produced.

        **Translate into an inequality**

        $\dfrac{120 + 0.25x}{x} < 1.70$.

        **Solve step by step**

        $\dfrac{120}{x} + 0.25 < 1.70$
$\dfrac{120}{x} < 1.45$
$x > \dfrac{120}{1.45} \approx 82.76$.
Need $x \ge 83$.

        **Interpret the result**

        Eighty units give average cost $1.75$, still too high.

        **Compare to the claim**

        False — need at least 83 whole units.

        **Quick check:** $x = 80 \to 1.75$; $x = 83 \approx 1.696 < 1.70$.""",
            ),
            (
                'The inequality $|3x-6|\\le 9$ has solution set $[-1,5]$.',
                True,
                """**Reading the wording**

        Absolute-value inequality; claim solution set is the closed interval $[-1,5]$.

        **Choose a variable**

        Let $x$ be a real number.

        **Translate into an inequality**

        $-9 \le 3x - 6 \le 9$.

        **Solve step by step**

        $-3 \le 3x \le 15$
$-1 \le x \le 5$.

        **Interpret the result**

        The solution set is exactly $[-1,5]$.

        **Compare to the claim**

        True — the claim matches.

        **Quick check:** $x = -1$ and $x = 5$ give absolute value 9; $x = 0$ gives 6.""",
            ),
            (
                'The compound inequality $4<3x+1\\le 13$ has solution set $1<x\\le 4$.',
                True,
                """**Reading the wording**

        Two-sided linear inequality; claim solution $1 < x \le 4$.

        **Choose a variable**

        Let $x$ be a real number.

        **Translate into an inequality**

        $4 < 3x + 1$ and $3x + 1 \le 13$.

        **Solve step by step**

        $3 < 3x \Rightarrow x > 1$
$3x \le 12 \Rightarrow x \le 4$.

        **Interpret the result**

        Intersection: $1 < x \le 4$.

        **Compare to the claim**

        True — the claim matches.

        **Quick check:** $x = 1$ gives 4 (excluded); $x = 4$ gives 13 (included).""",
            ),
            (
                'Each product uses 5 units of A, 1 of B, and 2 of C priced at 10, 80, and 15 EUR, plus 20 EUR finishing. Budget 8,000 EUR and storage capacity at most 240 resource units. The maximum number of products is less than 50.',
                True,
                """**Reading the wording**

        Per product: resources $5+1+2=8$, cost $50+80+30+20=180$ EUR. Claim: max products $< 50$.

        **Choose a variable**

        Let $n$ be the number of products.

        **Translate into an inequality**

        $8n \le 240$ and $180n \le 8000$.

        **Solve step by step**

        Storage: $n \le 30$.
Budget: $n \le \dfrac{8000}{180} \approx 44.4$.
Binding limit: $n \le 30$.

        **Interpret the result**

        Maximum is 30, which is less than 50.

        **Compare to the claim**

        True — $30 < 50$.

        **Quick check:** $n = 30$ uses 240 storage and costs 5,400 EUR.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set O',
        "diff": '3/5',
        "overview": ('Parking hours, library fines, ferry tickets, ice-cream scoops, and laundry cycles.'),
        "items": [
            (
                'Street parking costs 1.50 EUR for the first hour and 0.80 EUR for each extra hour. With 5 EUR, at most 6 hours of parking are possible.',
                False,
                """**Reading the wording**

        First hour 1.50 EUR, then 0.80 EUR per extra hour; budget 5 EUR. Claim: maximum hours is 6.

        **Choose a variable**

        Let $h \ge 1$ be the number of whole hours parked.

        **Translate into an inequality**

        For $h \ge 1$: $1.50 + 0.80(h - 1) \le 5$.

        **Solve step by step**

        $0.80(h - 1) \le 3.50$
$h - 1 \le 4.375$
$h \le 5.375$.
Largest whole $h$: 5.

        **Interpret the result**

        At most 5 whole hours fit; 6 hours overspend.

        **Compare to the claim**

        False — 6 hours cost 5.50 EUR.

        **Quick check:** $h = 5$ costs 4.70 EUR; $h = 6$ costs 5.50 EUR.""",
            ),
            (
                'A library fine is 0.40 EUR per day late. With a 6 EUR limit before a block, a book can be at most 15 days late.',
                True,
                """**Reading the wording**

Fine 0.40 EUR/day; block at 6 EUR. Claim: maximum late days is 15.

**Choose a variable**

Let $d$ be the number of days late.

**Translate into an inequality**

$0.40d \le 6$.

**Solve step by step**

$d \le 15$.

**Interpret the result**

The greatest whole number of late days is 15.

**Compare to the claim**

True — the claim matches.

**Quick check:** $d = 15$ costs 6 EUR; $d = 16$ costs 6.40 EUR.""",
            ),
            (
                'Ferry tickets cost 18 EUR for adults and 9 EUR for children. A family has 72 EUR and buys 2 adult tickets. They can still buy at most 5 child tickets.',
                False,
                """**Reading the wording**

        2 adults already bought; remaining budget for children. Claim: max children is 5.

        **Choose a variable**

        Let $c$ be the number of child tickets.

        **Translate into an inequality**

        $2 \cdot 18 + 9c \le 72$
$36 + 9c \le 72$.

        **Solve step by step**

        $9c \le 36$
$c \le 4$.

        **Interpret the result**

        At most 4 child tickets remain affordable.

        **Compare to the claim**

        False — 5 children would make the total 81 EUR.

        **Quick check:** $c = 4$ totals 72 EUR; $c = 5$ totals 81 EUR.""",
            ),
            (
                'An ice-cream stand sells scoops at 1.80 EUR each. With a 10 EUR note and buying only scoops, at most 5 scoops can be bought.',
                True,
                """**Reading the wording**

        Each scoop 1.80 EUR; budget 10 EUR. Claim: maximum scoops is 5.

        **Choose a variable**

        Let $n$ be the number of scoops.

        **Translate into an inequality**

        $1.80n \le 10$.

        **Solve step by step**

        $n \le \dfrac{10}{1.80} \approx 5.56$.
Largest whole $n$: 5.

        **Interpret the result**

        Five scoops fit; six do not.

        **Compare to the claim**

        True — the claim matches.

        **Quick check:** $n = 5$ costs 9 EUR; $n = 6$ costs 10.80 EUR.""",
            ),
            (
                'Laundry machines cost 3.50 EUR per cycle. With 20 EUR on a laundry card, at most 6 cycles can be run.',
                False,
                """**Reading the wording**

        Each cycle 3.50 EUR; card balance 20 EUR. Claim: maximum cycles is 6.

        **Choose a variable**

        Let $n$ be the number of cycles.

        **Translate into an inequality**

        $3.50n \le 20$.

        **Solve step by step**

        $n \le \dfrac{20}{3.50} \approx 5.71$.
Largest whole $n$: 5.

        **Interpret the result**

        Only 5 cycles fit; 6 cycles overspend.

        **Compare to the claim**

        False — 6 cycles cost 21 EUR.

        **Quick check:** $n = 5$ costs 17.50 EUR; $n = 6$ costs 21 EUR.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set P',
        "diff": '5/5',
        "overview": ('Algebraic solution sets: quadratic, two-absolute-value sum, rational inequality, open quadratic window, and a 2:1 fencing claim.'),
        "items": [
            (
                'The inequality $x^{2}-x-6>0$ has solution set $x<-2$ or $x>3$.',
                True,
                """**Reading the wording**

        Quadratic strict inequality; claim solution $x < -2$ or $x > 3$.

        **Choose a variable**

        Let $x$ be a real number.

        **Translate into an inequality**

        $(x - 3)(x + 2) > 0$.

        **Solve step by step**

        Critical points $x = -2$ and $x = 3$.
Positive outside: $x < -2$ or $x > 3$.

        **Interpret the result**

        The solution set matches the claim.

        **Compare to the claim**

        True.

        **Quick check:** $x = 0$ gives $-6 \not> 0$; $x = 4$ gives $6 > 0$.""",
            ),
            (
                'The inequality $|x-1|+|x+1|\\le 4$ has solution set $[-2,2]$.',
                True,
                """**Reading the wording**

        Sum of absolute values ≤ 4; claim solution $[-2,2]$.

        **Choose a variable**

        Let $x$ be a real number.

        **Translate into an inequality**

        For $|x| \le 1$: $|x-1|+|x+1| = 2$.
For $|x| \ge 1$: $|x-1|+|x+1| = 2|x|$.

        **Solve step by step**

        If $|x| \le 1$, then $2 \le 4$ always.
If $|x| \ge 1$, then $2|x| \le 4 \Rightarrow |x| \le 2$.
Overall: $-2 \le x \le 2$.

        **Interpret the result**

        The solution set is exactly $[-2,2]$.

        **Compare to the claim**

        True.

        **Quick check:** $x = 2$ gives 4; $x = 3$ gives 6 > 4.""",
            ),
            (
                'The inequality $\\dfrac{2x-1}{x-3}\\ge 0$ has solution set $\\dfrac{1}{2}\\le x<3$.',
                False,
                """**Reading the wording**

        Rational inequality ≥ 0; claim solution is $[\tfrac{1}{2}, 3)$.

        **Choose a variable**

        Critical points $x = \tfrac{1}{2}$ (zero) and $x = 3$ (undefined).

        **Translate into an inequality**

        Sign chart of $\dfrac{2x-1}{x-3}$.

        **Solve step by step**

        Non-negative on $(-\infty, \tfrac{1}{2}] \cup (3, \infty)$.
The claimed interval $[\tfrac{1}{2}, 3)$ is where the expression is ≤ 0 (except undefined at 3).

        **Interpret the result**

        The claimed set is nearly the opposite of the true ≥ 0 set.

        **Compare to the claim**

        False — correct set is $x \le \tfrac{1}{2}$ or $x > 3$.

        **Quick check:** $x = 0$: $\dfrac{-1}{-3} > 0$ (in true set, not in claim); $x = 2$: $\dfrac{3}{-1} < 0$.""",
            ),
            (
                'If $g(x)=-x^{2}+6x-5$, then $g(x)\\ge 0$ exactly on the open interval $(1,5)$.',
                False,
                """**Reading the wording**

        Quadratic ≥ 0; claim solution is the open interval $(1,5)$.

        **Choose a variable**

        Let $x$ be a real number.

        **Translate into an inequality**

        $-x^{2}+6x-5 \ge 0$
$x^{2}-6x+5 \le 0$
$(x-1)(x-5) \le 0$.

        **Solve step by step**

        Solution: $1 \le x \le 5$.

        **Interpret the result**

        Endpoints are included because $g(1) = g(5) = 0$.

        **Compare to the claim**

        False — the correct set is the closed interval $[1,5]$.

        **Quick check:** $g(1) = 0 \ge 0$; $g(3) = 4 \ge 0$; $g(0) = -5 < 0$.""",
            ),
            (
                'A rectangular pen uses at most 100 m of fencing, keeps a 2:1 length-to-width ratio, and needs area at least 200 m^2. Every shorter-side length from 8 m to 16 m inclusive is possible.',
                False,
                """**Reading the wording**

        Perimeter ≤ 100, sides 2:1, area ≥ 200. Claim: shorter side may be any value in $[8,16]$.

        **Choose a variable**

        Let $w > 0$ be the shorter side; longer side $2w$.

        **Translate into an inequality**

        Fencing $2(2w + w) \le 100$. Area $2w^{2} \ge 200$.

        **Solve step by step**

        $6w \le 100 \Rightarrow w \le \dfrac{50}{3} \approx 16.67$.
$w^{2} \ge 100 \Rightarrow w \ge 10$.
True range: $10 \le w \le \dfrac{50}{3}$.

        **Interpret the result**

        $w = 8$ fails the area requirement even though fencing would allow it.

        **Compare to the claim**

        False — the lower end must be 10 m, not 8 m.

        **Quick check:** $w = 8$ area 128 < 200; $w = 10$ area 200; $w = 16$ uses 96 m of fence.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set Q',
        "diff": '3/5',
        "overview": ('Sufficiency and comparison claims: wages with bonus, phone plans, fuel range, sale discount, and delivery timing.'),
        "items": [
            (
                'Sam earns 15 EUR per hour plus a 40 EUR bonus whenever more than 20 hours are worked. Working 22 hours is enough to earn at least 400 EUR.',
                False,
                """**Reading the wording**

        15 EUR/h with a 40 EUR bonus if hours > 20. Claim: 22 hours → ≥ 400 EUR.

        **Choose a variable**

        Let $h = 22$.

        **Translate into an inequality**

        Pay $= 15h + 40$ when $h > 20$.

        **Solve step by step**

        Pay $= 15 \cdot 22 + 40 = 330 + 40 = 370$.
$370 < 400$.

        **Interpret the result**

        22 hours yield only 370 EUR.

        **Compare to the claim**

        False — need $15h + 40 \ge 400 \Rightarrow h \ge 24$.

        **Quick check:** $h = 24 \to 400$; $h = 22 \to 370$.""",
            ),
            (
                'Plan A costs 8 EUR plus 0.12 EUR per message; Plan B costs 15 EUR plus 0.04 EUR per message. For 100 messages, Plan A is cheaper than Plan B.',
                False,
                """**Reading the wording**

        Compare plans at 100 messages. Claim: A < B at that volume.

        **Choose a variable**

        Let $m = 100$ be the number of messages.

        **Translate into an inequality**

        A $= 8 + 0.12m$. B $= 15 + 0.04m$.

        **Solve step by step**

        A $= 8 + 12 = 20$.
B $= 15 + 4 = 19$.
$20 > 19$.

        **Interpret the result**

        Plan B is cheaper at 100 messages. Break-even at $m = 87.5$.

        **Compare to the claim**

        False — A is cheaper only for fewer than 87.5 messages.

        **Quick check:** $m = 50$: A $= 14$, B $= 17$; $m = 100$: A $= 20$, B $= 19$.""",
            ),
            (
                'A car uses 0.08 L per km and fuel costs 1.50 EUR per litre. With 48 EUR for fuel, any trip of 400 km or less stays within budget.',
                True,
                """**Reading the wording**

        Consumption 0.08 L/km at 1.50 EUR/L; budget 48 EUR. Claim: every $d \le 400$ is affordable.

        **Choose a variable**

        Let $d$ be distance in kilometres.

        **Translate into an inequality**

        Cost $= 0.08 \cdot 1.50 \cdot d = 0.12d$.
Need $0.12d \le 48$.

        **Solve step by step**

        $d \le 400$.

        **Interpret the result**

        Exactly 400 km uses the full 48 EUR, so every shorter trip fits.

        **Compare to the claim**

        True.

        **Quick check:** $d = 400$ costs 48 EUR; $d = 401$ costs 48.12 EUR.""",
            ),
            (
                'A shop offers 25% off. With 60 EUR, Priya can afford any item whose marked price is at most 85 EUR.',
                False,
                """**Reading the wording**

        25% discount; budget 60 EUR. Claim: every marked price ≤ 85 EUR is affordable after discount.

        **Choose a variable**

        Let $p$ be the marked price in EUR.

        **Translate into an inequality**

        Pay $0.75p \le 60 \Rightarrow p \le 80$.

        **Solve step by step**

        Marked prices above 80 EUR overshoot after discount.
At $p = 85$: pay $0.75 \cdot 85 = 63.75 > 60$.

        **Interpret the result**

        The true ceiling is 80 EUR, not 85 EUR.

        **Compare to the claim**

        False.

        **Quick check:** $p = 80$ costs 60 EUR; $p = 85$ costs 63.75 EUR.""",
            ),
            (
                'A courier has 75 minutes including a fixed 10-minute warehouse stop and drives at 2 minutes per kilometre. Every delivery of at most 35 km can be finished on time.',
                False,
                """**Reading the wording**

        Total time ≤ 75 min with a 10-minute stop and 2 min/km driving. Claim: every $d \le 35$ works.

        **Choose a variable**

        Let $d$ be delivery distance in kilometres.

        **Translate into an inequality**

        $10 + 2d \le 75$.

        **Solve step by step**

        $2d \le 65$
$d \le 32.5$.

        **Interpret the result**

        Distances above 32.5 km miss the deadline, so 35 km is not always feasible.

        **Compare to the claim**

        False — 35 km needs 80 minutes.

        **Quick check:** $d = 32$ needs 74 min; $d = 35$ needs 80 min.""",
            ),
        ],
    },
    {
        "title": 'Exam-style inequalities — set R',
        "diff": '4/5',
        "overview": ('Utility bills, cinema tickets, backpack constraints, temperature band, and quadratic profit window.'),
        "items": [
            (
                'A water bill is 12 EUR fixed plus 1.80 EUR per cubic metre. With 30 EUR, a household can use at most 12 m^3.',
                False,
                """**Reading the wording**

        Fixed 12 EUR plus 1.80 EUR per m³; budget 30 EUR. Claim: maximum usage is 12 m³.

        **Choose a variable**

        Let $m$ be cubic metres used.

        **Translate into an inequality**

        $12 + 1.80m \le 30$.

        **Solve step by step**

        $1.80m \le 18$
$m \le 10$.

        **Interpret the result**

        At most 10 m³ fit the budget, not 12.

        **Compare to the claim**

        False — 12 m³ would cost 33.60 EUR.

        **Quick check:** $m = 10$ costs 30 EUR; $m = 12$ costs 33.60 EUR.""",
            ),
            (
                'Cinema tickets cost 9 EUR each. With 50 EUR, a group can buy at most 6 tickets.',
                False,
                """**Reading the wording**

        Each ticket 9 EUR; budget 50 EUR. Claim: maximum tickets is 6.

        **Choose a variable**

        Let $n$ be the number of tickets.

        **Translate into an inequality**

        $9n \le 50$.

        **Solve step by step**

        $n \le \dfrac{50}{9} \approx 5.56$.
Largest whole $n$: 5.

        **Interpret the result**

        Only 5 tickets fit; 6 tickets overspend.

        **Compare to the claim**

        False — 6 tickets cost 54 EUR.

        **Quick check:** $n = 5$ costs 45 EUR; $n = 6$ costs 54 EUR.""",
            ),
            (
                'A backpack may carry at most 4 kg and at most 20 litres. Each book weighs 0.5 kg and takes 3 litres. The greatest number of books that satisfy both limits is 8.',
                False,
                """**Reading the wording**

        Weight ≤ 4 kg and volume ≤ 20 L; each book 0.5 kg and 3 L. Claim: maximum books is 8.

        **Choose a variable**

        Let $n$ be the number of books.

        **Translate into an inequality**

        $0.5n \le 4$ and $3n \le 20$.

        **Solve step by step**

        Weight: $n \le 8$.
Volume: $n \le \dfrac{20}{3} \approx 6.67$.
Binding limit: $n \le 6$.

        **Interpret the result**

        Volume binds first, so the maximum is 6, not 8.

        **Compare to the claim**

        False.

        **Quick check:** $n = 6$ uses 3 kg and 18 L; $n = 7$ needs 21 L > 20.""",
            ),
            (
                'A vaccine fridge must stay between 2 °C and 6 °C inclusive. The condition $|T-4|\\le 2$ describes exactly that temperature band.',
                True,
                """**Reading the wording**

Required band $[2,6]$. Claim: $|T-4| \le 2$ is exactly that band.

**Choose a variable**

Let $T$ be the temperature in °C.

**Translate into an inequality**

$|T - 4| \le 2 \Leftrightarrow -2 \le T - 4 \le 2$.

**Solve step by step**

$2 \le T \le 6$.

**Interpret the result**

The absolute-value condition matches the required band exactly.

**Compare to the claim**

True.

**Quick check:** $T = 2$ and $T = 6$ are endpoints; $T = 7$ gives $|3| = 3 > 2$.""",
            ),
            (
                'If $p(x)=-x^{2}+10x-9$, then the solution set of $p(x)>12$ is exactly the closed interval $[3,7]$.',
                False,
                """**Reading the wording**

        Quadratic profit/height-style model; claim $p(x) > 12$ on the closed interval $[3,7]$.

        **Choose a variable**

        Let $x$ be a real number.

        **Translate into an inequality**

        $-x^{2}+10x-9 > 12$
$-x^{2}+10x-21 > 0$
$x^{2}-10x+21 < 0$
$(x-3)(x-7) < 0$.

        **Solve step by step**

        Solution: $3 < x < 7$.

        **Interpret the result**

        Endpoints give $p(3) = p(7) = 12$, which is not strictly greater than 12.

        **Compare to the claim**

        False — the correct set is the open interval $(3,7)$.

        **Quick check:** $p(5) = 16 > 12$; $p(3) = 12 \not> 12$.""",
            ),
        ],
    },
]

