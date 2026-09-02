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
    0: `Checking $P(8)=256$ and $P(12)=864$, the speed ratio $1.5$ produced a power ratio $3.375=1.5^{3}$, not $1.5$. Power outruns speed by the leftover cube. A rider who treated watts as lockstep with speed would have under-budgeted the pursuit.`,
    1: `Drag quadrupled on a doubled speed because $r=2$. Power is drag times speed, so the extra factor of $2$ on $v$ turns that $4$ into $8$. Mixing the drag factor with the power factor is how a twofold power claim appears. Letter A already used leftover exponent $3$; this letter is that $3$ read as a doubling.`,
    2: `The $40$ N drag gap between $8$ and $12$ m/s is a difference of levels of $F$, not of $P$. Converting through $P=Fv$ gives $P(12)-P(8)=864-256=608$ watts across $4$ m/s, an average of $152$ W per extra metre, which sits between the instantaneous slopes $96$ and $216$ as a rising $P'$ requires. Later metres cost more watts.`,
    3: `The rider's $500$ W ceiling is already above $256$ W, so at $8$ m/s the pursuit is still legal on power. Letter E then shows $12$ m/s is not. This letter is only the $300$ W line at the slow run.`,
    4: `Eight hundred and sixty-four also sits past the $500$ W pursuit ceiling. The $800$ W cutoff in the claim is a nearby figure, not that ceiling. Either way the faster run is over budget. The opposite verdict on the $800$ line would have needed $A\\le 800/1728$.`,
  },
  "math-8-82": {
    0: `Checking $S(2)=50$ and $S(4)=6.25$ is an eighth, not a half. Inverse proportionality is the wrong power. The locator is an inverse cube.`,
    1: `Letter A already refused inverse proportionality. This letter is the same doubling record read as a halving claim. Depth $\\times 2$ is signal $\\times \\frac{1}{8}$, never $\\times \\frac{1}{2}$.`,
    2: `A rushed solver who swapped the variables and kept exponent $-3$ would have written $x=400 S^{-3}$ and lost the reciprocal. At $S=50$ that wrong inverse would not return $x=2$. The exponent must take the reciprocal: $-3$ becomes $-\\frac{1}{3}$. Falling signal does not introduce a logarithm. The opposite verdict would have needed a decaying exponential in depth.`,
    3: `Six point two five sits under seven. Inverse-cube on one doubling of the $2$ m calibration is an eighth of $50$. A halved $50$ would have been $25$, above $7$, and would have flipped the letter. Inverse-linear thinking is too slow a decay.`,
    4: `Five metres is between the calibration $2$ m and a second doubling $8$ m. The reading $3.2$ mV is between $S(4)=6.25$ and $S(8)\\approx 0.78$, closer to a $5$ m burial than to an $8$ m one. The claim's "more than $8$ metres" overshoots the inverse.`,
  },
  "math-8-83": {
    0: `Checking $D(16)=40$ and $D(81)=135$: mass rose by $5.0625$ while demand rose by $3.375$, the signature of $r=\\frac{3}{4}$ rather than $r=1$. Demand lags mass. A linear oxygen law through $D(16)=40$ would have put $D(81)$ at $202.5$, not $135$.`,
    1: `Both exponents sit below one, yet their difference $\\frac{1}{12}$ is positive, so demand per square centimetre of gill still rises. Falling totals per gram of body, letter A's lag, is a different intensity. This letter is $D/G$, not $D/m$. Mixing those two quotients is how a falling $D/G$ appears.`,
    2: `Two $16$ g fish have $2G(16)=2\\cdot 3\\cdot 16^{\\frac{2}{3}}=24\\cdot 2^{\\frac{2}{3}}\\approx 38.1$ cm². One $32$ g fish has $G(32)=3\\cdot 32^{\\frac{2}{3}}=24\\cdot 2^{\\frac{1}{3}}\\approx 30.2$ cm². The pair out-areas the merge. Equal total mass is not equal gill when $r<1$.`,
    3: `Three hundred and twenty sits above three hundred. From $D(16)=40$, a sixteenfold mass is an eightfold demand because $16^{\\frac{3}{4}}=8$, and $40\\cdot 8=320$. Linear thinking would have claimed $640$ and still sat above $300$, for the wrong shape.`,
    4: `Pooling sixteen fish into one $256$ g body would have demanded $320$ ml/h, under $600$, and flipped the letter. The stem says a tank total is a sum. Sixteen separate $16$ g fish cost $640$ ml/h in oxygen, above $600$. Splitting mass raises total demand when $r<1$.`,
  },
  "math-8-84": {
    0: `Checking $Q(1)=3$ and $Q(2)=48$ is a sixteenfold on a doubling, $2^{4}=16$. Flow outruns radius by a wide margin. A linear emitter would have gone from $3$ to $6$, not to $48$.`,
    1: `Letter A already used $k=4$ as an outrunning. This letter is the same sixteenfold read as a doubling claim. Radius $\\times 2$ is flow $\\times 16$, never $\\times 2$. The bench $Q(2)=48$ becoming $Q(4)=768$ is the concrete witness.`,
    2: `Mean velocity growing as $r^{2}$ is why a wider tube is not just more flow at the same speed: the core is faster too. At $r=3$, the index is $27/\\pi$ times the $r=1$ value of $3/\\pi$, a ninefold speed index on a threefold bore. A constant index would have needed $Q\\propto r^{2}$. The doubling record forbids that.`,
    3: `Two hundred and forty-three sits above two hundred. $3^{4}=81$ times $A=3$ is $243$. Using $3^{3}=27$ times $3$ would have claimed $81$, under $200$, and flipped the letter. The exponent is $4$, not $3$.`,
    4: `Three litres per hour at a $1$ mm bore sits well under ten. The fourth power that made $Q(3)=243$ generous makes $Q(1)=3$ tiny. A linear interpolation from $Q(2)=48$ down to $r=1$ would have claimed $24$, still above $10$, and flipped the letter.`,
  },
  "math-8-85": {
    0: `Checking $H(3)=80$ and $H(6)=20$ is a quarter, not a half. Inverse-linear thinking is the mismatch. The quadrupling record $4^{r}=\\frac{1}{16}$ already locked $r=-2$ before any doubling was asked.`,
    1: `The barrier at $12$ m in letter E is a level of $H$, not a claim about slope. Slope size $|H'|$ is smaller at $6$ m than at $3$ m even though $6$ m is closer to the barrier. Front-loaded inverse-square decay is why an extra metre cuts more dose near the source.`,
    2: `Checking $H=20$ returns $d=6$, letter D. Checking $H=5$ returns $d=12$, letter E. The inverse is faithful to both named dose rates. A change of units from metres to centimetres would rescale $A$ and leave the inverse still a power of dose rate.`,
    3: `Twenty sits under twenty-five. A halved $80$ would have been $40$, above $25$, and would have flipped the letter. Inverse-linear thinking is too slow. Inverse square on a doubled range is a quarter of the survey, $20$.`,
    4: `Twelve sits under fifteen. From the survey, a factor $\\frac{1}{16}$ on dose is a fourfold on distance because $r=-2$. $3\\times 4=12$. A factor $\\frac{1}{16}$ on an inverse-linear law would have been a sixteenfold, $d=48$, past $15$, and would have flipped the letter.`,
  },
  "math-8-86": {
    0: `Checking $S(8)/S(1)=8^{\\frac{4}{3}}=16$ shows a monomial in $t$ with exponent $\\frac{4}{3}$, not a logarithm and not a sum of two powers. Squaring $r=15 t^{\\frac{2}{3}}$ produces $225 t^{\\frac{4}{3}}$, then times $\\pi$. The stained area is itself a power of elapsed time.`,
    1: `Radius grew by $4$ from hour $1$ to hour $8$ while time grew by $8$, a lag. Area grew by $16$, an outrunning. The two stories live together: $r$ has exponent $\\frac{2}{3}<1$ and $S$ has exponent $\\frac{4}{3}>1$. This letter is the area story.`,
    2: `From hour $8$ to hour $16$ the area factor is again $2^{\\frac{4}{3}}\\approx 2.52$, not $2$. Linear thinking understates every doubling of the clock. The opposite verdict would have needed composed exponent $1$.`,
    3: `Sixty sits above fifty. The $45$ m logged growth is $r(8)-r(1)=60-15$, not $r(8)$ itself. Treating $45$ as the hour-$8$ radius would have sat under $50$ and flipped the letter.`,
    4: `Sixty-four hours is past fifty. Linear inversion $15t=240$ would have claimed $t=16$, under $50$, and flipped the letter. A two-thirds radius law is slower than linear, so a large radius takes longer, $t=64$, not less than $50$.`,
  },
  "math-8-87": {
    0: `Checking $Q=16$ returns $h=1$, letter D. Checking $Q=128$ returns $h=4$, letter E. The inverse is faithful in metres, and rewriting $h$ in centimetres only rescales the coefficient to $0.016$ or $16$ depending on the discharge unit. The inverse remains a power of discharge.`,
    1: `Centimetres replace $h$ by $h_{\\mathrm{cm}}/100$. A power pushes that $100$ through the exponent and into the coefficient. The exponent $\\frac{3}{2}$ does not move. Discharge still outruns head after the rewrite. Units cannot flatten a weir.`,
    2: `Letter B already used $r=\\frac{3}{2}$ as an outrunning. This letter is the same exponent read as a doubling claim. Head $\\times 2$ is discharge $\\times 2\\sqrt{2}$, never $\\times 2$, whether the head is logged in metres or in centimetres.`,
    3: `Sixteen sits under twenty. The unit-head discharge equals the coefficient $A=16$. A linear fourfold from the $0.25$ m gauging of $2$ would have claimed $8$, still under $20$. The three-halves fourfold is $8$ times $2$, which is $16$, still under $20$.`,
    4: `One hundred and twenty-eight sits past one hundred. Linear thinking from the gauging would have claimed $32$, under $100$, and flipped the letter. Sixteen times the gauged head is a $16^{\\frac{3}{2}}=64$-fold discharge, $2\\times 64=128$.`,
  },
  "math-8-88": {
    0: `Matching $2^{r}=4$ is $r=2$, not a percentage shortcut $300/100=3$. A cube would have been a $700\\%$ rise on a doubling. The note is $300\\%$, a square. Fuel outruns batch mass because $2>1$.`,
    1: `Letter A already used $r=2$ as an outrunning. This letter is the same $4=2^{2}$ read as a doubling claim. Batch $\\times 2$ is fuel $\\times 4$, never $\\times 2$. The $2$ t fuel $12$ litres becoming $48$ litres at $4$ t is the concrete witness.`,
    2: `Litres per tonne at $2$ t is $6$; at $6$ t it is $18$. Intensity climbed. A falling per-tonne story would have needed $r<1$. The doubling note locked $r=2$, so $F/x=3x$ rises with the batch.`,
    3: `Three hundred sits above two hundred and fifty. Linear scaling from $F(2)=12$ by $10/2$ would have claimed $60$, under $250$, and flipped the letter. A square law fivefolds the mass into a twenty-fivefold bill, $12\\times 25=300$.`,
    4: `One hundred and eight sits past one hundred. The logged gap $96$ plus the $2$ t fuel $12$ is $108$. Treating $96$ as the $6$ t level would have sat under $100$ and flipped the letter. The $96$ is a difference, not a level.`,
  },
  "math-8-89": {
    0: `Checking $P(m(9))=81$ and $P(m(25))=625$ is $9^{2}$ and $25^{2}$. The composition is a square of throttle, a power. Stopping at $m(t)=2\\sqrt{t}$ would have left a square root, still a power, just not the composed one. The claim is after both stages.`,
    1: `A square is not a line. Doubling throttle quadruples the index, $t=9$ to $t=18$ sends $81$ to $324$. Proportionality would have sent $81$ to $162$. The two stages multiply to exponent $2$, not $1$.`,
    2: `Mass flow per unit of throttle falls from $2/3$ at $t=9$ to $2/5$ at $t=25$. Totals $m(9)=6$ and $m(25)=10$ still rise. Falling intensity and rising total live together because leftover exponent on $m$ is $\\frac{1}{2}\\in (0,1)$.`,
    3: `Ten sits above eight. Linear scaling from $m(9)=6$ by $25/9$ would have claimed about $16.7$, still above $8$ but for the wrong shape. The square root is slower and still clears $8$ at throttle $25$.`,
    4: `Nine is the calibration throttle, not a setting above $20$. Index $81$ is $P(6)$ at the calibrated $m(9)=6$. Inverting the wrong stage, treating $81$ as a mass flow, manufactures a huge throttle and flips the letter. The composed square $t^{2}=81$ locks $t=9$.`,
  },
  "math-8-90": {
    0: `One crossing at $d=400$, wait $80$ minutes, is not two crossings. Below $400$ km App Q is faster; above $400$ km App L is faster. A square-root versus a line on $d>0$ is a single positive root of $4\\sqrt{d}=d/5$. The claim's "two different positive distances" would have needed that root to repeat, which a monotone ratio $\\sqrt{d}$ cannot do.`,
    1: `Once L is ahead, the ratio $Q/L=\\sqrt{d}/20$ keeps growing, so Q never catches up. Checking $d=1600$: $L=80$ and $Q=320$, a fourfold wait gap. The opposite verdict would have needed Q to recross, hence a higher leftover exponent on Q than on L. Q is linear; L is a square root.`,
    2: `Minutes per kilometre on App L fall from $0.8$ at $25$ km to $0.2$ at $400$ km. Longer trips still take more minutes, $20$ then $80$, but fewer minutes per kilometre. That is leftover exponent $-\\frac{1}{2}$ on $L/d$. App Q's per-kilometre wait is constant at $0.2$. Mixing the two apps is how a rising L-intensity appears.`,
    3: `Twenty-five kilometres is L's cap, from $4\\sqrt{d}=20$. Thirty kilometres is past that cap, $L(30)\\approx 21.9>20$. Q's cap is $d=100$, which does reach past $30$. Mixing the two caps is the mix-up. Under the $20$-minute SLA, App L cannot serve $30$ km trips.`,
    4: `Eighty sits above seventy. Both apps quote $80$ minutes at the meeting $d=400$. Using L's SLA wait of $20$ minutes against $70$ names $d=25$, not $d=400$. Letter E names four hundred kilometres.`,
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
