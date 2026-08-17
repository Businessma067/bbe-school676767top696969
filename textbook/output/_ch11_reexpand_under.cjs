const fs = require('fs');
const path = 'C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts';
let src = fs.readFileSync(path, 'utf8');
const nl = src.includes('\r\n') ? '\r\n' : '\n';
let out = src.replace(/\r\n/g, '\n');

/** Re-expand over-trimmed overviews into target bands (essential content, not fluff). */
const replacements = {
  'math-11-65': `A coal mining region has $9,000$ million tons of estimated reserves. This year's output is $180$ million tons, and analysts project output will fall by $3\\%$ every year forever — an infinite geometric series with $a = 180$ million tons and $k = 0.97$. A second scenario uses a steeper $5\\%$ decline ($k = 0.95$) from the same starting output.

**Part 1: Setup.**

Reserves $= 9,000$ million tons; $a = 180$ million tons; $k = 0.97$ ($3\\%$ decline) or $k = 0.95$ ($5\\%$ decline).

**Part 2: Formula.**

Infinite sum ($|k| < 1$): $a/(1-k)$. Finite sum of first $n$ terms: $s_n = a(1-k^{n})/(1-k)$.

**Part 3: Solve.**

**1.** Year-$2$ output: $180\\times0.97 = 174.6$ million tons.

**2.** Infinite sum at $3\\%$: $180/(1-0.97) = 180/0.03 = 6,000$ million tons; stranded $= 9,000-6,000 = 3,000$ million tons.

**3.** At $5\\%$: sum $= 180/0.05 = 3,600$; stranded $= 5,400$ million tons — more than under the $3\\%$ case.

**4.** $0.97^{20} \\approx 0.5438$, so $s_{20} = 180\\times(1-0.5438)/0.03 \\approx 2,737.3$ million tons, far below the infinite total of $6,000$.`,

  'math-11-64': `A mining company estimates its lithium reserves at $18,000,000$ tons. Current annual extraction is a constant $300,000$ tons per year. Separately, analysts model extraction starting at $300,000$ tons and growing by $5\\%$ per year for $10$ years — a finite geometric series with $a = 300,000$ and $k = 1.05$.

**Part 1: Setup.**

Reserves $= 18,000,000$ tons; constant extraction $a = 300,000$ tons/year (or $500,000$); growth scenario $a = 300,000$, $k = 1.05$, $n = 10$.

**Part 2: Formula.**

Years to exhaustion: $t =$ reserves$/$annual extraction. Constant terms ($k = 1$): $s_n = a\\times n$. Geometric ($k \\neq 1$): $s_n = a(k^{n}-1)/(k-1)$.

**Part 3: Solve.**

**1.** $t = 18,000,000/300,000 = 60$ years; at $500,000$ tons/year, $t = 36$ years.

**2.** Constant extraction of $a$ each year for $n$ years sums to $a\\times n$ — exactly the $k = 1$ case.

**3.** $1.05^{10} = 1.628894627$, so $s_{10} = 300,000\\times(1.628894627-1)/0.05 = 3,773,367.76 \\approx 3,773,368$ tons.

**4.** Constant-rate $10$-year total: $300,000\\times10 = 3,000,000$ tons; difference $773,368 < 1,000,000$.`,

  'math-11-6': `A savings account earns a nominal annual rate of $7.2\\%$, compounded monthly. An investor wants to know how long it will take for a deposit to double in value.

**Part 1: Setup.**

Nominal annual rate $r = 7.2\\% = 0.072$; compounding frequency $n = 12$ (monthly); target: double the principal.

**Part 2: Formula.**

Monthly periodic rate $i_m = r/12$; growth condition $(1+i_m)^{t} = M$; solve $t = \\ln M / \\ln(1+i_m)$.

**Part 3: Solve.**

**1.** Periodic rate: $0.072/12 = 0.006 = 0.60\\%$.

**2.** Solve $(1.006)^{t} = 2$: $t = \\ln 2/\\ln 1.006 \\approx 0.693147/0.0059821 \\approx 115.85$ months $\\approx 9.65$ years (not $108$ months).

**3.** $115.85$ months is not $58$ months; doubling time does not split that way along the exponential curve.

**4.** At $14.4\\%$ nominal monthly, $R = (1.012)^{12}-1 \\approx 15.38\\%$, but double the original $7.44\\%$ EAR would be $14.88\\%$ — doubling the nominal rate does not exactly double the EAR.

**5.** The same $t = \\ln(M)/\\ln(1+i)$ method works for any target multiple $M$.`,

  'math-11-87': `A supplier offers a company two payment options for a piece of machinery. Option $1$: pay \\$18,000 today. Option $2$: pay \\$2,500 at the end of each year for $9$ years. Using an interest rate of $7\\%$, which option has the lower present-value cost?

**Part 1: Setup.**

Option $1$: lump sum $\\$18,000$ today. Option $2$: $a = \\$2,500$, $n = 9$ years; $r = 0.07$ (and $0.04$ for part c); ordinary annuity.

**Part 2: Formula.**

$P_n=(a/r)[1-1/(1+r)^{n}]$; $F=P(1+r)^{n}$.

**Part 3: Solve.**

**1.** $P_9 = (2,500/0.07)[1-1/(1.07)^{9}] = 35,714.29\\times0.456069 = \\$16,288.18$; savings vs Option $1$: $18,000-16,288.18 = \\$1,711.82$ (not $\\$1,811.82$).

**2.** At $4\\%$, $P_9 = (2,500/0.04)[1-1/(1.04)^{9}] = 62,500\\times0.297413 = \\$18,588.31$, higher than at $7\\%$ because a lower rate discounts future payments less.

**3.** Total Option-$2$ payments: $2,500\\times9 = \\$22,500$, exceeding the lump sum by $\\$4,500$ (not $\\$4,600$).

**4.** Growing the lump sum forward: $F = 18,000(1.07)^{9} = 18,000\\times1.838459 = \\$33,092.26$, which does not exceed $\\$34,000$.`,

  'math-11-26': `A courier company's van fleet has a combined initial value of \\$60,000 and depreciates continuously at an annual rate of $10\\%$ with $\\delta = 0.10$, so its value after $t$ years follows $v(t) = v_0 e^{-\\delta t}$.

**Part 1: Setup.**

$v_0 = \\$60,000$; annual depreciation rate $\\delta = 0.10$ (and $0.20$ for part d); continuous compounding.

**Part 2: Formula.**

$v(t) = v_0 e^{-\\delta t}$; fraction remaining equals $e^{-\\delta t}$; time for fraction $f$: $t = \\ln(1/f)/\\delta$.

**Part 3: Solve.**

**1.** $v(4) = 60,000\\times e^{-0.40} = 60,000\\times0.6703200 = \\$40,219.20$ ($\\approx 67.03\\%$ of original).

**2.** $v(7) = 60,000\\times e^{-0.70} = 60,000\\times0.4965853 = \\$29,795.12$.

**3.** At $\\delta = 0.20$: $v(4) = 60,000\\times e^{-0.80} = 60,000\\times0.4493290 = \\$26,959.74$, which is above $\\$25,000$, not below.

**4.** $v(1) = \\$54,290.25$, so year-$1$ loss $= \\$5,709.75$; $v(3) = \\$44,449.09$, so year-$4$ loss $= v(3)-v(4) = \\$4,229.89$.`,

  'math-11-81': `Ms. Delgado, the bakery owner from a previous chapter, now wants to have exactly \\$5,000 available in $3$ years to replace a commercial oven, and plans to make a single deposit today into an account earning $7\\%$ annual interest.

**Part 1: Setup.**

Target future amount $A = \\$5,000$; $r = 0.07$ (and $0.05$ for part b); annual compounding, single deposit; $t = 3$ years (and $6$ for part e).

**Part 2: Formula.**

$x(1+r)^{n}=A$, so the required deposit is $x=A/(1+r)^{n}$.

**Part 3: Solve.**

**1.** $x = 5,000/(1.07)^{3} = 5,000/1.225043 = \\$4,081.49$.

**2.** At $5\\%$, $x = 5,000/(1.05)^{3} = 5,000/1.157625 = \\$4,319.19$, higher than $\\$4,081.49$, not lower.

**3.** Interest earned: $5,000.00-4,081.49 = \\$918.51$ (not $\\$928.51$).

**4.** Doubling the target to $\\$10,000$ doubles $x$ to $\\$8,162.98$. Extending to $6$ years: $x = 5,000/(1.07)^{6} = \\$3,331.71$, which is not half of $\\$4,081.49$.`,

  'math-11-82': `A freelance graphic designer deposits \\$6,500 today into a business savings account earning $6\\%$ annual interest, and wants to project the accumulated value after $5$ years, and again after a longer $10$-year horizon.

**Part 1: Setup.**

Present deposit $P = \\$6,500$; $r = 0.06$ (and $0.03$ for part e); annual compounding, single deposit; $n = 5$ years (and $10$ for parts c, d).

**Part 2: Formula.**

A present deposit accumulates according to $F=P(1+r)^{n}$.

**Part 3: Solve.**

**1.** $F(5) = 6,500\\times(1.06)^{5} = 6,500\\times1.338226 = \\$8,698.47$; interest over five years $= \\$2,198.47$.

**2.** $F(10) = 6,500\\times(1.06)^{10} = 6,500\\times1.790847 = \\$11,640.51$, well short of double the $5$-year figure $\\$17,396.94$.

**3.** Interest in the second five years: $11,640.51-8,698.47 = \\$2,942.04$, larger than the first period's $\\$2,198.47$.

**4.** At $3\\%$, $F(5) = 6,500\\times(1.03)^{5} = \\$7,535.28$, which is not half of $\\$8,698.47$.`,

  'math-11-61': `A newly launched e-commerce startup earns \\$50 million in revenue this year and expects revenue to grow by $10\\%$ annually for each of the next four years, forming a finite geometric series with first term $a = \\$50$ million and quotient $k = 1.10$ over $n = 5$ years.

**Part 1: Setup.**

$a$ (year-$1$ revenue) $= \\$50$ million; $k = 1.10$; $n = 5$ years.

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$ for $k \\neq 1$; term in year $t$: $a k^{t-1}$.

**Part 3: Solve.**

**1.** Year-$2$ revenue: $50\\times1.10 = \\$55.00$ million.

**2.** Year-$5$ revenue: $50\\times(1.10)^{4} = 50\\times1.4641 = \\$73.205 \\to \\$73.21$ million.

**3.** $k^{5} = 1.10^{5} = 1.61051$; $s_5 = 50\\times(1.61051-1)/0.10 = 50\\times6.1051 \\to \\$305.26$ million.

**4.** Flat-revenue total ($k = 1$): $50\\times5 = \\$250.00$ million; difference $305.255-250 = \\$55.26$ million (not $\\$60$).`,
};

