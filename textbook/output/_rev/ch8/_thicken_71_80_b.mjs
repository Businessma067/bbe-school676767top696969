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
    0: `Subscribers fall faster than the price rises whenever $r<-1$. The recovered $-\\frac{3}{2}$ is that region. A $4$-euro till of $250$ thousand subscribers becomes $250\\cdot\\frac{1}{8}\\approx 31.25$ thousand at $16$ euros, an eightfold price that cuts the book eightfold on the subscriber side because $4^{-\\frac{3}{2}}=\\frac{1}{8}$. Inverse-linear demand would have left $62.5$ thousand. The extra half in the exponent is the whole ranking.`,
    1: `Five hundred sits under six hundred. From $R(4)=1000$, a quadrupling of price halves revenue, $1000/2=500$. Mixing $q(16)=2000/64=31.25$ thousand subscribers with the $600$ thousand-euro cutoff is a units error. The claim is revenue.`,
    2: `A rushed solver who thought $pq$ could not stay a power because price and quantity move against each other would have expected a more complicated shape. Along an isoelastic curve the product remains a power. Checking $R(4)=1000$ and $R(16)=500$ is $1000\\cdot 16^{-\\frac{1}{2}}/4^{-\\frac{1}{2}}=1000/2$.`,
    3: `A second mix-up is reading letter A's subscriber exponent $-\\frac{3}{2}$ as the revenue exponent. Doubling revenue would then have needed $k^{-\\frac{3}{2}}=2$, so $k=2^{-\\frac{2}{3}}\\approx 0.63$, a $37\\%$ price cut, still not a half. The leftover exponent on $R$ is $-\\frac{1}{2}$, one higher than demand, because multiplying by $p$ adds one. The opposite verdict would have needed that leftover to be $-1$.`,
    4: `Checking $R(4)=1000$, $R(9)\\approx 667$, $R(16)=500$. The $600$ line sits between $9$ euros and $16$ euros. Letter B is the far side of that line; letter E is the near side. Mixing the two prices is how a true "under $600$ at $9$ euros" appears.`,
  },
  "math-8-72": {
    0: `Checking $C(1)=400+30=430$, which is not $30$, is a one-branch witness that the intercept is live. A pure square-root bill through $C(100)=700$ would have been $C(n)=70\\sqrt{n}$, giving $C(400)=1400$, not the logged $1000$. The two invoices refuse a pure power. The opposite verdict would have needed the $1000$-euro invoice to have been $1400$.`,
    1: `One thousand three hundred sits above one thousand two hundred. Nine hundred branches contribute a square root of $30$, times $30$ is $900$, plus the retainer $400$. The opposite verdict would have needed $F+30\\cdot 30\\le 1200$, hence $F\\le 300$. The two invoices lock $F=400$.`,
    2: `Both pieces decline as the network grows: the retainer is spread, and the leftover exponent on the variable term is negative. A larger network is cheaper per branch even while the total bill rises. Checking $C(900)/900\\approx 1.44$ euros a branch, cheaper still than the $2.5$ at $400$ branches.`,
    3: `Checking a second quadrupling, from $400$ to $1600$ branches: $C(1600)=400+30\\cdot 40=1600$, while doubling $C(400)=1000$ would have claimed $2000$. The retainer keeps stealing from the scale factor. The opposite verdict would have needed $F=0$, which letter A already refused.`,
    4: `Five hundred and eighty sits below seven hundred. Thirty-six branches still sit below the $100$-branch invoice. The square-root term has fallen from $300$ to $180$; the retainer is the same $400$. The opposite verdict would have needed a negative retainer, so that a smaller network could cost more in total.`,
  },
  "math-8-73": {
    0: `Checking $T(30)=160+90=250$ and $T(50)=96+150=246$, both above $T(40)=240$, is a two-sided witness that the crossing is a valley, not a peak. A rushed solver who saw $O$ falling and $H$ rising and guessed the total might keep falling past the crossing would have missed $T'>0$ for $q>40$. The opposite verdict would have needed $T''<0$ at the crossing, a maximum. For this pair $T''=9600 q^{-3}>0$.`,
    1: `Two hundred and sixty sits above two hundred and fifty. Ordering $80$ plus holding $180$ is $260$. A rushed solver who used $T(40)=240$ against the $250$ cutoff would have named the minimum, not the $60$-unit batch. Letter B names $60$.`,
    2: `Checking $T(20)=300$ and $T(80)=300$ from letter D shows the symmetry that an arbitrary doubling does not enjoy. Doubling $30$ to $60$ gives $T(30)=250$ and $T(60)=260$, not a tie. The opposite verdict would have needed $T$ constant, which would have required $A=B=0$.`,
    3: `Checking the two components at $20$ and at $80$: $O(20)=240$, $H(20)=60$, total $300$; $O(80)=60$, $H(80)=240$, total $300$. The components swap. That swap is why the totals match. A linear ruler from $40$ would have called $80$ twice as far as $20$ and expected a larger penalty; the EOQ scale is reciprocal. The opposite verdict would have needed a holding law that was not linear in $q$.`,
    4: `Sixty sits well below two hundred. A rushed solver who read $T(80)=300$ as ordering cost would have called the statement true. The claim names ordering cost, $A/q=4800/80=60$. The opposite verdict would have needed $A>16000$. The crossing locks $A=4800$.`,
  },
  "math-8-74": {
    0: `Checking the two averages $6$ and $4$ against $12 L^{-\\frac{1}{4}}$: at $L=16$, $12/2=6$; at $L=81$, $12/3=4$. Both sit on the leftover power, not on the output power $\\frac{3}{4}$. A rushed solver who claimed average product was $12 L^{\\frac{3}{4}}$ would have compared $96$ at $16$ hours with a per-hour figure and mixed total with average. The opposite verdict would have needed the two exponents to coincide, which would have required dividing by $L^{0}$.`,
    1: `Six sits under seven. A rushed solver who used $Q=12 L^{\\frac{3}{4}}$ without dividing would have compared $96$ to $7$. The claim is units an hour. The opposite verdict would have needed $96/16\\ge 7$, hence output at least $112$ at $16$ hours. The log is $96$.`,
    2: `To double output, $k^{\\frac{3}{4}}=2$ forces $k=2^{\\frac{4}{3}}\\approx 2.52$, more than a doubling of hours. From $16$ hours that is about $40.3$ hours, not $32$. A rushed solver who doubled hours to $32$ would have claimed $Q(32)=12\\cdot 32^{\\frac{3}{4}}\\approx 161$, short of $192$. The opposite verdict would have needed $r=1$, which the two shifts refuse.`,
    3: `A rushed solver who saw output rise from $96$ to $324$ and inferred a rising average would have mixed a higher total with a higher per-hour figure. Totals rise; averages fall. Checking a third point: at $L=1$, average product is $12$, higher still. The opposite verdict would have needed $r\\ge 1$.`,
    4: `Four does not exceed five. A rushed solver who used output $324$ against $5$ would have mixed units. The opposite verdict would have needed $324/81>5$, hence output above $405$ at $81$ hours. The log is $324$.`,
  },
  "math-8-75": {
    0: `Checking $t(10^{6})=8+50/1000=8.05$, still above $8$. The floor is a horizontal asymptote, never a value of $t(n)$. A rushed solver who solved $8+50 n^{-\\frac{1}{2}}=8$ and cancelled $8$ to claim every $n$ would have missed that the leftover term is never zero. The opposite verdict would have needed $A=0$, a constant unit time equal to the floor already at $n=1$. The two timings refuse that: $18$ and $13$ both sit above $8$.`,
    1: `About $9.67$ sits under $10$. After $900$ cumulative units the floor is close, but the learning term is still $\\frac{5}{3}$ minutes. The opposite verdict would have needed $F>10-\\frac{5}{3}$, a floor above about $8.33$. The two timings lock $F=8$.`,
    2: `Checking the two timings: the learning term is $10$ minutes after $25$ units and $5$ after $100$, a halving on a quadrupling of $n$. The opposite verdict would have needed leftover exponent other than $-\\frac{1}{2}$ on that term. The stem supplies $-\\frac{1}{2}$.`,
    3: `A second quadrupling, from $n=100$ to $n=400$, halves the learning term from $5$ to $2.5$ and cuts the total only from $13$ to $10.5$, not to $6.5$. The floor keeps stealing from the scale factor. The opposite verdict would have needed $F=0$. Letter A already used that nonzero floor as an asymptote; this letter is the same floor, now read as a failed doubling of the whole unit time.`,
    4: `Thirty-three sits above thirty. After $4$ cumulative units the power term is still $25$ minutes on top of the $8$-minute floor. A rushed solver who used $t(1)=58$ and halved twice, as if every doubling of $n$ halved $t$, would have claimed $14.5$, under $30$, and flipped the verdict. Inverse-square-root learning halves the learning term on a quadrupling, not on a doubling, and never halves the floor. The opposite verdict would have needed $A<44$, so that $t(4)$ fell through $30$. The timings lock $A=50$.`,
  },

  "math-8-76": {
    0: `Checking $R(27)=810$ and $C(27)=810$ shows the one lockstep point, after which cost pulls ahead. Proportionality at every $x$ would have needed that meeting to be an identity, not a single root. The opposite verdict would have needed $r=1$. The eight-tonne calibration with exponent $\\frac{2}{3}$ already refuses that.`,
    1: `A rushed solver who compared $R(64)=1440$ with $4500$ as if the claim were a revenue cutoff would have missed that the letter is cost already exceeding harvest. Cost is $1920$. The opposite verdict would have needed break-even past $64$, hence $A>30\\cdot 64^{\\frac{1}{3}}=120$. The eight-tonne record locks $A=90$.`,
    2: `A finite one-tonne step agrees. From $8$ to $9$, $R(9)=90\\cdot 9^{\\frac{2}{3}}\\approx 389.7$, a rise of about $30$ from $360$. From $27$ to $28$, $R(28)=90\\cdot 28^{\\frac{2}{3}}\\approx 830$, a rise of about $20$ from $810$. Later tonnes add less. The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $30>20$.`,
    3: `Checking $x=8$ from letter E: the farm is still in surplus, $P=120$. At $x=27$ the surplus is $0$. At $x=64$ the surplus is $-480$. The sign changes once and stays negative. A quadratic cost could recross; a linear cost against a two-thirds revenue cannot. The opposite verdict would have needed revenue to have leftover exponent at least $1$.`,
    4: `One hundred and twenty sits above one hundred. Using revenue $360$ in place of profit is the mix-up. The opposite verdict would have needed $P(8)\\le 100$, hence $C(8)\\ge 260$, a feed price above $32.5$ thousand euros a tonne. The stem's cost is $30x$.`,
  },

  "math-8-77": {
    0: `Checking $f(4)=48$ and $f(16)=384$, and $384/48=8$, not $4$. The surviving $336$ euro gap is $384-48$, which already encodes the factor $8$ on a fourfold index. The opposite verdict would have needed $r=1$, hence a gap of $3A$ on that fourfold, not $56A=336$.`,
    1: `One hundred and sixty-two sits above one hundred and fifty. A rushed solver who treated $336$ as $f(9)$ would have compared $336$ to $150$ and still sat above, for the wrong level. The $336$ is $f(16)-f(4)$. The opposite verdict would have needed $A\\le 150/27\\approx 5.56$. The gap locks $A=6$.`,
    2: `The same $4^{\\frac{3}{2}}=8$ from letter A is already larger than $4$. Cost grows faster than the pallet-volume index. The opposite verdict would have needed an exponent of $1$ or less. The surviving record is a difference on a three-halves power.`,
      3: `Using the named pair $9$ to $25$ in letter E: that gap of $16$ index points adds $588$ euros, while an earlier $16$-point gap from $4$ to $20$ adds $f(20)-f(4)=6\\cdot 20^{\\frac{3}{2}}-48\\approx 536-48=488$, less than $588$. Later equal-width gaps add more. The opposite verdict would have needed $r=1$.`,
    4: `A rushed solver who used $f(25)-f(16)=750-384=366$, under $500$, would have moved the lower index from $9$ to $16$ and flipped the letter. Letter E names the move from $9$ to $25$. The opposite verdict would have needed $A<500/(125-27)\\approx 5.10$. The surviving gap locks $A=6$, and the rise is $588$.`,
  },

  "math-8-78": {
    0: `A rushed solver who swapped the variables and kept exponent $\\frac{3}{2}$ would have written $s=5 W^{\\frac{3}{2}}$ and lost the reciprocal. At $W=135$ that wrong inverse would not return $s=9$. The exponent must take the reciprocal. The opposite verdict would have needed a law that was not a pure power.`,
    1: `Sixteen sits below twenty. A rushed solver who inverted as if $r=1$ would have claimed $s=64$, past $20$, and flipped the verdict. Linear inversion overstates the admissible scale when $r>1$. The opposite verdict would have needed $A<320/20^{\\frac{3}{2}}=320/(20\\sqrt{20})\\approx 3.58$. The recorded $135$ kg locks $A=5$ and $s=16$.`,
    2: `Doubling $320$ to $640$ would raise $s$ from $16$ to $16\\cdot 2^{\\frac{2}{3}}\\approx 25.4$, not to $32$. Permitted scale grows more slowly than the permitted load. The opposite verdict would have needed inverse exponent $1$, hence original exponent $1$. The stem is $\\frac{3}{2}$.`,
    3: `A rushed solver who treated load as linear in $A$ and in $s$ would have halved $s$ with a doubled $A$, claiming $s=8$. The three-halves power shares the blow: $A$ doubles, $s^{\\frac{3}{2}}$ must halve, so $s$ falls only by $2^{-\\frac{2}{3}}\\approx 0.63$, to about $10.08$. The opposite verdict would have needed $r=1$. Checking $W$ at that $10.08$ with doubled $A$ returns the same $320$ kg cap, as it must.`,
    4: `Forty sits under fifty. A rushed solver who scaled $W(9)=135$ by $4/9$ linearly would have claimed $60$, above $50$, and flipped the verdict. Linear thinking overstates a small scale when $r>1$. The opposite verdict would have needed $A>50/8=6.25$. The recorded load locks $A=5$.`,
  },

  "math-8-79": {
      0: `Checking the recovered demand: $q(3)=4000$ becomes $q(3.75)=2560$. A $50\\%$ shortcut would have claimed $2000$ occupied spaces. The exact count is $2560$. A $1\\%$ rise is close: the shortcut predicts a $2\\%$ loss and $1.01^{-2}\\approx 1.98\\%$ is nearly that. A $25\\%$ step is not that tiny, which is why the two methods disagree here. The opposite verdict would have needed a tiny percentage change.`,
    1: `Two thousand five hundred and sixty sits above two thousand five hundred. A rushed solver who used the shortcut's $2000$ against $2500$ would have called the statement false. Letter A already refused the shortcut; this letter uses the exact $2560$. The opposite verdict would have needed $A\\cdot 3.75^{-2}\\le 2500$, hence a smaller $A$ than $36000$.`,
    2: `A rushed solver who compared $50\\%$ with $36\\%$ and called $50\\%$ close enough would have missed that the letter asks whether the shortcut overstates, which it does. The opposite verdict would have needed the exact cut to meet or exceed $50\\%$, which would have required a steeper exponent than $-2$. The stem is inverse square.`,
    3: `Checking $q(2.25)=4000\\cdot\\frac{16}{9}\\approx 7111$, a rise of about $3111$ spaces from $4000$, versus the rise-side loss of $1440$ spaces. The two percentages, $77.8\\%$ up and $36\\%$ down, are not the same. Inverse-square percentage changes are not symmetric. The opposite verdict would have needed a log-linear demand whose finite percentage moves were odd-symmetric, which a power is not.`,
    4: `Nine thousand sits above eight thousand. Cutting the tariff from $3$ to $2$ is a factor $\\frac{2}{3}$, hence a demand factor $\\frac{9}{4}$. A rushed solver who applied a $25\\%$ cut from letter D would have claimed about $7111$, still above $8000$, or a linear $33\\%$ rise to about $5333$, under $8000$, and flipped the verdict. The opposite verdict would have needed $A\\le 32000$. The desk record locks $A=36000$.`,
  },

  "math-8-80": {
    0: `Checking the weighed bell: doubling $0.5$ m to $1$ m multiplies mass by $8$, from $30$ kg to $240$ kg, which exceeds a doubling. Geometric similarity is a volume scaling, leftover exponent $3$. The opposite verdict would have needed an exponent of $1$ or less. The pattern book is a cube.`,
    1: `Eight hundred and ten sits above seven hundred. A rushed solver who tripled $30$ kg would have claimed $90$, under $700$, and flipped the verdict. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$. The opposite verdict would have needed $A\\le 700/3.375\\approx 207$. The weighing locks $A=240$.`,
    2: `The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. A rushed solver who copied the doubling from height onto mass would have called the statement true. That is exponent $1$, which letter A already refused. The opposite verdict would have needed $r=1$.`,
    3: `At $0.5$ m the quotient $M/h$ is $60$; at $1$ m it is $240$; at $1.5$ m it is $540$. Intensity rises with the square of height. A rushed solver who divided $30$ kg by $0.5$ m once and treated $60$ kg per metre as a law would have missed those later quotients. The opposite verdict would have needed leftover exponent $0$ on $M/h$, hence $r=1$.`,
    4: `Two hundred and forty sits above two hundred. A rushed solver who doubled the $0.5$ m weighing to $60$ kg would have sat under $200$ and flipped the verdict. Doubling height is not doubling mass, which is letter C. The opposite verdict would have needed $A\\le 200$. The weighing locks $A=240$.`,
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
