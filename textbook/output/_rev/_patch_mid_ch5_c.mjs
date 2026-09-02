import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-19:B": `The statement compares Vendor B's price for Product Y with Vendor A's price for Product Y. Each vendor quoted two bundles, and each vendor's pair was solved separately. The overview already recovered $y_A=18$ and $y_B=16$. Then $16<18$, so Vendor B is cheaper on Y.

**1.** Compare the two recovered Y prices:

$$18 - 16 = 2$$

Vendor B charges $\\$2$ less per unit of Y.

**2.** The ranking on Y is the reverse of the ranking on X. Vendor A won X by $\\$2$. Vendor B wins Y by $\\$2$. A solver who assumed one vendor is cheaper on everything would miss this letter. The four bundles force a split: A wins on X, B wins on Y.

**3.** A solver who compared matching bundles $\\$450$ and $\\$460$ would still be ranking mixed tickets, not unit Y. Those bundles contain $15$ units of Y and $20$ of X. The unit-Y ranking is $16$ versus $18$, recovered from each vendor's own pair.

The trap is carrying letter A's "A is cheaper" into this letter. A is cheaper on X, not on Y. Upcoming order size does not rewrite unit Y. The opposite verdict would need $y_B \\ge y_A$. With the four bundle totals as printed, $y_B=16$ and $y_A=18$.

Vendor B charges $\\$16$ for Y and Vendor A charges $\\$18$, so Vendor B is cheaper on Y, so the statement is True.`,

  "math-5-20:A": `The statement is a claim about the shared prices of Product P and Service Q. Alpha and Beta sell at identical market prices. Combined they earned $\\$27{,}200$, and Beta earned exactly $\\$1{,}000$ more than Alpha, so Alpha is $\\$13{,}100$ and Beta is $\\$14{,}100$. Those two company totals, with the unit counts, recover one shared pair.

The overview already recovered $p=50$ and $q=70$. This letter does not rebuild that pair. It only asks whether those recovered prices are the numbers in the claim, and whether they are shared. They are: the stem says identical market prices, and the unique pair that fits both companies' unit counts is $50$ and $70$.

**1.** The recovered $50$ is attached to Product P, not to Service Q. A solver who swapped the labels would quote $\\$70$ for P and miss the claim.

**2.** A solver who divided Alpha's $\\$13{,}100$ by $150$ units of P, ignoring Q, would land on about $\\$87.33$ and miss the claim. The trap figure $\\$87.33$ is a P-only split of a mixed company total.

Headcount growth of $8\\%$ versus $6\\%$ is a staffing distractor. It does not enter the prices. The opposite verdict would need a different pair of company totals or different unit counts.

Product P is $\\$50$ and Service Q is $\\$70$ for both companies, so the statement is True.`,

  "math-5-20:D": `The statement claims Alpha's projected revenue after a $10\\%$ Product P price increase, volumes unchanged, would surpass Beta's current Q1 revenue. Alpha currently has $\\$13{,}100$. Beta currently has $\\$14{,}100$. Only Alpha's P line, $150$ units at $\\$50$, is about to rise.

The overview already recovered $p=50$ and $q=70$. Letter C's increment on Alpha's P line is $0.10 \\times 7500=750$. The extra arithmetic here is only forming Alpha's new total and comparing it with Beta.

**1.** Alpha after the increase:

$$13100 + 750 = 13850$$

**2.** Compare with Beta's current Q1:

$$13850 < 14100$$

**3.** The remaining shortfall is $14100-13850=250$. The original gap was $\\$1{,}000$. A $10\\%$ bump on P closed $\\$750$ of that gap and left $\\$250$. It does not overtake Beta.

A solver who added $10\\%$ of Alpha's whole revenue, $1310$, would get $14410>14100$ and flip the verdict. That is letter C's error carried forward. Only P's line rises. Headcount growth still does not enter.

The opposite verdict would need the P increment to exceed $\\$1{,}000$, which would take a $10\\%$ bump on more than $\\$10{,}000$ of P revenue. Alpha's P line is $\\$7{,}500$. With volumes unchanged, Alpha's projected $\\$13{,}850$ does not surpass Beta's $\\$14{,}100$.

