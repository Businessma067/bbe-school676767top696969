import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-24:A": `The statement is a claim about BrightHome's fixed connection fee. The two bills differ only in units consumed, $\\$83.40$ at $240$ units and $\\$112.80$ at $380$ units, so the fee is the intercept of that line. Customer service's $\\$0.24$ rate is a claim to check, not a value to plug in.

The overview already recovered $f = 33$. This letter does not rebuild that pair. It only asks whether the recovered fee is the number in the claim.

**1.** The recovered $33$ is attached to the connection, not to the per-unit rate. A solver who quoted $0.21$ or $0.24$ here would have swapped fee and rate.

**2.** A solver who averaged $\\$83.40$ and $\\$112.80$ would land on about $\\$98$ and treat that as a fee. The trap figure $\\$98$ is an average of two bills that already include usage. Averaging cannot isolate the intercept.

The Solar Offset Plan has no connection fee and does not rewrite this intercept. The opposite verdict would need a different pair of billed totals. With $\\$83.40$ and $\\$112.80$ as printed, the connection fee cannot be anything other than $\\$33$.

The recovered connection fee matches the claimed $\\$33$, so the statement is True.`,

  "math-5-24:B": `The statement claims customer service's $\\$0.24$ per unit is the actual rate. The two standard-plan bills recover a different slope once the shared fee cancels. The $140$-unit gap between $380$ and $240$ units is $112.80-83.40=29.40$ dollars.

The overview already recovered $r = 0.21$. The claim writes $\\$0.24$, three cents above that slope.

**1.** The $140$-unit gap at the claimed rate:

$$140 \\times 0.24 = 33.60$$

The actual dollar gap is $\\$29.40$, not $\\$33.60$. Those extra $\\$4.20$ are $140$ times $\\$0.03$.

**2.** At $r=0.24$ and recovered $f=33$, the $240$-unit bill would be $33+57.60=90.60$, which overshoots $\\$83.40$ by $\\$7.20$.

**3.** Customer service's figure is unverified against the bills. The bills are the observations; the phone claim is not. The Solar Offset's $\\$0.29$ is a different plan and does not pull the standard rate up to $0.24$.

The opposite verdict would need the dollar gap to be $\\$33.60$ instead of $\\$29.40$. With $\\$83.40$ and $\\$112.80$ as printed, the rate cannot be $\\$0.24$.

The recovered rate is $\\$0.21$, not $\\$0.24$, so the statement is False.`,

  "math-5-25:A": `The statement is a claim about the pasta price at Trattoria Bella. Table 5 is off-peak with no service fee, $6$ pasta and $4$ appetizers for $\\$174$. Table 8 is peak with a $10\\%$ fee already included, $\\$46$ more than Table 5, for $5$ pasta and $7$ appetizers.

The overview already recovered pasta $x = 19$ after peeling Table 8's fee and solving with Table 5. This letter does not rebuild that pair. It only asks whether the recovered pasta price is the number in the claim.

**1.** The recovered $19$ is attached to pasta, not to appetizers. A solver who quoted $\\$15$ here would have swapped the plates.

**2.** A solver who divided $\\$174$ by $6$ pasta dishes, ignoring appetizers, would land on $\\$29$ and miss the claim. The trap figure $\\$29$ is a pasta-only split of Table 5. Appetizers have to come off first, and Table 8's fee has to be peeled before that table can help.

The opposite verdict would need a different Table 5 total. With $\\$174$ off-peak and a peeled Table 8 of $\\$200$, pasta cannot cost anything other than $\\$19$.

The recovered pasta price matches the claimed $\\$19$, so the statement is True.`,

  "math-5-25:B": `The statement claims an appetizer costs more than a pasta dish. The overview already recovered pasta $19$ and appetizer $15$. The extra arithmetic is only comparing those two recovered plate prices.

**1.** Appetizer minus pasta:

$$15 - 19 = -4$$

The appetizer sits $\\$4$ below pasta, not above.

**2.** Then $15 > 19$ is false. Pasta is the dearer plate.

**3.** A solver who saw Table 8's higher total with more appetizers might infer appetizers are expensive. Table 8 also has a $10\\%$ peak fee, which inflates the printed total without changing unit prices. Peel first: Table 8's food layer is $\\$200$ for $5$ pasta and $7$ appetizers, which at $19$ and $15$ rebuilds $95+105=200$.

