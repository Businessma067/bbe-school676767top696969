import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(path, "utf8");

function replaceInTask(id, oldStr, newStr) {
  const marker = `id: \`${id}\``;
  const start = src.indexOf(marker);
  if (start < 0) throw new Error("missing " + id);
  const next = src.indexOf("\n  {\n    id: `math-11-", start + 10);
  const end = next < 0 ? start + 15000 : next;
  const chunk = src.slice(start, end);
  if (!chunk.includes(oldStr)) {
    console.error("NOT FOUND in", id, ":", JSON.stringify(oldStr.slice(0, 100)));
    return false;
  }
  const newChunk = chunk.replace(oldStr, newStr);
  src = src.slice(0, start) + newChunk + src.slice(end);
  return true;
}

let patches = 0;
let stmtRewrites = 0;
function R(id, a, b, isStmt = false) {
  if (replaceInTask(id, a, b)) {
    patches++;
    if (isStmt) stmtRewrites++;
    console.log("OK", id, a.slice(0, 60).replace(/\n/g, " "));
  }
}

// ========== math-11-1 ==========
R(
  "math-11-1",
  `The monthly periodic interest rate is 0.60%.`,
  `The monthly periodic interest rate exceeds 0.65%.`,
  true,
);
R(
  "math-11-1",
  `answer_key: [true, true, true, false, false],`,
  `answer_key: [false, true, true, false, false],`,
);
R(
  "math-11-1",
  `**A) The monthly periodic interest rate is 0.60%.**  (true)

The monthly periodic rate is the nominal annual rate divided by the number of compounding periods: $i = r/n = 0.072/12 = 0.006 = 0.60\\%$. This matches the claim exactly, so the statement is True.`,
  `**A) The monthly periodic interest rate exceeds 0.65%.**  (false)

Trap: $i = r/n = 0.072/12 = 0.006 = 0.60\\%$, which does not exceed $0.65\\%$.

The monthly periodic rate is $i = r/n = 0.072/12 = 0.006 = 0.60\\%$. Compare with the claimed cutoff:

$$0.60\\% < 0.65\\%$$

The periodic rate does not exceed $0.65\\%$, so the statement is False.`,
);
R(
  "math-11-1",
  `**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.`,
  `**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$, which does not exceed $0.65\\%$.`,
);

// ========== math-11-2 ==========
R(
  "math-11-2",
  `The quarterly periodic rate is 2.00%.`,
  `The quarterly periodic rate exceeds 2.10%.`,
  true,
);
R(
  "math-11-2",
  `The number of quarterly periods over 6 years is 24.`,
  `Over 6 years there are more than 20 quarterly compounding periods.`,
  true,
);
R(
  "math-11-2",
  `answer_key: [true, true, false, false, false],`,
  `answer_key: [false, true, false, false, false],`,
);
R(
  "math-11-2",
  `**A) The quarterly periodic rate is 2.00%.**  (true)

The quarterly periodic rate is the nominal annual rate divided by 4: $i = r/n = 0.08/4 = 0.02 = 2.00\\%$. This matches the claim exactly, so the statement is True.`,
  `**A) The quarterly periodic rate exceeds 2.10%.**  (false)

Trap: $i = r/n = 0.08/4 = 0.02 = 2.00\\%$, which does not exceed $2.10\\%$.

The quarterly periodic rate is $i = 0.08/4 = 0.02 = 2.00\\%$. Compare:

$$2.00\\% < 2.10\\%$$

The rate does not exceed $2.10\\%$, so the statement is False.`,
);
R(
  "math-11-2",
  `**B) The number of quarterly periods over 6 years is 24.**  (true)

The number of compounding periods is compounding frequency times years: $nt = n \\times t = 4 \\times 6 = 24$. The claim matches exactly, so the statement is True.`,
  `**B) Over 6 years there are more than 20 quarterly compounding periods.**  (true)

The number of compounding periods is $nt = n \\times t = 4 \\times 6 = 24$. Compare with 20:

$$24 > 20$$

There are more than 20 quarterly periods, so the statement is True.`,
);
R(
  "math-11-2",
  `**1.** Periodic rate: $0.08/4 = 0.02 = 2.00\\%$; $nt = 4 \\times 6 = 24$.`,
  `**1.** Periodic rate: $0.08/4 = 0.02 = 2.00\\%$ (does not exceed $2.10\\%$); $nt = 4 \\times 6 = 24 > 20$.`,
);

