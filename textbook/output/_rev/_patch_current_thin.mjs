import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const thin = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_current_thin.json"), "utf8"),
);

/** Body only (no header). Keep original numbers; add unique trap/meaning/flip prose. */
const bodies = {
  "math-11-5:B":
    "The overview already compounded $(1.014)^{4} \\approx 1.057187$ to about $5.72\\%$. Reporting the nominal $5.6\\%$ as if it were already effective would ignore the extra from four intra-year credits. Those four $1.40\\%$ dates produce interest on earlier interest; annual compounding is what would collapse $R$ back to $5.6\\%$. Letter C then multiplies the deposit by this $1.057187$, so the rate here is the growth factor, not the dollar balance.",

  "math-11-14:E":
    "The overview's gap is $25.34\\% - 22.80\\% \\approx 2.54$ percentage points, about $0.46$ short of $3.00$. A $3$-point premium would need a still higher monthly charge than $1.9\\%$. Intra-year interest-on-interest is real on this card, just not large enough to clear three full points on a $22.80\\%$ nominal. Rounding $2.54$ up to $3$ is how the wording gets written; the recovered gap stays below the cutoff.",

  "math-11-15:B":
    "The overview already raised $(1.025)^{4}$ to about $1.103813$, so $R \\approx 10.38\\%$. Four credits a year, with the nominal quote held at $10\\%$, sit above the semi-annual $10.25\\%$. Copying $(1.05)^{2} = 1.1025$ into this letter would report the twice-a-year yield instead. The extra $0.13$ point is the two additional interest dates, not a new conversion formula.",

  "math-11-15:C":
    "Monthly compounding is the third conversion: $(1.0083333)^{12} \\approx 1.104713$, so $R \\approx 10.47\\%$. The sequence $10.25\\%$, $10.38\\%$, $10.47\\%$ is one nominal rate sampled at three frequencies. Stopping at the printed $10\\%$ would miss all twelve credits. A solver who copied the quarterly $10.38\\%$ here would be one frequency too low on the same $10\\%$ quote.",

  "math-11-21:E":
    "The overview has $e^{0.05} \\approx 1.0512711$, which rounds to $1.0513$, not $1.0400$. A factor of $1.0400$ would describe a $4\\%$ continuous rate, not the bakery's $5\\%$. Four-decimal rounding still keeps the leading $1.051$, so $1.0400$ is a different exponent. Letter A then multiplies $\\$4{,}500$ by $1.0512711$; using $1.0400$ there would understate the year-end balance.",

  "math-11-24:A":
    "Yearly compounding at $10\\%$ is just $1 + 0.10$, which is step 1 of the overview: $K_{\\mathrm{yearly}} = 1.1000$. No intra-year credits are built into that factor. It is also the only schedule here whose effective rate equals the nominal quote. Using $(1.05)^{2}$ or $e^{0.10}$ on this letter would be answering B or C instead of the once-a-year clock.",

  "math-11-24:B":
    "Two half-year credits of $5\\%$ square to $(1.05)^{2} = 1.1025$, already in the overview. That extra $0.0025$ is interest on the mid-year credit, not a second independent formula. Linear $10\\%$ would have stayed at $1.1000$. The $\\$75{,}000$ dollar gaps in later letters are this $0.0025$, and the continuous leftover, scaled by principal.",

  "math-11-24:C":
    "The overview already evaluated $e^{0.10} \\approx 1.1051709$, which rounds to $1.1052$. Continuous compounding sits above both finite schedules because interest is credited at every instant. Four-decimal rounding does not drop it back to $1.1025$ or $1.1000$. A solver who stopped at $1+0.10$ would be reading the yearly factor, the weakest of the three.",

  "math-11-25:B":
    "Two years double the exponent to $0.09$, which is the overview's $S(2) = 103,946.56$. That is $S(1)$ times the same $e^{0.045}$ factor again, not a second independent calculation. Adding another $\\$4{,}372.65$ as if year-two dollars matched year one would undershoot, because the base is already $\\$99{,}372.65$. The recovered balance already includes the extra from compounding on year one's interest.",

  "math-11-27:B":
    "By construction, $e^{0.055 \\times 12.6027} = 2$, so the overview's check is $18,000 \\times 2 = 36,000.00$. That is the definition of doubling time, not a second compounding calculation. Any other balance at $t = 12.60$ would mean the logarithm had not solved $e^{rt}=2$. Growing $\\$18{,}000$ at $5.5\\%$ simple interest for $12.60$ years would miss the exact doubling.",

  "math-11-28:D":
    "Time is inversely proportional to $\\delta$. Halving $0.18$ to $0.09$ doubles the overview's $5.09$ years to $10.18$. A slower write-down takes longer to reach the same remaining fraction. Leaving the time at $5.09$ would require the rate to stay at $18\\%$. The remaining-value target is still $40\\%$ of $\\$120{,}000$; only the clock stretches.",

  "math-11-29:A":
    "The overview already subtracted $25,761.36 - 25,750.00 = 11.36$. At a low rate the two schedules barely separate; $\\$11$ on $\\$25{,}000$ is about four hundredths of a percent. Simple $3\\%$ and $e^{0.03}$ sit close because the extra from continuous crediting is tiny at this quote. Letter B's $15\\%$ gap of $\\$295.86$ is the same comparison at a rate where that extra actually shows.",

  "math-11-31:C":
    "The overview already ran both: linear $\\$38{,}333.33$ against exponential $\\$39{,}078.52$. Straight-line growth ignores that each extra year compounds on a larger base, so the two projections cannot agree. The exponential sits about $\\$745$ higher because years 4 and 5 earn interest on a larger stock than years 1 to 3 averaged. Equality would need a constant dollar increment, which continuous growth does not produce.",

  "math-11-31:E":
    "A slower assumed rate cannot overshoot the observed balance. At $6\\%$, $28,000 \\times e^{0.18} \\approx 33,522$, about $\\$678$ below $\\$34{,}200$. The data imply $6.67\\%$, so $6.00\\%$ undershoots. Clearing $\\$34{,}200$ at three years would need $r$ at least that recovered $6.67\\%$; $6\\%$ is on the wrong side of the implied quote.",

  "math-11-32:C":
    "Bank Z compounds quarterly at $7.0\\%$ over eight periods, which is the overview's $S_Z = 68,932.91$. The highest nominal quote wins here even with the lowest frequency. Copying X's continuous product $60,000 \\times e^{0.136}$ into this letter would report the weakest offer. Z's $(1.0175)^{8}$ is the one that lands at $\\$68{,}932.91$.",

  "math-11-32:D":
    "The overview already ordered $68,740.91 < 68,851.32 < 68,932.91$. Frequency is a tie-breaker only when nominal rates match; here X's $6.8\\%$ is simply too low. Continuous compounding is the strongest clock at a fixed quote, but it cannot rescue a $0.2$ point shortfall against Z's $7.0\\%$. Matching X to $7\\%$ is letter E, and that is the hypothetical that would reverse this ranking.",

  "math-11-34:B":
    "The overview already recorded $t \\approx 10.06$ and the common value $\\$74{,}767.44$. At that instant A's growth has exactly offset B's decay from a five-times-larger start. Before $10.06$ years B is still ahead; after it, A is. A solver who compared opening values and stopped would never see the crossing. The common $\\$74{,}767.44$ is the check that both formulas agree at that date.",

  "math-11-34:D":
    "The ratio $\\frac{A(t)}{B(t)}$ grows like $e^{0.16 t}$ from a start of $\\frac{1}{5}$. That exponential crosses $1$ at $t \\approx 10.06$ and then keeps climbing, so a crossover is guaranteed. Never-overtaking would need A's growth rate at or below B's decay, which would keep the ratio from reaching $1$. Letter B already sits on the crossing; this letter only asks whether that crossing can be postponed forever.",

  "math-11-35:C":
    "The overview already ordered $42,800.00 < 42,874.36 < 42,891.60 < 42,900.33$. With the nominal rate held fixed, more frequent crediting can only raise the accumulation. Reversing any adjacent pair would require a different quote on that schedule. Letter A is the annual floor and letter E is the continuous ceiling; this letter is only that the four recovered values already sit in that order.",

  "math-11-37:A":
    "Four years of continuous $10\\%$ carry the exponent $0.40$, which is the first product in the overview: $1,800,000 \\times e^{0.40} = 2,685,284.46$. That is the expansion-phase endpoint, before the slower maturity phase begins. Growing the base at $4\\%$ for four years, or at $10\\%$ for seven, would be a different phase. The $\\$2{,}685{,}284.46$ is what letter B then multiplies by $e^{0.12}$.",

  "math-11-37:B":
    "Three further years at $4\\%$ multiply the year-4 figure by $e^{0.12}$, which is the overview's $S(7) \\approx 3,027,649.77$. The two exponents add: $0.40 + 0.12 = 0.52$. Restarting from $\\$1{,}800{,}000$ at a single $7$-year rate of $4\\%$ would undershoot this. Maturity does not replace expansion; it compounds on top of the $\\$2{,}685{,}284.46$ already earned.",

  "math-11-37:C":
    "Spreading the combined exponent $0.52$ across seven years is the overview's $r_{\\mathrm{eff}} = \\frac{0.52}{7} \\approx 7.43\\%$. That is a time-weighted average, not a guess between $4\\%$ and $10\\%$. The unweighted midpoint $7.00\\%$ sits in letter D and is the usual mix-up. Weighting by duration is why $7.43\\%$ leans toward the longer $10\\%$ phase.",

  "math-11-38:C":
    "The overview already grew the second crane at $15\\%$: $85,000 \\times e^{-0.90} \\approx 34,558$, not $\\$36{,}000$. The claimed figure sits about $\\$1{,}442$ too high. Six years at $15\\%$ continuous is a $0.90$ exponent, so a round $\\$36{,}000$ would need a milder decay. Rounding $34,558$ up to a cleaner $36,000$ is how the wording gets written.",

  "math-11-39:A":
    "Continuous doubling is $\\frac{\\ln 2}{0.065}$, which is the overview's $10.66$ years. The Rule of $72$ gives $\\frac{72}{6.5} \\approx 11.1$, a slightly longer discrete approximation. Using $72$ here would overstate the wait by about half a year. Letter B's tripling time is a different logarithm; this letter only records the doubling clock.",

  "math-11-39:D":
    "Four times the $\\$12{,}000$ deposit is $\\$48{,}000$, which is the overview's check at $t \\approx 21.33$. By definition of quadrupling time, no extra compounding arithmetic is needed. Two doublings multiply by $4$, so $t \\approx 2 \\times 10.66$. A solver who added $12{,}000$ three times and reported $\\$36{,}000$ would be counting three copies instead of a fourfold balance.",

  "math-11-40:B":
    "Asset B depreciates continuously at $9\\%$ for five years: $220,000 e^{-0.45}$, already in the overview at $\\$140{,}278.19$. A $9\\%$ simple write-down of $5 \\times 9\\% \\times 220,000$ would overstate the loss. Straight-line remaining value would sit well below this exponential remainder. The recovered $\\$140{,}278.19$ is what five years of continuous $9\\%$ actually leave on the licence.",

  "math-11-40:C":
    "Asset C chains two phases whose exponents add to $0.30$, which is the overview's $C(5) \\approx 134,985.88$, not $\\$130{,}000$. The claimed figure understates the licence by about $\\$4{,}986$. A round $\\$130{,}000$ looks like a $5 \\times 6\\%$ simple haircut. The two-phase exponential remainder is $\\$134{,}985.88$.",

  "math-11-43:C":
    "Continuous discounting uses $e^{-0.56} \\approx 0.5712$, which the overview already applied: $PDV_{\\mathrm{cont}} \\approx 25,704.41$, not $\\$24{,}900$. The claim understates that figure by about $\\$804$. Stronger discounting than annual is already in the ranking; it does not drop the present value as far as $\\$24{,}900$. Using $e^{-0.56}$ on the face amount is what pins $\\$25{,}704.41$.",

  "math-11-43:D":
    "The ranking is right, the size is not. The overview's gap is $26,190.41 - 25,704.41 = 486.00$. The claimed $\\$650$ overstates that difference by $\\$164$. Annual and continuous stay within a few hundred dollars at this rate and horizon. A $\\$650$ spread would need a higher quote or a longer wait than the stem's $0.56$ exponent.",

  "math-11-44:C":
    "The overview already grew the trial deposit: $110,000 \\times e^{0.225} \\approx 137,756$, about $\\$12{,}244$ short of $\\$150{,}000$. The smaller opening balance does not reach the imaging-equipment goal. Reaching $\\$150{,}000$ from $\\$110{,}000$ would need a larger exponent than $0.225$. The recovered deposit in the overview is the one that hits the goal; this trial $\\$110{,}000$ is too small.",

  "math-11-45:D":
    "Continuous inversion divides the same logarithm by $0.06$ itself, which is the overview's $t \\approx 5.02$ years, not $5.45$. A logarithm near $0.301$ divided by $0.06$ cannot produce $5.45$. Reaching $5.45$ would need a smaller divisor, as if someone used $\\ln(1.06)$ in the denominator instead of $0.06$. Continuous credits reach a target slightly sooner than annual ones at the same quote.",

  "math-11-46:B":
    "Inverting $e^{-12r} = 0.45$ is the overview's $r = \\frac{-\\ln 0.45}{12} \\approx 6.65\\%$. A simple $\\frac{1-0.45}{12}$ would give about $4.6\\%$ and would ignore that discounting is exponential. The painting's $0.45$ factor over twelve years is a continuous rate, not a straight-line $55\\%$ haircut. Letter E stretches the same $0.45$ over twenty-four years and halves this $6.65\\%$.",

  "math-11-47:A":
    "Two years of annual $5\\%$ invert $(1.05)^{2} = 1.1025$, which is the first discount in the overview: $PV_1 \\approx 36,281.18$. That nearer payment loses only about $\\$3{,}719$ to waiting. Discounting $\\$40{,}000$ for five years, or using $e^{-0.10}$ here, would be a different clock. The $\\$36{,}281.18$ is what letter C then adds to the five-year piece.",

  "math-11-47:C":
    "Letters A and B already brought each cheque back to today. Stacking $36,281.18 + 50,930.87$ is the overview's $87,212.05$. Paying $\\$40{,}000 + \\$65{,}000 = \\$105{,}000$ now would overpay for cash that is still two and five years out. The gap between face and present value is the cost of waiting at $5\\%$.",

  "math-11-48:C":
    "A lower rate raises present value. The overview already rebuilt B at $3\\%$ as about $\\$23{,}336$, not $\\$22{,}780$. The claimed figure sits about $\\$556$ too low. At $3\\%$, B is worth more than the immediate $\\$22{,}000$, which is the opposite ranking from the $6\\%$ base case. Parking B at $\\$22{,}780$ still below $\\$22{,}000$ would keep the $6\\%$ ranking by accident.",

  "math-11-48:E":
    "The overview already inverted $(1.05)^{3}$ to get $PDV_B \\approx 22,029$, not $\\$23{,}500$. The claimed figure overstates the $5\\%$ present value by about $\\$1{,}471$. At $5\\%$, B sits just above the immediate $\\$22{,}000$, so the extra $\\$1{,}471$ is not a rounding of $22,029$. Copying the $3\\%$ rebuild of $\\$23{,}336$ down a little is a guess; the $5\\%$ inversion is $\\$22{,}029$.",

  "math-11-50:A":
    "Four years of continuous $5.5\\%$ pack into the exponent $0.22$, which is the first discount in the overview: $PDV_1 \\approx 14,445.34$. That nearer obligation loses about $\\$3{,}555$ to waiting. Discounting the $\\$30{,}000$ piece here, or using nine years, would be the later invoice. The $\\$14{,}445.34$ is the four-year supplier bill brought back at the winery's continuous rate.",

  "math-11-50:C":
    "The two discounted invoices already sit in the overview at $14,445.34$ and $18,287.13$. Their sum is $32,732.47$, the lump sum that settles both suppliers today. Writing a cheque for $\\$18{,}000 + \\$30{,}000 = \\$48{,}000$ would pay tomorrow's bills at today's prices. The difference is the discount the winery earns by paying now rather than at the due dates.",

  "math-11-50:D":
    "The overview already ranked $\\$18{,}287 > \\$14{,}445$. The larger face amount still contributes more after nine years of discounting. Ranking by due date alone misses the size difference. Nine years at $5.5\\%$ is not enough to pull a $\\$30{,}000$ invoice below an $\\$18{,}000$ invoice due in four. The later bill would have to be much smaller, or the rate much higher, to reverse that order.",

  "math-11-51:A":
    "Seven years of continuous $5\\%$ pack into the exponent $0.35$, which is the overview's $PDV \\approx 35,234.40$, not $\\$33{,}100$. The claim understates the trust payment by about $\\$2{,}134$. A round $\\$33{,}100$ looks like a harsher discount than $e^{-0.35}$. Using $(1.05)^{-7}$ instead would be a milder annual clock, still not $\\$33{,}100$.",

  "math-11-51:C":
    "The same conversion is $e^{0.05}-1 \\approx 5.13\\%$, not $5.87\\%$. A $5.87\\%$ guess looks like someone used $\\frac{0.35}{6}$ or mixed the seven-year exponent with a different root. Equivalent annual is the one-year growth of the continuous quote, not a seven-year average. The recovered $5.13\\%$ sits just above the $5\\%$ continuous rate, which letter E then measures.",

  "math-11-51:E":
    "The overview's gap is $5.13\\% - 5.00\\% = 0.13$ percentage points, far short of a full point. At a $5\\%$ continuous quote, $e^{r}-1$ stays close to $r$. A one-point premium would need a much larger continuous rate, where the exponential pulls away from its linear approximation. Rounding $0.13$ up to $1$ is how the wording overstates a tiny effective extra.",

  "math-11-53:B":
    "Indifference divides $\\$35{,}000$ by the overview factor $0.7711$, giving $K \\approx 45,393$, not $\\$49{,}851$. The claim overstates the deferred payment by about $\\$4{,}458$. The future cheque has to be larger than $\\$35{,}000$ to offset waiting, but not as large as $\\$49{,}851$. A smaller discount factor, from a higher rate or a longer wait, is what would manufacture the claimed $K$.",

  "math-11-54:C":
    "Ten years of net decay at $3\\%$ is $40,000 e^{-0.30}$, which is the overview's $f(10) \\approx 29,632.73$. Waiting a decade costs about $\\$10{,}367$ of present value at these rates. Selling today at $\\$40{,}000$ is a different comparison; this letter only prices the ten-year hold. A net rate of zero would have left the batch at $\\$40{,}000$ no matter how long the wait.",

  "math-11-55:D":
    "The derivative $\\frac{dt^*}{dr} \\approx -476$ is negative, so $t^*$ moves opposite $r$. A higher rate makes waiting more expensive and brings the harvest forward, it does not postpone it. Lengthening $t^*$ when $r$ rises would need a positive derivative. The usual mix-up is to think higher rates reward patience; here patience is costlier, so the optimal cut comes sooner.",

  "math-11-56:B":
    "The overview already discounted $P(t^*) \\approx 1,481,481$ by $e^{-1.64}$ to get $f(t^*) \\approx 287,378$, not $\\$250{,}000$. The claimed figure understates the present value by about $\\$37{,}000$. A round $\\$250{,}000$ looks like a rough fraction of the harvest value. The recovered $e^{-1.64}$ factor applied to $P(t^*)$ is what pins $\\$287{,}378$.",

  "math-11-57:B":
    "Seven months is $\\frac{7}{12}$ of a year, which is the overview's $PV_2 \\approx 37,513.95$. A short wait at $11\\%$ only shaves about $\\$2{,}486$ off the side payment. Treating seven months as $0.7$ years, or as a full year, would misstate the exponent $0.11 \\times \\frac{7}{12}$. The $\\$37{,}513.95$ is what letter C then adds to the exit payment.",

  "math-11-57:C":
    "The two discounted pieces already sit at $189,893.03$ and $37,513.95$. Stacking them is $227,406.98$, not $\\$230{,}000$. The claim overstates the pair by about $\\$2{,}593$. Rounding the exit up to $\\$190{,}000$ and the side up to $\\$40{,}000$ is how someone reaches a round $\\$230{,}000$. Face totals belong to the zero-rate case in letter E, not to $11\\%$ discounting.",

  "math-11-57:E":
    "A zero rate leaves both factors at $1$, so both payments keep their face values: $250,000 + 40,000 = 290,000$. The two dates stop mattering when waiting is free. That $\\$290{,}000$ is an upper bound on today's value; at $11\\%$ the pair has already fallen to $227,406.98$. A positive rate is what puts a wedge between face and present value.",

  "math-11-58:B":
    "Inverting $e^{-4.5 r} = 0.625$ is the overview's $r \\approx 10.44\\%$. A simple $\\frac{1-0.625}{4.5}$ would give about $8.3\\%$ and would ignore that discounting is exponential. The $0.625$ remaining factor over $4.5$ years is a continuous rate, not a straight-line $37.5\\%$ haircut. Letter A's remaining-value factor is the input; this letter only recovers the implied $r$.",

  "math-11-59:C":
    "The overview already discounted $P(t^*) \\approx 853,333$ by $e^{-1.625}$ to get $f(t^*) \\approx 168,031$, not $\\$195{,}500$. The claimed figure overstates the present value by about $\\$27{,}469$. A rounder $\\$195{,}500$ sits between the harvest value and the discounted value, as if someone only partially applied $e^{-1.625}$. Full discounting of $P(t^*)$ is what pins $\\$168{,}031$.",

  "math-11-60:A":
    "Five years of continuous $8\\%$ pack into the exponent $0.40$, which is step 1 of the overview: $e^{-0.4} \\approx 0.6703$. About $67\\%$ of each five-year dollar survives that wait. Annual $(1.08)^{-5}$ would be a nearby but different factor. This $0.6703$ is what letter C then multiplies by the five-year face amount.",

  "math-11-60:D":
    "The ten-year payment is $55,000 \\times 0.4493$, which is the overview's $PV_2 \\approx 24,713$, not $\\$26{,}000$. The claim overstates that piece by about $\\$1{,}287$. A round $\\$26{,}000$ looks like $\\$55{,}000$ halved. Ten years at $8\\%$ continuous leaves a factor near $0.45$, and $55,000 \\times 0.4493$ is $\\$24{,}713$.",

  "math-11-60:E":
    "The two discounted pieces already sit at $20,110$ and $24,713$. Stacking them is about $44,823$, not $\\$47{,}500$. The claim overstates what the investor should pay today by about $\\$2{,}677$. Rounding each invoice up and adding is how $\\$47{,}500$ appears. Face totals $\\$30{,}000 + \\$55{,}000$ would ignore both waits entirely.",
};

