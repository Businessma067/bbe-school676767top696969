import fs from "fs";
import { applyLetters, words } from "./_expand_apply.mjs";

const patches = {
  "math-8-61": [
    `**A.** → True

This letter is about whether strength outruns current, not about a named ampere setting. Two spot checks, $S(4)=40$ and $S(9)=135$, forced the overview's exponent $k=\\frac{3}{2}$. Three halves sits above one, so a current factor $c>1$ multiplies strength by $c^{\\frac{3}{2}}$, which exceeds $c$. Strength outruns current.

The coefficient $A=5$ cancels in any ratio, so a different pair of spot checks with the same current ratio would have told the same ranking.

**1.** A rushed solver who compared $135$ to $40$ as "about three times" against a current ratio of $9/4=2.25$ and called it roughly linear would have missed that $\\left(\\frac{3}{2}\\right)^{2k}=\\left(\\frac{3}{2}\\right)^{3}$ locks $k$ exactly at $\\frac{3}{2}$.

**2.** The opposite verdict would have needed $k\\le 1$. The two spot checks already refuse that.

The recovered exponent is $\\frac{3}{2}$, so the statement is True.`,

    `**B.** → True

This is a level question at $16$ A. The overview recovered $S(16)=320$. The claim asks whether that weld is already stronger than $300$ N.

Three hundred and twenty clears three hundred. Sixteen to the three-halves is $64$, times $5$ is $320$. From the $4$ A spot check of $40$ N, a fourfold current is an eightfold strength, $40\\cdot 8=320$, because $4^{\\frac{3}{2}}=8$.

**1.** A rushed solver who doubled $S(9)=135$ as if $16$ were twice $9$ would have claimed $270$, under $300$, and flipped the verdict. Sixteen is not twice nine, and the law is not linear.

**2.** The opposite verdict would have needed a smaller coefficient, so that $S(16)$ fell through $300$. At the recovered $A=5$, sixteen amperes is locked at $320$ N.

The recovered strength at $16$ A is $320$ N, so the statement is True.`,

    `**C.** → True

This letter inverts the strength law, rather than reading a named current. A nonzero power inverts to another power. The overview recovered $S=5p^{\\frac{3}{2}}$, so isolating current raises both sides to the reciprocal $\\frac{2}{3}$ and leaves $p=(S/5)^{\\frac{2}{3}}$. Current needed for a given strength is still a monomial in $S$.

**1.** Checking a recovered pair: at $S=40$ the inverse returns $p=4$. At $S=135$ it returns $p=9$. The inverse is faithful to the two spot checks.

**2.** A rushed solver who swapped the variables and kept exponent $\\frac{3}{2}$ would have written $p=5 S^{\\frac{3}{2}}$ and lost the reciprocal. The exponent must take the reciprocal.

The current needed for a given strength is itself a power of that strength, so the statement is True.`,

    `**D.** → False

This letter compares leftover slopes at the two spot-check currents. The overview recovered $S(p)=5p^{\\frac{3}{2}}$. Differentiating gives $S'(p)=\\frac{15}{2}\\sqrt{p}$. At $4$ A that is $15$. At $9$ A it is $\\frac{45}{2}$. Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A, not more. An exponent above one makes later amperes more productive, not less.

**1.** A finite one-ampere step agrees. From $4$ to $5$ A, $S(5)=5\\cdot 5^{\\frac{3}{2}}=25\\sqrt{5}\\approx 55.9$, a rise of about $16$ N from $40$. From $9$ to $10$ A, $S(10)=5\\cdot 10^{\\frac{3}{2}}=50\\sqrt{10}\\approx 158.1$, a rise of about $23$ N from $135$. Later amperes add more, which is the opposite of the claim.

**2.** A rushed solver who remembered $S(4)=40<S(9)=135$ and inferred that the extra ampere must add more at the small current, because "there is more room to grow," would have mixed a lower level with a shallower slope. The level is lower at $4$ A; the slope is also shallower.

**3.** The opposite verdict would have needed $k<1$, so that $S'$ would fall. The two spot checks forced $k=\\frac{3}{2}>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $15<\\frac{45}{2}$. A linear weld $S\\propto p$ would have made the extra ampere add the same $5$ N at both currents; the stem is not linear.

An extra ampere adds less strength at $4$ A than at $9$ A, so the statement is False.`,

    `**E.** → False

This letter inverts the $400$ N reject line. The overview recovered that the smallest clearing current is $p=80^{\\frac{2}{3}}\\approx 18.57$ A, which is not below $18$. At $18$ A the weld is still short of $400$ N. The smallest clearing current sits just past eighteen amperes.

**1.** Checking the recovered rule at $18$ A: $S(18)=5\\cdot 18^{\\frac{3}{2}}=5\\cdot 18\\sqrt{18}=90\\cdot 3\\sqrt{2}\\approx 382$, which sits under $400$. At $19$ A the same rule is already past $400$. The reject line is crossed between $18$ and $19$, hence not below $18$.

**2.** A rushed solver who inverted as if $k=1$ would have claimed $p=80$, well above $18$, and still called "below $18$" false, for the wrong inverse. Another mix-up is reading $S(16)=320$ as if $16$ A already cleared $400$. Three hundred and twenty is short of four hundred.

**3.** The opposite verdict would have needed a larger coefficient, so that the inverted current fell through $18$. At the recovered $A=5$, the reject threshold is locked near $18.57$ A.

The recovered clearing current is about $18.57$ A, so the statement is False.`,
  ],

  "math-8-62": [
    `**A.** → False

This letter compares two $8$ kg buoys with one $64$ kg buoy. The overview recovered $H(m)=6m^{\\frac{2}{3}}$. Two $8$ kg buoys hold $2H(8)=48$ kN. One $64$ kg buoy holds $H(64)=96$ kN. Because $\\frac{2}{3}<1$, merging mass raises total hold. Two small buoys fall short of one large one.

**1.** A rushed solver who treated hold as proportional to mass would have claimed $2H(8)=H(16)$, not $H(64)$, and still called two small buoys weaker, but for a linear reason. The right comparison is $2H(8)$ against $H(64)=6\\cdot 16=96$.

**2.** The opposite verdict would have needed $r>1$, so that splitting mass raised total hold. The trial buoy forced $r=\\frac{2}{3}$.

Two $8$ kg buoys together hold $48$ kN, short of one $64$ kg buoy at $96$ kN, so the statement is False.`,

    `**B.** → True

This is a level question at $125$ kg. The overview recovered $H(125)=150$. The claim asks whether that buoy already holds more than $140$ kN.

One hundred and fifty sits above one hundred and forty. That $150$ is also the storm floor itself: $125=5^{3}$, so the two-thirds power is $25$, times $6$ is $150$. The $140$ cutoff is a near miss on the storm protocol.

**1.** A rushed solver who used $H(8)=24$ and scaled by $125/8$ linearly would have claimed $375$, still above $140$ but for the wrong shape. Linear thinking overstates hold when $r<1$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $H(125)$ fell through $140$. At the recovered $A=6$, one hundred and twenty-five kilograms is locked at $150$ kN.

The recovered holding power at $125$ kg is $150$ kN, so the statement is True.`,

    `**C.** → False

Doubling buoy mass would double holding power only if the exponent were $1$. The overview recovered exponent $\\frac{2}{3}$, so a doubling multiplies hold by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Holding power rises, but not in lockstep with mass.

**1.** Checking the trial: $H(8)=24$. Doubling to $16$ kg gives $H(16)=6\\cdot 16^{\\frac{2}{3}}=6\\cdot 2^{\\frac{8}{3}}=6\\cdot 4\\cdot 2^{\\frac{2}{3}}\\approx 38.1$, and $38.1/24\\approx 1.59$, not $2$.

**2.** The opposite verdict would have needed exponent $1$. The trial was fitted with $\\frac{2}{3}$. Lockstep would also have made letter A's two-versus-one comparison a tie at equal total mass, which it is not.

Doubling buoy mass does not double holding power, so the statement is False.`,

    `**D.** → True

This letter inverts the holding-power law. A nonzero power inverts to another power. The overview recovered $H=6m^{\\frac{2}{3}}$, so isolating mass raises both sides to the reciprocal $\\frac{3}{2}$ and leaves $m=(H/6)^{\\frac{3}{2}}$. Mass needed for a given hold is still a monomial in $H$.

**1.** Checking a recovered pair: at $H=24$ the inverse returns $m=8$, the trial buoy. At $H=150$ it returns $m=125$, the storm mass. The inverse is faithful to both named holds.

**2.** A rushed solver who kept exponent $\\frac{2}{3}$ on $H$ would have written $m=6 H^{\\frac{2}{3}}$ and lost the reciprocal. The exponent must take the reciprocal.

**3.** The opposite verdict would have needed a law that was not a pure power. The stem is a single monomial. Changing kilograms to tonnes rescales the coefficient to $B=600$ and leaves the inverse still a power of holding power.

The mass needed for a given holding power is itself a power of that holding power, so the statement is True.`,

    `**E.** → False

This letter inverts the storm floor of $150$ kN, and it also tests a unit trap. The overview recovered that $150$ kN takes $m=125$ kg, which is $0.125$ tonnes, not more than $1$ tonne. Mixing kilograms with tonnes without the $1000^{\\frac{2}{3}}$ rescaling is how a one-tonne claim appears.

**1.** In tonnes the same law is $H(t)=600 t^{\\frac{2}{3}}$. Setting $600 t^{\\frac{2}{3}}=150$ gives $t^{\\frac{2}{3}}=\\frac{1}{4}$ and $t=\\frac{1}{8}=0.125$, the same $125$ kg. One tonne would hold $H=600$ kN, four times the storm floor.

**2.** A rushed solver who inverted $6m^{\\frac{2}{3}}=150$ as $m=150/6=25$ kilograms, linearly, would still have sat under $1$ tonne, for the wrong inverse. Another mix-up is reading $m=125$ as $125$ tonnes. That is the unit trap in the title.

**3.** The opposite verdict would have needed a storm floor above $H(1\\text{ tonne})=600$ kN. The stem's floor is $150$ kN, well below that.

Reaching $150$ kN takes $125$ kg, so the statement is False.`,
  ],

  "math-8-63": [
    `**A.** → True

This letter inverts the throughput law. A nonzero power inverts to another power. The overview recovered $T=800/d^{2}$, so isolating hop distance leaves $d=\\sqrt{800}\\, T^{-\\frac{1}{2}}$. The new exponent is the reciprocal of $-2$. Hop distance needed for a given throughput is still a monomial in $T$.

**1.** Checking a recovered pair: at $T=50$ the inverse returns $d=4$, the bench hop. At $T=8$ it returns $d=10$, the reliable radius. The inverse is faithful to both named throughputs.

**2.** A rushed solver who kept exponent $-2$ on $T$ would have lost the reciprocal. Falling throughput does not introduce a logarithm.

The hop distance needed for a given throughput is itself a power function of that throughput, so the statement is True.`,

    `**B.** → True

This letter locates the farthest reliable hop. The overview recovered that $T=8$ already occurs at $d=10$ m. Ten metres sits under $12$. Every longer hop is slower, so the farthest reliable hop is $10$ m, already under $12$ m.

**1.** A rushed solver who inverted as if the exponent were $-1$ would have claimed $d=800/8=100$ m, well past $12$, and flipped the verdict. Inverse-linear thinking overstates the reliable radius.

**2.** Checking $d=12$: $T(12)=800/144\\approx 5.56$, which already misses the $8$ Mbps floor. The $12$ m cutoff is not a near miss on $10$; it is past the floor.

The recovered reliable radius is $10$ m, so the statement is True.`,

    `**C.** → False

Doubling the hop would halve throughput only if the exponent were $-1$. With $-2$ the factor is $2^{-2}=\\frac{1}{4}$. An inverse-square law quarters the reading when distance doubles. Inverse-linear thinking is the mismatch.

**1.** Checking the bench: $T(4)=50$. Doubling to $8$ m gives $T(8)=800/64=12.5$, and $12.5/50=\\frac{1}{4}$, not $\\frac{1}{2}$.

**2.** The opposite verdict would have needed exponent $-1$. The bench reading together with the inverse-square stem already forbids a halving.

Doubling the hop distance quarters the throughput, so the statement is False.`,

    `**D.** → False

This is a level question at $11$ m against the $8$ Mbps floor. The overview recovered $T(11)=800/121\\approx 6.61$, which sits below $8$. The reliable radius is $10$ m; a longer hop can only be slower. Eleven metres already misses the floor.

**1.** A rushed solver who interpolated linearly between $T(4)=50$ and $T(10)=8$ would have claimed about $6$ at $11$ m, still under $8$, for the wrong shape, or might have thought $11$ was still near $10$ and "close enough." The floor is a hard cut: $6.61<8$.

**2.** The opposite verdict would have needed a larger coefficient, so that $T(11)$ rose through $8$. At the recovered $A=800$, eleven metres is locked below the floor.

The recovered throughput at $11$ m is about $6.61$ Mbps, so the statement is False.`,

    `**E.** → False

This letter compares leftover slopes at $8$ m and $4$ m. The overview recovered $T(d)=800 d^{-2}$. Differentiating gives $T'(d)=-1600 d^{-3}$. Its size is $25$ at $4$ m and $\\frac{25}{8}$ at $8$ m. An extra metre cuts more throughput on the short hop, not on the long one. Inverse-square drops are steepest at the near end.

**1.** A finite one-metre step agrees. From $4$ to $5$ m, $T(5)=800/25=32$, a drop of $18$ Mbps from $50$. From $8$ to $9$ m, $T(9)=800/81\\approx 9.88$, a drop of about $2.6$ Mbps from $12.5$. The near hop loses more.

**2.** A rushed solver who saw $T(8)=12.5$ closer to the floor and inferred that an extra metre there must hurt more would have mixed a smaller remaining pool with a steeper cut. The remaining pool is smaller at $8$ m; the slope is also flatter.

**3.** The opposite verdict would have needed $|T'|$ to grow with $d$. For $r=-2$, $|T'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $25>\\frac{25}{8}$.

An extra metre of hop cuts more throughput at $4$ m than at $8$ m, so the statement is False.`,
  ],

  "math-8-64": [
    `**A.** → True

This letter is about the recovered exponent, not a named fish. Gill area follows $G(m)=A m^{\\frac{3}{4}}$. Three quarters is smaller than one, so each extra gram of body adds less gill than the gram before it. Gill area grows, but more slowly than body mass. A proportional law would have carried exponent $1$.

The overview recovered $A=8$, but a growth ranking never needs that coefficient.

**1.** A rushed solver who saw $G$ rising with $m$ and stopped would have missed the "more slowly" half of the claim. Rising is not the claim; lagging mass is the claim.

**2.** The opposite verdict would have needed $r\\ge 1$. The specimen $G(256)=512$ together with exponent $\\frac{3}{4}$ already refuses that.

Gill area grows more slowly than body mass, so the statement is True.`,

    `**B.** → True

This is a level question at $16$ g. The overview recovered $G(16)=64$. The claim asks whether that fish already has more than $50$ cm² of gill.

Sixty-four sits above fifty. Sixteen is $2^{4}$, so the three-quarters power is $2^{3}=8$, times $8$ is $64$. From the $256$ g specimen, a $\\frac{1}{16}$ mass is a $\\frac{1}{8}$ area, $512/8=64$, because $16^{-\\frac{3}{4}}=\\frac{1}{8}$.

**1.** A rushed solver who scaled $512$ by $16/256$ linearly would have claimed $32$, under $50$, and flipped the verdict. Linear thinking understates a small fish when $r<1$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $G(16)$ fell through $50$. At the recovered $A=8$, sixteen grams is locked at $64$ cm².

The recovered gill area at $16$ g is $64$ cm², so the statement is True.`,

    `**C.** → False

Gill area per gram is the intensity $G(m)/m$. The overview recovered $G(m)=8m^{\\frac{3}{4}}$, so intensity is $8m^{-\\frac{1}{4}}$. The leftover exponent is negative, so intensity falls as mass grows. A constant intensity would need leftover exponent $0$.

Checking the specimen against letter B: at $16$ g the intensity is $64/16=4$ cm² per gram. At $256$ g it is $512/256=2$. Intensity has already halved.

**1.** A rushed solver who saw a larger total at $256$ g and inferred a constant or larger intensity would have flipped the verdict. Totals rise; intensities fall.

**2.** The opposite verdict would have needed $r=1$. The stem is $\\frac{3}{4}$.

Gill area per gram is not constant across body masses, so the statement is False.`,

    `**D.** → False

Doubling mass would double gill area only if the exponent were $1$. The overview recovered exponent $\\frac{3}{4}$, so a doubling multiplies area by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Area rises, but not in lockstep with mass. The same $r<1$ that made A true makes this doubling false.

**1.** Checking $G(16)=64$. Doubling to $32$ g gives $G(32)=8\\cdot 32^{\\frac{3}{4}}=8\\cdot (2^{5})^{\\frac{3}{4}}=8\\cdot 2^{\\frac{15}{4}}=8\\cdot 8\\cdot 2^{\\frac{3}{4}}\\approx 107.6$, and $107.6/64\\approx 1.68$, not $2$.

**2.** The opposite verdict would have needed exponent $1$. The specimen already forbids that.

Doubling body mass does not double gill area, so the statement is False.`,

    `**E.** → False

This is a level question at $64$ g. The overview recovered $G(64)=128\\sqrt{2}\\approx 181$, which sits short of $200$. The three-quarters power has grown, but not as far as the named area.

**1.** A rushed solver who treated $64$ as $4^{3}$ and took $G=8\\cdot 16=128$, dropping the leftover $\\sqrt{2}$, would have sat even shorter of $200$. Another mix-up is the overview's note that $216$ cm² occurs at $81$ g rather than at $64$ g: $G(81)=8\\cdot 27=216$, which does clear $200$, but that is a different fish.

**2.** Linear scaling from $G(16)=64$ by $64/16=4$ would have claimed $256$, above $200$, and flipped the verdict. Linear thinking overstates the $64$ g fish.

**3.** The opposite verdict would have needed a larger coefficient, so that $G(64)$ rose through $200$. At the recovered $A=8$, sixty-four grams is locked near $181$ cm².

The recovered gill area at $64$ g is about $181$ cm², so the statement is False.`,
  ],

  "math-8-65": [
    `**A.** → True

This letter is a scale identity for the square-root clock, not a named day. For $S(t)=A\\sqrt{t}$ a time factor $c$ cancels the coefficient: $S(ct)/S(t)=\\sqrt{c}$. Quadrupling means $c=4$, and $\\sqrt{4}=2$. A square-root clock turns a fourfold wait into a twofold reading.

The overview recovered $A=5$, but the coefficient never enters a scale question.

**1.** A rushed solver who quadrupled the strength with the time would have claimed a factor of $4$. That is exponent $1$. Another mix-up is doubling time and expecting a doubling of strength; that would need $c=4$ as well, which is this letter's quadrupling, not a doubling.

**2.** The opposite verdict would have needed a leftover exponent other than $\\frac{1}{2}$. The stem is a square root.

Quadrupling curing time exactly doubles strength, so the statement is True.`,

    `**B.** → True

This is a level question on day $4$. The overview recovered $S(4)=10$. The claim asks whether that strength is already above $8$ MPa.

Ten sits above eight. Together with $S(9)=15$, the logged gap $15-10=5$ is recovered. The recorded $5$ MPa is the gap, not the day-$4$ level.

**1.** A rushed solver who treated the recorded $5$ MPa as $S(4)$ would have compared $5$ to $8$ and flipped the verdict. The $5$ is a difference of two days, not a level. Letter E names that mix-up on day $9$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $S(4)$ fell through $8$. At the recovered $A=5$, day $4$ is locked at $10$ MPa.

The recovered strength on day $4$ is $10$ MPa, so the statement is True.`,

    `**C.** → False

This letter compares leftover slopes after nine days versus after four. The overview recovered $S(t)=5\\sqrt{t}$. Differentiating gives $S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}$. After four days that is $\\frac{5}{4}$. After nine days it is $\\frac{5}{6}$. An extra day adds more after four days than after nine, not the other way around. A square root flattens.

**1.** A finite one-day step agrees. From day $4$ to day $5$, $S(5)=5\\sqrt{5}\\approx 11.18$, a rise of about $1.18$ MPa from $10$. From day $9$ to day $10$, $S(10)=5\\sqrt{10}\\approx 15.81$, a rise of about $0.81$ MPa from $15$. Later days add less.

**2.** A rushed solver who saw $S(9)=15>S(4)=10$ and inferred that later days must add more would have mixed a higher level with a steeper slope. The level is higher on day $9$; the slope is flatter.

**3.** The opposite verdict would have needed $r>1$, so that $S'$ would rise. The stem is a square root. Changing $A$ scales both slopes by the same factor and cannot reverse $\\frac{5}{4}>\\frac{5}{6}$.

An extra day adds less strength after nine days than after four, so the statement is False.`,

    `**D.** → True

This letter inverts a $30$ MPa target. The overview recovered that $30$ MPa already occurs on day $36$, which sits under $40$. From $5\\sqrt{t}=30$ one has $\\sqrt{t}=6$ and $t=36$. The square-root clock is slower than a linear guess, so the target arrives before day $40$.

**1.** A rushed solver who scaled linearly from $S(4)=10$ as $3\\times 4=12$ days would have sat under $40$ for the wrong reason. Another mix-up is $S(t)=5t$, giving day $6$, also under $40$. Linear thinking understates the wait when $r<1$; here the true wait is $36$, still under $40$.

**2.** Checking day $40$: $S(40)=5\\sqrt{40}\\approx 31.6$, already past $30$. The $40$-day cutoff is not a near miss on $36$; it is past the target.

**3.** The opposite verdict would have needed a smaller coefficient, so that the inverted day rose through $40$. At the recovered $A=5$, thirty megapascals is locked on day $36$.

The recovered wait for $30$ MPa is $36$ days, so the statement is True.`,

    `**E.** → False

The recorded $5$ MPa is the gap $S(9)-S(4)$, not the day $9$ level. The overview recovered $S(9)=15$. Day $9$ is $15$ MPa. Treating a difference of two readings as a single level is the mix-up named in the title.

**1.** A rushed solver who took $5$ as $S(9)$ would have called this letter true. The log never states a level; it states a rise. Letter B already used the day-$4$ level $10$ that makes the gap $15-10=5$.

**2.** The opposite verdict would have needed the surviving record to have been a level of $5$ MPa on day $9$. The stem says the strength rose by $5$ MPa between day $4$ and day $9$.

The recovered strength on day $9$ is $15$ MPa, so the statement is False.`,
  ],

  "math-8-66": [
    `**A.** → True

This letter reads the trusted pair as an exponent ranking. The trusted ratio is $72/18=4=2^{k}$, so $k=2$. A width factor $c>1$ then multiplies deflection by $c^{2}$, which exceeds $c$. Deflection outruns span. The integer $2$ is a square law, not a coincidence of the $3$ m and $6$ m runs.

**1.** A rushed solver who saw $6=2\\cdot 3$ and $72=4\\cdot 18$ and called it "just a doubling of span with a quadrupling of sag" without naming $k=2$ would have the right factor and the right ranking, but would not have seen that every other scale factor is also a square.

**2.** The opposite verdict would have needed $k\\le 1$. The trusted pair already refuses that.

The recovered exponent is $2$, so the statement is True.`,

    `**B.** → True

This letter asks what the trusted pair predicts at nine metres, not what the third run recorded. The overview recovered $y(L)=2L^{2}$ and $y(9)=162$. One hundred and sixty-two sits above $155$. The questionable third run of $150$ is a different number; this letter is the trusted quadratic's forecast.

**1.** A rushed solver who compared the recorded $150$ to $155$ would have called the statement false. Letter B names the trusted prediction, not the third run. Letter D then measures the shortfall.

**2.** The opposite verdict would have needed a smaller trusted coefficient, so that $2\\cdot 81$ fell through $155$. At the recovered $A=2$, nine metres is locked at $162$ mm.

The trusted quadratic at nine metres is $162$ mm, so the statement is True.`,

    `**C.** → False

Doubling span would double deflection only if the exponent were $1$. With $k=2$ the factor is $2^{2}=4$. The trusted move from $3$ m to $6$ m already did that: $18$ mm became $72$ mm. A doubled free span is four times the sag.

**1.** A rushed solver who read "doubling" in the $3$ m to $6$ m pair and copied it onto deflection would have claimed a doubling of sag, $36$ mm at $6$ m, against the logged $72$. The trusted pair is the counterexample.

**2.** The opposite verdict would have needed $k=1$. The trusted ratio $4$ on a doubled span forbids that.

Doubling the free span quadruples the tip deflection, so the statement is False.`,

    `**D.** → True

This letter is the millimetre shortfall of the third run against the trusted quadratic. Predicted $162$ mm minus recorded $150$ mm is a $12$ mm shortfall, which is more than $10$. The third run sits below the trusted quadratic. A $10$ mm tolerance would still flag this gap.

**1.** A rushed solver who compared $150$ to the $3$ m reading $18$ as a ratio, without using the trusted $162$, might have missed the millimetre test. Letter E reads the same gap as a ratio. This letter reads it as millimetres.

**2.** The opposite verdict would have needed the third run to have been $152$ mm or higher, so that the shortfall fell through $10$. The recorded run is $150$.

The third run sits $12$ mm below the trusted quadratic, so the statement is True.`,

    `**E.** → False

The third run would sit on the trusted law only if $150/18=3^{2}$. Instead $150/18=\\frac{25}{3}\\approx 8.33\\neq 9$. The third run does not sit on the same power law. Predicted $162$ versus recorded $150$ is a $12$ mm gap, now read as a ratio rather than as millimetres.

**1.** A two-point refit using $y(3)=18$ and $y(9)=150$ would force $3^{k}=\\frac{25}{3}$, so $k\\approx 1.930$, not $2$. Rescaling $A$ to force the third run, $A=150/81\\approx 1.85$, then breaks $y(3)$: $1.85\\cdot 9=16.65\\neq 18$. Either constant can be saved, not both.

**2.** A rushed solver who treated $12$ mm as "close enough" on a $162$ mm prediction would have called the statement true. The letter asks whether the third run sits on the same power law, not whether it is nearby.

**3.** The opposite verdict would have needed a recorded third run of $162$ mm. The stem records $150$.

The third run does not sit on the same power law as the trusted pair, so the statement is False.`,
  ],

  "math-8-67": [
    `**A.** → True

This letter reads the percentage rule as an exponent ranking. The design note is $1.2^{k}=1.728$. Matching powers of $1.2$ gives $1.2^{3}=1.728$, so $k=3$. Three is larger than one, so mass outruns height. The coefficient cancels in the ratio, so the $10$ m reference is not needed for this ranking.

**1.** A rushed solver who treated $72.8\\%$ as "about three times $20\\%$" and guessed $k=3$ by a percentage shortcut would have the right exponent for a slightly wrong reason. The exact match is $1.2^{3}=1.728$, not $3\\times 20\\%=60\\%$.

**2.** The opposite verdict would have needed $k\\le 1$. The percentage rule already refuses that.

The recovered exponent is $3$, so the statement is True.`,

    `**B.** → True

This is a level question at $12$ m, a $20\\%$ stretch of the $10$ m reference. The overview recovered $M(12)=864$. Eight hundred and sixty-four sits above eight hundred. The same check is $500\\cdot 1.728=864$, or $0.5\\cdot 12^{3}=864$.

**1.** A rushed solver who added $20\\%$ to $500$ kg would have claimed $600$, under $800$, and flipped the verdict. Height and mass do not move in lockstep when $k=3$.

**2.** The opposite verdict would have needed a smaller reference mass, so that $M(12)$ fell through $800$. At the recovered $A=0.5$, twelve metres is locked at $864$ kg.

The recovered steel mass at $12$ m is $864$ kg, so the statement is True.`,

    `**C.** → False

In the ratio $M(1.2h)/M(h)=1.2^{k}$ the coefficient $A$ cancels, so the percentage rule cannot pin $A$. The $10$ m reference is the level that pins $A$. Scale information cannot substitute for a level.

**1.** Any $A$ with $k=3$ would still raise mass by $72.8\\%$ on a $20\\%$ stretch. The percentage rule is blind to whether the reference mast uses $500$ kg or $5000$ kg.

**2.** A rushed solver who solved $A\\cdot 1.2^{k}=1.728$ as if that were a level would have manufactured a fake $A$. The $1.728$ is a multiplier, not a mass in kilograms.

**3.** The opposite verdict would have needed a second level, or a named mass in the percentage note. The stem separates a ratio from a level on purpose.

The percentage rule alone cannot force $A$, so the statement is False.`,

    `**D.** → True

A $10\\%$ stretch is the factor $1.1^{3}=1.331$, a $33.1\\%$ mass rise, which sits above $30\\%$. Percent changes pass through the exponent. The overview recovered $k=3$, so a $10\\%$ height increase is not a $10\\%$ mass increase.

**1.** Checking the reference: $M(11)=0.5\\cdot 1331=665.5$, and $665.5/500=1.331$. The mass rise is $165.5$ kg on a $500$ kg mast, $33.1\\%$.

**2.** A rushed solver who tripled the $10\\%$ to $30\\%$ as a linear elasticity shortcut would have sat on the $30\\%$ line and called the statement false, or called it a tie. The exact cube is $1.331$, a little above $30\\%$.

**3.** The opposite verdict would have needed $1.1^{k}\\le 1.30$, hence $k\\le \\log(1.30)/\\log(1.1)\\approx 2.74$. The percentage rule locked $k=3$.

A $10\\%$ height increase raises mass by $33.1\\%$, so the statement is True.`,

    `**E.** → False

A $20\\%$ height increase raises mass by $72.8\\%$, not by $20\\%$. That is the design note itself: $1.2^{3}=1.728$. Height and mass do not move in lockstep when the exponent is $3$.

**1.** Letter B already used that $72.8\\%$ to move $500$ kg to $864$ kg. This letter is the percentage claim sitting next to that level.

**2.** A rushed solver who copied the $20\\%$ from height onto mass would have called the statement true. That is exponent $1$, which letter A already refused.

**3.** The opposite verdict would have needed $k=1$. The design note $72.8\\%$ on a $20\\%$ stretch forbids that.

A $20\\%$ height increase raises mass by $72.8\\%$, so the statement is False.`,
  ],

  "math-8-68": [
    `**A.** → True

For an inverse square, a distance factor $k$ scales intensity by $k^{-2}$. Doubling is $k=2$, and $2^{-2}=\\frac{1}{4}$. Doubling distance quarters intensity at every starting range. Inverse-linear thinking would have claimed a half.

The overview recovered $A=2.88$, but the coefficient cancels in any ratio.

**1.** Checking the survey: $I(2)=0.72$. Doubling to $4$ m gives $I(4)=0.18$, and $0.18/0.72=\\frac{1}{4}$. Letter B reads that $0.18$ against a $0.2$ cutoff.

**2.** The opposite verdict would have needed exponent $-1$. The stem is $d^{-2}$.

Doubling the distance cuts intensity to one quarter, so the statement is True.`,

    `**B.** → True

This is a level question at $4$ m, a doubling of the $2$ m survey. The overview recovered $I(4)=0.18$, which sits under $0.2$. That is a quarter of $0.72$.

**1.** A rushed solver who halved $0.72$ would have claimed $0.36$, above $0.2$, and flipped the verdict. Inverse-linear thinking is too slow a decay.

**2.** The opposite verdict would have needed a larger coefficient, so that $I(4)$ rose through $0.2$. At the recovered $A=2.88$, four metres is locked at $0.18$.

The recovered intensity at $4$ metres is $0.18$ W/m², so the statement is True.`,

    `**C.** → True

This letter compares leftover slopes at $2$ m and $6$ m. The overview recovered $I(d)=2.88/d^{2}$. Differentiating gives $I'(d)=-5.76\\, d^{-3}$. Its size is $0.72$ at $2$ m and about $0.027$ at $6$ m. An extra metre cuts more intensity near the hub. Inverse-square drops are front-loaded.

**1.** A finite one-metre step agrees. From $2$ to $3$ m, $I(3)=2.88/9=0.32$, a drop of $0.40$ from $0.72$. From $6$ to $7$ m, $I(7)=2.88/49\\approx 0.059$, a drop of about $0.021$ from $0.08$. The near metre cuts more.

**2.** A rushed solver who saw $I(6)=0.08$ already at the cap and inferred that an extra metre there must hurt more would have mixed a smaller remaining intensity with a steeper cut. The remaining intensity is smaller at $6$ m; the slope is also flatter.

**3.** The opposite verdict would have needed $|I'|$ to grow with $d$. For $r=-2$, $|I'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $0.72>0.027$.

An extra metre cuts more intensity at $2$ m than at $6$ m, so the statement is True.`,

    `**D.** → False

This is a level question at $6$ m against the night cap. The overview recovered $I(6)=0.08$, which equals the night cap rather than sitting above it. The claim wants a reading still above $0.08$; equality is not above. The cap is met exactly at six metres.

**1.** A rushed solver who treated "at or above the cap" as the night-rule violation would have called this letter true. The statement says "still above," and $0.08$ is not above $0.08$.

**2.** Checking $I(5)=2.88/25=0.1152$, which is still above the cap. Five metres is inside the night restriction; six metres is the boundary. Letter D names six metres.

**3.** The opposite verdict would have needed a larger coefficient, so that $I(6)$ sat above $0.08$. At the recovered $A=2.88$, six metres is locked on the cap.

The recovered intensity at $6$ metres equals the night cap, so the statement is False.`,

    `**E.** → False

An inverse square falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance. The overview recovered that the cap is met at $d=6$ m. Walking away from the hub always eventually satisfies the night limit.

**1.** A rushed solver who saw a decaying power and claimed it never reaches a positive floor would have mixed an asymptote at $0$ with a failure to cross $0.08$. Intensity approaches $0$, so it must pass $0.08$ on the way.

**2.** The opposite verdict would have needed a positive horizontal asymptote above $0.08$, for instance $I=0.10+A d^{-2}$. The stem has no such floor.

The night cap is met at six metres, so the statement is False.`,
  ],

  "math-8-69": [
    `**A.** → True

Head is a square of flow and jet speed is a square root of head, so the composed exponent is $2\\cdot\\frac{1}{2}=1$. The leftover map is a line through the origin. The overview recovered $v(q)=4\\sqrt{2}\\, q$. Jet speed is proportional to flow.

Stopping at $H(q)=2q^{2}$ would have left a square in flow. Stopping at $v(H)=4\\sqrt{H}$ would have left a square root in head. Neither of those is the composed map.

**1.** A rushed solver who added the exponents would have claimed exponent $2.5$ and called the map a power but not a proportion. Composition multiplies, and $2\\cdot\\frac{1}{2}=1$ is the proportional case.

**2.** Checking the commissioning run: $v(5)=20\\sqrt{2}$. Doubling flow to $10$ doubles speed to $40\\sqrt{2}$, which is letter D. Proportionality is the same fact as that doubling.

After both stages, jet speed is proportional to flow, so the statement is True.`,

    `**B.** → True

This is a level question at the commissioning flow $q=5$. The overview recovered $v(5)=20\\sqrt{2}$. Because $\\sqrt{2}>1.4$, $20\\sqrt{2}>28$. Jet speed already sits above twenty-eight metres per second.

**1.** A rushed solver who used $v=4\\sqrt{H}=4\\sqrt{50}\\approx 28.3$ and compared $28.3$ to $28$ would have the right verdict from the head stage, which is the same number: $4\\sqrt{50}=4\\sqrt{25\\cdot 2}=20\\sqrt{2}$. Another mix-up is comparing head $50$ m to $28$ m/s.

**2.** The opposite verdict would have needed a smaller commissioning head, so that $20\\sqrt{2}$ fell through $28$. At the recovered $A=2$, five cubic metres per hour is locked above $28$ m/s.

The recovered jet speed at $q=5$ is $20\\sqrt{2}$ m/s, so the statement is True.`,

    `**C.** → False

Doubling flow would double head only if the exponent were $1$. With $H(q)=2q^{2}$ the factor is $2^{2}=4$. An exact doubling of head would need exponent $1$. The claim is about $H$, not about the composed speed. Head quadruples.

**1.** Checking the commissioning run: $H(5)=50$. Doubling to $q=10$ gives $H(10)=200$, a fourfold head. Speed only doubles, which is letter A.

**2.** Mixing the two stages is the mismatch. Letter A doubled flow and doubled speed. This letter doubles flow and expects doubled head. They are different experiments.

**3.** The opposite verdict would have needed first-stage exponent $1$. The stem squares flow.

Doubling the flow quadruples the head, so the statement is False.`,

    `**D.** → True

Because speed is proportional to flow after both stages, twice $v(5)=20\\sqrt{2}$ needs twice the flow: $q=10$, which sits under $12$. The target $40\\sqrt{2}$ m/s needs $10$ m³/h.

**1.** A rushed solver who inverted the square head law as if speed needed four times the flow would have claimed $q=20$, past $12$, and flipped the verdict. That mix-up inverts $H$ instead of $v$. Head at $40\\sqrt{2}$ m/s is $H=v^{2}/16=(40\\sqrt{2})^{2}/16=200$ m, which is $q=10$, not $q=20$.

**2.** Checking $q=12$: $v(12)=48\\sqrt{2}\\approx 67.9$, already past $40\\sqrt{2}\\approx 56.6$. The $12$ m³/h cutoff is not a near miss on $10$; it is past the target.

**3.** The opposite verdict would have needed a smaller composed coefficient, so that the inverted flow rose through $12$. At the recovered $v=4\\sqrt{2}\\, q$, forty root-two metres per second is locked at $q=10$.

The recovered flow for $40\\sqrt{2}$ m/s is $10$ m³/h, so the statement is True.`,

    `**E.** → False

Eliminating $q$ from $H=2q^{2}$ and $v=4\\sqrt{2}\\, q$ gives $H=v^{2}/16$, a square of jet speed, not a constant multiple of it. Doubling jet speed quadruples the head. Proportionality would have needed leftover exponent $1$ on $v$.

**1.** Checking the commissioning pair: $H=50$ and $v=20\\sqrt{2}\\approx 28.3$, and $50$ is not a constant times $28.3$ that would also fit $H=200$ at $v=40\\sqrt{2}\\approx 56.6$, because $200/56.6\\approx 3.53$ while $50/28.3\\approx 1.77$. The ratio $H/v$ is not constant.

**2.** Letter A said speed is proportional to flow. This letter asks whether head is proportional to speed. Those are different pairs of variables. Mixing them is how a true proportion appears.

**3.** The opposite verdict would have needed the two stages to leave leftover exponent $1$ from $v$ to $H$. A linear head in flow composed with a linear speed in head would have done that. The stem squares flow before taking a square root for speed, which leaves $H\\propto v^{2}$.

Head is a square of jet speed, so the statement is False.`,
  ],

  "math-8-70": [
    `**A.** → True

To double throughput a staffing factor $k$ must satisfy $k^{\\frac{1}{2}}=2$, so $k=4$. The yard needs four times the crew, not twice. That is more than a doubling. A square-root warehouse will not keep pace with headcount.

The overview recovered $T(s)=20\\sqrt{s}$. Doubling the logged $80$ pallets needs $T=160$, hence $s=(160/20)^{2}=64$ drivers, four times the logged $16$.

**1.** A rushed solver who doubled the crew to $32$ would have claimed $T(32)=20\\sqrt{32}\\approx 113$, short of $160$. Doubling headcount does not double pallets.

**2.** The opposite verdict would have needed $r\\ge 1$. The stem is a square root.

To double the logged throughput the yard must more than double the crew, so the statement is True.`,

    `**B.** → True

This is a level question at the safety cap of $36$ drivers. The overview recovered $T(36)=120$. One hundred and twenty sits above one hundred and ten. The safety cap of $36$ drivers is also this level.

**1.** A rushed solver who scaled $T(16)=80$ by $36/16$ linearly would have claimed $180$, still above $110$ but for the wrong shape. Linear thinking overstates a larger crew when $r<1$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $T(36)$ fell through $110$. At the recovered $A=20$, thirty-six drivers is locked at $120$ pallets per hour.

The recovered throughput at $36$ drivers is $120$ pallets per hour, so the statement is True.`,

    `**C.** → False

Throughput per driver is the intensity $T(s)/s$. The overview recovered $T(s)=20\\sqrt{s}$, so intensity is $20 s^{-\\frac{1}{2}}$. The leftover exponent is negative, so intensity falls as the crew grows. Extra drivers still add pallets, but fewer per driver.

Checking the logged shift against the cap: at $16$ drivers the intensity is $80/16=5$ pallets per driver. At $36$ drivers it is $120/36=\\frac{10}{3}\\approx 3.33$. Intensity has already fallen.

**1.** A rushed solver who saw $T(36)=120>T(16)=80$ and inferred a rising intensity would have mixed a higher total with a higher per-driver figure. Totals rise; intensities fall.

**2.** The opposite verdict would have needed leftover exponent $0$, a proportional warehouse. The stem is a square root.

Throughput per driver falls as the crew grows, so the statement is False.`,

    `**D.** → False

This letter inverts a $150$ pallet target against the $36$-driver cap. The overview recovered that $150$ pallets already needs $s=56.25$ drivers, which sits past the cap. The capped shift delivers only $120$ pallets per hour. Reaching $150$ lies outside the safety cap.

**1.** From $20\\sqrt{s}=150$ one has $\\sqrt{s}=7.5$ and $s=56.25$. A rushed solver who scaled linearly from $80$ pallets at $16$ drivers would have claimed $s=30$, inside the cap, and flipped the verdict. Linear thinking understates the crew when $r<1$.

**2.** Checking $T(36)=120<150$. The cap is not a near miss on $150$; it is $30$ pallets short.

**3.** The opposite verdict would have needed a larger coefficient, so that $T(36)$ already cleared $150$. At the recovered $A=20$, one hundred and fifty pallets is locked past the cap.

Reaching $150$ pallets per hour sits outside the safety cap, so the statement is False.`,

    `**E.** → True

The leftover slope $T'(s)=10 s^{-\\frac{1}{2}}$ stays positive, so throughput rises with crew all the way to the cap. At $s=36$, $T=120$, and no larger legal crew exists. The driver cap is therefore also a cap on pallets moved per hour.

**1.** A rushed solver who saw intensity falling in letter C and inferred that extra drivers could eventually hurt the total would have mixed a falling average with a falling total. The marginal $T'$ stays positive; only the average falls.

**2.** Checking just inside the cap: $T(35)=20\\sqrt{35}\\approx 118.3<120=T(36)$. More legal drivers still mean more pallets. The cap binds both.

**3.** The opposite verdict would have needed $T$ to peak before $s=36$, hence a negative leftover exponent on $T$ itself. The stem's exponent $0.5$ is positive. A falling intensity is not a falling total.

Because throughput rises with crew, the safety cap on drivers is also a cap on pallets, so the statement is True.`,
  ],
};

const report = applyLetters("61_70.json", patches);
for (const row of report) console.log(row.id, row.wc.join(" "));
console.log("patched", report.length);