// ========== math-11-5 ==========
R(
  "math-11-5",
  `The quarterly periodic rate is 1.40%.`,
  `The quarterly periodic rate exceeds 1.50%.`,
  true,
);
R(
  "math-11-5",
  `answer_key: [true, true, true, false, false],`,
  `answer_key: [false, true, true, false, false],`,
);
R(
  "math-11-5",
  `**A) The quarterly periodic rate is 1.40%.**  (true)

The quarterly periodic rate is $i = r/n = 0.056/4 = 0.014 = 1.40\\%$. This matches the claim exactly, so the statement is True.`,
  `**A) The quarterly periodic rate exceeds 1.50%.**  (false)

Trap: $i = r/n = 0.056/4 = 0.014 = 1.40\\%$, which does not exceed $1.50\\%$.

$$1.40\\% < 1.50\\%$$

The periodic rate does not exceed $1.50\\%$, so the statement is False.`,
);
R(
  "math-11-5",
  `**1.** Periodic rate: $0.056/4 = 0.014 = 1.40\\%$.`,
  `**1.** Periodic rate: $0.056/4 = 0.014 = 1.40\\%$, which does not exceed $1.50\\%$.`,
);

// ========== math-11-6 ==========
R(
  "math-11-6",
  `The monthly periodic rate is 0.60%.`,
  `The monthly periodic rate exceeds 0.65%.`,
  true,
);
R(
  "math-11-6",
  `It would take approximately 58 months for the deposit to double, which would be exactly half of the actual doubling time.`,
  `After 58 months the deposit has grown by a factor of more than 1.5.`,
  true,
);
R(
  "math-11-6",
  `Because $(1 + r/n)^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.`,
  `It takes more than 60 months for the deposit to grow by a factor of 1.5.`,
  true,
);
R(
  "math-11-6",
  `answer_key: [true, false, false, false, true],`,
  `answer_key: [false, false, false, false, true],`,
);
R(
  "math-11-6",
  `**A) The monthly periodic rate is 0.60%.**  (true)

The monthly periodic rate is $i = r/n = 0.072/12 = 0.006 = 0.60\\%$. This matches the claim exactly, so the statement is True.`,
  `**A) The monthly periodic rate exceeds 0.65%.**  (false)

Trap: $i = r/n = 0.072/12 = 0.006 = 0.60\\%$, which does not exceed $0.65\\%$.

$$0.60\\% < 0.65\\%$$

The periodic rate does not exceed $0.65\\%$, so the statement is False.`,
);
R(
  "math-11-6",
  `**C) It would take approximately 58 months for the deposit to double, which would be exactly half of the actual doubling time.**  (false)

Trap: the true doubling time is about 115.85 months; 58 months is nowhere near it and is not meaningfully 'half' of the correct value in any valid sense.

From (B), the doubling time is

$$t = \\frac{\\ln 2}{\\ln 1.006} \\approx 115.85$$

months

Half of that would be $115.85/2 \\approx 57.93$ months, but 58 months is not the doubling time itself. The claim treats 58 months as the doubling time. The deposit has not doubled after 58 months:

$$(1.006)^{58} \\approx 1.414 \\neq 2$$

The doubling time is 115.85 months, not 58, so the statement is False.`,
  `**C) After 58 months the deposit has grown by a factor of more than 1.5.**  (false)

Trap: $(1.006)^{58} \\approx 1.415$, which is less than $1.5$, not more.

Growth factor after 58 months:

$$(1.006)^{58} \\approx 1.4148 < 1.5$$

The deposit has not yet grown by a factor of 1.5, so the statement is False.`,
);
R(
  "math-11-6",
  `**E) Because $(1 + r/n)^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.**  (true)

Because $(1+r/n)^{t}$ is a strictly increasing exponential function of $t$, solving $(1+i)^{t} = M$ for $t = \\ln M / \\ln(1+i)$ works for any target multiple $M > 0$, $M \\neq 1$, not just doubling, since $\\ln(1+i) > 0$ whenever $i > 0$ — this is exactly the method used in Example 11.1.2 of the textbook. So the statement is True.`,
  `**E) It takes more than 60 months for the deposit to grow by a factor of 1.5.**  (true)

Solve $(1.006)^{t} = 1.5$:

$$t = \\frac{\\ln 1.5}{\\ln 1.006} = \\frac{0.405465}{0.005982} \\approx 67.78$$

months

$$67.78 > 60$$

The 1.5× time exceeds 60 months, so the statement is True.`,
);
R(
  "math-11-6",
  `**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.

**2.** Solve $(1.006)^{t} = 2$: $t = \\ln 2/\\ln 1.006 \\approx 0.693147/0.0059821 \\approx 115.85$ months $\\approx 9.65$ years (not $108$ months).

**3.** $115.85$ months is not $58$ months; doubling time does not split that way along the exponential curve.

**4.** At $14.4\\%$ nominal monthly, $R = (1.012)^{12}-1 \\approx 15.38\\%$, but double the original $7.44\\%$ EAR would be $14.88\\%$ — doubling the nominal rate does not exactly double the EAR.

**5.** The same $t = \\ln(M)/\\ln(1+i)$ method works for any target multiple $M$.`,
  `**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$, which does not exceed $0.65\\%$.

**2.** Solve $(1.006)^{t} = 2$: $t = \\ln 2/\\ln 1.006 \\approx 0.693147/0.0059821 \\approx 115.85$ months $\\approx 9.65$ years (not $108$ months).

**3.** After $58$ months: $(1.006)^{58} \\approx 1.415 < 1.5$, so the deposit has not grown by a factor of more than $1.5$.

**4.** At $14.4\\%$ nominal monthly, $R = (1.012)^{12}-1 \\approx 15.38\\%$, but double the original $7.44\\%$ EAR would be $14.88\\%$ — doubling the nominal rate does not exactly double the EAR.

**5.** Time to grow by $1.5\\times$: $t = \\ln 1.5/\\ln 1.006 \\approx 67.78$ months, which exceeds $60$ months.`,
);

