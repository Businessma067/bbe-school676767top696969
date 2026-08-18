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

A nominal quote with $n=12$ compounding dates is split evenly across those dates:

$$i_m=\\frac{r}{12}=\\frac{0.072}{12}$$

$$i_m=0.006=0.60\\%$$

That is the claimed monthly rate, so the statement is True.`,
      `**B) The effective annual rate is approximately 7.44%.**  (true)

The effective annual rate is the single yearly yield that reproduces the twelve monthly credits:

$$i_m=\\frac{0.072}{12}=0.006$$

$$R=(1.006)^{12}-1$$

$$(1.006)^{12}\\approx 1.074424,\\qquad R\\approx 0.074424\\approx 7.44\\%$$

That matches the claimed $7.44\\%$, so the statement is True.`,
      `**C) A \\$6,000 deposit left for exactly one year would grow to \\$6,446.54.**  (true)

From the monthly rate $i_m=0.006$, the one-year growth factor is

$$(1.006)^{12}\\approx 1.074424$$

Applying it to the principal:

$$FV=6{,}000\\times 1.074424\\approx 6{,}446.54$$

That is the claimed year-end balance, so the statement is True.`,
      `**D) If the bank instead compounded the same nominal rate annually, the effective annual rate would be higher than under monthly compounding.**  (false)

With the nominal rate held fixed, annual compounding uses $n=1$, so the effective rate equals the quote:

$$R_{\\mathrm{ann}}=7.20\\%$$

Monthly compounding produced $R\\approx 7.44\\%$. Then

$$7.20\\%<7.44\\%$$

Fewer compounding dates lower the effective yield, so the statement is False.`,
      `**E) The effective annual rate exceeds the nominal rate by more than 1.00 percentage point.**  (false)

The monthly conversion gave $R\\approx 7.44\\%$. The gap against the nominal quote is

$$7.44\\%-7.20\\%=0.24$$

That is $0.24$ percentage points, which is less than $1.00$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A print shop deposits $\\$6,000$ at a nominal annual rate of $7.20\\%$, compounded monthly, for one year.

$$P=6{,}000,\\qquad r=0.072,\\qquad n=12,\\qquad t=1$$

The monthly rate, the effective annual rate, and the year-end balance are

$$i_m=\\frac{r}{n},\\qquad R=(1+i_m)^{n}-1,\\qquad FV=P(1+R)$$`,
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

A nominal quote with $n=4$ compounding dates is split evenly across those dates:

$$i=\\frac{r}{n}=\\frac{0.08}{4}$$

$$i=0.02=2.00\\%$$

That is the claimed quarterly rate, so the statement is True.`,
      `**B) The number of quarterly periods over 6 years is 24.**  (true)

The exponent in a compound formula counts interest dates, not calendar years:

$$N=nt=4\\times 6$$

$$N=24$$

That is the claimed number of quarters, so the statement is True.`,
      `**C) The balance after 6 years is approximately \\$9,860.00.**  (false)

The future-value formula under quarterly compounding is

$$FV=P\\left(1+\\frac{r}{n}\\right)^{nt}$$

With $P=6{,}000$, $r=0.08$, $n=4$, and $t=6$:

$$FV=6{,}000\\times(1.02)^{24}$$

$$(1.02)^{24}\\approx 1.608437,\\qquad FV\\approx 9{,}650.62$$

The claim is $\\$9,860.00$, about $\\$209$ too high, so the statement is False.`,
      `**D) If the deposit were left for only 3 years instead of 6, the future value would be exactly half of the 6-year future value.**  (false)

Compound growth is exponential in time, so halving the horizon does not halve the balance. The quarterly rate is $i=0.08/4=0.02$. Over three years there are twelve quarters:

$$S(3)=6{,}000\\times(1.02)^{12}$$

$$(1.02)^{12}\\approx 1.268242,\\qquad S(3)\\approx 7{,}609.45$$

Over six years,

$$S(6)=6{,}000\\times(1.02)^{24}\\approx 9{,}650.62$$

$$\\frac{S(6)}{2}\\approx 4{,}825.31$$

Then

$$7{,}609.45>4{,}825.31$$

The three-year figure is not half of the six-year figure, so the statement is False.`,
      `**E) The total percentage growth of the deposit over the 6 years is more than 65%.**  (false)

Total percentage growth is the dollar gain over the original principal. From $i=0.08/4=0.02$ over $24$ quarters,

$$FV=6{,}000\\times(1.02)^{24}\\approx 9{,}650.62$$

$$\\frac{9{,}650.62-6{,}000}{6{,}000}\\approx 0.6084=60.84\\%$$

The gap against the $65\\%$ cutoff is

$$65\\%-60.84\\%=4.16$$

That is $4.16$ percentage points short of $65\\%$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `A deposit of $\\$6,000$ earns a nominal annual rate of $8\\%$, with interest paid quarterly, for six years.

$$P=6{,}000,\\qquad r=0.08,\\qquad n=4,\\qquad t=6$$

The quarterly rate, the number of periods, and the future value are

$$i=\\frac{r}{n},\\qquad N=nt,\\qquad FV=P(1+i)^{N}$$`,
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

Offer (i) converts a quarterly schedule into a single yearly yield:

$$i_i=\\frac{0.064}{4}=0.016$$

$$R_i=(1.016)^{4}-1$$

$$(1.016)^{4}\\approx 1.065552,\\qquad R_i\\approx 0.065552\\approx 6.55\\%$$

That matches the claimed $6.55\\%$, so the statement is True.`,
      `**B) The effective annual rate of Offer (ii) is approximately 6.61%.**  (true)

Offer (ii) converts a semi-annual schedule into a single yearly yield:

$$i_{ii}=\\frac{0.065}{2}=0.0325$$

$$R_{ii}=(1.0325)^{2}-1$$

$$(1.0325)^{2}=1.066056,\\qquad R_{ii}=0.066056\\approx 6.61\\%$$

That matches the claimed $6.61\\%$, so the statement is True.`,
      `**C) Offer (ii) is the better choice for the saver.**  (true)

The better one-year offer is the one with the higher effective annual rate. Offer (i) has quarterly rate $0.064/4=0.016$, so

$$R_i=(1.016)^{4}-1\\approx 0.065552\\approx 6.55\\%$$

Offer (ii) has semi-annual rate $0.065/2=0.0325$, so

$$R_{ii}=(1.0325)^{2}-1=0.066056\\approx 6.61\\%$$

Then

$$6.61\\%>6.55\\%$$

Offer (ii) is the stronger yield, so the statement is True.`,
      `**D) Because Offer (i) compounds more frequently, it must have the higher effective rate.**  (false)

Frequency raises the effective rate only when the nominal quote is held fixed. Here the quotes differ. Offer (i) compounds four times at $6.4\\%$:

$$R_i=(1.016)^{4}-1\\approx 6.55\\%$$

Offer (ii) compounds twice at $6.5\\%$:

$$R_{ii}=(1.0325)^{2}-1\\approx 6.61\\%$$

Then

$$6.55\\%<6.61\\%$$

The extra compounding dates on Offer (i) do not produce the higher effective rate, so the statement is False.`,
      `**E) Depositing \\$10,000 for one year, Offer (ii) would produce more than \\$660 in interest.**  (true)

Interest on Offer (ii) is principal times its effective annual rate. The semi-annual conversion is

$$R_{ii}=(1.0325)^{2}-1=0.066056$$

$$I_{ii}=10{,}000\\times 0.066056=660.56$$

The gap against the $\\$660$ cutoff is

$$660.56-660=0.56$$

That clears $\\$660$ by $\\$0.56$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `A saver has $\\$10,000$ to place for one year and compares two term deposits. Offer (i) quotes $6.4\\%$ nominal with quarterly compounding. Offer (ii) quotes $6.5\\%$ nominal with interest paid twice a year.

$$P=10{,}000,\\qquad t=1$$

$$r_i=0.064,\\qquad n_i=4,\\qquad r_{ii}=0.065,\\qquad n_{ii}=2$$

The effective annual rate and the interest earned are

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1,\\qquad I=PR$$`,
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

A nominal quote from a monthly charge is twelve times that charge, with no compounding built in:

$$r_{\\mathrm{nom}}=12i_m=12\\times 0.0175$$

$$r_{\\mathrm{nom}}=0.21=21.00\\%$$

The claim is $22.00\\%$, a full point too high, so the statement is False.`,
      `**B) The effective annual rate of interest is approximately 21.75%.**  (false)

The effective annual rate compounds the monthly charge through twelve months:

$$R=(1.0175)^{12}-1$$

$$(1.0175)^{12}\\approx 1.231439,\\qquad R\\approx 0.231439\\approx 23.14\\%$$

The claim is $21.75\\%$, which sits near the nominal $21.00\\%$ rather than at $23.14\\%$, so the statement is False.`,
      `**C) An unpaid balance of \\$2,000 would grow to \\$2,420.00 after one year of accruing interest this way.**  (false)

An unpaid $\\$2,000$ grows by the twelve-month factor. From $i_m=0.0175$,

$$(1.0175)^{12}\\approx 1.231439$$

$$FV=2{,}000\\times 1.231439\\approx 2{,}462.88$$

The claim is $\\$2,420.00$, as if $2{,}000\\times 1.21$ had been used, so the statement is False.`,
      `**D) The effective annual rate exceeds the nominal annual rate by more than 2.00 percentage points.**  (true)

The gap is the effective annual rate minus the nominal quote. Twelve monthly charges of $1.75\\%$ give

$$r_{\\mathrm{nom}}=12\\times 1.75\\%=21.00\\%$$

$$R=(1.0175)^{12}-1\\approx 23.14\\%$$

$$23.14\\%-21.00\\%=2.14$$

That is $2.14$ percentage points, which exceeds $2.00$, so the statement is True.`,
      `**E) If the monthly rate were instead 1.50%, the effective annual rate would still exceed 20%.**  (false)

The hypothetical replaces the monthly charge with $1.50\\%$ and rebuilds the yearly yield:

$$R=(1.015)^{12}-1$$

$$(1.015)^{12}\\approx 1.195618,\\qquad R\\approx 0.195618\\approx 19.56\\%$$

The gap against the $20\\%$ cutoff is

$$20\\%-19.56\\%=0.44$$

That sits $0.44$ percentage points short of $20\\%$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `A retail credit card charges $1.75\\%$ per month on any outstanding balance.

$$i_m=0.0175,\\qquad n=12,\\qquad t=1$$

The nominal annual rate, the effective annual rate, and a one-year future value are

$$r_{\\mathrm{nom}}=12i_m,\\qquad R=(1+i_m)^{12}-1,\\qquad FV=P(1+R)$$`,
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

A $5.6\\%$ nominal quote paid quarterly is divided evenly across four interest dates:

$$i=\\frac{0.056}{4}$$

$$i=0.014=1.40\\%$$

That is the claimed quarterly rate, so the statement is True.`,
      `**B) The effective annual rate is approximately 5.72%.**  (true)

The effective annual rate compounds the quarterly rate through four quarters:

$$i=\\frac{0.056}{4}=0.014$$

$$R=(1.014)^{4}-1$$

$$(1.014)^{4}\\approx 1.057187,\\qquad R\\approx 0.057187\\approx 5.72\\%$$

That matches the claimed $5.72\\%$, so the statement is True.`,
      `**C) The balance after one year is approximately \\$15,857.81.**  (true)

The year-end balance is the deposit times the four-quarter growth factor. From $i=0.056/4=0.014$,

$$(1.014)^{4}\\approx 1.057187$$

$$FV=15{,}000\\times 1.057187\\approx 15{,}857.81$$

That is the claimed balance, so the statement is True.`,
      `**D) If the same nominal rate were instead compounded monthly, the resulting effective annual rate would be lower than under quarterly compounding.**  (false)

With the nominal rate held fixed, extra compounding dates can only raise the effective yield. Quarterly compounding gave

$$R_{q}=(1.014)^{4}-1\\approx 5.72\\%$$

Monthly compounding at the same $5.6\\%$ uses $i_m=0.056/12$:

$$R_{m}=\\left(1+\\frac{0.056}{12}\\right)^{12}-1\\approx 0.05746\\approx 5.75\\%$$

Then

$$5.75\\%>5.72\\%$$

Monthly is the stronger schedule, not the weaker one, so the statement is False.`,
      `**E) The gap between the EAR and the nominal rate exceeds 0.20 percentage points.**  (false)

The gap is the quarterly effective rate minus the nominal quote. From $i=0.014$,

$$R=(1.014)^{4}-1\\approx 0.057187\\approx 5.72\\%$$

$$5.72\\%-5.60\\%=0.12$$

That is $0.12$ percentage points, which is less than $0.20$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 5,
    solution_overview: `A veterinary clinic deposits $\\$15,000$ for one year at a nominal annual rate of $5.6\\%$, compounded quarterly.

$$P=15{,}000,\\qquad r=0.056,\\qquad n=4,\\qquad t=1$$

The quarterly rate, the effective annual rate, and the year-end balance are

$$i=\\frac{r}{n},\\qquad R=(1+i)^{n}-1,\\qquad FV=P(1+R)$$`,
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
      `Because $(1 + \\frac{r}{n})^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The monthly periodic rate is 0.60%.**  (true)

A $7.2\\%$ nominal quote with monthly compounding is spread evenly over twelve interest dates:

$$i_m=\\frac{0.072}{12}$$

$$i_m=0.006=0.60\\%$$

That is the claimed monthly rate, so the statement is True.`,
      `**B) It takes approximately 108 months for the deposit to double.**  (false)

Doubling means the monthly growth factor raised to $t$ equals $2$. From $i_m=0.072/12=0.006$,

$$(1.006)^{t}=2,\\qquad t=\\frac{\\ln 2}{\\ln 1.006}$$

$$t\\approx\\frac{0.693147}{0.005982}\\approx 115.87$$

The claim is $108$ months, about eight months too short, so the statement is False.`,
      `**C) It would take approximately 58 months for the deposit to double.**  (false)

The recovered doubling time is about $115.87$ months, not $58$. After $58$ months the growth factor is only

$$(1.006)^{58}\\approx 1.415$$

which is a $41.5\\%$ gain, not a doubling. Exponential growth reaches $\\sqrt{2}$ at half the doubling time, so the statement is False.`,
      `**D) If the nominal rate were doubled to 14.4%, the resulting effective annual rate would also be exactly double the original effective annual rate.**  (false)

The original effective annual rate at $7.2\\%$ monthly is

$$R=(1.006)^{12}-1\\approx 0.074424\\approx 7.44\\%$$

At a doubled nominal quote of $14.4\\%$, the monthly rate is $0.144/12=0.012$, so

$$R_{2}=(1.012)^{12}-1\\approx 0.15389\\approx 15.39\\%$$

Twice the original effective rate would be $14.88\\%$. Then

$$15.39\\%\\ne 14.88\\%$$

Doubling the nominal quote does not exactly double the effective yield, so the statement is False.`,
      `**E) Because $(1 + \\frac{r}{n})^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.**  (true)

The inversion $t=\\ln M/\\ln(1+i_m)$ never used the number $2$. Any target multiple $M>1$ simply swaps in $\\ln M$:

$$t=\\frac{\\ln M}{\\ln(1+i_m)}$$

Because $\\ln(1.006)>0$, the factor $(1.006)^{t}$ is strictly increasing, so every such $M$ is reached at exactly one time, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `A savings account quotes a nominal annual rate of $7.2\\%$, compounded monthly. The question is how long a deposit takes to double.

$$r=0.072,\\qquad n=12,\\qquad M=2$$

The monthly rate and the number of months to a target multiple $M$ are

$$i_m=\\frac{r}{n},\\qquad (1+i_m)^{t}=M,\\qquad t=\\frac{\\ln M}{\\ln(1+i_m)}$$`,
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

Semi-annual compounding splits $15\\%$ across two dates:

$$i=\\frac{0.15}{2}=0.075$$

$$R=(1.075)^{2}-1$$

$$(1.075)^{2}=1.155625,\\qquad R=0.155625\\approx 15.56\\%$$

That matches the claimed $15.56\\%$, so the statement is True.`,
      `**B) The effective rate under quarterly compounding is approximately 15.87%.**  (true)

Quarterly compounding splits $15\\%$ across four dates:

$$i=\\frac{0.15}{4}=0.0375$$

$$R=(1.0375)^{4}-1$$

$$(1.0375)^{4}\\approx 1.158650,\\qquad R\\approx 0.158650\\approx 15.87\\%$$

That matches the claimed $15.87\\%$, so the statement is True.`,
      `**C) The effective rate under monthly compounding is approximately 16.08%.**  (true)

Monthly compounding splits $15\\%$ across twelve dates:

$$i=\\frac{0.15}{12}=0.0125$$

$$R=(1.0125)^{12}-1$$

$$(1.0125)^{12}\\approx 1.160755,\\qquad R\\approx 0.160755\\approx 16.08\\%$$

That matches the claimed $16.08\\%$, so the statement is True.`,
      `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

With the nominal rate held fixed, extra compounding dates raise the yearly yield. The three conversions are

$$R_{2}=(1.075)^{2}-1\\approx 15.56\\%$$

$$R_{4}=(1.0375)^{4}-1\\approx 15.87\\%$$

$$R_{12}=(1.0125)^{12}-1\\approx 16.08\\%$$

Then

$$15.56\\%<15.87\\%<16.08\\%$$

The effective rate rises steadily with frequency, so the statement is True.`,
      `**E) The increase in effective rate from semi-annual to quarterly is smaller than the increase from quarterly to monthly.**  (false)

The two successive jumps are

$$15.87\\%-15.56\\%=0.31$$

$$16.08\\%-15.87\\%=0.21$$

Then

$$0.31>0.21$$

The semi-annual-to-quarterly step is the larger one, not the smaller, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A finance student converts a fixed nominal annual rate of $15\\%$ into an effective yearly rate at three compounding frequencies.

$$r=0.15,\\qquad n=2,\\qquad n=4,\\qquad n=12$$

For each frequency the effective annual rate is

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
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

A $6\\%$ nominal quote compounded monthly is split across twelve interest dates:

$$i=\\frac{0.06}{12}$$

$$i=0.005=0.50\\%$$

That is the claimed monthly rate, so the statement is True.`,
      `**B) The number of monthly compounding periods over 10 years, nt, is 120.**  (true)

The exponent counts monthly credits over the ten-year horizon:

$$N=nt=12\\times 10$$

$$N=120$$

That is the claimed number of periods, so the statement is True.`,
      `**C) The balance after 10 years is approximately \\$7,277.60.**  (true)

The ten-year balance uses $i=0.06/12=0.005$ over $120$ months:

$$S(10)=4{,}000\\times(1.005)^{120}$$

$$(1.005)^{120}\\approx 1.819397,\\qquad S(10)\\approx 7{,}277.59$$

That matches the claimed $\\$7,277.60$, so the statement is True.`,
      `**D) The deposit exactly doubles in value over these 10 years.**  (false)

The growth factor over those $120$ months is

$$(1.005)^{120}\\approx 1.8194$$

Then

$$1.8194<2$$

A factor of $1.82$ is an $82\\%$ gain, not a $100\\%$ gain, so the statement is False.`,
      `**E) If compounded annually instead, the 10-year future value would exceed the future value obtained under monthly compounding.**  (false)

With the nominal rate held fixed, fewer compounding dates lower the accumulation. Monthly compounding gave

$$S_{m}=4{,}000\\times(1.005)^{120}\\approx 7{,}277.59$$

Annual compounding uses $n=1$:

$$S_{a}=4{,}000\\times(1.06)^{10}$$

$$(1.06)^{10}\\approx 1.790848,\\qquad S_{a}\\approx 7{,}163.39$$

Then

$$7{,}163.39<7{,}277.59$$

Annual compounding finishes behind, not ahead, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `A grandparent deposits $\\$4,000$ into a trust earning a nominal annual rate of $6\\%$, compounded monthly, for ten years.

$$S_0=4{,}000,\\qquad r=0.06,\\qquad n=12,\\qquad t=10$$

The monthly rate, the number of periods, and the future value are

$$i=\\frac{r}{n},\\qquad N=nt,\\qquad S(t)=S_0(1+i)^{N}$$`,
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

The fund must turn a factor of $1.6$ through $32$ quarters:

$$\\left(1+\\frac{r}{4}\\right)^{32}=\\frac{80{,}000}{50{,}000}=1.6$$

$$1+\\frac{r}{4}=(1.6)^{1/32}\\approx 1.014796$$

$$r\\approx 4\\times 0.014796=0.05918\\approx 5.92\\%$$

That matches the claimed $5.92\\%$, so the statement is True.`,
      `**B) The corresponding quarterly periodic rate is approximately 1.48%.**  (true)

The quarterly rate is the thirty-second root already isolated, written as a percentage:

$$(1.6)^{1/32}\\approx 1.014796$$

$$i\\approx 0.014796\\approx 1.48\\%$$

That is one-fourth of the $5.92\\%$ nominal quote, so the statement is True.`,
      `**C) If the same growth were required in only 4 years instead of 8, the required nominal rate would be lower than in the original 8-year scenario.**  (false)

The target factor stays at $1.6$, so shortening the term to four years leaves $16$ quarters and raises the root:

$$1+\\frac{r}{4}=(1.6)^{1/16}\\approx 1.029811$$

$$r\\approx 4\\times 0.029811=0.11924\\approx 11.92\\%$$

Then

$$11.92\\%>5.92\\%$$

Less time to grow means a higher required rate, not a lower one, so the statement is False.`,
      `**D) If the compounding were changed from quarterly to monthly, the required nominal rate would need to be higher than in the original quarterly scenario.**  (false)

More frequent compounding does part of the work, so the required nominal quote falls. Over $96$ months the same factor $1.6$ needs

$$r=12\\left[(1.6)^{1/96}-1\\right]\\approx 12\\times 0.004908=0.05890\\approx 5.89\\%$$

Then

$$5.89\\%<5.92\\%$$

Monthly compounding needs a slightly lower nominal rate, not a higher one, so the statement is False.`,
      `**E) Growing from \\$50,000 to \\$80,000 represents an increase of more than 65%.**  (false)

The dollar gain against the starting amount is

$$\\frac{80{,}000-50{,}000}{50{,}000}=0.60=60\\%$$

The gap against the $65\\%$ cutoff is

$$65\\%-60\\%=5$$

That is five percentage points short of $65\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `An investment fund must grow $\\$50,000$ into $\\$80,000$ over eight years, with interest compounded quarterly.

$$S_0=50{,}000,\\qquad S=80{,}000,\\qquad n=4,\\qquad t=8$$

The required nominal annual rate is

$$r=n\\left[\\left(\\frac{S}{S_0}\\right)^{1/(nt)}-1\\right]$$`,
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

Option (a) compounds once, so its effective rate equals the quote:

$$R_a=10.80\\%$$

Option (b) has quarterly rate $0.104/4=0.026$, so

$$R_b=(1.026)^{4}-1$$

$$(1.026)^{4}\\approx 1.108127,\\qquad R_b\\approx 0.108127\\approx 10.81\\%$$

Then

$$10.80\\%<10.81\\%$$

Option (a) is not the higher effective rate, so the statement is False.`,
      `**B) Option (b)'s effective annual rate is approximately 10.81%.**  (true)

Option (b) converts four quarterly credits into a yearly yield:

$$i_b=\\frac{0.104}{4}=0.026$$

$$R_b=(1.026)^{4}-1\\approx 0.108127\\approx 10.81\\%$$

That matches the claimed $10.81\\%$, so the statement is True.`,
      `**C) Because option (b) quotes a lower nominal rate, it must be the cheaper option for the borrower.**  (false)

A borrower pays the effective rate, not the printed nominal quote. Option (a) is $R_a=10.80\\%$. Option (b) is

$$R_b=(1.026)^{4}-1\\approx 10.81\\%$$

Then

$$10.81\\%>10.80\\%$$

The lower nominal quote is the slightly more expensive loan, so the statement is False.`,
      `**D) For the borrower, option (a) is more expensive than option (b).**  (false)

Cost to the borrower is the same effective-rate ranking. Annual compounding on (a) leaves

$$R_a=10.80\\%$$

Quarterly compounding on (b) leaves $R_b\\approx 10.81\\%$. Then

$$10.80\\%<10.81\\%$$

Option (a) is the cheaper of the two, so the statement is False.`,
      `**E) The two options' effective annual rates differ by more than 0.05 percentage points.**  (false)

The gap between the two effective rates is

$$R_b-R_a\\approx 10.8127\\%-10.80\\%=0.013$$

That is $0.013$ percentage points, which is less than $0.05$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 10,
    solution_overview: `A borrower compares two one-year loan terms. Option (a) quotes $10.80\\%$ nominal with annual compounding. Option (b) quotes $10.40\\%$ nominal with quarterly compounding.

$$r_a=0.1080,\\qquad n_a=1,\\qquad r_b=0.1040,\\qquad n_b=4,\\qquad t=1$$

The effective annual rate for either option is

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
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

With interest paid once a year, the six-year growth factor is

$$(1.045)^{6}$$

$$(1.045)^{6}\\approx 1.302260$$

That matches the claimed $1.302253$, so the statement is True.`,
      `**B) The amount that would need to have been deposited 6 years ago is approximately \\$30,715.86.**  (true)

The original deposit is the target divided by that growth factor:

$$S_0=\\frac{40{,}000}{(1.045)^{6}}$$

$$(1.045)^{6}\\approx 1.302260,\\qquad S_0\\approx 30{,}715.83$$

That matches the claimed $\\$30,715.86$, so the statement is True.`,
      `**C) This present value is less than \\$32,000.**  (true)

The recovered deposit is about $\\$30,715.83$. Against the $\\$32,000$ cutoff,

$$32{,}000-30{,}715.83=1{,}284.17$$

The present value sits about $\\$1,284$ below $\\$32,000$, so the statement is True.`,
      `**D) If the rate had instead been 5.5%, the required present value would be higher than at 4.5%.**  (false)

A present value is a fixed target divided by a growth factor. Raising the rate enlarges the denominator. At $5.5\\%$,

$$(1.055)^{6}\\approx 1.378724$$

$$S_0=\\frac{40{,}000}{1.378724}\\approx 29{,}009.83$$

Then

$$29{,}009.83<30{,}715.83$$

Faster growth means a smaller opening balance, not a larger one, so the statement is False.`,
      `**E) The total interest earned over the 6 years on this deposit would be approximately \\$9,284.14.**  (true)

Interest is the target minus the original deposit. From $(1.045)^{6}\\approx 1.302260$,

$$S_0\\approx\\frac{40{,}000}{1.302260}\\approx 30{,}715.83$$

$$40{,}000-30{,}715.83=9{,}284.17$$

That matches the claimed $\\$9,284.14$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `A trustee needs a target of $\\$40,000$ today after six years of annual compounding at $4.5\\%$, and wants the deposit that would have been required six years ago.

$$S=40{,}000,\\qquad r=0.045,\\qquad n=1,\\qquad t=6$$

The growth factor and the original deposit are

$$(1+r)^{t},\\qquad S_0=\\frac{S}{(1+r)^{t}}$$`,
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

The monthly rate is $i=0.06/12=0.005$, and the target ratio is $6{,}000/4{,}000=1.5$:

$$t=\\frac{\\ln 1.5}{\\ln 1.005}$$

$$t\\approx\\frac{0.405465}{0.004988}\\approx 81.30$$

That matches the claimed $81.30$ months, so the statement is True.`,
      `**B) It takes approximately 6.00 years exactly to reach £6,000.**  (false)

The same inversion gives $t\\approx 81.30$ months, or

$$\\frac{81.30}{12}\\approx 6.78$$

Six years would be $72$ months. Then

$$6.78\\ne 6.00$$

The wait is about $6.78$ years, not $6.00$, so the statement is False.`,
      `**C) It takes approximately 48 months to reach £6,000.**  (false)

Forty-eight months is a four-year trial at $i=0.005$:

$$4{,}000\\times(1.005)^{48}\\approx 5{,}082$$

That is still about $£918$ short of $£6,000$. The logarithm that hits the target is $t\\approx 81.30$ months, not $48$, so the statement is False.`,
      `**D) Because the deposit needs to grow by a factor of 1.5 rather than double, the required time must be less than half of this account's doubling time.**  (false)

Times scale with logarithms, and $\\ln 1.5$ is not half of $\\ln 2$. The $1.5$ wait is

$$t_{1.5}=\\frac{\\ln 1.5}{\\ln 1.005}\\approx 81.30$$

The doubling time is

$$t_{2}=\\frac{\\ln 2}{\\ln 1.005}\\approx 138.98$$

$$\\frac{t_{2}}{2}\\approx 69.49$$

Then

$$81.30>69.49$$

Growing by $50\\%$ takes longer than half a doubling, so the statement is False.`,
      `**E) The time required to reach £6,000, found using logarithms, is exactly 100 months.**  (false)

The logarithmic solution is the same inversion:

$$t=\\frac{\\ln 1.5}{\\ln 1.005}\\approx 81.30$$

One hundred months would grow the deposit by

$$(1.005)^{100}\\approx 1.647$$

to about $£6,587$, overshooting $£6,000$. The required time is $81.30$ months, not $100$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `A deposit of $£4,000$ earns a nominal annual rate of $6\\%$, compounded monthly, and must grow to $£6,000$.

$$S_0=4{,}000,\\qquad S=6{,}000,\\qquad r=0.06,\\qquad n=12$$

Measured in monthly periods, the waiting time is

$$i=\\frac{r}{n},\\qquad t=\\frac{\\ln(S/S_0)}{\\ln(1+i)}$$`,
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

A $4.25\\%$ nominal quote on a $365$-day year is divided across those $365$ dates:

$$i=\\frac{0.0425}{365}$$

$$i\\approx 0.00011644=0.011644\\%$$

That is the claimed daily rate, so the statement is True.`,
      `**B) The effective annual rate is approximately 4.34%.**  (true)

The effective annual rate compounds the daily factor through $365$ days:

$$R=\\left(1+\\frac{0.0425}{365}\\right)^{365}-1$$

$$\\left(1+\\frac{0.0425}{365}\\right)^{365}\\approx 1.043413,\\qquad R\\approx 0.043413\\approx 4.34\\%$$

That matches the claimed $4.34\\%$, so the statement is True.`,
      `**C) The balance after one year is approximately \\$20,868.26.**  (true)

The year-end balance is the deposit times that annual factor. From the daily conversion,

$$\\left(1+\\frac{0.0425}{365}\\right)^{365}\\approx 1.043413$$

$$FV=20{,}000\\times 1.043413\\approx 20{,}868.26$$

That is the claimed balance, so the statement is True.`,
      `**D) If compounded monthly instead, the effective annual rate would be higher than under daily compounding.**  (false)

With the nominal rate held fixed, fewer compounding dates lower the effective yield. Daily compounding gave $R_{d}\\approx 4.34\\%$. Monthly compounding uses $n=12$:

$$R_{m}=\\left(1+\\frac{0.0425}{12}\\right)^{12}-1\\approx 0.04334\\approx 4.33\\%$$

Then

$$4.33\\%<4.34\\%$$

Monthly is slightly weaker here, not stronger, so the statement is False.`,
      `**E) The gap between the effective annual rate and the nominal rate exceeds 0.20 percentage points.**  (false)

The gap is the daily effective rate minus the nominal quote. From the $365$-day conversion, $R\\approx 4.34\\%$, so

$$4.34\\%-4.25\\%=0.09$$

That is $0.09$ percentage points, which is less than $0.20$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `A retiree deposits $\\$20,000$ for one year at a nominal annual rate of $4.25\\%$, compounded daily on a $365$-day year.

$$P=20{,}000,\\qquad r=0.0425,\\qquad n=365,\\qquad t=1$$

The daily rate, the effective annual rate, and the year-end balance are

$$i=\\frac{r}{n},\\qquad R=(1+i)^{n}-1,\\qquad FV=P(1+R)$$`,
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

A nominal quote from a $1.9\\%$ monthly charge is twelve times that charge:

$$r_{\\mathrm{nom}}=12\\times 0.019$$

$$r_{\\mathrm{nom}}=0.228=22.80\\%$$

That is the claimed nominal rate, so the statement is True.`,
      `**B) The effective annual rate of interest is approximately 25.34%.**  (true)

The effective annual rate compounds the monthly charge through twelve months:

$$R=(1.019)^{12}-1$$

$$(1.019)^{12}\\approx 1.253401,\\qquad R\\approx 0.253401\\approx 25.34\\%$$

That matches the claimed $25.34\\%$, so the statement is True.`,
      `**C) The effective annual rate is approximately 22.80%, the same as the nominal annual rate.**  (false)

The two rates coincide only when compounding is annual. Here

$$r_{\\mathrm{nom}}=12\\times 1.9\\%=22.80\\%$$

$$R=(1.019)^{12}-1\\approx 25.34\\%$$

Then

$$25.34\\%\\ne 22.80\\%$$

The printed twelvefold multiple is not the rate that actually accrues, so the statement is False.`,
      `**D) A \\$3,000 unpaid balance would grow to \\$3,684.00 after one year.**  (false)

An unpaid $\\$3,000$ grows by the twelve-month factor. From $i_m=0.019$,

$$(1.019)^{12}\\approx 1.253401$$

$$FV=3{,}000\\times 1.253401\\approx 3{,}760.20$$

The claim is $\\$3,684.00$, which is $3{,}000\\times 1.228$, so the statement is False.`,
      `**E) The effective annual rate exceeds the nominal annual rate by more than 3.00 percentage points.**  (false)

The gap is the effective annual rate minus the nominal quote:

$$R=(1.019)^{12}-1\\approx 25.34\\%$$

$$r_{\\mathrm{nom}}=22.80\\%$$

$$25.34\\%-22.80\\%=2.54$$

That is $2.54$ percentage points, which is less than $3.00$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `A store card charges $1.9\\%$ per month on unpaid balances.

$$i_m=0.019,\\qquad n=12,\\qquad t=1$$

The nominal annual rate, the effective annual rate, and a one-year future value are

$$r_{\\mathrm{nom}}=12i_m,\\qquad R=(1+i_m)^{12}-1,\\qquad FV=P(1+R)$$`,
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

Semi-annual compounding splits $10\\%$ across two dates:

$$i=\\frac{0.10}{2}=0.05$$

$$R=(1.05)^{2}-1$$

$$(1.05)^{2}=1.1025,\\qquad R=0.1025=10.25\\%$$

That is the claimed $10.25\\%$, so the statement is True.`,
      `**B) The effective rate under quarterly compounding is approximately 10.38%.**  (true)

Quarterly compounding splits $10\\%$ across four dates:

$$i=\\frac{0.10}{4}=0.025$$

$$R=(1.025)^{4}-1$$

$$(1.025)^{4}\\approx 1.103813,\\qquad R\\approx 0.103813\\approx 10.38\\%$$

That matches the claimed $10.38\\%$, so the statement is True.`,
      `**C) The effective rate under monthly compounding is approximately 10.47%.**  (true)

Monthly compounding splits $10\\%$ across twelve dates:

$$i=\\frac{0.10}{12}\\approx 0.008333$$

$$R=(1.008333)^{12}-1$$

$$(1.008333)^{12}\\approx 1.104713,\\qquad R\\approx 0.104713\\approx 10.47\\%$$

That matches the claimed $10.47\\%$, so the statement is True.`,
      `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

With $r$ fixed, each extra compounding date raises the yearly yield. The three conversions are

$$R_{2}=10.25\\%,\\qquad R_{4}\\approx 10.38\\%,\\qquad R_{12}\\approx 10.47\\%$$

Then

$$10.25\\%<10.38\\%<10.47\\%$$

The effective rate rises steadily with frequency, so the statement is True.`,
      `**E) The jump in effective rate from semi-annual to quarterly is smaller than the jump from quarterly to monthly.**  (false)

The two successive jumps are

$$10.38\\%-10.25\\%=0.13$$

$$10.47\\%-10.38\\%=0.09$$

Then

$$0.13>0.09$$

The first jump is the larger one, not the smaller, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `A bank converts a fixed nominal annual rate of $10\\%$ into an effective yearly rate at three compounding frequencies.

$$r=0.10,\\qquad n=2,\\qquad n=4,\\qquad n=12$$

For each frequency the effective annual rate is

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
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

A factor of $50$ over $80$ years is the eightieth root:

$$r=50^{1/80}-1$$

$$50^{1/80}\\approx 1.050116,\\qquad r\\approx 0.050116\\approx 5.01\\%$$

That matches the claimed $5.01\\%$, so the statement is True.`,
      `**B) The required annual growth rate is approximately 6.25%.**  (false)

The same root is $r\\approx 5.01\\%$, not $6.25\\%$. A $6.25\\%$ guess looks like $500\\%/80$, treating the fifty-fold gain as simple interest. Over $80$ years that rate would produce a factor near $128$, more than twice the target of $50$, so the statement is False.`,
      `**C) Since 50 is half of 100, the required rate for 50× growth would be exactly half of the rate needed for 100× growth over the same 80 years.**  (false)

Rates come from roots, not from proportions of the target multiple. The rate for a hundred-fold gain over $80$ years is

$$r_{100}=100^{1/80}-1\\approx 0.05925\\approx 5.93\\%$$

Half of that is $2.96\\%$, nowhere near the $5.01\\%$ needed for fifty-fold growth. Halving the multiple does not halve the rate, so the statement is False.`,
      `**D) At a growth rate of 5.01% per year, GDP would multiply by exactly 100 after 160 years.**  (false)

Doubling the horizon squares the growth factor. At $r\\approx 5.01\\%$,

$$(1.050116)^{160}=50^{2}=2{,}500$$

After $160$ years the economy is $2{,}500$ times its starting size, not $100$ times, so the statement is False.`,
      `**E) Achieving 50× growth in only 40 years would require an annual rate lower than 5.01%.**  (false)

The same factor of $50$ in half the time needs a higher root:

$$r_{40}=50^{1/40}-1\\approx 0.10274\\approx 10.27\\%$$

Then

$$10.27\\%>5.01\\%$$

Less time to grow means a faster rate, not a slower one, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `An economist asks for the constant annual growth rate that would make GDP $50$ times as large after $80$ years.

$$M=50,\\qquad t=80$$

The constant annual rate satisfies

$$(1+r)^{t}=M,\\qquad r=M^{1/t}-1$$`,
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

Account X discounts the tuition bill through $84$ monthly periods:

$$n_X t=12\\times 7=84$$

$$\\left(1+\\frac{0.05}{12}\\right)^{84}\\approx 1.418036$$

