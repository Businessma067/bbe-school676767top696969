export const skip = new Set([
  "math-11-81|C",
  "math-11-82|B",
  "math-11-83|B",
  "math-11-84|B",
  "math-11-85|D",
  "math-11-86|C",
  "math-11-87|D",
  "math-11-88|C",
  "math-11-88|D",
  "math-11-89|C",
  "math-11-90|C",
]);

export const addons = {
  "math-11-81": {
    A: `The growth factor is the missing middle step:

$$(1.07)^{3} = 1.07 \\times 1.07 \\times 1.07 = 1.225043$$

$$x = 5{,}000 / 1.225043 = \\$4{,}081.49$$

That is the deposit required today.`,
    B: `Same formula, lower rate:

$$x = 5{,}000 / (1.05)^{3}$$

$$(1.05)^{3} = 1.157625$$

$$5{,}000 / 1.157625 = \\$4{,}319.19$$

\\$4,319.19 sits above \\$4,081.49, so the claim that 5% would lower the deposit is backwards.`,
    D: `Fix r and n, double A:

$$x' = 10{,}000 / (1.07)^{3} = 10{,}000 / 1.225043 = \\$8{,}162.98$$

\\$8,162.98 is exactly 2 × \\$4,081.49.`,
    E: `Six years at 7%:

$$x_6 = 5{,}000 / (1.07)^{6}$$

$$(1.07)^{6} \\approx 1.500730$$

$$5{,}000 / 1.500730 = \\$3{,}331.71$$

Half of \\$4,081.49 would be \\$2,040.75. \\$3,331.71 is larger, so doubling time does not halve the deposit.`,
  },
  "math-11-82": {
    A: `Insert P = 6,500, r = 0.06, n = 5:

$$F(5) = 6{,}500 \\times (1.06)^{5}$$

$$(1.06)^{5} \\approx 1.338226$$

$$6{,}500 \\times 1.338226 = \\$8{,}698.47$$`,
    C: `Ten years is not twice five years under compounding:

$$F(10) = 6{,}500 \\times (1.06)^{10}$$

$$(1.06)^{10} \\approx 1.790847$$

$$6{,}500 \\times 1.790847 = \\$11{,}640.51$$

Double the 5-year value would be \\$17,396.94, far above \\$11,640.51.`,
    D: `Second-block interest is the 10-year stock minus the 5-year stock:

$$11{,}640.51 - 8{,}698.47 = \\$2{,}942.04$$

Compare with the first block: \\$2,942.04 > \\$2,198.47, so the second period is larger, not smaller.`,
    E: `Halving r does not halve F:

$$F_{3\\%}(5) = 6{,}500 \\times (1.03)^{5}$$

$$(1.03)^{5} \\approx 1.159274$$

$$6{,}500 \\times 1.159274 = \\$7{,}535.28$$

Half of \\$8,698.47 is \\$4,349.24. \\$7,535.28 is well above that half.`,
  },
  "math-11-83": {
    A: `Ordinary-annuity future value:

$$F_6 = (2{,}000 / 0.05)\\bigl[(1.05)^{6} - 1\\bigr]$$

$$(1.05)^{6} \\approx 1.340096,\\quad 1.340096 - 1 = 0.340096$$

$$40{,}000 \\times 0.340096 = \\$13{,}603.84$$`,
    C: `Go from future value back to present value by dividing, not multiplying:

$$P_6 = F_6 / (1.05)^{6} = 13{,}603.84 / 1.340096 = \\$10{,}151.40$$

\\$10,151.40 is the present-value equivalent, not \\$18,230.45.`,
    D: `F scales with a. Raise a from 2,000 to 3,000 (a 50% increase):

$$F_6' = 13{,}603.84 \\times 1.5 = \\$20{,}405.76$$

The statement's \\$21,405.76 is \\$1,000 too high. The 50% rise itself is correct; the dollar figure is not.`,
    E: `Twelve years at the same 2,000 and 5%:

$$F_{12} = 40{,}000\\bigl[(1.05)^{12} - 1\\bigr]$$

$$(1.05)^{12} \\approx 1.795856,\\quad 1.795856 - 1 = 0.795856$$

$$40{,}000 \\times 0.795856 = \\$31{,}834.24$$

Double F6 is \\$27,207.68. \\$31,834.24 exceeds that double, so the future value is more than double, not less.`,
  },
  "math-11-84": {
    A: `$$F_{10} = (3{,}500 / 0.08)\\bigl[(1.08)^{10} - 1\\bigr]$$

$$(1.08)^{10} \\approx 2.158925,\\quad 2.158925 - 1 = 1.158925$$

$$43{,}750 \\times 1.158925 = \\$50{,}702.97$$`,
    C: `Twenty years:

$$F_{20} = 43{,}750\\bigl[(1.08)^{20} - 1\\bigr]$$

$$(1.08)^{20} \\approx 4.660957,\\quad 4.660957 - 1 = 3.660957$$

$$43{,}750 \\times 3.660957 = \\$160{,}166.87$$

Double F10 is \\$101,405.94. \\$160,166.87 is more than double, not less.`,
    D: `Interest already computed: \\$15,702.97. Principal deposited: 3,500 × 10 = \\$35,000.00.

\\$15,702.97 < \\$35,000.00, so interest does not exceed principal.`,
    E: `Raise the rate to 10%, keep a = 3,500 and n = 10:

$$F_{10}' = (3{,}500 / 0.10)\\bigl[(1.10)^{10} - 1\\bigr]$$

$$(1.10)^{10} \\approx 2.593742,\\quad 2.593742 - 1 = 1.593742$$

$$35{,}000 \\times 1.593742 = \\$55{,}780.97$$

\\$55,780.97 does clear \\$55,000.00.`,
  },
  "math-11-85": {
    A: `$$P_{15} = (2{,}400 / 0.045)\\bigl[1 - 1/(1.045)^{15}\\bigr]$$

$$(1.045)^{15} \\approx 1.935282,\\quad 1/1.935282 \\approx 0.516716$$

$$1 - 0.516716 = 0.483284$$

$$53{,}333.33 \\times 0.483284 = \\$25{,}775.15$$`,
    B: `Nominal withdrawals: 2,400 × 15 = \\$36,000.00.

\\$36,000.00 > \\$25,775.15 because each future withdrawal is discounted. The inequality in the claim holds.`,
    C: `Thirty years is not twice fifteen in present value:

$$P_{30} = 53{,}333.33\\bigl[1 - 1/(1.045)^{30}\\bigr]$$

$$(1.045)^{30} \\approx 3.745318,\\quad 1/3.745318 \\approx 0.267002$$

$$1 - 0.267002 = 0.732998$$

$$53{,}333.33 \\times 0.732998 = \\$39{,}091.65$$

Double P15 would be \\$51,550.30. \\$39,091.65 falls well short.`,
    E: `A higher rate discounts more, so today's deposit falls. At 6%:

$$P_{15}' = (2{,}400 / 0.06)\\bigl[1 - 1/(1.06)^{15}\\bigr]$$

$$(1.06)^{15} \\approx 2.396558,\\quad 1/2.396558 \\approx 0.417265$$

$$1 - 0.417265 = 0.582735$$

$$40{,}000 \\times 0.582735 = \\$23{,}309.40$$

\\$23,309.40 is below \\$25,775.15, not above.`,
  },
  "math-11-86": {
    A: `$$P_{20} = (5{,}000 / 0.06)\\bigl[1 - 1/(1.06)^{20}\\bigr]$$

$$(1.06)^{20} \\approx 3.207135,\\quad 1/3.207135 \\approx 0.311805$$

$$1 - 0.311805 = 0.688195$$

$$83{,}333.33 \\times 0.688195 = \\$57{,}349.67$$`,
    B: `Perpetuity: $P = a/r = 5{,}000/0.06 = \\$83{,}333.33$.

Gap: $83{,}333.33 - 57{,}349.67 = \\$25{,}983.66$. Both pieces of the claim match.`,
    D: `Forty years:

$$P_{40} = 83{,}333.33\\bigl[1 - 1/(1.06)^{40}\\bigr]$$

$$(1.06)^{40} \\approx 10.285718,\\quad 1/10.285718 \\approx 0.097222$$

$$1 - 0.097222 = 0.902778$$

$$83{,}333.33 \\times 0.902778 = \\$75{,}231.50$$

Share of the perpetuity: $75{,}231.50 / 83{,}333.33 \\approx 0.9028 = 90.28\\%$, which is still under 95%.`,
    E: `In $P_n = (a/r)\\bigl[1 - 1/(1+r)^{n}\\bigr]$, let n grow. Then $(1.06)^{n} \\to \\infty$, so $1/(1.06)^{n} \\to 0$, and $P_n \\to 5{,}000/0.06 = \\$83{,}333.33$. That limit is the perpetuity formula.`,
  },
  "math-11-87": {
    A: `$$P_9 = (2{,}500 / 0.07)\\bigl[1 - 1/(1.07)^{9}\\bigr]$$

$$(1.07)^{9} \\approx 1.838459,\\quad 1/1.838459 \\approx 0.543931$$

$$1 - 0.543931 = 0.456069$$

$$35{,}714.29 \\times 0.456069 = \\$16{,}288.18$$`,
    B: `Savings versus the lump sum:

$$18{,}000.00 - 16{,}288.18 = \\$1{,}711.82$$

Option 2 is cheaper, but the saving is \\$1,711.82, not \\$1,811.82.`,
    C: `Lower rate, higher present value. At 4%:

$$P_9' = (2{,}500 / 0.04)\\bigl[1 - 1/(1.04)^{9}\\bigr]$$

$$(1.04)^{9} \\approx 1.423312,\\quad 1/1.423312 \\approx 0.702587$$

$$1 - 0.702587 = 0.297413$$

$$62{,}500 \\times 0.297413 = \\$18{,}588.31$$

\\$18,588.31 > \\$16,288.18, so 4% raises Option 2's present value, not lowers it.`,
    E: `Grow the \\$18,000 lump sum forward 9 years at 7%:

$$F = 18{,}000 \\times (1.07)^{9} = 18{,}000 \\times 1.838459 = \\$33{,}092.26$$

\\$33,092.26 does not exceed \\$34,000.00.`,
  },
  "math-11-88": {
    A: `Single-sum future value:

$$F_A = 12{,}000 \\times (1.06)^{8}$$

$$(1.06)^{8} \\approx 1.593848$$

$$12{,}000 \\times 1.593848 = \\$19{,}126.18$$`,
    B: `$$F_B = (1{,}400 / 0.06)\\bigl[(1.06)^{8} - 1\\bigr]$$

$$(1.06)^{8} \\approx 1.593848,\\quad 1.593848 - 1 = 0.593848$$

$$23{,}333.33 \\times 0.593848 = \\$13{,}856.46$$

The claim's \\$14,856.46 is \\$1,000 too high.`,
    E: `Raise B's annual deposit to 1,500:

$$F_B' = (1{,}500 / 0.06)\\bigl[(1.06)^{8} - 1\\bigr] = 25{,}000 \\times 0.593848 = \\$14{,}846.20$$

\\$14,846.20 is still below Strategy A's \\$19,126.18.`,
  },
  "math-11-89": {
    A: `Build the ordinary annuity first, then shift one period:

$$F_{\\mathrm{ord}} = (3{,}000 / 0.05)\\bigl[(1.05)^{6} - 1\\bigr] = 60{,}000 \\times 0.340096 = \\$20{,}405.76$$

$$F_{\\mathrm{due}} = 20{,}405.76 \\times 1.05 = \\$21{,}426.05$$`,
    B: `The ordinary figure is the one already computed: \\$20,405.76.

$$20{,}405.76 < 21{,}426.05$$

End-of-year deposits miss one period of growth, so they finish lower.`,
    D: `Twelve years:

$$F_{\\mathrm{ord}}(12) = 60{,}000\\bigl[(1.05)^{12} - 1\\bigr] = 60{,}000 \\times 0.795856 = \\$47{,}751.36$$

$$F_{\\mathrm{due}}(12) = 47{,}751.36 \\times 1.05 = \\$50{,}138.93$$

Double the 6-year due value would be \\$42,852.10. \\$50,138.93 is more than double, not equal to double.`,
    E: `The identity $F_{\\mathrm{due}} = F_{\\mathrm{ord}}(1+r)$ does not depend on a or n. Here 20,405.76 × 1.05 = 21,426.05 confirms it for these numbers, and the same extra factor (1+r) applies at any other horizon.`,
  },
  "math-11-90": {
    A: `$$P_{\\mathrm{ord}} = (24{,}000 / 0.06)\\bigl[1 - 1/(1.06)^{5}\\bigr]$$

$$(1.06)^{5} \\approx 1.338226,\\quad 1/1.338226 \\approx 0.747258$$

$$1 - 0.747258 = 0.252742$$

$$400{,}000 \\times 0.252742 = \\$101{,}096.80$$

$$P_{\\mathrm{due}} = 101{,}096.80 \\times 1.06 = \\$107{,}162.61$$`,
    B: `The ordinary present value is \\$101,096.80, already below the due value \\$107,162.61. End-of-year rent is discounted one extra period, so it is worth less today.`,
    D: `Ten-year lease:

$$P_{\\mathrm{ord}}(10) = 400{,}000\\bigl[1 - 1/(1.06)^{10}\\bigr]$$

$$(1.06)^{10} \\approx 1.790848,\\quad 1/1.790848 \\approx 0.558395$$

$$1 - 0.558395 = 0.441605$$

$$400{,}000 \\times 0.441605 = \\$176{,}642.00$$

$$P_{\\mathrm{due}}(10) = 176{,}642.00 \\times 1.06 = \\$187{,}240.52$$

Double the 5-year due value would be \\$214,325.22. \\$187,240.52 is less than double.`,
    E: `Split the stream: \\$24,000 due today, plus an ordinary 4-year annuity of \\$24,000.

$$P_4 = 400{,}000\\bigl[1 - 1/(1.06)^{4}\\bigr]$$

$$(1.06)^{4} \\approx 1.262477,\\quad 1/1.262477 \\approx 0.792094$$

$$1 - 0.792094 = 0.207906$$

$$400{,}000 \\times 0.207906 = \\$83{,}162.40$$

$$24{,}000 + 83{,}162.40 = \\$107{,}162.40$$

Matches $P_{\\mathrm{due}}$ within a rounding cent.`,
  },
};
