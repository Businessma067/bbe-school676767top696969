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
  "math-11-59",
  "B",
  `Forgetting the shift reports $26.67$ years. Using percent $7.5$ in place of $0.075$ is a two-order slip. The scale $A = 1{,}200$ never entered. Letters C through E all use this recovered $21.67$-year date.`
);

add(
  "math-11-59",
  "C",
  `The extra against the recovered present value is

$$195{,}500 - 168{,}031 = 27{,}469$$

so the wording overstates $f(t^{*})$ by about $\\$27,469$. Stumpage near $\\$853,333$ times $e^{-1.625}\\approx 0.197$ is the recovered $\\$168,031$. A milder exponent $1.5$ manufactures a neighbour of $\\$195,500$. This letter is $f(t^{*})$, not $P(t^{*})$.`
);

add(
  "math-11-66",
  "D",
  `The extra claim is "regardless of its magnitude." Magnitude is exactly what the $|k|<1$ gate reads. Here $|k| = 0.5$, so the gate opens and the recovered net is about $\\$2,666.67$. Letter E will close the gate at $k = -1$, where partial sums hop between $\\$4,000$ and $\\$0$. Those two clocks are not the same series.`
);

add(
  "math-11-69",
  "D",
  `Using $(1.08)^{12}$ on $\\$9,000$ would report the year-13 royalty, about $\\$22,664$, which overshoots this letter rather than undershooting it. The recovered year-12 payment is the eleventh power, already in Part 3, about $\\$20,984.75$.`
);

add(
  "math-11-73",
  "B",
  `Nine flat copies of $\\$200,000$ would be $\\$1,800,000$, far below the recovered $s_9$. Growth on a rising base is why nine years already sit near $\\$2.96$ million and still miss. The recovered nine-year spend is $\\$2,955,131$, still below $\\$3,000,000$.`
);

add(
  "math-11-76",
  "E",
  `Letter C already ranked the piles. This letter only tests the size of B's lead against a $\\$30,000$ cutoff. The recovered lead is about $\\$23,585$. A shorter window would have made B's lead larger, because A's 6% would have had less time to close. At $n = 8$ the cutoff is missed.`
);

add(
  "math-11-77",
  "E",
  `What would have to change for the opposite verdict is $p > 1$. At $p = 0.5$ the $p$-series test fails even though $a_n = 5{,}000/n^{0.5}$ still tends to $0$. Vanishing terms occur here and the series still diverges. That is the whole point of the recovered $p = 0.5$ case.`
);

add(
  "math-11-79",
  "B",
  `A fund that booked $\\$22$ million would understate fifteen recession years by more than a typical later-year cash flow on this path. The recovered 15-year total is $\\$24,188,328$, and letter C's share uses that numerator against the recovered $\\$40$ million lifetime pile.`
);

add(
  "math-11-79",
  "E",
  `A solver who used $(1.06)^{7}$ on the opening $\\$2.4$ million would report about $\\$3,609,000$, the year-8 term. Year 7 carries six growth steps, not seven. The recovered year-7 recovery cash flow is about $\\$3,404,446$, not $\\$2,900,000$.`
);

add(
  "math-11-80",
  "E",
  `Necessary is not sufficient. $f_n \\to 0$ is necessary. $p > 1$ is the actual test for this harmonic-type fee stream. The recovered hundredth fee is $\\$10$, and that fact alone does not guarantee a finite total.`
);

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

for (const fname of ["51_60", "61_70", "71_80"]) {
  const p = new URL(`./${fname}.json`, import.meta.url);
  const before = JSON.parse(fs.readFileSync(p, "utf8"));
  const arr = JSON.parse(JSON.stringify(before));
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
  console.log("wrote", fname, "thickened", n);
}
