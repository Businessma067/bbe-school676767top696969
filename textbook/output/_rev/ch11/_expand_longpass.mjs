import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { wordCount } from "./_expand_apply.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra, truth) {
  const closer = truth ? "so the statement is True." : "so the statement is False.";
  const idx = text.lastIndexOf(closer);
  if (idx < 0) throw new Error("no closer");
  const chunk = extra.trim();
  if (text.slice(0, idx).includes(chunk.slice(0, 40))) return text;
  return text.slice(0, idx) + chunk + "\n\n" + closer;
}

const extras = {
  "math-11-88": {
    4: `**5.** Strategy A plants the whole \\$12,000 on day one. Even after raising B to \\$1,500 a year, B plants \\$12,000 of cash in total, and it plants that cash late. Matching A's recovered \\$19,126 would take about \\$1,932 a year, which is about \\$15,456 of nominal deposits, more cash than A puts in, because B's money has less time to grow.

**6.** A construction manager who thought "\\$1,500 times 8 is \\$12,000, same cash as A, so the piles should match" was ignoring timing. Same total cash still loses by about \\$4,280 of future value. The recovered \\$1,500 fund of about \\$14,846 stays below A's \\$19,126.

**7.** The opposite verdict would need the annual deposit near \\$1,932. At 6% for eight years, \\$1,500 a year is not enough.`,
  },
  "math-11-99": {
    3: `**4.** Five due payments of \\$4,200 are front-loaded, which is why twice their present value, about \\$36,222, almost catches a \\$3,000 perpetuity at the same 8%. Almost is the trap. The perpetuity is still about \\$1,278 heavier. Rounding \\$37,500 against \\$36,222 and calling the perpetuity "less than double" has the inequality backwards.

**5.** The opposite verdict would need the lease present value above \\$18,750, half of \\$37,500. The recovered due present value is about \\$18,111, just under that half-line.`,
  },
  "math-11-102": {
    4: `**5.** Four monthly payments of about \\$597 total about \\$2,389, which is the claim's cutoff. That cutoff is a four-month outlay, not a four-year annual instalment. An annual payment has to cover a full year of 9% interest, \\$2,160, plus principal. It cannot be \\$2,389. The recovered \\$7,408 retires \\$24,000 in four years.

**6.** The opposite verdict would need a four-year annual payment below \\$2,388.96, which would not even cover year-1 interest of \\$2,160 plus any principal.`,
  },
  "math-11-107": {
    4: `**3.** The intra-year premium is four years of an extra \\$30 of year-end equivalent, not four years of an extra \\$50. The factor $4 + 1.5r = 4.12$ on \\$250 is \\$1,030, which is \\$30 above the naive \\$1,000. Accumulating an extra \\$30 a year at 8% for four years is the ordinary-annuity future value of \\$30, about \\$135, not \\$200.

**4.** A bookkeeper who ignored intra-year interest would report the simplified \\$4,506.11 and think the account was \\$200 light of some round \\$4,700 target from letter B. Neither the \\$4,700 nor the \\$200 gap is recovered. The correct four-year balance is about \\$4,641, and the simplification shortfall is about \\$135.

**5.** Why not \\$200? Four times \\$50 is a round intra-year guess that would need a year-end equivalent of \\$1,050, which is letter A's false \\$1,100 world, not the 4.12 factor.

**6.** Timing inside the year is the whole premium: the March, June, and September deposits earn simple 8% for 9, 6, and 3 months before the annual credit. December earns none. That 1.5-year-equivalent of simple interest on \\$250 is \\$30, and four years of that \\$30 is about \\$135 of extra future value, not \\$200.

**7.** The opposite verdict would need a longer horizon that compounds the \\$30 extra up to \\$200. At four years and 8%, the recovered premium is about \\$135.`,
  },
  "math-11-109": {
    2: `**3.** Treating all nine payments as full \\$25,000 is the habit this letter has to reject. Eight full payments plus a recovered final instalment of about \\$13,100 total about \\$213,100 of cash. Interest is that total minus the \\$120,000 principal, about \\$93,100. The claimed \\$105,000 is $225{,}000 - 120{,}000$, which counts \\$11,900 of uncharged last-payment cash as if it had been interest.

**4.** Fourteen percent for nine years is expensive, so a five-figure interest bill is expected. Simple interest of $0.14 \\times 9 \\times 120{,}000 = 151{,}200$ overstates because principal is paid down. The full-payment sketch of \\$105,000 overstates because the ninth payment is not full. The recovered amortizing interest is about \\$93,100.

**5.** A controller who budgeted \\$105,000 of interest would be budgeting the extra \\$11,900 that letter E names as the overstatement of total paid. That extra is not interest. It is an imaginary ninth full payment.

**6.** The opposite verdict would need the ninth payment to be a full \\$25,000. The recovered residual produces a \\$13,100 final payment and \\$93,100 of interest, not \\$105,000.`,
    4: `**3.** Close in the year-count is not close in the last payment. The threshold 8.508 means eight full payments and a ninth that covers a little more than half a regular instalment. Half of \\$25,000 is \\$12,500, and the recovered ninth payment of about \\$13,100 is in that neighbourhood, not in the \\$24,000 neighbourhood. The overstatement $25{,}000-13{,}100 \\approx 11{,}900$ therefore clears \\$10,000 easily.

**4.** Nine full payments are a convenient spreadsheet habit: $n=9$, $a=25{,}000$, multiply. The stem says the last payment is smaller. Letter B recovered that smaller payment. This letter subtracts it from a full ninth payment and checks the gap against \\$10,000.

**5.** The opposite verdict would need a final payment above \\$15,000, so that the overstatement sat at or below \\$10,000. The recovered final payment of about \\$13,100 leaves an \\$11,900 overstatement, more than \\$10,000.`,
  },
  "math-11-89": {
    3: `**6.** Another way to see the failure of doubling: the six-year due fund is six beginning-of-year deposits, each grown to the end of year 6. The twelve-year due fund is those same six deposits grown six extra years, plus six new deposits grown to the end of year 12. The extra growth on the first block alone is $21{,}426.05 \\times (1.05)^6 - 21{,}426.05 \\approx 7{,}325$, already more than the \\$7,287 by which \\$50,139 exceeds \\$42,852, and that ignores the second block of deposits. Linearity in $n$ never had a chance.

**7.** A rushed solver who wrote $F_{\\mathrm{due}}(12) = 2 F_{\\mathrm{due}}(6)$ was treating an accumulating fund as if it were a level rent whose present value might saturate. Future value of a growing annuity does the opposite of saturate. It accelerates.`,
  },
  "math-11-90": {
    4: `**6.** A landlord who quoted the five-year due present value of \\$107,163 and then doubled it to price a ten-year renewal would overcharge by about \\$27,085 relative to the recovered ten-year due value of \\$187,241. That overcharge is the extra discount on years 6 through 10, and it is why this identity $a + P_{n-1}$ has to be recomputed at the new horizon rather than scaled.

**7.** The rounding gap of 21 cents between \\$107,162.40 and \\$107,162.61 is not a second method. It is the usual annuity-factor rounding when $(1.06)^4$ and $(1.06)^5$ are carried to six decimals. Both routes describe the same five due rents of \\$24,000.`,
  },
  "math-11-101": {
    3: `**6.** On a 20-year mortgage the first payment really is mostly interest, which is why letter 108 C has to walk a 15% principal fraction. Importing that slogan into a six-year van loan is the mix-up. Six years at 12% is a short, expensive schedule. Principal takes over immediately. The recovered 50.7% principal share in year 1 is the opposite of a long mortgage's year 1.

**7.** If the bakery had stretched the same \\$60,000 over 15 annual payments at 12%, year-1 interest of \\$7,200 would have exceeded half of a much smaller payment, and this claim would have failed. The stem is six years, not 15. With $n=6$, the recovered split has principal ahead.`,
    4: `**5.** A banker who promised "\\$15,000 off the loan every two years" was quoting the linear \\$45,000 figure in the claim. Two years of recovered principal are about \\$15,674, not \\$15,000, so the remaining balance is about \\$44,326, not \\$45,000. The extra \\$674 is not a rounding of the payment. It is the rising principal slice in year 2.

**6.** After payment 2 there are four payments left. Their present value at 12% is the outstanding balance, which is another route to the same \\$44,326: an ordinary four-year annuity of about \\$14,593.54 at 12%. That remaining-annuity check is what a round \\$45,000 fails.

**7.** The opposite verdict would need two years of principal to total exactly \\$15,000. With the recovered payment of about \\$14,593.54, they total about \\$15,674.`,
  },
  "math-11-103": {
    3: `**5.** Year 4 is the second-to-last year on a five-year loan. By then the balance is about \\$20,602, so 10% of that balance cannot be larger than a \\$11,871 payment. The inequality that year-4 interest is less than year-4 principal is forced by the remaining term, not by a close numerical race.

**6.** A restaurant owner who waited until year 4 expecting "mostly interest still" was using a 30-year mortgage script. This renovation is five years at 10%. The flip from interest-heavy to principal-heavy, if it ever happened, would have been before year 1. Year 1 was already 62% principal.

**7.** The opposite verdict would need $0.10 B_3 > a/2$, hence a year-3 balance above about \\$59,354, larger than the original \\$45,000. Amortization cannot raise the balance. The recovered year-4 split is about \\$2,060 of interest against \\$9,811 of principal.`,
  },
  "math-11-104": {
    2: `**5.** Cash timing is the only difference between the two recovered payments. Ten due payments of about \\$22,946 have present value \\$150,000. Ten ordinary payments of about \\$25,470 also have present value \\$150,000. The ordinary check is larger by about \\$2,524 because none of it is cash today. That is not a penalty for "using the due formula wrong." It is the price of waiting a year to start.

**6.** A franchisee who delayed the first payment thinking it would "save" about 11% of \\$22,946 would actually owe the larger ordinary payment of about \\$25,470 every year, a raise of about \\$2,524, not a discount. The claim's direction, lower ordinary payment, is the reverse of that raise.

**7.** The opposite verdict would need the due payment to exceed the ordinary payment, which happens only at a negative rate. At 11%, waiting costs more per check, not less.`,
  },
  "math-11-106": {
    3: `**5.** Between 10% and 14% there is a break-even opportunity cost at which seven due payments of \\$100,000 are worth exactly \\$500,000 today. The firm does not need that exact rate to answer this letter. It only needs the 14% snapshot, and at 14% the recovered present value of about \\$488,867 already sits \\$11,133 below cash.

**6.** A treasurer who froze the 10% ranking and refused to recompute at 14% would keep paying cash and leave about \\$11,133 of present-value savings on the table. Discount rates are not decorations. They reverse this comparison.

**7.** The immediate first \\$100,000 is why B never falls all the way to the ordinary-annuity present value of six remaining payments. Even at a huge rate, B is at least \\$100,000. Fourteen percent is nowhere near that floor. It is just high enough to undercut \\$500,000.`,
    4: `**4.** Face value of Option B is \\$700,000, which will always exceed \\$500,000. Present value is not face value. At a 0% rate, $PV_B = 700{,}000$ and cash wins easily. At a very high rate, $PV_B$ falls toward the immediate \\$100,000 and B wins easily. The recovered 10% and 14% snapshots sit on opposite sides of \\$500,000, which is all a universal ranking needs to fail.

**5.** The claim would survive only if every due payment were itself larger than \\$500,000, or if the first payment alone exceeded cash. Seven payments of \\$100,000, with the first immediate, are not in that club. Rate can and does reverse the ranking.

**6.** A board memo that said "instalments are always more expensive because 7 times 100 is 700" would be that face-value argument. Letter D already computed the 14% present value. This letter only has to notice that 14% and 10% disagree, so "always" is false.`,
  },
  "math-11-108": {
    2: `**5.** Sixty payments total about \\$85,972 of cash. Of that, about \\$55,771 is interest and about \\$30,201 is principal. Interest is already 65% of the cash paid in the first five years. A 25% principal claim would need about \\$50,000 retired, which would require those sixty payments to have been far more principal-heavy than a 6% 20-year mortgage is.

**6.** After five years the family still owes about 85% of the original loan. That is the amortization shape, not a rounding of 75% remaining. Twenty-five percent repaid would have left \\$150,000 outstanding. The recovered outstanding balance is about \\$169,799.

**7.** The opposite verdict would need a 10-year mortgage, or a much lower rate, so that five years really did retire a quarter of principal. On this 20-year 6% monthly loan, the recovered five-year principal fraction is about 15%.`,
  },
  "math-11-115": {
    4: `**5.** The original project has inflows of \\$7,000 and \\$7,000 on a \\$12,000 outlay, IRR about 10.92%. Doubling only the inflows is the project $(\\$14{,}000, \\$14{,}000)$ on the same \\$12,000, which is an enormous bargain: the undiscounted cash-flow sum jumps from \\$2,000 to \\$16,000. Rates jump with that bargain. They do not double politely to 21.84%.

**6.** A capital-budgeting shortcut that said "double the cash, double the IRR" would approve the wrong hurdle. The recovered 81% is the hurdle that actually zeroes the doubled-inflow NPV. Twenty-one point eight four percent would still leave a large positive NPV on that richer project.

**7.** The opposite verdict would need the claim to have said "more than double," which is task 121 D, or to have doubled the outlay as well. Neither is this wording. This wording says approximately 21.84%, which is twice 10.92%, and that is not the recovered rate.`,
  },
  "math-11-117": {
    2: `**4.** Scale is the usual defense of Y: it invests \\$22,000 and returns \\$2,750 of profit, against X's \\$15,000 and \\$2,250. IRR does not award points for scale. It awards points for profit per dollar per year. X's \\$2,250 on \\$15,000 is 15%. Y's \\$2,750 on \\$22,000 is 12.5%. Preferring Y on IRR would require preferring the worse of those two rates.

**5.** A retailer with unlimited capital and a 11% cost of funds might still take both projects, which is letter D's NPV snapshot. This letter is the IRR ranking only. On that ranking, X is preferred. Y is not.

**6.** The opposite verdict would need $r_Y > r_X$. With the stem's payoffs, $12.5\\% < 15\\%$. Letter E raises Y's payoff to \\$25,000 and still cannot cross 15%.`,
    3: `**5.** The split-sign picture the claim wants is the picture at a test rate between the two IRRs. At 13.5%, X would still have positive NPV (13.5% < 15%) and Y would have negative NPV (13.5% > 12.5%). Eleven percent is not 13.5%. It is below both recovered rates, so both present values are surpluses, about \\$541 and \\$297.

**6.** A solver who translated "Y has the lower IRR" into "Y has negative NPV" was swapping criteria. IRR ranks projects. NPV at a named rate signs a single project. At 11%, both signs are plus.

**7.** The opposite verdict would need the test rate in $(12.5\\%, 15\\%)$. The stem's 11% is not in that interval, and the recovered pair $540.54 > 0$, $297.30 > 0$ is the evidence.`,
  },
  "math-11-118": {
    2: `**5.** Linear interpolation between the 8% NPV of about \\$4,012 and the 12% NPV of about $-\\$445$ puts the zero near $8\\% + 4\\% \\times 4012/(4012+445) \\approx 11.6\\%$, still below 12%, not between 12% and 15%. Interpolation is not a substitute for a root finder, but it is enough to kill a (12%, 15%) claim.

**6.** A manufacturing manager who saw NPV negative at 12% and more negative at 15% and concluded "the IRR must be in the middle of the rates we tested" was averaging test rates instead of locating the sign change. The sign change is already behind, between 8% and 12%.

**7.** The year-1 outflow of \\$3,000 is why this project is uglier than a clean two-year quadratic, and why the task uses a NPV table. Ugly cash-flow signs do not move the crossing into (12%, 15%) once 12% is already negative.`,
  },
  "math-11-121": {
    3: `**6.** The original undiscounted cash-flow sum is $34{,}000+42{,}000-65{,}000 = 11{,}000$. Doubling the rents without doubling the outlay raises that sum to $68{,}000+84{,}000-65{,}000 = 87{,}000$. A project whose undiscounted surplus goes from \\$11,000 to \\$87,000 cannot keep an IRR near 21%. The recovered 77% is the rate that zeroes that much richer stream.

**7.** A developer who doubled the rent roll, left the renovation budget unchanged, and still quoted "about 21% IRR" would be using the 115 E trap on a claim that, unlike 115 E, is actually true in direction and false only if someone refused to recompute. Recomputing gives about 77%, which is more than double 10.69%.

**8.** The opposite verdict would need the outlay to double with the rents, restoring the original quadratic, or a wording that said "exactly double." More than double is the recovered comparison.`,
  },
  "math-11-123": {
    2: `**5.** Design A invests \\$50,000 more than B and collects two payoffs instead of one. None of that extra scale enters the IRR ranking. IRR is a rate per dollar. B's 16% on a one-year clock beats A's 11.04% on a two-year clock. A cooperative that "prefers the bigger project" is using a different criterion, perhaps NPV at a low discount rate, not IRR.

**6.** At a 0% discount rate, A's undiscounted surplus is $54{,}000+88{,}000-120{,}000 = 22{,}000$ and B's is $81{,}200-70{,}000 = 11{,}200$, so A would win on raw dollars. IRR is not a 0% ranking. It is the rate that zeroes each NPV, and those rates are 11.04% and 16%.

**7.** The opposite verdict would need $r_A > r_B$. With the stem's cash flows, 11.04% is not above 16%. Letter E cuts A's year-1 return and makes the gap wider, not narrower.`,
    3: `**5.** The split window is $(11.04\\%, 16\\%)$. Thirteen percent is inside it, so A's NPV must be negative and B's must be positive for these conventional designs. That is not an accident of rounding. It is the definition of IRR as the NPV zero.

**6.** A board that tested only 13% and concluded "A destroys value, B creates it" would be right at 13% and wrong if the cooperative's cost of funds were 8% (both create value) or 18% (both destroy it). This letter asks only about 13%. At 13%, the recovered signs are minus for A and plus for B.

**7.** The opposite verdict would need both signs the same, which is any test rate outside $(11.04\\%, 16\\%)$. Thirteen percent is inside.`,
    4: `**5.** Year 1's \\$54,000 was the earlier of A's two inflows. Cutting it to \\$44,000 is a hit to the cash the project earns soonest, which is the cash IRR weights most. Year 2's \\$88,000 is unchanged and still far away. The recovered drop from 11.04% to 5.9% is that timing penalty.

**6.** Even the original 11.04% was 5 points short of B's 16%. A further 5-point drop does not "still exceed 16%." It falls to about 5.9%, which is not close. A solver who thought "\\$88,000 in year 2 is bigger than B's whole payoff, so A must still win" was ranking dollars, not rates, and ignoring that B's payoff arrives in one year on a \\$70,000 outlay.

**7.** The opposite verdict would need the cut year-1 project to keep $r_A > 16\\%$. Starting from 11.04%, no cut of year-1 cash can raise the rate. Cuts lower it.`,
  },
};

let n = 0;
for (const file of ["81_90.json", "91_100.json", "101_110.json", "111_120.json", "121_123.json"]) {
  const fp = path.join(dir, file);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const t of arr) {
    const pack = extras[t.id];
    if (!pack) continue;
    for (const [iStr, extra] of Object.entries(pack)) {
      const i = Number(iStr);
      const truth = !!t.answer_key[i];
      t.tactical_explanations[i] = insertBeforeCloser(
        t.tactical_explanations[i],
        extra,
        truth
      );
      n++;
    }
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
}
console.log("thickened letters", n);