Alpha's projected $\\$13{,}850$ does not surpass Beta's $\\$14{,}100$, so the statement is False.`,

  "math-5-20:E": `The statement compares Beta's Q-subscription revenue alone with Alpha's entire P-line revenue. It is not a comparison of the two company totals. Alpha sold $150$ units of P. Beta sold $130$ subscriptions of Q. Shared prices are $p=50$ and $q=70$.

The overview already has those recovered prices. The extra arithmetic is only those two products, then the comparison.

**1.** Beta's Q line:

$$130 \\times 70 = 9100$$

**2.** Alpha's P line:

$$150 \\times 50 = 7500$$

**3.** Compare:

$$9100 > 7500$$

Beta's Q subscriptions alone exceed Alpha's whole P line by $\\$1{,}600$. A solver who compared Beta's whole $\\$14{,}100$ with Alpha's whole $\\$13{,}100$ would be answering letter B again. This letter is narrower: one line against one line.

The trap figure $\\$14{,}100$ is Beta's whole Q1, parked on a Q-only claim. The trap figure $\\$13{,}100$ is Alpha's whole Q1, parked on a P-only claim. Neither is the line the claim named.

The opposite verdict would need $130q \\le 150p$. At $q=70$ and $p=50$, that inequality fails. Headcount growth does not rewrite either line.

Beta's Q revenue $\\$9{,}100$ exceeds Alpha's P revenue $\\$7{,}500$, so the statement is True.`,

  "math-5-21:A": `The statement claims the flyer's $\\$30$ signup fee matches what members are actually charged. Maria, after her $6$th monthly payment, had paid $\\$284$. Jason, after his $10$th, had paid $\\$448$. Those two histories recover a different intercept.

The overview already recovered $x = 38$. The flyer claimed $\\$30$, which sits $\\$8$ below that intercept. This letter does not rebuild the monthly rate. It only asks whether $\\$30$ can sit on both histories.

**1.** At $x=30$ and the recovered monthly rate $y=41$, Maria would have paid

$$30 + 6 \\times 41 = 276$$

but she paid $\\$284$. Those extra $\\$8$ are the understated signup.

**2.** Jason at the same false fee would be $30+10(41)=440$, which undershoots his $\\$448$ by the same $\\$8$.

**3.** The flyer also claimed $\\$45$ per month, which is not the recovered $y=41$. At $x=30$ and $y=45$, Maria would be $30+270=300$, which overshoots $\\$284$. Both advertised numbers fail the two histories.

The trap figure $\\$30$ is the flyer's own claim, sitting in the stem as a disputed number. Quoting the flyer is not reading Maria and Jason. The opposite verdict would need Maria's total to be $\\$276$ instead of $\\$284$. With $\\$284$ and $\\$448$ as paid, the signup fee cannot be $\\$30$.

The recovered signup fee is $\\$38$, not $\\$30$, so the statement is False.`,

  "math-5-21:B": `The statement compares the actual monthly rate with the advertised $\\$45$. Maria and Jason's histories recover the slope once the shared signup fee cancels. The four extra months between Jason and Maria cost $448-284=164$.

The overview already recovered $y = 41$. Then $41 < 45$, so members pay $\\$4$ less per month than the flyer states.

**1.** The four-month gap at the claimed flyer rate:

$$4 \\times 45 = 180$$

The actual dollar gap is $\\$164$, not $\\$180$. Those extra $\\$16$ are four months times a $\\$4$ overstatement.

**2.** Compare the recovered rate with the advertised rate:

$$41 < 45$$

**3.** A solver who used $\\$45$ as if it were already confirmed would skip the two histories. A solver who divided Maria's $\\$284$ by $6$ would land on about $\\$47.33$ and mix the signup fee into the monthly rate. The trap figure $\\$47.33$ is an all-in split of Maria. The trap figure $\\$45$ is the flyer.

The opposite verdict would need the four-month gap to be $\\$180$ instead of $\\$164$. With $\\$284$ and $\\$448$ as paid, the monthly rate is $\\$41$, which is lower than $\\$45$.

The actual monthly rate is $\\$41$, which is lower than $\\$45$, so the statement is True.`,

  "math-5-22:A": `The statement is a claim about StreamPlus's Basic monthly price. The two households mix Basic-months and Premium-months at shared plan prices, with no separate connection fee.

