import { load, save, applyTask } from "./_dedupe_apply.mjs";

const bodies = {
  "math-5-2": [
    `The overview already recovered the notebook price $x = 3.50$. Notebooks are the item that appears more heavily on Invoice #101, so swapping the two labels would hand that $3.50$ to pens instead. The claim is reading the recovered notebook price, not a new calculation.`,
    `The overview already recovered the pen price $y = 1.80$, thirty cents below the claimed $2.10$. A common route to $2.10$ is to treat Invoice #102's $160.50$ as if it were mostly pens and divide by $60$ without first peeling off the notebooks. That ignores the simultaneous system, which is what forces $y = 1.80$.`,
    `Invoice #101 is already the first equation of the overview, with printed total $\\$185.00$. Rebuilding that mix at the recovered prices is only a consistency check:

$$
40(3.50) + 25(1.80) = 140.00 + 45.00 = 185.00
$$

The printed total and the recovered prices agree. The trap is mixing this row up with Invoice #102's $\\$160.50$.`,
    `This mix appears on neither invoice, so it is a new costing from the recovered unit prices:

$$
10(3.50) + 10(1.80) = 35.00 + 18.00 = 53.00
$$

Ten of each lands on $\\$53.00$. Averaging the two invoice totals and scaling would not give this figure, because the two invoices use different mixes.`,
    `Costing Invoice #102 at the recovered prices is new relative to the overview, which stopped at the two unit prices:

$$
15(3.50) + 60(1.80) = 52.50 + 108.00 = 160.50
$$

The printed total is $\\$160.50$, twelve dollars below the claimed $\\$172.50$. Mixing up which invoice number carries which printed total is the usual source of the inflated figure.`,
  ],
  "math-5-3": [
    `The overview already recovered the adult price $a = 12$. Adults are the heavier item on the evening session, so swapping the two ticket types would give adults the $7$ instead. The claim is reading that recovered adult price.`,
    `The overview already recovered the child price $c = 7$. A solver who divided the matinee's $\\$2{,}130$ by its $150$ child tickets, ignoring the $90$ adults, would land well above $7$. The simultaneous system is what pins the child ticket at $\\$7.00$.`,
    `The box-office already logged the matinee at $\\$2{,}130$. Rebuilding that mix at the recovered prices is a check, not a second solve:

$$
90(12) + 150(7) = 1080 + 1050 = 2130
$$

The claimed $\\$2{,}050$ sits $\\$80$ below that logged figure. The trap is rounding the matinee down toward a round $2{,}000$, or mixing it with a different session.`,
    `The evening session was logged at $\\$2{,}200$. Rebuilding it at the recovered prices:

$$
160(12) + 40(7) = 1920 + 280 = 2200
$$

The claimed $\\$2{,}300$ is $\\$100$ too high. Adding a stray $\\$100$ onto the printed evening total, or swapping the two session revenues, is how that figure appears.`,
    `A $50$-and-$50$ split matches neither logged session, so it has to be costed from the recovered prices:

$$
50(12) + 50(7) = 600 + 350 = 950
$$

That is $\\$950$, fifty dollars short of the claimed $\\$1{,}000$. Treating each ticket as $\\$10$ on average would hit $\\$1{,}000$, but the actual average of $\\$12$ and $\\$7$ is $\\$9.50$.`,
  ],
  "math-5-4": [
    `The overview already recovered the sandwich price $x = 7$ after peeling the $\\$8$ delivery fee off both receipts. Leaving the fee inside the totals would fold delivery into the food prices and push $x$ off $7$. The claim is reading that recovered sandwich price.`,
    `The overview already recovered the wrap price $y = 5$. Wraps dominate Receipt B, so a solver who divided Receipt B's charged $\\$74$ by $9$ wraps, without removing the fee or the sandwiches, would overshoot $5$. The fee-free system is what pins the wrap at $\\$5.00$.`,
    `The overview already subtracted the fee from Receipt A to get the food subtotal $70 - 8 = 62$. Rebuilding that food mix at the recovered prices confirms the same figure:

$$
6(7) + 4(5) = 42 + 20 = 62
$$

The trap is reporting the charged $\\$70$ as if it were food, or subtracting the fee from the wrong receipt.`,
    `Receipt B's printed total is already $\\$74$, fee included. Rebuilding it from the recovered food prices plus the flat fee is the extra check:

$$
3(7) + 9(5) = 21 + 45 = 66
$$

$$
66 + 8 = 74
$$

The $\\$66$ that drove the pricing equations is the food subtotal, a different quantity from the amount actually charged.`,
    `A pickup order carries no delivery fee, so only the recovered food prices matter:

$$
5(7) + 5(5) = 35 + 25 = 60
$$

That lands on $\\$60$. Adding the $\\$8$ fee out of habit, copying the delivery receipts, would push the pickup to $\\$68$ and miss the claim.`,
  ],
  "math-5-5": [
    `The overview already recovered Account A's principal $x = 6000$, five hundred dollars short of the claimed $\\$6{,}500$. Because $4\\%$ and $7\\%$ sit fairly close together, splitting $\\$10{,}000$ by eye toward a $65$/$35$ cut is tempting, but only the weighted interest equation fixes the amounts.`,
    `The overview already recovered Account B's principal $y = 4000$, not $\\$4{,}500$. The claimed pair $\\$6{,}500$ and $\\$4{,}500$ also fails a more basic check:

$$
6500 + 4500 = 11000
$$

which overshoots the $\\$10{,}000$ actually invested. A rough half-and-half guess ignores both the total and the $0.03y = 120$ interest gap.`,
    `Account A's interest is new relative to the overview, which stopped at the principals:

$$
0.04 \\times 6000 = 240
$$

That is $\\$240$, not the claimed $\\$260$. Taking $4\\%$ of the claimed $\\$6{,}500$ would produce $260$, so the error is pricing the wrong principal rather than using the wrong rate.`,
    `Account B's interest is likewise a new step:

$$
0.07 \\times 4000 = 280
$$

That is $\\$280$, well above the claimed $\\$210$. The two interest figures also reconcile with the year's $\\$520$: $240 + 280 = 520$. Taking $7\\%$ of $\\$3{,}000$ is a route to $210$, which would require the wrong split.`,
    `This letter does not need the split. Account B pays $7\\%$ simple annual interest on whatever principal it holds, so parking the whole $\\$10{,}000$ there for the year earns

$$
0.07 \\times 10000 = 700
$$

The mixed portfolio earned only $\\$520$ because some of the money sat in the $4\\%$ account. The opposite verdict would require Account B's rate to be something other than $7\\%$.`,
  ],
  "math-5-6": [
    `The overview already recovered the Standard price $x = 304$. Building the $\\$45$ catalogue gap into the shipment equation before solving is what makes that total come out exactly; treating the gap as an afterthought would leave the $12$ Premium chairs unaccounted for.`,
    `The overview already recovered the Premium price $y = 349$, five dollars below the claimed $\\$354$. Adding $\\$50$ onto the Standard price instead of $\\$45$, or rounding $349$ up to the next five, is how $354$ appears. The catalogue rule is $y = x + 45$, not $x + 50$.`,
    `The $12$ Premium chairs in the shipment were not costed separately in the overview:

$$
12(349) = 4188
$$

The $18$ Standard chairs make up the rest, since $18(304) = 5472$ and $4188 + 5472 = 9660$. Using $y = 354$ here would overstate the Premium slice.`,
    `Equation $(1)$ already is the catalogue rule: $y = x + 45$. Checking the recovered prices gives the same gap:

$$
349 - 304 = 45
$$

The claim restates that pricing rule. What would flip it is a catalogue that priced Premium some other amount above Standard; the shipment total alone does not create the $\\$45$.`,
    `This $5$-and-$5$ mix is not the shipment's $18$-and-$12$, so it has to be costed from the recovered unit prices:

$$
5(304) + 5(349) = 1520 + 1745 = 3265
$$

Since $3265 > 3000$, the order clears the cutoff. Using $y = 354$ would still clear it, so the cutoff is not a tight test of the Premium price.`,
  ],
  "math-5-7": [
    `The overview already recovered the fixed fee $f = 17$. That fee is what remains once the per-minute charge is subtracted out of either quoted bill. Treating either bill as pure minutes, with no base fee, would force $f = 0$ and miss the $\\$17$.`,
    `The overview already recovered $r = 0.30$ from the $\\$24$ gap across $80$ extra minutes. The rate has to come from the difference between the two bills, because each bill also contains the fee. Dividing either bill by its minutes without subtracting $f$ first inflates the rate.`,
    `A month with $200$ extra minutes is not one of the ad's quoted bills:

$$
17 + 200(0.30) = 17 + 60 = 77
$$

The bill is $\\$77$, three dollars under the claimed $\\$80$. A solver who used $r = 0.30$ but took $f = 20$, or who skipped the fee and wrote $200 \\times 0.40$, could land near $\\$80$.`,
    `A month with no extra minutes still costs the recovered fee:

$$
17 + 0(0.30) = 17
$$

The customer would still owe $\\$17$, not $\\$0$. The ad describes extra minutes on top of a small fixed fee, not instead of one, so the base cost does not depend on minutes at all.`,
    `ByteMobile's recovered rate is $0.30$ per extra minute. Double the rival's $0.20$ would be

$$
2 \\times 0.20 = 0.40
$$

Since $0.30 < 0.40$, ByteMobile's rate is one and a half times the rival's, not more than double it. The trap is reading "$0.30$ versus $0.20$" as more than twice as large because $0.30$ looks half again bigger in absolute cents.`,
  ],
  "math-5-8": [
    `The overview already recovered $s = 75$ Standard ovens. The unit total and the hours total together pin the counts down; the material-cost column plays no part in this letter. Counting Deluxe first and subtracting from $130$ is the same $75$, provided Deluxe is the recovered $55$ rather than a guessed $45$.`,
    `The overview already recovered $d = 55$ Deluxe ovens, ten more than the claimed $45$. Subtracting the two headline totals $130$ and $795$ directly, instead of eliminating a variable, is a common route to an understated Deluxe count.`,
    `Standard ovens take $4$ hours each, so their share of the week is new arithmetic from the recovered count:

$$
4 \\times 75 = 300
$$

That is $300$ hours. Using the claimed $45$ Deluxe ovens would force $85$ Standard ovens and $4 \\times 85 = 340$ hours, which would no longer fit the $795$ total.`,
    `Each Deluxe oven takes $9$ hours, so the Deluxe share is

$$
9 \\times 55 = 495
$$

Deluxe ovens accounted for $495$ hours, five short of the claimed $500$. The split still reconciles with the report, since the Standard ovens used $300$ hours and $300 + 495 = 795$. Rounding $495$ up to $500$ is the trap.`,
    `This is where the material-cost column finally matters. Standard ovens cost $\\$120$ each, so the recovered count of $75$ gives

$$
75 \\times 120 = 9000
$$

The hours data alone could not have answered this. Using the Deluxe count of $55$ here, or the Deluxe material cost of $\\$180$, would price the wrong column.`,
  ],
  "math-5-9": [
    `The overview already recovered the sofa price $x = 350$ from net sales. Using either branch's gross figure as a right-hand side would leave the returns inside the prices and push $x$ off $350$. The claim is reading that recovered sofa price.`,
    `The overview already recovered the armchair price $y = 200$. Hillcrest's net equation divided by $10$ was $2x + y = 900$, so once $x = 350$ the armchair is forced: $y = 900 - 700 = 200$. Skipping the returns on Hillcrest would feed the gross $\\$9{,}300$ into that equation and miss $200$.`,
    `The overview already subtracted Riverside's returns to get net sales $9760 - 460 = 9300$. Rebuilding Riverside's line at the recovered prices confirms the same net:

$$
14(350) + 22(200) = 4900 + 4400 = 9300
$$

The trap is reporting Riverside's gross $\\$9{,}760$ as net, or mixing it with Hillcrest's printed gross of $\\$9{,}300$.`,
    `Hillcrest's printed gross is already $\\$9{,}300$. Net sales sit $\\$300$ below that, which is the figure the $20$ sofas and $10$ armchairs must account for:

$$
20(350) + 10(200) = 7000 + 2000 = 9000
$$

$$
9000 + 300 = 9300
$$

Hillcrest's gross happens to coincide numerically with Riverside's net, but the two are different quantities belonging to different branches.`,
    `Net sales are gross minus returns, so when returns are zero the two figures coincide:

$$
9760 - 0 = 9760
$$

Both would read $\\$9{,}760$. As the month actually stood, Riverside's $\\$460$ of returns pulled net down to $9300$, and it is that net figure, not the gross, that the sofas and armchairs account for. Removing the returns changes only the deduction, never the listed prices.`,
  ],
  "math-5-10": [
    `The overview already recovered the setup fee $f = 9$, three dollars below the claimed $\\$12$. The $\\$36$ gap between the two order totals is entirely $180$ pages' worth of per-page charges, so treating any part of that gap as fee is what inflates $f$.`,
    `The overview already recovered $r = 0.20$, not $\\$0.25$. Dividing the $\\$36$ gap by $144$ pages instead of $180$, or rounding $0.20$ up to a quarter, is the likely source of $0.25$. The page gap is $300 - 120 = 180$.`,
    `The overview already costed a $250$-page order at $9 + 250(0.20) = 59$. That is a dollar under the claimed $\\$60$. The trap is treating $250$ pages as if they hit QuickCopy's flat $\\$60$ and assuming PrintFast matches it.`,
    `The overview already costed a $350$-page order at $9 + 350(0.20) = 79$. QuickCopy charges a flat $\\$60$ for any order up to $350$ pages, and $79 > 60$, so PrintFast is $\\$19$ more expensive at that length, not cheaper. Stopping at the per-page rate and ignoring PrintFast's fee still leaves $70 > 60$.`,
    `The two invoices cover different page counts, so subtracting them isolates a unique rate: the coefficient $300 - 120 = 180$ is not zero. That is why the overview produced exactly one pair $(f, r) = (9, 0.20)$. Had both orders covered the same number of pages, the fee would cancel against itself and leave $r$ (and then $f$) undetermined. Different page counts are what pin the combination down.`,
  ],
};

const data = load("01_10.json");
for (const t of data) {
  applyTask(t, bodies[t.id]);
}
save("01_10.json", data);
console.log("wrote 01_10", data.map((t) => t.id).join(", "));
