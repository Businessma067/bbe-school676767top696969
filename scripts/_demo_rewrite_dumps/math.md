# 0 DEMO MATH 1.H02 chapter=1 ak=[True, True, True, False, False]
## title
Conference attendance rules — hard roster
## context
Four colleagues — Ana, Boris, Ceci, and Dmitri — decide whether to attend a conference.

(1) If Ana attends, then Boris does not attend.

(2) If Boris does not attend, then Ceci attends.

(3) If Ceci attends, then Dmitri does not attend — unless Ana also attends, in which case Dmitri is unrestricted.

(4) Dmitri attends.

(5) At most three of the four attend.

(6) If Ana stays away, then Boris attends.

(7) Ceci and Boris never attend together.

(8) It is not the case that nobody from {Ana, Ceci} attends.

Decide whether each claim is true or false.
## statement A
Dmitri attends in every roster consistent with the rules.
## CURRENT explanation A (len=526)
**A.** → True

Rule (4) is an unconditional atomic fact, not an implication:

$$
D=\mathsf{true}
$$

Write the attendance bit explicitly:

$$
D
$$

No later rule ever forces Dmitri out. Rule (3) can constrain Dmitri only when Ceci attends and Ana does not; that branch never opens once Ana is forced in (see letter B). Rules (1), (2), (5), (6), (7), and (8) do not mention Dmitri at all. Therefore every roster consistent with the eight rules contains Dmitri:

$$
D=\mathsf{true}
$$

in every model.

So the statement is True.
## statement B
Ana must attend in every legal roster.
## CURRENT explanation B (len=609)
**B.** → True

Argue by contradiction. Suppose Ana stays away:

$$
\neg A
$$

Rule (6) then forces Boris:

$$
\neg A\Rightarrow B
$$

$$
B
$$

Rule (7) forbids Ceci once Boris is present:

$$
\neg(B\land C)
$$

$$
\neg C
$$

Rule (2) is the implication $\neg B\Rightarrow C$. Its antecedent is false (Boris attends), so (2) does not resurrect Ceci.

Rule (8) demands that at least one of Ana or Ceci attends:

$$
A\lor C
$$

With both $A$ and $C$ false, the disjunction fails:

$$
\neg(A\lor C)
$$

The assumption $\neg A$ is therefore impossible. Ana attends in every legal roster.

So the statement is True.
## statement C
There exists a legal roster in which exactly three people attend.
## CURRENT explanation C (len=637)
**C.** → True

From B, Ana always attends:

$$
A=\mathsf{true}
$$

Rule (1) is $A\Rightarrow\neg B$. With $A$ true this forces

$$
\neg B
$$

Rule (2) with Boris absent forces Ceci:

$$
\neg B\Rightarrow C
$$

$$
C
$$

Because Ana is present, the "unless Ana attends" exception in (3) fires, so Ceci does not force Dmitri out. Rule (4) still requires Dmitri. The resulting roster is

$$
\{A,C,D\}
$$

— exactly three people. Rule (5) allows at most three, so three is admissible. Rule (7) holds because Boris is absent. Rule (8) holds because both Ana and Ceci attend.

Thus a legal three-person roster exists.

So the statement is True.
## statement D
Boris can attend in some legal roster.
## CURRENT explanation D (len=660)
**D.** → False

Ask whether Boris can appear in any roster that obeys all eight rules. From letter B, Ana is present in every legal roster:

$$
A=\mathsf{true}
$$

Rule (1) is the implication

$$
A\Rightarrow\neg B
$$

The antecedent is always true, so modus ponens forces

$$
\neg B
$$

in every model. Write the forced bit explicitly:

$$
B=\mathsf{false}
$$

Suppose for a moment that some model had $B=\mathsf{true}$. Then rule (1) would require $\neg A$, but letter B already showed $\neg A$ collapses via (6), (7), and (8). The contradiction confirms Boris is permanently ejected: there is no legal roster in which he attends.

So the statement is False.
## statement E
If the “unless Ana attends” exception were removed from rule (3), the rules would still admit a solution with Dmitri attending.
## CURRENT explanation E (len=514)
**E.** → False

Remove the Ana-exception from rule (3). The new rule (3′) reads simply

$$
C\Rightarrow\neg D
$$

The earlier forcing still applies. From letter B:

$$
A=\mathsf{true}
$$

From rule (1):

$$
\neg B
$$

From rule (2):

$$
C
$$

Rule (4) still needs

$$
D
$$

But $C$ together with (3′) forces

$$
\neg D
$$

Compare the two requirements on Dmitri:

$$
D
$$

$$
\neg D
$$

Contradiction. The constraint set becomes unsatisfiable. No solution with Dmitri attending remains.

So the statement is False.

========

# 1 DEMO MATH 2.H02 chapter=2 ak=[True, True, True, False, True]
## title
Two-number identity archive — harder chain
## context
An algebra archive stores two nonzero real numbers $p$ and $q$ through four records:

(1) $p^{2}+q^{2}=250$

(2) $pq=75$

(3) $p^{3}+q^{3}=3500$

(4) $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{4}{15}$

The original order was not recorded. Decide whether each statement is true or false.
## statement A
Records (1) and (2) alone already force $(p+q)^{2}=400$, so $|p+q|=20$.
## CURRENT explanation A (len=416)
**A.** → True

Records (1) and (2) alone already determine the squared sum. Expand the binomial:

$$
(p+q)^{2}=p^{2}+2pq+q^{2}=(p^{2}+q^{2})+2pq
$$

Substitute records (1) and (2):

$$
(p+q)^{2}=250+2\cdot 75=250+150=400
$$

Take the nonnegative square root:

$$
|p+q|=\sqrt{400}=20
$$

exactly as claimed. (The signed sum itself may still be $+20$ or $-20$; the absolute value is forced.)

So the statement is True.
## statement B
Records (1) and (2) together with the side condition $p+q>0$ already imply record (3).
## CURRENT explanation B (len=602)
**B.** → True

Start from records (1) and (2) together with the side condition $p+q>0$. Letter A already gives

$$
|p+q|=20
$$

The side condition selects the positive branch:

$$
p+q=20
$$

Apply the standard cube-sum identity:

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

First the inner difference:

$$
250-75=175
$$

Then multiply by the sum, splitting the product:

$$
p^{3}+q^{3}=20\cdot 175
$$

$$
20\cdot 100=2000
$$

$$
20\cdot 75=1500
$$

$$
2000+1500=3500
$$

$$
p^{3}+q^{3}=3500
$$

which is exactly record (3). So (1), (2) and $p+q>0$ already imply (3).

So the statement is True.
## statement C
Records (1), (2) and (4) together force the unordered pair $\{p,q\}=\{5,15\}$.
## CURRENT explanation C (len=494)
**C.** → True

Record (4) forces the sign of the sum. Multiply both sides of $\frac{1}{p}+\frac{1}{q}=\frac{4}{15}$ by $pq=75$:

$$
p+q=\frac{4}{15}\cdot 75=20
$$

matching letter A's $|p+q|=20$. The two numbers are the roots of

$$
t^{2}-20t+75=0
$$

Discriminant:

$$
20^{2}-4\cdot 75=400-300=100
$$

$$
t=\frac{20\pm\sqrt{100}}{2}=\frac{20\pm 10}{2}
$$

so $t=15$ or $t=5$. The unordered pair is $\{5,15\}$, and the reciprocal sum matches record (4) automatically.

So the statement is True.
## statement D
If record (3) were rewritten as $p^{3}+q^{3}=2800$ while (1) and (2) stayed unchanged, the three records could still hold simultaneously for some nonzero reals $p,q$.
## CURRENT explanation D (len=640)
**D.** → False

Keep records (1) and (2) fixed and ask whether the cube sum can be rewritten as $2800$. From those two records alone,

$$
|p+q|=20
$$

Inner piece:

$$
(p^{2}+q^{2})-pq=250-75
$$

$$
250-75=175
$$

The cube-sum identity forces

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

Positive branch:

$$
20\cdot 175=3500
$$

Negative branch:

$$
(-20)\cdot 175=-3500
$$

So the only possible values are

$$
\pm 3500
$$

Compare with the rewritten claim:

$$
3500\neq 2800
$$

$$
-3500\neq 2800
$$

Neither value equals $2800$. The rewritten triple therefore cannot hold for any nonzero reals $p,q$.

So the statement is False.
## statement E
From (1) and (2) alone one obtains $(p-q)^{2}=100$, and if in addition (4) holds then automatically $p^{3}+q^{3}=(p+q)\big((p^{2}+q^{2})-pq\)=3500$.
## CURRENT explanation E (len=433)
**E.** → True

From records (1) and (2) expand the squared difference:

$$
(p-q)^{2}=p^{2}-2pq+q^{2}=250-2\cdot 75=250-150=100
$$

$$
|p-q|=\sqrt{100}=10
$$

as claimed. If in addition record (4) holds, then

$$
p+q=\frac{4}{15}\cdot 75=\frac{300}{15}=20
$$

Cube identity with $p^{2}+q^{2}-pq=250-75=175$:

$$
p^{3}+q^{3}=(p+q)(p^{2}-pq+q^{2})=20\cdot 175=3500
$$

which is exactly the displayed identity.

So the statement is True.

========

# 2 MATH 11.99 chapter=3 ak=[True, False, True, False, False]
## title
Mixed Financial Planning: Annuity Due, Continuous Compounding & Growing Perpetuity
## context
A logistics firm is juggling three separate arrangements. First, a depot lease requires payments of USD 5500 at the BEGINNING of each year as an annuity due for 6 years at 7% interest. Second, the firm separately invests USD 25000 today for 8 years under continuous compounding at a nominal rate of 5.5%. Third, a maintenance reserve is funded as a growing perpetuity that pays USD 2400 at the end of year 1 and then grows at 2% per year forever, discounted at 7%. Decide whether each statement is true or false.
## statement A
The present value of the annuity-due lease payments is approximately USD 28050.
## CURRENT explanation A (len=814)
**A.** → True

Six beginning-of-year payments form an annuity due. The ordinary 6-period annuity factor is shifted forward one period:

$$
PV_{\mathrm{ad}}=5500\cdot\frac{1-(1.07)^{-6}}{0.07}\cdot 1.07
$$

Build $(1.07)^{6}$ step by step:

$$
1.07^{1}=1.07\qquad 1.07\cdot 1.07=1.1449
$$

$$
1.07^{2}=1.1449\qquad 1.1449\cdot 1.07=1.225043
$$

$$
1.07^{3}=1.225043
$$

$$
1.07^{4}=1.31079601
$$

$$
1.07^{5}=1.4025517307
$$

$$
1.07^{6}=1.500730351849
$$

Invert:

$$
(1.07)^{-6}=\frac{1}{1.500730351849}
$$

$$
(1.07)^{-6}\approx 0.66634222
$$

$$
1-0.66634222=0.33365778
$$

$$
\frac{0.33365778}{0.07}=4.76653971
$$

$$
\frac{1-(1.07)^{-6}}{0.07}\approx 4.76654
$$

Multiply by the payment and the due shift:

$$
PV_{\mathrm{ad}}\approx 28051
$$

which rounds to the claimed USD 28050.

So the statement is True.
## statement B
The future value of these 6 annuity-due payments, evaluated at the end of year 6, is approximately USD 50000.
## CURRENT explanation B (len=654)
**B.** → False

Accumulate the same six annuity-due payments to the end of year 6:

$$
FV_{\mathrm{ad}}=5500\cdot\frac{(1.07)^{6}-1}{0.07}\cdot 1.07
$$

From letter A:

$$
(1.07)^{6}=1.500730351849
$$

$$
(1.07)^{6}-1=0.500730351849
$$

$$
\frac{0.500730351849}{0.07}=7.1532907407
$$

$$
\frac{(1.07)^{6}-1}{0.07}\approx 7.15329
$$

Multiply by the payment:

$$
5500\cdot 7.15329=39343.095
$$

Apply the due shift:

$$
39343.095\cdot 1.07=42097.11165
$$

$$
FV_{\mathrm{ad}}\approx 42097
$$

Compare with the claimed USD 50000:

$$
42097\neq 50000
$$

$$
42097\ngtr 50000
$$

About USD 42100 is far from the claimed USD 50000.

So the statement is False.
## statement C
The USD 25000 investment under continuous compounding at a nominal 5.5% rate accumulates, after 8 years, to approximately USD 38820.
## CURRENT explanation C (len=521)
**C.** → True

Continuous compounding at nominal force $0.055$ for $8$ years multiplies the principal by $e^{0.055\cdot 8}$:

$$
0.055\cdot 8=0.44
$$

$$
FV_{\mathrm{cont}}=25000\,e^{0.44}
$$

Expand the exponential series for a check, or use the known value:

$$
e^{0.44}\approx 1.55270722
$$

$$
25000\cdot 1.55=38750
$$

$$
25000\cdot 0.00270722=67.6805
$$

$$
38750+67.6805=38817.6805
$$

$$
FV_{\mathrm{cont}}\approx 38818
$$

which matches the claimed USD 38820 to ordinary exam rounding.

So the statement is True.
## statement D
The growing-perpetuity reserve requires a present value that is LESS than the present value of the 6-year annuity-due lease payments.
## CURRENT explanation D (len=563)
**D.** → False

The growing-perpetuity present value uses the Gordon formula with first payment at the end of year 1:

$$
PV_{\mathrm{perp}}=\frac{2400}{0.07-0.02}
$$

Denominator:

$$
0.07-0.02=0.05
$$

$$
\frac{2400}{0.05}=48000
$$

$$
PV_{\mathrm{perp}}=48000
$$

From letter A, the annuity-due lease PV is about

$$
PV_{\mathrm{ad}}\approx 28051
$$

Compare:

$$
48000-28051=19949
$$

$$
48000>28051
$$

The perpetuity reserve is larger than the lease PV, not less. The claim that the perpetuity PV is less than the lease PV fails.

So the statement is False.
## statement E
Comparing the accumulated continuous-compounding investment after 8 years to the growing-perpetuity present value, the continuous-compounding result is LARGER.
## CURRENT explanation E (len=679)
**E.** → False

