import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-27": [
    `The statement is a claim about the Standard planting price. Job 1 is billed in bundles; Job 2 is billed in units. The overview already expanded the bundles and recovered $x = 29$.

This letter does not rebuild that pair. It only asks whether the recovered Standard price is the number in the claim.

A solver who divided Job 2's $\\$1{,}301$ by $13$ Standard units, ignoring Premium, would land on $\\$100$ and miss the claim.

The recovered Standard price is $\\$29$ per unit, so the statement is True.`,

    `The statement claims Premium planting costs $\\$50$ per unit.

The overview already recovered $y = 44$. The claim writes $\\$50$, six dollars above that leftover.

At $y=50$, Job 2 would be $13(29)+21(50)=377+1050=1427$, which overshoots $\\$1{,}301$ by $\\$126$. Those extra $\\$126$ are twenty-one Premium units times a $\\$6$ overstatement.

The claimed $\\$50$ sits $\\$6$ above the recovered $\\$44$, so the statement is False.`,

    `The statement expands Job 1's $7$ bundles into unit counts. Each bundle is $2$ Standard plus $5$ Premium.

The extra arithmetic is only that expansion. Unit prices are not needed.

**1.** Standard units in Job 1:

$$7 \\times 2 = 14$$

**2.** Premium units in Job 1:

$$7 \\times 5 = 35$$

Job 1 is $14$ Standard and $35$ Premium once the bundles are unpacked. A solver who treated a bundle as $2+5=7$ units of one type would report $49$ mixed units and miss the split.

Job 1 expands to $14$ Standard and $35$ Premium, so the statement is True.`,

    `The statement compares Job 1's Premium portion alone with the entirety of Job 2.

The overview already recovered $y=44$, and letter C expanded Job 1 to $35$ Premium units. Job 2's printed total is $\\$1{,}301$. The extra arithmetic is only costing those $35$ Premium units.

**1.** Premium portion of Job 1:

$$35 \\times 44 = 1540$$

**2.** Compare with Job 2:

$$1540 > 1301$$

Job 1's Premium line alone exceeds Job 2 by $\\$239$. A solver who used $y=50$ from letter B would get $1750$, still greater, so that error would not flip the verdict. A solver who compared whole Job 1 $\\$1{,}946$ with Job 2 would be answering a coarser question that still happens to rank the same way. The claim is narrower: Premium portion versus whole Job 2.

Job 1's Premium portion is $\\$1{,}540$, which exceeds Job 2's $\\$1{,}301$, so the statement is True.`,

    `The statement asks whether the new quotation of $\\$1{,}068$ for $8$ Standard and $19$ Premium is consistent with the recovered rates.

The overview already has $x=29$ and $y=44$. The extra arithmetic is only costing that mix.

**1.** Eight Standard units:

$$8 \\times 29 = 232$$

**2.** Nineteen Premium units:

$$19 \\times 44 = 836$$

**3.** Add and compare with the quoted $\\$1{,}068$:

$$232 + 836 = 1068$$

The quotation matches exactly. It is not a third independent observation that could contradict the first two; it is the same linear rule evaluated at a new mix.

A solver who used $y=50$ would get $232+950=1182$ and call the quote inconsistent. The recovered $44$ is what makes $\\$1{,}068$ sit on the line.

The mix $8$ Standard and $19$ Premium at the recovered rates is $\\$1{,}068$, so the statement is True.`,
  ],

  "math-5-28": [
    `The statement is a claim about the per-diem rate. Reports 1 and 2 are the consistent pair. Report 3 is the corrupted row.

The overview already recovered the per diem $d = 55$ from Reports 1 and 2. This letter does not rebuild that pair. It only asks whether the recovered per diem is the number in the claim.

Finance's believed mileage rate never enters this letter. A solver who divided Report 1's $\\$323$ by $5$ days, ignoring miles, would land on $\\$64.60$ and miss the claim.

The recovered per diem is $\\$55$ per day, so the statement is True.`,

    `The statement claims Finance's $\\$0.40$ per mile is the actual mileage rate.

The overview already recovered $r = 0.32$ from Reports 1 and 2. Then $0.32 \\neq 0.40$.

**1.** At $r=0.40$ and $d=55$, Report 1 would be $5(55)+150(0.40)=275+60=335$, which overshoots $\\$323$ by $\\$12$. Those extra $\\$12$ are $150$ miles times an $\\$0.08$ overstatement.

**2.** Finance's belief is unverified against payroll. The two clean reports are the observations.

The recovered mileage rate is $\\$0.32$, not $\\$0.40$, so the statement is False.`,

    `The statement argues Report 3 is impossible: $7$ meal days alone would require at least $\\$385$ at the confirmed per diem, far more than the reported $\\$120$.

The overview already recovered $d=55$. Mileage is nonnegative, so a $7$-day report cannot undercut $7 \\times 55$.

**1.** Seven days of per diem, ignoring miles:

$$7 \\times 55 = 385$$

**2.** Report 3 printed $\\$120$. Then $120 < 385$, so even with zero miles the printed total is $\\$265$ short of the per diem floor.

**3.** Adding $40$ miles at $0.32$ would only make the required total larger, $385+12.80=397.80$, farther from $\\$120$. The row cannot be rescued by a mileage story. It is a data-entry error.

A solver who used Finance's $0.40$ here would still find the floor at $\\$385$ plus a larger mileage piece. A solver who treated $\\$120$ as per diem only, $120/7 \\approx 17$, would be recovering a third inconsistent per diem instead of testing Report 3 against the pair already recovered.

Seven days require at least $\\$385$, so Report 3's $\\$120$ is impossible, so the statement is True.`,

    `The statement claims Report 1's total exceeds Report 2's total by more than $\\$80$.

Report 1 printed $\\$323$. Report 2 printed $\\$245$. The extra arithmetic is only the difference.

$$323 - 245 = 78$$

Then $78 > 80$ is false. The gap is $\\$78$, two dollars short of the cutoff.

A solver who used $323-240$ or who added a round $\\$2$ of rounding would manufacture $\\$80$ or more. The printed totals give $\\$78$ exactly.

Report 1 exceeds Report 2 by $\\$78$, which is not more than $\\$80$, so the statement is False.`,

    `The statement claims Reports 1 and 2 combined reimbursed at least $\\$550$. Report 3 is the corrupted row and is not added.

$$323 + 245 = 568$$

Then $568 \\geq 550$. A solver who included Report 3's $\\$120$ would get $\\$688$, still above $\\$550$, so that error would not flip the verdict. A solver who subtracted Report 3 would get $568-120=448$ and flip it. The claim names Reports 1 and 2 combined.

The two clean reports total $\\$568$, which is at least $\\$550$, so the statement is True.`,
  ],

  "math-5-29": [
    `The statement is a claim about Widget A's labor hours per unit. Week 1 is fully legible. Week 2's note and Week 3's remaining count are extra observations after the rates are known.

The overview already recovered $a = 7$ hours per Widget A from Week 1 together with Week 2's reconstructed counts. This letter does not rebuild that pair. It only asks whether the recovered A-time is the number in the claim.

A solver who divided Week 1's $445$ hours by $35$ A units, ignoring B, would land on about $12.7$ and miss the claim.

The recovered A-time is $7$ hours per unit, so the statement is True.`,

    `The statement claims Widget B requires $12$ hours per unit.

The overview already recovered $b = 10$. The claim writes $12$, two hours above that leftover.

At $b=12$, Week 1 would be $35(7)+20(12)=245+240=485$, which overshoots $445$ by $40$ hours. Those extra $40$ hours are twenty B units times a $2$-hour overstatement.

The claimed $12$ sits $2$ hours above the recovered $10$, so the statement is False.`,

    `The statement reconstructs Week 2 from the sticky note: $8$ more Widget B than Widget A, $58$ units total.

That is a sum-and-difference pair on the counts, not a second labor-rate solve. The extra arithmetic is only those two count equations.

**1.** Total units $A+B=58$ and $B=A+8$.

**2.** Substitute:

$$A + (A+8) = 58, \\qquad 2A = 50, \\qquad A = 25$$

**3.** Then $B=25+8=33$.

Week 2 produced $25$ Widget A and $33$ Widget B. As a check, the recovered times give $7(25)+10(33)=175+330=505$, matching the logged hours. A solver who used $B=A-8$ would flip the counts to $33$ A and $25$ B and fail that hour check.

Week 2's counts are $25$ A and $33$ B, so the statement is True.`,

    `The statement claims that a $20\\%$ increase in Widget A's assembly time, with B unchanged, would raise Week 1's total hours by $20\\%$ as well.

Week 1 logged $445$ hours: $35$ A at $7$ hours and $20$ B at $10$ hours. Only the A-time rises.

**1.** New A-time:

$$7 \\times 1.20 = 8.4$$

**2.** New Week 1 hours:

$$35 \\times 8.4 + 20 \\times 10 = 294 + 200 = 494$$

**3.** Compare with a $20\\%$ rise of the original $445$:

$$445 \\times 1.20 = 534$$

Then $494 \\neq 534$. The total rises by $49$ hours, about $11\\%$, not $20\\%$. Widget B's $200$ hours are untouched, so the whole week cannot scale by A's percentage.

A solver who applied $20\\%$ to $445$ would accept the claim. That would be correct only if every hour on the line were A-hours.

Week 1's hours would rise to $494$, not to $534$, so the statement is False.`,

    `The statement reconstructs Week 3's illegible Widget A count. Week 3 logged $15$ Widget B and $290$ hours.

The overview already has $a=7$ and $b=10$. The extra arithmetic is only solving one linear equation for the missing count.

**1.** B's hours in Week 3:

$$15 \\times 10 = 150$$

**2.** Remaining hours for A:

$$290 - 150 = 140$$

**3.** A units:

$$\\frac{140}{7} = 20$$

Week 3 produced $20$ Widget A units. A solver who used $b=12$ from letter B would get $290-180=110$, which is not divisible by $7$ into a clean count. The recovered $b=10$ is what makes $20$ drop out.

The illegible Week 3 entry reconstructs as $20$ Widget A units, so the statement is True.`,
  ],

  "math-5-30": [
    `The statement is a claim about Product X's price. Two of the three branches reconcile; East is the inconsistent row.

The overview already recovered $x = 29$ from the two consistent branches. This letter does not rebuild that pair. It only asks whether the recovered X price is the number in the claim.

A solver who averaged all three reported revenues and tried to fit one pair to three rows would find no solution, which is the point of the dashboard: one row is wrong.

The recovered X price is $\\$29$, so the statement is True.`,

    `The statement claims Product Y is priced at $\\$28$.

The overview already recovered $y = 24$. The claim writes $\\$28$, four dollars above that leftover.

At $y=28$, North would be $85(29)+70(28)=2465+1960=4425$, which overshoots the reported $\\$4{,}145$ by $\\$280$. Those extra $\\$280$ are seventy Y units times a $\\$4$ overstatement.

The claimed $\\$28$ sits $\\$4$ above the recovered $\\$24$, so the statement is False.`,

    `The statement claims East's reported $\\$3{,}200$ is consistent with the derived prices.

The overview already recovered $x=29$ and $y=24$. East sold $65$ X and $50$ Y. The extra arithmetic is only rebuilding East.

**1.** East's X line:

$$65 \\times 29 = 1885$$

**2.** East's Y line:

$$50 \\times 24 = 1200$$

**3.** Add and compare with the reported $\\$3{,}200$:

$$1885 + 1200 = 3085$$

Then $3085 \\neq 3200$. East's reported total sits $\\$115$ above the reconstructed $\\$3{,}085$. North and South both rebuild exactly at these prices, so East is the inconsistent row.

A solver who treated East as one of the two defining rows would recover a different pair that then fails North or South. The dashboard does not say which row is wrong; checking each rebuilt total against the reported one is how East is identified.

East's reported $\\$3{,}200$ does not match the reconstructed $\\$3{,}085$, so the statement is False.`,

    `The statement asks what East's revenue should read if corrected to the derived prices.

Letter C already rebuilt East at $65(29)+50(24)=3085$. This letter is that corrected figure.

The extra arithmetic is the same reconstruction: $\\$3{,}085$, not the printed $\\$3{,}200$. A solver who averaged North and South per unit and scaled to East's counts would wander off $3085$. The honest correction uses the recovered pair from the two consistent branches.

Corrected East revenue is $\\$3{,}085$, so the statement is True.`,

    `The statement claims North's reported revenue exceeds South's and East's reported revenues combined.

North printed $\\$4{,}145$. South printed $\\$3{,}875$. East printed $\\$3{,}200$. The extra arithmetic is adding South and East, then comparing. Use the reported figures, including East's error, because the claim names reported revenues.

**1.** South plus East reported:

$$3875 + 3200 = 7075$$

**2.** Compare with North:

$$4145 < 7075$$

North does not exceed the other two combined. It is not even close. Using East's corrected $\\$3{,}085$ would give $3875+3085=6960$, still far above $4145$. Either way the claim fails.

A solver who compared North with South alone, $4145>3875$, would be answering a different comparison. The claim is North versus the *sum* of South and East.

North's $\\$4{,}145$ does not exceed $\\$7{,}075$, so the statement is False.`,
  ],
};

applyLetters("21_30.json", patches);
console.log("applied 27-30");