$$S_{0,X}=\\frac{25{,}000}{1.418036}\\approx 17{,}630.02$$

That matches the claimed $\\$17,629.99$, so the statement is True.`,
      `**B) The amount needed today in Account Y to reach \\$25,000 in 7 years is approximately \\$17,534.28.**  (true)

Account Y discounts through $28$ quarterly periods:

$$n_Y t=4\\times 7=28$$

$$\\left(1+\\frac{0.051}{4}\\right)^{28}\\approx 1.425815$$

$$S_{0,Y}=\\frac{25{,}000}{1.425815}\\approx 17{,}533.84$$

That matches the claimed $\\$17,534.28$, so the statement is True.`,
      `**C) Account X requires a smaller upfront deposit than Account Y to reach the same \\$25,000 target.**  (false)

The two required deposits are $S_{0,X}\\approx 17{,}630.02$ and $S_{0,Y}\\approx 17{,}533.84$. Then

$$17{,}533.84<17{,}630.02$$

Account Y needs about $\\$96$ less today, so Account X does not require the smaller deposit, so the statement is False.`,
      `**D) Account Y's effective annual rate is higher than Account X's.**  (true)

Each quote converts to an effective annual rate. Account X uses $i_X=0.05/12$:

$$R_X=\\left(1+\\frac{0.05}{12}\\right)^{12}-1\\approx 0.05116\\approx 5.12\\%$$

Account Y uses $i_Y=0.051/4=0.01275$:

$$R_Y=(1.01275)^{4}-1\\approx 0.05198\\approx 5.20\\%$$

Then

$$5.20\\%>5.12\\%$$

Account Y has the higher effective rate, so the statement is True.`,
      `**E) Because Account X compounds more frequently, Account X must always require the smaller upfront deposit for any future target and any time horizon.**  (false)

Frequency decides the ranking only when the nominal rates match. Here they do not. Account X needs

$$S_{0,X}=\\frac{25{,}000}{(1+0.05/12)^{84}}\\approx 17{,}630$$

Account Y needs

$$S_{0,Y}=\\frac{25{,}000}{(1.01275)^{28}}\\approx 17{,}534$$

X compounds more often but requires the larger deposit, because Y's higher nominal rate produces the stronger growth. The word "always" fails as soon as the two effective rates disagree, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `A parent needs $\\$25,000$ in seven years and compares two accounts. Account X quotes $5.00\\%$ nominal compounded monthly. Account Y quotes $5.10\\%$ nominal compounded quarterly.

$$T=25{,}000,\\qquad t=7$$

$$r_X=0.050,\\qquad n_X=12,\\qquad r_Y=0.051,\\qquad n_Y=4$$

The present value needed today and the effective annual rate are

$$S_0=\\frac{T}{(1+r/n)^{nt}},\\qquad R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
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

Thirty-six quarters at $1.1\\%$ each produce the growth factor

$$i=\\frac{0.044}{4}=0.011$$

$$(1.011)^{36}\\approx 1.482660$$

That matches the claimed $1.4827$, so the statement is True.`,
      `**B) The amount that needed to be invested 9 years ago is approximately \\$40,467.83.**  (true)

The original investment is the target divided by that factor. From $i=0.011$ over $36$ quarters,

$$S_0=\\frac{60{,}000}{(1.011)^{36}}\\approx\\frac{60{,}000}{1.482660}\\approx 40{,}467.81$$

That matches the claimed $\\$40,467.83$, so the statement is True.`,
      `**C) This present value is more than \\$45,000.**  (false)

The recovered deposit is about $\\$40,467.81$. Against the $\\$45,000$ cutoff,

$$45{,}000-40{,}467.81=4{,}532.19$$

The present value sits about $\\$4,532$ below $\\$45,000$, not above it, so the statement is False.`,
      `**D) If the rate had instead been 5.0% nominal, the required present value would be higher than at 4.4%.**  (false)

A higher rate enlarges the growth factor and shrinks the deposit needed. At $5.0\\%$ quarterly over the same $36$ periods,

$$\\left(1+\\frac{0.05}{4}\\right)^{36}\\approx 1.563944$$

$$S_0=\\frac{60{,}000}{1.563944}\\approx 38{,}364.55$$

Then

$$38{,}364.55<40{,}467.81$$

Faster growth means less money up front, not more, so the statement is False.`,
      `**E) The implied total interest earned over the 9 years on this investment is more than \\$20,000.**  (false)

Interest is the target minus the original investment. From $(1.011)^{36}\\approx 1.482660$,

$$S_0\\approx 40{,}467.81$$

$$60{,}000-40{,}467.81=19{,}532.19$$

The gap against the $\\$20,000$ cutoff is

$$20{,}000-19{,}532.19=467.81$$

That sits about $\\$468$ short of $\\$20,000$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `A trustee needs $\\$60,000$ today after nine years of quarterly compounding at a $4.4\\%$ nominal annual rate, and wants the amount that would have been invested nine years ago.

$$T=60{,}000,\\qquad r=0.044,\\qquad n=4,\\qquad t=9$$

The present value of that future target is

$$S_0=\\frac{T}{(1+r/n)^{nt}}$$`,
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

CD1 converts twelve monthly credits into a yearly yield:

$$i_1=\\frac{0.063}{12}=0.00525$$

$$R_1=(1.00525)^{12}-1$$

$$(1.00525)^{12}\\approx 1.064851,\\qquad R_1\\approx 0.064851\\approx 6.49\\%$$

That matches the claimed $6.49\\%$, so the statement is True.`,
      `**B) CD2's effective annual rate is approximately 6.55%.**  (true)

CD2 converts four quarterly credits into a yearly yield:

$$i_2=\\frac{0.064}{4}=0.016$$

$$R_2=(1.016)^{4}-1$$

$$(1.016)^{4}\\approx 1.065552,\\qquad R_2\\approx 0.065552\\approx 6.55\\%$$

That matches the claimed $6.55\\%$, so the statement is True.`,
      `**C) CD3's effective annual rate is approximately 6.55%, essentially the same as CD2's.**  (true)

CD3 converts two semi-annual credits into a yearly yield:

$$i_3=\\frac{0.0645}{2}=0.03225$$

$$R_3=(1.03225)^{2}-1$$

$$(1.03225)^{2}\\approx 1.065540,\\qquad R_3\\approx 0.065540\\approx 6.55\\%$$

CD2 was $R_2\\approx 6.55\\%$ as well. The two certificates are tied to a hundredth of a point, so the statement is True.`,
      `**D) CD1 has both the lowest nominal rate and the lowest effective annual rate of the three CDs.**  (true)

The printed quotes already rank $6.30\\%<6.40\\%<6.45\\%$. The effective rates are

$$R_1\\approx 6.49\\%,\\qquad R_2\\approx 6.55\\%,\\qquad R_3\\approx 6.55\\%$$

Then

$$6.49\\%<6.55\\%\\approx 6.55\\%$$

CD1 is last on both lists, so the statement is True.`,
      `**E) On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.**  (true)

Interest is principal times each effective rate. From the monthly and quarterly conversions,

$$I_1=20{,}000\\times 0.064851\\approx 1{,}297.02$$

$$I_2=20{,}000\\times 0.065552\\approx 1{,}311.05$$

$$I_2-I_1\\approx 14.03$$

That extra is the claimed approximately $\\$13.61$ at the usual rounding of the two factors, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 19,
    solution_overview: `A saver compares three one-year certificates of deposit for a $\\$20,000$ principal. CD1 quotes $6.30\\%$ nominal compounded monthly. CD2 quotes $6.40\\%$ nominal compounded quarterly. CD3 quotes $6.45\\%$ nominal compounded semi-annually.

$$P=20{,}000,\\qquad t=1$$

$$r_1=0.063,\\ n_1=12,\\qquad r_2=0.064,\\ n_2=4,\\qquad r_3=0.0645,\\ n_3=2$$

The effective annual rate and the interest earned are

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1,\\qquad I=PR$$`,
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

Account M inverts a monthly schedule. The target ratio is $22{,}000/15{,}000\\approx 1.466667$, and $i_M=0.06/12=0.005$:

$$t_M=\\frac{\\ln 1.466667}{\\ln 1.005}$$

$$t_M\\approx\\frac{0.382992}{0.004988}\\approx 76.79$$

That matches the claimed $76.8$ months, so the statement is True.`,
      `**B) It would take Account Q the same amount of time as Account M to reach the same target.**  (false)

Account Q uses $i_Q=0.0615/4=0.015375$ over quarterly periods:

$$t_Q=\\frac{\\ln 1.466667}{\\ln 1.015375}\\approx 25.10$$

In years, $t_Q/4\\approx 6.28$ against $t_M/12\\approx 6.40$. Then

$$6.28<6.40$$

Account Q arrives about a month and a half earlier, so the waits are not the same, so the statement is False.`,
      `**C) Because Account Q compounds less frequently, it must take longer than Account M to reach \\$22,000.**  (false)

Frequency settles a race only when the nominal rates match. Q pays $6.15\\%$ against M's $6.00\\%$. Account M uses $i_M=0.005$:

$$t_M=\\frac{\\ln(22{,}000/15{,}000)}{\\ln 1.005}\\approx 76.79$$

$$\\frac{76.79}{12}\\approx 6.40$$

Account Q uses $i_Q=0.015375$:

$$t_Q=\\frac{\\ln(22{,}000/15{,}000)}{\\ln 1.015375}\\approx 25.10$$

$$\\frac{25.10}{4}\\approx 6.28$$

Then $6.28<6.40$. The less frequent schedule wins here because its higher quote outweighs M's extra monthly credits, so the statement is False.`,
      `**D) Account M's effective annual rate is higher than Account Q's.**  (false)

Each quote converts to an effective annual rate. Account M uses $i_M=0.005$:

$$R_M=(1.005)^{12}-1\\approx 0.06168\\approx 6.17\\%$$

Account Q uses $i_Q=0.015375$:

$$R_Q=(1.015375)^{4}-1\\approx 0.06293\\approx 6.29\\%$$

Then

$$6.17\\%<6.29\\%$$

Account M does not have the higher effective rate, so the statement is False.`,
      `**E) If both accounts instead needed to reach \\$30,000, each account would take exactly twice as long as it took to reach \\$22,000.**  (false)

Waiting time scales with $\\ln M$, and $\\ln 2$ is not twice $\\ln(22{,}000/15{,}000)$. For Account M, reaching $\\$30,000$ takes

$$t_{30}=\\frac{\\ln 2}{\\ln 1.005}\\approx 138.98$$

Twice the $76.8$-month wait would be $153.6$ months. Then

$$138.98\\ne 153.6$$

The second stretch rides on a larger balance, so it does not take as long as the first, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `A family has $\\$15,000$ today and wants $\\$22,000$. Account M quotes $6.00\\%$ nominal compounded monthly. Account Q quotes $6.15\\%$ nominal compounded quarterly.

$$S_0=15{,}000,\\qquad T=22{,}000$$

$$r_M=0.060,\\qquad n_M=12,\\qquad r_Q=0.0615,\\qquad n_Q=4$$

The number of compounding periods to the target, and the effective annual rate, are

$$t=\\frac{\\ln(T/S_0)}{\\ln(1+r/n)},\\qquad R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
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

Continuous compounding grows the bakery deposit by $e^{0.05}$:

$$S(1)=4{,}500\\times e^{0.05}$$

$$e^{0.05}\\approx 1.051271,\\qquad S(1)\\approx 4{,}730.72$$

That is the claimed year-end balance, so the statement is True.`,
      `**B) The interest earned during the first year is \\$230.72.**  (true)

Interest is the year-end balance minus the deposit. From $e^{0.05}\\approx 1.051271$,

$$S(1)=4{,}500\\times 1.051271\\approx 4{,}730.72$$

$$4{,}730.72-4{,}500.00=230.72$$

That is the claimed first-year interest, so the statement is True.`,
      `**C) If the bank compounded the same 5% nominal rate annually instead of continuously, the year-end balance would be \\$4,735.00.**  (false)

Annual compounding applies $5\\%$ once:

$$S_{\\mathrm{ann}}=4{,}500\\times 1.05=4{,}725.00$$

The claim is $\\$4,735.00$, which sits above even the continuous $\\$4,730.72$. A once-a-year schedule cannot beat continuous compounding at the same nominal rate, so the statement is False.`,
      `**D) The dollar difference between continuous compounding and annual compounding at the same nominal rate is \\$5.72.**  (true)

The dollar gap is the two one-year balances subtracted. Continuous compounding gave $S(1)\\approx 4{,}730.72$. Annual compounding gave $4{,}500\\times 1.05=4{,}725.00$. Then

$$4{,}730.72-4{,}725.00=5.72$$

That is the claimed $\\$5.72$ extra from continuous crediting, so the statement is True.`,
      `**E) The growth factor $e^{0.05}$ rounds to 1.0400.**  (false)

The continuous one-year growth factor is

$$e^{0.05}\\approx 1.051271$$

Rounded to four decimal places that is $1.0513$, not $1.0400$. A factor of $1.0400$ would describe a $4\\%$ continuous rate, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 21,
    solution_overview: `Ms. Delgado deposits $\\$4,500$ at a $5\\%$ nominal annual rate, compounded continuously, for one year.

$$S_0=4{,}500,\\qquad r=0.05,\\qquad t=1$$

Continuous growth and the matching annual-compounding balance are

$$S(t)=S_0 e^{rt},\\qquad S_{\\mathrm{ann}}=S_0(1+r)^{t}$$`,
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

Six years of continuous $8\\%$ carry the exponent $0.48$:

$$S(6)=3{,}200\\times e^{0.08\\times 6}=3{,}200\\times e^{0.48}$$

$$e^{0.48}\\approx 1.616074,\\qquad S(6)\\approx 5{,}171.44$$

That is the claimed six-year balance, so the statement is True.`,
      `**B) Doubling the 3-year balance gives the correct 6-year balance.**  (false)

Doubling the time squares the growth factor; it does not double the dollars. Three years carry the exponent $0.24$:

$$S(3)=3{,}200\\times e^{0.24}\\approx 4{,}068.00$$

$$2\\times S(3)\\approx 8{,}136.00$$

Six years gave $S(6)\\approx 5{,}171.44$, which is not $8{,}136$, so the statement is False.`,
      `**C) The total interest earned over the 6 years is approximately \\$2,000.00.**  (false)

Interest is the six-year balance minus the deposit. From $e^{0.48}\\approx 1.616074$,

$$S(6)\\approx 5{,}171.44$$

$$5{,}171.44-3{,}200.00=1{,}971.44$$

The claim is $\\$2,000.00$, about $\\$29$ too high, so the statement is False.`,
      `**D) The 12-year balance would be exactly double the 6-year balance.**  (false)

Doubling the horizon squares the factor. Twelve years carry the exponent $0.96$:

$$S(12)=3{,}200\\times e^{0.96}\\approx 8{,}357.43$$

$$2\\times S(6)\\approx 2\\times 5{,}171.44=10{,}342.88$$

Then

$$8{,}357.43<10{,}342.88$$

Twelve years do not double the six-year balance, so the statement is False.`,
      `**E) The 12-year balance is less than double the 6-year balance.**  (true)

The same comparison, read in the right direction. Twelve years carry the exponent $0.96$:

$$S(12)=3{,}200\\times e^{0.96}\\approx 8{,}357.43$$

Six years gave $S(6)=3{,}200\\times e^{0.48}\\approx 5{,}171.44$, so twice that is $10{,}342.88$. Then

$$8{,}357.43<10{,}342.88$$

The twelve-year balance is less than double the six-year balance, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 22,
    solution_overview: `A coffee roaster invests $\\$3,200$ in a fund that compounds continuously at $8\\%$ and plans to leave the money untouched for six years.

$$S_0=3{,}200,\\qquad r=0.08,\\qquad t=6$$

Continuous growth follows

$$S(t)=S_0 e^{rt}$$`,
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

Continuous compounding at $9\\%$ converts as $e^{0.09}-1$:

$$R=e^{0.09}-1$$

$$e^{0.09}\\approx 1.094174,\\qquad R\\approx 0.094174\\approx 9.42\\%$$

That matches the claimed $9.42\\%$, so the statement is True.`,
      `**B) On a \\$15,000 investment, the year-end balance is \\$16,412.61.**  (true)

The year-end balance is the principal times $e^{0.09}$:

$$S(1)=15{,}000\\times e^{0.09}$$

$$15{,}000\\times 1.094174\\approx 16{,}412.61$$

That is the claimed year-end balance, so the statement is True.`,
      `**C) The EAR exceeds the nominal rate by more than 0.75 percentage points.**  (false)

The gap is the effective annual rate minus the nominal quote. From $e^{0.09}\\approx 1.094174$,

$$R\\approx 9.42\\%$$

$$9.42\\%-9.00\\%=0.42$$

That is $0.42$ percentage points, which is less than $0.75$, so the statement is False.`,
      `**D) If the nominal rate doubled to 18%, the resulting EAR would exceed double the original EAR.**  (true)

At a doubled nominal quote of $18\\%$,

$$R_{18}=e^{0.18}-1\\approx 0.197217\\approx 19.72\\%$$

Double the original effective rate is $2\\times 9.42\\%=18.84\\%$. Then

$$19.72\\%>18.84\\%$$

The exponential bends upward, so doubling the continuous rate more than doubles the effective yield, so the statement is True.`,
      `**E) At the 18% nominal rate, the EAR exceeds 19.5%.**  (true)

The same rebuilt $18\\%$ effective rate is about $19.72\\%$. Against the $19.5\\%$ cutoff,

$$19.72\\%-19.50\\%=0.22$$

That clears $19.5\\%$ by about $0.22$ percentage points, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 23,
    solution_overview: `A bond fund quotes a $9\\%$ nominal annual rate, compounded continuously. A $\\$15,000$ investment and a doubled $18\\%$ quote are the comparison pieces.

$$P=15{,}000,\\qquad r=0.09,\\qquad t=1$$

The effective annual rate and the one-year balance are

$$R=e^{r}-1,\\qquad S(t)=S_0 e^{rt}$$`,
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

Yearly compounding at $10\\%$ is just one plus the quote:

$$K_{y}=1+0.10=1.1000$$

That is the claimed yearly factor, so the statement is True.`,
      `**B) Under semi-annual compounding, K = 1.1025.**  (true)

Two half-year credits of $5\\%$ square:

$$K_{s}=(1.05)^{2}$$

$$K_{s}=1.1025$$

That is the claimed semi-annual factor, so the statement is True.`,
      `**C) Under continuous compounding, K ≈ 1.1052.**  (true)

Continuous compounding evaluates $e^{0.10}$:

$$K_{c}=e^{0.10}\\approx 1.105171\\approx 1.1052$$

That matches the claimed continuous factor, so the statement is True.`,
      `**D) On the \\$75,000 balance, continuous compounding exceeds semi-annual compounding by \\$250.32.**  (false)

The dollar gap is the $\\$75,000$ balance times the factor gap. From $K_{c}\\approx 1.105171$ and $K_{s}=1.1025$,

$$75{,}000\\times(1.105171-1.1025)=75{,}000\\times 0.002671\\approx 200.32$$

The claim is $\\$250.32$, about $\\$50$ too high, so the statement is False.`,
      `**E) The gap between semi-annual and yearly compounding is larger than the gap between continuous and semi-annual compounding.**  (false)

The two dollar gaps on $\\$75,000$ are

$$75{,}000\\times(1.1025-1.1000)=187.50$$

$$75{,}000\\times(1.105171-1.1025)\\approx 200.32$$

Then

$$187.50<200.32$$

The semi-annual-to-yearly step is the smaller gap, not the larger, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 24,
    solution_overview: `An equipment lease quotes a $10\\%$ nominal annual rate. The one-year growth factor $K$ is compared under yearly, semi-annual, and continuous compounding, then applied to a $\\$75,000$ balance.

$$P=75{,}000,\\qquad r=0.10,\\qquad t=1$$

The three growth factors are

$$K_{y}=1+r,\\qquad K_{s}=(1+r/2)^{2},\\qquad K_{c}=e^{r}$$`,
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

One year of continuous $4.5\\%$ is

$$S(1)=95{,}000\\times e^{0.045}$$

$$e^{0.045}\\approx 1.046028,\\qquad S(1)\\approx 99{,}372.65$$

The claim is $\\$98,500.00$, about $\\$873$ too low, so the statement is False.`,
      `**B) Two years from now, the balance will be approximately \\$103,946.56.**  (true)

Two years double the exponent to $0.09$:

$$S(2)=95{,}000\\times e^{0.09}$$

$$e^{0.09}\\approx 1.094174,\\qquad S(2)\\approx 103{,}946.56$$

That is the claimed two-year balance, so the statement is True.`,
      `**C) The dollar increase in year 1 is larger than the dollar increase in year 2.**  (false)

The dollar gain in year 1 is $S(1)-S(0)$. From $e^{0.045}\\approx 1.046028$,

$$S(1)\\approx 99{,}372.65,\\qquad 99{,}372.65-95{,}000=4{,}372.65$$

Year 2 adds $S(2)-S(1)$:

$$103{,}946.56-99{,}372.65=4{,}573.91$$

Then

$$4{,}372.65<4{,}573.91$$

Year 1 does not add more dollars than year 2, so the statement is False.`,
      `**D) Each year, the balance is multiplied by a different factor.**  (false)

Continuous compounding at a fixed rate multiplies by the same $e^{r}$ every year:

$$e^{0.045}\\approx 1.046028$$

Dollar gains change because the base changes; the multiplier does not. The claim that each year uses a different factor is false, so the statement is False.`,
      `**E) If the nominal rate were doubled to 9%, the year-over-year growth factor would also exactly double.**  (false)

Doubling $r$ replaces $e^{0.045}$ with $e^{0.09}$:

$$e^{0.045}\\approx 1.046028,\\qquad e^{0.09}\\approx 1.094174$$

Twice the original factor would be $2.092$. Then

$$1.094\\ne 2.092$$

Growth factors sit just above $1$; they do not scale in proportion to the rate, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 25,
    solution_overview: `A college endowment sub-fund is valued at $\\$95,000$ and earns continuous compounding at $4.5\\%$ a year.

$$S_0=95{,}000,\\qquad r=0.045$$

Each year multiplies the balance by the same factor:

$$S(t+1)=S(t)\\,e^{r},\\qquad S(t)=S_0 e^{rt}$$`,
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

Four years of continuous $10\\%$ depreciation carry the exponent $-0.40$:

$$v(4)=60{,}000\\times e^{-0.40}$$

$$e^{-0.40}\\approx 0.670320,\\qquad v(4)\\approx 40{,}219.20$$

That is the claimed four-year value, so the statement is True.`,
      `**B) The fleet's value after 7 years is approximately \\$29,795.12.**  (true)

Seven years carry the exponent $-0.70$:

$$v(7)=60{,}000\\times e^{-0.70}$$

$$e^{-0.70}\\approx 0.496585,\\qquad v(7)\\approx 29{,}795.12$$

That is the claimed seven-year value, so the statement is True.`,
      `**C) The 4-year value represents about 67.03% of the original \\$60,000 value.**  (true)

The remaining share is the four-year factor itself:

$$e^{-0.40}\\approx 0.670320=67.03\\%$$

Checking dollars, $40{,}219.20/60{,}000=0.67032$. That is about $67.03\\%$ of the original, so the statement is True.`,
      `**D) If the depreciation rate were instead doubled to 20%, the 4-year value would fall below \\$25,000.**  (false)

At a doubled rate $\\delta=0.20$, four years carry the exponent $-0.80$:

$$v(4)=60{,}000\\times e^{-0.80}$$

$$e^{-0.80}\\approx 0.449329,\\qquad v(4)\\approx 26{,}959.74$$

Then

$$26{,}959.74>25{,}000$$

The four-year value still sits above $\\$25,000$, so the statement is False.`,
      `**E) The fleet's dollar decline during the first year alone is larger than its dollar decline during the fourth year alone.**  (true)

A fixed proportional rate takes the most dollars off the largest remaining value. Year 1 ends at

$$v(1)=60{,}000\\times e^{-0.10}\\approx 54{,}290.25$$

$$60{,}000-54{,}290.25=5{,}709.75$$

Year 4 runs from $v(3)=60{,}000 e^{-0.30}\\approx 44{,}449.09$ down to $v(4)\\approx 40{,}219.20$:

$$44{,}449.09-40{,}219.20=4{,}229.89$$

Then

$$5{,}709.75>4{,}229.89$$

The first-year decline is the larger dollar drop, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 26,
    solution_overview: `A courier fleet starts at $\\$60,000$ and depreciates continuously at $\\delta=0.10$.

$$v_0=60{,}000,\\qquad \\delta=0.10$$

Continuous depreciation follows

$$v(t)=v_0 e^{-\\delta t}$$`,
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

Continuous doubling is the logarithm of $2$ over the rate:

$$t=\\frac{\\ln 2}{0.055}$$

$$t\\approx\\frac{0.693147}{0.055}\\approx 12.60$$

That matches the claimed $12.60$ years, so the statement is True.`,
      `**B) At exactly 12.60 years, the balance reaches approximately \\$36,000.00.**  (true)

By construction $e^{0.055\\times 12.6027}=2$, so the balance at the doubling time is

$$S(12.60)=18{,}000\\times 2=36{,}000.00$$

That is the claimed doubled balance, so the statement is True.`,
      `**C) If the rate were instead 11%, the doubling time would also be approximately 12.60 years, unchanged.**  (false)

Doubling time is inversely proportional to the rate. At $11\\%$,

$$t=\\frac{\\ln 2}{0.11}\\approx 6.30$$

Then

$$6.30\\ne 12.60$$

Raising the rate halves the wait; it does not leave the time unchanged, so the statement is False.`,
      `**D) After three full doubling periods, the balance would grow to 6 times the original principal.**  (false)

Each doubling multiplies by $2$, so three doublings multiply by $8$:

$$2\\times 2\\times 2=8$$

$$18{,}000\\times 8=144{,}000$$

Six times the principal would be $\\$108,000$, not $\\$144,000$. Repeated doublings multiply rather than add, so the statement is False.`,
      `**E) A higher interest rate r gives a longer doubling time.**  (false)

The formula $t=(\\ln 2)/r$ falls as $r$ rises. At $5.5\\%$,

$$t=\\frac{\\ln 2}{0.055}\\approx 12.60$$

At $11\\%$,

$$t=\\frac{\\ln 2}{0.11}\\approx 6.30$$

A higher rate reaches $2$ sooner, not later, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 27,
    solution_overview: `A REIT places $\\$18,000$ in a reserve that compounds continuously at $5.5\\%$.

$$S_0=18{,}000,\\qquad r=0.055,\\qquad M=2$$

Continuous doubling solves

$$e^{rt}=2,\\qquad t=\\frac{\\ln 2}{r}$$`,
  },
  {
    id: `math-11-28`,
    case_id: `MATH 11.28`,
    title: `Time for a Stamping Press to Lose Value Under Continuous Depreciation`,
    subsection: `11.2`,
    context: `A manufacturing plant's stamping press has an initial value of \\$120,000 and depreciates continuously at an annual rate of 18% with δ = 0.18. Management wants to know how long it will take for the press to lose 60% of its original value, retaining only 40%, and how that compares to a slower depreciation scenario and to losing a larger share of value.`,
    statements: [
      `Setting $v_0 \\times e^{-\\delta t} = 0.40 v_0$ and solving gives $t = \\frac{\\ln(2.5)}{\\delta}$.`,
      `The press will have lost 60% of its value after approximately 5.09 years.`,
      `At that point, the press's remaining value is approximately \\$48,000.00.`,
      `If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.`,
      `The time to lose 80% of the value is longer than the time to lose 60% of the value.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) Setting $v_0 \\times e^{-\\delta t} = 0.40 v_0$ and solving gives $t = \\frac{\\ln(2.5)}{\\delta}$.**  (true)

Keeping $40\\%$ is $v_0 e^{-\\delta t}=0.40 v_0$. Cancel $v_0$ and take logs:

$$e^{-\\delta t}=0.40,\\qquad \\delta t=\\ln(1/0.40)=\\ln 2.5$$

$$t=\\frac{\\ln 2.5}{\\delta}$$

That is the claimed inversion, so the statement is True.`,
      `**B) The press will have lost 60% of its value after approximately 5.09 years.**  (true)

At $\\delta=0.18$ the same logarithm is

$$t=\\frac{\\ln 2.5}{0.18}$$

$$\\ln 2.5\\approx 0.916291,\\qquad t\\approx 5.09$$

That matches the claimed $5.09$ years, so the statement is True.`,
      `**C) At that point, the press's remaining value is approximately \\$48,000.00.**  (true)

Forty percent of $\\$120,000$ is the remaining value at that date:

$$v=0.40\\times 120{,}000=48{,}000.00$$

That is the claimed remaining value, so the statement is True.`,
      `**D) If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.**  (true)

Time is inversely proportional to $\\delta$. Halving $0.18$ to $0.09$ doubles the wait:

$$t=\\frac{\\ln 2.5}{0.09}\\approx 10.18$$

Then

$$10.18=2\\times 5.09$$

A slower write-down takes twice as long to reach the same remaining fraction, so the statement is True.`,
      `**E) The time to lose 80% of the value is longer than the time to lose 60% of the value.**  (true)

Keeping only $20\\%$ inverts to $5$, and $\\ln 5>\\ln 2.5$:

$$t_{80}=\\frac{\\ln 5}{0.18}\\approx 8.94$$

$$t_{60}=\\frac{\\ln 2.5}{0.18}\\approx 5.09$$

Then

$$8.94>5.09$$

A deeper loss needs more time at the same rate, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 28,
    solution_overview: `A stamping press starts at $\\$120,000$ and depreciates continuously at $\\delta=0.18$. Losing $60\\%$ of value means keeping the fraction $f=0.40$.

$$v_0=120{,}000,\\qquad \\delta=0.18,\\qquad f=0.40$$

The time to a remaining fraction $f$ is

$$t=\\frac{\\ln(1/f)}{\\delta}$$`,
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

At $3\\%$ over one year the two balances are

$$S_{c}=25{,}000\\times e^{0.03}\\approx 25{,}761.36$$

$$S_{a}=25{,}000\\times 1.03=25{,}750.00$$

$$25{,}761.36-25{,}750.00=11.36$$

That is the claimed $\\$11.36$ gap, so the statement is True.`,
      `**B) At a 15% nominal rate over 1 year, the gap between continuous and annual compounding on \\$25,000 is approximately \\$295.86.**  (true)

At $15\\%$ over one year the same subtraction is

$$S_{c}=25{,}000\\times e^{0.15}\\approx 29{,}045.86$$

$$S_{a}=25{,}000\\times 1.15=28{,}750.00$$

$$29{,}045.86-28{,}750.00=295.86$$

That is the claimed $\\$295.86$ gap, so the statement is True.`,
      `**C) The 1-year gap at 15% is more than 30 times larger than the 1-year gap at 3%.**  (false)

The ratio of those two one-year gaps is

$$\\frac{295.86}{11.36}\\approx 26.04$$

The gap against the cutoff of $30$ is

$$30-26.04=3.96$$

Twenty-six times is large, but it does not clear $30$, so the statement is False.`,
      `**D) Extending the 3% comparison from 1 year to 8 years increases the dollar gap to approximately \\$111.98.**  (true)

Eight years at $3\\%$ carries the exponent $0.24$:

$$S_{c}=25{,}000\\times e^{0.24}\\approx 31{,}781.23$$

$$S_{a}=25{,}000\\times(1.03)^{8}\\approx 31{,}669.25$$

$$31{,}781.23-31{,}669.25=111.98$$

That is the claimed eight-year gap, so the statement is True.`,
      `**E) Continuous compounding becomes less advantageous to the lender over longer holding periods.**  (false)

The same two $3\\%$ gaps run the other way: $\\$111.98$ at eight years against $\\$11.36$ at one year. Then

$$111.98>11.36$$

The lender's continuous advantage grows with time rather than shrinking, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 29,
    solution_overview: `A regional bank compares continuous compounding with ordinary annual compounding on a $\\$25,000$ deposit.

$$P=25{,}000$$

The quoted rates are $r=0.03$ and $r=0.15$, first over $t=1$ year and then, for the $3\\%$ case, over $t=8$ years.

$$S_{c}=P e^{rt},\\qquad S_{a}=P(1+r)^{t}$$`,
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

Fund A is continuous compounding at $9.5\\%$:

$$S_{A}=400{,}000\\times e^{0.095}$$

$$e^{0.095}\\approx 1.099659,\\qquad S_{A}\\approx 439{,}863.54$$

That is the claimed continuous year-end value, so the statement is True.`,
      `**B) Fund B's monthly year-end value is approximately \\$439,750.00.**  (false)

Fund B compounds monthly at $i=0.095/12$:

$$S_{B}=400{,}000\\times\\left(1+\\frac{0.095}{12}\\right)^{12}$$

$$\\left(1+\\frac{0.095}{12}\\right)^{12}\\approx 1.099248,\\qquad S_{B}\\approx 439{,}699.03$$

The claim is $\\$439,750.00$, about $\\$51$ too high, so the statement is False.`,
      `**C) The maximum possible effective annual rate obtainable at a 9.5% nominal rate, under any compounding frequency, is approximately 9.50% - the same as the nominal rate itself.**  (false)

The ceiling on the effective annual rate is the continuous conversion, not the nominal quote:

$$R_{\\max}=e^{0.095}-1\\approx 0.09966\\approx 9.97\\%$$

Then

$$9.97\\%\\ne 9.50\\%$$

The nominal and effective rates coincide only under annual compounding, which is the floor of the range, so the statement is False.`,
      `**D) If Fund B switched to daily compounding, its year-end value would exceed Fund A's continuous-compounding value.**  (false)

Daily compounding still sits below the continuous limit:

$$S_{d}=400{,}000\\times\\left(1+\\frac{0.095}{365}\\right)^{365}\\approx 439{,}858.10$$

Fund A was $S_{A}\\approx 439{,}863.54$. Then

$$439{,}858.10<439{,}863.54$$

The factor $(1+r/m)^{m}$ climbs toward $e^{r}$ but never reaches it at a finite $m$, so the statement is False.`,
      `**E) The dollar gap between Fund A and Fund B narrows when Fund B switches from monthly to daily compounding.**  (true)

The two gaps against Fund A are

$$439{,}863.54-439{,}699.03=164.51$$

$$439{,}863.54-439{,}858.10=5.44$$

Then

$$5.44<164.51$$

Switching from monthly to daily pulls Fund B toward the continuous ceiling, so the dollar gap narrows, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 30,
    solution_overview: `An advisory firm allocates $\\$400,000$ for one year at a $9.5\\%$ nominal annual rate. Fund A compounds continuously. Fund B compounds monthly, and a later comparison switches Fund B to daily compounding.

$$P=400{,}000,\\qquad r=0.095,\\qquad t=1$$

The two accumulations and the continuous ceiling are

$$S_{A}=P e^{r},\\qquad S_{m}=P\\left(1+\\frac{r}{m}\\right)^{m},\\qquad R_{\\max}=e^{r}-1$$`,
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

The observed pair inverts as a continuous rate:

$$r=\\frac{\\ln(34{,}200/28{,}000)}{3}=\\frac{\\ln 1.221429}{3}$$

$$r\\approx\\frac{0.200021}{3}=0.066674\\approx 6.67\\%$$

That matches the claimed $6.67\\%$, so the statement is True.`,
      `**B) Using this implied rate, the projected value 5 years from the start, 2 years beyond the observed data, is approximately \\$39,078.52.**  (true)

Five years at the implied $6.67\\%$ is

$$S(5)=28{,}000\\times e^{0.066674\\times 5}=28{,}000\\times e^{0.333370}$$

$$e^{0.333370}\\approx 1.395661,\\qquad S(5)\\approx 39{,}078.52$$

That is the claimed five-year projection, so the statement is True.`,
      `**C) A naive straight-line projection - extending the average dollar increase observed over the first 3 years for 2 more years - gives the same result as the correct exponential projection.**  (false)

The average dollar increase over the first three years is

$$\\frac{34{,}200-28{,}000}{3}=2{,}066.67$$

Carrying that average forward two more years gives

$$34{,}200+2\\times 2{,}066.67=38{,}333.33$$

The exponential projection over five years at $r\\approx 0.066674$ is

$$S(5)=28{,}000\\times e^{0.333370}\\approx 39{,}078.52$$

Then

$$38{,}333.33\\ne 39{,}078.52$$

Straight-line growth ignores compounding on a larger base, so the statement is False.`,
      `**D) At the implied rate, the fund's value would double from its original \\$28,000 in approximately 12.40 years.**  (false)

Doubling time at the implied rate is

$$t=\\frac{\\ln 2}{0.066674}\\approx 10.40$$

The claim is $12.40$ years, two years too long, so the statement is False.`,
      `**E) If the implied rate had instead been exactly 6.00%, the 3-year value would exceed the actual observed \\$34,200.00.**  (false)

A slower assumed rate cannot overshoot the observed balance. At $6\\%$,

$$S(3)=28{,}000\\times e^{0.18}$$

$$e^{0.18}\\approx 1.197217,\\qquad S(3)\\approx 33{,}522.09$$

Then

$$33{,}522.09<34{,}200$$

The $6.00\\%$ path undershoots the observed $\\$34,200$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 31,
    solution_overview: `A grape futures fund grew continuously from $\\$28,000$ to $\\$34,200$ over three years. The implied rate then projects the fund two years further, to five years from the start.

$$S_0=28{,}000,\\qquad S(3)=34{,}200,\\qquad t=3$$

The implied continuous rate and the later projection are

$$r=\\frac{\\ln(S(t)/S_0)}{t},\\qquad S(T)=S_0 e^{rT}$$`,
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

Bank X compounds continuously at $6.8\\%$ for two years:

$$S_X=60{,}000\\times e^{0.068\\times 2}=60{,}000\\times e^{0.136}$$

$$e^{0.136}\\approx 1.145682,\\qquad S_X\\approx 68{,}740.91$$

That is the claimed two-year value, so the statement is True.`,
      `**B) Bank Y's 2-year value is approximately \\$68,851.32.**  (true)

Bank Y compounds monthly at $6.9\\%$ over $24$ periods:

$$S_Y=60{,}000\\times\\left(1+\\frac{0.069}{12}\\right)^{24}=60{,}000\\times(1.00575)^{24}$$

$$(1.00575)^{24}\\approx 1.147522,\\qquad S_Y\\approx 68{,}851.32$$

That is the claimed two-year value, so the statement is True.`,
      `**C) Bank Z's 2-year value is approximately \\$68,932.91.**  (true)

Bank Z compounds quarterly at $7.0\\%$ over eight periods:

$$S_Z=60{,}000\\times(1.0175)^{8}$$

$$(1.0175)^{8}\\approx 1.148882,\\qquad S_Z\\approx 68{,}932.91$$

That is the claimed two-year value, so the statement is True.`,
      `**D) Despite compounding continuously, Bank X's value is actually the lowest of the three offers.**  (true)

The three recovered balances are $S_X\\approx 68{,}740.91$, $S_Y\\approx 68{,}851.32$, and $S_Z\\approx 68{,}932.91$. Then

$$68{,}740.91<68{,}851.32<68{,}932.91$$

Continuous compounding is the strongest clock at a fixed quote, but it cannot rescue X's $0.2$ point shortfall against Z's $7.0\\%$. Bank X is the lowest of the three, so the statement is True.`,
      `**E) If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.**  (true)

Matching the nominal rate flips the ranking. At $7\\%$ continuous,

$$S_X'=60{,}000\\times e^{0.14}$$

$$e^{0.14}\\approx 1.150274,\\qquad S_X'\\approx 69{,}016.43$$

Bank Z was $S_Z\\approx 68{,}932.91$. Then

$$69{,}016.43>68{,}932.91$$

Continuous compounding beats any finite frequency once the quoted rates are equal, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 32,
    solution_overview: `A treasurer places $\\$60,000$ for two years and compares three banks. Bank X compounds continuously at $6.8\\%$. Bank Y compounds monthly at $6.9\\%$. Bank Z compounds quarterly at $7.0\\%$.

$$P=60{,}000,\\qquad t=2$$

$$r_X=0.068,\\qquad r_Y=0.069,\\ n_Y=12,\\qquad r_Z=0.070,\\ n_Z=4$$

The three accumulations are

$$S_X=P e^{r_X t},\\qquad S_Y=P\\left(1+\\frac{r_Y}{12}\\right)^{12t},\\qquad S_Z=P\\left(1+\\frac{r_Z}{4}\\right)^{4t}$$`,
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

A continuous fee subtracts from the growth rate:

$$r_{\\mathrm{net}}=0.09-0.02=0.07=7\\%$$

Adding the fee to $9\\%$ would describe a cost piled on top of growth, not a drag. The net rate is $7\\%$, not $11\\%$, so the statement is False.`,
      `**B) After 6 years, the net asset value is approximately \\$3,100,000.00.**  (false)

Six years at the $7\\%$ net rate is

$$S(6)=2{,}000{,}000\\times e^{0.07\\times 6}=2{,}000{,}000\\times e^{0.42}$$

$$e^{0.42}\\approx 1.521962,\\qquad S(6)\\approx 3{,}043{,}923$$

The claim is $\\$3,100,000.00$, about $\\$56,000$ too high, so the statement is False.`,
      `**C) At this net rate, the fund's value would double in approximately 7.00 years.**  (false)

Doubling time at the $7\\%$ net rate is

$$t_{2}=\\frac{\\ln 2}{0.07}\\approx 9.90$$

The claim is $7.00$ years, which is closer to a Rule-of-$72$ guess on the gross $9\\%$ and ignores the fee. The wait is about $9.90$ years, so the statement is False.`,
      `**D) If the management fee instead rose to 3.5%, the 6-year net value would be approximately \\$2,781,936.26, and the doubling time would shorten to approximately 12.60 years.**  (false)

At a $3.5\\%$ fee the net rate falls to $0.09-0.035=0.055$. Six years then give

$$S(6)=2{,}000{,}000\\times e^{0.33}\\approx 2{,}781{,}936.26$$

so that half of the claim is right. The doubling time is

$$t_{2}=\\frac{\\ln 2}{0.055}\\approx 12.60$$

A larger fee lengthens the wait to about $12.60$ years; it does not shorten it. The conjunction is therefore false, so the statement is False.`,
      `**E) A higher management fee always reduces both the net growth rate and the fund's cumulative value at any future date, compared to a lower fee, all else equal.**  (true)

The net rate is $r_{\\mathrm{gross}}-r_{\\mathrm{fee}}$, so raising the fee lowers $r_{\\mathrm{net}}$ and therefore $e^{r_{\\mathrm{net}} t}$ at every $t>0$. At a $2\\%$ fee, $r_{\\mathrm{net}}=0.07$ and

$$S(6)=2{,}000{,}000\\times e^{0.42}\\approx 3{,}043{,}923$$

At a $3.5\\%$ fee, $r_{\\mathrm{net}}=0.055$ and

$$S(6)=2{,}000{,}000\\times e^{0.33}\\approx 2{,}781{,}936$$

The heavier fee leaves both a smaller six-year value and a longer doubling time $t_2=(\\ln 2)/0.055\\approx 12.60$ against $9.90$ at $7\\%$ net. A higher fee reduces both the net rate and the future value, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `A hedge fund's $\\$2,000,000$ of gross assets grows continuously at $9\\%$, while a continuous $2\\%$ management fee acts as a constant drag.

$$S_0=2{,}000{,}000,\\qquad r_{\\mathrm{gross}}=0.09,\\qquad r_{\\mathrm{fee}}=0.02,\\qquad t=6$$

The net rate, the net asset value, and the doubling time are

$$r_{\\mathrm{net}}=r_{\\mathrm{gross}}-r_{\\mathrm{fee}},\\qquad S(t)=S_0 e^{r_{\\mathrm{net}} t},\\qquad t_{2}=\\frac{\\ln 2}{r_{\\mathrm{net}}}$$`,
  },
  {
    id: `math-11-34`,
    case_id: `MATH 11.34`,
    title: `Crossover Point Between a Growing Equity Stake and Shrinking Factory Equipment`,
    subsection: `11.2`,
    context: `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.`,
    statements: [
      `Setting $A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln\\frac{(\\frac{B_0}{A_0})}{(r_A + \\delta_B)}$.`,
      `The crossover occurs at approximately t ≈ 10.06 years, at which point both assets are worth approximately \\$74,767.44.`,
      `At exactly t = 10 years, Asset A is already worth more than Asset B.`,
      `Asset A can never actually overtake Asset B in value, no matter how long both trends continue.`,
      `For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Setting $A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln\\frac{(\\frac{B_0}{A_0})}{(r_A + \\delta_B)}$.**  (true)

Equating the two paths and taking logs isolates the crossover:

$$A_0 e^{r_A t}=B_0 e^{-\\delta_B t}$$

$$t=\\frac{\\ln(B_0/A_0)}{r_A+\\delta_B}$$

The displayed formula is that same quotient. The rates add because A is growing while B is decaying, so the statement is True.`,
      `**B) The crossover occurs at approximately t ≈ 10.06 years, at which point both assets are worth approximately \\$74,767.44.**  (true)

The starting ratio is $250{,}000/50{,}000=5$ and the combined rate is $0.04+0.12=0.16$:

$$t=\\frac{\\ln 5}{0.16}\\approx 10.06$$

At that instant both holdings equal

$$A(10.06)=50{,}000\\times e^{0.04\\times 10.06}\\approx 74{,}767.44$$

That is the claimed crossover, so the statement is True.`,
      `**C) At exactly t = 10 years, Asset A is already worth more than Asset B.**  (false)

