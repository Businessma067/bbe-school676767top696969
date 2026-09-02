import fs from "node:fs";

function insertBeforeCloser(expl, extra) {
  const trueC = "so the statement is True.";
  const falseC = "so the statement is False.";
  const close = expl.trimEnd().endsWith(trueC) ? trueC : falseC;
  const idx = expl.lastIndexOf(close);
  if (idx < 0) throw new Error("no closer");
  const head = expl.slice(0, idx).replace(/\n+$/, "\n\n");
  return head + extra.trim() + "\n\n" + expl.slice(idx);
}

const extras = {};
function add(id, letter, text) {
  extras[`${id}-${letter}`] = text.trim();
}

add(
  "math-11-60",
  "D",
  `The extra against the recovered second payment is

$$26{,}000 - 24{,}713.09 = 1{,}286.91$$

so the wording overstates the ten-year PDV by about $\\$1,287$. That gap is this letter's own comparison. It is not a rounding of $\\$24,713$. Letter C already locked the five-year addend. This letter locks the ten-year addend so letter E cannot honestly total $\\$47,500$.`
);

add(
  "math-11-63",
  "E",
  `The stem's sinking fund currently decays at $k = 0.90$, which is why letter B recovered a finite pile of $\\$8,000$. Raising the quotient through $1$ changes the model, not just the number on the page.

A 10% growing deposit stream starts at $\\$800$ and then $\\$880$, $\\$968$, and so on. Partial sums after $n$ years are

$$s_n = 800\\frac{1.10^n-1}{0.10}$$

which grows without bound as $n$ grows. That is what divergence means here: there is no ceiling analogous to the recovered $\\$8,000$.

**3.** The illegal plug-in $800/(1-1.10) = -8{,}000$ is a sign that the formula was used outside $|k|<1$. A negative "lifetime total" of positive deposits is not a present value and not a sum.

Letter D's 65% share used the recovered $\\$8,000$ as a denominator. Under $k = 1.10$ that denominator does not exist, so no analogous share can be formed.

What would have to change for the opposite verdict is $|k|<1$. At $k = 0.90$ the series converges. At $k = 1.10$ it does not. The recovered test is $|1.10| \\ge 1$.

A planner who reported $-\\$8,000$ as "the infinite total at 10% growth" would be describing an algebraic extension, not a cash pile. Growing deposits of $\\$800$, $\\$880$, $\\$968$ never net to a negative number. They run to infinity.

The recovered $k = 1.10$ path has no finite infinite-sum.`
);

add(
  "math-11-66",
  "C",
  `The extra against the recovered four-term net is

$$3{,}000 - 2{,}500 = 500$$

which is exactly the dropped last reversal. Four adjustments include that $-\\$500$. Three adjustments do not. This letter is $s_4$, not $s_3$ and not the infinite $2{,}667$.`
);

add(
  "math-11-66",
  "D",
  `The stem's adjustments are $k = -0.5$, not $k = -1$. Alternation is already in the model. Magnitude still decides whether the oscillation damps.

Partial sums under the recovered quotient settle toward $\\$2{,}666.67$. They do not hop forever between $\\$4,000$ and $\\$0$. That hopping is letter E's $k = -1$ clock, a different hypothetical.

**3.** A desk that treated "alternating" as an automatic divergence slogan would refuse to book the recovered $\\$2{,}666.67$ net, even though $|k| = 0.5 < 1$ already opened the gate in letter A. Magnitude is the gate. Sign is not.

What would have to change for the opposite verdict is $|k| \\ge 1$. At $k = -0.5$ the series converges. At $k = -1$ it does not. The claim says "regardless of its magnitude," which is the part that fails.

The recovered infinite net is about $\\$2,666.67$. A convergent alternating series can still have a finite sum. This one does.`
);

add(
  "math-11-67",
  "C",
  `The extra against the recovered growing pile is

$$240.28 - 240.11 = 0.17$$

so the wording is $0.17$ million light, about $\\$170{,}000$ on the pension's scale. Nearby table values are how growing-pension claims usually miss. Letter D will subtract the recovered $\\$180$ million from this level, not from $240.11$.`
);

add(
  "math-11-68",
  "C",
  `The extra against the recovered perpetuity is

$$130{,}000 - 125{,}000 = 5{,}000$$

Five thousand dollars too high is a garnish, or else $15{,}000/0.115$. The recovered leftover is $0.12$, and $15{,}000/0.12 = 125{,}000$. Letter D will use $125{,}000$ in the denominator, not $130{,}000$.`
);

