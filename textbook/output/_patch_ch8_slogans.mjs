import fs from "node:fs";
import path from "node:path";

const DIR = "textbook/output/_ch8_v3";
const files = [
  "11_20.json",
  "21_30.json",
  "41_50.json",
  "51_60.json",
  "61_70.json",
  "81_90.json",
];

const patch = {
  "math-8-12": {
    i: 2,
    s: "An extra agent cuts more wait after $16$ agents than after $4$.",
    k: false,
    e: `**C.** → False\n\nWait is $W(n)=48 n^{-\\frac{1}{2}}$, so an extra agent is the slope\n\n$$\nW'(n)=-24 n^{-\\frac{3}{2}}\n$$\n\nThe size of the cut is $\\lvert W'(n)\\rvert=24 n^{-\\frac{3}{2}}$, which falls as $n$ rises. After $16$ agents the cut is smaller than after $4$, not larger, so the statement is False.`,
  },
  "math-8-20": {
    i: 1,
    s: "The number of servers needed for a given wait is itself a power of that wait.",
    k: true,
    e: `**B.** → True\n\nWait is $W=216 k^{-\\frac{3}{2}}$. Solving for the server count:\n\n$$\n\\frac{W}{216}=k^{-\\frac{3}{2}}\n$$\n\n$$\nk=\\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}\n$$\n\nA power with a nonzero exponent inverts to another power, so the statement is True.`,
  },
  "math-8-24": {
    i: 1,
    s: "To double the bench capacity of $64$ litres per second, the diameter must more than double.",
    k: false,
    e: `**B.** → False\n\nCapacity is $Q=2d^{\\frac{5}{2}}$. Doubling output means $Q=128$. Because the exponent $\\frac{5}{2}$ already exceeds one, a doubling of $Q$ needs a diameter factor $2^{\\frac{2}{5}}\\approx 1.32$, which is less than a doubling of the $4$ cm bench, so the statement is False.`,
  },
  "math-8-46": {
    i: 2,
    s: "To double stored volume, the water depth must more than double.",
    k: false,
    e: `**C.** → False\n\nVolume is $V=4d^{2}$. Doubling $V$ is a factor $2$ on a square, so depth scales by $\\sqrt{2}\\approx 1.41$, not by more than $2$. Because the exponent exceeds one, volume outruns depth: a modest rise in depth already doubles the store, so the statement is False.`,
  },
  "math-8-50": {
    i: 2,
    s: "An extra metre of distance cuts more illuminance at $4$ metres than at $2$ metres.",
    k: false,
    e: `**C.** → False\n\nIlluminance is $I=800 d^{-2}$, so the slope\n\n$$\nI'(d)=-1600 d^{-3}\n$$\n\nhas size $1600 d^{-3}$, which is larger at $2$ metres than at $4$. An extra metre therefore cuts more illuminance nearer the lamp, not farther away, so the statement is False.`,
  },
  "math-8-52": {
    i: 1,
    s: "Concentration per metre of distance is the same at every downwind range.",
    k: false,
    e: `**B.** → False\n\nAverage concentration per metre is $c(x)/x=400 x^{-\\frac{5}{2}}$. That still depends on $x$, so the intensity is not constant. Inverse-power decay is steeper near the stack than far downwind, so the statement is False.`,
  },
  "math-8-58": {
    i: 3,
    s: "Quadrupling cumulative volume from $100$ to $400$ thousand cells more than doubles cumulative spend.",
    k: false,
    e: `**D.** → False\n\nCumulative spend is $S(N)=800 N^{\\frac{1}{2}}$. Quadrupling volume is an input factor of $4$:\n\n$$\n\\frac{S(4N)}{S(N)}=4^{\\frac{1}{2}}=2\n$$\n\nSpend exactly doubles, it does not more than double. The leftover exponent on spend is $\\frac{1}{2}$, not larger than one, so the statement is False.`,
  },
  "math-8-61": {
    i: 2,
    s: "The current needed for a given strength is itself a power of that strength.",
    k: true,
    e: `**C.** → True\n\nStrength is $S=5p^{\\frac{3}{2}}$. Solving for current:\n\n$$\n\\frac{S}{5}=p^{\\frac{3}{2}}\n$$\n\n$$\np=\\left(\\frac{S}{5}\\right)^{\\frac{2}{3}}\n$$\n\nA power with a nonzero exponent inverts to another power, so the statement is True.`,
  },
  "math-8-62": {
    i: 0,
    s: "Two $8$ kg buoys together already hold more than one $64$ kg buoy.",
    k: false,
    e: `**A.** → False\n\nHolding power is $H=6m^{\\frac{2}{3}}$. Two trial buoys use\n\n$$\n2H(8)=2\\cdot 6\\cdot 8^{\\frac{2}{3}}\n$$\n\n$$\n8^{\\frac{2}{3}}=4\n$$\n\n$$\n2H(8)=48\n$$\n\nOne $64$ kg buoy uses\n\n$$\nH(64)=6\\cdot 64^{\\frac{2}{3}}\n$$\n\n$$\n64^{\\frac{2}{3}}=16\n$$\n\n$$\nH(64)=96\n$$\n\n$$\n48<96\n$$\n\nBecause the exponent $\\frac{2}{3}$ is below one, merging mass raises total hold. Two small buoys fall short of one large one, so the statement is False.`,
  },
  "math-8-63": {
    i: 4,
    s: "An extra metre of hop cuts more throughput at $8$ m than at $4$ m.",
    k: false,
    e: `**E.** → False\n\nThroughput is $T=800 d^{-2}$, so the size of the slope is $1600 d^{-3}$. That quantity is larger at $4$ m than at $8$ m. An extra metre therefore cuts more throughput on the short hop, not on the long one, so the statement is False.`,
  },
  "math-8-85": {
    i: 1,
    s: "An extra metre cuts more dose at $3$ metres than at $6$ metres.",
    k: true,
    e: `**B.** → True\n\nDose rate is $H=720 d^{-2}$. The size of the slope is $1440 d^{-3}$, which is larger at $3$ metres than at $6$. Inverse-square decay is front-loaded: the first metres away from the source remove more dose than later metres, so the statement is True.`,
  },
  "math-8-87": {
    i: 0,
    s: "The head needed for a given discharge is itself a power of that discharge.",
    k: true,
    e: `**A.** → True\n\nDischarge is $Q=16h^{\\frac{3}{2}}$. Solving for head:\n\n$$\n\\frac{Q}{16}=h^{\\frac{3}{2}}\n$$\n\n$$\nh=\\left(\\frac{Q}{16}\\right)^{\\frac{2}{3}}\n$$\n\nA power with a nonzero exponent inverts to another power, so the statement is True.`,
  },
};