console.log('--- proposed lengths ---');
for (const [id, ov] of Object.entries(replacements)) {
  console.log(id, ov.length);
}

for (const [id, newOv] of Object.entries(replacements)) {
  const marker = `id: \`${id}\``;
  const idPos = out.indexOf(marker);
  if (idPos < 0) throw new Error('missing id ' + id);
  const ovMarker = 'solution_overview: `';
  const ovStart = out.indexOf(ovMarker, idPos);
  const contentStart = ovStart + ovMarker.length;
  const after = out.slice(contentStart);
  let end = -1;
  for (let j = 0; j < after.length; j++) {
    if (after[j] === '`' && /^`,\s/.test(after.slice(j, j + 3))) {
      end = j;
      break;
    }
  }
  if (end < 0) throw new Error('no end ' + id);
  const oldLen = end;
  out = out.slice(0, contentStart) + newOv + out.slice(contentStart + end);
  console.log('replaced', id, oldLen, '->', newOv.length);
}

const final = nl === '\r\n' ? out.replace(/\n/g, '\r\n') : out;
fs.writeFileSync(path, final);

// Verify all easy
const parts = out.split(/\n  \{\n    id: `/);
const tasks = [];
for (let i = 1; i < parts.length; i++) {
  const block = parts[i];
  const id = block.slice(0, block.indexOf('`'));
  const diffM = block.match(/difficulty_level: `([^`]+)`/);
  const ovMarker = 'solution_overview: `';
  const ovStart = block.indexOf(ovMarker);
  if (!diffM || ovStart < 0) continue;
  const after = block.slice(ovStart + ovMarker.length);
  let end = -1;
  for (let j = 0; j < after.length; j++) {
    if (after[j] === '`' && /^`,\s/.test(after.slice(j, j + 3))) {
      end = j;
      break;
    }
  }
  if (end < 0) continue;
  tasks.push({ id, diff: diffM[1], len: after.slice(0, end).length });
}
const easy = tasks.filter((t) => t.diff === '1/5' || t.diff === '2/5');
console.log('\n--- status (edited ids + out-of-band) ---');
const edited = new Set(Object.keys(replacements).concat([
  'math-11-103', 'math-11-101', 'math-11-83',
]));
for (const t of [...easy].sort((a, b) => b.len - a.len)) {
  const target = t.diff === '1/5' ? 1100 : 1200;
  const floor = t.diff === '1/5' ? 700 : 900;
  const flag = t.len > target ? 'OVER' : t.len < floor ? 'UNDER' : 'ok';
  if (flag !== 'ok' || edited.has(t.id)) console.log(flag, t.diff, t.id, t.len);
}