add(
  "math-11-68",
  "E",
  `The extra against the recovered $k = 0.88$ pile is

$$300{,}000 - 125{,}000 = 175{,}000$$

so a slower decline *adds* $\\$175,000$ of lifetime value, it does not subtract. "Less steep, smaller total" has the ranking backwards. The recovered $k = 0.95$ perpetuity is $\\$300,000$.`
);

add(
  "math-11-69",
  "B",
  `The extra against the recovered 12-year pile is

$$175{,}000 - 170{,}794.15 = 4{,}205.85$$

About $\\$4,206$ too high is not cents, and it is not the $\\$62,794$ growth premium in letter E. A franchisor who booked $\\$175,000$ would overstate twelve years of royalties by more than a typical month-12 cheque.`
);

add(
  "math-11-69",
  "C",
  `The illegal infinite plug-in is

$$\\frac{9{,}000}{1-1.08} = -112{,}500$$

A negative "lifetime total" of positive royalties is not a present value and not a sum. Growing 8% forever has no finite undiscounted total. Finite $n = 12$ is letter A. This letter is the infinite gate, and it closes.

What would have to change for the opposite verdict is $|k|<1$. The stem has $k = 1.08$. Discounting could make a present-value series converge. The claim is an undiscounted infinite total, which does not exist here.`
);

add(
  "math-11-69",
  "D",
  `The extra against the recovered year-12 royalty is

$$20{,}984.75 - 20{,}715.85 = 268.90$$

About $\\$269$ light is a nearby table value, not a rounding of $\\$20,984.75$. Rounding to the nearest hundred would still be $\\$21,000$, not $\\$20,716$. Year 12 carries eleven growth steps from $\\$9,000$, already recovered as about $\\$20,985$.`
);

add(
  "math-11-69",
  "E",
  `The extra is already the recovered pair

$$170{,}794.15 - 108{,}000 = 62{,}794.15$$

Twelve flat copies of $\\$9,000$ are $\\$108,000$. Using letter B's false $\\$175,000$ would invent a $\\$67,000$ extra. The claim's cents match the recovered pair. A linear $8\\% \\times 12 \\times 108{,}000$ would overstate the extra, because growth compounds on the annual royalty.`
);

add(
  "math-11-70",
  "D",
  `The extra arithmetic in this letter is only the capitalisation of the recovered year-6 revenue. The overview already left $a_6 \\approx 9.95328$ and $T \\approx 66.36$. This letter reads that terminal piece.

Using the opening $\\$4$ million as $a_T$ would report

$$\\frac{4}{0.15} \\approx 26.67$$

about $\\$40$ million light. The terminal phase starts at year 6, after five growth steps at 20%, not at year 1.

Letter E will add this $\\$66.36$ million to the finite $\\$39.72$ million and test a $\\$100$ million cutoff. This letter only names the tail. The recovered terminal value is about $\\$66.36$ million, and $|0.85|<1$ is why that tail is finite.`
);

add(
  "math-11-71",
  "E",
  `The ranking is first-month cost versus a flat sixth of $\\$58,000$. The recovered first month is about $\\$6,625.74$. One sixth of $\\$58,000$ is

$$\\frac{58{,}000}{6} \\approx 9{,}666.67$$

which sits above $\\$6,625.74$. Growing restocks are back-loaded, so the opening month is lighter than a flat split. The recovered first month does sit below that flat figure.`
);

add(
  "math-11-72",
  "C",
  `The extra against the recovered decade is

$$4{,}800{,}000 - 4{,}573{,}180 = 226{,}820$$

About $\\$227{,}000$ too high is not a rounding of $\\$4,573,180$. Rounding to the nearest hundred thousand would be $\\$4.6$ million, still not $\\$4.8$ million. Letter D will divide the recovered decade by $\\$25$ million, not this inflated $\\$4.8$ million.`
);

add(
  "math-11-72",
  "D",
  `The recovered share is

$$\\frac{4{,}573{,}180}{25{,}000{,}000} \\approx 0.1829 = 18.29\\%$$

Eighteen percent of a declining perpetuity in the first decade is front-loaded in calendar and still leaves most of the lifetime pile in the tail. A linear $10/\\infty$ slogan has no meaning. The recovered share is about $18\\%$, already in the overview, and this letter only names that share against an implicit "most of the money comes early" story.`
);