const part3 = {
  "math-8-12": [
    ["The wait approaches $0$ but never turns negative.", "An extra agent cuts less wait after $16$ agents than after $4$."],
  ],
  "math-8-20": [
    [
      "Measuring wait in seconds only rescales $A$, leaving the exponent $-\\frac{3}{2}$.",
      "The inverse $k=(216/W)^{\\frac{2}{3}}$ is a power of $W$.",
    ],
  ],
  "math-8-24": [
    [
      "Writing $d$ in millimetres changes the coefficient. The inverse is a power of $Q$.",
      "Doubling the $64$ L/s bench needs a diameter factor $2^{\\frac{2}{5}}\\approx 1.32$, not more than a doubling. The inverse is a power of $Q$.",
    ],
  ],
  "math-8-46": [
    ["Switching depth to centimetres changes the coefficient.", "Doubling stored volume scales depth by $\\sqrt{2}$, not by more than $2$."],
  ],
  "math-8-50": [
    ["Illuminance stays positive.", "An extra metre cuts more illuminance at $2$ m than at $4$ m."],
  ],
  "math-8-52": [
    [
      "**3.** Scale factors:",
      "**3.** Concentration per metre $c(x)/x=400 x^{-\\frac{5}{2}}$ still depends on $x$. Scale factors:",
    ],
  ],
  "math-8-58": [
    ["**4.** Sign:\n\n$c(N)>0$ for every $N>0$.", "**4.** Quadrupling $N$ doubles $S$, it does not more than double $S$."],
  ],
  "math-8-61": [
    ["an extra ampere adds more at $9$ A than at $4$ A, and $S(p)\\to\\infty$ as $p$ grows.", "an extra ampere adds more at $9$ A than at $4$ A, and the inverse $p=(S/5)^{2/3}$ is a power."],
  ],
  "math-8-62": [
    ["The conversion factor is $1000^{\\frac{2}{3}}=100$, not $1000$, and doubling mass multiplies holding power by $2^{\\frac{2}{3}}\\approx 1.587$.", "Two $8$ kg buoys hold $48$ kN, short of one $64$ kg buoy at $96$ kN. Doubling mass multiplies holding power by $2^{\\frac{2}{3}}\\approx 1.587$."],
  ],
  "math-8-63": [
    ["Doubling a hop quarters throughput, the inverse $(2)$ is a power, and $T(d)$ stays positive for every $d>0$.", "Doubling a hop quarters throughput, the inverse $(2)$ is a power, and an extra metre cuts more throughput at $4$ m than at $8$ m."],
  ],
  "math-8-85": [
    ["Doubling quarters the dose rate, not halves it. The inverse of $(2)$ is a power, and $H(d)$ stays positive for every finite $d>0$.", "Doubling quarters the dose rate, not halves it. The inverse of $(2)$ is a power, and an extra metre cuts more dose at $3$ m than at $6$ m."],
  ],
  "math-8-87": [
    ["Switching the head to centimetres leaves the exponent $\\frac{3}{2}$. Because that exponent exceeds $1$, discharge outruns head, and doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$.", "The inverse $h=(Q/16)^{2/3}$ is a power. Because the exponent exceeds $1$, discharge outruns head, and doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$."],
  ],
};

for (const f of files) {
  const p = path.join(DIR, f);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
  for (const t of arr) {
    const g = patch[t.id];
    if (!g) continue;
    t.statements[g.i] = g.s;
    t.answer_key[g.i] = g.k;
    t.tactical_explanations[g.i] = g.e;
    for (const [old, neu] of part3[t.id] || []) {
      if (!t.solution_overview.includes(old)) {
        console.log("WARN part3 miss", t.id, JSON.stringify(old).slice(0, 80));
      } else {
        t.solution_overview = t.solution_overview.replace(old, neu);
      }
    }
    console.log("patched", t.id);
  }
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
}
