import fs from "fs";

const FROZEN = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];

const letters = ["A", "B", "C", "D", "E"];

function apply(rel, patches) {
  const fp = new URL(rel, import.meta.url);
  const data = JSON.parse(fs.readFileSync(fp, "utf8"));
  const orig = JSON.parse(JSON.stringify(data));
  for (const t of data) {
    const p = patches[t.id];
    if (!p) throw new Error("missing patch " + t.id);
    if (p.tacticals.length !== 5) throw new Error("need 5 letters " + t.id);
    t.solution_overview = p.overview;
    t.tactical_explanations = p.tacticals;
  }
  for (let i = 0; i < data.length; i++) {
    for (const k of FROZEN) {
      if (JSON.stringify(data[i][k]) !== JSON.stringify(orig[i][k])) {
        throw new Error("frozen " + orig[i].id + " " + k);
      }
    }
    const keys = orig[i].answer_key;
    for (let j = 0; j < 5; j++) {
      const head = data[i].tactical_explanations[j].split("\n")[0];
      const want = `**${letters[j]}.** → ${keys[j] ? "True" : "False"}`;
      if (head !== want) throw new Error("header " + orig[i].id + " " + head);
      const body = data[i].tactical_explanations[j];
      const close = keys[j] ? "so the statement is True." : "so the statement is False.";
      if (!body.includes(close)) throw new Error("closer " + orig[i].id + " " + letters[j]);
    }
    const blob =
      data[i].solution_overview + "\n" + data[i].tactical_explanations.join("\n");
    for (const ban of [
      "the overview already",
      "Part 1",
      "Part 2",
      "Part 3",
      "\u2014",
      "\u2013",
      "${",
    ]) {
      if (blob.includes(ban)) throw new Error("banned `" + ban + "` in " + orig[i].id);
    }
  }
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + "\n");
  console.log("wrote", rel, data.length);
}