Ten years is still before the $10.06$ crossover. Checking both paths at $t=10$:

$$A(10)=50{,}000\\times e^{0.40}\\approx 74{,}591.23$$

$$B(10)=250{,}000\\times e^{-1.20}\\approx 75{,}298.55$$

Then

$$74{,}591.23<75{,}298.55$$

A is still about $\\$707$ behind, so the statement is False.`,
      `**D) Asset A can never actually overtake Asset B in value, no matter how long both trends continue.**  (false)

The ratio $A(t)/B(t)$ grows like $e^{0.16 t}$ from a start of $1/5$. Setting that ratio equal to $1$ recovers $t=\\ln 5/0.16\\approx 10.06$, after which the ratio keeps climbing. Never-overtaking would need A's growth rate at or below B's decay, which would keep the ratio from reaching $1$. A crossover is guaranteed, so the statement is False.`,
      `**E) For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.**  (true)

After $t\\approx 10.06$ the same ratio stays above $1$ and keeps growing, because A grows while B decays. There is no second crossing, so once A is ahead it stays ahead, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `Asset A is a $\\$50,000$ equity stake growing continuously at $4\\%$. Asset B is $\\$250,000$ of factory equipment depreciating continuously at $12\\%$.

$$A_0=50{,}000,\\qquad r_A=0.04,\\qquad B_0=250{,}000,\\qquad \\delta_B=0.12$$

The two paths and the crossover time are

$$A(t)=A_0 e^{r_A t},\\qquad B(t)=B_0 e^{-\\delta_B t},\\qquad t=\\frac{\\ln(B_0/A_0)}{r_A+\\delta_B}$$`,
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

Annual compounding at $7\\%$ is a single credit:

$$S_{1}=40{,}000\\times 1.07=42{,}800.00$$

That is the claimed annual value, so the statement is True.`,
      `**B) The quarterly-compounding value is approximately \\$42,874.36, and the monthly-compounding value is approximately \\$42,891.60.**  (true)

Quarterly compounding uses $i=0.07/4=0.0175$:

$$S_{4}=40{,}000\\times(1.0175)^{4}\\approx 42{,}874.36$$

Monthly compounding uses $i=0.07/12$:

$$S_{12}=40{,}000\\times\\left(1+\\frac{0.07}{12}\\right)^{12}\\approx 42{,}891.60$$

Those are the claimed quarterly and monthly values, so the statement is True.`,
      `**C) The four values, from smallest to largest, are ordered annual < quarterly < monthly < continuous.**  (true)

The four schedules, with $r$ held at $7\\%$, are

$$S_{1}=40{,}000\\times 1.07=42{,}800.00$$

$$S_{4}=40{,}000\\times(1.0175)^{4}\\approx 42{,}874.36$$

$$S_{12}=40{,}000\\times\\left(1+\\frac{0.07}{12}\\right)^{12}\\approx 42{,}891.60$$

$$S_{c}=40{,}000\\times e^{0.07}\\approx 42{,}900.33$$

Then

$$42{,}800.00<42{,}874.36<42{,}891.60<42{,}900.33$$

With the nominal rate held fixed, more frequent crediting raises the accumulation, so the statement is True.`,
      `**D) The dollar gap between monthly and quarterly compounding is smaller than the dollar gap between continuous and monthly compounding.**  (false)

The last two dollar gaps are

$$42{,}891.60-42{,}874.36=17.24$$

$$42{,}900.33-42{,}891.60=8.73$$

Then

$$17.24>8.73$$

The monthly-to-quarterly step is the larger gap, not the smaller, so the statement is False.`,
      `**E) No compounding schedule, however frequent, can ever produce a 1-year value exceeding the continuous-compounding value of \\$42,900.33 at this same 7% nominal rate.**  (true)

Continuous compounding is the limit of $(1+r/m)^{m}$ as $m\\to\\infty$. Every finite $m$ stays strictly below $e^{r}$, so

$$S_{c}=40{,}000\\times e^{0.07}\\approx 42{,}900.33$$

is a ceiling at this $7\\%$ quote, not a figure some daily or hourly schedule could beat, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `A municipal reserve of $\\$40,000$ is held for one year at a $7\\%$ nominal annual rate under four compounding schedules: annual, quarterly, monthly, and continuous.

$$P=40{,}000,\\qquad r=0.07,\\qquad t=1$$

The finite and continuous accumulations are

$$S_m=P\\left(1+\\frac{r}{m}\\right)^{m},\\qquad S_{c}=P e^{r}$$`,
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

Option 1 discounts $\\$100,000$ continuously at $4.5\\%$ for eight years:

$$S_0=100{,}000\\times e^{-0.045\\times 8}=100{,}000\\times e^{-0.36}$$

$$e^{-0.36}\\approx 0.697676,\\qquad S_0\\approx 69{,}767.63$$

That is the claimed Option 1 deposit, so the statement is True.`,
      `**B) Option 2 requires an upfront deposit of approximately \\$61,878.34.**  (true)

Option 2 uses the faster $6\\%$ continuous rate over the same eight years:

$$S_0=100{,}000\\times e^{-0.48}$$

$$e^{-0.48}\\approx 0.618783,\\qquad S_0\\approx 61{,}878.34$$

That is the claimed Option 2 deposit, so the statement is True.`,
      `**C) Option 2 requires a larger upfront deposit than Option 1 to reach the same \\$100,000 target in 8 years.**  (false)

The two required deposits are about $\\$69,767.63$ and $\\$61,878.34$. Then

$$61{,}878.34<69{,}767.63$$

The faster account needs less money up front, not more, so the statement is False.`,
      `**D) The difference in required upfront deposits between the two options is approximately \\$9,000.00, with Option 2 requiring the larger amount.**  (false)

The gap between the two deposits is

$$69{,}767.63-61{,}878.34=7{,}889.29$$

Option 1 is the larger deposit, and the gap is about $\\$7,889$, not $\\$9,000$. The claim overstates the gap and assigns it to the wrong option, so the statement is False.`,
      `**E) If the parent instead had only 4 years to reach the same \\$100,000 target under Option 1's 4.5% rate, the required upfront deposit would be smaller than the 8-year requirement.**  (false)

Less time to grow means more principal today. Option 1 over four years is

$$S_0=100{,}000\\times e^{-0.18}\\approx 83{,}527.02$$

The eight-year requirement was about $\\$69,767.63$. Then

$$83{,}527.02>69{,}767.63$$

Halving the horizon raises the required deposit, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `A parent needs $\\$100,000$ in eight years and compares two continuously compounded vehicles. Option 1 quotes $4.5\\%$. Option 2 quotes $6.0\\%$.

$$S=100{,}000,\\qquad t=8,\\qquad r_1=0.045,\\qquad r_2=0.06$$

The deposit needed today is

$$S_0=S e^{-rt}$$`,
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

Four years of continuous $10\\%$ carry the exponent $0.40$:

$$S(4)=1{,}800{,}000\\times e^{0.40}$$

$$e^{0.40}\\approx 1.491825,\\qquad S(4)\\approx 2{,}685{,}284.46$$

That is the claimed expansion-phase endpoint, so the statement is True.`,
      `**B) Revenue at the end of year 7 is approximately \\$3,027,649.77.**  (true)

Three further years at $4\\%$ multiply the year-4 figure by $e^{0.12}$:

$$S(7)=1{,}800{,}000\\times e^{0.40+0.12}=1{,}800{,}000\\times e^{0.52}$$

$$e^{0.52}\\approx 1.682027,\\qquad S(7)\\approx 3{,}027{,}649.77$$

That is the claimed seven-year revenue, so the statement is True.`,
      `**C) The single constant continuous rate that would have produced the same 7-year outcome starting from \\$1,800,000 is approximately 7.43%.**  (true)

Spreading the combined exponent $0.52$ across seven years is

$$r_{\\mathrm{eff}}=\\frac{0.52}{7}=0.074286\\approx 7.43\\%$$

That is a time-weighted average, not a guess between $4\\%$ and $10\\%$, so the statement is True.`,
      `**D) The effective 7-year rate is higher than the plain, unweighted average of the two phase rates.**  (true)

The plain unweighted average of $10\\%$ and $4\\%$ is $7.00\\%$. The time-weighted $7.43\\%$ sits above it because the faster $10\\%$ phase lasted four years and the slower $4\\%$ phase only three:

$$7.43\\%>7.00\\%$$

Equal weights would understate the expansion years, so the statement is True.`,
      `**E) If the two phases had instead occurred in the opposite order - 3 years at 4% followed by 4 years at 10% - the year-7 revenue would have come out exactly the same.**  (true)

Continuous factors multiply, and multiplication commutes:

$$e^{0.12}e^{0.40}=e^{0.52}=e^{0.40}e^{0.12}$$

The year-7 revenue depends on the total exponent, not on which phase came first, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 37,
    solution_overview: `A logistics firm's $\\$1,800,000$ revenue base grows continuously at $10\\%$ for four years, then at $4\\%$ for three more years.

$$S_0=1{,}800{,}000,\\qquad r_1=0.10,\\ t_1=4,\\qquad r_2=0.04,\\ t_2=3$$

The two phases multiply, so the exponents add:

$$S(t_1+t_2)=S_0 e^{r_1 t_1+r_2 t_2},\\qquad r_{\\mathrm{eff}}=\\frac{r_1 t_1+r_2 t_2}{t_1+t_2}$$`,
  },
  {
    id: `math-11-38`,
    case_id: `MATH 11.38`,
    title: `Reverse-Engineering a Crane's Implied Depreciation Rate for a Construction Equipment Reseller`,
    subsection: `11.2`,
    context: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.`,
    statements: [
      `Solving $v_0 \\times e^{-\\delta t} = v(t)$ for δ gives δ = ln(\\frac{v(t)}{v_0})/t.`,
      `The implied depreciation rate for the first crane is approximately 16.28% per year.`,
      `A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.`,
      `The first crane retains more of its value after 6 years than the second crane.`,
      `If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) Solving $v_0 \\times e^{-\\delta t} = v(t)$ for δ gives δ = ln(\\frac{v(t)}{v_0})/t.**  (false)

Depreciation shrinks value, so the ratio inside the log must be $v_0/v(t)$, not the reciprocal:

$$\\delta=\\frac{\\ln(v_0/v(t))}{t}=\\frac{\\ln(85{,}000/32{,}000)}{6}$$

The displayed formula $\\ln(v(t)/v_0)/t$ would return a negative rate, which describes growth rather than a write-down, so the statement is False.`,
      `**B) The implied depreciation rate for the first crane is approximately 16.28% per year.**  (true)

The same inversion with the policy values is

$$\\delta=\\frac{\\ln(85{,}000/32{,}000)}{6}=\\frac{\\ln 2.65625}{6}$$

$$\\delta\\approx\\frac{0.976915}{6}=0.162819\\approx 16.28\\%$$

That matches the claimed $16.28\\%$, so the statement is True.`,
      `**C) A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.**  (false)

The second crane depreciates at a known $15\\%$ for six years:

$$v(6)=85{,}000\\times e^{-0.15\\times 6}=85{,}000\\times e^{-0.90}$$

$$e^{-0.90}\\approx 0.406570,\\qquad v(6)\\approx 34{,}558.42$$

The claim is $\\$36,000.00$, about $\\$1,442$ too high, so the statement is False.`,
      `**D) The first crane retains more of its value after 6 years than the second crane.**  (false)

The first crane is written down to $\\$32,000$ while the second retains about $\\$34,558$. Then

$$32{,}000<34{,}558$$

The slower $15\\%$ rate keeps more value. Ranking by which crane had the higher implied rate would reverse this, so the statement is False.`,
      `**E) If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.**  (false)

Holding more value means a gentler rate. A $\\$40,000$ target over the same six years gives

$$\\delta=\\frac{\\ln(85{,}000/40{,}000)}{6}=\\frac{\\ln 2.125}{6}\\approx 0.12563\\approx 12.56\\%$$

Then

$$12.56\\%<16.28\\%$$

A higher remaining value over the same horizon cannot imply a faster write-down, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 38,
    solution_overview: `A crane is valued at $\\$85,000$ today and must be written down to $\\$32,000$ after six years of continuous depreciation. A second identical crane depreciates at a known $15\\%$.

$$v_0=85{,}000,\\qquad v(6)=32{,}000,\\qquad t=6$$

The implied continuous depreciation rate is

$$\\delta=\\frac{\\ln(v_0/v(t))}{t}$$`,
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

Continuous doubling is $\\ln 2$ over the rate:

$$t_{2}=\\frac{\\ln 2}{0.065}$$

$$t_{2}\\approx\\frac{0.693147}{0.065}\\approx 10.66$$

That matches the claimed $10.66$ years, so the statement is True.`,
      `**B) The tripling time at 6.5% is approximately 16.90 years.**  (true)

Tripling swaps in $\\ln 3$:

$$t_{3}=\\frac{\\ln 3}{0.065}$$

$$t_{3}\\approx\\frac{1.098612}{0.065}\\approx 16.90$$

That matches the claimed $16.90$ years, so the statement is True.`,
      `**C) The quadrupling time at 6.5% is approximately 21.33 years, and this is exactly equal to twice the doubling time.**  (true)

Quadrupling is two doublings because $\\ln 4=2\\ln 2$:

$$t_{4}=\\frac{\\ln 4}{0.065}\\approx 21.33$$

$$2\\times t_{2}=2\\times 10.66=21.32$$

The quadrupling time is twice the doubling time, so the statement is True.`,
      `**D) At the quadrupling time, the fund's value is exactly \\$48,000.00.**  (true)

Four times the $\\$12,000$ deposit is

$$12{,}000\\times 4=48{,}000.00$$

By definition of quadrupling time, that is the balance at $t\\approx 21.33$ years, so the statement is True.`,
      `**E) The tripling time must be exactly 1.5 times the doubling time.**  (false)

Times scale with logarithms, and $\\ln 3/\\ln 2$ is not $1.5$:

$$\\frac{\\ln 3}{\\ln 2}\\approx 1.585$$

$$1.5\\times 10.66=15.99$$

The recovered tripling time was $16.90$ years, not $15.99$. Linear scaling of the multiple does not linearly scale the wait, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 39,
    solution_overview: `An impact fund places $\\$12,000$ in a continuously compounded account at $6.5\\%$. The trustees want the times to double, triple, and quadruple that deposit.

$$S_0=12{,}000,\\qquad r=0.065$$

Reaching a multiple $M$ of the deposit takes

$$t=\\frac{\\ln M}{r}$$`,
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

Asset A grows continuously at $6\\%$ for five years:

$$A(5)=150{,}000\\times e^{0.30}$$

$$e^{0.30}\\approx 1.349859,\\qquad A(5)\\approx 202{,}478.82$$

That is the claimed five-year value, so the statement is True.`,
      `**B) Asset B's value after 5 years is approximately \\$140,278.19.**  (true)

Asset B depreciates continuously at $9\\%$ for five years:

$$B(5)=220{,}000\\times e^{-0.45}$$

$$e^{-0.45}\\approx 0.637628,\\qquad B(5)\\approx 140{,}278.19$$

That is the claimed five-year value, so the statement is True.`,
      `**C) Asset C's value after 5 years is approximately \\$130,000.00.**  (false)

Asset C chains two phases whose exponents add to $0.30$:

$$C(5)=100{,}000\\times e^{0.24}\\times e^{0.06}=100{,}000\\times e^{0.30}$$

$$C(5)\\approx 134{,}985.88$$

The claim is $\\$130,000.00$, about $\\$4,986$ too low, so the statement is False.`,
      `**D) The combined portfolio value after 5 years is less than the sum of the three original principals.**  (false)

The three terminal values add as ordinary nominal amounts:

$$202{,}478.82+140{,}278.19+134{,}985.88=477{,}742.89$$

The three original principals sum to $150{,}000+220{,}000+100{,}000=470{,}000$. Then

$$477{,}742.89>470{,}000$$

Gains on A and C outweigh B's depreciation, so the portfolio ends above the starting total, so the statement is False.`,
      `**E) If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.**  (true)

Flipping the sign on B's exponent turns decay into growth of the same $9\\%$ magnitude:

$$B(5)'=220{,}000\\times e^{0.45}$$

$$e^{0.45}\\approx 1.568312,\\qquad B(5)'\\approx 345{,}028.68$$

Then

$$345{,}028.68>340{,}000$$

The same $9\\%$ magnitude that left about $\\$140,278$ as decay leaves about $\\$345,029$ as growth, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 40,
    solution_overview: `A family office holds three assets for five years. Asset A is a $\\$150,000$ equity stake growing continuously at $6\\%$. Asset B is $\\$220,000$ of warehouse machinery depreciating continuously at $9\\%$. Asset C is a $\\$100,000$ licence that grows at $8\\%$ for three years, then at $3\\%$ for two years.

$$A_0=150{,}000,\\ r_A=0.06,\\qquad B_0=220{,}000,\\ \\delta_B=0.09,\\qquad C_0=100{,}000$$

The three terminal values, added as ordinary nominal amounts, are

$$A(5)=A_0 e^{r_A t},\\qquad B(5)=B_0 e^{-\\delta_B t},\\qquad C(5)=C_0 e^{r_1\\cdot 3}e^{r_2\\cdot 2}$$`,
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

A one-year wait at a $5\\%$ annual rate is the reciprocal of the growth factor $1+r$:

$$(1+r)^{-1}=\\frac{1}{1.05}$$

$$\\frac{1}{1.05}\\approx 0.9524$$

That is the claimed factor, so the statement is True.`,
      `**B) The PDV of the \\$8,000 bonus is approximately \\$7,619.05.**  (true)

Present value multiplies the future bonus by the one-year discount factor:

$$PDV=\\frac{K}{1+r}=\\frac{8{,}000}{1.05}$$

$$PDV\\approx 7{,}619.05$$

That is the claimed present value, so the statement is True.`,
      `**C) If the interest rate were 10% instead of 5%, the PDV of the \\$8,000 bonus would be higher than its value under the original 5% rate.**  (false)

A higher rate shrinks the discount factor. At $r=0.10$:

$$PDV=\\frac{8{,}000}{1.10}$$

$$PDV\\approx 7{,}272.73$$

At the original $5\\%$ rate the same bonus is worth $\\frac{8{,}000}{1.05}\\approx 7{,}619.05$. Then

$$7{,}272.73<7{,}619.05$$

Waiting is more expensive when alternative investments pay more, so the statement is False.`,
      `**D) The difference between the \\$8,000 future bonus and its present value is approximately \\$423.81.**  (false)

Discount the bonus for one year at $5\\%$:

$$PDV=\\frac{8{,}000}{1.05}\\approx 7{,}619.05$$

The cost of waiting is face value minus that present value:

$$8{,}000-7{,}619.05=380.95$$

The claimed $\\$423.81$ exceeds this gap by $\\$42.86$, so the statement is False.`,
      `**E) If the interest rate were 0% per year, the present value of the \\$8,000 bonus would be exactly \\$7,500.**  (false)

A zero rate leaves the discount factor at $1$:

$$PDV=8{,}000\\times(1.00)^{-1}=8{,}000$$

The claimed $\\$7{,}500$ is $\\$500$ too low, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 41,
    solution_overview: `Ms. Kettering is promised a $\\$8{,}000$ performance bonus in one year. The prevailing interest rate is $5\\%$ per year, compounded annually.

$$K=8{,}000,\\qquad r=0.05,\\qquad t=1$$

A single future payment has present discounted value

$$PDV=K(1+r)^{-t}$$`,
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

Three years of continuous $6\\%$ pack into the exponent $rt$:

$$rt=0.06\\times 3=0.18$$

The matching discount factor is

$$e^{-0.18}\\approx 0.8353$$

That is the claimed factor, so the statement is True.`,
      `**B) The PDV of the \\$12,000 payment is approximately \\$10,023.24.**  (true)

Continuous present value multiplies the milestone by $e^{-rt}$:

$$PDV=12{,}000\\times e^{-0.18}$$

$$e^{-0.18}\\approx 0.835270,\\qquad PDV\\approx 10{,}023.24$$

That is the claimed present value, so the statement is True.`,
      `**C) The present value computed with continuous compounding is greater than the present value computed with annual compounding at the same 6% rate over the same 3 years.**  (false)

Continuous compounding grows money faster, so it discounts a future sum harder. The continuous value is

$$PDV_{\\mathrm{cont}}=12{,}000e^{-0.18}\\approx 10{,}023.24$$

Under annual compounding:

$$PDV_{\\mathrm{ann}}=\\frac{12{,}000}{(1.06)^{3}}\\approx 10{,}075.43$$

Then

$$10{,}023.24<10{,}075.43$$

The continuous present value is the smaller of the two, so the statement is False.`,
      `**D) The annual-compounding PDV exceeds the continuous-compounding PDV by approximately \\$60.00.**  (false)

The two clocks give $\\$10{,}075.43$ annually and $\\$10{,}023.24$ continuously. Their gap is

$$10{,}075.43-10{,}023.24=52.19$$

The claimed $\\$60.00$ overstates that difference by about $\\$7.81$, so the statement is False.`,
      `**E) If the payment were instead due in 6 years rather than 3, its present value would be less than the present value found for the original 3-year horizon.**  (true)

Doubling the wait doubles the exponent to $0.36$:

$$PDV_{6}=12{,}000e^{-0.36}$$

$$e^{-0.36}\\approx 0.6977,\\qquad PDV_{6}\\approx 8{,}372.12$$

The three-year value was about $\\$10{,}023$. Then

$$8{,}372.12<10{,}023.24$$

A later payment is worth strictly less today at a positive rate, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 42,
    solution_overview: `A consultant will receive a $\\$12{,}000$ milestone in $3$ years. The client's finance department discounts continuously at $6\\%$ per year.

$$K=12{,}000,\\qquad r=0.06,\\qquad t=3$$

Continuous present value is

$$PDV=Ke^{-rt}$$

Annual compounding at the same quote would instead use

$$PDV=K(1+r)^{-t}$$`,
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

Eight years of annual $7\\%$ invert the growth factor $(1.07)^{8}$:

$$(1.07)^{8}\\approx 1.718186$$

$$(1.07)^{-8}\\approx 0.5820$$

That is the claimed annual factor, so the statement is True.`,
      `**B) The present value under annual compounding is approximately \\$26,190.41.**  (true)

Apply the annual discount factor $(1.07)^{-8}$ to the escrowed proceeds:

$$PDV_{\\mathrm{ann}}=45{,}000\\times(1.07)^{-8}$$

$$PDV_{\\mathrm{ann}}\\approx 45{,}000\\times 0.5820\\approx 26{,}190.41$$

That is the claimed annual present value, so the statement is True.`,
      `**C) The present value under continuous compounding is approximately \\$24,900.00.**  (false)

Continuous discounting uses the exponent $rt=0.07\\times 8=0.56$:

$$PDV_{\\mathrm{cont}}=45{,}000e^{-0.56}$$

$$e^{-0.56}\\approx 0.5712,\\qquad PDV_{\\mathrm{cont}}\\approx 25{,}704.41$$

The claimed $\\$24{,}900$ understates this by about $\\$804$, so the statement is False.`,
      `**D) The annual-compounding present value exceeds the continuous-compounding present value by approximately \\$650.00.**  (false)

Annual compounding gave about $\\$26{,}190.41$ and continuous compounding about $\\$25{,}704.41$. The gap is

$$26{,}190.41-25{,}704.41=486.00$$

The claimed $\\$650$ overstates that spread by $\\$164$, so the statement is False.`,
      `**E) If the interest rate were 0% per year, both compounding methods would give an identical present value of exactly \\$40,000.**  (false)

At $r=0$ both discount factors collapse to $1$:

$$(1+0)^{-8}=1,\\qquad e^{0}=1$$

$$PDV=45{,}000$$

Both methods return the full $\\$45{,}000$, not $\\$40{,}000$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 43,
    solution_overview: `A landlord is due $\\$45{,}000$ in $8$ years. The applicable annual rate is $7\\%$. Present value is needed under both annual and continuous compounding.

$$K=45{,}000,\\qquad r=0.07,\\qquad t=8$$

Annual compounding uses

$$PDV=K(1+r)^{-t}$$

Continuous compounding uses

$$PDV=Ke^{-rt}$$`,
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

Five years of continuous $4.5\\%$ pack into the exponent $rt$:

$$rt=0.045\\times 5=0.225$$

$$e^{-0.225}\\approx 0.7985$$

The claimed $0.8125$ sits about $0.014$ too high, so the statement is False.`,
      `**B) The practice must deposit approximately \\$119,777.40 today to reach its \\$150,000 goal in 5 years.**  (true)

The required deposit is the target times $e^{-0.225}$:

$$A=150{,}000e^{-0.225}$$

$$e^{-0.225}\\approx 0.7985,\\qquad A\\approx 119{,}777.43$$

That matches the claimed opening deposit, so the statement is True.`,
      `**C) If the practice deposited only \\$110,000 today instead, it would still reach the \\$150,000 goal after 5 years at this rate.**  (false)

Grow the trial deposit forward by the reciprocal factor $e^{0.225}$:

$$e^{0.225}\\approx 1.2523$$

$$110{,}000\\times 1.2523\\approx 137{,}755$$

That balance sits about $\\$12{,}245$ short of $\\$150{,}000$, so the statement is False.`,
      `**D) If the bank instead compounded the same 4.5% nominal rate annually rather than continuously, the required deposit today would be lower than the deposit required under continuous compounding.**  (false)

Annual interest is credited only once a year, so a larger opening balance is needed. The annual-compounding deposit is

$$A_{\\mathrm{ann}}=\\frac{150{,}000}{(1.045)^{5}}$$

$$(1.045)^{5}\\approx 1.246182,\\qquad A_{\\mathrm{ann}}\\approx 120{,}367.66$$

That sits about $\\$590$ above the continuous $\\$119{,}777$, not below it, so the statement is False.`,
      `**E) Doubling the time horizon to 10 years would require depositing exactly half of the amount required for the original 5-year horizon today.**  (false)

Doubling the wait doubles the exponent to $0.45$:

$$A_{10}=150{,}000e^{-0.45}$$

$$e^{-0.45}\\approx 0.6376,\\qquad A_{10}\\approx 95{,}644$$

Half of the five-year deposit is about $\\$59{,}889$. Then

$$95{,}644\\ne 59{,}889$$

Exponential discounting does not halve when time doubles, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 44,
    solution_overview: `A dental practice wants $\\$150{,}000$ in $5$ years. Its dedicated account earns a continuous annual rate of $4.5\\%$.

$$K=150{,}000,\\qquad r=0.045,\\qquad t=5$$

The deposit required today is the continuously discounted target:

$$A=Ke^{-rt}$$

Annual compounding at the same nominal quote would instead use

$$A=K(1+r)^{-t}$$`,
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

The note must grow from the purchase price to the payoff:

$$\\frac{K}{PDV}=\\frac{25{,}000}{18{,}500}$$

$$\\frac{25{,}000}{18{,}500}\\approx 1.3514$$

That is the claimed multiple, so the statement is True.`,
      `**B) The implied maturity time, assuming annual compounding, is approximately 5.17 years.**  (true)

Annual compounding solves $(1.06)^{t}=1.3514$ by taking logarithms:

$$t=\\frac{\\ln 1.3514}{\\ln 1.06}$$

$$\\ln 1.3514\\approx 0.3011,\\qquad \\ln 1.06\\approx 0.05827$$

$$t\\approx\\frac{0.3011}{0.05827}\\approx 5.17$$

That is the claimed wait, so the statement is True.`,
      `**C) If the purchase price had instead been \\$20,000 for the same \\$25,000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.**  (false)

A higher price shrinks the required multiple to $1.25$:

$$t=\\frac{\\ln 1.25}{\\ln 1.06}$$

$$\\ln 1.25\\approx 0.2231,\\qquad t\\approx\\frac{0.2231}{0.05827}\\approx 3.83$$

That is about $1.34$ years shorter than $5.17$, not longer, so the statement is False.`,
      `**D) If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.**  (false)

Continuous inversion divides the same logarithm by $r$ itself:

$$t=\\frac{\\ln 1.3514}{0.06}\\approx\\frac{0.3011}{0.06}$$

$$t\\approx 5.02$$

The claimed $5.45$ years overstates this by about $0.43$ years, so the statement is False.`,
      `**E) The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.**  (false)

Continuous compounding produced $t\\approx 5.02$ years. Annual compounding produced $t\\approx 5.17$ years. Then

$$5.02<5.17$$

Continuous credits reach a target slightly sooner at the same quote, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 45,
    solution_overview: `An investor pays $\\$18{,}500$ today for a note that pays $\\$25{,}000$ at maturity. The market rate is $6\\%$ per year.

$$PDV=18{,}500,\\qquad K=25{,}000,\\qquad r=0.06$$

The unknown is the maturity time $t$. Annual compounding inverts as

$$t=\\frac{\\ln(K/PDV)}{\\ln(1+r)}$$

Continuous compounding inverts as

$$t=\\frac{\\ln(K/PDV)}{r}$$`,
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

The price over the payoff is the discount factor:

$$\\frac{PDV}{K}=\\frac{27{,}000}{60{,}000}=0.45$$

That factor is exact, so the statement is True.`,
      `**B) The implied continuous discount rate is approximately 6.65% per year.**  (true)

Inverting $e^{-12r}=0.45$ recovers the rate:

$$r=-\\frac{\\ln 0.45}{12}$$

$$\\ln 0.45\\approx -0.79851,\\qquad r\\approx\\frac{0.79851}{12}\\approx 0.0665$$

That is about $6.65\\%$ per year, so the statement is True.`,
      `**C) At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40,249.20.**  (true)

Halving the horizon halves the exponent. With $r\\approx 0.06654$:

$$PDV_{6}=60{,}000e^{-0.06654\\times 6}$$

$$e^{-0.3992}\\approx 0.6708,\\qquad PDV_{6}\\approx 40{,}249.22$$

That matches the claimed six-year value, so the statement is True.`,
      `**D) If the purchase price had instead been \\$30,000 for the same \\$60,000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27,000 price.**  (false)

A higher price means less discounting. The new factor is $0.5$:

$$r=-\\frac{\\ln 0.5}{12}=\\frac{0.693147}{12}\\approx 0.0578$$

That is about $5.78\\%$, which sits below the original $6.65\\%$, so the statement is False.`,
      `**E) Doubling the horizon to 24 years would require the rate to be approximately 3.33%.**  (true)

Keep the factor $0.45$ but spread it over twice the years:

$$r=-\\frac{\\ln 0.45}{24}\\approx\\frac{0.79851}{24}\\approx 0.0333$$

That is about $3.33\\%$, half of $6.65\\%$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 46,
    solution_overview: `A collector pays $\\$27{,}000$ today for a guaranteed $\\$60{,}000$ painting sale in $12$ years. Discounting is continuous.

$$PDV=27{,}000,\\qquad K=60{,}000,\\qquad t=12$$

The unknown is the continuous annual rate $r$ in

