#!/usr/bin/env python3
"""Apply explicit Ch13 Part-3 rewrites for math-11-81..123."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")

# Each value is the full Part 3 body (from **Part 3 through last step), no Answer.
PART3: dict[int, str] = {}

PART3[81] = r"""**Part 3: Solve.**

**1.** $x = 5,000/(1.07)^{3} = 5,000/1.225043 = \\$4,081.49$.

**2.** At the lower rate of $5\\%$, $x = 5,000/(1.05)^{3} = 5,000/1.157625 = \\$4,319.19$, which is HIGHER than $\\$4,081.49$, not lower.

**3.** Interest earned: $5,000.00 - 4,081.49 = \\$918.51$, not $\\$928.51$ as stated.

**4.** Since $x$ is directly proportional to the target amount, doubling it to $\\$10,000$ also gives a proportionally doubled deposit: $x' = 10,000/1.225043 = \\$8,162.98$, exactly double the original $\\$4,081.49$.

**5.** Extending the horizon to $6$ years, $x = 5,000/(1.07)^{6} = 5,000/1.500730 = \\$3,331.71$, which is NOT half of $\\$4,081.49$ (half would be $\\$2,040.75$)."""

PART3[82] = r"""**Part 3: Solve.**

**1.** $F(5) = 6,500 \\times (1.06)^{5} = 6,500 \\times 1.338226 = \\$8,698.47$.

**2.** Interest earned over these first five years: $8,698.47 - 6,500.00 = \\$2,198.47$.

**3.** Over the full ten years instead, $F(10) = 6,500 \\times (1.06)^{10} = 6,500 \\times 1.790847 = \\$11,640.51$, well short of double the $5$-year figure $\\$17,396.94$.

**4.** Interest earned in the SECOND five years: $11,640.51 - 8,698.47 = \\$2,942.04$, larger than the first period's interest of $\\$2,198.47$.

**5.** At the lower rate of $3\\%$, $F(5) = 6,500 \\times (1.03)^{5} = 6,500 \\times 1.159274 = \\$7,535.28$, which is not half of $\\$8,698.47$."""

PART3[83] = r"""**Part 3: Solve.**

**1.** $F_6 = (2,000/0.05)[(1.05)^{6}-1] = 40,000 \\times 0.340096 = \\$13,603.84$.

**2.** Total deposits over six years: $2,000 \\times 6 = \\$12,000.00$, so the interest earned is $13,603.84 - 12,000.00 = \\$1,603.84$.

**3.** The correct relationship is $P_n = F_n/(1+r)^{n}$, giving $P_6 = 13,603.84/1.340096 = \\$10,151.40$, not $\\$18,230.45$ as claimed from multiplying instead of dividing.

**4.** Raising the deposit by $50\\%$, $F_6' = (3,000/0.05)[(1.05)^{6}-1] = 13,603.84 \\times 1.5 = \\$20,405.76$.

**5.** Extending to $12$ years instead, $F_{12} = (2,000/0.05)[(1.05)^{12}-1] = 40,000 \\times 0.795856 = \\$31,834.24$, well above double the $6$-year figure of $\\$27,207.68$."""

PART3[84] = r"""**Part 3: Solve.**

**1.** $F_{10} = (3,500/0.08)[(1.08)^{10}-1] = 43,750 \\times 1.158925 = \\$50,702.97$.

**2.** Total deposits over ten years: $3,500 \\times 10 = \\$35,000.00$, so the interest earned is $50,702.97 - 35,000.00 = \\$15,702.97$.

**3.** Extending to $20$ years, $F_{20} = (3,500/0.08)[(1.08)^{20}-1] = 43,750 \\times 3.660957 = \\$160,166.87$, far MORE than double the $10$-year value of $\\$101,405.94$, not less.

**4.** That interest figure of $\\$15,702.97$ is smaller than the principal of $\\$35,000.00$, so it does not exceed it.

