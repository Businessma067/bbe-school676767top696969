# Chapter 3 — Financial mathematics

Financial mathematics compares money paid or received at different dates. A euro today and a euro in five years are not equivalent, because today's euro can earn interest. This chapter turns that idea into formulas for savings, loans, annuities, mortgages and investment projects.

The chapter starts from zero and keeps the timing visible throughout. Every rate must match its payment period, every cash flow must sit at the correct date, and every comparison must bring alternatives to one common date before deciding which is larger or cheaper.

[[NOTE:Exam note|Across recent BBE years, financial mathematics on the exam has tended to use simpler setups: simple interest, basic compound growth, ordinary present values, and the more standard versions of the formulas in this chapter. The harder constructions below are still worth understanding, but the better exam strategy is to sharpen the core skills first. Master timing, rate conversion, discounting, ordinary annuities, and the plain loan and IRR patterns before trying to cover every advanced variant in the chapter.]]

## Learning objectives

- Distinguish nominal, periodic and effective interest rates.
- Calculate future values under discrete and continuous compounding.
- Solve compound-growth equations for the starting amount, rate or time.
- Discount one or several future cash flows to present value.
- Work with finite and infinite geometric series and test convergence.
- Value ordinary annuities, annuities due, deferred streams and perpetuities.
- Calculate equal loan payments and follow an amortization schedule.
- Compare complete payment plans at one common valuation date.
- Calculate net present value and internal rate of return.
- Recognise when an IRR uniqueness result applies and when it does not.

---

## 3.1 Interest Periods and Effective Rates

### One period at a time

Suppose an amount $S_0$ is invested at a nominal annual rate $r$, with interest added $n$ times per year. The year is divided into $n$ interest periods, so the rate used in one period is

$$
i = \frac{r}{n}.
$$

After $t$ years there have been $nt$ periods. The accumulated amount is

$$
S(t) = S_0\left(1+\frac{r}{n}\right)^{nt}.
$$

The pieces have different jobs:

| Symbol | Meaning |
| --- | --- |
| $S_0$ | principal at time $0$ |
| $r$ | nominal annual rate as a decimal |
| $n$ | number of compounding periods per year |
| $r/n$ | rate per compounding period |
| $nt$ | total number of periods |
| $S(t)$ | balance after $t$ years |

A monthly rate must be paired with a number of months. A quarterly rate must be paired with a number of quarters. Mixing an annual rate with a monthly count is not a small notation error; it changes the answer.

**Example 1.** A print shop deposits \$6,000 at a nominal annual rate of $7.20\%$, compounded monthly.

The monthly rate is

$$
i = \frac{0.072}{12} = 0.006 = 0.60\%.
$$

After one year:

$$
S(1)
= 6,000(1.006)^{12}
\approx 6,446.55.
$$

The account earns about \$446.55 during the year.

### Nominal rate versus effective annual rate

The nominal rate $r$ is the quoted annual rate before within-year compounding is included. The **effective annual rate**, written $R$, is the actual percentage growth over one full year:

$$
R = \left(1+\frac{r}{n}\right)^n - 1.
$$

For the print-shop account,

$$
R = (1.006)^{12}-1 \approx 0.074424 = 7.44\%.
$$

The effective rate exceeds the nominal $7.20\%$ rate by about $0.24$ **percentage points**. That is not a $0.24\%$ relative increase. Percentage points subtract two rates directly.

If interest is compounded annually, $n=1$, so

$$
R = (1+r)^1-1=r.
$$

For a fixed positive nominal rate, increasing the compounding frequency raises the effective rate. The increases become smaller as the frequency gets very large.

### A periodic rate quoted directly

Sometimes the problem gives a monthly rate instead of a nominal annual rate.

**Example 2.** A store card charges $1.75\%$ per month.

The quoted nominal annual rate obtained by multiplying by $12$ is

$$
12(1.75\%)=21.00\%.
$$

The effective annual rate is

$$
R=(1.0175)^{12}-1\approx 0.23143=23.14\%.
$$

An unpaid \$2,000 balance grows to

$$
2,000(1.0175)^{12}\approx 2,462.88.
$$

Multiplying the monthly rate by $12$ gives the nominal quotation, not the true one-year growth.

### Comparing offers

Frequency alone does not decide which offer is better when the nominal rates differ. Convert each offer to an effective rate or calculate each future value over the same horizon.

**Example 3.** Compare:

- Offer I: $6.4\%$ nominal, compounded quarterly;
- Offer II: $6.5\%$ nominal, compounded semi-annually.

The effective rates are

$$
R_{\mathrm{I}}
=\left(1+\frac{0.064}{4}\right)^4-1
\approx 6.56\%,
$$

$$
R_{\mathrm{II}}
=\left(1+\frac{0.065}{2}\right)^2-1
\approx 6.61\%.
$$

Offer II compounds less often but still wins because its higher nominal rate more than offsets the lower frequency.

### Solving backwards

The same growth equation can be rearranged for different unknowns.

For the initial principal:

$$
S_0
=\frac{S(t)}
{\left(1+\frac{r}{n}\right)^{nt}}.
$$

For time:

$$
t
=\frac{\ln\left(S(t)/S_0\right)}
{n\ln\left(1+r/n\right)}.
$$

For a required nominal rate, begin with

$$
\frac{S(t)}{S_0}
=\left(1+\frac{r}{n}\right)^{nt}
$$

and take the $nt$-th root:

$$
r
=n\left[
\left(\frac{S(t)}{S_0}\right)^{1/(nt)}-1
\right].
$$

**Example 4.** At $7.2\%$ nominal compounded monthly, doubling requires

$$
(1.006)^m=2,
$$

where $m$ is the number of months. Therefore

$$
m
=\frac{\ln 2}{\ln(1.006)}
\approx 115.87.
$$

This is about $9.65$ years. Compound growth is exponential, so doubling the rate does not exactly halve the time, and doubling the time does not double the balance.

**Example 5.** A business wants \$80,000 in eight years and can invest \$50,000 today. Interest is compounded quarterly. Find the required nominal annual rate.

There are

$$
nt=4\cdot8=32
$$

quarters, so

$$
80,000
=50,000\left(1+\frac{r}{4}\right)^{32}.
$$

Divide by \$50,000 before taking the root:

$$
1+\frac{r}{4}
=\left(\frac{80,000}{50,000}\right)^{1/32}.
$$

Therefore

$$
r
=4\left[(1.6)^{1/32}-1\right]
\approx0.0592=5.92\%.
$$

The $5.92\%$ is a nominal annual rate. The quarterly rate actually used in the account is about $1.48\%$.

**Example 6.** Two savings accounts are used to grow \$15,000 to \$22,000:

- Account A pays $6.00\%$ nominal, compounded monthly.
- Account B pays $6.15\%$ nominal, compounded quarterly.

For Account A, let $m$ be the number of months:

$$
m
=\frac{\ln(22,000/15,000)}
{\ln(1+0.06/12)}
\approx76.80.
$$

This is about $6.40$ years. For Account B, let $q$ be the number of quarters:

$$
q
=\frac{\ln(22,000/15,000)}
{\ln(1+0.0615/4)}
\approx25.10.
$$

This is about $6.28$ years. Account B reaches the target first even though it compounds less often. The nominal rate and the compounding frequency must be evaluated together.

**Example 7.** A money-market account pays $4.25\%$ nominal, compounded daily using a 365-day year. A retiree deposits \$20,000 for one year.

The daily rate is

$$
i=\frac{0.0425}{365}
\approx0.00011644
=0.011644\%.
$$

There are 365 periods, not 12:

$$
R
=\left(1+\frac{0.0425}{365}\right)^{365}-1
\approx4.34\%.
$$

