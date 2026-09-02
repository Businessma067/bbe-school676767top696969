import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-11": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=\\frac{1}{3}$. An exponent below one means each extra hour adds less harvest than the hour before it: the slope of a cube-root rule is falling. The trap is reading the two logged harvests, $4$ kg then $6$ kg, as if the later hours were the more productive ones, when the clock actually ran from $8$ to $27$.",
      "**B.** → False\n\nDoubling hours would double harvest only if $r=1$. Identity $(2)$ already supplies the factor $2^{\\frac{1}{3}}$, about $1.26$, not $2$. Linear thinking says \"twice the water, twice the crop\"; a cube-root technology will not keep pace with the clock.",
      "**C.** → True\n\nThe overview already inverted the recorded $4$ kg harvest to $h=64$ for an $8$ kg crop. That is eight times the logged $8$ hours, not twice. To double a cube-root output you cube the doubling of the output, because the inverse exponent is $3$. A solver who doubled $8$ hours to $16$ would still be short of $8$ kg.",
      "**D.** → False\n\nAn extra hour is the slope of $Y=2h^{\\frac{1}{3}}$, which the overview did not tabulate:\n\n$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$\n\nAfter $8$ hours that is $\\frac{1}{6}$; after $27$ hours it is $\\frac{2}{27}$. The leftover exponent is negative, so later hours buy less, not more. Claiming the opposite reads a concave rule as if it were convex.",
      "**E.** → True\n\nThe overview already wrote the inverse $h=(Y/2)^{3}$. A nonzero power inverts to another power: raise both sides to the reciprocal exponent, here $3$, and hours become a monomial in harvest. The trap is thinking \"you cannot solve a root for the input\" or expecting a logarithm. Cube-root in, cube out.",
    ],
  },
  "math-8-12": {
    tacticals: [
      "**A.** → True\n\nThe overview already lists $W(9)=16$, which sits below $20$. Nine agents contribute a square root of $3$, so the wait is one third of the coefficient $48$. Linear scaling from the $4$-agent wait of $24$ down by $4/9$ would have claimed about $10.7$ and overshot how slowly an inverse square root falls.",
      "**B.** → True\n\nThe overview already inverted to $n=(48/W)^{2}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-\\frac{1}{2}$, namely $-2$. Falling wait does not stop the inverse from being a monomial in $W$. Staffing needed for a target wait is still a power of that wait.",
      "**C.** → False\n\nWait is $W(n)=48n^{-\\frac{1}{2}}$, so an extra agent is the slope $W'(n)=-24n^{-\\frac{3}{2}}$. The size of that cut falls as $n$ rises: after $16$ agents the cut is smaller than after $4$, not larger. Diminishing returns on a falling curve mean later hires help less, even though they still help.",
      "**D.** → True\n\nThe overview already inverted a six-minute wait to $n=64$, which violates the $50$-agent cap. Inverse square roots have to run a long way to cut wait from $24$ down to $6$: that is a factor of $4$ in wait, hence a factor of $16$ in staffing, from $4$ out to $64$. The roster cannot stretch that far.",
      "**E.** → False\n\nDoubling the team would halve the wait only if the exponent were $-1$. With $-\\frac{1}{2}$ the scale factor is $2^{-\\frac{1}{2}}\\approx 0.71$, not $\\frac{1}{2}$. Inverse-linear thinking is the trap; an inverse square root falls, but more slowly than a reciprocal.",
    ],
  },
  "math-8-13": {
    tacticals: [
      "**A.** → True\n\nThe overview already lists $Q_{L}(4)=8$, which sits above $7$. Leah's square-root well at $4$ metres is $4\\cdot 2=8$. A solver who reused Omar's $4$-metre calibration of $4$ litres would have put Leah at Omar's reading and missed that the two wells were logged at different depths.",
      "**B.** → True\n\nThe overview already placed the crossing at $d=8$, which is shallower than $10$. Omar's larger exponent $\\frac{3}{2}$ must overtake Leah's $\\frac{1}{2}$ once; eight metres is that unique positive root. Checking $d=10$ without solving the ratio would leave the meeting point floating.",
      "**C.** → True\n\nIdentity $(2)$ already is the ratio $\\frac{Q_{O}}{Q_{L}}=\\frac{d}{8}$. Past $d=8$ that ratio exceeds $1$ and keeps climbing, so Omar stays ahead. A second crossing would need the ratio to come back through $1$, which a positive leftover power of $d$ cannot do.",
      "**D.** → False\n\nTogether the wells are $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$. Distinct exponents cannot be absorbed into one monomial. A sum of two powers is a power only when the exponents match. Adding the traces does not create a third power of depth.",
      "**E.** → True\n\nOmar's exponent $\\frac{3}{2}$ sits above $1$, so each extra metre buys more litres than the metre before it. The leftover slope $Q_{O}'(d)=\\frac{3}{4}d^{\\frac{1}{2}}$ is itself rising. Leah's square root does the opposite: her extra metre shrinks. That is why Omar eventually leads.",
    ],
  },
  "math-8-14": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $F=50$ and $C(n)=50+50\\sqrt{n}$. A power of the run cannot carry a leftover constant. The trap is ignoring the intercept and treating the bill as $A n^{\\frac{1}{2}}$ alone, which would have gone through the origin. Setup of $50$ euros kills that shape.",
      "**B.** → False\n\nThe slope $C'(n)=25n^{-\\frac{1}{2}}$ stays positive for every $n>0$. Printing more copies never turns the bill downward: the square-root term only grows, and the setup is fixed. Falling average cost is not the same as a falling total.",
      "**C.** → True\n\nCost per copy is $\\frac{50}{n}+50n^{-\\frac{1}{2}}$. Both pieces decline as the run lengthens, because the setup is spread and the leftover exponent on the variable term is negative. A longer run is cheaper per copy even while the total bill in B keeps rising.",
      "**D.** → True\n\nThe overview already lists $C(25)=300$, which sits above $280$. Twenty-five copies contribute a square root of $5$, so $50+50\\cdot 5=300$. Linear interpolation between $16$ and $64$ copies would have missed that exact square.",
      "**E.** → False\n\nThe overview already lists $C(36)=350$, which sits below $400$. Thirty-six copies contribute a square root of $6$, so $50+300=350$. The claimed $400$ is what you would get by adding another $50$ as if a seventh \"root unit\" were in play. The bill has grown, but not that far.",
    ],
  },
  "math-8-15": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed the two stages to $S(u)=2u$. The inner exponent $\\frac{3}{2}$ and the outer $\\frac{2}{3}$ multiply to $1$, so strength is proportional to purity after both stages. Treating each stage separately and stopping at metal tonnage would miss that cancellation.",
      "**B.** → False\n\nThe overview already solved $2u=1.8u+5$ at $u=25$. The two quotes are not parallel: one is through the origin and the other has intercept $5$, so they must meet once. \"Never meet\" would need equal slopes.",
      "**C.** → False\n\nThe rival quotes $1.8u+5$. At purity zero that quote still equals $5$, so there is a leftover constant. A power of purity cannot carry an intercept. The refinery's composed $2u$ is a power; the rival's line is not.",
      "**D.** → True\n\nOnce $S(u)=2u$, the overview's strength at purity $36$ is $72$, which sits above $70$. Twice $36$ is a mental-arithmetic check, not a second compose. Mixing this with the metal-tonnage stage would have applied $8u^{\\frac{3}{2}}$ and overshot wildly.",
      "**E.** → False\n\nThe same linear law gives $S(9)=18$, which sits below $20$. Twice $9$ is $18$, not $20$. The figure $20$ is what a round \"about $2\\times 10$\" guess would invent. Purity nine is still short of a strength of twenty.",
    ],
  },
  "math-8-16": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=2$ from the doubling factor $4$. An exponent above one means each extra job adds more load than the job before it. The trap is reading \"doubling multiplies by $4$\" as if that were a linear $2\\times 2$ coincidence rather than $2^{r}$.",
      "**B.** → False\n\nHalving jobs is $k=\\frac{1}{2}$, and $k^{2}=\\frac{1}{4}$. Load drops to a quarter, not to a half. Linear thinking says \"half the jobs, half the load\"; a square law drops faster than that, which is the same exponent that made doubling multiply by $4$.",
      "**C.** → True\n\nLoad per job is already $\\frac{L(x)}{x}=\\frac{1}{2}x$ from the recovered square. That leftover power is positive, so the average climbs with the job count. Diminishing average product would have needed $r<1$. Here the server gets worse per job as the queue grows.",
      "**D.** → False\n\nThe overview already lists $L(16)=128$, which sits below the alarm of $200$. Sixteen jobs are $2^{4}$, so $\\frac{1}{2}\\cdot 256=128$. The alarm first trips at $x=20$, not at this convenient power of two.",
      "**E.** → True\n\nThe overview already lists $L(10)=50$, which sits above $40$. Ten squared is $100$, times $\\frac{1}{2}$ is $50$. A solver who used $r=1$ on the eight-job reading of $32$ would have claimed $40$ exactly at ten jobs and called this letter a boundary miss.",
    ],
  },
  "math-8-17": {
    tacticals: [
      "**A.** → True\n\nThe recovered slope is $Q'(x)=6x^{-\\frac{1}{2}}$. At intensity $25$ that is $\\frac{6}{5}$; at $100$ it is $\\frac{6}{10}$. The leftover exponent is negative, so later units buy less. A square-root survey flattens: the first outreach is the expensive-looking but productive end.",
      "**B.** → False\n\nDoubling intensity would double responses only if the exponent were $1$. The scale factor is $2^{\\frac{1}{2}}\\approx 1.41$, not $2$. Linear thinking says \"twice the outreach, twice the replies\"; a square root will not keep pace.",
      "**C.** → True\n\nResponses per unit of intensity are $12x^{-\\frac{1}{2}}$, the same leftover power as the slope in A, and it falls. Average and marginal product move together on a power below one. More outreach still adds replies, but each unit buys fewer of them.",
      "**D.** → False\n\nThe overview already lists $Q(400)=240$, which sits above $200$. The budget cap is on intensity, not on responses: at the largest legal $x$ the square root is $20$, and $12\\cdot 20=240$. Claiming a $200$ response ceiling invents a second cap the stem does not give.",
      "**E.** → True\n\nThe overview already lists $Q(81)=108$, which sits above $100$. Eighty-one is $9^{2}$, so $12\\cdot 9=108$. A solver who used $A=1$ or who took $81^{\\frac{1}{2}}$ as $8$ would have landed under $100$ and missed the letter.",
    ],
  },
  "math-8-18": {
    tacticals: [
      "**A.** → True\n\nThe overview already factored $C-D=n(n-16)$. On $n>0$ the roots are $n=0$, which is outside the domain, and $n=16$. They meet only at sixteen documents. A second positive meeting would need another linear factor.",
      "**B.** → False\n\nThe same factor $n-16$ is positive for $n>16$, so $C>D$: the quadratic automated bill is the more expensive one past the meeting. The trap is thinking \"automation is cheaper at scale\". Here the square grows faster, so automation is cheaper only below $16$.",
      "**C.** → True\n\nAutomated cost per document is $\\frac{C(n)}{n}=n$, already the leftover power $2-1=1$. Each extra document is more expensive than the last, and the average climbs with it. A falling unit cost would have needed an exponent below one.",
      "**D.** → False\n\nThe overview already listed the gap $225$ at $n=25$: $625-400=225$, which is not less than $100$. Nine documents past the meeting, the square has pulled well ahead of the line. The figure $100$ is a guess at \"a bit more than the meeting gap of $0$\".",
      "**E.** → True\n\nThe overview already lists $C(9)=81$, which sits under $100$. Before the meeting the square is still small. Nine squared is $81$, not $9\\cdot 16=144$ from accidentally costing the automated batch at the manual rate.",
    ],
  },
  "math-8-19": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $A=8$ and exponent $\\frac{1}{2}$. One half sits below one, so each extra worker adds less than the worker before. Throughput rises, but more slowly than headcount. Linear thinking would have expected lockstep.",
      "**B.** → False\n\nDoubling staff would double throughput only if $r=1$. The scale factor is $2^{\\frac{1}{2}}\\approx 1.41$, not $2$. A square-root warehouse will not keep pace with headcount. The same exponent that made A true makes this doubling false.",
      "**C.** → True\n\nThe overview already solved the cap at $s=100$, where $B(s)$ becomes the constant $80$. A horizontal cap is not $A s^{r}$. Once billed throughput is $\\min(8\\sqrt{s},80)$, the graph is no longer a single power of staff.",
      "**D.** → False\n\nThe overview already lists $H(64)=64$, which sits below $80$. Sixty-four staff contribute a square root of $8$, and $8\\cdot 8=64$. The ceiling binds at $100$ staff, not at this convenient power of $4$.",
      "**E.** → True\n\nThe overview already lists $H(81)=72$, which sits above $70$. Eighty-one staff contribute a square root of $9$, and $8\\cdot 9=72$. Linear interpolation between $16$ and $100$ would have missed that exact square.",
    ],
  },
  "math-8-20": {
    tacticals: [
      "**A.** → True\n\nWait is $W(k)=216k^{-\\frac{3}{2}}$, so an extra server is the slope $W'(k)=-324k^{-\\frac{5}{2}}$. The size of that cut is larger at $4$ servers than at $9$, because a more negative leftover exponent makes the drop steeper on the small cluster. Later servers still help, but less.",
      "**B.** → True\n\nThe overview already inverted to $k=(216/W)^{\\frac{2}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-\\frac{3}{2}$. Falling wait does not stop the inverse from being a monomial in $W$.",
      "**C.** → False\n\nDoubling servers would halve wait only if the exponent were $-1$. With $-\\frac{3}{2}$ the factor is $2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.35$, faster than a half. Inverse-linear thinking understates how steep this upgrade is.",
      "**D.** → False\n\nThe overview already lists $W(9)=8$, which sits below $10$. Nine servers contribute $9^{\\frac{3}{2}}=27$, and $216/27=8$. The upgrade from $4$ to $9$ already pulled wait under the claimed line. \"More than $10$\" would have been the $4$-server side.",
      "**E.** → True\n\nThe overview already lists $W(4)=27$, which sits above $25$. Four servers contribute $4^{\\frac{3}{2}}=8$, and $216/8=27$. That is also $8+19$, the smaller reading plus the logged $19$ ms cut, a useful check that A was recovered from a difference of two levels.",
    ],
  },
};

const r = applyFile(new URL("./11_20.json", import.meta.url), patches);
console.log(r);