// ========== math-11-8 ==========
R(
  "math-11-8",
  `The monthly periodic rate is 0.50%.`,
  `The monthly periodic rate exceeds 0.55%.`,
  true,
);
R(
  "math-11-8",
  `The number of monthly compounding periods over 10 years, nt, is 120.`,
  `The number of monthly compounding periods over 10 years exceeds 100.`,
  true,
);
R(
  "math-11-8",
  `answer_key: [true, true, true, false, false],`,
  `answer_key: [false, true, true, false, false],`,
);
R(
  "math-11-8",
  `**A) The monthly periodic rate is 0.50%.**  (true)

Periodic rate: $0.06/12 = 0.50\\%$, matching exactly.

$$i = \\frac{r}{n} = \\frac{0.06}{12} = 0.005 = 0.50\\%$$

The claim says 0.50%. We got 0.50%, so the statement is True.`,
  `**A) The monthly periodic rate exceeds 0.55%.**  (false)

Trap: $i = 0.06/12 = 0.005 = 0.50\\%$, which does not exceed $0.55\\%$.

$$i = \\frac{0.06}{12} = 0.005 = 0.50\\%$$

$$0.50\\% < 0.55\\%$$

The periodic rate does not exceed $0.55\\%$, so the statement is False.`,
);
R(
  "math-11-8",
  `**B) The number of monthly compounding periods over 10 years, nt, is 120.**  (true)

$nt = 12 \\times 10 = 120$, matching exactly.

$$nt = n \\times t = 12 \\times 10 = 120$$

The claim says 120. We got 120, so the statement is True.`,
  `**B) The number of monthly compounding periods over 10 years exceeds 100.**  (true)

$$nt = n \\times t = 12 \\times 10 = 120$$

$$120 > 100$$

There are more than 100 monthly periods, so the statement is True.`,
);
R(
  "math-11-8",
  `**1.** Periodic rate: $0.06/12 = 0.005 = 0.50\\%$; $nt = 12 \\times 10 = 120$.`,
  `**1.** Periodic rate: $0.06/12 = 0.005 = 0.50\\%$ (does not exceed $0.55\\%$); $nt = 12 \\times 10 = 120 > 100$.`,
);

