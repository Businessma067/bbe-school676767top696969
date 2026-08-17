const fs = require('fs');
const path = 'C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts';
let src = fs.readFileSync(path, 'utf8');
const nl = src.includes('\r\n') ? '\r\n' : '\n';
const norm = src.replace(/\r\n/g, '\n');

const easy = JSON.parse(
  fs.readFileSync('C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch11_easy_all.json', 'utf8')
);
const before = Object.fromEntries(easy.map((t) => [t.id, t]));

/** Trimmed overviews: keep shared setup+formulas+key solves; cut Part 3 restatement fluff. */
const replacements = {
  'math-11-103': `A restaurant owner borrows \\$45,000 to renovate the dining room, agreeing to repay the loan in $5$ equal annual instalments at the end of each year, with interest at $10\\%$ per year compounding annually.

**Part 1: Setup.**

$K = \\$45,000$, $r = 0.10$, $n = 5$ equal annual payments.

**Part 2: Formula.**

$a = rK/[1-(1+r)^{-n}]$. Interest $= r \\times$ opening balance; principal $=$ payment $-$ interest; new balance $=$ old $-$ principal.

**Part 3: Solve.**

**1.** $a = 0.10\\times45,000/[1-(1.10)^{-5}] = 4,500/0.379079 \\approx \\$11,870.89$.

**2.** Year $1$: interest $\\$4,500.00$; principal $\\$7,370.89$; balance $\\$37,629.11$. Year $2$: interest $\\$3,762.91$; principal $\\$8,107.98$; balance $\\$29,521.14$.

**3.** Year $3$: interest $\\$2,952.11$; principal $\\$8,918.77$; balance $\\$20,602.37$. Year $4$: interest $\\$2,060.24$ is much smaller than principal $\\$9,810.65$.

**4.** Year $5$: interest $\\$1,079.17$; principal $\\$10,791.72$; balance $\\$0$. Sum of principals $= \\$45,000$ exactly.`,

  'math-11-65': `A coal mining region has $9,000$ million tons of estimated reserves. This year's output is $180$ million tons, projected to fall by $3\\%$ every year forever ($a = 180$, $k = 0.97$), with an alternate $5\\%$ decline ($k = 0.95$).

**Part 1: Setup.**

Reserves $= 9,000$ million tons; $a = 180$ million tons; $k = 0.97$ or $0.95$.

**Part 2: Formula.**

Infinite sum ($|k| < 1$): $a/(1-k)$. Finite sum: $s_n = a(1-k^{n})/(1-k)$.

**Part 3: Solve.**

**1.** Year-$2$ output: $180\\times0.97 = 174.6$ million tons.

**2.** Infinite sum at $3\\%$: $180/0.03 = 6,000$; stranded $= 9,000-6,000 = 3,000$ million tons.

**3.** At $5\\%$: sum $= 180/0.05 = 3,600$; stranded $= 5,400$ (more than under $3\\%$).

**4.** $0.97^{20} \\approx 0.5438$, so $s_{20} = 180\\times(1-0.5438)/0.03 \\approx 2,737.3$, far below $6,000$.`,

  'math-11-101': `A small bakery-supply distributor borrows \\$60,000 at the beginning of the year to buy a delivery van and a walk-in cooler. The loan is repaid in $6$ equal year-end instalments at $12\\%$ per year, compounding annually.

**Part 1: Setup.**

$K = \\$60,000$, $r = 0.12$, $n = 6$ equal annual payments.

**Part 2: Formula.**

$a = rK/[1-(1+r)^{-n}]$. Interest $= r \\times$ opening balance; principal $=$ payment $-$ interest; new balance $=$ old $-$ principal.

**Part 3: Solve.**

**1.** $a = 0.12\\times60,000/[1-(1.12)^{-6}] = 7,200/0.493369 \\approx \\$14,593.54$.

**2.** Year-$1$ interest $\\$7,200.00$; principal $\\$7,393.54$ (more than half of the payment $\\$7,296.77$); balance $\\$52,606.46$.

**3.** Year-$2$ interest $\\$6,312.77$; principal $\\$8,280.77$; balance $\\$44,325.69$.`,

  'math-11-64': `A mining company estimates lithium reserves at $18,000,000$ tons. Current extraction is a constant $300,000$ tons/year. Separately, extraction may start at $300,000$ and grow by $5\\%$ per year for $10$ years ($a = 300,000$, $k = 1.05$).

**Part 1: Setup.**

Reserves $= 18,000,000$; constant $a = 300,000$ (or $500,000$); growth case $k = 1.05$, $n = 10$.

**Part 2: Formula.**

Years to exhaustion: $t =$ reserves$/$annual extraction. Constant terms: $s_n = a\\times n$. Geometric ($k \\neq 1$): $s_n = a(k^{n}-1)/(k-1)$.

**Part 3: Solve.**

**1.** $t = 18,000,000/300,000 = 60$ years; at $500,000$/year, $t = 36$ years.

**2.** Constant extraction is the $k = 1$ case: $s_n = a\\times n$.

**3.** $1.05^{10} = 1.628894627$, so $s_{10} = 300,000\\times(1.628894627-1)/0.05 \\approx 3,773,368$ tons.

**4.** Constant $10$-year total $3,000,000$; difference $773,368 < 1,000,000$.`,

  'math-11-6': `A savings account earns a nominal annual rate of $7.2\\%$, compounded monthly. An investor wants to know how long it will take for a deposit to double.

**Part 1: Setup.**

$r = 0.072$, $n = 12$ (monthly); target: double the principal.

**Part 2: Formula.**

$i_m = r/12$; $(1+i_m)^{t} = M$; $t = \\ln M / \\ln(1+i_m)$.

**Part 3: Solve.**

**1.** $i_m = 0.072/12 = 0.006$. Solve $(1.006)^{t} = 2$: $t = \\ln 2/\\ln 1.006 \\approx 115.85$ months $\\approx 9.65$ years (not $108$).

**2.** $115.85$ months is not $58$ months; doubling time does not split that way.

**3.** At $14.4\\%$ nominal monthly, $R = (1.012)^{12}-1 \\approx 15.38\\%$, not double the original EAR $7.44\\%$ (that would be $14.88\\%$).

**4.** The same $t = \\ln(M)/\\ln(1+i)$ method works for any target multiple $M$.`,

  'math-11-87': `A supplier offers two payment options for machinery. Option $1$: pay \\$18,000 today. Option $2$: pay \\$2,500 at the end of each year for $9$ years. Using $7\\%$ interest, which has the lower present-value cost?

**Part 1: Setup.**

Option $1$: $\\$18,000$ today. Option $2$: $a = \\$2,500$, $n = 9$; $r = 0.07$ (and $0.04$ for part c); ordinary annuity.

**Part 2: Formula.**

$P_n=(a/r)[1-1/(1+r)^{n}]$; $F=P(1+r)^{n}$.

**Part 3: Solve.**

**1.** $P_9 = (2,500/0.07)[1-1/(1.07)^{9}] \\approx \\$16,288.18$; savings vs lump sum $= 18,000-16,288.18 = \\$1,711.82$ (not $\\$1,811.82$).

**2.** At $4\\%$, $P_9 \\approx \\$18,588.31$, higher than at $7\\%$ (lower rate discounts less).

**3.** Total Option-$2$ cash paid: $2,500\\times9 = \\$22,500$, exceeding the lump sum by $\\$4,500$ (not $\\$4,600$).

**4.** $F = 18,000(1.07)^{9} \\approx \\$33,092.26$, which does not exceed $\\$34,000$.`,

  'math-11-26': `A courier company's van fleet has initial value \\$60,000 and depreciates continuously at $10\\%$ per year ($\\delta = 0.10$), so $v(t) = v_0 e^{-\\delta t}$.

**Part 1: Setup.**

$v_0 = \\$60,000$; $\\delta = 0.10$ (and $0.20$ for part d); continuous compounding.

**Part 2: Formula.**

$v(t) = v_0 e^{-\\delta t}$; fraction remaining $e^{-\\delta t}$; $t = \\ln(1/f)/\\delta$.

**Part 3: Solve.**

**1.** $v(4) = 60,000 e^{-0.40} \\approx \\$40,219.20$ ($\\approx 67.03\\%$ of original).

**2.** $v(7) = 60,000 e^{-0.70} \\approx \\$29,795.12$.

**3.** At $\\delta = 0.20$: $v(4) = 60,000 e^{-0.80} \\approx \\$26,959.74$, above $\\$25,000$.

**4.** Year-$1$ loss: $60,000-54,290.25 = \\$5,709.75$; year-$4$ loss: $v(3)-v(4) \\approx \\$4,229.89$.`,

  'math-11-81': `Ms. Delgado wants exactly \\$5,000 in $3$ years to replace a commercial oven, via a single deposit today at $7\\%$ annual interest.

**Part 1: Setup.**

Target $A = \\$5,000$; $r = 0.07$ (and $0.05$ for part b); $t = 3$ years (and $6$ for part e); single deposit.

**Part 2: Formula.**

$x(1+r)^{n}=A$, so $x=A/(1+r)^{n}$.

**Part 3: Solve.**

**1.** $x = 5,000/(1.07)^{3} \\approx \\$4,081.49$.

**2.** At $5\\%$, $x = 5,000/(1.05)^{3} \\approx \\$4,319.19$, higher than at $7\\%$.

**3.** Interest earned: $5,000-4,081.49 = \\$918.51$ (not $\\$928.51$).

**4.** Doubling the target doubles $x$ to $\\$8,162.98$. For $6$ years, $x \\approx \\$3,331.71$, not half of $\\$4,081.49$.`,

  'math-11-83': `A dental clinic owner deposits \\$2,000 at the end of each year into an equipment fund earning $5\\%$ annual interest for $6$ years, and wants the future value and its present-value equivalent.

**Part 1: Setup.**

$a = \\$2,000$; $r = 0.05$; ordinary annuity; $n = 6$ (and $12$ for part e).

**Part 2: Formula.**

$F_n=(a/r)[(1+r)^{n}-1]$; $P_n=(a/r)[1-1/(1+r)^{n}]$; $F_n=P_n(1+r)^{n}$.

**Part 3: Solve.**

**1.** $F_6 = (2,000/0.05)[(1.05)^{6}-1] \\approx \\$13,603.84$; interest $= 13,603.84-12,000 = \\$1,603.84$.

**2.** $P_6 = F_6/(1.05)^{6} \\approx \\$10,151.40$ (not $\\$18,230.45$ from multiplying).

**3.** At $50\\%$ higher deposits, $F_6' = 13,603.84\\times1.5 = \\$20,405.76$.

**4.** For $n = 12$, $F_{12} \\approx \\$31,834.24$, well above double the $6$-year figure.`,

  'math-11-82': `A freelance graphic designer deposits \\$6,500 today into a business savings account earning $6\\%$ annual interest, and wants the accumulated value after $5$ and $10$ years.

**Part 1: Setup.**

$P = \\$6,500$; $r = 0.06$ (and $0.03$ for part e); annual compounding; $n = 5$ (and $10$).

**Part 2: Formula.**

$F=P(1+r)^{n}$.

**Part 3: Solve.**

**1.** $F(5) = 6,500\\times(1.06)^{5} \\approx \\$8,698.47$; interest $= \\$2,198.47$.

**2.** $F(10) = 6,500\\times(1.06)^{10} \\approx \\$11,640.51$, well short of double the $5$-year figure.

**3.** Second-five-year interest $\\$2,942.04$ exceeds the first period's $\\$2,198.47$.

**4.** At $3\\%$, $F(5) \\approx \\$7,535.28$, not half of $\\$8,698.47$.`,

  'math-11-61': `A newly launched e-commerce startup earns \\$50 million in revenue this year and expects $10\\%$ annual growth for each of the next four years — a finite geometric series with $a = \\$50$ million, $k = 1.10$, $n = 5$.

**Part 1: Setup.**

$a = \\$50$ million; $k = 1.10$; $n = 5$ years.

**Part 2: Formula.**

$s_n = a(k^{n}-1)/(k-1)$ for $k \\neq 1$; year-$t$ term $a k^{t-1}$.

**Part 3: Solve.**

**1.** Year $2$: $50\\times1.10 = \\$55$ million. Year $5$: $50\\times(1.10)^{4} = \\$73.205 \\to \\$73.21$ million.

**2.** $s_5 = 50\\times(1.10^{5}-1)/0.10 = 50\\times6.1051 \\to \\$305.26$ million.

**3.** Flat ($k = 1$) total $\\$250$ million; growth premium $\\$55.26$ million (not $\\$60$).`,
};