Compare the two solved figures from letters C and D side by side.

From the continuous-compounding investment:

$$
e^{0.44}\approx 1.55270722
$$

$$
25000\cdot 1.55270722
$$

$$
38750+67.6805=38817.6805
$$

$$
FV_{\mathrm{cont}}\approx 38818
$$

From the growing perpetuity:

$$
0.07-0.02=0.05\qquad \frac{2400}{0.05}=48000
$$

$$
PV_{\mathrm{perp}}=48000
$$

Difference:

$$
48000-38818=9182
$$

Check the claimed direction “continuous-compounding result is LARGER”:

$$
38818\ngtr 48000
$$

is false, because

$$
38818<48000
$$

The continuous-compounding accumulation is smaller than the perpetuity PV by about USD 9182, not larger.

So the statement is False.

========

# 3 DEMO MATH 4.H02 chapter=4 ak=[False, True, False, False, True]
## title
Five mixed hard equations — no shortcuts
## context
Decide whether each claim is true or false. Five independent mixed equations. The five claims deliberately use different judgment styles — candidate survival, root count, size comparison, threshold, and sign/location — so do not expect the same wording twice.
## statement A
Squaring twice for $\sqrt{3x+7}+\sqrt{x+1}=4$ produces two real candidates, and both of them survive domain checks and back-substitution.
## CURRENT explanation A (len=834)
**A.** → False

Begin with the domain of both radicals: $x\ge -1$. Isolate one square root:

$$
\sqrt{3x+7}=4-\sqrt{x+1}
$$

The right side must stay nonnegative, which requires $x\le 15$. Square once:

$$
3x+7=16-8\sqrt{x+1}+(x+1)
$$

Collect like terms:

$$
2x-10=-8\sqrt{x+1}
$$

Divide by $-2$:

$$
5-x=4\sqrt{x+1}
$$

which forces the additional restriction $x\le 5$. Square again:

$$
(5-x)^{2}=16(x+1)
$$

Expand both sides:

$$
25-10x+x^{2}=16x+16
$$

Move everything to one side:

$$
x^{2}-26x+9=0
$$

Discriminant and roots:

$$
26^{2}-4\cdot 9=676-36=640
$$

$$
x=\frac{26\pm\sqrt{640}}{2}=13\pm 4\sqrt{10}
$$

Two real candidates appear, but only the smaller one lies in $[-1,5]$ and survives back-substitution. The larger candidate is discarded. So it is not true that both candidates survive.

So the statement is False.
## statement B
After discarding the poles $x=1$ and $x=-4$, the equation $\dfrac{x+2}{x-1}+\dfrac{2x-3}{x+4}=\dfrac{3x^{2}+5x-2}{(x-1)(x+4)}$ reduces to a linear condition with exactly one surviving real root.
## CURRENT explanation B (len=764)
**B.** → True

Work on the common domain that excludes the poles

$$
x\neq 1
$$

$$
x\neq -4
$$

Clear the common denominator $(x-1)(x+4)$:

$$
(x+2)(x+4)+(2x-3)(x-1)=3x^{2}+5x-2
$$

Expand the first product:

$$
(x+2)(x+4)=x^{2}+4x+2x+8
$$

$$
x^{2}+6x+8
$$

Expand the second product:

$$
(2x-3)(x-1)=2x\cdot x+2x\cdot(-1)+(-3)\cdot x+(-3)\cdot(-1)
$$

$$
2x^{2}-2x-3x+3
$$

$$
2x^{2}-5x+3
$$

$$
x^{2}+6x+8+2x^{2}-5x+3
$$

$$
3x^{2}+(6-5)x+(8+3)
$$

$$
3x^{2}+x+11
$$

Equate to the right-hand side:

$$
3x^{2}+x+11=3x^{2}+5x-2
$$

$$
x+11=5x-2
$$

Collect $x$-terms:

$$
11+2=5x-x
$$

$$
13=4x\qquad 4x=13
$$

$$
x=\frac{13}{4}\qquad \frac{13}{4}=3.25
$$

Check poles:

$$
3.25\neq 1
$$

$$
3.25\neq -4
$$

Exactly one root survives.

So the statement is True.
## statement C
Every real solution of $|x^{2}-6x+5|=3x-4$ is strictly larger than $3$.
## CURRENT explanation C (len=985)
**C.** → False

An absolute value equals a real expression only when that expression is nonnegative, so require $3x-4\ge 0$, i.e. $x\ge\tfrac{4}{3}$. Split on the sign of $x^{2}-6x+5$.

Case 1 ($x^{2}-6x+5\ge 0$): the equation reads $x^{2}-6x+5=3x-4$, i.e.

$$
x^{2}-9x+9=0
$$

$$
9^{2}-4\cdot 9=81-36=45\qquad x=\frac{9\pm\sqrt{45}}{2}=\frac{9\pm 3\sqrt{5}}{2}
$$

Only $x=\dfrac{9+3\sqrt5}{2}\approx 7.85$ satisfies both $x\ge 5$ (needed for $x^{2}-6x+5\ge0$) and the domain; the other root fails that sign requirement.

Case 2 ($x^{2}-6x+5<0$): the equation reads $-(x^{2}-6x+5)=3x-4$, i.e.

$$
x^{2}-3x+1=0
$$

$$
3^{2}-4\cdot 1=9-4=5\qquad x=\frac{3\pm\sqrt{5}}{2}
$$

Only $x=\dfrac{3+\sqrt5}{2}\approx 2.62$ lies in the required range $1<x<5$ and the domain $x\ge\tfrac{4}{3}$; the other root is below $1$.

The second surviving root is real and domain-legal, yet

$$
2.62<3
$$

so it is not true that every real solution is strictly larger than $3$.

So the statement is False.
## statement D
Every domain-legal real solution of $\log_{2}(x-1)+\log_{2}(x+3)=\log_{2}(3x+5)$ is strictly larger than $4$.
## CURRENT explanation D (len=510)
**D.** → False

Logarithms force a strict domain $x>1$ (and $3x+5>0$, which is automatic once $x>1$). Combine the logs into a single product identity:

$$
(x-1)(x+3)=3x+5
$$

Expand and move terms to one side:

$$
x^{2}-x-8=0
$$

Discriminant and roots:

$$
(-1)^{2}-4\cdot(-8)=1+32=33\qquad x=\frac{1\pm\sqrt{33}}{2}
$$

Only the plus branch is domain-legal:

$$
\frac{1+\sqrt{33}}{2}\approx 3.37
$$

$$
3.37<4
$$

The unique domain-legal solution is therefore not larger than $4$.

So the statement is False.
## statement E
The equation $\sqrt{x+3}+|x-1|=4$ has at least one negative real solution and at least one real solution greater than $2$.
## CURRENT explanation E (len=823)
**E.** → True

Split the absolute value at the kink $x=1$.

For $x\ge 1$: $|x-1|=x-1$, so the equation becomes $\sqrt{x+3}=5-x$, with the extra restriction $x\le 5$. Square:

$$
x+3=(5-x)^{2}
$$

$$
x+3=25-10x+x^{2}
$$

$$
x^{2}-11x+22=0
$$

