import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra) {
  const t = text.trimEnd();
  const idx = t.lastIndexOf("\n");
  return t.slice(0, idx).trimEnd() + "\n\n" + extra.trim() + "\n\n" + t.slice(idx + 1);
}

const extras = {
  "math-8-71": {
    0: `**1.** The scale rule $4^{r}=\\frac{1}{8}$ is $4^{-\\frac{3}{2}}=\\frac{1}{8}$ exactly, because $4^{\\frac{3}{2}}=8$. That locks $r=-\\frac{3}{2}<-1$.\n\n**2.** A price factor $k=1.5$ cuts subscribers by $1.5^{-\\frac{3}{2}}\\approx 0.544$, more than a $1.5^{-1}\\approx 0.667$ inverse-linear cut. Every $k>1$ is the same ranking.\n\nThe opposite verdict would have needed the quadrupling rule to have been $4^{r}=\\frac{1}{4}$, exponent $-1$. The stem is $\\frac{1}{8}$.`,
    1: `Five hundred sits under six hundred by $100$ thousand euros. Mixing subscriber count $q(16)\\approx 31.25$ with the revenue cutoff is a units error. The opposite verdict would have needed $R(16)\\ge 600$, hence $A\\ge 2400$. The four-euro level locks $A=2000$.`,
    3: `**1.** From $R(4)=1000$ a doubling of revenue is $R=2000$, which is $2000 p^{-\\frac{1}{2}}=2000$, so $p=1$. That is a quarter of $4$ euros, not a half.\n\n**2.** At $p=2$, $R(2)\\approx 1414$, which is only a $41\\%$ rise, not a doubling. Halving the logged price is letter D's false claim, and the till proves it short.\n\n**3.** If leftover exponent on $R$ had been $-1$, then $R(2)=2000$ would have been a doubling and the letter would have flipped. Demand exponent $-2$ would have done that. The scale rule locked demand at $-\\frac{3}{2}$.`,
  },
  "math-8-72": {
    0: `**1.** Subtracting the invoices is $10A=300$, so $A=30$ and $F=400$. The bill is $400+30\\sqrt{n}$. A monomial cannot hide a $400$-euro floor.\n\n**2.** Plotting $C$ against $\\sqrt{n}$ is a line with intercept $400$, not a line through the origin. The opposite verdict would have needed those two invoices to lie on a ray from the origin, for instance $C(100)=700$ and $C(400)=1400$. The second invoice is $1000$.`,
    3: `**1.** The square-root term doubles on a quadrupling, $300$ to $600$ at the $100$-branch invoice, but adding the retainer gives $700$ to $1000$, a factor of $\\frac{10}{7}\\approx 1.43$, not $2$.\n\n**2.** A rushed solver who doubled $700$ to $1400$ would have called the statement true. That is the $F=0$ fantasy letter A already refused.\n\n**3.** The opposite verdict would have needed the retainer to scale with $\\sqrt{n}$, which would have made the whole bill a pure power. The stem's $F$ is a constant.`,
  },
  "math-8-73": {
    0: `**1.** Setting $T'(q)=0$ is $-4800/q^{2}+3=0$, so $q^{2}=1600$ and $q=40$, the recorded crossing. The second derivative $9600/q^{3}$ is positive there, a minimum.\n\n**2.** A rushed solver who minimised $O$ alone would have claimed $q\\to\\infty$, and who minimised $H$ alone would have claimed $q\\to 0$. The annual total is the sum, and its valley is where the two components meet.\n\n**3.** The opposite verdict would have needed leftover exponents whose ratio was not $-1$, so that $O=H$ was not $T'=0$. For $O\\propto q^{-1}$ and $H\\propto q$, the meeting is the cheapest batch.`,
    3: `**1.** $T(20)=\\frac{4800}{20}+3\\cdot 20=240+60=300$ and $T(80)=60+240=300$. The $60$-euro penalty each side of $40$ is the same number.\n\n**2.** A linear ruler from $40$ calls $80$ twice as far as $20$ and expects a larger penalty. The EOQ scale is reciprocal: $40/20=80/40=2$ as a factor, equal on a log-batch axis.\n\n**3.** The opposite verdict would have needed $H$ not linear in $q$, which would break $T(1600/q)=T(q)$. The stem is $H=3q$.`,
  },
  "math-8-74": {
    0: `**1.** Output exponent $\\frac{3}{4}$ minus $1$ is $-\\frac{1}{4}$. Those are different powers of the same $L$. Average product is still a monomial.\n\n**2.** A rushed solver who wrote $\\frac{Q}{L}=12 L^{\\frac{3}{4}}$ would have kept the output exponent and mixed total with average. At $L=16$ that wrong average would have been $96$, not $6$.\n\n**3.** The opposite verdict would have needed output not a power, so that $Q/L$ was not a power either, or a claim that the two exponents were equal.`,
    2: `**1.** $k=2^{\\frac{4}{3}}\\approx 2.52$ from $16$ hours is about $40.3$ hours, not $32$. $Q(32)\\approx 161<192$.\n\n**2.** A rushed solver who doubled hours with output would have called the statement true. That is exponent $1$. The two shifts force $\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$ against $\\frac{324}{96}=\\left(\\frac{3}{2}\\right)^{3}$, hence $r=\\frac{3}{4}$.\n\n**3.** The opposite verdict would have needed $r=1$. Then $16$ hours to $32$ hours would have doubled $96$ to $192$. The log's $81$-hour output of $324$ already refuses lockstep from $96$.`,
  },
  "math-8-75": {
    0: `**1.** Solving $8+50 n^{-\\frac{1}{2}}=8$ forces $50/\\sqrt{n}=0$, which never happens for finite $n$. The floor is an asymptote.\n\n**2.** A rushed solver who cancelled the $8$ and claimed $t(n)=8$ for all $n$ would have mixed an equation with an identity. The two timings $18$ and $13$ both sit strictly above $8$.\n\n**3.** The opposite verdict would have needed $A=0$. Then unit time would already equal the floor at $n=1$. The timings refuse a constant $t$.`,
    3: `**1.** From $n=25$ to $n=100$ the total falls $18$ to $13$, a factor $\\frac{13}{18}\\approx 0.72$, not $\\frac{1}{2}$. The learning term halved; the floor did not.\n\n**2.** A further quadrupling to $n=400$ gives $t=8+2.5=10.5$, factor $\\frac{10.5}{13}\\approx 0.81$ from $13$, even farther from a halving as the floor dominates.\n\n**3.** The opposite verdict would have needed $F=0$. Letter A already used that nonzero floor as an asymptote; this letter is the same floor blocking a halved total.`,
  },
  "math-8-76": {
    2: `**1.** $R'(8)=60\\cdot 8^{-\\frac{1}{3}}=30$ and $R'(27)=60\\cdot 3^{-1}=20$. An extra tonne adds less later, not more.\n\n**2.** A rushed solver who saw $R(27)=810>R(8)=360$ and inferred a steeper extra tonne would have mixed a higher level with a steeper slope.\n\n**3.** The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $30>20$.`,
    3: `**1.** The ratio $R/C=3/x^{\\frac{1}{3}}$ equals $1$ at $x=27$ and equals $3/4$ at $x=64$, already below $1$. At $x=125$ it is $3/5=0.6$, lower still.\n\n**2.** Extra feed after the meeting widens the gap: $P(27)=0$, $P(64)=-480$, $P(125)=-1500$. The surplus does not return.\n\n**3.** The opposite verdict would have needed revenue leftover exponent at least $1$, so that $R$ could recross a linear $C$. The stem is $\\frac{2}{3}$.`,
  },
  "math-8-77": {
    0: `A fourfold index that multiplied cost by $4$ would have been exponent $1$. The recovered factor is $8$. Checking $f(4)=48$ and $f(16)=384$ is that factor sitting in the surviving gap $336=384-48$. The opposite verdict would have needed $r=1$.`,
    2: `Cost grows faster than the index because $\\frac{3}{2}>1$. The opposite verdict would have needed an exponent of $1$ or less. Letter A already used the factor $8$ on a fourfold index; this letter is the same $r>1$ fact read as a ranking rather than as a scale.`,
    3: `**1.** $f'(4)=9\\cdot 2=18$ and $f'(9)=9\\cdot 3=27$. Later equal index steps add more euros.\n\n**2.** From $9$ to $25$, a gap of $16$ index points, the cost rise is $588$. From $4$ to $20$, the same width, the rise is about $488$. Later equal-width gaps add more.\n\n**3.** The opposite verdict would have needed $r=1$, equal euro gaps on equal index gaps. The surviving record is a three-halves power.`,
    4: `**1.** $f(25)=6\\cdot 125=750$ and $f(9)=162$, so the rise is $588$, which is not under $500$.\n\n**2.** A rushed solver who used $f(25)-f(16)=366$ would have moved the lower index from $9$ to $16$ and flipped the letter.\n\n**3.** The opposite verdict would have needed $A<500/98\\approx 5.10$. The surviving gap locks $A=6$.`,
  },
  "math-8-78": {
    2: `**1.** Doubling the ceiling multiplies admissible scale by $2^{\\frac{2}{3}}\\approx 1.59$, from $s=16$ to about $25.4$, not to $32$.\n\n**2.** A rushed solver who doubled $16$ to $32$ would have called the statement true. That is inverse exponent $1$.\n\n**3.** The opposite verdict would have needed original exponent $1$. The stem is $\\frac{3}{2}$, so the inverse is $\\frac{2}{3}<1$ and permitted scale lags the permitted load.`,
    3: `**1.** Doubled $A$ gives $10 s^{\\frac{3}{2}}=320$, so $s^{\\frac{3}{2}}=32$ and $s=32^{\\frac{2}{3}}\\approx 10.08$, not $8$.\n\n**2.** Halving $16$ to $8$ would have needed $s$ to scale as $1/A$. Load scales as $A s^{\\frac{3}{2}}$, so $s$ scales as $A^{-\\frac{2}{3}}$.\n\n**3.** The opposite verdict would have needed $r=1$. Checking $W$ at $s\\approx 10.08$ with $A=10$ returns the same $320$ kg cap, as it must.`,
  },
  "math-8-79": {
    0: `**1.** Shortcut: $-2\\times 0.25=-0.50$. Exact: $(5/4)^{-2}=16/25=0.64$, a $36\\%$ cut. They disagree by $14$ percentage points.\n\n**2.** On the recovered book, shortcut $2000$ spaces versus exact $2560$. A $1\\%$ rise would have been close, $2\\%$ versus $1.98\\%$. A $25\\%$ step is not that tiny.\n\n**3.** The opposite verdict would have needed a tiny percentage change, or an exponent of $0$, a constant demand. The stem is inverse square at a $25\\%$ step.`,
    3: `**1.** A $25\\%$ cut is the factor $3/4$, and $(3/4)^{-2}=16/9$, a $77.8\\%$ rise, not a $36\\%$ rise.\n\n**2.** Spaces: $q(2.25)\\approx 7111$ versus $q(3.75)=2560$. The up-move adds about $3111$ spaces; the down-move loses $1440$. Not the same percentage and not the same count.\n\n**3.** The opposite verdict would have needed finite percentage moves that were odd-symmetric, a linear-in-logs property powers do not have at $25\\%$ steps.`,
  },
  "math-8-80": {
    2: `**1.** $2^{3}=8$, so doubling height octuples mass. The $0.5$ m bell at $30$ kg becomes $240$ kg at $1$ m, not $60$ kg.\n\n**2.** A rushed solver who copied the doubling from height onto mass would have called the statement true. That is exponent $1$, which letter A already refused.\n\n**3.** The opposite verdict would have needed $r=1$. Geometric similarity of bronze bells is a volume cube, leftover exponent $3$.`,
    3: `**1.** $M/h=240 h^{2}$. At $0.5$ m that intensity is $60$; at $1$ m it is $240$; at $1.5$ m it is $540$. Not constant.\n\n**2.** A rushed solver who divided $30$ by $0.5$ once and treated $60$ kg per metre as a law would have missed the later quotients.\n\n**3.** The opposite verdict would have needed leftover exponent $0$ on $M/h$, hence $r=1$. The pattern book is a cube.`,
  },
};

const fp = path.join(__dirname, "71_80.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    t.tactical_explanations[Number(j)] = insertBeforeCloser(
      t.tactical_explanations[Number(j)],
      extra
    );
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) console.log(t.id, t.tactical_explanations.map(words).join(" "));