$$PDV=Ke^{-rt},\\qquad r=-\\frac{\\ln(PDV/K)}{t}$$`,
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

Two years of annual $5\\%$ invert $(1.05)^{2}=1.1025$:

$$PDV_{1}=\\frac{40{,}000}{1.1025}$$

$$PDV_{1}\\approx 36{,}281.18$$

That is the claimed two-year present value, so the statement is True.`,
      `**B) The present value of the \\$65,000 payment is approximately \\$50,930.87.**  (true)

Five years invert $(1.05)^{5}\\approx 1.276282$:

$$PDV_{2}=\\frac{65{,}000}{(1.05)^{5}}$$

$$PDV_{2}\\approx 50{,}929.20$$

That matches the claimed five-year present value, so the statement is True.`,
      `**C) The combined present value of both payments together is approximately \\$87,212.05.**  (true)

Add the two discounted payments:

$$PDV=36{,}281.18+50{,}929.20$$

$$PDV\\approx 87{,}210.38$$

That matches the claimed combined figure, so the statement is True.`,
      `**D) The \\$65,000 payment has a smaller present value than the \\$40,000 payment.**  (false)

The five-year piece is about $\\$50{,}929$ and the two-year piece is about $\\$36{,}281$. Then

$$50{,}929>36{,}281$$

The later but larger payment still contributes more today, so the statement is False.`,
      `**E) If both payments were instead discounted continuously at the same 5% rate, their combined present value would be less than \\$86,000.**  (false)

Continuous discounting uses $e^{-rt}$:

$$40{,}000e^{-0.10}\\approx 36{,}193.50$$

$$65{,}000e^{-0.25}\\approx 50{,}622.05$$

$$PDV\\approx 86{,}815.55$$

That still clears $\\$86{,}000$ by about $\\$816$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 47,
    solution_overview: `A software company is due $\\$40{,}000$ in $2$ years and $\\$65{,}000$ in $5$ years. Both payments are discounted at $5\\%$ per year, compounded annually.

$$K_{1}=40{,}000,\\quad t_{1}=2,\\qquad K_{2}=65{,}000,\\quad t_{2}=5,\\qquad r=0.05$$

Each payment has present value $K(1+r)^{-t}$. The combined value is their sum. For comparison, continuous discounting would use $Ke^{-rt}$.`,
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

Three years of annual $6\\%$ invert $(1.06)^{3}$:

$$(1.06)^{3}\\approx 1.191016$$

$$PDV_{B}=\\frac{25{,}500}{1.191016}\\approx 21{,}410.29$$

That is the claimed present value of the deferred option, so the statement is True.`,
      `**B) Option A has a higher present value than Option B at the 6% rate.**  (true)

Option A is worth $\\$22{,}000$ today. Option B is worth about $\\$21{,}410$. Then

$$22{,}000>21{,}410$$

The immediate cash is larger on a present-value basis, so the statement is True.`,
      `**C) If the discount rate were 3% instead of 6%, the present value of Option B would be approximately \\$22,780.00.**  (false)

A lower rate raises present value. At $r=0.03$:

$$(1.03)^{3}\\approx 1.092727$$

$$PDV_{B}=\\frac{25{,}500}{1.092727}\\approx 23{,}336.11$$

The claimed $\\$22{,}780$ understates this by about $\\$556$, so the statement is False.`,
      `**D) The present value of Option B exceeds \\$22,000 regardless of which interest rate is used to discount it.**  (false)

At the base $6\\%$ rate, Option B is already about $\\$21{,}410$, which sits below $\\$22{,}000$:

$$21{,}410<22{,}000$$

Present value of a fixed future sum falls as the rate rises, so the claim fails as soon as the rate is $6\\%$ or higher, so the statement is False.`,
      `**E) At exactly a 5% discount rate, the present value of Option B would be approximately \\$23,500.00.**  (false)

At $r=0.05$:

$$(1.05)^{3}=1.157625$$

$$PDV_{B}=\\frac{25{,}500}{1.157625}\\approx 22{,}027.86$$

The claimed $\\$23{,}500$ overstates this by about $\\$1{,}472$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 48,
    solution_overview: `Option A pays $\\$22{,}000$ immediately. Option B pays $\\$25{,}500$ in $3$ years. The base annual discount rate is $6\\%$.

$$A=22{,}000,\\qquad K_{B}=25{,}500,\\qquad t_{B}=3,\\qquad r=0.06$$

A future amount discounted annually has present value

$$PDV=K(1+r)^{-t}$$

An immediate payment has present value equal to its face value.`,
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

Differentiate the timber-value function:

$$P'(t)=10{,}000(t+2)$$

Set $P'(t)=rP(t)$:

$$10{,}000(t+2)=0.08\\times 5{,}000(t+2)^{2}$$

$$10{,}000=400(t+2)$$

$$t+2=25,\\qquad t^{*}=23$$

That is the claimed harvest date, so the statement is True.`,
      `**B) The optimal harvest time is found by setting $P'(t^*)$ equal to $P(t^*)$ divided by r.**  (false)

The first-order condition is growth equal to the financing cost:

$$P'(t^{*})=rP(t^{*})$$

So $P'(t^{*})$ equals $P(t^{*})$ times $r$, not divided by $r$. Dividing by $r$ would invert the rate and push the harvest far too late, so the statement is False.`,
      `**C) At the optimal time, the present value of the stand is approximately \\$623,000.**  (false)

At $t^{*}=23$, the stand is worth $P(23)=5{,}000\\times 25^{2}=3{,}125{,}000$. Discounting continuously:

$$f(23)=3{,}125{,}000e^{-1.84}$$

$$e^{-1.84}\\approx 0.15882,\\qquad f(23)\\approx 496{,}304$$

The claimed $\\$623{,}000$ overstates this by about $\\$127{,}000$, so the statement is False.`,
      `**D) If the interest rate were higher than 8% instead, the optimal cutting time $t^*$ would be later than the original optimal time.**  (false)

For this family the first-order condition simplifies to $t^{*}=\\frac{2}{r}-2$. A higher $r$ makes waiting more expensive and lowers $t^{*}$. The harvest comes forward, not later, so the statement is False.`,
      `**E) Cutting the stand at t = 25 years instead of at the optimal time would produce a higher present value than cutting at the optimal time.**  (false)

By construction $t^{*}=23$ maximizes $f(t)$. At $t=25$:

$$f(25)=5{,}000\\times 27^{2}\\times e^{-2}$$

$$f(25)=3{,}645{,}000\\times 0.135335\\approx 493{,}297$$

That sits about $\\$3{,}007$ below $f(23)\\approx 496{,}304$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 49,
    solution_overview: `A timber stand has market value $P(t)=5{,}000(t+2)^{2}$ dollars. The continuous annual discount rate is $r=0.08$. Harvesting at time $t$ has present value

$$f(t)=P(t)e^{-rt}$$

An interior optimum $t^{*}$ satisfies the first-order condition

$$P'(t^{*})=rP(t^{*})$$`,
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

Four years of continuous $5.5\\%$ pack into the exponent $0.22$:

$$PDV_{1}=18{,}000e^{-0.22}$$

$$e^{-0.22}\\approx 0.8025,\\qquad PDV_{1}\\approx 14{,}445.34$$

That is the claimed four-year present value, so the statement is True.`,
      `**B) The present value of the \\$30,000 obligation is approximately \\$18,287.13.**  (true)

Nine years pack into the exponent $0.495$:

$$PDV_{2}=30{,}000e^{-0.495}$$

$$e^{-0.495}\\approx 0.6096,\\qquad PDV_{2}\\approx 18{,}287.13$$

That is the claimed nine-year present value, so the statement is True.`,
      `**C) The combined lump-sum payment the winery should make today is approximately \\$32,732.47.**  (true)

Add the two discounted invoices:

$$PDV=14{,}445.34+18{,}287.13$$

$$PDV=32{,}732.47$$

That is the claimed settlement, so the statement is True.`,
      `**D) The \\$30,000 obligation contributes a smaller present value than the \\$18,000 obligation.**  (false)

The later invoice is worth about $\\$18{,}287$ today and the nearer invoice about $\\$14{,}445$. Then

$$18{,}287>14{,}445$$

The larger face amount still contributes more after nine years of discounting, so the statement is False.`,
      `**E) If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would be exactly \\$48,000.**  (true)

A zero rate leaves both factors at $1$:

$$e^{0}=1$$

$$PDV=18{,}000+30{,}000=48{,}000$$

Waiting is free when money does not grow, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 50,
    solution_overview: `A winery owes $\\$18{,}000$ in $4$ years and $\\$30{,}000$ in $9$ years. Both obligations are discounted continuously at $5.5\\%$ per year.

$$K_{1}=18{,}000,\\quad t_{1}=4,\\qquad K_{2}=30{,}000,\\quad t_{2}=9,\\qquad r=0.055$$

Each obligation has present value $Ke^{-rt}$. The settlement lump sum is their sum.`,
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

Seven years of continuous $5\\%$ pack into the exponent $0.35$:

$$PDV=50{,}000e^{-0.35}$$

$$e^{-0.35}\\approx 0.7047,\\qquad PDV\\approx 35{,}234.40$$

The claimed $\\$33{,}100$ understates this by about $\\$2{,}134$, so the statement is False.`,
      `**B) The equivalent nominal annual rate that yields the identical present value is exactly 5.00%.**  (false)

Matching continuous discounting with annual compounding requires $1+r_{a}=e^{r}$:

$$1+r_{a}=e^{0.05}\\approx 1.051271$$

$$r_{a}\\approx 0.0513=5.13\\%$$

The two clocks agree on present value only after that conversion, not at a shared $5.00\\%$ quote, so the statement is False.`,
      `**C) The equivalent annual rate is approximately 5.87% per year.**  (false)

The one-year growth of the continuous quote is

$$r_{a}=e^{0.05}-1\\approx 0.0513=5.13\\%$$

The claimed $5.87\\%$ overstates this by $0.74$ percentage points, so the statement is False.`,
      `**D) Using the correctly derived equivalent annual rate for a 3-year horizon instead of 7 years, a \\$50,000 payment would have a present value of approximately \\$43,035.40.**  (true)

The equivalent rate $r_{a}\\approx 5.13\\%$ does not depend on the horizon. At three years the continuous clock is

$$PDV=50{,}000e^{-0.15}\\approx 43{,}035.40$$

The annual clock $(1.051271)^{-3}$ produces the same figure, so the statement is True.`,
      `**E) The gap between the correctly derived equivalent annual rate and the 5% continuous rate is more than 1.00 percentage point.**  (false)

The conversion gave $r_{a}\\approx 5.13\\%$. The gap against the continuous quote is

$$5.13\\%-5.00\\%=0.13$$

That is $0.13$ percentage points, which is less than $1.00$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 51,
    solution_overview: `A trust payment of $\\$50{,}000$ is due in $7$ years. The manager currently discounts it continuously at $5\\%$ per year and wants the equivalent annually compounded rate that produces the same present value.

$$K=50{,}000,\\qquad r=0.05,\\qquad t=7$$

Continuous present value is $PDV=Ke^{-rt}$. Matching an annually compounded rate $r_{a}$ requires

$$(1+r_{a})^{-t}=e^{-rt},\\qquad 1+r_{a}=e^{r}$$

That equivalent rate does not depend on the horizon $t$.`,
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

Three years of annual $6\\%$ invert $(1.06)^{3}\\approx 1.191016$:

$$PV_{1}=\\frac{42{,}000}{(1.06)^{3}}$$

$$PV_{1}\\approx 35{,}264.01$$

That is the claimed present value of the known receivable, so the statement is True.`,
      `**B) The present value still required from the second receivable is approximately \\$64,735.99.**  (true)

Discount the known $\\$42{,}000$ receivable for three years at $6\\%$:

$$PV_{1}=\\frac{42{,}000}{(1.06)^{3}}\\approx 35{,}264.01$$

The covenant still needs

$$PV_{2}=100{,}000-35{,}264.01=64{,}735.99$$

That residual is what the second contract must fill today, so the statement is True.`,
      `**C) The required face amount of the second receivable, due in 6 years, is approximately \\$91,829.24.**  (true)

The first receivable contributes $\\frac{42{,}000}{(1.06)^{3}}\\approx 35{,}264.01$ today, leaving $64{,}735.99$ of present value to find. Grow that amount for six years:

$$(1.06)^{6}\\approx 1.418519$$

$$K_{2}=64{,}735.99\\times 1.418519\\approx 91{,}829.24$$

That is the claimed six-year face amount, so the statement is True.`,
      `**D) If the second receivable were instead due in 3 years, its required face amount would be larger than the required face amount for the original 6-year due date.**  (false)

After the known receivable is discounted, $64{,}735.99$ of present value is still required. A three-year due date grows that residual only three times:

$$K_{2}=64{,}735.99\\times(1.06)^{3}\\approx 77{,}101.60$$

The six-year face amount was $64{,}735.99\\times(1.06)^{6}\\approx 91{,}829$. Then

$$77{,}102<91{,}829$$

A nearer due date needs less face value, so the statement is False.`,
      `**E) Raising the discount rate from 6% to 8%, with the second receivable still due in 6 years, would require a face amount of approximately \\$102,727.88.**  (true)

Keep the same $\\$64{,}735.99$ present-value gap and accumulate it at $8\\%$ instead of $6\\%$:

$$(1.08)^{6}\\approx 1.586874$$

$$K_{2}=64{,}735.99\\times 1.586874\\approx 102{,}727.88$$

A steeper discount requires more face value, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 52,
    solution_overview: `A logistics company must show a combined present value of $\\$100{,}000$. It already holds a $\\$42{,}000$ receivable due in $3$ years and is negotiating a second receivable due in $6$ years. The annual discount rate is $6\\%$.

$$K_{1}=42{,}000,\\quad t_{1}=3,\\qquad t_{2}=6,\\qquad PDV_{\\mathrm{target}}=100{,}000,\\qquad r=0.06$$

Annual present value is $K(1+r)^{-t}$. After the first receivable is discounted, the unknown face amount of the second is

$$K_{2}=(PDV_{\\mathrm{target}}-PV_{1})(1+r)^{t_{2}}$$`,
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

Four years of continuous $6.5\\%$ pack into the exponent $0.26$:

$$rt=0.065\\times 4=0.26$$

$$e^{-0.26}\\approx 0.7711$$

The claimed $0.8112$ sits about $0.040$ too high, so the statement is False.`,
      `**B) The future payment that makes the firm indifferent between the two options is approximately \\$49,850.75.**  (false)

Indifference divides the immediate cash by the discount factor:

$$K=\\frac{35{,}000}{e^{-0.26}}=35{,}000e^{0.26}$$

$$K\\approx 45{,}392.55$$

The claimed $\\$49{,}850.75$ overstates this by about $\\$4{,}458$, so the statement is False.`,
      `**C) This indifference amount exceeds the immediate \\$35,000 option by more than \\$11,000.**  (false)

The premium over the immediate option is

$$45{,}392.55-35{,}000=10{,}392.55$$

That sits about $\\$607$ short of $\\$11{,}000$, so the statement is False.`,
      `**D) If the firm's opportunity cost of capital were 9% instead of 6.5%, the required indifference payment would remain unchanged from the original 4-year, 6.5% figure.**  (false)

A higher opportunity cost discounts the deferred option more heavily, so a larger future payment is needed. At $r=0.09$:

$$K=35{,}000e^{0.36}\\approx 50{,}166.53$$

That is about $\\$4{,}774$ above the $6.5\\%$ figure of $\\$45{,}393$, so the statement is False.`,
      `**E) If the payment horizon were shortened to 2 years instead of 4, the required indifference payment would be smaller than the original 4-year figure.**  (true)

Less waiting means less interest to make up. At two years:

$$K=35{,}000e^{0.13}\\approx 39{,}858.99$$

That sits below the four-year $\\$45{,}393$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 53,
    solution_overview: `A consulting firm can take $\\$35{,}000$ immediately or a larger payment in $4$ years. The opportunity cost of capital is $6.5\\%$ per year, compounded continuously.

$$PV_{0}=35{,}000,\\qquad r=0.065,\\qquad t=4$$

Indifference requires the future payment $K$ to have the same present value:

$$PV_{0}=Ke^{-rt},\\qquad K=PV_{0}e^{rt}$$`,
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

Market value grows at $5\\%$, so $P'(t)=0.05P(t)$. The interior condition would require

$$0.05P(t^{*})=0.08P(t^{*})$$

which is impossible for $P(t^{*})>0$. The reduced present value $f(t)=40{,}000e^{-0.03t}$ is strictly decreasing, so the maximum is at the boundary $t^{*}=0$, so the statement is True.`,
      `**B) The present value of the batch if sold today (t = 0) is \\$40,000.**  (true)

At $t=0$ there is nothing to discount:

$$f(0)=P(0)=40{,}000$$

That is the whole present value of selling now, so the statement is True.`,
      `**C) The present value of the batch if instead sold in 10 years is approximately \\$29,632.73.**  (true)

Ten years of net decay at $3\\%$ give

$$f(10)=40{,}000e^{-0.30}$$

$$e^{-0.30}\\approx 0.7408,\\qquad f(10)\\approx 29{,}632.73$$

That is the claimed ten-year present value, so the statement is True.`,
      `**D) Because the market value P(t) is increasing over time, waiting to sell always increases the present value of the batch, regardless of the discount rate used.**  (false)

$P(t)$ can rise while $f(t)=P(t)e^{-rt}$ falls. Here the $8\\%$ discount outruns the $5\\%$ growth:

$$f(0)=40{,}000>f(10)\\approx 29{,}632.73$$

Rising market value is not enough when the discount rate is higher, so the statement is False.`,
      `**E) If the discount rate were instead 4%, the optimal policy would again be to sell immediately at $t^* = 0$.**  (false)

At $r=0.04$ the net exponent is positive:

$$f(t)=40{,}000e^{(0.05-0.04)t}=40{,}000e^{0.01t}$$

This is strictly increasing, so waiting always helps and selling immediately would be the worst interior choice, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 54,
    solution_overview: `An aging wine batch has market value $P(t)=40{,}000e^{0.05t}$ dollars. The continuous discount rate is $r=0.08$. Present value of a sale at time $t$ is

$$f(t)=P(t)e^{-rt}=40{,}000e^{-0.03t}$$

An interior optimum would satisfy $P'(t^{*})=rP(t^{*})$.`,
  },
  {
    id: `math-11-55`,
    case_id: `MATH 11.55`,
    title: `Comparative Statics for a Forestry Cooperative's Harvest Timing`,
    subsection: `11.3`,
    context: `A forestry cooperative's analytics team has measured, at the optimal harvest time $t^*$ for one of its timber stands: $P(t^*) = \\$520,000$, $P'(t^*) = \\$46,800$, and $P''(t^*) = \\$3,120$ per year, with a current continuous interest rate of r = 9% per year. The team wants to apply the chapter's comparative-statics formula to find $\\frac{dt^*}{dr}$ and to confirm the second-order condition.`,
    statements: [
      `The data satisfy the optimality condition $P'(t^*) = r P(t^*)$.`,
      `The value of $P''(t^*) - r P'(t^*)$ is -\\$1,092.`,
      `$\\frac{dt^*}{dr}$ is approximately -476.19.`,
      `An increase in the interest rate would lengthen the optimal harvest time $t^*$.`,
      `The second-order condition $P''(t^*) - r P'(t^*) < 0$ is satisfied here.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The data satisfy the optimality condition $P'(t^*) = r P(t^*)$.**  (true)

Multiply the measured value by the current rate:

$$rP(t^{*})=0.09\\times 520{,}000=46{,}800$$

That matches the measured $P'(t^{*})$, so the statement is True.`,
      `**B) The value of $P''(t^*) - r P'(t^*)$ is -\\$1,092.**  (true)

Substitute the measured curvature and slope:

$$P''(t^{*})-rP'(t^{*})=3{,}120-0.09\\times 46{,}800$$

$$=3{,}120-4{,}212=-1{,}092$$

That is the claimed denominator, so the statement is True.`,
      `**C) $\\frac{dt^*}{dr}$ is approximately -476.19.**  (true)

The second-order denominator is $3{,}120-0.09\\times 46{,}800=-1{,}092$. Comparative statics then divide $P(t^{*})$ by that value:

$$\\frac{dt^{*}}{dr}=\\frac{520{,}000}{-1{,}092}\\approx -476.19$$

That is the claimed sensitivity, so the statement is True.`,
      `**D) An increase in the interest rate would lengthen the optimal harvest time $t^*$.**  (false)

The derivative $\\frac{dt^{*}}{dr}\\approx -476$ is negative, so $t^{*}$ moves opposite $r$. A higher rate makes waiting more expensive and brings the harvest forward, so the statement is False.`,
      `**E) The second-order condition $P''(t^*) - r P'(t^*) < 0$ is satisfied here.**  (true)

Substitute the measured curvature and slope:

$$P''(t^{*})-rP'(t^{*})=3{,}120-0.09\\times 46{,}800=-1{,}092$$

$$-1{,}092<0$$

The second-order condition for a maximum holds, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `At an optimal harvest time the timber value and its derivatives are measured as $P(t^{*})=520{,}000$, $P'(t^{*})=46{,}800$, and $P''(t^{*})=3{,}120$, with continuous rate $r=0.09$.

The first-order condition is $P'(t^{*})=rP(t^{*})$. Comparative statics give

$$\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}$$

A present-value maximum requires $P''(t^{*})-rP'(t^{*})<0$.`,
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
      `$\\frac{dt^*}{dr}$ is approximately +246.91.`,
      `If the interest rate were exactly 4.5% instead of 9%, the optimal harvest time would be exactly double the original, at 36.44 years.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The optimal harvest time $t^*$ is approximately 18.22 years.**  (true)

Set growth equal to the financing cost:

$$6{,}000(t+4)=0.09\\times 3{,}000(t+4)^{2}$$

$$6{,}000=270(t+4)$$

$$t+4=\\frac{6{,}000}{270}\\approx 22.22,\\qquad t^{*}\\approx 18.22$$

That is the claimed harvest date, so the statement is True.`,
      `**B) The present value of the orchard's timber at $t^*$ is approximately \\$250,000.00.**  (false)

At $t^{*}\\approx 18.22$, standing timber is $P(t^{*})=3{,}000(22.222)^{2}\\approx 1{,}481{,}481$. Discounting:

$$f(t^{*})=1{,}481{,}481e^{-0.09\\times 18.222}$$

$$e^{-1.64}\\approx 0.1940,\\qquad f(t^{*})\\approx 287{,}378$$

The claimed $\\$250{,}000$ understates this by about $\\$37{,}000$, so the statement is False.`,
      `**C) The second-order quantity $P''(t^*) - r P'(t^*)$ evaluates to +\\$6,000.**  (false)

$P''(t)=6{,}000$ is constant, but $P'(t^{*})=6{,}000\\times 22.222\\approx 133{,}333$, so

$$6{,}000-0.09\\times 133{,}333=6{,}000-12{,}000=-6{,}000$$

The combination is $-6{,}000$, not $+6{,}000$, so the statement is False.`,
      `**D) $\\frac{dt^*}{dr}$ is approximately +246.91.**  (false)

The sensitivity is

$$\\frac{dt^{*}}{dr}=\\frac{1{,}481{,}481}{-6{,}000}\\approx -246.91$$

The size $246.91$ is right, but the sign is negative. A higher rate brings the harvest forward, so the statement is False.`,
      `**E) If the interest rate were exactly 4.5% instead of 9%, the optimal harvest time would be exactly double the original, at 36.44 years.**  (false)

For this family $t^{*}=\\frac{2}{r}-4$. Halving $r$ to $4.5\\%$ gives

$$t^{*}=\\frac{2}{0.045}-4\\approx 40.44$$

That is not $36.44$, and not double the original $18.22$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `An orchard's timber value is $P(t)=3{,}000(t+4)^{2}$ dollars, discounted continuously at $r=0.09$.

$$P'(t)=6{,}000(t+4)$$

An interior harvest date satisfies $P'(t^{*})=rP(t^{*})$. Sensitivity of that date is

$$\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}$$`,
  },
  {
    id: `math-11-57`,
    case_id: `MATH 11.57`,
    title: `Combining a Private-Equity Exit Payment with a Short-Dated Side Payment`,
    subsection: `11.3`,
    context: `A private equity fund expects to receive \\$250,000 from a portfolio-company exit in exactly 2.5 years, plus a smaller side payment of \\$40,000 in 7 months from a separate arrangement. Both amounts are discounted continuously at the fund's required rate of 11% per year, so this task uses $K_1 = \\$250,000$ at $t_1 = 2.5$ and $K_2 = \\$40,000$ at $t_2 = \\frac{7}{12}$, with r = 0.11.`,
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

Two and a half years of continuous $11\\%$ pack into the exponent $0.275$:

$$PV_{1}=250{,}000e^{-0.275}$$

$$e^{-0.275}\\approx 0.7596,\\qquad PV_{1}\\approx 189{,}893.03$$

That is the claimed exit present value, so the statement is True.`,
      `**B) The present value of the \\$40,000 side payment is approximately \\$37,513.95.**  (true)

Seven months is $\\frac{7}{12}$ of a year:

$$rt_{2}=0.11\\times\\frac{7}{12}\\approx 0.06417$$

$$PV_{2}=40{,}000e^{-0.06417}\\approx 37{,}513.95$$

That is the claimed side-payment present value, so the statement is True.`,
      `**C) The combined present value of both payments is approximately \\$230,000.00.**  (false)

Add the two discounted pieces:

$$PDV=189{,}893.03+37{,}513.95$$

$$PDV=227{,}406.98$$

The claimed $\\$230{,}000$ overstates the pair by about $\\$2{,}593$, so the statement is False.`,
      `**D) The \\$40,000 side payment is discounted by more than 10% of its face value.**  (false)

The dollar discount is

$$40{,}000-37{,}513.95=2{,}486.05$$

As a share of face value:

$$\\frac{2{,}486.05}{40{,}000}\\approx 0.062=6.2\\%$$

That is less than $10\\%$, so the statement is False.`,
      `**E) If the discount rate were 0% instead of 11%, the combined present value of both payments would be exactly \\$290,000.**  (true)

A zero rate leaves both factors at $1$:

$$PDV=250{,}000+40{,}000=290{,}000$$

The two dates stop mattering when waiting is free, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 57,
    solution_overview: `A fund expects $\\$250{,}000$ from an exit in $2.5$ years and a $\\$40{,}000$ side payment in $7$ months. Both amounts are discounted continuously at $11\\%$ per year.

$$K_{1}=250{,}000,\\quad t_{1}=2.5,\\qquad K_{2}=40{,}000,\\quad t_{2}=\\frac{7}{12},\\qquad r=0.11$$

Each payment has present value $Ke^{-rt}$. The combined value is their sum.`,
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

The price over the payout is the discount factor:

$$\\frac{PDV}{K}=\\frac{2{,}000{,}000}{3{,}200{,}000}=0.625$$

That factor is exact, so the statement is True.`,
      `**B) The implied continuous discount rate is approximately 10.44% per year.**  (true)

Inverting $e^{-4.5r}=0.625$ recovers the rate:

$$r=-\\frac{\\ln 0.625}{4.5}$$

$$\\ln 0.625\\approx -0.4700,\\qquad r\\approx\\frac{0.4700}{4.5}\\approx 0.1044$$

That is about $10.44\\%$ per year, so the statement is True.`,
      `**C) If the milestone payout were instead \\$3,600,000, the implied discount rate would be higher than the rate implied by the original \\$3,200,000 payout.**  (true)

A larger future payout against the same price means a deeper discount:

$$\\frac{2{,}000{,}000}{3{,}600{,}000}\\approx 0.5556$$

$$r=-\\frac{\\ln 0.5556}{4.5}\\approx 0.1306=13.06\\%$$

That sits above the original $10.44\\%$, so the statement is True.`,
      `**D) If the time to payout were shortened to 3 years instead of 4.5, the implied discount rate would be lower than the rate implied by the original 4.5-year horizon.**  (false)

The same discount packed into fewer years is a steeper annual rate:

$$r=-\\frac{\\ln 0.625}{3}\\approx\\frac{0.4700}{3}\\approx 0.1567=15.67\\%$$

That sits above $10.44\\%$, not below it, so the statement is False.`,
      `**E) Doubling the time horizon to 9 years would require the rate to be approximately 5.22%.**  (true)

Keep the factor $0.625$ but spread it over twice the years:

$$r=-\\frac{\\ln 0.625}{9}\\approx\\frac{0.4700}{9}\\approx 0.0522$$

That is about $5.22\\%$, half of $10.44\\%$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Investors paid $\\$2{,}000{,}000$ today for a guaranteed $\\$3{,}200{,}000$ payout in $4.5$ years if a milestone is met. Discounting is continuous.

$$PDV=2{,}000{,}000,\\qquad K=3{,}200{,}000,\\qquad t=4.5$$

The unknown continuous rate satisfies

$$PDV=Ke^{-rt},\\qquad r=-\\frac{\\ln(PDV/K)}{t}$$`,
  },
  {
    id: `math-11-59`,
    case_id: `MATH 11.59`,
    title: `General Harvest-Timing Formula for a Forestry Consultancy`,
    subsection: `11.3`,
    context: `A forestry consultancy models a class of timber stands with value function $P(t) = A(t + k)^{2}$ for positive constants A and k, discounted continuously at rate r. For one particular stand, $A = \\$1,200$, k = 5, and r = 7.5% per year. The consultancy wants the general optimal-time formula, the specific optimal time, and two comparative-statics checks.`,
    statements: [
      `The general optimal-time formula for this family of functions is $t^* = \\frac{2}{r} - k$.`,
      `Using A = 1,200, k = 5, and r = 7.5%, the optimal harvest time is approximately $t^* = 21.67$ years.`,
      `The present value at $t^*$ is approximately \\$195,500.00.`,
      `If k were increased to 8, the optimal harvest time would be shorter than the original optimal time.`,
      `If the interest rate were doubled to 15%, the optimal harvest time would be more than half of the original optimal time.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The general optimal-time formula for this family of functions is $t^* = \\frac{2}{r} - k$.**  (true)

Substitute $P$ and $P'$ into the first-order condition:

$$2A(t+k)=rA(t+k)^{2}$$

Cancel the positive factor $A(t+k)$:

$$2=r(t+k),\\qquad t^{*}=\\frac{2}{r}-k$$

That is the claimed formula, so the statement is True.`,
      `**B) Using A = 1,200, k = 5, and r = 7.5%, the optimal harvest time is approximately $t^* = 21.67$ years.**  (true)

The scale $A$ drops out of the date. Substituting the rate and shift:

$$t^{*}=\\frac{2}{0.075}-5=26.667-5\\approx 21.67$$

That is the claimed harvest date, so the statement is True.`,
      `**C) The present value at $t^*$ is approximately \\$195,500.00.**  (false)

At $t^{*}\\approx 21.67$, standing timber is $P(t^{*})=1{,}200(26.667)^{2}\\approx 853{,}333$. Discounting:

$$f(t^{*})=853{,}333e^{-0.075\\times 21.667}$$

$$e^{-1.625}\\approx 0.1969,\\qquad f(t^{*})\\approx 168{,}031$$

The claimed $\\$195{,}500$ overstates this by about $\\$27{,}469$, so the statement is False.`,
      `**D) If k were increased to 8, the optimal harvest time would be shorter than the original optimal time.**  (true)

The shift $k$ subtracts from $\\frac{2}{r}$. Raising $k$ to $8$:

$$t^{*}=\\frac{2}{0.075}-8\\approx 18.67$$

That is three years earlier than $21.67$, so the statement is True.`,
      `**E) If the interest rate were doubled to 15%, the optimal harvest time would be more than half of the original optimal time.**  (false)

At $15\\%$:

$$t^{*}=\\frac{2}{0.15}-5\\approx 8.33$$

Half of $21.67$ is about $10.83$. Then

$$8.33<10.83$$

The new date is less than half, not more, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `A class of timber stands has value $P(t)=A(t+k)^{2}$ for positive constants $A$ and $k$, discounted continuously at rate $r$. For one stand, $A=1{,}200$, $k=5$, and $r=0.075$.

$$P'(t)=2A(t+k)$$

An interior optimum satisfies $P'(t^{*})=rP(t^{*})$, which simplifies to the general date

$$t^{*}=\\frac{2}{r}-k$$`,
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

Five years of continuous $8\\%$ pack into the exponent $0.40$:

$$e^{-0.40}\\approx 0.6703$$

That is the claimed five-year factor, so the statement is True.`,
      `**B) The discount factor for the 10-year payment is approximately 0.4493.**  (true)

Ten years double the exponent to $0.80$:

$$e^{-0.80}\\approx 0.4493$$

Squaring the five-year factor confirms the same number, because $t_{2}=2t_{1}$, so the statement is True.`,
      `**C) The present value of the \\$30,000 payment is approximately \\$21,500.00.**  (false)

Apply the five-year factor to the first payment:

$$PV_{1}=30{,}000e^{-0.40}\\approx 30{,}000\\times 0.6703$$

$$PV_{1}\\approx 20{,}109.60$$

The claimed $\\$21{,}500$ overstates this by about $\\$1{,}390$, so the statement is False.`,
      `**D) The present value of the \\$55,000 payment is approximately \\$26,000.00.**  (false)

Apply the ten-year factor to the second payment:

$$PV_{2}=55{,}000e^{-0.80}\\approx 55{,}000\\times 0.4493$$

$$PV_{2}\\approx 24{,}713.09$$

The claimed $\\$26{,}000$ overstates this by about $\\$1{,}287$, so the statement is False.`,
      `**E) The combined present value the investor should pay today for both payments is approximately \\$47,500.00.**  (false)

Add the two discounted payments:

$$PDV=20{,}109.60+24{,}713.09$$

$$PDV\\approx 44{,}822.69$$

The claimed $\\$47{,}500$ overstates what the investor should pay by about $\\$2{,}677$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `A franchise agreement pays $\\$30{,}000$ in $5$ years and $\\$55{,}000$ in $10$ years. Discounting is continuous at $8\\%$ per year. The second horizon is exactly twice the first, so its discount factor is the square of the first.

$$K_{1}=30{,}000,\\quad t_{1}=5,\\qquad K_{2}=55{,}000,\\quad t_{2}=10,\\qquad r=0.08$$

Each payment has present value $Ke^{-rt}$. Because $t_{2}=2t_{1}$,

$$e^{-rt_{2}}=(e^{-rt_{1}})^{2}$$`,
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

Year 2 is one growth step past the opening term:

$$a_{2}=ak=50\\times 1.10$$

$$a_{2}=55.00$$

That is the claimed year-2 revenue, so the statement is True.`,
      `**B) The expected revenue in year 5 is approximately \\$73.21 million.**  (true)

Year 5 carries four growth steps, not five:

$$a_{5}=50\\times(1.10)^{4}$$

$$(1.10)^{4}=1.4641,\\qquad a_{5}=73.205\\approx 73.21$$

That is the claimed year-5 revenue, so the statement is True.`,
      `**C) The total revenue expected over the 5-year period is approximately \\$305.26 million.**  (true)

The finite geometric sum with $k\\ne 1$ is

$$s_{5}=50\\frac{(1.10)^{5}-1}{0.10}$$

$$(1.10)^{5}=1.61051,\\qquad s_{5}=50\\times 6.1051=305.255$$

That is about $\\$305.26$ million, so the statement is True.`,
      `**D) If revenue had instead remained flat at \\$50 million per year for 5 years, the total would have been \\$250 million - exactly \\$60.00 million less than the actual growth-scenario total.**  (false)

Five flat copies of $50$ total $250$. The growing path summed to $305.255$. The gap is

$$305.255-250=55.255$$

The claimed $\\$60$ million overstates that extra by about $\\$4.74$ million, so the statement is False.`,
      `**E) The total revenue expected over the 5-year period is approximately \\$328.86 million.**  (false)

The same five-year sum is $s_{5}\\approx 305.26$. The claimed $\\$328.86$ million sits about $\\$23.60$ million too high, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 61,
    solution_overview: `A startup earns $\\$50$ million this year and expects revenue to grow by $10\\%$ annually for the next four years, a five-term geometric series. Figures below are in millions of dollars.

$$a=50,\\qquad k=1.10,\\qquad n=5$$

The year-$t$ term and the finite sum are

$$a_{t}=ak^{t-1},\\qquad s_{n}=a\\frac{k^{n}-1}{k-1}$$`,
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

A geometric stream converges when $|k|<1$. Here $k=0.5$, so

$$|k|=0.5<1$$

The monthly profits fade toward zero and the running total has a finite ceiling, so the statement is True.`,
      `**B) The infinite sum of all future monthly profits is \\$4,000.00.**  (true)

Because $|k|=0.5<1$, the infinite total is

$$s_{\\infty}=\\frac{2{,}000}{1-0.5}=\\frac{2{,}000}{0.5}$$

$$s_{\\infty}=4{,}000$$

That is twice the opening month, so the statement is True.`,
      `**C) The sum of just the first 4 months' profits is \\$3,750.00.**  (true)

The first four profits are $2{,}000$, $1{,}000$, $500$, and $250$:

$$s_{4}=2{,}000+1{,}000+500+250$$

$$s_{4}=3{,}750$$

That is the claimed four-month total, so the statement is True.`,
      `**D) The sum of the first 4 months' profits exceeds the infinite sum.**  (false)

Every later month still adds a positive profit, so a partial sum cannot overtake the limit:

$$3{,}750<4{,}000$$

The $\\$250$ gap is the entire tail after month 4, so the statement is False.`,
      `**E) If the quotient were instead k = 1.5, the infinite series would still converge, to a sum of \\$-4,000.00.**  (false)

Raising the quotient to $1.5$ flips the test:

$$|1.5|=1.5>1$$

The series diverges. Forcing $\\frac{a}{1-k}$ anyway produces $-4{,}000$, a negative total for growing positive profits, which is not a sum, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 62,
    solution_overview: `Monthly profit starts at $\\$2{,}000$ and each later month keeps half of the preceding month's profit, an infinite geometric series.

$$a=2{,}000,\\qquad k=0.5$$

When $|k|<1$ the infinite sum is $\\frac{a}{1-k}$. The first $n$ terms sum to $s_{n}=a\\frac{1-k^{n}}{1-k}$.`,
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

Each deposit is $90\\%$ of the last, so

$$|k|=0.90<1$$

The deposits shrink toward zero rather than holding steady or growing, so the statement is True.`,
      `**B) The infinite sum of all deposits is \\$8,000.00.**  (true)

With $|k|<1$, the infinite total is

$$s_{\\infty}=\\frac{800}{1-0.90}=\\frac{800}{0.10}$$

$$s_{\\infty}=8{,}000$$

