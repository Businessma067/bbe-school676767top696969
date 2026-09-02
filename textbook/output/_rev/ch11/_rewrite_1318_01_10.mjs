import fs from "fs";
import path from "path";

const fp = path.join("textbook/output/_rev/ch11/01_10.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const patches = {
  "math-11-2": {
    ov: `A deposit of $\\$6,000$ earns a nominal annual rate of $8\\%$, with interest paid quarterly, for six years.

$$P=6{,}000,\\qquad r=0.08,\\qquad n=4,\\qquad t=6$$

The quarterly rate, the number of periods, and the future value are

$$i=\\frac{r}{n},\\qquad N=nt,\\qquad FV=P(1+i)^{N}$$`,
    body: [
      `A nominal quote with $n=4$ compounding dates is split evenly across those dates:

$$i=\\frac{r}{n}=\\frac{0.08}{4}$$

$$i=0.02=2.00\\%$$

That is the claimed quarterly rate, so the statement is True.`,
      `The exponent in a compound formula counts interest dates, not calendar years:

$$N=nt=4\\times 6$$

$$N=24$$

That is the claimed number of quarters, so the statement is True.`,
      `The future-value formula under quarterly compounding is

$$FV=P\\left(1+\\frac{r}{n}\\right)^{nt}$$

With $P=6{,}000$, $r=0.08$, $n=4$, and $t=6$:

$$FV=6{,}000\\times(1.02)^{24}$$

$$(1.02)^{24}\\approx 1.608437,\\qquad FV\\approx 9{,}650.62$$

The claim is $\\$9,860.00$, about $\\$209$ too high, so the statement is False.`,
      `Compound growth is exponential in time, so halving the horizon does not halve the balance. The quarterly rate is $i=0.08/4=0.02$. Over three years there are twelve quarters:

$$S(3)=6{,}000\\times(1.02)^{12}$$

$$(1.02)^{12}\\approx 1.268242,\\qquad S(3)\\approx 7{,}609.45$$

Over six years,

$$S(6)=6{,}000\\times(1.02)^{24}\\approx 9{,}650.62$$

$$\\frac{S(6)}{2}\\approx 4{,}825.31$$

Then

$$7{,}609.45>4{,}825.31$$

The three-year figure is not half of the six-year figure, so the statement is False.`,
      `Total percentage growth is the dollar gain over the original principal. From $i=0.08/4=0.02$ over $24$ quarters,

$$FV=6{,}000\\times(1.02)^{24}\\approx 9{,}650.62$$

$$\\frac{9{,}650.62-6{,}000}{6{,}000}\\approx 0.6084=60.84\\%$$

The gap against the $65\\%$ cutoff is

$$65\\%-60.84\\%=4.16$$

That is $4.16$ percentage points short of $65\\%$, so the statement is False.`,
    ],
  },
  "math-11-3": {
    ov: `A saver has $\\$10,000$ to place for one year and compares two term deposits. Offer (i) quotes $6.4\\%$ nominal with quarterly compounding. Offer (ii) quotes $6.5\\%$ nominal with interest paid twice a year.

$$P=10{,}000,\\qquad t=1$$

$$r_i=0.064,\\qquad n_i=4,\\qquad r_{ii}=0.065,\\qquad n_{ii}=2$$

The effective annual rate and the interest earned are

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1,\\qquad I=PR$$`,
    body: [
      `Offer (i) converts a quarterly schedule into a single yearly yield:

$$i_i=\\frac{0.064}{4}=0.016$$

$$R_i=(1.016)^{4}-1$$

$$(1.016)^{4}\\approx 1.065552,\\qquad R_i\\approx 0.065552\\approx 6.55\\%$$

That matches the claimed $6.55\\%$, so the statement is True.`,
      `Offer (ii) converts a semi-annual schedule into a single yearly yield:

$$i_{ii}=\\frac{0.065}{2}=0.0325$$

$$R_{ii}=(1.0325)^{2}-1$$

$$(1.0325)^{2}=1.066056,\\qquad R_{ii}=0.066056\\approx 6.61\\%$$

That matches the claimed $6.61\\%$, so the statement is True.`,
      `The better one-year offer is the one with the higher effective annual rate. Offer (i) has quarterly rate $0.064/4=0.016$, so

$$R_i=(1.016)^{4}-1\\approx 0.065552\\approx 6.55\\%$$

Offer (ii) has semi-annual rate $0.065/2=0.0325$, so

$$R_{ii}=(1.0325)^{2}-1=0.066056\\approx 6.61\\%$$

Then

$$6.61\\%>6.55\\%$$

Offer (ii) is the stronger yield, so the statement is True.`,
      `Frequency raises the effective rate only when the nominal quote is held fixed. Here the quotes differ. Offer (i) compounds four times at $6.4\\%$:

$$R_i=(1.016)^{4}-1\\approx 6.55\\%$$

Offer (ii) compounds twice at $6.5\\%$:

$$R_{ii}=(1.0325)^{2}-1\\approx 6.61\\%$$

Then

$$6.55\\%<6.61\\%$$

The extra compounding dates on Offer (i) do not produce the higher effective rate, so the statement is False.`,
      `Interest on Offer (ii) is principal times its effective annual rate. The semi-annual conversion is

$$R_{ii}=(1.0325)^{2}-1=0.066056$$

$$I_{ii}=10{,}000\\times 0.066056=660.56$$

The gap against the $\\$660$ cutoff is

$$660.56-660=0.56$$

That clears $\\$660$ by $\\$0.56$, so the statement is True.`,
    ],
  },
  "math-11-4": {
    ov: `A retail credit card charges $1.75\\%$ per month on any outstanding balance.

$$i_m=0.0175,\\qquad n=12,\\qquad t=1$$

The nominal annual rate, the effective annual rate, and a one-year future value are

$$r_{\\mathrm{nom}}=12i_m,\\qquad R=(1+i_m)^{12}-1,\\qquad FV=P(1+R)$$`,
    body: [
      `A nominal quote from a monthly charge is twelve times that charge, with no compounding built in:

$$r_{\\mathrm{nom}}=12i_m=12\\times 0.0175$$

$$r_{\\mathrm{nom}}=0.21=21.00\\%$$

The claim is $22.00\\%$, a full point too high, so the statement is False.`,
      `The effective annual rate compounds the monthly charge through twelve months:

$$R=(1.0175)^{12}-1$$

$$(1.0175)^{12}\\approx 1.231439,\\qquad R\\approx 0.231439\\approx 23.14\\%$$

The claim is $21.75\\%$, which sits near the nominal $21.00\\%$ rather than at $23.14\\%$, so the statement is False.`,
      `An unpaid $\\$2,000$ grows by the twelve-month factor. From $i_m=0.0175$,

$$(1.0175)^{12}\\approx 1.231439$$

$$FV=2{,}000\\times 1.231439\\approx 2{,}462.88$$

The claim is $\\$2,420.00$, as if $2{,}000\\times 1.21$ had been used, so the statement is False.`,
      `The gap is the effective annual rate minus the nominal quote. Twelve monthly charges of $1.75\\%$ give

$$r_{\\mathrm{nom}}=12\\times 1.75\\%=21.00\\%$$

$$R=(1.0175)^{12}-1\\approx 23.14\\%$$

$$23.14\\%-21.00\\%=2.14$$

That is $2.14$ percentage points, which exceeds $2.00$, so the statement is True.`,
      `The hypothetical replaces the monthly charge with $1.50\\%$ and rebuilds the yearly yield:

$$R=(1.015)^{12}-1$$

$$(1.015)^{12}\\approx 1.195618,\\qquad R\\approx 0.195618\\approx 19.56\\%$$

The gap against the $20\\%$ cutoff is

$$20\\%-19.56\\%=0.44$$

That sits $0.44$ percentage points short of $20\\%$, so the statement is False.`,
    ],
  },
  "math-11-5": {
    ov: `A veterinary clinic deposits $\\$15,000$ for one year at a nominal annual rate of $5.6\\%$, compounded quarterly.

$$P=15{,}000,\\qquad r=0.056,\\qquad n=4,\\qquad t=1$$

The quarterly rate, the effective annual rate, and the year-end balance are

$$i=\\frac{r}{n},\\qquad R=(1+i)^{n}-1,\\qquad FV=P(1+R)$$`,
    body: [
      `A $5.6\\%$ nominal quote paid quarterly is divided evenly across four interest dates:

$$i=\\frac{0.056}{4}$$

$$i=0.014=1.40\\%$$

That is the claimed quarterly rate, so the statement is True.`,
      `The effective annual rate compounds the quarterly rate through four quarters:

$$i=\\frac{0.056}{4}=0.014$$

$$R=(1.014)^{4}-1$$

$$(1.014)^{4}\\approx 1.057187,\\qquad R\\approx 0.057187\\approx 5.72\\%$$

That matches the claimed $5.72\\%$, so the statement is True.`,
      `The year-end balance is the deposit times the four-quarter growth factor. From $i=0.056/4=0.014$,

$$(1.014)^{4}\\approx 1.057187$$

$$FV=15{,}000\\times 1.057187\\approx 15{,}857.81$$

That is the claimed balance, so the statement is True.`,
      `With the nominal rate held fixed, extra compounding dates can only raise the effective yield. Quarterly compounding gave

$$R_{q}=(1.014)^{4}-1\\approx 5.72\\%$$

Monthly compounding at the same $5.6\\%$ uses $i_m=0.056/12$:

$$R_{m}=\\left(1+\\frac{0.056}{12}\\right)^{12}-1\\approx 0.05746\\approx 5.75\\%$$

Then

$$5.75\\%>5.72\\%$$

Monthly is the stronger schedule, not the weaker one, so the statement is False.`,
      `The gap is the quarterly effective rate minus the nominal quote. From $i=0.014$,

$$R=(1.014)^{4}-1\\approx 0.057187\\approx 5.72\\%$$

$$5.72\\%-5.60\\%=0.12$$

That is $0.12$ percentage points, which is less than $0.20$, so the statement is False.`,
    ],
  },
  "math-11-6": {
    ov: `A savings account quotes a nominal annual rate of $7.2\\%$, compounded monthly. The question is how long a deposit takes to double.

$$r=0.072,\\qquad n=12,\\qquad M=2$$

The monthly rate and the number of months to a target multiple $M$ are

$$i_m=\\frac{r}{n},\\qquad (1+i_m)^{t}=M,\\qquad t=\\frac{\\ln M}{\\ln(1+i_m)}$$`,
    body: [
      `A $7.2\\%$ nominal quote with monthly compounding is spread evenly over twelve interest dates:

$$i_m=\\frac{0.072}{12}$$

$$i_m=0.006=0.60\\%$$

That is the claimed monthly rate, so the statement is True.`,
      `Doubling means the monthly growth factor raised to $t$ equals $2$. From $i_m=0.072/12=0.006$,

$$(1.006)^{t}=2,\\qquad t=\\frac{\\ln 2}{\\ln 1.006}$$

$$t\\approx\\frac{0.693147}{0.005982}\\approx 115.87$$

The claim is $108$ months, about eight months too short, so the statement is False.`,
      `The recovered doubling time is about $115.87$ months, not $58$. After $58$ months the growth factor is only

$$(1.006)^{58}\\approx 1.415$$

which is a $41.5\\%$ gain, not a doubling. Exponential growth reaches $\\sqrt{2}$ at half the doubling time, so the statement is False.`,
      `The original effective annual rate at $7.2\\%$ monthly is

$$R=(1.006)^{12}-1\\approx 0.074424\\approx 7.44\\%$$

At a doubled nominal quote of $14.4\\%$, the monthly rate is $0.144/12=0.012$, so

$$R_{2}=(1.012)^{12}-1\\approx 0.15389\\approx 15.39\\%$$

Twice the original effective rate would be $14.88\\%$. Then

$$15.39\\%\\ne 14.88\\%$$

Doubling the nominal quote does not exactly double the effective yield, so the statement is False.`,
      `The inversion $t=\\ln M/\\ln(1+i_m)$ never used the number $2$. Any target multiple $M>1$ simply swaps in $\\ln M$:

$$t=\\frac{\\ln M}{\\ln(1+i_m)}$$

Because $\\ln(1.006)>0$, the factor $(1.006)^{t}$ is strictly increasing, so every such $M$ is reached at exactly one time, so the statement is True.`,
    ],
  },
  "math-11-7": {
    ov: `A finance student converts a fixed nominal annual rate of $15\\%$ into an effective yearly rate at three compounding frequencies.

$$r=0.15,\\qquad n=2,\\qquad n=4,\\qquad n=12$$

For each frequency the effective annual rate is

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
    body: [
      `Semi-annual compounding splits $15\\%$ across two dates:

$$i=\\frac{0.15}{2}=0.075$$

$$R=(1.075)^{2}-1$$

$$(1.075)^{2}=1.155625,\\qquad R=0.155625\\approx 15.56\\%$$

That matches the claimed $15.56\\%$, so the statement is True.`,
      `Quarterly compounding splits $15\\%$ across four dates:

$$i=\\frac{0.15}{4}=0.0375$$

$$R=(1.0375)^{4}-1$$

$$(1.0375)^{4}\\approx 1.158650,\\qquad R\\approx 0.158650\\approx 15.87\\%$$

That matches the claimed $15.87\\%$, so the statement is True.`,
      `Monthly compounding splits $15\\%$ across twelve dates:

$$i=\\frac{0.15}{12}=0.0125$$

$$R=(1.0125)^{12}-1$$

$$(1.0125)^{12}\\approx 1.160755,\\qquad R\\approx 0.160755\\approx 16.08\\%$$

That matches the claimed $16.08\\%$, so the statement is True.`,
      `With the nominal rate held fixed, extra compounding dates raise the yearly yield. The three conversions are

$$R_{2}=(1.075)^{2}-1\\approx 15.56\\%$$

$$R_{4}=(1.0375)^{4}-1\\approx 15.87\\%$$

$$R_{12}=(1.0125)^{12}-1\\approx 16.08\\%$$

Then

$$15.56\\%<15.87\\%<16.08\\%$$

The effective rate rises steadily with frequency, so the statement is True.`,
      `The two successive jumps are

$$15.87\\%-15.56\\%=0.31$$

$$16.08\\%-15.87\\%=0.21$$

Then

$$0.31>0.21$$

The semi-annual-to-quarterly step is the larger one, not the smaller, so the statement is False.`,
    ],
  },
  "math-11-8": {
    ov: `A grandparent deposits $\\$4,000$ into a trust earning a nominal annual rate of $6\\%$, compounded monthly, for ten years.

$$S_0=4{,}000,\\qquad r=0.06,\\qquad n=12,\\qquad t=10$$

The monthly rate, the number of periods, and the future value are

$$i=\\frac{r}{n},\\qquad N=nt,\\qquad S(t)=S_0(1+i)^{N}$$`,
    body: [
      `A $6\\%$ nominal quote compounded monthly is split across twelve interest dates:

$$i=\\frac{0.06}{12}$$

$$i=0.005=0.50\\%$$

That is the claimed monthly rate, so the statement is True.`,
      `The exponent counts monthly credits over the ten-year horizon:

$$N=nt=12\\times 10$$

$$N=120$$

That is the claimed number of periods, so the statement is True.`,
      `The ten-year balance uses $i=0.06/12=0.005$ over $120$ months:

$$S(10)=4{,}000\\times(1.005)^{120}$$

$$(1.005)^{120}\\approx 1.819397,\\qquad S(10)\\approx 7{,}277.59$$

That matches the claimed $\\$7,277.60$, so the statement is True.`,
      `The growth factor over those $120$ months is

$$(1.005)^{120}\\approx 1.8194$$

Then

$$1.8194<2$$

A factor of $1.82$ is an $82\\%$ gain, not a $100\\%$ gain, so the statement is False.`,
      `With the nominal rate held fixed, fewer compounding dates lower the accumulation. Monthly compounding gave

$$S_{m}=4{,}000\\times(1.005)^{120}\\approx 7{,}277.59$$

Annual compounding uses $n=1$:

$$S_{a}=4{,}000\\times(1.06)^{10}$$

$$(1.06)^{10}\\approx 1.790848,\\qquad S_{a}\\approx 7{,}163.39$$

Then

$$7{,}163.39<7{,}277.59$$

Annual compounding finishes behind, not ahead, so the statement is False.`,
    ],
  },
  "math-11-9": {
    ov: `An investment fund must grow $\\$50,000$ into $\\$80,000$ over eight years, with interest compounded quarterly.

$$S_0=50{,}000,\\qquad S=80{,}000,\\qquad n=4,\\qquad t=8$$

The required nominal annual rate is

$$r=n\\left[\\left(\\frac{S}{S_0}\\right)^{1/(nt)}-1\\right]$$`,
    body: [
      `The fund must turn a factor of $1.6$ through $32$ quarters:

$$\\left(1+\\frac{r}{4}\\right)^{32}=\\frac{80{,}000}{50{,}000}=1.6$$

$$1+\\frac{r}{4}=(1.6)^{1/32}\\approx 1.014796$$

$$r\\approx 4\\times 0.014796=0.05918\\approx 5.92\\%$$

That matches the claimed $5.92\\%$, so the statement is True.`,
      `The quarterly rate is the thirty-second root already isolated, written as a percentage:

$$(1.6)^{1/32}\\approx 1.014796$$

$$i\\approx 0.014796\\approx 1.48\\%$$

That is one-fourth of the $5.92\\%$ nominal quote, so the statement is True.`,
      `The target factor stays at $1.6$, so shortening the term to four years leaves $16$ quarters and raises the root:

$$1+\\frac{r}{4}=(1.6)^{1/16}\\approx 1.029811$$

$$r\\approx 4\\times 0.029811=0.11924\\approx 11.92\\%$$

Then

$$11.92\\%>5.92\\%$$

Less time to grow means a higher required rate, not a lower one, so the statement is False.`,
      `More frequent compounding does part of the work, so the required nominal quote falls. Over $96$ months the same factor $1.6$ needs

$$r=12\\left[(1.6)^{1/96}-1\\right]\\approx 12\\times 0.004908=0.05890\\approx 5.89\\%$$

Then

$$5.89\\%<5.92\\%$$

Monthly compounding needs a slightly lower nominal rate, not a higher one, so the statement is False.`,
      `The dollar gain against the starting amount is

$$\\frac{80{,}000-50{,}000}{50{,}000}=0.60=60\\%$$

The gap against the $65\\%$ cutoff is

$$65\\%-60\\%=5$$

That is five percentage points short of $65\\%$, so the statement is False.`,
    ],
  },
  "math-11-10": {
    ov: `A borrower compares two one-year loan terms. Option (a) quotes $10.80\\%$ nominal with annual compounding. Option (b) quotes $10.40\\%$ nominal with quarterly compounding.

$$r_a=0.1080,\\qquad n_a=1,\\qquad r_b=0.1040,\\qquad n_b=4,\\qquad t=1$$

The effective annual rate for either option is

$$R=\\left(1+\\frac{r}{n}\\right)^{n}-1$$`,
    body: [
      `Option (a) compounds once, so its effective rate equals the quote:

$$R_a=10.80\\%$$

Option (b) has quarterly rate $0.104/4=0.026$, so

$$R_b=(1.026)^{4}-1$$

$$(1.026)^{4}\\approx 1.108127,\\qquad R_b\\approx 0.108127\\approx 10.81\\%$$

Then

$$10.80\\%<10.81\\%$$

Option (a) is not the higher effective rate, so the statement is False.`,
      `Option (b) converts four quarterly credits into a yearly yield:

$$i_b=\\frac{0.104}{4}=0.026$$

$$R_b=(1.026)^{4}-1\\approx 0.108127\\approx 10.81\\%$$

That matches the claimed $10.81\\%$, so the statement is True.`,
      `A borrower pays the effective rate, not the printed nominal quote. Option (a) is $R_a=10.80\\%$. Option (b) is

$$R_b=(1.026)^{4}-1\\approx 10.81\\%$$

Then

$$10.81\\%>10.80\\%$$

The lower nominal quote is the slightly more expensive loan, so the statement is False.`,
      `Cost to the borrower is the same effective-rate ranking. Annual compounding on (a) leaves

$$R_a=10.80\\%$$

Quarterly compounding on (b) leaves $R_b\\approx 10.81\\%$. Then

$$10.80\\%<10.81\\%$$

Option (a) is the cheaper of the two, so the statement is False.`,
      `The gap between the two effective rates is

$$R_b-R_a\\approx 10.8127\\%-10.80\\%=0.013$$

That is $0.013$ percentage points, which is less than $0.05$, so the statement is False.`,
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
console.log("patched", n, "in 01_10.json");
