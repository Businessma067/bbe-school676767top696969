import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words, spliceBeforeCloser } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extras = {
  "math-8-91": {
    0: [
      "This letter is an exponent ranking, not a new humidity reading.",
      "The recovered leftover exponent is one half. One half sits below one, so evaporation lags the deficit.",
      "A rushed solver who saw $E(4)=40$ as twice $E(1)=20$ and inferred $r=1$ would have mixed a convenient pair of readings with lockstep growth. Quadrupling the deficit only doubled evaporation.",
      "The opposite verdict would have needed leftover exponent at least $1$. The first two readings refuse that.",
    ].join("\n\n"),
    1: [
      "This is a scale claim on humidity, not a level at a named deficit.",
      "The recovered scale factor for a doubling is $\\sqrt{2}$, about $1.41$, not $2$. Evaporation rises, but not in lockstep.",
      "Checking $E(8)=20\\sqrt{8}\\approx 56.6$, which is not $80$. Doubling $h=4$ does not double $E(4)$.",
      "The opposite verdict would have needed leftover exponent $1$. The first two readings lock one half.",
    ].join("\n\n"),
    2: [
      "This letter inverts the wetland law: it asks how far humidity must move to double a named evaporation, not what evaporation a named humidity produces.",
      "The recovered inverse on $E=80$ is humidity $16$. Sixteen is four times the logged deficit $4$, not twice $4$.",
      "**1.** Checking a nearby output: to raise $E(4)=40$ only to $60$, the third logged reading, humidity must sit at $9$. That is already more than a doubling of $4$. Doubling the output to $80$ sits still farther out, at $16$.",
      "**2.** A rushed solver who used leftover exponent $1$ would have named $h=8$ and called \"more than a doubling\" false. That solver is reading a proportional law the stem does not have.",
      "**3.** Another mix-up is scaling the third reading: $E(9)=60$ to $120$ would need $h=36$, again a fourfold humidity move from $9$. Every doubling of a square-root output is a fourfold input. The claim's forty-millimetre reading is one instance of that rule.",
      "**4.** The opposite verdict would have needed leftover exponent at least $1$, so that doubling output needed at most a doubling of humidity. The first two readings lock one half. Changing $A$ scales every evaporation by the same factor and cannot move the humidity ratio $16/4=4$.",
    ].join("\n\n"),
    3: [
      "This letter compares leftover slopes at two named deficits, not the levels $E(1)=20$ and $E(4)=40$.",
      "The recovered slope falls from $10$ at deficit $1$ to $5$ at deficit $4$. An extra unit adds less after four, not more.",
      "**1.** Checking one more pair of finite steps: from $9$ to $10$, evaporation rises from $60$ to $20\\sqrt{10}\\approx 63.2$, a gain of about $3.2$. That is smaller still than the $4.7$ gain from $4$ to $5$. The flattening continues past the third logged point.",
      "**2.** A rushed solver who used the secant from $1$ to $9$, namely $(60-20)/8=5$, as if it were the extra-unit slope at four would have understated $E'(4)$ and still sat below $E'(1)=10$. The ranking survives a coarser slope.",
      "**3.** The opposite verdict would have needed leftover exponent above $1$, so that $E'$ rose. A cube or a square-root-plus-one would have done that. The stem is a square root. Changing $A$ scales both $10$ and $5$ and cannot reverse the ranking.",
    ].join("\n\n"),
    4: [
      "This is a level at deficit $25$, a further perfect square on the recovered curve.",
      "The recovered evaporation is $100$, which sits above $90$. The third logged point $E(9)=60$ is a different square.",
      "A rushed solver who used $E(4)=40$ linearly to $25$ would have claimed $250$ and still sat above $90$, for the wrong shape.",
      "The opposite verdict would have needed $A$ at most $18$. The unit deficit locks $A=20$.",
    ].join("\n\n"),
  },
  "math-8-92": {
    1: [
      "This is a net-benefit level at nine thousand trees, not a cooling-only reading.",
      "The recovered net is $18$, which sits above $15$. Cooling alone is $36$; upkeep alone is $18$.",
      "A rushed solver who used $C(9)=18$ against $15$ would have mixed upkeep with net and called a tie or a miss.",
      "The opposite verdict would have needed a larger $k$. The upkeep record locks $k=2$.",
    ].join("\n\n"),
    2: [
      "This letter asks whether the net can turn positive again after upkeep overtakes cooling, not where the peak of the net sits.",
      "The recovered crossing is $n=36$, where both schedules equal $72$ and the net is $0$. Past that planting, linear upkeep outruns the square root for good.",
      "**1.** Checking $n=25$, still before the crossing: benefit $60$ minus upkeep $50$ is net $10$, still positive. Checking $n=100$: benefit $120$ minus upkeep $200$ is net $-80$. The loss has grown from the $-32$ already seen at $n=64$.",
      "**2.** A rushed solver who set $N'(n)=0$ and read $n=9$ as a later recovery would have mixed the interior peak with a second root of $N$. The peak is a surplus of $18$. The later root is a crossing through zero at $n=36$, after which $N$ stays negative.",
      "**3.** The opposite verdict would have needed cooling leftover exponent at least $1$, so that $B$ could recross linear upkeep. The stem is a square root. Changing $A$ moves the crossing but cannot create a second crossing once $r<1$.",
    ].join("\n\n"),
    3: [
      "This letter compares leftover slopes of the net at four thousand and nine thousand trees.",
      "The recovered $N'$ is $1$ at four thousand and $0$ at nine thousand. An extra thousand trees still adds at four thousand and adds nothing at the peak.",
      "**1.** Checking $N(1)=12-2=10$ and $N(0^{+})$ near $0$: the first thousand trees add about $10$. That is steeper than the $0.83$ already computed from $n=4$ to $n=5$, and far steeper than the near-zero step at $n=9$. The extra thousand is most valuable early.",
      "**2.** A rushed solver who compared only $N(9)=18>N(4)=16$ would have called later trees more helpful. That mixes a higher level with a steeper slope. The level is higher at nine; the slope is zero.",
      "**3.** The opposite verdict would have needed $N'$ still rising at nine thousand. Square-root benefit minus linear upkeep has $N'$ falling through zero at $n=9$. Changing $k$ moves the peak but cannot make $N'(9)>N'(4)$ on this shape.",
    ].join("\n\n"),
    4: [
      "This is a net-benefit level at four thousand trees, not a cooling-only reading.",
      "The recovered net is $16$, which is not more than $20$. Cooling at four thousand is $24$; that $24$ is the mix-up.",
      "A rushed solver who used $B(4)=24$ against $20$ would have called the claim true.",
      "The opposite verdict would have needed a smaller $k$ or a larger $A$. The two records lock $N(4)=16$.",
    ].join("\n\n"),
  },
  "math-8-93": {
    0: [
      "This letter asks whether the inverse demand map is still a power, not what price a named pack count requires.",
      "The recovered inverse is a monomial in $q$ with leftover exponent $-\\frac{1}{2}$. A nonzero power inverts to another power.",
      "A rushed solver who saw $q\\propto p^{-2}$ and guessed that inversion would introduce a logarithm would have mixed a power with an exponential.",
      "The opposite verdict would have needed a decaying exponential in price. The stem is a power.",
    ].join("\n\n"),
    1: [
      "This is a scale claim on the five-euro price, not a new pack count against a cutoff.",
      "The recovered factor is $2^{-2}=\\frac{1}{4}$, so demand falls to $20$ packs, not to $40$.",
      "**1.** Checking the till on the same doubling: $R(5)=400$ and $R(10)=200$. Revenue halves. That leftover $p^{-1}$ on revenue is not a demand-halving story.",
      "**2.** A rushed solver who used leftover exponent $-1$ on demand would have named $40$ packs and called the claim true. Inverse-linear thinking is the mismatch.",
      "**3.** The opposite verdict would have needed $r=-1$. Changing $A$ scales both $q(5)$ and $q(10)$ and cannot turn a quarter into a half. Letter C then reads $q(10)=20$ against a $25$-pack line; this letter is the doubling claim sitting next to that level.",
    ].join("\n\n"),
    2: [
      "This is a level at $10$ euros, a doubling of the logged five-euro price.",
      "The recovered demand is $20$ packs, which sits under $25$. Inverse-linear thinking would have named $40$ and sat above $25$.",
      "A rushed solver who halved $80$ would have flipped the verdict. The stem's leftover exponent is $-2$, not $-1$.",
      "The opposite verdict would have needed $A$ above $2500$. The logged pair locks $A=2000$.",
    ].join("\n\n"),
    3: [
      "This letter asks the sign of leftover revenue as price rises, not a named till against a cutoff.",
      "The recovered $R(p)=2000/p$ is a negative leftover power, so the till shrinks. At $5$ euros the take is $400$; at $10$ euros it is $200$.",
      "A rushed solver who remembered \"raise price, raise revenue\" from inelastic demand would have flipped the sign.",
      "The opposite verdict would have needed demand leftover exponent greater than $-1$. The stem is $p^{-2}$.",
    ].join("\n\n"),
    4: [
      "This letter inverts a pack target, not a price level.",
      "The recovered price for $125$ packs is $4$ euros, which sits below $5$, not above it. More packs require a cheaper posted price along this curve.",
      "**1.** Checking $q(5)=80<125$ already shows that five euros cannot move $125$ packs. The $125$ target must sit on a cheaper price.",
      "**2.** A rushed solver who raised the price to move more packs would have called the claim true. Along this curve a higher price cuts quantity.",
      "**3.** The opposite verdict would have needed a target below $80$ packs, which would have sat above $5$ euros. The named target is $125$. Changing $A$ scales the inverted price by a square root and would have needed $A>125\\cdot 25=3125$ to put $125$ packs above $5$ euros. The logged pair locks $A=2000$.",
    ].join("\n\n"),
  },
  "math-8-94": {
    0: [
      "This letter asks whether the composed map is still a monomial in the subsidy index.",
      "The recovered composition is $400/s$, leftover exponent $-1$, a power of $s$. Both stages were powers, so the composite is a power.",
      "A rushed solver who stopped after $p(s)$ would have left leftover exponent $\\frac{2}{3}$ and still have a power, just the wrong one.",
      "The opposite verdict would have needed a stage that was not a power. Both the demand curve and the policy map are monomials.",
    ].join("\n\n"),
    1: [
      "This is a scale claim on the subsidy index, not a level at a named $s$.",
      "The recovered composed exponent is $-1$, so tripling $s$ multiplies demand by $\\frac{1}{3}$, not by $3$.",
      "**1.** Checking $s=8$ at $50$ passes against $s=24$ at $400/24\\approx 16.7$: the passes fell to a third. The posted price rose from $16$ to about $33.3$, which is why demand fell.",
      "**2.** A rushed solver who read \"subsidy index\" as a discount would have expected more rides and called the claim true. This indexation raises the posted price as $s$ grows.",
      "**3.** The opposite verdict would have needed composed leftover exponent positive. The two stages multiply to $-1$. Changing the pilot $50$ scales every composed level and cannot turn a third into a triple.",
    ].join("\n\n"),
    2: [
      "This is a composed-demand level at the calibrated index $s=8$.",
      "The recovered demand is the pilot itself, $50$ passes, already above $40$. Index $8$ is the logged pair, not a new evaluation.",
      "A rushed solver who recomputed $q(p(8))$ with a wrong $B$ would have missed that $s=8$ is already $50$.",
      "The opposite verdict would have needed the pilot below $40$ passes. The stem is $50$.",
    ].join("\n\n"),
    3: [
      "This letter asks the sign of composed demand as the subsidy index rises, not a named level.",
      "The recovered map $400/s$ falls for every rise in $s$. Doubling $s$ from $8$ to $16$ cuts passes from $50$ to $25$.",
      "**1.** Checking $s=4$, a smaller index than the pilot: composed demand is $100$ passes, above the pilot. Smaller $s$ means a cheaper posted price and more rides. Raising $s$ is the opposite move.",
      "**2.** A rushed solver who inverted the demand stage only, holding $p$ fixed, would have claimed sales independent of $s$ and missed the policy map.",
      "**3.** The opposite verdict would have needed composed leftover exponent positive. The stem's two exponents multiply to $-1$. \"Subsidy up, sales up\" ignores that this indexation raises the pass price.",
    ].join("\n\n"),
    4: [
      "This is a composed-demand level at subsidy index $27$.",
      "The recovered demand is $400/27\\approx 14.81$, which sits under $16$. From the pilot, $50\\cdot 8/27=400/27$.",
      "A rushed solver who used $q(p(8))=50$ against $16$ would have named the pilot, not $s=27$.",
      "The opposite verdict would have needed a larger composed coefficient. The two calibrations lock $400/s$.",
    ].join("\n\n"),
  },
  "math-8-95": {
    0: [
      "This letter asks whether a corner on the cheaper line beats an interior split, not what that split costs against $200$.",
      "The recovered equal-marginal split is $6$ and $24$, costing $180$. All on line 2, the cheaper line, costs $225$. Spreading still wins.",
      "**1.** All on line 1 costs $900$. The cheaper-line corner is already $45$ above the interior split. Quadratic cost punishes concentration: thirty squared is $900$, and a quarter of that is still $225$.",
      "**2.** Checking $10$ and $20$: cost is $100+100=200$, already $20$ above $180$. Checking $4$ and $26$: cost is $16+169=185$. Neighbours of $6$ and $24$ sit above $180$.",
      "**3.** A rushed solver who saw $b<a$ and sent every loaf to line 2 would have called the claim true. Linear costs would have made that corner optimal. Both stem costs are squares, so the interior split wins.",
      "**4.** The opposite verdict would have needed linear costs, or a cheaper-line coefficient so small that $C_{2}(30)$ fell through $180$. At $b=\\frac{1}{4}$, the corner is locked at $225$.",
    ].join("\n\n"),
    1: [
      "This is a corner level: all thirty thousand loaves on line 2.",
      "The recovered score is $225$, which sits above $200$. Thirty squared is $900$, and a quarter of that is $225$.",
      "A rushed solver who scaled $C_{2}(8)=16$ linearly to $30$ would have claimed $60$ and missed the letter.",
      "The opposite verdict would have needed $b$ at most $200/900$. The eight-thousand run locks $b=\\frac{1}{4}$.",
    ].join("\n\n"),
    2: [
      "This letter asks which line takes the larger share at the cheapest split, not what that split costs.",
      "Equal marginals force $q_{2}=4q_{1}$, so line 2 takes $24$ against line 1's $6$. The cheaper coefficient carries more volume.",
      "**1.** Checking the marginals at $6$ and $24$: both equal $12$. At an even $15$ and $15$, the marginals are $30$ and $7.5$, so more loaves should still move to line 2.",
      "**2.** A rushed solver who sent the larger share to line 1, because the logged run there scored $100$ against $16$, would have mixed a larger logged batch with a cheaper coefficient. After recovering $a=1$ and $b=\\frac{1}{4}$, line 2 is cheaper.",
      "**3.** The opposite verdict would have needed $b>a$. The stem has $b=\\frac{1}{4}<1$. Changing the overnight total scales both shares in the same $1:4$ ratio and cannot give line 1 the larger share.",
    ].join("\n\n"),
    3: [
      "This letter asks whether line 1's average cost falls as its own output rises.",
      "The recovered average is $C_{1}(q)/q=q$, which rises. A falling average would have needed leftover exponent below $1$.",
      "Checking $C_{1}(5)/5=5$ against $C_{1}(10)/10=10$: the average doubled when output doubled.",
      "The opposite verdict would have needed leftover exponent below $1$. Line 1's leftover exponent is $2$.",
    ].join("\n\n"),
    4: [
      "This is a level of the equal-marginal split against a $200$ line.",
      "The recovered score is $180$, which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$.",
      "A rushed solver who added $6+24=30$ as if the cost were the split itself would have sat under $200$ for the wrong reason.",
      "The opposite verdict would have needed a split cost of $200$ or more. Equal marginals lock $180$.",
    ].join("\n\n"),
  },
  "math-8-96": {
    1: [
      "This is a finite price step from $10$ to $12$ euros, not a point-elasticity slogan.",
      "The recovered cut is about $12.22$ tickets, from $40$ down to $250/9$, which sits above $10$.",
      "A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot the $10$-ticket line.",
      "The opposite verdict would have needed a milder leftover exponent or a smaller price step. The desk record locks $A=4000$.",
    ].join("\n\n"),
    2: [
      "This letter compares the constant-elasticity shortcut with the exact power factor on a $10\\%$ rise.",
      "The shortcut claims a $20\\%$ drop. The exact factor $1.1^{-2}\\approx 0.826$ is about a $17.36\\%$ drop. The shortcut overstates.",
      "**1.** In tickets, the shortcut on $40$ claims an $8$-ticket drop to $32$. The exact $q(11)=4000/121\\approx 33.06$, a drop of about $6.94$. The overstatement is about one ticket on this step, and it is still an overstatement.",
      "**2.** A rushed solver who treated the shortcut as exact would have called the claim false. For $r=-2$ and $k>1$, the exact factor $k^{r}$ sits above the linear tangent $1+r(k-1)$, so the shortcut overstates every finite rise on this curve.",
      "**3.** Checking a $5\\%$ rise: the shortcut claims $-10\\%$. The exact factor is $1.05^{-2}\\approx 0.907$, a cut of about $9.3\\%$. The overstatement shrinks with the step but does not change sign. Letter B's $10$-to-$12$ move is a $20\\%$ step, where the gap is larger.",
      "**4.** The opposite verdict would have needed the exact percent drop to meet or exceed $20\\%$. That cannot happen on a convex power with $r=-2$ and $k>1$. The desk coefficient cancels in every percent comparison.",
    ].join("\n\n"),
    3: [
      "This letter asks whether an unbounded price rise can maximise weekly revenue.",
      "The recovered $R(p)=4000/p$ falls toward $0$ as $p$ grows. There is no interior maximum on $p>0$.",
      "**1.** Checking the till: $R(10)=400$, $R(12)\\approx 333$, $R(20)=200$, $R(40)=100$. Each rise shrinks the take. Cutting the price to $5$ euros raises the till to $800$.",
      "**2.** A rushed solver who remembered that unit-elastic demand holds revenue constant would have expected a flat till. The stem is $p^{-2}$, leftover $p^{-1}$ on revenue, strictly decreasing.",
      "**3.** The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand leftover exponent greater than $-1$. Then a price rise would have grown $pq$. The stem's $-2$ is the other side of that gate. Raising the price without bound drives the till toward zero, not toward a maximum.",
    ].join("\n\n"),
    4: [
      "This is a level at $5$ euros, a halving of the desk price.",
      "The recovered demand is $160$ tickets, which sits above $150$. Halving an inverse-square price quadruples quantity.",
      "Inverse-linear thinking would have claimed $80$ and missed the letter.",
      "The opposite verdict would have needed $A$ at most $3750$. The desk record locks $A=4000$.",
    ].join("\n\n"),
  },
  "math-8-97": {
    0: [
      "This letter is an exponent ranking, not a new belt-setting level.",
      "The recovered leftover exponent is $3/2$, which sits above one, so throughput outruns the belt.",
      "Checking $T(4)=64$ against $T(9)=216$: the belt rose by $5/4$ while trays rose by $3.375$, faster than the belt.",
      "The opposite verdict would have needed leftover exponent at most $1$. The stem prints $3/2$.",
    ].join("\n\n"),
    1: [
      "This letter compares leftover slopes at settings four and nine, not the levels $64$ and $216$.",
      "The recovered $T'$ is $24$ after four and $36$ after nine. An extra unit adds more trays after nine.",
      "A rushed solver who compared only $T(9)>T(4)$ would have mixed a higher level with a steeper slope.",
      "The opposite verdict would have needed leftover exponent below $1$. The stem is $3/2$.",
    ].join("\n\n"),
    2: [
      "This is a level at belt setting $9$.",
      "The recovered throughput is $216$ trays an hour, which sits above $200$. A linear rule through the origin from $T(4)=64$ would have named $144$ and missed the letter.",
      "A rushed solver who used $4^{3/2}=8$ as $T(9)$ would have sat far under $200$.",
      "The opposite verdict would have needed $A$ at most $200/27$. The recorded run locks $A=8$.",
    ].join("\n\n"),
    3: [
      "This letter asks whether a $25\\%$ larger coefficient changes a scale factor, not a level.",
      "The recovered doubling factor $2^{3/2}$ is independent of $A$. The $25\\%$ appears once above and once below in $T(2e)/T(e)$ and cancels.",
      "**1.** Checking the numbers: $2^{3/2}=2\\sqrt{2}\\approx 2.828$ before and after $A$ becomes $10$. The new rule $T_{\\mathrm{new}}(e)=10 e^{3/2}$ has the same doubling ratio.",
      "**2.** A rushed solver who scaled $2.828$ by $1.25$ to about $3.535$ would have called the claim true. That mixes a level scale with a ratio. Letter E is where the $25\\%$ survives, because E asks a level.",
      "**3.** Checking $T(9)/T(4)=216/64=3.375$. Raising $A$ by $25\\%$ raises both $216$ and $64$ by $25\\%$ and leaves $3.375$ untouched. Every ratio of two throughputs is independent of $A$.",
      "**4.** The opposite verdict would have needed a rule that was not homogeneous, such as a leftover constant added to $A e^{3/2}$. The stem has no such constant. Levels move by $25\\%$; doubling ratios do not.",
    ].join("\n\n"),
    4: [
      "This letter asks a level under a $25\\%$ larger coefficient, not a scale factor.",
      "The recovered $T(9)=216$ becomes $270$, which sits above $250$. The factor $1.25$ survives on levels.",
      "**1.** Checking the new rule at the recorded run: $T_{\\mathrm{new}}(4)=80$. Then $T_{\\mathrm{new}}(9)=10\\cdot 27=270$ still follows. The $25\\%$ lifts every level.",
      "**2.** A rushed solver who reused letter D's cancelled ratio and left $T(9)$ at $216$ would have sat under $250$ and flipped the verdict. Letter D is a scale question; this letter is a level.",
      "**3.** The opposite verdict would have needed $1.25\\cdot 216$ at most $250$, hence a smaller calibrated $T(9)$. The recorded run locks $216$, and $270$ already clears $250$ by $20$ trays. Checking $T_{\\mathrm{new}}(16)=640$ shows the same $25\\%$ lift at a neighbouring setting. Ratios stay put; levels move.",
    ].join("\n\n"),
  },
};

const fp = path.join(__dirname, "91_97.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
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
  console.log(t.id, t.tactical_explanations.map(words).join(" "));
}
