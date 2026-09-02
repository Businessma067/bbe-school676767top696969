import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-45:A": `The statement is a solo-time claim for Boat A on the $356$ km stretch, not a meeting-time claim on the $250$ km stretch. The overview already recovered Boat A's speed $48$ km/h and Boat B's speed $77$ km/h. Those two speeds are not re-solved here. The extra arithmetic is only the quotient $356/48$, then a comparison with the $7$-hour cutoff.

**1.** Solo hours for A on $356$ km:

$$\\frac{356}{48} \\approx 7.4167$$

**2.** Hours and minutes:

$$0.4167 \\times 60 \\approx 25$$

so about $7$ hours $25$ minutes, which is more than $7$ hours.

**3.** The cutoff speed that would make the time exactly $7$ hours:

$$\\frac{356}{7} \\approx 50.857$$

Recovered A is $48$, which sits about $2.86$ km/h below that cutoff, so the solo time must overshoot $7$ hours.

A solver who used Boat B's $77$ km/h would get $356/77 \\approx 4.62$ hours and fail the cutoff. A solver who used the meeting stretch $250/48 \\approx 5.21$ would also fail. The trap figure $5.21$ hours is A's time on the $250$ km meeting stretch, not on the $356$ km stretch the claim named. Another trap is $356/77$ mixed as if A and B shared the $356$ km run as a combined speed; the claim is A *alone*.

The opposite verdict would need A's speed at or above $50.86$ km/h. With $A=48$, that does not happen. Boat B's $77$ km/h is a different vessel and does not rewrite A's solo clock.

Boat A needs about $7.42$ hours to cover $356$ km alone, which is more than $7$ hours, so the statement is True.`,

  "math-5-45:E": `The statement claims Boat B is more than $60\\%$ faster than Boat A. This is a relative-increase comparison, not a meeting-time letter. The overview already recovered $A=48$ km/h and $B=77$ km/h. The extra arithmetic is the gap, then the gap over A's speed.

**1.** Speed gap:

$$77 - 48 = 29$$

**2.** Gap as a share of A:

$$\\frac{29}{48} \\approx 0.60417$$

**3.** Sixty percent of A, as a cutoff speed increment:

$$0.60 \\times 48 = 28.8$$

The actual gap $29$ sits $0.2$ km/h above $28.8$, so the relative increase is about $60.4\\%$, which exceeds $60\\%$. Equivalently, the cutoff speed is $1.60 \\times 48 = 76.8$, and recovered $B=77$ sits just above that.

A solver who used $77/48 \\approx 1.604$ and reported $160\\%$ would have forgotten to subtract $1$ from a "higher than" claim. A solver who used $29/77 \\approx 37.7\\%$ against B would fail the cutoff. The trap figure $160\\%$ is the ratio left as a multiple. Another trap is $77-48=29$ treated as already "$29\\%$ higher," mixing kilometres-per-hour with percentage points.

The opposite verdict would need $B \\le 76.8$. Recovered $B=77$ is $0.2$ km/h above that bar. The $356$ km stretch and the $250$ km meeting stretch are distance stories; they do not rewrite these two constant speeds.

B is about $60.4\\%$ faster than A, which is more than $60\\%$, so the statement is True.`,

  "math-5-46:B": `The statement claims Barley's per-tonne profit advantage over Wheat is more than $25\\%$ of Wheat's per-tonne profit. The overview already recovered Wheat $x=95$ and Barley $y=120$. Season 3's reconstructed Wheat tonnage is a different unknown and does not enter this ratio. The extra arithmetic is the gap, then the gap over Wheat.

**1.** Barley minus Wheat:

$$120 - 95 = 25$$

**2.** Gap over Wheat:

$$\\frac{25}{95} \\approx 0.26316$$

**3.** Twenty-five percent of Wheat:

$$0.25 \\times 95 = 23.75$$

The actual gap $\\$25$ sits $\\$1.25$ above $\\$23.75$, so the relative advantage is about $26.3\\%$, which exceeds $25\\%$.

