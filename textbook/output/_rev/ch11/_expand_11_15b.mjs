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
  "math-11-12": [
    pack("A", "It takes approximately 81.30 months to reach £6,000.", true, [
      `The investor starts at £4,000 and wants £6,000 at 6% monthly. That is a factor of $1.5$ at the recovered monthly rate $i = 0.005$. Part 3.3 already inverted the logarithm and left $t \\approx 81.30$ months. This letter is reading that wait, not rebuilding $\\ln 1.5 / \\ln 1.005$.`,
      `**1.** The trap is $72 / 6 = 12$ years, a Rule-of-$72$ doubling time, then taking half of that because $1.5$ is "halfway to doubling." Halfway to doubling in logarithms is $\\sqrt{2}$, not $1.5$, and $12/2 = 6$ years is $72$ months, not $81.30$.`,
      `**2.** Another mix-up is using years as the unit and reporting $81.30$ years. The inversion was in monthly periods because the account credits monthly.`,
      `**3.** Rounding $81.30$ to $81$ months would still be this wait. Rounding to $72$ or $100$ would not. Letters B, C, and E offer those wrong calendars.`,
      `The recovered wait is about $81.30$ months`,
    ]),
    pack("B", "It takes approximately 6.00 years exactly to reach £6,000.", false, [
      `Six years is $72$ months. Part 3.3 recovered $81.30$ months, which is about $6.78$ years. The claim names a clean six-year wait that the logarithm does not produce.`,
      `The gap in months is`,
      `$$81.30 - 72 = 9.30$$`,
      `so the wording is about nine months too short.`,
      `**1.** A rushed solver who used $6,000/4,000 = 1.5$ and then $0.06 \\times t = 0.5$ would get $t \\approx 8.3$ years of simple interest, which overshoots. Someone who used the Rule of $72$ at $6\\%$ for a doubling and then scaled by $0.5/1$ would get $6$ years and would invent this claim.`,
      `**2.** After $72$ months the balance is $4,000 \\times (1.005)^{72} \\approx 5,746$, still about £254 short of £6,000. The extra $9.30$ months are not decoration. They are needed to close that gap.`,
      `**3.** The opposite verdict would need a higher monthly rate so that a factor of $1.5$ arrived at $72$ months. At $0.50\\%$ a month, the recovered wait is $6.78$ years, not $6.00$.`,
      `The word "exactly" is doing work. Even "approximately 6 years" would be a stretch at $6.78$. The claim says $6.00$ years exactly.`,
      `The recovered wait is about $6.78$ years, not $6.00$`,
    ]),
    pack("C", "It takes approximately 48 months to reach £6,000.", false, [
      `Forty-eight months is a four-year trial at the recovered $i = 0.005$. Part 3.4 already noted $81.30 \\ne 48$. Checking the balance at $48$ months is this letter's extra look:`,
      `$$4,000 \\times (1.005)^{48} \\approx 5,082$$`,
      `That is still about £918 short of £6,000.`,
      `**1.** The trap is treating $1.5$ as "50% growth" and then taking $50\\%$ of a 96-month doubling-time guess. Forty-eight months is a round four years, which is why it looks plausible and why it is wrong.`,
      `**2.** A solver who used $4,000 \\times 1.06^{4} \\approx 5,050$ would be on an annual clock and would still miss £6,000. Both clocks need more than four years.`,
      `**3.** The opposite verdict would hold if the target were about £5,080, which is the four-year balance. The stem's target is £6,000.`,
      `Four years is not the logarithm. The recovered wait is $81.30$ months.`,
      `The recovered time is $81.30$ months, not $48$`,
    ]),
    pack("D", "Because the deposit needs to grow by a factor of 1.5 rather than double, the required time must be less than half of this account's doubling time.", false, [
      `Times scale with logarithms, and $\\ln 1.5$ is not half of $\\ln 2$. Part 3.5 recovered the doubling time $t_2 \\approx 138.99$ months. Half of that is about $69.5$ months. Part 3.3 recovered the $1.5$ wait as $81.30$ months.`,
      `The comparison is`,
      `$$81.30 > 69.5$$`,
      `so growing by $50\\%$ takes longer than half a doubling, not less.`,
      `**1.** The trap is thinking "1.5 is halfway from 1 to 2, so the wait is halfway." Halfway in the *factor* is $1.5$. Halfway in the *logarithm* is $\\sqrt{2} \\approx 1.414$. A $50\\%$ gain is more growth than a $41.4\\%$ gain, so it takes more than half the doubling time.`,
      `**2.** A rushed solver who computed only $t_{1.5}$ and then halved $t_{1.5}$ would be answering a different question. The claim compares $t_{1.5}$ with $t_2 / 2$.`,
      `**3.** The opposite verdict would hold for a target of $1.414$ times the deposit. The stem's target is $1.5$ times.`,
      `The meaning of $81.30 > 69.5$ is that early growth is slower in dollars. The first half of a doubling is not a $50\\%$ gain.`,
      `The recovered $1.5$ wait exceeds half the doubling time`,
    ]),
    pack("E", "The time required to reach £6,000, found using logarithms, is exactly 100 months.", false, [
      `The logarithmic solution is the same $81.30$ months from Part 3.3 and Part 3.7. One hundred months is a round guess that overshoots.`,
      `At $100$ months the growth factor would be`,
      `$$(1.005)^{100} \\approx 1.647$$`,
      `so the balance would be about £6,587, overshooting £6,000 by about £587.`,
      `**1.** The trap is picking a round $100$ because $81.30$ "looks close to $80$" and then adding a safety margin. The logarithm is not a safety margin. It is the exact inversion.`,
      `**2.** A solver who used $\\ln 1.5 / 0.005 \\approx 81.1$ without converting $0.005$ to $\\ln 1.005$ would still land near $81$, not $100$. Getting $100$ requires a different target or a different rate.`,
      `**3.** The opposite verdict would hold if the target were about £6,587. The stem's target is £6,000.`,
      `The recovered wait is $81.30$ months, not $100$`,
    ]),
  ],
  "math-11-13": [
    pack("A", "The daily periodic rate is approximately 0.011644%.", true, [
      `The retiree's 4.25% quote is a nominal annual rate on a 365-day year. That is a split across $365$ dates, not a compounding calculation yet. Part 3.1 recovered $i \\approx 0.011644\\%$. This letter is reading that split.`,
      `**1.** The trap is treating $4.25\\%$ itself as the daily credit, or dividing by $360$ as if the bank used a banker's year. The stem uses $365$.`,
      `**2.** Another wrong split is $4.25/12$, as if the account were monthly. Daily means $n = 365$.`,
      `**3.** The daily rate is the input to the effective-rate and year-end-balance letters. Getting $0.011644\\%$ right is what lets $R \\approx 4.34\\%$ and $FV \\approx 20,868.26$ come out as they do in Parts 3.2 and 3.3.`,
      `The recovered daily rate is about $0.011644\\%$`,
    ]),
    pack("B", "The effective annual rate is approximately 4.34%.", true, [
      `The effective rate is the single yearly yield that reproduces those $365$ daily credits. Part 3.2 already compounded the recovered daily rate and left $R \\approx 4.34\\%$. This letter is reading that conversion, not rebuilding $(1 + 0.0425/365)^{365}$.`,
      `The extra against the printed 4.25% is`,
      `$$4.34\\% - 4.25\\% = 0.09$$`,
      `so daily crediting lifts the quote by about $0.09$ of a point.`,
      `**1.** A solver who reported the nominal $4.25\\%$ as if it were already effective would understate the yield by that $0.09$ point. The stem pays daily.`,
      `**2.** Another trap is $e^{0.0425} - 1 \\approx 4.34\\%$ as well, which happens to round to the same hundredth. Continuous compounding is the ceiling. Daily compounding at $365$ days sits just under that ceiling. The overview's $4.34\\%$ is the daily conversion.`,
      `**3.** Letter D will compare this $4.34\\%$ with a monthly clock. Letter E will test the $0.09$ gap against $0.20$. This letter only asks for the daily effective rate.`,
      `If compounding had been annual, the effective rate would have stayed $4.25\\%$. Daily credits are what lift it to $4.34\\%$.`,
      `The recovered effective rate is about $4.34\\%$`,
    ]),
    pack("C", "The balance after one year is approximately \\$20,868.26.", true, [
      `The year-end balance is the $\\$20,000$ deposit times the recovered annual factor $1.043413$. Part 3.3 already applied that factor and left $FV \\approx 20,868.26$. This letter is reading that product.`,
      `**1.** A solver who multiplied $\\$20,000$ by $1.0425$ would get $\\$20,850$ and miss the extra $\\$18.26$ that daily credits produce.`,
      `**2.** That extra $\\$18.26$ is the dollar gap between daily and annual compounding on this principal. Letter D asks which *rate* is stronger under a monthly swap. This letter asks for the daily schedule's dollar balance.`,
      `**3.** The claim's cents, $26$, match the overview's rounding of $20,000 \\times 1.043413$. A table that stopped at $20,868$ would still be this dollar.`,
      `What would have to change for the opposite verdict is a different deposit or quote. Under $\\$20,000$ at 4.25% daily for one year, the balance is $\\$20,868.26$.`,
      `The recovered year-end balance is $\\$20,868.26$`,
    ]),
    pack("D", "If compounded monthly instead, the effective annual rate would be higher than under daily compounding.", false, [
      `With the 4.25% nominal rate held fixed, fewer compounding dates lower the effective yield. Part 3.2 recovered the daily effective rate as $R \\approx 4.34\\%$. Part 3.4 already converted the same 4.25% under monthly compounding and left $R_{\\mathrm{mon}} \\approx 4.33\\%$.`,
      `The ranking is`,
      `$$4.33\\% < 4.34\\%$$`,
      `so monthly is slightly weaker, not stronger.`,
      `**1.** The claim has the comparison backwards. At a fixed nominal rate, more frequent compounding is the stronger schedule. Daily means $365$ credits against $12$. Daily wins.`,
      `**2.** The trap is thinking that a monthly slice $4.25/12$ is larger than a daily slice $4.25/365$, so monthly must win. The monthly slice is larger per date. There are far fewer dates.`,
      `**3.** The opposite verdict would need a higher nominal rate on the monthly account, or holding the effective rate fixed. The stem holds 4.25% fixed.`,
      `The gap is only about $0.01$ of a point, but the direction is unambiguous. Monthly compounding at the same quote does not beat daily compounding.`,
      `Monthly compounding is weaker here`,
    ]),
    pack("E", "The gap between the effective annual rate and the nominal rate exceeds 0.20 percentage points.", false, [
      `The gap is the daily effective rate minus the printed 4.25%. Part 3.2 recovered $R \\approx 4.34\\%$. Part 3.5 already subtracted and left $0.09$ percentage points.`,
      `Against the $0.20$-point cutoff that is`,
      `$$0.20 - 0.09 = 0.11$$`,
      `so the premium is $0.11$ of a point short of the cutoff.`,
      `**1.** At a modest 4.25% quote even daily compounding cannot manufacture a $0.20$-point premium. Continuous compounding at 4.25% is about $4.34\\%$ as well. The ceiling is still a $0.09$ point lift.`,
      `**2.** The trap is reading $4.34$ against $4.00$, or treating $0.34$ as if it were already more than $0.20$ of a point. The comparison is effective minus nominal, $0.09$.`,
      `**3.** Letter B recovered the $4.34\\%$. Letter D ranked monthly against daily. This letter only asks how far $4.34$ sits above $4.25$. The distance is $0.09$ points, not more than $0.20$.`,
      `The recovered gap is $0.09$ points`,
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
