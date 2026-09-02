import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-6": [
    `The statement is a claim about today's Standard chair price, not about the shipment total. Premium sits $\\$45$ above Standard throughout the catalogue, so there is a single Standard price to recover.

The overview already recovered $x = 304$ as that Standard price, by substituting $y=x+45$ into the shipment $18x+12y=9660$. This letter does not rebuild that pair. It only asks whether the recovered Standard price is the number in the claim.

**1.** The recovered $304$ is attached to Standard chairs, not to Premium. A solver who quoted $349$ here would have swapped the grades.

**2.** A solver who divided $\\$9{,}660$ by $30$ chairs, ignoring the $\\$45$ gap, would land on $\\$322$ and miss the claim. That average sits between $304$ and $349$, which is exactly where a gap-blind split has to land.

The recovered Standard price is $\\$304.00$, so the statement is True.`,

    `The statement is a claim about today's Premium chair price. Premium is Standard plus the catalogue gap of $\\$45$.

The overview already recovered $x=304$, so $y=304+45=349$. The claim writes $\\$354$, five dollars above $349$.

**1.** The figure $\\$354$ is $304+50$, as if the gap were $\\$50$ instead of $\\$45$, or $322+32$ after starting from the $30$-chair average. Neither of those routes is $x+45$ at $x=304$.

**2.** At $y=354$ the shipment would be $18(304)+12(354)=5472+4248=9720$, which overshoots $\\$9{,}660$ by $\\$60$. Those extra $\\$60$ are twelve chairs times a $\\$5$ overstatement.

The claimed $\\$354$ sits $\\$5$ above the recovered $\\$349$, so the statement is False.`,

    `The statement is a claim about the twelve Premium chairs in the shipment, not about one Premium chair. The overview already recovered $y = 349$. The extra arithmetic is only multiplying by twelve.

**1.** Twelve Premium chairs at the recovered Premium price:

$$12 \\times 349 = 4188$$

**2.** A solver who used the false $\\$354$ from letter B would get $12 \\times 354 = 4248$ and miss the claim by $\\$60$. A solver who used the Standard price $304$ here would get $3648$ and undershoot.

The twelve Premium chairs in the shipment are worth $\\$4{,}188$, so the statement is True.`,

    `The statement is a claim about the catalogue gap itself. The stem already prices Premium exactly $\\$45$ above Standard. That is equation $(1)$ in the overview, not a recovered unknown.

Checking the recovered pair $x=304$ and $y=349$ gives the same gap:

$$349 - 304 = 45$$

A solver who compared Premium to the $30$-chair average $322$ would report a $\\$27$ gap and miss the claim. The gap in the catalogue is Premium minus Standard, not Premium minus the mixed average.

The catalogue gap is $\\$45.00$, so the statement is True.`,

    `This letter is not the shipment. The shipment is $18$ Standard and $12$ Premium. The claim asks for a smaller order of five of each, and compares that cost with a $\\$3{,}000$ cutoff.

The overview already has $x = 304$ and $y = 349$. The extra arithmetic is only costing the new mix and comparing it with the cutoff.

**1.** Five Standard chairs at the recovered Standard price:

$$5 \\times 304 = 1520$$

**2.** Five Premium chairs at the recovered Premium price:

$$5 \\times 349 = 1745$$

**3.** Add the two pieces and compare with $\\$3{,}000$:

$$1520 + 1745 = 3265$$

Since $3265 > 3000$, the smaller order clears the cutoff by $\\$265$.

A solver who used five times the $30$-chair average $322$ would get $1610$, wait, $5 \\times 322 \\times 2 = 3220$, nearby but not the same. A solver who forgot the $\\$45$ gap and priced both grades at $304$ would get $3040$, which still clears $\\$3{,}000$ but by only $\\$40$. A solver who used the false Premium $354$ would get $1520+1770=3290$ and still clear the cutoff, so the verdict would happen to survive that particular error. The honest costing still uses $349$.

What would have to change for the opposite verdict? If both grades were about $\\$290$ and $\\$335$, five of each would be $3125$, still over. To fall under $\\$3{,}000$ the pair would need $5(x+y)<3000$, so $x+y<600$. With $x+y=304+349=653$, the five-and-five mix is pinned at $3265$. The shipment and the $\\$45$ gap forbid a pair summing to less than $600$.

The recovered prices on five of each give $\\$3{,}265$, which is more than $\\$3{,}000$, so the statement is True.`,
  ],

  "math-5-7": [
    `The statement is a claim about ByteMobile's fixed monthly fee, not about the extra-minute rate. The two billed customers differ only in extra minutes, so the fee is the intercept of that line.

The overview already recovered $f = 17$ by subtracting the two bills to isolate the rate, then substituting back. This letter does not rebuild that pair. It only asks whether the recovered fee is the number in the claim.

**1.** The recovered $17$ is the amount charged even at zero extra minutes. A solver who quoted $0.30$ here would have swapped fee and rate.

**2.** A solver who averaged $\\$29$ and $\\$53$ would land on $\\$41$ and treat that as a fee. Averaging two bills that include extra minutes cannot isolate the intercept.

The recovered fixed fee is $\\$17.00$, so the statement is True.`,

    `The statement is a claim about the extra-minute rate. The $\\$24$ gap between the two bills is $80$ extra minutes' worth of that rate.

The overview already recovered $r = 0.30$. The claim writes $\\$0.30$ per minute, which is exactly that slope.

A solver who divided $\\$53$ by $120$ minutes would land on about $\\$0.44$ and forget the fee sitting under both bills. The fee has to cancel before the rate appears.

The advertised extra-minute rate is $\\$0.30$ per minute, so the statement is True.`,

    `This letter is not either billed customer. The ad quotes $40$ extra minutes at $\\$29$ and $120$ extra minutes at $\\$53$. The claim asks for a third month: $200$ extra minutes, and compares that bill with $\\$80$.

The overview already has $f = 17$ and $r = 0.30$. The extra arithmetic is only evaluating the plan at $200$ extra minutes.

**1.** Start from the recovered fee.

**2.** Add two hundred extra minutes at the recovered rate:

$$200 \\times 0.30 = 60$$

**3.** Add fee and extra-minute charges:

$$17 + 60 = 77$$

The bill is $\\$77$, not $\\$80$. The gap is $\\$3$.

Where does $\\$80$ come from as a trap? A solver who used $f=20$ would get $20+60=80$ exactly. A solver who used $r=0.315$ with $f=17$ would get $17+63=80$. A solver who took $\\$53$ for $120$ minutes and scaled by $200/120$ would get about $\\$88$ and overshoot. Another tempting route: $200 \\times 0.40 = 80$, using a round forty-cent rate and dropping the fee.

The plan is linear: fee plus rate times extra minutes. It is not a round $\\$80$ at a round $200$ minutes unless the fee and rate cooperate to make that happen. With $f=17$ and $r=0.30$, they do not.

What would have to change for the opposite verdict? If the fee were $\\$20$, or if the rate were $\\$0.315$, the $200$-minute bill would be $\\$80$. The two quoted customers force $f=17$ and $r=0.30$, and those force $\\$77$ at $200$ extra minutes.

The recovered plan at $200$ extra minutes bills $\\$77$, not $\\$80$, so the statement is False.`,

    `The statement is a claim about a month with no extra minutes. The ad's "simple plan" still charges the fixed monthly fee even when the customer stays inside the allowance.

The overview already recovered $f = 17$. The extra arithmetic is only evaluating the plan at zero extra minutes.

**1.** Extra-minute charges drop out:

$$17 + 0 \\times 0.30 = 17$$

**2.** The claim writes $\\$0.00$. That would be true only if there were no fee, or if unused allowance generated a credit that wiped the fee. The ad describes a fee plus a rate, not a fee that vanishes at zero extra minutes.

**3.** A solver who treated the plan as "pay only for extra minutes" would report $\\$0$ here and miss the intercept. The two quoted bills already show that even $40$ extra minutes cost $\\$29$, which is more than $40 \\times 0.30=12$, so a fee is sitting under the line.

A customer with zero extra minutes still owes $\\$17$, not $\\$0$, so the statement is False.`,

    `The statement compares ByteMobile's recovered extra-minute rate with a rival's $\\$0.20$ per minute, and claims ByteMobile is more than double the rival.

The overview already recovered $r = 0.30$. The extra arithmetic is only doubling the rival and comparing.

**1.** Double the rival's rate:

$$2 \\times 0.20 = 0.40$$

**2.** Compare ByteMobile's $0.30$ with that double:

$$0.30 < 0.40$$

ByteMobile's rate is $1.5$ times the rival's, not more than twice. "More than double" would need $r > 0.40$.

**3.** The trap is reading $0.30$ against $0.10$, or treating $0.30-0.20=0.10$ as if a ten-cent gap were already a doubling. Doubling is a ratio, not a difference. Another trap is comparing the fee $\\$17$ with some rival fee that the stem never gave.

The opposite verdict would need ByteMobile's rate above $\\$0.40$. The two quoted bills force $r=0.30$, which sits $10$ cents short of double the rival.

ByteMobile's rate is not more than double the rival's, so the statement is False.`,
  ],

  "math-5-8": [
    `The statement is a claim about how many Standard ovens were built this week, not about hours or material cost. The week completed $130$ ovens and logged $795$ assembly hours.

The overview already recovered $s = 75$ as the Standard count, by substituting $s=130-d$ into $4s+9d=795$. This letter does not rebuild that pair. It only asks whether the recovered Standard count is the number in the claim.

**1.** The recovered $75$ is attached to Standard ovens, not to Deluxe. A solver who quoted $55$ here would have swapped the models.

**2.** A solver who split $130$ in half would land on $65$ and miss the hours constraint. Standard ovens take $4$ hours and Deluxe take $9$, so the split cannot be even if the hour total is $795$.

The recovered Standard count is $75$, so the statement is True.`,

    `The statement is a claim about how many Deluxe ovens were built this week. Deluxe is the leftover after Standard's recovered $75$ is taken out of the conserved $130$.

The overview already recovered $d = 55$. The claim writes $45$, ten short of that leftover.

**1.** The figure $45$ is a typical misread: start from $130$ and subtract $85$, or treat the hour gap as if Deluxe were $10$ hours instead of $9$. At $d=45$ the hours would be $4(85)+9(45)=340+405=745$, which is $50$ hours short of $795$.

**2.** The opposite verdict would need a different hour total or a different pair of assembly times. With $130$ ovens and $795$ hours at $4$ and $9$ hours each, Deluxe cannot be $45$.

The claimed $45$ sits $10$ below the recovered $55$, so the statement is False.`,

    `The statement is a claim about Standard ovens' share of the $795$ assembly hours, not about how many Standard ovens were built. Each Standard oven takes $4$ hours.

The overview already recovered $s = 75$. The extra arithmetic is only multiplying by the Standard hour rate.

**1.** Standard hours this week:

$$4 \\times 75 = 300$$

**2.** A solver who used Deluxe's $9$ hours here would get $675$ and miss the claim. A solver who used $s=65$ from a half-split would get $260$.

Standard ovens accounted for $300$ hours, so the statement is True.`,

    `The statement is a claim about Deluxe ovens' share of the assembly hours. Each Deluxe oven takes $9$ hours, and the overview recovered $d = 55$.

**1.** Deluxe hours this week:

$$9 \\times 55 = 495$$

**2.** The claim writes $500$. That is five hours high: one extra Deluxe oven at $9$ hours, minus a $4$-hour Standard, can wander toward $500$, or a round-up from $495$. The hours also have to add to $795$: $300+495=795$, whereas $300+500=800$ would overshoot the week's log.

The recovered Deluxe hours are $495$, not $500$, so the statement is False.`,

    `This letter is where the material-cost column matters. Assembly hours recovered the counts; they do not price the steel. Standard ovens cost $\\$120$ each, and the overview already has $s = 75$.

The extra arithmetic is only multiplying count by unit material cost.

**1.** Start from the recovered Standard count, $75$.

**2.** Apply the table's Standard material cost of $\\$120$ per oven:

$$75 \\times 120 = 9000$$

**3.** A solver who used Deluxe's $\\$180$ here would get $\\$13{,}500$ and miss the claim. A solver who used $s=55$, swapping the counts, would get $\\$6{,}600$. A solver who priced all $130$ ovens at $\\$120$ would get $\\$15{,}600$ and have ignored that Deluxe uses a different material cost.

The Deluxe material column is a distractor for this letter. The claim names Standard ovens only. What would have to change for the opposite verdict? If the Standard count were $70$, the material total would be $\\$8{,}400$. If the unit cost were $\\$125$, seventy-five ovens would be $\\$9{,}375$. With $s=75$ and $\\$120$ per Standard oven, the figure is $\\$9{,}000$.

The Standard material total is $\\$9{,}000.00$, so the statement is True.`,
  ],
};

applyLetters("01_10.json", patches);
console.log("applied 6-8");
