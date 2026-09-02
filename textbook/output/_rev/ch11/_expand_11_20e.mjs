import fs from "node:fs";

const path = "textbook/output/_rev/ch11/11_20.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function pack(letter, stmt, key, blocks) {
  const v = key ? "true" : "false";
  const V = key ? "True" : "False";
  return `**${letter}) ${stmt}.**  (${v})\n\n${blocks.filter(Boolean).join("\n\n")}\n\nso the statement is ${V}.`;
}
function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const patches = {
  "math-11-18": [
    pack("A", "The growth factor over the 9 years is approximately 1.4827.", true, [
      `The trustee is rolling money forward nine years at 4.4% quarterly. Thirty-six quarters at the recovered $i = 0.011$ produce the growth factor. Part 3.2 recovered $(1.011)^{36} \\approx 1.482658$, which rounds to $1.4827$. This letter is reading that factor.`,
      `**1.** The trap is $1 + 9 \\times 0.044 = 1.396$, simple interest over nine years. That undershoots because it ignores compounding.`,
      `**2.** Another mix-up is $(1.044)^{9} \\approx 1.474$, annual compounding at 4.4%. Quarterly is stronger, so the recovered $1.4827$ sits a little above that annual factor.`,
      `**3.** Rounding $1.482658$ to $1.4827$ is the claim's approximation. Letter B will divide $\\$60,000$ by this factor.`,
      `The recovered nine-year factor is about $1.4827$`,
    ]),
    pack("B", "The amount that needed to be invested 9 years ago is approximately \\$40,467.83.", true, [
      `The original investment is the $\\$60,000$ target divided by the recovered factor. Part 3.2 already did that division and left $S_0 \\approx 40,467.83$. This letter is reading that present value, not rebuilding $(1.011)^{36}$.`,
      `**1.** A rushed solver who multiplied $\\$60,000$ by $1.4827$ would be rolling the target forward instead of back, and would land near $\\$89,000$.`,
      `**2.** A solver who used $60,000 / 1.474 \\approx 40,705$ would be discounting on the annual clock. Quarterly discounting is slightly stronger, so the recovered $\\$40,467.83$ is a little smaller.`,
      `**3.** The cents, $83$, match Part 3.2. Letter C will test this deposit against $\\$45,000$. Letter E will subtract it from $\\$60,000$.`,
      `What would have to change for the opposite verdict is a different target, rate, or wait. Under $\\$60,000$ at 4.4% quarterly for nine years, the recovered opening amount is $\\$40,467.83$.`,
      `The recovered investment is about $\\$40,467.83$`,
    ]),
    pack("C", "This present value is more than \\$45,000.", false, [
      `The cutoff is $\\$45,000$ sitting next to the recovered deposit. Part 3.2 recovered $S_0 \\approx 40,467.83$. Part 3.3 already compared $40,467.83 < 45,000$.`,
      `The gap against the cutoff is`,
      `$$45,000 - 40,467.83 = 4,532.17$$`,
      `so the present value sits about $\\$4,532$ *below* $\\$45,000$, not above it.`,
      `**1.** The trap is rounding $\\$40,468$ up to $\\$45,000$ as a "nearby round number," or confusing the $\\$60,000$ target with a present-value cutoff.`,
      `**2.** A solver who used simple-interest discounting would get a larger opening amount, still not above $\\$45,000$ at this rate. The recovered compound figure is $\\$40,467.83$.`,
      `**3.** The opposite verdict would need a recovered $S_0$ above $\\$45,000$, which would take a lower rate or a shorter wait. At 4.4% quarterly for nine years, $S_0$ is $\\$40,467.83$.`,
      `The recovered present value is $\\$40,467.83$, which is less than $\\$45,000$`,
    ]),
    pack("D", "If the rate had instead been 5.0% nominal, the required present value would be higher than at 4.4%.", false, [
      `A higher rate enlarges the growth factor and shrinks the deposit needed for a fixed $\\$60,000$ target. Part 3.4 already stated that direction. The new conversion at 5.0% quarterly over the same 36 periods is this letter's extra arithmetic:`,
      `$$\\left(1 + \\frac{0.05}{4}\\right)^{36} \\approx 1.563944, \\qquad S_0 \\approx \\frac{60,000}{1.563944} \\approx 38,365$$`,
      `Against the recovered $4.4\\%$ deposit of $\\$40,467.83$ that is`,
      `$$38,365 < 40,468$$`,
      `so the 5.0% path needs about $\\$2,100$ less up front, not more.`,
      `**1.** The trap is thinking "higher rate, more money," which is true of a future value on a *fixed* deposit. Here the target is fixed. Higher rate means less money today.`,
      `**2.** A rushed solver who scaled $\\$40,468$ up by $5.0/4.4$ would have the wrong direction.`,
      `**3.** The opposite verdict would hold if the question were about the nine-year *balance* on a fixed $\\$40,468$ deposit. That future value would be higher at 5.0%. The claim is about the required present value.`,
      `Faster growth means a smaller opening balance`,
    ]),
    pack("E", "The implied total interest earned over the 9 years on this investment is more than \\$20,000.", false, [
      `Interest is the target minus the original investment. Part 3.2 recovered $S_0 \\approx 40,467.83$. Part 3.5 already subtracted and left $19,532.17$.`,
      `The gap against the $\\$20,000$ cutoff is`,
      `$$20,000 - 19,532.17 = 467.83$$`,
      `so the interest sits about $\\$468$ short of $\\$20,000$.`,
      `**1.** A rushed solver who used $60,000 - 40,000 = 20,000$ would hit the cutoff by rounding the deposit to a round $\\$40,000$. The recovered deposit is $\\$40,467.83$, and the interest is $\\$19,532.17$.`,
      `**2.** Another mix-up is $60,000 \\times 0.044 \\times 9 = 23,760$, simple interest on the *target*. That overshoots $\\$20,000$ and uses the wrong principal.`,
      `**3.** The opposite verdict would need a recovered $S_0$ below $\\$40,000$. Under the stem, $S_0$ is $\\$40,467.83$ and interest is $\\$19,532.17$.`,
      `The recovered interest is $\\$19,532.17$, which is not more than $\\$20,000$`,
    ]),
  ],
  "math-11-19": [
    pack("A", "CD1's effective annual rate is approximately 6.49%.", true, [
      `CD1 is the 6.30% monthly certificate. The effective annual rate converts twelve monthly credits into a yearly yield. Part 3.2 recovered $R_1 \\approx 6.49\\%$. This letter is reading that conversion, not rebuilding $(1.00525)^{12}$.`,
      `The extra against the printed 6.30% is`,
      `$$6.49\\% - 6.30\\% = 0.19$$`,
      `so monthly crediting lifts CD1 by about $0.19$ of a point.`,
      `**1.** A solver who left the yield at $6.30\\%$ would be describing annual compounding. The stem pays monthly.`,
      `**2.** Rounding $0.064852$ to $6.49\\%$ is the claim's approximation. It is not $6.30\\%$ and not $6.55\\%$.`,
      `**3.** Letters B and C convert CD2 and CD3. Letter D will rank all three. This letter only asks for CD1's own effective rate.`,
      `The recovered CD1 effective rate is about $6.49\\%$`,
    ]),
    pack("B", "CD2's effective annual rate is approximately 6.55%.", true, [
      `CD2 is the 6.40% quarterly certificate. Part 3.4 recovered $R_2 \\approx 6.55\\%$. This letter is reading that conversion, not rebuilding $(1.016)^{4}$.`,
      `The extra against the printed 6.40% is`,
      `$$6.55\\% - 6.40\\% = 0.15$$`,
      `so four quarterly credits lift CD2 by about $0.15$ of a point.`,
      `**1.** The trap is reusing CD1's $6.49\\%$. Different quote, different clock. CD2 starts higher and finishes higher.`,
      `**2.** Rounding $0.065533$ to $6.55\\%$ is the claim's approximation. Letter C will find CD3 at essentially the same hundredth.`,
      `**3.** A solver who split $6.40/12$ as if CD2 were monthly would get a different conversion. The stem pays CD2 quarterly.`,
      `The recovered CD2 effective rate is about $6.55\\%$`,
    ]),
    pack("C", "CD3's effective annual rate is approximately 6.55%, essentially the same as CD2's.", true, [
      `CD3 is the 6.45% semi-annual certificate. Part 3.6 recovered $R_3 \\approx 6.55\\%$. CD2 was $R_2 \\approx 6.55\\%$ as well. The two certificates are tied to a hundredth of a point.`,
      `The tiny gap between the unrounded factors is`,
      `$$0.065540 - 0.065533 = 0.000007$$`,
      `about $0.0007$ of a percentage point, far below a published hundredth.`,
      `**1.** A rushed solver who ranked the printed quotes $6.45 > 6.40$ would expect CD3 to win clearly. After conversion they tie, because CD2 compounds four times and CD3 only twice.`,
      `**2.** "Essentially the same" is the right reading of two $6.55\\%$ figures that differ in the fifth decimal of $R$.`,
      `**3.** The opposite verdict would need a gap of a few hundredths. The recovered pair is a tie at the published precision.`,
      `The recovered CD3 yield is about $6.55\\%$, matching CD2`,
    ]),
    pack("D", "CD1 has both the lowest nominal rate and the lowest effective annual rate of the three CDs.", true, [
      `The printed quotes already rank $6.30\\% < 6.40\\% < 6.45\\%$. The effective rates from Parts 3.2, 3.4, and 3.6 are $R_1 \\approx 6.49\\%$ against $R_2 \\approx 6.55\\%$ and $R_3 \\approx 6.55\\%$. Part 3.7 compared $6.49\\% < 6.55\\%$.`,
      `CD1 is last on both lists.`,
      `**1.** The trap is thinking monthly compounding on CD1 must overtake the others. Frequency is not enough to close a $0.10$ to $0.15$ point hole in the printed quote.`,
      `**2.** Another mix-up is ranking by frequency: CD1 monthly, CD2 quarterly, CD3 semi-annual, and calling CD1 the "best clock." The saver ranks by effective rate. CD1 is last.`,
      `**3.** The opposite verdict would need $R_1$ above $6.55\\%$, which would take a higher monthly quote. Under the stem, CD1 is lowest on both rankings.`,
      `The recovered CD1 yield is $6.49\\%$, the lowest of the three`,
    ]),
    pack("E", "On the \\$20,000 deposit, choosing CD2 over CD1 would earn approximately \\$13.61 more in interest over the year.", true, [
      `Interest is principal times each effective rate. Part 3.8 recovered $I_1 = 1,297.04$. Part 3.9 recovered $I_2 = 1,310.66$. Part 3.10 already subtracted and left $13.62$, or $13.61$ with the unrounded rates.`,
      `The extra is`,
      `$$1,310.66 - 1,297.04 = 13.62$$`,
      `which matches the claimed approximately $\\$13.61$.`,
      `**1.** A rushed solver who used the nominal spread $0.10\\% \\times 20,000 = 20$ would overstate the extra. After conversion the effective spread is only about $0.068$ of a point, which is $\\$13.60$ on $\\$20,000$.`,
      `**2.** Another mix-up is comparing CD3 with CD1 and attaching that extra to this claim. The claim names CD2 over CD1.`,
      `**3.** Rounding $13.62$ to $13.61$ is the usual unrounded-rate companion the overview already noted. Both sit next to $\\$13.61$. Neither is $\\$20$.`,
      `The recovered extra interest is about $\\$13.61$`,
    ]),
  ],
  "math-11-20": [
    pack("A", "It would take approximately 76.8 months for Account M to grow \\$15,000 to \\$22,000.", true, [
      `Account M is the 6.00% monthly account. The family is inverting a monthly schedule for a factor of $22,000/15,000 \\approx 1.466667$ at $i_M = 0.005$. Part 3.3 recovered $t_M \\approx 76.81$ months, which the claim rounds to $76.8$. This letter is reading that wait.`,
      `**1.** The trap is $72 / 6 = 12$ years of Rule-of-$72$ doubling, then scaling by $\\ln 1.467 / \\ln 2$. That is more work than the overview's direct logarithm, and it is not needed. Part 3.3 already inverted.`,
      `**2.** Another mix-up is reporting $76.8$ years. The inversion was in monthly periods.`,
      `**3.** Rounding $76.81$ to $76.8$ is the claim's approximation. Letters B and C will compare Account Q's wait with this $76.8$ months.`,
      `The recovered Account M wait is about $76.8$ months`,
    ]),
    pack("B", "It would take Account Q the same amount of time as Account M to reach the same target.", false, [
      `Account Q is the 6.15% quarterly account. Part 3.5 recovered $t_Q \\approx 25.10$ quarters, about $6.275$ years. Account M was about $6.40$ years. Those waits are not the same.`,
      `In years the comparison is`,
      `$$6.275 < 6.40$$`,
      `so Account Q arrives about a month and a half earlier.`,
      `**1.** The trap is thinking equal targets and similar quotes must produce equal waits. The quotes differ, and the clocks differ. Q's higher 6.15% outweighs M's extra monthly dates.`,
      `**2.** A rushed solver who converted both waits to months without converting Q's quarters would compare $25.10$ with $76.8$ and think they were wildly different units. In years they are close, but not equal.`,
      `**3.** The opposite verdict would hold if $R_Q = R_M$. Under the stem, $R_Q > R_M$, so Q is faster.`,
      `The recovered waits are $6.28$ years against $6.40$ years, not the same`,
    ]),
    pack("C", "Because Account Q compounds less frequently, it must take longer than Account M to reach \\$22,000.", false, [
      `Frequency settles a race only when the nominal rates match. Q pays $6.15\\%$ against M's $6.00\\%$. Part 3.5 already found Q faster: about $6.28$ years against M's $6.40$.`,
      `The less frequent schedule wins here because its higher quote outweighs M's extra monthly credits.`,
      `**1.** The wording treats "less often" as a guarantee of a slower race. It would be a guarantee at a shared nominal rate. The stem does not share the nominal rate.`,
      `**2.** Letter D will confirm $R_Q > R_M$. This letter is the time ranking that follows from that yield ranking.`,
      `**3.** The opposite verdict would hold if both quoted 6.00%, in which case monthly M would beat quarterly Q. Under the stem, Q quotes more and arrives first.`,
      `Account Q takes less time, not more`,
    ]),
    pack("D", "Account M's effective annual rate is higher than Account Q's.", false, [
      `Each quote converts to an effective annual rate. Part 3.6 recovered $R_M \\approx 6.17\\%$. Part 3.7 recovered $R_Q \\approx 6.29\\%$. Part 3.8 compared $R_Q > R_M$.`,
      `The ranking is`,
      `$$6.17\\% < 6.29\\%$$`,
      `so Account M does not have the higher effective rate.`,
      `**1.** The trap is ranking by frequency: monthly looks stronger than quarterly. Frequency loses when Q's quote is $0.15$ points higher.`,
      `**2.** A solver who converted only M and then assumed monthly must win would never look at $R_Q$. The overview looked. Q is higher.`,
      `**3.** The opposite verdict would need $R_M > R_Q$, which would take a higher monthly quote on M. Under the stem, Q has the higher effective rate, which is why Q wins the race in letters B and C.`,
      `The recovered pair is $6.17\\%$ against $6.29\\%$`,
    ]),
    pack("E", "If both accounts instead needed to reach \\$30,000, each account would take exactly twice as long as it took to reach \\$22,000.", false, [
      `Waiting time scales with $\\ln M$, and $\\ln 2$ is not twice $\\ln(22,000/15,000)$. For Account M, reaching $\\$30,000$ is a doubling:`,
      `$$t_{30} = \\frac{\\ln 2}{\\ln 1.005} \\approx 138.98$$`,
      `Twice the $76.8$-month wait would be $153.6$ months. Those are not equal.`,
      `The comparison is`,
      `$$138.98 \\ne 153.6$$`,
      `**1.** The trap is "twice the money, twice the time." Twice the money from $\\$15,000$ is $\\$30,000$, a factor of $2$. The original target was a factor of $1.467$. Logs of those factors are not in the ratio $2:1$.`,
      `**2.** The second stretch rides on a larger balance, so it does not take as long as the first stretch. That is why $138.98$ is *less* than twice $76.8$.`,
      `**3.** The opposite verdict would hold under simple interest, where dollar gain is proportional to time. The stem is compound interest.`,
      `The recovered doubling time is about $139$ months, not twice $76.8$`,
    ]),
  ],
};

for (const t of arr) {
  if (!patches[t.id]) continue;
  if (patches[t.id].length !== 5) throw new Error(t.id);
  t.tactical_explanations = patches[t.id];
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (!patches[t.id]) continue;
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
