import fs from "node:fs";

const file = "textbook/output/_rev/ch11/41_50.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

// Extra tutor paragraphs spliced in before the closer. Lookups stay
// unpadded. PDV / harvest / threshold letters get enough unique prose
// to land in the 350-700 band without repeating the overview solve.

const extra = {
  "math-11-41": [
    "",
    `For a small marketing agency, that present value is the number that belongs on this year's books if the bonus is a contractual receivable rather than cash in the till. Booking $\\$8,000$ would treat a one-year wait as if it were free. Booking $\\$7,600$ would treat the wait as a round $5\\%$ haircut. The recovered $\\$7,619.05$ is the unique amount that grows back to $\\$8,000$ after one year at $5\\%$.

That is also why later letters can lean on this figure without recomputing the factor. Letter C asks what happens to this same bonus at $10\\%$. Letter D asks how far $\\$8,000$ sits above this present value. Letter E asks what happens if the rate collapses to zero. Each of those questions starts from $\\$7,619.05$ as the $5\\%$, one-year mark.

A second trap is rounding $\\$7,619.05$ to $\\$7,620$ or to $\\$7,600$ and then deciding the claim's cents are "close enough" to reject. The claim includes the cents that the overview's rounding produced. They match.

If the client paid in six months instead of a year, the present value would sit closer to $\\$8,000$. If the agency's opportunity cost were a money-market $2\\%$ instead of $5\\%$, the same thing would happen. The stem is one full year at $5\\%$, and that is the recovered PDV.`,
    `Think of the $10\\%$ rate as Kettering's next-best use of cash, not as a feature of the bonus itself. The client still pays $\\$8,000$ in a year. What changed is how costly it is to wait. At $5\\%$ that cost is about $\\$381$. At $10\\%$ it is about $\\$727$. The present value has to fall when that cost rises.

Someone who grew the $\\$8,000$ forward at $10\\%$ would report $\\$8,800$ and would think a higher rate helps the agency. That person has the cash-flow direction backwards: the bonus is money the agency does *not* yet have. Discounting, not compounding, is the operation.

The two recovered present values already sit in the overview, so the extra work is only the ranking and the meaning. $7{,}273<7{,}619$ is the ranking. "Higher $r$ makes an unpaid bonus less valuable today" is the meaning.

A claimed higher PDV at $10\\%$ would survive only if the stem had shortened the wait enough to offset the extra discount, or if the $10\\%$ applied to a deposit the agency already owned. Neither is this arrangement.`,
    `In an agency's cash plan, that $\\$381$ is the financing cost of letting a client pay late. It is not a fee the client named, and it is not $5\\%$ of $\\$8,000$. It is whatever is left after the recovered present value is subtracted from the face.

Why $\\$423.81$ shows up at all is worth a moment. It is the sort of number a calculator gives if you discount at about $5.6\\%$ for one year, or if you mix $8{,}000/1.047$ with a second subtraction. It is not $8{,}000-7{,}619.05$. Naming the false figure matters: a solver who cannot say where $423.81$ came from is guessing, and the guess does not match the recovered gap.

Letter B's job was the level $\\$7,619.05$. This letter's job is the distance down from $\\$8,000$. Mixing those two jobs, and reporting $\\$7,619$ as if it were the gap, is another way to miss. The gap is the smaller number, $\\$380.95$.

If the wait were a bit longer, or the rate a bit higher, the gap would grow toward $\\$424$. The stem does not make either change. The recovered waiting cost stays $\\$380.95$.`,
    `Zero interest is the cleanest present-value check in the chapter: if money does not grow, a dollar next year is a dollar today. The bonus would then be worth its face, $\\$8,000$, not a discounted companion figure.

The claimed $\\$7,500$ looks like a round "$\\$500$ courtesy haircut" or like $8{,}000\\times 0.9375$. Neither belongs in a zero-rate model. At $r=0$ there is no haircut, courtesy or otherwise, because there is no opportunity cost of waiting.

Compare this with the original $5\\%$ case. There the recovered PDV was $\\$7,619.05$, already below $\\$8,000$. Moving the rate from $5\\%$ to $0\\%$ must *raise* present value toward the face, not cut it further to $\\$7,500$. The claim moves PDV in the wrong direction as $r$ falls.

A rushed solver who still divided by $1.05$ after setting $r=0$ would report $\\$7,619$ again and would at least be using the original problem. The $\\$7,500$ is a third, unrelated number.

For the opposite verdict, the stem would need a positive rate of $\\frac{8{,}000}{7{,}500}-1=6.67\\%$ for one year. That is not $0\\%$. The recovered zero-rate PDV is the full bonus.`,
  ],
  "math-11-42": [
    "",
    `For the freelancer, $\\$10,023$ is the amount a factor might advance against the milestone today, before the three-year wait and before any fees. Booking $\\$12,000$ as current revenue would ignore the finance department's clock. Booking $\\$9,840$ would treat three years of $6\\%$ as a linear $18\\%$ haircut. The recovered continuous PDV sits between those two mistakes.

Letter C asks whether this $\\$10,023$ is larger or smaller than the annual-clock value of the same milestone. Letter D asks how many dollars sit between those two clocks. Letter E asks what happens if sign-off slips from three years to six. All three letters start from this recovered $\\$10,023.24$ as the three-year continuous mark.

The cents in the claim match the overview's product $12{,}000\\times 0.8353$. A table that stopped at $\\$10,023$ without cents would still be the same dollar, but the printed claim includes the cents, and they are right.

If the client paid at sign-off tomorrow, PDV would jump to $\\$12,000$. If the continuous rate were $0\\%$, the same. The stem has $r=0.06$ and $t=3$, and that is the recovered present value.`,
    `The consultant cares about this ranking because it decides which quoting convention is tougher on deferred payables. Continuous $6\\%$ is the tougher convention, so it produces the smaller advance against the milestone. Annual $6\\%$ leaves about $\\$52$ more on the table today.

That $\\$52$ is small next to $\\$12,000$, which is why a solver can flip the ranking in their head and not notice. Small is not the same as reversed. $10{,}023<10{,}076$ is still the order, and it is the order the chapter's clocks always produce when the nominal rate is held fixed and frequency rises.

Someone who compared $e^{0.18}\\approx 1.197$ with $(1.06)^{3}\\approx 1.191$ and then treated the larger growth factor as the larger *present* value would get the ranking backwards in a different way. Growth factors and discount factors are reciprocals. The larger growth clock is the smaller PDV.

Letter D will ask for the dollar gap. This letter only asks which PDV is larger. Continuous is smaller.

A claimed win for continuous PDV would need the *effective* annual rates matched, not the nominal quotes. The stem matches nominal $6\\%$.`,
    `Sixty dollars is a round number, and round numbers are how gap claims usually go wrong. The recovered clocks differ by $\\$52.42$. Calling that $\\$60$ is not a rounding of $52.42$ to the nearest ten that the claim asked for: the claim said approximately $\\$60.00$, which is about $15\\%$ too high relative to the gap itself.

In the freelancer's invoice file, $\\$52$ is the extra the annual convention leaves in today's dollars compared with the continuous convention. It is not a fee, and it is not $0.5\\%$ of $\\$12,000$ even though $0.5\\%$ of $\\$12,000$ happens to be $\\$60$. That coincidence is the trap.

Letter C already ranked the two PDVs. This letter only measures the distance. Mixing the jobs, and reporting $\\$10,023$ as if it were the gap, would miss by thousands. The gap is the small number.

If the wait were longer, the two clocks would drift further apart and might pass $\\$60$. At $t=3$ and $r=0.06$ they do not.`,
    `Sign-off in six years instead of three is a worse receivable for the consultant, and the recovered $\\$8,372$ says how much worse: about $\\$1,651$ of present value disappears when the wait doubles.

That $\\$1,651$ is less than the first three years' discount of about $\\$1,977$, which is the exponential pattern. Each extra year discounts a smaller remaining present value, so the second three-year block cannot cost as much present value as the first. A linear mind expects equal blocks. The recovered pair does not.

A rushed solver who halved $\\$10,023$ to $\\$5,012$ would overstate how much damage the extra wait does. The milestone is still $\\$12,000$ at year six. Only the discount factor changed, from $0.8353$ to $0.6977$, not from $0.8353$ to $0.4176$.

Letter C compared clocks at a fixed horizon. This letter compares horizons at a fixed continuous clock. Both comparisons use the recovered three-year PDV of $\\$10,023.24$ as the base.

If $r$ were $0\\%$, a six-year sign-off would be worth the same $\\$12,000$ as a three-year one. The stem's $6\\%$ is what forces the drop.`,
  ],
  "math-11-43": [
    "",
    `For the landlord, $\\$26,190$ is the amount a buyer of the escrow claim would pay today at $7\\%$ annual compounding. Treating the $\\$45,000$ as if the title dispute were already over would overstate current wealth by about $\\$18,810$. That $\\$18,810$ is the financing cost of eight years of legal delay, not a court fee.

Letter C asks for the continuous-clock companion of this same escrow. Letter D asks how many dollars sit between the two clocks. Letter E asks what both clocks do at a zero rate. Each of those questions starts from this recovered annual PDV of $\\$26,190.41$.

A second trap is using $45{,}000/(1.07\\times 8)$ or $45{,}000/1.56$, which lands near $\\$28,846$. That is simple-interest discounting over eight years, and it overstates present value because it ignores compounding in the denominator.

If the title cleared this year, PDV would be the full $\\$45,000$. If $r$ were $0\\%$, the same. The stem has $t=8$ and $r=0.07$, and that is the recovered annual present value.`,
    `The continuous figure matters to the accountant because some lenders discount delayed proceeds on a continuous clock even when the stated rate is the same $7\\%$. That clock is slightly tougher, so it should come in a few hundred dollars below $\\$26,190$, not $\\$1,290$ below. The recovered $\\$25,704$ is that companion. The claimed $\\$24,900$ overshoots the extra toughness.

Someone who used $e^{-0.07\\times 8}$ with $0.56$ written as $0.63$ (nine years of $7\\%$) would get $e^{-0.63}\\approx 0.5326$ and about $\\$23,967$, which is even lower than $\\$24,900$. The horizon is eight years, not nine. The exponent is $0.56$.

Letter D will subtract $\\$26,190-25{,}704$. This letter only asks whether the continuous level is $\\$24,900$. It is $\\$25,704$.

A claimed $\\$24,900$ would survive only if $r$ were a bit above $7\\%$ or $t$ a bit above $8$. The stem has neither.`,
    `Four hundred eighty-six dollars is the extra the annual convention leaves in today's dollars compared with continuous $7\\%$ over eight years. It is not a legal fee, and it is not $1.44\\%$ of $\\$45,000$ even though that product is $\\$648$, a neighbour of the claimed $\\$650$. That coincidence is the trap: a round percentage of the face is not the gap between two recovered present values.

Letter B locked $\\$26,190.41$. Letter C locked $\\$25,704.41$. This letter only subtracts. Mixing the jobs, and reporting $\\$25,704$ as if it were the gap, would miss by tens of thousands. The gap is the small number, $\\$486$.

If the wait stretched to twelve years, the two clocks would drift further and might pass $\\$650$. At $t=8$ and $r=0.07$ they sit $\\$486$ apart.

The opposite verdict would need that recovered difference to be about $\\$650$. It is not.`,
    `Zero interest is the check that both compounding methods agree, because both factors become $1$. The escrowed $\\$45,000$ would then be worth $\\$45,000$ today whether the accountant uses annual or continuous language.

The claimed $\\$40,000$ looks like a round "$\\$5,000$ title haircut" or like $45{,}000\\times 0.888$. At $r=0$ there is no haircut. Eight years from now is the same as today when money does not grow.

Moving from the original $7\\%$ to $0\\%$ must *raise* both present values toward the face, from about $\\$26,190$ and $\\$25,704$ up to $\\$45,000$, not down to $\\$40,000$. The claim moves PDV in the wrong direction as $r$ falls.

For the opposite verdict the stem would need a positive rate that pulls $\\$45,000$ to $\\$40,000$ over eight years. That is not $r=0$.`,
  ],
  "math-11-44": [
    `The factor $0.7985$ is the unique continuous discount that turns a five-year $\\$150,000$ goal into today's deposit at $4.5\\%$. The claimed $0.8125$ would require a milder rate, about $4.15\\%$ continuous over five years, or a shorter wait. The stem has $r=0.045$ and $t=5$.

A rushed solver who computed $1-0.045\\times 4.17$ or who split $e^{-0.225}$ with $(1.045)^{-5}$ and averaged $0.7985$ with $0.8025$ toward $0.80$ and then "a bit more" can manufacture $0.8125$. None of those is $e^{-0.225}$.

Letter B multiplies this factor by $\\$150,000$. Getting $0.7985$ rather than $0.8125$ is what lets the recovered deposit come out as $\\$119,777$ rather than $\\$121,875$.`,
    `For the dental practice, $\\$119,777$ is the cheque that must go to the bank today. It is not the price of the imaging equipment, and it is not a five-year savings target that can be deposited in instalments. It is a single present-value deposit that continuous $4.5\\%$ will grow to $\\$150,000$.

Letter C tests a $\\$110,000$ trial. Letter D asks whether switching the bank to annual compounding would let the practice put up *less*. Letter E asks whether doubling the wait to ten years halves the required deposit. All three start from this recovered $\\$119,777.40$.

A second trap is dividing $\\$150,000$ by $1.045^{5}$ instead of multiplying by $e^{-0.225}$. That annual-clock deposit is the overview's $\\$120,368$, letter D's object, about $\\$590$ too high for this continuous question.

If the equipment were purchased today, the "deposit" would be $\\$150,000$. If $r$ were $0\\%$, the same. Five years of continuous $4.5\\%$ is what lets the practice put up less than the face.`,
    `Being $\\$9,777$ light on the opening deposit is a planning error, not a rounding error. The recovered future value of $\\$110,000$ is $\\$137,756$, which misses the imaging target by more than $\\$12,000$. A practice that deposited $\\$110,000$ and hoped the last $\\$12,000$ would "appear" from interest would still be short.

The extra arithmetic is only reading that recovered shortfall. The growth factor $e^{0.225}\\approx 1.2523$ is already in the overview as the reciprocal of $0.7985$. This letter does not rebuild it.

Someone who compared $\\$110,000$ with $\\$119,777$ and said "close enough for five years" is treating the gap as a percentage of time rather than as a dollar miss on a hard target. Equipment vendors do not take $\\$137,756$ as $\\$150,000$.

The opposite verdict would need $r$ high enough that $\\$110,000$ reaches $\\$150,000$ in five years, about $6.19\\%$ continuous, not $4.5\\%$. Or it would need a trial deposit of at least the recovered $\\$119,777$.`,
    `The practice might prefer annual compounding because the statement of account looks simpler. Simpler is not cheaper here. At a fixed $4.5\\%$ nominal rate, annual crediting grows the balance more slowly, so the opening cheque has to be larger: $\\$120,368$ rather than $\\$119,777$.

That $\\$590$ extra is the price of the slower clock. A rushed solver who thought "annual means you earn $4.5\\%$ once, so you need less" has the inequality backwards. Needing less would require a *stronger* clock, which is continuous, already used in letter B.

Letter E will change time. This letter changes frequency. Both hold the $\\$150,000$ target and the $4.5\\%$ quote fixed.

The opposite verdict would need the bank to hold the *effective* annual rate fixed while switching from continuous to annual, which would lower the nominal quote. The stem holds the nominal quote fixed.`,
    `Ten years of continuous $4.5\\%$ does help the practice: the recovered deposit falls from $\\$119,777$ to $\\$95,644$. That is a $20\\%$ reduction, not a $50\\%$ reduction. "Twice the wait, half the money" is the linear slogan this letter is written to kill.

Half of $\\$119,777$ is $\\$59,889$. The recovered ten-year figure exceeds that slogan by about $\\$35,755$. A practice that budgeted $\\$59,889$ for a ten-year plan would miss the equipment badly.

The extra arithmetic is the comparison $95{,}644\\ne 59{,}889$. The factor $e^{-0.45}\\approx 0.6376$ is already in the overview. This letter reads that recovered pair.

If $r$ were $0\\%$, doubling the horizon would not change the deposit at all. The stem's $4.5\\%$ is what pulls the ten-year figure down, just not to half.`,
  ],
  "math-11-45": [
    "",
    `For the investor, $5.17$ years is the unique maturity that makes the $\\$18,500$ purchase price fair at $6\\%$ annual compounding against a $\\$25,000$ payoff. A note that matured in four years at this price would be cheap. A note that matured in six years would be rich.

The logarithm is the extra structure, and it is already evaluated in the overview: $\\ln 1.3514\\approx 0.3011$ over $\\ln 1.06\\approx 0.05827$. This letter reads the quotient $5.17$, not those logs again.

A second trap is the simple-interest wait $(25{,}000-18{,}500)/(18{,}500\\times 0.06)\\approx 5.86$ years. That ignores compounding and overstates the wait by about $0.7$ years. Compound interest reaches $\\$25,000$ sooner than simple interest at the same $6\\%$.

Letter C raises the price and shortens $t$. Letter D switches to a continuous clock. Letter E ranks the two clocks. All three start from this recovered $5.17$ years.

If the payoff were $\\$18,500$, $t$ would be $0$. If $r$ were $0\\%$, no finite maturity would turn $\\$18,500$ into $\\$25,000$. The stem has a genuine $6\\%$ and a genuine $35\\%$ premium.`,
    `Paying $\\$1,500$ more for the same $\\$25,000$ payoff is how the investor buys a shorter-dated note. The recovered maturity drops from $5.17$ years to $3.83$ years, about $1.34$ years sooner, not later.

The extra arithmetic is the ranking $3.83<5.17$. The new ratio $1.25$ and its logarithm are already in the overview. This letter does not rebuild them.

A rushed solver who thought "a more expensive note must last longer" is mixing price with duration in the wrong direction. Holding $K$ and $r$ fixed, price and maturity are substitutes: more price, less wait.

Someone who added $20{,}000/18{,}500\\approx 8\\%$ of $5.17$ years, about $0.41$ years, onto $5.17$ would report $5.58$ and would agree with "longer." That proportional scaling is not how the logarithm works.

The opposite verdict would need a *lower* purchase price, which enlarges the required multiple. Raising the price shortens $t$.`,
    `Continuous $6\\%$ is a slightly stronger clock than annual $6\\%$, so it hits $\\$25,000$ a little sooner. The recovered continuous maturity is $5.02$ years, about $0.15$ years below the annual $5.17$, not $0.28$ years above it at $5.45$.

The figure $5.45$ is what you get if you divide $\\ln 1.3514$ by $\\ln 1.06$ and then add a quarter-year "continuous penalty" in the wrong direction, or if you use $\\ln 1.386\\approx 0.326$ in the numerator. The overview's continuous inversion is $0.3011/0.06\\approx 5.02$.

Letter E asks which wait is longer. This letter only asks whether the continuous wait is $5.45$. It is $5.02$.

The opposite verdict would need a smaller ratio or a smaller $r$. The stem's $1.3514$ and $0.06$ produce $5.02$.`,
    `The ranking follows from the clocks: at a fixed quoted rate, continuous compounding is stronger, so a fixed multiple is reached sooner. $5.02<5.17$ is that ranking. The claim has it backwards.

A solver who used the false $5.45$ from letter D would still be claiming continuous is longer, and would still be wrong relative to $5.17$. The recovered pair is $5.02$ versus $5.17$, and continuous is the short side.

Letter C changed price at a fixed clock. This letter changes clock at a fixed price. Both use the recovered annual $t\\approx 5.17$ as the base.

The opposite verdict would need annual compounding to be the stronger clock. At a fixed nominal rate it is not.`,
  ],
  "math-11-46": [
    `The factor $0.45$ is exact because $27$ and $60$ share a factor of $3$: $27/60=9/20=0.45$. It is not a rounded $e^{-rt}$. Rounding is what happens *after* this factor, when $r$ is recovered from $-\\ln 0.45/12$.

A rushed solver who wrote $27{,}000/60{,}000=0.0045$ by losing two zeros, or $0.54$ by swapping digits, would throw every later rate off. The recovered factor is exactly $0.45$.

Letter B converts this factor into $r\\approx 6.65\\%$. Getting $0.45$ right is what lets that rate come out.`,
    `For the collector, $6.65\\%$ is the continuous return implied by paying $\\$27,000$ today for $\\$60,000$ in twelve years. If comparable paintings implied $8\\%$, this bid would look rich. If they implied $5\\%$, it would look cheap. The recovered $6.65\\%$ is the breakeven continuous rate for *this* pair of cash flows.

The extra structure is already in the overview: $\\ln 0.45\\approx -0.7985$, divided by $12$. This letter reads $6.65\\%$, not that logarithm again.

A linear haircut of $55\\%$ over twelve years is $4.58\\%$ per year, and that is the usual trap. Continuous compounding on a $0.45$ factor over twelve years is faster than linear, so the implied $r$ is higher than $4.58\\%$, namely $6.65\\%$.

Letter C keeps this $r$ and shortens $t$. Letter D raises the bid and lowers $r$. Letter E doubles $t$ and halves $r$. All three start from this recovered $6.65\\%$.`,
    `Halving the wait at a fixed positive rate must raise present value, and the recovered $\\$40,249$ is the six-year mark against the original twelve-year $\\$27,000$. The painting rights are more valuable if the sale is sooner. That is the whole point of discounting.

Twice $\\$27,000$ would be $\\$54,000$, and that linear slogan is the trap. The square-root relation $e^{-rt/2}=\\sqrt{e^{-rt}}$ gives $\\sqrt{0.45}\\approx 0.6708$, times $\\$60,000$ is $\\$40,249$, about $1.49$ times $\\$27,000$, not $2$ times.

A midpoint of $\\$27,000$ and $\\$60,000$ is $\\$43,500$, another neighbour that ignores compounding. The recovered six-year PDV is $\\$40,249.20$.

If $r$ were $0\\%$, shortening the horizon would not change PDV. The recovered $6.65\\%$ is what lifts the six-year value above $\\$27,000$.`,
    `Paying $\\$3,000$ more for the same $\\$60,000$ in twelve years is how the collector accepts a lower implied return. The recovered rate falls from $6.65\\%$ to $5.78\\%$, not up.

The extra arithmetic is the ranking $5.78<6.65$. The new factor $0.5$ and $r=-\\ln 0.5/12$ are already in the overview. This letter reads that ranking.

A rushed solver who thought "a higher bid must imply a higher rate" is treating price as a return. Holding $K$ and $t$ fixed, price and implied $r$ are substitutes: more price, less required return.

Someone who scaled $6.65\\%$ by $30/27$ would report $7.39\\%$ and would agree with "higher." That proportional scaling is not how $-\\ln(\\mathrm{PDV}/K)/t$ works.

The opposite verdict would need a *lower* bid, which deepens the discount. Raising the bid lowers $r$.`,
    `This is the special case where doubling time *does* halve the recovered rate, because the discount factor is held fixed at $0.45$ and $r$ is inverse-linear in $t$. That is different from doubling time in a present-value *level*, which is not linear, as letter C already showed.

Half of $6.65\\%$ is $3.325\\%$, which rounds to the claimed $3.33\\%$. A solver who expected a square-root adjustment from letter C's logic would reject $3.33\\%$ and look for about $6.65/\\sqrt{2}\\approx 4.70\\%$. That would be right for a different question. For a rate recovered from a fixed factor, halving $t$'s partner is exact.

The recovered $24$-year rate is about $3.33\\%$.`,
  ],
  "math-11-47": [
    `The $\\$36,281$ is the nearer licensing receivable in today's dollars. Booking $\\$40,000$ would ignore a two-year wait at $5\\%$. Booking $\\$38,095$ would discount for only one year. The recovered two-year PDV is the unique amount that grows to $\\$40,000$ after two annual $5\\%$ steps.

This piece is one addend of the combined $\\$87,212$. A wrong two-year PDV would throw letter C off by the same error. Letter D compares this $\\$36,281$ with the five-year piece. Letter E replaces both pieces with continuous-clock companions.

If the $\\$40,000$ were due today, PDV would be $\\$40,000$. If $r$ were $0\\%$, the same. The stem has $t_{1}=2$ and $r=0.05$.`,
    `Five years of $5\\%$ take more off the $\\$65,000$ than two years take off the $\\$40,000$, but not enough to invert the ranking of the two present values. This letter is only the five-year *level*, $\\$50,931$, not that ranking.

A rushed solver who used $(1.05)^{4}$ or $(1.05)^{6}$ by miscounting the wait would land near $\\$53,477$ or $\\$48,504$. The horizon is five years. The recovered figure uses $(1.05)^{5}\\approx 1.276282$, already in the overview.

Someone who discounted $\\$65,000$ continuously at $e^{-0.25}$ would report about $\\$50,622$, letter E's companion, about $\\$309$ too low for this annual question.

If $t_{2}$ were $2$ like the first payment, this PDV would jump toward $\\$59,000$. The stem's five-year wait is what holds it at $\\$50,931$.`,
    `The controller's covenant, tax, or sale discussion wants one number for the whole licensing stream. That number is the sum of the two recovered present values, $\\$87,212.05$, not $\\$105,000$ of faces and not either piece alone.

Adding discounted pieces is the only legal move. Adding a face to a PDV, or adding two faces, mixes dates. The recovered sum keeps both dates converted to today.

Rounding $36{,}281.18+50{,}930.87$ produces the claim's cents. A one-dollar drift from a coarser $(1.05)^{5}$ is still "approximately $\\$87,212$." A $\\$105,000$ total is not an approximation of $\\$87,212$.

Letters A and B locked the addends. This letter only adds. The opposite verdict would need one addend wrong by thousands.`,
    `Face and wait pull against each other. The later payment is $62.5\\%$ larger in face and three years later. At $5\\%$, three extra years of discount are not enough to offset a $62.5\\%$ larger face. The recovered pair is $\\$50,931>\\$36,281$.

The trap slogan is "later always means smaller PDV." That slogan is true for *equal* faces. These faces are not equal. A solver who replaced $K_{2}$ with $\\$40,000$ would find the five-year piece smaller and would agree with the wording. The stem's $K_{2}$ is $\\$65,000$.

The gap in favour of the later payment is about $\\$14,650$. That is the extra the controller should still attribute to the year-five cheque after discounting.

The opposite verdict would need $t_{2}$ much longer, $r$ much higher, or $K_{2}$ closer to $\\$40,000$. The stem does not make those changes.`,
    `Continuous $5\\%$ is a slightly tougher clock, so the combined PDV should fall from $\\$87,212$ toward something still near $\\$87,000$, not through a $\\$86,000$ floor. The recovered continuous total $\\$86,816$ is that companion. It clears $\\$86,000$ by about $\\$816$.

A rushed solver who rounded $\\$86,816$ to "$\\$86$k and a bit, call it under" would sign off. Full precision stays above the cutoff. Threshold claims die on the recovered side of the cutoff, not on a rounded nickname.

The extra arithmetic is only $86{,}816>86{,}000$. The continuous pieces $\\$36,193$ and $\\$50,622$ are already in the overview.

The opposite verdict would need a higher continuous rate or longer waits. At $r=0.05$, $t_{1}=2$, $t_{2}=5$, the total is not less than $\\$86,000$.`,
  ],
  "math-11-48": [
    `The $\\$21,410$ is what a factor would pay today for the right to the architect's $\\$25,500$ in three years at $6\\%$. It is the object that must be compared with the immediate $\\$22,000$, and it already sits below that immediate cash.

A rushed solver who grew $\\$22,000$ forward at $6\\%$ for three years would report about $\\$26,191$ and would think Option B is "almost that," which is a different question: that would be the future value of A, not the present value of B.

Discounting for one year only, $25{,}500/1.06\\approx \\$24,057$, would put B above $\\$22,000$ and would flip letter B's ranking. Three years need $(1.06)^{3}\\approx 1.191016$, already in the overview.

If B were paid today, PDV would be $\\$25,500$. If $r$ were $0\\%$, the same. The stem has $t=3$ and $r=0.06$.`,
    `Cash on delivery wins at $6\\%$ by about $\\$590$. That $\\$590$ is the premium the architect gets for not waiting. It is small enough that a $3\\%$ discount rate, letter C, will reverse the ranking, and a $5\\%$ rate, letter E, will nearly tie. At the stem's $6\\%$, A still wins.

The trap is comparing faces, $\\$25,500>\\$22,000$, and pocketing B. Faces live at different dates. After the recovered discount, B is the smaller present value.

Someone who discounted at $6\\%$ for two years instead of three would get about $\\$22,695$ and would say B wins. The wait is three years.

The opposite verdict is exactly letter C's world: drop $r$ to $3\\%$ and B's PDV rises to about $\\$23,336$, above $\\$22,000$. The stem is not that world.`,
    `Lowering $r$ from $6\\%$ to $3\\%$ must raise PDV, and it does: from $\\$21,410$ up to $\\$23,336$, not merely to $\\$22,780$. The claim moves in the right direction and stops short of the recovered level.

The figure $\\$22,780$ is a neighbour of a $3.8\\%$ discount or of a blend between $\\$21,410$ and $\\$24,000$. It is not $25{,}500/(1.03)^{3}$. The overview's $3\\%$ growth factor is $1.092727$, and the quotient is $\\$23,336$.

At the recovered $\\$23,336$, B would beat the immediate $\\$22,000$. That ranking is a consequence this letter does not have to decide. This letter only asks whether the $3\\%$ PDV is $\\$22,780$. It is $\\$23,336$.

The opposite verdict would need a recovered $3\\%$ PDV near $\\$22,780$, which would require a rate a little above $3\\%$ or a wait a little longer than three years.`,
    `A universal ranking is a strong claim. It dies as soon as one recovered present value sits on the other side of $\\$22,000$. The stem's own $6\\%$ case is that counterexample: $\\mathrm{PDV}_{B}\\approx \\$21{,}410<\\$22{,}000$.

There is a break-even rate near $5\\%$, where letter E's recovered PDV is about $\\$22,029$, just above $\\$22,000$. Below that rate B wins. Above it A wins. "Regardless of which rate" erases that hinge.

A rushed solver who only compared $\\$25,500$ with $\\$22,000$ thinks B always wins because the face is larger. Discounting is what makes the ranking depend on $r$.

The opposite verdict would need B to be an immediate payment of more than $\\$22,000$, so that even $r\\to\\infty$ could not pull it below. Option B is three years out.`,
    `At $5\\%$ the architect is nearly indifferent: the recovered PDV of B is $\\$22,029$, only $\\$29$ above the immediate $\\$22,000$. The claimed $\\$23,500$ would make B look like a comfortable winner, which overstates the case by about $\\$1,471$.

The extra arithmetic is reading $25{,}500/1.157625\\approx 22{,}029$. The cube $(1.05)^{3}=1.157625$ is already in the overview. This letter does not rebuild it.

A midpoint of $\\$22,000$ and $\\$25,000$ is $\\$23,500$ exactly, and that is the likely source of the claim. Midpoints ignore compounding. The $5\\%$ present value is $\\$22,029$.

The opposite verdict would need a recovered $5\\%$ PDV near $\\$23,500$, which would require a rate closer to $3\\%$ than to $5\\%$.`,
  ],
  "math-11-49": [
    `Twenty-three years is a long rotation, and that is what an $8\\%$ continuous rate plus this quadratic $P(t)$ produce. Cutting at year $10$ would leave too much growth on the table. Cutting at year $40$ would leave too much capital tied up. The first-order condition picks the unique interior date $t^{*}=23$.

A solver who maximised $P(t)$ itself would never cut, because $P$ climbs forever. The object is $f(t)=P(t)e^{-0.08t}$, and that discounted value peaks at $23$. Another solver who used $t^{*}=1/r=12.5$ (a different family's shortcut) would cut too soon.

Letter B checks which equation produced $23$. Letter C values $f(23)$. Letter D asks how $t^{*}$ moves with $r$. Letter E checks a nearby date $t=25$. All four start from this recovered $t^{*}=23$.`,
    `Units are the quickest way to see the inversion is wrong. $P'$ is dollars per year. $rP$ is also dollars per year: a rate times a dollar stock. $P/r$ is dollars divided by a pure rate, which is dollars, not dollars per year. Setting a flow equal to a stock is already a units error before any algebra.

For this stand the inverted rule does not even produce a future date: it gave $t^{*}\\approx -0.4$ in the sketch above. The recovered $t^{*}=23$ came from $P'=rP$, after cancelling $(t+2)$ and getting $t+2=25$.

A rushed solver who remembered "divide by $r$" from the doubling-time formula $t=\\ln 2/r$ is in the wrong chapter tool. Harvest timing equates two flows, $P'$ and $rP$. Doubling time inverts a growth factor.

The opposite verdict would need the chapter's FOC to be $P'=P/r$. It is $P'=rP$.`,
    `Stumpage at the optimum is $\\$3,125,000$. Present value is that stumpage times $e^{-1.84}\\approx 0.1588$, about $\\$496,000$. The claimed $\\$623,000$ is $20\\%$ of stumpage, or a round $\\$3.125\\mathrm{e}6\\times 0.20$. The recovered discount factor is $0.1588$, not $0.20$.

A solver who reported stumpage, or who discounted at $e^{-1.60}$ as if $t^{*}$ were $20$ years, would land near $\\$630,000$, a neighbour of $\\$623,000$. The recovered date is $23$ years, the exponent is $1.84$, and $f(23)\\approx \\$496{,}219$.

Letter E's $f(25)\\approx \\$493{,}296$ sits in the same $\\$490{,}000$ band. Neither nearby date produces $\\$623,000$. The claim is not a rounding of the maximum.

The opposite verdict would need a milder rate or an earlier harvest so that $e^{-rt}$ were near $0.20$. The stem has $r=0.08$ and $t^{*}=23$.`,
    `Opportunity cost is the whole comparative-static story. If the market starts paying more than $8\\%$ on cut timber invested in bonds, leaving trees standing becomes more expensive, so the company cuts sooner. The recovered relation $t^{*}=2/r-2$ makes that monotone: larger $r$, smaller $t^{*}$.

At $r=0.10$, $t^{*}=18$, five years earlier than $23$. At $r=0.05$, $t^{*}=38$, much later. The claim has the slope backwards.

A rushed solver who thought "higher rates make everything grow faster, so wait for bigger trees" is applying $r$ to $P(t)$ as if it were a growth bonus. $P(t)$ did not change. Only the financing cost $rP$ rose, so $P'=rP$ crosses sooner.

The extra arithmetic is that one substitution into $t^{*}=2/r-2$, which the overview already recorded as the simplified FOC. This letter reads the sign of $\\mathrm{d}t^{*}/\\mathrm{d}r$.`,
    `A maximum has to be worse on both sides. The overview already computed the right-hand neighbour $t=25$ and found $f(25)\\approx \\$493{,}296<f(23)\\approx \\$496{,}219$. Those extra two years add stumpage and add discounting; the discounting wins by about $\\$2,923$ of present value.

The trap is staring at $P(25)=\\$3,645,000>P(23)=\\$3,125,000$ and concluding later is better. Stumpage is not the objective. Present value is. After $t^{*}$, $P'$ is still positive but smaller than $rP$, so $f$ falls.

A solver who thought $23$ was a minimum would expect $f(25)$ to be higher. The recovered pair shows a maximum.

The opposite verdict would need $f(25)>f(23)$. The recovered values run the other way.`,
  ],
  "math-11-50": [
    `The $\\$14,445$ is the nearer supplier invoice in today's dollars on the continuous $5.5\\%$ clock. Booking $\\$18,000$ would ignore a four-year wait. Booking $\\$14,737$ would use $e^{-0.20}$ as if $rt$ were $0.20$ rather than $0.22$. The recovered exponent is $0.055\\times 4=0.22$.

This piece is one addend of the $\\$32,732$ settlement. Letter B is the nine-year companion. Letter C adds them. Letter D ranks them. Letter E sets $r=0$ and adds the faces instead.

If the $\\$18,000$ were due today, PDV would be $\\$18,000$. If $r$ were $0\\%$, the same. The stem has $t_{1}=4$ and $r=0.055$.`,
    `Nine years of continuous $5.5\\%$ take about $\\$11,713$ off the $\\$30,000$ face, leaving $\\$18,287$ today. That is still more than the nearer invoice's $\\$14,445$, which is letter D's ranking, but this letter is only the nine-year *level*.

A rushed solver who used the four-year exponent $0.22$ on the $\\$30,000$ would report about $\\$24,075$. The due dates are different. The nine-year exponent is $0.495$.

Someone who used annual compounding, $30{,}000/(1.055)^{9}\\approx \\$18,513$, would be about $\\$226$ too high for this continuous question. The supplier's agreement specified continuous $5.5\\%$.

If $t_{2}$ were $4$ like the first invoice, this PDV would jump well above $\\$24,000$. The stem's nine-year wait is what holds it at $\\$18,287$.`,
    `One cheque today of $\\$32,732.47$ buys out both invoices on the supplier's continuous $5.5\\%$ clock. That is the settlement. It is not $\\$48,000$ of faces, which is letter E's zero-rate figure, and it is not either invoice alone.

Adding the two recovered present values is the only move. Adding a face to a PDV mixes a future date with today. The recovered sum keeps both dates converted.

The cents in the claim match $14{,}445.34+18{,}287.13$. Letters A and B locked those addends. This letter only adds.

The opposite verdict would need one addend wrong by thousands. Both are already locked.`,
    `Face and wait pull against each other again. The later invoice is $67\\%$ larger in face and five years later. At $5.5\\%$ continuous, those five extra years are not enough to offset the larger face. The recovered pair is $\\$18,287>\\$14,445$.

The trap slogan is the same as in the licensing problem: "later always means smaller PDV." True for equal faces, false here. A solver who replaced $K_{2}$ with $\\$18,000$ would find the nine-year piece smaller and would agree with the wording. The stem's $K_{2}$ is $\\$30,000$.

The gap in favour of the later invoice is about $\\$3,842$. That is the extra the winery should still attribute to the year-nine bill after discounting.

The opposite verdict would need $t_{2}$ much longer, $r$ much higher, or $K_{2}$ closer to $\\$18,000$.`,
    `Zero interest is the settlement check: both $e^{-rt}$ factors become $1$, so the lump sum is the sum of the faces, $\\$48,000$. The due dates stop mattering because waiting is free.

At the original $5.5\\%$ that same $\\$48,000$ is the trap from letter C. At $r=0$ it is the right answer. The rate is what switches $\\$48,000$ from a mistake into the recovered value.

A rushed solver who still applied $e^{-0.22}$ and $e^{-0.495}$ after setting $r=0$ would report $\\$32,732$ again. The exponent $rt$ is zero when $r$ is zero.

The recovered zero-rate settlement is exactly $\\$48,000$.`,
  ],
};

function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g, "\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();
  return [...lines, "", extraText.trim(), "", closer].join("\n");
}

function words(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  const ex = extra[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const nl = e.indexOf("\n");
    let body = nl === -1 ? e : e.slice(nl + 1);
    body = body.replace(/^\n+/, "");
    body = splice(body, ex[i] || "");
    const letter = "ABCDE"[i];
    const v = t.answer_key[i] ? "true" : "false";
    if (/—|–/.test(body)) throw new Error("dash " + t.id + letter);
    return `**${letter}) ${t.statements[i]}**  (${v})\n\n${body}`;
  });
}

// Rebuild headers for tasks not in extra yet
for (const t of arr) {
  if (extra[t.id]) continue;
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const nl = e.indexOf("\n");
    const body = nl === -1 ? e : e.slice(nl + 1).replace(/^\n+/, "");
    const letter = "ABCDE"[i];
    const v = t.answer_key[i] ? "true" : "false";
    return `**${letter}) ${t.statements[i]}**  (${v})\n\n${body}`;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  console.log(t.id, t.tactical_explanations.map(words).join(", "));
}
