import fs from "fs";

const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");

const re = /id: `math-11-(\d+)`/g;
const ids = [];
let m;
while ((m = re.exec(s))) ids.push({ id: +m[1], idx: m.index });

function getP3Range(id) {
  const i = ids.findIndex((x) => x.id === id);
  if (i < 0) throw new Error("missing " + id);
  const start = ids[i].idx;
  const end = i + 1 < ids.length ? ids[i + 1].idx : s.length;
  const block = s.slice(start, end);
  const p = block.indexOf("**Part 3: Solve.**");
  const a = block.indexOf("**Answer.**");
  if (p < 0 || a < 0) throw new Error("no part3 " + id);
  return { absP: start + p, absA: start + a, old: block.slice(p, a) };
}

/** Bodies use single-backslash TeX; we double when writing into .ts template strings. */
const BODY = {};

BODY[1] = `**Part 3: Solve.**

**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.

**2.** $R = (1.006)^{12} - 1 \\approx 1.074424 - 1 = 0.074424 \\approx 7.44\\%$.

**3.** $FV = 6,000 \\times 1.074424 = \\$6,446.54$.

**4.** Annual compounding ($n = 1$) gives $R = 7.20\\%$ (the nominal rate), which is lower than $7.44\\%$, not higher.

**5.** Gap: $7.44\\% - 7.20\\% = 0.24$ percentage points, which is far less than $1.00$ point.

`;

BODY[2] = `**Part 3: Solve.**

**1.** Periodic rate: $0.08/4 = 0.02 = 2.00\\%$; $nt = 4 \\times 6 = 24$.

**2.** $S(6) = 6,000 \\times (1.02)^{24} \\approx 6,000 \\times 1.608435 = \\$9,650.61$ (not $\\$9,860.00$).

**3.** Compound growth is exponential, not linear, in time: $(1.02)^{12} \\approx 1.268242$, so the $3$-year value would be about $\\$7,609.45$, which is NOT half of $\\$9,650.61$ (half would be $\\$4,825.31$).

**4.** Total growth: $(9,650.61 - 6,000)/6,000 \\approx 0.6084 = 60.84\\%$, which is not more than $65\\%$.

`;

BODY[3] = `**Part 3: Solve.**

**1.** Offer (i) periodic rate: $0.064/4 = 0.016$.

**2.** $R_i = (1.016)^{4} - 1 \\approx 1.065533 - 1 = 0.065533 \\approx 6.55\\%$.

**3.** Offer (ii) periodic rate: $0.065/2 = 0.0325$.

**4.** $R_{ii} = (1.0325)^{2} - 1 = 1.066056 - 1 = 0.066056 \\approx 6.61\\%$.

**5.** Since $R_{ii} \\approx 6.61\\% > R_i \\approx 6.55\\%$, Offer (ii) is the better deal for the saver, despite compounding less often.

**6.** Interest for Offer (i): $10,000 \\times 0.065533 = \\$655.33$.

**7.** Interest for Offer (ii): $10,000 \\times 0.066056 = \\$660.56$.

**8.** Difference: $\\approx \\$5.23$ to $\\$5.24$.

`;

BODY[4] = `**Part 3: Solve.**

**1.** Nominal annual rate: $12 \\times 1.75\\% = 21.00\\%$ (not $22.00\\%$).

**2.** $R = (1.0175)^{12} - 1 \\approx 1.231430 - 1 = 0.231430 \\approx 23.14\\%$ (not $21.75\\%$).

**3.** $FV$ of $\\$2,000$ unpaid for $1$ year: $2,000 \\times 1.231430 = \\$2,462.86$ (not $\\$2,420.00$).

**4.** Gap: $23.14\\% - 21.00\\% = 2.14$ percentage points, which is indeed more than $2.00$ percentage points.

**5.** At a $1.50\\%$ monthly rate: $R = (1.015)^{12} - 1 \\approx 1.195625 - 1 = 0.195625 \\approx 19.56\\%$, which does NOT exceed $20\\%$.

`;

BODY[5] = `**Part 3: Solve.**

**1.** Periodic rate: $0.056/4 = 0.014 = 1.40\\%$.

**2.** $R = (1.014)^{4} - 1 \\approx 1.057187 - 1 = 0.057187 \\approx 5.72\\%$.

**3.** $FV = 15,000 \\times 1.057187 = \\$15,857.81$.

**4.** Monthly compounding of the same $5.6\\%$ nominal rate gives a slightly higher EAR ($\\approx 5.746\\%$), not lower — more frequent compounding always raises EAR.

**5.** Gap: $5.7187\\% - 5.60\\% \\approx 0.12$ percentage points, which is less than $0.20$ percentage points.

`;

