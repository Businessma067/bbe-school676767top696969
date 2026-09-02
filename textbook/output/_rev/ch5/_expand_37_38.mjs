import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-37": [
    `The statement claims Alvarez's solo completion time, rounded to the nearest whole hour, would round down to $11$ rather than up to $12$.

The overview already recovered Alvarez at $0.085$ job per hour. Solo time is the reciprocal.

$$\\frac{1}{0.085} \\approx 11.765$$

Nearest-hour rounding of $11.765$ is $12$, not $11$. The fractional part $0.765$ is well above a half, so the rounding goes up.

A solver who computed $1/0.09 \\approx 11.11$ after rounding the rate would round down to $11$ and flip the verdict. A solver who used $1/0.085=11.76$ but then applied a "always round down" shop rule would also miss the claim's nearest-hour instruction.

Alvarez's solo time rounds to $12$ hours, not down to $11$, so the statement is False.`,

    `The statement claims Bianchi alone would take longer to finish one job than Alvarez alone would take to finish two.

The overview already recovered Alvarez $0.085$ and Bianchi $0.045$. The extra arithmetic is those two solo times.

**1.** Bianchi, one job:

$$\\frac{1}{0.045} \\approx 22.222$$

hours.

**2.** Alvarez, two jobs:

$$\\frac{2}{0.085} \\approx 23.529$$

hours.

**3.** Compare:

$$22.222 < 23.529$$

Bianchi's one job is *shorter* than Alvarez's two jobs, not longer. The claim has the comparison backwards.

A solver who compared one job to one job, $22.22>11.76$, would be answering a different question that is true but is not this claim. Doubling Alvarez's work is the whole content of the letter.

Bianchi's solo job is about $22.2$ hours and Alvarez's two jobs are about $23.5$ hours, so Bianchi is not slower on that comparison, so the statement is False.`,

    `The statement claims their combined hourly output reduces to exactly $\\frac{13}{100}$.

The overview already recovered $0.085$ and $0.045$. The extra arithmetic is only the sum.

$$0.085 + 0.045 = 0.130 = \\frac{13}{100}$$

The combined rate is exactly $13\\%$ per hour, no rounding. A solver who added Monday's $65.5\\%$ over $11$ hours, $0.655/11 \\approx 0.0595$, would be averaging people-hours with a different mix, not adding the two recovered rates.

The combined rate is exactly $\\frac{13}{100}$, so the statement is True.`,

    `The statement places Bianchi's slice of Tuesday's finished work closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$.

Tuesday Bianchi logged $3$ hours at $0.045$ job per hour. Tuesday finished $90\\%$ of a job.

**1.** Bianchi's Tuesday output:

$$3 \\times 0.045 = 0.135$$

of a job.

**2.** Compare $0.135$ with $\\frac{1}{7} \\approx 0.1429$ and $\\frac{1}{8}=0.125$:

$$|0.135 - 0.1429| \\approx 0.0079, \\qquad |0.135 - 0.125| = 0.010$$

The distance to $\\frac{1}{7}$ is smaller. Bianchi's slice is $0.135$ of the job, which is $0.135/0.900=0.15$ of Tuesday's finished work if the claim meant a share of Tuesday rather than a share of one job. The wording is "slice of Tuesday's finished work, as a fraction." If that means $0.135/0.900=0.15$, then compare $0.15$ with $1/7$ and $1/8$: $|0.15-0.1429|=0.0071$ and $|0.15-0.125|=0.025$, still closer to $\\frac{1}{7}$. Either reading prefers $\\frac{1}{7}$.

A solver who used Monday's $7$ hours for Bianchi here would be answering a different day.

Bianchi's Tuesday slice sits closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$, so the statement is True.`,

    `The statement tallies every hour either technician logged across both days, $4+7+9+3=23$, divides that into the total work finished, and claims the resulting hourly average does not quite clear seven percent.

**1.** Work finished: Monday $0.655$ plus Tuesday $0.900$.

$$0.655 + 0.900 = 1.555$$

jobs.

**2.** Combined hours $23$. Average:

$$\\frac{1.555}{23} \\approx 0.06761$$

**3.** Compare with $7\\% = 0.07$:

$$0.06761 < 0.07$$

The average is about $6.76\\%$, which does not quite clear seven percent. This average is a people-hour blend of the two recovered rates, weighted by hours, not the unweighted $13\\%$ from letter C. Letter C added the two rates as if both worked every hour. Here the hours are pooled.

A solver who used $1.555/16$, counting only Alvarez's $13$ plus Bianchi's wait, or $4+9=13$ and $7+3=10$, wait $23$ is correct. A solver who used $0.13$ from letter C and called that seven-plus would be answering letter C again.

The pooled average is about $6.76\\%$, shy of $7\\%$, so the statement is True.`,
  ],

  "math-5-38": [
    `The statement claims T-Shirt margins sit closer to eleven dollars than to twelve.

The overview already recovered T-Shirt margin at $\\$11.65$. Distance to $11$ is $0.65$. Distance to $12$ is $0.35$. Then $0.35 < 0.65$, so $11.65$ is closer to twelve.

The claim has the nearer neighbour backwards. A solver who looked at the leading $11$ and stopped would call it closer to eleven as a digit story.

T-Shirt margin $\\$11.65$ sits closer to twelve than to eleven, so the statement is False.`,

    `The statement claims Hoodie margins sit closer to eighteen dollars than to nineteen.

The overview already recovered Hoodie margin at $\\$18.40$. Distance to $18$ is $0.40$. Distance to $19$ is $0.60$. Then $0.40 < 0.60$, so $18.40$ is closer to eighteen.

A solver who rounded $18.40$ to $18.50$ and called that equidistant would still not prefer nineteen.

Hoodie margin $\\$18.40$ sits closer to eighteen than to nineteen, so the statement is True.`,

    `The statement claims the missing Season 3 T-Shirt count reconstructs to a multiple of ten.

The overview already reconstructed that count as $245$. Then $245$ is not a multiple of ten: $245/10=24.5$.

**1.** Season 3 logged $310$ Hoodies and $\\$8{,}558.25$ profit. Hoodie contribution:

$$310 \\times 18.40 = 5704$$

**2.** Remaining profit for T-Shirts:

$$8558.25 - 5704 = 2854.25$$

**3.** T-Shirt count:

$$\\frac{2854.25}{11.65} = 245$$

The reconstruction is $245$, which ends in $5$, not $0$. A solver who rounded $245$ to $250$ would manufacture a multiple of ten. A solver who used $8558.25/11.65 \\approx 734$ after ignoring Hoodies would also land off a multiple of ten, but that is the wrong reconstruction.

The missing count is $245$, not a multiple of ten, so the statement is False.`,

    `The statement claims Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly $52$ Hoodies' worth of margin.

**1.** Season 2 minus Season 1:

$$10747.75 - 9793.50 = 954.25$$

**2.** Fifty-two Hoodies at the recovered Hoodie margin:

$$52 \\times 18.40 = 956.80$$

**3.** Compare:

$$954.25 < 956.80$$

The earnings gap is $\\$2.55$ short of $52$ Hoodies. That is "just barely fail." A solver who used $50$ Hoodies, $920$, would find the gap covers $50$ easily and miss the $52$. A solver who used T-Shirt margin $11.65 \\times 52 \\approx 605.80$ would be covering the wrong garment.

Season 2's extra $\\$954.25$ fails to cover $52$ Hoodies at $\\$956.80$, so the statement is True.`,

    `The statement rewrites Season 3 as $260$ T-Shirts instead of the reconstructed $245$, Hoodies held at $310$, and claims profit crosses $\\$8{,}700$ by less than $\\$40$.

The overview already has T-Shirt $11.65$ and Hoodie $18.40$. The extra arithmetic is costing that counterfactual mix.

**1.** Two hundred sixty T-Shirts:

$$260 \\times 11.65 = 3029$$

**2.** Three hundred ten Hoodies:

$$310 \\times 18.40 = 5704$$

**3.** Add, then compare with $\\$8{,}700$:

$$3029 + 5704 = 8733$$

Then $8733 > 8700$, and the overshoot is $33$, which is less than $40$.

Compared with the reconstructed Season 3 at $245$ T-Shirts, this rewrite adds $15$ T-Shirts times $11.65$, which is $174.75$, and $8558.25+174.75=8733$, the same figure.

A solver who used $250$ T-Shirts as a round stand-in would get $2912.50+5704=8616.50$, which does not cross $8700$ and would flip the verdict. The claim's $260$ is what pushes the profit over.

The rewritten Season 3 profits $\\$8{,}733$, which crosses $\\$8{,}700$ by $\\$33$, so the statement is True.`,
  ],
};

applyLetters("31_40.json", patches);
console.log("applied 37-38");
