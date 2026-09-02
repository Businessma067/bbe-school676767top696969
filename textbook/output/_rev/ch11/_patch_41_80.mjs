import fs from "node:fs";
import path from "node:path";

const patches = {};

function add(id, overview, letters) {
  patches[id] = { solution_overview: overview, tactical_explanations: letters };
}

add(
  "math-11-41",
  `Bringing a check back one year is a single division, because the account that prices the wait credits interest only once. The bonus is $K = 8000$ dollars after $t = 1$ year at $r = 0.05$ compounded annually, so the growth factor is $1.05$.

The matching discount factor is the reciprocal:

$$\\frac{1}{1.05} \\approx 0.952381$$

which is $0.9524$ to four decimals. Scaling the face amount:

$$PDV = \\frac{8000}{1.05} \\approx 7619.05$$

At a zero rate that growth factor is $1$, so the present value would equal the full $\\$8,000$ face amount.`,
  [
    "**A.** → True\n\nThe overview factor $0.952381$ rounds to four decimals as $0.9524$. That is the one-year discount at $5\\%$, matching the claimed figure.",
    "**B.** → True\n\nThe discounted bonus is already $\\$7,619.05$ in the overview. That is the present value of the $\\$8,000$ check under annual compounding at $5\\%$ for one year.",
    "**C.** → False\n\nA higher rate shrinks the discount factor, so it cannot raise present value. Replace $5\\%$ with $10\\%$:\n\n$$PDV_{0.10} = \\frac{8000}{1.10}$$\n\n$$\\approx 7272.73$$\n\nThat sits about $\\$346$ below the original $\\$7,619.05$. The claim ranks the two values in the wrong order.",
    "**D.** → False\n\nThe cost of waiting is face value minus the overview present value:\n\n$$8000 - 7619.05 = 380.95$$\n\nThe claim puts that gap at $\\$423.81$, about $\\$43$ too high.",
    "**E.** → False\n\nA zero rate leaves the factor at $1$, so the present value is the full $\\$8,000$. The claim's $\\$7,500$ is $\\$500$ too low. Waiting is free when money does not grow.",
  ]
);

add(
  "math-11-42",
  `Continuous discounting packs the whole wait into one exponent $rt$. The milestone is $K = 12000$ dollars, the continuous rate is $r = 0.06$, and $t = 3$, so\n\n$$rt = 0.06 \\times 3 = 0.18$$\n\n$$e^{-0.18} \\approx 0.835270$$\n\nThe present value is that factor times the face amount:\n\n$$PDV_{\\mathrm{cont}} = 12000 \\times 0.835270 \\approx 10023.24$$\n\nThe same stated $6\\%$ credited once a year uses a different clock. Three annual growth steps give $(1.06)^{3} \\approx 1.191016$, so\n\n$$PDV_{\\mathrm{ann}} = \\frac{12000}{(1.06)^{3}} \\approx 10075.43$$`,
  [
    "**A.** → True\n\nFour-decimal rounding of $e^{-0.18} \\approx 0.835270$ is $0.8353$. About $83.53\\%$ of each future dollar survives three years of continuous $6\\%$ discounting.",
    "**B.** → True\n\nThe $\\$12,000$ milestone times that factor is already $\\$10,023.24$ in the overview. The claim names that continuous present value to the cent.",
    "**C.** → False\n\nThe two clocks already sit side by side: $\\$10,023.24$ continuously versus $\\$10,075.43$ annually. Continuous compounding grows money faster at the same stated rate, so it discounts a future sum harder. The continuous present value is the smaller of the two, not the greater.",
    "**D.** → False\n\nAnnual compounding exceeds continuous compounding by\n\n$$10075.43 - 10023.24 = 52.19$$\n\nThe ranking in the claim is right, but the claimed $\\$60.00$ overstates that gap by about $\\$8$.",
    "**E.** → True\n\nDoubling the wait doubles the exponent to $0.36$:\n\n$$e^{-0.36} \\approx 0.697676$$\n\n$$PDV_{6} = 12000 \\times 0.697676 \\approx 8372.12$$\n\nThat is about $\\$1,651$ below the three-year figure of $\\$10,023.24$. A later payment is worth strictly less today at any positive rate.",
  ]
);

add(
  "math-11-43",
  `The same escrowed $\\$45,000$ is priced two ways, because the accountant reports both annual and continuous discounting. The rate is $r = 0.07$ and the wait is $t = 8$ years.\n\nAnnual compounding first builds $(1.07)^{8} \\approx 1.718186$, then inverts:\n\n$$(1.07)^{-8} \\approx 0.582009$$\n\n$$PDV_{\\mathrm{ann}} = 45000 \\times 0.582009 \\approx 26190.41$$\n\nContinuous compounding uses the single exponent $rt = 0.56$:\n\n$$e^{-0.56} \\approx 0.571209$$\n\n$$PDV_{\\mathrm{cont}} = 45000 \\times 0.571209 \\approx 25704.41$$\n\nAt a zero rate both factors collapse to $1$, so both methods return the full $\\$45,000$.`,
  [
    "**A.** → True\n\nThe annual factor $0.582009$ rounds to $0.5820$, the four-decimal figure in the claim.",
    "**B.** → True\n\nApplying that annual factor to the proceeds already produced $\\$26,190.41$. The claim names that annual-compounding present value.",
    "**C.** → False\n\nContinuous discounting of the same proceeds is $\\$25,704.41$, not $\\$24,900.00$. The claim understates that figure by about $\\$804$.",
    "**D.** → False\n\nAnnual compounding does sit above continuous compounding, so the ranking in the claim is right. The size is not. Subtract the two recovered present values:\n\n$$26190.41 - 25704.41$$\n\n$$= 486.00$$\n\nThe claimed $\\$650.00$ gap overstates that difference:\n\n$$650.00 - 486.00 = 164.00$$\n\nDirection holds; the dollar figure does not.",
    "**E.** → False\n\nBoth clocks agree at a zero rate, yet they agree on $\\$45,000$ rather than on the claimed $\\$40,000$. Agreement is not enough when the common value is wrong.",
  ]
);

add(
  "math-11-44",
  `Working backward from a $\\$150,000$ equipment bill is a continuous present-value problem: deposit today whatever will grow into that bill. The dedicated account grows at $r = 0.045$ continuously for $t = 5$ years, so\n\n$$rt = 0.045 \\times 5 = 0.225$$\n\n$$e^{-0.225} \\approx 0.798516$$\n\n$$A = 150000 \\times 0.798516 \\approx 119777.43$$\n\nThat opening deposit, grown forward by $e^{0.225} \\approx 1.252323$, returns the $\\$150,000$ goal.`,
  [
    "**A.** → False\n\nThe continuous factor is $e^{-0.225} \\approx 0.7985$ to four decimals, not $0.8125$. The claim sits about $0.014$ too high, which would misprice the $\\$150,000$ goal by more than $\\$2,000$.",
    "**B.** → True\n\nThe required deposit came out $\\$119,777.43$. The claim names approximately $\\$119,777.40$, agreeing to within a few cents.",
    "**C.** → False\n\nA trial deposit of $\\$110,000$ grows by the reciprocal factor:\n\n$$110000 \\times e^{0.225} \\approx 110000 \\times 1.252323 \\approx 137755.50$$\n\nThat finishes about $\\$12,245$ short of $\\$150,000$. The smaller opening balance does not reach the imaging-equipment goal.",
    "**D.** → False\n\nAnnual compounding at the same $4.5\\%$ uses $(1.045)^{5} \\approx 1.246182$, so the required deposit rises to\n\n$$A_{\\mathrm{ann}} = \\frac{150000}{1.246182} \\approx 120367.66$$\n\nThat is about $\\$590$ more than the continuous $\\$119,777$, not less. Annual interest is credited only once a year, so the same stated rate grows a deposit more slowly.",
    "**E.** → False\n\nTen years doubles the exponent to $0.45$:\n\n$$150000 \\times e^{-0.45} \\approx 95644.22$$\n\nHalf of the five-year deposit would be about $\\$59,889$. Doubling time squares the discount factor, and $0.7985^{2} \\approx 0.638$, which is far from one half.",
  ]
);

add(
  "math-11-45",
  `The note has to turn $\\$18,500$ into $\\$25,000$ before it matures, so the whole growth the market rate must deliver is the payoff-to-price ratio.\n\n$$\\frac{K}{PDV} = \\frac{25000}{18500} \\approx 1.351351$$\n\nAnnual compounding inverts through logarithms of that ratio and of the one-year factor $1.06$:\n\n$$t = \\frac{\\ln(1.351351)}{\\ln(1.06)}$$\n\n$$\\approx \\frac{0.301105}{0.058269} \\approx 5.1675$$\n\nso about $5.17$ years. Continuous compounding divides the same logarithm by the rate itself:\n\n$$t_{\\mathrm{cont}} = \\frac{0.301105}{0.06} \\approx 5.0184$$\n\nwhich is shorter, because $\\ln(1.06) < 0.06$.`,
  [
    "**A.** → True\n\nThe payoff-to-price ratio is $1.351351$, which rounds to $1.3514$. The note must grow by about $35.1\\%$ in total between purchase and maturity.",
    "**B.** → True\n\nInverting annual compounding produced $t \\approx 5.17$ years. That is the wait at $6\\%$ that turns $\\$18,500$ into $\\$25,000$ with interest credited once a year.",
    "**C.** → False\n\nRaising the price to $\\$20,000$ shrinks the required multiple to $1.25$:\n\n$$t = \\frac{\\ln(1.25)}{\\ln(1.06)} \\approx 3.83$$\n\nyears, about $1.34$ years shorter than $5.17$. Paying more today means less growth is required, so the note can mature sooner, not later.",
    "**D.** → False\n\nThe continuous inversion is already $t \\approx 5.02$ years, not $5.45$. A logarithm near $0.301$ divided by $0.06$ cannot produce $5.45$.",
    "**E.** → False\n\nThe continuous maturity of $5.02$ years is shorter than the annual maturity of $5.17$ years. Continuous compounding grows money faster, so it needs less time to close the same gap. The claim ranks the two clocks backwards.",
  ]
);