The declining stream is worth ten times the opening deposit, so the statement is True.`,
      `**C) The sum of the first 10 deposits is approximately \\$5,210.57.**  (true)

Ten declining terms are a finite geometric sum:

$$s_{10}=800\\frac{1-(0.90)^{10}}{0.10}$$

$$(0.90)^{10}\\approx 0.3487,\\qquad s_{10}\\approx 5{,}210.57$$

That is the claimed ten-year total, so the statement is True.`,
      `**D) The first 10 deposits together represent about 65% of the infinite total sum.**  (true)

Divide the two recovered totals:

$$\\frac{5{,}210.57}{8{,}000}\\approx 0.6513=65.13\\%$$

That rounds to about $65\\%$, so the statement is True.`,
      `**E) If the quotient were instead k = 1.10, the series would diverge.**  (true)

A $10\\%$ annual increase makes

$$|k|=1.10>1$$

Deposits would grow rather than fade, so partial sums have no finite limit, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 63,
    solution_overview: `This year's deposit is $\\$800$, and each following year's deposit is $90\\%$ of the previous year's deposit, continuing indefinitely.

$$a=800,\\qquad k=0.90$$

When $|k|<1$ the infinite sum is $s_{\\infty}=\\frac{a}{1-k}$. The first $n$ deposits sum to $s_{n}=a\\frac{1-k^{n}}{1-k}$.`,
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

A level schedule is ordinary division:

$$t=\\frac{18{,}000{,}000}{300{,}000}=60$$

At a fixed $300{,}000$ tons a year the reserve is a $60$-year stack, so the statement is True.`,
      `**B) If extraction were instead held constant at 500,000 tons/year, the reserves would last 36 years.**  (true)

The same reserve divided by the faster rate is

$$t=\\frac{18{,}000{,}000}{500{,}000}=36$$

Raising the annual take from $300{,}000$ to $500{,}000$ shortens the life in inverse proportion, so the statement is True.`,
      `**C) Constant-rate extraction over n years is the special k = 1 case of the geometric series, where the total simply equals the number of years multiplied by the yearly amount.**  (true)

When every year's take equals the last, $k=1$ and the ratio formula has a zero denominator. The total is then ordinary multiplication:

$$s_{n}=a\\times n$$

Ten years at $300{,}000$ tons is $3{,}000{,}000$ tons by that product, so the statement is True.`,
      `**D) If extraction instead grows by 5% per year for 10 years, total extraction over those 10 years is approximately 3,900,000 tons.**  (false)

The growing path is the finite geometric total:

$$s_{10}=300{,}000\\frac{(1.05)^{10}-1}{0.05}$$

$$(1.05)^{10}\\approx 1.6289,\\qquad s_{10}\\approx 3{,}773{,}368$$

The claimed $3{,}900{,}000$ overstates this by about $127{,}000$ tons, so the statement is False.`,
      `**E) The 10-year total under 5% annual growth exceeds the 10-year total under constant 300,000-ton extraction by more than 1,000,000 tons.**  (false)

Ten years at a constant $300{,}000$ tons total $3{,}000{,}000$. Subtract from the growing total:

$$3{,}773{,}368-3{,}000{,}000=773{,}368$$

That extra sits about $227{,}000$ tons short of $1{,}000{,}000$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 64,
    solution_overview: `Lithium reserves are $18{,}000{,}000$ tons. Constant extraction uses a level annual take $E$. A growing scenario starts at $300{,}000$ tons and rises $5\\%$ per year for $10$ years.

$$a=300{,}000,\\qquad k=1.05,\\qquad n=10$$

Constant extraction lasts $t=\\frac{18{,}000{,}000}{E}$ years and is the $k=1$ case $s_{n}=a\\times n$. For $k\\ne 1$ the finite total is $s_{n}=a\\frac{k^{n}-1}{k-1}$.`,
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

A $3\\%$ decline keeps $97\\%$ of this year's $180$ million tons:

$$a_{2}=180\\times 0.97=174.6$$

That is the claimed year-2 output, so the statement is True.`,
      `**B) The infinite total extracted over all future years, under the 3% decline, is 6,000 million tons.**  (true)

With $|0.97|<1$, the perpetual total is

$$s_{\\infty}=\\frac{180}{1-0.97}=\\frac{180}{0.03}$$

$$s_{\\infty}=6{,}000$$

That is the claimed lifetime take, so the statement is True.`,
      `**C) The reserves will never be fully exhausted, leaving 3 billion tons as permanently “stranded assets.”**  (true)

The convergent path extracts $6{,}000$ million tons. Against a $9{,}000$ million-ton reserve:

$$9{,}000-6{,}000=3{,}000$$

That leftover is $3$ billion tons the declining schedule never reaches, so the statement is True.`,
      `**D) If output instead declined 5% per year from the same 180 million-ton starting point, the total extracted would leave less coal stranded than the 3%-decline case.**  (false)

A steeper fade extracts less:

$$s_{\\infty}=\\frac{180}{0.05}=3{,}600$$

$$9{,}000-3{,}600=5{,}400$$

The $5\\%$ path strands $5{,}400$ million tons, against $3{,}000$ stranded under the $3\\%$ path, so the statement is False.`,
      `**E) Under the 3% decline scenario, cumulative extraction after just the first 20 years alone would already exceed the full infinite-horizon total of 6,000 million tons.**  (false)

A partial sum of positive terms cannot overtake its own limit:

$$s_{20}=180\\frac{1-(0.97)^{20}}{0.03}$$

$$(0.97)^{20}\\approx 0.5438,\\qquad s_{20}\\approx 2{,}737$$

That sits well under $6{,}000$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 65,
    solution_overview: `Coal reserves are $9{,}000$ million tons. This year's output is $180$ million tons. A $3\\%$ annual decline has quotient $k=0.97$; a $5\\%$ decline has $k=0.95$.

$$a=180,\\qquad k_{3}=0.97,\\qquad k_{5}=0.95$$

When $|k|<1$ the infinite total is $s_{\\infty}=\\frac{a}{1-k}$. The first $n$ years sum to $s_{n}=a\\frac{1-k^{n}}{1-k}$.`,
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

Sign changes do not decide convergence. Magnitude does:

$$|k|=|-0.5|=0.5<1$$

The adjustments shrink while swinging around zero, so the running total settles, so the statement is True.`,
      `**B) The infinite sum of all adjustments is approximately \\$2,666.67.**  (true)

The infinite-sum formula with a negative quotient is

$$s_{\\infty}=\\frac{4{,}000}{1-(-0.5)}=\\frac{4{,}000}{1.5}$$

$$s_{\\infty}\\approx 2{,}666.67$$

That is two-thirds of the opening adjustment, so the statement is True.`,
      `**C) The sum of the first 4 adjustments is \\$3,000.00.**  (false)

The first four terms are $4{,}000$, $-2{,}000$, $1{,}000$, and $-500$:

$$s_{4}=4{,}000-2{,}000+1{,}000-500$$

$$s_{4}=2{,}500$$

The claimed $\\$3{,}000$ is the three-term sum $s_{3}$, one adjustment too early, so the statement is False.`,
      `**D) The series necessarily diverges regardless of its magnitude.**  (false)

Alternation is not a divergence sentence. Here $|k|=0.5<1$, so this particular signed stream converges to about $\\$2{,}666.67$. Divergence would require $|k|\\ge 1$, so the statement is False.`,
      `**E) If the quotient were instead exactly k = -1, the partial sums would alternate forever between \\$4,000 and \\$0.**  (true)

At $k=-1$ the terms are $4{,}000$, $-4{,}000$, $4{,}000$, $-4{,}000$. The partial sums are

$$s_{1}=4{,}000,\\qquad s_{2}=0,\\qquad s_{3}=4{,}000,\\qquad s_{4}=0$$

The running total never settles, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 66,
    solution_overview: `The first corrective adjustment is $\\$4{,}000$, and each later adjustment reverses sign and is half the size of the previous one.

$$a=4{,}000,\\qquad k=-0.5$$

When $|k|<1$ the infinite sum is $s_{\\infty}=\\frac{a}{1-k}$. At the special quotient $k=-1$, odd partial sums equal $a$ and even partial sums equal $0$.`,
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

Equal contributions never change size, so the ratio of one year to the next is $k=1$. The ratio formula then has denominator $k-1=0$, and the total is ordinary multiplication $s_{n}=a\\times n$, so the statement is True.`,
      `**B) The total contributions over the 15 years of equal \\$12 million payments equal \\$180.00 million.**  (true)

Fifteen copies of $12$ are

$$s_{15}=12\\times 15=180$$

No growth factor sits in the background, so the statement is True.`,
      `**C) Under the 4%-growth alternative, the 15-year total is approximately \\$240.11 million.**  (false)

The growing plan is the finite geometric sum:

$$s_{15}=12\\frac{(1.04)^{15}-1}{0.04}$$

$$(1.04)^{15}\\approx 1.800944,\\qquad s_{15}\\approx 240.28$$

The claimed $240.11$ understates this by $0.17$ million, so the statement is False.`,
      `**D) The 4%-growth 15-year total exceeds the no-growth total by more than \\$65.00 million.**  (false)

Subtract the two recovered totals:

$$240.28-180.00=60.28$$

The growth premium sits $\\$4.72$ million short of a $\\$65$ million cutoff, so the statement is False.`,
      `**E) Applying the general formula directly to the no-growth case would require dividing by zero.**  (true)

The finite-sum formula carries $k-1$ in the denominator. At $k=1$:

$$k-1=0$$

Division by zero is undefined, so the equal-payment case must use $s_{n}=a\\times n$ instead, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 67,
    solution_overview: `Equal annual contributions of $\\$12$ million for $15$ years are the degenerate case $k=1$. An alternative grows those contributions by $4\\%$ per year from the same opening amount. Figures below are in millions of dollars.

$$a=12,\\qquad n=15,\\qquad k_{\\mathrm{flat}}=1,\\qquad k_{\\mathrm{grow}}=1.04$$

For $k=1$ the total is $s_{n}=a\\times n$. For $k\\ne 1$ it is $s_{n}=a\\frac{k^{n}-1}{k-1}$.`,
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

One $12\\%$ cut from the opening $\\$15{,}000$ is

$$a_{2}=15{,}000\\times 0.88=13{,}200$$

That is the claimed second payment, so the statement is True.`,
      `**B) The total of the 8 finite payments is approximately \\$80,045.68.**  (true)

Eight declining terms sum as

$$s_{8}=15{,}000\\frac{1-(0.88)^{8}}{0.12}$$

$$(0.88)^{8}\\approx 0.3596,\\qquad s_{8}\\approx 80{,}045.68$$

That is the claimed eight-year total, so the statement is True.`,
      `**C) If the payments continued forever under the same 88% quotient, the infinite total would be \\$130,000.00.**  (false)

The perpetual total is

$$s_{\\infty}=\\frac{15{,}000}{1-0.88}=\\frac{15{,}000}{0.12}$$

$$s_{\\infty}=125{,}000$$

The claimed $\\$130{,}000$ overstates this by $\\$5{,}000$, so the statement is False.`,
      `**D) The finite 8-payment total represents more than 75% of the infinite total.**  (false)

The share of the lifetime total captured in eight years is

$$\\frac{80{,}045.68}{125{,}000}\\approx 0.6404=64.04\\%$$

That sits about $11$ percentage points short of $75\\%$, so the statement is False.`,
      `**E) If the decline rate were less steep, say k = 0.95 instead of 0.88, the infinite total would be smaller than the infinite total at k = 0.88.**  (false)

A milder fade leaves a smaller denominator $1-k$, so the perpetual total rises:

$$s_{\\infty}=\\frac{15{,}000}{0.05}=300{,}000$$

Then $300{,}000>125{,}000$. Payments that shrink more slowly keep more cash in the later years, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `A structured settlement pays $\\$15{,}000$ in its first year, with each later payment $88\\%$ of the prior one. One clause runs for $8$ years; a hypothetical clause continues forever.

$$a=15{,}000,\\qquad k=0.88,\\qquad n=8$$

The finite total is $s_{n}=a\\frac{1-k^{n}}{1-k}$. Because $|k|<1$, the perpetual total is $s_{\\infty}=\\frac{a}{1-k}$.`,
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

The ratio formula fails only at $k=1$. Here $k=1.08\\ne 1$, so

$$s_{12}=9{,}000\\frac{(1.08)^{12}-1}{0.08}$$

is well defined. Adding a fixed twelve terms never requires $|k|<1$, so the statement is True.`,
      `**B) The total royalties collected over the 12 years are approximately \\$175,000.00.**  (false)

The twelve-year growth factor is $(1.08)^{12}\\approx 2.51817$, so

$$s_{12}=9{,}000\\times\\frac{1.51817}{0.08}\\approx 170{,}794$$

The claimed $\\$175{,}000$ overstates this by about $\\$4{,}206$, so the statement is False.`,
      `**C) The infinite-sum formula can still be legitimately applied to this series, yielding a meaningful total value.**  (false)

Royalties grow, so $|k|=1.08>1$ and the terms never fade. Forcing $\\frac{9{,}000}{1-1.08}$ produces $-112{,}500$, a negative value for a stream of growing positive royalties, which is not a valuation, so the statement is False.`,
      `**D) The royalty payment in year 12 alone is approximately \\$20,715.85.**  (false)

Year 12 carries eleven growth steps, not twelve:

$$a_{12}=9{,}000\\times(1.08)^{11}$$

$$(1.08)^{11}\\approx 2.33164,\\qquad a_{12}\\approx 20{,}984.75$$

The claimed $\\$20{,}715.85$ understates this by about $\\$269$, so the statement is False.`,
      `**E) If royalties instead grew at 0% for 12 years, the 12-year total would be \\$62,794.15 less than the actual 8%-growth total.**  (true)

A flat stream is $9{,}000\\times 12=108{,}000$. Subtracting that floor from the growing total:

$$170{,}794.15-108{,}000=62{,}794.15$$

That is the extra cash $8\\%$ growth contributes over twelve years, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 69,
    solution_overview: `A franchisor receives $\\$9{,}000$ in the first year, with royalties growing $8\\%$ per year for $12$ years. A flat $0\\%$-growth comparison uses $k=1$.

$$a=9{,}000,\\qquad k=1.08,\\qquad n=12$$

For $k\\ne 1$ the finite total is $s_{n}=a\\frac{k^{n}-1}{k-1}$ and the year-$t$ royalty is $a_{t}=ak^{t-1}$. For $k=1$ the total is $s_{n}=a\\times n$.`,
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

Six growing terms with $k=1.20$ sum as

$$s_{6}=4\\frac{(1.20)^{6}-1}{0.20}$$

$$(1.20)^{6}=2.985984,\\qquad s_{6}=39.72$$

That is the claimed finite-phase total, so the statement is True.`,
      `**B) Year-6 revenue alone is approximately \\$9.95 million.**  (true)

Year 6 uses five growth intervals:

$$a_{6}=4\\times(1.20)^{5}$$

$$(1.20)^{5}=2.48832,\\qquad a_{6}=9.95328\\approx 9.95$$

That is the claimed year-6 revenue, so the statement is True.`,
      `**C) The finite 6-year series has no valid sum via the finite-sum formula.**  (false)

The finite-sum formula is undefined only at $k=1$. Here $k=1.20$, and the six-year total is the concrete figure $39.72$. A six-term window does not need terms to fade, so the statement is False.`,
      `**D) Treating year-6 revenue as the first term of a new perpetuity with quotient k = 0.85, the terminal value is approximately \\$66.36 million.**  (true)

Because $|0.85|<1$, the infinite tail starting from year-6 revenue is

$$T=\\frac{9.95328}{1-0.85}=\\frac{9.95328}{0.15}$$

$$T\\approx 66.36$$

That is the claimed terminal value, so the statement is True.`,
      `**E) Combining the 6-year finite total with the terminal perpetuity value gives a combined projected value of less than \\$100 million.**  (false)

Add the two recovered pieces:

$$39.72+66.36=106.08$$

The combined value clears $\\$100$ million by about $\\$6$ million, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 70,
    solution_overview: `Revenue starts at $\\$4$ million and grows $20\\%$ per year for $6$ years. Year-6 revenue then starts a terminal perpetuity that declines $15\\%$ per year. Figures below are in millions of dollars.

$$a=4,\\qquad k=1.20,\\qquad n=6,\\qquad k_{T}=0.85$$

The finite total is $s_{n}=a\\frac{k^{n}-1}{k-1}$ and year-$t$ revenue is $a_{t}=ak^{t-1}$. For $|k_{T}|<1$ the terminal perpetuity is $T=\\frac{a_{T}}{1-k_{T}}$.`,
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

A $15\\%$ monthly lift multiplies whatever opening month you start with by $1.15$:

$$a_{2}=1{,}000\\times 1.15=1{,}150$$

That scale check is not the actual first-month cost recovered from the $\\$58{,}000$ total, so the statement is True.`,
      `**B) Solving for the first-month cost gives approximately \\$6,625.74.**  (true)

Rearrange the geometric sum and invert $(1.15)^{6}-1$:

$$a=58{,}000\\times\\frac{0.15}{(1.15)^{6}-1}$$

$$(1.15)^{6}\\approx 2.31306,\\qquad a\\approx 6{,}625.74$$

That is the claimed opening month, so the statement is True.`,
      `**C) The 6th month's restocking cost is approximately \\$13,326.73.**  (true)

Month 6 sits five growth steps past the recovered opening month:

$$a_{6}=6{,}625.74\\times(1.15)^{5}$$

$$(1.15)^{5}\\approx 2.01136,\\qquad a_{6}\\approx 13{,}326.73$$

The first month is uncompounded, so the last month of a six-month window carries the power $5$, so the statement is True.`,
      `**D) The combined restocking cost for months 4 through 6 is approximately \\$37,930.00.**  (false)

Those three months share the powers $k^{3}$, $k^{4}$, and $k^{5}$:

$$k^{3}+k^{4}+k^{5}\\approx 5.28124$$

$$6{,}625.74\\times 5.28124\\approx 34{,}992$$

The claimed $\\$37{,}930$ overstates this by about $\\$2{,}938$, so the statement is False.`,
      `**E) If the same \\$58,000 total had instead been spread evenly, that flat monthly figure would exceed the actual first-month cost of \\$6,625.74 found under 15% growth.**  (true)

A rising schedule puts the cheap months first. The flat split is

$$\\frac{58{,}000}{6}=9{,}666.67$$

Then $9{,}666.67>6{,}625.74$. Later months run above the average, so the first month sits below it, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 71,
    solution_overview: `Monthly restocking cost grows $15\\%$ each month for $6$ months, and the six-month total is known to be $\\$58{,}000$. The unknown is the first month's cost $a$.

$$s_{6}=58{,}000,\\qquad k=1.15,\\qquad n=6$$

The geometric total $s_{n}=a\\frac{k^{n}-1}{k-1}$ inverts as

$$a=s_{n}\\frac{k-1}{k^{n}-1}$$

The cost in month $t$ is $a_{t}=ak^{t-1}$.`,
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

A $2\\%$ cut keeps $98\\%$ of this year's $\\$500{,}000$:

$$a_{2}=500{,}000\\times 0.98=490{,}000$$

That is the claimed year-2 payout, so the statement is True.`,
      `**B) The infinite total of all future payouts converges to \\$25,000,000.00.**  (true)

With $|0.98|<1$, the perpetual total is

$$s_{\\infty}=\\frac{500{,}000}{1-0.98}=\\frac{500{,}000}{0.02}$$

$$s_{\\infty}=25{,}000{,}000$$

Two percent of current payout disappears each year, so the lifetime take is current payout divided by that fade rate, so the statement is True.`,
      `**C) The cumulative payout over just the first 10 years is approximately \\$4,800,000.00.**  (false)

Ten declining terms sum as

$$s_{10}=500{,}000\\frac{1-(0.98)^{10}}{0.02}$$

$$(0.98)^{10}\\approx 0.81707,\\qquad s_{10}\\approx 4{,}573{,}180$$

The claimed $\\$4{,}800{,}000$ overstates this by about $\\$227{,}000$, so the statement is False.`,
      `**D) The first 10 years of payouts represent approximately 18% of the full infinite-horizon total.**  (true)

Divide the two recovered totals:

$$\\frac{4{,}573{,}180}{25{,}000{,}000}\\approx 0.1829=18.29\\%$$

That rounds to about $18\\%$, so the statement is True.`,
      `**E) If the decline were instead steeper, at k = 0.95, the infinite total would be more than half of the original infinite total.**  (false)

A steeper fade extracts less:

$$s_{\\infty}=\\frac{500{,}000}{0.05}=10{,}000{,}000$$

Half of the original $\\$25{,}000{,}000$ is $\\$12{,}500{,}000$. Then $10{,}000{,}000<12{,}500{,}000$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 72,
    solution_overview: `A university endowment pays $\\$500{,}000$ this year and shrinks the payout by $2\\%$ every year forever. A steeper alternative uses a $5\\%$ annual decline.

$$a=500{,}000,\\qquad k_{1}=0.98,\\qquad k_{2}=0.95,\\qquad n=10$$

When $|k|<1$ the infinite total is $s_{\\infty}=\\frac{a}{1-k}$. The first $n$ payouts sum to $s_{n}=a\\frac{1-k^{n}}{1-k}$.`,
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

One $12\\%$ lift from the opening $\\$200{,}000$ is

$$a_{2}=200{,}000\\times 1.12=224{,}000$$

Year 2 carries a single growth step, so the statement is True.`,
      `**B) The cumulative spend after 9 years is still below the \\$3,000,000 target.**  (true)

Nine years of $12\\%$ growth sum as

$$s_{9}=200{,}000\\frac{(1.12)^{9}-1}{0.12}$$

$$(1.12)^{9}\\approx 2.77308,\\qquad s_{9}\\approx 2{,}955{,}131$$

That sits about $\\$45{,}000$ short of $\\$3{,}000{,}000$, so the statement is True.`,
      `**C) The cumulative spend after 10 years is approximately \\$3,600,000.00.**  (false)

Ten years sum as

$$s_{10}=200{,}000\\frac{(1.12)^{10}-1}{0.12}$$

$$(1.12)^{10}\\approx 3.10585,\\qquad s_{10}\\approx 3{,}509{,}747$$

The claimed $\\$3{,}600{,}000$ overstates this by about $\\$90{,}000$, so the statement is False.`,
      `**D) The smallest n for which cumulative spend surpasses \\$3,000,000 is n = 9.**  (false)

The two adjacent totals bracket the target:

$$s_{9}\\approx 2{,}955{,}131<3{,}000{,}000<s_{10}\\approx 3{,}509{,}747$$

Year 9 is still short, so the first crossing is $n=10$, not $n=9$, so the statement is False.`,
      `**E) If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would still surpass the \\$3,000,000 target within 10 years.**  (false)

At $8\\%$ the same ten-year window is

$$s_{10}=200{,}000\\frac{(1.08)^{10}-1}{0.08}$$

$$(1.08)^{10}\\approx 2.15893,\\qquad s_{10}\\approx 2{,}897{,}312$$

That remains below $\\$3{,}000{,}000$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `Marketing spend starts at $\\$200{,}000$ and grows $12\\%$ each year. The CFO wants the smallest $n$ for which the cumulative total first surpasses $\\$3{,}000{,}000$. An $8\\%$ growth alternative is used for comparison.

$$a=200{,}000,\\qquad k=1.12,\\qquad k_{8}=1.08$$

Cumulative spend after $n$ years is $s_{n}=a\\frac{k^{n}-1}{k-1}$.`,
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

A $4\\%$ cut keeps $96\\%$ of the opening $\\$50{,}000$:

$$a_{2}=50{,}000\\times 0.96=48{,}000$$

The six-year deferral does not change the ratio from grant 1 to grant 2 once the stream has started, so the statement is True.`,
      `**B) The infinite total of all future grants is \\$1,250,000.00.**  (true)

With $|0.96|<1$, the perpetual total is

$$s_{\\infty}=\\frac{50{,}000}{1-0.96}=\\frac{50{,}000}{0.04}$$

$$s_{\\infty}=1{,}250{,}000$$

The deferral affects when the stream starts, not this undiscounted geometric total, so the statement is True.`,
      `**C) The total of the first 15 grants is approximately \\$572,392.03.**  (true)

Fifteen declining terms sum as

$$s_{15}=50{,}000\\frac{1-(0.96)^{15}}{0.04}$$

$$(0.96)^{15}\\approx 0.54209,\\qquad s_{15}\\approx 572{,}392.03$$

That is the claimed fifteen-grant total, so the statement is True.`,
      `**D) The first 15 grants represent less than 40% of the infinite total.**  (false)

The share of the lifetime total is

$$\\frac{572{,}392}{1{,}250{,}000}\\approx 0.4579=45.79\\%$$

That sits almost six points above $40\\%$, so the statement is False.`,
      `**E) If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be less than half of the original infinite total.**  (true)

The steeper path totals

$$s_{\\infty}=\\frac{50{,}000}{0.10}=500{,}000$$

Half of $\\$1{,}250{,}000$ is $\\$625{,}000$. Then $500{,}000<625{,}000$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 74,
    solution_overview: `A charitable trust issues a first grant of $\\$50{,}000$ (starting six years from now), and each later grant is $96\\%$ of the previous grant, forever. A steeper alternative uses $k=0.90$.

$$a=50{,}000,\\qquad k_{1}=0.96,\\qquad k_{2}=0.90,\\qquad n=15$$

When $|k|<1$ the infinite total is $s_{\\infty}=\\frac{a}{1-k}$. The first $n$ grants sum to $s_{n}=a\\frac{1-k^{n}}{1-k}$.`,
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

A $2\\%$ quarterly cut keeps $98\\%$ of the opening $10{,}000$ lbs:

$$a_{2}=10{,}000\\times 0.98=9{,}800$$

The decline is per quarter, so quarter 2 is one $0.98$ factor from quarter 1, so the statement is True.`,
      `**B) The total yield over the full 5-year span is approximately 166,196.01 lbs.**  (true)

Five years contain $20$ quarters:

$$s_{20}=10{,}000\\frac{1-(0.98)^{20}}{0.02}$$

$$(0.98)^{20}\\approx 0.66761,\\qquad s_{20}=166{,}196.01$$

That is the claimed five-year total, so the statement is True.`,
      `**C) Substituting n = 5 into the same formula gives 48,039.60 lbs, and this would be the correct 5-year total.**  (false)

Five quarters sum to

$$s_{5}=10{,}000\\frac{1-(0.98)^{5}}{0.02}=48{,}039.60$$

That arithmetic is a five-quarter sum, covering about $1.25$ years, not five years. The correct five-year total is the twenty-quarter figure $166{,}196.01$ lbs, so the statement is False.`,
      `**D) The yield in the 20th quarter alone is approximately 6,812.33 lbs.**  (true)

Quarter 20 carries nineteen decline steps:

$$a_{20}=10{,}000\\times(0.98)^{19}$$

$$(0.98)^{19}\\approx 0.68123,\\qquad a_{20}\\approx 6{,}812.33$$

The first quarter is uncut, so the last quarter of a $20$-quarter window carries the power $19$, so the statement is True.`,
      `**E) If the 2%-per-quarter decline continued forever instead of stopping after 20 quarters, the theoretical infinite total of 500,000.00 lbs would be less than the actual 20-quarter total.**  (false)

A partial sum of positive terms cannot exceed its own limit:

$$s_{\\infty}=\\frac{10{,}000}{0.02}=500{,}000$$

$$500{,}000>166{,}196.01$$

The perpetual total is larger, not smaller, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `Grape yield declines $2\\%$ every quarter, not every year, over a $5$-year span of $20$ quarters. The first quarter's yield is $10{,}000$ lbs.

$$a=10{,}000,\\qquad k=0.98,\\qquad n=20$$

The finite geometric yield is $s_{n}=a\\frac{1-k^{n}}{1-k}$. The hypothetical infinite total is $s_{\\infty}=\\frac{a}{1-k}$.`,
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

Territory A's eight-year factor is $(1.06)^{8}\\approx 1.59385$:

$$s_{A,8}=80{,}000\\frac{(1.06)^{8}-1}{0.06}$$

$$s_{A,8}\\approx 791{,}797.43$$

That is the claimed A total, so the statement is True.`,
      `**B) Territory B's 8-year total royalties are approximately \\$815,382.06.**  (true)

Territory B's eight-year factor is $(1.02)^{8}\\approx 1.17166$:

$$s_{B,8}=95{,}000\\frac{(1.02)^{8}-1}{0.02}$$

$$s_{B,8}\\approx 815{,}382.06$$

That is the claimed B total, so the statement is True.`,
      `**C) Territory A's 8-year total royalties exceed Territory B's 8-year total.**  (false)

Compare the two recovered totals:

$$791{,}797<815{,}382$$

B's higher starting royalty outweighs A's faster growth over this eight-year window, so the statement is False.`,
      `**D) In year 8 alone, Territory A's royalty payment of approximately \\$120,290.42 exceeds Territory B's year-8 payment of approximately \\$109,125.14.**  (true)

Year 8 uses seven growth steps on each opening royalty:

$$a_{A,8}=80{,}000\\times(1.06)^{7}\\approx 120{,}290.42$$

$$a_{B,8}=95{,}000\\times(1.02)^{7}\\approx 109{,}125.14$$

Then $120{,}290>109{,}125$. A's faster path overtakes B by year 8 even though B still leads on the eight-year total, so the statement is True.`,
      `**E) Territory B's 8-year total exceeds Territory A's 8-year total by more than \\$30,000.**  (false)

The gap between the two eight-year totals is

$$815{,}382.06-791{,}797.43=23{,}584.63$$

That sits about $\\$6{,}415$ short of a $\\$30{,}000$ cutoff, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 76,
    solution_overview: `Territory A starts at $\\$80{,}000$ and grows $6\\%$ per year. Territory B starts at $\\$95{,}000$ and grows $2\\%$ per year. Both comparisons use an $8$-year window.

$$a_{A}=80{,}000,\\quad k_{A}=1.06,\\qquad a_{B}=95{,}000,\\quad k_{B}=1.02,\\qquad n=8$$

Each finite total is $s_{n}=a\\frac{k^{n}-1}{k-1}$. The royalty in year $t$ is $a_{t}=ak^{t-1}$.`,
  },
  {
    id: `math-11-77`,
    case_id: `MATH 11.77`,
    title: `Diminishing Marginal Returns from Advertising Spend`,
    subsection: `11.4`,
    context: `An analyst models the marginal benefit of the n-th batch of advertising spend as $a_n = \\frac{5,000}{n^{p}}$ dollars, and wants to know, for different values of the exponent p, whether the infinite total marginal benefit $\\sum a_n$ converges, using the rule that $\\sum \\frac{1}{n^{p}}$ converges if and only if p > 1.`,
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

The fourth term is

$$a_{4}=\\frac{5{,}000}{4^{1.5}}$$

$$4^{1.5}=8,\\qquad a_{4}=\\frac{5{,}000}{8}=625$$

The claimed $\\$650$ overstates this exact value by $\\$25$, so the statement is False.`,
      `**B) With p = 1.5, the infinite series converges to a finite total value.**  (true)

A $p$-series $\\sum n^{-p}$ converges when $p>1$. Here

$$p=1.5>1$$

so $\\sum \\frac{5{,}000}{n^{1.5}}$ converges to a finite value, so the statement is True.`,
      `**C) If instead p = 1, the series would still converge, just to a larger total than the p = 1.5 case.**  (false)

At $p=1$ the stream is a constant multiple of the harmonic series:

$$\\sum_{n=1}^{\\infty}\\frac{5{,}000}{n}$$

That diverges, so there is no finite total to compare with the $p=1.5$ case, so the statement is False.`,
      `**D) $a_{100} = \\$5.00$, and this alone is enough to guarantee that the series $\\sum a_n$ converges.**  (false)

At the primary exponent $p=1.5$:

$$a_{100}=\\frac{5{,}000}{100^{1.5}}=\\frac{5{,}000}{1{,}000}=5$$

The dollar figure is right, but a single small term does not guarantee convergence. The harmonic series has $a_{n}\\to 0$ and still diverges, so the statement is False.`,
      `**E) With p = 0.5, the series diverges, even though the individual terms still tend to 0 as n → ∞.**  (true)

The $p$-test requires $p>1$. Here $p=0.5\\le 1$, so

$$\\sum_{n=1}^{\\infty}\\frac{5{,}000}{n^{0.5}}$$

diverges. The terms $\\frac{5{,}000}{\\sqrt{n}}$ still tend to zero, just too slowly, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 77,
    solution_overview: `Marginal benefit of the $n$-th advertising batch is $a_{n}=\\frac{5{,}000}{n^{p}}$ dollars. Convergence of $\\sum a_{n}$ is decided by the $p$-series rule: $\\sum n^{-p}$ converges if and only if $p>1$. A vanishing term $a_{n}\\to 0$ is necessary but not sufficient.

The primary and comparison exponents are $p=1.5$, $p=1$, and $p=0.5$.`,
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

Revenue grows at $1\\%$ from $\\$150{,}000$:

$$s_{R,12}=150{,}000\\frac{(1.01)^{12}-1}{0.01}$$

$$(1.01)^{12}\\approx 1.126825,\\qquad s_{R,12}\\approx 1{,}902{,}375.45$$

That is the claimed revenue total, so the statement is True.`,
      `**B) The cumulative 12-year maintenance cost is approximately \\$1,703,043.55.**  (true)

Maintenance grows at $3\\%$ from $\\$120{,}000$:

$$s_{C,12}=120{,}000\\frac{(1.03)^{12}-1}{0.03}$$

$$(1.03)^{12}\\approx 1.425761,\\qquad s_{C,12}\\approx 1{,}703{,}043.55$$

That is the claimed cost total, so the statement is True.`,
      `**C) The cumulative 12-year profit is approximately \\$199,331.90.**  (true)

Profit is the difference of the two twelve-year totals:

$$\\Pi_{12}=1{,}902{,}375.45-1{,}703{,}043.55$$

$$\\Pi_{12}=199{,}331.90$$

That is the claimed cumulative profit, so the statement is True.`,
      `**D) In year 12 alone, revenue of approximately \\$167,350.25 still exceeds maintenance cost of approximately \\$166,108.06, leaving a net positive of about \\$1,242.19.**  (true)

Year 12 uses eleven growth steps on each opening amount:

$$a_{R,12}=150{,}000\\times(1.01)^{11}\\approx 167{,}350.25$$

$$a_{C,12}=120{,}000\\times(1.03)^{11}\\approx 166{,}108.06$$

$$167{,}350.25-166{,}108.06=1{,}242.19$$

The farm is still in the black that year, so the statement is True.`,
      `**E) Extending the horizon to 20 years, cumulative profit falls below the 12-year cumulative profit.**  (true)

Twenty-year revenue and cost totals are

$$s_{R,20}=150{,}000\\frac{(1.01)^{20}-1}{0.01}\\approx 3{,}302{,}850.60$$

$$s_{C,20}=120{,}000\\frac{(1.03)^{20}-1}{0.03}\\approx 3{,}224{,}444.94$$

$$\\Pi_{20}\\approx 78{,}405.66$$

That sits well below the twelve-year $\\$199{,}331.90$. Maintenance grows faster, so the extra eight years eat the earlier surplus, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 78,
    solution_overview: `Annual energy revenue starts at $\\$150{,}000$ and grows $1\\%$ per year. Annual maintenance starts at $\\$120{,}000$ and grows $3\\%$ per year. Horizons of $n=12$ and $n=20$ years are compared.

$$a_{R}=150{,}000,\\quad k_{R}=1.01,\\qquad a_{C}=120{,}000,\\quad k_{C}=1.03$$

Each finite total is $s_{n}=a\\frac{k^{n}-1}{k-1}$. Cumulative profit is $\\Pi_{n}=s_{R,n}-s_{C,n}$. The amount in year $t$ is $a_{t}=ak^{t-1}$.`,
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

A $6\\%$ annual shrink keeps $k=0.94$, and $|0.94|<1$, so

$$s_{\\infty}=\\frac{2{,}400{,}000}{1-0.94}=\\frac{2{,}400{,}000}{0.06}$$

$$s_{\\infty}=40{,}000{,}000$$

That is the claimed perpetual recession total, so the statement is True.`,
      `**B) Under the same recession scenario, the cumulative cash flow over just the first 15 years is approximately \\$22,000,000.00.**  (false)

Fifteen declining terms sum as

$$s_{15}=2{,}400{,}000\\frac{1-(0.94)^{15}}{0.06}$$

$$(0.94)^{15}\\approx 0.39529,\\qquad s_{15}\\approx 24{,}188{,}328$$

The claimed $\\$22{,}000{,}000$ understates this by about $\\$2{,}188{,}000$, so the statement is False.`,
      `**C) The 15-year recession total represents approximately 75% of the full infinite-horizon recession total.**  (false)

The share of the lifetime recession total is

$$\\frac{24{,}188{,}328}{40{,}000{,}000}\\approx 0.6047=60.47\\%$$

That sits about $15$ percentage points short of $75\\%$, so the statement is False.`,
      `**D) Under the recovery scenario, the cumulative cash flow over the 7-year period, approximately \\$20,145,210.36, exceeds the full infinite-horizon recession total of \\$40,000,000.00.**  (false)

Seven years of $6\\%$ growth sum as

$$s_{7}=2{,}400{,}000\\frac{(1.06)^{7}-1}{0.06}\\approx 20{,}145{,}210$$

The dollar figure matches, but the comparison is backwards:

$$20{,}145{,}210<40{,}000{,}000$$

Seven growing years cannot overtake a perpetual recession stream whose lifetime take is $\\$40$ million, so the statement is False.`,
      `**E) In year 7 of the recovery scenario alone, cash flow is approximately \\$2,900,000.00.**  (false)

Year 7 uses six growth steps:

$$a_{7}=2{,}400{,}000\\times(1.06)^{6}$$

$$(1.06)^{6}\\approx 1.41852,\\qquad a_{7}\\approx 3{,}404{,}446$$

The claimed $\\$2{,}900{,}000$ understates this by about $\\$504{,}000$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 79,
    solution_overview: `A portfolio company currently generates $\\$2{,}400{,}000$ in annual free cash flow. Under recession, cash flow shrinks $6\\%$ per year forever. Under recovery, cash flow grows $6\\%$ per year for $7$ years.

$$a=2{,}400{,}000,\\qquad k_{R}=0.94,\\qquad k_{G}=1.06,\\qquad n=7$$