const banned = [
  "Linear thinking is the trap",
  "The arithmetic is locked in",
  "Nothing in the later letters",
  "Linear interpolation between two dollar amounts",
  "A solver who compared face amounts without discounting",
  "A solver who ignored the compounding or discounting convention",
  "The opposite verdict would need the recovered gap",
  "That is why this letter does not rebuild the shared factor",
  "The trap is using the wrong clock",
  "The claimed cutoff sits on the wrong side",
  "Linear shortcuts miss the extra from compounding",
  "Halving a multiple, doubling a rate",
  "The wording would survive only if the recovered figure were rounded",
  "That recovered value is the one later letters lean on",
  "Treating two clocks as interchangeable",
  "Someone rebuilding the same product from scratch",
  "The comparison is already sitting in the overview",
  "Someone who reused the overview product with a different exponent",
  "The ranking in the wording is the trap",
  "A rushed solver often stops at a printed quote",
  "The claim names",
  "matches the claim",
  "as claimed",
  "so the statement is True",
  "so the statement is False",
];

function wordCount(body) {
  return body.trim().split(/\s+/).filter(Boolean).length;
}

function headerPolarity(header) {
  if (/\(true\)\s*$/i.test(header) || /→\s*True/.test(header)) return true;
  if (/\(false\)\s*$/i.test(header) || /→\s*False/.test(header)) return false;
  throw new Error(`cannot read polarity: ${header}`);
}