// ========== math-11-9 ==========
R(
  "math-11-9",
  `The corresponding quarterly periodic rate is approximately 1.48%.`,
  `The corresponding quarterly periodic rate exceeds 1.60%.`,
  true,
);
R(
  "math-11-9",
  `answer_key: [true, true, false, false, false],`,
  `answer_key: [true, false, false, false, false],`,
);
R(
  "math-11-9",
  `**B) The corresponding quarterly periodic rate is approximately 1.48%.**  (true)

The quarterly periodic rate is $i = r/4 \\approx 0.05918/4 \\approx 0.014795 \\approx 1.48\\%$, using $r$ from (A). This matches the claim, so the statement is True.`,
  `**B) The corresponding quarterly periodic rate exceeds 1.60%.**  (false)

Trap: $i = r/4 \\approx 0.05918/4 \\approx 0.014795 \\approx 1.48\\%$, which does not exceed $1.60\\%$.

Using $r \\approx 5.92\\%$ from (A):

$$i = \\frac{r}{4} \\approx \\frac{0.05918}{4} \\approx 0.014795 \\approx 1.48\\%$$

$$1.48\\% < 1.60\\%$$

The periodic rate does not exceed $1.60\\%$, so the statement is False.`,
);
R(
  "math-11-9",
  `**2.** Quarterly periodic rate: $5.92\\%/4 \\approx 1.48\\%$.`,
  `**2.** Quarterly periodic rate: $5.92\\%/4 \\approx 1.48\\%$, which does not exceed $1.60\\%$.`,
);

// ========== math-11-11 ==========
R(
  "math-11-11",
  `This present value is less than \\$32,000.`,
  `A deposit of \\$31,000 six years ago would have grown to more than \\$40,000 today.`,
  true,
);
R(
  "math-11-11",
  `**C) This present value is less than \\$32,000.**  (true)

From (B), $S_0 \\approx \\$30,715.86$, which is less than $\\$32,000$. So the statement is True.`,
  `**C) A deposit of \\$31,000 six years ago would have grown to more than \\$40,000 today.**  (true)

Grow $\\$31,000$ forward at $4.5\\%$ annual for 6 years:

$$31,000 \\times (1.045)^{6} \\approx 31,000 \\times 1.302253 \\approx \\$40,369.84$$

$$\\$40,369.84 > \\$40,000$$

The deposit would have exceeded $\\$40,000$, so the statement is True.`,
);
R(
  "math-11-11",
  `**3.** $\\$30,715.86$ is indeed less than $\\$32,000$.`,
  `**3.** Forward check: $31,000 \\times (1.045)^{6} \\approx \\$40,369.84 > \\$40,000$.`,
);