add(
  "math-11-46",
  `Forty-five cents on the dollar, locked in for twelve years, is already the whole discount factor. The collector pays $\\$27,000$ for a guaranteed $\\$60,000$ sale, so\n\n$$\\frac{PDV}{K} = \\frac{27000}{60000} = 0.45$$\n\nexactly. Continuous discounting writes that factor as $e^{-rt}$ with $t = 12$, and the implied rate peels out of the exponent:\n\n$$r = -\\frac{\\ln(0.45)}{12}$$\n\n$$\\approx \\frac{0.798508}{12} \\approx 0.066542 = 6.65\\%$$\n\nThe product $rt$ is pinned by the factor $0.45$, so stretching the wait to $24$ years halves the rate to about $3.33\\%$.`,
  [
    "**A.** → True\n\nPrice over payoff is exactly $0.45$, with no remainder. The collector is paying $45$ cents today for each dollar due in twelve years.",
    "**B.** → True\n\nPeeling the rate from $e^{-12r} = 0.45$ produced about $6.65\\%$ per year. That is the continuous rate at which $\\$27,000$ grows into $\\$60,000$ over the twelve-year wait.",
    "**C.** → True\n\nHalving the wait at a fixed rate takes the square root of the original factor:\n\n$$\\sqrt{0.45} \\approx 0.670820$$\n\n$$PDV_{6} = 60000 \\times 0.670820 \\approx 40249.22$$\n\nThe claim names approximately $\\$40,249.20$, agreeing to within a few cents.",
    "**D.** → False\n\nA $\\$30,000$ price raises the factor to $0.5$:\n\n$$r = -\\frac{\\ln(0.5)}{12} \\approx 0.0578 = 5.78\\%$$\n\nwhich is $0.87$ percentage points below the original $6.65\\%$. Paying more today for the same future sale means accepting a lower return, not a higher one.",
    "**E.** → True\n\nDoubling the horizon to $24$ years halves the rate to about $3.33\\%$, because only the product of rate and time appears in the exponent and the discount factor is being held fixed.",
  ]
);

add(
  "math-11-47",
  `Two licensing checks on different dates add only after each has been brought to today. Both are discounted annually at $r = 0.05$. The $\\$40,000$ payment arrives in $t_{1} = 2$ years, so\n\n$$PDV_{1} = \\frac{40000}{(1.05)^{2}} = \\frac{40000}{1.1025} \\approx 36281.18$$\n\nThe $\\$65,000$ payment waits $t_{2} = 5$ years, and $(1.05)^{5} \\approx 1.276282$:\n\n$$PDV_{2} = \\frac{65000}{1.276282} \\approx 50929.20$$\n\nTogether they are worth about $\\$87,210.38$ today. The later check is still the larger present value, by roughly $\\$14,648$.`,
  [
    "**A.** → True\n\nThe two-year payment discounted at $5\\%$ is already $\\$36,281.18$ in the overview. The claim names that present value to the cent.",
    "**B.** → True\n\nThe five-year payment is about $\\$50,929.20$. The claim names approximately $\\$50,930.87$, a difference of under $\\$2$ on a $\\$65,000$ face amount, inside the precision that \"approximately\" carries here.",
    "**C.** → True\n\nAdding the two recovered present values gives about $\\$87,210.38$. The claim names approximately $\\$87,212.05$, again within a couple of dollars of the combined total. Both checks are already in today's dollars, so they add directly.",
    "**D.** → False\n\nThe $\\$65,000$ payment is worth about $\\$50,929$ today, while the $\\$40,000$ payment is worth about $\\$36,281$. The later check is larger in present value by roughly $\\$14,648$, not smaller. Three extra years of $5\\%$ discounting do not erase a $62.5\\%$ larger face amount.",
    "**E.** → False\n\nSwitching both payments to continuous $5\\%$ replaces the discrete factors with $e^{-0.10}$ and $e^{-0.25}$:\n\n$$PDV_{1}^{c} \\approx 36193.50$$\n\n$$PDV_{2}^{c} \\approx 50622.05$$\n\n$$\\text{total } \\approx 86815.55$$\n\nThat combined figure sits about $\\$816$ above $\\$86,000$. Continuous compounding trims the annual total, but not enough to fall under the claimed threshold.",
  ]
);

add(
  "math-11-48",
  `Cash today needs no discount; a check in three years does, and that is the whole comparison. Option A pays $\\$22,000$ immediately, so its present value is $\\$22,000$. Option B pays $K = 25500$ after $t = 3$ years at $r = 0.06$:\n\n$$(1.06)^{3} \\approx 1.191016$$\n\n$$PDV_{B} = \\frac{25500}{1.191016} \\approx 21410.29$$\n\nOption A is therefore worth about $\\$590$ more today at the stated market rate.`,
  [
    "**A.** → True\n\nOption B discounted at $6\\%$ for three years is already $\\$21,410.29$. The claim names approximately $\\$21,410.30$, agreeing to within a cent.",
    "**B.** → True\n\nOption A is worth $\\$22,000$ today and Option B is worth about $\\$21,410$. The immediate payment wins by roughly $\\$590$. The extra $\\$3,500$ of face value on Option B is not enough to cover three years of $6\\%$ discounting.",
    "**C.** → False\n\nLowering the rate to $3\\%$ raises Option B:\n\n$$PDV_{B} = \\frac{25500}{(1.03)^{3}} \\approx 23336.11$$\n\nnot the claimed $\\$22,780$. A lower rate does raise present value, but the named figure is about $\\$556$ too low.",
    "**D.** → False\n\nAt the stated $6\\%$ rate Option B is already worth only $\\$21,410$, which is $\\$590$ below $\\$22,000$. One rate at which the present value fails to clear $\\$22,000$ is enough to kill a claim that it exceeds $\\$22,000$ at every rate.",
    "**E.** → False\n\nAt $5\\%$ the three-year factor is $(1.05)^{3} \\approx 1.157625$:\n\n$$PDV_{B} = \\frac{25500}{1.157625} \\approx 22027.86$$\n\nnot $\\$23,500$. The correct $5\\%$ value lies between the $6\\%$ figure of $\\$21,410$ and the $3\\%$ figure of $\\$23,336$, as a middle rate must.",
  ]
);

add(
  "math-11-49",
  `Cut when the stand's own growth rate equals the $8\\%$ cost of waiting. Present value of a harvest at date $t$ is $f(t) = P(t)e^{-rt}$ with $P(t) = 5000(t+2)^{2}$ and $r = 0.08$. The interior first-order condition is $P'(t) = rP(t)$. Differentiating gives $P'(t) = 10000(t+2)$, so\n\n$$10000(t+2) = 0.08 \\times 5000(t+2)^{2}$$\n\n$$10000 = 400(t+2)$$\n\nbecause $t+2 > 0$. Then $t+2 = 25$ and $t^{\\ast} = 23$ years. The same cancellation produces the general rule $t^{\\ast} = \\frac{2}{r} - 2$. At $t^{\\ast} = 23$ the stand is worth $P(23) = 5000 \\times 25^{2} = 3125000$ dollars, and\n\n$$f(23) = 3125000 \\times e^{-1.84}$$\n\n$$\\approx 3125000 \\times 0.158817 \\approx 496304$$`,
  [
    "**A.** → True\n\nThe first-order condition cancelled down to $t^{\\ast} = 23$ years exactly. That is the harvest date that maximizes $P(t)e^{-0.08t}$ for this quadratic stand.",
    "**B.** → False\n\nStationarity is $P'(t^{\\ast}) = rP(t^{\\ast})$, multiplication by $r$, not division. Dividing by $r = 0.08$ would replace the interest cost with $12.5$ times the stand's value and would push $t+2$ down to $0.16$, a nonsense harvest date. The claim writes the first-order condition upside down.",
    "**C.** → False\n\nThe maximized present value at $t^{\\ast} = 23$ is about $\\$496,304$, not $\\$623,000$. The $\\$3,125,000$ market value at year $23$ still has to be multiplied by $e^{-1.84} \\approx 0.159$.",
    "**D.** → False\n\nFrom $t^{\\ast} = \\frac{2}{r} - 2$, a higher rate shrinks $t^{\\ast}$. At $r = 0.10$:\n\n$$t^{\\ast} = \\frac{2}{0.10} - 2 = 18$$\n\nyears, five years earlier than $23$. Waiting costs more when money earns more elsewhere, so a higher rate pulls the harvest forward.",
    "**E.** → False\n\nTwo years later the stump is worth $P(25) = 5000 \\times 27^{2} = 3645000$, but\n\n$$f(25) = 3645000 \\times e^{-2.00} \\approx 493297$$\n\nwhich is about $\\$3,007$ below the $23$-year present value of $\\$496,304$. Extra growth on the stump does not cover two extra years of $8\\%$ discounting.",
  ]
);

add(
  "math-11-50",
  `A single lump sum today is just the sum of two continuously discounted invoices. The continuous rate is $r = 0.055$. The $\\$18,000$ obligation waits $t_{1} = 4$ years, so the exponent is $0.055 \\times 4 = 0.22$:\n\n$$PDV_{1} = 18000 \\times e^{-0.22}$$\n\n$$\\approx 18000 \\times 0.802519 \\approx 14445.34$$\n\nThe $\\$30,000$ obligation waits $t_{2} = 9$ years, with exponent $0.495$:\n\n$$PDV_{2} = 30000 \\times e^{-0.495}$$\n\n$$\\approx 30000 \\times 0.609571 \\approx 18287.13$$\n\nTheir sum, $\\$32,732.47$, is the settlement the supplier should accept today. At a zero rate both exponents vanish and the lump sum is simply $18000 + 30000 = 48000$.`,
  [
    "**A.** → True\n\nThe four-year obligation discounted continuously at $5.5\\%$ is already $\\$14,445.34$. The claim names that present value to the cent.",
    "**B.** → True\n\nThe nine-year obligation is $\\$18,287.13$. About $61\\%$ of its face amount survives nine years of $5.5\\%$ discounting, matching the claimed figure.",
    "**C.** → True\n\nAdding the two recovered present values gives\n\n$$14445.34 + 18287.13 = 32732.47$$\n\nThat is the lump sum payable today that replaces both dated obligations.",
    "**D.** → False\n\nThe $\\$30,000$ obligation contributes about $\\$18,287$ today, while the $\\$18,000$ obligation contributes about $\\$14,445$. The later invoice is larger in present value by about $\\$3,842$, not smaller. Five extra years of discounting remove only about $24\\%$ of a two-thirds larger face amount.",
    "**E.** → True\n\nAt a zero discount rate both factors are $1$, so the two obligations keep their face values and add to $\\$48,000$. Timing stops mattering when waiting is free.",
  ]
);