**5.** At the higher rate of $10\\%$, $F_{10} = (3,500/0.10)[(1.10)^{10}-1] = 35,000 \\times 1.593742 = \\$55,780.97$, which does exceed $\\$55,000.00$."""

PART3[85] = r"""**Part 3: Solve.**

**1.** $P_{15} = (2,400/0.045)[1-1/(1.045)^{15}] = 53,333.33 \\times 0.483284 = \\$25,775.15$.

**2.** Total nominal withdrawals over fifteen years: $2,400 \\times 15 = \\$36,000.00$, well above $\\$25,775.15$.

**3.** Extending to $30$ years, $P_{30} = (2,400/0.045)[1-1/(1.045)^{30}] = 53,333.33 \\times 0.732998 = \\$39,091.65$, nowhere near double the $15$-year figure of $\\$51,550.30$.

**4.** The gap between nominal withdrawals and the present value is $36,000.00 - 25,775.15 = \\$10,224.85$, not $\\$11,224.85$ as stated.

**5.** At the higher rate of $6\\%$, $P_{15} = (2,400/0.06)[1-1/(1.06)^{15}] = 40,000 \\times 0.582735 = \\$23,309.40$, LOWER than $\\$25,775.15$, not higher."""

PART3[86] = r"""**Part 3: Solve.**

**1.** $P_{20} = (5,000/0.06)[1-1/(1.06)^{20}] = 83,333.33 \\times 0.688195 = \\$57,349.67$.

**2.** The perpetuity value is $5,000/0.06 = \\$83,333.33$, so the gap is $83,333.33 - 57,349.67 = \\$25,983.66$.

**3.** Dividing, $57,349.67 / 83,333.33 = 0.68820$, about $68.82\\%$, not $72.82\\%$.

**4.** Extending to $40$ years instead, $P_{40} = (5,000/0.06)[1-1/(1.06)^{40}] = 83,333.33 \\times 0.902778 = \\$75,231.50$, which is about $90.28\\%$ of the perpetuity value, not more than $95\\%$.

**5.** As $n$ grows without bound, $(1+r)^{n}\\to\\infty$, so $1/(1+r)^{n}\\to0$ and $P_n\\to a/r = 83,333.33$, confirming the perpetuity limit."""

PART3[87] = r"""**Part 3: Solve.**

**1.** $P_9 = (2,500/0.07)[1-1/(1.07)^{9}] = 35,714.29 \\times 0.456069 = \\$16,288.18$.

**2.** Since Option $1$'s lump sum is $18,000.00$, the savings are $18,000.00 - 16,288.18 = \\$1,711.82$, not $\\$1,811.82$.

**3.** At the lower rate of $4\\%$, $P_9 = (2,500/0.04)[1-1/(1.04)^{9}] = 62,500 \\times 0.297413 = \\$18,588.31$, HIGHER than $\\$16,288.18$, not lower, since a lower rate discounts future payments less.

**4.** Total Option-$2$ payments over nine years: $2,500 \\times 9 = \\$22,500.00$, exceeding Option $1$'s lump sum by $22,500.00 - 18,000.00 = \\$4,500.00$, not $\\$4,600.00$.

**5.** Growing the lump sum forward, $F = 18,000(1.07)^{9} = 18,000 \\times 1.838459 = \\$33,092.26$, which does not exceed $\\$34,000.00$."""

PART3[88] = r"""**Part 3: Solve.**

**1.** $F_A = 12,000(1.06)^{8} = 12,000 \\times 1.593848 = \\$19,126.18$.

**2.** $F_B = (1,400/0.06)[(1.06)^{8}-1] = 23,333.33 \\times 0.593848 = \\$13,856.46$, not $\\$14,856.46$.

**3.** Gap: $19,126.18 - 13,856.46 = \\$5,269.72$, not $\\$5,769.72$.

**4.** Total Strategy-B deposits over the eight years: $1,400 \\times 8 = \\$11,200.00$, LESS than Strategy A's $\\$12,000.00$, not more.

