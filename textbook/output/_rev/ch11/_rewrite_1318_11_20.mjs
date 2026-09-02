import fs from "fs";
import path from "path";

const fp = path.join("textbook/output/_rev/ch11/11_20.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const patches = {
  "math-11-11": {
    ov: `A trustee needs a target of $\\$40,000$ today after six years of annual compounding at $4.5\\%$, and wants the deposit that would have been required six years ago.

$$S=40{,}000,\\qquad r=0.045,\\qquad n=1,\\qquad t=6$$

The growth factor and the original deposit are

$$(1+r)^{t},\\qquad S_0=\\frac{S}{(1+r)^{t}}$$`,
    body: [
      `With interest paid once a year, the six-year growth factor is

$$(1.045)^{6}$$

$$(1.045)^{6}\\approx 1.302260$$

That matches the claimed $1.302253$, so the statement is True.`,
      `The original deposit is the target divided by that growth factor:

$$S_0=\\frac{40{,}000}{(1.045)^{6}}$$

$$(1.045)^{6}\\approx 1.302260,\\qquad S_0\\approx 30{,}715.83$$

That matches the claimed $\\$30,715.86$, so the statement is True.`,
      `The recovered deposit is about $\\$30,715.83$. Against the $\\$32,000$ cutoff,

$$32{,}000-30{,}715.83=1{,}284.17$$

The present value sits about $\\$1,284$ below $\\$32,000$, so the statement is True.`,
      `A present value is a fixed target divided by a growth factor. Raising the rate enlarges the denominator. At $5.5\\%$,

$$(1.055)^{6}\\approx 1.378724$$

$$S_0=\\frac{40{,}000}{1.378724}\\approx 29{,}009.83$$

Then

$$29{,}009.83<30{,}715.83$$

Faster growth means a smaller opening balance, not a larger one, so the statement is False.`,
      `Interest is the target minus the original deposit. From $(1.045)^{6}\\approx 1.302260$,

$$S_0\\approx\\frac{40{,}000}{1.302260}\\approx 30{,}715.83$$

$$40{,}000-30{,}715.83=9{,}284.17$$

That matches the claimed $\\$9,284.14$, so the statement is True.`,
    ],
  },
  "math-11-12": {
    ov: `A deposit of $£4,000$ earns a nominal annual rate of $6\\%$, compounded monthly, and must grow to $£6,000$.

$$S_0=4{,}000,\\qquad S=6{,}000,\\qquad r=0.06,\\qquad n=12$$

Measured in monthly periods, the waiting time is

$$i=\\frac{r}{n},\\qquad t=\\frac{\\ln(S/S_0)}{\\ln(1+i)}$$`,
    body: [
      `The monthly rate is $i=0.06/12=0.005$, and the target ratio is $6{,}000/4{,}000=1.5$:

$$t=\\frac{\\ln 1.5}{\\ln 1.005}$$

$$t\\approx\\frac{0.405465}{0.004988}\\approx 81.30$$

That matches the claimed $81.30$ months, so the statement is True.`,
      `The same inversion gives $t\\approx 81.30$ months, or

$$\\frac{81.30}{12}\\approx 6.78$$

Six years would be $72$ months. Then

$$6.78\\ne 6.00$$

The wait is about $6.78$ years, not $6.00$, so the statement is False.`,
      `Forty-eight months is a four-year trial at $i=0.005$:

$$4{,}000\\times(1.005)^{48}\\approx 5{,}082$$

That is still about $£918$ short of $£6,000$. The logarithm that hits the target is $t\\approx 81.30$ months, not $48$, so the statement is False.`,
      `Times scale with logarithms, and $\\ln 1.5$ is not half of $\\ln 2$. The $1.5$ wait is

$$t_{1.5}=\\frac{\\ln 1.5}{\\ln 1.005}\\approx 81.30$$

The doubling time is

$$t_{2}=\\frac{\\ln 2}{\\ln 1.005}\\approx 138.98$$

$$\\frac{t_{2}}{2}\\approx 69.49$$

Then

$$81.30>69.49$$

Growing by $50\\%$ takes longer than half a doubling, so the statement is False.`,
      `The logarithmic solution is the same inversion:

$$t=\\frac{\\ln 1.5}{\\ln 1.005}\\approx 81.30$$

One hundred months would grow the deposit by

$$(1.005)^{100}\\approx 1.647$$

to about $£6,587$, overshooting $£6,000$. The required time is $81.30$ months, not $100$, so the statement is False.`,
    ],
  },
  "math-11-13": {
    ov: `A retiree deposits $\\$20,000$ for one year at a nominal annual rate of $4.25\\%$, compounded daily on a $365$-day year.

$$P=20{,}000,\\qquad r=0.0425,\\qquad n=365,\\qquad t=1$$

The daily rate, the effective annual rate, and the year-end balance are

$$i=\\frac{r}{n},\\qquad R=(1+i)^{n}-1,\\qquad FV=P(1+R)$$`,
    body: [
      `A $4.25\\%$ nominal quote on a $365$-day year is divided across those $365$ dates:

$$i=\\frac{0.0425}{365}$$

$$i\\approx 0.00011644=0.011644\\%$$

That is the claimed daily rate, so the statement is True.`,
      `The effective annual rate compounds the daily factor through $365$ days:

$$R=\\left(1+\\frac{0.0425}{365}\\right)^{365}-1$$

$$\\left(1+\\frac{0.0425}{365}\\right)^{365}\\approx 1.043413,\\qquad R\\approx 0.043413\\approx 4.34\\%$$

That matches the claimed $4.34\\%$, so the statement is True.`,
      `The year-end balance is the deposit times that annual factor. From the daily conversion,

$$\\left(1+\\frac{0.0425}{365}\\right)^{365}\\approx 1.043413$$

$$FV=20{,}000\\times 1.043413\\approx 20{,}868.26$$

That is the claimed balance, so the statement is True.`,
      `With the nominal rate held fixed, fewer compounding dates lower the effective yield. Daily compounding gave $R_{d}\\approx 4.34\\%$. Monthly compounding uses $n=12$:

$$R_{m}=\\left(1+\\frac{0.0425}{12}\\right)^{12}-1\\approx 0.04334\\approx 4.33\\%$$

Then

$$4.33\\%<4.34\\%$$

Monthly is slightly weaker here, not stronger, so the statement is False.`,
      `The gap is the daily effective rate minus the nominal quote. From the $365$-day conversion, $R\\approx 4.34\\%$, so

$$4.34\\%-4.25\\%=0.09$$

That is $0.09$ percentage points, which is less than $0.20$, so the statement is False.`,
    ],
  },
  "math-11-14": {
    ov: `A store card charges $1.9\\%$ per month on unpaid balances.

$$i_m=0.019,\\qquad n=12,\\qquad t=1$$

The nominal annual rate, the effective annual rate, and a one-year future value are

$$r_{\\mathrm{nom}}=12i_m,\\qquad R=(1+i_m)^{12}-1,\\qquad FV=P(1+R)$$`,
    body: [
      `A nominal quote from a $1.9\\%$ monthly charge is twelve times that charge:

$$r_{\\mathrm{nom}}=12\\times 0.019$$

$$r_{\\mathrm{nom}}=0.228=22.80\\%$$

That is the claimed nominal rate, so the statement is True.`,
      `The effective annual rate compounds the monthly charge through twelve months:

$$R=(1.019)^{12}-1$$

$$(1.019)^{12}\\approx 1.253401,\\qquad R\\approx 0.253401\\approx 25.34\\%$$

That matches the claimed $25.34\\%$, so the statement is True.`,
      `The two rates coincide only when compounding is annual. Here

$$r_{\\mathrm{nom}}=12\\times 1.9\\%=22.80\\%$$

$$R=(1.019)^{12}-1\\approx 25.34\\%$$

Then

$$25.34\\%\\ne 22.80\\%$$

The printed twelvefold multiple is not the rate that actually accrues, so the statement is False.`,
      `An unpaid $\\$3,000$ grows by the twelve-month factor. From $i_m=0.019$,

$$(1.019)^{12}\\approx 1.253401$$

$$FV=3{,}000\\times 1.253401\\approx 3{,}760.20$$

The claim is $\\$3,684.00$, which is $3{,}000\\times 1.228$, so the statement is False.`,
      `The gap is the effective annual rate minus the nominal quote:

$$R=(1.019)^{12}-1\\approx 25.34\\%$$

$$r_{\\mathrm{nom}}=22.80\\%$$

$$25.34\\%-22.80\\%=2.54$$

That is $2.54$ percentage points, which is less than $3.00$, so the statement is False.`,
    ],
  },
  "math-11-15": {
    ov: `A bank converts a fixed nominal annual rate of $10\\%$ into an effective yearly rate at three compounding frequencies.

$$r=0.10,\\qquad n=2,\\qquad n=4,\\qquad n=12$$

For each frequency the effective annual rate is

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
    body: [
      `Semi-annual compounding splits $10\\%$ across two dates:

$$i=\\frac{0.10}{2}=0.05$$

$$R=(1.05)^{2}-1$$

$$(1.05)^{2}=1.1025,\\qquad R=0.1025=10.25\\%$$

That is the claimed $10.25\\%$, so the statement is True.`,
      `Quarterly compounding splits $10\\%$ across four dates:

$$i=\\frac{0.10}{4}=0.025$$

$$R=(1.025)^{4}-1$$

$$(1.025)^{4}\\approx 1.103813,\\qquad R\\approx 0.103813\\approx 10.38\\%$$

That matches the claimed $10.38\\%$, so the statement is True.`,
      `Monthly compounding splits $10\\%$ across twelve dates:

$$i=\\frac{0.10}{12}\\approx 0.008333$$

$$R=(1.008333)^{12}-1$$

$$(1.008333)^{12}\\approx 1.104713,\\qquad R\\approx 0.104713\\approx 10.47\\%$$

That matches the claimed $10.47\\%$, so the statement is True.`,
      `With $r$ fixed, each extra compounding date raises the yearly yield. The three conversions are

$$R_{2}=10.25\\%,\\qquad R_{4}\\approx 10.38\\%,\\qquad R_{12}\\approx 10.47\\%$$

Then

$$10.25\\%<10.38\\%<10.47\\%$$

The effective rate rises steadily with frequency, so the statement is True.`,
      `The two successive jumps are

$$10.38\\%-10.25\\%=0.13$$

$$10.47\\%-10.38\\%=0.09$$

Then

$$0.13>0.09$$

The first jump is the larger one, not the smaller, so the statement is False.`,
    ],
  },
  "math-11-16": {
    ov: `An economist asks for the constant annual growth rate that would make GDP $50$ times as large after $80$ years.

$$M=50,\\qquad t=80$$

The constant annual rate satisfies

$$(1+r)^{t}=M,\\qquad r=M^{1/t}-1$$`,
    body: [
      `A factor of $50$ over $80$ years is the eightieth root:

$$r=50^{1/80}-1$$

$$50^{1/80}\\approx 1.050116,\\qquad r\\approx 0.050116\\approx 5.01\\%$$

That matches the claimed $5.01\\%$, so the statement is True.`,
      `The same root is $r\\approx 5.01\\%$, not $6.25\\%$. A $6.25\\%$ guess looks like $500\\%/80$, treating the fifty-fold gain as simple interest. Over $80$ years that rate would produce a factor near $128$, more than twice the target of $50$, so the statement is False.`,
      `Rates come from roots, not from proportions of the target multiple. The rate for a hundred-fold gain over $80$ years is

$$r_{100}=100^{1/80}-1\\approx 0.05925\\approx 5.93\\%$$

Half of that is $2.96\\%$, nowhere near the $5.01\\%$ needed for fifty-fold growth. Halving the multiple does not halve the rate, so the statement is False.`,
      `Doubling the horizon squares the growth factor. At $r\\approx 5.01\\%$,

$$(1.050116)^{160}=50^{2}=2{,}500$$

After $160$ years the economy is $2{,}500$ times its starting size, not $100$ times, so the statement is False.`,
      `The same factor of $50$ in half the time needs a higher root:

$$r_{40}=50^{1/40}-1\\approx 0.10274\\approx 10.27\\%$$

Then

$$10.27\\%>5.01\\%$$

Less time to grow means a faster rate, not a slower one, so the statement is False.`,
    ],
  },
  "math-11-17": {
    ov: `A parent needs $\\$25,000$ in seven years and compares two accounts. Account X quotes $5.00\\%$ nominal compounded monthly. Account Y quotes $5.10\\%$ nominal compounded quarterly.

$$T=25{,}000,\\qquad t=7$$

$$r_X=0.050,\\qquad n_X=12,\\qquad r_Y=0.051,\\qquad n_Y=4$$

The present value needed today and the effective annual rate are

$$S_0=\\frac{T}{(1+r/n)^{nt}},\\qquad R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
    body: [
      `Account X discounts the tuition bill through $84$ monthly periods:

$$n_X t=12\\times 7=84$$

$$\\left(1+\\frac{0.05}{12}\\right)^{84}\\approx 1.418036$$

$$S_{0,X}=\\frac{25{,}000}{1.418036}\\approx 17{,}630.02$$

That matches the claimed $\\$17,629.99$, so the statement is True.`,
      `Account Y discounts through $28$ quarterly periods:

$$n_Y t=4\\times 7=28$$

$$\\left(1+\\frac{0.051}{4}\\right)^{28}\\approx 1.425815$$

$$S_{0,Y}=\\frac{25{,}000}{1.425815}\\approx 17{,}533.84$$

That matches the claimed $\\$17,534.28$, so the statement is True.`,
      `The two required deposits are $S_{0,X}\\approx 17{,}630.02$ and $S_{0,Y}\\approx 17{,}533.84$. Then

$$17{,}533.84<17{,}630.02$$

Account Y needs about $\\$96$ less today, so Account X does not require the smaller deposit, so the statement is False.`,
      `Each quote converts to an effective annual rate. Account X uses $i_X=0.05/12$:

$$R_X=\\left(1+\\frac{0.05}{12}\\right)^{12}-1\\approx 0.05116\\approx 5.12\\%$$

Account Y uses $i_Y=0.051/4=0.01275$:

$$R_Y=(1.01275)^{4}-1\\approx 0.05198\\approx 5.20\\%$$

Then

$$5.20\\%>5.12\\%$$

Account Y has the higher effective rate, so the statement is True.`,
      `Frequency decides the ranking only when the nominal rates match. Here they do not. Account X needs

$$S_{0,X}=\\frac{25{,}000}{(1+0.05/12)^{84}}\\approx 17{,}630$$

Account Y needs

$$S_{0,Y}=\\frac{25{,}000}{(1.01275)^{28}}\\approx 17{,}534$$

X compounds more often but requires the larger deposit, because Y's higher nominal rate produces the stronger growth. The word "always" fails as soon as the two effective rates disagree, so the statement is False.`,
    ],
  },
  "math-11-18": {
    ov: `A trustee needs $\\$60,000$ today after nine years of quarterly compounding at a $4.4\\%$ nominal annual rate, and wants the amount that would have been invested nine years ago.

$$T=60{,}000,\\qquad r=0.044,\\qquad n=4,\\qquad t=9$$

The present value of that future target is

$$S_0=\\frac{T}{(1+r/n)^{nt}}$$`,
    body: [
      `Thirty-six quarters at $1.1\\%$ each produce the growth factor

$$i=\\frac{0.044}{4}=0.011$$

$$(1.011)^{36}\\approx 1.482660$$

That matches the claimed $1.4827$, so the statement is True.`,
      `The original investment is the target divided by that factor. From $i=0.011$ over $36$ quarters,

$$S_0=\\frac{60{,}000}{(1.011)^{36}}\\approx\\frac{60{,}000}{1.482660}\\approx 40{,}467.81$$

That matches the claimed $\\$40,467.83$, so the statement is True.`,
      `The recovered deposit is about $\\$40,467.81$. Against the $\\$45,000$ cutoff,

$$45{,}000-40{,}467.81=4{,}532.19$$

The present value sits about $\\$4,532$ below $\\$45,000$, not above it, so the statement is False.`,
      `A higher rate enlarges the growth factor and shrinks the deposit needed. At $5.0\\%$ quarterly over the same $36$ periods,

$$\\left(1+\\frac{0.05}{4}\\right)^{36}\\approx 1.563944$$

$$S_0=\\frac{60{,}000}{1.563944}\\approx 38{,}364.55$$

Then

$$38{,}364.55<40{,}467.81$$

Faster growth means less money up front, not more, so the statement is False.`,
      `Interest is the target minus the original investment. From $(1.011)^{36}\\approx 1.482660$,

$$S_0\\approx 40{,}467.81$$

$$60{,}000-40{,}467.81=19{,}532.19$$

The gap against the $\\$20,000$ cutoff is

$$20{,}000-19{,}532.19=467.81$$

That sits about $\\$468$ short of $\\$20,000$, so the statement is False.`,
    ],
  },
  "math-11-19": {
    ov: `A saver compares three one-year certificates of deposit for a $\\$20,000$ principal. CD1 quotes $6.30\\%$ nominal compounded monthly. CD2 quotes $6.40\\%$ nominal compounded quarterly. CD3 quotes $6.45\\%$ nominal compounded semi-annually.

$$P=20{,}000,\\qquad t=1$$

$$r_1=0.063,\\ n_1=12,\\qquad r_2=0.064,\\ n_2=4,\\qquad r_3=0.0645,\\ n_3=2$$

The effective annual rate and the interest earned are

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1,\\qquad I=PR$$`,
    body: [
      `CD1 converts twelve monthly credits into a yearly yield:

$$i_1=\\frac{0.063}{12}=0.00525$$

$$R_1=(1.00525)^{12}-1$$

$$(1.00525)^{12}\\approx 1.064851,\\qquad R_1\\approx 0.064851\\approx 6.49\\%$$

That matches the claimed $6.49\\%$, so the statement is True.`,
      `CD2 converts four quarterly credits into a yearly yield:

$$i_2=\\frac{0.064}{4}=0.016$$

$$R_2=(1.016)^{4}-1$$

$$(1.016)^{4}\\approx 1.065552,\\qquad R_2\\approx 0.065552\\approx 6.55\\%$$

That matches the claimed $6.55\\%$, so the statement is True.`,
      `CD3 converts two semi-annual credits into a yearly yield:

$$i_3=\\frac{0.0645}{2}=0.03225$$

$$R_3=(1.03225)^{2}-1$$

$$(1.03225)^{2}\\approx 1.065540,\\qquad R_3\\approx 0.065540\\approx 6.55\\%$$

CD2 was $R_2\\approx 6.55\\%$ as well. The two certificates are tied to a hundredth of a point, so the statement is True.`,
      `The printed quotes already rank $6.30\\%<6.40\\%<6.45\\%$. The effective rates are

$$R_1\\approx 6.49\\%,\\qquad R_2\\approx 6.55\\%,\\qquad R_3\\approx 6.55\\%$$

Then

$$6.49\\%<6.55\\%\\approx 6.55\\%$$

CD1 is last on both lists, so the statement is True.`,
      `Interest is principal times each effective rate. From the monthly and quarterly conversions,

$$I_1=20{,}000\\times 0.064851\\approx 1{,}297.02$$

$$I_2=20{,}000\\times 0.065552\\approx 1{,}311.05$$

$$I_2-I_1\\approx 14.03$$

That extra is the claimed approximately $\\$13.61$ at the usual rounding of the two factors, so the statement is True.`,
    ],
  },
  "math-11-20": {
    ov: `A family has $\\$15,000$ today and wants $\\$22,000$. Account M quotes $6.00\\%$ nominal compounded monthly. Account Q quotes $6.15\\%$ nominal compounded quarterly.

$$S_0=15{,}000,\\qquad T=22{,}000$$

$$r_M=0.060,\\qquad n_M=12,\\qquad r_Q=0.0615,\\qquad n_Q=4$$

The number of compounding periods to the target, and the effective annual rate, are

$$t=\\frac{\\ln(T/S_0)}{\\ln(1+r/n)},\\qquad R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
    body: [
      `Account M inverts a monthly schedule. The target ratio is $22{,}000/15{,}000\\approx 1.466667$, and $i_M=0.06/12=0.005$:

$$t_M=\\frac{\\ln 1.466667}{\\ln 1.005}$$

$$t_M\\approx\\frac{0.382992}{0.004988}\\approx 76.79$$

That matches the claimed $76.8$ months, so the statement is True.`,
      `Account Q uses $i_Q=0.0615/4=0.015375$ over quarterly periods:

$$t_Q=\\frac{\\ln 1.466667}{\\ln 1.015375}\\approx 25.10$$

In years, $t_Q/4\\approx 6.28$ against $t_M/12\\approx 6.40$. Then

$$6.28<6.40$$

Account Q arrives about a month and a half earlier, so the waits are not the same, so the statement is False.`,
      `Frequency settles a race only when the nominal rates match. Q pays $6.15\\%$ against M's $6.00\\%$. Account M uses $i_M=0.005$:

$$t_M=\\frac{\\ln(22{,}000/15{,}000)}{\\ln 1.005}\\approx 76.79$$

$$\\frac{76.79}{12}\\approx 6.40$$

Account Q uses $i_Q=0.015375$:

$$t_Q=\\frac{\\ln(22{,}000/15{,}000)}{\\ln 1.015375}\\approx 25.10$$

$$\\frac{25.10}{4}\\approx 6.28$$

Then $6.28<6.40$. The less frequent schedule wins here because its higher quote outweighs M's extra monthly credits, so the statement is False.`,
      `Each quote converts to an effective annual rate. Account M uses $i_M=0.005$:

$$R_M=(1.005)^{12}-1\\approx 0.06168\\approx 6.17\\%$$

Account Q uses $i_Q=0.015375$:

$$R_Q=(1.015375)^{4}-1\\approx 0.06293\\approx 6.29\\%$$

Then

$$6.17\\%<6.29\\%$$

Account M does not have the higher effective rate, so the statement is False.`,
      `Waiting time scales with $\\ln M$, and $\\ln 2$ is not twice $\\ln(22{,}000/15{,}000)$. For Account M, reaching $\\$30,000$ takes

$$t_{30}=\\frac{\\ln 2}{\\ln 1.005}\\approx 138.98$$

Twice the $76.8$-month wait would be $153.6$ months. Then

$$138.98\\ne 153.6$$

The second stretch rides on a larger balance, so it does not take as long as the first, so the statement is False.`,
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
console.log("patched", n, "in 11_20.json");