A solver who used $25/120 \\approx 20.8\\%$ against Barley would fail the cutoff and flip the verdict. The trap figure $20.8\\%$ is the gap over the wrong crop. A solver who treated $\\$25$ as already $25\\%$ of a round $\\$100$ Wheat margin would skip Wheat's actual $\\$95$. Season 1 and Season 2 totals are mixes of tonnes, not per-tonne margins, so dividing a season total by a round tonnage does not recover this $25/95$ ratio.

The opposite verdict would need a gap of $23.75$ or less on a $\\$95$ Wheat margin, so Barley at or below $118.75$. Recovered Barley is $\\$120$.

Barley's $\\$25$ advantage is about $26.3\\%$ of Wheat's $\\$95$, which exceeds $25\\%$, so the statement is True.`,

  "math-5-47:B": `The statement claims the current age gap $x-y$ is more than $45\\%$ of the elder employee's current age. The overview already recovered elder $x=47$ and younger $y=19$. This letter does not rebuild the five-years-ago triple. The extra arithmetic is the current gap over $47$.

**1.** Current gap:

$$47 - 19 = 28$$

**2.** Gap over the elder:

$$\\frac{28}{47} \\approx 0.5957$$

**3.** Forty-five percent of the elder:

$$0.45 \\times 47 = 21.15$$

The actual gap $28$ sits $6.85$ years above $21.15$, so about $59.6\\%$ of $47$, which exceeds $45\\%$ by a wide margin. The five-years-ago gap was also $28$, because both ages drop by the same five years, but the *base* was then $42$, and $28/42 \\approx 67\\%$ is a different letter.

A solver who used $28/19 \\approx 147\\%$ against the younger would still exceed $45\\%$ but would be using the wrong base. A solver who used $47-19=28$ as if $28$ were already "$28\\%$ of $47$" would mix years with percentage points. The trap figure $45\\%$ is a round bar well below $59.6\\%$; it is not a computed share from the stem.

The opposite verdict would need the gap at or below $21.15$ years. With ages $47$ and $19$, the gap is $28$.

The gap $28$ is about $59.6\\%$ of $47$, which exceeds $45\\%$, so the statement is True.`,

  "math-5-47:D": `The statement claims that ten years ago the sum of their ages was less than $40$. The overview already recovered current ages $47$ and $19$. The extra arithmetic is subtracting ten from each, then adding. Ages are not re-solved from the five-year triple.

**1.** Ages ten years ago:

$$47-10=37, \\qquad 19-10=9$$

**2.** Sum ten years ago:

$$37 + 9 = 46$$

**3.** Compare with $40$:

$$46 < 40$$

is false. Equivalently, current sum minus twenty years of living: $47+19-20=46$. The sum is $46$, six above the cutoff.

A solver who subtracted ten only from the elder would get $37+19=56$. A solver who used five years ago, $42+14=56$, would be at the stem's triple moment, not ten years ago. The trap figure $56$ is that five-year-ago sum, or the one-sided subtraction. Another trap is $47-10+19=56$ after forgetting to age the younger back. Ten years ago the younger was $9$, which is a legal age in this story; the claim is about the *sum*, not about whether $9$ looks surprising.

The opposite verdict would need a current sum below $60$. With $47+19=66$, ten years ago is $46$.

Ten years ago the ages summed to $46$, which is not less than $40$, so the statement is False.`,

  "math-5-48:B": `The statement claims Product B's dollar markup is more than $80\\%$ of Product A's dollar markup. Crestline marks A up $32\\%$ and B up $18\\%$ over wholesale. The overview already recovered wholesale $A=55$ and $B=80$. Percentage markups are given; dollar markups are not. The extra arithmetic is those two dollar markups, then their ratio.

**1.** Dollar markup on A:

$$55 \\times 0.32 = 17.60$$

**2.** Dollar markup on B:

$$80 \\times 0.18 = 14.40$$

**3.** B's markup as a share of A's:

$$\\frac{14.40}{17.60} = 0.81818\\ldots$$

about $81.8\\%$, which exceeds $80\\%$. Eighty percent of $\\$17.60$ is $\\$14.08$, and B's $\\$14.40$ sits $\\$0.32$ above that cutoff.