BODY[6] = `**Part 3: Solve.**

**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.

**2.** Solve $(1.006)^{t} = 2$: $t = \\ln 2 / \\ln 1.006 \\approx 0.693147/0.0059821 \\approx 115.85$ months $\\approx 9.65$ years (not $108$ months).

**3.** $115.85$ months is the correct doubling time, not $58$ months (which is not even close to a clean half of it, since doubling time does not simply relate this way to a half time).

**4.** At $14.4\\%$ nominal monthly, $R = (1.012)^{12} - 1 \\approx 15.38\\%$, but double the original $7.44\\%$ EAR would be $14.88\\%$, not $15.38\\%$ — doubling the nominal rate does not exactly double the EAR.

**5.** The same logarithmic method, $t = \\ln(M)/\\ln(1+i)$ for target multiple $M$, works for any target multiple, since the exponential growth curve is monotonically increasing — this is a general, valid technique.

`;

BODY[7] = `**Part 3: Solve.**

**1.** Semi-annual: $R = (1.075)^{2} - 1 = 1.155625 - 1 = 0.155625 \\approx 15.56\\%$.

**2.** Quarterly: $R = (1.0375)^{4} - 1 \\approx 1.158650 - 1 = 0.158650 \\approx 15.87\\%$.

**3.** Monthly: $R = (1.0125)^{12} - 1 \\approx 1.160766 - 1 = 0.160766 \\approx 16.08\\%$.

**4.** Ranking confirms $15.56\\% < 15.87\\% < 16.08\\%$ as compounding frequency increases.

**5.** First gap: $15.87\\% - 15.56\\% = 0.31$ points; second gap: $16.08\\% - 15.87\\% = 0.21$ points.

**6.** The first gap is actually LARGER than the second, not smaller — each additional increase in frequency adds progressively less to the EAR.

`;

BODY[8] = `**Part 3: Solve.**

**1.** Periodic rate: $0.06/12 = 0.005 = 0.50\\%$; $nt = 12 \\times 10 = 120$.

**2.** $S(10) = 4,000 \\times (1.005)^{120} \\approx 4,000 \\times 1.8194 = \\$7,277.60$.

**3.** Growth factor is $1.8194$, not $2.0$, so the deposit has NOT quite doubled after $10$ years (it would take about $11.6$ years to fully double at this rate).

**4.** Annual compounding ($n = 1$): $S(10) = 4,000 \\times (1.06)^{10} = 4,000 \\times 1.790847 = \\$7,163.39$, which is LESS than $\\$7,277.60$, not more, since less frequent compounding always yields a smaller future value for the same nominal rate.

`;

BODY[9] = `**Part 3: Solve.**

**1.** $(1 + r/4)^{32} = 80,000/50,000 = 1.6$, so $1 + r/4 = (1.6)^{1/32} \\approx 1.014796$, giving $r \\approx 4 \\times 0.014796 \\approx 0.05918 \\approx 5.92\\%$.

**2.** Quarterly periodic rate: $5.92\\%/4 \\approx 1.48\\%$.

**3.** A shorter time horizon ($4$ years instead of $8$) to reach the same growth factor of $1.6$ requires a HIGHER rate, not a lower one, since less time demands faster growth.

**4.** Monthly compounding is more frequent than quarterly, so it needs a LOWER nominal rate, not a higher one, to reach the same $1.6$ growth factor over the same $8$ years.

**5.** Growth: $(80,000 - 50,000)/50,000 = 30,000/50,000 = 0.60 = 60.00\\%$ exactly, which is not more than $65\\%$.

`;

BODY[10] = `**Part 3: Solve.**

**1.** Option (a): with $n = 1$, $R_a = 10.80\\%$ (the nominal rate) exactly.

**2.** Option (b) periodic rate: $0.104/4 = 0.026$.

**3.** $R_b = (1.026)^{4} - 1 \\approx 1.108127 - 1 = 0.108127 \\approx 10.81\\%$.

**4.** Since $R_b \\approx 10.81\\%$ is very slightly higher than $R_a = 10.80\\%$, option (a) is actually marginally cheaper for the borrower, even though its quoted nominal rate is higher.

**5.** Difference: $10.8127\\% - 10.80\\% \\approx 0.013$ percentage points, which is less than $0.05$ percentage points.

`;

BODY[11] = `**Part 3: Solve.**

**1.** $(1.045)^{6} \\approx 1.302253$.

**2.** $S_0 = 40,000/1.302253 \\approx \\$30,715.86$.

**3.** $\\$30,715.86$ is indeed less than $\\$32,000$.

**4.** A higher rate ($5.5\\%$) means the deposit grows faster, so LESS principal is needed today to reach the same $\\$40,000$ in $6$ years — the required present value would be lower, not higher.

**5.** Interest: $40,000 - 30,715.86 = \\$9,284.14$.

`;

