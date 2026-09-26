# DEMO MATH 5.H01

ak=[True, True, True, True, False]

current_lens=[310, 286, 279, 641, 560]

## title
Print-shop mix — two unknowns, five traps

## context
A print shop sells only mono pages and colour pages. In one batch it printed a total of $180$ pages and booked revenue EUR 8100. Mono sells at EUR 35 each and colour at EUR 55 each:
$$
m+c=180,\qquad 35m+55c=8100.
$$
The unique baseline solution is the factual starting point. Decide whether each statement is true or false.

## statement A
The unique baseline solution is $(m,c)=(90,90)$.

## current A
**A.** → True

Eliminate $m$ by substituting $m=180-c$ into the revenue equation:

$$
35(180-c)+55c=8100
$$

$$
35\cdot 180-35c+55c=8100
$$

$$
6300+20c=8100
$$

$$
20c=1800
$$

$$
c=\frac{1800}{20}=90
$$

$$
m=180-90=90
$$

The unique baseline solution is therefore $(m,c)=(90,90)$.

So the statement is True.

## statement B
If the colour price had been EUR 60 instead of EUR 55, with the same count $m+c=180$ and the same revenue EUR 8100, then $c$ would have fallen below $75$.

## current B
**B.** → True

Keep $m+c=180$ and revenue $8100$, but replace the colour price by $60$:

$$
35(180-c)+60c=8100
$$

$$
6300-35c+60c=8100
$$

$$
6300+25c=8100
$$

$$
25c=1800
$$

$$
c=\frac{1800}{25}=72
$$

$$
72<75
$$

so the new colour count falls below $75$.

So the statement is True.

## statement C
If management had printed $15$ fewer mono pages and $15$ more colour pages than the baseline, revenue would have risen by exactly EUR 300.

## current C
**C.** → True

From the baseline $(90,90)$, shift by $15$ pages toward colour:

$$
(m,c)=(75,105)
$$

Revenue at the new mix:

$$
35\cdot 75=2625
$$

$$
55\cdot 105=5775
$$

$$
2625+5775=8400
$$

$$
8400-8100=300
$$

Revenue rises by exactly EUR $300$.

So the statement is True.

## statement D
If total pages stayed $180$ but the revenue target rose to EUR 10000 at the same prices, no nonnegative solution $(m,c)$ would exist, because an all-colour batch only reaches EUR 9900.

## current D
**D.** → True

An all-colour batch of $180$ pages yields the maximum feasible revenue at the given prices. Compute that ceiling:

$$
55\cdot 180
$$

$$
55\cdot 80=4400\qquad 5500+4400=9900
$$

Any mix that includes mono pages earns strictly less, because mono is cheaper than colour:

$$
35<55
$$

Replacing one colour page by one mono page cuts revenue by

$$
55-35=20
$$

euros per swapped page. Therefore every nonnegative mix $(m,c)$ with $m+c=180$ satisfies

$$
35m+55c\le 9900
$$

A target of EUR 10000 exceeds that ceiling:

$$
10000>9900
$$

$$
10000-9900=100
$$

so no nonnegative solution $(m,c)$ exists.

So the statement is True.

## statement E
If prices stayed EUR 35 and EUR 55 but the shop printed the swapped mix $(120,60)$ instead of the baseline $(90,90)$, revenue would still be EUR 8100.

## current E
**E.** → False

Revenue at the swapped mix $(120,60)$, product by product. First mono:

$$
35\cdot 120
$$

$$
35\cdot 20=700\qquad 3500+700=4200
$$

Then colour:

$$
55\cdot 60
$$

$$
5\cdot 60=300\qquad 3000+300=3300
$$

Sum:

$$
4200+3300=7500
$$

$$
7500\neq 8100
$$

Difference:

$$
8100-7500=600
$$

Alternatively, relative to baseline $(90,90)$, the swap moves $30$ pages from colour to mono, each costing

$$
55-35=20
$$

euros:

The swapped mix earns EUR 600 less than EUR 8100, so it does not preserve the baseline revenue.

So the statement is False.