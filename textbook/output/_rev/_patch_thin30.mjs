import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const thin = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_thin30.json"), "utf8"),
);

/** Body only (no header). Keep original numbers; add unique trap/meaning/flip prose. */
const bodies = {
  "math-1-41:C":
    'Neither is the cohort minus the union: $60-50=10$. The overview\'s three-region rebuild $22+12+16=50$ confirms the leftover. Subtracting both headlines from $60$ without restoring the overlap would overcount "neither." Treating the $34$ Spanish and $28$ French counts as disjoint would subtract $62$ from $60$ and invent a negative remainder. Ten leftover seats is what a union of $50$ leaves; a larger neither figure would need fewer language-takers than that $50$.',

  "math-1-42:A":
    "Inclusion-exclusion on the gym counts: $20+18-5=33$. The five \"both\" members were in each headline, so one copy comes off. Adding $20+18$ without subtracting inflates the union to $38$. That $38$ is two copies of the overlap, not $33$ distinct members. Every later region in this task is built from the $33$; dropping the minus-$5$ step would make the union, and then the leftover, too large.",

  "math-1-42:C":
    "Neither is $50-33=17$. Out of $50$ members, $33$ use a facility, leaving $17$ who use neither. The four-region check $15+5+13+17=50$ confirms the leftover. Subtracting pool plus sauna from $50$ without restoring the five \"both\" members would overcount the unused lockers. Seventeen unused memberships is the complement of that $33$-person union, not a second walk through the gym list.",

  "math-1-23:C":
    "Second identity: $(A\\cap B)^c=A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$. Escaping an intersection takes only escaping one set, so the union of complements is large. Copying $(A\\cup B)^c$ here would undercount to $\\{9,10\\}$. Those two leftovers are the numbers that miss both $A$ and $B$, a much stricter filter. Eight numbers sit in the complement of the overlap; collapsing De Morgan's two identities would drop six of them.",

  "math-1-24:B":
    "$(2,x)$ has first slot in $A=\\{1,2\\}$ and second in $B=\\{x,y,z\\}$. Both tests succeed, and the pair appears on the overview's list. Swapping the slots would exit this product: $(x,2)$ has a letter first, which $A\\times B$ never allows. A solver who treated pairs as unordered would keep both orientations and miss that only one of them sits on the listed $A\\times B$.",

  "math-1-27:D":
    "Membership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$. The claim swaps both tests. That swapped reading would put Maria among the accounts, which is the same slot-reversal as letter B. The pair (Maria, Account 3) is in the product only under the original slot tests. Requiring Maria $\\in$ Accounts would need the coordinates flipped, and this coverage assignment does not flip them.",

  "math-5-30:D":
    "Letter C already rebuilt East at $\\$3{,}085$ from the recovered prices. Replacing the printed $\\$3{,}200$ with $\\$3{,}085$ would put East on the same price pair as North and South. The $\\$115$ shortfall is East's recording error, not a second price pair. A solver who \"corrected\" East up to the printed $\\$3{,}200$ would be defending the bad row instead of rewriting it from $x=29$ and $y=24$.",

  "math-5-35:A":
    "The overview already recovered $x = 27.35$. That sits $35$ cents above $\\$27.00$ and $15$ cents below $\\$27.50$, so it clears the first line and not the second. Rounding to $\\$27$ or to $\\$27.50$ is the usual mix-up; the recovered margin sits strictly between those two marks. Clearing $\\$27.50$ would have needed another $15$ cents of Fabric Roll profit, which the two invoices do not support.",

  "math-5-38:A":
    "The overview already recovered $x = 11.65$. Distances: $|11.65 - 11| = 0.65$ and $|11.65 - 12| = 0.35$, so the margin sits closer to twelve dollars, not eleven. Midway would have been $11.50$; $11.65$ is $15$ cents past that midpoint toward $12$. A solver who compared to $11$ because the integer part is $11$ would pick the farther neighbour.",

  "math-5-38:B":
    "The overview already recovered $y = 18.40$, which is $40$ cents from eighteen and $60$ cents from nineteen. It is the closer of the two to eighteen. Midway would have been $18.50$; $18.40$ still sits on the $18$ side of that midpoint. Treating $18.40$ as almost $19$ because a dollar amount would round up is how a rushed solver picks the farther neighbour.",

  "math-5-45:D":
    "Over $3$ hours the pair covers $3(125) = 375$ km, which is $19$ km more than the $356$ km stretch. The same total is $3(48) + 3(77) = 375$. That $3$-hour combined run is not the meeting-time story from the stem; it is a separate clock on the recovered speeds. Falling short of $356$ km would have needed a combined rate below $356/3$, but $x+y=125$ already sits above that.",

  "math-5-45:E":
    "Boat B's advantage measured against Boat A's recovered speed:\n\n$$\n\\frac{77 - 48}{48} = \\frac{29}{48} \\approx 0.604\n$$\n\nAt about $60.4\\%$ that is more than $60\\%$, though only just. Measuring the $29$ km/h gap against Boat B instead of Boat A would understate the relative lift and miss the cutoff. Equality at $60\\%$ would have needed $y = 1.6\\times 48 = 76.8$; the recovered $77$ sits just above that line.",

  "math-5-48:B":
    "A's dollar markup is $0.32(55) = 17.60$ and B's is $0.18(80) = 14.40$. Then $\\frac{14.40}{17.60} \\approx 0.818$, about $81.8\\%$, which exceeds $80\\%$. Comparing the markup rates $18\\%$ to $32\\%$ instead of the dollar amounts looks like a miss, because $18/32 = 0.562$. Eighty percent of A's $\\$17.60$ is $\\$14.08$, and B's $\\$14.40$ clears that mark.",

  "math-5-49:B":
    "The Ravens' $67$ points include $6(3) = 18$ from draws. The draw share is $\\frac{18}{67} \\approx 0.269$, about $27\\%$, far below $45\\%$. Counting all six draws as if they were wins, $6\\times 7 = 42$, would manufacture a share near $63\\%$ and flip the reading. Forty-five percent of $67$ is about $30$ points, and the $18$ draw points sit well short of that.",

  "math-5-50:B":
    "The relative increase is $\\frac{11.4 - 7.6}{7.6} = \\frac{3.8}{7.6} = 0.50$, exactly $50\\%$, not more than $50\\%$. A strict inequality fails on the boundary. A rushed solver who computed $11.4/7.6 = 1.5$ and then treated \"$50\\%$ greater\" as if \"more than\" were optional would miss the wording. Density B would have to sit strictly above $11.4$ to clear a \"more than\" test, and the recovered value does not.",

  "math-5-51:B":
    "The recovered retainer is $1200$ against Client 2's \\$10,800:\n\n$$\n\\frac{1200}{10800} \\approx 0.111\n$$\n\nAbout $11.1\\%$ exceeds $10\\%$. Treating the whole \\$10,800 as rate-only would hide the retainer entirely. Ten percent of $\\$10{,}800$ is $\\$1{,}080$; the recovered $\\$1{,}200$ sits $\\$120$ above that line. Dividing $\\$1{,}200$ by AUM instead of by the fee would report a tiny fraction and miss the cutoff.",

  "math-5-53:D":
    "The recovered ratio is $\\frac{38}{4.50} \\approx 8.444$. Eight studs cost $8(4.50) = 36$, and one sheet at $\\$38$ costs more than that, so the ratio clears $8$. Comparing list prices as $38/4$ by dropping the $\\$0.50$ would overshoot; the recovered $x=4.50$ is what pins the factor just above $8$. A ratio of $8$ exactly would have needed drywall at $\\$36$, two dollars below the recovered sheet price.",

  "math-5-57:B":
    "The current $\\$2{,}646$ on $\\$45{,}000$ is a blended $\\frac{2646}{45000} = 0.0588$, or $5.88\\%$, which is less than $6\\%$. Most of the money sits in the lower-yielding Bonds. Averaging $5.4\\%$ and $6.6\\%$ as if the split were equal would report $6.0\\%$ exactly and sit on the wrong side of the cutoff. The current mix weights Bonds more heavily, which is why the blend lands at $5.88\\%$ rather than at the midpoint.",

  "math-5-57:E":
    "The Bond rate as a fraction of Equity is $\\frac{5.4}{6.6} \\approx 0.818$. Eighty percent of $6.6$ is $5.28$, and $5.4 > 5.28$, so Bonds clear $80\\%$ of Equities. Letter A asked how much Equities outrun Bonds; this letter asks the reciprocal fraction. Dropping the Bond rate to $5.28$ or below is what would fail the $80\\%$ test, and the recovered $5.4\\%$ does not.",

  "math-5-60:D":
    "The combined rate is $145 + 98 = 243$. Then $2.4(98) = 235.2$, and $243 > 235.2$. Equivalently $\\frac{243}{98} \\approx 2.48$, above the factor of $2.4$. Measuring against Plant A instead of Plant B would compare $243$ to $2.4(145)=348$, which fails, and that is the wrong base. The recovered $x+y=243$ only needs to beat $2.4$ times the slower plant, which it does with $7.8$ MWh/hr to spare.",

  "math-8-25:E":
    "The overview already lists $S(9)=81\\pi$, which sits below $100\\pi$. Nine hours at $9\\pi$ per hour is $81\\pi$. Reaching $100\\pi$ would need $t=\\frac{100}{9}\\approx 11.1$ hours. Nine hours is too soon. A solver who squared the nine-hour radius, or who copied $S(4)=36\\pi$ with a $100$ in place of $36$, would invent a hit. Area here grows with $t$, not with $t^{2}$, so hour $9$ is still $19\\pi$ short of the $100\\pi$ mark.",

  "math-8-40:B":
    "Exponent $2$ would have required $4^{2}=16$, but the logged ratio is $8$, not $16$. The two measurements do not fit a square. An integer-exponent guess is tempting and wrong. The recovered $r=\\frac{3}{2}$ is the unique power that turns a factor of $4$ on $x$ into a factor of $8$ on $y$. A square-law fit would have needed the response ratio to be $16$ when the input ratio is $4$, and the logged pair gives $8$.",

  "math-8-40:D":
    "The overview already listed $y(25)=375$, which sits above $350$. Twenty-five contributes $5^{3}=125$, times $3$ is $375$. A square-law prediction $A\\cdot 625$ would have been a different number entirely. Letter B already ruled out exponent $2$; this letter only checks the fitted $r=\\frac{3}{2}$ at the planned run. Falling short of $350$ would have needed $A$ below $350/125$, and the recovered $A=3$ does not.",

  "math-8-45:C":
    "Doubling gas would double throughput only if $r=1$. The factor is $2^{\\frac{2}{3}}\\approx 1.59$, not $2$. The furnace will not keep pace with the feed. A linear scale-up assumes every extra cubic metre of gas is as productive as the last, but $r=\\frac{2}{3}<1$ means diminishing returns. Throughput would have to carry exponent $1$ for a doubled feed to double the output, and the two logged runs do not support that.",

  "math-8-46:B":
    "The overview already lists $V(6)=144$, which sits above $140$. Six metres squared is $36$, times $4$. Linear scaling from the $5$ m store would have missed that exact square. Depth $6$ is not $20\\%$ more volume than depth $5$, because volume runs with $d^{2}$. A basin under $140$ at $6$ m would have needed $A$ below $140/36$, and the recovered $A=4$ puts it $4$ cubic metres over the mark.",

  "math-8-53:B":
    "Doubling wind multiplies loss by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, not by $2$. The composed exponent sits above one, so losses more than double. A one-for-one wind scale-up understates the second stage. Surge already grows with $\\sqrt{w}$, and cubing that surge is what pushes the leftover exponent to $1.5$. A doubled loss index would have needed the composition to land at exponent $1$, which these two stages do not.",

  "math-8-55:E":
    "The overview already listed $E(216)=360$, which sits under $400$. Two hundred and sixteen is $6^{3}$, so the two-thirds power is $36$, times $10$. A cube-then-linear guess would have overshot. Treating the $216$ kg animal as eight copies of the $27$ kg animal is the other comparison in the overview and is not this letter. Clearing $400$ would have needed $A$ above $400/36$, and the recovered $A=10$ stays at $360$.",

  "math-8-56:C":
    "The overview already listed $f(9)\\approx 118.5$, which sits above $100$. Nine contributes $3^{3}=27$, and $3200/27\\approx 118.5$. That reading still clears the hundred-visitor core threshold. The core boundary in the overview sits near $10.08$ km, so a $9$ km zone is still inside that catchment. A solver who used $9^{1.5}=27$ as the visitor count itself, forgetting to divide $3200$, would report $27$ and miss the threshold.",

  "math-8-57:C":
    "Output per square metre is $24a^{-\\frac{1}{2}}$, a negative leftover power. A larger roof delivers more kilowatt-hours in total, but fewer per square metre. Falling intensity is the $r<1$ story. Total output $24\\sqrt{a}$ still rises; it is the quotient $y/a$ that falls. A constant intensity would have needed $r=1$, and the two array records forced $r=\\frac{1}{2}$ instead.",

  "math-8-58:B":
    "Unit cost $800N^{-\\frac{1}{2}}$ falls, while cumulative spend $S=800N^{\\frac{1}{2}}$ still rises. The leftover exponent on spend is positive. Cheaper cells can still mean a larger total cheque as volume grows. The usual mix-up is to treat falling unit cost as falling total spend; multiplying a falling $c$ by a rising $N$ is what keeps $S$ climbing. Spend would fall only if the leftover exponent $b+1$ were negative, and $b=-\\frac{1}{2}$ does not go that far.",

  "math-8-62:C":
    "Doubling mass multiplies hold by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Holding power rises, but not in lockstep with mass. Two small buoys are not a doubled mass in one hull; the exponent $\\frac{2}{3}$ is a surface-like leftover, so extra kilograms buy less than proportional extra hold. Lockstep would have needed exponent $1$, and the trial buoy was fitted with $\\frac{2}{3}$.",

  "math-8-63:D":
    "At $d=11$, $T(11)=\\frac{800}{121}\\approx 6.61$, which sits below $8$. The reliable radius is $10$ m; a longer hop can only be slower. Eleven metres already misses the floor. A solver who used $d=11$ in an inverse-linear $800/11$ would report a much larger throughput and think the floor still holds. Inverse square is what drops $11$ m below $8$ Mbps; the extra metre past the $10$ m radius is enough.",

  "math-8-68:A":
    "Identity $(1)$ already gives $2^{-2}=\\frac{1}{4}$. Doubling distance quarters intensity at every starting range. Inverse-linear thinking would have claimed a half. Inverse square is steeper than inverse proportion. Halving would have been the $r=-1$ story; the meter reading forced $r=-2$. The night-cap distance later in the task uses this same quartering, not a half.",

  "math-8-69:B":
    "At $q=5$, $v=20\\sqrt{2}>28$ because $\\sqrt{2}>1.4$. The overview already listed $v(5)=20\\sqrt{2}$. Using $4\\sqrt{50}$ is the same check. Jet speed already sits above twenty-eight metres per second. Twenty-eight would require $\\sqrt{2}=1.4$ exactly, and $\\sqrt{2}$ overshoots that. A solver who dropped the $\\sqrt{2}$ and reported $v=20$ would sit under the cutoff and flip the letter.",

  "math-8-76:A":
    "Revenue is $90x^{\\frac{2}{3}}$, and $\\frac{2}{3}\\neq 1$. Doubling feed multiplies revenue by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Revenue rises more slowly than feed. Proportionality would have required lockstep. Cost is the linear series here, $C=30x$; revenue is the slower one. A proportional reading would survive only if the eight-tonne calibration had produced exponent $1$, which it did not.",

  "math-8-77:C":
    "The exponent $\\frac{3}{2}>1$, and the same $4^{\\frac{3}{2}}=8$ from A is already larger than $4$. Cost grows faster than the pallet-volume index. A proportional handler would have carried exponent $1$. Letter A asked whether a factor of $4$ on volume is a factor of $4$ on cost; this letter names the comparison that factor already settled. Equal growth would have needed $r=1$, and the surviving record forced $r=\\frac{3}{2}$.",

  "math-8-79:D":
    "A $25\\%$ rise cuts demand by $36\\%$; a $25\\%$ cut raises it by $\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$. Inverse-square percentage changes are not symmetric. The two percentages are not the same. Going up to $1.25p$ multiplies demand by $0.64$; coming back down is a multiply by $1/0.64$, which is larger than $1.25$. Reusing the $36\\%$ in both directions applies a linear elasticity shortcut that inverse square does not permit.",

  "math-8-80:A":
    "Identity $(2)$ already gives $2^{3}=8$. Doubling height multiplies mass by $8$, which exceeds $2$. Mass grows faster than height. A proportional casting would have carried exponent $1$. Geometric similarity is a volume scaling, so the leftover exponent is $3$, not $1$. Mass would keep pace with height only for a one-dimensional casting, and a bell is not that.",

  "math-8-83:B":
    "The overview already composed $\\frac{D}{G}=\\frac{5}{3}m^{\\frac{1}{12}}$. The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area, just barely, because $\\frac{3}{4}>\\frac{2}{3}$. The mix-up is to read \"per square centimetre\" as a declining average, copying the $r<1$ story from demand-versus-mass. Intensity would fall only if gill area outran demand, and $\\frac{2}{3}$ does not beat $\\frac{3}{4}$.",

  "math-8-85:A":
    "The overview already recovered $r=-2$. Doubling distance multiplies dose by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$. A half would have been inverse-linear; this survey's quadrupling record is inverse-square. The quadrupling note $4^{-2}=\\frac{1}{16}$ is the same exponent. Halving is the $r=-1$ reading; the quadrupling record forced $r=-2$ uniquely. A solver who halved the $3$ m survey reading at twice the distance would still be running inverse-linear, which this source is not.",

  "math-8-86:D":
    "The overview already lists $r(8)=60$, which sits above $50$. Eight hours contribute $8^{\\frac{2}{3}}=4$, times $15$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap. A linear-in-time plume would have added equal metres each hour and missed this $60$. Clearing $50$ m at hour $8$ is what $A=15$ forces; a coefficient below $50/4$ is what would have failed, and the survey gap of $45$ m did not produce that.",

  "math-8-87:C":
    "Doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$. The three-halves exponent outruns a proportional clock. Changing the input unit to centimetres rescales only the coefficient; it does not flatten the exponent to $1$. Discharge would double with head only for a linear weir, and the gauging was fitted with $\\frac{3}{2}$.",

  "math-8-96:E":
    "The overview already lists $q(5)=160$, which sits above $150$. Halving the price quadruples inverse-square demand: $40\\cdot 4=160$. Inverse-linear thinking would have claimed $80$ and missed the letter. Eighty is the $r=-1$ reading of a halved tariff. Inverse square is why $5$ euros already clears $150$ tickets; an exponent of $-1$ would have left the desk at $80$.",

  "math-11-105:D":
    "Four full payments plus the recovered final instalment are already $40,000 + 9,682.53 = 49,682.53$ in the overview. Five copies of $\\$10,000$ would overstate the total by about $\\$317$. The last payment is smaller than the four full ones, so the life-of-loan total cannot be $\\$50,000$. Adding principal plus interest, $35,000 + 14,682.53$, is the same $49,682.53$ by a different route.",

  "math-11-112:C":
    "The overview already ranked $850,000 < 871,117 < 944,529$. Cash wins at $8\\%$. Both instalment plans still carry a present-value premium at this modest rate. Discounting is not strong enough at $8\\%$ to make waiting cheaper than paying $\\$850{,}000$ today. A solver who compared undiscounted payment totals, nine times $\\$140{,}000$ versus cash, would pick an instalment plan and reverse the ranking.",

  "math-11-113:B":
    "The overview's $PV_{\\mathrm{III}} \\approx 2,194,722$, not $2,250,000$. The round $\\$2.25$ million is a nearby stand-in. III is still the cheapest overall at $7.5\\%$, just not at that rounder figure. Rounding the recovered present value up is how the wording gets to $\\$2.25$ million. This letter is only whether III equals that round quote at $7.5\\%$, not whether III wins the ranking.",

  "math-11-113:D":
    "A higher rate does cheapen II, but the overview's $11.5\\%$ value is about $\\$2,186,562$, not $\\$2,100,000$. The round $\\$2.1$ million understates the recovered present value by about $\\$87,000$. Cheaper than cash is a ranking question for letter E; this letter is only whether the present value equals that round figure. Parking II at $\\$2.1$ million because it sits below the $\\$2.4$ million cash price mixes a ranking with a dollar quote.",

  "math-11-120:D":
    "The overview already added $-40,000+22,000+27,600=9,600$. A positive undiscounted total is why the unique IRR is positive. It is not a present value. Dropping the sign on the outlay, or adding only the two inflows, would report the wrong total and the wrong meaning. NPV letters discount these same three cash flows; this letter adds them at a zero rate, which is why the total can be positive while some NPVs are not.",

  "math-11-123:C":
    "The overview already ranked $16\\% > 11.04\\%$. IRR prefers B. A's larger total cash in is spread over two years; B's single-year $16\\%$ wins the rate comparison. IRR is a rate, not a dollar ranking, so A's bigger inflows do not automatically win. NPV at $13\\%$ is a different criterion in letter D; this letter only asks which internal rate is larger, and $16\\%$ beats $11.04\\%$.",

  "math-11-30:E":
    "The overview's two gaps are about $\\$165$ monthly versus about $\\$5$ daily. Switching toward more frequent credits pulls Fund B toward the continuous ceiling, so the dollar gap shrinks. Daily compounding never overtakes Fund A; letter D already checked that. It only closes most of the $\\$165$. Expecting more frequent credits to widen the gap runs the comparison backwards: Fund B is the one catching up.",

  "math-11-35:A":
    "Annual compounding at $7\\%$ is $40,000 \\times 1.07$, which is step 1 of the overview: exactly $\\$42,800$. That is the weakest of the four schedules at this quoted rate. No intra-year interest-on-interest is credited when $m=1$, so this is also the only schedule that matches the nominal $7\\%$ as an effective rate. Using $(1.07)^{4}$ or $e^{0.07}$ here would be answering a later, stronger clock.",

  "math-11-39:B":
    "Tripling swaps in $\\ln 3$: the overview's $16.90$ years. It is not $1.5$ times the doubling time, because $\\ln 3 / \\ln 2 \\approx 1.585$, not $1.5$. Letter E is the false claim that the ratio must be $1.5$; this letter only records the $16.90$ figure the logarithm actually produces. Multiplying the doubling time $10.66$ by $1.5$ would undershoot $16.90$ and miss the extra from $\\ln 3$ versus $1.5\\ln 2$.",

  "math-11-59:B":
    "Substituting into that formula is step 2 of the overview: $\\frac{2}{0.075} - 5 \\approx 21.67$. The $\\$1,200$ scale never enters the date, only the later present-value check. A solver who folded $A=1{,}200$ into the date, or who used $1/r - k$ instead of $2/r - k$, would land on a different year. The $21.67$ is what $r=7.5\\%$ and $k=5$ force once the $A$ cancels.",
};

const banned = [
  "Linear thinking is the trap",
  "The arithmetic is locked in",
  "Nothing in the later letters",
  "For the opposite verdict, those inputs would have to change",
  "The claim names",
  "matches the claim",
  "as claimed",
  "so the statement is True",
  "so the statement is False",
];

function wordCount(body) {
  return body
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
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
const issues = [];
const counts = [];

for (const [rel, entries] of byFile) {
  const fp = path.join(root, rel);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const e of entries) {
    const t = arr.find((x) => x.id === e.id);
    if (!t) {
      issues.push(`MISSING ${e.id} in ${rel}`);
      continue;
    }
    const key = `${e.id}:${e.letter}`;
    const body = bodies[key];
    if (!body) {
      issues.push(`NO BODY ${key}`);
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
    if (/The claim names/i.test(body)) issues.push(`OPENER in ${key}`);
    const wc = wordCount(body);
    counts.push({ key, wc });
    if (wc < 42 || wc > 80) issues.push(`WORD COUNT ${key}: ${wc}`);
    t.tactical_explanations[e.idx] = `${header}\n\n${body}`;
    edited++;
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
}

console.log("edited", edited, "of", thin.length);
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
