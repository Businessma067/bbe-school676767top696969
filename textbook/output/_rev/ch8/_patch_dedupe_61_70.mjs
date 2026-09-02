import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-61": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $k=\\frac{3}{2}>1$. Each extra ampere adds more strength than the ampere before it. The logged ratio $\\frac{135}{40}=\\frac{27}{8}$ is $(\\frac{3}{2})^{3}$ against a current ratio $(\\frac{3}{2})^{2}$, which is the same $k=\\frac{3}{2}$. Strength outruns current.",
      "**B.** → True\n\nThe overview already lists $S(16)=320$, which sits above $300$. Sixteen is $2^{4}$, so the three-halves power is $2^{6}=64$, times $5$. A square-law guess from $S(4)=40$ would have claimed $40\\cdot 16=640$ and overshot.",
      "**C.** → True\n\nInverting $S=5p^{\\frac{3}{2}}$ gives $p=(S/5)^{\\frac{2}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{3}{2}$. Current needed for a given strength is still a monomial in $S$.",
      "**D.** → False\n\nThe slope $S'(p)=\\frac{15}{2}\\sqrt{p}$ is $15$ at $4$ A and $\\frac{45}{2}$ at $9$ A. Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A. An exponent above one makes later amperes more productive, not less.",
      "**E.** → False\n\nThe overview already inverted the $400$ N line to $p=80^{\\frac{2}{3}}\\approx 18.57$ A, which is not below $18$. At $18$ A the weld is still short of $400$ N. The smallest clearing current sits just past eighteen amperes.",
    ],
  },
  "math-8-62": {
    tacticals: [
      "**A.** → False\n\nTwo $8$ kg buoys hold $2H(8)=48$ kN; one $64$ kg buoy holds $H(64)=96$ kN. Because $\\frac{2}{3}<1$, merging mass raises total hold. Two small buoys fall short of one large one. Superlinear merging would have needed $r>1$.",
      "**B.** → True\n\nThe overview's storm mass is $125$ kg, and $H(125)=150$, which sits above $140$. One hundred and twenty-five is $5^{3}$, so the two-thirds power is $25$, times $6$. The storm floor itself already clears $140$ kN.",
      "**C.** → False\n\nDoubling mass multiplies hold by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Holding power rises, but not in lockstep with mass. Linear thinking is the trap.",
      "**D.** → True\n\nInverting $H=6m^{\\frac{2}{3}}$ gives $m=(H/6)^{\\frac{3}{2}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{2}{3}$. Mass needed for a given hold is still a monomial in $H$.",
      "**E.** → False\n\nReaching $150$ kN takes $125$ kg, which is $0.125$ tonnes, not more than $1$ tonne. The overview already listed that storm mass. Mixing kilograms with tonnes without the $1000^{\\frac{2}{3}}$ rescaling is how a one-tonne claim appears.",
    ],
  },
  "math-8-63": {
    tacticals: [
      "**A.** → True\n\nThe overview already inverted to $d=\\sqrt{800}\\,T^{-\\frac{1}{2}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-2$. Hop distance needed for a given throughput is still a monomial in $T$.",
      "**B.** → True\n\nThe overview already placed the reliable radius at $d=10$ m, which sits under $12$. Inverse-square throughput hits $8$ Mbps at ten metres, and every longer hop is slower. Ten metres already sit under twelve.",
      "**C.** → False\n\nDoubling the hop would halve throughput only if the exponent were $-1$. With $-2$ the factor is $\\frac{1}{4}$. An inverse-square law quarters the reading when distance doubles. Inverse-linear thinking is the trap.",
      "**D.** → False\n\nAt $d=11$, $T(11)=\\frac{800}{121}\\approx 6.61$, which sits below $8$. The reliable radius is $10$ m; a longer hop can only be slower. Eleven metres already misses the floor.",
      "**E.** → False\n\nThe slope $T'(d)=-1600d^{-3}$ has size $25$ at $4$ m and $\\frac{25}{8}$ at $8$ m. An extra metre cuts more throughput on the short hop, not on the long one. Inverse-square drops are steepest at the near end.",
    ],
  },
  "math-8-64": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered exponent $\\frac{3}{4}<1$. Each extra gram of body adds less gill than the gram before it. Gill area grows, but more slowly than body mass. A proportional law would have carried exponent $1$.",
      "**B.** → True\n\nThe overview already lists $G(16)=64$, which sits above $50$. Sixteen is $2^{4}$, so the three-quarters power is $2^{3}=8$, times $8$ is $64$. A linear scaling from $G(256)=512$ would have claimed $32$ and missed the letter.",
      "**C.** → False\n\nGill area per gram is $8m^{-\\frac{1}{4}}$, a negative leftover power, so intensity falls as mass grows. A constant intensity would need leftover exponent $0$. Allometric area does not stay in proportion to mass.",
      "**D.** → False\n\nDoubling mass multiplies gill area by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Area rises, but not in lockstep with mass. The same $r<1$ that made A true makes this doubling false.",
      "**E.** → False\n\nA $64$ g fish has $G(64)=128\\sqrt{2}\\approx 181$, which sits short of $200$. Sixty-four is $2^{6}$, so the three-quarters power is $2^{\\frac{9}{2}}=16\\sqrt{2}$. The three-quarters power has grown, but not as far as the named area.",
    ],
  },
  "math-8-65": {
    tacticals: [
      "**A.** → True\n\nIdentity $(2)$ already gives $\\sqrt{4}=2$. Quadrupling curing time doubles strength at every starting day, because the coefficient cancels. A square-root clock turns a fourfold wait into a twofold reading. Linear thinking would have expected a fourfold strength as well.",
      "**B.** → True\n\nThe overview already lists $S(4)=10$, which sits above $8$. Square root of $4$ is $2$, times $5$. Together with $S(9)=15$, the logged gap $15-10=5$ is recovered. Ten megapascals already sit above eight.",
      "**C.** → False\n\nThe slope $S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}$ is $\\frac{5}{4}$ after four days and $\\frac{5}{6}$ after nine. An extra day adds more after four days than after nine, not the other way around. A square root flattens.",
      "**D.** → True\n\nThe overview already inverted $30$ MPa to $t=36$ days, which sits under $40$. Square both sides of $5\\sqrt{t}=30$. The square-root clock is slower than a linear guess, so the target arrives before day $40$.",
      "**E.** → False\n\nThe recorded $5$ MPa is the gap $S(9)-S(4)=15-10$, not the day $9$ level. Day $9$ is $15$ MPa. Treating a difference of two readings as a single level is the trap named in the title.",
    ],
  },
  "math-8-66": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $k=2>1$ from the trusted pair. A width factor $c>1$ then multiplies deflection by $c^{2}$, which exceeds $c$. Deflection outruns span. The integer $2$ is a square law, not a coincidence of the $3$ m and $6$ m runs.",
      "**B.** → True\n\nThe trusted quadratic already puts $y(9)=162$, which sits above $155$. Nine squared is $81$, times $2$. The questionable third run of $150$ is a different number; this letter asks what the trusted pair predicts, not what was recorded.",
      "**C.** → False\n\nDoubling span multiplies deflection by $2^{2}=4$, not by $2$. The trusted move from $3$ m to $6$ m already did that: $18$ mm became $72$ mm. Deflection quadruples. Linear thinking is the trap.",
      "**D.** → True\n\nPredicted $162$ mm minus recorded $150$ mm is a $12$ mm shortfall, which is more than $10$. The third run sits below the trusted quadratic. A $10$ mm tolerance would still flag this gap.",
      "**E.** → False\n\nThe third run would sit on the trusted law only if $\\frac{150}{18}=3^{2}$, but $\\frac{25}{3}\\approx 8.33\\neq 9$. The third run does not sit on the same power law. That is the same $12$ mm shortfall as D, read as a ratio rather than as a millimetre gap.",
    ],
  },
  "math-8-67": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $k=3$ from $1.2^{3}=1.728$. Three is larger than one, so mass outruns height. The percentage rule alone isolates the exponent because the coefficient cancels. A proportional mast would have returned $1.2^{1}=1.2$, a $20\\%$ rise.",
      "**B.** → True\n\nA $12$ m mast is a $20\\%$ stretch of the $10$ m reference, so $M(12)=500\\cdot 1.728=864$, which sits above $800$. The same $0.5\\cdot 12^{3}=864$ uses the recovered coefficient. Eight hundred and sixty-four kilograms already sit above eight hundred.",
      "**C.** → False\n\nIn the ratio $\\frac{M(1.2h)}{M(h)}=1.2^{k}$ the coefficient $A$ cancels, so the percentage rule cannot pin $A$. The $10$ m reference is the level that pins $A$. Scale information cannot substitute for a level.",
      "**D.** → True\n\nA $10\\%$ stretch is $1.1^{3}=1.331$, a $33.1\\%$ mass rise, which sits above $30\\%$. Percent changes pass through the exponent: a relative change of $10\\%$ in height becomes about $33\\%$ in a cube. Linear percentage thinking would have claimed $10\\%$ or $30\\%$.",
      "**E.** → False\n\nA $20\\%$ height increase raises mass by $72.8\\%$, not by $20\\%$. That is the design note itself: $1.2^{3}=1.728$. Height and mass do not move in lockstep when the exponent is $3$.",
    ],
  },
  "math-8-68": {
    tacticals: [
      "**A.** → True\n\nIdentity $(1)$ already gives $2^{-2}=\\frac{1}{4}$. Doubling distance quarters intensity at every starting range. Inverse-linear thinking would have claimed a half. Inverse square is steeper than inverse proportion.",
      "**B.** → True\n\nAt $4$ m, $I(4)=\\frac{2.88}{16}=0.18$, which sits under $0.2$. Four metres is a doubling of the $2$ m survey, so intensity is a quarter of $0.72$. That is the same identity as A, read as a level.",
      "**C.** → True\n\nThe overview already listed $I'(d)=-5.76 d^{-3}$. The size of that cut is $0.72$ at $2$ m and about $0.027$ at $6$ m. An extra metre cuts more intensity near the hub. Inverse-square drops are front-loaded.",
      "**D.** → False\n\nAt $6$ m, $I(6)=0.08$, which equals the night cap rather than sitting above it. The claim wants a reading still above $0.08$; equality is not above. The cap is met exactly at six metres.",
      "**E.** → False\n\nAn inverse square falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance, namely $d=6$. The cap is met at six metres. \"Never met\" would need a floor above $0.08$, which this formula does not have.",
    ],
  },
  "math-8-69": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $v(q)=4\\sqrt{2}\\,q$. Head is a square of flow, jet speed is a square root of head, and $2\\cdot\\frac{1}{2}=1$. The leftover exponent is $1$, a line through the origin. Jet speed is proportional to flow.",
      "**B.** → True\n\nAt $q=5$, $v=20\\sqrt{2}>28$ because $\\sqrt{2}>1.4$. The overview already listed $v(5)=20\\sqrt{2}$. Using $4\\sqrt{50}$ is the same check. Jet speed already sits above twenty-eight metres per second.",
      "**C.** → False\n\nDoubling flow multiplies head by $2^{2}=4$, not by $2$. An exact doubling of head would need exponent $1$. The claim is about $H$, not about the composed speed in A. Head quadruples.",
      "**D.** → True\n\nThe overview already inverted $40\\sqrt{2}$ m/s to $q=10$, which sits under $12$. Because speed is proportional to flow after both stages, twice $v(5)=20\\sqrt{2}$ needs twice the flow. The target needs $10$ m$^{3}$/h.",
      "**E.** → False\n\nEliminating $q$ gives $H=\\frac{v^{2}}{16}$, a square of jet speed, not a constant multiple of it. Doubling jet speed quadruples the head. Proportionality would have needed leftover exponent $1$ on $v$, not $2$.",
    ],
  },
  "math-8-70": {
    tacticals: [
      "**A.** → True\n\nTo double throughput, $k^{\\frac{1}{2}}=2$ forces $k=4$. The yard needs four times the crew, not twice. That is more than a doubling. A square-root warehouse will not keep pace with headcount.",
      "**B.** → True\n\nThe overview already lists $T(36)=120$, which sits above $110$. Thirty-six drivers contribute a square root of $6$, times $20$. The safety cap of $36$ drivers is also this level, which already clears one hundred and ten pallets.",
      "**C.** → False\n\nThroughput per driver is $20s^{-\\frac{1}{2}}$, a negative leftover power, so intensity falls as the crew grows. A rising intensity would need a positive leftover exponent. Extra drivers still add pallets, but fewer per driver.",
      "**D.** → False\n\nThe overview already inverted $150$ pallets to $s=56.25$ drivers, which sits past the $36$-driver cap. The capped shift delivers only $120$ pallets per hour. Reaching $150$ lies outside the safety cap.",
      "**E.** → True\n\nThe slope $T'(s)=10s^{-\\frac{1}{2}}$ stays positive, so throughput rises with crew all the way to the cap. At $s=36$, $T=120$, and no larger legal crew exists. The driver cap is therefore also a cap on pallets moved per hour.",
    ],
  },
};

const r = applyFile(new URL("./61_70.json", import.meta.url), patches);
console.log(r);
