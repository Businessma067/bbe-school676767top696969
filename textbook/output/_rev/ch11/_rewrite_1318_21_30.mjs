import fs from "fs";
import path from "path";

const fp = path.join("textbook/output/_rev/ch11/21_30.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const patches = {
  "math-11-21": {
    ov: `Ms. Delgado deposits $\\$4,500$ at a $5\\%$ nominal annual rate, compounded continuously, for one year.

$$S_0=4{,}500,\\qquad r=0.05,\\qquad t=1$$

Continuous growth and the matching annual-compounding balance are

$$S(t)=S_0 e^{rt},\\qquad S_{\\mathrm{ann}}=S_0(1+r)^{t}$$`,
    body: [
      `Continuous compounding grows the bakery deposit by $e^{0.05}$:

$$S(1)=4{,}500\\times e^{0.05}$$

$$e^{0.05}\\approx 1.051271,\\qquad S(1)\\approx 4{,}730.72$$

That is the claimed year-end balance, so the statement is True.`,
      `Interest is the year-end balance minus the deposit. From $e^{0.05}\\approx 1.051271$,

$$S(1)=4{,}500\\times 1.051271\\approx 4{,}730.72$$

$$4{,}730.72-4{,}500.00=230.72$$

That is the claimed first-year interest, so the statement is True.`,
      `Annual compounding applies $5\\%$ once:

$$S_{\\mathrm{ann}}=4{,}500\\times 1.05=4{,}725.00$$

The claim is $\\$4,735.00$, which sits above even the continuous $\\$4,730.72$. A once-a-year schedule cannot beat continuous compounding at the same nominal rate, so the statement is False.`,
      `The dollar gap is the two one-year balances subtracted. Continuous compounding gave $S(1)\\approx 4{,}730.72$. Annual compounding gave $4{,}500\\times 1.05=4{,}725.00$. Then

$$4{,}730.72-4{,}725.00=5.72$$

That is the claimed $\\$5.72$ extra from continuous crediting, so the statement is True.`,
      `The continuous one-year growth factor is

$$e^{0.05}\\approx 1.051271$$

Rounded to four decimal places that is $1.0513$, not $1.0400$. A factor of $1.0400$ would describe a $4\\%$ continuous rate, so the statement is False.`,
    ],
  },
  "math-11-22": {
    ov: `A coffee roaster invests $\\$3,200$ in a fund that compounds continuously at $8\\%$ and plans to leave the money untouched for six years.

$$S_0=3{,}200,\\qquad r=0.08,\\qquad t=6$$

Continuous growth follows

$$S(t)=S_0 e^{rt}$$`,
    body: [
      `Six years of continuous $8\\%$ carry the exponent $0.48$:

$$S(6)=3{,}200\\times e^{0.08\\times 6}=3{,}200\\times e^{0.48}$$

$$e^{0.48}\\approx 1.616074,\\qquad S(6)\\approx 5{,}171.44$$

That is the claimed six-year balance, so the statement is True.`,
      `Doubling the time squares the growth factor; it does not double the dollars. Three years carry the exponent $0.24$:

$$S(3)=3{,}200\\times e^{0.24}\\approx 4{,}068.00$$

$$2\\times S(3)\\approx 8{,}136.00$$

Six years gave $S(6)\\approx 5{,}171.44$, which is not $8{,}136$, so the statement is False.`,
      `Interest is the six-year balance minus the deposit. From $e^{0.48}\\approx 1.616074$,

$$S(6)\\approx 5{,}171.44$$

$$5{,}171.44-3{,}200.00=1{,}971.44$$

The claim is $\\$2,000.00$, about $\\$29$ too high, so the statement is False.`,
      `Doubling the horizon squares the factor. Twelve years carry the exponent $0.96$:

$$S(12)=3{,}200\\times e^{0.96}\\approx 8{,}357.43$$

$$2\\times S(6)\\approx 2\\times 5{,}171.44=10{,}342.88$$

Then

$$8{,}357.43<10{,}342.88$$

Twelve years do not double the six-year balance, so the statement is False.`,
      `The same comparison, read in the right direction. Twelve years carry the exponent $0.96$:

$$S(12)=3{,}200\\times e^{0.96}\\approx 8{,}357.43$$

Six years gave $S(6)=3{,}200\\times e^{0.48}\\approx 5{,}171.44$, so twice that is $10{,}342.88$. Then

$$8{,}357.43<10{,}342.88$$

The twelve-year balance is less than double the six-year balance, so the statement is True.`,
    ],
  },
  "math-11-23": {
    ov: `A bond fund quotes a $9\\%$ nominal annual rate, compounded continuously. A $\\$15,000$ investment and a doubled $18\\%$ quote are the comparison pieces.

$$P=15{,}000,\\qquad r=0.09,\\qquad t=1$$

The effective annual rate and the one-year balance are

$$R=e^{r}-1,\\qquad S(t)=S_0 e^{rt}$$`,
    body: [
      `Continuous compounding at $9\\%$ converts as $e^{0.09}-1$:

$$R=e^{0.09}-1$$

$$e^{0.09}\\approx 1.094174,\\qquad R\\approx 0.094174\\approx 9.42\\%$$

That matches the claimed $9.42\\%$, so the statement is True.`,
      `The year-end balance is the principal times $e^{0.09}$:

$$S(1)=15{,}000\\times e^{0.09}$$

$$15{,}000\\times 1.094174\\approx 16{,}412.61$$

That is the claimed year-end balance, so the statement is True.`,
      `The gap is the effective annual rate minus the nominal quote. From $e^{0.09}\\approx 1.094174$,

$$R\\approx 9.42\\%$$

$$9.42\\%-9.00\\%=0.42$$

That is $0.42$ percentage points, which is less than $0.75$, so the statement is False.`,
      `At a doubled nominal quote of $18\\%$,

$$R_{18}=e^{0.18}-1\\approx 0.197217\\approx 19.72\\%$$

Double the original effective rate is $2\\times 9.42\\%=18.84\\%$. Then

$$19.72\\%>18.84\\%$$

The exponential bends upward, so doubling the continuous rate more than doubles the effective yield, so the statement is True.`,
      `The same rebuilt $18\\%$ effective rate is about $19.72\\%$. Against the $19.5\\%$ cutoff,

$$19.72\\%-19.50\\%=0.22$$

That clears $19.5\\%$ by about $0.22$ percentage points, so the statement is True.`,
    ],
  },
  "math-11-24": {
    ov: `An equipment lease quotes a $10\\%$ nominal annual rate. The one-year growth factor $K$ is compared under yearly, semi-annual, and continuous compounding, then applied to a $\\$75,000$ balance.

$$P=75{,}000,\\qquad r=0.10,\\qquad t=1$$

The three growth factors are

$$K_{y}=1+r,\\qquad K_{s}=(1+r/2)^{2},\\qquad K_{c}=e^{r}$$`,
    body: [
      `Yearly compounding at $10\\%$ is just one plus the quote:

$$K_{y}=1+0.10=1.1000$$

That is the claimed yearly factor, so the statement is True.`,
      `Two half-year credits of $5\\%$ square:

$$K_{s}=(1.05)^{2}$$

$$K_{s}=1.1025$$

That is the claimed semi-annual factor, so the statement is True.`,
      `Continuous compounding evaluates $e^{0.10}$:

$$K_{c}=e^{0.10}\\approx 1.105171\\approx 1.1052$$

That matches the claimed continuous factor, so the statement is True.`,
      `The dollar gap is the $\\$75,000$ balance times the factor gap. From $K_{c}\\approx 1.105171$ and $K_{s}=1.1025$,

$$75{,}000\\times(1.105171-1.1025)=75{,}000\\times 0.002671\\approx 200.32$$

The claim is $\\$250.32$, about $\\$50$ too high, so the statement is False.`,
      `The two dollar gaps on $\\$75,000$ are

$$75{,}000\\times(1.1025-1.1000)=187.50$$

$$75{,}000\\times(1.105171-1.1025)\\approx 200.32$$

Then

$$187.50<200.32$$

The semi-annual-to-yearly step is the smaller gap, not the larger, so the statement is False.`,
    ],
  },
  "math-11-25": {
    ov: `A college endowment sub-fund is valued at $\\$95,000$ and earns continuous compounding at $4.5\\%$ a year.

$$S_0=95{,}000,\\qquad r=0.045$$

Each year multiplies the balance by the same factor:

$$S(t+1)=S(t)\\,e^{r},\\qquad S(t)=S_0 e^{rt}$$`,
    body: [
      `One year of continuous $4.5\\%$ is

$$S(1)=95{,}000\\times e^{0.045}$$

$$e^{0.045}\\approx 1.046028,\\qquad S(1)\\approx 99{,}372.65$$

The claim is $\\$98,500.00$, about $\\$873$ too low, so the statement is False.`,
      `Two years double the exponent to $0.09$:

$$S(2)=95{,}000\\times e^{0.09}$$

$$e^{0.09}\\approx 1.094174,\\qquad S(2)\\approx 103{,}946.56$$

That is the claimed two-year balance, so the statement is True.`,
      `The dollar gain in year 1 is $S(1)-S(0)$. From $e^{0.045}\\approx 1.046028$,

$$S(1)\\approx 99{,}372.65,\\qquad 99{,}372.65-95{,}000=4{,}372.65$$

Year 2 adds $S(2)-S(1)$:

$$103{,}946.56-99{,}372.65=4{,}573.91$$

Then

$$4{,}372.65<4{,}573.91$$

Year 1 does not add more dollars than year 2, so the statement is False.`,
      `Continuous compounding at a fixed rate multiplies by the same $e^{r}$ every year:

$$e^{0.045}\\approx 1.046028$$

Dollar gains change because the base changes; the multiplier does not. The claim that each year uses a different factor is false, so the statement is False.`,
      `Doubling $r$ replaces $e^{0.045}$ with $e^{0.09}$:

$$e^{0.045}\\approx 1.046028,\\qquad e^{0.09}\\approx 1.094174$$

Twice the original factor would be $2.092$. Then

$$1.094\\ne 2.092$$

Growth factors sit just above $1$; they do not scale in proportion to the rate, so the statement is False.`,
    ],
  },
  "math-11-26": {
    ov: `A courier fleet starts at $\\$60,000$ and depreciates continuously at $\\delta=0.10$.

$$v_0=60{,}000,\\qquad \\delta=0.10$$

Continuous depreciation follows

$$v(t)=v_0 e^{-\\delta t}$$`,
    body: [
      `Four years of continuous $10\\%$ depreciation carry the exponent $-0.40$:

$$v(4)=60{,}000\\times e^{-0.40}$$

$$e^{-0.40}\\approx 0.670320,\\qquad v(4)\\approx 40{,}219.20$$

That is the claimed four-year value, so the statement is True.`,
      `Seven years carry the exponent $-0.70$:

$$v(7)=60{,}000\\times e^{-0.70}$$

$$e^{-0.70}\\approx 0.496585,\\qquad v(7)\\approx 29{,}795.12$$

That is the claimed seven-year value, so the statement is True.`,
      `The remaining share is the four-year factor itself:

$$e^{-0.40}\\approx 0.670320=67.03\\%$$

Checking dollars, $40{,}219.20/60{,}000=0.67032$. That is about $67.03\\%$ of the original, so the statement is True.`,
      `At a doubled rate $\\delta=0.20$, four years carry the exponent $-0.80$:

$$v(4)=60{,}000\\times e^{-0.80}$$

$$e^{-0.80}\\approx 0.449329,\\qquad v(4)\\approx 26{,}959.74$$

Then

$$26{,}959.74>25{,}000$$

The four-year value still sits above $\\$25,000$, so the statement is False.`,
      `A fixed proportional rate takes the most dollars off the largest remaining value. Year 1 ends at

$$v(1)=60{,}000\\times e^{-0.10}\\approx 54{,}290.25$$

$$60{,}000-54{,}290.25=5{,}709.75$$

Year 4 runs from $v(3)=60{,}000 e^{-0.30}\\approx 44{,}449.09$ down to $v(4)\\approx 40{,}219.20$:

$$44{,}449.09-40{,}219.20=4{,}229.89$$

Then

$$5{,}709.75>4{,}229.89$$

The first-year decline is the larger dollar drop, so the statement is True.`,
    ],
  },
  "math-11-27": {
    ov: `A REIT places $\\$18,000$ in a reserve that compounds continuously at $5.5\\%$.

$$S_0=18{,}000,\\qquad r=0.055,\\qquad M=2$$

Continuous doubling solves

$$e^{rt}=2,\\qquad t=\\frac{\\ln 2}{r}$$`,
    body: [
      `Continuous doubling is the logarithm of $2$ over the rate:

$$t=\\frac{\\ln 2}{0.055}$$

$$t\\approx\\frac{0.693147}{0.055}\\approx 12.60$$

That matches the claimed $12.60$ years, so the statement is True.`,
      `By construction $e^{0.055\\times 12.6027}=2$, so the balance at the doubling time is

$$S(12.60)=18{,}000\\times 2=36{,}000.00$$

That is the claimed doubled balance, so the statement is True.`,
      `Doubling time is inversely proportional to the rate. At $11\\%$,

$$t=\\frac{\\ln 2}{0.11}\\approx 6.30$$

Then

$$6.30\\ne 12.60$$

Raising the rate halves the wait; it does not leave the time unchanged, so the statement is False.`,
      `Each doubling multiplies by $2$, so three doublings multiply by $8$:

$$2\\times 2\\times 2=8$$

$$18{,}000\\times 8=144{,}000$$

Six times the principal would be $\\$108,000$, not $\\$144,000$. Repeated doublings multiply rather than add, so the statement is False.`,
      `The formula $t=(\\ln 2)/r$ falls as $r$ rises. At $5.5\\%$,

$$t=\\frac{\\ln 2}{0.055}\\approx 12.60$$

At $11\\%$,

$$t=\\frac{\\ln 2}{0.11}\\approx 6.30$$

A higher rate reaches $2$ sooner, not later, so the statement is False.`,
    ],
  },
  "math-11-28": {
    ov: `A stamping press starts at $\\$120,000$ and depreciates continuously at $\\delta=0.18$. Losing $60\\%$ of value means keeping the fraction $f=0.40$.

$$v_0=120{,}000,\\qquad \\delta=0.18,\\qquad f=0.40$$

The time to a remaining fraction $f$ is

$$t=\\frac{\\ln(1/f)}{\\delta}$$`,
    body: [
      `Keeping $40\\%$ is $v_0 e^{-\\delta t}=0.40 v_0$. Cancel $v_0$ and take logs:

$$e^{-\\delta t}=0.40,\\qquad \\delta t=\\ln(1/0.40)=\\ln 2.5$$

$$t=\\frac{\\ln 2.5}{\\delta}$$

That is the claimed inversion, so the statement is True.`,
      `At $\\delta=0.18$ the same logarithm is

$$t=\\frac{\\ln 2.5}{0.18}$$

$$\\ln 2.5\\approx 0.916291,\\qquad t\\approx 5.09$$

That matches the claimed $5.09$ years, so the statement is True.`,
      `Forty percent of $\\$120,000$ is the remaining value at that date:

$$v=0.40\\times 120{,}000=48{,}000.00$$

That is the claimed remaining value, so the statement is True.`,
      `Time is inversely proportional to $\\delta$. Halving $0.18$ to $0.09$ doubles the wait:

$$t=\\frac{\\ln 2.5}{0.09}\\approx 10.18$$

Then

$$10.18=2\\times 5.09$$

A slower write-down takes twice as long to reach the same remaining fraction, so the statement is True.`,
      `Keeping only $20\\%$ inverts to $5$, and $\\ln 5>\\ln 2.5$:

$$t_{80}=\\frac{\\ln 5}{0.18}\\approx 8.94$$

$$t_{60}=\\frac{\\ln 2.5}{0.18}\\approx 5.09$$

Then

$$8.94>5.09$$

A deeper loss needs more time at the same rate, so the statement is True.`,
    ],
  },
  "math-11-29": {
    ov: `A regional bank compares continuous compounding with ordinary annual compounding on a $\\$25,000$ deposit.

$$P=25{,}000$$

The quoted rates are $r=0.03$ and $r=0.15$, first over $t=1$ year and then, for the $3\\%$ case, over $t=8$ years.

$$S_{c}=P e^{rt},\\qquad S_{a}=P(1+r)^{t}$$`,
    body: [
      `At $3\\%$ over one year the two balances are

$$S_{c}=25{,}000\\times e^{0.03}\\approx 25{,}761.36$$

$$S_{a}=25{,}000\\times 1.03=25{,}750.00$$

$$25{,}761.36-25{,}750.00=11.36$$

That is the claimed $\\$11.36$ gap, so the statement is True.`,
      `At $15\\%$ over one year the same subtraction is

$$S_{c}=25{,}000\\times e^{0.15}\\approx 29{,}045.86$$

$$S_{a}=25{,}000\\times 1.15=28{,}750.00$$

$$29{,}045.86-28{,}750.00=295.86$$

That is the claimed $\\$295.86$ gap, so the statement is True.`,
      `The ratio of those two one-year gaps is

$$\\frac{295.86}{11.36}\\approx 26.04$$

The gap against the cutoff of $30$ is

$$30-26.04=3.96$$

Twenty-six times is large, but it does not clear $30$, so the statement is False.`,
      `Eight years at $3\\%$ carries the exponent $0.24$:

$$S_{c}=25{,}000\\times e^{0.24}\\approx 31{,}781.23$$

$$S_{a}=25{,}000\\times(1.03)^{8}\\approx 31{,}669.25$$

$$31{,}781.23-31{,}669.25=111.98$$

That is the claimed eight-year gap, so the statement is True.`,
      `The same two $3\\%$ gaps run the other way: $\\$111.98$ at eight years against $\\$11.36$ at one year. Then

$$111.98>11.36$$

The lender's continuous advantage grows with time rather than shrinking, so the statement is False.`,
    ],
  },
  "math-11-30": {
    ov: `An advisory firm allocates $\\$400,000$ for one year at a $9.5\\%$ nominal annual rate. Fund A compounds continuously. Fund B compounds monthly, and a later comparison switches Fund B to daily compounding.

$$P=400{,}000,\\qquad r=0.095,\\qquad t=1$$

The two accumulations and the continuous ceiling are

$$S_{A}=P e^{r},\\qquad S_{m}=P\\left(1+\\frac{r}{m}\\right)^{m},\\qquad R_{\\max}=e^{r}-1$$`,
    body: [
      `Fund A is continuous compounding at $9.5\\%$:

$$S_{A}=400{,}000\\times e^{0.095}$$

$$e^{0.095}\\approx 1.099659,\\qquad S_{A}\\approx 439{,}863.54$$

That is the claimed continuous year-end value, so the statement is True.`,
      `Fund B compounds monthly at $i=0.095/12$:

$$S_{B}=400{,}000\\times\\left(1+\\frac{0.095}{12}\\right)^{12}$$

$$\\left(1+\\frac{0.095}{12}\\right)^{12}\\approx 1.099248,\\qquad S_{B}\\approx 439{,}699.03$$

The claim is $\\$439,750.00$, about $\\$51$ too high, so the statement is False.`,
      `The ceiling on the effective annual rate is the continuous conversion, not the nominal quote:

$$R_{\\max}=e^{0.095}-1\\approx 0.09966\\approx 9.97\\%$$

Then

$$9.97\\%\\ne 9.50\\%$$

The nominal and effective rates coincide only under annual compounding, which is the floor of the range, so the statement is False.`,
      `Daily compounding still sits below the continuous limit:

$$S_{d}=400{,}000\\times\\left(1+\\frac{0.095}{365}\\right)^{365}\\approx 439{,}858.10$$

Fund A was $S_{A}\\approx 439{,}863.54$. Then

$$439{,}858.10<439{,}863.54$$

The factor $(1+r/m)^{m}$ climbs toward $e^{r}$ but never reaches it at a finite $m$, so the statement is False.`,
      `The two gaps against Fund A are

$$439{,}863.54-439{,}699.03=164.51$$

$$439{,}863.54-439{,}858.10=5.44$$

Then

$$5.44<164.51$$

Switching from monthly to daily pulls Fund B toward the continuous ceiling, so the dollar gap narrows, so the statement is True.`,
    ],
  },
};

let n = 0;
for (const t of arr) {
  const p = patches[t.id];
  if (!p) continue;
  t.solution_overview = p.ov;
  t.tactical_explanations = p.body.map((b, i) => {
    const L = "ABCDE"[i];
    const v = t.answer_key[i] ? "true" : "false";
    const stmt = t.statements[i];
    const headed = /[.!?]$/.test(stmt) ? stmt : stmt + ".";
    return `**${L}) ${headed}**  (${v})\n\n${b}`;
  });
  n++;
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
console.log("patched", n, "in 21_30.json");