**5.** Raising the deposit amount instead, $F_B' = (1,500/0.06)[(1.06)^{8}-1] = 25,000 \\times 0.593848 = \\$14,846.20$, still well below $\\$19,126.18$."""

PART3[89] = r"""**Part 3: Solve.**

**1.** $F_{\\mathrm{ordinary}} = (3,000/0.05)[(1.05)^{6}-1] = 60,000 \\times 0.340096 = \\$20,405.76$, so the annuity-due value is $F_{\\mathrm{due}} = 20,405.76 \\times 1.05 = \\$21,426.05$.

**2.** Gap: $21,426.05 - 20,405.76 = \\$1,020.29$, not $\\$1,120.29$.

**3.** Extending to $12$ years, $F_{\\mathrm{ordinary}} = (3,000/0.05)[(1.05)^{12}-1] = 60,000 \\times 0.795856 = \\$47,751.36$, so $F_{\\mathrm{due}} = 47,751.36 \\times 1.05 = \\$50,138.93$, well more than double the $6$-year figure of $\\$42,852.10$, not exactly double.

**4.** For any $n$ and $r$, this identity $F_{\\mathrm{due}} = F_{\\mathrm{ordinary}}(1+r)$ always holds, since shifting each payment one period earlier simply multiplies by one extra period of growth."""

PART3[90] = r"""**Part 3: Solve.**

**1.** $P_{\\mathrm{ordinary}} = (24,000/0.06)[1-1/(1.06)^{5}] = 400,000 \\times 0.252742 = \\$101,096.80$, so the annuity-due value is $P_{\\mathrm{due}} = 101,096.80 \\times 1.06 = \\$107,162.61$.

**2.** Gap: $107,162.61 - 101,096.80 = \\$6,065.81$, not $\\$7,065.81$.

**3.** Extending to $10$ years instead, $P_{\\mathrm{ordinary}} = (24,000/0.06)[1-1/(1.06)^{10}] = 400,000 \\times 0.441605 = \\$176,642.00$, so $P_{\\mathrm{due}} = 176,642.00 \\times 1.06 = \\$187,240.52$, less than double the $5$-year figure of $\\$214,325.22$, not exactly double.

**4.** As a check, $a + P_4 = 24,000+(24,000/0.06)[1-1/(1.06)^{4}] = 24,000 + 400,000 \\times 0.207906 = 24,000 + 83,162.40 = \\$107,162.40$, matching $P_{\\mathrm{due}}$ within rounding."""

PART3[91] = r"""**Part 3: Solve.**

**1.** $V = 10,000/0.06 = 166,666.67$ as of the end of year $4$.

**2.** Discounting back, $PV_0 = 166,666.67/(1.06)^{4} = 166,666.67/1.262477 = \\$132,015.61$.

**3.** The immediate, non-deferred perpetuity is worth $10,000/0.06 = \\$166,666.67$ today, HIGHER than $\\$132,015.61$, not lower.

**4.** With the first payment deferred to year $9$ instead, $V$ at year $8$ is still $\\$166,666.67$, so $PV_0' = 166,666.67/(1.06)^{8} = 166,666.67/1.593848 = \\$104,568.80$, well above half of $\\$132,015.61$ (which would be $\\$66,007.81$).

**5.** Since $PV_0/V = 1/(1.06)^{4} = 0.792094$, the ratio is about $79.21\\%$, not $83.21\\%$ as stated."""

PART3[92] = r"""**Part 3: Solve.**

**1.** $P = 4.25/0.07 = 60.71$ (precisely $\\$60.714286$).

**2.** The stock trades at $\\$65.00$, above the $\\$60.71$ fair value.

**3.** At the lower required return of $4\\%$, $P' = 4.25/0.04 = 106.25$, not $\\$116.25$.

**4.** The percentage increase is $(106.25 - 60.714286)/60.714286 = 0.750000$, exactly $75.00\\%$, not more than $75\\%$.

**5.** If instead the dividend were cut by $20\\%$, $P'' = 3.40/0.07 = 48.571429$, about $\\$48.57$, since $48.571429/60.714286 = 0.80$, an exact $20\\%$ drop because fair value is directly proportional to the dividend."""

