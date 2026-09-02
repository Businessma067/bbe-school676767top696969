import fs from "node:fs";
import path from "node:path";

const DIR = "textbook/output/_ch8_v3";

const patch = {
  "math-8-54": {
    i: 4,
    e: `**E.** → False

The recovered impact is $I(v)=60 v^{\\frac{1}{2}}$, so the scaled charge is $v I(v)=60 v^{\\frac{3}{2}}$. The statement says that at a quarter of ADV that charge already clears $10$. A quarter is a clean power of two, so evaluate the three-halves power there:

$$
\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}=\\left(\\frac{1}{2}\\right)^{3}
$$

$$
\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}
$$

$$
60\\cdot \\frac{1}{8}=7.5
$$

$$
7.5<10
$$

Seven and a half still sits below $10$. The charge has grown with order size, but not as far as the named line, so the statement is False.`,
  },
  "math-8-59": {
    i: 4,
    e: `**E.** → False

After both stages, transport is $S(q)=\\frac{5}{8} q^{\\frac{3}{2}}$. The statement says that at discharge $64$ that load is still under $300$ tonnes a day, so run the composition at that discharge. Velocity first:

$$
v(64)=\\frac{\\sqrt{64}}{2}
$$

$$
\\sqrt{64}=8
$$

$$
v(64)=\\frac{8}{2}=4
$$

Then cube that velocity through the sediment stage $S=5 v^{3}$:

$$
S=5\\cdot 4^{3}
$$

$$
4^{3}=64
$$

$$
S=5\\cdot 64=320
$$

$$
320>300
$$

Three hundred and twenty already clears $300$, so transport is not still under the line, so the statement is False.`,
  },
  "math-8-64": {
    i: 4,
    e: `**E.** → False

The recovered gill law is $G(m)=8m^{\\frac{3}{4}}$. The statement says a $64$ g fish already has more than $200$ cm$^{2}$ of gill. Sixty-four grams is a clean power of two, so evaluate the three-quarters power there:

$$
G(64)=8\\cdot 64^{\\frac{3}{4}}
$$

$$
64=2^{6}
$$

$$
64^{\\frac{3}{4}}=(2^{6})^{\\frac{3}{4}}=2^{\\frac{9}{2}}
$$

$$
2^{\\frac{9}{2}}=16\\sqrt{2}
$$

$$
G(64)=8\\cdot 16\\sqrt{2}=128\\sqrt{2}
$$

$$
128\\sqrt{2}\\approx 181
$$

$$
181<200
$$

About $181$ cm$^{2}$ still sits short of $200$. The three-quarters power has grown, but not as far as the named area, so the statement is False.`,
  },
  "math-8-65": {
    i: 3,
    e: `**D.** → True

The recovered law is $S(t)=5\\sqrt{t}$. The statement says the curing time that reaches $30$ MPa is still under $40$ days, so invert the square-root rule for that strength:

$$
5\\sqrt{t}=30
$$

$$
\\sqrt{t}=\\frac{30}{5}=6
$$

$$
t=36
$$

Forward check: $5\\cdot 6=30$. Thirty-six days already sit under $40$. The square-root clock is slower than a linear guess, so the target arrives before day $40$, so the statement is True.`,
  },
  "math-8-75": {
    i: 4,
    e: `**E.** → False

Unit time is $t(n)=8+50 n^{-\\frac{1}{2}}$, a handling floor of $8$ minutes plus a falling power. The statement says the unit built after $4$ cumulative units already takes under $30$ minutes. Four is a clean square, so evaluate the sum there:

$$
4^{\\frac{1}{2}}=2
$$

$$
t(4)=8+\\frac{50}{2}
$$

$$
t(4)=8+25=33
$$

$$
33>30
$$

Thirty-three minutes is still above thirty. The power term has fallen, but not far enough to pull the unit under the named line, so the statement is False.`,
  },
  "math-8-78": {
    i: 4,
    e: `**E.** → True

The recovered load is $W(s)=5 s^{\\frac{3}{2}}$. The statement says that at scale index $4$ the daily load is already under $50$ kilograms. Four is a clean square, so the three-halves power is an integer:

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
W(4)=5\\cdot 8=40
$$

$$
40<50
$$

Forty kilograms sits under fifty. The load has grown with scale, but at this small index it is still below the named line, so the statement is True.`,
  },
  "math-8-97": {
    i: 2,
    e: `**C.** → True

The recovered law is $T(e)=8 e^{\\frac{3}{2}}$. The statement says that at belt setting $9$ throughput is already more than $200$ trays an hour. Nine is a clean square, so evaluate the three-halves power there:

$$
T(9)=8\\cdot 9^{\\frac{3}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
T(9)=8\\cdot 27=216
$$

$$
216>200
$$

Throughput is $216$ trays an hour, already above $200$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess, so the statement is True.`,
  },
};

const files = ["51_60.json", "61_70.json", "71_80.json", "91_97.json"];
for (const f of files) {
  const p = path.join(DIR, f);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
  for (const t of arr) {
    const g = patch[t.id];
    if (!g) continue;
    t.tactical_explanations[g.i] = g.e;
    console.log("patched", t.id);
  }
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
}
