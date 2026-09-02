import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-17": [
    `The statement claims the billing office's $\\$18$ fixed charge is correct. The two bills, after peeling May's $10\\%$ late penalty, recover a different intercept.

The overview already recovered $x = 15$. The office claimed $\\$18$, which sits $\\$3$ above that intercept.

**1.** At $x=18$ and the recovered rate $y=2$, May's clean bill would be $18+18(2)=54$, but the peeled May charge is $\\$51$. Those extra $\\$3$ are the overstated fee.

**2.** The office also claimed $\\$1.85$ per cubic metre, which is not the recovered $y=2$. Both pieces of the office story fail the two bills.

The recovered fixed charge is $\\$15$, not $\\$18$, so the statement is False.`,

    `The statement is a claim about the per-cubic-metre rate. After peeling May, the $7\\,\\mathrm{m}^{3}$ gap between June and May isolates that slope.

The overview already recovered $y = 2$. The claim writes $\\$2.00$ per cubic metre, which is exactly that slope.

A solver who used the office's $\\$1.85$ here would be quoting the disputed claim, not the bills. A solver who divided $\\$65$ by $25$ would land on $\\$2.60$ and forget the fixed charge.

The recovered rate is $\\$2.00$ per cubic metre, so the statement is True.`,

    `The statement is a claim about May's water charge after the $10\\%$ late penalty is removed. May was billed $\\$56.10$ including that penalty on the entire bill.

The extra arithmetic is only dividing by $1.10$. Unit prices are not needed yet.

$$\\frac{56.10}{1.10} = 51$$

A solver who subtracted $10\\%$ of $56.10$ as $5.61$ would land on $50.49$ and miss the claim. The penalty was applied to the whole bill, so the peel is division by $1.10$.

As a check, the recovered plan $x=15$, $y=2$ rebuilds May as $15+18(2)=51$, the same figure.

May's actual water charge was $\\$51.00$, so the statement is True.`,

    `This letter is not May or June. May is $18\\,\\mathrm{m}^{3}$ (clean $\\$51$). June is $25\\,\\mathrm{m}^{3}$ at $\\$65$. The claim asks for a third month: $40\\,\\mathrm{m}^{3}$, compared with $\\$85$.

The overview already has $x = 15$ and $y = 2$. The extra arithmetic is only evaluating the plan at $40\\,\\mathrm{m}^{3}$.

**1.** Forty cubic metres at the recovered rate:

$$40 \\times 2 = 80$$

**2.** Add the recovered fixed charge:

$$15 + 80 = 95$$

**3.** Compare with $\\$85$:

$$95 \\neq 85$$

The bill is $\\$95$, not $\\$85$. The gap is $\\$10$.

Where does $\\$85$ come from as a trap? A solver who used the office's $18+40 \\times 1.85=18+74=92$ still misses $85$. A solver who used $15+40 \\times 1.75$ or $5+40 \\times 2=85$ can manufacture the claim by dropping $\\$10$ of the fee. Another route: take June's $\\$65$ and add $15\\,\\mathrm{m}^{3}$ at $\\$1.33$, wandering toward $85$.

The office's false fee $\\$18$ with the true rate $2$ would give $18+80=98$, even farther from $85$. With the recovered pair, $40\\,\\mathrm{m}^{3}$ cannot bill at $\\$85$.

What would have to change for the opposite verdict? If the fee were $\\$5$, or if the rate were $\\$1.75$ with a $\\$15$ fee, the $40\\,\\mathrm{m}^{3}$ bill would be $\\$85$. The two actual months force $x=15$ and $y=2$, and those force $\\$95$ at $40\\,\\mathrm{m}^{3}$.

The recovered plan at $40\\,\\mathrm{m}^{3}$ bills $\\$95$, not $\\$85$, so the statement is False.`,

    `The statement applies May's $10\\%$ late penalty to June's already-clean $\\$65$ bill. June had no penalty. The claim is a counterfactual.

The extra arithmetic is only multiplying by $1.10$.

$$65 \\times 1.10 = 71.50$$

A solver who added $\\$10$ as a round penalty would get $\\$75$. A solver who applied $10\\%$ only to the usage portion $50$, leaving the $\\$15$ fee unpenalized, would get $65+5=70$. The stem says May's penalty was applied to the entire bill, so the same rule on June hits the whole $\\$65$.

A $10\\%$ penalty on June would have produced $\\$71.50$, so the statement is True.`,
  ],

  "math-5-18": [
    `The statement compares a $10\\,\\mathrm{km}$ ride on CityCab with the same distance on MetroX.

The overview already recovered CityCab as base $\\$6$ plus $\\$1$ per km, and MetroX as base $\\$6$ plus $\\$1.50$ per km. The extra arithmetic is only evaluating both at $10\\,\\mathrm{km}$.

**1.** CityCab at $10\\,\\mathrm{km}$:

$$6 + 10 \\times 1 = 16$$

**2.** MetroX at $10\\,\\mathrm{km}$:

$$6 + 10 \\times 1.50 = 21$$

**3.** Compare:

$$16 < 21$$

CityCab is $\\$5$ cheaper at this distance. That $\\$5$ is $10$ kilometres times the $\\$0.50$ rate gap. Because the bases match, CityCab is cheaper at every positive distance, so it is cheaper at $10\\,\\mathrm{km}$ in particular.

A solver who used CityCab's $8\\,\\mathrm{km}$ quote $\\$14$ as a proxy for $10\\,\\mathrm{km}$ would still find $14<21$, so the verdict would survive that underestimate. A solver who swapped the rates would flip the comparison.

CityCab's $10\\,\\mathrm{km}$ fare is $\\$16$ and MetroX's is $\\$21$, so CityCab is cheaper, so the statement is True.`,

    `The statement claims both companies charge the same $\\$6$ base fare.

The overview already recovered CityCab's intercept $6$ and MetroX's intercept $6$. This letter is reading those two intercepts side by side, not rebuilding either pair.

A solver who treated CityCab's $\\$14$ for $8\\,\\mathrm{km}$ as a base would miss the per-km layer. Both intercepts sit at $\\$6$ once the rates are stripped out.

Both bases are $\\$6.00$, so the statement is True.`,

    `The statement claims MetroX is cheaper than CityCab for distances under $4\\,\\mathrm{km}$.

Both companies share a $\\$6$ base. MetroX's rate $1.50$ exceeds CityCab's rate $1$. For any positive distance the MetroX fare is strictly larger. Under $4\\,\\mathrm{km}$ is a positive-distance region, so MetroX is not cheaper there.

**1.** At a sample $3\\,\\mathrm{km}$, CityCab is $6+3=9$ and MetroX is $6+4.50=10.50$. CityCab is still cheaper.

**2.** At a sample $1\\,\\mathrm{km}$, CityCab is $7$ and MetroX is $7.50$. Still CityCab.

**3.** The fares would match only at distance $0$, where both equal the shared base $\\$6$. That is not a ride under $4\\,\\mathrm{km}$ in the sense of a cheaper MetroX trip.

A solver who thought a higher per-km rate could be offset by a lower base would need MetroX's base to sit below CityCab's. The bases are equal, so there is no offset.

MetroX is not cheaper under $4\\,\\mathrm{km}$, so the statement is False.`,

    `The statement is a new CityCab distance: $30\\,\\mathrm{km}$, compared with $\\$36$.

The overview already has CityCab as $6+1$ per km. The extra arithmetic is only evaluating at $30\\,\\mathrm{km}$.

$$6 + 30 \\times 1 = 36$$

A solver who used MetroX's rate here would get $6+45=51$ and miss the claim. A solver who forgot the base would report $\\$30$.

A $30\\,\\mathrm{km}$ CityCab ride costs $\\$36.00$, so the statement is True.`,

    `The statement claims there is a $5\\,\\mathrm{km}$ distance at which both companies charge the same fare.

Setting the two recovered rules equal:

$$6 + d = 6 + 1.50d$$

forces $d=0$. There is no positive distance at which the fares match. In particular they do not match at $5\\,\\mathrm{km}$.

**1.** At $5\\,\\mathrm{km}$, CityCab is $6+5=11$ and MetroX is $6+7.50=13.50$. Those are MetroX's printed $5\\,\\mathrm{km}$ quote and CityCab's rule at the same distance. They differ by $\\$2.50$.

**2.** The trap is reading MetroX's $5\\,\\mathrm{km}$ quote $\\$13.50$ as if CityCab also charged $\\$13.50$ there, or treating "a distance of $5\\,\\mathrm{km}$" as the $5\\,\\mathrm{km}$ MetroX observation without evaluating CityCab.

The fares match only at $0\\,\\mathrm{km}$, not at $5\\,\\mathrm{km}$, so the statement is False.`,
  ],

  "math-5-19": [
    `The statement compares Vendor A's price for Product X with Vendor B's price for Product X.

The overview already recovered $x_A=9$ and $x_B=11$. Then $9<11$, so Vendor A is cheaper on X.

A solver who compared bundle totals $\\$450$ and $\\$460$ would reach the same ranking for those particular bundles, but the claim is about unit X, not about a mixed bundle. The recovered unit prices are what the claim needs.

Vendor A charges $\\$9$ for X and Vendor B charges $\\$11$, so Vendor A is cheaper on X, so the statement is True.`,

    `The statement compares Vendor B's price for Product Y with Vendor A's price for Product Y.

The overview already recovered $y_A=18$ and $y_B=16$. Then $16<18$, so Vendor B is cheaper on Y.

The ranking on Y is the reverse of the ranking on X. A solver who assumed one vendor is cheaper on everything would miss this letter. The four bundles force a split: A wins on X, B wins on Y.

Vendor B charges $\\$16$ for Y and Vendor A charges $\\$18$, so Vendor B is cheaper on Y, so the statement is True.`,

    `This letter is the upcoming order, neither printed bundle: $40$ of X and $30$ of Y. Bramble has to choose a vendor for the whole mix.

The overview already has A's pair $(9,18)$ and B's pair $(11,16)$. The extra arithmetic is only costing the mix both ways.

**1.** Vendor A on $40$ X and $30$ Y:

$$40 \\times 9 + 30 \\times 18 = 360 + 540 = 900$$

**2.** Vendor B on the same mix:

$$40 \\times 11 + 30 \\times 16 = 440 + 480 = 920$$

**3.** Compare:

$$900 < 920$$

Vendor A is $\\$20$ cheaper overall. A's advantage on X is $40 \\times 2=80$. B's advantage on Y is $30 \\times 2=60$. Net, A wins by $\\$20$. The mix is X-heavy enough that A's cheaper X outweighs B's cheaper Y.

A solver who doubled A's first bundle $20$ X and $15$ Y would get exactly this mix at $2 \\times 450=900$, which is an honest shortcut for Vendor A, because $40$ and $30$ are double $20$ and $15$. Vendor B's first bundle doubled is $2 \\times 460=920$, the same comparison.

Vendor A costs $\\$900$ and Vendor B costs $\\$920$ on the upcoming order, so Vendor A is cheaper overall, so the statement is True.`,

    `The statement claims switching the upcoming $40$/$30$ order to Vendor B would reduce Bramble's cost by $\\$20$.

Letter C already costed the mix at $\\$900$ on A and $\\$920$ on B. Switching to B raises the total by $\\$20$, it does not reduce it.

**1.** Cost on A: $\\$900$. Cost on B: $\\$920$.

**2.** Change if switched to B:

$$920 - 900 = +20$$

That is an increase of $\\$20$, not a reduction of $\\$20$. The claim has the sign backwards. The $\\$20$ gap is real; the direction is not.

A solver who remembered "A is cheaper by $20$" from letter C but then read "switching to B reduces by $20$" as the same fact would flip the verb. Reducing is the opposite of A's advantage.

Switching to Vendor B raises the cost by $\\$20$, it does not reduce it, so the statement is False.`,

    `This letter changes the upcoming order to $60$ units of Y only, no X, and asks which vendor is cheaper on that Y-only mix.

The overview already has $y_A=18$ and $y_B=16$. The extra arithmetic is only costing sixty Y both ways.

**1.** Sixty Y at Vendor A:

$$60 \\times 18 = 1080$$

**2.** Sixty Y at Vendor B:

$$60 \\times 16 = 960$$

**3.** Compare:

$$960 < 1080$$

Vendor B is $\\$120$ cheaper on a Y-only order, because B's Y advantage of $\\$2$ runs on all $60$ units and A's X advantage never appears. This is the reverse of letter C's ranking, where the mix still had $40$ units of X.

A solver who used the $40$/$30$ totals $900$ and $920$ here would keep A's win and miss the claim. Dropping X entirely is the whole content of this letter.

On $60$ units of Y only, Vendor B costs $\\$960$ and Vendor A costs $\\$1{,}080$, so Vendor B is cheaper, so the statement is True.`,
  ],

  "math-5-20": [
    `The statement is a claim about the shared prices of Product P and Service Q. Alpha and Beta sell at identical market prices. The overview already recovered $p=50$ and $q=70$ after splitting the $\\$27{,}200$ total with the $\\$1{,}000$ gap.

This letter does not rebuild that pair. It only asks whether those recovered prices are the numbers in the claim, and whether they are shared. They are: the stem says identical market prices, and the unique pair that fits both companies' unit counts is $50$ and $70$.

Headcount growth rates are distractors. They do not enter the prices.

Product P is $\\$50$ and Service Q is $\\$70$ for both companies, so the statement is True.`,

    `The statement claims Beta generated more Q1 revenue than Alpha. The stem already says Beta earned exactly $\\$1{,}000$ more than Alpha. That comparison is the gap equation, not a recovered price.

Alpha's revenue is $\\$13{,}100$ and Beta's is $\\$14{,}100$. Beta is larger. A solver who compared unit counts $150+80=230$ against $100+130=230$ might think the revenues should match; the mix differs, so the revenues differ even at shared prices.

Beta's Q1 revenue is larger, so the statement is True.`,

    `The statement claims that a $10\\%$ rise in Alpha's Product P price, volumes unchanged, would raise Alpha's *total* revenue by exactly $10\\%$.

The overview already has $p=50$, $q=70$, and Alpha's mix $150$ P and $80$ Q. Alpha's current total is $\\$13{,}100$. The extra arithmetic is only the increment on the P line.

**1.** Alpha's current P revenue:

$$150 \\times 50 = 7500$$

**2.** A $10\\%$ P-price rise, volumes unchanged, adds $10\\%$ of that P line:

$$0.10 \\times 7500 = 750$$

**3.** That $\\$750$ as a share of Alpha's whole $\\$13{,}100$:

$$\\frac{750}{13100} \\approx 0.057$$

about $5.7\\%$, not $10\\%$. Service Q's $\\$5{,}600$ is untouched, so the total cannot rise by the same percentage as one component.

A solver who applied $10\\%$ to the whole $13100$ would get a $\\$1{,}310$ increment and accept the claim. That would be correct only if every line rose $10\\%$. Only P's price changes.

Alpha's total would rise by about $5.7\\%$, not by $10\\%$, so the statement is False.`,

    `The statement claims Alpha's projected revenue after that $10\\%$ P increase would surpass Beta's current Q1 revenue.

Letter C already found the increment $\\$750$. Alpha's new total is $13100+750=13850$. Beta's current total is $14100$.

**1.** Alpha after the increase:

$$13100 + 750 = 13850$$

**2.** Compare with Beta:

$$13850 < 14100$$

Alpha still sits $\\$250$ short of Beta. The $10\\%$ P bump is not enough to close the original $\\$1{,}000$ gap.

A solver who added $10\\%$ of Alpha's whole revenue, $1310$, would get $14410>14100$ and flip the verdict. That is letter C's error carried forward. Only P's line rises.

Alpha's projected $\\$13{,}850$ does not surpass Beta's $\\$14{,}100$, so the statement is False.`,

    `The statement compares Beta's Q-subscription revenue alone with Alpha's entire P-line revenue.

The overview already has $p=50$ and $q=70$. The extra arithmetic is only those two products.

**1.** Beta's Q line:

$$130 \\times 70 = 9100$$

**2.** Alpha's P line:

$$150 \\times 50 = 7500$$

**3.** Compare:

$$9100 > 7500$$

Beta's Q subscriptions alone exceed Alpha's whole P line by $\\$1{,}600$. A solver who compared Beta's whole $\\$14{,}100$ with Alpha's whole $\\$13{,}100$ would be answering letter B again. This letter is narrower: one line against one line.

Beta's Q revenue $\\$9{,}100$ exceeds Alpha's P revenue $\\$7{,}500$, so the statement is True.`,
  ],
};

applyLetters("11_20.json", patches);
console.log("applied 17-20");