// ========== math-11-13 ==========
R(
  "math-11-13",
  `The daily periodic rate is approximately 0.011644%.`,
  `The daily periodic rate exceeds 0.012%.`,
  true,
);
R(
  "math-11-13",
  `answer_key: [true, true, true, false, false],`,
  `answer_key: [false, true, true, false, false],`,
);
R(
  "math-11-13",
  `**A) The daily periodic rate is approximately 0.011644%.**  (true)

The daily periodic rate is $i = r/n = 0.0425/365 \\approx 0.011644\\%$. This matches the claim exactly, so the statement is True.`,
  `**A) The daily periodic rate exceeds 0.012%.**  (false)

Trap: $i = r/n = 0.0425/365 \\approx 0.00011644 = 0.011644\\%$, which does not exceed $0.012\\%$.

$$0.011644\\% < 0.012\\%$$

The daily periodic rate does not exceed $0.012\\%$, so the statement is False.`,
);
R(
  "math-11-13",
  `**1.** Periodic rate: $0.0425/365 \\approx 0.00011644 = 0.011644\\%$.`,
  `**1.** Periodic rate: $0.0425/365 \\approx 0.00011644 = 0.011644\\%$, which does not exceed $0.012\\%$.`,
);

// ========== math-11-14 ==========
R(
  "math-11-14",
  `The nominal annual rate, quoted as 12 times the monthly rate, is 22.80%.`,
  `The nominal annual rate, quoted as 12 times the monthly rate, exceeds 24.00%.`,
  true,
);
R(
  "math-11-14",
  `answer_key: [true, true, false, false, false],`,
  `answer_key: [false, true, false, false, false],`,
);
R(
  "math-11-14",
  `**A) The nominal annual rate, quoted as 12 times the monthly rate, is 22.80%.**  (true)

The nominal annual rate is $r = 12 \\times i_m = 12 \\times 1.9\\% = 22.80\\%$. This matches the claim exactly, so the statement is True.`,
  `**A) The nominal annual rate, quoted as 12 times the monthly rate, exceeds 24.00%.**  (false)

Trap: $r = 12 \\times 1.9\\% = 22.80\\%$, which does not exceed $24.00\\%$.

$$r = 12 \\times 1.9\\% = 22.80\\%$$

$$22.80\\% < 24.00\\%$$

The nominal rate does not exceed $24.00\\%$, so the statement is False.`,
);
R(
  "math-11-14",
  `**1.** Nominal annual rate: $12 \\times 1.9\\% = 22.80\\%$.`,
  `**1.** Nominal annual rate: $12 \\times 1.9\\% = 22.80\\%$, which does not exceed $24.00\\%$.`,
);

// ========== math-11-18 ==========
R(
  "math-11-18",
  `This present value is more than \\$45,000.`,
  `The amount invested 9 years ago exceeded \\$42,000.`,
  true,
);
R(
  "math-11-18",
  `**C) This present value is more than \\$45,000.**  (false)

Trap: $\\$40,467.83$ is less than $\\$45,000$, not more.

From (B), $S_0 \\approx \\$40,467.83 < \\$45,000$. So the statement is False.`,
  `**C) The amount invested 9 years ago exceeded \\$42,000.**  (false)

Trap: $S_0 = 60,000/(1.011)^{36} \\approx \\$40,467.83$, which is below $\\$42,000$, not above it.

$$S_0 \\approx \\$40,467.83 < \\$42,000$$

The required present value did not exceed $\\$42,000$, so the statement is False.`,
);
R(
  "math-11-18",
  `**3.** $\\$40,467.83$ is less than $\\$45,000$, not more.`,
  `**3.** $S_0 \\approx \\$40,467.83$, which does not exceed $\\$42,000$.`,
);

