import fs from "node:fs";
import path from "node:path";

const DIR = "textbook/output/_ch8_v3";
const files = [
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
  "61_70.json",
  "71_80.json",
  "81_90.json",
  "91_97.json",
];

const stemById = {
  "math-8-71":
    "A streaming service prices one subscription tier at $p$ euros a month. Paid subscribers, in thousands, follow $q(p)=A p^{r}$ with both constants unknown. Quadrupling any price multiplies the subscriber count by $\\frac{1}{8}$, and at $4$ euros the tier holds $250$ thousand subscribers. Monthly revenue is $R=pq$, also in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-72":
    "A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. $100$ branches cost $700$ euros, and $400$ branches cost $1000$ euros. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-73":
    "A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros, with both coefficients unknown. At a batch of $40$ units the two components are equal, and each is $120$ euros. The annual total is $T=O+H$. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-74":
    "Output on a bottling line follows $Q(L)=A L^{r}$ units a shift, where $L>0$ is labour hours, with both constants unknown. $16$ hours produce $96$ units, and $81$ hours produce $324$. Average product is output per labour hour, $Q(L)/L$. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-75":
    "A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=F+A n^{-\\frac{1}{2}}$ minutes, $n\\ge 1$, with both constants unknown. After $25$ units the next unit takes $18$ minutes, and after $100$ units it takes $13$. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-76":
    "A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros in a season, where $x>0$ is tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At $8$ tonnes of feed, harvest revenue was $360$ thousand euros. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-77":
    "A distribution centre models daily handling cost by $f(x)=A x^{\\frac{3}{2}}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-78":
    "A dye-house discharges a wastewater load of $W(s)=A s^{\\frac{3}{2}}$ kilograms a day, where $s>0$ is a production scale index. At scale $9$ the daily load is $135$ kilograms. The site permit caps the daily load at $320$ kilograms, and the plant wants the largest scale it may run. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-79":
    "A city parking authority models hourly demand by $q(p)=A p^{-2}$ occupied spaces, where $p>0$ is the hourly tariff in euros. It records $4000$ occupied spaces at a tariff of $3$ euros. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-80":
    "A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is height in metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ metres was weighed at $30$ kilograms. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-82":
    "The signal a locator receives from a buried conductor follows $S(x)=A x^{r}$ millivolts, where $x>0$ is the burial depth in metres. Neither constant is posted. Doubling any burial depth cuts the received signal to $\\frac{1}{8}$, and a calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-85":
    "Dose rate near an industrial radiography source follows $H(d)=A d^{r}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. Neither constant is posted. Quadrupling any distance cuts the dose rate to $\\frac{1}{16}$, and a survey meter $3$ metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-91":
    "A field team models wetland evaporation in millimetres per day by $E(h)=A h^{r}$ against humidity deficit $h>0$, with both constants unknown. Deficits of $1$ and $4$ recorded $20$ and $40$ millimetres per day, and a third reading at deficit $9$ recorded $60$. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-92":
    "A city parks office models annual cooling benefit by $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep by $C(n)=k n$ thousand euros, where $n>0$ is the number of thousand trees planted. Raising the planting from $4$ thousand trees to $9$ thousand increased cooling benefit by $12$ thousand euros. At $9$ thousand trees, upkeep was $18$ thousand euros. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-93":
    "Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is the price in euros. At a price of $5$ euros the kiosk sold $80$ packs. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-94":
    "Weekly bike-share day-pass sales follow $q(p)=A p^{\\frac{-3}{2}}$ when the pass price is $p>0$ euros. A pilot at $16$ euros sold $50$ passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index $8$ the posted price is $16$ euros. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-95":
    "A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$, where $q$ is that line's own output in thousands of loaves. A $10$-thousand-loaf run on line 1 scored $100$, and an $8$-thousand-loaf run on line 2 scored $16$. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-96":
    "Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At $10$ euros the desk sold $40$ tickets. Evaluate each statement. Mark it TRUE or FALSE.",
  "math-8-97":
    "A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting $4$ delivered $64$ trays an hour. Evaluate each statement. Mark it TRUE or FALSE.",
};