$$
(-11)^{2}-4\cdot 22=121-88=33\qquad x=\frac{11\pm\sqrt{33}}{2}
$$

Only the minus branch lies in $[1,5]$:

$$
x=\frac{11-\sqrt{33}}{2}
$$

$$
\frac{11-\sqrt{33}}{2}\approx 2.63
$$

$$
2.63>2
$$

For $-3\le x<1$: $|x-1|=1-x$, so the equation becomes $\sqrt{x+3}=3+x$. Square:

$$
x+3=(3+x)^{2}
$$

$$
x+3=9+6x+x^{2}
$$

$$
x^{2}+5x+6=0
$$

$$
(x+2)(x+3)=0
$$

$$
x=-2
$$

$$
x=-3
$$

Both are negative and both satisfy $3+x\ge 0$, so both survive back-substitution. So there is at least one negative solution and at least one solution greater than $2$.

So the statement is True.

========

# 4 DEMO MATH 5.H01 chapter=5 ak=[True, True, True, True, False]
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
## CURRENT explanation A (len=310)
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
## CURRENT explanation B (len=286)
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
## CURRENT explanation C (len=279)
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
## CURRENT explanation D (len=641)
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
## CURRENT explanation E (len=560)
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

========

# 5 DEMO MATH 6.H02 chapter=6 ak=[True, True, False, True, False]
## title
Hard mixed inequalities — varied interval claims
## context
Decide whether each claim is true or false. All five letters are inequalities, but the claims are worded differently on purpose: absence of counterexamples, existence inside an open interval, existence on a closed interval, containment of a segment, and nonempty intersection.
## statement A
No point of the interval $[1,4]$ violates $|x^{2}-5x+4|+|2x-3|\le x+6$.
## CURRENT explanation A (len=894)
**A.** → True

The claim is a universal "no counterexample" statement on the closed interval $[1,4]$. Critical points of the absolute expressions are $x=1$, $x=4$ and $x=\tfrac{3}{2}$.

On $[1,\tfrac{3}{2}]$: $x^{2}-5x+4\le 0$ and $2x-3\le 0$, so the inequality reads

$$
-(x^{2}-5x+4)+(3-2x)\le x+6
$$

Expand and rearrange:

$$
-x^{2}+3x-1\le x+6\qquad\Rightarrow\qquad 0\le x^{2}-2x+7
$$

Discriminant of $x^{2}-2x+7$:

$$
(-2)^{2}-4\cdot 7=4-28=-24<0
$$

so the right side is always positive; the inequality holds identically on this piece.

On $[\tfrac{3}{2},4]$: $x^{2}-5x+4\le 0$ and $2x-3\ge 0$, so

$$
-(x^{2}-5x+4)+(2x-3)\le x+6
$$

$$
-x^{2}+7x-7\le x+6\qquad\Rightarrow\qquad 0\le x^{2}-6x+13
$$

Discriminant of $x^{2}-6x+13$:

$$
(-6)^{2}-4\cdot 13=36-52=-16<0
$$

so this piece likewise holds identically. Hence no point of $[1,4]$ is a counterexample.

So the statement is True.
## statement B
The inequality $\sqrt{2x+5}+|x-2|\le 4$ admits at least one solution in the open interval $(1,2)$.
## CURRENT explanation B (len=512)
**B.** → True

The claim only asks for existence inside the open interval $(1,2)$. Domain of the radical requires $2x+5\ge 0$, i.e. $x\ge -\tfrac{5}{2}$, which already contains $(1,2)$. Pick the convenient interior test point $x=\tfrac{3}{2}$:

$$
\sqrt{2\cdot\frac{3}{2}+5}+\left|\frac{3}{2}-2\right|=\sqrt{8}+\frac{1}{2}=2\sqrt{2}+\frac{1}{2}
$$

With $\sqrt{2}\approx 1.414$, one has $2\sqrt{2}+\tfrac12\approx 3.328\le 4$. So at least one point of $(1,2)$ satisfies the inequality.

So the statement is True.
## statement C
There exists some $x\in[0,1]$ for which $\dfrac{x^{2}-5x+6}{x^{2}-x-2}\ge 1$.
## CURRENT explanation C (len=557)
**C.** → False

Ask whether any point of the closed interval $[0,1]$ can satisfy the rational inequality. Poles are $x=-1$ and $x=2$. Away from the poles,

$$
\frac{x^{2}-5x+6}{x^{2}-x-2}-1=\frac{(x-2)(x-3)-(x-2)(x+1)}{(x-2)(x+1)}
$$

Factor the numerator:

$$
\frac{-4(x-2)}{(x-2)(x+1)}
$$

Cancel the shared factor:

$$
\frac{-4}{x+1}
$$

so the inequality reduces to $x<-1$. The interval $[0,1]$ lies entirely outside that half-line. Check directly at $x=0$:

$$
\frac{6}{-2}=-3
$$

$$
-3\ngeq 1
$$

No point of $[0,1]$ works.

So the statement is False.
## statement D
The solution set of $\dfrac{|x|}{x+3}+\sqrt{x+1}\le 2$ contains every point of $[0,1]$.
## CURRENT explanation D (len=624)
**D.** → True

The claim asks for containment of the whole segment $[0,1]$ in the solution set. On $[0,1]$ one has $x\ge 0$, so $|x|=x$, and both $x+3>0$ and $x+1\ge 0$. The inequality reads

$$
\frac{x}{x+3}+\sqrt{x+1}\le 2
$$

Each summand is increasing on $[0,1]$, so the left-hand side is maximized at the right endpoint $x=1$:

$$
\frac{1}{4}=0.25
$$

$$
\sqrt{2}\approx 1.414
$$

$$
0.25+1.414=1.664
$$

$$
1.664\le 2
$$

At the left endpoint $x=0$:

$$
0+\sqrt{1}=1
$$

$$
1\le 2
$$

Because the maximum on the segment is already $\le 2$, every point of $[0,1]$ belongs to the solution set.

So the statement is True.
## statement E
The inequality $\dfrac{|2x-5|}{|x+1|}+|x-2|\le 4$ has nonempty intersection with the interval $[-4,-2]$.
## CURRENT explanation E (len=490)
**E.** → False

The claim asks whether the solution set meets $[-4,-2]$. The pole $x=-1$ does not meet that interval, so every point of $[-4,-2]$ is domain-legal. Test the interior point $x=-3$:

$$
\frac{|2(-3)-5|}{|-3+1|}+|-3-2|=\frac{|-11|}{2}+5=\frac{11}{2}+5=10.5
$$

$$
10.5\le 4
$$

is false. The same failure pattern persists throughout $[-4,-2]$ (the expression stays larger than $4$ on that segment). The intersection with $[-4,-2]$ is therefore empty.

So the statement is False.

========

# 6 DEMO MATH 7.H01 chapter=7 ak=[False, True, False, False, True]
## title
Parametric quadratic family — critical cases
## context
For each real parameter $k$, define
$$
g_k(x)=x^{2}-(2k+1)x+(k^{2}-4).
$$
Decide whether each claim about this family is true or false.
## statement A
For every real $k$, the equation $g_k(x)=0$ has two distinct real roots.
## CURRENT explanation A (len=472)
**A.** → False