BODY[12] = `**Part 3: Solve.**

**1.** Periodic rate: $0.06/12 = 0.005$.

**2.** Target ratio: $6,000/4,000 = 1.5$.

**3.** $t = \\ln(1.5)/\\ln(1.005) \\approx 0.405465/0.0049875 \\approx 81.30$ months $\\approx 6.78$ years.

**4.** This is neither exactly $6.00$ years nor $48$ months ($4$ years) — both are incorrect approximations of the true $81.30$-month figure.

**5.** Doubling time for this account: $\\ln 2/\\ln(1.005) \\approx 138.99$ months; half of that is $\\approx 69.5$ months.

**6.** The actual time to grow by $1.5\\times$ is $81.30$ months, which is MORE than half the doubling time, not less.

**7.** $t = \\ln(1.5)/\\ln(1.005) \\approx 81.30$ months, not $100$.

`;

BODY[13] = `**Part 3: Solve.**

**1.** Periodic rate: $0.0425/365 \\approx 0.00011644 = 0.011644\\%$.

**2.** $R = (1 + 0.0425/365)^{365} - 1 \\approx 1.043413 - 1 = 0.043413 \\approx 4.34\\%$.

**3.** $FV = 20,000 \\times 1.043413 = \\$20,868.26$.

**4.** Monthly compounding of $4.25\\%$ nominal gives $R \\approx 4.33\\%$, which is slightly LOWER than the daily EAR of $4.34\\%$, not higher — daily compounding is more frequent than monthly.

**5.** Gap: $4.34\\% - 4.25\\% = 0.09$ percentage points, which does not exceed $0.20$ percentage points.

`;

BODY[14] = `**Part 3: Solve.**

**1.** Nominal annual rate: $12 \\times 1.9\\% = 22.80\\%$.

**2.** $R = (1.019)^{12} - 1 \\approx 1.253408 - 1 = 0.253408 \\approx 25.34\\%$.

**3.** $FV$ of $\\$3,000$ unpaid for $1$ year: $3,000 \\times 1.253408 = \\$3,760.22$ (not $\\$3,684.00$).

**4.** Gap: $25.34\\% - 22.80\\% \\approx 2.54$ percentage points, which does not exceed $3.00$ percentage points.

`;

BODY[15] = `**Part 3: Solve.**

**1.** Semi-annual: $R = (1.05)^{2} - 1 = 1.1025 - 1 = 0.1025 = 10.25\\%$.

**2.** Quarterly: $R = (1.025)^{4} - 1 \\approx 1.103813 - 1 = 0.103813 \\approx 10.38\\%$.

**3.** Monthly: $R = (1.0083333)^{12} - 1 \\approx 1.104713 - 1 = 0.104713 \\approx 10.47\\%$.

**4.** Confirms increasing $R$ with increasing frequency: $10.25\\% < 10.38\\% < 10.47\\%$.

**5.** First jump: $10.38\\% - 10.25\\% = 0.13$ points; second jump: $10.47\\% - 10.38\\% = 0.09$ points — the first jump is LARGER than the second, not smaller.

`;

BODY[16] = `**Part 3: Solve.**

**1.** $(1 + r)^{80} = 50$, so $r = 50^{1/80} - 1 \\approx 1.050115 - 1 = 0.050115 \\approx 5.01\\%$.

**2.** This is not $6.25\\%$.

**3.** Growth rates are found via a root (an exponential relationship), not a simple linear halving of the target multiple, so a rate for $50\\times$ growth is not simply half the rate for $100\\times$ growth.

**4.** At $r = 5.01\\%$, after $160$ years the growth factor is $(1.050115)^{160} = (50)^{2} = 2,500$, not $100$.

**5.** Achieving the same $50\\times$ growth in only $40$ years (half the time) requires solving $r = 50^{1/40} - 1 \\approx 9.65\\%$, which is HIGHER than $5.01\\%$, not lower — less time always demands a faster rate for the same target multiple.

`;

BODY[17] = `**Part 3: Solve.**

**1.** Account X: $(1 + 0.05/12)^{84} \\approx 1.418038$, so $S_{0,X} = T/1.418038 \\approx \\$17,629.99$.

**2.** Account Y: $(1 + 0.051/4)^{28} \\approx 1.425964$, so $S_{0,Y} = T/1.425964 \\approx \\$17,534.28$.

**3.** Since $S_{0,Y} < S_{0,X}$, Account Y actually requires the SMALLER upfront deposit, not Account X.

**4.** $R_X = (1 + 0.05/12)^{12} - 1 \\approx 5.12\\%$.

**5.** $R_Y = (1.01275)^{4} - 1 \\approx 5.20\\%$.

**6.** Indeed $R_Y > R_X$, consistent with Account Y needing less principal.

**7.** This scenario itself is a counterexample to statement (e): despite compounding more often, Account X needs the LARGER deposit here, because Account Y's higher nominal rate wins out.

`;

