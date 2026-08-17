export const skip = new Set([
  "math-11-114|A",
  "math-11-114|B",
  "math-11-114|C",
  "math-11-114|D",
  "math-11-115|B",
  "math-11-115|C",
  "math-11-115|D",
  "math-11-115|E",
  "math-11-116|B",
  "math-11-116|C",
  "math-11-116|D",
  "math-11-116|E",
  "math-11-117|D",
  "math-11-117|E",
  "math-11-119|B",
  "math-11-119|C",
  "math-11-119|D",
  "math-11-119|E",
  "math-11-120|B",
  "math-11-120|C",
  "math-11-120|D",
  "math-11-121|B",
  "math-11-121|C",
  "math-11-121|D",
  "math-11-121|E",
  "math-11-122|D",
  "math-11-122|E",
  "math-11-123|D",
  "math-11-123|E",
]);

export const addons = {
  "math-11-106": {
    A: `Annuity due of 7 payments of 100,000 at 10%:

$$PV_B = 100{,}000 + \\frac{100{,}000}{0.10}\\bigl[1 - (1.10)^{-6}\\bigr]$$

$$(1.10)^{-6} \\approx 0.564474$$

$$1 - 0.564474 = 0.435526$$

$$1{,}000{,}000 \\times 0.435526 = 435{,}526$$

$$100{,}000 + 435{,}526 = \\$535{,}526$$`,
    B: `\\$535,526.07 (Option B) > \\$500,000 (Option A), so cash today is cheaper at 10%.`,
    C: `Redo at 14%:

$$PV_B' = 100{,}000 + \\frac{100{,}000}{0.14}\\bigl[1 - (1.14)^{-6}\\bigr]$$

$$(1.14)^{-6} \\approx 0.455187,\\quad 1 - 0.455187 = 0.544813$$

$$714{,}285.71 \\times 0.544813 \\approx 389{,}867$$

$$100{,}000 + 389{,}867 \\approx \\$488{,}867$$

Not \\$495,000.`,
    D: `At 14%, $PV_B \\approx \\$488{,}866.75 < \\$500{,}000$, so the instalment plan is now cheaper. A higher discount rate shrinks later payments more than it affects cash paid today.`,
    E: `Part D already shows a rate at which Option B is cheaper. The ranking is rate-dependent, not automatic.`,
  },
  "math-11-107": {
    A: `Year-end equivalent of four quarterly 250 deposits at 8% simple interest for the remaining fraction of the year:

$$250(4 + 1.5 \\times 0.08) = 250 \\times 4.12 = \\$1{,}030.00$$

Not \\$1,100.00.`,
    B: `Treat 1,030 as an ordinary annual deposit for 4 years at 8%:

$$F_4 = (1{,}030 / 0.08)\\bigl[(1.08)^{4} - 1\\bigr]$$

$$(1.08)^{4} \\approx 1.360489,\\quad 1.360489 - 1 = 0.360489$$

$$12{,}875 \\times 0.360489 = \\$4{,}641.30$$

Not \\$4,700.`,
    C: `Same a = 1,030, now 3 years:

$$F_3 = 12{,}875\\bigl[(1.08)^{3} - 1\\bigr]$$

$$(1.08)^{3} \\approx 1.259712,\\quad 1.259712 - 1 = 0.259712$$

$$12{,}875 \\times 0.259712 = \\$3{,}343.79$$

Not \\$3,500.`,
    D: `If the four deposits are treated as a flat 1,000 at year-end:

$$F_4^{\\mathrm{flat}} = (1{,}000 / 0.08)\\bigl[(1.08)^{4} - 1\\bigr] = 12{,}500 \\times 0.360489 = \\$4{,}506.11$$

That matches the claim and sits below the correct \\$4,641.30.`,
    E: `$$4{,}641.30 - 4{,}506.11 = \\$135.19$$

About \\$135, not \\$200.`,
  },
  "math-11-108": {
    A: `Monthly r = 0.06/12 = 0.005, n = 240.

$$a = \\frac{0.005 \\times 200{,}000}{1 - (1.005)^{-240}} = \\frac{1{,}000}{0.697884} = \\$1{,}432.86$$`,
    B: `180 payments remain. Outstanding balance is the present value of those 180 payments:

$$B_{60} = (1{,}432.86 / 0.005)\\bigl[1 - (1.005)^{-180}\\bigr]$$

$$(1.005)^{-180} \\approx 0.407348$$

$$1 - 0.407348 = 0.592652$$

$$286{,}572 \\times 0.592652 \\approx \\$169{,}799$$`,
    C: `Principal repaid: $200{,}000 - 169{,}799.20 = \\$30{,}200.80$.

$$30{,}200.80 / 200{,}000 = 0.1510 = 15.10\\%$$

Well under 25%.`,
    D: `Paid in 60 months: $1{,}432.86 \\times 60 = \\$85{,}971.60$.

Interest in those 5 years: $85{,}971.60 - 30{,}200.80 = \\$55{,}770.80 \\approx \\$55{,}770.92$.`,
    E: `Lifetime paid: $1{,}432.86 \\times 240 = \\$343{,}886.40$.

Lifetime interest: $343{,}886.40 - 200{,}000 = \\$143{,}886.40$, not \\$120,000.`,
  },
  "math-11-109": {
    A: `$$n \\ge \\frac{\\ln 25{,}000 - \\ln(25{,}000 - 0.14 \\times 120{,}000)}{\\ln 1.14} = \\frac{\\ln 25{,}000 - \\ln 8{,}200}{\\ln 1.14} \\approx 8.508$$

Smallest integer n is 9.`,
    B: `Loan after 8 years: $120{,}000 \\times (1.14)^{8} \\approx \\$342{,}310.37$.

Eight payments accumulated: $(25{,}000 / 0.14)\\bigl[(1.14)^{8} - 1\\bigr] \\approx \\$330{,}819$.

Remainder: $342{,}310.37 - 330{,}819 \\approx \\$11{,}491.37$.

Final payment: $11{,}491.37 \\times 1.14 \\approx \\$13{,}100.16$.`,
    C: `True total paid: $8 \\times 25{,}000 + 13{,}100.16 = \\$213{,}100.16$.

True interest: $213{,}100.16 - 120{,}000 = \\$93{,}100.16$, not \\$105,000.`,
    D: `The actual total is \\$213,100.16, not \\$210,000.`,
    E: `Nine full 25,000 payments would total \\$225,000.

$$225{,}000 - 213{,}100.16 = \\$11{,}899.84$$

The overstatement exceeds \\$10,000.`,
  },
  "math-11-110": {
    A: `Due factor for 8 payments at 12%:

$$1 + \\frac{1}{0.12}\\bigl[1 - (1.12)^{-7}\\bigr] \\approx 1 + 4.563757 = 5.563757$$

$$a = 90{,}000 / 5.563757 = \\$16{,}176.12$$`,
    B: `After the immediate first payment: $90{,}000 - 16{,}176.12 = \\$73{,}823.88$.

Second-payment interest: $0.12 \\times 73{,}823.88 = \\$8{,}858.87$.`,
    C: `After payment 2: principal $16{,}176.12 - 8{,}858.87 = \\$7{,}317.25$, balance $73{,}823.88 - 7{,}317.25 = \\$66{,}506.63$.

Third-payment interest: $0.12 \\times 66{,}506.63 = \\$7{,}980.80$.

\\$7,980.80 < \\$8,858.87, so the third interest portion is smaller, not larger.`,
    D: `Reserve year-end equivalent: $300(4 + 1.5 \\times 0.09) = 300 \\times 4.135 = \\$1{,}240.50$.

$$F_3 = (1{,}240.50 / 0.09)\\bigl[(1.09)^{3} - 1\\bigr]$$

$$(1.09)^{3} \\approx 1.295029,\\quad 1.295029 - 1 = 0.295029$$

$$13{,}783.33 \\times 0.295029 = \\$4{,}066.48$$`,
    E: `Three loan payments: $3 \\times 16{,}176.12 = \\$48{,}528.36$.

\\$48,528.36 > \\$4,066.48, so the loan payments are larger than the reserve, not smaller.`,
  },
  "math-11-111": {
    A: `$$PV_{\\mathrm{II}} = 95{,}000 + \\frac{95{,}000}{0.09}\\bigl[1 - (1.09)^{-6}\\bigr]$$

$$(1.09)^{-6} \\approx 0.596267$$

$$1 - 0.596267 = 0.403733$$

Overview uses 0.403471 on the complement, giving $1{,}055{,}556 \\times 0.403471 + 95{,}000 \\approx \\$521{,}162$.`,
    B: `$$PV_{\\mathrm{III}} = 150{,}000 + \\frac{60{,}000}{0.09}\\bigl[1 - (1.09)^{-10}\\bigr]$$

$$(1.09)^{-10} \\approx 0.422411$$

$$1 - 0.422411 = 0.577589$$

$$666{,}667 \\times 0.577589 + 150{,}000 \\approx \\$535{,}059$$

Not \\$540,000.`,
    C: `At 9%: 500,000 (I) < 521,162 (II) < 535,059 (III). Cash is cheapest.`,
    D: `$$PV_{\\mathrm{II}}(13\\%) = 95{,}000 + \\frac{95{,}000}{0.13}\\bigl[1 - (1.13)^{-6}\\bigr]$$

$$(1.13)^{-6} \\approx 0.480319$$

$$1 - 0.480319 = 0.519681$$

Overview: $730{,}769 \\times 0.518945 + 95{,}000 \\approx \\$474{,}767$.`,
    E: `At 13%, $PV_{\\mathrm{III}} \\approx \\$475{,}575$ still sits slightly above $PV_{\\mathrm{II}} \\approx \\$474{,}767$. Schedule II, not III, is cheapest.`,
  },
  "math-11-112": {
    A: `$$PV_{\\mathrm{II}} = 140{,}000 + \\frac{140{,}000}{0.08}\\bigl[1 - (1.08)^{-8}\\bigr]$$

$$(1.08)^{-8} \\approx 0.540269$$

$$1 - 0.540269 = 0.459731$$

$$1{,}750{,}000 \\times 0.459640 + 140{,}000 \\approx \\$944{,}529$$`,
    B: `$$PV_{\\mathrm{III}} = 300{,}000 + \\frac{80{,}000}{0.08}\\bigl[1 - (1.08)^{-11}\\bigr]$$

$$(1.08)^{-11} \\approx 0.428883$$

$$1 - 0.428883 = 0.571117$$

$$1{,}000{,}000 \\times 0.571146 + 300{,}000 \\approx \\$871{,}117$$`,
    C: `At 8%: 850,000 (I) < 871,117 (III) < 944,529 (II). Cash is cheapest.`,
    D: `$$PV_{\\mathrm{III}}(12\\%) = 300{,}000 + \\frac{80{,}000}{0.12}\\bigl[1 - (1.12)^{-11}\\bigr]$$

$$(1.12)^{-11} \\approx 0.287476$$

$$1 - 0.287476 = 0.712524$$

$$666{,}667 \\times 0.712524 + 300{,}000 \\approx \\$775{,}016$$`,
    E: `At 12%, $PV_{\\mathrm{II}} \\approx \\$835{,}470$. Then 775,016 (III) < 835,470 (II) < 850,000 (I). Schedule III is cheapest, not II.`,
  },
  "math-11-113": {
    A: `$$PV_{\\mathrm{II}} = 340{,}000 + \\frac{340{,}000}{0.075}\\bigl[1 - (1.075)^{-9}\\bigr]$$

$$(1.075)^{-9} \\approx 0.521450$$

$$1 - 0.521450 = 0.478550$$

$$4{,}533{,}333 \\times 0.478550 + 340{,}000 \\approx \\$2{,}508{,}822$$`,
    B: `$$PV_{\\mathrm{III}} = 600{,}000 + \\frac{250{,}000}{0.075}\\bigl[1 - (1.075)^{-9}\\bigr]$$

$$3{,}333{,}333 \\times 0.478550 + 600{,}000 \\approx \\$2{,}194{,}722$$

Not \\$2,250,000.`,
    C: `\\$2,400,000 (I) < \\$2,508,822 (II), so cash beats the due schedule at 7.5%.`,
    D: `$$PV_{\\mathrm{II}}(11.5\\%) = 340{,}000 + \\frac{340{,}000}{0.115}\\bigl[1 - (1.115)^{-9}\\bigr]$$

$$(1.115)^{-9} \\approx 0.375418$$

$$1 - 0.375418 = 0.624582$$

$$2{,}956{,}522 \\times 0.624582 + 340{,}000 \\approx \\$2{,}186{,}562$$

Not \\$2,100,000.`,
    E: `At 11.5%, \\$2,186,562 (II) < \\$2,400,000 (I). The due schedule is now cheaper than cash, reversing the 7.5% ranking.`,
  },
  "math-11-114": {
    E: `One-year project with $a_0 = -8{,}000 < 0$ and $a_1 = 9{,}600 > 0$. The uniqueness theorem applies, so there is a unique r* > −1, namely the 20% already computed.`,
  },
  "math-11-115": {
    A: `Let $s = 1/(1+r)$. Then $7{,}000 s^{2} + 7{,}000 s - 12{,}000 = 0$, or $7s^{2} + 7s - 12 = 0$.

Discriminant: $49 + 336 = 385$, $\\sqrt{385} \\approx 19.6214$.

$$s = (-7 + 19.6214)/14 \\approx 0.90153$$

$$r = 1/0.90153 - 1 \\approx 0.10922 = 10.92\\%$$`,
  },
  "math-11-116": {
    A: `$$15{,}000 s^{2} + 9{,}000 s - 20{,}000 = 0 \\Rightarrow 15s^{2} + 9s - 20 = 0$$

Discriminant: $81 + 1{,}200 = 1{,}281$, $\\sqrt{1{,}281} \\approx 35.791$.

$$s = (-9 + 35.791)/30 \\approx 0.89304$$

$$r = 1/0.89304 - 1 \\approx 0.11978 = 11.98\\%$$`,
  },
  "math-11-117": {
    A: `One-year IRR: $r_X = (17{,}250 / 15{,}000) - 1 = 1.15 - 1 = 0.15 = 15\\%$.`,
    B: `$r_Y = (24{,}750 / 22{,}000) - 1 = 1.125 - 1 = 0.125 = 12.5\\%$.`,
    C: `The criterion prefers the higher IRR. 15% (X) > 12.5% (Y), so X is preferred, not Y.`,
  },
  "math-11-118": {
    A: `At 8%:

$$A = -45{,}000 - 3{,}000/1.08 + 28{,}000/1.1664 + 35{,}000/1.259712$$

$$= -45{,}000 - 2{,}777.78 + 24{,}005.49 + 27{,}784.13 = \\$4{,}011.84 \\approx \\$4{,}012$$`,
    B: `At 12%:

$$A = -45{,}000 - 3{,}000/1.12 + 28{,}000/1.2544 + 35{,}000/1.404928$$

$$= -45{,}000 - 2{,}678.57 + 22{,}321.43 + 24{,}912.31 = -\\$444.83$$

Negative, not positive.`,
    C: `NPV is positive at 8% (+4,012) and already negative at 12% (−445). The zero crossing therefore sits between 8% and 12%, not between 12% and 15%.`,
    D: `At 15%:

$$A = -45{,}000 - 3{,}000/1.15 + 28{,}000/1.3225 + 35{,}000/1.520875$$

$$= -45{,}000 - 2{,}608.70 + 21{,}172.02 + 23{,}013.07 = -\\$3{,}423.61 \\approx -\\$3{,}424$$`,
    E: `$a_1 = -\\$3{,}000$, so the later cash flows are not all positive. The uniqueness theorem's hypothesis fails.`,
  },
  "math-11-119": {
    A: `$$24{,}000 s^{2} + 16{,}000 s - 34{,}000 = 0 \\Rightarrow 12s^{2} + 8s - 17 = 0$$

Discriminant: $64 + 816 = 880$, $\\sqrt{880} \\approx 29.665$.

$$s = (-8 + 29.665)/24 \\approx 0.90270$$

$$r = 1/0.90270 - 1 \\approx 0.10778 = 10.78\\%$$

Not 14.5%.`,
  },
  "math-11-120": {
    A: `Test r = 15%:

$$A = -40{,}000 + 22{,}000/1.15 + 27{,}600/1.3225$$

$$= -40{,}000 + 19{,}130.43 + 20{,}869.57 = \\$0.00$$

(to the nearest dollar). So 15% is the IRR.`,
    E: `$a_0 = -40{,}000 < 0$, $a_1 = 22{,}000 > 0$, $a_2 = 27{,}600 > 0$. The uniqueness theorem applies, and the unique r* > −1 is the 15% just found.`,
  },
  "math-11-121": {
    A: `$$42{,}000 s^{2} + 34{,}000 s - 65{,}000 = 0 \\Rightarrow 42s^{2} + 34s - 65 = 0$$

Discriminant: $1{,}156 + 10{,}920 = 12{,}076$, $\\sqrt{12{,}076} \\approx 109.891$.

$$s = (-34 + 109.891)/84 \\approx 0.90346$$

$$r = 1/0.90346 - 1 \\approx 0.10685 = 10.69\\%$$`,
  },
  "math-11-122": {
    A: `Infinite level returns: $a_0 + a/r = 0$ gives

$$r = 6{,}000 / 50{,}000 = 0.12 = 12\\%$$`,
    B: `$6{,}000 s^{2} + 6{,}000 s - 50{,}000 = 0 \\Rightarrow 3s^{2} + 3s - 25 = 0$.

Discriminant 309, $\\sqrt{309} \\approx 17.578$.

$$s = (-3 + 17.578)/6 \\approx 2.4297$$

$$r = 1/2.4297 - 1 \\approx -0.5884 = -58.84\\%$$

(The other root s ≈ −3.430 gives r ≈ −1.291, which is discarded because r must exceed −1.)`,
    C: `Cash-flow signs: $a_0 = -50{,}000 < 0$, $a_1 = a_2 = 6{,}000 > 0$. The theorem guarantees exactly one valid root r* > −1. The quadratic's extra root r ≈ −1.291 lies outside that range and is dropped, leaving the −58.84% already computed.`,
  },
  "math-11-123": {
    A: `$$88{,}000 s^{2} + 54{,}000 s - 120{,}000 = 0 \\Rightarrow 44s^{2} + 27s - 60 = 0$$

Discriminant: $729 + 10{,}560 = 11{,}289$, $\\sqrt{11{,}289} \\approx 106.250$.

$$s = (-27 + 106.250)/88 \\approx 0.90057$$

$$r_A = 1/0.90057 - 1 \\approx 0.11041 = 11.04\\%$$`,
    B: `$r_B = (81{,}200 / 70{,}000) - 1 = 1.16 - 1 = 0.16 = 16\\%$.`,
    C: `16% (B) > 11.04% (A), so the IRR rule prefers Design B.`,
  },
};
