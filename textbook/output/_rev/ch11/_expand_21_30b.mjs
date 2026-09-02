import fs from "node:fs";

const path = "textbook/output/_rev/ch11/21_30.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

const extras = {
  "math-11-22": {
    0: `In the story of the stem, the roaster parks $\\$3,200$ for six years at 8% continuous. The recovered object is $S(6) \\approx 5,171.44$. Citing it is citing Part 3.1, not a second $e^{0.48}$.

**1.** A solver who used $3,200 \\times 1.08^{6} \\approx 5,077$ would be on an annual clock, about $\\$94$ light.

**2.** Another mix-up is $3,200 \\times (1 + 0.08 \\times 6) = 4,736$, simple interest, even lighter.

**3.** The cents, $44$, match $3,200 \\times e^{0.48}$ as Part 3.1 rounded them.

Letters B through E will compare this $\\$5,171.44$ with doubled three-year and twelve-year companions. This letter only names the six-year balance.

The recovered six-year balance is $\\$5,171.44$`,
    1: `Doubling the calendar does not double the dollars. Part 3.2 recovered $S(3) \\approx 4,068.00$. Twice that is about $\\$8,136$. Part 3.1 recovered $S(6) \\approx 5,171.44$. Those are not equal.

The extra arithmetic is

$$8,136 - 5,171.44 = 2,964.56$$

so doubling the three-year balance overshoots the six-year balance by almost $\\$3,000$.

**1.** After three years the company already has $\\$4,068$. The next three years compound on that larger base, but they multiply by $e^{0.24} \\approx 1.271$, not by $2$. $4,068 \\times 1.271 \\approx 5,171$, which is $S(6)$, not $8,136$.

**2.** The trap is "twice the time, twice the money." Twice the time squares the growth factor. $e^{0.24}$ squared is $e^{0.48}$, which multiplies the *principal*, not the three-year *balance*, by $1.616$.

**3.** The opposite verdict would hold under simple interest. The stem is continuous compounding.

The recovered $S(6)$ is not twice $S(3)$`,
    2: `Interest over six years is $S(6)$ minus $\\$3,200$. Part 3.3 recovered $\\$1,971.44$. The claim is $\\$2,000.00$, about $\\$29$ too high.

The gap is

$$2,000.00 - 1,971.44 = 28.56$$

**1.** A solver who used $3,200 \\times 0.08 \\times 6 = 1,536$ would undershoot with simple interest. The claim overshoots. Neither is $\\$1,971.44$.

**2.** Rounding $\\$1,971.44$ to the nearest hundred is $\\$2,000$, which is how the claim likely appeared. The overview kept the cents. The claim said "approximately $\\$2,000.00$," but $\\$29$ is a large "approximately" next to a figure that already has cents in letter A.

**3.** The opposite verdict would hold if the cutoff were $\\$1,970$. The claim named $\\$2,000.00$.

The recovered interest is $\\$1,971.44$, not $\\$2,000.00$`,
    3: `Doubling the six-year horizon squares the six-year factor. Part 3.4 recovered $S(12) \\approx 8,357.43$. Twice $S(6)$ is $10,342.88$. Part 3.5 already compared $8,357.43 < 10,342.88$.

**1.** The trap is the same linear split as letter B, now on a longer calendar. Twelve years is not two copies of the six-year *balance*. It is the principal times $e^{0.96} \\approx 2.612$, whereas twice $S(6)$ would require a factor of $3.232$.

**2.** Letter E is this comparison read in the true direction. This letter is the false "exactly double" wording.

**3.** The opposite verdict would hold if $e^{0.96} = 2 e^{0.48}$, which would require $e^{0.48} = 2$, which is a doubling in six years, not an 8% continuous path.

The recovered twelve-year balance is $\\$8,357.43$, not twice $\\$5,171.44$`,
    4: `The same pair as letter D, read correctly: $S(12) \\approx 8,357.43$ is less than $2 \\times S(6) = 10,342.88$. Part 3.5 already wrote that inequality.

The shortfall is

$$10,342.88 - 8,357.43 = 1,985.45$$

about $\\$1,985$ short of a doubled six-year balance.

**1.** Why it sits below: $S(12) / S(6) = e^{0.48} \\approx 1.616$, which is the same six-year factor again, not $2$. Each extra six years multiplies by $1.616$, not by $2$.

**2.** A solver who thought "less than double" meant "less than $S(6)$" would be comparing the wrong pair. The claim compares $S(12)$ with $2 S(6)$.

**3.** The opposite verdict would need $e^{0.48} > 2$, a six-year doubling, which would take $r = (\\ln 2)/6 \\approx 11.6\\%$. The stem is $8\\%$.

The recovered twelve-year balance is less than double the six-year balance`,
  },
};

for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((letter, i) => {
    if (!ex[i]) return letter;
    return insertBeforeClose(letter, ex[i]);
  });
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
console.log("22 done");