add(
  "math-11-51",
  `Two compounding conventions quote the same present value only when their growth factors agree, and that match does not depend on the horizon. The trust payment is $K = 50000$ dollars due in $t = 7$ years, discounted continuously at $r = 0.05$. The continuous present value is\n\n$$PDV = 50000 \\times e^{-0.35}$$\n\n$$\\approx 50000 \\times 0.704688 \\approx 35234.40$$\n\nEquating $K(1+r_{a})^{-t} = Ke^{-rt}$ and cancelling both $K$ and $t$ leaves $1 + r_{a} = e^{r}$:\n\n$$r_{a} = e^{0.05} - 1 \\approx 0.051271 = 5.13\\%$$\n\nThe gap from the $5\\%$ continuous quote is $0.13$ percentage points. Because $t$ dropped out, the same annual rate reproduces continuous discounting at any horizon.`,
  [
    "**A.** → False\n\nSeven years of $5\\%$ continuous discounting produced about $\\$35,234$, not $\\$33,100$. The claim understates the beneficiary's payment by roughly $\\$2,134$.",
    "**B.** → False\n\nThe equivalent annual rate is $5.13\\%$, not $5.00\\%$. Annual compounding has to quote a slightly higher stated rate to keep up with interest that is credited at every instant, because $e^{0.05} > 1.05$.",
    "**C.** → False\n\nThe recovered equivalent annual rate is about $5.13\\%$ per year, $0.74$ percentage points below the claimed $5.87\\%$. Checking against the seven-year present value confirms $5.13\\%$: $(1.051271)^{-7}$ reproduces $\\$35,234$.",
    "**D.** → True\n\nBecause the equivalent rate does not depend on the horizon, the same $5.13\\%$ annual quote prices a three-year $\\$50,000$ payment at\n\n$$50000 \\times e^{-0.15} \\approx 43035.40$$\n\nand $50000 \\times (1.051271)^{-3}$ lands on the same figure. The claim names that common present value.",
    "**E.** → False\n\nThe gap between $5.13\\%$ and $5.00\\%$ is about $0.13$ percentage points, far below the claimed full point. For a small continuous rate the excess of $e^{r}$ over $1+r$ is about $\\frac{r^{2}}{2} = 0.00125$, an eighth of a percentage point, not more than one.",
  ]
);

add(
  "math-11-52",
  `The covenant is a $\\$100,000$ present-value floor, and one receivable already occupies part of it. The known $\\$42,000$ check due in three years, discounted annually at $6\\%$, contributes\n\n$$PV_{1} = \\frac{42000}{(1.06)^{3}} = \\frac{42000}{1.191016} \\approx 35264.01$$\n\nThe second receivable must therefore supply $100000 - 35264.01 = 64735.99$ of present value. Growing that shortfall forward six years at the same $6\\%$ recovers the required face amount:\n\n$$K_{2} = 64735.99 \\times (1.06)^{6}$$\n\n$$\\approx 64735.99 \\times 1.418519 \\approx 91829.24$$`,
  [
    "**A.** → True\n\nThe existing three-year receivable discounted at $6\\%$ is already $\\$35,264.01$. The claim names that contribution to the covenant to the cent.",
    "**B.** → True\n\nThe covenant still needs $100000 - 35264.01 = 64735.99$ of present value from the second receivable. The two receivables add in today's dollars, so the missing piece is ordinary subtraction.",
    "**C.** → True\n\nGrowing that $\\$64,735.99$ shortfall for six years at $6\\%$ produced a required face amount of $\\$91,829.24$. The claim names that future value to the cent.",
    "**D.** → False\n\nA three-year due date would need only\n\n$$K_{2} = 64735.99 \\times (1.06)^{3} \\approx 77101.60$$\n\nof face value, some $\\$14,728$ less than the six-year requirement of $\\$91,829$. A check that arrives sooner is discounted less, so it needs less face value to deliver the same present value.",
    "**E.** → True\n\nHolding the $\\$64,735.99$ shortfall fixed and growing it at $8\\%$ for six years:\n\n$$K_{2} = 64735.99 \\times (1.08)^{6} \\approx 102727.88$$\n\nA steeper discount rate strips more value out of a future check, so about $\\$10,899$ more face value is needed to still deliver that present-value target.",
  ]
);

add(
  "math-11-53",
  `Indifference means the deferred check, once discounted, equals $\\$35,000$ today, so the future amount is the immediate option grown forward. The opportunity cost is $r = 0.065$ continuous and the wait is $t = 4$ years:\n\n$$rt = 0.26$$\n\n$$e^{-0.26} \\approx 0.771052$$\n\n$$K = \\frac{35000}{0.771052} \\approx 45392.55$$\n\nThe deferred option must therefore carry a premium of about $\\$10,393$ over the cash offer.`,
  [
    "**A.** → False\n\nThe four-year continuous factor is $e^{-0.26} \\approx 0.7711$, not $0.8112$. The claim overstates the factor by about $0.04$.",
    "**B.** → False\n\nThe indifference payment is about $\\$45,393$, not $\\$49,851$. Dividing $\\$35,000$ by $0.771052$ cannot produce a figure near $\\$50,000$.",
    "**C.** → False\n\nThe recovered premium is $45393 - 35000 = 10393$ dollars, which falls about $\\$607$ short of $\\$11,000$. The delayed check must exceed the cash offer, but not by more than $\\$11,000$.",
    "**D.** → False\n\nRaising the opportunity cost to $9\\%$ lifts the exponent to $0.36$:\n\n$$K = \\frac{35000}{e^{-0.36}} \\approx 50166.53$$\n\nsome $\\$4,774$ above the original $\\$45,393$. A firm that discounts more heavily demands a larger future check to stay even with $\\$35,000$ today. The payment does not stay put when the rate changes.",
    "**E.** → True\n\nCutting the wait to two years at the original $6.5\\%$ lowers the exponent to $0.13$:\n\n$$K = \\frac{35000}{e^{-0.13}} \\approx 39858.99$$\n\nsome $\\$5,534$ below the four-year figure of $\\$45,393$. With less time for interest to accumulate, a smaller future check already matches the same $\\$35,000$ today.",
  ]
);

add(
  "math-11-54",
  `Wine appreciates at $5\\%$ while money costs $8\\%$, so the net rate on a delayed sale is already negative. Market value is $P(t) = 40000 e^{0.05t}$ and present value of a sale at date $t$ is\n\n$$f(t) = 40000 e^{0.05t} e^{-0.08t} = 40000 e^{-0.03t}$$\n\nThe exponent is strictly negative, so $f$ falls in $t$ and the maximum on $t \\ge 0$ is the left endpoint $t^{\\ast} = 0$, where $f(0) = 40000$. The interior condition $P'(t) = rP(t)$ becomes $0.05P(t) = 0.08P(t)$, which never holds. After ten years,\n\n$$f(10) = 40000 e^{-0.3} \\approx 40000 \\times 0.740818 \\approx 29632.73$$`,
  [
    "**A.** → True\n\nThe first-order condition $0.05 = 0.08$ has no solution, and $f(t) = 40000 e^{-0.03t}$ is strictly decreasing, so the present-value maximum on $t \\ge 0$ is at $t^{\\ast} = 0$. Both halves of the claim hold: no interior root, and sell immediately.",
    "**B.** → True\n\nSelling today means $t = 0$, so neither the $5\\%$ appreciation nor the $8\\%$ discounting has had time to act. The present value is just $P(0) = 40000$ dollars, the current market value of the batch.",
    "**C.** → True\n\nWaiting ten years discounts the batch to about $\\$29,633$, matching the claimed figure. The $8\\%$ discount rate outruns the $5\\%$ appreciation, leaving a net decay of $3\\%$ per year.",
    "**D.** → False\n\nA rising market value is not a rising present value. Here $f(t)$ falls, and waiting ten years destroys about $\\$10,367$ of present value even though the wine itself is worth more on that later date. The claim also says this would hold at every discount rate, which fails as soon as $r < 0.05$.",
    "**E.** → False\n\nAt a $4\\%$ discount rate the net exponent becomes $+0.01$, so $f(t) = 40000 e^{0.01t}$ is strictly increasing and selling immediately is the worst policy, not the best. There is then no finite maximizing date: waiting always helps.",
  ]
);

add(
  "math-11-55",
  `The measured point is already claimed to be optimal, so the first check is whether $P'(t^{\\ast})$ really equals $rP(t^{\\ast})$. With $P(t^{\\ast}) = 520000$, $P'(t^{\\ast}) = 46800$, and $r = 0.09$,\n\n$$0.09 \\times 520000 = 46800$$\n\nwhich matches the measured growth exactly. The second-order quantity uses the measured curvature $P''(t^{\\ast}) = 3120$:\n\n$$P''(t^{\\ast}) - rP'(t^{\\ast}) = 3120 - 0.09 \\times 46800$$\n\n$$= 3120 - 4212 = -1092$$\n\nA negative value is what a present-value maximum requires. Implicit differentiation of $P'(t^{\\ast}) = rP(t^{\\ast})$ then gives the sensitivity formula $\\frac{dt^{\\ast}}{dr} = \\frac{P(t^{\\ast})}{P''(t^{\\ast}) - rP'(t^{\\ast})}$.`,
  [
    "**A.** → True\n\nThe product $rP(t^{\\ast})$ already matched the measured $P'(t^{\\ast}) = 46800$. The stand is being observed at a first-order harvest point.",
    "**B.** → True\n\nThe second-order expression evaluated to $-1092$ in the supplied dollar units, matching the claimed figure including the sign.",
    "**C.** → True\n\nThe comparative-statics formula divides the stand's value by that second-order denominator:\n\n$$\\frac{dt^{\\ast}}{dr} = \\frac{520000}{-1092}$$\n\n$$\\approx -476.19$$\n\nA one percentage point rise means $\\Delta r = 0.01$, which would move the optimal date by about\n\n$$0.01 \\times (-476.19) \\approx -4.76$$\n\nyears.",
    "**D.** → False\n\nThat derivative is negative, so a rate increase shortens $t^{\\ast}$ rather than lengthening it. Waiting costs more when standing timber could be sold and invested at a higher rate.",
    "**E.** → True\n\nThe second-order quantity is $-1092 < 0$, so the measured point is a present-value maximum rather than a minimum.",
  ]
);