BODY[18] = `**Part 3: Solve.**

**1.** Periodic rate: $0.044/4 = 0.011$.

**2.** $(1.011)^{36} \\approx 1.482658$, so $S_0 = T/1.482658 \\approx \\$40,467.83$.

**3.** $\\$40,467.83$ is less than $\\$45,000$, not more.

**4.** A higher rate ($5.0\\%$) grows money faster, so a SMALLER amount invested $9$ years ago would reach $\\$60,000$ today — the required present value would be lower, not higher.

**5.** Interest: $60,000 - 40,467.83 = \\$19,532.17$, which does not exceed $\\$20,000$.

`;

BODY[19] = `**Part 3: Solve.**

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

`;

BODY[20] = `**Part 3: Solve.**

**1.** Target ratio: $22,000/15,000 \\approx 1.466667$.

**2.** Account M periodic rate: $0.005$.

**3.** $t = \\ln(1.466667)/\\ln(1.005) \\approx 0.382996/0.0049875 \\approx 76.81$ months $\\approx 6.40$ years.

**4.** Account Q periodic rate: $0.015375$.

**5.** $t = \\ln(1.466667)/\\ln(1.015375) \\approx 0.382996/0.0152580 \\approx 25.10$ quarters $\\approx 6.275$ years, which is FASTER than Account M's $6.40$ years, not identical and not slower.

**6.** $R_M = (1.005)^{12} - 1 \\approx 6.17\\%$.

**7.** $R_Q = (1.015375)^{4} - 1 \\approx 6.29\\%$.

**8.** So $R_Q > R_M$, consistent with Q reaching the target faster.

`;

BODY[21] = `**Part 3: Solve.**

**1.** $S(1) = 4,500 \\times e^{0.05} = 4,500 \\times 1.0512711 = \\$4,730.72$.

**2.** Interest: $4,730.72 - 4,500.00 = \\$230.72$.

**3.** Annual ($m = 1$) compounding at $5\\%$: $S = 4,500 \\times 1.05 = \\$4,725.00$.

**4.** Difference: $4,730.72 - 4,725.00 = \\$5.72$.

**5.** $e^{0.05} = 1.0512711$, which rounds to $1.0513$, not $1.0400$.

`;

BODY[22] = `**Part 3: Solve.**

**1.** $S(6) = 3,200 \\times e^{0.08 \\times 6} = 3,200 \\times e^{0.48} = 3,200 \\times 1.6161681 = \\$5,171.44$.

**2.** $S(3) = 3,200 \\times e^{0.08 \\times 3} = 3,200 \\times e^{0.24} = 3,200 \\times 1.2712492 = \\$4,067.998 \\approx \\$4,068.00$; doubling gives $\\$8,135.99$, which does not equal $S(6)$.

**3.** Interest: $5,171.44 - 3,200.00 = \\$1,971.44$, not $\\$2,000.00$.

**4.** $S(12) = 3,200 \\times e^{0.08 \\times 12} = 3,200 \\times e^{0.96} = 3,200 \\times 2.6116965 = \\$8,357.43$.

**5.** Double of $S(6)$: $2 \\times 5,171.44 = \\$10,342.88$; since $\\$8,357.43 < \\$10,342.88$, the $12$-year balance is indeed less than double the $6$-year balance.

`;

BODY[23] = `**Part 3: Solve.**

**1.** EAR: $e^{0.09} - 1 = 1.0941743 - 1 = 0.0941743 \\approx 9.42\\%$.

**2.** $S(1) = 15,000 \\times e^{0.09} = 15,000 \\times 1.0941743 = \\$16,412.61$.

**3.** Difference from nominal: $9.4174\\% - 9.00\\% = 0.4174$ percentage points.

**4.** At $18\\%$: $\\mathrm{EAR} = e^{0.18} - 1 = 1.1972174 - 1 = 0.1972174 \\approx 19.72\\%$.

**5.** Double of the original EAR: $2 \\times 9.4174\\% = 18.8349\\%$; since $19.72\\% > 18.83\\%$, the new EAR does exceed double the original.

`;

BODY[24] = `**Part 3: Solve.**

**1.** $K_{\\mathrm{yearly}} = 1 + 0.10 = 1.1000$.

**2.** $K_{\\mathrm{semi}} = (1.05)^{2} = 1.1025$.

**3.** $K_{\\mathrm{cont}} = e^{0.10} = 1.1051709$.

**4.** $75,000 \\times (K_{\\mathrm{cont}} - K_{\\mathrm{semi}}) = 75,000 \\times (1.1051709 - 1.1025) = 75,000 \\times 0.0026709 = \\$200.32$, not $\\$250.32$.

**5.** $75,000 \\times (K_{\\mathrm{semi}} - K_{\\mathrm{yearly}}) = 75,000 \\times 0.0025 = \\$187.50$; comparing $187.50$ to $200.32$, the semi-vs-yearly gap is actually the smaller of the two.

`;

