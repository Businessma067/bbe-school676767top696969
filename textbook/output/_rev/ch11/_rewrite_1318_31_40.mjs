import fs from "fs";
import path from "path";

const fp = path.join("textbook/output/_rev/ch11/31_40.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const patches = {
  "math-11-31": {
    ov: `A grape futures fund grew continuously from $\\$28,000$ to $\\$34,200$ over three years. The implied rate then projects the fund two years further, to five years from the start.

$$S_0=28{,}000,\\qquad S(3)=34{,}200,\\qquad t=3$$

The implied continuous rate and the later projection are

$$r=\\frac{\\ln(S(t)/S_0)}{t},\\qquad S(T)=S_0 e^{rT}$$`,
    body: [
      `The observed pair inverts as a continuous rate:

$$r=\\frac{\\ln(34{,}200/28{,}000)}{3}=\\frac{\\ln 1.221429}{3}$$

$$r\\approx\\frac{0.200021}{3}=0.066674\\approx 6.67\\%$$

That matches the claimed $6.67\\%$, so the statement is True.`,
      `Five years at the implied $6.67\\%$ is

$$S(5)=28{,}000\\times e^{0.066674\\times 5}=28{,}000\\times e^{0.333370}$$

$$e^{0.333370}\\approx 1.395661,\\qquad S(5)\\approx 39{,}078.52$$

That is the claimed five-year projection, so the statement is True.`,
      `The average dollar increase over the first three years is

$$\\frac{34{,}200-28{,}000}{3}=2{,}066.67$$

Carrying that average forward two more years gives

$$34{,}200+2\\times 2{,}066.67=38{,}333.33$$

The exponential projection over five years at $r\\approx 0.066674$ is

$$S(5)=28{,}000\\times e^{0.333370}\\approx 39{,}078.52$$

Then

$$38{,}333.33\\ne 39{,}078.52$$

Straight-line growth ignores compounding on a larger base, so the statement is False.`,
      `Doubling time at the implied rate is

$$t=\\frac{\\ln 2}{0.066674}\\approx 10.40$$

The claim is $12.40$ years, two years too long, so the statement is False.`,
      `A slower assumed rate cannot overshoot the observed balance. At $6\\%$,

$$S(3)=28{,}000\\times e^{0.18}$$

$$e^{0.18}\\approx 1.197217,\\qquad S(3)\\approx 33{,}522.09$$

Then

$$33{,}522.09<34{,}200$$

The $6.00\\%$ path undershoots the observed $\\$34,200$, so the statement is False.`,
    ],
  },
  "math-11-32": {
    ov: `A treasurer places $\\$60,000$ for two years and compares three banks. Bank X compounds continuously at $6.8\\%$. Bank Y compounds monthly at $6.9\\%$. Bank Z compounds quarterly at $7.0\\%$.

$$P=60{,}000,\\qquad t=2$$

$$r_X=0.068,\\qquad r_Y=0.069,\\ n_Y=12,\\qquad r_Z=0.070,\\ n_Z=4$$

The three accumulations are

$$S_X=P e^{r_X t},\\qquad S_Y=P\\left(1+\\frac{r_Y}{12}\\right)^{12t},\\qquad S_Z=P\\left(1+\\frac{r_Z}{4}\\right)^{4t}$$`,
    body: [
      `Bank X compounds continuously at $6.8\\%$ for two years:

$$S_X=60{,}000\\times e^{0.068\\times 2}=60{,}000\\times e^{0.136}$$

$$e^{0.136}\\approx 1.145682,\\qquad S_X\\approx 68{,}740.91$$

That is the claimed two-year value, so the statement is True.`,
      `Bank Y compounds monthly at $6.9\\%$ over $24$ periods:

$$S_Y=60{,}000\\times\\left(1+\\frac{0.069}{12}\\right)^{24}=60{,}000\\times(1.00575)^{24}$$

$$(1.00575)^{24}\\approx 1.147522,\\qquad S_Y\\approx 68{,}851.32$$

That is the claimed two-year value, so the statement is True.`,
      `Bank Z compounds quarterly at $7.0\\%$ over eight periods:

$$S_Z=60{,}000\\times(1.0175)^{8}$$

$$(1.0175)^{8}\\approx 1.148882,\\qquad S_Z\\approx 68{,}932.91$$

That is the claimed two-year value, so the statement is True.`,
      `The three recovered balances are $S_X\\approx 68{,}740.91$, $S_Y\\approx 68{,}851.32$, and $S_Z\\approx 68{,}932.91$. Then

$$68{,}740.91<68{,}851.32<68{,}932.91$$

Continuous compounding is the strongest clock at a fixed quote, but it cannot rescue X's $0.2$ point shortfall against Z's $7.0\\%$. Bank X is the lowest of the three, so the statement is True.`,
      `Matching the nominal rate flips the ranking. At $7\\%$ continuous,

$$S_X'=60{,}000\\times e^{0.14}$$

$$e^{0.14}\\approx 1.150274,\\qquad S_X'\\approx 69{,}016.43$$

Bank Z was $S_Z\\approx 68{,}932.91$. Then

$$69{,}016.43>68{,}932.91$$

Continuous compounding beats any finite frequency once the quoted rates are equal, so the statement is True.`,
    ],
  },
  "math-11-33": {
    ov: `A hedge fund's $\\$2,000,000$ of gross assets grows continuously at $9\\%$, while a continuous $2\\%$ management fee acts as a constant drag.

$$S_0=2{,}000{,}000,\\qquad r_{\\mathrm{gross}}=0.09,\\qquad r_{\\mathrm{fee}}=0.02,\\qquad t=6$$

The net rate, the net asset value, and the doubling time are

$$r_{\\mathrm{net}}=r_{\\mathrm{gross}}-r_{\\mathrm{fee}},\\qquad S(t)=S_0 e^{r_{\\mathrm{net}} t},\\qquad t_{2}=\\frac{\\ln 2}{r_{\\mathrm{net}}}$$`,
    body: [
      `A continuous fee subtracts from the growth rate:

$$r_{\\mathrm{net}}=0.09-0.02=0.07=7\\%$$

Adding the fee to $9\\%$ would describe a cost piled on top of growth, not a drag. The net rate is $7\\%$, not $11\\%$, so the statement is False.`,
      `Six years at the $7\\%$ net rate is

$$S(6)=2{,}000{,}000\\times e^{0.07\\times 6}=2{,}000{,}000\\times e^{0.42}$$

$$e^{0.42}\\approx 1.521962,\\qquad S(6)\\approx 3{,}043{,}923$$

The claim is $\\$3,100,000.00$, about $\\$56,000$ too high, so the statement is False.`,
      `Doubling time at the $7\\%$ net rate is

$$t_{2}=\\frac{\\ln 2}{0.07}\\approx 9.90$$

The claim is $7.00$ years, which is closer to a Rule-of-$72$ guess on the gross $9\\%$ and ignores the fee. The wait is about $9.90$ years, so the statement is False.`,
      `At a $3.5\\%$ fee the net rate falls to $0.09-0.035=0.055$. Six years then give

$$S(6)=2{,}000{,}000\\times e^{0.33}\\approx 2{,}781{,}936.26$$

so that half of the claim is right. The doubling time is

$$t_{2}=\\frac{\\ln 2}{0.055}\\approx 12.60$$

A larger fee lengthens the wait to about $12.60$ years; it does not shorten it. The conjunction is therefore false, so the statement is False.`,
      `The net rate is $r_{\\mathrm{gross}}-r_{\\mathrm{fee}}$, so raising the fee lowers $r_{\\mathrm{net}}$ and therefore $e^{r_{\\mathrm{net}} t}$ at every $t>0$. At a $2\\%$ fee, $r_{\\mathrm{net}}=0.07$ and

$$S(6)=2{,}000{,}000\\times e^{0.42}\\approx 3{,}043{,}923$$

At a $3.5\\%$ fee, $r_{\\mathrm{net}}=0.055$ and

$$S(6)=2{,}000{,}000\\times e^{0.33}\\approx 2{,}781{,}936$$

The heavier fee leaves both a smaller six-year value and a longer doubling time $t_2=(\\ln 2)/0.055\\approx 12.60$ against $9.90$ at $7\\%$ net. A higher fee reduces both the net rate and the future value, so the statement is True.`,
    ],
  },
  "math-11-34": {
    ov: `Asset A is a $\\$50,000$ equity stake growing continuously at $4\\%$. Asset B is $\\$250,000$ of factory equipment depreciating continuously at $12\\%$.

$$A_0=50{,}000,\\qquad r_A=0.04,\\qquad B_0=250{,}000,\\qquad \\delta_B=0.12$$

The two paths and the crossover time are

$$A(t)=A_0 e^{r_A t},\\qquad B(t)=B_0 e^{-\\delta_B t},\\qquad t=\\frac{\\ln(B_0/A_0)}{r_A+\\delta_B}$$`,
    body: [
      `Equating the two paths and taking logs isolates the crossover:

$$A_0 e^{r_A t}=B_0 e^{-\\delta_B t}$$

$$t=\\frac{\\ln(B_0/A_0)}{r_A+\\delta_B}$$

The displayed formula is that same quotient. The rates add because A is growing while B is decaying, so the statement is True.`,
      `The starting ratio is $250{,}000/50{,}000=5$ and the combined rate is $0.04+0.12=0.16$:

$$t=\\frac{\\ln 5}{0.16}\\approx 10.06$$

At that instant both holdings equal

$$A(10.06)=50{,}000\\times e^{0.04\\times 10.06}\\approx 74{,}767.44$$

That is the claimed crossover, so the statement is True.`,
      `Ten years is still before the $10.06$ crossover. Checking both paths at $t=10$:

$$A(10)=50{,}000\\times e^{0.40}\\approx 74{,}591.23$$

$$B(10)=250{,}000\\times e^{-1.20}\\approx 75{,}298.55$$

Then

$$74{,}591.23<75{,}298.55$$

A is still about $\\$707$ behind, so the statement is False.`,
      `The ratio $A(t)/B(t)$ grows like $e^{0.16 t}$ from a start of $1/5$. Setting that ratio equal to $1$ recovers $t=\\ln 5/0.16\\approx 10.06$, after which the ratio keeps climbing. Never-overtaking would need A's growth rate at or below B's decay, which would keep the ratio from reaching $1$. A crossover is guaranteed, so the statement is False.`,
      `After $t\\approx 10.06$ the same ratio stays above $1$ and keeps growing, because A grows while B decays. There is no second crossing, so once A is ahead it stays ahead, so the statement is True.`,
    ],
  },
  "math-11-35": {
    ov: `A municipal reserve of $\\$40,000$ is held for one year at a $7\\%$ nominal annual rate under four compounding schedules: annual, quarterly, monthly, and continuous.

$$P=40{,}000,\\qquad r=0.07,\\qquad t=1$$

The finite and continuous accumulations are

$$S_m=P\\left(1+\\frac{r}{m}\\right)^{m},\\qquad S_{c}=P e^{r}$$`,
    body: [
      `Annual compounding at $7\\%$ is a single credit:

$$S_{1}=40{,}000\\times 1.07=42{,}800.00$$

That is the claimed annual value, so the statement is True.`,
      `Quarterly compounding uses $i=0.07/4=0.0175$:

$$S_{4}=40{,}000\\times(1.0175)^{4}\\approx 42{,}874.36$$

Monthly compounding uses $i=0.07/12$:

$$S_{12}=40{,}000\\times\\left(1+\\frac{0.07}{12}\\right)^{12}\\approx 42{,}891.60$$

Those are the claimed quarterly and monthly values, so the statement is True.`,
      `The four schedules, with $r$ held at $7\\%$, are

$$S_{1}=40{,}000\\times 1.07=42{,}800.00$$

$$S_{4}=40{,}000\\times(1.0175)^{4}\\approx 42{,}874.36$$

$$S_{12}=40{,}000\\times\\left(1+\\frac{0.07}{12}\\right)^{12}\\approx 42{,}891.60$$

$$S_{c}=40{,}000\\times e^{0.07}\\approx 42{,}900.33$$

Then

$$42{,}800.00<42{,}874.36<42{,}891.60<42{,}900.33$$

With the nominal rate held fixed, more frequent crediting raises the accumulation, so the statement is True.`,
      `The last two dollar gaps are

$$42{,}891.60-42{,}874.36=17.24$$

$$42{,}900.33-42{,}891.60=8.73$$

Then

$$17.24>8.73$$

The monthly-to-quarterly step is the larger gap, not the smaller, so the statement is False.`,
      `Continuous compounding is the limit of $(1+r/m)^{m}$ as $m\\to\\infty$. Every finite $m$ stays strictly below $e^{r}$, so

$$S_{c}=40{,}000\\times e^{0.07}\\approx 42{,}900.33$$

is a ceiling at this $7\\%$ quote, not a figure some daily or hourly schedule could beat, so the statement is True.`,
    ],
  },
  "math-11-36": {
    ov: `A parent needs $\\$100,000$ in eight years and compares two continuously compounded vehicles. Option 1 quotes $4.5\\%$. Option 2 quotes $6.0\\%$.

$$S=100{,}000,\\qquad t=8,\\qquad r_1=0.045,\\qquad r_2=0.06$$

The deposit needed today is

$$S_0=S e^{-rt}$$`,
    body: [
      `Option 1 discounts $\\$100,000$ continuously at $4.5\\%$ for eight years:

$$S_0=100{,}000\\times e^{-0.045\\times 8}=100{,}000\\times e^{-0.36}$$

$$e^{-0.36}\\approx 0.697676,\\qquad S_0\\approx 69{,}767.63$$

That is the claimed Option 1 deposit, so the statement is True.`,
      `Option 2 uses the faster $6\\%$ continuous rate over the same eight years:

$$S_0=100{,}000\\times e^{-0.48}$$

$$e^{-0.48}\\approx 0.618783,\\qquad S_0\\approx 61{,}878.34$$

That is the claimed Option 2 deposit, so the statement is True.`,
      `The two required deposits are about $\\$69,767.63$ and $\\$61,878.34$. Then

$$61{,}878.34<69{,}767.63$$

The faster account needs less money up front, not more, so the statement is False.`,
      `The gap between the two deposits is

$$69{,}767.63-61{,}878.34=7{,}889.29$$

Option 1 is the larger deposit, and the gap is about $\\$7,889$, not $\\$9,000$. The claim overstates the gap and assigns it to the wrong option, so the statement is False.`,
      `Less time to grow means more principal today. Option 1 over four years is

$$S_0=100{,}000\\times e^{-0.18}\\approx 83{,}527.02$$

The eight-year requirement was about $\\$69,767.63$. Then

$$83{,}527.02>69{,}767.63$$

Halving the horizon raises the required deposit, so the statement is False.`,
    ],
  },
  "math-11-37": {
    ov: `A logistics firm's $\\$1,800,000$ revenue base grows continuously at $10\\%$ for four years, then at $4\\%$ for three more years.

$$S_0=1{,}800{,}000,\\qquad r_1=0.10,\\ t_1=4,\\qquad r_2=0.04,\\ t_2=3$$

The two phases multiply, so the exponents add:

$$S(t_1+t_2)=S_0 e^{r_1 t_1+r_2 t_2},\\qquad r_{\\mathrm{eff}}=\\frac{r_1 t_1+r_2 t_2}{t_1+t_2}$$`,
    body: [
      `Four years of continuous $10\\%$ carry the exponent $0.40$:

$$S(4)=1{,}800{,}000\\times e^{0.40}$$

$$e^{0.40}\\approx 1.491825,\\qquad S(4)\\approx 2{,}685{,}284.46$$

That is the claimed expansion-phase endpoint, so the statement is True.`,
      `Three further years at $4\\%$ multiply the year-4 figure by $e^{0.12}$:

$$S(7)=1{,}800{,}000\\times e^{0.40+0.12}=1{,}800{,}000\\times e^{0.52}$$

$$e^{0.52}\\approx 1.682027,\\qquad S(7)\\approx 3{,}027{,}649.77$$

That is the claimed seven-year revenue, so the statement is True.`,
      `Spreading the combined exponent $0.52$ across seven years is

$$r_{\\mathrm{eff}}=\\frac{0.52}{7}=0.074286\\approx 7.43\\%$$

That is a time-weighted average, not a guess between $4\\%$ and $10\\%$, so the statement is True.`,
      `The plain unweighted average of $10\\%$ and $4\\%$ is $7.00\\%$. The time-weighted $7.43\\%$ sits above it because the faster $10\\%$ phase lasted four years and the slower $4\\%$ phase only three:

$$7.43\\%>7.00\\%$$

Equal weights would understate the expansion years, so the statement is True.`,
      `Continuous factors multiply, and multiplication commutes:

$$e^{0.12}e^{0.40}=e^{0.52}=e^{0.40}e^{0.12}$$

The year-7 revenue depends on the total exponent, not on which phase came first, so the statement is True.`,
    ],
  },
  "math-11-38": {
    ov: `A crane is valued at $\\$85,000$ today and must be written down to $\\$32,000$ after six years of continuous depreciation. A second identical crane depreciates at a known $15\\%$.

$$v_0=85{,}000,\\qquad v(6)=32{,}000,\\qquad t=6$$

The implied continuous depreciation rate is

$$\\delta=\\frac{\\ln(v_0/v(t))}{t}$$`,
    body: [
      `Depreciation shrinks value, so the ratio inside the log must be $v_0/v(t)$, not the reciprocal:

$$\\delta=\\frac{\\ln(v_0/v(t))}{t}=\\frac{\\ln(85{,}000/32{,}000)}{6}$$

The displayed formula $\\ln(v(t)/v_0)/t$ would return a negative rate, which describes growth rather than a write-down, so the statement is False.`,
      `The same inversion with the policy values is

$$\\delta=\\frac{\\ln(85{,}000/32{,}000)}{6}=\\frac{\\ln 2.65625}{6}$$

$$\\delta\\approx\\frac{0.976915}{6}=0.162819\\approx 16.28\\%$$

That matches the claimed $16.28\\%$, so the statement is True.`,
      `The second crane depreciates at a known $15\\%$ for six years:

$$v(6)=85{,}000\\times e^{-0.15\\times 6}=85{,}000\\times e^{-0.90}$$

$$e^{-0.90}\\approx 0.406570,\\qquad v(6)\\approx 34{,}558.42$$

The claim is $\\$36,000.00$, about $\\$1,442$ too high, so the statement is False.`,
      `The first crane is written down to $\\$32,000$ while the second retains about $\\$34,558$. Then

$$32{,}000<34{,}558$$

The slower $15\\%$ rate keeps more value. Ranking by which crane had the higher implied rate would reverse this, so the statement is False.`,
      `Holding more value means a gentler rate. A $\\$40,000$ target over the same six years gives

$$\\delta=\\frac{\\ln(85{,}000/40{,}000)}{6}=\\frac{\\ln 2.125}{6}\\approx 0.12563\\approx 12.56\\%$$

Then

$$12.56\\%<16.28\\%$$

A higher remaining value over the same horizon cannot imply a faster write-down, so the statement is False.`,
    ],
  },
  "math-11-39": {
    ov: `An impact fund places $\\$12,000$ in a continuously compounded account at $6.5\\%$. The trustees want the times to double, triple, and quadruple that deposit.

$$S_0=12{,}000,\\qquad r=0.065$$

Reaching a multiple $M$ of the deposit takes

$$t=\\frac{\\ln M}{r}$$`,
    body: [
      `Continuous doubling is $\\ln 2$ over the rate:

$$t_{2}=\\frac{\\ln 2}{0.065}$$

$$t_{2}\\approx\\frac{0.693147}{0.065}\\approx 10.66$$

That matches the claimed $10.66$ years, so the statement is True.`,
      `Tripling swaps in $\\ln 3$:

$$t_{3}=\\frac{\\ln 3}{0.065}$$

$$t_{3}\\approx\\frac{1.098612}{0.065}\\approx 16.90$$

That matches the claimed $16.90$ years, so the statement is True.`,
      `Quadrupling is two doublings because $\\ln 4=2\\ln 2$:

$$t_{4}=\\frac{\\ln 4}{0.065}\\approx 21.33$$

$$2\\times t_{2}=2\\times 10.66=21.32$$

The quadrupling time is twice the doubling time, so the statement is True.`,
      `Four times the $\\$12,000$ deposit is

$$12{,}000\\times 4=48{,}000.00$$

By definition of quadrupling time, that is the balance at $t\\approx 21.33$ years, so the statement is True.`,
      `Times scale with logarithms, and $\\ln 3/\\ln 2$ is not $1.5$:

$$\\frac{\\ln 3}{\\ln 2}\\approx 1.585$$

$$1.5\\times 10.66=15.99$$

The recovered tripling time was $16.90$ years, not $15.99$. Linear scaling of the multiple does not linearly scale the wait, so the statement is False.`,
    ],
  },
  "math-11-40": {
    ov: `A family office holds three assets for five years. Asset A is a $\\$150,000$ equity stake growing continuously at $6\\%$. Asset B is $\\$220,000$ of warehouse machinery depreciating continuously at $9\\%$. Asset C is a $\\$100,000$ licence that grows at $8\\%$ for three years, then at $3\\%$ for two years.

$$A_0=150{,}000,\\ r_A=0.06,\\qquad B_0=220{,}000,\\ \\delta_B=0.09,\\qquad C_0=100{,}000$$

The three terminal values, added as ordinary nominal amounts, are

$$A(5)=A_0 e^{r_A t},\\qquad B(5)=B_0 e^{-\\delta_B t},\\qquad C(5)=C_0 e^{r_1\\cdot 3}e^{r_2\\cdot 2}$$`,
    body: [
      `Asset A grows continuously at $6\\%$ for five years:

$$A(5)=150{,}000\\times e^{0.30}$$

$$e^{0.30}\\approx 1.349859,\\qquad A(5)\\approx 202{,}478.82$$

That is the claimed five-year value, so the statement is True.`,
      `Asset B depreciates continuously at $9\\%$ for five years:

$$B(5)=220{,}000\\times e^{-0.45}$$

$$e^{-0.45}\\approx 0.637628,\\qquad B(5)\\approx 140{,}278.19$$

That is the claimed five-year value, so the statement is True.`,
      `Asset C chains two phases whose exponents add to $0.30$:

$$C(5)=100{,}000\\times e^{0.24}\\times e^{0.06}=100{,}000\\times e^{0.30}$$

$$C(5)\\approx 134{,}985.88$$

The claim is $\\$130,000.00$, about $\\$4,986$ too low, so the statement is False.`,
      `The three terminal values add as ordinary nominal amounts:

$$202{,}478.82+140{,}278.19+134{,}985.88=477{,}742.89$$

The three original principals sum to $150{,}000+220{,}000+100{,}000=470{,}000$. Then

$$477{,}742.89>470{,}000$$

Gains on A and C outweigh B's depreciation, so the portfolio ends above the starting total, so the statement is False.`,
      `Flipping the sign on B's exponent turns decay into growth of the same $9\\%$ magnitude:

$$B(5)'=220{,}000\\times e^{0.45}$$

$$e^{0.45}\\approx 1.568312,\\qquad B(5)'\\approx 345{,}028.68$$

Then

$$345{,}028.68>340{,}000$$

The same $9\\%$ magnitude that left about $\\$140,278$ as decay leaves about $\\$345,029$ as growth, so the statement is True.`,
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
console.log("patched", n, "in 31_40.json");