Two distinct real roots require a strictly positive discriminant. Expand

$$
\Delta=(2k+1)^{2}-4(k^{2}-4)
$$

First square:

$$
(2k+1)^{2}=4k^{2}+4k+1
$$

Then the second term:

$$
4(k^{2}-4)=4k^{2}-16
$$

Subtract:

$$
\Delta=4k^{2}+4k+1-(4k^{2}-16)=4k^{2}+4k+1-4k^{2}+16=4k+17
$$

At $k=-5$:

$$
\Delta=4(-5)+17=-20+17=-3<0
$$

so $g_{-5}$ has no real roots. The claim that every real $k$ yields two distinct real roots fails.

So the statement is False.
## statement B
The axis of symmetry of $y=g_k(x)$ is $x=k+\tfrac12$ for every $k$.
## CURRENT explanation B (len=348)
**B.** → True

For a monic quadratic $x^{2}-Bx+C$, the axis of symmetry is $x=B/2$. Here $B=2k+1$, so

$$
x=\frac{2k+1}{2}=k+\frac{1}{2}
$$

This identity holds for every real parameter $k$; no discriminant restriction appears. Quick checks: at $k=0$ the axis is $x=\tfrac12$; at $k=2$ it is $x=\tfrac52$, matching $B=5$.

So the statement is True.
## statement C
If $k=2$, then the roots are $x=1$ and $x=5$.
## CURRENT explanation C (len=340)
**C.** → False

Substitute $k=2$ into each coefficient. Linear term:

$$
2k+1=2\cdot 2+1=5
$$

Constant term:

$$
k^{2}-4=2^{2}-4=0
$$

The specialised quadratic is therefore

$$
g_2(x)=x^{2}-5x=x(x-5)
$$

Roots $x=0$ or $x=5$. The claim asserts $1$ and $5$; only one of those matches, so the statement is false.

So the statement is False.
## statement D
There exists a real $k$ for which both roots are equal to $0$.
## CURRENT explanation D (len=566)
**D.** → False

A double root at $0$ would require both $g_k(0)=0$ and $g_k'(0)=0$. Constant term:

$$
g_k(0)=k^{2}-4=0\qquad\Rightarrow\qquad k=\pm 2
$$

Differentiate:

$$
g_k'(x)=2x-(2k+1)\qquad\Rightarrow\qquad g_k'(0)=-(2k+1)=0\qquad\Rightarrow\qquad k=-\frac{1}{2}
$$

Check $k=-\tfrac12$ against $k^{2}-4=0$:

$$
\Bigl(-\frac{1}{2}\Bigr)^{2}-4=\frac{1}{4}-4=-\frac{15}{4}\neq 0
$$

Conversely, at $k=2$: $g_2'(0)=-(4+1)=-5\neq 0$. At $k=-2$: $g_{-2}'(0)=-(-4+1)=3\neq 0$. The two conditions are incompatible, so no such $k$ exists.

So the statement is False.
## statement E
The vertex $y$-coordinate equals $-\dfrac{17}{4}$ when $k=0$.
## CURRENT explanation E (len=412)
**E.** → True

For $k=0$ the quadratic is

$$
g_0(x)=x^{2}-x-4
$$

Axis from letter B: $x=\tfrac12$. Evaluate:

$$
g_0\Bigl(\frac{1}{2}\Bigr)=\Bigl(\frac{1}{2}\Bigr)^{2}-\frac{1}{2}-4=\frac{1}{4}-\frac{1}{2}-4=-\frac{17}{4}
$$

Alternatively via the discriminant shortcut $\Delta=4\cdot 0+17=17$:

$$
-\frac{\Delta}{4}=-\frac{17}{4}
$$

which matches the claimed vertex $y$-coordinate.

So the statement is True.

========

# 7 DEMO MATH 8.H01 chapter=8 ak=[True, True, False, True, False]
## title
Courier tariff — affine day/night word problem
## context
A courier charges a daytime base fee of EUR 12 plus EUR 0.8 per kilometre. Night runs use the same kilometre rate but add a flat night surcharge of EUR 5. Let $d>0$ be the distance in kilometres. Decide whether each claim is true or false.
## statement A
The daytime bill for distance $d$ is exactly $12+0.8d$ euros.
## CURRENT explanation A (len=341)
**A.** → True

Daytime tariff has a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$ the kilometre charge is $0.8d$, so

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

Spot-check at $d=10$:

$$
C_{\mathrm{day}}(10)=12+8=20
$$

which matches $12+0.8\cdot 10$. The claimed daytime formula is exact.

So the statement is True.
## statement B
If the same distance were run at night, the night bill would be exactly EUR 5 more than the daytime bill for every $d>0$.
## CURRENT explanation B (len=323)
**B.** → True

Night runs keep the same kilometre rate and add a flat surcharge of EUR $5$:

$$
C_{\mathrm{night}}(d)=C_{\mathrm{day}}(d)+5
$$

$$
C_{\mathrm{night}}(d)=12+0.8d+5=17+0.8d
$$

for every $d>0$. The night bill is therefore exactly EUR $5$ more than the day bill at the same distance.

So the statement is True.
## statement C
There is a distance $d^{*}$ at which a daytime run and a night run would cost the same; solving $12+0.8d=12+0.8d+5$ finds it.
## CURRENT explanation C (len=329)
**C.** → False

Set the daytime and night bills equal:

$$
12+0.8d=12+0.8d+5
$$

Subtract $12+0.8d$ from both sides:

$$
0=5
$$

The identity $0=5$ is absurd, so no real break-even distance $d^{*}$ exists. Parallel affine tariffs with a fixed positive gap never meet, so no break-even distance exists.

So the statement is False.
## statement D
If the firm waived the EUR 12 base on daytime runs only (charging pure $0.8d$), then for a $20$ km daytime job the client would save exactly EUR 12 compared with the original daytime tariff.
## CURRENT explanation D (len=274)
**D.** → True

Original daytime bill at $d=20$:

$$
12+0.8\cdot 20=12+16=28
$$

After waiving the EUR $12$ base, only the kilometre charge $16$ remains. The saving versus the original daytime tariff is

$$
28-16=12
$$

exactly the waived base fee.

So the statement is True.
## statement E
If distance doubled from $10$ km to $20$ km on a daytime run, the bill would also double, because both the base and the kilometre charge scale linearly with $d$.
## CURRENT explanation E (len=483)
**E.** → False

Evaluate the daytime bill at the two distances:

$$
C_{\mathrm{day}}(10)=12+0.8\cdot 10=12+8=20
$$

$$
C_{\mathrm{day}}(20)=12+0.8\cdot 20=12+16=28
$$

$$
\frac{28}{20}=1.4\neq 2
$$

Doubling distance multiplies the bill by $1.4$, not by $2$. The kilometre part scales ($8\to 16$), but the fixed base of $12$ does not. Homogeneity would require $C_{\mathrm{day}}(2d)=2\,C_{\mathrm{day}}(d)$; at $d=10$ that would need $28=40$, which fails.

So the statement is False.

========