add(
  "math-11-56",
  `For $P(t) = 3000(t+4)^{2}$ the harvest rule $P'(t) = rP(t)$ cancels the positive factor $t+4$ and leaves a one-line calendar. Differentiating gives $P'(t) = 6000(t+4)$ and $P''(t) = 6000$. At $r = 0.09$,\n\n$$6000(t+4) = 0.09 \\times 3000(t+4)^{2}$$\n\n$$t^{\\ast} = \\frac{2}{0.09} - 4 \\approx 18.2222$$\n\nyears. The general relation for this family is $t^{\\ast} = \\frac{2}{r} - 4$. At the optimum, $t^{\\ast}+4 \\approx 22.2222$, so\n\n$$P(t^{\\ast}) \\approx 1481481, \\qquad P'(t^{\\ast}) \\approx 133333$$\n\n$$f(t^{\\ast}) = P(t^{\\ast})e^{-1.64} \\approx 287378$$\n\nThe second-order expression is $6000 - 0.09 \\times 133333 = -6000$, confirming a maximum, and\n\n$$\\frac{dt^{\\ast}}{dr} = \\frac{1481481}{-6000} \\approx -246.91$$`,
  [
    "**A.** → True\n\nThe cancelled first-order condition produced $t^{\\ast} \\approx 18.22$ years. That is the harvest date at $9\\%$ continuous interest for this quadratic orchard.",
    "**B.** → False\n\nThe present value at that date is about $\\$287,378$, not $\\$250,000$. The standing value of about $\\$1,481,481$ still has to be multiplied by $e^{-1.64} \\approx 0.194$.",
    "**C.** → False\n\nThe second-order quantity is $-6000$, not $+6000$. The magnitude in the claim is right and the sign is wrong, and the sign is the whole point: a negative value is what a present-value maximum requires.",
    "**D.** → False\n\nThe sensitivity is about $-246.91$, the same magnitude as the claim with the opposite sign. The denominator is negative because the second-order condition for a maximum demands it, so a higher rate brings the harvest forward.",
    "**E.** → False\n\nAt $4.5\\%$ the formula $t^{\\ast} = \\frac{2}{r} - 4$ gives\n\n$$t^{\\ast} = \\frac{2}{0.045} - 4 \\approx 40.44$$\n\nyears, not $36.44$. Only the $\\frac{2}{r}$ term doubles when the rate is halved; the constant $-4$ does not, so the relationship is not proportional.",
  ]
);

add(
  "math-11-57",
  `Seven months has to be written as a fraction of a year before it can sit in an exponent. The exit payment is $K_{1} = 250000$ dollars at $t_{1} = 2.5$ years, the side payment is $K_{2} = 40000$ at $t_{2} = \\frac{7}{12}$, and both are discounted continuously at $r = 0.11$.\n\nThe exit exponent is $0.11 \\times 2.5 = 0.275$:\n\n$$PV_{1} = 250000 \\times e^{-0.275}$$\n\n$$\\approx 250000 \\times 0.759572 \\approx 189893.03$$\n\nSeven months is $0.583333$ years, so $rt_{2} \\approx 0.064167$:\n\n$$PV_{2} = 40000 \\times e^{-0.064167}$$\n\n$$\\approx 40000 \\times 0.937849 \\approx 37513.95$$\n\nThe combined present value is $\\$227,406.98$. At a zero rate both factors are $1$ and the total is $250000 + 40000 = 290000$.`,
  [
    "**A.** → True\n\nThe $\\$250,000$ exit payment discounted continuously at $11\\%$ for $2.5$ years is already $\\$189,893.03$. About $76\\%$ of the face amount survives that wait.",
    "**B.** → True\n\nThe $\\$40,000$ side payment over seven months is $\\$37,513.95$. The factor stays close to $1$ because the horizon is short.",
    "**C.** → False\n\nAdding the two recovered present values gives $\\$227,406.98$, not $\\$230,000$. The claim overstates the combined value by about $\\$2,593$. Both pieces are already in today's dollars, so they add with no further discounting.",
    "**D.** → False\n\nThe side payment loses $40000 - 37513.95 = 2486.05$, which is $6.22\\%$ of its $\\$40,000$ face amount. Seven months is too short a wait for $11\\%$ discounting to remove a tenth of the check.",
    "**E.** → True\n\nAt a zero rate each payment keeps its face value, so the combined present value is $\\$290,000$. With no compensation required for waiting, the two dates stop mattering.",
  ]
);

add(
  "math-11-58",
  `The investors paid $62.5$ cents on the dollar, and that single fraction pins the whole continuous rate. Price over payout is\n\n$$\\frac{2000000}{3200000} = 0.625 = \\frac{5}{8}$$\n\nexactly. Continuous discounting writes $e^{-rt} = 0.625$ with $t = 4.5$, so\n\n$$r = -\\frac{\\ln(0.625)}{4.5}$$\n\n$$\\approx \\frac{0.470004}{4.5} \\approx 0.104445 = 10.44\\%$$\n\nThe product $rt$ is fixed by the price and the payout, so stretching the same factor over nine years halves the original rate to about $5.22\\%$.`,
  [
    "**A.** → True\n\nThe ratio of the $\\$2,000,000$ paid today to the $\\$3,200,000$ milestone is exactly $0.625$. The investors are paying $62.5$ cents today for each dollar promised in $4.5$ years, with no rounding.",
    "**B.** → True\n\nInverting $e^{-4.5r} = 0.625$ produced about $10.44\\%$ per year. That is the continuous rate at which $\\$2,000,000$ grows into $\\$3,200,000$ over the stated wait.",
    "**C.** → True\n\nA $\\$3,600,000$ payout against the same $\\$2,000,000$ price shrinks the factor to $\\frac{5}{9}$:\n\n$$r = -\\frac{\\ln(5/9)}{4.5} \\approx 0.1306 = 13.06\\%$$\n\nsome $2.62$ percentage points above the original $10.44\\%$. Paying the same price for a bigger promised check means a stronger implied rate.",
    "**D.** → False\n\nShortening the wait to three years packs the same total discount into fewer years:\n\n$$r = -\\frac{\\ln(0.625)}{3} \\approx 0.1567 = 15.67\\%$$\n\nwhich is higher than $10.44\\%$, not lower. Only the product $rt$ is pinned by price and payout.",
    "**E.** → True\n\nDoubling the horizon to nine years halves the rate to about $5.22\\%$, because the exponent contains only the product of rate and time and the discount factor is being held fixed.",
  ]
);

add(
  "math-11-59",
  `The scale $A$ of a stand in this family never affects the cutting date, because it cancels in the first-order condition. For $P(t) = A(t+k)^{2}$ one has $P'(t) = 2A(t+k)$, so $P'(t) = rP(t)$ becomes $2 = r(t+k)$ and\n\n$$t^{\\ast} = \\frac{2}{r} - k$$\n\nFor the particular stand, $A = 1200$, $k = 5$, and $r = 0.075$, which gives $t^{\\ast} = \\frac{2}{0.075} - 5 \\approx 21.6667$ years. The timber value there is $P(t^{\\ast}) = 1200 \\times (26.6667)^{2} \\approx 853333$, and the present value is\n\n$$f(t^{\\ast}) \\approx 853333 \\times e^{-1.625} \\approx 168031$$`,
  [
    "**A.** → True\n\nCancelling the positive factor $A(t+k)$ from the first-order condition left $t^{\\ast} = \\frac{2}{r} - k$. The coefficient $A$ drops out entirely, so the scale of the stand does not affect the timing.",
    "**B.** → True\n\nSubstituting $r = 0.075$ and $k = 5$ produced $t^{\\ast} \\approx 21.67$ years. The value $A = 1200$ plays no part, because it cancelled from the condition.",
    "**C.** → False\n\nThe present value at the optimum is about $\\$168,031$, not $\\$195,500$. The $\\$853,333$ market value at year $21.67$ still has to be multiplied by $e^{-1.625} \\approx 0.197$.",
    "**D.** → True\n\nThe formula $t^{\\ast} = \\frac{2}{r} - k$ subtracts $k$ one for one, so raising $k$ from $5$ to $8$ cuts the harvest date by exactly three years, from $21.67$ down to $18.67$. A larger $k$ means the stand is already further along its growth curve.",
    "**E.** → False\n\nAt $15\\%$ the optimum is\n\n$$t^{\\ast} = \\frac{2}{0.15} - 5 \\approx 8.33$$\n\nyears, which sits $2.5$ years below half of $21.67$. The $\\frac{2}{r}$ term does halve, but subtracting the same $k = 5$ from a much smaller number cuts proportionally deeper.",
  ]
);