The trap is reading a fee-inflated mix as a ranking of plate prices. The opposite verdict would need $y > x$. With $x=19$ and $y=15$, an appetizer is not more expensive.

An appetizer costs $\\$15$ and pasta $\\$19$, so an appetizer is not more expensive, so the statement is False.`,

  "math-5-26:A": `The statement is a claim about Item M's unit cost at Meridian. The inventory system logs item counts, unit weight, unit volume, and total shipment cost, but only item counts and cost determine unit pricing. Weight and volume are freight distractors.

The overview already recovered $M = 21$ from Shipment 1's $110M+80N=4470$ and Shipment 2's $70M+150N=5520$. This letter does not rebuild that pair. It only asks whether the recovered M price is the number in the claim.

**1.** The recovered $21$ is attached to M, not to N. A solver who quoted $\\$27$ here would have swapped the items.

**2.** A solver who divided Shipment 1's $\\$4{,}470$ by $110$ M units, ignoring N, would land on about $\\$40.64$ and miss the claim. The trap figure $\\$40.64$ is an M-only split of a mixed shipment. Weight and volume columns do not price M.

The opposite verdict would need a different shipment total. With $\\$4{,}470$ and $\\$5{,}520$ as printed, Item M cannot cost anything other than $\\$21$.

The recovered M cost matches the claimed $\\$21$ per unit, so the statement is True.`,

  "math-5-27:A": `The statement is a claim about the Standard planting price at Green Horizons. Job 1 is billed in bundles of $2$ Standard plus $5$ Premium. Job 2 is billed in units: $13$ Standard and $21$ Premium for $\\$1{,}301$. The overview already expanded Job 1's $7$ bundles to $14$ Standard and $35$ Premium and recovered $x = 29$.

This letter does not rebuild that pair. It only asks whether the recovered Standard price is the number in the claim.

**1.** The recovered $29$ is attached to Standard, not to Premium. A solver who quoted $\\$44$ here would have swapped the grades.

**2.** A solver who divided Job 2's $\\$1{,}301$ by $13$ Standard units, ignoring Premium, would land on $\\$100$ and miss the claim. The trap figure $\\$100$ is a Standard-only split of a mixed job. Bundles have to be unpacked before Job 1 can help, but this letter is not doing that unpacking; the overview already did.

The opposite verdict would need a different Job 2 total. With the expanded Job 1 at $\\$1{,}946$ and Job 2 at $\\$1{,}301$, Standard cannot cost anything other than $\\$29$.

The recovered Standard price matches the claimed $\\$29$ per unit, so the statement is True.`,

  "math-5-27:C": `The statement expands Job 1's $7$ bundles into unit counts. Each bundle is $2$ Standard plus $5$ Premium. The extra arithmetic is only that expansion. Unit prices are not needed.

**1.** Standard units in Job 1:

$$7 \\times 2 = 14$$

**2.** Premium units in Job 1:

$$7 \\times 5 = 35$$

**3.** Total plants in Job 1, as a check:

$$14 + 35 = 49$$

which is also $7 \\times 7$, because each bundle holds $7$ plants. The claim asks for the split, not the mixed $49$.

A solver who treated a bundle as $2+5=7$ units of one type would report $49$ mixed units and miss the split. A solver who used Job 2's $13$ and $21$ here would be naming the wrong job. The new quotation $8$ Standard and $19$ Premium is a third mix, not Job 1 unpacked.

The opposite verdict would need a different bundle recipe. With $7$ bundles of $2$ Standard and $5$ Premium, Job 1 is $14$ Standard and $35$ Premium.

Job 1 expands to $14$ Standard and $35$ Premium, so the statement is True.`,

  "math-5-28:A": `The statement is a claim about the per-diem rate at Horizon Consulting. Reimbursement is a fixed per diem for each meal day plus a fixed rate per mile. Reports 1 and 2 are the consistent pair. Report 3 is the corrupted row and is not used to recover the rates. Finance's believed $\\$0.40$ mileage rate is a claim to check, not a value to plug in.

The overview already recovered the per diem $d = 55$ from Reports 1 and 2. This letter does not rebuild that pair. It only asks whether the recovered per diem is the number in the claim.

**1.** The recovered $55$ is attached to meal days, not to miles. A solver who quoted $0.32$ here would have swapped per diem and mileage.

