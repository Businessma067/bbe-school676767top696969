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
    1: `Mixing the drag quadrupling with the power eightfold is the remaining trap. Drag $\\times 4$ on a doubled speed is true and is not the claim. The claim is absorbed power, $P=Fv$, which takes that $4$ and multiplies by the doubled $v$ to make $8$.`,
    2: `A falling $P'$ would have been a square-root or logarithmic pursuit, leftover exponent below $1$. The recovered cubic has $P'$ climbing as $v^{2}$. Later metres cost more watts, which is the claim.`,
  },
  "math-8-82": {
    0: `The doubling record is one eighth, four times steeper than a half. Inverse proportionality is exponent $-1$. The locator is exponent $-3$. Those are different laws, and the calibration $S(2)=50$ becoming $S(4)=6.25$ is the eighth sitting in the file.`,
    2: `Three named readings sit on one inverse: $50$ mV at $2$ m, $6.25$ mV at $4$ m, $3.2$ mV at $5$ m. A logarithm would not hit all three with a single pair $(A,r)$. The stem is a power, so the inverse is a power.`,
    4: `Linear interpolation between $4$ m at $6.25$ mV and $8$ m at $0.78$ mV would have placed $3.2$ mV near $6$ m, still not more than $8$ m. The cube-root inverse is more precise and lands at $5$ m. Either way the claim's "more than $8$ metres" overshoots.`,
  },
  "math-8-83": {
    1: `At $m=1$ the gill-intensity is $5/3$; at $m=4096$ it is $10/3$. It doubled over twelve doublings of mass, a slow climb, but a climb. Falling would have needed $\\frac{3}{4}\\le\\frac{2}{3}$, which is false.`,
    4: `The hatchery that reads $D$ on pooled mass understates oxygen by a factor of two on this tank: $320$ against $640$. Letter D's single $256$ g fish is the pooled-mass reading; letter E's sixteen fish are the sum. They are different experiments.`,
  },
  "math-8-84": {
    2: `A constant mean velocity is the $k=2$ story, doubling factor $4$. The recorded doubling factor is $16$, so two extra powers of $r$ remain in the velocity index. Wider bores are faster in the mean. The opposite verdict would have needed the doubling record to have been $4$, not $16$.`,
    3: `The $200$ L/h cutoff is a nearby figure, not a rounding of $243$. Changing the bench from $48$ to $40$ L/h would have lowered $A$ to $2.5$ and $Q(3)$ to $202.5$, still above $200$. The stem's $48$ locks $243$.`,
  },
  "math-8-85": {
    0: `Halving dose on a doubled range is inverse-linear, exponent $-1$. The survey quarters dose on a doubled range, exponent $-2$. Letter A is that ranking. Checking $80$ to $20$ from $3$ m to $6$ m is the quarter.`,
  },
  "math-8-86": {
    0: `If the radius law had carried an additive constant, $r=A t^{\\frac{2}{3}}+B$, the squared area would have been a sum of powers, not a single power. The stem has no such intercept. $S=225\\pi t^{\\frac{4}{3}}$ is a monomial.`,
    2: `Every doubling of the clock multiplies stained area by about $2.52$, not by $2$. From hour $1$ to hour $2$, from hour $8$ to hour $16$, the same factor. Linear thinking understates the disc at every step. The composed exponent $\\frac{4}{3}$ is why.`,
    4: `Fifty hours reaches about $204$ m, short of $240$. Sixty-four hours is the inverse. The $50$ hour cutoff is not a near miss on $240$ m; it is $36$ m short. Linear inversion claiming $t=16$ is how a true "under $50$" appears, and it is the wrong inverse.`,
  },
  "math-8-87": {
    1: `The field team's centimetre curve $Q=0.016 h_{\\mathrm{cm}}^{\\frac{3}{2}}$ and litre curve $Q=16 h_{\\mathrm{cm}}^{\\frac{3}{2}}$ still carry exponent $\\frac{3}{2}$. Doubling a centimetre-head still multiplies discharge by $2\\sqrt{2}$. Outrunning is an exponent fact, not a unit fact.`,
    4: `The $100$ m³/s cutoff is a nearby figure, not a rounding of $128$. Linear scaling from the gauging lands at $32$, under $100$, and flips the letter. The three-halves sixteenfold from $0.25$ m to $4$ m is $64$ times $2$, which is $128$.`,
  },
  "math-8-88": {
    0: `Fuel outruns mass because leftover exponent $2>1$. A $20\\%$ larger batch would raise fuel by $1.2^{2}-1=44\\%$, already more than $20\\%$. The doubling note is the clean version of that same ranking: $100\\%$ more mass, $300\\%$ more fuel.`,
    1: `The $2$ t to $4$ t move is the doubling in the claim, and fuel goes $12$ to $48$, a quadrupling. Calling that a doubling of fuel is the linear mismatch. Letter A already named $r=2$; this letter is $2^{r}=4$ read against the word "doubles".`,
  },
  "math-8-89": {
    0: `A product of powers of the same $t$ is a power of $t$. Square root times fourth power is a square. The coefficient cancellation $\\frac{2^{4}}{16}=1$ is extra luck; even without it, $\\frac{A^{4}}{16}t^{2}$ would still have been a power of throttle. The claim is the shape, not the luck.`,
    4: `Inverting $t^{2}=81$ on $t>0$ has one root, $t=9$. There is no second root above $20$. Treating $81$ as a mass-flow target, $2\\sqrt{t}=81$, manufactures $t\\approx 1640$ and is the wrong stage. The $81$ is $P$, not $m$.`,
  },
  "math-8-90": {
    0: `Two positive meetings would have needed the ratio $Q/L$ to equal $1$ twice. That ratio is $\\sqrt{d}/20$, which equals $1$ only at $d=400$. Below $400$ it is less than $1$ and App Q is faster; above $400$ it is greater than $1$ and App L is faster. One meeting, not two.`,
    2: `Falling minutes per kilometre on App L is leftover exponent $-\\frac{1}{2}$. The logged $25$ km trip at $0.8$ min/km becoming $0.2$ min/km at $400$ km is that fall. Totals still rise, $20$ minutes to $80$. Intensity is not the total. Mixing them is how a rising L-per-kilometre claim appears.`,
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
