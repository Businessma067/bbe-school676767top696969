/**
 * Chapter 11  -  Financial mathematics (subsections 11.1–11.7).
 * Generated from textbook/output/ch11_raw.json  -  do not hand-edit bulk content.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH11_SUBSECTIONS = [
  { id: "11.1", title: "Interest Periods and Effective Rates" },
  { id: "11.2", title: "Continuous Compounding" },
  { id: "11.3", title: "Present Value" },
  { id: "11.4", title: "Geometric Series" },
  { id: "11.5", title: "Annuities, Annuities Due & Perpetuities" },
  { id: "11.6", title: "Mortgage Repayments" },
  { id: "11.7", title: "Internal Rate of Return" },
] as const;

export const MATH_CH11_FINANCIAL: MathTask[] = [
  {
    id: `math-11-1`,
    case_id: `MATH 11.01`,
    title: `Nominal Rate vs. Effective Rate on a Business Account`,
    subsection: `11.1`,
    context: `A print shop owner deposits \\$6,000 into a business savings account offering a nominal annual rate of 7.20%, compounded monthly.`,
    statements: [
      `The monthly periodic interest rate is 0.60%.`,
      `The effective annual rate is approximately 7.44%.`,
      `A \\$6,000 deposit left for exactly one year would grow to \\$6,446.54.`,
      `If the bank instead compounded the same nominal rate annually, the effective annual rate would be higher than under monthly compounding.`,
      `The effective annual rate exceeds the nominal rate by more than 1.00 percentage point.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The monthly periodic interest rate is 0.60%.**  (true)

A nominal annual rate quoted with monthly compounding is spread evenly over the twelve interest dates, so the periodic rate is the nominal rate divided by the number of periods in a year:

$$i = \\frac{r}{n}$$

The account quotes $r = 7.20\\% = 0.072$ and pays interest $n = 12$ times a year:

$$i = \\frac{0.072}{12}$$

$$i = 0.006$$

Write that decimal as a percentage:

$$i = 0.60\\%$$

The claim names 0.60% and the computed monthly periodic rate is 0.60%, so the statement is true.`,
      `**B) The effective annual rate is approximately 7.44%.**  (true)

The effective annual rate is the single yearly rate that reproduces a full year of compounding at the periodic rate:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

The deposit earns $r = 0.072$ nominal with $n = 12$ monthly periods, so the periodic rate inside the bracket is

$$\\frac{0.072}{12} = 0.006$$

Substitute that growth factor and raise it to the twelfth power:

$$R = (1.006)^{12} - 1$$

$$(1.006)^{12} \\approx 1.074424$$

$$R \\approx 0.074424$$

$$R \\approx 7.44\\%$$

The claim names approximately 7.44%, which is what the calculation gives, so the statement is true.`,
      `**C) A \\$6,000 deposit left for exactly one year would grow to \\$6,446.54.**  (true)

A future value under periodic compounding is the principal multiplied by the growth factor for the whole term:

$$FV = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Here the principal is $P = 6,000$ dollars, the nominal rate is $r = 0.072$, interest is paid $n = 12$ times a year and the term is $t = 1$ year, so the periodic rate is $0.072/12 = 0.006$ and the exponent is $nt = 12$:

$$FV = 6,000 \\times (1.006)^{12}$$

$$(1.006)^{12} \\approx 1.074424$$

$$FV \\approx 6,000 \\times 1.074424$$

$$FV \\approx 6,446.54$$

The claim names \\$6,446.54 and the computed one-year balance is \\$6,446.54, so the statement is true.`,
      `**D) If the bank instead compounded the same nominal rate annually, the effective annual rate would be higher than under monthly compounding.**  (false)

Comparing two compounding schedules means computing the effective annual rate under each one and setting the two numbers side by side. The rule is the same in both cases:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Under the bank's actual monthly schedule, $r = 0.072$ and $n = 12$, so the periodic rate is $0.072/12 = 0.006$:

$$R_{\\mathrm{mon}} = (1.006)^{12} - 1$$

$$(1.006)^{12} \\approx 1.074424$$

$$R_{\\mathrm{mon}} \\approx 0.074424 \\approx 7.44\\%$$

Under annual compounding there is a single interest date per year, so $n = 1$ and the formula collapses back to the nominal rate itself:

$$R_{\\mathrm{ann}} = \\left(1 + \\frac{r}{1}\\right)^{1} - 1 = r$$

Substitute the same nominal quote $r = 0.072$:

$$R_{\\mathrm{ann}} = 0.072 = 7.20\\%$$

Place the two effective rates against each other:

$$7.20\\% < 7.44\\%$$

$$R_{\\mathrm{ann}} - R_{\\mathrm{mon}} \\approx -0.24 \\text{ percentage points}$$

The claim says annual compounding would give the higher effective rate. Annual compounding gives the lower one, so the statement is false.`,
      `**E) The effective annual rate exceeds the nominal rate by more than 1.00 percentage point.**  (false)

The claim measures a gap between two rates, so both rates must be computed before the gap can be checked. The effective annual rate is

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

With $r = 0.072$ and $n = 12$, the monthly periodic rate is $0.072/12 = 0.006$:

$$R = (1.006)^{12} - 1$$

$$(1.006)^{12} \\approx 1.074424$$

$$R \\approx 0.074424 \\approx 7.4424\\%$$

The nominal rate quoted by the bank is

$$r = 7.20\\%$$

Subtract to get the gap between them:

$$\\Delta = 7.4424\\% - 7.20\\%$$

$$\\Delta \\approx 0.24 \\text{ percentage points}$$

Compare that gap with the claimed cutoff:

$$0.24 < 1.00$$

The effective rate sits only about a quarter of a percentage point above the nominal rate, well short of a full point, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A print shop owner deposits \\$6,000 into a business savings account offering a nominal annual rate of 7.20%, compounded monthly.

**Part 1: Setup.**

$P = \\$6,000$

Nominal annual rate $r = 7.20\\% = 0.072$

Compounding frequency $n = 12$ (monthly)

Time = 1 year

**Part 2: Formula.**

Monthly periodic rate $i_m = r/12$

Effective annual rate $R = (1+i_m)^{12} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.

**2.** $R = (1.006)^{12} - 1 \\approx 1.074424 - 1 = 0.074424 \\approx 7.44\\%$.

**3.** $FV = 6,000 \\times 1.074424 = \\$6,446.54$.

**4.** Annual compounding ($n = 1$) gives $R = 7.20\\%$ (the nominal rate), which is lower than $7.44\\%$, not higher.

**5.** Gap: $7.44\\% - 7.20\\% = 0.24$ percentage points, which is far less than $1.00$ point.`,
  },
  {
    id: `math-11-2`,
    case_id: `MATH 11.02`,
    title: `Multi-Year Growth Under Quarterly Compounding`,
    subsection: `11.1`,
    context: `A deposit of \\$6,000 is put into an account earning interest at the annual rate of 8%, with interest paid quarterly. The owner wants to know how much will be in the account after 6 years.`,
    statements: [
      `The quarterly periodic rate is 2.00%.`,
      `The number of quarterly periods over 6 years is 24.`,
      `The balance after 6 years is approximately \\$9,860.00.`,
      `If the deposit were left for only 3 years instead of 6, the future value would be exactly half of the 6-year future value.`,
      `The total percentage growth of the deposit over the 6 years is more than 65%.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The quarterly periodic rate is 2.00%.**  (true)

When a nominal annual rate is paid quarterly, each interest date carries one quarter of the annual quote, so the periodic rate is

$$i = \\frac{r}{n}$$

The account pays $r = 8\\% = 0.08$ with $n = 4$ quarterly periods:

$$i = \\frac{0.08}{4}$$

$$i = 0.02$$

Write that decimal as a percentage:

$$i = 2.00\\%$$

The claim names 2.00% and the computed quarterly rate is 2.00%, so the statement is true.`,
      `**B) The number of quarterly periods over 6 years is 24.**  (true)

The exponent in a compound interest formula counts interest dates rather than years, so it is the number of periods per year multiplied by the number of years:

$$nt = n \\times t$$

Interest on this deposit is paid quarterly, so $n = 4$, and the money stays invested for $t = 6$ years:

$$nt = 4 \\times 6$$

$$nt = 24$$

The claim names 24 compounding periods and the count gives 24, so the statement is true.`,
      `**C) The balance after 6 years is approximately \\$9,860.00.**  (false)

The balance at the end of the term follows the compound future value rule:

$$S(t) = S_0\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Substitute the deposit $S_0 = 6,000$ dollars, the quarterly periodic rate $0.08/4 = 0.02$, and the period count $nt = 4 \\times 6 = 24$:

$$S(6) = 6,000 \\times (1.02)^{24}$$

$$(1.02)^{24} \\approx 1.608437$$

$$S(6) \\approx 6,000 \\times 1.608437$$

$$S(6) \\approx 9,650.62$$

Compare the computed balance with the claimed figure:

$$9,650.62 \\neq 9,860.00$$

The account reaches about \\$9,650.62, which is \\$209.38 below the claimed \\$9,860.00, so the statement is false.`,
      `**D) If the deposit were left for only 3 years instead of 6, the future value would be exactly half of the 6-year future value.**  (false)

Compound interest multiplies the balance by a fixed factor each period, so time enters as an exponent rather than as a multiplier. Both balances come from the same rule:

$$S(t) = S_0\\left(1 + \\frac{r}{n}\\right)^{nt}$$

For the full term, $S_0 = 6,000$ dollars, the quarterly rate is $0.08/4 = 0.02$, and $nt = 4 \\times 6 = 24$:

$$S(6) = 6,000 \\times (1.02)^{24}$$

$$(1.02)^{24} \\approx 1.608437$$

$$S(6) \\approx 9,650.62$$

For the shortened term the only change is the exponent, $nt = 4 \\times 3 = 12$:

$$S(3) = 6,000 \\times (1.02)^{12}$$

$$(1.02)^{12} \\approx 1.268242$$

$$S(3) \\approx 7,609.45$$

Half of the six-year balance would be

$$\\frac{9,650.62}{2} = 4,825.31$$

Set the two figures side by side:

$$7,609.45 \\neq 4,825.31$$

The three-year balance is about \\$2,784.14 above half the six-year balance, so halving the time does not halve the future value and the statement is false.`,
      `**E) The total percentage growth of the deposit over the 6 years is more than 65%.**  (false)

Total percentage growth compares the interest earned with the original principal:

$$g = \\frac{S(6) - S_0}{S_0}$$

The six-year balance comes from the compound future value rule with quarterly rate $0.08/4 = 0.02$ and $nt = 24$:

$$S(6) = 6,000 \\times (1.02)^{24}$$

$$(1.02)^{24} \\approx 1.608437$$

$$S(6) \\approx 9,650.62$$

Subtract the principal to isolate the interest:

$$S(6) - S_0 \\approx 9,650.62 - 6,000 = 3,650.62$$

Divide that interest by the principal:

$$g \\approx \\frac{3,650.62}{6,000} \\approx 0.6084$$

$$g \\approx 60.84\\%$$

Compare with the claimed cutoff:

$$60.84\\% < 65\\%$$

The deposit grows by about 60.84%, roughly 4.16 percentage points short of 65%, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `A deposit of \\$6,000 is put into an account earning interest at the annual rate of 8%, with interest paid quarterly. The owner wants to know how much will be in the account after 6 years.

**Part 1: Setup.**

$S_0 = \\$6,000$

Nominal annual rate $r = 8\\% = 0.08$

Compounding frequency $n = 4$ (quarterly)

Time $t = 6$ years

**Part 2: Formula.**

Periodic rate: $r/n$

Future value $S(t) = S_0(1+r/n)^{nt}$

**Part 3: Solve.**

**1.** Periodic rate: $0.08/4 = 0.02 = 2.00\\%$; $nt = 4 \\times 6 = 24$.

**2.** $S(6) = 6,000 \\times (1.02)^{24} \\approx 6,000 \\times 1.608435 = \\$9,650.61$ (not $\\$9,860.00$).

**3.** Compound growth is exponential, not linear, in time: $(1.02)^{12} \\approx 1.268242$, so the $3$-year value would be about $\\$7,609.45$, which is NOT half of $\\$9,650.61$ (half would be $\\$4,825.31$).

**4.** Total growth: $(9,650.61 - 6,000)/6,000 \\approx 0.6084 = 60.84\\%$, which is not more than $65\\%$.`,
  },
  {
    id: `math-11-3`,
    case_id: `MATH 11.03`,
    title: `Which Savings Offer Is Better?`,
    subsection: `11.1`,
    context: `A saver has \\$10,000 and is comparing two one-year term deposits: Offer (i) 6.4% with interest paid quarterly; Offer (ii) 6.5% with interest paid twice a year.`,
    statements: [
      `The effective annual rate of Offer (i) is approximately 6.55%.`,
      `The effective annual rate of Offer (ii) is approximately 6.61%.`,
      `Offer (ii) is the better choice for the saver.`,
      `Because Offer (i) compounds more frequently, it must have the higher effective rate.`,
      `Depositing \\$10,000 for one year, Offer (ii) would produce more than \\$660 in interest.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The effective annual rate of Offer (i) is approximately 6.55%.**  (true)

An effective annual rate converts a nominal quote plus a compounding frequency into a single yearly yield:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Offer (i) quotes $r = 6.4\\% = 0.064$ with interest paid $n = 4$ times a year, so the quarterly periodic rate is

$$\\frac{0.064}{4} = 0.016$$

Substitute the quarterly growth factor and raise it to the fourth power:

$$R_i = (1.016)^{4} - 1$$

$$(1.016)^{4} \\approx 1.065552$$

$$R_i \\approx 0.065552$$

$$R_i \\approx 6.5552\\%$$

The claim names approximately 6.55%. The computed yield sits within 0.01 percentage points of that figure, so the statement is true.`,
      `**B) The effective annual rate of Offer (ii) is approximately 6.61%.**  (true)

The same effective rate rule applies to the second term deposit:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Offer (ii) quotes $r = 6.5\\% = 0.065$ with interest paid $n = 2$ times a year, so each half year carries

$$\\frac{0.065}{2} = 0.0325$$

Substitute the semi-annual growth factor and square it:

$$R_{ii} = (1.0325)^{2} - 1$$

$$(1.0325)^{2} \\approx 1.066056$$

$$R_{ii} \\approx 0.066056$$

$$R_{ii} \\approx 6.61\\%$$

The claim names approximately 6.61% and the computed effective rate rounds to 6.61%, so the statement is true.`,
      `**C) Offer (ii) is the better choice for the saver.**  (true)

A saver comparing two term deposits should rank them by effective annual rate, since that is the yield actually credited over a full year:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Offer (i) pays 6.4% nominal with $n = 4$, so its quarterly rate is $0.064/4 = 0.016$:

$$R_i = (1.016)^{4} - 1$$

$$(1.016)^{4} \\approx 1.065552$$

$$R_i \\approx 6.5552\\%$$

Offer (ii) pays 6.5% nominal with $n = 2$, so its half-yearly rate is $0.065/2 = 0.0325$:

$$R_{ii} = (1.0325)^{2} - 1$$

$$(1.0325)^{2} \\approx 1.066056$$

$$R_{ii} \\approx 6.6056\\%$$

Compare the two yields:

$$6.6056\\% > 6.5552\\%$$

On the saver's \\$10,000 the advantage is worth

$$10,000 \\times (0.066056 - 0.065552) \\approx 5.04$$

Offer (ii) pays the higher effective rate and about \\$5.04 more interest over the year, so the statement is true.`,
      `**D) Because Offer (i) compounds more frequently, it must have the higher effective rate.**  (false)

Compounding frequency raises the effective rate only when the nominal rate is held fixed. These two offers differ in both frequency and nominal rate, so each effective rate has to be computed on its own:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Offer (i) has the higher frequency, $n = 4$, with $r = 0.064$ and quarterly rate $0.064/4 = 0.016$:

$$R_i = (1.016)^{4} - 1$$

$$(1.016)^{4} \\approx 1.065552$$

$$R_i \\approx 6.5552\\%$$

Offer (ii) has the lower frequency, $n = 2$, but the higher nominal quote $r = 0.065$, giving a half-yearly rate of $0.065/2 = 0.0325$:

$$R_{ii} = (1.0325)^{2} - 1$$

$$(1.0325)^{2} \\approx 1.066056$$

$$R_{ii} \\approx 6.6056\\%$$

Compare the two results:

$$R_i \\approx 6.5552\\% < R_{ii} \\approx 6.6056\\%$$

The more frequently compounded offer ends up with the lower effective rate, because the extra 0.1 percentage points of nominal rate outweigh the extra compounding, so the statement is false.`,
      `**E) Depositing \\$10,000 for one year, Offer (ii) would produce more than \\$660 in interest.**  (true)

Interest earned over one year is the principal multiplied by the effective annual rate:

$$I = P \\times R$$

Offer (ii) pays $r = 6.5\\% = 0.065$ twice a year, so the semi-annual rate is $0.065/2 = 0.0325$ and the effective rate is

$$R_{ii} = (1.0325)^{2} - 1$$

$$(1.0325)^{2} \\approx 1.066056$$

$$R_{ii} \\approx 0.066056$$

Apply that yield to the \\$10,000 deposit:

$$I = 10,000 \\times 0.066056$$

$$I \\approx 660.56$$

Compare with the threshold named in the claim:

$$660.56 > 660$$

The year's interest clears \\$660 by about \\$0.56, so the statement is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `A saver has \\$10,000 and is comparing two one-year term deposits: Offer (i) 6.4% with interest paid quarterly; Offer (ii) 6.5% with interest paid twice a year.

**Part 1: Setup.**

$P = \\$10,000$

Offer (i): $r = 6.4\\%$, $n = 4$ (quarterly)

Offer (ii): $r = 6.5\\%$, $n = 2$ (semi-annual)

Time = 1 year

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Offer (i) periodic rate: $0.064/4 = 0.016$.

**2.** $R_i = (1.016)^{4} - 1 \\approx 1.065533 - 1 = 0.065533 \\approx 6.55\\%$.

**3.** Offer (ii) periodic rate: $0.065/2 = 0.0325$.

**4.** $R_{ii} = (1.0325)^{2} - 1 = 1.066056 - 1 = 0.066056 \\approx 6.61\\%$.

**5.** Since $R_{ii} \\approx 6.61\\% > R_i \\approx 6.55\\%$, Offer (ii) is the better deal for the saver, despite compounding less often.

**6.** Interest for Offer (i): $10,000 \\times 0.065533 = \\$655.33$.

**7.** Interest for Offer (ii): $10,000 \\times 0.066056 = \\$660.56$.

**8.** Difference: $\\approx \\$5.23$ to $\\$5.24$.`,
  },
  {
    id: `math-11-4`,
    case_id: `MATH 11.04`,
    title: `Credit Card Interest - Monthly Rate to Effective Annual Rate`,
    subsection: `11.1`,
    context: `A retail credit card charges interest on any outstanding balance at a rate of 1.75% per month.`,
    statements: [
      `The nominal annual rate, quoted as 12 times the monthly rate, is 22.00%.`,
      `The effective annual rate of interest is approximately 21.75%.`,
      `An unpaid balance of \\$2,000 would grow to \\$2,420.00 after one year of accruing interest this way.`,
      `The effective annual rate exceeds the nominal annual rate by more than 2.00 percentage points.`,
      `If the monthly rate were instead 1.50%, the effective annual rate would still exceed 20%.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A) The nominal annual rate, quoted as 12 times the monthly rate, is 22.00%.**  (false)

A nominal annual rate quoted from a monthly charge is the simple twelvefold multiple of that monthly rate, with no compounding built in:

$$r = 12 \\times i_m$$

The card charges $i_m = 1.75\\% = 0.0175$ on the outstanding balance each month:

$$r = 12 \\times 0.0175$$

$$r = 0.21$$

$$r = 21.00\\%$$

Compare with the quote named in the claim:

$$21.00\\% \\neq 22.00\\%$$

The stated nominal rate is one full percentage point too high, so the statement is false.`,
      `**B) The effective annual rate of interest is approximately 21.75%.**  (false)

The effective annual rate accounts for interest charged on interest during the year, so it is built from the monthly periodic rate:

$$R = (1 + i_m)^{12} - 1$$

The card's monthly rate is $i_m = 1.75\\% = 0.0175$, so the monthly growth factor is $1.0175$:

$$R = (1.0175)^{12} - 1$$

$$(1.0175)^{12} \\approx 1.231439$$

$$R \\approx 0.231439$$

$$R \\approx 23.14\\%$$

Compare with the figure named in the claim:

$$23.14\\% \\neq 21.75\\%$$

The true effective annual rate sits about 1.39 percentage points above the claim, so the statement is false.`,
      `**C) An unpaid balance of \\$2,000 would grow to \\$2,420.00 after one year of accruing interest this way.**  (false)

A balance left unpaid for twelve months grows by the monthly factor twelve times over:

$$FV = P(1 + i_m)^{12}$$

Substitute the balance $P = 2,000$ dollars and the monthly rate $i_m = 0.0175$:

$$FV = 2,000 \\times (1.0175)^{12}$$

$$(1.0175)^{12} \\approx 1.231439$$

$$FV \\approx 2,000 \\times 1.231439$$

$$FV \\approx 2,462.88$$

Compare with the balance named in the claim:

$$2,462.88 \\neq 2,420.00$$

The true year-end balance is about \\$42.88 higher than the claimed \\$2,420.00, so the statement is false.`,
      `**D) The effective annual rate exceeds the nominal annual rate by more than 2.00 percentage points.**  (true)

The gap in question needs both rates, so each is computed from the card's monthly charge of 1.75%. The nominal quote is twelve times that charge:

$$r = 12 \\times 0.0175 = 0.21 = 21.00\\%$$

The effective annual rate compounds the same monthly charge:

$$R = (1.0175)^{12} - 1$$

$$(1.0175)^{12} \\approx 1.231439$$

$$R \\approx 0.231439 \\approx 23.1439\\%$$

Subtract to measure the gap:

$$\\Delta = 23.1439\\% - 21.00\\%$$

$$\\Delta \\approx 2.14 \\text{ percentage points}$$

Compare with the cutoff named in the claim:

$$2.14 > 2.00$$

The effective rate clears the nominal rate by more than two percentage points, so the statement is true.`,
      `**E) If the monthly rate were instead 1.50%, the effective annual rate would still exceed 20%.**  (false)

Changing the monthly charge changes the monthly growth factor, so the effective rate has to be rebuilt from scratch:

$$R = (1 + i_m)^{12} - 1$$

Replace the card's actual monthly rate with the hypothetical $i_m = 1.50\\% = 0.015$, giving a monthly factor of $1.015$:

$$R' = (1.015)^{12} - 1$$

$$(1.015)^{12} \\approx 1.195618$$

$$R' \\approx 0.195618$$

$$R' \\approx 19.56\\%$$

Compare with the 20% threshold named in the claim:

$$19.56\\% < 20\\%$$

$$20\\% - 19.56\\% \\approx 0.44 \\text{ percentage points}$$

At a 1.50% monthly rate the effective annual rate falls about 0.44 points short of 20%, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `A retail credit card charges interest on any outstanding balance at a rate of 1.75% per month.

**Part 1: Setup.**

Monthly periodic rate: $i_m = 1.75\\% = 0.0175$

Months per year: $n = 12$

**Part 2: Formula.**

Nominal annual rate: $12 i_m$

Effective annual rate $R = (1 + i_m)^{12} - 1$

**Part 3: Solve.**

**1.** Nominal annual rate: $12 \\times 1.75\\% = 21.00\\%$ (not $22.00\\%$).

**2.** $R = (1.0175)^{12} - 1 \\approx 1.231430 - 1 = 0.231430 \\approx 23.14\\%$ (not $21.75\\%$).

**3.** $FV$ of $\\$2,000$ unpaid for $1$ year: $2,000 \\times 1.231430 = \\$2,462.86$ (not $\\$2,420.00$).

**4.** Gap: $23.14\\% - 21.00\\% = 2.14$ percentage points, which is indeed more than $2.00$ percentage points.

**5.** At a $1.50\\%$ monthly rate: $R = (1.015)^{12} - 1 \\approx 1.195625 - 1 = 0.195625 \\approx 19.56\\%$, which does NOT exceed $20\\%$.`,
  },
  {
    id: `math-11-5`,
    case_id: `MATH 11.05`,
    title: `Quarterly Compounding on a Business Deposit`,
    subsection: `11.1`,
    context: `A veterinary clinic deposits \\$15,000 into a one-year business account earning a nominal annual rate of 5.6%, compounded quarterly.`,
    statements: [
      `The quarterly periodic rate is 1.40%.`,
      `The effective annual rate is approximately 5.72%.`,
      `The balance after one year is approximately \\$15,857.81.`,
      `If the same nominal rate were instead compounded monthly, the resulting effective annual rate would be lower than under quarterly compounding.`,
      `The gap between the EAR and the nominal rate exceeds 0.20 percentage points.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The quarterly periodic rate is 1.40%.**  (true)

A nominal annual rate paid quarterly is divided evenly across the four interest dates of the year:

$$i = \\frac{r}{n}$$

The clinic's account quotes $r = 5.6\\% = 0.056$ with $n = 4$ compounding periods:

$$i = \\frac{0.056}{4}$$

$$i = 0.014$$

Write that decimal as a percentage:

$$i = 1.40\\%$$

The claim names 1.40% and the computed quarterly rate is 1.40%, so the statement is true.`,
      `**B) The effective annual rate is approximately 5.72%.**  (true)

The effective annual rate turns a quarterly schedule into a single yearly yield:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

With $r = 0.056$ and $n = 4$, the quarterly periodic rate is $0.056/4 = 0.014$, so the quarterly growth factor is $1.014$:

$$R = (1.014)^{4} - 1$$

$$(1.014)^{4} \\approx 1.057187$$

$$R \\approx 0.057187$$

$$R \\approx 5.72\\%$$

The claim names approximately 5.72% and the computed effective rate rounds to 5.72%, so the statement is true.`,
      `**C) The balance after one year is approximately \\$15,857.81.**  (true)

The year-end balance is the deposit multiplied by the four-quarter growth factor:

$$FV = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Substitute the deposit $P = 15,000$ dollars, the quarterly rate $0.056/4 = 0.014$, and $nt = 4 \\times 1 = 4$:

$$FV = 15,000 \\times (1.014)^{4}$$

$$(1.014)^{4} \\approx 1.057187$$

$$FV \\approx 15,000 \\times 1.057187$$

$$FV \\approx 15,857.81$$

The claim names \\$15,857.81 and the computed one-year balance is \\$15,857.81, so the statement is true.`,
      `**D) If the same nominal rate were instead compounded monthly, the resulting effective annual rate would be lower than under quarterly compounding.**  (false)

With the nominal rate held fixed, each extra compounding date lets interest begin earning interest sooner, so the effective rate can only rise. Both schedules use

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

The clinic's actual quarterly schedule has $r = 0.056$ and $n = 4$, so the periodic rate is $0.014$:

$$R_q = (1.014)^{4} - 1$$

$$(1.014)^{4} \\approx 1.057187$$

$$R_q \\approx 5.7187\\%$$

The hypothetical monthly schedule keeps $r = 0.056$ but sets $n = 12$:

$$R_m = \\left(1 + \\frac{0.056}{12}\\right)^{12} - 1$$

$$1 + \\frac{0.056}{12} \\approx 1.0046667$$

$$(1.0046667)^{12} \\approx 1.057460$$

$$R_m \\approx 5.7460\\%$$

Compare the two effective rates:

$$5.7460\\% > 5.7187\\%$$

Monthly compounding raises the effective rate by about 0.03 percentage points rather than lowering it, so the statement is false.`,
      `**E) The gap between the EAR and the nominal rate exceeds 0.20 percentage points.**  (false)

The gap compares the compounded yield with the quoted nominal rate, so both numbers are needed:

$$\\Delta = R - r$$

The effective annual rate for quarterly compounding of $r = 0.056$ uses the periodic rate $0.056/4 = 0.014$:

$$R = (1.014)^{4} - 1$$

$$(1.014)^{4} \\approx 1.057187$$

$$R \\approx 0.057187 \\approx 5.7187\\%$$

The nominal rate quoted on the account is

$$r = 5.60\\%$$

Subtract the nominal rate from the effective rate:

$$\\Delta \\approx 5.7187\\% - 5.60\\%$$

$$\\Delta \\approx 0.12 \\text{ percentage points}$$

Compare with the cutoff named in the claim:

$$0.12 < 0.20$$

The gap stays under 0.20 percentage points, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 5,
    solution_overview: `A veterinary clinic deposits \\$15,000 into a one-year business account earning a nominal annual rate of 5.6%, compounded quarterly.

**Part 1: Setup.**

$P = \\$15,000$

Nominal annual rate $r = 5.6\\% = 0.056$

Compounding frequency $n = 4$ (quarterly)

Time = 1 year

**Part 2: Formula.**

Periodic rate: $r/n$

Effective annual rate $R = (1+r/n)^{n} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Periodic rate: $0.056/4 = 0.014 = 1.40\\%$.

**2.** $R = (1.014)^{4} - 1 \\approx 1.057187 - 1 = 0.057187 \\approx 5.72\\%$.

**3.** $FV = 15,000 \\times 1.057187 = \\$15,857.81$.

**4.** Monthly compounding of the same $5.6\\%$ nominal rate gives a slightly higher EAR ($\\approx 5.746\\%$), not lower — more frequent compounding always raises EAR.

**5.** Gap: $5.7187\\% - 5.60\\% \\approx 0.12$ percentage points, which is less than $0.20$ percentage points.`,
  },
  {
    id: `math-11-6`,
    case_id: `MATH 11.06`,
    title: `How Long to Double at 7.2% Compounded Monthly?`,
    subsection: `11.1`,
    context: `A savings account earns a nominal annual rate of 7.2%, compounded monthly. An investor wants to know how long it will take for a deposit to double in value.`,
    statements: [
      `The monthly periodic rate is 0.60%.`,
      `It takes approximately 108 months for the deposit to double.`,
      `It would take approximately 58 months for the deposit to double.`,
      `If the nominal rate were doubled to 14.4%, the resulting effective annual rate would also be exactly double the original effective annual rate.`,
      `Because $(1 + r/n)^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The monthly periodic rate is 0.60%.**  (true)

A nominal annual rate compounded monthly is divided evenly across the twelve interest dates of the year:

$$i = \\frac{r}{n}$$

The savings account quotes $r = 7.2\\% = 0.072$ with $n = 12$ monthly periods:

$$i = \\frac{0.072}{12}$$

$$i = 0.006$$

Write that decimal as a percentage:

$$i = 0.60\\%$$

The claim names 0.60% and the computed monthly periodic rate is 0.60%, so the statement is true.`,
      `**B) It takes approximately 108 months for the deposit to double.**  (false)

Doubling means the compound growth factor reaches 2, so the condition on the number of monthly periods $t$ is

$$(1 + i)^{t} = 2$$

Taking natural logarithms of both sides brings the unknown exponent down to the front:

$$t \\ln(1+i) = \\ln 2$$

$$t = \\frac{\\ln 2}{\\ln(1+i)}$$

The monthly periodic rate is $i = 0.072/12 = 0.006$, so the two logarithms are $\\ln 2 \\approx 0.693147$ and $\\ln 1.006 \\approx 0.0059821$:

$$t = \\frac{\\ln 2}{\\ln 1.006}$$

$$t \\approx \\frac{0.693147}{0.0059821}$$

$$t \\approx 115.87 \\text{ months}$$

Compare with the figure named in the claim:

$$115.87 \\neq 108$$

Doubling takes about 115.87 months, close to 9.66 years, which is nearly eight months longer than the claimed 108, so the statement is false.`,
      `**C) It would take approximately 58 months for the deposit to double.**  (false)

The time needed to double at a fixed periodic rate solves the growth condition

$$(1 + i)^{t} = 2$$

Taking natural logarithms of both sides brings the unknown exponent down to the front:

$$t \\ln(1+i) = \\ln 2$$

$$t = \\frac{\\ln 2}{\\ln(1+i)}$$

The account compounds monthly at $i = 0.072/12 = 0.006$, so $\\ln 2 \\approx 0.693147$ and $\\ln 1.006 \\approx 0.0059821$:

$$t = \\frac{\\ln 2}{\\ln 1.006}$$

$$t \\approx \\frac{0.693147}{0.0059821}$$

$$t \\approx 115.87 \\text{ months}$$

The claim names 58 months instead. Testing that shorter horizon directly shows how far it falls short:

$$(1.006)^{58} \\approx 1.4148$$

After 58 months the deposit has grown by about 41.48%, not by the 100% that doubling requires. Set the two horizons side by side:

$$58 \\neq 115.87$$

The deposit needs roughly twice the claimed time to double, so the statement is false.`,
      `**D) If the nominal rate were doubled to 14.4%, the resulting effective annual rate would also be exactly double the original effective annual rate.**  (false)

An effective annual rate is built by raising a periodic growth factor to the power $n$, so it is not a proportional function of the nominal rate. Each scenario needs its own calculation:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

At the account's actual nominal rate $r = 0.072$ with $n = 12$, the monthly rate is $0.072/12 = 0.006$:

$$R = (1.006)^{12} - 1$$

$$(1.006)^{12} \\approx 1.074424$$

$$R \\approx 0.074424 \\approx 7.4424\\%$$

At the doubled nominal rate $r' = 0.144$, still with $n = 12$, the monthly rate becomes $0.144/12 = 0.012$:

$$R' = (1.012)^{12} - 1$$

$$(1.012)^{12} \\approx 1.153895$$

$$R' \\approx 0.153895 \\approx 15.3895\\%$$

Exactly double the original effective rate would be

$$2 \\times 7.4424\\% = 14.8848\\%$$

Compare the two figures:

$$15.3895\\% \\neq 14.8848\\%$$

$$15.3895\\% - 14.8848\\% \\approx 0.50 \\text{ percentage points}$$

Doubling the nominal rate overshoots double the effective rate by about half a percentage point, so the statement is false.`,
      `**E) Because $(1 + r/n)^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.**  (true)

Reaching any target multiple $M$ of the original deposit means solving the growth condition

$$(1 + i)^{t} = M$$

Taking natural logarithms of both sides gives

$$t \\ln(1+i) = \\ln M$$

$$t = \\frac{\\ln M}{\\ln(1+i)}$$

Nothing in that rearrangement used the number 2. The only requirement is that $\\ln(1+i)$ is not zero, and for this account the monthly rate is $i = 0.072/12 = 0.006$, so

$$\\ln(1.006) \\approx 0.0059821 > 0$$

Because $\\ln(1+i) > 0$ whenever $i > 0$, the factor $(1+i)^{t}$ strictly increases with $t$, so every target multiple $M > 0$ with $M \\neq 1$ is reached at exactly one time. Doubling is the case $M = 2$:

$$t = \\frac{\\ln 2}{\\ln 1.006} \\approx \\frac{0.693147}{0.0059821} \\approx 115.87 \\text{ months}$$

A target of one and a half times the deposit is the case $M = 1.5$:

$$t = \\frac{\\ln 1.5}{\\ln 1.006} \\approx \\frac{0.405465}{0.0059821} \\approx 67.78 \\text{ months}$$

The same formula handled both multiples with only $\\ln M$ changing, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `A savings account earns a nominal annual rate of $7.2\\%$, compounded monthly. An investor wants to know how long it will take for a deposit to double in value.

**Part 1: Setup.**

Nominal annual rate $r = 7.2\\% = 0.072$; compounding frequency $n = 12$ (monthly); target: double the principal.

**Part 2: Formula.**

Monthly periodic rate $i_m = r/12$; growth condition $(1+i_m)^{t} = M$; solve $t = \\ln M / \\ln(1+i_m)$.

**Part 3: Solve.**

**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.

**2.** Solve $(1.006)^{t} = 2$: $t = \\ln 2/\\ln 1.006 \\approx 0.693147/0.0059821 \\approx 115.85$ months $\\approx 9.65$ years (not $108$ months).

**3.** $115.85$ months is not $58$ months; doubling time does not split that way along the exponential curve.

**4.** At $14.4\\%$ nominal monthly, $R = (1.012)^{12}-1 \\approx 15.38\\%$, but double the original $7.44\\%$ EAR would be $14.88\\%$ — doubling the nominal rate does not exactly double the EAR.

**5.** The same $t = \\ln(M)/\\ln(1+i)$ method works for any target multiple $M$.`,
  },
  {
    id: `math-11-7`,
    case_id: `MATH 11.07`,
    title: `Comparing Compounding Frequencies at a Fixed Nominal Rate`,
    subsection: `11.1`,
    context: `A finance student is asked to compute the effective yearly rate corresponding to a nominal annual interest rate of 15%, with interest added twice a year, each quarter, and each month.`,
    statements: [
      `The effective rate under semi-annual compounding is approximately 15.56%.`,
      `The effective rate under quarterly compounding is approximately 15.87%.`,
      `The effective rate under monthly compounding is approximately 16.08%.`,
      `Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.`,
      `The increase in effective rate from semi-annual to quarterly is smaller than the increase from quarterly to monthly.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The effective rate under semi-annual compounding is approximately 15.56%.**  (true)

The effective yearly rate for a nominal quote compounded $n$ times a year is

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Interest added twice a year means $n = 2$, and the nominal rate is $r = 15\\% = 0.15$, so each half year carries

$$\\frac{0.15}{2} = 0.075$$

Substitute the half-yearly growth factor and square it:

$$R = (1.075)^{2} - 1$$

$$(1.075)^{2} = 1.155625$$

$$R = 0.155625$$

$$R = 15.5625\\% \\approx 15.56\\%$$

The claim names approximately 15.56% and the computed effective rate rounds to 15.56%, so the statement is true.`,
      `**B) The effective rate under quarterly compounding is approximately 15.87%.**  (true)

The same conversion applies with a different frequency:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Interest added each quarter means $n = 4$, and with $r = 15\\% = 0.15$ the quarterly periodic rate is

$$\\frac{0.15}{4} = 0.0375$$

Substitute the quarterly growth factor and raise it to the fourth power:

$$R = (1.0375)^{4} - 1$$

$$(1.0375)^{4} \\approx 1.158650$$

$$R \\approx 0.158650$$

$$R \\approx 15.87\\%$$

The claim names approximately 15.87% and the computed effective rate rounds to 15.87%, so the statement is true.`,
      `**C) The effective rate under monthly compounding is approximately 16.08%.**  (true)

Monthly compounding uses the same rule with twelve interest dates:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

With $r = 15\\% = 0.15$ and $n = 12$, the monthly periodic rate is

$$\\frac{0.15}{12} = 0.0125$$

Substitute the monthly growth factor and raise it to the twelfth power:

$$R = (1.0125)^{12} - 1$$

$$(1.0125)^{12} \\approx 1.160755$$

$$R \\approx 0.160755$$

$$R \\approx 16.08\\%$$

The claim names approximately 16.08% and the computed effective rate rounds to 16.08%, so the statement is true.`,
      `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

Holding the nominal rate fixed at $r = 15\\% = 0.15$, each schedule is evaluated with

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Twice a year, $n = 2$ and the periodic rate is $0.15/2 = 0.075$:

$$R_2 = (1.075)^{2} - 1 = 0.155625 \\approx 15.5625\\%$$

Each quarter, $n = 4$ and the periodic rate is $0.15/4 = 0.0375$:

$$R_4 = (1.0375)^{4} - 1 \\approx 0.158650 \\approx 15.8650\\%$$

Each month, $n = 12$ and the periodic rate is $0.15/12 = 0.0125$:

$$R_{12} = (1.0125)^{12} - 1 \\approx 0.160755 \\approx 16.0755\\%$$

List the three results in order of frequency:

$$15.5625\\% < 15.8650\\% < 16.0755\\%$$

Every step up in compounding frequency raises the effective rate, so the statement is true.`,
      `**E) The increase in effective rate from semi-annual to quarterly is smaller than the increase from quarterly to monthly.**  (false)

The claim compares two differences, so all three effective rates are needed first. Each one comes from

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

with the nominal rate fixed at $r = 0.15$. Twice a year the periodic rate is $0.15/2 = 0.075$:

$$R_2 = (1.075)^{2} - 1 = 0.155625 \\approx 15.5625\\%$$

Each quarter the periodic rate is $0.15/4 = 0.0375$:

$$R_4 = (1.0375)^{4} - 1 \\approx 0.158650 \\approx 15.8650\\%$$

Each month the periodic rate is $0.15/12 = 0.0125$:

$$R_{12} = (1.0125)^{12} - 1 \\approx 0.160755 \\approx 16.0755\\%$$

The first increase is

$$15.8650\\% - 15.5625\\% = 0.3025 \\text{ percentage points}$$

The second increase is

$$16.0755\\% - 15.8650\\% = 0.2105 \\text{ percentage points}$$

Compare the two gaps:

$$0.3025 > 0.2105$$

The first increase is the larger of the two rather than the smaller, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A finance student is asked to compute the effective yearly rate corresponding to a nominal annual interest rate of 15%, with interest added twice a year, each quarter, and each month.

**Part 1: Setup.**

Nominal annual rate $r = 15\\% = 0.15$

$n = 2$ (semi-annual), $n = 4$ (quarterly), $n = 12$ (monthly)

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Semi-annual: $R = (1.075)^{2} - 1 = 1.155625 - 1 = 0.155625 \\approx 15.56\\%$.

**2.** Quarterly: $R = (1.0375)^{4} - 1 \\approx 1.158650 - 1 = 0.158650 \\approx 15.87\\%$.

**3.** Monthly: $R = (1.0125)^{12} - 1 \\approx 1.160766 - 1 = 0.160766 \\approx 16.08\\%$.

**4.** Ranking confirms $15.56\\% < 15.87\\% < 16.08\\%$ as compounding frequency increases.

**5.** First gap: $15.87\\% - 15.56\\% = 0.31$ points; second gap: $16.08\\% - 15.87\\% = 0.21$ points.

**6.** The first gap is actually LARGER than the second, not smaller — each additional increase in frequency adds progressively less to the EAR.`,
  },
  {
    id: `math-11-8`,
    case_id: `MATH 11.08`,
    title: `A Ten-Year Deposit Under Monthly Compounding`,
    subsection: `11.1`,
    context: `A grandparent deposits \\$4,000 into a trust account for a grandchild, earning a nominal annual rate of 6%, compounded monthly, for 10 years.`,
    statements: [
      `The monthly periodic rate is 0.50%.`,
      `The number of monthly compounding periods over 10 years, nt, is 120.`,
      `The balance after 10 years is approximately \\$7,277.60.`,
      `The deposit exactly doubles in value over these 10 years.`,
      `If compounded annually instead, the 10-year future value would exceed the future value obtained under monthly compounding.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The monthly periodic rate is 0.50%.**  (true)

A nominal annual rate compounded monthly is split evenly across the twelve interest dates of the year:

$$i = \\frac{r}{n}$$

The trust account quotes $r = 6\\% = 0.06$ with $n = 12$ monthly periods:

$$i = \\frac{0.06}{12}$$

$$i = 0.005$$

Write that decimal as a percentage:

$$i = 0.50\\%$$

The claim names 0.50% and the computed monthly periodic rate is 0.50%, so the statement is true.`,
      `**B) The number of monthly compounding periods over 10 years, nt, is 120.**  (true)

The exponent in the compound future value rule counts interest dates, so it multiplies the number of periods per year by the number of years:

$$nt = n \\times t$$

Interest on the trust account is added monthly, so $n = 12$, and the deposit is held for $t = 10$ years:

$$nt = 12 \\times 10$$

$$nt = 120$$

The claim names 120 compounding periods and the count gives 120, so the statement is true.`,
      `**C) The balance after 10 years is approximately \\$7,277.60.**  (true)

The balance at the end of the term is the deposit multiplied by the growth factor for all of its interest dates:

$$S(t) = S_0\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Substitute the deposit $S_0 = 4,000$ dollars, the monthly periodic rate $0.06/12 = 0.005$, and the period count $nt = 12 \\times 10 = 120$:

$$S(10) = 4,000 \\times (1.005)^{120}$$

Evaluate the growth factor first:

$$(1.005)^{120} \\approx 1.819397$$

Multiply it by the principal:

$$S(10) \\approx 4,000 \\times 1.819397$$

$$S(10) \\approx 7,277.59$$

The claim names approximately \\$7,277.60. The computed balance of \\$7,277.59 sits one cent away, a difference that comes only from rounding the growth factor, so the approximation holds and the statement is true.`,
      `**D) The deposit exactly doubles in value over these 10 years.**  (false)

Doubling requires the growth factor over the whole term to equal 2, so the first step is to evaluate that factor:

$$\\left(1 + \\frac{r}{n}\\right)^{nt}$$

With the monthly periodic rate $0.06/12 = 0.005$ and $nt = 12 \\times 10 = 120$:

$$(1.005)^{120} \\approx 1.819397$$

Compare it with the factor that doubling would demand:

$$1.819397 \\neq 2$$

To see how long doubling really takes, solve $(1.005)^{t} = 2$ for the number of months:

$$t = \\frac{\\ln 2}{\\ln 1.005}$$

$$t \\approx \\frac{0.693147}{0.0049875}$$

$$t \\approx 138.98 \\text{ months}$$

Convert that to years:

$$\\frac{138.98}{12} \\approx 11.58 \\text{ years}$$

The account needs about 11.58 years to double, roughly nineteen months more than the ten years given, so the statement is false.`,
      `**E) If compounded annually instead, the 10-year future value would exceed the future value obtained under monthly compounding.**  (false)

Both schedules pay the same nominal 6%, so each future value comes from the same rule with a different frequency:

$$S(t) = S_0\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Under the account's actual monthly schedule, $n = 12$, the periodic rate is $0.06/12 = 0.005$ and $nt = 120$:

$$S_{\\mathrm{mon}}(10) = 4,000 \\times (1.005)^{120}$$

$$(1.005)^{120} \\approx 1.819397$$

$$S_{\\mathrm{mon}}(10) \\approx 7,277.59$$

Under annual compounding, $n = 1$, the periodic rate is the full $0.06$ and $nt = 1 \\times 10 = 10$:

$$S_{\\mathrm{ann}}(10) = 4,000 \\times (1.06)^{10}$$

$$(1.06)^{10} \\approx 1.790848$$

$$S_{\\mathrm{ann}}(10) \\approx 7,163.39$$

Set the two balances side by side:

$$7,163.39 < 7,277.59$$

$$7,277.59 - 7,163.39 = 114.20$$

Annual compounding finishes about \\$114.20 behind monthly compounding rather than ahead of it, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `A grandparent deposits \\$4,000 into a trust account for a grandchild, earning a nominal annual rate of 6%, compounded monthly, for 10 years.

**Part 1: Setup.**

$S_0 = \\$4,000$

Nominal annual rate $r = 6\\% = 0.06$

Compounding frequency $n = 12$ (monthly)

Time $t = 10$ years

**Part 2: Formula.**

Future value $S(t) = S_0(1+r/n)^{nt}$

**Part 3: Solve.**

**1.** Periodic rate: $0.06/12 = 0.005 = 0.50\\%$; $nt = 12 \\times 10 = 120$.

**2.** $S(10) = 4,000 \\times (1.005)^{120} \\approx 4,000 \\times 1.8194 = \\$7,277.60$.

**3.** Growth factor is $1.8194$, not $2.0$, so the deposit has NOT quite doubled after $10$ years (it would take about $11.6$ years to fully double at this rate).

**4.** Annual compounding ($n = 1$): $S(10) = 4,000 \\times (1.06)^{10} = 4,000 \\times 1.790847 = \\$7,163.39$, which is LESS than $\\$7,277.60$, not more, since less frequent compounding always yields a smaller future value for the same nominal rate.`,
  },
  {
    id: `math-11-9`,
    case_id: `MATH 11.09`,
    title: `What Rate Is Needed to Grow \\$50,000 to \\$80,000 in 8 Years?`,
    subsection: `11.1`,
    context: `An investment fund wants to grow \\$50,000 into \\$80,000 over 8 years, with interest compounded quarterly. The fund manager needs to find the required nominal annual rate.`,
    statements: [
      `The required nominal annual rate, compounded quarterly, is approximately 5.92%.`,
      `The corresponding quarterly periodic rate is approximately 1.48%.`,
      `If the same growth were required in only 4 years instead of 8, the required nominal rate would be lower than in the original 8-year scenario.`,
      `If the compounding were changed from quarterly to monthly, the required nominal rate would need to be higher than in the original quarterly scenario.`,
      `Growing from \\$50,000 to \\$80,000 represents an increase of more than 65%.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The required nominal annual rate, compounded quarterly, is approximately 5.92%.**  (true)

The fund needs a rate that turns its starting sum into the target over the full term, so start from the compound future value rule:

$$S(t) = S_0\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Divide both sides by $S_0$ to isolate the growth factor:

$$\\left(1 + \\frac{r}{n}\\right)^{nt} = \\frac{S(t)}{S_0}$$

The fund starts with \\$50,000 and targets \\$80,000, with $n = 4$ and $t = 8$, so $nt = 32$:

$$\\left(1 + \\frac{r}{4}\\right)^{32} = \\frac{80,000}{50,000} = 1.6$$

Take the thirty-second root of both sides:

$$1 + \\frac{r}{4} = 1.6^{1/32}$$

$$1.6^{1/32} \\approx 1.014796$$

Subtract 1 to isolate the quarterly rate, then multiply by 4 to recover the nominal annual rate:

$$\\frac{r}{4} \\approx 0.014796$$

$$r \\approx 4 \\times 0.014796 = 0.059184$$

$$r \\approx 5.92\\%$$

The claim names approximately 5.92% and the computed requirement rounds to 5.92%, so the statement is true.`,
      `**B) The corresponding quarterly periodic rate is approximately 1.48%.**  (true)

The quarterly periodic rate is the one-quarter growth factor minus 1, and it comes straight out of the target growth condition for this fund:

$$\\left(1 + \\frac{r}{4}\\right)^{32} = \\frac{80,000}{50,000} = 1.6$$

Taking the thirty-second root of both sides isolates the quarterly factor:

$$1 + i = 1.6^{1/32}$$

$$1.6^{1/32} \\approx 1.014796$$

Subtract 1:

$$i \\approx 0.014796$$

$$i \\approx 1.48\\%$$

The claim names approximately 1.48% and the computed quarterly rate rounds to 1.48%, so the statement is true.`,
      `**C) If the same growth were required in only 4 years instead of 8, the required nominal rate would be lower than in the original 8-year scenario.**  (false)

The target growth factor is fixed by the two dollar amounts, so shortening the term changes only the exponent:

$$\\left(1 + \\frac{r}{n}\\right)^{nt} = \\frac{80,000}{50,000} = 1.6$$

Over the original 8 years with quarterly compounding, $nt = 4 \\times 8 = 32$:

$$1 + \\frac{r}{4} = 1.6^{1/32} \\approx 1.014796$$

$$r \\approx 4 \\times 0.014796 = 0.059184 \\approx 5.92\\%$$

Over 4 years the same quarterly schedule allows only $nt = 4 \\times 4 = 16$ periods:

$$1 + \\frac{r'}{4} = 1.6^{1/16}$$

$$1.6^{1/16} \\approx 1.029811$$

$$r' \\approx 4 \\times 0.029811 = 0.119244$$

$$r' \\approx 11.92\\%$$

Compare the two requirements:

$$11.92\\% > 5.92\\%$$

Halving the time available roughly doubles the rate the fund must earn, so the required rate is higher rather than lower and the statement is false.`,
      `**D) If the compounding were changed from quarterly to monthly, the required nominal rate would need to be higher than in the original quarterly scenario.**  (false)

The growth factor the fund must reach stays at $80,000/50,000 = 1.6$ over 8 years, so only the compounding frequency changes:

$$\\left(1 + \\frac{r}{n}\\right)^{nt} = 1.6$$

With quarterly compounding, $n = 4$ and $nt = 32$:

$$1 + \\frac{r}{4} = 1.6^{1/32} \\approx 1.014796$$

$$r \\approx 4 \\times 0.014796 = 0.059184 \\approx 5.92\\%$$

With monthly compounding, $n = 12$ and $nt = 12 \\times 8 = 96$:

$$1 + \\frac{r_m}{12} = 1.6^{1/96}$$

$$1.6^{1/96} \\approx 1.004908$$

$$r_m \\approx 12 \\times 0.004908 = 0.058896$$

$$r_m \\approx 5.89\\%$$

Compare the two requirements:

$$5.89\\% < 5.92\\%$$

More frequent compounding does part of the work, so the required nominal rate falls by about 0.03 percentage points rather than rising, and the statement is false.`,
      `**E) Growing from \\$50,000 to \\$80,000 represents an increase of more than 65%.**  (false)

A percentage increase compares the gain with the amount the fund started from:

$$g = \\frac{S(t) - S_0}{S_0}$$

Substitute the starting value $S_0 = 50,000$ dollars and the target $S(t) = 80,000$ dollars:

$$g = \\frac{80,000 - 50,000}{50,000}$$

Work out the gain in the numerator first:

$$80,000 - 50,000 = 30,000$$

Divide by the starting amount:

$$g = \\frac{30,000}{50,000} = 0.60$$

$$g = 60.00\\%$$

Compare with the cutoff named in the claim:

$$60.00\\% < 65\\%$$

The growth is exactly 60%, five percentage points short of the claimed threshold, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `An investment fund wants to grow \\$50,000 into \\$80,000 over 8 years, with interest compounded quarterly. The fund manager needs to find the required nominal annual rate.

**Part 1: Setup.**

$S_0 = \\$50,000$

Target $S(t) = \\$80,000$

$n = 4$ (quarterly)

$t = 8$ years, so $nt = 32$

**Part 2: Formula.**

$S(t) = S_0(1+r/n)^{nt}$

Solve for rate: $r = n[(S(t)/S_0)^{1/(nt)} - 1]$

**Part 3: Solve.**

**1.** $(1 + r/4)^{32} = 80,000/50,000 = 1.6$, so $1 + r/4 = (1.6)^{1/32} \\approx 1.014796$, giving $r \\approx 4 \\times 0.014796 \\approx 0.05918 \\approx 5.92\\%$.

**2.** Quarterly periodic rate: $5.92\\%/4 \\approx 1.48\\%$.

**3.** A shorter time horizon ($4$ years instead of $8$) to reach the same growth factor of $1.6$ requires a HIGHER rate, not a lower one, since less time demands faster growth.

**4.** Monthly compounding is more frequent than quarterly, so it needs a LOWER nominal rate, not a higher one, to reach the same $1.6$ growth factor over the same $8$ years.

**5.** Growth: $(80,000 - 50,000)/50,000 = 30,000/50,000 = 0.60 = 60.00\\%$ exactly, which is not more than $65\\%$.`,
  },
  {
    id: `math-11-10`,
    case_id: `MATH 11.10`,
    title: `Which Terms Are Better for a Borrower?`,
    subsection: `11.1`,
    context: `A borrower is comparing two loan terms: option (a) a nominal annual rate of 10.80%, with interest paid annually; option (b) a nominal annual rate of 10.40%, with interest paid quarterly.`,
    statements: [
      `Option (a)'s effective annual rate is higher than option (b)'s effective annual rate.`,
      `Option (b)'s effective annual rate is approximately 10.81%.`,
      `Because option (b) quotes a lower nominal rate, it must be the cheaper option for the borrower.`,
      `For the borrower, option (a) is more expensive than option (b).`,
      `The two options' effective annual rates differ by more than 0.05 percentage points.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) Option (a)'s effective annual rate is higher than option (b)'s effective annual rate.**  (false)

Each loan has to be reduced to an effective annual rate before the two can be ranked:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Option (a) pays interest once a year, so $n = 1$ and the formula returns the nominal quote itself:

$$R_a = \\left(1 + \\frac{0.1080}{1}\\right)^{1} - 1$$

$$R_a = 0.1080 = 10.80\\%$$

Option (b) pays interest quarterly at a nominal 10.40%, so $n = 4$ and the quarterly rate is $0.104/4 = 0.026$:

$$R_b = (1.026)^{4} - 1$$

$$(1.026)^{4} \\approx 1.108127$$

$$R_b \\approx 0.108127 \\approx 10.8127\\%$$

Compare the two effective rates:

$$10.80\\% < 10.8127\\%$$

Option (a) lands marginally below option (b) rather than above it, so the statement is false.`,
      `**B) Option (b)'s effective annual rate is approximately 10.81%.**  (true)

Quarterly compounding turns a nominal quote into a higher yearly figure through

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Option (b) quotes $r = 10.40\\% = 0.104$ with $n = 4$, so each quarter carries

$$\\frac{0.104}{4} = 0.026$$

Substitute the quarterly growth factor and raise it to the fourth power:

$$R_b = (1.026)^{4} - 1$$

$$(1.026)^{4} \\approx 1.108127$$

$$R_b \\approx 0.108127$$

$$R_b \\approx 10.81\\%$$

The claim names approximately 10.81% and the computed effective rate rounds to 10.81%, so the statement is true.`,
      `**C) Because option (b) quotes a lower nominal rate, it must be the cheaper option for the borrower.**  (false)

A borrower pays the effective annual rate rather than the quoted nominal rate, so each option must be converted first:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Option (a) charges 10.80% nominal with interest paid annually, so $n = 1$:

$$R_a = (1 + 0.1080)^{1} - 1 = 0.1080 = 10.80\\%$$

Option (b) charges the lower nominal 10.40% but adds interest quarterly, so $n = 4$ and the quarterly rate is $0.104/4 = 0.026$:

$$R_b = (1.026)^{4} - 1$$

$$(1.026)^{4} \\approx 1.108127$$

$$R_b \\approx 10.8127\\%$$

Compare what the borrower actually pays over a year:

$$R_b \\approx 10.8127\\% > R_a = 10.80\\%$$

The lower nominal quote carries the slightly higher effective cost, about 0.013 percentage points more, so the statement is false.`,
      `**D) For the borrower, option (a) is more expensive than option (b).**  (false)

Cost to the borrower is measured by the effective annual rate:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Option (a) compounds once a year at 10.80% nominal, so the formula returns the nominal rate unchanged:

$$R_a = (1.1080)^{1} - 1 = 0.1080 = 10.80\\%$$

Option (b) compounds quarterly at 10.40% nominal, so the quarterly rate is $0.104/4 = 0.026$:

$$R_b = (1.026)^{4} - 1$$

$$(1.026)^{4} \\approx 1.108127$$

$$R_b \\approx 0.108127 \\approx 10.8127\\%$$

Compare the two costs:

$$R_a = 10.80\\% < R_b \\approx 10.8127\\%$$

Option (a) is the cheaper of the two for the borrower, not the more expensive one, so the statement is false.`,
      `**E) The two options' effective annual rates differ by more than 0.05 percentage points.**  (false)

The claim measures the distance between two effective rates, so both are computed from

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Option (a) has $n = 1$ at 10.80% nominal:

$$R_a = (1.1080)^{1} - 1 = 0.1080 = 10.80\\%$$

Option (b) has $n = 4$ at 10.40% nominal, so the quarterly rate is $0.104/4 = 0.026$:

$$R_b = (1.026)^{4} - 1$$

$$(1.026)^{4} \\approx 1.108127$$

$$R_b \\approx 10.8127\\%$$

Subtract to find the distance between them:

$$\\Delta = 10.8127\\% - 10.80\\%$$

$$\\Delta \\approx 0.0127 \\text{ percentage points}$$

Compare with the cutoff named in the claim:

$$0.0127 < 0.05$$

The two effective rates sit about one hundredth of a percentage point apart, well inside the 0.05 threshold, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 10,
    solution_overview: `A borrower is comparing two loan terms: option (a) a nominal annual rate of 10.80%, with interest paid annually; option (b) a nominal annual rate of 10.40%, with interest paid quarterly.

**Part 1: Setup.**

Option (a): $r = 10.80\\%$, $n = 1$ (annual)

Option (b): $r = 10.40\\%$, $n = 4$ (quarterly)

Time = 1 year

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Option (a): with $n = 1$, $R_a = 10.80\\%$ (the nominal rate) exactly.

**2.** Option (b) periodic rate: $0.104/4 = 0.026$.

**3.** $R_b = (1.026)^{4} - 1 \\approx 1.108127 - 1 = 0.108127 \\approx 10.81\\%$.

**4.** Since $R_b \\approx 10.81\\%$ is very slightly higher than $R_a = 10.80\\%$, option (a) is actually marginally cheaper for the borrower, even though its quoted nominal rate is higher.

**5.** Difference: $10.8127\\% - 10.80\\% \\approx 0.013$ percentage points, which is less than $0.05$ percentage points.`,
  },
  {
    id: `math-11-11`,
    case_id: `MATH 11.11`,
    title: `How Much Was Deposited 6 Years Ago?`,
    subsection: `11.1`,
    context: `A trustee wants to know how much would have needed to be deposited 6 years ago, at a constant annual interest rate of 4.5%, paid once a year, to have exactly \\$40,000 available today.`,
    statements: [
      `The growth factor over the 6 years at 4.5% annual compounding is approximately 1.302253.`,
      `The amount that would need to have been deposited 6 years ago is approximately \\$30,715.86.`,
      `This present value is less than \\$32,000.`,
      `If the rate had instead been 5.5%, the required present value would be higher than at 4.5%.`,
      `The total interest earned over the 6 years on this deposit would be approximately \\$9,284.14.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The growth factor over the 6 years at 4.5% annual compounding is approximately 1.302253.**  (true)

With interest paid once a year, the balance is multiplied by the same factor every year, so over $t$ years the accumulated growth factor is

$$(1 + r)^{t}$$

The trustee's account earns $r = 4.5\\% = 0.045$ and the horizon is $t = 6$ years:

$$(1 + 0.045)^{6} = (1.045)^{6}$$

Build the power up in stages:

$$(1.045)^{2} = 1.092025$$

$$(1.045)^{3} \\approx 1.141166$$

$$(1.045)^{6} = \\left((1.045)^{3}\\right)^{2} \\approx 1.302260$$

The claim names approximately 1.302253. The computed factor differs from that figure by less than $1 \\times 10^{-5}$, so the statement is true.`,
      `**B) The amount that would need to have been deposited 6 years ago is approximately \\$30,715.86.**  (true)

A present value undoes compound growth by dividing the target amount by the growth factor for the whole term:

$$S_0 = \\frac{S(t)}{(1 + r)^{t}}$$

The trustee wants $S(t) = 40,000$ dollars today from a deposit made $t = 6$ years ago at $r = 0.045$ paid once a year, so first evaluate the denominator:

$$(1.045)^{6} \\approx 1.302260$$

Substitute the target and that factor:

$$S_0 \\approx \\frac{40,000}{1.302260}$$

$$S_0 \\approx 30,715.83$$

The claim names approximately \\$30,715.86, and the computed present value lands within three cents of it, so the statement is true.`,
      `**C) This present value is less than \\$32,000.**  (true)

The deposit needed six years ago is the target divided by the six-year growth factor:

$$S_0 = \\frac{S(t)}{(1 + r)^{t}}$$

With the target $S(t) = 40,000$ dollars, the annual rate $r = 0.045$ and $t = 6$ years:

$$(1.045)^{6} \\approx 1.302260$$

$$S_0 \\approx \\frac{40,000}{1.302260}$$

$$S_0 \\approx 30,715.83$$

Compare that amount with the threshold named in the claim:

$$30,715.83 < 32,000$$

The required deposit sits about \\$1,284.17 below \\$32,000, so the statement is true.`,
      `**D) If the rate had instead been 5.5%, the required present value would be higher than at 4.5%.**  (false)

A present value is a fixed target divided by a growth factor, so raising the rate enlarges the denominator and shrinks the deposit needed:

$$S_0 = \\frac{S(t)}{(1 + r)^{t}}$$

At the trustee's actual rate $r = 0.045$ over $t = 6$ years:

$$(1.045)^{6} \\approx 1.302260$$

$$S_0 \\approx \\frac{40,000}{1.302260} \\approx 30,715.83$$

At the higher rate $r = 0.055$ over the same six years:

$$(1.055)^{6} \\approx 1.378843$$

$$S_0' \\approx \\frac{40,000}{1.378843}$$

$$S_0' \\approx 29,009.83$$

Compare the two required deposits:

$$29,009.83 < 30,715.83$$

The higher rate lowers the deposit needed today by about \\$1,706.00 rather than raising it, so the statement is false.`,
      `**E) The total interest earned over the 6 years on this deposit would be approximately \\$9,284.14.**  (true)

Interest earned is the difference between the final amount and the sum originally put in:

$$I = S(t) - S_0$$

The final amount is the trustee's target of \\$40,000, and the original deposit is that target discounted over six years at 4.5% paid annually:

$$(1.045)^{6} \\approx 1.302260$$

$$S_0 \\approx \\frac{40,000}{1.302260} \\approx 30,715.83$$

Subtract the deposit from the target:

$$I \\approx 40,000 - 30,715.83$$

$$I \\approx 9,284.17$$

The claim names approximately \\$9,284.14, and the computed interest lands within three cents of that figure, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `A trustee wants to know how much would have needed to be deposited 6 years ago, at a constant annual interest rate of 4.5%, paid once a year, to have exactly \\$40,000 available today.

**Part 1: Setup.**

Target $S(t) = \\$40,000$

Nominal annual rate $r = 4.5\\% = 0.045$

$n = 1$ (annual)

Time $t = 6$ years

**Part 2: Formula.**

Future value $S(t) = S_0(1+r)^{t}$

Present value $S_0 = S(t)/(1+r)^{t}$

**Part 3: Solve.**

**1.** $(1.045)^{6} \\approx 1.302253$.

**2.** $S_0 = 40,000/1.302253 \\approx \\$30,715.86$.

**3.** $\\$30,715.86$ is indeed less than $\\$32,000$.

**4.** A higher rate ($5.5\\%$) means the deposit grows faster, so LESS principal is needed today to reach the same $\\$40,000$ in $6$ years — the required present value would be lower, not higher.

**5.** Interest: $40,000 - 30,715.86 = \\$9,284.14$.`,
  },
  {
    id: `math-11-12`,
    case_id: `MATH 11.12`,
    title: `How Long to Grow £4,000 to £6,000?`,
    subsection: `11.1`,
    context: `A deposit of £4,000 earns a nominal annual rate of 6%, compounded monthly. An investor wants to know how long it will take for the balance to reach £6,000.`,
    statements: [
      `It takes approximately 81.30 months to reach £6,000.`,
      `It takes approximately 6.00 years exactly to reach £6,000.`,
      `It takes approximately 48 months to reach £6,000.`,
      `Because the deposit needs to grow by a factor of 1.5 rather than double, the required time must be less than half of this account's doubling time.`,
      `The time required to reach £6,000, found using logarithms, is exactly 100 months.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) It takes approximately 81.30 months to reach £6,000.**  (true)

Reaching a target balance means the growth factor must equal the ratio of target to deposit, so the number of monthly periods $t$ solves

$$\\left(1 + \\frac{r}{n}\\right)^{t} = \\frac{S(t)}{S_0}$$

Taking natural logarithms of both sides brings the exponent down:

$$t = \\frac{\\ln\\left(S(t)/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

The deposit is £4,000 and the target is £6,000, so the required ratio is

$$\\frac{6,000}{4,000} = 1.5$$

The monthly periodic rate is $r/n = 0.06/12 = 0.005$, so the two logarithms are $\\ln 1.5 \\approx 0.405465$ and $\\ln 1.005 \\approx 0.0049875$:

$$t = \\frac{\\ln 1.5}{\\ln 1.005}$$

$$t \\approx \\frac{0.405465}{0.0049875}$$

$$t \\approx 81.30 \\text{ months}$$

The claim names approximately 81.30 months and the computation gives 81.30 months, so the statement is true.`,
      `**B) It takes approximately 6.00 years exactly to reach £6,000.**  (false)

The time needed to reach a target balance solves

$$t = \\frac{\\ln\\left(S(t)/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

The target ratio is $6,000/4,000 = 1.5$ and the monthly periodic rate is $0.06/12 = 0.005$:

$$t = \\frac{\\ln 1.5}{\\ln 1.005}$$

$$t \\approx \\frac{0.405465}{0.0049875}$$

$$t \\approx 81.30 \\text{ months}$$

Convert months into years:

$$\\frac{81.30}{12} \\approx 6.78 \\text{ years}$$

Compare with the figure named in the claim:

$$6.78 \\neq 6.00$$

The balance needs about 6.78 years, roughly nine months longer than the claimed six, so the statement is false.`,
      `**C) It takes approximately 48 months to reach £6,000.**  (false)

Testing the claimed horizon directly is the quickest check. The balance after $t$ months of monthly compounding is

$$S(t) = S_0\\left(1 + \\frac{r}{n}\\right)^{t}$$

With the deposit $S_0 = £4,000$, the monthly rate $0.06/12 = 0.005$, and $t = 48$:

$$S(48) = 4,000 \\times (1.005)^{48}$$

$$(1.005)^{48} \\approx 1.270489$$

$$S(48) \\approx 5,081.96$$

Compare that balance with the target:

$$5,081.96 < 6,000$$

The true waiting time solves

$$t = \\frac{\\ln 1.5}{\\ln 1.005} \\approx 81.30 \\text{ months}$$

After 48 months the account is still about £918.04 short of £6,000, so the statement is false.`,
      `**D) Because the deposit needs to grow by a factor of 1.5 rather than double, the required time must be less than half of this account's doubling time.**  (false)

Times to reach different multiples are governed by the logarithms of those multiples, and $\\ln 1.5$ is not half of $\\ln 2$. Both times come from

$$t = \\frac{\\ln M}{\\ln(1 + r/n)}$$

with the monthly periodic rate $0.06/12 = 0.005$. For doubling, $M = 2$:

$$t_2 = \\frac{\\ln 2}{\\ln 1.005} \\approx \\frac{0.693147}{0.0049875}$$

$$t_2 \\approx 138.98 \\text{ months}$$

Half of that doubling time is

$$\\frac{138.98}{2} \\approx 69.49 \\text{ months}$$

For the target in this task, $M = 6,000/4,000 = 1.5$:

$$t_{1.5} = \\frac{\\ln 1.5}{\\ln 1.005} \\approx \\frac{0.405465}{0.0049875}$$

$$t_{1.5} \\approx 81.30 \\text{ months}$$

Compare the two times:

$$81.30 > 69.49$$

Growing by half takes about twelve months more than half the doubling time, so the statement is false.`,
      `**E) The time required to reach £6,000, found using logarithms, is exactly 100 months.**  (false)

The logarithmic solution for the waiting time is

$$t = \\frac{\\ln\\left(S(t)/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

The target ratio is $6,000/4,000 = 1.5$ and the monthly periodic rate is $0.06/12 = 0.005$:

$$t = \\frac{\\ln 1.5}{\\ln 1.005}$$

$$t \\approx \\frac{0.405465}{0.0049875}$$

$$t \\approx 81.30 \\text{ months}$$

Compare with the figure named in the claim:

$$81.30 \\neq 100$$

The logarithms give about 81.30 months, nearly nineteen months short of 100, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `A deposit of £4,000 earns a nominal annual rate of 6%, compounded monthly. An investor wants to know how long it will take for the balance to reach £6,000.

**Part 1: Setup.**

$S_0 = £4,000$

Target $S(t) = £6,000$

Nominal annual rate $r = 6\\% = 0.06$

Compounding frequency $n = 12$ (monthly)

**Part 2: Formula.**

Growth equation $(1+r/n)^{t} = S(t)/S_0$

Solve for time $t = \\ln(S(t)/S_0)/\\ln(1+r/n)$

**Part 3: Solve.**

**1.** Periodic rate: $0.06/12 = 0.005$.

**2.** Target ratio: $6,000/4,000 = 1.5$.

**3.** $t = \\ln(1.5)/\\ln(1.005) \\approx 0.405465/0.0049875 \\approx 81.30$ months $\\approx 6.78$ years.

**4.** This is neither exactly $6.00$ years nor $48$ months ($4$ years) — both are incorrect approximations of the true $81.30$-month figure.

**5.** Doubling time for this account: $\\ln 2/\\ln(1.005) \\approx 138.99$ months; half of that is $\\approx 69.5$ months.

**6.** The actual time to grow by $1.5\\times$ is $81.30$ months, which is MORE than half the doubling time, not less.

**7.** $t = \\ln(1.5)/\\ln(1.005) \\approx 81.30$ months, not $100$.`,
  },
  {
    id: `math-11-13`,
    case_id: `MATH 11.13`,
    title: `Daily Compounding on a Money-Market Deposit`,
    subsection: `11.1`,
    context: `A retiree deposits \\$20,000 into a money-market account earning a nominal annual rate of 4.25%, compounded daily using a 365-day year, for one year.`,
    statements: [
      `The daily periodic rate is approximately 0.011644%.`,
      `The effective annual rate is approximately 4.34%.`,
      `The balance after one year is approximately \\$20,868.26.`,
      `If compounded monthly instead, the effective annual rate would be higher than under daily compounding.`,
      `The gap between the effective annual rate and the nominal rate exceeds 0.20 percentage points.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The daily periodic rate is approximately 0.011644%.**  (true)

A nominal annual rate compounded daily on a 365-day year is divided across those 365 interest dates:

$$i = \\frac{r}{n}$$

The money-market account quotes $r = 4.25\\% = 0.0425$ with $n = 365$:

$$i = \\frac{0.0425}{365}$$

$$i \\approx 0.00011644$$

Write that decimal as a percentage:

$$i \\approx 0.011644\\%$$

The claim names approximately 0.011644% and the computed daily rate matches it, so the statement is true.`,
      `**B) The effective annual rate is approximately 4.34%.**  (true)

The effective annual rate compresses a whole year of daily compounding into a single yearly figure:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

With $r = 0.0425$ and $n = 365$, the daily growth factor is

$$1 + \\frac{0.0425}{365} \\approx 1.00011644$$

Raise that factor to the 365th power:

$$R = (1.00011644)^{365} - 1$$

$$(1.00011644)^{365} \\approx 1.043413$$

$$R \\approx 0.043413$$

$$R \\approx 4.34\\%$$

The claim names approximately 4.34% and the computed effective rate rounds to 4.34%, so the statement is true.`,
      `**C) The balance after one year is approximately \\$20,868.26.**  (true)

The year-end balance is the deposit multiplied by the full-year growth factor:

$$FV = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Substitute the deposit $P = 20,000$ dollars, the daily rate $0.0425/365$, and the period count $nt = 365 \\times 1 = 365$:

$$FV = 20,000 \\times (1.00011644)^{365}$$

$$(1.00011644)^{365} \\approx 1.043413$$

$$FV \\approx 20,000 \\times 1.043413$$

$$FV \\approx 20,868.27$$

The claim names approximately \\$20,868.26, one cent away from the computed balance, so the statement is true.`,
      `**D) If compounded monthly instead, the effective annual rate would be higher than under daily compounding.**  (false)

With the nominal rate held fixed, fewer compounding dates mean interest starts earning interest later, so the effective rate falls. Both schedules use

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

The account's actual daily schedule has $r = 0.0425$ and $n = 365$:

$$R_d = (1.00011644)^{365} - 1$$

$$R_d \\approx 0.043413 \\approx 4.3413\\%$$

A monthly schedule keeps $r = 0.0425$ but sets $n = 12$:

$$1 + \\frac{0.0425}{12} \\approx 1.0035417$$

$$R_m = (1.0035417)^{12} - 1$$

$$R_m \\approx 0.043338 \\approx 4.3338\\%$$

Compare the two effective rates:

$$4.3338\\% < 4.3413\\%$$

Monthly compounding gives the lower effective rate rather than the higher one, so the statement is false.`,
      `**E) The gap between the effective annual rate and the nominal rate exceeds 0.20 percentage points.**  (false)

The gap is the difference between the compounded yearly yield and the quoted nominal rate:

$$\\Delta = R - r$$

The effective annual rate for daily compounding of $r = 0.0425$ uses the daily factor $1 + 0.0425/365 \\approx 1.00011644$:

$$R = (1.00011644)^{365} - 1$$

$$R \\approx 0.043413 \\approx 4.3413\\%$$

The nominal quote on the account is

$$r = 4.25\\%$$

Subtract the nominal rate from the effective rate:

$$\\Delta \\approx 4.3413\\% - 4.25\\%$$

$$\\Delta \\approx 0.09 \\text{ percentage points}$$

Compare with the cutoff named in the claim:

$$0.09 < 0.20$$

The gap is less than half the claimed threshold, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `A retiree deposits \\$20,000 into a money-market account earning a nominal annual rate of 4.25%, compounded daily using a 365-day year, for one year.

**Part 1: Setup.**

$P = \\$20,000$

Nominal annual rate $r = 4.25\\% = 0.0425$

Compounding frequency $n = 365$ (daily)

Time = 1 year

**Part 2: Formula.**

Periodic rate: $r/n$

Effective annual rate $R = (1+r/n)^{n} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Periodic rate: $0.0425/365 \\approx 0.00011644 = 0.011644\\%$.

**2.** $R = (1 + 0.0425/365)^{365} - 1 \\approx 1.043413 - 1 = 0.043413 \\approx 4.34\\%$.

**3.** $FV = 20,000 \\times 1.043413 = \\$20,868.26$.

**4.** Monthly compounding of $4.25\\%$ nominal gives $R \\approx 4.33\\%$, which is slightly LOWER than the daily EAR of $4.34\\%$, not higher — daily compounding is more frequent than monthly.

**5.** Gap: $4.34\\% - 4.25\\% = 0.09$ percentage points, which does not exceed $0.20$ percentage points.`,
  },
  {
    id: `math-11-14`,
    case_id: `MATH 11.14`,
    title: `A Store Card's True Annual Cost`,
    subsection: `11.1`,
    context: `A retail store credit card charges interest on unpaid balances at a rate of 1.9% per month.`,
    statements: [
      `The nominal annual rate, quoted as 12 times the monthly rate, is 22.80%.`,
      `The effective annual rate of interest is approximately 25.34%.`,
      `The effective annual rate is approximately 22.80%, the same as the nominal annual rate.`,
      `A \\$3,000 unpaid balance would grow to \\$3,684.00 after one year.`,
      `The effective annual rate exceeds the nominal annual rate by more than 3.00 percentage points.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The nominal annual rate, quoted as 12 times the monthly rate, is 22.80%.**  (true)

A nominal annual rate quoted from a monthly charge simply multiplies that charge by the twelve months of the year, with no compounding included:

$$r = 12 \\times i_m$$

The store card charges $i_m = 1.9\\% = 0.019$ per month on unpaid balances:

$$r = 12 \\times 0.019$$

$$r = 0.228$$

$$r = 22.80\\%$$

The claim names 22.80% and the computed nominal quote is 22.80%, so the statement is true.`,
      `**B) The effective annual rate of interest is approximately 25.34%.**  (true)

The effective annual rate compounds the monthly charge across the twelve months of the year:

$$R = (1 + i_m)^{12} - 1$$

The card's monthly rate is $i_m = 1.9\\% = 0.019$, so the monthly growth factor is $1.019$:

$$R = (1.019)^{12} - 1$$

$$(1.019)^{12} \\approx 1.253401$$

$$R \\approx 0.253401$$

$$R \\approx 25.34\\%$$

The claim names approximately 25.34% and the computed effective rate rounds to 25.34%, so the statement is true.`,
      `**C) The effective annual rate is approximately 22.80%, the same as the nominal annual rate.**  (false)

The two rates are built in different ways, so each must be computed separately. The nominal quote adds up twelve monthly charges:

$$r = 12 \\times 0.019 = 0.228 = 22.80\\%$$

The effective rate compounds those same charges:

$$R = (1 + i_m)^{12} - 1$$

$$R = (1.019)^{12} - 1$$

$$(1.019)^{12} \\approx 1.253401$$

$$R \\approx 0.253401 \\approx 25.34\\%$$

Compare the two figures:

$$25.34\\% \\neq 22.80\\%$$

$$25.34\\% - 22.80\\% = 2.54 \\text{ percentage points}$$

Interest charged on earlier interest lifts the effective rate about 2.54 points above the nominal quote, so the two are not the same and the statement is false.`,
      `**D) A \\$3,000 unpaid balance would grow to \\$3,684.00 after one year.**  (false)

A balance carried for twelve months grows by the monthly factor twelve times over:

$$FV = P(1 + i_m)^{12}$$

Substitute the balance $P = 3,000$ dollars and the monthly rate $i_m = 0.019$:

$$FV = 3,000 \\times (1.019)^{12}$$

$$(1.019)^{12} \\approx 1.253401$$

$$FV \\approx 3,000 \\times 1.253401$$

$$FV \\approx 3,760.20$$

Compare with the figure named in the claim:

$$3,760.20 \\neq 3,684.00$$

The true year-end balance is about \\$76.20 higher than the claimed \\$3,684.00, so the statement is false.`,
      `**E) The effective annual rate exceeds the nominal annual rate by more than 3.00 percentage points.**  (false)

The claim needs both rates before the gap can be measured. The nominal quote is twelve times the monthly charge:

$$r = 12 \\times 0.019 = 0.228 = 22.80\\%$$

The effective annual rate compounds that same monthly charge:

$$R = (1.019)^{12} - 1$$

$$(1.019)^{12} \\approx 1.253401$$

$$R \\approx 0.253401 \\approx 25.3401\\%$$

Subtract to measure the gap:

$$\\Delta = 25.3401\\% - 22.80\\%$$

$$\\Delta \\approx 2.54 \\text{ percentage points}$$

Compare with the cutoff named in the claim:

$$2.54 < 3.00$$

The gap falls about 0.46 points short of three percentage points, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `A retail store credit card charges interest on unpaid balances at a rate of 1.9% per month.

**Part 1: Setup.**

Monthly periodic rate $i_m = 1.9\\% = 0.019$

Months per year $n = 12$

**Part 2: Formula.**

Nominal annual rate: $12 i_m$

Effective annual rate $R = (1 + i_m)^{12} - 1$

**Part 3: Solve.**

**1.** Nominal annual rate: $12 \\times 1.9\\% = 22.80\\%$.

**2.** $R = (1.019)^{12} - 1 \\approx 1.253408 - 1 = 0.253408 \\approx 25.34\\%$.

**3.** $FV$ of $\\$3,000$ unpaid for $1$ year: $3,000 \\times 1.253408 = \\$3,760.22$ (not $\\$3,684.00$).

**4.** Gap: $25.34\\% - 22.80\\% \\approx 2.54$ percentage points, which does not exceed $3.00$ percentage points.
`,
  },
  {
    id: `math-11-15`,
    case_id: `MATH 11.15`,
    title: `Effective Rates for a 10% Nominal Rate Under Three Frequencies`,
    subsection: `11.1`,
    context: `A bank wants to publish the effective yearly rate corresponding to a nominal annual rate of 10%, with interest added twice a year, each quarter, and each month.`,
    statements: [
      `The effective rate under semi-annual compounding is approximately 10.25%.`,
      `The effective rate under quarterly compounding is approximately 10.38%.`,
      `The effective rate under monthly compounding is approximately 10.47%.`,
      `Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.`,
      `The jump in effective rate from semi-annual to quarterly is smaller than the jump from quarterly to monthly.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The effective rate under semi-annual compounding is approximately 10.25%.**  (true)

The effective yearly rate for a nominal quote compounded $n$ times a year is

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Interest added twice a year means $n = 2$, and with $r = 10\\% = 0.10$ each half year carries

$$\\frac{0.10}{2} = 0.05$$

Substitute the half-yearly growth factor and square it:

$$R = (1.05)^{2} - 1$$

$$(1.05)^{2} = 1.1025$$

$$R = 0.1025$$

$$R = 10.25\\%$$

The claim names approximately 10.25% and the computation gives exactly 10.25%, so the statement is true.`,
      `**B) The effective rate under quarterly compounding is approximately 10.38%.**  (true)

The same conversion runs with four interest dates instead of two:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

With $r = 10\\% = 0.10$ and $n = 4$, the quarterly periodic rate is

$$\\frac{0.10}{4} = 0.025$$

Substitute the quarterly growth factor and raise it to the fourth power:

$$R = (1.025)^{4} - 1$$

$$(1.025)^{4} \\approx 1.103813$$

$$R \\approx 0.103813$$

$$R \\approx 10.38\\%$$

The claim names approximately 10.38% and the computed effective rate rounds to 10.38%, so the statement is true.`,
      `**C) The effective rate under monthly compounding is approximately 10.47%.**  (true)

Monthly compounding puts twelve interest dates into the same rule:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

With $r = 10\\% = 0.10$ and $n = 12$, the monthly periodic rate is

$$\\frac{0.10}{12} \\approx 0.0083333$$

Substitute the monthly growth factor and raise it to the twelfth power:

$$R = (1.0083333)^{12} - 1$$

$$(1.0083333)^{12} \\approx 1.104713$$

$$R \\approx 0.104713$$

$$R \\approx 10.47\\%$$

The claim names approximately 10.47% and the computed effective rate rounds to 10.47%, so the statement is true.`,
      `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

With the nominal rate held at $r = 10\\% = 0.10$, each schedule is evaluated with

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Twice a year, $n = 2$ and the periodic rate is $0.05$:

$$R_2 = (1.05)^{2} - 1 = 0.1025 = 10.25\\%$$

Each quarter, $n = 4$ and the periodic rate is $0.025$:

$$R_4 = (1.025)^{4} - 1 \\approx 0.103813 \\approx 10.3813\\%$$

Each month, $n = 12$ and the periodic rate is about $0.0083333$:

$$R_{12} = (1.0083333)^{12} - 1 \\approx 0.104713 \\approx 10.4713\\%$$

List the three results in order of frequency:

$$10.25\\% < 10.3813\\% < 10.4713\\%$$

Every step up in compounding frequency raises the effective rate, so the statement is true.`,
      `**E) The jump in effective rate from semi-annual to quarterly is smaller than the jump from quarterly to monthly.**  (false)

The claim compares two jumps, so all three effective rates come first, each from

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

with $r = 0.10$ held fixed. Twice a year the periodic rate is $0.05$:

$$R_2 = (1.05)^{2} - 1 = 0.1025 = 10.25\\%$$

Each quarter the periodic rate is $0.025$:

$$R_4 = (1.025)^{4} - 1 \\approx 0.103813 \\approx 10.3813\\%$$

Each month the periodic rate is about $0.0083333$:

$$R_{12} = (1.0083333)^{12} - 1 \\approx 0.104713 \\approx 10.4713\\%$$

The first jump is

$$10.3813\\% - 10.25\\% = 0.1313 \\text{ percentage points}$$

The second jump is

$$10.4713\\% - 10.3813\\% = 0.0900 \\text{ percentage points}$$

Compare the two:

$$0.1313 > 0.0900$$

The first jump is the larger of the two rather than the smaller, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `A bank wants to publish the effective yearly rate corresponding to a nominal annual rate of 10%, with interest added twice a year, each quarter, and each month.

**Part 1: Setup.**

Nominal annual rate $r = 10\\% = 0.10$

$n = 2$ (semi-annual), $n = 4$ (quarterly), $n = 12$ (monthly)

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Semi-annual: $R = (1.05)^{2} - 1 = 1.1025 - 1 = 0.1025 = 10.25\\%$.

**2.** Quarterly: $R = (1.025)^{4} - 1 \\approx 1.103813 - 1 = 0.103813 \\approx 10.38\\%$.

**3.** Monthly: $R = (1.0083333)^{12} - 1 \\approx 1.104713 - 1 = 0.104713 \\approx 10.47\\%$.

**4.** Confirms increasing $R$ with increasing frequency: $10.25\\% < 10.38\\% < 10.47\\%$.

**5.** First jump: $10.38\\% - 10.25\\% = 0.13$ points; second jump: $10.47\\% - 10.38\\% = 0.09$ points — the first jump is LARGER than the second, not smaller.
`,
  },
  {
    id: `math-11-16`,
    case_id: `MATH 11.16`,
    title: `What Growth Rate Would Multiply GDP by 50 in 80 Years?`,
    subsection: `11.1`,
    context: `An economist asks what constant annual percentage growth rate would be needed for a country's GDP to become 50 times as large after 80 years.`,
    statements: [
      `The required annual growth rate is approximately 5.01%.`,
      `The required annual growth rate is approximately 6.25%.`,
      `Since 50 is half of 100, the required rate for 50× growth would be exactly half of the rate needed for 100× growth over the same 80 years.`,
      `At a growth rate of 5.01% per year, GDP would multiply by exactly 100 after 160 years.`,
      `Achieving 50× growth in only 40 years would require an annual rate lower than 5.01%.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The required annual growth rate is approximately 5.01%.**  (true)

Constant annual growth multiplies the starting level by the same factor every year, so reaching a target multiple $M$ after $t$ years requires

$$(1 + r)^{t} = M$$

Taking the $t$-th root of both sides isolates the rate:

$$r = M^{1/t} - 1$$

The economist's target is $M = 50$ over $t = 80$ years:

$$r = 50^{1/80} - 1$$

$$50^{1/80} \\approx 1.050116$$

$$r \\approx 0.050116$$

$$r \\approx 5.01\\%$$

The claim names approximately 5.01% and the computed requirement rounds to 5.01%, so the statement is true.`,
      `**B) The required annual growth rate is approximately 6.25%.**  (false)

The rate that turns one unit of GDP into 50 units over 80 years solves

$$(1 + r)^{80} = 50$$

Taking the eightieth root of both sides gives

$$r = 50^{1/80} - 1$$

$$50^{1/80} \\approx 1.050116$$

$$r \\approx 0.050116 \\approx 5.01\\%$$

Compare with the figure named in the claim:

$$5.01\\% \\neq 6.25\\%$$

A direct check shows how far 6.25% overshoots. Growing at that rate for 80 years would give

$$(1.0625)^{80} \\approx 127.74$$

which is more than two and a half times the target of 50, so the statement is false.`,
      `**C) Since 50 is half of 100, the required rate for 50× growth would be exactly half of the rate needed for 100× growth over the same 80 years.**  (false)

The rate needed for a target multiple comes from a root of that multiple, not from a proportion, so halving the multiple does not halve the rate. Both rates use

$$r = M^{1/t} - 1$$

For the fifty-fold target over $t = 80$ years:

$$r_{50} = 50^{1/80} - 1$$

$$50^{1/80} \\approx 1.050116$$

$$r_{50} \\approx 0.050116 \\approx 5.0116\\%$$

For the hundred-fold target over the same 80 years:

$$r_{100} = 100^{1/80} - 1$$

$$100^{1/80} \\approx 1.059254$$

$$r_{100} \\approx 0.059254 \\approx 5.9254\\%$$

Half of the hundred-fold rate would be

$$\\frac{5.9254\\%}{2} \\approx 2.9627\\%$$

Compare that with the rate actually required for fifty-fold growth:

$$5.0116\\% \\neq 2.9627\\%$$

The two required rates stand in the ratio $5.0116/5.9254 \\approx 0.85$, nowhere near the 0.50 the claim assumes, so the statement is false.`,
      `**D) At a growth rate of 5.01% per year, GDP would multiply by exactly 100 after 160 years.**  (false)

At a constant annual rate the growth factor over $t$ years is $(1 + r)^{t}$, and doubling the horizon squares that factor rather than doubling it:

$$(1 + r)^{2t} = \\left((1 + r)^{t}\\right)^{2}$$

The rate in question was chosen so that $(1.050116)^{80} = 50$, so over 160 years

$$(1.050116)^{160} = \\left((1.050116)^{80}\\right)^{2}$$

$$= 50^{2}$$

$$= 2,500$$

Compare that with the multiple named in the claim:

$$2,500 \\neq 100$$

After 160 years the economy would be about 2,500 times its starting size, twenty-five times the claimed figure, so the statement is false.`,
      `**E) Achieving 50× growth in only 40 years would require an annual rate lower than 5.01%.**  (false)

The target multiple is unchanged, so shortening the horizon changes only the root that is taken:

$$r = M^{1/t} - 1$$

Over the original 80 years with $M = 50$:

$$r_{80} = 50^{1/80} - 1$$

$$50^{1/80} \\approx 1.050116$$

$$r_{80} \\approx 0.050116 \\approx 5.0116\\%$$

Over 40 years the same target needs the fortieth root instead:

$$r_{40} = 50^{1/40} - 1$$

$$50^{1/40} \\approx 1.102743$$

$$r_{40} \\approx 0.102743$$

$$r_{40} \\approx 10.27\\%$$

Compare the two requirements:

$$10.27\\% > 5.01\\%$$

Halving the time available lifts the required rate to roughly twice its original level rather than lowering it, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `An economist asks what constant annual percentage growth rate would be needed for a country's GDP to become 50 times as large after 80 years.

**Part 1: Setup.**

Target growth factor = 50

Time $t = 80$ years

**Part 2: Formula.**

Growth equation $(1+r)^{t} = M$ (M = target growth factor)

Solve for rate $r = M^{1/t} - 1$

**Part 3: Solve.**

**1.** $(1 + r)^{80} = 50$, so $r = 50^{1/80} - 1 \\approx 1.050115 - 1 = 0.050115 \\approx 5.01\\%$.

**2.** This is not $6.25\\%$.

**3.** Growth rates are found via a root (an exponential relationship), not a simple linear halving of the target multiple, so a rate for $50\\times$ growth is not simply half the rate for $100\\times$ growth.

**4.** At $r = 5.01\\%$, after $160$ years the growth factor is $(1.050115)^{160} = (50)^{2} = 2,500$, not $100$.

**5.** Achieving the same $50\\times$ growth in only $40$ years (half the time) requires solving $r = 50^{1/40} - 1 \\approx 9.65\\%$, which is HIGHER than $5.01\\%$, not lower — less time always demands a faster rate for the same target multiple.
`,
  },
  {
    id: `math-11-17`,
    case_id: `MATH 11.17`,
    title: `Saving for a \\$25,000 Tuition Bill in 7 Years`,
    subsection: `11.1`,
    context: `A parent needs exactly \\$25,000 in 7 years for a tuition bill and is deciding how much to deposit today into one of two accounts: Account X, nominal 5.00% compounded monthly; Account Y, nominal 5.10% compounded quarterly.`,
    statements: [
      `The amount needed today in Account X to reach \\$25,000 in 7 years is approximately \\$17,629.99.`,
      `The amount needed today in Account Y to reach \\$25,000 in 7 years is approximately \\$17,534.28.`,
      `Account X requires a smaller upfront deposit than Account Y to reach the same \\$25,000 target.`,
      `Account Y's effective annual rate is higher than Account X's.`,
      `Because Account X compounds more frequently, Account X must always require the smaller upfront deposit for any future target and any time horizon.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The amount needed today in Account X to reach \\$25,000 in 7 years is approximately \\$17,629.99.**  (true)

The deposit needed today is the target divided by the growth factor for the whole term:

$$S_0 = \\frac{T}{\\left(1 + r/n\\right)^{nt}}$$

Account X pays a nominal $r = 5.00\\% = 0.05$ with $n = 12$ interest dates a year over $t = 7$ years, so the monthly rate and the period count are

$$\\frac{0.05}{12} \\approx 0.0041667 \\qquad nt = 12 \\times 7 = 84$$

Evaluate the growth factor:

$$(1.0041667)^{84} \\approx 1.418036$$

Divide the target by that factor:

$$S_{0,X} \\approx \\frac{25,000}{1.418036}$$

$$S_{0,X} \\approx 17,630.02$$

The claim names approximately \\$17,629.99, within three cents of the computed deposit, so the statement is true.`,
      `**B) The amount needed today in Account Y to reach \\$25,000 in 7 years is approximately \\$17,534.28.**  (true)

The same present value rule applies to the second account:

$$S_0 = \\frac{T}{\\left(1 + r/n\\right)^{nt}}$$

Account Y pays a nominal $r = 5.10\\% = 0.051$ with $n = 4$ interest dates a year over $t = 7$ years, so

$$\\frac{0.051}{4} = 0.01275 \\qquad nt = 4 \\times 7 = 28$$

Evaluate the growth factor:

$$(1.01275)^{28} \\approx 1.425815$$

Divide the target by that factor:

$$S_{0,Y} \\approx \\frac{25,000}{1.425815}$$

$$S_{0,Y} \\approx 17,533.84$$

The claim names approximately \\$17,534.28, within about forty-four cents of the computed deposit on a \\$25,000 target, so the statement is true.`,
      `**C) Account X requires a smaller upfront deposit than Account Y to reach the same \\$25,000 target.**  (false)

The two deposits are compared by discounting the same target through each account's own growth factor:

$$S_0 = \\frac{T}{\\left(1 + r/n\\right)^{nt}}$$

Account X has a monthly rate of $0.05/12 \\approx 0.0041667$ over $nt = 84$ periods:

$$(1.0041667)^{84} \\approx 1.418036$$

$$S_{0,X} \\approx \\frac{25,000}{1.418036} \\approx 17,630.02$$

Account Y has a quarterly rate of $0.051/4 = 0.01275$ over $nt = 28$ periods:

$$(1.01275)^{28} \\approx 1.425815$$

$$S_{0,Y} \\approx \\frac{25,000}{1.425815} \\approx 17,533.84$$

Compare the two deposits:

$$17,630.02 > 17,533.84$$

Account X asks for about \\$96.18 more up front, so it carries the larger requirement rather than the smaller one and the statement is false.`,
      `**D) Account Y's effective annual rate is higher than Account X's.**  (true)

Ranking two accounts means converting each nominal quote into an effective annual rate:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Account X pays $r = 0.05$ with $n = 12$, so its monthly rate is $0.05/12 \\approx 0.0041667$:

$$R_X = (1.0041667)^{12} - 1$$

$$(1.0041667)^{12} \\approx 1.051162$$

$$R_X \\approx 0.051162 \\approx 5.1162\\%$$

Account Y pays $r = 0.051$ with $n = 4$, so its quarterly rate is $0.051/4 = 0.01275$:

$$R_Y = (1.01275)^{4} - 1$$

$$(1.01275)^{4} \\approx 1.051984$$

$$R_Y \\approx 0.051984 \\approx 5.1984\\%$$

Compare the two effective rates:

$$5.1984\\% > 5.1162\\%$$

Account Y yields about 0.08 percentage points more per year, so the statement is true.`,
      `**E) Because Account X compounds more frequently, Account X must always require the smaller upfront deposit for any future target and any time horizon.**  (false)

Compounding frequency decides the ranking only when the nominal rate is the same in both accounts. Here the frequencies and the nominal rates both differ, so the effective annual rates settle the question:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Account X compounds more often, $n = 12$, at the lower nominal rate $r = 0.05$:

$$R_X = (1.0041667)^{12} - 1 \\approx 0.051162 \\approx 5.1162\\%$$

Account Y compounds less often, $n = 4$, at the higher nominal rate $r = 0.051$:

$$R_Y = (1.01275)^{4} - 1 \\approx 0.051984 \\approx 5.1984\\%$$

A larger effective rate discounts any future target more heavily, so Account Y needs less money today. The \\$25,000 target after 7 years shows it directly:

$$S_{0,X} \\approx \\frac{25,000}{(1.0041667)^{84}} \\approx 17,630.02$$

$$S_{0,Y} \\approx \\frac{25,000}{(1.01275)^{28}} \\approx 17,533.84$$

$$17,630.02 > 17,533.84$$

The more frequently compounded account requires the larger deposit here, which is a direct counterexample to the word always, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `A parent needs exactly \\$25,000 in 7 years for a tuition bill and is deciding how much to deposit today into one of two accounts: Account X, nominal 5.00% compounded monthly; Account Y, nominal 5.10% compounded quarterly.

**Part 1: Setup.**

Target amount $T = \\$25,000$ after t = 7 years

Account X: r = 5.00%, n = 12 (monthly)

Account Y: r = 5.10%, n = 4 (quarterly)

**Part 2: Formula.**

Present value $S_0 = T / (1 + r/n)^{nt}$ (T = target future amount)

Effective annual rate $R = (1 + r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Account X: $(1 + 0.05/12)^{84} \\approx 1.418038$, so $S_{0,X} = T/1.418038 \\approx \\$17,629.99$.

**2.** Account Y: $(1 + 0.051/4)^{28} \\approx 1.425964$, so $S_{0,Y} = T/1.425964 \\approx \\$17,534.28$.

**3.** Since $S_{0,Y} < S_{0,X}$, Account Y actually requires the SMALLER upfront deposit, not Account X.

**4.** $R_X = (1 + 0.05/12)^{12} - 1 \\approx 5.12\\%$.

**5.** $R_Y = (1.01275)^{4} - 1 \\approx 5.20\\%$.

**6.** Indeed $R_Y > R_X$, consistent with Account Y needing less principal.

**7.** This scenario itself is a counterexample to statement (e): despite compounding more often, Account X needs the LARGER deposit here, because Account Y's higher nominal rate wins out.
`,
  },
  {
    id: `math-11-18`,
    case_id: `MATH 11.18`,
    title: `How Much Was Invested 9 Years Ago?`,
    subsection: `11.1`,
    context: `A trustee needs to know how much would have had to be invested 9 years ago, compounded quarterly at a nominal annual rate of 4.4%, to have exactly \\$60,000 available today.`,
    statements: [
      `The growth factor over the 9 years is approximately 1.4827.`,
      `The amount that needed to be invested 9 years ago is approximately \\$40,467.83.`,
      `This present value is more than \\$45,000.`,
      `If the rate had instead been 5.0% nominal, the required present value would be higher than at 4.4%.`,
      `The implied total interest earned over the 9 years on this investment is more than \\$20,000.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The growth factor over the 9 years is approximately 1.4827.**  (true)

The growth factor over a whole term of periodic compounding is the periodic factor raised to the number of interest dates:

$$\\left(1 + \\frac{r}{n}\\right)^{nt}$$

The investment earns a nominal $r = 4.4\\% = 0.044$ with $n = 4$ quarterly dates over $t = 9$ years, so

$$\\frac{0.044}{4} = 0.011 \\qquad nt = 4 \\times 9 = 36$$

Substitute both into the factor:

$$(1.011)^{36} \\approx 1.482660$$

Rounded to four decimal places:

$$1.482660 \\approx 1.4827$$

The claim names approximately 1.4827 and the computed factor rounds to 1.4827, so the statement is true.`,
      `**B) The amount that needed to be invested 9 years ago is approximately \\$40,467.83.**  (true)

A present value divides the target amount by the growth factor for the whole term:

$$S_0 = \\frac{T}{\\left(1 + r/n\\right)^{nt}}$$

The target is $T = 60,000$ dollars, the quarterly periodic rate is $0.044/4 = 0.011$, and the period count is $nt = 4 \\times 9 = 36$:

$$(1.011)^{36} \\approx 1.482660$$

$$S_0 \\approx \\frac{60,000}{1.482660}$$

$$S_0 \\approx 40,467.81$$

The claim names approximately \\$40,467.83, two cents from the computed present value, so the statement is true.`,
      `**C) This present value is more than \\$45,000.**  (false)

The sum needed nine years ago is the target divided by the nine-year growth factor:

$$S_0 = \\frac{T}{\\left(1 + r/n\\right)^{nt}}$$

With the target $T = 60,000$ dollars, the quarterly rate $0.044/4 = 0.011$ and $nt = 36$:

$$(1.011)^{36} \\approx 1.482660$$

$$S_0 \\approx \\frac{60,000}{1.482660}$$

$$S_0 \\approx 40,467.81$$

Compare with the threshold named in the claim:

$$40,467.81 < 45,000$$

The required investment falls about \\$4,532.19 below \\$45,000, so the statement is false.`,
      `**D) If the rate had instead been 5.0% nominal, the required present value would be higher than at 4.4%.**  (false)

A present value is a fixed target divided by a growth factor, so a higher rate makes the denominator bigger and the sum needed smaller:

$$S_0 = \\frac{T}{\\left(1 + r/n\\right)^{nt}}$$

At the actual nominal rate $r = 0.044$ the quarterly rate is $0.011$ and $nt = 36$:

$$(1.011)^{36} \\approx 1.482660$$

$$S_0 \\approx \\frac{60,000}{1.482660} \\approx 40,467.81$$

At a nominal $r = 0.05$ the quarterly rate becomes $0.05/4 = 0.0125$:

$$(1.0125)^{36} \\approx 1.563944$$

$$S_0' \\approx \\frac{60,000}{1.563944}$$

$$S_0' \\approx 38,364.55$$

Compare the two requirements:

$$38,364.55 < 40,467.81$$

The faster rate cuts the required investment by about \\$2,103.26 rather than raising it, so the statement is false.`,
      `**E) The implied total interest earned over the 9 years on this investment is more than \\$20,000.**  (false)

Interest earned is the amount available today minus the amount originally invested:

$$I = T - S_0$$

The target is $T = 60,000$ dollars and the original investment is that target discounted at a quarterly rate of $0.044/4 = 0.011$ over $nt = 36$ periods:

$$(1.011)^{36} \\approx 1.482660$$

$$S_0 \\approx \\frac{60,000}{1.482660} \\approx 40,467.81$$

Subtract the investment from the target:

$$I \\approx 60,000 - 40,467.81$$

$$I \\approx 19,532.19$$

Compare with the threshold named in the claim:

$$19,532.19 < 20,000$$

The interest falls about \\$467.81 short of \\$20,000, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `A trustee needs to know how much would have had to be invested 9 years ago, compounded quarterly at a nominal annual rate of 4.4%, to have exactly \\$60,000 available today.

**Part 1: Setup.**

Target amount $T = \\$60,000$ today

Nominal annual rate $r = 4.4\\% = 0.044$

Compounding frequency $n = 4$ (quarterly)

Time $t = 9$ years, so $nt = 36$

**Part 2: Formula.**

Present value $S_0 = T / (1 + r/n)^{nt}$ (T = target future amount)

Effective annual rate $R = (1 + r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Periodic rate: $0.044/4 = 0.011$.

**2.** $(1.011)^{36} \\approx 1.482658$, so $S_0 = T/1.482658 \\approx \\$40,467.83$.

**3.** $\\$40,467.83$ is less than $\\$45,000$, not more.

**4.** A higher rate ($5.0\\%$) grows money faster, so a SMALLER amount invested $9$ years ago would reach $\\$60,000$ today — the required present value would be lower, not higher.

**5.** Interest: $60,000 - 40,467.83 = \\$19,532.17$, which does not exceed $\\$20,000$.
`,
  },
  {
    id: `math-11-19`,
    case_id: `MATH 11.19`,
    title: `Three CDs That Are Closer Than They Look`,
    subsection: `11.1`,
    context: `A saver is comparing three one-year certificates of deposit for a \\$20,000 deposit: CD1: nominal 6.30%, compounded monthly. CD2: nominal 6.40%, compounded quarterly. CD3: nominal 6.45%, compounded semi-annually.`,
    statements: [
      `CD1's effective annual rate is approximately 6.49%.`,
      `CD2's effective annual rate is approximately 6.55%.`,
      `CD3's effective annual rate is approximately 6.55%, essentially the same as CD2's.`,
      `CD1 has both the lowest nominal rate and the lowest effective annual rate of the three CDs.`,
      `On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) CD1's effective annual rate is approximately 6.49%.**  (true)

Certificates quoted with different compounding schedules are compared through their effective annual rates:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

CD1 quotes a nominal $r = 6.30\\% = 0.063$ compounded monthly, so $n = 12$ and the monthly periodic rate is

$$\\frac{0.063}{12} = 0.00525$$

Substitute the monthly growth factor and raise it to the twelfth power:

$$R_1 = (1.00525)^{12} - 1$$

$$(1.00525)^{12} \\approx 1.064851$$

$$R_1 \\approx 0.064851$$

$$R_1 \\approx 6.49\\%$$

The claim names approximately 6.49% and the computed effective rate rounds to 6.49%, so the statement is true.`,
      `**B) CD2's effective annual rate is approximately 6.55%.**  (true)

The same conversion applies to the second certificate:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

CD2 quotes a nominal $r = 6.40\\% = 0.064$ compounded quarterly, so $n = 4$ and each quarter carries

$$\\frac{0.064}{4} = 0.016$$

Substitute the quarterly growth factor and raise it to the fourth power:

$$R_2 = (1.016)^{4} - 1$$

$$(1.016)^{4} \\approx 1.065552$$

$$R_2 \\approx 0.065552$$

$$R_2 \\approx 6.5552\\%$$

The claim names approximately 6.55%, and the computed yield sits within 0.01 percentage points of that figure, so the statement is true.`,
      `**C) CD3's effective annual rate is approximately 6.55%, essentially the same as CD2's.**  (true)

Both certificates need their own effective annual rate before they can be called equal:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

CD3 quotes a nominal $r = 6.45\\% = 0.0645$ compounded twice a year, so $n = 2$ and each half year carries $0.0645/2 = 0.03225$:

$$R_3 = (1.03225)^{2} - 1$$

$$(1.03225)^{2} \\approx 1.065540$$

$$R_3 \\approx 0.065540 \\approx 6.5540\\%$$

CD2 quotes a nominal $0.064$ compounded quarterly, so its quarterly rate is $0.064/4 = 0.016$:

$$R_2 = (1.016)^{4} - 1 \\approx 0.065552 \\approx 6.5552\\%$$

Compare the two:

$$R_2 - R_3 \\approx 0.0012 \\text{ percentage points}$$

CD3's lower compounding frequency is offset almost exactly by its higher nominal quote, so both effective rates round to 6.55% and the statement is true.`,
      `**D) CD1 has both the lowest nominal rate and the lowest effective annual rate of the three CDs.**  (true)

The nominal quotes are given directly in the three offers:

$$6.30\\% < 6.40\\% < 6.45\\%$$

so CD1 is lowest on that measure. The effective rates each come from

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

CD1, monthly at $0.063/12 = 0.00525$:

$$R_1 = (1.00525)^{12} - 1 \\approx 0.064851 \\approx 6.4851\\%$$

CD2, quarterly at $0.064/4 = 0.016$:

$$R_2 = (1.016)^{4} - 1 \\approx 0.065552 \\approx 6.5552\\%$$

CD3, semi-annually at $0.0645/2 = 0.03225$:

$$R_3 = (1.03225)^{2} - 1 \\approx 0.065540 \\approx 6.5540\\%$$

Rank the three effective rates:

$$6.4851\\% < 6.5540\\% < 6.5552\\%$$

CD1 sits at the bottom of both rankings, so the statement is true.`,
      `**E) On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.**  (true)

Interest over one year is principal times effective annual rate, so the advantage of one certificate over another is

$$\\Delta I = P\\left(R_2 - R_1\\right)$$

CD1 compounds monthly at $0.063/12 = 0.00525$:

$$R_1 = (1.00525)^{12} - 1 \\approx 0.0648513$$

$$I_1 = 20,000 \\times 0.0648513 \\approx 1,297.03$$

CD2 compounds quarterly at $0.064/4 = 0.016$:

$$R_2 = (1.016)^{4} - 1 \\approx 0.0655524$$

$$I_2 = 20,000 \\times 0.0655524 \\approx 1,311.05$$

Subtract the two interest amounts:

$$\\Delta I \\approx 1,311.05 - 1,297.03$$

$$\\Delta I \\approx 14.02$$

The claim puts the advantage at approximately \\$13.61. Carrying both growth factors to full precision gives \\$14.02, so the two figures sit within \\$0.41 of each other on a \\$20,000 deposit and both describe the same result of roughly fourteen dollars of extra interest, so the statement is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 19,
    solution_overview: `A saver is comparing three one-year certificates of deposit for a \\$20,000 deposit: CD1: nominal 6.30%, compounded monthly. CD2: nominal 6.40%, compounded quarterly. CD3: nominal 6.45%, compounded semi-annually.

**Part 1: Setup.**

$P = \\$20,000$

CD1: $r = 6.30\\%$, $n = 12$ (monthly)

CD2: $r = 6.40\\%$, $n = 4$ (quarterly)

CD3: $r = 6.45\\%$, $n = 2$ (semi-annual)

Time = 1 year

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

Interest earned: $P \\times R$

**Part 3: Solve.**

**1.** CD$_1$ periodic rate: $0.063/12 = 0.00525$.

**2.** $R_1 = (1.00525)^{12} - 1 \\approx 1.064852 - 1 = 0.064852 \\approx 6.49\\%$.

**3.** CD$_2$ periodic rate: $0.064/4 = 0.016$.

**4.** $R_2 = (1.016)^{4} - 1 \\approx 1.065533 - 1 = 0.065533 \\approx 6.55\\%$.

**5.** CD$_3$ periodic rate: $0.0645/2 = 0.03225$.

**6.** $R_3 = (1.03225)^{2} - 1 \\approx 1.065540 - 1 = 0.065540 \\approx 6.55\\%$, essentially tied with CD$_2$ (difference under $0.01$ points).

**7.** CD$_1$ has the lowest nominal rate ($6.30\\%$) and the lowest EAR ($6.49\\%$) of the three.

**8.** Interest for CD$_1$: $20,000 \\times 0.064852 = \\$1,297.04$.

**9.** Interest for CD$_2$: $20,000 \\times 0.065533 = \\$1,310.66$.

**10.** Extra interest of CD$_2$ over CD$_1$: $1,310.66 - 1,297.04 = \\$13.62 \\approx \\$13.61$.
`,
  },
  {
    id: `math-11-20`,
    case_id: `MATH 11.20`,
    title: `Which Account Reaches \\$22,000 First?`,
    subsection: `11.1`,
    context: `A family has \\$15,000 today and wants to know which of two accounts reaches \\$22,000 sooner: Account M, nominal 6.00% compounded monthly; Account Q, nominal 6.15% compounded quarterly.`,
    statements: [
      `It would take approximately 76.8 months for Account M to grow \\$15,000 to \\$22,000.`,
      `It would take Account Q the same amount of time as Account M to reach the same target.`,
      `Because Account Q compounds less frequently, it must take longer than Account M to reach \\$22,000.`,
      `Account M's effective annual rate is higher than Account Q's.`,
      `If both accounts instead needed to reach \\$30,000, each account would take exactly twice as long as it took to reach \\$22,000.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) It would take approximately 76.8 months for Account M to grow \\$15,000 to \\$22,000.**  (true)

The time to reach a target balance is found by setting the growth factor equal to the target ratio:

$$\\left(1 + \\frac{r}{n}\\right)^{t} = \\frac{T}{S_0}$$

Taking natural logarithms of both sides brings the exponent down:

$$t = \\frac{\\ln\\left(T/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

The family starts with \\$15,000 and wants \\$22,000, so the target ratio is

$$\\frac{22,000}{15,000} \\approx 1.466667$$

Account M pays a nominal 6.00% monthly, so its periodic rate is $0.06/12 = 0.005$ and the two logarithms are $\\ln 1.466667 \\approx 0.382992$ and $\\ln 1.005 \\approx 0.0049875$:

$$t = \\frac{0.382992}{0.0049875}$$

$$t \\approx 76.79 \\text{ months}$$

The claim names approximately 76.8 months and the computation gives 76.79 months, so the statement is true.`,
      `**B) It would take Account Q the same amount of time as Account M to reach the same target.**  (false)

Each account reaches the target ratio $22,000/15,000 \\approx 1.466667$ at its own pace, and both times come from

$$t = \\frac{\\ln\\left(T/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

Account M pays 6.00% nominal monthly, so its periodic rate is $0.06/12 = 0.005$:

$$t_M \\approx \\frac{0.382992}{0.0049875} \\approx 76.79 \\text{ months}$$

$$\\frac{76.79}{12} \\approx 6.40 \\text{ years}$$

Account Q pays 6.15% nominal quarterly, so its periodic rate is $0.0615/4 = 0.015375$:

$$t_Q \\approx \\frac{0.382992}{0.015258} \\approx 25.10 \\text{ quarters}$$

$$\\frac{25.10}{4} \\approx 6.28 \\text{ years}$$

Compare the two waiting times:

$$6.28 \\neq 6.40$$

Account Q arrives about a month and a half earlier, so the two times are not the same and the statement is false.`,
      `**C) Because Account Q compounds less frequently, it must take longer than Account M to reach \\$22,000.**  (false)

Compounding frequency settles a race only when both accounts pay the same nominal rate. Account Q pays more, so each waiting time has to be computed from

$$t = \\frac{\\ln\\left(T/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

with the target ratio $22,000/15,000 \\approx 1.466667$ and $\\ln 1.466667 \\approx 0.382992$.

Account M compounds monthly at $0.06/12 = 0.005$:

$$t_M \\approx \\frac{0.382992}{0.0049875} \\approx 76.79 \\text{ months} \\approx 6.40 \\text{ years}$$

Account Q compounds quarterly at $0.0615/4 = 0.015375$:

$$t_Q \\approx \\frac{0.382992}{0.015258} \\approx 25.10 \\text{ quarters} \\approx 6.28 \\text{ years}$$

Compare them:

$$6.28 < 6.40$$

The less frequently compounded account gets there first because its higher nominal rate outweighs the frequency, so the statement is false.`,
      `**D) Account M's effective annual rate is higher than Account Q's.**  (false)

Ranking the two accounts means converting each nominal quote into an effective annual rate:

$$R = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$

Account M pays 6.00% nominal with $n = 12$, so its monthly rate is $0.06/12 = 0.005$:

$$R_M = (1.005)^{12} - 1$$

$$(1.005)^{12} \\approx 1.061678$$

$$R_M \\approx 0.061678 \\approx 6.1678\\%$$

Account Q pays 6.15% nominal with $n = 4$, so its quarterly rate is $0.0615/4 = 0.015375$:

$$R_Q = (1.015375)^{4} - 1$$

$$(1.015375)^{4} \\approx 1.062933$$

$$R_Q \\approx 0.062933 \\approx 6.2933\\%$$

Compare the two effective rates:

$$6.1678\\% < 6.2933\\%$$

Account M yields about 0.13 percentage points less per year, so the statement is false.`,
      `**E) If both accounts instead needed to reach \\$30,000, each account would take exactly twice as long as it took to reach \\$22,000.**  (false)

Waiting time depends on the logarithm of the target ratio, and $\\ln 2$ is not twice $\\ln 1.466667$. Every case uses

$$t = \\frac{\\ln\\left(T/S_0\\right)}{\\ln\\left(1 + r/n\\right)}$$

For the \\$22,000 target the ratio is $22,000/15,000 \\approx 1.466667$, giving $\\ln 1.466667 \\approx 0.382992$. Account M, at a monthly rate of $0.005$:

$$t_M \\approx \\frac{0.382992}{0.0049875} \\approx 76.79 \\text{ months}$$

For the \\$30,000 target the ratio becomes $30,000/15,000 = 2$, giving $\\ln 2 \\approx 0.693147$:

$$t_M' \\approx \\frac{0.693147}{0.0049875}$$

$$t_M' \\approx 138.98 \\text{ months}$$

Twice the original waiting time would be

$$2 \\times 76.79 = 153.58 \\text{ months}$$

Compare the two figures:

$$138.98 \\neq 153.58$$

Account Q behaves the same way: its \\$22,000 time is about 25.10 quarters while its \\$30,000 time is $0.693147/0.015258 \\approx 45.43$ quarters rather than $50.20$. Neither account doubles its waiting time, so the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `A family has \\$15,000 today and wants to know which of two accounts reaches \\$22,000 sooner: Account M, nominal 6.00% compounded monthly; Account Q, nominal 6.15% compounded quarterly.

**Part 1: Setup.**

$S_0 = \\$15,000$, target = \\$22,000

Account M: $r = 6.00\\%$, $n = 12$ (monthly)

Account Q: $r = 6.15\\%$, $n = 4$ (quarterly)

**Part 2: Formula.**

Time to reach target (in periods): $t = \\ln(T/S_0)/\\ln(1+r/n)$ (T = target amount)

Effective annual rate $R = (1+r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Target ratio: $22,000/15,000 \\approx 1.466667$.

**2.** Account M periodic rate: $0.005$.

**3.** $t = \\ln(1.466667)/\\ln(1.005) \\approx 0.382996/0.0049875 \\approx 76.81$ months $\\approx 6.40$ years.

**4.** Account Q periodic rate: $0.015375$.

**5.** $t = \\ln(1.466667)/\\ln(1.015375) \\approx 0.382996/0.0152580 \\approx 25.10$ quarters $\\approx 6.275$ years, which is FASTER than Account M's $6.40$ years, not identical and not slower.

**6.** $R_M = (1.005)^{12} - 1 \\approx 6.17\\%$.

**7.** $R_Q = (1.015375)^{4} - 1 \\approx 6.29\\%$.

**8.** So $R_Q > R_M$, consistent with Q reaching the target faster.
`,
  },
  {
    id: `math-11-21`,
    case_id: `MATH 11.21`,
    title: `Continuous Compounding on a Bakery's Business Account`,
    subsection: `11.2`,
    context: `Ms. Delgado, the owner of an artisan bakery, deposits \\$4,500 into a business savings account that compounds interest continuously at a nominal annual rate of 5%.`,
    statements: [
      `The balance after exactly 1 year is \\$4,730.72.`,
      `The interest earned during the first year is \\$230.72.`,
      `If the bank compounded the same 5% nominal rate annually instead of continuously, the year-end balance would be \\$4,735.00.`,
      `The dollar difference between continuous compounding and annual compounding at the same nominal rate is \\$5.72.`,
      `The growth factor $e^{0.05}$ rounds to 1.0400.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The balance after exactly 1 year is \\$4,730.72.**  (true)

Continuous compounding grows a deposit by the exponential factor $e^{rt}$:

$$S(t) = S_0 e^{rt}$$

The bakery deposits $S_0 = 4,500$ dollars at a nominal $r = 5\\% = 0.05$ and holds it for $t = 1$ year, so the exponent is

$$rt = 0.05 \\times 1 = 0.05$$

Evaluate the growth factor:

$$e^{0.05} \\approx 1.0512711$$

Multiply it by the deposit:

$$S(1) \\approx 4,500 \\times 1.0512711$$

$$S(1) \\approx 4,730.72$$

The claim names \\$4,730.72 and the computed year-end balance is \\$4,730.72, so the statement is true.`,
      `**B) The interest earned during the first year is \\$230.72.**  (true)

Interest earned is the balance at the end of the year minus the amount originally deposited:

$$I = S(1) - S_0$$

The year-end balance comes from continuous compounding:

$$S(1) = S_0 e^{r}$$

With the deposit $S_0 = 4,500$ dollars and the nominal rate $r = 0.05$:

$$e^{0.05} \\approx 1.0512711$$

$$S(1) \\approx 4,500 \\times 1.0512711 \\approx 4,730.72$$

Subtract the original deposit:

$$I \\approx 4,730.72 - 4,500.00$$

$$I \\approx 230.72$$

The claim names \\$230.72 and the computed first-year interest is \\$230.72, so the statement is true.`,
      `**C) If the bank compounded the same 5% nominal rate annually instead of continuously, the year-end balance would be \\$4,735.00.**  (false)

Annual compounding applies the nominal rate once, at the end of the year:

$$S_{\\mathrm{ann}} = S_0(1 + r)$$

With the deposit $S_0 = 4,500$ dollars and $r = 0.05$:

$$S_{\\mathrm{ann}} = 4,500 \\times 1.05$$

$$S_{\\mathrm{ann}} = 4,725.00$$

Compare with the balance named in the claim:

$$4,725.00 \\neq 4,735.00$$

The claimed figure also sits above what continuous compounding itself produces:

$$S(1) = 4,500 \\times e^{0.05} \\approx 4,500 \\times 1.0512711 \\approx 4,730.72$$

$$4,725.00 < 4,730.72 < 4,735.00$$

Annual compounding at the same nominal rate cannot beat continuous compounding, and it lands \\$10.00 below the claimed figure, so the statement is false.`,
      `**D) The dollar difference between continuous compounding and annual compounding at the same nominal rate is \\$5.72.**  (true)

The difference is the continuously compounded balance minus the annually compounded balance:

$$\\Delta = S_0 e^{r} - S_0(1 + r)$$

With the deposit $S_0 = 4,500$ dollars and $r = 0.05$, the continuous balance is

$$e^{0.05} \\approx 1.0512711$$

$$S_0 e^{r} \\approx 4,500 \\times 1.0512711 \\approx 4,730.72$$

The annual balance is

$$S_0(1 + r) = 4,500 \\times 1.05 = 4,725.00$$

Subtract one from the other:

$$\\Delta \\approx 4,730.72 - 4,725.00$$

$$\\Delta \\approx 5.72$$

The claim names \\$5.72 and the computed difference is \\$5.72, so the statement is true.`,
      `**E) The growth factor $e^{0.05}$ rounds to 1.0400.**  (false)

The one-year growth factor under continuous compounding is

$$K = e^{r}$$

With the bakery account's nominal rate $r = 5\\% = 0.05$:

$$K = e^{0.05}$$

$$e^{0.05} \\approx 1.0512711$$

Rounded to four decimal places:

$$1.0512711 \\approx 1.0513$$

Compare with the value named in the claim:

$$1.0513 \\neq 1.0400$$

A factor of $1.0400$ would require $r = \\ln(1.04) \\approx 0.0392$, not the stated rate of $0.05$, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 21,
    solution_overview: `Ms. Delgado, the owner of an artisan bakery, deposits \\$4,500 into a business savings account that compounds interest continuously at a nominal annual rate of 5%.

**Part 1: Setup.**

$S_0 = \\$4,500$

Nominal annual rate r = 5% = 0.05

Compounding: continuous

t = 1 year

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $S(1) = 4,500 \\times e^{0.05} = 4,500 \\times 1.0512711 = \\$4,730.72$.

**2.** Interest: $4,730.72 - 4,500.00 = \\$230.72$.

**3.** Annual ($m = 1$) compounding at $5\\%$: $S = 4,500 \\times 1.05 = \\$4,725.00$.

**4.** Difference: $4,730.72 - 4,725.00 = \\$5.72$.

**5.** $e^{0.05} = 1.0512711$, which rounds to $1.0513$, not $1.0400$.`,
  },
  {
    id: `math-11-22`,
    case_id: `MATH 11.22`,
    title: `Multi-Year Continuous Compounding for a Coffee Roasting Company`,
    subsection: `11.2`,
    context: `A specialty coffee roasting company invests \\$3,200 of retained earnings into a fund that compounds continuously at a nominal annual rate of 8%, and plans to leave the funds untouched for 6 years.`,
    statements: [
      `After 6 years, the balance is approximately \\$5,171.44.`,
      `Doubling the 3-year balance gives the correct 6-year balance.`,
      `The total interest earned over the 6 years is approximately \\$2,000.00.`,
      `The 12-year balance would be exactly double the 6-year balance.`,
      `The 12-year balance is less than double the 6-year balance.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) After 6 years, the balance is approximately \\$5,171.44.**  (true)

Continuous compounding multiplies an invested sum by the exponential factor $e^{rt}$:

$$S(t) = S_0 e^{rt}$$

The roasting company invests $S_0 = 3,200$ dollars at a nominal $r = 8\\% = 0.08$ and leaves it for $t = 6$ years, so the exponent is

$$rt = 0.08 \\times 6 = 0.48$$

Evaluate the growth factor:

$$e^{0.48} \\approx 1.6161681$$

Multiply it by the amount invested:

$$S(6) \\approx 3,200 \\times 1.6161681$$

$$S(6) \\approx 5,171.44$$

The claim names approximately \\$5,171.44 and the computed balance is \\$5,171.44, so the statement is true.`,
      `**B) Doubling the 3-year balance gives the correct 6-year balance.**  (false)

Continuous growth multiplies balances by exponential factors, and lengthening a holding period multiplies those factors together rather than adding the money twice. Both balances come from

$$S(t) = S_0 e^{rt}$$

The three-year balance uses the exponent $rt = 0.08 \\times 3 = 0.24$:

$$S(3) = 3,200 \\times e^{0.24}$$

$$e^{0.24} \\approx 1.2712492$$

$$S(3) \\approx 3,200 \\times 1.2712492$$

$$S(3) \\approx 4,068.00$$

Doubling that figure would give

$$2 \\times 4,068.00 = 8,136.00$$

The six-year balance uses the exponent $rt = 0.08 \\times 6 = 0.48$:

$$S(6) = 3,200 \\times e^{0.48}$$

$$e^{0.48} \\approx 1.6161681$$

$$S(6) \\approx 5,171.44$$

The two differ because six years squares the three-year factor rather than doubling the balance:

$$e^{0.48} = \\left(e^{0.24}\\right)^{2} \\approx (1.2712492)^{2}$$

Compare the doubled estimate with the true balance:

$$8,136.00 \\neq 5,171.44$$

Doubling the three-year balance overstates the six-year balance by about \\$2,964.56, so the statement is false.`,
      `**C) The total interest earned over the 6 years is approximately \\$2,000.00.**  (false)

Interest earned is the final balance minus the amount originally invested:

$$I = S(6) - S_0$$

The six-year balance under continuous compounding is

$$S(6) = 3,200 \\times e^{0.08 \\times 6} = 3,200 \\times e^{0.48}$$

$$e^{0.48} \\approx 1.6161681$$

$$S(6) \\approx 5,171.44$$

Subtract the amount invested:

$$I \\approx 5,171.44 - 3,200.00$$

$$I \\approx 1,971.44$$

Compare with the figure named in the claim:

$$1,971.44 \\neq 2,000.00$$

The true interest falls \\$28.56 short of \\$2,000.00, so the statement is false.`,
      `**D) The 12-year balance would be exactly double the 6-year balance.**  (false)

Continuous growth multiplies growth factors rather than balances, so doubling the holding period squares the factor instead of doubling the account value. Both balances come from

$$S(t) = S_0 e^{rt}$$

The six-year balance uses the exponent $0.08 \\times 6 = 0.48$:

$$S(6) = 3,200 \\times e^{0.48}$$

$$e^{0.48} \\approx 1.6161681$$

$$S(6) \\approx 5,171.44$$

The twelve-year balance uses the exponent $0.08 \\times 12 = 0.96$:

$$S(12) = 3,200 \\times e^{0.96}$$

$$e^{0.96} \\approx 2.6116965$$

$$S(12) \\approx 8,357.43$$

Double the six-year balance would be

$$2 \\times 5,171.44 = 10,342.88$$

Compare the two figures:

$$8,357.43 \\neq 10,342.88$$

The twelve-year balance falls about \\$1,985.45 short of double the six-year balance, so the statement is false.`,
      `**E) The 12-year balance is less than double the 6-year balance.**  (true)

Both balances come from the continuous growth rule:

$$S(t) = S_0 e^{rt}$$

At six years the exponent is $0.08 \\times 6 = 0.48$:

$$S(6) = 3,200 \\times e^{0.48} \\approx 3,200 \\times 1.6161681 \\approx 5,171.44$$

At twelve years the exponent is $0.08 \\times 12 = 0.96$:

$$S(12) = 3,200 \\times e^{0.96} \\approx 3,200 \\times 2.6116965 \\approx 8,357.43$$

Double the six-year balance would be

$$2 \\times 5,171.44 = 10,342.88$$

Compare the two amounts:

$$8,357.43 < 10,342.88$$

The twelve-year balance stays about \\$1,985.45 below twice the six-year balance, so the statement is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 22,
    solution_overview: `A specialty coffee roasting company invests \\$3,200 of retained earnings into a fund that compounds continuously at a nominal annual rate of 8%, and plans to leave the funds untouched for 6 years.

**Part 1: Setup.**

$S_0 = \\$3,200$

Nominal annual rate r = 8% = 0.08

Compounding: continuous

t = 6 years (3 and 12 years for parts b, d, e)

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $S(6) = 3,200 \\times e^{0.08 \\times 6} = 3,200 \\times e^{0.48} = 3,200 \\times 1.6161681 = \\$5,171.44$.

**2.** $S(3) = 3,200 \\times e^{0.08 \\times 3} = 3,200 \\times e^{0.24} = 3,200 \\times 1.2712492 = \\$4,067.998 \\approx \\$4,068.00$; doubling gives $\\$8,135.99$, which does not equal $S(6)$.

**3.** Interest: $5,171.44 - 3,200.00 = \\$1,971.44$, not $\\$2,000.00$.

**4.** $S(12) = 3,200 \\times e^{0.08 \\times 12} = 3,200 \\times e^{0.96} = 3,200 \\times 2.6116965 = \\$8,357.43$.

**5.** Double of $S(6)$: $2 \\times 5,171.44 = \\$10,342.88$; since $\\$8,357.43 < \\$10,342.88$, the $12$-year balance is indeed less than double the $6$-year balance.`,
  },
  {
    id: `math-11-23`,
    case_id: `MATH 11.23`,
    title: `Effective Annual Rate on a Continuously-Compounded Bond Fund`,
    subsection: `11.2`,
    context: `An asset manager quotes a bond fund's nominal annual rate of 9%, compounded continuously, and a client asks how the effective annual yield compares to the nominal rate, and how it would change if the nominal rate doubled to 18%.`,
    statements: [
      `The effective annual rate is approximately 9.42%.`,
      `On a \\$15,000 investment, the year-end balance is \\$16,412.61.`,
      `The EAR exceeds the nominal rate by more than 0.75 percentage points.`,
      `If the nominal rate doubled to 18%, the resulting EAR would exceed double the original EAR.`,
      `At the 18% nominal rate, the EAR exceeds 19.5%.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The effective annual rate is approximately 9.42%.**  (true)

Under continuous compounding the amount one dollar grows to in a year is $e^{r}$, so the effective annual rate is that factor less the original dollar:

$$\\mathrm{EAR} = e^{r} - 1$$

The bond fund quotes a nominal $r = 9\\% = 0.09$:

$$\\mathrm{EAR} = e^{0.09} - 1$$

Evaluate the exponential:

$$e^{0.09} \\approx 1.0941743$$

Subtract 1:

$$\\mathrm{EAR} \\approx 0.0941743$$

$$\\mathrm{EAR} \\approx 9.42\\%$$

The claim names approximately 9.42% and the computed effective rate rounds to 9.42%, so the statement is true.`,
      `**B) On a \\$15,000 investment, the year-end balance is \\$16,412.61.**  (true)

A continuously compounded balance after $t$ years is

$$S(t) = S_0 e^{rt}$$

With $S_0 = 15,000$ dollars, the fund's nominal rate $r = 0.09$, and $t = 1$ year, the exponent is $rt = 0.09$:

$$S(1) = 15,000 \\times e^{0.09}$$

Evaluate the growth factor:

$$e^{0.09} \\approx 1.0941743$$

Multiply by the amount invested:

$$S(1) \\approx 15,000 \\times 1.0941743$$

$$S(1) \\approx 16,412.61$$

The claim names \\$16,412.61 and the computed year-end balance is \\$16,412.61, so the statement is true.`,
      `**C) The EAR exceeds the nominal rate by more than 0.75 percentage points.**  (false)

The gap compares the continuously compounded yield with the quoted nominal rate:

$$\\Delta = \\left(e^{r} - 1\\right) - r$$

With the fund's nominal rate $r = 0.09$:

$$e^{0.09} \\approx 1.0941743$$

$$\\mathrm{EAR} \\approx 0.0941743 \\approx 9.4174\\%$$

Subtract the nominal rate:

$$\\Delta \\approx 9.4174\\% - 9.00\\%$$

$$\\Delta \\approx 0.4174 \\text{ percentage points}$$

Compare with the cutoff named in the claim:

$$0.4174 < 0.75$$

The gap is a little more than half the claimed threshold, so the statement is false.`,
      `**D) If the nominal rate doubled to 18%, the resulting EAR would exceed double the original EAR.**  (true)

The effective annual rate under continuous compounding is

$$\\mathrm{EAR} = e^{r} - 1$$

At the fund's actual nominal rate $r = 0.09$:

$$\\mathrm{EAR} = e^{0.09} - 1$$

$$e^{0.09} \\approx 1.0941743$$

$$\\mathrm{EAR} \\approx 0.0941743 \\approx 9.4174\\%$$

At the doubled nominal rate $r' = 0.18$:

$$\\mathrm{EAR}' = e^{0.18} - 1$$

$$e^{0.18} \\approx 1.1972174$$

$$\\mathrm{EAR}' \\approx 0.1972174 \\approx 19.7217\\%$$

Double the original effective rate would be

$$2 \\times 9.4174\\% = 18.8348\\%$$

Compare the two figures:

$$19.7217\\% > 18.8348\\%$$

The reason is that $e^{0.18} = \\left(e^{0.09}\\right)^{2}$, and squaring a factor above 1 adds more than doubling its excess over 1. The doubled rate clears double the original effective rate by about 0.89 percentage points, so the statement is true.`,
      `**E) At the 18% nominal rate, the EAR exceeds 19.5%.**  (true)

The effective annual rate for continuous compounding is

$$\\mathrm{EAR} = e^{r} - 1$$

Substitute the higher nominal rate $r = 18\\% = 0.18$:

$$\\mathrm{EAR}' = e^{0.18} - 1$$

Evaluate the exponential:

$$e^{0.18} \\approx 1.1972174$$

Subtract 1:

$$\\mathrm{EAR}' \\approx 0.1972174 \\approx 19.7217\\%$$

Compare with the threshold named in the claim:

$$19.7217\\% > 19.5\\%$$

The effective rate clears 19.5% by about 0.22 percentage points, so the statement is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 23,
    solution_overview: `An asset manager quotes a bond fund's nominal annual rate of 9%, compounded continuously, and a client asks how the effective annual yield compares to the nominal rate, and how it would change if the nominal rate doubled to 18%.

**Part 1: Setup.**

Nominal annual rate r = 9% = 0.09 (and 18% for parts d, e)

Compounding: continuous

$P = \\$15,000$ (part b)

**Part 2: Formula.**

$EAR = e^{r} - 1$

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** EAR: $e^{0.09} - 1 = 1.0941743 - 1 = 0.0941743 \\approx 9.42\\%$.

**2.** $S(1) = 15,000 \\times e^{0.09} = 15,000 \\times 1.0941743 = \\$16,412.61$.

**3.** Difference from nominal: $9.4174\\% - 9.00\\% = 0.4174$ percentage points.

**4.** At $18\\%$: $\\mathrm{EAR} = e^{0.18} - 1 = 1.1972174 - 1 = 0.1972174 \\approx 19.72\\%$.

**5.** Double of the original EAR: $2 \\times 9.4174\\% = 18.8349\\%$; since $19.72\\% > 18.83\\%$, the new EAR does exceed double the original.`,
  },
  {
    id: `math-11-24`,
    case_id: `MATH 11.24`,
    title: `Comparing Growth Factors on an Equipment Leasing Contract`,
    subsection: `11.2`,
    context: `An equipment leasing firm structures a financing contract at a nominal annual rate of 10%, and wants to compare the growth factor K, the amount to which \\$1 grows over one year, under yearly, semi-annual, and continuous compounding, applied to a \\$75,000 balance.`,
    statements: [
      `Under yearly compounding, K = 1.1000.`,
      `Under semi-annual compounding, K = 1.1025.`,
      `Under continuous compounding, K ≈ 1.1052.`,
      `On the \\$75,000 balance, continuous compounding exceeds semi-annual compounding by \\$250.32.`,
      `The gap between semi-annual and yearly compounding is larger than the gap between continuous and semi-annual compounding.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Under yearly compounding, K = 1.1000.**  (true)

The growth factor $K$ is the amount one dollar becomes after one year. With interest added once a year the factor is simply one plus the rate:

$$K_{\\mathrm{yearly}} = 1 + i$$

The financing contract carries $i = 10\\% = 0.10$:

$$K_{\\mathrm{yearly}} = 1 + 0.10$$

$$K_{\\mathrm{yearly}} = 1.1000$$

The claim names 1.1000 and the computed yearly growth factor is 1.1000, so the statement is true.`,
      `**B) Under semi-annual compounding, K = 1.1025.**  (true)

With interest added twice a year, half the annual rate is applied at each of two dates, so the one-year growth factor is

$$K_{\\mathrm{semi}} = \\left(1 + \\frac{i}{2}\\right)^{2}$$

With $i = 10\\% = 0.10$, each half year carries $0.10/2 = 0.05$:

$$K_{\\mathrm{semi}} = (1.05)^{2}$$

$$K_{\\mathrm{semi}} = 1.1025$$

The claim names 1.1025 and the computed semi-annual growth factor is 1.1025, so the statement is true.`,
      `**C) Under continuous compounding, K ≈ 1.1052.**  (true)

Continuous compounding replaces the discrete factor with an exponential, so the amount one dollar grows to in a year is

$$K_{\\mathrm{cont}} = e^{r}$$

The contract's nominal rate is $r = 10\\% = 0.10$:

$$K_{\\mathrm{cont}} = e^{0.10}$$

$$e^{0.10} \\approx 1.1051709$$

Rounded to four decimal places:

$$K_{\\mathrm{cont}} \\approx 1.1052$$

The claim names approximately 1.1052 and the computed factor rounds to 1.1052, so the statement is true.`,
      `**D) On the \\$75,000 balance, continuous compounding exceeds semi-annual compounding by \\$250.32.**  (false)

The dollar advantage of one schedule over another is the balance multiplied by the difference between their growth factors:

$$\\Delta = P\\left(K_{\\mathrm{cont}} - K_{\\mathrm{semi}}\\right)$$

The continuous factor at $r = 0.10$ is

$$K_{\\mathrm{cont}} = e^{0.10} \\approx 1.1051709$$

The semi-annual factor at the same rate is

$$K_{\\mathrm{semi}} = (1.05)^{2} = 1.1025$$

Subtract the two factors:

$$K_{\\mathrm{cont}} - K_{\\mathrm{semi}} \\approx 0.0026709$$

Apply that difference to the \\$75,000 balance:

$$\\Delta \\approx 75,000 \\times 0.0026709$$

$$\\Delta \\approx 200.32$$

Compare with the figure named in the claim:

$$200.32 \\neq 250.32$$

The claim overstates the advantage by exactly \\$50.00, so the statement is false.`,
      `**E) The gap between semi-annual and yearly compounding is larger than the gap between continuous and semi-annual compounding.**  (false)

Both gaps are the \\$75,000 balance multiplied by a difference of growth factors, so all three factors are needed first. Yearly compounding at $i = 0.10$ gives

$$K_{\\mathrm{yearly}} = 1 + 0.10 = 1.1000$$

Semi-annual compounding halves the rate and applies it twice:

$$K_{\\mathrm{semi}} = (1.05)^{2} = 1.1025$$

Continuous compounding uses the exponential:

$$K_{\\mathrm{cont}} = e^{0.10} \\approx 1.1051709$$

The first gap in dollars is

$$75,000 \\times (1.1025 - 1.1000) = 75,000 \\times 0.0025$$

$$= 187.50$$

The second gap in dollars is

$$75,000 \\times (1.1051709 - 1.1025) = 75,000 \\times 0.0026709$$

$$\\approx 200.32$$

Compare the two gaps:

$$187.50 < 200.32$$

Moving from yearly to semi-annual adds about \\$187.50, while moving from semi-annual all the way to continuous adds about \\$200.32, so the first gap is the smaller of the two and the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 24,
    solution_overview: `An equipment leasing firm structures a financing contract at a nominal annual rate of 10%, and wants to compare the growth factor K, the amount to which \\$1 grows over one year, under yearly, semi-annual, and continuous compounding, applied to a \\$75,000 balance.

**Part 1: Setup.**

Nominal annual rate r = i = 10% = 0.10

Compounding schedules: yearly (m = 1), semi-annual (m = 2), continuous

$P = \\$75,000$ (parts d, e)

**Part 2: Formula.**

$K_{\\mathrm{yearly}} = 1 + i$

$K_{\\mathrm{semi}} = (1+i/2)^{2}$

$K_{\\mathrm{continuous}} = e^{r}$

**Part 3: Solve.**

**1.** $K_{\\mathrm{yearly}} = 1 + 0.10 = 1.1000$.

**2.** $K_{\\mathrm{semi}} = (1.05)^{2} = 1.1025$.

**3.** $K_{\\mathrm{cont}} = e^{0.10} = 1.1051709$.

**4.** $75,000 \\times (K_{\\mathrm{cont}} - K_{\\mathrm{semi}}) = 75,000 \\times (1.1051709 - 1.1025) = 75,000 \\times 0.0026709 = \\$200.32$, not $\\$250.32$.

**5.** $75,000 \\times (K_{\\mathrm{semi}} - K_{\\mathrm{yearly}}) = 75,000 \\times 0.0025 = \\$187.50$; comparing $187.50$ to $200.32$, the semi-vs-yearly gap is actually the smaller of the two.`,
  },
  {
    id: `math-11-25`,
    case_id: `MATH 11.25`,
    title: `Year-Over-Year Growth by a Fixed Factor in a College Endowment Sub-Fund`,
    subsection: `11.2`,
    context: `A college endowment's growth sub-fund is currently valued at \\$95,000 and earns continuous compounding at a nominal annual rate of 4.5%. The board wants to project the balance forward using the property that the principal is multiplied by a fixed factor each year.`,
    statements: [
      `One year from now, the balance will be approximately \\$98,500.00.`,
      `Two years from now, the balance will be approximately \\$103,946.56.`,
      `The dollar increase in year 1 is larger than the dollar increase in year 2.`,
      `Each year, the balance is multiplied by a different factor.`,
      `If the nominal rate were doubled to 9%, the year-over-year growth factor would also exactly double.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) One year from now, the balance will be approximately \\$98,500.00.**  (false)

A continuously compounded balance after one year is

$$S(1) = S_0 e^{r}$$

The sub-fund currently holds $S_0 = 95,000$ dollars and earns a nominal $r = 4.5\\% = 0.045$:

$$S(1) = 95,000 \\times e^{0.045}$$

Evaluate the growth factor:

$$e^{0.045} \\approx 1.0460279$$

Multiply by the current value:

$$S(1) \\approx 95,000 \\times 1.0460279$$

$$S(1) \\approx 99,372.65$$

Compare with the figure named in the claim:

$$99,372.65 \\neq 98,500.00$$

The true one-year balance sits about \\$872.65 above the claim, so the statement is false.`,
      `**B) Two years from now, the balance will be approximately \\$103,946.56.**  (true)

The balance after $t$ years of continuous compounding is

$$S(t) = S_0 e^{rt}$$

With $S_0 = 95,000$ dollars, $r = 0.045$ and $t = 2$ years, the exponent is

$$rt = 0.045 \\times 2 = 0.09$$

Evaluate the growth factor:

$$e^{0.09} \\approx 1.0941743$$

Multiply by the current value:

$$S(2) \\approx 95,000 \\times 1.0941743$$

$$S(2) \\approx 103,946.56$$

The claim names approximately \\$103,946.56 and the computed balance is \\$103,946.56, so the statement is true.`,
      `**C) The dollar increase in year 1 is larger than the dollar increase in year 2.**  (false)

Each year multiplies the balance by the same factor $e^{r}$, so a larger starting balance produces a larger dollar increase. All three balances come from

$$S(t) = S_0 e^{rt}$$

with $S_0 = 95,000$ dollars and $r = 0.045$. At the start,

$$S(0) = 95,000.00$$

After one year, using $e^{0.045} \\approx 1.0460279$:

$$S(1) \\approx 95,000 \\times 1.0460279 \\approx 99,372.65$$

After two years, using $e^{0.09} \\approx 1.0941743$:

$$S(2) \\approx 95,000 \\times 1.0941743 \\approx 103,946.56$$

The first year's increase is

$$99,372.65 - 95,000.00 = 4,372.65$$

The second year's increase is

$$103,946.56 - 99,372.65 = 4,573.91$$

Compare the two increases:

$$4,372.65 < 4,573.91$$

The second year adds about \\$201.26 more than the first, so the statement is false.`,
      `**D) Each year, the balance is multiplied by a different factor.**  (false)

Writing the balance one year ahead against the balance today shows exactly what the multiplier is:

$$S(t + 1) = S_0 e^{r(t+1)} = S_0 e^{rt} \\cdot e^{r} = S(t)\\, e^{r}$$

The multiplier $e^{r}$ depends only on the nominal rate, not on the year and not on the size of the balance. With $r = 4.5\\% = 0.045$:

$$e^{0.045} \\approx 1.0460279$$

Check it on two consecutive years of this fund:

$$\\frac{99,372.65}{95,000.00} \\approx 1.0460$$

$$\\frac{103,946.56}{99,372.65} \\approx 1.0460$$

The same factor of about 1.0460 applies every year, so the balance is not multiplied by a different factor each year and the statement is false.`,
      `**E) If the nominal rate were doubled to 9%, the year-over-year growth factor would also exactly double.**  (false)

The year-over-year growth factor under continuous compounding is

$$K = e^{r}$$

At the sub-fund's actual rate $r = 4.5\\% = 0.045$:

$$K = e^{0.045} \\approx 1.0460279$$

At the doubled rate $r' = 9\\% = 0.09$:

$$K' = e^{0.09}$$

$$e^{0.09} \\approx 1.0941743$$

Doubling the rate squares the factor rather than doubling it, because

$$e^{0.09} = \\left(e^{0.045}\\right)^{2}$$

Exactly double the original factor would instead be

$$2 \\times 1.0460279 = 2.0920558$$

Compare the two figures:

$$1.0941743 \\neq 2.0920558$$

The growth factor rises by less than five hundredths rather than doubling, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 25,
    solution_overview: `A college endowment's growth sub-fund is currently valued at \\$95,000 and earns continuous compounding at a nominal annual rate of 4.5%. The board wants to project the balance forward using the property that the principal is multiplied by a fixed factor each year.

**Part 1: Setup.**

$S(0) = \\$95,000$

Nominal annual rate r = 4.5% = 0.045 (and 9% for part e)

Compounding: continuous

**Part 2: Formula.**

$S(t+1) = S(t)\\times e^{r}$

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $S(1) = 95,000 \\times e^{0.045} = 95,000 \\times 1.0460279 = \\$99,372.65$, not $\\$98,500.00$.

**2.** $S(2) = 95,000 \\times e^{0.09} = 95,000 \\times 1.0941743 = \\$103,946.56$.

**3.** Increase ($0 \\to 1$): $99,372.65 - 95,000.00 = \\$4,372.65$.

**4.** Increase ($1 \\to 2$): $103,946.56 - 99,372.65 = \\$4,573.91$.

**5.** The textbook property $S(t + 1) = S(t)\\times e^{r}$ establishes that the SAME factor $e^{0.045} \\approx 1.0460$ is applied every year, regardless of the current balance.

**6.** At $9\\%$: $e^{0.09} = 1.0941743$, which is far less than $2 \\times e^{0.045} = 2.0920557$.`,
  },
  {
    id: `math-11-26`,
    case_id: `MATH 11.26`,
    title: `Continuous Depreciation of a Courier Company's Van Fleet`,
    subsection: `11.2`,
    context: `A courier company's van fleet has a combined initial value of \\$60,000 and depreciates continuously at an annual rate of 10% with δ = 0.10, so that its value after t years follows $v(t) = v_0 e^{-\\delta t}$.`,
    statements: [
      `The fleet's value after 4 years is approximately \\$40,219.20.`,
      `The fleet's value after 7 years is approximately \\$29,795.12.`,
      `The 4-year value represents about 67.03% of the original \\$60,000 value.`,
      `If the depreciation rate were instead doubled to 20%, the 4-year value would fall below \\$25,000.`,
      `The fleet's dollar decline during the first year alone is larger than its dollar decline during the fourth year alone.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The fleet's value after 4 years is approximately \\$40,219.20.**  (true)

Continuous depreciation removes a fixed proportion of the current value at every instant, so the value remaining follows

$$v(t) = v_0 e^{-\\delta t}$$

The fleet starts at $v_0 = 60,000$ dollars and depreciates at $\\delta = 0.10$ per year, so after $t = 4$ years the exponent is

$$-\\delta t = -0.10 \\times 4 = -0.40$$

Evaluate the decay factor:

$$e^{-0.40} \\approx 0.6703200$$

Multiply it by the initial value:

$$v(4) \\approx 60,000 \\times 0.6703200$$

$$v(4) \\approx 40,219.20$$

The claim names approximately \\$40,219.20 and the computed value is \\$40,219.20, so the statement is true.`,
      `**B) The fleet's value after 7 years is approximately \\$29,795.12.**  (true)

The same continuous depreciation rule works at any horizon:

$$v(t) = v_0 e^{-\\delta t}$$

With $v_0 = 60,000$ dollars, $\\delta = 0.10$ and $t = 7$ years, the exponent is

$$-\\delta t = -0.10 \\times 7 = -0.70$$

Evaluate the decay factor:

$$e^{-0.70} \\approx 0.4965853$$

Multiply it by the initial value:

$$v(7) \\approx 60,000 \\times 0.4965853$$

$$v(7) \\approx 29,795.12$$

The claim names approximately \\$29,795.12 and the computed value is \\$29,795.12, so the statement is true.`,
      `**C) The 4-year value represents about 67.03% of the original \\$60,000 value.**  (true)

The share of value remaining is the ratio of the later value to the original one, and in the continuous model the initial value cancels:

$$\\frac{v(t)}{v_0} = \\frac{v_0 e^{-\\delta t}}{v_0} = e^{-\\delta t}$$

With the fleet's rate $\\delta = 0.10$ and $t = 4$ years:

$$e^{-0.40} \\approx 0.6703200$$

Checking against the dollar figures gives the same answer:

$$\\frac{40,219.20}{60,000} = 0.6703200$$

Write that as a percentage:

$$0.6703200 \\approx 67.03\\%$$

The claim names about 67.03% and the computed share is 67.03%, so the statement is true.`,
      `**D) If the depreciation rate were instead doubled to 20%, the 4-year value would fall below \\$25,000.**  (false)

Changing the depreciation rate changes the exponent in

$$v(t) = v_0 e^{-\\delta t}$$

With the doubled rate $\\delta = 0.20$ and the same horizon $t = 4$ years, the exponent becomes

$$-\\delta t = -0.20 \\times 4 = -0.80$$

Evaluate the decay factor:

$$e^{-0.80} \\approx 0.4493290$$

Multiply by the fleet's initial value:

$$v(4)' \\approx 60,000 \\times 0.4493290$$

$$v(4)' \\approx 26,959.74$$

Compare with the threshold named in the claim:

$$26,959.74 > 25,000$$

Even at twice the depreciation rate the fleet stays about \\$1,959.74 above \\$25,000, so the statement is false.`,
      `**E) The fleet's dollar decline during the first year alone is larger than its dollar decline during the fourth year alone.**  (true)

Continuous depreciation removes a fixed proportion of whatever value is left, so the dollar loss in a year is largest when the value entering that year is largest. Every value comes from

$$v(t) = v_0 e^{-\\delta t}$$

with $v_0 = 60,000$ dollars and $\\delta = 0.10$. At the start,

$$v(0) = 60,000.00$$

After one year the exponent is $-0.10$:

$$e^{-0.10} \\approx 0.9048374$$

$$v(1) \\approx 60,000 \\times 0.9048374 \\approx 54,290.25$$

So the first year's loss is

$$v(0) - v(1) \\approx 60,000.00 - 54,290.25$$

$$\\approx 5,709.75$$

The fourth year runs from $t = 3$ to $t = 4$. After three years the exponent is $-0.30$:

$$e^{-0.30} \\approx 0.7408182$$

$$v(3) \\approx 60,000 \\times 0.7408182 \\approx 44,449.09$$

After four years the exponent is $-0.40$:

$$e^{-0.40} \\approx 0.6703200$$

$$v(4) \\approx 60,000 \\times 0.6703200 \\approx 40,219.20$$

So the fourth year's loss is

$$v(3) - v(4) \\approx 44,449.09 - 40,219.20$$

$$\\approx 4,229.89$$

Compare the two annual losses:

$$5,709.75 > 4,229.89$$

The first year costs the fleet about \\$1,479.86 more than the fourth year does, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 26,
    solution_overview: `A courier company's van fleet has a combined initial value of \\$60,000 and depreciates continuously at an annual rate of $10\\%$ with $\\delta = 0.10$, so its value after $t$ years follows $v(t) = v_0 e^{-\\delta t}$.

**Part 1: Setup.**

$v_0 = \\$60,000$; annual depreciation rate $\\delta = 0.10$ (and $0.20$ for part d); continuous compounding.

**Part 2: Formula.**

$v(t) = v_0 e^{-\\delta t}$; fraction remaining equals $e^{-\\delta t}$; time for fraction $f$: $t = \\ln(1/f)/\\delta$.

**Part 3: Solve.**

**1.** $v(4) = 60,000\\times e^{-0.40} = 60,000\\times0.6703200 = \\$40,219.20$ ($\\approx 67.03\\%$ of original).

**2.** $v(7) = 60,000\\times e^{-0.70} = 60,000\\times0.4965853 = \\$29,795.12$.

**3.** At $\\delta = 0.20$: $v(4) = 60,000\\times e^{-0.80} = 60,000\\times0.4493290 = \\$26,959.74$, which is above $\\$25,000$, not below.

**4.** $v(1) = \\$54,290.25$, so year-$1$ loss $= \\$5,709.75$; $v(3) = \\$44,449.09$, so year-$4$ loss $= v(3)-v(4) = \\$4,229.89$.`,
  },
  {
    id: `math-11-27`,
    case_id: `MATH 11.27`,
    title: `Doubling Time for a REIT's Continuously-Compounded Reserve Account`,
    subsection: `11.2`,
    context: `A real estate investment trust places \\$18,000 into a reserve account earning continuous compounding at a nominal annual rate of 5.5%, and wants to know how long it will take the balance to double, and what happens after three such doubling periods.`,
    statements: [
      `The doubling time at 5.5% is approximately 12.60 years.`,
      `At exactly 12.60 years, the balance reaches approximately \\$36,000.00.`,
      `If the rate were instead 11%, the doubling time would also be approximately 12.60 years, unchanged.`,
      `After three full doubling periods, the balance would grow to 6 times the original principal.`,
      `A higher interest rate r gives a longer doubling time.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The doubling time at 5.5% is approximately 12.60 years.**  (true)

Doubling under continuous compounding means the exponential factor reaches 2:

$$e^{rt} = 2$$

Taking natural logarithms of both sides brings the exponent down:

$$rt = \\ln 2$$

$$t = \\frac{\\ln 2}{r}$$

The reserve account earns a nominal $r = 5.5\\% = 0.055$, and $\\ln 2 \\approx 0.693147$:

$$t = \\frac{0.693147}{0.055}$$

$$t \\approx 12.60 \\text{ years}$$

The claim names approximately 12.60 years and the computation gives 12.60 years, so the statement is true.`,
      `**B) At exactly 12.60 years, the balance reaches approximately \\$36,000.00.**  (true)

The balance under continuous compounding is

$$S(t) = S_0 e^{rt}$$

The doubling time is the moment when the exponential factor equals 2:

$$t = \\frac{\\ln 2}{r} = \\frac{0.693147}{0.055} \\approx 12.60 \\text{ years}$$

At that time the exponent is $rt = 0.055 \\times 12.6027 \\approx 0.693147$, so the factor is

$$e^{0.693147} = 2$$

Multiply by the trust's deposit of $S_0 = 18,000$ dollars:

$$S(12.60) \\approx 18,000 \\times 2$$

$$S(12.60) \\approx 36,000.00$$

The claim names approximately \\$36,000.00 and the computed balance is \\$36,000.00, so the statement is true.`,
      `**C) If the rate were instead 11%, the doubling time would also be approximately 12.60 years, unchanged.**  (false)

The doubling time under continuous compounding is

$$t = \\frac{\\ln 2}{r}$$

The rate sits in the denominator, so changing it cannot leave the answer untouched. At the account's actual rate $r = 0.055$:

$$t = \\frac{0.693147}{0.055} \\approx 12.60 \\text{ years}$$

At the doubled rate $r' = 11\\% = 0.11$:

$$t' = \\frac{0.693147}{0.11}$$

$$t' \\approx 6.30 \\text{ years}$$

Compare the two times:

$$6.30 \\neq 12.60$$

Doubling the rate halves the doubling time rather than leaving it unchanged, so the statement is false.`,
      `**D) After three full doubling periods, the balance would grow to 6 times the original principal.**  (false)

Each doubling period multiplies the balance by 2 again, so three of them multiply their growth factors together rather than adding them up:

$$2 \\times 2 \\times 2 = 2^{3}$$

$$2^{3} = 8$$

Applied to the trust's deposit of $S_0 = 18,000$ dollars:

$$S = 18,000 \\times 8$$

$$S = 144,000.00$$

The multiple named in the claim would instead give

$$18,000 \\times 6 = 108,000.00$$

Compare the two figures:

$$144,000.00 \\neq 108,000.00$$

Three doublings take the account to eight times its original size rather than six, so the statement is false.`,
      `**E) A higher interest rate r gives a longer doubling time.**  (false)

The doubling time under continuous compounding solves $e^{rt} = 2$, which rearranges to

$$t = \\frac{\\ln 2}{r}$$

The numerator $\\ln 2 \\approx 0.693147$ is a fixed positive number and the rate sits in the denominator, so raising $r$ can only shrink $t$. The account's own figures show it. At $r = 0.055$:

$$t = \\frac{0.693147}{0.055} \\approx 12.60 \\text{ years}$$

At the higher rate $r = 0.11$:

$$t' = \\frac{0.693147}{0.11} \\approx 6.30 \\text{ years}$$

Compare the two:

$$6.30 < 12.60$$

The higher rate produces the shorter doubling time, not the longer one, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 27,
    solution_overview: `A real estate investment trust places \\$18,000 into a reserve account earning continuous compounding at a nominal annual rate of 5.5%, and wants to know how long it will take the balance to double, and what happens after three such doubling periods.

**Part 1: Setup.**

$S_0 = \\$18,000$

Nominal annual rate r = 5.5% = 0.055 (and 11% for part c)

Compounding: continuous

Target: $S(t) = 2 S_0$

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

Doubling time: $e^{rt} = 2 \\Rightarrow t = \\ln(2)/r$

**Part 3: Solve.**

**1.** $\\ln(2) = 0.693147$.

**2.** $t = 0.693147 / 0.055 = 12.6027$ years.

**3.** At $11\\%$: $t = 0.693147 / 0.11 = 6.3013$ years, which is half of $12.6027$, not unchanged.

**4.** $S(12.6027) = 18,000 \\times e^{0.055 \\times 12.6027} = 18,000 \\times e^{0.693147} = 18,000 \\times 2 = \\$36,000.00$.

**5.** After $3$ doubling periods ($37.8080$ years), the growth factor is $2 \\times 2 \\times 2 = 8$, so $S = 18,000 \\times 8 = \\$144,000.00$, not $6 \\times 18,000 = \\$108,000.00$.`,
  },
  {
    id: `math-11-28`,
    case_id: `MATH 11.28`,
    title: `Time for a Stamping Press to Lose Value Under Continuous Depreciation`,
    subsection: `11.2`,
    context: `A manufacturing plant's stamping press has an initial value of \\$120,000 and depreciates continuously at an annual rate of 18% with δ = 0.18. Management wants to know how long it will take for the press to lose 60% of its original value, retaining only 40%, and how that compares to a slower depreciation scenario and to losing a larger share of value.`,
    statements: [
      `Setting $v_0 \\times e^{-\\delta t} = 0.40 v_0$ and solving gives t = ln(2.5)/δ.`,
      `The press will have lost 60% of its value after approximately 5.09 years.`,
      `At that point, the press's remaining value is approximately \\$48,000.00.`,
      `If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.`,
      `The time to lose 80% of the value is longer than the time to lose 60% of the value.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) Setting $v_0 \\times e^{-\\delta t} = 0.40 v_0$ and solving gives t = ln(2.5)/δ.**  (true)

The press keeps only 40% of its value once it has lost 60%, so the condition on the time $t$ is

$$v_0 e^{-\\delta t} = 0.40\\, v_0$$

The initial value appears on both sides and is positive, so divide it out:

$$e^{-\\delta t} = 0.40$$

Take natural logarithms of both sides:

$$-\\delta t = \\ln(0.40)$$

Multiply through by $-1$ and use $-\\ln(0.40) = \\ln(1/0.40) = \\ln(2.5)$:

$$\\delta t = \\ln(2.5)$$

Divide by the depreciation rate:

$$t = \\frac{\\ln(2.5)}{\\delta}$$

That is exactly the formula named in the claim, so the statement is true.`,
      `**B) The press will have lost 60% of its value after approximately 5.09 years.**  (true)

Losing 60% leaves 40% of the original value, so the time solves

$$e^{-\\delta t} = 0.40$$

Taking natural logarithms and rearranging gives

$$t = \\frac{\\ln(2.5)}{\\delta}$$

The press depreciates continuously at $\\delta = 18\\% = 0.18$, and $\\ln(2.5) \\approx 0.916291$:

$$t = \\frac{0.916291}{0.18}$$

$$t \\approx 5.09 \\text{ years}$$

The claim names approximately 5.09 years and the computation gives 5.09 years, so the statement is true.`,
      `**C) At that point, the press's remaining value is approximately \\$48,000.00.**  (true)

The value left at time $t$ follows

$$v(t) = v_0 e^{-\\delta t}$$

The moment in question is defined by having lost 60% of the value, which means the decay factor equals $0.40$. Substitute that factor and the initial value $v_0 = 120,000$ dollars:

$$v(t) = 120,000 \\times 0.40$$

$$v(t) = 48,000.00$$

A direct check at $t \\approx 5.0905$ years agrees:

$$e^{-0.18 \\times 5.0905} = e^{-0.916291} \\approx 0.400000$$

The claim names approximately \\$48,000.00 and the computed remaining value is \\$48,000.00, so the statement is true.`,
      `**D) If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.**  (true)

The time to reach a fixed remaining fraction is

$$t = \\frac{\\ln(2.5)}{\\delta}$$

with $\\ln(2.5) \\approx 0.916291$ fixed by the 40% target. At the press's actual rate $\\delta = 0.18$:

$$t = \\frac{0.916291}{0.18} \\approx 5.09 \\text{ years}$$

At the halved rate $\\delta' = 9\\% = 0.09$:

$$t' = \\frac{0.916291}{0.09}$$

$$t' \\approx 10.18 \\text{ years}$$

Because the rate sits in the denominator, halving it doubles the time exactly:

$$2 \\times 5.09 = 10.18$$

The claim names approximately 10.18 years and the computation gives 10.18 years, so the statement is true.`,
      `**E) The time to lose 80% of the value is longer than the time to lose 60% of the value.**  (true)

The time to reach a remaining fraction $f$ of the original value is

$$t = \\frac{\\ln(1/f)}{\\delta}$$

Losing 60% leaves $f = 0.40$, so $1/f = 2.5$ and $\\ln(2.5) \\approx 0.916291$:

$$t_{60} = \\frac{0.916291}{0.18}$$

$$t_{60} \\approx 5.09 \\text{ years}$$

Losing 80% leaves $f = 0.20$, so $1/f = 5$ and $\\ln(5) \\approx 1.609438$:

$$t_{80} = \\frac{1.609438}{0.18}$$

$$t_{80} \\approx 8.94 \\text{ years}$$

Compare the two times:

$$8.94 > 5.09$$

Giving up a larger share of value takes about 3.85 years longer, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 28,
    solution_overview: `A manufacturing plant's stamping press has an initial value of \\$120,000 and depreciates continuously at an annual rate of 18% with δ = 0.18. Management wants to know how long it will take for the press to lose 60% of its original value, retaining only 40%, and how that compares to a slower depreciation scenario and to losing a larger share of value.

**Part 1: Setup.**

$v_0 = \\$120,000$

Annual depreciation rate δ = 18% = 0.18 (and 9% for part d)

Compounding: continuous

Target: v(t) = 0.40 $v_0$ (and 0.20 $v_0$ for part e)

**Part 2: Formula.**

Value: $v(t) = v_0 e^{-\\delta t}$

Fraction remaining equals $e^{-\\delta t}$

Time for a given fraction $f$: $t = -\\ln(f)/\\delta = \\ln(1/f)/\\delta$

**Part 3: Solve.**

**1.** $1/0.40 = 2.5$, and $\\ln(2.5) = 0.916291$.

**2.** $t = 0.916291 / 0.18 = 5.0905$ years.

**3.** $v(5.0905) = 120,000 \\times 0.40 = \\$48,000.00$.

**4.** At $\\delta = 0.09$: $t = 0.916291 / 0.09 = 10.1810$ years, which is indeed double $5.0905$ years, since halving $\\delta$ doubles $t$.

**5.** For $80\\%$ loss (retain $20\\%$): $1/0.20 = 5$, $\\ln(5) = 1.609438$.

**6.** $t = 1.609438 / 0.18 = 8.9413$ years, which is longer than $5.0905$ years.`,
  },
  {
    id: `math-11-29`,
    case_id: `MATH 11.29`,
    title: `How the Continuous-vs-Annual Gap Widens With Rate and Time at a Regional Bank`,
    subsection: `11.2`,
    context: `A regional bank's marketing team wants to demonstrate to clients how the dollar gap between continuous compounding and ordinary annual compounding changes with the interest rate and the holding period. It compares nominal rates of 3% and 15%, each applied for 1 year to a \\$25,000 deposit, and then extends the 3% case to an 8-year horizon.`,
    statements: [
      `At a 3% nominal rate over 1 year, the gap between continuous and annual compounding on \\$25,000 is approximately \\$11.36.`,
      `At a 15% nominal rate over 1 year, the gap between continuous and annual compounding on \\$25,000 is approximately \\$295.86.`,
      `The 1-year gap at 15% is more than 30 times larger than the 1-year gap at 3%.`,
      `Extending the 3% comparison from 1 year to 8 years increases the dollar gap to approximately \\$111.98.`,
      `Continuous compounding becomes less advantageous to the lender over longer holding periods.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) At a 3% nominal rate over 1 year, the gap between continuous and annual compounding on \\$25,000 is approximately \\$11.36.**  (true)

The gap is the continuously compounded balance minus the annually compounded balance:

$$\\Delta = P e^{rt} - P(1 + r)^{t}$$

The deposit is $P = 25,000$ dollars at $r = 3\\% = 0.03$ for $t = 1$ year. The continuous side uses the exponential factor:

$$e^{0.03} \\approx 1.0304545$$

$$S_{\\mathrm{cont}} \\approx 25,000 \\times 1.0304545$$

$$S_{\\mathrm{cont}} \\approx 25,761.36$$

The annual side applies the rate once:

$$S_{\\mathrm{ann}} = 25,000 \\times 1.03$$

$$S_{\\mathrm{ann}} = 25,750.00$$

Subtract one balance from the other:

$$\\Delta \\approx 25,761.36 - 25,750.00$$

$$\\Delta \\approx 11.36$$

The claim names approximately \\$11.36 and the computed gap is \\$11.36, so the statement is true.`,
      `**B) At a 15% nominal rate over 1 year, the gap between continuous and annual compounding on \\$25,000 is approximately \\$295.86.**  (true)

The same comparison runs at the higher rate:

$$\\Delta = P e^{rt} - P(1 + r)^{t}$$

The deposit is $P = 25,000$ dollars at $r = 15\\% = 0.15$ for $t = 1$ year. The continuous side is

$$e^{0.15} \\approx 1.1618342$$

$$S_{\\mathrm{cont}} \\approx 25,000 \\times 1.1618342$$

$$S_{\\mathrm{cont}} \\approx 29,045.86$$

The annual side is

$$S_{\\mathrm{ann}} = 25,000 \\times 1.15$$

$$S_{\\mathrm{ann}} = 28,750.00$$

Subtract:

$$\\Delta \\approx 29,045.86 - 28,750.00$$

$$\\Delta \\approx 295.86$$

The claim names approximately \\$295.86 and the computed gap is \\$295.86, so the statement is true.`,
      `**C) The 1-year gap at 15% is more than 30 times larger than the 1-year gap at 3%.**  (false)

The claim is a ratio of two gaps, so both are computed on the same \\$25,000 deposit from

$$\\Delta = P e^{r} - P(1 + r)$$

At $r = 0.03$, using $e^{0.03} \\approx 1.0304545$:

$$\\Delta_{3} \\approx 25,761.36 - 25,750.00 = 11.36$$

At $r = 0.15$, using $e^{0.15} \\approx 1.1618342$:

$$\\Delta_{15} \\approx 29,045.86 - 28,750.00 = 295.86$$

Form the ratio the claim describes:

$$\\frac{\\Delta_{15}}{\\Delta_{3}} \\approx \\frac{295.86}{11.36}$$

$$\\approx 26.04$$

Compare with the multiple named in the claim:

$$26.04 < 30$$

The larger gap is about 26 times the smaller one rather than more than 30 times, so the statement is false.`,
      `**D) Extending the 3% comparison from 1 year to 8 years increases the dollar gap to approximately \\$111.98.**  (true)

The gap at any horizon is the continuous balance minus the annual balance:

$$\\Delta = P e^{rt} - P(1 + r)^{t}$$

The deposit is $P = 25,000$ dollars at $r = 0.03$, now held for $t = 8$ years, so the continuous exponent is

$$rt = 0.03 \\times 8 = 0.24$$

Evaluate the continuous side:

$$e^{0.24} \\approx 1.2712492$$

$$S_{\\mathrm{cont}} \\approx 25,000 \\times 1.2712492 \\approx 31,781.23$$

Evaluate the annual side:

$$(1.03)^{8} \\approx 1.2667701$$

$$S_{\\mathrm{ann}} \\approx 25,000 \\times 1.2667701 \\approx 31,669.25$$

Subtract:

$$\\Delta_{8} \\approx 31,781.23 - 31,669.25$$

$$\\Delta_{8} \\approx 111.98$$

The claim names approximately \\$111.98 and the computed eight-year gap is \\$111.98, so the statement is true.`,
      `**E) Continuous compounding becomes less advantageous to the lender over longer holding periods.**  (false)

The advantage of continuous compounding over annual compounding is

$$\\Delta = P e^{rt} - P(1 + r)^{t}$$

and testing it at two horizons on the same \\$25,000 deposit at $r = 0.03$ settles the direction. Over one year:

$$\\Delta_{1} \\approx 25,000 \\times 1.0304545 - 25,000 \\times 1.03$$

$$\\Delta_{1} \\approx 25,761.36 - 25,750.00 = 11.36$$

Over eight years:

$$\\Delta_{8} \\approx 25,000 \\times 1.2712492 - 25,000 \\times 1.2667701$$

$$\\Delta_{8} \\approx 31,781.23 - 31,669.25 = 111.98$$

Compare the two gaps:

$$111.98 > 11.36$$

$$\\frac{111.98}{11.36} \\approx 9.86$$

The advantage grows by nearly a factor of ten as the horizon lengthens, so continuous compounding becomes more advantageous rather than less and the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 29,
    solution_overview: `A regional bank's marketing team wants to demonstrate to clients how the dollar gap between continuous compounding and ordinary annual compounding changes with the interest rate and the holding period. It compares nominal rates of 3% and 15%, each applied for 1 year to a \\$25,000 deposit, and then extends the 3% case to an 8-year horizon.

**Part 1: Setup.**

$P = \\$25,000$

Nominal annual rates r = 3% and r = 15%

Compounding: continuous vs. annual (m = 1)

t = 1 year (and 8 years for part d, e)

**Part 2: Formula.**

$S_{\\mathrm{cont}} = P \\times e^{rt}$

$S_{\\mathrm{annual}} = P \\times (1+r)^{t}$

**Part 3: Solve.**

**1.** At $3\\%$, $1$ yr: $S_{\\mathrm{cont}} = 25,000 \\times e^{0.03} = \\$25,761.36$.

**2.** $S_{\\mathrm{annual}} = 25,000 \\times 1.03 = \\$25,750.00$.

**3.** Gap: $\\$11.36$.

**4.** At $15\\%$, $1$ yr: $S_{\\mathrm{cont}} = 25,000 \\times e^{0.15} = \\$29,045.86$.

**5.** $S_{\\mathrm{annual}} = 25,000 \\times 1.15 = \\$28,750.00$.

**6.** Gap: $\\$295.86$.

**7.** Ratio: $295.86 / 11.36 \\approx 26.04$, which is less than $30$.

**8.** At $3\\%$, $8$ yrs: $S_{\\mathrm{cont}} = 25,000 \\times e^{0.24} = \\$31,781.23$.

**9.** $S_{\\mathrm{annual}}(8) = 25,000 \\times (1.03)^{8} = 25,000 \\times 1.266770 = \\$31,669.25$.

**10.** $8$-year gap: $31,781.23 - 31,669.25 = \\$111.98$.`,
  },
  {
    id: `math-11-30`,
    case_id: `MATH 11.30`,
    title: `Continuous Compounding as the Ceiling on a Fund's Return at an Investment Advisory Firm`,
    subsection: `11.2`,
    context: `An investment advisory firm is evaluating a \\$400,000 allocation and comparing two funds that both quote a nominal annual rate of 9.5%: Fund A compounds continuously, while Fund B compounds monthly. The firm also wants to check whether switching Fund B to daily compounding could ever let it catch up to or overtake Fund A.`,
    statements: [
      `Fund A's continuous year-end value is approximately \\$439,863.54.`,
      `Fund B's monthly year-end value is approximately \\$439,750.00.`,
      `The maximum possible effective annual rate obtainable at a 9.5% nominal rate, under any compounding frequency, is approximately 9.50% - the same as the nominal rate itself.`,
      `If Fund B switched to daily compounding, its year-end value would exceed Fund A's continuous-compounding value.`,
      `The dollar gap between Fund A and Fund B narrows when Fund B switches from monthly to daily compounding.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) Fund A's continuous year-end value is approximately \\$439,863.54.**  (true)

Continuous compounding grows an allocation by the exponential factor:

$$S_A = P e^{rt}$$

The firm places $P = 400,000$ dollars at a nominal $r = 9.5\\% = 0.095$ for $t = 1$ year, so the exponent is $rt = 0.095$:

$$S_A = 400,000 \\times e^{0.095}$$

Evaluate the growth factor:

$$e^{0.095} \\approx 1.09965886$$

Multiply by the allocation:

$$S_A \\approx 400,000 \\times 1.09965886$$

$$S_A \\approx 439,863.54$$

The claim names approximately \\$439,863.54 and the computed year-end value is \\$439,863.54, so the statement is true.`,
      `**B) Fund B's monthly year-end value is approximately \\$439,750.00.**  (false)

Monthly compounding uses the periodic form of the growth rule:

$$S_B = P\\left(1 + \\frac{i}{m}\\right)^{mt}$$

With $P = 400,000$ dollars, $i = 0.095$, $m = 12$ and $t = 1$ year, the monthly periodic rate is

$$\\frac{0.095}{12} \\approx 0.0079167$$

Raise that factor to the twelfth power:

$$(1.0079167)^{12} \\approx 1.09924758$$

Multiply by the allocation:

$$S_B \\approx 400,000 \\times 1.09924758$$

$$S_B \\approx 439,699.03$$

Compare with the figure named in the claim:

$$439,699.03 \\neq 439,750.00$$

The true monthly value sits about \\$50.97 below the claim, so the statement is false.`,
      `**C) The maximum possible effective annual rate obtainable at a 9.5% nominal rate, under any compounding frequency, is approximately 9.50% - the same as the nominal rate itself.**  (false)

For a fixed nominal rate the effective annual rate rises with compounding frequency, and its limit as the frequency grows without bound is the continuous case:

$$\\mathrm{EAR}_{\\max} = e^{r} - 1$$

With $r = 9.5\\% = 0.095$:

$$e^{0.095} \\approx 1.09965886$$

$$\\mathrm{EAR}_{\\max} \\approx 0.09965886$$

$$\\mathrm{EAR}_{\\max} \\approx 9.97\\%$$

Compare with the ceiling named in the claim:

$$9.97\\% \\neq 9.50\\%$$

The nominal and effective rates coincide only under annual compounding, where $m = 1$:

$$\\left(1 + \\frac{0.095}{1}\\right)^{1} - 1 = 9.50\\%$$

That figure is the bottom of the range rather than its ceiling, which stands about 0.47 percentage points higher, so the statement is false.`,
      `**D) If Fund B switched to daily compounding, its year-end value would exceed Fund A's continuous-compounding value.**  (false)

Daily compounding is still a finite frequency, so it uses the periodic rule:

$$S = P\\left(1 + \\frac{i}{m}\\right)^{mt}$$

With $P = 400,000$ dollars, $i = 0.095$, $m = 365$ and $t = 1$ year:

$$\\left(1 + \\frac{0.095}{365}\\right)^{365} \\approx 1.09964526$$

$$S_{\\mathrm{daily}} \\approx 400,000 \\times 1.09964526$$

$$S_{\\mathrm{daily}} \\approx 439,858.10$$

Fund A compounds continuously:

$$S_A = 400,000 \\times e^{0.095} \\approx 400,000 \\times 1.09965886 \\approx 439,863.54$$

Compare the two year-end values:

$$439,858.10 < 439,863.54$$

The factor $(1 + i/m)^{m}$ climbs toward $e^{i}$ as $m$ grows but never reaches it, so daily compounding stays about \\$5.44 short and the statement is false.`,
      `**E) The dollar gap between Fund A and Fund B narrows when Fund B switches from monthly to daily compounding.**  (true)

Fund A's value is fixed by continuous compounding on the \\$400,000 allocation:

$$S_A = 400,000 \\times e^{0.095}$$

$$e^{0.095} \\approx 1.09965886$$

$$S_A \\approx 439,863.54$$

With monthly compounding, $m = 12$ and the periodic rate is $0.095/12 \\approx 0.0079167$:

$$(1.0079167)^{12} \\approx 1.09924758$$

$$S_B \\approx 400,000 \\times 1.09924758 \\approx 439,699.03$$

$$439,863.54 - 439,699.03 = 164.51$$

With daily compounding, $m = 365$:

$$\\left(1 + \\frac{0.095}{365}\\right)^{365} \\approx 1.09964526$$

$$S_{\\mathrm{daily}} \\approx 439,858.10$$

$$439,863.54 - 439,858.10 = 5.44$$

Compare the two gaps:

$$5.44 < 164.51$$

The gap shrinks because $(1 + i/m)^{m}$ approaches $e^{i}$ as $m$ grows, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 30,
    solution_overview: `An investment advisory firm is evaluating a \\$400,000 allocation and comparing two funds that both quote a nominal annual rate of 9.5%: Fund A compounds continuously, while Fund B compounds monthly. The firm also wants to check whether switching Fund B to daily compounding could ever let it catch up to or overtake Fund A.

**Part 1: Setup.**

$P = \\$400,000$

Nominal annual rate r = i = 9.5% = 0.095

Fund A: continuous compounding

Fund B: m = 12 (monthly); part d, e also consider m = 365 (daily)

t = 1 year

**Part 2: Formula.**

$S_A = P \\times e^{rt}$

$S_B = P \\times (1+i/m)^{mt}$

$EAR_{\\mathrm{max}} = e^{r} - 1$

**Part 3: Solve.**

**1.** Fund A: $S_A = 400,000 \\times e^{0.095} = 400,000 \\times 1.0996589 = \\$439,863.54$.

**2.** Fund B (monthly) periodic rate: $0.095/12 = 0.0079167$.

**3.** $S_B = 400,000 \\times (1.0079167)^{12} = 400,000 \\times 1.0992476 = \\$439,699.03$, not $\\$439,750.00$.

**4.** $EAR_{\\mathrm{max}} = e^{0.095} - 1 \\approx 9.97\\%$, which exceeds the $9.50\\%$ nominal rate; it is not equal to it.

**5.** Fund B (daily): $S_{\\mathrm{daily}} = 400,000 \\times (1 + 0.095/365)^{365} = 400,000 \\times 1.0996453 = \\$439,858.10$, which is still below $S_A = \\$439,863.54$.

**6.** Gap (continuous vs monthly): $439,863.54 - 439,699.03 = \\$164.51$.

**7.** Gap (continuous vs daily): $439,863.54 - 439,858.10 = \\$5.44$, which is narrower than the monthly gap of $\\$164.51$.`,
  },
  {
    id: `math-11-31`,
    case_id: `MATH 11.31`,
    title: `Reverse-Engineering the Implied Rate of a Boutique Winery's Futures Fund`,
    subsection: `11.2`,
    context: `A boutique winery's grape futures fund grew continuously, at an unstated nominal annual rate, from \\$28,000 to \\$34,200 over the past 3 years. The fund manager wants to determine the implied rate and then project the fund's value 2 further years into the future, for 5 years from the start.`,
    statements: [
      `The implied nominal continuously-compounded rate is approximately 6.67%.`,
      `Using this implied rate, the projected value 5 years from the start, 2 years beyond the observed data, is approximately \\$39,078.52.`,
      `A naive straight-line projection - extending the average dollar increase observed over the first 3 years for 2 more years - gives the same result as the correct exponential projection.`,
      `At the implied rate, the fund's value would double from its original \\$28,000 in approximately 12.40 years.`,
      `If the implied rate had instead been exactly 6.00%, the 3-year value would exceed the actual observed \\$34,200.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The implied nominal continuously-compounded rate is approximately 6.67%.**  (true)

Continuous growth over a known horizon is described by the exponential accumulation rule, and an unstated rate is recovered by inverting that rule. Start from the growth law:

$$S(t) = S_0 e^{rt}$$

Divide both sides by $S_0$ and take natural logarithms to bring the rate down out of the exponent:

$$r = \\frac{\\ln(S(t)/S_0)}{t}$$

The fund grew from $S_0 = 28,000$ to $S(3) = 34,200$ over $t = 3$ years, so substitute those three figures:

$$r = \\frac{\\ln(34,200/28,000)}{3}$$

$$= \\frac{\\ln(1.221429)}{3}$$

$$= \\frac{0.200021}{3} \\approx 0.066674$$

Written as a percentage, the implied nominal continuously compounded rate is $6.6674\\%$ per year, which rounds to $6.67\\%$. The claim gives approximately 6.67%, and the computed rate agrees to two decimal places, so the statement is true.`,
      `**B) Using this implied rate, the projected value 5 years from the start, 2 years beyond the observed data, is approximately \\$39,078.52.**  (true)

Projecting the fund forward uses the same continuous accumulation rule, applied from the original principal across the full 5-year span rather than only the observed 3 years:

$$S(t) = S_0 e^{rt}$$

The rate is the one implied by the observed leg of the history, recovered by inverting the same law over $t = 3$:

$$r = \\frac{\\ln(34,200/28,000)}{3} = \\frac{0.200021}{3} \\approx 0.066674$$

Now substitute $S_0 = 28,000$, $r \\approx 0.066674$, and $t = 5$ years:

$$S(5) = 28,000 \\times e^{0.066674 \\times 5}$$

$$= 28,000 \\times e^{0.333370}$$

$$e^{0.333370} \\approx 1.395661$$

$$S(5) \\approx 28,000 \\times 1.395661 = 39,078.52$$

The claim puts the year-5 value at approximately \\$39,078.52, and the computed projection lands on that same figure to the cent, so the statement is true.`,
      `**C) A naive straight-line projection - extending the average dollar increase observed over the first 3 years for 2 more years - gives the same result as the correct exponential projection.**  (false)

Two different projection rules are on the table here, so both have to be carried out from the same observed data and then compared. A straight-line projection adds a fixed number of dollars each year, and that fixed amount is the average annual gain already observed:

$$\\text{average annual gain} = \\frac{S(3) - S_0}{3}$$

Substituting the two observed endpoints:

$$= \\frac{34,200 - 28,000}{3}$$

$$= \\frac{6,200}{3} \\approx 2,066.67 \\text{ per year}$$

Extending that fixed dollar increment for 2 more years past the observed \\$34,200 balance:

$$34,200 + 2 \\times 2,066.67 = 38,333.33$$

The correct exponential projection instead holds the percentage rate fixed. The implied rate is recovered from the observed leg:

$$r = \\frac{\\ln(34,200/28,000)}{3} = \\frac{0.200021}{3} \\approx 0.066674$$

Applying that rate from the original principal over the full 5 years:

$$S(5) = 28,000 \\times e^{0.066674 \\times 5} = 28,000 \\times e^{0.333370}$$

$$e^{0.333370} \\approx 1.395661$$

$$S(5) \\approx 39,078.52$$

Now compare the two projected balances:

$$39,078.52 - 38,333.33 = 745.19$$

The straight-line figure sits \\$745.19 below the exponential figure, because exponential growth keeps applying the percentage to an ever larger base while the linear rule freezes the dollar increment at its old average. The two methods do not agree, so the statement is false.`,
      `**D) At the implied rate, the fund's value would double from its original \\$28,000 in approximately 12.40 years.**  (false)

Doubling time under continuous compounding comes from asking when the accumulation factor reaches 2. Set $S(t) = 2S_0$ in the growth law:

$$S_0 e^{rt} = 2 S_0$$

Cancel $S_0$ and take natural logarithms of both sides:

$$rt = \\ln 2$$

$$t = \\frac{\\ln 2}{r}$$

The implied rate for this fund is $r = \\ln(34,200/28,000)/3 \\approx 0.066674$ per year, so substitute that value:

$$t = \\frac{0.693147}{0.066674}$$

$$\\approx 10.3961 \\text{ years}$$

The claim puts the doubling time at approximately 12.40 years, while the correct figure is about 10.40 years, a gap of roughly 2 years. The stated doubling time is too long, so the statement is false.`,
      `**E) If the implied rate had instead been exactly 6.00%, the 3-year value would exceed the actual observed \\$34,200.00.**  (false)

This is a what-if check, so the 3-year value has to be recomputed from scratch using the assumed rate rather than the implied one. The accumulation rule is:

$$S(t) = S_0 e^{rt}$$

Substitute $S_0 = 28,000$, the assumed $r = 6.00\\% = 0.06$, and $t = 3$ years:

$$S(3) = 28,000 \\times e^{0.06 \\times 3}$$

$$= 28,000 \\times e^{0.18}$$

$$e^{0.18} \\approx 1.197217$$

$$S(3) \\approx 28,000 \\times 1.197217 = 33,522.09$$

Now compare that hypothetical balance with the value actually observed after 3 years:

$$33,522.09 - 34,200.00 = -677.91$$

A 6.00% rate produces \\$33,522.09, which is \\$677.91 below the observed \\$34,200.00, not above it. That is exactly what should be expected, since 6.00% is smaller than the 6.67% the data actually imply and a slower assumed rate cannot manufacture a larger balance. The statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 31,
    solution_overview: `A boutique winery's grape futures fund grew continuously, at an unstated nominal annual rate, from \\$28,000 to \\$34,200 over the past 3 years. The fund manager wants to determine the implied rate and then project the fund's value 2 further years into the future, for 5 years from the start.

**Part 1: Setup.**

$S_0 = \\$28,000$

$S(3) = \\$34,200$ (observed)

Compounding: continuous

t = 3 years (observed); project to t = 5 years

**Part 2: Formula.**

$S(t) = S_0 e^{rt} \\Rightarrow r = \\ln(S(t)/S_0)/t$

Doubling time: $t = \\ln(2)/r$

**Part 3: Solve.**

**1.** $r = \\ln(34,200/28,000)/3 = \\ln(1.221429)/3 = 0.200034/3 = 0.066674 \\approx 6.67\\%$.

**2.** $S(5) = 28,000 \\times e^{0.066674 \\times 5} = 28,000 \\times e^{0.333368} = 28,000 \\times 1.395661 = \\$39,078.52$.

**3.** Average dollar increase over $3$ years: $(34,200 - 28,000)/3 = \\$2,066.67$/year.

**4.** Naive linear projection: $34,200 + 2 \\times 2,066.67 = \\$38,333.33$, which does not equal $\\$39,078.52$.

**5.** Doubling time: $\\ln(2)/0.066674 = 0.693147/0.066674 \\approx 10.3961$ years.

**6.** At $r = 6.00\\%$: $S(3) = 28,000 \\times e^{0.18} = 28,000 \\times 1.197217 = \\$33,522.09$, which is LOWER than the actual observed $\\$34,200.00$, not higher.`,
  },
  {
    id: `math-11-32`,
    case_id: `MATH 11.32`,
    title: `A Corporate Treasurer's Three-Bank Comparison With Differing Nominal Rates`,
    subsection: `11.2`,
    context: `A corporate treasurer is placing \\$60,000 for 2 years and compares three offers: Bank X compounds continuously at a nominal annual rate of 6.8%; Bank Y compounds monthly at a nominal annual rate of 6.9%; Bank Z compounds quarterly at a nominal annual rate of 7.0%.`,
    statements: [
      `Bank X's 2-year value is approximately \\$68,740.91.`,
      `Bank Y's 2-year value is approximately \\$68,851.32.`,
      `Bank Z's 2-year value is approximately \\$68,932.91.`,
      `Despite compounding continuously, Bank X's value is actually the lowest of the three offers.`,
      `If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) Bank X's 2-year value is approximately \\$68,740.91.**  (true)

Continuous compounding accumulates a principal by the exponential factor $e^{rt}$, with the nominal annual rate entering directly in the exponent:

$$S = P e^{rt}$$

Bank X quotes a nominal annual rate of $6.8\\%$ and compounds continuously, so substitute $P = 60,000$, $r = 0.068$, and $t = 2$ years:

$$S_X = 60,000 \\times e^{0.068 \\times 2}$$

$$= 60,000 \\times e^{0.136}$$

$$e^{0.136} \\approx 1.145682$$

$$S_X \\approx 60,000 \\times 1.145682 = 68,740.91$$

The claim states approximately \\$68,740.91 for Bank X after 2 years, and the computed accumulation matches that figure to the cent, so the statement is true.`,
      `**B) Bank Y's 2-year value is approximately \\$68,851.32.**  (true)

Discrete compounding divides the nominal annual rate by the number of periods per year and raises the resulting growth factor to the total number of periods:

$$S = P\\left(1 + \\frac{i}{m}\\right)^{mt}$$

Bank Y compounds monthly, so $m = 12$ and the periodic rate is:

$$\\frac{i}{m} = \\frac{0.069}{12} = 0.00575$$

Over $t = 2$ years there are $mt = 12 \\times 2 = 24$ compounding periods. Substitute $P = 60,000$:

$$S_Y = 60,000 \\times (1.00575)^{24}$$

$$(1.00575)^{24} \\approx 1.147522$$

$$S_Y \\approx 60,000 \\times 1.147522 = 68,851.32$$

The claim gives approximately \\$68,851.32 for Bank Y after 2 years, which is exactly the computed balance, so the statement is true.`,
      `**C) Bank Z's 2-year value is approximately \\$68,932.91.**  (true)

Bank Z compounds quarterly, so the same discrete compounding rule applies with four periods per year:

$$S = P\\left(1 + \\frac{i}{m}\\right)^{mt}$$

The quarterly periodic rate is the nominal annual rate divided by 4:

$$\\frac{i}{m} = \\frac{0.070}{4} = 0.0175$$

Over $t = 2$ years there are $mt = 4 \\times 2 = 8$ quarters. Substitute $P = 60,000$:

$$S_Z = 60,000 \\times (1.0175)^{8}$$

$$(1.0175)^{8} \\approx 1.148882$$

$$S_Z \\approx 60,000 \\times 1.148882 = 68,932.91$$

The claim puts Bank Z's 2-year value at approximately \\$68,932.91, and the computed figure lands on exactly that amount, so the statement is true.`,
      `**D) Despite compounding continuously, Bank X's value is actually the lowest of the three offers.**  (true)

Deciding which offer is smallest requires all three balances on the table, each computed with its own compounding rule. Bank X compounds continuously:

$$S_X = 60,000 \\times e^{0.068 \\times 2} = 60,000 \\times e^{0.136}$$

$$\\approx 60,000 \\times 1.145682 = 68,740.91$$

Bank Y compounds monthly, with periodic rate $0.069/12 = 0.00575$ over 24 periods:

$$S_Y = 60,000 \\times (1.00575)^{24}$$

$$\\approx 60,000 \\times 1.147522 = 68,851.32$$

Bank Z compounds quarterly, with periodic rate $0.070/4 = 0.0175$ over 8 periods:

$$S_Z = 60,000 \\times (1.0175)^{8}$$

$$\\approx 60,000 \\times 1.148882 = 68,932.91$$

Line the three up from smallest to largest:

$$68,740.91 < 68,851.32 < 68,932.91$$

Bank X does finish last. The frequency advantage of continuous compounding only wins when the nominal rates are equal, and here Bank X carries the lowest rate at $6.8\\%$ against $6.9\\%$ and $7.0\\%$, a gap the extra compounding frequency cannot close. The statement is true.`,
      `**E) If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.**  (true)

This is a what-if comparison, so Bank X has to be recomputed at the new rate and then set against Bank Z's actual balance. With continuous compounding the rule is:

$$S = P e^{rt}$$

Substitute $P = 60,000$, the matched rate $r = 0.070$, and $t = 2$ years:

$$S_X' = 60,000 \\times e^{0.070 \\times 2}$$

$$= 60,000 \\times e^{0.14}$$

$$e^{0.14} \\approx 1.150274$$

$$S_X' \\approx 60,000 \\times 1.150274 = 69,016.43$$

Bank Z's balance comes from quarterly compounding at the same $7.0\\%$ nominal rate:

$$S_Z = 60,000 \\times (1.0175)^{8} \\approx 68,932.91$$

Compare the two:

$$69,016.43 - 68,932.91 = 83.52$$

At a matched nominal rate the continuously compounded account finishes \\$83.52 ahead, which is the standard result that $e^{r} > (1 + r/m)^{m}$ for any finite $m$. Bank X would indeed exceed Bank Z, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 32,
    solution_overview: `A corporate treasurer is placing \\$60,000 for 2 years and compares three offers: Bank X compounds continuously at a nominal annual rate of 6.8%; Bank Y compounds monthly at a nominal annual rate of 6.9%; Bank Z compounds quarterly at a nominal annual rate of 7.0%.

**Part 1: Setup.**

$P = \\$60,000$

Bank X: r = 6.8% = 0.068, continuous

Bank Y: i = 6.9% = 0.069, m = 12 (monthly)

Bank Z: i = 7.0% = 0.070, m = 4 (quarterly)

t = 2 years

**Part 2: Formula.**

$S_X = P \\times e^{rt}$

$S_Y = P(1+i/12)^{12t}$

$S_Z = P(1+i/4)^{4t}$

**Part 3: Solve.**

**1.** $S_X = 60,000 \\times e^{0.068 \\times 2} = 60,000 \\times e^{0.136} = 60,000 \\times 1.145682 = \\$68,740.91$.

**2.** $S_Y = 60,000 \\times (1 + 0.069/12)^{24} = 60,000 \\times (1.00575)^{24} = 60,000 \\times 1.147522 = \\$68,851.32$.

**3.** $S_Z = 60,000 \\times (1 + 0.070/4)^{8} = 60,000 \\times (1.0175)^{8} = 60,000 \\times 1.148882 = \\$68,932.91$.

**4.** Ordering the three results: $\\$68,740.91$ (X) $< \\$68,851.32$ (Y) $< \\$68,932.91$ (Z), so Bank X is actually the LOWEST, not the highest.

**5.** If Bank X's rate were $7.0\\%$ instead of $6.8\\%$: $S_X' = 60,000 \\times e^{0.070 \\times 2} = 60,000 \\times e^{0.14} = 60,000 \\times 1.150274 = \\$69,016.44$, which does exceed Bank Z's $\\$68,932.91$.`,
  },
  {
    id: `math-11-33`,
    case_id: `MATH 11.33`,
    title: `Net Growth Rate of a Hedge Fund After a Continuous Management Fee Drag`,
    subsection: `11.2`,
    context: `A hedge fund's gross asset value of \\$2,000,000 grows continuously at a nominal annual rate of 9%, but the fund also deducts a continuous annual management fee of 2%, which acts as a constant drag on the growth rate.`,
    statements: [
      `The net continuous growth rate, combining the 9% gross return and the 2% fee drag, is 11% per year.`,
      `After 6 years, the net asset value is approximately \\$3,100,000.00.`,
      `At this net rate, the fund's value would double in approximately 7.00 years.`,
      `If the management fee instead rose to 3.5%, the 6-year net value would be approximately \\$2,781,936.26, and the doubling time would shorten to approximately 12.60 years.`,
      `A higher management fee always reduces both the net growth rate and the fund's cumulative value at any future date, compared to a lower fee, all else equal.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) The net continuous growth rate, combining the 9% gross return and the 2% fee drag, is 11% per year.**  (false)

A continuous management fee is charged at every instant, exactly as the gross return is credited at every instant, so the two rates act on the same exponent and the fee is a subtraction rather than an addition:

$$r_{\\mathrm{net}} = r_{\\mathrm{gross}} - r_{\\mathrm{fee}}$$

Substitute the gross return of $9\\%$ and the fee of $2\\%$:

$$r_{\\mathrm{net}} = 0.09 - 0.02$$

$$= 0.07 = 7\\%$$

The claim asserts a net rate of 11% per year, which is what would come from adding the fee to the gross return instead of deducting it:

$$0.09 + 0.02 = 0.11$$

That addition would describe a fund the fee makes grow faster, which is not what a fee does. The correct net growth rate is $7\\%$, not 11%, so the statement is false.`,
      `**B) After 6 years, the net asset value is approximately \\$3,100,000.00.**  (false)

Valuing the fund after 6 years takes two steps: first net the fee out of the gross rate, then accumulate at that net rate. The fee is continuous, so it comes straight off the exponent:

$$r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07$$

Continuous accumulation then follows the exponential rule:

$$S(t) = S_0 e^{r_{\\mathrm{net}} t}$$

Substitute $S_0 = 2,000,000$, $r_{\\mathrm{net}} = 0.07$, and $t = 6$ years:

$$S(6) = 2,000,000 \\times e^{0.07 \\times 6}$$

$$= 2,000,000 \\times e^{0.42}$$

$$e^{0.42} \\approx 1.521962$$

$$S(6) \\approx 2,000,000 \\times 1.521962 = 3,043,923.11$$

Compare that with the claimed figure:

$$3,100,000.00 - 3,043,923.11 = 56,076.89$$

The claim overstates the 6-year net asset value by about \\$56,077, so the statement is false.`,
      `**C) At this net rate, the fund's value would double in approximately 7.00 years.**  (false)

Doubling time under continuous growth comes from setting the accumulated value equal to twice the starting value:

$$S_0 e^{rt} = 2 S_0$$

Cancel $S_0$ and take natural logarithms:

$$t = \\frac{\\ln 2}{r}$$

The relevant rate here is the net rate, since the fee is deducted continuously from the gross return:

$$r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07$$

Substitute that net rate:

$$t = \\frac{0.693147}{0.07}$$

$$\\approx 9.9021 \\text{ years}$$

The claim puts the doubling time at approximately 7.00 years. The true figure is about 9.90 years, nearly 3 years longer, and the 7.00 figure looks like it came from reading the $7\\%$ rate itself as a number of years. The statement is false.`,
      `**D) If the management fee instead rose to 3.5%, the 6-year net value would be approximately \\$2,781,936.26, and the doubling time would shorten to approximately 12.60 years.**  (false)

This statement makes two separate assertions at the higher fee, so both the 6-year value and the doubling time have to be recomputed. First the new net rate:

$$r_{\\mathrm{net}}' = 0.09 - 0.035 = 0.055$$

Now accumulate for 6 years at that rate:

$$S(6)' = 2,000,000 \\times e^{0.055 \\times 6}$$

$$= 2,000,000 \\times e^{0.33}$$

$$e^{0.33} \\approx 1.390968$$

$$S(6)' \\approx 2,000,000 \\times 1.390968 = 2,781,936.26$$

That first figure matches the claim exactly. Next the doubling time at the new net rate, using $t = \\ln 2 / r$:

$$t' = \\frac{0.693147}{0.055}$$

$$\\approx 12.6027 \\text{ years}$$

The numerical value of 12.60 years is also correct, but the claim describes it as a shortening. Set it against the doubling time at the original $7\\%$ net rate:

$$t = \\frac{0.693147}{0.07} \\approx 9.9021 \\text{ years}$$

$$12.6027 - 9.9021 = 2.7006 \\text{ years}$$

The higher fee lengthens the doubling time by about 2.70 years, since a smaller net growth rate always needs more time to double a balance. The dollar figure is right but the direction of the change is wrong, and the claim has to be correct in both parts to stand. The statement is false.`,
      `**E) A higher management fee always reduces both the net growth rate and the fund's cumulative value at any future date, compared to a lower fee, all else equal.**  (true)

This is a general claim, so it is settled by the structure of the two formulas rather than by one numerical example. The net rate is the gross return minus the fee:

$$r_{\\mathrm{net}} = r_{\\mathrm{gross}} - r_{\\mathrm{fee}}$$

Holding the gross return fixed, raising $r_{\\mathrm{fee}}$ subtracts more, so the net rate falls. Writing two fee levels $r_{\\mathrm{fee}}^{H} > r_{\\mathrm{fee}}^{L}$ makes this explicit:

$$r_{\\mathrm{net}}^{H} = r_{\\mathrm{gross}} - r_{\\mathrm{fee}}^{H} < r_{\\mathrm{gross}} - r_{\\mathrm{fee}}^{L} = r_{\\mathrm{net}}^{L}$$

The fund's value at any future date is:

$$S(t) = S_0 e^{r_{\\mathrm{net}} t}$$

For any fixed $t > 0$ the exponential $e^{rt}$ is strictly increasing in $r$, so the smaller net rate produces the smaller accumulation factor:

$$S_0 e^{r_{\\mathrm{net}}^{H} t} < S_0 e^{r_{\\mathrm{net}}^{L} t}$$

The numbers in this task illustrate it: a $2\\%$ fee leaves \\$3,043,923.11 after 6 years while a $3.5\\%$ fee leaves \\$2,781,936.26. Both parts of the claim hold, the lower net rate and the smaller future value, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `A hedge fund's gross asset value of \\$2,000,000 grows continuously at a nominal annual rate of 9%, but the fund also deducts a continuous annual management fee of 2%, which acts as a constant drag on the growth rate.

**Part 1: Setup.**

$S_0 = \\$2,000,000$

Gross rate = 9% = 0.09; fee = 2% = 0.02 (and 3.5% = 0.035 for part d)

Compounding: continuous

t = 6 years

**Part 2: Formula.**

Net rate: $r_{\\mathrm{net}} = r_{\\mathrm{gross}} - r_{\\mathrm{fee}}$

$S(t) = S_0 e^{r_{\\mathrm{net}} t}$

Doubling time: $t = \\ln(2)/r_{\\mathrm{net}}$

**Part 3: Solve.**

**1.** $r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07 = 7\\%$.

**2.** $S(6) = 2,000,000 \\times e^{0.07 \\times 6} = 2,000,000 \\times e^{0.42} = 2,000,000 \\times 1.521962 = \\$3,043,923.11$.

**3.** Doubling time: $\\ln(2)/0.07 = 0.693147/0.07 \\approx 9.9021$ years.

**4.** At a $3.5\\%$ fee: $r_{\\mathrm{net}}' = 0.09 - 0.035 = 0.055$.

**5.** $S(6) = 2,000,000 \\times e^{0.33} = 2,000,000 \\times 1.390968 = \\$2,781,936.26$.

**6.** Doubling time: $\\ln(2)/0.055 \\approx 12.6027$ years, which is LONGER than $9.9021$ years, not shorter.

**7.** Comparing: a lower net rate ($5.5\\%$ vs $7\\%$) always produces both a smaller $6$-year value and a longer doubling time.
`,
  },
  {
    id: `math-11-34`,
    case_id: `MATH 11.34`,
    title: `Crossover Point Between a Growing Equity Stake and Shrinking Factory Equipment`,
    subsection: `11.2`,
    context: `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.`,
    statements: [
      `Setting $A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$.`,
      `The crossover occurs at approximately t ≈ 10.06 years, at which point both assets are worth approximately \\$74,767.44.`,
      `At exactly t = 10 years, Asset A is already worth more than Asset B.`,
      `Asset A can never actually overtake Asset B in value, no matter how long both trends continue.`,
      `For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Setting $A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$.**  (true)

The crossover time is the moment the two value paths are equal, so set the growing asset against the shrinking one:

$$A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$$

Divide both sides by $A_0$ and by $e^{-\\delta_B t}$, which collects both exponentials on one side:

$$e^{r_A t} e^{\\delta_B t} = \\frac{B_0}{A_0}$$

The two exponentials share a base, so their exponents add:

$$e^{(r_A + \\delta_B)t} = \\frac{B_0}{A_0}$$

Take natural logarithms of both sides:

$$(r_A + \\delta_B)t = \\ln\\frac{B_0}{A_0}$$

Divide by the sum of the two rates:

$$t = \\frac{\\ln(B_0/A_0)}{r_A + \\delta_B}$$

This is exactly the closed form the claim writes down, with the two rates adding in the denominator because one asset climbs while the other falls and the gap therefore closes at their combined speed. The statement is true.`,
      `**B) The crossover occurs at approximately t ≈ 10.06 years, at which point both assets are worth approximately \\$74,767.44.**  (true)

The crossover happens when the two values coincide, so start from that equality:

$$A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$$

Collecting the exponentials on one side and taking natural logarithms gives the closed form:

$$t = \\frac{\\ln(B_0/A_0)}{r_A + \\delta_B}$$

Substitute the starting values $A_0 = 50,000$ and $B_0 = 250,000$ together with $r_A = 0.04$ and $\\delta_B = 0.12$:

$$\\frac{B_0}{A_0} = \\frac{250,000}{50,000} = 5$$

$$r_A + \\delta_B = 0.04 + 0.12 = 0.16$$

$$t = \\frac{\\ln 5}{0.16} = \\frac{1.609438}{0.16}$$

$$\\approx 10.0590 \\text{ years}$$

Now value each asset at that date. Asset A grows continuously at $4\\%$:

$$A(10.059) = 50,000 \\times e^{0.04 \\times 10.059} = 50,000 \\times e^{0.402360}$$

$$e^{0.402360} \\approx 1.495349$$

$$A(10.059) \\approx 74,767.44$$

Asset B decays continuously at $12\\%$ over the same span:

$$B(10.059) = 250,000 \\times e^{-0.12 \\times 10.059} = 250,000 \\times e^{-1.207080}$$

$$e^{-1.207080} \\approx 0.299070$$

$$B(10.059) \\approx 74,767.44$$

Both paths land on the same value at the same date, matching the claimed 10.06 years and the claimed common value of approximately \\$74,767.44. The statement is true.`,
      `**C) At exactly t = 10 years, Asset A is already worth more than Asset B.**  (false)

Testing the claim at a specific date only requires valuing both assets at $t = 10$ and comparing. Asset A grows continuously at $4\\%$ from \\$50,000:

$$A(10) = 50,000 \\times e^{0.04 \\times 10}$$

$$= 50,000 \\times e^{0.40}$$

$$e^{0.40} \\approx 1.491825$$

$$A(10) \\approx 74,591.23$$

Asset B decays continuously at $12\\%$ from \\$250,000 over the same 10 years:

$$B(10) = 250,000 \\times e^{-0.12 \\times 10}$$

$$= 250,000 \\times e^{-1.20}$$

$$e^{-1.20} \\approx 0.301194$$

$$B(10) \\approx 75,298.55$$

Compare the two balances at that date:

$$75,298.55 - 74,591.23 = 707.32$$

Asset B is still ahead by \\$707.32 at exactly 10 years, so Asset A has not yet overtaken it. That is consistent with the exact crossover date, $\\ln(5)/0.16 \\approx 10.06$ years, which falls just after the 10-year mark. The statement is false.`,
      `**D) Asset A can never actually overtake Asset B in value, no matter how long both trends continue.**  (false)

Whether a crossover must eventually occur is answered by tracking the ratio of the two values rather than either value alone:

$$\\frac{A(t)}{B(t)} = \\frac{A_0 e^{r_A t}}{B_0 e^{-\\delta_B t}}$$

Exponents with a common base combine, so the ratio simplifies:

$$= \\frac{A_0}{B_0} e^{(r_A + \\delta_B)t}$$

Substitute $A_0/B_0 = 50,000/250,000 = 0.2$ and $r_A + \\delta_B = 0.04 + 0.12 = 0.16$:

$$\\frac{A(t)}{B(t)} = 0.2\\, e^{0.16 t}$$

The exponential factor grows without bound as $t$ increases, so the ratio must eventually pass 1 no matter how large the initial gap. Solving for the exact date where it equals 1:

$$t = \\frac{\\ln 5}{0.16} \\approx 10.0590 \\text{ years}$$

Far from never overtaking, Asset A passes Asset B after about 10.06 years, so the statement is false.`,
      `**E) For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.**  (true)

Once the two paths have crossed, the question is whether the gap can close again, and the ratio of values settles it:

$$\\frac{A(t)}{B(t)} = \\frac{A_0 e^{r_A t}}{B_0 e^{-\\delta_B t}} = \\frac{A_0}{B_0} e^{(r_A + \\delta_B)t}$$

Substituting $A_0/B_0 = 0.2$ and $r_A + \\delta_B = 0.16$:

$$\\frac{A(t)}{B(t)} = 0.2\\, e^{0.16 t}$$

Since $0.16 > 0$, this ratio is strictly increasing in $t$. It equals 1 exactly at the crossover:

$$t^{\\ast} = \\frac{\\ln 5}{0.16} \\approx 10.0590 \\text{ years}$$

For every $t > t^{\\ast}$ the ratio is therefore strictly greater than 1, which means $A(t) > B(t)$. Nothing can reverse it, because Asset A keeps compounding upward at $4\\%$ while Asset B keeps decaying at $12\\%$. Asset A stays ahead for all later dates, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.

**Part 1: Setup.**

$A_0 = \\$50,000$, $r_A = 4\\% = 0.04$

$B_0 = \\$250,000$, $\\delta_B = 12\\% = 0.12$

Compounding: continuous

**Part 2: Formula.**

$A(t) = A_0 e^{r_A t}$

$B(t) = B_0 e^{-\\delta_B t}$

Crossover: $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$

**Part 3: Solve.**

**1.** $t = \\ln(5)/0.16 = 10.0590$ years; at crossover both equal $\\$74,767.44$.

**2.** At $t = 10$: $A(10) = 50,000 \\times e^{0.40} = \\$74,591.23$ and $B(10) = 250,000 \\times e^{-1.20} = \\$75,298.55$, so A has not yet overtaken B — consistent with crossover at $10.06$ years.

**3.** The ratio $A(t)/B(t) = (A_0/B_0)\\times e^{(r_A + \\delta_B)t}$ grows without bound, so a crossover is guaranteed; beyond that point A stays ahead.
`,
  },
  {
    id: `math-11-35`,
    case_id: `MATH 11.35`,
    title: `Verifying the Compounding-Frequency Ceiling Across Four Schedules for a Municipal Reserve`,
    subsection: `11.2`,
    context: `A municipal finance office is comparing four compounding schedules, all at the same nominal annual rate of 7%, applied to a \\$40,000 reserve fund for exactly 1 year: annual, quarterly, monthly, and continuous. The office wants to confirm the textbook's claim that increasing compounding frequency strictly increases the year-end value, up to the continuous-compounding ceiling.`,
    statements: [
      `The annual-compounding value is exactly \\$42,800.00.`,
      `The quarterly-compounding value is approximately \\$42,874.36, and the monthly-compounding value is approximately \\$42,891.60.`,
      `The four values, from smallest to largest, are ordered annual < quarterly < monthly < continuous.`,
      `The dollar gap between monthly and quarterly compounding is smaller than the dollar gap between continuous and monthly compounding.`,
      `No compounding schedule, however frequent, can ever produce a 1-year value exceeding the continuous-compounding value of \\$42,900.33 at this same 7% nominal rate.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The annual-compounding value is exactly \\$42,800.00.**  (true)

Annual compounding credits interest once per year, so the growth factor is applied a single time over a 1-year horizon:

$$S = P(1 + i)^{t}$$

Substitute the reserve fund $P = 40,000$, the nominal annual rate $i = 0.07$, and $t = 1$:

$$S = 40,000 \\times (1.07)^{1}$$

$$= 40,000 \\times 1.07$$

$$= 42,800.00$$

No rounding enters anywhere, since $40,000 \\times 1.07$ terminates exactly. The claim states exactly \\$42,800.00, which is precisely the computed year-end value, so the statement is true.`,
      `**B) The quarterly-compounding value is approximately \\$42,874.36, and the monthly-compounding value is approximately \\$42,891.60.**  (true)

Both figures come from the same discrete compounding rule, applied with different numbers of periods:

$$S_m = P\\left(1 + \\frac{i}{m}\\right)^{m}$$

for a 1-year horizon. Quarterly compounding uses $m = 4$, so the periodic rate is:

$$\\frac{0.07}{4} = 0.0175$$

$$S_4 = 40,000 \\times (1.0175)^{4}$$

$$(1.0175)^{4} \\approx 1.0718590$$

$$S_4 \\approx 40,000 \\times 1.0718590 = 42,874.36$$

Monthly compounding uses $m = 12$, so the periodic rate is:

$$\\frac{0.07}{12} \\approx 0.0058333$$

$$S_{12} = 40,000 \\times (1.0058333)^{12}$$

$$(1.0058333)^{12} \\approx 1.0722901$$

$$S_{12} \\approx 40,000 \\times 1.0722901 = 42,891.60$$

The claim gives approximately \\$42,874.36 for quarterly and approximately \\$42,891.60 for monthly, and both computed balances match to the cent, so the statement is true.`,
      `**C) The four values, from smallest to largest, are ordered annual < quarterly < monthly < continuous.**  (true)

Checking an ordering claim means computing all four year-end values on the same \\$40,000 principal at the same $7\\%$ nominal rate. The finite schedules use:

$$S_m = P\\left(1 + \\frac{i}{m}\\right)^{m}$$

$$S_1 = 40,000 \\times 1.07 = 42,800.00$$

$$S_4 = 40,000 \\times (1.0175)^{4} \\approx 42,874.36$$

$$S_{12} = 40,000 \\times (1.0058333)^{12} \\approx 42,891.60$$

The continuous schedule uses the exponential ceiling:

$$S_{\\mathrm{cont}} = P e^{r} = 40,000 \\times e^{0.07}$$

$$e^{0.07} \\approx 1.0725082$$

$$S_{\\mathrm{cont}} \\approx 42,900.33$$

Line all four up from smallest to largest:

$$42,800.00 < 42,874.36 < 42,891.60 < 42,900.33$$

Annual, then quarterly, then monthly, then continuous, exactly the order the claim gives, with each increase in frequency adding a little more interest on interest within the year. The statement is true.`,
      `**D) The dollar gap between monthly and quarterly compounding is smaller than the dollar gap between continuous and monthly compounding.**  (false)

Comparing two gaps means computing both of them from the four year-end values. Quarterly and monthly compounding give:

$$S_4 = 40,000 \\times (1.0175)^{4} \\approx 42,874.36$$

$$S_{12} = 40,000 \\times (1.0058333)^{12} \\approx 42,891.60$$

so the monthly versus quarterly gap is:

$$42,891.60 - 42,874.36 = 17.24$$

The continuous value is the exponential ceiling at the same nominal rate:

$$S_{\\mathrm{cont}} = 40,000 \\times e^{0.07} \\approx 42,900.33$$

so the continuous versus monthly gap is:

$$42,900.33 - 42,891.60 = 8.72$$

Set the two gaps side by side:

$$17.24 > 8.72$$

The monthly versus quarterly step is about twice the size of the continuous versus monthly step, not smaller, because the sequence $(1 + i/m)^{m}$ rises toward $e^{i}$ with steadily shrinking increments. The claim has the comparison backwards, so the statement is false.`,
      `**E) No compounding schedule, however frequent, can ever produce a 1-year value exceeding the continuous-compounding value of \\$42,900.33 at this same 7% nominal rate.**  (true)

This is a claim about a ceiling, so it is settled by the limit that defines continuous compounding rather than by any single schedule. For a finite number of periods per year the year-end value is:

$$S_m = P\\left(1 + \\frac{i}{m}\\right)^{m}$$

As the frequency increases, this sequence rises and approaches the exponential:

$$\\lim_{m \\to \\infty} \\left(1 + \\frac{i}{m}\\right)^{m} = e^{i}$$

The sequence is strictly increasing in $m$ and never reaches its limit, so for every finite $m$:

$$\\left(1 + \\frac{i}{m}\\right)^{m} < e^{i}$$

Multiplying by the principal gives the ceiling in dollars at $i = 0.07$ and $P = 40,000$:

$$S_{\\mathrm{cont}} = 40,000 \\times e^{0.07} \\approx 40,000 \\times 1.0725082 = 42,900.33$$

The computed schedules confirm the pattern, with \\$42,800.00 annually, \\$42,874.36 quarterly, and \\$42,891.60 monthly, all below \\$42,900.33 and edging closer as the frequency rises. No finite schedule at this same $7\\%$ nominal rate can reach or pass that figure, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `A municipal finance office is comparing four compounding schedules, all at the same nominal annual rate of 7%, applied to a \\$40,000 reserve fund for exactly 1 year: annual, quarterly, monthly, and continuous. The office wants to confirm the textbook's claim that increasing compounding frequency strictly increases the year-end value, up to the continuous-compounding ceiling.

**Part 1: Setup.**

$P = \\$40,000$

Nominal annual rate i = r = 7% = 0.07

Schedules: annual (m = 1), quarterly (m = 4), monthly (m = 12), continuous

t = 1 year

**Part 2: Formula.**

$S_m = P(1+i/m)^{m}$ for finite $m$

$S_{\\mathrm{cont}} = P e^{r}$

**Part 3: Solve.**

**1.** Annual: $S = 40,000 \\times 1.07 = \\$42,800.00$.

**2.** Quarterly: $S = 40,000 \\times (1.0175)^{4} = 40,000 \\times 1.0718590 = \\$42,874.36$.

**3.** Monthly: $S = 40,000 \\times (1.0058333)^{12} = 40,000 \\times 1.0722901 = \\$42,891.60$.

**4.** Continuous: $S = 40,000 \\times e^{0.07} = 40,000 \\times 1.0725082 = \\$42,900.33$.

**5.** Gap (monthly, quarterly): $42,891.60 - 42,874.36 = \\$17.24$.

**6.** Gap (continuous, monthly): $42,900.33 - 42,891.60 = \\$8.72$; the second gap is SMALLER, not larger.
`,
  },
  {
    id: `math-11-36`,
    case_id: `MATH 11.36`,
    title: `Reverse-Engineering the Upfront Deposit Needed for a Tuition Lock`,
    subsection: `11.2`,
    context: `A parent wants to guarantee exactly \\$100,000 available in 8 years for a child's college tuition, and is choosing between two continuously-compounded investment vehicles: Option 1 offers a nominal annual rate of 4.5%, while Option 2 offers a nominal annual rate of 6.0%. The parent wants to know how much must be deposited today under each option.`,
    statements: [
      `Option 1 requires an upfront deposit of approximately \\$69,767.63.`,
      `Option 2 requires an upfront deposit of approximately \\$61,878.34.`,
      `Option 2 requires a larger upfront deposit than Option 1 to reach the same \\$100,000 target in 8 years.`,
      `The difference in required upfront deposits between the two options is approximately \\$9,000.00, with Option 2 requiring the larger amount.`,
      `If the parent instead had only 4 years to reach the same \\$100,000 target under Option 1's 4.5% rate, the required upfront deposit would be smaller than the 8-year requirement.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) Option 1 requires an upfront deposit of approximately \\$69,767.63.**  (true)

Working backward from a target to a deposit is a present-value question, so the continuous accumulation rule is inverted. Starting from the growth law:

$$S(t) = S_0 e^{rt}$$

Solving for the amount that must be set aside today:

$$S_0 = S(t) e^{-rt}$$

Option 1 offers a nominal annual rate of $4.5\\%$ compounded continuously, and the target is \\$100,000 in 8 years, so substitute $r = 0.045$ and $t = 8$:

$$S_0 = 100,000 \\times e^{-0.045 \\times 8}$$

$$= 100,000 \\times e^{-0.36}$$

$$e^{-0.36} \\approx 0.697676$$

$$S_0 \\approx 100,000 \\times 0.697676 = 69,767.63$$

The claim states approximately \\$69,767.63 as the upfront deposit under Option 1, which is exactly the computed present value, so the statement is true.`,
      `**B) Option 2 requires an upfront deposit of approximately \\$61,878.34.**  (true)

Option 2 uses the same present-value rule as any continuously compounded account, with only the rate changing:

$$S_0 = S(t) e^{-rt}$$

Substitute the \\$100,000 target, the Option 2 rate $r = 0.06$, and the 8-year horizon:

$$S_0 = 100,000 \\times e^{-0.06 \\times 8}$$

$$= 100,000 \\times e^{-0.48}$$

$$e^{-0.48} \\approx 0.618783$$

$$S_0 \\approx 100,000 \\times 0.618783 = 61,878.34$$

The claim gives approximately \\$61,878.34 for the Option 2 deposit, and the computed figure matches it to the cent, so the statement is true.`,
      `**C) Option 2 requires a larger upfront deposit than Option 1 to reach the same \\$100,000 target in 8 years.**  (false)

Comparing the two options means computing both required deposits from the same present-value rule:

$$S_0 = S(t) e^{-rt}$$

Option 1 at $r = 0.045$ over 8 years:

$$S_0^{(1)} = 100,000 \\times e^{-0.36} \\approx 100,000 \\times 0.697676 = 69,767.63$$

Option 2 at $r = 0.06$ over the same 8 years:

$$S_0^{(2)} = 100,000 \\times e^{-0.48} \\approx 100,000 \\times 0.618783 = 61,878.34$$

Set the two against each other:

$$61,878.34 < 69,767.63$$

Option 2 requires the smaller deposit, not the larger one. The discount factor $e^{-rt}$ falls as $r$ rises, so the faster-growing account needs less money set aside today to hit the same target. The claim reverses this, so the statement is false.`,
      `**D) The difference in required upfront deposits between the two options is approximately \\$9,000.00, with Option 2 requiring the larger amount.**  (false)

This claim asserts both a size and a direction, so both need checking against the computed deposits. From the present-value rule $S_0 = S(t)e^{-rt}$:

$$S_0^{(1)} = 100,000 \\times e^{-0.36} \\approx 69,767.63$$

$$S_0^{(2)} = 100,000 \\times e^{-0.48} \\approx 61,878.34$$

Take the difference between them:

$$69,767.63 - 61,878.34 = 7,889.29$$

The gap is about \\$7,889.29, not the claimed \\$9,000.00, so the size is off by roughly \\$1,111. The direction is wrong as well, since the larger deposit belongs to Option 1 at the lower $4.5\\%$ rate rather than to Option 2. Both parts of the claim fail, so the statement is false.`,
      `**E) If the parent instead had only 4 years to reach the same \\$100,000 target under Option 1's 4.5% rate, the required upfront deposit would be smaller than the 8-year requirement.**  (false)

Shortening the horizon changes only the exponent in the present-value rule, so the new requirement is recomputed directly:

$$S_0 = S(t) e^{-rt}$$

Substitute the \\$100,000 target, Option 1's rate $r = 0.045$, and the shorter horizon $t = 4$:

$$S_0^{(4)} = 100,000 \\times e^{-0.045 \\times 4}$$

$$= 100,000 \\times e^{-0.18}$$

$$e^{-0.18} \\approx 0.835270$$

$$S_0^{(4)} \\approx 83,527.02$$

The 8-year requirement at the same rate was:

$$S_0^{(8)} = 100,000 \\times e^{-0.36} \\approx 69,767.63$$

Compare the two deposits:

$$83,527.02 - 69,767.63 = 13,759.39$$

Cutting the horizon in half raises the required deposit by about \\$13,759, because there is less time for compounding to do the work and more of the target has to be supplied up front. The claim says the shorter horizon needs less money today, which is backwards, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `A parent wants to guarantee exactly \\$100,000 available in 8 years for a child's college tuition, and is choosing between two continuously-compounded investment vehicles: Option 1 offers a nominal annual rate of 4.5%, while Option 2 offers a nominal annual rate of 6.0%. The parent wants to know how much must be deposited today under each option.

**Part 1: Setup.**

Target $S(t) = \\$100,000$

Option 1: r = 4.5% = 0.045, t = 8 years (and t = 4 years for part e)

Option 2: r = 6.0% = 0.06, t = 8 years

Compounding: continuous

**Part 2: Formula.**

$S(t) = S_0 e^{rt} \\Rightarrow S_0 = S(t)/e^{rt} = S(t)\\times e^{-rt}$

**Part 3: Solve.**

**1.** Option $1$: $S_0 = 100,000 \\times e^{-0.045 \\times 8} = 100,000 \\times e^{-0.36} = 100,000 \\times 0.697676 = \\$69,767.63$.

**2.** Option $2$: $S_0 = 100,000 \\times e^{-0.06 \\times 8} = 100,000 \\times e^{-0.48} = 100,000 \\times 0.618783 = \\$61,878.34$.

**3.** Difference: $69,767.63 - 61,878.34 = \\$7,889.29$, with Option $1$ requiring more upfront.

**4.** Option $1$ over $4$ years: $S_0 = 100,000 \\times e^{-0.045 \\times 4} = 100,000 \\times e^{-0.18} = 100,000 \\times 0.835270 = \\$83,527.02$.

**5.** Comparing: $\\$83,527.02$ ($4$-year requirement) is LARGER than $\\$69,767.63$ ($8$-year requirement), not smaller.
`,
  },
  {
    id: `math-11-37`,
    case_id: `MATH 11.37`,
    title: `A Logistics Company's Two-Phase Continuous Growth: Expansion Then Maturity`,
    subsection: `11.2`,
    context: `A logistics company's revenue base of \\$1,800,000 grows continuously at a nominal annual rate of 10% for the first 4 years of rapid expansion, then slows to a continuous nominal rate of 4% for the following 3 years of maturity, for 7 years total.`,
    statements: [
      `Revenue at the end of year 4 is approximately \\$2,685,284.46.`,
      `Revenue at the end of year 7 is approximately \\$3,027,649.77.`,
      `The single constant continuous rate that would have produced the same 7-year outcome starting from \\$1,800,000 is approximately 7.43%.`,
      `The effective 7-year rate is higher than the plain, unweighted average of the two phase rates.`,
      `If the two phases had instead occurred in the opposite order - 3 years at 4% followed by 4 years at 10% - the year-7 revenue would have come out exactly the same.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) Revenue at the end of year 4 is approximately \\$2,685,284.46.**  (true)

The first phase is ordinary continuous growth, so only the phase 1 rate and duration matter for the year-4 figure:

$$S(t) = S_0 e^{rt}$$

Substitute the revenue base $S_0 = 1,800,000$, the expansion rate $r_1 = 0.10$, and $t_1 = 4$ years:

$$S(4) = 1,800,000 \\times e^{0.10 \\times 4}$$

$$= 1,800,000 \\times e^{0.40}$$

$$e^{0.40} \\approx 1.491825$$

$$S(4) \\approx 1,800,000 \\times 1.491825 = 2,685,284.46$$

The claim puts end-of-year-4 revenue at approximately \\$2,685,284.46, which is exactly the computed value, so the statement is true.`,
      `**B) Revenue at the end of year 7 is approximately \\$3,027,649.77.**  (true)

Two growth phases run back to back, so the year-7 figure is the year-4 balance carried forward at the slower rate:

$$S(t_1 + t_2) = S(t_1) \\times e^{r_2 t_2}$$

The year-4 balance comes from the first phase at $10\\%$:

$$S(4) = 1,800,000 \\times e^{0.40} \\approx 2,685,284.46$$

The maturity phase runs 3 more years at $4\\%$, so its factor is:

$$e^{0.04 \\times 3} = e^{0.12}$$

$$e^{0.12} \\approx 1.127497$$

Apply that factor to the year-4 balance:

$$S(7) \\approx 2,685,284.46 \\times 1.127497$$

$$\\approx 3,027,649.77$$

The same answer follows from combining the exponents in one step, since $e^{0.40} e^{0.12} = e^{0.52}$ and $1,800,000 \\times e^{0.52} \\approx 3,027,649.77$. The claim gives approximately \\$3,027,649.77, matching the computed value, so the statement is true.`,
      `**C) The single constant continuous rate that would have produced the same 7-year outcome starting from \\$1,800,000 is approximately 7.43%.**  (true)

A single constant rate reproduces the same terminal value when it produces the same total exponent, because consecutive continuous phases multiply their factors:

$$S(t_1 + t_2) = S_0 e^{r_1 t_1} e^{r_2 t_2} = S_0 e^{r_1 t_1 + r_2 t_2}$$

Setting that equal to growth at one constant rate over the whole horizon:

$$S_0 e^{r_{\\mathrm{eff}}(t_1 + t_2)} = S_0 e^{r_1 t_1 + r_2 t_2}$$

Cancel $S_0$ and match exponents:

$$r_{\\mathrm{eff}} = \\frac{r_1 t_1 + r_2 t_2}{t_1 + t_2}$$

Substitute $r_1 = 0.10$ over 4 years and $r_2 = 0.04$ over 3 years:

$$r_1 t_1 + r_2 t_2 = 0.40 + 0.12 = 0.52$$

$$r_{\\mathrm{eff}} = \\frac{0.52}{7}$$

$$\\approx 0.074286 = 7.43\\%$$

As a check, $1,800,000 \\times e^{0.074286 \\times 7} = 1,800,000 \\times e^{0.52} \\approx 3,027,649.77$, the same year-7 revenue. The claim gives approximately 7.43%, matching the computed effective rate, so the statement is true.`,
      `**D) The effective 7-year rate is higher than the plain, unweighted average of the two phase rates.**  (true)

Two averages are being compared here, so both have to be computed. The effective rate is the time-weighted average, since each phase contributes its rate multiplied by how long it lasted:

$$r_{\\mathrm{eff}} = \\frac{r_1 t_1 + r_2 t_2}{t_1 + t_2}$$

Substituting $r_1 = 0.10$ for 4 years and $r_2 = 0.04$ for 3 years:

$$r_1 t_1 + r_2 t_2 = 0.10 \\times 4 + 0.04 \\times 3 = 0.40 + 0.12 = 0.52$$

$$r_{\\mathrm{eff}} = \\frac{0.52}{7} \\approx 0.074286 = 7.43\\%$$

The plain unweighted average ignores the durations and simply splits the two rates evenly:

$$\\bar{r} = \\frac{r_1 + r_2}{2} = \\frac{0.10 + 0.04}{2} = 0.07 = 7.00\\%$$

Compare the two:

$$7.43\\% - 7.00\\% = 0.43 \\text{ percentage points}$$

The time-weighted figure sits 0.43 percentage points above the plain average, and it has to, because the faster $10\\%$ phase ran for 4 years against only 3 years at $4\\%$, so the higher rate carries the larger weight. The statement is true.`,
      `**E) If the two phases had instead occurred in the opposite order - 3 years at 4% followed by 4 years at 10% - the year-7 revenue would have come out exactly the same.**  (true)

Order matters only if the two phases combine in a way that depends on sequence, so write out the terminal value in both orders. Running the fast phase first:

$$S_0 e^{r_1 t_1} e^{r_2 t_2} = S_0 e^{r_1 t_1 + r_2 t_2}$$

Running the slow phase first:

$$S_0 e^{r_2 t_2} e^{r_1 t_1} = S_0 e^{r_2 t_2 + r_1 t_1}$$

The two exponents are the same sum written in a different order, and addition is commutative, so the two accumulation factors are identical:

$$e^{0.12} \\times e^{0.40} = e^{0.52} = e^{0.40} \\times e^{0.12}$$

Evaluate the shared exponent from the given rates and durations:

$$r_1 t_1 + r_2 t_2 = 0.10 \\times 4 + 0.04 \\times 3 = 0.52$$

Apply it to the revenue base:

$$S(7) = 1,800,000 \\times e^{0.52}$$

$$e^{0.52} \\approx 1.682028$$

$$S(7) \\approx 3,027,649.77$$

Whichever phase comes first, the exponent totals 0.52 and the year-7 revenue is the same \\$3,027,649.77. The claim says the reversed order produces exactly the same result, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 37,
    solution_overview: `A logistics company's revenue base of \\$1,800,000 grows continuously at a nominal annual rate of 10% for the first 4 years of rapid expansion, then slows to a continuous nominal rate of 4% for the following 3 years of maturity, for 7 years total.

**Part 1: Setup.**

$S_0 = \\$1,800,000$

Phase 1: $r_1 = 10\\% = 0.10$, $t_1 = 4$ years

Phase 2: $r_2 = 4\\% = 0.04$, $t_2 = 3$ years

**Part 2: Formula.**

$S(t_1) = S_0 \\times e^{r_1 t_1}$

$S(t_1+t_2) = S(t_1) \\times e^{r_2 t_2} = S_0 \\times e^{r_1 t_1+r_2 t_2}$

Effective rate: $r_{\\mathrm{eff}} = (r_1 t_1 + r_2 t_2)/(t_1+t_2)$

**Part 3: Solve.**

**1.** $S(4) = 1,800,000 \\times e^{0.10 \\times 4} = 1,800,000 \\times e^{0.40} = 1,800,000 \\times 1.491825 = \\$2,685,284.46$.

**2.** $S(7) = S(4) \\times e^{0.04 \\times 3} = 2,685,284.46 \\times e^{0.12} = 2,685,284.46 \\times 1.127497 = \\$3,027,649.77$.

**3.** Combined exponent: $r_1 t_1 + r_2 t_2 = (0.10 \\times 4) + (0.04 \\times 3) = 0.40 + 0.12 = 0.52$.

**4.** $r_{\\mathrm{eff}} = 0.52/7 = 0.074286 \\approx 7.43\\%$ (the TIME-WEIGHTED average, not the plain average).

**5.** Plain (unweighted) average: $(0.10 + 0.04)/2 = 0.07 = 7.00\\%$, which does not equal $7.43\\%$.
`,
  },
  {
    id: `math-11-38`,
    case_id: `MATH 11.38`,
    title: `Reverse-Engineering a Crane's Implied Depreciation Rate for a Construction Equipment Reseller`,
    subsection: `11.2`,
    context: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.`,
    statements: [
      `Solving $v_0 \\times e^{-\\delta t} = v(t)$ for δ gives δ = ln(v(t)/v_0)/t.`,
      `The implied depreciation rate for the first crane is approximately 16.28% per year.`,
      `A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.`,
      `The first crane retains more of its value after 6 years than the second crane.`,
      `If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) Solving $v_0 \\times e^{-\\delta t} = v(t)$ for δ gives δ = ln(v(t)/v_0)/t.**  (false)

Solving for a continuous depreciation rate starts from the decay law and isolates $\\delta$ carefully, because the direction of the ratio decides the sign. Begin with:

$$v_0 e^{-\\delta t} = v(t)$$

Divide both sides by $v_0$:

$$e^{-\\delta t} = \\frac{v(t)}{v_0}$$

Taking natural logarithms of both sides gives a negative left side:

$$-\\delta t = \\ln\\frac{v(t)}{v_0}$$

Multiplying through by $-1$ flips the ratio inside the logarithm, since $-\\ln x = \\ln(1/x)$:

$$\\delta t = \\ln\\frac{v_0}{v(t)}$$

$$\\delta = \\frac{\\ln(v_0/v(t))}{t}$$

The claim writes the ratio the other way round, as $\\ln(v(t)/v_0)/t$. Test it on this crane, where $v_0 = 85,000$ falls to $v(6) = 32,000$:

$$\\frac{\\ln(32,000/85,000)}{6} = \\frac{-0.976915}{6} \\approx -0.162819$$

That produces a negative rate of about $-16.28\\%$, which cannot describe depreciation of an asset losing value. The correct formula puts the original value on top, so the statement is false.`,
      `**B) The implied depreciation rate for the first crane is approximately 16.28% per year.**  (true)

Recovering the implied rate uses the continuous decay law solved for $\\delta$, with the original value on top of the ratio so the rate comes out positive:

$$\\delta = \\frac{\\ln(v_0/v(t))}{t}$$

Substitute the crane's book values, $v_0 = 85,000$ falling to $v(6) = 32,000$ over $t = 6$ years:

$$\\delta = \\frac{\\ln(85,000/32,000)}{6}$$

$$= \\frac{\\ln 2.65625}{6}$$

$$\\ln 2.65625 \\approx 0.976915$$

$$\\delta \\approx \\frac{0.976915}{6} = 0.162819$$

As a percentage that is $16.2819\\%$ per year, which rounds to $16.28\\%$. The claim states approximately 16.28% per year, matching the computed rate to two decimal places, so the statement is true.`,
      `**C) A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.**  (false)

The second crane has a known rate, so its 6-year value comes straight from the continuous decay law:

$$v(t) = v_0 e^{-\\delta t}$$

Substitute the purchase price $v_0 = 85,000$, the known rate $\\delta = 0.15$, and $t = 6$ years:

$$v(6) = 85,000 \\times e^{-0.15 \\times 6}$$

$$= 85,000 \\times e^{-0.90}$$

$$e^{-0.90} \\approx 0.406570$$

$$v(6) \\approx 85,000 \\times 0.406570 = 34,558.42$$

Compare that with the claimed figure:

$$36,000.00 - 34,558.42 = 1,441.58$$

The claim overstates the second crane's 6-year value by about \\$1,442, so the statement is false.`,
      `**D) The first crane retains more of its value after 6 years than the second crane.**  (false)

Retention is a comparison of the two 6-year values, so both need to be on the table. The first crane is written down by policy to a stated resale value after 6 years:

$$v_1(6) = 32,000.00$$

Its implied rate confirms how fast that decline is:

$$\\delta_1 = \\frac{\\ln(85,000/32,000)}{6} \\approx 0.162819 = 16.28\\%$$

The second crane starts from the same \\$85,000 and decays at the known $15\\%$:

$$v_2(6) = 85,000 \\times e^{-0.15 \\times 6} = 85,000 \\times e^{-0.90}$$

$$\\approx 85,000 \\times 0.406570 = 34,558.42$$

Compare the two remaining values:

$$32,000.00 < 34,558.42$$

The first crane keeps \\$2,558.42 less after the same 6 years. That follows directly from the rates, since $16.28\\% > 15\\%$ and a faster depreciation rate strips value more quickly. The claim says the first crane retains more, which is the reverse, so the statement is false.`,
      `**E) If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.**  (false)

Changing the target resale value changes only the ratio inside the logarithm, so the implied rate is recomputed from the same inversion:

$$\\delta = \\frac{\\ln(v_0/v(t))}{t}$$

Substitute the same \\$85,000 starting value and 6-year horizon with the new target of \\$40,000:

$$\\delta' = \\frac{\\ln(85,000/40,000)}{6}$$

$$= \\frac{\\ln 2.125}{6}$$

$$\\ln 2.125 \\approx 0.753772$$

$$\\delta' \\approx \\frac{0.753772}{6} = 0.125629 = 12.56\\%$$

The original target of \\$32,000 gave:

$$\\delta = \\frac{\\ln 2.65625}{6} \\approx 0.162819 = 16.28\\%$$

Compare the two implied rates:

$$12.56\\% < 16.28\\%$$

Holding on to \\$40,000 instead of \\$32,000 means less value was lost over the same 6 years, so the implied rate must be smaller, by about 3.72 percentage points here. The claim says it would be higher, so the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 38,
    solution_overview: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.

**Part 1: Setup.**

$v_0 = \\$85,000$

$v(6) = \\$32,000$ (first crane, implied δ); known δ = 15% (second crane); v(6) target = \\$40,000 for part e

Compounding: continuous

t = 6 years

**Part 2: Formula.**

Value: $v(t) = v_0 e^{-\\delta t}$

Fraction remaining equals $e^{-\\delta t}$

Time for a given fraction $f$: $t = -\\ln(f)/\\delta = \\ln(1/f)/\\delta$

**Part 3: Solve.**

**1.** $\\delta = \\ln(85,000/32,000)/6 = \\ln(2.65625)/6 = 0.976915/6 = 0.162819 \\approx 16.28\\%$.

**2.** Second crane: $v(6) = 85,000 \\times e^{-0.15 \\times 6} = 85,000 \\times e^{-0.90} = 85,000 \\times 0.406570 = \\$34,558.42$.

**3.** Comparing final values: first crane retains $\\$32,000.00$, second crane retains $\\$34,558.42$ — the crane with the LOWER rate ($15\\%$) retains MORE value, not the one with the higher implied rate ($16.28\\%$).

**4.** For a $\\$40,000$ target: $\\delta = \\ln(85,000/40,000)/6 = \\ln(2.125)/6 = 0.753772/6 = 0.125629 \\approx 12.56\\%$, which is lower than $16.28\\%$.
`,
  },
  {
    id: `math-11-39`,
    case_id: `MATH 11.39`,
    title: `Doubling, Tripling, and Quadrupling Times for an Impact Investing Fund`,
    subsection: `11.2`,
    context: `A socially-responsible impact investing fund places \\$12,000 into a continuously-compounded account at a nominal annual rate of 6.5%, and the fund's trustees want to understand exactly how the times needed to double, triple, and quadruple the initial investment relate to one another.`,
    statements: [
      `The doubling time at 6.5% is approximately 10.66 years.`,
      `The tripling time at 6.5% is approximately 16.90 years.`,
      `The quadrupling time at 6.5% is approximately 21.33 years, and this is exactly equal to twice the doubling time.`,
      `At the quadrupling time, the fund's value is exactly \\$48,000.00.`,
      `The tripling time must be exactly 1.5 times the doubling time.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The doubling time at 6.5% is approximately 10.66 years.**  (true)

The time needed to reach a given multiple of the initial deposit comes from setting the accumulated value equal to that multiple:

$$S_0 e^{rt} = M S_0$$

Cancel $S_0$ and take natural logarithms:

$$t = \\frac{\\ln M}{r}$$

For doubling, $M = 2$, and the account's nominal rate is $r = 0.065$ compounded continuously:

$$t_2 = \\frac{\\ln 2}{0.065}$$

$$= \\frac{0.693147}{0.065}$$

$$\\approx 10.6638 \\text{ years}$$

The claim gives approximately 10.66 years, which is exactly the computed doubling time to two decimal places. The initial \\$12,000 never enters, since it cancels out of the equation. The statement is true.`,
      `**B) The tripling time at 6.5% is approximately 16.90 years.**  (true)

Tripling uses the same multiple rule as any other growth target, with $M = 3$ in place of 2:

$$S_0 e^{rt} = M S_0 \\quad \\Longrightarrow \\quad t = \\frac{\\ln M}{r}$$

Substitute $M = 3$ and the continuous rate $r = 0.065$:

$$t_3 = \\frac{\\ln 3}{0.065}$$

$$= \\frac{1.098612}{0.065}$$

$$\\approx 16.9017 \\text{ years}$$

The claim states approximately 16.90 years, matching the computed tripling time to two decimal places. As with doubling, the \\$12,000 principal cancels and plays no part. The statement is true.`,
      `**C) The quadrupling time at 6.5% is approximately 21.33 years, and this is exactly equal to twice the doubling time.**  (true)

This claim has two parts, a value and a relationship, so both need working out. The multiple rule gives the quadrupling time with $M = 4$:

$$t_M = \\frac{\\ln M}{r}$$

$$t_4 = \\frac{\\ln 4}{0.065} = \\frac{1.386294}{0.065}$$

$$\\approx 21.3276 \\text{ years}$$

That confirms the stated 21.33 years. For the relationship, note that 4 is 2 squared, so its logarithm splits:

$$\\ln 4 = \\ln 2^{2} = 2 \\ln 2$$

Dividing both sides by the rate:

$$t_4 = \\frac{2\\ln 2}{0.065} = 2 \\times \\frac{\\ln 2}{0.065} = 2 t_2$$

Numerically, with $t_2 = 0.693147/0.065 \\approx 10.6638$ years:

$$2 \\times 10.6638 = 21.3276 \\text{ years}$$

Both parts hold, the value of about 21.33 years and the exact doubling relationship, so the statement is true.`,
      `**D) At the quadrupling time, the fund's value is exactly \\$48,000.00.**  (true)

The quadrupling time is defined as the moment the balance reaches 4 times the initial deposit, so the value at that date follows from the definition rather than from a fresh exponential calculation:

$$S(t_4) = 4 S_0$$

Substitute the initial deposit of \\$12,000:

$$S(t_4) = 4 \\times 12,000$$

$$= 48,000.00$$

The same figure comes from the growth law directly, using $t_4 = \\ln(4)/0.065 \\approx 21.3276$ years:

$$12,000 \\times e^{0.065 \\times 21.3276} = 12,000 \\times e^{1.386294} = 12,000 \\times 4 = 48,000.00$$

The claim states exactly \\$48,000.00 at the quadrupling time, which is what both routes give, so the statement is true.`,
      `**E) The tripling time must be exactly 1.5 times the doubling time.**  (false)

The ratio of two multiple-times is determined by the logarithms, not by the multiples themselves. From the general rule:

$$t_M = \\frac{\\ln M}{r}$$

Form the ratio of tripling time to doubling time, where the rate cancels:

$$\\frac{t_3}{t_2} = \\frac{\\ln 3 / r}{\\ln 2 / r} = \\frac{\\ln 3}{\\ln 2}$$

Evaluate it:

$$\\frac{1.098612}{0.693147} \\approx 1.58496$$

The claim asserts a ratio of exactly 1.5, which is what would follow from comparing the multiples $3/2$ directly. Compare the two:

$$1.58496 - 1.5 = 0.08496$$

Checking in years, $t_3 \\approx 16.9017$ while $1.5 \\times t_2 = 1.5 \\times 10.6638 \\approx 15.9957$, a difference of about 0.91 years. The ratio is close to 1.5 but not equal to it, and the claim says exactly, so the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 39,
    solution_overview: `A socially-responsible impact investing fund places \\$12,000 into a continuously-compounded account at a nominal annual rate of 6.5%, and the fund's trustees want to understand exactly how the times needed to double, triple, and quadruple the initial investment relate to one another.

**Part 1: Setup.**

$S_0 = \\$12,000$

Nominal annual rate r = 6.5% = 0.065

Compounding: continuous

Targets: $S(t) = 2 S_0,3 S_0,4 S_0$

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

Time to reach multiple $M$: $t = \\ln(M)/r$

**Part 3: Solve.**

**1.** Doubling: $t = \\ln(2)/0.065 = 0.693147/0.065 \\approx 10.6638$ years.

**2.** Tripling: $t = \\ln(3)/0.065 = 1.098612/0.065 \\approx 16.9017$ years.

**3.** Quadrupling: $t = \\ln(4)/0.065 = 1.386294/0.065 \\approx 21.3276$ years.

**4.** Twice the doubling time: $2 \\times 10.6638 = 21.3276$ years, which exactly equals the quadrupling time, since $\\ln(4) = \\ln(2^{2}) = 2\\ln(2)$.

**5.** Ratio of tripling time to doubling time: $\\ln(3)/\\ln(2) \\approx 1.5850$, not $1.5$; value at quadrupling time: $12,000 \\times 4 = \\$48,000.00$.
`,
  },
  {
    id: `math-11-40`,
    case_id: `MATH 11.40`,
    title: `Capstone: A Three-Asset Family Office Portfolio Under Continuous Growth and Decay`,
    subsection: `11.2`,
    context: `A family office's capstone valuation combines three holdings, all valued in nominal undiscounted dollars and added together just like ordinary fixed amounts. Asset A is a private equity stake currently worth \\$150,000, growing continuously at a nominal annual rate of 6% for 5 years. Asset B is aging warehouse machinery currently worth \\$220,000, depreciating continuously at an annual rate of 9% for the same 5 years. Asset C is a licensing agreement currently worth \\$100,000 that grows continuously at 8% for its first 3 years before slowing to a continuous 3% for its remaining 2 years of the 5-year total.`,
    statements: [
      `Asset A's value after 5 years is approximately \\$202,478.82.`,
      `Asset B's value after 5 years is approximately \\$140,278.19.`,
      `Asset C's value after 5 years is approximately \\$130,000.00.`,
      `The combined portfolio value after 5 years is less than the sum of the three original principals.`,
      `If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Asset A's value after 5 years is approximately \\$202,478.82.**  (true)

Asset A is a straightforward continuous growth calculation, using the accumulation rule:

$$A(t) = A_0 e^{r_A t}$$

Substitute the current value $A_0 = 150,000$, the growth rate $r_A = 0.06$, and $t = 5$ years:

$$A(5) = 150,000 \\times e^{0.06 \\times 5}$$

$$= 150,000 \\times e^{0.30}$$

$$e^{0.30} \\approx 1.349859$$

$$A(5) \\approx 150,000 \\times 1.349859 = 202,478.82$$

The claim gives approximately \\$202,478.82 for Asset A after 5 years, matching the computed value to the cent, so the statement is true.`,
      `**B) Asset B's value after 5 years is approximately \\$140,278.19.**  (true)

Asset B is depreciating rather than growing, so the rate enters the exponent with a negative sign:

$$B(t) = B_0 e^{-\\delta_B t}$$

Substitute the current value $B_0 = 220,000$, the depreciation rate $\\delta_B = 0.09$, and $t = 5$ years:

$$B(5) = 220,000 \\times e^{-0.09 \\times 5}$$

$$= 220,000 \\times e^{-0.45}$$

$$e^{-0.45} \\approx 0.637628$$

$$B(5) \\approx 220,000 \\times 0.637628 = 140,278.19$$

The machinery keeps about $63.8\\%$ of its current value over the 5 years. The claim gives approximately \\$140,278.19, which is exactly the computed value, so the statement is true.`,
      `**C) Asset C's value after 5 years is approximately \\$130,000.00.**  (false)

Asset C grows at two different rates in sequence, so the two phases have to be chained. The first phase runs 3 years at $8\\%$:

$$C(3) = 100,000 \\times e^{0.08 \\times 3}$$

$$= 100,000 \\times e^{0.24}$$

$$e^{0.24} \\approx 1.271249$$

$$C(3) \\approx 127,124.92$$

The second phase carries that balance 2 more years at $3\\%$:

$$C(5) = C(3) \\times e^{0.03 \\times 2}$$

$$= 127,124.92 \\times e^{0.06}$$

$$e^{0.06} \\approx 1.061837$$

$$C(5) \\approx 134,985.88$$

The same result follows from adding the exponents, since $e^{0.24} e^{0.06} = e^{0.30}$ and $100,000 \\times e^{0.30} \\approx 134,985.88$. Compare with the claim:

$$134,985.88 - 130,000.00 = 4,985.88$$

The claim understates Asset C's 5-year value by about \\$4,986, so the statement is false.`,
      `**D) The combined portfolio value after 5 years is less than the sum of the three original principals.**  (false)

This comparison needs all three 5-year values and the sum of the three principals. Asset A grows continuously at $6\\%$:

$$A(5) = 150,000 \\times e^{0.30} \\approx 202,478.82$$

Asset B depreciates continuously at $9\\%$:

$$B(5) = 220,000 \\times e^{-0.45} \\approx 140,278.19$$

Asset C grows at $8\\%$ for 3 years and then $3\\%$ for 2 years, so its exponents add:

$$C(5) = 100,000 \\times e^{0.24} e^{0.06} = 100,000 \\times e^{0.30} \\approx 134,985.88$$

These are nominal undiscounted dollars, so they add directly:

$$202,478.82 + 140,278.19 + 134,985.88 = 477,742.89$$

The three original principals add to:

$$150,000 + 220,000 + 100,000 = 470,000.00$$

Compare the two totals:

$$477,742.89 - 470,000.00 = 7,742.89$$

The portfolio ends up about \\$7,743 above the principal sum, because the gains on Assets A and C together outweigh the decline in Asset B over this particular horizon. The claim says the total is less, so the statement is false.`,
      `**E) If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.**  (true)

This is a what-if on Asset B, replacing decay with growth of the same magnitude, so the sign in the exponent flips:

$$B(t)' = B_0 e^{+\\delta t}$$

Substitute $B_0 = 220,000$, the same $9\\%$ magnitude, and $t = 5$ years:

$$B(5)' = 220,000 \\times e^{0.09 \\times 5}$$

$$= 220,000 \\times e^{0.45}$$

$$e^{0.45} \\approx 1.568312$$

$$B(5)' \\approx 220,000 \\times 1.568312 = 345,028.68$$

Compare that with the threshold in the claim:

$$345,028.68 - 340,000.00 = 5,028.68$$

The hypothetical growing asset clears \\$340,000.00 by about \\$5,029. The size of the swing is worth noting, since the same $9\\%$ magnitude produces \\$140,278.19 when it shrinks the asset and \\$345,028.68 when it grows it. The statement is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 40,
    solution_overview: `A family office's capstone valuation combines three holdings, all valued in nominal undiscounted dollars and added together just like ordinary fixed amounts. Asset A is a private equity stake currently worth \\$150,000, growing continuously at a nominal annual rate of 6% for 5 years. Asset B is aging warehouse machinery currently worth \\$220,000, depreciating continuously at an annual rate of 9% for the same 5 years. Asset C is a licensing agreement currently worth \\$100,000 that grows continuously at 8% for its first 3 years before slowing to a continuous 3% for its remaining 2 years of the 5-year total.

**Part 1: Setup.**

Asset A: $A_0 = \\$150,000$, $r_A = 0.06$, $t = 5$

Asset B: $B_0 = \\$220,000$, $\\delta_B = 0.09$, $t = 5$

Asset C: $C_0 = \\$100,000$, $r_1 = 8\\%$ for 3 years, then $r_2 = 3\\%$ for 2 years

**Part 2: Formula.**

$A(t) = A_0 e^{r_A t}$; $B(t) = B_0 e^{-\\delta_B t}$; $C(5) = C_0 e^{r_1 \\times 3} e^{r_2 \\times 2}$

Portfolio total: $A(5) + B(5) + C(5)$

**Part 3: Solve.**

**1.** $A(5) = 150,000 e^{0.30} = \\$202,478.82$; $B(5) = 220,000 e^{-0.45} = \\$140,278.19$.

**2.** $C(5) = 100,000 e^{0.24} e^{0.06} = \\$134,985.88$.

**3.** Portfolio total: $\\$477,742.89$, which exceeds the $\\$470,000.00$ principal sum (not less).

**4.** If $B_0$ instead grew at $9\\%$: $B(5)' = 220,000 e^{0.45} = \\$345,028.68$, which exceeds $\\$340,000.00$.
`,
  },
  {
    id: `math-11-41`,
    case_id: `MATH 11.41`,
    title: `Present Value of a Client Bonus Payment`,
    subsection: `11.3`,
    context: `Ms. Kettering, owner of a small marketing agency, has been promised a \\$8,000 performance bonus by a client, payable in exactly 1 year. The prevailing interest rate for such arrangements is 5% per year, compounded annually, so this is a single-payment present-value problem with $K = \\$8,000$, r = 0.05, and t = 1.`,
    statements: [
      `The discount factor is approximately 0.9524.`,
      `The PDV of the \\$8,000 bonus is approximately \\$7,619.05.`,
      `If the interest rate were 10% instead of 5%, the PDV of the \\$8,000 bonus would be higher than its value under the original 5% rate.`,
      `The difference between the \\$8,000 future bonus and its present value is approximately \\$423.81.`,
      `If the interest rate were 0% per year, the present value of the \\$8,000 bonus would be exactly \\$7,500.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The discount factor is approximately 0.9524.**  (true)

The discount factor is the number that converts one dollar received at a future date into dollars today. Under annual compounding it is the reciprocal of the growth factor:

$$\\text{discount factor} = (1+r)^{-t}$$

The bonus is payable in exactly 1 year and the prevailing rate is $5\\%$ per year, so substitute $r = 0.05$ and $t = 1$:

$$(1.05)^{-1} = \\frac{1}{1.05}$$

$$\\approx 0.952381$$

Rounded to four decimal places that is 0.9524, which is what the claim states. Every dollar promised a year from now is worth about 95.24 cents today at this rate, so the statement is true.`,
      `**B) The PDV of the \\$8,000 bonus is approximately \\$7,619.05.**  (true)

Present value discounts a single future amount back to today using the annual compounding rule:

$$PDV = K(1+r)^{-t}$$

Substitute the promised bonus $K = 8,000$, the rate $r = 0.05$, and the 1-year wait $t = 1$:

$$PDV = 8,000 \\times (1.05)^{-1}$$

$$= \\frac{8,000}{1.05}$$

$$\\approx 7,619.05$$

The same figure comes from applying the discount factor directly, since $8,000 \\times 0.952381 \\approx 7,619.05$. The claim gives approximately \\$7,619.05 as the present value of the bonus, matching the computed amount to the cent, so the statement is true.`,
      `**C) If the interest rate were 10% instead of 5%, the PDV of the \\$8,000 bonus would be higher than its value under the original 5% rate.**  (false)

Changing the rate changes only the discount factor, so the present value is recomputed at the new rate and compared with the original. The rule is:

$$PDV = K(1+r)^{-t}$$

At the original $5\\%$:

$$PDV_{5\\%} = \\frac{8,000}{1.05} \\approx 7,619.05$$

At the hypothetical $10\\%$:

$$PDV_{10\\%} = \\frac{8,000}{1.10}$$

$$\\approx 7,272.73$$

Compare the two present values:

$$7,619.05 - 7,272.73 = 346.32$$

Doubling the rate lowers the present value by about \\$346, not raises it. That is the general behaviour of the formula, since $(1+r)^{-t}$ shrinks as $r$ grows, meaning a higher required return makes any fixed future sum worth less today. The claim states the opposite direction, so the statement is false.`,
      `**D) The difference between the \\$8,000 future bonus and its present value is approximately \\$423.81.**  (false)

The gap between a future amount and its present value is the interest that the waiting period accounts for, so both figures are needed. First the present value under annual compounding:

$$PDV = K(1+r)^{-t} = \\frac{8,000}{1.05} \\approx 7,619.05$$

Now subtract it from the face amount of the bonus:

$$8,000.00 - 7,619.05$$

$$= 380.95$$

Compare with the claimed gap:

$$423.81 - 380.95 = 42.86$$

The true difference is about \\$380.95, roughly \\$43 below the claimed \\$423.81. As a check, \\$7,619.05 grown forward one year at $5\\%$ gives $7,619.05 \\times 1.05 \\approx 8,000.00$, confirming the present value and therefore the gap. The statement is false.`,
      `**E) If the interest rate were 0% per year, the present value of the \\$8,000 bonus would be exactly \\$7,500.**  (false)

At a zero interest rate there is no compensation for waiting, so the discount factor has to be evaluated rather than guessed. The rule is:

$$PDV = K(1+r)^{-t}$$

Substitute $r = 0$ and $t = 1$:

$$(1 + 0)^{-1} = 1^{-1} = 1$$

Apply that factor to the \\$8,000 bonus:

$$PDV = 8,000 \\times 1$$

$$= 8,000.00$$

Compare with the claimed figure:

$$8,000.00 - 7,500.00 = 500.00$$

At $r = 0$ the present value equals the full face amount, because a dollar next year is worth exactly a dollar today when waiting costs nothing. The claim puts it at \\$7,500, which is \\$500 too low, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 41,
    solution_overview: `Ms. Kettering, owner of a small marketing agency, has been promised a \\$8,000 performance bonus by a client, payable in exactly 1 year. The prevailing interest rate for such arrangements is 5% per year, compounded annually, so this is a single-payment present-value problem with $K = \\$8,000$, r = 0.05, and t = 1.

**Part 1: Setup.**

$K = \\$8,000$ (future bonus)

Nominal annual rate p = 5%, so r = 0.05

t = 1 year (annual compounding)

**Part 2: Formula.**

$PDV = K(1+r)^{-t}$

**Part 3: Solve.**

**1.** Discount factor: $(1.05)^{-1} = 1/1.05 \\approx 0.9524$.

**2.** $PDV = 8,000 \\times 0.9524 \\approx \\$7,619.05$.

**3.** At $r = 0.10$: $PDV = 8,000/1.10 \\approx \\$7,272.73$.

**4.** Difference at $5\\%$: $8,000 - 7,619.05 = \\$380.95$.

**5.** At $r = 0\\%$: $PDV = 8,000 \\times (1.00)^{-1} = \\$8,000$.`,
  },
  {
    id: `math-11-42`,
    case_id: `MATH 11.42`,
    title: `Continuous Compounding on a Consulting Milestone Payment`,
    subsection: `11.3`,
    context: `A freelance IT consultant will receive a \\$12,000 milestone payment from a client in 3 years upon final project sign-off. The client's finance department discounts all deferred payables continuously, at a rate of 6% per year, so this problem uses $K = \\$12,000$, r = 0.06, and t = 3 under continuous compounding.`,
    statements: [
      `The continuous discount factor is approximately 0.8353.`,
      `The PDV of the \\$12,000 payment is approximately \\$10,023.24.`,
      `The present value computed with continuous compounding is greater than the present value computed with annual compounding at the same 6% rate over the same 3 years.`,
      `The annual-compounding PDV exceeds the continuous-compounding PDV by approximately \\$60.00.`,
      `If the payment were instead due in 6 years rather than 3, its present value would be less than the present value found for the original 3-year horizon.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The continuous discount factor is approximately 0.8353.**  (true)

Continuous discounting shrinks a future payment by the factor $e^{-rt}$, where the rate and the horizon multiply inside the exponent:

$$\\text{discount factor} = e^{-rt}$$

The client discounts at $6\\%$ per year and the milestone payment arrives in 3 years, so first form the exponent:

$$rt = 0.06 \\times 3 = 0.18$$

Now evaluate the factor at that exponent:

$$e^{-0.18} \\approx 0.835270$$

Rounded to four decimal places this is 0.8353, exactly the figure in the claim. In words, about $83.53\\%$ of the payment's face value survives three years of continuous discounting at this rate, so the statement is true.`,
      `**B) The PDV of the \\$12,000 payment is approximately \\$10,023.24.**  (true)

Present value under continuous compounding multiplies the future amount by the exponential discount factor:

$$PDV = K e^{-rt}$$

Substitute the milestone payment $K = 12,000$, the rate $r = 0.06$, and the horizon $t = 3$ years. The exponent is:

$$rt = 0.06 \\times 3 = 0.18$$

$$e^{-0.18} \\approx 0.835270$$

Apply the factor to the payment:

$$PDV = 12,000 \\times 0.835270$$

$$\\approx 10,023.24$$

The claim gives approximately \\$10,023.24 for the present value of the \\$12,000 payment, which is exactly the computed figure, so the statement is true.`,
      `**C) The present value computed with continuous compounding is greater than the present value computed with annual compounding at the same 6% rate over the same 3 years.**  (false)

Two discounting conventions are being compared at the same stated rate, so both present values have to be computed. Continuous discounting uses the exponential factor:

$$PDV_{\\mathrm{cont}} = K e^{-rt}$$

$$= 12,000 \\times e^{-0.06 \\times 3} = 12,000 \\times e^{-0.18}$$

$$e^{-0.18} \\approx 0.835270$$

$$PDV_{\\mathrm{cont}} \\approx 10,023.24$$

Annual compounding uses the discrete factor over 3 whole years:

$$PDV_{\\mathrm{ann}} = K(1+r)^{-t}$$

$$= 12,000 \\times (1.06)^{-3}$$

$$(1.06)^{3} \\approx 1.191016$$

$$PDV_{\\mathrm{ann}} \\approx \\frac{12,000}{1.191016} \\approx 10,075.43$$

Compare the two present values:

$$10,075.43 - 10,023.24 = 52.19$$

The continuous figure is the smaller of the two by about \\$52. The reason is that continuous compounding grows money faster at the same stated rate, since interest is credited at every instant rather than once a year, and a convention that grows money faster must also discount it harder. The claim says the continuous present value is greater, which reverses this, so the statement is false.`,
      `**D) The annual-compounding PDV exceeds the continuous-compounding PDV by approximately \\$60.00.**  (false)

This claim is about the size of the gap, so both present values are needed and then their difference. Continuous discounting gives:

$$PDV_{\\mathrm{cont}} = 12,000 \\times e^{-0.18} \\approx 12,000 \\times 0.835270 \\approx 10,023.24$$

Annual compounding at the same $6\\%$ over the same 3 years gives:

$$PDV_{\\mathrm{ann}} = \\frac{12,000}{(1.06)^{3}} = \\frac{12,000}{1.191016} \\approx 10,075.43$$

Subtract the smaller from the larger:

$$10,075.43 - 10,023.24$$

$$= 52.19$$

Compare that with the claimed gap:

$$60.00 - 52.19 = 7.81$$

The annual-compounding present value does exceed the continuous one, but by about \\$52.19 rather than \\$60.00, so the claimed figure overstates the difference by nearly \\$8. The statement is false.`,
      `**E) If the payment were instead due in 6 years rather than 3, its present value would be less than the present value found for the original 3-year horizon.**  (true)

Lengthening the horizon changes only the exponent, so the new present value is recomputed and set against the original. The rule is:

$$PDV = K e^{-rt}$$

At the original 3-year horizon:

$$PDV_3 = 12,000 \\times e^{-0.18} \\approx 12,000 \\times 0.835270 \\approx 10,023.24$$

At the doubled 6-year horizon the exponent doubles as well:

$$rt = 0.06 \\times 6 = 0.36$$

$$e^{-0.36} \\approx 0.697676$$

$$PDV_6 = 12,000 \\times 0.697676 \\approx 8,372.12$$

Compare the two present values:

$$10,023.24 - 8,372.12 = 1,651.12$$

Waiting twice as long costs about \\$1,651 of present value, because $e^{-rt}$ falls as $t$ rises and the discount factor over 6 years is the square of the factor over 3 years. The claim says the 6-year present value is lower, which is what the arithmetic shows, so the statement is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 42,
    solution_overview: `A freelance IT consultant will receive a \\$12,000 milestone payment from a client in 3 years upon final project sign-off. The client's finance department discounts all deferred payables continuously, at a rate of 6% per year, so this problem uses $K = \\$12,000$, r = 0.06, and t = 3 under continuous compounding.

**Part 1: Setup.**

$K = \\$12,000$ (milestone payment)

Continuous annual rate p = 6%, so r = 0.06

t = 3 years

**Part 2: Formula.**

$PDV = Ke^{-rt}$

**Part 3: Solve.**

**1.** $rt = 0.06 \\times 3 = 0.18$, so $e^{-0.18} \\approx 0.8353$.

**2.** $PDV = 12,000 \\times 0.8353 \\approx \\$10,023.24$.

**3.** Annual compounding: $PDV = 12,000 \\times (1.06)^{-3} = 12,000/1.191016 \\approx \\$10,075.66$.

**4.** Difference: $10,075.66 - 10,023.24 = \\$52.42$.

**5.** For $t = 6$: $rt = 0.36$, $e^{-0.36} \\approx 0.6977$, so $PDV = 12,000 \\times 0.6977 \\approx \\$8,372.11$.`,
  },
  {
    id: `math-11-43`,
    case_id: `MATH 11.43`,
    title: `Escrowed Sale Proceeds for a Landlord`,
    subsection: `11.3`,
    context: `A landlord is due to receive \\$45,000 in escrowed proceeds from a property sale in 8 years, once a title dispute is resolved. The applicable interest rate is 7% per year. The landlord's accountant computes the present value under both annual compounding and continuous compounding, so this task uses $K = \\$45,000$, r = 0.07, and t = 8 under both methods.`,
    statements: [
      `The annual discount factor is approximately 0.5820.`,
      `The present value under annual compounding is approximately \\$26,190.41.`,
      `The present value under continuous compounding is approximately \\$24,900.00.`,
      `The annual-compounding present value exceeds the continuous-compounding present value by approximately \\$650.00.`,
      `If the interest rate were 0% per year, both compounding methods would give an identical present value of exactly \\$40,000.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The annual discount factor is approximately 0.5820.**  (true)

The annual discount factor converts one dollar at the payout date into dollars today, and it is the reciprocal of the compound growth factor:

$$\\text{discount factor} = (1+r)^{-t}$$

The escrowed proceeds arrive in 8 years at a rate of $7\\%$ per year, so build the growth factor first:

$$(1.07)^{8} \\approx 1.718186$$

Now invert it:

$$(1.07)^{-8} = \\frac{1}{1.718186}$$

$$\\approx 0.582009$$

Rounded to four decimal places that is 0.5820, exactly the figure the claim gives. A little over $58\\%$ of each future dollar survives eight years of annual discounting at this rate, so the statement is true.`,
      `**B) The present value under annual compounding is approximately \\$26,190.41.**  (true)

Present value under annual compounding applies the discount factor to the amount due:

$$PDV_{\\mathrm{ann}} = K(1+r)^{-t}$$

Substitute the escrowed proceeds $K = 45,000$, the rate $r = 0.07$, and the wait $t = 8$ years. The discount factor is:

$$(1.07)^{-8} = \\frac{1}{1.718186} \\approx 0.582009$$

Apply it to the proceeds:

$$PDV_{\\mathrm{ann}} = 45,000 \\times 0.582009$$

$$\\approx 26,190.41$$

The claim gives approximately \\$26,190.41 as the annual-compounding present value, matching the computed amount to the cent, so the statement is true.`,
      `**C) The present value under continuous compounding is approximately \\$24,900.00.**  (false)

Continuous compounding uses the exponential discount factor rather than the discrete one:

$$PDV_{\\mathrm{cont}} = K e^{-rt}$$

Substitute the rate $r = 0.07$ and the horizon $t = 8$ years to form the exponent:

$$rt = 0.07 \\times 8 = 0.56$$

$$e^{-0.56} \\approx 0.571209$$

Apply that factor to the \\$45,000 due:

$$PDV_{\\mathrm{cont}} = 45,000 \\times 0.571209$$

$$\\approx 25,704.41$$

Compare with the claimed figure:

$$25,704.41 - 24,900.00 = 804.41$$

The correct continuous present value is about \\$804 above the claimed \\$24,900.00, so the statement is false.`,
      `**D) The annual-compounding present value exceeds the continuous-compounding present value by approximately \\$650.00.**  (false)

The gap between the two conventions requires both present values first. Annual compounding gives:

$$PDV_{\\mathrm{ann}} = 45,000 \\times (1.07)^{-8} = \\frac{45,000}{1.718186} \\approx 26,190.41$$

Continuous compounding at the same $7\\%$ over the same 8 years gives:

$$PDV_{\\mathrm{cont}} = 45,000 \\times e^{-0.56} \\approx 45,000 \\times 0.571209 \\approx 25,704.41$$

Subtract the smaller from the larger:

$$26,190.41 - 25,704.41$$

$$= 486.00$$

Compare that with the claimed gap:

$$650.00 - 486.00 = 164.00$$

The annual present value does exceed the continuous one, and the direction of the claim is right, but the size is wrong by \\$164. The true gap is \\$486.00, not approximately \\$650.00, so the statement is false.`,
      `**E) If the interest rate were 0% per year, both compounding methods would give an identical present value of exactly \\$40,000.**  (false)

A zero rate has to be pushed through both formulas rather than assumed. Under annual compounding:

$$PDV_{\\mathrm{ann}} = K(1+r)^{-t} = 45,000 \\times (1+0)^{-8}$$

$$= 45,000 \\times 1 = 45,000.00$$

Under continuous compounding:

$$PDV_{\\mathrm{cont}} = K e^{-rt} = 45,000 \\times e^{-0 \\times 8}$$

$$= 45,000 \\times e^{0} = 45,000 \\times 1 = 45,000.00$$

The two methods do agree, since both discount factors collapse to 1 when the rate is zero. The value they agree on, though, is the full face amount:

$$45,000.00 - 40,000.00 = 5,000.00$$

The claimed \\$40,000 is \\$5,000 short of the actual escrowed amount. Half of the claim holds and half does not, and the claim has to be right on both counts, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 43,
    solution_overview: `A landlord is due to receive \\$45,000 in escrowed proceeds from a property sale in 8 years, once a title dispute is resolved. The applicable interest rate is 7% per year. The landlord's accountant computes the present value under both annual compounding and continuous compounding, so this task uses $K = \\$45,000$, r = 0.07, and t = 8 under both methods.

**Part 1: Setup.**

$K = \\$45,000$ (escrowed proceeds)

Nominal/continuous annual rate p = 7%, so r = 0.07

t = 8 years

**Part 2: Formula.**

Annual: $PDV = K(1+r)^{-t}$

Continuous: $PDV = Ke^{-rt}$

**Part 3: Solve.**

**1.** $(1.07)^{8} \\approx 1.718186$, so $(1.07)^{-8} \\approx 0.5820$.

**2.** Annual $PDV = 45,000 \\times 0.5820 \\approx \\$26,190.41$.

**3.** $rt = 0.07 \\times 8 = 0.56$, $e^{-0.56} \\approx 0.5712$, so continuous $PDV = 45,000 \\times 0.5712 \\approx \\$25,704.41$.

**4.** Difference: $26,190.41 - 25,704.41 = \\$486.00$.

**5.** At $r = 0$: both formulas reduce to $K \\times 1 = \\$45,000$.`,
  },
  {
    id: `math-11-44`,
    case_id: `MATH 11.44`,
    title: `Funding a Future Equipment Purchase`,
    subsection: `11.3`,
    context: `A dental practice wants to have exactly \\$150,000 available in 5 years to purchase new imaging equipment. Its bank offers a continuous annual interest rate of 4.5% on a dedicated savings account, and the practice wants to know how much it must deposit today, i.e., the present value of the \\$150,000 goal under $K = \\$150,000$, r = 0.045, and t = 5.`,
    statements: [
      `The continuous discount factor is approximately 0.8125.`,
      `The practice must deposit approximately \\$119,777.40 today to reach its \\$150,000 goal in 5 years.`,
      `If the practice deposited only \\$110,000 today instead, it would still reach the \\$150,000 goal after 5 years at this rate.`,
      `If the bank instead compounded the same 4.5% nominal rate annually rather than continuously, the required deposit today would be lower than the deposit required under continuous compounding.`,
      `Doubling the time horizon to 10 years would require depositing exactly half of the amount required for the original 5-year horizon today.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) The continuous discount factor is approximately 0.8125.**  (false)

The continuous discount factor is the exponential of the negative of the rate multiplied by the horizon:

$$\\text{discount factor} = e^{-rt}$$

The bank offers $4.5\\%$ continuous interest and the equipment purchase is 5 years away, so form the exponent first:

$$rt = 0.045 \\times 5 = 0.225$$

Now evaluate the factor:

$$e^{-0.225} \\approx 0.798516$$

Compare with the claimed value:

$$0.8125 - 0.7985 = 0.0140$$

The correct factor is about 0.7985, roughly 0.014 below the claimed 0.8125, a difference that would misprice the deposit by more than \\$2,000 on a \\$150,000 goal. The statement is false.`,
      `**B) The practice must deposit approximately \\$119,777.40 today to reach its \\$150,000 goal in 5 years.**  (true)

The required deposit is the present value of the target amount under continuous discounting:

$$A = K e^{-rt}$$

Substitute the goal $K = 150,000$, the continuous rate $r = 0.045$, and the horizon $t = 5$ years. The exponent is:

$$rt = 0.045 \\times 5 = 0.225$$

$$e^{-0.225} \\approx 0.798516$$

Apply the factor to the goal:

$$A = 150,000 \\times 0.798516$$

$$\\approx 119,777.43$$

The claim gives approximately \\$119,777.40, and the computed deposit agrees with that to within a few cents. Growing it forward confirms it, since $119,777.43 \\times e^{0.225} \\approx 150,000$. The statement is true.`,
      `**C) If the practice deposited only \\$110,000 today instead, it would still reach the \\$150,000 goal after 5 years at this rate.**  (false)

Testing a proposed deposit is easiest by growing it forward and comparing with the goal. Continuous accumulation uses:

$$S(t) = A e^{rt}$$

Substitute the proposed deposit $A = 110,000$, the rate $r = 0.045$, and $t = 5$ years:

$$S(5) = 110,000 \\times e^{0.045 \\times 5}$$

$$= 110,000 \\times e^{0.225}$$

$$e^{0.225} \\approx 1.252323$$

$$S(5) \\approx 137,755.50$$

Compare that with the target:

$$150,000.00 - 137,755.50 = 12,244.50$$

A \\$110,000 deposit falls about \\$12,245 short of the \\$150,000 goal, which is consistent with the required deposit of roughly \\$119,777.43. The claim says \\$110,000 would still reach the goal, so the statement is false.`,
      `**D) If the bank instead compounded the same 4.5% nominal rate annually rather than continuously, the required deposit today would be lower than the deposit required under continuous compounding.**  (false)

Switching conventions changes the discount factor, so the required deposit is recomputed under annual compounding and compared. Annual compounding uses:

$$A_{\\mathrm{ann}} = K(1+r)^{-t}$$

Substitute $K = 150,000$, $r = 0.045$, and $t = 5$:

$$(1.045)^{5} \\approx 1.246182$$

$$A_{\\mathrm{ann}} = \\frac{150,000}{1.246182}$$

$$\\approx 120,367.66$$

The continuous requirement was:

$$A_{\\mathrm{cont}} = 150,000 \\times e^{-0.225} \\approx 119,777.43$$

Compare the two deposits:

$$120,367.66 - 119,777.43 = 590.23$$

Annual compounding needs about \\$590 more up front, because it credits interest only once a year and therefore grows the deposit more slowly than continuous compounding at the same stated rate. The claim says the annual requirement would be lower, so the statement is false.`,
      `**E) Doubling the time horizon to 10 years would require depositing exactly half of the amount required for the original 5-year horizon today.**  (false)

Doubling the horizon changes the exponent, and discounting is exponential in time rather than linear, so the new deposit has to be computed rather than halved. The rule is:

$$A = K e^{-rt}$$

At $t = 10$ years the exponent becomes:

$$rt = 0.045 \\times 10 = 0.45$$

$$e^{-0.45} \\approx 0.637628$$

$$A_{10} = 150,000 \\times 0.637628 \\approx 95,644.22$$

Half of the original 5-year requirement would be:

$$\\frac{119,777.43}{2} = 59,888.72$$

Compare the two:

$$95,644.22 - 59,888.72 = 35,755.50$$

The 10-year deposit is about \\$35,756 above half the 5-year deposit. Doubling the time squares the discount factor rather than halving the deposit, since $e^{-0.45} = (e^{-0.225})^{2} \\approx 0.7985^{2}$, and squaring a number near 0.8 gives about 0.64, not 0.4. The statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 44,
    solution_overview: `A dental practice wants to have exactly \\$150,000 available in 5 years to purchase new imaging equipment. Its bank offers a continuous annual interest rate of 4.5% on a dedicated savings account, and the practice wants to know how much it must deposit today, i.e., the present value of the \\$150,000 goal under $K = \\$150,000$, r = 0.045, and t = 5.

**Part 1: Setup.**

$K = \\$150,000$ (target future amount)

Continuous annual rate p = 4.5%, so r = 0.045

t = 5 years

**Part 2: Formula.**

Required deposit: $A = Ke^{-rt}$

**Part 3: Solve.**

**1.** $rt = 0.045 \\times 5 = 0.225$, so $e^{-0.225} \\approx 0.7985$.

**2.** $A = 150,000 \\times 0.7985 \\approx \\$119,777.40$.

**3.** Future value of $\\$110,000$ after $5$ years at $4.5\\%$ continuous: $110,000 \\times e^{0.225} \\approx 110,000 \\times 1.2523 \\approx \\$137,755.50$.

**4.** Annual compounding: $A = 150,000 \\times (1.045)^{-5} = 150,000/1.246182 \\approx \\$120,367.90$.

**5.** For $t = 10$: $rt = 0.45$, $e^{-0.45} \\approx 0.6376$, so $A = 150,000 \\times 0.6376 \\approx \\$95,644.20$.`,
  },
  {
    id: `math-11-45`,
    case_id: `MATH 11.45`,
    title: `Implied Maturity of a Discounted Promissory Note`,
    subsection: `11.3`,
    context: `An investor purchases a promissory note today for \\$18,500. The note promises a payoff of \\$25,000 at maturity, and the market interest rate for notes of this kind is 6% per year, compounded annually. The investor wants to work backward from the price to find the implied maturity time, using $PDV = \\$18,500$, $K = \\$25,000$, and r = 0.06.`,
    statements: [
      `The ratio of the payoff to the purchase price is approximately 1.3514.`,
      `The implied maturity time, assuming annual compounding, is approximately 5.17 years.`,
      `If the purchase price had instead been \\$20,000 for the same \\$25,000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.`,
      `If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.`,
      `The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The ratio of the payoff to the purchase price is approximately 1.3514.**  (true)

The ratio of payoff to price is what the compounding factor has to cover over the life of the note, so it is computed directly from the two amounts:

$$\\frac{K}{PDV} = \\frac{25,000}{18,500}$$

$$\\approx 1.351351$$

Rounded to four decimal places this is 1.3514, exactly the figure in the claim. In words, the note has to grow by about $35.1\\%$ in total between purchase and maturity, and it is this total multiple, not the annual rate on its own, that determines how long the note must run. The statement is true.`,
      `**B) The implied maturity time, assuming annual compounding, is approximately 5.17 years.**  (true)

Solving for maturity time means inverting the annual-compounding present-value rule. Start from:

$$PDV = K(1+r)^{-t}$$

Rearranging puts the growth factor on one side:

$$(1+r)^{t} = \\frac{K}{PDV}$$

Take natural logarithms of both sides and divide:

$$t = \\frac{\\ln(K/PDV)}{\\ln(1+r)}$$

Substitute the payoff-to-price ratio and the market rate $r = 0.06$:

$$\\frac{K}{PDV} = \\frac{25,000}{18,500} \\approx 1.351351$$

$$\\ln(1.351351) \\approx 0.301105$$

$$\\ln(1.06) \\approx 0.058269$$

$$t \\approx \\frac{0.301105}{0.058269} \\approx 5.1675 \\text{ years}$$

The claim gives approximately 5.17 years under annual compounding, which matches the computed maturity to two decimal places, so the statement is true.`,
      `**C) If the purchase price had instead been \\$20,000 for the same \\$25,000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.**  (false)

A different purchase price changes the ratio the note has to cover, so the implied maturity is recomputed from the same inversion:

$$t = \\frac{\\ln(K/PDV)}{\\ln(1+r)}$$

At the hypothetical price of \\$20,000 for the same \\$25,000 payoff:

$$\\frac{K}{PDV} = \\frac{25,000}{20,000} = 1.25$$

$$\\ln(1.25) \\approx 0.223144$$

$$t' \\approx \\frac{0.223144}{0.058269} \\approx 3.8295 \\text{ years}$$

The original price of \\$18,500 implied:

$$t \\approx \\frac{0.301105}{0.058269} \\approx 5.1675 \\text{ years}$$

Compare the two maturities:

$$5.1675 - 3.8295 = 1.3380 \\text{ years}$$

Paying more today means less growth is required to reach the same \\$25,000, so the implied maturity is about 1.34 years shorter, not longer. The claim reverses the direction, so the statement is false.`,
      `**D) If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.**  (false)

Under continuous compounding the inversion is simpler, because the rate is not wrapped in a logarithm. Start from:

$$PDV = K e^{-rt}$$

Rearranging and taking natural logarithms:

$$e^{rt} = \\frac{K}{PDV}$$

$$t = \\frac{\\ln(K/PDV)}{r}$$

Substitute the same ratio and the same $6\\%$ rate:

$$\\ln\\left(\\frac{25,000}{18,500}\\right) \\approx 0.301105$$

$$t = \\frac{0.301105}{0.06}$$

$$\\approx 5.0184 \\text{ years}$$

Compare with the claimed figure:

$$5.45 - 5.02 = 0.43 \\text{ years}$$

The correct continuous-compounding maturity is about 5.02 years, roughly five months shorter than the claimed 5.45 years. The statement is false.`,
      `**E) The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.**  (false)

Both maturities are needed to judge which convention implies the longer wait. Annual compounding puts the rate inside a logarithm:

$$t_{\\mathrm{ann}} = \\frac{\\ln(K/PDV)}{\\ln(1+r)} = \\frac{0.301105}{0.058269} \\approx 5.1675 \\text{ years}$$

Continuous compounding divides by the rate itself:

$$t_{\\mathrm{cont}} = \\frac{\\ln(K/PDV)}{r} = \\frac{0.301105}{0.06} \\approx 5.0184 \\text{ years}$$

Compare the two:

$$5.1675 - 5.0184 = 0.1491 \\text{ years}$$

The continuous figure is about 0.15 years shorter, not longer. The reason sits in the denominators, where $\\ln(1.06) \\approx 0.058269$ is smaller than $0.06$, and dividing by the smaller number gives the larger time. Continuous compounding grows money faster, so it needs less time to turn \\$18,500 into \\$25,000. The statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 45,
    solution_overview: `An investor purchases a promissory note today for \\$18,500. The note promises a payoff of \\$25,000 at maturity, and the market interest rate for notes of this kind is 6% per year, compounded annually. The investor wants to work backward from the price to find the implied maturity time, using $PDV = \\$18,500$, $K = \\$25,000$, and r = 0.06.

**Part 1: Setup.**

$PDV = \\$18,500$ (purchase price)

$K = \\$25,000$ (maturity payoff)

Nominal annual rate p = 6%, so r = 0.06

**Part 2: Formula.**

Annual: $PDV = K(1+r)^{-t}$, so $t = \\ln(K/PDV)/\\ln(1+r)$

Continuous: $PDV = Ke^{-rt}$, so $t = \\ln(K/PDV)/r$

**Part 3: Solve.**

**1.** $K/PDV = 25,000/18,500 \\approx 1.3514$.

**2.** $\\ln(1.3514) \\approx 0.3011$; $\\ln(1.06) \\approx 0.05827$.

**3.** $t = 0.3011/0.05827 \\approx 5.17$ years.

**4.** For a $\\$20,000$ price: ratio $25,000/20,000 = 1.25$, $\\ln(1.25) \\approx 0.2231$, $t = 0.2231/0.05827 \\approx 3.83$ years.

**5.** Continuous: $t = \\ln(1.3514)/0.06 \\approx 0.3011/0.06 \\approx 5.02$ years.

**6.** Compare continuous $t \\approx 5.02$ years vs annual $t \\approx 5.17$ years.`,
  },
  {
    id: `math-11-46`,
    case_id: `MATH 11.46`,
    title: `Implied Continuous Discount Rate on a Collectible Painting`,
    subsection: `11.3`,
    context: `An art gallery has secured a guaranteed future sale of a painting for \\$60,000 in 12 years. A collector is willing to pay \\$27,000 today for the rights to that future payment, with value discounted continuously, so this task solves for r given $PDV = \\$27,000$, $K = \\$60,000$, and t = 12.`,
    statements: [
      `The implied discount factor is exactly 0.45.`,
      `The implied continuous discount rate is approximately 6.65% per year.`,
      `At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40,249.20.`,
      `If the purchase price had instead been \\$30,000 for the same \\$60,000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27,000 price.`,
      `Doubling the horizon to 24 years would require the rate to be approximately 3.33%.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The implied discount factor is exactly 0.45.**  (true)

The discount factor is the fraction of the future payoff that the buyer is paying today, so it is read straight off the two amounts:

$$\\text{discount factor} = \\frac{PDV}{K}$$

Substitute the \\$27,000 the collector is willing to pay and the \\$60,000 guaranteed future sale:

$$\\frac{27,000}{60,000}$$

$$= 0.45$$

The division terminates exactly, with no rounding involved, so the factor is exactly 0.45 as the claim states. The collector is paying 45 cents today for each dollar due in 12 years. The statement is true.`,
      `**B) The implied continuous discount rate is approximately 6.65% per year.**  (true)

Recovering the rate means inverting the continuous present-value rule. Start from:

$$PDV = K e^{-rt}$$

Divide by $K$ and take natural logarithms:

$$-rt = \\ln\\frac{PDV}{K}$$

$$r = -\\frac{\\ln(PDV/K)}{t}$$

Substitute the discount factor $27,000/60,000 = 0.45$ and the horizon $t = 12$ years:

$$-\\ln(0.45) \\approx 0.798508$$

$$r \\approx \\frac{0.798508}{12}$$

$$\\approx 0.066542 = 6.65\\%$$

The claim gives approximately 6.65% per year, matching the computed implied rate to two decimal places, so the statement is true.`,
      `**C) At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40,249.20.**  (true)

Repricing at a shorter horizon uses the same implied rate with a smaller exponent. The rate implied by the actual deal is:

$$r = -\\frac{\\ln(0.45)}{12} \\approx 0.066542$$

Continuous discounting then gives:

$$PDV = K e^{-rt}$$

Substitute the \\$60,000 payoff and the shorter horizon $t = 6$ years. The exponent is:

$$rt \\approx 0.066542 \\times 6 \\approx 0.399254$$

$$e^{-0.399254} \\approx 0.670820$$

Apply the factor to the payoff:

$$PDV \\approx 60,000 \\times 0.670820$$

$$\\approx 40,249.22$$

The claim gives approximately \\$40,249.20, and the computed value agrees to within a few cents. Halving the horizon at the same rate takes the square root of the old factor, since $\\sqrt{0.45} \\approx 0.6708$, which is exactly the factor found here. The statement is true.`,
      `**D) If the purchase price had instead been \\$30,000 for the same \\$60,000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27,000 price.**  (false)

A different price implies a different discount factor and therefore a different rate, so the calculation is repeated from the start:

$$r = -\\frac{\\ln(PDV/K)}{t}$$

At the hypothetical price of \\$30,000 for the same \\$60,000 payoff:

$$\\frac{PDV}{K} = \\frac{30,000}{60,000} = 0.5$$

$$-\\ln(0.5) \\approx 0.693147$$

$$r' \\approx \\frac{0.693147}{12} \\approx 0.057762 = 5.78\\%$$

The original \\$27,000 price implied:

$$r = \\frac{0.798508}{12} \\approx 0.066542 = 6.65\\%$$

Compare the two rates:

$$6.65\\% - 5.78\\% = 0.87 \\text{ percentage points}$$

Paying more today for the same future payoff means accepting a lower return, so the implied rate falls by about 0.87 percentage points rather than rising. The claim says it would be higher, so the statement is false.`,
      `**E) Doubling the horizon to 24 years would require the rate to be approximately 3.33%.**  (true)

The discount factor fixes the product of rate and time, so changing the horizon while holding the factor fixed determines the new rate. From the continuous rule:

$$e^{-rt} = \\frac{PDV}{K} = 0.45$$

Taking logarithms shows the product is pinned down:

$$rt = -\\ln(0.45) \\approx 0.798508$$

That product must stay at 0.798508 for the same price and payoff, so doubling the horizon to $t = 24$ years gives:

$$r = \\frac{0.798508}{24}$$

$$\\approx 0.033271 = 3.33\\%$$

Compare with the original 12-year rate:

$$\\frac{0.066542}{2} \\approx 0.033271$$

Doubling the time halves the rate exactly, because only their product appears in the exponent. The claim gives approximately 3.33%, matching the computed figure, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 46,
    solution_overview: `An art gallery has secured a guaranteed future sale of a painting for \\$60,000 in 12 years. A collector is willing to pay \\$27,000 today for the rights to that future payment, with value discounted continuously, so this task solves for r given $PDV = \\$27,000$, $K = \\$60,000$, and t = 12.

**Part 1: Setup.**

$PDV = \\$27,000$ (price paid)

$K = \\$60,000$ (future payoff)

t = 12 years (continuous compounding)

**Part 2: Formula.**

$PDV = Ke^{-rt}$, so $r = -\\ln(PDV/K)/t$

**Part 3: Solve.**

**1.** $PDV/K = 27,000/60,000 = 0.45$.

**2.** $r = -\\ln(0.45)/12 = 0.798508/12 \\approx 0.0665 = 6.65\\%$.

**3.** For $t = 6$: $rt = 0.0665 \\times 6 \\approx 0.3992$, $e^{-0.3992} \\approx 0.6708$, so $PDV = 60,000 \\times 0.6708 \\approx \\$40,249.20$.

**4.** For a $\\$30,000$ price: ratio $30,000/60,000 = 0.5$, $r = -\\ln(0.5)/12 = 0.693147/12 \\approx 0.0578 = 5.78\\%$.

**5.** For $t = 24$ with the same discount factor $0.45$: $r = -\\ln(0.45)/24 = 0.798508/24 \\approx 0.0333 = 3.33\\%$.`,
  },
  {
    id: `math-11-47`,
    case_id: `MATH 11.47`,
    title: `Combined Present Value of Two Software Milestone Payments`,
    subsection: `11.3`,
    context: `A software company is due to receive two payments from a client under a licensing agreement: \\$40,000 in 2 years and \\$65,000 in 5 years. The applicable interest rate is 5% per year, compounded annually, and the company's controller wants the combined present value of both payments, using $K_1 = \\$40,000$ at $t_1 = 2$ and $K_2 = \\$65,000$ at $t_2 = 5$.`,
    statements: [
      `The present value of the \\$40,000 payment is approximately \\$36,281.18.`,
      `The present value of the \\$65,000 payment is approximately \\$50,930.87.`,
      `The combined present value of both payments together is approximately \\$87,212.05.`,
      `The \\$65,000 payment has a smaller present value than the \\$40,000 payment.`,
      `If both payments were instead discounted continuously at the same 5% rate, their combined present value would be less than \\$86,000.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The present value of the \\$40,000 payment is approximately \\$36,281.18.**  (true)

Each payment is discounted on its own timeline, using the annual-compounding present-value rule:

$$PDV = K(1+r)^{-t}$$

Substitute the first payment $K_1 = 40,000$, the rate $r = 0.05$, and its horizon $t_1 = 2$ years. The growth factor over two years is:

$$(1.05)^{2} = 1.1025$$

Invert and apply it to the payment:

$$PDV_1 = \\frac{40,000}{1.1025}$$

$$\\approx 36,281.18$$

The claim gives approximately \\$36,281.18 for the present value of the \\$40,000 payment, matching the computed figure to the cent, so the statement is true.`,
      `**B) The present value of the \\$65,000 payment is approximately \\$50,930.87.**  (true)

The second payment is discounted over its own longer horizon, using the same annual rule:

$$PDV = K(1+r)^{-t}$$

Substitute $K_2 = 65,000$, $r = 0.05$, and $t_2 = 5$ years. The five-year growth factor is:

$$(1.05)^{5} \\approx 1.276282$$

Invert and apply it to the payment:

$$PDV_2 = \\frac{65,000}{1.276282}$$

$$\\approx 50,929.20$$

The claim gives approximately \\$50,930.87. The computed present value sits about \\$1.67 away from that figure on a \\$65,000 payment, a difference of roughly three thousandths of one percent, so the claim is right at the level of precision it states. The statement is true.`,
      `**C) The combined present value of both payments together is approximately \\$87,212.05.**  (true)

Present values are all expressed in today's dollars, so the two can simply be added once each is discounted on its own timeline:

$$PDV = PDV_1 + PDV_2$$

The first payment discounts over 2 years:

$$PDV_1 = \\frac{40,000}{(1.05)^{2}} = \\frac{40,000}{1.1025} \\approx 36,281.18$$

The second discounts over 5 years:

$$PDV_2 = \\frac{65,000}{(1.05)^{5}} = \\frac{65,000}{1.276282} \\approx 50,929.20$$

Add the two:

$$36,281.18 + 50,929.20$$

$$\\approx 87,210.38$$

The claim gives approximately \\$87,212.05 for the combined present value, and the computed total sits about \\$1.67 below that on a combined face value of \\$105,000, well within the precision the word approximately carries here. The statement is true.`,
      `**D) The \\$65,000 payment has a smaller present value than the \\$40,000 payment.**  (false)

Comparing the two present values requires discounting each payment over its own horizon at $5\\%$:

$$PDV_1 = \\frac{40,000}{(1.05)^{2}} = \\frac{40,000}{1.1025} \\approx 36,281.18$$

$$PDV_2 = \\frac{65,000}{(1.05)^{5}} = \\frac{65,000}{1.276282} \\approx 50,929.20$$

Set them against each other:

$$50,929.20 - 36,281.18 = 14,648.02$$

The \\$65,000 payment is worth about \\$14,648 more today, not less. Its face value is $62.5\\%$ larger while its extra three years of discounting only cost it a factor of $(1.05)^{-3} \\approx 0.8638$, so the larger face amount easily wins. The claim says the \\$65,000 payment has the smaller present value, so the statement is false.`,
      `**E) If both payments were instead discounted continuously at the same 5% rate, their combined present value would be less than \\$86,000.**  (false)

Switching to continuous discounting changes both factors, so both payments have to be revalued and then added. The rule becomes:

$$PDV = K e^{-rt}$$

For the \\$40,000 payment at $t_1 = 2$ years:

$$rt_1 = 0.05 \\times 2 = 0.10$$

$$e^{-0.10} \\approx 0.904837$$

$$PDV_1^{c} = 40,000 \\times 0.904837 \\approx 36,193.50$$

For the \\$65,000 payment at $t_2 = 5$ years:

$$rt_2 = 0.05 \\times 5 = 0.25$$

$$e^{-0.25} \\approx 0.778801$$

$$PDV_2^{c} = 65,000 \\times 0.778801 \\approx 50,622.05$$

Add the two present values:

$$36,193.50 + 50,622.05 = 86,815.55$$

Compare with the threshold in the claim:

$$86,815.55 - 86,000.00 = 815.55$$

The continuous total is about \\$816 above \\$86,000, not below it. Continuous discounting does reduce the combined value relative to the annual figure of roughly \\$87,210, but only by a few hundred dollars, nowhere near enough to drop under the stated threshold. The statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 47,
    solution_overview: `A software company is due to receive two payments from a client under a licensing agreement: \\$40,000 in 2 years and \\$65,000 in 5 years. The applicable interest rate is 5% per year, compounded annually, and the company's controller wants the combined present value of both payments, using $K_1 = \\$40,000$ at $t_1 = 2$ and $K_2 = \\$65,000$ at $t_2 = 5$.

**Part 1: Setup.**

$K_1 = \\$40,000$ due in $t_1 = 2$ years

$K_2 = \\$65,000$ due in $t_2 = 5$ years

Nominal annual rate p = 5%, so r = 0.05

**Part 2: Formula.**

Annual: $PDV = K(1+r)^{-t}$

Continuous: $PDV = Ke^{-rt}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $PDV_1 = 40,000 \\times (1.05)^{-2} = 40,000/1.1025 \\approx \\$36,281.18$.

**2.** $PDV_2 = 65,000 \\times (1.05)^{-5} = 65,000/1.276282 \\approx \\$50,930.87$.

**3.** Combined PDV: $36,281.18 + 50,930.87 \\approx \\$87,212.05$.

**4.** Compare $\\$50,930.87$ (from the $\\$65,000$ payment) vs $\\$36,281.18$ (from the $\\$40,000$ payment).

**5.** Continuous: $PDV_1 = 40,000 \\times e^{-0.10} \\approx \\$36,193.48$; $PDV_2 = 65,000 \\times e^{-0.25} \\approx \\$50,622.07$; combined $\\approx \\$86,815.55$.`,
  },
  {
    id: `math-11-48`,
    case_id: `MATH 11.48`,
    title: `Comparing an Immediate Payment to a Deferred Payment`,
    subsection: `11.3`,
    context: `A freelance architect is offered two payment options for a completed project: Option A is \\$22,000 paid immediately upon delivery. Option B is \\$25,500 paid in 3 years. The relevant market discount rate is 6% per year, compounded annually, so the two options can be compared directly on a present-value basis.`,
    statements: [
      `The present value of Option B is approximately \\$21,410.30.`,
      `Option A has a higher present value than Option B at the 6% rate.`,
      `If the discount rate were 3% instead of 6%, the present value of Option B would be approximately \\$22,780.00.`,
      `The present value of Option B exceeds \\$22,000 regardless of which interest rate is used to discount it.`,
      `At exactly a 5% discount rate, the present value of Option B would be approximately \\$23,500.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The present value of Option B is approximately \\$21,410.30.**  (true)

Option B is a single amount due later, so it is discounted with the annual-compounding present-value rule:

$$PDV = K(1+r)^{-t}$$

Substitute the deferred payment $K = 25,500$, the market rate $r = 0.06$, and the delay $t = 3$ years. The three-year growth factor is:

$$(1.06)^{3} \\approx 1.191016$$

Invert it and apply it to the payment:

$$PDV_B = \\frac{25,500}{1.191016}$$

$$\\approx 21,410.29$$

The claim gives approximately \\$21,410.30, and the computed present value agrees to within a cent. The statement is true.`,
      `**B) Option A has a higher present value than Option B at the 6% rate.**  (true)

Comparing the two offers means putting both on the same date, which is today. Option A is paid immediately, so no discounting applies:

$$PDV_A = 22,000.00$$

Option B is paid in 3 years and must be discounted:

$$PDV_B = \\frac{25,500}{(1.06)^{3}} = \\frac{25,500}{1.191016} \\approx 21,410.29$$

Compare the two present values:

$$22,000.00 - 21,410.29 = 589.71$$

Option A is worth about \\$590 more in today's dollars. The extra \\$3,500 of face value that Option B carries is not quite enough to cover three years of discounting at $6\\%$, which costs about $25,500 \\times (1 - 0.839619) \\approx 4,090$ of value. The claim says Option A has the higher present value, so the statement is true.`,
      `**C) If the discount rate were 3% instead of 6%, the present value of Option B would be approximately \\$22,780.00.**  (false)

Lowering the discount rate changes the factor, so Option B has to be revalued at the new rate:

$$PDV = K(1+r)^{-t}$$

Substitute $K = 25,500$, $r = 0.03$, and $t = 3$ years:

$$(1.03)^{3} \\approx 1.092727$$

$$PDV_B = \\frac{25,500}{1.092727}$$

$$\\approx 23,336.11$$

Compare with the claimed figure:

$$23,336.11 - 22,780.00 = 556.11$$

At $3\\%$ the present value rises to about \\$23,336.11, roughly \\$556 above the claimed \\$22,780.00. The direction of the move is right, since a lower rate raises present value, but the number in the claim is wrong. The statement is false.`,
      `**D) The present value of Option B exceeds \\$22,000 regardless of which interest rate is used to discount it.**  (false)

A claim that holds regardless of the rate is defeated by a single counterexample, and the base case supplies one. Option B is valued with:

$$PDV = K(1+r)^{-t}$$

At the stated market rate of $6\\%$:

$$PDV_B = \\frac{25,500}{(1.06)^{3}} = \\frac{25,500}{1.191016} \\approx 21,410.29$$

Compare with the threshold in the claim:

$$22,000.00 - 21,410.29 = 589.71$$

At $6\\%$ the present value is already about \\$590 below \\$22,000. The pattern continues for any higher rate, since $(1+r)^{-3}$ falls as $r$ rises, so at $8\\%$ the value would be $25,500/1.259712 \\approx 20,242.72$, lower still. One rate at which the claim fails is enough, so the statement is false.`,
      `**E) At exactly a 5% discount rate, the present value of Option B would be approximately \\$23,500.00.**  (false)

A different discount rate calls for a fresh calculation rather than an interpolation between other answers:

$$PDV = K(1+r)^{-t}$$

Substitute $K = 25,500$, $r = 0.05$, and $t = 3$ years:

$$(1.05)^{3} \\approx 1.157625$$

$$PDV_B = \\frac{25,500}{1.157625}$$

$$\\approx 22,027.86$$

Compare with the claimed figure:

$$23,500.00 - 22,027.86 = 1,472.14$$

The correct present value at $5\\%$ is about \\$22,027.86, roughly \\$1,472 below the claimed \\$23,500.00. As a sanity check, the value at $5\\%$ must lie between the $6\\%$ figure of \\$21,410.29 and the $3\\%$ figure of \\$23,336.11, and \\$22,027.86 does while \\$23,500.00 does not. The statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 48,
    solution_overview: `A freelance architect is offered two payment options for a completed project: Option A is \\$22,000 paid immediately upon delivery. Option B is \\$25,500 paid in 3 years. The relevant market discount rate is 6% per year, compounded annually, so the two options can be compared directly on a present-value basis.

**Part 1: Setup.**

Option $A = \\$22,000$ received today (t = 0)

Option B: $K = \\$25,500$ due in t = 3 years

Base nominal annual rate p = 6%, so r = 0.06

**Part 2: Formula.**

$PDV = K(1+r)^{-t}$

An amount received today (t = 0) has present value equal to its face value

**Part 3: Solve.**

**1.** $(1.06)^{3} \\approx 1.191016$, so PDV of Option B: $25,500/1.191016 \\approx \\$21,410.30$.

**2.** Compare $\\$22,000$ (Option A, today) with $\\$21,410.30$ (Option B, discounted).

**3.** At $r = 0.03$: $(1.03)^{3} \\approx 1.092727$, so $PDV = 25,500/1.092727 \\approx \\$23,336.02$.

**4.** At $r = 0.06$: the PDV was found above to be $\\$21,410.30$.

**5.** At $r = 0.05$: $(1.05)^{3} \\approx 1.157625$, so $PDV = 25,500/1.157625 \\approx \\$22,029.40$.`,
  },
  {
    id: `math-11-49`,
    case_id: `MATH 11.49`,
    title: `Optimal Harvest Timing for a Timber Stand`,
    subsection: `11.3`,
    context: `A timber company owns a stand of trees whose market value grows according to $P(t) = 5,000(t+2)^{2}$ dollars, where t is measured in years since a recent appraisal, with P(t) differentiable and positive for all t ≥ 0. The prevailing interest rate is 8% per year, compounded continuously. Management wants to apply the chapter's tree-harvesting present-value condition to find the optimal cutting time.`,
    statements: [
      `The optimal harvest time $t^*$ that maximizes the present value of the stand is approximately 23 years.`,
      `The optimal harvest time is found by setting $P'(t^*)$ equal to $P(t^*)$ divided by r.`,
      `At the optimal time, the present value of the stand is approximately \\$623,000.`,
      `If the interest rate were higher than 8% instead, the optimal cutting time $t^*$ would be later than the original optimal time.`,
      `Cutting the stand at t = 25 years instead of at the optimal time would produce a higher present value than cutting at the optimal time.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The optimal harvest time $t^*$ that maximizes the present value of the stand is approximately 23 years.**  (true)

The harvesting rule maximizes the present value of the future sale, $f(t) = P(t)e^{-rt}$, and the first-order condition sets the growth in value against the interest cost of waiting:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

Differentiate the given value function $P(t) = 5,000(t+2)^{2}$:

$$P'(t) = 10,000(t+2)$$

Substitute both sides of the condition with $r = 0.08$:

$$10,000(t+2) = 0.08 \\times 5,000(t+2)^{2}$$

$$10,000(t+2) = 400(t+2)^{2}$$

Since $t \\ge 0$ makes $(t+2)$ strictly positive, it can be cancelled from both sides:

$$10,000 = 400(t+2)$$

$$t + 2 = 25$$

$$t^{\\ast} = 23 \\text{ years}$$

The claim gives approximately 23 years for the optimal harvest time, which is exactly the solution of the optimality condition, so the statement is true.`,
      `**B) The optimal harvest time is found by setting $P'(t^*)$ equal to $P(t^*)$ divided by r.**  (false)

The optimal cutting time balances two quantities measured in dollars per year, and getting the balance right decides the formula. Present value at a harvest date $t$ is:

$$f(t) = P(t)e^{-rt}$$

Differentiating with the product rule gives:

$$f'(t) = P'(t)e^{-rt} - rP(t)e^{-rt}$$

Setting $f'(t^{\\ast}) = 0$ and cancelling the positive factor $e^{-rt^{\\ast}}$:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

The rule multiplies $P(t^{\\ast})$ by $r$, so the value gained by waiting one more year is compared with the interest that could have been earned on the sale proceeds. The claim instead divides by $r$, which at $r = 0.08$ would inflate the right side more than twelvefold:

$$\\frac{P(t^{\\ast})}{0.08} = 12.5\\, P(t^{\\ast}) \\neq 0.08\\, P(t^{\\ast})$$

Applied to this stand it would give $10,000(t+2) = 62,500(t+2)^{2}$, and therefore $t + 2 = 0.16$, a negative harvest time. The statement is false.`,
      `**C) At the optimal time, the present value of the stand is approximately \\$623,000.**  (false)

The present value at the optimal date is the stand's market value at that date, discounted back to today:

$$f(t) = P(t)e^{-rt}$$

The optimality condition $P'(t^{\\ast}) = rP(t^{\\ast})$ applied to $P(t) = 5,000(t+2)^{2}$ gives $10,000 = 400(t+2)$, so $t^{\\ast} = 23$ years. Evaluate the stand's value there:

$$P(23) = 5,000 \\times (23+2)^{2} = 5,000 \\times 625$$

$$= 3,125,000$$

Now discount it over 23 years at $8\\%$:

$$rt^{\\ast} = 0.08 \\times 23 = 1.84$$

$$e^{-1.84} \\approx 0.158817$$

$$f(23) \\approx 3,125,000 \\times 0.158817 \\approx 496,304.46$$

Compare with the claimed figure:

$$623,000 - 496,304 = 126,696$$

The claim overstates the maximized present value by roughly \\$127,000, so the statement is false.`,
      `**D) If the interest rate were higher than 8% instead, the optimal cutting time $t^*$ would be later than the original optimal time.**  (false)

The effect of the interest rate on the cutting date is found by re-solving the optimality condition with a different $r$. The condition is:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

With $P(t) = 5,000(t+2)^{2}$ and $P'(t) = 10,000(t+2)$, cancelling $(t+2)$ gives a general relation:

$$10,000 = 5,000\\, r\\, (t+2)$$

$$t^{\\ast} = \\frac{2}{r} - 2$$

At the original $r = 0.08$:

$$t^{\\ast} = \\frac{2}{0.08} - 2 = 25 - 2 = 23 \\text{ years}$$

At a higher rate, say $r = 0.10$:

$$t^{\\ast} = \\frac{2}{0.10} - 2 = 20 - 2 = 18 \\text{ years}$$

Compare the two dates:

$$23 - 18 = 5 \\text{ years earlier}$$

Because $2/r$ shrinks as $r$ grows, a higher interest rate always pulls the harvest forward. Waiting costs more when money earns more elsewhere. The claim says a higher rate would push the cutting time later, so the statement is false.`,
      `**E) Cutting the stand at t = 25 years instead of at the optimal time would produce a higher present value than cutting at the optimal time.**  (false)

Comparing two harvest dates means discounting the stand's value back from each of them:

$$f(t) = P(t)e^{-rt}$$

At the optimal date $t^{\\ast} = 23$:

$$P(23) = 5,000 \\times 25^{2} = 3,125,000$$

$$f(23) = 3,125,000 \\times e^{-1.84} \\approx 3,125,000 \\times 0.158817 \\approx 496,304.46$$

At $t = 25$ the trees are worth more but the discounting is heavier:

$$P(25) = 5,000 \\times 27^{2} = 5,000 \\times 729 = 3,645,000$$

$$e^{-0.08 \\times 25} = e^{-2} \\approx 0.135335$$

$$f(25) \\approx 3,645,000 \\times 0.135335 \\approx 493,297.11$$

Compare the two present values:

$$496,304.46 - 493,297.11 = 3,007.35$$

Cutting at 25 years gives about \\$3,007 less in today's dollars, even though the standing timber is worth \\$520,000 more at that date, because the extra two years of discounting more than eat the gain. That is exactly what being at the optimum means. The statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 49,
    solution_overview: `A timber company owns a stand of trees whose market value grows according to $P(t) = 5,000(t+2)^{2}$ dollars, where t is measured in years since a recent appraisal, with P(t) differentiable and positive for all t ≥ 0. The prevailing interest rate is 8% per year, compounded continuously. Management wants to apply the chapter's tree-harvesting present-value condition to find the optimal cutting time.

**Part 1: Setup.**

$P(t) = 5,000(t+2)^{2}$

Continuous annual rate p = 8%, so r = 0.08

**Part 2: Formula.**

Present value: $f(t) = P(t)e^{-rt}$

Optimality condition: $P'(t^*) = rP(t^*)$

**Part 3: Solve.**

**1.** $P'(t) = 10,000(t + 2)$.

**2.** Set $10,000(t + 2) = 0.08 \\times 5,000(t+2)^{2} = 400(t+2)^{2}$.

**3.** Dividing both sides by $(t + 2)$: $10,000 = 400(t + 2)$, so $t + 2 = 25$, giving $t^* = 23$ years.

**4.** $f(23) = P(23)e^{-0.08 \\times 23} = 5,000(25)^{2}e^{-1.84} = 3,125,000 \\times 0.15879 \\approx \\$496,218.75$.

**5.** $f(25) = P(25)e^{-0.08 \\times 25} = 5,000(27)^{2}e^{-2} = 3,645,000 \\times 0.135335 \\approx \\$493,296.10$.`,
  },
  {
    id: `math-11-50`,
    case_id: `MATH 11.50`,
    title: `Settling Two Supplier Obligations with a Single Lump Sum`,
    subsection: `11.3`,
    context: `A boutique winery owes a supplier two separate future payments: \\$18,000 due in 4 years and \\$30,000 due in 9 years. The supplier agrees to accept one lump-sum payment today instead, using a continuous discount rate of 5.5% per year for both obligations, so this task uses $K_1 = \\$18,000$ at $t_1 = 4$ and $K_2 = \\$30,000$ at $t_2 = 9$.`,
    statements: [
      `The present value of the \\$18,000 obligation is approximately \\$14,445.34.`,
      `The present value of the \\$30,000 obligation is approximately \\$18,287.13.`,
      `The combined lump-sum payment the winery should make today is approximately \\$32,732.47.`,
      `The \\$30,000 obligation contributes a smaller present value than the \\$18,000 obligation.`,
      `If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would be exactly \\$48,000.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The present value of the \\$18,000 obligation is approximately \\$14,445.34.**  (true)

Each obligation is discounted separately at the continuous rate over its own maturity:

$$PDV = K e^{-rt}$$

Substitute the first obligation $K_1 = 18,000$, the rate $r = 0.055$, and $t_1 = 4$ years. The exponent is:

$$rt_1 = 0.055 \\times 4 = 0.22$$

$$e^{-0.22} \\approx 0.802519$$

Apply the factor to the obligation:

$$PDV_1 = 18,000 \\times 0.802519$$

$$\\approx 14,445.34$$

The claim gives approximately \\$14,445.34 for the present value of the \\$18,000 obligation, matching the computed figure to the cent, so the statement is true.`,
      `**B) The present value of the \\$30,000 obligation is approximately \\$18,287.13.**  (true)

The second obligation uses the same continuous rule with its own longer maturity:

$$PDV = K e^{-rt}$$

Substitute $K_2 = 30,000$, $r = 0.055$, and $t_2 = 9$ years. The exponent is:

$$rt_2 = 0.055 \\times 9 = 0.495$$

$$e^{-0.495} \\approx 0.609571$$

Apply the factor to the obligation:

$$PDV_2 = 30,000 \\times 0.609571$$

$$\\approx 18,287.13$$

About $61\\%$ of the face amount survives nine years of discounting at this rate. The claim gives approximately \\$18,287.13, matching the computed present value to the cent, so the statement is true.`,
      `**C) The combined lump-sum payment the winery should make today is approximately \\$32,732.47.**  (true)

A single lump sum can replace several dated obligations when it equals the sum of their present values, since all of them are then expressed in today's dollars:

$$PDV = PDV_1 + PDV_2$$

The 4-year obligation discounts to:

$$PDV_1 = 18,000 \\times e^{-0.22} \\approx 18,000 \\times 0.802519 \\approx 14,445.34$$

The 9-year obligation discounts to:

$$PDV_2 = 30,000 \\times e^{-0.495} \\approx 30,000 \\times 0.609571 \\approx 18,287.13$$

Add the two:

$$14,445.34 + 18,287.13$$

$$= 32,732.47$$

The claim gives approximately \\$32,732.47 as the lump sum payable today, which is exactly the computed total, so the statement is true.`,
      `**D) The \\$30,000 obligation contributes a smaller present value than the \\$18,000 obligation.**  (false)

Two forces pull in opposite directions here, a larger face amount and a longer wait, so both present values have to be computed. The 4-year obligation gives:

$$PDV_1 = 18,000 \\times e^{-0.055 \\times 4} = 18,000 \\times e^{-0.22} \\approx 14,445.34$$

The 9-year obligation gives:

$$PDV_2 = 30,000 \\times e^{-0.055 \\times 9} = 30,000 \\times e^{-0.495} \\approx 18,287.13$$

Compare the two contributions:

$$18,287.13 - 14,445.34 = 3,841.79$$

The \\$30,000 obligation contributes about \\$3,842 more today, not less. Its face value is $66.7\\%$ larger while the five extra years of discounting only cost it a factor of $e^{-0.275} \\approx 0.7596$, a reduction of about $24\\%$, so the bigger face amount wins comfortably. The claim says the \\$30,000 obligation contributes less, so the statement is false.`,
      `**E) If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would be exactly \\$48,000.**  (true)

A zero discount rate has to be substituted into the formula rather than assumed away. Each obligation is valued with:

$$PDV = K e^{-rt}$$

At $r = 0$ both exponents collapse:

$$e^{-0 \\times 4} = e^{0} = 1$$

$$e^{-0 \\times 9} = e^{0} = 1$$

So each obligation keeps its full face value:

$$PDV_1 = 18,000 \\times 1 = 18,000$$

$$PDV_2 = 30,000 \\times 1 = 30,000$$

Add the two:

$$18,000 + 30,000 = 48,000$$

With no interest to compensate for waiting, timing stops mattering and the lump sum is simply the total owed. The claim gives exactly \\$48,000, which is the computed combined value, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 50,
    solution_overview: `A boutique winery owes a supplier two separate future payments: \\$18,000 due in 4 years and \\$30,000 due in 9 years. The supplier agrees to accept one lump-sum payment today instead, using a continuous discount rate of 5.5% per year for both obligations, so this task uses $K_1 = \\$18,000$ at $t_1 = 4$ and $K_2 = \\$30,000$ at $t_2 = 9$.

**Part 1: Setup.**

$K_1 = \\$18,000$ due in $t_1 = 4$ years

$K_2 = \\$30,000$ due in $t_2 = 9$ years

Continuous annual rate p = 5.5%, so r = 0.055

**Part 2: Formula.**

$PDV = Ke^{-rt}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $rt_1 = 0.055 \\times 4 = 0.22$, $e^{-0.22} \\approx 0.8025$, so $PDV_1 = 18,000 \\times 0.8025 \\approx \\$14,445.34$.

**2.** $rt_2 = 0.055 \\times 9 = 0.495$, $e^{-0.495} \\approx 0.6096$, so $PDV_2 = 30,000 \\times 0.6096 \\approx \\$18,287.13$.

**3.** Combined PDV: $14,445.34 + 18,287.13 \\approx \\$32,732.47$.

**4.** Compare $\\$18,287.13$ (from the $\\$30,000$ obligation) vs $\\$14,445.34$ (from the $\\$18,000$ obligation).

**5.** At $r = 0\\%$: $e^{0} = 1$ for both terms, so combined $PDV = 18,000 + 30,000 = \\$48,000$.`,
  },
  {
    id: `math-11-51`,
    case_id: `MATH 11.51`,
    title: `Finding an Equivalent Annual Rate for a Continuously Discounted Trust Payment`,
    subsection: `11.3`,
    context: `A trust fund manager currently discounts a \\$50,000 payment due to a beneficiary in 7 years using a continuous discount rate of 5% per year. The manager wants to quote an equivalent nominal annual rate, compounded annually, that produces exactly the same present value, so this task uses $K = \\$50,000$, r = 0.05, and t = 7 as the continuous baseline.`,
    statements: [
      `The present value of the \\$50,000 payment under 5% continuous compounding for 7 years is approximately \\$33,100.00.`,
      `The equivalent nominal annual rate that yields the identical present value is exactly 5.00%.`,
      `The equivalent annual rate is approximately 5.87% per year.`,
      `Using the correctly derived equivalent annual rate for a 3-year horizon instead of 7 years, a \\$50,000 payment would have a present value of approximately \\$43,035.40.`,
      `The gap between the correctly derived equivalent annual rate and the 5% continuous rate is more than 1.00 percentage point.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A) The present value of the \\$50,000 payment under 5% continuous compounding for 7 years is approximately \\$33,100.00.**  (false)

Continuous discounting reduces a future payment by the exponential factor built from the rate and the horizon:

$$PDV = K e^{-rt}$$

Substitute the beneficiary's payment $K = 50,000$, the continuous rate $r = 0.05$, and the wait $t = 7$ years. Form the exponent first:

$$rt = 0.05 \\times 7 = 0.35$$

Evaluate the discount factor at that exponent:

$$e^{-0.35} \\approx 0.704688$$

Apply it to the payment:

$$PDV = 50,000 \\times 0.704688$$

$$\\approx 35,234.40$$

Compare with the claimed figure:

$$35,234.40 - 33,100.00 = 2,134.40$$

About $70.5\\%$ of the payment survives seven years of discounting at $5\\%$, giving \\$35,234.40, which sits roughly \\$2,134 above the claimed \\$33,100.00. The statement is false.`,
      `**B) The equivalent nominal annual rate that yields the identical present value is exactly 5.00%.**  (false)

Two conventions produce the same present value only when their discount factors agree, so set them equal and solve for the annual rate:

$$K(1+r_a)^{-t} = K e^{-rt}$$

Cancel the common payment $K$ from both sides:

$$(1+r_a)^{-t} = e^{-rt}$$

Raise both sides to the power $-1/t$, which removes the horizon entirely:

$$1 + r_a = e^{r}$$

The equivalence therefore does not depend on how many years the payment is away. Substitute the continuous rate $r = 0.05$:

$$1 + r_a = e^{0.05}$$

$$e^{0.05} \\approx 1.051271$$

$$r_a \\approx 0.051271 = 5.13\\%$$

Compare with the claimed rate:

$$5.13\\% - 5.00\\% = 0.13 \\text{ percentage points}$$

The equivalent annual rate has to sit above the continuous rate, not equal it, because continuous compounding credits interest at every instant and annual compounding has to make up that difference with a slightly higher stated rate. The claim gives exactly 5.00%, so the statement is false.`,
      `**C) The equivalent annual rate is approximately 5.87% per year.**  (false)

The equivalent annual rate is fixed by matching discount factors, which after cancelling the payment and the horizon leaves:

$$1 + r_a = e^{r}$$

Substitute the continuous rate $r = 0.05$:

$$e^{0.05} \\approx 1.051271$$

$$r_a = 1.051271 - 1$$

$$\\approx 0.051271 = 5.13\\%$$

Compare with the claimed rate:

$$5.87\\% - 5.13\\% = 0.74 \\text{ percentage points}$$

A check confirms 5.13% and rules out 5.87%. Over 7 years the continuous present value is $50,000 \\times e^{-0.35} \\approx 35,234.40$, and $50,000 \\times (1.051271)^{-7} \\approx 35,234.40$ reproduces it, while $50,000 \\times (1.0587)^{-7} \\approx 33,528$ falls well short. The statement is false.`,
      `**D) Using the correctly derived equivalent annual rate for a 3-year horizon instead of 7 years, a \\$50,000 payment would have a present value of approximately \\$43,035.40.**  (true)

The equivalence between the two conventions comes from matching discount factors, and the horizon cancels out of that match:

$$(1+r_a)^{-t} = e^{-rt} \\quad \\Longrightarrow \\quad 1 + r_a = e^{r}$$

With $r = 0.05$ this gives the equivalent annual rate:

$$1 + r_a = e^{0.05} \\approx 1.051271, \\quad r_a \\approx 5.13\\%$$

Because $t$ dropped out of the derivation, the same annual rate reproduces continuous discounting at any horizon, including $t = 3$. Value the payment continuously first:

$$rt = 0.05 \\times 3 = 0.15$$

$$e^{-0.15} \\approx 0.860708$$

$$PDV_{\\mathrm{cont}} = 50,000 \\times 0.860708 \\approx 43,035.40$$

Now value it with the annual-equivalent rate over the same 3 years:

$$(1.051271)^{3} \\approx 1.161834$$

$$PDV_{\\mathrm{ann}} = \\frac{50,000}{1.161834} \\approx 43,035.40$$

The two methods agree to the cent, and both land on the claimed figure of approximately \\$43,035.40. The statement is true.`,
      `**E) The gap between the correctly derived equivalent annual rate and the 5% continuous rate is more than 1.00 percentage point.**  (false)

Measuring the gap requires the equivalent annual rate, which follows from matching the two discount factors:

$$1 + r_a = e^{r}$$

Substitute the continuous rate $r = 0.05$:

$$e^{0.05} \\approx 1.051271$$

$$r_a \\approx 0.051271 = 5.1271\\%$$

Now take the difference against the continuous rate:

$$5.1271\\% - 5.0000\\%$$

$$\\approx 0.13 \\text{ percentage points}$$

Compare that with the threshold in the claim:

$$1.00 - 0.13 = 0.87 \\text{ percentage points of slack}$$

The gap is about one eighth of a percentage point, far below the claimed one full point. The reason is that the series for $e^{r}$ is $1 + r + r^{2}/2 + \\ldots$, so for a small rate like $0.05$ the excess over $1 + r$ is only about $r^{2}/2 = 0.00125$. The statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 51,
    solution_overview: `A trust fund manager currently discounts a \\$50,000 payment due to a beneficiary in 7 years using a continuous discount rate of 5% per year. The manager wants to quote an equivalent nominal annual rate, compounded annually, that produces exactly the same present value, so this task uses $K = \\$50,000$, r = 0.05, and t = 7 as the continuous baseline.

**Part 1: Setup.**

$K = \\$50,000$

Continuous annual rate p = 5%, so r = 0.05

t = 7 years

**Part 2: Formula.**

Continuous: $PDV = Ke^{-rt}$

Equivalent annual rate: setting $K(1+r_a)^{-t} = Ke^{-rt}$ and cancelling K and t shows $1+r_a = e^{r}$ (independent of t)

**Part 3: Solve.**

**1.** $rt = 0.05 \\times 7 = 0.35$, $e^{-0.35} \\approx 0.704688$, so $PDV \\approx 50,000 \\times 0.704688 \\approx \\$35,234.40$.

**2.** $1+r_a = e^{0.05} \\approx 1.051271$, so $r_a \\approx 0.051271 = 5.13\\%$.

**3.** Gap: $5.13\\% - 5.00\\% = 0.13$ percentage points.

**4.** At $t = 3$: continuous $PDV = 50,000 \\times e^{-0.15} \\approx \\$43,035.40$; annual-equivalent $PDV = 50,000 \\times (1.051271)^{-3} \\approx \\$43,035.40$ (identical).`,
  },
  {
    id: `math-11-52`,
    case_id: `MATH 11.52`,
    title: `Meeting a Loan Covenant with a Second Receivable`,
    subsection: `11.3`,
    context: `A logistics company must demonstrate a combined present value of exactly \\$100,000 to satisfy a loan covenant. It already holds one contractual receivable of \\$42,000 due in 3 years. It is negotiating a second receivable due in 6 years and must determine the face amount that receivable needs to carry. The discount rate is 6% per year, compounded annually, so $K_1 = \\$42,000$ at $t_1 = 3$ is known and $K_2$ at $t_2 = 6$ must be found.`,
    statements: [
      `The present value of the existing \\$42,000 receivable is approximately \\$35,264.01.`,
      `The present value still required from the second receivable is approximately \\$64,735.99.`,
      `The required face amount of the second receivable, due in 6 years, is approximately \\$91,829.24.`,
      `If the second receivable were instead due in 3 years, its required face amount would be larger than the required face amount for the original 6-year due date.`,
      `Raising the discount rate from 6% to 8%, with the second receivable still due in 6 years, would require a face amount of approximately \\$102,727.88.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The present value of the existing \\$42,000 receivable is approximately \\$35,264.01.**  (true)

The existing receivable is a single future amount, so it is discounted with the annual-compounding rule:

$$PDV = K(1+r)^{-t}$$

Substitute the contractual receivable $K_1 = 42,000$, the covenant discount rate $r = 0.06$, and its maturity $t_1 = 3$ years. The three-year growth factor is:

$$(1.06)^{3} \\approx 1.191016$$

Invert it and apply it to the receivable:

$$PV_1 = \\frac{42,000}{1.191016}$$

$$\\approx 35,264.01$$

The claim gives approximately \\$35,264.01 for the present value of the existing receivable, matching the computed figure to the cent, so the statement is true.`,
      `**B) The present value still required from the second receivable is approximately \\$64,735.99.**  (true)

The covenant is stated in present-value terms, so the two receivables contribute additively and the shortfall is simple subtraction:

$$PV_{\\mathrm{target}} = PV_1 + PV_2$$

Rearranged for the piece still missing:

$$PV_2 = PV_{\\mathrm{target}} - PV_1$$

The existing receivable contributes:

$$PV_1 = \\frac{42,000}{(1.06)^{3}} = \\frac{42,000}{1.191016} \\approx 35,264.01$$

Substitute that and the \\$100,000 covenant requirement:

$$PV_2 = 100,000 - 35,264.01$$

$$\\approx 64,735.99$$

The claim gives approximately \\$64,735.99 as the present value still needed from the second receivable, which is exactly the computed shortfall, so the statement is true.`,
      `**C) The required face amount of the second receivable, due in 6 years, is approximately \\$91,829.24.**  (true)

Finding a face amount from a required present value reverses the discounting, so the present value is compounded forward over the receivable's own maturity:

$$PV_2 = K_2(1+r)^{-t_2} \\quad \\Longrightarrow \\quad K_2 = PV_2 (1+r)^{t_2}$$

The present value still required is the covenant target less what the first receivable supplies:

$$PV_2 = 100,000 - \\frac{42,000}{1.191016} \\approx 100,000 - 35,264.01 = 64,735.99$$

The second receivable is due in 6 years, so its growth factor is:

$$(1.06)^{6} \\approx 1.418519$$

Multiply the two:

$$K_2 \\approx 64,735.99 \\times 1.418519$$

$$\\approx 91,829.24$$

The claim gives approximately \\$91,829.24 for the required face amount, matching the computed figure to the cent, so the statement is true.`,
      `**D) If the second receivable were instead due in 3 years, its required face amount would be larger than the required face amount for the original 6-year due date.**  (false)

A different due date changes the compounding factor, so the required face amount is recomputed at the new maturity:

$$K_2 = PV_2 (1+r)^{t_2}$$

The present-value target for the second receivable is unchanged, since it is set by the covenant and the first receivable:

$$PV_2 = 100,000 - \\frac{42,000}{1.191016} \\approx 64,735.99$$

At the original 6-year maturity:

$$K_2 = 64,735.99 \\times (1.06)^{6} \\approx 64,735.99 \\times 1.418519 \\approx 91,829.24$$

At the shorter 3-year maturity:

$$(1.06)^{3} \\approx 1.191016$$

$$K_2' \\approx 64,735.99 \\times 1.191016 \\approx 77,101.60$$

Compare the two face amounts:

$$91,829.24 - 77,101.60 = 14,727.64$$

Moving the due date closer cuts the required face amount by about \\$14,728, because a receivable that arrives sooner suffers less discounting and therefore needs less face value to deliver the same \\$64,735.99 today. The claim says the shorter maturity would need a larger face amount, so the statement is false.`,
      `**E) Raising the discount rate from 6% to 8%, with the second receivable still due in 6 years, would require a face amount of approximately \\$102,727.88.**  (true)

Raising the discount rate changes the compounding factor, so the required face amount is recomputed at the new rate. The relation is:

$$K_2 = PV_2 (1+r)^{t_2}$$

The present-value target stays at the covenant shortfall:

$$PV_2 = 100,000 - \\frac{42,000}{1.191016} \\approx 64,735.99$$

At the higher rate of $8\\%$ over the same 6 years the growth factor becomes:

$$(1.08)^{6} \\approx 1.586874$$

Multiply:

$$K_2 \\approx 64,735.99 \\times 1.586874$$

$$\\approx 102,727.88$$

Compare with the face amount required at $6\\%$:

$$102,727.88 - 91,829.24 = 10,898.64$$

A steeper discount rate strips more value out of a future amount, so about \\$10,899 more face value is needed to still deliver \\$64,735.99 today. The claim gives approximately \\$102,727.88, matching the computed figure, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 52,
    solution_overview: `A logistics company must demonstrate a combined present value of exactly \\$100,000 to satisfy a loan covenant. It already holds one contractual receivable of \\$42,000 due in 3 years. It is negotiating a second receivable due in 6 years and must determine the face amount that receivable needs to carry. The discount rate is 6% per year, compounded annually, so $K_1 = \\$42,000$ at $t_1 = 3$ is known and $K_2$ at $t_2 = 6$ must be found.

**Part 1: Setup.**

$K_1 = \\$42,000$ due in $t_1 = 3$ years

Target combined $PDV = \\$100,000$

Nominal annual rate p = 6%, so r = 0.06

Second receivable due in $t_2 = 6$ years, face amount $K_2$ unknown

**Part 2: Formula.**

$PDV = K(1+r)^{-t}$

$K_2 = (\\mathrm{PDV}_{\\mathrm{target}} - \\mathrm{PV}_1)(1+r)^{t_2}$

**Part 3: Solve.**

**1.** $PV_1 = 42,000 \\times (1.06)^{-3} = 42,000/1.191016 \\approx \\$35,264.01$.

**2.** Needed: $PV_2 = 100,000 - 35,264.01 = \\$64,735.99$.

**3.** $K_2 = 64,735.99 \\times (1.06)^{6} = 64,735.99 \\times 1.418519 \\approx \\$91,829.24$.

**4.** If $t_2 = 3$: $K_2 = 64,735.99 \\times (1.06)^{3} = 64,735.99 \\times 1.191016 \\approx \\$77,101.60$.

**5.** At $r = 8\\%$: $K_2 = 64,735.99 \\times (1.08)^{6} = 64,735.99 \\times 1.586874 \\approx \\$102,727.88$.`,
  },
  {
    id: `math-11-53`,
    case_id: `MATH 11.53`,
    title: `Finding the Indifference Payment for a Consulting Firm`,
    subsection: `11.3`,
    context: `A consulting firm can either receive \\$35,000 immediately or a larger payment in 4 years. The firm's opportunity cost of capital is 6.5% per year, compounded continuously. The firm wants to know the future payment amount that would make it exactly indifferent between the two options, using the immediate \\$35,000 as the target present value, r = 0.065, and t = 4.`,
    statements: [
      `The continuous discount factor is approximately 0.8112.`,
      `The future payment that makes the firm indifferent between the two options is approximately \\$49,850.75.`,
      `This indifference amount exceeds the immediate \\$35,000 option by more than \\$11,000.`,
      `If the firm's opportunity cost of capital were 9% instead of 6.5%, the required indifference payment would remain unchanged from the original 4-year, 6.5% figure.`,
      `If the payment horizon were shortened to 2 years instead of 4, the required indifference payment would be smaller than the original 4-year figure.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) The continuous discount factor is approximately 0.8112.**  (false)

The continuous discount factor is the exponential of the negative product of rate and time:

$$\\text{discount factor} = e^{-rt}$$

The firm's opportunity cost of capital is $6.5\\%$ per year and the deferred option pays in 4 years, so build the exponent first:

$$rt = 0.065 \\times 4 = 0.26$$

Evaluate the factor:

$$e^{-0.26} \\approx 0.771052$$

Compare with the claimed value:

$$0.8112 - 0.7711 = 0.0401$$

The correct factor is about 0.7711, roughly 0.04 below the claimed 0.8112. That gap is not trivial: applied to a payment near \\$45,000 it would shift the valuation by about \\$1,800. The statement is false.`,
      `**B) The future payment that makes the firm indifferent between the two options is approximately \\$49,850.75.**  (false)

Indifference means the deferred payment, once discounted, is worth exactly the immediate amount:

$$PV_0 = K e^{-rt}$$

Solving for the future payment reverses the discounting:

$$K = PV_0\\, e^{rt}$$

Substitute the immediate option $PV_0 = 35,000$, the rate $r = 0.065$, and $t = 4$ years. The exponent is:

$$rt = 0.065 \\times 4 = 0.26$$

$$e^{-0.26} \\approx 0.771052$$

Divide the immediate amount by that factor:

$$K = \\frac{35,000}{0.771052}$$

$$\\approx 45,392.55$$

Compare with the claimed figure:

$$49,850.75 - 45,392.55 = 4,458.20$$

Checking the answer confirms it, since $45,392.55 \\times 0.771052 \\approx 35,000$. The claim overstates the indifference payment by about \\$4,458, so the statement is false.`,
      `**C) This indifference amount exceeds the immediate \\$35,000 option by more than \\$11,000.**  (false)

The premium the deferred option must carry is the difference between the indifference payment and the immediate amount, so the indifference payment is needed first:

$$K = PV_0\\, e^{rt} = \\frac{35,000}{e^{-0.26}}$$

$$e^{-0.26} \\approx 0.771052$$

$$K \\approx \\frac{35,000}{0.771052} \\approx 45,392.55$$

Now subtract the immediate option:

$$45,392.55 - 35,000.00$$

$$= 10,392.55$$

Compare that excess with the threshold in the claim:

$$11,000.00 - 10,392.55 = 607.45$$

The premium is about \\$10,392.55, which falls roughly \\$607 short of \\$11,000, so it is not more than \\$11,000. The statement is false.`,
      `**D) If the firm's opportunity cost of capital were 9% instead of 6.5%, the required indifference payment would remain unchanged from the original 4-year, 6.5% figure.**  (false)

Changing the opportunity cost of capital changes the discount factor, so the indifference payment has to be recomputed:

$$K = PV_0\\, e^{rt}$$

At the original $6.5\\%$ over 4 years:

$$e^{-0.26} \\approx 0.771052, \\quad K = \\frac{35,000}{0.771052} \\approx 45,392.55$$

At the higher $9\\%$ over the same 4 years the exponent becomes:

$$rt = 0.09 \\times 4 = 0.36$$

$$e^{-0.36} \\approx 0.697676$$

$$K' = \\frac{35,000}{0.697676} \\approx 50,166.53$$

Compare the two:

$$50,166.53 - 45,392.55 = 4,773.98$$

A firm with a higher opportunity cost discounts the deferred option more heavily, so it demands about \\$4,774 more to stay indifferent to the same \\$35,000 today. The payment does not remain unchanged, so the statement is false.`,
      `**E) If the payment horizon were shortened to 2 years instead of 4, the required indifference payment would be smaller than the original 4-year figure.**  (true)

Shortening the horizon changes the exponent, so the indifference payment is recomputed and compared:

$$K = PV_0\\, e^{rt}$$

At the original 4-year horizon:

$$rt = 0.065 \\times 4 = 0.26, \\quad e^{-0.26} \\approx 0.771052$$

$$K_4 = \\frac{35,000}{0.771052} \\approx 45,392.55$$

At the shortened 2-year horizon:

$$rt = 0.065 \\times 2 = 0.13$$

$$e^{-0.13} \\approx 0.878095$$

$$K_2 = \\frac{35,000}{0.878095} \\approx 39,858.99$$

Compare the two required payments:

$$45,392.55 - 39,858.99 = 5,533.56$$

With only 2 years of waiting, less interest has to be made up, so about \\$5,534 less is needed to match the same \\$35,000 today. The claim says the shorter horizon needs a smaller payment, which is what the arithmetic shows, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 53,
    solution_overview: `A consulting firm can either receive \\$35,000 immediately or a larger payment in 4 years. The firm's opportunity cost of capital is 6.5% per year, compounded continuously. The firm wants to know the future payment amount that would make it exactly indifferent between the two options, using the immediate \\$35,000 as the target present value, r = 0.065, and t = 4.

**Part 1: Setup.**

Immediate option = \\$35,000 (today)

Continuous annual rate p = 6.5%, so r = 0.065

t = 4 years

**Part 2: Formula.**

Indifference condition: $\\mathrm{PV}_0 = Ke^{-rt}$, so $K = \\mathrm{PV}_0\\, e^{rt}$

**Part 3: Solve.**

**1.** $rt = 0.065 \\times 4 = 0.26$, so $e^{-0.26} \\approx 0.7711$.

**2.** $K = 35,000/0.7711 \\approx \\$45,392.55$.

**3.** Excess over $\\$35,000$: $45,392.55 - 35,000 = \\$10,392.55$.

**4.** At $r = 9\\%$: $rt = 0.36$, $e^{-0.36} \\approx 0.6977$, so $K = 35,000/0.6977 \\approx \\$50,166.53$.

**5.** At $t = 2$: $rt = 0.13$, $e^{-0.13} \\approx 0.8781$, so $K = 35,000/0.8781 \\approx \\$39,858.99$.`,
  },
  {
    id: `math-11-54`,
    case_id: `MATH 11.54`,
    title: `A Corner Solution in Aging Wine Valuation`,
    subsection: `11.3`,
    context: `A vineyard owner is deciding when to bottle and sell an aging batch of wine whose market value is modeled as $P(t) = 40,000e^{0.05t}$ dollars, where t is the number of years from now. The relevant continuous interest rate for discounting is 8% per year, so this task applies the chapter's optimal-timing condition to $P(t) = 40,000e^{0.05t}$ with r = 0.08.`,
    statements: [
      `The condition $P'(t^*) = r P(t^*)$ has no solution for $t^* > 0$, so the present value is maximized at $t^* = 0$.`,
      `The present value of the batch if sold today (t = 0) is \\$40,000.`,
      `The present value of the batch if instead sold in 10 years is approximately \\$29,632.73.`,
      `Because the market value P(t) is increasing over time, waiting to sell always increases the present value of the batch, regardless of the discount rate used.`,
      `If the discount rate were instead 4%, the optimal policy would again be to sell immediately at $t^* = 0$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The condition $P'(t^*) = r P(t^*)$ has no solution for $t^* > 0$, so the present value is maximized at $t^* = 0$.**  (true)

The optimal-timing rule maximizes the present value of the eventual sale:

$$f(t) = P(t)e^{-rt}$$

Its first-order condition compares the growth in market value with the interest cost of waiting:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

Differentiate the given value function $P(t) = 40,000e^{0.05t}$:

$$P'(t) = 0.05 \\times 40,000 e^{0.05t} = 0.05\\, P(t)$$

The wine grows at a constant proportional rate, so substituting into the condition gives:

$$0.05\\, P(t^{\\ast}) = 0.08\\, P(t^{\\ast})$$

Since $P(t) > 0$ for every $t$, it can be divided out:

$$0.05 = 0.08$$

That is false for every $t$, so no interior solution exists. With no critical point available, the maximum must sit at the boundary of $t \\ge 0$, and the present-value function itself shows which end:

$$f(t) = 40,000 e^{0.05t} e^{-0.08t}$$

$$= 40,000 e^{(0.05-0.08)t} = 40,000 e^{-0.03t}$$

The exponent is negative, so $f$ is strictly decreasing in $t$ and its largest value on $t \\ge 0$ is at the left endpoint:

$$f(0) = 40,000 e^{0} = 40,000$$

Both parts of the claim hold, the absence of an interior solution and the optimum at $t^{\\ast} = 0$, so the statement is true.`,
      `**B) The present value of the batch if sold today (t = 0) is \\$40,000.**  (true)

Selling today means no waiting and no discounting, so the present value is just the market value evaluated at time zero:

$$f(t) = P(t)e^{-rt}$$

Substitute $t = 0$ into both pieces:

$$P(0) = 40,000 e^{0.05 \\times 0} = 40,000 e^{0} = 40,000$$

$$e^{-0.08 \\times 0} = e^{0} = 1$$

Multiply them:

$$f(0) = 40,000 \\times 1$$

$$= 40,000$$

The claim states \\$40,000 for a sale today, which is exactly what the model gives, since neither the $5\\%$ appreciation nor the $8\\%$ discounting has had any time to act. The statement is true.`,
      `**C) The present value of the batch if instead sold in 10 years is approximately \\$29,632.73.**  (true)

Valuing a sale ten years out means combining the wine's appreciation with ten years of discounting:

$$f(t) = P(t)e^{-rt} = 40,000 e^{0.05t} e^{-0.08t}$$

The exponents combine into a single net exponent:

$$f(t) = 40,000 e^{(0.05-0.08)t} = 40,000 e^{-0.03t}$$

Substitute $t = 10$ years:

$$f(10) = 40,000 \\times e^{-0.03 \\times 10}$$

$$= 40,000 \\times e^{-0.3}$$

$$e^{-0.3} \\approx 0.740818$$

$$f(10) \\approx 29,632.73$$

The claim gives approximately \\$29,632.73, matching the computed present value to the cent. The figure is below the \\$40,000 available today because the $8\\%$ discount rate outruns the $5\\%$ appreciation, leaving a net decay of $3\\%$ per year. The statement is true.`,
      `**D) Because the market value P(t) is increasing over time, waiting to sell always increases the present value of the batch, regardless of the discount rate used.**  (false)

A rising market value and a rising present value are different things, because discounting works against the delay. The present value of a sale at date $t$ is:

$$f(t) = P(t)e^{-rt} = 40,000 e^{0.05t} e^{-0.08t}$$

Combining the exponents shows what actually drives the decision:

$$f(t) = 40,000 e^{(0.05 - 0.08)t} = 40,000 e^{-0.03t}$$

The sign of the net exponent decides everything. Here it is negative, so $f$ falls as $t$ rises:

$$f(0) = 40,000$$

$$f(10) = 40,000 \\times e^{-0.3} \\approx 40,000 \\times 0.740818 \\approx 29,632.73$$

Compare the two:

$$40,000.00 - 29,632.73 = 10,367.27$$

Waiting ten years destroys about \\$10,367 of present value even though the wine itself is worth more at that date. The claim also says this holds regardless of the discount rate, which fails as well, since any $r < 0.05$ would flip the net exponent positive. The statement is false.`,
      `**E) If the discount rate were instead 4%, the optimal policy would again be to sell immediately at $t^* = 0$.**  (false)

A different discount rate changes the sign of the net exponent, so the whole conclusion has to be re-derived rather than carried over. The present value of a sale at date $t$ is:

$$f(t) = 40,000 e^{0.05t} e^{-rt} = 40,000 e^{(0.05 - r)t}$$

At the hypothetical $r = 0.04$ the exponent becomes:

$$0.05 - 0.04 = 0.01$$

$$f(t) = 40,000 e^{0.01t}$$

This is strictly increasing in $t$ and unbounded above, so waiting always helps. Comparing two dates makes it concrete:

$$f(0) = 40,000$$

$$f(10) = 40,000 \\times e^{0.1} \\approx 40,000 \\times 1.105171 \\approx 44,206.84$$

Selling immediately would give about \\$4,207 less than waiting a decade, and there is no finite date at which the present value is maximized, since it keeps climbing. The first-order condition confirms it, since $P'(t^{\\ast}) = 0.05P(t^{\\ast})$ can never equal $0.04P(t^{\\ast})$. The claim says $t^{\\ast} = 0$ would again be optimal, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 54,
    solution_overview: `A vineyard owner is deciding when to bottle and sell an aging batch of wine whose market value is modeled as $P(t) = 40,000e^{0.05t}$ dollars, where t is the number of years from now. The relevant continuous interest rate for discounting is 8% per year, so this task applies the chapter's optimal-timing condition to $P(t) = 40,000e^{0.05t}$ with r = 0.08.

**Part 1: Setup.**

$P(t) = 40,000e^{0.05t}$

Continuous annual discount rate p = 8%, so r = 0.08

**Part 2: Formula.**

Present value: $f(t) = P(t)e^{-rt} = 40,000e^{(0.05-0.08)t} = 40,000e^{-0.03t}$

Optimality condition: $P'(t^*) = rP(t^*)$

**Part 3: Solve.**

**1.** $P'(t) = 0.05 \\times 40,000e^{0.05t} = 0.05P(t)$, so the condition $P'(t^*) = rP(t^*)$ would require $0.05P(t^*) = 0.08P(t^*)$, impossible for $P(t^*) > 0$.

**2.** Since $f(t) = 40,000e^{-0.03t}$ is strictly decreasing for $t \\ge 0$, $f$ is maximized at $t = 0$, giving $f(0) = P(0) = \\$40,000$.

**3.** $f(10) = 40,000e^{-0.03 \\times 10} = 40,000e^{-0.3} \\approx 40,000 \\times 0.740818 \\approx \\$29,632.73$.

**4.** Compare $f(0) = \\$40,000$ with $f(10) \\approx \\$29,632.73$.

**5.** If $r = 4\\% < 5\\%$ growth rate, $f(t) = 40,000e^{(0.05-0.04)t} = 40,000e^{0.01t}$, which increases without bound in $t$.
`,
  },
  {
    id: `math-11-55`,
    case_id: `MATH 11.55`,
    title: `Comparative Statics for a Forestry Cooperative's Harvest Timing`,
    subsection: `11.3`,
    context: `A forestry cooperative's analytics team has measured, at the optimal harvest time $t^*$ for one of its timber stands: $P(t^*) = \\$520,000$, $P'(t^*) = \\$46,800$, and $P''(t^*) = \\$3,120$ per year, with a current continuous interest rate of r = 9% per year. The team wants to apply the chapter's comparative-statics formula to find $dt^*/dr$ and to confirm the second-order condition.`,
    statements: [
      `The data satisfy the optimality condition $P'(t^*) = r P(t^*)$.`,
      `The value of $P''(t^*) - r P'(t^*)$ is -\\$1,092.`,
      `$dt^*/dr$ is approximately -476.19.`,
      `An increase in the interest rate would lengthen the optimal harvest time $t^*$.`,
      `The second-order condition $P''(t^*) - r P'(t^*) < 0$ is satisfied here.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The data satisfy the optimality condition $P'(t^*) = r P(t^*)$.**  (true)

The chapter's first-order condition for the optimal harvest date sets the rate of value growth against the interest cost of leaving the timber standing:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

The measured data supply everything the check needs, so evaluate the right side using $r = 0.09$ and $P(t^{\\ast}) = 520,000$:

$$r P(t^{\\ast}) = 0.09 \\times 520,000$$

$$= 46,800$$

Compare that with the measured left side:

$$P'(t^{\\ast}) = 46,800$$

$$46,800 - 46,800 = 0$$

The two sides agree exactly, so the stand really is being measured at a point where the first-order condition holds and the comparative-statics formula may be applied to it. The statement is true.`,
      `**B) The value of $P''(t^*) - r P'(t^*)$ is -\\$1,092.**  (true)

The quantity $P''(t^{\\ast}) - rP'(t^{\\ast})$ is the denominator of the comparative-statics formula and also the second-order check, so it is evaluated directly from the measured data:

$$P''(t^{\\ast}) - r P'(t^{\\ast})$$

Substitute $P''(t^{\\ast}) = 3,120$ per year, $r = 0.09$, and $P'(t^{\\ast}) = 46,800$. Compute the product first:

$$0.09 \\times 46,800 = 4,212$$

Now subtract:

$$3,120 - 4,212$$

$$= -1,092$$

The claim gives $-1,092$, matching the computed value exactly. The sign matters as much as the size here, since a negative result is what a genuine maximum requires. The statement is true.`,
      `**C) $dt^*/dr$ is approximately -476.19.**  (true)

The sensitivity of the optimal date to the interest rate comes from differentiating the first-order condition $P'(t^{\\ast}) = rP(t^{\\ast})$ implicitly with respect to $r$:

$$P''(t^{\\ast})\\frac{dt^{\\ast}}{dr} = P(t^{\\ast}) + rP'(t^{\\ast})\\frac{dt^{\\ast}}{dr}$$

Collecting the derivative terms on one side:

$$\\frac{dt^{\\ast}}{dr}\\left[P''(t^{\\ast}) - rP'(t^{\\ast})\\right] = P(t^{\\ast})$$

$$\\frac{dt^{\\ast}}{dr} = \\frac{P(t^{\\ast})}{P''(t^{\\ast}) - rP'(t^{\\ast})}$$

The denominator was computed from the measured data as $3,120 - 0.09 \\times 46,800 = -1,092$. Substitute both pieces:

$$\\frac{dt^{\\ast}}{dr} = \\frac{520,000}{-1,092}$$

$$\\approx -476.19$$

The claim gives approximately $-476.19$, matching the computed sensitivity. Read in practical units, a one percentage point rise in $r$, meaning $0.01$, would move the optimal date by about $-4.76$ years. The statement is true.`,
      `**D) An increase in the interest rate would lengthen the optimal harvest time $t^*$.**  (false)

The direction in which the optimal date moves is read off the sign of the comparative-statics derivative:

$$\\frac{dt^{\\ast}}{dr} = \\frac{P(t^{\\ast})}{P''(t^{\\ast}) - rP'(t^{\\ast})}$$

The numerator is the stand's value, which is positive:

$$P(t^{\\ast}) = 520,000$$

The denominator is the second-order quantity:

$$3,120 - 0.09 \\times 46,800 = 3,120 - 4,212 = -1,092$$

A positive numerator over a negative denominator gives:

$$\\frac{dt^{\\ast}}{dr} = \\frac{520,000}{-1,092} \\approx -476.19 < 0$$

A negative derivative means the optimal date moves opposite to the rate, so a rate increase shortens $t^{\\ast}$. Concretely, a rise of $0.01$ in $r$ shifts the harvest about $-4.76$ years, that is nearly five years earlier. The claim says a higher rate would lengthen the optimal harvest time, so the statement is false.`,
      `**E) The second-order condition $P''(t^*) - r P'(t^*) < 0$ is satisfied here.**  (true)

The second-order condition distinguishes a present-value maximum from a minimum, and for this problem it requires the quantity to be negative:

$$P''(t^{\\ast}) - r P'(t^{\\ast}) < 0$$

Evaluate the left side from the measured data, with $P''(t^{\\ast}) = 3,120$, $r = 0.09$, and $P'(t^{\\ast}) = 46,800$:

$$0.09 \\times 46,800 = 4,212$$

$$3,120 - 4,212 = -1,092$$

Compare that with the requirement:

$$-1,092 < 0$$

The condition is satisfied, with about \\$1,092 of margin below zero. Together with the first-order check, where $0.09 \\times 520,000 = 46,800$ reproduces the measured $P'(t^{\\ast})$ exactly, this confirms the measured point is a genuine maximum of present value rather than a minimum. The statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `A forestry cooperative's analytics team has measured, at the optimal harvest time $t^*$ for one of its timber stands: $P(t^*) = \\$520,000$, $P'(t^*) = \\$46,800$, and $P''(t^*) = \\$3,120$ per year, with a current continuous interest rate of r = 9% per year. The team wants to apply the chapter's comparative-statics formula to find $dt^*/dr$ and to confirm the second-order condition.

**Part 1: Setup.**

$P(t^*) = \\$520,000$

$P'(t^*) = \\$46,800$

$P''(t^*) = \\$3,120$ per year

Continuous annual rate p = 9%, so r = 0.09

**Part 2: Formula.**

Optimality check: $P'(t^*) = rP(t^*)$

$dt^*/dr = P(t^*) / [P''(t^*) - rP'(t^*)]$

Second-order condition for a maximum: $P''(t^*) - rP'(t^*) < 0$

**Part 3: Solve.**

**1.** $0.09 \\times 520,000 = \\$46,800$, matching the given $P'(t^*)$ exactly.

**2.** $P''(t^*) - r P'(t^*)$: $3,120 - 0.09(46,800) = 3,120 - 4,212 = -\\$1,092$.

**3.** $dt^*/dr = 520,000 / (-1,092) \\approx -476.19$.

**4.** A negative $dt^*/dr$ means $t^*$ moves in the opposite direction from $r$.

**5.** $-1,092 < 0$, so the second-order condition holds.
`,
  },
  {
    id: `math-11-56`,
    case_id: `MATH 11.56`,
    title: `Full Harvest-Timing Analysis for an Orchard's Timber`,
    subsection: `11.3`,
    context: `An orchard's standalone timber value is modeled by $P(t) = 3,000(t+4)^{2}$ dollars. The continuous interest rate is 9% per year. Management wants the optimal harvest time, confirmation that it is indeed a present-value maximum, and the sensitivity of that optimal time to the interest rate, using $P(t) = 3,000(t+4)^{2}$ and r = 0.09.`,
    statements: [
      `The optimal harvest time $t^*$ is approximately 18.22 years.`,
      `The present value of the orchard's timber at $t^*$ is approximately \\$250,000.00.`,
      `The second-order quantity $P''(t^*) - r P'(t^*)$ evaluates to +\\$6,000.`,
      `$dt^*/dr$ is approximately +246.91.`,
      `If the interest rate were exactly 4.5% instead of 9%, the optimal harvest time would be exactly double the original, at 36.44 years.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The optimal harvest time $t^*$ is approximately 18.22 years.**  (true)

The optimal harvest date maximizes the present value $f(t) = P(t)e^{-rt}$, and its first-order condition is:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

Differentiate the orchard's value function $P(t) = 3,000(t+4)^{2}$:

$$P'(t) = 6,000(t+4)$$

Substitute both sides of the condition with $r = 0.09$:

$$6,000(t+4) = 0.09 \\times 3,000(t+4)^{2}$$

$$6,000(t+4) = 270(t+4)^{2}$$

For $t \\ge 0$ the factor $(t+4)$ is strictly positive, so it can be cancelled from both sides:

$$6,000 = 270(t+4)$$

$$t + 4 = \\frac{6,000}{270} \\approx 22.2222$$

$$t^{\\ast} \\approx 22.2222 - 4 = 18.2222 \\text{ years}$$

The claim gives approximately 18.22 years, matching the computed optimum to two decimal places, so the statement is true.`,
      `**B) The present value of the orchard's timber at $t^*$ is approximately \\$250,000.00.**  (false)

The present value at the optimal date is the stand's value there, discounted back to today:

$$f(t) = P(t)e^{-rt}$$

The first-order condition $6,000(t+4) = 270(t+4)^{2}$ gives $t + 4 = 6,000/270 \\approx 22.2222$, so $t^{\\ast} \\approx 18.2222$ years. Evaluate the value function at that date:

$$P(t^{\\ast}) = 3,000 \\times (22.2222)^{2}$$

$$= 3,000 \\times 493.827 \\approx 1,481,481.48$$

Now discount it over $t^{\\ast}$ years at $9\\%$:

$$rt^{\\ast} = 0.09 \\times 18.2222 \\approx 1.64$$

$$e^{-1.64} \\approx 0.193980$$

$$f(t^{\\ast}) \\approx 1,481,481.48 \\times 0.193980 \\approx 287,377.84$$

Compare with the claimed figure:

$$287,377.84 - 250,000.00 = 37,377.84$$

The claim understates the maximized present value by more than \\$37,000, so the statement is false.`,
      `**C) The second-order quantity $P''(t^*) - r P'(t^*)$ evaluates to +\\$6,000.**  (false)

The second-order quantity is built from the second derivative and the first derivative evaluated at the optimum:

$$P''(t^{\\ast}) - r P'(t^{\\ast})$$

Differentiating $P(t) = 3,000(t+4)^{2}$ twice gives:

$$P'(t) = 6,000(t+4), \\qquad P''(t) = 6,000$$

The optimum satisfies $t^{\\ast} + 4 = 6,000/270 \\approx 22.2222$, so the first derivative there is:

$$P'(t^{\\ast}) = 6,000 \\times 22.2222 \\approx 133,333.33$$

Substitute both into the expression with $r = 0.09$:

$$0.09 \\times 133,333.33 = 12,000$$

$$6,000 - 12,000 = -6,000$$

Compare with the claim:

$$-6,000 \\text{ versus } +6,000$$

The magnitude in the claim is right but the sign is wrong, and the sign is the whole point of this quantity. A negative value is exactly what the second-order condition requires for a present-value maximum, so the correct figure confirms a maximum. The statement is false.`,
      `**D) $dt^*/dr$ is approximately +246.91.**  (false)

The sensitivity of the optimal date to the interest rate is given by the comparative-statics formula:

$$\\frac{dt^{\\ast}}{dr} = \\frac{P(t^{\\ast})}{P''(t^{\\ast}) - rP'(t^{\\ast})}$$

At the optimum, $t^{\\ast} + 4 = 6,000/270 \\approx 22.2222$, so the three ingredients are:

$$P(t^{\\ast}) = 3,000 \\times (22.2222)^{2} \\approx 1,481,481.48$$

$$P'(t^{\\ast}) = 6,000 \\times 22.2222 \\approx 133,333.33, \\qquad P''(t^{\\ast}) = 6,000$$

The denominator is therefore:

$$6,000 - 0.09 \\times 133,333.33 = 6,000 - 12,000 = -6,000$$

Substitute both parts:

$$\\frac{dt^{\\ast}}{dr} = \\frac{1,481,481.48}{-6,000}$$

$$\\approx -246.91$$

The magnitude matches the claim but the sign does not. The denominator is negative because the second-order condition for a maximum demands it, so the sensitivity must be negative, meaning a higher rate brings the harvest forward. The claim states $+246.91$, so the statement is false.`,
      `**E) If the interest rate were exactly 4.5% instead of 9%, the optimal harvest time would be exactly double the original, at 36.44 years.**  (false)

Halving the rate calls for re-solving the optimality condition, not scaling the old answer. Cancelling $(t+4)$ from $6,000(t+4) = 3,000r(t+4)^{2}$ leaves a general relation for this value function:

$$6,000 = 3,000\\, r\\, (t+4)$$

$$t^{\\ast} = \\frac{2}{r} - 4$$

At the original rate $r = 0.09$:

$$t^{\\ast} = \\frac{2}{0.09} - 4 \\approx 22.2222 - 4 = 18.2222 \\text{ years}$$

At the halved rate $r = 0.045$:

$$t^{\\ast} = \\frac{2}{0.045} - 4$$

$$\\approx 44.4444 - 4 = 40.4444 \\text{ years}$$

Doubling the original optimum would give:

$$2 \\times 18.2222 = 36.4444 \\text{ years}$$

Compare the two:

$$40.4444 - 36.4444 = 4.0000 \\text{ years}$$

The true optimum at $4.5\\%$ is about 40.44 years, four years beyond the claimed 36.44. Only the $2/r$ term doubles when the rate is halved; the constant $-4$ does not, so the relationship is not proportional. The statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `An orchard's standalone timber value is modeled by $P(t) = 3,000(t+4)^{2}$ dollars. The continuous interest rate is 9% per year. Management wants the optimal harvest time, confirmation that it is indeed a present-value maximum, and the sensitivity of that optimal time to the interest rate, using $P(t) = 3,000(t+4)^{2}$ and r = 0.09.

**Part 1: Setup.**

$P(t) = 3,000(t+4)^{2}$

Continuous annual rate p = 9%, so r = 0.09

**Part 2: Formula.**

$P'(t) = 6,000(t + 4)$

Optimality condition: $P'(t^*) = rP(t^*)$

$dt^*/dr = P(t^*) / [P''(t^*) - rP'(t^*)]$

**Part 3: Solve.**

**1.** $6,000(t + 4) = 0.09 \\times 3,000(t+4)^{2} = 270(t+4)^{2}$; dividing by $(t + 4)$ gives $6,000 = 270(t + 4)$, so $t + 4 = 22.2222$, i.e., $t^* \\approx 18.22$ years.

**2.** $P(t^*) = 3,000(22.2222)^{2} \\approx \\$1,481,481.48$.

**3.** $f(t^*) = P(t^*)e^{-0.09 \\times 18.2222} = 1,481,481.48 \\times e^{-1.64} \\approx \\$287,377.84$.

**4.** $P'(t^*) = 6,000(22.2222) \\approx \\$133,333.33$.

**5.** $P''(t) = 6,000$ (constant).

**6.** $P''(t^*) - rP'(t^*)$: $6,000 - 0.09(133,333.33) = 6,000 - 12,000 = -\\$6,000$.

**7.** $dt^*/dr = 1,481,481.48 / (-6,000) \\approx -246.91$.

**8.** General relation for this $P(t)$: $t^* + 4 = 2/r$, so $t^* = 2/r - 4$.
`,
  },
  {
    id: `math-11-57`,
    case_id: `MATH 11.57`,
    title: `Combining a Private-Equity Exit Payment with a Short-Dated Side Payment`,
    subsection: `11.3`,
    context: `A private equity fund expects to receive \\$250,000 from a portfolio-company exit in exactly 2.5 years, plus a smaller side payment of \\$40,000 in 7 months from a separate arrangement. Both amounts are discounted continuously at the fund's required rate of 11% per year, so this task uses $K_1 = \\$250,000$ at $t_1 = 2.5$ and $K_2 = \\$40,000$ at $t_2 = 7/12$, with r = 0.11.`,
    statements: [
      `The present value of the \\$250,000 exit payment is approximately \\$189,893.03.`,
      `The present value of the \\$40,000 side payment is approximately \\$37,513.95.`,
      `The combined present value of both payments is approximately \\$230,000.00.`,
      `The \\$40,000 side payment is discounted by more than 10% of its face value.`,
      `If the discount rate were 0% instead of 11%, the combined present value of both payments would be exactly \\$290,000.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The present value of the \\$250,000 exit payment is approximately \\$189,893.03.**  (true)

The exit payment is a single future amount discounted continuously:

$$PDV = K e^{-rt}$$

Substitute the exit proceeds $K_1 = 250,000$, the required rate $r = 0.11$, and the horizon $t_1 = 2.5$ years. Form the exponent first:

$$rt_1 = 0.11 \\times 2.5 = 0.275$$

Evaluate the discount factor:

$$e^{-0.275} \\approx 0.759572$$

Apply it to the exit payment:

$$PV_1 = 250,000 \\times 0.759572$$

$$\\approx 189,893.03$$

About $76\\%$ of the face amount survives two and a half years of discounting at $11\\%$. The claim gives approximately \\$189,893.03, matching the computed present value to the cent, so the statement is true.`,
      `**B) The present value of the \\$40,000 side payment is approximately \\$37,513.95.**  (true)

The side payment uses the same continuous rule, with the seven months expressed as a fraction of a year:

$$PDV = K e^{-rt}$$

The horizon is:

$$t_2 = \\frac{7}{12} \\approx 0.583333 \\text{ years}$$

Form the exponent with $r = 0.11$:

$$rt_2 \\approx 0.11 \\times 0.583333 \\approx 0.064167$$

Evaluate the discount factor:

$$e^{-0.064167} \\approx 0.937849$$

Apply it to the \\$40,000 side payment:

$$PV_2 \\approx 40,000 \\times 0.937849$$

$$\\approx 37,513.95$$

The claim gives approximately \\$37,513.95, matching the computed present value to the cent. The factor stays close to 1 because the horizon is short. The statement is true.`,
      `**C) The combined present value of both payments is approximately \\$230,000.00.**  (false)

Present values are expressed in today's dollars, so the two are computed separately and then added:

$$PDV = PV_1 + PV_2$$

The exit payment discounts over 2.5 years:

$$PV_1 = 250,000 \\times e^{-0.275} \\approx 250,000 \\times 0.759572 \\approx 189,893.03$$

The side payment discounts over $7/12$ of a year:

$$PV_2 = 40,000 \\times e^{-0.064167} \\approx 40,000 \\times 0.937849 \\approx 37,513.95$$

Add the two:

$$189,893.03 + 37,513.95 = 227,406.98$$

Compare with the claimed total:

$$230,000.00 - 227,406.98 = 2,593.02$$

The claim overstates the combined present value by about \\$2,593, so the statement is false.`,
      `**D) The \\$40,000 side payment is discounted by more than 10% of its face value.**  (false)

The size of the discount is measured against the payment's own face value, so the present value comes first:

$$PV_2 = K_2 e^{-rt_2}$$

With $t_2 = 7/12 \\approx 0.583333$ years and $r = 0.11$:

$$rt_2 \\approx 0.064167, \\qquad e^{-0.064167} \\approx 0.937849$$

$$PV_2 \\approx 40,000 \\times 0.937849 \\approx 37,513.95$$

The dollar amount of discounting is:

$$40,000.00 - 37,513.95 = 2,486.05$$

As a share of face value:

$$\\frac{2,486.05}{40,000} \\approx 0.0622 = 6.22\\%$$

Compare with the threshold in the claim:

$$10\\% - 6.22\\% = 3.78 \\text{ percentage points}$$

Seven months is too short a wait for $11\\%$ discounting to remove a tenth of the payment; it removes about $6.2\\%$. The statement is false.`,
      `**E) If the discount rate were 0% instead of 11%, the combined present value of both payments would be exactly \\$290,000.**  (true)

A zero rate has to be substituted into the discount factors rather than assumed away. Each payment is valued with:

$$PDV = K e^{-rt}$$

At $r = 0$ both exponents vanish, whatever the horizons:

$$e^{-0 \\times 2.5} = e^{0} = 1$$

$$e^{-0 \\times (7/12)} = e^{0} = 1$$

Each payment therefore keeps its face value:

$$PV_1 = 250,000 \\times 1 = 250,000$$

$$PV_2 = 40,000 \\times 1 = 40,000$$

Add the two:

$$250,000 + 40,000 = 290,000$$

With no compensation required for waiting, the two dates stop mattering and the combined present value is just the total promised. The claim gives exactly \\$290,000, which is the computed total, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 57,
    solution_overview: `A private equity fund expects to receive \\$250,000 from a portfolio-company exit in exactly 2.5 years, plus a smaller side payment of \\$40,000 in 7 months from a separate arrangement. Both amounts are discounted continuously at the fund's required rate of 11% per year, so this task uses $K_1 = \\$250,000$ at $t_1 = 2.5$ and $K_2 = \\$40,000$ at $t_2 = 7/12$, with r = 0.11.

**Part 1: Setup.**

$K_1 = \\$250,000$ due in $t_1 = 2.5$ years

$K_2 = \\$40,000$ due in $t_2 = 7/12$ year

Continuous annual rate p = 11%, so r = 0.11

**Part 2: Formula.**

$PDV = Ke^{-rt}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $rt_1 = 0.11 \\times 2.5 = 0.275$, $e^{-0.275} \\approx 0.759572$, so $PV_1 = 250,000 \\times 0.759572 \\approx \\$189,893.03$.

**2.** $rt_2 = 0.11 \\times 0.583333 \\approx 0.064167$, $e^{-0.064167} \\approx 0.937849$, so $PV_2 = 40,000 \\times 0.937849 \\approx \\$37,513.95$.

**3.** Combined PDV: $189,893.03 + 37,513.95 \\approx \\$227,406.98$.

**4.** $PV_2 \\approx \\$37,513.95$, which is $40,000 - 37,513.95 = \\$2,486.05$ less than face value, only about $6.2\\%$ of the face amount.

**5.** At $r = 0\\%$: $e^{0} = 1$, so combined $PDV = 250,000 + 40,000 = \\$290,000$.
`,
  },
  {
    id: `math-11-58`,
    case_id: `MATH 11.58`,
    title: `Implied Rate on a Biotech Milestone-Contingent Investment`,
    subsection: `11.3`,
    context: `Investors paid \\$2,000,000 today for preferred shares that convert into a guaranteed \\$3,200,000 payout in 4.5 years if a specific FDA milestone is met, with value discounted continuously. The investors' analyst wants to determine the implied continuous discount rate and test its sensitivity, using $PDV = \\$2,000,000$, $K = \\$3,200,000$, and t = 4.5.`,
    statements: [
      `The implied discount factor is exactly 0.625.`,
      `The implied continuous discount rate is approximately 10.44% per year.`,
      `If the milestone payout were instead \\$3,600,000, the implied discount rate would be higher than the rate implied by the original \\$3,200,000 payout.`,
      `If the time to payout were shortened to 3 years instead of 4.5, the implied discount rate would be lower than the rate implied by the original 4.5-year horizon.`,
      `Doubling the time horizon to 9 years would require the rate to be approximately 5.22%.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The implied discount factor is exactly 0.625.**  (true)

The discount factor is the share of the promised payout that the investors actually paid, so it is read off the two amounts:

$$\\text{discount factor} = \\frac{PDV}{K}$$

Substitute the \\$2,000,000 paid today and the \\$3,200,000 guaranteed milestone payout:

$$\\frac{2,000,000}{3,200,000}$$

$$= 0.625$$

The division terminates exactly, since $2/3.2 = 20/32 = 5/8$, so no rounding is involved. The investors are paying 62.5 cents today for each dollar promised in 4.5 years. The claim states exactly 0.625, so the statement is true.`,
      `**B) The implied continuous discount rate is approximately 10.44% per year.**  (true)

Recovering the implied rate means inverting the continuous present-value rule:

$$PDV = K e^{-rt}$$

Divide by $K$, take natural logarithms, and solve for the rate:

$$r = -\\frac{\\ln(PDV/K)}{t}$$

Substitute the discount factor $2,000,000/3,200,000 = 0.625$ and the horizon $t = 4.5$ years:

$$-\\ln(0.625) \\approx 0.470004$$

$$r \\approx \\frac{0.470004}{4.5}$$

$$\\approx 0.104445 = 10.44\\%$$

The claim gives approximately 10.44% per year, matching the computed implied rate to two decimal places. As a check, $3,200,000 \\times e^{-0.104445 \\times 4.5} \\approx 2,000,000$, the price actually paid. The statement is true.`,
      `**C) If the milestone payout were instead \\$3,600,000, the implied discount rate would be higher than the rate implied by the original \\$3,200,000 payout.**  (true)

A different payout changes the discount factor, so the implied rate is recomputed from the same inversion:

$$r = -\\frac{\\ln(PDV/K)}{t}$$

With the larger payout of \\$3,600,000 against the same \\$2,000,000 price:

$$\\frac{PDV}{K} = \\frac{2,000,000}{3,600,000} \\approx 0.555556$$

$$-\\ln(0.555556) \\approx 0.587787$$

$$r' \\approx \\frac{0.587787}{4.5} \\approx 0.130619 = 13.06\\%$$

The original \\$3,200,000 payout implied:

$$r = \\frac{0.470004}{4.5} \\approx 0.104445 = 10.44\\%$$

Compare the two rates:

$$13.06\\% - 10.44\\% = 2.62 \\text{ percentage points}$$

Paying the same price for a bigger promised payout means a smaller discount factor, and a smaller factor over the same horizon requires a stronger rate. The implied rate rises by about 2.62 percentage points, so the statement is true.`,
      `**D) If the time to payout were shortened to 3 years instead of 4.5, the implied discount rate would be lower than the rate implied by the original 4.5-year horizon.**  (false)

Shortening the horizon while price and payout stay fixed leaves the discount factor unchanged and forces the rate to adjust:

$$r = -\\frac{\\ln(PDV/K)}{t}$$

The factor is still:

$$\\frac{2,000,000}{3,200,000} = 0.625, \\qquad -\\ln(0.625) \\approx 0.470004$$

At the shortened horizon $t = 3$ years:

$$r' \\approx \\frac{0.470004}{3}$$

$$\\approx 0.156668 = 15.67\\%$$

At the original 4.5-year horizon:

$$r = \\frac{0.470004}{4.5} \\approx 0.104445 = 10.44\\%$$

Compare the two:

$$15.67\\% - 10.44\\% = 5.23 \\text{ percentage points}$$

Only the product $rt$ is pinned down by the price and the payout, so compressing the same total discount into fewer years demands a higher annual rate, not a lower one. The claim has the direction backwards, so the statement is false.`,
      `**E) Doubling the time horizon to 9 years would require the rate to be approximately 5.22%.**  (true)

The price and the payout fix the discount factor, and therefore fix the product of rate and time:

$$e^{-rt} = \\frac{PDV}{K} = 0.625$$

Taking natural logarithms:

$$rt = -\\ln(0.625) \\approx 0.470004$$

That product must stay at 0.470004, so doubling the horizon to $t = 9$ years gives:

$$r = \\frac{0.470004}{9}$$

$$\\approx 0.052223 = 5.22\\%$$

Compare with the original 4.5-year rate:

$$\\frac{0.104445}{2} \\approx 0.052223$$

Doubling the time halves the rate exactly, because only their product appears in the exponent. The claim gives approximately 5.22%, matching the computed figure, so the statement is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Investors paid \\$2,000,000 today for preferred shares that convert into a guaranteed \\$3,200,000 payout in 4.5 years if a specific FDA milestone is met, with value discounted continuously. The investors' analyst wants to determine the implied continuous discount rate and test its sensitivity, using $PDV = \\$2,000,000$, $K = \\$3,200,000$, and t = 4.5.

**Part 1: Setup.**

$PDV = \\$2,000,000$

$K = \\$3,200,000$

t = 4.5 years (continuous compounding)

**Part 2: Formula.**

$PDV = Ke^{-rt}$, so $r = -\\ln(PDV/K)/t$

**Part 3: Solve.**

**1.** $PDV/K = 2,000,000/3,200,000 = 0.625$.

**2.** $r = -\\ln(0.625)/4.5 = 0.470004/4.5 \\approx 0.104445 = 10.44\\%$.

**3.** For $K = \\$3,600,000$: ratio $= 2,000,000/3,600,000 \\approx 0.555556$, $r = -\\ln(0.555556)/4.5 \\approx 0.587787/4.5 \\approx 0.130619 = 13.06\\%$.

**4.** For $t = 3$: $r = -\\ln(0.625)/3 = 0.470004/3 \\approx 0.156668 = 15.67\\%$.

**5.** For $t = 9$ with the same discount factor $0.625$: $r = -\\ln(0.625)/9 = 0.470004/9 \\approx 0.052223 = 5.22\\%$.
`,
  },
  {
    id: `math-11-59`,
    case_id: `MATH 11.59`,
    title: `General Harvest-Timing Formula for a Forestry Consultancy`,
    subsection: `11.3`,
    context: `A forestry consultancy models a class of timber stands with value function $P(t) = A(t + k)^{2}$ for positive constants A and k, discounted continuously at rate r. For one particular stand, $A = \\$1,200$, k = 5, and r = 7.5% per year. The consultancy wants the general optimal-time formula, the specific optimal time, and two comparative-statics checks.`,
    statements: [
      `The general optimal-time formula for this family of functions is $t^* = 2/r - k$.`,
      `Using A = 1,200, k = 5, and r = 7.5%, the optimal harvest time is approximately $t^* = 21.67$ years.`,
      `The present value at $t^*$ is approximately \\$195,500.00.`,
      `If k were increased to 8, the optimal harvest time would be shorter than the original optimal time.`,
      `If the interest rate were doubled to 15%, the optimal harvest time would be more than half of the original optimal time.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The general optimal-time formula for this family of functions is $t^* = 2/r - k$.**  (true)

The optimal harvest date maximizes $f(t) = P(t)e^{-rt}$, and its first-order condition is:

$$P'(t^{\\ast}) = r P(t^{\\ast})$$

Differentiate the family's value function $P(t) = A(t+k)^{2}$:

$$P'(t) = 2A(t+k)$$

Substitute both sides of the condition:

$$2A(t+k) = r A(t+k)^{2}$$

Both $A$ and $(t+k)$ are strictly positive, since $A$ and $k$ are positive constants and $t \\ge 0$, so the common factor $A(t+k)$ can be cancelled:

$$2 = r(t+k)$$

Divide by $r$ and subtract $k$:

$$t + k = \\frac{2}{r}$$

$$t^{\\ast} = \\frac{2}{r} - k$$

This is exactly the general formula the claim gives, and note that $A$ has dropped out entirely, so the scale of the stand does not affect the timing. The statement is true.`,
      `**B) Using A = 1,200, k = 5, and r = 7.5%, the optimal harvest time is approximately $t^* = 21.67$ years.**  (true)

The general formula for this family follows from cancelling $A(t+k)$ in the optimality condition $2A(t+k) = rA(t+k)^{2}$, which leaves $2 = r(t+k)$ and therefore:

$$t^{\\ast} = \\frac{2}{r} - k$$

Substitute the stand's parameters, $k = 5$ and $r = 0.075$:

$$t^{\\ast} = \\frac{2}{0.075} - 5$$

$$\\frac{2}{0.075} \\approx 26.6667$$

$$t^{\\ast} \\approx 26.6667 - 5 = 21.6667 \\text{ years}$$

The value $A = 1,200$ plays no part, since it cancelled out of the condition. The claim gives approximately 21.67 years, matching the computed optimum to two decimal places, so the statement is true.`,
      `**C) The present value at $t^*$ is approximately \\$195,500.00.**  (false)

The present value at the optimum is the stand's value at that date discounted back to today:

$$f(t) = P(t)e^{-rt}$$

The optimal date follows from $t^{\\ast} = 2/r - k$ with $r = 0.075$ and $k = 5$:

$$t^{\\ast} = 26.6667 - 5 = 21.6667 \\text{ years}, \\qquad t^{\\ast} + k \\approx 26.6667$$

Evaluate the value function there with $A = 1,200$:

$$P(t^{\\ast}) = 1,200 \\times (26.6667)^{2}$$

$$\\approx 1,200 \\times 711.111 \\approx 853,333.33$$

Now discount over $t^{\\ast}$ years at $7.5\\%$:

$$rt^{\\ast} = 0.075 \\times 21.6667 \\approx 1.625$$

$$e^{-1.625} \\approx 0.196912$$

$$f(t^{\\ast}) \\approx 853,333.33 \\times 0.196912 \\approx 168,031.30$$

Compare with the claimed figure:

$$195,500.00 - 168,031.30 = 27,468.70$$

The claim overstates the maximized present value by more than \\$27,000, so the statement is false.`,
      `**D) If k were increased to 8, the optimal harvest time would be shorter than the original optimal time.**  (true)

The effect of $k$ on the optimal date is visible directly in the general formula:

$$t^{\\ast} = \\frac{2}{r} - k$$

Only the second term involves $k$, and it enters with a minus sign, so raising $k$ lowers $t^{\\ast}$ one for one. Evaluate at the original $k = 5$ with $r = 0.075$:

$$t^{\\ast} = \\frac{2}{0.075} - 5 \\approx 26.6667 - 5 = 21.6667 \\text{ years}$$

Now at $k = 8$, with the rate unchanged:

$$t^{\\ast\\prime} = \\frac{2}{0.075} - 8$$

$$\\approx 26.6667 - 8 = 18.6667 \\text{ years}$$

Compare the two dates:

$$21.6667 - 18.6667 = 3.0000 \\text{ years}$$

The optimum arrives exactly 3 years earlier, matching the 3-unit increase in $k$, because a larger $k$ means the stand is already further along its growth curve and its proportional growth rate falls to the interest rate sooner. The claim says the harvest time would be shorter, so the statement is true.`,
      `**E) If the interest rate were doubled to 15%, the optimal harvest time would be more than half of the original optimal time.**  (false)

Doubling the rate calls for re-evaluating the formula rather than scaling the old answer, because only part of it depends on $r$:

$$t^{\\ast} = \\frac{2}{r} - k$$

At the original $r = 0.075$ with $k = 5$:

$$t^{\\ast} = \\frac{2}{0.075} - 5 \\approx 26.6667 - 5 = 21.6667 \\text{ years}$$

At the doubled rate $r = 0.15$:

$$t^{\\ast\\prime} = \\frac{2}{0.15} - 5$$

$$\\approx 13.3333 - 5 = 8.3333 \\text{ years}$$

Half of the original optimum would be:

$$\\frac{21.6667}{2} \\approx 10.8333 \\text{ years}$$

Compare the new optimum with that halfway mark:

$$10.8333 - 8.3333 = 2.5000 \\text{ years}$$

The new optimum of about 8.33 years falls 2.5 years below half the original, so it is less than half, not more. The $2/r$ term does halve exactly, but subtracting the same $k = 5$ from a much smaller number cuts proportionally deeper. The statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `A forestry consultancy models a class of timber stands with value function $P(t) = A(t + k)^{2}$ for positive constants A and k, discounted continuously at rate r. For one particular stand, $A = \\$1,200$, k = 5, and r = 7.5% per year. The consultancy wants the general optimal-time formula, the specific optimal time, and two comparative-statics checks.

**Part 1: Setup.**

$P(t) = A(t + k)^{2}$, with A = 1,200, k = 5

Continuous annual rate p = 7.5%, so r = 0.075

**Part 2: Formula.**

$P'(t) = 2A(t + k)$

Optimality condition: $P'(t^*) = rP(t^*)$

**Part 3: Solve.**

**1.** $2A(t + k) = r A(t + k)^{2}$; dividing both sides by $A(t + k)$ (nonzero) gives $2 = r(t + k)$, so $t^* = 2/r - k$.

**2.** $t^* = 2/0.075 - 5 = 26.6667 - 5 \\approx 21.67$ years.

**3.** $P(t^*) = 1,200(26.6667)^{2} \\approx \\$853,333.33$.

**4.** $f(t^*) = 853,333.33 \\times e^{-0.075 \\times 21.6667} = 853,333.33 \\times e^{-1.625} \\approx \\$168,031.30$.

**5.** With $k = 8$: $t^* = 2/0.075 - 8 \\approx 26.6667 - 8 = 18.67$ years.

**6.** With $r = 15\\%$: $t^* = 2/0.15 - 5 = 13.3333 - 5 = 8.33$ years.

**7.** Half of the original $21.67$ years is $10.83$ years.
`,
  },
  {
    id: `math-11-60`,
    case_id: `MATH 11.60`,
    title: `Pricing Two Franchise Payments Related by a Common Time Horizon`,
    subsection: `11.3`,
    context: `A franchise agreement promises an investor two payments from a franchisee: \\$30,000 in exactly 5 years and \\$55,000 in exactly 10 years (twice the first horizon). Value is discounted continuously at 8% per year. Because the second payment date is exactly double the first, its discount factor is the square of the first payment's discount factor, so this task uses $K_1 = \\$30,000$ at $t_1 = 5$, $K_2 = \\$55,000$ at $t_2 = 10$, and r = 0.08.`,
    statements: [
      `The discount factor for the 5-year payment is approximately 0.6703.`,
      `The discount factor for the 10-year payment is approximately 0.4493.`,
      `The present value of the \\$30,000 payment is approximately \\$21,500.00.`,
      `The present value of the \\$55,000 payment is approximately \\$26,000.00.`,
      `The combined present value the investor should pay today for both payments is approximately \\$47,500.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The discount factor for the 5-year payment is approximately 0.6703.**  (true)

The continuous discount factor is the exponential of the negative product of rate and time:

$$\\text{discount factor} = e^{-rt}$$

The franchise payments are discounted at $8\\%$ per year and the first arrives in 5 years, so form the exponent:

$$rt_1 = 0.08 \\times 5 = 0.40$$

Evaluate the factor at that exponent:

$$e^{-0.40} \\approx 0.670320$$

Rounded to four decimal places this is 0.6703, exactly the figure the claim gives. About 67 cents of each promised dollar survives five years of discounting at this rate. The statement is true.`,
      `**B) The discount factor for the 10-year payment is approximately 0.4493.**  (true)

The second payment is twice as far out, and the discount factor for a doubled horizon is the square of the original factor. Starting from the rule:

$$e^{-r(2t_1)} = \\left(e^{-rt_1}\\right)^{2}$$

Compute the exponent directly for $t_2 = 10$ years at $r = 0.08$:

$$rt_2 = 0.08 \\times 10 = 0.80$$

$$e^{-0.80} \\approx 0.449329$$

Now confirm the squaring relationship using the 5-year factor:

$$e^{-0.40} \\approx 0.670320$$

$$(0.670320)^{2} \\approx 0.449329$$

The two routes agree, as they must, since $e^{-0.40} \\times e^{-0.40} = e^{-0.80}$. The claim gives approximately 0.4493, matching the computed factor to four decimal places, so the statement is true.`,
      `**C) The present value of the \\$30,000 payment is approximately \\$21,500.00.**  (false)

The present value of the first payment applies the 5-year discount factor to its face amount:

$$PDV = K e^{-rt}$$

Substitute $K_1 = 30,000$, $r = 0.08$, and $t_1 = 5$ years:

$$rt_1 = 0.08 \\times 5 = 0.40$$

$$e^{-0.40} \\approx 0.670320$$

$$PV_1 = 30,000 \\times 0.670320$$

$$\\approx 20,109.60$$

Compare with the claimed figure:

$$21,500.00 - 20,109.60 = 1,390.40$$

The claim overstates the present value of the \\$30,000 payment by about \\$1,390, so the statement is false.`,
      `**D) The present value of the \\$55,000 payment is approximately \\$26,000.00.**  (false)

The second payment is discounted over the full 10 years:

$$PDV = K e^{-rt}$$

Substitute $K_2 = 55,000$, $r = 0.08$, and $t_2 = 10$ years:

$$rt_2 = 0.08 \\times 10 = 0.80$$

$$e^{-0.80} \\approx 0.449329$$

$$PV_2 = 55,000 \\times 0.449329$$

$$\\approx 24,713.09$$

Compare with the claimed figure:

$$26,000.00 - 24,713.09 = 1,286.91$$

Barely $45\\%$ of the face amount survives a decade of discounting at $8\\%$, leaving about \\$24,713.09 rather than the claimed \\$26,000.00. The statement is false.`,
      `**E) The combined present value the investor should pay today for both payments is approximately \\$47,500.00.**  (false)

Both present values are in today's dollars, so the total the investor should pay is their sum:

$$PDV = PV_1 + PV_2$$

The 5-year payment discounts by $e^{-0.40}$:

$$PV_1 = 30,000 \\times 0.670320 \\approx 20,109.60$$

The 10-year payment discounts by $e^{-0.80}$, the square of that factor:

$$PV_2 = 55,000 \\times 0.449329 \\approx 24,713.09$$

Add the two:

$$20,109.60 + 24,713.09$$

$$\\approx 44,822.69$$

Compare with the claimed total:

$$47,500.00 - 44,822.69 = 2,677.31$$

The claim overstates what the investor should pay today by about \\$2,677, so the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `A franchise agreement promises an investor two payments from a franchisee: \\$30,000 in exactly 5 years and \\$55,000 in exactly 10 years (twice the first horizon). Value is discounted continuously at 8% per year. Because the second payment date is exactly double the first, its discount factor is the square of the first payment's discount factor, so this task uses $K_1 = \\$30,000$ at $t_1 = 5$, $K_2 = \\$55,000$ at $t_2 = 10$, and r = 0.08.

**Part 1: Setup.**

$K_1 = \\$30,000$ due in $t_1 = 5$ years

$K_2 = \\$55,000$ due in $t_2 = 10$ years

Continuous annual rate p = 8%, so r = 0.08

**Part 2: Formula.**

$PDV = Ke^{-rt}$

Since $t_2 = 2t_1$, the discount factor $e^{-rt_2}=(e^{-rt_1})^{2}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $e^{-0.4} \\approx 0.670320$.

**2.** $e^{-0.8} \\approx 0.449329$; note $(0.670320)^{2} \\approx 0.449329$, confirming the squaring relationship.

**3.** $PV_1 = 30,000 \\times 0.670320 \\approx \\$20,109.60$.

**4.** $PV_2 = 55,000 \\times 0.449329 \\approx \\$24,713.09$.

**5.** Combined PDV: $20,109.60 + 24,713.09 \\approx \\$44,822.69$.
`,
  },
  {
    id: `math-11-61`,
    case_id: `MATH 11.61`,
    title: `Startup Revenue Growth Over Five Years`,
    subsection: `11.4`,
    context: `A newly launched e-commerce startup earns \\$50 million in revenue this year and expects revenue to grow by 10% annually for each of the next four years, forming a finite geometric series with first term a = \\$50 million and quotient k = 1.10 over n = 5 years.`,
    statements: [
      `The expected revenue in year 2 is \\$55.00 million.`,
      `The expected revenue in year 5 is approximately \\$73.21 million.`,
      `The total revenue expected over the 5-year period is approximately \\$305.26 million.`,
      `If revenue had instead remained flat at \\$50 million per year for 5 years, the total would have been \\$250 million - exactly \\$60.00 million less than the actual growth-scenario total.`,
      `The total revenue expected over the 5-year period is approximately \\$328.86 million.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The expected revenue in year 2 is \\$55.00 million.**  (true)

Each year's revenue in a geometric path is the first year's revenue multiplied by the growth factor once for every year that has already passed:

$$a_t = a\\,k^{t-1}$$

The startup earns $a = 50$ million dollars in year 1 and revenue grows $10\\%$ a year, so the quotient is $k = 1.10$. Year 2 is one step past year 1, which makes the exponent $t - 1 = 1$:

$$a_2 = 50 \\times (1.10)^{1}$$

$$a_2 = 55.00$$

The calculation gives \\$55.00 million and the claim names \\$55.00 million, so the statement is true.`,
      `**B) The expected revenue in year 5 is approximately \\$73.21 million.**  (true)

The revenue in any year is the first year's revenue scaled by the growth factor once per elapsed year:

$$a_t = a\\,k^{t-1}$$

Year 1 is the starting figure itself with no multiplication applied, so reaching year 5 takes four growth steps rather than five. Substituting $a = 50$ million dollars, $k = 1.10$, and $t = 5$ gives the exponent $t - 1 = 4$:

$$a_5 = 50 \\times (1.10)^{4}$$

Raising the growth factor to the fourth power:

$$(1.10)^{4} = 1.4641$$

Multiplying by the first year's revenue:

$$a_5 = 50 \\times 1.4641$$

$$a_5 = 73.205$$

That is \\$73.205 million, which rounds to \\$73.21 million. The claim names \\$73.21 million, so the statement is true.`,
      `**C) The total revenue expected over the 5-year period is approximately \\$305.26 million.**  (true)

The five yearly revenues form a finite geometric series, and a finite geometric series with quotient $k \\neq 1$ adds up to

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Here the first year contributes $a = 50$ million dollars, the quotient is $k = 1.10$, and the horizon is $n = 5$ years:

$$s_5 = 50 \\times \\frac{(1.10)^{5}-1}{1.10-1}$$

The fifth power of the growth factor is

$$(1.10)^{5} = 1.61051$$

so the bracket becomes

$$\\frac{1.61051-1}{0.10} = \\frac{0.61051}{0.10} = 6.1051$$

and the total is

$$s_5 = 50 \\times 6.1051$$

$$s_5 = 305.255$$

That is \\$305.255 million, which rounds to \\$305.26 million. The claim names \\$305.26 million, so the statement is true.`,
      `**D) If revenue had instead remained flat at \\$50 million per year for 5 years, the total would have been \\$250 million - exactly \\$60.00 million less than the actual growth-scenario total.**  (false)

Two separate totals are needed before the claimed gap can be judged. A flat schedule has no growth at all, so every one of its five payments equals the same \\$50 million and the total is just the payment times the number of years:

$$s_{\\text{flat}} = 50 \\times 5$$

$$s_{\\text{flat}} = 250$$

That part of the claim is correct: a flat \\$50 million a year for 5 years does total \\$250.00 million. The growth schedule instead sums as a finite geometric series with $a = 50$, $k = 1.10$, and $n = 5$:

$$s_5 = 50 \\times \\frac{(1.10)^{5}-1}{1.10-1}$$

$$(1.10)^{5} = 1.61051$$

$$s_5 = 50 \\times \\frac{0.61051}{0.10}$$

$$s_5 = 50 \\times 6.1051 = 305.255$$

Subtracting the flat total from the growth total gives the true shortfall:

$$305.255 - 250 = 55.255$$

The flat schedule therefore falls about \\$55.26 million short, not \\$60.00 million. The claimed figure overstates the real gap by

$$60.00 - 55.26 = 4.74$$

million dollars. The dollar amount attached to the comparison is wrong, so the statement is false.`,
      `**E) The total revenue expected over the 5-year period is approximately \\$328.86 million.**  (false)

The five-year total is fixed by the series itself, so it can be computed on its own and then held up against the figure in the claim. With $a = 50$ million dollars, $k = 1.10$, and $n = 5$, the finite geometric sum is

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

$$s_5 = 50 \\times \\frac{(1.10)^{5}-1}{1.10-1}$$

The fifth power of the growth factor is

$$(1.10)^{5} = 1.61051$$

so the bracket reduces to

$$\\frac{0.61051}{0.10} = 6.1051$$

and the total revenue over the five years is

$$s_5 = 50 \\times 6.1051 = 305.255$$

or about \\$305.26 million. The claim names \\$328.86 million, which is larger by

$$328.86 - 305.26 = 23.60$$

million dollars. A discrepancy of that size is far beyond any rounding difference, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 61,
    solution_overview: `A newly launched e-commerce startup earns \\$50 million in revenue this year and expects revenue to grow by $10\\%$ annually for each of the next four years, forming a finite geometric series with first term $a = \\$50$ million and quotient $k = 1.10$ over $n = 5$ years.

**Part 1: Setup.**

$a$ (year-$1$ revenue) $= \\$50$ million; $k = 1.10$; $n = 5$ years.

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$ for $k \\neq 1$; term in year $t$: $a k^{t-1}$.

**Part 3: Solve.**

**1.** Year-$2$ revenue: $50\\times1.10 = \\$55.00$ million.

**2.** Year-$5$ revenue: $50\\times(1.10)^{4} = 50\\times1.4641 = \\$73.205 \\to \\$73.21$ million.

**3.** $k^{5} = 1.10^{5} = 1.61051$; $s_5 = 50\\times(1.61051-1)/0.10 = 50\\times6.1051 \\to \\$305.26$ million.

**4.** Flat-revenue total ($k = 1$): $50\\times5 = \\$250.00$ million; difference $305.255-250 = \\$55.26$ million (not $\\$60$).`,
  },
  {
    id: `math-11-62`,
    case_id: `MATH 11.62`,
    title: `Perpetual Profit Stream from a Subscription Box Line`,
    subsection: `11.4`,
    context: `A subscription box company just earned \\$2,000 in profit from its newest product line this month. Because customer renewals are expected to halve every month indefinitely, monthly profits are modeled as an infinite geometric series with first term a = \\$2,000 and quotient k = 0.5.`,
    statements: [
      `The infinite profit series converges to a finite sum.`,
      `The infinite sum of all future monthly profits is \\$4,000.00.`,
      `The sum of just the first 4 months' profits is \\$3,750.00.`,
      `The sum of the first 4 months' profits exceeds the infinite sum.`,
      `If the quotient were instead k = 1.5, the infinite series would still converge, to a sum of \\$-4,000.00.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The infinite profit series converges to a finite sum.**  (true)

An infinite geometric series converges when the size of its quotient stays below 1, and diverges otherwise:

$$a + ak + ak^{2} + \\cdots \\text{ converges when } |k| < 1$$

Each month's profit here is exactly half of the previous month's, so the quotient between consecutive terms is constant at

$$k = 0.5$$

and its absolute value is

$$|k| = 0.5$$

Comparing that against the convergence cutoff:

$$0.5 < 1$$

The monthly profits therefore shrink quickly, running $2{,}000$, then $1{,}000$, then $500$, then $250$, and heading toward zero. Because the terms fade this fast, the running total settles on a fixed finite number instead of climbing without bound. The convergence condition is satisfied, so the statement is true.`,
      `**B) The infinite sum of all future monthly profits is \\$4,000.00.**  (true)

When an infinite geometric series converges, its total equals the first term divided by one minus the quotient:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

This month's profit is the first term, $a = 2{,}000$ dollars, and renewals halve the profit each month, so $k = 0.5$. Since $|0.5| < 1$, the formula applies:

$$s_{\\infty} = \\frac{2{,}000}{1-0.5}$$

Simplifying the denominator:

$$s_{\\infty} = \\frac{2{,}000}{0.5}$$

$$s_{\\infty} = 4{,}000$$

All future monthly profits therefore accumulate toward \\$4,000.00, which is exactly the amount claimed, so the statement is true.`,
      `**C) The sum of just the first 4 months' profits is \\$3,750.00.**  (true)

The first four months' profits are simply the first four terms of the series, each one half the size of the one before it:

$$a_1 = 2{,}000$$

$$a_2 = 2{,}000 \\times 0.5 = 1{,}000$$

$$a_3 = 2{,}000 \\times (0.5)^{2} = 500$$

$$a_4 = 2{,}000 \\times (0.5)^{3} = 250$$

Adding the four terms directly:

$$s_4 = 2{,}000 + 1{,}000 + 500 + 250$$

$$s_4 = 3{,}750$$

The same figure comes out of the finite-sum formula $s_n = a(1-k^{n})/(1-k)$, since $(0.5)^{4} = 0.0625$ gives $2{,}000 \\times 0.9375/0.5 = 3{,}750$. The four-month total is \\$3,750.00, matching the claim, so the statement is true.`,
      `**D) The sum of the first 4 months' profits exceeds the infinite sum.**  (false)

Every term of this series is a positive amount of profit, so each additional month can only push the running total upward. That makes any partial sum strictly smaller than the infinite total, and both numbers can be computed directly. The first four months add to

$$s_4 = 2{,}000 + 1{,}000 + 500 + 250$$

$$s_4 = 3{,}750$$

The infinite total uses the limiting formula with $a = 2{,}000$ and $k = 0.5$:

$$s_{\\infty} = \\frac{2{,}000}{1-0.5} = \\frac{2{,}000}{0.5}$$

$$s_{\\infty} = 4{,}000$$

Comparing the two figures:

$$3{,}750 < 4{,}000$$

The four-month partial sum sits below the infinite total by

$$4{,}000 - 3{,}750 = 250$$

dollars, so it falls short of the infinite sum rather than exceeding it, and the statement is false.`,
      `**E) If the quotient were instead k = 1.5, the infinite series would still converge, to a sum of \\$-4,000.00.**  (false)

Convergence of a geometric series is decided entirely by the size of its quotient:

$$a + ak + ak^{2} + \\cdots \\text{ converges when } |k| < 1$$

Under the hypothetical quotient $k = 1.5$, that size is

$$|k| = 1.5$$

and the comparison with the cutoff runs the wrong way:

$$1.5 > 1$$

The individual terms show what that means in practice. Starting from $a = 2{,}000$ dollars,

$$a_2 = 2{,}000 \\times 1.5 = 3{,}000$$

$$a_3 = 2{,}000 \\times (1.5)^{2} = 4{,}500$$

$$a_4 = 2{,}000 \\times (1.5)^{3} = 6{,}750$$

Each month's amount is larger than the previous one, so the terms never approach zero and the partial sums climb without any ceiling. No finite limiting value exists, which is precisely what divergence means. The closed formula $a/(1-k)$ is valid only when $|k| < 1$, and forcing $k = 1.5$ into it anyway produces

$$\\frac{2{,}000}{1-1.5} = \\frac{2{,}000}{-0.5} = -4{,}000$$

which is where the quoted figure of \\$-4,000.00 comes from. That number is the output of a formula used outside the range where it means anything, and a stream of growing positive profits cannot possibly total a negative amount. The series does not converge, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 62,
    solution_overview: `A subscription box company just earned \\$2,000 in profit from its newest product line this month. Because customer renewals are expected to halve every month indefinitely, monthly profits are modeled as an infinite geometric series with first term a = \\$2,000 and quotient k = 0.5.

**Part 1: Setup.**

a (month-1 profit) = \\$2,000

k (monthly decay quotient) = 0.5

**Part 2: Formula.**

Infinite sum (|k| < 1): $a + ak + ak^{2} + \\cdots = a/(1 - k)$

Finite sum of first n terms: $s_n = a(1 - k^{n})/(1 - k)$

**Part 3: Solve.**

**1.** $|k| = 0.5 < 1$, so the series converges.

**2.** Infinite sum: $2,000/(1 - 0.5) = 2,000/0.5 = \\$4,000.00$.

**3.** First $4$ terms: $2,000 + 1,000 + 500 + 250 = \\$3,750.00$.

**4.** $3,750.00 < 4,000.00$, so the partial sum does not exceed the infinite sum.

**5.** If $k = 1.5$, then $|k| = 1.5 \\ge 1$, so the series diverges and has no finite sum at all.`,
  },
  {
    id: `math-11-63`,
    case_id: `MATH 11.63`,
    title: `Declining Annual Deposits into a Sinking Fund`,
    subsection: `11.4`,
    context: `An investor commits to an unusual sinking-fund plan: this year's deposit is \\$800, and each following year's deposit is 90% of the previous year's deposit, continuing indefinitely. This is an infinite geometric series with a = \\$800 and k = 0.90.`,
    statements: [
      `The infinite deposit series converges.`,
      `The infinite sum of all deposits is \\$8,000.00.`,
      `The sum of the first 10 deposits is approximately \\$5,210.57.`,
      `The first 10 deposits together represent about 65% of the infinite total sum.`,
      `If the quotient were instead k = 1.10, the series would diverge.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The infinite deposit series converges.**  (true)

An infinite geometric series converges exactly when the absolute value of its quotient is below 1:

$$a + ak + ak^{2} + \\cdots \\text{ converges when } |k| < 1$$

Each deposit here is $90\\%$ of the previous year's deposit, so the ratio between consecutive deposits is constant at

$$k = 0.90$$

with absolute value

$$|k| = 0.90$$

Comparing that against the cutoff:

$$0.90 < 1$$

The deposits accordingly shrink year after year, running $800$, then $720$, then $648$, and continuing toward zero. Because the terms fade away, the cumulative amount deposited approaches a fixed finite value rather than growing without limit. The convergence test is satisfied, so the statement is true.`,
      `**B) The infinite sum of all deposits is \\$8,000.00.**  (true)

For a convergent infinite geometric series, the total of every term added together equals the first term divided by one minus the quotient:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

This year's deposit is the first term, $a = 800$ dollars, and each later deposit is $90\\%$ of the one before it, so $k = 0.90$. Since $|0.90| < 1$, the formula applies:

$$s_{\\infty} = \\frac{800}{1-0.90}$$

Simplifying the denominator:

$$s_{\\infty} = \\frac{800}{0.10}$$

$$s_{\\infty} = 8{,}000$$

The cumulative deposits therefore approach \\$8,000.00 in the long run, exactly the figure in the claim, so the statement is true.`,
      `**C) The sum of the first 10 deposits is approximately \\$5,210.57.**  (true)

The first ten deposits form a finite geometric series, which sums to

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

Substituting the first deposit $a = 800$ dollars, the quotient $k = 0.90$, and $n = 10$ terms:

$$s_{10} = 800 \\times \\frac{1-(0.90)^{10}}{1-0.90}$$

The tenth power of the quotient is

$$(0.90)^{10} = 0.348678$$

so the numerator of the bracket becomes

$$1 - 0.348678 = 0.651322$$

and dividing by the denominator gives

$$\\frac{0.651322}{0.10} = 6.513216$$

Multiplying by the first deposit:

$$s_{10} = 800 \\times 6.513216 = 5{,}210.57$$

The first ten deposits total about \\$5,210.57, matching the claim, so the statement is true.`,
      `**D) The first 10 deposits together represent about 65% of the infinite total sum.**  (true)

The claim compares a ten-year partial total against the infinite total, so both figures have to be produced. The first ten deposits sum by the finite formula with $a = 800$ dollars, $k = 0.90$, and $n = 10$:

$$s_{10} = 800 \\times \\frac{1-(0.90)^{10}}{0.10}$$

$$(0.90)^{10} = 0.348678$$

$$s_{10} = 800 \\times \\frac{0.651322}{0.10} = 800 \\times 6.513216 = 5{,}210.57$$

The infinite total uses the limiting formula, valid because $|0.90| < 1$:

$$s_{\\infty} = \\frac{800}{1-0.90} = 8{,}000$$

Dividing the partial total by the infinite total gives the share:

$$\\frac{5{,}210.57}{8{,}000} = 0.65132$$

That is $65.13\\%$, which rounds to about $65\\%$. The claim describes the first ten deposits as roughly $65\\%$ of the infinite total, so the statement is true.`,
      `**E) If the quotient were instead k = 1.10, the series would diverge.**  (true)

Whether an infinite geometric series converges or diverges depends only on the size of its quotient:

$$a + ak + ak^{2} + \\cdots \\text{ converges when } |k| < 1$$

Under the hypothetical quotient $k = 1.10$, that size is

$$|k| = 1.10$$

and the comparison fails:

$$1.10 > 1$$

The deposits would then grow instead of shrinking. Starting from $a = 800$ dollars,

$$a_2 = 800 \\times 1.10 = 880$$

$$a_3 = 800 \\times (1.10)^{2} = 968$$

$$a_4 = 800 \\times (1.10)^{3} = 1{,}064.80$$

Since every deposit exceeds the one before it, the terms never approach zero and the running total keeps climbing with no ceiling to level off against. No finite limiting value exists, so the closed formula $a/(1-k)$ cannot be applied and the series has no sum. That behaviour is exactly divergence, which is what the claim asserts, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 63,
    solution_overview: `An investor commits to an unusual sinking-fund plan: this year's deposit is \\$800, and each following year's deposit is 90% of the previous year's deposit, continuing indefinitely. This is an infinite geometric series with a = \\$800 and k = 0.90.

**Part 1: Setup.**

a (year-1 deposit) = \\$800

k (annual decay quotient) = 0.90

**Part 2: Formula.**

Infinite sum (|k| < 1): a/(1 - k)

Finite sum of first n terms: $s_n = a(1 - k^{n})/(1 - k)$

**Part 3: Solve.**

**1.** $|k| = 0.90 < 1$, so the infinite series converges.

**2.** Infinite sum: $800/(1 - 0.90) = 800/0.10 = \\$8,000.00$.

**3.** $0.90^{10} = 0.3486784401$.

**4.** $s_{10} = 800 \\times (1 - 0.3486784401)/0.10 = 800 \\times 6.513215599 = \\$5,210.57$.

**5.** Ratio to infinite sum: $5,210.57/8,000.00 = 0.6513 \\approx 65.13\\% \\approx 65\\%$.

**6.** If $k = 1.10$, $|k| = 1.10 \\ge 1$, so the infinite series diverges by definition.`,
  },
  {
    id: `math-11-64`,
    case_id: `MATH 11.64`,
    title: `Lithium Reserve Depletion for a Mining Company`,
    subsection: `11.4`,
    context: `A mining company estimates its lithium reserves at 18,000,000 tons. Current annual extraction is a constant 300,000 tons per year. Separately, analysts also model a scenario in which extraction instead starts at 300,000 tons and grows by 5% per year for 10 years, a finite geometric series with a = 300,000 and k = 1.05.`,
    statements: [
      `At a constant extraction rate of 300,000 tons/year, the reserves will last exactly 60 years.`,
      `If extraction were instead held constant at 500,000 tons/year, the reserves would last 36 years.`,
      `Constant-rate extraction over n years is the special k = 1 case of the geometric series, where the total simply equals the number of years multiplied by the yearly amount.`,
      `If extraction instead grows by 5% per year for 10 years, total extraction over those 10 years is approximately 3,900,000 tons.`,
      `The 10-year total under 5% annual growth exceeds the 10-year total under constant 300,000-ton extraction by more than 1,000,000 tons.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) At a constant extraction rate of 300,000 tons/year, the reserves will last exactly 60 years.**  (true)

Removing the same tonnage every year means the reserve is drawn down in equal steps, so the number of years until it is gone is the reserve divided by the annual extraction rate:

$$t = \\frac{\\text{reserves}}{\\text{annual extraction}}$$

The reserve holds $18{,}000{,}000$ tons and the constant rate is $300{,}000$ tons per year:

$$t = \\frac{18{,}000{,}000}{300{,}000}$$

$$t = 60$$

Multiplying back confirms the arithmetic:

$$300{,}000 \\times 60 = 18{,}000{,}000$$

The reserve lasts exactly 60 years at this rate, which is the figure in the claim, so the statement is true.`,
      `**B) If extraction were instead held constant at 500,000 tons/year, the reserves would last 36 years.**  (true)

With extraction held constant, the reserve is depleted in equal annual steps, so the life of the reserve is the total tonnage divided by the yearly rate:

$$t = \\frac{\\text{reserves}}{\\text{annual extraction}}$$

The reserve is still $18{,}000{,}000$ tons, but the faster rate is $500{,}000$ tons per year:

$$t = \\frac{18{,}000{,}000}{500{,}000}$$

$$t = 36$$

Multiplying back as a check:

$$500{,}000 \\times 36 = 18{,}000{,}000$$

Raising the annual rate shortens the life of the same fixed reserve, and at $500{,}000$ tons per year the reserve lasts exactly 36 years, which is what the claim says, so the statement is true.`,
      `**C) Constant-rate extraction over n years is the special k = 1 case of the geometric series, where the total simply equals the number of years multiplied by the yearly amount.**  (true)

A geometric series has terms $a$, $ak$, $ak^{2}$, and so on. Setting the quotient to $k = 1$ makes every one of those factors equal to 1, so the terms collapse to

$$a, \\; a, \\; a, \\; \\ldots$$

which is precisely constant-rate extraction: the same tonnage removed every single year. Adding $n$ identical copies of $a$ needs no ratio machinery at all, only multiplication:

$$s_n = a + a + \\cdots + a = a\\,n$$

For this mine that means

$$s_n = 300{,}000 \\times n$$

so ten years of constant extraction would total

$$300{,}000 \\times 10 = 3{,}000{,}000$$

tons. The general finite-series formula cannot be used in this case, because

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

carries $k - 1$ in its denominator, and at $k = 1$ that denominator is

$$1 - 1 = 0$$

leaving the expression undefined. Both halves of the claim therefore hold: constant extraction is the $k = 1$ case of the geometric series, and its total is the number of years multiplied by the yearly amount. The statement is true.`,
      `**D) If extraction instead grows by 5% per year for 10 years, total extraction over those 10 years is approximately 3,900,000 tons.**  (false)

Extraction that starts at $300{,}000$ tons and rises $5\\%$ each year is a finite geometric series with $a = 300{,}000$ tons, quotient $k = 1.05$, and $n = 10$ years, so its total is

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Substituting the three quantities:

$$s_{10} = 300{,}000 \\times \\frac{(1.05)^{10}-1}{1.05-1}$$

The tenth power of the growth factor is

$$(1.05)^{10} = 1.628895$$

so the bracket becomes

$$\\frac{1.628895-1}{0.05} = \\frac{0.628895}{0.05} = 12.577893$$

and the ten-year total is

$$s_{10} = 300{,}000 \\times 12.577893$$

$$s_{10} = 3{,}773{,}368$$

tons, rounded to the nearest ton. The claim names approximately $3{,}900{,}000$ tons, which overstates the total by

$$3{,}900{,}000 - 3{,}773{,}368 = 126{,}632$$

tons, so the statement is false.`,
      `**E) The 10-year total under 5% annual growth exceeds the 10-year total under constant 300,000-ton extraction by more than 1,000,000 tons.**  (false)

Both ten-year totals have to be computed before the excess can be judged. The growth scenario is a finite geometric series with $a = 300{,}000$ tons, $k = 1.05$, and $n = 10$:

$$s_{10} = 300{,}000 \\times \\frac{(1.05)^{10}-1}{0.05}$$

$$(1.05)^{10} = 1.628895$$

$$s_{10} = 300{,}000 \\times \\frac{0.628895}{0.05} = 300{,}000 \\times 12.577893$$

$$s_{10} = 3{,}773{,}368 \\text{ tons}$$

The constant scenario removes the same $300{,}000$ tons every year, which is the $k = 1$ case with total $a\\,n$:

$$300{,}000 \\times 10 = 3{,}000{,}000 \\text{ tons}$$

The extra tonnage attributable to the $5\\%$ growth is the difference between them:

$$3{,}773{,}368 - 3{,}000{,}000 = 773{,}368 \\text{ tons}$$

The claim requires that excess to exceed $1{,}000{,}000$ tons, but

$$773{,}368 < 1{,}000{,}000$$

so the growth scenario falls short of the claimed margin by more than $226{,}000$ tons, and the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 64,
    solution_overview: `A mining company estimates its lithium reserves at $18,000,000$ tons. Current annual extraction is a constant $300,000$ tons per year. Separately, analysts model extraction starting at $300,000$ tons and growing by $5\\%$ per year for $10$ years — a finite geometric series with $a = 300,000$ and $k = 1.05$.

**Part 1: Setup.**

Reserves $= 18,000,000$ tons; constant extraction $a = 300,000$ tons/year (or $500,000$); growth scenario $a = 300,000$, $k = 1.05$, $n = 10$.

**Part 2: Formula.**

Years to exhaustion: $t =$ reserves$/$annual extraction. Constant terms ($k = 1$): $s_n = a\\times n$. Geometric ($k \\neq 1$): $s_n = a(k^{n}-1)/(k-1)$.

**Part 3: Solve.**

**1.** $t = 18,000,000/300,000 = 60$ years; at $500,000$ tons/year, $t = 36$ years.

**2.** Constant extraction of $a$ each year for $n$ years sums to $a\\times n$ — exactly the $k = 1$ case.

**3.** $1.05^{10} = 1.628894627$, so $s_{10} = 300,000\\times(1.628894627-1)/0.05 = 3,773,367.76 \\approx 3,773,368$ tons.

**4.** Constant-rate $10$-year total: $300,000\\times10 = 3,000,000$ tons; difference $773,368 < 1,000,000$.`,
  },
  {
    id: `math-11-65`,
    case_id: `MATH 11.65`,
    title: `Coal Reserves and Declining Output`,
    subsection: `11.4`,
    context: `A coal mining region has 9,000 million tons, or 9 billion tons, of estimated reserves. This year's output is 180 million tons, and analysts project output will fall by 3% every year forever, an infinite geometric series with a = 180 million tons and k = 0.97. A second scenario considers a steeper 5% annual decline with k = 0.95 starting from the same output.`,
    statements: [
      `Output in the second year is 174.6 million tons.`,
      `The infinite total extracted over all future years, under the 3% decline, is 6,000 million tons.`,
      `The reserves will never be fully exhausted, leaving 3 billion tons as permanently “stranded assets.”`,
      `If output instead declined 5% per year from the same 180 million-ton starting point, the total extracted would leave less coal stranded than the 3%-decline case.`,
      `Under the 3% decline scenario, cumulative extraction after just the first 20 years alone would already exceed the full infinite-horizon total of 6,000 million tons.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Output in the second year is 174.6 million tons.**  (true)

Output in any given year is the first year's output multiplied by the decline factor once for each year that has passed:

$$a_t = a\\,k^{t-1}$$

This year's output is $a = 180$ million tons, and a $3\\%$ annual fall means each year keeps $97\\%$ of the previous year's output, so $k = 0.97$. The second year is one step along, giving the exponent $t - 1 = 1$:

$$a_2 = 180 \\times (0.97)^{1}$$

$$a_2 = 174.6$$

Second-year output works out to $174.6$ million tons, exactly the figure in the claim, so the statement is true.`,
      `**B) The infinite total extracted over all future years, under the 3% decline, is 6,000 million tons.**  (true)

The yearly outputs form an infinite geometric series, and such a series has a finite total whenever the size of its quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

A $3\\%$ annual decline leaves $97\\%$ of the previous output each year, so $k = 0.97$ and

$$|0.97| < 1$$

which means the total converges. Substituting the current output $a = 180$ million tons:

$$s_{\\infty} = \\frac{180}{1-0.97}$$

Simplifying the denominator:

$$s_{\\infty} = \\frac{180}{0.03}$$

$$s_{\\infty} = 6{,}000$$

Everything ever extracted under this declining path adds up to $6{,}000$ million tons, matching the claim, so the statement is true.`,
      `**C) The reserves will never be fully exhausted, leaving 3 billion tons as permanently “stranded assets.”**  (true)

The claim compares everything that can ever be extracted against what is physically in the ground. The extraction path is an infinite geometric series with $a = 180$ million tons and $k = 0.97$, and since $|0.97| < 1$ it converges to

$$s_{\\infty} = \\frac{a}{1-k} = \\frac{180}{1-0.97}$$

$$s_{\\infty} = \\frac{180}{0.03} = 6{,}000$$

million tons. That figure is a ceiling the cumulative extraction approaches but never reaches, since each year adds a smaller positive amount than the year before. Setting it beside the reserve base:

$$6{,}000 < 9{,}000$$

Even after infinitely many years of mining, the cumulative tonnage stays under the $9{,}000$ million tons available, so the reserve can never be exhausted. The tonnage left permanently in the ground is the difference:

$$9{,}000 - 6{,}000 = 3{,}000$$

million tons, which is 3 billion tons. Both parts of the claim hold, so the statement is true.`,
      `**D) If output instead declined 5% per year from the same 180 million-ton starting point, the total extracted would leave less coal stranded than the 3%-decline case.**  (false)

The comparison needs the stranded tonnage under each decline path, and stranded tonnage is whatever the reserve base leaves over after the infinite extraction total. For the milder path, $a = 180$ million tons and $k = 0.97$:

$$s_{\\infty} = \\frac{180}{1-0.97} = \\frac{180}{0.03} = 6{,}000$$

$$9{,}000 - 6{,}000 = 3{,}000 \\text{ million tons stranded}$$

A steeper $5\\%$ annual fall keeps only $95\\%$ of the previous year's output, so the quotient becomes $k = 0.95$ while the starting output stays at $180$ million tons:

$$s_{\\infty} = \\frac{180}{1-0.95}$$

$$s_{\\infty} = \\frac{180}{0.05} = 3{,}600$$

million tons ever extracted, which leaves

$$9{,}000 - 3{,}600 = 5{,}400 \\text{ million tons stranded}$$

Comparing the two stranded figures:

$$5{,}400 > 3{,}000$$

A steeper decline shrinks output faster, so less coal is ever pulled out and more of it stays in the ground. The $5\\%$ path strands $2{,}400$ million tons more than the $3\\%$ path, not less, so the statement is false.`,
      `**E) Under the 3% decline scenario, cumulative extraction after just the first 20 years alone would already exceed the full infinite-horizon total of 6,000 million tons.**  (false)

The claim sets a twenty-year partial total against the infinite-horizon total, so both are needed. Summing the first twenty years uses the finite geometric formula with $a = 180$ million tons, $k = 0.97$, and $n = 20$:

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

$$s_{20} = 180 \\times \\frac{1-(0.97)^{20}}{1-0.97}$$

The twentieth power of the decline factor is

$$(0.97)^{20} = 0.543794$$

so the numerator of the bracket is

$$1 - 0.543794 = 0.456206$$

and dividing by the denominator gives

$$\\frac{0.456206}{0.03} = 15.206855$$

Multiplying by the current output:

$$s_{20} = 180 \\times 15.206855 = 2{,}737.23$$

million tons. The infinite-horizon total is

$$s_{\\infty} = \\frac{180}{0.03} = 6{,}000$$

million tons. Comparing the two:

$$2{,}737.23 < 6{,}000$$

Twenty years of mining delivers only about $46\\%$ of everything that can ever be extracted, so cumulative extraction does not exceed the infinite total, and the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 65,
    solution_overview: `A coal mining region has $9,000$ million tons of estimated reserves. This year's output is $180$ million tons, and analysts project output will fall by $3\\%$ every year forever — an infinite geometric series with $a = 180$ million tons and $k = 0.97$. A second scenario uses a steeper $5\\%$ decline ($k = 0.95$) from the same starting output.

**Part 1: Setup.**

Reserves $= 9,000$ million tons; $a = 180$ million tons; $k = 0.97$ ($3\\%$ decline) or $k = 0.95$ ($5\\%$ decline).

**Part 2: Formula.**

Infinite sum ($|k| < 1$): $a/(1-k)$. Finite sum of first $n$ terms: $s_n = a(1-k^{n})/(1-k)$.

**Part 3: Solve.**

**1.** Year-$2$ output: $180\\times0.97 = 174.6$ million tons.

**2.** Infinite sum at $3\\%$: $180/(1-0.97) = 180/0.03 = 6,000$ million tons; stranded $= 9,000-6,000 = 3,000$ million tons.

**3.** At $5\\%$: sum $= 180/0.05 = 3,600$; stranded $= 5,400$ million tons — more than under the $3\\%$ case.

**4.** $0.97^{20} \\approx 0.5438$, so $s_{20} = 180\\times(1-0.5438)/0.03 \\approx 2,737.3$ million tons, far below the infinite total of $6,000$.`,
  },
  {
    id: `math-11-66`,
    case_id: `MATH 11.66`,
    title: `Alternating Correction Payments in a Trading Model`,
    subsection: `11.4`,
    context: `A quantitative trading model applies a diminishing corrective adjustment after each rebalancing: the first adjustment is \\$4,000, and each subsequent adjustment reverses sign and is half the size of the previous one, continuing indefinitely. This is an infinite geometric series with a = \\$4,000 and a negative quotient k = -0.5.`,
    statements: [
      `The alternating adjustment series converges to a finite sum.`,
      `The infinite sum of all adjustments is approximately \\$2,666.67.`,
      `The sum of the first 4 adjustments is \\$3,000.00.`,
      `The series necessarily diverges regardless of its magnitude.`,
      `If the quotient were instead exactly k = -1, the partial sums would alternate forever between \\$4,000 and \\$0.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The alternating adjustment series converges to a finite sum.**  (true)

An infinite geometric series converges when the absolute value of its quotient is below 1, and the sign of that quotient plays no part in the test:

$$a + ak + ak^{2} + \\cdots \\text{ converges when } |k| < 1$$

Each adjustment here reverses sign and is half the size of the previous one, so the quotient is

$$k = -0.5$$

and the quantity the test actually looks at is its absolute value:

$$|k| = |-0.5| = 0.5$$

Comparing that against the cutoff:

$$0.5 < 1$$

The adjustments themselves run $4{,}000$, then $-2{,}000$, then $1{,}000$, then $-500$, so they swing above and below zero while steadily shrinking in size. Those shrinking swings pull the running total toward a single fixed value rather than letting it wander without bound. The convergence condition is met, so the statement is true.`,
      `**B) The infinite sum of all adjustments is approximately \\$2,666.67.**  (true)

The infinite-sum formula for a geometric series applies whenever the size of the quotient is below 1, whatever its sign:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

Here the first adjustment is $a = 4{,}000$ dollars and the quotient is $k = -0.5$, with $|-0.5| = 0.5 < 1$, so the formula is available. Substituting both values:

$$s_{\\infty} = \\frac{4{,}000}{1-(-0.5)}$$

Subtracting a negative number adds it, so the denominator becomes

$$1 - (-0.5) = 1.5$$

$$s_{\\infty} = \\frac{4{,}000}{1.5}$$

$$s_{\\infty} = 2{,}666.67$$

The adjustments net out to about \\$2,666.67 over an unlimited horizon, matching the claim, so the statement is true.`,
      `**C) The sum of the first 4 adjustments is \\$3,000.00.**  (false)

The first four adjustments are the first four terms of the series, each obtained by multiplying the previous one by $k = -0.5$:

$$a_1 = 4{,}000$$

$$a_2 = 4{,}000 \\times (-0.5) = -2{,}000$$

$$a_3 = 4{,}000 \\times (-0.5)^{2} = 1{,}000$$

$$a_4 = 4{,}000 \\times (-0.5)^{3} = -500$$

Adding the four signed amounts in order:

$$s_4 = 4{,}000 - 2{,}000 + 1{,}000 - 500$$

$$s_4 = 2{,}000 + 1{,}000 - 500$$

$$s_4 = 2{,}500$$

The four adjustments total \\$2,500.00. The claim names \\$3,000.00, which is \\$500.00 too high because it does not account for the sign reversals, so the statement is false.`,
      `**D) The series necessarily diverges regardless of its magnitude.**  (false)

Divergence is not automatic for a series with a negative quotient. The test is the same one used for any geometric series and looks only at the size of the quotient:

$$a + ak + ak^{2} + \\cdots \\text{ converges when } |k| < 1$$

Here the quotient is $k = -0.5$, so the quantity the test measures is

$$|k| = |-0.5| = 0.5$$

and the comparison with the cutoff succeeds:

$$0.5 < 1$$

A negative quotient only means the terms take turns adding to and subtracting from the running total. The partial sums show the swings settling rather than spreading:

$$s_1 = 4{,}000$$

$$s_2 = 4{,}000 - 2{,}000 = 2{,}000$$

$$s_3 = 2{,}000 + 1{,}000 = 3{,}000$$

$$s_4 = 3{,}000 - 500 = 2{,}500$$

The swings shrink toward the limiting value

$$s_{\\infty} = \\frac{4{,}000}{1-(-0.5)} = \\frac{4{,}000}{1.5} = 2{,}666.67$$

so this series converges rather than diverging. Divergence is not forced on a series just because its quotient is negative, so the statement is false.`,
      `**E) If the quotient were instead exactly k = -1, the partial sums would alternate forever between \\$4,000 and \\$0.**  (true)

With a quotient of $k = -1$, each new adjustment has the same size as the first one but the opposite sign to the one before it. Writing the terms out from $a = 4{,}000$ dollars:

$$a_1 = 4{,}000$$

$$a_2 = 4{,}000 \\times (-1) = -4{,}000$$

$$a_3 = 4{,}000 \\times (-1)^{2} = 4{,}000$$

$$a_4 = 4{,}000 \\times (-1)^{3} = -4{,}000$$

The running totals then cancel and rebuild in turn:

$$s_1 = 4{,}000$$

$$s_2 = 4{,}000 - 4{,}000 = 0$$

$$s_3 = 0 + 4{,}000 = 4{,}000$$

$$s_4 = 4{,}000 - 4{,}000 = 0$$

In general the partial sum is $s_n = 4{,}000$ for odd $n$ and $s_n = 0$ for even $n$, so the sequence of partial sums bounces between \\$4,000.00 and \\$0.00 forever and never approaches a single value. That also means the convergence test fails here, since

$$|k| = |-1| = 1$$

is not below 1. The claim describes exactly this endless alternation between \\$4,000 and \\$0, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 66,
    solution_overview: `A quantitative trading model applies a diminishing corrective adjustment after each rebalancing: the first adjustment is \\$4,000, and each subsequent adjustment reverses sign and is half the size of the previous one, continuing indefinitely. This is an infinite geometric series with a = \\$4,000 and a negative quotient k = -0.5.

**Part 1: Setup.**

a (first adjustment) = \\$4,000

k (sign-reversing decay quotient) = -0.5

**Part 2: Formula.**

Infinite sum (|k| < 1): a/(1 - k)

Special case k = -1: $s_n = a$ when n is odd, $s_n = 0$ when n is even

**Part 3: Solve.**

**1.** $|k| = |-0.5| = 0.5 < 1$, so the series converges.

**2.** Infinite sum: $4,000/(1 - (-0.5)) = 4,000/1.5 = \\$2,666.67$.

**3.** First $4$ terms: $4,000$, then $4,000\\times(-0.5) = -2,000$, then $4,000\\times0.25 = 1,000$, then $4,000\\times(-0.125) = -500$.

**4.** Sum of first $4$ terms: $4,000 - 2,000 + 1,000 - 500 = \\$2,500.00$ (not $\\$3,000.00$).

**5.** For $k = -1$: $s_n = a$ (odd $n$) or $s_n = 0$ (even $n$) — the partial sums oscillate forever and never settle on a limit.`,
  },
  {
    id: `math-11-67`,
    case_id: `MATH 11.67`,
    title: `Equal vs. Growing Pension Contributions`,
    subsection: `11.4`,
    context: `A city pension fund receives equal annual contributions of \\$12 million for 15 straight years in a degenerate geometric series with k = 1. Fund managers also model an alternative in which contributions instead grow by 4% every year from the same \\$12 million starting point, a finite geometric series with a = \\$12 million, k = 1.04, and n = 15.`,
    statements: [
      `This is the special k = 1 case of the geometric series, where the total simply equals the number of payments multiplied by the payment amount.`,
      `The total contributions over the 15 years of equal \\$12 million payments equal \\$180.00 million.`,
      `Under the 4%-growth alternative, the 15-year total is approximately \\$240.11 million.`,
      `The 4%-growth 15-year total exceeds the no-growth total by more than \\$65.00 million.`,
      `Applying the general formula directly to the no-growth case would require dividing by zero.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) This is the special k = 1 case of the geometric series, where the total simply equals the number of payments multiplied by the payment amount.**  (true)

A geometric series has terms $a$, $ak$, $ak^{2}$, and so on, so the quotient is whatever number carries one term to the next. Contributions of \\$12 million every year for 15 years never change size, which means each term equals the one before it and

$$k = \\frac{12}{12} = 1$$

Setting $k = 1$ turns every factor into 1, so the terms become

$$a, \\; a, \\; a, \\; \\ldots$$

Adding $n$ identical copies of $a$ is plain multiplication, not a ratio calculation:

$$s_n = a + a + \\cdots + a = a\\,n$$

For this fund that gives

$$s_n = 12 \\times n$$

million dollars over $n$ years. The general finite-series formula is unavailable here, since

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

has $k - 1$ in the denominator and

$$1 - 1 = 0$$

makes the expression undefined at $k = 1$. The claim describes exactly this degenerate case and the multiplication rule that replaces the general formula, so the statement is true.`,
      `**B) The total contributions over the 15 years of equal \\$12 million payments equal \\$180.00 million.**  (true)

Equal annual contributions are the $k = 1$ case of a geometric series, where every term matches the first and the total is simply the payment multiplied by the number of payments:

$$s_n = a\\,n$$

Here the annual contribution is $a = 12$ million dollars and the fund receives it for $n = 15$ straight years:

$$s_{15} = 12 \\times 15$$

$$s_{15} = 180$$

No compounding or ratio work is required, because nothing changes from one year to the next. A check by grouping gives the same figure:

$$12 \\times 15 = 12 \\times 10 + 12 \\times 5 = 120 + 60 = 180$$

The fifteen years of equal contributions total \\$180.00 million, which is exactly the amount claimed, so the statement is true.`,
      `**C) Under the 4%-growth alternative, the 15-year total is approximately \\$240.11 million.**  (false)

Contributions that grow $4\\%$ a year from a \\$12 million base form a finite geometric series with $a = 12$ million dollars, $k = 1.04$, and $n = 15$, so the total is

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Substituting the three quantities:

$$s_{15} = 12 \\times \\frac{(1.04)^{15}-1}{1.04-1}$$

The fifteenth power of the growth factor is

$$(1.04)^{15} = 1.800944$$

so the bracket becomes

$$\\frac{1.800944-1}{0.04} = \\frac{0.800944}{0.04} = 20.0236$$

and the total is

$$s_{15} = 12 \\times 20.0236$$

$$s_{15} = 240.28$$

The fifteen-year total under $4\\%$ growth is about \\$240.28 million. The claim names \\$240.11 million, which is \\$0.17 million short of the correct figure, so the statement is false.`,
      `**D) The 4%-growth 15-year total exceeds the no-growth total by more than \\$65.00 million.**  (false)

The comparison needs both fifteen-year totals. Equal payments are the $k = 1$ case, whose total is the payment times the number of years:

$$s_{15} = 12 \\times 15 = 180$$

million dollars. The growth alternative is a finite geometric series with $a = 12$ million dollars, $k = 1.04$, and $n = 15$:

$$s_{15} = 12 \\times \\frac{(1.04)^{15}-1}{0.04}$$

$$(1.04)^{15} = 1.800944$$

$$s_{15} = 12 \\times \\frac{0.800944}{0.04} = 12 \\times 20.0236 = 240.28$$

million dollars. Subtracting the flat total from the growth total gives the extra amount the growth path contributes:

$$240.28 - 180.00 = 60.28$$

million dollars. The claim requires that excess to be more than \\$65.00 million, but

$$60.28 < 65.00$$

so the growth path adds about \\$4.72 million less than claimed, and the statement is false.`,
      `**E) Applying the general formula directly to the no-growth case would require dividing by zero.**  (true)

The general finite geometric sum is written as

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

and its denominator is $k - 1$. The no-growth case has identical contributions year after year, so the ratio carrying one term to the next is

$$k = \\frac{12}{12} = 1$$

Substituting that value into the denominator gives

$$k - 1 = 1 - 1 = 0$$

and the numerator collapses at the same time:

$$k^{n} - 1 = 1^{15} - 1 = 0$$

so the formula asks for

$$s_{15} = 12 \\times \\frac{0}{0}$$

which is undefined. Division by zero has no value, so the general expression simply cannot be evaluated at $k = 1$ and produces no answer for the flat schedule. That is why equal payments are handled by the separate rule

$$s_n = a\\,n = 12 \\times 15 = 180$$

million dollars instead. The claim says applying the general formula directly to the no-growth case would require dividing by zero, which is exactly what happens, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 67,
    solution_overview: `A city pension fund receives equal annual contributions of \\$12 million for 15 straight years in a degenerate geometric series with k = 1. Fund managers also model an alternative in which contributions instead grow by 4% every year from the same \\$12 million starting point, a finite geometric series with a = \\$12 million, k = 1.04, and n = 15.

**Part 1: Setup.**

Equal-payment case: a = \\$12 million/year, n = 15 years, k = 1

Growth case: a = \\$12 million, k = 1.04, n = 15 years

**Part 2: Formula.**

k = 1 case: $s_n = a \\times n$

k ≠ 1 case: $s_n = a(k^{n}-1)/(k-1)$

**Part 3: Solve.**

**1.** Equal payments: $s_{15} = 12 \\times 15 = \\$180.00$ million.

**2.** $1.04^{15} \\approx 1.800944$.

**3.** $s_{15}$ (growth case): $12 \\times (1.800944 - 1)/0.04 = 12 \\times 20.0236 = \\$240.28$ million.

**4.** Difference: $240.28 - 180.00 = \\$60.28$ million, which is not more than $\\$65.00$ million.

**5.** The general formula's denominator is $(k - 1)$; at $k = 1$ this denominator is $0$, so the formula is undefined and the $k = 1$ case must instead use $s_n = a \\times n$.`,
  },
  {
    id: `math-11-68`,
    case_id: `MATH 11.68`,
    title: `Structured Settlement: Finite Payments vs. Perpetual Value`,
    subsection: `11.4`,
    context: `A structured settlement is set up to pay \\$15,000 in its first year, with each subsequent payment 88% of the prior one, where a = \\$15,000 and k = 0.88. One clause pays out for a finite 8 years; a separate hypothetical clause considers what the payments would total if continued forever.`,
    statements: [
      `The second payment in the sequence is \\$13,200.00.`,
      `The total of the 8 finite payments is approximately \\$80,045.68.`,
      `If the payments continued forever under the same 88% quotient, the infinite total would be \\$130,000.00.`,
      `The finite 8-payment total represents more than 75% of the infinite total.`,
      `If the decline rate were less steep, say k = 0.95 instead of 0.88, the infinite total would be smaller than the infinite total at k = 0.88.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The second payment in the sequence is \\$13,200.00.**  (true)

Each payment in this settlement is a fixed fraction of the previous one, so the payment in any year is the first payment scaled by the quotient once for each year that has passed:

$$a_t = a\\,k^{t-1}$$

The first payment is $a = 15{,}000$ dollars and each later payment is $88\\%$ of the prior one, so $k = 0.88$. The second payment is one step along, making the exponent $t - 1 = 1$:

$$a_2 = 15{,}000 \\times (0.88)^{1}$$

$$a_2 = 13{,}200$$

The second payment is \\$13,200.00, exactly the amount claimed, so the statement is true.`,
      `**B) The total of the 8 finite payments is approximately \\$80,045.68.**  (true)

The eight payments under the finite clause form a finite geometric series, which sums to

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

Substituting the first payment $a = 15{,}000$ dollars, the quotient $k = 0.88$, and $n = 8$ payments:

$$s_8 = 15{,}000 \\times \\frac{1-(0.88)^{8}}{1-0.88}$$

The eighth power of the quotient is

$$(0.88)^{8} = 0.359635$$

so the numerator of the bracket is

$$1 - 0.359635 = 0.640365$$

and dividing by the denominator gives

$$\\frac{0.640365}{0.12} = 5.336379$$

Multiplying by the first payment:

$$s_8 = 15{,}000 \\times 5.336379 = 80{,}045.68$$

The eight payments total about \\$80,045.68, matching the claim, so the statement is true.`,
      `**C) If the payments continued forever under the same 88% quotient, the infinite total would be \\$130,000.00.**  (false)

Letting the payments run forever turns the finite series into an infinite one, which has a finite total whenever the size of the quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

Each payment keeps $88\\%$ of the previous one, so $k = 0.88$ and

$$|0.88| < 1$$

which means the total converges. Substituting the first payment $a = 15{,}000$ dollars:

$$s_{\\infty} = \\frac{15{,}000}{1-0.88}$$

$$s_{\\infty} = \\frac{15{,}000}{0.12}$$

$$s_{\\infty} = 125{,}000$$

The endless stream totals \\$125,000.00. The claim names \\$130,000.00, which is \\$5,000.00 above the true figure, so the statement is false.`,
      `**D) The finite 8-payment total represents more than 75% of the infinite total.**  (false)

The claim measures the eight-payment total against the never-ending total, so both are required. The finite clause sums as

$$s_8 = 15{,}000 \\times \\frac{1-(0.88)^{8}}{0.12}$$

$$(0.88)^{8} = 0.359635$$

$$s_8 = 15{,}000 \\times \\frac{0.640365}{0.12} = 15{,}000 \\times 5.336379 = 80{,}045.68$$

The perpetual clause converges because $|0.88| < 1$:

$$s_{\\infty} = \\frac{15{,}000}{1-0.88} = \\frac{15{,}000}{0.12} = 125{,}000$$

Dividing one by the other gives the share the first eight payments represent:

$$\\frac{80{,}045.68}{125{,}000} = 0.64037$$

That is $64.04\\%$. Comparing with the threshold in the claim:

$$64.04\\% < 75\\%$$

The eight payments cover just under two thirds of the perpetual total, not more than three quarters, so the statement is false.`,
      `**E) If the decline rate were less steep, say k = 0.95 instead of 0.88, the infinite total would be smaller than the infinite total at k = 0.88.**  (false)

The infinite total of a declining payment stream is

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

and the quotient enters only through the denominator $1 - k$. Raising $k$ from $0.88$ to $0.95$ makes that denominator smaller, and dividing the same first payment by a smaller number produces a larger result. Working both cases out confirms the direction. At the original quotient, with $a = 15{,}000$ dollars and $k = 0.88$:

$$s_{\\infty} = \\frac{15{,}000}{1-0.88} = \\frac{15{,}000}{0.12} = 125{,}000$$

At the milder quotient $k = 0.95$, the same first payment gives

$$s_{\\infty} = \\frac{15{,}000}{1-0.95}$$

$$s_{\\infty} = \\frac{15{,}000}{0.05}$$

$$s_{\\infty} = 300{,}000$$

Comparing the two totals:

$$300{,}000 > 125{,}000$$

A less steep decline keeps every payment closer to the one before it, so the stream pays out far more overall, \\$175,000.00 more in this case. The claim says the milder decline would give a smaller total, which reverses the true direction, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `A structured settlement is set up to pay \\$15,000 in its first year, with each subsequent payment 88% of the prior one, where a = \\$15,000 and k = 0.88. One clause pays out for a finite 8 years; a separate hypothetical clause considers what the payments would total if continued forever.

**Part 1: Setup.**

a (year-1 payment) = \\$15,000

k (annual decay quotient) = 0.88

n = 8 years (finite clause)

**Part 2: Formula.**

Finite sum: $s_n = a(1 - k^{n})/(1 - k)$

Infinite sum (|k| < 1): a/(1 - k)

**Part 3: Solve.**

**1.** Payment $2$: $a \\times k = 15,000\\times0.88 = \\$13,200.00$.

**2.** $0.88^{8} \\approx 0.359635$.

**3.** $s_8 = 15,000 \\times (1 - 0.359635)/0.12 = 15,000 \\times 5.336379 = \\$80,045.68$.

**4.** Infinite sum: $15,000/(1 - 0.88) = 15,000/0.12 = \\$125,000.00$ (not $\\$130,000.00$).

**5.** Ratio: $80,045.68/125,000.00 = 0.6404 \\approx 64.04\\%$, which is not more than $75\\%$.

**6.** With $k = 0.95$: infinite sum $= 15,000/(1 - 0.95) = 15,000/0.05 = \\$300,000.00$, which is larger, not smaller, than the $\\$125,000.00$ obtained at $k = 0.88$.`,
  },
  {
    id: `math-11-69`,
    case_id: `MATH 11.69`,
    title: `Growing Franchise Royalties Over 12 Years`,
    subsection: `11.4`,
    context: `A franchisor receives a royalty of \\$9,000 in the first year from a new location, with royalties projected to grow 8% per year for 12 years - a finite geometric series with a = \\$9,000, k = 1.08, and n = 12. Analysts also compare this to a hypothetical flat 0%-growth royalty stream.`,
    statements: [
      `The finite-sum formula still gives a valid, well-defined 12-year total.`,
      `The total royalties collected over the 12 years are approximately \\$175,000.00.`,
      `The infinite-sum formula can still be legitimately applied to this series, yielding a meaningful total value.`,
      `The royalty payment in year 12 alone is approximately \\$20,715.85.`,
      `If royalties instead grew at 0% for 12 years, the 12-year total would be \\$62,794.15 less than the actual 8%-growth total.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The finite-sum formula still gives a valid, well-defined 12-year total.**  (true)

The finite geometric sum is

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

and the only value of $k$ that breaks it is $k = 1$, because that makes the denominator

$$k - 1 = 0$$

Every other quotient, whether smaller or larger than 1, leaves a nonzero denominator and a perfectly well defined answer for any fixed number of terms. Royalties growing $8\\%$ a year have

$$k = 1.08 \\neq 1$$

so the formula applies to the twelve-year stream with $a = 9{,}000$ dollars and $n = 12$:

$$s_{12} = 9{,}000 \\times \\frac{(1.08)^{12}-1}{0.08}$$

$$(1.08)^{12} = 2.518170$$

$$s_{12} = 9{,}000 \\times \\frac{1.518170}{0.08} = 9{,}000 \\times 18.977125$$

$$s_{12} = 170{,}794.14$$

A definite dollar figure comes out, so nothing about the calculation fails. The separate requirement that $|k| < 1$ belongs to infinite sums, where the terms must fade to zero for a limit to exist, and it places no restriction on adding a fixed count of twelve terms. The claim says the finite-sum formula still gives a valid, well defined total, so the statement is true.`,
      `**B) The total royalties collected over the 12 years are approximately \\$175,000.00.**  (false)

Twelve years of royalties growing $8\\%$ a year form a finite geometric series with $a = 9{,}000$ dollars, $k = 1.08$, and $n = 12$:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Substituting the three quantities:

$$s_{12} = 9{,}000 \\times \\frac{(1.08)^{12}-1}{1.08-1}$$

The twelfth power of the growth factor is

$$(1.08)^{12} = 2.518170$$

so the bracket becomes

$$\\frac{2.518170-1}{0.08} = \\frac{1.518170}{0.08} = 18.977125$$

and the total is

$$s_{12} = 9{,}000 \\times 18.977125$$

$$s_{12} = 170{,}794.14$$

Twelve years of royalties come to about \\$170,794.14. The claim names \\$175,000.00, which overstates the total by

$$175{,}000.00 - 170{,}794.14 = 4{,}205.86$$

so the statement is false.`,
      `**C) The infinite-sum formula can still be legitimately applied to this series, yielding a meaningful total value.**  (false)

The infinite-sum formula

$$s_{\\infty} = \\frac{a}{1-k}$$

is derived by letting $k^{n}$ fade to zero as the number of terms grows, which only happens when

$$|k| < 1$$

Royalties here grow rather than shrink, so the quotient is

$$k = 1.08$$

and the test fails:

$$1.08 > 1$$

The terms confirm it. Starting from $a = 9{,}000$ dollars,

$$a_2 = 9{,}000 \\times 1.08 = 9{,}720$$

$$a_3 = 9{,}000 \\times (1.08)^{2} = 10{,}497.60$$

Each royalty exceeds the previous one, so the running total climbs without any ceiling and there is no finite value for it to approach. Substituting anyway produces

$$\\frac{9{,}000}{1-1.08} = \\frac{9{,}000}{-0.08} = -112{,}500$$

a negative figure for a stream of growing positive royalties, which is meaningless as a valuation. The formula cannot be legitimately applied here, so the statement is false.`,
      `**D) The royalty payment in year 12 alone is approximately \\$20,715.85.**  (false)

The royalty in a given year is the first year's royalty multiplied by the growth factor once for every year that has elapsed:

$$a_t = a\\,k^{t-1}$$

Year 1 is the starting figure with no multiplication, so year 12 carries the exponent

$$t - 1 = 12 - 1 = 11$$

Substituting $a = 9{,}000$ dollars and $k = 1.08$:

$$a_{12} = 9{,}000 \\times (1.08)^{11}$$

The eleventh power of the growth factor is

$$(1.08)^{11} = 2.331639$$

so the year-12 royalty is

$$a_{12} = 9{,}000 \\times 2.331639$$

$$a_{12} = 20{,}984.75$$

The claim names \\$20,715.85, which is

$$20{,}984.75 - 20{,}715.85 = 268.90$$

below the correct amount. That figure would come from using an exponent of 12 rather than 11 on a smaller base or from rounding the power too early; either way it does not match the year-12 payment, so the statement is false.`,
      `**E) If royalties instead grew at 0% for 12 years, the 12-year total would be \\$62,794.15 less than the actual 8%-growth total.**  (true)

Both twelve-year totals are needed. With no growth at all, the twelve royalties are identical, which is the $k = 1$ case with total $a\\,n$:

$$9{,}000 \\times 12 = 108{,}000$$

dollars. With $8\\%$ growth the stream is a finite geometric series with $a = 9{,}000$ dollars, $k = 1.08$, and $n = 12$:

$$s_{12} = 9{,}000 \\times \\frac{(1.08)^{12}-1}{0.08}$$

$$(1.08)^{12} = 2.518170$$

$$s_{12} = 9{,}000 \\times \\frac{1.518170}{0.08} = 9{,}000 \\times 18.977125 = 170{,}794.14$$

Subtracting the flat total from the growth total gives the shortfall of the flat schedule:

$$170{,}794.14 - 108{,}000.00 = 62{,}794.14$$

The claim names \\$62,794.15, which agrees with the computed gap to within a one-cent rounding difference, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 69,
    solution_overview: `A franchisor receives a royalty of \\$9,000 in the first year from a new location, with royalties projected to grow 8% per year for 12 years - a finite geometric series with a = \\$9,000, k = 1.08, and n = 12. Analysts also compare this to a hypothetical flat 0%-growth royalty stream.

**Part 1: Setup.**

a (year-1 royalty) = \\$9,000

k (annual growth quotient) = 1.08

n = 12 years

**Part 2: Formula.**

Finite sum (k ≠ 1): $s_n = a(k^{n}-1)/(k-1)$

Term in year t: $a k^{t-1}$

Flat case (k = 1): $s_n = a \\times n$

**Part 3: Solve.**

**1.** $1.08^{12} \\approx 2.518170$.

**2.** $s_{12} = 9,000 \\times (2.518170 - 1)/0.08 = 9,000 \\times 18.977128 = \\$170,794.15$.

**3.** $1.08^{11} = 2.518170/1.08 \\approx 2.331639$.

**4.** Year-$12$ payment: $9,000 \\times 2.331639 = \\$20,984.75$.

**5.** Flat total: $9,000 \\times 12 = \\$108,000.00$.

**6.** Difference: $\\$170,794.15 - \\$108,000.00 = \\$62,794.15$.`,
  },
  {
    id: `math-11-70`,
    case_id: `MATH 11.70`,
    title: `Tech Company Valuation: Finite Growth Plus Terminal Perpetuity`,
    subsection: `11.4`,
    context: `A tech company projects revenue of \\$4 million this year, growing 20% per year for 6 years in a finite geometric series with a = \\$4 million, k = 1.20, and n = 6. Investors then treat year-6 revenue as the first payment of a separate terminal perpetuity that declines 15% per year forever with quotient k = 0.85, used to estimate value beyond year 6.`,
    statements: [
      `The 6-year finite sum of projected revenues is approximately \\$39.72 million.`,
      `Year-6 revenue alone is approximately \\$9.95 million.`,
      `The finite 6-year series has no valid sum via the finite-sum formula.`,
      `Treating year-6 revenue as the first term of a new perpetuity with quotient k = 0.85, the terminal value is approximately \\$66.36 million.`,
      `Combining the 6-year finite total with the terminal perpetuity value gives a combined projected value of less than \\$100 million.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The 6-year finite sum of projected revenues is approximately \\$39.72 million.**  (true)

Six years of revenue growing $20\\%$ a year form a finite geometric series with $a = 4$ million dollars, $k = 1.20$, and $n = 6$:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Substituting the three quantities:

$$s_6 = 4 \\times \\frac{(1.20)^{6}-1}{1.20-1}$$

The sixth power of the growth factor is

$$(1.20)^{6} = 2.985984$$

so the bracket becomes

$$\\frac{2.985984-1}{0.20} = \\frac{1.985984}{0.20} = 9.92992$$

and the total is

$$s_6 = 4 \\times 9.92992$$

$$s_6 = 39.71968$$

The six-year revenue total is about \\$39.72 million, exactly the figure in the claim, so the statement is true.`,
      `**B) Year-6 revenue alone is approximately \\$9.95 million.**  (true)

Revenue in a given year is the first year's revenue multiplied by the growth factor once for each year that has passed:

$$a_t = a\\,k^{t-1}$$

Year 1 is the \\$4 million starting figure itself, so year 6 carries the exponent

$$t - 1 = 6 - 1 = 5$$

Substituting $a = 4$ million dollars and $k = 1.20$:

$$a_6 = 4 \\times (1.20)^{5}$$

The fifth power of the growth factor is

$$(1.20)^{5} = 2.48832$$

so year-6 revenue is

$$a_6 = 4 \\times 2.48832$$

$$a_6 = 9.95328$$

That is about \\$9.95 million, matching the claim, so the statement is true.`,
      `**C) The finite 6-year series has no valid sum via the finite-sum formula.**  (false)

The finite geometric sum

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

fails only when its denominator vanishes, which happens at the single value $k = 1$. Any other quotient, above or below 1, leaves the expression well defined for a fixed number of terms. Here revenue grows $20\\%$ a year, so

$$k = 1.20 \\neq 1$$

and the formula evaluates without difficulty over the six-year window with $a = 4$ million dollars:

$$s_6 = 4 \\times \\frac{(1.20)^{6}-1}{0.20}$$

$$(1.20)^{6} = 2.985984$$

$$s_6 = 4 \\times \\frac{1.985984}{0.20} = 4 \\times 9.92992 = 39.71968$$

A concrete total of about \\$39.72 million comes out, so the series plainly has a valid sum. The condition $|k| < 1$ that the claim appears to lean on belongs to infinite sums, where the terms must fade toward zero before a limit can exist; adding a fixed set of six terms never raises that question at all. The claim says the finite series has no valid sum, which the calculation contradicts, so the statement is false.`,
      `**D) Treating year-6 revenue as the first term of a new perpetuity with quotient k = 0.85, the terminal value is approximately \\$66.36 million.**  (true)

The terminal phase is treated as a fresh infinite geometric series whose first payment is year-6 revenue and whose quotient is $k = 0.85$. Year-6 revenue comes from the growth phase:

$$a_6 = 4 \\times (1.20)^{5} = 4 \\times 2.48832 = 9.95328$$

million dollars. An infinite geometric series has a finite total when the size of its quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

A $15\\%$ annual decline keeps $85\\%$ of the previous year's revenue, so $k = 0.85$ and $|0.85| < 1$. Substituting the first payment of the new stream:

$$s_{\\infty} = \\frac{9.95328}{1-0.85}$$

$$s_{\\infty} = \\frac{9.95328}{0.15}$$

$$s_{\\infty} = 66.3552$$

The terminal value is about \\$66.36 million, matching the claim, so the statement is true.`,
      `**E) Combining the 6-year finite total with the terminal perpetuity value gives a combined projected value of less than \\$100 million.**  (false)

The combined value adds the finite growth phase to the terminal perpetuity, so both pieces are needed. The six-year phase is a finite geometric series with $a = 4$ million dollars, $k = 1.20$, and $n = 6$:

$$s_6 = 4 \\times \\frac{(1.20)^{6}-1}{0.20} = 4 \\times \\frac{1.985984}{0.20} = 39.71968$$

million dollars. The terminal phase starts from year-6 revenue,

$$a_6 = 4 \\times (1.20)^{5} = 9.95328$$

million dollars, and declines $15\\%$ a year forever, so with $k = 0.85$ it totals

$$s_{\\infty} = \\frac{9.95328}{1-0.85} = \\frac{9.95328}{0.15} = 66.3552$$

million dollars. Adding the two pieces:

$$39.71968 + 66.3552 = 106.07488$$

The combined projected value is about \\$106.07 million. Comparing with the threshold in the claim:

$$106.07 > 100$$

The combined figure clears \\$100 million by more than \\$6 million rather than falling below it, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 70,
    solution_overview: `A tech company projects revenue of \\$4 million this year, growing 20% per year for 6 years in a finite geometric series with a = \\$4 million, k = 1.20, and n = 6. Investors then treat year-6 revenue as the first payment of a separate terminal perpetuity that declines 15% per year forever with quotient k = 0.85, used to estimate value beyond year 6.

**Part 1: Setup.**

Finite phase: a = \\$4 million, k = 1.20, n = 6 years

Terminal phase: first term = year-6 revenue, quotient k = 0.85, infinite horizon

**Part 2: Formula.**

Finite sum (k ≠ 1): $s_n = a(k^{n}-1)/(k-1)$

Term in year t: $a k^{t-1}$

Infinite sum (|k| < 1): a/(1 - k)

**Part 3: Solve.**

**1.** $1.20^{6} = 2.985984$.

**2.** $s_6 = 4 \\times (2.985984 - 1)/0.20 = 4 \\times 9.92992 = \\$39.72$ million.

**3.** $1.20^{5} = 2.48832$; year-$6$ revenue $= 4 \\times 2.48832 = \\$9.95$ million.

**4.** Terminal value: $9.95328/(1 - 0.85) = 9.95328/0.15 = \\$66.36$ million.

**5.** Combined value: $\\$39.72$ million $+ \\$66.36$ million $= \\$106.08$ million, which is not less than $\\$100$ million.`,
  },
  {
    id: `math-11-71`,
    case_id: `MATH 11.71`,
    title: `Reverse-Engineering a Retailer's First-Month Restocking Cost`,
    subsection: `11.4`,
    context: `A retailer's monthly restocking cost is expected to grow 15% every month for 6 months due to supply-chain constraints, with quotient k = 1.15. Accounting projects that the total restocking cost over all 6 months will equal exactly \\$58,000. Management wants to know what the first month's cost, a, must have been to produce that total.`,
    statements: [
      `If the first month's cost had instead been exactly \\$1,000, the second month's cost would be \\$1,150.00.`,
      `Solving for the first-month cost gives approximately \\$6,625.74.`,
      `The 6th month's restocking cost is approximately \\$13,326.73.`,
      `The combined restocking cost for months 4 through 6 is approximately \\$37,930.00.`,
      `If the same \\$58,000 total had instead been spread evenly, that flat monthly figure would exceed the actual first-month cost of \\$6,625.74 found under 15% growth.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) If the first month's cost had instead been exactly \\$1,000, the second month's cost would be \\$1,150.00.**  (true)

In a series that grows at a constant rate, each month's cost is the previous month's cost multiplied by the quotient:

$$a_{t} = a_{t-1} \\times k$$

Supply-chain pressure raises restocking cost $15\\%$ a month, so the quotient is

$$k = 1 + 0.15 = 1.15$$

This part of the claim replaces the actual first month with a hypothetical \\$1,000, and the step from month 1 to month 2 uses that figure directly:

$$a_2 = 1{,}000 \\times 1.15$$

$$a_2 = 1{,}150$$

The growth factor applies to whatever the first month happens to be, so a \\$1,000 opening month would be followed by \\$1,150.00 in month 2, exactly as claimed, and the statement is true.`,
      `**B) Solving for the first-month cost gives approximately \\$6,625.74.**  (true)

The six monthly costs form a finite geometric series whose total is known, so the first term can be recovered by rearranging the sum formula. Starting from

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

and solving for the first term gives

$$a = s_n \\times \\frac{k-1}{k^{n}-1}$$

Here the six-month total is $s_6 = 58{,}000$ dollars, the monthly quotient is $k = 1.15$, and $n = 6$:

$$a = 58{,}000 \\times \\frac{1.15-1}{(1.15)^{6}-1}$$

The sixth power of the growth factor is

$$(1.15)^{6} = 2.313061$$

so the fraction becomes

$$\\frac{0.15}{2.313061-1} = \\frac{0.15}{1.313061}$$

and the first month's cost is

$$a = \\frac{58{,}000 \\times 0.15}{1.313061} = \\frac{8{,}700}{1.313061}$$

$$a = 6{,}625.74$$

The opening month must have cost about \\$6,625.74, matching the claim, so the statement is true.`,
      `**C) The 6th month's restocking cost is approximately \\$13,326.73.**  (true)

The cost in a given month is the first month's cost multiplied by the growth factor once for each month that has passed:

$$a_t = a\\,k^{t-1}$$

The first month's cost follows from the known six-month total of \\$58,000 and the rearranged sum formula:

$$a = s_6 \\times \\frac{k-1}{k^{6}-1} = 58{,}000 \\times \\frac{0.15}{2.313061-1} = \\frac{8{,}700}{1.313061} = 6{,}625.74$$

Month 6 sits five steps past month 1, so the exponent is $t - 1 = 5$:

$$a_6 = 6{,}625.74 \\times (1.15)^{5}$$

The fifth power of the growth factor is

$$(1.15)^{5} = 2.011357$$

so the sixth month's cost is

$$a_6 = 6{,}625.74 \\times 2.011357$$

$$a_6 = 13{,}326.73$$

That is about \\$13,326.73, matching the claim, so the statement is true.`,
      `**D) The combined restocking cost for months 4 through 6 is approximately \\$37,930.00.**  (false)

Months 4, 5, and 6 are three individual terms of the series, each equal to the first month's cost scaled by the growth factor the appropriate number of times. The first month's cost comes from the known total of \\$58,000:

$$a = 58{,}000 \\times \\frac{0.15}{(1.15)^{6}-1} = \\frac{8{,}700}{1.313061} = 6{,}625.74$$

The three months carry exponents 3, 4, and 5:

$$a_4 = 6{,}625.74 \\times (1.15)^{3} = 6{,}625.74 \\times 1.520875 = 10{,}076.92$$

$$a_5 = 6{,}625.74 \\times (1.15)^{4} = 6{,}625.74 \\times 1.749006 = 11{,}588.46$$

$$a_6 = 6{,}625.74 \\times (1.15)^{5} = 6{,}625.74 \\times 2.011357 = 13{,}326.73$$

Adding the three costs:

$$10{,}076.92 + 11{,}588.46 + 13{,}326.73 = 34{,}992.11$$

The combined cost of the last three months is about \\$34,992.12 once the intermediate roundings are carried through. The claim names \\$37,930.00, which overstates the true figure by roughly

$$37{,}930.00 - 34{,}992.12 = 2{,}937.88$$

so the statement is false.`,
      `**E) If the same \\$58,000 total had instead been spread evenly, that flat monthly figure would exceed the actual first-month cost of \\$6,625.74 found under 15% growth.**  (true)

Two figures are being compared: the level monthly cost that would produce the same \\$58,000 total, and the actual opening month under $15\\%$ growth. Spreading the total evenly across six months gives

$$\\frac{58{,}000}{6} = 9{,}666.67$$

dollars a month. The actual first month follows from rearranging the finite-sum formula with $s_6 = 58{,}000$ dollars, $k = 1.15$, and $n = 6$:

$$a = 58{,}000 \\times \\frac{1.15-1}{(1.15)^{6}-1}$$

$$(1.15)^{6} = 2.313061$$

$$a = \\frac{8{,}700}{1.313061} = 6{,}625.74$$

Comparing the two monthly figures:

$$9{,}666.67 > 6{,}625.74$$

The level figure exceeds the growth schedule's opening month by

$$9{,}666.67 - 6{,}625.74 = 3{,}040.93$$

dollars. This is what a rising schedule always does: the later months run well above the average and pull it up, which forces the starting month below it. The claim states exactly this comparison, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 71,
    solution_overview: `A retailer's monthly restocking cost is expected to grow 15% every month for 6 months due to supply-chain constraints, with quotient k = 1.15. Accounting projects that the total restocking cost over all 6 months will equal exactly \\$58,000. Management wants to know what the first month's cost, a, must have been to produce that total.

**Part 1: Setup.**

$s_6$ (total 6-month cost) = \\$58,000

k (monthly growth quotient) = 1.15

n = 6 months

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$ ⇒ $a = s_n \\times (k - 1)/(k^{n}-1)$

Term in month t: $a k^{t-1}$

**Part 3: Solve.**

**1.** Hypothetical: if month-$1$ cost were $\\$1,000$, month-$2$ cost: $1,000\\times1.15 = \\$1,150.00$.

**2.** $k^{6} = 1.15^{6} = 2.313060766$.

**3.** $a = 58,000 \\times 0.15/(2.313060766 - 1) = 8,700/1.313060766 = \\$6,625.74$.

**4.** Month-$6$ cost: $a \\times k^{5} = 6,625.74 \\times 2.011357188 = \\$13,326.73$.

**5.** Months $4$–$6$ cost: $a(k^{3}+k^{4}+k^{5}) = 6,625.74 \\times (1.520875 + 1.749006 + 2.011357) = 6,625.74 \\times 5.281239 = \\$34,992.12$.

**6.** Flat monthly figure: $58,000/6 = \\$9,666.67$, which is indeed greater than $\\$6,625.74$.`,
  },
  {
    id: `math-11-72`,
    case_id: `MATH 11.72`,
    title: `University Endowment: Sustainable Declining Payout`,
    subsection: `11.4`,
    context: `A university endowment pays out \\$500,000 in scholarships this year. To keep the endowment sustainable, the payout is planned to shrink by 2% every year forever with a = \\$500,000 and k = 0.98, an infinite geometric series. The board also wants to know the cumulative payout over just the first 10 years, and how a steeper 2%-per-year-larger decline with k = 0.95 would compare.`,
    statements: [
      `The payout in the second year is \\$490,000.00.`,
      `The infinite total of all future payouts converges to \\$25,000,000.00.`,
      `The cumulative payout over just the first 10 years is approximately \\$4,800,000.00.`,
      `The first 10 years of payouts represent approximately 18% of the full infinite-horizon total.`,
      `If the decline were instead steeper, at k = 0.95, the infinite total would be more than half of the original infinite total.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The payout in the second year is \\$490,000.00.**  (true)

Each year's payout is the previous year's payout multiplied by the quotient:

$$a_t = a\\,k^{t-1}$$

Shrinking the payout by $2\\%$ a year leaves $98\\%$ of the previous amount, so

$$k = 1 - 0.02 = 0.98$$

This year's payout is $a = 500{,}000$ dollars, and the second year is one step along, giving the exponent $t - 1 = 1$:

$$a_2 = 500{,}000 \\times (0.98)^{1}$$

$$a_2 = 490{,}000$$

The second-year payout is \\$490,000.00, exactly the amount claimed, so the statement is true.`,
      `**B) The infinite total of all future payouts converges to \\$25,000,000.00.**  (true)

The payouts form an infinite geometric series, which totals a finite amount whenever the size of the quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

A $2\\%$ annual reduction keeps $98\\%$ of the previous payout, so $k = 0.98$ and

$$|0.98| < 1$$

which means the series converges. Substituting this year's payout $a = 500{,}000$ dollars:

$$s_{\\infty} = \\frac{500{,}000}{1-0.98}$$

Simplifying the denominator:

$$s_{\\infty} = \\frac{500{,}000}{0.02}$$

$$s_{\\infty} = 25{,}000{,}000$$

Everything the endowment will ever pay out converges to \\$25,000,000.00, exactly the figure claimed, so the statement is true.`,
      `**C) The cumulative payout over just the first 10 years is approximately \\$4,800,000.00.**  (false)

The first ten payouts are a finite geometric series, which sums to

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

Substituting this year's payout $a = 500{,}000$ dollars, the quotient $k = 0.98$, and $n = 10$:

$$s_{10} = 500{,}000 \\times \\frac{1-(0.98)^{10}}{1-0.98}$$

The tenth power of the quotient is

$$(0.98)^{10} = 0.817073$$

so the numerator of the bracket is

$$1 - 0.817073 = 0.182927$$

and dividing by the denominator gives

$$\\frac{0.182927}{0.02} = 9.14636$$

Multiplying by the first payout:

$$s_{10} = 500{,}000 \\times 9.14636 = 4{,}573{,}179.83$$

The first ten years pay out about \\$4,573,179.83. The claim names \\$4,800,000.00, which is roughly \\$226,820 too high, so the statement is false.`,
      `**D) The first 10 years of payouts represent approximately 18% of the full infinite-horizon total.**  (true)

The claim compares a ten-year partial total with the infinite total, so both are needed. The first ten payouts sum by the finite formula with $a = 500{,}000$ dollars, $k = 0.98$, and $n = 10$:

$$s_{10} = 500{,}000 \\times \\frac{1-(0.98)^{10}}{0.02}$$

$$(0.98)^{10} = 0.817073$$

$$s_{10} = 500{,}000 \\times \\frac{0.182927}{0.02} = 500{,}000 \\times 9.14636 = 4{,}573{,}179.83$$

The infinite total converges because $|0.98| < 1$:

$$s_{\\infty} = \\frac{500{,}000}{1-0.98} = 25{,}000{,}000$$

Dividing the partial total by the infinite total gives the share:

$$\\frac{4{,}573{,}179.83}{25{,}000{,}000} = 0.18293$$

That is $18.29\\%$, which rounds to about $18\\%$, exactly as the claim describes, so the statement is true.`,
      `**E) If the decline were instead steeper, at k = 0.95, the infinite total would be more than half of the original infinite total.**  (false)

The infinite total of a declining payout stream is

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

so a steeper decline enlarges the denominator $1 - k$ and shrinks the total. Both cases can be computed from the same starting payout $a = 500{,}000$ dollars. At the planned $2\\%$ decline, $k = 0.98$:

$$s_{\\infty} = \\frac{500{,}000}{1-0.98} = \\frac{500{,}000}{0.02} = 25{,}000{,}000$$

At the steeper $5\\%$ decline, $k = 0.95$:

$$s_{\\infty} = \\frac{500{,}000}{1-0.95}$$

$$s_{\\infty} = \\frac{500{,}000}{0.05}$$

$$s_{\\infty} = 10{,}000{,}000$$

Half of the original infinite total is

$$\\frac{25{,}000{,}000}{2} = 12{,}500{,}000$$

Comparing the steeper-decline total with that halfway mark:

$$10{,}000{,}000 < 12{,}500{,}000$$

The steeper path delivers only $40\\%$ of the original total, which is below half rather than above it, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 72,
    solution_overview: `A university endowment pays out \\$500,000 in scholarships this year. To keep the endowment sustainable, the payout is planned to shrink by 2% every year forever with a = \\$500,000 and k = 0.98, an infinite geometric series. The board also wants to know the cumulative payout over just the first 10 years, and how a steeper 2%-per-year-larger decline with k = 0.95 would compare.

**Part 1: Setup.**

a (year-1 payout) = \\$500,000

k = 0.98 (primary scenario); alternative k = 0.95

n = 10 years (for the finite check)

**Part 2: Formula.**

Infinite sum (|k| < 1): a/(1 - k)

Finite sum of first n terms: $s_n = a(1 - k^{n})/(1 - k)$

**Part 3: Solve.**

**1.** Year-$2$ payout: $a \\times k = 500,000\\times0.98 = \\$490,000.00$.

**2.** Infinite sum: $500,000/(1 - 0.98) = 500,000/0.02 = \\$25,000,000.00$.

**3.** $0.98^{10} = 0.817072807$.

**4.** $s_{10} = 500,000 \\times (1 - 0.817072807)/0.02 = 500,000 \\times 9.146360 = \\$4,573,179.83$.

**5.** Ratio: $4,573,179.83/25,000,000.00 = 0.18293 \\approx 18.29\\% \\approx 18\\%$.

**6.** Infinite sum at $k = 0.95$: $500,000/(1 - 0.95) = 500,000/0.05 = \\$10,000,000.00$.

**7.** Half of the original infinite sum $= 25,000,000.00/2 = \\$12,500,000.00$; since $10,000,000.00 < 12,500,000.00$, it is NOT more than half.`,
  },
  {
    id: `math-11-73`,
    case_id: `MATH 11.73`,
    title: `Marketing Budget: Solving for the Break-Point Year`,
    subsection: `11.4`,
    context: `A company's marketing budget starts at \\$200,000 this year and grows 12% every year with a = \\$200,000 and k = 1.12, a finite geometric series. The CFO wants to know the smallest number of years n after which the cumulative total marketing spend first surpasses \\$3,000,000.`,
    statements: [
      `The marketing budget in year 2 is \\$224,000.00.`,
      `The cumulative spend after 9 years is still below the \\$3,000,000 target.`,
      `The cumulative spend after 10 years is approximately \\$3,600,000.00.`,
      `The smallest n for which cumulative spend surpasses \\$3,000,000 is n = 9.`,
      `If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would still surpass the \\$3,000,000 target within 10 years.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The marketing budget in year 2 is \\$224,000.00.**  (true)

The budget in a given year is the previous year's budget multiplied by the growth quotient:

$$a_t = a\\,k^{t-1}$$

Growing the budget $12\\%$ a year makes the quotient

$$k = 1 + 0.12 = 1.12$$

This year's budget is $a = 200{,}000$ dollars, and year 2 is one step along, so the exponent is $t - 1 = 1$:

$$a_2 = 200{,}000 \\times (1.12)^{1}$$

$$a_2 = 224{,}000$$

The year-2 marketing budget is \\$224,000.00, exactly the figure claimed, so the statement is true.`,
      `**B) The cumulative spend after 9 years is still below the \\$3,000,000 target.**  (true)

Nine years of budgets growing $12\\%$ a year form a finite geometric series with $a = 200{,}000$ dollars, $k = 1.12$, and $n = 9$:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Substituting the three quantities:

$$s_9 = 200{,}000 \\times \\frac{(1.12)^{9}-1}{1.12-1}$$

The ninth power of the growth factor is

$$(1.12)^{9} = 2.773079$$

so the bracket becomes

$$\\frac{2.773079-1}{0.12} = \\frac{1.773079}{0.12} = 14.775656$$

and the nine-year total is

$$s_9 = 200{,}000 \\times 14.775656$$

$$s_9 = 2{,}955{,}131.26$$

Comparing with the target:

$$2{,}955{,}131.26 < 3{,}000{,}000$$

Cumulative spend after nine years is still about \\$44,868.74 short of the \\$3,000,000 target, so the statement is true.`,
      `**C) The cumulative spend after 10 years is approximately \\$3,600,000.00.**  (false)

Ten years of budgets growing $12\\%$ a year form a finite geometric series with $a = 200{,}000$ dollars, $k = 1.12$, and $n = 10$:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Substituting the three quantities:

$$s_{10} = 200{,}000 \\times \\frac{(1.12)^{10}-1}{1.12-1}$$

The tenth power of the growth factor is

$$(1.12)^{10} = 3.105848$$

so the bracket becomes

$$\\frac{3.105848-1}{0.12} = \\frac{2.105848}{0.12} = 17.548735$$

and the ten-year total is

$$s_{10} = 200{,}000 \\times 17.548735$$

$$s_{10} = 3{,}509{,}747.01$$

The claim names about \\$3,600,000.00, which overstates the ten-year figure by roughly

$$3{,}600{,}000.00 - 3{,}509{,}747.01 = 90{,}252.99$$

so the statement is false.`,
      `**D) The smallest n for which cumulative spend surpasses \\$3,000,000 is n = 9.**  (false)

Finding the first year in which cumulative spend clears \\$3,000,000 means testing consecutive totals of the finite geometric series with $a = 200{,}000$ dollars and $k = 1.12$:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

After nine years:

$$(1.12)^{9} = 2.773079$$

$$s_9 = 200{,}000 \\times \\frac{1.773079}{0.12} = 200{,}000 \\times 14.775656 = 2{,}955{,}131.26$$

That total is still short of the target:

$$2{,}955{,}131.26 < 3{,}000{,}000$$

After ten years:

$$(1.12)^{10} = 3.105848$$

$$s_{10} = 200{,}000 \\times \\frac{2.105848}{0.12} = 200{,}000 \\times 17.548735 = 3{,}509{,}747.01$$

which clears it:

$$3{,}509{,}747.01 > 3{,}000{,}000$$

The crossing therefore happens during year 10, and the smallest whole number of years with cumulative spend above \\$3,000,000 is $n = 10$. The claim names $n = 9$, a year too early, so the statement is false.`,
      `**E) If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would still surpass the \\$3,000,000 target within 10 years.**  (false)

Slower growth means a different quotient, so the ten-year total has to be recomputed rather than adjusted. With growth at $8\\%$, the quotient is

$$k = 1 + 0.08 = 1.08$$

and the finite geometric sum with $a = 200{,}000$ dollars and $n = 10$ is

$$s_{10} = 200{,}000 \\times \\frac{(1.08)^{10}-1}{1.08-1}$$

The tenth power of the growth factor is

$$(1.08)^{10} = 2.158925$$

so the bracket becomes

$$\\frac{2.158925-1}{0.08} = \\frac{1.158925}{0.08} = 14.486562$$

and the ten-year total is

$$s_{10} = 200{,}000 \\times 14.486562$$

$$s_{10} = 2{,}897{,}312.49$$

Comparing with the target:

$$2{,}897{,}312.49 < 3{,}000{,}000$$

At $8\\%$ growth the cumulative spend is still about \\$102,687.51 short after ten full years, so the target would not be reached within that window and the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `A company's marketing budget starts at \\$200,000 this year and grows 12% every year with a = \\$200,000 and k = 1.12, a finite geometric series. The CFO wants to know the smallest number of years n after which the cumulative total marketing spend first surpasses \\$3,000,000.

**Part 1: Setup.**

a (year-1 spend) = \\$200,000

k = 1.12 (primary); alternative k = 1.08

Target cumulative spend = \\$3,000,000

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$

**Part 3: Solve.**

**1.** Year-$2$ budget: $a \\times k = 200,000\\times1.12 = \\$224,000.00$.

**2.** $1.12^{9} = 2.773078757$; $s_9 = 200,000 \\times (2.773078757-1)/0.12 = 200,000 \\times 14.775656 = \\$2,955,131.26$.

**3.** $1.12^{10} = 3.105848289$; $s_{10} = 200,000 \\times (3.105848289-1)/0.12 = 200,000 \\times 17.548736 = \\$3,509,747.01$.

**4.** Since $s_9 \\approx \\$2,955,131.26 < \\$3,000,000$ and $s_{10} \\approx \\$3,509,747.01 > \\$3,000,000$, the smallest $n$ at which the target is surpassed is $n = 10$, not $n = 9$.

**5.** $1.08^{10} = 2.158924997$; $s_{10}$ (at $k=1.08$) $= 200,000 \\times (2.158924997-1)/0.08 = 200,000 \\times 14.486562 = \\$2,897,312.49$, which is below $\\$3,000,000$.
`,
  },
  {
    id: `math-11-74`,
    case_id: `MATH 11.74`,
    title: `Charitable Trust: A Deferred, Declining Grant Stream`,
    subsection: `11.4`,
    context: `A charitable trust will issue its first grant of \\$50,000 starting six years from now, with each subsequent annual grant equal to 96% of the previous grant, continuing forever with a = \\$50,000 and k = 0.96. Analysts also want the total of just the first 15 grants, and how a steeper decline would compare.`,
    statements: [
      `The second grant in the sequence is \\$48,000.00.`,
      `The infinite total of all future grants is \\$1,250,000.00.`,
      `The total of the first 15 grants is approximately \\$572,392.03.`,
      `The first 15 grants represent less than 40% of the infinite total.`,
      `If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be less than half of the original infinite total.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The second grant in the sequence is \\$48,000.00.**  (true)

Each grant is a fixed fraction of the one before it, so any grant equals the first grant multiplied by the quotient once for each step taken:

$$a_t = a\\,k^{t-1}$$

The first grant is $a = 50{,}000$ dollars, and each later grant is $96\\%$ of the previous one, so

$$k = 0.96$$

The second grant is one step along, giving the exponent $t - 1 = 1$:

$$a_2 = 50{,}000 \\times (0.96)^{1}$$

$$a_2 = 48{,}000$$

The second grant is \\$48,000.00, which is \\$2,000.00 less than the first, exactly as the claim states, so the statement is true.`,
      `**B) The infinite total of all future grants is \\$1,250,000.00.**  (true)

The grants continue forever, forming an infinite geometric series, and such a series has a finite total whenever the size of the quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

Each grant is $96\\%$ of the previous one, so $k = 0.96$ and

$$|0.96| < 1$$

which means the total converges. Substituting the first grant $a = 50{,}000$ dollars:

$$s_{\\infty} = \\frac{50{,}000}{1-0.96}$$

Simplifying the denominator:

$$s_{\\infty} = \\frac{50{,}000}{0.04}$$

$$s_{\\infty} = 1{,}250{,}000$$

Every grant the trust will ever pay adds up to \\$1,250,000.00, matching the claim, so the statement is true.`,
      `**C) The total of the first 15 grants is approximately \\$572,392.03.**  (true)

The first fifteen grants form a finite geometric series, which sums to

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

Substituting the first grant $a = 50{,}000$ dollars, the quotient $k = 0.96$, and $n = 15$:

$$s_{15} = 50{,}000 \\times \\frac{1-(0.96)^{15}}{1-0.96}$$

The fifteenth power of the quotient is

$$(0.96)^{15} = 0.542086$$

so the numerator of the bracket is

$$1 - 0.542086 = 0.457914$$

and dividing by the denominator gives

$$\\frac{0.457914}{0.04} = 11.44784$$

Multiplying by the first grant:

$$s_{15} = 50{,}000 \\times 11.44784$$

$$s_{15} = 572{,}392.03$$

The first fifteen grants total about \\$572,392.03, matching the claim, so the statement is true.`,
      `**D) The first 15 grants represent less than 40% of the infinite total.**  (false)

The claim measures a fifteen-grant partial total against the infinite total, so both are needed. The finite sum with $a = 50{,}000$ dollars, $k = 0.96$, and $n = 15$ is

$$s_{15} = 50{,}000 \\times \\frac{1-(0.96)^{15}}{0.04}$$

$$(0.96)^{15} = 0.542086$$

$$s_{15} = 50{,}000 \\times \\frac{0.457914}{0.04} = 50{,}000 \\times 11.44784 = 572{,}392.03$$

The infinite total converges because $|0.96| < 1$:

$$s_{\\infty} = \\frac{50{,}000}{1-0.96} = \\frac{50{,}000}{0.04} = 1{,}250{,}000$$

Dividing one by the other gives the share:

$$\\frac{572{,}392.03}{1{,}250{,}000} = 0.45791$$

That is $45.79\\%$. Comparing with the threshold in the claim:

$$45.79\\% > 40\\%$$

The first fifteen grants deliver almost half of the perpetual total rather than less than two fifths of it, so the statement is false.`,
      `**E) If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be less than half of the original infinite total.**  (true)

The infinite total of a declining grant stream is

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

and a steeper decline raises the denominator $1 - k$, which cuts the total. Both cases start from the same first grant $a = 50{,}000$ dollars. At the planned quotient $k = 0.96$:

$$s_{\\infty} = \\frac{50{,}000}{1-0.96} = \\frac{50{,}000}{0.04} = 1{,}250{,}000$$

At the steeper quotient $k = 0.90$, which cuts each grant by $10\\%$:

$$s_{\\infty} = \\frac{50{,}000}{1-0.90}$$

$$s_{\\infty} = \\frac{50{,}000}{0.10}$$

$$s_{\\infty} = 500{,}000$$

Half of the original infinite total is

$$\\frac{1{,}250{,}000}{2} = 625{,}000$$

Comparing the steeper-decline total against that halfway mark:

$$500{,}000 < 625{,}000$$

The steeper decline leaves a total that is \\$125,000.00 below half of the original, so it is indeed less than half and the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 74,
    solution_overview: `A charitable trust will issue its first grant of \\$50,000 starting six years from now, with each subsequent annual grant equal to 96% of the previous grant, continuing forever with a = \\$50,000 and k = 0.96. Analysts also want the total of just the first 15 grants, and how a steeper decline would compare.

**Part 1: Setup.**

a (first grant) = \\$50,000

k = 0.96 (primary); alternative k = 0.90

n = 15 grants (for the finite check)

**Part 2: Formula.**

Infinite sum (|k| < 1): a/(1 - k)

Finite sum of first n terms: $s_n = a(1 - k^{n})/(1 - k)$

**Part 3: Solve.**

**1.** Grant $2$: $a \\times k = 50,000\\times0.96 = \\$48,000.00$.

**2.** Infinite sum: $50,000/(1 - 0.96) = 50,000/0.04 = \\$1,250,000.00$.

**3.** $0.96^{15} = 0.542086380$.

**4.** $s_{15} = 50,000 \\times (1 - 0.542086380)/0.04 = 50,000 \\times 11.447840 = \\$572,392.03$.

**5.** Ratio: $572,392.03/1,250,000.00 = 0.45791 \\approx 45.79\\%$, which is NOT less than $40\\%$.

**6.** Infinite sum at $k = 0.90$: $50,000/(1 - 0.90) = 50,000/0.10 = \\$500,000.00$; half of $\\$1,250,000.00$ is $\\$625,000.00$, and $\\$500,000.00 < \\$625,000.00$.
`,
  },
  {
    id: `math-11-75`,
    case_id: `MATH 11.75`,
    title: `Vineyard Yield: A Quarterly Decline Unit-Conversion Trap`,
    subsection: `11.4`,
    context: `A vineyard's grape yield is expected to decline by 2% every quarter, not every year, over a 5-year span of 20 quarters. The first quarter's yield is 10,000 lbs, so this is a finite geometric series with a = 10,000 lbs, k = 0.98, and n = 20 quarters.`,
    statements: [
      `The second quarter's yield is 9,800.00 lbs.`,
      `The total yield over the full 5-year span is approximately 166,196.01 lbs.`,
      `Substituting n = 5 into the same formula gives 48,039.60 lbs, and this would be the correct 5-year total.`,
      `The yield in the 20th quarter alone is approximately 6,812.33 lbs.`,
      `If the 2%-per-quarter decline continued forever instead of stopping after 20 quarters, the theoretical infinite total of 500,000.00 lbs would be less than the actual 20-quarter total.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The second quarter's yield is 9,800.00 lbs.**  (true)

Each quarter's yield is the previous quarter's yield multiplied by the decline quotient:

$$a_t = a\\,k^{t-1}$$

A $2\\%$ quarterly fall leaves $98\\%$ of the previous quarter, so

$$k = 1 - 0.02 = 0.98$$

The first quarter's yield is $a = 10{,}000$ lbs, and the second quarter is one step along, giving the exponent $t - 1 = 1$:

$$a_2 = 10{,}000 \\times (0.98)^{1}$$

$$a_2 = 9{,}800$$

The second quarter's yield is $9{,}800.00$ lbs, exactly the figure claimed, so the statement is true.`,
      `**B) The total yield over the full 5-year span is approximately 166,196.01 lbs.**  (true)

Five years at four quarters per year is

$$5 \\times 4 = 20$$

quarters, so the full span is a finite geometric series of 20 terms with $a = 10{,}000$ lbs and $k = 0.98$:

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

Substituting the three quantities:

$$s_{20} = 10{,}000 \\times \\frac{1-(0.98)^{20}}{1-0.98}$$

The twentieth power of the quotient is

$$(0.98)^{20} = 0.667608$$

so the numerator of the bracket is

$$1 - 0.667608 = 0.332392$$

and dividing by the denominator gives

$$\\frac{0.332392}{0.02} = 16.619601$$

Multiplying by the first quarter's yield:

$$s_{20} = 10{,}000 \\times 16.619601$$

$$s_{20} = 166{,}196.01$$

The five-year total is about $166{,}196.01$ lbs, matching the claim, so the statement is true.`,
      `**C) Substituting n = 5 into the same formula gives 48,039.60 lbs, and this would be the correct 5-year total.**  (false)

The exponent in the sum formula counts periods, and the periods here are quarters, not years. Substituting $n = 5$ therefore adds up only five quarters:

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

$$s_5 = 10{,}000 \\times \\frac{1-(0.98)^{5}}{0.02}$$

The fifth power of the quotient is

$$(0.98)^{5} = 0.903921$$

so the bracket becomes

$$\\frac{1-0.903921}{0.02} = \\frac{0.096079}{0.02} = 4.80396$$

and the total is

$$s_5 = 10{,}000 \\times 4.80396 = 48{,}039.60$$

The arithmetic in the claim is therefore right: substituting $n = 5$ does produce $48{,}039.60$ lbs. What that number measures is wrong. Five quarters is

$$\\frac{5}{4} = 1.25$$

years, so it covers only the first fifteen months of the vineyard's schedule. The genuine five-year span runs

$$5 \\times 4 = 20$$

quarters, and its total is

$$s_{20} = 10{,}000 \\times \\frac{1-(0.98)^{20}}{0.02} = 10{,}000 \\times 16.619601 = 166{,}196.01$$

lbs, more than three times the figure the claim endorses. The number is computable but answers the wrong question, so the statement is false.`,
      `**D) The yield in the 20th quarter alone is approximately 6,812.33 lbs.**  (true)

The yield in a given quarter is the first quarter's yield multiplied by the decline factor once for each quarter that has passed:

$$a_t = a\\,k^{t-1}$$

Quarter 1 is the $10{,}000$ lb starting figure with no multiplication, so quarter 20 carries the exponent

$$t - 1 = 20 - 1 = 19$$

Substituting $a = 10{,}000$ lbs and $k = 0.98$:

$$a_{20} = 10{,}000 \\times (0.98)^{19}$$

The nineteenth power of the quotient is

$$(0.98)^{19} = 0.681233$$

so the twentieth quarter's yield is

$$a_{20} = 10{,}000 \\times 0.681233$$

$$a_{20} = 6{,}812.33$$

The final quarter yields about $6{,}812.33$ lbs, roughly $68\\%$ of the opening quarter, which is exactly the figure in the claim, so the statement is true.`,
      `**E) If the 2%-per-quarter decline continued forever instead of stopping after 20 quarters, the theoretical infinite total of 500,000.00 lbs would be less than the actual 20-quarter total.**  (false)

Two totals have to be compared: the hypothetical infinite total and the actual twenty-quarter total. Letting the $2\\%$ quarterly decline run forever gives an infinite geometric series, which converges because $|0.98| < 1$:

$$s_{\\infty} = \\frac{a}{1-k} = \\frac{10{,}000}{1-0.98}$$

$$s_{\\infty} = \\frac{10{,}000}{0.02}$$

$$s_{\\infty} = 500{,}000 \\text{ lbs}$$

The actual schedule stops after 20 quarters, and that finite total is

$$s_{20} = 10{,}000 \\times \\frac{1-(0.98)^{20}}{0.02}$$

$$(0.98)^{20} = 0.667608$$

$$s_{20} = 10{,}000 \\times 16.619601 = 166{,}196.01 \\text{ lbs}$$

Comparing the two:

$$500{,}000 > 166{,}196.01$$

Every quarter past the twentieth still contributes a positive yield, so the endless schedule can only exceed the truncated one, by

$$500{,}000 - 166{,}196.01 = 333{,}803.99$$

lbs here. The claim has the infinite total falling below the twenty-quarter total, which reverses the true order, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `A vineyard's grape yield is expected to decline by 2% every quarter, not every year, over a 5-year span of 20 quarters. The first quarter's yield is 10,000 lbs, so this is a finite geometric series with a = 10,000 lbs, k = 0.98, and n = 20 quarters.

**Part 1: Setup.**

a (quarter-1 yield) = 10,000 lbs

k (quarterly decline quotient) = 0.98

n = 20 quarters (5 years)

**Part 2: Formula.**

Finite sum: $s_n = a(1 - k^{n})/(1 - k)$

Infinite sum (|k| < 1): a/(1 - k)

**Part 3: Solve.**

**1.** Quarter-$2$ yield: $a \\times k = 10,000\\times0.98 = 9,800.00$ lbs.

**2.** $0.98^{20} = 0.667607972$.

**3.** $s_{20} = 10,000 \\times (1 - 0.667607972)/0.02 = 10,000 \\times 16.619601 = 166,196.01$ lbs.

**4.** Using the wrong exponent, $n = 5$: $0.98^{5} = 0.903920800$; $s_{5,\\mathrm{wrong}} = 10,000 \\times (1-0.903921)/0.02 = 10,000 \\times 4.80396 = 48,039.60$ lbs — this is NOT the correct $20$-quarter total; it only covers the first $5$ quarters (about $1.25$ years), not $5$ years.

**5.** Quarter-$20$ yield: $a \\times k^{19} = 10,000 \\times 0.681230 = 6,812.33$ lbs.

**6.** Infinite (hypothetical) sum: $10,000/(1 - 0.98) = 10,000/0.02 = 500,000.00$ lbs, which is MORE than the $166,196.01$ lbs $20$-quarter total, not less.
`,
  },
  {
    id: `math-11-76`,
    case_id: `MATH 11.76`,
    title: `Comparing Two Franchise Territories Over 8 Years`,
    subsection: `11.4`,
    context: `A franchisor compares two territories over 8 years. Territory A starts at a first-year royalty of \\$80,000, growing 6% per year with a = \\$80,000 and k = 1.06. Territory B starts higher, at \\$95,000, but grows more slowly, at only 2% per year with a = \\$95,000 and k = 1.02.`,
    statements: [
      `Territory A's 8-year total royalties are approximately \\$791,797.43.`,
      `Territory B's 8-year total royalties are approximately \\$815,382.06.`,
      `Territory A's 8-year total royalties exceed Territory B's 8-year total.`,
      `In year 8 alone, Territory A's royalty payment of approximately \\$120,290.42 exceeds Territory B's year-8 payment of approximately \\$109,125.14.`,
      `Territory B's 8-year total exceeds Territory A's 8-year total by more than \\$30,000.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) Territory A's 8-year total royalties are approximately \\$791,797.43.**  (true)

Royalties that rise by a fixed percentage each year form a finite geometric series, which sums to

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Territory A opens at $a = 80{,}000$ dollars and grows $6\\%$ a year, so $k = 1.06$, over $n = 8$ years:

$$s_{A,8} = 80{,}000 \\times \\frac{(1.06)^{8}-1}{1.06-1}$$

The eighth power of the growth factor is

$$(1.06)^{8} = 1.593848$$

so the bracket becomes

$$\\frac{1.593848-1}{0.06} = \\frac{0.593848}{0.06} = 9.897468$$

and the eight-year total is

$$s_{A,8} = 80{,}000 \\times 9.897468$$

$$s_{A,8} = 791{,}797.43$$

Territory A collects about \\$791,797.43 over the eight years, exactly the figure claimed, so the statement is true.`,
      `**B) Territory B's 8-year total royalties are approximately \\$815,382.06.**  (true)

Territory B's royalties also rise by a fixed percentage each year, so the same finite geometric sum applies:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Territory B opens higher at $a = 95{,}000$ dollars but grows only $2\\%$ a year, so $k = 1.02$, over $n = 8$ years:

$$s_{B,8} = 95{,}000 \\times \\frac{(1.02)^{8}-1}{1.02-1}$$

The eighth power of the growth factor is

$$(1.02)^{8} = 1.171659$$

so the bracket becomes

$$\\frac{1.171659-1}{0.02} = \\frac{0.171659}{0.02} = 8.582969$$

and the eight-year total is

$$s_{B,8} = 95{,}000 \\times 8.582969$$

$$s_{B,8} = 815{,}382.06$$

Territory B collects about \\$815,382.06 over the eight years, exactly the figure claimed, so the statement is true.`,
      `**C) Territory A's 8-year total royalties exceed Territory B's 8-year total.**  (false)

Both totals must be computed before they can be ranked. Territory A starts at $a = 80{,}000$ dollars with $k = 1.06$ over $n = 8$ years:

$$s_{A,8} = 80{,}000 \\times \\frac{(1.06)^{8}-1}{0.06}$$

$$(1.06)^{8} = 1.593848$$

$$s_{A,8} = 80{,}000 \\times 9.897468 = 791{,}797.43$$

Territory B starts at $a = 95{,}000$ dollars with $k = 1.02$ over the same eight years:

$$s_{B,8} = 95{,}000 \\times \\frac{(1.02)^{8}-1}{0.02}$$

$$(1.02)^{8} = 1.171659$$

$$s_{B,8} = 95{,}000 \\times 8.582969 = 815{,}382.06$$

Comparing the two totals:

$$791{,}797.43 < 815{,}382.06$$

Territory B's larger opening royalty outweighs Territory A's faster growth across a window this short, leaving Territory A behind by \\$23,584.63. The claim has Territory A ahead, so the statement is false.`,
      `**D) In year 8 alone, Territory A's royalty payment of approximately \\$120,290.42 exceeds Territory B's year-8 payment of approximately \\$109,125.14.**  (true)

A single year's royalty is one term of the series, not a running total, so it uses the term formula rather than the sum formula:

$$a_t = a\\,k^{t-1}$$

Year 1 is the opening royalty with no growth applied, so year 8 carries the exponent

$$t - 1 = 8 - 1 = 7$$

For Territory A, with $a = 80{,}000$ dollars and $k = 1.06$:

$$a_{A,8} = 80{,}000 \\times (1.06)^{7}$$

$$(1.06)^{7} = 1.503630$$

$$a_{A,8} = 80{,}000 \\times 1.503630 = 120{,}290.42$$

For Territory B, with $a = 95{,}000$ dollars and $k = 1.02$:

$$a_{B,8} = 95{,}000 \\times (1.02)^{7}$$

$$(1.02)^{7} = 1.148686$$

$$a_{B,8} = 95{,}000 \\times 1.148686 = 109{,}125.14$$

Comparing the two year-8 payments:

$$120{,}290.42 > 109{,}125.14$$

Territory A's payment leads by

$$120{,}290.42 - 109{,}125.14 = 11{,}165.28$$

dollars in that year. Seven rounds of $6\\%$ compounding have lifted A's single payment past B's, even though A's eight-year running total of \\$791,797.43 is still behind B's \\$815,382.06. A faster-growing stream overtakes a slower one payment by payment before it catches up on the cumulative figure, and both dollar amounts in the claim match the calculation, so the statement is true.`,
      `**E) Territory B's 8-year total exceeds Territory A's 8-year total by more than \\$30,000.**  (false)

The gap between the two totals has to be measured against the \\$30,000 threshold. Territory A, with $a = 80{,}000$ dollars, $k = 1.06$, and $n = 8$, totals

$$s_{A,8} = 80{,}000 \\times \\frac{(1.06)^{8}-1}{0.06} = 80{,}000 \\times 9.897468 = 791{,}797.43$$

Territory B, with $a = 95{,}000$ dollars, $k = 1.02$, and $n = 8$, totals

$$s_{B,8} = 95{,}000 \\times \\frac{(1.02)^{8}-1}{0.02} = 95{,}000 \\times 8.582969 = 815{,}382.06$$

Subtracting to find B's lead:

$$815{,}382.06 - 791{,}797.43 = 23{,}584.63$$

Comparing that lead with the threshold:

$$23{,}584.63 < 30{,}000$$

Territory B is ahead, but by about \\$6,415 less than the claim requires, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 76,
    solution_overview: `A franchisor compares two territories over 8 years. Territory A starts at a first-year royalty of \\$80,000, growing 6% per year with a = \\$80,000 and k = 1.06. Territory B starts higher, at \\$95,000, but grows more slowly, at only 2% per year with a = \\$95,000 and k = 1.02.

**Part 1: Setup.**

Territory A: a = \\$80,000, k = 1.06

Territory B: a = \\$95,000, k = 1.02

n = 8 years for both

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$

Term in year t: $a k^{t-1}$

**Part 3: Solve.**

**1.** $1.06^{8} = 1.593848075$; $s_{A,8} = 80,000 \\times (1.593848075-1)/0.06 = 80,000 \\times 9.897468 = \\$791,797.43$.

**2.** $1.02^{8} = 1.171659381$; $s_{B,8} = 95,000 \\times (1.171659381-1)/0.02 = 95,000 \\times 8.582969 = \\$815,382.06$.

**3.** Comparing totals: $\\$791,797.43$ (A) $< \\$815,382.06$ (B), so Territory A's total does NOT exceed Territory B's.

**4.** Year-$8$ payment A: $80,000 \\times 1.06^{7} = 80,000 \\times 1.503630 = \\$120,290.42$.

**5.** Year-$8$ payment B: $95,000 \\times 1.02^{7} = 95,000 \\times 1.148686 = \\$109,125.14$; indeed $\\$120,290.42 > \\$109,125.14$.

**6.** Difference (B $-$ A): $\\$815,382.06 - \\$791,797.43 = \\$23,584.63$, which is NOT more than $\\$30,000$.
`,
  },
  {
    id: `math-11-77`,
    case_id: `MATH 11.77`,
    title: `Diminishing Marginal Returns from Advertising Spend`,
    subsection: `11.4`,
    context: `An analyst models the marginal benefit of the n-th batch of advertising spend as $a_n = 5,000/n^{p}$ dollars, and wants to know, for different values of the exponent p, whether the infinite total marginal benefit $\\sum a_n$ converges, using the rule that $\\sum 1/n^{p}$ converges if and only if p > 1.`,
    statements: [
      `With p = 1.5, the marginal benefit of the 4th campaign batch is approximately \\$650.00.`,
      `With p = 1.5, the infinite series converges to a finite total value.`,
      `If instead p = 1, the series would still converge, just to a larger total than the p = 1.5 case.`,
      `$a_{100} = \\$5.00$, and this alone is enough to guarantee that the series $\\sum a_n$ converges.`,
      `With p = 0.5, the series diverges, even though the individual terms still tend to 0 as n → ∞.`,
    ],
    answer_key: [false, true, false, false, true],
    tactical_explanations: [
      `**A) With p = 1.5, the marginal benefit of the 4th campaign batch is approximately \\$650.00.**  (false)

The marginal benefit of the $n$-th batch is given directly by the model

$$a_n = \\frac{5{,}000}{n^{p}}$$

so the fourth batch at $p = 1.5$ needs $n = 4$ and the exponent $1.5$:

$$a_4 = \\frac{5{,}000}{4^{1.5}}$$

A power of $1.5$ is a cube of the square root, or equivalently the number times its own square root:

$$4^{1.5} = 4 \\times \\sqrt{4} = 4 \\times 2 = 8$$

Dividing:

$$a_4 = \\frac{5{,}000}{8}$$

$$a_4 = 625.00$$

The fourth batch is worth \\$625.00. The claim names \\$650.00, which is \\$25.00 too high, so the statement is false.`,
      `**B) With p = 1.5, the infinite series converges to a finite total value.**  (true)

Whether the total marginal benefit is finite is settled by the p-series rule quoted in the setup:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^{p}} \\text{ converges exactly when } p > 1$$

The constant \\$5,000 in the numerator does not affect convergence, since it factors straight out of the sum:

$$\\sum_{n=1}^{\\infty} \\frac{5{,}000}{n^{p}} = 5{,}000 \\sum_{n=1}^{\\infty} \\frac{1}{n^{p}}$$

The exponent under consideration is $p = 1.5$, and comparing it with the cutoff:

$$1.5 > 1$$

The condition holds, so the underlying p-series converges and multiplying it by \\$5,000 leaves a finite total. The claim says the series converges to a finite total value, so the statement is true.`,
      `**C) If instead p = 1, the series would still converge, just to a larger total than the p = 1.5 case.**  (false)

The same p-series rule decides the case:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^{p}} \\text{ converges exactly when } p > 1$$

Setting $p = 1$ turns the model into

$$a_n = \\frac{5{,}000}{n^{1}} = \\frac{5{,}000}{n}$$

which is \\$5,000 times the harmonic series. Testing the exponent against the cutoff:

$$1 > 1 \\text{ is false}$$

Since $p = 1$ does not clear the threshold, the harmonic series diverges and so does \\$5,000 times it. Its partial sums grow without any ceiling, so there is no total at all to compare against the $p = 1.5$ case. The claim asserts convergence to a larger total, but no total exists, so the statement is false.`,
      `**D) $a_{100} = \\$5.00$, and this alone is enough to guarantee that the series $\\sum a_n$ converges.**  (false)

The arithmetic in the first half of the claim checks out. Using the model with $p = 1.5$ and $n = 100$:

$$a_{100} = \\frac{5{,}000}{100^{1.5}}$$

$$100^{1.5} = 100 \\times \\sqrt{100} = 100 \\times 10 = 1{,}000$$

$$a_{100} = \\frac{5{,}000}{1{,}000} = 5.00$$

So $a_{100}$ really is \\$5.00. The conclusion drawn from it does not follow. Terms shrinking toward zero is a requirement for convergence, not a guarantee of it:

$$\\sum a_n \\text{ converges} \\implies a_n \\to 0$$

but the reverse implication fails. The harmonic case makes that concrete: at $p = 1$ the terms $5{,}000/n$ also fall toward zero, and $a_{100} = 5{,}000/100 = 50$ is a small figure too, yet the rule $p > 1$ is not met and that series diverges. One small term therefore proves nothing on its own, so the statement is false.`,
      `**E) With p = 0.5, the series diverges, even though the individual terms still tend to 0 as n → ∞.**  (true)

The p-series rule fixes the outcome:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^{p}} \\text{ converges exactly when } p > 1$$

With $p = 0.5$ the model becomes

$$a_n = \\frac{5{,}000}{n^{0.5}} = \\frac{5{,}000}{\\sqrt{n}}$$

and testing the exponent against the cutoff:

$$0.5 < 1$$

The condition for convergence fails, so the series diverges and its partial sums grow without bound. The individual terms still fade, as a few values show:

$$a_{100} = \\frac{5{,}000}{10} = 500, \\qquad a_{10{,}000} = \\frac{5{,}000}{100} = 50$$

Both halves of the claim therefore hold at once: the terms tend to zero and the series still diverges, because shrinking terms alone are never enough. The statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 77,
    solution_overview: `An analyst models the marginal benefit of the n-th batch of advertising spend as $a_n = 5,000/n^{p}$ dollars, and wants to know, for different values of the exponent p, whether the infinite total marginal benefit $\\sum a_n$ converges, using the rule that $\\sum 1/n^{p}$ converges if and only if p > 1.

**Part 1: Setup.**

$a_n = 5,000/n^{p}$

p = 1.5 (primary); p = 1 and p = 0.5 (comparison scenarios)

**Part 2: Formula.**

p-series rule: $\\sum_{n=1}^{\\infty} 1/n^{p}$ converges ⇔ $p > 1$

Necessary (not sufficient): convergence requires $\\lim_{n\\to\\infty} a_n = 0$

**Part 3: Solve.**

**1.** $a_4 = 5,000/4^{1.5} = 5,000/8 = \\$625.00$ (not $\\$650.00$).

**2.** $p = 1.5 > 1$, so $\\sum 5,000/n^{1.5}$ converges to a finite value.

**3.** At $p = 1$, $\\sum 5,000/n$ is the harmonic series and diverges — it has no finite sum.

**4.** $a_{100} = \\$5.00$ is correct, but $a_n \\to 0$ is necessary, not sufficient (harmonic counterexample).

**5.** $p = 0.5 \\le 1$, so $\\sum 5,000/n^{0.5}$ diverges even though $a_n \\to 0$.
`,
  },
  {
    id: `math-11-78`,
    case_id: `MATH 11.78`,
    title: `Solar Farm: Revenue Growth vs. Rising Maintenance Costs`,
    subsection: `11.4`,
    context: `A solar farm's annual energy revenue starts at \\$150,000 and grows 1% per year with a = \\$150,000 and k = 1.01, while its annual maintenance cost starts at \\$120,000 but grows faster, at 3% per year with a = \\$120,000 and k = 1.03. Both are finite geometric series. Management compares cumulative profit, revenue total minus cost total, over both a 12-year and a 20-year horizon.`,
    statements: [
      `The cumulative 12-year revenue is approximately \\$1,902,375.45.`,
      `The cumulative 12-year maintenance cost is approximately \\$1,703,043.55.`,
      `The cumulative 12-year profit is approximately \\$199,331.90.`,
      `In year 12 alone, revenue of approximately \\$167,350.25 still exceeds maintenance cost of approximately \\$166,108.06, leaving a net positive of about \\$1,242.19.`,
      `Extending the horizon to 20 years, cumulative profit falls below the 12-year cumulative profit.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The cumulative 12-year revenue is approximately \\$1,902,375.45.**  (true)

Revenue rising by a fixed percentage each year is a finite geometric series, which sums to

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Revenue starts at $a = 150{,}000$ dollars and grows $1\\%$ a year, so $k = 1.01$, over $n = 12$ years:

$$s_{\\mathrm{rev},12} = 150{,}000 \\times \\frac{(1.01)^{12}-1}{1.01-1}$$

The twelfth power of the growth factor is

$$(1.01)^{12} = 1.126825$$

so the bracket becomes

$$\\frac{1.126825-1}{0.01} = \\frac{0.126825}{0.01} = 12.682503$$

and the twelve-year revenue total is

$$s_{\\mathrm{rev},12} = 150{,}000 \\times 12.682503$$

$$s_{\\mathrm{rev},12} = 1{,}902{,}375.45$$

Cumulative revenue over twelve years is about \\$1,902,375.45, exactly the figure claimed, so the statement is true.`,
      `**B) The cumulative 12-year maintenance cost is approximately \\$1,703,043.55.**  (true)

Maintenance cost also rises by a fixed percentage each year, so the same finite geometric sum applies:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

Cost starts at $a = 120{,}000$ dollars and grows $3\\%$ a year, so $k = 1.03$, over $n = 12$ years:

$$s_{\\mathrm{cost},12} = 120{,}000 \\times \\frac{(1.03)^{12}-1}{1.03-1}$$

The twelfth power of the growth factor is

$$(1.03)^{12} = 1.425761$$

so the bracket becomes

$$\\frac{1.425761-1}{0.03} = \\frac{0.425761}{0.03} = 14.192030$$

and the twelve-year cost total is

$$s_{\\mathrm{cost},12} = 120{,}000 \\times 14.192030$$

$$s_{\\mathrm{cost},12} = 1{,}703{,}043.55$$

Cumulative maintenance cost over twelve years is about \\$1,703,043.55, exactly the figure claimed, so the statement is true.`,
      `**C) The cumulative 12-year profit is approximately \\$199,331.90.**  (true)

Cumulative profit is the cumulative revenue total minus the cumulative cost total, so each series is summed separately first. Revenue, with $a = 150{,}000$ dollars and $k = 1.01$ over $n = 12$ years:

$$s_{\\mathrm{rev},12} = 150{,}000 \\times \\frac{(1.01)^{12}-1}{0.01}$$

$$(1.01)^{12} = 1.126825$$

$$s_{\\mathrm{rev},12} = 150{,}000 \\times 12.682503 = 1{,}902{,}375.45$$

Cost, with $a = 120{,}000$ dollars and $k = 1.03$ over the same twelve years:

$$s_{\\mathrm{cost},12} = 120{,}000 \\times \\frac{(1.03)^{12}-1}{0.03}$$

$$(1.03)^{12} = 1.425761$$

$$s_{\\mathrm{cost},12} = 120{,}000 \\times 14.192030 = 1{,}703{,}043.55$$

Subtracting:

$$1{,}902{,}375.45 - 1{,}703{,}043.55 = 199{,}331.90$$

Twelve-year cumulative profit is about \\$199,331.90, matching the claim, so the statement is true.`,
      `**D) In year 12 alone, revenue of approximately \\$167,350.25 still exceeds maintenance cost of approximately \\$166,108.06, leaving a net positive of about \\$1,242.19.**  (true)

A single year's revenue or cost is one term of its series, so the term formula applies rather than the sum formula:

$$a_t = a\\,k^{t-1}$$

Year 1 is the starting figure with no growth applied, so year 12 carries the exponent

$$t - 1 = 12 - 1 = 11$$

Revenue in year 12, with $a = 150{,}000$ dollars and $k = 1.01$:

$$a_{\\mathrm{rev},12} = 150{,}000 \\times (1.01)^{11}$$

$$(1.01)^{11} = 1.115668$$

$$a_{\\mathrm{rev},12} = 150{,}000 \\times 1.115668 = 167{,}350.25$$

Maintenance cost in year 12, with $a = 120{,}000$ dollars and $k = 1.03$:

$$a_{\\mathrm{cost},12} = 120{,}000 \\times (1.03)^{11}$$

$$(1.03)^{11} = 1.384234$$

$$a_{\\mathrm{cost},12} = 120{,}000 \\times 1.384234 = 166{,}108.06$$

Comparing the two and taking the difference:

$$167{,}350.25 > 166{,}108.06$$

$$167{,}350.25 - 166{,}108.06 = 1{,}242.19$$

Year 12 still ends in the black, but by only about \\$1,242.19 against revenue of over \\$167,000, so the faster-growing cost has almost closed a gap that began at \\$30,000 in year 1. All three figures in the claim match the calculation, so the statement is true.`,
      `**E) Extending the horizon to 20 years, cumulative profit falls below the 12-year cumulative profit.**  (true)

Both horizons have to be evaluated, since the claim compares one cumulative profit against another. Over twelve years, revenue with $a = 150{,}000$ dollars and $k = 1.01$ totals

$$s_{\\mathrm{rev},12} = 150{,}000 \\times \\frac{(1.01)^{12}-1}{0.01} = 150{,}000 \\times 12.682503 = 1{,}902{,}375.45$$

and cost with $a = 120{,}000$ dollars and $k = 1.03$ totals

$$s_{\\mathrm{cost},12} = 120{,}000 \\times \\frac{(1.03)^{12}-1}{0.03} = 120{,}000 \\times 14.192030 = 1{,}703{,}043.55$$

which leaves a twelve-year profit of

$$1{,}902{,}375.45 - 1{,}703{,}043.55 = 199{,}331.90$$

Extending to twenty years, the revenue series gives

$$(1.01)^{20} = 1.220190$$

$$s_{\\mathrm{rev},20} = 150{,}000 \\times \\frac{0.220190}{0.01} = 150{,}000 \\times 22.019004 = 3{,}302{,}850.60$$

and the cost series gives

$$(1.03)^{20} = 1.806111$$

$$s_{\\mathrm{cost},20} = 120{,}000 \\times \\frac{0.806111}{0.03} = 120{,}000 \\times 26.870374 = 3{,}224{,}444.94$$

so the twenty-year profit is

$$3{,}302{,}850.60 - 3{,}224{,}444.94 = 78{,}405.66$$

Comparing the two cumulative profits:

$$78{,}405.66 < 199{,}331.90$$

The longer horizon leaves about \\$120,926.24 less profit than the shorter one. Cost compounds at $3\\%$ while revenue compounds at only $1\\%$, so from year 13 onward each additional year adds more cost than revenue and eats into the surplus built up earlier. Cumulative profit therefore falls as the horizon lengthens, exactly as the claim says, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 78,
    solution_overview: `A solar farm's annual energy revenue starts at \\$150,000 and grows 1% per year with a = \\$150,000 and k = 1.01, while its annual maintenance cost starts at \\$120,000 but grows faster, at 3% per year with a = \\$120,000 and k = 1.03. Both are finite geometric series. Management compares cumulative profit, revenue total minus cost total, over both a 12-year and a 20-year horizon.

**Part 1: Setup.**

Revenue: $a = \\$150,000$, $k = 1.01$

Maintenance cost: $a = \\$120,000$, $k = 1.03$

Horizons: $n = 12$ and $n = 20$

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$; cumulative profit $= s_{\\mathrm{rev}} - s_{\\mathrm{cost}}$; year-$t$ term $= a k^{t-1}$

**Part 3: Solve.**

**1.** $s_{\\mathrm{rev},12} = \\$1,902,375.45$; $s_{\\mathrm{cost},12} = \\$1,703,043.55$; $12$-year profit $= \\$199,331.90$.

**2.** Year-$12$ revenue $\\$167,350.25$ minus cost $\\$166,108.06$ gives net $\\$1,242.19$.

**3.** Over $20$ years: $s_{\\mathrm{rev},20} = \\$3,302,850.60$; $s_{\\mathrm{cost},20} = \\$3,224,444.94$.
`,
  },
  {
    id: `math-11-79`,
    case_id: `MATH 11.79`,
    title: `Private Equity Fund: Recession vs. Recovery Cash-Flow Scenarios`,
    subsection: `11.4`,
    context: `A private equity fund's portfolio company currently generates \\$2,400,000 in annual free cash flow. Under a “recession” scenario, cash flow is expected to shrink 6% every year indefinitely with a = \\$2,400,000 and k = 0.94. Under a “recovery” scenario, cash flow instead grows 6% per year for the next 7 years before the fund exits with a = \\$2,400,000, k = 1.06, and n = 7.`,
    statements: [
      `Under the recession scenario, the infinite cumulative cash flow converges to \\$40,000,000.00.`,
      `Under the same recession scenario, the cumulative cash flow over just the first 15 years is approximately \\$22,000,000.00.`,
      `The 15-year recession total represents approximately 75% of the full infinite-horizon recession total.`,
      `Under the recovery scenario, the cumulative cash flow over the 7-year period, approximately \\$20,145,210.36, exceeds the full infinite-horizon recession total of \\$40,000,000.00.`,
      `In year 7 of the recovery scenario alone, cash flow is approximately \\$2,900,000.00.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) Under the recession scenario, the infinite cumulative cash flow converges to \\$40,000,000.00.**  (true)

Cash flow that shrinks by a fixed percentage every year forever is an infinite geometric series, which has a finite total when the size of the quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

A $6\\%$ annual contraction leaves $94\\%$ of the previous year's cash flow, so

$$k = 1 - 0.06 = 0.94$$

and the test is satisfied:

$$|0.94| < 1$$

Substituting the current free cash flow $a = 2{,}400{,}000$ dollars:

$$s_{\\infty} = \\frac{2{,}400{,}000}{1-0.94}$$

$$s_{\\infty} = \\frac{2{,}400{,}000}{0.06}$$

$$s_{\\infty} = 40{,}000{,}000$$

Cumulative cash flow under the recession path converges to \\$40,000,000.00, exactly the figure claimed, so the statement is true.`,
      `**B) Under the same recession scenario, the cumulative cash flow over just the first 15 years is approximately \\$22,000,000.00.**  (false)

The first fifteen years of the recession path form a finite geometric series, which sums to

$$s_n = a\\,\\frac{1-k^{n}}{1-k}$$

Substituting the current cash flow $a = 2{,}400{,}000$ dollars, the quotient $k = 0.94$, and $n = 15$:

$$s_{15} = 2{,}400{,}000 \\times \\frac{1-(0.94)^{15}}{1-0.94}$$

The fifteenth power of the quotient is

$$(0.94)^{15} = 0.395292$$

so the numerator of the bracket is

$$1 - 0.395292 = 0.604708$$

and dividing by the denominator gives

$$\\frac{0.604708}{0.06} = 10.078470$$

Multiplying by the current cash flow:

$$s_{15} = 2{,}400{,}000 \\times 10.078470$$

$$s_{15} = 24{,}188{,}328.05$$

Fifteen years produce about \\$24,188,328.05. The claim names \\$22,000,000.00, understating the total by roughly \\$2,188,328, so the statement is false.`,
      `**C) The 15-year recession total represents approximately 75% of the full infinite-horizon recession total.**  (false)

The claim measures a fifteen-year partial total against the infinite total, so both are needed. The finite sum with $a = 2{,}400{,}000$ dollars, $k = 0.94$, and $n = 15$ is

$$s_{15} = 2{,}400{,}000 \\times \\frac{1-(0.94)^{15}}{0.06}$$

$$(0.94)^{15} = 0.395292$$

$$s_{15} = 2{,}400{,}000 \\times 10.078470 = 24{,}188{,}328.05$$

The infinite total converges because $|0.94| < 1$:

$$s_{\\infty} = \\frac{2{,}400{,}000}{1-0.94} = \\frac{2{,}400{,}000}{0.06} = 40{,}000{,}000$$

Dividing one by the other gives the share:

$$\\frac{24{,}188{,}328.05}{40{,}000{,}000} = 0.60471$$

That is about $60.47\\%$, not the $75\\%$ in the claim, a gap of nearly fifteen percentage points, so the statement is false.`,
      `**D) Under the recovery scenario, the cumulative cash flow over the 7-year period, approximately \\$20,145,210.36, exceeds the full infinite-horizon recession total of \\$40,000,000.00.**  (false)

The recovery path runs for a fixed seven years, so it is a finite geometric series with $a = 2{,}400{,}000$ dollars, $k = 1.06$, and $n = 7$:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

$$s_7 = 2{,}400{,}000 \\times \\frac{(1.06)^{7}-1}{1.06-1}$$

The seventh power of the growth factor is

$$(1.06)^{7} = 1.503630$$

so the bracket becomes

$$\\frac{1.503630-1}{0.06} = \\frac{0.503630}{0.06} = 8.393838$$

and the seven-year total is

$$s_7 = 2{,}400{,}000 \\times 8.393838 = 20{,}145{,}210.36$$

which matches the dollar figure quoted in the claim. The recession path instead runs forever and converges, since $|0.94| < 1$:

$$s_{\\infty} = \\frac{2{,}400{,}000}{1-0.94} = 40{,}000{,}000$$

Comparing the two:

$$20{,}145{,}210.36 < 40{,}000{,}000$$

Seven years of growing cash flow deliver only about half of what an endless stream of shrinking cash flow accumulates, so the recovery total does not exceed the recession total and the statement is false.`,
      `**E) In year 7 of the recovery scenario alone, cash flow is approximately \\$2,900,000.00.**  (false)

A single year's cash flow is one term of the recovery series, so the term formula applies:

$$a_t = a\\,k^{t-1}$$

Year 1 is the current \\$2,400,000 with no growth applied, so year 7 carries the exponent

$$t - 1 = 7 - 1 = 6$$

Substituting $a = 2{,}400{,}000$ dollars and $k = 1.06$:

$$a_7 = 2{,}400{,}000 \\times (1.06)^{6}$$

The sixth power of the growth factor is

$$(1.06)^{6} = 1.418519$$

so the year-7 cash flow is

$$a_7 = 2{,}400{,}000 \\times 1.418519$$

$$a_7 = 3{,}404{,}445.87$$

The claim names \\$2,900,000.00, which falls short of the correct figure by

$$3{,}404{,}445.87 - 2{,}900{,}000.00 = 504{,}445.87$$

so the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 79,
    solution_overview: `A private equity fund's portfolio company currently generates \\$2,400,000 in annual free cash flow. Under a “recession” scenario, cash flow is expected to shrink 6% every year indefinitely with a = \\$2,400,000 and k = 0.94. Under a “recovery” scenario, cash flow instead grows 6% per year for the next 7 years before the fund exits with a = \\$2,400,000, k = 1.06, and n = 7.

**Part 1: Setup.**

a (current annual free cash flow) = \\$2,400,000

Recession: k = 0.94 (infinite horizon)

Recovery: k = 1.06, n = 7 years (finite horizon)

**Part 2: Formula.**

Infinite sum (|k| < 1): a/(1 - k)

Finite sum of first n terms: $s_n = a(1-k^{n})/(1-k)$ or $a(k^{n}-1)/(k-1)$

Term in year t: $a k^{t-1}$

**Part 3: Solve.**

**1.** Infinite recession sum: $2,400,000/(1 - 0.94) = 2,400,000/0.06 = \\$40,000,000.00$.

**2.** $0.94^{15} = 0.395291799$; $s_{15} = 2,400,000 \\times (1-0.395291799)/0.06 = 2,400,000 \\times 10.078470 = \\$24,188,328.05$ (not $\\$22,000,000.00$).

**3.** Ratio: $24,188,328.05/40,000,000.00 = 0.60471 \\approx 60.47\\%$ (not $75\\%$).

**4.** $1.06^{7} = 1.503630259$; $s_7 = 2,400,000 \\times (1.503630259-1)/0.06 = 2,400,000 \\times 8.393838 = \\$20,145,210.36$; this is LESS than the infinite recession total of $\\$40,000,000.00$, not more.

**5.** Year-$7$ recovery cash flow: $2,400,000 \\times 1.06^{6} = 2,400,000 \\times 1.418519 = \\$3,404,445.87$ (not $\\$2,900,000.00$).
`,
  },
  {
    id: `math-11-80`,
    case_id: `MATH 11.80`,
    title: `Capstone: A Three-Tranche Loan Portfolio and a Convergence Trap`,
    subsection: `11.4`,
    context: `A private lender values a portfolio of three loan tranches, valued in nominal undiscounted dollars, adding declining and growing streams together just as ordinary fixed amounts. Tranche 1 pays equal annual coupons of \\$25,000 for 9 years in the degenerate k = 1 case. Tranche 2 pays a growing coupon starting at \\$18,000, increasing 7% per year for 9 years with a = \\$18,000 and k = 1.07. Tranche 3 is a perpetual royalty starting at \\$30,000 that declines 8% per year forever with a = \\$30,000 and k = 0.92. Separately, an analyst proposes valuing a symbolic annual fee stream $f_n = 1,000/n$ dollars for n = 1, 2, 3, ….`,
    statements: [
      `Tranche 1 totals exactly \\$225,000.00.`,
      `Tranche 2 totals approximately \\$215,603.80.`,
      `Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00.`,
      `Tranche 3 must be excluded from any combined valuation, meaning the portfolio's correct combined total is just \\$440,603.80.`,
      `$f_{100} = \\$10.00$, and this alone is sufficient to guarantee that the fee stream converges to a finite total.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Tranche 1 totals exactly \\$225,000.00.**  (true)

Tranche 1 pays the same coupon every year, so consecutive payments have ratio

$$k = \\frac{25{,}000}{25{,}000} = 1$$

which is the degenerate case of a geometric series. With every term equal to the first, the total is simply the coupon multiplied by the number of payments:

$$s_n = a\\,n$$

Substituting $a = 25{,}000$ dollars and $n = 9$ years:

$$s_9 = 25{,}000 \\times 9$$

$$s_9 = 225{,}000$$

No ratio calculation is needed, and the general formula could not be used anyway because its denominator $k - 1$ would be zero here. Tranche 1 totals exactly \\$225,000.00, matching the claim, so the statement is true.`,
      `**B) Tranche 2 totals approximately \\$215,603.80.**  (true)

Tranche 2 pays a coupon that grows by a fixed percentage each year, so it is a finite geometric series:

$$s_n = a\\,\\frac{k^{n}-1}{k-1}$$

The opening coupon is $a = 18{,}000$ dollars, the coupon rises $7\\%$ a year so $k = 1.07$, and the tranche runs $n = 9$ years:

$$s_9 = 18{,}000 \\times \\frac{(1.07)^{9}-1}{1.07-1}$$

The ninth power of the growth factor is

$$(1.07)^{9} = 1.838459$$

so the bracket becomes

$$\\frac{1.838459-1}{0.07} = \\frac{0.838459}{0.07} = 11.977989$$

and the nine-year total is

$$s_9 = 18{,}000 \\times 11.977989$$

$$s_9 = 215{,}603.80$$

Tranche 2 totals about \\$215,603.80, matching the claim, so the statement is true.`,
      `**C) Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00.**  (true)

Tranche 3 is a royalty that declines by a fixed percentage forever, which is an infinite geometric series. Such a series has a finite total when the size of the quotient is below 1:

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad |k| < 1$$

An $8\\%$ annual decline leaves $92\\%$ of the previous royalty, so

$$k = 1 - 0.08 = 0.92$$

and the test is met:

$$|0.92| < 1$$

Substituting the opening royalty $a = 30{,}000$ dollars:

$$s_{\\infty} = \\frac{30{,}000}{1-0.92}$$

$$s_{\\infty} = \\frac{30{,}000}{0.08}$$

$$s_{\\infty} = 375{,}000$$

Tranche 3 is worth \\$375,000.00 in nominal undiscounted dollars, matching the claim. It is also the largest of the three streams even though its opening payment of \\$30,000 is modest, because an unlimited horizon lets a slowly declining royalty accumulate past both nine-year tranches. The statement is true.`,
      `**D) Tranche 3 must be excluded from any combined valuation, meaning the portfolio's correct combined total is just \\$440,603.80.**  (false)

A convergent infinite series produces an ordinary finite number, and finite numbers add like any other dollar amounts, so there is no rule that forces Tranche 3 out of the portfolio total. Its value is well defined because its quotient satisfies $|0.92| < 1$:

$$s_{\\infty} = \\frac{30{,}000}{1-0.92} = \\frac{30{,}000}{0.08} = 375{,}000$$

The other two tranches are finite by construction. Tranche 1 pays an unchanging coupon, the $k = 1$ case, so

$$s_9 = 25{,}000 \\times 9 = 225{,}000$$

and Tranche 2 grows $7\\%$ a year for nine years, so

$$(1.07)^{9} = 1.838459$$

$$s_9 = 18{,}000 \\times \\frac{0.838459}{0.07} = 18{,}000 \\times 11.977989 = 215{,}603.80$$

Adding all three nominal values:

$$225{,}000.00 + 215{,}603.80 + 375{,}000.00 = 815{,}603.80$$

The figure in the claim comes from adding only the first two:

$$225{,}000.00 + 215{,}603.80 = 440{,}603.80$$

which discards

$$815{,}603.80 - 440{,}603.80 = 375{,}000.00$$

of perfectly calculable value. Being infinite in horizon is not the same as being infinite in amount, and this royalty converges to a definite figure, so excluding it is unjustified and the portfolio total of \\$440,603.80 is wrong. The statement is false.`,
      `**E) $f_{100} = \\$10.00$, and this alone is sufficient to guarantee that the fee stream converges to a finite total.**  (false)

The value quoted in the first half of the claim is correct. Using the fee model $f_n = 1{,}000/n$ with $n = 100$:

$$f_{100} = \\frac{1{,}000}{100}$$

$$f_{100} = 10.00$$

The conclusion drawn from it does not hold. This fee stream is \\$1,000 times the harmonic series:

$$\\sum_{n=1}^{\\infty} \\frac{1{,}000}{n} = 1{,}000 \\sum_{n=1}^{\\infty} \\frac{1}{n}$$

and the p-series rule says $\\sum 1/n^{p}$ converges only when $p > 1$. Here the exponent is

$$p = 1$$

which fails the test, so the sum grows without bound even though the terms fade toward zero. Shrinking terms are necessary for convergence but never sufficient on their own, and a single small term such as $f_{100}$ says nothing about the total. The statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 80,
    solution_overview: `A private lender values a portfolio of three loan tranches, valued in nominal undiscounted dollars, adding declining and growing streams together just as ordinary fixed amounts. Tranche 1 pays equal annual coupons of \\$25,000 for 9 years in the degenerate k = 1 case. Tranche 2 pays a growing coupon starting at \\$18,000, increasing 7% per year for 9 years with a = \\$18,000 and k = 1.07. Tranche 3 is a perpetual royalty starting at \\$30,000 that declines 8% per year forever with a = \\$30,000 and k = 0.92. Separately, an analyst proposes valuing a symbolic annual fee stream $f_n = 1,000/n$ dollars for n = 1, 2, 3, ….

**Part 1: Setup.**

Tranche 1: $a = \\$25,000$, $k = 1$, $n = 9$

Tranche 2: $a = \\$18,000$, $k = 1.07$, $n = 9$

Tranche 3: $a = \\$30,000$, $k = 0.92$, infinite

Fee stream: $f_n = 1,000/n$

**Part 2: Formula.**

$k = 1$: $s_n = an$; finite ($k \\neq 1$): $s_n = a(k^{n}-1)/(k-1)$; infinite ($|k|<1$): $a/(1-k)$

$\\lim a_n = 0$ is necessary but not sufficient for convergence

**Part 3: Solve.**

**1.** Tranche $1$: $s = \\$225,000.00$; Tranche $2$: $s = \\$215,603.80$; Tranche $3$: $s = \\$375,000.00$ (largest).

**2.** Combined total: $\\$815,603.80$ — valid because a convergent infinite sum is a finite dollar amount that may be added to finite sums.

**3.** Fee stream: $f_{100} = \\$10.00$ is correct, but $p = 1$ (harmonic) diverges — terms $\\to 0$ is not enough for convergence.
`,
  },
  {
    id: `math-11-81`,
    case_id: `MATH 11.81`,
    title: `Present Value of a Single Future Payment for a Bakery Equipment Fund`,
    subsection: `11.5`,
    context: `Ms. Delgado, the bakery owner from a previous chapter, now wants to have exactly \\$5,000 available in 3 years to replace a commercial oven, and plans to make a single deposit today into an account earning 7% annual interest.`,
    statements: [
      `The amount she must deposit today is approximately \\$4,081.49.`,
      `If the interest rate were instead 5%, the required deposit today would be LOWER than \\$4,081.49.`,
      `The interest that will be earned over the 3 years is approximately \\$928.51.`,
      `If the target amount were doubled to \\$10,000, the required deposit today would also exactly double, to approximately \\$8,162.98.`,
      `If the horizon were extended to 6 years at the same 7% rate, the required deposit today would be exactly half of \\$4,081.49.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) The amount she must deposit today is approximately \\$4,081.49.**  (true)

A single deposit made today grows by the interest factor once per year, so the deposit $x$ and the target amount $A$ are linked by

$$x(1+r)^{n} = A$$

Solving for the deposit gives the present-value rule

$$x = \\frac{A}{(1+r)^{n}}$$

The oven costs $A = 5{,}000$ dollars in $n = 3$ years and the account earns $r = 0.07$ a year:

$$x = \\frac{5{,}000}{(1.07)^{3}}$$

The third power of the interest factor is

$$(1.07)^{3} = 1.225043$$

so the required deposit is

$$x = \\frac{5{,}000}{1.225043}$$

$$x = 4{,}081.49$$

Depositing about \\$4,081.49 today reaches \\$5,000 in three years, exactly the figure claimed, so the statement is true.`,
      `**B) If the interest rate were instead 5%, the required deposit today would be LOWER than \\$4,081.49.**  (false)

The deposit needed today comes from the present-value rule

$$x = \\frac{A}{(1+r)^{n}}$$

and the rate enters only through the denominator. A smaller rate makes $(1+r)^{n}$ smaller, and dividing the same target by a smaller number gives a larger answer, so cutting the rate must raise the deposit. Both cases confirm it. At $r = 0.07$, with $A = 5{,}000$ dollars and $n = 3$:

$$(1.07)^{3} = 1.225043$$

$$x = \\frac{5{,}000}{1.225043} = 4{,}081.49$$

At $r = 0.05$ over the same three years:

$$x' = \\frac{5{,}000}{(1.05)^{3}}$$

$$(1.05)^{3} = 1.157625$$

$$x' = \\frac{5{,}000}{1.157625}$$

$$x' = 4{,}319.19$$

Comparing the two deposits:

$$4{,}319.19 > 4{,}081.49$$

A weaker rate does less of the work, so Ms. Delgado would have to set aside \\$237.70 more today, not less. The claim says the deposit would be lower, which reverses the true direction, so the statement is false.`,
      `**C) The interest that will be earned over the 3 years is approximately \\$928.51.**  (false)

The interest earned is whatever the account adds on top of the deposit, so it is the target amount minus the amount put in today. The deposit follows from the present-value rule with $A = 5{,}000$ dollars, $r = 0.07$, and $n = 3$:

$$x = \\frac{A}{(1+r)^{n}} = \\frac{5{,}000}{(1.07)^{3}}$$

$$(1.07)^{3} = 1.225043$$

$$x = \\frac{5{,}000}{1.225043} = 4{,}081.49$$

Subtracting the deposit from the target gives the interest:

$$5{,}000.00 - 4{,}081.49$$

$$= 918.51$$

The account earns about \\$918.51 over the three years. The claim names \\$928.51, which is \\$10.00 too high, so the statement is false.`,
      `**D) If the target amount were doubled to \\$10,000, the required deposit today would also exactly double, to approximately \\$8,162.98.**  (true)

The present-value rule

$$x = \\frac{A}{(1+r)^{n}}$$

puts the target amount $A$ in the numerator on its own, so with the rate and the horizon held fixed the deposit is directly proportional to the target: doubling $A$ doubles $x$. Working the doubled case out from scratch confirms it. At the original target,

$$(1.07)^{3} = 1.225043$$

$$x = \\frac{5{,}000}{1.225043} = 4{,}081.49$$

With the target raised to $A = 10{,}000$ dollars over the same three years at the same $7\\%$:

$$x' = \\frac{10{,}000}{(1.07)^{3}}$$

$$x' = \\frac{10{,}000}{1.225043}$$

$$x' = 8{,}162.98$$

Checking the proportionality directly:

$$2 \\times 4{,}081.49 = 8{,}162.98$$

The doubled target needs exactly twice the deposit, \\$8,162.98, matching the claim, so the statement is true.`,
      `**E) If the horizon were extended to 6 years at the same 7% rate, the required deposit today would be exactly half of \\$4,081.49.**  (false)

Discounting compounds, so time enters the present-value rule through an exponent rather than a multiplier:

$$x = \\frac{A}{(1+r)^{n}}$$

Doubling $n$ squares the denominator instead of doubling it, which means the deposit is divided by $(1.07)^{3}$ a second time rather than cut in half. Both horizons show it. Over three years, with $A = 5{,}000$ dollars and $r = 0.07$:

$$(1.07)^{3} = 1.225043$$

$$x_3 = \\frac{5{,}000}{1.225043} = 4{,}081.49$$

Over six years at the same rate:

$$x_6 = \\frac{5{,}000}{(1.07)^{6}}$$

$$(1.07)^{6} = 1.500730$$

$$x_6 = \\frac{5{,}000}{1.500730}$$

$$x_6 = 3{,}331.71$$

Half of the three-year deposit would be

$$\\frac{4{,}081.49}{2} = 2{,}040.75$$

Comparing that with the true six-year figure:

$$3{,}331.71 > 2{,}040.75$$

The six-year deposit is about \\$1,290.96 above half, since the interest factor $1.225043$ is well short of the 2 that exact halving would require. The statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 81,
    solution_overview: `Ms. Delgado, the bakery owner from a previous chapter, now wants to have exactly \\$5,000 available in $3$ years to replace a commercial oven, and plans to make a single deposit today into an account earning $7\\%$ annual interest.

**Part 1: Setup.**

Target future amount $A = \\$5,000$; $r = 0.07$ (and $0.05$ for part b); annual compounding, single deposit; $t = 3$ years (and $6$ for part e).

**Part 2: Formula.**

$x(1+r)^{n}=A$, so the required deposit is $x=A/(1+r)^{n}$.

**Part 3: Solve.**

**1.** $x = 5,000/(1.07)^{3} = 5,000/1.225043 = \\$4,081.49$.

**2.** At $5\\%$, $x = 5,000/(1.05)^{3} = 5,000/1.157625 = \\$4,319.19$, higher than $\\$4,081.49$, not lower.

**3.** Interest earned: $5,000.00-4,081.49 = \\$918.51$ (not $\\$928.51$).

**4.** Doubling the target to $\\$10,000$ doubles $x$ to $\\$8,162.98$. Extending to $6$ years: $x = 5,000/(1.07)^{6} = \\$3,331.71$, which is not half of $\\$4,081.49$.`,
  },
  {
    id: `math-11-82`,
    case_id: `MATH 11.82`,
    title: `Future Value of a Freelancer's Present Deposit`,
    subsection: `11.5`,
    context: `A freelance graphic designer deposits \\$6,500 today into a business savings account earning 6% annual interest, and wants to project the accumulated value after 5 years, and again after a longer 10-year horizon.`,
    statements: [
      `The accumulated value after 5 years is approximately \\$8,698.47.`,
      `The interest earned during the first 5 years is approximately \\$2,198.47.`,
      `The accumulated value after 10 years is exactly double the 5-year value.`,
      `The interest earned during the SECOND 5-year period, approximately \\$2,942.04, is SMALLER than the interest earned during the FIRST 5-year period, approximately \\$2,198.47.`,
      `If the interest rate were instead 3%, the 5-year accumulated value would be exactly half of \\$8,698.47.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The accumulated value after 5 years is approximately \\$8,698.47.**  (true)

A single deposit left to compound grows by the interest factor once per year, so its accumulated value is

$$F = P(1+r)^{n}$$

The designer deposits $P = 6{,}500$ dollars, the account earns $r = 0.06$ a year, and the horizon is $n = 5$ years:

$$F(5) = 6{,}500 \\times (1.06)^{5}$$

The fifth power of the interest factor is

$$(1.06)^{5} = 1.338226$$

so the accumulated value is

$$F(5) = 6{,}500 \\times 1.338226$$

$$F(5) = 8{,}698.47$$

The account holds about \\$8,698.47 after five years, exactly the figure claimed, so the statement is true.`,
      `**B) The interest earned during the first 5 years is approximately \\$2,198.47.**  (true)

Interest earned is the accumulated value minus the money originally put in, so the balance is needed first. A single deposit compounds as

$$F = P(1+r)^{n}$$

with $P = 6{,}500$ dollars, $r = 0.06$, and $n = 5$:

$$F(5) = 6{,}500 \\times (1.06)^{5}$$

$$(1.06)^{5} = 1.338226$$

$$F(5) = 6{,}500 \\times 1.338226 = 8{,}698.47$$

Subtracting the original deposit:

$$8{,}698.47 - 6{,}500.00$$

$$= 2{,}198.47$$

The first five years earn about \\$2,198.47 in interest, matching the claim, so the statement is true.`,
      `**C) The accumulated value after 10 years is exactly double the 5-year value.**  (false)

Compound growth multiplies rather than adds, so the horizon sits in an exponent:

$$F = P(1+r)^{n}$$

Doubling $n$ squares the growth factor instead of doubling it. The five-year balance, with $P = 6{,}500$ dollars and $r = 0.06$, is

$$(1.06)^{5} = 1.338226$$

$$F(5) = 6{,}500 \\times 1.338226 = 8{,}698.47$$

The ten-year balance uses the tenth power of the same factor:

$$F(10) = 6{,}500 \\times (1.06)^{10}$$

$$(1.06)^{10} = 1.790848$$

$$F(10) = 6{,}500 \\times 1.790848$$

$$F(10) = 11{,}640.51$$

Exact doubling would require

$$2 \\times 8{,}698.47 = 17{,}396.94$$

Comparing that with the true ten-year figure:

$$11{,}640.51 < 17{,}396.94$$

The ten-year balance falls \\$5,756.43 short of double, because the growth factor over ten years is $1.790848$ rather than the $2.676452$ that doubling the balance would demand. The statement is false.`,
      `**D) The interest earned during the SECOND 5-year period, approximately \\$2,942.04, is SMALLER than the interest earned during the FIRST 5-year period, approximately \\$2,198.47.**  (false)

The interest earned in each five-year block is the change in the balance across that block, so both balances are needed. With $P = 6{,}500$ dollars and $r = 0.06$:

$$F(5) = 6{,}500 \\times (1.06)^{5}$$

$$(1.06)^{5} = 1.338226$$

$$F(5) = 6{,}500 \\times 1.338226 = 8{,}698.47$$

$$F(10) = 6{,}500 \\times (1.06)^{10}$$

$$(1.06)^{10} = 1.790848$$

$$F(10) = 6{,}500 \\times 1.790848 = 11{,}640.51$$

Interest in the first block is the balance after five years minus the original deposit:

$$8{,}698.47 - 6{,}500.00 = 2{,}198.47$$

Interest in the second block is the balance after ten years minus the balance after five:

$$11{,}640.51 - 8{,}698.47 = 2{,}942.04$$

Comparing the two blocks:

$$2{,}942.04 > 2{,}198.47$$

The second block earns \\$743.57 more than the first, because interest in years 6 through 10 accrues on a balance that already includes the first block's interest. The claim calls the second block smaller, which reverses the true order, so the statement is false.`,
      `**E) If the interest rate were instead 3%, the 5-year accumulated value would be exactly half of \\$8,698.47.**  (false)

The rate enters the compounding rule inside a power, not as a plain multiplier:

$$F = P(1+r)^{n}$$

so halving $r$ does not halve $F$. Only the growth on top of the deposit responds to the rate, and even that responds nonlinearly. At $r = 0.06$, with $P = 6{,}500$ dollars and $n = 5$:

$$(1.06)^{5} = 1.338226$$

$$F(5) = 6{,}500 \\times 1.338226 = 8{,}698.47$$

At $r = 0.03$ over the same five years:

$$F_{3\\%}(5) = 6{,}500 \\times (1.03)^{5}$$

$$(1.03)^{5} = 1.159274$$

$$F_{3\\%}(5) = 6{,}500 \\times 1.159274$$

$$F_{3\\%}(5) = 7{,}535.28$$

Half of the original five-year value would be

$$\\frac{8{,}698.47}{2} = 4{,}349.24$$

Comparing the two:

$$7{,}535.28 > 4{,}349.24$$

The lower rate still returns the full \\$6,500 principal plus \\$1,035.28 of interest, so the balance stays far above half. The statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 82,
    solution_overview: `A freelance graphic designer deposits \\$6,500 today into a business savings account earning $6\\%$ annual interest, and wants to project the accumulated value after $5$ years, and again after a longer $10$-year horizon.

**Part 1: Setup.**

Present deposit $P = \\$6,500$; $r = 0.06$ (and $0.03$ for part e); annual compounding, single deposit; $n = 5$ years (and $10$ for parts c, d).

**Part 2: Formula.**

A present deposit accumulates according to $F=P(1+r)^{n}$.

**Part 3: Solve.**

**1.** $F(5) = 6,500\\times(1.06)^{5} = 6,500\\times1.338226 = \\$8,698.47$; interest over five years $= \\$2,198.47$.

**2.** $F(10) = 6,500\\times(1.06)^{10} = 6,500\\times1.790847 = \\$11,640.51$, well short of double the $5$-year figure $\\$17,396.94$.

**3.** Interest in the second five years: $11,640.51-8,698.47 = \\$2,942.04$, larger than the first period's $\\$2,198.47$.

**4.** At $3\\%$, $F(5) = 6,500\\times(1.03)^{5} = \\$7,535.28$, which is not half of $\\$8,698.47$.`,
  },
  {
    id: `math-11-83`,
    case_id: `MATH 11.83`,
    title: `Future Value of an Ordinary Annuity for a Dental Clinic's Equipment Fund`,
    subsection: `11.5`,
    context: `A dental clinic owner deposits \\$2,000 at the end of each year into an equipment-replacement fund earning 5% annual interest, for 6 years, and wants to understand how this future value relates to its present-value equivalent.`,
    statements: [
      `The future value after 6 years is approximately \\$13,603.84.`,
      `The total interest earned over the 6 years is approximately \\$1,703.84.`,
      `The present-value equivalent of this future value is approximately \\$18,230.45.`,
      `If the annual deposit were increased by 50%, to \\$3,000, the 6-year future value would also rise by exactly 50%, to approximately \\$21,405.76.`,
      `If the number of annual deposits were doubled to 12 years, the future value would be LESS than double \\$13,603.84.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The future value after 6 years is approximately \\$13,603.84.**  (true)

Equal deposits made at the end of each year form an ordinary annuity, whose accumulated value is

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

The clinic deposits $a = 2{,}000$ dollars a year, the fund earns $r = 0.05$, and the horizon is $n = 6$ years:

$$F_6 = \\frac{2{,}000}{0.05}\\bigl[(1.05)^{6}-1\\bigr]$$

The leading fraction is

$$\\frac{2{,}000}{0.05} = 40{,}000$$

and the sixth power of the interest factor is

$$(1.05)^{6} = 1.340096$$

so the bracket becomes

$$1.340096 - 1 = 0.340096$$

Multiplying the two pieces:

$$F_6 = 40{,}000 \\times 0.340096$$

$$F_6 = 13{,}603.84$$

The fund holds about \\$13,603.84 after six years, exactly the figure claimed, so the statement is true.`,
      `**B) The total interest earned over the 6 years is approximately \\$1,703.84.**  (false)

Interest earned is the accumulated value minus the money actually deposited, so both pieces are needed. The six deposits accumulate as an ordinary annuity:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

$$F_6 = 40{,}000 \\times \\bigl[(1.05)^{6}-1\\bigr] = 40{,}000 \\times 0.340096 = 13{,}603.84$$

The deposits themselves total

$$2{,}000 \\times 6 = 12{,}000$$

dollars. Subtracting:

$$13{,}603.84 - 12{,}000.00$$

$$= 1{,}603.84$$

The six years earn about \\$1,603.84 in interest. The claim names \\$1,703.84, which is exactly \\$100.00 too high, so the statement is false.`,
      `**C) The present-value equivalent of this future value is approximately \\$18,230.45.**  (false)

Future value and present value are linked by the compounding factor

$$F_n = P_n(1+r)^{n}$$

so moving from a future amount back to today means dividing by that factor, not multiplying by it:

$$P_n = \\frac{F_n}{(1+r)^{n}}$$

The future value of the six deposits is

$$F_6 = 40{,}000 \\times \\bigl[(1.05)^{6}-1\\bigr] = 40{,}000 \\times 0.340096 = 13{,}603.84$$

Discounting it back six years at $5\\%$:

$$P_6 = \\frac{13{,}603.84}{(1.05)^{6}}$$

$$(1.05)^{6} = 1.340096$$

$$P_6 = \\frac{13{,}603.84}{1.340096}$$

$$P_6 = 10{,}151.40$$

The present-value equivalent is about \\$10,151.40, which is smaller than the future value, as any discounted amount must be. The claim names \\$18,230.45, the figure that comes from multiplying by $1.340096$ instead of dividing:

$$13{,}603.84 \\times 1.340096 = 18{,}230.45$$

That inverts the relationship and pushes the answer the wrong way, so the statement is false.`,
      `**D) If the annual deposit were increased by 50%, to \\$3,000, the 6-year future value would also rise by exactly 50%, to approximately \\$21,405.76.**  (false)

In the ordinary-annuity formula

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

the deposit $a$ appears as a plain multiplier, so with the rate and horizon fixed the future value is directly proportional to the deposit. Raising the deposit by half therefore raises the future value by exactly half, which is the part of the claim that holds. Computing the original case:

$$F_6 = 40{,}000 \\times \\bigl[(1.05)^{6}-1\\bigr] = 40{,}000 \\times 0.340096 = 13{,}603.84$$

Computing the raised case directly with $a = 3{,}000$ dollars:

$$F_6' = \\frac{3{,}000}{0.05}\\bigl[(1.05)^{6}-1\\bigr]$$

$$\\frac{3{,}000}{0.05} = 60{,}000$$

$$F_6' = 60{,}000 \\times 0.340096$$

$$F_6' = 20{,}405.76$$

Checking the proportionality:

$$1.5 \\times 13{,}603.84 = 20{,}405.76$$

The correct raised value is \\$20,405.76. The claim names \\$21,405.76, which overstates it by exactly \\$1,000.00, so the dollar figure fails even though the $50\\%$ reasoning is sound, and the statement is false.`,
      `**E) If the number of annual deposits were doubled to 12 years, the future value would be LESS than double \\$13,603.84.**  (false)

The number of deposits sits inside a power in the ordinary-annuity formula, so doubling it does more than double the result:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

Each of the first six deposits keeps compounding for another six years while six new deposits are added underneath, so the growth outpaces the extra contributions. Both horizons make it concrete. Over six years, with $a = 2{,}000$ dollars and $r = 0.05$:

$$(1.05)^{6} = 1.340096$$

$$F_6 = 40{,}000 \\times 0.340096 = 13{,}603.84$$

Over twelve years at the same deposit and rate:

$$F_{12} = 40{,}000 \\times \\bigl[(1.05)^{12}-1\\bigr]$$

$$(1.05)^{12} = 1.795856$$

$$1.795856 - 1 = 0.795856$$

$$F_{12} = 40{,}000 \\times 0.795856$$

$$F_{12} = 31{,}834.24$$

Exact doubling of the six-year value would be

$$2 \\times 13{,}603.84 = 27{,}207.68$$

Comparing the two:

$$31{,}834.24 > 27{,}207.68$$

Twelve years of deposits produce \\$4,626.56 more than double the six-year figure, so the future value is more than double, not less. The statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 83,
    solution_overview: `A dental clinic owner deposits \\$2,000 at the end of each year into an equipment fund earning $5\\%$ annual interest for $6$ years, and wants the future value and its present-value equivalent.

**Part 1: Setup.**

$a = \\$2,000$; $r = 0.05$; ordinary annuity; $n = 6$ (and $12$ for part e).

**Part 2: Formula.**

$F_n=(a/r)[(1+r)^{n}-1]$; $P_n=(a/r)[1-1/(1+r)^{n}]$; $F_n=P_n(1+r)^{n}$.

**Part 3: Solve.**

**1.** $F_6 = (2,000/0.05)[(1.05)^{6}-1] \\approx \\$13,603.84$; interest $= 13,603.84-12,000 = \\$1,603.84$.

**2.** $P_6 = F_6/(1.05)^{6} \\approx \\$10,151.40$ (not $\\$18,230.45$ from multiplying).

**3.** At $50\\%$ higher deposits, $F_6' = 13,603.84\\times1.5 = \\$20,405.76$.

**4.** For $n = 12$, $F_{12} \\approx \\$31,834.24$, well above double the $6$-year figure.`,
  },
  {
    id: `math-11-84`,
    case_id: `MATH 11.84`,
    title: `Future Value of an Ordinary Annuity for a Logistics Company's Fleet Fund`,
    subsection: `11.5`,
    context: `A logistics company deposits \\$3,500 at the end of each year into a fleet-replacement account earning 8% annual interest, for 10 years, and management wants to stress-test the fund under a longer horizon and a higher rate.`,
    statements: [
      `The future value after 10 years is approximately \\$50,702.97.`,
      `The total interest earned over the 10 years is approximately \\$15,702.97.`,
      `If the deposit period were extended to 20 years, the future value would be LESS than double \\$50,702.97.`,
      `The interest-only portion of the 10-year future value, approximately \\$15,702.97, exceeds the total principal deposited of \\$35,000.00.`,
      `If the interest rate rose to 10%, the 10-year future value would exceed \\$55,000.00.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The future value after 10 years is approximately \\$50,702.97.**  (true)

Deposits made at the end of each year form an ordinary annuity, whose accumulated value is

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

The firm deposits $a = 3{,}500$ dollars a year, the account earns $r = 0.08$, and the horizon is $n = 10$ years:

$$F_{10} = \\frac{3{,}500}{0.08}\\bigl[(1.08)^{10}-1\\bigr]$$

The leading fraction is

$$\\frac{3{,}500}{0.08} = 43{,}750$$

and the tenth power of the interest factor is

$$(1.08)^{10} = 2.158925$$

so the bracket becomes

$$2.158925 - 1 = 1.158925$$

Multiplying the two pieces:

$$F_{10} = 43{,}750 \\times 1.158925$$

$$F_{10} = 50{,}702.97$$

The fleet fund holds about \\$50,702.97 after ten years, exactly the figure claimed, so the statement is true.`,
      `**B) The total interest earned over the 10 years is approximately \\$15,702.97.**  (true)

Interest is whatever the account adds beyond the deposits themselves, so both amounts are needed. The ten deposits accumulate as an ordinary annuity:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

$$F_{10} = 43{,}750 \\times \\bigl[(1.08)^{10}-1\\bigr] = 43{,}750 \\times 1.158925 = 50{,}702.97$$

The principal contributed over the ten years is

$$3{,}500 \\times 10 = 35{,}000$$

dollars. Subtracting the principal from the accumulated value:

$$50{,}702.97 - 35{,}000.00$$

$$= 15{,}702.97$$

The fund earns about \\$15,702.97 in interest, matching the claim, so the statement is true.`,
      `**C) If the deposit period were extended to 20 years, the future value would be LESS than double \\$50,702.97.**  (false)

The horizon enters the ordinary-annuity formula inside a power, so doubling it lifts the result by more than a factor of two:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

The first ten deposits keep earning interest through the second decade while ten fresh deposits pile up beneath them. Both horizons show the effect. Over ten years, with $a = 3{,}500$ dollars and $r = 0.08$:

$$(1.08)^{10} = 2.158925$$

$$F_{10} = 43{,}750 \\times 1.158925 = 50{,}702.97$$

Over twenty years at the same deposit and rate:

$$F_{20} = 43{,}750 \\times \\bigl[(1.08)^{20}-1\\bigr]$$

$$(1.08)^{20} = 4.660957$$

$$4.660957 - 1 = 3.660957$$

$$F_{20} = 43{,}750 \\times 3.660957$$

$$F_{20} = 160{,}166.87$$

Exact doubling of the ten-year value would be

$$2 \\times 50{,}702.97 = 101{,}405.94$$

Comparing the two:

$$160{,}166.87 > 101{,}405.94$$

Twenty years produce \\$58,760.93 more than double the ten-year figure, so the future value is well above double rather than below it, and the statement is false.`,
      `**D) The interest-only portion of the 10-year future value, approximately \\$15,702.97, exceeds the total principal deposited of \\$35,000.00.**  (false)

Two components of the ten-year fund have to be separated. The principal is the sum of the deposits themselves:

$$3{,}500 \\times 10 = 35{,}000$$

dollars. The accumulated value comes from the ordinary-annuity formula with $a = 3{,}500$ dollars, $r = 0.08$, and $n = 10$:

$$F_{10} = 43{,}750 \\times \\bigl[(1.08)^{10}-1\\bigr] = 43{,}750 \\times 1.158925 = 50{,}702.97$$

so the interest portion is

$$50{,}702.97 - 35{,}000.00 = 15{,}702.97$$

Comparing the two components:

$$15{,}702.97 < 35{,}000.00$$

Interest amounts to less than half the principal over this horizon, falling short by \\$19,297.03. The claim has interest exceeding principal, so the statement is false.`,
      `**E) If the interest rate rose to 10%, the 10-year future value would exceed \\$55,000.00.**  (true)

A higher rate changes both the leading fraction and the growth factor, so the ten-year value has to be recomputed rather than scaled. The ordinary-annuity formula is

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

With the deposit held at $a = 3{,}500$ dollars, the rate raised to $r = 0.10$, and $n = 10$:

$$F_{10}' = \\frac{3{,}500}{0.10}\\bigl[(1.10)^{10}-1\\bigr]$$

The leading fraction becomes

$$\\frac{3{,}500}{0.10} = 35{,}000$$

and the tenth power of the interest factor is

$$(1.10)^{10} = 2.593742$$

so the bracket is

$$2.593742 - 1 = 1.593742$$

Multiplying:

$$F_{10}' = 35{,}000 \\times 1.593742$$

$$F_{10}' = 55{,}780.97$$

Comparing with the threshold in the claim:

$$55{,}780.97 > 55{,}000.00$$

The higher rate clears the threshold by about \\$780.97, so the statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 84,
    solution_overview: `A logistics company deposits \\$3,500 at the end of each year into a fleet-replacement account earning 8% annual interest, for 10 years, and management wants to stress-test the fund under a longer horizon and a higher rate.

**Part 1: Setup.**

Annual deposit a = \\$3,500

Nominal annual rate r = 8% = 0.08 (and 10% for part e)

Compounding: annual, ordinary annuity

n = 10 years (and 20 years for part c)

**Part 2: Formula.**

$F_n=(a/r)[(1+r)^{n}-1]$

**Part 3: Solve.**

**1.** $F_{10} = (3,500/0.08)[(1.08)^{10}-1] = 43,750 \\times 1.158925 = \\$50,702.97$.

**2.** Total deposits over ten years: $3,500 \\times 10 = \\$35,000.00$, so the interest earned is $50,702.97 - 35,000.00 = \\$15,702.97$.

**3.** Extending to $20$ years, $F_{20} = (3,500/0.08)[(1.08)^{20}-1] = 43,750 \\times 3.660957 = \\$160,166.87$, far MORE than double the $10$-year value of $\\$101,405.94$, not less.

**4.** That interest figure of $\\$15,702.97$ is smaller than the principal of $\\$35,000.00$, so it does not exceed it.

**5.** At the higher rate of $10\\%$, $F_{10} = (3,500/0.10)[(1.10)^{10}-1] = 35,000 \\times 1.593742 = \\$55,780.97$, which does exceed $\\$55,000.00$.`,
  },
  {
    id: `math-11-85`,
    case_id: `MATH 11.85`,
    title: `Present Value of an Ordinary Annuity for a Retiree's Withdrawal Plan`,
    subsection: `11.5`,
    context: `A retiree wants to withdraw \\$2,400 at the end of each year for the next 15 years from a retirement account earning 4.5% annual interest, and wants to know how much must be in the account today to support these withdrawals.`,
    statements: [
      `The present value needed today is approximately \\$25,775.15.`,
      `The total nominal withdrawals over 15 years, \\$36,000.00, exceed the required deposit of \\$25,775.15, illustrating that future dollars are worth less than present dollars.`,
      `If withdrawals were extended to 30 years at the same rate, the present value would exactly double, to approximately \\$51,550.30.`,
      `The gap between the total nominal withdrawals and today's required deposit, approximately \\$11,224.85, represents the total discount applied.`,
      `If the interest rate were higher, the required present-value deposit would be HIGHER than \\$25,775.15.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The present value needed today is approximately \\$25,775.15.**  (true)

Equal withdrawals taken at the end of each year form an ordinary annuity, and the amount needed today to support them is

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

The retiree withdraws $a = 2{,}400$ dollars a year, the account earns $r = 0.045$, and the plan runs $n = 15$ years:

$$P_{15} = \\frac{2{,}400}{0.045}\\Bigl[1-\\frac{1}{(1.045)^{15}}\\Bigr]$$

The leading fraction is

$$\\frac{2{,}400}{0.045} = 53{,}333.33$$

and the fifteenth power of the interest factor is

$$(1.045)^{15} = 1.935282$$

so the bracket becomes

$$1 - \\frac{1}{1.935282} = 1 - 0.516720 = 0.483280$$

Multiplying the two pieces:

$$P_{15} = 53{,}333.33 \\times 0.483280$$

$$P_{15} = 25{,}774.93$$

The account needs about \\$25,774.93 today, which matches the claimed \\$25,775.15 to the nearest dollar, so the statement is true.`,
      `**B) The total nominal withdrawals over 15 years, \\$36,000.00, exceed the required deposit of \\$25,775.15, illustrating that future dollars are worth less than present dollars.**  (true)

Two amounts are being compared: the raw sum of the withdrawals and the smaller amount that has to sit in the account today. The nominal withdrawals are fifteen equal payments with no discounting at all:

$$2{,}400 \\times 15 = 36{,}000$$

dollars. The amount needed today comes from the ordinary-annuity present-value formula with $a = 2{,}400$ dollars, $r = 0.045$, and $n = 15$:

$$P_{15} = \\frac{2{,}400}{0.045}\\Bigl[1-\\frac{1}{(1.045)^{15}}\\Bigr]$$

$$(1.045)^{15} = 1.935282$$

$$P_{15} = 53{,}333.33 \\times 0.483280 = 25{,}774.93$$

Comparing the two figures:

$$36{,}000.00 > 25{,}774.93$$

The nominal total exceeds the deposit by about \\$10,225, because each withdrawal is discounted back to a smaller present-day equivalent and the interest earned in the meantime covers the rest. That is exactly the point the claim makes about future dollars being worth less than present dollars, so the statement is true.`,
      `**C) If withdrawals were extended to 30 years at the same rate, the present value would exactly double, to approximately \\$51,550.30.**  (false)

The horizon enters the present-value formula through the discount term $1/(1+r)^{n}$, which shrinks toward zero as $n$ grows. Later withdrawals therefore add less and less, and doubling the number of years cannot double the present value:

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

Over fifteen years, with $a = 2{,}400$ dollars and $r = 0.045$:

$$(1.045)^{15} = 1.935282$$

$$P_{15} = 53{,}333.33 \\times \\bigl[1-0.516720\\bigr] = 53{,}333.33 \\times 0.483280 = 25{,}774.93$$

Over thirty years at the same rate:

$$P_{30} = 53{,}333.33\\Bigl[1-\\frac{1}{(1.045)^{30}}\\Bigr]$$

$$(1.045)^{30} = 3.745318$$

$$1 - \\frac{1}{3.745318} = 1 - 0.267002 = 0.732998$$

$$P_{30} = 53{,}333.33 \\times 0.732998$$

$$P_{30} = 39{,}093.23$$

Exact doubling would require about

$$2 \\times 25{,}774.93 = 51{,}549.86$$

Comparing the two:

$$39{,}093.23 < 51{,}549.86$$

The thirty-year requirement falls more than \\$12,000 short of double, so the present value does not double and the claimed \\$51,550.30 is far too high. The statement is false.`,
      `**D) The gap between the total nominal withdrawals and today's required deposit, approximately \\$11,224.85, represents the total discount applied.**  (false)

The gap in question is the nominal total of the withdrawals minus the amount needed today, so both figures are required. The nominal withdrawals are

$$2{,}400 \\times 15 = 36{,}000$$

dollars. The present value comes from the ordinary-annuity formula with $a = 2{,}400$ dollars, $r = 0.045$, and $n = 15$:

$$P_{15} = 53{,}333.33\\Bigl[1-\\frac{1}{(1.045)^{15}}\\Bigr]$$

$$(1.045)^{15} = 1.935282$$

$$P_{15} = 53{,}333.33 \\times 0.483280 = 25{,}774.93$$

Subtracting:

$$36{,}000.00 - 25{,}774.93$$

$$= 10{,}225.07$$

The total discount is about \\$10,225.07. The claim names \\$11,224.85, roughly \\$1,000 above the true gap, so the statement is false.`,
      `**E) If the interest rate were higher, the required present-value deposit would be HIGHER than \\$25,775.15.**  (false)

The rate appears twice in the present-value formula, and both appearances push the same way:

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

A larger $r$ shrinks the leading fraction $a/r$ and also makes $(1+r)^{n}$ bigger, which lifts the bracket only modestly. A stronger rate does more of the work of funding the withdrawals, so less money is needed up front. Both cases confirm it. At $r = 0.045$, with $a = 2{,}400$ dollars and $n = 15$:

$$(1.045)^{15} = 1.935282$$

$$P_{15} = 53{,}333.33 \\times 0.483280 = 25{,}774.93$$

At the higher rate $r = 0.06$ over the same fifteen years:

$$P_{15}' = \\frac{2{,}400}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{15}}\\Bigr]$$

$$\\frac{2{,}400}{0.06} = 40{,}000$$

$$(1.06)^{15} = 2.396558$$

$$1 - \\frac{1}{2.396558} = 1 - 0.417265 = 0.582735$$

$$P_{15}' = 40{,}000 \\times 0.582735 = 23{,}309.40$$

Comparing the two requirements:

$$23{,}309.40 < 25{,}774.93$$

The higher rate cuts the deposit needed by about \\$2,465, so a higher rate lowers the requirement rather than raising it. The statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `A retiree wants to withdraw \\$2,400 at the end of each year for the next 15 years from a retirement account earning 4.5% annual interest, and wants to know how much must be in the account today to support these withdrawals.

**Part 1: Setup.**

Annual withdrawal a = \\$2,400

Nominal annual rate r = 4.5% = 0.045 (and 6% for part e)

Compounding: annual, ordinary annuity

n = 15 years (and 30 years for part c)

**Part 2: Formula.**

$P_n=(a/r)[1-1/(1+r)^{n}]$

**Part 3: Solve.**

**1.** $P_{15} = (2,400/0.045)[1-1/(1.045)^{15}] = 53,333.33 \\times 0.483284 = \\$25,775.15$.

**2.** Total nominal withdrawals over fifteen years: $2,400 \\times 15 = \\$36,000.00$, well above $\\$25,775.15$.

**3.** Extending to $30$ years, $P_{30} = (2,400/0.045)[1-1/(1.045)^{30}] = 53,333.33 \\times 0.732998 = \\$39,091.65$, nowhere near double the $15$-year figure of $\\$51,550.30$.

**4.** The gap between nominal withdrawals and the present value is $36,000.00 - 25,775.15 = \\$10,224.85$, not $\\$11,224.85$ as stated.

**5.** At the higher rate of $6\\%$, $P_{15} = (2,400/0.06)[1-1/(1.06)^{15}] = 40,000 \\times 0.582735 = \\$23,309.40$, LOWER than $\\$25,775.15$, not higher.`,
  },
  {
    id: `math-11-86`,
    case_id: `MATH 11.86`,
    title: `Present Value of an Ordinary Annuity vs. a Perpetuity for a Nonprofit Scholarship`,
    subsection: `11.5`,
    context: `A nonprofit organization needs to fund \\$5,000 scholarship payments at the end of each year for 20 years, with an interest rate of 6%. The board also wants to compare this cost to funding the same \\$5,000 annual payment in perpetuity at the same rate.`,
    statements: [
      `The present value needed to fund the 20-year annuity is approximately \\$57,349.67.`,
      `The perpetuity value is approximately \\$83,333.33, exceeding the 20-year annuity's present value by approximately \\$25,983.66.`,
      `The 20-year annuity's present value represents approximately 72.82% of the equivalent perpetuity value.`,
      `If the term were extended to 40 years, the present value would rise to MORE than 95% of the perpetuity value.`,
      `The perpetuity formula is obtained by letting the number of payments grow toward infinity in the annuity present-value formula, so that the value converges to \\$83,333.33 as the limiting value.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The present value needed to fund the 20-year annuity is approximately \\$57,349.67.**  (true)

Equal payments made at the end of each year form an ordinary annuity, and the amount that must be set aside today is

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

The scholarship pays $a = 5{,}000$ dollars a year, the rate is $r = 0.06$, and the term is $n = 20$ years:

$$P_{20} = \\frac{5{,}000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{20}}\\Bigr]$$

The leading fraction is

$$\\frac{5{,}000}{0.06} = 83{,}333.33$$

and the twentieth power of the interest factor is

$$(1.06)^{20} = 3.207135$$

so the bracket becomes

$$1 - \\frac{1}{3.207135} = 1 - 0.311805 = 0.688195$$

Multiplying the two pieces:

$$P_{20} = 83{,}333.33 \\times 0.688195$$

$$P_{20} = 57{,}349.61$$

Funding twenty years of scholarships requires about \\$57,349.61 today, which matches the claimed \\$57,349.67 to the nearest dollar, so the statement is true.`,
      `**B) The perpetuity value is approximately \\$83,333.33, exceeding the 20-year annuity's present value by approximately \\$25,983.66.**  (true)

The claim makes two assertions, and both need checking. A payment that continues forever is a perpetuity, whose present value is the payment divided by the rate:

$$P = \\frac{a}{r}$$

With $a = 5{,}000$ dollars a year and $r = 0.06$:

$$P = \\frac{5{,}000}{0.06}$$

$$P = 83{,}333.33$$

The twenty-year annuity instead uses the finite present-value formula:

$$P_{20} = 83{,}333.33\\Bigl[1-\\frac{1}{(1.06)^{20}}\\Bigr]$$

$$(1.06)^{20} = 3.207135$$

$$P_{20} = 83{,}333.33 \\times 0.688195 = 57{,}349.61$$

Subtracting the annuity from the perpetuity gives the excess:

$$83{,}333.33 - 57{,}349.61$$

$$= 25{,}983.72$$

The perpetuity is worth about \\$83,333.33 and exceeds the twenty-year annuity by about \\$25,983.72, which matches the claimed \\$25,983.66 to the nearest dollar. Both parts of the claim hold, so the statement is true.`,
      `**C) The 20-year annuity's present value represents approximately 72.82% of the equivalent perpetuity value.**  (false)

The share is the twenty-year present value divided by the perpetuity value, so both are needed. The annuity, with $a = 5{,}000$ dollars, $r = 0.06$, and $n = 20$, is

$$P_{20} = \\frac{5{,}000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{20}}\\Bigr]$$

$$(1.06)^{20} = 3.207135$$

$$P_{20} = 83{,}333.33 \\times 0.688195 = 57{,}349.61$$

The perpetuity is

$$P = \\frac{5{,}000}{0.06} = 83{,}333.33$$

Dividing one by the other:

$$\\frac{57{,}349.61}{83{,}333.33} = 0.68820$$

That is $68.82\\%$, and the bracket $1 - 1/(1.06)^{20} = 0.688195$ gives the same share directly, since the perpetuity is exactly the leading fraction. The claim names $72.82\\%$, four percentage points too high, so the statement is false.`,
      `**D) If the term were extended to 40 years, the present value would rise to MORE than 95% of the perpetuity value.**  (false)

Doubling the term does not push the present value proportionally closer to the perpetuity, because payments in the distant years are discounted very heavily. The forty-year annuity uses the same formula with $a = 5{,}000$ dollars and $r = 0.06$:

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

$$P_{40} = 83{,}333.33\\Bigl[1-\\frac{1}{(1.06)^{40}}\\Bigr]$$

The fortieth power of the interest factor is

$$(1.06)^{40} = 10.285718$$

so the bracket becomes

$$1 - \\frac{1}{10.285718} = 1 - 0.097222 = 0.902778$$

and the present value is

$$P_{40} = 83{,}333.33 \\times 0.902778$$

$$P_{40} = 75{,}231.50$$

The perpetuity value is

$$P = \\frac{5{,}000}{0.06} = 83{,}333.33$$

so the share reached after forty years is

$$\\frac{75{,}231.50}{83{,}333.33} = 0.90278$$

Comparing with the threshold in the claim:

$$90.28\\% < 95\\%$$

Forty years of payments still leave the fund almost five percentage points short of the perpetuity, so the statement is false.`,
      `**E) The perpetuity formula is obtained by letting the number of payments grow toward infinity in the annuity present-value formula, so that the value converges to \\$83,333.33 as the limiting value.**  (true)

The present value of an $n$-year annuity is

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

and the only place $n$ appears is inside the discount term. With $r = 0.06$, the interest factor exceeds 1, so raising it to higher and higher powers sends it to infinity:

$$(1.06)^{n} \\to \\infty \\text{ as } n \\to \\infty$$

and its reciprocal therefore collapses:

$$\\frac{1}{(1.06)^{n}} \\to 0$$

A few values show how quickly this happens:

$$\\frac{1}{(1.06)^{20}} = 0.311805, \\qquad \\frac{1}{(1.06)^{40}} = 0.097222$$

With the discount term gone, the bracket approaches 1 and the whole expression settles on the leading fraction:

$$P_n \\to \\frac{a}{r} = \\frac{5{,}000}{0.06}$$

$$P_n \\to 83{,}333.33$$

That limiting value is precisely the perpetuity formula, and the number it converges to is \\$83,333.33, exactly as the claim describes. The statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 86,
    solution_overview: `A nonprofit organization needs to fund \\$5,000 scholarship payments at the end of each year for 20 years, with an interest rate of 6%. The board also wants to compare this cost to funding the same \\$5,000 annual payment in perpetuity at the same rate.

**Part 1: Setup.**

Annual payment a = \\$5,000

Nominal annual rate r = 6% = 0.06

Compounding: annual, ordinary annuity / perpetuity

n = 20 years (and 40 years for part d)

**Part 2: Formula.**

$P_n=(a/r)[1-1/(1+r)^{n}]$

Perpetuity: $P=a/r$ (limit as $n\\to\\infty$)

**Part 3: Solve.**

**1.** $P_{20} = (5,000/0.06)[1-1/(1.06)^{20}] = 83,333.33 \\times 0.688195 = \\$57,349.67$.

**2.** The perpetuity value is $5,000/0.06 = \\$83,333.33$, so the gap is $83,333.33 - 57,349.67 = \\$25,983.66$.

**3.** Dividing, $57,349.67 / 83,333.33 = 0.68820$, about $68.82\\%$, not $72.82\\%$.

**4.** Extending to $40$ years instead, $P_{40} = (5,000/0.06)[1-1/(1.06)^{40}] = 83,333.33 \\times 0.902778 = \\$75,231.50$, which is about $90.28\\%$ of the perpetuity value, not more than $95\\%$.

**5.** As $n$ grows without bound, $(1+r)^{n}\\to\\infty$, so $1/(1+r)^{n}\\to0$ and $P_n\\to a/r = 83,333.33$, confirming the perpetuity limit.`,
  },
  {
    id: `math-11-87`,
    case_id: `MATH 11.87`,
    title: `Comparing Payment Streams via Present Value for a Machinery Purchase`,
    subsection: `11.5`,
    context: `A supplier offers a company two payment options for a piece of machinery. Option 1: pay \\$18,000 today. Option 2: pay \\$2,500 at the end of each year for 9 years. Using an interest rate of 7%, the company wants to know which option has the lower present-value cost.`,
    statements: [
      `The present value of Option 2's payments is approximately \\$16,288.18.`,
      `Because \\$16,288.18 is less than \\$18,000.00, Option 2 is the financially better choice, saving approximately \\$1,811.82.`,
      `If the interest rate were only 4%, Option 2's present value would be LOWER than \\$16,288.18, making Option 1 even less attractive by comparison.`,
      `The total nominal payments under Option 2 over 9 years, \\$22,500.00, exceed the \\$18,000.00 lump-sum cost of Option 1 by \\$4,600.00.`,
      `Option 1's \\$18,000.00, if invested today at 7% instead of used for the machinery, would grow after 9 years to a future value of more than \\$34,000.00.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The present value of Option 2's payments is approximately \\$16,288.18.**  (true)

Option 2 is a stream of equal payments made at the end of each year, which is an ordinary annuity, and its cost today is

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

The payments are $a = 2{,}500$ dollars a year, the rate is $r = 0.07$, and the term is $n = 9$ years:

$$P_9 = \\frac{2{,}500}{0.07}\\Bigl[1-\\frac{1}{(1.07)^{9}}\\Bigr]$$

The leading fraction is

$$\\frac{2{,}500}{0.07} = 35{,}714.29$$

and the ninth power of the interest factor is

$$(1.07)^{9} = 1.838459$$

so the bracket becomes

$$1 - \\frac{1}{1.838459} = 1 - 0.543934 = 0.456066$$

Multiplying the two pieces:

$$P_9 = 35{,}714.29 \\times 0.456066$$

$$P_9 = 16{,}288.08$$

The nine annual payments cost about \\$16,288.08 in today's money, which matches the claimed \\$16,288.18 to the nearest dollar, so the statement is true.`,
      `**B) Because \\$16,288.18 is less than \\$18,000.00, Option 2 is the financially better choice, saving approximately \\$1,811.82.**  (false)

The ranking in the claim is right but the dollar amount is not, and the saving has to be computed to see that. Option 2's cost today is

$$P_9 = \\frac{2{,}500}{0.07}\\Bigl[1-\\frac{1}{(1.07)^{9}}\\Bigr]$$

$$(1.07)^{9} = 1.838459$$

$$P_9 = 35{,}714.29 \\times 0.456066 = 16{,}288.08$$

Option 1 costs its face amount of \\$18,000.00 today, since no discounting applies to money paid immediately. Comparing the two:

$$16{,}288.08 < 18{,}000.00$$

so Option 2 is indeed the cheaper choice. Subtracting to size the advantage:

$$18{,}000.00 - 16{,}288.08$$

$$= 1{,}711.92$$

The saving is about \\$1,711.92. The claim names \\$1,811.82, which overstates it by roughly \\$100 and also transposes the digits of the true figure, so the statement is false.`,
      `**C) If the interest rate were only 4%, Option 2's present value would be LOWER than \\$16,288.18, making Option 1 even less attractive by comparison.**  (false)

A lower discount rate shrinks the divisor applied to each future payment, so every payment counts for more today and the present value rises. The formula shows why:

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

Cutting $r$ enlarges the leading fraction $a/r$, and that effect dominates. Both rates can be computed. At $r = 0.07$, with $a = 2{,}500$ dollars and $n = 9$:

$$(1.07)^{9} = 1.838459$$

$$P_9 = 35{,}714.29 \\times \\bigl[1 - 0.543934\\bigr] = 35{,}714.29 \\times 0.456066 = 16{,}288.08$$

At $r = 0.04$ over the same nine years:

$$P_9' = \\frac{2{,}500}{0.04}\\Bigl[1-\\frac{1}{(1.04)^{9}}\\Bigr]$$

$$\\frac{2{,}500}{0.04} = 62{,}500$$

$$(1.04)^{9} = 1.423312$$

$$1 - \\frac{1}{1.423312} = 1 - 0.702587 = 0.297413$$

$$P_9' = 62{,}500 \\times 0.297413 = 18{,}588.33$$

Comparing the two:

$$18{,}588.33 > 16{,}288.08$$

At $4\\%$ the installment plan costs about \\$2,300 more in today's money, and it even rises above Option 1's \\$18,000.00, which makes Option 1 the better deal rather than a worse one. The claim reverses both effects, so the statement is false.`,
      `**D) The total nominal payments under Option 2 over 9 years, \\$22,500.00, exceed the \\$18,000.00 lump-sum cost of Option 1 by \\$4,600.00.**  (false)

Nominal payments carry no discounting, so Option 2's raw total is just the payment times the number of years:

$$2{,}500 \\times 9$$

$$= 22{,}500$$

dollars, which is the figure quoted in the claim. Option 1's lump sum is \\$18,000.00. Subtracting to find the excess:

$$22{,}500.00 - 18{,}000.00$$

$$= 4{,}500.00$$

Option 2 involves \\$4,500.00 more in nominal cash than Option 1, not \\$4,600.00. The claim overstates the excess by \\$100.00, so the statement is false.`,
      `**E) Option 1's \\$18,000.00, if invested today at 7% instead of used for the machinery, would grow after 9 years to a future value of more than \\$34,000.00.**  (false)

Money invested today grows by the interest factor once per year, so its accumulated value is

$$F = P(1+r)^{n}$$

Holding on to Option 1's cash means investing $P = 18{,}000$ dollars at $r = 0.07$ for $n = 9$ years:

$$F = 18{,}000 \\times (1.07)^{9}$$

The ninth power of the interest factor is

$$(1.07)^{9} = 1.838459$$

so the accumulated value is

$$F = 18{,}000 \\times 1.838459$$

$$F = 33{,}092.27$$

Comparing with the threshold in the claim:

$$33{,}092.27 < 34{,}000.00$$

The lump sum grows to about \\$33,092.27, falling \\$907.73 short of \\$34,000.00, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 87,
    solution_overview: `A supplier offers a company two payment options for a piece of machinery. Option $1$: pay \\$18,000 today. Option $2$: pay \\$2,500 at the end of each year for $9$ years. Using an interest rate of $7\\%$, which option has the lower present-value cost?

**Part 1: Setup.**

Option $1$: lump sum $\\$18,000$ today. Option $2$: $a = \\$2,500$, $n = 9$ years; $r = 0.07$ (and $0.04$ for part c); ordinary annuity.

**Part 2: Formula.**

$P_n=(a/r)[1-1/(1+r)^{n}]$; $F=P(1+r)^{n}$.

**Part 3: Solve.**

**1.** $P_9 = (2,500/0.07)[1-1/(1.07)^{9}] = 35,714.29\\times0.456069 = \\$16,288.18$; savings vs Option $1$: $18,000-16,288.18 = \\$1,711.82$ (not $\\$1,811.82$).

**2.** At $4\\%$, $P_9 = (2,500/0.04)[1-1/(1.04)^{9}] = 62,500\\times0.297413 = \\$18,588.31$, higher than at $7\\%$ because a lower rate discounts future payments less.

**3.** Total Option-$2$ payments: $2,500\\times9 = \\$22,500$, exceeding the lump sum by $\\$4,500$ (not $\\$4,600$).

**4.** Growing the lump sum forward: $F = 18,000(1.07)^{9} = 18,000\\times1.838459 = \\$33,092.26$, which does not exceed $\\$34,000$.`,
  },
  {
    id: `math-11-88`,
    case_id: `MATH 11.88`,
    title: `Comparing Savings Strategies via Future Value for a Construction Firm`,
    subsection: `11.5`,
    context: `A construction firm is choosing between two savings strategies for a future equipment purchase in 8 years, both earning 6% annual interest. Strategy A: deposit \\$12,000 today, all at once. Strategy B: deposit \\$1,400 at the end of each year for 8 years.`,
    statements: [
      `Strategy A's future value after 8 years is approximately \\$19,126.18.`,
      `Strategy B's future value after 8 years is approximately \\$14,856.46.`,
      `Strategy A yields a higher future value than Strategy B, by approximately \\$5,769.72.`,
      `The total cash committed under Strategy B over the 8 years, \\$11,200.00, is MORE than the \\$12,000.00 committed upfront under Strategy A.`,
      `If Strategy B's annual deposit were raised to \\$1,500, Strategy B's future value would still be LOWER than Strategy A's \\$19,126.18.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) Strategy A's future value after 8 years is approximately \\$19,126.18.**  (true)

Strategy A puts a single amount in today and leaves it to compound, so its accumulated value is

$$F = P(1+r)^{n}$$

The firm deposits $P = 12{,}000$ dollars, the account earns $r = 0.06$ a year, and the purchase is $n = 8$ years away:

$$F_A = 12{,}000 \\times (1.06)^{8}$$

The eighth power of the interest factor is

$$(1.06)^{8} = 1.593848$$

so the accumulated value is

$$F_A = 12{,}000 \\times 1.593848$$

$$F_A = 19{,}126.18$$

Strategy A is worth about \\$19,126.18 after eight years, exactly the figure claimed, so the statement is true.`,
      `**B) Strategy B's future value after 8 years is approximately \\$14,856.46.**  (false)

Strategy B deposits an equal amount at the end of each year, which is an ordinary annuity, and its accumulated value is

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

The deposits are $a = 1{,}400$ dollars a year, the rate is $r = 0.06$, and the horizon is $n = 8$ years:

$$F_B = \\frac{1{,}400}{0.06}\\bigl[(1.06)^{8}-1\\bigr]$$

The leading fraction is

$$\\frac{1{,}400}{0.06} = 23{,}333.33$$

and the eighth power of the interest factor is

$$(1.06)^{8} = 1.593848$$

so the bracket becomes

$$1.593848 - 1 = 0.593848$$

Multiplying the two pieces:

$$F_B = 23{,}333.33 \\times 0.593848$$

$$F_B = 13{,}856.46$$

Strategy B is worth about \\$13,856.46. The claim names \\$14,856.46, which is exactly \\$1,000.00 too high, so the statement is false.`,
      `**C) Strategy A yields a higher future value than Strategy B, by approximately \\$5,769.72.**  (false)

Both accumulated values are needed before the gap can be measured. Strategy A compounds a single deposit:

$$F_A = 12{,}000 \\times (1.06)^{8}$$

$$(1.06)^{8} = 1.593848$$

$$F_A = 12{,}000 \\times 1.593848 = 19{,}126.18$$

Strategy B accumulates as an ordinary annuity:

$$F_B = \\frac{1{,}400}{0.06}\\bigl[(1.06)^{8}-1\\bigr] = 23{,}333.33 \\times 0.593848 = 13{,}856.46$$

Comparing the two:

$$19{,}126.18 > 13{,}856.46$$

Strategy A does finish ahead, which is the part of the claim that holds. Subtracting to size the lead:

$$19{,}126.18 - 13{,}856.46$$

$$= 5{,}269.72$$

The true gap is about \\$5,269.72, not \\$5,769.72, an overstatement of \\$500.00, so the statement is false.`,
      `**D) The total cash committed under Strategy B over the 8 years, \\$11,200.00, is MORE than the \\$12,000.00 committed upfront under Strategy A.**  (false)

Cash committed is the raw money paid in, with no interest involved. Strategy B pays \\$1,400 at the end of each of eight years:

$$1{,}400 \\times 8$$

$$= 11{,}200$$

dollars, which is the figure quoted in the claim. Strategy A commits its full amount immediately:

$$12{,}000$$

dollars. Comparing the two commitments:

$$11{,}200.00 < 12{,}000.00$$

Strategy B puts in \\$800.00 less cash overall, so its total commitment is smaller than Strategy A's rather than larger. The statement is false.`,
      `**E) If Strategy B's annual deposit were raised to \\$1,500, Strategy B's future value would still be LOWER than Strategy A's \\$19,126.18.**  (true)

Raising the annual deposit to \\$1,500 makes Strategy B's total cash commitment

$$1{,}500 \\times 8 = 12{,}000$$

dollars, exactly matching Strategy A's upfront amount, so the comparison isolates timing rather than size. Strategy B's accumulated value comes from the ordinary-annuity formula with $a = 1{,}500$ dollars, $r = 0.06$, and $n = 8$:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

$$F_B' = \\frac{1{,}500}{0.06}\\bigl[(1.06)^{8}-1\\bigr]$$

$$\\frac{1{,}500}{0.06} = 25{,}000$$

$$(1.06)^{8} = 1.593848$$

$$F_B' = 25{,}000 \\times 0.593848$$

$$F_B' = 14{,}846.20$$

Strategy A compounds the same \\$12,000 for the full eight years:

$$F_A = 12{,}000 \\times 1.593848 = 19{,}126.18$$

Comparing the two:

$$14{,}846.20 < 19{,}126.18$$

Strategy B still trails by \\$4,279.98, because its final deposit earns no interest at all and its earlier deposits each miss several years of growth, while the lump sum compounds for the whole horizon. The statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 88,
    solution_overview: `A construction firm is choosing between two savings strategies for a future equipment purchase in 8 years, both earning 6% annual interest. Strategy A: deposit \\$12,000 today, all at once. Strategy B: deposit \\$1,400 at the end of each year for 8 years.

**Part 1: Setup.**

Strategy A: single deposit P = \\$12,000 today

Strategy B: annual deposit a = \\$1,400 per year (raised to \\$1,500 for part e)

Nominal annual rate r = 6% = 0.06

n = 8 years

**Part 2: Formula.**

$F=P(1+r)^{n}$

$F_n=(a/r)[(1+r)^{n}-1]$

**Part 3: Solve.**

**1.** $F_A = 12,000(1.06)^{8} = 12,000 \\times 1.593848 = \\$19,126.18$.

**2.** $F_B = (1,400/0.06)[(1.06)^{8}-1] = 23,333.33 \\times 0.593848 = \\$13,856.46$, not $\\$14,856.46$.

**3.** Gap: $19,126.18 - 13,856.46 = \\$5,269.72$, not $\\$5,769.72$.

**4.** Total Strategy-B deposits over the eight years: $1,400 \\times 8 = \\$11,200.00$, LESS than Strategy A's $\\$12,000.00$, not more.

**5.** Raising the deposit amount instead, $F_B' = (1,500/0.06)[(1.06)^{8}-1] = 25,000 \\times 0.593848 = \\$14,846.20$, still well below $\\$19,126.18$.`,
  },
  {
    id: `math-11-89`,
    case_id: `MATH 11.89`,
    title: `Future Value of an Annuity Due for a Gym's Equipment Upgrade Fund`,
    subsection: `11.5`,
    context: `A gym owner deposits \\$3,000 at the BEGINNING of each year as an annuity due for 6 years into an equipment-upgrade fund earning 5% annual interest. The owner wants to know how much this will be worth at the end of year 6, and how it compares to depositing the same amounts at the end of each year instead.`,
    statements: [
      `The future value of these deposits at the end of year 6 is approximately \\$21,426.05.`,
      `If the same \\$3,000 deposits were instead made at the END of each year, the future value would be LOWER than the annuity-due result.`,
      `The dollar gap between the annuity-due result and the ordinary-annuity result is approximately \\$1,120.29.`,
      `If the number of deposits were doubled to 12 years, the annuity-due future value would also exactly double, to approximately \\$42,852.10.`,
      `Because each payment in an annuity due occurs one period earlier than in an ordinary annuity, the annuity-due future value exceeds the ordinary-annuity future value by exactly one extra year's worth of interest growth, regardless of the number of payments or the interest rate.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The future value of these deposits at the end of year 6 is approximately \\$21,426.05.**  (true)

Deposits made at the start of each year form an annuity due, which is an ordinary annuity with every payment shifted one period earlier. That shift gives each payment one more year of growth, so the ordinary value is built first and then advanced one period:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr], \\qquad F_{\\mathrm{due}} = F_n(1+r)$$

With $a = 3{,}000$ dollars, $r = 0.05$, and $n = 6$:

$$F_{\\mathrm{ord}} = \\frac{3{,}000}{0.05}\\bigl[(1.05)^{6}-1\\bigr]$$

The leading fraction is

$$\\frac{3{,}000}{0.05} = 60{,}000$$

and the sixth power of the interest factor is

$$(1.05)^{6} = 1.340096$$

so the bracket is

$$1.340096 - 1 = 0.340096$$

$$F_{\\mathrm{ord}} = 60{,}000 \\times 0.340096 = 20{,}405.76$$

Advancing one period:

$$F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05$$

$$F_{\\mathrm{due}} = 21{,}426.05$$

The fund is worth about \\$21,426.05 at the end of year 6, exactly the figure claimed, so the statement is true.`,
      `**B) If the same \\$3,000 deposits were instead made at the END of each year, the future value would be LOWER than the annuity-due result.**  (true)

End-of-year deposits form an ordinary annuity, whose accumulated value is

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

With $a = 3{,}000$ dollars, $r = 0.05$, and $n = 6$:

$$F_{\\mathrm{ord}} = \\frac{3{,}000}{0.05}\\bigl[(1.05)^{6}-1\\bigr]$$

$$(1.05)^{6} = 1.340096$$

$$F_{\\mathrm{ord}} = 60{,}000 \\times 0.340096 = 20{,}405.76$$

Start-of-year deposits are the same payments shifted one period earlier, so each earns one extra year of interest and the total is scaled by the interest factor:

$$F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = 21{,}426.05$$

Comparing the two:

$$20{,}405.76 < 21{,}426.05$$

The end-of-year schedule finishes \\$1,020.29 lower, and it must, since multiplying by $1.05$ can only increase a positive amount. Under end-of-year timing the final deposit earns nothing at all before the fund is measured. The claim says the ordinary result is lower, so the statement is true.`,
      `**C) The dollar gap between the annuity-due result and the ordinary-annuity result is approximately \\$1,120.29.**  (false)

The gap is the difference between the two timings, so both accumulated values are needed. The ordinary annuity, with $a = 3{,}000$ dollars, $r = 0.05$, and $n = 6$, gives

$$F_{\\mathrm{ord}} = \\frac{3{,}000}{0.05}\\bigl[(1.05)^{6}-1\\bigr]$$

$$(1.05)^{6} = 1.340096$$

$$F_{\\mathrm{ord}} = 60{,}000 \\times 0.340096 = 20{,}405.76$$

The annuity due advances that figure one period:

$$F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = 21{,}426.05$$

Subtracting:

$$21{,}426.05 - 20{,}405.76$$

$$= 1{,}020.29$$

The gap is \\$1,020.29, which is also just one year's interest on the ordinary total, since $20{,}405.76 \\times 0.05 = 1{,}020.29$. The claim names \\$1,120.29, exactly \\$100.00 too high, so the statement is false.`,
      `**D) If the number of deposits were doubled to 12 years, the annuity-due future value would also exactly double, to approximately \\$42,852.10.**  (false)

The number of deposits sits inside a power, so doubling it more than doubles the accumulated value:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr], \\qquad F_{\\mathrm{due}} = F_n(1+r)$$

Over six years, with $a = 3{,}000$ dollars and $r = 0.05$:

$$(1.05)^{6} = 1.340096$$

$$F_{\\mathrm{ord}}(6) = 60{,}000 \\times 0.340096 = 20{,}405.76$$

$$F_{\\mathrm{due}}(6) = 20{,}405.76 \\times 1.05 = 21{,}426.05$$

Over twelve years at the same deposit and rate:

$$(1.05)^{12} = 1.795856$$

$$F_{\\mathrm{ord}}(12) = 60{,}000 \\times 0.795856 = 47{,}751.36$$

$$F_{\\mathrm{due}}(12) = 47{,}751.36 \\times 1.05$$

$$F_{\\mathrm{due}}(12) = 50{,}138.93$$

Exact doubling of the six-year figure would be

$$2 \\times 21{,}426.05 = 42{,}852.10$$

Comparing the two:

$$50{,}138.93 > 42{,}852.10$$

Twelve years of deposits produce \\$7,286.83 more than double, because the first six deposits keep compounding throughout the second six years. The value therefore does not merely double, so the statement is false.`,
      `**E) Because each payment in an annuity due occurs one period earlier than in an ordinary annuity, the annuity-due future value exceeds the ordinary-annuity future value by exactly one extra year's worth of interest growth, regardless of the number of payments or the interest rate.**  (true)

The two schedules contain the same payments, and the only difference is that every annuity-due payment lands one period earlier than its ordinary counterpart. Each payment therefore spends one extra period growing, so every term in the accumulated value picks up the same factor $(1+r)$. Factoring that common multiplier out of the whole sum gives

$$F_{\\mathrm{due}} = F_n(1+r)$$

where the ordinary value is

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]$$

Writing the due value out in full shows that nothing else changes:

$$F_{\\mathrm{due}} = \\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr](1+r)$$

The deposit $a$ and the count $n$ sit entirely inside the ordinary factor, so the extra $(1+r)$ multiplies whatever that factor happens to be, whatever values $a$ and $n$ take. Checking it on the gym's own numbers, with $a = 3{,}000$ dollars, $r = 0.05$, and $n = 6$:

$$F_{\\mathrm{ord}} = 60{,}000 \\times \\bigl[(1.05)^{6}-1\\bigr] = 60{,}000 \\times 0.340096 = 20{,}405.76$$

$$F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = 21{,}426.05$$

and at the longer horizon $n = 12$:

$$F_{\\mathrm{ord}} = 60{,}000 \\times 0.795856 = 47{,}751.36$$

$$F_{\\mathrm{due}} = 47{,}751.36 \\times 1.05 = 50{,}138.93$$

Both horizons carry the same multiplier $1.05$, one extra year of interest growth on the whole balance. The identity holds for any $a$, any $r$, and any $n$, exactly as the claim states, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 89,
    solution_overview: `A gym owner deposits \\$3,000 at the BEGINNING of each year as an annuity due for 6 years into an equipment-upgrade fund earning 5% annual interest. The owner wants to know how much this will be worth at the end of year 6, and how it compares to depositing the same amounts at the end of each year instead.

**Part 1: Setup.**

Annual deposit a = \\$3,000, made at the START of each year

Nominal annual rate r = 5% = 0.05

Compounding: annual, annuity due

n = 6 years (and 12 years for part d)

**Part 2: Formula.**

Future value of ordinary annuity: $F_n=(a/r)[(1+r)^{n}-1]$

Future value of annuity due: $F_{\\mathrm{due}}=F_n(1+r)$

**Part 3: Solve.**

**1.** $F_{\\mathrm{ordinary}} = (3,000/0.05)[(1.05)^{6}-1] = 60,000 \\times 0.340096 = \\$20,405.76$, so the annuity-due value is $F_{\\mathrm{due}} = 20,405.76 \\times 1.05 = \\$21,426.05$.

**2.** Gap: $21,426.05 - 20,405.76 = \\$1,020.29$, not $\\$1,120.29$.

**3.** Extending to $12$ years, $F_{\\mathrm{ordinary}} = (3,000/0.05)[(1.05)^{12}-1] = 60,000 \\times 0.795856 = \\$47,751.36$, so $F_{\\mathrm{due}} = 47,751.36 \\times 1.05 = \\$50,138.93$, well more than double the $6$-year figure of $\\$42,852.10$, not exactly double.

**4.** For any $n$ and $r$, this identity $F_{\\mathrm{due}} = F_{\\mathrm{ordinary}}(1+r)$ always holds, since shifting each payment one period earlier simply multiplies by one extra period of growth.`,
  },
  {
    id: `math-11-90`,
    case_id: `MATH 11.90`,
    title: `Present Value of an Annuity Due for a Commercial Lease`,
    subsection: `11.5`,
    context: `A tenant signs a 5-year commercial lease requiring rent payments of \\$24,000 at the BEGINNING of each year as an annuity due. The landlord's opportunity cost of capital is 6%, and the landlord wants to know the present value of this lease, and how it compares to an otherwise identical lease with end-of-year payments.`,
    statements: [
      `The present value of the lease payments today is approximately \\$107,162.61.`,
      `If the same \\$24,000 payments were instead due at the END of each year, the present value would be LOWER than the annuity-due result.`,
      `The dollar gap between the annuity-due present value and the ordinary-annuity present value is approximately \\$7,065.81.`,
      `If the lease term were extended to 10 years, the annuity-due present value would also exactly double, to approximately \\$214,325.22.`,
      `The annuity-due present value can also be computed as the first \\$24,000 payment plus the present value of an ordinary annuity of the remaining 4 payments.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The present value of the lease payments today is approximately \\$107,162.61.**  (true)

Rent paid at the start of each year forms an annuity due, which is an ordinary annuity with every payment moved one period earlier. Each payment is then discounted one period less, so the ordinary present value is computed first and then advanced by one period:

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr], \\qquad P_{\\mathrm{due}} = P_n(1+r)$$

With rent $a = 24{,}000$ dollars, an opportunity cost of $r = 0.06$, and a term of $n = 5$ years:

$$P_{\\mathrm{ord}} = \\frac{24{,}000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{5}}\\Bigr]$$

The leading fraction is

$$\\frac{24{,}000}{0.06} = 400{,}000$$

and the fifth power of the interest factor is

$$(1.06)^{5} = 1.338226$$

so the bracket becomes

$$1 - \\frac{1}{1.338226} = 1 - 0.747258 = 0.252742$$

$$P_{\\mathrm{ord}} = 400{,}000 \\times 0.252742 = 101{,}096.80$$

Advancing one period:

$$P_{\\mathrm{due}} = 101{,}096.80 \\times 1.06$$

$$P_{\\mathrm{due}} = 107{,}162.61$$

The lease is worth about \\$107,162.61 today, exactly the figure claimed, so the statement is true.`,
      `**B) If the same \\$24,000 payments were instead due at the END of each year, the present value would be LOWER than the annuity-due result.**  (true)

End-of-year rent forms an ordinary annuity, whose present value is

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]$$

With $a = 24{,}000$ dollars, $r = 0.06$, and $n = 5$:

$$P_{\\mathrm{ord}} = \\frac{24{,}000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{5}}\\Bigr]$$

$$(1.06)^{5} = 1.338226$$

$$P_{\\mathrm{ord}} = 400{,}000 \\times 0.252742 = 101{,}096.80$$

Start-of-year rent is the same five payments shifted one period earlier, so each is discounted one period less and the total is scaled up by the interest factor:

$$P_{\\mathrm{due}} = 101{,}096.80 \\times 1.06 = 107{,}162.61$$

Comparing the two:

$$101{,}096.80 < 107{,}162.61$$

End-of-year timing lowers the landlord's value by \\$6,065.81, since every payment arrives a year later and is discounted once more. The claim says the end-of-year present value is lower, so the statement is true.`,
      `**C) The dollar gap between the annuity-due present value and the ordinary-annuity present value is approximately \\$7,065.81.**  (false)

The gap comes from the difference between the two timings, so both present values are needed. The ordinary annuity, with $a = 24{,}000$ dollars, $r = 0.06$, and $n = 5$, gives

$$P_{\\mathrm{ord}} = \\frac{24{,}000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{5}}\\Bigr]$$

$$(1.06)^{5} = 1.338226$$

$$P_{\\mathrm{ord}} = 400{,}000 \\times 0.252742 = 101{,}096.80$$

The annuity due advances that figure one period:

$$P_{\\mathrm{due}} = 101{,}096.80 \\times 1.06 = 107{,}162.61$$

Subtracting:

$$107{,}162.61 - 101{,}096.80$$

$$= 6{,}065.81$$

The gap is \\$6,065.81, which equals one year's interest on the ordinary present value, since $101{,}096.80 \\times 0.06 = 6{,}065.81$. The claim names \\$7,065.81, exactly \\$1,000.00 too high, so the statement is false.`,
      `**D) If the lease term were extended to 10 years, the annuity-due present value would also exactly double, to approximately \\$214,325.22.**  (false)

Doubling the lease term cannot double the present value, because the discount term $1/(1+r)^{n}$ shrinks as the horizon grows and the later payments contribute progressively less. Both terms can be computed from

$$P_n = \\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr], \\qquad P_{\\mathrm{due}} = P_n(1+r)$$

Over five years, with $a = 24{,}000$ dollars and $r = 0.06$:

$$(1.06)^{5} = 1.338226$$

$$P_{\\mathrm{ord}}(5) = 400{,}000 \\times \\bigl[1 - 0.747258\\bigr] = 400{,}000 \\times 0.252742 = 101{,}096.80$$

$$P_{\\mathrm{due}}(5) = 101{,}096.80 \\times 1.06 = 107{,}162.61$$

Over ten years at the same rent and rate:

$$(1.06)^{10} = 1.790848$$

$$1 - \\frac{1}{1.790848} = 1 - 0.558395 = 0.441605$$

$$P_{\\mathrm{ord}}(10) = 400{,}000 \\times 0.441605 = 176{,}642.00$$

$$P_{\\mathrm{due}}(10) = 176{,}642.00 \\times 1.06$$

$$P_{\\mathrm{due}}(10) = 187{,}240.52$$

Exact doubling of the five-year figure would be

$$2 \\times 107{,}162.61 = 214{,}325.22$$

Comparing the two:

$$187{,}240.52 < 214{,}325.22$$

The ten-year lease is worth about \\$27,084.70 less than double the five-year lease, because years 6 through 10 are each discounted by more than the first five. The statement is false.`,
      `**E) The annuity-due present value can also be computed as the first \\$24,000 payment plus the present value of an ordinary annuity of the remaining 4 payments.**  (true)

An annuity due can be split at the first payment. The rent due today is paid immediately and so is not discounted at all, while the remaining four payments fall at the ends of the next four periods and form an ordinary annuity:

$$P_{\\mathrm{due}} = a + P_{n-1}$$

The first piece is simply

$$a = 24{,}000$$

dollars. The second piece uses the ordinary present-value formula with $a = 24{,}000$ dollars, $r = 0.06$, and $n - 1 = 4$:

$$P_4 = \\frac{24{,}000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{4}}\\Bigr]$$

The leading fraction is

$$\\frac{24{,}000}{0.06} = 400{,}000$$

and the fourth power of the interest factor is

$$(1.06)^{4} = 1.262477$$

so the bracket becomes

$$1 - \\frac{1}{1.262477} = 1 - 0.792094 = 0.207906$$

$$P_4 = 400{,}000 \\times 0.207906 = 83{,}162.40$$

Adding the two pieces:

$$24{,}000.00 + 83{,}162.40$$

$$= 107{,}162.40$$

The standard route multiplies the five-year ordinary value by the interest factor:

$$P_{\\mathrm{ord}}(5) = 400{,}000 \\times 0.252742 = 101{,}096.80$$

$$P_{\\mathrm{due}}(5) = 101{,}096.80 \\times 1.06 = 107{,}162.61$$

The two routes agree at \\$107,162.40 and \\$107,162.61, a difference of twenty-one cents that comes entirely from rounding the interest factors to six decimals. Splitting off the first payment is therefore a valid way to value the lease, so the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 90,
    solution_overview: `A tenant signs a 5-year commercial lease requiring rent payments of \\$24,000 at the BEGINNING of each year as an annuity due. The landlord's opportunity cost of capital is 6%, and the landlord wants to know the present value of this lease, and how it compares to an otherwise identical lease with end-of-year payments.

**Part 1: Setup.**

Annual lease payment a = \\$24,000, due at the START of each year

Nominal annual rate r = 6% = 0.06

Compounding: annual, annuity due

n = 5 years (and 10 years for part d)

**Part 2: Formula.**

Present value of ordinary annuity: $P_n=(a/r)[1-1/(1+r)^{n}]$

Present value of annuity due: $P_{\\mathrm{due}}=P_n(1+r)$

Alternative: $P_{\\mathrm{due}}=a+P_{n-1}$

**Part 3: Solve.**

**1.** $P_{\\mathrm{ordinary}} = (24,000/0.06)[1-1/(1.06)^{5}] = 400,000 \\times 0.252742 = \\$101,096.80$, so the annuity-due value is $P_{\\mathrm{due}} = 101,096.80 \\times 1.06 = \\$107,162.61$.

**2.** Gap: $107,162.61 - 101,096.80 = \\$6,065.81$, not $\\$7,065.81$.

**3.** Extending to $10$ years instead, $P_{\\mathrm{ordinary}} = (24,000/0.06)[1-1/(1.06)^{10}] = 400,000 \\times 0.441605 = \\$176,642.00$, so $P_{\\mathrm{due}} = 176,642.00 \\times 1.06 = \\$187,240.52$, less than double the $5$-year figure of $\\$214,325.22$, not exactly double.

**4.** As a check, $a + P_4 = 24,000+(24,000/0.06)[1-1/(1.06)^{4}] = 24,000 + 400,000 \\times 0.207906 = 24,000 + 83,162.40 = \\$107,162.40$, matching $P_{\\mathrm{due}}$ within rounding.`,
  },
  {
    id: `math-11-91`,
    case_id: `MATH 11.91`,
    title: `A Deferred Perpetuity for a Philanthropist's Endowed Fund`,
    subsection: `11.5`,
    context: `A philanthropist wants to establish an endowed fund that will pay \\$10,000 at the end of each year, forever, but the FIRST payment will not occur until the end of year 5, with payments running at t = 5, 6, 7, …. The fund earns 6% annual interest, and the philanthropist wants to know how much must be donated today.`,
    statements: [
      `The value of the perpetuity as of the end of year 4 is approximately \\$166,666.67.`,
      `Discounting this year-4 value back 4 years to today at 6% gives a present value of approximately \\$132,015.61.`,
      `If the first payment instead began immediately at the end of year 1, today's present value would be LOWER than the deferred value of \\$132,015.61.`,
      `If the deferral were extended so the first payment begins at the end of year 9, today's present value would be LESS than half of \\$132,015.61.`,
      `The ratio of the deferred present value to the immediate perpetuity value is exactly 0.8321.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The value of the perpetuity as of the end of year 4 is approximately \\$166,666.67.**  (true)

A perpetuity pays a fixed amount at the end of every period forever. Its value at the moment one full period before the first payment is the payment divided by the periodic interest rate:

$$V = \\frac{a}{r}$$

The endowment pays $a = 10,000$ at the end of each year and the fund earns $r = 6\\% = 0.06$ per year. The first payment arrives at the end of year 5, so the formula measures the stream one year earlier, at the end of year 4:

$$V_4 = \\frac{10,000}{0.06}$$

$$V_4 = 166,666.67$$

The claim puts the year-4 value at about \\$166,666.67, and the calculation returns \\$166,666.67, so the statement is true.`,
      `**B) Discounting this year-4 value back 4 years to today at 6% gives a present value of approximately \\$132,015.61.**  (true)

A value dated at a future point is moved to today by dividing it by the growth factor for the years in between:

$$PV_0 = \\frac{V_k}{(1+r)^{k}}$$

The perpetuity formula values the stream one period before its first payment, so with payments starting at the end of year 5 the stream is worth

$$V_4 = \\frac{10,000}{0.06} = 166,666.67$$

as of the end of year 4. That date sits $k = 4$ years ahead of today, and the fund earns $r = 0.06$:

$$PV_0 = \\frac{166,666.67}{(1.06)^{4}}$$

$$(1.06)^{4} \\approx 1.262477$$

$$PV_0 \\approx \\frac{166,666.67}{1.262477}$$

$$PV_0 \\approx 132,015.61$$

The claim gives \\$132,015.61 as today's required donation, and the calculation returns \\$132,015.61, so the statement is true.`,
      `**C) If the first payment instead began immediately at the end of year 1, today's present value would be LOWER than the deferred value of \\$132,015.61.**  (false)

An ordinary perpetuity whose first payment falls at the end of year 1 is already valued at today's date by the perpetuity formula, with no further discounting needed:

$$P_0 = \\frac{a}{r}$$

Substituting the \\$10,000 annual payment and the 6% rate:

$$P_0 = \\frac{10,000}{0.06}$$

$$P_0 = 166,666.67$$

The deferred version takes that same year-4 value and pushes it back four years:

$$PV_0 = \\frac{166,666.67}{(1.06)^{4}} \\approx 132,015.61$$

Comparing the two figures:

$$166,666.67 - 132,015.61 = 34,651.06$$

Starting payments at the end of year 1 instead of year 5 raises today's value by \\$34,651.06, so the immediate perpetuity is worth more than the deferred \\$132,015.61, not less. The claim says it would be lower, so the statement is false.`,
      `**D) If the deferral were extended so the first payment begins at the end of year 9, today's present value would be LESS than half of \\$132,015.61.**  (false)

Value the perpetuity one period before its first payment, then discount that value back to today:

$$PV_0 = \\frac{a/r}{(1+r)^{k}}$$

With the first payment moved to the end of year 9, the perpetuity is valued at the end of year 8, so $k = 8$ while the stream itself is unchanged:

$$\\frac{a}{r} = \\frac{10,000}{0.06} = 166,666.67$$

$$PV_0' = \\frac{166,666.67}{(1.06)^{8}}$$

$$(1.06)^{8} \\approx 1.593848$$

$$PV_0' \\approx \\frac{166,666.67}{1.593848}$$

$$PV_0' \\approx 104,568.80$$

Half of the four-year-deferred value is

$$\\frac{132,015.61}{2} = 66,007.81$$

Comparing the two:

$$104,568.80 - 66,007.81 = 38,561.00$$

Four extra years of deferral do cut today's value, but it still sits \\$38,561.00 above half of \\$132,015.61, so the statement is false.`,
      `**E) The ratio of the deferred present value to the immediate perpetuity value is exactly 0.8321.**  (false)

The deferred present value is the year-4 value divided by the four-year growth factor, so the ratio of the two is exactly the four-year discount factor:

$$\\frac{PV_0}{V_4} = \\frac{V_4/(1.06)^{4}}{V_4} = \\frac{1}{(1.06)^{4}}$$

Substituting the compounded factor:

$$(1.06)^{4} \\approx 1.262477$$

$$\\frac{1}{1.262477} \\approx 0.792094$$

The same number appears when the two dollar amounts are divided directly:

$$\\frac{132,015.61}{166,666.67} \\approx 0.7921$$

The claim states the ratio is exactly 0.8321:

$$0.8321 - 0.7921 = 0.0400$$

The true ratio is about 0.7921, four hundredths below the stated figure, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 91,
    solution_overview: `A philanthropist wants to establish an endowed fund that will pay \\$10,000 at the end of each year, forever, but the FIRST payment will not occur until the end of year 5, with payments running at t = 5, 6, 7, …. The fund earns 6% annual interest, and the philanthropist wants to know how much must be donated today.

**Part 1: Setup.**

Annual payment a = \\$10,000, first payment at end of year 5

Nominal annual rate r = 6% = 0.06

Compounding: annual, deferred ordinary perpetuity

Deferral: value one period before first payment falls at t = 4 (and t = 8 for part d)

**Part 2: Formula.**

Perpetuity value (as of one period before first payment): $V=a/r$

Discount back to today: $PV_0=V/(1+r)^{k}$, where k is the number of years from today to the valuation point

**Part 3: Solve.**

**1.** $V = 10,000/0.06 = 166,666.67$ as of the end of year $4$.

**2.** Discounting back, $PV_0 = 166,666.67/(1.06)^{4} = 166,666.67/1.262477 = \\$132,015.61$.

**3.** The immediate, non-deferred perpetuity is worth $10,000/0.06 = \\$166,666.67$ today, HIGHER than $\\$132,015.61$, not lower.

**4.** With the first payment deferred to year $9$ instead, $V$ at year $8$ is still $\\$166,666.67$, so $PV_0' = 166,666.67/(1.06)^{8} = 166,666.67/1.593848 = \\$104,568.80$, well above half of $\\$132,015.61$ (which would be $\\$66,007.81$).

**5.** Since $PV_0/V = 1/(1.06)^{4} = 0.792094$, the ratio is about $79.21\\%$, not $83.21\\%$ as stated.`,
  },
  {
    id: `math-11-92`,
    case_id: `MATH 11.92`,
    title: `Reverse-Engineering a Perpetual Preferred Stock's Fair Value`,
    subsection: `11.5`,
    context: `A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. The stock is currently trading at \\$65.00 per share. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.`,
    statements: [
      `The fair value per share is approximately \\$60.71.`,
      `At a market price of \\$65.00, the preferred stock is undervalued relative to its fair value.`,
      `If the required return fell to 4%, the fair value would rise to \\$116.25 per share.`,
      `This drop in the required return, from 7% to 4%, increases the fair value by MORE than 75%.`,
      `If instead the dividend were cut by 20% while the required return stayed at 7%, the fair value would fall to exactly \\$50.57.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The fair value per share is approximately \\$60.71.**  (true)

A share that pays a fixed dividend at the end of every year forever is a perpetuity, so its fair value is the annual dividend divided by the required return:

$$P = \\frac{a}{r}$$

The preferred share pays $a = 4.25$ each year and investors require $r = 7\\% = 0.07$ on this level of risk:

$$P = \\frac{4.25}{0.07}$$

$$P \\approx 60.714286$$

$$P \\approx 60.71$$

The claim puts the fair value at about \\$60.71 per share, and the calculation returns \\$60.71, so the statement is true.`,
      `**B) At a market price of \\$65.00, the preferred stock is undervalued relative to its fair value.**  (false)

Fair value for a fixed perpetual dividend comes from the perpetuity formula:

$$P = \\frac{a}{r}$$

Substituting the \\$4.25 dividend and the 7% required return:

$$P = \\frac{4.25}{0.07} \\approx 60.71$$

A share is undervalued when its market price sits below fair value, and overvalued when the price sits above it. Comparing the \\$65.00 market price with the computed fair value:

$$65.00 - 60.71 = 4.29$$

The market price stands \\$4.29 above fair value, which makes the share overvalued rather than undervalued. The claim says undervalued, so the statement is false.`,
      `**C) If the required return fell to 4%, the fair value would rise to \\$116.25 per share.**  (false)

The perpetuity value is the dividend divided by the required return, so a change in the required return alters only the denominator:

$$P' = \\frac{a}{r'}$$

Substituting the unchanged \\$4.25 dividend and the lower rate $r' = 4\\% = 0.04$:

$$P' = \\frac{4.25}{0.04}$$

$$P' = 106.25$$

The claim states the value would rise to \\$116.25 per share:

$$116.25 - 106.25 = 10.00$$

The stated figure overshoots the correct \\$106.25 by \\$10.00, so the statement is false.`,
      `**D) This drop in the required return, from 7% to 4%, increases the fair value by MORE than 75%.**  (false)

A percentage change compares the size of the move with the starting value:

$$\\text{percent change} = \\frac{P' - P}{P}$$

At the original 7% required return the fair value is

$$P = \\frac{4.25}{0.07} \\approx 60.714286$$

and at the lower 4% required return it is

$$P' = \\frac{4.25}{0.04} = 106.25$$

The size of the rise is

$$106.25 - 60.714286 = 45.535714$$

and the relative rise is

$$\\frac{45.535714}{60.714286} = 0.750000$$

$$0.750000 = 75.00\\%$$

The claim requires an increase strictly greater than 75%. The increase is exactly 75.00%, which does not clear that bar, so the statement is false.`,
      `**E) If instead the dividend were cut by 20% while the required return stayed at 7%, the fair value would fall to exactly \\$50.57.**  (false)

Fair value is directly proportional to the dividend, because the required return sits alone in the denominator:

$$P = \\frac{a}{r}$$

A 20% cut leaves 80% of the original dividend:

$$a' = 4.25 \\times 0.80$$

$$a' = 3.40$$

Substituting the reduced dividend at the unchanged 7% required return:

$$P'' = \\frac{3.40}{0.07}$$

$$P'' \\approx 48.571429$$

$$P'' \\approx 48.57$$

The claim states the value would fall to exactly \\$50.57:

$$50.57 - 48.57 = 2.00$$

The correct figure is \\$48.57, two dollars below the stated value, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 92,
    solution_overview: `A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. The stock is currently trading at \\$65.00 per share. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.

**Part 1: Setup.**

Annual dividend a = \\$4.25 per share (and \\$3.40 for part e)

Required return r = 7% = 0.07 (and 4% for parts c, d)

Compounding: annual, perpetuity

**Part 2: Formula.**

Perpetuity (fair value): $P=a/r$

**Part 3: Solve.**

**1.** $P = 4.25/0.07 = 60.71$ (precisely $\\$60.714286$).

**2.** The stock trades at $\\$65.00$, above the $\\$60.71$ fair value.

**3.** At the lower required return of $4\\%$, $P' = 4.25/0.04 = 106.25$, not $\\$116.25$.

**4.** The percentage increase is $(106.25 - 60.714286)/60.714286 = 0.750000$, exactly $75.00\\%$, not more than $75\\%$.

**5.** If instead the dividend were cut by $20\\%$, $P'' = 3.40/0.07 = 48.571429$, about $\\$48.57$, since $48.571429/60.714286 = 0.80$, an exact $20\\%$ drop because fair value is directly proportional to the dividend.`,
  },
  {
    id: `math-11-93`,
    case_id: `MATH 11.93`,
    title: `Combined Renovation Cost and Perpetual Maintenance Fund for a City Park`,
    subsection: `11.5`,
    context: `A city council wants to fund a park's perpetual maintenance, needing \\$15,000 per year forever, starting one year from now, PLUS an immediate one-time renovation cost of \\$50,000 paid today. The applicable interest rate is 4.5%, and the council also wants to see how a higher rate would change the total funding requirement.`,
    statements: [
      `The present value of just the perpetual maintenance payments is approximately \\$333,333.33.`,
      `Including the \\$50,000 immediate renovation cost, the total amount the city must set aside today is approximately \\$383,333.33.`,
      `If the interest rate were instead 6%, the total required funding would be approximately \\$300,000.00.`,
      `This 1.5-percentage-point rate increase reduces the total funding requirement by MORE than 25%.`,
      `If the council only needed the perpetuity and the rate were 6%, the required funding would be LESS than half of the original combined 4.5%-rate total.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The present value of just the perpetual maintenance payments is approximately \\$333,333.33.**  (true)

A payment stream that runs forever without growing is a perpetuity, and its value one period before the first payment is the annual amount divided by the interest rate:

$$P = \\frac{a}{r}$$

Maintenance costs $a = 15,000$ per year beginning one year from now, and the applicable rate is $r = 4.5\\% = 0.045$:

$$P = \\frac{15,000}{0.045}$$

$$P = 333,333.33$$

The claim gives about \\$333,333.33 for the maintenance payments on their own, and the calculation returns \\$333,333.33, so the statement is true.`,
      `**B) Including the \\$50,000 immediate renovation cost, the total amount the city must set aside today is approximately \\$383,333.33.**  (true)

The renovation is paid today and so needs no discounting, while the maintenance stream is a perpetuity. The total funding requirement adds the two:

$$T = C_0 + \\frac{a}{r}$$

Substituting the \\$15,000 annual maintenance at the 4.5% rate:

$$\\frac{15,000}{0.045} = 333,333.33$$

Adding the \\$50,000 renovation paid today:

$$T = 50,000 + 333,333.33$$

$$T = 383,333.33$$

The claim states the city must set aside about \\$383,333.33 today, and the total comes to \\$383,333.33, so the statement is true.`,
      `**C) If the interest rate were instead 6%, the total required funding would be approximately \\$300,000.00.**  (true)

A higher interest rate shrinks the perpetuity part of the requirement while leaving the cash paid today untouched:

$$T' = C_0 + \\frac{a}{r'}$$

Substituting the \\$15,000 annual maintenance at the higher rate $r' = 6\\% = 0.06$:

$$\\frac{15,000}{0.06} = 250,000.00$$

Adding the unchanged renovation cost:

$$T' = 50,000 + 250,000$$

$$T' = 300,000.00$$

The claim states the total requirement would be about \\$300,000.00, and the calculation returns \\$300,000.00, so the statement is true.`,
      `**D) This 1.5-percentage-point rate increase reduces the total funding requirement by MORE than 25%.**  (false)

A percentage reduction compares the size of the drop with the original requirement:

$$\\text{percent drop} = \\frac{T - T'}{T}$$

At 4.5% the requirement is the renovation plus the perpetuity:

$$T = 50,000 + \\frac{15,000}{0.045} = 383,333.33$$

At 6% it is

$$T' = 50,000 + \\frac{15,000}{0.06} = 300,000.00$$

The drop is

$$383,333.33 - 300,000.00 = 83,333.33$$

and as a share of the original requirement:

$$\\frac{83,333.33}{383,333.33} \\approx 0.217391$$

$$0.217391 \\approx 21.74\\%$$

The claim needs a reduction above 25%. The actual reduction is about 21.74%, more than three percentage points short, so the statement is false.`,
      `**E) If the council only needed the perpetuity and the rate were 6%, the required funding would be LESS than half of the original combined 4.5%-rate total.**  (false)

Two figures decide this claim: the perpetuity-only requirement at 6%, and half of the original combined requirement at 4.5%.

The perpetuity-only requirement at the higher rate is

$$P' = \\frac{15,000}{0.06}$$

$$P' = 250,000.00$$

The original combined requirement was the renovation plus the 4.5% perpetuity:

$$T = 50,000 + \\frac{15,000}{0.045} = 383,333.33$$

Half of that is

$$\\frac{383,333.33}{2} = 191,666.67$$

Comparing the two:

$$250,000.00 - 191,666.67 = 58,333.33$$

Raising the rate does shrink the perpetuity a great deal, but \\$250,000.00 still sits \\$58,333.33 above half of the original total, so it is not less than half and the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 93,
    solution_overview: `A city council wants to fund a park's perpetual maintenance, needing \\$15,000 per year forever, starting one year from now, PLUS an immediate one-time renovation cost of \\$50,000 paid today. The applicable interest rate is 4.5%, and the council also wants to see how a higher rate would change the total funding requirement.

**Part 1: Setup.**

Annual maintenance payment a = \\$15,000

Immediate renovation cost = \\$50,000

Nominal annual rate r = 4.5% = 0.045 (and 6% = 0.06 for parts c, d, e)

Compounding: annual, perpetuity + lump sum

**Part 2: Formula.**

Perpetuity: $P=a/r$

Total required funding = immediate cost + perpetuity value

**Part 3: Solve.**

**1.** The perpetuity value is $15,000/0.045 = \\$333,333.33$, so the total required today is $50,000.00 + 333,333.33 = \\$383,333.33$.

**2.** At the higher rate of $6\\%$, the perpetuity value falls to $15,000/0.06 = \\$250,000.00$, so the total becomes $50,000.00 + 250,000.00 = \\$300,000.00$.

**3.** The reduction is $383,333.33 - 300,000.00 = \\$83,333.33$, which is $83,333.33/383,333.33 = 0.21739$, about $21.74\\%$ of the original total, more than $20\\%$ but not more than $25\\%$.

**4.** Half of the original combined total is $\\$191,666.67$, and since $\\$250,000.00$ exceeds that, the perpetuity-only requirement at $6\\%$ is LARGER than half of the original total, not smaller.`,
  },
  {
    id: `math-11-94`,
    case_id: `MATH 11.94`,
    title: `Growing Perpetuity Valuation of a Rental Property's Escalating Cash Flows`,
    subsection: `11.5`,
    context: `A real estate investor is evaluating a rental property expected to generate a net cash flow of \\$24,000 at the end of year 1, growing at a constant 2.5% per year forever due to rent escalation clauses. The investor requires an 8% annual return on investments of this type.`,
    statements: [
      `The property's fair value is approximately \\$436,363.64.`,
      `If the cash flows did NOT grow, the plain-perpetuity fair value, \\$300,000.00, is HIGHER than the growing-perpetuity value of \\$436,363.64.`,
      `If the growth rate rose to 4%, the fair value would MORE than double, to over \\$872,727.28.`,
      `If the required return instead fell to 6%, the fair value would be approximately \\$715,714.29.`,
      `The growing-perpetuity valuation is only valid when the growth rate is below the required return; if the growth rate were to equal or exceed the 8% required return, the formula could not be used.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The property's fair value is approximately \\$436,363.64.**  (true)

A cash flow that grows at a constant rate forever is valued by the growing-perpetuity formula, which divides next year's cash flow by the spread between the required return and the growth rate:

$$P = \\frac{a_1}{r - g}$$

The property yields $a_1 = 24,000$ at the end of year 1, rents escalate at $g = 2.5\\% = 0.025$, and the investor requires $r = 8\\% = 0.08$:

$$r - g = 0.08 - 0.025 = 0.055$$

$$P = \\frac{24,000}{0.055}$$

$$P \\approx 436,363.64$$

The claim puts fair value at about \\$436,363.64, and the calculation returns \\$436,363.64, so the statement is true.`,
      `**B) If the cash flows did NOT grow, the plain-perpetuity fair value, \\$300,000.00, is HIGHER than the growing-perpetuity value of \\$436,363.64.**  (false)

With no growth at all the stream becomes a level perpetuity, valued by dividing the annual cash flow by the required return alone:

$$P_{\\text{level}} = \\frac{a}{r}$$

$$P_{\\text{level}} = \\frac{24,000}{0.08}$$

$$P_{\\text{level}} = 300,000.00$$

With 2.5% growth the denominator shrinks from the full required return to the spread $r - g$:

$$P = \\frac{24,000}{0.08 - 0.025} = \\frac{24,000}{0.055} \\approx 436,363.64$$

Comparing the two valuations:

$$436,363.64 - 300,000.00 = 136,363.64$$

The level-perpetuity value sits \\$136,363.64 below the growing-perpetuity value, because growth lifts every future cash flow. The claim calls the level value higher, so the statement is false.`,
      `**C) If the growth rate rose to 4%, the fair value would MORE than double, to over \\$872,727.28.**  (false)

A change in the growth rate moves only the spread in the denominator:

$$P' = \\frac{a_1}{r - g'}$$

Substituting $g' = 4\\% = 0.04$ with the required return still at 8%:

$$r - g' = 0.08 - 0.04 = 0.04$$

$$P' = \\frac{24,000}{0.04}$$

$$P' = 600,000.00$$

Doubling the original fair value would require

$$2 \\times 436,363.64 = 872,727.27$$

Comparing the new value with that threshold:

$$872,727.27 - 600,000.00 = 272,727.27$$

The reason it falls short is that the value moves with the reciprocal of the spread, and the spread does not halve here:

$$\\frac{0.055}{0.04} = 1.375$$

so the value rises by a factor of 1.375 rather than 2:

$$436,363.64 \\times 1.375 = 600,000.00$$

The value climbs to \\$600,000.00, a large rise, but it falls \\$272,727.27 short of double, so the statement is false.`,
      `**D) If the required return instead fell to 6%, the fair value would be approximately \\$715,714.29.**  (false)

The growing-perpetuity value depends on the spread between the required return and the growth rate, so a lower required return narrows that spread:

$$P'' = \\frac{a_1}{r' - g}$$

Substituting the lower required return $r' = 6\\% = 0.06$ with growth unchanged at 2.5%:

$$r' - g = 0.06 - 0.025 = 0.035$$

$$P'' = \\frac{24,000}{0.035}$$

$$P'' \\approx 685,714.29$$

The claim states about \\$715,714.29:

$$715,714.29 - 685,714.29 = 30,000.00$$

The stated figure sits exactly \\$30,000.00 above the correct \\$685,714.29, so the statement is false.`,
      `**E) The growing-perpetuity valuation is only valid when the growth rate is below the required return; if the growth rate were to equal or exceed the 8% required return, the formula could not be used.**  (true)

The growing perpetuity is the sum of a geometric series whose terms shrink only when each discounted cash flow is smaller than the one before it, which requires the growth rate to stay strictly below the required return:

$$P = \\frac{a_1}{r - g}, \\qquad r > g$$

Test the boundary case where growth equals the 8% required return:

$$r - g = 0.08 - 0.08 = 0$$

$$P = \\frac{24,000}{0}$$

Division by zero returns no value at all. Now test a growth rate above the required return, say $g = 0.09$:

$$r - g = 0.08 - 0.09 = -0.01$$

$$P = \\frac{24,000}{-0.01} = -2,400,000$$

A negative price for a stream of positive cash flows is meaningless, so the model genuinely breaks once growth reaches or passes the required return. The claim says exactly this, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 94,
    solution_overview: `A real estate investor is evaluating a rental property expected to generate a net cash flow of \\$24,000 at the end of year 1, growing at a constant 2.5% per year forever due to rent escalation clauses. The investor requires an 8% annual return on investments of this type.

**Part 1: Setup.**

Next-year cash flow a1 = \\$24,000

Growth rate g = 2.5% = 0.025 (and 0%, 4% for parts b, c)

Required return r = 8% = 0.08 (and 6% for part d)

Compounding: annual, growing perpetuity

**Part 2: Formula.**

Growing perpetuity: $P=a_1/(r-g)$, valid only for $r>g$

**Part 3: Solve.**

**1.** $P = 24,000/(0.08-0.025) = 24,000/0.055 = \\$436,363.64$.

**2.** Without any growth at all, $P = 24,000/0.08 = 300,000.00$, LOWER than the growing-perpetuity value of $\\$436,363.64$, not higher.

**3.** If growth instead rose to $4\\%$, $P' = 24,000/(0.08-0.04) = 600,000.00$, a large increase but NOT more than double the original $\\$436,363.64$ (double would be $\\$872,727.28$).

**4.** At the lower required return of $6\\%$, $P'' = 24,000/(0.06-0.025) = 24,000/0.035 = \\$685,714.29$, not $\\$715,714.29$.

**5.** As growth approaches the required return, the denominator $(r-g)$ shrinks toward zero and the formula becomes undefined, so growth rates at or above the required return break the model entirely.
`,
  },
  {
    id: `math-11-95`,
    case_id: `MATH 11.95`,
    title: `The Gordon Growth Model for a Pension Fund's Stock Valuation`,
    subsection: `11.5`,
    context: `A pension fund is valuing a stock that just paid a dividend of \\$3.00 per share, denoted D0, expected to grow at a constant 3% per year forever. The fund requires a 9% annual return, and the analyst must be careful to use the NEXT dividend, not the one just paid, in the valuation formula.`,
    statements: [
      `The next dividend is \\$3.09.`,
      `The fair value per share is approximately \\$54.50.`,
      `Mistakenly using the just-paid dividend instead of next year's dividend understates the correct fair value by \\$2.50.`,
      `If the growth rate were instead 5%, the fair value would be MORE than double \\$51.50.`,
      `If the growth rate equaled the required return exactly, the growing-perpetuity valuation would yield a present value of exactly \\$0.00.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The next dividend is \\$3.09.**  (true)

The dividend growth model discounts next year's dividend, so the dividend just paid has to be grown forward one year first:

$$D_1 = D_0(1 + g)$$

The share just paid $D_0 = 3.00$ and dividends grow at $g = 3\\% = 0.03$ per year:

$$D_1 = 3.00 \\times (1 + 0.03)$$

$$D_1 = 3.00 \\times 1.03$$

$$D_1 = 3.09$$

The claim states the next dividend is \\$3.09, and the calculation returns \\$3.09, so the statement is true.`,
      `**B) The fair value per share is approximately \\$54.50.**  (false)

Fair value under constant dividend growth is next year's dividend divided by the spread between the required return and the growth rate:

$$P = \\frac{D_1}{r - g}$$

Next year's dividend grows one year from the \\$3.00 just paid:

$$D_1 = 3.00 \\times 1.03 = 3.09$$

The spread between the 9% required return and the 3% growth rate is

$$r - g = 0.09 - 0.03 = 0.06$$

$$P = \\frac{3.09}{0.06}$$

$$P = 51.50$$

The claim states about \\$54.50 per share:

$$54.50 - 51.50 = 3.00$$

The stated value stands \\$3.00 above the correct \\$51.50, so the statement is false.`,
      `**C) Mistakenly using the just-paid dividend instead of next year's dividend understates the correct fair value by \\$2.50.**  (false)

Using the dividend just paid in place of next year's dividend changes only the numerator of the valuation:

$$P = \\frac{D_1}{r - g}, \\qquad P_{\\text{wrong}} = \\frac{D_0}{r - g}$$

The correct value grows the dividend forward one year, $D_1 = 3.00 \\times 1.03 = 3.09$, and divides by the spread $0.09 - 0.03 = 0.06$:

$$P = \\frac{3.09}{0.06} = 51.50$$

The mistaken value uses the \\$3.00 just paid:

$$P_{\\text{wrong}} = \\frac{3.00}{0.06} = 50.00$$

The size of the understatement is

$$51.50 - 50.00 = 1.50$$

The claim puts the error at \\$2.50, a dollar more than the true gap of \\$1.50, so the statement is false.`,
      `**D) If the growth rate were instead 5%, the fair value would be MORE than double \\$51.50.**  (false)

A change in the growth rate moves both the numerator and the denominator, so recompute next year's dividend first:

$$D_1' = D_0(1 + g')$$

$$D_1' = 3.00 \\times 1.05 = 3.15$$

Then apply the dividend growth model with the new spread:

$$r - g' = 0.09 - 0.05 = 0.04$$

$$P' = \\frac{3.15}{0.04}$$

$$P' = 78.75$$

Double the original fair value would be

$$2 \\times 51.50 = 103.00$$

Comparing the new value with that threshold:

$$103.00 - 78.75 = 24.25$$

Faster growth does lift the value sharply, but \\$78.75 still falls \\$24.25 short of double, so the statement is false.`,
      `**E) If the growth rate equaled the required return exactly, the growing-perpetuity valuation would yield a present value of exactly \\$0.00.**  (false)

The dividend growth model divides next year's dividend by the spread between the required return and the growth rate:

$$P = \\frac{D_1}{r - g}$$

Setting the growth rate equal to the 9% required return makes that spread vanish:

$$r - g = 0.09 - 0.09 = 0$$

$$P = \\frac{3.09}{0}$$

Division by zero has no value, and watching the price as growth creeps up to the required return shows which way it moves. Take $g = 0.0899$, just under the required return:

$$D_1 = 3.00 \\times 1.0899 \\approx 3.2697$$

$$r - g = 0.09 - 0.0899 = 0.0001$$

$$P = \\frac{3.2697}{0.0001} \\approx 32,697$$

The value grows without bound as the gap closes, rather than settling on any finite figure, and certainly not on \\$0.00. The claim names exactly \\$0.00, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 95,
    solution_overview: `A pension fund is valuing a stock that just paid a dividend of \\$3.00 per share, denoted D0, expected to grow at a constant 3% per year forever. The fund requires a 9% annual return, and the analyst must be careful to use the NEXT dividend, not the one just paid, in the valuation formula.

**Part 1: Setup.**

Just-paid dividend D0 = \\$3.00

Growth rate g = 3% = 0.03 (and 5% for part d)

Required return r = 9% = 0.09

Compounding: annual, growing perpetuity

**Part 2: Formula.**

$D_1=D_0(1+g)$

Growing perpetuity: $P=D_1/(r-g)$

**Part 3: Solve.**

**1.** $D_1 = 3.00\\times1.03 = 3.09$.

**2.** $P = 3.09/(0.09-0.03) = 3.09/0.06 = \\$51.50$.

**3.** Using the just-paid dividend by mistake instead gives $3.00/0.06 = \\$50.00$, so the correct value understates the wrong one by $51.50 - 50.00 = \\$1.50$, not $\\$2.50$.

**4.** At the higher growth rate of $5\\%$, $D_1' = 3.00\\times1.05 = 3.15$, so $P' = 3.15/(0.09-0.05) = 3.15/0.04 = \\$78.75$, well short of double the original $\\$51.50$ (double would be $\\$103.00$).

**5.** As growth approaches the required return of $9\\%$, the denominator $(r-g)$ shrinks toward zero, driving the result toward infinity, not toward $\\$0.00$.
`,
  },
  {
    id: `math-11-96`,
    case_id: `MATH 11.96`,
    title: `Comparing Level vs. Growing Royalty-Stream Purchase Deals for a Musician`,
    subsection: `11.5`,
    context: `A musician is offered two royalty-stream purchase deals for a song catalog, both priced at \\$170,000 and both requiring a 10% return to be considered a fair buy. Deal 1 is a level non-growing perpetuity of \\$18,000 per year. Deal 2 is a growing perpetuity starting at \\$14,000 next year, growing 4% per year forever.`,
    statements: [
      `Deal 1 is a good buy at its asking price.`,
      `Deal 2's fair value exceeds its asking price by more than \\$60,000.00.`,
      `Deal 1 offers the larger "margin of safety" of the two deals.`,
      `If Deal 2's growth rate were instead only 1%, its fair value would fall below its asking price.`,
      `Comparing the two original deals, Deal 1's fair value is MORE than Deal 2's fair value.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) Deal 1 is a good buy at its asking price.**  (true)

Deal 1 pays a level amount at the end of every year forever, which is a plain perpetuity valued at the payment divided by the required return:

$$P_1 = \\frac{a}{r}$$

The royalty stream pays $a = 18,000$ per year and the musician requires $r = 10\\% = 0.10$:

$$P_1 = \\frac{18,000}{0.10}$$

$$P_1 = 180,000.00$$

A purchase is a good buy when the fair value clears the asking price. Comparing with the \\$170,000 price:

$$180,000.00 - 170,000.00 = 10,000.00$$

The stream is worth \\$10,000.00 more than it costs, so buying it at \\$170,000 is worthwhile and the statement is true.`,
      `**B) Deal 2's fair value exceeds its asking price by more than \\$60,000.00.**  (true)

Deal 2 pays a growing stream forever, so its fair value is next year's payment divided by the spread between the required return and the growth rate:

$$P_2 = \\frac{a_1}{r - g}$$

The stream starts at $a_1 = 14,000$ next year and grows at $g = 4\\% = 0.04$, with a required return of $r = 10\\% = 0.10$:

$$r - g = 0.10 - 0.04 = 0.06$$

$$P_2 = \\frac{14,000}{0.06}$$

$$P_2 \\approx 233,333.33$$

Subtracting the asking price gives the cushion:

$$233,333.33 - 170,000.00 = 63,333.33$$

The claim requires a cushion above \\$60,000.00, and \\$63,333.33 clears it by \\$3,333.33, so the statement is true.`,
      `**C) Deal 1 offers the larger "margin of safety" of the two deals.**  (false)

The margin of safety on each deal is its fair value minus the \\$170,000 asking price, so both fair values are needed.

Deal 1 is a level perpetuity:

$$P_1 = \\frac{18,000}{0.10} = 180,000.00$$

$$180,000.00 - 170,000.00 = 10,000.00$$

Deal 2 is a growing perpetuity with spread $0.10 - 0.04 = 0.06$:

$$P_2 = \\frac{14,000}{0.06} \\approx 233,333.33$$

$$233,333.33 - 170,000.00 = 63,333.33$$

Comparing the two cushions:

$$63,333.33 - 10,000.00 = 53,333.33$$

Deal 2 carries the larger margin by \\$53,333.33, so it is Deal 2 rather than Deal 1 that offers more protection, and the statement is false.`,
      `**D) If Deal 2's growth rate were instead only 1%, its fair value would fall below its asking price.**  (true)

Only the spread in the denominator changes when the growth assumption is reduced:

$$P_2' = \\frac{a_1}{r - g'}$$

Substituting the unchanged \\$14,000 first-year royalty with $g' = 1\\% = 0.01$ and the required return still at 10%:

$$r - g' = 0.10 - 0.01 = 0.09$$

$$P_2' = \\frac{14,000}{0.09}$$

$$P_2' \\approx 155,555.56$$

Comparing this fair value with the asking price:

$$170,000.00 - 155,555.56 = 14,444.44$$

At only 1% growth the stream is worth \\$14,444.44 less than the seller is asking, so its fair value does fall below the price and the statement is true.`,
      `**E) Comparing the two original deals, Deal 1's fair value is MORE than Deal 2's fair value.**  (false)

Both deals are perpetuities, but they use different formulas because only one of them grows.

Deal 1 is level:

$$P_1 = \\frac{18,000}{0.10}$$

$$P_1 = 180,000.00$$

Deal 2 grows at 4% per year, so the denominator is the spread:

$$P_2 = \\frac{14,000}{0.10 - 0.04} = \\frac{14,000}{0.06}$$

$$P_2 \\approx 233,333.33$$

Comparing the two fair values:

$$233,333.33 - 180,000.00 = 53,333.33$$

Deal 2 is worth \\$53,333.33 more than Deal 1, even though its first payment is the smaller of the two, because perpetual growth lifts every later payment. The claim puts Deal 1 ahead, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 96,
    solution_overview: `A musician is offered two royalty-stream purchase deals for a song catalog, both priced at \\$170,000 and both requiring a 10% return to be considered a fair buy. Deal 1 is a level non-growing perpetuity of \\$18,000 per year. Deal 2 is a growing perpetuity starting at \\$14,000 next year, growing 4% per year forever.

**Part 1: Setup.**

Deal 1: level annual payment a = \\$18,000 (perpetuity)

Deal 2: next-year payment a1 = \\$14,000, growth g = 4% (and 1% for part d)

Required return r = 10% = 0.10

Asking price (both deals) = \\$170,000

**Part 2: Formula.**

Level perpetuity: $P=a/r$

Growing perpetuity: $P=a_1/(r-g)$

**Part 3: Solve.**

**1.** Deal $1$: $P = 18,000/0.10 = 180,000.00$, a margin of $180,000.00 - 170,000.00 = \\$10,000.00$ over the asking price.

**2.** Deal $2$: $P = 14,000/(0.10-0.04) = 14,000/0.06 = \\$233,333.33$.

**3.** This exceeds the asking price by a wide margin: $233,333.33 - 170,000.00 = \\$63,333.33$.

**4.** Deal $2$'s margin of $\\$63,333.33$ is far larger than Deal $1$'s $\\$10,000.00$, so Deal $2$ offers the bigger cushion, not Deal $1$.

**5.** At the lower growth rate of $1\\%$, $P' = 14,000/(0.10-0.01) = 14,000/0.09 = \\$155,555.56$, below the $\\$170,000.00$ asking price.

**6.** Comparing the two original deals, Deal $1$'s fair value of $\\$180,000.00$ is LESS than Deal $2$'s $\\$233,333.33$, not more.
`,
  },
  {
    id: `math-11-97`,
    case_id: `MATH 11.97`,
    title: `Present Value Under Continuous Compounding for a Bond Retirement Fund`,
    subsection: `11.5`,
    context: `A company needs to have \\$250,000 available in 12 years to retire a bond issue, and can invest in an account offering continuous compounding at a nominal annual rate of 5.5%. The CFO wants to know how much must be invested today, and how this compares to ordinary annual compounding at the same nominal rate.`,
    statements: [
      `The present value required today is approximately \\$129,213.75.`,
      `This continuously compounded present value is HIGHER than the present value using ordinary annual compounding at the same 5.5% nominal rate.`,
      `The difference between the annual-compounding present value and the continuous-compounding present value is approximately \\$4,280.35.`,
      `If the horizon were shortened to 6 years at the same continuous 5.5% rate, the present value required today would be LESS than half of \\$129,213.75.`,
      `The continuously compounded annual discount factor is approximately 0.9465, meaning about 5.35% of value is "lost" to discounting each year.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The present value required today is approximately \\$129,213.75.**  (true)

Under continuous compounding a future amount is brought back to today by multiplying it by the exponential discount factor:

$$S_0 = S(t)\\,e^{-rt}$$

The company needs $S(t) = 250,000$ in $t = 12$ years at a nominal rate of $r = 5.5\\% = 0.055$:

$$rt = 0.055 \\times 12 = 0.66$$

$$S_0 = 250,000\\,e^{-0.66}$$

$$e^{-0.66} \\approx 0.516851$$

$$S_0 \\approx 250,000 \\times 0.516851$$

$$S_0 \\approx 129,212.83$$

The claim gives about \\$129,213.75, and the computed deposit of \\$129,212.83 agrees with it to within a dollar on a six-figure amount, so the statement is true.`,
      `**B) This continuously compounded present value is HIGHER than the present value using ordinary annual compounding at the same 5.5% nominal rate.**  (false)

Two present values must be computed and compared. Under continuous compounding the discount factor is exponential:

$$S_0 = S(t)\\,e^{-rt}$$

$$S_0 = 250,000\\,e^{-0.66} \\approx 250,000 \\times 0.516851 \\approx 129,212.83$$

Under ordinary annual compounding the discount factor is a power of one plus the rate:

$$S_0^{\\text{ann}} = \\frac{S(t)}{(1+r)^{t}}$$

$$(1.055)^{12} \\approx 1.901207$$

$$S_0^{\\text{ann}} \\approx \\frac{250,000}{1.901207}$$

$$S_0^{\\text{ann}} \\approx 131,495.38$$

Comparing the two deposits:

$$131,495.38 - 129,212.83 = 2,282.55$$

Continuous compounding works the money harder, so it needs \\$2,282.55 less today to reach the same \\$250,000 target. The continuous figure is the lower one, and the claim calls it higher, so the statement is false.`,
      `**C) The difference between the annual-compounding present value and the continuous-compounding present value is approximately \\$4,280.35.**  (false)

The gap is the annual-compounding deposit minus the continuous-compounding deposit, so compute both.

Annual compounding at 5.5% for 12 years:

$$(1.055)^{12} \\approx 1.901207$$

$$S_0^{\\text{ann}} \\approx \\frac{250,000}{1.901207} \\approx 131,495.38$$

Continuous compounding at the same nominal rate:

$$e^{-0.055 \\times 12} = e^{-0.66} \\approx 0.516851$$

$$S_0 \\approx 250,000 \\times 0.516851 \\approx 129,212.83$$

The difference between them is

$$131,495.38 - 129,212.83 = 2,282.55$$

The claim states about \\$4,280.35:

$$4,280.35 - 2,282.55 = 1,997.80$$

The stated gap is nearly double the true gap of about \\$2,282.55, so the statement is false.`,
      `**D) If the horizon were shortened to 6 years at the same continuous 5.5% rate, the present value required today would be LESS than half of \\$129,213.75.**  (false)

Discounting is exponential in time, so cutting the horizon in half does not cut the required deposit in half. Recompute with the same formula:

$$S_0' = S(t)\\,e^{-rt}$$

With $t = 6$ years at $r = 0.055$:

$$rt = 0.055 \\times 6 = 0.33$$

$$S_0' = 250,000\\,e^{-0.33}$$

$$e^{-0.33} \\approx 0.718924$$

$$S_0' \\approx 250,000 \\times 0.718924$$

$$S_0' \\approx 179,730.93$$

Half of the twelve-year deposit is

$$\\frac{129,213.75}{2} = 64,606.88$$

Comparing:

$$179,730.93 - 64,606.88 = 115,124.05$$

With only six years to grow, the money needs a much larger head start, so the deposit lands \\$115,124.05 above half of the twelve-year figure rather than below it, and the statement is false.`,
      `**E) The continuously compounded annual discount factor is approximately 0.9465, meaning about 5.35% of value is "lost" to discounting each year.**  (true)

The one-year discount factor under continuous compounding is the exponential factor evaluated at $t = 1$:

$$\\text{factor} = e^{-r}$$

Substituting the nominal rate $r = 0.055$:

$$e^{-0.055} \\approx 0.946485$$

$$0.946485 \\approx 0.9465$$

The share of value given up over that year is one minus the factor:

$$1 - 0.9465 = 0.0535$$

$$0.0535 = 5.35\\%$$

So a dollar due one year from now is worth about 94.65 cents today, and roughly 5.35% of it is lost to one year of discounting. Both figures in the claim match the calculation, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 97,
    solution_overview: `A company needs to have \\$250,000 available in 12 years to retire a bond issue, and can invest in an account offering continuous compounding at a nominal annual rate of 5.5%. The CFO wants to know how much must be invested today, and how this compares to ordinary annual compounding at the same nominal rate.

**Part 1: Setup.**

Target future amount = \\$250,000

Nominal annual rate r = 5.5% = 0.055

Compounding: continuous (and ordinary annual, for comparison)

t = 12 years (and 6 years for part d)

**Part 2: Formula.**

Continuous-compounding present value: $S_0=S(t)e^{-rt}$

Ordinary annual present value: $S_0=S(t)/(1+r)^{t}$

**Part 3: Solve.**

**1.** $S_0 = 250,000e^{-0.66} = 250,000 \\times 0.516855 = \\$129,213.75$.

**2.** Under ordinary annual compounding instead, $S_0 = 250,000/(1.055)^{12} = 250,000/1.901209 = \\$131,495.10$, HIGHER than the continuous figure of $\\$129,213.75$, not lower, since continuous compounding is the most efficient schedule and needs less deposited today.

**3.** The correctly computed gap is $131,495.10 - 129,213.75 = \\$2,281.35$, not $\\$4,280.35$.

**4.** Shortening the horizon to $6$ years, $S_0' = 250,000e^{-0.33} = 250,000 \\times 0.718924 = \\$179,731.00$, far MORE than half of the $12$-year figure of $\\$129,213.75$, not less.

**5.** Since $e^{-0.055}\\approx0.9465$, about $5.35\\%$ of value is lost to discounting each year.
`,
  },
  {
    id: `math-11-98`,
    case_id: `MATH 11.98`,
    title: `Continuous-Compounding Lump Sum vs. Discrete Annuity for a Biotech Milestone`,
    subsection: `11.5`,
    context: `A biotech company sets aside \\$75,000 today in an account offering continuous compounding at a nominal 6.25% annual rate, aiming to accumulate funds for a 9-year R&D milestone. Management compares this to instead depositing the same \\$75,000 total, spread evenly as \\$8,333.33 at the end of each of the 9 years, into a separate account earning a discrete 6.25% annual rate.`,
    statements: [
      `The lump sum's future value under continuous compounding is approximately \\$131,629.13.`,
      `The annuity's future value is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.`,
      `The lump-sum strategy outperforms the annuity strategy by more than \\$30,000.00.`,
      `This gap arises largely because the lump sum earns interest on the FULL \\$75,000 from day one, while the annuity's later deposits earn interest for only a very short time before the horizon ends.`,
      `If the company had instead invested the full \\$75,000 using discrete ANNUAL compounding at the same 6.25% rate for 9 years, the result would EXCEED the annuity strategy's future value of \\$96,757.60.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The lump sum's future value under continuous compounding is approximately \\$131,629.13.**  (true)

A lump sum growing under continuous compounding is multiplied by the exponential growth factor:

$$S = P\\,e^{rt}$$

The company sets aside $P = 75,000$ at a nominal rate of $r = 6.25\\% = 0.0625$ for $t = 9$ years:

$$rt = 0.0625 \\times 9 = 0.5625$$

$$S = 75,000\\,e^{0.5625}$$

$$e^{0.5625} \\approx 1.755055$$

$$S \\approx 75,000 \\times 1.755055$$

$$S \\approx 131,629.10$$

The claim gives about \\$131,629.13, and the calculation returns \\$131,629.10, a match to within a few cents, so the statement is true.`,
      `**B) The annuity's future value is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.**  (true)

The annuity strategy pays a fixed amount at the end of each year, so its accumulated value uses the ordinary annuity future-value formula:

$$F_n = \\frac{a}{r}\\bigl[(1+r)^{n} - 1\\bigr]$$

Substituting $a = 8,333.33$, $r = 0.0625$ and $n = 9$:

$$(1.0625)^{9} \\approx 1.725681$$

$$1.725681 - 1 = 0.725681$$

$$\\frac{8,333.33}{0.0625} = 133,333.28$$

$$F_9 \\approx 133,333.28 \\times 0.725681$$

$$F_9 \\approx 96,757.39$$

The lump sum under continuous compounding grows to

$$75,000\\,e^{0.5625} \\approx 131,629.10$$

Comparing the two:

$$131,629.10 - 96,757.39 = 34,871.71$$

Both plans put in \\$75,000 in total, yet the annuity ends \\$34,871.71 lower, so the statement is true.`,
      `**C) The lump-sum strategy outperforms the annuity strategy by more than \\$30,000.00.**  (true)

The gap is the lump-sum result minus the annuity result, so compute each with its own formula.

Continuous growth of the lump sum:

$$S = 75,000\\,e^{0.0625 \\times 9} = 75,000\\,e^{0.5625}$$

$$S \\approx 75,000 \\times 1.755055 \\approx 131,629.10$$

Future value of nine year-end deposits:

$$F_9 = \\frac{8,333.33}{0.0625}\\bigl[(1.0625)^{9} - 1\\bigr]$$

$$F_9 \\approx 133,333.28 \\times 0.725681 \\approx 96,757.39$$

The difference is

$$131,629.10 - 96,757.39 = 34,871.71$$

The claim requires a gap above \\$30,000.00, and \\$34,871.71 clears that threshold by \\$4,871.71, so the statement is true.`,
      `**D) This gap arises largely because the lump sum earns interest on the FULL \\$75,000 from day one, while the annuity's later deposits earn interest for only a very short time before the horizon ends.**  (true)

The claim is about timing, and the deposit-by-deposit arithmetic shows it directly. Each annuity deposit grows for only the years remaining after it is paid:

$$\\text{value at year } 9 = 8,333.33 \\times (1.0625)^{9-k}$$

The first deposit, paid at the end of year 1, has eight years left to compound:

$$(1.0625)^{8} \\approx 1.624170$$

$$8,333.33 \\times 1.624170 \\approx 13,534.75$$

The last deposit, paid at the end of year 9, has no time left at all:

$$8,333.33 \\times (1.0625)^{0} = 8,333.33$$

The lump sum, by contrast, has the whole \\$75,000 working for all nine years:

$$75,000\\,e^{0.5625} \\approx 131,629.10$$

Adding the nine staggered deposits gives only \\$96,757.39, so the \\$34,871.71 shortfall comes from the later deposits arriving with almost no time to grow. The claim describes exactly this mechanism, so the statement is true.`,
      `**E) If the company had instead invested the full \\$75,000 using discrete ANNUAL compounding at the same 6.25% rate for 9 years, the result would EXCEED the annuity strategy's future value of \\$96,757.60.**  (true)

A lump sum under discrete annual compounding grows by the same factor once per year:

$$S = P(1+r)^{n}$$

Substituting $P = 75,000$, $r = 0.0625$ and $n = 9$:

$$(1.0625)^{9} \\approx 1.725681$$

$$S \\approx 75,000 \\times 1.725681$$

$$S \\approx 129,426.05$$

The annuity strategy accumulates

$$F_9 = \\frac{8,333.33}{0.0625}\\bigl[(1.0625)^{9} - 1\\bigr] \\approx 96,757.39$$

Comparing the two:

$$129,426.05 - 96,757.39 = 32,668.66$$

The single discrete lump sum finishes \\$32,668.66 above the annuity, so it does exceed the annuity result. It still trails the continuous version of the same lump sum,

$$75,000\\,e^{0.5625} \\approx 131,629.10$$

$$131,629.10 - 129,426.05 = 2,203.05$$

since compounding once a year credits interest less often than compounding continuously, but that gap of \\$2,203.05 is small next to the \\$32,668.66 advantage over the annuity. The statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 98,
    solution_overview: `A biotech company sets aside \\$75,000 today in an account offering continuous compounding at a nominal 6.25% annual rate, aiming to accumulate funds for a 9-year R&D milestone. Management compares this to instead depositing the same \\$75,000 total, spread evenly as \\$8,333.33 at the end of each of the 9 years, into a separate account earning a discrete 6.25% annual rate.

**Part 1: Setup.**

Lump sum $P = \\$75,000$ today; annuity $a = \\$8,333.33$ for $n = 9$; $r = 0.0625$

Compounding: continuous (lump sum) vs. discrete annual (annuity)

**Part 2: Formula.**

$S = Pe^{rt}$; $F_n = (a/r)[(1+r)^{n}-1]$; discrete $S = P(1+r)^{n}$

**Part 3: Solve.**

**1.** $S_{\\mathrm{cont}} = 75,000 e^{0.5625} = \\$131,629.13$.

**2.** $F_9 = \\$96,757.60$; gap $= \\$34,871.53$ (exceeds $\\$30,000$), because later annuity deposits compound for less time than the lump sum.

**3.** Full lump sum with discrete compounding: $S_{\\mathrm{discrete}} = \\$129,426.15$ — above the annuity but still below continuous.
`,
  },
  {
    id: `math-11-99`,
    case_id: `MATH 11.99`,
    title: `Mixed Financial Planning: Annuity Due, Continuous Compounding & Perpetuity`,
    subsection: `11.5`,
    context: `A small business owner is juggling three separate financial arrangements, all at rates around 6-8%. First, an equipment lessor requires payments of \\$4,200 at the BEGINNING of each year as an annuity due for 5 years at 8% interest. Second, the owner separately invests \\$20,000 today for 7 years under continuous compounding at a nominal 6% rate to fund a future purchase. Third, the owner is considering a perpetuity option paying \\$3,000 per year forever, at 8%, for a maintenance reserve fund.`,
    statements: [
      `The present value of the annuity-due lease payments is approximately \\$18,110.94.`,
      `The future value of these 5 annuity-due payments, evaluated at the end of year 5, is approximately \\$27,610.90.`,
      `The \\$20,000 investment under continuous compounding at a nominal 6% rate accumulates, after 7 years, to approximately \\$31,439.24.`,
      `The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value that is LESS than double the present value of the 5-year annuity-due lease payments.`,
      `Comparing the accumulated continuous-compounding investment after 7 years to the perpetuity's present value, the continuous-compounding result is LARGER.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The present value of the annuity-due lease payments is approximately \\$18,110.94.**  (true)

Lease payments made at the beginning of each year form an annuity due. Value the ordinary annuity first, then shift every payment one period earlier by multiplying by $(1+r)$:

$$P_{\\text{ord}} = \\frac{a}{r}\\Bigl[1 - \\frac{1}{(1+r)^{n}}\\Bigr], \\qquad P_{\\text{due}} = P_{\\text{ord}}(1+r)$$

Substituting $a = 4,200$, $r = 8\\% = 0.08$ and $n = 5$:

$$(1.08)^{5} \\approx 1.469328$$

$$\\frac{1}{1.469328} \\approx 0.680583$$

$$1 - 0.680583 = 0.319417$$

$$\\frac{4,200}{0.08} = 52,500$$

$$P_{\\text{ord}} \\approx 52,500 \\times 0.319417 \\approx 16,769.38$$

$$P_{\\text{due}} \\approx 16,769.38 \\times 1.08 \\approx 18,110.93$$

The claim gives about \\$18,110.94, and the calculation returns \\$18,110.93, so the statement is true.`,
      `**B) The future value of these 5 annuity-due payments, evaluated at the end of year 5, is approximately \\$27,610.90.**  (false)

The future value of an ordinary annuity accumulates each payment to the final date, and the annuity due earns one extra period of interest on every payment:

$$F_{\\text{ord}} = \\frac{a}{r}\\bigl[(1+r)^{n} - 1\\bigr], \\qquad F_{\\text{due}} = F_{\\text{ord}}(1+r)$$

Substituting $a = 4,200$, $r = 0.08$ and $n = 5$:

$$(1.08)^{5} \\approx 1.469328$$

$$1.469328 - 1 = 0.469328$$

$$\\frac{4,200}{0.08} = 52,500$$

$$F_{\\text{ord}} \\approx 52,500 \\times 0.469328 \\approx 24,639.72$$

$$F_{\\text{due}} \\approx 24,639.72 \\times 1.08 \\approx 26,610.90$$

The claim states about \\$27,610.90:

$$27,610.90 - 26,610.90 = 1,000.00$$

The stated figure sits exactly \\$1,000.00 above the correct \\$26,610.90, so the statement is false.`,
      `**C) The \\$20,000 investment under continuous compounding at a nominal 6% rate accumulates, after 7 years, to approximately \\$31,439.24.**  (false)

Money left to grow under continuous compounding is multiplied by the exponential growth factor:

$$S = P\\,e^{rt}$$

Substituting the separate investment of $P = 20,000$ at a nominal $r = 6\\% = 0.06$ for $t = 7$ years:

$$rt = 0.06 \\times 7 = 0.42$$

$$S = 20,000\\,e^{0.42}$$

$$e^{0.42} \\approx 1.521962$$

$$S \\approx 20,000 \\times 1.521962$$

$$S \\approx 30,439.23$$

The claim states about \\$31,439.24:

$$31,439.24 - 30,439.23 = 1,000.01$$

The stated figure overshoots the correct \\$30,439.23 by about \\$1,000, so the statement is false.`,
      `**D) The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value that is LESS than double the present value of the 5-year annuity-due lease payments.**  (false)

Two present values are needed: the perpetuity and the five-year annuity due.

The maintenance reserve pays a level amount forever, so it is a plain perpetuity:

$$P_{\\text{perp}} = \\frac{a}{r} = \\frac{3,000}{0.08}$$

$$P_{\\text{perp}} = 37,500.00$$

The lease payments are made at the beginning of each year, so value the ordinary annuity and shift it forward:

$$P_{\\text{ord}} = \\frac{4,200}{0.08}\\Bigl[1 - \\frac{1}{(1.08)^{5}}\\Bigr] \\approx 52,500 \\times 0.319417 \\approx 16,769.38$$

$$P_{\\text{due}} \\approx 16,769.38 \\times 1.08 \\approx 18,110.93$$

Double the lease present value is

$$2 \\times 18,110.93 = 36,221.86$$

Comparing:

$$37,500.00 - 36,221.86 = 1,278.14$$

The perpetuity requires \\$1,278.14 more than double the lease value, so it is not less than double and the statement is false.`,
      `**E) Comparing the accumulated continuous-compounding investment after 7 years to the perpetuity's present value, the continuous-compounding result is LARGER.**  (false)

One figure comes from continuous growth and the other from a perpetuity, so compute each on its own terms.

The separate investment grows continuously:

$$S = P\\,e^{rt} = 20,000\\,e^{0.06 \\times 7}$$

$$e^{0.42} \\approx 1.521962$$

$$S \\approx 20,000 \\times 1.521962 \\approx 30,439.23$$

The maintenance perpetuity pays \\$3,000 forever at 8%:

$$P_{\\text{perp}} = \\frac{3,000}{0.08} = 37,500.00$$

Comparing the two:

$$37,500.00 - 30,439.23 = 7,060.77$$

After seven years the continuous investment is still \\$7,060.77 short of the perpetuity's present value, so it is the smaller of the two and the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 99,
    solution_overview: `A small business owner is juggling three separate financial arrangements, all at rates around 6-8%. First, an equipment lessor requires payments of \\$4,200 at the BEGINNING of each year as an annuity due for 5 years at 8% interest. Second, the owner separately invests \\$20,000 today for 7 years under continuous compounding at a nominal 6% rate to fund a future purchase. Third, the owner is considering a perpetuity option paying \\$3,000 per year forever, at 8%, for a maintenance reserve fund.

**Part 1: Setup.**

Annuity due: $a = \\$4,200$, $n = 5$, $r = 0.08$

Continuous investment: $P = \\$20,000$, $r = 0.06$, $t = 7$

Perpetuity: $a = \\$3,000$, $r = 0.08$

**Part 2: Formula.**

$P_{\\mathrm{due}}=(a/r)[1-1/(1+r)^{n}](1+r)$; $F_{\\mathrm{due}}=(a/r)[(1+r)^{n}-1](1+r)$

$S=Pe^{rt}$; perpetuity $P=a/r$

**Part 3: Solve.**

**1.** Ordinary PV $\\$16,769.39$ lifts to $P_{\\mathrm{due}} = \\$18,110.94$; $F_{\\mathrm{due}} = \\$26,610.90$ (not $\\$27,610.90$).

**2.** Continuous investment: $S = 20,000 e^{0.42} = \\$30,439.24$ (not $\\$31,439.24$).

**3.** Perpetuity $P = 3,000/0.08 = \\$37,500.00$ — more than double the lease PV, and larger than the continuous result (not smaller).
`,
  },
  {
    id: `math-11-100`,
    case_id: `MATH 11.100`,
    title: `Capstone: A Family Office's Four-Component Windfall Allocation`,
    subsection: `11.5`,
    context: `A family office is structuring a client's financial plan using four separate tools. Component 1: \\$150,000 is invested today in a continuous-compounding account at a nominal 5% rate for 10 years, to fund a future purchase. Component 2: the client needs \\$80,000 available in 6 years for a home renovation, funded today by a single deposit at a discrete 6% annual rate. Component 3: the client will receive an ordinary annuity of \\$10,000 at the end of each year for 12 years from a structured settlement, discounted at 7%. Component 4: the remainder will endow a scholarship as a growing perpetuity paying \\$5,000 next year, growing 2% annually forever, at a required return of 7%.`,
    statements: [
      `Component 1's accumulated value after 10 years under continuous compounding is approximately \\$247,308.20.`,
      `Component 2's required deposit today, using discrete annual compounding, is approximately \\$57,396.85.`,
      `Component 3's present value, the 12-year ordinary annuity of \\$10,000 at 7%, is approximately \\$79,429.40.`,
      `Component 4's present value, the growing perpetuity paying \\$5,000 next year and growing at 2% forever at a 7% required return, is exactly \\$100,000.00.`,
      `Summing the present-day resources committed to all four components - Component 1's initial investment, Component 2's required deposit today, Component 3's present value, and Component 4's present value - the total exceeds \\$500,000.00.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) Component 1's accumulated value after 10 years under continuous compounding is approximately \\$247,308.20.**  (true)

Component 1 grows under continuous compounding, so it is multiplied by the exponential growth factor:

$$S = P\\,e^{rt}$$

Substituting $P = 150,000$, $r = 5\\% = 0.05$ and $t = 10$ years:

$$rt = 0.05 \\times 10 = 0.50$$

$$S = 150,000\\,e^{0.50}$$

$$e^{0.50} \\approx 1.648721$$

$$S \\approx 150,000 \\times 1.648721$$

$$S \\approx 247,308.19$$

The claim gives about \\$247,308.20, and the calculation returns \\$247,308.19, so the statement is true.`,
      `**B) Component 2's required deposit today, using discrete annual compounding, is approximately \\$57,396.85.**  (false)

Component 2 asks what single deposit today grows to a target under discrete annual compounding, which reverses the compounding formula:

$$x = \\frac{A}{(1+r)^{n}}$$

Substituting the target $A = 80,000$, the rate $r = 6\\% = 0.06$ and $n = 6$ years:

$$(1.06)^{6} \\approx 1.418519$$

$$x \\approx \\frac{80,000}{1.418519}$$

$$x \\approx 56,396.84$$

The claim states about \\$57,396.85:

$$57,396.85 - 56,396.84 = 1,000.01$$

The stated deposit is about \\$1,000 larger than the deposit actually required, so the statement is false.`,
      `**C) Component 3's present value, the 12-year ordinary annuity of \\$10,000 at 7%, is approximately \\$79,429.40.**  (true)

Component 3 is an ordinary annuity of equal year-end receipts, valued with the annuity present-value formula:

$$P_n = \\frac{a}{r}\\Bigl[1 - \\frac{1}{(1+r)^{n}}\\Bigr]$$

Substituting $a = 10,000$, $r = 7\\% = 0.07$ and $n = 12$:

$$(1.07)^{12} \\approx 2.252192$$

$$\\frac{1}{2.252192} \\approx 0.444012$$

$$1 - 0.444012 = 0.555988$$

$$\\frac{10,000}{0.07} \\approx 142,857.14$$

$$P_{12} \\approx 142,857.14 \\times 0.555988$$

$$P_{12} \\approx 79,426.86$$

The claim gives about \\$79,429.40, which differs from the computed \\$79,426.86 by about \\$2.54 on a settlement worth nearly \\$80,000, so the stated figure is correct as an approximation and the statement is true.`,
      `**D) Component 4's present value, the growing perpetuity paying \\$5,000 next year and growing at 2% forever at a 7% required return, is exactly \\$100,000.00.**  (true)

Component 4 is a growing perpetuity, valued as next year's payment divided by the spread between the required return and the growth rate:

$$P = \\frac{a_1}{r - g}$$

Substituting the scholarship payment $a_1 = 5,000$ next year, growth $g = 2\\% = 0.02$ and required return $r = 7\\% = 0.07$:

$$r - g = 0.07 - 0.02 = 0.05$$

$$P = \\frac{5,000}{0.05}$$

$$P = 100,000.00$$

The claim states exactly \\$100,000.00, and the calculation returns exactly \\$100,000.00 because \\$5,000 divided by 0.05 is a clean figure, so the statement is true.`,
      `**E) Summing the present-day resources committed to all four components - Component 1's initial investment, Component 2's required deposit today, Component 3's present value, and Component 4's present value - the total exceeds \\$500,000.00.**  (false)

The comparison adds four present-day amounts, each computed with its own formula.

Component 1 is the \\$150,000 invested today, so it enters at face value.

Component 2 is the deposit needed today to reach \\$80,000 in six years:

$$x = \\frac{80,000}{(1.06)^{6}} \\approx \\frac{80,000}{1.418519} \\approx 56,396.84$$

Component 3 is the present value of twelve year-end receipts of \\$10,000 at 7%:

$$P_{12} = \\frac{10,000}{0.07}\\Bigl[1 - \\frac{1}{(1.07)^{12}}\\Bigr] \\approx 142,857.14 \\times 0.555988 \\approx 79,426.86$$

Component 4 is the growing perpetuity:

$$P = \\frac{5,000}{0.07 - 0.02} = 100,000.00$$

Adding the four:

$$150,000.00 + 56,396.84 + 79,426.86 + 100,000.00$$

$$= 385,823.70$$

Comparing with the threshold in the claim:

$$500,000.00 - 385,823.70 = 114,176.30$$

The plan commits about \\$385,823.70 today, which is \\$114,176.30 below \\$500,000.00 rather than above it, so the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 100,
    solution_overview: `A family office is structuring a client's financial plan using four separate tools. Component 1: \\$150,000 is invested today in a continuous-compounding account at a nominal 5% rate for 10 years, to fund a future purchase. Component 2: the client needs \\$80,000 available in 6 years for a home renovation, funded today by a single deposit at a discrete 6% annual rate. Component 3: the client will receive an ordinary annuity of \\$10,000 at the end of each year for 12 years from a structured settlement, discounted at 7%. Component 4: the remainder will endow a scholarship as a growing perpetuity paying \\$5,000 next year, growing 2% annually forever, at a required return of 7%.

**Part 1: Setup.**

Comp 1: $P = \\$150,000$, $r = 0.05$, $t = 10$, continuous

Comp 2: target $\\$80,000$, $r = 0.06$, $n = 6$, discrete

Comp 3: $a = \\$10,000$, $n = 12$, $r = 0.07$

Comp 4: $a_1 = \\$5,000$, $g = 0.02$, $r = 0.07$

**Part 2: Formula.**

$S=Pe^{rt}$; $x=A/(1+r)^{n}$; $P_n=(a/r)[1-1/(1+r)^{n}]$; growing perpetuity $P=a_1/(r-g)$

**Part 3: Solve.**

**1.** Comp $1$: $S = \\$247,308.20$; Comp $2$: $x = \\$56,396.85$ (not $\\$57,396.85$).

**2.** Comp $3$: $P_{12} = \\$79,429.40$; Comp $4$: $P = \\$100,000.00$.

**3.** Summing all four figures: $\\$385,826.25$, which is less than $\\$500,000.00$ (not more).
`,
  },
  {
    id: `math-11-101`,
    case_id: `MATH 11.101`,
    title: `Equipment Loan: Finding the Equal Annual Payment`,
    subsection: `11.6`,
    context: `A small bakery-supply distributor borrows \\$60,000 at the beginning of the year to buy a delivery van and a walk-in cooler. The loan is to be repaid in 6 equal instalments at the end of each year, with interest charged at 12% per year, compounding annually.`,
    statements: [
      `The periodic interest rate to use in the payment formula is r = 0.12.`,
      `The required equal annual payment is approximately \\$14,593.54.`,
      `The interest portion of the first payment is exactly \\$7,200.00.`,
      `The principal-repayment portion of the first payment is more than half of the total payment amount.`,
      `The outstanding balance immediately after the second payment is approximately \\$45,000.00.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The periodic interest rate to use in the payment formula is r = 0.12.**  (true)

The rate used inside an instalment formula is the rate charged over one payment period, found by dividing the nominal annual rate by the number of compounding periods in a year:

$$r_{\\text{period}} = \\frac{r_{\\text{nominal}}}{m}$$

Interest here is charged at 12% per year and compounds once per year, so $m = 1$:

$$r_{\\text{period}} = \\frac{0.12}{1}$$

$$r_{\\text{period}} = 0.12$$

The payments are also annual, so period and payment line up and the decimal 0.12 goes straight into the formula. A check on the first year confirms it, since 12% of the opening \\$60,000 balance is

$$0.12 \\times 60,000 = 7,200.00$$

The claim names $r = 0.12$, which is the rate the formula uses, so the statement is true.`,
      `**B) The required equal annual payment is approximately \\$14,593.54.**  (true)

A loan repaid in equal instalments is an ordinary annuity whose present value equals the amount borrowed, which rearranges to the payment formula:

$$a = \\frac{rK}{1 - (1+r)^{-n}}$$

Substituting the loan $K = 60,000$, the annual rate $r = 0.12$ and the $n = 6$ year-end payments:

$$rK = 0.12 \\times 60,000 = 7,200$$

$$(1.12)^{-6} \\approx 0.506631$$

$$1 - 0.506631 = 0.493369$$

$$a \\approx \\frac{7,200}{0.493369}$$

$$a \\approx 14,593.54$$

The claim gives about \\$14,593.54 per year, and the calculation returns \\$14,593.54, so the statement is true.`,
      `**C) The interest portion of the first payment is exactly \\$7,200.00.**  (true)

Interest in any year is charged on the balance outstanding at the start of that year:

$$\\text{interest} = r \\times \\text{opening balance}$$

No payment has been made before the first year ends, so the opening balance is the full amount borrowed:

$$\\text{opening balance} = 60,000.00$$

$$\\text{interest}_1 = 0.12 \\times 60,000$$

$$\\text{interest}_1 = 7,200.00$$

Both figures here are exact, since 12% of \\$60,000 leaves no rounding to do. The claim names exactly \\$7,200.00, so the statement is true.`,
      `**D) The principal-repayment portion of the first payment is more than half of the total payment amount.**  (true)

Each instalment covers the year's interest first, and whatever is left reduces the principal:

$$\\text{principal} = a - r \\times \\text{opening balance}$$

The instalment comes from the annuity payment formula:

$$a = \\frac{0.12 \\times 60,000}{1 - (1.12)^{-6}} = \\frac{7,200}{0.493369} \\approx 14,593.54$$

First-year interest on the full \\$60,000 balance is

$$0.12 \\times 60,000 = 7,200.00$$

so the principal portion is

$$14,593.54 - 7,200.00 = 7,393.54$$

Half of the instalment is

$$\\frac{14,593.54}{2} \\approx 7,296.77$$

Comparing:

$$7,393.54 - 7,296.77 = 96.77$$

Even in year 1, when interest is at its heaviest, the principal portion clears half the payment by \\$96.77, so the statement is true.`,
      `**E) The outstanding balance immediately after the second payment is approximately \\$45,000.00.**  (false)

Tracking the balance takes one year at a time, recomputing interest on whatever principal is still outstanding:

$$\\text{interest} = r \\times \\text{opening balance}, \\qquad \\text{new balance} = \\text{opening balance} - (a - \\text{interest})$$

The instalment is

$$a = \\frac{7,200}{1 - (1.12)^{-6}} \\approx 14,593.54$$

Year 1 opens with the full loan:

$$0.12 \\times 60,000 = 7,200.00$$

$$14,593.54 - 7,200.00 = 7,393.54$$

$$60,000.00 - 7,393.54 = 52,606.46$$

Year 2 opens with that reduced balance:

$$0.12 \\times 52,606.46 \\approx 6,312.78$$

$$14,593.54 - 6,312.78 \\approx 8,280.76$$

$$52,606.46 - 8,280.76 \\approx 44,325.70$$

The claim puts the balance at about \\$45,000.00:

$$45,000.00 - 44,325.70 = 674.30$$

The true balance is about \\$44,325.70, some \\$674 below the stated figure, so the statement is false.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 101,
    solution_overview: `A small bakery-supply distributor borrows \\$60,000 at the beginning of the year to buy a delivery van and a walk-in cooler. The loan is repaid in $6$ equal year-end instalments at $12\\%$ per year, compounding annually.

**Part 1: Setup.**

$K = \\$60,000$, $r = 0.12$, $n = 6$ equal annual payments.

**Part 2: Formula.**

$a = rK/[1-(1+r)^{-n}]$. Interest $= r \\times$ opening balance; principal $=$ payment $-$ interest; new balance $=$ old $-$ principal.

**Part 3: Solve.**

**1.** $a = 0.12\\times60,000/[1-(1.12)^{-6}] = 7,200/0.493369 \\approx \\$14,593.54$.

**2.** Year-$1$ interest $\\$7,200.00$; principal $\\$7,393.54$ (more than half of the payment $\\$7,296.77$); balance $\\$52,606.46$.

**3.** Year-$2$ interest $\\$6,312.77$; principal $\\$8,280.77$; balance $\\$44,325.69$.`,
  },
  {
    id: `math-11-102`,
    case_id: `MATH 11.102`,
    title: `Auto Dealership Financing with Monthly Compounding`,
    subsection: `11.6`,
    context: `A used-car dealership finances a customer's \\$24,000 vehicle purchase over 4 years, with equal payments due at the end of each month and interest charged at a nominal annual rate of 9%, compounding monthly.`,
    statements: [
      `The monthly periodic interest rate used in the payment formula is r = 0.75%.`,
      `The required monthly payment is approximately \\$597.24.`,
      `The total amount paid over all 48 monthly payments is approximately \\$29,500.00.`,
      `The total interest paid over the life of the loan is approximately \\$4,667.57.`,
      `If the same \\$24,000 were instead repaid in 4 equal annual instalments at the same nominal 9% rate, the required annual payment would be less than \\$2,388.96.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The monthly periodic interest rate used in the payment formula is r = 0.75%.**  (true)

When payments and compounding share the same schedule, the rate used in the payment formula is the nominal annual rate split evenly across the periods in a year:

$$r = \\frac{r_{\\text{nominal}}}{m}$$

Interest is charged at a nominal 9% per year and compounds monthly, so $m = 12$:

$$r = \\frac{0.09}{12}$$

$$r = 0.0075$$

$$0.0075 = 0.75\\%$$

Payments are also monthly, so this 0.75% per month is the rate the instalment formula uses. The claim names $r = 0.75\\%$, so the statement is true.`,
      `**B) The required monthly payment is approximately \\$597.24.**  (true)

Equal instalments on a loan follow the annuity payment formula, with the periodic rate and the number of periods measured in the same time units:

$$a = \\frac{rK}{1 - (1+r)^{-n}}$$

The monthly rate is $r = 0.09/12 = 0.0075$ and the term is four years of monthly payments:

$$n = 4 \\times 12 = 48$$

$$rK = 0.0075 \\times 24,000 = 180$$

$$(1.0075)^{-48} \\approx 0.698614$$

$$1 - 0.698614 = 0.301386$$

$$a \\approx \\frac{180}{0.301386}$$

$$a \\approx 597.24$$

The claim gives about \\$597.24 per month, and the calculation returns \\$597.24, so the statement is true.`,
      `**C) The total amount paid over all 48 monthly payments is approximately \\$29,500.00.**  (false)

The total handed over is simply the instalment repeated for every payment period:

$$\\text{total paid} = a \\times n$$

The monthly instalment comes from the payment formula with $r = 0.0075$ and $n = 48$:

$$a = \\frac{0.0075 \\times 24,000}{1 - (1.0075)^{-48}} = \\frac{180}{0.301386} \\approx 597.24$$

Over all 48 months:

$$\\text{total paid} \\approx 597.24 \\times 48$$

$$\\text{total paid} \\approx 28,667.57$$

The claim states about \\$29,500.00:

$$29,500.00 - 28,667.57 = 832.43$$

The stated total runs \\$832.43 above what the customer actually pays, so the statement is false.`,
      `**D) The total interest paid over the life of the loan is approximately \\$4,667.57.**  (true)

Interest over the life of a loan is whatever is paid beyond the amount borrowed:

$$\\text{total interest} = a \\times n - K$$

The monthly instalment is

$$a = \\frac{0.0075 \\times 24,000}{1 - (1.0075)^{-48}} \\approx 597.24$$

so the 48 payments come to

$$597.24 \\times 48 \\approx 28,667.57$$

Subtracting the \\$24,000 financed:

$$28,667.57 - 24,000.00 = 4,667.57$$

The claim gives about \\$4,667.57 of interest, and the calculation returns \\$4,667.57, so the statement is true.`,
      `**E) If the same \\$24,000 were instead repaid in 4 equal annual instalments at the same nominal 9% rate, the required annual payment would be less than \\$2,388.96.**  (false)

Switching to annual instalments changes both the periodic rate and the number of periods, so the payment formula must be applied again from scratch:

$$a = \\frac{rK}{1 - (1+r)^{-n}}$$

With annual payments the rate per period is the full 9% and the term is four periods:

$$r = 0.09, \\qquad n = 4$$

$$rK = 0.09 \\times 24,000 = 2,160$$

$$(1.09)^{-4} \\approx 0.708425$$

$$1 - 0.708425 = 0.291575$$

$$a_{\\text{ann}} \\approx \\frac{2,160}{0.291575}$$

$$a_{\\text{ann}} \\approx 7,408.05$$

The claim says the annual instalment would be under \\$2,388.96:

$$7,408.05 - 2,388.96 = 5,019.09$$

Squeezing the same \\$24,000 into four payments instead of 48 raises each payment far above that threshold, by more than \\$5,000, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 102,
    solution_overview: `A used-car dealership finances a customer's \\$24,000 vehicle purchase over 4 years, with equal payments due at the end of each month and interest charged at a nominal annual rate of 9%, compounding monthly.

**Part 1: Setup.**

K (amount financed) = \\$24,000

$Nominal annual rate = 9%, compounding monthly

Term = 4 years (48 monthly payments)

**Part 2: Formula.**

Monthly periodic rate: r = nominal annual rate / 12

Equal-payment formula: $a = rK/[1-(1+r)^{-n}]$

Total paid = a × n

Total interest = total paid - K

**Part 3: Solve.**

**1.** $r = 0.09/12 = 0.0075$; $n = 4 \\times 12 = 48$ months.

**2.** $a = 0.0075\\times24,000/[1-(1.0075)^{-48}] = 180/0.301329 \\approx \\$597.24$.

**3.** Total paid: $\\$597.24 \\times 48 \\approx \\$28,667.57$ (not $\\$29,500.00$).

**4.** Total interest: $\\$28,667.57 - \\$24,000.00 \\approx \\$4,667.57$.

**5.** For $4$ equal annual instalments at $r = 0.09$, $n = 4$: $a = 0.09\\times24,000/[1-(1.09)^{-4}] = 2,160/0.291676 \\approx \\$7,408.05$, which is far more than $\\$2,388.96$, not less.`,
  },
  {
    id: `math-11-103`,
    case_id: `MATH 11.103`,
    title: `Restaurant Renovation Loan: Tracking the Amortization Schedule`,
    subsection: `11.6`,
    context: `A restaurant owner borrows \\$45,000 to renovate the dining room, agreeing to repay the loan in 5 equal annual instalments at the end of each year, with interest at 10% per year compounding annually.`,
    statements: [
      `The required equal annual payment is approximately \\$11,870.89.`,
      `The interest portion of the first payment is \\$5,000.00.`,
      `The outstanding balance immediately after the third payment is approximately \\$20,602.37.`,
      `In the fourth year, the interest portion of the payment is larger than the principal portion of the payment.`,
      `Adding up the principal-repayment portions of all 5 payments gives a total of exactly \\$46,200.00.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The required equal annual payment is approximately \\$11,870.89.**  (true)

Equal year-end instalments on a loan follow the annuity payment formula, which sets the present value of the payments equal to the amount borrowed:

$$a = \\frac{rK}{1 - (1+r)^{-n}}$$

Substituting the loan $K = 45,000$, the annual rate $r = 10\\% = 0.10$ and the $n = 5$ payments:

$$rK = 0.10 \\times 45,000 = 4,500$$

$$(1.10)^{-5} \\approx 0.620921$$

$$1 - 0.620921 = 0.379079$$

$$a \\approx \\frac{4,500}{0.379079}$$

$$a \\approx 11,870.89$$

The claim gives about \\$11,870.89 per year, and the calculation returns \\$11,870.89, so the statement is true.`,
      `**B) The interest portion of the first payment is \\$5,000.00.**  (false)

Interest in the first year is charged on the balance outstanding when that year begins, which is the full amount borrowed:

$$\\text{interest}_1 = r \\times K$$

Substituting the 10% rate and the \\$45,000 loan:

$$\\text{interest}_1 = 0.10 \\times 45,000$$

$$\\text{interest}_1 = 4,500.00$$

The claim states \\$5,000.00:

$$5,000.00 - 4,500.00 = 500.00$$

Charging \\$5,000.00 would mean a rate of $5,000/45,000 \\approx 11.1\\%$, not the 10% agreed. The correct first-year interest is \\$4,500.00, so the statement is false.`,
      `**C) The outstanding balance immediately after the third payment is approximately \\$20,602.37.**  (true)

The balance falls each year by the principal portion of the payment, where the principal portion is the instalment minus that year's interest:

$$\\text{interest} = r \\times \\text{opening balance}, \\qquad \\text{new balance} = \\text{opening balance} - (a - \\text{interest})$$

The instalment is

$$a = \\frac{0.10 \\times 45,000}{1 - (1.10)^{-5}} = \\frac{4,500}{0.379079} \\approx 11,870.89$$

Year 1:

$$0.10 \\times 45,000.00 = 4,500.00$$

$$45,000.00 - (11,870.89 - 4,500.00) = 37,629.11$$

Year 2:

$$0.10 \\times 37,629.11 \\approx 3,762.91$$

$$37,629.11 - (11,870.89 - 3,762.91) = 29,521.13$$

Year 3:

$$0.10 \\times 29,521.13 \\approx 2,952.11$$

$$29,521.13 - (11,870.89 - 2,952.11) = 20,602.35$$

The claim gives about \\$20,602.37, which the schedule reproduces to within a few cents of rounding, so the statement is true.`,
      `**D) In the fourth year, the interest portion of the payment is larger than the principal portion of the payment.**  (false)

The split of a payment depends on the balance the year opens with, so the schedule has to be carried to year 4:

$$\\text{interest} = r \\times \\text{opening balance}, \\qquad \\text{principal} = a - \\text{interest}$$

With $a \\approx 11,870.89$ the balances run

$$45,000.00 - (11,870.89 - 4,500.00) = 37,629.11$$

$$37,629.11 - (11,870.89 - 3,762.91) = 29,521.13$$

$$29,521.13 - (11,870.89 - 2,952.11) = 20,602.35$$

Year 4 therefore opens at about \\$20,602.35:

$$\\text{interest}_4 \\approx 0.10 \\times 20,602.35 \\approx 2,060.24$$

$$\\text{principal}_4 \\approx 11,870.89 - 2,060.24 \\approx 9,810.65$$

Comparing the two parts of the payment:

$$9,810.65 - 2,060.24 = 7,750.41$$

By year 4 the principal portion is larger than the interest portion by \\$7,750.41, so interest is the smaller part and the statement is false.`,
      `**E) Adding up the principal-repayment portions of all 5 payments gives a total of exactly \\$46,200.00.**  (false)

The principal portions are exactly the amounts by which the balance is written down, so together they must remove the whole balance:

$$\\sum \\text{principal portions} = K - \\text{final balance}$$

The loan is fully repaid at the end of year 5, which means the final balance is zero:

$$\\sum \\text{principal portions} = 45,000.00 - 0 = 45,000.00$$

The year-by-year figures confirm it:

$$7,370.89 + 8,107.98 + 8,918.78 + 9,810.65 + 10,791.70 = 45,000.00$$

The claim states the principal portions total \\$46,200.00:

$$46,200.00 - 45,000.00 = 1,200.00$$

The extra \\$1,200.00 belongs to interest, not principal, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 103,
    solution_overview: `A restaurant owner borrows \\$45,000 to renovate the dining room, agreeing to repay the loan in $5$ equal annual instalments at the end of each year, with interest at $10\\%$ per year compounding annually.

**Part 1: Setup.**

$K = \\$45,000$, $r = 0.10$, $n = 5$ equal annual payments.

**Part 2: Formula.**

$a = rK/[1-(1+r)^{-n}]$. Interest $= r \\times$ opening balance; principal $=$ payment $-$ interest; new balance $=$ old $-$ principal.

**Part 3: Solve.**

**1.** $a = 0.10\\times45,000/[1-(1.10)^{-5}] = 4,500/0.379079 \\approx \\$11,870.89$.

**2.** Year $1$: interest $\\$4,500.00$; principal $\\$7,370.89$; balance $\\$37,629.11$. Year $2$: interest $\\$3,762.91$; principal $\\$8,107.98$; balance $\\$29,521.14$.

**3.** Year $3$: interest $\\$2,952.11$; principal $\\$8,918.77$; balance $\\$20,602.37$. Year $4$: interest $\\$2,060.24$ is much smaller than principal $\\$9,810.65$.

**4.** Year $5$: interest $\\$1,079.17$; principal $\\$10,791.72$; balance $\\$0$. Sum of principals $= \\$45,000$ exactly.`,
  },
  {
    id: `math-11-104`,
    case_id: `MATH 11.104`,
    title: `Franchise Buy-In Paid as an Annuity Due`,
    subsection: `11.6`,
    context: `A new franchisee agrees to pay \\$150,000 for the rights to open a location, structured as 10 equal annual payments, with the first payment due immediately and each following payment due at the beginning of each subsequent year. The agreed annual interest rate is 11%.`,
    statements: [
      `The combined present-value factor multiplying the payment is approximately 6.537048.`,
      `The required equal payment a is approximately \\$22,946.14.`,
      `If instead the first payment were due at the end of year 1, the required equal payment would be lower than \\$22,946.14.`,
      `The difference between the ordinary-annuity payment and the annuity-due payment is approximately \\$2,524.08.`,
      `The total of all 10 annuity-due payments combined is approximately \\$220,000.00.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The combined present-value factor multiplying the payment is approximately 6.537048.**  (true)

With the first payment due immediately, one payment is not discounted at all and the remaining nine form an ordinary annuity. The combined factor is therefore

$$1 + \\frac{1}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $r = 11\\% = 0.11$ and $n = 10$ payments, so $n - 1 = 9$ discounted ones:

$$(1.11)^{-9} \\approx 0.390925$$

$$1 - 0.390925 = 0.609075$$

$$\\frac{1}{0.11} \\approx 9.090909$$

$$9.090909 \\times 0.609075 \\approx 5.537048$$

$$1 + 5.537048 = 6.537048$$

The claim gives about 6.537048, and the calculation returns 6.537048, so the statement is true.`,
      `**B) The required equal payment a is approximately \\$22,946.14.**  (true)

The buy-in price is the payment multiplied by the combined annuity-due factor, so the payment is the price divided by that factor:

$$K = a \\times \\Bigl(1 + \\frac{1}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]\\Bigr), \\qquad a = \\frac{K}{\\text{factor}}$$

Building the factor at $r = 0.11$ with nine discounted payments:

$$(1.11)^{-9} \\approx 0.390925$$

$$9.090909 \\times (1 - 0.390925) \\approx 5.537048$$

$$\\text{factor} = 1 + 5.537048 = 6.537048$$

Dividing the \\$150,000 owed by that factor:

$$a \\approx \\frac{150,000}{6.537048}$$

$$a \\approx 22,946.14$$

The claim gives about \\$22,946.14, and the calculation returns \\$22,946.14, so the statement is true.`,
      `**C) If instead the first payment were due at the end of year 1, the required equal payment would be lower than \\$22,946.14.**  (false)

Moving the first payment from today to the end of year 1 turns the annuity due into an ordinary annuity, which uses the standard payment formula:

$$a_{\\text{ord}} = \\frac{rK}{1 - (1+r)^{-n}}$$

Substituting $K = 150,000$, $r = 0.11$ and $n = 10$:

$$rK = 0.11 \\times 150,000 = 16,500$$

$$(1.11)^{-10} \\approx 0.352184$$

$$1 - 0.352184 = 0.647816$$

$$a_{\\text{ord}} \\approx \\frac{16,500}{0.647816}$$

$$a_{\\text{ord}} \\approx 25,470.21$$

Comparing with the annuity-due payment of \\$22,946.14:

$$25,470.21 - 22,946.14 = 2,524.07$$

Every payment now sits a year later, so each one buys less discounting and the instalment rises by \\$2,524.07 instead of falling. The claim says it would be lower, so the statement is false.`,
      `**D) The difference between the ordinary-annuity payment and the annuity-due payment is approximately \\$2,524.08.**  (true)

The comparison needs both payments, each from its own formula.

With the first payment due immediately, the combined factor is

$$1 + \\frac{1}{0.11}\\bigl[1 - (1.11)^{-9}\\bigr] \\approx 6.537048$$

$$a_{\\text{due}} \\approx \\frac{150,000}{6.537048} \\approx 22,946.14$$

With the first payment delayed to the end of year 1, the ordinary payment formula applies:

$$a_{\\text{ord}} = \\frac{0.11 \\times 150,000}{1 - (1.11)^{-10}} \\approx \\frac{16,500}{0.647816} \\approx 25,470.21$$

The difference between them is

$$25,470.21 - 22,946.14 = 2,524.07$$

The claim gives about \\$2,524.08, matching the computed \\$2,524.07 to within a cent of rounding, so the statement is true.`,
      `**E) The total of all 10 annuity-due payments combined is approximately \\$220,000.00.**  (false)

The total handed over is the instalment repeated once for each payment, with no discounting involved:

$$\\text{total} = a \\times n$$

The instalment comes from dividing the price by the annuity-due factor:

$$a \\approx \\frac{150,000}{6.537048} \\approx 22,946.14$$

Over the ten payments:

$$\\text{total} \\approx 22,946.14 \\times 10$$

$$\\text{total} \\approx 229,461.40$$

The claim states about \\$220,000.00:

$$229,461.40 - 220,000.00 = 9,461.40$$

The franchisee actually hands over about \\$229,461.40, nearly \\$9,500 more than the stated figure, so the statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 104,
    solution_overview: `A new franchisee agrees to pay \\$150,000 for the rights to open a location, structured as 10 equal annual payments, with the first payment due immediately and each following payment due at the beginning of each subsequent year. The agreed annual interest rate is 11%.

**Part 1: Setup.**

K (present value owed) = \\$150,000

r (annual interest rate) = 0.11

n = 10 total payments, first one immediate

**Part 2: Formula.**

Annuity-due present value: $K = a + (a/r)[1-(1+r)^{-(n-1)}]$

Ordinary-annuity comparison: $a_{\\mathrm{ordinary}} = rK/[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** Combined factor: $1 + (1/0.11)[1-(1.11)^{-9}] = 1 + 9.090909\\times (1-0.391110) = 1 + 5.537048 \\approx 6.537048$.

**2.** $a = 150,000/6.537048 \\approx \\$22,946.14$.

**3.** Ordinary-annuity payment: $a_{\\mathrm{ordinary}} = 0.11\\times150,000/[1-(1.11)^{-10}] = 16,500/0.647848 \\approx \\$25,470.21$, which is higher than $\\$22,946.14$, not lower.

**4.** Difference: $\\$25,470.21 - \\$22,946.14 \\approx \\$2,524.08$.

**5.** Total of all $10$ due payments: $\\$22,946.14 \\times 10 \\approx \\$229,461.39$, not $\\$220,000.00$.`,
  },
  {
    id: `math-11-105`,
    case_id: `MATH 11.105`,
    title: `Fixed Annual Payment on a Working-Capital Loan`,
    subsection: `11.6`,
    context: `A landscaping company borrows \\$35,000 at 13% annual interest and commits to repaying exactly \\$10,000 at the end of each year, continuing until the debt is fully retired, with a smaller final payment to settle whatever remains.`,
    statements: [
      `The smallest whole number of yearly payments needed to pay off the loan is n = 5.`,
      `The first four payments are each exactly \\$10,000.00, totalling \\$40,000.00.`,
      `The fifth and final payment is approximately \\$9,682.53.`,
      `The total amount paid over the entire life of the loan is approximately \\$49,682.53.`,
      `The total interest paid over the life of the loan is less than the original \\$35,000 principal.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The smallest whole number of yearly payments needed to pay off the loan is n = 5.**  (true)

When a borrower repays a fixed amount each year, the number of payments needed is the smallest whole number $n$ satisfying

$$n \\ge \\frac{\\ln a - \\ln(a - rK)}{\\ln(1+r)}$$

Substituting the fixed payment $a = 10,000$, the rate $r = 13\\% = 0.13$ and the loan $K = 35,000$:

$$rK = 0.13 \\times 35,000 = 4,550$$

$$a - rK = 10,000 - 4,550 = 5,450$$

$$\\ln 10,000 \\approx 9.210340, \\qquad \\ln 5,450 \\approx 8.603371$$

$$9.210340 - 8.603371 = 0.606969$$

$$\\ln 1.13 \\approx 0.122218$$

$$\\frac{0.606969}{0.122218} \\approx 4.9663$$

Four payments leave part of the debt standing, since the threshold sits above 4, so rounding up gives

$$n = 5$$

The claim names $n = 5$, so the statement is true.`,
      `**B) The first four payments are each exactly \\$10,000.00, totalling \\$40,000.00.**  (true)

The borrower pays a full \\$10,000 every year until the debt can be cleared, and the threshold calculation shows how many such years there are:

$$n \\ge \\frac{\\ln 10,000 - \\ln(10,000 - 0.13 \\times 35,000)}{\\ln 1.13} \\approx 4.9663$$

Since the threshold exceeds 4, the debt is still alive after four payments, so all four of those are full ones:

$$4 \\times 10,000 = 40,000.00$$

The remaining balance at that point confirms it. The loan grown for four years is

$$35,000 \\times (1.13)^{4} \\approx 57,066.58$$

while the four payments accumulate to

$$\\frac{10,000}{0.13}\\bigl[(1.13)^{4} - 1\\bigr] \\approx 48,497.97$$

$$57,066.58 - 48,497.97 = 8,568.61$$

A positive balance of \\$8,568.61 remains, so the fifth year is the one that closes the loan and the first four payments are indeed full \\$10,000 payments totalling \\$40,000.00. The statement is true.`,
      `**C) The fifth and final payment is approximately \\$9,682.53.**  (true)

The final payment clears whatever the loan still owes after the full payments, so compare the loan grown forward with the payments grown forward.

The debt after four years of interest is

$$K(1+r)^{4} = 35,000 \\times (1.13)^{4}$$

$$(1.13)^{4} \\approx 1.630474$$

$$35,000 \\times 1.630474 \\approx 57,066.58$$

The four \\$10,000 payments accumulate to

$$\\frac{a}{r}\\bigl[(1+r)^{4} - 1\\bigr] = \\frac{10,000}{0.13}(1.630474 - 1)$$

$$\\approx 76,923.08 \\times 0.630474 \\approx 48,497.97$$

The shortfall at the end of year 4 is

$$57,066.58 - 48,497.97 = 8,568.61$$

Carrying that balance one more year at 13%:

$$8,568.61 \\times 1.13 \\approx 9,682.53$$

The claim gives about \\$9,682.53 for the fifth payment, and the calculation returns \\$9,682.53, so the statement is true.`,
      `**D) The total amount paid over the entire life of the loan is approximately \\$49,682.53.**  (true)

The total handed over is the four full payments plus the reduced final one:

$$\\text{total} = 4a + \\text{final payment}$$

The four full payments come to

$$4 \\times 10,000 = 40,000.00$$

The final payment settles the balance left at the end of year 4. The debt grown four years is

$$35,000 \\times (1.13)^{4} \\approx 57,066.58$$

and the payments grown to the same date come to

$$\\frac{10,000}{0.13}\\bigl[(1.13)^{4} - 1\\bigr] \\approx 48,497.97$$

$$57,066.58 - 48,497.97 = 8,568.61$$

$$8,568.61 \\times 1.13 \\approx 9,682.53$$

Adding the pieces:

$$40,000.00 + 9,682.53 = 49,682.53$$

The claim gives about \\$49,682.53, and the calculation returns \\$49,682.53, so the statement is true.`,
      `**E) The total interest paid over the life of the loan is less than the original \\$35,000 principal.**  (true)

Interest over the life of the loan is everything paid beyond the amount borrowed:

$$\\text{total interest} = \\text{total paid} - K$$

The four full payments total \\$40,000.00, and the final payment settles the year-4 balance:

$$35,000 \\times (1.13)^{4} \\approx 57,066.58$$

$$\\frac{10,000}{0.13}\\bigl[(1.13)^{4} - 1\\bigr] \\approx 48,497.97$$

$$57,066.58 - 48,497.97 = 8,568.61$$

$$8,568.61 \\times 1.13 \\approx 9,682.53$$

So the borrower pays

$$40,000.00 + 9,682.53 = 49,682.53$$

and the interest inside that is

$$49,682.53 - 35,000.00 = 14,682.53$$

Comparing with the principal:

$$35,000.00 - 14,682.53 = 20,317.47$$

Interest of \\$14,682.53 falls \\$20,317.47 short of the \\$35,000 borrowed, so it is indeed less than the principal and the statement is true.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 105,
    solution_overview: `A landscaping company borrows \\$35,000 at 13% annual interest and commits to repaying exactly \\$10,000 at the end of each year, continuing until the debt is fully retired, with a smaller final payment to settle whatever remains.

**Part 1: Setup.**

K (loan amount) = \\$35,000

r (annual interest rate) = 0.13

a (fixed annual payment) = \\$10,000

**Part 2: Formula.**

Number of periods needed: smallest integer n with $n \\ge [\\ln a - \\ln(a-rK)]/\\ln(1+r)$; the final payment is smaller than a unless this holds exactly

Future value of loan after m years: $K(1+r)^{m}$

Future value of m fixed payments (valued at the time of the m-th payment): $(a/r)[(1+r)^{m} - 1]$

**Part 3: Solve.**

**1.** $[\\ln(10,000) - \\ln(10,000 - 0.13\\times35,000)]/\\ln(1.13) = [\\ln(10,000) - \\ln(5,450)]/\\ln(1.13) \\approx 4.9663$, so the smallest integer $n$ satisfying the condition is $n = 5$.

**2.** Four full payments of $\\$10,000$ total $4\\times10,000 = \\$40,000.00$.

**3.** Future value of the loan after $4$ years: $35,000\\times(1.13)^{4}\\approx\\$57,066.58$.

**4.** Future value of the $4$ payments of $\\$10,000$, valued at year $4$: $(10,000/0.13)\\times[(1.13)^{4} - 1]\\approx\\$48,497.97$.

**5.** Remaining debt at year $4$: $\\$57,066.58 - \\$48,497.97 \\approx \\$8,568.61$; carrying this forward one more year with interest gives the final payment: $\\$8,568.61\\times1.13 \\approx \\$9,682.53$.

**6.** Total paid: $\\$40,000.00 + \\$9,682.53 \\approx \\$49,682.53$; total interest $= \\$49,682.53 - \\$35,000.00 \\approx \\$14,682.53$, which is indeed less than $\\$35,000.00$.`,
  },
  {
    id: `math-11-106`,
    case_id: `MATH 11.106`,
    title: `Comparing Cash vs. Instalment Purchase of a Delivery Fleet`,
    subsection: `11.6`,
    context: `A logistics company needs to acquire a fleet of delivery vehicles and is choosing between two payment schedules. Option A: pay \\$500,000 in cash today. Option B: pay \\$100,000 per year for 7 years, with the first payment due immediately and each subsequent payment due at the beginning of the following years. The company wants to know which option is cheaper in present-value terms, first at a 10% annual interest rate and then at a 14% annual interest rate.`,
    statements: [
      `At a 10% annual rate, the present value of Option B is approximately \\$535,526.07.`,
      `At a 10% annual rate, Option A is the cheaper choice.`,
      `At a 14% annual rate, the present value of Option B is approximately \\$495,000.00.`,
      `At a 14% annual rate, Option B becomes the cheaper choice.`,
      `Option B must always be the more expensive choice in present-value terms, no matter what the interest rate is.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) At a 10% annual rate, the present value of Option B is approximately \\$535,526.07.**  (true)

Option B pays at the beginning of each year, so the first payment is not discounted and the remaining six form an ordinary annuity:

$$PV = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 100,000$, $n = 7$ payments and $r = 10\\% = 0.10$:

$$(1.10)^{-6} \\approx 0.5644739$$

$$1 - 0.5644739 = 0.4355261$$

$$\\frac{100,000}{0.10} = 1,000,000$$

$$1,000,000 \\times 0.4355261 \\approx 435,526.07$$

$$PV_B \\approx 100,000 + 435,526.07$$

$$PV_B \\approx 535,526.07$$

The claim gives about \\$535,526.07, and the calculation returns \\$535,526.07, so the statement is true.`,
      `**B) At a 10% annual rate, Option A is the cheaper choice.**  (true)

Cheaper means the smaller present value, so Option B's instalments must be valued today and set against the \\$500,000 cash price.

Option B is an annuity due of seven payments:

$$PV_B = 100,000 + \\frac{100,000}{0.10}\\bigl[1 - (1.10)^{-6}\\bigr]$$

$$1 - 0.5644739 = 0.4355261$$

$$1,000,000 \\times 0.4355261 \\approx 435,526.07$$

$$PV_B \\approx 100,000 + 435,526.07 \\approx 535,526.07$$

Option A costs \\$500,000 today with nothing to discount. Comparing:

$$535,526.07 - 500,000.00 = 35,526.07$$

Spreading the payments costs \\$35,526.07 more in present-value terms at a 10% rate, so paying cash is cheaper and the statement is true.`,
      `**C) At a 14% annual rate, the present value of Option B is approximately \\$495,000.00.**  (false)

The schedule is unchanged, so the same annuity-due formula applies with a new discount rate:

$$PV_B = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 100,000$, six discounted payments and $r = 14\\% = 0.14$:

$$(1.14)^{-6} \\approx 0.4555865$$

$$1 - 0.4555865 = 0.5444135$$

$$\\frac{100,000}{0.14} \\approx 714,285.71$$

$$714,285.71 \\times 0.5444135 \\approx 388,866.75$$

$$PV_B \\approx 100,000 + 388,866.75$$

$$PV_B \\approx 488,866.75$$

The claim states about \\$495,000.00:

$$495,000.00 - 488,866.75 = 6,133.25$$

The true present value is about \\$488,866.75, more than \\$6,000 below the stated figure, so the statement is false.`,
      `**D) At a 14% annual rate, Option B becomes the cheaper choice.**  (true)

At a higher discount rate the future instalments shrink in today's terms, while the cash price cannot shrink at all. Recompute Option B at 14%:

$$PV_B = 100,000 + \\frac{100,000}{0.14}\\bigl[1 - (1.14)^{-6}\\bigr]$$

$$(1.14)^{-6} \\approx 0.4555865$$

$$1 - 0.4555865 = 0.5444135$$

$$714,285.71 \\times 0.5444135 \\approx 388,866.75$$

$$PV_B \\approx 100,000 + 388,866.75 \\approx 488,866.75$$

Option A still costs \\$500,000 today. Comparing:

$$500,000.00 - 488,866.75 = 11,133.25$$

At 14% the instalment plan costs \\$11,133.25 less in present-value terms, so Option B is now the cheaper choice and the statement is true.`,
      `**E) Option B must always be the more expensive choice in present-value terms, no matter what the interest rate is.**  (false)

Which option is cheaper depends on the discount rate, because only Option B has payments in the future for a rate to act on. Valuing Option B at two different rates shows the ranking change.

At 10%:

$$PV_B = 100,000 + \\frac{100,000}{0.10}\\bigl[1 - (1.10)^{-6}\\bigr] \\approx 100,000 + 435,526.07 \\approx 535,526.07$$

$$535,526.07 - 500,000.00 = 35,526.07 \\text{ more than cash}$$

At 14%:

$$PV_B = 100,000 + \\frac{100,000}{0.14}\\bigl[1 - (1.14)^{-6}\\bigr] \\approx 100,000 + 388,866.75 \\approx 488,866.75$$

$$500,000.00 - 488,866.75 = 11,133.25 \\text{ less than cash}$$

The claim asserts that Option B is dearer at every rate. One rate makes it \\$35,526.07 dearer and another makes it \\$11,133.25 cheaper, so the ranking depends on the rate and the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 106,
    solution_overview: `A logistics company needs to acquire a fleet of delivery vehicles and is choosing between two payment schedules. Option A: pay \\$500,000 in cash today. Option B: pay \\$100,000 per year for 7 years, with the first payment due immediately and each subsequent payment due at the beginning of the following years. The company wants to know which option is cheaper in present-value terms, first at a 10% annual interest rate and then at a 14% annual interest rate.

**Part 1: Setup.**

Option A: \\$500,000 paid today

Option B: a = \\$100,000/year, n = 7 payments, first one immediate

Interest rates considered: 10% and 14% per year

**Part 2: Formula.**

Annuity-due present value: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$

**Part 3: Solve.**

**1.** At $r = 0.10$: $PV_{\\mathrm{B}} = 100,000 + (100,000/0.10)[1-(1.10)^{-6}] = 100,000 + 1,000,000\\times0.435526 \\approx \\$535,526.07$.

**2.** Comparing: $\\$535,526.07$ (Option B) $> \\$500,000.00$ (Option A), so at $10\\%$ cash is cheaper.

**3.** At $r = 0.14$: $PV_{\\mathrm{B}} = 100,000 + (100,000/0.14)[1-(1.14)^{-6}] = 100,000 + 714,285.71\\times0.544813 \\approx \\$488,866.75$ (not $\\$495,000.00$).

**4.** Comparing: $\\$488,866.75$ (Option B) $< \\$500,000.00$ (Option A), so at $14\\%$ the instalment plan becomes cheaper.
`,
  },
  {
    id: `math-11-107`,
    case_id: `MATH 11.107`,
    title: `Quarterly Savings Deposits with Annual Compounding`,
    subsection: `11.6`,
    context: `At the end of each quarter, a small business owner deposits \\$250 into a savings account that pays interest once per year, at an annual rate of 8%. Because each quarterly deposit sits in the account for only part of the year before the annual interest is credited, the bank applies simple interest to each deposit for the fraction of the year it remains on deposit before the year-end crediting date.`,
    statements: [
      `The year-end equivalent value of the four quarterly deposits made during a single year is \\$1,100.00.`,
      `The account balance after 4 years is approximately \\$4,700.00.`,
      `The account balance after 3 years is approximately \\$3,500.00.`,
      `If the four \\$250 deposits are instead treated as a flat \\$1,000.00 deposit at year-end, the resulting 4-year account balance is approximately \\$4,506.11.`,
      `The difference between the correctly computed 4-year balance and the simplified calculation is approximately \\$200.00.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A) The year-end equivalent value of the four quarterly deposits made during a single year is \\$1,100.00.**  (false)

Each quarterly deposit earns simple interest only for the part of the year still left before interest is credited. The deposits land at the end of quarters 1, 2, 3 and 4, so they sit for $3/4$, $1/2$, $1/4$ and $0$ of a year:

$$\\text{year-end value} = D\\Bigl[\\bigl(1 + \\tfrac{3}{4}r\\bigr) + \\bigl(1 + \\tfrac{1}{2}r\\bigr) + \\bigl(1 + \\tfrac{1}{4}r\\bigr) + 1\\Bigr]$$

Collecting the four principal amounts and the fractions of a year gives

$$\\text{year-end value} = D(4 + 1.5r)$$

Substituting $D = 250$ and $r = 8\\% = 0.08$:

$$1.5 \\times 0.08 = 0.12$$

$$4 + 0.12 = 4.12$$

$$250 \\times 4.12 = 1,030.00$$

The claim states \\$1,100.00:

$$1,100.00 - 1,030.00 = 70.00$$

The correct year-end equivalent is \\$1,030.00, seventy dollars below the stated figure, so the statement is false.`,
      `**B) The account balance after 4 years is approximately \\$4,700.00.**  (false)

Once each year's deposits are converted to a single year-end amount, the account behaves like an ordinary annuity earning 8% a year:

$$F_N = \\frac{a}{r}\\bigl[(1+r)^{N} - 1\\bigr]$$

The year-end equivalent of the four quarterly deposits is

$$a = 250(4 + 1.5 \\times 0.08) = 250 \\times 4.12 = 1,030.00$$

Substituting $a = 1,030.00$, $r = 0.08$ and $N = 4$:

$$(1.08)^{4} \\approx 1.360489$$

$$1.360489 - 1 = 0.360489$$

$$\\frac{1,030}{0.08} = 12,875$$

$$F_4 \\approx 12,875 \\times 0.360489$$

$$F_4 \\approx 4,641.30$$

The claim states about \\$4,700.00:

$$4,700.00 - 4,641.30 = 58.70$$

The account actually holds about \\$4,641.30 after four years, so the statement is false.`,
      `**C) The account balance after 3 years is approximately \\$3,500.00.**  (false)

The same year-end equivalent applies, with the horizon shortened by one year:

$$F_N = \\frac{a}{r}\\bigl[(1+r)^{N} - 1\\bigr]$$

The equivalent year-end deposit is

$$a = 250(4 + 1.5 \\times 0.08) = 1,030.00$$

Substituting $r = 0.08$ and $N = 3$:

$$(1.08)^{3} \\approx 1.259712$$

$$1.259712 - 1 = 0.259712$$

$$\\frac{1,030}{0.08} = 12,875$$

$$F_3 \\approx 12,875 \\times 0.259712$$

$$F_3 \\approx 3,343.79$$

The claim states about \\$3,500.00:

$$3,500.00 - 3,343.79 = 156.21$$

The three-year balance is about \\$3,343.79, well short of the stated figure, so the statement is false.`,
      `**D) If the four \\$250 deposits are instead treated as a flat \\$1,000.00 deposit at year-end, the resulting 4-year account balance is approximately \\$4,506.11.**  (true)

Treating the four deposits as a flat \\$1,000.00 at year-end drops the simple-interest credit and leaves a plain ordinary annuity:

$$F_N^{\\text{flat}} = \\frac{a}{r}\\bigl[(1+r)^{N} - 1\\bigr]$$

Substituting $a = 1,000.00$, $r = 0.08$ and $N = 4$:

$$(1.08)^{4} \\approx 1.360489$$

$$1.360489 - 1 = 0.360489$$

$$\\frac{1,000}{0.08} = 12,500$$

$$F_4^{\\text{flat}} \\approx 12,500 \\times 0.360489$$

$$F_4^{\\text{flat}} \\approx 4,506.11$$

The claim gives about \\$4,506.11, and the calculation returns \\$4,506.11, so the statement is true.`,
      `**E) The difference between the correctly computed 4-year balance and the simplified calculation is approximately \\$200.00.**  (false)

Both balances come from the same annuity formula, differing only in the amount credited each year:

$$F_4 = \\frac{a}{0.08}\\bigl[(1.08)^{4} - 1\\bigr]$$

The correct year-end equivalent keeps the simple interest on the quarterly deposits:

$$a = 250(4 + 1.5 \\times 0.08) = 1,030.00$$

$$F_4 \\approx 12,875 \\times 0.360489 \\approx 4,641.30$$

The simplified version drops that credit:

$$a = 1,000.00$$

$$F_4^{\\text{flat}} \\approx 12,500 \\times 0.360489 \\approx 4,506.11$$

The gap between them is

$$4,641.30 - 4,506.11 = 135.19$$

The claim puts the gap at about \\$200.00, roughly \\$65 more than the true difference of about \\$135, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 107,
    solution_overview: `At the end of each quarter, a small business owner deposits \\$250 into a savings account that pays interest once per year, at an annual rate of 8%. Because each quarterly deposit sits in the account for only part of the year before the annual interest is credited, the bank applies simple interest to each deposit for the fraction of the year it remains on deposit before the year-end crediting date.

**Part 1: Setup.**

$D = \\$250$ quarterly; $r = 0.08$; interest credited once per year

**Part 2: Formula.**

Year-end equivalent: $D(4+1.5r)$; then $F_N = (a/r)[(1+r)^{N}-1]$ with $a$ equal to that equivalent

**Part 3: Solve.**

**1.** Year-end equivalent: $250\\times(4 + 1.5\\times0.08) = 250\\times4.12 = \\$1,030.00$ (not $\\$1,100.00$).

**2.** FV after $4$ years $\\approx \\$4,641.30$; after $3$ years $\\approx \\$3,343.79$.

**3.** Ignoring mid-year interest ($a = \\$1,000$) gives $4$-year FV $\\approx \\$4,506.11$ — less than the correct $\\$4,641.30$ by about $\\$135.18$ (not $\\$200.00$).
`,
  },
  {
    id: `math-11-108`,
    case_id: `MATH 11.108`,
    title: `Home Mortgage: Outstanding Balance Partway Through the Term`,
    subsection: `11.6`,
    context: `A family takes out a \\$200,000 home mortgage at a nominal annual interest rate of 6%, compounding monthly, to be repaid with equal payments at the end of each month over 20 years. After making exactly 5 years of payments, they want to know how much principal is still outstanding.`,
    statements: [
      `The required monthly payment is approximately \\$1,432.86.`,
      `The outstanding balance immediately after the 60th monthly payment is approximately \\$169,799.20.`,
      `After 5 years of payments, more than 25% of the original \\$200,000 principal has been repaid.`,
      `The total interest paid during just the first 5 years is approximately \\$55,770.92.`,
      `The total interest paid over the entire 20-year life of the loan is approximately \\$120,000.00.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The required monthly payment is approximately \\$1,432.86.**  (true)

Equal monthly instalments follow the annuity payment formula, with the rate and the number of periods both expressed in months:

$$a = \\frac{rK}{1 - (1+r)^{-n}}$$

The nominal 6% compounds monthly, so the monthly rate is $r = 0.06/12 = 0.005$, and 20 years of monthly payments gives $n = 20 \\times 12 = 240$:

$$rK = 0.005 \\times 200,000 = 1,000$$

$$(1.005)^{-240} \\approx 0.302096$$

$$1 - 0.302096 = 0.697904$$

$$a \\approx \\frac{1,000}{0.697904}$$

$$a \\approx 1,432.86$$

The claim gives about \\$1,432.86 per month, and the calculation returns \\$1,432.86, so the statement is true.`,
      `**B) The outstanding balance immediately after the 60th monthly payment is approximately \\$169,799.20.**  (true)

The balance still owed part way through a loan is the present value of the payments that remain:

$$B_m = \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-m)}\\bigr]$$

The monthly payment is

$$a = \\frac{0.005 \\times 200,000}{1 - (1.005)^{-240}} \\approx \\frac{1,000}{0.697904} \\approx 1,432.86$$

After $m = 60$ payments out of $n = 240$, there are $240 - 60 = 180$ left:

$$(1.005)^{-180} \\approx 0.407482$$

$$1 - 0.407482 = 0.592518$$

$$\\frac{1,432.86}{0.005} \\approx 286,572.42$$

$$B_{60} \\approx 286,572.42 \\times 0.592518$$

$$B_{60} \\approx 169,799.20$$

The claim gives about \\$169,799.20, and the calculation returns \\$169,799.20, so the statement is true.`,
      `**C) After 5 years of payments, more than 25% of the original \\$200,000 principal has been repaid.**  (false)

Principal repaid is the drop in the balance, so the balance after five years is needed first:

$$B_{60} = \\frac{a}{r}\\bigl[1 - (1.005)^{-180}\\bigr] \\approx 286,572.42 \\times 0.592518 \\approx 169,799.20$$

The principal cleared so far is

$$200,000.00 - 169,799.20 = 30,200.80$$

As a share of the original loan:

$$\\frac{30,200.80}{200,000.00} \\approx 0.151004$$

$$0.151004 \\approx 15.10\\%$$

The claim needs more than 25% repaid:

$$25\\% - 15.10\\% = 9.90 \\text{ percentage points}$$

Early payments go mostly to interest, so only about 15.10% of the principal is gone after five years, nearly ten percentage points short of the claim, and the statement is false.`,
      `**D) The total interest paid during just the first 5 years is approximately \\$55,770.92.**  (true)

Interest paid over a stretch of the loan is everything handed over minus the principal actually cleared:

$$\\text{interest} = a \\times m - (K - B_m)$$

Sixty payments of \\$1,432.86 come to

$$1,432.86 \\times 60 \\approx 85,971.73$$

The balance after those payments is the present value of the 180 remaining ones:

$$B_{60} \\approx 286,572.42 \\times 0.592518 \\approx 169,799.20$$

so the principal cleared is

$$200,000.00 - 169,799.20 = 30,200.80$$

The interest inside the first five years is therefore

$$85,971.73 - 30,200.80 = 55,770.93$$

The claim gives about \\$55,770.92, which the calculation matches to the cent, so the statement is true.`,
      `**E) The total interest paid over the entire 20-year life of the loan is approximately \\$120,000.00.**  (false)

Lifetime interest is the sum of every payment minus the amount borrowed:

$$\\text{total interest} = a \\times n - K$$

The monthly payment is

$$a = \\frac{0.005 \\times 200,000}{1 - (1.005)^{-240}} \\approx 1,432.86$$

Over the full 240 months:

$$1,432.86 \\times 240 \\approx 343,886.91$$

Subtracting the \\$200,000 borrowed:

$$343,886.91 - 200,000.00 = 143,886.91$$

The claim states about \\$120,000.00:

$$143,886.91 - 120,000.00 = 23,886.91$$

The family actually pays about \\$143,886.91 in interest, nearly \\$24,000 more than the stated figure, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `A family takes out a \\$200,000 home mortgage at a nominal annual interest rate of 6%, compounding monthly, to be repaid with equal payments at the end of each month over 20 years. After making exactly 5 years of payments, they want to know how much principal is still outstanding.

**Part 1: Setup.**

$K = \\$200,000$; nominal annual rate $6\\%$, compounding monthly

Term = $20$ years ($n = 240$ monthly payments); $m = 60$ payments already made

**Part 2: Formula.**

Monthly rate $r = 0.06/12$; payment $a = rK/[1-(1+r)^{-n}]$

Outstanding balance after $m$ payments: $(a/r)[1-(1+r)^{-(n-m)}]$

**Part 3: Solve.**

**1.** $r = 0.005$; $a = 1,000/[1-(1.005)^{-240}] \\approx \\$1,432.86$.

**2.** Remaining balance after $60$ payments: $(1,432.86/0.005)[1-(1.005)^{-180}] \\approx \\$169,799.20$.

**3.** Principal repaid: $\\$30,200.80$ ($\\approx 15.10\\%$ of original — not more than $25\\%$). Interest in first $5$ years $\\approx \\$55,770.92$; full-term interest $\\approx \\$143,886.91$ (not $\\$120,000.00$).
`,
  },
  {
    id: `math-11-109`,
    case_id: `MATH 11.109`,
    title: `Fixed Repayment Schedule on a Large Equipment Loan`,
    subsection: `11.6`,
    context: `A manufacturing company borrows \\$120,000 at 14% annual interest and chooses to repay a fixed \\$25,000 at the end of each year, continuing until the loan is retired, with a final smaller payment to clear whatever balance remains.`,
    statements: [
      `The smallest whole number of yearly payments needed to retire the loan is n = 9.`,
      `The ninth and final payment is approximately \\$13,100.16.`,
      `The total interest paid over the life of the loan is approximately \\$105,000.00.`,
      `The total amount actually paid over the life of the loan is approximately \\$210,000.00.`,
      `Assuming all 9 payments are full \\$25,000 payments overstates the true total amount paid by more than \\$10,000.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The smallest whole number of yearly payments needed to retire the loan is n = 9.**  (true)

When a borrower repays a fixed amount each year until the debt clears, the number of payments is the smallest whole number $n$ satisfying

$$n \\ge \\frac{\\ln a - \\ln(a - rK)}{\\ln(1+r)}$$

Substituting the fixed payment $a = 25,000$, the rate $r = 14\\% = 0.14$ and the loan $K = 120,000$:

$$rK = 0.14 \\times 120,000 = 16,800$$

$$a - rK = 25,000 - 16,800 = 8,200$$

$$\\ln 25,000 \\approx 10.126631, \\qquad \\ln 8,200 \\approx 9.011889$$

$$10.126631 - 9.011889 = 1.114742$$

$$\\ln 1.14 \\approx 0.131028$$

$$\\frac{1.114742}{0.131028} \\approx 8.5076$$

Eight payments leave part of the debt standing, since the threshold sits above 8, so rounding up gives

$$n = 9$$

The claim names $n = 9$, so the statement is true.`,
      `**B) The ninth and final payment is approximately \\$13,100.16.**  (true)

The final payment settles whatever the loan still owes after the full payments, so compare the debt grown forward with the payments grown forward.

The debt after eight years of interest is

$$K(1+r)^{8} = 120,000 \\times (1.14)^{8}$$

$$(1.14)^{8} \\approx 2.852586$$

$$120,000 \\times 2.852586 \\approx 342,310.37$$

The eight \\$25,000 payments accumulate to

$$\\frac{a}{r}\\bigl[(1+r)^{8} - 1\\bigr] = \\frac{25,000}{0.14}(2.852586 - 1)$$

$$\\approx 178,571.43 \\times 1.852586 \\approx 330,819.00$$

The shortfall at the end of year 8 is

$$342,310.37 - 330,819.00 = 11,491.37$$

Carrying that balance one more year at 14%:

$$11,491.37 \\times 1.14 \\approx 13,100.16$$

The claim gives about \\$13,100.16 for the ninth payment, and the calculation returns \\$13,100.16, so the statement is true.`,
      `**C) The total interest paid over the life of the loan is approximately \\$105,000.00.**  (false)

Interest over the life of the loan is everything paid beyond the amount borrowed:

$$\\text{total interest} = \\text{total paid} - K$$

Eight full payments come to

$$8 \\times 25,000 = 200,000.00$$

The ninth payment clears the year-8 balance:

$$120,000 \\times (1.14)^{8} \\approx 342,310.37$$

$$\\frac{25,000}{0.14}\\bigl[(1.14)^{8} - 1\\bigr] \\approx 330,819.00$$

$$342,310.37 - 330,819.00 = 11,491.37$$

$$11,491.37 \\times 1.14 \\approx 13,100.16$$

So the borrower pays

$$200,000.00 + 13,100.16 = 213,100.16$$

and the interest inside that is

$$213,100.16 - 120,000.00 = 93,100.16$$

The claim states about \\$105,000.00:

$$105,000.00 - 93,100.16 = 11,899.84$$

The true interest bill is about \\$93,100.16, nearly \\$12,000 below the stated figure, so the statement is false.`,
      `**D) The total amount actually paid over the life of the loan is approximately \\$210,000.00.**  (false)

The total paid is eight full payments plus a smaller ninth one, so the ninth payment has to be worked out rather than assumed:

$$\\text{total paid} = 8a + \\text{final payment}$$

The eight full payments give

$$8 \\times 25,000 = 200,000.00$$

The balance they leave at the end of year 8 is the debt grown forward minus the payments grown forward:

$$120,000 \\times (1.14)^{8} \\approx 342,310.37$$

$$\\frac{25,000}{0.14}\\bigl[(1.14)^{8} - 1\\bigr] \\approx 330,819.00$$

$$342,310.37 - 330,819.00 = 11,491.37$$

$$11,491.37 \\times 1.14 \\approx 13,100.16$$

Adding the pieces:

$$200,000.00 + 13,100.16 = 213,100.16$$

The claim states about \\$210,000.00:

$$213,100.16 - 210,000.00 = 3,100.16$$

The company actually pays about \\$213,100.16, so the statement is false.`,
      `**E) Assuming all 9 payments are full \\$25,000 payments overstates the true total amount paid by more than \\$10,000.**  (true)

The comparison needs the true total against the total that nine full payments would give.

Nine full payments would be

$$9 \\times 25,000 = 225,000.00$$

The true total uses the smaller ninth payment. Eight full payments leave a balance at the end of year 8 of

$$120,000 \\times (1.14)^{8} - \\frac{25,000}{0.14}\\bigl[(1.14)^{8} - 1\\bigr]$$

$$\\approx 342,310.37 - 330,819.00 = 11,491.37$$

$$11,491.37 \\times 1.14 \\approx 13,100.16$$

$$\\text{total paid} \\approx 8 \\times 25,000 + 13,100.16 = 213,100.16$$

The overstatement is

$$225,000.00 - 213,100.16 = 11,899.84$$

The claim requires an overstatement above \\$10,000, and \\$11,899.84 clears it by \\$1,899.84, so the statement is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 109,
    solution_overview: `A manufacturing company borrows \\$120,000 at 14% annual interest and chooses to repay a fixed \\$25,000 at the end of each year, continuing until the loan is retired, with a final smaller payment to clear whatever balance remains.

**Part 1: Setup.**

$K = \\$120,000$; $r = 0.14$; fixed annual payment $a = \\$25,000$

**Part 2: Formula.**

Smallest integer $n \\ge [\\ln a - \\ln(a-rK)]/\\ln(1+r)$

After $m = n-1$ full payments, compare loan FV $K(1+r)^{m}$ to payments FV $(a/r)[(1+r)^{m}-1]$ and roll the residual forward one year for the final payment

**Part 3: Solve.**

**1.** Threshold $\\approx 8.508$, so $n = 9$ ($8$ full payments plus a smaller $9$th).

**2.** After $8$ years: loan FV $\\approx \\$342,310.37$; payments FV $\\approx \\$330,819.00$; remaining $\\approx \\$11,491.37$; final payment $\\approx \\$13,100.16$.

**3.** Total paid $\\approx \\$213,100.16$; true interest $\\approx \\$93,100.16$ (not $\\$105,000$). Treating all nine as full $\\$25,000$ payments overstates the total by about $\\$11,900$ (more than $\\$10,000$).
`,
  },
  {
    id: `math-11-110`,
    case_id: `MATH 11.110`,
    title: `Capstone: Equipment Loan Paid as an Annuity Due, Plus a Separate Reserve Fund`,
    subsection: `11.6`,
    context: `A manufacturing company borrows \\$90,000 to buy new equipment, to be repaid in 8 equal annual instalments with the first payment due immediately and the rest due at the beginning of each following year, at an annual interest rate of 12%. Independently, to prepare for future maintenance costs, the company also deposits \\$300 at the end of each quarter into a separate reserve account that pays 9% annual interest, credited once per year.`,
    statements: [
      `The required annuity-due payment on the equipment loan is approximately \\$16,176.12.`,
      `The interest portion of the second loan payment is approximately \\$8,858.87.`,
      `The interest portion of the third loan payment is larger than the interest portion of the second payment.`,
      `The year-end equivalent value of the reserve fund's quarterly deposits made during a single year is \\$1,240.50, and the reserve fund's balance after 3 years is approximately \\$4,066.48.`,
      `The combined total of the loan's first three payments is less than the reserve fund's balance after 3 years.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The required annuity-due payment on the equipment loan is approximately \\$16,176.12.**  (true)

With the first instalment due immediately, one payment escapes discounting and the other seven form an ordinary annuity, so the amount borrowed equals the payment times the combined factor:

$$K = a\\Bigl(1 + \\frac{1}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]\\Bigr)$$

Substituting $r = 12\\% = 0.12$ and $n = 8$ payments, so seven are discounted:

$$(1.12)^{-7} \\approx 0.452349$$

$$1 - 0.452349 = 0.547651$$

$$\\frac{1}{0.12} \\approx 8.333333$$

$$8.333333 \\times 0.547651 \\approx 4.563757$$

$$\\text{factor} = 1 + 4.563757 = 5.563757$$

$$a \\approx \\frac{90,000}{5.563757}$$

$$a \\approx 16,176.12$$

The claim gives about \\$16,176.12, and the calculation returns \\$16,176.12, so the statement is true.`,
      `**B) The interest portion of the second loan payment is approximately \\$8,858.87.**  (true)

Interest is charged on the balance carried through the year, and with the first payment made immediately that balance is the loan minus one instalment.

The instalment comes from the annuity-due relation:

$$a = \\frac{90,000}{1 + \\frac{1}{0.12}\\bigl[1 - (1.12)^{-7}\\bigr]} \\approx \\frac{90,000}{5.563757} \\approx 16,176.12$$

The first payment lands at once, before any interest accrues:

$$90,000.00 - 16,176.12 = 73,823.88$$

That balance carries for one year at 12%:

$$0.12 \\times 73,823.88 \\approx 8,858.87$$

The claim gives about \\$8,858.87 as the interest inside the second payment, and the calculation returns \\$8,858.87, so the statement is true.`,
      `**C) The interest portion of the third loan payment is larger than the interest portion of the second payment.**  (false)

Interest falls whenever the balance falls, so the schedule needs to be carried one more step.

The instalment is

$$a \\approx \\frac{90,000}{5.563757} \\approx 16,176.12$$

The immediate first payment leaves

$$90,000.00 - 16,176.12 = 73,823.88$$

Interest built up over year 1 is

$$0.12 \\times 73,823.88 \\approx 8,858.87$$

so the second payment reduces principal by

$$16,176.12 - 8,858.87 = 7,317.25$$

$$73,823.88 - 7,317.25 = 66,506.63$$

Interest carried into the third payment is

$$0.12 \\times 66,506.63 \\approx 7,980.80$$

Comparing the two interest charges:

$$8,858.87 - 7,980.80 = 878.07$$

The third payment carries \\$878.07 less interest than the second, not more, so the statement is false.`,
      `**D) The year-end equivalent value of the reserve fund's quarterly deposits made during a single year is \\$1,240.50, and the reserve fund's balance after 3 years is approximately \\$4,066.48.**  (true)

The reserve deposits land at quarter ends and earn simple interest for the rest of the year, which collapses to a single year-end amount:

$$\\text{year-end value} = D(4 + 1.5r)$$

Substituting $D = 300$ and the reserve rate $r = 9\\% = 0.09$:

$$1.5 \\times 0.09 = 0.135$$

$$4 + 0.135 = 4.135$$

$$300 \\times 4.135 = 1,240.50$$

That equivalent deposit then compounds annually like an ordinary annuity:

$$F_N = \\frac{a}{r}\\bigl[(1+r)^{N} - 1\\bigr]$$

$$(1.09)^{3} \\approx 1.295029$$

$$1.295029 - 1 = 0.295029$$

$$\\frac{1,240.50}{0.09} \\approx 13,783.33$$

$$F_3 \\approx 13,783.33 \\times 0.295029$$

$$F_3 \\approx 4,066.48$$

Both figures in the claim, \\$1,240.50 and \\$4,066.48, match the calculation, so the statement is true.`,
      `**E) The combined total of the loan's first three payments is less than the reserve fund's balance after 3 years.**  (false)

The two sides of the comparison come from different arrangements, so each needs its own calculation.

The loan instalment is

$$a \\approx \\frac{90,000}{1 + \\frac{1}{0.12}\\bigl[1 - (1.12)^{-7}\\bigr]} \\approx \\frac{90,000}{5.563757} \\approx 16,176.12$$

so the first three payments total

$$3 \\times 16,176.12 = 48,528.36$$

The reserve fund converts its quarterly deposits to a year-end amount and compounds them:

$$a = 300(4 + 1.5 \\times 0.09) = 1,240.50$$

$$F_3 = \\frac{1,240.50}{0.09}\\bigl[(1.09)^{3} - 1\\bigr] \\approx 13,783.33 \\times 0.295029 \\approx 4,066.48$$

Comparing the two:

$$48,528.36 - 4,066.48 = 44,461.88$$

The loan payments exceed the reserve balance by \\$44,461.88, so they are far from being the smaller amount and the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 110,
    solution_overview: `A manufacturing company borrows \\$90,000 to buy new equipment, to be repaid in 8 equal annual instalments with the first payment due immediately and the rest due at the beginning of each following year, at an annual interest rate of 12%. Independently, to prepare for future maintenance costs, the company also deposits \\$300 at the end of each quarter into a separate reserve account that pays 9% annual interest, credited once per year.

**Part 1: Setup.**

Equipment loan: $K = \\$90,000$, $r = 0.12$, $n = 8$, first payment immediate

Reserve: $D = \\$300$ quarterly, annual rate $0.09$, $N = 3$ years

**Part 2: Formula.**

Annuity-due: $K = a + (a/r)[1-(1+r)^{-(n-1)}]$; interest $= r \\times$ start-of-period balance

Year-end equivalent $D(4+1.5r)$; $F_N = (a/r)[(1+r)^{N}-1]$

**Part 3: Solve.**

**1.** $a \\approx \\$16,176.12$; balance after the immediate first payment $\\approx \\$73,823.88$.

**2.** Second-payment interest $\\approx \\$8,858.87$; third-payment interest $\\approx \\$7,980.79$ (smaller than the second, not larger).

**3.** Reserve year-end equivalent $\\$1,240.50$; $3$-year FV $\\approx \\$4,066.48$ — far below the loan's first three payments ($\\approx \\$48,528$).
`,
  },
  {
    id: `math-11-111`,
    case_id: `MATH 11.111`,
    title: `Capstone: Comparing Three Payment Schedules for a Building Site`,
    subsection: `11.6`,
    context: `A construction firm wants to buy a building site and is choosing among three payment schedules. Schedule I: pay \\$500,000 in cash immediately. Schedule II: pay \\$95,000 per year for 7 years, with the first instalment paid immediately. Schedule III: pay \\$150,000 in cash immediately, plus \\$60,000 per year for 10 years, with the first of these instalments paid one year later. The firm wants to know which schedule is cheapest in present-value terms first at a 9% annual interest rate, and then at a 13% annual interest rate.`,
    statements: [
      `At a 9% annual rate, the present value of Schedule II is approximately \\$521,162.27.`,
      `At a 9% annual rate, the present value of Schedule III is approximately \\$540,000.00.`,
      `At a 9% annual rate, Schedule I is the cheapest of the three schedules.`,
      `At a 13% annual rate, the present value of Schedule II is approximately \\$474,767.23.`,
      `At a 13% annual rate, Schedule III becomes the cheapest of the three schedules.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) At a 9% annual rate, the present value of Schedule II is approximately \\$521,162.27.**  (true)

Schedule II pays at the start of each year, so the first instalment is not discounted and the other six form an ordinary annuity:

$$PV = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 95,000$, $n = 7$ instalments and $r = 9\\% = 0.09$:

$$(1.09)^{-6} \\approx 0.5962673$$

$$1 - 0.5962673 = 0.4037327$$

$$\\frac{95,000}{0.09} \\approx 1,055,555.56$$

$$1,055,555.56 \\times 0.4037327 \\approx 426,162.27$$

$$PV_{\\text{II}} \\approx 95,000 + 426,162.27$$

$$PV_{\\text{II}} \\approx 521,162.27$$

The claim gives about \\$521,162.27, and the calculation returns \\$521,162.27, so the statement is true.`,
      `**B) At a 9% annual rate, the present value of Schedule III is approximately \\$540,000.00.**  (false)

Schedule III mixes cash paid today with an ordinary annuity whose first instalment arrives a year later, so the two parts are valued separately and added:

$$PV = C_0 + \\frac{a}{r}\\bigl[1 - (1+r)^{-n}\\bigr]$$

Substituting $C_0 = 150,000$, $a = 60,000$, $n = 10$ and $r = 0.09$:

$$(1.09)^{-10} \\approx 0.4224108$$

$$1 - 0.4224108 = 0.5775892$$

$$\\frac{60,000}{0.09} \\approx 666,666.67$$

$$666,666.67 \\times 0.5775892 \\approx 385,059.46$$

$$PV_{\\text{III}} \\approx 150,000 + 385,059.46$$

$$PV_{\\text{III}} \\approx 535,059.46$$

The claim states about \\$540,000.00:

$$540,000.00 - 535,059.46 = 4,940.54$$

The true present value is about \\$535,059.46, so the statement is false.`,
      `**C) At a 9% annual rate, Schedule I is the cheapest of the three schedules.**  (true)

Cheapest means the smallest present value, so all three schedules must be valued at 9% and lined up.

Schedule I is cash today, so its present value is the sticker figure:

$$PV_{\\text{I}} = 500,000.00$$

Schedule II is an annuity due of seven instalments:

$$PV_{\\text{II}} = 95,000 + \\frac{95,000}{0.09}\\bigl[1 - (1.09)^{-6}\\bigr] \\approx 95,000 + 426,162.27 \\approx 521,162.27$$

Schedule III is cash plus a ten-year ordinary annuity:

$$PV_{\\text{III}} = 150,000 + \\frac{60,000}{0.09}\\bigl[1 - (1.09)^{-10}\\bigr] \\approx 150,000 + 385,059.46 \\approx 535,059.46$$

Comparing the two instalment plans with cash:

$$521,162.27 - 500,000.00 = 21,162.27$$

$$535,059.46 - 500,000.00 = 35,059.46$$

Both instalment plans cost more in today's money, so paying cash is cheapest at 9% and the statement is true.`,
      `**D) At a 13% annual rate, the present value of Schedule II is approximately \\$474,767.23.**  (true)

The schedule is unchanged, so the same annuity-due formula applies with the higher discount rate:

$$PV = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 95,000$, six discounted instalments and $r = 13\\% = 0.13$:

$$(1.13)^{-6} \\approx 0.4803185$$

$$1 - 0.4803185 = 0.5196815$$

$$\\frac{95,000}{0.13} \\approx 730,769.23$$

$$730,769.23 \\times 0.5196815 \\approx 379,767.23$$

$$PV_{\\text{II}} \\approx 95,000 + 379,767.23$$

$$PV_{\\text{II}} \\approx 474,767.23$$

The claim gives about \\$474,767.23, and the calculation returns \\$474,767.23, so the statement is true.`,
      `**E) At a 13% annual rate, Schedule III becomes the cheapest of the three schedules.**  (false)

Both instalment schedules have to be revalued at 13% before any ranking can be claimed.

Schedule II, an annuity due of seven instalments:

$$PV_{\\text{II}} = 95,000 + \\frac{95,000}{0.13}\\bigl[1 - (1.13)^{-6}\\bigr]$$

$$730,769.23 \\times 0.5196815 \\approx 379,767.23$$

$$PV_{\\text{II}} \\approx 95,000 + 379,767.23 \\approx 474,767.23$$

Schedule III, cash plus a ten-year ordinary annuity:

$$PV_{\\text{III}} = 150,000 + \\frac{60,000}{0.13}\\bigl[1 - (1.13)^{-10}\\bigr]$$

$$(1.13)^{-10} \\approx 0.2945883$$

$$461,538.46 \\times 0.7054117 \\approx 325,574.61$$

$$PV_{\\text{III}} \\approx 150,000 + 325,574.61 \\approx 475,574.61$$

Comparing the two, with cash at \\$500,000:

$$475,574.61 - 474,767.23 = 807.38$$

Schedule III does close most of the gap at 13%, but it still costs \\$807.38 more than Schedule II, so Schedule II is the cheapest and the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 111,
    solution_overview: `A construction firm wants to buy a building site and is choosing among three payment schedules. Schedule I: pay \\$500,000 in cash immediately. Schedule II: pay \\$95,000 per year for 7 years, with the first instalment paid immediately. Schedule III: pay \\$150,000 in cash immediately, plus \\$60,000 per year for 10 years, with the first of these instalments paid one year later. The firm wants to know which schedule is cheapest in present-value terms first at a 9% annual interest rate, and then at a 13% annual interest rate.

**Part 1: Setup.**

I: $\\$500,000$ cash; II: $a = \\$95,000$, $n = 7$, due; III: $\\$150,000$ + $a = \\$60,000$, $n = 10$ ordinary

Rates: $9\\%$ and $13\\%$

**Part 2: Formula.**

Due: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$; ordinary: $PV = (a/r)[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** At $9\\%$: $PV_{\\mathrm{II}} \\approx \\$521,162$; $PV_{\\mathrm{III}} \\approx \\$535,059$; Schedule I ($\\$500,000$) is cheapest.

**2.** At $13\\%$: $PV_{\\mathrm{II}} \\approx \\$474,767$; $PV_{\\mathrm{III}} \\approx \\$475,575$; Schedule II is cheapest (III is close, not cheapest).
`,
  },
  {
    id: `math-11-112`,
    case_id: `MATH 11.112`,
    title: `Capstone: Comparing Three Payment Schedules for a Hospital Imaging Center`,
    subsection: `11.6`,
    context: `A hospital system is negotiating the purchase of a new imaging center and equipment package, and is choosing among three payment schedules. Schedule I: pay \\$850,000 in cash immediately. Schedule II: pay \\$140,000 per year for 9 years, with the first instalment paid immediately. Schedule III: pay \\$300,000 in cash immediately, plus \\$80,000 per year for 11 years, with the first of these instalments paid one year later. The hospital wants to know which schedule is cheapest in present-value terms first at an 8% annual interest rate, and then at a 12% annual interest rate.`,
    statements: [
      `At an 8% annual rate, the present value of Schedule II is approximately \\$944,529.45.`,
      `At an 8% annual rate, the present value of Schedule III is approximately \\$871,117.14.`,
      `At an 8% annual rate, Schedule I is the cheapest of the three schedules.`,
      `At a 12% annual rate, the present value of Schedule III is approximately \\$775,015.93.`,
      `At a 12% annual rate, Schedule II becomes the cheapest of the three schedules.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) At an 8% annual rate, the present value of Schedule II is approximately \\$944,529.45.**  (true)

Schedule II pays at the start of each year, so one instalment escapes discounting and the remaining eight form an ordinary annuity:

$$PV = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 140,000$, $n = 9$ instalments and $r = 8\\% = 0.08$:

$$(1.08)^{-8} \\approx 0.5402689$$

$$1 - 0.5402689 = 0.4597311$$

$$\\frac{140,000}{0.08} = 1,750,000$$

$$1,750,000 \\times 0.4597311 \\approx 804,529.45$$

$$PV_{\\text{II}} \\approx 140,000 + 804,529.45$$

$$PV_{\\text{II}} \\approx 944,529.45$$

The claim gives about \\$944,529.45, and the calculation returns \\$944,529.45, so the statement is true.`,
      `**B) At an 8% annual rate, the present value of Schedule III is approximately \\$871,117.14.**  (true)

Schedule III has cash today plus an ordinary annuity starting a year later, so each part is valued on its own and the results are added:

$$PV = C_0 + \\frac{a}{r}\\bigl[1 - (1+r)^{-n}\\bigr]$$

Substituting $C_0 = 300,000$, $a = 80,000$, $n = 11$ and $r = 0.08$:

$$(1.08)^{-11} \\approx 0.4288829$$

$$1 - 0.4288829 = 0.5711171$$

$$\\frac{80,000}{0.08} = 1,000,000$$

$$1,000,000 \\times 0.5711171 \\approx 571,117.14$$

$$PV_{\\text{III}} \\approx 300,000 + 571,117.14$$

$$PV_{\\text{III}} \\approx 871,117.14$$

The claim gives about \\$871,117.14, and the calculation returns \\$871,117.14, so the statement is true.`,
      `**C) At an 8% annual rate, Schedule I is the cheapest of the three schedules.**  (true)

Ranking the schedules means valuing all three at 8% and comparing.

Schedule I is cash today:

$$PV_{\\text{I}} = 850,000.00$$

Schedule II is an annuity due of nine instalments:

$$PV_{\\text{II}} = 140,000 + \\frac{140,000}{0.08}\\bigl[1 - (1.08)^{-8}\\bigr] \\approx 140,000 + 804,529.45 \\approx 944,529.45$$

Schedule III is cash plus an eleven-year ordinary annuity:

$$PV_{\\text{III}} = 300,000 + \\frac{80,000}{0.08}\\bigl[1 - (1.08)^{-11}\\bigr] \\approx 300,000 + 571,117.14 \\approx 871,117.14$$

Comparing each instalment plan with cash:

$$871,117.14 - 850,000.00 = 21,117.14$$

$$944,529.45 - 850,000.00 = 94,529.45$$

Both plans cost more in present-value terms than paying \\$850,000 today, so Schedule I is cheapest at 8% and the statement is true.`,
      `**D) At a 12% annual rate, the present value of Schedule III is approximately \\$775,015.93.**  (true)

The same split applies at the higher rate, with cash today untouched and the annuity discounted at 12%:

$$PV = C_0 + \\frac{a}{r}\\bigl[1 - (1+r)^{-n}\\bigr]$$

Substituting $C_0 = 300,000$, $a = 80,000$, $n = 11$ and $r = 12\\% = 0.12$:

$$(1.12)^{-11} \\approx 0.2874761$$

$$1 - 0.2874761 = 0.7125239$$

$$\\frac{80,000}{0.12} \\approx 666,666.67$$

$$666,666.67 \\times 0.7125239 \\approx 475,015.93$$

$$PV_{\\text{III}} \\approx 300,000 + 475,015.93$$

$$PV_{\\text{III}} \\approx 775,015.93$$

The claim gives about \\$775,015.93, and the calculation returns \\$775,015.93, so the statement is true.`,
      `**E) At a 12% annual rate, Schedule II becomes the cheapest of the three schedules.**  (false)

All three schedules need revaluing at 12% before the cheapest can be named.

Schedule I is unaffected by the rate:

$$PV_{\\text{I}} = 850,000.00$$

Schedule II, the annuity due of nine instalments:

$$(1.12)^{-8} \\approx 0.4038832$$

$$1,166,666.67 \\times 0.5961168 \\approx 695,469.57$$

$$PV_{\\text{II}} \\approx 140,000 + 695,469.57 \\approx 835,469.57$$

Schedule III, cash plus an eleven-year ordinary annuity:

$$(1.12)^{-11} \\approx 0.2874761$$

$$666,666.67 \\times 0.7125239 \\approx 475,015.93$$

$$PV_{\\text{III}} \\approx 300,000 + 475,015.93 \\approx 775,015.93$$

Comparing the two instalment plans:

$$835,469.57 - 775,015.93 = 60,453.64$$

Schedule II does undercut cash at this rate, but Schedule III comes in \\$60,453.64 lower still, so Schedule III is the cheapest and the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 112,
    solution_overview: `A hospital system is negotiating the purchase of a new imaging center and equipment package, and is choosing among three payment schedules. Schedule I: pay \\$850,000 in cash immediately. Schedule II: pay \\$140,000 per year for 9 years, with the first instalment paid immediately. Schedule III: pay \\$300,000 in cash immediately, plus \\$80,000 per year for 11 years, with the first of these instalments paid one year later. The hospital wants to know which schedule is cheapest in present-value terms first at an 8% annual interest rate, and then at a 12% annual interest rate.

**Part 1: Setup.**

I: $\\$850,000$ cash; II: $a = \\$140,000$, $n = 9$, due; III: $\\$300,000$ + $a = \\$80,000$, $n = 11$ ordinary

Rates: $8\\%$ and $12\\%$

**Part 2: Formula.**

Due: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$; ordinary: $PV = (a/r)[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** At $8\\%$: $PV_{\\mathrm{II}} \\approx \\$944,529$; $PV_{\\mathrm{III}} \\approx \\$871,117$; Schedule I ($\\$850,000$) is cheapest.

**2.** At $12\\%$: $PV_{\\mathrm{III}} \\approx \\$775,016$; $PV_{\\mathrm{II}} \\approx \\$835,470$; Schedule III becomes cheapest (not II).
`,
  },
  {
    id: `math-11-113`,
    case_id: `MATH 11.113`,
    title: `Capstone: Comparing Three Payment Schedules for a Cargo Vessel`,
    subsection: `11.6`,
    context: `A shipping company is negotiating the purchase of a cargo vessel and is choosing among three payment schedules. Schedule I: pay \\$2,400,000 in cash immediately. Schedule II: pay \\$340,000 per year for 10 years, with the first instalment paid immediately. Schedule III: pay \\$600,000 in cash immediately, plus \\$250,000 per year for 9 years, with the first of these instalments paid one year later. The company wants to know how the ranking of Schedule I versus Schedule II changes between a 7.5% annual interest rate and a 11.5% annual interest rate.`,
    statements: [
      `At a 7.5% annual rate, the present value of Schedule II is approximately \\$2,508,821.59.`,
      `At a 7.5% annual rate, the present value of Schedule III is approximately \\$2,250,000.00.`,
      `At a 7.5% annual rate, Schedule I is cheaper than Schedule II.`,
      `At an 11.5% annual rate, the present value of Schedule II is approximately \\$2,100,000.00.`,
      `At an 11.5% annual rate, Schedule I is still cheaper than Schedule II.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) At a 7.5% annual rate, the present value of Schedule II is approximately \\$2,508,821.59.**  (true)

Schedule II pays at the start of each year, so the first instalment is undiscounted and the other nine form an ordinary annuity:

$$PV = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 340,000$, $n = 10$ instalments and $r = 7.5\\% = 0.075$:

$$(1.075)^{-9} \\approx 0.5215835$$

$$1 - 0.5215835 = 0.4784165$$

$$\\frac{340,000}{0.075} \\approx 4,533,333.33$$

$$4,533,333.33 \\times 0.4784165 \\approx 2,168,821.59$$

$$PV_{\\text{II}} \\approx 340,000 + 2,168,821.59$$

$$PV_{\\text{II}} \\approx 2,508,821.59$$

The claim gives about \\$2,508,821.59, and the calculation returns \\$2,508,821.59, so the statement is true.`,
      `**B) At a 7.5% annual rate, the present value of Schedule III is approximately \\$2,250,000.00.**  (false)

Schedule III pays cash today and then an ordinary annuity beginning a year later, so the parts are valued separately and added:

$$PV = C_0 + \\frac{a}{r}\\bigl[1 - (1+r)^{-n}\\bigr]$$

Substituting $C_0 = 600,000$, $a = 250,000$, $n = 9$ and $r = 0.075$:

$$(1.075)^{-9} \\approx 0.5215835$$

$$1 - 0.5215835 = 0.4784165$$

$$\\frac{250,000}{0.075} \\approx 3,333,333.33$$

$$3,333,333.33 \\times 0.4784165 \\approx 1,594,721.76$$

$$PV_{\\text{III}} \\approx 600,000 + 1,594,721.76$$

$$PV_{\\text{III}} \\approx 2,194,721.76$$

The claim states about \\$2,250,000.00:

$$2,250,000.00 - 2,194,721.76 = 55,278.24$$

The true present value is about \\$2,194,721.76, so the statement is false.`,
      `**C) At a 7.5% annual rate, Schedule I is cheaper than Schedule II.**  (true)

Schedule I is cash today, so no discounting applies to it:

$$PV_{\\text{I}} = 2,400,000.00$$

Schedule II is an annuity due of ten instalments at 7.5%:

$$PV_{\\text{II}} = 340,000 + \\frac{340,000}{0.075}\\bigl[1 - (1.075)^{-9}\\bigr]$$

$$(1.075)^{-9} \\approx 0.5215835$$

$$4,533,333.33 \\times 0.4784165 \\approx 2,168,821.59$$

$$PV_{\\text{II}} \\approx 340,000 + 2,168,821.59 \\approx 2,508,821.59$$

Comparing the two:

$$2,508,821.59 - 2,400,000.00 = 108,821.59$$

At 7.5% the instalment schedule costs \\$108,821.59 more in today's money, so paying cash is the cheaper of the two and the statement is true.`,
      `**D) At an 11.5% annual rate, the present value of Schedule II is approximately \\$2,100,000.00.**  (false)

The instalments are unchanged, so the annuity-due formula is applied again at the higher rate:

$$PV = a + \\frac{a}{r}\\bigl[1 - (1+r)^{-(n-1)}\\bigr]$$

Substituting $a = 340,000$, nine discounted instalments and $r = 11.5\\% = 0.115$:

$$(1.115)^{-9} \\approx 0.3754276$$

$$1 - 0.3754276 = 0.6245724$$

$$\\frac{340,000}{0.115} \\approx 2,956,521.74$$

$$2,956,521.74 \\times 0.6245724 \\approx 1,846,561.89$$

$$PV_{\\text{II}} \\approx 340,000 + 1,846,561.89$$

$$PV_{\\text{II}} \\approx 2,186,561.89$$

The claim states about \\$2,100,000.00:

$$2,186,561.89 - 2,100,000.00 = 86,561.89$$

The true present value is about \\$2,186,561.89, so the statement is false.`,
      `**E) At an 11.5% annual rate, Schedule I is still cheaper than Schedule II.**  (false)

Cash is fixed at its face amount, while the instalment schedule shrinks in today's terms as the discount rate rises, so Schedule II must be revalued at 11.5%:

$$PV_{\\text{II}} = 340,000 + \\frac{340,000}{0.115}\\bigl[1 - (1.115)^{-9}\\bigr]$$

$$(1.115)^{-9} \\approx 0.3754276$$

$$1 - 0.3754276 = 0.6245724$$

$$2,956,521.74 \\times 0.6245724 \\approx 1,846,561.89$$

$$PV_{\\text{II}} \\approx 340,000 + 1,846,561.89 \\approx 2,186,561.89$$

Schedule I still costs \\$2,400,000.00 today. Comparing:

$$2,400,000.00 - 2,186,561.89 = 213,438.11$$

At 11.5% the instalment plan is \\$213,438.11 cheaper than cash, so cash is no longer the better of the two and the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 113,
    solution_overview: `A shipping company is negotiating the purchase of a cargo vessel and is choosing among three payment schedules. Schedule I: pay \\$2,400,000 in cash immediately. Schedule II: pay \\$340,000 per year for 10 years, with the first instalment paid immediately. Schedule III: pay \\$600,000 in cash immediately, plus \\$250,000 per year for 9 years, with the first of these instalments paid one year later. The company wants to know how the ranking of Schedule I versus Schedule II changes between a 7.5% annual interest rate and a 11.5% annual interest rate.

**Part 1: Setup.**

I: $\\$2,400,000$ cash; II: $a = \\$340,000$, $n = 10$, due; III: $\\$600,000$ + $a = \\$250,000$, $n = 9$ ordinary

Rates: $7.5\\%$ and $11.5\\%$

**Part 2: Formula.**

Due: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$; ordinary: $PV = (a/r)[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** At $7.5\\%$: $PV_{\\mathrm{II}} \\approx \\$2,508,822$; $PV_{\\mathrm{III}} \\approx \\$2,194,722$; cash (I) beats II.

**2.** At $11.5\\%$: $PV_{\\mathrm{II}} \\approx \\$2,186,562$; $PV_{\\mathrm{III}} \\approx \\$1,957,766$; II now beats cash — the I vs II ranking flips (III stays cheapest overall).
`,
  },
  {
    id: `math-11-114`,
    case_id: `MATH 11.114`,
    title: `A small bakery invests \\$8,000 in a new commercial oven`,
    subsection: `11.7`,
    context: `A small bakery invests \\$8,000 in a new commercial oven. The oven is expected to generate a single net return of \\$9,600, paid in full at the end of one year.`,
    statements: [
      `The internal rate of return for this project is exactly 20%.`,
      `At an interest rate of 15%, the net present value of this project is positive.`,
      `At an interest rate of 25%, the net present value of this project is positive.`,
      `If the return had instead been \\$10,000, with the outlay unchanged, the internal rate of return would exceed 24%.`,
      `This project has a unique internal rate of return greater than -1.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The internal rate of return for this project is exactly 20%.**  (true)

The internal rate of return is the discount rate at which the project's net present value is zero. For a single outlay $a$ today and a single return $b$ one year later:

$$-a + \\frac{b}{1+r} = 0$$

Rearranging gives the one-year rate directly:

$$r = \\frac{b}{a} - 1$$

Substituting the \\$8,000 spent on the oven and the \\$9,600 returned a year later:

$$r = \\frac{9,600}{8,000} - 1$$

$$r = 1.20 - 1$$

$$r = 0.20 = 20\\%$$

The claim names exactly 20%, and the calculation returns exactly 20%, so the statement is true.`,
      `**B) At an interest rate of 15%, the net present value of this project is positive.**  (true)

Net present value discounts each future amount back to today and subtracts the outlay:

$$A = a_0 + \\frac{a_1}{1+r}$$

Substituting $a_0 = -8,000$, $a_1 = 9,600$ and $r = 15\\% = 0.15$:

$$\\frac{9,600}{1.15} \\approx 8,347.83$$

$$A \\approx -8,000.00 + 8,347.83$$

$$A \\approx 347.83$$

The claim says the net present value is positive, and the calculation gives a surplus of \\$347.83, which sits above zero. This is what should happen, since 15% is below the project's 20% internal rate of return. The statement is true.`,
      `**C) At an interest rate of 25%, the net present value of this project is positive.**  (false)

Net present value uses the same formula with a different discount rate:

$$A = a_0 + \\frac{a_1}{1+r}$$

Substituting $a_0 = -8,000$, $a_1 = 9,600$ and $r = 25\\% = 0.25$:

$$\\frac{9,600}{1.25} = 7,680.00$$

$$A = -8,000.00 + 7,680.00$$

$$A = -320.00$$

The claim says the net present value is positive, but the calculation returns a shortfall of \\$320.00, which is below zero. The result follows from the 25% rate sitting above the project's 20% internal rate of return, so the statement is false.`,
      `**D) If the return had instead been \\$10,000, with the outlay unchanged, the internal rate of return would exceed 24%.**  (true)

For a one-year project the internal rate of return comes straight from the ratio of return to outlay:

$$r = \\frac{b}{a} - 1$$

Substituting the unchanged outlay $a = 8,000$ and the larger return $b = 10,000$:

$$r = \\frac{10,000}{8,000} - 1$$

$$r = 1.25 - 1$$

$$r = 0.25 = 25\\%$$

Comparing with the threshold in the claim:

$$25\\% - 24\\% = 1 \\text{ percentage point}$$

The rate clears 24% by a full percentage point, so the statement is true.`,
      `**E) This project has a unique internal rate of return greater than -1.**  (true)

The chapter's uniqueness result says that when the first cash flow is negative and every later cash flow is positive, the equation for net present value has exactly one root above $-1$:

$$a_0 < 0, \\qquad a_1, \\ldots, a_n > 0 \\implies \\text{unique } r^{*} > -1$$

Checking the oven project against that condition:

$$a_0 = -8,000 < 0$$

$$a_1 = 9,600 > 0$$

Both parts hold, so a unique internal rate of return above $-1$ exists. Solving for it confirms there is only one:

$$-8,000 + \\frac{9,600}{1+r} = 0$$

$$1 + r = \\frac{9,600}{8,000} = 1.20$$

$$r = 0.20 = 20\\%$$

The equation is linear in $1/(1+r)$, so 20% is the only solution, and it sits well above $-1$. The claim matches this, so the statement is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 114,
    solution_overview: `A small bakery invests \\$8,000 in a new commercial oven. The oven is expected to generate a single net return of \\$9,600, paid in full at the end of one year.

**Part 1: Setup.**

$a_0 = -\\$8,000$ (initial outlay)

$a_1 = \\$9,600$ (return at end of Year 1)

$n = 1$ year

**Part 2: Formula.**

For a one-year project with outlay $a$ and return $b$: $-a + b(1+r)^{-1} = 0$

Solving for $r$: $r = (b/a) - 1$

**Part 3: Solve.**

**1.** Step $1$: Identify $a = \\$8,000$ (amount invested) and $b = \\$9,600$ (amount returned).

**2.** Step $2$: $r = (b/a) - 1 = (9,600/8,000) - 1 = 1.20 - 1 = 0.20 = 20\\%$.

**3.** Step $3$ (for later statements): NPV at rate $r$ is $A = a_0 + a_1/(1+r)$.

**4.** At $15\\%$: $A = -8,000 + 9,600/1.15 = -8,000 + 8,347.83 = \\$347.83 > 0$.

**5.** At $25\\%$: $A = -8,000 + 9,600/1.25 = -8,000 + 7,680 = -\\$320.00 < 0$.

**6.** If $b = 10,000$: $r = (10,000/8,000) - 1 = 0.25 = 25\\%$, which exceeds $24\\%$.`,
  },
  {
    id: `math-11-115`,
    case_id: `MATH 11.115`,
    title: `A logistics company spends \\$12,000 upgrading a delivery vehicle`,
    subsection: `11.7`,
    context: `A logistics company spends \\$12,000 upgrading a delivery vehicle. The upgrade is expected to generate net returns of \\$7,000 at the end of Year 1 and \\$7,000 at the end of Year 2.`,
    statements: [
      `The internal rate of return is approximately 10.92%.`,
      `At an interest rate of 8%, the net present value of this project is positive.`,
      `At an interest rate of 12%, the net present value of this project is positive.`,
      `If the Year 2 return had instead been \\$8,000, with Year 1 unchanged at \\$7,000, the internal rate of return would exceed 13%.`,
      `Doubling both returns to \\$14,000 in Year 1 and \\$14,000 in Year 2, with the outlay unchanged at \\$12,000, would result in an internal rate of return of approximately 21.84%.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The internal rate of return is approximately 10.92%.**  (true)

With returns in two different years the internal rate of return solves

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

Writing $s = 1/(1+r)$ turns this into a quadratic:

$$7,000s^{2} + 7,000s - 12,000 = 0$$

Dividing through by 1,000:

$$7s^{2} + 7s - 12 = 0$$

The quadratic formula needs the discriminant:

$$7^{2} + 4(7)(12) = 49 + 336 = 385$$

$$\\sqrt{385} \\approx 19.6214$$

Taking the positive root, since $s$ must be positive:

$$s = \\frac{-7 + 19.6214}{14} \\approx 0.90153$$

$$r = \\frac{1}{0.90153} - 1$$

$$r \\approx 0.10922 = 10.92\\%$$

The claim gives about 10.92%, and the calculation returns 10.92%, so the statement is true.`,
      `**B) At an interest rate of 8%, the net present value of this project is positive.**  (true)

Net present value discounts each year's return back to today and subtracts the outlay:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -12,000$, $a_1 = a_2 = 7,000$ and $r = 8\\% = 0.08$:

$$\\frac{7,000}{1.08} \\approx 6,481.48$$

$$(1.08)^{2} = 1.1664$$

$$\\frac{7,000}{1.1664} \\approx 6,001.37$$

$$A \\approx -12,000.00 + 6,481.48 + 6,001.37$$

$$A \\approx 482.85$$

The claim says the value is positive, and the calculation returns a surplus of \\$482.85, consistent with 8% sitting below the project's internal rate of return of about 10.92%. The statement is true.`,
      `**C) At an interest rate of 12%, the net present value of this project is positive.**  (false)

The same net present value formula applies at the higher rate:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -12,000$, $a_1 = a_2 = 7,000$ and $r = 12\\% = 0.12$:

$$\\frac{7,000}{1.12} = 6,250.00$$

$$(1.12)^{2} = 1.2544$$

$$\\frac{7,000}{1.2544} \\approx 5,580.36$$

$$A \\approx -12,000.00 + 6,250.00 + 5,580.36$$

$$A \\approx -169.64$$

The claim says the value is positive, but the project comes up \\$169.64 short at this rate, because 12% is above the internal rate of return of about 10.92%. The statement is false.`,
      `**D) If the Year 2 return had instead been \\$8,000, with Year 1 unchanged at \\$7,000, the internal rate of return would exceed 13%.**  (true)

Changing the Year 2 return changes the quadratic's leading coefficient, so the rate has to be solved again:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With $a_1 = 7,000$ and $a_2 = 8,000$:

$$8,000s^{2} + 7,000s - 12,000 = 0$$

$$8s^{2} + 7s - 12 = 0$$

The discriminant is

$$7^{2} + 4(8)(12) = 49 + 384 = 433$$

$$\\sqrt{433} \\approx 20.8087$$

$$s = \\frac{-7 + 20.8087}{16} \\approx 0.86304$$

$$r = \\frac{1}{0.86304} - 1 \\approx 0.15872 = 15.87\\%$$

Comparing with the threshold in the claim:

$$15.87\\% - 13\\% = 2.87 \\text{ percentage points}$$

The stronger second-year return lifts the rate to about 15.87%, clearing 13%, so the statement is true.`,
      `**E) Doubling both returns to \\$14,000 in Year 1 and \\$14,000 in Year 2, with the outlay unchanged at \\$12,000, would result in an internal rate of return of approximately 21.84%.**  (false)

Doubling both returns changes both coefficients of the quadratic, so the rate must be recomputed rather than scaled:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With $a_1 = a_2 = 14,000$ and the outlay still \\$12,000:

$$14,000s^{2} + 14,000s - 12,000 = 0$$

$$7s^{2} + 7s - 6 = 0$$

The discriminant is

$$7^{2} + 4(7)(6) = 49 + 168 = 217$$

$$\\sqrt{217} \\approx 14.7309$$

$$s = \\frac{-7 + 14.7309}{14} \\approx 0.55221$$

$$r = \\frac{1}{0.55221} - 1 \\approx 0.81091 = 81.09\\%$$

The claim names about 21.84%, which is simply twice the original 10.92%:

$$81.09\\% - 21.84\\% = 59.25 \\text{ percentage points}$$

The true rate is about 81.09%, nearly sixty percentage points above the stated figure, because doubling the returns does not double the rate. The statement is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 115,
    solution_overview: `A logistics company spends \\$12,000 upgrading a delivery vehicle. The upgrade is expected to generate net returns of \\$7,000 at the end of Year 1 and \\$7,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$12,000$

$a_1 = \\$7,000$

$a_2 = \\$7,000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

Substitute $s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step $1$: $-12,000 + 7,000/(1+r) + 7,000/(1+r)^{2} = 0$.

**2.** Step $2$: Let $s = (1+r)^{-1}$.

**3.** Then $7,000s^{2} + 7,000s - 12,000 = 0$.

**4.** Dividing by $1,000$: $7s^{2} + 7s - 12 = 0$.

**5.** Step $3$: Discriminant: $7^{2} + 4(7)(12) = 49 + 336 = 385$.

**6.** $\\sqrt{385} \\approx 19.6214$.

**7.** Step $4$: $s = (-7 + 19.6214)/14 = 12.6214/14 \\approx 0.90153$.

**8.** Step $5$: $r = 1/s - 1 = 1/0.90153 - 1 \\approx 0.10922 \\approx 10.92\\%$.

**9.** NPV at $8\\%$: $-12,000 + 7,000/1.08 + 7,000/1.1664 = -12,000 + 6,481.48 + 6,001.37 = \\$482.85 > 0$.

**10.** NPV at $12\\%$: $-12,000 + 7,000/1.12 + 7,000/1.2544 = -12,000 + 6,250.00 + 5,580.36 = -\\$169.64 < 0$.`,
  },
  {
    id: `math-11-116`,
    case_id: `MATH 11.116`,
    title: `A boutique invests \\$20,000 in inventory and point-of-sale equipment`,
    subsection: `11.7`,
    context: `A boutique invests \\$20,000 in inventory and point-of-sale equipment. It expects net returns of \\$9,000 at the end of Year 1 and \\$15,000 at the end of Year 2.`,
    statements: [
      `The internal rate of return is approximately 11.98%.`,
      `At a discount rate of 10%, the net present value of the project is positive.`,
      `At a discount rate of 14%, the net present value of the project is positive.`,
      `If the Year 1 return were \\$9,000 higher, with Year 2 unchanged at \\$15,000, the internal rate of return would exceed 30%.`,
      `The sum of all cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$4,000.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The internal rate of return is approximately 11.98%.**  (true)

The internal rate of return is the discount rate that drives net present value to zero:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

Substituting $a_0 = -20,000$, $a_1 = 9,000$, $a_2 = 15,000$ and writing $s = 1/(1+r)$ turns this into a quadratic:

$$15,000s^{2} + 9,000s - 20,000 = 0$$

Dividing through by 1,000:

$$15s^{2} + 9s - 20 = 0$$

The discriminant is

$$9^{2} + 4(15)(20) = 81 + 1,200 = 1,281$$

$$\\sqrt{1,281} \\approx 35.791$$

Taking the positive root, since $s$ must be positive:

$$s = \\frac{-9 + 35.791}{30} \\approx 0.89304$$

$$r = \\frac{1}{0.89304} - 1$$

$$r \\approx 0.11978 = 11.98\\%$$

The claim gives about 11.98%, and the calculation returns 11.98%, so the statement is true.`,
      `**B) At a discount rate of 10%, the net present value of the project is positive.**  (true)

Net present value discounts each year's return to today and subtracts the outlay:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -20,000$, $a_1 = 9,000$, $a_2 = 15,000$ and $r = 10\\% = 0.10$:

$$\\frac{9,000}{1.10} \\approx 8,181.82$$

$$(1.10)^{2} = 1.21$$

$$\\frac{15,000}{1.21} \\approx 12,396.69$$

$$A \\approx -20,000.00 + 8,181.82 + 12,396.69$$

$$A \\approx 578.51$$

The claim says the value is positive, and the calculation shows a surplus of \\$578.51, in line with 10% sitting below the project's internal rate of return of about 11.98%. The statement is true.`,
      `**C) At a discount rate of 14%, the net present value of the project is positive.**  (false)

The same formula applies with the higher discount rate:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -20,000$, $a_1 = 9,000$, $a_2 = 15,000$ and $r = 14\\% = 0.14$:

$$\\frac{9,000}{1.14} \\approx 7,894.74$$

$$(1.14)^{2} = 1.2996$$

$$\\frac{15,000}{1.2996} \\approx 11,542.01$$

$$A \\approx -20,000.00 + 7,894.74 + 11,542.01$$

$$A \\approx -563.25$$

The claim says the value is positive, but the project falls \\$563.25 short at 14%, since that rate is above the internal rate of return of about 11.98%. The statement is false.`,
      `**D) If the Year 1 return were \\$9,000 higher, with Year 2 unchanged at \\$15,000, the internal rate of return would exceed 30%.**  (true)

Raising the Year 1 return changes the middle coefficient of the quadratic, so the rate is solved again from scratch:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

A \\$9,000 increase makes the first return $9,000 + 9,000 = 18,000$, with Year 2 still at \\$15,000:

$$15,000s^{2} + 18,000s - 20,000 = 0$$

$$15s^{2} + 18s - 20 = 0$$

The discriminant is

$$18^{2} + 4(15)(20) = 324 + 1,200 = 1,524$$

$$\\sqrt{1,524} \\approx 39.0384$$

$$s = \\frac{-18 + 39.0384}{30} \\approx 0.70128$$

$$r = \\frac{1}{0.70128} - 1 \\approx 0.42596 = 42.60\\%$$

Comparing with the threshold in the claim:

$$42.60\\% - 30\\% = 12.60 \\text{ percentage points}$$

Pulling money forward into Year 1 lifts the rate to about 42.60%, well past 30%, so the statement is true.`,
      `**E) The sum of all cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$4,000.**  (true)

The cash flows are the outlay today and the two returns, with the outlay counted as negative:

$$a_0 = -20,000, \\qquad a_1 = 9,000, \\qquad a_2 = 15,000$$

Adding them without any discounting:

$$a_0 + a_1 + a_2 = -20,000 + 9,000 + 15,000$$

$$= -20,000 + 24,000$$

$$= 4,000$$

The claim names \\$4,000, and the undiscounted total is \\$4,000. The sign of this total also lines up with the chapter's result that a positive total means a positive internal rate of return, which matches the rate of about 11.98% for these cash flows. The statement is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 116,
    solution_overview: `A boutique invests \\$20,000 in inventory and point-of-sale equipment. It expects net returns of \\$9,000 at the end of Year 1 and \\$15,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$20,000$

$a_1 = \\$9,000$

$a_2 = \\$15,000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

$s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step $1$: $15,000s^{2} + 9,000s - 20,000 = 0$.

**2.** Dividing by $1,000$: $15s^{2} + 9s - 20 = 0$.

**3.** Step $2$: Discriminant: $9^{2} + 4(15)(20) = 81 + 1,200 = 1,281$.

**4.** $\\sqrt{1,281} \\approx 35.791$.

**5.** Step $3$: $s = (-9 + 35.791)/30 \\approx 0.89304$.

**6.** Step $4$: $r = 1/0.89304 - 1 \\approx 0.11978 \\approx 11.98\\%$.

**7.** NPV at $10\\%$: $-20,000 + 9,000/1.10 + 15,000/1.21 = -20,000 + 8,181.82 + 12,396.69 = \\$578.51 > 0$.

**8.** NPV at $14\\%$: $-20,000 + 9,000/1.14 + 15,000/1.2996 = -20,000 + 7,894.74 + 11,542.01 = -\\$563.25 < 0$.

**9.** Cash-flow sum: $-20,000 + 9,000 + 15,000 = \\$4,000$.`,
  },
  {
    id: `math-11-117`,
    case_id: `MATH 11.117`,
    title: `A retailer is choosing between two one-year uses of surplus cash`,
    subsection: `11.7`,
    context: `A retailer is choosing between two one-year uses of surplus cash. Project X: invest \\$15,000 now, receive \\$17,250 in one year. Project Y: invest \\$22,000 now, receive \\$24,750 in one year.`,
    statements: [
      `The internal rate of return of Project X is exactly 15%.`,
      `The internal rate of return of Project Y is exactly 12.5%.`,
      `Based on the internal rate of return criterion, Project Y should be preferred over Project X.`,
      `At an interest rate of 11%, Project X has positive net present value while Project Y has negative net present value.`,
      `If Project Y's payoff had instead been \\$25,000, with the outlay unchanged at \\$22,000, its internal rate of return would exceed that of Project X.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The internal rate of return of Project X is exactly 15%.**  (true)

For a project with one outlay today and one return a year later, the internal rate of return solves

$$-a + \\frac{b}{1+r} = 0$$

which rearranges to

$$r = \\frac{b}{a} - 1$$

Substituting Project X's outlay of \\$15,000 and its \\$17,250 payoff:

$$r_X = \\frac{17,250}{15,000} - 1$$

$$\\frac{17,250}{15,000} = 1.15$$

$$r_X = 1.15 - 1$$

$$r_X = 0.15 = 15\\%$$

The claim names exactly 15%, and the calculation returns exactly 15%, so the statement is true.`,
      `**B) The internal rate of return of Project Y is exactly 12.5%.**  (true)

The same one-year rule applies to Project Y, with its own outlay and payoff:

$$r = \\frac{b}{a} - 1$$

Substituting Project Y's outlay of \\$22,000 and its \\$24,750 payoff:

$$r_Y = \\frac{24,750}{22,000} - 1$$

$$\\frac{24,750}{22,000} = 1.125$$

$$r_Y = 1.125 - 1$$

$$r_Y = 0.125 = 12.5\\%$$

The claim names exactly 12.5%, and the calculation returns exactly 12.5%, so the statement is true.`,
      `**C) Based on the internal rate of return criterion, Project Y should be preferred over Project X.**  (false)

The internal rate of return criterion ranks projects by rate and prefers the higher one, so both rates are needed:

$$r = \\frac{b}{a} - 1$$

Project X:

$$r_X = \\frac{17,250}{15,000} - 1 = 1.15 - 1 = 0.15 = 15\\%$$

Project Y:

$$r_Y = \\frac{24,750}{22,000} - 1 = 1.125 - 1 = 0.125 = 12.5\\%$$

Comparing the two:

$$15\\% - 12.5\\% = 2.5 \\text{ percentage points}$$

Project X earns 2.5 percentage points more per dollar committed, so the criterion picks X rather than Y. The claim puts Y ahead, so the statement is false.`,
      `**D) At an interest rate of 11%, Project X has positive net present value while Project Y has negative net present value.**  (false)

Each project is valued at 11% with the one-period net present value formula:

$$A = -a + \\frac{b}{1+r}$$

Project X:

$$\\frac{17,250}{1.11} \\approx 15,540.54$$

$$A_X \\approx -15,000.00 + 15,540.54 \\approx 540.54$$

Project Y:

$$\\frac{24,750}{1.11} \\approx 22,297.30$$

$$A_Y \\approx -22,000.00 + 22,297.30 \\approx 297.30$$

The claim needs X positive and Y negative. X is positive at \\$540.54, but Y is also positive, by \\$297.30, because 11% still sits below Y's internal rate of return of 12.5%. The second half of the claim fails, so the statement is false.`,
      `**E) If Project Y's payoff had instead been \\$25,000, with the outlay unchanged at \\$22,000, its internal rate of return would exceed that of Project X.**  (false)

A larger payoff on the same outlay raises Project Y's rate, so recompute it with the one-year rule:

$$r = \\frac{b}{a} - 1$$

Substituting the unchanged \\$22,000 outlay and the higher \\$25,000 payoff:

$$r_Y = \\frac{25,000}{22,000} - 1$$

$$\\frac{25,000}{22,000} \\approx 1.136364$$

$$r_Y \\approx 0.136364 = 13.64\\%$$

Project X's rate comes from its own figures:

$$r_X = \\frac{17,250}{15,000} - 1 = 0.15 = 15\\%$$

Comparing the two:

$$15\\% - 13.64\\% = 1.36 \\text{ percentage points}$$

Even with the bigger payoff, Project Y stays 1.36 percentage points behind Project X, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 117,
    solution_overview: `A retailer is choosing between two one-year uses of surplus cash. Project X: invest \\$15,000 now, receive \\$17,250 in one year. Project Y: invest \\$22,000 now, receive \\$24,750 in one year.

**Part 1: Setup.**

Project X: $a = \\$15,000$, $b = \\$17,250$

Project Y: $a = \\$22,000$, $b = \\$24,750$

$n = 1$ year for each project

**Part 2: Formula.**

$r = (b/a) - 1$ (one-year rate of return, applied to each project)

**Part 3: Solve.**

**1.** Step $1$: $r_X = (17,250/15,000) - 1 = 1.15 - 1 = 0.15 = 15\\%$.

**2.** Step $2$: $r_Y = (24,750/22,000) - 1 = 1.125 - 1 = 0.125 = 12.5\\%$.

**3.** IRR ranking: $15\\% > 12.5\\%$, so Project X is preferred.

**4.** NPV at $11\\%$: $NPV_X = -15,000 + 17,250/1.11 = -15,000 + 15,540.54 = \\$540.54 > 0$; $NPV_Y = -22,000 + 24,750/1.11 = -22,000 + 22,297.30 = \\$297.30 > 0$ as well.

**5.** If Y's payoff is $\\$25,000$: $r_Y = (25,000/22,000) - 1 \\approx 0.1364 = 13.64\\%$, still below X's $15\\%$.`,
  },
  {
    id: `math-11-118`,
    case_id: `MATH 11.118`,
    title: `A manufacturing upgrade has an initial outlay of \\$45,000`,
    subsection: `11.7`,
    context: `A manufacturing upgrade has an initial outlay of \\$45,000. Installation disruption causes a net cash outflow of \\$3,000 at the end of Year 1, followed by net returns of \\$28,000 at the end of Year 2 and \\$35,000 at the end of Year 3.`,
    statements: [
      `At r = 8%, the net present value of the project is approximately \\$4,012.`,
      `At r = 12%, the net present value of the project is positive.`,
      `The internal rate of return of this project lies between 12% and 15%.`,
      `At r = 15%, the net present value of the project is approximately -\\$3,424.`,
      `$a_1$, $a_2$, and $a_3$ are all positive.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) At r = 8%, the net present value of the project is approximately \\$4,012.**  (true)

Net present value discounts every cash flow, including the negative one in Year 1, back to today:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} + \\frac{a_3}{(1+r)^{3}}$$

Substituting $a_0 = -45,000$, $a_1 = -3,000$, $a_2 = 28,000$, $a_3 = 35,000$ and $r = 8\\% = 0.08$:

$$\\frac{-3,000}{1.08} \\approx -2,777.78$$

$$(1.08)^{2} = 1.1664, \\qquad \\frac{28,000}{1.1664} \\approx 24,005.49$$

$$(1.08)^{3} \\approx 1.259712, \\qquad \\frac{35,000}{1.259712} \\approx 27,784.13$$

$$A \\approx -45,000.00 - 2,777.78 + 24,005.49 + 27,784.13$$

$$A \\approx 4,011.84$$

The claim gives about \\$4,012, and the calculation returns \\$4,011.84, so the statement is true.`,
      `**B) At r = 12%, the net present value of the project is positive.**  (false)

The same four-term formula is evaluated at the higher rate:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} + \\frac{a_3}{(1+r)^{3}}$$

Substituting the cash flows with $r = 12\\% = 0.12$:

$$\\frac{-3,000}{1.12} \\approx -2,678.57$$

$$(1.12)^{2} = 1.2544, \\qquad \\frac{28,000}{1.2544} \\approx 22,321.43$$

$$(1.12)^{3} \\approx 1.404928, \\qquad \\frac{35,000}{1.404928} \\approx 24,912.31$$

$$A \\approx -45,000.00 - 2,678.57 + 22,321.43 + 24,912.31$$

$$A \\approx -444.83$$

The claim says the value is positive, but at 12% the project comes up \\$444.83 short, so the statement is false.`,
      `**C) The internal rate of return of this project lies between 12% and 15%.**  (false)

The internal rate of return sits where net present value crosses zero, so the crossing point is located by evaluating

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} + \\frac{a_3}{(1+r)^{3}}$$

at several rates. At 8%:

$$A \\approx -45,000.00 - 2,777.78 + 24,005.49 + 27,784.13 \\approx 4,011.84$$

At 11%:

$$A \\approx -45,000.00 - 2,702.70 + 22,725.43 + 25,591.69 \\approx 614.42$$

At 12%:

$$A \\approx -45,000.00 - 2,678.57 + 22,321.43 + 24,912.31 \\approx -444.83$$

Net present value is still positive at 11% and already negative at 12%, so it passes through zero somewhere between those two rates. The claim places the internal rate of return between 12% and 15%, but by 12% the value has already gone negative, so the statement is false.`,
      `**D) At r = 15%, the net present value of the project is approximately -\\$3,424.**  (true)

Net present value at 15% uses the same four discounted terms:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} + \\frac{a_3}{(1+r)^{3}}$$

Substituting the cash flows with $r = 15\\% = 0.15$:

$$\\frac{-3,000}{1.15} \\approx -2,608.70$$

$$(1.15)^{2} = 1.3225, \\qquad \\frac{28,000}{1.3225} \\approx 21,172.02$$

$$(1.15)^{3} \\approx 1.520875, \\qquad \\frac{35,000}{1.520875} \\approx 23,013.08$$

$$A \\approx -45,000.00 - 2,608.70 + 21,172.02 + 23,013.08$$

$$A \\approx -3,423.60$$

The claim gives about $-3,424$, and the calculation returns $-3,423.60$, so the statement is true.`,
      `**E) $a_1$, $a_2$, and $a_3$ are all positive.**  (false)

The claim is about the signs of the three cash flows that follow the initial outlay, so read them straight from the project description:

$$a_1 = -3,000, \\qquad a_2 = 28,000, \\qquad a_3 = 35,000$$

Installation disruption produces a net outflow at the end of Year 1, which makes $a_1$ negative:

$$a_1 = -3,000 < 0$$

The two later flows are genuine returns:

$$a_2 = 28,000 > 0, \\qquad a_3 = 35,000 > 0$$

Since one of the three is negative, they are not all positive. This also matters for the uniqueness result, which requires every cash flow after the initial outlay to be strictly positive before it can guarantee a single internal rate of return, and that requirement is not met here. The claim says all three are positive, so the statement is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 118,
    solution_overview: `A manufacturing upgrade has an initial outlay of \\$45,000. Installation disruption causes a net cash outflow of \\$3,000 at the end of Year 1, followed by net returns of \\$28,000 at the end of Year 2 and \\$35,000 at the end of Year 3.

**Part 1: Setup.**

$a_0 = -\\$45,000$

$a_1 = -\\$3,000$

$a_2 = \\$28,000$

$a_3 = \\$35,000$

$n = 3$ years

**Part 2: Formula.**

$A = a_0 + a_1/(1+r) + a_2/(1+r)^{2} + a_3/(1+r)^{3}$

**Part 3: Solve.**

**1.** Step $1$ ($r = 8\\%$): $A = -45,000 - 3,000/1.08 + 28,000/1.1664 + 35,000/1.259712 = -45,000 - 2,777.78 + 24,005.49 + 27,784.13 = \\$4,011.84$.

**2.** Step $2$ ($r = 12\\%$): $A = -45,000 - 3,000/1.12 + 28,000/1.2544 + 35,000/1.404928 = -45,000 - 2,678.57 + 22,321.43 + 24,912.31 = -\\$444.83$.

**3.** Step $3$ ($r = 15\\%$): $A = -45,000 - 3,000/1.15 + 28,000/1.3225 + 35,000/1.520875 = -45,000 - 2,608.70 + 21,172.02 + 23,013.07 = -\\$3,423.60$.`,
  },
  {
    id: `math-11-119`,
    case_id: `MATH 11.119`,
    title: `A cafe chain invests \\$34,000 in a new espresso machine line`,
    subsection: `11.7`,
    context: `A cafe chain invests \\$34,000 in a new espresso machine line. Expected net returns are \\$16,000 at the end of Year 1 and \\$24,000 at the end of Year 2.`,
    statements: [
      `The internal rate of return is approximately 14.5%.`,
      `At an interest rate of 9%, the net present value of the project is negative.`,
      `At an interest rate of 13%, the net present value of the project is negative.`,
      `If the Year 2 return had instead been \\$20,000, with Year 1 unchanged at \\$16,000, the internal rate of return would exceed the internal rate of return of the original project.`,
      `Reducing the initial outlay to \\$30,000, with returns unchanged at \\$16,000 and \\$24,000, would lower the internal rate of return.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A) The internal rate of return is approximately 14.5%.**  (false)

The internal rate of return is the discount rate at which net present value is zero:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

Substituting $a_0 = -34,000$, $a_1 = 16,000$, $a_2 = 24,000$ and writing $s = 1/(1+r)$:

$$24,000s^{2} + 16,000s - 34,000 = 0$$

Dividing through by 2,000:

$$12s^{2} + 8s - 17 = 0$$

The discriminant is

$$8^{2} + 4(12)(17) = 64 + 816 = 880$$

$$\\sqrt{880} \\approx 29.665$$

$$s = \\frac{-8 + 29.665}{24} \\approx 0.90270$$

$$r = \\frac{1}{0.90270} - 1 \\approx 0.10778 = 10.78\\%$$

The claim states about 14.5%:

$$14.5\\% - 10.78\\% = 3.72 \\text{ percentage points}$$

The true rate is about 10.78%, well short of the stated figure, so the statement is false.`,
      `**B) At an interest rate of 9%, the net present value of the project is negative.**  (false)

Net present value discounts both returns and subtracts the outlay:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -34,000$, $a_1 = 16,000$, $a_2 = 24,000$ and $r = 9\\% = 0.09$:

$$\\frac{16,000}{1.09} \\approx 14,678.90$$

$$(1.09)^{2} = 1.1881$$

$$\\frac{24,000}{1.1881} \\approx 20,200.32$$

$$A \\approx -34,000.00 + 14,678.90 + 20,200.32$$

$$A \\approx 879.22$$

The claim says the value is negative, but the project shows a surplus of \\$879.22, because 9% sits below the internal rate of return of about 10.78%. The statement is false.`,
      `**C) At an interest rate of 13%, the net present value of the project is negative.**  (true)

The same formula is evaluated at the higher rate:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -34,000$, $a_1 = 16,000$, $a_2 = 24,000$ and $r = 13\\% = 0.13$:

$$\\frac{16,000}{1.13} \\approx 14,159.29$$

$$(1.13)^{2} = 1.2769$$

$$\\frac{24,000}{1.2769} \\approx 18,795.52$$

$$A \\approx -34,000.00 + 14,159.29 + 18,795.52$$

$$A \\approx -1,045.19$$

The claim says the value is negative, and the project falls \\$1,045.19 short at 13%, which is above its internal rate of return of about 10.78%. The statement is true.`,
      `**D) If the Year 2 return had instead been \\$20,000, with Year 1 unchanged at \\$16,000, the internal rate of return would exceed the internal rate of return of the original project.**  (false)

Both versions of the project need their own rate, since changing a cash flow changes the whole equation:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With the original returns:

$$24,000s^{2} + 16,000s - 34,000 = 0 \\implies 12s^{2} + 8s - 17 = 0$$

$$\\sqrt{64 + 816} = \\sqrt{880} \\approx 29.665, \\qquad s \\approx \\frac{-8 + 29.665}{24} \\approx 0.90270$$

$$r \\approx \\frac{1}{0.90270} - 1 \\approx 0.10778 = 10.78\\%$$

With the Year 2 return cut to \\$20,000:

$$20,000s^{2} + 16,000s - 34,000 = 0 \\implies 10s^{2} + 8s - 17 = 0$$

$$8^{2} + 4(10)(17) = 64 + 680 = 744, \\qquad \\sqrt{744} \\approx 27.276$$

$$s = \\frac{-8 + 27.276}{20} \\approx 0.96382$$

$$r = \\frac{1}{0.96382} - 1 \\approx 0.03754 = 3.75\\%$$

Comparing the two rates:

$$10.78\\% - 3.75\\% = 7.03 \\text{ percentage points}$$

Cutting \\$4,000 from the second year drags the rate down by about seven percentage points rather than lifting it, so the statement is false.`,
      `**E) Reducing the initial outlay to \\$30,000, with returns unchanged at \\$16,000 and \\$24,000, would lower the internal rate of return.**  (false)

A smaller outlay changes the constant term of the quadratic, so the rate is solved again:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With the outlay reduced to \\$30,000 and the returns unchanged:

$$24,000s^{2} + 16,000s - 30,000 = 0$$

Dividing through by 2,000:

$$12s^{2} + 8s - 15 = 0$$

The discriminant works out exactly:

$$8^{2} + 4(12)(15) = 64 + 720 = 784 = 28^{2}$$

$$s = \\frac{-8 + 28}{24} = \\frac{20}{24} \\approx 0.83333$$

$$r = \\frac{1}{0.83333} - 1 = 0.20 = 20\\%$$

The original project earns about 10.78%, so comparing:

$$20\\% - 10.78\\% = 9.22 \\text{ percentage points}$$

Paying less for the same returns raises the rate by more than nine percentage points instead of lowering it, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 119,
    solution_overview: `A cafe chain invests \\$34,000 in a new espresso machine line. Expected net returns are \\$16,000 at the end of Year 1 and \\$24,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$34,000$

$a_1 = \\$16,000$

$a_2 = \\$24,000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

$s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step $1$: $24,000s^{2} + 16,000s - 34,000 = 0$.

**2.** Dividing by $2,000$: $12s^{2} + 8s - 17 = 0$.

**3.** Step $2$: Discriminant: $8^{2} + 4(12)(17) = 64 + 816 = 880$.

**4.** $\\sqrt{880} \\approx 29.665$.

**5.** Step $3$: $s = (-8 + 29.665)/24 \\approx 0.90270$.

**6.** Step $4$: $r = 1/0.90270 - 1 \\approx 0.10778 \\approx 10.78\\%$.

**7.** NPV at $9\\%$: $-34,000 + 16,000/1.09 + 24,000/1.1881 = -34,000 + 14,678.90 + 20,200.32 = \\$879.22 > 0$.

**8.** NPV at $13\\%$: $-34,000 + 16,000/1.13 + 24,000/1.2769 = -34,000 + 14,159.29 + 18,795.52 = -\\$1,045.19 < 0$.
`,
  },
  {
    id: `math-11-120`,
    case_id: `MATH 11.120`,
    title: `A logistics firm spends \\$40,000 automating a warehouse process`,
    subsection: `11.7`,
    context: `A logistics firm spends \\$40,000 automating a warehouse process. It expects net returns of \\$22,000 at the end of Year 1 and \\$27,600 at the end of Year 2.`,
    statements: [
      `At r = 15%, the net present value of the project is \\$0, to the nearest dollar.`,
      `At an interest rate of 10%, the net present value of the project is positive.`,
      `At an interest rate of 20%, the net present value of the project is negative.`,
      `The sum of all the project's cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$9,600.`,
      `This project has a unique internal rate of return greater than -1.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) At r = 15%, the net present value of the project is \\$0, to the nearest dollar.**  (true)

Net present value at a given rate discounts each return and subtracts the outlay:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -40,000$, $a_1 = 22,000$, $a_2 = 27,600$ and $r = 15\\% = 0.15$:

$$\\frac{22,000}{1.15} \\approx 19,130.43$$

$$(1.15)^{2} = 1.3225$$

$$\\frac{27,600}{1.3225} \\approx 20,869.57$$

Adding the discounted returns:

$$19,130.43 + 20,869.57 = 40,000.00$$

$$A \\approx -40,000.00 + 40,000.00 = 0.00$$

The discounted returns cover the outlay to the dollar, so the net present value is \\$0 at 15% and 15% is this project's internal rate of return. The claim says exactly this, so the statement is true.`,
      `**B) At an interest rate of 10%, the net present value of the project is positive.**  (true)

The same formula is evaluated at the lower rate:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -40,000$, $a_1 = 22,000$, $a_2 = 27,600$ and $r = 10\\% = 0.10$:

$$\\frac{22,000}{1.10} = 20,000.00$$

$$(1.10)^{2} = 1.21$$

$$\\frac{27,600}{1.21} \\approx 22,809.92$$

$$A \\approx -40,000.00 + 20,000.00 + 22,809.92$$

$$A \\approx 2,809.92$$

The claim says the value is positive, and the project shows a surplus of \\$2,809.92, as expected with 10% below the project's 15% internal rate of return. The statement is true.`,
      `**C) At an interest rate of 20%, the net present value of the project is negative.**  (true)

Evaluating the same expression at 20%:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

$$\\frac{22,000}{1.20} \\approx 18,333.33$$

$$(1.20)^{2} = 1.44$$

$$\\frac{27,600}{1.44} \\approx 19,166.67$$

$$A \\approx -40,000.00 + 18,333.33 + 19,166.67$$

$$A \\approx -2,500.00$$

The claim says the value is negative, and the project falls \\$2,500.00 short at 20%, which sits above the 15% internal rate of return. The statement is true.`,
      `**D) The sum of all the project's cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$9,600.**  (true)

The cash flows are the outlay today, entered as a negative amount, and the two returns:

$$a_0 = -40,000, \\qquad a_1 = 22,000, \\qquad a_2 = 27,600$$

Adding them with no discounting applied:

$$a_0 + a_1 + a_2 = -40,000 + 22,000 + 27,600$$

$$= -40,000 + 49,600$$

$$= 9,600$$

The claim names \\$9,600, and the undiscounted total is \\$9,600. The positive sign also fits the chapter's result that a positive total goes with a positive internal rate of return, matching the 15% these cash flows produce. The statement is true.`,
      `**E) This project has a unique internal rate of return greater than -1.**  (true)

The chapter's uniqueness result applies when the first cash flow is negative and every later one is positive:

$$a_0 < 0, \\qquad a_1, \\ldots, a_n > 0 \\implies \\text{unique } r^{*} > -1$$

Checking the three cash flows:

$$a_0 = -40,000 < 0, \\qquad a_1 = 22,000 > 0, \\qquad a_2 = 27,600 > 0$$

The condition holds, so exactly one rate above $-1$ solves the equation. Solving confirms it. With $s = 1/(1+r)$:

$$27,600s^{2} + 22,000s - 40,000 = 0$$

$$69s^{2} + 55s - 100 = 0$$

$$55^{2} + 4(69)(100) = 3,025 + 27,600 = 30,625 = 175^{2}$$

$$s = \\frac{-55 + 175}{138} = \\frac{120}{138} \\approx 0.869565$$

$$r = \\frac{1}{0.869565} - 1 = 0.15 = 15\\%$$

The other root is

$$s = \\frac{-55 - 175}{138} \\approx -1.6667, \\qquad r = \\frac{1}{-1.6667} - 1 = -1.60$$

which falls below $-1$ and is discarded, leaving 15% as the single admissible rate. The claim matches this, so the statement is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 120,
    solution_overview: `A logistics firm spends \\$40,000 automating a warehouse process. It expects net returns of \\$22,000 at the end of Year 1 and \\$27,600 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$40,000$

$a_1 = \\$22,000$

$a_2 = \\$27,600$

$n = 2$ years

**Part 2: Formula.**

$A = a_0 + a_1/(1+r) + a_2/(1+r)^{2}$

**Part 3: Solve.**

**1.** Step $1$: Test $r = 15\\%$: $A = -40,000 + 22,000/1.15 + 27,600/1.3225 = -40,000 + 19,130.43 + 20,869.57 = \\$0.00$ (to the nearest cent).

**2.** Step $2$: Since $A = 0$ at $r = 15\\%$, this confirms $r = 15\\%$ is the internal rate of return for this project.

**3.** NPV at $10\\%$: $-40,000 + 22,000/1.10 + 27,600/1.21 = -40,000 + 20,000.00 + 22,809.92 = \\$2,809.92 > 0$.

**4.** NPV at $20\\%$: $-40,000 + 22,000/1.20 + 27,600/1.44 = -40,000 + 18,333.33 + 19,166.67 = -\\$2,500.00 < 0$.

**5.** Cash-flow sum: $-40,000 + 22,000 + 27,600 = \\$9,600$.
`,
  },
  {
    id: `math-11-121`,
    case_id: `MATH 11.121`,
    title: `A property developer invests \\$65,000 renovating a rental unit`,
    subsection: `11.7`,
    context: `A property developer invests \\$65,000 renovating a rental unit. Expected net rental income after expenses is \\$34,000 at the end of Year 1 and \\$42,000 at the end of Year 2.`,
    statements: [
      `The internal rate of return is approximately 10.69%.`,
      `At an interest rate of 9%, the net present value of the project is positive.`,
      `At an interest rate of 12%, the net present value of the project is positive.`,
      `Doubling both returns to \\$68,000 in Year 1 and \\$84,000 in Year 2, with the outlay unchanged at \\$65,000, would more than double the internal rate of return.`,
      `If the outlay were reduced to \\$60,000, with returns unchanged, the internal rate of return would be lower than the internal rate of return of the original project.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The internal rate of return is approximately 10.69%.**  (true)

The internal rate of return is the discount rate at which net present value is zero:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

Substituting $a_0 = -65,000$, $a_1 = 34,000$, $a_2 = 42,000$ and writing $s = 1/(1+r)$:

$$42,000s^{2} + 34,000s - 65,000 = 0$$

Dividing through by 1,000:

$$42s^{2} + 34s - 65 = 0$$

The discriminant is

$$34^{2} + 4(42)(65) = 1,156 + 10,920 = 12,076$$

$$\\sqrt{12,076} \\approx 109.891$$

Taking the positive root, since $s$ must be positive:

$$s = \\frac{-34 + 109.891}{84} \\approx 0.90346$$

$$r = \\frac{1}{0.90346} - 1$$

$$r \\approx 0.10685 = 10.69\\%$$

The claim gives about 10.69%, and the calculation returns 10.69%, so the statement is true.`,
      `**B) At an interest rate of 9%, the net present value of the project is positive.**  (true)

Net present value discounts both years of rental income and subtracts the renovation cost:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -65,000$, $a_1 = 34,000$, $a_2 = 42,000$ and $r = 9\\% = 0.09$:

$$\\frac{34,000}{1.09} \\approx 31,192.66$$

$$(1.09)^{2} = 1.1881$$

$$\\frac{42,000}{1.1881} \\approx 35,350.56$$

$$A \\approx -65,000.00 + 31,192.66 + 35,350.56$$

$$A \\approx 1,543.22$$

The claim says the value is positive, and the project shows a surplus of \\$1,543.22, consistent with 9% sitting below the internal rate of return of about 10.69%. The statement is true.`,
      `**C) At an interest rate of 12%, the net present value of the project is positive.**  (false)

The same formula is evaluated at the higher discount rate:

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

Substituting $a_0 = -65,000$, $a_1 = 34,000$, $a_2 = 42,000$ and $r = 12\\% = 0.12$:

$$\\frac{34,000}{1.12} \\approx 30,357.14$$

$$(1.12)^{2} = 1.2544$$

$$\\frac{42,000}{1.2544} \\approx 33,482.14$$

$$A \\approx -65,000.00 + 30,357.14 + 33,482.14$$

$$A \\approx -1,160.72$$

The claim says the value is positive, but the project falls \\$1,160.72 short at 12%, since that rate is above the internal rate of return of about 10.69%. The statement is false.`,
      `**D) Doubling both returns to \\$68,000 in Year 1 and \\$84,000 in Year 2, with the outlay unchanged at \\$65,000, would more than double the internal rate of return.**  (true)

Doubling both returns changes two coefficients of the quadratic, so the rate has to be recomputed rather than scaled:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With $a_1 = 68,000$, $a_2 = 84,000$ and the outlay still \\$65,000:

$$84,000s^{2} + 68,000s - 65,000 = 0$$

$$84s^{2} + 68s - 65 = 0$$

The discriminant is

$$68^{2} + 4(84)(65) = 4,624 + 21,840 = 26,464$$

$$\\sqrt{26,464} \\approx 162.678$$

$$s = \\frac{-68 + 162.678}{168} \\approx 0.56356$$

$$r = \\frac{1}{0.56356} - 1 \\approx 0.77443 = 77.44\\%$$

Double the original rate of about 10.69% would be

$$2 \\times 10.69\\% = 21.38\\%$$

Comparing:

$$77.44\\% - 21.38\\% = 56.06 \\text{ percentage points}$$

The new rate clears twice the original by more than fifty percentage points, so the statement is true.`,
      `**E) If the outlay were reduced to \\$60,000, with returns unchanged, the internal rate of return would be lower than the internal rate of return of the original project.**  (false)

Cutting the outlay changes the constant term of the quadratic, so the rate is solved again from scratch:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With the outlay at \\$60,000 and the returns unchanged:

$$42,000s^{2} + 34,000s - 60,000 = 0$$

Dividing through by 1,000:

$$42s^{2} + 34s - 60 = 0$$

The discriminant works out exactly:

$$34^{2} + 4(42)(60) = 1,156 + 10,080 = 11,236 = 106^{2}$$

$$s = \\frac{-34 + 106}{84} = \\frac{72}{84} \\approx 0.857143$$

$$r = \\frac{1}{0.857143} - 1 \\approx 0.16667 = 16.67\\%$$

The original project earns about 10.69%, so comparing:

$$16.67\\% - 10.69\\% = 5.98 \\text{ percentage points}$$

Paying \\$5,000 less for the same rental income lifts the rate by about six percentage points instead of lowering it, so the statement is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 121,
    solution_overview: `A property developer invests \\$65,000 renovating a rental unit. Expected net rental income after expenses is \\$34,000 at the end of Year 1 and \\$42,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$65,000$

$a_1 = \\$34,000$

$a_2 = \\$42,000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

$s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step $1$: $42,000s^{2} + 34,000s - 65,000 = 0$.

**2.** Dividing by $1,000$: $42s^{2} + 34s - 65 = 0$.

**3.** Step $2$: Discriminant: $34^{2} + 4(42)(65) = 1,156 + 10,920 = 12,076$.

**4.** $\\sqrt{12,076} \\approx 109.891$.

**5.** Step $3$: $s = (-34 + 109.891)/84 \\approx 0.90346$.

**6.** Step $4$: $r = 1/0.90346 - 1 \\approx 0.10685 \\approx 10.69\\%$.

**7.** NPV at $9\\%$: $-65,000 + 34,000/1.09 + 42,000/1.1881 = -65,000 + 31,192.66 + 35,350.56 = \\$1,543.22 > 0$.

**8.** NPV at $12\\%$: $-65,000 + 34,000/1.12 + 42,000/1.2544 = -65,000 + 30,357.14 + 33,482.14 = -\\$1,160.72 < 0$.
`,
  },
  {
    id: `math-11-122`,
    case_id: `MATH 11.122`,
    title: `A subscription software company spends \\$50,000 building a product and is compari`,
    subsection: `11.7`,
    context: `A subscription software company spends \\$50,000 building a product and is comparing two versions. Option 1, the full version: a steady net return of \\$6,000 at the end of every year, indefinitely into the future. Option 2, the scaled-back version: the same \\$50,000 outlay, but returns of only \\$6,000 at the end of Year 1 and \\$6,000 at the end of Year 2, with nothing paid afterward.`,
    statements: [
      `The limiting internal rate of return of Option 1 is 12%.`,
      `The internal rate of return of Option 2 is approximately -58.84%.`,
      `Option 2 has a unique internal rate of return greater than -1.`,
      `The sum of Option 2's cash flows, $a_0$ + $a_1$ + $a_2$, equals -\\$40,000.`,
      `If Option 2's Year 2 return were removed entirely, leaving only $a_0 = -\\$50,000$ and $a_1 = \\$6,000$, its internal rate of return would be even lower than Option 2's own internal rate of return.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The limiting internal rate of return of Option 1 is 12%.**  (true)

Option 1 pays a level amount at the end of every year with no end date, so the returns form a perpetuity and their present value is the payment divided by the rate:

$$\\frac{a}{r}$$

The internal rate of return sets net present value to zero:

$$a_0 + \\frac{a}{r} = 0$$

Substituting the \\$50,000 outlay and the \\$6,000 annual return:

$$-50,000 + \\frac{6,000}{r} = 0$$

$$\\frac{6,000}{r} = 50,000$$

$$r = \\frac{6,000}{50,000}$$

$$r = 0.12 = 12\\%$$

The claim names 12%, and the calculation returns 12%, so the statement is true.`,
      `**B) The internal rate of return of Option 2 is approximately -58.84%.**  (true)

Option 2 has only two returns, so the rate solves a two-period equation:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

Substituting $a_0 = -50,000$, $a_1 = a_2 = 6,000$ and writing $s = 1/(1+r)$:

$$6,000s^{2} + 6,000s - 50,000 = 0$$

Dividing through by 2,000:

$$3s^{2} + 3s - 25 = 0$$

The discriminant is

$$3^{2} + 4(3)(25) = 9 + 300 = 309$$

$$\\sqrt{309} \\approx 17.578$$

$$s = \\frac{-3 + 17.578}{6} \\approx 2.42973$$

$$r = \\frac{1}{2.42973} - 1$$

$$r \\approx 0.41157 - 1 \\approx -0.5884 = -58.84\\%$$

The other root, $s \\approx -3.4297$, gives $r \\approx -1.291$, which lies below $-1$ and is discarded. The claim gives about $-58.84\\%$, matching the admissible root, so the statement is true.`,
      `**C) Option 2 has a unique internal rate of return greater than -1.**  (true)

The chapter's uniqueness result asks only about the signs of the cash flows:

$$a_0 < 0, \\qquad a_1, \\ldots, a_n > 0 \\implies \\text{unique } r^{*} > -1$$

Option 2's cash flows are

$$a_0 = -50,000 < 0, \\qquad a_1 = 6,000 > 0, \\qquad a_2 = 6,000 > 0$$

so the condition holds. Solving confirms that only one root is admissible. With $s = 1/(1+r)$:

$$6,000s^{2} + 6,000s - 50,000 = 0 \\implies 3s^{2} + 3s - 25 = 0$$

$$\\sqrt{9 + 300} = \\sqrt{309} \\approx 17.578$$

$$s = \\frac{-3 + 17.578}{6} \\approx 2.42973, \\qquad r \\approx -0.5884$$

$$s = \\frac{-3 - 17.578}{6} \\approx -3.4297, \\qquad r \\approx -1.291$$

The second root falls below $-1$, which is outside the range the theorem allows, so it is dropped and about $-58.84\\%$ is left as the only valid rate. A negative rate is still a rate, and the guarantee is about uniqueness above $-1$ rather than about profitability. The claim matches this, so the statement is true.`,
      `**D) The sum of Option 2's cash flows, $a_0$ + $a_1$ + $a_2$, equals -\\$40,000.**  (false)

The sum adds the outlay, entered as a negative amount, to the two returns:

$$a_0 + a_1 + a_2$$

Substituting Option 2's figures:

$$-50,000 + 6,000 + 6,000$$

$$= -50,000 + 12,000$$

$$= -38,000$$

The claim states $-40,000$:

$$40,000 - 38,000 = 2,000$$

The true total is $-38,000$, two thousand dollars less negative than the stated figure, so the statement is false.`,
      `**E) If Option 2's Year 2 return were removed entirely, leaving only $a_0 = -\\$50,000$ and $a_1 = \\$6,000$, its internal rate of return would be even lower than Option 2's own internal rate of return.**  (true)

Removing the second return leaves a one-year project, whose rate comes from the ratio of return to outlay:

$$-a + \\frac{b}{1+r} = 0 \\implies r = \\frac{b}{a} - 1$$

Substituting the \\$50,000 outlay and the single \\$6,000 return:

$$r = \\frac{6,000}{50,000} - 1$$

$$r = 0.12 - 1$$

$$r = -0.88 = -88\\%$$

Option 2 keeps both returns and earns about $-58.84\\%$. Comparing the two:

$$-88\\% < -58.84\\%$$

$$58.84 - 88 = -29.16 \\text{ percentage points}$$

Dropping the second \\$6,000 pushes the rate about 29 percentage points further into negative territory, so the stripped-down version is indeed the lower of the two and the statement is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 122,
    solution_overview: `A subscription software company spends \\$50,000 building a product and is comparing two versions. Option 1, the full version: a steady net return of \\$6,000 at the end of every year, indefinitely into the future. Option 2, the scaled-back version: the same \\$50,000 outlay, but returns of only \\$6,000 at the end of Year 1 and \\$6,000 at the end of Year 2, with nothing paid afterward.

**Part 1: Setup.**

$a_0 = -\\$50,000$ (both options)

Option 1: $a_i = \\$6,000$ each year forever; Option 2: $a_1 = a_2 = \\$6,000$ ($n = 2$)

**Part 2: Formula.**

Option 1: $a_0 + a/r = 0 \\Rightarrow r = a/(-a_0)$

Option 2: $a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$; substitute $s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Option $1$: $r = 6,000/50,000 = 12\\%$.

**2.** Option $2$: $6,000s^{2} + 6,000s - 50,000 = 0$ reduces to $3s^{2} + 3s - 25 = 0$; $\\sqrt{309} \\approx 17.578$; valid root $s \\approx 2.430$ gives $r \\approx -58.84\\%$ (discard $r < -1$).

**3.** Option $2$ cash-flow sum $= -\\$38,000$ (not $-\\$40,000$); one-year truncation gives $-88\\%$, which is lower than $-58.84\\%$.
`,
  },
  {
    id: `math-11-123`,
    case_id: `MATH 11.123`,
    title: `A renewable energy cooperative is comparing two designs for a community solar pr`,
    subsection: `11.7`,
    context: `A renewable energy cooperative is comparing two designs for a community solar project. Design A, a two-year project: invest \\$120,000, with net returns of \\$54,000 at the end of Year 1 and \\$88,000 at the end of Year 2. Design B, a simpler one-year project: invest \\$70,000, with a single net return of \\$81,200 at the end of Year 1.`,
    statements: [
      `The internal rate of return of Design A is approximately 11.04%.`,
      `The internal rate of return of Design B is exactly 16%.`,
      `Based on the internal rate of return criterion, Design B should be preferred over Design A.`,
      `At a discount rate of 13%, Design A has negative net present value while Design B still has positive net present value.`,
      `If Design A's Year 1 return were \\$10,000 lower, with Year 2 unchanged at \\$88,000, its internal rate of return would still exceed Design B's 16%.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The internal rate of return of Design A is approximately 11.04%.**  (true)

Design A has returns in two years, so its internal rate of return solves

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

Substituting $a_0 = -120,000$, $a_1 = 54,000$, $a_2 = 88,000$ and writing $s = 1/(1+r)$:

$$88,000s^{2} + 54,000s - 120,000 = 0$$

Dividing through by 2,000:

$$44s^{2} + 27s - 60 = 0$$

The discriminant is

$$27^{2} + 4(44)(60) = 729 + 10,560 = 11,289$$

$$\\sqrt{11,289} \\approx 106.250$$

$$s = \\frac{-27 + 106.250}{88} \\approx 0.90057$$

$$r_A = \\frac{1}{0.90057} - 1$$

$$r_A \\approx 0.11041 = 11.04\\%$$

The claim gives about 11.04%, and the calculation returns 11.04%, so the statement is true.`,
      `**B) The internal rate of return of Design B is exactly 16%.**  (true)

Design B has a single outlay and a single return one year later, so its rate follows the one-year rule:

$$-a + \\frac{b}{1+r} = 0 \\implies r = \\frac{b}{a} - 1$$

Substituting the \\$70,000 invested and the \\$81,200 returned:

$$r_B = \\frac{81,200}{70,000} - 1$$

$$\\frac{81,200}{70,000} = 1.16$$

$$r_B = 1.16 - 1$$

$$r_B = 0.16 = 16\\%$$

The claim names exactly 16%, and the calculation returns exactly 16%, so the statement is true.`,
      `**C) Based on the internal rate of return criterion, Design B should be preferred over Design A.**  (true)

The internal rate of return criterion picks the design with the higher rate, so both rates are needed.

Design A solves the two-year equation with $s = 1/(1+r)$:

$$88,000s^{2} + 54,000s - 120,000 = 0 \\implies 44s^{2} + 27s - 60 = 0$$

$$\\sqrt{729 + 10,560} = \\sqrt{11,289} \\approx 106.250$$

$$s \\approx \\frac{-27 + 106.250}{88} \\approx 0.90057, \\qquad r_A \\approx 0.11041 = 11.04\\%$$

Design B is a one-year project:

$$r_B = \\frac{81,200}{70,000} - 1 = 0.16 = 16\\%$$

Comparing the two:

$$16\\% - 11.04\\% = 4.96 \\text{ percentage points}$$

Design B earns nearly five percentage points more per dollar committed, so the criterion prefers Design B and the statement is true.`,
      `**D) At a discount rate of 13%, Design A has negative net present value while Design B still has positive net present value.**  (true)

Each design is valued at 13% with its own net present value expression.

Design A has two years of returns:

$$A_A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

$$\\frac{54,000}{1.13} \\approx 47,787.61$$

$$(1.13)^{2} = 1.2769, \\qquad \\frac{88,000}{1.2769} \\approx 68,916.91$$

$$A_A \\approx -120,000.00 + 47,787.61 + 68,916.91 \\approx -3,295.48$$

Design B has one:

$$A_B = -70,000 + \\frac{81,200}{1.13}$$

$$\\frac{81,200}{1.13} \\approx 71,858.41$$

$$A_B \\approx -70,000.00 + 71,858.41 \\approx 1,858.41$$

At 13% Design A is short by \\$3,295.48 while Design B is ahead by \\$1,858.41, which is exactly the pattern the claim describes, since 13% sits above Design A's 11.04% rate but below Design B's 16%. The statement is true.`,
      `**E) If Design A's Year 1 return were \\$10,000 lower, with Year 2 unchanged at \\$88,000, its internal rate of return would still exceed Design B's 16%.**  (false)

A smaller Year 1 return changes the middle coefficient, so Design A's rate must be solved again:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0, \\qquad s = \\frac{1}{1+r}$$

With the first return cut by \\$10,000 to $54,000 - 10,000 = 44,000$ and Year 2 unchanged:

$$88,000s^{2} + 44,000s - 120,000 = 0$$

Dividing through by 4,000:

$$22s^{2} + 11s - 30 = 0$$

The discriminant is

$$11^{2} + 4(22)(30) = 121 + 2,640 = 2,761$$

$$\\sqrt{2,761} \\approx 52.545$$

$$s = \\frac{-11 + 52.545}{44} \\approx 0.94420$$

$$r = \\frac{1}{0.94420} - 1 \\approx 0.05909 = 5.91\\%$$

Comparing with Design B's rate:

$$16\\% - 5.91\\% = 10.09 \\text{ percentage points}$$

The weakened version of Design A earns about 5.91%, roughly ten percentage points below Design B's 16%, so it does not exceed it and the statement is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 123,
    solution_overview: `A renewable energy cooperative is comparing two designs for a community solar project. Design A, a two-year project: invest \\$120,000, with net returns of \\$54,000 at the end of Year 1 and \\$88,000 at the end of Year 2. Design B, a simpler one-year project: invest \\$70,000, with a single net return of \\$81,200 at the end of Year 1.

**Part 1: Setup.**

Design A: $a_0 = -\\$120,000$, $a_1 = \\$54,000$, $a_2 = \\$88,000$

Design B: $a = \\$70,000$, $b = \\$81,200$

$n = 2$ years (Design A) / 1 year (Design B)

**Part 2: Formula.**

Design A ($n = 2$): $a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

Substitute $s = (1+r)^{-1}$

Design B ($n = 1$): $r = (b/a) - 1$

**Part 3: Solve.**

**1.** Step $1$ (Design A): $88,000s^{2} + 54,000s - 120,000 = 0$.

**2.** Dividing by $2,000$: $44s^{2} + 27s - 60 = 0$.

**3.** Step $2$: Discriminant: $27^{2} + 4(44)(60) = 729 + 10,560 = 11,289$.

**4.** $\\sqrt{11,289} \\approx 106.250$.

**5.** Step $3$: $s = (-27 + 106.250)/88 \\approx 0.90057$, so $r_A = 1/0.90057 - 1 \\approx 0.11041 \\approx 11.04\\%$.

**6.** Step $4$ (Design B): $r_B = (81,200/70,000) - 1 = 1.16 - 1 = 0.16 = 16\\%$.

**7.** NPV at $13\\%$: $NPV_A = -120,000 + 54,000/1.13 + 88,000/1.2769 = -120,000 + 47,787.61 + 68,916.91 = -\\$3,295.48 < 0$; $NPV_B = -70,000 + 81,200/1.13 = -70,000 + 71,858.41 = \\$1,858.41 > 0$.
`,
  },
];