The overview already recovered $x = 19$. This letter does not rebuild that pair. It only asks whether the recovered Basic price is the number in the claim.

**1.** The recovered $19$ is attached to Basic, not to Premium. A solver who quoted $\\$31$ here would have swapped the plans.

**2.** A solver who divided Household 1's $\\$169$ by $7$ plan-months would land on about $\\$24.14$ and mix Premium into Basic. The trap figure $\\$24.14$ is a blended month. The Premium months have to be stripped out first. Household 2's larger mixed total is a different mix, not a reason to average the two households into a fake Basic price. No connection fee sits under the plans, so there is no intercept to peel before reading Basic.

The opposite verdict would need a different pair of household totals. With the two mixed billing records as printed, Basic cannot cost anything other than $\\$19$.

The recovered Basic price matches the claimed $\\$19$ per month, so the statement is True.`,

  "math-5-22:B": `The statement is a claim about the Premium monthly price. The overview already recovered $y = 31$. The claim writes $\\$35$, four dollars above that leftover. This letter does not rebuild Basic. It only asks whether $\\$35$ can sit on both mixed household totals.

**1.** At $y=35$ with recovered Basic $x=19$, Household 1's $4$ Basic plus $3$ Premium months would be

$$4 \\times 19 + 3 \\times 35 = 76 + 105 = 181$$

which overshoots $\\$169$ by $\\$12$. Those extra $\\$12$ are three Premium months times a $\\$4$ overstatement.

**2.** The figure $\\$35$ is a typical round guess, or $\\$255/7 \\approx 36$ after treating Household 2 as all Premium.

**3.** At the recovered $y=31$, Household 1 rebuilds as $4(19)+3(31)=76+93=169$, matching the printed total. That check uses the recovered pair, not a second solve.

The opposite verdict would need Household 1's total to be $\\$181$ instead of $\\$169$. With the two mixed records as printed, Premium cannot cost $\\$35$.

The claimed $\\$35$ sits $\\$4$ above the recovered $\\$31$, so the statement is False.`,

  "math-5-23:A": `The statement is a claim about the organic apple price after bread and eggs are peeled off the receipts. A note reminds shoppers that loyalty-card members save $5\\%$ storewide, but neither receipt belongs to a loyalty member, so no discount has actually been applied.

The overview already recovered $x = 4.80$. This letter does not rebuild that pair. It only asks whether the recovered apple price is the number in the claim.

**1.** The recovered $4.80$ is attached to apples, not to almond milk. A solver who quoted $\\$6$ here would have swapped the items.

**2.** A solver who divided Receipt 1's $\\$50$ by $5$ pounds of apples, ignoring everything else, would land on $\\$10$ and miss the claim. The trap figure $\\$10$ is an apple-only split of a mixed receipt. Bread, eggs, and milk all have to come off first.

The opposite verdict would need a different peeled remainder on one of the two receipts. With the two non-loyalty receipts as printed, apples cannot cost anything other than $\\$4.80$ per pound.

The recovered apple price matches the claimed $\\$4.80$ per pound, so the statement is True.`,

  "math-5-23:B": `The statement claims almond milk costs less per unit than organic apples. The overview already recovered $x=4.80$ per pound for apples and $y=6$ per carton for milk. The extra arithmetic is only comparing those two recovered unit prices on the units as sold.

**1.** Milk minus apples, on the units as sold:

$$6 - 4.80 = 1.20$$

Milk sits $\\$1.20$ above apples, not below.

**2.** Then $6 < 4.80$ is false. Milk is the dearer item.

**3.** Five pounds of apples cost $5 \\times 4.80=24$, and four cartons of milk cost $4 \\times 6=24$, which is letter C's equality. That equality does not make one carton cheaper than one pound. It makes five pounds match four cartons.

Per-unit comparison here is carton versus pound, which is what the claim asks. A solver who converted to some other unit would be answering a different question. Loyalty $5\\%$ was not applied. The opposite verdict would need $y < x$. With $y=6$ and $x=4.80$, milk is not cheaper per unit.

Almond milk costs $\\$6$ and apples $\\$4.80$, so milk is not cheaper per unit, so the statement is False.`,
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