// ========== math-11-19 ==========
R(
  "math-11-19",
  `On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.`,
  `On the \\$20,000 deposit, choosing CD2 over CD1 would earn more than \\$25 in additional interest over the year.`,
  true,
);
R(
  "math-11-19",
  `answer_key: [true, true, true, true, true],`,
  `answer_key: [true, true, true, true, false],`,
);
R(
  "math-11-19",
  `**E) On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.**  (true)

The interest difference is principal times the EAR gap: $\\Delta I = P(R_2 - R_1) = 20,000 \\times (0.065533 - 0.064852) \\approx 20,000 \\times 0.000681 \\approx \\$13.61$, using $R_1, R_2$ from (A)-(B). This matches the claim, so the statement is True.`,
  `**E) On the \\$20,000 deposit, choosing CD2 over CD1 would earn more than \\$25 in additional interest over the year.**  (false)

Trap: the actual extra interest is only about $\\$13.61$, well below $\\$25$.

$$\\Delta I = 20,000 \\times (0.065533 - 0.064852) \\approx 20,000 \\times 0.000681 \\approx \\$13.61$$

$$\\$13.61 < \\$25$$

The extra interest does not exceed $\\$25$, so the statement is False.`,
);
R(
  "math-11-19",
  `**10.** Extra interest of CD$_2$ over CD$_1$: $1,310.66 - 1,297.04 = \\$13.62 \\approx \\$13.61$.`,
  `**10.** Extra interest of CD$_2$ over CD$_1$: $1,310.66 - 1,297.04 = \\$13.62$, which does not exceed $\\$25$.`,
);

// ========== math-11-21 ==========
R(
  "math-11-21",
  `The dollar difference between continuous compounding and annual compounding at the same nominal rate is \\$5.72.`,
  `The dollar difference between continuous compounding and annual compounding at the same nominal rate exceeds \\$8.00.`,
  true,
);
R(
  "math-11-21",
  `answer_key: [true, true, false, true, false],`,
  `answer_key: [true, true, false, false, false],`,
);
R(
  "math-11-21",
  `**D) The dollar difference between continuous compounding and annual compounding at the same nominal rate is \\$5.72.**  (true)

The gap is $\\Delta = S(1) - S_{\\mathrm{ann}} = 4,730.72 - 4,725.00 = \\$5.72$, using the balances from (A) and (C). This matches the claim exactly, so the statement is True.`,
  `**D) The dollar difference between continuous compounding and annual compounding at the same nominal rate exceeds \\$8.00.**  (false)

Trap: continuous balance $\\$4,730.72$ minus annual $\\$4,725.00$ is only $\\$5.72$, below $\\$8.00$.

$$S(1) = 4,500 e^{0.05} \\approx \\$4,730.72$$

$$S_{\\mathrm{ann}} = 4,500 \\times 1.05 = \\$4,725.00$$

$$\\Delta = 4,730.72 - 4,725.00 = \\$5.72 < \\$8.00$$

The gap does not exceed $\\$8.00$, so the statement is False.`,
);
R(
  "math-11-21",
  `**4.** Difference: $4,730.72 - 4,725.00 = \\$5.72$.`,
  `**4.** Difference: $4,730.72 - 4,725.00 = \\$5.72$, which does not exceed $\\$8.00$.`,
);

// ========== math-11-25 ==========
R(
  "math-11-25",
  `Each year, the balance is multiplied by a different factor.`,
  `After two years the balance exceeds \\$105,000.`,
  true,
);
R(
  "math-11-25",
  `**D) Each year, the balance is multiplied by a different factor.**  (false)

This directly contradicts the property $S(t + 1) = S(t) \\times e^{r}$: the multiplying factor $e^{r}$ depends only on the fixed nominal rate $r$, not on the current balance, so the SAME factor ($e^{0.045} \\approx 1.0460$) is applied every year regardless of how large the balance has already grown. The statement is False.`,
  `**D) After two years the balance exceeds \\$105,000.**  (false)

Trap: $S(2) = 95,000 \\times e^{0.09} \\approx \\$103,946.56$, which is below $\\$105,000$, not above it.

$$S(2) = 95,000 \\times e^{0.045 \\times 2} = 95,000 \\times e^{0.09} \\approx 95,000 \\times 1.094174 \\approx \\$103,946.56$$

$$\\$103,946.56 < \\$105,000$$

The two-year balance does not exceed $\\$105,000$, so the statement is False.`,
);

fs.writeFileSync(path, src);
console.log("\npatches applied:", patches, "stmt rewrites:", stmtRewrites);
