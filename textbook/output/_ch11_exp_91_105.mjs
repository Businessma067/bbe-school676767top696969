export const skip = new Set([
  "math-11-92|A",
  "math-11-92|C",
  "math-11-93|A",
  "math-11-93|B",
  "math-11-94|A",
  "math-11-94|D",
  "math-11-95|A",
  "math-11-95|B",
  "math-11-96|A",
  "math-11-98|C",
  "math-11-100|D",
  "math-11-101|A",
  "math-11-101|C",
]);

export const addons = {
  "math-11-91": {
    A: `A level perpetuity is worth a/r one period before the first payment. First payment at t = 5 puts that valuation at t = 4:

$$V_4 = 10{,}000 / 0.06 = \\$166{,}666.67$$`,
    B: `Bring V4 back four years:

$$PV_0 = 166{,}666.67 / (1.06)^{4}$$

$$(1.06)^{4} \\approx 1.262477$$

$$166{,}666.67 / 1.262477 = \\$132{,}015.61$$`,
    C: `An immediate perpetuity (first payment at t = 1) is already worth a/r today:

$$P = 10{,}000 / 0.06 = \\$166{,}666.67$$

\\$166,666.67 > \\$132,015.61, so starting sooner raises today's value, not lowers it.`,
    D: `First payment at t = 9 values the perpetuity at t = 8:

$$PV_0' = 166{,}666.67 / (1.06)^{8}$$

$$(1.06)^{8} \\approx 1.593848$$

$$166{,}666.67 / 1.593848 = \\$104{,}568.80$$

Half of \\$132,015.61 is \\$66,007.81. \\$104,568.80 stays above that half.`,
    E: `The ratio is exactly the 4-year discount factor:

$$PV_0 / V_4 = 1 / (1.06)^{4} \\approx 1 / 1.262477 \\approx 0.7921$$

About 0.7921, not 0.8321.`,
  },
  "math-11-92": {
    B: `Market price \\$65.00 versus fair value \\$60.71:

$$65.00 > 60.71$$

Trading above fair value means the stock is overvalued, not undervalued.`,
    D: `From \\$60.714286 to \\$106.25:

$$(106.25 - 60.714286) / 60.714286 = 0.750000 = 75.00\\%$$

The increase is exactly 75%, so "more than 75%" fails.`,
    E: `Cut the dividend 20%: a' = 4.25 × 0.80 = 3.40.

$$P'' = 3.40 / 0.07 = \\$48.571429 \\approx \\$48.57$$

$$48.571429 / 60.714286 = 0.80$$

A 20% dividend cut produces a 20% value cut, to \\$48.57, not \\$50.57.`,
  },
  "math-11-93": {
    C: `At 6%:

$$P' = 15{,}000 / 0.06 = \\$250{,}000$$

Add the renovation: $250{,}000 + 50{,}000 = \\$300{,}000$.`,
    D: `Drop in total funding:

$$383{,}333.33 - 300{,}000.00 = \\$83{,}333.33$$

$$83{,}333.33 / 383{,}333.33 \\approx 0.2174 = 21.74\\%$$

More than 20%, but not more than 25%.`,
    E: `Half of the original combined total: $383{,}333.33 / 2 = \\$191{,}666.67$.

The 6% perpetuity-only figure is \\$250,000, which exceeds \\$191,666.67, so it is not less than half.`,
  },
  "math-11-94": {
    B: `No-growth perpetuity uses the same a1 with g = 0:

$$P_{\\mathrm{level}} = 24{,}000 / 0.08 = \\$300{,}000$$

\\$300,000 is below the growing value \\$436,363.64, not above it. Growth adds value.`,
    C: `Raise g to 4%:

$$P' = 24{,}000 / (0.08 - 0.04) = 24{,}000 / 0.04 = \\$600{,}000$$

Double the original \\$436,363.64 would be \\$872,727.28. \\$600,000 is a large rise but not more than double.`,
    E: `The formula $P = a_1/(r-g)$ needs r > g. If g = 0.08 or higher, the denominator is zero or negative and the model is undefined.`,
  },
  "math-11-95": {
    C: `Wrong formula uses D0 in place of D1:

$$3.00 / 0.06 = \\$50.00$$

Shortfall versus the correct \\$51.50:

$$51.50 - 50.00 = \\$1.50$$

The shortfall is \\$1.50, not \\$2.50.`,
    D: `At g = 5%:

$$D_1' = 3.00 \\times 1.05 = \\$3.15$$

$$P' = 3.15 / (0.09 - 0.05) = 3.15 / 0.04 = \\$78.75$$

Double \\$51.50 would be \\$103.00. \\$78.75 is still short of that double.`,
    E: `If g = r, then r − g = 0 and P is undefined (the present value blows up), not \\$0.00.`,
  },
  "math-11-96": {
    B: `$$P_2 = 14{,}000 / (0.10 - 0.04) = 14{,}000 / 0.06 = \\$233{,}333.33$$

$$233{,}333.33 - 170{,}000 = \\$63{,}333.33$$

The cushion exceeds \\$60,000.`,
    C: `Margins: Deal 1 has \\$10,000; Deal 2 has \\$63,333.33. Deal 2's cushion is the larger one, not Deal 1's.`,
    D: `Cut Deal 2's growth to 1%:

$$P_2' = 14{,}000 / (0.10 - 0.01) = 14{,}000 / 0.09 = \\$155{,}555.56$$

\\$155,555.56 < \\$170,000, so the deal is then a worse buy than its asking price.`,
    E: `\\$180,000 (Deal 1) versus \\$233,333.33 (Deal 2): Deal 1 is smaller, not larger.`,
  },
  "math-11-97": {
    A: `Continuous present value:

$$S_0 = 250{,}000 \\, e^{-0.055 \\times 12} = 250{,}000 \\, e^{-0.66}$$

$$e^{-0.66} \\approx 0.516855$$

$$250{,}000 \\times 0.516855 = \\$129{,}213.75$$`,
    B: `Annual compounding at the same 5.5%:

$$S_0^{\\mathrm{ann}} = 250{,}000 / (1.055)^{12}$$

$$(1.055)^{12} \\approx 1.901209$$

$$250{,}000 / 1.901209 = \\$131{,}495.10$$

\\$129,213.75 < \\$131,495.10, so the continuous present value is lower, not higher.`,
    C: `$$131{,}495.10 - 129{,}213.75 = \\$2{,}281.35$$

The stated gap of \\$4,280.35 is roughly double the true difference.`,
    D: `Six-year continuous present value:

$$S_0' = 250{,}000 \\, e^{-0.055 \\times 6} = 250{,}000 \\, e^{-0.33}$$

$$e^{-0.33} \\approx 0.718924$$

$$250{,}000 \\times 0.718924 = \\$179{,}731.00$$

Half of \\$129,213.75 is \\$64,606.88. \\$179,731.00 is far above that half.`,
    E: `Annual continuous discount factor:

$$e^{-0.055} \\approx 0.946481 \\approx 0.9465$$

$$1 - 0.9465 = 0.0535 = 5.35\\%$$

About 5.35% of next year's dollar is lost to one year of continuous discounting.`,
  },
  "math-11-98": {
    A: `$$S_{\\mathrm{cont}} = 75{,}000 \\, e^{0.0625 \\times 9} = 75{,}000 \\, e^{0.5625}$$

$$e^{0.5625} \\approx 1.755055$$

$$75{,}000 \\times 1.755055 = \\$131{,}629.13$$`,
    B: `Annuity of 8,333.33 per year for 9 years at 6.25%:

$$F_9 = (8{,}333.33 / 0.0625)\\bigl[(1.0625)^{9} - 1\\bigr]$$

$$(1.0625)^{9} \\approx 1.725682,\\quad 1.725682 - 1 = 0.725682$$

$$133{,}333.33 \\times 0.725682 = \\$96{,}757.60$$

\\$96,757.60 is below \\$131,629.13 even though both plans contribute \\$75,000 in total.`,
    D: `The lump sum compounds on the entire \\$75,000 for all 9 years. The last annuity deposit of \\$8,333.33 earns nothing beyond the instant it is paid. Timing, not the total contributed, drives the gap.`,
    E: `Discrete annual compounding of the same lump sum:

$$S_{\\mathrm{disc}} = 75{,}000 \\times (1.0625)^{9} = 75{,}000 \\times 1.725682 = \\$129{,}426.15$$

\\$129,426.15 does exceed the annuity's \\$96,757.60 (while still sitting below the continuous \\$131,629.13).`,
  },
  "math-11-99": {
    A: `Ordinary present value, then the due shift:

$$P_{\\mathrm{ord}} = (4{,}200 / 0.08)\\bigl[1 - 1/(1.08)^{5}\\bigr]$$

$$(1.08)^{5} \\approx 1.469328,\\quad 1/1.469328 \\approx 0.680583$$

$$1 - 0.680583 = 0.319417$$

$$52{,}500 \\times 0.319417 = \\$16{,}769.39$$

$$P_{\\mathrm{due}} = 16{,}769.39 \\times 1.08 = \\$18{,}110.94$$`,
    B: `Ordinary future value, then the due shift:

$$F_{\\mathrm{ord}} = (4{,}200 / 0.08)\\bigl[(1.08)^{5} - 1\\bigr] = 52{,}500 \\times 0.469328 = \\$24{,}639.72$$

$$F_{\\mathrm{due}} = 24{,}639.72 \\times 1.08 = \\$26{,}610.90$$

The claim's \\$27,610.90 is \\$1,000 too high.`,
    C: `$$S = 20{,}000 \\, e^{0.06 \\times 7} = 20{,}000 \\, e^{0.42}$$

$$e^{0.42} \\approx 1.521961$$

$$20{,}000 \\times 1.521961 = \\$30{,}439.24$$

Not \\$31,439.24.`,
    D: `Perpetuity: $3{,}000 / 0.08 = \\$37{,}500$.

Double the lease present value: $2 \\times 18{,}110.94 = \\$36{,}221.88$.

\\$37,500 > \\$36,221.88, so the perpetuity is more than double, not less.`,
    E: `\\$30,439.24 (continuous investment after 7 years) versus \\$37,500 (perpetuity present value): the continuous result is smaller, not larger.`,
  },
  "math-11-100": {
    A: `$$S = 150{,}000 \\, e^{0.05 \\times 10} = 150{,}000 \\, e^{0.50}$$

$$e^{0.50} \\approx 1.648721$$

$$150{,}000 \\times 1.648721 = \\$247{,}308.20$$`,
    B: `$$x = 80{,}000 / (1.06)^{6}$$

$$(1.06)^{6} \\approx 1.418519$$

$$80{,}000 / 1.418519 = \\$56{,}396.85$$

Not \\$57,396.85.`,
    C: `$$P_{12} = (10{,}000 / 0.07)\\bigl[1 - 1/(1.07)^{12}\\bigr]$$

$$(1.07)^{12} \\approx 2.252192,\\quad 1/2.252192 \\approx 0.443995$$

$$1 - 0.443995 = 0.556005$$

$$142{,}857.14 \\times 0.556005 = \\$79{,}429.40$$`,
    E: `Present-day commitments, using the correct Component 2 deposit:

$$150{,}000 + 56{,}396.85 + 79{,}429.40 + 100{,}000 = \\$385{,}826.25$$

\\$385,826.25 is below \\$500,000, not above.`,
  },
  "math-11-101": {
    B: `$$a = \\frac{0.12 \\times 60{,}000}{1 - (1.12)^{-6}} = \\frac{7{,}200}{1 - 0.506631} = \\frac{7{,}200}{0.493369} = \\$14{,}593.54$$`,
    D: `Year-1 principal: $14{,}593.54 - 7{,}200.00 = \\$7{,}393.54$.

Half the payment: $14{,}593.54 / 2 = \\$7{,}296.77$.

\\$7,393.54 > \\$7,296.77, so principal already exceeds half even in year 1.`,
    E: `After payment 1: $60{,}000 - 7{,}393.54 = \\$52{,}606.46$.

Year-2 interest: $0.12 \\times 52{,}606.46 = \\$6{,}312.77$.

Year-2 principal: $14{,}593.54 - 6{,}312.77 = \\$8{,}280.77$.

Balance after payment 2: $52{,}606.46 - 8{,}280.77 = \\$44{,}325.69$, not \\$45,000.`,
  },
  "math-11-102": {
    A: `Monthly rate: $0.09 / 12 = 0.0075 = 0.75\\%$. Payments and compounding are both monthly, so this is the r that enters the payment formula.`,
    B: `n = 4 × 12 = 48.

$$a = \\frac{0.0075 \\times 24{,}000}{1 - (1.0075)^{-48}} = \\frac{180}{0.301329} = \\$597.24$$`,
    C: `Total paid: $597.24 \\times 48 = \\$28{,}667.52 \\approx \\$28{,}667.57$.

Not \\$29,500.00.`,
    D: `Interest = total paid − principal: $28{,}667.57 - 24{,}000 = \\$4{,}667.57$.`,
    E: `Four annual payments at 9%:

$$a_{\\mathrm{ann}} = \\frac{0.09 \\times 24{,}000}{1 - (1.09)^{-4}} = \\frac{2{,}160}{0.291676} = \\$7{,}408.05$$

\\$7,408.05 is far above \\$2,388.96, not below it.`,
  },
  "math-11-103": {
    A: `$$a = \\frac{0.10 \\times 45{,}000}{1 - (1.10)^{-5}} = \\frac{4{,}500}{0.379079} = \\$11{,}870.89$$`,
    B: `Year-1 interest is 10% of the opening balance: $0.10 \\times 45{,}000 = \\$4{,}500$, not \\$5,000.`,
    C: `Year 1: interest 4,500.00, principal 7,370.89, balance 37,629.11.

Year 2: interest 3,762.91, principal 8,107.98, balance 29,521.13.

Year 3: interest 2,952.11, principal 8,918.78, balance 20,602.35 ≈ \\$20,602.37.`,
    D: `Year-4 interest: $0.10 \\times 20{,}602.37 = \\$2{,}060.24$.

Year-4 principal: $11{,}870.89 - 2{,}060.24 = \\$9{,}810.65$.

\\$2,060.24 < \\$9,810.65, so interest is smaller than principal, not larger.`,
    E: `The five principal portions must sum to the original loan: \\$45,000.00, not \\$46,200.00. (Balance after year 5 is \\$0.)`,
  },
  "math-11-104": {
    A: `First payment is undiscounted. The other 9 form an ordinary annuity:

$$1 + \\frac{1}{0.11}\\bigl[1 - (1.11)^{-9}\\bigr]$$

$$(1.11)^{-9} \\approx 0.391110$$

$$1 - 0.391110 = 0.608890$$

$$9.090909 \\times 0.608890 = 5.537048$$

$$1 + 5.537048 = 6.537048$$`,
    B: `$$a = 150{,}000 / 6.537048 = \\$22{,}946.14$$`,
    C: `Ordinary-annuity payment (first due at year-end):

$$a_{\\mathrm{ord}} = \\frac{0.11 \\times 150{,}000}{1 - (1.11)^{-10}} = \\frac{16{,}500}{0.647848} = \\$25{,}470.21$$

\\$25,470.21 > \\$22,946.14, so delaying the first payment raises the required instalment, not lowers it.`,
    D: `$$25{,}470.21 - 22{,}946.14 = \\$2{,}524.07 \\approx \\$2{,}524.08$$`,
    E: `Ten due payments: $22{,}946.14 \\times 10 = \\$229{,}461.40$, not \\$220,000.`,
  },
  "math-11-105": {
    A: `$$n \\ge \\frac{\\ln 10{,}000 - \\ln(10{,}000 - 0.13 \\times 35{,}000)}{\\ln 1.13} = \\frac{\\ln 10{,}000 - \\ln 5{,}450}{\\ln 1.13} \\approx 4.9663$$

Smallest integer n is 5.`,
    B: `Four full \\$10,000 payments come first: 4 × 10,000 = \\$40,000.00.`,
    C: `Loan after 4 years: $35{,}000 \\times (1.13)^{4} \\approx \\$57{,}066.58$.

Four payments accumulated: $(10{,}000 / 0.13)\\bigl[(1.13)^{4} - 1\\bigr] \\approx \\$48{,}497.97$.

Remainder at year 4: $57{,}066.58 - 48{,}497.97 = \\$8{,}568.61$.

Final payment: $8{,}568.61 \\times 1.13 = \\$9{,}682.53$.`,
    D: `$$40{,}000 + 9{,}682.53 = \\$49{,}682.53$$`,
    E: `Interest: $49{,}682.53 - 35{,}000 = \\$14{,}682.53$, which is less than the \\$35,000 principal.`,
  },
};
