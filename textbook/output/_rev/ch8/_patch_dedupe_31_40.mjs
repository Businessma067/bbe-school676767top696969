import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-31": {
    tacticals: [
      "**A.** → True\n\nOutput is $N(h)=18h^{\\frac{2}{3}}$, so an extra hour is the slope $N'(h)=12h^{-\\frac{1}{3}}$. After eight hours that is $6$ items; after twenty-seven hours it is $4$. The leftover exponent is negative, so later hours pack less, not more. A two-thirds power flattens.",
      "**B.** → False\n\nThe overview already listed the doubling factor $2^{\\frac{2}{3}}\\approx 1.59$, not $2$. Doubling any shift would double the count only if the exponent were $1$. The station will not keep pace with the clock.",
      "**C.** → True\n\nItems per hour are $18h^{-\\frac{1}{3}}$. At eight hours that average is $9$; at twenty-seven hours it is $6$. The leftover power is negative, so average product declines with the shift. Falling average and falling marginal in A are the same $r<1$ story.",
      "**D.** → True\n\nThe overview already lists $N(27)=162$, which sits above $150$. Twenty-seven hours contribute $27^{\\frac{2}{3}}=9$, times $18$ is $162$. That is also $72+90$, the short shift plus the logged gain, a check that $A$ came from a difference of two levels.",
      "**E.** → False\n\nThe overview already inverted the $250$-item order to $h\\approx 51.8$ hours, which sits past $40$. A two-thirds power has to run a long way to add the remaining items. The rush order does not fit in a shift under $40$ hours.",
    ],
  },
  "math-8-32": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $P(v)=2v^{\\frac{5}{2}}$. Drag times speed adds one to the exponent, and a monomial remains a monomial. Power grows even faster than drag, but it is still a power of airspeed. Stopping at $F$ would have left exponent $\\frac{3}{2}$.",
      "**B.** → False\n\nDoubling airspeed multiplies drag by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, which is less than $3$. The exponent sits between $1$ and $2$, so a doubling more than doubles drag and does not yet triple it. \"More than triples\" overshoots that factor.",
      "**C.** → True\n\nThe overview already inverted to $v=(F/2)^{\\frac{2}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{3}{2}$. Airspeed needed for a given drag is still a monomial in $F$.",
      "**D.** → False\n\nThe overview already inverted the $250$ N rating to $v=25$ m/s, which sits $5$ below $30$, not above it. The mounting hits $250$ N at twenty-five metres per second. A $30$ m/s claim is a round overshoot.",
      "**E.** → True\n\nAt $16$ m/s the overview's drag is $128$ N, so absorbed power is $128\\cdot 16=2048$ W, which sits above $2$ kW. Using $P=2v^{\\frac{5}{2}}$ is the same check: $2\\cdot 16^{\\frac{5}{2}}=2048$. The faster run already clears two kilowatts.",
    ],
  },
  "math-8-33": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $R(p)=1200p^{\\frac{1}{2}}$. The leftover exponent is positive, so revenue rises as the price rises. Inelastic demand, exponent $-\\frac{1}{2}$, means quantity falls too slowly to drag the product $pq$ down.",
      "**B.** → False\n\nQuantity falling is not enough to drag revenue down when demand is inelastic. The same $R(p)=1200\\sqrt{p}$ climbs: $R(16)=4800$ and $R(25)=6000$. \"Quantity down, so revenue down\" forgets that price itself is the other factor in $pq$.",
      "**C.** → True\n\nThe overview already inverted to $p=1440000\\,q^{-2}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-\\frac{1}{2}$, namely $-2$. Price needed for a given quantity is still a monomial in $q$.",
      "**D.** → True\n\nThe overview already lists $q(25)=240$, which sits under $250$. Twenty-five euros contribute a square root of $5$, and $1200/5=240$. Linear scaling from $q(16)=300$ would have claimed $240$ only by luck; the square-root rule is what forces it.",
      "**E.** → False\n\nCutting quantity to $200$ inverts to $p=36$, which sits below $40$. The overview already listed $q(36)=200$. A price above $40$ would cut quantity further than $200$. The required price is $36$, not above $40$.",
    ],
  },
  "math-8-34": {
    tacticals: [
      "**A.** → False\n\nTo double output the feed factor is $2^{\\frac{3}{4}}\\approx 1.68$, less than $2$. Because $\\frac{4}{3}>1$, output outruns feed, so a less-than-doubling of fuel already doubles tonnes. The trap is inverting as if $r>1$ meant \"need more than double the input\".",
      "**B.** → True\n\nOutput per cubic metre is $4x^{\\frac{1}{3}}$, a positive leftover power, so average product rises with feed. Fuel efficiency improves with scale when the exponent exceeds one. A falling intensity would have needed $r<1$.",
      "**C.** → True\n\nThe overview already placed the licence ceiling at feed $x=64$, where $y=1024$. Past that feed, shipped output is the constant $1024$, not $4x^{\\frac{4}{3}}$. A horizontal cap is not a single power of the feed.",
      "**D.** → True\n\nThe overview already lists $y(8)=64$, which sits above $50$. Eight cubic metres contribute $8^{\\frac{4}{3}}=16$, times $4$ is $64$. Cube root first, then a fourth power of $2$, is the fractional-power order.",
      "**E.** → False\n\nThe licence binds at $x=64$, which sits past $50$, not before it. At a feed of $50$ the kiln is still under $1024$ tonnes. The cap is a $64$ m$^{3}$ story, not a $50$ m$^{3}$ story.",
    ],
  },
  "math-8-35": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $g(f(x))=x$. The inner exponent $\\frac{2}{3}$ and the outer $\\frac{3}{2}$ multiply to $1$, and the coefficients $9$ and $\\frac{1}{27}$ cancel. Reporting after calibration is the identity, not a residual power.",
      "**B.** → False\n\nThe leftover exponent is $\\frac{2}{3}\\cdot\\frac{3}{2}=1$, so the composition grows in lockstep with the reading, not more slowly. \"Grows more slowly\" would need a product of exponents below one. These two stages were built as inverses.",
      "**C.** → False\n\nThe overview already composed $f(g(y))=y$ as well. Each stage is the inverse of the other on the positive reals, so the order does not matter for recovery. Claiming that the other order fails treats one-sided inverses as if they were not two-sided here.",
      "**D.** → True\n\nThe overview already lists $f(64)=144$, which sits above $140$. Sixty-four contributes $64^{\\frac{2}{3}}=16$, times $9$ is $144$. Using $g$ on $64$ instead of $f$ would have returned a much smaller index.",
      "**E.** → False\n\nThe overview already lists $f(125)=225$, which sits above $200$, not under it. One hundred and twenty-five contributes $5^{2}=25$, times $9$ is $225$. The reading $125$ has already passed that mark.",
    ],
  },
  "math-8-36": {
    tacticals: [
      "**A.** → False\n\nThe overview already solved the unique crossing at $x=8$. On $x>0$ the ratio $\\frac{T}{S}=\\frac{x}{8}$ equals $1$ at a single root. Two different positive loads would require two roots of a linear leftover, which it does not have.",
      "**B.** → True\n\nPast $x=8$ the same ratio $\\frac{x}{8}$ exceeds $1$ and keeps climbing, so T stays ahead. S cannot catch it on the ray $x>8$. A second crossing would need the leftover power of $x$ to change sign, which a positive power cannot do.",
      "**C.** → False\n\nThe overview already listed $\\frac{T(4)}{S(4)}=\\frac{1}{2}$, then $1$ at the crossing, then $2$ at $x=16$. The exponents $\\frac{3}{2}$ and $\\frac{1}{2}$ differ, so the ratio cannot stay constant. A fixed multiple would need equal exponents.",
      "**D.** → True\n\nThe unique meeting is $x=8$, which sits two units past $6$. They have not met yet at $6$, so the first meeting is above that mark. Checking $x=6$ in the ratio gives $\\frac{6}{8}<1$, S still ahead.",
      "**E.** → True\n\nThe overview already lists $S(16)=32$ and $T(16)=64$, so the lead is $32$, which sits above $30$. Sixteen is a convenient fourth power: $8\\cdot 4=32$ against $4^{3}=64$. The gap equals S's own score at that load.",
    ],
  },
  "math-8-37": {
    tacticals: [
      "**A.** → True\n\nThe exponent $\\frac{4}{5}$ is positive, so uncapped capacity $C(m)=5m^{\\frac{4}{5}}$ keeps rising as machines are added. A certification cap may later bind billed traffic, but the sustained-capacity law itself is still increasing. Positive exponent, rising trace.",
      "**B.** → False\n\nAn exponent below one slows growth; it does not stop it. The overview already inverted the $500$ cap at $m\\approx 316$, and $C(1024)=1280$ is already over the contract. The ceiling is crossed at a finite fleet.",
      "**C.** → True\n\nThe overview already wrote $\\ln C=\\ln 5+\\frac{4}{5}\\ln m$. That is a straight line in log-log coordinates, slope equal to the exponent. The cap would bend the billed plot, but the statement is about the uncapped law.",
      "**D.** → True\n\nThe overview already lists $C(243)=405$, which sits above $400$. Two hundred and forty-three is $3^{5}$, so the four-fifths power is $3^{4}=81$, times $5$ is $405$. A round $400$ guess undershoots that exact fifth-power input.",
      "**E.** → False\n\nThe ceiling binds near $m\\approx 316$, which sits past $250$. At $250$ machines, $C\\approx 414$, still about $86$ requests below the contract. The cap is a three-hundred-machine story, not a two-hundred-and-fifty one.",
    ],
  },
  "math-8-38": {
    tacticals: [
      "**A.** → False\n\nNet gain is $\\Pi(L)=120\\sqrt{L}-6L$, a square root minus a line. Distinct powers cannot be combined into one monomial, and there is no way to absorb the wage into the revenue term. Net gain is not a power function of hours hired.",
      "**B.** → False\n\nThe overview already placed the peak at $L=100$, where $\\Pi=600$, and the zero at $L=400$. Those staffing levels are not the same. Setting the derivative to zero is a different equation from setting $\\Pi=0$.",
      "**C.** → True\n\nThe wage bill is $W(L)=6L=6L^{1}$, the power-function case of exponent $1$. A proportional charge is still a monomial. The trap is reserving the word \"power\" for fractional exponents and forgetting that $L^{1}$ counts.",
      "**D.** → True\n\nThe overview already lists $\\Pi(900)=-1800$, which sits below $-1000$. Thirty squared is $900$, revenue $120\\cdot 30=3600$, wage $5400$. A square-root revenue cannot keep up with a linear wage once hours are large.",
      "**E.** → True\n\nNet gain crosses zero at $L=400$, the only positive root, and $400$ sits past $300$. At $300$ hours the square root is still large enough for a surplus. The crossing is a four-hundred-hour story.",
    ],
  },
  "math-8-39": {
    tacticals: [
      "**A.** → False\n\nThe overview already listed a $20$-$40$ split at $600$, cheaper than concentrating in plant 2 at $900$ or in plant 1 at $1800$. Sending everything to one plant is not cheapest. Quadratic costs with different coefficients want more volume in the cheaper-coefficient plant, not all of it.",
      "**B.** → False\n\nTotal cost $\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}$ still depends on the split $q$, not only on the order size $60$. A single power of the $60$-unit order cannot depend on how the $60$ is shared. The two plants together are not a monomial in the order.",
      "**C.** → True\n\nPlant 2's cost per unit is $\\frac{1}{4}q$, a positive leftover power. Unit cost triples across a threefold run. A constant unit cost would have been a linear total, exponent $1$. The square makes extra units dearer.",
      "**D.** → True\n\nConcentrating in the cheaper plant still costs $C_{2}(60)=900$, which sits above $800$. Plant 2 is cheaper per squared unit than plant 1, but sixty squared is still $3600$, times $\\frac{1}{4}$ is $900$. Sending every unit there does not get under $800$.",
      "**E.** → True\n\nThe overview already listed the even split at $C(30)=675$, which sits under $700$. Half to each is $450+225=675$. That is better than all-in-one, though still not the $20$-$40$ minimum of $600$.",
    ],
  },
  "math-8-40": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $4^{r}=8$, so $r=\\frac{3}{2}$, and both logged points sit on $y=3x^{\\frac{3}{2}}$. The same scale factor $8$ fits the fourfold input and the eightfold response. They lie on one power law.",
      "**B.** → False\n\nExponent $2$ would have required $4^{2}=16$, but the logged ratio is $8$, not $16$. The two measurements do not fit a square. An integer-exponent guess is tempting and wrong.",
      "**C.** → False\n\nThe overview already checked $3\\cdot 9^{\\frac{3}{2}}=81$, matching the held-out point. The measurement at $x=9$ sits on the curve, so it does not contradict the fit. A contradiction would have been a different third reading.",
      "**D.** → True\n\nThe overview already listed $y(25)=375$, which sits above $350$. Twenty-five contributes $5^{3}=125$, times $3$ is $375$. A square-law prediction $A\\cdot 625$ would have been a different number entirely.",
      "**E.** → True\n\nThe same held-out evaluation is $y(9)=81$, which sits above $70$. Nine contributes $3^{3}=27$, times $3$ is $81$. This letter is the level that C used as a consistency check, read against a cutoff rather than against the recorded $81$.",
    ],
  },
};

const r = applyFile(new URL("./31_40.json", import.meta.url), patches);
console.log(r);