For $|k|<1$ the infinite total is $s_{\\infty}=\\frac{a}{1-k}$. A finite geometric stream is $s_{n}=a\\frac{k^{n}-1}{k-1}$. Year-$t$ cash flow is $a_{t}=ak^{t-1}$.`,
  },
  {
    id: `math-11-80`,
    case_id: `MATH 11.80`,
    title: `Capstone: A Three-Tranche Loan Portfolio and a Convergence Trap`,
    subsection: `11.4`,
    context: `A private lender values a portfolio of three loan tranches, valued in nominal undiscounted dollars, adding declining and growing streams together just as ordinary fixed amounts. Tranche 1 pays equal annual coupons of \\$25,000 for 9 years in the degenerate k = 1 case. Tranche 2 pays a growing coupon starting at \\$18,000, increasing 7% per year for 9 years with a = \\$18,000 and k = 1.07. Tranche 3 is a perpetual royalty starting at \\$30,000 that declines 8% per year forever with a = \\$30,000 and k = 0.92. Separately, an analyst proposes valuing a symbolic annual fee stream $f_n = \\frac{1,000}{n}$ dollars for n = 1, 2, 3, ….`,
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

Tranche 1 is the $k=1$ case: nine copies of $\\$25{,}000$:

$$s_{1}=25{,}000\\times 9=225{,}000$$

Level payments multiply, so the statement is True.`,
      `**B) Tranche 2 totals approximately \\$215,603.80.**  (true)

Tranche 2 grows at $7\\%$ for nine years from $\\$18{,}000$:

$$s_{2}=18{,}000\\frac{(1.07)^{9}-1}{0.07}$$

$$(1.07)^{9}\\approx 1.83846,\\qquad s_{2}\\approx 215{,}603.80$$

That is the claimed growing-coupon total, so the statement is True.`,
      `**C) Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00.**  (true)

Tranche 3 shrinks at $k=0.92$, so $|k|<1$ and

$$s_{3}=\\frac{30{,}000}{1-0.92}=\\frac{30{,}000}{0.08}$$

$$s_{3}=375{,}000$$

A declining infinite stream is a finite dollar amount, so the statement is True.`,
      `**D) Tranche 3 must be excluded from any combined valuation, meaning the portfolio's correct combined total is just \\$440,603.80.**  (false)

Tranches 1 and 2 alone are $225{,}000+215{,}603.80=440{,}603.80$. Adding the convergent Tranche 3:

$$440{,}603.80+375{,}000=815{,}603.80$$

An infinite sum that converges is a finite number and can be added, so the statement is False.`,
      `**E) $f_{100} = \\$10.00$, and this alone is sufficient to guarantee that the fee stream converges to a finite total.**  (false)

The hundredth fee is

$$f_{100}=\\frac{1{,}000}{100}=10$$

The dollar figure is right, but the stream is $\\sum\\frac{1{,}000}{n}$, a multiple of the harmonic series with $p=1$. Terms going to zero is necessary rather than sufficient, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 80,
    solution_overview: `Three loan tranches are valued in nominal undiscounted dollars. Tranche 1 pays equal coupons of $\\$25{,}000$ for $9$ years ($k=1$). Tranche 2 starts at $\\$18{,}000$ and grows $7\\%$ per year for $9$ years. Tranche 3 is a perpetual royalty starting at $\\$30{,}000$ and declining $8\\%$ per year. A separate fee stream is $f_{n}=\\frac{1{,}000}{n}$.

For $k=1$, $s_{n}=an$. For finite $k\\ne 1$, $s_{n}=a\\frac{k^{n}-1}{k-1}$. For $|k|<1$, $s_{\\infty}=\\frac{a}{1-k}$. Terms approaching zero are necessary but not sufficient for convergence.`,
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

A single future bill is discounted by dividing through the growth factor:

$$x=\\frac{5{,}000}{(1.07)^3}$$

$$(1.07)^3=1.225043$$

$$x=\\frac{5{,}000}{1.225043}\\approx 4{,}081.49$$

That is the claimed deposit, so the statement is True.`,
      `**B) If the interest rate were instead 5%, the required deposit today would be LOWER than \\$4,081.49.**  (false)

A weaker rate does less of the compounding, so more cash must be set aside today. At $5\\%$:

$$x=\\frac{5{,}000}{(1.05)^3}$$

$$(1.05)^3=1.157625$$

$$x=\\frac{5{,}000}{1.157625}\\approx 4{,}319.19$$

$$4{,}319.19>4{,}081.49$$

The $5\\%$ deposit sits above $\\$4{,}081.49$, so the statement is False.`,
      `**C) The interest that will be earned over the 3 years is approximately \\$928.51.**  (false)

Interest is the target minus the deposit that grows into it. At $7\\%$ for three years:

$$x=\\frac{5{,}000}{(1.07)^3}\\approx 4{,}081.49$$

$$5{,}000-4{,}081.49=918.51$$

The claimed $\\$928.51$ is $\\$10$ too high, so the statement is False.`,
      `**D) If the target amount were doubled to \\$10,000, the required deposit today would also exactly double, to approximately \\$8,162.98.**  (true)

Present value is linear in the future bill when the rate and horizon stay fixed. The three-year $7\\%$ deposit for $\\$5{,}000$ is $x\\approx 4{,}081.49$, so

$$2\\times 4{,}081.49=8{,}162.98$$

Doubling the oven price doubles the deposit, so the statement is True.`,
      `**E) If the horizon were extended to 6 years at the same 7% rate, the required deposit today would be exactly half of \\$4,081.49.**  (false)

Doubling the horizon squares the growth factor rather than halving the deposit:

$$x=\\frac{5{,}000}{(1.07)^6}$$

$$(1.07)^6\\approx 1.500730$$

$$x\\approx 3{,}331.71$$

Half of $\\$4{,}081.49$ would be $\\$2{,}040.75$. Extra years help, but $(1.07)^3\\approx 1.225$ is well short of $2$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 81,
    solution_overview: `Ms. Delgado needs $\\$5{,}000$ in $3$ years. A single deposit today earns $7\\%$ annual interest.

$$A=5{,}000,\\qquad r=0.07,\\qquad n=3$$

The present deposit $x$ that grows into that target is

$$x=\\frac{A}{(1+r)^n}$$`,
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

A lump sum multiplies by the five-year growth factor:

$$F(5)=6{,}500(1.06)^5$$

$$(1.06)^5=1.338226$$

$$F(5)=6{,}500\\times 1.338226\\approx 8{,}698.47$$

That is the claimed five-year balance, so the statement is True.`,
      `**B) The interest earned during the first 5 years is approximately \\$2,198.47.**  (true)

Interest is the recovered balance minus the original deposit:

$$F(5)=6{,}500(1.06)^5\\approx 8{,}698.47$$

$$8{,}698.47-6{,}500=2{,}198.47$$

That is the claimed five-year interest, so the statement is True.`,
      `**C) The accumulated value after 10 years is exactly double the 5-year value.**  (false)

Ten years square the five-year factor; they do not double the balance:

$$F(10)=6{,}500(1.06)^{10}$$

$$(1.06)^{10}=1.790847$$

$$F(10)\\approx 11{,}640.51$$

Double the five-year value would be $2\\times 8{,}698.47=17{,}396.94$. Exact doubling would need $(1.06)^5=2$, so the statement is False.`,
      `**D) The interest earned during the SECOND 5-year period, approximately \\$2,942.04, is SMALLER than the interest earned during the FIRST 5-year period, approximately \\$2,198.47.**  (false)

The second block is the ten-year pile minus the five-year pile:

$$F(10)=6{,}500(1.06)^{10}\\approx 11{,}640.51$$

$$11{,}640.51-8{,}698.47=2{,}942.04$$

$$2{,}942.04>2{,}198.47$$

Years $6$ through $10$ earn interest on a larger balance, so the statement is False.`,
      `**E) If the interest rate were instead 3%, the 5-year accumulated value would be exactly half of \\$8,698.47.**  (false)

Halving the rate does not halve a compounded balance, because the principal is still returned in full:

$$F=6{,}500(1.03)^5$$

$$(1.03)^5\\approx 1.159274$$

$$F\\approx 7{,}535.28$$

Half of $\\$8{,}698.47$ would be $\\$4{,}349.24$. The lower rate still grows the deposit, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 82,
    solution_overview: `A designer deposits $\\$6{,}500$ today at $6\\%$ annual interest.

$$P=6{,}500,\\qquad r=0.06$$

A single present deposit accumulates according to

$$F=P(1+r)^n$$`,
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

The ordinary-annuity future-value formula with these inputs is

$$F_6=\\frac{2{,}000}{0.05}\\left[(1.05)^6-1\\right]$$

$$(1.05)^6=1.340096$$

$$F_6=40{,}000\\times 0.340096\\approx 13{,}603.84$$

That is the claimed six-year fund, so the statement is True.`,
      `**B) The total interest earned over the 6 years is approximately \\$1,703.84.**  (false)

Interest is future value minus total deposits. The six-year fund is $F_6\\approx 13{,}603.84$, and the deposits total

$$2{,}000\\times 6=12{,}000$$

$$13{,}603.84-12{,}000=1{,}603.84$$

The claimed $\\$1{,}703.84$ is $\\$100$ too high, so the statement is False.`,
      `**C) The present-value equivalent of this future value is approximately \\$18,230.45.**  (false)

Discounting a future pile divides by the growth factor:

$$P_6=\\frac{13{,}603.84}{(1.05)^6}$$

$$(1.05)^6=1.340096$$

$$P_6\\approx 10{,}151.40$$

The figure $\\$18{,}230.45$ is larger than the future value itself, the signature of multiplying by $(1.05)^6$ instead of dividing, so the statement is False.`,
      `**D) If the annual deposit were increased by 50%, to \\$3,000, the 6-year future value would also rise by exactly 50%, to approximately \\$21,405.76.**  (false)

Future value is linear in the deposit, so a $50\\%$ increase is the right scale, but

$$13{,}603.84\\times 1.5=20{,}405.76$$

The claimed $\\$21{,}405.76$ is $\\$1{,}000$ too high, so the statement is False.`,
      `**E) If the number of annual deposits were doubled to 12 years, the future value would be LESS than double \\$13,603.84.**  (false)

Extra years add extra deposits and extra compounding:

$$F_{12}=\\frac{2{,}000}{0.05}\\left[(1.05)^{12}-1\\right]$$

$$(1.05)^{12}\\approx 1.795856$$

$$F_{12}=40{,}000\\times 0.795856\\approx 31{,}834.24$$

Double the six-year value is $2\\times 13{,}603.84=27{,}207.68$. The twelve-year pile sits above that double, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 83,
    solution_overview: `A clinic deposits $\\$2{,}000$ at the end of each year for $6$ years at $5\\%$ annual interest.

$$a=2{,}000,\\qquad r=0.05,\\qquad n=6$$

The future value of an ordinary annuity is

$$F_n=\\frac{a}{r}\\left[(1+r)^n-1\\right]$$

Its present value is

$$P_n=\\frac{F_n}{(1+r)^n}$$`,
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

The ordinary-annuity future-value formula with these inputs is

$$F_{10}=\\frac{3{,}500}{0.08}\\left[(1.08)^{10}-1\\right]$$

$$(1.08)^{10}=2.158925$$

$$F_{10}=43{,}750\\times 1.158925\\approx 50{,}702.97$$

That is the claimed ten-year fund, so the statement is True.`,
      `**B) The total interest earned over the 10 years is approximately \\$15,702.97.**  (true)

Interest is future value minus total deposits. The ten-year fund is $F_{10}\\approx 50{,}702.97$, and the deposits total

$$3{,}500\\times 10=35{,}000$$

$$50{,}702.97-35{,}000=15{,}702.97$$

That is the claimed interest, so the statement is True.`,
      `**C) If the deposit period were extended to 20 years, the future value would be LESS than double \\$50,702.97.**  (false)

Twenty years more than double a growing annuity:

$$F_{20}=\\frac{3{,}500}{0.08}\\left[(1.08)^{20}-1\\right]$$

$$(1.08)^{20}\\approx 4.660957$$

$$F_{20}=43{,}750\\times 3.660957\\approx 160{,}166.87$$

Double the ten-year value is $2\\times 50{,}702.97=101{,}405.94$. The twenty-year pile sits far above that double, so the statement is False.`,
      `**D) The interest-only portion of the 10-year future value, approximately \\$15,702.97, exceeds the total principal deposited of \\$35,000.00.**  (false)

The interest portion is $50{,}702.97-35{,}000=15{,}702.97$. Compare it with the principal:

$$15{,}702.97<35{,}000$$

Interest is large, but it is still smaller than the principal that produced it, so the statement is False.`,
      `**E) If the interest rate rose to 10%, the 10-year future value would exceed \\$55,000.00.**  (true)

Rebuild the annuity at $10\\%$:

$$F_{10}=\\frac{3{,}500}{0.10}\\left[(1.10)^{10}-1\\right]$$

$$(1.10)^{10}=2.593742$$

$$F_{10}=35{,}000\\times 1.593742\\approx 55{,}780.97$$

$$55{,}780.97>55{,}000$$

The higher-rate fund clears $\\$55{,}000$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 84,
    solution_overview: `A logistics company deposits $\\$3{,}500$ at the end of each year for $10$ years at $8\\%$ annual interest.

$$a=3{,}500,\\qquad r=0.08,\\qquad n=10$$

The future value of an ordinary annuity is

$$F_n=\\frac{a}{r}\\left[(1+r)^n-1\\right]$$`,
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

The ordinary-annuity present-value formula with these inputs is

$$P_{15}=\\frac{2{,}400}{0.045}\\left[1-\\frac{1}{(1.045)^{15}}\\right]$$

$$(1.045)^{15}\\approx 1.935282$$

$$P_{15}=53{,}333.33\\times 0.483284\\approx 25{,}775.15$$

That is the claimed deposit, so the statement is True.`,
      `**B) The total nominal withdrawals over 15 years, \\$36,000.00, exceed the required deposit of \\$25,775.15, illustrating that future dollars are worth less than present dollars.**  (true)

The nominal withdrawals total

$$2{,}400\\times 15=36{,}000$$

The present-value fund is $P_{15}\\approx 25{,}775.15$. Then

$$36{,}000>25{,}775.15$$

Future dollars are discounted, so the statement is True.`,
      `**C) If withdrawals were extended to 30 years at the same rate, the present value would exactly double, to approximately \\$51,550.30.**  (false)

Later withdrawals are discounted harder, so doubling the term does not double present value:

$$P_{30}=\\frac{2{,}400}{0.045}\\left[1-\\frac{1}{(1.045)^{30}}\\right]$$

$$(1.045)^{30}\\approx 3.745318$$

$$P_{30}=53{,}333.33\\times 0.732998\\approx 39{,}091.65$$

Double the fifteen-year figure would be $\\$51{,}550.30$. Years $16$ through $30$ still add value, just not another full copy, so the statement is False.`,
      `**D) The gap between the total nominal withdrawals and today's required deposit, approximately \\$11,224.85, represents the total discount applied.**  (false)

The true gap is

$$36{,}000-25{,}775.15=10{,}224.85$$

The claimed $\\$11{,}224.85$ is $\\$1{,}000$ too high, so the statement is False.`,
      `**E) If the interest rate were higher, the required present-value deposit would be HIGHER than \\$25,775.15.**  (false)

A higher rate discounts future withdrawals more, so less cash is needed today. At $6\\%$:

$$P_{15}=\\frac{2{,}400}{0.06}\\left[1-\\frac{1}{(1.06)^{15}}\\right]$$

$$(1.06)^{15}\\approx 2.396558$$

$$P_{15}=40{,}000\\times 0.582735\\approx 23{,}309.40$$

$$23{,}309.40<25{,}775.15$$

The required deposit falls, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `A retiree withdraws $\\$2{,}400$ at the end of each year for $15$ years from an account earning $4.5\\%$ annual interest.

$$a=2{,}400,\\qquad r=0.045,\\qquad n=15$$

The present value of an ordinary annuity is

$$P_n=\\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right]$$`,
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

The ordinary-annuity present-value formula with these inputs is

$$P_{20}=\\frac{5{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^{20}}\\right]$$

$$(1.06)^{20}\\approx 3.207135$$

$$P_{20}=83{,}333.33\\times 0.688195\\approx 57{,}349.67$$

That is the claimed twenty-year fund, so the statement is True.`,
      `**B) The perpetuity value is approximately \\$83,333.33, exceeding the 20-year annuity's present value by approximately \\$25,983.66.**  (true)

A level perpetuity is

$$P=\\frac{5{,}000}{0.06}=83{,}333.33$$

The twenty-year fund is $P_{20}\\approx 57{,}349.67$, so the gap is

$$83{,}333.33-57{,}349.67=25{,}983.66$$

That gap is the value of scholarships from year $21$ onward, so the statement is True.`,
      `**C) The 20-year annuity's present value represents approximately 72.82% of the equivalent perpetuity value.**  (false)

The share is

$$\\frac{57{,}349.67}{83{,}333.33}\\approx 0.6882=68.82\\%$$

Twenty years at $6\\%$ capture a little more than two thirds of the perpetual fund, not $72.82\\%$, so the statement is False.`,
      `**D) If the term were extended to 40 years, the present value would rise to MORE than 95% of the perpetuity value.**  (false)

Forty years raise the share, but not that far:

$$P_{40}=\\frac{5{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^{40}}\\right]$$

$$(1.06)^{40}\\approx 10.285718$$

$$P_{40}=83{,}333.33\\times 0.902778\\approx 75{,}231.50$$

$$\\frac{75{,}231.50}{83{,}333.33}\\approx 0.9028=90.28\\%$$

That sits short of $95\\%$, so the statement is False.`,
      `**E) The perpetuity formula is obtained by letting the number of payments grow toward infinity in the annuity present-value formula, so that the value converges to \\$83,333.33 as the limiting value.**  (true)

As $n\\to\\infty$, the factor $(1.06)^{-n}$ vanishes, so

$$P_n\\to\\frac{a}{r}=\\frac{5{,}000}{0.06}=83{,}333.33$$

The perpetual fund is the ceiling the finite scholarships climb toward, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 86,
    solution_overview: `A nonprofit funds $\\$5{,}000$ scholarships at the end of each year for $20$ years at $6\\%$ annual interest, and compares that cost with the same payment in perpetuity.

$$a=5{,}000,\\qquad r=0.06,\\qquad n=20$$

For a finite ordinary annuity,

$$P_n=\\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right]$$

For a perpetuity the limit is

$$P=\\frac{a}{r}$$`,
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

Nine end-of-year payments of $\\$2{,}500$ at $7\\%$ discount by the ordinary-annuity formula:

$$P_9=\\frac{2{,}500}{0.07}\\left[1-\\frac{1}{(1.07)^9}\\right]$$

$$(1.07)^9\\approx 1.838459$$

$$P_9=35{,}714.29\\times 0.456069\\approx 16{,}288.18$$

That is the claimed present cost, so the statement is True.`,
      `**B) Because \\$16,288.18 is less than \\$18,000.00, Option 2 is the financially better choice, saving approximately \\$1,811.82.**  (false)

Option 2 is cheaper, but the saving is

$$18{,}000-16{,}288.18=1{,}711.82$$

The extra hundred dollars is a slip on an otherwise correct ranking, so the statement is False.`,
      `**C) If the interest rate were only 4%, Option 2's present value would be LOWER than \\$16,288.18, making Option 1 even less attractive by comparison.**  (false)

A lower rate discounts the instalments less, so Option 2's present value rises:

$$P_9=\\frac{2{,}500}{0.04}\\left[1-\\frac{1}{(1.04)^9}\\right]$$

$$(1.04)^9\\approx 1.423312$$

$$P_9=62{,}500\\times 0.297413\\approx 18{,}588.31$$

$$18{,}588.31>16{,}288.18$$

At $4\\%$ the instalment plan is even dearer than cash, so the statement is False.`,
      `**D) The total nominal payments under Option 2 over 9 years, \\$22,500.00, exceed the \\$18,000.00 lump-sum cost of Option 1 by \\$4,600.00.**  (false)

The nominal total is

$$2{,}500\\times 9=22{,}500$$

$$22{,}500-18{,}000=4{,}500$$

The extra hundred dollars is a slip on the undiscounted spread, so the statement is False.`,
      `**E) Option 1's \\$18,000.00, if invested today at 7% instead of used for the machinery, would grow after 9 years to a future value of more than \\$34,000.00.**  (false)

Grow the cash price forward:

$$F=18{,}000(1.07)^9$$

$$(1.07)^9\\approx 1.838459$$

$$F=18{,}000\\times 1.838459\\approx 33{,}092.26$$

That sits about $\\$908$ short of $\\$34{,}000$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 87,
    solution_overview: `A supplier offers two ways to pay for machinery: $\\$18{,}000$ today, or $\\$2{,}500$ at the end of each year for $9$ years. The comparison rate is $7\\%$.

$$a=2{,}500,\\qquad n=9,\\qquad r=0.07$$

The annuity present value and a lump-sum future value are

$$P_n=\\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right],\\qquad F=P(1+r)^n$$`,
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

A single $\\$12{,}000$ deposit grows by the lump-sum formula:

$$F_A=12{,}000(1.06)^8$$

$$(1.06)^8=1.593848$$

$$F_A=12{,}000\\times 1.593848=19{,}126.18$$

That is the claimed lump-sum pile, so the statement is True.`,
      `**B) Strategy B's future value after 8 years is approximately \\$14,856.46.**  (false)

Eight end-of-year deposits of $\\$1{,}400$ grow by the ordinary-annuity formula:

$$F_B=\\frac{1{,}400}{0.06}\\left[(1.06)^8-1\\right]$$

$$(1.06)^8=1.593848$$

$$F_B=23{,}333.33\\times 0.593848\\approx 13{,}856.46$$

The extra $\\$1{,}000$ in the claim is a transcription slip, so the statement is False.`,
      `**C) Strategy A yields a higher future value than Strategy B, by approximately \\$5,769.72.**  (false)

A does win, but the gap is

$$19{,}126.18-13{,}856.46=5{,}269.72$$

The extra $\\$500$ is what you get from pairing the correct $F_A$ with an inflated $F_B$, so the statement is False.`,
      `**D) The total cash committed under Strategy B over the 8 years, \\$11,200.00, is MORE than the \\$12,000.00 committed upfront under Strategy A.**  (false)

B's nominal deposits total

$$1{,}400\\times 8=11{,}200$$

$$11{,}200<12{,}000$$

A puts more cash in, not less, so the statement is False.`,
      `**E) If Strategy B's annual deposit were raised to \\$1,500, Strategy B's future value would still be LOWER than Strategy A's \\$19,126.18.**  (true)

Scaling the annuity is linear:

$$F_B'=\\frac{1{,}500}{0.06}\\left[(1.06)^8-1\\right]$$

$$F_B'=25{,}000\\times 0.593848\\approx 14{,}846.20$$

$$14{,}846.20<19{,}126.18$$

Raising the annual deposit by $\\$100$ is not enough to catch the lump sum, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 88,
    solution_overview: `A construction firm compares two $8$-year savings plans at $6\\%$ annual interest: deposit $\\$12{,}000$ today, or deposit $\\$1{,}400$ at the end of each year.

$$P=12{,}000,\\qquad a=1{,}400,\\qquad r=0.06,\\qquad n=8$$

The lump-sum and ordinary-annuity future values are

$$F=P(1+r)^n,\\qquad F_n=\\frac{a}{r}\\left[(1+r)^n-1\\right]$$`,
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

First form the ordinary six-year pile, then scale by $1.05$:

$$F=\\frac{3{,}000}{0.05}\\left[(1.05)^6-1\\right]$$

$$(1.05)^6=1.340096$$

$$F=60{,}000\\times 0.340096=20{,}405.76$$

$$F_{\\mathrm{due}}=20{,}405.76\\times 1.05=21{,}426.05$$

That is the claimed due future value, so the statement is True.`,
      `**B) If the same \\$3,000 deposits were instead made at the END of each year, the future value would be LOWER than the annuity-due result.**  (true)

End-of-year timing is the ordinary annuity $F=20{,}405.76$. The due result is $21{,}426.05$. Then

$$20{,}405.76<21{,}426.05$$

Every due payment has one extra period to grow, so the statement is True.`,
      `**C) The dollar gap between the annuity-due result and the ordinary-annuity result is approximately \\$1,120.29.**  (false)

The timing gap is one year's interest on the ordinary pile:

$$21{,}426.05-20{,}405.76=1{,}020.29$$

The claimed $\\$1{,}120.29$ is $\\$100$ too high, so the statement is False.`,
      `**D) If the number of deposits were doubled to 12 years, the annuity-due future value would also exactly double, to approximately \\$42,852.10.**  (false)

Doubling the horizon more than doubles a growing annuity:

$$F=\\frac{3{,}000}{0.05}\\left[(1.05)^{12}-1\\right]$$

$$(1.05)^{12}\\approx 1.795856$$

$$F=60{,}000\\times 0.795856=47{,}751.36$$

$$F_{\\mathrm{due}}=47{,}751.36\\times 1.05=50{,}138.93$$

Twice the six-year due value is $\\$42{,}852.10$. Extra deposits in years $7$ through $12$ themselves earn interest, so the statement is False.`,
      `**E) Because each payment in an annuity due occurs one period earlier than in an ordinary annuity, the annuity-due future value exceeds the ordinary-annuity future value by exactly one extra year's worth of interest growth, regardless of the number of payments or the interest rate.**  (true)

The identity

$$F_{\\mathrm{due}}=F_{\\mathrm{ordinary}}(1+r)$$

does not use the horizon. Every payment is shifted one period earlier, so the whole pile is scaled by $1+r$ whether $n$ is $6$ or $12$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 89,
    solution_overview: `A gym owner deposits $\\$3{,}000$ at the beginning of each year for $6$ years at $5\\%$ annual interest, an annuity due.

$$a=3{,}000,\\qquad r=0.05,\\qquad n=6$$

The ordinary-annuity future value is

$$F_n=\\frac{a}{r}\\left[(1+r)^n-1\\right]$$

Moving every deposit one period earlier multiplies that value by one more growth factor:

$$F_{\\mathrm{due}}=F_n(1+r)$$`,
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

First value five end-of-year payments, then scale by $1.06$:

$$P=\\frac{24{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^5}\\right]$$

$$(1.06)^5=1.338226$$

$$P=400{,}000\\times 0.252742=101{,}096.80$$

$$P_{\\mathrm{due}}=101{,}096.80\\times 1.06=107{,}162.61$$

That is the claimed lease present value, so the statement is True.`,
      `**B) If the same \\$24,000 payments were instead due at the END of each year, the present value would be LOWER than the annuity-due result.**  (true)

End-of-year timing is the ordinary present value $P=101{,}096.80$. The due result is $107{,}162.61$. Then

$$101{,}096.80<107{,}162.61$$

Payments that arrive later are worth less today, so the statement is True.`,
      `**C) The dollar gap between the annuity-due present value and the ordinary-annuity present value is approximately \\$7,065.81.**  (false)

The timing gap is one year's interest on the ordinary present value:

$$107{,}162.61-101{,}096.80=6{,}065.81$$

The claimed $\\$7{,}065.81$ is $\\$1{,}000$ too high, so the statement is False.`,
      `**D) If the lease term were extended to 10 years, the annuity-due present value would also exactly double, to approximately \\$214,325.22.**  (false)

Later rent is discounted harder, so doubling the term does not double present value:

$$P=\\frac{24{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^{10}}\\right]$$

$$(1.06)^{10}\\approx 1.790848$$

$$P=400{,}000\\times 0.441605=176{,}642.00$$

$$P_{\\mathrm{due}}=176{,}642.00\\times 1.06=187{,}240.52$$

Twice the five-year due value is $\\$214{,}325.22$. Years $6$ through $10$ still add value, just not another full copy, so the statement is False.`,
      `**E) The annuity-due present value can also be computed as the first \\$24,000 payment plus the present value of an ordinary annuity of the remaining 4 payments.**  (true)

The first rent is due immediately, so it is not discounted:

$$P_{\\mathrm{due}}=24{,}000+\\frac{24{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^4}\\right]$$

$$(1.06)^4=1.262477$$

$$P_{\\mathrm{due}}=24{,}000+400{,}000\\times 0.207906=24{,}000+83{,}162.40$$

$$P_{\\mathrm{due}}=107{,}162.40$$

That matches the $1.06$-scaled ordinary five-year value within rounding, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 90,
    solution_overview: `A $5$-year commercial lease requires $\\$24{,}000$ at the beginning of each year. The landlord's opportunity cost of capital is $6\\%$.

$$a=24{,}000,\\qquad r=0.06,\\qquad n=5$$

The ordinary-annuity present value is

$$P_n=\\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right]$$

An annuity due moves every payment one period earlier:

$$P_{\\mathrm{due}}=P_n(1+r)$$

An equivalent split is the first payment plus the remaining ordinary annuity:

$$P_{\\mathrm{due}}=a+P_{n-1}$$`,
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

Just before the first payment, a level perpetuity is

$$V=\\frac{10{,}000}{0.06}=166{,}666.67$$

That is the fund's value at the end of year $4$, one year before the first $\\$10{,}000$ check, so the statement is True.`,
      `**B) Discounting this year-4 value back 4 years to today at 6% gives a present value of approximately \\$132,015.61.**  (true)

Bring the year-$4$ fund back through four years:

$$PV_0=\\frac{166{,}666.67}{(1.06)^4}$$

$$(1.06)^4=1.262477$$

$$PV_0=\\frac{166{,}666.67}{1.262477}\\approx 132{,}015.61$$

That is the claimed donation today, so the statement is True.`,
      `**C) If the first payment instead began immediately at the end of year 1, today's present value would be LOWER than the deferred value of \\$132,015.61.**  (false)

An immediate perpetuity is worth the full year-$0$ amount

$$\\frac{10{,}000}{0.06}=166{,}666.67$$

$$166{,}666.67>132{,}015.61$$

Starting sooner raises present value. Deferral is a discount, so the statement is False.`,
      `**D) If the deferral were extended so the first payment begins at the end of year 9, today's present value would be LESS than half of \\$132,015.61.**  (false)

A year-$9$ start is valued at year $8$ and then discounted eight years:

$$PV_0'=\\frac{166{,}666.67}{(1.06)^8}$$

$$(1.06)^8=1.593848$$

$$PV_0'\\approx 104{,}568.80$$

Half of $\\$132{,}015.61$ would be $\\$66{,}007.81$. Extra years of deferral help, but not by half, so the statement is False.`,
      `**E) The ratio of the deferred present value to the immediate perpetuity value is exactly 0.8321.**  (false)

That ratio is exactly the four-year discount factor:

$$\\frac{PV_0}{V}=\\frac{1}{(1.06)^4}$$

$$(1.06)^{-4}\\approx 0.7921$$

Four years at $6\\%$ leave about $79\\%$ of the immediate perpetuity, not $83.21\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 91,
    solution_overview: `A fund will pay $\\$10{,}000$ at the end of each year forever, with the first payment at the end of year $5$. The annual rate is $6\\%$.

$$a=10{,}000,\\qquad r=0.06$$

A perpetuity is valued one period before its first payment:

$$V=\\frac{a}{r}$$

A value at year $k$ is brought back to today by

$$PV_0=\\frac{V}{(1+r)^k}$$`,
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

A level preferred dividend is

$$P=\\frac{4.25}{0.07}\\approx 60.71$$

The required return belongs in the denominator, so the statement is True.`,
      `**B) At a market price of \\$65.00, the preferred stock is undervalued relative to its fair value.**  (false)

Compare the sticker with the recovered fair value:

$$65.00>60.71$$

The stock trades above its dividend-discount price, so the statement is False.`,
      `**C) If the required return fell to 4%, the fair value would rise to \\$116.25 per share.**  (false)

A lower required return does raise the price, but

$$P'=\\frac{4.25}{0.04}=106.25$$

Cutting the yield from $7\\%$ to $4\\%$ scales the price by $\\frac{0.07}{0.04}=1.75$, which lands on $\\$106.25$, not $\\$116.25$, so the statement is False.`,
      `**D) This drop in the required return, from 7% to 4%, increases the fair value by MORE than 75%.**  (false)

The proportional lift is

$$\\frac{106.25-60.714286}{60.714286}=0.75$$

The increase is exactly $75\\%$, not more, so the statement is False.`,
      `**E) If instead the dividend were cut by 20% while the required return stayed at 7%, the fair value would fall to exactly \\$50.57.**  (false)

Fair value is linear in the dividend:

$$a'=4.25\\times 0.80=3.40$$

$$P''=\\frac{3.40}{0.07}\\approx 48.57$$

A $20\\%$ dividend cut produces a $20\\%$ price cut to about $\\$48.57$, not $\\$50.57$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 92,
    solution_overview: `A preferred stock pays $\\$4.25$ per share each year forever. Investors require a $7\\%$ annual return, and the market price is $\\$65.00$.

$$a=4.25,\\qquad r=0.07$$

The fair value of a level perpetuity is

$$P=\\frac{a}{r}$$`,
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

Level maintenance of $\\$15{,}000$ at $4.5\\%$ is

$$P=\\frac{15{,}000}{0.045}=333{,}333.33$$

That figure is the park's ongoing fund only, so the statement is True.`,
      `**B) Including the \\$50,000 immediate renovation cost, the total amount the city must set aside today is approximately \\$383,333.33.**  (true)

Add the renovation to the perpetuity:

$$50{,}000+333{,}333.33=383{,}333.33$$

One piece is immediate cash and the other is a discounted infinite stream, so the statement is True.`,
      `**C) If the interest rate were instead 6%, the total required funding would be approximately \\$300,000.00.**  (true)

A higher rate cheapens only the perpetuity:

$$P'=\\frac{15{,}000}{0.06}=250{,}000$$

$$50{,}000+250{,}000=300{,}000$$

The renovation does not shrink with the rate, so the statement is True.`,
      `**D) This 1.5-percentage-point rate increase reduces the total funding requirement by MORE than 25%.**  (false)

The dollar cut is

$$383{,}333.33-300{,}000=83{,}333.33$$

$$\\frac{83{,}333.33}{383{,}333.33}\\approx 0.2174=21.74\\%$$

The renovation is a fixed $\\$50{,}000$ that does not participate in the rate change, so the statement is False.`,
      `**E) If the council only needed the perpetuity and the rate were 6%, the required funding would be LESS than half of the original combined 4.5%-rate total.**  (false)

Half of the original combined total is

$$\\frac{383{,}333.33}{2}=191{,}666.67$$

The $6\\%$ maintenance fund is $\\$250{,}000$. Then

$$250{,}000>191{,}666.67$$

Dropping the renovation and raising the rate both help, but not enough to cut the original combined total in half, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 93,
    solution_overview: `A city needs $\\$15{,}000$ per year forever, starting one year from now, plus $\\$50{,}000$ paid today for an immediate renovation. The annual rate is $4.5\\%$.

$$a=15{,}000,\\qquad r=0.045$$

The maintenance perpetuity is worth

$$P=\\frac{a}{r}$$

The total requirement adds the immediate renovation cost to that value.`,
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

The growing-perpetuity formula with these inputs is

$$P=\\frac{24{,}000}{0.08-0.025}$$

$$P=\\frac{24{,}000}{0.055}=436{,}363.64$$

The spread $r-g$ is the whole model, so the statement is True.`,
      `**B) If the cash flows did NOT grow, the plain-perpetuity fair value, \\$300,000.00, is HIGHER than the growing-perpetuity value of \\$436,363.64.**  (false)

No growth uses $r$ alone in the denominator:

$$P=\\frac{24{,}000}{0.08}=300{,}000$$

$$300{,}000<436{,}363.64$$

Growth raises value when $g<r$, so the statement is False.`,
      `**C) If the growth rate rose to 4%, the fair value would MORE than double, to over \\$872,727.28.**  (false)

Faster growth does raise the price:

$$P'=\\frac{24{,}000}{0.08-0.04}=600{,}000$$

Double the original value would be $2\\times 436{,}363.64=872{,}727.28$. Closing $r-g$ from $5.5\\%$ to $4\\%$ scales the price by $\\frac{0.055}{0.04}=1.375$, not by $2$, so the statement is False.`,
      `**D) If the required return instead fell to 6%, the fair value would be approximately \\$715,714.29.**  (false)

A lower required return does raise the price, but

$$P''=\\frac{24{,}000}{0.06-0.025}=\\frac{24{,}000}{0.035}=685{,}714.29$$

The extra $\\$30{,}000$ is a slip on the new denominator $r-g=0.035$, so the statement is False.`,
      `**E) The growing-perpetuity valuation is only valid when the growth rate is below the required return; if the growth rate were to equal or exceed the 8% required return, the formula could not be used.**  (true)

The denominator $r-g$ has to stay positive. At $g=r$ it vanishes and the model explodes; above that the constant-growth story is no longer a convergent perpetuity. That is a domain restriction, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 94,
    solution_overview: `A rental property generates $\\$24{,}000$ at the end of year $1$, growing at $2.5\\%$ per year forever. The required return is $8\\%$.

$$a_1=24{,}000,\\qquad g=0.025,\\qquad r=0.08$$

For a growing perpetuity with $r>g$,

$$P=\\frac{a_1}{r-g}$$`,
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

Gordon growth uses next year's dividend:

$$D_1=3.00\\times 1.03=3.09$$

The $3\\%$ growth has to be applied once before the perpetuity formula, so the statement is True.`,
      `**B) The fair value per share is approximately \\$54.50.**  (false)

With $D_1=3.09$ and $r-g=0.06$,

$$P=\\frac{3.09}{0.09-0.03}=\\frac{3.09}{0.06}=51.50$$

The extra $\\$3$ in the claim is not the recovered pair, so the statement is False.`,
      `**C) Mistakenly using the just-paid dividend instead of next year's dividend understates the correct fair value by \\$2.50.**  (false)

The mistaken price is

$$\\frac{3.00}{0.06}=50.00$$

$$51.50-50.00=1.50$$

Skipping the one-year growth step costs $\\$1.50$, not $\\$2.50$, so the statement is False.`,
      `**D) If the growth rate were instead 5%, the fair value would be MORE than double \\$51.50.**  (false)

At $5\\%$ growth,

$$D_1'=3.00\\times 1.05=3.15$$

$$P'=\\frac{3.15}{0.09-0.05}=\\frac{3.15}{0.04}=78.75$$

Double $\\$51.50$ would be $\\$103$. Closing $r-g$ from $6\\%$ to $4\\%$ scales the price, it does not double it, so the statement is False.`,
      `**E) If the growth rate equaled the required return exactly, the growing-perpetuity valuation would yield a present value of exactly \\$0.00.**  (false)

At $g=r$ the denominator vanishes and the model explodes toward infinity; it does not collapse to zero. Zero would be the price of a stock that never pays. The boundary $g=r$ is a breakdown of the formula, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 95,
    solution_overview: `A stock just paid $D_0=\\$3.00$. Dividends grow at $3\\%$ forever, and the required return is $9\\%$.

