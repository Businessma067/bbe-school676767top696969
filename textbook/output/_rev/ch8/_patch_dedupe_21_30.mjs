import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-21": {
    tacticals: [
      "**A.** → True\n\nDemand is $q(p)=10000p^{-2}$, so an extra euro is the slope $q'(p)=-20000p^{-3}$. At $5$ euros that cut is $160$ subscriptions; at $20$ euros it is only $2.5$. A more negative leftover exponent makes the drop steeper at the low price. Later euros still lose subscribers, but far fewer of them.",
      "**B.** → True\n\nThe overview already recovered $q=10000p^{-2}$. Solving for price raises both sides to $-\\frac{1}{2}$:\n\n$$p=100q^{-\\frac{1}{2}}$$\n\nA nonzero power inverts to another power. Falling demand does not stop the inverse from being a monomial in $q$.",
      "**C.** → False\n\nDoubling price would halve demand only if the exponent were $-1$. With $-2$ the factor is $2^{-2}=\\frac{1}{4}$. Inverse-linear thinking is the trap; an inverse square quarters the subscribers when the price doubles.",
      "**D.** → True\n\nThe overview already lists $R(16)=625$, which sits under $700$. Revenue is $R=\\frac{10000}{p}$, so sixteen euros into $10000$ is $625$. Treating revenue as $pq$ with the original $q(5)=400$ held fixed would have claimed $6400$ and missed that quantity collapses.",
      "**E.** → True\n\nThe overview already lists $q(20)=25$, which is fewer than $30$. Twenty euros is four times the logged $5$, so inverse-square demand is $\\frac{1}{16}$ of $400$, namely $25$. Linear scaling would have claimed $100$ and missed the letter.",
    ],
  },
  "math-8-22": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $F=200$ and $C(n)=200+30\\sqrt{n}$. A power of the account count cannot carry a leftover constant. At zero accounts the firm still bills the engagement fee, which kills the through-the-origin shape.",
      "**B.** → True\n\nCost per account is $\\frac{200}{n}+30n^{-\\frac{1}{2}}$. Both pieces fall as the book grows: the fee is spread, and the leftover exponent on the square-root term is negative. Falling unit cost is compatible with a rising total bill.",
      "**C.** → True\n\nThe slope $C'(n)=15n^{-\\frac{1}{2}}$ is $\\frac{3}{2}$ at one hundred accounts and $\\frac{3}{4}$ at four hundred. An extra account adds more on the smaller book. A square-root fee flattens: later accounts are cheaper to add, not dearer.",
      "**D.** → True\n\nThe overview already lists $C(900)=1100$, which sits above $1000$. Nine hundred accounts contribute a square root of $30$, so $200+900=1100$. Dropping the retainer would have claimed $900$ and missed the floor.",
      "**E.** → False\n\nThe overview already lists $C(200)\\approx 624$, which sits below $750$. Two hundred accounts contribute $10\\sqrt{2}\\approx 14.14$, times $30$ is about $424$, plus the $200$ retainer. The claimed $750$ is closer to costing this book as if it were linear from the $100$-account invoice.",
    ],
  },
  "math-8-23": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $E(t)=240t^{\\frac{1}{4}}$. Fleet growth $t^{\\frac{1}{2}}$ times intensity $a^{-\\frac{1}{2}}$ leaves a positive leftover $t^{\\frac{1}{4}}$. A product of powers of the same clock is again a power. Stopping after the first stage would have left emissions looking like $t^{\\frac{1}{2}}$.",
      "**B.** → False\n\nDoubling time would double emissions only if the composed exponent were $1$. The factor is $2^{\\frac{1}{4}}\\approx 1.19$, about a $19\\%$ rise, not $100\\%$. Intensity falling as the fleet grows is what slows the total.",
      "**C.** → False\n\nIntensity is $e(a)=120a^{-\\frac{1}{2}}$, and $-\\frac{1}{2}<0$, so grams per thousand vehicles fall as the fleet grows. A rising intensity would need a positive exponent. Total emissions in A can still rise while intensity falls.",
      "**D.** → True\n\nThe overview already lists $E(16)=480$, which exceeds $400$. Sixteen years contribute a fourth root of $2$, and $240\\cdot 2=480$. Using $t^{\\frac{1}{2}}$ instead of $t^{\\frac{1}{4}}$ would have claimed $960$ and overshot.",
      "**E.** → True\n\nAt $t=1$ every power is $1$, so $E(1)=240$, which sits under $250$. That is the coefficient itself, the same unit-time trick as $M(1)$ on a mass table. The first-year total has not yet grown.",
    ],
  },
  "math-8-24": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered exponent $\\frac{5}{2}$, which sits above one. Each extra centimetre of diameter adds more capacity than the centimetre before it. A proportional pipe would have carried exponent $1$. Two and a half is well above that.",
      "**B.** → False\n\nTo double capacity the diameter factor is $2^{\\frac{2}{5}}\\approx 1.32$, less than $2$. Because the exponent exceeds one, capacity outruns diameter, so a less-than-doubling of width already doubles flow. The trap is inverting as if $r>1$ meant \"need more than double the input\".",
      "**C.** → True\n\nThe overview already inverted to $d=(Q/2)^{\\frac{2}{5}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{5}{2}$. Diameter needed for a target capacity is still a monomial in $Q$.",
      "**D.** → False\n\nThe overview already inverted $Q=250$ to $d\\approx 6.90$ cm, which sits below $10$. A $10$ cm guess is what a linear scaling from the $4$ cm bench at $64$ L/s would invent. The $\\frac{5}{2}$ exponent gets you there with a much smaller bore.",
      "**E.** → True\n\nThe overview already listed the doubling factor $4\\sqrt{2}\\approx 5.66$, which sits above $5$. Exponent $\\frac{5}{2}$ on a factor of $2$ is $2^{2}\\cdot\\sqrt{2}=4\\sqrt{2}$. Claiming only $4$ would have dropped the leftover square root.",
    ],
  },
  "math-8-25": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $S(t)=9\\pi t$. The radius is a square root of time, and area squares that root, so the clock comes back with exponent $1$. Area grows in lockstep with elapsed time. Stopping at radius would have left a square-root story.",
      "**B.** → True\n\nBecause the composed exponent is $1$, doubling time doubles area: $\\frac{S(2t)}{S(t)}=2$. Radius itself only grows by $\\sqrt{2}$, but the disc squares that factor into $2$. The trap is reporting the radius factor as if it were the area factor.",
      "**C.** → True\n\nA linear law inverts to another linear law: $t=\\frac{S}{9\\pi}$, which is $S^{1}$ times a constant. Time needed for a given area is still a power of that area, here exponent $1$. Inversion does not introduce a logarithm when the forward map is a monomial.",
      "**D.** → True\n\nThe overview already lists $S(4)=36\\pi$, which sits above $30\\pi$. Four hours at $9\\pi$ per hour is $36\\pi$. Using $\\pi r^{2}$ with the logged radius $6$ is the same check: $36\\pi$.",
      "**E.** → False\n\nThe overview already lists $S(9)=81\\pi$, which sits below $100\\pi$. Nine hours at $9\\pi$ per hour is $81\\pi$. Reaching $100\\pi$ would need $t=\\frac{100}{9}\\approx 11.1$ hours. Nine hours is too soon.",
    ],
  },
  "math-8-26": {
    tacticals: [
      "**A.** → True\n\nAt $64$ tickets both plans bill $320$, and $320<400$. The overview already placed the crossing at $u=64$ and the cap at $u=100$, so this volume is the meeting point with the cap still slack. Reading $64$ as if it were $8^{2}$ in the cap formula $10^{2}=100$ is the mix-up.",
      "**B.** → True\n\nBelow $u=64$ the linear Plan B starts at zero and has not yet caught the square root, so $5u<40\\sqrt{u}$. The cheaper contract on a small desk is the per-ticket line, not the square-root plan. Past the crossing that ranking flips.",
      "**C.** → True\n\nThe overview already solved $40\\sqrt{u}=400$ at $u=100$. Every volume above $100$ tickets is trimmed to $400$. A square root grows without bound, so a finite cap must bind at a finite volume.",
      "**D.** → True\n\nPlan A's uncapped unit cost is $40u^{-\\frac{1}{2}}$, which falls. Once the cap binds, billed cost is the constant $400$, and $400/u$ also falls. Either side of $u=100$, cost per ticket declines as volume rises.",
      "**E.** → False\n\nAt $144$ tickets the uncapped square root would be $40\\cdot 12=480$, but the cap already binds, so Plan A bills $400$, not more than $450$. The claimed $450$ sits above the cap. Forgetting the min is the trap.",
    ],
  },
  "math-8-27": {
    tacticals: [
      "**A.** → True\n\nUnit cost is $c(N)=1000N^{-b}$ with $b>0$, so an extra unit is the slope $c'(N)=-1000b N^{-b-1}$. The size of that cut is smaller by the factor $8^{b+1}>1$ after eight units than after the first. A learning curve is steepest at the start.",
      "**B.** → False\n\nQuadrupling is two doublings, so the factor is $0.8^{2}=0.64$, not $\\frac{1}{2}$. A halving would need two factors whose product is $0.5$. The $80\\%$ curve does not drop that fast in two steps.",
      "**C.** → True\n\nThe doubling factor $0.8$ is larger than $\\frac{1}{2}$, so $b$ is shallower than $1$. Unit cost falls, but more slowly than a reciprocal of cumulative output. Inverse-linear learning would have halved cost on every doubling.",
      "**D.** → True\n\nThree successive doublings from $c(1)=1000$ are already in the overview: $800$, $640$, then $c(8)=512$, which sits under $520$. Each step multiplies by $0.8$; no new logarithm is required. The figure $520$ is a near miss on $512$.",
      "**E.** → False\n\nThe overview already lists $c(16)=409.6$, still above the $400$ materials floor. Four doublings are $0.8^{4}=0.4096$, times $1000$. The floor has not bound yet. Claiming \"already under $400$\" treats the floor as if it had already replaced the power.",
    ],
  },
  "math-8-28": {
    tacticals: [
      "**A.** → False\n\nDoubling spend would double revenue only if the exponent were $1$. The factor is $2^{\\frac{1}{2}}\\approx 1.41$, not $2$. A square-root campaign will not keep pace with the budget. Linear thinking is the trap.",
      "**B.** → True\n\nRevenue per euro is $90x^{-\\frac{1}{2}}$, a negative leftover power, so the return per euro falls as the campaign grows. Each extra euro still adds sales, but less than the euro before it. Falling average product is the $r<1$ story.",
      "**C.** → True\n\nThe overview already factored $N(x)=6\\sqrt{x}(15-\\sqrt{x})$. The only positive root is $x=225$. Past that root the second factor is negative and stays negative, because $\\sqrt{x}$ keeps growing. Once net gain has turned negative it cannot come back.",
      "**D.** → True\n\nThe overview already lists $N(100)=300$, which sits above $250$. Logged revenue $900$ minus the fee $6\\cdot 100=600$ is $300$. Using revenue in place of net would have claimed $900$ and overshot the letter.",
      "**E.** → False\n\nThe overview already lists $N(256)=-96$. Spend $256$ sits past the crossing at $225$, so the net is negative, not still positive. Sixteen squared is $256$, and $90\\cdot 16-6\\cdot 256=1440-1536$. The campaign has already gone too far.",
    ],
  },
  "math-8-29": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $m(L)=4L^{\\frac{1}{2}}$. One half sits below one, so each extra hour adds less material than the hour before it. Material grows, but more slowly than labour. A proportional mill would have carried exponent $1$.",
      "**B.** → False\n\nThe composed output is $g=16L^{\\frac{3}{4}}$. Doubling labour multiplies finished goods by $2^{\\frac{3}{4}}\\approx 1.68$, not $2$. Both stages sit below exponent $1$, so the chain still lags labour. Linear thinking at either stage is the trap.",
      "**C.** → True\n\nFinished output per hour is $16L^{-\\frac{1}{4}}$, a negative leftover power, so average product falls as the crew grows. The composed exponent $\\frac{3}{4}<1$ is enough: extra hours still add units, but fewer per hour.",
      "**D.** → True\n\nThe overview already inverted to $L=(g/16)^{\\frac{4}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{3}{4}$. Labour needed for a target count is still a monomial in $g$.",
      "**E.** → True\n\nThe overview already lists $g(81)=432$, which sits above $400$. Eighty-one is $3^{4}$, so the three-quarters power is $3^{3}=27$, times $16$ is $432$. Using $L^{\\frac{1}{2}}$ alone would have claimed far less.",
    ],
  },
  "math-8-30": {
    tacticals: [
      "**A.** → True\n\nRevenue is already $R(p)=2000p^{-\\frac{1}{2}}$. Solving for price squares the reciprocal: $p=(2000/R)^{2}$. A nonzero power inverts to another power. The price needed for a given revenue is still a monomial in $R$.",
      "**B.** → False\n\nDoubling price would halve revenue only if the leftover exponent were $-1$. With $-\\frac{1}{2}$ the factor is $2^{-\\frac{1}{2}}\\approx 0.71$, a cut to about $71\\%$, not to one half. Inverse-linear thinking overstates how fast revenue falls.",
      "**C.** → True\n\nThe leftover exponent $-\\frac{1}{2}$ is negative, so $R(p)$ falls as $p$ rises. Quantity falls fast enough, exponent $-\\frac{3}{2}$, that the product $pq$ still shrinks. Elastic demand is why a price rise cuts revenue here.",
      "**D.** → True\n\nThe overview already lists $R(25)=400$, which sits under $450$. Twenty-five euros contribute a square root of $5$, and $2000/5=400$. That is also the exact cover of the $400$ charge, a coincidence this letter is not asking about.",
      "**E.** → False\n\nThe overview already solved the cover as $p\\le 25$, not $p<16$. At $p=16$, $R(16)=500$, which still exceeds $400$. The charge is covered at prices up to $25$. Claiming only below $16$ invents a tighter bound.",
    ],
  },
};

const r = applyFile(new URL("./21_30.json", import.meta.url), patches);
console.log(r);
