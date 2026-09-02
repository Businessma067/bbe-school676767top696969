import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words, spliceBeforeCloser } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const batches = {
  "61_70.json": {
    "math-8-67": {
      3: [
        "A $10\\%$ height stretch on a cube is the binomial $1+3(0.1)+3(0.1)^{2}+(0.1)^{3}=1.331$, not a flat $30\\%$.",
        "The extra $3.1\\%$ is why the claim's \"more than $30\\%$\" holds rather than tying at a linearised $3\\times 10\\%$.",
        "Changing the design note would move $k$, but the recovered cube already locks $1.1^{3}=1.331$.",
      ].join("\n\n"),
    },
  },
  "71_80.json": {
    "math-8-72": {
      0: [
        "Plotting the bill against $\\sqrt{n}$ is a line with intercept $400$, not a ray from the origin.",
        "A third invoice at $n=225$ would read $C(225)=400+450=850$ on the recovered rule, not $30\\cdot 15=450$ and not $700\\cdot 15/10=1050$.",
        "Those one-term formulae are pure powers. The two logged invoices already refuse every pure power through the origin, because the retainer is live.",
      ].join("\n\n"),
    },
    "math-8-77": {
      4: [
        "Checking a neighbouring rise from $4$ to $16$ adds the logged $336$ euros, which is under $500$, but that is not the named pair.",
        "Letter E names $9$ to $25$, and that later equal-width gap adds $588$ because leftover slope climbs.",
      ].join("\n\n"),
    },
    "math-8-78": {
      2: [
        "Checking a halved ceiling of $160$ kg would cut admissible scale by $2^{-\\frac{2}{3}}\\approx 0.63$, to about $10.08$, not to $8$.",
        "The same inverse exponent works in both directions: load and scale do not move in lockstep either when the permit tightens or when it loosens.",
      ].join("\n\n"),
    },
  },
  "81_90.json": {
    "math-8-82": {
      2: [
        "A change of millivolt units would rescale $A$ and leave the inverse still a power of the reading.",
        "Checking $S=400$ returns $x=1$, a unit-depth witness that the inverse is $x=(400/S)^{\\frac{1}{3}}$. Falling signal does not introduce a logarithm.",
      ].join("\n\n"),
      4: [
        "Checking $S(5)=400/125=3.2$ is the forward reading at five metres, the same pair the inverse just recovered.",
        "A burial past $8$ m would have read under $0.8$ mV. The named $3.2$ mV is far brighter than that, so the depth cannot sit past $8$ m.",
      ].join("\n\n"),
    },
    "math-8-83": {
      1: [
        "Checking $D(16)/G(16)$: demand $40$ over gill $3\\cdot 16^{\\frac{2}{3}}=3\\cdot 2^{\\frac{8}{3}}\\approx 19.05$ is about $2.10$, already above the unit-mass intensity $5/3$.",
        "The climb is slow, one twelfth on the leftover exponent, but it is a climb. Falling $D/G$ would have needed gill leftover exponent at least three quarters.",
      ].join("\n\n"),
    },
    "math-8-85": {
      4: [
        "Checking $H(12)=720/144=5$ is the barrier itself, not a point past $15$ m.",
        "A survey that had read $45$ instead of $80$ at $3$ m would have lowered $A$ to $405$ and pushed the barrier to $d=9$, still under $15$.",
        "The stem's $80$ locks $12$ m. Inverse-linear thinking is the only common route past $15$ m, and the quadrupling record already refused that exponent.",
      ].join("\n\n"),
    },
    "math-8-86": {
      0: [
        "Checking $S(1)=225\\pi$ and $S(8)=3600\\pi$ is a sixteenfold area on an eightfold clock, $8^{\\frac{4}{3}}=16$.",
        "A sum of a retainer plus a power would have broken the monomial. The stem's radius has no intercept, so the disc has no intercept either.",
        "The opposite verdict would have needed a radius law that was not a pure power. Both stages in the stem are powers, and the stained area remains a power of elapsed time.",
      ].join("\n\n"),
      4: [
        "Checking $r(64)=15\\cdot 16=240$ is the forward reading at sixty-four hours, the same pair the inverse just recovered.",
        "Fifty hours is not a near miss: $r(50)\\approx 204$ still sits $36$ metres short of the named $240$.",
      ].join("\n\n"),
    },
    "math-8-87": {
      1: [
        "Checking the centimetre curve at a $25$ cm head, which is the gauged $0.25$ m: $0.016\\cdot 25^{\\frac{3}{2}}=0.016\\cdot 125=2$, the same discharge.",
        "The rewrite preserved the weir. Discharge still outruns head after every unit change the field team writes down.",
      ].join("\n\n"),
      4: [
        "Checking $Q(4)=128$ on the metre curve and $Q=16\\cdot 400^{\\frac{3}{2}}=16\\cdot 8000=128000$ litres per second on the litre curve: both sit past $100$ cubic metres per second.",
        "Units cannot hide an overshoot that large. Linear thinking from the gauging is the only common route under $100$, and it is the wrong scale.",
      ].join("\n\n"),
    },
    "math-8-88": {
      0: [
        "Checking $F(3)=27$ and $F(6)=108$: a doubled batch from $3$ t to $6$ t quadruples fuel, the same $r=2$ ranking as the $300\\%$ note.",
        "A $20\\%$ larger batch raises fuel by $44\\%$, already more than $20\\%$. Fuel outruns mass on every stretch, not only on a doubling.",
      ].join("\n\n"),
      1: [
        "Checking $F(2)=12$ becoming $F(4)=48$ is the doubling in the claim written as levels.",
        "Calling $12$ to $48$ a doubling of fuel is the linear mismatch. The $300\\%$ note is a quadrupling of the bill, leftover exponent $2$.",
      ].join("\n\n"),
    },
    "math-8-89": {
      0: [
        "Checking $P(m(4))=16$ and $P(m(16))=256$ is $4^{2}$ and $16^{2}$. Two more throttle settings sit on the same square.",
        "A leftover constant in either stage would have broken the monomial. Both stages in the stem are pure powers, so the composed index is a power of throttle.",
      ].join("\n\n"),
      4: [
        "Checking $P(m(9))=81$ in the forward direction is the calibration itself: $m=6$ and $6^{4}/16=81$.",
        "There is no second positive throttle that returns index $81$. The composed square has one positive root, $t=9$, which is not above $20$.",
      ].join("\n\n"),
    },
    "math-8-90": {
      2: [
        "Checking $L(400)/400=80/400=0.2$, the same intensity App Q holds at every distance.",
        "App L only meets that constant at the crossing. Before $400$ km, L's minutes per kilometre still sit above $0.2$ and are falling toward it.",
        "Falling intensity on L is leftover exponent $-\\frac{1}{2}$ on $L/d$, which is the claim.",
      ].join("\n\n"),
    },
  },
};

for (const [fileName, lettersById] of Object.entries(batches)) {
  const fp = path.join(__dirname, fileName);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const t of arr) {
    const ex = lettersById[t.id];
    if (!ex) continue;
    for (const [j, extra] of Object.entries(ex)) {
      t.tactical_explanations[Number(j)] = spliceBeforeCloser(
        t.tactical_explanations[Number(j)],
        extra
      );
    }
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  for (const t of arr) {
    if (lettersById[t.id]) {
      console.log(t.id, t.tactical_explanations.map(words).join(" "));
    }
  }
}
