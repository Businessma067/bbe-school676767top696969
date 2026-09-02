import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-55": [
    `The statement claims Coffee costs more than $25\\%$ more per kilogram than Cocoa.

The overview already recovered Coffee at $\\$6.20$/kg and Cocoa at $\\$4.85$/kg.

$$\\frac{6.20 - 4.85}{4.85} = \\frac{1.35}{4.85} \\approx 0.2784$$

about $27.8\\%$, which exceeds $25\\%$. A solver who used $1.35/6.20 \\approx 21.8\\%$ against Coffee would fail the cutoff. The claim is Coffee's premium over Cocoa, so Cocoa is the base.

Coffee is about $27.8\\%$ dearer than Cocoa, more than $25\\%$, so the statement is True.`,

    `The statement claims Shipment 1's Coffee cost is more than $65\\%$ of Shipment 1's total cost.

Shipment 1 is $520$ kg mixed $3:2$, so $312$ kg Coffee and $208$ kg Cocoa. Coffee cost: $312 \\times 6.20=1934.40$. Total: $\\$2{,}943.20$.

$$\\frac{1934.40}{2943.20} \\approx 0.6572$$

about $65.7\\%$, which exceeds $65\\%$. The $3:2$ mix already puts $60\\%$ of mass in Coffee, and Coffee is the dearer commodity, so the dollar share sits above $60\\%$, here just above $65\\%$.

A solver who reported the mass share $3/5=60\\%$ as the dollar share would fail the $65\\%$ cutoff. Prices matter.

Shipment 1's Coffee line is about $65.7\\%$ of its cost, more than $65\\%$, so the statement is True.`,

    `The statement changes Shipment 2 from $5:3$ to $1:1$ at the same $800$ kg, and claims the total cost would be lower than $\\$4{,}555$.

A $1:1$ split is $400$ kg of each.

**1.** Coffee:

$$400 \\times 6.20 = 2480$$

**2.** Cocoa:

$$400 \\times 4.85 = 1940$$

**3.** Combined, then compare with $4555$:

$$2480 + 1940 = 4420$$

Then $4420 < 4555$. Moving mass from Coffee onto Cocoa, the cheaper commodity, lowers the bill by $\\$135$. The actual $5:3$ mix is $500$ kg Coffee and $300$ kg Cocoa; the $1:1$ mix shifts $100$ kg, and $100 \\times (6.20-4.85)=135$.

A solver who used $5:3$ still would report $4555$ and find no decrease. The ratio change is the whole content of this letter.

The $1:1$ shipment costs $\\$4{,}420$, lower than $\\$4{,}555$, so the statement is True.`,

    `The statement claims total Cocoa cost across both shipments exceeds total Coffee cost across both shipments.

Coffee kg: $312+500=812$. Cocoa kg: $208+300=508$.

**1.** Coffee dollars:

$$812 \\times 6.20 = 5034.40$$

**2.** Cocoa dollars:

$$508 \\times 4.85 = 2463.80$$

**3.** Compare:

$$2463.80 < 5034.40$$

Cocoa dollars are not larger. Coffee has both more kilograms and a higher price. A solver who compared kilograms $508$ and $812$ would already see Coffee ahead on mass; the dollar gap is even wider.

Combined Cocoa cost $\\$2{,}463.80$ does not exceed combined Coffee cost $\\$5{,}034.40$, so the statement is False.`,

    `The statement claims the price gap $x-y$ is less than $30\\%$ of Coffee's price.

$$6.20 - 4.85 = 1.35, \\qquad \\frac{1.35}{6.20} \\approx 0.2177$$

about $21.8\\%$, which is less than $30\\%$. Letter A used Cocoa as the base and got $27.8\\%$. This letter uses Coffee as the base, so the same dollar gap is a smaller share.

A solver who reused letter A's $27.8\\%$ here would still pass "less than $30\\%$," so that base-swap would not flip the verdict. A solver who used $1.35/4.85$ and compared with $30\\%$ would still pass. The honest figure for this letter is $21.8\\%$ of Coffee.

The gap is about $21.8\\%$ of Coffee's price, less than $30\\%$, so the statement is True.`,
  ],

  "math-5-56": [
    `The statement claims Truck fuel consumption is more than $75\\%$ higher than Van fuel consumption.

The overview already recovered Truck $32.0$ L/$100$ km and Van $18.0$ L/$100$ km.

$$\\frac{32.0 - 18.0}{18.0} = \\frac{14}{18} \\approx 0.7778$$

about $77.8\\%$, which exceeds $75\\%$. A solver who used $32/18 \\approx 1.778$ and reported $178\\%$ would have skipped the "higher than" subtraction. A solver who used $14/32=43.75\\%$ against the Truck would fail the cutoff.

Truck consumption is about $77.8\\%$ higher than Van, more than $75\\%$, so the statement is True.`,

    `The statement claims Route 3's predicted fuel, after converting $155.3$ mi to kilometres, is more than $2\\%$ below its recorded value.

The overview already predicted $152.0$ L against a recorded $155.0$ L. The conversion $155.3$ mi $\\approx 250$ km is already in that prediction.

$$\\frac{155.0 - 152.0}{155.0} = \\frac{3}{155} \\approx 0.01935$$

about $1.94\\%$, which is not more than $2\\%$. The prediction is below the recorded value, but shy of a $2\\%$ relative gap.

A solver who used $3/152 \\approx 1.97\\%$ against the prediction would still fail $2\\%$. A solver who treated $155.3$ mi as $155.3$ km would wreck the Truck term and manufacture a large gap.

The prediction sits about $1.94\\%$ below $155.0$ L, not more than $2\\%$ below, so the statement is False.`,

    `The statement raises Route 1's Van distance to $900$ km, Truck unchanged at $850$ km, and claims total fuel would exceed $430$ L.

Route 1 printed $383.6$ L. Extra Van distance $900-620=280$ km at $18.0$ L/$100$ km.

**1.** Extra Van fuel:

$$2.80 \\times 18.0 = 50.4$$

**2.** New total:

$$383.6 + 50.4 = 434.0$$

**3.** Compare with $430$:

$$434 > 430$$

Directly: $850 \\times 0.320 + 900 \\times 0.180 = 272 + 162 = 434$. A solver who used $900$ km of Truck instead would add far more fuel and still exceed $430$, so that swap would not flip the verdict, but it would be the wrong vehicle.

The counterfactual Route 1 uses $434$ L, which exceeds $430$ L, so the statement is True.`,

    `The statement claims Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's.

Route 2 used $322.0$ L over $500+900=1400$ km, so $322/1400=0.230$ L/km, or $23.0$ L/$100$ km.

Distance to Van $18.0$ is $5.0$. Distance to Truck $32.0$ is $9.0$. Then $5<9$, so $23$ is closer to the Van. Route 2 is Van-heavy ($900$ km versus $500$), so the average leans toward $18$.

A solver who used a $50/50$ blend $25$ would still be closer to $18$ than to $32$, but $23$ is the honest mix average.

Route 2's $23.0$ L/$100$ km sits closer to $18$ than to $32$, so the statement is True.`,

    `The statement claims Route 1's total fuel is less than the sum of what each vehicle type would use if it alone covered the full combined distance $1470$ km at its own rate.

**1.** Truck alone on $1470$ km:

$$14.70 \\times 32.0 = 470.4$$

**2.** Van alone on $1470$ km:

$$14.70 \\times 18.0 = 264.6$$

**3.** Sum of those two solo runs, then compare with Route 1's $383.6$:

$$470.4 + 264.6 = 735.0, \\qquad 383.6 < 735.0$$

Route 1 splits $1470$ km across the two types; it does not run both types over the whole distance. The inequality is then immediate: actual fuel is a weighted average of $32$ and $18$, times $1470$ km, which sits between $264.6$ and $470.4$, far below the sum $735$.

A solver who compared $383.6$ with $470.4$ only would still find $383.6$ smaller, but the claim is against the *sum* of both solo runs.

Route 1's $383.6$ L is less than $735$ L, so the statement is True.`,
  ],
};

applyLetters("51_60.json", patches);
console.log("applied 55-56");
