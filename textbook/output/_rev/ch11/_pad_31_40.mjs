import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) throw new Error(last.slice(-70));
  return [...parts, extra.trim(), last].join("\n\n");
}
function apply(path, extras) {
  const arr = JSON.parse(fs.readFileSync(path, "utf8"));
  for (const t of arr) {
    const ex = extras[t.id];
    if (!ex) continue;
    t.tactical_explanations = t.tactical_explanations.map((letter, i) =>
      ex[i] ? insertBeforeClose(letter, ex[i]) : letter
    );
  }
  fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
}

apply("textbook/output/_rev/ch11/31_40.json", {
  "math-11-31": {
    0: `Six point six seven percent is the continuous rate that turns $\\$28,000$ into $\\$34,200$ in three years. Simple interest would have said about $7.38\\%$. The logarithm is slower because compounding does part of the observed gain. Rounding $0.066674$ to $6.67\\%$ matches the claim. Letters B through E will project, linearize, double, and test 6% with this implied rate. This letter only names $6.67\\%$.`,
    1: `Five years at $6.67\\%$ is two years beyond the observed data. Rolling $\\$34,200$ forward by $e^{0.06667 \\times 2}$ is the same as $28,000 e^{0.33337}$, and both land on $\\$39,078.52$. The straight-line companion in letter C is $\\$38,333$, about $\\$745$ light, because it ignores extra compounding on a larger base in years 4 and 5. The recovered exponential projection is $\\$39,078.52$.`,
    2: `Thirty-eight thousand three hundred thirty-three dollars is two more years of the observed $\\$2,067$ average add. Continuous compounding is a constant rate, not a constant dollar add. Years 4 and 5 add more dollars than the first-three-year average, which is why $S(5) \\approx 39,079$ sits above $38,333$. The two projections are not the same. The stem grew continuously, so the exponential figure is the one that matches the model.`,
    3: `Ten point four zero years is $(\\ln 2)/0.066674$, a doubling of $\\$28,000$ to $\\$56,000$. The claimed $12.40$ years would take the fund to about $\\$64,000$, past a doubling. Two extra years on a 6.67% continuous path is not a rounding of $10.40$. The Rule of $72$ at $6.67\\%$ gives about $10.8$ years, closer to the recovered wait than to $12.40$. The recovered doubling time is $10.40$ years.`,
    4: `Six percent is slower than the implied $6.67\\%$, so it undershoots $\\$34,200$ at the three-year mark, landing at about $\\$33,522$. A slower path cannot exceed the observed balance. Testing a rate above $6.67\\%$ would overshoot. The claim named $6.00\\%$. The recovered 6% three-year value is below $\\$34,200$, not above it.`,
  },
  "math-11-32": {
    0: `Bank X's continuous 6.8% for two years is $60,000 e^{0.136} \\approx 68,740.91$. Annual 6.8% would have left about $\\$68,438$. X has the strongest clock and the lowest quote, and letter D will find that the quote wins that trade. This letter only names X's $\\$68,740.91$. The cents, $91$, match the exponential product.`,
    1: `Bank Y quotes $0.10$ points more than X and compounds monthly. That extra quote outweighs X's continuous clock, so Y finishes about $\\$110$ higher at $\\$68,851.32$. Giving Y a continuous clock it does not have would overstate Y. The recovered monthly 6.9% path over $24$ periods is $\\$68,851.32$, matching the claim.`,
    2: `Bank Z quotes 7.0% quarterly and finishes highest at $\\$68,932.91$, about $\\$82$ above Y. The extra $0.10$ points over Y outweigh Y's extra monthly dates. Letter D will rank $X < Y < Z$. This letter only names Z's $\\$68,932.91$. The treasurer who takes Z takes the highest two-year value of the three offers.`,
    3: `Ranking by clock would put continuous X first. Ranking by recovered dollars puts X last. A $0.20$ point hole in the printed quote is too much for the continuous ceiling to fill against Z's 7.0% quarterly. If all three quoted 7.0%, X would win, which is letter E. On this stem the quotes differ, and X is lowest at $\\$68,740.91$.`,
    4: `Raising X to 7.0% continuous produces about $\\$69,016$, which beats Z's $\\$68,933$ by about $\\$83$. That is the textbook ceiling once quotes match: continuous beats any finite frequency. Letter D failed because the quotes did not match. This letter equalizes them at 7.0% and the ranking flips. The recovered matched-rate X exceeds Z.`,
  },
  "math-11-33": {
    0: `A 2% continuous fee on a 9% gross return is a 7% net return, not 11%. Adding the fee describes a cost piled on growth. Subtracting it describes a drag. Part 3.1 recovered $0.09 - 0.02 = 0.07$. Every later letter uses 7% net. Getting the sign wrong would inflate $S(6)$ and shrink the doubling time, which is how letters B and C go wrong if the 11% leak is allowed.`,
    1: `Three million forty-three thousand nine hundred twenty-three dollars is $2,000,000 e^{0.42}$. The claimed $\\$3,100,000$ sits between that net path and the gross $e^{0.54}$ path near $\\$3,430,000$. Annual 7% would have left about $\\$3,001,000$. None of those companions is $\\$3,100,000$. The recovered six-year net value is about $\\$3,043,923$. Naming $\\$3,100,000$ overstates it by about $\\$56,000$.`,
    2: `Nine point nine zero years is $(\\ln 2)/0.07$. Seven years is a Rule-of-72 fragment on the gross 9%, ignoring the fee. Rule of $72$ at 7% gives about $10.3$ years, closer to $9.90$ than to $7.00$. The fee lengthens the wait. Using the gross 9% shortens it, which is the trap. The recovered net doubling time is $9.90$ years, not $7.00$.`,
    3: `The six-year value at a 3.5% fee really is about $\\$2,781,936$, so that half of the claim is right. The doubling time at 5.5% net is about $12.60$ years, which is longer than $9.90$, not shorter. A conjunction is false if either half is false. "Shorten" has the direction backwards. A heavier fee lengthens the wait to double.`,
    4: `Raising the fee lowers $r_{\\mathrm{net}}$ at every future date: $\\$3,043,923$ at 2% against $\\$2,781,936$ at 3.5%, and $9.90$ years to double against $12.60$. All else equal, a higher fee is strictly worse for the investor. A fee cannot raise the net rate. It is a drag on $9\\%$ gross, and a larger drag leaves less.`,
  },
  "math-11-34": {
    0: `The rates add because A grows and B decays, so the ratio $A/B$ grows at $0.16$. Subtracting $\\delta_B$ would describe two growing assets racing, which is not this stem. The displayed $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$ is the Part 2 inversion, and it matches the claim. Letter B will plug in $\\ln 5 / 0.16$. This letter is the algebra.`,
    1: `Ten point zero six years is when $50,000 e^{0.04 t}$ meets $250,000 e^{-0.12 t}$, at about $\\$74,767$ each. Ignoring B's decay and waiting for A to grow to $\\$250,000$ would take about $40$ years. B is falling as A is rising, so they meet much sooner. The recovered crossover is $10.06$ years at $\\$74,767.44$, matching the claim.`,
    2: `At $t = 10$ exactly, A is about $\\$74,591$ and B is about $\\$75,299$. A is still $\\$707$ behind. Rounding $10.06$ down to $10$ skips about three weeks in which A still has to catch that $\\$707$. The crossover is at $10.06$, not at $10$. The claim said A is already ahead at $t = 10$. It is not.`,
    3: `The ratio $A/B$ starts at $1/5$ and grows like $e^{0.16 t}$, which reaches $1$ at $10.06$ years and then keeps climbing. Never-overtaking would need $r_A + \\delta_B \\le 0$. Here that sum is $0.16 > 0$, so a crossing is guaranteed. Letter B already found the date. The "never" wording is the claim, and that date refutes it.`,
    4: `A rising exponential and a falling exponential meet at most once. After $10.06$ years, A stays ahead. Letter C showed A still behind at $t = 10$. Letter B showed they meet at $10.06$. After that, this letter holds. For the opposite verdict B would have to start growing, or A decaying, after the crossover. The stem holds both trends.`,
  },
  "math-11-35": {
    0: `Forty thousand dollars times $1.07$ is $\\$42,800$ exactly. That is the floor of the four-clock ladder. Continuous compounding will sit at $\\$42,900.33$. This letter is only the annual credit. A solver who jumped to $e^{0.07}$ would be answering letter E's ceiling. The recovered annual value is $\\$42,800.00$, matching the claim.`,
    1: `Quarterly $7\\%$ leaves about $\\$42,874.36$. Monthly $7\\%$ leaves about $\\$42,891.60$. Both sit between the annual floor and the continuous ceiling, which is the ranking letter C will name. Swapping the two figures would still keep quarterly below monthly. The recovered pair matches the claim: $42,874.36$ and $42,891.60$.`,
    2: `Annual < quarterly < monthly < continuous is the textbook ranking at a shared 7% quote: $42,800.00 < 42,874.36 < 42,891.60 < 42,900.33$. Monthly cannot overtake continuous, because continuous is the limit. The four recovered values rise with frequency and stop at the ceiling, matching the claim.`,
    3: `The step from quarterly to monthly is $\\$17.24$. The step from monthly to continuous is about $\\$8.73$. The first of those two last steps is larger, not smaller. Diminishing returns: $n = 4$ to $n = 12$ still captures more leftover compounding than $n = 12$ to $n = \\infty$ at 7%. The claim reversed those two gaps.`,
    4: `Daily or hourly compounding would sit in the $\\$8.73$ remaining gap between monthly and continuous, never above $\\$42,900.33$. No finite $m$ beats $e^{0.07}$ at this 7% quote. Letter D's remaining $\\$8.73$ is the most any finite schedule can still capture. It cannot be captured past the ceiling. The recovered continuous value is the maximum.`,
  },
  "math-11-36": {
    0: `Option 1 at 4.5% continuous for eight years needs $100,000 e^{-0.36} \\approx 69,767.63$ today. Annual 4.5% would have needed about $\\$70,188$, a slightly weaker discount. The recovered continuous deposit is $\\$69,767.63$. Letter B will put Option 2 below this figure because 6% does more of the work. This letter only names Option 1.`,
    1: `Option 2 at 6% continuous needs $100,000 e^{-0.48} \\approx 61,878.34$, about $\\$7,889$ less than Option 1. Faster growth, smaller present value of a fixed $\\$100,000$ target. Reusing $\\$69,768$ for Option 2 would ignore the extra $1.5$ points of rate. The recovered Option 2 deposit is $\\$61,878.34$, matching the claim.`,
    2: `The faster account needs less today, not more. $61,878 < 69,768$. A parent who thought a higher rate was a more expensive product would agree with the claim. The parent is discounting a fixed bill. Higher rate, smaller opening check. Letter D will also mis-assign the gap. This letter is the ranking: Option 2 is the smaller deposit.`,
    3: `The gap is $\\$7,889$, with Option 1 larger, not $\\$9,000$ with Option 2 larger. Both the size and the assignment in the claim fail. Rounding $69,768 - 61,878$ to $\\$8,000$ would still not be $\\$9,000$, and it would still assign the larger amount to Option 1. The recovered difference is $\\$7,889.29$, Option 1 minus Option 2.`,
    4: `Four years of 4.5% continuous need $100,000 e^{-0.18} \\approx 83,527$ today, about $\\$13,759$ more than the eight-year requirement. Less time for the account to work means more cash from the parent. A shorter wait is not "less work" for the wallet. The stem keeps the $\\$100,000$ target, so halving the horizon raises the required deposit, not lowers it.`,
  },
  "math-11-37": {
    0: `Four years of 10% continuous on $\\$1,800,000$ is $e^{0.40}$ and about $\\$2,685,284$. Annual 10% would have left about $\\$2,636,000$. The recovered expansion-phase endpoint is $\\$2,685,284.46$. Letter B will grow this by $e^{0.12}$ through the 4% maturity phase. This letter only names year 4.`,
    1: `Seven years is $e^{0.52}$ on the original base, about $\\$3,027,650$, which is also $S(4) \\times e^{0.12}$. Annual 4% on the second phase would be a little light. Letter C will call $0.52 / 7 \\approx 7.43\\%$ the constant equivalent. This letter only names the year-7 revenue $\\$3,027,649.77$.`,
    2: `Seven point four three percent is the time-weighted average, $0.52/7$, not a 50-50 mix of 10% and 4%. Checking $e^{0.074286 \\times 7} = e^{0.52}$ reproduces $S(7)$. The constant 7.43% is equivalent to the two-phase path at the seven-year mark. The recovered effective rate is $7.43\\%$, matching the claim.`,
    3: `Unweighted $7.00\\%$ understates the four expansion years. Time weights are $4/7$ on 10% and $3/7$ on 4%, which is $7.43\\%$. The extra $0.43$ of a point is exactly that overweighting of the faster phase. If the phases had equal length, the unweighted average would match. They do not: four then three. The effective rate is higher than $7.00\\%$.`,
    4: `Multiplication commutes, so $e^{0.12} e^{0.40} = e^{0.40} e^{0.12}$. The path would change if 4% came first: year 3 would be lower. The year-7 endpoint would not change, because the total exponent is still $0.52$. Deposits added along the way would break that commutativity. The stem is a single opening base. Reversed phases leave the same year-7 revenue.`,
  },
  "math-11-38": {
    0: `The growth-rate inversion $\\ln(S(t)/S_0)/t$ has the ratio backwards for a write-down. Depreciation needs $\\ln(v_0 / v(t))/t$, which Part 3.1 used. The displayed $\\ln(v(t)/v_0)/t$ would return $-16.28\\%$, a growth rate, which is not a write-down. The claim's formula is the false one. The recovered formula swaps the ratio.`,
    1: `Sixteen point two eight percent is $\\ln(85,000/32,000)/6$. The false formula from letter A would have given the negative of that. A linear write-down $(1 - 32/85)/6 \\approx 10.4\\%$ is a different, slower clock. The recovered continuous implied rate is $16.28\\%$, matching the claim. Letters C through E will compare this with a 15% crane and a $\\$40,000$ target.`,
    2: `The 15% crane retains $85,000 e^{-0.90} \\approx 34,558$, not $\\$36,000$. Fourteen hundred dollars of overstatement is a rounded factor near $0.424$ instead of $e^{-0.90} \\approx 0.4066$. The recovered six-year value at the known 15% rate is $\\$34,558.42$. Naming $\\$36,000$ overstates what the slower crane keeps.`,
    3: `Thirty-two thousand dollars is below $\\$34,558$, so the first crane, with the higher implied rate $16.28\\%$, retains less, not more. Ranking by rate would have predicted that: faster write-down, less remaining value. Ranking by "policy floor" as if a known target were a cushion fails, because the floor is the lower number. The first crane retains less than the second.`,
    4: `A $\\$40,000$ target is a gentler write-down than $\\$32,000$ over the same six years, so the implied $\\delta$ falls to about $12.56\\%$. Tougher policy would be a lower remaining value, not a rounder higher one. $12.56\\% < 16.28\\%$. The recovered $\\$40,000$ implied rate is lower than $16.28\\%$, not higher.`,
  },
  "math-11-39": {
    0: `Ten point six six years is $\\ln 2 / 0.065$, about $10.6638$ rounded. The Rule of $72$ at $6.5\\%$ gives $11.1$ years, a cousin, not the recovered logarithm. Letters C and E will compare tripling and quadrupling with this $10.66$. This letter only names the doubling time at $6.5\\%$ continuous.`,
    1: `Sixteen point nine zero years is $\\ln 3 / 0.065$. Linear scaling $1.5 \\times 10.66 = 15.99$ undershoots by about $0.91$ years, which is letter E's comparison. The recovered tripling time is $16.90$ years, matching the claim. Rounding $16.9017$ to $16.90$ is that approximation.`,
    2: `Quadrupling is two doublings because $\\ln 4 = 2 \\ln 2$, so $t_4 = 2 t_2$ exactly in the logarithm. The recovered $21.33$ years matches $2 \\times 10.66$ up to rounding. Tripling is not a power of $2$, which is why letter E fails. Quadrupling is that special case, and the claim's "exactly equal to twice the doubling time" holds.`,
    3: `Four times $\\$12,000$ is $\\$48,000$ exactly, the balance at the quadrupling date by definition. Rebuilding $12,000 e^{0.065 \\times 21.33}$ lands on the same $\\$48,000$. The direct route $12,000 \\times 4$ is enough. The cents are zeros because the multiple and the principal are round. The recovered quadrupled value is $\\$48,000.00$.`,
    4: `Three is $1.5$ times two as a multiple, but $\\ln 3 / \\ln 2 \\approx 1.585$, not $1.5$. The extra $0.91$ years above $15.99$ is the logarithm's curvature. Early growth is slower in the multiple, so a 3-times target sits later than $1.5$ doubling times. Quadrupling was the power-of-two exception. Tripling is not. The recovered tripling time is not $1.5$ doubling times.`,
  },
  "math-11-40": {
    0: `Asset A's five-year 6% continuous path is $150,000 e^{0.30} \\approx 202,478.82$. Annual 6% would have left about $\\$200,734$. The extra is continuous compounding on this private-equity stake. Letters D and E will add this to B and C. This letter only names $A(5) \\approx 202,478.82$, matching the claim.`,
    1: `Asset B's five-year 9% continuous depreciation is $220,000 e^{-0.45} \\approx 140,278.19$. Discrete annual 9% would be a little lighter. Letter E will flip this exponent's sign and turn $\\$140,278$ of decay into about $\\$345,029$ of growth. This letter only names the decay-path value $\\$140,278.19$.`,
    2: `Asset C's two phases add to exponent $0.30$, the same as A's, so C shares A's growth factor $e^{0.30} \\approx 1.34986$ on a $\\$100,000$ base, about $\\$134,986$. The claimed $\\$130,000$ is a 30% simple gain, about $\\$4,986$ light. The recovered $C(5)$ is $\\$134,985.88$, not $\\$130,000$.`,
    3: `B drops about $\\$80,000$, which looks like a portfolio loss until A's $\\$52,479$ gain and C's $\\$34,986$ gain are added. Together those gains more than cover B's drop, leaving the portfolio about $\\$7,743$ above the starting $\\$470,000$. The combined five-year value is $\\$477,743$, which is not less than the original principals.`,
    4: `Growth-path B is $220,000 e^{0.45} \\approx 345,029$, about $\\$5,029$ above $\\$340,000$. The decay-path $\\$140,278$ and this growth-path $\\$345,029$ multiply back to $220,000^{2}$ because the exponents cancel. Rounding $\\$345,029$ to the nearest ten thousand is $\\$350,000$, still above $\\$340,000$. The recovered growth-path value exceeds $\\$340,000$.`,
  },
});
console.log("padded 31-40");