add(
  "math-11-73",
  "B",
  `The miss against the target is

$$3{,}000{,}000 - 2{,}955{,}131.26 = 44{,}868.74$$

so nine years are about $\\$44,869$ short. Close in calendar is not close enough in dollars for a "surpassed" verdict.

**3.** A rushed solver who used nine flat copies of $\\$200{,}000$, or nine copies of the year-2 budget $\\$224{,}000$, would manufacture a neighbour of $\\$1.8$ million or $\\$2.0$ million without matching the recovered $s_9$. The recovered object is the geometric nine-year pile $\\$2,955,131$.

Letter D will ask for the smallest $n$. That smallest $n$ cannot be $9$ while this miss stands. Letter C will show that year 10 jumps to about $\\$3,509,747$, well above the cutoff. The bracket is this letter plus letter C.

What would have to change for the opposite verdict is a recovered $s_9$ above $\\$3,000,000$, which would take a higher opening budget or a higher growth rate than $12\\%$. At the stem's $\\$200,000$ growing at $12\\%$, nine years remain short.

The CFO who treats "almost $\\$3$ million" as "past $\\$3$ million" would stop a year early. Full precision keeps $s_9$ on the short side of the cutoff.`
);

add(
  "math-11-73",
  "C",
  `The extra against the recovered ten-year spend is

$$3{,}600{,}000 - 3{,}509{,}747 = 90{,}253$$

About $\\$90{,}000$ too high is not a rounding of $\\$3,509,747$. Rounding to the nearest hundred thousand would be $\\$3.5$ million, not $\\$3.6$ million. Letter D needs this recovered overshoot, not the inflated $\\$3.6$ million, to name $n = 10$.`
);

add(
  "math-11-73",
  "D",
  `The two recovered totals already bracket the cutoff:

$$s_9 \\approx 2{,}955{,}131 < 3{,}000{,}000 < 3{,}509{,}747 \\approx s_{10}$$

Nine years are $\\$44,869$ short. Ten years are $\\$509,747$ over. Close on year 9 is not past. The recovered smallest $n$ is $10$, not $9$.`
);

add(
  "math-11-73",
  "E",
  `The miss at $8\\%$ is

$$3{,}000{,}000 - 2{,}897{,}312.49 = 102{,}687.51$$

about $\\$103{,}000$ short. Rounding $\\$2,897,312$ to $\\$2.9$ million still misses. The recovered $8\\%$ ten-year spend does not surpass $\\$3,000,000$. Lower growth delays the break-point past year 10.`
);

add(
  "math-11-74",
  "E",
  `The half test is $\\$1,250,000/2 = \\$625,000$ against the recovered $k = 0.90$ pile $\\$500,000$. Then

$$500{,}000 < 625{,}000$$

so the steeper decline more than halves the lifetime grants. $1-k$ rose from $0.04$ to $0.10$, a factor of $2.5$, and the pile fell by that same factor. The recovered $k = 0.90$ total is less than half of $\\$1,250,000$.`
);

add(
  "math-11-75",
  "E",
  `The tail after quarter 20 is

$$500{,}000 - 166{,}196 \\approx 333{,}804$$

about two thirds of the theoretical lifetime yield. Stopping at five years harvests the smaller piece. A partial sum of positive yields cannot exceed the infinite sum. The claimed $500{,}000$ lbs infinite total is itself the recovered $s_\\infty$. The ranking against $s_{20}$ is what fails. Forever is larger, not smaller.`
);

add(
  "math-11-76",
  "C",
  `The extra that decides the ranking is

$$815{,}382.06 - 791{,}797.43 = 23{,}584.63$$

B leads by about $\\$23,585$. Faster growth on A's smaller start has not caught up in eight years of totals. Letter D will show that the *year-8 snapshot* has already crossed. This letter is the pile, and the pile is still B's.`
);

add(
  "math-11-76",
  "D",
  `A snapshot and a pile can disagree. Opening royalties $\\$80,000 < \\$95,000$ do not freeze the ranking for every later year. Seven years of $6\\%$ versus $2\\%$ is enough for annual royalties to cross. Eight years of totals is not enough for the piles to cross. The recovered year-8 pair has A ahead on the snapshot and B ahead on the pile.`
);

add(
  "math-11-76",
  "E",
  `The miss to the cutoff is

$$30{,}000 - 23{,}584.63 = 6{,}415.37$$

about $\\$6,415$ short of "more than $\\$30,000$." Rounding $\\$23,585$ to $\\$24,000$ still misses $\\$30,000$. The recovered cumulative lead is a real lead, and it is not more than $\\$30,000$.`
);

add(
  "math-11-77",
  "C",
  `At $p = 1$ each batch $n$ adds $5{,}000/n$ dollars. Those harmonic add-ons have no finite infinite-sum. "Larger than the $p = 1.5$ total" is the wrong word for "infinite." Smaller $p$ makes terms decay more slowly until, at $p = 1$, they no longer decay fast enough to sum.

The opposite verdict would need $p > 1$. The hypothetical is $p = 1$. The recovered $p = 1$ series diverges, so there is no larger finite total to quote.`
);

