import fs from "node:fs";

const file = "textbook/output/_rev/ch11/41_50.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const bodies = {
  "math-11-41": [
    `Ms. Kettering's bonus sits one year out. The statement is asking for the one-year discount factor at the $5\\%$ annual rate, not yet for the dollar present value of the $\\$8,000$.

The overview recovered that factor as about $0.9524$. This letter is reading that recovered split. It is not multiplying it through the bonus.

**1.** The trap is treating $0.95$ as a one-year $5\\%$ haircut taken linearly off the face, as if every dollar due next year were already worth $95$ cents. That shortcut sits near $0.9524$ but is not the reciprocal of $1.05$.

**2.** Another mix-up is quoting $1.05$ itself as the discount factor. Growth and discount are reciprocals: money left in the market would grow by $5\\%$, so a dollar due in a year is worth $1/1.05$ today.

**3.** The factor is the shared input to every later letter. Getting $0.9524$ right is what lets the recovered PDV of about $\\$7,619.05$ come out as it does.

The recovered discount factor is $0.9524$, so the statement is True.`,

    `The marketing agency is being asked what the client's $\\$8,000$ performance bonus is worth in today's money, not what will be paid in a year. The wait is one year and the market rate is $5\\%$ compounded annually.

The overview recovered $\\mathrm{PDV}\\approx \\$7{,}619.05$ from the $\\$8,000$ face times the recovered factor $0.9524$. This letter is reading that dollar present value. It is not rebuilding the reciprocal of $1.05$.

In the story, Kettering could take that $\\$7,619.05$ today, invest it at $5\\%$, and match the bonus next year. That is why the present value sits below the face: waiting has a price. The agency that books the bonus at $\\$8,000$ today would overstate current resources by the cost of that wait.

**1.** A rushed solver who multiplied $\\$8,000$ by $0.95$, taking a $5\\%$ haircut off the top, would land on $\\$7,600$. That is close to $\\$7,619.05$, which is why the trap is tempting, but it is the linear shortcut rather than the reciprocal discount.

**2.** Someone who added $5\\%$ instead of discounting would report $\\$8,400$, as if the bonus were already in hand and growing. Present value shrinks a future sum. It does not grow it.

**3.** Letter D asks for the dollar gap between face and present value. This letter only asks whether the recovered PDV is about $\\$7,619.05$. The cents match the overview's rounding of $8{,}000\\times 0.9524$.

If the bonus were paid today, the present value would be the full $\\$8,000$. If the rate were $0\\%$, the same thing would happen. Neither of those is the stem: the money is one year out at $5\\%$. A claimed present value of $\\$8,000$ would need one of those two changes.

The recovered PDV of the bonus is about $\\$7,619.05$, so the statement is True.`,

    `The statement swaps the original $5\\%$ arrangement for a $10\\%$ rate and claims that the $\\$8,000$ bonus would then be worth more today, not less. That is a ranking claim about present value, not a new face amount.

The overview already recovered both present values: about $\\$7,619.05$ at $r=0.05$, and about $\\$7,272.73$ at $r=0.10$. This letter is reading that ranking. It is not re-dividing $8{,}000$ by $1.10$.

A higher opportunity cost makes waiting more expensive. If Kettering can earn $10\\%$ elsewhere, she is less willing to sit on an unpaid bonus. The client's promise is then worth fewer of today's dollars, even though the check next year is still $\\$8,000$.

**1.** The trap is thinking "higher rate, higher value," as if the bonus were a deposit that grows. The bonus is a future inflow being discounted. Rate and present value move in opposite directions.

**2.** A solver who compared $10\\%$ with $5\\%$ as if those percentages themselves were the present values would never look at the recovered pair $\\$7,273$ versus $\\$7,619$. The comparison lives in the dollars, not in the quoted rates.

**3.** The gap is about $\\$346$. That is not a rounding issue. It is the extra discount that the doubled rate takes off the same face.

The opposite verdict would need a lower rate, not a higher one, or a bonus paid sooner rather than later. Raising $r$ while holding $K$ and $t$ fixed can only pull PDV down.

The recovered $10\\%$ PDV sits below the recovered $5\\%$ PDV, so the statement is False.`,

    `The statement asks how much of the $\\$8,000$ face is given up by waiting one year at $5\\%$. That gap is face minus present value, not a second discounting pass.

The overview recovered $\\mathrm{PDV}\\approx \\$7{,}619.05$ and the waiting cost
$$8{,}000-7{,}619.05=380.95.$$
The claim puts that gap at $\\$423.81$, which is about $\\$43$ too high.

**1.** The figure $\\$423.81$ is what you get if you take $5\\%$ of $\\$8,476$, or if you mix a $5.3\\%$ haircut with the face. Neither of those is $8{,}000$ minus the recovered PDV. A rushed solver who computed $8{,}000\\times 0.052976$ would manufacture a neighbour of $423.81$ without ever subtracting.

**2.** Another mix-up is taking $5\\%$ of $\\$8,000$ itself, which is $\\$400$. That linear interest on the face sits near both $380.95$ and the claimed $423.81$, which is why a one-line "$5\\%$ of the bonus" shortcut looks plausible and still misses.

**3.** Letter B already locked the present value at about $\\$7,619$. This letter only asks whether the distance from $\\$8,000$ down to that present value is $\\$423.81$. It is $\\$380.95$.

The opposite verdict would need a recovered PDV near $\\$7,576$, because $8{,}000-7{,}576=424$. That would require a rate a little above $5\\%$, or a wait a little longer than one year. The stem has $r=0.05$ and $t=1$.

Kettering gives up about $\\$381$ of present value by waiting, not $\\$424$, so the statement is False.`,

    `The statement resets the market rate to $0\\%$ and claims that the $\\$8,000$ bonus would then be worth $\\$7,500$ today. That is a zero-rate present-value claim, not a rounding of the original $5\\%$ figure.

The overview recovered that at $r=0$ the discount factor is $1$, so
$$\\mathrm{PDV}=8{,}000.$$
Waiting is free when money does not grow. The claimed $\\$7,500$ is $\\$500$ too low.

A rushed solver might knock $\\$500$ off the face as a round "waiting penalty," or might reuse a $6.25\\%$ haircut from some other problem. Neither move is the $r=0$ model. At a zero rate, next year's dollar is this year's dollar.

The opposite verdict would need a positive rate large enough to pull $\\$8,000$ down to $\\$7,500$, which is a $6.67\\%$ one-year discount, not the stem's $0\\%$.

The recovered zero-rate PDV is the full $\\$8,000$, so the statement is False.`,
  ],

  "math-11-42": [
    `The consultant's milestone is three years from sign-off. The statement is asking for the continuous discount factor at $6\\%$ over those three years, not yet for the dollar present value of the $\\$12,000$.

The overview recovered $rt=0.18$ and $e^{-0.18}\\approx 0.8353$. This letter is reading that recovered factor.

**1.** The trap is treating $0.06\\times 3=0.18$ itself as the discount, as if $18\\%$ of the face were simply shaved off. Linear discounting would give $0.82$, not $0.8353$.

**2.** Another mix-up is using $(1.06)^{-3}\\approx 0.8396$, the annual-clock factor. Continuous discounting is slightly harder at the same quoted rate, so $0.8353$ sits just below $0.8396$.

**3.** The factor is the shared input to the recovered PDV of about $\\$10,023.24$. Getting $0.8353$ right is what lets that dollar figure come out.

The recovered continuous discount factor is $0.8353$, so the statement is True.`,

    `The IT consultant is being asked what a $\\$12,000$ sign-off payment three years out is worth today, when the client's finance desk discounts continuously at $6\\%$ per year.

The overview recovered $\\mathrm{PDV}\\approx \\$10{,}023.24$ as $12{,}000$ times the recovered factor $0.8353$. This letter is reading that dollar present value. It is not rebuilding $e^{-0.18}$.

In the story, the consultant who books $\\$12,000$ as if it were cash today would overstate current resources. The finance department's continuous clock takes about $\\$1,977$ off the face for the three-year wait.

**1.** A rushed solver who used annual compounding instead would land near the overview's other figure, about $\\$10,075$. That is the same quoted $6\\%$ on a slower clock, and it is not this letter's claim.

**2.** Someone who subtracted $6\\%\\times 3=18\\%$ of $\\$12,000$ linearly would report $\\$9,840$. Continuous discounting is not a straight $18\\%$ haircut. The recovered $\\$10,023$ sits above that linear shortcut.

**3.** Letter D asks how far the annual PDV sits above this continuous PDV. This letter only asks whether the continuous present value is about $\\$10,023.24$. The cents match the overview.

If the payment were due today, PDV would be the full $\\$12,000$. If the rate were $0\\%$, the same thing would happen. The stem has a three-year wait at a positive continuous rate.

The recovered continuous PDV is about $\\$10,023.24$, so the statement is True.`,

    `The statement ranks two clocks on the same $\\$12,000$ milestone: continuous $6\\%$ versus annual $6\\%$, both for three years. It claims the continuous present value is the larger of the two.

The overview recovered both: about $\\$10,023.24$ continuously and about $\\$10,075.66$ annually. Continuous compounding grows money faster at a fixed quoted rate, so it discounts a future sum harder. The continuous PDV is the smaller figure, not the greater.

**1.** The trap is thinking "continuous is always better for the person receiving money." Continuous is better for a deposit that you own and that is growing. Here the consultant is waiting on someone else's payment. A stronger growth clock on the discounting side pulls today's value down.

**2.** A solver who compared the factors $0.8353$ and $0.8396$ in the wrong order, or who treated $e^{0.18}$ as a discount rather than a growth factor, would agree with the wording. The recovered pair already blocks that reading: $10{,}023<10{,}076$.

**3.** The gap is only about $\\$52$. That small dollar difference is why the ranking is easy to flip in one's head. The ranking itself is not small: it is the qualitative fact that more frequent compounding, at a fixed nominal rate, is the stronger clock.

The opposite verdict would need the *effective* rate held fixed while frequency rose, which is a different quoting convention. The stem holds the *nominal* $6\\%$ fixed.

The recovered continuous PDV sits below the recovered annual PDV, so the statement is False.`,

    `The statement accepts that annual compounding gives a higher present value than continuous compounding, and then names the gap as about $\\$60$.

The overview recovered $\\mathrm{PDV}_{\\mathrm{ann}}\\approx \\$10{,}075.66$ and $\\mathrm{PDV}_{\\mathrm{cont}}\\approx \\$10{,}023.24$. Their difference is about $\\$52.42$, not $\\$60$.

**1.** The ranking in the wording is right. The dollar amount is wrong. A rushed solver who rounded $10{,}076-10{,}023$ as "$\\$50$ something, call it $\\$60$" would sign off on the claim. The overview's subtraction is $52.42$.

**2.** Another mix-up is taking $0.5\\%$ of $\\$12,000$, which is $\\$60$ exactly. That is a round $60$ basis-point haircut on the face, not the gap between two recovered present values.

The opposite verdict would need the two clocks to sit $\\$60$ apart, which would require a longer wait or a higher rate than $t=3$ and $r=0.06$.

The recovered gap is about $\\$52$, not $\\$60$, so the statement is False.`,

    `The statement doubles the wait from three years to six and claims that the continuous present value of the same $\\$12,000$ milestone would then be smaller.

The overview recovered the six-year figure as about $\\$8,372.11$, against the three-year $\\$10,023.24$. A later payment is worth strictly less today at a positive rate.

**1.** Doubling time does not halve present value. Half of $\\$10,023$ would be about $\\$5,012$. The recovered six-year PDV is $\\$8,372$, well above that half. Exponential discounting is not linear in $t$.

**2.** The extra arithmetic this letter needs is only the comparison $8{,}372<10{,}023$. The factor $e^{-0.36}\\approx 0.6977$ is already in the overview. This letter is reading that recovered pair, not rebuilding the exponent.

**3.** A rushed solver who thought "twice the wait, twice the discount" might expect PDV to fall by another $\\$1,977$, landing near $\\$8,046$. The actual six-year figure is $\\$8,372$. The extra three years discount a smaller remaining present value, so they take off less than the first three years did.

If the rate were $0\\%$, stretching the horizon would not change PDV at all. The stem's $r=0.06$ is what forces the six-year value down.

The recovered six-year PDV sits below the recovered three-year PDV, so the statement is True.`,
  ],

  "math-11-43": [
    `The landlord is waiting eight years for $\\$45,000$ of escrowed sale proceeds. The statement is asking for the annual-clock discount factor at $7\\%$, not yet for the dollar present value.

The overview recovered $(1.07)^{8}\\approx 1.718186$ and $(1.07)^{-8}\\approx 0.5820$. This letter is reading that recovered factor.

**1.** The trap is quoting $1-8\\times 0.07=0.44$, a linear eight-year haircut. Annual compounding does not subtract $7\\%$ eight times. The recovered factor $0.5820$ sits well above $0.44$.

**2.** Another mix-up is using $e^{-0.56}\\approx 0.5712$, the continuous factor from later in the overview. Annual and continuous clocks are different. This letter is the annual one.

**3.** The factor is the shared input to the recovered annual PDV of about $\\$26,190.41$. Getting $0.5820$ right is what lets that dollar figure come out.

The recovered annual discount factor is $0.5820$, so the statement is True.`,

    `The accountant is converting eight-year escrowed proceeds into today's dollars on the annual $7\\%$ clock. The statement names that present value as about $\\$26,190.41$.

The overview recovered $\\mathrm{PDV}_{\\mathrm{ann}}\\approx \\$26{,}190.41$ as $45{,}000$ times the recovered factor $0.5820$. This letter is reading that dollar figure. It is not rebuilding $(1.07)^{8}$.

In the story, the landlord who treats $\\$45,000$ as if it were already in hand would overstate current wealth by about $\\$18,810$. Title-dispute money eight years out is not cash today.

**1.** A rushed solver who used the continuous factor $0.5712$ instead would land near $\\$25,704$, the other recovered present value. That is letter C's object, not this one.

**2.** Someone who took $7\\%\\times 8=56\\%$ off the face linearly would report $\\$19,800$. The recovered $\\$26,190$ is much higher, because compound discounting is not an $56\\%$ haircut.

**3.** Letter D asks how far this annual PDV sits above the continuous PDV. This letter only asks whether the annual present value is about $\\$26,190.41$.

If the escrow cleared today, PDV would be $\\$45,000$. If the rate were $0\\%$, the same. The stem has an eight-year wait at $7\\%$.

The recovered annual PDV is about $\\$26,190.41$, so the statement is True.`,

    `The statement names the continuous-clock present value of the same $\\$45,000$ as about $\\$24,900$.

The overview recovered $\\mathrm{PDV}_{\\mathrm{cont}}\\approx \\$25{,}704.41$ from $45{,}000e^{-0.56}$. The claimed $\\$24,900$ understates that by about $\\$804$.

**1.** Continuous discounting uses the exponent $rt=0.07\\times 8=0.56$ and the factor $e^{-0.56}\\approx 0.5712$. Those are already in the overview. This letter is checking the dollar product, not rebuilding the exponent.

**2.** The figure $\\$24,900$ is what you get if you take $44.67\\%$ off the face, or if you round $45{,}000\\times 0.553$ by hand. It is not $45{,}000\\times 0.5712$. A rushed solver who mixed the annual factor $0.5820$ with a further $4\\%$ haircut could manufacture a neighbour of $24{,}900$.

**3.** Relative to the annual PDV of about $\\$26,190$, the continuous figure should sit a few hundred dollars lower, not $\\$1,290$ lower. The claimed $\\$24,900$ overshoots that ranking.

The opposite verdict would need a recovered continuous PDV near $\\$24,900$, which would require a higher rate or a longer wait than $r=0.07$ and $t=8$.

The recovered continuous PDV is about $\\$25,704$, not $\\$24,900$, so the statement is False.`,

    `The statement ranks the two recovered present values and names their gap as about $\\$650$.

The overview recovered $\\$26,190.41$ annually and $\\$25,704.41$ continuously. The difference is $\\$486.00$, not $\\$650$.

**1.** The ranking is right: annual compounding discounts less hard than continuous compounding at the same quoted $7\\%$. The dollar amount is wrong. A rushed solver who rounded "$\\$500$ something" up to $\\$650$ would sign off.

**2.** Another mix-up is taking $1.44\\%$ of $\\$45,000$, which is $\\$648$. That is a round gap invented from the face, not $26{,}190-25{,}704$.

**3.** Letter C already locked the continuous PDV at about $\\$25,704$. Letter B locked the annual PDV at about $\\$26,190$. This letter only subtracts.

The opposite verdict would need those two clocks to sit $\\$650$ apart. At $r=0.07$ and $t=8$ they sit $\\$486$ apart.

The recovered gap is $\\$486$, not $\\$650$, so the statement is False.`,

    `The statement resets the rate to $0\\%$ and claims that both clocks would then give $\\$40,000$.

The overview recovered that at $r=0$ both discount factors collapse to $1$, so both methods return the full $\\$45,000$. The claimed $\\$40,000$ is $\\$5,000$ too low.

A rushed solver might knock $\\$5,000$ off as a round "escrow haircut," or might reuse some other problem's $\\$40,000$ face. At a zero rate, eight years from now is the same as today.

The opposite verdict would need a positive rate that pulls $\\$45,000$ down to $\\$40,000$. The stem's $r=0$ does not.

The recovered zero-rate PDV is $\\$45,000$ on both clocks, so the statement is False.`,
  ],

  "math-11-44": [
    `The dental practice is funding a $\\$150,000$ imaging purchase five years out, on a continuous $4.5\\%$ account. The statement names the continuous discount factor as about $0.8125$.

The overview recovered $rt=0.225$ and $e^{-0.225}\\approx 0.7985$. The claimed $0.8125$ sits about $0.014$ too high.

**1.** The trap is using $1-0.045\\times 5=0.775$, or splitting the difference between $0.775$ and $1$ to invent $0.8125$. Linear discounting is not $e^{-rt}$.

**2.** Another mix-up is $(1.045)^{-5}\\approx 0.8025$, the annual-clock factor. Continuous discounting is slightly harder, so $0.7985$ sits just below $0.8025$. The claim's $0.8125$ is above both.

The recovered continuous factor is $0.7985$, not $0.8125$, so the statement is False.`,

    `The practice is asking how much must be deposited today so that a continuous $4.5\\%$ account grows to $\\$150,000$ in five years. That deposit is the present value of the equipment goal.

The overview recovered $A\\approx \\$119{,}777.40$ as $150{,}000$ times the recovered factor $0.7985$. This letter is reading that required opening balance. It is not rebuilding $e^{-0.225}$.

In the story, $\\$119,777$ parked today at continuous $4.5\\%$ is the unique amount that hits the imaging target on date. Depositing the full $\\$150,000$ today would overfund the purchase. Depositing nothing would miss it.

**1.** A rushed solver who used the false factor $0.8125$ from letter A would report about $\\$121,875$. That is why A and B are linked: the wrong factor produces a nearby but wrong deposit.

**2.** Someone who divided $\\$150,000$ by $1.045\\times 5$ or by $1.225$ would land in a different neighbourhood. The recovered deposit uses $e^{-0.225}$, already computed in the overview.

**3.** Letter C tests a $\\$110,000$ trial deposit. This letter only asks whether the required deposit is about $\\$119,777.40$. The cents match the overview's rounding.

If the equipment were bought today, the required "deposit" would be $\\$150,000$. If the rate were $0\\%$, the same. Five years of continuous $4.5\\%$ is what lets the practice put up less than the face.

The recovered required deposit is about $\\$119,777.40$, so the statement is True.`,

    `The statement asks whether a $\\$110,000$ deposit today would still grow to the $\\$150,000$ imaging goal in five years at the same continuous $4.5\\%$.

The overview already grew that trial deposit forward: $e^{0.225}\\approx 1.2523$, so $\\$110,000$ reaches only about $\\$137,755.50$. That sits about $\\$12,245$ short of $\\$150,000$.

**1.** This is extra arithmetic relative to letter B only in the sense of applying the reciprocal factor to a different opening amount. The growth factor $e^{0.225}$ is already in the overview as the reciprocal of $0.7985$. This letter is reading that recovered shortfall.

**2.** The trap is thinking "$\\$110,000$ is close to $\\$119,777$, so it should be close enough." Being $\\$9,777$ light on the opening deposit is not a rounding error. At this rate it becomes a $\\$12,245$ miss on the target.

**3.** A solver who compared $\\$110,000$ with $\\$150,000$ without growing it would say the deposit is "obviously too small" without naming the $\\$137,756$ landing point. The recovered future value is what makes the miss precise.

The opposite verdict would need the trial deposit to be at least the recovered $\\$119,777$, or the rate to be high enough that $\\$110,000$ grows to $\\$150,000$ in five years. That rate would be $r=\\frac{1}{5}\\ln(150/110)\\approx 6.19\\%$, not $4.5\\%$.

The recovered five-year value of $\\$110,000$ is about $\\$137,756$, short of the goal, so the statement is False.`,

    `The statement swaps continuous compounding for annual compounding at the same $4.5\\%$ nominal rate, and claims that the required deposit today would then be *lower*.

The overview recovered the annual-clock deposit as about $\\$120,367.90$, against the continuous $\\$119,777.40$. Annual interest is credited only once a year, so a larger opening balance is needed to hit the same $\\$150,000$ target. The annual deposit is higher, not lower.

**1.** The trap is thinking "annual compounding is simpler, so you need less money." Simpler is not stronger. At a fixed nominal rate, fewer compounding dates grow the account more slowly, so you must start with more.

**2.** A rushed solver who compared $0.8025$ with $0.7985$ in the wrong direction would agree with the wording. The smaller discount factor (continuous) is the one that permits the smaller deposit.

**3.** The gap is about $\\$590$. That is the extra the practice must put up if the bank switches from continuous to annual crediting.

The opposite verdict would need the *effective* rate held fixed while frequency fell. The stem holds the *nominal* $4.5\\%$ fixed.

The recovered annual deposit exceeds the recovered continuous deposit, so the statement is False.`,

    `The statement doubles the horizon to ten years and claims that the required deposit today would then be exactly half of the five-year deposit.

The overview recovered the ten-year deposit as about $\\$95,644.20$. Half of the five-year $\\$119,777$ is about $\\$59,889$. Those are not equal.

**1.** Exponential discounting does not halve when time doubles. The ten-year factor is $e^{-0.45}\\approx 0.6376$, not half of $0.7985$. Half of $0.7985$ would be $0.3993$, which would require a much longer wait.

**2.** A rushed solver who treated present value as inverse-linear in time would sign off on "twice the wait, half the deposit." The recovered pair $\\$95,644$ versus $\\$59,889$ is the extra arithmetic that blocks that reading.

**3.** The ten-year deposit is still about $64\\%$ of the five-year deposit, not $50\\%$. Extra years help, but each extra year discounts a smaller remaining present value.

If the rate were $0\\%$, doubling the horizon would not change the deposit at all. The stem's $r=0.045$ is what pulls the ten-year figure down, just not all the way to half.

The recovered ten-year deposit is about $\\$95,644$, not half of $\\$119,777$, so the statement is False.`,
  ],

  "math-11-45": [
    `The investor paid $\\$18,500$ today for a note that pays $\\$25,000$ at maturity. The statement is asking for the payoff-to-price ratio, the multiple the note must grow by.

The overview recovered
$$\\frac{K}{\\mathrm{PDV}}=\\frac{25{,}000}{18{,}500}\\approx 1.3514.$$
This letter is reading that recovered multiple. It is not yet taking logarithms.

**1.** The trap is writing $18{,}500/25{,}000=0.74$ and calling that the ratio the claim wants. That is the discount factor, the reciprocal. The statement asks for payoff over price, which is greater than one.

**2.** Another mix-up is $25{,}000-18{,}500=6{,}500$ reported as a ratio. A dollar gap is not a growth multiple.

**3.** The ratio $1.3514$ is the shared input to the recovered maturity $t\\approx 5.17$ years. Getting the multiple right is what lets the logarithm come out.

The recovered payoff-to-price ratio is $1.3514$, so the statement is True.`,

    `The statement asks how long the note must run, under annual $6\\%$ compounding, for $\\$18,500$ to grow to $\\$25,000$. That unknown is the implied maturity $t$.

The overview recovered $t\\approx 5.17$ years from
$$t=\\frac{\\ln 1.3514}{\\ln 1.06}\\approx\\frac{0.3011}{0.05827}.$$
This letter is reading that recovered wait. It is not rebuilding the ratio $1.3514$.

In the story, $5.17$ years is the unique maturity that makes the $\\$18,500$ purchase price consistent with a $\\$25,000$ payoff at $6\\%$ annual compounding. A shorter note at the same price would be a bargain. A longer one would be rich.

**1.** A rushed solver who divided $0.3514$ by $0.06$ would report about $5.86$ years, treating the extra $35\\%$ as simple interest. The logarithm is what converts a growth multiple into a compound wait.

**2.** The rule of $72$ at $6\\%$ gives a doubling time of $12$ years. This note only grows by a factor $1.3514$, not $2$, so the wait must be well under $12$ years. The recovered $5.17$ sits in that range. The claim's $5.17$ matches the overview, not a rule-of-$72$ guess.

**3.** Letter D asks for the continuous-clock maturity. This letter is the annual-clock $5.17$. Mixing the two is the usual later trap.

If the price were higher, $t$ would be shorter, because less growth would be required. If the rate were higher, $t$ would also be shorter. The stem has $\\mathrm{PDV}=\\$18{,}500$ and $r=0.06$.

The recovered annual-compounding maturity is about $5.17$ years, so the statement is True.`,

    `The statement raises the purchase price from $\\$18,500$ to $\\$20,000$ for the same $\\$25,000$ payoff at the same $6\\%$, and claims that the implied maturity would then be *longer*.

The overview recovered the new wait as about $3.83$ years, against the original $5.17$. A higher price means the note has less growing left to do, so it matures sooner, not later.

**1.** The extra arithmetic is the new ratio $25{,}000/20{,}000=1.25$ and $t=\\ln 1.25/\\ln 1.06\\approx 3.83$. Those figures are already in the overview. This letter is reading the ranking $3.83<5.17$.

**2.** The trap is thinking "you paid more, so you must wait more." Price and maturity move in opposite directions when $K$ and $r$ are held fixed. Paying more for the same future payoff is how you buy a shorter-dated note.

**3.** A solver who compared $\\$20,000$ with $\\$18,500$ as if those were times, or who added $1.5$ years because the price rose $8\\%$, would agree with the wording. The recovered pair blocks that.

The opposite verdict would need a *lower* price, which enlarges the required multiple and lengthens $t$. Raising the price shortens $t$.

The recovered $\\$20,000$ maturity sits below the recovered $\\$18,500$ maturity, so the statement is False.`,

    `The statement switches the clock from annual compounding to continuous compounding and names the implied maturity as about $5.45$ years.

The overview recovered the continuous wait as
$$t=\\frac{\\ln 1.3514}{0.06}\\approx 5.02$$
years, not $5.45$. The claimed figure overstates this by about $0.43$ years.

**1.** Continuous inversion divides the same logarithm by $r$ itself, not by $\\ln(1+r)$. That is why $5.02$ sits slightly below the annual $5.17$: continuous credits reach a target a little sooner at the same quoted rate.

**2.** The figure $5.45$ is what you get if you divide $0.327$ by $0.06$, using $\\ln 1.3514$ with a wrong logarithm, or if you add a half-year "continuous penalty" to $5.17$ in the wrong direction.

**3.** Letter E asks which clock produces the longer wait. This letter only asks whether the continuous maturity is $5.45$. It is $5.02$.

The opposite verdict would need a recovered continuous $t$ near $5.45$, which would require a smaller ratio or a smaller $r$ than the stem's $1.3514$ and $0.06$.

The recovered continuous maturity is about $5.02$ years, not $5.45$, so the statement is False.`,

    `The statement ranks the two recovered maturities and claims that the continuous-clock wait is the longer one.

The overview recovered $t\\approx 5.02$ continuously and $t\\approx 5.17$ annually. Continuous compounding reaches the $\\$25,000$ payoff slightly sooner at the same $6\\%$ quote, so the continuous maturity is shorter, not longer.

**1.** The trap is thinking "continuous is stronger, so it takes longer." Stronger growth hits a target *sooner*. Time and growth strength move in opposite directions when the multiple is fixed.

**2.** Letter D already locked the continuous figure at about $5.02$, not at the false $5.45$. Even if someone used $5.45$, they would still need to compare it with $5.17$. The recovered pair is $5.02<5.17$.

The opposite verdict would need annual compounding to be the stronger clock, which it is not at a fixed nominal rate.

The recovered continuous maturity sits below the recovered annual maturity, so the statement is False.`,
  ],

  "math-11-46": [
    `The collector pays $\\$27,000$ today for rights to a $\\$60,000$ painting sale in $12$ years. The statement is asking for the implied discount factor, price over payoff.

The overview recovered
$$\\frac{\\mathrm{PDV}}{K}=\\frac{27{,}000}{60{,}000}=0.45.$$
That factor is exact, not an approximation.

**1.** The trap is writing $60{,}000/27{,}000\\approx 2.222$ and calling that the discount factor. That is the growth multiple. Discounting uses the reciprocal, which is $0.45$.

**2.** Another mix-up is $27{,}/60=0.45$ misread as $0.54$ by swapping digits. The recovered factor is exactly nine-twentieths.

The recovered discount factor is exactly $0.45$, so the statement is True.`,

    `The statement asks for the continuous rate that makes $\\$27,000$ today consistent with $\\$60,000$ in $12$ years.

The overview recovered
$$r=-\\frac{\\ln 0.45}{12}\\approx 0.0665=6.65\\%.$$
This letter is reading that recovered rate. It is not rebuilding the factor $0.45$.

In the story, $6.65\\%$ is the unique continuous discount rate at which the collector's $\\$27,000$ bid equals the present value of the gallery's $\\$60,000$ future sale. A higher implied rate would mean the collector is paying *less* relative to the payoff. A lower rate would mean the bid is richer.

**1.** A rushed solver who computed $0.55/12\\approx 4.58\\%$, treating the $55\\%$ haircut as linear, would understate the continuous rate. Logarithms convert a $12$-year factor of $0.45$ into an annual rate near $6.65\\%$, not $4.58\\%$.

**2.** The rule of $72$ is a doubling shortcut. This painting *more than doubles* in nominal terms ($60/27\\approx 2.22$), so a $72/12=6\\%$ guess is in the neighbourhood but is not the recovered $6.65\\%$.

**3.** Later letters change $t$ or the price and recompute $r$. This letter only asks whether the original implied rate is about $6.65\\%$.

If the price were $\\$60,000$ today, $r$ would be $0$. If the payoff were $\\$27,000$, $r$ would also be $0$. The stem has a genuine discount: $27$ today for $60$ later.

The recovered continuous rate is about $6.65\\%$, so the statement is True.`,

    `The statement halves the wait to six years and keeps the recovered rate $r\\approx 6.65\\%$. It names the new present value of the same $\\$60,000$ payoff as about $\\$40,249.20$.

The overview recovered $\\mathrm{PDV}_{6}\\approx \\$40{,}249.20$ from $60{,}000e^{-0.3992}$. This letter is reading that six-year present value. It is not rebuilding $r$.

A shorter wait at a positive rate must raise present value. The original $12$-year PDV was $\\$27,000$. The six-year figure $\\$40,249$ sits well above that, as it should.

**1.** The trap is thinking "half the time, twice the present value," which would give $\\$54,000$. Exponential discounting does not work that way. The recovered $\\$40,249$ is $1.49$ times $\\$27,000$, not twice.

**2.** Another mix-up is averaging $\\$27,000$ and $\\$60,000$ to get $\\$43,500$. Midpoints ignore compounding. The recovered six-year PDV is $\\$40,249$.

**3.** Because $e^{-rt/2}=\\sqrt{e^{-rt}}$, the six-year factor is $\\sqrt{0.45}\\approx 0.6708$. Times $\\$60,000$ that is $\\$40,249$. The square-root relationship is the extra structure this letter can cite without re-solving $r$.

If the rate were $0\\%$, shortening the horizon would not change PDV. The stem's recovered $r\\approx 6.65\\%$ is what lifts the six-year value above $\\$27,000$.

The recovered six-year PDV is about $\\$40,249.20$, so the statement is True.`,

    `The statement raises the collector's bid from $\\$27,000$ to $\\$30,000$ for the same $\\$60,000$ in $12$ years, and claims that the implied continuous rate would then be *higher*.

The overview recovered the new rate as about $5.78\\%$, against the original $6.65\\%$. A higher price means less discounting, so the implied $r$ falls, not rises.

**1.** The extra arithmetic is the new factor $30{,}000/60{,}000=0.5$ and $r=-\\ln 0.5/12\\approx 5.78\\%$. Those figures are already in the overview. This letter is reading the ranking $5.78<6.65$.

**2.** The trap is thinking "you paid more, so the rate must be more." Price and implied discount rate move in opposite directions when $K$ and $t$ are held fixed. Paying more for the same future payoff is how you accept a *lower* required return.

**3.** A solver who compared $\\$30,000$ with $\\$27,000$ and added $0.3$ percentage points because the bid rose $11\\%$ would agree with the wording. The recovered pair blocks that.

The opposite verdict would need a *lower* bid, which deepens the discount and raises $r$. Raising the bid lowers $r$.

The recovered $\\$30,000$ rate sits below the recovered $\\$27,000$ rate, so the statement is False.`,

    `The statement keeps the factor $0.45$ but spreads it over $24$ years instead of $12$, and names the implied rate as about $3.33\\%$.

The overview recovered
$$r=-\\frac{\\ln 0.45}{24}\\approx 0.0333=3.33\\%.$$
That is exactly half of $6.65\\%$, because the same logarithm is now divided by twice the years.

**1.** This is one case where doubling time *does* halve the rate, because $r=\\ln(K/\\mathrm{PDV})/t$ is inverse-linear in $t$ when the factor is held fixed. That is different from doubling time in a present-value *level*, which is not linear.

**2.** A rushed solver who thought "twice the wait cannot simply halve $r$" might reject $3.33\\%$ and look for a square-root adjustment. For a rate recovered from a fixed factor, halving is exact.

The recovered $24$-year rate is about $3.33\\%$, so the statement is True.`,
  ],

  "math-11-47": [
    `The software company is due $\\$40,000$ in two years under a licensing agreement. The statement names the present value of that nearer payment at $5\\%$ annual compounding.

The overview recovered $\\mathrm{PDV}_{1}\\approx \\$36{,}281.18$ from $40{,}000/(1.05)^{2}$. This letter is reading that recovered two-year present value.

**1.** The trap is discounting for only one year, $40{,}000/1.05\\approx \\$38,095$. Two years of wait need two factors of $1.05$.

**2.** Another mix-up is using $e^{-0.10}\\approx 0.9048$, the continuous factor, which gives about $\\$36,194$. That is letter E's clock, not this one.

**3.** This $\\$36,281$ is one of the two addends in the recovered combined PDV of about $\\$87,212$. Getting the nearer piece right is what lets the total come out.

The recovered PDV of the $\\$40,000$ payment is about $\\$36,281.18$, so the statement is True.`,

    `The same agreement also pays $\\$65,000$ in five years. The statement names that later payment's present value at the same $5\\%$ annual rate.

The overview recovered $\\mathrm{PDV}_{2}\\approx \\$50{,}930.87$ from $65{,}000/(1.05)^{5}$. This letter is reading that recovered five-year present value. It is not rebuilding $(1.05)^{5}$.

In the story, a $\\$65,000$ cheque five years out is not $\\$65,000$ today. Five years of $5\\%$ take about $\\$14,069$ off the face.

**1.** A rushed solver who discounted the $\\$65,000$ for only two years, copying the first payment's horizon, would report about $\\$58,957$. The two payments do not share a horizon.

**2.** Someone who compared face amounts and concluded that $\\$65,000$ must have a larger PDV than $\\$40,000$ would be right about the ranking but would still need the recovered $\\$50,931$ to check the claim's cents. Letter D is the ranking. This letter is the dollar level.

**3.** The $\\$50,931$ is the second addend in the combined $\\$87,212$. A wrong five-year piece would throw the total off by the same error.

If the $\\$65,000$ were due in two years like the first payment, its PDV would be much higher. The stem's $t_{2}=5$ is what holds it at about $\\$50,931$.

The recovered PDV of the $\\$65,000$ payment is about $\\$50,930.87$, so the statement is True.`,

    `The controller wants one number: what both licensing payments are worth together today. The statement names that combined present value as about $\\$87,212.05$.

The overview recovered
$$\\mathrm{PDV}=36{,}281.18+50{,}930.87\\approx 87{,}212.05.$$
This letter is reading that sum. It is not re-discounting either payment.

**1.** The trap is adding the faces, $40{,}000+65{,}000=105{,}000$, and calling that the present value. Combined PDV adds *discounted* pieces, not undiscounted ones.

**2.** Another mix-up is adding $40{,}000$ to the five-year PDV, or $65{,}000$ to the two-year PDV, mixing one discounted piece with one face. Either hybrid lands in the $\\$90{,}000$ to $\\$101{,}000$ range, not at $\\$87,212$.

**3.** Rounding $36{,}281+50{,}931$ to $\\$87,212$ matches the claim. A solver who used the slightly different $50{,}929.20$ from a coarser $(1.05)^{5}$ would still be within a couple of dollars of $\\$87,212$.

The opposite verdict would need one of the two recovered pieces to be wrong by thousands. Both pieces are already locked in letters A and B.

The recovered combined PDV is about $\\$87,212.05$, so the statement is True.`,

    `The statement claims that the $\\$65,000$ payment, because it is later, has a *smaller* present value than the $\\$40,000$ payment.

The overview recovered $\\mathrm{PDV}_{2}\\approx \\$50{,}930.87$ and $\\mathrm{PDV}_{1}\\approx \\$36{,}281.18$. The later but larger payment still contributes more today: $50{,}931>36{,}281$.

**1.** Face and horizon pull in opposite directions. Five years of $5\\%$ is not enough of a discount to make $\\$65,000$ worth less than $\\$40,000$ two years out. The recovered pair is the comparison.

**2.** The trap is "later always means smaller PDV," which would be true for *equal* faces. The faces are not equal. A solver who discounted both as if they were $\\$40,000$ would find the five-year piece smaller and would agree with the wording.

**3.** The gap is about $\\$14,650$ in favour of the later payment. That is not a rounding issue.

The opposite verdict would need a longer second horizon, a higher rate, or a smaller second face. The stem's $K_{2}=\\$65{,}000$ at $t_{2}=5$ and $r=0.05$ is not enough to invert the ranking.

The recovered five-year PDV exceeds the recovered two-year PDV, so the statement is False.`,

    `The statement switches both payments to continuous $5\\%$ discounting and claims that the combined present value would then fall below $\\$86,000$.

The overview recovered the continuous pieces as about $\\$36,193.48$ and $\\$50,622.07$, summing to about $\\$86,815.55$. That still clears $\\$86,000$ by about $\\$816$.

**1.** Continuous discounting *does* pull the total down from the annual $\\$87,212$, but not all the way through the $\\$86,000$ cutoff. The claim has the direction right and the threshold wrong.

**2.** A rushed solver who rounded $\\$86,816$ down to "$\\$86{,}000$ something, call it under $86$k" would sign off. Full precision keeps it above.

**3.** The extra arithmetic this letter needs is only the comparison $86{,}816>86{,}000$. The continuous sum is already in the overview.

The opposite verdict would need a recovered continuous total below $\\$86,000$, which would require a higher rate than $5\\%$ or longer waits than $t=2$ and $t=5$.

The recovered continuous combined PDV is about $\\$86,816$, which is not less than $\\$86,000$, so the statement is False.`,
  ],

  "math-11-48": [
    `The architect is choosing between $\\$22,000$ now and $\\$25,500$ in three years. The statement names the present value of the deferred option at $6\\%$ annual compounding.

The overview recovered $\\mathrm{PDV}_{B}\\approx \\$21{,}410.30$ from $25{,}500/(1.06)^{3}$. This letter is reading that recovered present value.

**1.** The trap is treating $\\$25,500$ as if three years of $6\\%$ simple interest had been added to $\\$22,000$, which would reverse the question. Option B is a future *inflow* being discounted, not a grown deposit.

**2.** Another mix-up is $25{,}500/1.06^{1}\\approx \\$24,057$, discounting for only one year. Three years need three factors of $1.06$.

**3.** The recovered $\\$21,410$ is the object letter B compares with the immediate $\\$22,000$. Getting this level right is what lets the ranking come out.

The recovered PDV of Option B is about $\\$21,410.30$, so the statement is True.`,

    `The statement ranks the two options at the stem's $6\\%$ rate: $\\$22,000$ immediately versus the recovered present value of Option B.

The overview recovered $\\mathrm{PDV}_{B}\\approx \\$21{,}410.30$. Immediate cash of $\\$22,000$ is larger:
$$22{,}000>21{,}410.30.$$
Option A is the better present-value choice at $6\\%$.

**1.** The trap is choosing B because $\\$25,500>\\$22,000$ on the face. Faces are not comparable across time. After discounting, B is the *smaller* present value.

**2.** A solver who discounted $\\$25,500$ at $6\\%$ for one year, or who used $3\\%$ by mistake, would push B above $\\$22,000$ and would agree that B wins. At the stem's $r=0.06$ and $t=3$, B loses.

**3.** The gap is about $\\$590$. That is the premium the architect gets for taking cash on delivery rather than waiting three years.

The opposite verdict would need a lower discount rate. Letter C shows that at $3\\%$, Option B's PDV rises to about $\\$23,336$, which *would* beat $\\$22,000$. The stem is $6\\%$, not $3\\%$.

The recovered PDV of B sits below $\\$22,000$, so the statement is True.`,

    `The statement lowers the discount rate to $3\\%$ and names Option B's present value as about $\\$22,780$.

The overview recovered $\\mathrm{PDV}_{B}\\approx \\$23{,}336.02$ at $r=0.03$. The claimed $\\$22,780$ understates this by about $\\$556$.

**1.** A lower rate must raise the present value of a fixed future sum. The original $6\\%$ PDV was $\\$21,410$. The $3\\%$ figure must sit above that, and it does: $\\$23,336$. The claim's $\\$22,780$ is above $\\$21,410$ but still not the recovered value.

**2.** The figure $\\$22,780$ is what you get if you discount $\\$25,500$ at about $3.8\\%$, or if you split the difference between $\\$21,410$ and $\\$24,150$. It is not $25{,}500/(1.03)^{3}$.

**3.** At the recovered $\\$23,336$, Option B *would* beat the immediate $\\$22,000$. That ranking is a consequence, not this letter's claim. This letter only asks whether the $3\\%$ PDV is $\\$22,780$. It is $\\$23,336$.

The opposite verdict would need a recovered $3\\%$ PDV near $\\$22,780$, which would require a slightly higher rate than $3\\%$ or a slightly longer wait.

The recovered $3\\%$ PDV is about $\\$23,336$, not $\\$22,780$, so the statement is False.`,

    `The statement claims that Option B's present value exceeds $\\$22,000$ *no matter which interest rate* is used to discount it.

That cannot be. Present value of a fixed future sum falls as the rate rises, and at the stem's own $6\\%$ the overview already recovered $\\mathrm{PDV}_{B}\\approx \\$21{,}410.30$, which sits below $\\$22,000$.

**1.** The claim is a universal ranking. A single counterexample kills it. The base case $r=0.06$ is that counterexample.

**2.** There *is* a rate at which B beats $\\$22,000$: the overview's $3\\%$ figure of about $\\$23,336$ is one. There is also a break-even rate near $5\\%$, where letter E's recovered PDV is about $\\$22,029$, just above $\\$22,000$. "Regardless of which rate" erases that dependence.

**3.** A rushed solver who only looked at faces, $\\$25,500>\\$22,000$, would think B always wins. Discounting is what makes the ranking rate-dependent.

The opposite verdict would need $\\mathrm{PDV}_{B}>22{,}000$ at every $r\\ge 0$, which would require the future payment itself to exceed $\\$22,000$ even after infinite discounting, i.e. an immediate payment. Option B is three years out.

The recovered $6\\%$ PDV of B is already below $\\$22,000$, so the statement is False.`,

    `The statement names Option B's present value at exactly $5\\%$ as about $\\$23,500$.

The overview recovered $\\mathrm{PDV}_{B}\\approx \\$22{,}029.40$ at $r=0.05$. The claimed $\\$23,500$ overstates this by about $\\$1,471$.

**1.** At $5\\%$ the three-year factor is $(1.05)^{3}=1.157625$, already in the overview. This letter is reading the quotient $25{,}500/1.157625\\approx 22{,}029$, not rebuilding the cube.

**2.** The figure $\\$23,500$ sits near a $2\\%$ or $2.8\\%$ discount, or near the midpoint of $\\$22,000$ and $\\$25,000$. It is not the $5\\%$ present value.

**3.** The recovered $\\$22,029$ is just $\\$29$ above the immediate $\\$22,000$. At $5\\%$ the architect is nearly indifferent. At $6\\%$ A wins. The claim's $\\$23,500$ would make B look like a clear winner at $5\\%$, which it is not.

The opposite verdict would need a recovered $5\\%$ PDV near $\\$23,500$, which would require a lower rate than $5\\%$.

The recovered $5\\%$ PDV is about $\\$22,029$, not $\\$23,500$, so the statement is False.`,
  ],

  "math-11-49": [
    `The timber stand's market value grows as $P(t)=5{,}000(t+2)^{2}$, and the continuous rate is $r=0.08$. The statement names the harvest date that maximises present value as about $t^{*}=23$ years.

The overview recovered $t^{*}=23$ from the first-order condition $P'(t)=rP(t)$. After cancelling the positive factor $(t+2)$, that condition simplified to $t+2=25$, so $t^{*}=23$. This letter is reading that recovered date. It is not re-differentiating $P$.

**1.** The trap is solving $P'(t)=P(t)/r$, which is letter B's inverted condition, and landing on a date far too late. The chapter's rule is growth *equals* financing cost, $P'=rP$, not $P'=P/r$.

**2.** Another mix-up is harvesting when $P$ itself is maximised. $P(t)$ grows forever in $t$, so there is no maximum of $P$. The object being maximised is $f(t)=P(t)e^{-rt}$, and that interior peak is at $t^{*}=23$.

**3.** A solver who used $t^{*}=2/r=25$ and forgot to subtract the shift $2$ would report $25$ years. The recovered date is $23$.

The recovered optimal harvest time is $t^{*}=23$ years, so the statement is True.`,

    `The statement describes *how* $t^{*}$ is found: it claims one sets $P'(t^{*})$ equal to $P(t^{*})$ *divided by* $r$.

The chapter's first-order condition, already used in the overview, is
$$P'(t^{*})=rP(t^{*}).$$
So $P'(t^{*})$ equals $P(t^{*})$ *times* $r$, not divided by $r$. Dividing by $r=0.08$ would invert the rate and push the harvest far too late.

**1.** In words: at the optimum, the stand's dollar growth per year equals the interest you could earn by cutting now and investing the proceeds. That is $P'=rP$. The claim's $P'=P/r$ would say growth equals value *divided by* the rate, which has the units of a time, not a flow.

**2.** For this $P$, the inverted rule would give $10{,}000(t+2)=5{,}000(t+2)^{2}/0.08$, so $t+2=1.6$ and $t^{*}=-0.4$, which is not even in the future. The claim's formula does not produce a sensible harvest date on this stand.

**3.** Letter A already recovered $t^{*}=23$ from the *correct* condition. This letter is only about which equation was solved. The wording has $r$ on the wrong side.

The opposite verdict would need the chapter's FOC to be $P'=P/r$, which it is not.

The optimality condition is $P'=rP$, not $P'=P/r$, so the statement is False.`,

    `The statement names the present value of the stand at the optimal harvest as about $\\$623,000$.

The overview recovered $f(23)\\approx \\$496{,}219$ from $P(23)=3{,}125{,}000$ and $e^{-1.84}\\approx 0.1588$. The claimed $\\$623,000$ overstates this by about $\\$127,000$.

**1.** At $t^{*}=23$ the trees are worth $5{,}000\\times 25^{2}=3{,}125{,}000$ on the stump. That stumpage is not the present value. Present value discounts $23$ years of continuous $8\\%$. A rushed solver who reported stumpage, or a round fraction of it, would land near $623{,}000$ only by accident.

**2.** The factor $e^{-1.84}$ is already in the overview. This letter is reading the product $3{,}125{,}000\\times 0.1588\\approx 496{,}000$, not rebuilding $t^{*}$.

**3.** Letter E compares $f(25)$ with $f(23)$. Both present values sit near $\\$493{,}000$ to $\\$496{,}000$. Neither is $\\$623,000$. The claim is not a nearby rounding of the recovered maximum.

The opposite verdict would need $e^{-1.84}\\approx 0.20$, which would require a rate below $8\\%$ or a harvest much earlier than $t^{*}=23$.

The recovered present value at $t^{*}$ is about $\\$496,000$, not $\\$623,000$, so the statement is False.`,

    `The statement asks what happens to $t^{*}$ if the interest rate rises above $8\\%$: would the company then wait *longer* to cut?

For this family the overview recorded $t^{*}=2/r-2$. A higher $r$ makes waiting more expensive, because the proceeds could be earning more in the market. That *lowers* $t^{*}$. The harvest comes forward, not later.

**1.** Comparative statics for an interior harvest have $\\mathrm{d}t^{*}/\\mathrm{d}r<0$ when the second-order condition holds. Letter-level intuition: if the bank starts paying more, you are less willing to leave capital tied up in growing trees.

**2.** A rushed solver who thought "higher rate, trees grow faster" would delay the cut. The trees' growth $P'(t)$ did not change. Only the opportunity cost $rP$ rose, so the crossing $P'=rP$ happens sooner.

**3.** At $r=0.08$, $t^{*}=23$. At $r=0.10$, the same formula gives $t^{*}=18$. That is five years earlier, not later. The extra arithmetic is that one substitution, which the general relation $t^{*}=2/r-2$ already licences.

The opposite verdict would need a stand whose growth *accelerated* with $r$, which this $P(t)$ does not.

A higher interest rate brings the recovered $t^{*}$ forward, so the statement is False.`,

    `The statement asks whether cutting at $t=25$, two years after the recovered optimum, would produce a *higher* present value than cutting at $t^{*}=23$.

By construction $t^{*}$ maximises $f(t)=P(t)e^{-rt}$. The overview recovered $f(23)\\approx \\$496{,}219$ and $f(25)\\approx \\$493{,}296$. Waiting those extra two years *lowers* present value by about $\\$2,923$.

**1.** Stumpage at $t=25$ is $P(25)=5{,}000\\times 27^{2}=3{,}645{,}000$, which is *larger* than $P(23)=3{,}125{,}000$. The trap is comparing stumpage rather than discounted present value. The extra $520{,}000$ of trees does not cover the extra two years of $8\\%$ discounting.

**2.** The extra arithmetic is the comparison of two recovered $f$ values already in the overview. This letter does not re-solve the FOC. It only checks that a nearby date is worse, which is what a maximum requires.

**3.** A solver who thought "the function is still climbing at $23$, so $25$ should be better" is looking at $P(t)$, not at $f(t)$. After $t^{*}$, $P'$ is still positive but is smaller than $rP$, so the discounted value falls.

The opposite verdict would need $f(25)>f(23)$, which would mean $t^{*}=23$ was not a maximum. The recovered pair says it is.

The recovered $f(25)$ sits below the recovered $f(23)$, so the statement is False.`,
  ],

  "math-11-50": [
    `The winery owes $\\$18,000$ in four years. The statement names the continuous present value of that nearer invoice at $5.5\\%$.

The overview recovered $\\mathrm{PDV}_{1}\\approx \\$14{,}445.34$ from $18{,}000e^{-0.22}$. This letter is reading that recovered four-year present value.

**1.** The trap is using $e^{-0.055\\times 4}$ with $0.22$ treated as $0.20$, which gives $e^{-0.20}\\approx 0.8187$ and about $\\$14,737$. The exponent is $0.22$, not $0.20$.

**2.** Another mix-up is annual compounding, $18{,}000/(1.055)^{4}\\approx \\$14,536$. Continuous discounting is slightly harder. The recovered figure is $\\$14,445$.

**3.** This $\\$14,445$ is one addend in the recovered lump-sum settlement of $\\$32,732.47$. Getting the nearer invoice right is what lets the total come out.

The recovered PDV of the $\\$18,000$ obligation is about $\\$14,445.34$, so the statement is True.`,

    `The second invoice is $\\$30,000$ due in nine years. The statement names that later obligation's continuous present value at the same $5.5\\%$.

The overview recovered $\\mathrm{PDV}_{2}\\approx \\$18{,}287.13$ from $30{,}000e^{-0.495}$. This letter is reading that recovered nine-year present value. It is not rebuilding $e^{-0.495}$.

In the story, a $\\$30,000$ supplier bill nine years out is not $\\$30,000$ today. Nine years of continuous $5.5\\%$ take about $\\$11,713$ off the face.

**1.** A rushed solver who discounted the $\\$30,000$ for only four years, copying the first invoice's horizon, would report about $\\$24,075$. The two invoices do not share a due date.

**2.** Someone who compared faces and concluded that $\\$30,000$ must have a larger PDV than $\\$18,000$ would be right about the ranking (letter D) but would still need the recovered $\\$18,287$ to check this claim's cents.

**3.** The $\\$18,287$ is the second addend in the $\\$32,732$ settlement. A wrong nine-year piece would throw the lump sum off by the same error.

If the $\\$30,000$ were due in four years like the first invoice, its PDV would be much higher. The stem's $t_{2}=9$ is what holds it at about $\\$18,287$.

The recovered PDV of the $\\$30,000$ obligation is about $\\$18,287.13$, so the statement is True.`,

    `The supplier will accept one cheque today in place of both future invoices. The statement names that settlement as about $\\$32,732.47$.

The overview recovered
$$\\mathrm{PDV}=14{,}445.34+18{,}287.13=32{,}732.47.$$
This letter is reading that sum. It is not re-discounting either invoice.

**1.** The trap is adding the faces, $18{,}000+30{,}000=48{,}000$, which is letter E's zero-rate figure, not the $5.5\\%$ settlement. Combined PDV adds *discounted* pieces.

**2.** Another mix-up is adding $18{,}000$ to the nine-year PDV, or $30{,}000$ to the four-year PDV. Either hybrid lands in the $\\$32{,}000$ to $\\$44{,}000$ range and can look like a "about $\\$33{,}000$" guess. The recovered sum is exact at $\\$32,732.47$.

**3.** Letters A and B already locked the two pieces. This letter only adds. The cents in the claim match the overview.

The opposite verdict would need one of the two recovered pieces to be wrong by thousands. Both are already locked.

The recovered combined lump-sum PDV is $\\$32,732.47$, so the statement is True.`,

    `The statement claims that the $\\$30,000$ invoice, because it is later, contributes a *smaller* present value than the $\\$18,000$ invoice.

The overview recovered $\\mathrm{PDV}_{2}\\approx \\$18{,}287.13$ and $\\mathrm{PDV}_{1}\\approx \\$14{,}445.34$. The later but larger bill still contributes more today: $18{,}287>14{,}445$.

**1.** Face and horizon pull in opposite directions. Nine years of $5.5\\%$ is not enough of a discount to make $\\$30,000$ worth less than $\\$18,000$ four years out. The recovered pair is the comparison.

**2.** The trap is "later always means smaller PDV," which would be true for *equal* faces. The faces are not equal. A solver who discounted both as if they were $\\$18,000$ would find the nine-year piece smaller and would agree with the wording.

**3.** The gap is about $\\$3,842$ in favour of the later invoice. That is not a rounding issue.

The opposite verdict would need a longer second horizon, a higher rate, or a smaller second face. The stem's $K_{2}=\\$30{,}000$ at $t_{2}=9$ and $r=0.055$ does not invert the ranking.

The recovered nine-year PDV exceeds the recovered four-year PDV, so the statement is False.`,

    `The statement resets the continuous rate to $0\\%$ and claims that today's settlement would then be exactly $\\$48,000$.

The overview recovered that at $r=0$ both factors are $1$, so
$$\\mathrm{PDV}=18{,}000+30{,}000=48{,}000.$$
Waiting is free when money does not grow. The two due dates stop mattering, and the lump sum is just the sum of the faces.

**1.** This is one of the few letters where the "undiscounted total" *is* the right present value, because the rate is zero. At the stem's $5.5\\%$ that same $\\$48,000$ would be the trap from letter C.

**2.** A rushed solver who still applied $e^{-0.22}$ and $e^{-0.495}$ after setting $r=0$ would report $\\$32,732$ again and would reject $\\$48,000$. The exponent $rt$ is zero when $r$ is zero.

The recovered zero-rate settlement is exactly $\\$48,000$, so the statement is True.`,
  ],
};

function words(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

for (const t of arr) {
  const b = bodies[t.id];
  if (!b || b.length !== 5) throw new Error("missing " + t.id);
  t.tactical_explanations = b.map((body, i) => {
    const letter = "ABCDE"[i];
    const v = t.answer_key[i] ? "true" : "false";
    if (/—|–|\$\{/.test(body)) throw new Error("bad char " + t.id + letter);
    const closer = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
    if (!body.trim().endsWith(closer)) throw new Error("closer " + t.id + letter);
    return `**${letter}) ${t.statements[i]}**  (${v})\n\n${body}`;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");

for (const t of arr) {
  const ws = t.tactical_explanations.map(words);
  console.log(t.id, ws.join(", "), "spread", Math.max(...ws) - Math.min(...ws));
}
