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
  "math-11-14": [
    pack("A", "The nominal annual rate, quoted as 12 times the monthly rate, is 22.80%.", true, [
      `A store card that charges $1.9\\%$ a month has a nominal annual rate of twelve times that monthly charge, with no compounding built in. Part 3.1 recovered $r_{\\mathrm{nom}} = 22.80\\%$. This letter is reading that twelvefold multiple.`,
      `**1.** The trap is $12 \\times 1.9 = 22.8$ computed as $22.00$ or $23.00$. Twelve times $1.9$ is exactly $22.8$.`,
      `**2.** Another mix-up is confusing the nominal quote with the effective annual rate. The effective rate is higher than $22.80\\%$ because of monthly compounding. That conversion is letter B.`,
      `**3.** The $22.80\\%$ figure is the baseline for letters C and E. Getting the twelvefold multiple right is what lets those later gaps sit where they do.`,
      `The recovered nominal rate is $22.80\\%$`,
    ]),
    pack("B", "The effective annual rate of interest is approximately 25.34%.", true, [
      `The effective annual rate is the yearly yield that reproduces twelve monthly charges of $1.9\\%$. Part 3.2 already compounded that monthly rate and left $R \\approx 25.34\\%$. This letter is reading that conversion, not rebuilding $(1.019)^{12}$.`,
      `The extra against the printed 22.80% is`,
      `$$25.34\\% - 22.80\\% = 2.54$$`,
      `so monthly compounding lifts the quote by about $2.54$ points.`,
      `**1.** A solver who reported the nominal $22.80\\%$ as if it were already effective would understate the card's true annual cost by those $2.54$ points. Letter C is that confusion written as a claim.`,
      `**2.** Rounding $0.253408$ to $25.34\\%$ is the claim's approximation. It is not $22.80\\%$ and not $25.00\\%$.`,
      `**3.** At a $1.9\\%$ monthly charge the exponential and its linear approximation are no longer close. Interest-on-interest over twelve months adds more than two points. That is why this card's effective rate sits near $25\\%$.`,
      `Letter D will apply this $25.34\\%$ to an unpaid $\\$3,000$. Letter E will test the $2.54$ gap against a $3.00$-point cutoff. This letter only asks for the effective rate itself.`,
      `The recovered effective rate is about $25.34\\%$`,
    ]),
    pack("C", "The effective annual rate is approximately 22.80%, the same as the nominal annual rate.", false, [
      `The two rates coincide only when compounding is annual. Here the card charges every month. Part 3.1 recovered $r_{\\mathrm{nom}} = 22.80\\%$. Part 3.2 recovered $R \\approx 25.34\\%$. Those are not the same.`,
      `The gap is`,
      `$$25.34\\% - 22.80\\% = 2.54$$`,
      `so the printed twelvefold multiple is $2.54$ points below the rate that actually accrues.`,
      `**1.** The trap is treating "12 times the monthly rate" as if it already included compounding. That product is a nominal quote by definition. Compounding is the extra in $(1.019)^{12} - 1$.`,
      `**2.** A solver who stopped at letter A and reused $22.80\\%$ for every later letter would agree with this claim. Letter B already converted. The yearly cost is $25.34\\%$.`,
      `**3.** The opposite verdict would hold if the card charged $22.80\\%$ once a year. The stem charges $1.9\\%$ a month.`,
      `The recovered pair is $25.34\\%$ against $22.80\\%$, which are not equal`,
    ]),
    pack("D", "A \\$3,000 unpaid balance would grow to \\$3,684.00 after one year.", false, [
      `An unpaid $\\$3,000$ grows by the same twelve-month factor that Part 3.2 recovered. Part 3.3 already applied that factor and left $FV \\approx 3,760.22$. The claim is $\\$3,684.00$.`,
      `The gap is`,
      `$$3,760.22 - 3,684.00 = 76.22$$`,
      `so the wording understates the year-end balance by about $\\$76$.`,
      `**1.** $\\$3,684$ is exactly $3,000 \\times 1.228$, the nominal $22.80\\%$ applied once. That is annual compounding at the nominal quote, not twelve monthly charges of $1.9\\%$. The extra $\\$76$ is the intra-year compounding the card actually charges.`,
      `**2.** A solver who used $3,000 \\times 1.2534$ correctly would land on the recovered $\\$3,760$ and then see that $\\$3,684$ is the wrong companion.`,
      `**3.** The opposite verdict would need annual compounding at $22.80\\%$, which is not how the card works. The stem charges every month.`,
      `The recovered one-year balance is $\\$3,760.22$, not $\\$3,684.00$`,
    ]),
    pack("E", "The effective annual rate exceeds the nominal annual rate by more than 3.00 percentage points.", false, [
      `The gap the claim asks for is effective minus nominal. Part 3.2 recovered $R \\approx 25.34\\%$. Part 3.1 recovered $r_{\\mathrm{nom}} = 22.80\\%$. Part 3.4 already subtracted and left about $2.54$ percentage points.`,
      `Against the $3.00$-point cutoff that is`,
      `$$3.00 - 2.54 = 0.46$$`,
      `so the premium is $0.46$ of a point short of three points.`,
      `**1.** The trap is rounding $2.54$ up to $3$, or reading $25.34 - 22 = 3.34$ by dropping the $0.80$. The recovered nominal is $22.80\\%$, and $25.34 - 22.80 = 2.54$.`,
      `**2.** Another mix-up is treating $0.2534 - 0.228 = 0.0254$ as $2.54$ points and then comparing $2.54$ with $3$ as if $2.54$ cleared $3$. It does not.`,
      `**3.** Clearing $3.00$ points would need a larger monthly charge. At $1.9\\%$ a month, twelve credits add $2.54$ points, which is more than two and less than three.`,
      `Letter B recovered the $25.34\\%$. Letter C said that is not $22.80\\%$. This letter only asks how far $25.34$ sits above $22.80$. The distance is $2.54$ points, not more than $3.00$.`,
      `The recovered gap is about $2.54$ points`,
    ]),
  ],
  "math-11-15": [
    pack("A", "The effective rate under semi-annual compounding is approximately 10.25%.", true, [
      `The bank is publishing three effective rates at a shared 10% nominal. Semi-annual compounding is two credits a year. Part 3.1 recovered $R = 10.25\\%$. This letter is reading that yield, not rebuilding $(1.05)^{2}$.`,
      `The extra against the printed 10% is`,
      `$$10.25\\% - 10.00\\% = 0.25$$`,
      `so two intra-year credits lift the quote by a quarter-point. The product is exact: $(1.05)^{2} = 1.1025$.`,
      `**1.** A solver who left the yield at $10\\%$ would be describing annual compounding. Semi-annual means $n = 2$, and Part 3.1 already split $10\\%$ as $i = 0.05$.`,
      `**2.** Rounding is not an issue here. $10.25\\%$ is exact. Letters B and C take the quarterly and monthly clocks.`,
      `**3.** The $10.25\\%$ figure is an input to the ranking in letter D and the gap comparison in letter E.`,
      `The recovered semi-annual effective rate is $10.25\\%$`,
    ]),
    pack("B", "The effective rate under quarterly compounding is approximately 10.38%.", true, [
      `Quarterly compounding splits the same 10% across four dates. Part 3.2 recovered $R \\approx 10.38\\%$. This letter is reading that yield, not rebuilding $(1.025)^{4}$.`,
      `The extra against the printed 10% is`,
      `$$10.38\\% - 10.00\\% = 0.38$$`,
      `so four credits lift the quote by about $0.38$ of a point, more than the $0.25$ point lift under two credits.`,
      `**1.** The trap is reporting $10.25\\%$ again, the semi-annual figure. More dates at a fixed nominal rate raise the effective yield.`,
      `**2.** Another mix-up is $10/4 = 2.5$ reported as the effective rate. That $2.5\\%$ is the quarterly periodic rate. The effective rate compounds it four times.`,
      `**3.** Rounding $0.103813$ to $10.38\\%$ is the claim's approximation. Letter D will put $10.38\\%$ between $10.25\\%$ and $10.47\\%$.`,
      `The recovered quarterly effective rate is about $10.38\\%$`,
    ]),
    pack("C", "The effective rate under monthly compounding is approximately 10.47%.", true, [
      `Monthly compounding splits the same 10% across twelve dates. Part 3.3 recovered $R \\approx 10.47\\%$. This letter is reading that yield, not rebuilding $(1.008333)^{12}$.`,
      `The extra against the printed 10% is`,
      `$$10.47\\% - 10.00\\% = 0.47$$`,
      `so twelve credits lift the quote by about $0.47$ points, the largest of the three lifts.`,
      `**1.** A solver who stopped at the quarterly $10.38\\%$ would understate the monthly yield by about $0.09$ of a point. Monthly is more frequent than quarterly, so at a fixed 10% it must finish higher.`,
      `**2.** Another trap is $e^{0.10} - 1 \\approx 10.52\\%$, the continuous ceiling. The stem's most frequent clock is monthly, and Part 3.3 left about $10.47\\%$, a few hundredths below that ceiling.`,
      `**3.** Rounding $0.104713$ to $10.47\\%$ is the claim's approximation. It is not $10.00\\%$ and not $10.38\\%$.`,
      `The recovered monthly effective rate is about $10.47\\%$`,
    ]),
    pack("D", "Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.", true, [
      `With the 10% nominal rate held fixed, extra compounding dates raise the yearly yield. Part 3.1 recovered $10.25\\%$. Part 3.2 recovered $10.38\\%$. Part 3.3 recovered $10.47\\%$. Part 3.4 already ordered them:`,
      `$$10.25\\% < 10.38\\% < 10.47\\%$$`,
      `Each step up in frequency is a step up in effective rate. The rises get smaller, which is letter E, but they stay positive, which is this letter.`,
      `**1.** The trap is thinking that smaller periodic slices must eventually pull the yield down. The slices get smaller, but there are more of them, and at a fixed nominal rate the net effect is always an increase.`,
      `**2.** Another mix-up is comparing the three periodic rates $5\\%$, $2.5\\%$, $0.833\\%$ and calling that a decrease. Those are inputs, not yearly yields. The yearly yields rise.`,
      `**3.** The opposite verdict would need a drop somewhere in the chain, which would take a lower nominal rate on the more frequent clock. The stem holds 10% fixed.`,
      `The recovered triple rises with frequency`,
    ]),
    pack("E", "The jump in effective rate from semi-annual to quarterly is smaller than the jump from quarterly to monthly.", false, [
      `The two successive jumps sit in Part 3.5. Semi-annual to quarterly is $0.13$ of a point. Quarterly to monthly is $0.09$ of a point.`,
      `The comparison is`,
      `$$0.13 > 0.09$$`,
      `so the first step is the larger one, not the smaller. The claim has the ranking of the gaps backwards.`,
      `**1.** This is diminishing returns: each further increase in compounding frequency adds progressively less. The jump from $n = 2$ to $n = 4$ still has intra-year compounding left to capture. The jump from $n = 4$ to $n = 12$ is already closer to the continuous ceiling near $10.52\\%$, so it adds less.`,
      `**2.** The trap is counting the change in $n$ instead of the change in $R$. From 2 to 4 is a doubling of frequency, from 4 to 12 is a tripling, so a rushed solver might think the second jump must be larger. The effective-rate function is concave in $n$.`,
      `**3.** The opposite verdict would hold if the gaps ran $0.13 < 0.09$. They do not. The recovered pair is $0.13$ against $0.09$.`,
      `The first gap is larger than the second`,
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
