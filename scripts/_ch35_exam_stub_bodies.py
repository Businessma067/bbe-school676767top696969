"""Deep bodies + overviews for Ch3 exam 11.134–143 and Ch5 exam 5.71–80."""

from __future__ import annotations

# case_id -> (overview, [A,B,C,D,E] bodies without header/closer)

CH3_STUBS: dict[str, tuple[str, list[str]]] = {
    "MATH 11.134": (
        r"""A cooperative deposits \$50{,}000 in a one-year certificate quoting a $7.2\%$ nominal rate compounded quarterly.

The shared parameters are

$$j = 0.072,\qquad m = 4,\qquad P = 50{,}000$$

The quarterly periodic rate splits the nominal quote:

$$i_q = \frac{j}{m} = \frac{0.072}{4} = 0.018 = 1.8\%$$

One year of quarterly credits gives the accumulation factor and effective rate

$$(1+i_q)^{4} = (1.018)^{4} \approx 1.07396743$$

$$R = (1.018)^{4} - 1 \approx 0.07396743 = 7.3967\%$$

The maturity value and the EAR–nominal gap are

$$FV = 50{,}000 \times 1.07396743 \approx 53{,}698.37$$

$$R - j \approx 7.3967\% - 7.20\% = 0.1967$$

percentage points.""",
        [
            r"""The quarterly periodic rate divides the nominal annual quote by four compounding dates:

$$i_q = \frac{j}{m} = \frac{0.072}{4}$$

$$i_q = 0.018 = 1.8\%$$

The overview already recovered that same periodic rate. Matching the claim's $1.8\%$,""",
            r"""The effective annual rate compounds the recovered quarterly rate across the year:

$$R = (1+i_q)^{4} - 1 = (1.018)^{4} - 1$$

$$(1.018)^{4} \approx 1.07396743$$

$$R \approx 0.07396743 = 7.3967\%$$

The claim says $7.20\%$. We have $7.3967\% \ne 7.20\%$,""",
            r"""The one-year accumulation factor is four quarterly growth steps:

$$(1+i_q)^{4} = (1.018)^{4}$$

$$(1.018)^{4} \approx 1.07396743 \approx 1.073967$$

The claim rounds to $1.073967$. The computed factor matches that rounding,""",
            r"""Apply the recovered accumulation factor to the \$50{,}000 principal:

$$FV = 50{,}000 \times (1.018)^{4}$$

$$FV \approx 50{,}000 \times 1.07396743 = 53{,}698.37$$

The claim is \$53{,}600.00. The gap is

$$53{,}698.37 - 53{,}600.00 = 98.37$$

so the figures disagree,""",
            r"""The EAR–nominal gap uses the recovered effective rate:

$$R - j \approx 7.3967\% - 7.20\% = 0.1967$$

percentage points. The claim needs a lift below $0.10$ points. We have $0.1967 > 0.10$,""",
        ],
    ),
    "MATH 11.135": (
        r"""A legal reserve starts at \$82{,}000 and grows continuously at force $4.3\%$ for six years.

The continuous compounding model is

$$A = P e^{rt}$$

with

$$P = 82{,}000,\qquad r = 0.043,\qquad t = 6$$

The six-year exponent and growth factor are

$$rt = 0.043 \times 6 = 0.258$$

$$e^{0.258} \approx 1.29433882$$

The terminal balance and dollar growth are

$$A = 82{,}000 \times e^{0.258} \approx 106{,}135.78$$

$$A - P \approx 24{,}135.78$$

Continuous doubling solves $2 = e^{rt}$, so

$$t = \frac{\ln 2}{0.043} \approx 16.12$$

years.""",
        [
            r"""Continuous growth multiplies the force of interest by the holding time:

$$rt = 0.043 \times 6 = 0.258$$

The six-year growth factor is therefore $e^{0.258}$. The overview recovered that same exponent,""",
            r"""Substitute the recovered factor into the continuous future-value formula:

$$A = P e^{rt} = 82{,}000 \times e^{0.258}$$

$$e^{0.258} \approx 1.29433882$$

$$A \approx 106{,}135.78$$

The claim is \$106{,}135.78,""",
            r"""Dollar growth is the terminal balance minus the opening principal. Using the recovered figures,

$$A - P \approx 106{,}135.78 - 82{,}000 = 24{,}135.78$$

That matches the claimed earn of \$24{,}135.78,""",
            r"""Continuous doubling solves $2 = e^{rt}$ for time:

$$t = \frac{\ln 2}{r} = \frac{\ln 2}{0.043}$$

$$\ln 2 \approx 0.693147$$

$$t \approx 16.12$$

The claim says $15.12$ years. We have $16.12 \ne 15.12$,""",
            r"""The stem uses continuous compounding $A = P e^{rt}$. Discrete annual compounding would instead use

$$(1.043)^{6}$$

Those two factors are not the same. The claim treats $(1.043)^{6}$ as the stated continuous model,""",
        ],
    ),
    "MATH 11.136": (
        r"""A patent settlement pays \$12{,}000 after one year, \$18{,}000 after three years, and \$25{,}000 after five years. Each cash flow is discounted at $6\%$ effective annual interest.

The present-value sum is

$$PV = \sum_{t} \frac{C_t}{(1.06)^{t}}$$

Discounting each dated payment separately,

$$PV_1 = \frac{12{,}000}{1.06} = 11{,}320.75$$

$$PV_3 = \frac{18{,}000}{(1.06)^{3}} \approx 15{,}113.15$$

$$PV_5 = \frac{25{,}000}{(1.06)^{5}} \approx 18{,}681.45$$

Adding the three present values,

$$PV \approx 11{,}320.75 + 15{,}113.15 + 18{,}681.45 = 45{,}115.36$$

The undiscounted nominal total is

$$12{,}000 + 18{,}000 + 25{,}000 = 55{,}000$$""",
        [
            r"""The first payment arrives after one year, so its discount exponent is $1$:

$$PV_1 = \frac{12{,}000}{(1.06)^{1}} = \frac{12{,}000}{1.06}$$

$$PV_1 = 11{,}320.75$$

The overview recovered that same present value. Matching the claim,""",
            r"""The \$18{,}000 payment is the second cash flow on the timeline, and it arrives after three years. Its discount exponent is therefore $3$, not $2$:

$$PV_3 = \frac{18{,}000}{(1.06)^{3}}$$

The claim says that payment is discounted for two years. The timeline contradicts that,""",
            r"""The final payment arrives after five years:

$$PV_5 = \frac{25{,}000}{(1.06)^{5}}$$

$$PV_5 \approx 18{,}681.45$$

The claim is \$20{,}681.45. The gap is

$$20{,}681.45 - 18{,}681.45 = 2{,}000$$

so the figures disagree,""",
            r"""Add the three recovered present values:

$$PV = PV_1 + PV_3 + PV_5$$

$$PV \approx 11{,}320.75 + 15{,}113.15 + 18{,}681.45$$

$$PV = 45{,}115.36$$

The claim is \$45{,}115.36,""",
            r"""The undiscounted total simply adds the face amounts:

$$12{,}000 + 18{,}000 + 25{,}000 = 55{,}000$$

The claim equates that nominal sum with the discounted present value \$45{,}115.36. Those are different quantities,""",
        ],
    ),
    "MATH 11.137": (
        r"""A research grant pays six annual installments. The first is \$6{,}000, and each later installment is $5\%$ larger than the one before it.

This is a geometric sequence with

$$a = 6{,}000,\qquad q = 1.05,\qquad n = 6$$

The $k$-th installment is

$$C_k = 6{,}000(1.05)^{k-1}$$

Selected terms:

$$C_3 = 6{,}000(1.05)^{2} = 6{,}615.00$$

$$C_6 = 6{,}000(1.05)^{5} \approx 7{,}657.69$$

The six-payment total uses the finite geometric sum:

$$S_6 = a\frac{q^{6}-1}{q-1} = 6{,}000\frac{(1.05)^{6}-1}{0.05}$$

$$S_6 \approx 40{,}811.48$$""",
        [
            r"""A constant $5\%$ increase multiplies each installment by $1.05$:

$$q = 1 + 0.05 = 1.05$$

The overview recovered that common ratio. Matching the claim,""",
            r"""The third installment uses two growth steps from the first payment:

$$C_3 = 6{,}000(1.05)^{2}$$

$$(1.05)^{2} = 1.1025$$

$$C_3 = 6{,}615.00$$

The claim is \$6{,}615.00,""",
            r"""The sixth installment uses five growth steps:

$$C_6 = 6{,}000(1.05)^{5}$$

$$(1.05)^{5} \approx 1.276282$$

$$C_6 \approx 7{,}657.69$$

The claim is \$7{,}657.69,""",
            r"""The geometric sum formula for six terms is

$$S_6 = 6{,}000\frac{(1.05)^{6}-1}{0.05}$$

$$(1.05)^{6} \approx 1.340096$$

$$S_6 \approx 40{,}811.48$$

The claim is \$39{,}811.48. The gap is \$1{,}000,""",
            r"""An arithmetic sequence adds a fixed dollar difference each term. Here each term is multiplied by the constant ratio $1.05$, so the schedule is geometric, not arithmetic. The claim says arithmetic,""",
        ],
    ),
    "MATH 11.138": (
        r"""A three-year equipment lease requires 36 month-end payments of \$2{,}400 at monthly rate $0.5\%$. No payment is due at signing, so the stream is an ordinary annuity.

Shared parameters:

$$PMT = 2{,}400,\qquad i = 0.005,\qquad n = 36$$

The signing present value is

$$PV = 2{,}400 \cdot \frac{1-(1.005)^{-36}}{0.005} \approx 78{,}890.44$$

The accumulated value immediately after payment 36 is

$$FV = 2{,}400 \cdot \frac{(1.005)^{36}-1}{0.005} \approx 94{,}406.65$$

An annuity-due present value would shift every payment one month earlier:

$$PV_{\mathrm{due}} = PV(1.005) \approx 79{,}284.89$$""",
        [
            r"""An ordinary annuity discounts every month-end payment back to signing. The present-value formula is

$$PV = PMT \cdot \frac{1-(1+i)^{-n}}{i}$$

$$PV = 2{,}400 \cdot \frac{1-(1.005)^{-36}}{0.005}$$

$$PV \approx 78{,}890.44$$

The claim is \$78{,}890.44,""",
            r"""Immediately after the last payment, the same stream has future value

$$FV = PMT \cdot \frac{(1+i)^{n}-1}{i}$$

$$FV = 2{,}400 \cdot \frac{(1.005)^{36}-1}{0.005}$$

$$FV \approx 94{,}406.65$$

The claim is \$94{,}406.65,""",
            r"""The first payment occurs at the end of month 1, so it is discounted for one month under the ordinary-annuity timing. Discounting for zero months would describe a payment due at signing. The claim says zero months,""",
            r"""An annuity due advances every payment by one month, which multiplies the ordinary present value by $(1+i)$:

$$PV_{\mathrm{due}} = 78{,}890.44 \times 1.005 \approx 79{,}284.89$$

The claim is \$79{,}000.00. Those figures disagree,""",
            r"""The contract runs for three years of monthly payments:

$$n = 3 \times 12 = 36$$

The claim says there are 35 month-end payments. The schedule length is $36$,""",
        ],
    ),
    "MATH 11.139": (
        r"""A clinic borrows \$320{,}000 and repays it with 240 equal month-end payments at monthly rate $0.45\%$.

Shared parameters:

$$P = 320{,}000,\qquad i = 0.0045,\qquad n = 240$$

The level payment is

$$PMT = P \cdot \frac{i}{1-(1+i)^{-n}} = 320{,}000 \cdot \frac{0.0045}{1-(1.0045)^{-240}}$$

$$PMT \approx 2{,}183.21$$

First-month interest and principal reduction:

$$I_1 = 320{,}000 \times 0.0045 = 1{,}440.00$$

$$\mathrm{prin}_1 = 2{,}183.21 - 1{,}440.00 = 743.21$$

Balance just after payment 60 (180 payments remain):

$$B_{60} = 2{,}183.21 \cdot \frac{1-(1.0045)^{-180}}{0.0045} \approx 268{,}938.30$$

Total scheduled interest:

$$240 \times 2{,}183.21 - 320{,}000 \approx 203{,}969.22$$""",
        [
            r"""The mortgage payment solves $P = PMT \cdot a_{\overline{n}|}$ for the level payment:

$$PMT = 320{,}000 \cdot \frac{0.0045}{1-(1.0045)^{-240}}$$

$$PMT \approx 2{,}183.21$$

The claim is \$2{,}183.21,""",
            r"""Interest in the first month is the opening balance times the monthly rate:

$$I_1 = 320{,}000 \times 0.0045 = 1{,}440.00$$

The claim is \$1{,}430.00. The gap is \$10,""",
            r"""Principal reduction in payment 1 is the payment minus first-month interest:

$$\mathrm{prin}_1 = 2{,}183.21 - 1{,}440.00 = 743.21$$

The claim is \$743.21,""",
            r"""After 60 payments, 180 payments remain. The outstanding balance is the present value of those remaining payments:

$$B_{60} = 2{,}183.21 \cdot \frac{1-(1.0045)^{-180}}{0.0045}$$

$$B_{60} \approx 268{,}938.30$$

The claim is \$286{,}938.30. Those figures disagree,""",
            r"""Total scheduled interest is total payments minus the original principal:

$$240 \times 2{,}183.21 - 320{,}000$$

$$\approx 523{,}969.22 - 320{,}000 = 203{,}969.22$$

The claim is \$203{,}969.22,""",
        ],
    ),
    "MATH 11.140": (
        r"""A recycling project costs \$200{,}000 today and returns \$70{,}000 after year 1, \$85{,}000 after year 3, and \$100{,}000 after year 5. The hurdle rate is $7\%$ effective annual.

Discount each return on its own date:

$$PV_1 = \frac{70{,}000}{1.07} \approx 65{,}420.56$$

$$PV_3 = \frac{85{,}000}{(1.07)^{3}} \approx 69{,}385.32$$

$$PV_5 = \frac{100{,}000}{(1.07)^{5}} \approx 71{,}298.62$$

The three-return present value and NPV are

$$PV_{\mathrm{in}} \approx 65{,}420.56 + 69{,}385.32 + 71{,}298.62 = 206{,}104.50$$

$$NPV = -200{,}000 + 206{,}104.50 = 6{,}104.50$$

The undiscounted net gain is

$$70{,}000 + 85{,}000 + 100{,}000 - 200{,}000 = 55{,}000$$""",
        [
            r"""The year-1 return is discounted one year at $7\%$:

$$PV_1 = \frac{70{,}000}{1.07}$$

$$PV_1 \approx 65{,}420.56$$

The claim is \$65{,}420.56,""",
            r"""Add the three recovered present values of the returns:

$$PV_{\mathrm{in}} = PV_1 + PV_3 + PV_5$$

$$PV_{\mathrm{in}} \approx 65{,}420.56 + 69{,}385.32 + 71{,}298.62$$

$$PV_{\mathrm{in}} = 206{,}104.50$$

The claim is \$205{,}104.50. The gap is \$1{,}000,""",
            r"""Net present value subtracts the initial outlay from the discounted returns:

$$NPV = -200{,}000 + 206{,}104.50 = 6{,}104.50$$

The claim says $NPV = -\$6{,}104.50$. The computed NPV is positive $6{,}104.50$, not negative,""",
            r"""The NPV rule accepts a project when $NPV > 0$. The overview recovered

$$NPV = 6{,}104.50 > 0$$

so the rule supports acceptance. Matching the claim,""",
            r"""Without discounting, the net cash gain is

$$70{,}000 + 85{,}000 + 100{,}000 - 200{,}000 = 55{,}000$$

The claim says \$65{,}000. Those figures disagree,""",
        ],
    ),
    "MATH 11.141": (
        r"""An $8.5\%$ effective annual rate is to be restated as a monthly-convertible nominal quote.

Equivalence requires twelve monthly periods to reproduce the same annual growth factor:

$$(1+i_m)^{12} = 1.085$$

$$i_m = (1.085)^{1/12} - 1$$

$$i_m \approx 0.00682149 = 0.68215\%$$

The nominal monthly-convertible quote is

$$j_{12} = 12 \times i_m \approx 0.081858 = 8.1858\%$$

Note that $8.5\%/12 = 0.70833\%$ is larger than the true monthly equivalent rate, and $j_{12} < 8.5\%$.
""",
        [
            r"""Solve the monthly equivalence equation for the periodic rate:

$$(1+i_m)^{12} = 1.085$$

$$i_m = (1.085)^{1/12} - 1$$

$$i_m \approx 0.00682149 \approx 0.68215\%$$

The claim is about $0.68215\%$,""",
            r"""The nominal monthly-convertible quote multiplies the monthly rate by twelve:

$$j_{12} = 12 \times i_m \approx 12 \times 0.00682149$$

$$j_{12} \approx 0.081858 = 8.1858\%$$

The claim is $8.1858\%$,""",
            r"""Dividing the effective annual rate by twelve gives

$$\frac{0.085}{12} \approx 0.0070833 = 0.70833\%$$

The true monthly equivalent from the twelfth-root calculation is about $0.68215\%$. Those are not the same,""",
            r"""By construction, twelve months at the recovered monthly rate reproduce the effective annual factor:

$$(1+i_m)^{12} = 1.085$$

The claim names that same factor $1.085$,""",
            r"""The recovered nominal quote is about $8.1858\%$, which sits below the $8.5\%$ effective annual rate. Nominal convertible rates that match a given effective rate are strictly smaller when compounding is more frequent than annual. The claim says the nominal quote must exceed $8.5\%$,""",
        ],
    ),
    "MATH 11.142": (
        r"""Equipment with book value \$150{,}000 depreciates continuously at force $6.2\%$ for five years.

The continuous decay model is

$$A = P e^{-rt}$$

with

$$P = 150{,}000,\qquad r = 0.062,\qquad t = 5$$

The five-year exponent and remaining value are

$$-rt = -0.062 \times 5 = -0.31$$

$$A = 150{,}000 \times e^{-0.31} \approx 110{,}017.04$$

The modeled loss and remaining proportion are

$$P - A \approx 39{,}982.96$$

$$\frac{A}{P} = e^{-0.31} \approx 0.7334 = 73.34\%$$

Continuous half-life solves $\tfrac{1}{2} = e^{-rt}$:

$$t = \frac{\ln 2}{0.062} \approx 11.18$$

years.""",
        [
            r"""Continuous decay multiplies force by time and attaches a minus sign:

$$-rt = -0.062 \times 5 = -0.31$$

The overview recovered that five-year exponent. Matching the claim,""",
            r"""Substitute into the continuous decay formula:

$$A = 150{,}000 \times e^{-0.31}$$

$$e^{-0.31} \approx 0.733447$$

$$A \approx 110{,}017.04$$

The claim is \$110{,}017.04,""",
            r"""The modeled loss is opening book value minus the recovered terminal value:

$$P - A \approx 150{,}000 - 110{,}017.04 = 39{,}982.96$$

The claim is \$40{,}982.96. The gap is \$1{,}000,""",
            r"""The remaining proportion is the decay factor itself:

$$\frac{A}{P} = e^{-0.31} \approx 0.7334 = 73.34\%$$

The claim is about $80.01\%$. Those percentages disagree,""",
            r"""Continuous half-life solves $\frac{1}{2} = e^{-rt}$:

$$t = \frac{\ln 2}{0.062} \approx \frac{0.693147}{0.062} \approx 11.18$$

The claim is $10.18$ years. We have $11.18 \ne 10.18$,""",
        ],
    ),
    "MATH 11.143": (
        r"""A rights package pays \$10{,}000 immediately, \$20{,}000 after two years, and \$30{,}000 after six years. The discount rate is $5.5\%$ effective annual.

Present values of the three dated payments:

$$PV_0 = 10{,}000$$

$$PV_2 = \frac{20{,}000}{(1.055)^{2}} \approx 17{,}969.05$$

$$PV_6 = \frac{30{,}000}{(1.055)^{6}} \approx 21{,}757.37$$

The package total is

$$PV = 10{,}000 + 17{,}969.05 + 21{,}757.37 = 49{,}726.42$$

Discounting every payment for six years would understate the earlier cash flows.""",
        [
            r"""A payment due immediately has discount exponent zero:

$$PV_0 = \frac{10{,}000}{(1.055)^{0}} = 10{,}000$$

The overview recovered that same present value. Matching the claim,""",
            r"""The year-2 payment is discounted for two years:

$$PV_2 = \frac{20{,}000}{(1.055)^{2}}$$

$$(1.055)^{2} = 1.113025$$

$$PV_2 \approx 17{,}969.05$$

The claim is \$17{,}969.05,""",
            r"""The year-6 payment is discounted for six years:

$$PV_6 = \frac{30{,}000}{(1.055)^{6}}$$

$$PV_6 \approx 21{,}757.37$$

The claim is \$21{,}500.00. The gap is about \$257.37,""",
            r"""Add the three recovered present values:

$$PV = 10{,}000 + 17{,}969.05 + 21{,}757.37$$

$$PV = 49{,}726.42$$

The claim is \$49{,}726.42,""",
            r"""Each cash flow must use its own arrival date as the discount exponent. Applying a common six-year discount to the immediate and two-year payments would understate those present values. The claim says one six-year discount for all three,""",
        ],
    ),
}