BODY[25] = `**Part 3: Solve.**

**1.** $S(1) = 95,000 \\times e^{0.045} = 95,000 \\times 1.0460279 = \\$99,372.65$, not $\\$98,500.00$.

**2.** $S(2) = 95,000 \\times e^{0.09} = 95,000 \\times 1.0941743 = \\$103,946.56$.

**3.** Increase ($0 \\to 1$): $99,372.65 - 95,000.00 = \\$4,372.65$.

**4.** Increase ($1 \\to 2$): $103,946.56 - 99,372.65 = \\$4,573.91$.

**5.** The textbook property $S(t + 1) = S(t)\\times e^{r}$ establishes that the SAME factor $e^{0.045} \\approx 1.0460$ is applied every year, regardless of the current balance.

**6.** At $9\\%$: $e^{0.09} = 1.0941743$, which is far less than $2 \\times e^{0.045} = 2.0920557$.

`;

BODY[26] = `**Part 3: Solve.**

**1.** $v(4) = 60,000 \\times e^{-0.10 \\times 4} = 60,000 \\times e^{-0.40} = 60,000 \\times 0.6703200 = \\$40,219.20$.

**2.** $v(7) = 60,000 \\times e^{-0.10 \\times 7} = 60,000 \\times e^{-0.70} = 60,000 \\times 0.4965853 = \\$29,795.12$.

**3.** Percentage of original: $40,219.20 / 60,000 = 0.670320 \\approx 67.03\\%$.

**4.** At $\\delta = 0.20$: $v(4) = 60,000 \\times e^{-0.80} = 60,000 \\times 0.4493290 = \\$26,959.74$, which is above $\\$25,000$, not below it.

**5.** $v(1) = 60,000 \\times e^{-0.10} = \\$54,290.25$, so year-$1$ loss: $60,000 - 54,290.25 = \\$5,709.75$.

**6.** $v(3) = 60,000 \\times e^{-0.30} = \\$44,449.09$, so year-$4$ loss: $v(3) - v(4) = 44,449.09 - 40,219.20 = \\$4,229.89$.

`;

BODY[27] = `**Part 3: Solve.**

**1.** $\\ln(2) = 0.693147$.

**2.** $t = 0.693147 / 0.055 = 12.6027$ years.

**3.** At $11\\%$: $t = 0.693147 / 0.11 = 6.3013$ years, which is half of $12.6027$, not unchanged.

**4.** $S(12.6027) = 18,000 \\times e^{0.055 \\times 12.6027} = 18,000 \\times e^{0.693147} = 18,000 \\times 2 = \\$36,000.00$.

**5.** After $3$ doubling periods ($37.8080$ years), the growth factor is $2 \\times 2 \\times 2 = 8$, so $S = 18,000 \\times 8 = \\$144,000.00$, not $6 \\times 18,000 = \\$108,000.00$.

`;

BODY[28] = `**Part 3: Solve.**

**1.** $1/0.40 = 2.5$, and $\\ln(2.5) = 0.916291$.

**2.** $t = 0.916291 / 0.18 = 5.0905$ years.

**3.** $v(5.0905) = 120,000 \\times 0.40 = \\$48,000.00$.

**4.** At $\\delta = 0.09$: $t = 0.916291 / 0.09 = 10.1810$ years, which is indeed double $5.0905$ years, since halving $\\delta$ doubles $t$.

**5.** For $80\\%$ loss (retain $20\\%$): $1/0.20 = 5$, $\\ln(5) = 1.609438$.

**6.** $t = 1.609438 / 0.18 = 8.9413$ years, which is longer than $5.0905$ years.

`;

BODY[29] = `**Part 3: Solve.**

**1.** At $3\\%$, $1$ yr: $S_{\\mathrm{cont}} = 25,000 \\times e^{0.03} = \\$25,761.36$.

**2.** $S_{\\mathrm{annual}} = 25,000 \\times 1.03 = \\$25,750.00$.

**3.** Gap: $\\$11.36$.

**4.** At $15\\%$, $1$ yr: $S_{\\mathrm{cont}} = 25,000 \\times e^{0.15} = \\$29,045.86$.

**5.** $S_{\\mathrm{annual}} = 25,000 \\times 1.15 = \\$28,750.00$.

**6.** Gap: $\\$295.86$.

**7.** Ratio: $295.86 / 11.36 \\approx 26.04$, which is less than $30$.

**8.** At $3\\%$, $8$ yrs: $S_{\\mathrm{cont}} = 25,000 \\times e^{0.24} = \\$31,781.23$.

**9.** $S_{\\mathrm{annual}}(8) = 25,000 \\times (1.03)^{8} = 25,000 \\times 1.266770 = \\$31,669.25$.

**10.** $8$-year gap: $31,781.23 - 31,669.25 = \\$111.98$.

`;