**2.** A solver who divided Report 1's $\\$323$ by $5$ days, ignoring miles, would land on $\\$64.60$ and miss the claim. The trap figure $\\$64.60$ is a day-only split of a mixed report. Miles have to come off first. Report 3's $\\$120$ for $7$ days is impossible at $d=55$ and must stay out.

The opposite verdict would need a different pair of clean-report totals. With Report 1 at $\\$323$ and Report 2 at $\\$245$, the per diem cannot be anything other than $\\$55$.

The recovered per diem matches the claimed $\\$55$ per day, so the statement is True.`,

  "math-5-28:B": `The statement claims Finance's $\\$0.40$ per mile is the actual mileage rate. Reports 1 and 2 recover a different slope. Report 1 is $5$ days and $150$ miles for $\\$323$. Report 2 is $3$ days and $250$ miles for $\\$245$.

The overview already recovered $r = 0.32$ from those two clean reports. Then $0.32 \\neq 0.40$.

**1.** At $r=0.40$ and recovered $d=55$, Report 1 would be

$$5 \\times 55 + 150 \\times 0.40 = 275 + 60 = 335$$

which overshoots $\\$323$ by $\\$12$. Those extra $\\$12$ are $150$ miles times an $\\$0.08$ overstatement.

**2.** Report 2 at the same false rate would be $3(55)+250(0.40)=165+100=265$, which overshoots $\\$245$ by $\\$20$, and $250 \\times 0.08=20$.

**3.** Finance's belief is unverified against payroll. The two clean reports are the observations. Report 3 cannot be used to rescue $0.40$, because Report 3 is already impossible at the recovered per diem.

The opposite verdict would need Report 1 to total $\\$335$ instead of $\\$323$. With the two clean reports as printed, the mileage rate cannot be $\\$0.40$.

The recovered mileage rate is $\\$0.32$, not $\\$0.40$, so the statement is False.`,

  "math-5-28:D": `The statement claims Report 1's total exceeds Report 2's total by more than $\\$80$. Report 1 printed $\\$323$. Report 2 printed $\\$245$. Report 3 is corrupted and is not in this comparison. The extra arithmetic is only the difference, then the cutoff.

**1.** Report 1 minus Report 2:

$$323 - 245 = 78$$

**2.** Compare with $\\$80$:

$$78 > 80$$

is false. The gap is $\\$78$, two dollars short of the cutoff.

**3.** Rebuilding at recovered $d=55$ and $r=0.32$ confirms the same printed totals: $5(55)+150(0.32)=275+48=323$ and $3(55)+250(0.32)=165+80=245$. The $\\$78$ gap is $2$ extra days minus $100$ fewer miles, $110-32=78$, not a second solve.

A solver who used $323-240$ or who added a round $\\$2$ of rounding would manufacture $\\$80$ or more. The trap figure $\\$80$ is the round bar the claim chose. The printed totals give $\\$78$ exactly. Including Report 3's $\\$120$ on either side would rewrite a comparison the claim did not ask.

The opposite verdict would need the printed gap to exceed $\\$80$. With $\\$323$ and $\\$245$ as printed, the gap is $\\$78$.

Report 1 exceeds Report 2 by $\\$78$, which is not more than $\\$80$, so the statement is False.`,

  "math-5-28:E": `The statement claims Reports 1 and 2 combined reimbursed at least $\\$550$. Report 3 is the corrupted row and is not added. The extra arithmetic is only the sum of the two clean printed totals, then the cutoff.

**1.** Add the two clean reports:

$$323 + 245 = 568$$

**2.** Compare with $\\$550$:

$$568 \\geq 550$$

The combined total clears the bar by $\\$18$.

**3.** A solver who included Report 3's $\\$120$ would get $\\$688$, still above $\\$550$, so that error would not flip the verdict. A solver who subtracted Report 3 would get $568-120=448$ and flip it. The claim names Reports 1 and 2 combined. A solver who used Finance's false $0.40$ rate to rebuild the two reports would inflate the sum and still clear $\\$550$, so that error also would not flip this particular cutoff. The honest sum still uses the printed $\\$323$ and $\\$245$.

The opposite verdict would need the two clean reports to total less than $\\$550$. With those two printed figures, the combined reimbursement is $\\$568$.