const patches = {
  "math-8-91": {
    overview: `Wetland evaporation follows $E(h)=A h^{r}$ millimetres per day against humidity deficit $h>0$. Deficits of $1$ and $4$ recorded $20$ and $40$ millimetres per day, and a third reading at deficit $9$ recorded $60$.

Two unknowns need the first two readings. Their ratio cancels $A$ and isolates $r$; the unit deficit then pins $A$:

$$\\frac{40}{20}=4^{r}$$

$$A\\cdot 1^{r}=20$$

The third reading is a test of the fitted curve, not an input to it.`,
    tacticals: [
      `**A.** → True

The first two readings give $4^{r}=2$. Because $4^{\\frac{1}{2}}=2$,

$$r=\\frac{1}{2}$$

One half sits below one, so each extra unit of deficit adds less evaporation than the unit before it. The third reading $E(9)=60$ sits on the same square-root law, $20\\cdot 3=60$, which is a consistency check, so the statement is True.`,
      `**B.** → False

Doubling the deficit would double evaporation only if $r=1$. The scale factor is

$$2^{\\frac{1}{2}}\\approx 1.41$$

not $2$. Evaporation rises, but not in lockstep with humidity. A square-root humidity law will not keep evaporation in step with the deficit, so the statement is False.`,
      `**C.** → True

From $r=\\frac{1}{2}$ and $A=20$, doubling $E(4)=40$ means $20\\sqrt{h}=80$, so

$$\\sqrt{h}=4$$

$$h=16$$

Sixteen is four times four, not twice four. To double a square-root output you quadruple the input, so the statement is True.`,
      `**D.** → False

The leftover slope of $E(h)=20\\sqrt{h}$ is

$$E'(h)=10 h^{-\\frac{1}{2}}$$

After a deficit of one that is $10$. After a deficit of four it is $5$. An extra unit adds less after four, not more. A square-root evaporative law flattens, so the statement is False.`,
      `**E.** → True

At deficit $25$, $\\sqrt{25}=5$:

$$E(25)=20\\cdot 5=100$$

One hundred sits above $90$. The third logged point at deficit $9$ is $60$; this letter is a further perfect square on the same curve, so the statement is True.`,
    ],
  },
  "math-8-92": {
    overview: `Annual cooling benefit follows $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep follows $C(n)=k n$ thousand euros, for $n>0$ thousand trees planted. Raising the planting from $4$ thousand trees to $9$ thousand increased cooling benefit by $12$ thousand euros. At $9$ thousand trees, upkeep was $18$ thousand euros. Net benefit is $N(n)=B(n)-C(n)$.

The benefit difference isolates $A$. The upkeep level isolates $k$:

$$A\\bigl(9^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=12$$

$$9k=18$$

Net is a square root minus a line, so it is not a single power of $n$.`,
    tacticals: [
      `**A.** → True

The benefit gap is $A(3-2)=12$, so $A=12$. The upkeep level is $k=2$. Net benefit is then

$$N(n)=12\\sqrt{n}-2n$$

A leftover second exponent keeps the net from being a power function of the planting. Upkeep being linear is exactly why those two powers cannot be absorbed into one monomial, so the statement is True.`,
      `**B.** → True

At nine thousand trees, benefit $12\\cdot 3=36$ minus upkeep $18$ is net

$$N(9)=18$$

Eighteen sits above $15$. Using benefit in place of net would have claimed $36$ and overshot, so the statement is True.`,
      `**C.** → False

The schedules meet when $12\\sqrt{n}=2n$, so $\\sqrt{n}=6$ and $n=36$. Past that planting the ratio of benefit to upkeep keeps falling, because $\\sqrt{n}$ cannot keep pace with $n$. Planting more trees after upkeep overtakes cooling only deepens the loss. The net stays negative, so the statement is False.`,
      `**D.** → True

The leftover slope of the net is

$$N'(n)=6 n^{-\\frac{1}{2}}-2$$

At four thousand trees that is $1$. At nine thousand trees it is $0$. An extra thousand trees still adds at four thousand and adds nothing at nine thousand. Nine thousand is the peak, not a point where later trees help more, so the statement is True.`,
      `**E.** → False

At four thousand trees, benefit $24$ minus upkeep $8$ is net

$$N(4)=16$$

which is not more than $20$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep. Mixing $B$ with $N$ is the mix-up, so the statement is False.`,
    ],
  },
  "math-8-93": {
    overview: `Weekly pamphlet demand follows $q(p)=A p^{-2}$ packs per week for price $p>0$ euros. At a price of $5$ euros the kiosk sold $80$ packs.

The exponent is given, so one priced observation fixes $A$:

$$A\\cdot 5^{-2}=80$$

Inversion uses the reciprocal exponent. Revenue is $R=pq$, which raises the exponent by one.`,
    tacticals: [
      `**A.** → True

A nonzero power inverts to another power. From $q=A p^{-2}$,

$$p=A^{\\frac{1}{2}} q^{-\\frac{1}{2}}$$

The new exponent is the reciprocal of $-2$. Price needed for a given weekly demand is still a monomial in $q$. Falling demand does not introduce a logarithm, so the statement is True.`,
      `**B.** → False

Doubling the five-euro price would halve demand only if the exponent were $-1$. With $-2$ the factor is

$$2^{-2}=\\frac{1}{4}$$

so $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

From $A/25=80$, the coefficient is $A=2000$. Ten euros is a doubling of the logged $5$, so inverse-square demand is a quarter of $80$:

$$q(10)=20$$

Twenty packs already sit under twenty-five, so the statement is True.`,
      `**D.** → True

Revenue is $R(p)=\\frac{2000}{p}$, a negative leftover power, so the till shrinks as the price rises. At $5$ euros the take is $400$; at $10$ euros it is $200$. Inverse-square demand is elastic enough that a price rise cuts $pq$, so the statement is True.`,
      `**E.** → False

A target of $125$ packs inverts $2000/p^{2}=125$:

$$p^{2}=16$$

$$p=4$$

which sits below $5$, not above it. More packs require a lower price along this curve. The unique positive price that moves $125$ packs is four euros, so the statement is False.`,
    ],
  },
  "math-8-94": {
    overview: `Weekly bike-share day-pass sales follow $q(p)=A p^{-\\frac{3}{2}}$ when the pass price is $p>0$ euros. A pilot at $16$ euros sold $50$ passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index $8$ the posted price is $16$ euros.

The pilot fixes $A$. The indexed price at $s=8$ fixes $B$:

$$A\\cdot 16^{-\\frac{3}{2}}=50$$

$$B\\cdot 8^{\\frac{2}{3}}=16$$

Composition multiplies the exponents: $-\\frac{3}{2}\\cdot\\frac{2}{3}=-1$.`,
    tacticals: [
      `**A.** → True

Demand's exponent $-\\frac{3}{2}$ times the indexation exponent $\\frac{2}{3}$ is $-1$. The composition is a monomial $C s^{-1}$, a power of $s$. Stopping after $p(s)$ would have left exponent $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → False

Tripling the subsidy index multiplies composed demand by

$$3^{-1}=\\frac{1}{3}$$

not by $3$. Demand falls to a third rather than tripling. The indexation $p\\propto s^{\\frac{2}{3}}$ raises the pass price as $s$ grows, so the composed map is inverse, not increasing, so the statement is False.`,
      `**C.** → True

Subsidy index $8$ was calibrated to the $16$-euro, $50$-pass reading, so composed demand at $s=8$ is the pilot itself:

$$q\\bigl(p(8)\\bigr)=50$$

Fifty passes already sit above forty, so the statement is True.`,
      `**D.** → False

From $A\\cdot 16^{-\\frac{3}{2}}=50$ and $B\\cdot 4=16$, the composition collapses to $q(p(s))=\\frac{400}{s}$. For every $k>1$ the factor $k^{-1}<1$. Raising the subsidy index lowers composed demand. "Subsidy up, sales up" ignores that indexation, so the statement is False.`,
      `**E.** → True

At subsidy index $27$, composed demand is

$$\\frac{400}{27}\\approx 14.81$$

which sits under $16$. From the pilot, $\\frac{27}{8}$ times the index multiplies demand by $\\frac{8}{27}$: $50\\cdot\\frac{8}{27}=\\frac{400}{27}$. Fourteen and a bit stays under sixteen, so the statement is True.`,
    ],
  },
  "math-8-95": {
    overview: `A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$. A $10$-thousand-loaf run on line 1 scored $100$, and an $8$-thousand-loaf run on line 2 scored $16$.

Each logged run fixes one coefficient:

$$a\\cdot 10^{2}=100$$

$$b\\cdot 8^{2}=16$$

Equal marginal costs split the overnight order. A corner that dumps everything on the cheaper line is a different plan.`,
    tacticals: [
      `**A.** → False

The two logs give $a=1$ and $b=\\frac{1}{4}$. Equal marginal costs $2q_{1}=\\frac{1}{2}q_{2}$ force $q_{2}=4q_{1}$. With $q_{1}+q_{2}=30$ that split is $6$ and $24$, costing

$$6^{2}+\\frac{24^{2}}{4}=36+144=180$$

All on line 2 costs $225$. Spreading the load still beats concentrating, so the statement is False.`,
      `**B.** → True

All thirty thousand loaves on line 2 score

$$C_{2}(30)=\\frac{1}{4}\\cdot 900=225$$

which sits above $200$. Plant 2 is cheaper per squared unit, but thirty squared is still $900$. The corner already clears two hundred, so the statement is True.`,
      `**C.** → True

Equal marginal costs force $q_{2}=4q_{1}$, so the cheaper line takes the larger share: $24$ against $6$. Twenty-four thousand loaves sit on line 2. A cheaper coefficient should carry more volume, not less, when both costs are squares, so the statement is True.`,
      `**D.** → False

Line 1's average cost index is $C_{1}(q)/q=q$ itself, which rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$. Extra loaves on line 1 are dearer per loaf, not cheaper, so the statement is False.`,
      `**E.** → True

The $6$-and-$24$ split scores

$$36+144=180$$

which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$. Spreading at equal marginals beats the $225$ corner, so the statement is True.`,
    ],
  },
  "math-8-96": {
    overview: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At $10$ euros the desk sold $40$ tickets.

The exponent is given, so the desk record fixes $A$:

$$A\\cdot 10^{-2}=40$$

For a price factor $k$, the constant-elasticity shortcut returns $-2(k-1)$ and the exact rule returns $k^{-2}-1$. Revenue is $R=pq$.`,
    tacticals: [
      `**A.** → True

For a power $q=A p^{r}$ the point elasticity is the exponent itself, $\\varepsilon=r=-2$, independent of $p$. Demand is equally elastic at every price $p>0$. The usual mix-up is treating elasticity as a local slope that would change along the curve; for a monomial it does not, so the statement is True.`,
      `**B.** → True

From $A/100=40$, the coefficient is $A=4000$. At $12$ euros:

$$q(12)=\\frac{4000}{144}=\\frac{250}{9}\\approx 27.78$$

The exact cut from $40$ is about $12.22$ tickets, which sits above $10$. A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot, so the statement is True.`,
      `**C.** → True

The shortcut predicts $-2\\times 10\\%=-20\\%$. The exact factor is

$$1.1^{-2}=\\frac{1}{1.21}\\approx 0.826$$

a cut of about $17.36\\%$. The shortcut overstates the drop. Linearizing a power at a $10\\%$ step is still a little coarse, so the statement is True.`,
      `**D.** → False

Revenue is $R(p)=\\frac{4000}{p}$, which falls toward $0$ as $p$ grows. Raising the price without bound drives the till toward zero rather than a maximum. Inverse-square demand is elastic: a price rise cuts $pq$. There is no interior maximum on $p>0$, so the statement is False.`,
      `**E.** → True

Halving the price quadruples inverse-square demand:

$$q(5)=40\\cdot 4=160$$

which sits above $150$. Inverse-linear thinking would have claimed $80$ and missed the letter, so the statement is True.`,
    ],
  },
  "math-8-97": {
    overview: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting $4$ delivered $64$ trays an hour.

The exponent is given, so the recorded run fixes $A$:

$$A\\cdot 4^{\\frac{3}{2}}=64$$

Levels depend on $A$. Scale factors cancel it:

$$\\frac{T(ke)}{T(e)}=k^{\\frac{3}{2}}$$`,
    tacticals: [
      `**A.** → True

The exponent $\\frac{3}{2}$ is larger than one, so each extra unit of belt setting adds more trays than the unit before it. Three halves is above one, so throughput outruns the belt. A proportional lehr would have carried exponent $1$, so the statement is True.`,
      `**B.** → True

From $4^{\\frac{3}{2}}=8$, the recorded run gives $A=8$, so $T(e)=8 e^{\\frac{3}{2}}$. The leftover slope is

$$T'(e)=12\\sqrt{e}$$

After setting four that is $24$. After setting nine it is $36$. Because $r>1$ the slope rises. An extra unit adds more trays after nine than after four, so the statement is True.`,
      `**C.** → True

At belt setting $9$, nine contributes $3^{3}=27$:

$$T(9)=8\\cdot 27=216$$

Two hundred and sixteen sits above $200$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess from $T(4)=64$, so the statement is True.`,
      `**D.** → False

A $25\\%$ larger coefficient appears once above and once below in the ratio $\\frac{T(2e)}{T(e)}$, so it cancels. The doubling factor stays

$$2^{\\frac{3}{2}}$$

Levels move by $25\\%$ and doubling ratios do not, so the statement is False.`,
      `**E.** → True

Levels do scale with $A$. The calibrated $T(9)=216$ becomes

$$1.25\\cdot 216=270$$

under a $25\\%$ larger coefficient, which sits above $250$. The factor $1.25$ survives on levels even though it cancels in every ratio, so the statement is True.`,
    ],
  },
};

apply("./91_97.json", patches);
