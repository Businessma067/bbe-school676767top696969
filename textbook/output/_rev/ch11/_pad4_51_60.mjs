import fs from "node:fs";

const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const lookup = {
  "math-11-51": [1, 2],
  "math-11-53": [0],
  "math-11-54": [1],
  "math-11-55": [0, 1],
  "math-11-58": [0],
  "math-11-60": [0, 1],
};

const extra = {
  "math-11-51": ["","","","",
    `Thirteen hundredths of a point is the whole extra from continuous versus annual at $5\\%$. It is not a rounding of one point. It is not $5.13-4.13$. The recovered gap is $0.13$, and $0.13$ is not more than $1.00$.`],
  "math-11-52": [
    `Every dollar of $K_{2}$ in letters C through E is grown from a residual that used this $\\$35,264$, not $\\$42,000$. Skipping the discount here would understate the second face by about $\\$9,500$ at $6\\%$ over six years. The recovered PDV of the known receivable is $\\$35,264.01$.`,
    "","","",""],
  "math-11-53": ["", "",
    `The cutoff is a strict inequality. Sitting $\\$607$ short is a fail, not an approximation of a pass. The recovered four-year premium is $\\$10,392.55$, which is not more than $\\$11,000$.`,
    `Indifference tracks $rt$. Change $r$ and you change $K$. The recovered $9\\%$ cheque $\\$50,167$ is not the recovered $6.5\\%$ cheque $\\$45,393$. Unchanged would mean the exponent $0.26$ survived a rate change. It did not.`,
    `Less wait, less extra cash, holding $r$ fixed. The recovered two-year $K\\approx \\$39,859$ is the four-year $K$ with $t$ cut in half in the exponent, not with $K$ cut in half. The recovered two-year payment is smaller than the four-year payment.`],
  "math-11-54": [
    `Empty interior plus decreasing $f$ is a corner at $0$. That is the recovered policy at $r=0.08$. Waiting for $P$ to catch $r$ cannot work when $P'/P$ is stuck at $5\\%$. The recovered $t^{*}$ is $0$.`,
    "",
    `The ten-year present value is a net-decay calculation, $40{,}000e^{-0.30}$, not a growth calculation. Compared with $\\$40,000$ today it is a $\\$10,367$ present-value loss. The recovered $f(10)$ is $\\$29,632.73$.`,
    `One recovered pair kills a universal. $f(0)>f(10)$ at $r=0.08$ is that pair. Rising $P$ is compatible with falling $f$ whenever $r$ exceeds growth. The recovered ranking has waiting hurting present value.`,
    `Below the $5\\%$ growth rate, $f$ increases in $t$. Immediate sale then realises the floor of $f$, not the peak. The recovered $4\\%$ policy is the opposite of letter A's $8\\%$ corner.`],
  "math-11-55": ["","",
    `Years per unit rate is a large number here because $520{,}000$ dwarfs $|-1{,}092|$. That is why $-476$ is hundreds of years per unit $r$, or about $4.76$ years per percentage point. The recovered sensitivity is $-476.19$.`,
    `Shorten, not lengthen. The recovered derivative is negative. A team that delayed harvest when $r$ rose would be reading $+476$. The data and the formula give $-476$.`,
    `Positive $P''$ does not save a delayed harvest. The second-order test for $f$ subtracts $rP'$ and goes negative. The recovered $-1{,}092<0$ is that test passing.`],
  "math-11-56": [
    `Later letters need this date. Valuing $f$, signing $P''-rP'$, and differentiating $t^{*}$ with respect to $r$ all sit on $t^{*}\\approx 18.22$. A $22.22$-year harvest is the unshifted crossing. The recovered $t^{*}$ is $18.22$ years.`,
    `Present value uses $e^{-1.64}$, not $1/6$ and not $0.20$. Stumpage $\\$1.48$ million times $0.194$ is $\\$287,000$. The recovered $f(t^{*})$ is $\\$287,378$, not $\\$250,000$.`,
    `Skip $-rP'$ and you report $P''=+6{,}000$ as if it were the test. Include $-rP'$ and the test is $-6{,}000$. Letter D will divide by this number. The recovered second-order quantity is $-\\$6,000$.`,
    `Negative over negative is not this formula: $P$ is positive and the denominator is negative, so the quotient is negative. The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r$ is $-246.91$, not $+246.91$.`,
    `Shifted inverse relations overshoot a doubling. $2/0.045-4=40.44$, not $36.44$. The recovered $4.5\\%$ harvest is $40.44$ years.`],
  "math-11-57": [
    `This addend is about $76\\%$ of the exit face after $2.5$ years of $11\\%$. Letter C will add $\\$37,514$ to it. The recovered exit PDV is $\\$189,893.03$.`,
    `This addend is about $94\\%$ of the side-payment face after seven months of $11\\%$. Letter D will ask whether the $6\\%$ haircut is more than $10\\%$. The recovered side-payment PDV is $\\$37,513.95$.`,
    `Two recovered addends, one combined figure. $\\$189,893+\\$37,514=\\$227,407$. A printed $\\$230,000.00$ is a different number, not a nickname for this sum. The recovered combined PDV is $\\$227,407$.`,
    `Six percent of $\\$40,000$ is $\\$2,400$. The recovered dollar discount is $\\$2,486$, which is $6.2\\%$. Ten percent would be $\\$4,000$ off. The recovered haircut is not more than $10\\%$ of face.`,
    `Lift $\\$227,407$ to the faces when $r=0$. That lift is $\\$62,593$ of discount disappearing. The recovered zero-rate combined PDV is $\\$290,000$.`],
  "math-11-58": ["",
    `Later letters recompute $r$ from the same logarithm with a new $K$ or a new $t$. They need this $10.44\\%$ as the base ranking. A linear $8.33\\%$ would scramble those rankings. The recovered implied continuous rate is $10.44\\%$.`,
    "",
    `Shorter horizon, same factor, higher annual rate. The recovered $15.67\\%$ sits above $10.44\\%$. The claim has that inverse backwards.`,
    `Half of $10.44$ is $5.22$. That identity is this letter. It is not a square-root identity. The recovered $9$-year rate is $5.22\\%$.`],
  "math-11-59": [
    `Letter B substitutes. Letters C through E shift $k$ or $r$. All of them need $t^{*}=2/r-k$, not $2/r$ and not a formula that still carries $A$. The recovered general date is $t^{*}=2/r-k$.`,
    `Particular numbers: $r=0.075$, $k=5$, $t^{*}\\approx 21.67$. The $\\$1,200$ is unused for timing. The recovered harvest date is $21.67$ years.`,
    `Discounted value is about one-fifth of stumpage here, $\\$168,031$ versus $\\$853,333$. A $\\$195,500$ story is a milder exponent. The recovered $f(t^{*})$ is $\\$168,031$.`,
    `One-for-one in $k$: three extra units of shift, three fewer years of wait. The recovered $k=8$ date is $18.67$ years, shorter.`,
    `Less than half, not more: $8.33<10.83$. The shift $-5$ is why doubled $r$ more than halves $t^{*}$. The recovered $15\\%$ date is $8.33$ years.`],
  "math-11-60": ["","",
    `False $\\$21,500$ plus false $\\$26,000$ is the false $\\$47,500$ in letter E. True $\\$20,110$ plus true $\\$24,713$ is $\\$44,823$. This letter locks the first true addend. The recovered five-year PDV is $\\$20,109.60$.`,
    `This letter locks the second true addend, $\\$24,713$. Using the five-year factor on a ten-year payment would overstate it. The recovered ten-year PDV is $\\$24,713.09$.`,
    `Add the locked addends. Do not add the rejected levels. Do not add faces. The recovered combined PDV the investor should pay today is $\\$44,823$, not $\\$47,500$.`],
};

function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g, "\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  return [...lines, "", extraText.trim(), "", closer].join("\n");
}

function words(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  const L = lookup[t.id] || [];
  const ex = extra[t.id] || ["","","","",""];
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const nl = e.indexOf("\n");
    let body = e.slice(nl + 1).replace(/^\n+/, "");
    const w = words(e);
    if (!L.includes(i) && w < 350 && ex[i]) body = splice(body, ex[i]);
    return e.slice(0, nl) + "\n\n" + body;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  const L = lookup[t.id] || [];
  const ws = t.tactical_explanations.map(words);
  console.log(t.id, ws.map((w,i) => (L.includes(i)?"L": w<350?"!":"") + w).join(", "));
}
