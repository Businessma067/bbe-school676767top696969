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
  "math-8-81": {
    1: `A rider who doubled speed from $8$ to $16$ m/s would need $2048$ W, eight times $256$, not twice $256$. The $500$ W ceiling is already broken by a much smaller step: even $P(10)=500$ exactly, so the doubling in the claim is far past sustainable. Power rises with the cube of speed, leftover exponent $3$, which is why a twofold speed is an eightfold watt budget.`,
    2: `Because $P'=\\frac{3}{2}v^{2}$ itself rises with $v$, the extra metre at $12$ m/s costs $216$ W while the extra metre at $8$ m/s costs $96$ W. Those are not close. A cubic power curve is front-loaded in reverse: later speed is dearer, not cheaper. The claim's ranking matches that rising slope. The opposite ranking would have needed a square-root power, leftover exponent below $1$.`,
  },
  "math-8-82": {
    2: `Depth as a function of reading is $x=\\sqrt[3]{400/S}$. At $S=6.25$ that returns $x=4$, letter D. At $S=50$ it returns $x=2$, the calibration. At $S=3.2$ it returns $x=5$, letter E. Three named readings, one monomial inverse. Falling millivolts do not introduce a logarithm. The opposite verdict would have needed $S=A e^{-kx}$, whose inverse is logarithmic in the reading.`,
    4: `A second doubling from the $4$ m burial would have been $8$ m and $S=6.25/8\\approx 0.78$ mV, far below $3.2$ mV. The reading $3.2$ sits between $S(4)=6.25$ and $S(8)\\approx 0.78$, and the cube-root inverse places it at $5$ m, not past $8$ m. The claim overshoots the burial depth. Linear thinking on depth against a cubed decay is how an $8$ m guess appears.`,
  },
  "math-8-83": {
    1: `Demand per gram of body is $5 m^{-\\frac{1}{4}}$, which does fall, letter A's lag. Demand per square centimetre of gill is $\\frac{5}{3}m^{\\frac{1}{12}}$, which rises. Those are different denominators. Mixing $D/m$ with $D/G$ is how a falling gill-intensity appears. The stem asks about oxygen per square centimetre of gill, and $\\frac{3}{4}>\\frac{2}{3}$ makes that intensity climb.`,
    4: `One large fish of $256$ g demands $320$ ml/h, under $600$. Sixteen small fish of $16$ g demand $640$ ml/h, above $600$. The tank is the sixteen, not the one. Because $r<1$, a hatchery that stocks many small fish pays more total oxygen than one that stocks the same mass as fewer large fish. Pooling into $D(256)$ understates the tank by half.`,
  },
  "math-8-84": {
    2: `If the mean velocity index were the same in every tube, $Q$ would scale as the cross-section $r^{2}$ and the doubling factor would have been $4$, not $16$. The recorded sixteenfold is $2^{4}$, two extra powers of radius beyond area, which remain in $Q/(\\pi r^{2})$ as $r^{2}$. Wider tubes are faster in the mean, not just roomier. The opposite verdict would have needed $k=2$. The doubling record is $16$.`,
    3: `Two hundred and forty-three sits above two hundred by $43$ litres per hour, not a rounding. A cubic emitter $3r^{3}$ would have delivered $81$ at $r=3$, under $200$, and flipped the letter. The exponent is $4$. The bench $Q(2)=48$ already refuses a cube: $3\\cdot 8=24\\neq 48$.`,
  },
  "math-8-85": {
    1: `Front-loaded inverse-square decay means the first metres from the hub do most of the dose cutting. From $3$ to $4$ m the drop is $35$ microsieverts per hour; from $6$ to $7$ m it is about $5$. An extra metre at $3$ m cuts more than an extra metre at $6$ m. The barrier at $12$ m is a level, $H=5$; it is not a region where slope suddenly steepens.`,
    4: `The factor from $80$ down to $5$ is exactly $\\frac{1}{16}=4^{-2}$, so distance multiplies by $4$ and $3\\times 4=12$. Twelve is not farther than fifteen. Inverse-linear thinking would have multiplied distance by $16$ and claimed $48$ m, past $15$, flipping the letter. The quadrupling record already locked inverse square, so the barrier is the fourfold of the survey, $12$ m.`,
  },
  "math-8-86": {
    0: `Squaring a monomial yields a monomial. $r=15 t^{\\frac{2}{3}}$ squared is $225 t^{\\frac{4}{3}}$, times $\\pi$ is $S$. No intercept, no logarithm. A disc whose radius grew exponentially would have given an exponential area, not a power. The stem's radius is a power of time, so the stained area is a power of time.`,
    4: `To reach $240$ m the two-thirds clock needs $t=64$ h, past $50$. At $t=50$, $r\\approx 204$ m, still $36$ m short. Linear inversion $t=240/15=16$ would have sat under $50$ and flipped the letter. A radius that lags time takes longer to hit a large target, not less than $50$ hours.`,
  },
  "math-8-87": {
    1: `Rewriting $h$ in centimetres multiplies the input by $100$ and therefore multiplies the coefficient by $100^{-\\frac{3}{2}}=0.001$. The exponent stays $\\frac{3}{2}$. Reporting discharge in litres per second multiplies the coefficient by $1000$ and again leaves the exponent. Discharge outruns head in every unit system the field team writes down. Units cannot flatten a weir to exponent $1$.`,
    4: `Four metres is a sixteenfold of the gauged $0.25$ m head. A three-halves power turns that sixteenfold into a $64$-fold discharge, $2\\times 64=128$ m³/s, past $100$. Linear thinking claims $32$ m³/s, under $100$, and flips the letter. The weir's leftover exponent $\\frac{3}{2}$ is why the large head overshoots $100$.`,
  },
  "math-8-88": {
    0: `A $300\\%$ rise means the new fuel is $4$ times the old fuel, because $100\\%+300\\%=400\\%$ of the original, a factor of $4$. That factor is $2^{2}$, so $r=2>1$. Fuel outruns batch mass. Reading $300\\%$ as a factor of $3$, or as $3$ times a $100\\%$ doubling, misses that a $300\\%$ rise is a quadrupling of the bill.`,
    1: `Batch $\\times 2$ is fuel $\\times 4$. The $2$ t dryer using $12$ litres uses $48$ litres at $4$ t, not $24$. Letter A already used $r=2$ as an outrunning; this letter is that square read as a doubling claim. Linear thinking on a $300\\%$ note is how a twofold fuel claim appears.`,
  },
  "math-8-89": {
    0: `The inner square root and the outer fourth power multiply to $2$. The inner coefficient $2$ raised to the fourth is $16$, which cancels the $16$ in the denominator of $P$, leaving the pure square $t^{2}$. That cancellation is a coefficient story; the exponent $2$ is the composition story. After both stages the index is a power of throttle.`,
    4: `Index $81$ at throttle $9$ is the calibration itself, $P(6)=6^{4}/16=1296/16=81$. Asking for a throttle above $20$ for that same index is looking on the wrong side of $t=9$. At $t=20$ the index is $400$, already past $81$. The composed square $t^{2}=81$ has unique positive root $9$.`,
  },
  "math-8-90": {
    0: `The two logs pin $L(d)=4\\sqrt{d}$ and $Q(d)=d/5$. Equal waits are $4\\sqrt{d}=d/5$, so $\\sqrt{d}=20$ and $d=400$ only. Checking $d=100$: $L=40\\neq Q=20$. Checking $d=25$: $L=20\\neq Q=5$. No second positive meeting. A square-root versus a line meets once on $d>0$.`,
    2: `App L's minutes per kilometre fall because leftover exponent $-\\frac{1}{2}$ is negative. App Q's minutes per kilometre are constant at $1/5$. Mixing Q's constant intensity with L's falling intensity is how a rising L-per-kilometre claim appears. Longer L trips still take more total minutes; they just take fewer minutes per kilometre.`,
  },
};

const fp = path.join(__dirname, "81_90.json");
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
