/**
 * Chapter 11 — Financial mathematics (subsections 11.1–11.7).
 * Generated from textbook/output/ch11_raw.json — do not hand-edit bulk content.
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

Periodic rate = 0.072/12 = 0.60%, matching exactly.`,
      `**B) The effective annual rate is approximately 7.44%.**  (true)

$R = (1.006)^{12} - 1$ ≈ 7.44%, matching exactly.`,
      `**C) A \\$6,000 deposit left for exactly one year would grow to \\$6,446.54.**  (true)

FV = 6,000 × 1.074424 = \\$6,446.54, matching exactly.`,
      `**D) If the bank instead compounded the same nominal rate annually, the effective annual rate would be higher than under monthly compounding.**  (false)

Trap: annual compounding (n = 1) simply reproduces the nominal rate as R, so it would equal 7.20%, which is lower than the monthly-compounded 7.44%, not higher.`,
      `**E) The effective annual rate exceeds the nominal rate by more than 1.00 percentage point.**  (false)

Trap: the actual gap is only 7.44% - 7.20% = 0.24 percentage points, far less than 1.00 percentage point.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A print shop owner deposits \\$6,000 into a business savings account offering a nominal annual rate of 7.20%, compounded monthly.

**Part 1: Setup.**

$P = \\$6{,}000$

Nominal annual rate $r = 7.20\\% = 0.072$

Compounding frequency $n = 12$ (monthly)

Time = 1 year

**Part 2: Formula.**

Monthly periodic rate $i_m = r/12$

Effective annual rate $R = (1+i_m)^{12} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Periodic rate = 0.072/12 = 0.006 = 0.60%.

**2.** $R = (1.006)^{12} - 1$ ≈ 1.074424 - 1 = 0.074424 ≈ 7.44%.

**3.** FV = 6,000 × 1.074424 = \\$6,446.54.

**4.** Annual compounding (n = 1) gives R = nominal rate = 7.20%, which is lower than 7.44%, not higher.

**5.** Gap = 7.44% - 7.20% = 0.24 percentage points, which is far less than 1.00 point.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Periodic rate = 0.08/4 = 2.00%, matching exactly.`,
      `**B) The number of quarterly periods over 6 years is 24.**  (true)

nt = 4 × 6 = 24, matching exactly.`,
      `**C) The balance after 6 years is approximately \\$9,860.00.**  (false)

Trap: $S(6) = 6{,}000 \\times (1.02)^{24}$ ≈ \\$9,650.61, not \\$9,860.00.`,
      `**D) If the deposit were left for only 3 years instead of 6, the future value would be exactly half of the 6-year future value.**  (false)

Trap: compound growth is an exponential function of time, not a linear one, so halving the time does not halve the future value. The 3-year balance (≈ \\$7,609.45) is far more than half of the 6-year balance.`,
      `**E) The total percentage growth of the deposit over the 6 years is more than 65%.**  (false)

Trap: the actual total growth is (9,650.61 - 6,000)/6,000 ≈ 60.84%, which is less than 65%, not more.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `A deposit of \\$6,000 is put into an account earning interest at the annual rate of 8%, with interest paid quarterly. The owner wants to know how much will be in the account after 6 years.

**Part 1: Setup.**

$S_0 = \\$6{,}000$

Nominal annual rate $r = 8\\% = 0.08$

Compounding frequency $n = 4$ (quarterly)

Time $t = 6$ years

**Part 2: Formula.**

Periodic rate $= r/n$

Future value $S(t) = S_0(1+r/n)^{nt}$

**Part 3: Solve.**

**1.** Periodic rate = 0.08/4 = 0.02 = 2.00%; nt = 4 × 6 = 24.

**2.** $S(6) = 6{,}000 \\times (1.02)^{24}$ ≈ 6,000 × 1.608435 = \\$9,650.61 (not \\$9,860.00).

**3.** Compound growth is exponential, not linear, in time: $(1.02)^{12}$ ≈ 1.268242, so the 3-year value would be about \\$7,609.45, which is NOT half of \\$9,650.61 (half would be \\$4,825.31).

**4.** Total growth = (9,650.61 - 6,000)/6,000 ≈ 0.6084 = 60.84%, which is not more than 65%.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$R_i = (1.016)^{4}$ - 1 ≈ 6.55%, matching exactly.`,
      `**B) The effective annual rate of Offer (ii) is approximately 6.61%.**  (true)

$R_{ii} = (1.0325)^{2}$ - 1 ≈ 6.61%, matching exactly.`,
      `**C) Offer (ii) is the better choice for the saver.**  (true)

A higher effective annual rate directly means more money for the saver, so Offer (ii) is indeed better.`,
      `**D) Because Offer (i) compounds more frequently, it must have the higher effective rate.**  (false)

Trap: despite compounding less frequently, Offer (ii)'s higher nominal rate (6.5% vs. 6.4%) is enough to give it the higher effective rate (6.61% vs. 6.55%) - frequency alone does not decide which offer is better.`,
      `**E) Depositing \\$10,000 for one year, Offer (ii) would produce more than \\$660 in interest.**  (true)

10,000 × (0.066056 - 0.065533) ≈ \\$5.23 to \\$5.24, matching approximately.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `A saver has \\$10,000 and is comparing two one-year term deposits: Offer (i) 6.4% with interest paid quarterly; Offer (ii) 6.5% with interest paid twice a year.

**Part 1: Setup.**

$P = \\$10{,}000$

Offer (i): $r = 6.4\\%$, $n = 4$ (quarterly)

Offer (ii): $r = 6.5\\%$, $n = 2$ (semi-annual)

Time = 1 year

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Offer (i): periodic rate = 0.064/4 = 0.016.

**2.** $R_i = (1.016)^{4}$ - 1 ≈ 1.065533 - 1 = 0.065533 ≈ 6.55%.

**3.** Offer (ii): periodic rate = 0.065/2 = 0.0325.

**4.** $R_{ii} = (1.0325)^{2}$ - 1 = 1.066056 - 1 = 0.066056 ≈ 6.61%.

**5.** Since $R_{ii}$ (6.61%) > $R_i$ (6.55%), Offer (ii) is the better deal for the saver, despite compounding less often.

**6.** Interest for Offer (i) = 10,000 × 0.065533 = \\$655.33.

**7.** Interest for Offer (ii) = 10,000 × 0.066056 = \\$660.56.

**8.** Difference ≈ \\$5.23 to \\$5.24.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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

Trap: 12 × 1.75% = 21.00%, not 22.00%.`,
      `**B) The effective annual rate of interest is approximately 21.75%.**  (false)

Trap: the true effective annual rate is $(1.0175)^{12}$ - 1 ≈ 23.14%, not 21.75%.`,
      `**C) An unpaid balance of \\$2,000 would grow to \\$2,420.00 after one year of accruing interest this way.**  (false)

Trap: FV = 2,000 × 1.231430 = \\$2,462.86, not \\$2,420.00.`,
      `**D) The effective annual rate exceeds the nominal annual rate by more than 2.00 percentage points.**  (true)

23.14% - 21.00% = 2.14 percentage points, which is indeed more than 2.00 percentage points.`,
      `**E) If the monthly rate were instead 1.50%, the effective annual rate would still exceed 20%.**  (false)

Trap: at a 1.50% monthly rate, the effective annual rate is only about 19.56%, which falls just short of 20%, not above it.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `A retail credit card charges interest on any outstanding balance at a rate of 1.75% per month.

**Part 1: Setup.**

Monthly periodic rate: $i_m = 1.75\\% = 0.0175$

Months per year: $n = 12$

**Part 2: Formula.**

Nominal annual rate $= 12 i_m$

Effective annual rate $R = (1 + i_m)^{12} - 1$

**Part 3: Solve.**

**1.** Nominal annual rate = 12 × 1.75% = 21.00% (not 22.00%).

**2.** $R = (1.0175)^{12} - 1$ ≈ 1.231430 - 1 = 0.231430 ≈ 23.14% (not 21.75%).

**3.** FV of \\$2,000 unpaid for 1 year = 2,000 × 1.231430 = \\$2,462.86 (not \\$2,420.00).

**4.** Gap = 23.14% - 21.00% = 2.14 percentage points, which is indeed more than 2.00 percentage points.

**5.** At a 1.50% monthly rate: $R = (1.015)^{12} - 1$ ≈ 1.195625 - 1 = 0.195625 ≈ 19.56%, which does NOT exceed 20%.

**Answer.** A=FALSE, B=FALSE, C=FALSE, D=TRUE, E=FALSE`,
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

Periodic rate = 0.056/4 = 1.40%, matching exactly.`,
      `**B) The effective annual rate is approximately 5.72%.**  (true)

$R = (1.014)^{4} - 1$ ≈ 5.72%, matching exactly.`,
      `**C) The balance after one year is approximately \\$15,857.81.**  (true)

FV = 15,000 × 1.057187 = \\$15,857.81, matching exactly.`,
      `**D) If the same nominal rate were instead compounded monthly, the resulting effective annual rate would be lower than under quarterly compounding.**  (false)

Trap: switching to monthly compounding raises the EAR (to roughly 5.75%), since more frequent compounding never lowers the EAR for a fixed nominal rate.`,
      `**E) The gap between the EAR and the nominal rate exceeds 0.20 percentage points.**  (false)

Trap: the actual gap is only about 0.12 percentage points, which does not exceed 0.20 percentage points.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 5,
    solution_overview: `A veterinary clinic deposits \\$15,000 into a one-year business account earning a nominal annual rate of 5.6%, compounded quarterly.

**Part 1: Setup.**

$P = \\$15{,}000$

Nominal annual rate $r = 5.6\\% = 0.056$

Compounding frequency $n = 4$ (quarterly)

Time = 1 year

**Part 2: Formula.**

Periodic rate $= r/n$

Effective annual rate $R = (1+r/n)^{n} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Periodic rate = 0.056/4 = 0.014 = 1.40%.

**2.** $R = (1.014)^{4} - 1$ ≈ 1.057187 - 1 = 0.057187 ≈ 5.72%.

**3.** FV = 15,000 × 1.057187 = \\$15,857.81.

**4.** Monthly compounding of the same 5.6% nominal rate gives a slightly higher EAR (≈ 5.746%), not lower - more frequent compounding always raises EAR.

**5.** Gap = 5.7187% - 5.60% ≈ 0.12 percentage points, which is less than 0.20 percentage points.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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
      `It would take approximately 58 months for the deposit to double, which would be exactly half of the actual doubling time.`,
      `If the nominal rate were doubled to 14.4%, the resulting effective annual rate would also be exactly double the original effective annual rate.`,
      `Because $(1 + r/n)^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The monthly periodic rate is 0.60%.**  (true)

Periodic rate = 0.072/12 = 0.60%, matching exactly.`,
      `**B) It takes approximately 108 months for the deposit to double.**  (false)

Trap: the correct doubling time is t = ln2/ln(1.006) ≈ 115.85 months (about 9.65 years), not 108 months.`,
      `**C) It would take approximately 58 months for the deposit to double, which would be exactly half of the actual doubling time.**  (false)

Trap: the true doubling time is about 115.85 months; 58 months is nowhere near it and is not meaningfully 'half' of the correct value in any valid sense.`,
      `**D) If the nominal rate were doubled to 14.4%, the resulting effective annual rate would also be exactly double the original effective annual rate.**  (false)

Trap: doubling the nominal rate raises the EAR to about 15.38%, but exactly double the original EAR of 7.44% would be 14.88% - the two figures are close but not equal, since EAR is a nonlinear (not proportional) function of the nominal rate.`,
      `**E) Because $(1 + r/n)^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.**  (true)

Because $(1 + r/n)^{t}$ is a strictly increasing exponential function of t, solving for t via natural logarithms works for any target multiple, not just doubling - this is exactly the method used in Example 11.1.2 of the textbook.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `A savings account earns a nominal annual rate of 7.2%, compounded monthly. An investor wants to know how long it will take for a deposit to double in value.

**Part 1: Setup.**

Nominal annual rate $r = 7.2\\% = 0.072$

Compounding frequency $n = 12$ (monthly)

Target: double the principal

**Part 2: Formula.**

Monthly periodic rate $i_m = r/12$

Growth condition $(1+i_m)^{t} = M$ (M = target growth multiple)

Solve via logarithms: $t = \\ln M / \\ln(1+i_m)$

**Part 3: Solve.**

**1.** Periodic rate = 0.072/12 = 0.006 = 0.60%.

**2.** Solve $(1.006)^{t}$ = 2: t = ln 2 / ln 1.006 ≈ 0.693147/0.0059821 ≈ 115.85 months ≈ 9.65 years (not 108 months).

**3.** 115.85 months is the correct doubling time, not 58 months (which is not even close to a clean half of it, since doubling time does not simply relate this way to a 'half time').

**4.** At 14.4% nominal monthly, $R = (1.012)^{12} - 1$ ≈ 15.38%, but double the original 7.44% EAR would be 14.88%, not 15.38% - doubling the nominal rate does not exactly double the EAR.

**5.** The same logarithmic method, t = ln(target multiple)/ln(periodic growth factor), works for any target multiple, since the exponential growth curve is monotonically increasing - this is a general, valid technique.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
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

$R = (1.075)^{2} - 1$ = 15.5625%, matching exactly.`,
      `**B) The effective rate under quarterly compounding is approximately 15.87%.**  (true)

$R = (1.0375)^{4} - 1$ ≈ 15.87%, matching exactly.`,
      `**C) The effective rate under monthly compounding is approximately 16.08%.**  (true)

$R = (1.0125)^{12} - 1$ ≈ 16.08%, matching exactly.`,
      `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

This textbook fact (Example 11.2.3 referenced in Section 11.1) is confirmed here: for a fixed r > 0, R strictly increases as n increases.`,
      `**E) The increase in effective rate from semi-annual to quarterly is smaller than the increase from quarterly to monthly.**  (false)

Trap: the gap from semi-annual to quarterly (0.31 points) is actually larger than the gap from quarterly to monthly (0.21 points), not smaller - the marginal benefit of increasing compounding frequency diminishes as n grows, which is why R never grows without bound even as n → ∞.`,
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

**1.** Semi-annual: $R = (1.075)^{2} - 1$ = 1.155625 - 1 = 0.155625 ≈ 15.56%.

**2.** Quarterly: $R = (1.0375)^{4} - 1$ ≈ 1.158650 - 1 = 0.158650 ≈ 15.87%.

**3.** Monthly: $R = (1.0125)^{12} - 1$ ≈ 1.160766 - 1 = 0.160766 ≈ 16.08%.

**4.** Ranking confirms 15.56% < 15.87% < 16.08% as compounding frequency increases.

**5.** First gap = 15.87% - 15.56% = 0.31 points; second gap = 16.08% - 15.87% = 0.21 points.

**6.** The first gap is actually LARGER than the second, not smaller - each additional increase in frequency adds progressively less to the EAR.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE`,
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

Periodic rate = 0.06/12 = 0.50%, matching exactly.`,
      `**B) The number of monthly compounding periods over 10 years, nt, is 120.**  (true)

nt = 12 × 10 = 120, matching exactly.`,
      `**C) The balance after 10 years is approximately \\$7,277.60.**  (true)

$S(10) = 4{,}000 \\times (1.005)^{120}$ ≈ \\$7,277.60, matching exactly.`,
      `**D) The deposit exactly doubles in value over these 10 years.**  (false)

Trap: the growth factor is 1.8194, so the deposit is close to but has not yet doubled; it would need roughly 11.6 years, not 10, to fully double at this rate.`,
      `**E) If compounded annually instead, the 10-year future value would exceed the future value obtained under monthly compounding.**  (false)

Trap: annual compounding produces a SMALLER future value (\\$7,163.39) than monthly compounding (\\$7,277.60) for the same nominal rate, since less frequent compounding always yields less growth, not more.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `A grandparent deposits \\$4,000 into a trust account for a grandchild, earning a nominal annual rate of 6%, compounded monthly, for 10 years.

**Part 1: Setup.**

$S_0 = \\$4{,}000$

Nominal annual rate $r = 6\\% = 0.06$

Compounding frequency $n = 12$ (monthly)

Time $t = 10$ years

**Part 2: Formula.**

Future value $S(t) = S_0(1+r/n)^{nt}$

**Part 3: Solve.**

**1.** Periodic rate = 0.06/12 = 0.005 = 0.50%; nt = 12 × 10 = 120.

**2.** $S(10) = 4{,}000 \\times (1.005)^{120}$ ≈ 4,000 × 1.8194 = \\$7,277.60.

**3.** Growth factor is 1.8194, not 2.0, so the deposit has NOT quite doubled after 10 years (it would take about 11.6 years to fully double at this rate).

**4.** Annual compounding (n = 1): $S(10) = 4{,}000 \\times (1.06)^{10}$ = 4,000 × 1.790847 = \\$7,163.39, which is LESS than \\$7,277.60, not more, since less frequent compounding always yields a smaller future value for the same nominal rate.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Solving $(1 + r/4)^{32}$ = 1.6 gives r ≈ 5.92%, matching exactly.`,
      `**B) The corresponding quarterly periodic rate is approximately 1.48%.**  (true)

Quarterly periodic rate = 5.92%/4 ≈ 1.48%, matching exactly.`,
      `**C) If the same growth were required in only 4 years instead of 8, the required nominal rate would be lower than in the original 8-year scenario.**  (false)

Trap: reaching the same 1.6× growth factor in HALF the time (4 years instead of 8) requires a substantially HIGHER rate, not a lower one.`,
      `**D) If the compounding were changed from quarterly to monthly, the required nominal rate would need to be higher than in the original quarterly scenario.**  (false)

Trap: because monthly compounding is more frequent than quarterly, it actually needs a LOWER nominal rate than 5.92% to reach the same target - not a higher one.`,
      `**E) Growing from \\$50,000 to \\$80,000 represents an increase of more than 65%.**  (false)

Trap: the actual increase is exactly (80,000 - 50,000)/50,000 = 60.00%, which is not more than 65%.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `An investment fund wants to grow \\$50,000 into \\$80,000 over 8 years, with interest compounded quarterly. The fund manager needs to find the required nominal annual rate.

**Part 1: Setup.**

$S_0 = \\$50{,}000$

Target $S(t) = \\$80{,}000$

$n = 4$ (quarterly)

$t = 8$ years, so $nt = 32$

**Part 2: Formula.**

$S(t) = S_0(1+r/n)^{nt}$

Solve for rate: $r = n[(S(t)/S_0)^{1/(nt)} - 1]$

**Part 3: Solve.**

**1.** $(1 + r/4)^{32}$ = 80,000/50,000 = 1.6, so $1 + r/4 = (1.6)^{1/32}$ ≈ 1.014796, giving r ≈ 4 × 0.014796 ≈ 0.05918 ≈ 5.92%.

**2.** Quarterly periodic rate = 5.92%/4 ≈ 1.48%.

**3.** A shorter time horizon (4 years instead of 8) to reach the same growth factor of 1.6 requires a HIGHER rate, not a lower one, since less time demands faster growth.

**4.** Monthly compounding is more frequent than quarterly, so it needs a LOWER nominal rate, not a higher one, to reach the same 1.6 growth factor over the same 8 years.

**5.** Growth = (80,000 - 50,000)/50,000 = 30,000/50,000 = 0.60 = 60.00% exactly, which is not more than 65%.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

Trap: $R_a$ = 10.80% is actually slightly LOWER than $R_b$ ≈ 10.81%, not higher.`,
      `**B) Option (b)'s effective annual rate is approximately 10.81%.**  (true)

$R_b = (1.026)^{4}$ - 1 ≈ 10.81%, matching exactly.`,
      `**C) Because option (b) quotes a lower nominal rate, it must be the cheaper option for the borrower.**  (false)

Trap: despite quoting a lower nominal rate, option (b)'s quarterly compounding pushes its effective rate very slightly above option (a)'s, so option (b) is actually marginally more expensive, not cheaper.`,
      `**D) For the borrower, option (a) is more expensive than option (b).**  (false)

Trap: since 10.80% < 10.81%, option (a) is actually the slightly CHEAPER (less expensive) option for the borrower, not the more expensive one.`,
      `**E) The two options' effective annual rates differ by more than 0.05 percentage points.**  (false)

Trap: the actual difference is only about 0.013 percentage points, which is less than 0.05 percentage points, not more.`,
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

**1.** Option (a): with n = 1, $R_a$ = nominal rate = 10.80% exactly.

**2.** Option (b): periodic rate = 0.104/4 = 0.026.

**3.** $R_b = (1.026)^{4}$ - 1 ≈ 1.108127 - 1 = 0.108127 ≈ 10.81%.

**4.** Since $R_b$ (10.81%) is very slightly higher than $R_a$ (10.80%), option (a) is actually marginally cheaper for the borrower, even though its quoted nominal rate is higher.

**5.** Difference = 10.8127% - 10.80% ≈ 0.013 percentage points, which is less than 0.05 percentage points.

**Answer.** A=FALSE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$(1.045)^{6}$ ≈ 1.302253, matching exactly.`,
      `**B) The amount that would need to have been deposited 6 years ago is approximately \\$30,715.86.**  (true)

$S_0 = 40{,}000/1.302253 ≈ \\$30{,}715.86$, matching exactly.`,
      `**C) This present value is less than \\$32,000.**  (true)

\\$30,715.86 < \\$32,000, matching exactly.`,
      `**D) If the rate had instead been 5.5%, the required present value would be higher than at 4.5%.**  (false)

Trap: a higher interest rate (5.5%) grows money faster, so a SMALLER deposit today would suffice to reach the same \\$40,000 target - the required present value would be lower, not higher.`,
      `**E) The total interest earned over the 6 years on this deposit would be approximately \\$9,284.14.**  (true)

40,000 - 30,715.86 = \\$9,284.14, matching exactly.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `A trustee wants to know how much would have needed to be deposited 6 years ago, at a constant annual interest rate of 4.5%, paid once a year, to have exactly \\$40,000 available today.

**Part 1: Setup.**

Target $S(t) = \\$40{,}000$

Nominal annual rate $r = 4.5\\% = 0.045$

$n = 1$ (annual)

Time $t = 6$ years

**Part 2: Formula.**

Future value $S(t) = S_0(1+r)^{t}$

Present value $S_0 = S(t)/(1+r)^{t}$

**Part 3: Solve.**

**1.** $(1.045)^{6}$ ≈ 1.302253.

**2.** $S_0 = 40{,}000/1.302253 ≈ \\$30{,}715.86$.

**3.** \\$30,715.86 is indeed less than \\$32,000.

**4.** A higher rate (5.5%) means the deposit grows faster, so LESS principal is needed today to reach the same \\$40,000 in 6 years - the required present value would be lower, not higher.

**5.** Interest = 40,000 - 30,715.86 = \\$9,284.14.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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

t = ln(1.5)/ln(1.005) ≈ 81.30 months ≈ 6.78 years, matching exactly.`,
      `**B) It takes approximately 6.00 years exactly to reach £6,000.**  (false)

Trap: the correct time is approximately 6.78 years, not exactly 6.00 years.`,
      `**C) It takes approximately 48 months to reach £6,000.**  (false)

Trap: 48 months (4 years) is far short of the correct 81.30 months.`,
      `**D) Because the deposit needs to grow by a factor of 1.5 rather than double, the required time must be less than half of this account's doubling time.**  (false)

Trap: the doubling time is about 138.99 months, so half of that is about 69.5 months; the actual 81.30 months needed for a 1.5× increase is MORE than that half, not less.`,
      `**E) The time required to reach £6,000, found using logarithms, is exactly 100 months.**  (false)

Trap: the correct value is approximately 81.30 months, not 100.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `A deposit of £4,000 earns a nominal annual rate of 6%, compounded monthly. An investor wants to know how long it will take for the balance to reach £6,000.

**Part 1: Setup.**

$S_0 = £4{,}000$

Target $S(t) = £6{,}000$

Nominal annual rate $r = 6\\% = 0.06$

Compounding frequency $n = 12$ (monthly)

**Part 2: Formula.**

Growth equation $(1+r/n)^{t} = S(t)/S_0$

Solve for time $t = \\ln(S(t)/S_0)/\\ln(1+r/n)$

**Part 3: Solve.**

**1.** Periodic rate = 0.06/12 = 0.005.

**2.** Target ratio = 6,000/4,000 = 1.5.

**3.** t = ln(1.5)/ln(1.005) ≈ 0.405465/0.0049875 ≈ 81.30 months ≈ 6.78 years.

**4.** This is neither exactly 6.00 years nor 48 months (4 years) - both are incorrect approximations of the true 81.30-month figure.

**5.** Doubling time for this account = ln2/ln(1.005) ≈ 138.99 months; half of that is ≈ 69.5 months.

**6.** The actual time to grow by 1.5× is 81.30 months, which is MORE than half the doubling time, not less.

**7.** t = ln(1.5)/ln(1.005) ≈ 81.30 months, not 100.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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

Periodic rate = 0.0425/365 ≈ 0.011644%, matching exactly.`,
      `**B) The effective annual rate is approximately 4.34%.**  (true)

R ≈ 4.34%, matching exactly.`,
      `**C) The balance after one year is approximately \\$20,868.26.**  (true)

FV = 20,000 × 1.043413 = \\$20,868.26, matching exactly.`,
      `**D) If compounded monthly instead, the effective annual rate would be higher than under daily compounding.**  (false)

Trap: monthly compounding is less frequent than daily, so it produces a slightly LOWER EAR (≈4.33%), not a higher one.`,
      `**E) The gap between the effective annual rate and the nominal rate exceeds 0.20 percentage points.**  (false)

Trap: the actual gap is only about 0.09 percentage points, which does not exceed 0.20 percentage points.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `A retiree deposits \\$20,000 into a money-market account earning a nominal annual rate of 4.25%, compounded daily using a 365-day year, for one year.

**Part 1: Setup.**

$P = \\$20{,}000$

Nominal annual rate $r = 4.25\\% = 0.0425$

Compounding frequency $n = 365$ (daily)

Time = 1 year

**Part 2: Formula.**

Periodic rate $= r/n$

Effective annual rate $R = (1+r/n)^{n} - 1$

Future value $FV = P(1+R)$

**Part 3: Solve.**

**1.** Periodic rate = 0.0425/365 ≈ 0.00011644 = 0.011644%.

**2.** $R = (1 + 0.0425/365)^{365} - 1$ ≈ 1.043413 - 1 = 0.043413 ≈ 4.34%.

**3.** FV = 20,000 × 1.043413 = \\$20,868.26.

**4.** Monthly compounding of 4.25% nominal gives R ≈ 4.33%, which is slightly LOWER than the daily EAR of 4.34%, not higher - daily compounding is more frequent than monthly.

**5.** Gap = 4.34% - 4.25% = 0.09 percentage points, which does not exceed 0.20 percentage points.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

12 × 1.9% = 22.80%, matching exactly.`,
      `**B) The effective annual rate of interest is approximately 25.34%.**  (true)

$R = (1.019)^{12} - 1$ ≈ 25.34%, matching exactly.`,
      `**C) The effective annual rate is approximately 22.80%, the same as the nominal annual rate.**  (false)

Trap: the effective annual rate (25.34%) is meaningfully higher than the nominal annual rate (22.80%), not the same - whenever n > 1, R always exceeds the nominal rate.`,
      `**D) A \\$3,000 unpaid balance would grow to \\$3,684.00 after one year.**  (false)

Trap: FV = 3,000 × 1.253408 = \\$3,760.22, not \\$3,684.00.`,
      `**E) The effective annual rate exceeds the nominal annual rate by more than 3.00 percentage points.**  (false)

Trap: the actual gap is about 2.54 percentage points, which is less than 3.00 percentage points, not more.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `A retail store credit card charges interest on unpaid balances at a rate of 1.9% per month.

**Part 1: Setup.**

Monthly periodic rate $i_m = 1.9\\% = 0.019$

Months per year $n = 12$

**Part 2: Formula.**

Nominal annual rate $= 12 i_m$

Effective annual rate $R = (1 + i_m)^{12} - 1$

**Part 3: Solve.**

**1.** Nominal annual rate = 12 × 1.9% = 22.80%.

**2.** $R = (1.019)^{12} - 1$ ≈ 1.253408 - 1 = 0.253408 ≈ 25.34%.

**3.** FV of \\$3,000 unpaid for 1 year = 3,000 × 1.253408 = \\$3,760.22 (not \\$3,684.00).

**4.** Gap = 25.34% - 22.80% ≈ 2.54 percentage points, which does not exceed 3.00 percentage points.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$R = (1.05)^{2} - 1$ = 10.25%, matching exactly.`,
      `**B) The effective rate under quarterly compounding is approximately 10.38%.**  (true)

$R = (1.025)^{4} - 1$ ≈ 10.38%, matching exactly.`,
      `**C) The effective rate under monthly compounding is approximately 10.47%.**  (true)

$R = (1.0083333)^{12} - 1$ ≈ 10.47%, matching exactly.`,
      `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

This matches the textbook result that R strictly increases in n for a fixed r > 0.`,
      `**E) The jump in effective rate from semi-annual to quarterly is smaller than the jump from quarterly to monthly.**  (false)

Trap: the first jump (0.13 points) is larger than the second jump (0.09 points), not smaller - the marginal gain from increasing compounding frequency diminishes as n grows.`,
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

**1.** Semi-annual: $R = (1.05)^{2} - 1$ = 1.1025 - 1 = 0.1025 = 10.25%.

**2.** Quarterly: $R = (1.025)^{4} - 1$ ≈ 1.103813 - 1 = 0.103813 ≈ 10.38%.

**3.** Monthly: $R = (1.0083333)^{12} - 1$ ≈ 1.104713 - 1 = 0.104713 ≈ 10.47%.

**4.** Confirms increasing R with increasing frequency: 10.25% < 10.38% < 10.47%.

**5.** First jump = 10.38% - 10.25% = 0.13 points; second jump = 10.47% - 10.38% = 0.09 points - the first jump is LARGER than the second, not smaller.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE`,
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

$r = 50^{1/80} - 1$ ≈ 5.01%, matching exactly.`,
      `**B) The required annual growth rate is approximately 6.25%.**  (false)

Trap: the correct rate is approximately 5.01%, not 6.25%.`,
      `**C) Since 50 is half of 100, the required rate for 50× growth would be exactly half of the rate needed for 100× growth over the same 80 years.**  (false)

Trap: because the relationship between growth factor and rate is exponential (via a root), rates do not scale linearly with the target multiple; halving the multiple does not halve the required rate.`,
      `**D) At a growth rate of 5.01% per year, GDP would multiply by exactly 100 after 160 years.**  (false)

Trap: at r = 5.01%, doubling the time to 160 years squares the growth factor ($50^{2} = 2{,}500$), not just doubles it to 100.`,
      `**E) Achieving 50× growth in only 40 years would require an annual rate lower than 5.01%.**  (false)

Trap: reaching the same 50× growth in half the time (40 years instead of 80) requires a substantially HIGHER rate (≈9.65%), not a lower one.`,
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

**1.** $(1 + r)^{80}$ = 50, so $r = 50^{1/80} - 1$ ≈ 1.050115 - 1 = 0.050115 ≈ 5.01%.

**2.** This is not 6.25%.

**3.** Growth rates are found via a root (an exponential relationship), not a simple linear halving of the target multiple, so a rate for 50× growth is not simply half the rate for 100× growth.

**4.** At r = 5.01%, after 160 years the growth factor is $(1.050115)^{160} = (50)^{2}$ = 2,500, not 100.

**5.** Achieving the same 50× growth in only 40 years (half the time) requires solving $r = 50^{1/40} - 1$ ≈ 9.65%, which is HIGHER than 5.01%, not lower - less time always demands a faster rate for the same target multiple.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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

$S_{0,X} = T/1.418038$ ≈ \\$17,629.99, matching exactly.`,
      `**B) The amount needed today in Account Y to reach \\$25,000 in 7 years is approximately \\$17,534.28.**  (true)

$S_{0,Y} = T/1.425964$ ≈ \\$17,534.28, matching exactly.`,
      `**C) Account X requires a smaller upfront deposit than Account Y to reach the same \\$25,000 target.**  (false)

Trap: Account Y actually requires the smaller upfront deposit (\\$17,534.28 vs. \\$17,629.99), not Account X.`,
      `**D) Account Y's effective annual rate is higher than Account X's.**  (true)

$R_Y$ ≈ 5.20% is indeed higher than $R_X$ ≈ 5.12%, matching exactly.`,
      `**E) Because Account X compounds more frequently, Account X must always require the smaller upfront deposit for any future target and any time horizon.**  (false)

Trap: this task is itself a counterexample - Account X compounds more frequently but still requires the LARGER deposit, because Account Y's higher nominal rate more than compensates for its lower compounding frequency. Frequency alone never determines which account is better; the nominal rate matters too.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `A parent needs exactly \\$25,000 in 7 years for a tuition bill and is deciding how much to deposit today into one of two accounts: Account X, nominal 5.00% compounded monthly; Account Y, nominal 5.10% compounded quarterly.

**Part 1: Setup.**

Target amount $T = \\$25{,}000$ after t = 7 years

Account X: r = 5.00%, n = 12 (monthly)

Account Y: r = 5.10%, n = 4 (quarterly)

**Part 2: Formula.**

Present value $S_0 = T / (1 + r/n)^{nt}$ (T = target future amount)

Effective annual rate $R = (1 + r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Account X: $(1 + 0.05/12)^{84}$ ≈ 1.418038, so $S_{0,X} = T/1.418038$ ≈ \\$17,629.99.

**2.** Account Y: $(1 + 0.051/4)^{28}$ ≈ 1.425964, so $S_{0,Y} = T/1.425964$ ≈ \\$17,534.28.

**3.** Since $S_{0,Y} < S_{0,X}$, Account Y actually requires the SMALLER upfront deposit, not Account X.

**4.** $R_X = (1 + 0.05/12)^{12} - 1$ ≈ 5.12%.

**5.** $R_Y = (1.01275)^{4} - 1$ ≈ 5.20%.

**6.** Indeed $R_Y > R_X$, consistent with Account Y needing less principal.

**7.** This scenario itself is a counterexample to statement (e): despite compounding more often, Account X needs the LARGER deposit here, because Account Y's higher nominal rate wins out.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

$(1.011)^{36}$ ≈ 1.4827, matching exactly.`,
      `**B) The amount that needed to be invested 9 years ago is approximately \\$40,467.83.**  (true)

$S_0 = T/1.482658$ ≈ \\$40,467.83, matching exactly.`,
      `**C) This present value is more than \\$45,000.**  (false)

Trap: \\$40,467.83 is less than \\$45,000, not more.`,
      `**D) If the rate had instead been 5.0% nominal, the required present value would be higher than at 4.4%.**  (false)

Trap: a higher rate (5.0%) means less principal is needed today to reach the same \\$60,000 - the present value would be LOWER, not higher.`,
      `**E) The implied total interest earned over the 9 years on this investment is more than \\$20,000.**  (false)

Trap: the implied interest is 60,000 - 40,467.83 = \\$19,532.17, which is just under \\$20,000, not more.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `A trustee needs to know how much would have had to be invested 9 years ago, compounded quarterly at a nominal annual rate of 4.4%, to have exactly \\$60,000 available today.

**Part 1: Setup.**

Target amount $T = \\$60{,}000$ today

Nominal annual rate $r = 4.4\\% = 0.044$

Compounding frequency $n = 4$ (quarterly)

Time $t = 9$ years, so $nt = 36$

**Part 2: Formula.**

Present value $S_0 = T / (1 + r/n)^{nt}$ (T = target future amount)

Effective annual rate $R = (1 + r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Periodic rate = 0.044/4 = 0.011.

**2.** $(1.011)^{36}$ ≈ 1.482658, so $S_0 = T/1.482658$ ≈ \\$40,467.83.

**3.** \\$40,467.83 is less than \\$45,000, not more.

**4.** A higher rate (5.0%) grows money faster, so a SMALLER amount invested 9 years ago would reach \\$60,000 today - the required present value would be lower, not higher.

**5.** Interest = 60,000 - 40,467.83 = \\$19,532.17, which does not exceed \\$20,000.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$R_1 = (1.00525)^{12}$ - 1 ≈ 6.49%, matching exactly.`,
      `**B) CD2's effective annual rate is approximately 6.55%.**  (true)

$R_2 = (1.016)^{4}$ - 1 ≈ 6.55%, matching exactly.`,
      `**C) CD3's effective annual rate is approximately 6.55%, essentially the same as CD2's.**  (true)

$R_3$ ≈ 6.55%, essentially matching CD2's rate even though CD3 compounds half as often, because CD3's slightly higher nominal rate makes up the difference.`,
      `**D) CD1 has both the lowest nominal rate and the lowest effective annual rate of the three CDs.**  (true)

CD1 has both the lowest quoted nominal rate and, consistent with that, the lowest effective annual rate of the three - no inversion occurs among these three CDs.`,
      `**E) On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.**  (true)

20,000 × (0.065533 - 0.064852) ≈ \\$13.61, matching approximately.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 19,
    solution_overview: `A saver is comparing three one-year certificates of deposit for a \\$20,000 deposit: CD1: nominal 6.30%, compounded monthly. CD2: nominal 6.40%, compounded quarterly. CD3: nominal 6.45%, compounded semi-annually.

**Part 1: Setup.**

$P = \\$20{,}000$

CD1: $r = 6.30\\%$, $n = 12$ (monthly)

CD2: $r = 6.40\\%$, $n = 4$ (quarterly)

CD3: $r = 6.45\\%$, $n = 2$ (semi-annual)

Time = 1 year

**Part 2: Formula.**

Effective annual rate $R = (1+r/n)^{n} - 1$

Interest earned $= P \\times R$

**Part 3: Solve.**

**1.** CD1: periodic rate = 0.063/12 = 0.00525.

**2.** $R_1 = (1.00525)^{12}$ - 1 ≈ 1.064852 - 1 = 0.064852 ≈ 6.49%.

**3.** CD2: periodic rate = 0.064/4 = 0.016.

**4.** $R_2 = (1.016)^{4}$ - 1 ≈ 1.065533 - 1 = 0.065533 ≈ 6.55%.

**5.** CD3: periodic rate = 0.0645/2 = 0.03225.

**6.** $R_3 = (1.03225)^{2}$ - 1 ≈ 1.065540 - 1 = 0.065540 ≈ 6.55%, essentially tied with CD2 (difference under 0.01 points).

**7.** CD1 has the lowest nominal rate (6.30%) and the lowest EAR (6.49%) of the three.

**8.** Interest for CD1 = 20,000 × 0.064852 = \\$1,297.04.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

t = ln(1.466667)/ln(1.005) ≈ 76.8 months ≈ 6.40 years, matching exactly.`,
      `**B) It would take Account Q the same amount of time as Account M to reach the same target.**  (false)

Trap: Account Q actually reaches the target faster, in about 6.275 years, not the same 6.40 years as Account M.`,
      `**C) Because Account Q compounds less frequently, it must take longer than Account M to reach \\$22,000.**  (false)

Trap: despite compounding less frequently, Account Q's higher nominal rate (6.15% vs. 6.00%) lets it reach the target faster (≈6.275 years) than Account M (≈6.40 years), not slower.`,
      `**D) Account M's effective annual rate is higher than Account Q's.**  (false)

Trap: $R_Q$ (≈6.29%) is actually higher than $R_M$ (≈6.17%), not the other way around.`,
      `**E) If both accounts instead needed to reach \\$30,000, each account would take exactly twice as long as it took to reach \\$22,000.**  (false)

Trap: the time to reach a different target multiple (2× instead of 1.4667×) is governed by a different logarithm (ln 2 vs. ln 1.4667) and is not simply double the original time; each target multiple requires its own separate calculation.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `A family has \\$15,000 today and wants to know which of two accounts reaches \\$22,000 sooner: Account M, nominal 6.00% compounded monthly; Account Q, nominal 6.15% compounded quarterly.

**Part 1: Setup.**

$S_0 = \\$15{,}000$, target = \\$22,000

Account M: $r = 6.00\\%$, $n = 12$ (monthly)

Account Q: $r = 6.15\\%$, $n = 4$ (quarterly)

**Part 2: Formula.**

Time to reach target (in periods): $t = \\ln(T/S_0)/\\ln(1+r/n)$ (T = target amount)

Effective annual rate $R = (1+r/n)^{n} - 1$

**Part 3: Solve.**

**1.** Target ratio = 22,000/15,000 ≈ 1.466667.

**2.** Account M: periodic rate = 0.005.

**3.** t = ln(1.466667)/ln(1.005) ≈ 0.382996/0.0049875 ≈ 76.81 months ≈ 6.40 years.

**4.** Account Q: periodic rate = 0.015375.

**5.** t = ln(1.466667)/ln(1.015375) ≈ 0.382996/0.0152580 ≈ 25.10 quarters ≈ 6.275 years, which is FASTER than Account M's 6.40 years, not identical and not slower.

**6.** $R_M = (1.005)^{12}$ - 1 ≈ 6.17%.

**7.** $R_Q = (1.015375)^{4}$ - 1 ≈ 6.29%.

**8.** So $R_Q$ > $R_M$, consistent with Q reaching the target faster.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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

Plugging $S_0 = 4{,}500$, r = 0.05, and t = 1 into $S(t) = S_0 e^{rt}$ gives $4{,}500 \\times e^{0.05} = 4{,}500 \\times 1.0512711 = \\$4{,}730.72$, matching the statement exactly. Continuous compounding assumes interest is being added at every instant rather than at discrete intervals, and this exponential formula captures that limiting behavior directly.`,
      `**B) The interest earned during the first year is \\$230.72.**  (true)

Interest earned is simply the year-end balance minus the original deposit: 4,730.72 - 4,500.00 = \\$230.72, matching the statement exactly.`,
      `**C) If the bank compounded the same 5% nominal rate annually instead of continuously, the year-end balance would be \\$4,735.00.**  (false)

Annual compounding at 5% for one year gives 4,500 × 1.05 = \\$4,725.00, not \\$4,735.00. The stated figure overstates the true annual-compounding balance by \\$10.00, and in any case it would still fall short of the continuous-compounding balance of \\$4,730.72, since continuous compounding is the most frequent schedule possible and can never be beaten by a less-frequent one at the same nominal rate.`,
      `**D) The dollar difference between continuous compounding and annual compounding at the same nominal rate is \\$5.72.**  (true)

The correctly computed annual balance is \\$4,725.00, so the gap versus the continuous balance is 4,730.72 - 4,725.00 = \\$5.72, exactly as stated.`,
      `**E) The growth factor $e^{0.05}$ rounds to 1.0400.**  (false)

e raised to the power 0.05 equals approximately 1.0512711, which rounds to 1.0513, not 1.0400 - the figure of 1.0400 would instead correspond to a much smaller exponent and does not describe this 5% continuously-compounded growth factor at all.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 21,
    solution_overview: `Ms. Delgado, the owner of an artisan bakery, deposits \\$4,500 into a business savings account that compounds interest continuously at a nominal annual rate of 5%.

**Part 1: Setup.**

$S_0 = \\$4{,}500$

Nominal annual rate r = 5% = 0.05

Compounding: continuous

t = 1 year

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $S(1) = 4{,}500 \\times e^{0.05} = 4{,}500 \\times 1.0512711 = \\$4{,}730.72$.

**2.** Interest = 4,730.72 - 4,500.00 = \\$230.72.

**3.** Annual (m = 1) compounding at 5%: S = 4,500 × 1.05 = \\$4,725.00.

**4.** Difference = 4,730.72 - 4,725.00 = \\$5.72.

**5.** $e^{0.05}$ = 1.0512711, which rounds to 1.0513, not 1.0400.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

$S(6) = 3{,}200 \\times e^{0.48} = \\$5{,}171.44$, matching the statement exactly.`,
      `**B) Doubling the 3-year balance gives the correct 6-year balance.**  (false)

The 3-year balance of \\$4,068.00 is correctly computed, but doubling it to get \\$8,135.99 does not reproduce the true 6-year balance of \\$5,171.44. Continuous growth compounds multiplicatively rather than additively, so extending the holding period from 3 to 6 years squares the 3-year growth factor (since $e^{0.48}$ = $(e^{0.24})^{2}$) rather than simply doubling the balance, and the true 6-year figure is well below the doubled estimate.`,
      `**C) The total interest earned over the 6 years is approximately \\$2,000.00.**  (false)

The actual interest earned is 5,171.44 - 3,200.00 = \\$1,971.44, not \\$2,000.00 - the stated figure is a rounded-up approximation that does not match the precise calculation.`,
      `**D) The 12-year balance would be exactly double the 6-year balance.**  (false)

The true 12-year balance is $3{,}200 \\times e^{0.96} = \\$8{,}357.43$, which is noticeably less than double the 6-year balance of \\$5,171.44 (which would be \\$10,342.88). As in part (b), extending the time span multiplies growth factors rather than balances, so doubling the number of years does not double the account value.`,
      `**E) The 12-year balance is less than double the 6-year balance.**  (true)

The correctly computed 12-year balance is \\$8,357.43, and comparing this to double the 6-year balance (\\$10,342.88) confirms that \\$8,357.43 is indeed smaller, consistent with the multiplicative (rather than additive) nature of continuous exponential growth.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 22,
    solution_overview: `A specialty coffee roasting company invests \\$3,200 of retained earnings into a fund that compounds continuously at a nominal annual rate of 8%, and plans to leave the funds untouched for 6 years.

**Part 1: Setup.**

$S_0 = \\$3{,}200$

Nominal annual rate r = 8% = 0.08

Compounding: continuous

t = 6 years (3 and 12 years for parts b, d, e)

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $S(6) = 3{,}200 \\times e^{0.08 \\times 6} = 3{,}200 \\times e^{0.48} = 3{,}200 \\times 1.6161681 = \\$5{,}171.44$.

**2.** $S(3) = 3{,}200 \\times e^{0.08 \\times 3} = 3{,}200 \\times e^{0.24} = 3{,}200 \\times 1.2712492 = \\$4{,}067.998$ ≈ \\$4,068.00; doubling gives \\$8,135.99, which does not equal S(6).

**3.** Interest = 5,171.44 - 3,200.00 = \\$1,971.44, not \\$2,000.00.

**4.** $S(12) = 3{,}200 \\times e^{0.08 \\times 12} = 3{,}200 \\times e^{0.96} = 3{,}200 \\times 2.6116965 = \\$8{,}357.43$.

**5.** Double of S(6) = 2 × 5,171.44 = \\$10,342.88; since \\$8,357.43 < \\$10,342.88, the 12-year balance is indeed less than double the 6-year balance.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
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

$\\mathrm{EAR} = e^{0.09} - 1$ ≈ 9.42%, matching the statement exactly.`,
      `**B) On a \\$15,000 investment, the year-end balance is \\$16,412.61.**  (true)

$S(1) = 15{,}000 \\times e^{0.09} = \\$16{,}412.61$, matching the statement exactly.`,
      `**C) The EAR exceeds the nominal rate by more than 0.75 percentage points.**  (false)

The actual gap between the EAR and the nominal rate is only about 0.4174 percentage points (9.4174% - 9.00%), which is well under 0.75 percentage points, not more than it.`,
      `**D) If the nominal rate doubled to 18%, the resulting EAR would exceed double the original EAR.**  (true)

Doubling the nominal rate to 18% raises the EAR to approximately 19.72%, which is indeed higher than double the original EAR of 18.83%. This happens because $e^{r}$ grows faster than linearly in r, so doubling the exponent more than doubles the resulting effective rate above the nominal baseline.`,
      `**E) At the 18% nominal rate, the EAR exceeds 19.5%.**  (true)

$e^{0.18}$ - 1 ≈ 19.72%, which is above 19.5%, matching the statement exactly.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 23,
    solution_overview: `An asset manager quotes a bond fund's nominal annual rate of 9%, compounded continuously, and a client asks how the effective annual yield compares to the nominal rate, and how it would change if the nominal rate doubled to 18%.

**Part 1: Setup.**

Nominal annual rate r = 9% = 0.09 (and 18% for parts d, e)

Compounding: continuous

$P = \\$15{,}000$ (part b)

**Part 2: Formula.**

$EAR = e^{r} - 1$

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $\\mathrm{EAR} = e^{0.09} - 1 = 1.0941743 - 1 = 0.0941743$ ≈ 9.42%.

**2.** $S(1) = 15{,}000 \\times e^{0.09} = 15{,}000 \\times 1.0941743 = \\$16{,}412.61$.

**3.** Difference from nominal = 9.4174% - 9.00% = 0.4174 percentage points.

**4.** At 18%: $\\mathrm{EAR} = e^{0.18} - 1 = 1.1972174 - 1 = 0.1972174$ ≈ 19.72%.

**5.** Double of the original EAR = 2 × 9.4174% = 18.8349%; since 19.72% > 18.83%, the new EAR does exceed double the original.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=TRUE`,
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

$K_{\\mathrm{yearly}} = 1 + 0.10 = 1.1000$, matching the statement exactly.`,
      `**B) Under semi-annual compounding, K = 1.1025.**  (true)

$K_{\\mathrm{semi}} = (1.05)^{2} = 1.1025$, matching the statement exactly.`,
      `**C) Under continuous compounding, K ≈ 1.1052.**  (true)

$K_{\\mathrm{cont}} = e^{0.10} \\approx 1.1052$, matching the statement exactly.`,
      `**D) On the \\$75,000 balance, continuous compounding exceeds semi-annual compounding by \\$250.32.**  (false)

The correctly computed gap on \\$75,000 is 75,000 × (1.1051709 - 1.1025) = \\$200.32, not \\$250.32; the stated figure overstates the true difference by exactly \\$50.00.`,
      `**E) The gap between semi-annual and yearly compounding is larger than the gap between continuous and semi-annual compounding.**  (false)

The semi-annual-versus-yearly gap is 75,000 × (1.1025 - 1.1000) = \\$187.50, which is in fact smaller than the continuous-versus-semi-annual gap of \\$200.32, not larger. This is consistent with the general pattern that each successive increase in compounding frequency adds a further boost, and as frequency approaches its continuous limit those incremental boosts do not need to shrink monotonically in absolute dollar terms.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 24,
    solution_overview: `An equipment leasing firm structures a financing contract at a nominal annual rate of 10%, and wants to compare the growth factor K, the amount to which \\$1 grows over one year, under yearly, semi-annual, and continuous compounding, applied to a \\$75,000 balance.

**Part 1: Setup.**

Nominal annual rate r = i = 10% = 0.10

Compounding schedules: yearly (m = 1), semi-annual (m = 2), continuous

$P = \\$75{,}000$ (parts d, e)

**Part 2: Formula.**

$K_{\\mathrm{yearly}} = 1 + i$

$K_{\\mathrm{semi}} = (1+i/2)^{2}$

$K_{\\mathrm{continuous}} = e^{r}$

**Part 3: Solve.**

**1.** $K_{\\mathrm{yearly}} = 1 + 0.10 = 1.1000$.

**2.** $K_{\\mathrm{semi}} = (1.05)^{2} = 1.1025$.

**3.** $K_{\\mathrm{cont}} = e^{0.10} = 1.1051709$.

**4.** $75{,}000 \\times (K_{\\mathrm{cont}} - K_{\\mathrm{semi}}) = 75{,}000 \\times (1.1051709 - 1.1025) = 75{,}000 \\times 0.0026709 = \\$200.32$, not \\$250.32.

**5.** $75{,}000 \\times (K_{\\mathrm{semi}} - K_{\\mathrm{yearly}}) = 75{,}000 \\times 0.0025 = \\$187.50$; comparing 187.50 to 200.32, the semi-vs-yearly gap is actually the smaller of the two.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

$S(1) = 95{,}000 \\times e^{0.045} = \\$99{,}372.65$, not \\$98,500.00 - the stated figure is too low by roughly \\$872.65.`,
      `**B) Two years from now, the balance will be approximately \\$103,946.56.**  (true)

$S(2) = 95{,}000 \\times e^{0.09} = \\$103{,}946.56$, matching the statement exactly.`,
      `**C) The dollar increase in year 1 is larger than the dollar increase in year 2.**  (false)

The increase actually grows larger over time as the balance compounds on itself: the year-1 increase is \\$4,372.65, which is smaller than the year-2 increase of \\$4,573.91, not larger as claimed.`,
      `**D) Each year, the balance is multiplied by a different factor.**  (false)

This directly contradicts the property established in the text, $S(t + 1) = S(t)\\times e^{r}$: the multiplying factor $e^{r}$ depends only on the fixed nominal rate r, not on the current size of the balance, so the SAME factor (here, $e^{0.045}$ ≈ 1.0460) is applied every single year no matter how large the balance has already grown.`,
      `**E) If the nominal rate were doubled to 9%, the year-over-year growth factor would also exactly double.**  (false)

Doubling the rate does not double the growth factor, because $e^{2r}$ equals $(e^{r})^{2}$, not $2 \\times e^{r}$. Here $e^{0.09}$ ≈ 1.0942, which is nowhere near the claimed 2.0921 - that number instead comes from incorrectly doubling $e^{0.045}$ directly rather than doubling the exponent inside it.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 25,
    solution_overview: `A college endowment's growth sub-fund is currently valued at \\$95,000 and earns continuous compounding at a nominal annual rate of 4.5%. The board wants to project the balance forward using the property that the principal is multiplied by a fixed factor each year.

**Part 1: Setup.**

$S(0) = \\$95{,}000$

Nominal annual rate r = 4.5% = 0.045 (and 9% for part e)

Compounding: continuous

**Part 2: Formula.**

$S(t+1) = S(t)\\times e^{r}$

$S(t) = S_0 e^{rt}$

**Part 3: Solve.**

**1.** $S(1) = 95{,}000 \\times e^{0.045} = 95{,}000 \\times 1.0460279 = \\$99{,}372.65$, not \\$98,500.00.

**2.** $S(2) = 95{,}000 \\times e^{0.09} = 95{,}000 \\times 1.0941743 = \\$103{,}946.56$.

**3.** Increase(0→1) = 99,372.65 - 95,000.00 = \\$4,372.65.

**4.** Increase(1→2) = 103,946.56 - 99,372.65 = \\$4,573.91.

**5.** The textbook property $S(t + 1) = S(t)\\times e^{r}$ establishes that the SAME factor $e^{0.045}$ ≈ 1.0460 is applied every year, regardless of the current balance.

**6.** At 9%: $e^{0.09}$ = 1.0941743, which is far less than $2 \\times e^{0.045} = 2.0920557$.

**Answer.** A=FALSE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$v(4) = 60{,}000 \\times e^{-0.40} = \\$40{,}219.20$, matching the statement exactly.`,
      `**B) The fleet's value after 7 years is approximately \\$29,795.12.**  (true)

$v(7) = 60{,}000 \\times e^{-0.70} = \\$29{,}795.12$, matching the statement exactly.`,
      `**C) The 4-year value represents about 67.03% of the original \\$60,000 value.**  (true)

40,219.20 / 60,000 = 0.670320, which is approximately 67.03%, matching the statement exactly.`,
      `**D) If the depreciation rate were instead doubled to 20%, the 4-year value would fall below \\$25,000.**  (false)

Doubling the depreciation rate to 20% gives $v(4) = 60{,}000 \\times e^{-0.80}$ ≈ \\$26,959.74, which remains above \\$25,000 rather than falling below it.`,
      `**E) The fleet's dollar decline during the first year alone is larger than its dollar decline during the fourth year alone.**  (true)

Because continuous depreciation removes a fixed PROPORTION of the current value each year rather than a fixed dollar amount, the dollar decline is largest when the base value is largest (i.e., early on) and shrinks as the value itself shrinks. The first-year loss of about \\$5,709.75 is indeed larger than the fourth-year loss of about \\$4,229.89, confirming this pattern.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 26,
    solution_overview: `A courier company's van fleet has a combined initial value of \\$60,000 and depreciates continuously at an annual rate of 10% with δ = 0.10, so that its value after t years follows $v(t) = v_0 e^{-\\delta t}$.

**Part 1: Setup.**

$v_0 = \\$60{,}000$

Annual depreciation rate δ = 10% = 0.10 (and 20% for part d)

Compounding: continuous

**Part 2: Formula.**

Value: $v(t) = v_0 e^{-\\delta t}$

Fraction remaining equals $e^{-\\delta t}$

Time for a given fraction $f$: $t = -\\ln(f)/\\delta = \\ln(1/f)/\\delta$

**Part 3: Solve.**

**1.** $v(4) = 60{,}000 \\times e^{-0.10 \\times 4} = 60{,}000 \\times e^{-0.40} = 60{,}000 \\times 0.6703200 = \\$40{,}219.20$.

**2.** $v(7) = 60{,}000 \\times e^{-0.10 \\times 7} = 60{,}000 \\times e^{-0.70} = 60{,}000 \\times 0.4965853 = \\$29{,}795.12$.

**3.** Percentage of original = 40,219.20 / 60,000 = 0.670320 ≈ 67.03%.

**4.** At δ = 0.20: $v(4) = 60{,}000 \\times e^{-0.80} = 60{,}000 \\times 0.4493290 = \\$26{,}959.74$, which is above \\$25,000, not below it.

**5.** $v(1) = 60{,}000 \\times e^{-0.10} = \\$54{,}290.25$, so year-1 loss = 60,000 - 54,290.25 = \\$5,709.75.

**6.** $v(3) = 60{,}000 \\times e^{-0.30} = \\$44{,}449.09$, so year-4 loss = v(3) - v(4) = 44,449.09 - 40,219.20 = \\$4,229.89.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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

t = ln(2)/0.055 ≈ 12.60 years, matching the statement exactly.`,
      `**B) At exactly 12.60 years, the balance reaches approximately \\$36,000.00.**  (true)

By construction, $e^{rt}$ = 2 at the doubling time, so the balance is exactly \\$36,000.00, twice the original \\$18,000, matching the statement exactly.`,
      `**C) If the rate were instead 11%, the doubling time would also be approximately 12.60 years, unchanged.**  (false)

Doubling time is inversely proportional to the rate, not independent of it - doubling the rate to 11% HALVES the doubling time to approximately 6.30 years, it does not leave it unchanged at 12.60 years.`,
      `**D) After three full doubling periods, the balance would grow to 6 times the original principal.**  (false)

Each successive doubling period multiplies the balance by 2 again, so after three full doubling periods the balance has grown by a factor of 2 × 2 × 2 = 8, not 6. Eight times the original \\$18,000 principal is \\$144,000.00, not the \\$108,000.00 implied by a 6-times multiplier.`,
      `**E) A higher interest rate r gives a longer doubling time.**  (false)

Since t = ln(2)/r has r in the denominator, a LARGER r produces a SMALLER (shorter) doubling time, not a longer one - this is exactly why doubling the rate from 5.5% to 11% cut the doubling time in half rather than lengthening it.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 27,
    solution_overview: `A real estate investment trust places \\$18,000 into a reserve account earning continuous compounding at a nominal annual rate of 5.5%, and wants to know how long it will take the balance to double, and what happens after three such doubling periods.

**Part 1: Setup.**

$S_0 = \\$18{,}000$

Nominal annual rate r = 5.5% = 0.055 (and 11% for part c)

Compounding: continuous

Target: $S(t)$ = 2 $S_0$

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

Doubling time: $e^{rt} = 2 \\Rightarrow t = \\ln(2)/r$

**Part 3: Solve.**

**1.** ln(2) = 0.693147.

**2.** t = 0.693147 / 0.055 = 12.6027 years.

**3.** At 11%: t = 0.693147 / 0.11 = 6.3013 years, which is half of 12.6027, not unchanged.

**4.** $S(12.6027) = 18{,}000 \\times e^{0.055 \\times 12.6027} = 18{,}000 \\times e^{0.693147} = 18{,}000 \\times 2 = \\$36{,}000.00$.

**5.** After 3 doubling periods (37.8080 years), the growth factor is 2 × 2 × 2 = 8, so S = 18,000 × 8 = \\$144,000.00, not 6 × 18,000 = \\$108,000.00.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-28`,
    case_id: `MATH 11.28`,
    title: `Time for a Stamping Press to Lose Value Under Continuous Depreciation`,
    subsection: `11.2`,
    context: `A manufacturing plant's stamping press has an initial value of \\$120,000 and depreciates continuously at an annual rate of 18% with δ = 0.18. Management wants to know how long it will take for the press to lose 60% of its original value, retaining only 40%, and how that compares to a slower depreciation scenario and to losing a larger share of value.`,
    statements: [
      `Setting $v_0 \\times e^{-\\delta t}$ = 0.40 $v_0$ and solving gives t = ln(2.5)/δ.`,
      `The press will have lost 60% of its value after approximately 5.09 years.`,
      `At that point, the press's remaining value is approximately \\$48,000.00.`,
      `If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.`,
      `The time to lose 80% of the value is longer than the time to lose 60% of the value.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) Setting $v_0 \\times e^{-\\delta t}$ = 0.40 $v_0$ and solving gives t = ln(2.5)/δ.**  (true)

Dividing both sides by $v_0$ and taking natural logs of 1/0.40 = 2.5 gives δt = ln(2.5), so t = ln(2.5)/δ, matching the statement exactly.`,
      `**B) The press will have lost 60% of its value after approximately 5.09 years.**  (true)

t = ln(2.5)/0.18 ≈ 5.09 years, matching the statement exactly.`,
      `**C) At that point, the press's remaining value is approximately \\$48,000.00.**  (true)

Retaining 40% of the original \\$120,000 value gives 120,000 × 0.40 = \\$48,000.00, matching the statement exactly.`,
      `**D) If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.**  (true)

Since t = ln(2.5)/δ has δ in the denominator, halving δ from 18% to 9% doubles the required time, from 5.09 years to 10.18 years, exactly as stated.`,
      `**E) The time to lose 80% of the value is longer than the time to lose 60% of the value.**  (true)

Losing a larger share of the original value naturally takes longer under continuous proportional depreciation: reaching only 20% remaining (an 80% loss) requires t = ln(5)/0.18 ≈ 8.94 years, which is indeed longer than the 5.09 years needed to reach 40% remaining (a 60% loss).`,
    ],
    difficulty_level: `2/5`,
    sort_order: 28,
    solution_overview: `A manufacturing plant's stamping press has an initial value of \\$120,000 and depreciates continuously at an annual rate of 18% with δ = 0.18. Management wants to know how long it will take for the press to lose 60% of its original value, retaining only 40%, and how that compares to a slower depreciation scenario and to losing a larger share of value.

**Part 1: Setup.**

$v_0 = \\$120{,}000$

Annual depreciation rate δ = 18% = 0.18 (and 9% for part d)

Compounding: continuous

Target: v(t) = 0.40 $v_0$ (and 0.20 $v_0$ for part e)

**Part 2: Formula.**

Value: $v(t) = v_0 e^{-\\delta t}$

Fraction remaining equals $e^{-\\delta t}$

Time for a given fraction $f$: $t = -\\ln(f)/\\delta = \\ln(1/f)/\\delta$

**Part 3: Solve.**

**1.** 1/0.40 = 2.5, and ln(2.5) = 0.916291.

**2.** t = 0.916291 / 0.18 = 5.0905 years.

**3.** v(5.0905) = 120,000 × 0.40 = \\$48,000.00.

**4.** At δ = 0.09: t = 0.916291 / 0.09 = 10.1810 years, which is indeed double 5.0905 years, since halving δ doubles t.

**5.** For 80% loss (retain 20%): 1/0.20 = 5, ln(5) = 1.609438.

**6.** t = 1.609438 / 0.18 = 8.9413 years, which is longer than 5.0905 years.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

Gap = 25,761.36 - 25,750.00 = \\$11.36, matching the statement exactly.`,
      `**B) At a 15% nominal rate over 1 year, the gap between continuous and annual compounding on \\$25,000 is approximately \\$295.86.**  (true)

Gap = 29,045.86 - 28,750.00 = \\$295.86, matching the statement exactly.`,
      `**C) The 1-year gap at 15% is more than 30 times larger than the 1-year gap at 3%.**  (false)

The actual ratio is 295.86 / 11.36 ≈ 26.04, which is more than 15 but less than 30 - the claim of "more than 30 times" overstates the true multiple.`,
      `**D) Extending the 3% comparison from 1 year to 8 years increases the dollar gap to approximately \\$111.98.**  (true)

Over 8 years at 3%, the gap grows to 31,781.23 - 31,669.25 = \\$111.98, matching the statement exactly.`,
      `**E) Continuous compounding becomes less advantageous to the lender over longer holding periods.**  (false)

This directly contradicts both the calculation above and the textbook's stated rule that the difference between continuous and less-frequent compounding widens as the number of years increases: here the 8-year gap (\\$111.98) is nearly ten times the 1-year gap (\\$11.36), showing continuous compounding becomes MORE advantageous to the lender over longer holding periods, not less.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 29,
    solution_overview: `A regional bank's marketing team wants to demonstrate to clients how the dollar gap between continuous compounding and ordinary annual compounding changes with the interest rate and the holding period. It compares nominal rates of 3% and 15%, each applied for 1 year to a \\$25,000 deposit, and then extends the 3% case to an 8-year horizon.

**Part 1: Setup.**

$P = \\$25{,}000$

Nominal annual rates r = 3% and r = 15%

Compounding: continuous vs. annual (m = 1)

t = 1 year (and 8 years for part d, e)

**Part 2: Formula.**

$S_{\\mathrm{cont}} = P \\times e^{rt}$

$S_{\\mathrm{annual}} = P \\times (1+r)^{t}$

**Part 3: Solve.**

**1.** At 3%, 1 yr: $S_{\\mathrm{cont}} = 25{,}000 \\times e^{0.03} = \\$25{,}761.36$.

**2.** $S_{\\mathrm{annual}} = 25{,}000 \\times 1.03 = \\$25{,}750.00$.

**3.** Gap = \\$11.36.

**4.** At 15%, 1 yr: $S_{\\mathrm{cont}} = 25{,}000 \\times e^{0.15} = \\$29{,}045.86$.

**5.** $S_{\\mathrm{annual}} = 25{,}000 \\times 1.15 = \\$28{,}750.00$.

**6.** Gap = \\$295.86.

**7.** Ratio = 295.86 / 11.36 ≈ 26.04, which is less than 30.

**8.** At 3%, 8 yrs: $S_{\\mathrm{cont}} = 25{,}000 \\times e^{0.24} = \\$31{,}781.23$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

$S_A = 400{,}000 \\times e^{0.095} = \\$439{,}863.54$, matching the statement exactly.`,
      `**B) Fund B's monthly year-end value is approximately \\$439,750.00.**  (false)

The correctly computed monthly-compounded value is $400{,}000 \\times (1.0079167)^{12} = \\$439{,}699.03$, not \\$439,750.00 - the stated figure overstates the true monthly value by about \\$50.97.`,
      `**C) The maximum possible effective annual rate obtainable at a 9.5% nominal rate, under any compounding frequency, is approximately 9.50% - the same as the nominal rate itself.**  (false)

The continuous-compounding effective rate, $e^{0.095} - 1 \\approx 9.97\\%$, is the true ceiling on the effective annual rate at a 9.5% nominal rate, and it is noticeably higher than 9.50% - the nominal and effective rates are equal only in the special case of annual (once-per-year) compounding, not as a general ceiling.`,
      `**D) If Fund B switched to daily compounding, its year-end value would exceed Fund A's continuous-compounding value.**  (false)

Daily compounding gives Fund B a value of approximately \\$439,858.10, which remains below Fund A's continuous-compounding value of \\$439,863.54, not above it. Since continuous compounding is the mathematical limit of compounding frequency as the number of periods tends to infinity, no finite compounding frequency - however frequent - can ever exceed it at the same nominal rate.`,
      `**E) The dollar gap between Fund A and Fund B narrows when Fund B switches from monthly to daily compounding.**  (true)

The gap shrinks from \\$164.51 (monthly) to \\$5.44 (daily) as the discrete schedule compounds more often, illustrating exactly how $(1+r/n)^{n}$ approaches $e^{r}$ as n grows without ever reaching or surpassing it.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 30,
    solution_overview: `An investment advisory firm is evaluating a \\$400,000 allocation and comparing two funds that both quote a nominal annual rate of 9.5%: Fund A compounds continuously, while Fund B compounds monthly. The firm also wants to check whether switching Fund B to daily compounding could ever let it catch up to or overtake Fund A.

**Part 1: Setup.**

$P = \\$400{,}000$

Nominal annual rate r = i = 9.5% = 0.095

Fund A: continuous compounding

Fund B: m = 12 (monthly); part d, e also consider m = 365 (daily)

t = 1 year

**Part 2: Formula.**

$S_A = P \\times e^{rt}$

$S_B = P \\times (1+i/m)^{mt}$

$EAR_{\\mathrm{max}} = e^{r} - 1$

**Part 3: Solve.**

**1.** Fund A: $S_A = 400{,}000 \\times e^{0.095} = 400{,}000 \\times 1.0996589 = \\$439{,}863.54$.

**2.** Fund B (monthly): periodic rate = 0.095/12 = 0.0079167.

**3.** $S_B = 400{,}000 \\times (1.0079167)^{12} = 400{,}000 \\times 1.0992476 = \\$439{,}699.03$, not \\$439,750.00.

**4.** $EAR_{\\mathrm{max}} = e^{0.095} - 1 \\approx 9.97\\%$, which exceeds the 9.50% nominal rate; it is not equal to it.

**5.** Fund B (daily): $S_{\\mathrm{daily}} = 400{,}000 \\times (1 + 0.095/365)^{365} = 400{,}000 \\times 1.0996453 = \\$439{,}858.10$, which is still below $S_A = \\$439{,}863.54$.

**6.** Gap (continuous vs.

**7.** monthly) = 439,863.54 - 439,699.03 = \\$164.51.

**8.** Gap (continuous vs.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
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
      `If the implied rate had instead been exactly 6.00%, the 3-year value would have been approximately \\$33,522.09, which is higher than the actual observed \\$34,200.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The implied nominal continuously-compounded rate is approximately 6.67%.**  (true)

Dividing both sides of $S(3) = S_0 e^{3r}$ by $S_0$ and taking natural logs gives $3r = \\ln(34{,}200/28{,}000)$, so $r = \\ln(1.221429)/3 \\approx 6.67\\%$, matching the statement exactly.`,
      `**B) Using this implied rate, the projected value 5 years from the start, 2 years beyond the observed data, is approximately \\$39,078.52.**  (true)

Applying the implied rate for a further 2 years (5 years total from the start) gives $S(5) = 28{,}000 \\times e^{0.066674 \\times 5}$ ≈ \\$39,078.52, matching the statement exactly.`,
      `**C) A naive straight-line projection - extending the average dollar increase observed over the first 3 years for 2 more years - gives the same result as the correct exponential projection.**  (false)

The naive straight-line projection assumes the DOLLAR amount added each year stays constant, giving \\$38,333.33, whereas the correct exponential projection assumes the PERCENTAGE growth rate stays constant, giving the higher figure of \\$39,078.52. Because exponential growth compounds on an ever-larger base, the two methods diverge once projected beyond the observed data, and they do not match.`,
      `**D) At the implied rate, the fund's value would double from its original \\$28,000 in approximately 12.40 years.**  (false)

t = ln(2)/0.066674 ≈ 10.40 years, not 12.40 years - the stated figure overstates the true doubling time by exactly 2 years.`,
      `**E) If the implied rate had instead been exactly 6.00%, the 3-year value would have been approximately \\$33,522.09, which is higher than the actual observed \\$34,200.00.**  (false)

A rate of 6.00% instead of 6.67% would have produced a SMALLER 3-year value, approximately \\$33,522.09, which is in fact lower than the actual observed \\$34,200.00, not higher - a lower assumed growth rate can never explain a larger observed increase over the same period.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 31,
    solution_overview: `A boutique winery's grape futures fund grew continuously, at an unstated nominal annual rate, from \\$28,000 to \\$34,200 over the past 3 years. The fund manager wants to determine the implied rate and then project the fund's value 2 further years into the future, for 5 years from the start.

**Part 1: Setup.**

$S_0 = \\$28{,}000$

$S(3) = \\$34{,}200$ (observed)

Compounding: continuous

t = 3 years (observed); project to t = 5 years

**Part 2: Formula.**

$S(t) = S_0 e^{rt} \\Rightarrow r = \\ln(S(t)/S_0)/t$

Doubling time: $t = \\ln(2)/r$

**Part 3: Solve.**

**1.** r = ln(34,200/28,000)/3 = ln(1.221429)/3 = 0.200034/3 = 0.066674 ≈ 6.67%.

**2.** $S(5) = 28{,}000 \\times e^{0.066674 \\times 5} = 28{,}000 \\times e^{0.333368} = 28{,}000 \\times 1.395661 = \\$39{,}078.52$.

**3.** Average dollar increase over 3 years = (34,200 - 28,000)/3 = \\$2,066.67/year.

**4.** Naive linear projection: 34,200 + 2 × 2,066.67 = \\$38,333.33, which does not equal \\$39,078.52.

**5.** Doubling time = ln(2)/0.066674 = 0.693147/0.066674 ≈ 10.3961 years.

**6.** At r = 6.00%: $S(3) = 28{,}000 \\times e^{0.18} = 28{,}000 \\times 1.197217 = \\$33{,}522.09$, which is LOWER than the actual observed \\$34,200.00, not higher.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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
      `Bank Z's 2-year value is approximately \\$68,932.91, making it the highest of the three offers.`,
      `Despite compounding continuously, Bank X's value is actually the lowest of the three offers.`,
      `If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) Bank X's 2-year value is approximately \\$68,740.91.**  (true)

$S_X = 60{,}000 \\times e^{0.136} = \\$68{,}740.91$, matching the statement exactly.`,
      `**B) Bank Y's 2-year value is approximately \\$68,851.32.**  (true)

$S_Y = 60{,}000 \\times (1.00575)^{24} = \\$68{,}851.32$, matching the statement exactly.`,
      `**C) Bank Z's 2-year value is approximately \\$68,932.91, making it the highest of the three offers.**  (true)

$S_Z = 60{,}000 \\times (1.0175)^{8} = \\$68{,}932.91$, and comparing all three results confirms it is indeed the largest of the three.`,
      `**D) Despite compounding continuously, Bank X's value is actually the lowest of the three offers.**  (true)

The rule that continuous compounding is the most profitable schedule for the lender applies only when comparing different compounding FREQUENCIES at the SAME nominal rate. Here the three banks quote three DIFFERENT nominal rates, and Bank Z's higher quoted rate (7.0%) more than compensates for its less-frequent quarterly compounding, so Bank X's continuously-compounded value at the lowest rate (6.8%) does indeed end up the SMALLEST of the three, confirming the statement exactly.`,
      `**E) If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.**  (true)

Once Bank X's nominal rate is raised to match Bank Z's 7.0%, the ceiling result does apply (same nominal rate, comparing continuous to quarterly), so continuous compounding at 7.0% (\\$69,016.44) does exceed quarterly compounding at the same 7.0% (\\$68,932.91).`,
    ],
    difficulty_level: `3/5`,
    sort_order: 32,
    solution_overview: `A corporate treasurer is placing \\$60,000 for 2 years and compares three offers: Bank X compounds continuously at a nominal annual rate of 6.8%; Bank Y compounds monthly at a nominal annual rate of 6.9%; Bank Z compounds quarterly at a nominal annual rate of 7.0%.

**Part 1: Setup.**

$P = \\$60{,}000$

Bank X: r = 6.8% = 0.068, continuous

Bank Y: i = 6.9% = 0.069, m = 12 (monthly)

Bank Z: i = 7.0% = 0.070, m = 4 (quarterly)

t = 2 years

**Part 2: Formula.**

$S_X = P \\times e^{rt}$

$S_Y = P(1+i/12)^{12t}$

$S_Z = P(1+i/4)^{4t}$

**Part 3: Solve.**

**1.** $S_X = 60{,}000 \\times e^{0.068 \\times 2} = 60{,}000 \\times e^{0.136} = 60{,}000 \\times 1.145682 = \\$68{,}740.91$.

**2.** $S_Y = 60{,}000 \\times (1 + 0.069/12)^{24} = 60{,}000 \\times (1.00575)^{24} = 60{,}000 \\times 1.147522 = \\$68{,}851.32$.

**3.** $S_Z = 60{,}000 \\times (1 + 0.070/4)^{8} = 60{,}000 \\times (1.0175)^{8} = 60{,}000 \\times 1.148882 = \\$68{,}932.91$.

**4.** Ordering the three results: \\$68,740.91 (X) < \\$68,851.32 (Y) < \\$68,932.91 (Z), so Bank X is actually the LOWEST, not the highest.

**5.** If Bank X's rate were 7.0% instead of 6.8%: $S_X' = 60{,}000 \\times e^{0.070 \\times 2} = 60{,}000 \\times e^{0.14} = 60{,}000 \\times 1.150274 = \\$69{,}016.44$, which does exceed Bank Z's \\$68,932.91.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

The continuous fee drag must be SUBTRACTED from the gross rate, not added: 0.09 - 0.02 = 0.07, giving a net rate of 7% per year, not 11%. Adding the fee to the gross rate would describe a fee that BOOSTS returns, which contradicts the very idea of a management fee reducing the investor's growth.`,
      `**B) After 6 years, the net asset value is approximately \\$3,100,000.00.**  (false)

The correctly computed net value is $S(6) = 2{,}000{,}000 \\times e^{0.42} = \\$3{,}043{,}923.11$, not \\$3,100,000.00 - the stated figure overstates the true value by about \\$56,076.89.`,
      `**C) At this net rate, the fund's value would double in approximately 7.00 years.**  (false)

The correct doubling time at the 7% net rate is ln(2)/0.07 ≈ 9.90 years, not 7.00 years; the stated figure understates the true doubling time by nearly 3 years.`,
      `**D) If the management fee instead rose to 3.5%, the 6-year net value would be approximately \\$2,781,936.26, and the doubling time would shorten to approximately 12.60 years.**  (false)

The 6-year value of \\$2,781,936.26 at the higher 3.5% fee is correctly computed, but the doubling time at the resulting lower 5.5% net rate is ln(2)/0.055 ≈ 12.60 years, which is LONGER than the original 9.90 years, not shorter - a smaller net growth rate always takes MORE time to double an investment, never less.`,
      `**E) A higher management fee always reduces both the net growth rate and the fund's cumulative value at any future date, compared to a lower fee, all else equal.**  (true)

Since the net rate is gross rate minus fee, a higher fee mechanically produces a lower net rate, and a lower net continuous rate produces a smaller value at every future date t > 0 (because $e^{rt}$ is strictly increasing in r for fixed t > 0), so this general statement holds for any pair of fee levels compared under otherwise identical conditions.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `A hedge fund's gross asset value of \\$2,000,000 grows continuously at a nominal annual rate of 9%, but the fund also deducts a continuous annual management fee of 2%, which acts as a constant drag on the growth rate.

**Part 1: Setup.**

$S_0 = \\$2{,}000{,}000$

Gross rate = 9% = 0.09; fee = 2% = 0.02 (and 3.5% = 0.035 for part d)

Compounding: continuous

t = 6 years

**Part 2: Formula.**

Net rate: $r_{\\mathrm{net}} = r_{\\mathrm{gross}} - r_{\\mathrm{fee}}$

$S(t) = S_0 e^{r_{\\mathrm{net}} t}$

Doubling time: $t = \\ln(2)/r_{\\mathrm{net}}$

**Part 3: Solve.**

**1.** $r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07$ = 7%.

**2.** $S(6) = 2{,}000{,}000 \\times e^{0.07 \\times 6} = 2{,}000{,}000 \\times e^{0.42} = 2{,}000{,}000 \\times 1.521962 = \\$3{,}043{,}923.11$.

**3.** Doubling time = ln(2)/0.07 = 0.693147/0.07 ≈ 9.9021 years.

**4.** At fee = 3.5%: $r_{\\mathrm{net}}' = 0.09 - 0.035 = 0.055$.

**5.** $S(6) = 2{,}000{,}000 \\times e^{0.33} = 2{,}000{,}000 \\times 1.390968 = \\$2{,}781{,}936.26$.

**6.** Doubling time = ln(2)/0.055 ≈ 12.6027 years, which is LONGER than 9.9021 years, not shorter.

**7.** Comparing: a lower net rate (5.5% vs.

**8.** 7%) always produces both a smaller 6-year value and a longer doubling time.

**Answer.** A=FALSE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-34`,
    case_id: `MATH 11.34`,
    title: `Crossover Point Between a Growing Equity Stake and Shrinking Factory Equipment`,
    subsection: `11.2`,
    context: `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.`,
    statements: [
      `Setting $A_0 e^{r_A t}$ = $B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$.`,
      `The crossover occurs at approximately t ≈ 10.06 years, at which point both assets are worth approximately \\$74,767.44.`,
      `At exactly t = 10 years, Asset A is already worth more than Asset B.`,
      `Asset A can never actually overtake Asset B in value, no matter how long both trends continue.`,
      `For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Setting $A_0 e^{r_A t}$ = $B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$.**  (true)

Dividing both sides by $A_0 e^{-\\delta_B t}$ and taking natural logs of the resulting equation $B_0/A_0 = e^{(r_A + \\delta_B)t}$ gives exactly $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$, matching the statement exactly.`,
      `**B) The crossover occurs at approximately t ≈ 10.06 years, at which point both assets are worth approximately \\$74,767.44.**  (true)

Dividing both sides by $A_0 e^{-\\delta_B t}$ and taking natural logs of the resulting equation $B_0/A_0 = e^{(r_A + \\delta_B)t}$ gives exactly $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$, matching the statement exactly.`,
      `**C) At exactly t = 10 years, Asset A is already worth more than Asset B.**  (false)

At t = 10 years, Asset A is worth approximately \\$74,591.23 while Asset B is still worth approximately \\$75,298.55 - Asset B is still ahead at this point, not Asset A, which is exactly why the crossover has not yet occurred by year 10 and instead happens slightly later, at about 10.06 years.`,
      `**D) Asset A can never actually overtake Asset B in value, no matter how long both trends continue.**  (false)

Although Asset B starts out five times larger, Asset A's slower but steady growth eventually overtakes Asset B's faster proportional shrinkage, because the RATIO A(t)/B(t) grows exponentially without bound as t increases (at combined rate $r_A$ + $\\delta_B$ = 16% per year). No matter how large the initial gap, a strictly growing ratio must eventually cross 1, which is exactly what the calculated crossover time of about 10.06 years confirms.`,
      `**E) For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.**  (true)

Once A(t) exceeds B(t) at the crossover, A continues to grow while B continues to shrink, so the gap between them (A(t) - B(t)) only widens further for all t beyond the crossover point, meaning Asset A remains ahead indefinitely thereafter.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.

**Part 1: Setup.**

$A_0 = \\$50{,}000$, $r_A$ = 4% = 0.04

$B_0 = \\$250{,}000$, $\\delta_B$ = 12% = 0.12

Compounding: continuous

**Part 2: Formula.**

$A(t) = A_0 e^{r_A t}$

$B(t) = B_0 e^{-\\delta_B t}$

Crossover: $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$

**Part 3: Solve.**

**1.** t = ln(250,000/50,000)/(0.04 + 0.12) = ln(5)/0.16 = 1.609438/0.16 = 10.0590 years.

**2.** $A(10.0590) = 50{,}000 \\times e^{0.04 \\times 10.0590} = \\$74{,}767.44$.

**3.** $B(10.0590) = 250{,}000 \\times e^{-0.12 \\times 10.0590} = \\$74{,}767.44$ (equal, as required at crossover).

**4.** $A(10) = 50{,}000 \\times e^{0.40} = 50{,}000 \\times 1.491825 = \\$74{,}591.23$.

**5.** $B(10) = 250{,}000 \\times e^{-1.20} = 250{,}000 \\times 0.301194 = \\$75{,}298.55$.

**6.** At t = 10, $A(10) = \\$74{,}591.23 < B(10) = \\$75{,}298.55$, so A has NOT yet overtaken B at that point - consistent with the crossover occurring slightly later, at 10.06 years.

**7.** Since $A_0 < B_0$, A(t) < B(t) at t = 0, but because $A(t)/B(t) = (A_0/B_0)\\times e^{(r_A + \\delta_B)t}$ grows without bound as t increases (a strictly increasing exponential ratio), the ratio must eventually exceed 1, guaranteeing a crossover exists.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

40,000 × 1.07 = \\$42,800.00, matching the statement exactly.`,
      `**B) The quarterly-compounding value is approximately \\$42,874.36, and the monthly-compounding value is approximately \\$42,891.60.**  (true)

Quarterly gives \\$42,874.36 and monthly gives \\$42,891.60, and both do sit strictly between the annual value of \\$42,800.00 and the continuous value of \\$42,900.33, matching the statement exactly.`,
      `**C) The four values, from smallest to largest, are ordered annual < quarterly < monthly < continuous.**  (true)

Listing the four results - \\$42,800.00, \\$42,874.36, \\$42,891.60, \\$42,900.33 - confirms they are strictly increasing in exactly this order as compounding frequency rises from annual through continuous, which is the textbook's claim being verified here.`,
      `**D) The dollar gap between monthly and quarterly compounding is smaller than the dollar gap between continuous and monthly compounding.**  (false)

The monthly-versus-quarterly gap is \\$17.24, which is actually LARGER than the continuous-versus-monthly gap of \\$8.72, not smaller. As compounding frequency keeps rising toward its continuous limit, each further increase in frequency contributes a progressively smaller additional dollar amount, since $(1+r/n)^{n}$ is converging toward $e^{r}$ and the increments shrink as n grows large.`,
      `**E) No compounding schedule, however frequent, can ever produce a 1-year value exceeding the continuous-compounding value of \\$42,900.33 at this same 7% nominal rate.**  (true)

Since $(1+r/n)^{n}$ → $e^{r}$ as n → ∞, and the sequence is strictly increasing in n, the continuous-compounding value $e^{r}$ represents the supremum (least upper bound) that no finite-frequency schedule at the same nominal rate can ever reach or exceed.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `A municipal finance office is comparing four compounding schedules, all at the same nominal annual rate of 7%, applied to a \\$40,000 reserve fund for exactly 1 year: annual, quarterly, monthly, and continuous. The office wants to confirm the textbook's claim that increasing compounding frequency strictly increases the year-end value, up to the continuous-compounding ceiling.

**Part 1: Setup.**

$P = \\$40{,}000$

Nominal annual rate i = r = 7% = 0.07

Schedules: annual (m = 1), quarterly (m = 4), monthly (m = 12), continuous

t = 1 year

**Part 2: Formula.**

$S_m = P(1+i/m)^{m}$ for finite $m$

$S_{\\mathrm{cont}} = P e^{r}$

**Part 3: Solve.**

**1.** Annual: $S = 40{,}000 \\times 1.07 = \\$42{,}800.00$.

**2.** Quarterly: $S = 40{,}000 \\times (1.0175)^{4} = 40{,}000 \\times 1.0718590 = \\$42{,}874.36$.

**3.** Monthly: $S = 40{,}000 \\times (1.0058333)^{12} = 40{,}000 \\times 1.0722901 = \\$42{,}891.60$.

**4.** Continuous: $S = 40{,}000 \\times e^{0.07} = 40{,}000 \\times 1.0725082 = \\$42{,}900.33$.

**5.** Gap(monthly, quarterly) = 42,891.60 - 42,874.36 = \\$17.24.

**6.** Gap(continuous, monthly) = 42,900.33 - 42,891.60 = \\$8.72; the second gap is SMALLER, not larger.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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

$S_0 = 100{,}000 \\times e^{-0.36} = \\$69{,}767.63$, matching the statement exactly.`,
      `**B) Option 2 requires an upfront deposit of approximately \\$61,878.34.**  (true)

$S_0 = 100{,}000 \\times e^{-0.48} = \\$61{,}878.34$, matching the statement exactly.`,
      `**C) Option 2 requires a larger upfront deposit than Option 1 to reach the same \\$100,000 target in 8 years.**  (false)

This has the direction backwards: a higher growth rate means each dollar deposited today grows to a larger sum by year 8, so REACHING the same \\$100,000 target actually requires depositing LESS upfront under the higher, 6.0% rate (\\$61,878.34) than under the lower, 4.5% rate (\\$69,767.63), not more.`,
      `**D) The difference in required upfront deposits between the two options is approximately \\$9,000.00, with Option 2 requiring the larger amount.**  (false)

The correct difference is 69,767.63 - 61,878.34 = \\$7,889.29, not \\$9,000.00, and it is Option 1 (the LOWER rate) that requires the larger upfront amount, not Option 2 - the statement gets both the figure and the direction wrong.`,
      `**E) If the parent instead had only 4 years to reach the same \\$100,000 target under Option 1's 4.5% rate, the required upfront deposit would be smaller than the 8-year requirement.**  (false)

With less time available to grow (4 years instead of 8), MORE money must be set aside today to still reach the same \\$100,000 target, not less. The correct 4-year requirement is \\$83,527.02, which is larger than the 8-year requirement of \\$69,767.63, since a shorter compounding horizon leaves less room for exponential growth to do the work.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `A parent wants to guarantee exactly \\$100,000 available in 8 years for a child's college tuition, and is choosing between two continuously-compounded investment vehicles: Option 1 offers a nominal annual rate of 4.5%, while Option 2 offers a nominal annual rate of 6.0%. The parent wants to know how much must be deposited today under each option.

**Part 1: Setup.**

Target $S(t) = \\$100{,}000$

Option 1: r = 4.5% = 0.045, t = 8 years (and t = 4 years for part e)

Option 2: r = 6.0% = 0.06, t = 8 years

Compounding: continuous

**Part 2: Formula.**

$S(t) = S_0 e^{rt} \\Rightarrow S_0 = S(t)/e^{rt} = S(t)\\times e^{-rt}$

**Part 3: Solve.**

**1.** Option 1: $S_0 = 100{,}000 \\times e^{-0.045 \\times 8} = 100{,}000 \\times e^{-0.36} = 100{,}000 \\times 0.697676 = \\$69{,}767.63$.

**2.** Option 2: $S_0 = 100{,}000 \\times e^{-0.06 \\times 8} = 100{,}000 \\times e^{-0.48} = 100{,}000 \\times 0.618783 = \\$61{,}878.34$.

**3.** Difference = 69,767.63 - 61,878.34 = \\$7,889.29, with Option 1 requiring more upfront.

**4.** Option 1 over 4 years: $S_0 = 100{,}000 \\times e^{-0.045 \\times 4} = 100{,}000 \\times e^{-0.18} = 100{,}000 \\times 0.835270 = \\$83{,}527.02$.

**5.** Comparing: \\$83,527.02 (4-year requirement) is LARGER than \\$69,767.63 (8-year requirement), not smaller.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$S(4) = 1{,}800{,}000 \\times e^{0.40} = \\$2{,}685{,}284.46$, matching the statement exactly.`,
      `**B) Revenue at the end of year 7 is approximately \\$3,027,649.77.**  (true)

Applying the second phase's factor to the year-4 balance gives $S(7) = 2{,}685{,}284.46 \\times e^{0.12} = \\$3{,}027{,}649.77$, matching the statement exactly.`,
      `**C) The single constant continuous rate that would have produced the same 7-year outcome starting from \\$1,800,000 is approximately 7.43%.**  (true)

Because $S(7) = S_0 \\times e^{r_1 t_1+r_2 t_2}$, the single constant rate reproducing the same 7-year result solves $r_{\\mathrm{eff}} = (r_1 t_1+r_2 t_2)/7 = 0.52/7 \\approx 7.43\\%$, matching the statement exactly.`,
      `**D) The effective 7-year rate is higher than the plain, unweighted average of the two phase rates.**  (true)

The correct effective rate is the TIME-WEIGHTED average of the two phase rates, weighted by how many years each phase lasted: (10% × 4 + 4% × 3)/7 = 7.43%, which is indeed higher than the plain, unweighted average of (10% + 4%)/2 = 7.00%. This makes sense because the faster-growing 10% phase lasted longer (4 years vs. 3 years) and so should count for more, pulling the true effective rate above the simple average.`,
      `**E) If the two phases had instead occurred in the opposite order - 3 years at 4% followed by 4 years at 10% - the year-7 revenue would have come out exactly the same.**  (true)

Since $S_0 \\times e^{r_1 t_1} e^{r_2 t_2} = S_0 \\times e^{r_1 t_1+r_2 t_2}$, and ordinary multiplication is commutative, the combined exponent $r_1 t_1+r_2 t_2 = 0.52$ is exactly the same regardless of which phase happens first. Reversing the order of the two phases therefore produces the identical year-7 revenue of \\$3,027,649.77, exactly as stated.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 37,
    solution_overview: `A logistics company's revenue base of \\$1,800,000 grows continuously at a nominal annual rate of 10% for the first 4 years of rapid expansion, then slows to a continuous nominal rate of 4% for the following 3 years of maturity, for 7 years total.

**Part 1: Setup.**

$S_0 = \\$1{,}800{,}000$

Phase 1: $r_1$ = 10% = 0.10, $t_1$ = 4 years

Phase 2: $r_2$ = 4% = 0.04, $t_2$ = 3 years

**Part 2: Formula.**

$S(t_1) = S_0 \\times e^{r_1 t_1}$

$S(t_1+t_2) = S(t_1) \\times e^{r_2 t_2} = S_0 \\times e^{r_1 t_1+r_2 t_2}$

Effective rate: $r_{\\mathrm{eff}} = (r_1 t_1 + r_2 t_2)/(t_1+t_2)$

**Part 3: Solve.**

**1.** $S(4) = 1{,}800{,}000 \\times e^{0.10 \\times 4} = 1{,}800{,}000 \\times e^{0.40} = 1{,}800{,}000 \\times 1.491825 = \\$2{,}685{,}284.46$.

**2.** $S(7) = S(4) \\times e^{0.04 \\times 3} = 2{,}685{,}284.46 \\times e^{0.12} = 2{,}685{,}284.46 \\times 1.127497 = \\$3{,}027{,}649.77$.

**3.** Combined exponent $= r_1 t_1 + r_2 t_2 = (0.10 \\times 4) + (0.04 \\times 3) = 0.40 + 0.12 = 0.52$.

**4.** $r_{\\mathrm{eff}} = 0.52/7 = 0.074286 \\approx 7.43\\%$ (the TIME-WEIGHTED average, not the plain average).

**5.** Plain (unweighted) average = (0.10 + 0.04)/2 = 0.07 = 7.00%, which does not equal 7.43%.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
  },
  {
    id: `math-11-38`,
    case_id: `MATH 11.38`,
    title: `Reverse-Engineering a Crane's Implied Depreciation Rate for a Construction Equipment Reseller`,
    subsection: `11.2`,
    context: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.`,
    statements: [
      `Solving $v_0 \\times e^{-\\delta t}$ = v(t) for δ gives δ = ln(v(t)/$v_0$)/t.`,
      `The implied depreciation rate for the first crane is approximately 16.28% per year.`,
      `A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.`,
      `The first crane retains more of its value after 6 years than the second crane.`,
      `If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) Solving $v_0 \\times e^{-\\delta t}$ = v(t) for δ gives δ = ln(v(t)/$v_0$)/t.**  (false)

This has the ratio inverted: dividing both sides by $v_0$ and taking natural logs of $v_0$/v(t) - not v(t)/$v_0$ - gives δt = ln($v_0$/v(t)), so the correct formula is δ = ln($v_0$/v(t))/t. Using ln(v(t)/$v_0$)/t instead would produce a NEGATIVE number here, since v(t) < $v_0$, which cannot be a valid depreciation rate.`,
      `**B) The implied depreciation rate for the first crane is approximately 16.28% per year.**  (true)

δ = ln(85,000/32,000)/6 ≈ 16.28%, matching the statement exactly.`,
      `**C) A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.**  (false)

The correctly computed value is $v(6) = 85{,}000 \\times e^{-0.90} = \\$34{,}558.42$, not \\$36,000.00 - the stated figure overstates the true value by about \\$1,441.58.`,
      `**D) The first crane retains more of its value after 6 years than the second crane.**  (false)

This has the logic backwards: a HIGHER depreciation rate means the asset loses value FASTER, not slower, so the first crane (implied rate 16.28%) actually retains LESS value after 6 years (\\$32,000.00) than the second crane at the lower 15% rate (\\$34,558.42), not more.`,
      `**E) If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.**  (false)

A higher target resale value of \\$40,000 (instead of \\$32,000) means LESS value was lost over the same 6 years, which corresponds to a SMALLER implied depreciation rate, not a larger one: δ = ln(85,000/40,000)/6 ≈ 12.56%, which is LOWER than the original 16.28%, contradicting the statement.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 38,
    solution_overview: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.

**Part 1: Setup.**

$v_0 = \\$85{,}000$

$v(6) = \\$32{,}000$ (first crane, implied δ); known δ = 15% (second crane); v(6) target = \\$40,000 for part e

Compounding: continuous

t = 6 years

**Part 2: Formula.**

Value: $v(t) = v_0 e^{-\\delta t}$

Fraction remaining equals $e^{-\\delta t}$

Time for a given fraction $f$: $t = -\\ln(f)/\\delta = \\ln(1/f)/\\delta$

**Part 3: Solve.**

**1.** δ = ln(85,000/32,000)/6 = ln(2.65625)/6 = 0.976915/6 = 0.162819 ≈ 16.28%.

**2.** Second crane: $v(6) = 85{,}000 \\times e^{-0.15 \\times 6} = 85{,}000 \\times e^{-0.90} = 85{,}000 \\times 0.406570 = \\$34{,}558.42$.

**3.** Comparing final values: first crane retains \\$32,000.00, second crane retains \\$34,558.42 - the crane with the LOWER rate (15%) retains MORE value, not the one with the higher implied rate (16.28%).

**4.** For a \\$40,000 target: δ = ln(85,000/40,000)/6 = ln(2.125)/6 = 0.753772/6 = 0.125629 ≈ 12.56%, which is lower than 16.28%.

**Answer.** A=FALSE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

t = ln(2)/0.065 ≈ 10.66 years, matching the statement exactly.`,
      `**B) The tripling time at 6.5% is approximately 16.90 years.**  (true)

t = ln(3)/0.065 ≈ 16.90 years, matching the statement exactly.`,
      `**C) The quadrupling time at 6.5% is approximately 21.33 years, and this is exactly equal to twice the doubling time.**  (true)

t = ln(4)/0.065 ≈ 21.33 years, and because $4 = 2^{2}$ means $\\ln(4) = 2\\ln(2)$, the quadrupling time is exactly twice the doubling time - reaching four times the principal is mathematically the same as doubling the investment twice in a row.`,
      `**D) At the quadrupling time, the fund's value is exactly \\$48,000.00.**  (true)

Four times the original \\$12,000 principal is 12,000 × 4 = \\$48,000.00, matching the statement exactly.`,
      `**E) The tripling time must be exactly 1.5 times the doubling time.**  (false)

Times to reach a given multiple scale with the NATURAL LOGARITHM of that multiple, not with the multiple itself, since t = ln(M)/r. The ratio of the tripling time to the doubling time is therefore ln(3)/ln(2) ≈ 1.5850, not the naive ratio of the multipliers themselves (3/2 = 1.5) - these two ratios are close but not equal, and treating them as the same is a common but incorrect shortcut.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 39,
    solution_overview: `A socially-responsible impact investing fund places \\$12,000 into a continuously-compounded account at a nominal annual rate of 6.5%, and the fund's trustees want to understand exactly how the times needed to double, triple, and quadruple the initial investment relate to one another.

**Part 1: Setup.**

$S_0 = \\$12{,}000$

Nominal annual rate r = 6.5% = 0.065

Compounding: continuous

Targets: $S(t)$ = 2 $S_0$, 3 $S_0$, 4 $S_0$

**Part 2: Formula.**

$S(t) = S_0 e^{rt}$

Time to reach multiple $M$: $t = \\ln(M)/r$

**Part 3: Solve.**

**1.** Doubling: t = ln(2)/0.065 = 0.693147/0.065 ≈ 10.6638 years.

**2.** Tripling: t = ln(3)/0.065 = 1.098612/0.065 ≈ 16.9017 years.

**3.** Quadrupling: t = ln(4)/0.065 = 1.386294/0.065 ≈ 21.3276 years.

**4.** 2 × (doubling time) = 2 × 10.6638 = 21.3276 years, which exactly equals the quadrupling time, since $\\ln(4) = \\ln(2^{2}) = 2\\ln(2)$.

**5.** Ratio of tripling time to doubling time = ln(3)/ln(2) ≈ 1.5850, not 1.5; value at quadrupling time = 12,000 × 4 = \\$48,000.00.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE`,
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
      `The combined portfolio value after 5 years, adding all three assets together, is approximately \\$477,742.90, which is less than the sum of the three original principals.`,
      `If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Asset A's value after 5 years is approximately \\$202,478.82.**  (true)

$A(5) = 150{,}000 \\times e^{0.30} = \\$202{,}478.82$, matching the statement exactly.`,
      `**B) Asset B's value after 5 years is approximately \\$140,278.19.**  (true)

$B(5) = 220{,}000 \\times e^{-0.45} = \\$140{,}278.19$, matching the statement exactly.`,
      `**C) Asset C's value after 5 years is approximately \\$130,000.00.**  (false)

Chaining the two growth phases correctly gives $C(3) = \\$127{,}124.92$ and then $C(5) = C(3) \\times e^{0.06} = \\$134{,}985.88$, not \\$130,000.00 - the stated figure understates the true value by about \\$4,985.88.`,
      `**D) The combined portfolio value after 5 years, adding all three assets together, is approximately \\$477,742.90, which is less than the sum of the three original principals.**  (false)

Adding the three 5-year values gives 202,478.82 + 140,278.19 + 134,985.88 = \\$477,742.89, which is actually MORE than the \\$470,000.00 sum of the three original principals, not less - the combined growth of Assets A and C outweighs the shrinkage of Asset B over this particular 5-year horizon.`,
      `**E) If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.**  (true)

Replacing Asset B's 9% depreciation with a 9% continuous growth rate over the same 5 years gives $220{,}000 \\times e^{0.45}$ ≈ \\$345,028.68, which does exceed \\$340,000.00, illustrating just how large the swing is between shrinking and growing at the same magnitude rate over a multi-year horizon.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 40,
    solution_overview: `A family office's capstone valuation combines three holdings, all valued in nominal undiscounted dollars and added together just like ordinary fixed amounts. Asset A is a private equity stake currently worth \\$150,000, growing continuously at a nominal annual rate of 6% for 5 years. Asset B is aging warehouse machinery currently worth \\$220,000, depreciating continuously at an annual rate of 9% for the same 5 years. Asset C is a licensing agreement currently worth \\$100,000 that grows continuously at 8% for its first 3 years before slowing to a continuous 3% for its remaining 2 years of the 5-year total.

**Part 1: Setup.**

Asset A: $A_0 = \\$150{,}000$, $r_A$ = 6% = 0.06, t = 5 years

Asset B: $B_0 = \\$220{,}000$, $\\delta_B$ = 9% = 0.09, t = 5 years

Asset C: $C_0 = \\$100{,}000$, $r_1$ = 8% for 3 years, then $r_2$ = 3% for 2 years

**Part 2: Formula.**

$A(t) = A_0 e^{r_A t}$

$B(t) = B_0 e^{-\\delta_B t}$

$C(5) = C_0 e^{r_1 \\times 3} \\times e^{r_2 \\times 2}$

Portfolio total: $A(5) + B(5) + C(5)$

**Part 3: Solve.**

**1.** $A(5) = 150{,}000 \\times e^{0.06 \\times 5} = 150{,}000 \\times e^{0.30} = 150{,}000 \\times 1.349859 = \\$202{,}478.82$.

**2.** $B(5) = 220{,}000 \\times e^{-0.09 \\times 5} = 220{,}000 \\times e^{-0.45} = 220{,}000 \\times 0.637628 = \\$140{,}278.19$.

**3.** $C(3) = 100{,}000 \\times e^{0.08 \\times 3} = 100{,}000 \\times e^{0.24} = 100{,}000 \\times 1.271249 = \\$127{,}124.92$.

**4.** $C(5) = 127{,}124.92 \\times e^{0.03 \\times 2} = 127{,}124.92 \\times e^{0.06} = 127{,}124.92 \\times 1.061837 = \\$134{,}985.88$.

**5.** Portfolio total = 202,478.82 + 140,278.19 + 134,985.88 = \\$477,742.89 (rounding to the cent).

**6.** Sum of principals = 150,000 + 220,000 + 100,000 = \\$470,000.00; the total (\\$477,742.89) is MORE than the principal sum, not less.

**7.** If $B_0$ grew instead of shrinking at 9%: $B(5)' = 220{,}000 \\times e^{0.09 \\times 5} = 220{,}000 \\times e^{0.45} = 220{,}000 \\times 1.568312 = \\$345{,}028.68$, which does exceed \\$340,000.00.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-41`,
    case_id: `MATH 11.41`,
    title: `Present Value of a Client Bonus Payment`,
    subsection: `11.3`,
    context: `Ms. Kettering, owner of a small marketing agency, has been promised a \\$8{,}000 performance bonus by a client, payable in exactly 1 year. The prevailing interest rate for such arrangements is 5% per year, compounded annually, so this is a single-payment present-value problem with $K = \\$8{,}000$, r = 0.05, and t = 1.`,
    statements: [
      `The discount factor is approximately 0.9524.`,
      `The PDV of the \\$8{,}000 bonus is approximately \\$7{,}619.05.`,
      `If the interest rate were 10% instead of 5%, the PDV of the \\$8{,}000 bonus would be higher than its value under the original 5% rate.`,
      `The difference between the \\$8{,}000 future bonus and its present value is approximately \\$423.81.`,
      `If the interest rate were 0% per year, the present value of the \\$8{,}000 bonus would be exactly \\$7{,}500.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The discount factor is approximately 0.9524.**  (true)

Dividing 1 by 1.05 asks how much of a single dollar due in a year is worth today at a 5% annual rate, and that calculation gives 1/1.05 ≈ 0.9524. This is exactly the (annual) discount factor the chapter defines as $(1+r)^{-1}$, so the statement matches the formula precisely.`,
      `**B) The PDV of the \\$8{,}000 bonus is approximately \\$7{,}619.05.**  (true)

Multiplying the future amount by the discount factor found above converts the \\$8{,}000 due in a year into its equivalent value today: 8,000 × 0.9524 ≈ \\$7{,}619.05, which is exactly what the present-discounted-value formula $K(1+r)^{-1}$ produces here.`,
      `**C) If the interest rate were 10% instead of 5%, the PDV of the \\$8{,}000 bonus would be higher than its value under the original 5% rate.**  (false)

Raising the discount rate makes future money worth less today, not more, because a higher rate means today's dollar could grow into a larger amount by next year, so less of it is needed now to match the same future sum. Concretely, at 10% the present value falls to 8,000/1.10 ≈ \\$7{,}272.73, which is lower than \\$7{,}619.05, not higher - the statement has the direction of the effect backwards.`,
      `**D) The difference between the \\$8{,}000 future bonus and its present value is approximately \\$423.81.**  (false)

The actual gap between the \\$8{,}000 owed in the future and its value today is simply the future amount minus the present value: 8,000 - 7,619.05 = \\$380.95. The figure of \\$423.81 in the statement does not match this difference and overstates the true discount by roughly \\$42.86.`,
      `**E) If the interest rate were 0% per year, the present value of the \\$8{,}000 bonus would be exactly \\$7{,}500.**  (false)

A 0% interest rate means money today and money in a year are worth exactly the same, since there is no opportunity cost or growth to account for. Formally, the discount factor becomes $(1.00)^{-1}$ = 1, so the present value collapses to the face amount itself, \\$8{,}000, not \\$7{,}500.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 41,
    solution_overview: `Ms. Kettering, owner of a small marketing agency, has been promised a \\$8{,}000 performance bonus by a client, payable in exactly 1 year. The prevailing interest rate for such arrangements is 5% per year, compounded annually, so this is a single-payment present-value problem with $K = \\$8{,}000$, r = 0.05, and t = 1.

**Part 1: Setup.**

$K = \\$8{,}000$ (future bonus)

Nominal annual rate p = 5%, so r = 0.05

t = 1 year (annual compounding)

**Part 2: Formula.**

$PDV = K(1+r)^{-t}$

**Part 3: Solve.**

**1.** Discount factor: $(1.05)^{-1}$ = 1/1.05 ≈ 0.9524.

**2.** $PDV = 8{,}000 \\times 0.9524 \\approx \\$7{,}619.05$.

**3.** At r = 0.10: $PDV = 8{,}000/1.10 \\approx \\$7{,}272.73$.

**4.** Difference (at 5%) = 8,000 - 7,619.05 = \\$380.95.

**5.** At r = 0: $PDV = 8{,}000 \\times (1.00)^{-1} = \\$8{,}000$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-42`,
    case_id: `MATH 11.42`,
    title: `Continuous Compounding on a Consulting Milestone Payment`,
    subsection: `11.3`,
    context: `A freelance IT consultant will receive a \\$12{,}000 milestone payment from a client in 3 years upon final project sign-off. The client's finance department discounts all deferred payables continuously, at a rate of 6% per year, so this problem uses $K = \\$12{,}000$, r = 0.06, and t = 3 under continuous compounding.`,
    statements: [
      `The continuous discount factor is approximately 0.8353.`,
      `The PDV of the \\$12{,}000 payment is approximately \\$10{,}023.24.`,
      `The present value computed with continuous compounding is greater than the present value computed with annual compounding at the same 6% rate over the same 3 years.`,
      `The annual-compounding PDV exceeds the continuous-compounding PDV by approximately \\$60.00.`,
      `If the payment were instead due in 6 years rather than 3, its present value would be less than the present value found for the original 3-year horizon.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The continuous discount factor is approximately 0.8353.**  (true)

Raising e to the power -0.18 (the product of the rate 0.06 and the time 3) gives the fraction of the future payment that survives continuous discounting over those 3 years, which works out to approximately 0.8353.`,
      `**B) The PDV of the \\$12{,}000 payment is approximately \\$10{,}023.24.**  (true)

Multiplying the \\$12{,}000 payment by the continuous discount factor of 0.8353 gives its present value: 12,000 × 0.8353 ≈ \\$10{,}023.24, exactly as the formula $Ke^{-rt}$ requires.`,
      `**C) The present value computed with continuous compounding is greater than the present value computed with annual compounding at the same 6% rate over the same 3 years.**  (false)

Continuous compounding grows capital faster than annual compounding at the same stated rate, because interest is being added at every instant rather than once a year. Since it grows money fastest, it also discounts future money the hardest, so the continuous-compounding present value (\\$10{,}023.24) actually ends up smaller than the annual-compounding present value (\\$10{,}075.66), not greater.`,
      `**D) The annual-compounding PDV exceeds the continuous-compounding PDV by approximately \\$60.00.**  (false)

Subtracting the smaller continuous-compounding value from the larger annual-compounding value gives 10,075.66 - 10,023.24 = \\$52.42, not \\$60.00, so the stated gap overstates the true difference.`,
      `**E) If the payment were instead due in 6 years rather than 3, its present value would be less than the present value found for the original 3-year horizon.**  (true)

A payment further in the future is discounted more heavily, since there are more years over which the discounting effect compounds. At 6 years, the present value falls to approximately \\$8{,}372.11, which is indeed lower than the 3-year figure of \\$10{,}023.24.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 42,
    solution_overview: `A freelance IT consultant will receive a \\$12{,}000 milestone payment from a client in 3 years upon final project sign-off. The client's finance department discounts all deferred payables continuously, at a rate of 6% per year, so this problem uses $K = \\$12{,}000$, r = 0.06, and t = 3 under continuous compounding.

**Part 1: Setup.**

$K = \\$12{,}000$ (milestone payment)

Continuous annual rate p = 6%, so r = 0.06

t = 3 years

**Part 2: Formula.**

$PDV = Ke^{-rt}$

**Part 3: Solve.**

**1.** rt = 0.06 × 3 = 0.18, so $e^{-0.18}$ ≈ 0.8353.

**2.** $PDV = 12{,}000 \\times 0.8353 \\approx \\$10{,}023.24$.

**3.** Annual compounding: $PDV = 12{,}000 \\times (1.06)^{-3} = 12{,}000/1.191016 \\approx \\$10{,}075.66$.

**4.** Difference = 10,075.66 - 10,023.24 = \\$52.42.

**5.** For t = 6: rt = 0.36, $e^{-0.36}$ ≈ 0.6977, so $PDV = 12{,}000 \\times 0.6977 \\approx \\$8{,}372.11$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-43`,
    case_id: `MATH 11.43`,
    title: `Escrowed Sale Proceeds for a Landlord`,
    subsection: `11.3`,
    context: `A landlord is due to receive \\$45{,}000 in escrowed proceeds from a property sale in 8 years, once a title dispute is resolved. The applicable interest rate is 7% per year. The landlord's accountant computes the present value under both annual compounding and continuous compounding, so this task uses $K = \\$45{,}000$, r = 0.07, and t = 8 under both methods.`,
    statements: [
      `The annual discount factor is approximately 0.5820.`,
      `The present value under annual compounding is approximately \\$26{,}190.41.`,
      `The present value under continuous compounding is approximately \\$24{,}900.00.`,
      `The annual-compounding present value exceeds the continuous-compounding present value by approximately \\$650.00.`,
      `If the interest rate were 0% per year, both compounding methods would give an identical present value of exactly \\$40{,}000.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The annual discount factor is approximately 0.5820.**  (true)

Compounding 1.07 eight times over gives $(1.07)^{8}$ ≈ 1.718186, and taking the reciprocal of that (since the exponent is negative) yields a discount factor of approximately 0.5820, matching the definition of $(1+r)^{-t}$ for annual compounding.`,
      `**B) The present value under annual compounding is approximately \\$26{,}190.41.**  (true)

Multiplying the \\$45{,}000 face amount by the annual discount factor of 0.5820 gives 45,000 × 0.5820 ≈ \\$26{,}190.41, the value that \\$45{,}000 due in 8 years is worth today under annual compounding at 7%.`,
      `**C) The present value under continuous compounding is approximately \\$24{,}900.00.**  (false)

Under continuous compounding, the exponent rt = 0.56 gives $e^{-0.56}$ ≈ 0.5712, and multiplying by the \\$45{,}000 face amount gives 45,000 × 0.5712 ≈ \\$25{,}704.41, not \\$24{,}900.00, as the continuously-compounded present value.`,
      `**D) The annual-compounding present value exceeds the continuous-compounding present value by approximately \\$650.00.**  (false)

Because continuous compounding grows (and therefore discounts) money more aggressively than annual compounding at the same stated rate, the annual-compounding present value comes out higher. Subtracting the two values gives 26,190.41 - 25,704.41 = \\$486.00, not \\$650.00, so the stated gap overstates the true difference.`,
      `**E) If the interest rate were 0% per year, both compounding methods would give an identical present value of exactly \\$40{,}000.**  (false)

With no interest or discounting at all (r = 0), both the annual formula $K(1+0)^{-t}$ and the continuous formula $Ke^{0}$ reduce to simply K, so both compounding methods agree and give a present value equal to the full \\$45{,}000 face amount, not \\$40{,}000.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 43,
    solution_overview: `A landlord is due to receive \\$45{,}000 in escrowed proceeds from a property sale in 8 years, once a title dispute is resolved. The applicable interest rate is 7% per year. The landlord's accountant computes the present value under both annual compounding and continuous compounding, so this task uses $K = \\$45{,}000$, r = 0.07, and t = 8 under both methods.

**Part 1: Setup.**

$K = \\$45{,}000$ (escrowed proceeds)

Nominal/continuous annual rate p = 7%, so r = 0.07

t = 8 years

**Part 2: Formula.**

Annual: $PDV = K(1+r)^{-t}$

Continuous: $PDV = Ke^{-rt}$

**Part 3: Solve.**

**1.** $(1.07)^{8}$ ≈ 1.718186, so $(1.07)^{-8}$ ≈ 0.5820.

**2.** Annual PDV = 45,000 × 0.5820 ≈ \\$26{,}190.41.

**3.** rt = 0.07 × 8 = 0.56, $e^{-0.56}$ ≈ 0.5712, so continuous PDV = 45,000 × 0.5712 ≈ \\$25{,}704.41.

**4.** Difference = 26,190.41 - 25,704.41 = \\$486.00.

**5.** At r = 0: both formulas reduce to K × 1 = \\$45{,}000.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-44`,
    case_id: `MATH 11.44`,
    title: `Funding a Future Equipment Purchase`,
    subsection: `11.3`,
    context: `A dental practice wants to have exactly \\$150{,}000 available in 5 years to purchase new imaging equipment. Its bank offers a continuous annual interest rate of 4.5% on a dedicated savings account, and the practice wants to know how much it must deposit today, i.e., the present value of the \\$150{,}000 goal under $K = \\$150{,}000$, r = 0.045, and t = 5.`,
    statements: [
      `The continuous discount factor is approximately 0.8125.`,
      `The practice must deposit approximately \\$119{,}777.40 today to reach its \\$150{,}000 goal in 5 years.`,
      `If the practice deposited only \\$110{,}000 today instead, it would still reach the \\$150{,}000 goal after 5 years at this rate.`,
      `If the bank instead compounded the same 4.5% nominal rate annually rather than continuously, the required deposit today would be lower than the deposit required under continuous compounding.`,
      `Doubling the time horizon to 10 years would require depositing exactly half of the amount required for the original 5-year horizon today.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) The continuous discount factor is approximately 0.8125.**  (false)

The exponent rt = 0.225 comes directly from multiplying the 4.5% continuous rate by the 5-year horizon, and $e^{-0.225}$ ≈ 0.7985, not 0.8125, is the fraction of the \\$150{,}000 goal that needs to be set aside today.`,
      `**B) The practice must deposit approximately \\$119{,}777.40 today to reach its \\$150{,}000 goal in 5 years.**  (true)

Multiplying the \\$150{,}000 target by the discount factor of 0.7985 gives the deposit required today: 150,000 × 0.7985 ≈ \\$119{,}777.40, which will grow into exactly \\$150{,}000 after 5 years of continuous compounding at 4.5%.`,
      `**C) If the practice deposited only \\$110{,}000 today instead, it would still reach the \\$150{,}000 goal after 5 years at this rate.**  (false)

Growing \\$110{,}000 for 5 years at 4.5% continuous interest gives $110{,}000 \\times e^{0.225} \\approx \\$137{,}755.50$, which falls noticeably short of the \\$150{,}000 goal. Depositing less than the required \\$119{,}777.40 today simply cannot compound into the full target amount by the deadline.`,
      `**D) If the bank instead compounded the same 4.5% nominal rate annually rather than continuously, the required deposit today would be lower than the deposit required under continuous compounding.**  (false)

Continuous compounding is the fastest possible way for money to grow at a given stated rate, so it needs the smallest starting deposit to reach a fixed future goal. Switching to annual compounding at the same 4.5% rate is less powerful, so it actually requires a larger deposit today, about \\$120{,}367.90, not a smaller one.`,
      `**E) Doubling the time horizon to 10 years would require depositing exactly half of the amount required for the original 5-year horizon today.**  (false)

Present-value discounting works exponentially in time, not linearly, so doubling the number of years does not simply halve the required deposit. At 10 years the required deposit is about \\$95{,}644.20, which is well above half of \\$119{,}777.40 (that half would be \\$59{,}888.70).`,
    ],
    difficulty_level: `2/5`,
    sort_order: 44,
    solution_overview: `A dental practice wants to have exactly \\$150{,}000 available in 5 years to purchase new imaging equipment. Its bank offers a continuous annual interest rate of 4.5% on a dedicated savings account, and the practice wants to know how much it must deposit today, i.e., the present value of the \\$150{,}000 goal under $K = \\$150{,}000$, r = 0.045, and t = 5.

**Part 1: Setup.**

$K = \\$150{,}000$ (target future amount)

Continuous annual rate p = 4.5%, so r = 0.045

t = 5 years

**Part 2: Formula.**

Required deposit: $A = Ke^{-rt}$

**Part 3: Solve.**

**1.** rt = 0.045 × 5 = 0.225, so $e^{-0.225}$ ≈ 0.7985.

**2.** $A = 150{,}000 \\times 0.7985 \\approx \\$119{,}777.40$.

**3.** Future value of \\$110{,}000 after 5 years at 4.5% continuous: $110{,}000 \\times e^{0.225} \\approx 110{,}000 \\times 1.2523 \\approx \\$137{,}755.50$.

**4.** Annual compounding: $A = 150{,}000 \\times (1.045)^{-5} = 150{,}000/1.246182 \\approx \\$120{,}367.90$.

**5.** For t = 10: rt = 0.45, $e^{-0.45}$ ≈ 0.6376, so $A = 150{,}000 \\times 0.6376 \\approx \\$95{,}644.20$.

**Answer.** A=FALSE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-45`,
    case_id: `MATH 11.45`,
    title: `Implied Maturity of a Discounted Promissory Note`,
    subsection: `11.3`,
    context: `An investor purchases a promissory note today for \\$18{,}500. The note promises a payoff of \\$25{,}000 at maturity, and the market interest rate for notes of this kind is 6% per year, compounded annually. The investor wants to work backward from the price to find the implied maturity time, using $PDV = \\$18{,}500$, $K = \\$25{,}000$, and r = 0.06.`,
    statements: [
      `The ratio of the payoff to the purchase price is approximately 1.3514.`,
      `The implied maturity time, assuming annual compounding, is approximately 5.17 years.`,
      `If the purchase price had instead been \\$20{,}000 for the same \\$25{,}000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.`,
      `If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.`,
      `The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The ratio of the payoff to the purchase price is approximately 1.3514.**  (true)

Dividing the promised payoff by the price actually paid, 25,000/18,500, shows how many times the investor's money is expected to multiply by maturity, and that ratio works out to approximately 1.3514.`,
      `**B) The implied maturity time, assuming annual compounding, is approximately 5.17 years.**  (true)

Rearranging the annual present-value formula to solve for t and plugging in the ratio 1.3514 and rate 6% gives t = ln(1.3514)/ln(1.06) ≈ 5.17 years, the implied time to maturity under annual compounding.`,
      `**C) If the purchase price had instead been \\$20{,}000 for the same \\$25{,}000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.**  (false)

Paying more today for the identical eventual payoff, \\$20{,}000 instead of \\$18{,}500, means the note does not need to grow by as large a multiple to reach \\$25{,}000, so less time (and less discounting) is implied, not more. Recomputing gives an implied maturity of only about 3.83 years, which is shorter than 5.17 years, contradicting the statement.`,
      `**D) If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.**  (false)

Using the continuous-compounding version of the same relationship, t = ln(1.3514)/0.06, gives approximately 5.02 years, not 5.45 years, as the implied maturity time when discounting is continuous rather than annual.`,
      `**E) The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.**  (false)

Continuous compounding discounts a given ratio of payoff to price more efficiently per year than annual compounding does, so it takes less elapsed time to justify the same 1.3514 ratio, not more. The continuous-compounding time of about 5.02 years is therefore shorter than the annual-compounding time of about 5.17 years, the opposite of what the statement claims.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 45,
    solution_overview: `An investor purchases a promissory note today for \\$18{,}500. The note promises a payoff of \\$25{,}000 at maturity, and the market interest rate for notes of this kind is 6% per year, compounded annually. The investor wants to work backward from the price to find the implied maturity time, using $PDV = \\$18{,}500$, $K = \\$25{,}000$, and r = 0.06.

**Part 1: Setup.**

$PDV = \\$18{,}500$ (purchase price)

$K = \\$25{,}000$ (maturity payoff)

Nominal annual rate p = 6%, so r = 0.06

**Part 2: Formula.**

Annual: $PDV = K(1+r)^{-t}$, so $t = \\ln(K/PDV)/\\ln(1+r)$

Continuous: $PDV = Ke^{-rt}$, so $t = \\ln(K/PDV)/r$

**Part 3: Solve.**

**1.** K/PDV = 25,000/18,500 ≈ 1.3514.

**2.** ln(1.3514) ≈ 0.3011; ln(1.06) ≈ 0.05827.

**3.** t = 0.3011/0.05827 ≈ 5.17 years.

**4.** For a \\$20{,}000 price: ratio = 25,000/20,000 = 1.25, ln(1.25) ≈ 0.2231, t = 0.2231/0.05827 ≈ 3.83 years.

**5.** Continuous: t = ln(1.3514)/0.06 ≈ 0.3011/0.06 ≈ 5.02 years.

**6.** Compare: continuous t ≈ 5.02 years vs.

**7.** annual t ≈ 5.17 years.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-46`,
    case_id: `MATH 11.46`,
    title: `Implied Continuous Discount Rate on a Collectible Painting`,
    subsection: `11.3`,
    context: `An art gallery has secured a guaranteed future sale of a painting for \\$60{,}000 in 12 years. A collector is willing to pay \\$27{,}000 today for the rights to that future payment, with value discounted continuously, so this task solves for r given $PDV = \\$27{,}000$, $K = \\$60{,}000$, and t = 12.`,
    statements: [
      `The implied discount factor is exactly 0.45.`,
      `The implied continuous discount rate is approximately 6.65% per year.`,
      `At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40{,}249.20.`,
      `If the purchase price had instead been \\$30{,}000 for the same \\$60{,}000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27{,}000 price.`,
      `Doubling the horizon to 24 years would require the rate to be approximately 3.33%.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The implied discount factor is exactly 0.45.**  (true)

Dividing the \\$27{,}000 purchase price by the \\$60{,}000 eventual payoff gives 27,000/60,000, which reduces exactly to 0.45 with no rounding involved.`,
      `**B) The implied continuous discount rate is approximately 6.65% per year.**  (true)

Solving the continuous present-value formula for the rate, using the 0.45 discount factor and the 12-year horizon, gives r = -ln(0.45)/12 ≈ 6.65% as the implied continuous discount rate embedded in this deal.`,
      `**C) At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40{,}249.20.**  (true)

Applying the 6.65% rate over a shorter 6-year horizon instead of 12 reduces the exponent to about 0.3992, giving a present value of approximately \\$40{,}249.20 - higher than the 12-year figure, since less time means less discounting.`,
      `**D) If the purchase price had instead been \\$30{,}000 for the same \\$60{,}000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27{,}000 price.**  (false)

Paying more today, \\$30{,}000 instead of \\$27{,}000, for the identical future payoff means less discounting was actually needed to arrive at that price, which corresponds to a lower implied rate, not a higher one. Recomputing gives an implied rate of only about 5.78%, below 6.65%, contradicting the statement.`,
      `**E) Doubling the horizon to 24 years would require the rate to be approximately 3.33%.**  (true)

Since the discount factor 0.45 corresponds to a fixed value of r × t (specifically -ln(0.45) ≈ 0.7985), doubling the number of years from 12 to 24 while keeping that product constant forces the rate to be cut exactly in half, from 6.65% down to about 3.33%.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 46,
    solution_overview: `An art gallery has secured a guaranteed future sale of a painting for \\$60{,}000 in 12 years. A collector is willing to pay \\$27{,}000 today for the rights to that future payment, with value discounted continuously, so this task solves for r given $PDV = \\$27{,}000$, $K = \\$60{,}000$, and t = 12.

**Part 1: Setup.**

$PDV = \\$27{,}000$ (price paid)

$K = \\$60{,}000$ (future payoff)

t = 12 years (continuous compounding)

**Part 2: Formula.**

$PDV = Ke^{-rt}$, so $r = -\\ln(PDV/K)/t$

**Part 3: Solve.**

**1.** PDV/K = 27,000/60,000 = 0.45.

**2.** r = -ln(0.45)/12 = 0.798508/12 ≈ 0.0665 = 6.65%.

**3.** For t = 6: rt = 0.0665 × 6 ≈ 0.3992, $e^{-0.3992}$ ≈ 0.6708, so PDV = 60,000 × 0.6708 ≈ \\$40{,}249.20.

**4.** For a \\$30{,}000 price: ratio = 30,000/60,000 = 0.5, r = -ln(0.5)/12 = 0.693147/12 ≈ 0.0578 = 5.78%.

**5.** For t = 24 with the same discount factor 0.45: r = -ln(0.45)/24 = 0.798508/24 ≈ 0.0333 = 3.33%.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-47`,
    case_id: `MATH 11.47`,
    title: `Combined Present Value of Two Software Milestone Payments`,
    subsection: `11.3`,
    context: `A software company is due to receive two payments from a client under a licensing agreement: \\$40{,}000 in 2 years and \\$65{,}000 in 5 years. The applicable interest rate is 5% per year, compounded annually, and the company's controller wants the combined present value of both payments, using $K_1 = \\$40{,}000$ at $t_1 = 2$ and $K_2 = \\$65{,}000$ at $t_2 = 5$.`,
    statements: [
      `The present value of the \\$40{,}000 payment is approximately \\$36{,}281.18.`,
      `The present value of the \\$65{,}000 payment is approximately \\$50{,}930.87.`,
      `The combined present value of both payments together is approximately \\$87{,}212.05.`,
      `The \\$65{,}000 payment has a smaller present value than the \\$40{,}000 payment.`,
      `If both payments were instead discounted continuously at the same 5% rate, their combined present value would be less than \\$86{,}000.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The present value of the \\$40{,}000 payment is approximately \\$36{,}281.18.**  (true)

Discounting the \\$40{,}000 payment back 2 years at 5% annual compounding, $40{,}000/(1.05)^{2}$, gives approximately \\$36{,}281.18 as today's equivalent value.`,
      `**B) The present value of the \\$65{,}000 payment is approximately \\$50{,}930.87.**  (true)

Discounting the \\$65{,}000 payment back 5 years at the same 5% rate, $65{,}000/(1.05)^{5}$, gives approximately \\$50{,}930.87.`,
      `**C) The combined present value of both payments together is approximately \\$87{,}212.05.**  (true)

Since present values from different payment dates can simply be added together, the combined present value of both milestone payments is 36,281.18 + 50,930.87 ≈ \\$87{,}212.05.`,
      `**D) The \\$65{,}000 payment has a smaller present value than the \\$40{,}000 payment.**  (false)

Comparing the two individual present values directly, the \\$65{,}000 payment actually contributes the larger amount today, about \\$50{,}930.87, versus about \\$36{,}281.18 for the \\$40{,}000 payment. Its bigger face value more than makes up for the extra 3 years of discounting, so it is not smaller than the other payment's present value.`,
      `**E) If both payments were instead discounted continuously at the same 5% rate, their combined present value would be less than \\$86{,}000.**  (false)

Recomputing both payments with continuous compounding at 5% gives a combined present value of approximately \\$86{,}815.55. That figure is above \\$86{,}000, not below it, so the statement understates the true combined continuous present value.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 47,
    solution_overview: `A software company is due to receive two payments from a client under a licensing agreement: \\$40{,}000 in 2 years and \\$65{,}000 in 5 years. The applicable interest rate is 5% per year, compounded annually, and the company's controller wants the combined present value of both payments, using $K_1 = \\$40{,}000$ at $t_1 = 2$ and $K_2 = \\$65{,}000$ at $t_2 = 5$.

**Part 1: Setup.**

$K_1 = \\$40{,}000$ due in $t_1 = 2$ years

$K_2 = \\$65{,}000$ due in $t_2 = 5$ years

Nominal annual rate p = 5%, so r = 0.05

**Part 2: Formula.**

Annual: $PDV = K(1+r)^{-t}$

Continuous: $PDV = Ke^{-rt}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $\\mathrm{PDV}_1 = 40{,}000 \\times (1.05)^{-2} = 40{,}000/1.1025 \\approx \\$36{,}281.18$.

**2.** $\\mathrm{PDV}_2 = 65{,}000 \\times (1.05)^{-5} = 65{,}000/1.276282 \\approx \\$50{,}930.87$.

**3.** Combined PDV = 36,281.18 + 50,930.87 ≈ \\$87{,}212.05.

**4.** Compare: \\$50{,}930.87 (from the \\$65{,}000 payment) vs.

**5.** \\$36{,}281.18 (from the \\$40{,}000 payment).

**6.** Continuous $\\mathrm{PDV}_1 = 40{,}000 \\times e^{-0.10} \\approx \\$36{,}193.48$; continuous $\\mathrm{PDV}_2 = 65{,}000 \\times e^{-0.25} \\approx \\$50{,}622.07$; combined ≈ \\$86{,}815.55.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-48`,
    case_id: `MATH 11.48`,
    title: `Comparing an Immediate Payment to a Deferred Payment`,
    subsection: `11.3`,
    context: `A freelance architect is offered two payment options for a completed project: Option A is \\$22{,}000 paid immediately upon delivery. Option B is \\$25{,}500 paid in 3 years. The relevant market discount rate is 6% per year, compounded annually, so the two options can be compared directly on a present-value basis.`,
    statements: [
      `The present value of Option B is approximately \\$21{,}410.30.`,
      `Option A has a higher present value than Option B at the 6% rate.`,
      `If the discount rate were 3% instead of 6%, the present value of Option B would be approximately \\$22{,}780.00.`,
      `The present value of Option B exceeds \\$22{,}000 regardless of which interest rate is used to discount it.`,
      `At exactly a 5% discount rate, the present value of Option B would be approximately \\$23{,}500.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The present value of Option B is approximately \\$21{,}410.30.**  (true)

Discounting the \\$25{,}500 payment back 3 years at a 6% annual rate, $25{,}500/(1.06)^{3}$, gives approximately \\$21{,}410.30 as its present value.`,
      `**B) Option A has a higher present value than Option B at the 6% rate.**  (true)

Comparing the two options directly, Option A's \\$22{,}000 received today is worth more than Option B's present value of \\$21{,}410.30, so at this 6% rate the immediate payment is the financially larger of the two.`,
      `**C) If the discount rate were 3% instead of 6%, the present value of Option B would be approximately \\$22{,}780.00.**  (false)

Lowering the discount rate to 3% reduces how much Option B's future payment is penalized for waiting, raising its present value to approximately \\$23{,}336.02. That is noticeably higher than the \\$22{,}780.00 stated, so the figure given is inaccurate.`,
      `**D) The present value of Option B exceeds \\$22{,}000 regardless of which interest rate is used to discount it.**  (false)

Whether Option B's present value stays above \\$22{,}000 depends entirely on the discount rate used. At the base 6% rate its present value is only about \\$21{,}410.30, which already falls below \\$22{,}000, so the claim that it always exceeds \\$22{,}000 regardless of rate does not hold.`,
      `**E) At exactly a 5% discount rate, the present value of Option B would be approximately \\$23{,}500.00.**  (false)

At a 5% discount rate, Option B's present value works out to approximately \\$22{,}029.40, not \\$23{,}500.00, which sits very close to Option A's \\$22{,}000 rather than well above it.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 48,
    solution_overview: `A freelance architect is offered two payment options for a completed project: Option A is \\$22{,}000 paid immediately upon delivery. Option B is \\$25{,}500 paid in 3 years. The relevant market discount rate is 6% per year, compounded annually, so the two options can be compared directly on a present-value basis.

**Part 1: Setup.**

Option $A = \\$22{,}000$ received today (t = 0)

Option B: $K = \\$25{,}500$ due in t = 3 years

Base nominal annual rate p = 6%, so r = 0.06

**Part 2: Formula.**

$PDV = K(1+r)^{-t}$

An amount received today (t = 0) has present value equal to its face value

**Part 3: Solve.**

**1.** $(1.06)^{3}$ ≈ 1.191016, so PDV of Option B = 25,500/1.191016 ≈ \\$21{,}410.30.

**2.** Compare \\$22{,}000 (Option A, today) with \\$21{,}410.30 (Option B, discounted).

**3.** At r = 0.03: $(1.03)^{3}$ ≈ 1.092727, so PDV = 25,500/1.092727 ≈ \\$23{,}336.02.

**4.** At r = 0.06 the PDV was found above to be \\$21{,}410.30.

**5.** At r = 0.05: $(1.05)^{3}$ ≈ 1.157625, so PDV = 25,500/1.157625 ≈ \\$22{,}029.40.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-49`,
    case_id: `MATH 11.49`,
    title: `Optimal Harvest Timing for a Timber Stand`,
    subsection: `11.3`,
    context: `A timber company owns a stand of trees whose market value grows according to $P(t) = 5{,}000(t+2)^{2}$ dollars, where t is measured in years since a recent appraisal, with P(t) differentiable and positive for all t ≥ 0. The prevailing interest rate is 8% per year, compounded continuously. Management wants to apply the chapter's tree-harvesting present-value condition to find the optimal cutting time.`,
    statements: [
      `The optimal harvest time t* that maximizes the present value of the stand is approximately 23 years.`,
      `The optimal harvest time is found by setting P'(t*) equal to P(t*) divided by r.`,
      `At the optimal time, the present value of the stand is approximately \\$623{,}000.`,
      `If the interest rate were higher than 8% instead, the optimal cutting time t* would be later than the original optimal time.`,
      `Cutting the stand at t = 25 years instead of at the optimal time would produce a higher present value than cutting at the optimal time.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The optimal harvest time t* that maximizes the present value of the stand is approximately 23 years.**  (true)

Setting the derivative condition P'(t*) = rP(t*) equal to the specific functions given here reduces, after dividing out the common factor (t + 2), to the simple equation 10,000 = 400(t + 2), which solves to t* = 23 years.`,
      `**B) The optimal harvest time is found by setting P'(t*) equal to P(t*) divided by r.**  (false)

The chapter's actual optimality condition multiplies P(t*) by the interest rate r, giving P'(t*) = rP(t*), not P'(t*) = P(t*)/r. Dividing by r instead of multiplying by it changes the equation entirely and would not correctly locate the present-value-maximizing time.`,
      `**C) At the optimal time, the present value of the stand is approximately \\$623{,}000.**  (false)

Evaluating the present-value function at the true optimum, $f(23) = 5{,}000(25)^{2}e^{-1.84}$, gives approximately \\$496{,}218.75. That is well below the \\$623{,}000 claimed in the statement, which overstates the maximum present value by more than \\$126{,}000.`,
      `**D) If the interest rate were higher than 8% instead, the optimal cutting time t* would be later than the original optimal time.**  (false)

The chapter's discussion of this same tree-harvesting problem shows that a higher interest rate makes decision-makers more impatient, pulling the optimal cutting time earlier, not later. Repeating the same method with r = 10% instead of 8% gives an optimal time of only 18 years, confirming that the cutting time shortens rather than lengthens as the rate rises.`,
      `**E) Cutting the stand at t = 25 years instead of at the optimal time would produce a higher present value than cutting at the optimal time.**  (false)

Evaluating the present-value function at t = 25 instead of at the optimum gives $f(25) = 5{,}000(27)^{2}e^{-2} \\approx \\$493{,}296.10$, which is lower than the \\$496{,}218.75 obtained at t* = 23. This confirms that t* = 23 really is the present-value-maximizing time, and waiting two extra years actually reduces value rather than increasing it.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 49,
    solution_overview: `A timber company owns a stand of trees whose market value grows according to $P(t) = 5{,}000(t+2)^{2}$ dollars, where t is measured in years since a recent appraisal, with P(t) differentiable and positive for all t ≥ 0. The prevailing interest rate is 8% per year, compounded continuously. Management wants to apply the chapter's tree-harvesting present-value condition to find the optimal cutting time.

**Part 1: Setup.**

$P(t) = 5{,}000(t+2)^{2}$

Continuous annual rate p = 8%, so r = 0.08

**Part 2: Formula.**

Present value: $f(t) = P(t)e^{-rt}$

Optimality condition: $P'(t*) = rP(t*)$

**Part 3: Solve.**

**1.** $P'(t) = 10{,}000(t + 2)$.

**2.** Set $10{,}000(t + 2) = 0.08 \\times 5{,}000(t+2)^{2} = 400(t+2)^{2}$.

**3.** Dividing both sides by (t + 2): 10,000 = 400(t + 2), so t + 2 = 25, giving t* = 23 years.

**4.** $f(23) = P(23)e^{-0.08 \\times 23} = 5{,}000(25)^{2}e^{-1.84}$ = 3,125,000 × 0.15879 ≈ \\$496{,}218.75.

**5.** $f(25) = P(25)e^{-0.08 \\times 25} = 5{,}000(27)^{2}e^{-2}$ = 3,645,000 × 0.135335 ≈ \\$493{,}296.10.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-50`,
    case_id: `MATH 11.50`,
    title: `Settling Two Supplier Obligations with a Single Lump Sum`,
    subsection: `11.3`,
    context: `A boutique winery owes a supplier two separate future payments: \\$18{,}000 due in 4 years and \\$30{,}000 due in 9 years. The supplier agrees to accept one lump-sum payment today instead, using a continuous discount rate of 5.5% per year for both obligations, so this task uses $K_1 = \\$18{,}000$ at $t_1 = 4$ and $K_2 = \\$30{,}000$ at $t_2 = 9$.`,
    statements: [
      `The present value of the \\$18{,}000 obligation is approximately \\$14{,}445.34.`,
      `The present value of the \\$30{,}000 obligation is approximately \\$18{,}287.13.`,
      `The combined lump-sum payment the winery should make today is approximately \\$32{,}732.47.`,
      `The \\$30{,}000 obligation contributes a smaller present value than the \\$18{,}000 obligation.`,
      `If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would be exactly \\$48{,}000.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The present value of the \\$18{,}000 obligation is approximately \\$14{,}445.34.**  (true)

Discounting the \\$18{,}000 obligation back 4 years at the continuous 5.5% rate, $18{,}000 \\times e^{-0.22}$, gives approximately \\$14{,}445.34 as its present value.`,
      `**B) The present value of the \\$30{,}000 obligation is approximately \\$18{,}287.13.**  (true)

Discounting the \\$30{,}000 obligation back 9 years at the same rate, $30{,}000 \\times e^{-0.495}$, gives approximately \\$18{,}287.13.`,
      `**C) The combined lump-sum payment the winery should make today is approximately \\$32{,}732.47.**  (true)

Adding the two individual present values together, since both are expressed in today's dollars, gives the total lump sum the winery should pay now: 14,445.34 + 18,287.13 ≈ \\$32{,}732.47.`,
      `**D) The \\$30{,}000 obligation contributes a smaller present value than the \\$18{,}000 obligation.**  (false)

Comparing the two contributions directly, the \\$30{,}000 obligation actually supplies the larger present value, about \\$18{,}287.13, versus about \\$14{,}445.34 for the \\$18{,}000 obligation. Its larger face amount more than offsets the extra 5 years of discounting it faces, so it does not contribute less than the smaller, sooner obligation.`,
      `**E) If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would be exactly \\$48{,}000.**  (true)

With no discounting at all, each payment's present value simply equals its face amount, so the combined lump sum reduces to 18,000 + 30,000 = \\$48{,}000, exactly the sum of the two face amounts.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 50,
    solution_overview: `A boutique winery owes a supplier two separate future payments: \\$18{,}000 due in 4 years and \\$30{,}000 due in 9 years. The supplier agrees to accept one lump-sum payment today instead, using a continuous discount rate of 5.5% per year for both obligations, so this task uses $K_1 = \\$18{,}000$ at $t_1 = 4$ and $K_2 = \\$30{,}000$ at $t_2 = 9$.

**Part 1: Setup.**

$K_1 = \\$18{,}000$ due in $t_1 = 4$ years

$K_2 = \\$30{,}000$ due in $t_2 = 9$ years

Continuous annual rate p = 5.5%, so r = 0.055

**Part 2: Formula.**

$PDV = Ke^{-rt}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $\\mathrm{PDV}_1$: $rt_1$ = 0.055 × 4 = 0.22, $e^{-0.22}$ ≈ 0.8025, so $\\mathrm{PDV}_1$ = 18,000 × 0.8025 ≈ \\$14{,}445.34.

**2.** $\\mathrm{PDV}_2$: $rt_2$ = 0.055 × 9 = 0.495, $e^{-0.495}$ ≈ 0.6096, so $\\mathrm{PDV}_2$ = 30,000 × 0.6096 ≈ \\$18{,}287.13.

**3.** Combined PDV = 14,445.34 + 18,287.13 ≈ \\$32{,}732.47.

**4.** Compare: \\$18{,}287.13 (from the \\$30{,}000 obligation) vs.

**5.** \\$14{,}445.34 (from the \\$18{,}000 obligation).

**6.** At r = 0: $e^{0}$ = 1 for both terms, so combined PDV = 18,000 + 30,000 = \\$48{,}000.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-51`,
    case_id: `MATH 11.51`,
    title: `Finding an Equivalent Annual Rate for a Continuously Discounted Trust Payment`,
    subsection: `11.3`,
    context: `A trust fund manager currently discounts a \\$50{,}000 payment due to a beneficiary in 7 years using a continuous discount rate of 5% per year. The manager wants to quote an equivalent nominal annual rate, compounded annually, that produces exactly the same present value, so this task uses $K = \\$50{,}000$, r = 0.05, and t = 7 as the continuous baseline.`,
    statements: [
      `The present value of the \\$50{,}000 payment under 5% continuous compounding for 7 years is approximately \\$33{,}100.00.`,
      `The equivalent nominal annual rate that yields the identical present value is exactly 5.00%.`,
      `The equivalent annual rate is approximately 5.87% per year.`,
      `Using the correctly derived equivalent annual rate for a 3-year horizon instead of 7 years, a \\$50{,}000 payment would have a present value of approximately \\$43{,}035.40.`,
      `The gap between the correctly derived equivalent annual rate and the 5% continuous rate is more than 1.00 percentage point.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A) The present value of the \\$50{,}000 payment under 5% continuous compounding for 7 years is approximately \\$33{,}100.00.**  (false)

Raising the payment's exponent rt = 0.05 × 7 = 0.35 and applying $e^{-0.35}$ gives the fraction of the \\$50{,}000 that survives continuous discounting over 7 years, which comes to approximately 0.704688, so multiplying through gives a present value of about \\$35{,}234.40, not \\$33{,}100.00.`,
      `**B) The equivalent nominal annual rate that yields the identical present value is exactly 5.00%.**  (false)

Continuous compounding grows money faster than annual compounding at the same numerical rate, since interest accrues at every instant rather than once a year. To replicate that stronger effect with annual compounding, the annual rate must actually be set slightly above 5.00% - specifically about 5.13% - not left equal to the continuous rate.`,
      `**C) The equivalent annual rate is approximately 5.87% per year.**  (false)

Solving $1+r_a = e^{0.05}$ gives ra ≈ 1.051271 - 1 = 5.13%, not 5.87%. The stated figure is too high and does not match the algebra of matching a continuous rate with an annual one.`,
      `**D) Using the correctly derived equivalent annual rate for a 3-year horizon instead of 7 years, a \\$50{,}000 payment would have a present value of approximately \\$43{,}035.40.**  (true)

Because the relationship $1+r_a = e^{r}$ does not depend on the payment horizon t, applying the 5.13% annual rate at a completely different horizon, t = 3, still reproduces the same present value as continuous compounding at 5% over that horizon: both methods give approximately \\$43{,}035.40.`,
      `**E) The gap between the correctly derived equivalent annual rate and the 5% continuous rate is more than 1.00 percentage point.**  (false)

The actual gap between the equivalent annual rate (5.13%) and the continuous rate (5.00%) is only about 0.13 percentage points, since $e^{0.05}$ is very close to 1.05 for a small rate like this one. That gap is far below 1.00 percentage point, so the statement overstates the true difference substantially.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 51,
    solution_overview: `A trust fund manager currently discounts a \\$50{,}000 payment due to a beneficiary in 7 years using a continuous discount rate of 5% per year. The manager wants to quote an equivalent nominal annual rate, compounded annually, that produces exactly the same present value, so this task uses $K = \\$50{,}000$, r = 0.05, and t = 7 as the continuous baseline.

**Part 1: Setup.**

$K = \\$50{,}000$

Continuous annual rate p = 5%, so r = 0.05

t = 7 years

**Part 2: Formula.**

Continuous: $PDV = Ke^{-rt}$

Equivalent annual rate: setting $K(1+r_a)^{-t} = Ke^{-rt}$ and cancelling K and t shows $1+r_a = e^{r}$ (independent of t)

**Part 3: Solve.**

**1.** rt = 0.05 × 7 = 0.35, $e^{-0.35}$ ≈ 0.704688, so $PDV \\approx 50{,}000 \\times 0.704688 \\approx \\$35{,}234.40$.

**2.** $1+r_a = e^{0.05}$ ≈ 1.051271, so ra ≈ 0.051271 = 5.13%.

**3.** Gap = 5.13% - 5.00% = 0.13 percentage points.

**4.** At t = 3: continuous $PDV = 50{,}000 \\times e^{-0.15} \\approx \\$43{,}035.40$; annual-equivalent $PDV = 50{,}000 \\times (1.051271)^{-3} \\approx \\$43{,}035.40$ (identical).

**Answer.** A=FALSE, B=FALSE, C=FALSE, D=TRUE, E=FALSE`,
  },
  {
    id: `math-11-52`,
    case_id: `MATH 11.52`,
    title: `Meeting a Loan Covenant with a Second Receivable`,
    subsection: `11.3`,
    context: `A logistics company must demonstrate a combined present value of exactly \\$100{,}000 to satisfy a loan covenant. It already holds one contractual receivable of \\$42{,}000 due in 3 years. It is negotiating a second receivable due in 6 years and must determine the face amount that receivable needs to carry. The discount rate is 6% per year, compounded annually, so $K_1 = \\$42{,}000$ at $t_1 = 3$ is known and $K_2$ at $t_2 = 6$ must be found.`,
    statements: [
      `The present value of the existing \\$42{,}000 receivable is approximately \\$35{,}264.01.`,
      `The present value still required from the second receivable is approximately \\$64{,}735.99.`,
      `The required face amount of the second receivable, due in 6 years, is approximately \\$91{,}829.24.`,
      `If the second receivable were instead due in 3 years, its required face amount would be larger than the required face amount for the original 6-year due date.`,
      `Raising the discount rate from 6% to 8%, with the second receivable still due in 6 years, would require a face amount of approximately \\$102{,}727.88.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The present value of the existing \\$42{,}000 receivable is approximately \\$35{,}264.01.**  (true)

Discounting the existing \\$42{,}000 receivable back 3 years at 6% annual compounding, $42{,}000/(1.06)^{3}$, gives approximately \\$35{,}264.01 as its present value today.`,
      `**B) The present value still required from the second receivable is approximately \\$64{,}735.99.**  (true)

Since the covenant requires a combined present value of \\$100{,}000 and the first receivable already supplies about \\$35{,}264.01 of that, the remaining present value the second receivable must contribute is 100,000 - 35,264.01 ≈ \\$64{,}735.99.`,
      `**C) The required face amount of the second receivable, due in 6 years, is approximately \\$91{,}829.24.**  (true)

To find the face amount of a receivable given its required present value, the present value is grown forward by the compounding factor for its own maturity: $64{,}735.99 \\times (1.06)^{6} \\approx \\$91{,}829.24$ is the face amount needed on a receivable due in 6 years.`,
      `**D) If the second receivable were instead due in 3 years, its required face amount would be larger than the required face amount for the original 6-year due date.**  (false)

A receivable due sooner needs less compounding to reach the same present-value contribution, so moving the maturity from 6 years to 3 years actually reduces the required face amount, not increases it. Recomputing with $t_2 = 3$ gives only about \\$77{,}101.60, which is smaller than \\$91{,}829.24, the opposite of what the statement claims.`,
      `**E) Raising the discount rate from 6% to 8%, with the second receivable still due in 6 years, would require a face amount of approximately \\$102{,}727.88.**  (true)

A higher discount rate erodes more of a future face amount's value by the time it is discounted back to today, so reaching the same \\$64{,}735.99 present-value target at 8% instead of 6% requires a larger face amount. Recomputing at 8% gives $64{,}735.99 \\times (1.08)^{6} \\approx \\$102{,}727.88$, confirming the figure exactly.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 52,
    solution_overview: `A logistics company must demonstrate a combined present value of exactly \\$100{,}000 to satisfy a loan covenant. It already holds one contractual receivable of \\$42{,}000 due in 3 years. It is negotiating a second receivable due in 6 years and must determine the face amount that receivable needs to carry. The discount rate is 6% per year, compounded annually, so $K_1 = \\$42{,}000$ at $t_1 = 3$ is known and $K_2$ at $t_2 = 6$ must be found.

**Part 1: Setup.**

$K_1 = \\$42{,}000$ due in $t_1 = 3$ years

Target combined $PDV = \\$100{,}000$

Nominal annual rate p = 6%, so r = 0.06

Second receivable due in $t_2 = 6$ years, face amount $K_2$ unknown

**Part 2: Formula.**

$PDV = K(1+r)^{-t}$

$K_2 = (\\mathrm{PDV}_{\\mathrm{target}} - \\mathrm{PV}_1)(1+r)^{t_2}$

**Part 3: Solve.**

**1.** $\\mathrm{PV}_1 = 42{,}000 \\times (1.06)^{-3} = 42{,}000/1.191016 \\approx \\$35{,}264.01$.

**2.** $\\mathrm{PV}_2$ needed = 100,000 - 35,264.01 = \\$64{,}735.99.

**3.** $K_2 = 64{,}735.99 \\times (1.06)^{6} = 64{,}735.99 \\times 1.418519 \\approx \\$91{,}829.24$.

**4.** If $t_2 = 3$: $K_2 = 64{,}735.99 \\times (1.06)^{3} = 64{,}735.99 \\times 1.191016 \\approx \\$77{,}101.60$.

**5.** At r = 8%: $K_2 = 64{,}735.99 \\times (1.08)^{6} = 64{,}735.99 \\times 1.586874 \\approx \\$102{,}727.88$.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-53`,
    case_id: `MATH 11.53`,
    title: `Finding the Indifference Payment for a Consulting Firm`,
    subsection: `11.3`,
    context: `A consulting firm can either receive \\$35{,}000 immediately or a larger payment in 4 years. The firm's opportunity cost of capital is 6.5% per year, compounded continuously. The firm wants to know the future payment amount that would make it exactly indifferent between the two options, using the immediate \\$35{,}000 as the target present value, r = 0.065, and t = 4.`,
    statements: [
      `The continuous discount factor is approximately 0.8112.`,
      `The future payment that makes the firm indifferent between the two options is approximately \\$49{,}850.75.`,
      `This indifference amount exceeds the immediate \\$35{,}000 option by more than \\$11{,}000.`,
      `If the firm's opportunity cost of capital were 9% instead of 6.5%, the required indifference payment would remain unchanged from the original 4-year, 6.5% figure.`,
      `If the payment horizon were shortened to 2 years instead of 4, the required indifference payment would be smaller than the original 4-year figure.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) The continuous discount factor is approximately 0.8112.**  (false)

Multiplying the exponent’s two pieces, 0.065 × 4 = 0.26, and evaluating $e^{-0.26}$ correctly gives approximately 0.7711, not 0.8112. The value in the statement does not match this calculation.`,
      `**B) The future payment that makes the firm indifferent between the two options is approximately \\$49{,}850.75.**  (false)

Since the immediate option must equal the discounted value of the future payment, the required future amount is K = 35,000/$e^{-0.26}$ ≈ 35,000/0.7711 ≈ \\$45{,}392.55, considerably less than the \\$49{,}850.75 given in the statement.`,
      `**C) This indifference amount exceeds the immediate \\$35{,}000 option by more than \\$11{,}000.**  (false)

The true premium the future payment must carry over the immediate \\$35{,}000 is 45,392.55 - 35,000 = \\$10{,}392.55, which falls short of \\$11{,}000, so the claim that the excess is more than \\$11{,}000 does not hold.`,
      `**D) If the firm's opportunity cost of capital were 9% instead of 6.5%, the required indifference payment would remain unchanged from the original 4-year, 6.5% figure.**  (false)

A higher opportunity cost of capital discounts a future payment more heavily, so a larger future amount is required to remain equivalent to the same \\$35{,}000 today, not the same amount as before. Recomputing at 9% gives K ≈ \\$50{,}166.53, clearly different from (and larger than) the 6.5% figure of \\$45{,}392.55.`,
      `**E) If the payment horizon were shortened to 2 years instead of 4, the required indifference payment would be smaller than the original 4-year figure.**  (true)

Shortening the horizon from 4 years to 2 years means less time is available for discounting to erode the future payment's value, so a smaller future amount is enough to match today's \\$35{,}000. Recomputing at t = 2 gives K ≈ \\$39{,}858.99, which is indeed smaller than the 4-year figure of \\$45{,}392.55.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 53,
    solution_overview: `A consulting firm can either receive \\$35{,}000 immediately or a larger payment in 4 years. The firm's opportunity cost of capital is 6.5% per year, compounded continuously. The firm wants to know the future payment amount that would make it exactly indifferent between the two options, using the immediate \\$35{,}000 as the target present value, r = 0.065, and t = 4.

**Part 1: Setup.**

Immediate option = \\$35{,}000 (today)

Continuous annual rate p = 6.5%, so r = 0.065

t = 4 years

**Part 2: Formula.**

Indifference condition: $\\mathrm{PV}_0 = Ke^{-rt}$, so $K = \\mathrm{PV}_0\\, e^{rt}$

**Part 3: Solve.**

**1.** rt = 0.065 × 4 = 0.26, so $e^{-0.26}$ ≈ 0.7711.

**2.** K = 35,000/0.7711 ≈ \\$45{,}392.55.

**3.** Excess over \\$35{,}000 = 45,392.55 - 35,000 = \\$10{,}392.55.

**4.** At r = 9%: rt = 0.36, $e^{-0.36}$ ≈ 0.6977, so K = 35,000/0.6977 ≈ \\$50{,}166.53.

**5.** At t = 2: rt = 0.13, $e^{-0.13}$ ≈ 0.8781, so K = 35,000/0.8781 ≈ \\$39{,}858.99.

**Answer.** A=FALSE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-54`,
    case_id: `MATH 11.54`,
    title: `A Corner Solution in Aging Wine Valuation`,
    subsection: `11.3`,
    context: `A vineyard owner is deciding when to bottle and sell an aging batch of wine whose market value is modeled as $P(t) = 40{,}000e^{0.05t}$ dollars, where t is the number of years from now. The relevant continuous interest rate for discounting is 8% per year, so this task applies the chapter's optimal-timing condition to $P(t) = 40{,}000e^{0.05t}$ with r = 0.08.`,
    statements: [
      `The condition P'(t*) = rP(t*) has no solution for t* > 0, so the present value is maximized at t* = 0.`,
      `The present value of the batch if sold today (t = 0) is \\$40{,}000.`,
      `The present value of the batch if instead sold in 10 years is approximately \\$29{,}632.73.`,
      `Because the market value P(t) is increasing over time, waiting to sell always increases the present value of the batch, regardless of the discount rate used.`,
      `If the discount rate were instead 4%, the optimal policy would again be to sell immediately at t* = 0.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The condition P'(t*) = rP(t*) has no solution for t* > 0, so the present value is maximized at t* = 0.**  (true)

Because the wine's growth rate (5%) is smaller than the discount rate (8%), the derivative P'(t) always falls short of rP(t) at every t, so there is no interior point where the two become equal. With no interior critical point available, the present value is maximized right at the boundary, t* = 0, meaning the wine should be sold immediately.`,
      `**B) The present value of the batch if sold today (t = 0) is \\$40{,}000.**  (true)

Evaluating P(t) at t = 0 gives $P(0) = \\$40{,}000 e^{0} = \\$40{,}000$ exactly, which is simply the wine's value today before any further aging or discounting is applied.`,
      `**C) The present value of the batch if instead sold in 10 years is approximately \\$29{,}632.73.**  (true)

Because the discount rate (8%) exceeds the wine's growth rate (5%), the present-value function actually shrinks as t increases; evaluating it at t = 10 gives approximately \\$29{,}632.73, which is indeed below the \\$40{,}000 obtained by selling today.`,
      `**D) Because the market value P(t) is increasing over time, waiting to sell always increases the present value of the batch, regardless of the discount rate used.**  (false)

A rising face value does not automatically translate into a rising present value once discounting is applied, since the discount rate can outpace the growth rate. Here, because 8% discounting exceeds 5% growth, present value actually falls the longer the sale is delayed, exactly as shown by comparing f(10) to f(0).`,
      `**E) If the discount rate were instead 4%, the optimal policy would again be to sell immediately at t* = 0.**  (false)

If the growth rate (5%) instead exceeds the discount rate (4%), the present-value function becomes $40{,}000e^{0.01t}$, which grows without any upper limit as t increases. In that case there is no finite time that maximizes present value at all, since waiting longer always helps - the opposite conclusion from selling immediately.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 54,
    solution_overview: `A vineyard owner is deciding when to bottle and sell an aging batch of wine whose market value is modeled as $P(t) = 40{,}000e^{0.05t}$ dollars, where t is the number of years from now. The relevant continuous interest rate for discounting is 8% per year, so this task applies the chapter's optimal-timing condition to $P(t) = 40{,}000e^{0.05t}$ with r = 0.08.

**Part 1: Setup.**

$P(t) = 40{,}000e^{0.05t}$

Continuous annual discount rate p = 8%, so r = 0.08

**Part 2: Formula.**

Present value: $f(t) = P(t)e^{-rt} = 40{,}000e^{(0.05-0.08)t} = 40{,}000e^{-0.03t}$

Optimality condition: $P'(t*) = rP(t*)$

**Part 3: Solve.**

**1.** $P'(t) = 0.05 \\times 40{,}000e^{0.05t} = 0.05P(t)$, so the condition $P'(t*) = rP(t*)$ would require $0.05P(t*) = 0.08P(t*)$, impossible for P(t*) > 0.

**2.** Since $f(t) = 40{,}000e^{-0.03t}$ is strictly decreasing for t ≥ 0, f is maximized at t = 0, giving $f(0) = P(0) = \\$40{,}000$.

**3.** $f(10) = 40{,}000e^{-0.03 \\times 10} = 40{,}000e^{-0.3}$ ≈ 40,000 × 0.740818 ≈ \\$29{,}632.73.

**4.** Compare $f(0) = \\$40{,}000$ with f(10) ≈ \\$29{,}632.73.

**5.** If r = 4% < 5% growth rate, $f(t) = 40{,}000e^{(0.05-0.04)t} = 40{,}000e^{0.01t}$, which increases without bound in t.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-55`,
    case_id: `MATH 11.55`,
    title: `Comparative Statics for a Forestry Cooperative's Harvest Timing`,
    subsection: `11.3`,
    context: `A forestry cooperative's analytics team has measured, at the optimal harvest time t* for one of its timber stands: $P(t*) = \\$520{,}000$, $P'(t*) = \\$46{,}800$, and $P''(t*) = \\$3{,}120$ per year, with a current continuous interest rate of r = 9% per year. The team wants to apply the chapter's comparative-statics formula to find dt*/dr and to confirm the second-order condition.`,
    statements: [
      `The data satisfy the optimality condition P'(t*) = rP(t*).`,
      `The value of P''(t*) - rP'(t*) is -\\$1{,}092.`,
      `dt*/dr is approximately -476.19.`,
      `An increase in the interest rate would lengthen the optimal harvest time t*.`,
      `The second-order condition P''(t*) - rP'(t*) < 0 is satisfied here.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The data satisfy the optimality condition P'(t*) = rP(t*).**  (true)

Multiplying the given interest rate by the given P(t*), 0.09 × 520,000, produces exactly \\$46{,}800, which matches the given P'(t*) precisely, confirming that the data really do describe a point satisfying the chapter's first-order optimality condition.`,
      `**B) The value of P''(t*) - rP'(t*) is -\\$1{,}092.**  (true)

Substituting the given values into P''(t*) - rP'(t*) gives 3,120 - 0.09(46,800) = 3,120 - 4,212 = -\\$1{,}092, exactly as the formula requires.`,
      `**C) dt*/dr is approximately -476.19.**  (true)

Dividing P(t*) = 520,000 by the -1,092 found above gives dt*/dr = 520,000/(-1,092) ≈ -476.19, meaning a one-unit increase in r would be associated with roughly a 476-year shift in t* in the opposite direction.`,
      `**D) An increase in the interest rate would lengthen the optimal harvest time t*.**  (false)

A negative sensitivity dt*/dr means the optimal harvest time moves opposite to the interest rate, so a rate increase actually shortens t*, not lengthens it. This matches the chapter's broader conclusion that higher interest rates make decision-makers more impatient and push optimal cutting times earlier, not later.`,
      `**E) The second-order condition P''(t*) - rP'(t*) < 0 is satisfied here.**  (true)

Since P''(t*) - rP'(t*) works out to -\\$1{,}092, which is indeed less than zero, the chapter's second-order condition for a genuine present-value maximum is satisfied, confirming that t* truly maximizes (rather than minimizes) the present value here.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `A forestry cooperative's analytics team has measured, at the optimal harvest time t* for one of its timber stands: $P(t*) = \\$520{,}000$, $P'(t*) = \\$46{,}800$, and $P''(t*) = \\$3{,}120$ per year, with a current continuous interest rate of r = 9% per year. The team wants to apply the chapter's comparative-statics formula to find dt*/dr and to confirm the second-order condition.

**Part 1: Setup.**

$P(t*) = \\$520{,}000$

$P'(t*) = \\$46{,}800$

$P''(t*) = \\$3{,}120$ per year

Continuous annual rate p = 9%, so r = 0.09

**Part 2: Formula.**

Optimality check: $P'(t*) = rP(t*)$

$dt*/dr = P(t*) / [P''(t*) - rP'(t*)]$

Second-order condition for a maximum: $P''(t*) - rP'(t*) < 0$

**Part 3: Solve.**

**1.** 0.09 × 520,000 = \\$46{,}800, matching the given P'(t*) exactly.

**2.** P''(t*) - rP'(t*) = 3,120 - 0.09(46,800) = 3,120 - 4,212 = -\\$1{,}092.

**3.** dt*/dr = 520,000 / (-1,092) ≈ -476.19.

**4.** A negative dt*/dr means t* moves in the opposite direction from r.

**5.** -1,092 < 0, so the second-order condition holds.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-56`,
    case_id: `MATH 11.56`,
    title: `Full Harvest-Timing Analysis for an Orchard's Timber`,
    subsection: `11.3`,
    context: `An orchard's standalone timber value is modeled by $P(t) = 3{,}000(t+4)^{2}$ dollars. The continuous interest rate is 9% per year. Management wants the optimal harvest time, confirmation that it is indeed a present-value maximum, and the sensitivity of that optimal time to the interest rate, using $P(t) = 3{,}000(t+4)^{2}$ and r = 0.09.`,
    statements: [
      `The optimal harvest time t* is approximately 18.22 years.`,
      `The present value of the orchard's timber at t* is approximately \\$250{,}000.00.`,
      `The second-order quantity P''(t*) - rP'(t*) evaluates to +\\$6{,}000.`,
      `dt*/dr is approximately +246.91.`,
      `If the interest rate were exactly 4.5% instead of 9%, the optimal harvest time would be exactly double the original, at 36.44 years.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The optimal harvest time t* is approximately 18.22 years.**  (true)

Solving $6{,}000(t + 4) = 270(t + 4)^{2}$ by dividing out the common factor (t + 4) gives 6,000 = 270(t + 4), so t + 4 = 22.2222 and t* ≈ 18.22 years, matching the optimality condition exactly.`,
      `**B) The present value of the orchard's timber at t* is approximately \\$250{,}000.00.**  (false)

Evaluating P(t*) first and then multiplying by $e^{-rt^*}$ gives a present value of approximately \\$287{,}377.84, considerably above the \\$250{,}000.00 stated, which understates the true maximum by more than \\$37{,}000.`,
      `**C) The second-order quantity P''(t*) - rP'(t*) evaluates to +\\$6{,}000.**  (false)

Carefully computing P''(t*) - rP'(t*) = 6,000 - 12,000 gives -\\$6{,}000, not +\\$6{,}000. Moreover, a negative value here is precisely what confirms a maximum under the chapter's second-order condition, so the correct sign points to a maximum, not a minimum as the statement claims.`,
      `**D) dt*/dr is approximately +246.91.**  (false)

Dividing P(t*) by the correctly signed denominator gives dt*/dr ≈ -246.91, which is negative, not positive. A negative sensitivity means a higher interest rate shortens the optimal harvest time rather than lengthening it.`,
      `**E) If the interest rate were exactly 4.5% instead of 9%, the optimal harvest time would be exactly double the original, at 36.44 years.**  (false)

Using the exact relation t* = 2/r - 4 derived from this particular P(t), halving r from 9% to 4.5% gives t* = 2/0.045 - 4 ≈ 40.44 years. Since double the original 18.22 years would be 36.44 years, the actual relationship between t* and r is not a simple proportional doubling, and the true value (40.44) exceeds that naive expectation.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `An orchard's standalone timber value is modeled by $P(t) = 3{,}000(t+4)^{2}$ dollars. The continuous interest rate is 9% per year. Management wants the optimal harvest time, confirmation that it is indeed a present-value maximum, and the sensitivity of that optimal time to the interest rate, using $P(t) = 3{,}000(t+4)^{2}$ and r = 0.09.

**Part 1: Setup.**

$P(t) = 3{,}000(t+4)^{2}$

Continuous annual rate p = 9%, so r = 0.09

**Part 2: Formula.**

$P'(t) = 6{,}000(t + 4)$

Optimality condition: $P'(t*) = rP(t*)$

$dt*/dr = P(t*) / [P''(t*) - rP'(t*)]$

**Part 3: Solve.**

**1.** $6{,}000(t + 4) = 0.09 \\times 3{,}000(t+4)^{2} = 270(t+4)^{2}$; dividing by (t + 4) gives 6,000 = 270(t + 4), so t + 4 = 22.2222, i.e., t* ≈ 18.22 years.

**2.** $P(t*) = 3{,}000(22.2222)^{2}$ ≈ \\$1{,}481{,}481.48.

**3.** $f(t*) = P(t*)e^{-0.09 \\times 18.2222} = 1{,}481{,}481.48 \\times e^{-1.64} \\approx \\$287{,}377.84$.

**4.** $P'(t*) = 6{,}000(22.2222)$ ≈ \\$133{,}333.33.

**5.** $P''(t) = 6{,}000$ (constant).

**6.** $P''(t*) - rP'(t*) = 6{,}000 - 0.09(133{,}333.33) = 6{,}000 - 12{,}000 = -\\$6{,}000$.

**7.** $dt*/dr = 1{,}481{,}481.48 / (-6{,}000)$ ≈ -246.91.

**8.** General relation for this P(t): $t* + 4 = 2/r$, so $t* = 2/r - 4$.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-57`,
    case_id: `MATH 11.57`,
    title: `Combining a Private-Equity Exit Payment with a Short-Dated Side Payment`,
    subsection: `11.3`,
    context: `A private equity fund expects to receive \\$250{,}000 from a portfolio-company exit in exactly 2.5 years, plus a smaller side payment of \\$40{,}000 in 7 months from a separate arrangement. Both amounts are discounted continuously at the fund's required rate of 11% per year, so this task uses $K_1 = \\$250{,}000$ at $t_1 = 2.5$ and $K_2 = \\$40{,}000$ at $t_2 = 7/12$, with r = 0.11.`,
    statements: [
      `The present value of the \\$250{,}000 exit payment is approximately \\$189{,}893.03.`,
      `The present value of the \\$40{,}000 side payment is approximately \\$37{,}513.95.`,
      `The combined present value of both payments is approximately \\$230{,}000.00.`,
      `The \\$40{,}000 side payment is discounted by more than 10% of its face value.`,
      `If the discount rate were 0% instead of 11%, the combined present value of both payments would be exactly \\$290{,}000.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The present value of the \\$250{,}000 exit payment is approximately \\$189{,}893.03.**  (true)

Multiplying the exit payment's exponent, 0.11 × 2.5 = 0.275, into $e^{-0.275}$ gives approximately 0.759572, and applying that discount factor to \\$250{,}000 gives a present value of about \\$189{,}893.03.`,
      `**B) The present value of the \\$40{,}000 side payment is approximately \\$37{,}513.95.**  (true)

The side payment's much shorter horizon, 7/12 of a year, gives a smaller exponent of about 0.064167, and $e^{-0.064167}$ ≈ 0.937849 applied to \\$40{,}000 gives a present value of about \\$37{,}513.95.`,
      `**C) The combined present value of both payments is approximately \\$230{,}000.00.**  (false)

Adding the two individually discounted values, 189,893.03 + 37,513.95, gives approximately \\$227{,}406.98, not \\$230{,}000.00 - the stated combined figure overstates the correct total by more than \\$2{,}500.`,
      `**D) The \\$40{,}000 side payment is discounted by more than 10% of its face value.**  (false)

Because the side payment is due so soon, only about 7 months away, very little discounting has time to accumulate on it. Its present value of approximately \\$37{,}513.95 sits only about 6.2% below its \\$40{,}000 face value, which is well above the \\$36{,}000 threshold implied by more than a 10% reduction.`,
      `**E) If the discount rate were 0% instead of 11%, the combined present value of both payments would be exactly \\$290{,}000.**  (true)

With no discounting applied at all, each payment's present value collapses to its own face value, so the combined total simply becomes 250,000 + 40,000 = \\$290{,}000, exactly as the statement describes.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 57,
    solution_overview: `A private equity fund expects to receive \\$250{,}000 from a portfolio-company exit in exactly 2.5 years, plus a smaller side payment of \\$40{,}000 in 7 months from a separate arrangement. Both amounts are discounted continuously at the fund's required rate of 11% per year, so this task uses $K_1 = \\$250{,}000$ at $t_1 = 2.5$ and $K_2 = \\$40{,}000$ at $t_2 = 7/12$, with r = 0.11.

**Part 1: Setup.**

$K_1 = \\$250{,}000$ due in $t_1 = 2.5$ years

$K_2 = \\$40{,}000$ due in $t_2 = 7/12$ year

Continuous annual rate p = 11%, so r = 0.11

**Part 2: Formula.**

$PDV = Ke^{-rt}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $rt_1$ = 0.11 × 2.5 = 0.275, $e^{-0.275}$ ≈ 0.759572, so $\\mathrm{PV}_1$ = 250,000 × 0.759572 ≈ \\$189{,}893.03.

**2.** $rt_2$ = 0.11 × 0.583333 ≈ 0.064167, $e^{-0.064167}$ ≈ 0.937849, so $\\mathrm{PV}_2$ = 40,000 × 0.937849 ≈ \\$37{,}513.95.

**3.** Combined PDV = 189,893.03 + 37,513.95 ≈ \\$227{,}406.98.

**4.** $\\mathrm{PV}_2$ ≈ \\$37{,}513.95, which is 40,000 - 37,513.95 = \\$2{,}486.05 less than face value, only about 6.2% of the face amount.

**5.** At r = 0: $e^{0}$ = 1, so combined PDV = 250,000 + 40,000 = \\$290{,}000.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-58`,
    case_id: `MATH 11.58`,
    title: `Implied Rate on a Biotech Milestone-Contingent Investment`,
    subsection: `11.3`,
    context: `Investors paid \\$2{,}000{,}000 today for preferred shares that convert into a guaranteed \\$3{,}200{,}000 payout in 4.5 years if a specific FDA milestone is met, with value discounted continuously. The investors' analyst wants to determine the implied continuous discount rate and test its sensitivity, using $PDV = \\$2{,}000{,}000$, $K = \\$3{,}200{,}000$, and t = 4.5.`,
    statements: [
      `The implied discount factor is exactly 0.625.`,
      `The implied continuous discount rate is approximately 10.44% per year.`,
      `If the milestone payout were instead \\$3{,}600{,}000, the implied discount rate would be higher than the rate implied by the original \\$3{,}200{,}000 payout.`,
      `If the time to payout were shortened to 3 years instead of 4.5, the implied discount rate would be lower than the rate implied by the original 4.5-year horizon.`,
      `Doubling the time horizon to 9 years would require the rate to be approximately 5.22%.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The implied discount factor is exactly 0.625.**  (true)

Dividing the \\$2{,}000{,}000 price paid by the \\$3{,}200{,}000 guaranteed payout gives exactly 2,000,000/3,200,000 = 0.625, with no rounding involved.`,
      `**B) The implied continuous discount rate is approximately 10.44% per year.**  (true)

Solving the continuous present-value formula for r using the 0.625 discount factor over a 4.5-year horizon, r = -ln(0.625)/4.5, gives approximately 10.44%.`,
      `**C) If the milestone payout were instead \\$3{,}600{,}000, the implied discount rate would be higher than the rate implied by the original \\$3{,}200{,}000 payout.**  (true)

A larger promised payout for the same \\$2{,}000{,}000 price implies the investors are accepting less discounting relative to the payout, which corresponds to a lower discount factor and therefore a higher implied rate. Recomputing with a \\$3{,}600{,}000 payout gives an implied rate of about 13.06%, confirming it is indeed higher than 10.44%.`,
      `**D) If the time to payout were shortened to 3 years instead of 4.5, the implied discount rate would be lower than the rate implied by the original 4.5-year horizon.**  (false)

Reaching the very same discount factor, 0.625, over a shorter horizon requires a stronger annual rate, not a weaker one, since less time is available to accumulate the same proportional discount. Recomputing with t = 3 gives an implied rate of about 15.67%, which is higher than 10.44%, the opposite of what the statement claims.`,
      `**E) Doubling the time horizon to 9 years would require the rate to be approximately 5.22%.**  (true)

Since the discount factor 0.625 corresponds to a fixed value of the product r × t (specifically -ln(0.625) ≈ 0.470004), doubling t from 4.5 to 9 years while holding that product constant forces r to be cut exactly in half, from about 10.44% down to about 5.22%.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Investors paid \\$2{,}000{,}000 today for preferred shares that convert into a guaranteed \\$3{,}200{,}000 payout in 4.5 years if a specific FDA milestone is met, with value discounted continuously. The investors' analyst wants to determine the implied continuous discount rate and test its sensitivity, using $PDV = \\$2{,}000{,}000$, $K = \\$3{,}200{,}000$, and t = 4.5.

**Part 1: Setup.**

$PDV = \\$2{,}000{,}000$

$K = \\$3{,}200{,}000$

t = 4.5 years (continuous compounding)

**Part 2: Formula.**

$PDV = Ke^{-rt}$, so $r = -\\ln(PDV/K)/t$

**Part 3: Solve.**

**1.** PDV/K = 2,000,000/3,200,000 = 0.625.

**2.** r = -ln(0.625)/4.5 = 0.470004/4.5 ≈ 0.104445 = 10.44%.

**3.** For $K = \\$3{,}600{,}000$: ratio = 2,000,000/3,600,000 ≈ 0.555556, r = -ln(0.555556)/4.5 ≈ 0.587787/4.5 ≈ 0.130619 = 13.06%.

**4.** For t = 3: r = -ln(0.625)/3 = 0.470004/3 ≈ 0.156668 = 15.67%.

**5.** For t = 9 with the same discount factor 0.625: r = -ln(0.625)/9 = 0.470004/9 ≈ 0.052223 = 5.22%.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-59`,
    case_id: `MATH 11.59`,
    title: `General Harvest-Timing Formula for a Forestry Consultancy`,
    subsection: `11.3`,
    context: `A forestry consultancy models a class of timber stands with value function $P(t) = A(t + k)^{2}$ for positive constants A and k, discounted continuously at rate r. For one particular stand, $A = \\$1{,}200$, k = 5, and r = 7.5% per year. The consultancy wants the general optimal-time formula, the specific optimal time, and two comparative-statics checks.`,
    statements: [
      `The general optimal-time formula for this family of functions is t* = 2/r - k.`,
      `Using A = 1,200, k = 5, and r = 7.5%, the optimal harvest time is approximately t* = 21.67 years.`,
      `The present value at t* is approximately \\$195{,}500.00.`,
      `If k were increased to 8, the optimal harvest time would be shorter than the original optimal time.`,
      `If the interest rate were doubled to 15%, the optimal harvest time would be more than half of the original optimal time.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The general optimal-time formula for this family of functions is t* = 2/r - k.**  (true)

Dividing the optimality equation $2A(t + k) = r A(t + k)^{2}$ through by the common factor $A(t + k)$ leaves $2 = r(t + k)$, and rearranging for t gives exactly $t* = 2/r - k$, confirming the general formula.`,
      `**B) Using A = 1,200, k = 5, and r = 7.5%, the optimal harvest time is approximately t* = 21.67 years.**  (true)

Plugging r = 0.075 and k = 5 into t* = 2/r - k gives 2/0.075 - 5 = 26.6667 - 5 ≈ 21.67 years.`,
      `**C) The present value at t* is approximately \\$195{,}500.00.**  (false)

Evaluating P at t* and then discounting with $e^{-rt^*}$ gives a present value of approximately \\$168{,}031.30, well below the \\$195{,}500.00 stated, which overstates the true value by over \\$27{,}000.`,
      `**D) If k were increased to 8, the optimal harvest time would be shorter than the original optimal time.**  (true)

Since t* = 2/r - k decreases as k increases (a larger k is subtracted), raising k from 5 to 8 shortens the optimal harvest time. Recomputing with k = 8 gives t* ≈ 18.67 years, which is indeed shorter than the original 21.67 years.`,
      `**E) If the interest rate were doubled to 15%, the optimal harvest time would be more than half of the original optimal time.**  (false)

Doubling r to 15% gives t* = 2/0.15 - 5 = 8.33 years. Half of the original 21.67 years is 10.83 years, and 8.33 years falls below that halfway mark, meaning the optimal time actually drops by more than half rather than staying above it.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `A forestry consultancy models a class of timber stands with value function $P(t) = A(t + k)^{2}$ for positive constants A and k, discounted continuously at rate r. For one particular stand, $A = \\$1{,}200$, k = 5, and r = 7.5% per year. The consultancy wants the general optimal-time formula, the specific optimal time, and two comparative-statics checks.

**Part 1: Setup.**

$P(t) = A(t + k)^{2}$, with A = 1,200, k = 5

Continuous annual rate p = 7.5%, so r = 0.075

**Part 2: Formula.**

$P'(t) = 2A(t + k)$

Optimality condition: $P'(t*) = rP(t*)$

**Part 3: Solve.**

**1.** $2A(t + k) = r A(t + k)^{2}$; dividing both sides by $A(t + k)$ (nonzero) gives $2 = r(t + k)$, so $t* = 2/r - k$.

**2.** $t* = 2/0.075 - 5 = 26.6667 - 5$ ≈ 21.67 years.

**3.** $P(t*) = 1{,}200(26.6667)^{2}$ ≈ \\$853{,}333.33.

**4.** $f(t*) = 853{,}333.33 \\times e^{-0.075 \\times 21.6667} = 853{,}333.33 \\times e^{-1.625} \\approx \\$168{,}031.30$.

**5.** With k = 8: $t* = 2/0.075 - 8$ ≈ 26.6667 - 8 = 18.67 years.

**6.** With r = 15%: $t* = 2/0.15 - 5 = 13.3333 - 5 = 8.33$ years.

**7.** Half of the original 21.67 years is 10.83 years.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
  },
  {
    id: `math-11-60`,
    case_id: `MATH 11.60`,
    title: `Pricing Two Franchise Payments Related by a Common Time Horizon`,
    subsection: `11.3`,
    context: `A franchise agreement promises an investor two payments from a franchisee: \\$30{,}000 in exactly 5 years and \\$55{,}000 in exactly 10 years (twice the first horizon). Value is discounted continuously at 8% per year. Because the second payment date is exactly double the first, its discount factor is the square of the first payment's discount factor, so this task uses $K_1 = \\$30{,}000$ at $t_1 = 5$, $K_2 = \\$55{,}000$ at $t_2 = 10$, and r = 0.08.`,
    statements: [
      `The discount factor for the 5-year payment is approximately 0.6703.`,
      `The discount factor for the 10-year payment is approximately 0.4493.`,
      `The present value of the \\$30{,}000 payment is approximately \\$21{,}500.00.`,
      `The present value of the \\$55{,}000 payment is approximately \\$26{,}000.00.`,
      `The combined present value the investor should pay today for both payments is approximately \\$47{,}500.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The discount factor for the 5-year payment is approximately 0.6703.**  (true)

Raising e to the power -0.4 (the product of the 8% rate and the 5-year horizon) gives a discount factor of approximately 0.6703 for the first payment.`,
      `**B) The discount factor for the 10-year payment is approximately 0.4493.**  (true)

Since the 10-year horizon is exactly twice the 5-year horizon, its exponent is exactly double as well, and e-r(2t) equals $(e^{-rt})^{2}$ by the laws of exponents. Squaring 0.6703 gives approximately 0.4493, matching $e^{-0.8}$ exactly.`,
      `**C) The present value of the \\$30{,}000 payment is approximately \\$21{,}500.00.**  (false)

Multiplying the \\$30{,}000 face amount by the 5-year discount factor, 30,000 × 0.670320, gives a present value of approximately \\$20{,}109.60, not \\$21{,}500.00.`,
      `**D) The present value of the \\$55{,}000 payment is approximately \\$26{,}000.00.**  (false)

Multiplying the \\$55{,}000 face amount by the 10-year discount factor, 55,000 × 0.449329, gives a present value of approximately \\$24{,}713.09, not \\$26{,}000.00.`,
      `**E) The combined present value the investor should pay today for both payments is approximately \\$47{,}500.00.**  (false)

Adding the two present values together, since both are already expressed in today's dollars, gives the total the investor should pay now: 20,109.60 + 24,713.09 ≈ \\$44{,}822.69, not \\$47{,}500.00.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `A franchise agreement promises an investor two payments from a franchisee: \\$30{,}000 in exactly 5 years and \\$55{,}000 in exactly 10 years (twice the first horizon). Value is discounted continuously at 8% per year. Because the second payment date is exactly double the first, its discount factor is the square of the first payment's discount factor, so this task uses $K_1 = \\$30{,}000$ at $t_1 = 5$, $K_2 = \\$55{,}000$ at $t_2 = 10$, and r = 0.08.

**Part 1: Setup.**

$K_1 = \\$30{,}000$ due in $t_1 = 5$ years

$K_2 = \\$55{,}000$ due in $t_2 = 10$ years

Continuous annual rate p = 8%, so r = 0.08

**Part 2: Formula.**

$PDV = Ke^{-rt}$

Since $t_2 = 2t_1$, the discount factor $e^{-rt_2}=(e^{-rt_1})^{2}$

Combined: $\\mathrm{PDV} = \\mathrm{PDV}_1 + \\mathrm{PDV}_2$

**Part 3: Solve.**

**1.** $e^{-0.4}$ ≈ 0.670320.

**2.** $e^{-0.8}$ ≈ 0.449329; note $(0.670320)^{2}$ ≈ 0.449329, confirming the squaring relationship.

**3.** $\\mathrm{PV}_1$ = 30,000 × 0.670320 ≈ \\$20{,}109.60.

**4.** $\\mathrm{PV}_2$ = 55,000 × 0.449329 ≈ \\$24{,}713.09.

**5.** Combined PDV = 20,109.60 + 24,713.09 ≈ \\$44{,}822.69.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

Year-2 revenue is the year-1 revenue multiplied once by the growth factor: 50×1.10 = \\$55.00 million, matching exactly.`,
      `**B) The expected revenue in year 5 is approximately \\$73.21 million.**  (true)

Counting from year 1 (which is simply a itself) up to year 5, the revenue has been multiplied by 1.10 four separate times - once for each step from year 1 to year 2, year 2 to year 3, and so on up to year 5. So the year-5 revenue equals $a \\times k^{4} = 50 \\times 1.4641 = 73.205$, which rounds to \\$73.21 million.`,
      `**C) The total revenue expected over the 5-year period is approximately \\$305.26 million.**  (true)

Adding up five terms that each grow by a factor of 1.10 over the previous one gives a total of $s_5 = a(k^{5}-1)/(k-1)$. Plugging in a=50 and k=1.10 gives $k^{5} = 1.61051$, so $s_5 = 50 \\times 0.61051/0.10 = 50 \\times 6.1051 = 305.255$, which rounds to \\$305.26 million.`,
      `**D) If revenue had instead remained flat at \\$50 million per year for 5 years, the total would have been \\$250 million - exactly \\$60.00 million less than the actual growth-scenario total.**  (false)

A flat schedule of \\$50 million every year for 5 years does total 50×5 = \\$250.00 million - that part checks out. But the true gap between that flat total and the actual growth total of \\$305.255 million is 305.255 - 250.00 = \\$55.26 million, not \\$60.00 million; the stated gap overstates the real difference by roughly \\$4.74 million.`,
      `**E) The total revenue expected over the 5-year period is approximately \\$328.86 million.**  (false)

Recomputing $s_5$ carefully with a=50, k=1.10, n=5 gives exactly 50×(1.61051-1)/0.10 = \\$305.255 million, which rounds to about \\$305.26 million, as already shown in part (c). The figure of \\$328.86 million simply does not match this calculation and is incorrect.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 61,
    solution_overview: `A newly launched e-commerce startup earns \\$50 million in revenue this year and expects revenue to grow by 10% annually for each of the next four years, forming a finite geometric series with first term a = \\$50 million and quotient k = 1.10 over n = 5 years.

**Part 1: Setup.**

a (year-1 revenue) = \\$50 million

k (annual growth quotient) = 1.10

n = 5 years

**Part 2: Formula.**

$s_n = a + ak + ak^{2} + \\timess + ak^{n-1} = a(k^{n}-1)/(k-1)$, for k ≠ 1

Term in year t (t = 1,…,5): $a k^{t-1}$

**Part 3: Solve.**

**1.** Year-2 revenue = a × k = 50×1.10 = \\$55.00 million.

**2.** Year-5 revenue: $a \\times k^{4} = 50 \\times (1.10)^{4} = 50 \\times 1.4641 = \\$73.205$ million → \\$73.21 million.

**3.** $k^{5} = 1.10^{5} = 1.61051$.

**4.** $s_5 = 50 \\times (1.61051 - 1)/(1.10 - 1) = 50 \\times 0.61051/0.10 = 50 \\times 6.1051$ → \\$305.255 million → \\$305.26 million.

**5.** Flat-revenue total (0% growth, k = 1) = 50 × 5 = \\$250.00 million.

**6.** Difference from actual growth total = 305.255 - 250.00 = \\$55.26 million (not \\$60.00 million).

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Convergence of an infinite geometric series depends only on the size of the ratio between consecutive terms, not on any other feature of the series. Here each month's profit is exactly half of the previous month's, so |k| = 0.5, comfortably below 1 - the running total therefore settles toward a fixed number instead of growing without bound as more months are added.`,
      `**B) The infinite sum of all future monthly profits is \\$4,000.00.**  (true)

When |k| is less than 1, the sum of every term added together forever, a + ak + $ak^{2}$ + × × × , works out to a/(1-k). Substituting a=2,000 and k=0.5 gives 2,000/0.5 = \\$4,000.00, the value the cumulative profit approaches as more and more months pass.`,
      `**C) The sum of just the first 4 months' profits is \\$3,750.00.**  (true)

The first four monthly profits are 2,000, then 2,000×0.5=1,000, then 2,000×0.25=500, then 2,000×0.125=250. Adding these directly gives 2,000+\\$1{,}000 + \\$500 + \\$250 = \\$3{,}750.00.`,
      `**D) The sum of the first 4 months' profits exceeds the infinite sum.**  (false)

Every term in this series is a positive dollar amount, so each additional month can only add to the running total, never subtract from it - the partial sum after any finite number of months must therefore sit below the full infinite total. Since \\$3,750.00 (first 4 months) is indeed less than \\$4,000.00 (all months combined), the first four months' total falls short of the infinite total by \\$250.00 rather than exceeding it.`,
      `**E) If the quotient were instead k = 1.5, the infinite series would still converge, to a sum of \\$-4,000.00.**  (false)

A ratio of k=1.5 has absolute value 1.5, which is greater than 1, so the successive terms of the series (2,000, 3,000, 4,500, 6,750, and so on) keep growing larger and larger instead of shrinking toward zero. A series whose terms grow without bound cannot settle on any single finite total, so it has no sum at all; calling it convergent to \\$-4,000.00, or to any specific number, misapplies the whole idea of a limiting sum.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 62,
    solution_overview: `A subscription box company just earned \\$2,000 in profit from its newest product line this month. Because customer renewals are expected to halve every month indefinitely, monthly profits are modeled as an infinite geometric series with first term a = \\$2,000 and quotient k = 0.5.

**Part 1: Setup.**

a (month-1 profit) = \\$2,000

k (monthly decay quotient) = 0.5

**Part 2: Formula.**

Infinite sum (|k| < 1): a + ak + $ak^{2}$ + × × × = a/(1 - k)

Finite sum of first n terms: $s_n = a(1 - k^{n})/(1 - k)$

**Part 3: Solve.**

**1.** |k| = 0.5 < 1, so the series converges.

**2.** Infinite sum = 2,000/(1 - 0.5) = 2,000/0.5 = \\$4,000.00.

**3.** First 4 terms: 2,000 + 1,000 + 500 + 250 = \\$3,750.00.

**4.** 3,750.00 < 4,000.00, so the partial sum does not exceed the infinite sum.

**5.** If k = 1.5, then |k| = 1.5 ≥ 1, so the series diverges and has no finite sum at all.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Since each year's deposit equals 90% of the prior year's deposit, the ratio between consecutive terms is a constant 0.90, and |0.90| is less than 1. That is exactly the condition needed for the running total of an infinite geometric series to approach a fixed limiting value instead of growing forever.`,
      `**B) The infinite sum of all deposits is \\$8,000.00.**  (true)

For a convergent infinite geometric series, the total of every term added together equals the first term divided by (1 minus the ratio). With a=\\$800 and k=0.90, that gives 800/(1-0.90) = 800/0.10 = \\$8,000.00 as the amount the cumulative deposits approach in the long run.`,
      `**C) The sum of the first 10 deposits is approximately \\$5,210.57.**  (true)

The sum of the first 10 deposits is given by $s_{10} = a \\times (1-k^{10})/(1-k)$. Since 0.90 raised to the 10th power is approximately 0.348678, this becomes 800×(1-0.348678)/0.10 = 800×6.513216 ≈ \\$5,210.57.`,
      `**D) The first 10 deposits together represent about 65% of the infinite total sum.**  (true)

Dividing the 10-year total by the full infinite total gives 5,210.57/8,000.00 ≈ 0.6513, or about 65.1%. Since that rounds to roughly 65%, describing the first 10 deposits as representing about 65% of everything ever deposited is an accurate summary.`,
      `**E) If the quotient were instead k = 1.10, the series would diverge.**  (true)

A ratio of k=1.10 has absolute value greater than 1, meaning each deposit would be larger than the one before it and would keep growing without any ceiling. A series whose terms increase forever can never settle down to a single finite total, so instead of converging it diverges: the running total simply keeps climbing and never levels off at any particular value.`,
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

**1.** |k| = 0.90 < 1, so the infinite series converges.

**2.** Infinite sum = 800/(1 - 0.90) = 800/0.10 = \\$8,000.00.

**3.** $0.90^{10}$ = 0.3486784401.

**4.** $s_{10} = 800 × (1 - 0.3486784401)/0.10 = 800 × 6.513215599 = \\$5{,}210.57$.

**5.** Ratio to infinite sum = 5,210.57/8,000.00 = 0.6513 ≈ 65.13% ≈ 65%.

**6.** If k = 1.10, |k| = 1.10 ≥ 1, so the infinite series diverges by definition.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

If a fixed 300,000 tons is removed every year from an 18,000,000-ton reserve, the number of years before the reserve reaches zero is simply the total reserve divided by the yearly extraction rate: 18,000,000/300,000 = 60 years.`,
      `**B) If extraction were instead held constant at 500,000 tons/year, the reserves would last 36 years.**  (true)

Using the same reasoning with a faster extraction rate of 500,000 tons per year gives 18,000,000/500,000 = 36 years - a higher annual rate depletes the same fixed reserve proportionally sooner.`,
      `**C) Constant-rate extraction over n years is the special k = 1 case of the geometric series, where the total simply equals the number of years multiplied by the yearly amount.**  (true)

When every year's extraction amount is identical (no growth at all), the sequence of yearly amounts is a geometric series whose ratio is exactly 1, meaning every term equals the first term a. Adding together n identical copies of a is just n lots of a, i.e., a × n, rather than requiring the general ratio-based formula, which would actually be undefined in this case since it involves dividing by (k-1)=0.`,
      `**D) If extraction instead grows by 5% per year for 10 years, total extraction over those 10 years is approximately 3,900,000 tons.**  (false)

If extraction instead starts at 300,000 tons and grows 5% every year for 10 years, the total extracted is $s_{10}$ = 300,000×($1.05^{10}$-1)/0.05. Since 1.05 to the 10th power is about 1.628895, this works out to 300,000×12.577893 ≈ 3,773,368 tons, noticeably below the 3,900,000 tons claimed.`,
      `**E) The 10-year total under 5% annual growth exceeds the 10-year total under constant 300,000-ton extraction by more than 1,000,000 tons.**  (false)

Comparing the growth scenario (≈3,773,368 tons over 10 years) to a flat 300,000-tons-per-year scenario over the same span (300,000×10 = 3,000,000 tons), the extra amount extracted specifically because of the 5% annual growth is 3,773,368 - 3,000,000 = 773,368 tons. That is well under 1,000,000 tons, so the claimed excess is too large.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 64,
    solution_overview: `A mining company estimates its lithium reserves at 18,000,000 tons. Current annual extraction is a constant 300,000 tons per year. Separately, analysts also model a scenario in which extraction instead starts at 300,000 tons and grows by 5% per year for 10 years, a finite geometric series with a = 300,000 and k = 1.05.

**Part 1: Setup.**

Reserves = 18,000,000 tons

Constant extraction a = 300,000 tons/year (part a); 500,000 tons/year (part b)

Growth scenario: a = 300,000 tons, k = 1.05, n = 10 years

**Part 2: Formula.**

Years to exhaustion at constant rate: t = Reserves / (annual extraction)

Constant terms (k = 1 case): $s_n = a \\times n$

Finite geometric series (k ≠ 1): $s_n = a(k^{n}-1)/(k-1)$

**Part 3: Solve.**

**1.** t = 18,000,000 / 300,000 = 60 years.

**2.** t = 18,000,000 / 500,000 = 36 years.

**3.** Constant extraction of a each year for n years sums to a × n - exactly the k = 1 case, where every term in the series is identical.

**4.** $1.05^{10}$ = 1.628894627.

**5.** $s_{10}$ = 300,000 × (1.628894627 - 1)/0.05 = 300,000 × 12.57789254 = 3,773,367.76 ≈ 3,773,368 tons.

**6.** Constant-rate 10-year total = 300,000 × 10 = 3,000,000 tons.

**7.** Difference = 3,773,368 - 3,000,000 = 773,368 tons, which is less than 1,000,000 tons.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Year-2 output is the year-1 output multiplied once by the decline factor: 180×0.97 = 174.6 million tons, matching exactly.`,
      `**B) The infinite total extracted over all future years, under the 3% decline, is 6,000 million tons.**  (true)

Because |0.97| is below 1, the infinite series of yearly outputs converges, and its total equals a/(1-k) = 180/(1-0.97) = 180/0.03 = 6,000 million tons, the theoretical maximum that could ever be extracted if the 3% annual decline continued indefinitely.`,
      `**C) The reserves will never be fully exhausted, leaving 3 billion tons as permanently “stranded assets.”**  (true)

Comparing the 6,000 million-ton theoretical maximum to the 9,000 million-ton physical reserve shows the reserve can never be fully used up, no matter how long extraction continues, because the running total keeps approaching 6,000 million tons but never reaches or exceeds 9,000 million tons. The difference, 9,000-6,000 = 3,000 million tons, simply remains in the ground indefinitely.`,
      `**D) If output instead declined 5% per year from the same 180 million-ton starting point, the total extracted would leave less coal stranded than the 3%-decline case.**  (false)

With a steeper 5% annual decline (k=0.95), the theoretical maximum total extraction becomes 180/(1-0.95) = 180/0.05 = 3,600 million tons, leaving 9,000-3,600 = 5,400 million tons unextracted - more stranded coal than the 3,000 million tons left behind under the milder 3% decline, not less. A steeper decline in output means the total amount ever pulled out is smaller, so more coal is left stranded, not less.`,
      `**E) Under the 3% decline scenario, cumulative extraction after just the first 20 years alone would already exceed the full infinite-horizon total of 6,000 million tons.**  (false)

Summing only the first 20 years under the 3% decline gives $s_{20}$ = 180×(1-$0.97^{20}$)/0.03. Since 0.97 to the 20th power is about 0.5438, this comes to roughly 180×15.207 ≈ 2,737 million tons - far below the full 6,000 million-ton theoretical total, since only a fraction of an ever-continuing series has accumulated after just 20 years, not in excess of it.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 65,
    solution_overview: `A coal mining region has 9,000 million tons, or 9 billion tons, of estimated reserves. This year's output is 180 million tons, and analysts project output will fall by 3% every year forever, an infinite geometric series with a = 180 million tons and k = 0.97. A second scenario considers a steeper 5% annual decline with k = 0.95 starting from the same output.

**Part 1: Setup.**

Reserves = 9,000 million tons

a (this year's output) = 180 million tons

k = 0.97 (3% annual decline); alternative k = 0.95 (5% annual decline)

**Part 2: Formula.**

Infinite sum (|k| < 1): a/(1 - k)

Finite sum of first n terms: $s_n = a(1 - k^{n})/(1 - k)$

**Part 3: Solve.**

**1.** Year-2 output = a × k = 180×0.97 = 174.6 million tons.

**2.** Infinite sum (3% decline) = 180/(1 - 0.97) = 180/0.03 = 6,000 million tons.

**3.** Stranded reserves (3% case) = 9,000 - 6,000 = 3,000 million tons (3 billion tons).

**4.** Infinite sum (5% decline) = 180/(1 - 0.95) = 180/0.05 = 3,600 million tons.

**5.** Stranded reserves (5% case) = 9,000 - 3,600 = 5,400 million tons - more than the 3,000 million tons stranded under the 3% case.

**6.** $0.97^{20}$ ≈ 0.5438.

**7.** $s_{20}$ = 180 × (1 - 0.5438)/0.03 = 180 × 15.207 ≈ 2,737.3 million tons, which is far less than 6,000 million tons.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Convergence depends only on the size of the ratio, |k|, not on whether that ratio is positive or negative. Here k=-0.5, so |k|=0.5, which is below 1 - the alternating series still settles down to a fixed total even though its terms flip sign at every step.`,
      `**B) The infinite sum of all adjustments is approximately \\$2,666.67.**  (true)

The infinite-sum formula a/(1-k) applies the same way regardless of the sign of k, as long as |k|<1. Substituting a=4,000 and k=-0.5 gives 4,000/(1-(-0.5)) = 4,000/1.5 ≈ \\$2,666.67.`,
      `**C) The sum of the first 4 adjustments is \\$3,000.00.**  (false)

The first four adjustments are 4,000, then 4,000×(-0.5)=-2,000, then 4,000×0.25=1,000, then 4,000×(-0.125)=-500. Adding these gives 4,000-2,000+1,000-500 = \\$2,500.00, not \\$3,000.00.`,
      `**D) The series necessarily diverges regardless of its magnitude.**  (false)

The sign of the ratio has no bearing on whether the series converges; only its magnitude matters. A negative ratio simply means the terms alternate between adding to and subtracting from the running total, and as long as |k| stays below 1, those swings shrink over time and the partial sums settle down - exactly what happens here with |k|=0.5, so the series converges rather than diverging.`,
      `**E) If the quotient were instead exactly k = -1, the partial sums would alternate forever between \\$4,000 and \\$0.**  (true)

With k=-1, each new term exactly cancels the one before it: starting from a, the running total becomes a, then 0, then a, then 0, and so on forever, oscillating between those two values without ever settling on one number. Since a limit requires the running total to approach a single fixed value, and this sequence keeps flipping back and forth instead, it never reaches a limit and the series diverges.`,
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

**1.** |k| = |-0.5| = 0.5 < 1, so the series converges.

**2.** Infinite sum = 4,000/(1 - (-0.5)) = 4,000/1.5 = \\$2,666.67.

**3.** First 4 terms: 4,000, then 4,000×(-0.5) = -2,000, then 4,000×0.25 = 1,000, then 4,000×(-0.125) = -500.

**4.** Sum of first 4 terms = 4,000 - 2,000 + 1,000 - 500 = \\$2,500.00 (not \\$3,000.00).

**5.** For k = -1: $s_n = a$ (odd n) or $s_n = 0$ (even n) - the partial sums oscillate forever and never settle on a limit.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

When every payment is identical, there is no changing ratio between consecutive terms - or equivalently, the ratio is exactly 1. Adding n copies of the same number a together is simply n×a, a much simpler formula than the ratio-based one needed when the terms actually change size from year to year, and it sidesteps the division-by-zero problem that the general formula would run into at k=1.`,
      `**B) The total contributions over the 15 years of equal \\$12 million payments equal \\$180.00 million.**  (true)

With 15 identical annual payments of \\$12 million each, the total is just 12×15 = \\$180.00 million; no compounding or ratio calculation is needed since nothing changes from one year to the next.`,
      `**C) Under the 4%-growth alternative, the 15-year total is approximately \\$240.11 million.**  (false)

Growing the same \\$12 million starting payment by 4% every year for 15 years gives $s_{15}$ = 12×($1.04^{15}$-1)/0.04. Since 1.04 to the 15th power is about 1.800944, this becomes 12×20.0236 ≈ \\$240.28 million, noticeably higher than the \\$240.11 million claimed.`,
      `**D) The 4%-growth 15-year total exceeds the no-growth total by more than \\$65.00 million.**  (false)

The actual gap between the 4%-growth total (≈ \\$240.28 million) and the flat total (\\$180.00 million) is \\$240.28 million - \\$180.00 million = \\$60.28 million. That is not more than \\$65.00 million, so the claim overstates how much extra the growth scenario contributes.`,
      `**E) Applying the general formula directly to the no-growth case would require dividing by zero.**  (true)

The general ratio-based formula for a finite geometric series has (k-1) in its denominator. If k were set to exactly 1 - the flat, no-growth case - that denominator becomes zero, and dividing by zero is undefined, so the formula simply cannot be evaluated as written. That is precisely why a separate, simpler rule - multiplying the constant payment by the number of years - has to be used whenever every term in the series is identical.`,
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

**2.** $1.04^{15}$ ≈ 1.800944.

**3.** $s_{15}$ (growth case) = 12 × (1.800944 - 1)/0.04 = 12 × 20.0236 = \\$240.28 million.

**4.** Difference = 240.28 - 180.00 = \\$60.28 million, which is not more than \\$65.00 million.

**5.** The general formula's denominator is (k - 1); at k = 1 this denominator is 0, so the formula is undefined and the k = 1 case must instead use $s_n = a \\times n$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

The second payment is the first payment multiplied once by the decay factor: 15,000×0.88 = \\$13,200.00, matching exactly.`,
      `**B) The total of the 8 finite payments is approximately \\$80,045.68.**  (true)

Summing the first 8 payments uses $s_8$ = a × (1-$k^{8}$)/(1-k). Since 0.88 to the 8th power is about 0.359635, this becomes 15,000×(1-0.359635)/0.12 = 15,000×5.336379 ≈ \\$80,045.68.`,
      `**C) If the payments continued forever under the same 88% quotient, the infinite total would be \\$130,000.00.**  (false)

Since |0.88|<1, letting the payments continue forever gives an infinite total of a/(1-k) = 15,000/(1-0.88) = 15,000/0.12 = \\$125,000.00, not \\$130,000.00.`,
      `**D) The finite 8-payment total represents more than 75% of the infinite total.**  (false)

Dividing the 8-payment total by the true infinite total gives 80,045.68/125,000.00 ≈ 0.6404, or about 64%. That is below 75%, so the claim that the finite total represents more than 75% of the infinite total is incorrect.`,
      `**E) If the decline rate were less steep, say k = 0.95 instead of 0.88, the infinite total would be smaller than the infinite total at k = 0.88.**  (false)

A larger ratio (0.95 instead of 0.88) means each payment shrinks more slowly from one year to the next, which makes the (1-k) denominator in the infinite-sum formula smaller - and a smaller denominator produces a larger result, not a smaller one. Concretely, 15,000/(1-0.95) = 15,000/0.05 = \\$300,000.00, far larger than the \\$125,000.00 obtained at k=0.88, so the claimed comparison has the direction backwards.`,
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

**1.** Payment 2 = a × k = 15,000×0.88 = \\$13,200.00.

**2.** $0.88^{8}$ ≈ 0.359635.

**3.** $s_8 = 15,000 × (1 - 0.359635)/0.12 = 15,000 × 5.336379 = \\$80{,}045.68$.

**4.** Infinite sum = 15,000/(1 - 0.88) = 15,000/0.12 = \\$125,000.00 (not \\$130,000.00).

**5.** Ratio: 80,045.68/125,000.00 = 0.6404 ≈ 64.04%, which is not more than 75%.

**6.** With k = 0.95: infinite sum = 15,000/(1 - 0.95) = 15,000/0.05 = \\$300,000.00, which is larger, not smaller, than the \\$125,000.00 obtained at k = 0.88.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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
      `If royalties instead grew at 0% for 12 years, the 12-year total would be \\$108,000.00, which is \\$62,794.15 less than the actual 8%-growth total.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The finite-sum formula still gives a valid, well-defined 12-year total.**  (true)

The finite-sum formula $s_n = a(k^{n}-1)/(k-1)$ only breaks down when its denominator, k-1, equals zero, which happens exactly when k=1. As long as k is anything other than 1 - including values greater than 1, such as 1.08 here - the formula is perfectly well defined and produces a valid total for any fixed, finite number of terms; the separate requirement that |k|<1 only matters when trying to add up infinitely many terms, not a specific finite count of them.`,
      `**B) The total royalties collected over the 12 years are approximately \\$175,000.00.**  (false)

Computing $s_{12}$ = 9,000×($1.08^{12}$-1)/0.08 requires 1.08 raised to the 12th power, which is about 2.518170. That gives 9,000×(2.518170-1)/0.08 = 9,000×18.977128 ≈ \\$170,794.15, not \\$175,000.00.`,
      `**C) The infinite-sum formula can still be legitimately applied to this series, yielding a meaningful total value.**  (false)

The infinite-sum formula a/(1-k) is only meaningful when the terms shrink toward zero as more are added, which requires |k| to be below 1. Here k=1.08 is greater than 1, so each successive royalty payment is larger than the last, growing without bound rather than shrinking - there is no finite total for the series to approach, so plugging these numbers into the infinite-sum formula produces a number with no real meaning, whether positive or negative.`,
      `**D) The royalty payment in year 12 alone is approximately \\$20,715.85.**  (false)

The 12th year's royalty equals the first payment multiplied by the ratio raised to the 11th power, since the first payment itself already corresponds to zero multiplications. Since 1.08 to the 11th power is about 2.331639, that gives 9,000×2.331639 ≈ \\$20,984.75, not \\$20,715.85.`,
      `**E) If royalties instead grew at 0% for 12 years, the 12-year total would be \\$108,000.00, which is \\$62,794.15 less than the actual 8%-growth total.**  (true)

Twelve flat annual payments of \\$9,000 with no growth at all would total 9,000×12 = \\$108,000.00. Comparing that to the actual 8%-growth total of about \\$170,794.15 gives a difference of \\$170{,}794.15 - \\$108{,}000.00 = \\$62{,}794.15, confirming the stated gap exactly.`,
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

**1.** $1.08^{12}$ ≈ 2.518170.

**2.** $s_{12} = 9{,}000 \\times (2.518170 - 1)/0.08 = 9{,}000 \\times 18.977128 = \\$170{,}794.15$.

**3.** $1.08^{11} = 2.518170/1.08 \\approx 2.331639$.

**4.** Year-12 payment = 9,000 × 2.331639 = \\$20,984.75.

**5.** Flat total = 9,000 × 12 = \\$108,000.00.

**6.** Difference = \\$170,794.15 - \\$108,000.00 = \\$62,794.15.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
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

Summing 6 years of revenue that grows 20% each year uses $s_6$ = 4×($1.20^{6}$-1)/0.20. Since 1.20 to the 6th power is 2.985984, this becomes 4×1.985984/0.20 = 4×9.92992 ≈ \\$39.72 million.`,
      `**B) Year-6 revenue alone is approximately \\$9.95 million.**  (true)

Year-6 revenue equals the starting revenue multiplied by the growth factor raised to the 5th power, since year 1 itself already corresponds to zero multiplications: $4 \\times 1.20^{5} = 4 \\times 2.48832 \\approx \\$9.95$ million.`,
      `**C) The finite 6-year series has no valid sum via the finite-sum formula.**  (false)

The finite geometric-series formula only fails to apply when the ratio equals exactly 1, since that would divide by zero; it works perfectly well for any other ratio, whether smaller or larger than 1, as long as only a fixed, finite number of terms are being added. Here k=1.20 is simply the growth factor over a fixed 6-year window, and the formula handles it without any issue - the restriction that |k| be below 1 only applies when summing infinitely many terms, not a finite set of them.`,
      `**D) Treating year-6 revenue as the first term of a new perpetuity with quotient k = 0.85, the terminal value is approximately \\$66.36 million.**  (true)

Treating the \\$9.95328 million of year-6 revenue as the starting payment of a new, separately declining perpetuity with ratio 0.85, the infinite total of that new stream is 9.95328/(1-0.85) = 9.95328/0.15 ≈ \\$66.36 million.`,
      `**E) Combining the 6-year finite total with the terminal perpetuity value gives a combined projected value of less than \\$100 million.**  (false)

Adding the 6-year finite total (\\$39.72 million) to the terminal perpetuity value (\\$66.36 million) gives \\$39.72 million + \\$66.36 million = \\$106.08 million, which is above \\$100 million, not below it.`,
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

**3.** $1.20^{5} = 2.48832$; year-6 revenue = 4 × 2.48832 = \\$9.95 million.

**4.** Terminal value = 9.95328/(1 - 0.85) = 9.95328/0.15 = \\$66.36 million.

**5.** Combined value = \\$39.72 million + \\$66.36 million = \\$106.08 million, which is not less than \\$100 million.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Regardless of what the actual first-month cost turns out to be, multiplying any given first-month figure by the 1.15 growth ratio gives the second month's cost; for a hypothetical \\$1,000 first month, that is 1,000×1.15 = \\$1,150.00, matching exactly.`,
      `**B) Solving for the first-month cost gives approximately \\$6,625.74.**  (true)

Rearranging the finite-sum formula to solve for the first term gives $a = s_6 \\times (k-1)/(k^{6}-1)$. Since 1.15 to the 6th power is about 2.313061, that becomes a = 58,000×0.15/1.313061 = 8,700/1.313061 ≈ \\$6,625.74.`,
      `**C) The 6th month's restocking cost is approximately \\$13,326.73.**  (true)

The 6th month's cost equals the first month's cost multiplied by the ratio raised to the 5th power, since month 1 itself already corresponds to zero multiplications: $6{,}625.74 \\times 1.15^{5} = 6{,}625.74 \\times 2.011357 \\approx \\$13{,}326.73$.`,
      `**D) The combined restocking cost for months 4 through 6 is approximately \\$37,930.00.**  (false)

Adding the individual costs for months 4, 5, and 6 - that is, $a \\times k^{3} + a \\times k^{4} + a \\times k^{5}$ - gives 6,625.74×(1.520875 + 1.749006 + 2.011357) = 6,625.74×5.281239 ≈ \\$34,992.12, not \\$37,930.00.`,
      `**E) If the same \\$58,000 total had instead been spread evenly, that flat monthly figure would exceed the actual first-month cost of \\$6,625.74 found under 15% growth.**  (true)

Splitting the same \\$58,000 total evenly across 6 months gives 58,000/6 ≈ \\$9,666.67 per month. Since the actual first month's cost under 15% growth was only about \\$6,625.74, and a growing schedule always starts below its own average (because the larger later months pull the average up), the flat monthly figure is indeed higher than the growth scenario's starting cost.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 71,
    solution_overview: `A retailer's monthly restocking cost is expected to grow 15% every month for 6 months due to supply-chain constraints, with quotient k = 1.15. Accounting projects that the total restocking cost over all 6 months will equal exactly \\$58,000. Management wants to know what the first month's cost, a, must have been to produce that total.

**Part 1: Setup.**

$s_6$ (total 6-month cost) = \\$58{,}000

k (monthly growth quotient) = 1.15

n = 6 months

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$ ⇒ $a = s_n \\times (k - 1)/(k^{n}-1)$

Term in month t: $a k^{t-1}$

**Part 3: Solve.**

**1.** Hypothetical: if month-1 cost were \\$1,000, month-2 cost = 1,000×1.15 = \\$1,150.00.

**2.** $k^{6} = 1.15^{6} = 2.313060766$.

**3.** a = 58,000 × 0.15/(2.313060766 - 1) = 8,700/1.313060766 = \\$6,625.74.

**4.** Month-6 cost: $a \\times k^{5} = 6{,}625.74 \\times 2.011357188 = \\$13{,}326.73$.

**5.** Months 4-6 cost: $a(k^{3}+k^{4}+k^{5}) = 6{,}625.74 \\times (1.520875 + 1.749006 + 2.011357) = 6{,}625.74 \\times 5.281239 = \\$34{,}992.12$.

**6.** Flat monthly figure = 58,000/6 = \\$9,666.67, which is indeed greater than \\$6,625.74.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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
      `If the decline were instead steeper, at k = 0.95, the infinite total would be \\$10,000,000.00, which is more than half of the original \\$25,000,000.00 infinite total.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The payout in the second year is \\$490,000.00.**  (true)

Year-2 payout is the year-1 payout multiplied once by the decline factor: 500,000×0.98 = \\$490,000.00, matching exactly.`,
      `**B) The infinite total of all future payouts converges to \\$25,000,000.00.**  (true)

Because |0.98| is below 1, letting the payouts continue forever produces a finite total of a/(1-k) = 500,000/(1-0.98) = 500,000/0.02 = \\$25,000,000.00, the theoretical ceiling on everything ever paid out.`,
      `**C) The cumulative payout over just the first 10 years is approximately \\$4,800,000.00.**  (false)

Summing only the first 10 years gives $s_{10}$ = 500,000×(1-$0.98^{10}$)/0.02. Since 0.98 to the 10th power is about 0.817073, this becomes 500,000×9.146360 ≈ \\$4,573,179.83, not \\$4,800,000.00.`,
      `**D) The first 10 years of payouts represent approximately 18% of the full infinite-horizon total.**  (true)

Dividing the 10-year total by the full infinite total gives 4,573,179.83/25,000,000.00 ≈ 0.1829, or about 18.3% - close enough to describe as roughly 18%.`,
      `**E) If the decline were instead steeper, at k = 0.95, the infinite total would be \\$10,000,000.00, which is more than half of the original \\$25,000,000.00 infinite total.**  (false)

A steeper 5% annual decline (k=0.95) gives an infinite total of 500,000/(1-0.95) = 500,000/0.05 = \\$10,000,000.00. Half of the original \\$25,000,000.00 infinite total is \\$12,500,000.00, and \\$10,000,000.00 sits below that halfway point, not above it, so the comparison in the claim has the direction backwards.`,
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

**1.** Year-2 payout = a × k = 500,000×0.98 = \\$490,000.00.

**2.** Infinite sum = 500,000/(1 - 0.98) = 500,000/0.02 = \\$25,000,000.00.

**3.** $0.98^{10}$ = 0.817072807.

**4.** $s_{10} = 500,000 × (1 - 0.817072807)/0.02 = 500,000 × 9.146360 = \\$4{,}573{,}179.83$.

**5.** Ratio = 4,573,179.83/25,000,000.00 = 0.18293 ≈ 18.29% ≈ 18%.

**6.** Infinite sum at k = 0.95: 500,000/(1 - 0.95) = 500,000/0.05 = \\$10,000,000.00.

**7.** Half of the original infinite sum = 25,000,000.00/2 = \\$12,500,000.00; since 10,000,000.00 < 12,500,000.00, it is NOT more than half.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
  },
  {
    id: `math-11-73`,
    case_id: `MATH 11.73`,
    title: `Marketing Budget: Solving for the Break-Point Year`,
    subsection: `11.4`,
    context: `A company's marketing budget starts at \\$200,000 this year and grows 12% every year with a = \\$200,000 and k = 1.12, a finite geometric series. The CFO wants to know the smallest number of years n after which the cumulative total marketing spend first surpasses \\$3,000,000.`,
    statements: [
      `The marketing budget in year 2 is \\$224,000.00.`,
      `The cumulative spend after 9 years is approximately \\$2,955,131.26, which is still below the \\$3,000,000 target.`,
      `The cumulative spend after 10 years is approximately \\$3,600,000.00.`,
      `The smallest n for which cumulative spend surpasses \\$3,000,000 is n = 9.`,
      `If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would be approximately \\$2,897,312.49, which would still surpass the \\$3,000,000 target within 10 years.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The marketing budget in year 2 is \\$224,000.00.**  (true)

Year-2 budget is the year-1 budget multiplied once by the growth factor: 200,000×1.12 = \\$224,000.00, matching exactly.`,
      `**B) The cumulative spend after 9 years is approximately \\$2,955,131.26, which is still below the \\$3,000,000 target.**  (true)

Summing the first 9 years gives $s_9$ = 200,000×($1.12^{9}$-1)/0.12. Since 1.12 to the 9th power is about 2.773079, this becomes 200,000×14.775656 ≈ \\$2,955,131.26, which indeed falls short of the \\$3,000,000 target.`,
      `**C) The cumulative spend after 10 years is approximately \\$3,600,000.00.**  (false)

Summing the first 10 years instead gives $s_{10}$ = 200,000×($1.12^{10}$-1)/0.12. Since 1.12 to the 10th power is about 3.105848, this becomes 200,000×17.548736 ≈ \\$3,509,747.01, not \\$3,600,000.00.`,
      `**D) The smallest n for which cumulative spend surpasses \\$3,000,000 is n = 9.**  (false)

Since the 9-year total (≈ \\$2,955,131.26) is still below \\$3,000,000 but the 10-year total (≈ \\$3,509,747.01) is above it, the cumulative spend crosses the \\$3,000,000 threshold sometime during year 10. That means the smallest whole number of years for which the running total exceeds \\$3,000,000 is n=10, not n=9.`,
      `**E) If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would be approximately \\$2,897,312.49, which would still surpass the \\$3,000,000 target within 10 years.**  (false)

With a slower 8% growth rate, the 10-year total is $s_{10}$ = 200,000×($1.08^{10}$-1)/0.08. Since 1.08 to the 10th power is about 2.158925, this comes to 200,000×14.486562 ≈ \\$2,897,312.49, which is still below \\$3,000,000 - so under this slower growth rate, the target would not actually be reached within 10 years.`,
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

**1.** Year-2 budget = a × k = 200,000×1.12 = \\$224,000.00.

**2.** $1.12^{9} = 2.773078757$; $s_9 = 200{,}000 \\times (2.773078757-1)/0.12 = 200{,}000 \\times 14.775656 = \\$2{,}955{,}131.26$.

**3.** $1.12^{10} = 3.105848289$; $s_{10} = 200{,}000 \\times (3.105848289-1)/0.12 = 200{,}000 \\times 17.548736 = \\$3{,}509{,}747.01$.

**4.** Since $s_9 \\approx \\$2{,}955{,}131.26$ < \\$3{,}000{,}000 and $s_{10} \\approx \\$3{,}509{,}747.01$ > \\$3{,}000{,}000, the smallest n at which the target is surpassed is n = 10, not n = 9.

**5.** $1.08^{10} = 2.158924997$; $s_{10}$ (at $k=1.08$) = 200,000 × (2.158924997-1)/0.08 = 200,000 × 14.486562 = \\$2,897,312.49, which is below \\$3,000,000.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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
      `If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be \\$500,000.00, which is less than half of the original \\$1,250,000.00 infinite total.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The second grant in the sequence is \\$48,000.00.**  (true)

The second grant is the first grant multiplied once by the decline factor: 50,000×0.96 = \\$48,000.00, matching exactly.`,
      `**B) The infinite total of all future grants is \\$1,250,000.00.**  (true)

Because |0.96|<1, letting the grants continue indefinitely produces a finite total of a/(1-k) = 50,000/(1-0.96) = 50,000/0.04 = \\$1,250,000.00.`,
      `**C) The total of the first 15 grants is approximately \\$572,392.03.**  (true)

Summing just the first 15 grants gives $s_{15}$ = 50,000×(1-$0.96^{15}$)/0.04. Since 0.96 to the 15th power is about 0.542086, this becomes 50,000×11.447840 ≈ \\$572,392.03.`,
      `**D) The first 15 grants represent less than 40% of the infinite total.**  (false)

Dividing the 15-grant total by the full infinite total gives 572,392.03/1,250,000.00 ≈ 0.4579, or about 45.8% - that is above 40%, not below it, so the claim understates how large a share the first 15 grants actually represent.`,
      `**E) If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be \\$500,000.00, which is less than half of the original \\$1,250,000.00 infinite total.**  (true)

A steeper 10% annual decline (k=0.90) gives an infinite total of 50,000/(1-0.90) = 50,000/0.10 = \\$500,000.00. Half of the original \\$1,250,000.00 total is \\$625,000.00, and \\$500,000.00 is indeed below that halfway mark, confirming the comparison.`,
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

**1.** Grant 2 = a × k = 50,000×0.96 = \\$48,000.00.

**2.** Infinite sum = 50,000/(1 - 0.96) = 50,000/0.04 = \\$1,250,000.00.

**3.** $0.96^{15}$ = 0.542086380.

**4.** $s_{15} = 50,000 × (1 - 0.542086380)/0.04 = 50,000 × 11.447840 = \\$572{,}392.03$.

**5.** Ratio = 572,392.03/1,250,000.00 = 0.45791 ≈ 45.79%, which is NOT less than 40%.

**6.** Infinite sum at k = 0.90: 50,000/(1 - 0.90) = 50,000/0.10 = \\$500,000.00; half of \\$1,250,000.00 is \\$625,000.00, and \\$500,000.00 < \\$625,000.00.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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

The second quarter's yield is the first quarter's yield multiplied once by the decline factor: 10,000×0.98 = 9,800.00 lbs, matching exactly.`,
      `**B) The total yield over the full 5-year span is approximately 166,196.01 lbs.**  (true)

Summing all 20 quarters gives $s_{20}$ = 10,000×(1-$0.98^{20}$)/0.02. Since 0.98 to the 20th power is about 0.667608, this becomes 10,000×16.619601 ≈ 166,196.01 lbs.`,
      `**C) Substituting n = 5 into the same formula gives 48,039.60 lbs, and this would be the correct 5-year total.**  (false)

Plugging n=5 into the same formula instead of n=20 does produce 48,039.60 lbs as a number, but that figure only represents the total of the first 5 quarters (about 1.25 years), not the full 5-year, 20-quarter span. Using the wrong exponent gives a technically computable but practically meaningless answer to the actual 5-year question, whose correct total is 166,196.01 lbs.`,
      `**D) The yield in the 20th quarter alone is approximately 6,812.33 lbs.**  (true)

The 20th quarter's yield equals the first quarter's yield multiplied by the ratio raised to the 19th power: $10{,}000 \\times 0.98^{19} \\approx 10{,}000 \\times 0.681230 \\approx 6{,}812.33$ lbs.`,
      `**E) If the 2%-per-quarter decline continued forever instead of stopping after 20 quarters, the theoretical infinite total of 500,000.00 lbs would be less than the actual 20-quarter total.**  (false)

If the 2% quarterly decline continued forever instead of stopping at 20 quarters, the theoretical total would be 10,000/(1-0.98) = 10,000/0.02 = 500,000.00 lbs. Since every additional quarter beyond the 20th still adds a small positive amount, the infinite total must be at least as large as the 20-quarter partial total, and indeed 500,000.00 lbs is well above 166,196.01 lbs, not below it.`,
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

**1.** Quarter-2 yield = a × k = 10,000×0.98 = 9,800.00 lbs.

**2.** $0.98^{20}$ = 0.667607972.

**3.** $s_{20}$ = 10,000 × (1 - 0.667607972)/0.02 = 10,000 × 16.619601 = 166,196.01 lbs.

**4.** Using the wrong exponent, n = 5: $0.98^{5}$ = 0.903920800; $s_{5,\\mathrm{wrong}}$ = 10,000 × (1-0.903921)/0.02 = 10,000×4.80396 = 48,039.60 lbs - this is NOT the correct 20-quarter total; it only covers the first 5 quarters (about 1.25 years), not 5 years.

**5.** Quarter-20 yield: $a \\times k^{19} = 10{,}000 \\times 0.681230 = 6{,}812.33$ lbs.

**6.** Infinite (hypothetical) sum = 10,000/(1 - 0.98) = 10,000/0.02 = 500,000.00 lbs, which is MORE than the 166,196.01 lbs 20-quarter total, not less.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Summing Territory A's 8 years of royalties gives $s_{A,8} = 80{,}000 \\times (1.06^{8}-1)/0.06$. Since 1.06 to the 8th power is about 1.593848, this becomes 80,000×9.897468 ≈ \\$791,797.43.`,
      `**B) Territory B's 8-year total royalties are approximately \\$815,382.06.**  (true)

Summing Territory B's 8 years of royalties gives $s_{B,8} = 95{,}000 \\times (1.02^{8}-1)/0.02$. Since 1.02 to the 8th power is about 1.171659, this becomes 95,000×8.582969 ≈ \\$815,382.06.`,
      `**C) Territory A's 8-year total royalties exceed Territory B's 8-year total.**  (false)

Comparing the two 8-year totals directly, \\$791,797.43 for Territory A is actually smaller than \\$815,382.06 for Territory B - Territory B's higher starting royalty outweighs Territory A's faster growth rate over this particular 8-year window, so Territory A's total does not exceed Territory B's; it falls short of it.`,
      `**D) In year 8 alone, Territory A's royalty payment of approximately \\$120,290.42 exceeds Territory B's year-8 payment of approximately \\$109,125.14.**  (true)

Territory A's year-8 payment is $80{,}000 \\times 1.06^{7} \\approx 80{,}000 \\times 1.503630$ ≈ \\$120,290.42, while Territory B's year-8 payment is $95{,}000 \\times 1.02^{7} \\approx 95{,}000 \\times 1.148686$ ≈ \\$109,125.14. By year 8, repeated 6% compounding has pushed Territory A's individual payment above Territory B's, even though Territory A's running 8-year total still lags behind - a genuine subtlety in which the faster-growing stream overtakes the slower one term-by-term before it overtakes it in cumulative total.`,
      `**E) Territory B's 8-year total exceeds Territory A's 8-year total by more than \\$30,000.**  (false)

The actual difference between the two totals is \\$815{,}382.06 - \\$791{,}797.43 = \\$23{,}584.63, which is below \\$30,000, not above it.`,
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

**1.** $1.06^{8} = 1.593848075$; $s_{A,8} = 80{,}000 \\times (1.593848075-1)/0.06 = 80{,}000 \\times 9.897468 = \\$791{,}797.43$.

**2.** $1.02^{8} = 1.171659381$; $s_{B,8} = 95{,}000 \\times (1.171659381-1)/0.02 = 95{,}000 \\times 8.582969 = \\$815{,}382.06$.

**3.** Comparing totals: \\$791{,}797.43 (A) < \\$815{,}382.06 (B), so Territory A's total does NOT exceed Territory B's.

**4.** Year-8 payment A: $80{,}000 \\times 1.06^{7} = 80{,}000 \\times 1.503630 = \\$120{,}290.42$.

**5.** Year-8 payment B: $95{,}000 \\times 1.02^{7} = 95{,}000 \\times 1.148686 = \\$109{,}125.14$; indeed \\$120{,}290.42 > \\$109{,}125.14.

**6.** Difference (B - A) = \\$815{,}382.06 - \\$791{,}797.43 = \\$23{,}584.63, which is NOT more than \\$30{,}000.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
  },
  {
    id: `math-11-77`,
    case_id: `MATH 11.77`,
    title: `Diminishing Marginal Returns from Advertising Spend`,
    subsection: `11.4`,
    context: `An analyst models the marginal benefit of the n-th batch of advertising spend as $a_n = 5{,}000/n^{p}$ dollars, and wants to know, for different values of the exponent p, whether the infinite total marginal benefit $\\sum a_n$ converges, using the rule that $\\sum 1/n^{p}$ converges if and only if p > 1.`,
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

Raising 4 to the power 1.5 means multiplying 4 by its own square root: 4×√4 = 4×2 = 8. Dividing the numerator by that gives 5,000/8 = \\$625.00, not \\$650.00.`,
      `**B) With p = 1.5, the infinite series converges to a finite total value.**  (true)

A series of the form $\\sum 1/n^{p}$ behaves in a very specific way depending on how large p is: when p is bigger than 1, the terms shrink toward zero quickly enough that adding infinitely many of them still produces a finite total, but when p is 1 or smaller, the terms don't shrink fast enough and the running total grows without bound. Since p=1.5 here is greater than 1, this series falls into the convergent category and does approach a finite total.`,
      `**C) If instead p = 1, the series would still converge, just to a larger total than the p = 1.5 case.**  (false)

Setting p=1 turns this into the classic series 1 + 1/2 + 1/3 + 1/4 + × × × , scaled by 5,000. Even though each individual term keeps getting smaller, grouping the terms into blocks - the next 2 terms, then the next 4, then the next 8, and so on - shows that each such block's sum stays above 1/2 no matter how far out you go, so infinitely many blocks add up to something unbounded. This series does not converge to a larger sum than the p=1.5 case; it has no finite sum at all.`,
      `**D) $a_{100} = \\$5.00$, and this alone is enough to guarantee that the series $\\sum a_n$ converges.**  (false)

The individual term $a_{100} = 5{,}000/100^{1.5} = 5{,}000/1{,}000 = \\$5.00$ is calculated correctly. However, terms shrinking toward zero only tells you that a series might converge - it does not by itself guarantee convergence. The p=1 case in part (c) is the perfect illustration: its terms also shrink toward zero, yet the series still fails to add up to any finite total, so the shrinking-terms observation alone cannot settle the question either way.`,
      `**E) With p = 0.5, the series diverges, even though the individual terms still tend to 0 as n → ∞.**  (true)

With p=0.5, which is not greater than 1, this series falls outside the convergent range and therefore has no finite total, even though the individual terms 5,000/√n do get smaller and smaller as n increases. This mirrors the p=1 case exactly: shrinking terms are a necessary feature of any convergent series, but on their own they are never sufficient to force convergence.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 77,
    solution_overview: `An analyst models the marginal benefit of the n-th batch of advertising spend as $a_n = 5{,}000/n^{p}$ dollars, and wants to know, for different values of the exponent p, whether the infinite total marginal benefit $\\sum a_n$ converges, using the rule that $\\sum 1/n^{p}$ converges if and only if p > 1.

**Part 1: Setup.**

$a_n = 5{,}000/n^{p}$

p = 1.5 (primary); p = 1 and p = 0.5 (comparison scenarios)

**Part 2: Formula.**

p-series rule: $\\sum_{n=1}^{\\infty} 1/n^{p}$ is convergent ⇔ p > 1

Necessary (not sufficient) condition for convergence: if $\\sum a_n$ converges, then $\\lim_{n\\to\\infty} a_n$ = 0

**Part 3: Solve.**

**1.** $4^{1.5} = 4 \\times \\sqrt{4} = 4 \\times 2 = 8$; $a_4 = 5{,}000/8 = \\$625.00$ (not \\$650.00).

**2.** p = 1.5 > 1, so by the p-series rule $\\sum 5{,}000/n^{1.5}$ converges to some finite value.

**3.** At p = 1, the series ∑5,000/n is exactly the classic harmonic-series pattern, which can be shown to diverge by grouping terms into blocks that each sum to more than 1/2 - it does NOT converge to a larger sum; it has no finite sum at all.

**4.** $100^{1.5} = 100 \\times \\sqrt{100} = 100 \\times 10 = 1{,}000$; $a_{100} = 5{,}000/1{,}000 = \\$5.00$ - correct value, but terms tending to 0 is necessary, NOT sufficient, for convergence (the harmonic series is the standard counterexample).

**5.** p = 0.5 ≤ 1, so by the p-series rule $\\sum 5{,}000/n^{0.5}$ diverges, even though $a_n = 5{,}000/\\sqrt{n} \\to 0$ as n → ∞.

**Answer.** A=FALSE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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
      `Extending the horizon to 20 years, cumulative profit falls to approximately \\$78,405.66, which is smaller than the 12-year cumulative profit of \\$199,331.90.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The cumulative 12-year revenue is approximately \\$1,902,375.45.**  (true)

Summing 12 years of revenue growing 1% annually gives $s_{\\mathrm{rev},12} = 150{,}000 \\times (1.01^{12}-1)/0.01$. Since 1.01 to the 12th power is about 1.126825, this becomes 150,000×12.682503 ≈ \\$1,902,375.45.`,
      `**B) The cumulative 12-year maintenance cost is approximately \\$1,703,043.55.**  (true)

Summing 12 years of maintenance cost growing 3% annually gives $s_{\\mathrm{cost},12} = 120{,}000 \\times (1.03^{12}-1)/0.03$. Since 1.03 to the 12th power is about 1.425761, this becomes 120,000×14.192030 ≈ \\$1,703,043.55.`,
      `**C) The cumulative 12-year profit is approximately \\$199,331.90.**  (true)

Subtracting the cumulative cost from the cumulative revenue gives \\$1{,}902{,}375.45 - \\$1{,}703{,}043.55 = \\$199{,}331.90 as the total profit accumulated over the 12-year window.`,
      `**D) In year 12 alone, revenue of approximately \\$167,350.25 still exceeds maintenance cost of approximately \\$166,108.06, leaving a net positive of about \\$1,242.19.**  (true)

In year 12 alone, revenue is $150{,}000 \\times 1.01^{11} \\approx 150{,}000 \\times 1.115668$ ≈ \\$167{,}350.25, while maintenance cost is $120{,}000 \\times 1.03^{11} \\approx 120{,}000 \\times 1.384234$ ≈ \\$166{,}108.06. Subtracting gives a net of \\$167{,}350.25 - \\$166{,}108.06 ≈ \\$1{,}242.19 - revenue is still ahead, but only barely, showing how much the gap between the two streams has narrowed by this point.`,
      `**E) Extending the horizon to 20 years, cumulative profit falls to approximately \\$78,405.66, which is smaller than the 12-year cumulative profit of \\$199,331.90.**  (true)

Extending the same calculations to 20 years gives a cumulative revenue of about \\$3,302,850.60 and a cumulative cost of about \\$3,224,444.94, for a 20-year profit of roughly \\$78,405.66, smaller than the 12-year profit of \\$199,331.90. This happens because maintenance cost compounds at the faster 3% rate while revenue compounds at only 1%; over a longer horizon the faster-growing cost stream eats into more and more of each year's revenue, so even though annual revenue is still ahead of annual cost as late as year 12, the cumulative profit advantage built up in the earlier years gradually erodes as the cost curve catches up.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 78,
    solution_overview: `A solar farm's annual energy revenue starts at \\$150,000 and grows 1% per year with a = \\$150,000 and k = 1.01, while its annual maintenance cost starts at \\$120,000 but grows faster, at 3% per year with a = \\$120,000 and k = 1.03. Both are finite geometric series. Management compares cumulative profit, revenue total minus cost total, over both a 12-year and a 20-year horizon.

**Part 1: Setup.**

Revenue: a = \\$150,000, k = 1.01

Maintenance cost: a = \\$120,000, k = 1.03

Horizons: n = 12 years and n = 20 years

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$

Cumulative profit: $s_{\\mathrm{revenue}} - s_{\\mathrm{cost}}$

Term in year t: $a k^{t-1}$

**Part 3: Solve.**

**1.** $1.01^{12} = 1.126825030$; $s_{\\mathrm{rev},12} = 150{,}000 \\times (1.126825030-1)/0.01 = 150{,}000 \\times 12.682503 = \\$1{,}902{,}375.45$.

**2.** $1.03^{12} = 1.425760887$; $s_{\\mathrm{cost},12} = 120{,}000 \\times (1.425760887-1)/0.03 = 120{,}000 \\times 14.192030 = \\$1{,}703{,}043.55$.

**3.** Cumulative 12-year profit = \\$1{,}902{,}375.45 - \\$1{,}703{,}043.55 = \\$199{,}331.90.

**4.** Year-12 revenue: $150{,}000 \\times 1.01^{11} = 150{,}000 \\times 1.115668 = \\$167{,}350.25$.

**5.** Year-12 cost: $120{,}000 \\times 1.03^{11} = 120{,}000 \\times 1.384234 = \\$166{,}108.06$.

**6.** Net = \\$167{,}350.25 - \\$166{,}108.06 = \\$1{,}242.19.

**7.** $1.01^{20} = 1.220190040$; $s_{\\mathrm{rev},20} = 150{,}000 \\times (0.220190040)/0.01 = \\$3{,}302{,}850.60$.

**8.** $1.03^{20} = 1.806111235$; $s_{\\mathrm{cost},20} = 120{,}000 \\times (0.806111235)/0.03 = \\$3{,}224{,}444.94$.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

Since the ratio in the recession scenario is 0.94, and |0.94| is below 1, letting the shrinking cash flows continue forever produces a finite total of a/(1-k) = 2,400,000/(1-0.94) = 2,400,000/0.06 = \\$40,000,000.00.`,
      `**B) Under the same recession scenario, the cumulative cash flow over just the first 15 years is approximately \\$22,000,000.00.**  (false)

Summing just the first 15 years of the recession scenario gives $s_{15}$ = 2,400,000×(1-$0.94^{15}$)/0.06. Since 0.94 to the 15th power is about 0.395292, this becomes 2,400,000×10.078470 ≈ \\$24,188,328.05, not \\$22,000,000.00.`,
      `**C) The 15-year recession total represents approximately 75% of the full infinite-horizon recession total.**  (false)

Dividing the 15-year total by the full infinite total gives 24,188,328.05/40,000,000.00 ≈ 0.6047, or about 60%, not 75%.`,
      `**D) Under the recovery scenario, the cumulative cash flow over the 7-year period, approximately \\$20,145,210.36, exceeds the full infinite-horizon recession total of \\$40,000,000.00.**  (false)

Summing the 7-year recovery scenario gives $s_7$ = 2,400,000×($1.06^{7}$-1)/0.06. Since 1.06 to the 7th power is about 1.503630, this becomes 2,400,000×8.393838 ≈ \\$20,145,210.36, well below the \\$40,000,000.00 infinite recession total, not above it.`,
      `**E) In year 7 of the recovery scenario alone, cash flow is approximately \\$2,900,000.00.**  (false)

The 7th year of the recovery scenario alone is $2{,}400{,}000 \\times 1.06^{6} \\approx 2{,}400{,}000 \\times 1.418519 \\approx \\$3{,}404{,}445.87$, not \\$2,900,000.00.`,
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

**1.** Infinite recession sum = 2,400,000/(1 - 0.94) = 2,400,000/0.06 = \\$40,000,000.00.

**2.** $0.94^{15} = 0.395291799$; $s_{15} = 2{,}400{,}000 \\times (1-0.395291799)/0.06 = 2{,}400{,}000 \\times 10.078470 = \\$24{,}188{,}328.05$ (not \\$22,000,000.00).

**3.** Ratio = 24,188,328.05/40,000,000.00 = 0.60471 ≈ 60.47% (not 75%).

**4.** $1.06^{7} = 1.503630259$; $s_7 = 2{,}400{,}000 \\times (1.503630259-1)/0.06 = 2{,}400{,}000 \\times 8.393838 = \\$20{,}145{,}210.36$; this is LESS than the infinite recession total of \\$40,000,000.00, not more.

**5.** Year-7 recovery cash flow: $2{,}400{,}000 \\times 1.06^{6} = 2{,}400{,}000 \\times 1.418519 = \\$3{,}404{,}445.87$ (not \\$2,900,000.00).

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-80`,
    case_id: `MATH 11.80`,
    title: `Capstone: A Three-Tranche Loan Portfolio and a Convergence Trap`,
    subsection: `11.4`,
    context: `A private lender values a portfolio of three loan tranches, valued in nominal undiscounted dollars, adding declining and growing streams together just as ordinary fixed amounts. Tranche 1 pays equal annual coupons of \\$25,000 for 9 years in the degenerate k = 1 case. Tranche 2 pays a growing coupon starting at \\$18,000, increasing 7% per year for 9 years with a = \\$18,000 and k = 1.07. Tranche 3 is a perpetual royalty starting at \\$30,000 that declines 8% per year forever with a = \\$30,000 and k = 0.92. Separately, an analyst proposes valuing a symbolic annual fee stream $f_n = 1{,}000/n$ dollars for n = 1, 2, 3, ….`,
    statements: [
      `Tranche 1 totals exactly \\$225,000.00.`,
      `Tranche 2 totals approximately \\$215,603.80.`,
      `Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00, making it the single largest of the three tranches.`,
      `Tranche 3 must be excluded from any combined valuation, meaning the portfolio's correct combined total is just \\$440,603.80.`,
      `$f_{100} = \\$10.00$, and this alone is sufficient to guarantee that the fee stream converges to a finite total.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Tranche 1 totals exactly \\$225,000.00.**  (true)

When every one of the 9 annual coupons is identical at \\$25,000, there is no changing ratio to apply - the total is simply the number of years multiplied by the constant amount: 25,000×9 = \\$225,000.00.`,
      `**B) Tranche 2 totals approximately \\$215,603.80.**  (true)

Summing 9 years of a coupon that grows 7% annually gives $s = 18{,}000 \\times (1.07^{9}-1)/0.07$. Since 1.07 to the 9th power is about 1.838459, this becomes 18,000×11.977989 ≈ \\$215,603.80.`,
      `**C) Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00, making it the single largest of the three tranches.**  (true)

Since the ratio 0.92 has absolute value below 1, letting this royalty stream continue forever gives a finite total of 30,000/(1-0.92) = 30,000/0.08 = \\$375,000.00. Comparing all three tranches - \\$225,000.00, \\$215,603.80, and \\$375,000.00 - the perpetual royalty stream is indeed the largest of the three, even though it starts with the smallest single payment; over an unlimited horizon, a slowly-declining stream can accumulate more value than either finite stream.`,
      `**D) Tranche 3 must be excluded from any combined valuation, meaning the portfolio's correct combined total is just \\$440,603.80.**  (false)

There is nothing that prevents a convergent infinite series from being added to finite sums - once a series has a specific, finite total, that total behaves just like any other fixed dollar amount and can be combined with other fixed amounts through ordinary addition. Excluding Tranche 3 and reporting only \\$225,000.00 + \\$215,603.80 = \\$440,603.80 leaves out \\$375,000.00 of value that is just as real and just as calculable as the other two tranches; the correct combined total, including all three, is \\$225,000.00 + \\$215,603.80 + \\$375,000.00 = \\$815,603.80.`,
      `**E) $f_{100} = \\$10.00$, and this alone is sufficient to guarantee that the fee stream converges to a finite total.**  (false)

The individual term $f_{100} = 1{,}000/100 = \\$10.00$ is calculated correctly, and it is true that these terms keep shrinking toward zero as n grows. But shrinking toward zero is only a necessary condition for convergence, never a sufficient one - a series can have terms that vanish in the limit and still fail to add up to any finite total. In fact, $f_n = 1{,}000/n$ is exactly 1,000 times the series 1+1/2+1/3+ × × × , which is the standard example of a series whose terms shrink to zero while its running total still grows without any upper bound. The analyst's reasoning is flawed, and no such guarantee of a finite total actually exists here.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 80,
    solution_overview: `A private lender values a portfolio of three loan tranches, valued in nominal undiscounted dollars, adding declining and growing streams together just as ordinary fixed amounts. Tranche 1 pays equal annual coupons of \\$25,000 for 9 years in the degenerate k = 1 case. Tranche 2 pays a growing coupon starting at \\$18,000, increasing 7% per year for 9 years with a = \\$18,000 and k = 1.07. Tranche 3 is a perpetual royalty starting at \\$30,000 that declines 8% per year forever with a = \\$30,000 and k = 0.92. Separately, an analyst proposes valuing a symbolic annual fee stream $f_n = 1{,}000/n$ dollars for n = 1, 2, 3, ….

**Part 1: Setup.**

Tranche 1: a = \\$25,000 per year, k = 1, n = 9 years

Tranche 2: a = \\$18,000, k = 1.07, n = 9 years

Tranche 3: a = \\$30,000, k = 0.92, infinite horizon

Fee stream (separate): $f_n = 1{,}000/n$

**Part 2: Formula.**

k = 1 case: $s_n = a \\times n$

Finite sum (k ≠ 1): $s_n = a(k^{n}-1)/(k-1)$

Infinite sum (|k| < 1): a/(1 - k)

Necessary (not sufficient) condition for convergence: convergence requires $\\lim_{n\\to\\infty} a_n$ = 0, but this alone does not guarantee convergence, as the harmonic-type counterexample below shows

**Part 3: Solve.**

**1.** Tranche 1: s = 25,000 × 9 = \\$225,000.00.

**2.** Tranche 2: $1.07^{9} = 1.838459212$; s = 18,000 × (1.838459212 - 1)/0.07 = 18,000 × 11.977989 = \\$215,603.80.

**3.** Tranche 3: s = 30,000/(1 - 0.92) = 30,000/0.08 = \\$375,000.00; comparing 375,000.00 > 225,000.00 > 215,603.80, Tranche 3 is indeed the largest.

**4.** Combined total (all three) = \\$225,000.00 + \\$215,603.80 + \\$375,000.00 = \\$815,603.80.

**5.** This combination is valid: a convergent infinite series (|k|=0.92<1) has a specific finite value, which may be added to finite sums just like any other fixed dollar amount.

**6.** Fee stream: $f_{100} = 1{,}000/100 = \\$10.00$ is correct, but this series is the p-series case p = 1 (the harmonic series), which is known to diverge - terms shrinking to 0 is necessary but not sufficient for convergence.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

Plugging A = 5,000, r = 0.07, and n = 3 into $x = A/(1+r)^{n}$ gives 5,000/1.225043 = \\$4,081.49, matching the statement exactly.`,
      `**B) If the interest rate were instead 5%, the required deposit today would be LOWER than \\$4,081.49.**  (false)

A lower discount rate means each future dollar is discounted less severely, so LESS growth is assumed and MORE must be set aside today: at 5% the required deposit is \\$4,319.19, which is higher than the 7% figure of \\$4,081.49, not lower.`,
      `**C) The interest that will be earned over the 3 years is approximately \\$928.51.**  (false)

The interest earned is simply the future target minus today's deposit: 5,000.00 - 4,081.49 = \\$918.51, not \\$928.51 as stated.`,
      `**D) If the target amount were doubled to \\$10,000, the required deposit today would also exactly double, to approximately \\$8,162.98.**  (true)

Because $x = A/(1+r)^{n}$ is directly proportional to A for fixed r and n, doubling the target amount exactly doubles the required deposit, from \\$4,081.49 to \\$8,162.98.`,
      `**E) If the horizon were extended to 6 years at the same 7% rate, the required deposit today would be exactly half of \\$4,081.49.**  (false)

The discounting relationship is exponential in time, not linear, so doubling the horizon does not halve the deposit: the correct 6-year deposit is $5{,}000/(1.07)^{6} = \\$3{,}331.71$, which is well above the naively halved figure of \\$2,040.75.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 81,
    solution_overview: `Ms. Delgado, the bakery owner from a previous chapter, now wants to have exactly \\$5,000 available in 3 years to replace a commercial oven, and plans to make a single deposit today into an account earning 7% annual interest.

**Part 1: Setup.**

Target future amount A = \\$5,000

Nominal annual rate r = 7% = 0.07 (and 5% for part b)

Compounding: annual, single deposit

t = 3 years (and 6 years for part e)

**Part 2: Formula.**

A single deposit today grows to the target amount according to $x(1+r)^{n}=A$, so the required deposit is $x=A/(1+r)^{n}$

**Part 3: Solve.**

**1.** $x=5{,}000/(1.07)^{3} = 5{,}000/1.225043 = \\$4{,}081.49$.

**2.** At the lower rate of 5%, $x=5{,}000/(1.05)^{3} = 5{,}000/1.157625 = \\$4{,}319.19$, which is HIGHER than \\$4,081.49, not lower.

**3.** Interest earned is 5,000.00 - 4,081.49 = \\$918.51, not \\$928.51 as stated.

**4.** Since x is directly proportional to the target amount, doubling it to \\$10,000 also gives a proportionally doubled deposit: $x'=10{,}000/1.225043 = \\$8{,}162.98$, exactly double the original \\$4,081.49.

**5.** Extending the horizon to 6 years, $x=5{,}000/(1.07)^{6} = 5{,}000/1.500730 = \\$3{,}331.71$, which is NOT half of \\$4,081.49 (half would be \\$2,040.75).

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=TRUE, E=FALSE`,
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

$F(5) = 6{,}500 \\times (1.06)^{5} = \\$8{,}698.47$, matching the statement exactly.`,
      `**B) The interest earned during the first 5 years is approximately \\$2,198.47.**  (true)

The 5-year interest earned is 8,698.47 - 6,500.00 = \\$2,198.47, matching the statement exactly.`,
      `**C) The accumulated value after 10 years is exactly double the 5-year value.**  (false)

Because compounding is exponential, not linear, in time, $F(10) = 6{,}500 \\times (1.06)^{10} = \\$11{,}640.51$, which is well below the naively doubled figure of \\$17,396.94.`,
      `**D) The interest earned during the SECOND 5-year period, approximately \\$2,942.04, is SMALLER than the interest earned during the FIRST 5-year period, approximately \\$2,198.47.**  (false)

The interest earned in the second 5-year block (\\$2,942.04) actually EXCEEDS that of the first block (\\$2,198.47), not the reverse, because interest is earned on an ever-larger accumulated balance as time passes - the hallmark of compound growth.`,
      `**E) If the interest rate were instead 3%, the 5-year accumulated value would be exactly half of \\$8,698.47.**  (false)

Halving the rate does not halve the future value, since $(1+r)^{n}$ is not linear in r: at 3%, F(5) = \\$7,535.28, which is considerably more than half of the 6%-rate value of \\$8,698.47.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 82,
    solution_overview: `A freelance graphic designer deposits \\$6,500 today into a business savings account earning 6% annual interest, and wants to project the accumulated value after 5 years, and again after a longer 10-year horizon.

**Part 1: Setup.**

Present deposit P = \\$6,500

Nominal annual rate r = 6% = 0.06 (and 3% for part e)

Compounding: annual, single deposit

n = 5 years (and 10 years for parts c, d)

**Part 2: Formula.**

A present deposit accumulates according to $F=P(1+r)^{n}$

**Part 3: Solve.**

**1.** $F(5) = 6{,}500 \\times (1.06)^{5} = 6{,}500 \\times 1.338226 = \\$8{,}698.47$.

**2.** Interest earned over these first five years is 8,698.47 - 6,500.00 = \\$2,198.47.

**3.** Over the full ten years instead, $F(10) = 6{,}500 \\times (1.06)^{10} = 6{,}500 \\times 1.790847 = \\$11{,}640.51$, well short of double the 5-year figure, \\$17,396.94.

**4.** Interest earned in the SECOND five years is 11,640.51 - 8,698.47 = \\$2,942.04, larger than the first period's interest of \\$2,198.47.

**5.** At the lower rate of 3%, $F(5) = 6{,}500 \\times (1.03)^{5} = 6{,}500 \\times 1.159274 = \\$7{,}535.28$, which is not half of \\$8,698.47.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$F_6 = (2{,}000/0.05)[(1.05)^{6} - 1] = \\$13{,}603.84$, matching the statement exactly.`,
      `**B) The total interest earned over the 6 years is approximately \\$1,703.84.**  (false)

Total deposits of \\$12,000.00 subtracted from the future value of \\$13,603.84 leaves \\$1,603.84 in interest, not \\$1,703.84 as stated.`,
      `**C) The present-value equivalent of this future value is approximately \\$18,230.45.**  (false)

This inverts the relationship $F_n = P_n(1+r)^{n}$: to go from the future value back to the present value one must DIVIDE by $(1+r)^{n}$, not multiply. The correctly computed present value is \\$10,151.40, not \\$18,230.45.`,
      `**D) If the annual deposit were increased by 50%, to \\$3,000, the 6-year future value would also rise by exactly 50%, to approximately \\$21,405.76.**  (false)

Because Fn is directly proportional to the periodic deposit a, increasing a by 50% (from \\$2,000 to \\$3,000) increases F6 by exactly 50%, from \\$13,603.84 to \\$20,405.76, not \\$21,405.76 as stated.`,
      `**E) If the number of annual deposits were doubled to 12 years, the future value would be LESS than double \\$13,603.84.**  (false)

F12 = \\$31,834.24 is actually MORE than double the 6-year value of \\$13,603.84 (double would be \\$27,207.68), not less, since extending the deposit period lets earlier deposits keep compounding on top of the additional deposits, so the future value grows faster than linearly with the number of periods.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 83,
    solution_overview: `A dental clinic owner deposits \\$2,000 at the end of each year into an equipment-replacement fund earning 5% annual interest, for 6 years, and wants to understand how this future value relates to its present-value equivalent.

**Part 1: Setup.**

Annual deposit a = \\$2,000

Nominal annual rate r = 5% = 0.05

Compounding: annual, ordinary annuity (end-of-year deposits)

n = 6 years (and 12 years for part e)

**Part 2: Formula.**

$F_n=(a/r)[(1+r)^{n}-1]$

$P_n=(a/r)[1-1/(1+r)^{n}]$

Relationship: $F_n=P_n(1+r)^{n}$

**Part 3: Solve.**

**1.** $F_6=(2{,}000/0.05)[(1.05)^{6}-1] = 40{,}000 \\times 0.340096 = \\$13{,}603.84$.

**2.** Total deposits over six years are 2,000 × 6 = \\$12,000.00, so the interest earned is 13,603.84 - 12,000.00 = \\$1,603.84.

**3.** The correct relationship is $P_n=F_n/(1+r)^{n}$, giving $P_6=13{,}603.84/1.340096 = \\$10{,}151.40$, not \\$18,230.45 as claimed from multiplying instead of dividing.

**4.** Raising the deposit by 50%, $F_6'=(3{,}000/0.05)[(1.05)^{6}-1] = 13{,}603.84 \\times 1.5 = \\$20{,}405.76$.

**5.** Extending to 12 years instead, $F_{12}=(2{,}000/0.05)[(1.05)^{12}-1] = 40{,}000 \\times 0.795856 = \\$31{,}834.24$, well above double the 6-year figure of \\$27,207.68.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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

$F_{10} = (3{,}500/0.08)[(1.08)^{10} - 1] = \\$50{,}702.97$, matching the statement exactly.`,
      `**B) The total interest earned over the 10 years is approximately \\$15,702.97.**  (true)

Total deposits of \\$35,000.00 subtracted from \\$50,702.97 leaves \\$15,702.97 in interest, matching the statement exactly.`,
      `**C) If the deposit period were extended to 20 years, the future value would be LESS than double \\$50,702.97.**  (false)

Because the future value grows exponentially rather than linearly with the number of periods, doubling the deposit period to 20 years produces F20 = \\$160,166.87, which is well MORE than double the 10-year value, not less.`,
      `**D) The interest-only portion of the 10-year future value, approximately \\$15,702.97, exceeds the total principal deposited of \\$35,000.00.**  (false)

The interest earned (\\$15,702.97) is smaller than the total principal contributed (\\$35,000.00) over this particular 10-year horizon, not larger - contradicting the statement.`,
      `**E) If the interest rate rose to 10%, the 10-year future value would exceed \\$55,000.00.**  (true)

Raising the rate to 10% increases F10 to \\$55,780.97, which does exceed the \\$55,000.00 threshold stated.`,
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

**1.** $F_{10}=(3{,}500/0.08)[(1.08)^{10}-1] = 43{,}750 \\times 1.158925 = \\$50{,}702.97$.

**2.** Total deposits over ten years are 3,500 × 10 = \\$35,000.00, so the interest earned is 50,702.97 - 35,000.00 = \\$15,702.97.

**3.** Extending to 20 years, $F_{20}=(3{,}500/0.08)[(1.08)^{20}-1] = 43{,}750 \\times 3.660957 = \\$160{,}166.87$, far MORE than double the 10-year value of \\$101,405.94, not less.

**4.** That interest figure of \\$15,702.97 is smaller than the principal of \\$35,000.00, so it does not exceed it.

**5.** At the higher rate of 10%, $F_{10}=(3{,}500/0.10)[(1.10)^{10}-1] = 35{,}000 \\times 1.593742 = \\$55{,}780.97$, which does exceed \\$55,000.00.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

$P_{15} = (2{,}400/0.045)[1 - 1/(1.045)^{15}] = \\$25{,}775.15$, matching the statement exactly.`,
      `**B) The total nominal withdrawals over 15 years, \\$36,000.00, exceed the required deposit of \\$25,775.15, illustrating that future dollars are worth less than present dollars.**  (true)

The \\$36,000.00 in total nominal withdrawals is indeed larger than the \\$25,775.15 that must be deposited today, since each future withdrawal is discounted back to a smaller present-day equivalent.`,
      `**C) If withdrawals were extended to 30 years at the same rate, the present value would exactly double, to approximately \\$51,550.30.**  (false)

Because $1/(1+r)^{n}$ shrinks nonlinearly as n grows, doubling the withdrawal period to 30 years raises the present value only to \\$39,091.65, not to the naively doubled figure of \\$51,550.30.`,
      `**D) The gap between the total nominal withdrawals and today's required deposit, approximately \\$11,224.85, represents the total discount applied.**  (false)

Subtracting the required deposit from the total nominal withdrawals gives 36,000.00 - 25,775.15 = \\$10,224.85, not \\$11,224.85 as stated.`,
      `**E) If the interest rate were higher, the required present-value deposit would be HIGHER than \\$25,775.15.**  (false)

A higher interest rate discounts future withdrawals more heavily, which REDUCES the amount needed today, not increases it: at 6% only \\$23,309.40 is required, which is lower than the 4.5%-rate figure of \\$25,775.15.`,
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

**1.** $P_{15}=(2{,}400/0.045)[1-1/(1.045)^{15}] = 53{,}333.33 \\times 0.483284 = \\$25{,}775.15$.

**2.** Total nominal withdrawals over fifteen years are 2,400 × 15 = \\$36,000.00, well above \\$25,775.15.

**3.** Extending to 30 years, $P_{30}=(2{,}400/0.045)[1-1/(1.045)^{30}] = 53{,}333.33 \\times 0.732998 = \\$39{,}091.65$, nowhere near double the 15-year figure of \\$51,550.30.

**4.** The gap between nominal withdrawals and the present value is 36,000.00 - 25,775.15 = \\$10,224.85, not \\$11,224.85 as stated.

**5.** At the higher rate of 6%, $P_{15}=(2{,}400/0.06)[1-1/(1.06)^{15}] = 40{,}000 \\times 0.582735 = \\$23{,}309.40$, LOWER than \\$25,775.15, not higher.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

$P_{20} = (5{,}000/0.06)[1 - 1/(1.06)^{20}] = \\$57{,}349.67$, matching the statement exactly.`,
      `**B) The perpetuity value is approximately \\$83,333.33, exceeding the 20-year annuity's present value by approximately \\$25,983.66.**  (true)

The perpetuity value of \\$83,333.33 exceeds the 20-year annuity's present value of \\$57,349.67 by exactly \\$25,983.66, matching the statement exactly.`,
      `**C) The 20-year annuity's present value represents approximately 72.82% of the equivalent perpetuity value.**  (false)

57,349.67 divided by 83,333.33 gives 0.68820, or approximately 68.82%, not 72.82% as stated.`,
      `**D) If the term were extended to 40 years, the present value would rise to MORE than 95% of the perpetuity value.**  (false)

Even after doubling the term to 40 years, the present value only reaches \\$75,231.50, or about 90.28% of the perpetuity value - still short of 95%, since later payments are discounted so heavily that extending the horizon further yields diminishing gains.`,
      `**E) The perpetuity formula is obtained by letting the number of payments grow toward infinity in the annuity present-value formula, so that the value converges to \\$83,333.33 as the limiting value.**  (true)

This is exactly how Section 11.5 derives the perpetuity formula: letting n tend to infinity in the annuity present-value formula causes $1/(1+r)^{n}$ to vanish, leaving the annuity's present value converging to a/r, matching the statement exactly.`,
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

**1.** $P_{20}=(5{,}000/0.06)[1-1/(1.06)^{20}] = 83{,}333.33 \\times 0.688195 = \\$57{,}349.67$.

**2.** The perpetuity value is 5,000/0.06 = \\$83,333.33, so the gap is 83,333.33 - 57,349.67 = \\$25,983.66.

**3.** Dividing, 57,349.67 / 83,333.33 = 0.68820, about 68.82%, not 72.82%.

**4.** Extending to 40 years instead, $P_{40}=(5{,}000/0.06)[1-1/(1.06)^{40}] = 83{,}333.33 \\times 0.902778 = \\$75{,}231.50$, which is about 90.28% of the perpetuity value, not more than 95%.

**5.** As n grows without bound, $(1+r)^{n}\\to\\infty$, so $1/(1+r)^{n}\\to0$ and $P_n\\to a/r=83,333.33$, confirming the perpetuity limit.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

$P_9 = (2{,}500/0.07)[1 - 1/(1.07)^{9}] = \\$16{,}288.18$, matching the statement exactly.`,
      `**B) Because \\$16,288.18 is less than \\$18,000.00, Option 2 is the financially better choice, saving approximately \\$1,811.82.**  (false)

Since Option 2 costs only \\$16,288.18 in present-value terms versus Option 1's \\$18,000.00, Option 2 is genuinely cheaper by 18,000.00 - 16,288.18 = \\$1,711.82, not \\$1,811.82 as stated.`,
      `**C) If the interest rate were only 4%, Option 2's present value would be LOWER than \\$16,288.18, making Option 1 even less attractive by comparison.**  (false)

A lower discount rate discounts future payments less severely, which RAISES their present value: at 4%, Option 2's present value rises to \\$18,588.31, which is higher than the 7%-rate figure of \\$16,288.18, not lower.`,
      `**D) The total nominal payments under Option 2 over 9 years, \\$22,500.00, exceed the \\$18,000.00 lump-sum cost of Option 1 by \\$4,600.00.**  (false)

Total nominal payments of \\$22,500.00 exceed the \\$18,000.00 lump sum by exactly \\$4,500.00, not \\$4,600.00 as stated.`,
      `**E) Option 1's \\$18,000.00, if invested today at 7% instead of used for the machinery, would grow after 9 years to a future value of more than \\$34,000.00.**  (false)

Growing the \\$18,000.00 lump sum forward at 7% for 9 years gives $18{,}000 \\times (1.07)^{9} = \\$33{,}092.26$, which does not exceed \\$34,000.00 as claimed.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 87,
    solution_overview: `A supplier offers a company two payment options for a piece of machinery. Option 1: pay \\$18,000 today. Option 2: pay \\$2,500 at the end of each year for 9 years. Using an interest rate of 7%, the company wants to know which option has the lower present-value cost.

**Part 1: Setup.**

Option 1: lump sum today = \\$18,000

Option 2: annual payment a = \\$2,500 for n = 9 years

Nominal annual rate r = 7% = 0.07 (and 4% for part c)

Compounding: annual, ordinary annuity

**Part 2: Formula.**

$P_n=(a/r)[1-1/(1+r)^{n}]$

$F=P(1+r)^{n}$

**Part 3: Solve.**

**1.** $P_9=(2{,}500/0.07)[1-1/(1.07)^{9}] = 35{,}714.29 \\times 0.456069 = \\$16{,}288.18$.

**2.** Since Option 1's lump sum is 18,000.00, the savings are 18,000.00 - 16,288.18 = \\$1,711.82, not \\$1,811.82.

**3.** At the lower rate of 4%, $P_9=(2{,}500/0.04)[1-1/(1.04)^{9}] = 62{,}500 \\times 0.297413 = \\$18{,}588.31$, HIGHER than \\$16,288.18, not lower, since a lower rate discounts future payments less.

**4.** Total Option-2 payments over nine years are 2,500 × 9 = \\$22,500.00, exceeding Option 1's lump sum by 22,500.00 - 18,000.00 = \\$4,500.00, not \\$4,600.00.

**5.** Growing the lump sum forward, $F=18{,}000(1.07)^{9} = 18{,}000 \\times 1.838459 = \\$33{,}092.26$, which does not exceed \\$34,000.00.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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

$F_A = 12{,}000 \\times (1.06)^{8} = \\$19{,}126.18$, matching the statement exactly.`,
      `**B) Strategy B's future value after 8 years is approximately \\$14,856.46.**  (false)

$F_B = (1{,}400/0.06)[(1.06)^{8} - 1] = \\$13{,}856.46$, not \\$14,856.46 as stated.`,
      `**C) Strategy A yields a higher future value than Strategy B, by approximately \\$5,769.72.**  (false)

19,126.18 - 13,856.46 = \\$5,269.72, not \\$5,769.72 as stated.`,
      `**D) The total cash committed under Strategy B over the 8 years, \\$11,200.00, is MORE than the \\$12,000.00 committed upfront under Strategy A.**  (false)

Total deposits under Strategy B are only \\$11,200.00, which is LESS than the \\$12,000.00 committed upfront under Strategy A, not more.`,
      `**E) If Strategy B's annual deposit were raised to \\$1,500, Strategy B's future value would still be LOWER than Strategy A's \\$19,126.18.**  (true)

Even when Strategy B's total nominal contributions are raised to exactly match Strategy A's \\$12,000.00 upfront amount, its future value only reaches \\$14,846.20, still well below Strategy A's \\$19,126.18 - because front-loading the full amount gives it the maximum possible time to compound, an advantage spread-out deposits cannot fully offset.`,
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

**1.** $F_A=12{,}000(1.06)^{8} = 12{,}000 \\times 1.593848 = \\$19{,}126.18$.

**2.** $F_B=(1{,}400/0.06)[(1.06)^{8}-1] = 23{,}333.33 \\times 0.593848 = \\$13{,}856.46$, not \\$14,856.46.

**3.** The gap is 19,126.18 - 13,856.46 = \\$5,269.72, not \\$5,769.72.

**4.** Total Strategy-B deposits over the eight years are 1,400 × 8 = \\$11,200.00, LESS than Strategy A's \\$12,000.00, not more.

**5.** Raising the deposit amount instead, $F_B'=(1{,}500/0.06)[(1.06)^{8}-1] = 25{,}000 \\times 0.593848 = \\$14{,}846.20$, still well below \\$19,126.18.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-89`,
    case_id: `MATH 11.89`,
    title: `Future Value of an Annuity Due for a Gym's Equipment Upgrade Fund`,
    subsection: `11.5`,
    context: `A gym owner deposits \\$3,000 at the BEGINNING of each year as an annuity due for 6 years into an equipment-upgrade fund earning 5% annual interest. The owner wants to know how much this will be worth at the end of year 6, and how it compares to depositing the same amounts at the end of each year instead.`,
    statements: [
      `The future value of these deposits at the end of year 6 is approximately \\$21,426.05.`,
      `If the same \\$3,000 deposits were instead made at the END of each year, the future value would be approximately \\$20,405.76, which is LOWER than the annuity-due result.`,
      `The dollar gap between the annuity-due result and the ordinary-annuity result is approximately \\$1,120.29.`,
      `If the number of deposits were doubled to 12 years, the annuity-due future value would also exactly double, to approximately \\$42,852.10.`,
      `Because each payment in an annuity due occurs one period earlier than in an ordinary annuity, the annuity-due future value exceeds the ordinary-annuity future value by exactly one extra year's worth of interest growth, regardless of the number of payments or the interest rate.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The future value of these deposits at the end of year 6 is approximately \\$21,426.05.**  (true)

$F_{\\mathrm{due}}(6) = F_{\\mathrm{ordinary}}(6) \\times 1.05 = 20{,}405.76 \\times 1.05 = \\$21{,}426.05$, matching the statement exactly.`,
      `**B) If the same \\$3,000 deposits were instead made at the END of each year, the future value would be approximately \\$20,405.76, which is LOWER than the annuity-due result.**  (true)

$F_{\\mathrm{ordinary}}(6) = (3{,}000/0.05)[(1.05)^{6} - 1] = \\$20{,}405.76$, which is indeed lower than the annuity-due result of \\$21,426.05, since end-of-year deposits each earn one fewer period of interest.`,
      `**C) The dollar gap between the annuity-due result and the ordinary-annuity result is approximately \\$1,120.29.**  (false)

The gap is 21,426.05 - 20,405.76 = \\$1,020.29, not \\$1,120.29 as stated.`,
      `**D) If the number of deposits were doubled to 12 years, the annuity-due future value would also exactly double, to approximately \\$42,852.10.**  (false)

Extending to 12 years gives $F_{\\mathrm{due}}(12) = \\$50{,}138.93$, which is MORE than double the 6-year result (\\$42,852.10 would be double) - not exactly double - because future value grows exponentially, not linearly, with the number of periods.`,
      `**E) Because each payment in an annuity due occurs one period earlier than in an ordinary annuity, the annuity-due future value exceeds the ordinary-annuity future value by exactly one extra year's worth of interest growth, regardless of the number of payments or the interest rate.**  (true)

This is a direct structural identity: $F_{\\mathrm{due}} = F_{\\mathrm{ordinary}} \\times (1+r)$ holds for any combination of a, r, and n, since shifting every payment one period earlier simply multiplies the entire ordinary-annuity result by one additional period's growth factor.`,
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

**1.** $F_{\\mathrm{ordinary}} = (3{,}000/0.05)[(1.05)^{6}-1] = 60{,}000 \\times 0.340096 = \\$20{,}405.76$, so the annuity-due value is $F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = \\$21{,}426.05$.

**2.** The gap between them is 21,426.05 - 20,405.76 = \\$1,020.29, not \\$1,120.29.

**3.** Extending to 12 years, $F_{\\mathrm{ordinary}} = (3{,}000/0.05)[(1.05)^{12}-1] = 60{,}000 \\times 0.795856 = \\$47{,}751.36$, so $F_{\\mathrm{due}} = 47{,}751.36 \\times 1.05 = \\$50{,}138.93$, well more than double the 6-year figure of \\$42,852.10, not exactly double.

**4.** For any n and r, this identity $F_{\\mathrm{due}} = F_{\\mathrm{ordinary}}(1+r)$ always holds, since shifting each payment one period earlier simply multiplies by one extra period of growth.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-90`,
    case_id: `MATH 11.90`,
    title: `Present Value of an Annuity Due for a Commercial Lease`,
    subsection: `11.5`,
    context: `A tenant signs a 5-year commercial lease requiring rent payments of \\$24,000 at the BEGINNING of each year as an annuity due. The landlord's opportunity cost of capital is 6%, and the landlord wants to know the present value of this lease, and how it compares to an otherwise identical lease with end-of-year payments.`,
    statements: [
      `The present value of the lease payments today is approximately \\$107,162.61.`,
      `If the same \\$24,000 payments were instead due at the END of each year, the present value would be approximately \\$101,096.80, which is LOWER than the annuity-due result.`,
      `The dollar gap between the annuity-due present value and the ordinary-annuity present value is approximately \\$7,065.81.`,
      `If the lease term were extended to 10 years, the annuity-due present value would also exactly double, to approximately \\$214,325.22.`,
      `The annuity-due present value can also be computed as the first \\$24,000 payment plus the present value of an ordinary annuity of the remaining 4 payments.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) The present value of the lease payments today is approximately \\$107,162.61.**  (true)

$P_{\\mathrm{due}}(5) = P_{\\mathrm{ordinary}}(5) \\times 1.06 = 101{,}096.80 \\times 1.06 = \\$107{,}162.61$, matching the statement exactly.`,
      `**B) If the same \\$24,000 payments were instead due at the END of each year, the present value would be approximately \\$101,096.80, which is LOWER than the annuity-due result.**  (true)

$P_{\\mathrm{ordinary}}(5) = (24{,}000/0.06)[1 - 1/(1.06)^{5}] = \\$101{,}096.80$, which is indeed lower than the annuity-due result of \\$107,162.61, since discounting end-of-year payments back one extra period each reduces their present value.`,
      `**C) The dollar gap between the annuity-due present value and the ordinary-annuity present value is approximately \\$7,065.81.**  (false)

The gap is 107,162.61 - 101,096.80 = \\$6,065.81, not \\$7,065.81 as stated.`,
      `**D) If the lease term were extended to 10 years, the annuity-due present value would also exactly double, to approximately \\$214,325.22.**  (false)

Extending to 10 years gives $P_{\\mathrm{due}}(10) = \\$187{,}240.52$, which is LESS than double the 5-year result (\\$214,325.22 would be double) - not exactly double - because discounting is exponential, not linear, in the number of periods, so later payments contribute progressively less.`,
      `**E) The annuity-due present value can also be computed as the first \\$24,000 payment plus the present value of an ordinary annuity of the remaining 4 payments.**  (true)

Since the first payment of an annuity due occurs today (with zero discounting) and the remaining n-1 payments form an ordinary annuity one period later, splitting the payment stream this way gives \\$24,000 today plus a discounted remainder of \\$83,162.40, for a combined total of \\$107,162.40, matching $P_{\\mathrm{due}}$ within rounding - confirming this alternative method is valid.`,
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

**1.** $P_{\\mathrm{ordinary}} = (24{,}000/0.06)[1-1/(1.06)^{5}] = 400{,}000 \\times 0.252742 = \\$101{,}096.80$, so the annuity-due value is $P_{\\mathrm{due}} = 101{,}096.80 \\times 1.06 = \\$107{,}162.61$.

**2.** The gap between them is 107,162.61 - 101,096.80 = \\$6,065.81, not \\$7,065.81.

**3.** Extending to 10 years instead, $P_{\\mathrm{ordinary}} = (24{,}000/0.06)[1-1/(1.06)^{10}] = 400{,}000 \\times 0.441605 = \\$176{,}642.00$, so $P_{\\mathrm{due}} = 176{,}642.00 \\times 1.06 = \\$187{,}240.52$, less than double the 5-year figure of \\$214,325.22, not exactly double.

**4.** As a check, $a + P_4 = 24{,}000+(24{,}000/0.06)[1-1/(1.06)^{4}]$ = 24,000 + 400,000 × 0.207906 = 24,000 + 83,162.40 = \\$107,162.40, matching $P_{\\mathrm{due}}$ within rounding.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

The perpetuity formula a/r gives the value one period before the first payment; since the first payment falls at t = 5, that valuation point is t = 4, giving 10,000/0.06 = \\$166,666.67, matching the statement exactly.`,
      `**B) Discounting this year-4 value back 4 years to today at 6% gives a present value of approximately \\$132,015.61.**  (true)

Discounting \\$166,666.67 back 4 years at 6% gives $166{,}666.67/(1.06)^{4} = \\$132{,}015.61$, matching the statement exactly.`,
      `**C) If the first payment instead began immediately at the end of year 1, today's present value would be LOWER than the deferred value of \\$132,015.61.**  (false)

Deferring the payments pushes them further into the future, which REDUCES today's present value, not increases it: the immediate perpetuity is worth \\$166,666.67 today, which is higher than the deferred value of \\$132,015.61, not lower.`,
      `**D) If the deferral were extended so the first payment begins at the end of year 9, today's present value would be LESS than half of \\$132,015.61.**  (false)

Extending the deferral to 8 years reduces the present value to \\$104,568.80, which remains well ABOVE half of the 4-year-deferred value (\\$66,007.81), not below it - the value shrinks as deferral lengthens, but not fast enough to fall below half in this case.`,
      `**E) The ratio of the deferred present value to the immediate perpetuity value is exactly 0.8321.**  (false)

Because $PV_0 = V/(1.06)^{4}$, the ratio PV0/V is by definition exactly the 4-year discount factor $1/(1.06)^{4}$ ≈ 0.7921, not 0.8321 as stated.`,
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

**1.** $V=10,000/0.06=166,666.67$ as of the end of year 4.

**2.** Discounting back, $PV_0=166{,}666.67/(1.06)^{4} = 166{,}666.67/1.262477 = \\$132{,}015.61$.

**3.** The immediate, non-deferred perpetuity is worth 10,000/0.06 = \\$166,666.67 today, HIGHER than \\$132,015.61, not lower.

**4.** With the first payment deferred to year 9 instead, $V$ at year 8 is still \\$166,666.67, so $PV_0'=166{,}666.67/(1.06)^{8} = 166{,}666.67/1.593848 = \\$104{,}568.80$, well above half of \\$132,015.61 (which would be \\$66,007.81).

**5.** Since $PV_0/V=1/(1.06)^{4}=0.792094$, the ratio is about 79.21%, not 83.21% as stated.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-92`,
    case_id: `MATH 11.92`,
    title: `Reverse-Engineering a Perpetual Preferred Stock's Fair Value`,
    subsection: `11.5`,
    context: `A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.`,
    statements: [
      `The fair value per share is approximately \\$60.71.`,
      `The stock is currently trading at \\$65.00 per share, which is below its fair value of \\$60.71, so the stock is UNDERVALUED.`,
      `If the required return fell to 4%, the fair value would rise to \\$116.25 per share.`,
      `This drop in the required return, from 7% to 4%, increases the fair value by MORE than 75%.`,
      `If instead the dividend were cut by 20% while the required return stayed at 7%, the fair value would fall to exactly \\$50.57, a 20% drop from the original \\$60.71.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The fair value per share is approximately \\$60.71.**  (true)

P = 4.25/0.07 = \\$60.71, matching the statement exactly.`,
      `**B) The stock is currently trading at \\$65.00 per share, which is below its fair value of \\$60.71, so the stock is UNDERVALUED.**  (false)

The \\$65.00 market price sits ABOVE the \\$60.71 fair value, meaning the stock is OVERVALUED, not undervalued as claimed.`,
      `**C) If the required return fell to 4%, the fair value would rise to \\$116.25 per share.**  (false)

P' = 4.25/0.04 = \\$106.25, not \\$116.25 as stated.`,
      `**D) This drop in the required return, from 7% to 4%, increases the fair value by MORE than 75%.**  (false)

The increase works out to EXACTLY 75.00%, not more than 75% - a precise boundary case where the statement's claim of "more than" narrowly fails even though the number itself (75%) looks correct at first glance.`,
      `**E) If instead the dividend were cut by 20% while the required return stayed at 7%, the fair value would fall to exactly \\$50.57, a 20% drop from the original \\$60.71.**  (false)

Cutting the dividend by 20% cuts the fair value by exactly 20% as well: from \\$60.71 the value falls to \\$48.57, not \\$50.57 as stated.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 92,
    solution_overview: `A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.

**Part 1: Setup.**

Annual dividend a = \\$4.25 per share (and \\$3.40 for part e)

Required return r = 7% = 0.07 (and 4% for parts c, d)

Compounding: annual, perpetuity

**Part 2: Formula.**

Perpetuity (fair value): $P=a/r$

**Part 3: Solve.**

**1.** $P=4.25/0.07=60.71$ (precisely \\$60.714286).

**2.** The stock trades at \\$65.00, above the \\$60.71 fair value.

**3.** At the lower required return of 4%, $P'=4.25/0.04=106.25$, not \\$116.25.

**4.** The percentage increase is (106.25 - 60.714286)/60.714286 = 0.750000, exactly 75.00%, not more than 75%.

**5.** If instead the dividend were cut by 20%, $P''=3.40/0.07=48.571429$, about \\$48.57, since 48.571429/60.714286 = 0.80, an exact 20% drop because fair value is directly proportional to the dividend.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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
      `If the council only needed the perpetuity and the rate were 6%, the required funding of \\$250,000.00 would be LESS than half of the original combined 4.5%-rate total of \\$383,333.33.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The present value of just the perpetual maintenance payments is approximately \\$333,333.33.**  (true)

Perpetuity value = 15,000/0.045 = \\$333,333.33, matching the statement exactly.`,
      `**B) Including the \\$50,000 immediate renovation cost, the total amount the city must set aside today is approximately \\$383,333.33.**  (true)

Adding the \\$50,000.00 renovation cost to the \\$333,333.33 perpetuity value gives \\$383,333.33, matching the statement exactly.`,
      `**C) If the interest rate were instead 6%, the total required funding would be approximately \\$300,000.00.**  (true)

At the higher 6% rate, the perpetuity value falls to \\$250,000.00, and adding the \\$50,000.00 renovation cost gives a total of \\$300,000.00, matching the statement exactly.`,
      `**D) This 1.5-percentage-point rate increase reduces the total funding requirement by MORE than 25%.**  (false)

The reduction of \\$83,333.33 represents approximately 21.74% of the original \\$383,333.33 total, which is more than 20% but not more than 25%.`,
      `**E) If the council only needed the perpetuity and the rate were 6%, the required funding of \\$250,000.00 would be LESS than half of the original combined 4.5%-rate total of \\$383,333.33.**  (false)

The perpetuity-only requirement at 6% (\\$250,000.00) is actually LARGER than half of the original combined total (\\$191,666.67), not smaller - even though raising the rate shrank the perpetuity value considerably, it still exceeds half of the original combined (renovation + maintenance) total.`,
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

**1.** The perpetuity value is 15,000/0.045 = \\$333,333.33, so the total required today is 50,000.00 + 333,333.33 = \\$383,333.33.

**2.** At the higher rate of 6%, the perpetuity value falls to 15,000/0.06 = \\$250,000.00, so the total becomes 50,000.00 + 250,000.00 = \\$300,000.00.

**3.** The reduction is 383,333.33 - 300,000.00 = \\$83,333.33, which is 83,333.33/383,333.33 = 0.21739, about 21.74% of the original total, more than 20% but not more than 25%.

**4.** Half of the original combined total is \\$191,666.67, and since \\$250,000.00 exceeds that, the perpetuity-only requirement at 6% is LARGER than half of the original total, not smaller.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=FALSE`,
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

P = 24,000/0.055 = \\$436,363.64, matching the statement exactly.`,
      `**B) If the cash flows did NOT grow, the plain-perpetuity fair value, \\$300,000.00, is HIGHER than the growing-perpetuity value of \\$436,363.64.**  (false)

A non-growing cash flow of the same starting size is worth only \\$300,000.00, which is actually LOWER than the growing-perpetuity value of \\$436,363.64, not higher, since growth adds value by raising every future cash flow.`,
      `**C) If the growth rate rose to 4%, the fair value would MORE than double, to over \\$872,727.28.**  (false)

Raising the growth rate to 4% increases the fair value to \\$600,000.00, which is a substantial increase but is NOT more than double the original \\$436,363.64 (double would be \\$872,727.28) - the value is highly sensitive to (r - g) but does not increase without limit until g approaches r more closely.`,
      `**D) If the required return instead fell to 6%, the fair value would be approximately \\$715,714.29.**  (false)

P'' = 24,000/0.035 = \\$685,714.29, not \\$715,714.29 as stated.`,
      `**E) The growing-perpetuity valuation is only valid when the growth rate is below the required return; if the growth rate were to equal or exceed the 8% required return, the formula could not be used.**  (true)

This is a direct structural requirement of the growing-perpetuity formula: it depends on the spread (r - g) staying strictly positive, so growth rates at or above the required return break the model entirely, matching the statement exactly.`,
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

**1.** $P=24{,}000/(0.08-0.025) = 24{,}000/0.055 = \\$436{,}363.64$.

**2.** Without any growth at all, $P=24,000/0.08=300,000.00$, LOWER than the growing-perpetuity value of \\$436,363.64, not higher.

**3.** If growth instead rose to 4%, $P'=24,000/(0.08-0.04)=600,000.00$, a large increase but NOT more than double the original \\$436,363.64 (double would be \\$872,727.28).

**4.** At the lower required return of 6%, $P''=24{,}000/(0.06-0.025) = 24{,}000/0.035 = \\$685{,}714.29$, not \\$715,714.29.

**5.** As growth approaches the required return, the denominator $(r-g)$ shrinks toward zero and the formula becomes undefined, so growth rates at or above the required return break the model entirely.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
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
      `Mistakenly using the just-paid dividend instead of next year's dividend would give a value of \\$50.00, which UNDERSTATES the correct fair value of \\$51.50; the shortfall is said to be \\$2.50.`,
      `If the growth rate were instead 5%, the fair value would be MORE than double \\$51.50.`,
      `If the growth rate equaled the required return exactly, the growing-perpetuity valuation would yield a present value of exactly \\$0.00.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The next dividend is \\$3.09.**  (true)

D1 = 3.00 × 1.03 = \\$3.09, matching the statement exactly.`,
      `**B) The fair value per share is approximately \\$54.50.**  (false)

P = 3.09/0.06 = \\$51.50, not \\$54.50 as stated.`,
      `**C) Mistakenly using the just-paid dividend instead of next year's dividend would give a value of \\$50.00, which UNDERSTATES the correct fair value of \\$51.50; the shortfall is said to be \\$2.50.**  (false)

Using the just-paid dividend instead of next year's dividend gives \\$50.00, which is \\$1.50 below the correct \\$51.50, not \\$2.50 as stated.`,
      `**D) If the growth rate were instead 5%, the fair value would be MORE than double \\$51.50.**  (false)

Raising the growth rate to 5% increases the fair value substantially, to \\$78.75, but this is still short of double the original \\$51.50 (which would be \\$103.00) - the growing-perpetuity value rises sharply as g approaches r, but 5% is not yet close enough to 9% to more than double it here.`,
      `**E) If the growth rate equaled the required return exactly, the growing-perpetuity valuation would yield a present value of exactly \\$0.00.**  (false)

As g → r, the formula's denominator (r - g) shrinks toward zero, driving the RESULT toward infinity, not toward \\$0.00 - the fair value becomes undefined (unboundedly large), not zero.`,
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

**1.** $D_1=3.00\\times1.03=3.09$.

**2.** $P=3.09/(0.09-0.03) = 3.09/0.06 = \\$51.50$.

**3.** Using the just-paid dividend by mistake instead gives 3.00/0.06 = \\$50.00, so the correct value understates the wrong one by 51.50 - 50.00 = \\$1.50, not \\$2.50.

**4.** At the higher growth rate of 5%, $D_1'=3.00\\times1.05=3.15$, so $P'=3.15/(0.09-0.05) = 3.15/0.04 = \\$78.75$, well short of double the original \\$51.50 (double would be \\$103.00).

**5.** As growth approaches the required return of 9%, the denominator $(r-g)$ shrinks toward zero, driving the result toward infinity, not toward \\$0.00.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
  },
  {
    id: `math-11-96`,
    case_id: `MATH 11.96`,
    title: `Comparing Level vs. Growing Royalty-Stream Purchase Deals for a Musician`,
    subsection: `11.5`,
    context: `A musician is offered two royalty-stream purchase deals for a song catalog, both priced at \\$170,000 and both requiring a 10% return to be considered a fair buy. Deal 1 is a level non-growing perpetuity of \\$18,000 per year. Deal 2 is a growing perpetuity starting at \\$14,000 next year, growing 4% per year forever.`,
    statements: [
      `Deal 1's fair value is \\$180,000.00, which exceeds the \\$170,000 asking price by \\$10,000.00, making it a good buy.`,
      `Deal 2's fair value is approximately \\$233,333.33, which exceeds the \\$170,000 asking price by more than \\$60,000.00.`,
      `Deal 1 offers the larger "margin of safety" of the two deals.`,
      `If Deal 2's growth rate were instead only 1%, its fair value would fall to approximately \\$155,555.56, making it a worse buy than its \\$170,000 asking price.`,
      `Comparing the two original deals, Deal 1's fair value is MORE than Deal 2's fair value.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) Deal 1's fair value is \\$180,000.00, which exceeds the \\$170,000 asking price by \\$10,000.00, making it a good buy.**  (true)

Deal 1's fair value is 18,000/0.10 = \\$180,000.00, exceeding the \\$170,000.00 price by \\$10,000.00, matching the statement exactly.`,
      `**B) Deal 2's fair value is approximately \\$233,333.33, which exceeds the \\$170,000 asking price by more than \\$60,000.00.**  (true)

Deal 2's fair value is 14,000/0.06 = \\$233,333.33, exceeding the \\$170,000.00 price by \\$63,333.33, which is indeed more than \\$60,000.00.`,
      `**C) Deal 1 offers the larger "margin of safety" of the two deals.**  (false)

Deal 2's margin of safety (\\$63,333.33) is substantially larger than Deal 1's (\\$10,000.00), so it is Deal 2, not Deal 1, that offers more cushion above its asking price.`,
      `**D) If Deal 2's growth rate were instead only 1%, its fair value would fall to approximately \\$155,555.56, making it a worse buy than its \\$170,000 asking price.**  (true)

At the lower 1% growth rate, Deal 2's fair value falls to \\$155,555.56, which sits below the \\$170,000.00 asking price, making it a worse buy at that reduced growth assumption.`,
      `**E) Comparing the two original deals, Deal 1's fair value is MORE than Deal 2's fair value.**  (false)

Deal 1's fair value (\\$180,000.00) is actually LESS than Deal 2's fair value (\\$233,333.33), not more - the growing payment stream, even with a lower starting payment, is worth substantially more due to its perpetual growth.`,
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

**1.** Deal 1: $P=18,000/0.10=180,000.00$, a margin of 180,000.00 - 170,000.00 = \\$10,000.00 over the asking price.

**2.** Deal 2: $P=14{,}000/(0.10-0.04) = 14{,}000/0.06 = \\$233{,}333.33$.

**3.** This exceeds the asking price by a wide margin: 233,333.33 - 170,000.00 = \\$63,333.33.

**4.** Deal 2's margin of \\$63,333.33 is far larger than Deal 1's \\$10,000.00, so Deal 2 offers the bigger cushion, not Deal 1.

**5.** At the lower growth rate of 1%, $P'=14{,}000/(0.10-0.01) = 14{,}000/0.09 = \\$155{,}555.56$, below the \\$170,000.00 asking price.

**6.** Comparing the two original deals, Deal 1's fair value of \\$180,000.00 is LESS than Deal 2's \\$233,333.33, not more.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

$S_0 = 250{,}000 \\times e^{-0.66} = \\$129{,}213.75$, matching the statement exactly.`,
      `**B) This continuously compounded present value is HIGHER than the present value using ordinary annual compounding at the same 5.5% nominal rate.**  (false)

Continuous compounding is the most profitable schedule for the lender at any given nominal rate, so reaching the same \\$250,000 target requires depositing LESS today under continuous compounding (\\$129,213.75) than under ordinary annual compounding (approximately \\$131,495.10) - the continuous figure is LOWER, not higher.`,
      `**C) The difference between the annual-compounding present value and the continuous-compounding present value is approximately \\$4,280.35.**  (false)

The correctly computed gap is 131,495.10 - 129,213.75 = \\$2,281.35, not \\$4,280.35 - the stated figure roughly doubles the true difference.`,
      `**D) If the horizon were shortened to 6 years at the same continuous 5.5% rate, the present value required today would be LESS than half of \\$129,213.75.**  (false)

Because discounting is exponential in time, halving the horizon does not halve the required deposit: at 6 years the required amount is \\$179,731.00, which is far MORE than half of the 12-year figure of \\$129,213.75, not less.`,
      `**E) The continuously compounded annual discount factor is approximately 0.9465, meaning about 5.35% of value is "lost" to discounting each year.**  (true)

$e^{-0.055}$ ≈ 0.9465 means only about 94.65% of a dollar's value one year from now is captured today, so approximately 5.35% is lost to discounting each year, matching the statement exactly.`,
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

**1.** $S_0=250,000e^{-0.66} = 250{,}000 \\times 0.516855 = \\$129{,}213.75$.

**2.** Under ordinary annual compounding instead, $S_0=250{,}000/(1.055)^{12} = 250{,}000/1.901209 = \\$131{,}495.10$, HIGHER than the continuous figure of \\$129,213.75, not lower, since continuous compounding is the most efficient schedule and needs less deposited today.

**3.** The correctly computed gap is 131,495.10 - 129,213.75 = \\$2,281.35, not \\$4,280.35.

**4.** Shortening the horizon to 6 years, $S_0'=250,000e^{-0.33} = 250{,}000 \\times 0.718924 = \\$179{,}731.00$, far MORE than half of the 12-year figure of \\$129,213.75, not less.

**5.** Since $e^{-0.055}\\approx0.9465$, about 5.35% of value is lost to discounting each year.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=TRUE`,
  },
  {
    id: `math-11-98`,
    case_id: `MATH 11.98`,
    title: `Continuous-Compounding Lump Sum vs. Discrete Annuity for a Biotech Milestone`,
    subsection: `11.5`,
    context: `A biotech company sets aside \\$75,000 today in an account offering continuous compounding at a nominal 6.25% annual rate, aiming to accumulate funds for a 9-year R&D milestone. Management compares this to instead depositing the same \\$75,000 total, spread evenly as \\$8,333.33 at the end of each of the 9 years, into a separate account earning a discrete 6.25% annual rate.`,
    statements: [
      `The lump sum's future value under continuous compounding is approximately \\$131,629.13.`,
      `The annuity's future value is approximately \\$96,757.60, which is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.`,
      `The lump-sum strategy outperforms the annuity strategy by more than \\$30,000.00.`,
      `This gap arises largely because the lump sum earns interest on the FULL \\$75,000 from day one, while the annuity's later deposits earn interest for only a very short time before the horizon ends.`,
      `If the company had instead invested the full \\$75,000 using discrete ANNUAL compounding at the same 6.25% rate for 9 years, the result would EXCEED the annuity strategy's future value of \\$96,757.60.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The lump sum's future value under continuous compounding is approximately \\$131,629.13.**  (true)

$S_{\\mathrm{cont}} = 75{,}000 \\times e^{0.5625} = \\$131{,}629.13$, matching the statement exactly.`,
      `**B) The annuity's future value is approximately \\$96,757.60, which is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.**  (true)

F9 = \\$96,757.60, which is indeed lower than the lump-sum continuous-compounding result of \\$131,629.13, illustrating that WHEN money is invested matters as much as HOW MUCH, even when total contributions are equal.`,
      `**C) The lump-sum strategy outperforms the annuity strategy by more than \\$30,000.00.**  (true)

The gap is 131,629.13 - 96,757.60 = \\$34,871.53, which exceeds \\$30,000.00, matching the statement exactly.`,
      `**D) This gap arises largely because the lump sum earns interest on the FULL \\$75,000 from day one, while the annuity's later deposits earn interest for only a very short time before the horizon ends.**  (true)

This is the correct conceptual explanation: front-loading the entire amount lets it compound over the full horizon, while spreading contributions out means later deposits have little to no time to grow before the milestone date.`,
      `**E) If the company had instead invested the full \\$75,000 using discrete ANNUAL compounding at the same 6.25% rate for 9 years, the result would EXCEED the annuity strategy's future value of \\$96,757.60.**  (true)

$S_{\\mathrm{discrete}} = 75{,}000 \\times (1.0625)^{9} = \\$129{,}426.15$, which does exceed the annuity strategy's future value of \\$96,757.60, matching the statement exactly (though it still falls short of the continuous-compounding result of \\$131,629.13).`,
    ],
    difficulty_level: `4/5`,
    sort_order: 98,
    solution_overview: `A biotech company sets aside \\$75,000 today in an account offering continuous compounding at a nominal 6.25% annual rate, aiming to accumulate funds for a 9-year R&D milestone. Management compares this to instead depositing the same \\$75,000 total, spread evenly as \\$8,333.33 at the end of each of the 9 years, into a separate account earning a discrete 6.25% annual rate.

**Part 1: Setup.**

Lump sum P = \\$75,000 today

Equivalent annuity: annual deposit a = \\$8,333.33 for n = 9 years

Nominal annual rate r = 6.25% = 0.0625

Compounding: continuous (lump sum) vs. discrete annual (annuity and comparison)

**Part 2: Formula.**

Continuous compounding: $S=Pe^{rt}$

Future value of ordinary annuity: $F_n=(a/r)[(1+r)^{n}-1]$

Discrete compounding: $S=P(1+r)^{n}$

**Part 3: Solve.**

**1.** $S_{\\mathrm{cont}} = 75{,}000 \\times e^{0.5625} = 75{,}000 \\times 1.755055 = \\$131{,}629.13$.

**2.** Meanwhile $F_9=(8{,}333.33/0.0625)[(1.0625)^{9}-1] = 133{,}333.33 \\times 0.725682 = \\$96{,}757.60$, well below the lump-sum figure despite equal total contributions.

**3.** The gap is 131,629.13 - 96,757.60 = \\$34,871.53, which exceeds \\$30,000.00.

**4.** Later deposits in the annuity have progressively less time to earn interest before the horizon ends, unlike the lump sum which compounds for the full nine years.

**5.** Investing the full \\$75,000 with discrete annual compounding instead, $S_{\\mathrm{discrete}} = 75{,}000 \\times (1.0625)^{9} = 75{,}000 \\times 1.725682 = \\$129{,}426.15$, which exceeds the annuity's \\$96,757.60 but still falls short of the continuous-compounding result of \\$131,629.13.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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
      `The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value of \\$37,500.00, which is LESS than double the present value of the 5-year annuity-due lease payments.`,
      `Comparing the accumulated continuous-compounding investment after 7 years to the perpetuity's present value, the continuous-compounding result is LARGER.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The present value of the annuity-due lease payments is approximately \\$18,110.94.**  (true)

Computing the ordinary annuity present value first (\\$16,769.39) and then multiplying by (1.08) to shift each payment one period earlier gives \\$18,110.94, matching the statement exactly.`,
      `**B) The future value of these 5 annuity-due payments, evaluated at the end of year 5, is approximately \\$27,610.90.**  (false)

Computing the ordinary annuity future value first (\\$24,639.72) and then multiplying by (1.08) gives \\$26,610.90, not \\$27,610.90 as stated.`,
      `**C) The \\$20,000 investment under continuous compounding at a nominal 6% rate accumulates, after 7 years, to approximately \\$31,439.24.**  (false)

$S = 20{,}000 \\times e^{0.42} = \\$30{,}439.24$, not \\$31,439.24 as stated.`,
      `**D) The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value of \\$37,500.00, which is LESS than double the present value of the 5-year annuity-due lease payments.**  (false)

The perpetuity's \\$37,500.00 present value actually exceeds double the annuity-due lease value (\\$36,221.88), so it is MORE than double, not less as stated.`,
      `**E) Comparing the accumulated continuous-compounding investment after 7 years to the perpetuity's present value, the continuous-compounding result is LARGER.**  (false)

The continuous-compounding investment grows to \\$30,439.24 after 7 years, which is LESS than the perpetuity's present value of \\$37,500.00, not larger.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 99,
    solution_overview: `A small business owner is juggling three separate financial arrangements, all at rates around 6-8%. First, an equipment lessor requires payments of \\$4,200 at the BEGINNING of each year as an annuity due for 5 years at 8% interest. Second, the owner separately invests \\$20,000 today for 7 years under continuous compounding at a nominal 6% rate to fund a future purchase. Third, the owner is considering a perpetuity option paying \\$3,000 per year forever, at 8%, for a maintenance reserve fund.

**Part 1: Setup.**

Annuity due: a = \\$4,200, n = 5 years, r = 8% = 0.08

Continuous-compounding investment: P = \\$20,000 today, nominal r = 6% = 0.06, over a seven-year horizon

Perpetuity: a = \\$3,000, r = 8% = 0.08

**Part 2: Formula.**

$P_{\\mathrm{due}}=(a/r)[1-1/(1+r)^{n}](1+r)$

$F_{\\mathrm{due}}=(a/r)[(1+r)^{n}-1](1+r)$

Continuous compounding: $S=Pe^{rt}$

Perpetuity: $P=a/r$

**Part 3: Solve.**

**1.** $P_{\\mathrm{ordinary}} = (4{,}200/0.08)[1-1/(1.08)^{5}] = 52{,}500 \\times 0.319417 = \\$16{,}769.39$, so $P_{\\mathrm{due}} = 16{,}769.39 \\times 1.08 = \\$18{,}110.94$.

**2.** $F_{\\mathrm{ordinary}} = (4{,}200/0.08)[(1.08)^{5}-1] = 52{,}500 \\times 0.469328 = \\$24{,}639.72$, so $F_{\\mathrm{due}} = 24{,}639.72 \\times 1.08 = \\$26{,}610.90$, not \\$27,610.90.

**3.** The continuous-compounding investment grows to $S = 20{,}000 \\times e^{0.42} = 20{,}000 \\times 1.521962 = \\$30{,}439.24$, not \\$31,439.24.

**4.** The maintenance perpetuity is worth 3,000/0.08 = \\$37,500.00 today, which exceeds double the annuity-due lease value of \\$36,221.88, so it is MORE than double, not less.

**5.** Comparing the two, the perpetuity's \\$37,500.00 present value is LARGER than the continuous-compounding result of \\$30,439.24, not smaller.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=FALSE, E=FALSE`,
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

$S = 150{,}000 \\times e^{0.50} = \\$247{,}308.20$, matching the statement exactly.`,
      `**B) Component 2's required deposit today, using discrete annual compounding, is approximately \\$57,396.85.**  (false)

$x = 80{,}000/(1.06)^{6} = \\$56{,}396.85$, not \\$57,396.85 as stated.`,
      `**C) Component 3's present value, the 12-year ordinary annuity of \\$10,000 at 7%, is approximately \\$79,429.40.**  (true)

$P_{12} = (10{,}000/0.07)[1 - 1/(1.07)^{12}] = \\$79{,}429.40$, matching the statement exactly.`,
      `**D) Component 4's present value, the growing perpetuity paying \\$5,000 next year and growing at 2% forever at a 7% required return, is exactly \\$100,000.00.**  (true)

P = 5,000/0.05 = \\$100,000.00, matching the statement exactly.`,
      `**E) Summing the present-day resources committed to all four components - Component 1's initial investment, Component 2's required deposit today, Component 3's present value, and Component 4's present value - the total exceeds \\$500,000.00.**  (false)

Adding all four present-day figures gives \\$385,826.25 (using the correct Component 2 figure of \\$56,396.85), which is LESS than \\$500,000.00, not more - the plan is comfortably within, not in excess of, the available resources implied by this comparison.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 100,
    solution_overview: `A family office is structuring a client's financial plan using four separate tools. Component 1: \\$150,000 is invested today in a continuous-compounding account at a nominal 5% rate for 10 years, to fund a future purchase. Component 2: the client needs \\$80,000 available in 6 years for a home renovation, funded today by a single deposit at a discrete 6% annual rate. Component 3: the client will receive an ordinary annuity of \\$10,000 at the end of each year for 12 years from a structured settlement, discounted at 7%. Component 4: the remainder will endow a scholarship as a growing perpetuity paying \\$5,000 next year, growing 2% annually forever, at a required return of 7%.

**Part 1: Setup.**

Component 1: P = \\$150,000, nominal r = 5% = 0.05, t = 10 years, continuous compounding

Component 2: target = \\$80,000, r = 6% = 0.06, n = 6 years, discrete annual compounding

Component 3: a = \\$10,000, n = 12 years, r = 7% = 0.07, ordinary annuity

Component 4: a1 = \\$5,000, g = 2% = 0.02, r = 7% = 0.07, growing perpetuity

**Part 2: Formula.**

Continuous compounding: $S=Pe^{rt}$

Discrete single-sum present value: $x=A/(1+r)^{n}$

$P_n=(a/r)[1-1/(1+r)^{n}]$

Growing perpetuity: $P=a_1/(r-g)$

**Part 3: Solve.**

**1.** Component 1: $S=150,000e^{0.50} = 150{,}000 \\times 1.648721 = \\$247{,}308.20$.

**2.** Component 2: $x=80{,}000/(1.06)^{6} = 80{,}000/1.418519 = \\$56{,}396.85$, not \\$57,396.85.

**3.** Component 3: $P_{12}=(10{,}000/0.07)[1-1/(1.07)^{12}] = 142{,}857.14 \\times 0.556005 = \\$79{,}429.40$.

**4.** Component 4: $P=5{,}000/(0.07-0.02) = 5{,}000/0.05 = \\$100{,}000.00$.

**5.** Summing all four figures gives 150,000.00 + 56,396.85 + 79,429.40 + 100,000.00 = \\$385,826.25, which is LESS than \\$500,000.00, not more.

**Answer.** A=TRUE, B=FALSE, C=TRUE, D=TRUE, E=FALSE`,
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

A 12% annual interest rate charged once per year, compounding annually, is simply used as the decimal r = 0.12 in every calculation for this loan.`,
      `**B) The required equal annual payment is approximately \\$14,593.54.**  (true)

Solving $a = rK/[1-(1+r)^{-n}]$ with r=0.12, K=60,000, n=6 gives a ≈ \\$14,593.54, matching exactly.`,
      `**C) The interest portion of the first payment is exactly \\$7,200.00.**  (true)

In the very first period, the entire \\$60,000 principal has been outstanding for the full year, so the interest charged is simply 12% of \\$60,000, which is exactly \\$7,200.00 with no rounding needed.`,
      `**D) The principal-repayment portion of the first payment is more than half of the total payment amount.**  (true)

Subtracting the \\$7,200.00 interest charge from the \\$14,593.54 payment leaves \\$7,393.54 for principal reduction. Comparing that to half of the payment (\\$7,296.77) shows the principal portion is indeed slightly larger than half, even in the very first year when interest is at its highest relative to later years.`,
      `**E) The outstanding balance immediately after the second payment is approximately \\$45,000.00.**  (false)

Carrying the amortization forward two full years - recomputing interest on the shrinking balance each time and subtracting the resulting principal portion - gives a balance of approximately \\$44,325.69 after the second payment, not \\$45,000.00.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 101,
    solution_overview: `A small bakery-supply distributor borrows \\$60,000 at the beginning of the year to buy a delivery van and a walk-in cooler. The loan is to be repaid in 6 equal instalments at the end of each year, with interest charged at 12% per year, compounding annually.

**Part 1: Setup.**

K (loan amount) = \\$60,000

r (annual interest rate) = 0.12

n = 6 equal annual payments

**Part 2: Formula.**

Equal-payment formula: $K = (a/r)[1-(1+r)^{-n}]$

Solving for the payment: $a = rK/[1-(1+r)^{-n}]$

Interest in a period = r × outstanding balance at the start of that period

Principal repaid in a period = payment - interest for that period

New balance = old balance - principal repaid

**Part 3: Solve.**

**1.** $a = 0.12\\times60{,}000/[1-(1.12)^{-6}]$ = 7,200/[1-0.506631] = 7,200/0.493369 ≈ \\$14,593.54.

**2.** Year-1 interest = 0.12 × \\$60,000 = \\$7,200.00.

**3.** Year-1 principal repaid = \\$14,593.54 - \\$7,200.00 = \\$7,393.54; half of the payment is \\$14,593.54/2 = \\$7,296.77, and \\$7,393.54 > \\$7,296.77.

**4.** Balance after year 1 = \\$60,000 - \\$7,393.54 = \\$52,606.46.

**5.** Year-2 interest = 0.12 × \\$52,606.46 = \\$6,312.77; Year-2 principal repaid = \\$14,593.54 - \\$6,312.77 = \\$8,280.77.

**6.** Balance after year 2 = \\$52,606.46 - \\$8,280.77 = \\$44,325.69.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE`,
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

Dividing the 9% nominal annual rate by 12 monthly periods gives a periodic rate of 0.75%, which is what the payment formula requires when payments and compounding both happen monthly.`,
      `**B) The required monthly payment is approximately \\$597.24.**  (true)

Plugging r=0.0075, K=24,000, n=48 into the payment formula gives a ≈ \\$597.24, matching exactly.`,
      `**C) The total amount paid over all 48 monthly payments is approximately \\$29,500.00.**  (false)

Multiplying the correct monthly payment by 48 months gives a total of approximately \\$28,667.57, not \\$29,500.00 - the stated figure overstates the true total by a few hundred dollars.`,
      `**D) The total interest paid over the life of the loan is approximately \\$4,667.57.**  (true)

Subtracting the \\$24,000 principal from the correctly computed total paid of about \\$28,667.57 leaves approximately \\$4,667.57 in total interest.`,
      `**E) If the same \\$24,000 were instead repaid in 4 equal annual instalments at the same nominal 9% rate, the required annual payment would be less than \\$2,388.96.**  (false)

Spreading the same debt over only 4 much larger annual payments, rather than 48 smaller monthly ones, actually requires a much bigger payment per period - about \\$7,408.05 - which is far above \\$2,388.96, not below it; fewer, larger periods mean each payment carries proportionally more principal and interest packed into it.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 102,
    solution_overview: `A used-car dealership finances a customer's \\$24,000 vehicle purchase over 4 years, with equal payments due at the end of each month and interest charged at a nominal annual rate of 9%, compounding monthly.

**Part 1: Setup.**

K (amount financed) = \\$24,000

Nominal annual rate = 9%, compounding monthly

Term = 4 years (48 monthly payments)

**Part 2: Formula.**

Monthly periodic rate: r = nominal annual rate / 12

Equal-payment formula: $a = rK/[1-(1+r)^{-n}]$

Total paid = a × n

Total interest = total paid - K

**Part 3: Solve.**

**1.** r = 0.09/12 = 0.0075; n = 4 × 12 = 48 months.

**2.** $a = 0.0075\\times24{,}000/[1-(1.0075)^{-48}]$ = 180/0.301329 ≈ \\$597.24.

**3.** Total paid = \\$597.24 × 48 ≈ \\$28,667.57 (not \\$29,500.00).

**4.** Total interest = \\$28,667.57 - \\$24,000.00 ≈ \\$4,667.57.

**5.** For 4 equal annual instalments at r=0.09, n=4: $a = 0.09\\times24{,}000/[1-(1.09)^{-4}]$ = 2,160/0.291676 ≈ \\$7,408.05, which is far more than \\$2,388.96, not less.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Solving $a = rK/[1-(1+r)^{-n}]$ with r=0.10, K=45,000, n=5 gives a ≈ \\$11,870.89, matching exactly.`,
      `**B) The interest portion of the first payment is \\$5,000.00.**  (false)

In the first year the full \\$45,000 principal is outstanding, so the interest charged is 10% of \\$45,000, which is \\$4,500.00, not \\$5,000.00.`,
      `**C) The outstanding balance immediately after the third payment is approximately \\$20,602.37.**  (true)

Carrying the amortization schedule forward year by year - recomputing interest on the shrinking balance each time - gives an outstanding balance of approximately \\$20,602.37 immediately after the third payment.`,
      `**D) In the fourth year, the interest portion of the payment is larger than the principal portion of the payment.**  (false)

By the fourth year the balance has already shrunk substantially, so the interest portion of that payment (about \\$2,060.24) is much smaller than the principal portion (about \\$9,810.65) - the opposite of what the statement claims. As a loan amortizes, later payments always shift further toward principal and away from interest.`,
      `**E) Adding up the principal-repayment portions of all 5 payments gives a total of exactly \\$46,200.00.**  (false)

Since the loan is fully paid off by the end of year 5 (the balance reaches exactly \\$0.00), the principal portions of all five payments must add up to precisely the original \\$45,000.00 borrowed - not \\$46,200.00.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 103,
    solution_overview: `A restaurant owner borrows \\$45,000 to renovate the dining room, agreeing to repay the loan in 5 equal annual instalments at the end of each year, with interest at 10% per year compounding annually.

**Part 1: Setup.**

K (loan amount) = \\$45,000

r (annual interest rate) = 0.10

n = 5 equal annual payments

**Part 2: Formula.**

Equal-payment formula: $a = rK/[1-(1+r)^{-n}]$

Interest in a period = r × outstanding balance at the start of that period

Principal repaid = payment - interest

New balance = old balance - principal repaid

**Part 3: Solve.**

**1.** $a = 0.10\\times45{,}000/[1-(1.10)^{-5}]$ = 4,500/0.379079 ≈ \\$11,870.89.

**2.** Year-1: interest = 0.10×45,000 = \\$4,500.00; principal = \\$11,870.89 - \\$4,500.00 = \\$7,370.89; balance = \\$37,629.11.

**3.** Year-2: interest = 0.10×37,629.11 = \\$3,762.91; principal = \\$8,107.98; balance = \\$29,521.14.

**4.** Year-3: interest = 0.10×29,521.14 = \\$2,952.11; principal = \\$8,918.77; balance = \\$20,602.37.

**5.** Year-4: interest = 0.10×20,602.37 = \\$2,060.24; principal = \\$11,870.89 - \\$2,060.24 = \\$9,810.65; here interest (\\$2,060.24) is much smaller than principal (\\$9,810.65).

**6.** Year-5: interest = 0.10×10,791.72 = \\$1,079.17; principal = \\$10,791.72; balance = \\$0.00.

**7.** Summing all five principal portions: \\$7,370.89 + \\$8,107.98 + \\$8,918.77 + \\$9,810.65 + \\$10,791.72 = \\$45,000.00 exactly.

**Answer.** A=TRUE, B=FALSE, C=TRUE, D=FALSE, E=FALSE`,
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

Because the very first payment happens at time zero, it isn't discounted at all and simply counts as a itself; the remaining 9 payments form an ordinary annuity discounted back from year 1, giving the combined multiplier of approximately 6.537048 shown above.`,
      `**B) The required equal payment a is approximately \\$22,946.14.**  (true)

Dividing the \\$150,000 owed by the combined factor of 6.537048 gives a ≈ \\$22,946.14, matching exactly.`,
      `**C) If instead the first payment were due at the end of year 1, the required equal payment would be lower than \\$22,946.14.**  (false)

Delaying the very first payment to the end of year 1 instead of paying it immediately means the lender receives money later and thus needs a larger payment to compensate - the ordinary-annuity payment of about \\$25,470.21 is actually higher than the due-annuity payment, not lower.`,
      `**D) The difference between the ordinary-annuity payment and the annuity-due payment is approximately \\$2,524.08.**  (true)

Subtracting the due-annuity payment from the ordinary-annuity payment gives 25,470.21 - 22,946.14 ≈ \\$2,524.08, matching exactly.`,
      `**E) The total of all 10 annuity-due payments combined is approximately \\$220,000.00.**  (false)

Multiplying the correct per-payment amount of \\$22,946.14 by the 10 total payments gives approximately \\$229,461.39 in total, not \\$220,000.00.`,
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

**1.** Combined factor: $1 + (1/0.11)[1-(1.11)^{-9}]$ = 1 + 9.090909×(1-0.391110) = 1 + 5.537048 ≈ 6.537048.

**2.** a = 150,000/6.537048 ≈ \\$22,946.14.

**3.** Ordinary-annuity payment: $a_{\\mathrm{ordinary}} = 0.11\\times150{,}000/[1-(1.11)^{-10}]$ = 16,500/0.647848 ≈ \\$25,470.21, which is higher than \\$22,946.14, not lower.

**4.** Difference = \\$25,470.21 - \\$22,946.14 ≈ \\$2,524.08.

**5.** Total of all 10 due payments = \\$22,946.14 × 10 ≈ \\$229,461.39, not \\$220,000.00.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Evaluating $[\\ln a - \\ln(a-rK)]/\\ln(1+r)$ with a=10,000, r=0.13, K=35,000 gives approximately 4.9663; since this is not a whole number, the smallest integer at or above it is 5, meaning 5 payments are needed.`,
      `**B) The first four payments are each exactly \\$10,000.00, totalling \\$40,000.00.**  (true)

Since 4 full periods pass before the loan is paid off, the first four payments are each the full fixed amount of \\$10,000.00, adding up to exactly \\$40,000.00.`,
      `**C) The fifth and final payment is approximately \\$9,682.53.**  (true)

Tracking the loan's growth at 13% for 4 years and comparing it to the accumulated value of the four \\$10,000 payments over the same span shows a small remaining debt at that point; carrying that remainder forward one more year at 13% interest gives a final payment of approximately \\$9,682.53.`,
      `**D) The total amount paid over the entire life of the loan is approximately \\$49,682.53.**  (true)

Adding the \\$40,000.00 from the four full payments to the approximately \\$9,682.53 final payment gives a total of about \\$49,682.53 paid over the life of the loan.`,
      `**E) The total interest paid over the life of the loan is less than the original \\$35,000 principal.**  (true)

Subtracting the original \\$35,000 principal from the total amount paid (about \\$49,682.53) leaves roughly \\$14,682.53 in total interest, which is indeed smaller than the \\$35,000 principal itself.`,
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

**1.** $[\\ln(10{,}000) - \\ln(10{,}000 - 0.13\\times35{,}000)]/\\ln(1.13)$ = [ln(10,000) - ln(5,450)]/ln(1.13) ≈ 4.9663, so the smallest integer n satisfying the condition is n = 5.

**2.** Four full payments of \\$10,000 total 4×10,000 = \\$40,000.00.

**3.** Future value of the loan after 4 years: $35{,}000\\times(1.13)^{4}\\approx\\$57{,}066.58$.

**4.** Future value of the 4 payments of \\$10,000, valued at year 4: $(10{,}000/0.13)\\times[(1.13)^{4} - 1]\\approx\\$48{,}497.97$.

**5.** Remaining debt at year 4 = \\$57,066.58 - \\$48,497.97 ≈ \\$8,568.61; carrying this forward one more year with interest gives the final payment: \\$8,568.61×1.13 ≈ \\$9,682.53.

**6.** Total paid = \\$40,000.00 + \\$9,682.53 ≈ \\$49,682.53; total interest = \\$49,682.53 - \\$35,000.00 ≈ \\$14,682.53, which is indeed less than \\$35,000.00.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

Applying the annuity-due present-value formula with a=100,000, r=0.10, n=7 gives $PV_{\\mathrm{B}} \\approx \\$535{,}526.07$, matching exactly.`,
      `**B) At a 10% annual rate, Option A is the cheaper choice.**  (true)

Since the present value of Option B at 10% (about \\$535,526.07) is higher than the \\$500,000 cash price, paying cash upfront is the cheaper option at this interest rate.`,
      `**C) At a 14% annual rate, the present value of Option B is approximately \\$495,000.00.**  (false)

Recomputing the annuity-due present value at the higher rate of 14% gives $PV_{\\mathrm{B}} \\approx \\$488{,}866.75$, not \\$495,000.00.`,
      `**D) At a 14% annual rate, Option B becomes the cheaper choice.**  (true)

At 14%, Option B's present value (about \\$488,866.75) drops below the \\$500,000 cash price, meaning the instalment plan is now the cheaper option - a higher discount rate reduces the present value of future payments more than it affects the already-immediate cash price.`,
      `**E) Option B must always be the more expensive choice in present-value terms, no matter what the interest rate is.**  (false)

The comparison in part (d) directly contradicts this claim: at 14% the instalment option, despite its larger total nominal payout, actually costs less in present-value terms than the cash option. Raising the interest rate shrinks the present value of payments spread out over time, so which option is cheaper genuinely depends on the interest rate used, not just on the raw total dollars paid.`,
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

**1.** At r=0.10: $PV_{\\mathrm{B}} = 100{,}000 + (100{,}000/0.10)[1-(1.10)^{-6}]$ = 100,000 + 1,000,000×0.435526 ≈ \\$535,526.07.

**2.** Comparing: \\$535,526.07 (Option B) > \\$500,000.00 (Option A), so at 10% cash is cheaper.

**3.** At r=0.14: $PV_{\\mathrm{B}} = 100{,}000 + (100{,}000/0.14)[1-(1.14)^{-6}]$ = 100,000 + 714,285.71×0.544813 ≈ \\$488,866.75 (not \\$495,000.00).

**4.** Comparing: \\$488,866.75 (Option B) < \\$500,000.00 (Option A), so at 14% the instalment plan becomes cheaper.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Applying simple interest to each of the four quarterly deposits for its own remaining fraction of the year and summing the results gives 250×(4+1.5×0.08) = \\$1,030.00, not \\$1,100.00.`,
      `**B) The account balance after 4 years is approximately \\$4,700.00.**  (false)

Treating \\$1,030.00 as an equivalent single annual deposit and compounding it as an ordinary annuity for 4 years gives approximately \\$4,641.30, not \\$4,700.00.`,
      `**C) The account balance after 3 years is approximately \\$3,500.00.**  (false)

Using the same year-end equivalent value but compounding for only 3 years instead of 4 gives approximately \\$3,343.79, not \\$3,500.00.`,
      `**D) If the four \\$250 deposits are instead treated as a flat \\$1,000.00 deposit at year-end, the resulting 4-year account balance is approximately \\$4,506.11.**  (true)

Ignoring the small simple-interest boost that each quarterly deposit earns before the year-end crediting date understates the true equivalent annual deposit (using \\$1,000.00 instead of the correct \\$1,030.00), which in turn understates the compounded 4-year balance, giving about \\$4,506.11 instead of the true \\$4,641.30 - confirming the simplified approach falls short of the correct answer.`,
      `**E) The difference between the correctly computed 4-year balance and the simplified calculation is approximately \\$200.00.**  (false)

The gap between the correct balance (≈ \\$4,641.30) and the simplified, interest-ignoring balance (≈ \\$4,506.11) is only about \\$135.18, not \\$200.00.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 107,
    solution_overview: `At the end of each quarter, a small business owner deposits \\$250 into a savings account that pays interest once per year, at an annual rate of 8%. Because each quarterly deposit sits in the account for only part of the year before the annual interest is credited, the bank applies simple interest to each deposit for the fraction of the year it remains on deposit before the year-end crediting date.

**Part 1: Setup.**

D (quarterly deposit) = \\$250

r (annual interest rate) = 0.08

Deposits made at the end of each quarter; interest credited once per year

**Part 2: Formula.**

Year-end equivalent of quarterly deposits: $D(1+3r/4) + D(1+2r/4) + D(1+r/4) + D(1+0) = D(4+1.5r)$

Future value after N years, treating the year-end equivalent value as an ordinary annuity payment a: $F_N = (a/r)[(1+r)^{N} - 1]$

**Part 3: Solve.**

**1.** Year-end equivalent = 250×(4 + 1.5×0.08) = 250×4.12 = \\$1,030.00 (not \\$1,100.00).

**2.** FV after 4 years: $(1{,}030.00/0.08)\\times[(1.08)^{4} - 1]$ = 12,875×0.360489 ≈ \\$4,641.30 (not \\$4,700.00).

**3.** FV after 3 years: $(1{,}030.00/0.08)\\times[(1.08)^{3} - 1]$ = 12,875×0.259712 ≈ \\$3,343.79 (not \\$3,500.00).

**4.** Simplified (wrong) year-end value ignoring mid-year interest = 4×250 = \\$1,000.00; simplified FV after 4 years: $(1{,}000/0.08)\\times[(1.08)^{4} - 1]\\approx\\$4{,}506.11$, which is indeed less than the correct \\$4,641.30.

**5.** Difference = \\$4,641.30 - \\$4,506.11 ≈ \\$135.18 (not \\$200.00).

**Answer.** A=FALSE, B=FALSE, C=FALSE, D=TRUE, E=FALSE`,
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

Plugging r=0.005, K=200,000, n=240 into the payment formula gives a ≈ \\$1,432.86, matching exactly.`,
      `**B) The outstanding balance immediately after the 60th monthly payment is approximately \\$169,799.20.**  (true)

The remaining 180 monthly payments still owed after month 60 form an ordinary annuity of their own; discounting them back at the same monthly rate gives an outstanding balance of approximately \\$169,799.20.`,
      `**C) After 5 years of payments, more than 25% of the original \\$200,000 principal has been repaid.**  (false)

Since the balance has only fallen from \\$200,000 to about \\$169,799.20 after 5 years, only about \\$30,200.80, or roughly 15.1%, of the original principal has actually been repaid so far - nowhere near 25%. Early mortgage payments go disproportionately toward interest rather than principal, which is exactly why the repaid fraction is still so small this early in a 20-year loan.`,
      `**D) The total interest paid during just the first 5 years is approximately \\$55,770.92.**  (true)

Subtracting the \\$30,200.80 of principal actually repaid from the \\$85,971.73 total paid over the first 60 months leaves approximately \\$55,770.92 in interest paid during those first 5 years.`,
      `**E) The total interest paid over the entire 20-year life of the loan is approximately \\$120,000.00.**  (false)

Multiplying the monthly payment by all 240 months and subtracting the original \\$200,000 principal gives a total lifetime interest cost of approximately \\$143,886.91, considerably more than the \\$120,000.00 claimed.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `A family takes out a \\$200,000 home mortgage at a nominal annual interest rate of 6%, compounding monthly, to be repaid with equal payments at the end of each month over 20 years. After making exactly 5 years of payments, they want to know how much principal is still outstanding.

**Part 1: Setup.**

K (mortgage amount) = \\$200,000

Nominal annual rate = 6%, compounding monthly

Term = 20 years (240 monthly payments)

m = 60 payments already made

**Part 2: Formula.**

Monthly periodic rate: r = nominal annual rate / 12

Equal-payment formula: $a = rK/[1-(1+r)^{-n}]$

Outstanding balance after m payments (of an n-payment loan): remaining balance: $(a/r)[1-(1+r)^{-(n-m)}]$

**Part 3: Solve.**

**1.** r = 0.06/12 = 0.005; n = 20×12 = 240 months.

**2.** $a = 0.005\\times200{,}000/[1-(1.005)^{-240}]$ = 1,000/0.697884 ≈ \\$1,432.86.

**3.** Remaining balance after 60 payments: $(1{,}432.86/0.005)\\times[1-(1.005)^{-180}]$ ≈ 286,572.42×0.592652 ≈ \\$169,799.20.

**4.** Principal repaid in 5 years = 200,000 - 169,799.20 = \\$30,200.80; as a fraction of the original principal, 30,200.80/200,000 ≈ 15.10%, which is not more than 25%.

**5.** Total paid in 5 years = 1,432.86×60 ≈ \\$85,971.73; interest paid in 5 years = 85,971.73 - 30,200.80 ≈ \\$55,770.92.

**6.** Total paid over all 240 months = 1,432.86×240 ≈ \\$343,886.91; total interest over the full term = 343,886.91 - 200,000.00 ≈ \\$143,886.91 (not \\$120,000.00).

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Evaluating $[\\ln a - \\ln(a-rK)]/\\ln(1+r)$ with a=25,000, r=0.14, K=120,000 gives approximately 8.508; rounding up to the next whole number gives n=9 total payments needed.`,
      `**B) The ninth and final payment is approximately \\$13,100.16.**  (true)

Comparing the loan's accumulated value after 8 years to the accumulated value of the eight \\$25,000 payments leaves a small remaining balance, which grows one more year of interest into a final payment of approximately \\$13,100.16.`,
      `**C) The total interest paid over the life of the loan is approximately \\$105,000.00.**  (false)

Since the final, ninth payment is smaller than \\$25,000 (only about \\$13,100.16), simply multiplying \\$25,000 by 9 and subtracting \\$120,000 overstates the true interest cost; the actual total interest paid is closer to \\$93,100.16, not \\$105,000.00.`,
      `**D) The total amount actually paid over the life of the loan is approximately \\$210,000.00.**  (false)

Adding the eight full \\$25,000 payments (\\$200,000.00) to the smaller final payment (about \\$13,100.16) gives a true total of approximately \\$213,100.16, not \\$210,000.00.`,
      `**E) Assuming all 9 payments are full \\$25,000 payments overstates the true total amount paid by more than \\$10,000.**  (true)

Treating the final payment as if it were also a full \\$25,000 payment produces a total of \\$225,000.00, which exceeds the true total of about \\$213,100.16 by roughly \\$11,899.84 - an overstatement of more than \\$10,000, confirming the claim.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 109,
    solution_overview: `A manufacturing company borrows \\$120,000 at 14% annual interest and chooses to repay a fixed \\$25,000 at the end of each year, continuing until the loan is retired, with a final smaller payment to clear whatever balance remains.

**Part 1: Setup.**

K (loan amount) = \\$120,000

r (annual interest rate) = 0.14

a (fixed annual payment) = \\$25,000

**Part 2: Formula.**

Number of periods needed: smallest integer n with $n \\ge [\\ln a - \\ln(a-rK)]/\\ln(1+r)$

Future value of loan after m years: $K(1+r)^{m}$

Future value of m fixed payments (valued at the time of the m-th payment): $(a/r)[(1+r)^{m} - 1]$

**Part 3: Solve.**

**1.** $[\\ln(25{,}000) - \\ln(25{,}000 - 0.14\\times120{,}000)]/\\ln(1.14)$ = [ln(25,000) - ln(8,200)]/ln(1.14) ≈ 8.508, so the smallest integer n satisfying the condition is n = 9 (8 full payments plus a final 9th payment).

**2.** Future value of the loan after 8 years: $120{,}000\\times(1.14)^{8}\\approx\\$342{,}310.37$.

**3.** Future value of the 8 payments of \\$25,000, valued at year 8: $(25{,}000/0.14)\\times[(1.14)^{8} - 1]\\approx\\$330{,}819.00$.

**4.** Remaining debt at year 8 = \\$342,310.37 - \\$330,819.00 ≈ \\$11,491.37; carrying forward one more year: \\$11,491.37×1.14 ≈ \\$13,100.16.

**5.** Total actually paid = 8×\\$25,000 + \\$13,100.16 = \\$200,000.00 + \\$13,100.16 ≈ \\$213,100.16; true total interest = \\$213,100.16 - \\$120,000.00 ≈ \\$93,100.16 (not \\$105,000.00).

**6.** If all 9 payments were mistakenly treated as full \\$25,000 payments, the (incorrect) total would be 9×\\$25,000 = \\$225,000.00, overstating the true total of \\$213,100.16 by \\$225,000.00 - \\$213,100.16 ≈ \\$11,899.84, which is indeed more than \\$10,000.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=TRUE`,
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

Because the first payment is made immediately and only the remaining 7 payments are discounted as an ordinary annuity, the combined present-value factor works out to approximately 5.563757, and dividing \\$90,000 by that factor gives a ≈ \\$16,176.12.`,
      `**B) The interest portion of the second loan payment is approximately \\$8,858.87.**  (true)

After the immediate first payment reduces the balance to \\$73,823.88, that balance accrues a full year of 12% interest before the second payment is made, giving an interest portion of approximately \\$8,858.87 for that second payment.`,
      `**C) The interest portion of the third loan payment is larger than the interest portion of the second payment.**  (false)

By the time of the third payment, the outstanding balance has already shrunk (to about \\$66,506.62), so the interest charged on it (about \\$7,980.79) is smaller than the interest charged in the previous period (about \\$8,858.87), not larger - interest portions shrink from payment to payment as the balance amortizes down.`,
      `**D) The year-end equivalent value of the reserve fund's quarterly deposits made during a single year is \\$1,240.50, and the reserve fund's balance after 3 years is approximately \\$4,066.48.**  (true)

Applying simple interest to each quarterly \\$300 deposit for its own remaining fraction of the year gives a year-end equivalent of \\$1,240.50, and compounding that equivalent amount annually as an ordinary annuity for 3 years gives a reserve balance of approximately \\$4,066.48.`,
      `**E) The combined total of the loan's first three payments is less than the reserve fund's balance after 3 years.**  (false)

Three annual loan payments of about \\$16,176.12 each add up to roughly \\$48,528.36, which vastly exceeds the reserve fund's much smaller 3-year balance of about \\$4,066.48 - the loan payments are far larger than the reserve fund total, not smaller, since the loan involves a much larger principal amount than the modest quarterly reserve deposits.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 110,
    solution_overview: `A manufacturing company borrows \\$90,000 to buy new equipment, to be repaid in 8 equal annual instalments with the first payment due immediately and the rest due at the beginning of each following year, at an annual interest rate of 12%. Independently, to prepare for future maintenance costs, the company also deposits \\$300 at the end of each quarter into a separate reserve account that pays 9% annual interest, credited once per year.

**Part 1: Setup.**

Equipment loan: K = \\$90,000, r = 0.12, n = 8 payments, first one immediate

Reserve fund: quarterly deposit = \\$300, annual rate = 0.09, interest credited once per year, N = 3 years

**Part 2: Formula.**

Annuity-due present value: $K = a + (a/r)[1-(1+r)^{-(n-1)}]$

Amortization after the immediate first payment: remaining loan behaves as an ordinary annuity of a for the remaining n-1 payments

Interest each period = r × balance at start of that period

Year-end equivalent of quarterly deposits: $D(4+1.5r)$

Future value after N years, treating the year-end equivalent value as an ordinary annuity payment a: $F_N = (a/r)[(1+r)^{N} - 1]$

**Part 3: Solve.**

**1.** Combined factor: $1 + (1/0.12)[1-(1.12)^{-7}]$ ≈ 1 + 4.563757 = 5.563757; a = 90,000/5.563757 ≈ \\$16,176.12.

**2.** Balance immediately after the first (immediate) payment = \\$90,000 - \\$16,176.12 = \\$73,823.88.

**3.** Second payment (1 year later): interest = 0.12×73,823.88 ≈ \\$8,858.87; principal = \\$16,176.12 - \\$8,858.87 ≈ \\$7,317.26; new balance ≈ \\$66,506.62.

**4.** Third payment (2 years later): interest = 0.12×66,506.62 ≈ \\$7,980.79, which is smaller than the second payment's interest of \\$8,858.87, not larger; principal ≈ \\$8,195.33; new balance ≈ \\$58,311.30.

**5.** Reserve fund year-end equivalent = 300×(4+1.5×0.09) = 300×4.135 = \\$1,240.50; FV after 3 years: $(1{,}240.50/0.09)\\times[(1.09)^{3} - 1]$ ≈ 13,783.33×0.295029 ≈ \\$4,066.48.

**6.** Total of the loan's first three payments = 3×\\$16,176.12 ≈ \\$48,528.36, which is far more than the reserve fund's 3-year balance of about \\$4,066.48, not less.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

Applying the annuity-due formula with a=95,000, r=0.09, n=7 gives $PV_{\\mathrm{II}} \\approx \\$521{,}162.27$, matching exactly.`,
      `**B) At a 9% annual rate, the present value of Schedule III is approximately \\$540,000.00.**  (false)

Adding the \\$150,000 upfront cash to the ordinary-annuity present value of the later \\$60,000 payments (discounted at 9% for 10 years) gives approximately \\$535,059.46, not \\$540,000.00.`,
      `**C) At a 9% annual rate, Schedule I is the cheapest of the three schedules.**  (true)

At 9%, the three present values rank as \\$500,000.00 (Schedule I) < \\$521,162.27 (Schedule II) < \\$535,059.46 (Schedule III), so paying cash outright is the cheapest option at this interest rate.`,
      `**D) At a 13% annual rate, the present value of Schedule II is approximately \\$474,767.23.**  (true)

Recomputing Schedule II's present value at the higher rate of 13% gives $PV_{\\mathrm{II}} \\approx \\$474{,}767.23$, matching exactly.`,
      `**E) At a 13% annual rate, Schedule III becomes the cheapest of the three schedules.**  (false)

At 13%, Schedule III's present value (about \\$475,574.61) is still slightly higher than Schedule II's (about \\$474,767.23) - Schedule II, not Schedule III, is the cheapest schedule at this higher rate, even though Schedule III has narrowed the gap considerably compared to how far behind it was at 9%.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 111,
    solution_overview: `A construction firm wants to buy a building site and is choosing among three payment schedules. Schedule I: pay \\$500,000 in cash immediately. Schedule II: pay \\$95,000 per year for 7 years, with the first instalment paid immediately. Schedule III: pay \\$150,000 in cash immediately, plus \\$60,000 per year for 10 years, with the first of these instalments paid one year later. The firm wants to know which schedule is cheapest in present-value terms first at a 9% annual interest rate, and then at a 13% annual interest rate.

**Part 1: Setup.**

Schedule I: \\$500,000 cash today

Schedule II: a = \\$95,000/year, n = 7, first payment immediate

Schedule III: \\$150,000 cash today + a = \\$60,000/year, n = 10, first of these payments one year later

Interest rates considered: 9% and 13% per year

**Part 2: Formula.**

Annuity-due present value: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$

Ordinary-annuity present value: $PV = (a/r)[1-(1+r)^{-n}]$

Schedule III present value: upfront cash + ordinary-annuity present value of the later instalments

**Part 3: Solve.**

**1.** At r=0.09: $PV_{\\mathrm{II}} = 95{,}000 + (95{,}000/0.09)[1-(1.09)^{-6}]$ ≈ 95,000 + 1,055,556×0.403471 ≈ \\$521,162.27.

**2.** At r=0.09: $PV_{\\mathrm{III}} = 150{,}000 + (60{,}000/0.09)[1-(1.09)^{-10}]$ ≈ 150,000 + 666,667×0.577589 ≈ \\$535,059.46 (not \\$540,000.00).

**3.** Comparing at 9%: $PV_{\\mathrm{I}} = \\$500{,}000.00 < PV_{\\mathrm{II}} \\approx \\$521{,}162.27 < PV_{\\mathrm{III}} \\approx \\$535{,}059.46$, so Schedule I is cheapest.

**4.** At r=0.13: $PV_{\\mathrm{II}} = 95{,}000 + (95{,}000/0.13)[1-(1.13)^{-6}]$ ≈ 95,000 + 730,769×0.518945 ≈ \\$474,767.23.

**5.** At r=0.13: $PV_{\\mathrm{III}} = 150{,}000 + (60{,}000/0.13)[1-(1.13)^{-10}]$ ≈ 150,000 + 461,538×0.705115 ≈ \\$475,574.61.

**6.** Comparing at 13%: $PV_{\\mathrm{II}} \\approx \\$474{,}767.23 < PV_{\\mathrm{III}} \\approx \\$475{,}574.61 < PV_{\\mathrm{I}} = \\$500{,}000.00$, so Schedule II is now cheapest, not Schedule III - though Schedule III has come very close to overtaking it.

**Answer.** A=TRUE, B=FALSE, C=TRUE, D=TRUE, E=FALSE`,
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

Applying the annuity-due formula with a=140,000, r=0.08, n=9 gives $PV_{\\mathrm{II}} \\approx \\$944{,}529.45$, matching exactly.`,
      `**B) At an 8% annual rate, the present value of Schedule III is approximately \\$871,117.14.**  (true)

Adding the \\$300,000 upfront cash to the ordinary-annuity present value of the later \\$80,000 payments (discounted at 8% for 11 years) gives approximately \\$871,117.14, matching exactly.`,
      `**C) At an 8% annual rate, Schedule I is the cheapest of the three schedules.**  (true)

At 8%, the three present values rank as \\$850,000.00 (Schedule I) < \\$871,117.14 (Schedule III) < \\$944,529.45 (Schedule II), so paying cash outright is the cheapest option at this interest rate.`,
      `**D) At a 12% annual rate, the present value of Schedule III is approximately \\$775,015.93.**  (true)

Recomputing Schedule III's present value at the higher rate of 12% gives $PV_{\\mathrm{III}} \\approx \\$775{,}015.93$, matching exactly.`,
      `**E) At a 12% annual rate, Schedule II becomes the cheapest of the three schedules.**  (false)

At 12%, Schedule III's present value (about \\$775,015.93) is actually lower than Schedule II's (about \\$835,469.57) - Schedule III, not Schedule II, becomes the cheapest option at this higher rate, since raising the discount rate shrinks the present value of Schedule III's smaller, longer-running instalments even more than it shrinks Schedule II's larger, shorter-running ones.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 112,
    solution_overview: `A hospital system is negotiating the purchase of a new imaging center and equipment package, and is choosing among three payment schedules. Schedule I: pay \\$850,000 in cash immediately. Schedule II: pay \\$140,000 per year for 9 years, with the first instalment paid immediately. Schedule III: pay \\$300,000 in cash immediately, plus \\$80,000 per year for 11 years, with the first of these instalments paid one year later. The hospital wants to know which schedule is cheapest in present-value terms first at an 8% annual interest rate, and then at a 12% annual interest rate.

**Part 1: Setup.**

Schedule I: \\$850,000 cash today

Schedule II: a = \\$140,000/year, n = 9, first payment immediate

Schedule III: \\$300,000 cash today + a = \\$80,000/year, n = 11, first of these payments one year later

Interest rates considered: 8% and 12% per year

**Part 2: Formula.**

Annuity-due present value: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$

Ordinary-annuity present value: $PV = (a/r)[1-(1+r)^{-n}]$

Schedule III present value: upfront cash + ordinary-annuity present value of the later instalments

**Part 3: Solve.**

**1.** At r=0.08: $PV_{\\mathrm{II}} = 140{,}000 + (140{,}000/0.08)[1-(1.08)^{-8}]$ ≈ 140,000 + 1,750,000×0.459640 ≈ \\$944,529.45.

**2.** At r=0.08: $PV_{\\mathrm{III}} = 300{,}000 + (80{,}000/0.08)[1-(1.08)^{-11}]$ ≈ 300,000 + 1,000,000×0.571146 ≈ \\$871,117.14.

**3.** Comparing at 8%: $PV_{\\mathrm{I}} = \\$850{,}000.00 < PV_{\\mathrm{III}} \\approx \\$871{,}117.14 < PV_{\\mathrm{II}} \\approx \\$944{,}529.45$, so Schedule I is cheapest.

**4.** At r=0.12: $PV_{\\mathrm{III}} = 300{,}000 + (80{,}000/0.12)[1-(1.12)^{-11}]$ ≈ 300,000 + 666,667×0.712524 ≈ \\$775,015.93.

**5.** At r=0.12: $PV_{\\mathrm{II}} = 140{,}000 + (140{,}000/0.12)[1-(1.12)^{-8}]$ ≈ 140,000 + 1,166,667×0.596117 ≈ \\$835,469.57.

**6.** Comparing at 12%: $PV_{\\mathrm{III}} \\approx \\$775{,}015.93 < PV_{\\mathrm{II}} \\approx \\$835{,}469.57 < PV_{\\mathrm{I}} = \\$850{,}000.00$, so Schedule III becomes cheapest, not Schedule II.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE`,
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

Applying the annuity-due formula with a=340,000, r=0.075, n=10 gives $PV_{\\mathrm{II}} \\approx \\$2{,}508{,}821.59$, matching exactly.`,
      `**B) At a 7.5% annual rate, the present value of Schedule III is approximately \\$2,250,000.00.**  (false)

Adding the \\$600,000 upfront cash to the ordinary-annuity present value of the later \\$250,000 payments (discounted at 7.5% for 9 years) gives approximately \\$2,194,721.76, not \\$2,250,000.00.`,
      `**C) At a 7.5% annual rate, Schedule I is cheaper than Schedule II.**  (true)

At 7.5%, \\$2,400,000.00 (Schedule I) is indeed less than approximately \\$2,508,821.59 (Schedule II), so paying cash outright beats the annuity-due schedule at this lower rate.`,
      `**D) At an 11.5% annual rate, the present value of Schedule II is approximately \\$2,100,000.00.**  (false)

Recomputing Schedule II's present value at the higher rate of 11.5% gives $PV_{\\mathrm{II}} \\approx \\$2{,}186{,}561.89$, not \\$2,100,000.00.`,
      `**E) At an 11.5% annual rate, Schedule I is still cheaper than Schedule II.**  (false)

At the higher rate of 11.5%, Schedule II's present value drops to approximately \\$2,186,561.89, which is now lower than the \\$2,400,000.00 cash price - the annuity-due schedule has overtaken cash as the cheaper option, reversing the ranking that held at 7.5%. Raising the discount rate reduces the present value of a stream of future payments more sharply than it affects an already-immediate cash amount, which is exactly what causes this kind of ranking reversal.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 113,
    solution_overview: `A shipping company is negotiating the purchase of a cargo vessel and is choosing among three payment schedules. Schedule I: pay \\$2,400,000 in cash immediately. Schedule II: pay \\$340,000 per year for 10 years, with the first instalment paid immediately. Schedule III: pay \\$600,000 in cash immediately, plus \\$250,000 per year for 9 years, with the first of these instalments paid one year later. The company wants to know how the ranking of Schedule I versus Schedule II changes between a 7.5% annual interest rate and a 11.5% annual interest rate.

**Part 1: Setup.**

Schedule I: \\$2,400,000 cash today

Schedule II: a = \\$340,000/year, n = 10, first payment immediate

Schedule III: \\$600,000 cash today + a = \\$250,000/year, n = 9, first of these payments one year later

Interest rates considered: 7.5% and 11.5% per year

**Part 2: Formula.**

Annuity-due present value: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$

Ordinary-annuity present value: $PV = (a/r)[1-(1+r)^{-n}]$

Schedule III present value: upfront cash + ordinary-annuity present value of the later instalments

**Part 3: Solve.**

**1.** At r=0.075: $PV_{\\mathrm{II}} = 340{,}000 + (340{,}000/0.075)[1-(1.075)^{-9}]$ ≈ 340,000 + 4,533,333×0.478550 ≈ \\$2,508,821.59.

**2.** At r=0.075: $PV_{\\mathrm{III}} = 600{,}000 + (250{,}000/0.075)[1-(1.075)^{-9}]$ ≈ 600,000 + 3,333,333×0.478550 ≈ \\$2,194,721.76 (not \\$2,250,000.00).

**3.** Comparing at 7.5%: $PV_{\\mathrm{I}} = \\$2{,}400{,}000.00 < PV_{\\mathrm{II}} \\approx \\$2{,}508{,}821.59$, so cash is cheaper than the annuity-due schedule at this rate.

**4.** At r=0.115: $PV_{\\mathrm{II}} = 340{,}000 + (340{,}000/0.115)[1-(1.115)^{-9}]$ ≈ 340,000 + 2,956,522×0.624582 ≈ \\$2,186,561.89 (not \\$2,100,000.00).

**5.** At r=0.115: $PV_{\\mathrm{III}} = 600{,}000 + (250{,}000/0.115)[1-(1.115)^{-9}] \\approx \\$1{,}957{,}766.09$.

**6.** Comparing at 11.5%: $PV_{\\mathrm{II}} \\approx \\$2{,}186{,}561.89 < PV_{\\mathrm{I}} = \\$2{,}400{,}000.00$, so the annuity-due schedule has now become cheaper than paying cash - the ranking between Schedules I and II has flipped compared to the 7.5% case (Schedule III remains the cheapest of all three at both rates).

**Answer.** A=TRUE, B=FALSE, C=TRUE, D=FALSE, E=FALSE`,
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

r = (9,600/8,000) - 1 = 0.20 = 20%, exactly as calculated above.`,
      `**B) At an interest rate of 15%, the net present value of this project is positive.**  (true)

NPV = -8,000 + 9,600/1.15 = -8,000 + 8,347.83 = \\$347.83, which is positive (15% is below the 20% IRR, so NPV must be positive).`,
      `**C) At an interest rate of 25%, the net present value of this project is positive.**  (false)

NPV = -8,000 + 9,600/1.25 = -8,000 + 7,680.00 = -\\$320.00, which is negative, not positive (25% is above the 20% IRR).`,
      `**D) If the return had instead been \\$10,000, with the outlay unchanged, the internal rate of return would exceed 24%.**  (true)

With b = 10,000: r = (10,000/8,000) - 1 = 1.25 - 1 = 0.25 = 25%, which exceeds 24%.`,
      `**E) This project has a unique internal rate of return greater than -1.**  (true)

The chapter's theorem states that if $a_0 < 0$ and all subsequent returns are positive, a unique internal rate of return $r^{*} > -1$ exists. Here $a_0 = -\\$8{,}000 < 0$ and $a_1 = \\$9{,}600 > 0$, so the condition is satisfied.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 114,
    solution_overview: `A small bakery invests \\$8,000 in a new commercial oven. The oven is expected to generate a single net return of \\$9,600, paid in full at the end of one year.

**Part 1: Setup.**

$a_0 = -\\$8{,}000$ (initial outlay)

$a_1 = \\$9{,}600$ (return at end of Year 1)

$n = 1$ year

**Part 2: Formula.**

For a one-year project with outlay $a$ and return $b$: $-a + b(1+r)^{-1} = 0$

Solving for $r$: $r = (b/a) - 1$

**Part 3: Solve.**

**1.** Step 1: Identify $a = \\$8{,}000$ (amount invested) and $b = \\$9{,}600$ (amount returned).

**2.** Step 2: $r = (b/a) - 1 = (9{,}600/8{,}000) - 1 = 1.20 - 1 = 0.20 = 20\\%$.

**3.** Step 3 (for later statements): NPV at rate $r$ is $A = a_0 + a_1/(1+r)$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=TRUE`,
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

As calculated above, r ≈ 10.92%.`,
      `**B) At an interest rate of 8%, the net present value of this project is positive.**  (true)

NPV = -12,000 + 7,000/1.08 + 7,000/1.1664 = -12,000 + 6,481.48 + 6,001.37 = \\$482.85, positive (8% is below the IRR).`,
      `**C) At an interest rate of 12%, the net present value of this project is positive.**  (false)

NPV = -12,000 + 7,000/1.12 + 7,000/1.2544 = -12,000 + 6,250.00 + 5,580.36 = -\\$169.64, negative, not positive (12% is above the IRR).`,
      `**D) If the Year 2 return had instead been \\$8,000, with Year 1 unchanged at \\$7,000, the internal rate of return would exceed 13%.**  (true)

With $a_2 = \\$8{,}000$: $8{,}000s^{2} + 7{,}000s - 12{,}000 = 0$ → $8s^{2} + 7s - 12 = 0$. Discriminant = 49 + 384 = 433, √433 ≈ 20.809. $s = (-7 + 20.809)/16 \\approx 0.8630$, so $r = 1/0.8630 - 1 \\approx 0.1587 = 15.87\\%$, which exceeds 13%.`,
      `**E) Doubling both returns to \\$14,000 in Year 1 and \\$14,000 in Year 2, with the outlay unchanged at \\$12,000, would result in an internal rate of return of approximately 21.84%.**  (false)

With both $a_1$ and $a_2$ equal to \\$14,000, the equation becomes $14{,}000s^{2} + 14{,}000s - 12{,}000 = 0$, i.e. $7s^{2} + 7s - 6 = 0$. Discriminant = 49 + 168 = 217, √217 ≈ 14.731. $s = (-7 + 14.731)/14 \\approx 0.5522$, so $r = 1/0.5522 - 1 \\approx 0.8109 = 81.09\\%$ — far more than double 10.92% (which would be ≈21.84%). Doubling the cash flows does not proportionally double the IRR.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 115,
    solution_overview: `A logistics company spends \\$12,000 upgrading a delivery vehicle. The upgrade is expected to generate net returns of \\$7,000 at the end of Year 1 and \\$7,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$12{,}000$

$a_1 = \\$7{,}000$

$a_2 = \\$7{,}000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

Substitute $s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step 1: $-12{,}000 + 7{,}000/(1+r) + 7{,}000/(1+r)^{2} = 0$.

**2.** Step 2: Let $s = (1+r)^{-1}$.

**3.** Then $7{,}000s^{2} + 7{,}000s - 12{,}000 = 0$.

**4.** Dividing by 1,000: $7s^{2} + 7s - 12 = 0$.

**5.** Step 3: Discriminant: $7^{2} + 4(7)(12) = 49 + 336 = 385$.

**6.** √385 ≈ 19.6214.

**7.** Step 4: $s = (-7 + 19.6214)/14 = 12.6214/14 \\approx 0.90153$.

**8.** Step 5: $r = 1/s - 1 = 1/0.90153 - 1 \\approx 0.10922 \\approx 10.92\\%$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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

As calculated above, r ≈ 11.98%.`,
      `**B) At a discount rate of 10%, the net present value of the project is positive.**  (true)

NPV = -20,000 + 9,000/1.10 + 15,000/1.21 = -20,000 + 8,181.82 + 12,396.69 = \\$578.51, positive (10% is below the IRR).`,
      `**C) At a discount rate of 14%, the net present value of the project is positive.**  (false)

NPV = -20,000 + 9,000/1.14 + 15,000/1.2996 = -20,000 + 7,894.74 + 11,542.01 = -\\$563.25, negative, not positive (14% is above the IRR).`,
      `**D) If the Year 1 return were \\$9,000 higher, with Year 2 unchanged at \\$15,000, the internal rate of return would exceed 30%.**  (true)

With $a_1 = \\$18{,}000$: $15{,}000s^{2} + 18{,}000s - 20{,}000 = 0$ → $15s^{2} + 18s - 20 = 0$. Discriminant = 324 + 1,200 = 1,524, √1,524 ≈ 39.038. $s = (-18 + 39.038)/30 \\approx 0.7013$, $r = 1/0.7013 - 1 \\approx 0.4259 = 42.59\\%$, which exceeds 30%.`,
      `**E) The sum of all cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$4,000.**  (true)

$a_0 + a_1 + a_2 = -20{,}000 + 9{,}000 + 15{,}000 = 4{,}000$ (a positive \\$4,000), and this matches the chapter's stated result that the internal rate of return is positive whenever this sum is positive — consistent with the computed $r \\approx 11.98\\% > 0$.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 116,
    solution_overview: `A boutique invests \\$20,000 in inventory and point-of-sale equipment. It expects net returns of \\$9,000 at the end of Year 1 and \\$15,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$20{,}000$

$a_1 = \\$9{,}000$

$a_2 = \\$15{,}000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

$s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step 1: $15{,}000s^{2} + 9{,}000s - 20{,}000 = 0$.

**2.** Dividing by 1,000: $15s^{2} + 9s - 20 = 0$.

**3.** Step 2: Discriminant: $9^{2} + 4(15)(20) = 81 + 1{,}200 = 1{,}281$.

**4.** √1,281 ≈ 35.791.

**5.** Step 3: $s = (-9 + 35.791)/30 \\approx 0.89304$.

**6.** Step 4: $r = 1/0.89304 - 1 \\approx 0.11978 \\approx 11.98\\%$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=TRUE`,
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

As calculated above, $r_X = 15\\%$.`,
      `**B) The internal rate of return of Project Y is exactly 12.5%.**  (true)

As calculated above, $r_Y = 12.5\\%$.`,
      `**C) Based on the internal rate of return criterion, Project Y should be preferred over Project X.**  (false)

The chapter's criterion is to prefer the project with the higher internal rate of return. Since 15% (X) is higher than 12.5% (Y), X should be preferred, not Y.`,
      `**D) At an interest rate of 11%, Project X has positive net present value while Project Y has negative net present value.**  (false)

$NPV_X$ at 11% = -15,000 + 17,250/1.11 = -15,000 + 15,540.54 = \\$540.54 (positive). $NPV_Y$ at 11% = -22,000 + 24,750/1.11 = -22,000 + 22,297.30 = \\$297.30, which is also positive, not negative, because 11% is still below Y's 12.5% IRR.`,
      `**E) If Project Y's payoff had instead been \\$25,000, with the outlay unchanged at \\$22,000, its internal rate of return would exceed that of Project X.**  (false)

With $b = \\$25{,}000$: $r_Y = (25{,}000/22{,}000) - 1 \\approx 0.1364 = 13.64\\%$, which is still lower than Project X's 15%, so it would not exceed X's rate.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 117,
    solution_overview: `A retailer is choosing between two one-year uses of surplus cash. Project X: invest \\$15,000 now, receive \\$17,250 in one year. Project Y: invest \\$22,000 now, receive \\$24,750 in one year.

**Part 1: Setup.**

Project X: $a = \\$15{,}000$, $b = \\$17{,}250$

Project Y: $a = \\$22{,}000$, $b = \\$24{,}750$

$n = 1$ year for each project

**Part 2: Formula.**

$r = (b/a) - 1$ (one-year rate of return, applied to each project)

**Part 3: Solve.**

**1.** Step 1: $r_X = (17{,}250/15{,}000) - 1 = 1.15 - 1 = 0.15 = 15\\%$.

**2.** Step 2: $r_Y = (24{,}750/22{,}000) - 1 = 1.125 - 1 = 0.125 = 12.5\\%$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=FALSE, E=FALSE`,
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

As calculated in Step 1, A ≈ \\$4,011.84 at r = 8%, which rounds to approximately \\$4,012.`,
      `**B) At r = 12%, the net present value of the project is positive.**  (false)

As calculated in Step 2, A ≈ -\\$444.83 at r = 12%, which is negative, not positive.`,
      `**C) The internal rate of return of this project lies between 12% and 15%.**  (false)

The NPV is already negative at both r = 12% (-\\$444.83) and r = 15% (-\\$3,423.60), and it was positive at r = 8%. This means the rate where NPV crosses zero lies between 8% and 12%, not between 12% and 15%.`,
      `**D) At r = 15%, the net present value of the project is approximately -\\$3,424.**  (true)

As calculated in Step 3, A ≈ -\\$3,423.60 at r = 15%, which rounds to approximately -\\$3,424.`,
      `**E) $a_1$, $a_2$, and $a_3$ are all positive.**  (false)

The theorem requires $a_0 < 0$ and all of $a_1, \\ldots, a_n$ to be strictly positive. Here $a_1 = -\\$3{,}000$, which is negative, so this precondition is not met — the theorem's guarantee of a unique internal rate of return does not apply to this cash flow pattern.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 118,
    solution_overview: `A manufacturing upgrade has an initial outlay of \\$45,000. Installation disruption causes a net cash outflow of \\$3,000 at the end of Year 1, followed by net returns of \\$28,000 at the end of Year 2 and \\$35,000 at the end of Year 3.

**Part 1: Setup.**

$a_0 = -\\$45{,}000$

$a_1 = -\\$3{,}000$

$a_2 = \\$28{,}000$

$a_3 = \\$35{,}000$

$n = 3$ years

**Part 2: Formula.**

$A = a_0 + a_1/(1+r) + a_2/(1+r)^{2} + a_3/(1+r)^{3}$

**Part 3: Solve.**

**1.** Step 1 (r = 8%): A = -45,000 - 3,000/1.08 + 28,000/1.1664 + 35,000/1.259712 = -45,000 - 2,777.78 + 24,005.49 + 27,784.13 = \\$4,011.84.

**2.** Step 2 (r = 12%): A = -45,000 - 3,000/1.12 + 28,000/1.2544 + 35,000/1.404928 = -45,000 - 2,678.57 + 22,321.43 + 24,912.31 = -\\$444.83.

**3.** Step 3 (r = 15%): A = -45,000 - 3,000/1.15 + 28,000/1.3225 + 35,000/1.520875 = -45,000 - 2,608.70 + 21,172.02 + 23,013.07 = -\\$3,423.60.

**Answer.** A=TRUE, B=FALSE, C=FALSE, D=TRUE, E=FALSE`,
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

As calculated above, r ≈ 10.78%, not 14.5%.`,
      `**B) At an interest rate of 9%, the net present value of the project is negative.**  (false)

NPV = -34,000 + 16,000/1.09 + 24,000/1.1881 = -34,000 + 14,678.90 + 20,200.32 = \\$879.22, which is positive, not negative (9% is below the 10.78% IRR).`,
      `**C) At an interest rate of 13%, the net present value of the project is negative.**  (true)

NPV = -34,000 + 16,000/1.13 + 24,000/1.2769 = -34,000 + 14,159.29 + 18,795.52 = -\\$1,045.19, which is negative, confirming the statement (13% is above the IRR).`,
      `**D) If the Year 2 return had instead been \\$20,000, with Year 1 unchanged at \\$16,000, the internal rate of return would exceed the internal rate of return of the original project.**  (false)

With $a_2 = \\$20{,}000$: $20{,}000s^{2} + 16{,}000s - 34{,}000 = 0$ → $10s^{2} + 8s - 17 = 0$. Discriminant = 64 + 680 = 744, √744 ≈ 27.276. $s = (-8 + 27.276)/20 \\approx 0.9638$, $r = 1/0.9638 - 1 \\approx 0.0375 = 3.75\\%$, which is far lower than 10.78%, not higher.`,
      `**E) Reducing the initial outlay to \\$30,000, with returns unchanged at \\$16,000 and \\$24,000, would lower the internal rate of return.**  (false)

With $a_0 = -\\$30{,}000$: $24{,}000s^{2} + 16{,}000s - 30{,}000 = 0$ → $12s^{2} + 8s - 15 = 0$. Discriminant: $64 + 720 = 784 = 28^{2}$ exactly. $s = (-8 + 28)/24 = 20/24 \\approx 0.83333$, $r = 1/0.83333 - 1 = 0.20 = 20\\%$, which is much higher than the original 10.78% — a smaller outlay for the same returns raises the internal rate of return, it does not lower it.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 119,
    solution_overview: `A cafe chain invests \\$34,000 in a new espresso machine line. Expected net returns are \\$16,000 at the end of Year 1 and \\$24,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$34{,}000$

$a_1 = \\$16{,}000$

$a_2 = \\$24{,}000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

$s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step 1: $24{,}000s^{2} + 16{,}000s - 34{,}000 = 0$.

**2.** Dividing by 2,000: $12s^{2} + 8s - 17 = 0$.

**3.** Step 2: Discriminant: $8^{2} + 4(12)(17) = 64 + 816 = 880$.

**4.** √880 ≈ 29.665.

**5.** Step 3: $s = (-8 + 29.665)/24 \\approx 0.90270$.

**6.** Step 4: $r = 1/0.90270 - 1 \\approx 0.10778 \\approx 10.78\\%$.

**Answer.** A=FALSE, B=FALSE, C=TRUE, D=FALSE, E=FALSE`,
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

As calculated above, A = 0 at r = 15%, confirming this is the internal rate of return.`,
      `**B) At an interest rate of 10%, the net present value of the project is positive.**  (true)

NPV = -40,000 + 22,000/1.10 + 27,600/1.21 = -40,000 + 20,000.00 + 22,809.92 = \\$2,809.92, positive (10% is below the 15% IRR).`,
      `**C) At an interest rate of 20%, the net present value of the project is negative.**  (true)

NPV = -40,000 + 22,000/1.20 + 27,600/1.44 = -40,000 + 18,333.33 + 19,166.67 = -\\$2,500.00, negative (20% is above the 15% IRR).`,
      `**D) The sum of all the project's cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$9,600.**  (true)

$a_0$ + $a_1$ + $a_2 = -\\$40{,}000$ + 22,000 + 27,600 = \\$9,600, which is positive, and this matches the chapter's result that the internal rate of return is positive whenever this sum is positive - consistent with the found r = 15% > 0.`,
      `**E) This project has a unique internal rate of return greater than -1.**  (true)

The theorem's precondition ($a_0 < 0$, all subsequent $a_i > 0$) is satisfied exactly: $a_0 = -\\$40{,}000 < 0$, $a_1 = \\$22{,}000 > 0$, $a_2 = \\$27{,}600 > 0$.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 120,
    solution_overview: `A logistics firm spends \\$40,000 automating a warehouse process. It expects net returns of \\$22,000 at the end of Year 1 and \\$27,600 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$40{,}000$

$a_1 = \\$22{,}000$

$a_2 = \\$27{,}600$

$n = 2$ years

**Part 2: Formula.**

$A = a_0 + a_1/(1+r) + a_2/(1+r)^{2}$

**Part 3: Solve.**

**1.** Step 1: Test $r = 15\\%$: A = -40,000 + 22,000/1.15 + 27,600/1.3225 = -40,000 + 19,130.43 + 20,869.57 = \\$0.00 (to the nearest cent).

**2.** Step 2: Since $A = 0$ at $r = 15\\%$, this confirms $r = 15\\%$ is the internal rate of return for this project.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=TRUE`,
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

As calculated above, r ≈ 10.69%.`,
      `**B) At an interest rate of 9%, the net present value of the project is positive.**  (true)

NPV = -65,000 + 34,000/1.09 + 42,000/1.1881 = -65,000 + 31,192.66 + 35,350.56 = \\$1,543.22, positive (9% is below the IRR).`,
      `**C) At an interest rate of 12%, the net present value of the project is positive.**  (false)

NPV = -65,000 + 34,000/1.12 + 42,000/1.2544 = -65,000 + 30,357.14 + 33,482.14 = -\\$1,160.72, negative, not positive (12% is above the IRR).`,
      `**D) Doubling both returns to \\$68,000 in Year 1 and \\$84,000 in Year 2, with the outlay unchanged at \\$65,000, would more than double the internal rate of return.**  (true)

With $a_1 = \\$68{,}000$ and $a_2 = \\$84{,}000$: $84{,}000s^{2} + 68{,}000s - 65{,}000 = 0$ → $84s^{2} + 68s - 65 = 0$. Discriminant = 4,624 + 21,840 = 26,464, √26,464 ≈ 162.678. $s = (-68 + 162.678)/168 \\approx 0.56356$, $r = 1/0.56356 - 1 \\approx 0.7744 = 77.44\\%$. Double the original rate would be about 21.36%, but the actual new rate (77.44%) is far higher than that — more than double.`,
      `**E) If the outlay were reduced to \\$60,000, with returns unchanged, the internal rate of return would be lower than the internal rate of return of the original project.**  (false)

With $a_0 = -\\$60{,}000$: $42{,}000s^{2} + 34{,}000s - 60{,}000 = 0$ → $42s^{2} + 34s - 60 = 0$. Discriminant: $1{,}156 + 10{,}080 = 11{,}236 = 106^{2}$ exactly. $s = (-34 + 106)/84 = 72/84 \\approx 0.85714$, $r = 1/0.85714 - 1 \\approx 0.16667 = 16.67\\%$, which is higher than 10.69%, not lower — a smaller outlay raises the internal rate of return.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 121,
    solution_overview: `A property developer invests \\$65,000 renovating a rental unit. Expected net rental income after expenses is \\$34,000 at the end of Year 1 and \\$42,000 at the end of Year 2.

**Part 1: Setup.**

$a_0 = -\\$65{,}000$

$a_1 = \\$34{,}000$

$a_2 = \\$42{,}000$

$n = 2$ years

**Part 2: Formula.**

$a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

$s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step 1: $42{,}000s^{2} + 34{,}000s - 65{,}000 = 0$.

**2.** Dividing by 1,000: $42s^{2} + 34s - 65 = 0$.

**3.** Step 2: Discriminant: $34^{2} + 4(42)(65) = 1{,}156 + 10{,}920 = 12{,}076$.

**4.** √12,076 ≈ 109.891.

**5.** Step 3: $s = (-34 + 109.891)/84 \\approx 0.90346$.

**6.** Step 4: $r = 1/0.90346 - 1 \\approx 0.10685 \\approx 10.69\\%$.

**Answer.** A=TRUE, B=TRUE, C=FALSE, D=TRUE, E=FALSE`,
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
      `If Option 2's Year 2 return were removed entirely, leaving only $a_0 = -\\$50{,}000$ and $a_1 = \\$6{,}000$, its internal rate of return would be even lower than Option 2's own internal rate of return.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The limiting internal rate of return of Option 1 is 12%.**  (true)

As calculated in Step 1, $r = 6{,}000/50{,}000 = 0.12 = 12\\%$.`,
      `**B) The internal rate of return of Option 2 is approximately -58.84%.**  (true)

As calculated in Steps 2–5, the valid root gives $r^{*} \\approx -0.5884 = -58.84\\%$.`,
      `**C) Option 2 has a unique internal rate of return greater than -1.**  (true)

The theorem only requires $a_0 < 0$ and all subsequent $a_i > 0$ to guarantee a unique $r^{*} > -1$; it does not require the quadratic to have only one mathematical root. Here one root ($r \\approx -1.291$) falls outside the allowed range $r > -1$ and is discarded, leaving exactly one valid root — precisely what the theorem guarantees.`,
      `**D) The sum of Option 2's cash flows, $a_0$ + $a_1$ + $a_2$, equals -\\$40,000.**  (false)

$a_0 + a_1 + a_2 = -50{,}000 + 6{,}000 + 6{,}000 = -38{,}000$, i.e. -\\$38,000, not -\\$40,000.`,
      `**E) If Option 2's Year 2 return were removed entirely, leaving only $a_0 = -\\$50{,}000$ and $a_1 = \\$6{,}000$, its internal rate of return would be even lower than Option 2's own internal rate of return.**  (true)

With only $a_0 = -\\$50{,}000$ and $a_1 = \\$6{,}000$: $r = (6{,}000/50{,}000) - 1 = 0.12 - 1 = -0.88 = -88\\%$. Since -88% is lower (more negative) than -58.84%, the statement is correct.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 122,
    solution_overview: `A subscription software company spends \\$50,000 building a product and is comparing two versions. Option 1, the full version: a steady net return of \\$6,000 at the end of every year, indefinitely into the future. Option 2, the scaled-back version: the same \\$50,000 outlay, but returns of only \\$6,000 at the end of Year 1 and \\$6,000 at the end of Year 2, with nothing paid afterward.

**Part 1: Setup.**

$a_0 = -\\$50{,}000$ (both options)

Option 1: $a_i = \\$6{,}000$ each year, forever ($i = 1, 2, 3, \\ldots$)

Option 2: $a_1 = a_2 = \\$6{,}000$ ($n = 2$)

**Part 2: Formula.**

Option 1 (as $n \\to \\infty$, with $a_i = a$ each year): $a_0 + a/r = 0$, so $r = a/(-a_0)$

Option 2 ($n = 2$): $a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

Substitute $s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Step 1 (Option 1): As $n \\to \\infty$, $a_0 + a/r = 0$ gives $r = a/(-a_0) = 6{,}000/50{,}000 = 0.12 = 12\\%$.

**2.** Step 2 (Option 2): $6{,}000s^{2} + 6{,}000s - 50{,}000 = 0$.

**3.** Dividing by 1,000: $6s^{2} + 6s - 50 = 0$.

**4.** Dividing by 2: $3s^{2} + 3s - 25 = 0$.

**5.** Step 3: Discriminant: $3^{2} + 4(3)(25) = 9 + 300 = 309$.

**6.** √309 ≈ 17.578.

**7.** Step 4: The quadratic formula gives two roots for $s$: $s = (-3 - 17.578)/6 \\approx -3.430$ and $s = (-3 + 17.578)/6 \\approx 2.430$.

**8.** Step 5: Converting each root to $r = 1/s - 1$: the first root gives $r \\approx -1.291$ (i.e.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=FALSE, E=TRUE`,
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

As calculated in Steps 1–3, $r_A \\approx 11.04\\%$.`,
      `**B) The internal rate of return of Design B is exactly 16%.**  (true)

As calculated in Step 4, $r_B = 16\\%$ exactly.`,
      `**C) Based on the internal rate of return criterion, Design B should be preferred over Design A.**  (true)

The chapter's criterion is to prefer the project with the higher internal rate of return. Since 16% (Design B) exceeds 11.04% (Design A), Design B should indeed be preferred.`,
      `**D) At a discount rate of 13%, Design A has negative net present value while Design B still has positive net present value.**  (true)

NPV_A at 13% = -120,000 + 54,000/1.13 + 88,000/1.2769 = -120,000 + 47,787.61 + 68,916.91 = -\\$3,295.48, negative. NPV_B at 13% = -70,000 + 81,200/1.13 = -70,000 + 71,858.41 = \\$1,858.41, positive. Both parts of the statement are correct.`,
      `**E) If Design A's Year 1 return were \\$10,000 lower, with Year 2 unchanged at \\$88,000, its internal rate of return would still exceed Design B's 16%.**  (false)

With $a_1 = \\$44{,}000$: $88{,}000s^{2} + 44{,}000s - 120{,}000 = 0$ → $22s^{2} + 11s - 30 = 0$. Discriminant = 121 + 2,640 = 2,761, √2,761 ≈ 52.545. $s = (-11 + 52.545)/44 \\approx 0.94420$, $r = 1/0.94420 - 1 \\approx 0.05909 = 5.91\\%$, which does not exceed Design B's 16%.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 123,
    solution_overview: `A renewable energy cooperative is comparing two designs for a community solar project. Design A, a two-year project: invest \\$120,000, with net returns of \\$54,000 at the end of Year 1 and \\$88,000 at the end of Year 2. Design B, a simpler one-year project: invest \\$70,000, with a single net return of \\$81,200 at the end of Year 1.

**Part 1: Setup.**

Design A: $a_0 = -\\$120{,}000$, $a_1 = \\$54{,}000$, $a_2 = \\$88{,}000$

Design B: $a = \\$70{,}000$, $b = \\$81{,}200$

$n = 2$ years (Design A) / 1 year (Design B)

**Part 2: Formula.**

Design A ($n = 2$): $a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$

Substitute $s = (1+r)^{-1}$

Design B ($n = 1$): $r = (b/a) - 1$

**Part 3: Solve.**

**1.** Step 1 (Design A): $88{,}000s^{2} + 54{,}000s - 120{,}000 = 0$.

**2.** Dividing by 2,000: $44s^{2} + 27s - 60 = 0$.

**3.** Step 2: Discriminant: $27^{2} + 4(44)(60) = 729 + 10{,}560 = 11{,}289$.

**4.** √11,289 ≈ 106.250.

**5.** Step 3: $s = (-27 + 106.250)/88 \\approx 0.90057$, so $r_A = 1/0.90057 - 1 \\approx 0.11041 \\approx 11.04\\%$.

**6.** Step 4 (Design B): $r_B = (81{,}200/70{,}000) - 1 = 1.16 - 1 = 0.16 = 16\\%$.

**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE`,
  },
];