B's percentage markup is smaller, but B's wholesale is larger, so the dollar markups are close. A solver who compared $18\\%$ with $80\\%$ of $32\\%$ would mix percentage points with dollars: $0.80 \\times 32=25.6$ percentage points, which $18$ fails. The trap figure $18/32=56.25\\%$ is the *rate* ratio, not the dollar ratio. Another trap is comparing retail prices $94.40$ and $72.60$ and reporting $94.40/72.60 \\approx 130\\%$, which is a price ratio, not a markup ratio.

The opposite verdict would need $14.40 \\le 14.08$. Recovered wholesale prices pin the dollar markups just above that bar.

B's dollar markup $\\$14.40$ is more than $80\\%$ of A's $\\$17.60$, so the statement is True.`,

  "math-5-48:C": `The statement claims Order 1's total retail markup exceeds $\\$150$. Order 1 is $8$ of A and $5$ of B. This is a new mix of the dollar markups, not a printed invoice total. The overview already recovered wholesale $A=55$ and $B=80$. Markup per A is $55 \\times 0.32=17.60$. Markup per B is $80 \\times 0.18=14.40$.

**1.** Markup on Order 1's A units:

$$8 \\times 17.60 = 140.80$$

**2.** Markup on Order 1's B units:

$$5 \\times 14.40 = 72.00$$

**3.** Combined markup:

$$140.80 + 72.00 = 212.80$$

Then $212.80 > 150$. Check against wholesale: Order 1 wholesale is $8(55)+5(80)=440+400=840$. Retail is $8(72.60)+5(94.40)=580.80+472=1052.80$. Difference $1052.80-840=212.80$, same figure.

A solver who took $32\\%$ of wholesale $840$ would get $268.80$ by forcing A's rate onto B. A solver who took $18\\%$ of $840$ would get $151.20$, just over $\\$150$, which still passes but is the wrong one-rate story. The trap figure $151.20$ is that all-$18\\%$ markup. The two rates differ, so the honest markup is the unit mix $140.80+72.00$.

The opposite verdict would need Order 1's mix to carry $\\$150$ or less. With $8$ and $5$ at $17.60$ and $14.40$, the markup is $212.80$.