BODY[30] = `**Part 3: Solve.**

**1.** Fund A: $S_A = 400,000 \\times e^{0.095} = 400,000 \\times 1.0996589 = \\$439,863.54$.

**2.** Fund B (monthly) periodic rate: $0.095/12 = 0.0079167$.

**3.** $S_B = 400,000 \\times (1.0079167)^{12} = 400,000 \\times 1.0992476 = \\$439,699.03$, not $\\$439,750.00$.

**4.** $EAR_{\\mathrm{max}} = e^{0.095} - 1 \\approx 9.97\\%$, which exceeds the $9.50\\%$ nominal rate; it is not equal to it.

**5.** Fund B (daily): $S_{\\mathrm{daily}} = 400,000 \\times (1 + 0.095/365)^{365} = 400,000 \\times 1.0996453 = \\$439,858.10$, which is still below $S_A = \\$439,863.54$.

**6.** Gap (continuous vs monthly): $439,863.54 - 439,699.03 = \\$164.51$.

**7.** Gap (continuous vs daily): $439,863.54 - 439,858.10 = \\$5.44$, which is narrower than the monthly gap of $\\$164.51$.

`;

BODY[31] = `**Part 3: Solve.**

**1.** $r = \\ln(34,200/28,000)/3 = \\ln(1.221429)/3 = 0.200034/3 = 0.066674 \\approx 6.67\\%$.

**2.** $S(5) = 28,000 \\times e^{0.066674 \\times 5} = 28,000 \\times e^{0.333368} = 28,000 \\times 1.395661 = \\$39,078.52$.

**3.** Average dollar increase over $3$ years: $(34,200 - 28,000)/3 = \\$2,066.67$/year.

**4.** Naive linear projection: $34,200 + 2 \\times 2,066.67 = \\$38,333.33$, which does not equal $\\$39,078.52$.

**5.** Doubling time: $\\ln(2)/0.066674 = 0.693147/0.066674 \\approx 10.3961$ years.

**6.** At $r = 6.00\\%$: $S(3) = 28,000 \\times e^{0.18} = 28,000 \\times 1.197217 = \\$33,522.09$, which is LOWER than the actual observed $\\$34,200.00$, not higher.

`;

BODY[32] = `**Part 3: Solve.**

**1.** $S_X = 60,000 \\times e^{0.068 \\times 2} = 60,000 \\times e^{0.136} = 60,000 \\times 1.145682 = \\$68,740.91$.

**2.** $S_Y = 60,000 \\times (1 + 0.069/12)^{24} = 60,000 \\times (1.00575)^{24} = 60,000 \\times 1.147522 = \\$68,851.32$.

**3.** $S_Z = 60,000 \\times (1 + 0.070/4)^{8} = 60,000 \\times (1.0175)^{8} = 60,000 \\times 1.148882 = \\$68,932.91$.

**4.** Ordering the three results: $\\$68,740.91$ (X) $< \\$68,851.32$ (Y) $< \\$68,932.91$ (Z), so Bank X is actually the LOWEST, not the highest.

**5.** If Bank X's rate were $7.0\\%$ instead of $6.8\\%$: $S_X' = 60,000 \\times e^{0.070 \\times 2} = 60,000 \\times e^{0.14} = 60,000 \\times 1.150274 = \\$69,016.44$, which does exceed Bank Z's $\\$68,932.91$.

`;

BODY[33] = `**Part 3: Solve.**

**1.** $r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07 = 7\\%$.

**2.** $S(6) = 2,000,000 \\times e^{0.07 \\times 6} = 2,000,000 \\times e^{0.42} = 2,000,000 \\times 1.521962 = \\$3,043,923.11$.

**3.** Doubling time: $\\ln(2)/0.07 = 0.693147/0.07 \\approx 9.9021$ years.

**4.** At a $3.5\\%$ fee: $r_{\\mathrm{net}}' = 0.09 - 0.035 = 0.055$.

**5.** $S(6) = 2,000,000 \\times e^{0.33} = 2,000,000 \\times 1.390968 = \\$2,781,936.26$.

**6.** Doubling time: $\\ln(2)/0.055 \\approx 12.6027$ years, which is LONGER than $9.9021$ years, not shorter.

**7.** Comparing: a lower net rate ($5.5\\%$ vs $7\\%$) always produces both a smaller $6$-year value and a longer doubling time.

`;