add(
  "math-11-60",
  `The second payment date is exactly double the first, so its continuous discount factor is the square of the first factor. The rate is $r = 0.08$. Five years produce the exponent $0.40$:\n\n$$e^{-0.40} \\approx 0.670320$$\n\nTen years produce $0.80$, and squaring confirms the identity:\n\n$$(0.670320)^{2} \\approx 0.449329 = e^{-0.80}$$\n\nApply the two factors to the face amounts:\n\n$$PV_{1} = 30000 \\times 0.670320 \\approx 20109.60$$\n\n$$PV_{2} = 55000 \\times 0.449329 \\approx 24713.09$$\n\nThe investor should pay their sum, about $\\$44,822.69$, today for both franchise checks.`,
  [
    "**A.** → True\n\nThe five-year continuous factor is $e^{-0.40} \\approx 0.670320$, which rounds to $0.6703$. About $67$ cents of each promised dollar survives five years of $8\\%$ continuous discounting.",
    "**B.** → True\n\nThe ten-year factor is $e^{-0.80} \\approx 0.449329$, which rounds to $0.4493$. It is also the square of the five-year factor, as it must be when the horizon doubles and the rate is unchanged.",
    "**C.** → False\n\nThe $\\$30,000$ payment discounts to about $\\$20,110$, not $\\$21,500$. Multiplying $30000$ by $0.6703$ cannot reach $\\$21,500$.",
    "**D.** → False\n\nThe $\\$55,000$ payment discounts to about $\\$24,713$, not $\\$26,000$. Barely $45\\%$ of the face amount survives a decade at $8\\%$, so the claim overstates the ten-year present value by about $\\$1,287$.",
    "**E.** → False\n\nAdding the two recovered present values gives about $\\$44,823$, not $\\$47,500$. The claim overstates what the investor should pay today by about $\\$2,677$. Both checks are already in today's dollars, so the portfolio price is their sum.",
  ]
);

add(
  "math-11-61",
  `Year $2$ is one growth step past this year's revenue, and the five-year total is a closed geometric sum rather than five separate multiplications. Revenue starts at $a = 50$ million dollars and grows by $10\\%$ a year, so $k = 1.10$ and there are $n = 5$ years.\n\nThe second year is $50 \\times 1.10 = 55.00$. Year $5$ sits four steps past year $1$:\n\n$$(1.10)^{4} = 1.4641$$\n\n$$a_{5} = 50 \\times 1.4641 = 73.205$$\n\nabout $73.21$ million. The five-year total uses $\\frac{k^{n}-1}{k-1}$:\n\n$$(1.10)^{5} = 1.61051$$\n\n$$s_{5} = 50 \\times \\frac{0.61051}{0.10} = 50 \\times 6.1051 = 305.255$$\n\nabout $305.26$ million. A flat $50$ million a year for five years would total $250$, so growth adds about $55.26$ million.`,
  [
    "**A.** → True\n\nYear $2$ revenue is this year's $50$ million multiplied once by $1.10$, which is $55.00$ million dollars. One growth step is all that separates the second year from the first.",
    "**B.** → True\n\nYear $5$ uses four growth steps, not five, and $50 \\times (1.10)^{4} = 73.205$ million dollars. That rounds to $73.21$ million, the figure in the claim.",
    "**C.** → True\n\nThe five-year geometric total came to $305.255$ million dollars, which rounds to $305.26$ million. That is the sum of the growing path with first term $50$ and quotient $1.10$ over five years.",
    "**D.** → False\n\nA flat $50$ million a year for five years does total $250$ million, but that sits only $55.26$ million below the growth total of $305.26$, not $60.00$ million below. The claimed gap overstates the extra revenue from growth by about $4.74$ million.",
    "**E.** → False\n\nThe recovered five-year total is about $305.26$ million dollars, not $328.86$. The claim overstates the geometric sum by $23.60$ million, far beyond any rounding difference on $50 \\times 6.1051$.",
  ]
);

add(
  "math-11-62",
  `Halving every month is a quotient of $0.5$, and $|0.5| < 1$ is already enough to know the profit stream has a finite total. This month's profit is $a = 2000$ dollars. The infinite geometric sum is then\n\n$$s_{\\infty} = \\frac{2000}{1-0.5} = \\frac{2000}{0.5} = 4000$$\n\nThe first four months are $2000$, $1000$, $500$, and $250$, which add to $3750$. Every remaining month is still a positive profit, so the four-month partial sum sits $250$ below the infinite total rather than above it.`,
  [
    "**A.** → True\n\nThe monthly quotient is $k = 0.5$, and $0.5 < 1$, so the infinite geometric series of profits converges. The terms fade from $\\$2,000$ toward zero fast enough that the running total levels off at a finite number.",
    "**B.** → True\n\nThe convergent total is $\\frac{2000}{0.5} = 4000$ dollars. All future monthly profits therefore accumulate toward $\\$4,000.00$, the amount in the claim.",
    "**C.** → True\n\nThe first four months add $2000 + 1000 + 500 + 250 = 3750$ dollars. The same figure comes from the four-term formula $2000 \\times \\frac{1-(0.5)^{4}}{0.5}$.",
    "**D.** → False\n\nThe four-month partial sum is $\\$3,750$ and the infinite total is $\\$4,000$, so the partial sum sits $\\$250$ below the limit, not above it. Every later month still adds a positive profit.",
    "**E.** → False\n\nA quotient of $1.5$ fails $|k| < 1$, so the series diverges and has no finite sum at all. Forcing $\\frac{2000}{1-1.5}$ produces $-4000$, but a stream of growing positive profits cannot total a negative amount. The formula is being used outside the range where it means anything.",
  ]
);

add(
  "math-11-63",
  `Each year the investor deposits only $90\\%$ of the year before, so $10\\%$ of the previous deposit is the amount that never arrives, and that leakage is the denominator of the infinite total. The opening deposit is $a = 800$ dollars and $k = 0.90$. Because $|0.90| < 1$ the series converges:\n\n$$s_{\\infty} = \\frac{800}{1-0.90} = \\frac{800}{0.10} = 8000$$\n\nThe first ten deposits are a finite geometric piece of that same stream:\n\n$$(0.90)^{10} \\approx 0.348678$$\n\n$$s_{10} = 800 \\times \\frac{1-0.348678}{0.10} \\approx 5210.57$$\n\nThose ten deposits are $\\frac{5210.57}{8000} \\approx 0.6513$, about $65\\%$ of the infinite total.`,
  [
    "**A.** → True\n\nThe deposit quotient is $k = 0.90$, and $0.90 < 1$, so the infinite series converges. Deposits fade from $\\$800$ toward zero, and the cumulative amount deposited approaches a finite ceiling.",
    "**B.** → True\n\nThe convergent total is $\\frac{800}{0.10} = 8000$ dollars. That is the long-run sum of every deposit in the plan.",
    "**C.** → True\n\nThe first ten deposits sum to about $\\$5,210.57$ by the finite geometric formula. That is the ten-year partial total the claim names.",
    "**D.** → True\n\nThose ten deposits are $\\frac{5210.57}{8000} \\approx 65.13\\%$ of the infinite $\\$8,000$ total, which is about $65\\%$ as the claim describes. Most of the eventual sum arrives early because later deposits keep shrinking.",
    "**E.** → True\n\nA quotient of $1.10$ has absolute value greater than $1$, so the terms grow and the series has no finite sum. Divergence is exactly what $|k| \\ge 1$ predicts for an infinite geometric series of deposits.",
  ]
);

add(
  "math-11-64",
  `Constant extraction is ordinary division: the reserve lasts as many years as $18000000$ contains copies of the annual tonnage. At $300000$ tons a year that life is $60$ years; at $500000$ tons a year it is $36$ years. Those schedules are the $k = 1$ case of a geometric series, where $n$ identical copies of $a$ total $a \\times n$, and the usual ratio formula is unavailable because its denominator $k-1$ is zero.\n\nThe growing scenario is the genuine geometric case $a = 300000$, $k = 1.05$, $n = 10$:\n\n$$(1.05)^{10} \\approx 1.628895$$\n\n$$s_{10} = 300000 \\times \\frac{0.628895}{0.05} \\approx 3773368$$\n\nTen years of constant $300000$-ton extraction would remove $3000000$ tons, so $5\\%$ growth adds about $773368$ tons over that decade.`,
  [
    "**A.** → True\n\nDividing the $18000000$ ton reserve by $300000$ tons a year gives exactly $60$ years. Multiplying back, $300000 \\times 60 = 18000000$, confirms that the reserve is exhausted in that many equal annual steps.",
    "**B.** → True\n\nThe same reserve at $500000$ tons a year lasts $\\frac{18000000}{500000} = 36$ years. A faster constant rate shortens the life of a fixed stock.",
    "**C.** → True\n\nSetting the geometric quotient to $1$ makes every year's extraction equal the first, so $n$ years total $a \\times n$. The general finite-sum formula cannot be used here, because $k-1 = 0$. Constant-rate extraction is that degenerate case.",
    "**D.** → False\n\nTen years of $5\\%$ growth remove about $3,773,368$ tons, not $3,900,000$. The closed sum is $300000 \\times 12.5779$, which cannot round up to $3.9$ million.",
    "**E.** → False\n\nGrowth extracts about $773,368$ tons more than the constant $3,000,000$-ton decade, which is short of the claimed million-ton margin by more than $226,000$ tons. The extra tonnage from $5\\%$ annual growth does not clear $1,000,000$.",
  ]
);

add(
  "math-11-65",
  `Whatever the infinite declining path can never pull out of the ground is stranded. This year's output is $a = 180$ million tons and a $3\\%$ annual fall leaves $k = 0.97$. Year $2$ is then $180 \\times 0.97 = 174.6$ million tons. Because $|0.97| < 1$ the infinite extraction total converges:\n\n$$s_{\\infty} = \\frac{180}{1-0.97} = \\frac{180}{0.03} = 6000$$\n\nmillion tons. Against a $9000$ million ton reserve that leaves $3000$ million tons, or $3$ billion tons, permanently in the ground. A steeper $5\\%$ decline, $k = 0.95$, extracts only $3600$ million tons forever and strands $5400$.`,
  [
    "**A.** → True\n\nSecond-year output is this year's $180$ million tons multiplied once by $0.97$, which is $174.6$ million tons. One decline step is all that separates year $2$ from year $1$.",
    "**B.** → True\n\nThe infinite $3\\%$ path totals $\\frac{180}{0.03} = 6000$ million tons. That is the convergent extraction ceiling under a $3\\%$ annual decline from the current $180$ million ton output.",
    "**C.** → True\n\nCumulative extraction approaches $6000$ million tons but never reaches the $9000$ million ton reserve, so $3000$ million tons, which is $3$ billion tons, remain in the ground forever. Both halves of the claim hold.",
    "**D.** → False\n\nA $5\\%$ decline extracts only $3600$ million tons forever and therefore strands $5400$ million tons, which is $2400$ million tons more stranded coal than the $3\\%$ path, not less. A steeper decline shrinks output faster, so less coal is ever pulled out.",
    "**E.** → False\n\nTwenty years of the $3\\%$ path extract\n\n$$s_{20} = 180 \\times \\frac{1-(0.97)^{20}}{0.03} \\approx 2737$$\n\nmillion tons, which is only about $46\\%$ of the $6000$ million ton infinite total. A partial sum of a series of positive terms cannot exceed the infinite sum.",
  ]
);