// Verify lengths
console.log('--- proposed lengths ---');
for (const [id, ov] of Object.entries(replacements)) {
  const diff = before[id].diff;
  const target = diff === '1/5' ? [700, 1100] : [900, 1200];
  const ok = ov.length >= target[0] && ov.length <= target[1];
  console.log(diff, id, 'before', before[id].len, 'after', ov.length, ok ? 'OK' : 'OUT');
}

// Apply replacements in normalized text then restore newlines
let out = norm;
const beforeLens = {};
const afterLens = {};
let trimmed15 = 0;
let trimmed25 = 0;
const examples = [];

for (const [id, newOv] of Object.entries(replacements)) {
  const marker = `id: \`${id}\``;
  const idPos = out.indexOf(marker);
  if (idPos < 0) throw new Error('missing id ' + id);
  const ovMarker = 'solution_overview: `';
  const ovStart = out.indexOf(ovMarker, idPos);
  if (ovStart < 0) throw new Error('missing overview ' + id);
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
  const oldOv = after.slice(0, end);
  beforeLens[id] = oldOv.length;
  afterLens[id] = newOv.length;
  if (newOv.length >= oldOv.length) {
    console.warn('WARN: not shorter', id, oldOv.length, '->', newOv.length);
  }
  out = out.slice(0, contentStart) + newOv + out.slice(contentStart + end);
  const diff = before[id].diff;
  if (diff === '1/5') trimmed15++;
  else trimmed25++;
  if (examples.length < 2) {
    examples.push({ id, diff, before: oldOv.length, after: newOv.length });
  }
}

const final = nl === '\r\n' ? out.replace(/\n/g, '\r\n') : out;
fs.writeFileSync(path, final);

console.log('\nTrimmed 1/5:', trimmed15);
console.log('Trimmed 2/5:', trimmed25);
console.log('Examples:');
for (const e of examples) console.log(e);

// Re-verify all easy lengths
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
const easy2 = tasks.filter((t) => t.diff === '1/5' || t.diff === '2/5');
console.log('\n--- post status ---');
for (const t of [...easy2].sort((a, b) => b.len - a.len)) {
  const target = t.diff === '1/5' ? 1100 : 1200;
  const floor = t.diff === '1/5' ? 700 : 900;
  const flag = t.len > target ? 'OVER' : t.len < floor ? 'UNDER' : 'ok';
  if (flag !== 'ok' || replacements[t.id]) console.log(flag, t.diff, t.id, t.len);
}

// Check no Answer. lines
if (/solution_overview: `[\s\S]*?\*\*Answer\.\*\*/.test(out)) {
  console.log('ERROR: Answer. line found in overview');
} else {
  console.log('No Answer. lines in overviews OK');
}