const stmtPatch = {
  "math-8-11": [
    "After $64$ hours the harvest is already above $7$ kilograms.",
    "Doubling watering from $8$ hours to $16$ hours doubles the harvest.",
    "A $27$-hour watering still yields under $5$ kilograms.",
    "To reach $8$ kilograms she must already exceed $50$ hours.",
    "The extra harvest from $8$ hours to $27$ hours already exceeds the $8$-hour record of $4$ kilograms.",
  ],
  "math-8-16": [
    "Raising the job count from $8$ to $16$ adds more load than the recorded peak of $32$.",
    "The hardware alarm of $200$ already trips at $16$ simultaneous jobs.",
    "Load per job at $16$ jobs already exceeds load per job at $8$.",
    "The job count that trips the alarm of $200$ is already above $18$.",
    "After $10$ simultaneous jobs, peak load is already above $40$.",
  ],
  "math-8-24": [
    "The extra capacity from widening $4$ cm to $9$ cm already exceeds the bench reading of $64$ litres per second.",
    "Measuring diameter in millimetres makes the new coefficient larger than $0.01$.",
    "A $16$ cm pipe already delivers more than $30$ times the $64$ litre bench capacity.",
    "Doubling the diameter from $4$ cm to $8$ cm multiplies capacity by less than $5$.",
    "To reach $500$ litres per second the diameter must already exceed $9$ cm.",
  ],
  "math-8-27": [
    "After three successive doublings from $N=1$ to $N=8$ the modelled unit cost is already under $520$.",
    "After four successive doublings from $N=1$ to $N=16$ the modelled unit cost is already under $400$.",
    "Quadrupling cumulative output from $N=1$ to $N=4$ halves the unit cost.",
    "After one doubling from $N=1$ to $N=2$, unit cost is already under $850$.",
    "The cost cut from the first unit to $N=8$ already exceeds $450$.",
  ],
  "math-8-34": [
    "To double the test-firing output of $324$ tonnes, the fuel feed must more than double from $27$.",
    "Two firings at a feed of $8$ together already fall short of one firing at a feed of $27$.",
    "A feed of $8$ produces more than $50$ tonnes.",
    "The licensed ceiling of $1024$ tonnes binds before a feed of $50$.",
    "The extra output from feed $8$ to feed $27$ already exceeds $250$ tonnes.",
  ],
  "math-8-45": [
    "The extra throughput from feed $8$ to $27$ already exceeds the $8$-feed reading of $16$.",
    "Doubling the gas feed from $8$ to $16$ doubles throughput.",
    "A feed of $64$ already produces more than $60$ tonnes per hour.",
    "Throughput per cubic metre falls from feed $8$ to $27$ by more than $0.5$.",
    "The licensed ceiling of $32$ tonnes is reached at a feed below $24$ cubic metres per hour.",
  ],
  "math-8-56": [
    "A zone $9$ kilometres away still supplies more than $100$ visitors a week.",
    "Footfall follows an inverse-square law $d^{-2}$ of driving distance.",
    "The drop from $4$ km to $16$ km already exceeds the remaining footfall at $16$ km.",
    "Core catchment of $100$ visitors already ends before $11$ kilometres.",
    "An extra kilometre of drive from $4$ km cuts more visitors than an extra kilometre from $16$ km.",
  ],
  "math-8-59": [
    "A discharge of $400$ already pushes transport above $4500$ tonnes per day.",
    "At discharge $64$, transport is still under $300$ tonnes per day.",
    "Doubling the discharge from $64$ to $128$ more than doubles sediment transport.",
    "Doubling the flow velocity from $3$ to $6$ doubles sediment transport.",
    "The extra transport from discharge $64$ to $400$ already exceeds $4500$.",
  ],
  "math-8-66": [
    "The trusted quadratic already puts $9$ metres above $155$ mm.",
    "The recorded third run of $150$ mm sits more than $10$ mm below the trusted quadratic.",
    "Doubling the free span from $3$ m to $6$ m doubles the tip deflection.",
    "At span $6$ m the trusted law already exceeds $70$ mm.",
    "The extra predicted deflection from $3$ m to $6$ m already exceeds the $3$ m reading of $18$ mm.",
  ],
  "math-8-70": [
    "To double the logged $80$ pallets, the yard must more than double the crew of $16$.",
    "With $36$ drivers the model already predicts more than $110$ pallets per hour.",
    "Throughput per driver falls from $16$ to $36$ drivers by more than $1$ pallet per driver.",
    "Reaching $150$ pallets per hour stays inside the safety cap of $36$ drivers.",
    "Two $16$-driver shifts already match one $64$-driver shift.",
  ],
  "math-8-72": [
    "Monitoring $900$ branches costs more than $1200$ euros a month.",
    "At $36$ branches the bill already exceeds the $100$-branch invoice of $700$ euros.",
    "Quadrupling the branch count from $100$ to $400$ doubles the whole bill.",
    "A $100$-branch network already costs more than $650$ euros.",
    "The extra bill from $100$ to $400$ branches already exceeds the $100$-branch bill of $700$ euros.",
  ],
  "math-8-73": [
    "A batch of $60$ units costs more than $250$ euros a year in total.",
    "At $80$ units, ordering cost is more than $200$ euros.",
    "Doubling any batch size from $40$ to $80$ leaves the annual total unchanged.",
    "Cutting the batch from $40$ to $20$ raises the annual total by as much as raising it from $40$ to $80$.",
    "At $40$ units the annual total is already under $250$ euros.",
  ],
  "math-8-74": [
    "At $16$ hours, average product is under $7$ units an hour.",
    "To double the $96$-unit output she must double the $16$ labour hours.",
    "Average product falls by more than $1.5$ units an hour from $16$ to $81$ hours.",
    "At $81$ hours, average product still exceeds $5$ units an hour.",
    "The extra output from $16$ to $81$ hours already exceeds the $16$-hour output of $96$.",
  ],
  "math-8-75": [
    "After $900$ cumulative units, modelled unit time is already under $10$ minutes.",
    "The unit built after $4$ cumulative units takes under $30$ minutes.",
    "Quadrupling cumulative output from $25$ to $100$ halves the modelled unit time.",
    "After $25$ units, modelled unit time is already under $20$ minutes.",
    "The time cut from $n=25$ to $n=100$ already exceeds $4$ minutes.",
  ],
  "math-8-77": [
    "Multiplying the pallet-volume index by $4$ from $4$ to $16$ multiplies handling cost by $4$.",
    "At index $9$ the modelled handling cost is already above $150$ euros.",
    "Handling cost grows faster than the pallet-volume index because the exponent $\\frac{3}{2}$ exceeds $1$.",
    "Equal gaps of $5$ in the index, from $4$ to $9$ and from $9$ to $14$, produce equal gaps in cost.",
    "Raising the index from $9$ to $25$ adds under $500$ euros of handling cost.",
  ],
  "math-8-78": [
    "The largest admissible scale under the $320$ kg cap is already below $20$.",
    "Doubling the permit ceiling from $320$ to $640$ doubles the admissible scale index.",
    "If the coefficient doubled from $5$ to $10$, the admissible scale under the $320$ kg ceiling would be halved.",
    "At scale index $4$ the daily load is under $50$ kilograms.",
    "The extra load from scale $4$ to scale $9$ already exceeds the load at scale $4$.",
  ],
  "math-8-80": [
    "A bell of height $1.5$ m already weighs more than $700$ kg.",
    "Doubling a bell's height from $0.5$ m to $1$ m doubles its mass.",
    "A $1$-metre bell already weighs more than $200$ kg.",
    "Two $1$ m bells together already fall short of one $1.5$ m bell.",
    "Raising height from $1$ m to $2$ m adds more than $1600$ kg.",
  ],
  "math-8-82": [
    "The received signal is inversely proportional to burial depth, so doubling from $2$ m to $4$ m halves it.",
    "Doubling burial depth from $2$ m to $4$ m halves the received signal.",
    "A conductor buried at $4$ metres already returns under $7$ millivolts.",
    "A reading of $3.2$ millivolts still corresponds to a burial depth of more than $8$ metres.",
    "The drop from $2$ m to $4$ m already exceeds the remaining signal at $4$ m.",
  ],
  "math-8-84": [
    "A tube of radius $3$ mm already delivers more than $200$ litres per hour.",
    "Doubling the tube radius from $1$ mm to $2$ mm doubles the flow.",
    "A tube of radius $1$ mm still delivers more than $10$ litres per hour.",
    "The mean velocity index $\\frac{Q}{\\pi r^{2}}$ is the same at $1$ mm and at $2$ mm.",
    "Two $1$ mm tubes together already fall short of one $2$ mm tube.",
  ],
  "math-8-85": [
    "Doubling the distance from $3$ m to $6$ m halves the dose rate.",
    "The drop from $3$ metres to $6$ metres already exceeds the remaining dose at $6$ metres.",
    "The $5$ microsievert barrier is already reached before $13$ metres.",
    "At $6$ metres the dose rate is already under $25$ microsieverts per hour.",
    "The barrier sits farther than $15$ metres from the source.",
  ],
  "math-8-87": [
    "Switching the head from $1$ m to $100$ cm makes the new coefficient (cubic metres per second) larger than $0.02$.",
    "A head of $1$ metre still discharges under $20$ cubic metres per second.",
    "Doubling the head from $0.25$ m to $0.5$ m doubles the discharge.",
    "A head of $4$ metres still discharges under $100$ cubic metres per second.",
    "The extra discharge from $0.25$ m to $1$ m already exceeds the $0.25$ m gauging of $2$.",
  ],
  "math-8-91": [
    "After a humidity deficit of $25$, evaporation is already more than $90$ millimetres per day.",
    "Doubling the humidity deficit from $1$ to $2$ doubles evaporation.",
    "To double the $40$-millimetre reading she must already exceed $10$ of deficit.",
    "After a deficit of $4$, evaporation is still under $35$ millimetres per day.",
    "The extra evaporation from deficit $1$ to $4$ already exceeds $15$ millimetres per day.",
  ],
  "math-8-92": [
    "At $9$ thousand trees, net benefit is already more than $15$ thousand euros.",
    "At $4$ thousand trees, net benefit is already more than $20$ thousand euros.",
    "Doubling the planting from $4$ to $8$ thousand trees doubles net benefit.",
    "Once upkeep overtakes cooling benefit, the net at $36$ thousand trees is already under $5$.",
    "The extra net from $4$ to $9$ thousand trees already falls short of $5$ thousand euros.",
  ],
  "math-8-93": [
    "At $10$ euros the kiosk already sells under $25$ packs a week.",
    "A target of $125$ packs a week needs a price above $5$ euros.",
    "Doubling the $5$-euro price to $10$ euros halves weekly demand.",
    "At $5$ euros weekly revenue already exceeds $350$.",
    "The demand drop from $5$ to $10$ euros already exceeds $50$ packs.",
  ],
  "math-8-94": [
    "At subsidy index $8$, composed demand is already more than $40$ passes.",
    "At subsidy index $27$, composed demand stays under $16$ passes.",
    "Tripling the subsidy index from $8$ to $24$ triples composed demand.",
    "Raising the subsidy index from $8$ to $27$ raises composed demand.",
    "The demand drop from subsidy $8$ to $27$ already exceeds $30$ passes.",
  ],
  "math-8-95": [
    "Sending all $30$ thousand loaves to line 2 scores more than $200$.",
    "The $6$-and-$24$ split scores under $200$.",
    "Concentrating the whole $30$ thousand on the cheaper line is the cheapest plan.",
    "Line 1's average cost index falls as its own output rises from $6$ to $24$.",
    "Two batches of $12$ thousand on line 2 together already fall short of one batch of $24$ thousand on line 2.",
  ],
  "math-8-96": [
    "Raising the price from $10$ to $12$ euros cuts demand by more than $10$ tickets.",
    "At $5$ euros the desk already sells more than $150$ tickets.",
    "Weekly revenue $R=pq$ is maximized by raising the $10$-euro price without bound.",
    "At $10$ euros the desk already sells more than $35$ tickets.",
    "The exact drop from $10$ to $12$ euros already exceeds the $10\\%$ shortcut of $4$ tickets.",
  ],
  "math-8-97": [
    "At belt setting $9$, throughput is already more than $200$ trays per hour.",
    "If the coefficient were $25\\%$ larger, throughput at setting $9$ would already exceed $250$ trays per hour.",
    "If the coefficient were $25\\%$ larger, the scale factor $T(2e)/T(e)$ would itself become $25\\%$ larger.",
    "Doubling the belt setting from $4$ to $8$ doubles throughput.",
    "The extra throughput from setting $4$ to $9$ already exceeds $140$ trays per hour.",
  ],
};

let nStem = 0;
let nStmt = 0;
for (const f of files) {
  const p = path.join(DIR, f);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
  for (const t of arr) {
    if (stemById[t.id]) {
      t.context = stemById[t.id];
      nStem += 1;
    }
    if (stmtPatch[t.id]) {
      if (stmtPatch[t.id].length !== 5) throw new Error(`bad patch ${t.id}`);
      t.statements = stmtPatch[t.id];
      nStmt += 1;
    }
  }
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
}
console.log("stems", nStem, "stmt sets", nStmt);
