/**
 * Trim Ch11 4/5 and 5/5 solution_overview texts that exceed length caps.
 * Safe splice (no String.replace $n interpolation). Overviews stored as
 * exact TypeScript-source text (double-backslash LaTeX escapes).
 */
import fs from "fs";

const path = "C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts";
let src = fs.readFileSync(path, "utf8");

function findOverviewSpan(caseId) {
  const caseMarker = `case_id: \`${caseId}\``;
  const caseIdx = src.indexOf(caseMarker);
  if (caseIdx < 0) throw new Error("case not found: " + caseId);
  const nextCase = src.indexOf("\n  {\n    id:", caseIdx + 1);
  const blockEnd = nextCase < 0 ? src.length : nextCase;
  const key = "solution_overview: `";
  const soIdx = src.indexOf(key, caseIdx);
  if (soIdx < 0 || soIdx > blockEnd) throw new Error("overview not in block: " + caseId);
  const contentStart = soIdx + key.length;
  // Overview ends at backtick before comma then closing brace of the task
  const closeRe = /`\s*,\s*\n\s*\}/;
  const closeMatch = closeRe.exec(src.slice(contentStart, blockEnd));
  if (!closeMatch) throw new Error("close not found: " + caseId);
  const contentEnd = contentStart + closeMatch.index;
  return { contentStart, contentEnd, old: src.slice(contentStart, contentEnd) };
}

function replaceOverview(caseId, newOverview) {
  const { contentStart, contentEnd, old } = findOverviewSpan(caseId);
  const usesCRLF = old.includes("\r\n");
  let ov = newOverview;
  if (usesCRLF) ov = ov.replace(/\r?\n/g, "\r\n");
  else ov = ov.replace(/\r\n/g, "\n");
  if (usesCRLF) {
    if (!ov.endsWith("\r\n")) ov += "\r\n";
  } else {
    if (!ov.endsWith("\n")) ov += "\n";
  }
  src = src.slice(0, contentStart) + ov + src.slice(contentEnd);
  return { oldLen: old.length, newLen: ov.length, trimmed: old.length - ov.length };
}

// Exact TS-source text (\\\\ = one \\ in file for LaTeX)
const replacements = {
  "MATH 11.34": `A boutique investment firm holds two assets: Asset A, a start-up equity stake currently worth \\\\$50,000 and growing continuously at a nominal annual rate of 4%; and Asset B, aging factory equipment currently worth \\\\$250,000 and depreciating continuously at an annual rate of 12%. The firm wants to know whether, and when, Asset A's value will overtake Asset B's value.

**Part 1: Setup.**

$A_0 = \\\\$50,000$, $r_A = 4\\\\% = 0.04$

$B_0 = \\\\$250,000$, $\\\\delta_B = 12\\\\% = 0.12$

Compounding: continuous

**Part 2: Formula.**

$A(t) = A_0 e^{r_A t}$

$B(t) = B_0 e^{-\\\\delta_B t}$

Crossover: $t = \\\\ln(B_0/A_0)/(r_A + \\\\delta_B)$

**Part 3: Solve.**

**1.** $t = \\\\ln(5)/0.16 = 10.0590$ years; at crossover both equal $\\\\\$74,767.44$.

**2.** At $t = 10$: $A(10) = 50,000 \\\\times e^{0.40} = \\\\\$74,591.23$ and $B(10) = 250,000 \\\\times e^{-1.20} = \\\\\$75,298.55$, so A has not yet overtaken B — consistent with crossover at $10.06$ years.

**3.** The ratio $A(t)/B(t) = (A_0/B_0)\\\\times e^{(r_A + \\\\delta_B)t}$ grows without bound, so a crossover is guaranteed.
`,

  "MATH 11.40": `A family office's capstone valuation combines three holdings, all valued in nominal undiscounted dollars and added together just like ordinary fixed amounts. Asset A is a private equity stake currently worth \\\\$150,000, growing continuously at a nominal annual rate of 6% for 5 years. Asset B is aging warehouse machinery currently worth \\\\$220,000, depreciating continuously at an annual rate of 9% for the same 5 years. Asset C is a licensing agreement currently worth \\\\$100,000 that grows continuously at 8% for its first 3 years before slowing to a continuous 3% for its remaining 2 years of the 5-year total.

**Part 1: Setup.**

Asset A: $A_0 = \\\\$150,000$, $r_A = 0.06$, $t = 5$

Asset B: $B_0 = \\\\$220,000$, $\\\\delta_B = 0.09$, $t = 5$

Asset C: $C_0 = \\\\$100,000$, $r_1 = 8\\\\%$ for 3 years, then $r_2 = 3\\\\%$ for 2 years

**Part 2: Formula.**

$A(t) = A_0 e^{r_A t}$; $B(t) = B_0 e^{-\\\\delta_B t}$; $C(5) = C_0 e^{r_1 \\\\times 3} e^{r_2 \\\\times 2}$

Portfolio total: $A(5) + B(5) + C(5)$

**Part 3: Solve.**

**1.** $A(5) = 150,000 e^{0.30} = \\\\\$202,478.82$; $B(5) = 220,000 e^{-0.45} = \\\\\$140,278.19$.

**2.** $C(5) = 100,000 e^{0.24} e^{0.06} = \\\\\$134,985.88$.

**3.** Portfolio total: $\\\\\$477,742.89$, which exceeds the $\\\\\$470,000.00$ principal sum (not less).

**4.** If $B_0$ instead grew at $9\\\\%$: $B(5)' = 220,000 e^{0.45} = \\\\\$345,028.68$, which exceeds $\\\\\$340,000.00$.
`,

  "MATH 11.77": `An analyst models the marginal benefit of the n-th batch of advertising spend as $a_n = 5,000/n^{p}$ dollars, and wants to know, for different values of the exponent p, whether the infinite total marginal benefit $\\\\sum a_n$ converges, using the rule that $\\\\sum 1/n^{p}$ converges if and only if p > 1.

**Part 1: Setup.**

$a_n = 5,000/n^{p}$

p = 1.5 (primary); p = 1 and p = 0.5 (comparison scenarios)

**Part 2: Formula.**

p-series rule: $\\\\sum_{n=1}^{\\\\infty} 1/n^{p}$ converges ⇔ $p > 1$

Necessary (not sufficient): convergence requires $\\\\lim_{n\\\\to\\\\infty} a_n = 0$

**Part 3: Solve.**

**1.** $a_4 = 5,000/4^{1.5} = 5,000/8 = \\\\\$625.00$ (not $\\\\\$650.00$).

**2.** $p = 1.5 > 1$, so $\\\\sum 5,000/n^{1.5}$ converges to a finite value.

**3.** At $p = 1$, $\\\\sum 5,000/n$ is the harmonic series and diverges — it has no finite sum.

**4.** $a_{100} = \\\\\$5.00$ is correct, but $a_n \\\\to 0$ is necessary, not sufficient (harmonic counterexample).

**5.** $p = 0.5 \\\\le 1$, so $\\\\sum 5,000/n^{0.5}$ diverges even though $a_n \\\\to 0$.
`,

  "MATH 11.78": `A solar farm's annual energy revenue starts at \\\\$150,000 and grows 1% per year with a = \\\\$150,000 and k = 1.01, while its annual maintenance cost starts at \\\\$120,000 but grows faster, at 3% per year with a = \\\\$120,000 and k = 1.03. Both are finite geometric series. Management compares cumulative profit, revenue total minus cost total, over both a 12-year and a 20-year horizon.

**Part 1: Setup.**

Revenue: $a = \\\\$150,000$, $k = 1.01$

Maintenance cost: $a = \\\\$120,000$, $k = 1.03$

Horizons: $n = 12$ and $n = 20$

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$; cumulative profit $= s_{\\\\mathrm{rev}} - s_{\\\\mathrm{cost}}$; year-$t$ term $= a k^{t-1}$

**Part 3: Solve.**

**1.** $s_{\\\\mathrm{rev},12} = \\\\\$1,902,375.45$; $s_{\\\\mathrm{cost},12} = \\\\\$1,703,043.55$; $12$-year profit $= \\\\\$199,331.90$.

**2.** Year-$12$ revenue $\\\\\$167,350.25$ minus cost $\\\\\$166,108.06$ gives net $\\\\\$1,242.19$.

**3.** Over $20$ years: $s_{\\\\mathrm{rev},20} = \\\\\$3,302,850.60$; $s_{\\\\mathrm{cost},20} = \\\\\$3,224,444.94$.
`,

  "MATH 11.80": `A private lender values a portfolio of three loan tranches, valued in nominal undiscounted dollars, adding declining and growing streams together just as ordinary fixed amounts. Tranche 1 pays equal annual coupons of \\\\$25,000 for 9 years in the degenerate k = 1 case. Tranche 2 pays a growing coupon starting at \\\\$18,000, increasing 7% per year for 9 years with a = \\\\$18,000 and k = 1.07. Tranche 3 is a perpetual royalty starting at \\\\$30,000 that declines 8% per year forever with a = \\\\$30,000 and k = 0.92. Separately, an analyst proposes valuing a symbolic annual fee stream $f_n = 1,000/n$ dollars for n = 1, 2, 3, ….

**Part 1: Setup.**

Tranche 1: $a = \\\\$25,000$, $k = 1$, $n = 9$

Tranche 2: $a = \\\\$18,000$, $k = 1.07$, $n = 9$

Tranche 3: $a = \\\\$30,000$, $k = 0.92$, infinite

Fee stream: $f_n = 1,000/n$

**Part 2: Formula.**

$k = 1$: $s_n = an$; finite ($k \\\\neq 1$): $s_n = a(k^{n}-1)/(k-1)$; infinite ($|k|<1$): $a/(1-k)$

$\\\\lim a_n = 0$ is necessary but not sufficient for convergence

**Part 3: Solve.**

**1.** Tranche $1$: $s = \\\\\$225,000.00$; Tranche $2$: $s = \\\\\$215,603.80$; Tranche $3$: $s = \\\\\$375,000.00$ (largest).

**2.** Combined total: $\\\\\$815,603.80$ — valid because a convergent infinite sum is a finite dollar amount that may be added to finite sums.

**3.** Fee stream: $f_{100} = \\\\\$10.00$ is correct, but $p = 1$ (harmonic) diverges — terms $\\\\to 0$ is not enough for convergence.
`,

  "MATH 11.98": `A biotech company sets aside \\\\$75,000 today in an account offering continuous compounding at a nominal 6.25% annual rate, aiming to accumulate funds for a 9-year R&D milestone. Management compares this to instead depositing the same \\\\$75,000 total, spread evenly as \\\\$8,333.33 at the end of each of the 9 years, into a separate account earning a discrete 6.25% annual rate.

**Part 1: Setup.**

Lump sum $P = \\\\$75,000$ today; annuity $a = \\\\$8,333.33$ for $n = 9$; $r = 0.0625$

Compounding: continuous (lump sum) vs. discrete annual (annuity)

**Part 2: Formula.**

$S = Pe^{rt}$; $F_n = (a/r)[(1+r)^{n}-1]$; discrete $S = P(1+r)^{n}$

**Part 3: Solve.**

**1.** $S_{\\\\mathrm{cont}} = 75,000 e^{0.5625} = \\\\\$131,629.13$.

**2.** $F_9 = \\\\\$96,757.60$; gap $= \\\\\$34,871.53$ (exceeds $\\\\\$30,000$), because later annuity deposits compound for less time than the lump sum.

**3.** Full lump sum with discrete compounding: $S_{\\\\mathrm{discrete}} = \\\\\$129,426.15$ — above the annuity but still below continuous.
`,

  "MATH 11.99": `A small business owner is juggling three separate financial arrangements, all at rates around 6-8%. First, an equipment lessor requires payments of \\\\$4,200 at the BEGINNING of each year as an annuity due for 5 years at 8% interest. Second, the owner separately invests \\\\$20,000 today for 7 years under continuous compounding at a nominal 6% rate to fund a future purchase. Third, the owner is considering a perpetuity option paying \\\\$3,000 per year forever, at 8%, for a maintenance reserve fund.

**Part 1: Setup.**

Annuity due: $a = \\\\$4,200$, $n = 5$, $r = 0.08$

Continuous investment: $P = \\\\$20,000$, $r = 0.06$, $t = 7$

Perpetuity: $a = \\\\$3,000$, $r = 0.08$

**Part 2: Formula.**

$P_{\\\\mathrm{due}}=(a/r)[1-1/(1+r)^{n}](1+r)$; $F_{\\\\mathrm{due}}=(a/r)[(1+r)^{n}-1](1+r)$

$S=Pe^{rt}$; perpetuity $P=a/r$

**Part 3: Solve.**

**1.** $P_{\\\\mathrm{due}} = \\\\\$18,110.94$; $F_{\\\\mathrm{due}} = \\\\\$26,610.90$ (not $\\\\\$27,610.90$).

**2.** Continuous investment: $S = 20,000 e^{0.42} = \\\\\$30,439.24$ (not $\\\\\$31,439.24$).

**3.** Perpetuity $P = \\\\\$37,500.00$ — more than double the lease present value, and larger than the continuous result (not smaller).
`,

  "MATH 11.100": `A family office is structuring a client's financial plan using four separate tools. Component 1: \\\\$150,000 is invested today in a continuous-compounding account at a nominal 5% rate for 10 years, to fund a future purchase. Component 2: the client needs \\\\$80,000 available in 6 years for a home renovation, funded today by a single deposit at a discrete 6% annual rate. Component 3: the client will receive an ordinary annuity of \\\\$10,000 at the end of each year for 12 years from a structured settlement, discounted at 7%. Component 4: the remainder will endow a scholarship as a growing perpetuity paying \\\\$5,000 next year, growing 2% annually forever, at a required return of 7%.

**Part 1: Setup.**

Comp 1: $P = \\\\$150,000$, $r = 0.05$, $t = 10$, continuous

Comp 2: target $\\\\\$80,000$, $r = 0.06$, $n = 6$, discrete

Comp 3: $a = \\\\$10,000$, $n = 12$, $r = 0.07$

Comp 4: $a_1 = \\\\$5,000$, $g = 0.02$, $r = 0.07$

**Part 2: Formula.**

$S=Pe^{rt}$; $x=A/(1+r)^{n}$; $P_n=(a/r)[1-1/(1+r)^{n}]$; growing perpetuity $P=a_1/(r-g)$

**Part 3: Solve.**

**1.** Comp $1$: $S = \\\\\$247,308.20$; Comp $2$: $x = \\\\\$56,396.85$ (not $\\\\\$57,396.85$).

**2.** Comp $3$: $P_{12} = \\\\\$79,429.40$; Comp $4$: $P = \\\\\$100,000.00$.

**3.** Summing all four figures: $\\\\\$385,826.25$, which is less than $\\\\\$500,000.00$ (not more).
`,

  "MATH 11.107": `At the end of each quarter, a small business owner deposits \\\\$250 into a savings account that pays interest once per year, at an annual rate of 8%. Because each quarterly deposit sits in the account for only part of the year before the annual interest is credited, the bank applies simple interest to each deposit for the fraction of the year it remains on deposit before the year-end crediting date.

**Part 1: Setup.**

$D = \\\\$250$ quarterly; $r = 0.08$; interest credited once per year

**Part 2: Formula.**

Year-end equivalent: $D(4+1.5r)$; then $F_N = (a/r)[(1+r)^{N}-1]$ with $a$ equal to that equivalent

**Part 3: Solve.**

**1.** Year-end equivalent: $250\\\\times(4 + 1.5\\\\times0.08) = 250\\\\times4.12 = \\\\\$1,030.00$ (not $\\\\\$1,100.00$).

**2.** FV after $4$ years $\\\\approx \\\\\$4,641.30$; after $3$ years $\\\\approx \\\\\$3,343.79$.

**3.** Ignoring mid-year interest ($a = \\\\\$1,000$) gives $4$-year FV $\\\\approx \\\\\$4,506.11$ — less than the correct $\\\\\$4,641.30$ by about $\\\\\$135.18$ (not $\\\\\$200.00$).
`,

  "MATH 11.108": `A family takes out a \\\\$200,000 home mortgage at a nominal annual interest rate of 6%, compounding monthly, to be repaid with equal payments at the end of each month over 20 years. After making exactly 5 years of payments, they want to know how much principal is still outstanding.

**Part 1: Setup.**

$K = \\\\$200,000$; nominal $6\\\\%$ monthly; $n = 240$ months; $m = 60$ payments already made

**Part 2: Formula.**

$r = 0.06/12$; $a = rK/[1-(1+r)^{-n}]$; balance after $m$: $(a/r)[1-(1+r)^{-(n-m)}]$

**Part 3: Solve.**

**1.** $r = 0.005$; $a \\\\approx \\\\\$1,432.86$; remaining balance after $60$ payments $\\\\approx \\\\\$169,799.20$.

**2.** Principal repaid in $5$ years: $\\\\\$30,200.80$ ($\\\\approx 15.10\\\\%$ of original — not more than $25\\\\%$).

**3.** Interest in the first $5$ years $\\\\approx \\\\\$55,770.92$; full-term interest $\\\\approx \\\\\$143,886.91$ (not $\\\\\$120,000.00$).
`,

  "MATH 11.109": `A manufacturing company borrows \\\\$120,000 at 14% annual interest and chooses to repay a fixed \\\\$25,000 at the end of each year, continuing until the loan is retired, with a final smaller payment to clear whatever balance remains.

**Part 1: Setup.**

$K = \\\\$120,000$; $r = 0.14$; $a = \\\\$25,000$

**Part 2: Formula.**

Smallest integer $n \\\\ge [\\\\ln a - \\\\ln(a-rK)]/\\\\ln(1+r)$; compare loan FV to payment FV after $n-1$ years to isolate the final payment

**Part 3: Solve.**

**1.** Threshold $\\\\approx 8.508$, so $n = 9$ ($8$ full payments plus a smaller $9$th).

**2.** After $8$ years: loan FV $\\\\approx \\\\\$342,310.37$; payments FV $\\\\approx \\\\\$330,819.00$; remaining $\\\\approx \\\\\$11,491.37$, so final payment $\\\\approx \\\\\$13,100.16$.

**3.** Total paid $\\\\approx \\\\\$213,100.16$; true interest $\\\\approx \\\\\$93,100.16$ (not $\\\\\$105,000$). Treating all nine payments as full $\\\\\$25,000$ overstates the total by about $\\\\\$11,900$.
`,

  "MATH 11.110": `A manufacturing company borrows \\\\$90,000 to buy new equipment, to be repaid in 8 equal annual instalments with the first payment due immediately and the rest due at the beginning of each following year, at an annual interest rate of 12%. Independently, to prepare for future maintenance costs, the company also deposits \\\\$300 at the end of each quarter into a separate reserve account that pays 9% annual interest, credited once per year.

**Part 1: Setup.**

Equipment loan: $K = \\\\$90,000$, $r = 0.12$, $n = 8$, first payment immediate

Reserve: $D = \\\\$300$ quarterly, annual rate $0.09$, $N = 3$ years

**Part 2: Formula.**

Annuity-due: $K = a + (a/r)[1-(1+r)^{-(n-1)}]$; interest $= r \\\\times$ start-of-period balance

Year-end equivalent $D(4+1.5r)$; $F_N = (a/r)[(1+r)^{N}-1]$

**Part 3: Solve.**

**1.** $a \\\\approx \\\\\$16,176.12$; balance after the immediate first payment $\\\\approx \\\\\$73,823.88$.

**2.** Second-payment interest $\\\\approx \\\\\$8,858.87$; third-payment interest $\\\\approx \\\\\$7,980.79$ (smaller than the second, not larger).

**3.** Reserve year-end equivalent $\\\\\$1,240.50$; $3$-year FV $\\\\approx \\\\\$4,066.48$ — far below the loan's first three payments ($\\\\approx \\\\\$48,528$).
`,

  "MATH 11.111": `A construction firm wants to buy a building site and is choosing among three payment schedules. Schedule I: pay \\\\$500,000 in cash immediately. Schedule II: pay \\\\$95,000 per year for 7 years, with the first instalment paid immediately. Schedule III: pay \\\\$150,000 in cash immediately, plus \\\\$60,000 per year for 10 years, with the first of these instalments paid one year later. The firm wants to know which schedule is cheapest in present-value terms first at a 9% annual interest rate, and then at a 13% annual interest rate.

**Part 1: Setup.**

I: $\\\\\$500,000$ cash; II: $a = \\\\$95,000$, $n = 7$, due; III: $\\\\\$150,000$ + $a = \\\\$60,000$, $n = 10$ ordinary

Rates: $9\\\\%$ and $13\\\\%$

**Part 2: Formula.**

Due: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$; ordinary: $PV = (a/r)[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** At $9\\\\%$: $PV_{\\\\mathrm{II}} \\\\approx \\\\\$521,162$; $PV_{\\\\mathrm{III}} \\\\approx \\\\\$535,059$; Schedule I ($\\\\\$500,000$) is cheapest.

**2.** At $13\\\\%$: $PV_{\\\\mathrm{II}} \\\\approx \\\\\$474,767$; $PV_{\\\\mathrm{III}} \\\\approx \\\\\$475,575$; Schedule II is cheapest (III is close, not cheapest).
`,

  "MATH 11.112": `A hospital system is negotiating the purchase of a new imaging center and equipment package, and is choosing among three payment schedules. Schedule I: pay \\\\$850,000 in cash immediately. Schedule II: pay \\\\$140,000 per year for 9 years, with the first instalment paid immediately. Schedule III: pay \\\\$300,000 in cash immediately, plus \\\\$80,000 per year for 11 years, with the first of these instalments paid one year later. The hospital wants to know which schedule is cheapest in present-value terms first at an 8% annual interest rate, and then at a 12% annual interest rate.

**Part 1: Setup.**

I: $\\\\\$850,000$ cash; II: $a = \\\\$140,000$, $n = 9$, due; III: $\\\\\$300,000$ + $a = \\\\$80,000$, $n = 11$ ordinary

Rates: $8\\\\%$ and $12\\\\%$

**Part 2: Formula.**

Due: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$; ordinary: $PV = (a/r)[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** At $8\\\\%$: $PV_{\\\\mathrm{II}} \\\\approx \\\\\$944,529$; $PV_{\\\\mathrm{III}} \\\\approx \\\\\$871,117$; Schedule I ($\\\\\$850,000$) is cheapest.

**2.** At $12\\\\%$: $PV_{\\\\mathrm{III}} \\\\approx \\\\\$775,016$; $PV_{\\\\mathrm{II}} \\\\approx \\\\\$835,470$; Schedule III becomes cheapest (not II).
`,

  "MATH 11.113": `A shipping company is negotiating the purchase of a cargo vessel and is choosing among three payment schedules. Schedule I: pay \\\\$2,400,000 in cash immediately. Schedule II: pay \\\\$340,000 per year for 10 years, with the first instalment paid immediately. Schedule III: pay \\\\$600,000 in cash immediately, plus \\\\$250,000 per year for 9 years, with the first of these instalments paid one year later. The company wants to know how the ranking of Schedule I versus Schedule II changes between a 7.5% annual interest rate and a 11.5% annual interest rate.

**Part 1: Setup.**

I: $\\\\\$2,400,000$ cash; II: $a = \\\\$340,000$, $n = 10$, due; III: $\\\\\$600,000$ + $a = \\\\$250,000$, $n = 9$ ordinary

Rates: $7.5\\\\%$ and $11.5\\\\%$

**Part 2: Formula.**

Due: $PV = a + (a/r)[1-(1+r)^{-(n-1)}]$; ordinary: $PV = (a/r)[1-(1+r)^{-n}]$

**Part 3: Solve.**

**1.** At $7.5\\\\%$: $PV_{\\\\mathrm{II}} \\\\approx \\\\\$2,508,822$; $PV_{\\\\mathrm{III}} \\\\approx \\\\\$2,194,722$; cash (I) beats II.

**2.** At $11.5\\\\%$: $PV_{\\\\mathrm{II}} \\\\approx \\\\\$2,186,562$; $PV_{\\\\mathrm{III}} \\\\approx \\\\\$1,957,766$; II now beats cash — the I vs II ranking flips (III stays cheapest overall).
`,

  "MATH 11.122": `A subscription software company spends \\\\$50,000 building a product and is comparing two versions. Option 1, the full version: a steady net return of \\\\$6,000 at the end of every year, indefinitely into the future. Option 2, the scaled-back version: the same \\\\$50,000 outlay, but returns of only \\\\$6,000 at the end of Year 1 and \\\\$6,000 at the end of Year 2, with nothing paid afterward.

**Part 1: Setup.**

$a_0 = -\\\\\$50,000$ (both); Option 1: $a_i = \\\\$6,000$ forever; Option 2: $a_1 = a_2 = \\\\$6,000$

**Part 2: Formula.**

Option 1: $a_0 + a/r = 0 \\\\Rightarrow r = a/(-a_0)$

Option 2: $a_0 + a_1/(1+r) + a_2/(1+r)^{2} = 0$; substitute $s = (1+r)^{-1}$

**Part 3: Solve.**

**1.** Option $1$: $r = 6,000/50,000 = 12\\\\%$.

**2.** Option $2$ reduces to $3s^{2} + 3s - 25 = 0$; $\\\\sqrt{309} \\\\approx 17.578$; valid root $s \\\\approx 2.430$ gives $r \\\\approx -58.84\\\\%$ (discard $r < -1$).

**3.** Option $2$ cash-flow sum $= -\\\\\$38,000$ (not $-\\\\\$40,000$); one-year truncation gives $-88\\\\%$, which is lower than $-58.84\\\\%$.
`,
};

const fiveIds = new Set([
  "MATH 11.40",
  "MATH 11.80",
  "MATH 11.99",
  "MATH 11.100",
  "MATH 11.109",
  "MATH 11.110",
  "MATH 11.111",
  "MATH 11.112",
  "MATH 11.113",
  "MATH 11.122",
]);

console.log("Planned lengths (file chars after JS unescape):");
for (const [id, ov] of Object.entries(replacements)) {
  // Template literal already produced the file-ready string
  const len = ov.length + 1;
  const max = fiveIds.has(id) ? 1600 : 1450;
  const min = fiveIds.has(id) ? 1200 : 1100;
  const flag = len > max ? "OVER" : len < min ? "UNDER_MIN" : "OK";
  console.log(`${id}: ${len} ${flag}`);
}

const results = [];
for (const [caseId, ov] of Object.entries(replacements)) {
  const r = replaceOverview(caseId, ov);
  results.push({ caseId, ...r });
}

fs.writeFileSync(path, src);

// Verify escapes look right on one sample
{
  const { old } = findOverviewSpan("MATH 11.34");
  console.log("\nSample escape check (11.34 start):");
  console.log(JSON.stringify(old.slice(0, 120)));
  if (!old.includes("\\\\$") && !old.includes("\\$")) {
    // In the file content string read by node, \\$ means two chars \ and $
  }
  console.log("Has \\\\\\\\ delta pattern:", /\\\\delta/.test(old) || /\\delta/.test(old));
  console.log("Has dollar escape:", old.includes("\\$"));
}

// Re-audit
function audit() {
  const taskStarts = [];
  const idRe = /case_id: `([^`]+)`/g;
  let m;
  while ((m = idRe.exec(src)) !== null) {
    taskStarts.push({ id: m[1], index: m.index });
  }
  const tasks = [];
  for (let i = 0; i < taskStarts.length; i++) {
    const start = taskStarts[i].index;
    const end = i + 1 < taskStarts.length ? taskStarts[i + 1].index : src.length;
    const block = src.slice(start, end);
    const diff = block.match(/difficulty_level: `([^`]+)`/);
    if (!diff || (diff[1] !== "4/5" && diff[1] !== "5/5")) continue;
    const ov = block.match(/solution_overview: `([\s\S]*?)`/);
    if (!ov) continue;
    tasks.push({ id: taskStarts[i].id, diff: diff[1], len: ov[1].length });
  }
  return tasks;
}

const tasks = audit();
console.log("\nApplied:");
results.forEach((r) =>
  console.log(`${r.caseId}: ${r.oldLen} → ${r.newLen} (trimmed ${r.trimmed})`)
);

const over = tasks.filter(
  (t) =>
    (t.diff === "4/5" && t.len > 1450) || (t.diff === "5/5" && t.len > 1600)
);
const fives = tasks.filter((t) => t.diff === "5/5");
const max5 = Math.max(...fives.map((t) => t.len));
console.log("\nStill over cap:", over.length);
over.forEach((t) => console.log(t.diff, t.len, t.id));
console.log("Max 5/5 overview length remaining:", max5);
console.log(
  "Total chars trimmed:",
  results.reduce((s, r) => s + r.trimmed, 0)
);
console.log("Count trimmed:", results.length);

// Corruption checks
const bad = [];
for (const id of Object.keys(replacements)) {
  const { old } = findOverviewSpan(id);
  if (old.includes("case_id:")) bad.push(id + ": leaked case_id");
  if (/\*\*Answer\.\*\*/.test(old)) bad.push(id + ": Answer line");
}
console.log("Corruption checks:", bad.length ? bad : "clean");
console.log("solution_overview count:", (src.match(/solution_overview: `/g) || []).length);
