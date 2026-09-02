import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(dir, "11_20.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const updates = {
  "math-8-11": {
    overview: `Marina's harvest follows the power $Y(h)=A h^{r}$ kilograms after $h>0$ hours of watering. Both constants are unknown, so two observations are needed. The ratio of the logged harvests cancels $A$ and isolates $r$; the eight-hour level then pins $A$.

A scale question uses $k^{r}$. Because $r<1$, harvest grows more slowly than watering time, and an extra hour adds less later than earlier. A nonzero power inverts to another power, so hours needed for a given harvest are themselves a power of that harvest.`,
    letters: [
      `**A.** → True

The two logged pairs give the ratio

$$\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}$$

$$\\frac{3}{2}=\\left(\\frac{3}{2}\\right)^{3r}$$

so $r=\\frac{1}{3}$. That exponent sits below one, which means harvest grows more slowly than watering time, so the statement is True.`,
      `**B.** → False

Multiplying hours by $k$ multiplies harvest by $k^{r}$, because $A$ cancels:

$$\\frac{Y(kh)}{Y(h)}=k^{r}$$

For a doubling and $r=\\frac{1}{3}$:

$$2^{\\frac{1}{3}}\\neq 2$$

Harvest is not doubled, so the statement is False.`,
      `**C.** → True

With $r=\\frac{1}{3}$ and $Y(8)=4$, the rule is $Y(h)=2h^{\\frac{1}{3}}$. Doubling the four-kilogram harvest means $Y(h)=8$:

$$2h^{\\frac{1}{3}}=8$$

$$h=64$$

That is eight times the logged $8$ hours, which is more than a doubling, so the statement is True.`,
      `**D.** → False

An extra hour is the slope of $Y(h)=2h^{\\frac{1}{3}}$:

$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$

The leftover exponent is negative, so $Y'(27)<Y'(8)$. Later hours buy less crop, not more, so the statement is False.`,
      `**E.** → True

A nonzero power inverts to another power. Raise $Y=2h^{\\frac{1}{3}}$ to the reciprocal exponent $3$:

$$h=\\left(\\frac{Y}{2}\\right)^{3}$$

Hours needed for a given harvest are a monomial in that harvest, so the statement is True.`,
    ],
  },
  "math-8-12": {
    overview: `Callers wait according to the power $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. The exponent is given, so the recorded shift of $4$ agents at $24$ minutes fixes $A$. Staffing cannot exceed $50$ agents.

A level question uses the recovered rule. A scale question uses $k^{-\\frac{1}{2}}$, in which $A$ cancels. A nonzero power inverts to another power, so the team needed for a target wait is itself a power of that wait.`,
    letters: [
      `**A.** → True

The recorded wait pins $A$ through $W(4)=24$:

$$4^{-\\frac{1}{2}}=\\frac{1}{2}$$

$$\\frac{A}{2}=24$$

$$A=48$$

At nine agents, $W(9)=\\frac{48}{3}=16$, which sits below $20$ minutes, so the statement is True.`,
      `**B.** → True

A nonzero power inverts to another power. From $W=48 n^{-\\frac{1}{2}}$:

$$n=\\left(\\frac{48}{W}\\right)^{2}$$

Agents needed for a given wait are a monomial in that wait, so the statement is True.`,
      `**C.** → False

Wait is $W(n)=48n^{-\\frac{1}{2}}$, so an extra agent is the slope

$$W'(n)=-24n^{-\\frac{3}{2}}$$

The size of that cut falls as $n$ rises, so an extra agent cuts less wait after $16$ agents than after $4$, not more. The statement is False.`,
      `**D.** → True

A six-minute wait inverts the recovered rule:

$$n=\\left(\\frac{48}{6}\\right)^{2}=64$$

That staffing exceeds the $50$-agent cap, so the statement is True.`,
      `**E.** → False

Doubling the team multiplies wait by $k^{-\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{W(2n)}{W(n)}=2^{-\\frac{1}{2}}$$

$$2^{-\\frac{1}{2}}\\neq\\frac{1}{2}$$

Wait is not halved, so the statement is False.`,
    ],
  },
  "math-8-13": {
    overview: `Leah and Omar pump at the same depth $d>0$ metres. Leah's well is the power $Q_{L}(d)=a d^{\\frac{1}{2}}$, and Omar's is $Q_{O}(d)=k d^{\\frac{3}{2}}$. Each exponent is given, so each logged level recovers its coefficient.

A level question uses a recovered rule. The ratio $\\frac{Q_{O}}{Q_{L}}$ is a leftover power of $d$, so the wells meet at most once and the leader past that meeting stays ahead. A sum of two distinct powers is not itself a single power.`,
    letters: [
      `**A.** → True

Leah's logged pair pins $a$ through $Q_{L}(9)=12$:

$$9^{\\frac{1}{2}}=3$$

$$3a=12$$

$$a=4$$

At four metres, $Q_{L}(4)=4\\cdot 2=8$, which sits above $7$ litres a minute, so the statement is True.`,
      `**B.** → True

Omar's logged pair pins $k$ through $Q_{O}(4)=4$:

$$4^{\\frac{3}{2}}=8$$

$$8k=4$$

$$k=\\frac{1}{2}$$

The ratio of the recovered rules is $\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}$. That equals $1$ at $d=8$, which is shallower than $10$ metres, so the statement is True.`,
      `**C.** → True

Past the unique positive meeting $d=8$, the leftover factor $\\frac{d}{8}$ exceeds $1$ and keeps climbing.

A second crossing would need that ratio to come back through $1$, which a positive leftover power of $d$ cannot do, so the statement is True.`,
      `**D.** → False

Together the wells are $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$. Distinct exponents cannot be absorbed into one monomial.

A sum of two powers is a power only when the exponents match, so the statement is False.`,
      `**E.** → True

Omar's exponent $\\frac{3}{2}$ sits above $1$, so each extra metre buys more litres than the metre before it.

Flow outruns depth whenever the exponent exceeds one, so the statement is True.`,
    ],
  },
  "math-8-14": {
    overview: `Nora bills a run of $n>0$ copies as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. Two invoices recover both unknowns. Subtracting isolates $A$; either invoice then pins $F$.

Because of the leftover constant $F$, the bill is not a power of the run. The variable term still has a positive exponent, so the total bill keeps rising even while cost per copy falls.`,
    letters: [
      `**A.** → True

The two invoices are $F+4A=250$ and $F+8A=450$. Subtracting isolates $A=50$ and then $F=50$, so

$$C(n)=50+50n^{\\frac{1}{2}}$$

A power of the run cannot carry a leftover constant. The setup of $50$ euros kills that shape, so the statement is True.`,
      `**B.** → False

The slope of the recovered bill is

$$C'(n)=25n^{-\\frac{1}{2}}$$

which stays positive for every $n>0$. Printing more copies never turns the total downward, so the statement is False.`,
      `**C.** → True

Cost per copy is $\\frac{50}{n}+50n^{-\\frac{1}{2}}$. Both pieces decline as the run lengthens, because the setup is spread and the leftover exponent on the variable term is negative.

A longer run is cheaper per copy, so the statement is True.`,
      `**D.** → True

At twenty-five copies the recovered bill is a level:

$$25^{\\frac{1}{2}}=5$$

$$C(25)=50+50\\cdot 5=300$$

That sits above $280$ euros, so the statement is True.`,
      `**E.** → False

At thirty-six copies:

$$36^{\\frac{1}{2}}=6$$

$$C(36)=50+50\\cdot 6=350$$

The claim wants more than $400$. The bill is $350$, so the statement is False.`,
    ],
  },
  "math-8-15": {
    overview: `A refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. The audited gain from purity $9$ to $16$ is a difference of two levels, which recovers $A$. Alloy strength is the further power $S=\\frac{1}{2}M^{\\frac{2}{3}}$.

Composing the two stages multiplies the exponents. A rival mill quotes the affine rule $1.8u+5$, which is not a power of purity because of the intercept.`,
    letters: [
      `**A.** → True

The audited gain is $A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296$. Since $16^{\\frac{3}{2}}=64$ and $9^{\\frac{3}{2}}=27$:

$$37A=296$$

$$A=8$$

Then $S=\\frac{1}{2}(8u^{\\frac{3}{2}})^{\\frac{2}{3}}=2u$. The inner $\\frac{3}{2}$ and the outer $\\frac{2}{3}$ multiply to $1$, so strength is proportional to purity, and the statement is True.`,
      `**B.** → False

The composed refinery quote is $S(u)=2u$. Setting it against the rival:

$$2u=1.8u+5$$

$$u=25$$

The quotes meet at purity $25$, so the statement is False.`,
      `**C.** → False

The rival quotes $1.8u+5$. At purity zero that quote still equals $5$, so there is a leftover constant.

A power of purity cannot carry an intercept, so the statement is False.`,
      `**D.** → True

Once $S(u)=2u$, strength at purity $36$ is a level:

$$S(36)=2\\cdot 36=72$$

That sits above $70$, so the statement is True.`,
      `**E.** → False

The same linear law at purity $9$:

$$S(9)=2\\cdot 9=18$$

The claim wants a strength already above $20$. Eighteen sits below that line, so the statement is False.`,
    ],
  },
  "math-8-16": {
    overview: `Peak load is the power $L(x)=A x^{r}$ in the number $x>0$ of simultaneous jobs. The doubling rule cancels $A$ and isolates $r$; the eight-job reading then pins $A$. The hardware alarm is a level constraint $L(x)=200$.

Because the recovered exponent exceeds one, load outruns the job count and load per job rises. A scale question uses $k^{r}$.`,
    letters: [
      `**A.** → True

Doubling the job count multiplies load by $4$:

$$2^{r}=4$$

$$r=2$$

That exponent sits above one, so peak load grows faster than the job count, and the statement is True.`,
      `**B.** → False

Halving jobs is $k=\\frac{1}{2}$. The coefficient cancels:

$$\\frac{L(kx)}{L(x)}=k^{2}$$

$$\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}$$

Load drops to a quarter, not to a half, so the statement is False.`,
      `**C.** → True

The eight-job reading with $r=2$ pins $A\\cdot 8^{2}=32$, so $A=\\frac{1}{2}$ and $L(x)=\\frac{1}{2}x^{2}$. Load per job is then

$$\\frac{L(x)}{x}=\\frac{1}{2}x$$

That leftover power is positive, so the average climbs with the job count, and the statement is True.`,
      `**D.** → False

At sixteen jobs the recovered square law gives

$$L(16)=\\frac{1}{2}\\cdot 16^{2}=128$$

The alarm trips at $200$, and $128$ sits below that threshold, so the statement is False.`,
      `**E.** → True

At ten jobs:

$$L(10)=\\frac{1}{2}\\cdot 10^{2}=50$$

That sits above $40$, so the statement is True.`,
    ],
  },
  "math-8-17": {
    overview: `Usable survey responses follow the power $Q(x)=A x^{\\frac{1}{2}}$, where $x>0$ is outreach intensity. The recorded gain from intensity $25$ to $100$ is a difference of two square-root levels, which recovers $A$. The fieldwork budget caps intensity at $400$.

Because the exponent sits below one, an extra unit of intensity adds less later than earlier, and responses per unit of intensity fall. A scale question uses $k^{\\frac{1}{2}}$.`,
    letters: [
      `**A.** → True

The recorded gain is $A\\bigl(10-5\\bigr)=60$, so $A=12$ and $Q(x)=12x^{\\frac{1}{2}}$. An extra unit is the slope

$$Q'(x)=6x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so $Q'(25)>Q'(100)$. An extra unit adds more at $25$ than at $100$, and the statement is True.`,
      `**B.** → False

Doubling intensity multiplies responses by $k^{\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}$$

$$2^{\\frac{1}{2}}\\neq 2$$

Responses are not doubled, so the statement is False.`,
      `**C.** → True

Responses per unit of intensity are $12x^{-\\frac{1}{2}}$. The leftover exponent is negative, so that average falls as outreach rises.

Average and marginal product move together on a power below one, so the statement is True.`,
      `**D.** → False

The budget cap is on intensity, not on responses. At the largest legal $x=400$:

$$Q(400)=12\\cdot 20=240$$

The survey can yield $240$ usable responses, which is not a ceiling of $200$, so the statement is False.`,
      `**E.** → True

At intensity $81$:

$$81^{\\frac{1}{2}}=9$$

$$Q(81)=12\\cdot 9=108$$

That sits above $100$, so the statement is True.`,
    ],
  },
  "math-8-18": {
    overview: `Two inspection procedures for a batch of $n>0$ documents are the powers $C(n)=a n^{2}$ and $D(n)=b n$. Each exponent is given, and the common reading of $256$ at $n=16$ recovers both coefficients.

Subtracting isolates the unique positive meeting. Past that meeting the larger exponent leads, so the quadratic automated bill is the more expensive one. Automated cost per document is the leftover power $n$.`,
    letters: [
      `**A.** → True

The common reading gives $a\\cdot 16^{2}=256$ and $b\\cdot 16=256$, so $a=1$, $b=16$, and

$$C(n)-D(n)=n(n-16)$$

On $n>0$ the roots are $n=0$, outside the domain, and $n=16$. They meet only at sixteen documents, so the statement is True.`,
      `**B.** → False

For $n>16$ the factor $n-16$ is positive, so $C>D$. The quadratic automated bill is the more expensive one past the meeting, not the cheaper one.

Automation is cheaper only below $16$, so the statement is False.`,
      `**C.** → True

Automated cost per document is the leftover power

$$\\frac{C(n)}{n}=n$$

That leftover exponent is positive, so unit cost rises with the batch, and the statement is True.`,
      `**D.** → False

At twenty-five documents the two recovered bills are

$$C(25)=625, \\qquad D(25)=400$$

The gap is $225$, which is not less than $100$, so the statement is False.`,
      `**E.** → True

On a batch of nine documents the automated bill is a level:

$$C(9)=9^{2}=81$$

That sits under $100$, so the statement is True.`,
    ],
  },
  "math-8-19": {
    overview: `Warehouse throughput follows the power $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. The sixteen-staff reading fixes $A$. The service contract caps billed throughput at $80$ pallets per hour, so billed output is $\\min(H(s),80)$ once the ceiling binds.

Because the exponent sits below one, throughput grows more slowly than headcount. A scale question uses $k^{\\frac{1}{2}}$. A horizontal cap is not a power of staff.`,
    letters: [
      `**A.** → True

The recorded shift pins $A$ through $H(16)=32$:

$$16^{\\frac{1}{2}}=4$$

$$4A=32$$

$$A=8$$

The exponent $\\frac{1}{2}$ sits below one, so throughput grows more slowly than headcount, and the statement is True.`,
      `**B.** → False

Doubling staff multiplies throughput by $k^{\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}$$

$$2^{\\frac{1}{2}}\\neq 2$$

Throughput is not doubled, so the statement is False.`,
      `**C.** → True

The ceiling binds when $8s^{\\frac{1}{2}}=80$, so $s=100$. From that staffing onward billed throughput is the constant $80$.

A horizontal cap is not $A s^{r}$, so billed throughput is no longer a power of staff, and the statement is True.`,
      `**D.** → False

At sixty-four staff the uncapped rule gives

$$H(64)=8\\cdot 8=64$$

That sits below the cap of $80$, so the ceiling is not yet reached, and the statement is False.`,
      `**E.** → True

At eighty-one staff:

$$81^{\\frac{1}{2}}=9$$

$$H(81)=8\\cdot 9=72$$

That sits above $70$ pallets per hour, so the statement is True.`,
    ],
  },
  "math-8-20": {
    overview: `Median response time follows the power $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. The exponent is given, so the recorded cut from $4$ servers to $9$ servers, a difference of two levels, recovers $A$.

A negative leftover slope means an extra server helps more on the small cluster. A scale question uses $k^{-\\frac{3}{2}}$. A nonzero power inverts to another power, so the server count needed for a given wait is itself a power of that wait.`,
    letters: [
      `**A.** → True

The recorded cut is $A\\bigl(4^{-\\frac{3}{2}}-9^{-\\frac{3}{2}}\\bigr)=19$. Since $4^{\\frac{3}{2}}=8$ and $9^{\\frac{3}{2}}=27$:

$$A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19$$

$$A=216$$

Wait is then $W(k)=216k^{-\\frac{3}{2}}$, so $W'(k)=-324k^{-\\frac{5}{2}}$. The size of that cut is larger at $4$ servers than at $9$, and the statement is True.`,
      `**B.** → True

A nonzero power inverts to another power. From $W=216k^{-\\frac{3}{2}}$:

$$k=\\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}$$

Servers needed for a given wait are a monomial in that wait, so the statement is True.`,
      `**C.** → False

Doubling servers multiplies wait by $k^{-\\frac{3}{2}}$, because $A$ cancels:

$$\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}$$

$$2^{-\\frac{3}{2}}\\neq\\frac{1}{2}$$

Wait is not halved, so the statement is False.`,
      `**D.** → False

At nine servers the recovered rule is a level:

$$W(9)=\\frac{216}{27}=8$$

The claim wants a wait of more than $10$ milliseconds. Eight sits below that line, so the statement is False.`,
      `**E.** → True

At four servers:

$$W(4)=\\frac{216}{8}=27$$

That sits above $25$ milliseconds, so the statement is True.`,
    ],
  },
};

let n = 0;
for (const t of arr) {
  const u = updates[t.id];
  if (!u) continue;
  t.solution_overview = u.overview;
  t.tactical_explanations = u.letters;
  n += 1;
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
console.log("patched", n, fp);
