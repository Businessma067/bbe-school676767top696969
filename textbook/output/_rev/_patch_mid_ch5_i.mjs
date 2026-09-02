import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-55:B": `The statement claims Shipment 1's Coffee dollars are more than $65\\%$ of that shipment's printed $\\$2{,}943.20$. The mix is $3:2$ Coffee to Cocoa on $520$ kg, so Coffee is three-fifths of the mass. The overview already recovered Coffee at $\\$6.20$/kg and Cocoa at $\\$4.85$/kg. This letter does not rebuild that pair. It only costs the Coffee piece of Shipment 1 and compares it with the printed total.

**1.** Coffee kilograms on Shipment 1:

$$\\frac{3}{5} \\times 520 = 312$$

**2.** Coffee dollars:

$$312 \\times 6.20 = 1934.40$$

**3.** Share of the printed total:

$$\\frac{1934.40}{2943.20} \\approx 0.6572$$

About $65.7\\%$, which exceeds $65\\%$. Cocoa on the same bill is $208 \\times 4.85 = 1008.80$, and $1934.40+1008.80=2943.20$ rebuilds the printed row, so the Coffee share is not a rounding artefact.

A solver who used mass share $3/5=60\\%$ would sit under $65\\%$ and flip the verdict, because Coffee is the dearer commodity: dollars run ahead of kilograms. The trap figure $60\\%$ is the mass fraction, not the dollar fraction. A solver who costed all $520$ kg at $\\$6.20$ would get $\\$3{,}224$ and a $100\\%$ Coffee story that the mix does not support.

The opposite verdict would need Coffee's dollar share at or below $0.65 \\times 2943.20 = 1913.08$. That would take a Coffee price at or below $1913.08/312 \\approx 6.13$. Recovered Coffee is $\\$6.20$. Shipment 2's $5:3$ mix is a different bill and does not rewrite Shipment 1's $312$ kg.