add(
  "math-11-66",
  `A negative quotient only flips the sign of each term; convergence still looks at the absolute value. The first adjustment is $a = 4000$ dollars and $k = -0.5$, so $|k| = 0.5 < 1$ and the series converges:\n\n$$s_{\\infty} = \\frac{4000}{1-(-0.5)} = \\frac{4000}{1.5} \\approx 2666.67$$\n\nThe first four signed terms are $4000$, $-2000$, $1000$, and $-500$, which add to $2500$. The partial sums swing $4000$, $2000$, $3000$, $2500$, tightening around the $2666.67$ limit.`,
  [
    "**A.** → True\n\nThe test is $|k| < 1$, and $|-0.5| = 0.5$ clears it. Sign reversals make the running total swing, but the swings shrink, so the adjustments settle on a finite net.",
    "**B.** → True\n\nThe convergent net is $\\frac{4000}{1.5} \\approx 2666.67$ dollars. Subtracting a negative quotient in the denominator is what produces $1.5$.",
    "**C.** → False\n\nThe first four adjustments add to $\\$2,500$, not $\\$3,000$. Carrying the sign reversals through the sum gives $4000 - 2000 + 1000 - 500 = 2500$.",
    "**D.** → False\n\nA negative quotient does not force divergence. Here $|k| = 0.5 < 1$, so the series converges to about $\\$2,666.67$. The sign only makes the partial sums oscillate on their way to that limit.",
    "**E.** → True\n\nWith $k = -1$ the terms would be $4000, -4000, 4000, -4000, \\ldots$ and the partial sums would bounce forever between $\\$4,000$ and $\\$0$. That is also the boundary case $|k| = 1$, where the geometric convergence test fails.",
  ]
);

add(
  "math-11-67",
  `Equal contributions are $n$ copies of the same payment, which is multiplication, not a ratio formula. The city pays $a = 12$ million dollars a year for $n = 15$ years with $k = 1$, so\n\n$$s_{15} = 12 \\times 15 = 180$$\n\nmillion dollars. The general finite-sum formula cannot be evaluated here: its denominator $k-1$ is zero. The $4\\%$ growth alternative is the genuine geometric case $k = 1.04$:\n\n$$(1.04)^{15} \\approx 1.800944$$\n\n$$s_{15} = 12 \\times \\frac{0.800944}{0.04} = 12 \\times 20.0236 \\approx 240.28$$\n\nmillion dollars. Growth therefore adds about $60.28$ million over the flat $180$.`,
  [
    "**A.** → True\n\nContributions of $12$ million every year never change size, so the quotient is $k = 1$ and $n$ identical copies of $a$ total $a \\times n$. That is the degenerate geometric case, and the ratio formula is undefined at $k = 1$.",
    "**B.** → True\n\nFifteen equal payments of $12$ million dollars total $180$ million. No compounding is involved, because nothing changes from one year to the next.",
    "**C.** → False\n\nThe $4\\%$ growth path totals about $240.28$ million dollars, not $240.11$. The claim is $0.17$ million short of $12 \\times 20.0236$.",
    "**D.** → False\n\nGrowth adds about $60.28$ million dollars over the flat $180$ million, which is $4.72$ million short of the claimed $65$ million margin. The $4\\%$ path does exceed the no-growth total, but not by more than $65$ million.",
    "**E.** → True\n\nAt $k = 1$ the general formula asks for $\\frac{0}{0}$, which is undefined. Equal payments have to be totalled by the separate rule $s_{n} = a \\times n$ precisely because the ratio formula would divide by zero.",
  ]
);

add(
  "math-11-68",
  `Each payment keeps $88\\%$ of the previous one, so $12\\%$ leaks out every year, and that leakage is the denominator of both the eight-year total and the perpetuity. The first payment is $a = 15000$ dollars and $k = 0.88$. The second payment is then $15000 \\times 0.88 = 13200$.\n\nEight finite payments sum to\n\n$$(0.88)^{8} \\approx 0.359635$$\n\n$$s_{8} = 15000 \\times \\frac{0.640365}{0.12} \\approx 80045.68$$\n\nBecause $|0.88| < 1$ the same stream continued forever would total\n\n$$s_{\\infty} = \\frac{15000}{0.12} = 125000$$\n\nso the eight payments are about $64\\%$ of the perpetuity.`,
  [
    "**A.** → True\n\nThe second payment is the first $\\$15,000$ multiplied once by $0.88$, which is $\\$13,200$. One decay step is all that separates payment $2$ from payment $1$.",
    "**B.** → True\n\nThe eight-payment finite sum came to about $\\$80,045.68$. That is the total under the finite clause with first payment $\\$15,000$ and quotient $0.88$.",
    "**C.** → False\n\nThe perpetual total is $\\frac{15000}{0.12} = 125000$ dollars, not $\\$130,000$. The denominator is $1-0.88 = 0.12$, which cannot produce $\\$130,000$ from a $\\$15,000$ first payment.",
    "**D.** → False\n\nThe eight payments are $\\frac{80045.68}{125000} \\approx 64.04\\%$ of the perpetuity, which sits below $75\\%$, not above it. The finite clause covers just under two thirds of the never-ending total.",
    "**E.** → False\n\nRaising $k$ from $0.88$ to $0.95$ shrinks the denominator $1-k$ and therefore raises the infinite total from $\\$125,000$ to $\\$300,000$:\n\n$$s_{\\infty} = \\frac{15000}{0.05} = 300000$$\n\nA less steep decline keeps every payment closer to the one before it, so the stream pays out more overall, not less.",
  ]
);

add(
  "math-11-69",
  `A finite geometric sum is well defined for any $k \\neq 1$, including growth. Royalties start at $a = 9000$ dollars, grow at $k = 1.08$, and run $n = 12$ years. The twelve-year factor is $(1.08)^{12} \\approx 2.518170$, so\n\n$$s_{12} = 9000 \\times \\frac{1.518170}{0.08}$$\n\n$$= 9000 \\times 18.977125 \\approx 170794.14$$\n\nYear $12$ itself uses eleven growth steps: $(1.08)^{11} \\approx 2.331639$ and $a_{12} \\approx 20984.75$. The infinite-sum formula $\\frac{a}{1-k}$ does not apply, because $1.08 > 1$ and the terms grow. A flat $0\\%$ path would be twelve copies of $9000$, totalling $108000$, which is $62794.14$ less than the growing total.`,
  [
    "**A.** → True\n\nThe finite-sum formula fails only at $k = 1$. Here $k = 1.08 \\neq 1$, so $s_{12}$ is a perfectly definite dollar figure, about $\\$170,794$. The separate requirement $|k| < 1$ belongs to infinite sums and places no restriction on adding twelve terms.",
    "**B.** → False\n\nThe twelve-year total is about $\\$170,794$, not $\\$175,000$. The closed product is $9000 \\times 18.977$, which cannot round to $\\$175,000$.",
    "**C.** → False\n\nThe infinite-sum formula requires $|k| < 1$, and $1.08 > 1$, so the royalties grow and the running total has no finite ceiling. Substituting anyway produces a negative number for a stream of positive royalties, which is meaningless as a valuation.",
    "**D.** → False\n\nThe year-$12$ royalty is about $\\$20,985$, not $\\$20,716$. The exponent on $(1.08)$ is $11$, not $12$, because year $1$ is the starting figure with no growth applied.",
    "**E.** → True\n\nThe growing total of about $\\$170,794$ minus the flat total of $\\$108,000$ is $\\$62,794.14$. The claim names $\\$62,794.15$, which agrees to within a one-cent rounding difference.",
  ]
);

add(
  "math-11-70",
  `The valuation has two stages: six years of $20\\%$ growth, then a new declining perpetuity whose first term is year-$6$ revenue. The growth phase starts at $a = 4$ million dollars with $k = 1.20$ and $n = 6$:\n\n$$(1.20)^{6} = 2.985984$$\n\n$$s_{6} = 4 \\times \\frac{1.985984}{0.20} = 39.71968$$\n\nabout $39.72$ million. Year $6$ itself is five growth steps:\n\n$$a_{6} = 4 \\times (1.20)^{5} = 4 \\times 2.48832 = 9.95328$$\n\nabout $9.95$ million. That amount becomes the first term of a perpetuity with quotient $k_{T} = 0.85$. Because $|0.85| < 1$,\n\n$$T = \\frac{9.95328}{0.15} = 66.3552$$\n\nabout $66.36$ million. Adding the two stages gives about $106.07$ million.`,
  [
    "**A.** → True\n\nThe six-year growth phase totals about $39.72$ million dollars. That is the finite geometric sum with first term $4$ million and quotient $1.20$ over six years.",
    "**B.** → True\n\nYear-$6$ revenue is $4 \\times (1.20)^{5} \\approx 9.95$ million dollars. The exponent is $5$, not $6$, because year $1$ is the starting figure.",
    "**C.** → False\n\nThe finite-sum formula is available whenever $k \\neq 1$, and $1.20 \\neq 1$. It produced a concrete total of about $39.72$ million dollars. The condition $|k| < 1$ belongs to infinite sums and is irrelevant to adding six terms.",
    "**D.** → True\n\nTreating year-$6$ revenue of $9.95328$ million as the first term of a $k = 0.85$ perpetuity produced a terminal value of about $66.36$ million dollars. The decline passes $|k| < 1$, so that infinite total is well defined.",
    "**E.** → False\n\nThe six-year total plus the terminal perpetuity is about $106.07$ million dollars, which clears $100$ million by more than $6$ million. Combining the two stages does not leave the projected value under the claimed threshold.",
  ]
);

