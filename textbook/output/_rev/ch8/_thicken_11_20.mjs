import fs from "fs";
import { spliceBeforeCloser, words } from "./_expand_apply.mjs";

const fp = new URL("./11_20.json", import.meta.url);
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const extra = {
  "math-8-11": [
    `**4.** A second witness at $h=125$: $Y(125)=2\\cdot 5=10$, so a sixteenfold jump in hours from $8$ to $125$ only multiplies harvest by $2.5$. Hours outrun crop whenever $r<1$. If the logged $27$-hour harvest had been $54$ kg rather than $6$, the exponent would have been $1$ and this claim would have been false.`,
    `**4.** What would flip the verdict is $r=1$, a proportional plot. With $r=\\frac{1}{3}$, the forward factor $2^{r}$ and the reverse factor $2^{1/r}$ disagree, which is why doubling hours and doubling harvest are different jobs. A solver who treated them as the same job would have reported $Y(16)=8$ and missed both this letter and letter C.`,
    `**5.** The opposite of "more than double the hours" would be an exponent above one, where doubling harvest would need less than a doubling of watering. Marina's cube-root technology is the other way round: harvest is cheap to wait for and expensive to double. Sixty-four hours against a naive $16$ is a factor-of-four gap, not a rounding.`,
    `**4.** Average product $Y/h=2h^{-\\frac{2}{3}}$ tells the same falling story: $Y(8)/8=0.5$ kg per hour and $Y(27)/27=\\frac{2}{9}\\approx 0.22$. Later hours are less productive on both the margin and the average. A convex $r>1$ technology would have flipped both comparisons.`,
    `**4.** Extra check that the inverse is a monomial, not a polynomial: $h(4)=8$, $h(6)=27$, $h(8)=64$, and $8:27:64$ is $2^{3}:3^{3}:4^{3}$, cubes of $2,3,4$. A leftover constant would have ruined that cube pattern. The stem has no setup hours.`,
  ],
  "math-8-12": [
    `**4.** What would push $W(9)$ up through $20$ is a recorded four-agent wait of $30$ minutes rather than $24$, giving $A=60$ and $W(9)=20$ on the nose. With $A=48$ the nine-agent wait is $16$, four minutes under the line. The cap of $50$ agents never enters a nine-agent question.`,
    `**4.** Extra check at the recorded wait: $n=(48/24)^{2}=4$, which returns the logged team. That inversion landing on $4$ is how we know the inverse is the right monomial. A logarithmic inverse would not have sent $24$ minutes back to $4$ agents.`,
    `**4.** The opposite verdict would need a wait that became steeper as the team grew, for example a delay that exploded near a capacity wall. Reciprocal square-root wait does the reverse: each extra agent buys less. The two slopes $3$ and $0.375$ are an eightfold drop, matching $4^{\\frac{3}{2}}=8$ in the derivative's leftover.`,
    `**4.** A second route to the same verdict evaluates the largest legal team: $W(50)\\approx 6.79>6$. Even the cap cannot buy a six-minute wait, so the inversion $n=64$ is not an accounting error. It is a staffing the contract refuses.`,
    `**4.** Extra arithmetic at a quadrupling, $k=4$: wait multiplies by $1/2$, which really is a halving, but that is four times the team, not two. Mixing $k=4$ with $k=2$ is how a solver could make this claim look true. Doubling the recorded four agents is eight agents, and $W(8)\\approx 17$, not $12$.`,
  ],
  "math-8-13": [
    `**4.** Omar at four metres is the logged $4$ litres a minute, below Leah's $8$. The claim is Leah against $7$, not a race. Mixing Omar's $4$ with the threshold would fail a question the statement did not ask. Leah's recovered $8$ is $1$ litre above $7$, a genuine clearance.`,
    `**4.** A meeting at $d=10$ would have needed $Q_{O}/Q_{L}=d/c$ with $c=10$, that is a smaller $k$ or a larger $a$. The two logged pairs force $c=8$. Eight metres is two metres shallower than $10$, not a rounding of $10$.`,
    `**4.** Equal exponents would have been needed for a second meeting or for a dead heat at every depth. Leah's $\\frac{1}{2}$ and Omar's $\\frac{3}{2}$ differ by $1$, so the leftover is linear in $d$ and crosses $1$ once. Past that crossing Omar's lead is permanent.`,
    `**4.** Factoring $d^{\\frac{1}{2}}(4+d/2)$ makes the obstruction visible: a power times a linear polynomial is not a power. Adding the two wells is how a joint yield is formed, and addition of distinct powers never returns a monomial.`,
    `**4.** Leah's exponent $\\frac{1}{2}<1$ is the contrasting story: her flow grows more slowly than depth. This letter is Omar only. Comparing $k=\\frac{1}{2}$ with $a=4$ and calling Omar weaker is a coefficient comparison, not a speed comparison. Speed is the exponent.`,
  ],
  "math-8-14": [
    `**4.** Letter C will say unit cost falls. A falling average is compatible with a non-power total. The function-class claim is settled by $F=50\\neq 0$, independently of those later unit costs. Zero setup would have been needed for a power of $n$.`,
    `**4.** Setting the total to peak would require $C'(n)=0$, hence $25/\\sqrt{n}=0$, which never happens. A negative square-root coefficient would have been a different shop. Nora's $A=50$ is positive, so every extra copy adds something, however little.`,
    `**4.** Extra arithmetic at $n=100$: unit cost is $50/100+50/10=5.5$ euros per copy, below the $n=64$ figure of $7.03$. The fall continues. An exponent on the variable term of $2$ would have flipped this average upward after dividing by $n$.`,
    `**4.** The setup of $50$ is what carries $250$ at $n=16$ across the $280$ line by $n=25$. Dropping $F$ would have left $C(25)=250$, under $280$, and this claim would have been false. The two invoices refuse $F=0$.`,
    `**4.** $C(49)=50+50\\cdot 7=400$ on the nose, at $49$ copies, not at $36$. Pointing the round $400$ at $n=36$ is a mix of two runs. The recovered $350$ at $36$ copies sits $50$ below $400$, and that $50$ is the setup.`,
  ],
  "math-8-15": [
    `**4.** Extra check at purity $4$: $S(4)=8$, four times smaller than $S(16)=32$, matching the fourfold drop in purity. That lockstep is proportionality. A leftover outer exponent other than $\\frac{2}{3}$ would have broken the lockstep and this claim with it.`,
    `**4.** Parallel quotes with a gap, for example a rival $2u+5$, would never meet the refinery $2u$. The stem's rival has slope $1.8$, so they meet once, at $u=25$, with common strength $50$. "Never meet" would have needed equal slopes.`,
    `**4.** The refinery's composed $S=2u$ is a power. The rival is affine. Mixing those two quotes is how both of them get called powers. An intercept of $0$ on the rival would have made this claim true. The stem's intercept is $5$.`,
    `**4.** The rival at $u=36$ is $69.8$, just under $70$, on the wrong quote. Metal at $u=36$ is $1728$ tonnes, on the wrong quantity. The composed refinery strength is $72$, two above $70$. Tight, genuine, and the audited $A=8$ is what forces the $2$.`,
    `**4.** The rival at $u=9$ is $21.2$, which does sit above $20$, on the wrong quote. Metal $M(9)=216$ is the wrong stage. Composed strength is $18$. Small purities give small strengths on a line through the origin, and $9$ is below the crossing $25$.`,
  ],
  "math-8-16": [
    `**4.** If the doubling had multiplied load by $1.5$, then $r<1$ and this claim would have been false. The stress test $2^{r}=4$ forces $r=2$, and $2>1$ is the whole comparison with the job count. Coefficients never enter a growth-rate question.`,
    `**4.** Going up, doubling multiplies by $4$. Going down, halving multiplies by $1/4$. A linear guess treats those as $2$ and $1/2$. The square law is not that guess. $L(4)=8$ against $L(8)=32$ is the concrete quartering.`,
    `**4.** At $x=20$, where the alarm first trips, load per job is $10$, twice the ten-job average of $5$. The average keeps climbing. An exponent of $1$ would have frozen the average at $A$, and this claim would have been false.`,
    `**4.** The inversion $x=20$ is this letter's own extra step: $\\frac{1}{2}x^{2}=200$ gives $x=20$, four jobs past $16$. A gap of $72$ points at $16$ jobs is not a rounding of $200$. Dropping $A$ and reporting $256$ would have tripped the alarm by accident.`,
    ``,
  ],
  "math-8-17": [
    `**4.** Average product $Q/x=12/\\sqrt{x}$ falls in step with the slope: $2.4$ responses per unit at $x=25$ and $1.2$ at $x=100$. Height $Q(100)=120>Q(25)=60$ is not productivity. Convex $r>1$ would have flipped both the slope comparison and the average.`,
    `**4.** The logged jump $25\\to 100$ is a quadrupling, which does double $Q$, and that identity belongs to $k=4$, not to $k=2$. Mixing those two multipliers is how this claim can look true. Doubling $25$ is $50$, and $Q(50)\\approx 85$, not $120$.`,
    `**4.** Extra arithmetic at the cap: $Q(400)/400=0.6$, a quarter of the $x=25$ average. The fall is monotone. An exponent above one, as in the server-load task, would have raised the average instead.`,
    `**4.** Using $A=10$ from $60/6$ would have given $Q(400)=200$ and made the claim true by a wrong coefficient. The gain is $A(10-5)=60$, so $A=12$ and $Q(400)=240$. The cap is on intensity, and $240$ responses are allowed.`,
    ``,
  ],
  "math-8-18": [
    `**4.** Two meetings would have needed a cubic gap or a second factor. $n(n-16)$ has one positive root. Checking $n=1$ with $C=1<D=16$ and $n=32$ with $C=1024>D=512$ is two sides of a single crossing, not two crossings.`,
    `**4.** Coefficients $a=1<b=16$ set where they meet, not who is cheaper at large $n$. Past $n=16$ the larger exponent wins, and that exponent sits on automated cost. "Machines get cheaper on large batches" is a different model.`,
    `**4.** Manual unit cost is the constant $16$. Automated unit cost is $n$. They agree at the meeting and then automated unit cost keeps rising, which is why automation loses on large batches. An exponent $r\\le 1$ on $C$ would have frozen or lowered that average.`,
    `**4.** At $n=20$ the gap is $80$, which does sit under $100$. The claim is $n=25$, where $n(n-16)=225$. Linearising the gap from the meeting by $9\\cdot 9=81$ is the trap that passes "$<100$" on a wrong product.`,
    ``,
  ],
  "math-8-19": [
    `**4.** Comparing $32$ pallets with $16$ staff and seeing two pallets per person is an average, not a growth rate. Growth rate is $r$ against $1$. The recorded shift doubled in staff would yield about $45$ pallets, not $64$. That $\\sqrt{2}$ factor is $r=\\frac{1}{2}$.`,
    `**4.** Quadrupling staff, $16\\to 64$, does double throughput to $H(64)=64$. That is $k=4$, not $k=2$. Mixing those multipliers is how a doubling claim can look true. Doubling $16$ staff is $32$ staff, and $H(32)\\approx 45$, not $64$.`,
    `**4.** Calling the cap $80 s^{0}$ a power describes the capped piece alone. Billed throughput is $\\min(H(s),80)$, two formulas glued together, and that glue is not a monomial on the whole domain $s>0$. One exponent on $s<100$ and another on $s\\ge 100$ is two powers, not one.`,
    `**4.** The bind is at $s=100$, thirty-six staff past $64$. $H(64)=64$ matching the staff count is a coincidence of $A=8$ and $\\sqrt{64}=8$, not a reason the cap of $80$ has bound. The cap is $80$ pallets, not $64$.`,
    ``,
  ],
  "math-8-20": [
    `**4.** The two levels $W(4)=27$ and $W(9)=8$ already show a $19$ ms cut across five extra servers, about $3.8$ ms per server on average. The instantaneous cuts $10.1$ and $1.3$ sit on either side of that average, steeper at $4$ and flatter at $9$. A rising steepness would have needed a delay that exploded toward a wall.`,
    `**4.** Extra check: $k=(216/27)^{\\frac{2}{3}}=4$ returns the four-server fleet from $W=27$. A logarithmic inverse would not have sent $27$ ms back to $4$ servers. The stem is a pure monomial, so the inverse is a power.`,
    `**4.** Wait here drops by more than half on a doubling, which is a different miss from a square-root wait that would have dropped by less than half. The claim said halves, factor $1/2$, and $2^{-\\frac{3}{2}}\\approx 0.354$ is not $1/2$. Exponent $-1$ would have been needed.`,
    `**4.** $W(4)=27$ does sit above $10$, on the other staffing. Between $4$ and $9$ servers the wait crosses $10$, and at $9$ it is already $8$. Copying the recorded cut of $19$ as if it were $W(9)$ would have passed the threshold on a difference rather than a level.`,
    ``,
  ],
};

for (const t of arr) {
  const xs = extra[t.id];
  if (!xs) continue;
  for (let i = 0; i < 5; i++) {
    if (!xs[i]) continue;
    t.tactical_explanations[i] = spliceBeforeCloser(t.tactical_explanations[i], xs[i]);
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (t.sort_order < 11 || t.sort_order > 20) continue;
  console.log(t.id, t.tactical_explanations.map(words).join("/"));
}