PART3[93] = r"""**Part 3: Solve.**

**1.** The perpetuity value is $15,000/0.045 = \\$333,333.33$, so the total required today is $50,000.00 + 333,333.33 = \\$383,333.33$.

**2.** At the higher rate of $6\\%$, the perpetuity value falls to $15,000/0.06 = \\$250,000.00$, so the total becomes $50,000.00 + 250,000.00 = \\$300,000.00$.

**3.** The reduction is $383,333.33 - 300,000.00 = \\$83,333.33$, which is $83,333.33/383,333.33 = 0.21739$, about $21.74\\%$ of the original total, more than $20\\%$ but not more than $25\\%$.

**4.** Half of the original combined total is $\\$191,666.67$, and since $\\$250,000.00$ exceeds that, the perpetuity-only requirement at $6\\%$ is LARGER than half of the original total, not smaller."""

PART3[94] = r"""**Part 3: Solve.**

**1.** $P = 24,000/(0.08-0.025) = 24,000/0.055 = \\$436,363.64$.

**2.** Without any growth at all, $P = 24,000/0.08 = 300,000.00$, LOWER than the growing-perpetuity value of $\\$436,363.64$, not higher.

**3.** If growth instead rose to $4\\%$, $P' = 24,000/(0.08-0.04) = 600,000.00$, a large increase but NOT more than double the original $\\$436,363.64$ (double would be $\\$872,727.28$).

**4.** At the lower required return of $6\\%$, $P'' = 24,000/(0.06-0.025) = 24,000/0.035 = \\$685,714.29$, not $\\$715,714.29$.

**5.** As growth approaches the required return, the denominator $(r-g)$ shrinks toward zero and the formula becomes undefined, so growth rates at or above the required return break the model entirely."""

PART3[95] = r"""**Part 3: Solve.**

**1.** $D_1 = 3.00\\times1.03 = 3.09$.

**2.** $P = 3.09/(0.09-0.03) = 3.09/0.06 = \\$51.50$.

**3.** Using the just-paid dividend by mistake instead gives $3.00/0.06 = \\$50.00$, so the correct value understates the wrong one by $51.50 - 50.00 = \\$1.50$, not $\\$2.50$.

**4.** At the higher growth rate of $5\\%$, $D_1' = 3.00\\times1.05 = 3.15$, so $P' = 3.15/(0.09-0.05) = 3.15/0.04 = \\$78.75$, well short of double the original $\\$51.50$ (double would be $\\$103.00$).

**5.** As growth approaches the required return of $9\\%$, the denominator $(r-g)$ shrinks toward zero, driving the result toward infinity, not toward $\\$0.00$."""

PART3[96] = r"""**Part 3: Solve.**

**1.** Deal $1$: $P = 18,000/0.10 = 180,000.00$, a margin of $180,000.00 - 170,000.00 = \\$10,000.00$ over the asking price.

**2.** Deal $2$: $P = 14,000/(0.10-0.04) = 14,000/0.06 = \\$233,333.33$.

**3.** This exceeds the asking price by a wide margin: $233,333.33 - 170,000.00 = \\$63,333.33$.

**4.** Deal $2$'s margin of $\\$63,333.33$ is far larger than Deal $1$'s $\\$10,000.00$, so Deal $2$ offers the bigger cushion, not Deal $1$.

**5.** At the lower growth rate of $1\\%$, $P' = 14,000/(0.10-0.01) = 14,000/0.09 = \\$155,555.56$, below the $\\$170,000.00$ asking price.

**6.** Comparing the two original deals, Deal $1$'s fair value of $\\$180,000.00$ is LESS than Deal $2$'s $\\$233,333.33$, not more."""