add(
  "math-11-71",
  `The six-month total is known and the first month is not, so the finite-sum formula has to be solved for $a$. Restocking grows at $k = 1.15$ for $n = 6$ months and the projected total is $s_{6} = 58000$ dollars:\n\n$$a = 58000 \\times \\frac{0.15}{(1.15)^{6}-1}$$\n\n$$(1.15)^{6} \\approx 2.313061$$\n\n$$a = \\frac{8700}{1.313061} \\approx 6625.74$$\n\nMonth $6$ is five growth steps past that opening cost: $(1.15)^{5} \\approx 2.011357$ and $a_{6} \\approx 13326.73$. A flat split of the same $\\$58,000$ would be $\\frac{58000}{6} \\approx 9666.67$ a month.`,
  [
    "**A.** → True\n\nA $15\\%$ monthly rise multiplies any first-month figure by $1.15$ to produce month $2$. A hypothetical opening cost of $\\$1,000$ would therefore be followed by $\\$1,150$ in month $2$. The growth factor does not care what the first month happens to be.",
    "**B.** → True\n\nInverting the six-month geometric sum produced a first-month cost of about $\\$6,625.74$. That is the opening restocking bill that accumulates to $\\$58,000$ over six months at $15\\%$ monthly growth.",
    "**C.** → True\n\nMonth $6$ is the recovered opening cost times $(1.15)^{5}$, which is about $\\$13,326.73$. Five growth steps separate the last month from the first.",
    "**D.** → False\n\nMonths $4$ through $6$ together use the powers $k^{3}+k^{4}+k^{5} \\approx 5.281239$:\n\n$$a(k^{3}+k^{4}+k^{5}) \\approx 6625.74 \\times 5.281239 \\approx 34992$$\n\nnot $\\$37,930$. The claim overstates the last three months by roughly $\\$2,938$.",
    "**E.** → True\n\nSpreading $\\$58,000$ evenly across six months gives about $\\$9,666.67$ a month, which exceeds the growth schedule's opening month of $\\$6,625.74$ by about $\\$3,041$. Later months run above the average on a rising path, which forces the first month below it.",
  ]
);

add(
  "math-11-72",
  `A $2\\%$ annual cut leaves $98\\%$ of the previous payout, so the $2\\%$ that disappears each year is the denominator of the endowment's infinite total. This year's scholarship bill is $a = 500000$ dollars and $k = 0.98$. Year $2$ is then $490000$. Because $|0.98| < 1$,\n\n$$s_{\\infty} = \\frac{500000}{0.02} = 25000000$$\n\nThe first ten years are a finite piece of that stream:\n\n$$(0.98)^{10} \\approx 0.817073$$\n\n$$s_{10} = 500000 \\times \\frac{0.182927}{0.02} \\approx 4573180$$\n\nThose ten years are about $18.29\\%$ of the $\\$25,000,000$ ceiling.`,
  [
    "**A.** → True\n\nThe second-year payout is this year's $\\$500,000$ multiplied once by $0.98$, which is $\\$490,000$. One $2\\%$ cut is all that separates year $2$ from year $1$.",
    "**B.** → True\n\nThe convergent infinite total is $\\frac{500000}{0.02} = 25000000$ dollars. That is everything the endowment will ever pay out under a $2\\%$ annual decline.",
    "**C.** → False\n\nThe first ten years pay out about $\\$4,573,180$, not $\\$4,800,000$. The finite formula uses $(0.98)^{10} \\approx 0.817$, not a round $20\\%$ decline over the decade.",
    "**D.** → True\n\nThose ten years are $\\frac{4573180}{25000000} \\approx 18.29\\%$ of the infinite total, which is about $18\\%$ as the claim describes. Most of the eventual payout still sits beyond year $10$ because the decline is slow.",
    "**E.** → False\n\nA $5\\%$ decline cuts the infinite total to\n\n$$s_{\\infty} = \\frac{500000}{0.05} = 10000000$$\n\nwhich is $40\\%$ of $\\$25,000,000$ and therefore less than half, not more. Steeper decline enlarges the denominator $1-k$ and shrinks the perpetuity.",
  ]
);

add(
  "math-11-73",
  `The target is a cumulative $\\$3,000,000$, so the question is which $n$ first pushes the geometric total over that line. The budget starts at $a = 200000$ dollars and grows at $k = 1.12$. Year $2$ is $224000$. Nine years give\n\n$$(1.12)^{9} \\approx 2.773079$$\n\n$$s_{9} = 200000 \\times \\frac{1.773079}{0.12} \\approx 2955131$$\n\nwhich is still about $\\$44,869$ short of $\\$3,000,000$. Ten years give\n\n$$(1.12)^{10} \\approx 3.105848$$\n\n$$s_{10} \\approx 3509747$$\n\nwhich clears the target. The smallest such $n$ is therefore $10$.`,
  [
    "**A.** → True\n\nYear $2$ is this year's $\\$200,000$ multiplied once by $1.12$, which is $\\$224,000$. One growth step is all that separates the second budget from the first.",
    "**B.** → True\n\nNine years of $12\\%$ growth total about $\\$2,955,131$, which is still $\\$44,869$ short of $\\$3,000,000$. Cumulative spend has not yet crossed the CFO's target after nine years.",
    "**C.** → False\n\nTen years total about $\\$3,509,747$, not $\\$3,600,000$. Crossing $\\$3,000,000$ does not require the total to jump all the way to $\\$3,600,000$.",
    "**D.** → False\n\nThe crossing happens during year $10$: $s_{9} < 3000000 < s_{10}$. The smallest whole number of years with cumulative spend above $\\$3,000,000$ is $n = 10$, one year later than the claim.",
    "**E.** → False\n\nAt $8\\%$ growth the ten-year total would be\n\n$$s_{10} = 200000 \\times \\frac{(1.08)^{10}-1}{0.08} \\approx 2897312$$\n\nstill about $\\$102,688$ short of $\\$3,000,000$. Slower growth does not get the cumulative spend over the target inside a ten-year window.",
  ]
);

add(
  "math-11-74",
  `The first grant is six years away, but the infinite total of face amounts does not care about that delay: only the opening $\\$50,000$ and the keep-rate $0.96$ enter the perpetuity formula. The second grant is then $\\$48,000$. Because $|0.96| < 1$, the $4\\%$ that disappears each year is the denominator:\n\n$$s_{\\infty} = \\frac{50000}{0.04} = 1250000$$\n\nThe first fifteen grants are a finite piece of that stream:\n\n$$(0.96)^{15} \\approx 0.542086$$\n\n$$s_{15} = 50000 \\times \\frac{0.457914}{0.04} \\approx 572392$$\n\nThose fifteen grants are about $45.79\\%$ of the perpetuity.`,
  [
    "**A.** → True\n\nThe second grant is the first $\\$50,000$ multiplied once by $0.96$, which is $\\$48,000$. That is $\\$2,000$ less than the opening grant.",
    "**B.** → True\n\nThe convergent infinite total is $\\frac{50000}{0.04} = 1250000$ dollars. Every grant the trust will ever pay adds up to that perpetuity.",
    "**C.** → True\n\nThe first fifteen grants sum to about $\\$572,392$ by the finite geometric formula. That is the fifteen-grant partial total the claim names.",
    "**D.** → False\n\nThose fifteen grants are $\\frac{572392}{1250000} \\approx 45.79\\%$ of the infinite total, which sits above $40\\%$, not below it. The first fifteen grants deliver almost half of the perpetual total rather than less than two fifths.",
    "**E.** → True\n\nA $10\\%$ annual cut leaves an infinite total of\n\n$$s_{\\infty} = \\frac{50000}{0.10} = 500000$$\n\nwhich is $\\$125,000$ below half of the original $\\$1,250,000$. Steeper decline raises $1-k$ and therefore cuts the perpetuity by more than half.",
  ]
);

add(
  "math-11-75",
  `Five years of quarterly decline is twenty periods, not five. The first quarter yields $a = 10000$ pounds and each later quarter keeps $k = 0.98$. Quarter $2$ is then $9800$ pounds. The genuine five-year span is\n\n$$(0.98)^{20} \\approx 0.667608$$\n\n$$s_{20} = 10000 \\times \\frac{1-0.667608}{0.02} \\approx 166196.01$$\n\npounds. Quarter $20$ itself uses nineteen decline steps: $(0.98)^{19} \\approx 0.681233$ and $a_{20} \\approx 6812.33$ pounds. If the $2\\%$ quarterly decline ran forever, the infinite total would be $\\frac{10000}{0.02} = 500000$ pounds.`,
  [
    "**A.** → True\n\nThe second quarter is the first $10000$ pounds multiplied once by $0.98$, which is $9800$ pounds. One quarterly decline step is all that separates quarter $2$ from quarter $1$.",
    "**B.** → True\n\nTwenty quarters of $2\\%$ quarterly decline total about $166196$ pounds. That is the genuine five-year harvest at four quarters per year.",
    "**C.** → False\n\nThe arithmetic $s_{5} = 48039.60$ is correct as a five-quarter sum, but five quarters is $1.25$ years, not five years. The real five-year total uses $n = 20$ and is about $166196$ pounds. The number answers the wrong period-count question.",
    "**D.** → True\n\nThe twentieth quarter yields about $6812.33$ pounds, roughly $68\\%$ of the opening quarter. The exponent is $19$ because quarter $1$ is the starting yield with no decline applied.",
    "**E.** → False\n\nThe hypothetical infinite total of $500000$ pounds sits well above the twenty-quarter total of $166196$, not below it. Every quarter past the twentieth still contributes a positive yield, so the endless schedule can only exceed the truncated one.",
  ]
);