The year-end balance is approximately \$20,868.27. Daily compounding gives a slightly larger result than monthly compounding at the same nominal rate, but it still remains below the continuous-compounding ceiling.

---

## 3.2 Continuous Compounding

### Growth at every instant

As the number of compounding periods grows without bound,

$$
\left(1+\frac{r}{n}\right)^n \longrightarrow e^r.
$$

Under continuous compounding, an initial amount $S_0$ grows according to

$$
S(t)=S_0e^{rt}.
$$

The one-year growth factor is $e^r$, so the effective annual rate is

$$
R_{\mathrm{cont}}=e^r-1.
$$

Doubling the nominal rate does not double the effective annual rate. At $r=9\%$,

$$
e^{0.09}-1\approx9.42\%,
$$

while at $r=18\%$,

$$
e^{0.18}-1\approx19.72\%.
$$

The relation is exponential:

$$
e^{2r}=(e^r)^2,
$$

not $e^{2r}=2e^r$.

Each additional year multiplies the current balance by the same factor:

$$
S(t+1)=S(t)e^r.
$$

The factor stays constant, but the dollar increase grows because the balance being multiplied becomes larger.

**Example 1.** A bakery deposits \$4,500 at a continuous rate of $5\%$.

$$
S(1)=4,500e^{0.05}\approx 4,730.72.
$$

The first-year interest is

$$
4,730.72-4,500.00=230.72.
$$

Annual compounding at the same nominal rate gives \$4,725.00, so continuous compounding produces \$5.72 more.

### The continuous ceiling

For the **same nominal rate** $r>0$,

$$
\left(1+\frac{r}{n}\right)^n < e^r
$$

for every finite $n$. Continuous compounding is therefore the ceiling obtained by increasing the frequency.

This comparison must keep the nominal rate fixed. A higher nominal rate compounded quarterly can outperform a lower nominal rate compounded continuously. “Continuous always wins” is false when the rates differ.

**Example 2.** At a common nominal rate of $10\%$:

$$
K_{\mathrm{yearly}}=1.10,
$$

$$
K_{\mathrm{semi}}=(1.05)^2=1.1025,
$$

$$
K_{\mathrm{cont}}=e^{0.10}\approx1.105171.
$$

The ordering is yearly $<$ semi-annual $<$ continuous.

**Example 3.** A treasurer invests \$60,000 for two years and compares:

- Bank X: $6.8\%$ continuously;
- Bank Y: $6.9\%$ nominal, compounded monthly;
- Bank Z: $7.0\%$ nominal, compounded quarterly.

The future values are

$$
S_X
=60,000e^{0.068(2)}
\approx68,740.91,
$$

$$
S_Y
=60,000\left(1+\frac{0.069}{12}\right)^{24}
\approx68,851.32,
$$

$$
S_Z
=60,000\left(1+\frac{0.07}{4}\right)^8
\approx68,932.91.
$$

Bank X compounds continuously but finishes last because it has the lowest nominal rate. If all three quoted $7.0\%$, continuous compounding would again produce the largest value. Frequency comparisons are valid only after the nominal-rate difference has been handled.

### Solving for time or rate

From $S(t)=S_0e^{rt}$:

$$
S_0=S(t)e^{-rt},
$$

$$
t=\frac{\ln(S(t)/S_0)}{r},
$$

$$
r=\frac{\ln(S(t)/S_0)}{t}.
$$

To have \$150,000 in five years at a continuous rate of $4.5\%$, the required deposit today is

$$
S_0
=150,000e^{-0.045(5)}
\approx119,777.40.
$$

The negative exponent moves the target backward from year 5 to today.

The time needed to multiply an investment by a factor $M>0$ is

$$
t_M=\frac{\ln M}{r}.
$$

So

$$
t_4=\frac{\ln4}{r}
=\frac{2\ln2}{r}
=2t_2.
$$

Quadrupling takes exactly two doubling times under a constant continuous rate. Tripling does not take three doubling times; it takes $\ln3/\ln2$ doubling times.

### Continuous depreciation

The same exponential law describes decay when the exponent is negative. If an asset loses value continuously at rate $\delta>0$,

$$
v(t)=v_0e^{-\delta t}.
$$

The fraction remaining after $t$ years is $e^{-\delta t}$.

**Example 4.** A courier fleet worth \$60,000 depreciates continuously at $10\%$ per year.

After five years:

$$
v(5)=60,000e^{-0.10(5)}
=60,000e^{-0.5}
\approx36,391.84.
$$

To find when $40\%$ remains:

$$
0.40=e^{-0.10t},
$$

$$
t=\frac{-\ln(0.40)}{0.10}\approx9.16.
$$

The time is about $9.16$ years. The percentage lost is $60\%$, but the equation must use the fraction **remaining**, $0.40$.

If the initial and later values are known, solve the same law for the depreciation rate:

$$
\delta
=\frac{\ln(v_0/v(t))}{t}.
$$

**Example 5.** Equipment falls from \$180,000 to \$95,000 in seven years under continuous depreciation.

$$
\delta
=\frac{\ln(180,000/95,000)}{7}
\approx0.0913=9.13\%.
$$

The logarithm uses initial value divided by later value, so the numerator is positive. Using the reverse ratio would produce a negative depreciation rate.

### Combining continuous rates and phases

Continuous growth rates add in the exponent. If an asset grows at rate $g$ while a continuous fee of rate $f$ is deducted, the net law is

$$
S(t)=S_0e^{(g-f)t}.
$$

If the rate changes between phases, multiply the phase factors:

$$
S
=S_0e^{r_1t_1}e^{r_2t_2}
=S_0e^{r_1t_1+r_2t_2}.
$$

The same result can be written with a time-weighted continuous rate

$$
r_{\mathrm{eff}}
=\frac{r_1t_1+r_2t_2}{t_1+t_2},
$$

so

$$
S=S_0e^{r_{\mathrm{eff}}(t_1+t_2)}.
$$

**Example 6.** Revenue grows at $10\%$ continuously for four years, then at $4\%$ for three years:

$$
S(7)=S_0e^{0.10(4)+0.04(3)}
=S_0e^{0.52}.
$$

The time-weighted continuous rate is

$$
r_{\mathrm{eff}}
=\frac{0.10\cdot4+0.04\cdot3}{7}
\approx0.0743=7.43\%.
$$

Do not replace this by the unweighted average $(10\%+4\%)/2=7\%$. The longer phase must count more.

A continuous management fee works in the same exponent. If an investment earns $7\%$ continuously but charges a continuous fee of $1.2\%$, then its net rate is

$$
0.07-0.012=0.058.
$$

An initial \$100,000 therefore becomes

$$
100,000e^{0.058(6)}
\approx141,623.22
$$

after six years. Subtracting the fee from the final dollar balance would be wrong because the fee reduces growth throughout the whole holding period.

### Crossover between two assets

Suppose

$$
A(t)=A_0e^{gt},
\qquad
B(t)=B_0e^{-\delta t}.
$$

At the crossover, $A(t)=B(t)$:

$$
A_0e^{gt}=B_0e^{-\delta t}.
$$

Hence

$$
t=\frac{\ln(B_0/A_0)}{g+\delta}.
$$

This is the same logarithmic idea as doubling time, now applied to two exponential paths.

**Example 7.** A start-up stake is worth \$50,000 and grows continuously at $4\%$. Factory equipment is worth \$250,000 and depreciates continuously at $12\%$.

At the crossover:

$$
50,000e^{0.04t}
=250,000e^{-0.12t}.
$$

Move both exponential factors to the same side:

$$
e^{0.16t}=5.
$$

Thus

$$
t=\frac{\ln5}{0.16}\approx10.06.
$$

