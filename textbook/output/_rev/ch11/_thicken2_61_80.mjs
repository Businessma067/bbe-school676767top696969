import fs from "node:fs";

const extras = {};
function add(id, letter, text) {
  extras[`${id}-${letter}`] = text.trim();
}

add("math-11-66", "C", `Name the false figure. $3,000$ is the three-term sum $4,000-2,000+1,000$ with the last $-500$ dropped. Four adjustments include that last reversal. The recovered $s_4$ is $2,500$, which already sits close to the infinite $2,667$. Booking $3,000$ overshoots both.`);
add("math-11-66", "E", `The series diverges because the partial sums do not settle, and the claim is still right about the two values they visit. Odd $n$ lands on $4,000$. Even $n$ lands on $0$. That pattern is the recovered $k = -1$ clock, not a limit.`);
add("math-11-67", "C", `The recovered $240.28$ million is $12 \\times 20.0236$. A short table for $(1.04)^{15}$ manufactures $240.11$. Nearby table values are how growing-pension claims usually miss. The recovered growing total is $240.28$ million, not $240.11$ million.`);
add("math-11-68", "C", `Five thousand dollars too high is not a rounding of $125,000$. Rounding $125,000$ stays $125,000$. The claimed $130,000$ is a round garnish, or $15,000/0.115$. The recovered perpetuity is $125,000$.`);
add("math-11-68", "D", `The $11$-point miss is not a rounding of $75\\%$. Rounding $64.04\\%$ to $64\\%$ still misses $75\\%$. Eight decaying payments leave about $36\\%$ of the lifetime pile in the tail. The recovered share is not more than $75\\%$.`);
add("math-11-68", "E", `Tripling the leftover from $12\\%$ to $5\\%$ is the wrong direction for "smaller total." Shrinking $1-k$ raises $a/(1-k)$. The recovered $k = 0.95$ pile is $300,000$, larger than $125,000$, not smaller.`);
add("math-11-69", "B", `Four thousand two hundred six dollars too high is not cents on $170,794$. A franchisor who booked $175,000$ would overstate a typical month-12 royalty. The recovered 12-year total is $170,794.15$.`);
add("math-11-69", "C", `Finite $n = 12$ is allowed. Infinite $n$ at $k = 1.08$ is not. Letter A opened the finite gate. This letter closes the infinite gate. Growing royalties forever have no finite undiscounted total.`);
add("math-11-69", "D", `Two hundred sixty-nine dollars light is not a rounding of $20,984.75$. Rounding to the nearest hundred would still be $21,000$, not $20,716$. The recovered year-12 royalty is about $20,984.75$.`);
add("math-11-69", "E", `The cents on $62,794.15$ match $170,794.15 - 108,000$. That identity is this letter. It is not $175,000 - 108,000$. The recovered growth extra is $62,794.15$.`);
add("math-11-70", "D", `The terminal first payment is year-6 revenue, about $9.95$ million, not the opening $4$ million. Capitalising $4 / 0.15$ understates the tail. The recovered terminal value is about $66.36$ million.`);
add("math-11-72", "C", `Two hundred twenty-seven thousand too high is not a rounding of $4,573,180$. Rounding to the nearest hundred thousand would be $4.6$ million, still not $4.8$ million. The recovered decade is about $4,573,180$.`);
add("math-11-72", "D", `Eighteen point two nine percent rounds to $18\\%$, not to $15\\%$ and not to $20\\%$. Ten years of a $2\\%$ declining plan are front-loaded in dollars and still leave most of the lifetime pile in the tail. The recovered share is about $18\\%$.`);
add("math-11-73", "C", `Ninety thousand too high is not a rounding of $3,509,747$. Rounding to the nearest hundred thousand would be $3.5$ million, not $3.6$ million. The recovered ten-year spend is about $3,509,747$.`);
add("math-11-73", "D", `The bracket $s_9 < 3{,}000{,}000 < s_{10}$ is the whole definition of the smallest $n$. Nine years are $44,869$ short. Ten years are $509,747$ over. Close on year 9 is not past. The recovered smallest $n$ is $10$.`);
add("math-11-73", "E", `One hundred three thousand short at $8\\%$ is not a rounding of $3$ million. Rounding $2,897,312$ to $2.9$ million still misses. The recovered $8\\%$ ten-year spend does not surpass $3,000,000$.`);
add("math-11-74", "D", `Forty-six percent clears $40\\%$ by about $6$ points. That clearance is not a rounding the other way. Rounding $45.79\\%$ to $46\\%$ still sits above $40\\%$. The recovered 15-grant share is not less than $40\\%$.`);
add("math-11-74", "E", `Five hundred thousand versus $625,000$ is the half test. $1-k$ rose from $0.04$ to $0.10$, a factor of $2.5$, so the pile fell by $2.5$, below half. The recovered $k = 0.90$ total is less than half of $1,250,000$.`);
add("math-11-75", "E", `Two thirds of the theoretical lifetime yield sits after quarter 20. Stopping at five years harvests the smaller piece. The recovered infinite total exceeds the recovered 20-quarter total, not the other way around.`);
add("math-11-76", "C", `Twenty-three thousand five hundred eighty-five dollars is B's cumulative lead, letter E's object. This letter only asks which pile is larger. B's $815,382$ sits above A's $791,797$. Faster growth on a smaller start has not caught up in eight years of totals.`);
add("math-11-76", "D", `The year-8 crossing is why a franchisor can pick A on a snapshot and B on a pile. Seven years of $6\\%$ versus $2\\%$ is enough for annual royalties to cross and not enough for the eight-year totals to cross. The recovered year-8 pair has A ahead.`);
add("math-11-76", "E", `The $6,415$-dollar miss to $30,000$ is not a rounding. Rounding $23,585$ to $24,000$ still misses $30,000$. The recovered cumulative lead is not more than $30,000$.`);
add("math-11-77", "C", `At $p = 1$ there is no larger finite total. There is no finite total at all. The harmonic series is the boundary the $p$-series rule was written to name. The recovered $p = 1$ series diverges.`);
add("math-11-77", "D", `Necessary is not sufficient. $a_n \\to 0$ is necessary. $p > 1$ is the actual test. Here $p = 1$, so the series diverges even though $a_{100} = 5$. The recovered hundredth term is $5$, and that fact does not guarantee convergence.`);
add("math-11-78", "D", `A $1,242$ year-12 margin is thin, and thin is still positive. Faster maintenance growth has not yet flipped the annual net. Letter E will show that later years do enough damage to pull cumulative profit down. This letter only asks whether year 12 is still in the black. It is.`);
add("math-11-79", "B", `Two million one hundred eighty-eight thousand too low is not a rounding of $24,188,328$. Rounding to the nearest million would be $24$ million, not $22$ million. The recovered 15-year recession total is about $24,188,328$.`);
add("math-11-79", "C", `Fifteen points too high is not a rounding of $60\\%$. Rounding $60.47\\%$ to $60\\%$ still is not $75\\%$. The recovered 15-year share is about $60\\%$, not $75\\%$.`);
add("math-11-79", "E", `Five hundred four thousand too low is not a rounding of $3,404,446$. Rounding to the nearest hundred thousand would be $3.4$ million, not $2.9$ million. The recovered year-7 recovery cash flow is about $3,404,446$.`);
add("math-11-80", "D", `Three hundred seventy-five thousand dropped is Tranche 3. A convergent $8\\%$ declining royalty is a finite dollar amount. Excluding it because it is labelled "forever" confuses the harmonic fee stream with a geometric perpetuity that passes $|k|<1$. The recovered combined total includes Tranche 3.`);
add("math-11-80", "E", `The hundredth fee being $10$ is compatible with divergence. The harmonic series has terms going to zero and no finite sum. The recovered $f_{100}$ is $10$, and that alone is not sufficient for convergence.`);

function insertBeforeCloser(expl, extra) {
  const trueC = "so the statement is True.";
  const falseC = "so the statement is False.";
  const close = expl.trimEnd().endsWith(trueC) ? trueC : falseC;
  const idx = expl.lastIndexOf(close);
  if (idx < 0) throw new Error("no closer");
  return expl.slice(0, idx) + extra + "\n\n" + expl.slice(idx);
}

for (const fname of ["61_70", "71_80"]) {
  const p = new URL(`./${fname}.json`, import.meta.url);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
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
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
  console.log("thickened2", fname, n);
}
