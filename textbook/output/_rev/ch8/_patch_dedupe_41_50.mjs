import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-41": {
    tacticals: [
      "**A.** → True\n\nThe overview already inverted to $p=80q^{-\\frac{1}{2}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-2$. Price that clears a given quantity is still a monomial in $q$. Falling demand does not introduce a logarithm.",
      "**B.** → True\n\nAt $25$ units the inverse already gives $p(25)=16$, which sits under $20$. Twenty-five contributes a square root of $5$, and $80/5=16$. Using the original $p=4$ as if quantity did not move would have kept the catalogue price and missed the letter.",
      "**C.** → False\n\nRevenue as a function of price is $R(p)=\\frac{6400}{p}$, a negative leftover power, so raising the catalogue price cuts revenue. At four euros the take is $1600$; at eight euros it is $800$. Inverse-square demand is elastic enough that a price rise shrinks $pq$.",
      "**D.** → True\n\nThe overview already listed $R=80q^{\\frac{1}{2}}$, so $R(100)=800$, which sits above $750$. One hundred units contribute a square root of $10$, times $80$. Quantity-side revenue rises with $q$ even while price-side revenue in C falls with $p$: those are opposite readings of the same curve.",
      "**E.** → False\n\nThe leftover exponent on $R(q)$ is $\\frac{1}{2}>0$, so a larger quantity brings in more revenue, not less. \"Quantity up, price down, so revenue down\" forgets that along this curve the quantity rise outruns the price cut. The two letters C and E are not the same comparison.",
    ],
  },
  "math-8-42": {
    tacticals: [
      "**A.** → True\n\nAverage product is already $\\frac{Y}{L}=20L^{-\\frac{1}{2}}$, a negative leftover power. Each extra hour of shift dilutes output per hour. Total output still rises; the average falls. That is the $r<1$ story, not a shrinking workshop.",
      "**B.** → True\n\nThe overview already lists $Y(36)=120$, which sits above $100$. Thirty-six hours contribute a square root of $6$, times $20$. That is also $60+60$, the nine-hour output plus the logged gain, a check that $A$ came from a difference of two levels.",
      "**C.** → False\n\nThe slope $Y'(L)=10L^{-\\frac{1}{2}}$ is $\\frac{10}{3}$ after nine hours and $\\frac{10}{6}$ after thirty-six. An extra hour adds more after nine hours than after thirty-six. The leftover exponent is negative, so the slope is falling, not rising.",
      "**D.** → True\n\nTo double a square-root output you quadruple the input: $k^{\\frac{1}{2}}=2$ forces $k=4$. The logged extension from $9$ to $36$ hours is exactly that quadrupling, and it doubles output from $60$ to $120$. Labour must more than double.",
      "**E.** → False\n\nAt $25$ hours, average product is $20/5=4$, which is not above $5$. Twenty-five is $5^{2}$, so the inverse square root is $\\frac{1}{5}$. The claimed $5$ would have been $Y/L$ at $L=16$, a different perfect square.",
    ],
  },
  "math-8-43": {
    tacticals: [
      "**A.** → True\n\nThe overview already solved the quadratic in $t=\\sqrt{q}$ and listed the break-evens $q=100$ and $q=400$. Two distinct positive roots mean two different outputs give zero profit. A single break-even would have needed a linear leftover, not this square-root-minus-line-minus-floor shape.",
      "**B.** → True\n\nAt $25$ units, $\\Pi(25)=-150$, a shortfall of $150$ euros, which is more than $100$ below break-even. Five squared is $25$, revenue $300$, variable cost $50$, then the $400$ charge. The firm is still on the wrong side of the lower root.",
      "**C.** → False\n\nProfit turns positive after $q=100$ and turns negative again past $q=400$. Once profit has turned positive it does not stay positive at every larger output: the linear variable cost eventually overtakes the square-root revenue. The upper root is the second crossing.",
      "**D.** → True\n\nRevenue $60\\sqrt{q}$ is a monomial; profit $60\\sqrt{q}-2q-400$ is not. The intercept $-400$ and the distinct power $-2q$ both stop $\\Pi$ from being a power of output. A sum of unmatched powers is not a power.",
      "**E.** → False\n\nThe overview already lists $\\Pi(225)=50$, which does not exceed $80$. Fifteen squared is $225$, revenue $900$, variable cost $450$, charge $400$. Fifty euros of profit is the interior peak neighbourhood, not an $80$ euro surplus.",
    ],
  },
  "math-8-44": {
    tacticals: [
      "**A.** → True\n\nThe overview already placed the meeting at $x=36$, from $\\frac{C}{B}=\\frac{x}{36}=1$. The leftover ratio is linear in $x$, so it crosses $1$ at exactly one positive scale. Two meetings would need a higher-degree leftover.",
      "**B.** → True\n\nAt scale $16$, $C(16)=32$, which sits above $30$. Sixteen contributes $16^{\\frac{3}{2}}=64$, times $\\frac{1}{2}$. Benefit at the same scale is $B(16)=72$, so cost is already large, but this letter asks only about the cost level.",
      "**C.** → False\n\nThe cost exponent $\\frac{3}{2}$ is larger than the benefit exponent $\\frac{1}{2}$, so cost does overtake benefit, and the overview's ratio $\\frac{x}{36}$ crosses $1$ at $36$. The exponent comparison in the claim is backwards.",
      "**D.** → False\n\nAt scale $9$, benefit is $54$ and cost is $13.5$, so net benefit is $40.5$, which does not exceed $42$. Nine contributes a square root of $3$ on the benefit side and $27$ on the cube-root-then-square cost side. The $42$ cutoff is a near miss.",
      "**E.** → False\n\nBenefit per million of cost is $\\frac{36}{x}$, which falls as scale grows. At $x=9$ it is $4$; at the meeting $x=36$ it is $1$. A constant ratio would have needed equal exponents. These two powers do not stay in proportion.",
    ],
  },
  "math-8-45": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=\\frac{2}{3}<1$. Each extra cubic metre of gas adds less throughput than the cubic metre before it. The logged ratio $\\frac{36}{16}=\\frac{9}{4}$ is smaller than the feed ratio $\\frac{27}{8}$, which is the same comparison in numbers.",
      "**B.** → True\n\nThe overview already inverted the $32$ t/h licence to $g=16\\sqrt{2}\\approx 22.63$, which sits below $24$. A two-thirds power reaches a doubled throughput with less than a doubled feed. The ceiling is a twenty-three cubic metre story, not a twenty-four one.",
      "**C.** → False\n\nDoubling gas would double throughput only if $r=1$. The factor is $2^{\\frac{2}{3}}\\approx 1.59$, not $2$. The furnace will not keep pace with the feed. Linear thinking is the trap.",
      "**D.** → False\n\nThroughput per cubic metre is $4g^{-\\frac{1}{3}}$, a negative leftover power, so intensity falls as the feed rises. Extra gas still adds tonnes, but each cubic metre buys less than the one before it. Rising intensity would have needed $r>1$.",
      "**E.** → True\n\nAt a feed of $64$, $T(64)=4\\cdot 16=64$, which sits above $60$. Sixty-four contributes $4^{2}=16$ after the two-thirds power. Using $r=1$ on the $27$ m$^{3}$ reading would have claimed a very different sixty-four cubic metre total.",
    ],
  },
  "math-8-46": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered exponent $2>1$. A square steepens as depth grows, so each extra metre stores more than the metre before it. Doubling depth multiplies volume by $4$, which already exceeds a doubling of depth.",
      "**B.** → True\n\nThe overview already lists $V(6)=144$, which sits above $140$. Six metres squared is $36$, times $4$. Linear scaling from the $5$ m store would have missed that exact square.",
      "**C.** → False\n\nTo double stored volume the depth factor is $\\sqrt{2}\\approx 1.41$, less than $2$. Because the exponent exceeds one, volume outruns depth, so a $41\\%$ rise already doubles the store. The trap is inverting as if $r>1$ meant \"need more than double the depth\".",
      "**D.** → False\n\nA square grows without bound as depth grows. A finite cap would need a leftover that goes to zero, not $4d^{2}$. Tapering changes the coefficient, not the fact that more depth still adds volume.",
      "**E.** → False\n\nFilling from $4$ m to $8$ m adds $V(8)-V(4)=256-64=192$, which is not more than $200$. Doubling depth quadruples the store, so the add-on is three times the starting volume, $3\\cdot 64=192$. The $200$ cutoff is a near miss.",
    ],
  },
  "math-8-47": {
    tacticals: [
      "**A.** → True\n\nThe increment $E(v+h)-E(v)=\\frac{1}{20}(2vh+h^{2})$ grows with $v$. From $50$ to $70$ the rise is $120$ points, larger than the logged $80$ from $30$ to $50$. Equal speed steps raise a square index by more at higher speeds. That is the $r>1$ story on increments.",
      "**B.** → True\n\nThe overview already lists $E(40)=80$, which sits above $70$. Forty squared is $1600$, divided by $20$. Linear interpolation between $30$ and $50$ would have claimed $50$ and missed the square's bow.",
      "**C.** → False\n\nIndex per kilometre per hour is $\\frac{1}{20}v$, which rises with speed. At $v=30$ it is $1.5$; at $v=50$ it is $2.5$. A constant intensity would have needed exponent $1$. The square makes extra speed dearer per unit.",
      "**D.** → True\n\nThe overview already inverted to $v=\\sqrt{20}\\,E^{\\frac{1}{2}}$. Speed is a square root of the index, so it grows more slowly than the index: doubling $E$ multiplies the required speed by only $\\sqrt{2}\\approx 1.41$. Inverse of a square is a slower power.",
      "**E.** → False\n\nThe overview already lists $E(80)=320$, which is not under $300$. Eighty squared is $6400$, divided by $20$. Doubling the $40$ km/h index of $80$ quadruples it to $320$, the same exponent that made A true.",
    ],
  },
  "math-8-48": {
    tacticals: [
      "**A.** → True\n\nSteel scales with $h^{2}$ and capacity with $h^{3}$. Doubling height multiplies steel by $4$ and capacity by $8$, and $4<8$. Steel use grows more slowly than capacity as height rises. The leftover comparison is $2<3$, not a table lookup.",
      "**B.** → True\n\nA four-metre silo is a doubling of the two-metre reference, so capacity multiplies by $8$: $V(4)=64$, which sits above $60$. Eight cubic metres times eight is sixty-four. Linear scaling would have claimed $16$ and missed the cube.",
      "**C.** → True\n\nThe overview already composed $S=3V^{\\frac{2}{3}}$. Eliminating $h$ between a square and a cube leaves a two-thirds power of capacity. Steel as a function of capacity is still a monomial. Geometric similarity is why that composition stays a power.",
      "**D.** → False\n\nTwo separate $2$ m silos use $2\\cdot 12=24$ m$^{2}$ of steel; one $4$ m silo uses $S(4)=48$. The pair uses half the steel of the single large silo. Area scaling with $h^{2}$ makes one doubled silo four times one small skin, not twice two skins.",
      "**E.** → False\n\nAn eight-metre silo needs $S(8)=192$, which is not more than $200$. Eight squared is $64$, times $3$. Four times the four-metre skin of $48$ is $192$, the square factor again. The $200$ cutoff is a near miss.",
    ],
  },
  "math-8-49": {
    tacticals: [
      "**A.** → False\n\nInspection time is a square root, exponent $\\frac{1}{2}\\neq 1$. The logged move from $4$ to $36$ shipments is a ninefold consignment and only a threefold time, $9^{\\frac{1}{2}}=3$. Extra shipments add less time than the ones before them. Proportionality would have required lockstep.",
      "**B.** → True\n\nThe overview already inverted the $40$-hour ceiling to $n=100$, which sits below $110$. Ten squared is $100$. Every larger consignment overshoots forty hours, so the ceiling is already binding below $110$ shipments.",
      "**C.** → False\n\nA $121$-shipment consignment takes $T(121)=44$ hours, which exceeds the $40$-hour staff. Extra shipments add less than they used to, but they do not add almost nothing: eleven extra hours past $n=100$ still break the ceiling. Diminishing is not vanishing.",
      "**D.** → True\n\nQuadrupling is $k=4$, and $4^{\\frac{1}{2}}=2$. The square root of four is two, so quadrupling the consignment doubles inspection time. That is the same identity that made a ninefold consignment take threefold time in A.",
      "**E.** → False\n\nA $49$-shipment consignment takes $T(49)=28$ hours, which is not more than $30$. Forty-nine is $7^{2}$, times $4$ is $28$. The $30$-hour cutoff is a near miss on that perfect square.",
    ],
  },
  "math-8-50": {
    tacticals: [
      "**A.** → True\n\nIdentity $(1)$ already gives $2^{-2}=\\frac{1}{4}$. The coefficient cancels, so doubling distance quarters illuminance at every starting range. Inverse-linear thinking would have claimed a half. The logged move from $2$ m to $4$ m is that same doubling.",
      "**B.** → True\n\nThe overview already lists $I(5)=32$, which sits under $40$. Five squared is $25$, and $800/25=32$. Linear interpolation between $2$ m and $4$ m would have missed how fast an inverse square has already fallen by five metres.",
      "**C.** → False\n\nThe slope $I'(d)=-1600d^{-3}$ has size $200$ at $2$ m and only $25$ at $4$ m. An extra metre cuts more illuminance nearer the lamp, not farther away. Inverse-square drops are steepest at the source.",
      "**D.** → False\n\nThe overview already inverted to $d=\\sqrt{800}\\,I^{-\\frac{1}{2}}$. A nonzero power inverts to another power. Falling along the curve does not stop the inverse from being a monomial in $I$. \"Not a power because it falls\" confuses monotonicity with algebraic form.",
      "**E.** → False\n\nAt $3$ m the reading is $\\frac{800}{9}\\approx 88.89$, which is already below $90$. Nine in the denominator is $3^{2}$. The claimed \"still above $90$\" is a round overestimate of $800/9$.",
    ],
  },
};

const r = applyFile(new URL("./41_50.json", import.meta.url), patches);
console.log(r);