# 8 DEMO MATH 9.H01 chapter=9 ak=[True, True, True, False, True]
## title
Cubic over quadratic — limits and roots
## context
Let
$$
r(x)=ax^{3}+bx^{2}+cx+d,\qquad a\neq 0,
$$
be a real cubic, and define
$$
s(x)=\dfrac{r(x)}{x^{2}+4}.
$$
Decide whether each claim is true or false.
## statement A
$\displaystyle\lim_{x\to+\infty}s(x)=+\infty$ whenever $a>0$.
## CURRENT explanation A (len=329)
**A.** → True

Rewrite the rational function by factoring $ax$ out of the numerator:

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

As $x\to+\infty$ the fraction tends to $1$, so

$$
s(x)\sim ax
$$

When $a>0$ this tends to $+\infty$, matching the claim.

So the statement is True.
## statement B
$\displaystyle\lim_{x\to-\infty}r(x)=-\infty$ whenever $a>0$.
## CURRENT explanation B (len=870)
**B.** → True

$$
r(x)=ax^{3}+bx^{2}+cx+d
$$

$$
r(x)=ax^{3}\Bigl(1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}\Bigr)
$$

As $x\to-\infty$:

$$
x\to-\infty
$$

$$
x^{2}=(-|x|)^{2}=|x|^{2}\to+\infty
$$

$$
x^{3}=(-|x|)^{3}=-|x|^{3}\to-\infty
$$

With $a>0$:

$$
a>0
$$

$$
ax^{3}\to-\infty
$$

Each correction term vanishes:

$$
\frac{b}{ax}\to 0
$$

$$
\frac{c}{ax^{2}}\to 0
$$

$$
\frac{d}{ax^{3}}\to 0
$$

so the parenthesis tends to $1$ and

$$
\lim_{x\to-\infty}r(x)=-\infty
$$

Numerical check with $a=3$, $b=c=d=0$ at $x=-10$:

$$
(-10)^{3}=-1000\qquad 3\cdot(-1000)=-3000
$$

$$
r(-10)=-3000
$$

At $x=-100$:

$$
(-100)^{2}=10000\qquad (-100)^{3}=-1000000
$$

$$
3\cdot(-1000000)=-3000000\qquad r(-100)=-3000000
$$

$$
-3000000<-3000
$$

which grows more negative as $x\to-\infty$, consistent with the limit $-\infty$ whenever $a>0$.

So the statement is True.
## statement C
If $r(2)=0$ and $r'(2)=0$, then $(x-2)^{2}$ divides $r(x)$, so $x=2$ is at least a double root.
## CURRENT explanation C (len=891)
**C.** → True

Differentiate the cubic coefficient by coefficient:

$$
r(x)=ax^{3}+bx^{2}+cx+d
$$

$$
\frac{d}{dx}(ax^{3})=3ax^{2}
$$

$$
\frac{d}{dx}(bx^{2})=2bx
$$

$$
\frac{d}{dx}(cx)=c\qquad \frac{d}{dx}(d)=0
$$

$$
r'(x)=3ax^{2}+2bx+c
$$

The hypothesis gives two vanishing conditions at $x=2$:

$$
r(2)=0\qquad r'(2)=0
$$

A standard factorisation fact: if a polynomial and its first derivative both vanish at $\alpha$, then $(x-\alpha)^{2}$ divides the polynomial. Taking $\alpha=2$:

$$
(x-2)^{2}\mid r(x)
$$

Hence $x=2$ is at least a double root.

Concrete illustration with $a=1$, $b=-4$, $c=4$, $d=0$ so $r(x)=x(x-2)^{2}$:

$$
r(x)=x(x^{2}-4x+4)
$$

$$
r(x)=x^{3}-4x^{2}+4x
$$

$$
r'(x)=3x^{2}-8x+4
$$

Evaluate at $x=2$:

$$
r(2)=8-16+8=0
$$

$$
r'(2)=12-16+4=0
$$

and the factor $(x-2)^{2}$ is visible by construction. The claimed implication holds.

So the statement is True.
## statement D
For every choice of $a,b,c,d$ with $a\neq 0$, the horizontal line $y=0$ is a horizontal asymptote of $s$.
## CURRENT explanation D (len=853)
**D.** → False

From the asymptotic rewrite:

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

$$
s(x)\sim ax
$$

Degree comparison:

$$
\deg r=3
$$

$$
\deg(x^{2}+4)=2\qquad 3-2=1
$$

$$
3>2
$$

Because $a\neq 0$:

$$
|a|>0
$$

$$
|ax|\to\infty\qquad\text{as }|x|\to\infty
$$

$$
|s(x)|\to\infty\qquad\text{as }|x|\to\infty
$$

A horizontal asymptote $y=0$ would require

$$
s(x)\to 0
$$

but that contradicts $|s(x)|\to\infty$.

Numerical counter-example with $a=3$, $b=c=d=0$:

$$
s(100)=\frac{3\cdot 100^{3}}{100^{2}+4}
$$

$$
100^{2}=10000\qquad 100^{3}=1000000
$$

$$
10000+4=10004
$$

$$
\frac{3000000}{10004}\approx 299.88
$$

$$
299.88\neq 0
$$

and the values grow without bound as $|x|$ grows. So $y=0$ is not a horizontal asymptote for any coefficients with $a\neq 0$.

So the statement is False.
## statement E
If $a=3$, $b=-6$, $c=0$, $d=0$, then $r(x)=3x^{2}(x-2)$, so $x=0$ is a double root and $x=2$ is a simple root.
## CURRENT explanation E (len=434)
**E.** → True

Substitute $a=3$, $b=-6$, $c=0$, $d=0$:

$$
r(x)=3x^{3}-6x^{2}=3x^{2}(x-2)
$$

Roots from the factorisation: $x=0$ (multiplicity $2$) and $x=2$ (multiplicity $1$). Confirm with the derivative $r'(x)=9x^{2}-12x$:

$$
r'(0)=0\qquad r(0)=0
$$

so multiplicity at least $2$ at $0$. At $x=2$:

$$
r(2)=0\qquad r'(2)=9\cdot 4-12\cdot 2=36-24=12\neq 0
$$

so $x=2$ is a simple root. The claim holds.

So the statement is True.

========

# 9 DEMO MATH 10.H01 chapter=10 ak=[True, False, True, False, False]
## title
Entangled exponential–log pair — hard compare
## context
Define the entangled pair
$$
f(t)=4e^{0.3t},\qquad g(t)=16e^{-0.6t}\qquad(t\in\mathbb{R}),
$$
and the log-gap
$$
h(t)=\ln f(t)-\ln g(t)=\ln\!\bigl(f(t)/g(t)\bigr).
$$
Also write $p(t)=f(t)\,g(t)$. Decide whether each claim is true or false.
## statement A
$f(t)=g(t)$ has the unique real solution $t=\dfrac{1}{0.9}\ln 4=\dfrac{\ln 4}{0.9}$.
## CURRENT explanation A (len=515)
**A.** → True

Set the two trajectories equal:

$$
4e^{0.3t}=16e^{-0.6t}
$$

Divide by $4$, then multiply by $e^{0.6t}$:

$$
e^{0.3t}=4e^{-0.6t}\qquad\Rightarrow\qquad e^{0.9t}=4
$$

$$
t=\frac{\ln 4}{0.9}=\frac{1}{0.9}\ln 4
$$

Numerically, $\ln 4=2\ln 2\approx 1.386294$, so $t^{*}\approx 1.540327$. Uniqueness: $t\mapsto e^{0.9t}$ is strictly increasing. Verify via the ratio:

$$
\frac{f(t^{*})}{g(t^{*})}=\frac{1}{4}e^{0.9t^{*}}=\frac{1}{4}\cdot 4=1
$$

so $f(t^{*})=g(t^{*})$ holds.

So the statement is True.
## statement B
$h(t)=\ln 4+0.9t$ for every real $t$, so $h$ is affine with positive slope $0.9$.
## CURRENT explanation B (len=423)
**B.** → False

Form the ratio $f(t)/g(t)$:

$$
\frac{f(t)}{g(t)}=\frac{4e^{0.3t}}{16e^{-0.6t}}
$$

$$
\frac{4}{16}=\frac14
$$

$$
\frac{f(t)}{g(t)}=\frac14 e^{0.9t}
$$

Take the log:

$$
h(t)=\ln\frac14+0.9t
$$

$$
\ln\frac14=-\ln 4
$$

$$
h(t)=-\ln 4+0.9t
$$

The constant term is $-\ln 4$, not $+\ln 4$. The claimed formula $\ln 4+0.9t$ is therefore wrong (though the slope $0.9$ is correct).

So the statement is False.
## statement C
If $t$ increases by $\dfrac{10}{3}$, then $f$ is multiplied by $e$ and $g$ is multiplied by $e^{-2}$.
## CURRENT explanation C (len=524)
**C.** → True

Compute the two exponent shifts separately:

$$
0.3\cdot\frac{10}{3}=1
$$

$$
-0.6\cdot\frac{10}{3}=-2
$$

Apply the exponent law to $f$:

$$
f\Bigl(t+\frac{10}{3}\Bigr)=4e^{0.3t+1}
$$

$$
4e^{0.3t+1}=4e^{0.3t}\cdot e^{1}
$$

$$
4e^{0.3t}\cdot e^{1}=e\cdot f(t)
$$

Apply the exponent law to $g$:

$$
g\Bigl(t+\frac{10}{3}\Bigr)=16e^{-0.6t-2}
$$

$$
16e^{-0.6t-2}=16e^{-0.6t}\cdot e^{-2}
$$

$$
16e^{-0.6t}\cdot e^{-2}=e^{-2}g(t)
$$

So $f$ is multiplied by $e$ and $g$ by $e^{-2}$.

So the statement is True.
## statement D
The product $p(t)=f(t)g(t)$ is minimized over $\mathbb{R}$ at the same $t$ where $f=g$, and that minimum value equals $64$.
## CURRENT explanation D (len=398)
**D.** → False

The product simplifies to a pure exponential:

$$
p(t)=4e^{0.3t}\cdot 16e^{-0.6t}
$$

$$
4\cdot 16=64
$$

$$
p(t)=64e^{-0.3t}
$$

Because the exponent $-0.3t$ is strictly decreasing in $t$, $p$ has no global minimum on $\mathbb{R}$; it decays toward $0$ as $t\to\infty$ instead of attaining a minimum at the crossing point. Both halves of the claim fail.

So the statement is False.
## statement E
Because $f(0)=4<16=g(0)$ and $f$ grows while $g$ decays, one has $f(t)<g(t)$ for every $t>0$.
## CURRENT explanation E (len=414)
**E.** → False

At $t=0$ one does have $f(0)=4<16=g(0)$, and $f$ grows while $g$ decays. But letter A shows they meet at the positive crossing

$$
t^{*}=\frac{\ln 4}{0.9}
$$

$$
t^{*}>0
$$

where $f(t^{*})=g(t^{*})$, and for all $t>t^{*}$ one has $f(t)>g(t)$ because $f$ is increasing and $g$ is decreasing past that point. The claim that $f(t)<g(t)$ for every $t>0$ is therefore false.

So the statement is False.

========

# 10 DEMO MATH 11.H01 chapter=11 ak=[True, False, True, False, False]
## title
Tangled revenue path — marginal analysis
## context
A firm faces inverse demand $P(q)=90-3q$ for $0\le q\le 30$ (price in euros, quantity in thousands of units). Revenue is $R(q)=q\cdot P(q)$. Marginal revenue means $R'(q)$. Decide whether each claim is true or false.
## statement A
$R'(q)=90-6q$, so in particular $R'(4)=66$.
## CURRENT explanation A (len=289)
**A.** → True

Start from the linear demand and form revenue:

$$
P(q)=90-3q
$$

$$
R(q)=q\cdot P(q)=q(90-3q)=90q-3q^{2}
$$

Differentiate term by term:

$$
R'(q)=90-6q
$$

Evaluate at $q=4$:

$$
6\cdot 4=24,\qquad 90-24=66
$$

so $R'(4)=66$, matching the claim.

So the statement is True.
## statement B
Revenue is maximised at the same quantity where $P(q)=0$, i.e. at the choke quantity $q=30$.
## CURRENT explanation B (len=309)
**B.** → False

Maximise $R$ by setting marginal revenue to zero:

$$
90-6q=0\qquad\Rightarrow\qquad q=15
$$

Choke quantity where price vanishes:

$$
90-3q=0\qquad\Rightarrow\qquad q=30
$$

Compare:

$$
15\neq 30
$$

The revenue maximiser is $q=15$, not the choke quantity $q=30$.

So the statement is False.
## statement C
If output rises from $q=4$ to $q=5$, the linear approximation using $R'(4)$ overestimates the true revenue increase $R(5)-R(4)$, because $R$ is a concave quadratic.
## CURRENT explanation C (len=346)
**C.** → True

Compute the true increment $R(5)-R(4)$:

$$
R(5)=90\cdot 5-3\cdot 25=450-75=375
$$

$$
R(4)=90\cdot 4-3\cdot 16=360-48=312
$$

$$
375-312=63
$$

The linear approximation using $R'(4)=66$ predicts

$$
66\cdot 1=66
$$

Because $R''(q)=-6<0$, the graph is concave and the tangent overestimates:

$$
66>63
$$

So the statement is True.
## statement D
At the quantity that maximises $R$, price equals marginal revenue.
## CURRENT explanation D (len=300)
**D.** → False

From letter B the revenue maximiser is $q=15$. Marginal revenue there is zero:

$$
R'(15)=90-6\cdot 15=90-90=0
$$

while price is still positive:

$$
P(15)=90-3\cdot 15=90-45=45
$$

$$
45\neq 0
$$

Price does not equal marginal revenue at the revenue peak.

So the statement is False.
## statement E
Cutting price enough to raise quantity from $q=16$ to $q=17$ must raise revenue, because more units are sold.
## CURRENT explanation E (len=324)
**E.** → False

Past the revenue peak $q=15$, marginal revenue is already negative. At $q=16$:

$$
R'(16)=90-6\cdot 16=90-96=-6
$$

$$
-6<0
$$

