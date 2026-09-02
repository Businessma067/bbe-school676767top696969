import fs from "fs";

const path = new URL("./01_10.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));
const orig = JSON.parse(JSON.stringify(data));

const patch = {
  "math-8-1": {
    overview: `Mass is five times a cube of the side, and that $5$ is already printed in $M(s)=5s^{3}$. Cubing the four sides that later claims name:

$$
1^{3}=1
$$

$$
2^{3}=8
$$

$$
3^{3}=27
$$

$$
4^{3}=64
$$

Five times each cube fills the mass table the letters will read:

$$
M(1)=5\\cdot 1=5
$$

$$
M(2)=5\\cdot 8=40
$$

$$
M(3)=5\\cdot 27=135
$$

$$
M(4)=5\\cdot 64=320
$$

A width multiplier $k$ never needs those gram counts. The density cancels, leaving only the cube of $k$:

$$
\\frac{M(ks)}{M(s)}=k^{3}
$$`,
    tacticals: [
      "**A.** → True\n\nThe mass table lists $M(2)=40$ grams. That is the figure the claim names for a $2$ cm side.",
      "**B.** → False\n\nThe same table lists $M(3)=135$ grams, not $125$. The figure $125$ is $5^{3}$, cubing the density instead of the side.",
      "**C.** → True\n\nDoubling every edge is the width multiplier $k=2$. Substitute that $k$ into the scale identity:\n\n$$\\frac{M(2s)}{M(s)}=\\frac{5(2s)^{3}}{5s^{3}}$$\n\n$$=\\frac{2^{3}s^{3}}{s^{3}}$$\n\n$$=2^{3}=8$$\n\nDoubling the side therefore multiplies mass by $8$.",
      "**D.** → True\n\nAt side $1$ the table entry is $M(1)=5$ grams. The claim names that same $5$ grams.",
      "**E.** → False\n\nFour centimetres sit in the table as $M(4)=320$ grams. The claim names $240$, which is not that mass.",
    ],
  },
  "math-8-2": {
    overview: `Rewrite each gauge before asking for a reading, because the two exponents split on sign:

$$
D(t)=6\\sqrt{t},\\qquad R(t)=\\frac{50}{t^{2}}
$$

On the times that are legal, two later claims name $t=9$ and $t=4$:

$$
D(9)=6\\sqrt{9}=6\\cdot 3=18
$$

$$
R(4)=\\frac{50}{4^{2}}=\\frac{50}{16}=3.125
$$

A square root accepts $t=0$ and refuses every negative clock. A reciprocal square puts $t$ in a denominator, so $t=0$ is undefined even though a negative clock would be fine for $R$.`,
    tacticals: [
      "**A.** → True\n\nThe square root of zero is zero, so the load rule returns a genuine real at reset:\n\n$$D(0)=6\\sqrt{0}=0$$\n\nThat reading is $0$ kilograms, not a refusal.",
      "**B.** → False\n\nTurbidity is $\\frac{50}{t^{2}}$. At the reset the denominator is $0$, and division by zero is undefined, so $R$ has no value there.",
      "**C.** → False\n\nThe exponent $\\frac{1}{2}$ is an even root. No real $y$ satisfies $y^{2}=-4$, so $D(-4)=6\\sqrt{-4}$ is not a real load.",
      "**D.** → True\n\nTurbidity at $t=4$ is already $R(4)=3.125$ units. The claim names that same $3.125$.",
      "**E.** → True\n\nLoad at $t=9$ is $D(9)=18$ kilograms. That is the figure the claim names.",
    ],
  },
  "math-8-3": {
    overview: `Far from the mast the beacon's denominator $x^{3}$ swallows the constant $80$; near the mast that same denominator collapses. Rewrite first:

$$
S(x)=\\frac{80}{x^{3}},\\qquad T(x)=2\\sqrt{x},\\qquad x>0
$$

As $x\\to\\infty$, $S(x)\\to 0$. As $x\\to 0^{+}$, $x^{3}$ becomes arbitrarily small and $S$ grows without bound. At two metres, the one finite sample the letters need:

$$
S(2)=\\frac{80}{2^{3}}=\\frac{80}{8}=10
$$

The packet count has the opposite sign on its exponent, so $T(x)\\to 0$ as $x\\to 0^{+}$ and $T$ keeps climbing as $x$ grows. The $2$ in $T$ is a multiplier, not a lid.`,
    tacticals: [
      "**A.** → True\n\nWith $S(x)=\\frac{80}{x^{3}}$, a large distance inflates the denominator while the numerator stays $80$. The quotient therefore tends to $0$ as $x\\to\\infty$.",
      "**B.** → True\n\nA tiny positive $x$ makes $x^{3}$ arbitrarily small, and $80$ over a collapsing denominator grows past every bound. A tenth of a metre already gives\n\n$$S(0.1)=\\frac{80}{(0.1)^{3}}=\\frac{80}{0.001}=80000$$\n\nand smaller $x$ inflates $S$ further.",
      "**C.** → False\n\nThe $2$ in $T(x)=2\\sqrt{x}$ multiplies the root; it does not cap the output. After four minutes:\n\n$$T(4)=2\\sqrt{4}$$\n\n$$=2\\cdot 2=4$$\n\nThat $T(4)=4$ already sits above $2$, and a positive exponent keeps climbing.",
      "**D.** → True\n\nThe overview sample is $S(2)=10$ millivolts. That is the beacon reading the claim names at $2$ metres.",
      "**E.** → True\n\nA positive exponent keeps the root in the numerator. As $x\\to 0^{+}$ the square root shrinks, so $T(x)=2\\sqrt{x}$ tends to $0$ at the start of the listen.",
    ],
  },
  "math-8-4": {
    overview: `Spread overhead is a fixed $600$ euros divided across the batch, so every extra unit strictly lowers the per-unit figure without ever making it negative:

$$
U(q)=\\frac{600}{q},\\qquad q>0
$$

Finishing labour keeps $q$ in the numerator with a positive exponent $\\frac{2}{3}$, so hours rise, though more slowly than the batch:

$$
V(q)=3q^{\\frac{2}{3}}
$$

At the order size $8$ that two later claims name, the cube root is $2$:

$$
U(8)=\\frac{600}{8}=75
$$

Both outputs stay positive for every $q>0$, because both coefficients and every positive power of $q$ are positive.`,
    tacticals: [
      "**A.** → True\n\nOverhead is $\\frac{600}{q}$. On $q>0$ a larger batch makes a strictly smaller quotient, so the spread falls at every extra unit.",
      "**B.** → False\n\nThe numerator $600$ and the order size $q$ are both positive, so $U(q)$ stays positive. Falling toward zero is not the same as crossing into negative euros.",
      "**C.** → True\n\nThe exponent $\\frac{2}{3}$ is positive, so a larger $q$ raises a larger power, and the coefficient $3$ preserves that order. Finishing hours therefore rise with the batch.",
      "**D.** → False\n\nAt order size $8$, overhead is $U(8)=75$ euros per unit, not $80$. The claimed $80$ is not that figure.",
      "**E.** → True\n\nOrder size $8$ has cube root $2$. Finishing hours are then\n\n$$V(8)=3\\cdot 8^{\\frac{2}{3}}$$\n\n$$=3\\cdot\\bigl(8^{\\frac{1}{3}}\\bigr)^{2}$$\n\n$$=3\\cdot 2^{2}=12$$\n\nTwelve hours is the labour the claim names.",
    ],
  },
  "math-8-5": {
    overview: `Staffing $25$ has square root $5$, and that audit of $40$ crates is one line for the unknown coefficient:

$$
A\\cdot 25^{\\frac{1}{2}}=40
$$

$$
A\\cdot 5=40
$$

$$
A=8
$$

The line is then $Q(s)=8s^{\\frac{1}{2}}$. Two later claims name $s=4$ and $s=100$:

$$
Q(4)=8\\cdot 4^{\\frac{1}{2}}=8\\cdot 2=16
$$

$$
Q(100)=8\\cdot 100^{\\frac{1}{2}}=8\\cdot 10=80
$$

Levels use that $8$. A staffing multiplier $k$ does not, because $A$ cancels:

$$
\\frac{Q(ks)}{Q(s)}=k^{\\frac{1}{2}}
$$`,
    tacticals: [
      "**A.** → True\n\nThe coefficient that fits the $25$-staff audit is $A=8$. That is the figure the claim names.",
      "**B.** → True\n\nA hundred staff produce $Q(100)=80$ crates per hour. The claim names that same $80$.",
      "**C.** → True\n\nQuadrupling staff is the multiplier $k=4$. The coefficient cancels, leaving only the square root of $4$:\n\n$$\\frac{Q(4s)}{Q(s)}=\\frac{8(4s)^{\\frac{1}{2}}}{8s^{\\frac{1}{2}}}$$\n\n$$=4^{\\frac{1}{2}}=2$$\n\nOutput doubles rather than multiplying by four.",
      "**D.** → False\n\nReplace $A$ by $2A$ in the same ratio:\n\n$$\\frac{(2A)(4s)^{\\frac{1}{2}}}{(2A)s^{\\frac{1}{2}}}$$\n\n$$=4^{\\frac{1}{2}}=2$$\n\nThe doubled coefficient appears once above and once below, so it cancels. Doubling $A$ would double every crate count, not this scale factor.",
      "**E.** → False\n\nFour staff sit in the overview as $Q(4)=16$ crates per hour, not $20$. The claimed $20$ is half the audited $40$, a linear scaling the exponent $\\frac{1}{2}$ does not allow.",
    ],
  },
  "math-8-6": {
    overview: `Subtract the quadratic index from the cubic one and factor. The square $n^{2}$ is always positive for $n>0$, so the race turns on the sign of $n-2$:

$$
G(n)-F(n)=n^{3}-2n^{2}
$$

$$
=n^{2}(n-2)
$$

The difference vanishes at $n=2$, where both indices read $8$:

$$
F(2)=2\\cdot 2^{2}=8,\\qquad G(2)=2^{3}=8
$$

Below that crossing $n-2<0$, so $F$ leads; above it $G$ leads. One sample on each side:

$$
F(1)=2,\\qquad G(1)=1
$$

$$
F(3)=2\\cdot 9=18,\\qquad G(3)=27
$$`,
    tacticals: [
      "**A.** → False\n\nAt the crossing both indices read $8$. The claim's pair $8$ and $6$ is wrong on the cubic side.",
      "**B.** → True\n\nThe factored gap is $n^{2}(n-2)$. For every $n>2$ both factors are positive, so $G-F>0$ and the cubic index leads throughout that ray.",
      "**C.** → True\n\nOn $0<n<2$ the square $n^{2}$ is positive while $n-2$ is negative, so $G-F<0$ and $F$ leads. Inside the interval the sample is $F(1)=2$ against $G(1)=1$.",
      "**D.** → False\n\nThe long-run comparison is a ratio, not a difference:\n\n$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}$$\n\n$$=\\frac{n}{2}$$\n\nThat quotient grows with $n$. A limit of $1$ would mean they become comparable; already at $n=20$ the ratio is $10$ and still climbing.",
      "**E.** → False\n\nThe overview sample at $n=3$ is $F(3)=18$ and $G(3)=27$, not $18$ and $24$. The cubic index is $3^{3}=27$.",
    ],
  },
  "math-8-7": {
    overview: `Even roots, odd roots, and negative exponents accept three different sets of raw readings, even before any output is computed.

$L(x)=\\sqrt{x}$ needs $x\\ge 0$, and $\\sqrt{0}=0$, so $L(0)=0$. No real square equals $-4$, so $L(-4)$ is not real.

$M(x)=\\sqrt[3]{x}$ is an odd root, so every real reading is allowed.

$N(x)=x^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{x}}$ needs $x>0$, because a zero denominator is undefined. At a reading of $4$:

$$
N(4)=\\frac{1}{\\sqrt{4}}=\\frac{1}{2}
$$

which is the reciprocal of $L(4)=2$, not $2$ itself.`,
    tacticals: [
      "**A.** → True\n\nZero is a square, and $\\sqrt{0}=0$. The square-root transform therefore returns $0$ at a raw reading of zero.",
      "**B.** → False\n\nNo real $y$ satisfies $y^{2}=-4$. The domain of $L$ is $x\\ge 0$, and $L(-4)=\\sqrt{-4}$ is not a real value.",
      "**C.** → True\n\nAn odd root accepts the negative reading. Cubing the claimed output recovers the input:\n\n$$(-2)^{3}=-8$$\n\nso $\\sqrt[3]{-8}=-2$. That is $M(-8)=-2$.",
      "**D.** → False\n\nThe third transform is $\\frac{1}{\\sqrt{x}}$. At $x=0$ the denominator is $0$, and division by zero is undefined, so $N$ needs $x>0$.",
      "**E.** → False\n\nA negative exponent puts the root in the denominator. At a reading of $4$ that reciprocal is $N(4)=\\frac{1}{2}$, not $2$; the claimed $2$ is $L(4)$.",
    ],
  },
  "math-8-8": {
    overview: `Extra cartridges enlarge $\\sqrt{x}$ in the denominator of $P=\\frac{12}{\\sqrt{x}}$, so the drop falls and can never hit zero while $x$ stays finite.

$$
P(x)=\\frac{12}{\\sqrt{x}},\\qquad x>0
$$

Four and nine cartridges are whole squares:

$$
P(4)=\\frac{12}{\\sqrt{4}}=\\frac{12}{2}=6
$$

$$
P(9)=\\frac{12}{\\sqrt{9}}=\\frac{12}{3}=4
$$

As $x$ grows, the denominator grows without bound and $P(x)\\to 0$. On $x>0$ the numerator is fixed and $\\sqrt{x}$ is strictly increasing, so $P$ is strictly decreasing.`,
    tacticals: [
      "**A.** → True\n\nFour cartridges sit in the table at $P(4)=6$ kilopascals. That is the drop the claim names.",
      "**B.** → True\n\nOn $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$. The quotient $\\frac{12}{\\sqrt{x}}$ therefore falls at every larger cartridge count.",
      "**C.** → True\n\nAs $x$ grows, $\\sqrt{x}$ grows without bound and $P$ tends to $0$. Setting the drop to zero would require\n\n$$\\frac{12}{\\sqrt{x}}=0$$\n\n$$12=0$$\n\nwhich is impossible, so no finite bank returns a drop of $0$.",
      "**D.** → False\n\nA tiny bank inflates the drop. At a hundredth of a cartridge:\n\n$$P(0.01)=\\frac{12}{\\sqrt{0.01}}$$\n\n$$=\\frac{12}{0.1}=120$$\n\nalready. The denominator $\\sqrt{x}$ can be made arbitrarily small, so $P$ has no finite limit as $x\\to 0^{+}$.",
      "**E.** → True\n\nNine cartridges give the table entry $P(9)=4$ kilopascals. The claim names that drop.",
    ],
  },
  "math-8-9": {
    overview: `A three-metre panel presents $9$ square metres of face. Dividing the recorded $45$ litres by that $9$ recovers the primer density:

$$
A\\cdot 3^{2}=45
$$

$$
9A=45
$$

$$
A=5
$$

The rule is $y(r)=5r^{2}$. Levels at one metre and six metres:

$$
y(1)=5\\cdot 1^{2}=5
$$

$$
y(6)=5\\cdot 6^{2}=5\\cdot 36=180
$$

Width multipliers ignore $A$:

$$
\\frac{y(kr)}{y(r)}=k^{2}
$$`,
    tacticals: [
      "**A.** → False\n\nThe coefficient that fits the recorded job is $A=5$, not $15$. The claimed $15$ divides $45$ litres by the radius $3$ instead of by the square $9$.",
      "**B.** → True\n\nA six-metre panel needs $y(6)=180$ litres. That is the primer volume the claim names.",
      "**C.** → True\n\nA $50\\%$ increase in radius is the width multiplier $k=1.5$. Primer scales with the square of that multiplier:\n\n$$\\frac{y(1.5r)}{y(r)}=\\frac{5(1.5r)^{2}}{5r^{2}}$$\n\n$$=1.5^{2}$$\n\n$$=2.25$$\n\nThe requirement is multiplied by $2.25$.",
      "**D.** → True\n\nAt radius $1$ the overview entry is $y(1)=5$ litres. The claim names that same $5$ litres.",
      "**E.** → False\n\nHalving the radius is $k=0.5$. The square of that multiplier is\n\n$$\\frac{y(0.5r)}{y(r)}=0.5^{2}$$\n\n$$=0.25$$\n\nPrimer falls to a quarter of its former value, not to a half, because the exponent is $2$.",
    ],
  },
  "math-8-10": {
    overview: `Two later claims name the standard test speeds $v=10$ and $v=20$. Square first, then take half:

$$
E(10)=0.5\\cdot 10^{2}=0.5\\cdot 100=50
$$

$$
E(20)=0.5\\cdot 20^{2}=0.5\\cdot 400=200
$$

Every comparison is the square of a speed ratio, because $0.5$ cancels:

$$
\\frac{E(kv)}{E(v)}=k^{2}
$$

The index itself stays positive for every $v>0$: a square of a nonzero speed is positive and the coefficient $0.5$ is positive.`,
    tacticals: [
      "**A.** → True\n\nAt $v=10$ the index table reads $50$ points. The claim names that same $50$.",
      "**B.** → True\n\nRaising the speed from $10$ to $20$ is the multiplier $k=2$. The coefficient cancels:\n\n$$\\frac{E(20)}{E(10)}=\\frac{0.5\\cdot 20^{2}}{0.5\\cdot 10^{2}}$$\n\n$$=2^{2}=4$$\n\nThe index quadruples. Directly, $\\frac{200}{50}=4$ from the two table entries.",
      "**C.** → True\n\nThe higher test speed is already listed as $E(20)=200$ points. The claim names that same $200$.",
      "**D.** → True\n\nA square of $v>0$ is positive, and the coefficient $0.5$ is positive. Their product is therefore positive on the whole domain.",
      "**E.** → False\n\nA ten percent overspeed is $k=1.1$. The index scales as the square of that multiplier:\n\n$$\\frac{E(1.1v)}{E(v)}=1.1^{2}$$\n\n$$=1.21$$\n\nThe index rises twenty-one percent, not ten. At the lower test speed that is $E(11)=0.5\\cdot 121=60.5$ against $50$.",
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