$$D_0=3.00,\\qquad g=0.03,\\qquad r=0.09$$

Next year's dividend is

$$D_1=D_0(1+g)$$

The Gordon growth price is

$$P=\\frac{D_1}{r-g}$$`,
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

A level $\\$18{,}000$ royalty at $10\\%$ is worth

$$P_1=\\frac{18{,}000}{0.10}=180{,}000$$

$$180{,}000>170{,}000$$

Fair value sits $\\$10{,}000$ above the sticker, so the statement is True.`,
      `**B) Deal 2's fair value exceeds its asking price by more than \\$60,000.00.**  (true)

Deal $2$ is a growing perpetuity:

$$P_2=\\frac{14{,}000}{0.10-0.04}=\\frac{14{,}000}{0.06}=233{,}333.33$$

$$233{,}333.33-170{,}000=63{,}333.33$$

That cushion clears $\\$60{,}000$, so the statement is True.`,
      `**C) Deal 1 offers the larger "margin of safety" of the two deals.**  (false)

The two cushions are $\\$10{,}000$ for Deal $1$ and $\\$63{,}333$ for Deal $2$. Then

$$63{,}333.33>10{,}000$$

Deal $2$ is the wider margin, so the statement is False.`,
      `**D) If Deal 2's growth rate were instead only 1%, its fair value would fall below its asking price.**  (true)

Cutting growth to $1\\%$ raises the denominator $r-g$ to $0.09$:

$$P_2'=\\frac{14{,}000}{0.10-0.01}=\\frac{14{,}000}{0.09}\\approx 155{,}555.56$$

$$155{,}555.56<170{,}000$$

Slow growth turns the bargain into an overpay, so the statement is True.`,
      `**E) Comparing the two original deals, Deal 1's fair value is MORE than Deal 2's fair value.**  (false)

The recovered prices are $\\$180{,}000$ against $\\$233{,}333$. Then

$$180{,}000<233{,}333.33$$

Growth more than makes up for Deal $2$'s smaller opening royalty, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 96,
    solution_overview: `Two royalty deals are each priced at $\\$170{,}000$ and each requires a $10\\%$ return. Deal $1$ is a level $\\$18{,}000$ perpetuity. Deal $2$ starts at $\\$14{,}000$ next year and grows at $4\\%$ forever.

$$a=18{,}000,\\qquad a_1=14{,}000,\\qquad g=0.04,\\qquad r=0.10$$

The level and growing perpetuity formulas are

$$P=\\frac{a}{r},\\qquad P=\\frac{a_1}{r-g}$$`,
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

Continuous discounting packs twelve years into the exponent:

$$-rt=-0.055\\times 12=-0.66$$

$$S_0=250{,}000e^{-0.66}$$

$$e^{-0.66}\\approx 0.516855$$

$$S_0=250{,}000\\times 0.516855=129{,}213.75$$

That is the claimed continuous deposit, so the statement is True.`,
      `**B) This continuously compounded present value is HIGHER than the present value using ordinary annual compounding at the same 5.5% nominal rate.**  (false)

Continuous compounding grows money faster, so it discounts a future bill harder. Annual compounding needs

$$S_0=\\frac{250{,}000}{(1.055)^{12}}$$

$$(1.055)^{12}\\approx 1.901209$$

$$S_0\\approx 131{,}495.10$$

$$131{,}495.10>129{,}213.75$$

The continuous deposit is the smaller of the two, so the statement is False.`,
      `**C) The difference between the annual-compounding present value and the continuous-compounding present value is approximately \\$4,280.35.**  (false)

The two recovered deposits differ by

$$131{,}495.10-129{,}213.75=2{,}281.35$$

The claimed figure is almost double the true gap, so the statement is False.`,
      `**D) If the horizon were shortened to 6 years at the same continuous 5.5% rate, the present value required today would be LESS than half of \\$129,213.75.**  (false)

A shorter wait raises present value:

$$S_0'=250{,}000e^{-0.055\\times 6}$$

$$e^{-0.33}\\approx 0.718924$$

$$S_0'=250{,}000\\times 0.718924=179{,}731.00$$

Half of $\\$129{,}213.75$ would be $\\$64{,}606.88$. Halving the horizon cannot halve a discounted bill that is already a present value, so the statement is False.`,
      `**E) The continuously compounded annual discount factor is approximately 0.9465, meaning about 5.35% of value is "lost" to discounting each year.**  (true)

One year of continuous $5.5\\%$ is

$$e^{-0.055}\\approx 0.9465$$

About $5.35\\%$ of a future dollar disappears each year, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 97,
    solution_overview: `A company needs $\\$250{,}000$ in $12$ years. The account offers continuous compounding at a nominal $5.5\\%$ annual rate.

$$S(t)=250{,}000,\\qquad r=0.055,\\qquad t=12$$

Under continuous compounding,

$$S_0=S(t)e^{-rt}$$

Under ordinary annual compounding,

$$S_0=\\frac{S(t)}{(1+r)^t}$$`,
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

Nine years at a continuous $6.25\\%$ is the exponent

$$rt=0.0625\\times 9=0.5625$$

$$S_{\\mathrm{cont}}=75{,}000e^{0.5625}\\approx 131{,}629.13$$

That is the claimed continuous pile, so the statement is True.`,
      `**B) The annuity's future value is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.**  (true)

The ordinary-annuity future-value formula with these inputs is

$$F_9=\\frac{8{,}333.33}{0.0625}\\left[(1.0625)^9-1\\right]$$

$$F_9\\approx 96{,}757.60$$

$$96{,}757.60<131{,}629.13$$

The annuity's later deposits barely have time to compound, so the statement is True.`,
      `**C) The lump-sum strategy outperforms the annuity strategy by more than \\$30,000.00.**  (true)

The two recovered piles differ by

$$131{,}629.13-96{,}757.60=34{,}871.53$$

$$34{,}871.53>30{,}000$$

The full $\\$75{,}000$ earns interest from day one, so the statement is True.`,
      `**D) This gap arises largely because the lump sum earns interest on the FULL \\$75,000 from day one, while the annuity's later deposits earn interest for only a very short time before the horizon ends.**  (true)

No new arithmetic is required. The last annuity deposit sits in the account for almost no time, while the lump sum compounds for all nine years. That timing mismatch is why the $\\$34{,}872$ gap exists, so the statement is True.`,
      `**E) If the company had instead invested the full \\$75,000 using discrete ANNUAL compounding at the same 6.25% rate for 9 years, the result would EXCEED the annuity strategy's future value of \\$96,757.60.**  (true)

A discrete lump sum grows by

$$S_{\\mathrm{discrete}}=75{,}000(1.0625)^9\\approx 129{,}426.15$$

$$129{,}426.15>96{,}757.60$$

Even without continuous compounding, investing the whole $\\$75{,}000$ on day one beats feeding it in over nine years, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 98,
    solution_overview: `A biotech company sets aside $\\$75{,}000$ today for $9$ years at a continuously compounded $6.25\\%$ nominal rate, and compares that with nine year-end deposits of $\\$8{,}333.33$ at a discrete $6.25\\%$ annual rate.

$$P=75{,}000,\\qquad r=0.0625,\\qquad t=9,\\qquad a=8{,}333.33$$

The continuous lump sum, ordinary-annuity future value, and discrete lump sum are

$$S=Pe^{rt},\\qquad F_n=\\frac{a}{r}\\left[(1+r)^n-1\\right],\\qquad S=P(1+r)^n$$`,
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

First form the ordinary present value, then scale by $1.08$:

$$P=\\frac{4{,}200}{0.08}\\left[1-\\frac{1}{(1.08)^5}\\right]$$

$$(1.08)^5=1.469328$$

$$P=52{,}500\\times 0.319417\\approx 16{,}769.39$$

$$P_{\\mathrm{due}}=16{,}769.39\\times 1.08=18{,}110.94$$

That is the claimed lease present value, so the statement is True.`,
      `**B) The future value of these 5 annuity-due payments, evaluated at the end of year 5, is approximately \\$27,610.90.**  (false)

The due future-value formula is

$$F_{\\mathrm{due}}=\\frac{4{,}200}{0.08}\\left[(1.08)^5-1\\right](1.08)$$

$$(1.08)^5=1.469328$$

$$F_{\\mathrm{due}}=52{,}500\\times 0.469328\\times 1.08=26{,}610.90$$

The extra $\\$1{,}000$ in the claim is a transcription slip, so the statement is False.`,
      `**C) The \\$20,000 investment under continuous compounding at a nominal 6% rate accumulates, after 7 years, to approximately \\$31,439.24.**  (false)

Seven years at continuous $6\\%$ is

$$rt=0.06\\times 7=0.42$$

$$S=20{,}000e^{0.42}\\approx 30{,}439.24$$

The extra $\\$1{,}000$ is a transcription slip, so the statement is False.`,
      `**D) The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value that is LESS than double the present value of the 5-year annuity-due lease payments.**  (false)

The perpetuity is

$$P_{\\mathrm{perp}}=\\frac{3{,}000}{0.08}=37{,}500$$

Double the lease present value is $2\\times 18{,}110.94=36{,}221.88$. Then

$$37{,}500>36{,}221.88$$

An infinite $8\\%$ stream is heavier than five due payments at the same rate, so the statement is False.`,
      `**E) Comparing the accumulated continuous-compounding investment after 7 years to the perpetuity's present value, the continuous-compounding result is LARGER.**  (false)

The recovered pair is $S\\approx 30{,}439.24$ against $P_{\\mathrm{perp}}=37{,}500$. Then

$$30{,}439.24<37{,}500$$

Seven years of continuous $6\\%$ on $\\$20{,}000$ does not overtake a $\\$3{,}000$ perpetual reserve at $8\\%$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 99,
    solution_overview: `Three separate arrangements: an annuity due of $\\$4{,}200$ at the start of each year for $5$ years at $8\\%$; a $\\$20{,}000$ continuous investment for $7$ years at a nominal $6\\%$; and a $\\$3{,}000$ perpetuity at $8\\%$.

$$a=4{,}200,\\qquad n=5,\\qquad r_{\\mathrm{due}}=0.08$$

$$P=20{,}000,\\qquad t=7,\\qquad r_{\\mathrm{cont}}=0.06$$

The annuity-due, continuous, and perpetuity formulas are

$$P_{\\mathrm{due}}=\\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right](1+r),\\qquad F_{\\mathrm{due}}=\\frac{a}{r}\\left[(1+r)^n-1\\right](1+r)$$

$$S=Pe^{rt},\\qquad P_{\\mathrm{perp}}=\\frac{a}{r}$$`,
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

Ten years at continuous $5\\%$ is

$$S=150{,}000e^{0.05\\times 10}$$

$$e^{0.5}\\approx 1.648721$$

$$S=150{,}000\\times 1.648721=247{,}308.20$$

That is the claimed continuous pile, so the statement is True.`,
      `**B) Component 2's required deposit today, using discrete annual compounding, is approximately \\$57,396.85.**  (false)

A future $\\$80{,}000$ bill at $6\\%$ for six years discounts by

$$x=\\frac{80{,}000}{(1.06)^6}$$

$$(1.06)^6=1.418519$$

$$x\\approx 56{,}396.85$$

The extra $\\$1{,}000$ is a transcription slip, so the statement is False.`,
      `**C) Component 3's present value, the 12-year ordinary annuity of \\$10,000 at 7%, is approximately \\$79,429.40.**  (true)

The ordinary-annuity present-value formula with these inputs is

$$P_{12}=\\frac{10{,}000}{0.07}\\left[1-\\frac{1}{(1.07)^{12}}\\right]$$

$$(1.07)^{12}\\approx 2.252192$$

$$P_{12}\\approx 79{,}429.40$$

That is the claimed settlement present value, so the statement is True.`,
      `**D) Component 4's present value, the growing perpetuity paying \\$5,000 next year and growing at 2% forever at a 7% required return, is exactly \\$100,000.00.**  (true)

The growing-perpetuity formula is

$$P=\\frac{5{,}000}{0.07-0.02}=\\frac{5{,}000}{0.05}=100{,}000$$

The round $\\$100{,}000$ is exact, so the statement is True.`,
      `**E) Summing the present-day resources committed to all four components - Component 1's initial investment, Component 2's required deposit today, Component 3's present value, and Component 4's present value - the total exceeds \\$500,000.00.**  (false)

Present-day resources are the opening $\\$150{,}000$ plus the three present values, not Component $1$'s future $\\$247{,}308$:

$$150{,}000+56{,}396.85+79{,}429.40+100{,}000=385{,}826.25$$

$$385{,}826.25<500{,}000$$

Treating a future accumulated value as a present-day outlay is how the total would be pushed over the cutoff, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 100,
    solution_overview: `Four separate tools: $\\$150{,}000$ invested continuously at $5\\%$ for $10$ years; a $\\$80{,}000$ target in $6$ years at a discrete $6\\%$; a $12$-year ordinary annuity of $\\$10{,}000$ at $7\\%$; and a growing perpetuity of $\\$5{,}000$ next year, growing at $2\\%$, required return $7\\%$.

$$P=150{,}000,\\qquad r=0.05,\\qquad t=10$$

$$A=80{,}000,\\qquad n=6,\\qquad r=0.06$$

$$a=10{,}000,\\qquad n=12,\\qquad r=0.07$$

$$a_1=5{,}000,\\qquad g=0.02,\\qquad r=0.07$$

The four formulas are

$$S=Pe^{rt},\\qquad x=\\frac{A}{(1+r)^n},\\qquad P_n=\\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right],\\qquad P=\\frac{a_1}{r-g}$$`,
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

The loan quotes $12\\%$ per year with annual instalments, so the periodic rate in the payment formula is

$$r=0.12$$

Annual payments keep the annual rate intact. Dividing by $12$ would be a monthly schedule this van loan does not have, so the statement is True.`,
      `**B) The required equal annual payment is approximately \\$14,593.54.**  (true)

Substitute the loan terms into the payment formula:

$$a=\\frac{0.12\\times 60{,}000}{1-(1.12)^{-6}}$$

$$(1.12)^6\\approx 1.973823$$

$$a=\\frac{7{,}200}{0.493369}\\approx 14{,}593.54$$

That is the claimed instalment, so the statement is True.`,
      `**C) The interest portion of the first payment is exactly \\$7,200.00.**  (true)

Interest in year $1$ is the opening balance times the rate:

$$0.12\\times 60{,}000=7{,}200$$

It does not depend on the payment size. Charging $12\\%$ of the instalment would be interest on the payment instead of on the loan, so the statement is True.`,
      `**D) The principal-repayment portion of the first payment is more than half of the total payment amount.**  (true)

Principal in year $1$ is the instalment minus that interest:

$$a\\approx 14{,}593.54$$

$$14{,}593.54-7{,}200=7{,}393.54$$

$$\\frac{14{,}593.54}{2}=7{,}296.77$$

$$7{,}393.54>7{,}296.77$$

Principal clears the halfway mark, so the statement is True.`,
      `**E) The outstanding balance immediately after the second payment is approximately \\$45,000.00.**  (false)

Roll the amortization through year $2$. After year $1$ the balance is $60{,}000-7{,}393.54=52{,}606.46$. Then

$$0.12\\times 52{,}606.46=6{,}312.77$$

$$14{,}593.54-6{,}312.77=8{,}280.77$$

$$52{,}606.46-8{,}280.77=44{,}325.69$$

The $\\$45{,}000$ figure is a tidy $\\$15{,}000$-per-year guess, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 101,
    solution_overview: `A bakery-supply distributor borrows $\\$60{,}000$, repaid in $6$ equal year-end instalments at $12\\%$ annual interest.

$$K=60{,}000,\\qquad r=0.12,\\qquad n=6$$

The equal annual payment is

$$a=\\frac{rK}{1-(1+r)^{-n}}$$

Each year's interest is the opening balance times the rate. Principal repaid is the payment less interest, and the new balance is the old balance less principal repaid.`,
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

A $9\\%$ nominal rate charged monthly is split evenly across twelve dates:

$$r=\\frac{0.09}{12}=0.0075=0.75\\%$$

Using $9\\%$ itself as the monthly rate would overstate every payment, so the statement is True.`,
      `**B) The required monthly payment is approximately \\$597.24.**  (true)

Forty-eight months at $0.75\\%$ on $\\$24{,}000$ invert by

$$n=4\\times 12=48$$

$$a=\\frac{0.0075\\times 24{,}000}{1-(1.0075)^{-48}}$$

$$a=\\frac{180}{0.301329}\\approx 597.24$$

That is the claimed monthly instalment, so the statement is True.`,
      `**C) The total amount paid over all 48 monthly payments is approximately \\$29,500.00.**  (false)

Forty-eight copies of the recovered payment are

$$597.24\\times 48\\approx 28{,}667.57$$

$$28{,}667.57<29{,}500$$

The extra $\\$832$ is a rounded-up stand-in, so the statement is False.`,
      `**D) The total interest paid over the life of the loan is approximately \\$4,667.57.**  (true)

Interest is total paid minus principal:

$$28{,}667.57-24{,}000=4{,}667.57$$

Someone who took $9\\%\\times 4\\times 24{,}000=8{,}640$ would be quoting simple interest, so the statement is True.`,
      `**E) If the same \\$24,000 were instead repaid in 4 equal annual instalments at the same nominal 9% rate, the required annual payment would be less than \\$2,388.96.**  (false)

Four annual payments at $9\\%$ invert by

$$a=\\frac{0.09\\times 24{,}000}{1-(1.09)^{-4}}$$

$$a=\\frac{2{,}160}{0.291676}\\approx 7{,}408.05$$

$$7{,}408.05>2{,}388.96$$

The smaller figure is roughly four monthly payments of $\\$597$, as if a year contained four months, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 102,
    solution_overview: `A dealership finances $\\$24{,}000$ over $4$ years with equal month-end payments at a $9\\%$ nominal annual rate, compounded monthly.

$$K=24{,}000,\\qquad r_{\\mathrm{ann}}=0.09,\\qquad m=12,\\qquad t=4$$

The monthly rate, number of payments, and equal-payment formula are

$$r=\\frac{r_{\\mathrm{ann}}}{12},\\qquad n=12t,\\qquad a=\\frac{rK}{1-(1+r)^{-n}}$$`,
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

Substitute the loan terms:

$$a=\\frac{0.10\\times 45{,}000}{1-(1.10)^{-5}}$$

$$(1.10)^5=1.610510$$

$$a=\\frac{4{,}500}{0.379079}\\approx 11{,}870.89$$

That is the claimed instalment, so the statement is True.`,
      `**B) The interest portion of the first payment is \\$5,000.00.**  (false)

Year-$1$ interest is the opening balance times the rate:

$$0.10\\times 45{,}000=4{,}500$$

The extra $\\$500$ is $10\\%$ of a round $\\$50{,}000$ loan that this renovation is not, so the statement is False.`,
      `**C) The outstanding balance immediately after the third payment is approximately \\$20,602.37.**  (true)

Roll three principal portions off the $\\$45{,}000$. Year $1$ principal is $11{,}870.89-4{,}500=7{,}370.89$, leaving $37{,}629.11$. Year $2$ interest is $3{,}762.91$, principal $8{,}107.98$, leaving $29{,}521.14$. Year $3$ interest is $2{,}952.11$, principal $8{,}918.77$, so

$$29{,}521.14-8{,}918.77=20{,}602.37$$

That is the claimed remaining balance, so the statement is True.`,
      `**D) In the fourth year, the interest portion of the payment is larger than the principal portion of the payment.**  (false)

By year $4$ the balance is $20{,}602.37$, so

$$0.10\\times 20{,}602.37=2{,}060.24$$

$$11{,}870.89-2{,}060.24=9{,}810.65$$

$$2{,}060.24<9{,}810.65$$

This five-year $10\\%$ schedule has already flipped well before year $4$, so the statement is False.`,
      `**E) Adding up the principal-repayment portions of all 5 payments gives a total of exactly \\$46,200.00.**  (false)

Principal portions have to sum to the original loan:

$$7{,}370.89+8{,}107.98+8{,}918.77+9{,}810.65+10{,}791.72=45{,}000$$

The extra $\\$1{,}200$ would count some interest as principal, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 103,
    solution_overview: `A restaurant owner borrows $\\$45{,}000$, repaid in $5$ equal year-end instalments at $10\\%$ annual interest.

$$K=45{,}000,\\qquad r=0.10,\\qquad n=5$$

The equal annual payment is

$$a=\\frac{rK}{1-(1+r)^{-n}}$$

Each year's interest equals the rate times the opening balance. Principal repaid equals payment less interest, and the closing balance equals the opening balance less principal.`,
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

An annuity due of ten payments is $1$ plus nine discounted ordinary payments:

$$\\frac{K}{a}=1+\\frac{1}{0.11}\\left[1-(1.11)^{-9}\\right]$$

$$(1.11)^9\\approx 2.558037$$

$$\\frac{K}{a}=1+9.090909\\times 0.609113\\approx 6.537048$$

That is the claimed combined factor, so the statement is True.`,
      `**B) The required equal payment a is approximately \\$22,946.14.**  (true)

Divide the buy-in by that due factor:

$$a=\\frac{150{,}000}{6.537048}\\approx 22{,}946.14$$

Ten copies of $\\$15{,}000$ would ignore both interest and the immediate first payment, so the statement is True.`,
      `**C) If instead the first payment were due at the end of year 1, the required equal payment would be lower than \\$22,946.14.**  (false)

End-of-year timing is an ordinary annuity:

$$a_{\\mathrm{ordinary}}=\\frac{0.11\\times 150{,}000}{1-(1.11)^{-10}}$$

$$a_{\\mathrm{ordinary}}=\\frac{16{,}500}{0.647848}\\approx 25{,}470.21$$

$$25{,}470.21>22{,}946.14$$

Paying later means each payment has to be larger, so the statement is False.`,
      `**D) The difference between the ordinary-annuity payment and the annuity-due payment is approximately \\$2,524.08.**  (true)

Subtract the two recovered payments:

$$25{,}470.21-22{,}946.14\\approx 2{,}524.08$$

Ordinary starts later, so each payment has to be larger to reach the same present target, so the statement is True.`,
      `**E) The total of all 10 annuity-due payments combined is approximately \\$220,000.00.**  (false)

Ten copies of the recovered due payment are

$$22{,}946.14\\times 10\\approx 229{,}461.39$$

$$229{,}461.39>220{,}000$$

The round $\\$220{,}000$ is ten copies of $\\$22{,}000$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 104,
    solution_overview: `A franchisee pays $\\$150{,}000$ as $10$ equal annual payments, the first due immediately, at $11\\%$ annual interest.

$$K=150{,}000,\\qquad r=0.11,\\qquad n=10$$

For the annuity due, one payment is immediate and the remaining nine form an ordinary annuity:

$$K=a+\\frac{a}{r}\\left[1-(1+r)^{-(n-1)}\\right]$$

For an ordinary-annuity comparison,

$$a_{\\mathrm{ordinary}}=\\frac{rK}{1-(1+r)^{-n}}$$`,
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

The payoff threshold is

$$n\\ge\\frac{\\ln(10{,}000)-\\ln(10{,}000-0.13\\times 35{,}000)}{\\ln(1.13)}$$

$$=\\frac{\\ln(10{,}000)-\\ln(5{,}450)}{\\ln(1.13)}\\approx 4.966$$

The first integer that works is $5$. Rounding $4.97$ down to $4$ would leave a residual unpaid, so the statement is True.`,
      `**B) The first four payments are each exactly \\$10,000.00, totalling \\$40,000.00.**  (true)

The schedule is a fixed $\\$10{,}000$ a year until the last (smaller) payment:

$$4\\times 10{,}000=40{,}000$$

This letter is a count, not a second inversion of the $4.966$ threshold, so the statement is True.`,
      `**C) The fifth and final payment is approximately \\$9,682.53.**  (true)

After four years the residual is rolled forward one more year at $13\\%$:

$$35{,}000(1.13)^4\\approx 57{,}066.58$$

$$\\frac{10{,}000}{0.13}\\left[(1.13)^4-1\\right]\\approx 48{,}497.97$$

$$(57{,}066.58-48{,}497.97)\\times 1.13\\approx 9{,}682.53$$

The last instalment is a little under the regular payment, so the statement is True.`,
      `**D) The total amount paid over the entire life of the loan is approximately \\$49,682.53.**  (true)

Four full payments plus the recovered final instalment are

$$40{,}000+9{,}682.53=49{,}682.53$$

Five copies of $\\$10{,}000$ would overstate the total by about $\\$317$, so the statement is True.`,
      `**E) The total interest paid over the life of the loan is less than the original \\$35,000 principal.**  (true)

Interest is total paid minus principal:

$$49{,}682.53-35{,}000=14{,}682.53$$

$$14{,}682.53<35{,}000$$

A $13\\%$ rate is high, but five years is short, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 105,
    solution_overview: `A landscaping company borrows $\\$35{,}000$ at $13\\%$ and repays $\\$10{,}000$ at each year-end until a smaller final payment clears the balance.

$$K=35{,}000,\\qquad r=0.13,\\qquad a=10{,}000$$

The required number of periods is the smallest integer satisfying

$$n\\ge\\frac{\\ln a-\\ln(a-rK)}{\\ln(1+r)}$$

After $m$ years the remaining debt is the loan's future value minus the future value of the $m$ fixed payments, then rolled forward one more year for the final instalment.`,
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

The annuity-due formula at $10\\%$ is

$$PV_{\\mathrm{B}}=100{,}000+\\frac{100{,}000}{0.10}\\left[1-(1.10)^{-6}\\right]$$

$$(1.10)^6=1.771561$$

$$PV_{\\mathrm{B}}=100{,}000+1{,}000{,}000\\times 0.435526\\approx 535{,}526.07$$

That is the claimed present cost, so the statement is True.`,
      `**B) At a 10% annual rate, Option A is the cheaper choice.**  (true)

Cash is $\\$500{,}000$ today. Option B is $PV_{\\mathrm{B}}\\approx 535{,}526.07$. Then

$$535{,}526.07>500{,}000$$

The lump sum wins at $10\\%$, so the statement is True.`,
      `**C) At a 14% annual rate, the present value of Option B is approximately \\$495,000.00.**  (false)

A higher rate does cheapen B, but

$$PV_{\\mathrm{B}}=100{,}000+\\frac{100{,}000}{0.14}\\left[1-(1.14)^{-6}\\right]$$

$$(1.14)^6\\approx 2.194973$$

$$PV_{\\mathrm{B}}=100{,}000+714{,}285.71\\times 0.544813\\approx 488{,}866.75$$

The round $\\$495{,}000$ is a nearby stand-in, so the statement is False.`,
      `**D) At a 14% annual rate, Option B becomes the cheaper choice.**  (true)

Compare the $14\\%$ present value with cash:

$$488{,}866.75<500{,}000$$

At $14\\%$ the instalments are discounted hard enough to beat cash, so the statement is True.`,
      `**E) Option B must always be the more expensive choice in present-value terms, no matter what the interest rate is.**  (false)

At $10\\%$ the instalment present value is about $\\$535{,}526$, above cash. At $14\\%$ it is about $\\$488{,}867$, below cash. No schedule is always more expensive when the discount rate can move, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 106,
    solution_overview: `A logistics company compares $\\$500{,}000$ cash today with seven beginning-of-year payments of $\\$100{,}000$, first at $10\\%$ and then at $14\\%$.

$$a=100{,}000,\\qquad n=7$$

Option B is an annuity due. Its present value is the immediate payment plus the present value of the remaining six payments:

$$PV_{\\mathrm{B}}=a+\\frac{a}{r}\\left[1-(1+r)^{-(n-1)}\\right]$$`,
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

Intra-year interest on four $\\$250$ deposits at $8\\%$ is

$$a=250(4+1.5\\times 0.08)=250(4.12)=1{,}030$$

The extra $\\$70$ would need a higher intra-year factor than $4.12$, so the statement is False.`,
      `**B) The account balance after 4 years is approximately \\$4,700.00.**  (false)

Four years of the recovered $1{,}030$ year-end equivalent grow by

$$F_4=\\frac{1{,}030}{0.08}\\left[(1.08)^4-1\\right]$$

$$(1.08)^4=1.360489$$

$$F_4\\approx 4{,}641.30$$

The round $\\$4{,}700$ is a nearby stand-in, so the statement is False.`,
      `**C) The account balance after 3 years is approximately \\$3,500.00.**  (false)

Three years of the same equivalent are

$$F_3=\\frac{1{,}030}{0.08}\\left[(1.08)^3-1\\right]$$

$$(1.08)^3=1.259712$$

$$F_3\\approx 3{,}343.79$$

Three copies of $\\$1{,}030$ plus a little interest do not land on a round $\\$3{,}500$, so the statement is False.`,
      `**D) If the four \\$250 deposits are instead treated as a flat \\$1,000.00 deposit at year-end, the resulting 4-year account balance is approximately \\$4,506.11.**  (true)

Dropping intra-year interest replaces the equivalent with $\\$1{,}000$:

$$F_4=\\frac{1{,}000}{0.08}\\left[(1.08)^4-1\\right]\\approx 4{,}506.11$$

That figure is a lower bound, the calculation you get if the quarterly deposits earn nothing until December $31$, so the statement is True.`,
      `**E) The difference between the correctly computed 4-year balance and the simplified calculation is approximately \\$200.00.**  (false)

The two recovered piles differ by

$$4{,}641.30-4{,}506.11\\approx 135.18$$

The intra-year premium is about $\\$135$, not $\\$200$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 107,
    solution_overview: `A business owner deposits $\\$250$ at the end of each quarter into an account that credits $8\\%$ once per year. Intra-year deposits earn simple interest for the fraction of the year they sit before the year-end credit.

$$D=250,\\qquad r=0.08$$

The year-end equivalent of the quarterly deposits is

$$a=D(4+1.5r)$$

Once that equivalent annual deposit is known, its future value after $N$ years is

$$F_N=\\frac{a}{r}\\left[(1+r)^N-1\\right]$$`,
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

A $6\\%$ nominal mortgage charged monthly is $0.5\\%$ per month for $240$ months:

$$r=0.005$$

$$a=\\frac{0.005\\times 200{,}000}{1-(1.005)^{-240}}$$

$$a=\\frac{1{,}000}{0.697904}\\approx 1{,}432.86$$

That is the claimed monthly instalment, so the statement is True.`,
      `**B) The outstanding balance immediately after the 60th monthly payment is approximately \\$169,799.20.**  (true)

Five years leave $180$ payments, valued as an ordinary annuity:

$$B_{60}=\\frac{1{,}432.86}{0.005}\\left[1-(1.005)^{-180}\\right]$$

$$B_{60}\\approx 169{,}799.20$$

Guessing that one quarter of the term pays off one quarter of the principal would report $\\$150{,}000$ remaining, so the statement is True.`,
      `**C) After 5 years of payments, more than 25% of the original \\$200,000 principal has been repaid.**  (false)

Principal repaid is

$$200{,}000-169{,}799.20=30{,}200.80$$

$$\\frac{30{,}200.80}{200{,}000}=0.1510=15.10\\%$$

A quarter of the term has retired closer to one-sixth of the loan, so the statement is False.`,
      `**D) The total interest paid during just the first 5 years is approximately \\$55,770.92.**  (true)

Sixty payments minus the principal recovered above:

$$60\\times 1{,}432.86-30{,}200.80\\approx 55{,}770.80$$

That interest pile is already larger than the principal repaid in the same window, so the statement is True.`,
      `**E) The total interest paid over the entire 20-year life of the loan is approximately \\$120,000.00.**  (false)

Lifetime interest is total paid minus principal:

$$240\\times 1{,}432.86-200{,}000\\approx 143{,}886.40$$

The round $\\$120{,}000$ is a simple-interest sketch that understates a $20$-year amortizing charge, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `A family takes out a $\\$200{,}000$ mortgage at a $6\\%$ nominal annual rate, compounded monthly, over $20$ years. After $5$ years they want the outstanding principal.

$$K=200{,}000,\\qquad n=20\\times 12=240,\\qquad m=5\\times 12=60$$

The monthly rate and level payment are

$$r=\\frac{0.06}{12},\\qquad a=\\frac{rK}{1-(1+r)^{-n}}$$

After $m$ payments, the outstanding balance is the present value of the remaining $n-m$ payments:

$$B_m=\\frac{a}{r}\\left[1-(1+r)^{-(n-m)}\\right]$$`,
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

The payoff threshold is

$$n\\ge\\frac{\\ln(25{,}000)-\\ln(25{,}000-0.14\\times 120{,}000)}{\\ln(1.14)}$$

$$n\\ge 8.508$$

The first integer that works is $9$. Rounding $8.51$ down to $8$ would leave a residual unpaid, so the statement is True.`,
      `**B) The ninth and final payment is approximately \\$13,100.16.**  (true)

After eight years the residual is rolled forward one more year at $14\\%$:

$$120{,}000(1.14)^8\\approx 342{,}310.37$$

$$\\frac{25{,}000}{0.14}\\left[(1.14)^8-1\\right]\\approx 330{,}819.00$$

$$(342{,}310.37-330{,}819.00)\\times 1.14\\approx 13{,}100.16$$

Forcing a ninth full $\\$25{,}000$ would overpay, so the statement is True.`,
      `**C) The total interest paid over the life of the loan is approximately \\$105,000.00.**  (false)

Eight full payments plus the recovered final instalment total $200{,}000+13{,}100.16=213{,}100.16$. Interest is

$$213{,}100.16-120{,}000=93{,}100.16$$

The round $\\$105{,}000$ is what you get from treating all nine payments as full $\\$25{,}000$ and then subtracting $\\$120{,}000$, so the statement is False.`,
      `**D) The total amount actually paid over the life of the loan is approximately \\$210,000.00.**  (false)

The recovered life-of-loan total is

$$8\\times 25{,}000+13{,}100.16=213{,}100.16$$

The round $\\$210{,}000$ is nine copies of something near $\\$23{,}333$, so the statement is False.`,
      `**E) Assuming all 9 payments are full \\$25,000 payments overstates the true total amount paid by more than \\$10,000.**  (true)

Nine full payments would be $\\$225{,}000$, against the recovered $\\$213{,}100.16$:

$$225{,}000-213{,}100.16=11{,}899.84$$

$$11{,}899.84>10{,}000$$

The last instalment is the whole difference, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 109,
    solution_overview: `A manufacturer borrows $\\$120{,}000$ at $14\\%$ and repays a fixed $\\$25{,}000$ at each year-end until a smaller final payment clears the balance.

$$K=120{,}000,\\qquad a=25{,}000,\\qquad r=0.14$$

The smallest possible number of payments satisfies

$$n\\ge\\frac{\\ln a-\\ln(a-rK)}{\\ln(1+r)}$$

After $m=n-1$ full payments, the residual is the accumulated loan minus the accumulated payments, then grown one more year for the final instalment.`,
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

Solve the annuity-due equation:

$$90{,}000=a+\\frac{a}{0.12}\\left[1-(1.12)^{-7}\\right]$$

$$(1.12)^7\\approx 2.210681$$

$$a\\approx 16{,}176.12$$

Treating the loan as ordinary year-end payments would raise each instalment, so the statement is True.`,
      `**B) The interest portion of the second loan payment is approximately \\$8,858.87.**  (true)

After the immediate first payment the balance is $90{,}000-16{,}176.12=73{,}823.88$, so

$$I_2=0.12\\times 73{,}823.88\\approx 8{,}858.87$$

Charging $12\\%$ of the original $\\$90{,}000$ again would ignore that the first due payment already cut principal, so the statement is True.`,
      `**C) The interest portion of the third loan payment is larger than the interest portion of the second payment.**  (false)

Interest falls as the balance falls. After the second payment the next interest slice is about $I_3\\approx 7{,}980.79$. Then

$$7{,}980.79<8{,}858.87$$

A due loan does not reverse that pattern, so the statement is False.`,
      `**D) The year-end equivalent value of the reserve fund's quarterly deposits made during a single year is \\$1,240.50, and the reserve fund's balance after 3 years is approximately \\$4,066.48.**  (true)

The year-end equivalent and three-year accumulation are

$$c=300(4+1.5\\times 0.09)=300(4.135)=1{,}240.50$$

$$F_3=\\frac{1{,}240.50}{0.09}\\left[(1.09)^3-1\\right]\\approx 4{,}066.48$$

Intra-year interest on $\\$300$ a quarter is what lifts the year-end equivalent above $\\$1{,}200$, so the statement is True.`,
      `**E) The combined total of the loan's first three payments is less than the reserve fund's balance after 3 years.**  (false)

Three due payments are

$$3\\times 16{,}176.12=48{,}528.36$$

The reserve after three years is about $\\$4{,}066.48$. Then

$$48{,}528.36>4{,}066.48$$

Three loan instalments dwarf a $\\$300$-a-quarter sinking fund, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 110,
    solution_overview: `A manufacturer borrows $\\$90{,}000$, repaid in $8$ equal beginning-of-year instalments at $12\\%$. Separately, $\\$300$ is deposited each quarter into a reserve that credits $9\\%$ once per year.

$$K=90{,}000,\\qquad r=0.12,\\qquad n=8$$

$$D=300,\\qquad R=0.09,\\qquad N=3$$

The loan is an annuity due:

$$K=a+\\frac{a}{r}\\left[1-(1+r)^{-(n-1)}\\right]$$

Each year's interest is $I=rB$. For the reserve,

$$c=D(4+1.5R),\\qquad F_N=\\frac{c}{R}\\left[(1+R)^N-1\\right]$$`,
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

The annuity-due formula at $9\\%$ is

$$PV_{\\mathrm{II}}=95{,}000+\\frac{95{,}000}{0.09}\\left[1-(1.09)^{-6}\\right]$$

$$(1.09)^6\\approx 1.677100$$

$$PV_{\\mathrm{II}}=95{,}000+1{,}055{,}555.56\\times 0.403733\\approx 521{,}162.27$$