BODY[34] = `**Part 3: Solve.**

**1.** $t = \\ln(250,000/50,000)/(0.04 + 0.12) = \\ln(5)/0.16 = 1.609438/0.16 = 10.0590$ years.

**2.** $A(10.0590) = 50,000 \\times e^{0.04 \\times 10.0590} = \\$74,767.44$.

**3.** $B(10.0590) = 250,000 \\times e^{-0.12 \\times 10.0590} = \\$74,767.44$ (equal, as required at crossover).

**4.** $A(10) = 50,000 \\times e^{0.40} = 50,000 \\times 1.491825 = \\$74,591.23$.

**5.** $B(10) = 250,000 \\times e^{-1.20} = 250,000 \\times 0.301194 = \\$75,298.55$.

**6.** At $t = 10$, $A(10) = \\$74,591.23 < B(10) = \\$75,298.55$, so A has NOT yet overtaken B at that point — consistent with the crossover occurring slightly later, at $10.06$ years.

**7.** Since $A_0 < B_0$, $A(t) < B(t)$ at $t = 0$, but because $A(t)/B(t) = (A_0/B_0)\\times e^{(r_A + \\delta_B)t}$ grows without bound as $t$ increases (a strictly increasing exponential ratio), the ratio must eventually exceed $1$, guaranteeing a crossover exists.

`;

BODY[35] = `**Part 3: Solve.**

**1.** Annual: $S = 40,000 \\times 1.07 = \\$42,800.00$.

**2.** Quarterly: $S = 40,000 \\times (1.0175)^{4} = 40,000 \\times 1.0718590 = \\$42,874.36$.

**3.** Monthly: $S = 40,000 \\times (1.0058333)^{12} = 40,000 \\times 1.0722901 = \\$42,891.60$.

**4.** Continuous: $S = 40,000 \\times e^{0.07} = 40,000 \\times 1.0725082 = \\$42,900.33$.

**5.** Gap (monthly, quarterly): $42,891.60 - 42,874.36 = \\$17.24$.

**6.** Gap (continuous, monthly): $42,900.33 - 42,891.60 = \\$8.72$; the second gap is SMALLER, not larger.

`;

BODY[36] = `**Part 3: Solve.**

**1.** Option $1$: $S_0 = 100,000 \\times e^{-0.045 \\times 8} = 100,000 \\times e^{-0.36} = 100,000 \\times 0.697676 = \\$69,767.63$.

**2.** Option $2$: $S_0 = 100,000 \\times e^{-0.06 \\times 8} = 100,000 \\times e^{-0.48} = 100,000 \\times 0.618783 = \\$61,878.34$.

**3.** Difference: $69,767.63 - 61,878.34 = \\$7,889.29$, with Option $1$ requiring more upfront.

**4.** Option $1$ over $4$ years: $S_0 = 100,000 \\times e^{-0.045 \\times 4} = 100,000 \\times e^{-0.18} = 100,000 \\times 0.835270 = \\$83,527.02$.

**5.** Comparing: $\\$83,527.02$ ($4$-year requirement) is LARGER than $\\$69,767.63$ ($8$-year requirement), not smaller.

`;

BODY[37] = `**Part 3: Solve.**

**1.** $S(4) = 1,800,000 \\times e^{0.10 \\times 4} = 1,800,000 \\times e^{0.40} = 1,800,000 \\times 1.491825 = \\$2,685,284.46$.

**2.** $S(7) = S(4) \\times e^{0.04 \\times 3} = 2,685,284.46 \\times e^{0.12} = 2,685,284.46 \\times 1.127497 = \\$3,027,649.77$.

**3.** Combined exponent: $r_1 t_1 + r_2 t_2 = (0.10 \\times 4) + (0.04 \\times 3) = 0.40 + 0.12 = 0.52$.

**4.** $r_{\\mathrm{eff}} = 0.52/7 = 0.074286 \\approx 7.43\\%$ (the TIME-WEIGHTED average, not the plain average).

**5.** Plain (unweighted) average: $(0.10 + 0.04)/2 = 0.07 = 7.00\\%$, which does not equal $7.43\\%$.

`;

BODY[38] = `**Part 3: Solve.**

**1.** $\\delta = \\ln(85,000/32,000)/6 = \\ln(2.65625)/6 = 0.976915/6 = 0.162819 \\approx 16.28\\%$.

**2.** Second crane: $v(6) = 85,000 \\times e^{-0.15 \\times 6} = 85,000 \\times e^{-0.90} = 85,000 \\times 0.406570 = \\$34,558.42$.

**3.** Comparing final values: first crane retains $\\$32,000.00$, second crane retains $\\$34,558.42$ — the crane with the LOWER rate ($15\\%$) retains MORE value, not the one with the higher implied rate ($16.28\\%$).

**4.** For a $\\$40,000$ target: $\\delta = \\ln(85,000/40,000)/6 = \\ln(2.125)/6 = 0.753772/6 = 0.125629 \\approx 12.56\\%$, which is lower than $16.28\\%$.

`;