The crossover occurs after about $10.06$ years. The common value is approximately

$$
50,000e^{0.04(\ln5/0.16)}
\approx74,767.44.
$$

The initial gap is fivefold, but the ratio of the two values grows continuously at the combined rate $4\%+12\%=16\%$.

**Example 8.** On \$25,000, compare annual and continuous compounding at the same nominal rate.

At $3\%$ for one year:

$$
S_{\mathrm{cont}}
=25,000e^{0.03}
\approx25,761.36,
$$

$$
S_{\mathrm{annual}}
=25,000(1.03)
=25,750.00.
$$

The gap is only \$11.36. At $15\%$ for one year, the gap grows to

$$
25,000e^{0.15}-25,000(1.15)
\approx295.86.
$$

Keeping the rate at $3\%$ but extending the horizon to eight years gives

$$
25,000e^{0.24}
-25,000(1.03)^8
\approx111.98.
$$

The continuous advantage grows with both the rate and the horizon. It is not a fixed dollar premium.

---

## 3.3 Present Value

### Moving a future payment back to today

Present value answers this question:

> How much money today would grow into a stated future payment?

For an amount $K$ due in $t$ years at an annual rate $r$:

$$
PV=K(1+r)^{-t}
=\frac{K}{(1+r)^t}.
$$

The one-year discount factor is

$$
d=\frac{1}{1+r}.
$$

For continuous compounding:

$$
PV=Ke^{-rt}.
$$

Future value multiplies by a growth factor. Present value divides by the same factor.

**Example 1.** An \$8,000 bonus is due in one year and the annual rate is $5\%$.

$$
d=(1.05)^{-1}\approx0.952381,
$$

$$
PV=8,000(1.05)^{-1}\approx7,619.05.
$$

At a higher rate, today's required amount is lower because less money today can grow into the same \$8,000.

### Annual versus continuous discounting

At the same positive stated rate and horizon, continuous compounding grows money faster. It therefore discounts future money more strongly:

$$
Ke^{-rt}<K(1+r)^{-t}.
$$

**Example 2.** A \$12,000 payment is due in three years and $r=6\%$.

Continuous:

$$
PV_{\mathrm{cont}}
=12,000e^{-0.06(3)}
\approx10,023.24.
$$

Annual:

$$
PV_{\mathrm{annual}}
=12,000(1.06)^{-3}
\approx10,075.43.
$$

The continuous present value is lower, not higher.

The two conventions can be matched by an equivalent annual rate. If continuous discounting at rate $r_c$ is to give the same present value as annual discounting at rate $r_a$, then

$$
1+r_a=e^{r_c},
$$

so

$$
r_a=e^{r_c}-1.
$$

This equivalence does not depend on the payment horizon. The same $r_a$ works for every $t>0$.

### Several payments

Cash flows at different dates cannot be added first and discounted once unless they share the same date. Discount each payment separately, then add:

$$
PV
=\sum_{j=1}^{m}
\frac{K_j}{(1+r)^{t_j}}
$$

under annual compounding, or

$$
PV
=\sum_{j=1}^{m}
K_je^{-rt_j}
$$

under continuous compounding.

**Example 3.** A software company will receive \$40,000 in two years and \$65,000 in five years at $5\%$ annual interest:

$$
PV
=\frac{40,000}{(1.05)^2}
+\frac{65,000}{(1.05)^5}.
$$

Each term carries its own exponent because each payment waits for a different length of time.

**Example 4.** A franchise contract pays \$30,000 in five years and \$55,000 in ten years. The continuous discount rate is $8\%$.

The five-year discount factor is

$$
e^{-0.08(5)}=e^{-0.4}\approx0.67032.
$$

Because ten years is twice five years, its discount factor is the square of the five-year factor:

$$
e^{-0.08(10)}
=e^{-0.8}
=\left(e^{-0.4}\right)^2
\approx0.44933.
$$

Discount the two payments separately:

$$
PV_1
=30,000e^{-0.4}
\approx20,109.60,
$$

$$
PV_2
=55,000e^{-0.8}
\approx24,713.09.
$$

The combined present value is

$$
PV\approx20,109.60+24,713.09
=44,822.69.
$$

Adding \$30,000 and \$55,000 first and applying one discount factor would silently place both payments on the same date.

### Comparing immediate and deferred payments

Bring every option to one common date. If Option A is \$22,000 today and Option B is \$25,500 in three years at $6\%$,

$$
PV_B=\frac{25,500}{(1.06)^3}\approx21,410.29.
$$

Option B has the smaller present value. Comparing \$22,000 directly with \$25,500 ignores three years of opportunity cost.

### Solving for an unknown time or rate

From $PV=K(1+r)^{-t}$:

$$
t
=\frac{\ln(K/PV)}
{\ln(1+r)}.
$$

For continuous discounting:

$$
r=\frac{\ln(K/PV)}{t}.
$$

Always check the direction. If $K>PV$ and $t>0$, the implied positive discount rate should be positive.

**Example 5.** Investors pay \$2,000,000 today for a guaranteed \$3,200,000 payment in $4.5$ years. Under continuous discounting,

$$
2,000,000
=3,200,000e^{-4.5r}.
$$

The observed discount factor is

$$
\frac{2,000,000}{3,200,000}=0.625.
$$

Therefore

$$
r
=-\frac{\ln(0.625)}{4.5}
\approx0.1044=10.44\%.
$$

If the same discount factor had to occur in only three years, the implied rate would be

$$
-\frac{\ln(0.625)}{3}
\approx15.67\%.
$$

The same total discount compressed into less time requires a higher annual rate.

### Solving for a required future payment

Sometimes the present-value target is known and the future face amount is unknown. Under annual compounding,

$$
K=PV(1+r)^t.
$$

Under continuous compounding,

$$
K=PVe^{rt}.
$$

**Example 6.** A company needs receivables with a combined present value of \$100,000. It already has \$42,000 due in three years. A second receivable is due in six years, and the annual rate is $6\%$.

The first receivable contributes

$$
PV_1
=\frac{42,000}{(1.06)^3}
\approx35,264.01.
$$

The second must contribute

$$
PV_2
=100,000-35,264.01
=64,735.99
$$

today. Grow that required present value to year 6:

$$
K_2
=64,735.99(1.06)^6
\approx91,829.24.
$$

This is a two-stage problem: find the missing present value first, then move that amount to its own payment date.

For continuous indifference, suppose a consulting firm can take \$35,000 now or one payment in four years at $6.5\%$. The equivalent future payment is

$$
K
=35,000e^{0.065(4)}
\approx45,392.55.
$$

The future option must be larger than \$35,000 because it compensates for four years of waiting.

### Optimal timing of a growing asset

Some assets become more valuable when held longer, but waiting also discounts the future sale proceeds. If the market value at time $t$ is $P(t)$ and the continuous interest rate is $r$, the present value of selling at time $t$ is

$$
f(t)=P(t)e^{-rt}.
$$

Differentiate:

$$
f'(t)
=e^{-rt}\bigl[P'(t)-rP(t)\bigr].
$$

At an interior optimum $t^*$:

$$
P'(t^*)=rP(t^*).
$$

Equivalently,

$$
\frac{P'(t^*)}{P(t^*)}=r.
$$

The asset should be sold when its proportional growth rate falls to the interest rate. Before that point, waiting grows the asset fast enough to justify the delay. After that point, discounting wins.

The second-order condition for a genuine maximum is

$$
P''(t^*)-rP'(t^*)<0.
$$

**Example 7.** A timber stand has value

$$
P(t)=5,000(t+2)^2
$$

and $r=0.08$. Since

$$
P'(t)=10,000(t+2),
$$

the first-order condition gives

$$
10,000(t+2)
=0.08\left[5,000(t+2)^2\right].
$$

Because $t+2>0$, divide by $5,000(t+2)$:

$$
2=0.08(t+2),
$$

so

$$
t^*=23.
$$

The optimum is $23$ years from now. Finding the date is not the end of the calculation. At that date, the future market value is

$$
P(23)
=5,000(25)^2
=3,125,000.
$$

Bring that amount back 23 years:

$$
f(23)
=3,125,000e^{-0.08(23)}
\approx496,304.46.
$$

The second-order quantity is

$$
P''(23)-0.08P'(23)
=10,000-0.08(250,000)
=-10,000<0,
$$

which confirms a maximum. As a direct check, waiting until year 25 gives

$$
f(25)
=5,000(27)^2e^{-2}
\approx493,297.11,
$$

which is lower than the value at year 23.

For the family $P(t)=A(t+k)^2$, the same calculation gives

$$
t^*=\frac{2}{r}-k.
$$

The scale $A$ cancels. A higher interest rate makes waiting more expensive and moves the optimal time earlier.

### Comparative statics and corner cases

When the optimum changes with $r$, the chapter uses

$$
\frac{dt^*}{dr}
=\frac{P(t^*)}
{P''(t^*)-rP'(t^*)}.
$$

At a genuine maximum the denominator is negative while $P(t^*)>0$, so

$$
\frac{dt^*}{dr}<0.
$$

The derivative is taken with respect to $r$ written as a decimal. A change of one percentage point means $\Delta r=0.01$, not $\Delta r=1$.

**Example 8.** At a forestry cooperative's current optimum,

$$
P(t^*)=520,000,
\qquad
P'(t^*)=46,800,
\qquad
P''(t^*)=3,120,
$$

and $r=0.09$. First verify that the point satisfies the first-order condition:

$$
rP(t^*)
=0.09(520,000)
=46,800
=P'(t^*).
$$

Next calculate the denominator:

$$
P''(t^*)-rP'(t^*)
=3,120-0.09(46,800)
=-1,092.
$$

It is negative, so the second-order condition holds. The sensitivity is

$$
\frac{dt^*}{dr}
=\frac{520,000}{-1,092}
\approx-476.19.
$$

Locally, a one-percentage-point rise in the rate has the approximation

$$
\Delta t^*
\approx-476.19(0.01)
=-4.76.
$$

The local estimate is a reduction of about $4.76$ years. The large number $-476.19$ refers to a full unit change in the decimal rate. Interpreting it as the effect of a one-percentage-point change would exaggerate the response by a factor of $100$.

Not every problem has an interior optimum. If

$$
P(t)=P_0e^{gt},
$$

then

$$
f(t)=P_0e^{(g-r)t}.
$$

- If $g<r$, present value falls with time, so sell immediately.
- If $g>r$, present value keeps rising, so there is no finite maximizing time in this model.
- If $g=r$, present value is constant over time.

Do not force the first-order condition to produce an interior answer when the maximum sits at a boundary or does not occur at a finite time.

**Example 9.** A batch of wine is worth

$$
P(t)=40,000e^{0.05t},
$$

while the continuous discount rate is $8\%$. Its present value is

$$
f(t)
=40,000e^{(0.05-0.08)t}
=40,000e^{-0.03t}.
$$

This falls for every $t>0$, so the best time to sell is the boundary $t^*=0$. Waiting ten years gives only

$$
f(10)
=40,000e^{-0.3}
\approx29,632.73.
$$

If the discount rate were $4\%$ instead, then $f(t)=40,000e^{0.01t}$ would keep rising. There would be no finite maximizing time in this model. A growing market price alone does not prove that waiting raises present value.

---

## 3.4 Geometric Series

### Sequence, term and sum

A geometric sequence starts at $a$ and multiplies by the same quotient $k$ each period:

$$
a,\ ak,\ ak^2,\ \ldots
$$

The $j$-th term, counting the first term as $j=1$, is

$$
a_j=ak^{j-1}.
$$

A **series** adds the terms. The sum of the first $n$ terms is

$$
s_n=a+ak+\cdots+ak^{n-1}.
$$

For $k\ne1$:

$$
s_n
=a\frac{k^n-1}{k-1}
=a\frac{1-k^n}{1-k}.
$$

Both versions are the same formula. Choose the form that keeps signs easy.

If $k=1$, every term equals $a$, so

$$
s_n=an.
$$

The general fraction formula cannot be used at $k=1$ because its denominator would be zero.

**Example 1.** Startup revenue is \$50 million in year 1 and grows $10\%$ per year for five years. Here $a=50$, $k=1.10$, $n=5$.

Year 5 revenue:

$$
a_5=50(1.10)^4\approx73.21.
$$

Five-year total:

$$
s_5
=50\frac{(1.10)^5-1}{1.10-1}
\approx305.26.
$$

The fifth term uses exponent $4$; the five-term sum formula uses exponent $5$.

### Infinite geometric series

When $|k|<1$, the powers $k^n$ approach zero. The finite sum approaches

$$
s_\infty=\frac{a}{1-k}.
$$

If $|k|\ge1$, the infinite geometric series diverges and has no finite sum.

**Example 2.** Monthly profit begins at \$2,000 and halves each month:

$$
2,000+1,000+500+250+\cdots
$$

Here $a=2,000$ and $k=0.5$, so

$$
s_\infty
=\frac{2,000}{1-0.5}
=4,000.
$$

The first four months total \$3,750, which is below the limiting \$4,000 total.

**Example 3.** Deposits begin at \$800 and each later deposit is $90\%$ of the previous one:

$$
s_\infty=\frac{800}{1-0.90}=8,000.
$$

The first ten deposits total

$$
s_{10}
=800\frac{1-(0.90)^{10}}{1-0.90}
\approx5,210.57,
$$

about $65.13\%$ of the infinite total.

### Growth, decline and alternating signs

The quotient contains both size and direction:

- $0<k<1$: positive terms decline;
- $k>1$: positive terms grow;
- $-1<k<0$: signs alternate while magnitudes shrink;
- $k\le-1$: signs alternate without shrinking enough for convergence.

An infinite alternating geometric series converges whenever $|k|<1$. The sum can be smaller than the first positive term because later negative terms partly cancel it.

**Example 4.** A contract produces the alternating stream

$$
4,000-2,000+1,000-500+\cdots.
$$

Here $a=4,000$ and $k=-0.5$. Since $|k|=0.5<1$, the stream converges:

$$
s_\infty
=\frac{4,000}{1-(-0.5)}
=2,666.67.
$$

Using $1-0.5$ in the denominator would ignore the alternating sign and give the wrong result.

### Calendar delay and the series total

The geometric formulas in this section add the listed amounts. If a stream starts in year 6 instead of year 1 but no interest rate is supplied, the delay does not change its nominal total. Discounting belongs only to a separate present-value calculation.

**Example 5.** A charitable trust pays its first \$50,000 grant in year 6. Every later grant is $96\%$ of the previous one.

$$
50,000,\quad
50,000(0.96),\quad
50,000(0.96)^2,\ldots
$$

The nominal total of all grants is

$$
\frac{50,000}{1-0.96}
=1,250,000.
$$

The first 15 grants total

$$
s_{15}
=50,000
\frac{1-(0.96)^{15}}{1-0.96}.
$$

The calendar tells us when the grants occur. The quotient $0.96$ tells us how their sizes change. Neither fact creates a discount rate.

### Match the period unit

The exponent counts terms, not years automatically. Convert the calendar horizon into the same unit used by the quotient.

**Example 6.** A vineyard yields 10,000 lb in the first quarter. Yield then falls by $2\%$ each quarter for five years.

Five years contains

$$
n=5\cdot4=20
$$

quarters. Therefore

$$
s_{20}
=10,000
\frac{1-(0.98)^{20}}{1-0.98}
\approx166,196.01.
$$

The total is about $166,196.01$ lb. The twentieth-quarter yield is a term, not a sum:

$$
a_{20}
=10,000(0.98)^{19}
\approx6,812.33.
$$

This is about $6,812.33$ lb. Using $n=5$ would total only five quarters, or $1.25$ years.

### Finite phase followed by an infinite phase

Treat each phase as its own series. Do not force one quotient and one horizon onto the whole model.

**Example 7.** A technology company projects \$4 million of revenue in year 1, growing by $20\%$ for six years. It then models year-6 revenue as the first term of a separate stream declining by $15\%$ forever.

The six-year phase is finite, so $k=1.20>1$ causes no problem:

$$
s_6
=4\frac{(1.20)^6-1}{1.20-1}
\approx39.72
$$

million dollars. Year-6 revenue is

$$
a_6=4(1.20)^5=9.95328
$$

million dollars. For the separate terminal stream, $k=0.85$, so

$$
s_{\infty,\mathrm{terminal}}
=\frac{9.95328}{1-0.85}
\approx66.36
$$

million dollars. Under this task's nominal-sum model, the combined total is about

$$
39.72+66.36=106.08
$$

million dollars. The finite growth phase may have $k>1$; only the infinite phase needs $|k|<1$.

### Solving a geometric model backwards

The finite-sum formula can also be solved for the first term or for the number of terms.

If $s_n$, $k$ and $n$ are known, then

$$
a
=s_n\frac{k-1}{k^n-1}.
$$

**Example 8.** Restocking costs grow by $15\%$ per month for six months and total \$58,000.

$$
a
=58,000
\frac{1.15-1}{(1.15)^6-1}
\approx6,625.74.
$$

The sixth month's cost is

$$
a_6
=6,625.74(1.15)^5
\approx13,326.73.
$$

The total formula determines the first month. The term formula then determines any particular month.

**Example 9.** A marketing budget starts at \$200,000 and grows by $12\%$ per year. Find the first year in which cumulative spending exceeds \$3,000,000.

Solve the inequality

$$
200,000
\frac{(1.12)^n-1}{0.12}
>3,000,000.
$$

This reduces to

$$
(1.12)^n>2.8,
$$

so

$$
n>\frac{\ln2.8}{\ln1.12}\approx9.09.
$$

The smallest whole number is $n=10$. Checking the neighbouring values confirms the crossing:

$$
s_9\approx2,955,131.26,
$$

$$
s_{10}\approx3,509,747.01.
$$

For a first-crossing question, taking the ceiling is not enough by itself. Check the integer immediately below and the chosen integer.

### Comparing two geometric streams

When revenue and cost grow at different rates, calculate two sums before subtracting. One quotient cannot represent both streams.

**Example 10.** Annual revenue starts at \$150,000 and grows by $1\%$. Annual maintenance starts at \$120,000 and grows by $3\%$. Over 12 years:

$$
s_{\mathrm{revenue}}
=150,000
\frac{(1.01)^{12}-1}{0.01}
\approx1,902,375.45,
$$

$$
s_{\mathrm{cost}}
=120,000
\frac{(1.03)^{12}-1}{0.03}
\approx1,703,043.55.
$$

Therefore cumulative profit is approximately

$$
1,902,375.45-1,703,043.55
=199,331.90.
$$

Revenue begins higher, but cost has the faster growth rate. Extending the horizon can reduce the cumulative advantage even while both totals continue to rise.

Distinguish a term crossover from a cumulative-total crossover. One stream can produce the larger payment in year $8$ while still having the smaller eight-year total. Compare the individual term $a_j$ and the running sum $s_n$ separately.

### Terms approaching zero are not enough

For any convergent series

$$
\sum_{n=1}^{\infty}a_n,
$$

it is necessary that

$$
a_n\longrightarrow0.
$$

But this condition is not sufficient. The harmonic series

$$
1+\frac12+\frac13+\cdots
$$

diverges even though its terms approach zero.

For a $p$-series:

$$
\sum_{n=1}^{\infty}\frac{1}{n^p}
$$

converges if and only if

$$
p>1.
$$

Thus $\sum 1/n$ diverges, while $\sum 1/n^2$ converges. “The payments get smaller” is not a complete convergence test.

---

## 3.5 Annuities, Annuities Due & Perpetuities

### Timing comes first

An **ordinary annuity** pays the same amount $a$ at the **end** of each period. An **annuity due** pays at the **start** of each period.

For $n$ annual ordinary-annuity payments, the timeline is:

| Time | $0$ | $1$ | $2$ | $\cdots$ | $n$ |
| --- | --- | --- | --- | --- | --- |
| Payment | none | $a$ | $a$ | $\cdots$ | $a$ |

For an annuity due:

| Time | $0$ | $1$ | $2$ | $\cdots$ | $n-1$ |
| --- | --- | --- | --- | --- | --- |
| Payment | $a$ | $a$ | $a$ | $\cdots$ | $a$ |

The number of payments is still $n$. Only their dates shift one period earlier.

### One deposit or payment

A present deposit $P$ grows to

$$
F=P(1+r)^n.
$$

A future payment $A$ has present value

$$
P=\frac{A}{(1+r)^n}.
$$

These are the one-cash-flow building blocks for every annuity formula.

### Future value of an ordinary annuity

Suppose $a$ is deposited at the end of every period. Immediately after the $n$-th deposit, the final deposit has earned no interest, the previous one has earned one period, and the first has earned $n-1$ periods:

$$
F_n
=a+a(1+r)+\cdots+a(1+r)^{n-1}.
$$

This is geometric with quotient $1+r$:

$$
F_n
=\frac{a}{r}\left[(1+r)^n-1\right].
$$

**Example 1.** A dental clinic deposits \$2,000 at each year-end for six years at $5\%$:

$$
F_6
=\frac{2,000}{0.05}\left[(1.05)^6-1\right]
\approx13,603.83.
$$

Total deposits are \$12,000, so interest is \$1,603.83.

The formula is directly proportional to $a$. Increasing every deposit by $50\%$ increases the future value by exactly $50\%$. Doubling the number of years does not merely double the future value because earlier deposits keep compounding.

### Present value of an ordinary annuity

Discount every payment to time $0$:

$$
P_n
=\frac{a}{1+r}
+\frac{a}{(1+r)^2}
+\cdots+
\frac{a}{(1+r)^n}.
$$

This geometric sum simplifies to

$$
P_n
=\frac{a}{r}
\left[
1-\frac{1}{(1+r)^n}
\right].
$$

Present and future value are linked by

$$
F_n=P_n(1+r)^n.
$$

So

$$
P_n=\frac{F_n}{(1+r)^n}.
$$

**Example 2.** A retiree withdraws \$2,400 at each year-end for 15 years from an account earning $4.5\%$:

$$
P_{15}
=\frac{2,400}{0.045}
\left[
1-\frac{1}{(1.045)^{15}}
\right]
\approx25,774.91.
$$

Nominal withdrawals total \$36,000, but only \$25,774.91 is needed today because the remaining balance earns interest while withdrawals occur.

### Perpetuities

Let $n\to\infty$ in the ordinary-annuity present-value formula. When $r>0$,

$$
\frac{1}{(1+r)^n}\longrightarrow0,
$$

so a level perpetuity paying $a$ at each period-end has value

$$
P_\infty=\frac{a}{r}.
$$

**Example 3.** A scholarship pays \$5,000 at each year-end forever at $6\%$:

$$
P_\infty=\frac{5,000}{0.06}=83,333.33.
$$

A 20-year version costs less:

$$
P_{20}
=\frac{5,000}{0.06}
\left[
1-\frac{1}{(1.06)^{20}}
\right]
\approx57,349.61.
$$

Extending a finite annuity moves its value toward the perpetuity limit, but each extra distant payment adds less present value.

### Annuities due

Every payment in an annuity due occurs one period earlier than the corresponding ordinary-annuity payment. Each is therefore worth a factor $1+r$ more at the same valuation date:

$$
P_{\mathrm{due}}=P_n(1+r),
$$

$$
F_{\mathrm{due}}=F_n(1+r).
$$

An equivalent present-value form is

$$
P_{\mathrm{due}}=a+P_{n-1}.
$$

The first payment is already at time $0$, and the remaining $n-1$ payments form an ordinary annuity.

**Example 4.** A gym deposits \$3,000 at the start of each year for six years at $5\%$.

The matching ordinary-annuity future value is

$$
F_{\mathrm{ordinary}}
=\frac{3,000}{0.05}
\left[(1.05)^6-1\right]
\approx20,405.74.
$$

Move every deposit one year earlier:

$$
F_{\mathrm{due}}
=20,405.74(1.05)
\approx21,426.03.
$$

The due value is larger by \$1,020.29 because every deposit earns one extra period of interest.

For a loan or purchase price with payments starting immediately, the earlier timing benefits the lender. Holding present value fixed, the required annuity-due payment is therefore lower than the required ordinary-annuity payment.

**Example 5.** A five-year commercial lease requires \$24,000 at the beginning of each year. The annual rate is $6\%$.

First value the matching end-of-year annuity:

$$
P_{\mathrm{ordinary}}
=\frac{24,000}{0.06}
\left[
1-(1.06)^{-5}
\right]
\approx101,096.73.
$$

Then shift every payment one year earlier:

$$
P_{\mathrm{due}}
=101,096.73(1.06)
\approx107,162.53.
$$

The difference is about \$6,065.80. That gap equals one year's interest on the ordinary-annuity present value:

$$
0.06(101,096.73)\approx6,065.80.
$$

### Deferred perpetuities

If the first perpetuity payment occurs later than the ordinary schedule, use two stages:

1. value the perpetuity one period before its first payment;
2. discount that value back to time $0$.

For a perpetuity with first payment $a$ at time $m$:

$$
PV_{m-1}=\frac{a}{r},
$$

then

$$
PV_0
=\frac{a/r}{(1+r)^{m-1}}.
$$

Count the delay from the valuation date to the date at which the standard formula is valid. Most deferred-stream mistakes are off-by-one timing errors.

**Example 6.** An endowed fund will pay \$10,000 forever, with the first payment at the end of year 5. The annual rate is $6\%$.

One period before the first payment, at time $4$, the perpetuity is worth

$$
PV_4
=\frac{10,000}{0.06}
=166,666.67.
$$

Now discount that single time-4 value back four years:

$$
PV_0
=\frac{166,666.67}{(1.06)^4}
\approx132,015.61.
$$

Discounting for five years would be an off-by-one error. The perpetuity formula already values the stream one period before its first payment.

### Growing perpetuities

If the next payment is $a_1$ and later payments grow forever at constant rate $g$, with required return $r>g$, the present value is

$$
P=\frac{a_1}{r-g}.
$$

The formula needs the **next** payment and a strictly positive gap $r-g$. If $g\ge r$, the model breaks and the formula cannot be used.

If a just-paid dividend $D_0$ grows at rate $g$, then

$$
D_1=D_0(1+g),
$$

and the Gordon stock formula is

$$
P=\frac{D_1}{r-g}=\frac{D_0(1+g)}{r-g}.
$$

**Example 7.** A rental property pays \$24,000 at the end of year 1 and then grows at $2.5\%$ forever. The required return is $8\%$:

$$
P=\frac{24,000}{0.08-0.025}=436,363.64.
$$

Without growth the same first payment would be worth only

$$
\frac{24,000}{0.08}=300,000.
$$

Growth adds value, but only while $g$ stays below $r$.

**Example 8.** A share has just paid a dividend of \$3.00. Dividends are expected to grow at $3\%$ forever, and investors require $9\%$.

The numerator must be next year's dividend:

$$
D_1=3.00(1.03)=3.09.
$$

Therefore

$$
P
=\frac{3.09}{0.09-0.03}
=51.50.
$$

Using $D_0=3.00$ directly would value the share at \$50.00 and understate it. The formula starts with the first future payment, not the payment that has already occurred.

### Comparing payment streams

Never choose a plan from its nominal total alone. Calculate each plan's present value at the same interest rate.

**Example 9.** Machinery costs either \$18,000 today or \$2,500 at each year-end for nine years at $7\%$.

The instalment plan has present value

$$
P_9
=\frac{2,500}{0.07}
\left[
1-\frac{1}{(1.07)^9}
\right]
\approx16,288.08.
$$

Its nominal total is \$22,500, but its present-value cost is below \$18,000 because most payments occur later.

**Example 10.** A company compares two contribution plans over nine years:

- Plan A invests \$75,000 immediately at a continuous rate of $6.25\%$.
- Plan B contributes the same nominal total through nine equal year-end payments of \$8,333.33 into an account earning $6.25\%$ annually.

Plan A grows for the full nine years:

$$
F_A
=75,000e^{0.0625(9)}
\approx131,629.13.
$$

For Plan B, the last contribution earns no interest before the comparison date and each earlier contribution earns for a different number of years:

$$
F_B
=8,333.33
\frac{(1.0625)^9-1}{0.0625}
\approx96,757.60.
$$

The nominal contributions are equal, but their timing is not. Plan A is much larger because every dollar is invested from the start.

---

## 3.6 Mortgage Repayments

### A loan is an annuity viewed from the other side

Suppose a loan of $K$ is repaid by $n$ equal end-of-period payments of $a$, with periodic interest rate $r$. The loan amount equals the present value of the payment stream:

$$
K
=\frac{a}{r}
\left[
1-(1+r)^{-n}
\right].
$$

Solving for the payment:

$$
a
=\frac{rK}
{1-(1+r)^{-n}}.
$$

The rate $r$ must be the rate **per payment period**. Let $y$ be the loan term in years. For monthly payments under a nominal annual rate $j$ compounded monthly:

$$
r=\frac{j}{12},
\qquad
n=12y.
$$

**Example 1.** A distributor borrows \$60,000, repaid by six annual payments at $12\%$:

$$
a
=\frac{0.12(60,000)}
{1-(1.12)^{-6}}
\approx14,593.54.
$$

### Interest and principal inside each payment

Every payment has two parts. Let $I_j$ be the interest in payment $j$, and let $Q_j$ be its principal portion:

$$
I_j
=rB_{j-1},
$$

$$
Q_j
=a-rB_{j-1},
$$

$$
B_j
=B_{j-1}-Q_j,
$$

where $B_{j-1}$ is the balance before payment $j$.

Equivalently:

$$
B_j=B_{j-1}(1+r)-a.
$$

For the \$60,000 loan:

| Year | Opening balance | Interest | Principal | Closing balance |
| --- | ---: | ---: | ---: | ---: |
| 1 | \$60,000.00 | \$7,200.00 | \$7,393.54 | \$52,606.46 |
| 2 | \$52,606.46 | \$6,312.77 | \$8,280.77 | \$44,325.69 |

As the balance falls, interest falls. Because the total payment stays fixed, the principal portion rises.

The principal portions over the whole schedule add to the original loan amount, subject only to small rounding adjustments. Total interest is

$$
na-K.
$$

After $m$ equal payments have been made, $n-m$ payments remain. The outstanding balance is therefore the present value of the remaining annuity:

$$
B_m
=\frac{a}{r}
\left[
1-(1+r)^{-(n-m)}
\right].
$$

This short-cut avoids rebuilding the entire amortization table when only the remaining balance is required.

### Monthly loan example

**Example 2.** Finance \$24,000 for four years at $9\%$ nominal, compounded monthly.

$$
r=\frac{0.09}{12}=0.0075,
\qquad
n=48.
$$

The monthly payment is

$$
a
=\frac{0.0075(24,000)}
{1-(1.0075)^{-48}}
\approx597.24.
$$

The total paid is approximately \$28,667.57, so total interest is approximately \$4,667.57.

Do not compare \$597.24 per month with an annual payment without converting the time unit. Payment amounts from different periods answer different questions.

**Example 3.** A \$200,000 mortgage has a nominal annual rate of $6\%$, compounded monthly, and a 20-year term.

The monthly rate and number of payments are

$$
r=\frac{0.06}{12}=0.005,
\qquad
n=20(12)=240.
$$

The monthly payment is

$$
a
=\frac{0.005(200,000)}
{1-(1.005)^{-240}}
\approx1,432.86.
$$

After 60 payments, 180 payments remain. The outstanding balance is

$$
B_{60}
=\frac{1,432.86}{0.005}
\left[
1-(1.005)^{-180}
\right]
\approx169,799.20.
$$

The borrower has paid about \$85,971.60 during the first five years, but the balance has fallen by only about \$30,200.80. Early payments are interest-heavy because they are charged on a large outstanding balance.

### Payments beginning immediately

If the first payment is immediate, the schedule is an annuity due. The present value is

$$
K
=a+
\frac{a}{r}
\left[
1-(1+r)^{-(n-1)}
\right].
$$

The immediate payment is not discounted. The remaining $n-1$ payments form an ordinary annuity.

Equivalently:

$$
K
=a(1+r)
\frac{1-(1+r)^{-n}}{r}.
$$

For a fixed present value, an immediate-start schedule needs a lower payment than an end-of-period schedule because every payment arrives earlier.

### Fixed payment and unknown number of periods

Sometimes the payment $a$ is given and the number of periods is unknown. The logarithmic formula applies when $a>rK$:

$$
n
\ge
\frac{\ln a-\ln(a-rK)}
{\ln(1+r)}.
$$

Use the smallest integer at least as large as the right-hand side. Unless that expression is already an integer, the final payment is smaller than the regular amount.

If $N$ equal payments of $a$ have already been made and one final payment remains, grow the original loan and subtract the grown payments:

$$
B_N
=K(1+r)^N
-a\frac{(1+r)^N-1}{r}.
$$

The last payment is then $B_N(1+r)$, which settles the remaining balance after one more interest charge.

**Example 4.** A \$35,000 loan at $13\%$ is repaid with fixed annual payments of \$10,000.

$$
\frac{\ln(10,000)-\ln(10,000-0.13\cdot35,000)}
{\ln(1.13)}
\approx4.9663.
$$

Five payments are needed. After four payments of \$10,000, the remaining balance is

$$
B_4
=35,000(1.13)^4
-10,000\frac{(1.13)^4-1}{0.13}
\approx8,568.61.
$$

The fifth payment is

$$
8,568.61(1.13)\approx9,682.53.
$$

### Deposits inside one interest period

If interest is credited annually but deposits arrive during the year, the chapter applies simple interest for the fraction of the year each deposit is actually held.

For a deposit $D$ held for fraction $q$ of a year:

$$
D(1+rq).
$$

**Example 5.** Four \$250 deposits are made at quarter-ends and annual interest is $8\%$. At year-end their combined equivalent is

$$
250\left(1+0.08\cdot\frac34\right)
+250\left(1+0.08\cdot\frac24\right)
+250\left(1+0.08\cdot\frac14\right)
+250.
$$

This simplifies to

$$
250(4+1.5\cdot0.08)=1,030.
$$

The first deposit earns three quarters of a year's interest; the last earns none before the year-end credit date.

If the same quarterly pattern repeats for several years, treat \$1,030 as the year-end annuity payment and compound it with the ordinary-annuity future-value formula. Do not ignore the intra-year interest and simply use \$1,000 as the annual deposit.

### Comparing complete repayment plans

Bring every plan to present value. Include immediate cash portions at full value and discount all later payments.

**Example 6.** A fleet costs \$500,000 cash today or seven payments of \$100,000 starting immediately.

At $10\%$:

$$
PV_B
=100,000+
\frac{100,000}{0.10}
\left[
1-(1.10)^{-6}
\right]
\approx535,526.07.
$$

Cash is cheaper.

At $14\%$:

$$
PV_B\approx488,866.75.
$$

The instalment plan becomes cheaper. A higher discount rate reduces the value of the six delayed payments but does not reduce the immediate \$500,000 price.

---

## 3.7 Internal Rate of Return

### Cash-flow signs and net present value

Write cash flows as

$$
a_0,a_1,\ldots,a_n,
$$

where $a_0$ occurs now, $a_1$ at the end of year 1, and so on. An investment outlay is negative; a return is positive.

At discount rate $r$, net present value is

$$
NPV(r)
=a_0
+\frac{a_1}{1+r}
+\frac{a_2}{(1+r)^2}
+\cdots+
\frac{a_n}{(1+r)^n}.
$$

A positive NPV means the discounted returns exceed the initial outlay at that required rate. A negative NPV means they do not.

### Definition of IRR

The **internal rate of return** is a rate $r^*>-1$ that makes NPV equal to zero:

$$
a_0
+\frac{a_1}{1+r^*}
+\cdots+
\frac{a_n}{(1+r^*)^n}
=0.
$$

At the IRR, the present value of the returns exactly equals the present value of the costs.

### One-period project

Invest $a>0$ now and receive $b>0$ in one year:

$$
-a+\frac{b}{1+r}=0.
$$

Therefore

$$
r=\frac{b}{a}-1.
$$

**Example 1.** A bakery spends \$8,000 on an oven and receives \$9,600 after one year:

$$
r=\frac{9,600}{8,000}-1=0.20=20\%.
$$

At a $15\%$ discount rate:

$$
NPV
=-8,000+\frac{9,600}{1.15}
\approx347.83>0.
$$

At $25\%$:

$$
NPV
=-8,000+\frac{9,600}{1.25}
=-320<0.
$$

For this conventional cash flow, rates below the IRR give positive NPV and rates above it give negative NPV.

### Perpetual and finite returns

If an initial outlay of $K$ is followed by a level payment $a$ forever, the zero-NPV equation is

$$
-K+\frac{a}{r}=0.
$$

Thus

$$
r=\frac{a}{K}.
$$

**Example 2.** A licence costs \$50,000 and pays \$6,000 at each year-end forever:

$$
r=\frac{6,000}{50,000}=0.12=12\%.
$$

If the same project paid \$6,000 only in years 1 and 2, its IRR equation would instead be

$$
-50,000
+\frac{6,000}{1+r}
+\frac{6,000}{(1+r)^2}
=0.
$$

This finite project has an IRR of about $-58.84\%$. That negative rate is mathematically valid because it remains above $-100\%$. Two small payments cannot recover a \$50,000 outlay unless the comparison rate is strongly negative.

### Two-period project and the substitution

For

$$
a_0+\frac{a_1}{1+r}+\frac{a_2}{(1+r)^2}=0,
$$

let

$$
s=(1+r)^{-1}.
$$

Then the IRR equation becomes a quadratic:

$$
a_2s^2+a_1s+a_0=0.
$$

Solve for an admissible $s>0$, then recover

$$
r=\frac1s-1.
$$

**Example 3.** A logistics company spends \$12,000 and receives \$7,000 at each of the next two year-ends:

$$
-12,000+7,000s+7,000s^2=0.
$$

Divide by $1,000$:

$$
7s^2+7s-12=0.
$$

The positive solution is

$$
s=\frac{-7+\sqrt{385}}{14}\approx0.90153.
$$

Therefore

$$
r=\frac{1}{0.90153}-1\approx0.10922=10.92\%.
$$

Do not report a quadratic root automatically. The substitution requires $s=1/(1+r)>0$, and the final rate must satisfy $r>-1$.

### Bracketing an IRR

When an exact solution is inconvenient, calculate NPV at two rates.

If

$$
NPV(r_1)>0,
$$

and

$$
NPV(r_2)<0.
$$

and the conventional cash-flow conditions below hold, then the unique IRR lies between $r_1$ and $r_2$.

**Example 4.** A project costs \$45,000 now, has a \$3,000 outflow in year 1, then returns \$28,000 and \$35,000. The NPV is positive at $8\%$ and negative at $12\%$, so a zero lies between those rates. However, the year-1 cash flow is negative, so the chapter's standard uniqueness theorem does not apply. A sign change brackets a root; it does not by itself prove uniqueness.

**Example 5.** A project has cash flows

$$
-40,000,\quad22,000,\quad27,600.
$$

To verify that $15\%$ is the IRR, substitute it into NPV:

$$
NPV(0.15)
=-40,000
+\frac{22,000}{1.15}
+\frac{27,600}{(1.15)^2}.
$$

The two discounted returns are

$$
\frac{22,000}{1.15}
\approx19,130.43,
$$

$$
\frac{27,600}{1.3225}
\approx20,869.57.
$$

Their sum is \$40,000, so $NPV(0.15)=0$. An IRR claim is verified by substitution, not by comparing the undiscounted total alone.

### Uniqueness and positivity theorem

The chapter's clean guarantee applies when

$$
a_0<0
$$

and

$$
a_1,\ldots,a_n>0.
$$

Under this pattern there is a unique IRR $r^*>-1$. The NPV function falls as $r$ rises because every positive future return is discounted more heavily.

The IRR is positive exactly when the undiscounted total is positive:

$$
a_0+a_1+\cdots+a_n>0.
$$

If later cash flows change sign, the theorem's guarantee disappears. The project may still have an IRR, but existence and uniqueness must be checked rather than assumed.

### How changes affect IRR

With future returns fixed:

- reducing the initial outlay raises IRR;
- increasing a positive future return raises IRR.

These effects are nonlinear. Doubling every future return while keeping the outlay fixed does not merely double the IRR.

**Example 6.** A cafe invests \$34,000 and receives \$16,000 after one year and \$24,000 after two. The IRR is about $10.78\%$.

If the outlay falls to \$30,000 while the returns stay fixed, then

$$
-30,000+16,000s+24,000s^2=0
$$

has the valid solution $s=5/6$. Therefore

$$
r=\frac{1}{5/6}-1=0.20=20\%.
$$

The outlay fell by about $11.76\%$, but the IRR did not rise by $11.76\%$. IRR responds nonlinearly because the discount factor appears at different powers for cash flows at different dates.

### Comparing projects

For a one-year project, the IRR comparison is direct.

Project X:

$$
r_X=\frac{17,250}{15,000}-1=15\%.
$$

Project Y:

$$
r_Y=\frac{24,750}{22,000}-1=12.5\%.
$$

Under the chapter's IRR criterion, X is preferred because it has the higher IRR.

Do not confuse a positive NPV at one chosen market rate with the project's IRR. NPV asks whether the project beats a particular required rate. IRR asks which rate makes its own NPV exactly zero.

**Example 7.** A renewable-energy cooperative compares two solar designs.

- Design A costs \$120,000 and returns \$54,000 in year 1 and \$88,000 in year 2.
- Design B costs \$70,000 and returns \$81,200 in year 1.

For Design A, use $s=(1+r)^{-1}$:

$$
88,000s^2+54,000s-120,000=0.
$$

Divide by \$2,000:

$$
44s^2+27s-60=0.
$$

The admissible root is approximately $s=0.90057$, so

$$
r_A
=\frac{1}{0.90057}-1
\approx11.04\%.
$$

Design B is a one-period project:

$$
r_B
=\frac{81,200}{70,000}-1
=16\%.
$$

The IRR criterion therefore prefers Design B. A market-rate NPV check at $13\%$ tells the same story:

$$
NPV_A(0.13)
=-120,000
+\frac{54,000}{1.13}
+\frac{88,000}{(1.13)^2}
\approx-3,295.48,
$$

$$
NPV_B(0.13)
=-70,000
+\frac{81,200}{1.13}
\approx1,858.41.
$$

Design A fails to earn the required $13\%$, while Design B still exceeds it. Comparing projects is stronger when the IRR ranking and an NPV check are both interpreted correctly.

---

## Summary reference

| Task | Method |
| --- | --- |
| Discrete future value | $S(t)=S_0(1+r/n)^{nt}$ |
| Effective annual rate | $R=(1+r/n)^n-1$ |
| Continuous future value | $S(t)=S_0e^{rt}$ |
| Continuous depreciation | $v(t)=v_0e^{-\delta t}$ |
| Annual present value | $PV=K(1+r)^{-t}$ |
| Continuous present value | $PV=Ke^{-rt}$ |
| Finite geometric sum | $s_n=a(k^n-1)/(k-1)$ for $k\ne1$ |
| Infinite geometric sum | $s_\infty=a/(1-k)$ when $|k|<1$ |
| Ordinary-annuity future value | $F_n=(a/r)[(1+r)^n-1]$ |
| Ordinary-annuity present value | $P_n=(a/r)[1-(1+r)^{-n}]$ |
| Annuity due | multiply the matching ordinary value by $1+r$ |
| Level perpetuity | $P=a/r$ |
| Growing perpetuity | $P=a_1/(r-g)$ when $r>g$ |
| Equal loan payment | $a=rK/[1-(1+r)^{-n}]$ |
| Remaining loan balance after $m$ payments | $B_m=(a/r)[1-(1+r)^{-(n-m)}]$ |
| Period interest | rate per period $\times$ opening balance |
| Net present value | $NPV(r)=\sum_{j=0}^{n}a_j/(1+r)^j$ |
| Internal rate of return | solve $NPV(r)=0$ |

### Direction checks

- More compounding at the same positive nominal rate raises future value and EAR.
- Continuous compounding is the ceiling only when the nominal rate is held fixed.
- A higher positive discount rate lowers present value.
- Moving a payment earlier raises its present value.
- An annuity due is worth more than the matching ordinary annuity.
- A growing perpetuity is worth more than the matching level perpetuity only when $0\le g<r$.
- On an amortizing loan, interest falls and principal repayment rises over time.
- For conventional investment cash flows, NPV falls as the discount rate rises.

### Working order

1. Draw or describe the cash-flow dates.
2. Convert the rate to the payment or compounding period.
3. Decide whether the question asks for a value at the present date or a future date.
4. Select the formula only after the timing is clear.
5. Keep full precision during the calculation and round money once at the end.
6. Compare alternatives at the same date and with the same rate convention.
7. Check the direction of the result before accepting it.

**Self-check.** What is the difference between a nominal rate and an effective rate? Why does continuous compounding produce the lowest present value at a shared positive nominal rate? Which exponent belongs on the fifth term of a geometric sequence? Why does $a_n\to0$ not prove that a series converges? Why is an annuity due worth more than an ordinary annuity? How does the interest portion of a mortgage payment change as the balance falls? What cash-flow signs guarantee a unique IRR? Why can a mixed-sign project fall outside that theorem?