PART3[97] = r"""**Part 3: Solve.**

**1.** $S_0 = 250,000e^{-0.66} = 250,000 \\times 0.516855 = \\$129,213.75$.

**2.** Under ordinary annual compounding instead, $S_0 = 250,000/(1.055)^{12} = 250,000/1.901209 = \\$131,495.10$, HIGHER than the continuous figure of $\\$129,213.75$, not lower, since continuous compounding is the most efficient schedule and needs less deposited today.

**3.** The correctly computed gap is $131,495.10 - 129,213.75 = \\$2,281.35$, not $\\$4,280.35$.

**4.** Shortening the horizon to $6$ years, $S_0' = 250,000e^{-0.33} = 250,000 \\times 0.718924 = \\$179,731.00$, far MORE than half of the $12$-year figure of $\\$129,213.75$, not less.

**5.** Since $e^{-0.055}\\approx0.9465$, about $5.35\\%$ of value is lost to discounting each year."""

PART3[98] = r"""**Part 3: Solve.**

**1.** $S_{\\mathrm{cont}} = 75,000 \\times e^{0.5625} = 75,000 \\times 1.755055 = \\$131,629.13$.

**2.** Meanwhile $F_9 = (8,333.33/0.0625)[(1.0625)^{9}-1] = 133,333.33 \\times 0.725682 = \\$96,757.60$, well below the lump-sum figure despite equal total contributions.

**3.** Gap: $131,629.13 - 96,757.60 = \\$34,871.53$, which exceeds $\\$30,000.00$.

**4.** Later deposits in the annuity have progressively less time to earn interest before the horizon ends, unlike the lump sum which compounds for the full nine years.

**5.** Investing the full $\\$75,000$ with discrete annual compounding instead, $S_{\\mathrm{discrete}} = 75,000 \\times (1.0625)^{9} = 75,000 \\times 1.725682 = \\$129,426.15$, which exceeds the annuity's $\\$96,757.60$ but still falls short of the continuous-compounding result of $\\$131,629.13$."""

PART3[99] = r"""**Part 3: Solve.**

**1.** $P_{\\mathrm{ordinary}} = (4,200/0.08)[1-1/(1.08)^{5}] = 52,500 \\times 0.319417 = \\$16,769.39$, so $P_{\\mathrm{due}} = 16,769.39 \\times 1.08 = \\$18,110.94$.

**2.** $F_{\\mathrm{ordinary}} = (4,200/0.08)[(1.08)^{5}-1] = 52,500 \\times 0.469328 = \\$24,639.72$, so $F_{\\mathrm{due}} = 24,639.72 \\times 1.08 = \\$26,610.90$, not $\\$27,610.90$.

**3.** The continuous-compounding investment grows to $S = 20,000 \\times e^{0.42} = 20,000 \\times 1.521962 = \\$30,439.24$, not $\\$31,439.24$.

**4.** The maintenance perpetuity is worth $3,000/0.08 = \\$37,500.00$ today, which exceeds double the annuity-due lease value of $\\$36,221.88$, so it is MORE than double, not less.

**5.** Comparing the two, the perpetuity's $\\$37,500.00$ present value is LARGER than the continuous-compounding result of $\\$30,439.24$, not smaller."""

PART3[100] = r"""**Part 3: Solve.**

**1.** Component $1$: $S = 150,000e^{0.50} = 150,000 \\times 1.648721 = \\$247,308.20$.

**2.** Component $2$: $x = 80,000/(1.06)^{6} = 80,000/1.418519 = \\$56,396.85$, not $\\$57,396.85$.

**3.** Component $3$: $P_{12} = (10,000/0.07)[1-1/(1.07)^{12}] = 142,857.14 \\times 0.556005 = \\$79,429.40$.

**4.** Component $4$: $P = 5,000/(0.07-0.02) = 5,000/0.05 = \\$100,000.00$.

**5.** Summing all four figures gives $150,000.00 + 56,396.85 + 79,429.40 + 100,000.00 = \\$385,826.25$, which is LESS than $\\$500,000.00$, not more."""