add(
  "math-11-76",
  `Two territories share an eight-year window but not an opening royalty or a growth rate, so each is its own geometric sum. Territory A starts at $\\$80,000$ and grows at $k = 1.06$:\n\n$$(1.06)^{8} \\approx 1.593848$$\n\n$$s_{A,8} = 80000 \\times \\frac{0.593848}{0.06} \\approx 791797.43$$\n\nTerritory B starts at $\\$95,000$ and grows at $k = 1.02$:\n\n$$(1.02)^{8} \\approx 1.171659$$\n\n$$s_{B,8} = 95000 \\times \\frac{0.171659}{0.02} \\approx 815382.06$$\n\nB's eight-year total leads by about $\\$23,585$. Year $8$ alone uses seven growth steps:\n\n$$a_{A,8} = 80000 \\times (1.06)^{7} \\approx 120290.42$$\n\n$$a_{B,8} = 95000 \\times (1.02)^{7} \\approx 109125.14$$`,
  [
    "**A.** → True\n\nTerritory A's eight-year geometric total is about $\\$791,797$. That is the finite sum with first royalty $\\$80,000$ and $6\\%$ annual growth over eight years.",
    "**B.** → True\n\nTerritory B's eight-year total is about $\\$815,382$. B opens higher and grows more slowly, and that closed sum is the figure the claim names.",
    "**C.** → False\n\nA's $\\$791,797$ sits below B's $\\$815,382$ by about $\\$23,585$. B's larger opening royalty outweighs A's faster growth across a window this short.",
    "**D.** → True\n\nIn year $8$ alone, A pays about $\\$120,290$ and B pays about $\\$109,125$, so A leads that year by about $\\$11,165$. Seven rounds of $6\\%$ compounding have lifted A's single payment past B's even though A's running total is still behind.",
    "**E.** → False\n\nB's cumulative lead is about $\\$23,585$, which is $\\$6,415$ short of $\\$30,000$. Territory B is ahead on the eight-year total, but not by more than $\\$30,000$.",
  ]
);

add(
  "math-11-77",
  `The constant $5000$ factors out of the sum, so convergence is decided entirely by the $p$-series rule: $\\sum n^{-p}$ converges if and only if $p > 1$. Terms going to zero is necessary for that conclusion and never sufficient.\n\nAt $p = 1.5$ the fourth batch is\n\n$$a_{4} = \\frac{5000}{4^{1.5}} = \\frac{5000}{8} = 625$$\n\ndollars, not $650$. The exponent $1.5 > 1$, so $\\sum \\frac{5000}{n^{1.5}}$ converges to a finite total. At $p = 1$ the model becomes $5000$ times the harmonic series, which diverges. The hundredth term at $p = 1.5$ is $\\frac{5000}{100^{1.5}} = 5$. At $p = 0.5$ the exponent sits below $1$, so the series diverges even though $\\frac{5000}{\\sqrt{n}} \\to 0$.`,
  [
    "**A.** → False\n\nThe fourth batch at $p = 1.5$ is $\\frac{5000}{8} = 625$ dollars, not $\\$650$. A power of $1.5$ on $4$ is $4 \\times \\sqrt{4} = 8$.",
    "**B.** → True\n\nThe exponent $1.5$ is strictly greater than $1$, so the $p$-series of marginal benefits converges. Factoring out $5000$ does not change that conclusion: a constant times a convergent series is still finite.",
    "**C.** → False\n\nAt $p = 1$ the series is a multiple of the harmonic series, which diverges. There is then no total at all to compare against the $p = 1.5$ case. Sitting exactly on the cutoff $p = 1$ is not enough for convergence.",
    "**D.** → False\n\nThe hundredth term really is $\\$5$ at $p = 1.5$, but one small term cannot guarantee convergence. Terms tending to zero is required for a series to converge and is not enough: the harmonic case $p = 1$ has $a_{n} \\to 0$ and still diverges.",
    "**E.** → True\n\nAt $p = 0.5$ the exponent is below $1$, so the series diverges, while $\\frac{5000}{\\sqrt{n}}$ still tends to zero. Both halves of the claim hold at once: vanishing terms and an unbounded total, because shrinking terms alone never decide convergence.",
  ]
);

add(
  "math-11-78",
  `Cumulative profit is one geometric total minus another, because revenue and maintenance grow at different rates. Revenue starts at $\\$150,000$ with $k_{R} = 1.01$; maintenance starts at $\\$120,000$ with $k_{C} = 1.03$. Over twelve years,\n\n$$s_{R,12} = 150000 \\times \\frac{(1.01)^{12}-1}{0.01} \\approx 1902375.45$$\n\n$$s_{C,12} = 120000 \\times \\frac{(1.03)^{12}-1}{0.03} \\approx 1703043.55$$\n\nso twelve-year profit is $\\$199,331.90$. Year $12$ itself uses eleven growth steps: revenue about $\\$167,350.25$ and cost about $\\$166,108.06$, leaving a $\\$1,242.19$ surplus that year.`,
  [
    "**A.** → True\n\nTwelve years of $1\\%$ revenue growth total about $\\$1,902,375$. That is the finite geometric sum with first term $\\$150,000$ and quotient $1.01$.",
    "**B.** → True\n\nTwelve years of $3\\%$ maintenance growth total about $\\$1,703,044$. That is the matching cost sum with first term $\\$120,000$ and quotient $1.03$.",
    "**C.** → True\n\nSubtracting those two twelve-year totals leaves a cumulative profit of $\\$199,331.90$. Revenue and cost are each closed geometric sums, so profit over the horizon is their difference.",
    "**D.** → True\n\nIn year $12$ alone, revenue of about $\\$167,350$ still exceeds maintenance of about $\\$166,108$ by about $\\$1,242$. The faster-growing cost has almost closed a gap that began at $\\$30,000$ in year $1$, but the year is still in the black.",
    "**E.** → True\n\nExtending to twenty years,\n\n$$s_{R,20} \\approx 3302850.60$$\n\n$$s_{C,20} \\approx 3224444.94$$\n\nleaves only $\\$78,406$ of cumulative profit, some $\\$120,926$ below the twelve-year figure of $\\$199,332$. From year $13$ onward each extra year adds more cost than revenue.",
  ]
);

add(
  "math-11-79",
  `The recession path is an infinite declining stream; the recovery path is a seven-year growing burst, and those two totals are not interchangeable. Current cash flow is $a = 2400000$ dollars. Under recession, $k = 0.94$ and $|0.94| < 1$, so\n\n$$s_{\\infty} = \\frac{2400000}{0.06} = 40000000$$\n\nFifteen recession years are a finite piece of that stream:\n\n$$(0.94)^{15} \\approx 0.395292$$\n\n$$s_{15} \\approx 24188328$$\n\nabout $60.47\\%$ of the $\\$40,000,000$ ceiling. The recovery path grows at $k = 1.06$ for $n = 7$:\n\n$$(1.06)^{7} \\approx 1.503630$$\n\n$$s_{7} = 2400000 \\times \\frac{0.503630}{0.06} \\approx 20145210$$`,
  [
    "**A.** → True\n\nThe recession perpetuity is $\\$40,000,000$. A $6\\%$ annual contraction leaves quotient $0.94$, which passes $|k| < 1$.",
    "**B.** → False\n\nFifteen recession years produce about $\\$24,188,328$, not $\\$22,000,000$.",
    "**C.** → False\n\nThose fifteen years are about $60.47\\%$ of the $\\$40,000,000$ infinite total, not $75\\%$. A $6\\%$ annual contraction does not deliver three quarters of the perpetuity inside fifteen years.",
    "**D.** → False\n\nSeven years of recovery total about $\\$20,145,210$, which matches the dollar figure in the claim but sits well below the $\\$40,000,000$ recession perpetuity. The recovery burst does not exceed the infinite recession total.",
    "**E.** → False\n\nYear $7$ of recovery uses six growth steps, because year $1$ is the current $\\$2,400,000$ with no growth applied:\n\n$$a_{7} = 2400000 \\times (1.06)^{6}$$\n\n$$(1.06)^{6} \\approx 1.418519$$\n\n$$a_{7} \\approx 3404446$$\n\nThe claim names $\\$2,900,000$, which understates that single year by about $\\$504,446$.",
  ]
);

add(
  "math-11-80",
  `Three different series types can still be added once each has been reduced to an ordinary finite number. Tranche $1$ pays $\\$25,000$ a year for nine years at $k = 1$, so it totals $25000 \\times 9 = 225000$. Tranche $2$ grows at $k = 1.07$ from $\\$18,000$ over the same nine years:\n\n$$(1.07)^{9} \\approx 1.838459$$\n\n$$s_{2} = 18000 \\times \\frac{0.838459}{0.07} \\approx 215603.80$$\n\nTranche $3$ declines forever at $k = 0.92$ from $\\$30,000$, and $|0.92| < 1$, so\n\n$$s_{3} = \\frac{30000}{0.08} = 375000$$\n\nThe three nominal values add to $\\$815,603.80$. The separate fee stream $f_{n} = \\frac{1000}{n}$ is $1000$ times the harmonic series, and $p = 1$ fails the $p$-series test.`,
  [
    "**A.** → True\n\nNine equal coupons of $\\$25,000$ total $\\$225,000$. That is the $k = 1$ case, where the total is the coupon times the number of payments and the ratio formula would divide by zero.",
    "**B.** → True\n\nTranche $2$'s nine-year growing sum is about $\\$215,604$. That is the finite geometric total with first coupon $\\$18,000$ and $7\\%$ annual growth.",
    "**C.** → True\n\nThe declining royalty converges to $\\frac{30000}{0.08} = 375000$ dollars. An $8\\%$ annual decline leaves quotient $0.92$, which passes $|k| < 1$, so the perpetuity is that finite nominal value.",
    "**D.** → False\n\nA convergent infinite series is an ordinary finite number, so Tranche $3$'s $\\$375,000$ adds like any other dollar amount. The correct combined total is $\\$815,604$, not the $\\$440,604$ obtained by dropping the royalty. Being infinite in horizon is not the same as being infinite in amount.",
    "**E.** → False\n\nThe hundredth fee really is $\\$10$, but that single small term does not make the stream converge. The fees are $1000$ times the harmonic series, and $p = 1$ is not strictly greater than $1$, so the sum grows without bound.",
  ]
);

const files = ["41_50.json", "51_60.json", "61_70.json", "71_80.json"];
let n = 0;
for (const f of files) {
  const pth = path.join("C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch11", f);
  const arr = JSON.parse(fs.readFileSync(pth, "utf8"));
  for (const t of arr) {
    const patch = patches[t.id];
    if (!patch) continue;
    t.solution_overview = patch.solution_overview;
    t.tactical_explanations = patch.tactical_explanations;
    n += 1;
  }
  fs.writeFileSync(pth, JSON.stringify(arr, null, 2) + "\n");
}
console.log("patched", n, "of", Object.keys(patches).length);