CH5_STUBS: dict[str, tuple[str, list[str]]] = {
    "MATH 5.71": (
        r"""At a cinema gala, 180 patrons each bought one ticket. A 3D ticket costs \$16 and a standard ticket costs \$11. The box office recorded \$2{,}430.

Let $x$ = number of 3D tickets and $y$ = number of standard tickets.

$$x + y = 180 \tag{1}$$

$$16x + 11y = 2430 \tag{2}$$

Multiply (1) by $11$ and subtract from (2):

$$5x = 450$$

$$x = 90,\qquad y = 90$$

3D revenue is $16 \times 90 = 1{,}440$, and standard revenue is $11 \times 90 = 990$.""",
        [
            r"""The patron total translates directly into a count equation. With $x$ for 3D tickets and $y$ for standard tickets,

$$x + y = 180$$

The overview already recorded that as equation (1). Matching the claim,""",
            r"""Revenue at the two fixed prices translates into

$$16x + 11y = 2430$$

The overview already recorded that as equation (2). Matching the claim,""",
            r"""The overview recovered $x = 90$ 3D tickets. The claim says $99$. Comparing,

$$90 \ne 99$$

so the ticket count does not match,""",
            r"""The overview recovered $x = 90$ and $y = 90$. Their difference is

$$x - y = 90 - 90 = 0$$

The claim says the counts differ by $10$. We have $0 \ne 10$,""",
            r"""3D revenue uses the recovered count:

$$16 \times 90 = 1{,}440$$

The claim is \$1{,}600. The gap is \$160,""",
        ],
    ),
    "MATH 5.72": (
        r"""A juice bar prepares 70 liters from a $35\%$ mango drink and a $10\%$ mango drink so the blend is $25\%$ mango.

Let $x$ = liters of the stronger drink and $y$ = liters of the weaker drink.

$$x + y = 70 \tag{1}$$

$$35x + 10y = 25 \times 70 = 1750 \tag{2}$$

Multiply (1) by $10$ and subtract from (2):

$$25x = 1050$$

$$x = 42,\qquad y = 28$$""",
        [
            r"""Total volume is the sum of the two source amounts:

$$x + y = 70$$

The overview already recorded that volume equation. Matching the claim,""",
            r"""Mango content, written in percentage points, gives

$$35x + 10y = 25 \times 70 = 1750$$

The overview already recorded that mango equation. Matching the claim,""",
            r"""The overview recovered $x = 42$ liters of the stronger drink. The claim is $42$,""",
            r"""The overview recovered $y = 28$ liters of the weaker drink. The claim is $30$. Comparing,

$$28 \ne 30$$

""",
            r"""The recovered source volumes are $x = 42$ and $y = 28$. Equality would require $x = y$. Here

$$42 \ne 28$$

""",
        ],
    ),
    "MATH 5.73": (
        r"""A two-digit room code plus its digit reversal equals $121$, and the tens digit is $3$ greater than the units digit.

Let $x$ = tens digit and $y$ = units digit. The code is $10x+y$ and the reversal is $10y+x$, so

$$(10x+y)+(10y+x) = 121$$

$$11x + 11y = 121$$

$$x + y = 11 \tag{1}$$

$$x - y = 3 \tag{2}$$

Adding (1) and (2):

$$2x = 14$$

$$x = 7,\qquad y = 4$$

The original code is $74$ and the reversal is $47$.""",
        [
            r"""Dividing the sum-of-code-and-reversal identity by $11$ recovers the digit-sum equation:

$$x + y = 11$$

The overview already has that as (1). Matching the claim,""",
            r"""The stem says the tens digit is $3$ greater than the units digit, so

$$x - y = 3$$

The claim writes $x - y = 4$. Those differences disagree,""",
            r"""The overview recovered $x = 7$. The claim says the tens digit is $8$. Comparing,

$$7 \ne 8$$

""",
            r"""With $x = 7$ and $y = 4$, the room code is

$$10x + y = 10 \times 7 + 4 = 74$$

The claim is $74$,""",
            r"""The reversed code is

$$10y + x = 10 \times 4 + 7 = 47$$

The claim is $48$. Comparing,

$$47 \ne 48$$

""",
        ],
    ),
    "MATH 5.74": (
        r"""Two robots produce $108$ housings per hour together, and robot X produces $12$ more per hour than robot Y.

Let $x$ and $y$ be the hourly rates of X and Y.

$$x + y = 108 \tag{1}$$

$$x - y = 12 \tag{2}$$

Add (1) and (2):

$$2x = 120$$

$$x = 60,\qquad y = 48$$

The rate ratio is $60/48 = 1.25$, and robot Y's two-hour output is $2 \times 48 = 96$.""",
        [
            r"""Combined production and the stated gap translate into

$$x + y = 108$$

$$x - y = 12$$

The overview already recorded both equations. Matching the claim,""",
            r"""The overview recovered $x = 60$ housings per hour for robot X. The claim is $60$,""",
            r"""The overview recovered $y = 48$ housings per hour for robot Y. The claim is $48$,""",
            r"""The recovered rate ratio is

$$\frac{x}{y} = \frac{60}{48} = 1.25$$

Twice as fast would mean ratio $2$. We have $1.25 \ne 2$,""",
            r"""Robot Y's two-hour output uses the recovered rate:

$$2 \times 48 = 96$$

The claim is $108$. Comparing,

$$96 \ne 108$$

""",
        ],
    ),
    "MATH 5.75": (
        r"""Two production records are

$$2x + 5y = 40 \tag{1}$$

$$6x + 15y = 120 \tag{2}$$

Multiplying (1) by $3$ yields exactly (2), so the rows are scalar multiples. The determinant is

$$2 \cdot 15 - 5 \cdot 6 = 0$$

and the constants scale by the same factor, so the system is consistent and dependent: one line, infinitely many real solutions.

Solving (1) for $x$ gives the parameter form

$$x = 20 - \tfrac{5}{2}y$$

In particular, $(10,5)$ fails (1) because $2(10)+5(5)=45 \ne 40$, while $(10,4)$ works.""",
        [
            r"""Compare the two coefficient rows. Multiplying the first by $3$ recovers the second:

$$3(2,5,40) = (6,15,120)$$

So the second equation is three times the first. Matching the claim,""",
            r"""Because the rows are proportional with matching constants, the two equations describe the same line. A consistent dependent system has infinitely many real solutions. Matching the claim,""",
            r"""A system with no solution would need proportional left-hand sides but mismatched constants. Here the constants scale by the same factor $3$, so the system is consistent. The claim says no solution,""",
            r"""Test $(10,5)$ in the first equation:

$$2(10) + 5(5) = 20 + 25 = 45$$

The right-hand side is $40$, and $45 \ne 40$, so the point fails both equations,""",
            r"""The parameter form $x = 20 - \tfrac{5}{2}y$ lets $y$ vary. Different admissible $y$ values produce different $x$ values, so not every solution has $x = 20$. The claim requires every solution to have $x = 20$,""",
        ],
    ),
    "MATH 5.76": (
        r"""An airport kiosk issued $160$ transit passes. Express passes cost \$21 and local passes cost \$12, for a register total of \$2{,}460.

Let $x$ = express passes and $y$ = local passes.

$$x + y = 160 \tag{1}$$

$$21x + 12y = 2460 \tag{2}$$

Multiply (1) by $12$ and subtract from (2):

$$9x = 540$$

$$x = 60,\qquad y = 100$$

Express revenue is $21 \times 60 = 1{,}260$, and local revenue is $12 \times 100 = 1{,}200$.""",
        [
            r"""Pass counts and register total translate into

$$x + y = 160$$

$$21x + 12y = 2460$$

The overview already recorded both sales equations. Matching the claim,""",
            r"""The overview recovered $x = 60$ express passes. The claim is $60$,""",
            r"""The overview recovered $y = 100$ local passes. The claim is $100$,""",
            r"""Express-pass revenue uses the recovered count:

$$21 \times 60 = 1{,}260$$

The claim is \$1{,}200. Comparing,

$$1{,}260 \ne 1{,}200$$

""",
            r"""Express revenue is \$1{,}260 and local revenue is \$1{,}200:

$$1{,}260 - 1{,}200 = 60$$

Local revenue is \$60 lower, not higher. The claim says local exceeded express,""",
        ],
    ),
    "MATH 5.77": (
        r"""A $50$ kg tea blend mixes premium tea at \$30/kg with standard tea at \$18/kg so the total cost is \$1{,}140.

Let $x$ = kg of premium and $y$ = kg of standard.

$$x + y = 50 \tag{1}$$

$$30x + 18y = 1140 \tag{2}$$

Multiply (1) by $18$ and subtract from (2):

$$12x = 240$$

$$x = 20,\qquad y = 30$$

Premium cost is $30 \times 20 = 600$.""",
        [
            r"""Total mass is the sum of the two grades:

$$x + y = 50$$

The overview already recorded that mass equation. Matching the claim,""",
            r"""The stem's total cost is \$1{,}140, so the cost equation is

$$30x + 18y = 1140$$

The claim writes right-hand side $1150$. Comparing,

$$1140 \ne 1150$$

""",
            r"""The overview recovered $x = 20$ kg of premium tea. The claim is $20$,""",
            r"""Premium tea's cost contribution is

$$30 \times 20 = 600$$

The claim is \$780. Comparing,

$$600 \ne 780$$

""",
            r"""The overview recovered $y = 30$ kg of standard tea. The claim is $32$. Comparing,

$$30 \ne 32$$

""",
        ],
    ),
    "MATH 5.78": (
        r"""A two-digit badge number satisfies $4x - y = 29$ and $2x + y = 19$, where $x$ is the tens digit and $y$ is the units digit.

Adding the two equations eliminates $y$:

$$6x = 48$$

$$x = 8$$

From $2x + y = 19$,

$$y = 19 - 16 = 3$$

The badge is $83$. The reversal is $38$, and

$$83 - 38 = 45$$

so the reversal is $45$ less than the original, not $38$ greater.""",
        [
            r"""The stem already supplies the two linear conditions

$$4x - y = 29$$

$$2x + y = 19$$

The overview uses exactly those equations. Matching the claim,""",
            r"""The overview recovered $x = 8$. The claim says the tens digit is $8$,""",
            r"""The overview recovered $y = 3$. The claim says the units digit is $4$. Comparing,

$$3 \ne 4$$

""",
            r"""With $x = 8$ and $y = 3$, the badge number is

$$10x + y = 80 + 3 = 83$$

The claim is $83$,""",
            r"""The reversed badge is $38$. Compared with the original $83$,

$$83 - 38 = 45$$

so the reversal is $45$ smaller, not $38$ greater. The claim is false,""",
        ],
    ),
    "MATH 5.79": (
        r"""A boat travels downstream at $25$ knots and upstream at $17$ knots against the same tide.

Let $x$ = still-water speed and $y$ = tide speed.

$$x + y = 25 \tag{1}$$

$$x - y = 17 \tag{2}$$

Add (1) and (2):

$$2x = 42$$

$$x = 21,\qquad y = 4$$

Three upstream hours cover $3(x-y) = 3 \times 17 = 51$ nautical miles.""",
        [
            r"""Downstream and upstream speeds translate into

$$x + y = 25$$

$$x - y = 17$$

The overview already recorded both speed equations. Matching the claim,""",
            r"""The overview recovered still-water speed $x = 21$. The claim is $22$. Comparing,

$$21 \ne 22$$

""",
            r"""The overview recovered tide speed $y = 4$. The claim is $4$,""",
            r"""The overview recovered $y = 4$. The claim says the tide speed is $6$. Comparing,

$$4 \ne 6$$

""",
            r"""Upstream speed is $x - y = 17$, so three hours cover

$$3 \times 17 = 51$$

The claim is $54$. Comparing,

$$51 \ne 54$$

""",
        ],
    ),
    "MATH 5.80": (
        r"""A packing shift uses resources

$$4x + 3y = 123 \tag{1}$$

$$2x + 5y = 121 \tag{2}$$

where $x$ counts cod baskets and $y$ counts salmon baskets.

Eliminate $x$: multiply (2) by $2$ and subtract from (1),

$$(4x + 3y) - (4x + 10y) = 123 - 242$$

$$-7y = -119$$

$$7y = 119$$

$$y = 17,\qquad x = 18$$

Total baskets: $18 + 17 = 35$. Cod's first-resource use: $4 \times 18 = 72$.""",
        [
            r"""The overview's elimination step produces

$$7y = 119$$

before solving for $y$. Matching the claim,""",
            r"""The overview recovered $x = 18$ cod baskets. The claim is $18$,""",
            r"""The overview recovered $y = 17$ salmon baskets. The claim is $17$,""",
            r"""Total baskets are

$$x + y = 18 + 17 = 35$$

The claim is $36$. Comparing,

$$35 \ne 36$$

""",
            r"""Cod baskets use $4$ units each of the first resource:

$$4 \times 18 = 72$$

The claim is $70$. Comparing,

$$72 \ne 70$$

""",
        ],
    ),
}
