import fs from "node:fs";

const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const bodies = {
  "math-11-51": [
    `The trust pays $\\$50,000$ to a beneficiary in seven years, discounted continuously at $5\\%$. The statement names that present value as about $\\$33,100$.

The overview recovered $\\mathrm{PDV}\\approx \\$35{,}234.40$ from $50{,}000e^{-0.35}$. The claimed $\\$33,100$ understates this by about $\\$2,134$. This letter is reading that recovered present value. It is not rebuilding $e^{-0.35}$.

In the manager's file, $\\$35,234$ is what the seven-year promise is worth today on the continuous clock. Booking $\\$50,000$ would ignore the wait. Booking $\\$33,100$ would discount too hard, as if the exponent were larger than $0.35$.

**1.** A rushed solver who used $e^{-0.40}$ (eight years of $5\\%$) would land near $\\$33,516$, a neighbour of $\\$33,100$. The horizon is seven years. The exponent is $0.35$.

**2.** Linear discounting $50{,}000\\times(1-0.05\\times 7)=\\$32,500$ is another neighbour. Continuous discounting is not a $35\\%$ haircut. The recovered factor $0.7047$ leaves $\\$35,234$.

**3.** Letter B will convert the same continuous $5\\%$ into an equivalent annual quote. This letter only asks whether the continuous PDV is $\\$33,100$. It is $\\$35,234$.

If the payment were due today, PDV would be $\\$50,000$. If $r$ were $0\\%$, the same. The stem has $t=7$ and $r=0.05$.

The recovered continuous PDV is about $\\$35,234$, not $\\$33,100$, so the statement is False.`,

    `The manager wants a once-a-year quote that produces the same present value as continuous $5\\%$ over any horizon. The statement says that quote is exactly $5.00\\%$.

The overview recovered $1+r_{a}=e^{0.05}\\approx 1.051271$, so $r_{a}\\approx 5.13\\%$, not $5.00\\%$. Matching clocks requires that conversion. Sharing the number $5$ is not matching.

**1.** The trap is thinking "same $5\\%$, so same PDV." Continuous $5\\%$ grows faster than annual $5\\%$, so it discounts a future sum harder. The annual quote that matches it must sit a little above $5\\%$.

**2.** The conversion does not depend on the seven-year horizon. Canceling $K$ and $t$ from $K(1+r_{a})^{-t}=Ke^{-rt}$ leaves $1+r_{a}=e^{r}$. Letter D will reuse this same $5.13\\%$ at three years.

The recovered equivalent annual rate is about $5.13\\%$, not $5.00\\%$, so the statement is False.`,

    `The statement names the equivalent annual rate as about $5.87\\%$.

The overview recovered $r_{a}\\approx 5.13\\%$ from $e^{0.05}-1$. The claimed $5.87\\%$ overstates this by $0.74$ percentage points.

**1.** The figure $5.87\\%$ is what you get if you convert $5\\%$ with a $12$-month formula at the wrong periodic rate, or if you add $0.87$ points by mixing $(1.05)^{1.17}-1$. The one-year continuous growth is $e^{0.05}\\approx 1.0513$.

**2.** Letter B already rejected $5.00\\%$. This letter rejects a different wrong neighbour, $5.87\\%$. The recovered rate sits between them at $5.13\\%$.

The recovered equivalent annual rate is about $5.13\\%$, not $5.87\\%$, so the statement is False.`,

    `The statement keeps the correctly converted annual rate and changes the horizon from seven years to three, naming the present value as about $\\$43,035.40$.

The overview recovered that three-year figure as $\\$43,035.40$ from $50{,}000e^{-0.15}$, and checked that $(1.051271)^{-3}$ produces the same dollar amount. This letter is reading that recovered three-year PDV. It is not rebuilding $r_{a}$.

A shorter wait at a positive rate must raise present value. The seven-year PDV was $\\$35,234$. The three-year figure $\\$43,035$ sits well above that, as it should.

**1.** The trap is thinking the equivalent rate depends on the horizon, so a three-year conversion would be a different $r_{a}$. The conversion $1+r_{a}=e^{r}$ cancelled $t$. The same $5.13\\%$ is the matching annual quote at three years and at seven.

**2.** A solver who discounted three years at the unconverted $5\\%$ annually, $50{,}000/(1.05)^{3}\\approx \\$43,192$, would be close to $\\$43,035$ but would have used the wrong clock. The claim's cents match the converted pair, not that nearby annual-$5\\%$ figure.

**3.** Halving seven years is not three years, and halving $\\$35,234$ is not $\\$43,035$. The extra arithmetic is the comparison with the recovered seven-year PDV: $43{,}035>35{,}234$, with the three-year level already in the overview.

If $r$ were $0\\%$, shortening the horizon would not change PDV. The recovered $5\\%$ continuous (and its $5.13\\%$ annual match) is what lifts the three-year value above $\\$35,234$.

The recovered three-year PDV is about $\\$43,035.40$, so the statement is True.`,

    `The statement asks whether the equivalent annual rate exceeds the $5\\%$ continuous quote by more than one percentage point.

The overview recovered $r_{a}\\approx 5.13\\%$, so the gap is $0.13$ points, far short of $1.00$.

**1.** At a modest $5\\%$ the exponential $e^{r}$ and the linear $1+r$ stay close. A full-point premium would need a much higher continuous quote. Here $e^{0.05}-1-0.05\\approx 0.00127$, which is $0.13$ points.

**2.** The trap is reading $5.13$ against $4.13$, or treating $0.51$ as already more than one point. The comparison the claim asks for is equivalent annual minus continuous, $0.13$.

**3.** Letter C's false $5.87\\%$ would have produced a $0.87$-point gap, still under $1.00$. Even the wrong neighbour would not save the threshold. The recovered gap is $0.13$.

The opposite verdict would need $e^{r}-1-r>0.01$, which starts to happen near $r\\approx 0.14$, not at $r=0.05$.

The recovered gap is $0.13$ points, not more than $1.00$, so the statement is False.`,
  ],

  "math-11-52": [
    `The logistics company already holds a $\\$42,000$ receivable due in three years. The statement names that receivable's present value at $6\\%$ annual compounding as about $\\$35,264.01$.

The overview recovered $\\mathrm{PV}_{1}\\approx \\$35{,}264.01$ from $42{,}000/(1.06)^{3}$. This letter is reading that recovered three-year present value.

**1.** The trap is discounting for one year, $42{,}000/1.06\\approx \\$39,623$, or for six years, copying the second receivable's horizon. Three years need $(1.06)^{3}\\approx 1.191016$.

**2.** Another mix-up is treating $\\$42,000$ as already today's contribution to the $\\$100,000$ covenant. The covenant is a present-value test. The known contract contributes $\\$35,264$ today, not $\\$42,000$.

**3.** This $\\$35,264$ is what letter B subtracts from $\\$100,000$. Getting it right is what lets the residual $\\$64,736$ come out.

The recovered PDV of the existing receivable is about $\\$35,264.01$, so the statement is True.`,

    `The covenant needs $\\$100,000$ of present value. After the known receivable's recovered $\\$35,264.01$, the second contract must fill the rest.

The overview recovered that residual as
$$\\mathrm{PV}_{2}=100{,}000-35{,}264.01=64{,}735.99.$$
This letter is reading that subtraction. It is not yet growing the residual forward to year six.

In the negotiation, $\\$64,736$ is the amount of *today's* value the new receivable must carry. It is not the face amount that will be written on the six-year contract. Letter C grows this residual. This letter only names the hole in the covenant.

**1.** The trap is subtracting $\\$42,000$ from $\\$100,000$ and reporting $\\$58,000$ as the residual. Faces and present values cannot be subtracted across dates. The known piece must be discounted first.

**2.** Another mix-up is reporting $\\$35,264$ itself as the amount still needed. That is the contribution already in hand, the opposite piece.

**3.** A solver who used $100{,}000-42{,}000/(1.06)$ would mix a one-year discount with a three-year invoice. The recovered residual uses the three-year PDV.

The opposite verdict would need the known receivable to contribute more than $\\$35,264$ today, which would require a nearer due date or a lower rate. The stem has $t_{1}=3$ and $r=0.06$.

The recovered present value still required is $\\$64,735.99$, so the statement is True.`,

    `The second receivable is due in six years. The statement names the face amount that receivable must carry so its present value equals the recovered residual $\\$64,735.99$.

The overview recovered $K_{2}\\approx \\$91{,}829.24$ from $64{,}735.99\\times(1.06)^{6}$. This letter is reading that six-year face. It is not rebuilding $\\mathrm{PV}_{1}$.

In the story, $\\$91,829$ is the cheque dated six years from now that is worth $\\$64,736$ today at $6\\%$. Writing $\\$64,736$ on the contract would underfund the covenant, because a six-year face equal to a present value has not been grown.

**1.** A rushed solver who grew the residual for only three years would report about $\\$77,102$, letter D's shorter-horizon face. Six years need $(1.06)^{6}\\approx 1.418519$.

**2.** Someone who reported $\\$100,000-42{,}000=\\$58,000$ grown for six years would start from the wrong residual. The residual is $\\$64,736$, after discounting the known invoice.

**3.** Letter E will grow the same residual at $8\\%$ instead of $6\\%$. This letter is the $6\\%$, six-year face $\\$91,829.24$.

If the second receivable were due today, the required "face" would be $\\$64,736$. If $r$ were $0\\%$, the same. The stem's six-year wait at $6\\%$ is what lifts the face to $\\$91,829$.

The recovered six-year face amount is about $\\$91,829.24$, so the statement is True.`,

    `The statement moves the second receivable in to a three-year due date and claims the required face would then be *larger* than the six-year $\\$91,829$.

The overview recovered the three-year face as about $\\$77,101.60$. A nearer due date needs less face value to deliver the same $\\$64,736$ of present value: $77{,}102<91{,}829$.

**1.** The extra arithmetic is that ranking. Growing the residual for three years instead of six is already in the overview. This letter reads $77{,}102<91{,}829$.

**2.** The trap is thinking "sooner means you must write a bigger cheque because there is less time to grow." That slogan has the inequality backwards when the *present* value is held fixed. Less time to grow means you start closer to the present-value target, so the face is smaller.

**3.** A solver who compared three years with six years as if those were discounts of a fixed face would expect the three-year PDV to be larger and would confuse PDV with face. This letter is about the required face, not about PDV.

The opposite verdict would need a *later* due date, which requires more face. Pulling the due date in requires less face.

The recovered three-year face sits below the recovered six-year face, so the statement is False.`,

    `The statement keeps the six-year due date but raises the discount rate from $6\\%$ to $8\\%$, and names the required face as about $\\$102,727.88$.

The overview recovered that $8\\%$ face as $\\$102,727.88$ from $64{,}735.99\\times(1.08)^{6}$. A steeper discount requires more face to deliver the same present-value residual.

**1.** The extra arithmetic is already in the overview: $(1.08)^{6}\\approx 1.586874$. This letter reads the product $\\$102,728$, not that power.

**2.** The trap is thinking a higher rate should *lower* the face, as if the company were borrowing less. The covenant fixes present value. A higher $r$ makes each future dollar worth less today, so you need more future dollars.

**3.** Letter D changed time at a fixed rate. This letter changes rate at a fixed time. Both start from the same residual $\\$64,736$. The $8\\%$ six-year face exceeds the $6\\%$ six-year face of $\\$91,829$, as it should.

If $r$ were $0\\%$, the required face would equal the residual $\\$64,736$. The stem's move from $6\\%$ to $8\\%$ is what lifts it to $\\$102,728$.

The recovered $8\\%$ six-year face is about $\\$102,727.88$, so the statement is True.`,
  ],

  "math-11-53": [
    `The consulting firm can take $\\$35,000$ now or a larger payment in four years, discounted continuously at $6.5\\%$. The statement names the four-year discount factor as about $0.8112$.

The overview recovered $rt=0.26$ and $e^{-0.26}\\approx 0.7711$. The claimed $0.8112$ sits about $0.040$ too high.

**1.** The trap is $1-0.065\\times 4=0.74$, or mixing $e^{-0.26}$ with $(1.065)^{-4}\\approx 0.7773$ and drifting toward $0.81$. Linear and annual neighbours are not $e^{-0.26}$.

**2.** Another mix-up is $e^{-0.065\\times 3}=e^{-0.195}\\approx 0.823$, a three-year factor. The wait is four years.

The recovered continuous factor is $0.7711$, not $0.8112$, so the statement is False.`,

    `Indifference means the delayed cheque has present value $\\$35,000$ today. The statement names that future payment as about $\\$49,850.75$.

The overview recovered $K\\approx \\$45{,}392.55$ from $35{,}000e^{0.26}$. The claimed $\\$49,851$ overstates this by about $\\$4,458$. This letter is reading that recovered indifference amount. It is not rebuilding $e^{0.26}$.

In the story, $\\$45,393$ in four years is the unique cheque that matches $\\$35,000$ cash today at continuous $6.5\\%$. Asking for $\\$49,851$ would overpay the delayed option.

**1.** A rushed solver who used the false factor $0.8112$ from letter A would divide $\\$35,000$ by $0.8112$ and land near $\\$43,147$, a different wrong neighbour. The recovered factor $0.7711$ produces $\\$45,393$.

**2.** Growing $\\$35,000$ at simple $6.5\\%\\times 4=26\\%$ gives $\\$44,100$, close to $\\$45,393$ but not the claim's $\\$49,851$. The claim overshoots even the linear companion.

**3.** Letter C asks whether this indifference amount exceeds $\\$35,000$ by more than $\\$11,000$. This letter only asks whether the level is $\\$49,851$. It is $\\$45,393$.

If the delay were zero, $K$ would be $\\$35,000$. If $r$ were $0\\%$, the same. Four years of continuous $6.5\\%$ is what lifts $K$ to $\\$45,393$.

The recovered indifference payment is about $\\$45,393$, not $\\$49,851$, so the statement is False.`,

    `The statement asks whether the recovered indifference payment exceeds the immediate $\\$35,000$ by more than $\\$11,000$.

The overview recovered $K\\approx \\$45{,}392.55$, so the premium is $10{,}392.55$, about $\\$607$ short of $\\$11,000$.

**1.** Direction is right: a delayed payment must exceed $\\$35,000$ at a positive rate. The threshold is wrong. "More than $\\$11,000$" fails on $\\$10,393$.

**2.** Using the false $\\$49,851$ from letter B would have cleared $\\$11,000$ by about $\\$3,851$. That is why the false level and this threshold are linked. The recovered level does not clear.

**3.** A rushed solver who computed $35{,}000\\times 0.065\\times 5$ or $35{,}000\\times 0.32$ can manufacture $\\$11,200$. The premium is $35{,}000(e^{0.26}-1)\\approx \\$10,393$.

The opposite verdict would need a higher rate or a longer wait. At $r=0.065$ and $t=4$, the premium is $\\$10,393$, not more than $\\$11,000$.

The recovered premium is about $\\$10,393$, which is not more than $\\$11,000$, so the statement is False.`,

    `The statement raises the firm's opportunity cost from $6.5\\%$ to $9\\%$ and claims the indifference payment would stay at the original four-year, $6.5\\%$ figure.

The overview recovered the $9\\%$ payment as about $\\$50,166.53$, about $\\$4,774$ above the $6.5\\%$ figure of $\\$45,393$. A higher opportunity cost requires a larger future cheque to match $\\$35,000$ today.

**1.** The trap is thinking indifference is a property of $\\$35,000$ and four years alone, independent of $r$. Indifference is $K=35{,}000e^{rt}$. Changing $r$ changes $K$.

**2.** A solver who reused $e^{0.26}$ after setting $r=0.09$ would report $\\$45,393$ again and would agree with "unchanged." The $9\\%$ exponent is $0.36$, already in the overview.

**3.** Letter E will shorten the wait at the original rate. This letter raises the rate at the original wait. Both move $K$, in opposite directions.

The opposite verdict would need $r$ to drop out of $K=PV_{0}e^{rt}$, which it does not.

The recovered $9\\%$ indifference payment exceeds the recovered $6.5\\%$ payment, so the statement is False.`,

    `The statement shortens the delay from four years to two and claims the indifference payment would then be *smaller* than the four-year $\\$45,393$.

The overview recovered the two-year payment as about $\\$39,858.99$. Less waiting means less interest to make up: $39{,}859<45{,}393$.

**1.** The extra arithmetic is that ranking. The two-year exponent $0.13$ is already in the overview. This letter reads $39{,}859<45{,}393$.

**2.** The trap is thinking "sooner must mean a larger cheque because the firm is impatient." Impatience is already in $r$. Holding $r$ fixed, a shorter wait requires a smaller $K$ to match the same $\\$35,000$ present value.

**3.** Halving time does not halve the premium. Half of $\\$10,393$ would put $K$ at $\\$40,196$, near but not equal to $\\$39,859$. Exponential growth of $K$ in $t$ is not linear.

The opposite verdict would need a *longer* wait, which raises $K$. Shortening the wait lowers $K$.

The recovered two-year indifference payment sits below the recovered four-year payment, so the statement is True.`,
  ],

  "math-11-54": [
    `The wine's market value grows at $5\\%$ continuous while the discount rate is $8\\%$. The statement says the interior condition $P'=rP$ has no solution for $t^{*}>0$, so present value is maximised by selling now.

The overview recovered $P'(t)=0.05P(t)$, so $0.05P=0.08P$ would require $P=0$, which never happens. The reduced present value $f(t)=40{,}000e^{-0.03t}$ is strictly decreasing, so the maximum is at the boundary $t^{*}=0$.

**1.** The trap is solving $0.05=0.08$ by "waiting until growth catches up." Growth is stuck at $5\\%$ forever in this exponential $P(t)$. It never catches $8\\%$.

**2.** Another mix-up is maximising $P(t)$ itself, which climbs forever, and concluding one should wait indefinitely. The object is $f(t)=P(t)e^{-rt}$, and that falls from $t=0$.

**3.** Letter E will lower $r$ to $4\\%$, below the $5\\%$ growth, and the interior logic will reverse. This letter is the $8\\%>5\\%$ case, a corner at $t^{*}=0$.

The recovered policy is sell immediately, so the statement is True.`,

    `Selling today means there is nothing to discount. The statement names that present value as $\\$40,000$.

The overview recovered $f(0)=P(0)=40{,}000$. At $t=0$ the factor $e^{0}=1$, so present value equals the current market value.

**1.** The trap is discounting $\\$40,000$ for some default year, or reporting $40{,}000e^{-0.08}$. Selling now is a cash sale. The recovered present value is the full $\\$40,000$.

**2.** Letter C will value a ten-year delay. This letter is the $t=0$ mark those later letters compare with.

The recovered present value of selling today is $\\$40,000$, so the statement is True.`,

    `The statement names the present value of selling in ten years as about $\\$29,632.73$.

The overview recovered $f(10)=40{,}000e^{-0.30}\\approx \\$29{,}632.73$. Ten years of net $3\\%$ decay, growth $5\\%$ minus discount $8\\%$, produces that figure.

**1.** A rushed solver who grew $P$ at $5\\%$ and forgot to discount would report $40{,}000e^{0.50}\\approx \\$65,947$. The objective is present value, not future market value.

**2.** Someone who discounted at the full $8\\%$ without the $5\\%$ growth, $40{,}000e^{-0.80}\\approx \\$17,973$, would understate $f(10)$. The recovered net exponent is $-0.03\\times 10=-0.30$.

**3.** Compared with $f(0)=\\$40,000$, waiting ten years costs about $\\$10,367$ of present value. That is letter D's ranking in dollars. This letter is the ten-year level.

The recovered ten-year present value is about $\\$29,632.73$, so the statement is True.`,

    `The statement claims that because $P(t)$ is increasing, waiting always raises present value, no matter the discount rate.

The overview already recovered $f(0)=\\$40,000>f(10)\\approx \\$29{,}633$ at $r=0.08$. Market value can rise while discounted present value falls. Rising $P$ is not enough when the discount rate outruns growth.

**1.** The trap is watching $P(t)=40{,}000e^{0.05t}$ climb and concluding "later is better." The firm's objective is $f(t)=40{,}000e^{(0.05-r)t}$. The sign of $0.05-r$ decides whether waiting helps.

**2.** At the stem's $r=0.08$, that sign is negative, so waiting hurts. Letter E's $r=0.04$ will flip the sign. "Regardless of the discount rate" erases that hinge.

**3.** A single recovered pair $40{,}000>29{,}633$ is already a counterexample. Universal claims die on one counterexample.

The opposite verdict would need $r$ below $5\\%$ so that $f$ is increasing. The stem's $8\\%$ is not below $5\\%$.

Rising market value does not raise present value here, so the statement is False.`,

    `The statement lowers the discount rate to $4\\%$ and claims the optimal policy would again be to sell immediately.

The overview recovered $f(t)=40{,}000e^{0.01t}$ at $r=0.04$. That function is strictly increasing, so waiting always helps. Selling at $t^{*}=0$ would be the worst interior choice, not the best.

**1.** The extra arithmetic is the sign of $0.05-0.04=+0.01$. Growth now outruns discounting. The corner jumps from $t=0$ to "wait as long as the model allows."

**2.** The trap is thinking a corner at $t=0$ is a property of exponential $P(t)$ itself. The corner at $0$ was a property of $r>0.05$. Drop $r$ below $0.05$ and the corner disappears.

**3.** Letter A was the $8\\%$ case, sell now. This letter is the $4\\%$ case, do not sell now. The two recovered policies are opposites.

The opposite verdict would need $r$ still above $5\\%$. The hypothetical is $4\\%$.

The recovered $4\\%$ present value increases in $t$, so selling immediately is not optimal, so the statement is False.`,
  ],

  "math-11-55": [
    `The forestry team measured $P(t^{*})=\\$520,000$ and $P'(t^{*})=\\$46,800$ at $r=9\\%$. The statement says those data satisfy $P'=rP$.

The overview recovered $0.09\\times 520{,}000=46{,}800$, which matches the measured slope exactly. This letter is reading that check.

**1.** The trap is comparing $46{,}800$ with $520{,}000\\times 0.9=468{,}000$, losing a zero in the rate, or with $520{,}000/0.09$. The FOC is a product $rP$, not a quotient.

**2.** Units match: $P'$ and $rP$ are both dollars per year. The measured pair sits on the first-order schedule.

The recovered product $rP$ equals the measured $P'$, so the statement is True.`,

    `The statement names the second-order denominator $P''-rP'$ as $-\\$1,092$.

The overview recovered $3{,}120-0.09\\times 46{,}800=3{,}120-4{,}212=-1{,}092$. This letter is reading that subtraction.

**1.** The trap is $3{,}120-0.09\\times 520{,}000$, mixing $P$ in for $P'$, or $3{,}120-46{,}800$ without the $0.09$. The recovered combination uses $rP'$, not $P'$ alone.

**2.** A sign error that reports $+\\$1,092$ would flip letter D's comparative statics and letter E's second-order test. The recovered denominator is negative.

The recovered value is $-\\$1,092$, so the statement is True.`,

    `The statement names the sensitivity $\\mathrm{d}t^{*}/\\mathrm{d}r$ as about $-476.19$.

The overview recovered
$$\\frac{\\mathrm{d}t^{*}}{\\mathrm{d}r}=\\frac{520{,}000}{-1{,}092}\\approx -476.19.$$
This letter is reading that quotient. It is not rebuilding the FOC.

In words, a one-point increase in $r$ (from $0.09$ to $0.10$, say) would pull $t^{*}$ forward by about $4.76$ years. The negative sign is the whole comparative-static story: higher rates bring the harvest forward.

**1.** A rushed solver who used $+1{,}092$ in the denominator would report $+476$ and would agree with letter D's false "lengthen" claim. The second-order denominator is negative.

**2.** Another mix-up is $46{,}800/-1{,}092\\approx -42.9$, putting $P'$ in the numerator. The formula uses $P(t^{*})$ in the numerator.

**3.** Letter D asks only for the sign. This letter asks for the recovered magnitude and sign together, $-476.19$.

The opposite verdict would need a positive denominator, which would not be a maximum. The recovered sensitivity is about $-476.19$.

The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r$ is about $-476.19$, so the statement is True.`,

    `The statement claims that a higher interest rate would *lengthen* the optimal harvest time.

The overview recovered $\\mathrm{d}t^{*}/\\mathrm{d}r\\approx -476$, a negative derivative. $t^{*}$ moves opposite $r$. A higher rate makes waiting more expensive and brings the cut forward.

**1.** The trap is "higher rates make trees grow faster, so wait longer." $P(t)$ did not change. Only the opportunity cost $rP$ rose, so $P'=rP$ crosses sooner.

**2.** Letter C already locked the magnitude and the sign. This letter is only the verbal ranking: lengthen versus shorten. Negative sensitivity means shorten.

**3.** A solver who reported $+476$ from flipping the denominator would agree with "lengthen." The recovered denominator $-1{,}092$ forbids that.

The opposite verdict would need $\\mathrm{d}t^{*}/\\mathrm{d}r>0$, which would require a minimum of $f$, not a maximum.

A higher interest rate shortens the recovered $t^{*}$, so the statement is False.`,

    `The statement says the second-order condition $P''-rP'<0$ holds for these data.

The overview recovered $P''-rP'=-1{,}092<0$. That is the same denominator as letter B, now used as a test for a maximum rather than as an input to a derivative.

**1.** The trap is checking $P''<0$ alone. $P''=3{,}120$ is positive, so the stand's value is still accelerating in $t$. The second-order condition for $f(t)=P(t)e^{-rt}$ is $P''-rP'<0$, not $P''<0$. The $-rP'$ term is what makes the test pass.

**2.** Letter B named the dollar figure $-\\$1,092$. This letter only asks whether that figure is negative. It is.

The recovered second-order expression is negative, so the statement is True.`,
  ],

  "math-11-56": [
    `The orchard's timber value is $P(t)=3{,}000(t+4)^{2}$ at continuous $9\\%$. The statement names the harvest date as about $t^{*}=18.22$ years.

The overview recovered $t^{*}\\approx 18.22$ from $P'=rP$ after cancelling $(t+4)$: $t+4=2/0.09\\approx 22.22$, so $t^{*}\\approx 18.22$. This letter is reading that recovered date.

**1.** The trap is $t^{*}=2/r=22.22$, forgetting to subtract the shift $4$, or $t^{*}=1/r\\approx 11.11$. This family has $t^{*}=2/r-4$.

**2.** Another mix-up is maximising $P(t)$ itself, which has no peak. The object is $f(t)=P(t)e^{-0.09t}$.

**3.** Letters C through E use this $t^{*}$. A harvest at $22.22$ years is the unshifted crossing, not the date.

The recovered optimal harvest time is about $18.22$ years, so the statement is True.`,

    `The statement names the present value of the timber at $t^{*}$ as about $\\$250,000$.

The overview recovered $P(t^{*})\\approx \\$1{,}481{,}481$ and $f(t^{*})\\approx \\$287{,}378$. The claimed $\\$250,000$ understates present value by about $\\$37,000$. Stumpage and present value are different jobs.

**1.** A rushed solver who reported a round $\\$250,000$ as "$20\\%$ of stumpage" used $0.20$ in place of $e^{-1.64}\\approx 0.194$. The recovered discount factor is $0.194$, and $1{,}481{,}481\\times 0.194\\approx 287{,}000$.

**2.** Someone who reported stumpage $\\$1.48$ million as present value would miss by a factor of five. This letter is $f(t^{*})$, not $P(t^{*})$.

**3.** Letter C will test curvature at this same date. This letter only asks whether $f(t^{*})$ is $\\$250,000$. It is about $\\$287,378$.

The opposite verdict would need $e^{-1.64}\\approx 0.169$, a harsher discount than $9\\%$ over $18.22$ years.

The recovered present value at $t^{*}$ is about $\\$287,378$, not $\\$250,000$, so the statement is False.`,

    `The statement names $P''-rP'$ at the optimum as $+\\$6,000$.

The overview recovered $P''(t)=6{,}000$ constant, $P'(t^{*})\\approx 133{,}333$, and
$$6{,}000-0.09\\times 133{,}333=-6{,}000.$$
The combination is $-\\$6,000$, not $+\\$6,000$. The claim has the right magnitude and the wrong sign.

**1.** The trap is reporting $P''=6{,}000$ itself as the second-order quantity. The test subtracts $rP'$. That subtraction flips the sign.

**2.** A positive denominator would make $\\mathrm{d}t^{*}/\\mathrm{d}r$ positive in letter D and would fail the maximum test. The recovered sign is negative, which is what a maximum needs.

**3.** Letter D's sensitivity uses this $-6{,}000$ in the denominator. Getting $+6{,}000$ would reverse the harvest response to $r$.

The recovered second-order quantity is $-\\$6,000$, not $+\\$6,000$, so the statement is False.`,

    `The statement names $\\mathrm{d}t^{*}/\\mathrm{d}r$ as about $+246.91$.

The overview recovered $1{,}481{,}481/(-6{,}000)\\approx -246.91$. The size $246.91$ is right. The sign is wrong. A higher rate brings the harvest forward.

**1.** The extra arithmetic is only the sign of the denominator from letter C. This letter reads $-246.91$, not a new quotient.

**2.** The trap is copying letter C's false $+\\$6,000$ into the formula and getting $+246.91$ exactly. The two false signs travel together. The recovered pair is $-6{,}000$ and $-246.91$.

**3.** Comparative statics for a maximum have $\\mathrm{d}t^{*}/\\mathrm{d}r<0$. A reported positive sensitivity would describe a minimum of $f$, which this stand is not.

The opposite verdict would need $P''-rP'>0$. The recovered denominator is negative.

The recovered sensitivity is about $-246.91$, not $+246.91$, so the statement is False.`,

    `The statement halves $r$ from $9\\%$ to $4.5\\%$ and claims $t^{*}$ would double from $18.22$ to $36.44$.

The overview recorded $t^{*}=2/r-4$. At $4.5\\%$,
$$t^{*}=2/0.045-4\\approx 40.44,$$
not $36.44$, and not $2\\times 18.22=36.44$. The shift $-4$ stops doubling from being exact.

**1.** If the formula were $t^{*}=2/r$ with no shift, halving $r$ would double $t^{*}$. The orchard's $P(t)=3{,}000(t+4)^{2}$ carries a shift $4$. Double $2/r$ and the shift still subtracts once, so $t^{*}$ more than doubles.

**2.** A rushed solver who computed $2\\times 18.22=36.44$ applied linearity to a relation that is inverse in $r$ plus a constant. The recovered $40.44$ is four years later than that slogan.

**3.** Letter A used $r=0.09$ to get $18.22$. This letter uses the same formula at $r=0.045$. Both letters need $t^{*}=2/r-4$, not "$t^{*}$ scales with $1/r$ ignoring the shift."

The opposite verdict would need $k=0$ in $t^{*}=2/r-k$. Here $k=4$.

The recovered $4.5\\%$ harvest date is about $40.44$ years, not $36.44$, so the statement is False.`,
  ],

  "math-11-57": [
    `The fund expects $\\$250,000$ from an exit in $2.5$ years, discounted continuously at $11\\%$. The statement names that present value as about $\\$189,893.03$.

The overview recovered $\\mathrm{PV}_{1}\\approx \\$189{,}893.03$ from $250{,}000e^{-0.275}$. This letter is reading that recovered exit present value.

**1.** The trap is $e^{-0.11\\times 2}=e^{-0.22}$, dropping the half year, which gives about $\\$200,637$. The wait is $2.5$ years. The exponent is $0.275$.

**2.** Another mix-up is annual compounding, $250{,}000/(1.11)^{2.5}\\approx \\$191,800$. Continuous $11\\%$ is slightly harder. The recovered figure is $\\$189,893$.

**3.** This $\\$189,893$ is the large addend in the combined $\\$227,407$. Getting it right is what lets letter C come out.

The recovered PDV of the exit payment is about $\\$189,893.03$, so the statement is True.`,

    `The side payment is $\\$40,000$ in seven months. The statement names that present value as about $\\$37,513.95$.

The overview recovered $t_{2}=7/12$ and $\\mathrm{PV}_{2}\\approx \\$37{,}513.95$. This letter is reading that recovered short-dated present value.

**1.** The trap is treating seven months as $7$ years, $e^{-0.11\\times 7}$, which would crush the side payment. Seven months is $0.583$ years. The exponent is about $0.06417$.

**2.** Another mix-up is $40{,}000\\times 0.11\\times 7/12$ as a linear haircut of about $\\$2,567$, leaving $\\$37,433$, a neighbour of $\\$37,514$. Continuous discounting is not that linear product, though it sits nearby at a short horizon.

**3.** This $\\$37,514$ is the small addend in the combined $\\$227,407$. Letter D will ask how large the haircut is as a share of $\\$40,000$.

The recovered PDV of the side payment is about $\\$37,513.95$, so the statement is True.`,

    `The statement names the combined present value of exit plus side payment as about $\\$230,000$.

The overview recovered $189{,}893.03+37{,}513.95=227{,}406.98$. The claimed $\\$230,000$ overstates the pair by about $\\$2,593$.

**1.** The trap is adding the faces, $250{,}000+40{,}000=290{,}000$, letter E's zero-rate figure, or rounding $\\$227,407$ up to a round $\\$230,000$. Approximately $\\$230,000$ is not a rounding of $\\$227,407$ to the nearest thousand that the claim asked for: the claim named $\\$230,000.00$.

**2.** Letters A and B locked the addends. This letter only adds. Mixing a face with a PDV, $250{,}000+37{,}514$ or $189{,}893+40{,}000$, lands in the $\\$227{,}000$ to $\\$290{,}000$ band and can look like a "$\\$230$k" guess.

**3.** The extra arithmetic is $227{,}407\\ne 230{,}000$. Both pieces are already in the overview.

The recovered combined PDV is about $\\$227,407$, not $\\$230,000$, so the statement is False.`,

    `The statement claims the $\\$40,000$ side payment is discounted by more than $10\\%$ of its face.

The overview recovered a dollar discount of $\\$2,486.05$, which is $6.2\\%$ of $\\$40,000$, not more than $10\\%$.

**1.** Seven months of $11\\%$ is a short wait. A $10\\%$ haircut would need either a longer wait or a higher rate. The recovered exponent $0.064$ is a $6.2\\%$ discount, not a $10\\%$ discount.

**2.** The trap is using $11\\%$ itself as the haircut because the rate is $11\\%$, or using $7/12\\approx 0.58$ of $11\\%$ linearly as $6.4\\%$ and then calling that "more than $10\\%$" by mixing $11\\%$ with $6\\%$. The recovered share is $6.2\\%$.

**3.** Letter B locked the PDV at $\\$37,514$. This letter only converts the gap $40{,}000-37{,}514$ into a percentage of face.

The opposite verdict would need $1-e^{-0.064}>0.10$, which would require $rt>0.105$, not $0.064$.

The recovered haircut is about $6.2\\%$, which is not more than $10\\%$, so the statement is False.`,

    `The statement resets the rate to $0\\%$ and claims the combined present value would be exactly $\\$290,000$.

The overview recovered that at $r=0$ both factors are $1$, so $\\mathrm{PDV}=250{,}000+40{,}000=290{,}000$. The two dates stop mattering when waiting is free.

**1.** At the original $11\\%$ that same $\\$290,000$ is the trap from letter C. At $r=0$ it is the right answer. The rate is what switches $\\$290,000$ from a mistake into the recovered value.

**2.** A rushed solver who still applied $e^{-0.275}$ and $e^{-0.064}$ after setting $r=0$ would report $\\$227,407$ again. The exponent $rt$ is zero when $r$ is zero.

The recovered zero-rate combined PDV is exactly $\\$290,000$, so the statement is True.`,
  ],

  "math-11-58": [
    `Investors paid $\\$2,000,000$ today for a $\\$3,200,000$ milestone payout in $4.5$ years. The statement names the implied discount factor as exactly $0.625$.

The overview recovered $2{,}000{,}000/3{,}200{,}000=0.625$. That factor is exact, not an approximation.

**1.** The trap is $3.2/2=1.6$ reported as the discount factor. That is the growth multiple. Discounting uses the reciprocal $0.625$.

**2.** Another mix-up is $2/3.2=0.625$ misread as $0.652$ by swapping digits. The recovered factor is five-eighths.

The recovered discount factor is exactly $0.625$, so the statement is True.`,

    `The statement names the implied continuous rate as about $10.44\\%$ per year.

The overview recovered $r=-\\ln 0.625/4.5\\approx 0.1044=10.44\\%$. This letter is reading that recovered rate. It is not rebuilding the factor $0.625$.

In the story, $10.44\\%$ is the unique continuous return that makes a $\\$2$ million bid fair against $\\$3.2$ million in $4.5$ years. A higher implied rate would mean the bid is cheaper relative to the payout.

**1.** A linear haircut of $37.5\\%$ over $4.5$ years is $8.33\\%$ per year, the usual trap. Continuous compounding on a $0.625$ factor is faster than linear, so the implied $r$ sits above $8.33\\%$, at $10.44\\%$.

**2.** The rule of $72$ is a doubling shortcut. This payout is a $1.6$ multiple, not a double, so $72/10.44$ is not the right tool. The recovered inversion uses $-\\ln 0.625$.

**3.** Letters C through E change $K$ or $t$ and recompute $r$. This letter only asks whether the original implied rate is about $10.44\\%$.

The recovered continuous rate is about $10.44\\%$, so the statement is True.`,

    `The statement raises the milestone payout from $\\$3,200,000$ to $\\$3,600,000$ against the same $\\$2,000,000$ price and $4.5$-year wait, and claims the implied rate would then be *higher*.

The overview recovered the new rate as about $13.06\\%$, against the original $10.44\\%$. A larger future payout against the same price is a deeper discount, so implied $r$ rises.

**1.** The extra arithmetic is the ranking $13.06>10.44$. The new factor $2/3.6\\approx 0.5556$ is already in the overview. This letter reads that ranking.

**2.** The trap is thinking "a larger payout is better for investors, so the implied rate should be lower." Better in dollar terms is a *higher* internal rate when the price is held fixed. Price fixed and $K$ up means $r$ up.

**3.** Letter D will shorten $t$ instead of raising $K$. Both moves raise $r$, for different reasons. This letter is the $K$ move.

The opposite verdict would need a *smaller* payout, which shrinks the required multiple. Raising the payout raises $r$.

The recovered $\\$3,600,000$ rate sits above the recovered $\\$3,200,000$ rate, so the statement is True.`,

    `The statement shortens the wait from $4.5$ years to $3$ years and claims the implied rate would then be *lower*.

The overview recovered the three-year rate as about $15.67\\%$, against the original $10.44\\%$. The same discount packed into fewer years is a steeper annual rate: $15.67>10.44$, not lower.

**1.** The extra arithmetic is $r=-\\ln 0.625/3\\approx 15.67\\%$. That figure is already in the overview. This letter reads the ranking $15.67>10.44$.

**2.** The trap is thinking "less time means less return." Holding the factor $0.625$ fixed, less time means *more* return per year. Rate and horizon are inverse when the price-to-payout ratio is fixed.

**3.** Letter E will double $t$ and halve $r$. This letter shortens $t$ and raises $r$. Both use $r=\\ln(K/\\mathrm{PDV})/t$.

The opposite verdict would need a *longer* horizon, which lowers $r$. Shortening the horizon raises $r$.

The recovered three-year rate sits above the recovered $4.5$-year rate, so the statement is False.`,

    `The statement keeps the factor $0.625$ but spreads it over $9$ years instead of $4.5$, and names the implied rate as about $5.22\\%$.

The overview recovered $r=-\\ln 0.625/9\\approx 0.0522=5.22\\%$, half of $10.44\\%$ because the same logarithm is divided by twice the years.

**1.** This is the inverse-linear case: doubling $t$ at a fixed factor halves $r$. It is not the square-root case of a present-value *level*.

**2.** A rushed solver who expected $10.44/\\sqrt{2}\\approx 7.38\\%$ from mixing letter C's level logic with this rate logic would reject $5.22\\%$. For a rate recovered from a fixed factor, halving is exact.

The recovered $9$-year rate is about $5.22\\%$, so the statement is True.`,
  ],

  "math-11-59": [
    `The consultancy models $P(t)=A(t+k)^{2}$ discounted continuously at $r$. The statement names the general harvest date as $t^{*}=2/r-k$.

The overview recovered that formula by substituting $P'=2A(t+k)$ into $P'=rP$ and cancelling the positive factor $A(t+k)$. The scale $A$ drops out. The shift $k$ subtracts.

**1.** The trap is $t^{*}=2/r$, dropping $k$, or $t^{*}=1/r-k$, using the wrong coefficient on $1/r$. Quadratic value with a shift produces $2/r-k$.

**2.** Another mix-up is leaving $A$ in the date, as if a more valuable stand were harvested later. $A$ cancels. Only $r$ and $k$ remain.

**3.** Letter B will plug $A=1{,}200$, $k=5$, $r=0.075$ into this formula. Getting $t^{*}=2/r-k$ right is what lets $21.67$ come out.

The recovered general formula is $t^{*}=2/r-k$, so the statement is True.`,

    `The statement plugs $A=1{,}200$, $k=5$, $r=7.5\\%$ into that formula and names $t^{*}\\approx 21.67$ years.

The overview recovered $t^{*}=2/0.075-5=26.667-5\\approx 21.67$. The scale $A$ never entered. This letter is reading that recovered date.

**1.** The trap is $2/0.075=26.67$, forgetting to subtract $k=5$, or $2/7.5-5$ using percent instead of $0.075$.

**2.** Another mix-up is thinking $A=1{,}200$ must stretch the rotation because the stand is "larger." $A$ cancelled in letter A. The date is $21.67$ whether $A$ is $1{,}200$ or $12{,}000$.

**3.** Letters C through E use this $21.67$. A harvest at $26.67$ is the unshifted $2/r$, not $t^{*}$.

The recovered optimal harvest time is about $21.67$ years, so the statement is True.`,

    `The statement names the present value at $t^{*}$ as about $\\$195,500$.

The overview recovered $P(t^{*})\\approx \\$853{,}333$ and $f(t^{*})\\approx \\$168{,}031$. The claimed $\\$195,500$ overstates present value by about $\\$27,469$.

**1.** A rushed solver who used $e^{-1.5}\\approx 0.223$ in place of $e^{-1.625}\\approx 0.197$ would land near $\\$190,000$, a neighbour of $\\$195,500$. The exponent is $0.075\\times 21.67=1.625$.

**2.** Reporting stumpage $\\$853,333$ as present value would miss by a factor of five. This letter is $f(t^{*})$, not $P(t^{*})$.

**3.** Letter D will change $k$ and move $t^{*}$ without needing this dollar figure. This letter only asks whether $f(t^{*})$ is $\\$195,500$. It is about $\\$168,031$.

The recovered present value at $t^{*}$ is about $\\$168,031$, not $\\$195,500$, so the statement is False.`,

    `The statement raises $k$ from $5$ to $8$ and claims the optimal harvest would then be *shorter* than $21.67$ years.

The overview recovered $t^{*}=2/0.075-8\\approx 18.67$. Raising the shift $k$ subtracts more from $2/r$, so the harvest comes forward: $18.67<21.67$.

**1.** The extra arithmetic is that ranking. The formula $t^{*}=2/r-k$ already says $\\partial t^{*}/\\partial k=-1$. Three extra years of shift cut three years off $t^{*}$.

**2.** The trap is thinking a larger $k$ means the trees are "older already, so wait longer to recoup." In this family $k$ is a shift in the value function, and a larger $k$ means more value is already baked in at $t=0$, so the remaining wait to $P'=rP$ is shorter.

**3.** Letter E will change $r$ instead of $k$. This letter changes $k$ at fixed $r$. Both use $t^{*}=2/r-k$.

The opposite verdict would need $k$ to *enter with a plus*, which it does not.

The recovered $k=8$ harvest sits below the recovered $k=5$ harvest, so the statement is True.`,

    `The statement doubles $r$ from $7.5\\%$ to $15\\%$ and claims the new $t^{*}$ would be *more than half* of the original $21.67$ years.

The overview recovered $t^{*}=2/0.15-5\\approx 8.33$. Half of $21.67$ is about $10.83$. Then $8.33<10.83$, so the new date is *less* than half, not more.

**1.** The shift $-k$ is why doubling $r$ more than halves $t^{*}$. If $t^{*}$ were $2/r$ with $k=0$, doubling $r$ would exactly halve $t^{*}$. Subtracting $5$ from both $26.67$ and $13.33$ leaves $21.67$ and $8.33$, and $8.33$ is less than half of $21.67$.

**2.** A rushed solver who computed $21.67/2=10.83$ and compared $13.33$ (the unshifted $2/0.15$) with $10.83$ would think "more than half." After subtracting $k$, the ranking flips.

**3.** Letter D changed $k$ at fixed $r$. This letter changes $r$ at fixed $k$. The recovered $15\\%$ date is $8.33$ years, below half of $21.67$.

The opposite verdict would need $8.33>10.83$, which would require a smaller $k$ or a different family.

The recovered $15\\%$ harvest is less than half of the original, so the statement is False.`,
  ],

  "math-11-60": [
    `The first franchise payment is $\\$30,000$ in five years at continuous $8\\%$. The statement names the five-year discount factor as about $0.6703$.

The overview recovered $e^{-0.40}\\approx 0.6703$. This letter is reading that recovered factor.

**1.** The trap is $1-0.08\\times 5=0.60$, a linear five-year haircut. Continuous discounting is not a $40\\%$ subtraction. The recovered factor is $0.6703$.

**2.** Another mix-up is $e^{-0.08}\\approx 0.923$, a one-year factor. The wait is five years. The exponent is $0.40$.

**3.** Letter B's ten-year factor is this number squared, because $t_{2}=2t_{1}$. Getting $0.6703$ right is what lets $0.4493$ come out as a square.

The recovered five-year discount factor is $0.6703$, so the statement is True.`,

    `The second payment is $\\$55,000$ in ten years. The statement names the ten-year discount factor as about $0.4493$.

The overview recovered $e^{-0.80}\\approx 0.4493$, and checked that $(0.6703)^{2}\\approx 0.4493$ because the second horizon is exactly double the first.

**1.** The trap is doubling $0.6703$ to $1.3406$, or taking $2\\times 0.40=0.80$ as the factor itself. Doubling the exponent is not doubling the factor. The ten-year factor is the *square* of the five-year factor.

**2.** Another mix-up is $e^{-0.08\\times 10}$ written as $e^{-0.08}\\approx 0.923$. The exponent is $0.80$, not $0.08$.

The recovered ten-year discount factor is $0.4493$, so the statement is True.`,

    `The statement names the present value of the $\\$30,000$ payment as about $\\$21,500$.

The overview recovered $\\mathrm{PV}_{1}\\approx \\$20{,}109.60$ from $30{,}000\\times 0.6703$. The claimed $\\$21,500$ overstates this by about $\\$1,390$.

**1.** A rushed solver who used $30{,}000\\times 0.7167$ or $30{,}000/1.40$ would land near $\\$21,429$, a neighbour of $\\$21,500$. The recovered factor is $0.6703$, not $0.717$.

**2.** Letter A locked $0.6703$. This letter only multiplies by $\\$30,000$. Mixing the ten-year factor $0.4493$ with $\\$30,000$ would understate at about $\\$13,479$.

**3.** This $\\$20,110$ is one addend of the combined $\\$44,823$. Getting it right is what lets letter E come out.

The recovered PDV of the $\\$30,000$ payment is about $\\$20,110$, not $\\$21,500$, so the statement is False.`,

    `The statement names the present value of the $\\$55,000$ payment as about $\\$26,000$.

The overview recovered $\\mathrm{PV}_{2}\\approx \\$24{,}713.09$ from $55{,}000\\times 0.4493$. The claimed $\\$26,000$ overstates this by about $\\$1,287$.

**1.** A rushed solver who used the five-year factor $0.6703$ on the $\\$55,000$ would report about $\\$36,867$. The second payment waits ten years, not five.

**2.** Another mix-up is $55{,}000\\times 0.473$, a neighbour that produces $\\$26,000$ exactly. The recovered factor is $0.4493$.

**3.** This $\\$24,713$ is the second addend of the combined $\\$44,823$. Letter C locked the first addend. This letter locks the second.

The recovered PDV of the $\\$55,000$ payment is about $\\$24,713$, not $\\$26,000$, so the statement is False.`,

    `The statement names the combined present value the investor should pay today as about $\\$47,500$.

The overview recovered $20{,}109.60+24{,}713.09\\approx 44{,}822.69$. The claimed $\\$47,500$ overstates the pair by about $\\$2,677$.

**1.** The trap is adding the faces, $30{,}000+55{,}000=85{,}000$, or adding the two claimed (false) present values $21{,}500+26{,}000=47{,}500$ exactly. That second path is the likely source: the claim's $\\$47,500$ is the sum of letters C and D's false levels.

**2.** Letters C and D locked the true addends at about $\\$20,110$ and $\\$24,713$. This letter only adds those recovered pieces, not the false neighbours.

**3.** Approximately $\\$47,500$ is not a rounding of $\\$44,823$. The gap is about $\\$2,677$.

The recovered combined PDV is about $\\$44,823$, not $\\$47,500$, so the statement is False.`,
  ],
};

function words(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  const b = bodies[t.id];
  if (!b) continue;
  t.tactical_explanations = b.map((body, i) => {
    const letter = "ABCDE"[i];
    const v = t.answer_key[i] ? "true" : "false";
    const closer = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
    if (!body.trim().endsWith(closer)) throw new Error("closer " + t.id + letter);
    if (/—|–/.test(body)) throw new Error("dash " + t.id + letter);
    return `**${letter}) ${t.statements[i]}**  (${v})\n\n${body}`;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (!bodies[t.id]) continue;
  console.log(t.id, t.tactical_explanations.map(words).join(", "));
}