Order 1's markup is $\\$212.80$, which exceeds $\\$150$, so the statement is True.`,

  "math-5-48:E": `The statement claims the wholesale cost ratio $B:A$ is greater than the retail price ratio $B:A$. Wholesale $A=55$, $B=80$ from the overview. Retail A is $55 \\times 1.32=72.60$. Retail B is $80 \\times 1.18=94.40$. This is a comparison of two ratios, not a dollar-markup letter.

**1.** Wholesale ratio:

$$\\frac{80}{55} = \\frac{16}{11} \\approx 1.4545$$

**2.** Retail ratio:

$$\\frac{94.40}{72.60} = \\frac{944}{726} \\approx 1.3003$$

**3.** Compare:

$$1.4545 > 1.3003$$

A has the larger percentage markup, so retail A is pulled up more than retail B, which shrinks $B:A$ at retail relative to wholesale. That is the whole mechanism. If the markups had been equal, the two ratios would match.

A solver who compared $18\\%$ with $32\\%$ as if those were the price ratios would be answering a different question. The trap figure $32/18 \\approx 1.78$ is a rate ratio, not a price ratio. Another trap is comparing dollar markups $14.40/17.60 \\approx 0.818$ and calling that the "retail ratio." Letter B already used that quotient for a different claim.

The opposite verdict would need B's markup percentage to exceed A's, which would inflate retail $B/A$ above wholesale $B/A$. The stem marks A at $32\\%$ and B at $18\\%$.

Wholesale $B/A$ exceeds retail $B/A$, so the statement is True.`,

  "math-5-49:D": `The statement claims the Falcons' win-to-draw *point contribution* ratio exceeds $15$. Falcons had $9$ wins, $4$ draws, and $75$ points. The overview already recovered a win at $7$ points and a draw at $3$. Losses contribute $0$. This letter does not rebuild that pair. It only splits the $75$ points into win points and draw points, then divides.

**1.** Falcons win points:

$$9 \\times 7 = 63$$

**2.** Falcons draw points:

$$4 \\times 3 = 12$$

**3.** Point-contribution ratio:

$$\\frac{63}{12} = 5.25$$

Then $5.25 > 15$ is false. Check: $63+12=75$, so the split rebuilds the printed Falcons total. The ratio is $5.25$ to $1$, not $15$ to $1$.

A solver who used match counts $9/4=2.25$ would be answering a wins-to-draws *record* ratio. A solver who divided win points by draw *count*, $63/4=15.75$, would manufacture a figure just above $15$ and accept the claim. The trap figure $15.75$ is win points over draw count. The claim is point contribution to point contribution, $63:12$. Another trap is $75/5=15$ from a five-result average that is not in the stem.

The opposite verdict would need draw points below $63/15=4.2$, which would take fewer than two draws at $3$ points. The Falcons had four draws. The Ravens' $67$ points are a different club.

The win-to-draw points ratio is $5.25$, which does not exceed $15$, so the statement is False.`,

  "math-5-50:A": `The statement raises Batch 1's Metal B from $8$ L to $10$ L, leaves Metal A at $12$ L, and claims total mass would exceed $200$ kg. This is a new mix, not the printed Batch 1 row. The overview already recovered $A=7.6$ kg/L and $B=11.4$ kg/L. Batch 1 printed $182.4$ kg, which is $12(7.6)+8(11.4)=91.2+91.2=182.4$. The extra arithmetic is only the extra $2$ L of B.

**1.** Extra B mass:

$$2 \\times 11.4 = 22.8$$

**2.** New total:

$$182.4 + 22.8 = 205.2$$

**3.** Direct rebuild of the counterfactual batch:

$$12 \\times 7.6 + 10 \\times 11.4 = 91.2 + 114 = 205.2$$

Then $205.2 > 200$. The extra $2$ L of B add $22.8$ kg, which is more than the $17.6$ kg gap from $182.4$ up to $200$.

A solver who added $2$ L of A instead would add $15.2$ kg and get $197.6$, which does not exceed $200$ and would flip the verdict. The trap figure $197.6$ kg is extra A, not extra B. A solver who averaged $7.6$ and $11.4$ to $9.5$ and then added $2 \\times 9.5=19$ would get $201.4$, which still passes $200$ but is the wrong extra-mass story. Batch 3's recorded $147$ kg versus predicted $140.6$ kg is an audit discrepancy and does not rewrite Batch 1's densities.

The opposite verdict would need $B \\le 17.6/2=8.8$ kg/L on those extra $2$ L. Recovered $B=11.4$.

The counterfactual Batch 1 masses $205.2$ kg, which exceeds $200$ kg, so the statement is True.`,

  "math-5-52:A": `The statement claims Suspension B's concentration is more than $85\\%$ higher than Suspension A's. This is a relative-increase comparison. The overview already recovered $A=8.4$ mg/mL and $B=15.6$ mg/mL. Batch 3's $8$ mg audit discrepancy (predicted $9708$ versus recorded $9700$) does not rewrite those concentrations.

**1.** Concentration gap:

$$15.6 - 8.4 = 7.2$$

**2.** Gap over A:

$$\\frac{7.2}{8.4} = \\frac{72}{84} = \\frac{6}{7} \\approx 0.85714$$

**3.** Eighty-five percent of A, as a cutoff gap:

$$0.85 \\times 8.4 = 7.14$$

The actual gap $7.2$ sits $0.06$ mg/mL above $7.14$, so about $85.7\\%$, which exceeds $85\\%$. Equivalently, the cutoff concentration is $1.85 \\times 8.4=15.54$, and recovered $B=15.6$ sits just above that.

A solver who used $15.6/8.4 \\approx 1.857$ and reported $185.7\\%$ would have forgotten to subtract $1$ from a "higher than" claim. A solver who used $7.2/15.6 \\approx 46.2\\%$ against B would fail the cutoff. The trap figure $185.7\\%$ is the ratio left as a multiple. Another trap is Batch 2's volume share $700/900$ treated as a concentration ratio.

The opposite verdict would need $B \\le 15.54$. Recovered $B=15.6$.

B is about $85.7\\%$ higher than A, more than $85\\%$, so the statement is True.`,

  "math-5-52:D": `The statement claims the pooled content of Batch 1 and Batch 2 is less than twice Batch 2's content alone. Batch 1 printed $8880$ mg. Batch 2 printed $12600$ mg. Concentrations are not re-solved. This is a comparison of printed contents, with one extra doubling.

**1.** Pooled content:

$$8880 + 12600 = 21480$$

**2.** Twice Batch 2:

$$2 \\times 12600 = 25200$$

**3.** Gap by which the pool undershoots the double:

$$25200 - 21480 = 3720$$

which is exactly Batch 2 minus Batch 1: $12600-8880=3720$. Equivalently, Batch 1 is smaller than Batch 2, so Batch 1 plus Batch 2 is less than two times Batch 2.

A solver who pooled all three batches, $21480+9700=31180$, would overshoot $25200$ and flip the verdict. The trap figure $9700$ is Batch 3's recorded content mixed into a two-batch claim. A solver who doubled Batch 1 instead, $2 \\times 8880=17760$, would find the pool $21480$ *larger* than that double and would answer a different comparison.

The opposite verdict would need Batch 1 to meet or exceed Batch 2. With $8880 < 12600$, the pooled total is less than twice Batch 2. Predicted Batch 3 $9708$ is not in this pool.

Pooled $21{,}480$ mg is less than twice Batch 2's $12{,}600$ mg, so the statement is True.`,

  "math-5-52:E": `The statement claims Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did. This is a volume-share comparison. Concentrations $8.4$ and $15.6$ do not enter, and neither do the milligram totals. Batch 2 is $200$ mL A and $700$ mL B. Batch 3 is $0.32$ L A, already converted in the table as $320$ mL, and $450$ mL B.

**1.** Batch 2's B-share:

$$\\frac{700}{200+700} = \\frac{700}{900} = \\frac{7}{9} \\approx 0.7778$$

**2.** Batch 3's B-share:

$$\\frac{450}{320+450} = \\frac{450}{770} = \\frac{45}{77} \\approx 0.5844$$

**3.** Compare:

$$0.7778 > 0.5844$$

The gap is about $19.3$ percentage points. Batch 1's B-share $300/800=0.375$ is even leaner on B, but the claim names Batch 2 versus Batch 3.

A solver who used $0.32$ L unconverted as $0.32$ mL would get Batch 3's share $450/450.32 \\approx 1$ and would scramble the comparison. The trap figure is that unconverted $0.32$. A solver who compared B *millilitres* $700$ vs $450$ without dividing by each batch's total would still find Batch 2 larger, but that is a volume comparison, not a proportion comparison. The claim is proportion.

The opposite verdict would need Batch 2 to be leaner on B than Batch 3. With $700$ of $900$ mL as B, Batch 2 is the B-heavier mix.

Batch 2's B-share about $78\\%$ exceeds Batch 3's about $58\\%$, so the statement is True.`,

  "math-5-53:C": `The statement claims Job 2's usable-material cost is more than $90\\%$ of Invoice 2's as-ordered total. The overview already recovered studs at $\\$4.50$ and drywall at $\\$38$. Usable Job 2 is $350$ studs and $175$ sheets. Invoice 2 printed $\\$8{,}946$. Waste is $12\\%$ extra studs and $8\\%$ extra drywall, already inside that invoice. This letter costs the usable basket, then divides by the printed invoice.

**1.** Usable cost:

$$350 \\times 4.50 + 175 \\times 38 = 1575 + 6650 = 8225$$

**2.** Share of invoice:

$$\\frac{8225}{8946} \\approx 0.9194$$

**3.** Waste dollars, as a check:

$$8946 - 8225 = 721$$

and $721/8946 \\approx 0.0806$, so waste is about $8.1\\%$ of the invoice and usable is about $91.9\\%$, which exceeds $90\\%$. Ninety percent of $\\$8{,}946$ is $\\$8{,}051.40$, and usable $\\$8{,}225$ sits $\\$173.60$ above that cutoff.

A solver who used Job 1's $6600/7164 \\approx 92.1\\%$ would still pass $90\\%$, but the claim names Job 2. The trap is mixing Job 1's waste share into Job 2. Another trap is treating waste as $12\\%$ of the whole invoice because stud waste is $12\\%$; drywall waste is only $8\\%$, and drywall dollars dominate Job 2, so the blended waste share is nearer $8\\%$ than $12\\%$.

The opposite verdict would need usable cost at or below $\\$8{,}051.40$. With $8225$, the share is $91.9\\%$.

Usable material is about $91.9\\%$ of Invoice 2, more than $90\\%$, so the statement is True.`,

  "math-5-54:A": `The statement claims the scale factor exceeds $3.4$ by more than $2.5\\%$. The overview already recovered scale $3.50$ and offset $13.50$. The offset does not enter a claim about the scale alone. The extra arithmetic is the relative gap above $3.4$.

**1.** Gap above $3.4$:

$$3.50 - 3.40 = 0.10$$

**2.** Relative to $3.4$:

$$\\frac{0.10}{3.40} \\approx 0.02941$$

**3.** Two-and-a-half percent of $3.4$:

$$0.025 \\times 3.40 = 0.085$$

The actual gap $0.10$ sits $0.015$ above $0.085$, so about $2.94\\%$, which exceeds $2.5\\%$. Equivalently, the cutoff scale is $3.4 \\times 1.025=3.485$, and recovered $3.50$ sits $0.015$ above that.

A solver who used $0.10/3.50 \\approx 2.86\\%$ against the scale itself would still pass $2.5\\%$, but that is a different base. A solver who treated $3.50-3.4=0.10$ as if $0.10$ were already $2.5\\%$ of something would mix a difference with a relative gap. The trap figure $0.10$ is the raw gap, not a percent. Point 3's verification discrepancy does not rewrite the recovered scale.

The opposite verdict would need scale at or below $3.485$. Recovered $3.50$ sits above that.

The scale $3.50$ exceeds $3.4$ by about $2.94\\%$, more than $2.5\\%$, so the statement is True.`,

  "math-5-54:B": `The statement doubles the offset, holds the scale, and claims the predicted true value at a reading of $20$ would exceed $95$. This is a new-offset counterfactual, not Point 1 or Point 2. The overview already recovered scale $3.50$ and offset $13.50$. New offset is $2 \\times 13.50=27$. Reading $20$ is not a calibration point.

**1.** Scale times the new reading:

$$3.50 \\times 20 = 70$$

**2.** Add the doubled offset:

$$70 + 27 = 97$$

**3.** Compare with $95$:

$$97 > 95$$

The prediction overshoots $95$ by $2$. With the original offset the same reading would be $70+13.50=83.50$, which fails $95$; doubling the offset is what carries the claim.

A solver who doubled the scale instead would get $7 \\times 20 + 13.50=153.50$, still above $95$. The trap figure $153.50$ is a doubled scale, not a doubled offset. A solver who used reading $12.4$ from Point 1 would get $3.50 \\times 12.4 + 27=43.4+27=70.4$, which fails $95$ and would flip the verdict. The claim names reading $20$. The verification-check discrepancy at reading $45$ does not rewrite this counterfactual.

The opposite verdict would need $3.50 \\times 20 + 27 \\le 95$, so $97 \\le 95$, which fails.

At reading $20$ with doubled offset the prediction is $97$, which exceeds $95$, so the statement is True.`,

  "math-5-54:D": `The statement claims the percentage increase in true value between Point 1 and Point 2 is more than $100\\%$. Point 1 true value is $56.90$. Point 2 true value is $124.45$. Scale and offset are not re-solved. A $100\\%$ increase means Point 2 more than doubles Point 1.

**1.** True-value gap:

$$124.45 - 56.90 = 67.55$$

**2.** Gap over Point 1:

$$\\frac{67.55}{56.90} \\approx 1.1863$$

**3.** Double Point 1, as a cutoff:

$$2 \\times 56.90 = 113.80$$

Point 2 is $124.45$, which sits $10.65$ above $113.80$, so the increase is about $118.7\\%$, which exceeds $100\\%$.

A solver who used readings $31.7/12.4 \\approx 2.556$ and reported a $155.6\\%$ reading increase would be comparing raw readings, also more than $100\\%$ up, but the claim names true values. The trap figure $155.6\\%$ is the reading ratio's increase. The offset $13.50$ is why true-value growth ($118.7\\%$) is slower than reading growth ($155.6\\%$): a positive intercept makes the output less than proportional to the input.

The opposite verdict would need Point 2 at or below $113.80$. With Point 2 at $124.45$, the increase exceeds $100\\%$.

The true-value increase is about $119\\%$, more than $100\\%$, so the statement is True.`,

  "math-5-54:E": `The statement claims a reading of $8.0$ would produce a predicted true value less than half of Point 1's true value $56.90$. This is a new-reading counterfactual plus a false half-comparison. The overview already recovered scale $3.50$ and offset $13.50$. Half of $56.90$ is $28.45$. Reading $8.0$ is not a calibration point.

**1.** Predicted at reading $8.0$:

$$3.50 \\times 8 + 13.50 = 28 + 13.50 = 41.50$$

**2.** Half of Point 1:

$$56.90 / 2 = 28.45$$

**3.** Compare:

$$41.50 < 28.45$$

is false. The prediction $41.50$ sits $13.05$ *above* half of Point 1, not below it. The offset $13.50$ is almost the entire excess: without the offset the scale piece is $28$, which *would* sit just under $28.45$ and would flip the verdict.

The trap figure $28$ is that offset-free prediction. A through-the-origin rule is the rushed solver's habit after seeing "scale factor $3.50$." Another trap is taking half of reading $12.4$, getting $6.2$, then predicting $3.50 \\times 6.2 + 13.50=35.20$, still not below $28.45$. The offset is the whole content of this letter: it keeps a low reading from scaling down as far as a proportional rule would.

The opposite verdict would need $3.50 \\times 8 + 13.50 < 28.45$, so $41.50 < 28.45$, which fails. Point 3's verification row does not rewrite scale or offset.

The prediction at reading $8$ is $41.50$, which is not less than $28.45$, so the statement is False.`,

  "math-5-57:E": `The statement claims the bond rate is more than $80\\%$ of the equity rate. The overview already recovered bond $5.4\\%$ and equity $6.6\\%$. The two allocation dollars $\\$2{,}646$ and $\\$2{,}754$ are not re-solved. The extra arithmetic is the quotient, then a cutoff comparison.

**1.** Bond over equity:

$$\\frac{5.4}{6.6} = \\frac{54}{66} = \\frac{9}{11} \\approx 0.81818$$

**2.** Eighty percent of equity:

$$0.80 \\times 6.6 = 5.28$$

**3.** Compare the bond rate with that cutoff:

$$5.4 > 5.28$$

About $81.8\\%$ of equity, which exceeds $80\\%$. The gap above the cutoff is $0.12$ percentage points.

A solver who used $5.4/6.0=90\\%$ against a round $6\\%$ would overstate the share. A solver who used $6.6/5.4 \\approx 1.222$ and reported $122\\%$ is answering letter A's "higher than" story, not a bond-as-a-share-of-equity story. The trap figure $1.22$ is the inverted ratio. Another trap is using the current blended $5.88\\%$ in the denominator: $5.4/5.88 \\approx 91.8\\%$, which still passes $80\\%$ but is not the equity rate.

The opposite verdict would need bond at or below $5.28\\%$. Recovered bond is $5.4\\%$. The current $60/40$ split does not rewrite the two sleeve rates.

The bond rate is about $81.8\\%$ of the equity rate, more than $80\\%$, so the statement is True.`,
};

const patches = [];
for (const e of index) {
  const body = bodies[`${e.id}:${e.letter}`];
  if (!body) continue;
  patches.push({
    file: e.file,
    id: e.id,
    idx: e.idx,
    letter: e.letter,
    key: e.key,
    body,
  });
}

const applied = applyMidPatches(patches);
for (const a of applied) console.log(a.id, a.letter, a.words);
console.log("applied", applied.length);
