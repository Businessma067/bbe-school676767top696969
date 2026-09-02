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
  "math-8-61": {
    0: `Checking the recovered levels: $S(4)=40$ and $S(9)=135$, and $135/40=3.375=\\left(\\frac{3}{2}\\right)^{3}$, while $9/4=\\left(\\frac{3}{2}\\right)^{2}$. Matching those powers is exactly $k=\\frac{3}{2}$. A linear weld would have needed $135/40=9/4$, which is false.`,
    2: `The opposite verdict would have needed a law that was not a pure power: a logarithmic strength in current would invert to an exponential, not to a monomial. The stem is $S=A p^{k}$.`,
    3: `A second mix-up is reading $S(9)-S(4)=95$ N across $5$ A, about $19$ N per extra ampere on average, and treating that average as if it were larger at $4$ A. The average sits between the two instantaneous slopes $15$ and $22.5$, as a rising slope requires. It does not reverse the ranking.

If the two spot checks had forced $k<1$, both the ranking in letter A and this slope ranking would have flipped together. Changing $A$ scales both slopes by the same factor and cannot reverse $15<\\frac{45}{2}$. A linear weld $S=10p$ would have made the extra ampere add $10$ N at both currents; the stem is a three-halves power.

The reject line in letter E uses the same recovered rule, inverted. This letter is the derivative of that rule, not the inverse.`,
    4: `A linear inversion $5p=400$ would have claimed $p=80$, well above $18$. That overstates the current needed when $k>1$. Another mix-up is reading $S(16)=320$ as if sixteen amperes already cleared $400$. Three hundred and twenty is still short.

The opposite verdict would have needed $A>5\\cdot 18^{\\frac{3}{2}}/400\\approx 5.24$, a slightly larger coefficient so that $18$ A already cleared $400$. The two spot checks lock $A=5$, and $18$ A stays short of the reject line.`,
  },
  "math-8-62": {
    2: `The opposite verdict would have needed exponent $1$. Lockstep would also have made letter A's two-versus-one comparison a tie at equal total mass, which it is not. The trial buoy of $8$ kg at $24$ kN already forces $\\frac{2}{3}$.`,
    3: `A change of units from kilograms to tonnes rescales the coefficient to $B=600$ and leaves the inverse still a power of holding power. At $H=96$ the inverse returns $m=64$, the large buoy in letter A. At $H=48$ it returns two different stories: one $8$ kg buoy holds $24$, so two such buoys hold $48$ without being a single mass of $m=(48/6)^{\\frac{3}{2}}\\approx 22.6$ kg. The inverse names the single buoy that holds $48$ kN, not a pair.

The opposite verdict would have needed an exponential hold in mass, which inverts to a logarithm. The stem is a monomial.`,
    4: `In the tonne law $H(t)=600 t^{\\frac{2}{3}}$, one tonne holds $600$ kN, four times the storm floor. The storm protocol is a light buoy, not a tonne-class mooring. Mixing the $125$ in $m=125$ kg with a tonne reading is the unit trap in the title.

A rushed solver who inverted $6t^{\\frac{2}{3}}=150$ without converting, treating $t$ as kilograms already, would have claimed $t=125$ tonnes, well above $1$ tonne, and flipped the verdict. That is using the kilogram coefficient on a tonne variable. The recovered pair is $A=6$ in kilograms and $B=600$ in tonnes; they are not interchangeable.`,
  },
  "math-8-63": {
    0: `Falling throughput does not introduce a logarithm. A change of units from metres to kilometres would rescale $A$ by $1000^{-2}$ and leave the inverse still a power of $T$. The opposite verdict would have needed a decaying exponential in hop distance.`,
    1: `A rushed solver who inverted as if the exponent were $-1$ would have claimed $d=800/8=100$ m, well past $12$, and flipped the verdict. Inverse-linear thinking overstates the reliable radius. Checking $d=12$: $T(12)=800/144\\approx 5.56$, which already misses the $8$ Mbps floor.`,
    2: `The opposite verdict would have needed exponent $-1$. The bench reading $T(4)=50$ together with the inverse-square stem already forbids a halving. Letter B's reliable radius of $10$ m is two and a half bench hops, hence a factor $(2.5)^{2}=6.25$ on the denominator, $50/6.25=8$, which matches the floor.`,
    3: `The opposite verdict would have needed a larger coefficient, so that $T(11)$ rose through $8$. At the recovered $A=800$, eleven metres is locked below the floor. A bench reading of $60$ Mbps instead of $50$ would have pushed $A$ to $960$ and $T(11)\\approx 7.93$, still just under $8$; the stem's $50$ Mbps leaves a clearer miss.`,
    4: `A second mix-up is reading the reliability floor as if slope size should grow as the link approaches $8$ Mbps. The floor is a level, $T=8$ at $d=10$. Slope size is $|T'|=1600/d^{3}$, which is smaller at $8$ m than at $4$ m, even though $8$ m is closer to the floor.

The opposite verdict would have needed $|T'|$ to grow with $d$. For $r=-2$, $|T'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $25>\\frac{25}{8}$. Inverse-linear decay, exponent $-1$, would still have been front-loaded, just less steeply.`,
  },
  "math-8-64": {
    2: `The opposite verdict would have needed leftover exponent $0$, hence original exponent $1$. The specimen $G(256)=512$ together with $r=\\frac{3}{4}$ already refuses a constant intensity. Two $16$ g fish have combined intensity $128/32=4$, while one $32$ g fish has $G(32)/32\\approx 3.36$. Intensity falls under a merge as well as under growth.`,
    3: `The opposite verdict would have needed exponent $1$. The same $r<1$ that made letter A true makes this doubling false. Checking $G(256)=512$: half the mass is $128$ g, and $G(128)=8\\cdot 128^{\\frac{3}{4}}=8\\cdot (2^{7})^{\\frac{3}{4}}=8\\cdot 2^{\\frac{21}{4}}\\approx 215$, not $256$.`,
    4: `Linear scaling from $G(16)=64$ by $64/16=4$ would have claimed $256$, above $200$, and flipped the verdict. Linear thinking overstates the $64$ g fish. The overview's note that $216$ cm² occurs at $81$ g rather than at $64$ g is the nearby true level: $G(81)=8\\cdot 27=216$, which does clear $200$, but that is a different fish.

The opposite verdict would have needed $A>200/(16\\sqrt{2})\\approx 8.84$. The specimen locks $A=8$, and $64$ g stays short of $200$ cm².`,
  },
  "math-8-65": {
    2: `The opposite verdict would have needed $r>1$, so that $S'$ would rise. The stem is a square root. Changing $A$ scales both slopes by the same factor and cannot reverse $\\frac{5}{4}>\\frac{5}{6}$. The recorded $5$ MPa gap across five days is an average of $1$ MPa per day, which sits between $\\frac{5}{4}$ and $\\frac{5}{6}$, as a falling slope requires.

Letter A was a scale identity. This letter is the derivative of the same square-root clock. They are the same $r=\\frac{1}{2}$ fact, read once as a quadrupling and once as a flattening.`,
    3: `A linear clock $S=2.5 t$ through $S(4)=10$ would have hit $30$ MPa on day $12$, still under $40$, for the wrong wait. The true wait is $36$. Checking day $40$: $S(40)=5\\sqrt{40}\\approx 31.6$, already past $30$. The $40$-day cutoff is past the target, not a near miss that could flip.

The opposite verdict would have needed $A<30/\\sqrt{40}\\approx 4.74$, a smaller coefficient so that day $40$ was still short of $30$ MPa. The recorded $5$ MPa gap locks $A=5$.`,
    4: `The opposite verdict would have needed the surviving record to have been a level of $5$ MPa on day $9$. The stem says the strength rose by $5$ MPa between day $4$ and day $9$. Letter B already used the day-$4$ level $10$ that makes the gap $15-10=5$.`,
  },
  "math-8-66": {
    2: `The opposite verdict would have needed $k=1$. The trusted ratio $4$ on a doubled span forbids that. Letter A already used that $k=2$; this letter is the same fact read as a doubling claim rather than as an outrunning claim.`,
    3: `A rushed solver who compared $150$ to the $3$ m reading $18$ as a ratio, without using the trusted $162$, might have missed the millimetre test. Letter E reads the same gap as a ratio. This letter reads it as millimetres. The opposite verdict would have needed the third run to have been $152$ mm or higher.`,
    4: `A two-point refit using $y(3)=18$ and $y(9)=150$ would force $3^{k}=\\frac{25}{3}$, so $k\\approx 1.930$, not $2$. Rescaling $A$ to force the third run, $A=150/81\\approx 1.85$, then breaks $y(3)$: $1.85\\cdot 9=16.65\\neq 18$. Either constant can be saved, not both.

A rushed solver who treated $12$ mm as "close enough" on a $162$ mm prediction would have called the statement true. The letter asks whether the third run sits on the same power law, not whether it is nearby. The opposite verdict would have needed a recorded third run of $162$ mm. The stem records $150$.`,
  },
  "math-8-67": {
    0: `Checking $1.2^{2}=1.44$ and $1.2^{4}=2.0736$ shows that $1.728$ sits on the cube, not on the square or the fourth power. The opposite verdict would have needed $k\\le 1$, hence a $20\\%$ stretch raising mass by $20\\%$ or less. The design note is $72.8\\%$.`,
    1: `A rushed solver who added $20\\%$ to $500$ kg would have claimed $600$, under $800$, and flipped the verdict. Height and mass do not move in lockstep when $k=3$. The opposite verdict would have needed a smaller reference mass, so that $M(12)$ fell through $800$.`,
    2: `Any $A$ with $k=3$ would still raise mass by $72.8\\%$ on a $20\\%$ stretch. The percentage rule is blind to whether the reference mast uses $500$ kg or $5000$ kg. A rushed solver who solved $A\\cdot 1.2^{k}=1.728$ as if that were a level would have manufactured a fake $A$. The $1.728$ is a multiplier, not a mass in kilograms.

The opposite verdict would have needed a second level, or a named mass in the percentage note. The stem separates a ratio from a level on purpose. Letter B then uses the $10$ m reference to pin $A=0.5$; this letter is why that reference cannot be skipped.`,
    3: `Checking the reference: $M(11)=0.5\\cdot 11^{3}=665.5$, and $665.5/500=1.331$. The mass rise is $165.5$ kg on a $500$ kg mast, $33.1\\%$. A rushed solver who tripled the $10\\%$ to $30\\%$ as a linear elasticity shortcut would have sat on the $30\\%$ line. The exact cube is $1.331$, a little above $30\\%$.

The opposite verdict would have needed $1.1^{k}\\le 1.30$, hence $k\\le \\log(1.30)/\\log(1.1)\\approx 2.74$. The percentage rule locked $k=3$. Letter E then reads the $20\\%$ stretch, whose exact factor is the design note $1.728$.`,
    4: `A rushed solver who copied the $20\\%$ from height onto mass would have called the statement true. That is exponent $1$, which letter A already refused. The opposite verdict would have needed $k=1$. The design note $72.8\\%$ on a $20\\%$ stretch forbids that.`,
  },
  "math-8-68": {
    0: `Checking the survey: $I(2)=0.72$. Doubling to $4$ m gives $I(4)=0.18$, and $0.18/0.72=\\frac{1}{4}$. Letter B reads that $0.18$ against a $0.2$ cutoff. The opposite verdict would have needed exponent $-1$.`,
    1: `A rushed solver who halved $0.72$ would have claimed $0.36$, above $0.2$, and flipped the verdict. Inverse-linear thinking is too slow a decay. The opposite verdict would have needed a larger coefficient, so that $I(4)$ rose through $0.2$.`,
    2: `A second mix-up is reading the night cap as if slope size should grow as intensity approaches $0.08$. The cap is a level, $I=0.08$ at $d=6$. Slope size is $|I'|=5.76/d^{3}$, which is smaller at $6$ m than at $2$ m, even though $6$ m is the cap.

The opposite verdict would have needed $|I'|$ to grow with $d$. For $r=-2$, $|I'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $0.72>0.027$. Inverse-linear decay would still have been front-loaded, just less steeply.`,
    3: `Checking $I(5)=2.88/25=0.1152$, which is still above the cap. Five metres is inside the night restriction; six metres is the boundary. A rushed solver who treated "at or above the cap" as the night-rule violation would have called this letter true. The statement says "still above," and $0.08$ is not above $0.08$.`,
    4: `A rushed solver who saw a decaying power and claimed it never reaches a positive floor would have mixed an asymptote at $0$ with a failure to cross $0.08$. Intensity approaches $0$, so it must pass $0.08$ on the way. The opposite verdict would have needed a positive horizontal asymptote above $0.08$.`,
  },
  "math-8-69": {
    0: `Checking the commissioning run: $v(5)=20\\sqrt{2}$. Doubling flow to $10$ doubles speed to $40\\sqrt{2}$, which is letter D. Proportionality is the same fact as that doubling. If the nozzle had been $v=4H$ instead of $4\\sqrt{H}$, the composition would have been cubic in flow, not linear. The stem's square root of a square is why the leftover exponent is $1$.`,
    1: `A rushed solver who compared head $50$ m to $28$ m/s would have mixed metres of head with metres per second of jet. The opposite verdict would have needed a smaller commissioning head, so that $20\\sqrt{2}$ fell through $28$.`,
    2: `Mixing the two stages is the mismatch. Letter A doubled flow and doubled speed. This letter doubles flow and expects doubled head. They are different experiments. The opposite verdict would have needed first-stage exponent $1$. The stem squares flow.`,
    3: `A rushed solver who inverted the square head law as if speed needed four times the flow would have claimed $q=20$, past $12$, and flipped the verdict. That mix-up inverts $H$ instead of $v$. Head at $40\\sqrt{2}$ m/s is $H=v^{2}/16=200$ m, which is $q=10$, not $q=20$.

Checking $q=12$: $v(12)=48\\sqrt{2}\\approx 67.9$, already past $40\\sqrt{2}\\approx 56.6$. The $12$ m³/h cutoff is past the target, not a near miss. The opposite verdict would have needed a smaller composed coefficient, so that the inverted flow rose through $12$.`,
    4: `Checking the commissioning pair: $H=50$ and $v=20\\sqrt{2}\\approx 28.3$, and $50$ is not a constant times $28.3$ that would also fit $H=200$ at $v=40\\sqrt{2}\\approx 56.6$, because $200/56.6\\approx 3.53$ while $50/28.3\\approx 1.77$. The ratio $H/v$ is not constant.

Letter A said speed is proportional to flow. This letter asks whether head is proportional to speed. Those are different pairs of variables. The opposite verdict would have needed leftover exponent $1$ from $v$ to $H$. The stem leaves $H\\propto v^{2}$.`,
  },
  "math-8-70": {
    0: `A rushed solver who doubled the crew to $32$ would have claimed $T(32)=20\\sqrt{32}\\approx 113$, short of $160$. Doubling headcount does not double pallets. The opposite verdict would have needed an exponent of $1$ or more. The stem is a square root. Letter D then inverts a still larger target of $150$ against the same recovered rule.`,
    1: `A rushed solver who scaled $T(16)=80$ by $36/16$ linearly would have claimed $180$, still above $110$ but for the wrong shape. Linear thinking overstates a larger crew when $r<1$. The opposite verdict would have needed a smaller coefficient, so that $T(36)$ fell through $110$.`,
    2: `A rushed solver who saw $T(36)=120>T(16)=80$ and inferred a rising intensity would have mixed a higher total with a higher per-driver figure. Totals rise; intensities fall. The opposite verdict would have needed leftover exponent $0$, a proportional warehouse.`,
    3: `From $20\\sqrt{s}=150$ one has $\\sqrt{s}=7.5$ and $s=56.25$. A rushed solver who scaled linearly from $80$ pallets at $16$ drivers would have claimed $s=30$, inside the cap, and flipped the verdict. Linear thinking understates the crew when $r<1$.

Checking $T(36)=120<150$. The cap is not a near miss on $150$; it is $30$ pallets short. The opposite verdict would have needed $A>150/6=25$, a larger coefficient so that the capped shift already cleared $150$. The logged shift locks $A=20$.`,
    4: `Checking just inside the cap: $T(35)=20\\sqrt{35}\\approx 118.3<120=T(36)$. More legal drivers still mean more pallets. A rushed solver who saw intensity falling in letter C and inferred that extra drivers could eventually hurt the total would have mixed a falling average with a falling total. The marginal $T'$ stays positive; only the average falls.

The opposite verdict would have needed $T$ to peak before $s=36$, hence a negative leftover exponent on $T$ itself. The stem's exponent $0.5$ is positive.`,
  },
};

const fp = path.join(__dirname, "61_70.json");
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
for (const t of arr) {
  console.log(t.id, t.tactical_explanations.map(words).join(" "));
}