Shipment 1's Coffee dollars are about $65.7\\%$ of $\\$2{,}943.20$, which is more than $65\\%$, so the statement is True.`,

  "math-5-55:D": `The statement claims combined Cocoa dollars across both shipments exceed combined Coffee dollars. That is a two-shipment dollar comparison, not a unit-price comparison. The overview already recovered Coffee at $\\$6.20$/kg and Cocoa at $\\$4.85$/kg. Shipment 1 is $3:2$ on $520$ kg. Shipment 2 is $5:3$ on $800$ kg.

**1.** Cocoa kilograms, then Cocoa dollars:

$$208 + 300 = 508, \\qquad 508 \\times 4.85 = 2463.80$$

**2.** Coffee kilograms, then Coffee dollars:

$$312 + 500 = 812, \\qquad 812 \\times 6.20 = 5034.40$$

**3.** Compare the two dollar piles:

$$2463.80 > 5034.40$$

is false. Coffee dollars are more than double Cocoa dollars. Cocoa is cheaper per kilogram *and* the mixes are Coffee-heavy ($312$ vs $208$, then $500$ vs $300$), so both the price gap and the mass gap push Coffee's dollar total up.

A solver who compared kilograms $508$ vs $812$ and treated mass as money would still find Cocoa smaller, but a solver who compared unit prices the wrong way, or who used only Shipment 1's Cocoa $1008.80$ against Shipment 2's Coffee $3100$, can manufacture a Cocoa-wins story by mixing unmatched rows. The trap figure $\\$2{,}463.80$ is the Cocoa total sitting next to Shipment 1's printed $\\$2{,}943.20$ as if one shipment's Cocoa could beat the other shipment's whole bill.

The opposite verdict would need Cocoa dearer than Coffee, or a Cocoa-heavy mix the stem does not give. With recovered prices and these two ratios, Cocoa cannot overtake Coffee in combined dollars.

Combined Cocoa is $\\$2{,}463.80$ against Coffee's $\\$5{,}034.40$, so Cocoa does not exceed Coffee, so the statement is False.`,

  "math-5-55:E": `The statement claims the price gap $x-y$ is less than $30\\%$ of Coffee's recovered price. The overview already recovered Coffee $x=6.20$ and Cocoa $y=4.85$. The extra arithmetic is only the gap and the ratio. The two shipment totals are not re-solved.

**1.** Gap:

$$6.20 - 4.85 = 1.35$$

**2.** Gap as a share of Coffee:

$$\\frac{1.35}{6.20} \\approx 0.2177$$

**3.** About $21.8\\%$, which is less than $30\\%$. Thirty percent of Coffee would be $0.30 \\times 6.20 = 1.86$, and the actual gap $1.35$ sits $\\$0.51$ under that cutoff.

A solver who used $1.35/4.85 \\approx 27.8\\%$ against Cocoa would still pass $30\\%$, but the claim names Coffee as the base. A solver who used $6.20/4.85 \\approx 1.278$ and reported $27.8\\%$ "higher" is answering a different percent-higher letter, not a gap-over-Coffee letter. The trap figure $27.8\\%$ is the gap over Cocoa, or the "higher than" remainder after subtracting $1$ from the price ratio.

The opposite verdict would need a gap of at least $1.86$, so Cocoa at or below $6.20-1.86=4.34$. Recovered Cocoa is $\\$4.85$. Shipment 2's $5:3$ mix does not rewrite those two unit prices.

The gap is about $21.8\\%$ of Coffee, which is less than $30\\%$, so the statement is True.`,

  "math-5-56:A": `The statement claims a Truck's litres per $100$ km exceed a Van's by more than $75\\%$ of the Van rate. The overview already recovered Truck $32.0$ L/$100$ km and Van $18.0$ L/$100$ km. Route 3's recorded $155.0$ L is an audit row and does not rewrite those two rates.

**1.** Rate gap:

$$32.0 - 18.0 = 14.0$$

**2.** Gap over the Van:

$$\\frac{14.0}{18.0} \\approx 0.7778$$

**3.** About $77.8\\%$, which exceeds $75\\%$. Seventy-five percent of $18$ is $13.5$, and the actual gap $14$ sits $0.5$ L/$100$ km above that cutoff.

A solver who used $32/18 \\approx 1.778$ and reported $177.8\\%$ would have forgotten to subtract $1$ from a "higher than" claim. A solver who used $14/32=43.75\\%$ against the Truck would fail the cutoff. The trap figure $177.8\\%$ is the ratio left as a multiple. Another trap is Route 2's fleet average $322/14=23$ treated as a "truck" rate: $23$ is only about $28\\%$ above $18$.

The opposite verdict would need Truck at or below $18 \\times 1.75=31.5$. Recovered Truck is $32.0$. The mile-to-kilometre conversion on Route 3 does not move these two fleet rates.

Truck consumption is about $77.8\\%$ higher than Van consumption, more than $75\\%$, so the statement is True.`,

  "math-5-56:D": `The statement claims Route 2's fleet-wide average litres per $100$ km sits closer to the Van rate than to the Truck rate. Route 2 is $500$ km Truck and $900$ km Van, printed total $322.0$ L. The overview already recovered Truck $32.0$ and Van $18.0$. The extra arithmetic is the distance-weighted average, then two distances on the number line.

**1.** Combined distance and fleet average:

$$500 + 900 = 1400, \\qquad \\frac{322.0}{14.00} = 23.0$$

(the $14.00$ is $1400$ km written as hundreds of kilometres, matching the L/$100$ km unit). Directly: $322 \\times 100 / 1400 = 23$.

**2.** Distance from $23$ to the Van:

$$23.0 - 18.0 = 5.0$$

**3.** Distance from $23$ to the Truck:

$$32.0 - 23.0 = 9.0$$

Then $5.0 < 9.0$, so the average is closer to the Van. That is not a surprise: $900$ of $1400$ km, about $64\\%$, is Van distance, so the average is pulled toward $18$.

A solver who averaged $32$ and $18$ as an unweighted $25$ would sit $7$ from the Van and $7$ from the Truck and call it a tie. The trap figure $25$ is that unweighted midpoint. Route 2 is not half-and-half. A solver who used litres $500$ vs $900$ as if they were fuel rather than kilometres would also scramble the weights.

The opposite verdict would need the Truck share of Route 2's distance large enough to push the average past the midpoint $25$. With $500$ Truck kilometres out of $1400$, the average is $23$, on the Van side of $25$.

Route 2's $23.0$ L/$100$ km is $5$ from the Van and $9$ from the Truck, so the statement is True.`,

  "math-5-57:A": `The statement claims the equity rate exceeds the bond rate by more than $20\\%$ of the bond rate. The overview already recovered the bond rate $5.4\\%$ and the equity rate $6.6\\%$. The two allocation returns $\\$2{,}646$ and $\\$2{,}754$ are not re-solved here. The extra arithmetic is the rate gap and the relative gap.

**1.** Equity minus bond:

$$6.6 - 5.4 = 1.2$$

**2.** Gap over the bond rate:

$$\\frac{1.2}{5.4} \\approx 0.2222$$

**3.** About $22.2\\%$, which exceeds $20\\%$. Twenty percent of $5.4$ is $1.08$ percentage points, and the actual gap $1.2$ sits $0.12$ points above that cutoff.

A solver who used $1.2/6.6 \\approx 18.2\\%$ against equity would fail the cutoff and flip the verdict. The trap figure $18.2\\%$ is the gap over the larger rate. A solver who used $6.6/5.4 \\approx 1.222$ and reported $122\\%$ would have left the ratio as a multiple. The claim is "more than $20\\%$ of the bond rate, in relative terms," which is the $1.2/5.4$ quotient.

The opposite verdict would need equity at or below $5.4 \\times 1.20 = 6.48\\%$. Recovered equity is $6.6\\%$. Swapping the $\\$27{,}000$ and $\\$18{,}000$ sleeves changes the blended return, not these two sleeve rates.

Equity is about $22.2\\%$ higher than the bond rate, more than $20\\%$ of the bond rate, so the statement is True.`,

  "math-5-57:B": `The statement claims the current blended rate is less than $6\\%$. Current allocation is $\\$27{,}000$ in bonds and $\\$18{,}000$ in equities, returning $\\$2{,}646$ on a $\\$45{,}000$ fund. The overview already recovered $5.4\\%$ and $6.6\\%$. This letter does not rebuild those rates. It only divides the printed current return by the fund.

**1.** Blended rate from the printed current return:

$$\\frac{2646}{45000} = 0.0588 = 5.88\\%$$

**2.** Weighted check at recovered rates:

$$\\frac{27000}{45000} \\times 5.4 + \\frac{18000}{45000} \\times 6.6 = 0.6 \\times 5.4 + 0.4 \\times 6.6 = 3.24 + 2.64 = 5.88$$

**3.** Compare with $6\\%$:

$$5.88 < 6$$

The current mix is $60\\%$ bonds, so the blend sits closer to $5.4$ than to $6.6$. A solver who averaged $5.4$ and $6.6$ as an unweighted $6.0\\%$ would sit exactly on the cutoff and might treat "less than $6\\%$" as a tie. The trap figure $6.0\\%$ is that unweighted midpoint. The fund is not $50/50$ today.

The opposite verdict would need the current return at or above $0.06 \\times 45000=2700$. The printed current return is $\\$2{,}646$. The proposed swap return $\\$2{,}754$ is a different mix and is not "current."

The current blend is $5.88\\%$, which is less than $6\\%$, so the statement is True.`,

  "math-5-57:C": `The statement places the entire $\\$45{,}000$ in equities and claims that all-equity return would exceed the *sum* of the two described allocation returns, $\\$2{,}646+\\$2{,}754=\\$5{,}400$. Those two returns are two alternative mixes of the *same* $\\$45{,}000$, not two separate funds. Adding them double-counts the principal. The overview already recovered equity at $6.6\\%$.

**1.** All-equity return:

$$45000 \\times 0.066 = 2970$$

**2.** The claimed comparison total:

$$2646 + 2754 = 5400$$

**3.** Compare:

$$2970 > 5400$$

is false. The all-equity figure $\\$2{,}970$ sits between the two described returns, as it must: $6.6\\%$ is the top sleeve rate, so a $100\\%$ equity mix beats the current $5.88\\%$ mix and the swapped mix, but it cannot beat the *sum* of two full-fund returns.

A solver who treated $\\$5{,}400$ as "two years of income" or as "both portfolios at once" is the intended trap. The trap figure $\\$5{,}400$ is that illegal sum. Another wrong route: $45000 \\times 0.066 \\times 2 = 5940$, stacking two years onto all-equity, which still is not the claim, but shows how easy it is to double a return.

The opposite verdict would need an equity rate above $5400/45000=12\\%$, which would be adding the two sleeve rates rather than using one of them. Recovered equity is $6.6\\%$, not $12\\%$.

All-equity income is $\\$2{,}970$, which does not exceed $\\$5{,}400$, so the statement is False.`,

  "math-5-57:E": `The statement claims the bond rate is more than $80\\%$ of the equity rate. The overview already recovered bond $5.4\\%$ and equity $6.6\\%$. The extra arithmetic is that quotient. The two allocation dollars are not re-solved.

**1.** Bond over equity:

$$\\frac{5.4}{6.6} \\approx 0.8182$$

**2.** Eighty percent of equity:

$$0.80 \\times 6.6 = 5.28$$

**3.** Compare the bond rate with that cutoff:

$$5.4 > 5.28$$

About $81.8\\%$ of equity, which exceeds $80\\%$. A solver who used $5.4/6.0=90\\%$ against a round $6\\%$ would overstate the share. A solver who used $6.6/5.4 \\approx 1.22$ and reported $122\\%$ is answering letter A's "higher than" story, not a bond-as-a-share-of-equity story. The trap figure $1.22$ is the inverted ratio.

The opposite verdict would need bond at or below $5.28\\%$. Recovered bond is $5.4\\%$. The current $60/40$ split does not rewrite the two sleeve rates.

The bond rate is about $81.8\\%$ of the equity rate, more than $80\\%$, so the statement is True.`,

  "math-5-58:B": `The statement claims the fixed administrative fee is more than $60\\%$ of the Auto premium $\\$612.50$. The overview already recovered the fee $\\$214.70$ and the rate $\\$4.68$ per $\\$1{,}000$ of coverage. Auto coverage is $\\$85{,}000$, which is $85$ units.

**1.** Fee share of Auto:

$$\\frac{214.70}{612.50} \\approx 0.3505$$

**2.** Rate dollars on Auto, as a check:

$$85 \\times 4.68 = 397.80, \\qquad 214.70 + 397.80 = 612.50$$

**3.** Sixty percent of Auto:

$$0.60 \\times 612.50 = 367.50$$

Then $214.70$ is about $35\\%$ of Auto, not more than $60\\%$. The fee would have to exceed $\\$367.50$ to pass the cutoff. On Auto, the coverage charge $\\$397.80$ is the larger piece.

A solver who used Home's premium $\\$1{,}197.50$ in the denominator would get $214.70/1197.50 \\approx 17.9\\%$, even smaller. A solver who used Renters $\\$331.70$ would get about $64.7\\%$ and would accept the claim. The trap figure $64.7\\%$ is the fee share of *Renters*, the small policy, not of Auto. The claim names Auto.

The opposite verdict would need Auto coverage small enough that $214.70$ is $60\\%$ of the premium, so premium about $\\$357.83$ and coverage charge about $\\$143$, or about $31$ units. Auto is $85$ units.

The fee is about $35\\%$ of the Auto premium, not more than $60\\%$, so the statement is False.`,

  "math-5-58:C": `The statement raises the rate per $\\$1{,}000$ by $10\\%$, holds the fee, and claims Home's premium would rise by more than $\\$75$. Home coverage is $\\$210{,}000$, which is $210$ units. The overview already recovered rate $\\$4.68$ and fee $\\$214.70$. The extra arithmetic is only the rate increment on those $210$ units. The fee cancels out of a change.

**1.** New rate:

$$4.68 \\times 1.10 = 5.148$$

**2.** Extra dollars on Home:

$$210 \\times (5.148 - 4.68) = 210 \\times 0.468 = 98.28$$

**3.** Compare with $\\$75$:

$$98.28 > 75$$

Directly: $10\\%$ of Home's coverage charge $210 \\times 4.68 = 982.80$ is $98.28$. A solver who applied $10\\%$ to the whole Home premium $\\$1{,}197.50$ would get $\\$119.75$, still above $\\$75$, but that wrongly inflates the fee. The trap figure $\\$119.75$ is $10\\%$ of the full premium. A solver who used Auto's $85$ units would get $85 \\times 0.468=39.78$, which fails $\\$75$ and would flip the verdict. The claim names Home.

The opposite verdict would need $210 \\times 0.468 \\le 75$, so a rate increment at or below $75/210 \\approx 0.357$, which would be about a $7.6\\%$ rate rise, not $10\\%$. Renters' reconstructed $\\$25{,}000$ is a different policy.

Home's premium would rise by $\\$98.28$, which exceeds $\\$75$, so the statement is True.`,

  "math-5-59:B": `The statement gives Species B Species A's recovered rate $+72$ per year, instead of B's own $+36$, and claims Year 6 combined would then exceed the actual $1{,}772$ by more than $140$ individuals. Year 2 to Year 6 is $4$ years of growth. The overview already recovered $A=+72$ and $B=+36$. Actual combined growth is $1772-1340=432$, which is $4 \\times (72+36)=432$.

**1.** Extra annual growth if B also adds $72$:

$$72 - 36 = 36$$

**2.** Extra individuals over four years:

$$4 \\times 36 = 144$$

**3.** Compare with $140$:

$$144 > 140$$

The counterfactual Year 6 combined is $1772+144=1916$. A solver who applied the extra $36$ for only the two endpoint years, or for $6-2-1=3$ intervals, would get $108$ extra and fail the cutoff. The trap figure $108$ is three years of extra growth instead of four. Linear change from Year 2 to Year 6 includes the four increments at the ends of Years $3,4,5,6$.

A solver who raised A instead of B, or who used $+72$ on both from Year $0$, would be answering a different clock. The claim starts from the given Year 2 counts and only rewrites B's later slope.

The opposite verdict would need extra growth at or below $140$, so at most $35$ extra per year over four years. B's actual shortfall versus A is $36$ per year.

Rewriting B's rate as $+72$ adds $144$ individuals by Year 6, more than $140$, so the statement is True.`,

  "math-5-59:C": `The statement claims the Year 2 to Year 6 growth ratio of Species A to Species B exceeds $2.5:1$. The overview already recovered $A=+72$ per year and $B=+36$ per year. The window is $4$ years. The extra arithmetic is the two four-year totals, then the ratio.

**1.** Species A's growth over the window:

$$4 \\times 72 = 288$$

**2.** Species B's growth over the window:

$$4 \\times 36 = 144$$

**3.** Ratio:

$$\\frac{288}{144} = 2$$

Then $2 > 2.5$ is false. The stem already said A grows at exactly twice B's annual rate, so the four-year totals must sit in the same $2:1$ ratio. A $2.5:1$ claim would need $288:115.2$, which is not $144$ on B's side.

A solver who used Year 6 *levels* $610+288=898$ against $730+144=874$ and formed $898:874 \\approx 1.03:1$ would be comparing stocks, not growth. A solver who used $72:36$ and then added $0.5$ by mixing in the Year 2 gap $120/144$ can manufacture something near $2.5$. The trap figure $2.5$ is that mixed stock-and-flow ratio, not the growth ratio the claim named.

The opposite verdict would need B's four-year growth at or below $288/2.5=115.2$. Recovered B growth is $144$. Combined growth $432$ also splits $288+144$.

The growth ratio is $2:1$, which is not greater than $2.5:1$, so the statement is False.`,

  "math-5-59:D": `The statement claims the two species had equal populations at some time between Year 2 and Year 6. At Year 2, A is $610$ and B is $730$, so B leads by $120$. A grows at $+72$ and B at $+36$, so A closes $36$ individuals per year. This is a crossing-time letter, not a Year 6 snapshot.

**1.** Closing speed:

$$72 - 36 = 36$$

**2.** Years after Year 2 until the gap $120$ closes:

$$\\frac{120}{36} = \\frac{10}{3} \\approx 3.333$$

**3.** Calendar year of the crossing:

$$2 + \\frac{10}{3} = \\frac{16}{3} \\approx 5.333$$

Year $5.33$ sits strictly between Year 2 and Year 6. Check: after $3$ years (Year 5) A is $610+216=826$ and B is $730+108=838$, still $12$ apart. After $4$ years (Year 6) A is $898$ and B is $874$, A now ahead by $24$. The crossing is inside that last year.

A solver who compared only the integer year-end counts and never interpolated would say they were never equal, because neither Year 5 nor Year 6 is a tie. The trap is that discrete year-end table. The stem's growth is linear in time, so populations are defined between year-ends. Letter E asks whether A overtakes *before Year 5*; that is a different cutoff. This letter only asks whether a crossing exists in the open window.

The opposite verdict would need the closing time at or beyond $4$ years, so a Year 2 gap of at least $144$. The actual gap is $120$.

The populations meet about $3.33$ years after Year 2, inside the window, so the statement is True.`,

  "math-5-60:E": `The statement adds Day 1, Day 2, and the *recorded* Day 3 total and claims the three-day energy exceeds $11{,}600$ MWh. The printed rows are $3{,}990$, $4{,}072$, and recorded Day 3 $3{,}553$. The overview already recovered Plant A $145.0$ MWh/hr and Plant B $98.0$ MWh/hr, and a Day 3 *prediction* $3{,}543$. This letter uses the recorded $3{,}553$, not that prediction.

**1.** Day 1 plus Day 2:

$$3990 + 4072 = 8062$$

**2.** Add recorded Day 3:

$$8062 + 3553 = 11615$$

**3.** Compare with $11{,}600$:

$$11615 > 11600$$

The three-day recorded total is $11{,}615$ MWh, $15$ MWh above the cutoff. A solver who used the predicted Day 3 $3{,}543$ would get $11{,}605$, still above $11{,}600$, so the audit discrepancy is not the verdict. A solver who dropped Day 3 entirely would get $8{,}062$ and fail. The trap figure $11{,}605$ is the predicted-Day-3 sum; the claim names the recorded value.

The opposite verdict would need the three-day sum at or below $11{,}600$, so recorded Day 3 at or below $11{,}600-8062=3538$. Recorded Day 3 is $3{,}553$.

The recorded three-day total is $11{,}615$ MWh, which exceeds $11{,}600$, so the statement is True.`,
};

const patches = [];
for (const e of index) {
  const body = bodies[`${e.id}:${e.letter}`];
  if (!body) continue;
  patches.push({
    file: e.file,
    id: e.id,
    idx: e.idx,
    letter: e.letter,
    key: e.key,
    body,
  });
}

const applied = applyMidPatches(patches);
for (const a of applied) console.log(a.id, a.letter, a.words);
console.log("applied", applied.length);