const byFile = new Map();
for (const e of thin) {
  if (!byFile.has(e.file)) byFile.set(e.file, []);
  byFile.get(e.file).push(e);
}

let edited = 0;
const skipped = [];
const issues = [];
const counts = [];
const lastSentences = new Map();

for (const [rel, entries] of byFile) {
  const fp = path.join(root, rel);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const e of entries) {
    const t = arr.find((x) => x.id === e.id);
    if (!t) {
      skipped.push(`MISSING ${e.id} in ${rel}`);
      continue;
    }
    const key = `${e.id}:${e.letter}`;
    const body = bodies[key];
    if (!body) {
      skipped.push(`NO BODY ${key}`);
      continue;
    }
    const cur = t.tactical_explanations[e.idx];
    const header = cur.split("\n")[0];
    if (header !== e.header) {
      issues.push(`HEADER DRIFT ${key}: file=${JSON.stringify(header)} list=${JSON.stringify(e.header)}`);
    }
    const keyVal = t.answer_key[e.idx];
    const pol = headerPolarity(header);
    if (keyVal !== pol) {
      issues.push(`KEY MISMATCH ${key}: header=${pol} key=${keyVal}`);
    }
    if (keyVal !== e.key) {
      issues.push(`LISTED KEY MISMATCH ${key}: listed=${e.key} file=${keyVal}`);
    }
    for (const b of banned) {
      if (body.includes(b)) issues.push(`BANNED in ${key}: ${b}`);
    }
    if (/[\u2013\u2014]/.test(body)) issues.push(`DASH in ${key}`);
    if (body.includes("${")) issues.push(`TEMPLATE in ${key}`);
    if (/The claim names|so the statement is (True|False)|matches the claim|as claimed/i.test(body)) {
      issues.push(`OPENER in ${key}`);
    }
    const displaysOv = [...(t.solution_overview.matchAll(/\$\$[\s\S]*?\$\$/g) || [])].map((m) => m[0]);
    const displaysNew = [...(body.matchAll(/\$\$[\s\S]*?\$\$/g) || [])].map((m) => m[0]);
    for (const d of displaysNew) {
      if (displaysOv.includes(d)) issues.push(`DUP DISPLAY ${key}`);
    }
    const wc = wordCount(body);
    counts.push({ key, wc });
    if (wc < 45 || wc > 75) issues.push(`WORD COUNT ${key}: ${wc}`);
    const last = body.trim().split(/(?<=[.!?])\s+/).filter(Boolean).pop();
    if (lastSentences.has(last)) {
      issues.push(`DUP CLOSER ${key} also ${lastSentences.get(last)}`);
    } else {
      lastSentences.set(last, key);
    }
    t.tactical_explanations[e.idx] = `${header}\n\n${body}`;
    edited++;
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
}

console.log("edited", edited, "of", thin.length);
console.log("skipped", skipped.length ? skipped.join("\n") : "none");
console.log(
  "word counts",
  counts.map((c) => `${c.key}:${c.wc}`).join("\n"),
);
if (issues.length) {
  console.log("ISSUES");
  for (const i of issues) console.log(i);
} else {
  console.log("no issues");
}
