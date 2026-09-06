/**
 * Chapter 3  -  Financial mathematics (subsections 3.1–3.8; formerly course ch. 11).
 * Generated from textbook/output/ch11_raw.json  -  do not hand-edit bulk content.
 */

import type { MathTask } from "@/data/math-chapters";
import ch3Exam from "@/data/math-ch3-exam.json";

export const MATH_CH11_SUBSECTIONS = [
  { id: "3.1", title: "Interest Periods and Effective Rates" },
  { id: "3.2", title: "Continuous Compounding" },
  { id: "3.3", title: "Present Value" },
  { id: "3.4", title: "Geometric Series" },
  { id: "3.5", title: "Annuities, Annuities Due & Perpetuities" },
  { id: "3.6", title: "Mortgage Repayments" },
  { id: "3.7", title: "Internal Rate of Return" },
  { id: "3.8", title: "Exam-style tasks" },
] as const;

const MATH_CH11_CORE: MathTask[] = [
  {
    id: `math-11-1`,
    case_id: `MATH 11.01`,
    title: `Nominal Rate vs. Effective Rate on a Business Account`,
    subsection: `3.1`,
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
      `**A.** → True

The monthly periodic rate is the nominal annual quote divided by twelve compounding dates:

$$
i_m = \\frac{r}{12}
$$

Substituting the stem inputs recovered in the overview gives

$$
i_m=0.60\\%
$$

The claim asserts

$$
i_m=0.60\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Compound the recovered periodic rate through one full year of credits to obtain the effective annual rate:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

$$R = (1.006)^{12} - 1$$

$$(1.006)^{12} \\approx 1.074424$$

$$R \\approx 0.074424 \\approx 7.44\\%$$

The claim is about $7.44\\%$.

So the statement is True.`,
      `**C.** → True

Future value compounds the opening principal by the accumulation factor:

$$
FV = P(1+i)^{nt}
$$

The one-year balance applies twelve monthly credits to the principal:

$$FV = 6{,}000 \\times (1.006)^{12}$$

$$(1.006)^{12} \\approx 1.074424$$

$$FV \\approx 6{,}446.54$$

The claim is \\$6,446.54.

So the statement is True.`,
      `**D.** → False

Write the effective annual rate from the periodic rate and the compounding count:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

Annual compounding at the same nominal rate uses $n=1$, so the effective rate equals the quote:

$$R_{\\mathrm{ann}} = 0.072 = 7.20\\%$$

Monthly compounding gives

$$R = (1.006)^{12} - 1 \\approx 0.074424 \\approx 7.44\\%$$

The claim needs $R_{\\mathrm{ann}} > R$. We have $7.20\\% < 7.44\\%$.

So the statement is False.`,
      `**E.** → False

Annualize the recovered periodic rate with the usual effective-rate formula:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The percentage-point gap is that effective rate minus the nominal quote.

$$R = (1.006)^{12} - 1 \\approx 7.44\\%$$

$$7.44\\% - 7.20\\% = 0.24$$

The claim needs more than $1.00$ percentage point. We have $0.24 < 1.00$.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A print shop owner deposits \\$6,000 into a business savings account offering a nominal annual rate of 7.20%, compounded monthly.

The principal is \\$6,000, the nominal annual rate is 7.20%, and interest is credited monthly for one year:

$$P = 6{,}000, \\qquad r = 7.20\\% = 0.072$$

$$n = 12, \\qquad t = 1$$

The monthly periodic rate is the nominal rate divided by the number of compounding dates:

$$i_m = \\frac{r}{n}$$

$$i_m = \\frac{0.072}{12} = 0.006 = 0.60\\%$$

The effective annual rate and one-year future value are

$$R = (1+i_m)^{n} - 1, \\qquad FV = P(1+i_m)^{n}$$`,
  },
  {
    id: `math-11-2`,
    case_id: `MATH 11.02`,
    title: `Multi-Year Growth Under Quarterly Compounding`,
    subsection: `3.1`,
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
      `**A.** → True

The quarterly periodic rate is the nominal annual quote divided by four compounding dates:

$$
i = \\frac{r}{4}
$$

Substituting the stem inputs recovered in the overview gives

$$
i=2.00\\%
$$

The claim asserts

$$
i=2.00\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

The number of compounding periods is frequency times holding time:

$$
nt = n \cdot t
$$

Substituting the stem inputs recovered in the overview gives

$$
nt=24
$$

The claim asserts

$$
nt=24
$$

Those two figures agree.

So the statement is True.`,
      `**C.** → False

Six years of quarterly credits apply the recovered $i=0.02$ through $24$ periods:

$$S(6) = 6{,}000 \\times (1.02)^{24}$$

$$(1.02)^{24} \\approx 1.608435$$

$$S(6) \\approx 9{,}650.61$$

The claim is \\$9,860.00. We have $9{,}650.61 \\ne 9{,}860.00$.

So the statement is False.`,
      `**D.** → False

Three years of the same quarterly rate use $12$ periods:

$$S(3) = 6{,}000 \\times (1.02)^{12}$$

$$(1.02)^{12} \\approx 1.268242$$

$$S(3) \\approx 7{,}609.45$$

Half of the six-year balance is

$$S(6) = 6{,}000 \\times (1.02)^{24} \\approx 9{,}650.61$$

$$\\frac{9{,}650.61}{2} \\approx 4{,}825.31$$

The claim needs $S(3)=\\frac{S(6)}{2}$. We have $7{,}609.45 \\ne 4{,}825.31$.

So the statement is False.`,
      `**E.** → False

Total percentage growth is the six-year dollar gain over the original deposit:

$$S(6) = 6{,}000 \\times (1.02)^{24} \\approx 9{,}650.61$$

$$\\frac{9{,}650.61-6{,}000}{6{,}000} \\approx 0.6084 = 60.84\\%$$

The claim needs more than $65\\%$. We have $60.84\\% < 65\\%$.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `A deposit of \\$6,000 is put into an account earning interest at the annual rate of 8%, with interest paid quarterly. The owner wants to know how much will be in the account after 6 years.

The deposit is \\$6,000, the nominal annual rate is 8%, and quarterly compounding continues for six years:

$$S_0 = 6{,}000, \\qquad r = 8\\% = 0.08$$

$$n = 4, \\qquad t = 6$$

The quarterly periodic rate and the number of quarters are

$$i = \\frac{r}{n}, \\qquad nt = n \\times t$$

$$i = \\frac{0.08}{4} = 0.02 = 2.00\\%$$

$$nt = 4 \\times 6 = 24$$

The future-value model is

$$S(t) = S_0\\left(1+\\frac{r}{n}\\right)^{nt}$$`,
  },
  {
    id: `math-11-3`,
    case_id: `MATH 11.03`,
    title: `Which Savings Offer Is Better?`,
    subsection: `3.1`,
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
      `**A.** → True

Offer (i) splits the quarterly quote, then compounds four times:

$$i_i = \\frac{0.064}{4} = 0.016$$

$$R_i = (1.016)^{4} - 1$$

$$(1.016)^{4} \\approx 1.065533$$

$$R_i \\approx 0.065533 \\approx 6.55\\%$$

The claim is about $6.55\\%$.

So the statement is True.`,
      `**B.** → True

Offer (ii) splits the semi-annual quote, then compounds twice:

$$i_{ii} = \\frac{0.065}{2} = 0.0325$$

$$R_{ii} = (1.0325)^{2} - 1$$

$$(1.0325)^{2} = 1.066056$$

$$R_{ii} = 0.066056 \\approx 6.61\\%$$

The claim is about $6.61\\%$.

So the statement is True.`,
      `**C.** → True

The better one-year offer is the one with the higher effective annual rate.

$$i_i = \\frac{0.064}{4} = 0.016$$

$$R_i = (1.016)^{4}-1 \\approx 6.55\\%$$

$$i_{ii} = \\frac{0.065}{2} = 0.0325$$

$$R_{ii} = (1.0325)^{2}-1 \\approx 6.61\\%$$

Since $6.61\\% > 6.55\\%$, Offer (ii) is the better choice.

So the statement is True.`,
      `**D.** → False

Extra compounding dates raise the effective yield only when the nominal quote is held fixed. Here the quotes differ.

$$R_i = (1.016)^{4}-1 \\approx 6.55\\%$$

$$R_{ii} = (1.0325)^{2}-1 \\approx 6.61\\%$$

Offer (i) compounds more often, but $6.55\\% < 6.61\\%$. Frequency alone does not force the higher effective rate.

So the statement is False.`,
      `**E.** → True

Annualize the recovered periodic rate with the usual effective-rate formula:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

One-year interest on Offer (ii) is the principal times that offer's effective annual rate:

$$R_{ii} = (1.0325)^{2}-1 = 0.066056$$

$$I_{ii} = 10{,}000 \\times 0.066056 = 660.56$$

The claim needs more than \\$660. We have $660.56 > 660$.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `A saver has \\$10,000 and is comparing two one-year term deposits: Offer (i) 6.4% with interest paid quarterly; Offer (ii) 6.5% with interest paid twice a year.

The same \\$10,000 principal stays invested for one year under both offers:

$$P = 10{,}000, \\qquad t = 1$$

Offer (i) quotes 6.4% nominal with quarterly compounding:

$$r_i = 6.4\\% = 0.064, \\qquad n_i = 4$$

Offer (ii) quotes 6.5% nominal with semi-annual compounding:

$$r_{ii} = 6.5\\% = 0.065, \\qquad n_{ii} = 2$$

For either offer, the effective annual rate and one-year interest are

$$R = \\left(1+\\frac{r}{n}\\right)^{n} - 1, \\qquad I = P R$$`,
  },
  {
    id: `math-11-4`,
    case_id: `MATH 11.04`,
    title: `Credit Card Interest - Monthly Rate to Effective Annual Rate`,
    subsection: `3.1`,
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
      `**A.** → False

The nominal annual rate annualizes the monthly quote without compounding:

$$r_{\\mathrm{nom}} = 12 \\times 1.75\\% = 21.00\\%$$

Compare the computed value with the claim ($22.00\\%). We have $21.00\\% \\ne 22.00\\%$. The two sides do not agree.

So the statement is False.`,
      `**B.** → False

Compound the recovered periodic rate through one full year of credits to obtain the effective annual rate:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The effective annual rate compounds the monthly rate twelve times:

$$R = (1.0175)^{12} - 1$$

$$(1.0175)^{12} \\approx 1.231439$$

$$R \\approx 0.231439 \\approx 23.14\\%$$

The claim is about $21.75\\%$. We have $23.14\\% \\ne 21.75\\%$.

So the statement is False.`,
      `**C.** → False

Future value compounds the opening principal by the accumulation factor:

$$
FV = P(1+i)^{nt}
$$

A \\$2,000 unpaid balance grows by the same twelve monthly credits:

$$FV = 2{,}000 \\times (1.0175)^{12}$$

$$(1.0175)^{12} \\approx 1.231439$$

$$FV \\approx 2{,}462.86$$

The claim is \\$2,420.00. We have $2{,}462.86 \\ne 2{,}420.00$.

So the statement is False.`,
      `**D.** → True

Write the effective annual rate from the periodic rate and the compounding count:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The gap is the effective annual rate minus the nominal annual rate.

$$r_{\\mathrm{nom}} = 12 \\times 1.75\\% = 21.00\\%$$

$$R = (1.0175)^{12}-1 \\approx 23.14\\%$$

$$23.14\\% - 21.00\\% = 2.14$$

The claim needs more than $2.00$ percentage points. We have $2.14 > 2.00$.

So the statement is True.`,
      `**E.** → False

Annualize the recovered periodic rate with the usual effective-rate formula:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

At a $1.50\\%$ monthly rate the effective annual rate would be

$$R = (1.015)^{12} - 1$$

$$(1.015)^{12} \\approx 1.195618$$

$$R \\approx 0.195618 \\approx 19.56\\%$$

The claim needs $R>20\\%$. We have $19.56\\% < 20\\%$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `A retail credit card charges interest on any outstanding balance at a rate of 1.75% per month.

The monthly periodic rate is given, and there are twelve monthly periods in one year:

$$i_m = 1.75\\% = 0.0175, \\qquad n = 12$$

The nominal annual rate is twelve times the monthly rate:

$$r_{\\mathrm{nom}} = 12 i_m$$

The effective annual rate and a one-year future value are

$$R = (1+i_m)^{12} - 1, \\qquad FV = P(1+i_m)^{12}$$`,
  },
  {
    id: `math-11-5`,
    case_id: `MATH 11.05`,
    title: `Quarterly Compounding on a Business Deposit`,
    subsection: `3.1`,
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
      `**A.** → True

The quarterly periodic rate is the nominal annual quote divided by four compounding dates:

$$
i = \\frac{r}{4}
$$

Substituting the stem inputs recovered in the overview gives

$$
i=1.40\\%
$$

The claim asserts

$$
i=1.40\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Compound the recovered periodic rate through one full year of credits to obtain the effective annual rate:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

$$R = (1.014)^{4} - 1$$

$$(1.014)^{4} \\approx 1.057187$$

$$R \\approx 0.057187 \\approx 5.72\\%$$

The claim is about $5.72\\%$.

So the statement is True.`,
      `**C.** → True

Future value compounds the opening principal by the accumulation factor:

$$
FV = P(1+i)^{nt}
$$

The one-year balance applies four quarterly credits to the deposit:

$$FV = 15{,}000 \\times (1.014)^{4}$$

$$(1.014)^{4} \\approx 1.057187$$

$$FV \\approx 15{,}857.81$$

The claim is \\$15,857.81.

So the statement is True.`,
      `**D.** → False

Monthly compounding at the same $5.6\\%$ nominal rate uses $n=12$:

$$R_{\\mathrm{mon}} = \\left(1+\\frac{0.056}{12}\\right)^{12}-1 \\approx 0.057460 \\approx 5.75\\%$$

Quarterly compounding gave

$$R_{\\mathrm{q}} = (1.014)^{4}-1 \\approx 5.72\\%$$

The claim needs $R_{\\mathrm{mon}} < R_{\\mathrm{q}}$. We have $5.75\\% > 5.72\\%$.

So the statement is False.`,
      `**E.** → False

Annualize the recovered periodic rate with the usual effective-rate formula:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The gap is the quarterly effective annual rate minus the nominal quote:

$$R = (1.014)^{4}-1 \\approx 5.72\\%$$

$$5.72\\% - 5.60\\% = 0.12$$

The claim needs more than $0.20$ percentage points. We have $0.12 < 0.20$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 5,
    solution_overview: `A veterinary clinic deposits \\$15,000 into a one-year business account earning a nominal annual rate of 5.6%, compounded quarterly.

The clinic deposits \\$15,000 for one year at a 5.6% nominal annual rate compounded quarterly:

$$P = 15{,}000, \\qquad r = 5.6\\% = 0.056$$

$$n = 4, \\qquad t = 1$$

The quarterly periodic rate is

$$i = \\frac{r}{n}$$

$$i = \\frac{0.056}{4} = 0.014 = 1.40\\%$$

The effective annual rate and one-year future value are

$$R = (1+i)^{n} - 1, \\qquad FV = P(1+i)^{n}$$`,
  },
  {
    id: `math-11-6`,
    case_id: `MATH 11.06`,
    title: `How Long to Double at 7.2% Compounded Monthly?`,
    subsection: `3.1`,
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
      `**A.** → True

The monthly periodic rate is the nominal annual quote divided by twelve compounding dates:

$$
i_m = \\frac{r}{12}
$$

Substituting the stem inputs recovered in the overview gives

$$
i_m=0.60\\%
$$

The claim asserts

$$
i_m=0.60\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

Solve the growth equation for time by taking logarithms. With periodic rate $i$ and target multiple $M$:

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 2}{\\ln(1.006)}
$$

The claim is $108$ months. We have $115.87 \\ne 108$.

So the statement is False.`,
      `**C.** → False

Solve the growth equation for time by taking logarithms. With periodic rate $i$ and target multiple $M$:

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 2}{\\ln(1.006)} \\approx 115.87
$$

The claim is $58$ months. We have $115.87 \\ne 58$.

So the statement is False.`,
      `**D.** → False

The original effective annual rate compounds $i_m=0.006$ twelve times:

$$R = (1.006)^{12}-1 \\approx 0.074424 \\approx 7.44\\%$$

At a $14.4\\%$ nominal rate the monthly rate is $0.012$, so

$$R' = (1.012)^{12}-1 \\approx 0.15389 \\approx 15.39\\%$$

Double the original effective rate would be $2 \\times 7.44\\% = 14.88\\%$. We have $15.39\\% \\ne 14.88\\%$.

So the statement is False.`,
      `**E.** → True

The time equation $t=\\frac{\\ln M}{\\ln(1+i_m)}$ is defined for any growth multiple $M>1$, not only $M=2$. Because $(1+i_m)^{t}$ is increasing in $t$, each target $M$ has a unique $t$.

The same logarithmic method therefore works for any other target growth multiple.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `A savings account earns a nominal annual rate of 7.2%, compounded monthly. An investor wants to know how long it will take for a deposit to double in value.

The nominal annual rate is 7.2%, interest compounds monthly, and the target is twice the original principal:

$$r = 7.2\\% = 0.072, \\qquad n = 12, \\qquad M = 2$$

The monthly periodic rate is

$$i_m = \\frac{r}{n}$$

$$i_m = \\frac{0.072}{12} = 0.006 = 0.60\\%$$

For a target multiple $M$, the number of monthly periods satisfies $(1+i_m)^{t}=M$, so

$$t = \\frac{\\ln M}{\\ln(1+i_m)}$$`,
  },
  {
    id: `math-11-7`,
    case_id: `MATH 11.07`,
    title: `Comparing Compounding Frequencies at a Fixed Nominal Rate`,
    subsection: `3.1`,
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
      `**A.** → True

The effective annual rate compounds the periodic rate across every compounding date in one year:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered inputs:

Semi-annual compounding splits the quote in two, then squares:

$$i = \\frac{0.15}{2} = 0.075$$

$$R = (1.075)^{2} - 1$$

$$(1.075)^{2} = 1.155625$$

$$R = 0.155625 \\approx 15.56\\%$$

The claim is about $15.56\\%$.

So the statement is True.`,
      `**B.** → True

Quarterly compounding splits the quote in four, then raises to the fourth:

$$i = \\frac{0.15}{4} = 0.0375$$

$$R = (1.0375)^{4} - 1$$

$$(1.0375)^{4} \\approx 1.158650$$

$$R \\approx 0.158650 \\approx 15.87\\%$$

The claim is about $15.87\\%$.

So the statement is True.`,
      `**C.** → True

Monthly compounding splits the quote in twelve, then raises to the twelfth:

$$i = \\frac{0.15}{12} = 0.0125$$

$$R = (1.0125)^{12} - 1$$

$$(1.0125)^{12} \\approx 1.160755$$

$$R \\approx 0.160755 \\approx 16.08\\%$$

The claim is about $16.08\\%$.

So the statement is True.`,
      `**D.** → True

The three frequencies at the same $r=0.15$ give

$$R_2 = (1.075)^{2}-1 \\approx 15.56\\%$$

$$R_4 = (1.0375)^{4}-1 \\approx 15.87\\%$$

$$R_{12} = (1.0125)^{12}-1 \\approx 16.08\\%$$

These satisfy $15.56\\% < 15.87\\% < 16.08\\%$.

So the statement is True.`,
      `**E.** → False

Semi-annual, quarterly, and monthly compounding at the same $15\\%$ give

$$R_2 = (1.075)^{2}-1 \\approx 15.56\\%$$

$$R_4 = (1.0375)^{4}-1 \\approx 15.87\\%$$

$$R_{12} = (1.0125)^{12}-1 \\approx 16.08\\%$$

$$15.87\\% - 15.56\\% = 0.31$$

$$16.08\\% - 15.87\\% = 0.21$$

The claim needs $0.31 < 0.21$. We have $0.31 > 0.21$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A finance student is asked to compute the effective yearly rate corresponding to a nominal annual interest rate of 15%, with interest added twice a year, each quarter, and each month.

The nominal annual rate is fixed at 15%, while the number of compounding periods changes:

$$r = 15\\% = 0.15$$

$$n = 2, \\qquad n = 4, \\qquad n = 12$$

These values represent semi-annual, quarterly, and monthly compounding.

For each frequency, the effective annual rate is

$$R = \\left(1+\\frac{r}{n}\\right)^{n} - 1$$`,
  },
  {
    id: `math-11-8`,
    case_id: `MATH 11.08`,
    title: `A Ten-Year Deposit Under Monthly Compounding`,
    subsection: `3.1`,
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
      `**A.** → True

The monthly periodic rate is the nominal annual quote divided by twelve compounding dates:

$$
i_m = \\frac{r}{12}
$$

Substituting the stem inputs recovered in the overview gives

$$
i_m=0.50\\%
$$

The claim asserts

$$
i_m=0.50\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.

The number of compounding periods is frequency times holding time:

$$
nt = n \cdot t
$$

Substituting the stem inputs recovered in the overview gives

$$
nt=120
$$

The claim asserts

$$
nt=120
$$

Those two figures agree.

So the statement is True.`,
      `**C.** → True

Ten years of monthly credits apply the recovered $i_m=0.005$ through $120$ periods:

$$S(10) = 4{,}000 \\times (1.005)^{120}$$

$$(1.005)^{120} \\approx 1.8194$$

$$S(10) \\approx 7{,}277.60$$

Compare the computed value with the claim (\\$7,277.60). The two sides agree.

So the statement is True.`,
      `**D.** → False

Doubling would require a growth factor of $2$. Monthly compounding for ten years gives

$$(1.005)^{120} \\approx 1.8194$$

Since $1.8194 < 2$, the deposit has not doubled.

So the statement is False.`,
      `**E.** → False

Annual compounding at the same $6\\%$ nominal rate uses $n=1$:

$$S_{\\mathrm{ann}} = 4{,}000 \\times (1.06)^{10}$$

$$(1.06)^{10} \\approx 1.790847$$

$$S_{\\mathrm{ann}} \\approx 7{,}163.39$$

Monthly compounding gave $S(10) \\approx 7{,}277.60$. The claim needs $7{,}163.39 > 7{,}277.60$. We have $7{,}163.39 < 7{,}277.60$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `A grandparent deposits \\$4,000 into a trust account for a grandchild, earning a nominal annual rate of 6%, compounded monthly, for 10 years.

The trust begins with \\$4,000 and earns 6% nominal interest compounded monthly for ten years:

$$S_0 = 4{,}000, \\qquad r = 6\\% = 0.06$$

$$n = 12, \\qquad t = 10$$

The monthly periodic rate and the number of monthly periods are

$$i_m = \\frac{r}{n}, \\qquad nt = n \\times t$$

$$i_m = \\frac{0.06}{12} = 0.005 = 0.50\\%$$

$$nt = 12 \\times 10 = 120$$

The future-value model is

$$S(t) = S_0\\left(1+\\frac{r}{n}\\right)^{nt}$$`,
  },
  {
    id: `math-11-9`,
    case_id: `MATH 11.09`,
    title: `What Rate Is Needed to Grow \\$50,000 to \\$80,000 in 8 Years?`,
    subsection: `3.1`,
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
      `**A.** → True

Eight years of quarterly compounding give $nt=32$ periods and a growth factor of $1.6$:

$$\\frac{80{,}000}{50{,}000} = 1.6$$

$$1+\\frac{r}{4} = (1.6)^{\\frac{1}{32}} \\approx 1.014796$$

$$r \\approx 4 \\times 0.014796 = 0.05918 \\approx 5.92\\%$$

The claim is about $5.92\\%$.

So the statement is True.`,
      `**B.** → True

The quarterly periodic rate is the thirty-second root of the growth factor, minus one:

$$1+\\frac{r}{4} = (1.6)^{\\frac{1}{32}} \\approx 1.014796$$

$$\\frac{r}{4} \\approx 0.014796 \\approx 1.48\\%$$

Compare the computed value with the claim (about $1.48\\%$). The two sides agree.

So the statement is True.`,
      `**C.** → False

The same $1.6$ growth factor in four years allows only $16$ quarterly periods:

$$r_4 = 4\\left[(1.6)^{\\frac{1}{16}}-1\\right] \\approx 0.1192 \\approx 11.92\\%$$

The eight-year rate is

$$r_8 = 4\\left[(1.6)^{\\frac{1}{32}}-1\\right] \\approx 5.92\\%$$

The claim needs $r_4 < r_8$. We have $11.92\\% > 5.92\\%$.

So the statement is False.`,
      `**D.** → False

Monthly compounding uses $n=12$ and $nt=96$ for the same eight-year growth:

$$r_{\\mathrm{mon}} = 12\\left[(1.6)^{\\frac{1}{96}}-1\\right] \\approx 0.0589 \\approx 5.89\\%$$

The quarterly requirement is

$$r_{\\mathrm{q}} = 4\\left[(1.6)^{\\frac{1}{32}}-1\\right] \\approx 5.92\\%$$

The claim needs $r_{\\mathrm{mon}} > r_{\\mathrm{q}}$. We have $5.89\\% < 5.92\\%$.

So the statement is False.`,
      `**E.** → False

Dollar growth relative to the opening investment is

$$\\frac{80{,}000-50{,}000}{50{,}000} = 0.60 = 60\\%$$

The claim needs more than $65\\%$. We have $60\\% < 65\\%$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `An investment fund wants to grow \\$50,000 into \\$80,000 over 8 years, with interest compounded quarterly. The fund manager needs to find the required nominal annual rate.

The fund starts at \\$50,000, targets \\$80,000 after eight years, and compounds quarterly:

$$S_0 = 50{,}000, \\qquad S(t) = 80{,}000$$

$$n = 4, \\qquad t = 8$$

The compound-growth model is

$$S(t) = S_0\\left(1+\\frac{r}{n}\\right)^{nt}$$

Solving for the nominal annual rate gives

$$r = n\\left[\\left(\\frac{S(t)}{S_0}\\right)^{\\frac{1}{nt}}-1\\right]$$`,
  },
  {
    id: `math-11-10`,
    case_id: `MATH 11.10`,
    title: `Which Terms Are Better for a Borrower?`,
    subsection: `3.1`,
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
      `**A.** → False

Option (a) compounds once, so its effective annual rate equals its nominal rate:

$$R_a = 10.80\\%$$

Option (b) splits $10.40\\%$ across four quarters:

$$i_b = \\frac{0.104}{4} = 0.026$$

$$R_b = (1.026)^{4}-1 \\approx 0.108127 \\approx 10.81\\%$$

The claim needs $R_a > R_b$. We have $10.80\\% < 10.81\\%$.

So the statement is False.`,
      `**B.** → True

Option (b) splits $10.40\\%$ across four quarters, then compounds:

$$i_b = \\frac{0.104}{4} = 0.026$$

$$R_b = (1.026)^{4} - 1$$

$$(1.026)^{4} \\approx 1.108127$$

$$R_b \\approx 0.108127 \\approx 10.81\\%$$

The claim is about $10.81\\%$.

So the statement is True.`,
      `**C.** → False

One year of compounding turns the periodic rate into an effective annual rate via:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The cheaper loan is the one with the lower effective annual rate, not the lower printed quote.

$$R_a = 10.80\\%$$

$$R_b = (1.026)^{4}-1 \\approx 10.81\\%$$

Option (b) quotes the lower nominal rate, but $10.81\\% > 10.80\\%$. It is not the cheaper option.

So the statement is False.`,
      `**D.** → False

Write the effective annual rate from the periodic rate and the compounding count:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

For the borrower, a higher effective annual rate is more expensive.

$$R_a = 10.80\\%$$

$$R_b = (1.026)^{4}-1 \\approx 10.81\\%$$

The claim needs $R_a > R_b$. We have $10.80\\% < 10.81\\%$.

So the statement is False.`,
      `**E.** → False

Annualize the recovered periodic rate with the usual effective-rate formula:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The two effective annual rates are

$$R_a = 10.80\\%$$

$$R_b = (1.026)^{4}-1 \\approx 10.8127\\%$$

$$10.8127\\% - 10.80\\% \\approx 0.013$$

The claim needs more than $0.05$ percentage points. We have $0.013 < 0.05$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 10,
    solution_overview: `A borrower is comparing two loan terms: option (a) a nominal annual rate of 10.80%, with interest paid annually; option (b) a nominal annual rate of 10.40%, with interest paid quarterly.

Option (a) quotes 10.80% nominal with annual compounding:

$$r_a = 10.80\\% = 0.108, \\qquad n_a = 1$$

Option (b) quotes 10.40% nominal with quarterly compounding:

$$r_b = 10.40\\% = 0.104, \\qquad n_b = 4$$

The comparison covers one year, $t=1$. For either option the effective annual rate is

$$R = \\left(1+\\frac{r}{n}\\right)^{n} - 1$$`,
  },
  {
    id: `math-11-11`,
    case_id: `MATH 11.11`,
    title: `How Much Was Deposited 6 Years Ago?`,
    subsection: `3.1`,
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
      `**A.** → True

The six-year growth factor is the annual growth factor raised to $t=6$:

$$(1.045)^{6} \\approx 1.302253$$

Compare the computed value with the claim (about $1.302253$). The two sides agree.

So the statement is True.`,
      `**B.** → True

The required original deposit discounts the \\$40,000 target by the six-year growth factor:

$$(1.045)^{6} \\approx 1.302253$$

$$S_0 = \\frac{40{,}000}{1.302253} \\approx 30{,}715.86$$

Compare the computed value with the claim (\\$30,715.86). The two sides agree.

So the statement is True.`,
      `**C.** → True

The required deposit is

$$S_0 = \\frac{40{,}000}{(1.045)^{6}} \\approx 30{,}715.86$$

The claim needs $S_0 < 32{,}000$. We have $30{,}715.86 < 32{,}000$.

So the statement is True.`,
      `**D.** → False

A $5.5\\%$ annual rate grows a deposit faster over the same six years:

$$S_0' = \\frac{40{,}000}{(1.055)^{6}}$$

$$(1.055)^{6} \\approx 1.378843$$

$$S_0' \\approx 29{,}009.83$$

The $4.5\\%$ deposit was about \\$30,715.86. The claim needs $S_0' > 30{,}715.86$. We have $29{,}009.83 < 30{,}715.86$.

So the statement is False.`,
      `**E.** → True

Interest is the target minus the original deposit:

$$S_0 = \\frac{40{,}000}{(1.045)^{6}} \\approx 30{,}715.86$$

$$40{,}000 - 30{,}715.86 = 9{,}284.14$$

Compare the computed value with the claim (\\$9,284.14). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `A trustee wants to know how much would have needed to be deposited 6 years ago, at a constant annual interest rate of 4.5%, paid once a year, to have exactly \\$40,000 available today.

The target balance is \\$40,000 after six years at 4.5% annual interest:

$$S(t) = 40{,}000, \\qquad r = 4.5\\% = 0.045$$

$$n = 1, \\qquad t = 6$$

With annual compounding, future value and the original deposit are

$$S(t) = S_0(1+r)^{t}, \\qquad S_0 = \\frac{S(t)}{(1+r)^{t}}$$`,
  },
  {
    id: `math-11-12`,
    case_id: `MATH 11.12`,
    title: `How Long to Grow £4,000 to £6,000?`,
    subsection: `3.1`,
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
      `**A.** → True

Solve the growth equation for time by taking logarithms. With periodic rate $i$ and target multiple $M$:

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 1.5}{\\ln 1.005}
$$

The claim is about $81.30$ months.

So the statement is True.`,
      `**B.** → False

Take logarithms to isolate time in the growth equation.

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 1.5}{\\ln 1.005} \\approx 81.30
$$

The claim is $6.00$ years exactly. We have $6.78 \\ne 6.00$.

So the statement is False.`,
      `**C.** → False

Solve for $t$ by applying $\\ln$ to both sides of the growth identity.

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 1.5}{\\ln 1.005} \\approx 81.30
$$

The claim is $48$ months. We have $81.30 \\ne 48$.

So the statement is False.`,
      `**D.** → False

The time to grow by a factor of $1.5$ and the doubling time on this account are

$$t_{1.5} = \\frac{\\ln 1.5}{\\ln 1.005} \\approx 81.30$$

$$t_2 = \\frac{\\ln 2}{\\ln 1.005} \\approx 138.98$$

$$\\frac{t_2}{2} \\approx 69.49$$

The claim needs $t_{1.5} < \\frac{t_2}{2}$. We have $81.30 > 69.49$.

So the statement is False.`,
      `**E.** → False

Isolate time with logarithms, then substitute the recovered rates.

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 1.5}{\\ln 1.005} \\approx 81.30
$$

The claim is exactly $100$ months. We have $81.30 \\ne 100$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `A deposit of £4,000 earns a nominal annual rate of 6%, compounded monthly. An investor wants to know how long it will take for the balance to reach £6,000.

The deposit starts at £4,000 and must reach £6,000 at a 6% nominal annual rate compounded monthly:

$$S_0 = 4{,}000, \\qquad S(t) = 6{,}000$$

$$r = 6\\% = 0.06, \\qquad n = 12$$

The monthly periodic rate is

$$i_m = \\frac{r}{n}$$

$$i_m = \\frac{0.06}{12} = 0.005$$

Measured in monthly periods, the growth equation is $\\bigl(1+i_m\\bigr)^{t}=\\frac{S(t)}{S_0}$, so

$$t = \\frac{\\ln\\bigl(\\frac{S(t)}{S_0}\\bigr)}{\\ln(1+i_m)}$$`,
  },
  {
    id: `math-11-13`,
    case_id: `MATH 11.13`,
    title: `Daily Compounding on a Money-Market Deposit`,
    subsection: `3.1`,
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
      `**A.** → True

The daily periodic rate is the nominal annual quote divided by 365 compounding dates:

$$
i_d = \\frac{r}{365}
$$

Substituting the stem inputs recovered in the overview gives

$$
i \\approx 0.011644\\%
$$

The claim asserts

$$
i \\approx 0.011644\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

The effective annual rate compounds the recovered daily rate through $365$ days:

$$R = \\left(1+\\frac{0.0425}{365}\\right)^{365}-1$$

$$\\left(1+\\frac{0.0425}{365}\\right)^{365} \\approx 1.043413$$

$$R \\approx 0.043413 \\approx 4.34\\%$$

The claim is about $4.34\\%$.

So the statement is True.`,
      `**C.** → True

Future value compounds the opening principal by the accumulation factor:

$$
FV = P(1+i)^{nt}
$$

The one-year balance applies $365$ daily credits to the principal:

$$FV = 20{,}000 \\times \\left(1+\\frac{0.0425}{365}\\right)^{365}$$

$$\\left(1+\\frac{0.0425}{365}\\right)^{365} \\approx 1.043413$$

$$FV \\approx 20{,}868.26$$

The claim is \\$20,868.26.

So the statement is True.`,
      `**D.** → False

Monthly compounding at the same $4.25\\%$ nominal rate uses $n=12$:

$$R_{\\mathrm{mon}} = \\left(1+\\frac{0.0425}{12}\\right)^{12}-1 \\approx 0.043338 \\approx 4.33\\%$$

Daily compounding gave

$$R_{\\mathrm{day}} = \\left(1+\\frac{0.0425}{365}\\right)^{365}-1 \\approx 4.34\\%$$

The claim needs $R_{\\mathrm{mon}} > R_{\\mathrm{day}}$. We have $4.33\\% < 4.34\\%$.

So the statement is False.`,
      `**E.** → False

The percentage-point gap is the effective annual rate minus the nominal quote. First form the effective rate, then subtract:

The gap is the daily effective annual rate minus the nominal quote:

$$R = \\left(1+\\frac{0.0425}{365}\\right)^{365}-1 \\approx 4.34\\%$$

$$4.34\\% - 4.25\\% = 0.09$$

The claim needs more than $0.20$ percentage points. We have $0.09 < 0.20$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `A retiree deposits \\$20,000 into a money-market account earning a nominal annual rate of 4.25%, compounded daily using a 365-day year, for one year.

The retiree invests \\$20,000 for one year at a 4.25% nominal annual rate compounded daily:

$$P = 20{,}000, \\qquad r = 4.25\\% = 0.0425$$

$$n = 365, \\qquad t = 1$$

The daily periodic rate is

$$i = \\frac{r}{n}$$

$$i = \\frac{0.0425}{365} \\approx 0.00011644 = 0.011644\\%$$

The effective annual rate and one-year future value are

$$R = \\left(1+\\frac{r}{n}\\right)^{n} - 1, \\qquad FV = P\\left(1+\\frac{r}{n}\\right)^{n}$$`,
  },
  {
    id: `math-11-14`,
    case_id: `MATH 11.14`,
    title: `A Store Card's True Annual Cost`,
    subsection: `3.1`,
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
      `**A.** → True

The nominal annual rate annualizes the monthly quote without compounding:

$$r_{\\mathrm{nom}} = 12 \\times 1.9\\% = 22.80\\%$$

Compare the computed value with the claim ($22.80\\%$). The two sides agree.

So the statement is True.`,
      `**B.** → True

Compound the recovered periodic rate through one full year of credits to obtain the effective annual rate:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The effective annual rate compounds the monthly rate twelve times:

$$R = (1.019)^{12} - 1$$

$$(1.019)^{12} \\approx 1.253401$$

$$R \\approx 0.253401 \\approx 25.34\\%$$

The claim is about $25.34\\%$.

So the statement is True.`,
      `**C.** → False

One year of compounding turns the periodic rate into an effective annual rate via:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The effective annual rate compounds; the nominal rate does not:

$$r_{\\mathrm{nom}} = 12 \\times 1.9\\% = 22.80\\%$$

$$R = (1.019)^{12}-1 \\approx 25.34\\%$$

The claim needs $R=22.80\\%$. We have $25.34\\% \\ne 22.80\\%$.

So the statement is False.`,
      `**D.** → False

Future value compounds the opening principal by the accumulation factor:

$$
FV = P(1+i)^{nt}
$$

A \\$3,000 unpaid balance grows by twelve monthly credits:

$$FV = 3{,}000 \\times (1.019)^{12}$$

$$(1.019)^{12} \\approx 1.253401$$

$$FV \\approx 3{,}760.20$$

The claim is \\$3,684.00. We have $3{,}760.20 \\ne 3{,}684.00$.

So the statement is False.`,
      `**E.** → False

Annualize the recovered periodic rate with the usual effective-rate formula:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The gap is the effective annual rate minus the nominal annual rate.

$$r_{\\mathrm{nom}} = 12 \\times 1.9\\% = 22.80\\%$$

$$R = (1.019)^{12}-1 \\approx 25.34\\%$$

$$25.34\\% - 22.80\\% = 2.54$$

The claim needs more than $3.00$ percentage points. We have $2.54 < 3.00$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `A retail store credit card charges interest on unpaid balances at a rate of 1.9% per month.

The card charges 1.9% each month, with twelve monthly periods in one year:

$$i_m = 1.9\\% = 0.019, \\qquad n = 12$$

The nominal annual rate is

$$r_{\\mathrm{nom}} = 12 i_m$$

The effective annual rate and a one-year future value are

$$R = (1+i_m)^{12} - 1, \\qquad FV = P(1+i_m)^{12}$$`,
  },
  {
    id: `math-11-15`,
    case_id: `MATH 11.15`,
    title: `Effective Rates for a 10% Nominal Rate Under Three Frequencies`,
    subsection: `3.1`,
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
      `**A.** → True

The effective annual rate compounds the periodic rate across every compounding date in one year:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered inputs:

Semi-annual compounding splits the quote in two, then squares:

$$i = \\frac{0.10}{2} = 0.05$$

$$R = (1.05)^{2} - 1$$

$$(1.05)^{2} = 1.1025$$

$$R = 0.1025 = 10.25\\%$$

The claim is about $10.25\\%$.

So the statement is True.`,
      `**B.** → True

Quarterly compounding splits the quote in four, then raises to the fourth:

$$i = \\frac{0.10}{4} = 0.025$$

$$R = (1.025)^{4} - 1$$

$$(1.025)^{4} \\approx 1.103813$$

$$R \\approx 0.103813 \\approx 10.38\\%$$

The claim is about $10.38\\%$.

So the statement is True.`,
      `**C.** → True

Monthly compounding splits the quote in twelve, then raises to the twelfth:

$$i = \\frac{0.10}{12} = \\frac{1}{120}$$

$$R = \\left(1+\\frac{0.10}{12}\\right)^{12} - 1$$

$$\\left(1+\\frac{0.10}{12}\\right)^{12} \\approx 1.104713$$

$$R \\approx 0.104713 \\approx 10.47\\%$$

The claim is about $10.47\\%$.

So the statement is True.`,
      `**D.** → True

The three frequencies at the same $r=0.10$ give

$$R_2 = (1.05)^{2}-1 = 10.25\\%$$

$$R_4 = (1.025)^{4}-1 \\approx 10.38\\%$$

$$R_{12} = \\left(1+\\frac{0.10}{12}\\right)^{12}-1 \\approx 10.47\\%$$

These satisfy $10.25\\% < 10.38\\% < 10.47\\%$.

So the statement is True.`,
      `**E.** → False

Semi-annual, quarterly, and monthly compounding at the same $10\\%$ give

$$R_2 = (1.05)^{2}-1 = 10.25\\%$$

$$R_4 = (1.025)^{4}-1 \\approx 10.38\\%$$

$$R_{12} = \\left(1+\\frac{0.10}{12}\\right)^{12}-1 \\approx 10.47\\%$$

$$10.38\\% - 10.25\\% = 0.13$$

$$10.47\\% - 10.38\\% = 0.09$$

The claim needs $0.13 < 0.09$. We have $0.13 > 0.09$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `A bank wants to publish the effective yearly rate corresponding to a nominal annual rate of 10%, with interest added twice a year, each quarter, and each month.

The nominal annual rate is fixed at 10%, while the compounding frequency changes:

$$r = 10\\% = 0.10$$

$$n = 2, \\qquad n = 4, \\qquad n = 12$$

These frequencies represent semi-annual, quarterly, and monthly compounding.

For each frequency, the effective annual rate is

$$R = \\left(1+\\frac{r}{n}\\right)^{n} - 1$$`,
  },
  {
    id: `math-11-16`,
    case_id: `MATH 11.16`,
    title: `What Growth Rate Would Multiply GDP by 50 in 80 Years?`,
    subsection: `3.1`,
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
      `**A.** → True

The required annual growth rate is the $80$-th root of $50$, minus one:

$$r = 50^{\\frac{1}{80}} - 1$$

$$50^{\\frac{1}{80}} \\approx 1.050116$$

$$r \\approx 0.050116 \\approx 5.01\\%$$

Compare the computed value with the claim (about $5.01\\%$). The two sides agree.

So the statement is True.`,
      `**B.** → False

The same inversion gives

$$r = 50^{\\frac{1}{80}} - 1 \\approx 5.01\\%$$

Compare the computed value with the claim (about $6.25\\%$). We have $5.01\\% \\ne 6.25\\%$. The two sides do not agree.

So the statement is False.`,
      `**C.** → False

The rate for a multiple $M$ is $r=M^{\\frac{1}{80}}-1$, which is not linear in $M$.

$$r_{50} = 50^{\\frac{1}{80}}-1 \\approx 5.01\\%$$

$$r_{100} = 100^{\\frac{1}{80}}-1 \\approx 5.93\\%$$

$$\\frac{r_{100}}{2} \\approx 2.96\\%$$

The claim needs $r_{50}=\\frac{1}{2} r_{100}$. We have $5.01\\% \\ne 2.96\\%$.

So the statement is False.`,
      `**D.** → False

Extending the horizon from $80$ years to $160$ years at the same rate squares the original growth factor:

$$(1.050116)^{160} = \\bigl(50^{\\frac{1}{80}}\\bigr)^{160} = 50^{2} = 2{,}500$$

The claim needs a factor of $100$. We have $2{,}500 \\ne 100$.

So the statement is False.`,
      `**E.** → False

The same $50$-fold target in only $40$ years requires

$$r_{40} = 50^{\\frac{1}{40}} - 1 \\approx 0.1027 \\approx 10.27\\%$$

The $80$-year rate is about $5.01\\%$. The claim needs $r_{40} < 5.01\\%$. We have $10.27\\% > 5.01\\%$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `An economist asks what constant annual percentage growth rate would be needed for a country's GDP to become 50 times as large after 80 years.

The target is a growth factor of 50 over an 80-year horizon:

$$M = 50, \\qquad t = 80$$

For constant annual growth, the target multiple satisfies $(1+r)^{t}=M$, so

$$r = M^{\\frac{1}{t}} - 1$$`,
  },
  {
    id: `math-11-17`,
    case_id: `MATH 11.17`,
    title: `Saving for a \\$25,000 Tuition Bill in 7 Years`,
    subsection: `3.1`,
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
      `**A.** → True

Account X has $nt=84$ monthly periods. Discounting the target by that growth factor gives

$$\\left(1+\\frac{0.05}{12}\\right)^{84} \\approx 1.418038$$

$$S_{0,X} = \\frac{25{,}000}{1.418038} \\approx 17{,}629.99$$

The claim is \\$17,629.99.

So the statement is True.`,
      `**B.** → True

Account Y has $nt=28$ quarterly periods. Discounting the target by that growth factor gives

$$\\left(1+\\frac{0.051}{4}\\right)^{28} \\approx 1.425964$$

$$S_{0,Y} = \\frac{25{,}000}{1.425964} \\approx 17{,}534.28$$

The claim is \\$17,534.28.

So the statement is True.`,
      `**C.** → False

The two required deposits are

$$S_{0,X} = \\frac{25{,}000}{\\bigl(1+\\frac{0.05}{12}\\bigr)^{84}} \\approx 17{,}629.99$$

$$S_{0,Y} = \\frac{25{,}000}{\\bigl(1+\\frac{0.051}{4}\\bigr)^{28}} \\approx 17{,}534.28$$

The claim needs $S_{0,X} < S_{0,Y}$. We have $17{,}629.99 > 17{,}534.28$.

So the statement is False.`,
      `**D.** → True

The two effective annual rates are

$$R_X = \\left(1+\\frac{0.05}{12}\\right)^{12}-1 \\approx 0.05116 \\approx 5.12\\%$$

$$R_Y = \\left(1+\\frac{0.051}{4}\\right)^{4}-1 \\approx 0.05198 \\approx 5.20\\%$$

Since $5.20\\% > 5.12\\%$, Account Y's effective annual rate is higher.

So the statement is True.`,
      `**E.** → False

More frequent compounding does not force a smaller deposit when the nominal quotes differ. Here Account X compounds monthly at $5.00\\%$ and Account Y compounds quarterly at $5.10\\%$:

$$S_{0,X} \\approx 17{,}629.99$$

$$S_{0,Y} \\approx 17{,}534.28$$

Account X compounds more often but needs the larger deposit.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `A parent needs exactly \\$25,000 in 7 years for a tuition bill and is deciding how much to deposit today into one of two accounts: Account X, nominal 5.00% compounded monthly; Account Y, nominal 5.10% compounded quarterly.

The target is \\$25,000 after seven years:

$$T = 25{,}000, \\qquad t = 7$$

Account X quotes 5.00% nominal with monthly compounding:

$$r_X = 5.00\\% = 0.05, \\qquad n_X = 12$$

Account Y quotes 5.10% nominal with quarterly compounding:

$$r_Y = 5.10\\% = 0.051, \\qquad n_Y = 4$$

The present value needed for a future target, and the effective annual rate, are

$$S_0 = \\frac{T}{\\bigl(1+\\frac{r}{n}\\bigr)^{nt}}, \\qquad R = \\left(1+\\frac{r}{n}\\right)^{n} - 1$$`,
  },
  {
    id: `math-11-18`,
    case_id: `MATH 11.18`,
    title: `How Much Was Invested 9 Years Ago?`,
    subsection: `3.1`,
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
      `**A.** → True

The compound growth factor raises one plus the periodic rate across every period:

$$
G = (1+i)^{nt}
$$

Using the recovered solution values $i=0.011$ and $nt=36$ as inputs for this claim:

The nine-year growth factor is

$$G = (1.011)^{36} \\approx 1.482660$$

Rounded to four decimals this is $1.4827$.

The computed value is approximately 1.4827, which matches the claim.

So the statement is True.`,
      `**B.** → True

The required original investment discounts \\$60,000 by the $36$-quarter growth factor:

$$G = (1.011)^{36} \\approx 1.482660$$

$$S_0 = \\frac{60{,}000}{1.482660} \\approx 40{,}467.83$$

Compare the computed value with the claim (\\$40,467.83). The two sides agree.

So the statement is True.`,
      `**C.** → False

The required original investment is

$$S_0 = \\frac{60{,}000}{(1.011)^{36}} \\approx 40{,}467.83$$

The claim needs $S_0 > 45{,}000$. We have $40{,}467.83 < 45{,}000$.

So the statement is False.`,
      `**D.** → False

A $5.0\\%$ nominal quarterly rate grows money faster over the same nine years:

$$S_0' = \\frac{60{,}000}{\\bigl(1+\\frac{0.05}{4}\\bigr)^{36}}$$

$$\\bigl(1.0125\\bigr)^{36} \\approx 1.563944$$

$$S_0' \\approx 38{,}364.55$$

The $4.4\\%$ deposit was about \\$40,467.83. The claim needs $S_0' > 40{,}467.83$. We have $38{,}364.55 < 40{,}467.83$.

So the statement is False.`,
      `**E.** → False

Interest is the target minus the original investment:

$$S_0 = \\frac{60{,}000}{(1.011)^{36}} \\approx 40{,}467.83$$

$$60{,}000 - 40{,}467.83 = 19{,}532.17$$

The claim needs more than \\$20,000. We have $19{,}532.17 < 20{,}000$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `A trustee needs to know how much would have had to be invested 9 years ago, compounded quarterly at a nominal annual rate of 4.4%, to have exactly \\$60,000 available today.

The target is \\$60,000 after nine years at a 4.4% nominal annual rate compounded quarterly:

$$T = 60{,}000, \\qquad r = 4.4\\% = 0.044$$

$$n = 4, \\qquad t = 9$$

The quarterly periodic rate and the number of quarters are

$$i = \\frac{r}{n}, \\qquad nt = n \\times t$$

$$i = \\frac{0.044}{4} = 0.011$$

$$nt = 4 \\times 9 = 36$$

The nine-year growth factor and the required original investment are

$$G = (1+i)^{nt}, \\qquad S_0 = \\frac{T}{G}$$`,
  },
  {
    id: `math-11-19`,
    case_id: `MATH 11.19`,
    title: `Three CDs That Are Closer Than They Look`,
    subsection: `3.1`,
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
      `**A.** → True

CD1 splits the monthly quote, then compounds twelve times:

$$i_1 = \\frac{0.063}{12} = 0.00525$$

$$R_1 = (1.00525)^{12} - 1$$

$$(1.00525)^{12} \\approx 1.064851$$

$$R_1 \\approx 0.064851 \\approx 6.49\\%$$

The claim is about $6.49\\%$.

So the statement is True.`,
      `**B.** → True

CD2 splits the quarterly quote, then compounds four times:

$$i_2 = \\frac{0.064}{4} = 0.016$$

$$R_2 = (1.016)^{4} - 1$$

$$(1.016)^{4} \\approx 1.065553$$

$$R_2 \\approx 0.065553 \\approx 6.55\\%$$

The claim is about $6.55\\%$.

So the statement is True.`,
      `**C.** → True

One year of compounding turns the periodic rate into an effective annual rate via:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

CD3 splits the semi-annual quote, then squares:

$$i_3 = \\frac{0.0645}{2} = 0.03225$$

$$R_3 = (1.03225)^{2} - 1$$

$$(1.03225)^{2} = 1.065540$$

$$R_3 = 0.065540 \\approx 6.55\\%$$

CD2 gave $R_2 \\approx 6.55\\%$ as well. The two effective rates agree to two hundredths of a point.

So the statement is True.`,
      `**D.** → True

Write the effective annual rate from the periodic rate and the compounding count:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The three effective annual rates are

$$R_1 = (1.00525)^{12}-1 \\approx 6.49\\%$$

$$R_2 = (1.016)^{4}-1 \\approx 6.55\\%$$

$$R_3 = (1.03225)^{2}-1 \\approx 6.55\\%$$

CD1 also has the lowest nominal rate, $6.30\\%$. Both the nominal ranking and the effective ranking put CD1 last.

So the statement is True.`,
      `**E.** → True

Interest is principal times the effective annual rate.

$$R_1 = (1.00525)^{12}-1 \\approx 0.064852$$

$$R_2 = (1.016)^{4}-1 \\approx 0.065533$$

$$I_1 = 20{,}000 \\times 0.064852 \\approx 1{,}297.04$$

$$I_2 = 20{,}000 \\times 0.065533 \\approx 1{,}310.66$$

$$1{,}310.66 - 1{,}297.04 = 13.62$$

The claim is approximately \\$13.61.

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 19,
    solution_overview: `A saver is comparing three one-year certificates of deposit for a \\$20,000 deposit: CD1: nominal 6.30%, compounded monthly. CD2: nominal 6.40%, compounded quarterly. CD3: nominal 6.45%, compounded semi-annually.

The same \\$20,000 principal is invested for one year in each certificate:

$$P = 20{,}000, \\qquad t = 1$$

CD1 quotes 6.30% nominal with monthly compounding:

$$r_1 = 6.30\\% = 0.063, \\qquad n_1 = 12$$

CD2 quotes 6.40% nominal with quarterly compounding:

$$r_2 = 6.40\\% = 0.064, \\qquad n_2 = 4$$

CD3 quotes 6.45% nominal with semi-annual compounding:

$$r_3 = 6.45\\% = 0.0645, \\qquad n_3 = 2$$

The effective annual rate and one-year interest are

$$R = \\left(1+\\frac{r}{n}\\right)^{n} - 1, \\qquad I = P R$$`,
  },
  {
    id: `math-11-20`,
    case_id: `MATH 11.20`,
    title: `Which Account Reaches \\$22,000 First?`,
    subsection: `3.1`,
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
      `**A.** → True

Account M splits the $6\\%$ quote across twelve months:

$$i_M = \\frac{0.06}{12} = 0.005$$

$$t_M = \\frac{\\ln\\bigl(\\frac{22{,}000}{15{,}000}\\bigr)}{\\ln 1.005}$$

$$\\ln\\bigl(\\frac{22}{15}\\bigr) \\approx 0.382992, \\qquad \\ln 1.005 \\approx 0.004987$$

$$t_M \\approx 76.79$$

The claim is about $76.8$ months.

So the statement is True.`,
      `**B.** → False

The two waiting times come from the same target ratio $\\frac{22{,}000}{15{,}000}$.

$$t_M = \\frac{\\ln\\bigl(\\frac{22{,}000}{15{,}000}\\bigr)}{\\ln 1.005} \\approx 76.79$$

$$\\frac{t_M}{12} \\approx 6.40$$

$$t_Q = \\frac{\\ln\\bigl(\\frac{22{,}000}{15{,}000}\\bigr)}{\\ln 1.015375} \\approx 25.10$$

$$\\frac{t_Q}{4} \\approx 6.28$$

The claim needs equal times. We have $6.28 \\ne 6.40$.

So the statement is False.`,
      `**C.** → False

Less frequent compounding does not force a longer wait when the nominal quotes differ.

$$t_M = \\frac{\\ln\\bigl(\\frac{22{,}000}{15{,}000}\\bigr)}{\\ln 1.005} \\approx 76.79$$

$$\\frac{t_M}{12} \\approx 6.40$$

$$t_Q = \\frac{\\ln\\bigl(\\frac{22{,}000}{15{,}000}\\bigr)}{\\ln 1.015375} \\approx 25.10$$

$$\\frac{t_Q}{4} \\approx 6.28$$

Account Q compounds less often but reaches \\$22,000 sooner.

So the statement is False.`,
      `**D.** → False

Write the effective annual rate from the periodic rate and the compounding count:

$$
R = (1+i)^{n} - 1
$$

Substitute the recovered periodic rate and compounding count:

The two effective annual rates are

$$R_M = (1.005)^{12}-1 \\approx 0.06168 \\approx 6.17\\%$$

$$R_Q = (1.015375)^{4}-1 \\approx 0.06293 \\approx 6.29\\%$$

The claim needs $R_M > R_Q$. We have $6.17\\% < 6.29\\%$.

So the statement is False.`,
      `**E.** → False

Reaching \\$30,000 instead of \\$22,000 changes the target ratio from $\\frac{22}{15}$ to $2$:

$$t_{M,30} = \\frac{\\ln 2}{\\ln 1.005} \\approx 138.98$$

$$t_{M,22} \\approx 76.79$$

$$\\frac{138.98}{76.79} \\approx 1.81$$

The time ratio is about $1.81$, not $2$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `A family has \\$15,000 today and wants to know which of two accounts reaches \\$22,000 sooner: Account M, nominal 6.00% compounded monthly; Account Q, nominal 6.15% compounded quarterly.

Both accounts begin with \\$15,000 and target \\$22,000:

$$S_0 = 15{,}000, \\qquad T = 22{,}000$$

Account M quotes 6.00% nominal with monthly compounding:

$$r_M = 6.00\\% = 0.06, \\qquad n_M = 12$$

Account Q quotes 6.15% nominal with quarterly compounding:

$$r_Q = 6.15\\% = 0.0615, \\qquad n_Q = 4$$

The number of compounding periods needed to reach a target, and the effective annual rate, are

$$t = \\frac{\\ln\\bigl(\\frac{T}{S_0}\\bigr)}{\\ln\\bigl(1+\\frac{r}{n}\\bigr)}, \\qquad R = \\left(1+\\frac{r}{n}\\right)^{n} - 1$$`,
  },
  {
    id: `math-11-21`,
    case_id: `MATH 11.21`,
    title: `Continuous Compounding on a Bakery's Business Account`,
    subsection: `3.2`,
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
      `**A.** → True

One year of continuous growth applies the recovered $r=0.05$:

$$S(1) = 4{,}500 \\times e^{0.05}$$

$$e^{0.05} \\approx 1.051271$$

$$S(1) \\approx 4{,}730.72$$

Compare the computed value with the claim (\\$4,730.72). The two sides agree.

So the statement is True.`,
      `**B.** → True

Interest is the one-year continuous balance minus the original deposit:

$$S(1) = 4{,}500 \\times e^{0.05} \\approx 4{,}730.72$$

$$4{,}730.72 - 4{,}500 = 230.72$$

Compare the computed value with the claim (\\$230.72). The two sides agree.

So the statement is True.`,
      `**C.** → False

Annual compounding at the same 5% nominal rate uses $n=1$:

$$S_{\\mathrm{ann}} = 4{,}500 \\times 1.05 = 4{,}725.00$$

Compare the computed value with the claim (\\$4,735.00). We have $4{,}725.00 \\ne 4{,}735.00$. The two sides do not agree.

So the statement is False.`,
      `**D.** → True

The dollar gap is continuous minus annual at the same 5% quote:

$$S(1) = 4{,}500 \\times e^{0.05} \\approx 4{,}730.72$$

$$S_{\\mathrm{ann}} = 4{,}500 \\times 1.05 = 4{,}725.00$$

$$4{,}730.72 - 4{,}725.00 = 5.72$$

Compare the computed value with the claim (\\$5.72). The two sides agree.

So the statement is True.`,
      `**E.** → False

The one-year continuous growth factor is

$$e^{0.05} \\approx 1.051271$$

Rounded to four decimals this is $1.0513$, not $1.0400$.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 21,
    solution_overview: `Ms. Delgado, the owner of an artisan bakery, deposits \\$4,500 into a business savings account that compounds interest continuously at a nominal annual rate of 5%.

The bakery deposits \\$4,500 at a 5% nominal annual rate compounded continuously for one year:

$$S_0 = 4{,}500, \\qquad r = 5\\% = 0.05, \\qquad t = 1$$

Continuous compound growth, and annual compounding at the same nominal rate, are

$$S(t) = S_0 e^{rt}, \\qquad S_{\\mathrm{ann}} = S_0(1+r)^{t}$$`,
  },
  {
    id: `math-11-22`,
    case_id: `MATH 11.22`,
    title: `Multi-Year Continuous Compounding for a Coffee Roasting Company`,
    subsection: `3.2`,
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
      `**A.** → True

Six years of continuous $8\\%$ carry the exponent $0.48$:

$$S(6) = 3{,}200 \\times e^{0.08 \\times 6} = 3{,}200 \\times e^{0.48}$$

$$e^{0.48} \\approx 1.616074$$

$$S(6) \\approx 5{,}171.44$$

Compare the computed value with the claim (approximately \\$5,171.44). The two sides agree.

So the statement is True.`,
      `**B.** → False

Three years of the same continuous rate give

$$S(3) = 3{,}200 \\times e^{0.08 \\times 3} = 3{,}200 \\times e^{0.24}$$

$$e^{0.24} \\approx 1.271249$$

$$S(3) \\approx 4{,}068.00$$

$$2 \\times S(3) \\approx 8{,}135.99$$

$$S(6) = 3{,}200 \\times e^{0.48} \\approx 5{,}171.44$$

The claim needs $2\\,S(3)=S(6)$. We have $8{,}135.99 \\ne 5{,}171.44$.

So the statement is False.`,
      `**C.** → False

Interest is the six-year continuous balance minus the original deposit:

$$S(6) = 3{,}200 \\times e^{0.48} \\approx 5{,}171.44$$

$$5{,}171.44 - 3{,}200 = 1{,}971.44$$

The claim is approximately \\$2,000.00. We have $1{,}971.44 \\ne 2{,}000.00$.

So the statement is False.`,
      `**D.** → False

Twelve years of the same continuous rate double the six-year exponent:

$$S(12) = 3{,}200 \\times e^{0.08 \\times 12} = 3{,}200 \\times e^{0.96}$$

$$e^{0.96} \\approx 2.611696$$

$$S(12) \\approx 8{,}357.43$$

$$2 \\times S(6) \\approx 2 \\times 5{,}171.44 = 10{,}342.88$$

The claim needs $S(12)=2\\,S(6)$. We have $8{,}357.43 \\ne 10{,}342.88$.

So the statement is False.`,
      `**E.** → True

The same twelve-year and six-year balances are

$$S(12) = 3{,}200 \\times e^{0.96} \\approx 8{,}357.43$$

$$S(6) = 3{,}200 \\times e^{0.48} \\approx 5{,}171.44$$

$$2 \\times S(6) \\approx 10{,}342.88$$

The claim needs $S(12)<2\\,S(6)$. We have $8{,}357.43 < 10{,}342.88$.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 22,
    solution_overview: `A specialty coffee roasting company invests \\$3,200 of retained earnings into a fund that compounds continuously at a nominal annual rate of 8%, and plans to leave the funds untouched for 6 years.

The company invests \\$3,200 at an 8% nominal annual rate compounded continuously for six years:

$$S_0 = 3{,}200, \\qquad r = 8\\% = 0.08, \\qquad t = 6$$

The continuous future-value model is

$$S(t) = S_0 e^{rt}$$`,
  },
  {
    id: `math-11-23`,
    case_id: `MATH 11.23`,
    title: `Effective Annual Rate on a Continuously-Compounded Bond Fund`,
    subsection: `3.2`,
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
      `**A.** → True

The effective annual rate converts the $9\\%$ continuous quote:

$$R = e^{0.09} - 1$$

$$e^{0.09} \\approx 1.094174$$

$$R \\approx 0.094174 \\approx 9.42\\%$$

Compare the computed value with the claim (about $9.42\\%$). The two sides agree.

So the statement is True.`,
      `**B.** → True

One year of continuous $9\\%$ grows the \\$15,000 investment by $e^{0.09}$:

$$S(1) = 15{,}000 \\times e^{0.09}$$

$$e^{0.09} \\approx 1.094174$$

$$S(1) \\approx 16{,}412.61$$

Compare the computed value with the claim (\\$16,412.61). The two sides agree.

So the statement is True.`,
      `**C.** → False

The percentage-point gap is the effective annual rate minus the nominal quote. First form the effective rate, then subtract:

The gap is the effective annual rate minus the $9\\%$ nominal quote:

$$R = e^{0.09} - 1 \\approx 9.42\\%$$

$$9.42\\% - 9.00\\% = 0.42$$

The claim needs more than $0.75$ percentage points. We have $0.42 < 0.75$.

So the statement is False.`,
      `**D.** → True

At an $18\\%$ continuous quote the effective annual rate is

$$R_{18} = e^{0.18} - 1$$

$$e^{0.18} \\approx 1.197217$$

$$R_{18} \\approx 0.197217 \\approx 19.72\\%$$

Double the original effective rate is

$$R = e^{0.09} - 1 \\approx 9.42\\%$$

$$2 \\times 9.42\\% = 18.84\\%$$

The claim needs $R_{18} > 2R$. We have $19.72\\% > 18.84\\%$.

So the statement is True.`,
      `**E.** → True

At the $18\\%$ continuous quote,

$$R_{18} = e^{0.18} - 1 \\approx 0.197217 \\approx 19.72\\%$$

The claim needs $R_{18}>19.5\\%$. We have $19.72\\% > 19.5\\%$.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 23,
    solution_overview: `An asset manager quotes a bond fund's nominal annual rate of 9%, compounded continuously, and a client asks how the effective annual yield compares to the nominal rate, and how it would change if the nominal rate doubled to 18%.

The fund quotes a 9% nominal annual rate compounded continuously:

$$r = 9\\% = 0.09$$

The effective annual rate and a one-year future value under continuous compounding are

$$R = e^{r} - 1, \\qquad S(t) = S_0 e^{rt}$$`,
  },
  {
    id: `math-11-24`,
    case_id: `MATH 11.24`,
    title: `Comparing Growth Factors on an Equipment Leasing Contract`,
    subsection: `3.2`,
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
      `**A.** → True

Yearly compounding grows one dollar by one plus the quote:

$$K_{\\mathrm{y}} = 1 + 0.10 = 1.1000$$

Compare the computed value with the claim ($1.1000$). The two sides agree.

So the statement is True.`,
      `**B.** → True

Semi-annual compounding splits the quote in two, then squares:

$$K_{\\mathrm{s}} = \\left(1+\\frac{0.10}{2}\\right)^{2} = (1.05)^{2} = 1.1025$$

Compare the computed value with the claim ($1.1025$). The two sides agree.

So the statement is True.`,
      `**C.** → True

Continuous compounding grows one dollar by $e^{i}$:

$$K_{\\mathrm{c}} = e^{0.10}$$

$$e^{0.10} \\approx 1.105171 \\approx 1.1052$$

Compare the computed value with the claim (about $1.1052$). The two sides agree.

So the statement is True.`,
      `**D.** → False

On \\$75,000 the continuous-minus-semi-annual gap is

$$K_{\\mathrm{c}} = e^{0.10} \\approx 1.105171$$

$$K_{\\mathrm{s}} = 1.1025$$

$$75{,}000 \\times (1.105171 - 1.1025) \\approx 200.32$$

The claim is \\$250.32. We have $200.32 \\ne 250.32$.

So the statement is False.`,
      `**E.** → False

On \\$75,000 the two successive gaps are

$$K_{\\mathrm{s}} - K_{\\mathrm{y}} = 1.1025 - 1.1000 = 0.0025$$

$$K_{\\mathrm{c}} - K_{\\mathrm{s}} = e^{0.10} - 1.1025 \\approx 1.105171 - 1.1025 = 0.002671$$

$$75{,}000 \\times 0.0025 = 187.50$$

$$75{,}000 \\times 0.002671 \\approx 200.32$$

The claim needs $187.50 > 200.32$. We have $187.50 < 200.32$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 24,
    solution_overview: `An equipment leasing firm structures a financing contract at a nominal annual rate of 10%, and wants to compare the growth factor K, the amount to which \\$1 grows over one year, under yearly, semi-annual, and continuous compounding, applied to a \\$75,000 balance.

The contract quotes a 10% nominal annual rate. The growth factor $K$ is the amount to which \\$1 grows in one year, and the dollar comparisons apply those factors to \\$75,000:

$$i = 10\\% = 0.10, \\qquad P = 75{,}000, \\qquad t = 1$$

Yearly, semi-annual, and continuous compounding give

$$K_{\\mathrm{y}} = 1+i, \\qquad K_{\\mathrm{s}} = \\left(1+\\frac{i}{2}\\right)^{2}, \\qquad K_{\\mathrm{c}} = e^{i}$$`,
  },
  {
    id: `math-11-25`,
    case_id: `MATH 11.25`,
    title: `Year-Over-Year Growth by a Fixed Factor in a College Endowment Sub-Fund`,
    subsection: `3.2`,
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
      `**A.** → False

One year of continuous $4.5\\%$ multiplies the principal by $e^{0.045}$:

$$S(1) = 95{,}000 \\times e^{0.045}$$

$$e^{0.045} \\approx 1.046028$$

$$S(1) \\approx 99{,}372.65$$

The claim is approximately \\$98,500.00. We have $99{,}372.65 \\ne 98{,}500.00$.

So the statement is False.`,
      `**B.** → True

Two years of continuous $4.5\\%$ carry the exponent $0.09$:

$$S(2) = 95{,}000 \\times e^{0.045 \\times 2} = 95{,}000 \\times e^{0.09}$$

$$e^{0.09} \\approx 1.094174$$

$$S(2) \\approx 103{,}946.56$$

The claim is approximately \\$103,946.56.

So the statement is True.`,
      `**C.** → False

The dollar increase in year 1 and in year 2 are

$$S(1) = 95{,}000 \\times e^{0.045} \\approx 99{,}372.65$$

$$S(2) = 95{,}000 \\times e^{0.09} \\approx 103{,}946.56$$

$$S(1) - S_0 \\approx 4{,}372.65$$

$$S(2) - S(1) \\approx 4{,}573.91$$

The claim needs $4{,}372.65 > 4{,}573.91$. We have $4{,}372.65 < 4{,}573.91$.

So the statement is False.`,
      `**D.** → False

Each year multiplies the current balance by the same continuous factor

$$e^{r} = e^{0.045} \\approx 1.046028$$

That factor does not change from year to year.

So the statement is False.`,
      `**E.** → False

Doubling the nominal rate to $9\\%$ changes the year-over-year factor to

$$e^{0.09} \\approx 1.094174$$

Double the original factor would be

$$2 \\times e^{0.045} \\approx 2 \\times 1.046028 = 2.092056$$

The claim needs $e^{0.09}=2e^{0.045}$. We have $1.094174 \\ne 2.092056$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 25,
    solution_overview: `A college endowment's growth sub-fund is currently valued at \\$95,000 and earns continuous compounding at a nominal annual rate of 4.5%. The board wants to project the balance forward using the property that the principal is multiplied by a fixed factor each year.

The sub-fund is worth \\$95,000 today and earns a 4.5% nominal annual rate compounded continuously:

$$S_0 = 95{,}000, \\qquad r = 4.5\\% = 0.045$$

Each additional year multiplies the balance by the same factor $e^{r}$, and over $t$ years

$$S(t) = S_0 e^{rt}$$`,
  },
  {
    id: `math-11-26`,
    case_id: `MATH 11.26`,
    title: `Continuous Depreciation of a Courier Company's Van Fleet`,
    subsection: `3.2`,
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
      `**A.** → True

Four years of continuous $10\\%$ depreciation carry the exponent $-0.40$:

$$v(4) = 60{,}000 \\times e^{-0.10 \\times 4} = 60{,}000 \\times e^{-0.40}$$

$$e^{-0.40} \\approx 0.670320$$

$$v(4) \\approx 40{,}219.20$$

The claim is approximately \\$40,219.20.

So the statement is True.`,
      `**B.** → True

Seven years of continuous $10\\%$ depreciation carry the exponent $-0.70$:

$$v(7) = 60{,}000 \\times e^{-0.10 \\times 7} = 60{,}000 \\times e^{-0.70}$$

$$e^{-0.70} \\approx 0.496585$$

$$v(7) \\approx 29{,}795.12$$

The claim is approximately \\$29,795.12.

So the statement is True.`,
      `**C.** → True

The four-year remaining share is the same exponential factor:

$$v(4) = 60{,}000 \\times e^{-0.40} \\approx 40{,}219.20$$

$$\\frac{40{,}219.20}{60{,}000} \\approx 0.6703 = 67.03\\%$$

Compare the computed value with the claim (about $67.03\\%$). The two sides agree.

So the statement is True.`,
      `**D.** → False

At a doubled $20\\%$ depreciation rate the four-year value is

$$v(4) = 60{,}000 \\times e^{-0.20 \\times 4} = 60{,}000 \\times e^{-0.80}$$

$$e^{-0.80} \\approx 0.449329$$

$$v(4) \\approx 26{,}959.74$$

The claim needs $v(4)<25{,}000$. We have $26{,}959.74 > 25{,}000$.

So the statement is False.`,
      `**E.** → True

The first-year decline and the fourth-year decline are

$$v(1) = 60{,}000 \\times e^{-0.10} \\approx 54{,}290.25$$

$$v(0) - v(1) \\approx 5{,}709.75$$

$$v(3) = 60{,}000 \\times e^{-0.30} \\approx 44{,}449.09$$

$$v(4) = 60{,}000 \\times e^{-0.40} \\approx 40{,}219.20$$

$$v(3) - v(4) \\approx 4{,}229.89$$

The claim needs $5{,}709.75 > 4{,}229.89$. We have $5{,}709.75 > 4{,}229.89$.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 26,
    solution_overview: `A courier company's van fleet has a combined initial value of \\$60,000 and depreciates continuously at an annual rate of 10% with δ = 0.10, so that its value after t years follows $v(t) = v_0 e^{-\\delta t}$.

The fleet starts at \\$60,000 and depreciates continuously at $\\delta=0.10$:

$$v_0 = 60{,}000, \\qquad \\delta = 0.10$$

Continuous depreciation follows the given model

$$v(t) = v_0 e^{-\\delta t}$$`,
  },
  {
    id: `math-11-27`,
    case_id: `MATH 11.27`,
    title: `Doubling Time for a REIT's Continuously-Compounded Reserve Account`,
    subsection: `3.2`,
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
      `**A.** → True

The balance follows $S(t)=S_0 e^{rt}$. Doubling means $e^{rt}=2$, so the doubling time is:

$$
t_2 = \\frac{\\ln 2}{r}
$$

Substitute the stem numbers:

$$
t_2 = \\frac{\\ln 2}{0.055} \\approx 12.60
$$

The computed value is approximately 12.60, which matches the claim.

So the statement is True.`,
      `**B.** → True

At the rounded doubling time $t=12.60$ years,

$$S(12.60) = 18{,}000 \\times e^{0.055 \\times 12.60} = 18{,}000 \\times e^{0.693}$$

$$e^{0.693} \\approx 1.9997$$

$$S(12.60) \\approx 35{,}994.70$$

Compare the computed value with the claim (approximately \\$36,000.00). The two sides agree.

So the statement is True.`,
      `**C.** → False

At an $11\\%$ continuous rate the doubling time is

$$t_2' = \\frac{\\ln 2}{0.11} \\approx 6.30$$

The original wait was $t_2 \\approx 12.60$. The claim needs $t_2' \\approx 12.60$. We have $6.30 \\ne 12.60$.

So the statement is False.`,
      `**D.** → False

Each doubling multiplies the balance by $2$. Three full doubling periods therefore multiply by

$$2^{3} = 8$$

Compare the computed value with the claim (a factor of $6$). We have $8 \\ne 6$. The two sides do not agree.

So the statement is False.`,
      `**E.** → False

The doubling time $t_2=\\frac{\\ln 2}{r}$ falls when $r$ rises. A higher interest rate shortens the wait, it does not lengthen it.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 27,
    solution_overview: `A real estate investment trust places \\$18,000 into a reserve account earning continuous compounding at a nominal annual rate of 5.5%, and wants to know how long it will take the balance to double, and what happens after three such doubling periods.

The trust places \\$18,000 at a 5.5% nominal annual rate compounded continuously:

$$S_0 = 18{,}000, \\qquad r = 5.5\\% = 0.055$$

The balance follows $S(t)=S_0 e^{rt}$. Doubling means $e^{rt}=2$, so the doubling time is

$$t_2 = \\frac{\\ln 2}{r}$$

$$t_2 = \\frac{\\ln 2}{0.055} \\approx 12.60$$`,
  },
  {
    id: `math-11-28`,
    case_id: `MATH 11.28`,
    title: `Time for a Stamping Press to Lose Value Under Continuous Depreciation`,
    subsection: `3.2`,
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
      `**A.** → True

The overview isolated the time to a $40\\%$ remainder as $t=\\frac{\\ln 2.5}{\\delta}$. The claim is that same isolation.

So the statement is True.`,
      `**B.** → True

Substituting the recovered $\\delta=0.18$ into the isolated time gives

$$t = \\frac{\\ln 2.5}{0.18}$$

$$\\ln 2.5 \\approx 0.916291$$

$$t \\approx 5.09$$

Compare the computed value with the claim (about $5.09$ years). The two sides agree.

So the statement is True.`,
      `**C.** → True

Retaining $40\\%$ of the original \\$120,000 leaves

$$0.40 \\times 120{,}000 = 48{,}000$$

Compare the computed value with the claim (approximately \\$48,000.00). The two sides agree.

So the statement is True.`,
      `**D.** → True

Halving the depreciation rate to $9\\%$ doubles the isolated wait:

$$t' = \\frac{\\ln 2.5}{0.09} \\approx 10.18$$

The original wait was $t \\approx 5.09$, and $10.18 = 2 \\times 5.09$. The claim is that doubled time.

So the statement is True.`,
      `**E.** → True

Losing $80\\%$ of value means retaining $20\\%$, so

$$t_{80} = \\frac{\\ln\\bigl(\\frac{1}{0.20}\\bigr)}{0.18} = \\frac{\\ln 5}{0.18} \\approx 8.94$$

The time to lose $60\\%$ was $t_{60}=\\frac{\\ln 2.5}{0.18} \\approx 5.09$. The claim needs $t_{80}>t_{60}$. We have $8.94 > 5.09$.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 28,
    solution_overview: `A manufacturing plant's stamping press has an initial value of \\$120,000 and depreciates continuously at an annual rate of 18% with δ = 0.18. Management wants to know how long it will take for the press to lose 60% of its original value, retaining only 40%, and how that compares to a slower depreciation scenario and to losing a larger share of value.

The press starts at \\$120,000 and depreciates continuously at $\\delta=0.18$:

$$v_0 = 120{,}000, \\qquad \\delta = 0.18$$

Losing $60\\%$ of value means retaining $40\\%$, so $v(t)=0.40 v_0$. Continuous depreciation $v(t)=v_0 e^{-\\delta t}$ isolates as

$$t = \\frac{\\ln\\bigl(\\frac{1}{0.40}\\bigr)}{\\delta} = \\frac{\\ln 2.5}{\\delta}$$`,
  },
  {
    id: `math-11-29`,
    case_id: `MATH 11.29`,
    title: `How the Continuous-vs-Annual Gap Widens With Rate and Time at a Regional Bank`,
    subsection: `3.2`,
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
      `**A.** → True

At $3\\%$ for one year the continuous-minus-annual gap is

$$G(0.03,1) = 25{,}000\\bigl(e^{0.03} - 1.03\\bigr)$$

$$e^{0.03} \\approx 1.030455$$

$$G(0.03,1) \\approx 11.36$$

Compare the computed value with the claim (approximately \\$11.36). The two sides agree.

So the statement is True.`,
      `**B.** → True

At $15\\%$ for one year the continuous-minus-annual gap is

$$G(0.15,1) = 25{,}000\\bigl(e^{0.15} - 1.15\\bigr)$$

$$e^{0.15} \\approx 1.161834$$

$$G(0.15,1) \\approx 295.86$$

Compare the computed value with the claim (approximately \\$295.86). The two sides agree.

So the statement is True.`,
      `**C.** → False

The one-year gaps at the two rates are

$$G(0.03,1) = 25{,}000\\bigl(e^{0.03}-1.03\\bigr) \\approx 11.36$$

$$G(0.15,1) = 25{,}000\\bigl(e^{0.15}-1.15\\bigr) \\approx 295.86$$

$$\\frac{295.86}{11.36} \\approx 26.04$$

The claim needs a ratio greater than $30$. We have $26.04 < 30$.

So the statement is False.`,
      `**D.** → True

Extending the $3\\%$ comparison to eight years gives

$$G(0.03,8) = 25{,}000\\bigl(e^{0.24} - (1.03)^{8}\\bigr)$$

$$e^{0.24} \\approx 1.271249, \\qquad (1.03)^{8} \\approx 1.266770$$

$$G(0.03,8) \\approx 111.98$$

The claim is approximately \\$111.98.

So the statement is True.`,
      `**E.** → False

The eight-year $3\\%$ gap is larger than the one-year $3\\%$ gap:

$$G(0.03,1) \\approx 11.36$$

$$G(0.03,8) \\approx 111.98$$

The continuous advantage widens as $t$ grows. The claim needs it to become less advantageous over longer holding periods. We have $111.98 > 11.36$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 29,
    solution_overview: `A regional bank's marketing team wants to demonstrate to clients how the dollar gap between continuous compounding and ordinary annual compounding changes with the interest rate and the holding period. It compares nominal rates of 3% and 15%, each applied for 1 year to a \\$25,000 deposit, and then extends the 3% case to an 8-year horizon.

The bank compares continuous compounding with ordinary annual compounding on a \\$25,000 deposit, first at $3\\%$ and $15\\%$ for one year, then at $3\\%$ for eight years:

$$P = 25{,}000$$

$$r = 3\\% = 0.03, \\qquad r = 15\\% = 0.15$$

The dollar gap between the two clocks is

$$G(r,t) = P\\bigl(e^{rt} - (1+r)^{t}\\bigr)$$`,
  },
  {
    id: `math-11-30`,
    case_id: `MATH 11.30`,
    title: `Continuous Compounding as the Ceiling on a Fund's Return at an Investment Advisory Firm`,
    subsection: `3.2`,
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
      `**A.** → True

Fund A's continuous year-end value is

$$S_A = 400{,}000 \\times e^{0.095}$$

$$e^{0.095} \\approx 1.099659$$

$$S_A \\approx 439{,}863.54$$

Compare the computed value with the claim (approximately \\$439,863.54). The two sides agree.

So the statement is True.`,
      `**B.** → False

Fund B's monthly year-end value is

$$S_B = 400{,}000 \\times \\left(1+\\frac{0.095}{12}\\right)^{12}$$

$$\\left(1+\\frac{0.095}{12}\\right)^{12} \\approx 1.099248$$

$$S_B \\approx 439{,}699.03$$

The claim is approximately \\$439,750.00. We have $439{,}699.03 \\ne 439{,}750.00$.

So the statement is False.`,
      `**C.** → False

The continuous compounding ceiling at this $9.5\\%$ quote is

$$R_{\\mathrm{c}} = e^{0.095} - 1 \\approx 0.099659 \\approx 9.97\\%$$

Compare the computed value with the claim (about $9.50\\%$, equal to the nominal rate). We have $9.97\\% \\ne 9.50\\%$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

Daily compounding at the same $9.5\\%$ quote uses $n=365$:

$$S_{\\mathrm{day}} = 400{,}000 \\times \\left(1+\\frac{0.095}{365}\\right)^{365}$$

$$\\left(1+\\frac{0.095}{365}\\right)^{365} \\approx 1.099645$$

$$S_{\\mathrm{day}} \\approx 439{,}858.10$$

$$S_A = 400{,}000 \\times e^{0.095} \\approx 439{,}863.54$$

The claim needs $S_{\\mathrm{day}}>S_A$. We have $439{,}858.10 < 439{,}863.54$.

So the statement is False.`,
      `**E.** → True

Fund A, monthly Fund B, and daily compounding at the same $9.5\\%$ give

$$S_A = 400{,}000 \\times e^{0.095} \\approx 439{,}863.54$$

$$S_B = 400{,}000 \\times \\left(1+\\frac{0.095}{12}\\right)^{12} \\approx 439{,}699.03$$

$$S_{\\mathrm{day}} = 400{,}000 \\times \\left(1+\\frac{0.095}{365}\\right)^{365} \\approx 439{,}858.10$$

$$S_A - S_B \\approx 164.51$$

$$S_A - S_{\\mathrm{day}} \\approx 5.44$$

The claim needs the daily gap to be smaller. We have $5.44 < 164.51$.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 30,
    solution_overview: `An investment advisory firm is evaluating a \\$400,000 allocation and comparing two funds that both quote a nominal annual rate of 9.5%: Fund A compounds continuously, while Fund B compounds monthly. The firm also wants to check whether switching Fund B to daily compounding could ever let it catch up to or overtake Fund A.

Both funds quote a 9.5% nominal annual rate on a \\$400,000 allocation for one year. Fund A compounds continuously; Fund B compounds monthly:

$$P = 400{,}000, \\qquad r = 9.5\\% = 0.095, \\qquad t = 1$$

$$n_B = 12$$

The two one-year balances, and the continuous effective annual rate, are

$$S_A = P e^{r}, \\qquad S_B = P\\left(1+\\frac{r}{n}\\right)^{n}, \\qquad R_{\\mathrm{c}} = e^{r}-1$$`,
  },
  {
    id: `math-11-31`,
    case_id: `MATH 11.31`,
    title: `Reverse-Engineering the Implied Rate of a Boutique Winery's Futures Fund`,
    subsection: `3.2`,
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
      `**A.** → True

Continuous compounding uses the force of interest from the overview:

$$
A = P e^{rt}
$$

Substituting the stem inputs recovered in the overview gives

$$
r \\approx 6.67\\%
$$

The claim asserts

$$
r \\approx 6.67\\%
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Five years from the start is two years beyond the observed data:

$$S(5) = 28{,}000 \\times \\left(\\frac{34{,}200}{28{,}000}\\right)^{\\frac{5}{3}}$$

$$\\left(\\frac{34{,}200}{28{,}000}\\right)^{\\frac{5}{3}} \\approx 1.395662$$

$$S(5) \\approx 39{,}078.52$$

The claim is approximately \\$39,078.52.

So the statement is True.`,
      `**C.** → False

A straight-line extension of the observed three-year dollar gain is

$$\\frac{34{,}200-28{,}000}{3} = 2{,}066.67$$

$$34{,}200 + 2 \\times 2{,}066.67 = 38{,}333.33$$

The exponential projection was $S(5) \\approx 39{,}078.52$. The claim needs these to match. We have $38{,}333.33 \\ne 39{,}078.52$.

So the statement is False.`,
      `**D.** → False

Doubling the original \\$28,000 at the recovered rate takes

$$t_2 = \\frac{\\ln 2}{0.06667} \\approx 10.40$$

Compare the computed value with the claim (about $12.40$ years). We have $10.40 \\ne 12.40$. The two sides do not agree.

So the statement is False.`,
      `**E.** → False

If the implied rate had been $6.00\\%$, the three-year value would be

$$S(3) = 28{,}000 \\times e^{0.06 \\times 3} = 28{,}000 \\times e^{0.18}$$

$$e^{0.18} \\approx 1.197217$$

$$S(3) \\approx 33{,}522.09$$

The claim needs $S(3)>34{,}200$. We have $33{,}522.09 < 34{,}200$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 31,
    solution_overview: `A boutique winery's grape futures fund grew continuously, at an unstated nominal annual rate, from \\$28,000 to \\$34,200 over the past 3 years. The fund manager wants to determine the implied rate and then project the fund's value 2 further years into the future, for 5 years from the start.

The fund grew continuously from \\$28,000 to \\$34,200 over three years:

$$S_0 = 28{,}000, \\qquad S(3) = 34{,}200, \\qquad t = 3$$

Continuous growth follows $S(t)=S_0 e^{rt}$, so the implied rate is

$$r = \\frac{1}{t}\\ln\\bigl(\\frac{S(t)}{S_0}\\bigr)$$

$$r = \\frac{1}{3}\\ln\\bigl(\\frac{34{,}200}{28{,}000}\\bigr) \\approx 0.06667 = 6.67\\%$$

A later value at time $T$ is $S(T)=S_0 e^{rT}$.`,
  },
  {
    id: `math-11-32`,
    case_id: `MATH 11.32`,
    title: `A Corporate Treasurer's Three-Bank Comparison With Differing Nominal Rates`,
    subsection: `3.2`,
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
      `**A.** → True

Bank X compounds continuously at $6.8\\%$ for two years:

$$S_X = 60{,}000 \\times e^{0.068 \\times 2} = 60{,}000 \\times e^{0.136}$$

$$e^{0.136} \\approx 1.145682$$

$$S_X \\approx 68{,}740.91$$

Compare the computed value with the claim (approximately \\$68,740.91). The two sides agree.

So the statement is True.`,
      `**B.** → True

Bank Y compounds monthly at $6.9\\%$ for $24$ periods:

$$S_Y = 60{,}000 \\times \\left(1+\\frac{0.069}{12}\\right)^{24}$$

$$\\left(1.00575\\right)^{24} \\approx 1.147522$$

$$S_Y \\approx 68{,}851.32$$

The claim is approximately \\$68,851.32.

So the statement is True.`,
      `**C.** → True

Bank Z compounds quarterly at $7.0\\%$ for $8$ periods:

$$S_Z = 60{,}000 \\times \\left(1+\\frac{0.070}{4}\\right)^{8}$$

$$\\left(1.0175\\right)^{8} \\approx 1.148882$$

$$S_Z \\approx 68{,}932.91$$

The claim is approximately \\$68,932.91.

So the statement is True.`,
      `**D.** → True

The three two-year values are

$$S_X = 60{,}000 \\times e^{0.136} \\approx 68{,}740.91$$

$$S_Y = 60{,}000 \\times (1.00575)^{24} \\approx 68{,}851.32$$

$$S_Z = 60{,}000 \\times (1.0175)^{8} \\approx 68{,}932.91$$

These satisfy $S_X < S_Y < S_Z$. Bank X is the lowest of the three.

So the statement is True.`,
      `**E.** → True

Raising Bank X to a $7.0\\%$ continuous quote for two years gives

$$S_X' = 60{,}000 \\times e^{0.07 \\times 2} = 60{,}000 \\times e^{0.14}$$

$$e^{0.14} \\approx 1.150274$$

$$S_X' \\approx 69{,}016.43$$

$$S_Z = 60{,}000 \\times (1.0175)^{8} \\approx 68{,}932.91$$

The claim needs $S_X'>S_Z$. We have $69{,}016.43 > 68{,}932.91$.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 32,
    solution_overview: `A corporate treasurer is placing \\$60,000 for 2 years and compares three offers: Bank X compounds continuously at a nominal annual rate of 6.8%; Bank Y compounds monthly at a nominal annual rate of 6.9%; Bank Z compounds quarterly at a nominal annual rate of 7.0%.

The treasurer places \\$60,000 for two years under three offers:

$$P = 60{,}000, \\qquad t = 2$$

Bank X compounds continuously at $6.8\\%$:

$$r_X = 6.8\\% = 0.068$$

Bank Y compounds monthly at $6.9\\%$:

$$r_Y = 6.9\\% = 0.069, \\qquad n_Y = 12$$

Bank Z compounds quarterly at $7.0\\%$:

$$r_Z = 7.0\\% = 0.070, \\qquad n_Z = 4$$

The three future-value models are

$$S_X = P e^{r_X t}, \\qquad S_Y = P\\left(1+\\frac{r_Y}{n_Y}\\right)^{n_Y t}, \\qquad S_Z = P\\left(1+\\frac{r_Z}{n_Z}\\right)^{n_Z t}$$`,
  },
  {
    id: `math-11-33`,
    case_id: `MATH 11.33`,
    title: `Net Growth Rate of a Hedge Fund After a Continuous Management Fee Drag`,
    subsection: `3.2`,
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
      `**A.** → False

Continuous compounding uses the force of interest from the overview:

$$
A = P e^{rt}
$$

Substituting the stem inputs recovered in the overview gives

$$
r_{\\mathrm{net}}=7\\%
$$

The claim asserts a different figure. Against the recovered

$$
r_{\mathrm{net}}=7\%
$$

those values do not agree.

So the statement is False.`,
      `**B.** → False

Six years at the recovered $7\\%$ net rate give

$$S(6) = 2{,}000{,}000 \\times e^{0.07 \\times 6} = 2{,}000{,}000 \\times e^{0.42}$$

$$e^{0.42} \\approx 1.522123$$

$$S(6) \\approx 3{,}043{,}923.11$$

The claim is approximately \\$3,100,000.00. We have $3{,}043{,}923.11 \\ne 3{,}100{,}000.00$.

So the statement is False.`,
      `**C.** → False

Doubling at the recovered $7\\%$ net rate takes

$$t_2 = \\frac{\\ln 2}{0.07} \\approx 9.90$$

Compare the computed value with the claim (about $7.00$ years). We have $9.90 \\ne 7.00$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

A $3.5\\%$ fee leaves a net rate of $9\\% - 3.5\\% = 5.5\\%$:

$$S(6) = 2{,}000{,}000 \\times e^{0.055 \\times 6} = 2{,}000{,}000 \\times e^{0.33}$$

$$e^{0.33} \\approx 1.390968$$

$$S(6) \\approx 2{,}781{,}936.26$$

The doubling time at this net rate is

$$t_2' = \\frac{\\ln 2}{0.055} \\approx 12.60$$

At the original $7\\%$ net rate, $t_2=\\frac{\\ln 2}{0.07}\\approx 9.90$. The wait lengthens from $9.90$ to $12.60$, it does not shorten.

So the statement is False.`,
      `**E.** → True

Raising the fee lowers $r_{\\mathrm{net}}=r-f$ and therefore lowers $S(t)=S_0 e^{r_{\\mathrm{net}} t}$ at every $t>0$. A higher fee reduces both the net growth rate and the cumulative value.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `A hedge fund's gross asset value of \\$2,000,000 grows continuously at a nominal annual rate of 9%, but the fund also deducts a continuous annual management fee of 2%, which acts as a constant drag on the growth rate.

The fund starts at \\$2,000,000, grows continuously at $9\\%$, and pays a continuous $2\\%$ management fee:

$$S_0 = 2{,}000{,}000, \\qquad r = 9\\% = 0.09, \\qquad f = 2\\% = 0.02$$

The fee is a constant drag, so the net continuous rate is

$$r_{\\mathrm{net}} = r - f = 0.09 - 0.02 = 0.07 = 7\\%$$

Net asset value then follows $S(t)=S_0 e^{r_{\\mathrm{net}} t}$.`,
  },
  {
    id: `math-11-34`,
    case_id: `MATH 11.34`,
    title: `Crossover Point Between a Growing Equity Stake and Shrinking Factory Equipment`,
    subsection: `3.2`,
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
      `**A.** → True

The overview isolated the crossover as $t=\\frac{\\ln\\bigl(\\frac{B_0}{A_0}\\bigr)}{r_A+\\delta_B}$. The claim is that same isolation.

So the statement is True.`,
      `**B.** → True

Substituting the recovered opening values and rates gives

$$t = \\frac{\\ln\\bigl(\\frac{250{,}000}{50{,}000}\\bigr)}{0.04+0.12} = \\frac{\\ln 5}{0.16}$$

$$\\ln 5 \\approx 1.609438$$

$$t \\approx 10.06$$

At that time Asset A is worth

$$A(10.06) = 50{,}000 \\times e^{0.04 \\times 10.06} \\approx 74{,}767.44$$

The claim is about $t \\approx 10.06$ years and about \\$74,767.44.

So the statement is True.`,
      `**C.** → False

At exactly $t=10$ the two values are

$$A(10) = 50{,}000 \\times e^{0.04 \\times 10} = 50{,}000 \\times e^{0.40} \\approx 74{,}591.23$$

$$B(10) = 250{,}000 \\times e^{-0.12 \\times 10} = 250{,}000 \\times e^{-1.20} \\approx 75{,}298.55$$

The claim needs $A(10)>B(10)$. We have $74{,}591.23 < 75{,}298.55$.

So the statement is False.`,
      `**D.** → False

Solve the growth equation for time by taking logarithms. With periodic rate $i$ and target multiple $M$:

$$
t = \\frac{\\ln M}{\\ln(1+i)}
$$

Substitute the recovered rate:

$$
t = \\frac{\\ln 5}{0.16} \\approx 10.06.
$$

So the statement is False.`,
      `**E.** → True

For $t$ larger than the crossover $t_*\\approx 10.06$, the exponent $(r_A+\\delta_B)(t-t_*)$ is positive, so $A(t)>B(t)$ stays in force. Asset A remains ahead after the crossing.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.

Asset A starts at \\$50,000 and grows continuously at $4\\%$. Asset B starts at \\$250,000 and depreciates continuously at $12\\%$:

$$A_0 = 50{,}000, \\qquad r_A = 4\\% = 0.04$$

$$B_0 = 250{,}000, \\qquad \\delta_B = 12\\% = 0.12$$

The two paths are $A(t)=A_0 e^{r_A t}$ and $B(t)=B_0 e^{-\\delta_B t}$. Setting $A(t)=B(t)$ isolates the crossover time

$$t = \\frac{\\ln\\bigl(\\frac{B_0}{A_0}\\bigr)}{r_A+\\delta_B}$$`,
  },
  {
    id: `math-11-35`,
    case_id: `MATH 11.35`,
    title: `Verifying the Compounding-Frequency Ceiling Across Four Schedules for a Municipal Reserve`,
    subsection: `3.2`,
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
      `**A.** → True

Annual compounding is a single $7\\%$ credit:

$$S_1 = 40{,}000 \\times 1.07 = 42{,}800.00$$

Compare the computed value with the claim (\\$42,800.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

Quarterly and monthly compounding at the same $7\\%$ quote give

$$S_4 = 40{,}000 \\times \\left(1+\\frac{0.07}{4}\\right)^{4}$$

$$\\left(1.0175\\right)^{4} \\approx 1.071859$$

$$S_4 \\approx 42{,}874.36$$

$$S_{12} = 40{,}000 \\times \\left(1+\\frac{0.07}{12}\\right)^{12}$$

$$\\left(1+\\frac{0.07}{12}\\right)^{12} \\approx 1.072290$$

$$S_{12} \\approx 42{,}891.60$$

The claim is about \\$42,874.36 and about \\$42,891.60.

So the statement is True.`,
      `**C.** → True

The four one-year values at the same $7\\%$ quote are

$$S_1 = 40{,}000 \\times 1.07 = 42{,}800.00$$

$$S_4 = 40{,}000 \\times (1.0175)^{4} \\approx 42{,}874.36$$

$$S_{12} = 40{,}000 \\times \\left(1+\\frac{0.07}{12}\\right)^{12} \\approx 42{,}891.60$$

$$S_{\\mathrm{c}} = 40{,}000 \\times e^{0.07} \\approx 42{,}900.33$$

These satisfy $S_1 < S_4 < S_{12} < S_{\\mathrm{c}}$.

So the statement is True.`,
      `**D.** → False

The two successive dollar gaps are

$$S_{12} - S_4 \\approx 42{,}891.60 - 42{,}874.36 = 17.24$$

$$S_{\\mathrm{c}} - S_{12} \\approx 42{,}900.33 - 42{,}891.60 = 8.73$$

The claim needs $17.24 < 8.73$. We have $17.24 > 8.73$.

So the statement is False.`,
      `**E.** → True

Continuous compounding at this $7\\%$ quote is the ceiling:

$$S_{\\mathrm{c}} = 40{,}000 \\times e^{0.07} \\approx 42{,}900.33$$

Every finite $m$ gives $S_m < S_{\\mathrm{c}}$. No schedule can exceed \\$42,900.33 at this same nominal rate.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `A municipal finance office is comparing four compounding schedules, all at the same nominal annual rate of 7%, applied to a \\$40,000 reserve fund for exactly 1 year: annual, quarterly, monthly, and continuous. The office wants to confirm the textbook's claim that increasing compounding frequency strictly increases the year-end value, up to the continuous-compounding ceiling.

The reserve is \\$40,000 for one year at a 7% nominal annual rate, compared under annual, quarterly, monthly, and continuous compounding:

$$P = 40{,}000, \\qquad i = 7\\% = 0.07, \\qquad t = 1$$

$$m = 1, \\qquad m = 4, \\qquad m = 12$$

Finite compounding and the continuous ceiling are

$$S_m = P\\left(1+\\frac{i}{m}\\right)^{m}, \\qquad S_{\\mathrm{c}} = P e^{i}$$`,
  },
  {
    id: `math-11-36`,
    case_id: `MATH 11.36`,
    title: `Reverse-Engineering the Upfront Deposit Needed for a Tuition Lock`,
    subsection: `3.2`,
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
      `**A.** → True

Option 1 discounts \\$100,000 continuously at $4.5\\%$ for eight years:

$$S_{0,1} = 100{,}000 \\times e^{-0.045 \\times 8} = 100{,}000 \\times e^{-0.36}$$

$$e^{-0.36} \\approx 0.697676$$

$$S_{0,1} \\approx 69{,}767.63$$

The claim is approximately \\$69,767.63.

So the statement is True.`,
      `**B.** → True

Option 2 discounts \\$100,000 continuously at $6.0\\%$ for eight years:

$$S_{0,2} = 100{,}000 \\times e^{-0.06 \\times 8} = 100{,}000 \\times e^{-0.48}$$

$$e^{-0.48} \\approx 0.618783$$

$$S_{0,2} \\approx 61{,}878.34$$

The claim is approximately \\$61,878.34.

So the statement is True.`,
      `**C.** → False

The two required deposits are

$$S_{0,1} = 100{,}000 \\times e^{-0.36} \\approx 69{,}767.63$$

$$S_{0,2} = 100{,}000 \\times e^{-0.48} \\approx 61{,}878.34$$

The claim needs $S_{0,2}>S_{0,1}$. We have $61{,}878.34 < 69{,}767.63$.

So the statement is False.`,
      `**D.** → False

The gap in required deposits is

$$S_{0,1} - S_{0,2} \\approx 69{,}767.63 - 61{,}878.34 = 7{,}889.29$$

Option 2 requires the smaller deposit. The claim is about \\$9,000.00 with Option 2 larger. We have $7{,}889.29 \\ne 9{,}000.00$.

So the statement is False.`,
      `**E.** → False

The same \\$100,000 target in only four years under Option 1 requires

$$S_0' = 100{,}000 \\times e^{-0.045 \\times 4} = 100{,}000 \\times e^{-0.18}$$

$$e^{-0.18} \\approx 0.835270$$

$$S_0' \\approx 83{,}527.02$$

$$S_{0,1} = 100{,}000 \\times e^{-0.36} \\approx 69{,}767.63$$

The claim needs $S_0'<S_{0,1}$. We have $83{,}527.02 > 69{,}767.63$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `A parent wants to guarantee exactly \\$100,000 available in 8 years for a child's college tuition, and is choosing between two continuously-compounded investment vehicles: Option 1 offers a nominal annual rate of 4.5%, while Option 2 offers a nominal annual rate of 6.0%. The parent wants to know how much must be deposited today under each option.

The parent needs \\$100,000 in eight years under two continuously compounded quotes:

$$T = 100{,}000, \\qquad t = 8$$

Option 1 quotes $4.5\\%$ and Option 2 quotes $6.0\\%$:

$$r_1 = 4.5\\% = 0.045, \\qquad r_2 = 6.0\\% = 0.06$$

The required deposit is the continuous present value

$$S_0 = T e^{-rt}$$`,
  },
  {
    id: `math-11-37`,
    case_id: `MATH 11.37`,
    title: `A Logistics Company's Two-Phase Continuous Growth: Expansion Then Maturity`,
    subsection: `3.2`,
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
      `**A.** → True

Four years of continuous $10\\%$ carry the exponent $0.40$:

$$S(4) = 1{,}800{,}000 \\times e^{0.10 \\times 4} = 1{,}800{,}000 \\times e^{0.40}$$

$$e^{0.40} \\approx 1.491825$$

$$S(4) \\approx 2{,}685{,}284.46$$

The claim is approximately \\$2,685,284.46.

So the statement is True.`,
      `**B.** → True

The maturity phase then applies three years of continuous $4\\%$:

$$S(7) = 1{,}800{,}000 \\times e^{0.40 + 0.04 \\times 3} = 1{,}800{,}000 \\times e^{0.52}$$

$$e^{0.52} \\approx 1.682028$$

$$S(7) \\approx 3{,}027{,}649.77$$

The claim is approximately \\$3,027,649.77.

So the statement is True.`,
      `**C.** → True

The single constant rate matching the seven-year outcome is the time-weighted average of the two phase rates:

$$r_* = \\frac{0.10 \\times 4 + 0.04 \\times 3}{7} = \\frac{0.52}{7} \\approx 0.07429 = 7.43\\%$$

Compare the computed value with the claim (about $7.43\\%$). The two sides agree.

So the statement is True.`,
      `**D.** → True

The effective seven-year rate is $r_* \\approx 7.43\\%$. The plain average of the two phase rates is

$$\\frac{0.10+0.04}{2} = 0.07 = 7\\%$$

The claim needs $r_* > 7\\%$. We have $7.43\\% > 7\\%$.

So the statement is True.`,
      `**E.** → True

Reversing the phases adds the same exponents:

$$S_{\\mathrm{rev}}(7) = 1{,}800{,}000 \\times e^{0.04 \\times 3 + 0.10 \\times 4} = 1{,}800{,}000 \\times e^{0.52}$$

That equals the original $S(7)$. The year-7 revenue is unchanged.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 37,
    solution_overview: `A logistics company's revenue base of \\$1,800,000 grows continuously at a nominal annual rate of 10% for the first 4 years of rapid expansion, then slows to a continuous nominal rate of 4% for the following 3 years of maturity, for 7 years total.

Revenue starts at \\$1,800,000, grows continuously at $10\\%$ for four years, then at $4\\%$ for three years:

$$S_0 = 1{,}800{,}000$$

$$r_1 = 10\\% = 0.10, \\qquad t_1 = 4$$

$$r_2 = 4\\% = 0.04, \\qquad t_2 = 3$$

The two-phase value, and the single constant rate matching the whole span, are

$$S(t_1+t_2) = S_0 e^{r_1 t_1 + r_2 t_2}, \\qquad r_* = \\frac{r_1 t_1 + r_2 t_2}{t_1+t_2}$$`,
  },
  {
    id: `math-11-38`,
    case_id: `MATH 11.38`,
    title: `Reverse-Engineering a Crane's Implied Depreciation Rate for a Construction Equipment Reseller`,
    subsection: `3.2`,
    context: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.`,
    statements: [
      `Solving $v_0 \\times e^{-\\delta t} = v(t)$ for δ gives δ = ln($\\frac{v(t)}{v_0}$)/t.`,
      `The implied depreciation rate for the first crane is approximately 16.28% per year.`,
      `A second, otherwise identical crane purchased for the same \\$85,000 but depreciating continuously at a known rate of 15% per year would be worth approximately \\$36,000.00 after the same 6 years.`,
      `The first crane retains more of its value after 6 years than the second crane.`,
      `If the first crane's target resale value had instead been set at \\$40,000 after the same 6 years, the implied depreciation rate would be higher than 16.28%.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

The overview isolated $\\delta=\\frac{1}{t}\\ln\\bigl(\\frac{v_0}{v(t)}\\bigr)$. The claim writes $\\ln\\bigl(\\frac{v(t)}{v_0}\\bigr)$ in the numerator. That ratio is less than $1$ and would make $\\delta$ negative. We have $\\frac{v_0}{v(t)} \\ne \\frac{v(t)}{v_0}$.

So the statement is False.`,
      `**B.** → True

The model $v(t)=v_0 e^{-\\delta t}$ isolates the implied rate as:

$$
\\delta = \\frac{1}{t}\\ln\\bigl(\\frac{v_0}{v(t)}\\bigr)
$$

Substitute the stem numbers:

$$
\\delta = \\frac{1}{6}\\ln\\bigl(\\frac{85{,}000}{32{,}000}\\bigr) \\approx 0.1628 = 16.28\\%
$$

The computed value is approximately 16.28%, which matches the claim.

So the statement is True.`,
      `**C.** → False

The second crane depreciates continuously at $15\\%$ for six years:

$$v_2(6) = 85{,}000 \\times e^{-0.15 \\times 6} = 85{,}000 \\times e^{-0.90}$$

$$e^{-0.90} \\approx 0.406570$$

$$v_2(6) \\approx 34{,}558.42$$

The claim is approximately \\$36,000.00. We have $34{,}558.42 \\ne 36{,}000.00$.

So the statement is False.`,
      `**D.** → False

After six years the two remaining values are

$$v_1(6) = 32{,}000$$

$$v_2(6) = 85{,}000 \\times e^{-0.90} \\approx 34{,}558.42$$

The claim needs $v_1(6)>v_2(6)$. We have $32{,}000 < 34{,}558.42$.

So the statement is False.`,
      `**E.** → False

A \\$40,000 target after the same six years would imply

$$\\delta' = \\frac{1}{6}\\ln\\bigl(\\frac{85{,}000}{40{,}000}\\bigr) \\approx 0.1256 = 12.56\\%$$

The original implied rate was $16.28\\%$. The claim needs $\\delta'>16.28\\%$. We have $12.56\\% < 16.28\\%$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 38,
    solution_overview: `A construction equipment reseller has a crane currently valued at \\$85,000 that, per accounting policy, must be written down to a resale value of \\$32,000 after 6 years of continuous depreciation. The reseller wants to know the implied annual depreciation rate δ, and compare the crane's value retention to a second, otherwise identical crane with a known δ = 15%.

The first crane starts at \\$85,000 and must reach \\$32,000 after six years of continuous depreciation:

$$v_0 = 85{,}000, \\qquad v(6) = 32{,}000, \\qquad t = 6$$

The model $v(t)=v_0 e^{-\\delta t}$ isolates the implied rate as

$$\\delta = \\frac{1}{t}\\ln\\bigl(\\frac{v_0}{v(t)}\\bigr)$$

$$\\delta = \\frac{1}{6}\\ln\\bigl(\\frac{85{,}000}{32{,}000}\\bigr) \\approx 0.1628 = 16.28\\%$$

The second crane uses a known $\\delta=0.15$ over the same six years.`,
  },
  {
    id: `math-11-39`,
    case_id: `MATH 11.39`,
    title: `Doubling, Tripling, and Quadrupling Times for an Impact Investing Fund`,
    subsection: `3.2`,
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
      `**A.** → True

Doubling is the multiple $M=2$:

$$t_2 = \\frac{\\ln 2}{0.065}$$

$$\\ln 2 \\approx 0.693147$$

$$t_2 \\approx 10.66$$

Compare the computed value with the claim (about $10.66$ years). The two sides agree.

So the statement is True.`,
      `**B.** → True

Tripling is the multiple $M=3$:

$$t_3 = \\frac{\\ln 3}{0.065}$$

$$\\ln 3 \\approx 1.098612$$

$$t_3 \\approx 16.90$$

Compare the computed value with the claim (about $16.90$ years). The two sides agree.

So the statement is True.`,
      `**C.** → True

Quadrupling is the multiple $M=4=2^{2}$:

$$t_4 = \\frac{\\ln 4}{0.065} = \\frac{2\\ln 2}{0.065}$$

$$t_4 \\approx 21.33$$

$$2 \\times t_2 = 2 \\times \\frac{\\ln 2}{0.065} \\approx 21.33$$

The quadrupling time is about $21.33$ years and equals twice the doubling time.

So the statement is True.`,
      `**D.** → True

Quadrupling the \\$12,000 deposit gives

$$4 \\times 12{,}000 = 48{,}000$$

At the quadrupling time the fund is worth exactly \\$48,000.00.

So the statement is True.`,
      `**E.** → False

The two waiting times at $r=0.065$ are

$$t_3 = \\frac{\\ln 3}{0.065} \\approx 16.90$$

$$t_2 = \\frac{\\ln 2}{0.065} \\approx 10.66$$

$$1.5 \\times t_2 \\approx 15.99$$

The claim needs $t_3=1.5\\,t_2$. We have $16.90 \\ne 15.99$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 39,
    solution_overview: `A socially-responsible impact investing fund places \\$12,000 into a continuously-compounded account at a nominal annual rate of 6.5%, and the fund's trustees want to understand exactly how the times needed to double, triple, and quadruple the initial investment relate to one another.

The fund places \\$12,000 at a 6.5% nominal annual rate compounded continuously:

$$S_0 = 12{,}000, \\qquad r = 6.5\\% = 0.065$$

The balance follows $S(t)=S_0 e^{rt}$. Reaching a multiple $M$ of the deposit takes

$$t_M = \\frac{\\ln M}{r}$$`,
  },
  {
    id: `math-11-40`,
    case_id: `MATH 11.40`,
    title: `Capstone: A Three-Asset Family Office Portfolio Under Continuous Growth and Decay`,
    subsection: `3.2`,
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
      `**A.** → True

Asset A grows continuously at $6\\%$ for five years:

$$A(5) = 150{,}000 \\times e^{0.06 \\times 5} = 150{,}000 \\times e^{0.30}$$

$$e^{0.30} \\approx 1.349859$$

$$A(5) \\approx 202{,}478.82$$

Compare the computed value with the claim (approximately \\$202,478.82). The two sides agree.

So the statement is True.`,
      `**B.** → True

Asset B depreciates continuously at $9\\%$ for five years:

$$B(5) = 220{,}000 \\times e^{-0.09 \\times 5} = 220{,}000 \\times e^{-0.45}$$

$$e^{-0.45} \\approx 0.637628$$

$$B(5) \\approx 140{,}278.19$$

The claim is approximately \\$140,278.19.

So the statement is True.`,
      `**C.** → False

Asset C grows continuously at $8\\%$ for three years, then at $3\\%$ for two years:

$$C(5) = 100{,}000 \\times e^{0.08 \\times 3 + 0.03 \\times 2} = 100{,}000 \\times e^{0.30}$$

$$e^{0.30} \\approx 1.349859$$

$$C(5) \\approx 134{,}985.88$$

The claim is approximately \\$130,000.00. We have $134{,}985.88 \\ne 130{,}000.00$.

So the statement is False.`,
      `**D.** → False

The combined five-year value is the sum of the three terminal amounts:

$$A(5) = 150{,}000 \\times e^{0.30} \\approx 202{,}478.82$$

$$B(5) = 220{,}000 \\times e^{-0.45} \\approx 140{,}278.19$$

$$C(5) = 100{,}000 \\times e^{0.30} \\approx 134{,}985.88$$

$$A(5)+B(5)+C(5) \\approx 477{,}742.89$$

The original principals sum to $150{,}000+220{,}000+100{,}000=470{,}000$. The claim needs $477{,}742.89 < 470{,}000$. We have $477{,}742.89 > 470{,}000$.

So the statement is False.`,
      `**E.** → True

If Asset B instead grew continuously at $9\\%$ for five years:

$$B^{+}(5) = 220{,}000 \\times e^{0.09 \\times 5} = 220{,}000 \\times e^{0.45}$$

$$e^{0.45} \\approx 1.568312$$

$$B^{+}(5) \\approx 345{,}028.68$$

The claim needs $B^{+}(5)>340{,}000$. We have $345{,}028.68 > 340{,}000$.

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 40,
    solution_overview: `A family office's capstone valuation combines three holdings, all valued in nominal undiscounted dollars and added together just like ordinary fixed amounts. Asset A is a private equity stake currently worth \\$150,000, growing continuously at a nominal annual rate of 6% for 5 years. Asset B is aging warehouse machinery currently worth \\$220,000, depreciating continuously at an annual rate of 9% for the same 5 years. Asset C is a licensing agreement currently worth \\$100,000 that grows continuously at 8% for its first 3 years before slowing to a continuous 3% for its remaining 2 years of the 5-year total.

The family office adds three five-year values in undiscounted dollars.

Asset A starts at \\$150,000 and grows continuously at $6\\%$:

$$A_0 = 150{,}000, \\qquad r_A = 6\\% = 0.06, \\qquad t = 5$$

Asset B starts at \\$220,000 and depreciates continuously at $9\\%$:

$$B_0 = 220{,}000, \\qquad \\delta_B = 9\\% = 0.09$$

Asset C starts at \\$100,000, grows continuously at $8\\%$ for three years, then at $3\\%$ for two years:

$$C_0 = 100{,}000, \\qquad r_{C,1}=0.08,\\; t_{C,1}=3, \\qquad r_{C,2}=0.03,\\; t_{C,2}=2$$

The three terminal values are

$$A(5)=A_0 e^{r_A t}, \\qquad B(5)=B_0 e^{-\\delta_B t}, \\qquad C(5)=C_0 e^{r_{C,1}t_{C,1}+r_{C,2}t_{C,2}}$$`,
  },
  {
    id: `math-11-41`,
    case_id: `MATH 11.41`,
    title: `Present Value of a Client Bonus Payment`,
    subsection: `3.3`,
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
      `**A.** → True

A single future payment discounts through the annual growth factor:

$$
(1+r)^{-t}
$$

Substitute the stem numbers:

$$
(1.05)^{-1} = \\frac{1}{1.05} \\approx 0.9524
$$

The computed value is approximately 0.9524, which matches the claim.

So the statement is True.`,
      `**B.** → True

A single future payment discounts through the annual growth factor:

$$
\\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV} = \\frac{8{,}000}{1.05} \\approx 7{,}619.05
$$

The computed value is approximately \$7,619.05, which matches the claim.

So the statement is True.`,
      `**C.** → False

A higher discount rate lowers present value. At $r=0.10$:

$$\\mathrm{PDV}=\\frac{8{,}000}{1.10}\\approx 7{,}272.73$$

The overview recovered $\\mathrm{PDV}\\approx 7{,}619.05$ at $5\\%$. We have $7{,}272.73<7{,}619.05$.

So the statement is False.`,
      `**D.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $\\mathrm{PDV}\\approx 7{,}619.05$. Face value minus present value is

$$8{,}000-7{,}619.05=380.95$$

The claim is \\$423.81.

So the statement is False.`,
      `**E.** → False

At $r=0$ the discount factor is $1$:

$$\\mathrm{PDV}=8{,}000\\times 1=8{,}000$$

Compare the computed value with the claim (\\$7,500). The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 41,
    solution_overview: `Ms. Kettering has been promised a \\$8,000 performance bonus in exactly 1 year. The prevailing rate is 5% per year, compounded annually.

**Part 1: Setup.**

$$K = 8{,}000, \\qquad r = 0.05, \\qquad t = 1$$

A single future payment discounts through the annual growth factor:

$$\\mathrm{PDV} = K(1+r)^{-t}$$

**Part 2: Solve.**

$$(1.05)^{-1} = \\frac{1}{1.05} \\approx 0.9524$$

$$\\mathrm{PDV} = \\frac{8{,}000}{1.05} \\approx 7{,}619.05$$`,
  },
  {
    id: `math-11-42`,
    case_id: `MATH 11.42`,
    title: `Continuous Compounding on a Consulting Milestone Payment`,
    subsection: `3.3`,
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
      `**A.** → True

Annual compounding at the same rate uses:

$$
e^{-rt}
$$

Substitute the stem numbers:

$$
e^{-0.18} \\approx 0.8353
$$

The computed value is approximately 0.8353, which matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

Continuous present value multiplies the future payment by the discount factor:

$$
\\mathrm{PDV} = Ke^{-rt}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV} = 12{,}000e^{-0.18} \\approx 10{,}023.24
$$

The computed value is approximately \$10,023.24, which matches the claim.

So the statement is True.`,
      `**C.** → False

Read the present value recovered in the overview:

$$
\\mathrm{PDV}\\approx 10{,}023.24
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

The overview recovered $\\mathrm{PDV}_{\\mathrm{ann}}\\approx 10{,}075.43$ and $\\mathrm{PDV}\\approx 10{,}023.24$:

$$10{,}075.43-10{,}023.24=52.19$$

Compare the computed value with the claim (\\$60.00). The two sides do not agree.

So the statement is False.`,
      `**E.** → True

If the payment is due in $6$ years instead,

$$rt=0.06\\times 6=0.36$$

$$\\mathrm{PDV}=12{,}000\\,e^{-0.36}\\approx 8{,}372.12$$

The overview recovered $\\mathrm{PDV}\\approx 10{,}023.24$ at $3$ years. We have $8{,}372.12<10{,}023.24$.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 42,
    solution_overview: `A freelance IT consultant will receive a \\$12,000 milestone payment in 3 years. The client's finance department discounts continuously at 6% per year.

**Part 1: Setup.**

$$K = 12{,}000, \\qquad r = 0.06, \\qquad t = 3$$

Continuous discounting uses

$$\\mathrm{PDV} = Ke^{-rt}$$

Annual compounding at the same rate uses

$$\\mathrm{PDV}_{\\mathrm{ann}} = K(1+r)^{-t}$$

**Part 2: Solve.**

$$rt = 0.06 \\times 3 = 0.18$$

$$e^{-0.18} \\approx 0.8353$$

$$\\mathrm{PDV} = 12{,}000e^{-0.18} \\approx 10{,}023.24$$

$$(1.06)^{3} \\approx 1.191016$$

$$\\mathrm{PDV}_{\\mathrm{ann}} = \\frac{12{,}000}{1.191016} \\approx 10{,}075.43$$`,
  },
  {
    id: `math-11-43`,
    case_id: `MATH 11.43`,
    title: `Escrowed Sale Proceeds for a Landlord`,
    subsection: `3.3`,
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
      `**A.** → True

Discrete discounting raises the growth factor to the negative holding time:

$$
(1+r)^{-t}
$$

Substitute the stem numbers:

$$
(1.07)^{8} \\approx 1.718186, \\qquad (1.07)^{-8} \\approx 0.5820
$$

The computed value is approximately 0.5820, which matches the claim.

So the statement is True.`,
      `**B.** → True

Continuous present value multiplies the future payment by the discount factor:

$$
\\mathrm{PDV}_{\\mathrm{ann}} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV}_{\\mathrm{ann}} = 45{,}000 \\times (1.07)^{-8} \\approx 26{,}190.41
$$

The computed value is approximately \$26,190.41, which matches the claim.

So the statement is True.`,
      `**C.** → False

From the overview’s recovered present value:

$$
\\mathrm{PDV}_{\\mathrm{cont}}\\approx 25{,}704.41
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

The overview recovered $\\mathrm{PDV}_{\\mathrm{ann}}\\approx 26{,}190.41$ and $\\mathrm{PDV}_{\\mathrm{cont}}\\approx 25{,}704.41$:

$$26{,}190.41-25{,}704.41=486.00$$

Compare the computed value with the claim (\\$650.00). The two sides do not agree.

So the statement is False.`,
      `**E.** → False

At $r=0$ both discount factors equal $1$:

$$\\mathrm{PDV}=45{,}000\\times 1=45{,}000$$

Compare the computed value with the claim (\\$40,000). The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 43,
    solution_overview: `A landlord is due \\$45,000 in escrowed sale proceeds in 8 years. The applicable rate is 7% per year. Present value is computed under both annual and continuous compounding.

**Part 1: Setup.**

$$K = 45{,}000, \\qquad r = 0.07, \\qquad t = 8$$

Annual compounding uses

$$\\mathrm{PDV}_{\\mathrm{ann}} = K(1+r)^{-t}$$

Continuous compounding uses

$$\\mathrm{PDV}_{\\mathrm{cont}} = Ke^{-rt}$$

**Part 2: Solve.**

$$(1.07)^{8} \\approx 1.718186, \\qquad (1.07)^{-8} \\approx 0.5820$$

$$\\mathrm{PDV}_{\\mathrm{ann}} = 45{,}000 \\times (1.07)^{-8} \\approx 26{,}190.41$$

$$rt = 0.07 \\times 8 = 0.56, \\qquad e^{-0.56} \\approx 0.5712$$

$$\\mathrm{PDV}_{\\mathrm{cont}} = 45{,}000e^{-0.56} \\approx 25{,}704.41$$`,
  },
  {
    id: `math-11-44`,
    case_id: `MATH 11.44`,
    title: `Funding a Future Equipment Purchase`,
    subsection: `3.3`,
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
      `**A.** → False

The overview’s present-value line is

$$
e^{-0.225}\\approx 0.7985
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**B.** → True

The deposit required today is the continuously discounted target:

$$
A = Ke^{-rt}
$$

Substitute the stem numbers:

$$
A = 150{,}000e^{-0.225} \\approx 119{,}777.40
$$

The computed value is approximately \$119,777.40, which matches the claim.

So the statement is True.`,
      `**C.** → False

A deposit of \\$110,000 grows by the reciprocal factor $e^{0.225}$:

$$110{,}000\\times e^{0.225}\\approx 110{,}000\\times 1.2523\\approx 137{,}755.50$$

That balance is below \\$150,000.

So the statement is False.`,
      `**D.** → False

Under annual compounding at the same $4.5\\%$ quote,

$$A_{\\mathrm{ann}}=\\frac{150{,}000}{(1.045)^{5}}\\approx 120{,}367.66$$

The overview recovered the continuous deposit $A\\approx 119{,}777.40$. We have $120{,}367.66>119{,}777.40$.

So the statement is False.`,
      `**E.** → False

At a $10$-year horizon,

$$A=150{,}000\\,e^{-0.045\\times 10}=150{,}000\\,e^{-0.45}\\approx 95{,}644.22$$

Half of the overview's $5$-year deposit is

$$\\frac{119{,}777.40}{2}\\approx 59{,}888.70$$

We have $95{,}644.22\\neq 59{,}888.70$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 44,
    solution_overview: `A dental practice wants \\$150,000 in 5 years for imaging equipment. The dedicated account pays a continuous annual rate of 4.5%.

**Part 1: Setup.**

$$K = 150{,}000, \\qquad r = 0.045, \\qquad t = 5$$

The deposit required today is the continuously discounted target:

$$A = Ke^{-rt}$$

**Part 2: Solve.**

$$rt = 0.045 \\times 5 = 0.225, \\qquad e^{-0.225} \\approx 0.7985$$

$$A = 150{,}000e^{-0.225} \\approx 119{,}777.40$$`,
  },
  {
    id: `math-11-45`,
    case_id: `MATH 11.45`,
    title: `Implied Maturity of a Discounted Promissory Note`,
    subsection: `3.3`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
t = \\frac{\\ln\\!\\left(\\frac{K}{\\mathrm{PDV}}\\right)}{\\ln(1+r)}
$$

Substitute the stem numbers:

$$
\\frac{K}{\\mathrm{PDV}} = \\frac{25{,}000}{18{,}500} \\approx 1.3514
$$

The computed value is approximately 1.3514, which matches the claim.

So the statement is True.`,
      `**B.** → True

Back out the implied rate from the observed discount factor and holding time:

$$
t = \\frac{\\ln\\!\\left(\\frac{K}{\\mathrm{PDV}}\\right)}{\\ln(1+r)}
$$

Substitute the stem numbers:

$$
t = \\frac{0.3011}{0.05827} \\approx 5.17
$$

The computed value is approximately 5.17, which matches the claim.

So the statement is True.`,
      `**C.** → False

At a purchase price of \\$20,000,

$$\\frac{25{,}000}{20{,}000}=1.25, \\qquad t=\\frac{\\ln(1.25)}{\\ln(1.06)}\\approx 3.83$$

The overview recovered $t\\approx 5.17$ at \\$18,500. We have $3.83<5.17$.

So the statement is False.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
t_{\\mathrm{cont}}\\approx 5.02
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

From the overview’s recovered present value:

$$
t_{\\mathrm{cont}}\\approx 5.02
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 45,
    solution_overview: `An investor pays \\$18,500 today for a note that pays \\$25,000 at maturity. The market rate is 6% per year, compounded annually. The unknown is the implied maturity $t$.

**Part 1: Setup.**

$$\\mathrm{PDV} = 18{,}500, \\qquad K = 25{,}000, \\qquad r = 0.06$$

Annual compounding solves

$$t = \\frac{\\ln\\!\\left(\\frac{K}{\\mathrm{PDV}}\\right)}{\\ln(1+r)}$$

Continuous compounding solves

$$t_{\\mathrm{cont}} = \\frac{\\ln\\!\\left(\\frac{K}{\\mathrm{PDV}}\\right)}{r}$$

**Part 2: Solve.**

$$\\frac{K}{\\mathrm{PDV}} = \\frac{25{,}000}{18{,}500} \\approx 1.3514$$

$$\\ln(1.3514) \\approx 0.3011, \\qquad \\ln(1.06) \\approx 0.05827$$

$$t = \\frac{0.3011}{0.05827} \\approx 5.17$$

$$t_{\\mathrm{cont}} = \\frac{0.3011}{0.06} \\approx 5.02$$`,
  },
  {
    id: `math-11-46`,
    case_id: `MATH 11.46`,
    title: `Implied Continuous Discount Rate on a Collectible Painting`,
    subsection: `3.3`,
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
      `**A.** → True

Continuous discounting solves:

$$
r = -\\frac{\\ln\\!\\left(\\frac{\\mathrm{PDV}}{K}\\right)}{t}
$$

Substitute the stem numbers:

$$
\\frac{\\mathrm{PDV}}{K} = \\frac{27{,}000}{60{,}000} = 0.45
$$

The computed value is approximately 0.45, which matches the claim.

So the statement is True.`,
      `**B.** → True

Continuous discounting solves:

$$
r = -\\frac{\\ln\\!\\left(\\frac{\\mathrm{PDV}}{K}\\right)}{t}
$$

Substitute the stem numbers:

$$
r = -\\frac{\\ln(0.45)}{12} = \\frac{0.798508}{12} \\approx 0.0665 = 6.65\\%
$$

The computed value is approximately 6.65%, which matches the claim.

So the statement is True.`,
      `**C.** → True

The overview recovered $r\\approx 0.0665$. At a $6$-year horizon,

$$\\mathrm{PDV}=60{,}000\\,e^{-0.0665\\times 6}=60{,}000\\,e^{-0.399}\\approx 40{,}249.20$$

Compare the computed value with the claim (\\$40,249.20). The two sides agree.

So the statement is True.`,
      `**D.** → False

At a purchase price of \\$30,000,

$$r=-\\frac{\\ln\\!\\left(\\frac{30{,}000}{60{,}000}\\right)}{12}=-\\frac{\\ln(0.5)}{12}\\approx 0.0578=5.78\\%$$

The overview recovered $6.65\\%$ at \\$27,000. We have $5.78\\%<6.65\\%$.

So the statement is False.`,
      `**E.** → True

At a $24$-year horizon with the same discount factor $0.45$,

$$r=-\\frac{\\ln(0.45)}{24}=\\frac{0.798508}{24}\\approx 0.0333=3.33\\%$$

Compare the computed value with the claim ($3.33\\%$). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 46,
    solution_overview: `An art gallery has a guaranteed \\$60,000 sale in 12 years. A collector pays \\$27,000 today for the rights to that payment, discounted continuously. The unknown is the continuous rate $r$.

**Part 1: Setup.**

$$\\mathrm{PDV} = 27{,}000, \\qquad K = 60{,}000, \\qquad t = 12$$

Continuous discounting solves

$$r = -\\frac{\\ln\\!\\left(\\frac{\\mathrm{PDV}}{K}\\right)}{t}$$

**Part 2: Solve.**

$$\\frac{\\mathrm{PDV}}{K} = \\frac{27{,}000}{60{,}000} = 0.45$$

$$r = -\\frac{\\ln(0.45)}{12} = \\frac{0.798508}{12} \\approx 0.0665 = 6.65\\%$$`,
  },
  {
    id: `math-11-47`,
    case_id: `MATH 11.47`,
    title: `Combined Present Value of Two Software Milestone Payments`,
    subsection: `3.3`,
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
      `**A.** → True

Each payment discounts through:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV}_1 = \\frac{40{,}000}{(1.05)^{2}} = \\frac{40{,}000}{1.1025} \\approx 36{,}281.18
$$

The computed value is approximately \$36,281.18, which matches the claim.

So the statement is True.`,
      `**B.** → True

Every payment discounts through:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV}_2 = \\frac{65{,}000}{(1.05)^{5}} \\approx \\frac{65{,}000}{1.276282} \\approx 50{,}930.87
$$

The computed value is approximately \$50,930.87, which matches the claim.

So the statement is True.`,
      `**C.** → True

For each dated amount, payment discounts through:

$$
\\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV} = 36{,}281.18+50{,}930.87 \\approx 87{,}212.05
$$

The computed value is approximately \$87,212.05, which matches the claim.

So the statement is True.`,
      `**D.** → False

The overview’s present-value line is

$$
\\mathrm{PDV}_2\\approx 50{,}930.87
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

Under continuous discounting at the same $5\\%$,

$$\\mathrm{PDV}_1=40{,}000\\,e^{-0.10}\\approx 36{,}193.50$$

$$\\mathrm{PDV}_2=65{,}000\\,e^{-0.25}\\approx 50{,}622.05$$

$$\\mathrm{PDV}\\approx 86{,}815.55$$

The claim needs a combined value below \\$86,000. We have $86{,}815.55>86{,}000$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 47,
    solution_overview: `A software company is due \\$40,000 in 2 years and \\$65,000 in 5 years. Both payments are discounted at 5% per year, compounded annually.

**Part 1: Setup.**

$$K_1 = 40{,}000, \\qquad t_1 = 2$$

$$K_2 = 65{,}000, \\qquad t_2 = 5, \\qquad r = 0.05$$

Each payment discounts through

$$\\mathrm{PDV} = K(1+r)^{-t}$$

**Part 2: Solve.**

$$\\mathrm{PDV}_1 = \\frac{40{,}000}{(1.05)^{2}} = \\frac{40{,}000}{1.1025} \\approx 36{,}281.18$$

$$\\mathrm{PDV}_2 = \\frac{65{,}000}{(1.05)^{5}} \\approx \\frac{65{,}000}{1.276282} \\approx 50{,}930.87$$

$$\\mathrm{PDV} = 36{,}281.18+50{,}930.87 \\approx 87{,}212.05$$`,
  },
  {
    id: `math-11-48`,
    case_id: `MATH 11.48`,
    title: `Comparing an Immediate Payment to a Deferred Payment`,
    subsection: `3.3`,
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
      `**A.** → True

An immediate payment has present value equal to its face:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV}_B = \\frac{25{,}500}{1.191016} \\approx 21{,}410.30
$$

The computed value is approximately \$21,410.30, which matches the claim.

So the statement is True.`,
      `**B.** → True

Option A is worth \$22,000 today. The overview recovered $\mathrm{PDV}_B \approx 21{,}410.30$. Comparing the two present values:

$$22{,}000 > 21{,}410.30$$

Option A is larger at the $6\%$ rate.

So the statement is True.`,
      `**C.** → False

At $r=0.03$,

$$(1.03)^{3}\\approx 1.092727$$

$$\\mathrm{PDV}_B=\\frac{25{,}500}{1.092727}\\approx 23{,}336.02$$

Compare the computed value with the claim (\\$22,780.00). The two sides do not agree.

So the statement is False.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
\\mathrm{PDV}_B\\approx 21{,}410.30
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

At $r=0.05$,

$$(1.05)^{3}=1.157625$$

$$\\mathrm{PDV}_B=\\frac{25{,}500}{1.157625}\\approx 22{,}027.86$$

Compare the computed value with the claim (\\$23,500.00). The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 48,
    solution_overview: `A freelance architect may take \\$22,000 immediately (Option A) or \\$25,500 in 3 years (Option B). The market discount rate is 6% per year, compounded annually.

**Part 1: Setup.**

$$A = 22{,}000, \\qquad t_A = 0$$

$$K_B = 25{,}500, \\qquad t_B = 3, \\qquad r = 0.06$$

A future payment discounts through

$$\\mathrm{PDV} = K(1+r)^{-t}$$

An immediate payment has present value equal to its face.

**Part 2: Solve.**

$$(1.06)^{3} \\approx 1.191016$$

$$\\mathrm{PDV}_B = \\frac{25{,}500}{1.191016} \\approx 21{,}410.30$$`,
  },
  {
    id: `math-11-49`,
    case_id: `MATH 11.49`,
    title: `Optimal Harvest Timing for a Timber Stand`,
    subsection: `3.3`,
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
      `**A.** → True

Harvest present value is $f(t)=P(t)e^{-rt}$. An interior optimum satisfies:

$$
P'(t^{*})=rP(t^{*})
$$

Substitute the stem numbers:

$$
10{,}000=400(t+2), \\qquad t+2=\\frac{2}{r}=25, \\qquad t^{*}=23
$$

The computed value is approximately 23, which matches the claim.

So the statement is True.`,
      `**B.** → False

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

At an interior optimum the derivative of the objective must vanish. Check the overview's first-order condition against the claimed stationarity figure.

The overview used $P'(t^{*})=rP(t^{*})$. The claim instead sets $P'(t^{*})$ equal to $\\frac{P(t^{*})}{r}$.

So the statement is False.`,
      `**C.** → False

From the overview’s recovered present value:

$$
f(23)\\approx 496{,}304.46
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

The overview’s present-value line is

$$
t^{*}=\\frac{2}{r}-2
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

At $t=25$,

$$f(25)=5{,}000(27)^{2}e^{-0.08\\times 25}=3{,}645{,}000\\,e^{-2}\\approx 493{,}297.11$$

The overview recovered $f(23)\\approx 496{,}304.46$. We have $493{,}297.11<496{,}304.46$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 49,
    solution_overview: `A timber stand has market value $P(t)=5{,}000(t+2)^{2}$ dollars. The continuous interest rate is 8% per year.

**Part 1: Setup.**

$$P(t)=5{,}000(t+2)^{2}, \\qquad r=0.08$$

Harvest present value is $f(t)=P(t)e^{-rt}$. An interior optimum satisfies

$$P'(t^{*})=rP(t^{*})$$

**Part 2: Solve.**

$$P'(t)=10{,}000(t+2)$$

$$10{,}000(t+2)=0.08\\times 5{,}000(t+2)^{2}$$

$$10{,}000=400(t+2), \\qquad t+2=\\frac{2}{r}=25, \\qquad t^{*}=23$$

$$f(23)=5{,}000(25)^{2}e^{-0.08\\times 23}=3{,}125{,}000\\,e^{-1.84}\\approx 496{,}304.46$$`,
  },
  {
    id: `math-11-50`,
    case_id: `MATH 11.50`,
    title: `Settling Two Supplier Obligations with a Single Lump Sum`,
    subsection: `3.3`,
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
      `**A.** → True

Each obligation discounts through:

$$
\mathrm{PDV} = K e^{-rt}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV}_1 = 18{,}000e^{-0.22} \\approx 14{,}445.34
$$

The computed value is approximately \$14,445.34, which matches the claim.

So the statement is True.`,
      `**B.** → True

Every obligation discounts through:

$$
\mathrm{PDV} = K e^{-rt}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV}_2 = 30{,}000e^{-0.495} \\approx 18{,}287.13
$$

The computed value is approximately \$18,287.13, which matches the claim.

So the statement is True.`,
      `**C.** → True

For each dated amount, obligation discounts through:

$$
\\mathrm{PDV} = Ke^{-rt}
$$

Substitute the stem numbers:

$$
\\mathrm{PDV} = 14{,}445.34+18{,}287.13 \\approx 32{,}732.47
$$

The computed value is approximately \$32,732.47, which matches the claim.

So the statement is True.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
\\mathrm{PDV}_2\\approx 18{,}287.13
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → True

At $r=0$ each discount factor is $1$:

$$\\mathrm{PDV}=18{,}000+30{,}000=48{,}000$$

Compare the computed value with the claim (\\$48,000). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 50,
    solution_overview: `A boutique winery owes \\$18,000 in 4 years and \\$30,000 in 9 years. The supplier will take one lump sum today, discounted continuously at 5.5% per year.

**Part 1: Setup.**

$$K_1 = 18{,}000, \\qquad t_1 = 4$$

$$K_2 = 30{,}000, \\qquad t_2 = 9, \\qquad r = 0.055$$

Each obligation discounts through

$$\\mathrm{PDV} = Ke^{-rt}$$

**Part 2: Solve.**

$$rt_1 = 0.22, \\qquad e^{-0.22} \\approx 0.8025$$

$$\\mathrm{PDV}_1 = 18{,}000e^{-0.22} \\approx 14{,}445.34$$

$$rt_2 = 0.495, \\qquad e^{-0.495} \\approx 0.6096$$

$$\\mathrm{PDV}_2 = 30{,}000e^{-0.495} \\approx 18{,}287.13$$

$$\\mathrm{PDV} = 14{,}445.34+18{,}287.13 \\approx 32{,}732.47$$`,
  },
  {
    id: `math-11-51`,
    case_id: `MATH 11.51`,
    title: `Finding an Equivalent Annual Rate for a Continuously Discounted Trust Payment`,
    subsection: `3.3`,
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
      `**A.** → False

From the overview’s recovered present value:

$$
\\mathrm{PDV}\\approx 35{,}234.40
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**B.** → False

The overview’s present-value line is

$$
r_a\\approx 5.13\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → False

Read the present value recovered in the overview:

$$
r_a\\approx 5.13\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → True

The overview recovered $1+r_a=e^{0.05}$. At a $3$-year horizon the two clocks agree:

$$\\mathrm{PDV}=50{,}000\\,e^{-0.05\\times 3}=50{,}000\\,e^{-0.15}\\approx 43{,}035.40$$

Compare the computed value with the claim (\\$43,035.40). The two sides agree.

So the statement is True.`,
      `**E.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $r_a\\approx 5.13\\%$. The gap from the continuous quote is

$$5.13\\%-5.00\\%=0.13$$

The claim needs a gap above $1.00$ percentage point. We have $0.13<1.00$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 51,
    solution_overview: `A trust discounts a \\$50,000 payment due in 7 years at a continuous 5% per year. The manager wants the annually compounded rate $r_a$ that produces the same present value.

**Part 1: Setup.**

$$K = 50{,}000, \\qquad r = 0.05, \\qquad t = 7$$

Continuous present value is

$$\\mathrm{PDV} = Ke^{-rt}$$

Matching an annual rate requires $(1+r_a)^{-t}=e^{-rt}$, so

$$1+r_a = e^{r}$$

**Part 2: Solve.**

$$rt = 0.35, \\qquad e^{-0.35} \\approx 0.704688$$

$$\\mathrm{PDV} = 50{,}000 \\times 0.704688 \\approx 35{,}234.40$$

$$1+r_a = e^{0.05} \\approx 1.051271, \\qquad r_a \\approx 0.0513 = 5.13\\%$$`,
  },
  {
    id: `math-11-52`,
    case_id: `MATH 11.52`,
    title: `Meeting a Loan Covenant with a Second Receivable`,
    subsection: `3.3`,
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
      `**A.** → True

Annual present value is $\\mathrm{PDV}=K(1+r)^{-t}$. The unknown face is:

$$
K_2 = \\bigl(\\mathrm{PDV}_{\\mathrm{target}}-\\mathrm{PV}_1\\bigr)(1+r)^{t_2}
$$

Substitute the stem numbers:

$$
\\mathrm{PV}_1 = \\frac{42{,}000}{(1.06)^{3}} = \\frac{42{,}000}{1.191016} \\approx 35{,}264.01
$$

The computed value is approximately \$35,264.01, which matches the claim.

So the statement is True.`,
      `**B.** → True

Annual PDV uses $\mathrm{PDV}=K(1+r)^{-t}$ with the recovered inputs.

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
\\mathrm{PV}_2 = 100{,}000-35{,}264.01 = 64{,}735.99
$$

The computed value is approximately \$64,735.99, which matches the claim.

So the statement is True.`,
      `**C.** → True

Write $\mathrm{PDV}=K(1+r)^{-t}$ before substituting.

$$
K_2 = \\bigl(\\mathrm{PDV}_{\\mathrm{target}}-\\mathrm{PV}_1\\bigr)(1+r)^{t_2}
$$

Substitute the stem numbers:

$$
K_2 = 64{,}735.99 \\times 1.418519 \\approx 91{,}829.24
$$

The computed value is approximately \$91,829.24, which matches the claim.

So the statement is True.`,
      `**D.** → False

If the second receivable is due in $3$ years instead, the overview's required present value $\\mathrm{PV}_2=64{,}735.99$ accumulates for only three years:

$$K_2=64{,}735.99\\times(1.06)^{3}\\approx 77{,}101.60$$

The overview recovered $K_2\\approx 91{,}829.24$ at $6$ years. We have $77{,}101.60<91{,}829.24$.

So the statement is False.`,
      `**E.** → True

The overview recovered that the second receivable must contribute $\\mathrm{PV}_2=64{,}735.99$ today. Accumulating that amount for $6$ years at $8\\%$,

$$K_2=64{,}735.99\\times(1.08)^{6}\\approx 102{,}727.88$$

Compare the computed value with the claim (\\$102,727.88). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 52,
    solution_overview: `A logistics company must show a combined present value of \\$100,000. It already holds a \\$42,000 receivable due in 3 years and is sizing a second receivable due in 6 years. The annual discount rate is 6%.

**Part 1: Setup.**

$$K_1 = 42{,}000, \\qquad t_1 = 3, \\qquad t_2 = 6$$

$$\\mathrm{PDV}_{\\mathrm{target}} = 100{,}000, \\qquad r = 0.06$$

Annual present value is $\\mathrm{PDV}=K(1+r)^{-t}$. The unknown face is

$$K_2 = \\bigl(\\mathrm{PDV}_{\\mathrm{target}}-\\mathrm{PV}_1\\bigr)(1+r)^{t_2}$$

**Part 2: Solve.**

$$\\mathrm{PV}_1 = \\frac{42{,}000}{(1.06)^{3}} = \\frac{42{,}000}{1.191016} \\approx 35{,}264.01$$

$$\\mathrm{PV}_2 = 100{,}000-35{,}264.01 = 64{,}735.99$$

$$(1.06)^{6} \\approx 1.418519$$

$$K_2 = 64{,}735.99 \\times 1.418519 \\approx 91{,}829.24$$`,
  },
  {
    id: `math-11-53`,
    case_id: `MATH 11.53`,
    title: `Finding the Indifference Payment for a Consulting Firm`,
    subsection: `3.3`,
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
      `**A.** → False

From the overview’s recovered present value:

$$
e^{-0.26}\\approx 0.7711
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**B.** → False

The overview’s present-value line is

$$
K\\approx 45{,}392.55
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → False

The overview recovered $K\\approx 45{,}392.55$. The excess over the immediate option is

$$45{,}392.55-35{,}000=10{,}392.55$$

The claim needs an excess above \\$11,000. We have $10{,}392.55<11{,}000$.

So the statement is False.`,
      `**D.** → False

At $r=0.09$ the four-year factor changes:

$$K=35{,}000\\,e^{0.09\\times 4}=35{,}000\\,e^{0.36}\\approx 50{,}166.53$$

The overview recovered $K\\approx 45{,}392.55$ at $6.5\\%$. We have $50{,}166.53\\neq 45{,}392.55$.

So the statement is False.`,
      `**E.** → True

At a $2$-year horizon with the original $6.5\\%$ rate,

$$K=35{,}000\\,e^{0.065\\times 2}=35{,}000\\,e^{0.13}\\approx 39{,}858.99$$

The overview recovered $K\\approx 45{,}392.55$ at $4$ years. We have $39{,}858.99<45{,}392.55$.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 53,
    solution_overview: `A consulting firm can take \\$35,000 immediately or a larger payment in 4 years. The opportunity cost of capital is 6.5% per year, compounded continuously.

**Part 1: Setup.**

$$\\mathrm{PV}_0 = 35{,}000, \\qquad r = 0.065, \\qquad t = 4$$

Indifference requires $\\mathrm{PV}_0=Ke^{-rt}$, so

$$K = \\mathrm{PV}_0 e^{rt}$$

**Part 2: Solve.**

$$rt = 0.065 \\times 4 = 0.26, \\qquad e^{-0.26} \\approx 0.7711$$

$$K = \\frac{35{,}000}{0.7711} \\approx 45{,}392.55$$`,
  },
  {
    id: `math-11-54`,
    case_id: `MATH 11.54`,
    title: `A Corner Solution in Aging Wine Valuation`,
    subsection: `3.3`,
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
      `**A.** → True

At an interior optimum the derivative of the objective must vanish. Check the overview's first-order condition against the claimed stationarity figure.

The overview showed that $P'(t^{*})=rP(t^{*})$ has no solution for $t^{*}>0$, and that $f$ is maximized at $t^{*}=0$. The claim is that same conclusion.

So the statement is True.`,
      `**B.** → True

The interior condition would need $0.05P(t^{*})=0.08P(t^{*})$, which is impossible for $P>0$. The exponent $-0.03t$ makes $f$ strictly decreasing for $t\\ge 0$, so the maximum is at the boundary:

$$
t^{*}=0, \\qquad f(0)=P(0)=40{,}000
$$

The computed value is approximately \$40,000, which matches the claim.

So the statement is True.`,
      `**C.** → True

At $t=10$,

$$f(10)=40{,}000e^{-0.03\\times 10}=40{,}000e^{-0.3}\\approx 29{,}632.73$$

Compare the computed value with the claim (\\$29,632.73). The two sides agree.

So the statement is True.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
f(t)=40{,}000e^{-0.03t}
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:At $r=0.04$,

$$f(t)=40{,}000e^{(0.05-0.04)t}=40{,}000e^{0.01t}$$

This rises with $t$, so the optimum is not $t^{*}=0$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 54,
    solution_overview: `Wine market value is $P(t)=40{,}000e^{0.05t}$ dollars. The continuous discount rate is 8% per year.

**Part 1: Setup.**

$$P(t)=40{,}000e^{0.05t}, \\qquad r=0.08$$

Discounted value is

$$f(t)=P(t)e^{-rt}=40{,}000e^{(0.05-0.08)t}=40{,}000e^{-0.03t}$$

An interior optimum would require $P'(t^{*})=rP(t^{*})$.

**Part 2: Solve.**

$$P'(t)=0.05P(t)$$

The interior condition would need $0.05P(t^{*})=0.08P(t^{*})$, which is impossible for $P>0$. The exponent $-0.03t$ makes $f$ strictly decreasing for $t\\ge 0$, so the maximum is at the boundary:

$$t^{*}=0, \\qquad f(0)=P(0)=40{,}000$$`,
  },
  {
    id: `math-11-55`,
    case_id: `MATH 11.55`,
    title: `Comparative Statics for a Forestry Cooperative's Harvest Timing`,
    subsection: `3.3`,
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
      `**A.** → True

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

At an interior optimum the derivative of the objective must vanish. Check the overview's first-order condition against the claimed stationarity figure.

The overview checked $0.09\\times 520{,}000=46{,}800$, which matches $P'(t^{*})$. The first-order condition holds.

So the statement is True.`,
      `**B.** → True

An interior harvest optimum sets marginal stumpage growth equal to the discounted stumpage value:

$$
\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}
$$

Substitute the stem numbers:

$$
P''(t^{*})-rP'(t^{*})=3{,}120-0.09\\times 46{,}800=3{,}120-4{,}212=-1{,}092
$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → True

At an interior harvest optimum, marginal stumpage growth equals the discount rate.

$$
\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}
$$

Substitute the stem numbers:

$$
\\frac{dt^{*}}{dr}=\\frac{520{,}000}{-1{,}092}\\approx -476.19
$$

The computed value is approximately -476.19, which matches the claim.

So the statement is True.`,
      `**D.** → False

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:$$
\\frac{dt^{*}}{dr}\\approx -476.19<0
$$

That recovered value is not the figure on the card.

So the statement is False.`,
      `**E.** → True

The Faustmann-style first-order condition equates marginal growth with $r$.

$$
\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}
$$

Substitute the stem numbers:

$$
P''(t^{*})-rP'(t^{*})=3{,}120-0.09\\times 46{,}800=3{,}120-4{,}212=-1{,}092
$$

The computed figure matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `At an optimal harvest time the forestry team measured $P(t^{*})=520{,}000$, $P'(t^{*})=46{,}800$, and $P''(t^{*})=3{,}120$ per year, with continuous rate $r=0.09$.

**Part 1: Setup.**

$$P(t^{*})=520{,}000, \\qquad P'(t^{*})=46{,}800, \\qquad P''(t^{*})=3{,}120, \\qquad r=0.09$$

The first-order condition is $P'(t^{*})=rP(t^{*})$. Comparative statics use

$$\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}$$

A maximum requires $P''(t^{*})-rP'(t^{*})<0$.

**Part 2: Solve.**

$$0.09\\times 520{,}000=46{,}800$$

$$P''(t^{*})-rP'(t^{*})=3{,}120-0.09\\times 46{,}800=3{,}120-4{,}212=-1{,}092$$

$$\\frac{dt^{*}}{dr}=\\frac{520{,}000}{-1{,}092}\\approx -476.19$$`,
  },
  {
    id: `math-11-56`,
    case_id: `MATH 11.56`,
    title: `Full Harvest-Timing Analysis for an Orchard's Timber`,
    subsection: `3.3`,
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
      `**A.** → True

An interior optimum satisfies $P'(t^{*})=rP(t^{*})$. Sensitivity uses:

$$
\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}
$$

Substitute the stem numbers:

$$
t+4=\\frac{2}{r}\\approx 22.22, \\qquad t^{*}=\\frac{2}{r}-4\\approx 18.22
$$

The computed value is approximately 18.22, which matches the claim.

So the statement is True.`,
      `**B.** → False

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

The overview recovered $P(t^{*})\\approx 1{,}481{,}481.48$. Discounting to the present,

$$f(t^{*})=1{,}481{,}481.48\\,e^{-0.09\\times 18.22}\\approx 287{,}377.84$$

The claim is \\$250,000.00.

So the statement is False.`,
      `**C.** → False

At an interior optimum the derivative of the objective must vanish. Check the overview's first-order condition against the claimed stationarity figure.$$
P''(t^{*})-rP'(t^{*})=-6{,}000
$$

That recovered value is not the figure on the card.

So the statement is False.`,
      `**D.** → False

Write overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

The overview recovered $P(t^{*})\\approx 1{,}481{,}481.48$ and denominator $-6{,}000$:

$$\\frac{dt^{*}}{dr}=\\frac{1{,}481{,}481.48}{-6{,}000}\\approx -246.91$$

The claim is $+246.91$.

So the statement is False.`,
      `**E.** → False

Using the same setup, the overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $t^{*}=\\frac{2}{r}-4$. At $r=0.045$,

$$t^{*}=\\frac{2}{0.045}-4\\approx 44.44-4=40.44$$

Double the original $18.22$ would be $36.44$. We have $40.44\\neq 36.44$.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `An orchard's timber value is $P(t)=3{,}000(t+4)^{2}$ dollars. The continuous interest rate is 9% per year.

**Part 1: Setup.**

$$P(t)=3{,}000(t+4)^{2}, \\qquad r=0.09$$

$$P'(t)=6{,}000(t+4), \\qquad P''(t)=6{,}000$$

An interior optimum satisfies $P'(t^{*})=rP(t^{*})$. Sensitivity uses

$$\\frac{dt^{*}}{dr}=\\frac{P(t^{*})}{P''(t^{*})-rP'(t^{*})}$$

**Part 2: Solve.**

$$6{,}000(t+4)=0.09\\times 3{,}000(t+4)^{2}$$

$$t+4=\\frac{2}{r}\\approx 22.22, \\qquad t^{*}=\\frac{2}{r}-4\\approx 18.22$$

$$P(t^{*})=3{,}000(22.22)^{2}\\approx 1{,}481{,}481.48$$

$$P'(t^{*})=6{,}000\\times 22.22\\approx 133{,}333.33$$

$$P''(t^{*})-rP'(t^{*})=6{,}000-0.09\\times 133{,}333.33=-6{,}000$$`,
  },
  {
    id: `math-11-57`,
    case_id: `MATH 11.57`,
    title: `Combining a Private-Equity Exit Payment with a Short-Dated Side Payment`,
    subsection: `3.3`,
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
      `**A.** → True

Each payment discounts through $\\mathrm{PDV}=Ke^{-rt}$:

$$
\mathrm{PDV} = K e^{-rt}
$$

Substitute the stem numbers:

$$
\\mathrm{PV}_1 = 250{,}000 \\times 0.759572 \\approx 189{,}893.03
$$

The computed value is approximately \$189,893.03, which matches the claim.

So the statement is True.`,
      `**B.** → True

Continuous present value multiplies the future payment by the discount factor:

$$
\mathrm{PDV} = K e^{-rt}
$$

Substitute the stem numbers:

$$
\\mathrm{PV}_2 = 40{,}000 \\times 0.937849 \\approx 37{,}513.95
$$

The computed value is approximately \$37,513.95, which matches the claim.

So the statement is True.`,
      `**C.** → False

From the overview’s recovered present value:

$$
\\mathrm{PDV}\\approx 227{,}406.98
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $\\mathrm{PV}_2\\approx 37{,}513.95$. The haircut from face is

$$\\frac{40{,}000-37{,}513.95}{40{,}000}\\approx 0.062=6.2\\%$$

The claim needs a haircut above $10\\%$. We have $6.2\\%<10\\%$.

So the statement is False.`,
      `**E.** → True

At $r=0$ each discount factor is $1$:

$$\\mathrm{PDV}=250{,}000+40{,}000=290{,}000$$

Compare the computed value with the claim (\\$290,000). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 57,
    solution_overview: `A private equity fund expects \\$250,000 from an exit in 2.5 years and \\$40,000 in 7 months. Both amounts are discounted continuously at 11% per year.

**Part 1: Setup.**

$$K_1 = 250{,}000, \\qquad t_1 = 2.5$$

$$K_2 = 40{,}000, \\qquad t_2 = \\frac{7}{12}, \\qquad r = 0.11$$

Each payment discounts through $\\mathrm{PDV}=Ke^{-rt}$.

**Part 2: Solve.**

$$rt_1 = 0.11 \\times 2.5 = 0.275, \\qquad e^{-0.275} \\approx 0.759572$$

$$\\mathrm{PV}_1 = 250{,}000 \\times 0.759572 \\approx 189{,}893.03$$

$$rt_2 = 0.11 \\times \\frac{7}{12} \\approx 0.064167, \\qquad e^{-0.064167} \\approx 0.937849$$

$$\\mathrm{PV}_2 = 40{,}000 \\times 0.937849 \\approx 37{,}513.95$$

$$\\mathrm{PDV} = 189{,}893.03+37{,}513.95 \\approx 227{,}406.98$$`,
  },
  {
    id: `math-11-58`,
    case_id: `MATH 11.58`,
    title: `Implied Rate on a Biotech Milestone-Contingent Investment`,
    subsection: `3.3`,
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
      `**A.** → True

Continuous discounting solves:

$$
r = -\\frac{\\ln\\!\\left(\\frac{\\mathrm{PDV}}{K}\\right)}{t}
$$

Substitute the stem numbers:

$$
\\frac{\\mathrm{PDV}}{K} = \\frac{2{,}000{,}000}{3{,}200{,}000} = 0.625
$$

The computed value is approximately 0.625, which matches the claim.

So the statement is True.`,
      `**B.** → True

Continuous discounting solves:

$$
r = -\\frac{\\ln\\!\\left(\\frac{\\mathrm{PDV}}{K}\\right)}{t}
$$

Substitute the stem numbers:

$$
r = -\\frac{\\ln(0.625)}{4.5} = \\frac{0.470004}{4.5} \\approx 0.1044 = 10.44\\%
$$

The computed value is approximately 10.44%, which matches the claim.

So the statement is True.`,
      `**C.** → True

At a \\$3,600,000 payout,

$$r=-\\frac{\\ln\\!\\left(\\frac{2{,}000{,}000}{3{,}600{,}000}\\right)}{4.5}\\approx 0.1306=13.06\\%$$

The overview recovered $10.44\\%$ at \\$3,200,000. We have $13.06\\%>10.44\\%$.

So the statement is True.`,
      `**D.** → False

At a $3$-year horizon with the original discount factor $0.625$,

$$r=-\\frac{\\ln(0.625)}{3}=\\frac{0.470004}{3}\\approx 0.1567=15.67\\%$$

The overview recovered $10.44\\%$ at $4.5$ years. We have $15.67\\%>10.44\\%$.

So the statement is False.`,
      `**E.** → True

At a $9$-year horizon with the same discount factor $0.625$,

$$r=-\\frac{\\ln(0.625)}{9}=\\frac{0.470004}{9}\\approx 0.0522=5.22\\%$$

Compare the computed value with the claim ($5.22\\%$). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Investors paid \\$2,000,000 today for a guaranteed \\$3,200,000 payout in 4.5 years, discounted continuously. The unknown is the implied continuous rate $r$.

**Part 1: Setup.**

$$\\mathrm{PDV} = 2{,}000{,}000, \\qquad K = 3{,}200{,}000, \\qquad t = 4.5$$

Continuous discounting solves

$$r = -\\frac{\\ln\\!\\left(\\frac{\\mathrm{PDV}}{K}\\right)}{t}$$

**Part 2: Solve.**

$$\\frac{\\mathrm{PDV}}{K} = \\frac{2{,}000{,}000}{3{,}200{,}000} = 0.625$$

$$r = -\\frac{\\ln(0.625)}{4.5} = \\frac{0.470004}{4.5} \\approx 0.1044 = 10.44\\%$$`,
  },
  {
    id: `math-11-59`,
    case_id: `MATH 11.59`,
    title: `General Harvest-Timing Formula for a Forestry Consultancy`,
    subsection: `3.3`,
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
      `**A.** → True

An interior optimum satisfies $P'(t^{*})=rP(t^{*})$:

$$
t^{*}=\\frac{2}{r}-k
$$

Substitute the stem numbers:

$$
t^{*}=\\frac{2}{0.075}-5=26.67-5\\approx 21.67
$$

The computed figure matches the claim.

So the statement is True.`,
      `**B.** → True

An interior optimum satisfies $P'(t^{*})=rP(t^{*})$:

$$
t^{*}=\\frac{2}{r}-k
$$

Substitute the stem numbers:

$$
t^{*}=\\frac{2}{0.075}-5=26.67-5\\approx 21.67
$$

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → False

At the overview's $t^{*}\\approx 21.67$,

$$P(t^{*})=1{,}200\\left(\\frac{2}{0.075}\\right)^{2}\\approx 853{,}333.33$$

$$f(t^{*})=853{,}333.33\\,e^{-0.075\\times 21.67}\\approx 168{,}031.30$$

Compare the computed value with the claim (\\$195,500.00). The two sides do not agree.

So the statement is False.`,
      `**D.** → True

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $t^{*}=\\frac{2}{r}-k$. At $k=8$,

$$t^{*}=\\frac{2}{0.075}-8\\approx 18.67$$

The overview's original time is $t^{*}\\approx 21.67$. We have $18.67<21.67$.

So the statement is True.`,
      `**E.** → False

The overview recovered the critical holding time $t^{*}$ from the first-order condition. Compare that time with half of the original optimum:

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $t^{*}=\\frac{2}{r}-k$. At $r=0.15$,

$$t^{*}=\\frac{2}{0.15}-5\\approx 8.33$$

Half of the original $21.67$ is $10.83$. We have $8.33<10.83$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `A forestry consultancy models $P(t)=A(t+k)^{2}$, discounted continuously at rate $r$. For one stand, $A=1{,}200$, $k=5$, and $r=7.5\\%$ per year.

**Part 1: Setup.**

$$P(t)=A(t+k)^{2}, \\qquad P'(t)=2A(t+k)$$

$$A=1{,}200, \\qquad k=5, \\qquad r=0.075$$

An interior optimum satisfies $P'(t^{*})=rP(t^{*})$.

**Part 2: Solve.**

$$2A(t+k)=rA(t+k)^{2}$$

$$t^{*}=\\frac{2}{r}-k$$

$$t^{*}=\\frac{2}{0.075}-5=26.67-5\\approx 21.67$$`,
  },
  {
    id: `math-11-60`,
    case_id: `MATH 11.60`,
    title: `Pricing Two Franchise Payments Related by a Common Time Horizon`,
    subsection: `3.3`,
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
      `**A.** → True

Discrete discounting raises the growth factor to the negative holding time:

$$
(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
e^{-0.4}\\approx 0.6703
$$

The computed value is approximately 0.6703, which matches the claim.

So the statement is True.`,
      `**B.** → True

Discrete discounting raises the growth factor to the negative holding time:

$$
(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
e^{-0.8}\\approx 0.4493
$$

The computed value is approximately 0.4493, which matches the claim.

So the statement is True.`,
      `**C.** → False

The overview’s present-value line is

$$
\\mathrm{PV}_1\\approx 20{,}109.60
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
\\mathrm{PV}_2\\approx 24{,}713.09
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

From the overview’s recovered present value:

$$
\\mathrm{PDV}\\approx 44{,}822.69
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `A franchise agreement pays \\$30,000 in 5 years and \\$55,000 in 10 years. Value is discounted continuously at 8% per year. The second horizon is twice the first, so its discount factor is the square of the first factor.

**Part 1: Setup.**

$$K_1 = 30{,}000, \\qquad t_1 = 5$$

$$K_2 = 55{,}000, \\qquad t_2 = 10, \\qquad r = 0.08$$

Each payment discounts through $\\mathrm{PDV}=Ke^{-rt}$, and

$$e^{-rt_2}=(e^{-rt_1})^{2}$$

**Part 2: Solve.**

$$e^{-0.08\\times 5}=e^{-0.4}\\approx 0.6703$$

$$e^{-0.08\\times 10}=e^{-0.8}\\approx 0.4493$$

$$(0.6703)^{2}\\approx 0.4493$$

$$\\mathrm{PV}_1 = 30{,}000e^{-0.4} \\approx 20{,}109.60$$

$$\\mathrm{PV}_2 = 55{,}000e^{-0.8} \\approx 24{,}713.09$$

$$\\mathrm{PDV} = 20{,}109.60+24{,}713.09 \\approx 44{,}822.69$$`,
  },
  {
    id: `math-11-61`,
    case_id: `MATH 11.61`,
    title: `Startup Revenue Growth Over Five Years`,
    subsection: `3.4`,
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
      `**A.** → True

Year 2 is one growth step past the opening term:

$$a_2 = 50 \\times 1.10 = 55.00$$

Compare the computed value with the claim (\\$55.00 million). The two sides agree.

So the statement is True.`,
      `**B.** → True

Year 5 carries four growth steps past the opening term:

$$a_5 = 50 \\times (1.10)^4$$

$$(1.10)^4 = 1.4641$$

$$a_5 = 50 \\times 1.4641 = 73.205 \\approx 73.21$$

Compare the computed value with the claim (about \\$73.21 million). The two sides agree.

So the statement is True.`,
      `**C.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
s_5 \\approx 305.26
$$

The claim asserts

$$
s_5 \\approx 305.26
$$

Those two figures agree.

So the statement is True.`,
      `**D.** → False

A flat path of \\$50 million a year for five years totals

$$50 \\times 5 = 250$$

The overview recovered $s_5 \\approx 305.26$. Growth adds

$$305.26 - 250 = 55.26$$

The claim is an extra of exactly \\$60.00 million. The extra is \\$55.26 million.

So the statement is False.`,
      `**E.** → False

The overview’s present-value line is

$$
s_5 \\approx 305.26
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 61,
    solution_overview: `A newly launched e-commerce startup earns \\$50 million in revenue this year and expects revenue to grow by $10\\%$ annually for each of the next four years.

**Part 1: Setup.**

The five yearly revenues form a finite geometric series:

$$a = 50, \\qquad k = 1.10, \\qquad n = 5$$

All figures below are in millions of dollars. The term in year $t$ and the finite sum are

$$a_t = ak^{t-1}$$

$$s_n = a\\frac{k^n-1}{k-1}$$

**Part 2: Solve.**

The five-year growth factor is

$$1.10^5 = 1.61051$$

$$s_5 = 50\\frac{1.61051-1}{0.10}$$

$$= 50 \\times 6.1051 = 305.255 \\approx 305.26$$`,
  },
  {
    id: `math-11-62`,
    case_id: `MATH 11.62`,
    title: `Perpetual Profit Stream from a Subscription Box Line`,
    subsection: `3.4`,
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
      `**A.** → True

When $|k|<1$, the infinite sum and the sum of the first $n$ terms are:

$$
|k| = 0.5 < 1
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite sum and the sum of the first $n$ terms are:

$$
s_{\\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{2{,}000}{1-0.5} = \\frac{2{,}000}{0.5} = 4{,}000
$$

The computed value is approximately \$4,000.00, which matches the claim.

So the statement is True.`,
      `**C.** → True

The partial sum of the first $n$ terms of a geometric series is:

$$
s_n = a\\frac{1-k^n}{1-k}
$$

Substitute the stem numbers:

$$
s_4 = 2{,}000+1{,}000+500+250 = 3{,}750
$$

The computed value is approximately \$3,750.00, which matches the claim.

So the statement is True.`,
      `**D.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_4=3{,}750$ and $s_{\\infty}=4{,}000$ as inputs for this claim:

Comparing those totals:

$$3{,}750 < 4{,}000$$

The four-month sum does not exceed the infinite sum.

The computed result disagrees with the claim.

So the statement is False.`,
      `**E.** → False

At the hypothetical quotient $k=1.5$,

$$|k| = 1.5 \\ge 1$$

so the infinite geometric formula does not apply. The terms $2{,}000$, $3{,}000$, $4{,}500$, $\\ldots$ grow without bound, and the partial sums diverge. Plugging into $\\frac{a}{1-k}$ would give $-4{,}000$, but that algebraic extension is not a sum of profits. The series does not converge.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 62,
    solution_overview: `A subscription box company just earned \\$2,000 in profit from its newest product line this month. Customer renewals are expected to halve every month indefinitely.

**Part 1: Setup.**

Monthly profits form an infinite geometric series:

$$a = 2{,}000, \\qquad k = 0.5$$

When $|k|<1$, the infinite sum and the sum of the first $n$ terms are

$$s_{\\infty} = \\frac{a}{1-k}$$

$$s_n = a\\frac{1-k^n}{1-k}$$

**Part 2: Solve.**

$$|k| = 0.5 < 1$$

so the series converges.

$$s_{\\infty} = \\frac{2{,}000}{1-0.5} = \\frac{2{,}000}{0.5} = 4{,}000$$

The first four profits are \\$2,000, \\$1,000, \\$500, and \\$250:

$$s_4 = 2{,}000+1{,}000+500+250 = 3{,}750$$`,
  },
  {
    id: `math-11-63`,
    case_id: `MATH 11.63`,
    title: `Declining Annual Deposits into a Sinking Fund`,
    subsection: `3.4`,
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
      `**A.** → True

When $|k|<1$, the infinite sum and the sum of the first $n$ terms are:

$$
|k| < 1
$$

Substitute the stem numbers:

$$
|k| = 0.90 < 1
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite sum and the sum of the first $n$ terms are:

$$
s_{\\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{800}{1-0.90} = \\frac{800}{0.10} = 8{,}000
$$

The computed value is approximately \$8,000.00, which matches the claim.

So the statement is True.`,
      `**C.** → True

The partial sum of the first $n$ terms of a geometric series is:

$$
s_n = a\\frac{1-k^n}{1-k}
$$

Substitute the stem numbers:

$$
= 800 \\times 6.513215599 = 5{,}210.57
$$

The computed value is approximately \$5,210.57, which matches the claim.

So the statement is True.`,
      `**D.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_{10}\\approx 5{,}210.57$ and $s_{\\infty}=8{,}000$ as inputs for this claim:

Their share is

$$\\frac{5{,}210.57}{8{,}000} \\approx 0.6513 \\approx 65\\%$$

The claim is about $65\\%$.

So the statement is True.`,
      `**E.** → True

At the hypothetical quotient $k=1.10$,

$$|k| = 1.10 \\ge 1$$

so the convergence test fails. Growing deposits of \\$800, \\$880, \\$968, $\\ldots$ have partial sums that run to infinity. The series diverges.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 63,
    solution_overview: `An investor commits to a sinking-fund plan: this year's deposit is \\$800, and each following year's deposit is $90\\%$ of the previous year's deposit, continuing indefinitely.

**Part 1: Setup.**

The deposits form an infinite geometric series:

$$a = 800, \\qquad k = 0.90$$

When $|k|<1$, the infinite sum and the sum of the first $n$ terms are

$$s_{\\infty} = \\frac{a}{1-k}$$

$$s_n = a\\frac{1-k^n}{1-k}$$

**Part 2: Solve.**

$$|k| = 0.90 < 1$$

so the series converges.

$$s_{\\infty} = \\frac{800}{1-0.90} = \\frac{800}{0.10} = 8{,}000$$

$$0.90^{10} = 0.3486784401$$

$$s_{10} = 800\\frac{1-0.3486784401}{0.10}$$

$$= 800 \\times 6.513215599 = 5{,}210.57$$`,
  },
  {
    id: `math-11-64`,
    case_id: `MATH 11.64`,
    title: `Lithium Reserve Depletion for a Mining Company`,
    subsection: `3.4`,
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
      `**A.** → True

At a constant $300{,}000$ tons per year, the exhaustion time is

$$t = \\frac{18{,}000{,}000}{300{,}000} = 60$$

Compare the computed value with the claim ($60$ years). The two sides agree.

So the statement is True.`,
      `**B.** → True

At a constant $500{,}000$ tons per year, the exhaustion time is

$$t = \\frac{18{,}000{,}000}{500{,}000} = 36$$

Compare the computed value with the claim ($36$ years). The two sides agree.

So the statement is True.`,
      `**C.** → True

Compare the claim with the isolation or sign pattern settled in the overview.

The overview already identified constant extraction as the $k=1$ case, where the $n$-year total is $an$. The claim is that identity.

So the statement is True.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
s_{10}\\approx 3{,}773{,}368
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

The overview recovered a growing $10$-year total of about $3{,}773{,}368$ tons and a constant $10$-year total of $3{,}000{,}000$ tons. The extra extraction is

$$3{,}773{,}368-3{,}000{,}000 = 773{,}368$$

$$773{,}368 < 1{,}000{,}000$$

The extra is not more than $1{,}000{,}000$ tons.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 64,
    solution_overview: `A mining company estimates its lithium reserves at $18{,}000{,}000$ tons. Current annual extraction is a constant $300{,}000$ tons per year. Separately, analysts model extraction starting at $300{,}000$ tons and growing by $5\\%$ per year for $10$ years.

**Part 1: Setup.**

The reserve and the growing scenario are

$$R = 18{,}000{,}000, \\qquad a = 300{,}000, \\qquad k = 1.05, \\qquad n = 10$$

At a constant annual extraction $E$, the exhaustion time is $t=\\frac{R}{E}$. Constant extraction is the $k=1$ case, with $n$-year total $s_n=an$. For $k\\ne 1$,

$$s_n = a\\frac{k^n-1}{k-1}$$

**Part 2: Solve.**

$$1.05^{10} = 1.628894627$$

$$s_{10} = 300{,}000\\frac{1.628894627-1}{0.05} = 3{,}773{,}367.76$$

The constant $10$-year total at $300{,}000$ tons per year is

$$300{,}000 \\times 10 = 3{,}000{,}000$$`,
  },
  {
    id: `math-11-65`,
    case_id: `MATH 11.65`,
    title: `Coal Reserves and Declining Output`,
    subsection: `3.4`,
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
      `**A.** → True

Year 2 is one decline step past this year's output:

$$a_2 = 180 \\times 0.97 = 174.6$$

Compare the computed value with the claim ($174.6$ million tons). The two sides agree.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{180}{1-0.97} = \\frac{180}{0.03} = 6{,}000
$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
6{,}000
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**D.** → False

Under a $5\\%$ decline,

$$s_{\\infty} = \\frac{180}{1-0.95} = \\frac{180}{0.05} = 3{,}600$$

The stranded reserve is then

$$9{,}000-3{,}600 = 5{,}400$$

The overview recovered $3{,}000$ million tons stranded under the $3\\%$ decline. A $5\\%$ decline strands more coal, not less.

So the statement is False.`,
      `**E.** → False

The first $20$ years under the $3\\%$ decline sum to

$$0.97^{20} \\approx 0.5438$$

$$s_{20} = 180\\frac{1-0.5438}{0.03} \\approx 2{,}737.3$$

The overview recovered $s_{\\infty}=6{,}000$. Since $2{,}737.3<6{,}000$, the $20$-year total does not exceed the infinite total.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 65,
    solution_overview: `A coal mining region has $9{,}000$ million tons of estimated reserves. This year's output is $180$ million tons, and analysts project output will fall by $3\\%$ every year forever. A second scenario uses a $5\\%$ annual decline from the same starting output.

**Part 1: Setup.**

The reserve, first output, and decline quotients are

$$R = 9{,}000, \\qquad a = 180, \\qquad k_3 = 0.97, \\qquad k_5 = 0.95$$

Figures are in millions of tons. When $|k|<1$,

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad s_n = a\\frac{1-k^n}{1-k}$$

**Part 2: Solve.**

Under the $3\\%$ decline,

$$s_{\\infty} = \\frac{180}{1-0.97} = \\frac{180}{0.03} = 6{,}000$$

The stranded reserve is

$$9{,}000-6{,}000 = 3{,}000$$`,
  },
  {
    id: `math-11-66`,
    case_id: `MATH 11.66`,
    title: `Alternating Correction Payments in a Trading Model`,
    subsection: `3.4`,
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
      `**A.** → True

The adjustments form an infinite geometric series:

$$
|k| = |-0.5| = 0.5 < 1
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

The adjustments form an infinite geometric series:

$$
s_{\\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{4{,}000}{1-(-0.5)} = \\frac{4{,}000}{1.5} \\approx 2{,}666.67
$$

The computed value is approximately \$2,666.67, which matches the claim.

So the statement is True.`,
      `**C.** → False

The first four adjustments are

$$4{,}000, \\qquad 4{,}000(-0.5)=-2{,}000$$

$$4{,}000(0.25)=1{,}000, \\qquad 4{,}000(-0.125)=-500$$

$$s_4 = 4{,}000-2{,}000+1{,}000-500 = 2{,}500$$

The claim is \\$3,000.00. The four-term sum is \\$2,500.00.

So the statement is False.`,
      `**D.** → False

From the overview’s recovered present value:

$$
|k|=0.5<1
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → True

At $k=-1$ the terms alternate between $4{,}000$ and $-4{,}000$. The partial sums are then

$$s_1=4{,}000, \\qquad s_2=0, \\qquad s_3=4{,}000, \\qquad s_4=0$$

Odd $n$ returns \\$4,000 and even $n$ returns \\$0, forever. The claim is that oscillation.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 66,
    solution_overview: `A quantitative trading model applies a diminishing corrective adjustment after each rebalancing: the first adjustment is \\$4,000, and each later adjustment reverses sign and is half the size of the previous one, continuing indefinitely.

**Part 1: Setup.**

The adjustments form an infinite geometric series:

$$a = 4{,}000, \\qquad k = -0.5$$

When $|k|<1$,

$$s_{\\infty} = \\frac{a}{1-k}$$

**Part 2: Solve.**

$$|k| = |-0.5| = 0.5 < 1$$

so the series converges.

$$s_{\\infty} = \\frac{4{,}000}{1-(-0.5)} = \\frac{4{,}000}{1.5} \\approx 2{,}666.67$$`,
  },
  {
    id: `math-11-67`,
    case_id: `MATH 11.67`,
    title: `Equal vs. Growing Pension Contributions`,
    subsection: `3.4`,
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
      `**A.** → True

The equal-payment plan is the $k=1$ case already written in the overview, so the $15$-year total is $a\\times n$. The claim is that identity.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{15} = 12\\frac{1.800944-1}{0.04} = 12 \\times 20.0236 \\approx 240.28
$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → False

The overview’s present-value line is

$$
15
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

The overview recovered \\$240.28 million under growth and \\$180.00 million with no growth. The extra is

$$240.28-180.00 = 60.28$$

$$60.28 < 65.00$$

The extra is not more than \\$65.00 million.

So the statement is False.`,
      `**E.** → True

A geometric series of payments has a closed finite-sum formula only when the common ratio differs from $1$:

$$
s_n = a\\frac{k^{n}-1}{k-1}, \qquad k \\ne 1
$$

The general finite-sum formula divides by $k-1$. At $k=1$,

$$k-1 = 0$$

so that formula is undefined. The equal-payment case must use $s_n=an$ instead. The claim is that division by zero.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 67,
    solution_overview: `A city pension fund receives equal annual contributions of \\$12 million for $15$ years. Fund managers also model contributions that grow by $4\\%$ each year from the same \\$12 million start.

**Part 1: Setup.**

Both plans run $15$ years from a first contribution of \\$12 million:

$$a = 12, \\qquad n = 15$$

The equal-payment plan has $k=1$. The growing plan has $k=1.04$. Figures are in millions of dollars.

For $k=1$, $s_n=an$. For $k\\ne 1$,

$$s_n = a\\frac{k^n-1}{k-1}$$

**Part 2: Solve.**

The equal-payment total is

$$s_{15} = 12 \\times 15 = 180$$

The growing-plan factor is $1.04^{15}\\approx 1.800944$, so

$$s_{15} = 12\\frac{1.800944-1}{0.04} = 12 \\times 20.0236 \\approx 240.28$$`,
  },
  {
    id: `math-11-68`,
    case_id: `MATH 11.68`,
    title: `Structured Settlement: Finite Payments vs. Perpetual Value`,
    subsection: `3.4`,
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
      `**A.** → True

The second payment is one decay step past the first:

$$a_2 = 15{,}000 \\times 0.88 = 13{,}200$$

Compare the computed value with the claim (\\$13,200.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

$$
s_8 = 15{,}000\\frac{1-0.359635}{0.12} = 15{,}000 \\times 5.336379 \\approx 80{,}045.68
$$

The computed value is approximately \$80,045.68, which matches the claim.

So the statement is True.`,
      `**C.** → False

Read the present value recovered in the overview:

$$
s_{\\infty}=125{,}000
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_8\\approx 80{,}045.68$ and $s_{\\infty}=125{,}000$ as inputs for this claim:

The share is

$$\\frac{80{,}045.68}{125{,}000} \\approx 0.6404 \\approx 64\\%$$

$$64\\% < 75\\%$$

The eight-payment total is not more than $75\\%$ of the infinite total.

The computed figure does not match the claim.

So the statement is False.`,
      `**E.** → False

At the slower decay $k=0.95$,

$$s_{\\infty} = \\frac{15{,}000}{1-0.95} = \\frac{15{,}000}{0.05} = 300{,}000$$

The overview recovered \\$125,000 at $k=0.88$. Since $300{,}000>125{,}000$, a less steep decline makes the infinite total larger, not smaller.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `A structured settlement pays \\$15,000 in its first year, with each later payment $88\\%$ of the prior one. One clause pays for $8$ years; a hypothetical clause continues the same payments forever.

**Part 1: Setup.**

$$a = 15{,}000, \\qquad k = 0.88, \\qquad n = 8$$

The finite total and, because $|k|<1$, the perpetual total are

$$s_n = a\\frac{1-k^n}{1-k}, \\qquad s_{\\infty} = \\frac{a}{1-k}$$

**Part 2: Solve.**

$$0.88^8 \\approx 0.359635$$

$$s_8 = 15{,}000\\frac{1-0.359635}{0.12} = 15{,}000 \\times 5.336379 \\approx 80{,}045.68$$

$$s_{\\infty} = \\frac{15{,}000}{1-0.88} = \\frac{15{,}000}{0.12} = 125{,}000$$`,
  },
  {
    id: `math-11-69`,
    case_id: `MATH 11.69`,
    title: `Growing Franchise Royalties Over 12 Years`,
    subsection: `3.4`,
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
      `**A.** → True

A geometric series of payments has a closed finite-sum formula only when the common ratio differs from $1$:

$$
s_n = a\\frac{k^{n}-1}{k-1}, \qquad k \\ne 1
$$

The finite-sum formula needs $k\\ne 1$. Here $k=1.08\\ne 1$, so $s_{12}$ is well-defined. The claim is that this $12$-year total exists.

So the statement is True.`,
      `**B.** → False

From the overview’s recovered present value:

$$
s_{12}\\approx 170{,}794.15
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → False

A geometric series of payments has a closed finite-sum formula only when the common ratio differs from $1$:

$$
s_n = a\\frac{k^{n}-1}{k-1}, \qquad k \\ne 1
$$

The infinite-sum formula requires $|k|<1$. Here

$$|k| = 1.08 \\ge 1$$

so that formula does not apply, and a growing royalty stream has no finite infinite total. The claim treats the infinite formula as legitimate.

So the statement is False.`,
      `**D.** → False

Year $12$ uses eleven growth steps:

$$1.08^{11} \\approx 2.331639$$

$$a_{12} = 9{,}000 \\times 2.331639 \\approx 20{,}984.75$$

Compare the computed value with the claim (about \\$20,715.85). The year-$12$ royalty is about \\$20,984.75. The two sides do not agree.

So the statement is False.`,
      `**E.** → True

The overview recovered \\$170,794.15 under $8\\%$ growth and \\$108,000 with no growth. The extra is

$$170{,}794.15-108{,}000 = 62{,}794.15$$

Compare the computed value with the claim (that the flat total sits \\$62,794.15 below the growing total). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 69,
    solution_overview: `A franchisor receives a royalty of \\$9,000 in the first year, with royalties projected to grow $8\\%$ per year for $12$ years. Analysts also compare this with a flat $0\\%$-growth stream.

**Part 1: Setup.**

$$a = 9{,}000, \\qquad k = 1.08, \\qquad n = 12$$

For $k\\ne 1$, the finite total and the year-$t$ royalty are

$$s_n = a\\frac{k^n-1}{k-1}, \\qquad a_t = ak^{t-1}$$

A flat stream has $k=1$ and total $s_n=an$.

**Part 2: Solve.**

$$1.08^{12} \\approx 2.518170$$

$$s_{12} = 9{,}000\\frac{2.518170-1}{0.08} = 9{,}000 \\times 18.977128 \\approx 170{,}794.15$$

With no growth,

$$9{,}000 \\times 12 = 108{,}000$$`,
  },
  {
    id: `math-11-70`,
    case_id: `MATH 11.70`,
    title: `Tech Company Valuation: Finite Growth Plus Terminal Perpetuity`,
    subsection: `3.4`,
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
      `**A.** → True

When $|k_T|<1$, the terminal perpetuity is $T=\\frac{a_6}{1-k_T}$:

$$
s_6 = 4\\frac{2.985984-1}{0.20} = 4 \\times 9.92992 = 39.72
$$

The computed value is approximately \$39.72, which matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

When $|k_T|<1$, the terminal perpetuity is $T=\\frac{a_6}{1-k_T}$:

$$
1.20^5 = 2.48832, \\qquad a_6 = 4 \\times 2.48832 = 9.95328 \\approx 9.95
$$

The computed value is approximately \$9.95, which matches the claim.

So the statement is True.`,
      `**C.** → False

A geometric series of payments has a closed finite-sum formula only when the common ratio differs from $1$:

$$
s_n = a\\frac{k^{n}-1}{k-1}, \qquad k \\ne 1
$$

The finite-sum formula needs $k\\ne 1$. Here $k=1.20\\ne 1$, so $s_6$ is well-defined. The claim says the six-year series has no valid finite sum.

So the statement is False.`,
      `**D.** → True

The overview recovered $a_6\\approx 9.95328$. Treating that as the first terminal payment at $k_T=0.85$,

$$T = \\frac{9.95328}{1-0.85} = \\frac{9.95328}{0.15} \\approx 66.36$$

Compare the computed value with the claim (about \\$66.36 million). The two sides agree.

So the statement is True.`,
      `**E.** → False

The overview recovered $s_6=39.72$. The terminal value is about $66.36$, so the combined projected value is

$$39.72+66.36 = 106.08$$

$$106.08 > 100$$

The combined value is not less than \\$100 million.

Comparing the computed figure with the wording of the claim shows that they disagree.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 70,
    solution_overview: `A tech company projects revenue of \\$4 million this year, growing $20\\%$ per year for $6$ years. Investors then treat year-$6$ revenue as the first payment of a terminal perpetuity that declines $15\\%$ per year forever.

**Part 1: Setup.**

Figures are in millions of dollars.

$$a = 4, \\qquad k = 1.20, \\qquad n = 6, \\qquad k_T = 0.85$$

The finite total and the year-$t$ revenue are

$$s_n = a\\frac{k^n-1}{k-1}, \\qquad a_t = ak^{t-1}$$

When $|k_T|<1$, the terminal perpetuity is $T=\\frac{a_6}{1-k_T}$.

**Part 2: Solve.**

$$1.20^6 = 2.985984$$

$$s_6 = 4\\frac{2.985984-1}{0.20} = 4 \\times 9.92992 = 39.72$$

$$1.20^5 = 2.48832, \\qquad a_6 = 4 \\times 2.48832 = 9.95328 \\approx 9.95$$`,
  },
  {
    id: `math-11-71`,
    case_id: `MATH 11.71`,
    title: `Reverse-Engineering a Retailer's First-Month Restocking Cost`,
    subsection: `3.4`,
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
      `**A.** → True

If month $1$ were \\$1,000, month $2$ would be one growth step later:

$$1{,}000 \\times 1.15 = 1{,}150$$

Compare the computed value with the claim (\\$1,150.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

The geometric total is $s_n=a\\frac{k^n-1}{k-1}$, so:

$$
a = s_n\\frac{k-1}{k^n-1}
$$

Substitute the stem numbers:

$$
a = 58{,}000\\frac{0.15}{2.313060766-1} = \\frac{8{,}700}{1.313060766} \\approx 6{,}625.74
$$

The computed value is approximately \$6,625.74, which matches the claim.

So the statement is True.`,
      `**C.** → True

Month $6$ uses five growth steps past the recovered $a\\approx 6{,}625.74$:

$$1.15^5 = 2.011357188$$

$$a_6 = 6{,}625.74 \\times 2.011357188 \\approx 13{,}326.73$$

Compare the computed value with the claim (about \\$13,326.73). The two sides agree.

So the statement is True.`,
      `**D.** → False

Months $4$ through $6$ are $a k^3$, $a k^4$, and $a k^5$:

$$1.15^3+1.15^4+1.15^5 = 1.520875+1.749006+2.011357 = 5.281239$$

$$6{,}625.74 \\times 5.281239 \\approx 34{,}992.12$$

The claim is about \\$37,930.00. The three-month total is about \\$34,992.12.

So the statement is False.`,
      `**E.** → True

Spreading \\$58,000 evenly over six months gives

$$\\frac{58{,}000}{6} \\approx 9{,}666.67$$

The overview recovered $a\\approx 6{,}625.74$. Since $9{,}666.67>6{,}625.74$, the flat monthly figure exceeds the growing first-month cost.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 71,
    solution_overview: `A retailer's monthly restocking cost grows $15\\%$ every month for $6$ months. The six-month total is \\$58,000, and the unknown is the first month's cost $a$.

**Part 1: Setup.**

$$s_6 = 58{,}000, \\qquad k = 1.15, \\qquad n = 6$$

The geometric total is $s_n=a\\frac{k^n-1}{k-1}$, so

$$a = s_n\\frac{k-1}{k^n-1}$$

The cost in month $t$ is $a_t=ak^{t-1}$.

**Part 2: Solve.**

$$1.15^6 = 2.313060766$$

$$a = 58{,}000\\frac{0.15}{2.313060766-1} = \\frac{8{,}700}{1.313060766} \\approx 6{,}625.74$$`,
  },
  {
    id: `math-11-72`,
    case_id: `MATH 11.72`,
    title: `University Endowment: Sustainable Declining Payout`,
    subsection: `3.4`,
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
      `**A.** → True

Year 2 is one decline step past this year's payout:

$$a_2 = 500{,}000 \\times 0.98 = 490{,}000$$

Compare the computed value with the claim (\\$490,000.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

An infinite geometric series of profits converges only when the common ratio is strictly less than one in absolute value:

$$
s_{\\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{500{,}000}{1-0.98} = \\frac{500{,}000}{0.02} = 25{,}000{,}000
$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → False

The overview’s present-value line is

$$
s_{10}\\approx 4{,}573{,}179.83
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_{10}\\approx 4{,}573{,}179.83$ and $s_{\\infty}=25{,}000{,}000$ as inputs for this claim:

The share is

$$\\frac{4{,}573{,}179.83}{25{,}000{,}000} \\approx 0.1829 \\approx 18\\%$$

The claim is about $18\\%$.

So the statement is True.`,
      `**E.** → False

At $k=0.95$,

$$s_{\\infty} = \\frac{500{,}000}{1-0.95} = \\frac{500{,}000}{0.05} = 10{,}000{,}000$$

Half of the original infinite total is

$$\\frac{25{,}000{,}000}{2} = 12{,}500{,}000$$

$$10{,}000{,}000 < 12{,}500{,}000$$

The steeper-decline total is not more than half of \\$25,000,000.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 72,
    solution_overview: `A university endowment pays out \\$500,000 in scholarships this year and then shrinks the payout by $2\\%$ every year forever. The board also asks about the first $10$ years and about a steeper decline at $k=0.95$.

**Part 1: Setup.**

$$a = 500{,}000, \\qquad k_1 = 0.98, \\qquad k_2 = 0.95, \\qquad n = 10$$

When $|k|<1$,

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad s_n = a\\frac{1-k^n}{1-k}$$

**Part 2: Solve.**

Under the $2\\%$ decline,

$$s_{\\infty} = \\frac{500{,}000}{1-0.98} = \\frac{500{,}000}{0.02} = 25{,}000{,}000$$

$$0.98^{10} = 0.817072807$$

$$s_{10} = 500{,}000\\frac{1-0.817072807}{0.02} = 500{,}000 \\times 9.146360 \\approx 4{,}573{,}179.83$$`,
  },
  {
    id: `math-11-73`,
    case_id: `MATH 11.73`,
    title: `Marketing Budget: Solving for the Break-Point Year`,
    subsection: `3.4`,
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
      `**A.** → True

Year 2 is one growth step past the opening budget:

$$a_2 = 200{,}000 \\times 1.12 = 224{,}000$$

Compare the computed value with the claim (\\$224,000.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $s_9\\approx 2{,}955{,}131.26$. Since

$$2{,}955{,}131.26 < 3{,}000{,}000$$

nine years remain below the target.

So the statement is True.`,
      `**C.** → False

Read the present value recovered in the overview:

$$
s_{10}\\approx 3{,}509{,}747.01
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → False

From the overview’s recovered present value:

$$
s_9\\approx 2{,}955{,}131.26
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

At $8\\%$ growth,

$$1.08^{10} = 2.158924997$$

$$s_{10} = 200{,}000\\frac{2.158924997-1}{0.08} = 200{,}000 \\times 14.486562 \\approx 2{,}897{,}312.49$$

$$2{,}897{,}312.49 < 3{,}000{,}000$$

The ten-year total still misses the target.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `A company's marketing budget starts at \\$200,000 this year and grows $12\\%$ every year. The CFO wants the smallest $n$ for which cumulative spend first surpasses \\$3,000,000.

**Part 1: Setup.**

$$a = 200{,}000, \\qquad k = 1.12$$

For $k\\ne 1$,

$$s_n = a\\frac{k^n-1}{k-1}$$

**Part 2: Solve.**

$$1.12^9 = 2.773078757$$

$$s_9 = 200{,}000\\frac{2.773078757-1}{0.12} = 200{,}000 \\times 14.775656 \\approx 2{,}955{,}131.26$$

$$1.12^{10} = 3.105848289$$

$$s_{10} = 200{,}000\\frac{3.105848289-1}{0.12} = 200{,}000 \\times 17.548736 \\approx 3{,}509{,}747.01$$`,
  },
  {
    id: `math-11-74`,
    case_id: `MATH 11.74`,
    title: `Charitable Trust: A Deferred, Declining Grant Stream`,
    subsection: `3.4`,
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
      `**A.** → True

The second grant is one decline step past the first:

$$a_2 = 50{,}000 \\times 0.96 = 48{,}000$$

Compare the computed value with the claim (\\$48,000.00). The two sides agree.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{50{,}000}{1-0.96} = \\frac{50{,}000}{0.04} = 1{,}250{,}000
$$

The computed value is approximately \$1,250,000.00, which matches the claim.

So the statement is True.`,
      `**C.** → True

The partial sum of the first $n$ terms of a geometric series is:

$$
s_n = a\\frac{1-k^n}{1-k}
$$

Substitute the stem numbers:

$$
s_{15} = 50{,}000\\frac{1-0.542086380}{0.04} = 50{,}000 \\times 11.447840 \\approx 572{,}392.03
$$

The computed value is approximately \$572,392.03, which matches the claim.

So the statement is True.`,
      `**D.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_{15}\\approx 572{,}392.03$ and $s_{\\infty}=1{,}250{,}000$ as inputs for this claim:

The share is

$$\\frac{572{,}392.03}{1{,}250{,}000} \\approx 0.4579 \\approx 46\\%$$

$$46\\% > 40\\%$$

The first $15$ grants are not less than $40\\%$ of the infinite total.

The computed figure does not match the claim.

So the statement is False.`,
      `**E.** → True

At $k=0.90$,

$$s_{\\infty} = \\frac{50{,}000}{1-0.90} = \\frac{50{,}000}{0.10} = 500{,}000$$

Half of the original infinite total is

$$\\frac{1{,}250{,}000}{2} = 625{,}000$$

$$500{,}000 < 625{,}000$$

The steeper-decline total is less than half of \\$1,250,000.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 74,
    solution_overview: `A charitable trust will issue its first grant of \\$50,000 starting six years from now, with each later grant equal to $96\\%$ of the previous grant, continuing forever. Analysts also want the first $15$ grants and a comparison at $k=0.90$.

**Part 1: Setup.**

$$a = 50{,}000, \\qquad k_1 = 0.96, \\qquad k_2 = 0.90, \\qquad n = 15$$

When $|k|<1$,

$$s_{\\infty} = \\frac{a}{1-k}, \\qquad s_n = a\\frac{1-k^n}{1-k}$$

**Part 2: Solve.**

At $k=0.96$,

$$s_{\\infty} = \\frac{50{,}000}{1-0.96} = \\frac{50{,}000}{0.04} = 1{,}250{,}000$$

$$0.96^{15} = 0.542086380$$

$$s_{15} = 50{,}000\\frac{1-0.542086380}{0.04} = 50{,}000 \\times 11.447840 \\approx 572{,}392.03$$`,
  },
  {
    id: `math-11-75`,
    case_id: `MATH 11.75`,
    title: `Vineyard Yield: A Quarterly Decline Unit-Conversion Trap`,
    subsection: `3.4`,
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
      `**A.** → True

Quarter $2$ is one decline step past the first quarter:

$$a_2 = 10{,}000 \\times 0.98 = 9{,}800$$

Compare the computed value with the claim ($9{,}800.00$ lbs). The two sides agree.

So the statement is True.`,
      `**B.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
s_{20}=166{,}196.01
$$

The claim asserts

$$
s_{20}=166{,}196.01
$$

Those two figures agree.

So the statement is True.`,
      `**C.** → False

Substituting $n=5$ instead of $n=20$ gives

$$0.98^5 = 0.903920800$$

$$s_5 = 10{,}000\\frac{1-0.903920800}{0.02} = 10{,}000 \\times 4.80396 = 48{,}039.60$$

That figure is the first five quarters, not five years. Five years are $20$ quarters, whose total the overview recovered as $166{,}196.01$ lbs. Using $n=5$ is not the correct five-year total.

So the statement is False.`,
      `**D.** → True

Quarter $20$ uses $19$ decline steps:

$$0.98^{19} \\approx 0.681230$$

$$a_{20} = 10{,}000 \\times 0.681230 \\approx 6{,}812.33$$

Compare the computed value with the claim (about $6{,}812.33$ lbs). The two sides agree.

So the statement is True.`,
      `**E.** → False

If the decline continued forever,

$$s_{\\infty} = \\frac{10{,}000}{1-0.98} = \\frac{10{,}000}{0.02} = 500{,}000$$

The overview recovered $s_{20}=166{,}196.01$. Since $500{,}000>166{,}196.01$, the infinite total is larger than the $20$-quarter total, not smaller.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `A vineyard's grape yield declines by $2\\%$ every quarter over a $5$-year span of $20$ quarters. The first quarter's yield is $10{,}000$ lbs.

**Part 1: Setup.**

$$a = 10{,}000, \\qquad k = 0.98, \\qquad n = 20$$

The finite total, the quarter-$t$ yield, and the hypothetical infinite total are

$$s_n = a\\frac{1-k^n}{1-k}, \\qquad a_t = ak^{t-1}, \\qquad s_{\\infty} = \\frac{a}{1-k}$$

**Part 2: Solve.**

$$0.98^{20} = 0.667607972$$

$$s_{20} = 10{,}000\\frac{1-0.667607972}{0.02} = 10{,}000 \\times 16.619601 = 166{,}196.01$$`,
  },
  {
    id: `math-11-76`,
    case_id: `MATH 11.76`,
    title: `Comparing Two Franchise Territories Over 8 Years`,
    subsection: `3.4`,
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
      `**A.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{A,8} = 80{,}000\\frac{1.593848075-1}{0.06} = 80{,}000 \\times 9.897468 \\approx 791{,}797.43
$$

The computed value is approximately \$791,797.43, which matches the claim.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{B,8} = 95{,}000\\frac{1.171659381-1}{0.02} = 95{,}000 \\times 8.582969 \\approx 815{,}382.06
$$

The computed value is approximately \$815,382.06, which matches the claim.

So the statement is True.`,
      `**C.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_{A,8}\\approx 791{,}797.43$ and $s_{B,8}\\approx 815{,}382.06$ as inputs for this claim:

Comparing those totals:

$$791{,}797.43 < 815{,}382.06$$

Territory A's total does not exceed Territory B's total.

So the statement is False.`,
      `**D.** → True

Year $8$ uses seven growth steps:

$$1.06^7 \\approx 1.503630, \\qquad a_{A,8} = 80{,}000 \\times 1.503630 \\approx 120{,}290.42$$

$$1.02^7 \\approx 1.148686, \\qquad a_{B,8} = 95{,}000 \\times 1.148686 \\approx 109{,}125.14$$

$$120{,}290.42 > 109{,}125.14$$

Territory A's year-$8$ payment exceeds Territory B's.

So the statement is True.`,
      `**E.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_{B,8}\\approx 815{,}382.06$ and $s_{A,8}\\approx 791{,}797.43$ as inputs for this claim:

Territory B's lead is

$$815{,}382.06-791{,}797.43 = 23{,}584.63$$

$$23{,}584.63 < 30{,}000$$

The lead is not more than \\$30,000.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 76,
    solution_overview: `A franchisor compares two territories over $8$ years. Territory A starts at \\$80,000 and grows $6\\%$ per year. Territory B starts at \\$95,000 and grows $2\\%$ per year.

**Part 1: Setup.**

$$a_A = 80{,}000, \\qquad k_A = 1.06$$

$$a_B = 95{,}000, \\qquad k_B = 1.02, \\qquad n = 8$$

The finite total and the year-$t$ royalty are

$$s_n = a\\frac{k^n-1}{k-1}, \\qquad a_t = ak^{t-1}$$

**Part 2: Solve.**

$$1.06^8 = 1.593848075$$

$$s_{A,8} = 80{,}000\\frac{1.593848075-1}{0.06} = 80{,}000 \\times 9.897468 \\approx 791{,}797.43$$

$$1.02^8 = 1.171659381$$

$$s_{B,8} = 95{,}000\\frac{1.171659381-1}{0.02} = 95{,}000 \\times 8.582969 \\approx 815{,}382.06$$`,
  },
  {
    id: `math-11-77`,
    case_id: `MATH 11.77`,
    title: `Diminishing Marginal Returns from Advertising Spend`,
    subsection: `3.4`,
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
      `**A.** → False

At $p=1.5$ the fourth batch is

$$a_4 = \\frac{5{,}000}{4^{1.5}}$$

$$4^{1.5} = 4 \\times \\sqrt{4} = 8$$

$$a_4 = \\frac{5{,}000}{8} = 625$$

Compare the computed value with the claim (about \\$650.00). The fourth benefit is \\$625.00. The two sides do not agree.

So the statement is False.`,
      `**B.** → True

The overview's test requires $p>1$. Here $p=1.5$, and

$$1.5 > 1$$

so $\\sum \\frac{5{,}000}{n^{1.5}}$ converges to a finite total. The claim is that convergence.

So the statement is True.`,
      `**C.** → False

At $p=1$ the model is a constant multiple of the harmonic series:

$$\\sum_{n=1}^{\\infty}\\frac{5{,}000}{n}$$

The test requires $p>1$, and $1>1$ is false, so the series diverges. There is no finite total to compare with the $p=1.5$ case.

So the statement is False.`,
      `**D.** → False

At $p=1.5$ and $n=100$,

$$a_{100} = \\frac{5{,}000}{100^{1.5}} = \\frac{5{,}000}{1{,}000} = 5$$

so the named term \\$5.00 is correct. Terms tending to $0$ is necessary for convergence, not sufficient. The harmonic case $p=1$ also has $a_n\\to 0$ and still diverges. One small term does not guarantee a finite sum.

So the statement is False.`,
      `**E.** → True

At $p=0.5$,

$$0.5 \\le 1$$

so $\\sum \\frac{5{,}000}{n^{0.5}}$ diverges by the $p$-series test, even though $a_n\\to 0$. The claim is that divergence.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 77,
    solution_overview: `An analyst models the marginal benefit of the $n$-th batch of advertising spend as

$$a_n = \\frac{5{,}000}{n^p}$$

The $p$-series test is that

$$\\sum_{n=1}^{\\infty}\\frac{1}{n^p}$$

converges if and only if $p>1$. The constant $5{,}000$ factors out of the sum, so it does not change the test.

A necessary condition for any series to converge is $a_n\\to 0$, but that condition is not sufficient.`,
  },
  {
    id: `math-11-78`,
    case_id: `MATH 11.78`,
    title: `Solar Farm: Revenue Growth vs. Rising Maintenance Costs`,
    subsection: `3.4`,
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
      `**A.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{R,12} = 150{,}000\\frac{1.01^{12}-1}{0.01} \\approx 1{,}902{,}375.45
$$

The computed value is approximately \$1,902,375.45, which matches the claim.

So the statement is True.`,
      `**B.** → True

When $|k|<1$, the infinite geometric sum is:

$$
s_{\infty} = \\frac{a}{1-k}
$$

Substitute the stem numbers:

$$
s_{C,12} = 120{,}000\\frac{1.03^{12}-1}{0.03} \\approx 1{,}703{,}043.55
$$

The computed value is approximately \$1,703,043.55, which matches the claim.

So the statement is True.`,
      `**C.** → True

Apply the financial identity that produces the quantity named in the claim:

$$
\\Pi_{12} = 1{,}902{,}375.45-1{,}703{,}043.55 = 199{,}331.90
$$

The computed value is approximately \$199,331.90, which matches the claim.

So the statement is True.`,
      `**D.** → True

Year $12$ uses eleven growth steps:

$$a_{R,12} = 150{,}000 \\times 1.01^{11} \\approx 167{,}350.25$$

$$a_{C,12} = 120{,}000 \\times 1.03^{11} \\approx 166{,}108.06$$

$$167{,}350.25-166{,}108.06 = 1{,}242.19$$

Revenue still exceeds maintenance in year $12$ by about \\$1,242.19.

So the statement is True.`,
      `**E.** → True

Over $20$ years,

$$s_{R,20} = 150{,}000\\frac{1.01^{20}-1}{0.01} \\approx 3{,}302{,}850.60$$

$$s_{C,20} = 120{,}000\\frac{1.03^{20}-1}{0.03} \\approx 3{,}224{,}444.94$$

$$\\Pi_{20} = 3{,}302{,}850.60-3{,}224{,}444.94 = 78{,}405.66$$

The overview recovered $\\Pi_{12}=199{,}331.90$. Since $78{,}405.66<199{,}331.90$, the $20$-year profit sits below the $12$-year profit.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 78,
    solution_overview: `A solar farm's annual energy revenue starts at \\$150,000 and grows $1\\%$ per year. Annual maintenance starts at \\$120,000 and grows $3\\%$ per year. Management compares cumulative profit over $12$ years and over $20$ years.

**Part 1: Setup.**

$$a_R = 150{,}000, \\qquad k_R = 1.01$$

$$a_C = 120{,}000, \\qquad k_C = 1.03$$

Each finite total is $s_n=a\\frac{k^n-1}{k-1}$. Cumulative profit is $\\Pi_n=s_{R,n}-s_{C,n}$. The year-$t$ amount is $a_t=ak^{t-1}$.

**Part 2: Solve.**

$$s_{R,12} = 150{,}000\\frac{1.01^{12}-1}{0.01} \\approx 1{,}902{,}375.45$$

$$s_{C,12} = 120{,}000\\frac{1.03^{12}-1}{0.03} \\approx 1{,}703{,}043.55$$

$$\\Pi_{12} = 1{,}902{,}375.45-1{,}703{,}043.55 = 199{,}331.90$$`,
  },
  {
    id: `math-11-79`,
    case_id: `MATH 11.79`,
    title: `Private Equity Fund: Recession vs. Recovery Cash-Flow Scenarios`,
    subsection: `3.4`,
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
      `**A.** → True

An infinite geometric series of profits converges only when the common ratio is strictly less than one in absolute value:

$$
|k| < 1
$$

Substitute the stem numbers:

$$
s_{\\infty} = \\frac{2{,}400{,}000}{1-0.94} = \\frac{2{,}400{,}000}{0.06} = 40{,}000{,}000
$$

That computed value matches the claim.

So the statement is True.`,
      `**B.** → False

The overview’s present-value line is

$$
s_{15}\\approx 24{,}188{,}328.05
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $s_{15}\\approx 24{,}188{,}328.05$ and $s_{\\infty}=40{,}000{,}000$ as inputs for this claim:

The share is

$$\\frac{24{,}188{,}328.05}{40{,}000{,}000} \\approx 0.6047 \\approx 60\\%$$

The claim is about $75\\%$. The share is not $75\\%$.

The computed figure does not match the claim.

So the statement is False.`,
      `**D.** → False

Under the recovery scenario,

$$1.06^7 = 1.503630259$$

$$s_7 = 2{,}400{,}000\\frac{1.503630259-1}{0.06} = 2{,}400{,}000 \\times 8.393838 \\approx 20{,}145{,}210.36$$

The overview recovered a recession infinite total of \\$40,000,000. Since $20{,}145{,}210.36<40{,}000{,}000$, the seven-year recovery total does not exceed the infinite recession total.

So the statement is False.`,
      `**E.** → False

Year $7$ of the recovery uses six growth steps:

$$1.06^6 \\approx 1.418519$$

$$a_7 = 2{,}400{,}000 \\times 1.418519 \\approx 3{,}404{,}445.87$$

Compare the computed value with the claim (about \\$2,900,000.00). Year-$7$ cash flow is about \\$3,404,445.87. The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 79,
    solution_overview: `A private equity fund's portfolio company currently generates \\$2,400,000 in annual free cash flow. Under a recession scenario, cash flow shrinks $6\\%$ every year indefinitely. Under a recovery scenario, cash flow grows $6\\%$ per year for $7$ years.

**Part 1: Setup.**

$$a = 2{,}400{,}000, \\qquad k_R = 0.94, \\qquad k_G = 1.06, \\qquad n = 7$$

When $|k|<1$, $s_{\\infty}=\\frac{a}{1-k}$. A finite geometric stream is $s_n=a\\frac{k^n-1}{k-1}$. The year-$t$ cash flow is $a_t=ak^{t-1}$.

**Part 2: Solve.**

The infinite recession total is

$$s_{\\infty} = \\frac{2{,}400{,}000}{1-0.94} = \\frac{2{,}400{,}000}{0.06} = 40{,}000{,}000$$

The first $15$ recession years are

$$0.94^{15} = 0.395291799$$

$$s_{15} = 2{,}400{,}000\\frac{1-0.395291799}{0.06} = 2{,}400{,}000 \\times 10.078470 \\approx 24{,}188{,}328.05$$`,
  },
  {
    id: `math-11-80`,
    case_id: `MATH 11.80`,
    title: `Capstone: A Three-Tranche Loan Portfolio and a Convergence Trap`,
    subsection: `3.4`,
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
      `**A.** → True

For $k=1$, $s_n=an$. For finite $k\\ne 1$, $s_n=a\\frac{k^n-1}{k-1}$. When $|k|<1$, $s_{\\infty}=\\frac{a}{1-k}$. Terms tending to $0$ are necessary but not sufficient for convergence:

$$
s_1 = 25{,}000 \\times 9 = 225{,}000
$$

The computed value is approximately \$225,000.00, which matches the claim.

So the statement is True.`,
      `**B.** → True

For $k=1$, $s_n=an$. For finite $k\\ne 1$, $s_n=a\\frac{k^n-1}{k-1}$. When $|k|<1$, $s_{\\infty}=\\frac{a}{1-k}$. Terms tending to $0$ are necessary but not sufficient for convergence:

$$
s_2 = 18{,}000\\frac{1.07^9-1}{0.07} \\approx 215{,}603.80
$$

The computed value is approximately \$215,603.80, which matches the claim.

So the statement is True.`,
      `**C.** → True

$k\\ne 1$, $s_n=a\\frac{k^n-1}{k-1}$. When $|k|<1$, $s_{\\infty}=\\frac{a}{1-k}$. Terms tending to $0$ are necessary but not sufficient for convergence:

$$
P = \\frac{D_1}{r-g}
$$

Substitute the stem numbers:

$$
s_3 = \\frac{30{,}000}{1-0.92} = \\frac{30{,}000}{0.08} = 375{,}000
$$

That computed value matches the claim.

So the statement is True.`,
      `**D.** → False

Tranche 3 converges, so its \\$375,000 total is a finite dollar amount and may be added to the two finite tranches. The overview recovered

$$225{,}000+215{,}603.80+375{,}000 = 815{,}603.80$$

The claim excludes Tranche 3 and stops at \\$440,603.80. The combined portfolio is \\$815,603.80.

So the statement is False.`,
      `**E.** → False

The fee in period $100$ is

$$f_{100} = \\frac{1{,}000}{100} = 10$$

so the named term \\$10.00 is correct. The full stream is $1{,}000$ times the harmonic series, and $p=1$ fails the $p$-series test $p>1$. Terms tending to $0$ do not guarantee convergence.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 80,
    solution_overview: `A private lender values three loan tranches in nominal undiscounted dollars. Tranche 1 pays equal annual coupons of \\$25,000 for $9$ years. Tranche 2 starts at \\$18,000 and grows $7\\%$ per year for $9$ years. Tranche 3 is a perpetual royalty starting at \\$30,000 that declines $8\\%$ per year forever. Separately, an analyst proposes a fee stream $f_n=\\frac{1{,}000}{n}$.

**Part 1: Setup.**

$$a_1 = 25{,}000, \\qquad k_1 = 1, \\qquad n_1 = 9$$

$$a_2 = 18{,}000, \\qquad k_2 = 1.07, \\qquad n_2 = 9$$

$$a_3 = 30{,}000, \\qquad k_3 = 0.92$$

For $k=1$, $s_n=an$. For finite $k\\ne 1$, $s_n=a\\frac{k^n-1}{k-1}$. When $|k|<1$, $s_{\\infty}=\\frac{a}{1-k}$. Terms tending to $0$ are necessary but not sufficient for convergence.

**Part 2: Solve.**

$$s_1 = 25{,}000 \\times 9 = 225{,}000$$

$$s_2 = 18{,}000\\frac{1.07^9-1}{0.07} \\approx 215{,}603.80$$

$$s_3 = \\frac{30{,}000}{1-0.92} = \\frac{30{,}000}{0.08} = 375{,}000$$`,
  },
  {
    id: `math-11-81`,
    case_id: `MATH 11.81`,
    title: `Present Value of a Single Future Payment for a Bakery Equipment Fund`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
x\\approx 4{,}081.49
$$

The claim asserts

$$
x\\approx 4{,}081.49
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

A lower rate uses a smaller three-year factor, so more must be deposited today to reach the same \\$5,000:

$$(1.05)^3 = 1.157625$$

$$x_{5\\%} = \\frac{5{,}000}{1.157625} \\approx 4{,}319.19$$

The claim needs $4{,}319.19 < 4{,}081.49$. We have $4{,}319.19 > 4{,}081.49$.

So the statement is False.`,
      `**C.** → False

Interest is the \\$5,000 target minus the recovered deposit:

$$5{,}000 - 4{,}081.49 = 918.51$$

Compare the computed value with the claim (\\$928.51). We have $918.51 \\ne 928.51$. The two sides do not agree.

So the statement is False.`,
      `**D.** → True

Present value is linear in the target. The overview recovered $x\\approx 4{,}081.49$, so a \\$10,000 target needs

$$2 \\times 4{,}081.49 = 8{,}162.98$$

Compare the computed value with the claim (\\$8,162.98). The two sides agree.

So the statement is True.`,
      `**E.** → False

Six years at the same 7% discounts the same \\$5,000 target by $(1.07)^6$:

$$x_6 = \\frac{5{,}000}{(1.07)^6} \\approx 3{,}331.71$$

Half of the three-year deposit is

$$\\frac{4{,}081.49}{2} = 2{,}040.75$$

The claim needs $x_6 = 2{,}040.75$. We have $3{,}331.71 \\ne 2{,}040.75$.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 81,
    solution_overview: `Ms. Delgado, the bakery owner from a previous chapter, now wants to have exactly \\$5,000 available in 3 years to replace a commercial oven, and plans to make a single deposit today into an account earning 7% annual interest.

The target, annual rate, and horizon are

$$A = 5{,}000, \\qquad r = 7\\% = 0.07, \\qquad n = 3$$

A single present deposit $x$ grows according to $x(1+r)^n=A$, so

$$x = \\frac{A}{(1+r)^n}$$

The three-year factor and the required deposit are

$$(1.07)^3 = 1.225043$$

$$x = \\frac{5{,}000}{1.225043} \\approx 4{,}081.49$$`,
  },
  {
    id: `math-11-82`,
    case_id: `MATH 11.82`,
    title: `Future Value of a Freelancer's Present Deposit`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
F(5)\\approx 8{,}698.47
$$

The claim asserts

$$
F(5)\\approx 8{,}698.47
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Interest over the first five years is the recovered five-year balance minus the \\$6,500 deposit:

$$8{,}698.47 - 6{,}500 = 2{,}198.47$$

Compare the computed value with the claim (\\$2,198.47). The two sides agree.

So the statement is True.`,
      `**C.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $F(5)\\approx 8{,}698.47$ and $F(10)\\approx 11{,}640.51$ as inputs for this claim:

Double the five-year balance is

$$2 \\times 8{,}698.47 = 17{,}396.94$$

The claim needs $F(10)=17{,}396.94$. We have $11{,}640.51 \\ne 17{,}396.94$.

So the statement is False.`,
      `**D.** → False

Interest in the second five years is the ten-year balance minus the five-year balance. The overview recovered $F(5)\\approx 8{,}698.47$ and $F(10)\\approx 11{,}640.51$:

$$11{,}640.51 - 8{,}698.47 = 2{,}942.04$$

The first five years earn

$$8{,}698.47 - 6{,}500 = 2{,}198.47$$

The claim needs $2{,}942.04 < 2{,}198.47$. We have $2{,}942.04 > 2{,}198.47$.

So the statement is False.`,
      `**E.** → False

At 3% the same \\$6,500 deposit grows for five years by

$$F_{3\\%}(5) = 6{,}500(1.03)^5 \\approx 7{,}535.28$$

Half of the 6% five-year balance is

$$\\frac{8{,}698.47}{2} = 4{,}349.24$$

The claim needs $F_{3\\%}(5)=4{,}349.24$. We have $7{,}535.28 \\ne 4{,}349.24$.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 82,
    solution_overview: `A freelance graphic designer deposits \\$6,500 today into a business savings account earning 6% annual interest, and wants to project the accumulated value after 5 years, and again after a longer 10-year horizon.

The deposit, annual rate, and the two horizons are

$$P = 6{,}500, \\qquad r = 6\\% = 0.06$$

$$n = 5, \\qquad n = 10$$

A present deposit accumulates by

$$F(n) = P(1+r)^n$$

The five-year and ten-year balances are

$$(1.06)^5 = 1.338226$$

$$F(5) = 6{,}500 \\times 1.338226 \\approx 8{,}698.47$$

$$(1.06)^{10} = 1.790847$$

$$F(10) = 6{,}500 \\times 1.790847 \\approx 11{,}640.51$$`,
  },
  {
    id: `math-11-83`,
    case_id: `MATH 11.83`,
    title: `Future Value of an Ordinary Annuity for a Dental Clinic's Equipment Fund`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
F_6\\approx 13{,}603.84
$$

The claim asserts

$$
F_6\\approx 13{,}603.84
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

Interest is the recovered future value minus the six deposits of \\$2,000:

$$2{,}000 \\times 6 = 12{,}000$$

$$13{,}603.84 - 12{,}000 = 1{,}603.84$$

Compare the computed value with the claim (\\$1,703.84). We have $1{,}603.84 \\ne 1{,}703.84$. The two sides do not agree.

So the statement is False.`,
      `**C.** → False

The present-value equivalent discounts the recovered $F_6\\approx 13{,}603.84$:

$$P_6 = \\frac{13{,}603.84}{(1.05)^6} \\approx 10{,}151.40$$

Compare the computed value with the claim (\\$18,230.45). We have $10{,}151.40 \\ne 18{,}230.45$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

Future value is linear in the annual deposit. The overview recovered $F_6\\approx 13{,}603.84$, so a 50% larger deposit of \\$3,000 gives

$$13{,}603.84 \\times 1.5 = 20{,}405.76$$

The claim is \\$21,405.76. We have $20{,}405.76 \\ne 21{,}405.76$.

So the statement is False.`,
      `**E.** → False

Twelve years of the same \\$2,000 deposits give

$$F_{12} = \\frac{2{,}000}{0.05}\\left[(1.05)^{12}-1\\right] \\approx 31{,}834.24$$

Double the six-year future value is

$$2 \\times 13{,}603.84 = 27{,}207.68$$

The claim needs $F_{12} < 27{,}207.68$. We have $31{,}834.24 > 27{,}207.68$.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 83,
    solution_overview: `A dental clinic owner deposits \\$2,000 at the end of each year into an equipment-replacement fund earning 5% annual interest, for 6 years, and wants to understand how this future value relates to its present-value equivalent.

The ordinary annuity has annual deposit, rate, and horizon

$$a = 2{,}000, \\qquad r = 5\\% = 0.05, \\qquad n = 6$$

The future value of an ordinary annuity is

$$F_n = \\frac{a}{r}\\left[(1+r)^n-1\\right]$$

and its present-value equivalent satisfies $P_n=\\frac{F_n}{(1+r)^n}$.

The six-year future value is

$$F_6 = \\frac{2{,}000}{0.05}\\left[(1.05)^6-1\\right] \\approx 13{,}603.84$$`,
  },
  {
    id: `math-11-84`,
    case_id: `MATH 11.84`,
    title: `Future Value of an Ordinary Annuity for a Logistics Company's Fleet Fund`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
F_{10}\\approx 50{,}702.97
$$

The claim asserts

$$
F_{10}\\approx 50{,}702.97
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Interest is the recovered future value minus the ten deposits of \\$3,500:

$$3{,}500 \\times 10 = 35{,}000$$

$$50{,}702.97 - 35{,}000 = 15{,}702.97$$

Compare the computed value with the claim (\\$15,702.97). The two sides agree.

So the statement is True.`,
      `**C.** → False

Twenty years of the same \\$3,500 deposits give

$$F_{20} = \\frac{3{,}500}{0.08}\\left[(1.08)^{20}-1\\right] \\approx 160{,}166.87$$

Double the ten-year future value is

$$2 \\times 50{,}702.97 = 101{,}405.94$$

The claim needs $F_{20} < 101{,}405.94$. We have $160{,}166.87 > 101{,}405.94$.

So the statement is False.`,
      `**D.** → False

The overview recovered $F_{10}\\approx 50{,}702.97$. Interest is that pile minus the \\$35,000 of deposits:

$$50{,}702.97 - 35{,}000 = 15{,}702.97$$

The claim needs $15{,}702.97 > 35{,}000$. We have $15{,}702.97 < 35{,}000$.

So the statement is False.`,
      `**E.** → True

At 10% the same ten deposits give

$$F_{10}^{10\\%} = \\frac{3{,}500}{0.10}\\left[(1.10)^{10}-1\\right] \\approx 55{,}780.97$$

The claim needs $F_{10}^{10\\%} > 55{,}000$. We have $55{,}780.97 > 55{,}000$.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 84,
    solution_overview: `A logistics company deposits \\$3,500 at the end of each year into a fleet-replacement account earning 8% annual interest, for 10 years, and management wants to stress-test the fund under a longer horizon and a higher rate.

The ordinary annuity has annual deposit, rate, and horizon

$$a = 3{,}500, \\qquad r = 8\\% = 0.08, \\qquad n = 10$$

The future value of an ordinary annuity is

$$F_n = \\frac{a}{r}\\left[(1+r)^n-1\\right]$$

The ten-year future value is

$$F_{10} = \\frac{3{,}500}{0.08}\\left[(1.08)^{10}-1\\right]$$

$$= 43{,}750 \\times 1.158925 \\approx 50{,}702.97$$`,
  },
  {
    id: `math-11-85`,
    case_id: `MATH 11.85`,
    title: `Present Value of an Ordinary Annuity for a Retiree's Withdrawal Plan`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P_{15}=25{,}775.15
$$

The claim asserts

$$
P_{15}=25{,}775.15
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Fifteen withdrawals of \\$2,400 total

$$2{,}400 \\times 15 = 36{,}000$$

The overview recovered $P_{15}=25{,}775.15$. Then $36{,}000 > 25{,}775.15$.

So the statement is True.`,
      `**C.** → False

Thirty years of the same withdrawals give

$$P_{30} = \\frac{2{,}400}{0.045}\\left[1-\\frac{1}{(1.045)^{30}}\\right] = 39{,}091.65$$

Double the fifteen-year present value is

$$2 \\times 25{,}775.15 = 51{,}550.30$$

The claim needs $P_{30}=51{,}550.30$. We have $39{,}091.65 \\ne 51{,}550.30$.

So the statement is False.`,
      `**D.** → False

The percentage-point gap is the effective annual rate minus the nominal quote. First form the effective rate, then subtract:

The gap is the nominal withdrawal total minus the recovered deposit:

$$2{,}400 \\times 15 = 36{,}000$$

$$36{,}000 - 25{,}775.15 = 10{,}224.85$$

The claim is \\$11,224.85. We have $10{,}224.85 \\ne 11{,}224.85$.

So the statement is False.`,
      `**E.** → False

A higher rate discounts the same withdrawals more, so less is needed today. At 6%,

$$P_{15}^{6\\%} = \\frac{2{,}400}{0.06}\\left[1-\\frac{1}{(1.06)^{15}}\\right] = 23{,}309.40$$

The claim needs $23{,}309.40 > 25{,}775.15$. We have $23{,}309.40 < 25{,}775.15$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `A retiree wants to withdraw \\$2,400 at the end of each year for the next 15 years from a retirement account earning 4.5% annual interest, and wants to know how much must be in the account today to support these withdrawals.

The annual withdrawal, rate, and horizon are

$$a = 2{,}400, \\qquad r = 4.5\\% = 0.045, \\qquad n = 15$$

The present value of an ordinary annuity is

$$P_n = \\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right]$$

The required deposit today is

$$P_{15} = \\frac{2{,}400}{0.045}\\left[1-\\frac{1}{(1.045)^{15}}\\right]$$

$$= 53{,}333.33 \\times 0.483284 = 25{,}775.15$$`,
  },
  {
    id: `math-11-86`,
    case_id: `MATH 11.86`,
    title: `Present Value of an Ordinary Annuity vs. a Perpetuity for a Nonprofit Scholarship`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P_{20}=57{,}349.67
$$

The claim asserts

$$
P_{20}=57{,}349.67
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Using the recovered solution values $P=83{,}333.33$ and $P_{20}=57{,}349.67$ as inputs for this claim:

The extra cost of the perpetuity is

$$83{,}333.33 - 57{,}349.67 = 25{,}983.66$$

The claim is that same gap.

The computed figure matches the claim.

So the statement is True.`,
      `**C.** → False

The 20-year share of the perpetuity is

$$\\frac{57{,}349.67}{83{,}333.33} \\approx 0.6882 = 68.82\\%$$

Compare the computed value with the claim (about $72.82\\%$). We have $68.82\\% \\ne 72.82\\%$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

Forty years of the same scholarships give

$$P_{40} = \\frac{5{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^{40}}\\right] = 75{,}231.50$$

$$\\frac{75{,}231.50}{83{,}333.33} \\approx 0.9028 = 90.28\\%$$

The claim needs a share above $95\\%$. We have $90.28\\% < 95\\%$.

So the statement is False.`,
      `**E.** → True

In the annuity formula, let $n\\to\\infty$. Then $(1.06)^n\\to\\infty$, so

$$\\frac{1}{(1.06)^n}\\to 0$$

$$P_n \\to \\frac{5{,}000}{0.06} = 83{,}333.33$$

Compare the computed value with the claim (that same limit). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 86,
    solution_overview: `A nonprofit organization needs to fund \\$5,000 scholarship payments at the end of each year for 20 years, with an interest rate of 6%. The board also wants to compare this cost to funding the same \\$5,000 annual payment in perpetuity at the same rate.

The annual payment, rate, and finite horizon are

$$a = 5{,}000, \\qquad r = 6\\% = 0.06, \\qquad n = 20$$

The ordinary-annuity and perpetuity present values are

$$P_n = \\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right], \\qquad P = \\frac{a}{r}$$

The 20-year fund and the perpetuity are

$$P_{20} = \\frac{5{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^{20}}\\right]$$

$$= 83{,}333.33 \\times 0.688195 = 57{,}349.67$$

$$P = \\frac{5{,}000}{0.06} = 83{,}333.33$$`,
  },
  {
    id: `math-11-87`,
    case_id: `MATH 11.87`,
    title: `Comparing Payment Streams via Present Value for a Machinery Purchase`,
    subsection: `3.5`,
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
      `**A.** → True

Discounting Option 2 at 7% gives:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers:

$$
= 35{,}714.29 \\times 0.456069 = 16{,}288.18
$$

The computed value is approximately \$16,288.18, which matches the claim.

So the statement is True.`,
      `**B.** → False

The overview recovered $P_9=16{,}288.18$. That is less than Option 1's \\$18,000, so Option 2 is cheaper. The saving is

$$18{,}000 - 16{,}288.18 = 1{,}711.82$$

Compare the computed value with the claim (a saving of \\$1,811.82). We have $1{,}711.82 \\ne 1{,}811.82$. The two sides do not agree.

So the statement is False.`,
      `**C.** → False

At 4% the same nine payments are worth

$$P_9^{4\\%} = \\frac{2{,}500}{0.04}\\left[1-\\frac{1}{(1.04)^9}\\right] = 18{,}588.31$$

The claim needs $18{,}588.31 < 16{,}288.18$. We have $18{,}588.31 > 16{,}288.18$.

So the statement is False.`,
      `**D.** → False

Nine payments of \\$2,500 total

$$2{,}500 \\times 9 = 22{,}500$$

The excess over Option 1 is

$$22{,}500 - 18{,}000 = 4{,}500$$

Compare the computed value with the claim (\\$4,600). We have $4{,}500 \\ne 4{,}600$. The two sides do not agree.

So the statement is False.`,
      `**E.** → False

Growing Option 1's \\$18,000 for nine years at 7% gives

$$F = 18{,}000(1.07)^9$$

$$(1.07)^9 \\approx 1.838459$$

$$F \\approx 33{,}092.26$$

The claim needs $F>34{,}000$. We have $33{,}092.26 < 34{,}000$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 87,
    solution_overview: `A supplier offers a company two payment options for a piece of machinery. Option 1: pay \\$18,000 today. Option 2: pay \\$2,500 at the end of each year for 9 years. Using an interest rate of 7%, the company wants to know which option has the lower present-value cost.

Option 1 costs \\$18,000 today. Option 2 is an ordinary annuity

$$a = 2{,}500, \\qquad r = 7\\% = 0.07, \\qquad n = 9$$

The annuity present value is

$$P_n = \\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right]$$

Discounting Option 2 at 7% gives

$$P_9 = \\frac{2{,}500}{0.07}\\left[1-\\frac{1}{(1.07)^9}\\right]$$

$$= 35{,}714.29 \\times 0.456069 = 16{,}288.18$$`,
  },
  {
    id: `math-11-88`,
    case_id: `MATH 11.88`,
    title: `Comparing Savings Strategies via Future Value for a Construction Firm`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
F_A=19{,}126.18
$$

The claim asserts

$$
F_A=19{,}126.18
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
F_B=13{,}856.46
$$

The claim asserts a different figure. Against the recovered

$$
F_B=13{,}856.46
$$

those values do not agree.

So the statement is False.`,
      `**C.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $F_A=19{,}126.18$ and $F_B=13{,}856.46$ as inputs for this claim:

Strategy A finishes ahead. The gap is

$$19{,}126.18 - 13{,}856.46 = 5{,}269.72$$

The claim is a gap of \\$5,769.72. We have $5{,}269.72 \\ne 5{,}769.72$.

So the statement is False.`,
      `**D.** → False

Strategy B commits eight deposits of \\$1,400:

$$1{,}400 \\times 8 = 11{,}200$$

The claim needs $11{,}200 > 12{,}000$. We have $11{,}200 < 12{,}000$.

So the statement is False.`,
      `**E.** → True

Raising Strategy B to \\$1,500 a year uses the same eight-year factor at the new deposit:

$$F_B' = \\frac{1{,}500}{0.06}\\left[(1.06)^8-1\\right] = 14{,}846.20$$

The claim needs $F_B' < 19{,}126.18$. We have $14{,}846.20 < 19{,}126.18$.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 88,
    solution_overview: `A construction firm is choosing between two savings strategies for a future equipment purchase in 8 years, both earning 6% annual interest. Strategy A: deposit \\$12,000 today, all at once. Strategy B: deposit \\$1,400 at the end of each year for 8 years.

The lump sum, the annual deposit, the rate, and the horizon are

$$P = 12{,}000, \\qquad a = 1{,}400$$

$$r = 6\\% = 0.06, \\qquad n = 8$$

The lump-sum and ordinary-annuity future values are

$$F = P(1+r)^n, \\qquad F_n = \\frac{a}{r}\\left[(1+r)^n-1\\right]$$

Strategy A grows to

$$F_A = 12{,}000(1.06)^8 = 12{,}000 \\times 1.593848 = 19{,}126.18$$

Strategy B grows to

$$F_B = \\frac{1{,}400}{0.06}\\left[(1.06)^8-1\\right] = 23{,}333.33 \\times 0.593848 = 13{,}856.46$$`,
  },
  {
    id: `math-11-89`,
    case_id: `MATH 11.89`,
    title: `Future Value of an Annuity Due for a Gym's Equipment Upgrade Fund`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
F_{\\mathrm{due}}=21{,}426.05
$$

The claim asserts

$$
F_{\\mathrm{due}}=21{,}426.05
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $F_{\\mathrm{ordinary}}=20{,}405.76$ and $F_{\\mathrm{due}}=21{,}426.05$ as inputs for this claim:

End-of-year deposits finish lower:

$$20{,}405.76 < 21{,}426.05.$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → False

The dollar gap is the due pile minus the ordinary pile:

$$21{,}426.05 - 20{,}405.76 = 1{,}020.29$$

Compare the computed value with the claim (\\$1,120.29). We have $1{,}020.29 \\ne 1{,}120.29$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

Twelve years of due deposits give

$$F_{\\mathrm{ordinary}}(12) = \\frac{3{,}000}{0.05}\\left[(1.05)^{12}-1\\right] = 47{,}751.36$$

$$F_{\\mathrm{due}}(12) = 47{,}751.36 \\times 1.05 = 50{,}138.93$$

Double the six-year due value is

$$2 \\times 21{,}426.05 = 42{,}852.10$$

The claim needs $F_{\\mathrm{due}}(12)=42{,}852.10$. We have $50{,}138.93 \\ne 42{,}852.10$.

So the statement is False.`,
      `**E.** → True

The ordinary-annuity future value and the due scale are:

$$
F_{\\mathrm{due}} = F_n(1+r)
$$

Substitute the stem numbers:

$$
F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = 21{,}426.05
$$

The computed figure matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 89,
    solution_overview: `A gym owner deposits \\$3,000 at the BEGINNING of each year as an annuity due for 6 years into an equipment-upgrade fund earning 5% annual interest. The owner wants to know how much this will be worth at the end of year 6, and how it compares to depositing the same amounts at the end of each year instead.

The deposit, rate, and horizon are

$$a = 3{,}000, \\qquad r = 5\\% = 0.05, \\qquad n = 6$$

The ordinary-annuity future value and the due scale are

$$F_n = \\frac{a}{r}\\left[(1+r)^n-1\\right], \\qquad F_{\\mathrm{due}} = F_n(1+r)$$

The six-year ordinary and due piles are

$$F_{\\mathrm{ordinary}} = \\frac{3{,}000}{0.05}\\left[(1.05)^6-1\\right] = 20{,}405.76$$

$$F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = 21{,}426.05$$`,
  },
  {
    id: `math-11-90`,
    case_id: `MATH 11.90`,
    title: `Present Value of an Annuity Due for a Commercial Lease`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P_{\\mathrm{due}}=107{,}162.61
$$

The claim asserts

$$
P_{\\mathrm{due}}=107{,}162.61
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Using the recovered solution values $P_{\\mathrm{ordinary}}=101{,}096.80$ and $P_{\\mathrm{due}}=107{,}162.61$ as inputs for this claim:

End-of-year rent is worth less today:

$$101{,}096.80 < 107{,}162.61.$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → False

The dollar gap is the due present value minus the ordinary present value:

$$107{,}162.61 - 101{,}096.80 = 6{,}065.81$$

Compare the computed value with the claim (\\$7,065.81). We have $6{,}065.81 \\ne 7{,}065.81$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

Ten years of due rent give

$$P_{\\mathrm{ordinary}}(10) = \\frac{24{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^{10}}\\right] = 176{,}642.00$$

$$P_{\\mathrm{due}}(10) = 176{,}642.00 \\times 1.06 = 187{,}240.52$$

Double the five-year due value is

$$2 \\times 107{,}162.61 = 214{,}325.22$$

The claim needs $P_{\\mathrm{due}}(10)=214{,}325.22$. We have $187{,}240.52 \\ne 214{,}325.22$.

So the statement is False.`,
      `**E.** → True

The first rent is due immediately. The remaining four rents are an ordinary four-year annuity:

$$P_4 = \\frac{24{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^4}\\right] = 83{,}162.40$$

$$24{,}000 + 83{,}162.40 = 107{,}162.40$$

That matches the recovered $P_{\\mathrm{due}}=107{,}162.61$ within rounding.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 90,
    solution_overview: `A tenant signs a 5-year commercial lease requiring rent payments of \\$24,000 at the BEGINNING of each year as an annuity due. The landlord's opportunity cost of capital is 6%, and the landlord wants to know the present value of this lease, and how it compares to an otherwise identical lease with end-of-year payments.

The rent, rate, and term are

$$a = 24{,}000, \\qquad r = 6\\% = 0.06, \\qquad n = 5$$

The ordinary present value and the due scale are

$$P_n = \\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right], \\qquad P_{\\mathrm{due}} = P_n(1+r)$$

An equivalent split is $P_{\\mathrm{due}}=a+P_{n-1}$. The five-year ordinary and due present values are

$$P_{\\mathrm{ordinary}} = \\frac{24{,}000}{0.06}\\left[1-\\frac{1}{(1.06)^5}\\right] = 101{,}096.80$$

$$P_{\\mathrm{due}} = 101{,}096.80 \\times 1.06 = 107{,}162.61$$`,
  },
  {
    id: `math-11-91`,
    case_id: `MATH 11.91`,
    title: `A Deferred Perpetuity for a Philanthropist's Endowed Fund`,
    subsection: `3.5`,
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
      `**A.** → True

A level perpetuity is worth $V=\\frac{a}{r}$ one period before its first payment, so the valuation date is the end of year 4. Discounting that value to today uses:

$$
PV_0 = \\frac{V}{(1+r)^4}
$$

Substitute the stem numbers:

$$
V = \\frac{10{,}000}{0.06} = 166{,}666.67
$$

The computed value is approximately \$166,666.67, which matches the claim.

So the statement is True.`,
      `**B.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
PV_0=132{,}015.61
$$

The claim asserts

$$
PV_0=132{,}015.61
$$

Those two figures agree.

So the statement is True.`,
      `**C.** → False

If the first payment begins at the end of year 1, the perpetuity is worth $\\frac{a}{r}$ today:

$$\\frac{10{,}000}{0.06} = 166{,}666.67$$

The claim needs $166{,}666.67 < 132{,}015.61$. We have $166{,}666.67 > 132{,}015.61$.

So the statement is False.`,
      `**D.** → False

If the first payment begins at the end of year 9, the same $V=166{,}666.67$ sits at the end of year 8:

$$PV_0' = \\frac{166{,}666.67}{(1.06)^8} \\approx 104{,}568.80$$

Half of the original deferred value is

$$\\frac{132{,}015.61}{2} = 66{,}007.81$$

The claim needs $PV_0' < 66{,}007.81$. We have $104{,}568.80 > 66{,}007.81$.

So the statement is False.`,
      `**E.** → False

The ratio of today's deferred value to the year-4 perpetuity value is the four-year discount factor:

$$\\frac{PV_0}{V} = \\frac{1}{(1.06)^4} \\approx 0.7921$$

Compare the computed value with the claim ($0.8321$). We have $0.7921 \\ne 0.8321$. The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 91,
    solution_overview: `A philanthropist wants to establish an endowed fund that will pay \\$10,000 at the end of each year, forever, but the FIRST payment will not occur until the end of year 5, with payments running at t = 5, 6, 7, …. The fund earns 6% annual interest, and the philanthropist wants to know how much must be donated today.

The annual payment and rate are

$$a = 10{,}000, \\qquad r = 6\\% = 0.06$$

A level perpetuity is worth $V=\\frac{a}{r}$ one period before its first payment, so the valuation date is the end of year 4. Discounting that value to today uses

$$PV_0 = \\frac{V}{(1+r)^4}$$

The year-4 value and today's donation are

$$V = \\frac{10{,}000}{0.06} = 166{,}666.67$$

$$PV_0 = \\frac{166{,}666.67}{(1.06)^4} = \\frac{166{,}666.67}{1.262477} = 132{,}015.61$$`,
  },
  {
    id: `math-11-92`,
    case_id: `MATH 11.92`,
    title: `Reverse-Engineering a Perpetual Preferred Stock's Fair Value`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P\\approx 60.71
$$

The claim asserts

$$
P\\approx 60.71
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

The market price is \\$65.00. The overview recovered a fair value of \\$60.71:

$$65.00 > 60.71$$

The claim needs the stock to be undervalued. We have $65.00 > 60.71$.

So the statement is False.`,
      `**C.** → False

At a 4% required return,

$$P' = \\frac{4.25}{0.04} = 106.25$$

Compare the computed value with the claim (\\$116.25). We have $106.25 \\ne 116.25$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

The move from 7% to 4% raises the recovered $P\\approx 60.714286$ to $106.25$:

$$\\frac{106.25-60.714286}{60.714286} = 0.75 = 75\\%$$

The claim needs an increase of more than $75\\%$. We have exactly $75\\%$.

So the statement is False.`,
      `**E.** → False

A 20% dividend cut leaves $a'=4.25\\times 0.80=3.40$. At the same 7%,

$$P'' = \\frac{3.40}{0.07} \\approx 48.57$$

Compare the computed value with the claim (\\$50.57). We have $48.57 \\ne 50.57$. The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 92,
    solution_overview: `A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. The stock is currently trading at \\$65.00 per share. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.

The annual dividend and required return are

$$a = 4.25, \\qquad r = 7\\% = 0.07$$

The fair value of a level perpetuity is

$$P = \\frac{a}{r}$$

At 7%,

$$P = \\frac{4.25}{0.07} = 60.714286 \\approx 60.71$$`,
  },
  {
    id: `math-11-93`,
    case_id: `MATH 11.93`,
    title: `Combined Renovation Cost and Perpetual Maintenance Fund for a City Park`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P=333{,}333.33
$$

The claim asserts

$$
P=333{,}333.33
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
383{,}333.33
$$

The computed value is approximately \$383,333.33, which matches the claim.

So the statement is True.`,
      `**C.** → True

At 6% the perpetuity falls and the renovation is unchanged:

$$P' = \\frac{15{,}000}{0.06} = 250{,}000$$

$$50{,}000 + 250{,}000 = 300{,}000$$

Compare the computed value with the claim (\\$300,000.00). The two sides agree.

So the statement is True.`,
      `**D.** → False

The rate increase cuts the combined total from \\$383,333.33 to \\$300,000:

$$383{,}333.33 - 300{,}000 = 83{,}333.33$$

$$\\frac{83{,}333.33}{383{,}333.33} \\approx 0.2174 = 21.74\\%$$

The claim needs more than $25\\%$. We have $21.74\\% < 25\\%$.

So the statement is False.`,
      `**E.** → False

At 6% the perpetuity alone is \\$250,000. Half of the original combined 4.5% total is

$$\\frac{383{,}333.33}{2} = 191{,}666.67$$

The claim needs $250{,}000 < 191{,}666.67$. We have $250{,}000 > 191{,}666.67$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 93,
    solution_overview: `A city council wants to fund a park's perpetual maintenance, needing \\$15,000 per year forever, starting one year from now, PLUS an immediate one-time renovation cost of \\$50,000 paid today. The applicable interest rate is 4.5%, and the council also wants to see how a higher rate would change the total funding requirement.

The annual maintenance and rate are

$$a = 15{,}000, \\qquad r = 4.5\\% = 0.045$$

The perpetuity value is $P=\\frac{a}{r}$, and the total funding adds the immediate \\$50,000 renovation:

$$P = \\frac{15{,}000}{0.045} = 333{,}333.33$$

$$50{,}000 + 333{,}333.33 = 383{,}333.33$$`,
  },
  {
    id: `math-11-94`,
    case_id: `MATH 11.94`,
    title: `Growing Perpetuity Valuation of a Rental Property's Escalating Cash Flows`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P=436{,}363.64
$$

The claim asserts

$$
P=436{,}363.64
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

With no growth the same first cash flow is a level perpetuity at 8%:

$$P_{g=0} = \\frac{24{,}000}{0.08} = 300{,}000$$

The claim needs $300{,}000 > 436{,}363.64$. We have $300{,}000 < 436{,}363.64$.

So the statement is False.`,
      `**C.** → False

At 4% growth,

$$P' = \\frac{24{,}000}{0.08-0.04} = 600{,}000$$

Double the original fair value is

$$2 \\times 436{,}363.64 = 872{,}727.28$$

The claim needs $P'>872{,}727.28$. We have $600{,}000 < 872{,}727.28$.

So the statement is False.`,
      `**D.** → False

At a 6% required return,

$$P'' = \\frac{24{,}000}{0.06-0.025} = \\frac{24{,}000}{0.035} = 685{,}714.29$$

Compare the computed value with the claim (\\$715,714.29). We have $685{,}714.29 \\ne 715{,}714.29$. The two sides do not agree.

So the statement is False.`,
      `**E.** → True

The growing-perpetuity formula uses the denominator $r-g$. When $g\\ge 8\\%$ that denominator is zero or negative, so the constant-growth model does not apply. The claim is that restriction.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 94,
    solution_overview: `A real estate investor is evaluating a rental property expected to generate a net cash flow of \\$24,000 at the end of year 1, growing at a constant 2.5% per year forever due to rent escalation clauses. The investor requires an 8% annual return on investments of this type.

The first cash flow, growth rate, and required return are

$$a_1 = 24{,}000, \\qquad g = 2.5\\% = 0.025, \\qquad r = 8\\% = 0.08$$

For a growing perpetuity with $r>g$,

$$P = \\frac{a_1}{r-g}$$

The property's fair value is

$$P = \\frac{24{,}000}{0.08-0.025} = \\frac{24{,}000}{0.055} = 436{,}363.64$$`,
  },
  {
    id: `math-11-95`,
    case_id: `MATH 11.95`,
    title: `The Gordon Growth Model for a Pension Fund's Stock Valuation`,
    subsection: `3.5`,
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
      `**A.** → True

Next year's dividend and the growing-perpetuity value are:

$$
D_1 = D_0(1+g)
$$

Substitute the stem numbers:

$$
D_1 = 3.00 \\times 1.03 = 3.09
$$

The computed value is approximately \$3.09, which matches the claim.

So the statement is True.`,
      `**B.** → False

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P=51.50
$$

The claim asserts a different figure. Against the recovered

$$
P=51.50
$$

those values do not agree.

So the statement is False.`,
      `**C.** → False

Using the just-paid dividend by mistake gives

$$\\frac{3.00}{0.09-0.03} = \\frac{3.00}{0.06} = 50.00$$

The understatement is

$$51.50 - 50.00 = 1.50$$

Compare the computed value with the claim (\\$2.50). We have $1.50 \\ne 2.50$. The two sides do not agree.

So the statement is False.`,
      `**D.** → False

At 5% growth, next year's dividend is $D_1'=3.00\\times 1.05=3.15$, so

$$P' = \\frac{3.15}{0.09-0.05} = \\frac{3.15}{0.04} = 78.75$$

Double the original \\$51.50 is $103.00$. The claim needs $P'>103.00$. We have $78.75 < 103.00$.

So the statement is False.`,
      `**E.** → False

If $g=r$, the denominator $r-g$ is zero and the growing-perpetuity formula is undefined. The present value does not become $0$. The claim is \\$0.00.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 95,
    solution_overview: `A pension fund is valuing a stock that just paid a dividend of \\$3.00 per share, denoted D0, expected to grow at a constant 3% per year forever. The fund requires a 9% annual return, and the analyst must be careful to use the NEXT dividend, not the one just paid, in the valuation formula.

The just-paid dividend, growth rate, and required return are

$$D_0 = 3.00, \\qquad g = 3\\% = 0.03, \\qquad r = 9\\% = 0.09$$

Next year's dividend and the growing-perpetuity value are

$$D_1 = D_0(1+g), \\qquad P = \\frac{D_1}{r-g}$$

$$D_1 = 3.00 \\times 1.03 = 3.09$$

$$P = \\frac{3.09}{0.09-0.03} = \\frac{3.09}{0.06} = 51.50$$`,
  },
  {
    id: `math-11-96`,
    case_id: `MATH 11.96`,
    title: `Comparing Level vs. Growing Royalty-Stream Purchase Deals for a Musician`,
    subsection: `3.5`,
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
      `**A.** → True

The overview recovered $P_1=180{,}000$. A fair buy at a \\$170,000 asking price needs fair value at least that price:

$$180{,}000 > 170{,}000$$

Deal 1 is a good buy.

So the statement is True.`,
      `**B.** → True

The overview recovered $P_2=233{,}333.33$. The margin over the asking price is

$$233{,}333.33 - 170{,}000 = 63{,}333.33$$

The claim needs more than \\$60,000. We have $63{,}333.33 > 60{,}000$.

So the statement is True.`,
      `**C.** → False

Deal 1's margin is $180{,}000-170{,}000=10{,}000$. Deal 2's margin is $63{,}333.33$. The claim needs Deal 1's cushion to be larger. We have $10{,}000 < 63{,}333.33$.

So the statement is False.`,
      `**D.** → True

At 1% growth, Deal 2 is worth

$$P_2' = \\frac{14{,}000}{0.10-0.01} = \\frac{14{,}000}{0.09} \\approx 155{,}555.56$$

The claim needs $P_2' < 170{,}000$. We have $155{,}555.56 < 170{,}000$.

So the statement is True.`,
      `**E.** → False

Read the present value recovered in the overview:

$$
P_1=180{,}000
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 96,
    solution_overview: `A musician is offered two royalty-stream purchase deals for a song catalog, both priced at \\$170,000 and both requiring a 10% return to be considered a fair buy. Deal 1 is a level non-growing perpetuity of \\$18,000 per year. Deal 2 is a growing perpetuity starting at \\$14,000 next year, growing 4% per year forever.

The asking price and required return are \\$170,000 and $10\\%$. The two streams are

$$a = 18{,}000, \\qquad a_1 = 14{,}000, \\qquad g = 4\\% = 0.04$$

The level and growing perpetuity values are

$$P = \\frac{a}{r}, \\qquad P = \\frac{a_1}{r-g}$$

$$P_1 = \\frac{18{,}000}{0.10} = 180{,}000$$

$$P_2 = \\frac{14{,}000}{0.10-0.04} = \\frac{14{,}000}{0.06} = 233{,}333.33$$`,
  },
  {
    id: `math-11-97`,
    case_id: `MATH 11.97`,
    title: `Present Value Under Continuous Compounding for a Bond Retirement Fund`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
S_0=129{,}213.75
$$

The claim asserts

$$
S_0=129{,}213.75
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

From the overview’s recovered present value:

$$
S_0=129{,}213.75
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → False

The percentage-point gap is the effective annual rate minus the nominal quote. First form the effective rate, then subtract:

The gap is the annual-compounding present value minus the recovered continuous present value:

$$131{,}495.10 - 129{,}213.75 = 2{,}281.35$$

The claim is \\$4,280.35. We have $2{,}281.35 \\ne 4{,}280.35$.

So the statement is False.`,
      `**D.** → False

Six years of continuous discounting gives

$$-rt = -0.055 \\times 6 = -0.33$$

$$S_0' = 250{,}000 e^{-0.33} \\approx 179{,}731.00$$

Half of the 12-year present value is

$$\\frac{129{,}213.75}{2} = 64{,}606.88$$

The claim needs $S_0' < 64{,}606.88$. We have $179{,}731.00 > 64{,}606.88$.

So the statement is False.`,
      `**E.** → True

The one-year continuous discount factor is

$$e^{-0.055} \\approx 0.9465$$

$$1-0.9465 = 0.0535 = 5.35\\%$$

Compare the computed value with the claim (that same factor and that same one-year loss). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 97,
    solution_overview: `A company needs to have \\$250,000 available in 12 years to retire a bond issue, and can invest in an account offering continuous compounding at a nominal annual rate of 5.5%. The CFO wants to know how much must be invested today, and how this compares to ordinary annual compounding at the same nominal rate.

The future target, nominal rate, and horizon are

$$S(t) = 250{,}000, \\qquad r = 5.5\\% = 0.055, \\qquad t = 12$$

Continuous compounding discounts by $S_0=S(t)e^{-rt}$. Annual compounding discounts by $S_0=\\frac{S(t)}{(1+r)^t}$.

The continuous present value is

$$-rt = -0.055 \\times 12 = -0.66$$

$$S_0 = 250{,}000 e^{-0.66} = 250{,}000 \\times 0.516855 = 129{,}213.75$$

Annual compounding at the same nominal rate needs

$$S_0^{\\mathrm{ann}} = \\frac{250{,}000}{(1.055)^{12}} \\approx 131{,}495.10$$`,
  },
  {
    id: `math-11-98`,
    case_id: `MATH 11.98`,
    title: `Continuous-Compounding Lump Sum vs. Discrete Annuity for a Biotech Milestone`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
S_{\\mathrm{cont}}=131{,}629.13
$$

The claim asserts

$$
S_{\\mathrm{cont}}=131{,}629.13
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $F_9=96{,}757.60$ and $S_{\\mathrm{cont}}=131{,}629.13$ as inputs for this claim:

Both strategies commit \\$75,000 in total, and

$$96{,}757.60 < 131{,}629.13.$$

That computed value matches the claim.

So the statement is True.`,
      `**C.** → True

The lump-sum lead is

$$131{,}629.13 - 96{,}757.60 = 34{,}871.53$$

The claim needs more than \\$30,000. We have $34{,}871.53 > 30{,}000$.

So the statement is True.`,
      `**D.** → True

The lump sum earns 6.25% on the full \\$75,000 from day one. The annuity's later deposits sit for fewer years, so they accumulate less. That timing gap is why $S_{\\mathrm{cont}}$ exceeds $F_9$.

So the statement is True.`,
      `**E.** → True

Discrete annual compounding of the full \\$75,000 for nine years gives

$$S_{\\mathrm{ann}} = 75{,}000(1.0625)^9 \\approx 129{,}426.15$$

The claim needs $S_{\\mathrm{ann}} > 96{,}757.60$. We have $129{,}426.15 > 96{,}757.60$.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 98,
    solution_overview: `A biotech company sets aside \\$75,000 today in an account offering continuous compounding at a nominal 6.25% annual rate, aiming to accumulate funds for a 9-year R&D milestone. Management compares this to instead depositing the same \\$75,000 total, spread evenly as \\$8,333.33 at the end of each of the 9 years, into a separate account earning a discrete 6.25% annual rate.

The lump sum, rate, and horizon are

$$P = 75{,}000, \\qquad r = 6.25\\% = 0.0625, \\qquad t = 9$$

The annuity deposits the same total as $a=8{,}333.33$ at each year-end. Continuous growth and the ordinary-annuity future value are

$$S = Pe^{rt}, \\qquad F_n = \\frac{a}{r}\\left[(1+r)^n-1\\right]$$

$$rt = 0.0625 \\times 9 = 0.5625$$

$$S_{\\mathrm{cont}} = 75{,}000 e^{0.5625} = 131{,}629.13$$

$$F_9 = \\frac{8{,}333.33}{0.0625}\\left[(1.0625)^9-1\\right] = 96{,}757.60$$`,
  },
  {
    id: `math-11-99`,
    case_id: `MATH 11.99`,
    title: `Mixed Financial Planning: Annuity Due, Continuous Compounding & Perpetuity`,
    subsection: `3.5`,
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
      `**A.** → True

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P_{\\mathrm{due}}=18{,}110.94
$$

The claim asserts

$$
P_{\\mathrm{due}}=18{,}110.94
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

The due future value scales the ordinary future value by one extra period:

$$F_{\\mathrm{due}} = \\frac{4{,}200}{0.08}\\left[(1.08)^5-1\\right](1.08) = 26{,}610.90$$

Compare the computed value with the claim (\\$27,610.90). We have $26{,}610.90 \\ne 27{,}610.90$. The two sides do not agree.

So the statement is False.`,
      `**C.** → False

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
S=30{,}439.24
$$

The claim asserts a different figure. Against the recovered

$$
S=30{,}439.24
$$

those values do not agree.

So the statement is False.`,
      `**D.** → False

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Using the recovered solution values $P_{\\mathrm{perp}}=37{,}500$ and $P_{\\mathrm{due}}=18{,}110.94$ as inputs for this claim:

Double the lease present value is

$$2 \\times 18{,}110.94 = 36{,}221.88$$

The claim needs $37{,}500 < 36{,}221.88$. We have $37{,}500 > 36{,}221.88$.

So the statement is False.`,
      `**E.** → False

The overview’s present-value line is

$$
S=30{,}439.24
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 99,
    solution_overview: `A small business owner is juggling three separate financial arrangements, all at rates around 6-8%. First, an equipment lessor requires payments of \\$4,200 at the BEGINNING of each year as an annuity due for 5 years at 8% interest. Second, the owner separately invests \\$20,000 today for 7 years under continuous compounding at a nominal 6% rate to fund a future purchase. Third, the owner is considering a perpetuity option paying \\$3,000 per year forever, at 8%, for a maintenance reserve fund.

The due lease, the continuous investment, and the perpetuity are

$$a = 4{,}200, \\qquad n = 5, \\qquad r = 8\\% = 0.08$$

$$P = 20{,}000, \\qquad t = 7, \\qquad r_{\\mathrm{cont}} = 6\\% = 0.06$$

$$a_{\\mathrm{perp}} = 3{,}000$$

The three models are

$$P_{\\mathrm{due}} = \\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right](1+r), \\qquad S = Pe^{rt}, \\qquad P_{\\mathrm{perp}} = \\frac{a}{r}$$

$$P_{\\mathrm{ordinary}} = \\frac{4{,}200}{0.08}\\left[1-\\frac{1}{(1.08)^5}\\right] = 16{,}769.39$$

$$P_{\\mathrm{due}} = 16{,}769.39 \\times 1.08 = 18{,}110.94$$

$$S = 20{,}000 e^{0.06 \\times 7} = 20{,}000 e^{0.42} = 30{,}439.24$$

$$P_{\\mathrm{perp}} = \\frac{3{,}000}{0.08} = 37{,}500$$`,
  },
  {
    id: `math-11-100`,
    case_id: `MATH 11.100`,
    title: `Capstone: A Family Office's Four-Component Windfall Allocation`,
    subsection: `3.5`,
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
      `**A.** → True

Compound growth scales the opening principal by the recovered accumulation factor:

$$
FV = P(1+i)^{nt}
$$

Substituting the stem inputs recovered in the overview gives

$$
S=247{,}308.20
$$

The claim asserts

$$
S=247{,}308.20
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

Present value discounts the future cash amount by the recovered accumulation factor:

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
x=56{,}396.85
$$

The claim asserts a different figure. Against the recovered

$$
x=56{,}396.85
$$

those values do not agree.

So the statement is False.`,
      `**C.** → True

Discount the future cash amount with the recovered factor.

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P_{12}=79{,}429.40
$$

The claim asserts

$$
P_{12}=79{,}429.40
$$

Those two figures agree.

So the statement is True.`,
      `**D.** → True

Write the present-value formula before substituting.

$$
PV = \\frac{FV}{(1+i)^{nt}}
$$

Substituting the stem inputs recovered in the overview gives

$$
P=100{,}000
$$

The claim asserts

$$
P=100{,}000
$$

Those two figures agree.

So the statement is True.`,
      `**E.** → False

Present-day resources are Component 1's opening \\$150,000, plus the recovered $x$, $P_{12}$, and $P$:

$$150{,}000 + 56{,}396.85 = 206{,}396.85$$

$$206{,}396.85 + 79{,}429.40 = 285{,}826.25$$

$$285{,}826.25 + 100{,}000 = 385{,}826.25$$

The claim needs a total above \\$500,000. We have $385{,}826.25 < 500{,}000$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 100,
    solution_overview: `A family office is structuring a client's financial plan using four separate tools. Component 1: \\$150,000 is invested today in a continuous-compounding account at a nominal 5% rate for 10 years, to fund a future purchase. Component 2: the client needs \\$80,000 available in 6 years for a home renovation, funded today by a single deposit at a discrete 6% annual rate. Component 3: the client will receive an ordinary annuity of \\$10,000 at the end of each year for 12 years from a structured settlement, discounted at 7%. Component 4: the remainder will endow a scholarship as a growing perpetuity paying \\$5,000 next year, growing 2% annually forever, at a required return of 7%.

The four models are

$$S = Pe^{rt}, \\qquad x = \\frac{A}{(1+r)^n}$$

$$P_n = \\frac{a}{r}\\left[1-\\frac{1}{(1+r)^n}\\right], \\qquad P = \\frac{a_1}{r-g}$$

Component 1 accumulates

$$S = 150{,}000 e^{0.05 \\times 10} = 247{,}308.20$$

Component 2 requires a deposit today of

$$x = \\frac{80{,}000}{(1.06)^6} = 56{,}396.85$$

Component 3 has present value

$$P_{12} = \\frac{10{,}000}{0.07}\\left[1-\\frac{1}{(1.07)^{12}}\\right] = 79{,}429.40$$

Component 4 has present value

$$P = \\frac{5{,}000}{0.07-0.02} = 100{,}000$$`,
  },
  {
    id: `math-11-101`,
    case_id: `MATH 11.101`,
    title: `Equipment Loan: Finding the Equal Annual Payment`,
    subsection: `3.6`,
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
      `**A.** → True

A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.

The periodic rate splits the nominal annual quote by the compounding frequency:

$$
i = \\frac{r}{n}
$$

Substituting the stem inputs recovered in the overview gives

$$
r=0.12
$$

The claim asserts

$$
r=0.12
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → True

The annuity payment uses the recovered rate and term from the overview:

$$
a = \\frac{rK}{1-(1+r)^{-n}}
$$

Substituting the stem inputs recovered in the overview gives

$$
a \\approx 14{,}593.54
$$

The claim asserts

$$
a \\approx 14{,}593.54
$$

Those two figures agree.

So the statement is True.`,
      `**C.** → True

Interest in year 1 is the opening balance times the periodic rate, independent of the instalment size:

$$I_1 = 60{,}000 \\times 0.12 = 7{,}200$$

The overview recovered that same first-year interest figure. The claim is \$7,200.00.

So the statement is True.`,
      `**D.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered first-year principal as $7{,}393.54$. Half the payment is

$$\\frac{14{,}593.54}{2} = 7{,}296.77$$

Then $7{,}393.54 > 7{,}296.77$.

So the statement is True.`,
      `**E.** → False

The overview recovered the balance after payment 1 as $52{,}606.46$. Year-2 interest and principal are

$$0.12 \\times 52{,}606.46 = 6{,}312.77$$

$$14{,}593.54 - 6{,}312.77 = 8{,}280.77$$

The balance after payment 2 is

$$52{,}606.46 - 8{,}280.77 = 44{,}325.69$$

The claim is \\$45,000.00. We have about \\$44,325.69.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 101,
    solution_overview: `A small bakery-supply distributor borrows \\$60,000 at the beginning of the year to buy a delivery van and a walk-in cooler. The loan is repaid in $6$ equal year-end instalments at $12\\%$ per year, compounding annually.

**Part 1: Setup.**

$$K = 60{,}000, \\qquad r = 0.12, \\qquad n = 6$$

**Part 2: Solve.**

The equal annual payment is

$$a = \\frac{rK}{1-(1+r)^{-n}}$$

$$a = \\frac{0.12 \\times 60{,}000}{1-(1.12)^{-6}} = \\frac{7{,}200}{0.493369}$$

$$a \\approx 14{,}593.54$$

Year-1 interest on the opening balance is

$$0.12 \\times 60{,}000 = 7{,}200$$

Year-1 principal is

$$14{,}593.54 - 7{,}200 = 7{,}393.54$$

leaving balance $52{,}606.46$.`,
  },
  {
    id: `math-11-102`,
    case_id: `MATH 11.102`,
    title: `Auto Dealership Financing with Monthly Compounding`,
    subsection: `3.6`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
0.0075 = 0.75\\%
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

The annuity payment uses the recovered rate and term from the overview:

$$
a = \\frac{rK}{1-(1+r)^{-n}}
$$

Substituting the stem inputs recovered in the overview gives

$$
a \\approx 597.24
$$

The claim asserts

$$
a \\approx 597.24
$$

Those two figures agree.

So the statement is True.`,
      `**C.** → False

Total paid is the recovered monthly payment times $48$:

$$597.24 \\times 48 \\approx 28{,}667.57$$

Compare the computed value with the claim (\\$29,500.00). We have about \\$28,667.57. The two sides do not agree.

So the statement is False.`,
      `**D.** → True

Total interest is total paid minus principal. Using the $48$-payment outlay about \\$28,667.57,

$$28{,}667.57 - 24{,}000 = 4{,}667.57$$

Compare the computed value with the claim (\\$4,667.57). The two sides agree.

So the statement is True.`,
      `**E.** → False

Four equal annual instalments at the same nominal $9\\%$ use $r=0.09$ and $n=4$:

$$a = \\frac{0.09 \\times 24{,}000}{1-(1.09)^{-4}} = \\frac{2{,}160}{0.291676}$$

$$a \\approx 7{,}408.05$$

The claim needs this annual payment below \\$2,388.96. We have about \\$7,408.05.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 102,
    solution_overview: `A used-car dealership finances a customer's \\$24,000 vehicle purchase over $4$ years, with equal payments at the end of each month and interest at a nominal annual rate of $9\\%$, compounding monthly.

**Part 1: Setup.**

$$K = 24{,}000, \\qquad r_{\\mathrm{ann}} = 0.09, \\qquad m = 12, \\qquad t = 4$$

**Part 2: Solve.**

The monthly rate and number of payments are

$$r = \\frac{r_{\\mathrm{ann}}}{12}, \\qquad n = 12t$$

$$r = \\frac{0.09}{12} = 0.0075, \\qquad n = 48$$

The equal-payment formula is

$$a = \\frac{rK}{1-(1+r)^{-n}}$$

$$a = \\frac{0.0075 \\times 24{,}000}{1-(1.0075)^{-48}} = \\frac{180}{0.301329}$$

$$a \\approx 597.24$$`,
  },
  {
    id: `math-11-103`,
    case_id: `MATH 11.103`,
    title: `Restaurant Renovation Loan: Tracking the Amortization Schedule`,
    subsection: `3.6`,
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
      `**A.** → True

The annuity payment uses the recovered rate and term from the overview:

$$
a = \\frac{rK}{1-(1+r)^{-n}}
$$

Substituting the stem inputs recovered in the overview gives

$$
a \\approx 11{,}870.89
$$

The claim asserts

$$
a \\approx 11{,}870.89
$$

Those two figures agree.

So the statement is True.`,
      `**B.** → False

Year-1 interest is the contractual rate times the opening loan balance:

$$
I_1 = r K
$$

Substitute $r = 0.10$ and $K = 45{,}000$:

$$
I_1 = 0.10 \\times 45{,}000
$$

$$
I_1 = 4{,}500.00
$$

The claim is \$5,000.00. We have \$4,500.00, so the figures do not agree.

So the statement is False.`,
      `**C.** → True

After payment 3 the overview already carried the outstanding balance forward. That recovered figure is

$$
B_3 \approx 20{,}602.37
$$

The claim names \$20{,}602.37. The recovered balance and the claim agree.

So the statement is True.`,
      `**D.** → False

The overview recovered the year-3 closing balance as \\$20,602.37. Year-4 interest and principal are

$$0.10 \\times 20{,}602.37 = 2{,}060.24$$

$$11{,}870.89 - 2{,}060.24 = 9{,}810.65$$

Then $2{,}060.24 < 9{,}810.65$.

So the statement is False.`,
      `**E.** → False

Principal portions retire the original loan and nothing else, so they sum to $K=45{,}000$. The claim is \\$46,200.00.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 103,
    solution_overview: `A restaurant owner borrows \\$45,000 to renovate the dining room, repaid in $5$ equal year-end instalments at $10\\%$ per year compounding annually.

**Part 1: Setup.**

$$K = 45{,}000, \\qquad r = 0.10, \\qquad n = 5$$

**Part 2: Solve.**

The equal annual payment is

$$a = \\frac{rK}{1-(1+r)^{-n}}$$

$$a = \\frac{0.10 \\times 45{,}000}{1-(1.10)^{-5}} = \\frac{4{,}500}{0.379079}$$

$$a \\approx 11{,}870.89$$

Each year's interest is the rate times the opening balance. Principal repaid is payment less interest, and the new balance is the old balance less principal.

Year 1: interest \\$4,500.00, principal \\$7,370.89, balance \\$37,629.11.

Year 2: interest \\$3,762.91, principal \\$8,107.98, balance \\$29,521.14.

Year 3: interest \\$2,952.11, principal \\$8,918.77, balance \\$20,602.37.`,
  },
  {
    id: `math-11-104`,
    case_id: `MATH 11.104`,
    title: `Franchise Buy-In Paid as an Annuity Due`,
    subsection: `3.6`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
6.537048
$$

The computed value is approximately 6.537048, which matches the claim.

So the statement is True.`,
      `**B.** → True

The first payment is immediate and the remaining nine form an ordinary annuity, so:

$$
K = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]
$$

Substitute the stem numbers:

$$
a = \\frac{150{,}000}{6.537048} \\approx 22{,}946.14
$$

The computed value is approximately \$22,946.14, which matches the claim.

So the statement is True.`,
      `**C.** → False

End-of-year timing is an ordinary annuity. The overview recovered $a_{\\mathrm{ordinary}} \\approx 25{,}470.21$. Then

$$25{,}470.21 > 22{,}946.14$$

The ordinary payment is higher, not lower.

So the statement is False.`,
      `**D.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $a_{\\mathrm{ordinary}} \\approx 25{,}470.21$ and $a \\approx 22{,}946.14$ as inputs for this claim:

Their difference is

$$25{,}470.21 - 22{,}946.14 \\approx 2{,}524.08$$

The claim is \\$2,524.08

The computed figure and the claim agree.

So the statement is True.`,
      `**E.** → False

Total cash outlay is ten copies of the recovered due payment:

$$22{,}946.14 \\times 10 \\approx 229{,}461.39$$

Compare the computed value with the claim (\\$220,000.00). We have about \\$229,461.39. The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 104,
    solution_overview: `A new franchisee agrees to pay \\$150,000 for the rights to open a location, structured as $10$ equal annual payments, first payment due immediately, at $11\\%$ per year.

**Part 1: Setup.**

$$K = 150{,}000, \\qquad r = 0.11, \\qquad n = 10$$

**Part 2: Solve.**

The first payment is immediate and the remaining nine form an ordinary annuity, so

$$K = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]$$

The combined present-value factor is

$$\\frac{K}{a} = 1 + \\frac{1}{0.11}\\bigl[1-(1.11)^{-9}\\bigr] = 1 + 5.537048$$

$$\\frac{K}{a} \\approx 6.537048$$

$$a = \\frac{150{,}000}{6.537048} \\approx 22{,}946.14$$

For the ordinary-annuity comparison,

$$a_{\\mathrm{ordinary}} = \\frac{rK}{1-(1+r)^{-n}}$$

$$a_{\\mathrm{ordinary}} = \\frac{0.11 \\times 150{,}000}{1-(1.11)^{-10}} = \\frac{16{,}500}{0.647848}$$

$$a_{\\mathrm{ordinary}} \\approx 25{,}470.21$$`,
  },
  {
    id: `math-11-105`,
    case_id: `MATH 11.105`,
    title: `Fixed Annual Payment on a Working-Capital Loan`,
    subsection: `3.6`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
4.9663
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

The first four payments are the committed \\$10,000 each:

$$4 \\times 10{,}000 = 40{,}000$$

Compare the computed value with the claim (that same total). The two sides agree.

So the statement is True.`,
      `**C.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered the fifth and final payment as \\$9,682.53. The claim is that same figure.

So the statement is True.`,
      `**D.** → True

Total paid is four full payments plus the recovered final instalment:

$$40{,}000 + 9{,}682.53 = 49{,}682.53$$

Compare the computed value with the claim (\\$49,682.53). The two sides agree.

So the statement is True.`,
      `**E.** → True

Total interest is total paid minus principal:

$$49{,}682.53 - 35{,}000 = 14{,}682.53$$

Then $14{,}682.53 < 35{,}000$.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 105,
    solution_overview: `A landscaping company borrows \\$35,000 at $13\\%$ annual interest and repays exactly \\$10,000 at the end of each year until the debt is retired, with a smaller final payment to settle whatever remains.

**Part 1: Setup.**

$$K = 35{,}000, \\qquad r = 0.13, \\qquad a = 10{,}000$$

**Part 2: Solve.**

The smallest whole number of payments satisfies

$$n \\ge \\frac{\\ln a - \\ln(a-rK)}{\\ln(1+r)}$$

$$\\frac{\\ln(10{,}000)-\\ln(10{,}000-0.13 \\times 35{,}000)}{\\ln(1.13)} = \\frac{\\ln(10{,}000)-\\ln(5{,}450)}{\\ln(1.13)} \\approx 4.9663$$

so $n=5$. After four years the loan's future value is $35{,}000(1.13)^{4} \\approx 57{,}066.58$, and the four fixed payments are worth

$$\\frac{10{,}000}{0.13}\\bigl[(1.13)^{4}-1\\bigr] \\approx 48{,}497.97$$

The remaining debt at year 4 is $57{,}066.58-48{,}497.97=8{,}568.61$. Rolling that balance forward one year gives the final payment

$$8{,}568.61 \\times 1.13 = 9{,}682.53$$`,
  },
  {
    id: `math-11-106`,
    case_id: `MATH 11.106`,
    title: `Comparing Cash vs. Instalment Purchase of a Delivery Fleet`,
    subsection: `3.6`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{B}} = 100{,}000 + \\frac{100{,}000}{0.10}\\bigl[1-(1.10)^{-6}\\bigr] \\approx 535{,}526.07
$$

The computed value is approximately \$535,526.07, which matches the claim.

So the statement is True.`,
      `**B.** → True

The overview recovered $PV_{\\mathrm{B}} \\approx 535{,}526.07$ at $10\\%$. Option A is \\$500,000 today. Then

$$535{,}526.07 > 500{,}000$$

Option A is cheaper at $10\\%$.

So the statement is True.`,
      `**C.** → False

Read the present value recovered in the overview:

$$
14\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**D.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered $PV_{\\mathrm{B}} \\approx 488{,}866.75$ at $14\\%$. Then

$$488{,}866.75 < 500{,}000$$

Option B is cheaper at $14\\%$.

So the statement is True.`,
      `**E.** → False

At $10\\%$ Option B costs about \\$535,526, above cash. At $14\\%$ it costs about \\$488,867, below cash. The cheaper choice depends on the rate.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 106,
    solution_overview: `A logistics company is choosing between Option A, pay \\$500,000 cash today, and Option B, pay \\$100,000 per year for $7$ years with the first payment due immediately. Compare present values at $10\\%$ and at $14\\%$.

**Part 1: Setup.**

$$a = 100{,}000, \\qquad n = 7$$

The two test rates are $r=0.10$ and $r=0.14$. Option A is \\$500,000 today.

**Part 2: Solve.**

Option B is an annuity due:

$$PV_{\\mathrm{B}} = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]$$

At $10\\%$,

$$PV_{\\mathrm{B}} = 100{,}000 + \\frac{100{,}000}{0.10}\\bigl[1-(1.10)^{-6}\\bigr] \\approx 535{,}526.07$$

At $14\\%$,

$$PV_{\\mathrm{B}} = 100{,}000 + \\frac{100{,}000}{0.14}\\bigl[1-(1.14)^{-6}\\bigr] \\approx 488{,}866.75$$`,
  },
  {
    id: `math-11-107`,
    case_id: `MATH 11.107`,
    title: `Quarterly Savings Deposits with Annual Compounding`,
    subsection: `3.6`,
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
      `**A.** → False

The year-end equivalent folds simple interest on the four quarterly deposits into one year-end amount:

$$
a = D(4 + 1.5 r)
$$

Substitute $D = 250$ and $r = 0.08$:

$$
a = 250(4 + 1.5 \\times 0.08)
$$

$$
a = 250 \\times 4.12 = 1{,}030
$$

The claim is \$1,100.00. We have \$1,030, so the figures do not agree.

So the statement is False.`,
      `**B.** → False

Once the year-end equivalent $a = 1{,}030$ is known, its four-year future value is the ordinary annuity accumulation:

$$
F_4 = \\frac{a}{r}\bigl[(1+r)^{4}-1\bigr]
$$

Substitute $a = 1{,}030$ and $r = 0.08$:

$$
F_4 = \\frac{1{,}030}{0.08}\bigl[(1.08)^{4}-1\bigr]
$$

$$
F_4 \approx 4{,}641.30
$$

The claim is about \$4,700.00. We have about \$4,641.30, so the figures do not agree.

So the statement is False.`,
      `**C.** → False

Three years of the recovered \\$1,030 equivalent at $8\\%$ is

$$F_3 = \\frac{1{,}030}{0.08}\\bigl[(1.08)^{3}-1\\bigr] \\approx 3{,}343.79$$

Compare the computed value with the claim (\\$3,500.00). We have about \\$3,343.79. The two sides do not agree.

So the statement is False.`,
      `**D.** → True

Treating the four deposits as a flat \$1,000 year-end deposit replaces $a$ by $1{,}000$ in the same annuity formula:

$$
F_4^{\mathrm{simp}} = \\frac{1{,}000}{0.08}\bigl[(1.08)^{4}-1\bigr]
$$

$$
F_4^{\mathrm{simp}} \approx 4{,}506.11
$$

The claim is about \$4,506.11. The simplified balance and the claim agree.

So the statement is True.`,
      `**E.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $F_4 \\approx 4{,}641.30$ and $F_4^{\\mathrm{simp}} \\approx 4{,}506.11$ as inputs for this claim:

Their difference is

$$4{,}641.30 - 4{,}506.11 \\approx 135.18$$

The claim is \\$200.00. We have about \\$135.18.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 107,
    solution_overview: `At the end of each quarter a small business owner deposits \\$250 into an account that pays $8\\%$ once per year. The bank applies simple interest to each deposit for the fraction of the year it sits before the year-end credit.

**Part 1: Setup.**

$$D = 250, \\qquad r = 0.08$$

**Part 2: Solve.**

The year-end equivalent of the four quarterly deposits is

$$a = D(4+1.5r)$$

$$a = 250(4+1.5 \\times 0.08) = 250(4.12) = 1{,}030$$

Once that equivalent is known, its future value after $N$ years is

$$F_N = \\frac{a}{r}\\bigl[(1+r)^{N}-1\\bigr]$$

$$F_4 = \\frac{1{,}030}{0.08}\\bigl[(1.08)^{4}-1\\bigr] \\approx 4{,}641.30$$

If the four deposits are treated as a flat \\$1,000 at year-end instead,

$$F_4^{\\mathrm{simp}} = \\frac{1{,}000}{0.08}\\bigl[(1.08)^{4}-1\\bigr] \\approx 4{,}506.11$$`,
  },
  {
    id: `math-11-108`,
    case_id: `MATH 11.108`,
    title: `Home Mortgage: Outstanding Balance Partway Through the Term`,
    subsection: `3.6`,
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
      `**A.** → True

The level monthly payment is:

$$
a = \\frac{rK}{1-(1+r)^{-n}}
$$

Substitute the stem numbers:

$$
a = \\frac{0.005 \\times 200{,}000}{1-(1.005)^{-240}} = \\frac{1{,}000}{1-(1.005)^{-240}} \\approx 1{,}432.86
$$

The computed value is approximately \$1,432.86, which matches the claim.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
B_{60} = \\frac{1{,}432.86}{0.005}\\bigl[1-(1.005)^{-180}\\bigr] \\approx 169{,}799.20
$$

The computed value is approximately \$169,799.20, which matches the claim.

So the statement is True.`,
      `**C.** → False

The overview recovered $B_{60} \\approx 169{,}799.20$. Principal repaid after five years is

$$200{,}000 - 169{,}799.20 = 30{,}200.80$$

$$\\frac{30{,}200.80}{200{,}000} = 0.1510 = 15.10\\%$$

The claim needs more than $25\\%$. We have about $15.10\\%$.

So the statement is False.`,
      `**D.** → True

The overview recovered $B_{60} \\approx 169{,}799.20$. Principal repaid in five years is

$$200{,}000 - 169{,}799.20 = 30{,}200.80$$

Sixty payments total $60 \\times 1{,}432.86 \\approx 85{,}971.60$, so interest is

$$85{,}971.60 - 30{,}200.80 \\approx 55{,}770.80$$

which rounds to the claimed \\$55,770.92.

So the statement is True.`,
      `**E.** → False

Lifetime interest is total paid minus principal:

$$240 \\times 1{,}432.86 - 200{,}000 \\approx 143{,}886.91$$

Compare the computed value with the claim (\\$120,000.00). We have about \\$143,886.91. The two sides do not agree.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `A family takes out a \\$200,000 home mortgage at a nominal annual rate of $6\\%$, compounding monthly, repaid with equal end-of-month payments over $20$ years.

**Part 1: Setup.**

$$K = 200{,}000, \\qquad n = 20 \\times 12 = 240, \\qquad m = 5 \\times 12 = 60$$

**Part 2: Solve.**

The monthly rate is

$$r = \\frac{0.06}{12} = 0.005$$

The level monthly payment is

$$a = \\frac{rK}{1-(1+r)^{-n}}$$

$$a = \\frac{0.005 \\times 200{,}000}{1-(1.005)^{-240}} = \\frac{1{,}000}{1-(1.005)^{-240}} \\approx 1{,}432.86$$

After $m$ payments the outstanding balance is the present value of the remaining $n-m$ payments:

$$B_m = \\frac{a}{r}\\bigl[1-(1+r)^{-(n-m)}\\bigr]$$

$$B_{60} = \\frac{1{,}432.86}{0.005}\\bigl[1-(1.005)^{-180}\\bigr] \\approx 169{,}799.20$$`,
  },
  {
    id: `math-11-109`,
    case_id: `MATH 11.109`,
    title: `Fixed Repayment Schedule on a Large Equipment Loan`,
    subsection: `3.6`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
8.508
$$

The computed figure matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered the ninth and final payment as about \\$13,100.16. The claim is that same figure.

So the statement is True.`,
      `**C.** → False

Eight full payments plus the recovered final instalment total

$$8 \\times 25{,}000 + 13{,}100.16 = 213{,}100.16$$

Interest is that total minus principal:

$$213{,}100.16 - 120{,}000 = 93{,}100.16$$

The claim is \\$105,000.00. We have about \\$93,100.16.

So the statement is False.`,
      `**D.** → False

Total paid is eight full payments plus the recovered final instalment:

$$200{,}000 + 13{,}100.16 = 213{,}100.16$$

Compare the computed value with the claim (\\$210,000.00). We have about \\$213,100.16. The two sides do not agree.

So the statement is False.`,
      `**E.** → True

Nine full payments would be \\$225,000. Against the recovered total \\$213,100.16,

$$225{,}000 - 213{,}100.16 = 11{,}899.84$$

Then $11{,}899.84 > 10{,}000$.

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 109,
    solution_overview: `A manufacturing company borrows \\$120,000 at $14\\%$ annual interest and repays a fixed \\$25,000 at the end of each year until the loan is retired, with a smaller final payment to clear the residual.

**Part 1: Setup.**

$$K = 120{,}000, \\qquad a = 25{,}000, \\qquad r = 0.14$$

**Part 2: Solve.**

The smallest whole number of payments satisfies

$$n \\ge \\frac{\\ln a - \\ln(a-rK)}{\\ln(1+r)}$$

$$n \\ge \\frac{\\ln(25{,}000)-\\ln(25{,}000-0.14 \\times 120{,}000)}{\\ln(1.14)} \\approx 8.508$$

so $n=9$. After eight years the accumulated loan is $120{,}000(1.14)^{8} \\approx 342{,}310.37$, and the eight full payments are worth

$$\\frac{25{,}000}{0.14}\\bigl[(1.14)^{8}-1\\bigr] \\approx 330{,}819.00$$

The residual $342{,}310.37-330{,}819.00 \\approx 11{,}491.37$ grows one more year to the final payment

$$11{,}491.37 \\times 1.14 \\approx 13{,}100.16$$`,
  },
  {
    id: `math-11-110`,
    case_id: `MATH 11.110`,
    title: `Capstone: Equipment Loan Paid as an Annuity Due, Plus a Separate Reserve Fund`,
    subsection: `3.6`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

$$
K = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]
$$

Substitute the stem numbers:

$$
a \\approx 16{,}176.12
$$

The computed value is approximately \$16,176.12, which matches the claim.

So the statement is True.`,
      `**B.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered the interest portion of the second loan payment as about \\$8,858.87. The claim is that same figure.

So the statement is True.`,
      `**C.** → False

After the second payment, principal of $16{,}176.12-8{,}858.87=7{,}317.25$ leaves balance $73{,}823.88-7{,}317.25=66{,}506.63$. Interest before the third payment is

$$0.12 \\times 66{,}506.63 \\approx 7{,}980.80$$

Then $7{,}980.80 < 8{,}858.87$.

So the statement is False.`,
      `**D.** → True

Read the figure already produced by the shared solve, then compare it with the claim.

The overview recovered the reserve's year-end equivalent and three-year balance:

$$1{,}240.50$$

$$4{,}066.48$$

Both claimed figures match those recovered values.

So the statement is True.`,
      `**E.** → False

Three due loan payments total

$$3 \\times 16{,}176.12 = 48{,}528.36$$

The reserve after three years is about \\$4,066.48. Then $48{,}528.36 > 4{,}066.48$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 110,
    solution_overview: `A manufacturing company borrows \\$90,000 to be repaid in $8$ equal annual instalments with the first payment due immediately, at $12\\%$ per year. Independently, it deposits \\$300 at the end of each quarter into a reserve that pays $9\\%$ annual interest, credited once per year.

**Part 1: Setup.**

Loan: $K = 90{,}000$, $r = 0.12$, $n = 8$, first instalment immediate.

Reserve: $D = 300$, $R = 0.09$, $N = 3$.

**Part 2: Solve.**

The loan is an annuity due:

$$K = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]$$

$$90{,}000 = a + \\frac{a}{0.12}\\bigl[1-(1.12)^{-7}\\bigr]$$

$$a \\approx 16{,}176.12$$

After the immediate first payment the balance is $90{,}000-16{,}176.12=73{,}823.88$, so interest before the second payment is

$$0.12 \\times 73{,}823.88 \\approx 8{,}858.87$$

For the reserve, the year-end equivalent and three-year pile are

$$c = D(4+1.5R) = 300(4+1.5 \\times 0.09) = 1{,}240.50$$

$$F_N = \\frac{c}{R}\\bigl[(1+R)^{N}-1\\bigr]$$

$$F_3 = \\frac{1{,}240.50}{0.09}\\bigl[(1.09)^{3}-1\\bigr] \\approx 4{,}066.48$$`,
  },
  {
    id: `math-11-111`,
    case_id: `MATH 11.111`,
    title: `Capstone: Comparing Three Payment Schedules for a Building Site`,
    subsection: `3.6`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{II}} = 95{,}000 + \\frac{95{,}000}{0.09}\\bigl[1-(1.09)^{-6}\\bigr] \\approx 521{,}162.27
$$

The computed value is approximately \$521,162.27, which matches the claim.

So the statement is True.`,
      `**B.** → False

From the overview’s recovered present value:

$$
9\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $PV_{\\mathrm{II}} \\approx 521{,}162$ and $PV_{\\mathrm{III}} \\approx 535{,}059$ at $9\\%$ as inputs for this claim:

Schedule I is \\$500,000. Then

$$500{,}000 < 521{,}162 < 535{,}059$$

Schedule I is cheapest at $9\\%$.

The computed figure matches the claim.

So the statement is True.`,
      `**D.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{II}} = 95{,}000 + \\frac{95{,}000}{0.13}\\bigl[1-(1.13)^{-6}\\bigr] \\approx 474{,}767.23
$$

The computed value is approximately \$474,767.23, which matches the claim.

So the statement is True.`,
      `**E.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $PV_{\\mathrm{II}} \\approx 474{,}767$ and $PV_{\\mathrm{III}} \\approx 475{,}575$ at $13\\%$ as inputs for this claim:

Then

$$474{,}767 < 475{,}575 < 500{,}000$$

Schedule II is cheapest at $13\\%$, not III.

The computed figure does not match the claim.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 111,
    solution_overview: `A construction firm is choosing among three payment schedules for a building site. Schedule I: \\$500,000 cash immediately. Schedule II: \\$95,000 per year for $7$ years, first instalment immediate. Schedule III: \\$150,000 cash immediately plus \\$60,000 per year for $10$ years, first of these instalments one year later. Compare present values at $9\\%$ and at $13\\%$.

**Part 1: Setup.**

$$a_{\\mathrm{II}} = 95{,}000, \\qquad n_{\\mathrm{II}} = 7$$

$$a_{\\mathrm{III}} = 60{,}000, \\qquad n_{\\mathrm{III}} = 10$$

The rates are $r=0.09$ and $r=0.13$. Schedule I is \\$500,000 today.

**Part 2: Solve.**

Schedule II is an annuity due:

$$PV_{\\mathrm{II}} = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]$$

Schedule III is cash plus an ordinary annuity:

$$PV_{\\mathrm{III}} = 150{,}000 + \\frac{a}{r}\\bigl[1-(1+r)^{-n}\\bigr]$$

At $9\\%$,

$$PV_{\\mathrm{II}} = 95{,}000 + \\frac{95{,}000}{0.09}\\bigl[1-(1.09)^{-6}\\bigr] \\approx 521{,}162.27$$

$$PV_{\\mathrm{III}} = 150{,}000 + \\frac{60{,}000}{0.09}\\bigl[1-(1.09)^{-10}\\bigr] \\approx 535{,}059$$

At $13\\%$,

$$PV_{\\mathrm{II}} = 95{,}000 + \\frac{95{,}000}{0.13}\\bigl[1-(1.13)^{-6}\\bigr] \\approx 474{,}767.23$$

$$PV_{\\mathrm{III}} = 150{,}000 + \\frac{60{,}000}{0.13}\\bigl[1-(1.13)^{-10}\\bigr] \\approx 475{,}575$$`,
  },
  {
    id: `math-11-112`,
    case_id: `MATH 11.112`,
    title: `Capstone: Comparing Three Payment Schedules for a Hospital Imaging Center`,
    subsection: `3.6`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{II}} = 140{,}000 + \\frac{140{,}000}{0.08}\\bigl[1-(1.08)^{-8}\\bigr] \\approx 944{,}529.45
$$

The computed value is approximately \$944,529.45, which matches the claim.

So the statement is True.`,
      `**B.** → True

Discount the future cash amount with the recovered factor.

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{III}} = 300{,}000 + \\frac{80{,}000}{0.08}\\bigl[1-(1.08)^{-11}\\bigr] \\approx 871{,}117.14
$$

The computed value is approximately \$871,117.14, which matches the claim.

So the statement is True.`,
      `**C.** → True

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $PV_{\\mathrm{II}} \\approx 944{,}529$ and $PV_{\\mathrm{III}} \\approx 871{,}117$ at $8\\%$ as inputs for this claim:

Schedule I is \\$850,000. Then

$$850{,}000 < 871{,}117 < 944{,}529$$

Schedule I is cheapest at $8\\%$.

The computed figure matches the claim.

So the statement is True.`,
      `**D.** → True

Write the present-value formula before substituting.

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{III}} = 300{,}000 + \\frac{80{,}000}{0.12}\\bigl[1-(1.12)^{-11}\\bigr] \\approx 775{,}015.93
$$

The computed value is approximately \$775,015.93, which matches the claim.

So the statement is True.`,
      `**E.** → False

Apply the financial identity that produces the quantity named in the claim:

Using the recovered solution values $PV_{\\mathrm{III}} \\approx 775{,}016$ and $PV_{\\mathrm{II}} \\approx 835{,}470$ at $12\\%$ as inputs for this claim:

Then

$$775{,}016 < 835{,}470 < 850{,}000$$

Schedule III is cheapest at $12\\%$, not II.

The computed figure does not match the claim.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 112,
    solution_overview: `A hospital system is choosing among three payment schedules for an imaging center. Schedule I: \\$850,000 cash immediately. Schedule II: \\$140,000 per year for $9$ years, first instalment immediate. Schedule III: \\$300,000 cash immediately plus \\$80,000 per year for $11$ years, first of these instalments one year later. Compare present values at $8\\%$ and at $12\\%$.

**Part 1: Setup.**

$$a_{\\mathrm{II}} = 140{,}000, \\qquad n_{\\mathrm{II}} = 9$$

$$a_{\\mathrm{III}} = 80{,}000, \\qquad n_{\\mathrm{III}} = 11$$

The rates are $r=0.08$ and $r=0.12$. Schedule I is \\$850,000 today.

**Part 2: Solve.**

Schedule II is an annuity due:

$$PV_{\\mathrm{II}} = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]$$

Schedule III is cash plus an ordinary annuity:

$$PV_{\\mathrm{III}} = 300{,}000 + \\frac{a}{r}\\bigl[1-(1+r)^{-n}\\bigr]$$

At $8\\%$,

$$PV_{\\mathrm{II}} = 140{,}000 + \\frac{140{,}000}{0.08}\\bigl[1-(1.08)^{-8}\\bigr] \\approx 944{,}529.45$$

$$PV_{\\mathrm{III}} = 300{,}000 + \\frac{80{,}000}{0.08}\\bigl[1-(1.08)^{-11}\\bigr] \\approx 871{,}117.14$$

At $12\\%$,

$$PV_{\\mathrm{II}} = 140{,}000 + \\frac{140{,}000}{0.12}\\bigl[1-(1.12)^{-8}\\bigr] \\approx 835{,}470$$

$$PV_{\\mathrm{III}} = 300{,}000 + \\frac{80{,}000}{0.12}\\bigl[1-(1.12)^{-11}\\bigr] \\approx 775{,}015.93$$`,
  },
  {
    id: `math-11-113`,
    case_id: `MATH 11.113`,
    title: `Capstone: Comparing Three Payment Schedules for a Cargo Vessel`,
    subsection: `3.6`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
PV_{\\mathrm{II}} = 340{,}000 + \\frac{340{,}000}{0.075}\\bigl[1-(1.075)^{-9}\\bigr] \\approx 2{,}508{,}821.59
$$

The computed value is approximately \$2,508,821.59, which matches the claim.

So the statement is True.`,
      `**B.** → False

The overview’s present-value line is

$$
7.5\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → True

The overview recovered $PV_{\\mathrm{II}} \\approx 2{,}508{,}822$ at $7.5\\%$. Schedule I is \\$2,400,000. Then

$$2{,}400{,}000 < 2{,}508{,}822$$

Schedule I is cheaper than Schedule II at $7.5\\%$.

So the statement is True.`,
      `**D.** → False

Read the present value recovered in the overview:

$$
11.5\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**E.** → False

The overview recovered $PV_{\\mathrm{II}} \\approx 2{,}186{,}562$ at $11.5\\%$. Then

$$2{,}186{,}562 < 2{,}400{,}000$$

Schedule I is no longer cheaper than Schedule II.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 113,
    solution_overview: `A shipping company is choosing among three payment schedules for a cargo vessel. Schedule I: \\$2,400,000 cash immediately. Schedule II: \\$340,000 per year for $10$ years, first instalment immediate. Schedule III: \\$600,000 cash immediately plus \\$250,000 per year for $9$ years, first of these instalments one year later. Compare Schedule I versus Schedule II at $7.5\\%$ and at $11.5\\%$.

**Part 1: Setup.**

$$a_{\\mathrm{II}} = 340{,}000, \\qquad n_{\\mathrm{II}} = 10$$

$$a_{\\mathrm{III}} = 250{,}000, \\qquad n_{\\mathrm{III}} = 9$$

The rates are $r=0.075$ and $r=0.115$. Schedule I is \\$2,400,000 today.

**Part 2: Solve.**

Schedule II is an annuity due:

$$PV_{\\mathrm{II}} = a + \\frac{a}{r}\\bigl[1-(1+r)^{-(n-1)}\\bigr]$$

Schedule III is cash plus an ordinary annuity:

$$PV_{\\mathrm{III}} = 600{,}000 + \\frac{a}{r}\\bigl[1-(1+r)^{-n}\\bigr]$$

At $7.5\\%$,

$$PV_{\\mathrm{II}} = 340{,}000 + \\frac{340{,}000}{0.075}\\bigl[1-(1.075)^{-9}\\bigr] \\approx 2{,}508{,}821.59$$

$$PV_{\\mathrm{III}} = 600{,}000 + \\frac{250{,}000}{0.075}\\bigl[1-(1.075)^{-9}\\bigr] \\approx 2{,}194{,}722$$

At $11.5\\%$,

$$PV_{\\mathrm{II}} = 340{,}000 + \\frac{340{,}000}{0.115}\\bigl[1-(1.115)^{-9}\\bigr] \\approx 2{,}186{,}562$$`,
  },
  {
    id: `math-11-114`,
    case_id: `MATH 11.114`,
    title: `A small bakery invests \\$8,000 in a new commercial oven`,
    subsection: `3.7`,
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
      `**A.** → True

For a one-year project with outlay $a$ and return $b$, the internal rate makes net present value zero:

$$
r = \\frac{b}{a} - 1
$$

Substitute the stem numbers:

$$
r = \\frac{9{,}600}{8{,}000} - 1 = 0.20 = 20\\%
$$

The computed value is approximately 20%, which matches the claim.

So the statement is True.`,
      `**B.** → True

Net present value is the discounted cash inflow total minus the initial outlay. The decision rule accepts the project when that difference is positive. Fifteen percent sits below the recovered $20\\%$ IRR. NPV at $15\\%$ is

$$A = -8{,}000 + \\frac{9{,}600}{1.15} = -8{,}000 + 8{,}347.83 = 347.83$$

Then $347.83 > 0$.

So the statement is True.`,
      `**C.** → False

Twenty-five percent sits above the recovered $20\\%$ IRR. NPV at $25\\%$ is

$$A = -8{,}000 + \\frac{9{,}600}{1.25} = -8{,}000 + 7{,}680 = -320$$

Then $-320 < 0$. The claim needs a positive NPV.

So the statement is False.`,
      `**D.** → True

With payoff \\$10,000 on the same \\$8,000 outlay, the one-year rate is

$$r = \\frac{10{,}000}{8{,}000} - 1 = 0.25 = 25\\%$$

Then $25\\% > 24\\%$.

So the statement is True.`,
      `**E.** → True

One negative outlay followed by one positive return is a cash-flow polynomial $-8{,}000 + 9{,}600 s$ with a single sign change, hence a unique $r > -1$. The recovered $20\\%$ is that unique admissible root.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 114,
    solution_overview: `A small bakery invests \\$8,000 in a new commercial oven. The oven is expected to generate a single net return of \\$9,600, paid in full at the end of one year.

**Part 1: Setup.**

$$a_0 = -8{,}000, \\qquad a_1 = 9{,}600, \\qquad n = 1$$

**Part 2: Solve.**

For a one-year project with outlay $a$ and return $b$, the internal rate makes net present value zero:

$$-a + b(1+r)^{-1} = 0$$

$$r = \\frac{b}{a} - 1$$

$$r = \\frac{9{,}600}{8{,}000} - 1 = 0.20 = 20\\%$$

Net present value at a test rate $r$ is

$$A = a_0 + \\frac{a_1}{1+r}$$`,
  },
  {
    id: `math-11-115`,
    case_id: `MATH 11.115`,
    title: `A logistics company spends \\$12,000 upgrading a delivery vehicle`,
    subsection: `3.7`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
10.92\\%
$$

The computed value is approximately 10.92%, which matches the claim.

So the statement is True.`,
      `**B.** → True

Eight percent sits below the recovered $10.92\\%$ IRR. NPV at $8\\%$ is

$$-12{,}000 + \\frac{7{,}000}{1.08} + \\frac{7{,}000}{1.1664}$$

$$= -12{,}000 + 6{,}481.48 + 6{,}001.37 = 482.85$$

Then $482.85 > 0$.

So the statement is True.`,
      `**C.** → False

Twelve percent sits above the recovered $10.92\\%$ IRR. NPV at $12\\%$ is

$$-12{,}000 + \\frac{7{,}000}{1.12} + \\frac{7{,}000}{1.2544}$$

$$= -12{,}000 + 6{,}250.00 + 5{,}580.36 = -169.64$$

Then $-169.64 < 0$. The claim needs a positive NPV.

So the statement is False.`,
      `**D.** → True

With Year 2 raised to \\$8,000, the new quadratic is $8s^{2} + 7s - 12 = 0$:

$$s = \\frac{-7 + \\sqrt{433}}{16} \\approx 0.8630$$

$$r = \\frac{1}{0.8630} - 1 \\approx 0.1587 \\approx 15.87\\%$$

Then $15.87\\% > 13\\%$.

So the statement is True.`,
      `**E.** → False

Doubling both inflows while holding the outlay fixed gives $7s^{2} + 7s - 6 = 0$:

$$s = \\frac{-7 + \\sqrt{217}}{14} \\approx 0.5522$$

$$r = \\frac{1}{0.5522} - 1 \\approx 0.811 \\approx 81\\%$$

The claim is $21.84\\%$, twice the original rate. We have about $81\\%$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 115,
    solution_overview: `A logistics company spends \\$12,000 upgrading a delivery vehicle. The upgrade is expected to generate net returns of \\$7,000 at the end of Year 1 and \\$7,000 at the end of Year 2.

**Part 1: Setup.**

$$a_0 = -12{,}000, \\qquad a_1 = 7{,}000, \\qquad a_2 = 7{,}000, \\qquad n = 2$$

**Part 2: Solve.**

The internal rate makes the discounted cash-flow sum zero:

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} = 0$$

With $s = (1+r)^{-1}$,

$$-12{,}000 + 7{,}000s + 7{,}000s^{2} = 0$$

$$7s^{2} + 7s - 12 = 0$$

$$s = \\frac{-7 + \\sqrt{385}}{14} \\approx 0.90153$$

$$r = \\frac{1}{0.90153} - 1 \\approx 0.10922 \\approx 10.92\\%$$`,
  },
  {
    id: `math-11-116`,
    case_id: `MATH 11.116`,
    title: `A boutique invests \\$20,000 in inventory and point-of-sale equipment`,
    subsection: `3.7`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
11.98\\%
$$

The computed value is approximately 11.98%, which matches the claim.

So the statement is True.`,
      `**B.** → True

Ten percent sits below the recovered $11.98\\%$ IRR. NPV at $10\\%$ is

$$-20{,}000 + \\frac{9{,}000}{1.10} + \\frac{15{,}000}{1.21}$$

$$= -20{,}000 + 8{,}181.82 + 12{,}396.69 = 578.51$$

Then $578.51 > 0$.

So the statement is True.`,
      `**C.** → False

Fourteen percent sits above the recovered $11.98\\%$ IRR. NPV at $14\\%$ is

$$-20{,}000 + \\frac{9{,}000}{1.14} + \\frac{15{,}000}{1.2996}$$

$$= -20{,}000 + 7{,}894.74 + 11{,}542.01 = -563.25$$

Then $-563.25 < 0$. The claim needs a positive NPV.

So the statement is False.`,
      `**D.** → True

With Year 1 raised to \\$18,000, the new quadratic is $15s^{2} + 18s - 20 = 0$:

$$s = \\frac{-18 + \\sqrt{1{,}524}}{30} \\approx 0.7013$$

$$r = \\frac{1}{0.7013} - 1 \\approx 0.426 \\approx 42.6\\%$$

Then $42.6\\% > 30\\%$.

So the statement is True.`,
      `**E.** → True

The undiscounted sum of the three cash flows is

$$-20{,}000 + 9{,}000 + 15{,}000 = 4{,}000$$

Compare the computed value with the claim (\\$4,000). The two sides agree.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 116,
    solution_overview: `A boutique invests \\$20,000 in inventory and point-of-sale equipment. It expects net returns of \\$9,000 at the end of Year 1 and \\$15,000 at the end of Year 2.

**Part 1: Setup.**

$$a_0 = -20{,}000, \\qquad a_1 = 9{,}000, \\qquad a_2 = 15{,}000, \\qquad n = 2$$

**Part 2: Solve.**

The internal rate makes net present value zero. With $s = (1+r)^{-1}$,

$$-20{,}000 + 9{,}000s + 15{,}000s^{2} = 0$$

$$15s^{2} + 9s - 20 = 0$$

$$s = \\frac{-9 + \\sqrt{1{,}281}}{30} \\approx 0.89304$$

$$r = \\frac{1}{0.89304} - 1 \\approx 0.11978 \\approx 11.98\\%$$`,
  },
  {
    id: `math-11-117`,
    case_id: `MATH 11.117`,
    title: `A retailer is choosing between two one-year uses of surplus cash`,
    subsection: `3.7`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
15\\%
$$

The computed value is approximately 15%, which matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

From the shared elimination in the overview:

$$
12.5\\%
$$

The computed value is approximately 12.5%, which matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**C.** → False

The internal rate of return is the discount rate that drives net present value to zero:

Using the recovered solution values $r_X = 15\\%$ and $r_Y = 12.5\\%$ as inputs for this claim:

Then

$$15\\% > 12.5\\%$$

The IRR criterion prefers X, not Y.

The computed figure does not match the claim.

So the statement is False.`,
      `**D.** → False

Eleven percent sits below both recovered IRRs. NPV at $11\\%$ is

$$NPV_X = -15{,}000 + \\frac{17{,}250}{1.11} = 540.54$$

$$NPV_Y = -22{,}000 + \\frac{24{,}750}{1.11} = 297.30$$

Both are positive. The claim needs Y negative.

So the statement is False.`,
      `**E.** → False

With Y's payoff raised to \\$25,000,

$$r_Y = \\frac{25{,}000}{22{,}000} - 1 \\approx 0.1364 = 13.64\\%$$

Then $13.64\\% < 15\\%$.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 117,
    solution_overview: `A retailer is choosing between two one-year uses of surplus cash. Project X: invest \\$15,000 now, receive \\$17,250 in one year. Project Y: invest \\$22,000 now, receive \\$24,750 in one year.

**Part 1: Setup.**

$$a_X = 15{,}000, \\qquad b_X = 17{,}250$$

$$a_Y = 22{,}000, \\qquad b_Y = 24{,}750$$

**Part 2: Solve.**

For each one-year project,

$$r = \\frac{b}{a} - 1$$

$$r_X = \\frac{17{,}250}{15{,}000} - 1 = 0.15 = 15\\%$$

$$r_Y = \\frac{24{,}750}{22{,}000} - 1 = 0.125 = 12.5\\%$$`,
  },
  {
    id: `math-11-118`,
    case_id: `MATH 11.118`,
    title: `A manufacturing upgrade has an initial outlay of \\$45,000`,
    subsection: `3.7`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
A = -45{,}000 - \\frac{3{,}000}{1.08} + \\frac{28{,}000}{1.1664} + \\frac{35{,}000}{1.259712} \\approx 4{,}011.84
$$

The computed value is approximately \$4,012, which matches the claim.

So the statement is True.`,
      `**B.** → False

From the overview’s recovered present value:

$$
12\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**C.** → False

NPV is positive at $8\\%$ (about \\$4,012) and already negative at $12\\%$ (about -\\$445). The unique conventional root therefore sits between $8\\%$ and $12\\%$, not between $12\\%$ and $15\\%$.

So the statement is False.`,
      `**D.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
15\\%
$$

That computed value matches the claim.

So the statement is True.`,
      `**E.** → False

Year 1 is an installation outflow, so $a_1 = -3{,}000$. The later cash flows are not all positive.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 118,
    solution_overview: `A manufacturing upgrade has an initial outlay of \\$45,000. Installation disruption causes a net cash outflow of \\$3,000 at the end of Year 1, followed by net returns of \\$28,000 at the end of Year 2 and \\$35,000 at the end of Year 3.

**Part 1: Setup.**

$$a_0 = -45{,}000, \\qquad a_1 = -3{,}000, \\qquad a_2 = 28{,}000, \\qquad a_3 = 35{,}000$$

**Part 2: Solve.**

At a test rate $r$, net present value is

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}} + \\frac{a_3}{(1+r)^{3}}$$

At $8\\%$,

$$A = -45{,}000 - \\frac{3{,}000}{1.08} + \\frac{28{,}000}{1.1664} + \\frac{35{,}000}{1.259712} \\approx 4{,}011.84$$

At $12\\%$,

$$A = -45{,}000 - \\frac{3{,}000}{1.12} + \\frac{28{,}000}{1.2544} + \\frac{35{,}000}{1.404928} \\approx -444.83$$

At $15\\%$,

$$A = -45{,}000 - \\frac{3{,}000}{1.15} + \\frac{28{,}000}{1.3225} + \\frac{35{,}000}{1.520875} \\approx -3{,}423.60$$`,
  },
  {
    id: `math-11-119`,
    case_id: `MATH 11.119`,
    title: `A cafe chain invests \\$34,000 in a new espresso machine line`,
    subsection: `3.7`,
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
      `**A.** → False

The overview’s present-value line is

$$
10.78\\%
$$

Compare it with the amount printed in the claim. They do not match.

So the statement is False.`,
      `**B.** → False

Nine percent sits below the recovered $10.78\\%$ IRR. NPV at $9\\%$ is

$$-34{,}000 + \\frac{16{,}000}{1.09} + \\frac{24{,}000}{1.1881}$$

$$= -34{,}000 + 14{,}678.90 + 20{,}200.32 = 879.22$$

Then $879.22 > 0$. The claim needs a negative NPV.

So the statement is False.`,
      `**C.** → True

Thirteen percent sits above the recovered $10.78\\%$ IRR. NPV at $13\\%$ is

$$-34{,}000 + \\frac{16{,}000}{1.13} + \\frac{24{,}000}{1.2769}$$

$$= -34{,}000 + 14{,}159.29 + 18{,}795.52 = -1{,}045.19$$

Then $-1{,}045.19 < 0$.

So the statement is True.`,
      `**D.** → False

Cutting Year 2 to \\$20,000 gives the new quadratic $10s^{2} + 8s - 17 = 0$:

$$s = \\frac{-8 + \\sqrt{744}}{20} \\approx 0.9638$$

$$r = \\frac{1}{0.9638} - 1 \\approx 0.0376 \\approx 3.76\\%$$

Then $3.76\\% < 10.78\\%$. The new IRR is lower, not higher.

So the statement is False.`,
      `**E.** → False

A smaller outlay on the same returns raises the internal rate. With $a_0 = -30{,}000$,

$$12s^{2} + 8s - 15 = 0$$

$$s = \\frac{-8 + 28}{24} = \\frac{5}{6}, \\qquad r = 20\\%$$

Then $20\\% > 10.78\\%$. The IRR rises, it does not fall.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 119,
    solution_overview: `A cafe chain invests \\$34,000 in a new espresso machine line. Expected net returns are \\$16,000 at the end of Year 1 and \\$24,000 at the end of Year 2.

**Part 1: Setup.**

$$a_0 = -34{,}000, \\qquad a_1 = 16{,}000, \\qquad a_2 = 24{,}000, \\qquad n = 2$$

**Part 2: Solve.**

The internal rate makes the discounted cash-flow sum zero. With $s = (1+r)^{-1}$,

$$-34{,}000 + 16{,}000s + 24{,}000s^{2} = 0$$

$$12s^{2} + 8s - 17 = 0$$

$$s = \\frac{-8 + \\sqrt{880}}{24} \\approx 0.90270$$

$$r = \\frac{1}{0.90270} - 1 \\approx 0.10778 \\approx 10.78\\%$$`,
  },
  {
    id: `math-11-120`,
    case_id: `MATH 11.120`,
    title: `A logistics firm spends \\$40,000 automating a warehouse process`,
    subsection: `3.7`,
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
      `**A.** → True

Present value discounts a future payment through the accumulation factor:

$$
\mathrm{PDV} = K(1+r)^{-t}
$$

Substitute the stem numbers recovered in the overview:

$$
15\\%
$$

That computed value matches the claim.

So the statement is True.`,
      `**B.** → True

Ten percent sits below the recovered $15\\%$ IRR. NPV at $10\\%$ is

$$-40{,}000 + \\frac{22{,}000}{1.10} + \\frac{27{,}600}{1.21}$$

$$= -40{,}000 + 20{,}000.00 + 22{,}809.92 = 2{,}809.92$$

Then $2{,}809.92 > 0$.

So the statement is True.`,
      `**C.** → True

Twenty percent sits above the recovered $15\\%$ IRR. NPV at $20\\%$ is

$$-40{,}000 + \\frac{22{,}000}{1.20} + \\frac{27{,}600}{1.44}$$

$$= -40{,}000 + 18{,}333.33 + 19{,}166.67 = -2{,}500$$

Then $-2{,}500 < 0$.

So the statement is True.`,
      `**D.** → True

The undiscounted sum of the three cash flows is

$$-40{,}000 + 22{,}000 + 27{,}600 = 9{,}600$$

Compare the computed value with the claim (\\$9,600). The two sides agree.

So the statement is True.`,
      `**E.** → True

The cash-flow signs are $-,+,+$, one sign change, hence a unique $r > -1$. The recovered $15\\%$ is that unique admissible root.

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 120,
    solution_overview: `A logistics firm spends \\$40,000 automating a warehouse process. It expects net returns of \\$22,000 at the end of Year 1 and \\$27,600 at the end of Year 2.

**Part 1: Setup.**

$$a_0 = -40{,}000, \\qquad a_1 = 22{,}000, \\qquad a_2 = 27{,}600, \\qquad n = 2$$

**Part 2: Solve.**

At a test rate $r$, two-year net present value is

$$A = a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^{2}}$$

At $r=15\\%$,

$$A = -40{,}000 + \\frac{22{,}000}{1.15} + \\frac{27{,}600}{1.3225}$$

$$= -40{,}000 + 19{,}130.43 + 20{,}869.57 = 0$$

so $15\\%$ is the internal rate of return.`,
  },
  {
    id: `math-11-121`,
    case_id: `MATH 11.121`,
    title: `A property developer invests \\$65,000 renovating a rental unit`,
    subsection: `3.7`,
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
      `**A.** → True

Net present value is the discounted cash inflow total minus the initial outlay. The decision rule accepts the project when that difference is positive.

The internal rate of return is the discount rate that zeros NPV in the overview:

$$
r \\approx 10.69\\%
$$

The claim names that same figure.

Those two figures agree.

So the statement is True.`,
      `**B.** → True

NPV subtracts the upfront outlay from the discounted inflow total.

Net present value at the named rate uses the overview's cash-flow formula. At $9\\%$:

$$(1.09)^2 = 1.1881$$

$$NPV = -65{,}000 + \\frac{34{,}000}{1.09} + \\frac{42{,}000}{1.1881}$$

$$= -65{,}000 + 31{,}192.66 + 35{,}350.56$$

$$= 1{,}543.22$$

The claim needs $NPV > 0$. We have $1{,}543.22 > 0$.

So the statement is True.`,
      `**C.** → False

Form NPV as discounted inflows minus the initial cost.

Net present value at the named rate uses the overview's cash-flow formula. At $12\\%$:

$$(1.12)^2 = 1.2544$$

$$NPV = -65{,}000 + \\frac{34{,}000}{1.12} + \\frac{42{,}000}{1.2544}$$

$$= -65{,}000 + 30{,}357.14 + 33{,}482.14$$

$$= -1{,}160.72$$

The claim needs $NPV > 0$. We have $-1{,}160.72 < 0$.

So the statement is False.`,
      `**D.** → True

Doubling the inflows and holding the outlay fixed is a new cash-flow list. The internal-rate equation on that list is

$$-65{,}000 + \\frac{68{,}000}{1+r} + \\frac{84{,}000}{(1+r)^2} = 0$$

With $s=(1+r)^{-1}$, divide by $1{,}000$:

$$84s^2 + 68s - 65 = 0$$

The discriminant is

$$68^2 + 4 \\cdot 84 \\cdot 65 = 4{,}624 + 21{,}840 = 26{,}464$$

$$\\sqrt{26{,}464} \\approx 162.678$$

$$s = \\frac{-68 + 162.678}{168} \\approx 0.5636$$

$$r = \\frac{1}{0.5636} - 1 \\approx 0.774 \\approx 77.4\\%$$

The overview recovered the original rate $10.69\\%$. Twice that rate is

$$2 \\times 10.69\\% = 21.38\\%$$

Since $77.4\\% > 21.38\\%$, the new internal rate more than doubles.

So the statement is True.`,
      `**E.** → False

A smaller outlay on the same inflows is a new cash-flow list. After substituting $s=(1+r)^{-1}$ and dividing by $1{,}000$:

$$42s^2 + 34s - 60 = 0$$

The discriminant is

$$34^2 + 4 \\cdot 42 \\cdot 60 = 1{,}156 + 10{,}080 = 11{,}236$$

$$\\sqrt{11{,}236} = 106$$

$$s = \\frac{-34 + 106}{84} = \\frac{72}{84} = \\frac{6}{7}$$

$$r = \\frac{7}{6} - 1 = \\frac{1}{6} \\approx 16.67\\%$$

The overview recovered the original rate $10.69\\%$. Since $16.67\\% > 10.69\\%$, the reduced-outlay rate is higher, not lower.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 121,
    solution_overview: `A property developer invests \\$65,000 renovating a rental unit. Expected net rental income after expenses is \\$34,000 at the end of Year 1 and \\$42,000 at the end of Year 2.

**Part 1: Setup.**

The cash flows are

$$a_0 = -65{,}000, \\qquad a_1 = 34{,}000, \\qquad a_2 = 42{,}000$$

Net present value at a test rate $i$ is

$$NPV(i) = a_0 + \\frac{a_1}{1+i} + \\frac{a_2}{(1+i)^2}$$

The internal rate of return is the root of $NPV(r)=0$. Substitute $s=(1+r)^{-1}$:

$$42{,}000 s^2 + 34{,}000 s - 65{,}000 = 0$$

**Part 2: Solve.**

Divide by $1{,}000$:

$$42s^2 + 34s - 65 = 0$$

The discriminant is

$$34^2 + 4 \\cdot 42 \\cdot 65 = 1{,}156 + 10{,}920 = 12{,}076$$

$$\\sqrt{12{,}076} \\approx 109.891$$

The admissible root is

$$s = \\frac{-34 + 109.891}{84} \\approx 0.90346$$

$$r = \\frac{1}{0.90346} - 1 \\approx 0.10685 \\approx 10.69\\%$$`,
  },
  {
    id: `math-11-122`,
    case_id: `MATH 11.122`,
    title: `Perpetuity Versus a Two-Year Stub: Comparing Internal Rates of Return`,
    subsection: `3.7`,
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
      `**A.** → True

Option 1 is a level perpetuity with annual payment $a=6{,}000$. Zero NPV gives:

$$
a_0 + \\frac{a}{r} = 0
$$

Substitute the stem numbers:

$$
r = \\frac{6{,}000}{50{,}000} = 0.12 = 12\\%
$$

The computed value is approximately 12%, which matches the claim.

So the statement is True.`,
      `**B.** → True

Treat Option 1 as a level perpetuity with the stated annual payment.

$$
a_0 + \\frac{a}{r} = 0
$$

Substitute the stem numbers:

$$
r = \\frac{1}{2.4297} - 1 \\approx -0.5884 = -58.84\\%
$$

The computed value is approximately -58.84%, which matches the claim.

So the statement is True.`,
      `**C.** → True

Option 1 pays a constant annual amount forever.

$$
a_0 + \\frac{a}{r} = 0
$$

Substitute the stem numbers:

$$
r = \\frac{1}{2.4297} - 1 \\approx -0.5884 = -58.84\\%
$$

The computed figure matches the claim.

So the statement is True.`,
      `**D.** → False

The overview recovered Option 2's cash flows $a_0=-50{,}000$ and $a_1=a_2=6{,}000$. Their undiscounted sum is

$$-50{,}000 + 6{,}000 + 6{,}000 = -38{,}000$$

Compare the computed value with the claim (-\\$40,000). We have -\\$38,000. The two sides do not agree.

So the statement is False.`,
      `**E.** → True

Removing Year 2 leaves a one-year project with outlay \\$50,000 and return \\$6,000. The one-year internal rate is

$$r = \\frac{6{,}000}{50{,}000} - 1$$

$$= 0.12 - 1 = -0.88 = -88\\%$$

The overview recovered Option 2's two-year rate $r \\approx -58.84\\%$. Since $-88\\% < -58.84\\%$, the truncated project has an even lower internal rate.

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 122,
    solution_overview: `A subscription software company spends \\$50,000 building a product. Option 1 pays a steady \\$6,000 at the end of every year forever. Option 2 pays \\$6,000 at the end of Year 1 and \\$6,000 at the end of Year 2, then nothing.

**Part 1: Setup.**

Both options start with

$$a_0 = -50{,}000$$

Option 1 is a level perpetuity with annual payment $a=6{,}000$. Zero NPV gives

$$a_0 + \\frac{a}{r} = 0, \\qquad r = \\frac{a}{-a_0}$$

Option 2 has

$$a_1 = a_2 = 6{,}000$$

and internal rate satisfying

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^2} = 0$$

Substitute $s=(1+r)^{-1}$.

**Part 2: Solve.**

Option 1:

$$r = \\frac{6{,}000}{50{,}000} = 0.12 = 12\\%$$

Option 2 becomes

$$6{,}000 s^2 + 6{,}000 s - 50{,}000 = 0$$

Divide by $2{,}000$:

$$3s^2 + 3s - 25 = 0$$

The discriminant is

$$3^2 + 4 \\cdot 3 \\cdot 25 = 309$$

$$\\sqrt{309} \\approx 17.578$$

The admissible discount-factor root is

$$s = \\frac{-3 + 17.578}{6} \\approx 2.4297$$

$$r = \\frac{1}{2.4297} - 1 \\approx -0.5884 = -58.84\\%$$

The other root has $r < -1$ and is discarded.`,
  },
  {
    id: `math-11-123`,
    case_id: `MATH 11.123`,
    title: `Two Solar Project Designs Compared by Internal Rate of Return and NPV`,
    subsection: `3.7`,
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
      `**A.** → True

Apply the financial identity that produces the quantity named in the claim:

$$
r_A = \\frac{1}{0.90057} - 1 \\approx 0.1104 \\approx 11.04\\%
$$

The computed value is approximately 11.04%, which matches the claim.

So the statement is True.`,
      `**B.** → True

Apply the financial identity that produces the quantity named in the claim:

$$
r_B = \\frac{81{,}200}{70{,}000} - 1 = 0.16 = 16\\%
$$

The computed value is approximately 16%, which matches the claim.

Each display above isolates one arithmetic step so the claim check is transparent.

So the statement is True.`,
      `**C.** → True

The internal-rate criterion ranks the designs by the recovered rates. The overview recovered $r_A \\approx 11.04\\%$ and $r_B = 16\\%$.

$$16\\% > 11.04\\%$$

Design B has the higher internal rate.

So the statement is True.`,
      `**D.** → True

Net present value discounts each design's cash flows at $13\\%$. For Design A:

$$(1.13)^2 = 1.2769$$

$$NPV_A = -120{,}000 + \\frac{54{,}000}{1.13} + \\frac{88{,}000}{1.2769}$$

$$= -120{,}000 + 47{,}787.61 + 68{,}916.91$$

$$= -3{,}295.48$$

For Design B:

$$NPV_B = -70{,}000 + \\frac{81{,}200}{1.13}$$

$$= -70{,}000 + 71{,}858.41$$

$$= 1{,}858.41$$

The claim needs $NPV_A < 0$ and $NPV_B > 0$. We have $-3{,}295.48 < 0$ and $1{,}858.41 > 0$.

So the statement is True.`,
      `**E.** → False

Cutting Design A's Year 1 return to \\$44,000 leaves a new two-year project. After substituting $s=(1+r)^{-1}$ and dividing by $4{,}000$:

$$22s^2 + 11s - 30 = 0$$

The discriminant is

$$11^2 + 4 \\cdot 22 \\cdot 30 = 121 + 2{,}640 = 2{,}761$$

$$\\sqrt{2{,}761} \\approx 52.545$$

$$s = \\frac{-11 + 52.545}{44} \\approx 0.9442$$

$$r = \\frac{1}{0.9442} - 1 \\approx 0.0591 \\approx 5.91\\%$$

The overview recovered Design B's rate $r_B = 16\\%$. Since $5.91\\% < 16\\%$, the cut-return rate does not exceed $16\\%$.

So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 123,
    solution_overview: `A renewable energy cooperative compares two solar designs. Design A invests \\$120,000 and receives \\$54,000 at the end of Year 1 and \\$88,000 at the end of Year 2. Design B invests \\$70,000 and receives a single \\$81,200 at the end of Year 1.

**Part 1: Setup.**

Design A has cash flows

$$a_0 = -120{,}000, \\qquad a_1 = 54{,}000, \\qquad a_2 = 88{,}000$$

Its internal rate satisfies

$$a_0 + \\frac{a_1}{1+r} + \\frac{a_2}{(1+r)^2} = 0$$

Substitute $s=(1+r)^{-1}$.

Design B is a one-year project with outlay $a=70{,}000$ and return $b=81{,}200$:

$$r = \\frac{b}{a} - 1$$

**Part 2: Solve.**

Design A's quadratic is

$$88{,}000 s^2 + 54{,}000 s - 120{,}000 = 0$$

Divide by $2{,}000$:

$$44s^2 + 27s - 60 = 0$$

The discriminant is

$$27^2 + 4 \\cdot 44 \\cdot 60 = 729 + 10{,}560 = 11{,}289$$

$$\\sqrt{11{,}289} \\approx 106.250$$

$$s = \\frac{-27 + 106.250}{88} \\approx 0.90057$$

$$r_A = \\frac{1}{0.90057} - 1 \\approx 0.1104 \\approx 11.04\\%$$

Design B:

$$r_B = \\frac{81{,}200}{70{,}000} - 1 = 0.16 = 16\\%$$`,
  },
];

export const MATH_CH11_FINANCIAL: MathTask[] = [
  ...MATH_CH11_CORE,
  ...(ch3Exam.tasks as MathTask[]),
];