The two clean reports total $\\$568$, which is at least $\\$550$, so the statement is True.`,

  "math-5-29:A": `The statement is a claim about Widget A's labor hours per unit at Cedarline. Week 1 is fully legible: $35$ Widget A and $20$ Widget B used $445$ hours. Week 2's counts were recovered from the sticky note as $25$ A and $33$ B using $505$ hours. Week 3 is water-damaged and is not needed to recover the rates.

The overview already recovered $a = 7$ hours per Widget A. This letter does not rebuild that pair. It only asks whether the recovered A-time is the number in the claim.

**1.** The recovered $7$ is attached to Widget A, not to Widget B. A solver who quoted $10$ here would have swapped the widgets.

**2.** A solver who divided Week 1's $445$ hours by $35$ A units, ignoring B, would land on about $12.7$ and miss the claim. The trap figure $12.7$ is an A-only split of a mixed week. Widget B's hours have to come off first.

The opposite verdict would need a different Week 1 hour total. With $445$ and $505$ as the two clean hour logs, Widget A cannot take anything other than $7$ hours.

The recovered A-time matches the claimed $7$ hours per unit, so the statement is True.`,

  "math-5-29:E": `The statement reconstructs Week 3's illegible Widget A count. Week 3 logged $15$ Widget B and $290$ hours. The overview already has $a=7$ and $b=10$. The extra arithmetic is only solving one linear equation for the missing count. This letter does not rebuild Week 1 or Week 2.

**1.** B's hours in Week 3:

$$15 \\times 10 = 150$$

**2.** Remaining hours for A:

$$290 - 150 = 140$$

**3.** A units:

$$\\frac{140}{7} = 20$$

Week 3 produced $20$ Widget A units. A solver who used $b=12$ from letter B would get $290-180=110$, which is not divisible by $7$ into a clean count. The recovered $b=10$ is what makes $20$ drop out. A solver who treated $290/15 \\approx 19.3$ as an A count would have ignored B entirely.

The trap figure $110/7$ is letter B's false B-time, which refuses to land on an integer. The opposite verdict would need a different Week 3 hour log or a different recovered B-time. With $b=10$ and $a=7$, the illegible count is $20$.

The illegible Week 3 entry reconstructs as $20$ Widget A units, so the statement is True.`,

  "math-5-30:A": `The statement is a claim about Product X's price at Sterling Distributors. Two of the three branch reports reconcile; the third contains an uncorrected data-entry error. North and South are the consistent pair: $85X+70Y=4145$ and $55X+95Y=3875$. East is the row to check later, not the row to solve from.

The overview already recovered $x = 29$ from North and South. This letter does not rebuild that pair. It only asks whether the recovered X price is the number in the claim.

**1.** The recovered $29$ is attached to Product X, not to Product Y. A solver who quoted $\\$24$ here would have swapped the products.

**2.** A solver who divided North's $\\$4{,}145$ by $85$ units of X, ignoring Y, would land on about $\\$48.76$ and miss the claim. The trap figure $\\$48.76$ is an X-only split of a mixed branch. East's uncorrected revenue must stay out of the solve.

The opposite verdict would need a different North or South total. With those two reconciling rows as printed, Product X cannot cost anything other than $\\$29$.

The recovered X price matches the claimed $\\$29$, so the statement is True.`,

  "math-5-32:A": `The statement places Swift Cargo's recovered dispatch fee halfway between $\\$145$ and $\\$146$. The overview already recovered the fee $f = 145.50$ from the two mileage bills. The extra arithmetic is only checking that midpoint.

**1.** Halfway between $145$ and $146$:

$$\\frac{145 + 146}{2} = 145.50$$

**2.** Compare with the recovered fee: they match.

**3.** A solver who rounded $145.50$ to $146$ would have left the halfway point. A solver who used $460-170 \\times 2$ as a fee guess would land on $120$ and miss the claim. The trap figure $120$ is a two-dollar-per-mile leftover after stripping a round mileage charge that is not the recovered rate.

The opposite verdict would need the recovered fee to sit off $145.50$, for instance at $145$ or $146$ after a rounding. With the two Swift Cargo bills as printed, the dispatch fee is $145.50$, which is exactly the midpoint the claim named.

The dispatch fee is $\\$145.50$, which is exactly halfway between $\\$145$ and $\\$146$, so the statement is True.`,
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