BODY[39] = `**Part 3: Solve.**

**1.** Doubling: $t = \\ln(2)/0.065 = 0.693147/0.065 \\approx 10.6638$ years.

**2.** Tripling: $t = \\ln(3)/0.065 = 1.098612/0.065 \\approx 16.9017$ years.

**3.** Quadrupling: $t = \\ln(4)/0.065 = 1.386294/0.065 \\approx 21.3276$ years.

**4.** Twice the doubling time: $2 \\times 10.6638 = 21.3276$ years, which exactly equals the quadrupling time, since $\\ln(4) = \\ln(2^{2}) = 2\\ln(2)$.

**5.** Ratio of tripling time to doubling time: $\\ln(3)/\\ln(2) \\approx 1.5850$, not $1.5$; value at quadrupling time: $12,000 \\times 4 = \\$48,000.00$.

`;

BODY[40] = `**Part 3: Solve.**

**1.** $A(5) = 150,000 \\times e^{0.06 \\times 5} = 150,000 \\times e^{0.30} = 150,000 \\times 1.349859 = \\$202,478.82$.

**2.** $B(5) = 220,000 \\times e^{-0.09 \\times 5} = 220,000 \\times e^{-0.45} = 220,000 \\times 0.637628 = \\$140,278.19$.

**3.** $C(3) = 100,000 \\times e^{0.08 \\times 3} = 100,000 \\times e^{0.24} = 100,000 \\times 1.271249 = \\$127,124.92$.

**4.** $C(5) = 127,124.92 \\times e^{0.03 \\times 2} = 127,124.92 \\times e^{0.06} = 127,124.92 \\times 1.061837 = \\$134,985.88$.

**5.** Portfolio total: $202,478.82 + 140,278.19 + 134,985.88 = \\$477,742.89$ (rounding to the cent).

**6.** Sum of principals: $150,000 + 220,000 + 100,000 = \\$470,000.00$; the total ($\\$477,742.89$) is MORE than the principal sum, not less.

**7.** If $B_0$ grew instead of shrinking at $9\\%$: $B(5)' = 220,000 \\times e^{0.09 \\times 5} = 220,000 \\times e^{0.45} = 220,000 \\times 1.568312 = \\$345,028.68$, which does exceed $\\$340,000.00$.

`;

BODY[52] = `**Part 3: Solve.**

**1.** $PV_1 = 42,000 \\times (1.06)^{-3} = 42,000/1.191016 \\approx \\$35,264.01$.

**2.** Needed: $PV_2 = 100,000 - 35,264.01 = \\$64,735.99$.

**3.** $K_2 = 64,735.99 \\times (1.06)^{6} = 64,735.99 \\times 1.418519 \\approx \\$91,829.24$.

**4.** If $t_2 = 3$: $K_2 = 64,735.99 \\times (1.06)^{3} = 64,735.99 \\times 1.191016 \\approx \\$77,101.60$.

**5.** At $r = 8\\%$: $K_2 = 64,735.99 \\times (1.08)^{6} = 64,735.99 \\times 1.586874 \\approx \\$102,727.88$.

`;

function toFileText(body) {
  let t = body.replace(/\\/g, "\\\\");
  if (s.includes("\r\n")) t = t.replace(/\n/g, "\r\n");
  return t;
}

// Apply from highest id to lowest so offsets stay valid
const targets = Object.keys(BODY)
  .map(Number)
  .sort((a, b) => b - a);

let touched = 0;
for (const id of targets) {
  const { absP, absA, old } = getP3Range(id);
  const neu = toFileText(BODY[id]);
  if (old === neu) {
    console.log(`math-11-${id}: already ok`);
    continue;
  }
  s = s.slice(0, absP) + neu + s.slice(absA);
  touched++;
  console.log(`math-11-${id}: replaced`);
}

fs.writeFileSync(PATH, s);
console.log(`\nTouched ${touched} tasks.`);

// verify
s = fs.readFileSync(PATH, "utf8");
// rebuild ids
ids.length = 0;
re.lastIndex = 0;
while ((m = re.exec(s))) ids.push({ id: +m[1], idx: m.index });

for (const id of [1, 9, 30, 52]) {
  const { old } = getP3Range(id);
  console.log(`\n===== math-11-${id} =====`);
  console.log(old);
  // scar checks
  if (old.includes("$, $")) console.log("SCAR: split thousands");
  if (/[×÷→δ]/.test(old)) console.log("SCAR: unicode op");
  if (old.includes("\\mathrm{PV}")) console.log("SCAR: mathrm PV");
}