Moving from $q=16$ to $q=17$ therefore lowers revenue even though more units are sold. Selling more does not raise revenue on the declining side of $R$.

So the statement is False.

========

# 11 MATH 12.187 chapter=12 ak=[True, True, False, True, True]
## title
A Positive Test in a Deer Population
## context
In a wild deer population, 60% are Subspecies A, 25% are Subspecies B, and 15% are Subspecies C. A certain prion disease is present in 2% of Subspecies A, 6% of Subspecies B, and 15% of Subspecies C. A field test for the disease has a 90% sensitivity (probability of a positive result if the deer truly has the disease) and a 4% false-positive rate (probability of a positive result if the deer does not have the disease), regardless of subspecies. A randomly tested deer receives a POSITIVE result.
## statement A
The probability that a tested deer receives a positive result is greater than 7%.
## CURRENT explanation A (len=299)
**A.** → True

The overview already recovers the three subspecies contributions to a positive test. Adding them gives the unconditional positive-test probability:

$$
P(T^{+})=0.03432+0.0229+0.02535=0.08257
$$

Compare with the claimed $7\%$ threshold:

$$
0.08257>0.07
$$

So the statement is True.
## statement B
The probability that the deer is Subspecies A AND receives a positive result is greater than 3.4%.
## CURRENT explanation B (len=284)
**B.** → True

The overview already recovers the Subspecies A joint as one of the three summands of $P(T^+)$:

$$
P(S_A\cap T^{+})=0.03432
$$

The claim’s threshold is $3.4\%=0.034$. Compare:

$$
0.03432>0.034
$$

so the joint probability clears the hurdle.

So the statement is True.
## statement C
The probability that the deer is Subspecies A, given a positive result is greater than 45%.
## CURRENT explanation C (len=290)
**C.** → False

Apply Bayes using the overview’s joint and marginal:

$$
P(S_A\mid T^{+})=\frac{0.03432}{0.08257}
$$

$$
\frac{0.03432}{0.08257}\approx 0.4156
$$

$$
0.4156\times 100\%\approx 41.56\%
$$

The claim needs more than $45\%$:

$$
41.56\%\ngtr 45\%
$$

So the statement is False.
## statement D
The probability that a tested deer receives a negative result equals 1 minus the probability that a tested deer receives a positive result.
## CURRENT explanation D (len=405)
**D.** → True

A field test returns either a positive or a negative result; those two outcomes partition the sample space, so $T^{-}$ is the complement of $T^{+}$:

$$
P(T^{-})=1-P(T^{+})
$$

With the recovered $P(T^{+})=0.08257$,

$$
1-0.08257=0.91743
$$

but the complementarity identity itself is what the claim asserts — no independence or prevalence assumption is required.

So the statement is True.
## statement E
The probability that the deer is Subspecies C, given a positive result is greater than the probability that the deer is Subspecies B, given a positive result.
## CURRENT explanation E (len=402)
**E.** → True

The overview recovers both joints as summands of $P(T^+)$:

$$
P(S_C\cap T^{+})=0.02535
$$

$$
P(S_B\cap T^{+})=0.0229
$$

Both posteriors divide by the same marginal $P(T^{+})=0.08257$, so

$$
P(S_C\mid T^{+})=\frac{0.02535}{0.08257},\qquad P(S_B\mid T^{+})=\frac{0.0229}{0.08257}
$$

and the inequality of posteriors reduces to $0.02535>0.0229$, which holds.

So the statement is True.

========

# 12 MATH 13.108 chapter=13 ak=[True, False, True, False, False]
## title
Harbor Foghorn Tests
## context
Harbor staff run 14 independent foghorn tests. The expected number of clear audible tests is 11.2. Evaluate each statement. Mark it TRUE or FALSE.
## statement A
The next test fails with probability 0.2.
## CURRENT explanation A (len=319)
**A.** → True

From the stem mean $E[X]=11.2$ on $n=14$ independent trials, the common success probability is

$$
p=\dfrac{E[X]}{n}=\dfrac{11.2}{14}=0.8
$$

Each trial fails with the complementary probability

$$
1-p=1-0.8=0.2
$$

which is exactly the failure probability stated in the claim.

So the statement is True.
## statement B
The expected number of audible tests in the next 12 tests is 4.8.
## CURRENT explanation B (len=284)
**B.** → False

For a binomial count the mean is the product of the trial count and the success probability. With $n=12$ and the recovered $p=0.8$,

$$
E[X]=np=12\cdot 0.8=9.6
$$

The claim reports $4.8$. Because

$$
9.6\neq 4.8
$$

the statement is false.

So the statement is False.
## statement C
The variance of the number of audible tests out of 50 tests is 8.
## CURRENT explanation C (len=254)
**C.** → True

For a binomial count $X\sim\mathrm{Bin}(n,p)$, the variance formula is $np(1-p)$. Insert $n=50$, $p=0.8$, and $1-p=0.2$:

$$
\mathrm{Var}(X)=50\cdot 0.8\cdot 0.2=8
$$

The variance equals $8$, matching the claim.

So the statement is True.
## statement D
The probability of 3 consecutive audible tests is less than 0.3.
## CURRENT explanation D (len=287)
**D.** → False

Independence means a run of three successes multiplies the same probability on every trial:

$$
p^{3}=(0.8)^{3}
$$

$$
(0.8)^{3}=0.512
$$

Compare with the claimed cutoff $0.3$:

$$
0.512\ge 0.3
$$

The inequality in the claim therefore fails.

So the statement is False.
## statement E
The probability of at most 4 audible tests in the next 6 tests is more than 0.5.
## CURRENT explanation E (len=872)
**E.** → False

Let $X\sim\mathrm{Bin}(6,0.8)$. The event “at most $4$ successes” is

$$
P(X\le 4)=\sum_{x=0}^{4}\binom{6}{x}(0.8)^{x}(0.2)^{6-x}
$$

Term $x=0$:

$$
P(X=0)=\binom{6}{0}(0.8)^{0}(0.2)^{6}=0.000064
$$

Term $x=1$:

$$
\binom{6}{1}=6,\qquad (0.2)^{5}=0.00032
$$

$$
P(X=1)=6\cdot 0.8\cdot 0.00032=0.001536
$$

Term $x=2$:

$$
\binom{6}{2}=15,\qquad (0.8)^{2}=0.64,\qquad (0.2)^{4}=0.0016
$$

$$
P(X=2)=15\cdot 0.64\cdot 0.0016=0.01536
$$

Term $x=3$:

$$
\binom{6}{3}=20,\qquad (0.8)^{3}=0.512,\qquad (0.2)^{3}=0.008
$$

$$
P(X=3)=20\cdot 0.512\cdot 0.008=0.08192
$$

Term $x=4$:

$$
\binom{6}{4}=15,\qquad (0.8)^{4}=0.4096,\qquad (0.2)^{2}=0.04
$$

$$
P(X=4)=15\cdot 0.4096\cdot 0.04=0.24576
$$

Sum:

$$
0.000064+0.001536+0.01536+0.08192+0.24576=0.34464
$$

$$
0.34464<0.5
$$

The probability is below $0.5$, so the claim fails.

So the statement is False.

========
