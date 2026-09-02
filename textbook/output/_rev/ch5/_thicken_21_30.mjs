import { thickenLetters } from "./_thicken_apply.mjs";

const extras21 = {
  "math-5-22": {
    4: `Five months of each plan is a balanced household, unlike Household 1's $4$ Basic and $3$ Premium or Household 2's $2$ Basic and $7$ Premium. One Basic plus one Premium is $19+31=50$, and five such pairs are $250$. That pair view is honest here because the counts match.

A solver who averaged $169$ and $255$ and scaled to ten months would keep the unbalanced mixes inside the average. A solver who used $y=35$ from letter B would get $95+175=270$ and miss $250$. If Premium had been $32$, five of each would have been $255$, the same as Household 2's printed total by coincidence, and the claim's $250$ would fail. The two households force $y=31$, and five-and-five is then $250$.`,
  },
  "math-5-23": {
    4: `Ten pounds of apples and two cartons of milk is double Receipt 2's apple column plus two-fifths of its milk column, not a scale copy of either receipt. At $4.80$ and $6$ the mix is $48+12=60$ on the nose. The claim's "more than $\\$60$" is a strict inequality, and equality fails it.

A solver who treated "more than" as "at least" would flip the verdict. A solver who added Receipt 2's bread $3.60$ onto $60$ would get $63.60$ and accept "more than $60$" by keeping a known item that this letter's mix does not include. Apples and milk only, ten and two, is $60$ exactly.

If apples had been $5.00$, the mix would have been $50+12=62$, which is more than $60$, and the claim would have been true. The two leftover equations force $x=4.80$, and $10 \\times 4.80 + 12 = 60$, not more.`,
  },
  "math-5-24": {
    2: `Two hundred eighty units sits between Bill 1's $240$ and Bill 2's $380$, so this is an interpolation on the recovered line $33+0.21u$. At $u=280$ that line is $91.80$, which sits $3.20$ under $95$. Customer service's $0.24$ would have put the same usage at $33+67.20=100.20$, over the cutoff, and would have flipped the verdict. Using the recovered $0.21$ is therefore essential, not decorative.

Solar Offset at $280$ units is $0.29 \\times 280=81.20$, which is also less than $95$, but that is a different plan. The claim names the standard plan. A solver who reported $81.20$ here would be answering with the rival.

Linear interpolation between $83.40$ and $112.80$ using unit share $(280-240)/(380-240)=40/140$ gives $83.40+29.40 \\times 40/140=83.40+8.40=91.80$, the same figure. That agreement checks the line. It does not replace the cutoff comparison.`,
    4: `Five hundred units sits above the $412.5$ crossing from letter D, so Solar's steeper rate has already overtaken the $\\$33$ fee advantage. Solar is $145$. Standard is $138$. Solar is $7$ more expensive, not cheaper.

A solver who used customer service's $0.24$ on standard would get $33+120=153$, and then Solar's $145$ would look cheaper, flipping the verdict. The recovered $0.21$ is what keeps standard ahead at $500$ units. A solver who compared $500 \\times 0.29$ with $500 \\times 0.21$ without the fee would find Solar more expensive by $40$, which is the wrong gap ($40$ versus $7$) but the right ranking.

If the Solar rate had been $0.27$, then $500 \\times 0.27=135$, which is less than standard's $138$, and the claim would have been true. The stem prints Solar at $0.29$, and at $500$ units that $0.29$ loses to $33+0.21 \\times 500$.`,
  },
  "math-5-25": {
    4: `Four pasta and four appetizers with the $10\\%$ peak fee is a new mix, not Table 5's $6$ and $4$ and not Table 8's $5$ and $7$. Food is $76+60=136$. After the fee, $149.60$, forty cents under $150$. That forty cents is why the cutoff is tight: a pasta price of $19.10$ would have pushed the billed total to $150.04$, over the bar.

A solver who skipped the fee would report $136$, still under $150$, so that error would not flip the inequality, but it would miss the billed figure the claim is about. The claim includes the service charge. A solver who applied $10\\%$ to $150$ as a round check would be rounding the bar rather than the bill.

Table 5 off-peak at four-and-four would be $136$ with no fee, comfortably under $150$. This letter is the peak-hour version of that basket. The $10\\%$ is what brings $136$ up to $149.60$, still just under.`,
  },
  "math-5-28": {
    2: `Report 3 is the inconsistent third row. Reports 1 and 2 recovered $d=55$ and $r=0.32$. Seven meal days at $55$ already demand $385$ before any miles. Report 3 printed $120$ for those seven days plus $40$ miles, which is $265$ below the per-diem floor and $277.80$ below the model value $385+12.80=397.80$.

No nonnegative mileage rate can rescue a total that sits below the per-diem floor. Setting $7(55)+40r=120$ forces $r=-6.625$, a negative rate, which is financially impossible. That is why the row is a data-entry error rather than a third observation.

A solver who tried to include Report 3 in the $2 \\times 2$ would find no nonnegative solution that also fits Reports 1 and 2. The right response is to recover the pair from the two clean reports, then test Report 3 against that pair, which is this letter. Finance's believed $0.40$ mileage rate is irrelevant to the floor: the floor is pure per diem.`,
  },
  "math-5-30": {
    2: `East is the inconsistent third row. North rebuilds at $85(29)+70(24)=4145$ exactly. South rebuilds at $55(29)+95(24)=3875$ exactly. East at $65(29)+50(24)=3085$ does not match the printed $3200$. The $115$ overstatement is the dashboard error.

A solver who used East with North to recover a pair would then fail South, and a solver who used East with South would fail North. Checking each rebuilt total against the printed one is how East is identified as the odd row. The stem says two of three reconcile and does not say which; this letter is that check for East.

If East had printed $3085$, this letter would be true. The printed $3200$ is what makes it false. Using East's reported $3200$ in a later comparison, as letter E does, is a different question: letter E names reported revenues, including the error. Letter C asks whether that reported figure is consistent with the derived prices, and it is not.`,
  },
};

thickenLetters("21_30.json", extras21);
console.log("thickened 22-30");