add(
  "math-11-77",
  "D",
  `Five dollars in campaign 100 is small, and small is not a finite infinite-total. Terms going to zero is necessary for convergence and not sufficient. The harmonic series is the counterexample, and $p = 1$ is that series. The recovered hundredth term is $\\$5$, and that fact does not guarantee convergence.`
);

add(
  "math-11-77",
  "E",
  `At $p = 0.5$ the terms go to zero even more slowly than the harmonic series, because $\\sqrt{n}$ grows slower than $n$. Vanishing terms still do not force a finite sum.

Letter B was $p = 1.5$, convergent. Letter C was $p = 1$, divergent. This letter is $p = 0.5$, also divergent. The gate is $p > 1$, and $0.5$ is not on the convergent side.

A planner who stopped at "$a_n \\to 0$" would treat letters D and E as the same claim. They are not. Letter D said vanishing terms *suffice*. This letter says they *occur* at $p = 0.5$ and the series still diverges. The recovered $p = 0.5$ series diverges even though the terms tend to $0$.`
);

add(
  "math-11-78",
  "D",
  `The year-12 margin is

$$167{,}350.25 - 166{,}108.06 \\approx 1{,}242$$

about $\\$1,242$ in the black. Thin is still positive. Faster maintenance growth has not yet flipped the annual net. Letter E will show that extra years after this still-positive year lower cumulative profit. A still-positive year 12 is compatible with a falling cumulative path.`
);

add(
  "math-11-79",
  "B",
  `The extra against the recovered 15-year recession pile is

$$24{,}188{,}328 - 22{,}000{,}000 = 2{,}188{,}328$$

About $\\$2.19$ million too low is not a rounding of $\\$24,188,328$. Rounding to the nearest million would be $\\$24$ million, not $\\$22$ million. Letter C will divide this recovered decade-and-a-half by $\\$40$ million. Using $\\$22$ million would report $55\\%$ instead of about $60\\%$.`
);

add(
  "math-11-79",
  "C",
  `The extra against the recovered share is

$$75\\% - 60.47\\% = 14.53$$

about $15$ points too high. Fifteen years of a $6\\%$ declining path capture about three fifths of the lifetime recession pile, not three quarters. A calendar $15/20 = 75\\%$ of a made-up 20-year life is the usual mix-up. The recovered share is $60.47\\%$, not $75\\%$.`
);

add(
  "math-11-79",
  "E",
  `The extra against the recovered year-7 recovery flow is

$$3{,}404{,}446 - 2{,}900{,}000 = 504{,}446$$

About $\\$504{,}000$ too low is not a rounding of $\\$3,404,446$. Rounding to the nearest hundred thousand would be $\\$3.4$ million, not $\\$2.9$ million. Year 7 carries six growth steps past $\\$2.4$ million, already recovered as about $\\$3,404,446$. Simple add-ons of $\\$70,000$ a year miss compounding.`
);

function fix59(arr) {
  const t = arr.find((x) => x.id === "math-11-59");
  let b = t.tactical_explanations[1];
  const bCut = b.indexOf("The recovered optimal harvest time is about");
  if (bCut >= 0) {
    t.tactical_explanations[1] =
      b.slice(0, bCut) +
      "The recovered optimal harvest time is about $21.67$ years, so the statement is True.";
  }
  let c = t.tactical_explanations[2];
  const cCut = c.lastIndexOf("The recovered present value at $t^{*}$ is about");
  if (cCut >= 0) {
    t.tactical_explanations[2] =
      c.slice(0, cCut) +
      "The recovered present value at $t^{*}$ is about $\\$168,031$, not $\\$195,500$, so the statement is False.";
  }
}

const frozen = [
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
  "solution_overview",
];

for (const fname of ["41_50", "51_60", "61_70", "71_80"]) {
  const p = new URL(`./${fname}.json`, import.meta.url);
  const before = JSON.parse(fs.readFileSync(p, "utf8"));
  const arr = JSON.parse(JSON.stringify(before));
  if (fname === "51_60") fix59(arr);
  const letters = "ABCDE";
  let n = 0;
  for (const t of arr) {
    t.tactical_explanations = t.tactical_explanations.map((e, i) => {
      const extra = extras[`${t.id}-${letters[i]}`];
      if (!extra) return e;
      n++;
      return insertBeforeCloser(e, extra);
    });
  }
  for (let i = 0; i < arr.length; i++) {
    for (const k of frozen) {
      const a = JSON.stringify(before[i][k] ?? null);
      const b = JSON.stringify(arr[i][k] ?? null);
      if (a !== b) throw new Error(`frozen changed ${arr[i].id} ${k}`);
    }
  }
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
  console.log("wrote", fname, "thickened", n, "tasks", arr.length);
}