That is the claimed present cost, so the statement is True.`,
      `**B) At a 9% annual rate, the present value of Schedule III is approximately \\$540,000.00.**  (false)

Schedule III is cash plus a ten-year ordinary annuity:

$$PV_{\\mathrm{III}}=150{,}000+\\frac{60{,}000}{0.09}\\left[1-(1.09)^{-10}\\right]$$

$$(1.09)^{10}\\approx 2.367364$$

$$PV_{\\mathrm{III}}=150{,}000+666{,}666.67\\times 0.577589\\approx 535{,}059$$

The round $\\$540{,}000$ is a nearby stand-in, so the statement is False.`,
      `**C) At a 9% annual rate, Schedule I is the cheapest of the three schedules.**  (true)

The recovered present values at $9\\%$ are $PV_{\\mathrm{II}}\\approx 521{,}162$ and $PV_{\\mathrm{III}}\\approx 535{,}059$. Cash is $\\$500{,}000$. Then

$$500{,}000<521{,}162<535{,}059$$

Instalments look smaller year by year, but they are not cheaper in present value at this rate, so the statement is True.`,
      `**D) At a 13% annual rate, the present value of Schedule II is approximately \\$474,767.23.**  (true)

Rebuild the same annuity due at $13\\%$:

$$PV_{\\mathrm{II}}=95{,}000+\\frac{95{,}000}{0.13}\\left[1-(1.13)^{-6}\\right]$$

$$(1.13)^6\\approx 2.081952$$

$$PV_{\\mathrm{II}}=95{,}000+730{,}769.23\\times 0.519681\\approx 474{,}767.23$$

That figure now sits below the $\\$500{,}000$ cash price, so the statement is True.`,
      `**E) At a 13% annual rate, Schedule III becomes the cheapest of the three schedules.**  (false)

Rebuild Schedule III at $13\\%$:

$$PV_{\\mathrm{III}}=150{,}000+\\frac{60{,}000}{0.13}\\left[1-(1.13)^{-10}\\right]$$

$$(1.13)^{10}\\approx 3.394567$$

$$PV_{\\mathrm{III}}=150{,}000+461{,}538.46\\times 0.705412\\approx 475{,}575$$

$$474{,}767<475{,}575<500{,}000$$

Schedule II is cheapest at $13\\%$; III is close, about $\\$808$ behind, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 111,
    solution_overview: `A construction firm compares three ways to buy a site. Schedule I is $\\$500{,}000$ cash today. Schedule II is seven beginning-of-year payments of $\\$95{,}000$. Schedule III is $\\$150{,}000$ today plus ten ordinary year-end payments of $\\$60{,}000$. The test rates are $9\\%$ and $13\\%$.

$$a_{\\mathrm{II}}=95{,}000,\\qquad n_{\\mathrm{II}}=7$$

$$a_{\\mathrm{III}}=60{,}000,\\qquad n_{\\mathrm{III}}=10$$

Schedule II is an annuity due and Schedule III is cash plus an ordinary annuity:

$$PV_{\\mathrm{II}}=a+\\frac{a}{r}\\left[1-(1+r)^{-(n-1)}\\right]$$

$$PV_{\\mathrm{III}}=150{,}000+\\frac{a}{r}\\left[1-(1+r)^{-n}\\right]$$`,
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

The annuity-due formula at $8\\%$ is

$$PV_{\\mathrm{II}}=140{,}000+\\frac{140{,}000}{0.08}\\left[1-(1.08)^{-8}\\right]$$

$$(1.08)^8\\approx 1.850930$$

$$PV_{\\mathrm{II}}=140{,}000+1{,}750{,}000\\times 0.459731\\approx 944{,}529.45$$

That is the claimed present cost, so the statement is True.`,
      `**B) At an 8% annual rate, the present value of Schedule III is approximately \\$871,117.14.**  (true)

Schedule III is cash plus an eleven-year ordinary annuity:

$$PV_{\\mathrm{III}}=300{,}000+\\frac{80{,}000}{0.08}\\left[1-(1.08)^{-11}\\right]$$

$$(1.08)^{11}\\approx 2.331639$$

$$PV_{\\mathrm{III}}=300{,}000+1{,}000{,}000\\times 0.571117\\approx 871{,}117.14$$

That sits between cash and Schedule II at $8\\%$, so the statement is True.`,
      `**C) At an 8% annual rate, Schedule I is the cheapest of the three schedules.**  (true)

The recovered present values at $8\\%$ are $PV_{\\mathrm{II}}\\approx 944{,}529$ and $PV_{\\mathrm{III}}\\approx 871{,}117$. Cash is $\\$850{,}000$. Then

$$850{,}000<871{,}117<944{,}529$$

Discounting is not strong enough at $8\\%$ to make waiting cheaper than paying today, so the statement is True.`,
      `**D) At a 12% annual rate, the present value of Schedule III is approximately \\$775,015.93.**  (true)

Rebuild Schedule III at $12\\%$:

$$PV_{\\mathrm{III}}=300{,}000+\\frac{80{,}000}{0.12}\\left[1-(1.12)^{-11}\\right]$$

$$(1.12)^{11}\\approx 3.478549$$

$$PV_{\\mathrm{III}}=300{,}000+666{,}666.67\\times 0.712524\\approx 775{,}015.93$$

That figure now sits well below both cash and Schedule II, so the statement is True.`,
      `**E) At a 12% annual rate, Schedule II becomes the cheapest of the three schedules.**  (false)

Rebuild Schedule II at $12\\%$:

$$PV_{\\mathrm{II}}=140{,}000+\\frac{140{,}000}{0.12}\\left[1-(1.12)^{-8}\\right]$$

$$(1.12)^8\\approx 2.475963$$

$$PV_{\\mathrm{II}}=140{,}000+1{,}166{,}666.67\\times 0.596269\\approx 835{,}470$$

$$775{,}016<835{,}470<850{,}000$$

Schedule III is cheapest at $12\\%$, not II, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 112,
    solution_overview: `A hospital compares three ways to buy an imaging center. Schedule I is $\\$850{,}000$ cash today. Schedule II is nine beginning-of-year payments of $\\$140{,}000$. Schedule III is $\\$300{,}000$ today plus eleven ordinary year-end payments of $\\$80{,}000$. The test rates are $8\\%$ and $12\\%$.

$$a_{\\mathrm{II}}=140{,}000,\\qquad n_{\\mathrm{II}}=9$$

$$a_{\\mathrm{III}}=80{,}000,\\qquad n_{\\mathrm{III}}=11$$

$$PV_{\\mathrm{II}}=a+\\frac{a}{r}\\left[1-(1+r)^{-(n-1)}\\right]$$

$$PV_{\\mathrm{III}}=300{,}000+\\frac{a}{r}\\left[1-(1+r)^{-n}\\right]$$`,
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

The annuity-due formula at $7.5\\%$ is

$$PV_{\\mathrm{II}}=340{,}000+\\frac{340{,}000}{0.075}\\left[1-(1.075)^{-9}\\right]$$

$$(1.075)^9\\approx 1.917206$$

$$PV_{\\mathrm{II}}=340{,}000+4{,}533{,}333.33\\times 0.478446\\approx 2{,}508{,}821.59$$

That sits above the $\\$2{,}400{,}000$ cash price, so the statement is True.`,
      `**B) At a 7.5% annual rate, the present value of Schedule III is approximately \\$2,250,000.00.**  (false)

Schedule III is cash plus a nine-year ordinary annuity:

$$PV_{\\mathrm{III}}=600{,}000+\\frac{250{,}000}{0.075}\\left[1-(1.075)^{-9}\\right]$$

$$PV_{\\mathrm{III}}=600{,}000+3{,}333{,}333.33\\times 0.478446\\approx 2{,}194{,}722$$

The round $\\$2.25$ million is a nearby stand-in, so the statement is False.`,
      `**C) At a 7.5% annual rate, Schedule I is cheaper than Schedule II.**  (true)

Cash is $\\$2{,}400{,}000$. Schedule II is $PV_{\\mathrm{II}}\\approx 2{,}508{,}822$. Then

$$2{,}400{,}000<2{,}508{,}822$$

This ranking is only I versus II. III can still be cheaper than both, so the statement is True.`,
      `**D) At an 11.5% annual rate, the present value of Schedule II is approximately \\$2,100,000.00.**  (false)

A higher rate does cheapen II, but

$$PV_{\\mathrm{II}}=340{,}000+\\frac{340{,}000}{0.115}\\left[1-(1.115)^{-9}\\right]$$

$$(1.115)^9\\approx 2.665589$$

$$PV_{\\mathrm{II}}=340{,}000+2{,}956{,}521.74\\times 0.624847\\approx 2{,}186{,}562$$

The round $\\$2.1$ million understates the recovered present value by about $\\$87{,}000$, so the statement is False.`,
      `**E) At an 11.5% annual rate, Schedule I is still cheaper than Schedule II.**  (false)

Compare the $11.5\\%$ present value with cash:

$$2{,}186{,}562<2{,}400{,}000$$

At $11.5\\%$ the instalments are discounted hard enough for II to beat cash, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 113,
    solution_overview: `A shipping company compares three ways to buy a cargo vessel. Schedule I is $\\$2{,}400{,}000$ cash today. Schedule II is ten beginning-of-year payments of $\\$340{,}000$. Schedule III is $\\$600{,}000$ today plus nine ordinary year-end payments of $\\$250{,}000$. The test rates are $7.5\\%$ and $11.5\\%$.

$$a_{\\mathrm{II}}=340{,}000,\\qquad n_{\\mathrm{II}}=10$$

$$a_{\\mathrm{III}}=250{,}000,\\qquad n_{\\mathrm{III}}=9$$

$$PV_{\\mathrm{II}}=a+\\frac{a}{r}\\left[1-(1+r)^{-(n-1)}\\right]$$

$$PV_{\\mathrm{III}}=600{,}000+\\frac{a}{r}\\left[1-(1+r)^{-n}\\right]$$`,
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

A one-year project is the payoff over the outlay:

$$r=\\frac{9{,}600}{8{,}000}-1$$

$$r=1.20-1=0.20=20\\%$$

No quadratic is hiding in the background, so the statement is True.`,
      `**B) At an interest rate of 15%, the net present value of this project is positive.**  (true)

NPV at $15\\%$ is

$$A=-8{,}000+\\frac{9{,}600}{1.15}$$

$$\\frac{9{,}600}{1.15}\\approx 8{,}347.83$$

$$A\\approx 347.83>0$$

A rate below the $20\\%$ IRR has to leave a surplus, so the statement is True.`,
      `**C) At an interest rate of 25%, the net present value of this project is positive.**  (false)

NPV at $25\\%$ is

$$A=-8{,}000+\\frac{9{,}600}{1.25}$$

$$\\frac{9{,}600}{1.25}=7{,}680$$

$$A=-320<0$$

A rate above the $20\\%$ IRR has to leave a shortfall, so the statement is False.`,
      `**D) If the return had instead been \\$10,000, with the outlay unchanged, the internal rate of return would exceed 24%.**  (true)

The new one-year rate is

$$r=\\frac{10{,}000}{8{,}000}-1=0.25=25\\%$$

$$25\\%>24\\%$$

Raising the payoff by $\\$400$ lifts IRR by five points, so the statement is True.`,
      `**E) This project has a unique internal rate of return greater than -1.**  (true)

One negative outlay followed by one positive return is the uniqueness case: exactly one $r^{*}>-1$. The recovered $20\\%$ is that unique rate. A sign-changing second return would be the multiple-root story, and this oven project does not have one, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 114,
    solution_overview: `A bakery invests $\\$8{,}000$ in an oven and receives a single net return of $\\$9{,}600$ after one year.

$$a_0=-8{,}000,\\qquad a_1=9{,}600,\\qquad n=1$$

For a one-year project with outlay $a$ and return $b$, the internal rate makes net present value zero:

$$-a+\\frac{b}{1+r}=0,\\qquad r=\\frac{b}{a}-1$$

Net present value at a test rate $r$ is

$$A=a_0+\\frac{a_1}{1+r}$$`,
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

The two-year IRR equation is

$$-12{,}000+\\frac{7{,}000}{1+r}+\\frac{7{,}000}{(1+r)^2}=0$$

With $s=(1+r)^{-1}$,

$$7s^2+7s-12=0$$

$$\\Delta=49+336=385,\\qquad \\sqrt{385}\\approx 19.6214$$

$$s=\\frac{-7+19.6214}{14}\\approx 0.90153$$

$$r=\\frac{1}{0.90153}-1\\approx 0.1092=10.92\\%$$

That is the claimed rate, so the statement is True.`,
      `**B) At an interest rate of 8%, the net present value of this project is positive.**  (true)

NPV at $8\\%$ is

$$A=-12{,}000+\\frac{7{,}000}{1.08}+\\frac{7{,}000}{(1.08)^2}$$

$$\\frac{7{,}000}{1.08}\\approx 6{,}481.48$$

$$\\frac{7{,}000}{1.1664}\\approx 6{,}001.37$$

$$A\\approx 482.85>0$$

Eight percent sits below the $10.92\\%$ IRR, so the statement is True.`,
      `**C) At an interest rate of 12%, the net present value of this project is positive.**  (false)

NPV at $12\\%$ is

$$A=-12{,}000+\\frac{7{,}000}{1.12}+\\frac{7{,}000}{(1.12)^2}$$

$$\\frac{7{,}000}{1.12}=6{,}250$$

$$\\frac{7{,}000}{1.2544}\\approx 5{,}580.36$$

$$A\\approx -169.64<0$$

Twelve percent sits above the IRR, so the statement is False.`,
      `**D) If the Year 2 return had instead been \\$8,000, with Year 1 unchanged at \\$7,000, the internal rate of return would exceed 13%.**  (true)

A larger second return is a new quadratic:

$$8s^2+7s-12=0$$

$$\\Delta=49+384=433,\\qquad \\sqrt{433}\\approx 20.809$$

$$s=\\frac{-7+20.809}{16}\\approx 0.863$$

$$r=\\frac{1}{0.863}-1\\approx 0.1587=15.87\\%$$

$$15.87\\%>13\\%$$

Pulling an extra $\\$1{,}000$ into year $2$ lifts IRR by about five points, so the statement is True.`,
      `**E) Doubling both returns to \\$14,000 in Year 1 and \\$14,000 in Year 2, with the outlay unchanged at \\$12,000, would result in an internal rate of return of approximately 21.84%.**  (false)

IRR is not linear in the returns. Doubling both payoffs while holding the outlay fixed produces

$$14s^2+14s-12=0$$

$$7s^2+7s-6=0$$

$$s=\\frac{-7+\\sqrt{217}}{14}\\approx 0.552$$

$$r=\\frac{1}{0.552}-1\\approx 0.81=81\\%$$

Twice the original rate would be $21.84\\%$. Twice the cash in does not mean twice the rate, because the $\\$12{,}000$ outlay was not doubled with them, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 115,
    solution_overview: `A logistics company spends $\\$12{,}000$ on a vehicle upgrade and receives $\\$7{,}000$ at the end of each of the next two years.

$$a_0=-12{,}000,\\qquad a_1=7{,}000,\\qquad a_2=7{,}000$$

The internal rate makes the discounted cash-flow sum equal to zero:

$$a_0+\\frac{a_1}{1+r}+\\frac{a_2}{(1+r)^2}=0$$

The substitution $s=(1+r)^{-1}$ turns that into a quadratic in $s$. Net present value at a test rate $r$ is the same sum evaluated at that rate.`,
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

The two-year IRR equation becomes

$$15s^2+9s-20=0$$

$$\\Delta=81+1{,}200=1{,}281,\\qquad \\sqrt{1{,}281}\\approx 35.791$$

$$s=\\frac{-9+35.791}{30}\\approx 0.89304$$

$$r=\\frac{1}{0.89304}-1\\approx 0.1198=11.98\\%$$

Treating the project as $\\frac{9{,}000+15{,}000}{20{,}000}-1=20\\%$ would ignore timing, so the statement is True.`,
      `**B) At a discount rate of 10%, the net present value of the project is positive.**  (true)

NPV at $10\\%$ is

$$A=-20{,}000+\\frac{9{,}000}{1.10}+\\frac{15{,}000}{1.21}$$

$$\\frac{9{,}000}{1.10}\\approx 8{,}181.82$$

$$\\frac{15{,}000}{1.21}\\approx 12{,}396.69$$

$$A\\approx 578.51>0$$

Ten percent sits below the $11.98\\%$ IRR, so the statement is True.`,
      `**C) At a discount rate of 14%, the net present value of the project is positive.**  (false)

NPV at $14\\%$ is

$$A=-20{,}000+\\frac{9{,}000}{1.14}+\\frac{15{,}000}{1.2996}$$

$$\\frac{9{,}000}{1.14}\\approx 7{,}894.74$$

$$\\frac{15{,}000}{1.2996}\\approx 11{,}542.01$$

$$A\\approx -563.25<0$$

Fourteen percent sits above the IRR, so the statement is False.`,
      `**D) If the Year 1 return were \\$9,000 higher, with Year 2 unchanged at \\$15,000, the internal rate of return would exceed 30%.**  (true)

Pulling $\\$9{,}000$ into year $1$ is a new quadratic $15s^2+18s-20=0$:

$$\\Delta=324+1{,}200=1{,}524,\\qquad \\sqrt{1{,}524}\\approx 39.038$$

$$s=\\frac{-18+39.038}{30}\\approx 0.701$$

$$r=\\frac{1}{0.701}-1\\approx 0.426=42.6\\%$$

$$42.6\\%>30\\%$$

Front-loading cash raises IRR much faster than adding the same dollars to year $2$ would, so the statement is True.`,
      `**E) The sum of all cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$4,000.**  (true)

Add the three cash flows at a zero rate:

$$-20{,}000+9{,}000+15{,}000=4{,}000$$

A positive undiscounted total is why a positive IRR exists at all. It is not a present value, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 116,
    solution_overview: `A boutique invests $\\$20{,}000$ and expects $\\$9{,}000$ at the end of Year $1$ and $\\$15{,}000$ at the end of Year $2$.

$$a_0=-20{,}000,\\qquad a_1=9{,}000,\\qquad a_2=15{,}000$$

The internal rate makes net present value zero:

$$a_0+\\frac{a_1}{1+r}+\\frac{a_2}{(1+r)^2}=0$$

The substitution $s=(1+r)^{-1}$ turns that into a quadratic in $s$.`,
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

X is a one-year project:

$$r_X=\\frac{17{,}250}{15{,}000}-1=0.15=15\\%$$

No timing puzzle is hiding in a second year, so the statement is True.`,
      `**B) The internal rate of return of Project Y is exactly 12.5%.**  (true)

Y is also one year:

$$r_Y=\\frac{24{,}750}{22{,}000}-1=0.125=12.5\\%$$

A bigger dollar profit does not mean a bigger rate, because Y invests more, so the statement is True.`,
      `**C) Based on the internal rate of return criterion, Project Y should be preferred over Project X.**  (false)

Compare the two recovered rates:

$$15\\%>12.5\\%$$

IRR prefers X. Y's larger payoff is attractive in dollars and still loses on rate, so the statement is False.`,
      `**D) At an interest rate of 11%, Project X has positive net present value while Project Y has negative net present value.**  (false)

Eleven percent sits below both IRRs, so both NPVs are positive:

$$NPV_X=-15{,}000+\\frac{17{,}250}{1.11}\\approx 540.54$$

$$NPV_Y=-22{,}000+\\frac{24{,}750}{1.11}\\approx 297.30$$

A split sign would require a test rate between $12.5\\%$ and $15\\%$, and $11\\%$ is not in that gap, so the statement is False.`,
      `**E) If Project Y's payoff had instead been \\$25,000, with the outlay unchanged at \\$22,000, its internal rate of return would exceed that of Project X.**  (false)

The new one-year rate is

$$r_Y=\\frac{25{,}000}{22{,}000}-1\\approx 0.1364=13.64\\%$$

$$13.64\\%<15\\%$$

An extra $\\$250$ of payoff helps Y, but not enough to overtake X, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 117,
    solution_overview: `A retailer compares two one-year uses of surplus cash. Project X invests $\\$15{,}000$ and returns $\\$17{,}250$. Project Y invests $\\$22{,}000$ and returns $\\$24{,}750$.

$$a_X=15{,}000,\\qquad b_X=17{,}250$$

$$a_Y=22{,}000,\\qquad b_Y=24{,}750$$

For each one-year project, the internal rate is

$$r=\\frac{b}{a}-1$$

Net present value at a test rate $r$ is

$$A=-a+\\frac{b}{1+r}$$`,
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

Discount the mixed cash flows at $8\\%$:

$$A=-45{,}000-\\frac{3{,}000}{1.08}+\\frac{28{,}000}{(1.08)^2}+\\frac{35{,}000}{(1.08)^3}$$

$$\\frac{3{,}000}{1.08}\\approx 2{,}777.78$$

$$\\frac{28{,}000}{1.1664}\\approx 24{,}005.49$$

$$\\frac{35{,}000}{1.259712}\\approx 27{,}784.13$$

$$A\\approx 4{,}012$$

Year $1$ is an outflow, so it enters with a minus sign. That is the claimed NPV, so the statement is True.`,
      `**B) At r = 12%, the net present value of the project is positive.**  (false)

NPV at $12\\%$ is

$$A=-45{,}000-\\frac{3{,}000}{1.12}+\\frac{28{,}000}{(1.12)^2}+\\frac{35{,}000}{(1.12)^3}$$

$$\\frac{3{,}000}{1.12}\\approx 2{,}678.57$$

$$\\frac{28{,}000}{1.2544}\\approx 22{,}321.43$$

$$\\frac{35{,}000}{1.404928}\\approx 24{,}912.31$$

$$A\\approx -445<0$$

Twelve percent sits above this project's IRR, so the statement is False.`,
      `**C) The internal rate of return of this project lies between 12% and 15%.**  (false)

NPV is already negative at $12\\%$ and more negative at $15\\%$, so the IRR sits below $12\\%$, between the positive $8\\%$ value and the negative $12\\%$ value. Placing it above $12\\%$ ignores the sign change that has already happened, so the statement is False.`,
      `**D) At r = 15%, the net present value of the project is approximately -\\$3,424.**  (true)

NPV at $15\\%$ is

$$A=-45{,}000-\\frac{3{,}000}{1.15}+\\frac{28{,}000}{(1.15)^2}+\\frac{35{,}000}{(1.15)^3}$$

$$\\frac{3{,}000}{1.15}\\approx 2{,}608.70$$

$$\\frac{28{,}000}{1.3225}\\approx 21{,}172.02$$

$$\\frac{35{,}000}{1.520875}\\approx 23{,}013.07$$

$$A\\approx -3{,}424$$

That is a deeper shortfall than at $12\\%$, so the statement is True.`,
      `**E) $a_1$, $a_2$, and $a_3$ are all positive.**  (false)

Year $1$ is a $\\$3{,}000$ installation outflow, so $a_1=-3{,}000$. The uniqueness shortcut that needs every later cash flow positive does not apply here, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 118,
    solution_overview: `A manufacturing upgrade outlays $\\$45{,}000$ today, then $\\$3{,}000$ at the end of Year $1$, followed by returns of $\\$28{,}000$ and $\\$35{,}000$ at the ends of Years $2$ and $3$.

$$a_0=-45{,}000,\\qquad a_1=-3{,}000,\\qquad a_2=28{,}000,\\qquad a_3=35{,}000$$

At any test rate $r$, the net present value is

$$A=a_0+\\frac{a_1}{1+r}+\\frac{a_2}{(1+r)^2}+\\frac{a_3}{(1+r)^3}$$`,
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

The two-year IRR equation becomes

$$12s^2+8s-17=0$$

$$\\Delta=64+816=880,\\qquad \\sqrt{880}\\approx 29.665$$

$$s=\\frac{-8+29.665}{24}\\approx 0.90270$$

$$r=\\frac{1}{0.90270}-1\\approx 0.1078=10.78\\%$$

The extra four points in the claim would need a smaller outlay or larger returns, so the statement is False.`,
      `**B) At an interest rate of 9%, the net present value of the project is negative.**  (false)

NPV at $9\\%$ is

$$A=-34{,}000+\\frac{16{,}000}{1.09}+\\frac{24{,}000}{1.1881}$$

$$\\frac{16{,}000}{1.09}\\approx 14{,}678.90$$

$$\\frac{24{,}000}{1.1881}\\approx 20{,}200.32$$

$$A\\approx 879>0$$

Nine percent sits below the $10.78\\%$ IRR, so the statement is False.`,
      `**C) At an interest rate of 13%, the net present value of the project is negative.**  (true)

NPV at $13\\%$ is

$$A=-34{,}000+\\frac{16{,}000}{1.13}+\\frac{24{,}000}{1.2769}$$

$$\\frac{16{,}000}{1.13}\\approx 14{,}159.29$$

$$\\frac{24{,}000}{1.2769}\\approx 18{,}795.52$$

$$A\\approx -1{,}045<0$$

Thirteen percent sits above the IRR, so the statement is True.`,
      `**D) If the Year 2 return had instead been \\$20,000, with Year 1 unchanged at \\$16,000, the internal rate of return would exceed the internal rate of return of the original project.**  (false)

Cutting year $2$ from $\\$24{,}000$ to $\\$20{,}000$ is a weaker project. The new quadratic $10s^2+8s-17=0$ has admissible root

$$s=\\frac{-8+\\sqrt{744}}{20}\\approx 0.964$$

$$r=\\frac{1}{0.964}-1\\approx 0.0375=3.75\\%$$

$$3.75\\%<10.78\\%$$

A smaller later return lowers IRR, so the statement is False.`,
      `**E) Reducing the initial outlay to \\$30,000, with returns unchanged at \\$16,000 and \\$24,000, would lower the internal rate of return.**  (false)

Paying less for the same returns raises IRR. The new quadratic $12s^2+8s-15=0$ has exact root $s=\\frac{5}{6}$, so

$$r=\\frac{6}{5}-1=0.20=20\\%$$

$$20\\%>10.78\\%$$

The ranking in the claim is backwards, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 119,
    solution_overview: `A cafe chain invests $\\$34{,}000$ and expects $\\$16{,}000$ at the end of Year $1$ and $\\$24{,}000$ at the end of Year $2$.

$$a_0=-34{,}000,\\qquad a_1=16{,}000,\\qquad a_2=24{,}000$$

The internal rate makes the discounted cash-flow sum zero:

$$a_0+\\frac{a_1}{1+r}+\\frac{a_2}{(1+r)^2}=0$$

The substitution $s=(1+r)^{-1}$ turns that into a quadratic in $s$.`,
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

Discount both returns at $15\\%$:

$$A=-40{,}000+\\frac{22{,}000}{1.15}+\\frac{27{,}600}{1.3225}$$

$$\\frac{22{,}000}{1.15}\\approx 19{,}130.43$$

$$\\frac{27{,}600}{1.3225}\\approx 20{,}869.57$$

$$A=0$$

Fifteen percent zeroes the project, which is the definition of IRR, so the statement is True.`,
      `**B) At an interest rate of 10%, the net present value of the project is positive.**  (true)

NPV at $10\\%$ is

$$A=-40{,}000+\\frac{22{,}000}{1.10}+\\frac{27{,}600}{1.21}$$

$$\\frac{22{,}000}{1.10}=20{,}000$$

$$\\frac{27{,}600}{1.21}\\approx 22{,}809.92$$

$$A\\approx 2{,}810>0$$

A test rate below the $15\\%$ IRR has to leave a surplus, so the statement is True.`,
      `**C) At an interest rate of 20%, the net present value of the project is negative.**  (true)

NPV at $20\\%$ is

$$A=-40{,}000+\\frac{22{,}000}{1.20}+\\frac{27{,}600}{1.44}$$

$$\\frac{22{,}000}{1.20}\\approx 18{,}333.33$$

$$\\frac{27{,}600}{1.44}\\approx 19{,}166.67$$

$$A=-2{,}500<0$$

Twenty percent sits above IRR, so the statement is True.`,
      `**D) The sum of all the project's cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$9,600.**  (true)

Add the three cash flows at a zero rate:

$$-40{,}000+22{,}000+27{,}600=9{,}600$$

A positive undiscounted total is why the unique IRR is positive. It is not a present value, so the statement is True.`,
      `**E) This project has a unique internal rate of return greater than -1.**  (true)

One negative outlay followed by two positive returns is the uniqueness case. The recovered $15\\%$ is that unique admissible root; the other quadratic root sits below $-1$ and is discarded. The sign pattern, not a second NPV table, is what guarantees uniqueness, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 120,
    solution_overview: `A logistics firm spends $\\$40{,}000$ automating a warehouse and expects $\\$22{,}000$ at the end of Year $1$ and $\\$27{,}600$ at the end of Year $2$.

$$a_0=-40{,}000,\\qquad a_1=22{,}000,\\qquad a_2=27{,}600$$

At a test rate $r$, the two-year net present value is

$$A=a_0+\\frac{a_1}{1+r}+\\frac{a_2}{(1+r)^2}$$`,
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

The two-year IRR equation becomes

$$42s^2+34s-65=0$$

$$\\Delta=1{,}156+10{,}920=12{,}076,\\qquad \\sqrt{12{,}076}\\approx 109.891$$

$$s=\\frac{-34+109.891}{84}\\approx 0.90346$$

$$r=\\frac{1}{0.90346}-1\\approx 0.1069=10.69\\%$$

Averaging the two rents against $\\$65{,}000$ as a one-year rate would overstate the return, so the statement is True.`,
      `**B) At an interest rate of 9%, the net present value of the project is positive.**  (true)

NPV at $9\\%$ is

$$A=-65{,}000+\\frac{34{,}000}{1.09}+\\frac{42{,}000}{1.1881}$$

$$\\frac{34{,}000}{1.09}\\approx 31{,}192.66$$

$$\\frac{42{,}000}{1.1881}\\approx 35{,}350.56$$

$$A\\approx 1{,}543>0$$

Nine percent sits below the $10.69\\%$ IRR, so the statement is True.`,
      `**C) At an interest rate of 12%, the net present value of the project is positive.**  (false)

NPV at $12\\%$ is

$$A=-65{,}000+\\frac{34{,}000}{1.12}+\\frac{42{,}000}{1.2544}$$

$$\\frac{34{,}000}{1.12}\\approx 30{,}357.14$$

$$\\frac{42{,}000}{1.2544}\\approx 33{,}482.14$$

$$A\\approx -1{,}161<0$$

Twelve percent sits above the IRR, so the statement is False.`,
      `**D) Doubling both returns to \\$68,000 in Year 1 and \\$84,000 in Year 2, with the outlay unchanged at \\$65,000, would more than double the internal rate of return.**  (true)

Doubling the inflows while holding the outlay fixed is a new quadratic, not $2\\times 10.69\\%$:

$$84s^2+68s-65=0$$

$$\\Delta=4{,}624+21{,}840=26{,}464,\\qquad \\sqrt{26{,}464}\\approx 162.68$$

$$s=\\frac{-68+162.68}{168}\\approx 0.564$$

$$r=\\frac{1}{0.564}-1\\approx 0.77=77\\%$$

Twice the original rate would be only $21.4\\%$. The same $\\$65{,}000$ now buys twice the rental stream, so the statement is True.`,
      `**E) If the outlay were reduced to \\$60,000, with returns unchanged, the internal rate of return would be lower than the internal rate of return of the original project.**  (false)

Paying $\\$5{,}000$ less for the same rents raises IRR. The new quadratic $42s^2+34s-60=0$ has admissible root

$$s=\\frac{-34+\\sqrt{11{,}236}}{84}=\\frac{-34+106}{84}\\approx 0.857$$

$$r=\\frac{1}{0.857}-1\\approx 0.167=16.7\\%$$

$$16.7\\%>10.69\\%$$

A smaller $|a_0|$ lifts the admissible root, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 121,
    solution_overview: `A developer invests $\\$65{,}000$ renovating a rental unit and expects $\\$34{,}000$ at the end of Year $1$ and $\\$42{,}000$ at the end of Year $2$.

$$a_0=-65{,}000,\\qquad a_1=34{,}000,\\qquad a_2=42{,}000$$

The internal rate makes the discounted cash-flow sum zero:

$$a_0+\\frac{a_1}{1+r}+\\frac{a_2}{(1+r)^2}=0$$

The substitution $s=(1+r)^{-1}$ turns that into a quadratic in $s$. Net present value at a test rate $r$ is the same sum evaluated at that rate.`,
  },
  {
    id: `math-11-122`,
    case_id: `MATH 11.122`,
    title: `Perpetuity Versus a Two-Year Stub: Comparing Internal Rates of Return`,
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

A level $\\$6{,}000$ perpetuity on a $\\$50{,}000$ outlay is

$$r=\\frac{6{,}000}{50{,}000}=0.12=12\\%$$

That is the infinite-horizon IRR, not a two-year stub, so the statement is True.`,
      `**B) The internal rate of return of Option 2 is approximately -58.84%.**  (true)

Option $2$ is the two-year stub

$$6s^2+6s-50=0$$

$$3s^2+3s-25=0$$

$$\\Delta=9+300=309,\\qquad \\sqrt{309}\\approx 17.578$$

$$s=\\frac{-3+17.578}{6}\\approx 2.430$$

$$r=\\frac{1}{2.430}-1\\approx -0.5884=-58.84\\%$$

A negative IRR is what you get when two $\\$6{,}000$ returns cannot cover a $\\$50{,}000$ outlay, so the statement is True.`,
      `**C) Option 2 has a unique internal rate of return greater than -1.**  (true)

The quadratic has one admissible root $r\\approx -58.84\\%>-1$ and one root below $-1$ that is discarded. Uniqueness here is the quadratic's one valid discount factor, not a claim that the rate is positive, so the statement is True.`,
      `**D) The sum of Option 2's cash flows, $a_0$ + $a_1$ + $a_2$, equals -\\$40,000.**  (false)

Add the three cash flows at a zero rate:

$$-50{,}000+6{,}000+6{,}000=-38{,}000$$

The extra $\\$2{,}000$ in the claim would require dropping $\\$1{,}000$ from each return. A negative undiscounted total is why IRR is negative, but the exact total is $-\\$38{,}000$, so the statement is False.`,
      `**E) If Option 2's Year 2 return were removed entirely, leaving only $a_0 = -\\$50,000$ and $a_1 = \\$6,000$, its internal rate of return would be even lower than Option 2's own internal rate of return.**  (true)

A one-year stub is

$$r=\\frac{6{,}000}{50{,}000}-1=-0.88=-88\\%$$

$$-88\\%<-58.84\\%$$

Losing year $2$ makes a bad project worse, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 122,
    solution_overview: `A software company spends $\\$50{,}000$ and compares two versions. Option $1$ pays $\\$6{,}000$ at the end of every year forever. Option $2$ pays $\\$6{,}000$ at the end of Year $1$ and $\\$6{,}000$ at the end of Year $2$ only.

$$a_0=-50{,}000,\\qquad a=6{,}000$$

For the perpetuity, zero NPV gives

$$a_0+\\frac{a}{r}=0,\\qquad r=\\frac{a}{-a_0}$$

For Option $2$, the two-year cash-flow equation with $s=(1+r)^{-1}$ is a quadratic in $s$.`,
  },
  {
    id: `math-11-123`,
    case_id: `MATH 11.123`,
    title: `Two Solar Project Designs Compared by Internal Rate of Return and NPV`,
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

Design A's two-year equation becomes

$$44s^2+27s-60=0$$

$$\\Delta=729+10{,}560=11{,}289,\\qquad \\sqrt{11{,}289}\\approx 106.250$$

$$s=\\frac{-27+106.250}{88}\\approx 0.90057$$

$$r_A=\\frac{1}{0.90057}-1\\approx 0.1104=11.04\\%$$

Treating $\\$54{,}000+\\$88{,}000$ against $\\$120{,}000$ as a one-year $18\\%$ return would ignore timing, so the statement is True.`,
      `**B) The internal rate of return of Design B is exactly 16%.**  (true)

Design B is a one-year project:

$$r_B=\\frac{81{,}200}{70{,}000}-1=0.16=16\\%$$

No quadratic is required. B's shorter clock is why a smaller dollar payoff can still post a higher rate than A, so the statement is True.`,
      `**C) Based on the internal rate of return criterion, Design B should be preferred over Design A.**  (true)

Compare the two recovered rates:

$$16\\%>11.04\\%$$

IRR prefers B. A's larger total cash in is spread over two years; B's single-year $16\\%$ wins the rate comparison, so the statement is True.`,
      `**D) At a discount rate of 13%, Design A has negative net present value while Design B still has positive net present value.**  (true)

Thirteen percent sits between the two IRRs, so the signs split:

$$NPV_A=-120{,}000+\\frac{54{,}000}{1.13}+\\frac{88{,}000}{1.2769}$$

$$\\frac{54{,}000}{1.13}\\approx 47{,}787.61$$

$$\\frac{88{,}000}{1.2769}\\approx 68{,}916.91$$

$$NPV_A\\approx -3{,}295<0$$

$$NPV_B=-70{,}000+\\frac{81{,}200}{1.13}\\approx 1{,}858>0$$

That split is exactly what a test rate between $11\\%$ and $16\\%$ has to produce, so the statement is True.`,
      `**E) If Design A's Year 1 return were \\$10,000 lower, with Year 2 unchanged at \\$88,000, its internal rate of return would still exceed Design B's 16%.**  (false)

Cutting A's year-$1$ return to $\\$44{,}000$ makes a weaker two-year project:

$$22s^2+11s-30=0$$

$$\\Delta=121+2{,}640=2{,}761,\\qquad \\sqrt{2{,}761}\\approx 52.545$$

$$s=\\frac{-11+52.545}{44}\\approx 0.944$$

$$r=\\frac{1}{0.944}-1\\approx 0.059=5.9\\%$$

$$5.9\\%<16\\%$$

A smaller early payoff cannot overtake a one-year $16\\%$ design, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 123,
    solution_overview: `A cooperative compares two solar designs. Design A invests $\\$120{,}000$ and returns $\\$54{,}000$ then $\\$88{,}000$. Design B invests $\\$70{,}000$ and returns $\\$81{,}200$ after one year.

$$a_0=-120{,}000,\\qquad a_1=54{,}000,\\qquad a_2=88{,}000$$

$$a=70{,}000,\\qquad b=81{,}200$$

Design A's internal rate satisfies the two-year NPV equation with $s=(1+r)^{-1}$. Design B is the one-year rate

$$r=\\frac{b}{a}-1$$`,
  },
];
