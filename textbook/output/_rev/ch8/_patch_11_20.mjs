import fs from "fs";

const path = new URL("./11_20.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));
const orig = JSON.parse(JSON.stringify(data));

const patch = {
  "math-8-11": {
    overview: `Two harvests pin both unknowns. The harvest ratio equals the watering ratio raised to $r$:

$$
\\frac{Y(27)}{Y(8)}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

The left side is $\\frac{3}{2}$. The watering ratio is a cube of that same $\\frac{3}{2}$:

$$
\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}
$$

so

$$
\\frac{3}{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
3r=1,\\qquad r=\\frac{1}{3}
$$

Eight hours then pin the coefficient. The cube root of $8$ is $2$:

$$
A\\cdot 8^{\\frac{1}{3}}=4
$$

$$
2A=4,\\qquad A=2
$$

Harvest is $Y(h)=2h^{\\frac{1}{3}}$.`,
    tacticals: [
      "**A.** → True\n\nThe two harvests gave $r=\\frac{1}{3}$, which sits below $1$. Harvest therefore grows more slowly than watering time.",
      "**B.** → False\n\nDoubling hours would double harvest only if the exponent were $1$. Hours enter as a cube root, so a clock multiplier $k=2$ contributes only $2^{\\frac{1}{3}}$:\n\n$$\\frac{Y(2h)}{Y(h)}=\\frac{2(2h)^{\\frac{1}{3}}}{2h^{\\frac{1}{3}}}$$\n\n$$=2^{\\frac{1}{3}}$$\n\nNumerically $2^{\\frac{1}{3}}$ is about $1.26$, not $2$. The harvest rises, but not in lockstep with the clock.",
      "**C.** → True\n\nDoubling the recorded $4$ kilograms is a harvest of $8$. From $Y=2h^{\\frac{1}{3}}$:\n\n$$2h^{\\frac{1}{3}}=8$$\n\n$$h^{\\frac{1}{3}}=4$$\n\n$$h=4^{3}=64$$\n\nThe recorded watering time is $8$ hours, and $64=8\\cdot 8$, so she must multiply hours by $8$, more than a doubling.",
      "**D.** → False\n\nThe extra-hour increment is the derivative of $Y(h)=2h^{\\frac{1}{3}}$:\n\n$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$\n\nAfter $8$ hours, $8^{\\frac{2}{3}}=4$:\n\n$$Y'(8)=\\frac{2}{3}\\cdot 8^{-\\frac{2}{3}}=\\frac{2}{3}\\cdot\\frac{1}{4}=\\frac{1}{6}$$\n\nAfter $27$ hours, $27^{\\frac{2}{3}}=9$:\n\n$$Y'(27)=\\frac{2}{3}\\cdot 27^{-\\frac{2}{3}}=\\frac{2}{3}\\cdot\\frac{1}{9}=\\frac{2}{27}$$\n\n$\\frac{2}{27}$ is smaller than $\\frac{1}{6}$, so an extra hour adds less crop after $27$ hours than after $8$, not more.",
      "**E.** → True\n\nSolve $Y=2h^{\\frac{1}{3}}$ for hours. Divide, then raise both sides to the reciprocal exponent $3$:\n\n$$\\frac{Y}{2}=h^{\\frac{1}{3}}$$\n\n$$h=\\left(\\frac{Y}{2}\\right)^{3}$$\n\nHours are a cube of the harvest, still a power function of that harvest.",
    ],
  },
  "math-8-12": {
    overview: `Four agents wait $24$ minutes under an inverse square root. That one audit pins the coefficient:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
\\frac{A}{2}=24,\\qquad A=48
$$

Wait is $W(n)=\\frac{48}{\\sqrt{n}}$. Nine agents, the team a later claim names:

$$
W(9)=\\frac{48}{\\sqrt{9}}=\\frac{48}{3}=16
$$`,
    tacticals: [
      "**A.** → True\n\nNine agents pull the wait to $W(9)=16$ minutes. That already sits below $20$.",
      "**B.** → True\n\nSolve $W=\\frac{48}{\\sqrt{n}}$ for staffing. Isolate the root, then square:\n\n$$\\sqrt{n}=\\frac{48}{W}$$\n\n$$n=\\left(\\frac{48}{W}\\right)^{2}$$\n\nThat is a monomial in $W$ with exponent $-2$, the reciprocal of $-\\frac{1}{2}$, so the number of agents needed for a given wait is itself a power of that wait.",
      "**C.** → False\n\nThe size of the cut is the magnitude of the derivative of $W(n)=48n^{-\\frac{1}{2}}$:\n\n$$W'(n)=-24n^{-\\frac{3}{2}}$$\n\n$$\\lvert W'(n)\\rvert=24n^{-\\frac{3}{2}}$$\n\nAfter $4$ agents, $4^{\\frac{3}{2}}=8$:\n\n$$\\lvert W'(4)\\rvert=24\\cdot\\frac{1}{8}=3$$\n\nAfter $16$ agents, $16^{\\frac{3}{2}}=64$:\n\n$$\\lvert W'(16)\\rvert=24\\cdot\\frac{1}{64}=\\frac{3}{8}$$\n\nThe cut after $16$ agents is smaller than after $4$, not larger.",
      "**D.** → True\n\nA six-minute wait means $W=6$. From $W=\\frac{48}{\\sqrt{n}}$:\n\n$$\\frac{48}{\\sqrt{n}}=6$$\n\n$$\\sqrt{n}=\\frac{48}{6}=8$$\n\n$$n=8^{2}=64$$\n\nSixty-four sits past the $50$-agent cap, so that wait is not reachable on the roster.",
      "**E.** → False\n\nDoubling the team would halve the wait only if the exponent were $-1$. With exponent $-\\frac{1}{2}$ the scale factor is\n\n$$\\frac{W(2n)}{W(n)}=\\frac{48(2n)^{-\\frac{1}{2}}}{48n^{-\\frac{1}{2}}}$$\n\n$$=2^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{2}}$$\n\nabout $0.71$, not $\\frac{1}{2}$. The wait falls, but not by half.",
    ],
  },
  "math-8-13": {
    overview: `Leah's nine-metre reading has square root $3$, so her coefficient is one division:

$$
a\\cdot 9^{\\frac{1}{2}}=12
$$

$$
3a=12,\\qquad a=4
$$

Omar's four-metre reading has $4^{\\frac{3}{2}}=(\\sqrt{4})^{3}=2^{3}=8$, so his coefficient is

$$
k\\cdot 8=4,\\qquad k=\\frac{1}{2}
$$

The two wells are then

$$
Q_{L}(d)=4d^{\\frac{1}{2}},\\qquad Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}
$$

At $4$ metres Leah already pumps

$$
Q_{L}(4)=4\\sqrt{4}=4\\cdot 2=8
$$`,
    tacticals: [
      "**A.** → True\n\nLeah's four-metre flow is $Q_{L}(4)=8$ litres a minute. Eight already clears $7$.",
      "**B.** → True\n\nThe two flows meet when they are equal:\n\n$$4\\sqrt{d}=\\frac{1}{2}d^{\\frac{3}{2}}$$\n\n$$8\\sqrt{d}=d^{\\frac{3}{2}}$$\n\nDivide by $\\sqrt{d}>0$:\n\n$$8=d$$\n\nEight metres is shallower than $10$, so Omar has already overtaken Leah before they reach ten metres.",
      "**C.** → True\n\nThe ratio of the two wells simplifies to a linear comparison against the crossing at $8$ metres:\n\n$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{\\frac{1}{2}d^{\\frac{3}{2}}}{4d^{\\frac{1}{2}}}$$\n\n$$=\\frac{d}{8}$$\n\nThat ratio exceeds $1$ precisely when $d>8$, and past the crossing it only grows, so Omar stays ahead at every greater depth.",
      "**D.** → False\n\nTogether the wells add\n\n$$Q_{L}(d)+Q_{O}(d)=4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$$\n\nA single power of depth has one exponent. Here $\\frac{1}{2}$ and $\\frac{3}{2}$ are different, and both coefficients are nonzero, so neither term can absorb the other.",
      "**E.** → True\n\nOmar's exponent $\\frac{3}{2}$ is larger than $1$, so each extra metre adds more flow than the metre before it. The slope itself rises with depth:\n\n$$Q_{O}'(d)=\\frac{3}{4}d^{\\frac{1}{2}}$$\n\nwhich is the meaning of growing faster than depth.",
    ],
  },
  "math-8-14": {
    overview: `Sixteen copies contribute a square root of $4$ and sixty-four copies a square root of $8$. The two invoices are

$$
F+4A=250
$$

$$
F+8A=450
$$

Subtract to cancel the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200,\\qquad A=50
$$

The $16$-copy invoice then reads $F+4\\cdot 50=250$, hence

$$
F+200=250,\\qquad F=50
$$

The bill is $C(n)=50+50\\sqrt{n}$. Two later claims name runs of $25$ and $36$ copies:

$$
C(25)=50+50\\sqrt{25}=50+50\\cdot 5=300
$$

$$
C(36)=50+50\\sqrt{36}=50+50\\cdot 6=350
$$`,
    tacticals: [
      "**A.** → True\n\nA power of the run cannot carry a leftover constant. The setup is $F=50$ euros, not zero, so $C(n)=50+50\\sqrt{n}$ is not a power function of $n$.",
      "**B.** → False\n\nDifferentiate the recovered bill:\n\n$$C'(n)=50\\cdot\\frac{1}{2}n^{-\\frac{1}{2}}=25n^{-\\frac{1}{2}}$$\n\nThat derivative stays positive for every $n>0$. Every extra copy raises the square-root term, so the total can only climb.",
      "**C.** → True\n\nCost per copy splits into setup spread plus the square-root charge per copy:\n\n$$\\frac{C(n)}{n}=\\frac{50}{n}+50n^{-\\frac{1}{2}}$$\n\nThe setup is spread over more copies, and the leftover exponent $-\\frac{1}{2}$ is negative, so both pieces decline as the run lengthens.",
      "**D.** → True\n\nTwenty-five copies bill at $C(25)=300$ euros. Three hundred already sits above $280$.",
      "**E.** → False\n\nA run of $36$ copies costs $C(36)=350$ euros. That still sits below $400$.",
    ],
  },
  "math-8-15": {
    overview: `Raising purity from $9$ to $16$ lifts metal from $A\\cdot 9^{\\frac{3}{2}}$ to $A\\cdot 16^{\\frac{3}{2}}$. Those powers are $27$ and $64$:

$$
9^{\\frac{3}{2}}=(\\sqrt{9})^{3}=3^{3}=27
$$

$$
16^{\\frac{3}{2}}=(\\sqrt{16})^{3}=4^{3}=64
$$

The recorded gain of $296$ tonnes is the difference:

$$
64A-27A=296
$$

$$
37A=296,\\qquad A=8
$$

Metal is $M(u)=8u^{\\frac{3}{2}}$. Strength then takes that metal to the power $\\frac{2}{3}$:

$$
S(u)=\\frac{1}{2}\\bigl(8u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}
$$

$$
=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}}\\cdot u^{\\frac{3}{2}\\cdot\\frac{2}{3}}
$$

$$
=\\frac{1}{2}\\cdot 4\\cdot u^{1}=2u
$$

because $\\frac{3}{2}\\cdot\\frac{2}{3}=1$ and $8^{\\frac{2}{3}}=4$. After both stages, strength is twice purity. Two later claims name purities $36$ and $9$:

$$
S(36)=2\\cdot 36=72,\\qquad S(9)=2\\cdot 9=18
$$`,
    tacticals: [
      "**A.** → True\n\nThe two fractional exponents multiply, and $\\frac{3}{2}\\cdot\\frac{2}{3}=1$, so the chain collapses to $S(u)=2u$. Strength is twice purity: after both stages the output is proportional to the input.",
      "**B.** → False\n\nA steeper ray through the origin must catch a shallower line that starts above it. Set the two quotes equal:\n\n$$2u=1.8u+5$$\n\n$$0.2u=5$$\n\n$$u=\\frac{5}{0.2}=25$$\n\nThe quotes are not parallel, so they do meet.",
      "**C.** → False\n\nA power of purity has the form $c u^{p}$ and cannot carry a leftover constant. The rival quote is $1.8u+5$; at purity zero that quote still equals $5$, and the intercept kills the power.",
      "**D.** → True\n\nTwice purity $36$ is strength $S(36)=72$. Seventy-two already sits above $70$.",
      "**E.** → False\n\nOn ore of purity $9$, strength is $S(9)=18$. Eighteen still sits below $20$.",
    ],
  },
  "math-8-16": {
    overview: `A doubling that multiplies load by $4$ is one equation for the unknown exponent:

$$
2^{r}=4
$$

$$
r=2
$$

The eight-job run then reads $A\\cdot 8^{2}=32$:

$$
A\\cdot 64=32,\\qquad A=\\frac{1}{2}
$$

Peak load is $L(x)=\\frac{1}{2}x^{2}$. Two later claims name $16$ jobs and $10$ jobs:

$$
L(16)=\\frac{1}{2}\\cdot 16^{2}=\\frac{1}{2}\\cdot 256=128
$$

$$
L(10)=\\frac{1}{2}\\cdot 10^{2}=\\frac{1}{2}\\cdot 100=50
$$`,
    tacticals: [
      "**A.** → True\n\nThe doubling test gave $r=2$, which exceeds $1$. Peak load therefore grows faster than the job count.",
      "**B.** → False\n\nHalving the job count would halve peak load only if the exponent were $1$. With exponent $2$ the scale factor is\n\n$$\\frac{L\\bigl(\\frac{1}{2}x\\bigr)}{L(x)}=\\frac{\\frac{1}{2}\\bigl(\\frac{x}{2}\\bigr)^{2}}{\\frac{1}{2}x^{2}}$$\n\n$$=\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}$$\n\nThe square falls to a quarter, not to a half.",
      "**C.** → True\n\nLoad per job is the leftover power after dividing by $x$:\n\n$$\\frac{L(x)}{x}=\\frac{\\frac{1}{2}x^{2}}{x}=\\frac{x}{2}$$\n\nThe leftover exponent is positive, so average load rises with the job count.",
      "**D.** → False\n\nSixteen jobs produce $L(16)=128$ on the load table. That $128$ is still below the trip line of $200$.",
      "**E.** → True\n\nAfter $10$ simultaneous jobs the table lists $L(10)=50$. Fifty already sits above $40$.",
    ],
  },
  "math-8-17": {
    overview: `Between intensities $25$ and $100$ the square root jumps from $5$ to $10$. Sixty extra responses sit on that gap of five:

$$
Q(100)-Q(25)=60
$$

$$
A\\cdot 100^{\\frac{1}{2}}-A\\cdot 25^{\\frac{1}{2}}=60
$$

$$
10A-5A=60
$$

$$
5A=60,\\qquad A=12
$$

Responses are $Q(x)=12\\sqrt{x}$. At the budget cap and at intensity $81$:

$$
Q(400)=12\\sqrt{400}=12\\cdot 20=240
$$

$$
Q(81)=12\\sqrt{81}=12\\cdot 9=108
$$`,
    tacticals: [
      "**A.** → True\n\nThe extra-unit increment is the derivative of $Q(x)=12x^{\\frac{1}{2}}$:\n\n$$Q'(x)=6x^{-\\frac{1}{2}}$$\n\nAt intensity $25$:\n\n$$Q'(25)=6\\cdot 25^{-\\frac{1}{2}}=6\\cdot\\frac{1}{5}=\\frac{6}{5}$$\n\nAt intensity $100$:\n\n$$Q'(100)=6\\cdot 100^{-\\frac{1}{2}}=6\\cdot\\frac{1}{10}=\\frac{3}{5}$$\n\n$\\frac{6}{5}$ is larger than $\\frac{3}{5}$, so an extra unit of intensity adds more usable responses at $25$ than at $100$.",
      "**B.** → False\n\nDoubling intensity would double responses only if the exponent were $1$. With exponent $\\frac{1}{2}$ the scale factor is\n\n$$\\frac{Q(2x)}{Q(x)}=\\frac{12(2x)^{\\frac{1}{2}}}{12x^{\\frac{1}{2}}}$$\n\n$$=2^{\\frac{1}{2}}=\\sqrt{2}$$\n\nabout $1.41$, not $2$. Responses rise, but not in lockstep with outreach.",
      "**C.** → True\n\nResponses per unit of intensity are\n\n$$\\frac{Q(x)}{x}=12x^{-\\frac{1}{2}}$$\n\nThe leftover exponent is negative, so the average product falls as outreach rises.",
      "**D.** → False\n\nThe budget cap of intensity $400$ yields $Q(400)=240$ usable responses. That already exceeds the claimed cap of $200$.",
      "**E.** → True\n\nIntensity $81$ is a square, and the table lists $Q(81)=108$. One hundred and eight is already above $100$.",
    ],
  },
  "math-8-18": {
    overview: `Sixteen squared is $256$, matching the shared bill, so the automated coefficient is one division:

$$
a\\cdot 16^{2}=256
$$

$$
a\\cdot 256=256,\\qquad a=1
$$

Sixteen times the manual coefficient is the same $256$:

$$
b\\cdot 16=256,\\qquad b=16
$$

The two procedures are $C(n)=n^{2}$ and $D(n)=16n$. The gap factors as

$$
C(n)-D(n)=n^{2}-16n=n(n-16)
$$

which vanishes on $n>0$ only at $n=16$. Two later claims name batches of $25$ and $9$:

$$
C(25)=625,\\qquad D(25)=16\\cdot 25=400
$$

$$
C(9)=81
$$`,
    tacticals: [
      "**A.** → True\n\nThe gap factors as $n(n-16)$. The roots are $n=0$ and $n=16$; on $n>0$ they meet only at sixteen documents. There is no second positive meeting point.",
      "**B.** → False\n\nFor $n>16$ both factors of $n(n-16)$ are positive, so $C-D>0$: automated costs more than manual, not less. The quadratic outruns the line past the meeting point.",
      "**C.** → True\n\nAutomated cost per document is the leftover power after dividing by $n$:\n\n$$\\frac{C(n)}{n}=\\frac{n^{2}}{n}=n$$\n\nThe leftover exponent is positive, so unit cost rises with the batch.",
      "**D.** → False\n\nAt twenty-five documents the overview bills are $C(25)=625$ and $D(25)=400$. The gap is\n\n$$625-400=225$$\n\nTwo hundred and twenty-five already sits above $100$.",
      "**E.** → True\n\nOn nine documents the automated bill is the table entry $C(9)=81$. That sits under $100$.",
    ],
  },
  "math-8-19": {
    overview: `Sixteen staff contribute a square root of $4$, and that audit of $32$ pallets pins the coefficient before the contract ceiling is even mentioned:

$$
A\\cdot 16^{\\frac{1}{2}}=32
$$

$$
4A=32,\\qquad A=8
$$

Throughput is $H(s)=8\\sqrt{s}$. Two later claims name $64$ staff and $81$ staff:

$$
H(64)=8\\sqrt{64}=8\\cdot 8=64
$$

$$
H(81)=8\\sqrt{81}=8\\cdot 9=72
$$`,
    tacticals: [
      "**A.** → True\n\nThe exponent $\\frac{1}{2}$ sits below $1$. Throughput therefore grows more slowly than headcount.",
      "**B.** → False\n\nDoubling staff would double throughput only if the exponent were $1$. With exponent $\\frac{1}{2}$ the scale factor is\n\n$$\\frac{H(2s)}{H(s)}=\\frac{8(2s)^{\\frac{1}{2}}}{8s^{\\frac{1}{2}}}$$\n\n$$=2^{\\frac{1}{2}}=\\sqrt{2}$$\n\nabout $1.41$, not $2$. Throughput rises, but not in lockstep with headcount.",
      "**C.** → True\n\nThe ceiling $80$ binds when billed throughput hits $80$:\n\n$$8\\sqrt{s}=80$$\n\n$$\\sqrt{s}=10$$\n\n$$s=10^{2}=100$$\n\nPast that headcount, billed throughput is the constant $80$, and a constant on an interval of staff is not a power of $s$ with a single exponent.",
      "**D.** → False\n\nThe table lists $H(64)=64$ pallets per hour. That is short of the contract line $80$.",
      "**E.** → True\n\nAt $81$ staff the table lists $72$ pallets per hour. That already clears $70$.",
    ],
  },
  "math-8-20": {
    overview: `The recorded cut is $W(4)-W(9)=19$. Expand each power of the server count:

$$
4^{-\\frac{3}{2}}=\\frac{1}{4^{\\frac{3}{2}}}=\\frac{1}{(\\sqrt{4})^{3}}=\\frac{1}{2^{3}}=\\frac{1}{8}
$$

$$
9^{-\\frac{3}{2}}=\\frac{1}{9^{\\frac{3}{2}}}=\\frac{1}{(\\sqrt{9})^{3}}=\\frac{1}{3^{3}}=\\frac{1}{27}
$$

The difference of those two powers is

$$
\\frac{1}{8}-\\frac{1}{27}=\\frac{27-8}{216}=\\frac{19}{216}
$$

so the audit reads

$$
A\\cdot\\frac{19}{216}=19,\\qquad A=216
$$

Wait is $W(k)=216k^{-\\frac{3}{2}}$. The two cluster sizes in the log then evaluate to

$$
W(4)=216\\cdot\\frac{1}{8}=27
$$

$$
W(9)=216\\cdot\\frac{1}{27}=8
$$`,
    tacticals: [
      "**A.** → True\n\nThe extra-server cut is the magnitude of the derivative of $W(k)=216k^{-\\frac{3}{2}}$:\n\n$$W'(k)=-216\\cdot\\frac{3}{2}k^{-\\frac{5}{2}}=-324k^{-\\frac{5}{2}}$$\n\nAt four servers, $4^{\\frac{5}{2}}=(\\sqrt{4})^{5}=2^{5}=32$:\n\n$$\\lvert W'(4)\\rvert=\\frac{324}{32}=\\frac{81}{8}$$\n\nAt nine servers, $9^{\\frac{5}{2}}=(\\sqrt{9})^{5}=3^{5}=243$:\n\n$$\\lvert W'(9)\\rvert=\\frac{324}{243}=\\frac{4}{3}$$\n\n$\\frac{81}{8}$ is larger than $\\frac{4}{3}$, so an extra server cuts more wait on the smaller cluster.",
      "**B.** → True\n\nSolve $W=216k^{-\\frac{3}{2}}$ for the cluster size. Isolate the power, then raise both sides to the reciprocal $-\\frac{2}{3}$:\n\n$$k^{-\\frac{3}{2}}=\\frac{W}{216}$$\n\n$$k=\\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}$$\n\nThe new exponent $-\\frac{2}{3}$ is the reciprocal of $-\\frac{3}{2}$, so the number of servers needed for a given wait is itself a power of that wait.",
      "**C.** → False\n\nDoubling the servers would halve the wait only if the exponent were $-1$. With exponent $-\\frac{3}{2}$ the scale factor is\n\n$$\\frac{W(2k)}{W(k)}=\\frac{216(2k)^{-\\frac{3}{2}}}{216k^{-\\frac{3}{2}}}$$\n\n$$=2^{-\\frac{3}{2}}=\\frac{1}{2^{\\frac{3}{2}}}=\\frac{1}{2\\sqrt{2}}$$\n\nabout $0.35$, not $\\frac{1}{2}$. The wait falls faster than a simple half.",
      "**D.** → False\n\nWith nine servers the wait table reads $W(9)=8$ milliseconds. Eight sits below $10$.",
      "**E.** → True\n\nThe smaller cluster still sits at $W(4)=27$ milliseconds. Twenty-seven is above $25$.",
    ],
  },
};

const frozen = ["id","case_id","title","subsection","context","statements","answer_key","difficulty_level","sort_order","tables_markdown","figure"];

for (const t of data) {
  const p = patch[t.id];
  if (!p) throw new Error("missing patch " + t.id);
  t.solution_overview = p.overview;
  t.tactical_explanations = p.tacticals;
}
for (let i = 0; i < data.length; i++) {
  for (const k of frozen) {
    if (JSON.stringify(orig[i][k] ?? null) !== JSON.stringify(data[i][k] ?? null)) {
      throw new Error("frozen field changed: " + orig[i].id + " " + k);
    }
  }
  for (let j = 0; j < orig[i].answer_key.length; j++) {
    const want = orig[i].answer_key[j] ? "True" : "False";
    const got = data[i].tactical_explanations[j].split("\n")[0];
    const expect = `**${String.fromCharCode(65 + j)}.** → ${want}`;
    if (got !== expect) throw new Error("header " + data[i].id + " " + got);
  }
}
const joined = data.map((t) => t.solution_overview + "\n" + t.tactical_explanations.join("\n")).join("\n");
if (joined.includes("\u2014") || joined.includes("\u2013") || joined.includes("${")) throw new Error("forbidden glyph");

fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
console.log("patched", data.map((t) => t.id).join(", "));
