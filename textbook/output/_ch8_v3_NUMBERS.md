# Ch8 numbered claims (remaining verbal tasks) + explanation voice

Screenshot gold is **math-8-87**. Copy that skeleton: almost every statement names digits (thresholds, extras vs a recorded gauging, a coefficient after a unit change). One letter may be a doubling property without extra digits, like 87 C.

## Remaining ids only (rewrite statements + keys + A–E + Part 3)
11,13,14,15,18,22,23,26,27,28,29,32,35,36,38,39,40,43,44,48,53,55,59,60,66,67,69,71,72,73,75,76,79,81,83,86,88,89,90,91,92,93,94,95,96,97

Keep id, case_id, title, context, sort_order, Part 1–2. Bump difficulty at most one notch, cap 5/5.

## Already-numbered ids in the same file
Do **not** change their statements. Rewrite **tactical_explanations only**: kill the cloned opener `The recovered law is …` on every letter. Vary length. More living English where the idea is the point (units, extra vs gauging, why doubling fails, composition). A simple under/over plug-in may stay shorter. Still one step per `$$`, closer `so the statement is True.` / `False.`, `\frac`, no em dash, no `${`.

## Explanation voice (all rewritten letters)
Not the same paragraph shape on A–E.
- **Hard letter** (units, extra vs recorded level, two-curve crossing, composition): 3–6 sentences of why, then the displays.
- **Medium** (doubling / 2^r): say why r=1 would be needed, then the scale factor.
- **Short** (one threshold): name the input, show the value, compare. Do not pad.

87-style mix inside one task: long A, short B, medium C, medium D, short E is good. Other tasks should shuffle which letter is the long one.

Header `**A.** → True`. Sequential: do not re-derive A,r in every letter, but do not stamp the same one-liner either. First letter that needs the model may recover it; later letters may start from a named evaluation.

## Locked statements (wording + T/F)

### math-8-11  Y=2h^{1/3}; Y(8)=4, Y(27)=6, Y(64)=8
1 T After $64$ hours the harvest is already above $7$ kilograms.
2 F Doubling the watering time doubles the harvest.
3 F A $27$-hour watering still yields under $5$ kilograms.
4 T To reach $8$ kilograms she must already exceed $50$ hours.
5 F The extra harvest from $8$ hours to $27$ hours already exceeds the $8$-hour record.

### math-8-13  QL=4√d, QO=½ d^{3/2}; meet d=8; QL(4)=8, QO(9)=13.5
1 T At $4$ metres Leah already pumps more than $7$ litres a minute.
2 F Doubling depth from $4$ to $8$ metres doubles Omar's flow.
3 T Omar already overtakes Leah before they reach $10$ metres.
4 T At $9$ metres Omar already pumps more than $13$ litres a minute.
5 T The extra Omar flow from $4$ m to $9$ m already exceeds Leah's $4$ m reading.

### math-8-14  C=50+50√n; C(16)=250, C(25)=300, C(36)=350, C(64)=450
1 T A run of $25$ copies already costs more than $280$ euros.
2 F Doubling a $16$-copy run doubles the bill.
3 F A run of $36$ copies costs more than $400$ euros.
4 F The extra cost from $16$ to $64$ copies already exceeds the $16$-copy bill.
5 T A $1$-copy run already costs more than $90$ euros.

### math-8-15  S=2u; rival 1.8u+5; meet u=25; S(9)=18, S(36)=72
1 T On ore of purity $36$, the refinery's strength is more than $70$.
2 F On ore of purity $9$, the refinery's strength is already above $20$.
3 T Doubling purity from $9$ to $18$ doubles the refinery's strength.
4 T The two quotes already meet below purity $30$.
5 T The extra strength from purity $9$ to $36$ already exceeds the strength at $9$.

### math-8-18  C=n², D=16n; C(9)=81, C(16)=256, C(25)=625, gap at 25 is 225
1 T On a batch of $9$ documents the automated procedure costs under $100$.
2 F Doubling a $16$-document batch doubles automated cost.
3 F At $25$ documents the two procedures differ by less than $100$.
4 T At $25$ documents the automated bill already exceeds $600$.
5 T The extra automated cost from $16$ to $25$ documents already exceeds the $16$-document automated bill.

### math-8-22  C=200+30√n; C(100)=500, C(400)=800, C(900)=1100, C(200)≈624
1 T An engagement covering $900$ accounts is billed at more than $1000$.
2 F Two hundred accounts cost more than $750$.
3 F Doubling $100$ accounts doubles the bill.
4 F The extra bill from $100$ to $400$ accounts already exceeds the $100$-account bill.
5 T A $100$-account job already costs more than $450$.

### math-8-23  E=240 t^{1/4}; E(1)=240, E(16)=480, E(81)=720
1 T After $16$ years, total fleet emissions already exceed $400$.
2 F Doubling elapsed time from $1$ year to $2$ years doubles emissions.
3 T After $1$ year, total fleet emissions are still under $250$.
4 T After $81$ years, emissions already exceed $700$.
5 F The extra emissions from year $1$ to year $16$ already exceed the year-$1$ total.

### math-8-26  CA=min(40√u,400), CB=5u; CA(36)=240, CA(64)=320, cap from u=100
1 T At $64$ tickets both plans still sit under the $400$ cap.
2 F At $144$ tickets Plan A bills more than $450$.
3 T Doubling tickets from $36$ to $72$ doubles Plan B's bill.
4 T At $36$ tickets Plan A already bills more than $200$.
5 F The extra Plan A bill from $36$ to $64$ tickets already exceeds the $36$-ticket Plan A bill.

### math-8-27  c=1000 N^{-log2(0.8)}; c(2)=800, c(8)=512, c(16)=409.6
1 T After three successive doublings the modelled unit cost is already under $520$.
2 F After four successive doublings the modelled unit cost is already under $400$.
3 F Quadrupling cumulative output halves the unit cost.
4 T After one doubling, unit cost is already under $850$.
5 T The cost cut from the first unit to $N=8$ already exceeds $450$.

### math-8-28  N=90√x-6x; N(81)=324, N(100)=300, N(256)=-96, N(225)=0
1 T At a spend of $100$ the net gain is already above $250$.
2 F At a spend of $256$ the net gain is still positive.
3 F Doubling the spend from $100$ to $200$ doubles net gain.
4 T At a spend of $81$ the net gain already exceeds $300$.
5 F The extra net from spend $81$ to $100$ already exceeds $20$.

### math-8-29  g=16 L^{3/4}; g(16)=128, g(81)=432; m(16)=16
1 T After $81$ labour hours, finished output is already above $400$ units.
2 F Doubling labour hours doubles finished output.
3 T After $16$ labour hours, finished output is already above $120$ units.
4 T After $16$ hours, material is already above $15$ tonnes.
5 T The extra finished output from $16$ to $81$ hours already exceeds the $16$-hour finished count.

### math-8-32  F=2v^{3/2}, P=2v^{5/2}; F(4)=16, F(16)=128, P(16)=2048 W; 250 N at v=25
1 T At $16$ m/s the rig absorbs more than $2$ kW.
2 F Doubling the airspeed from $4$ to $8$ m/s more than triples the drag.
3 F The mounting's $250$ N rating is first reached at a speed above $30$ m/s.
4 T At $4$ m/s drag is already under $20$ N.
5 T The extra drag from $4$ to $16$ m/s already exceeds $100$ N.

### math-8-35  f=9x^{2/3}; f(8)=36, f(64)=144, f(125)=225
1 T A raw reading of $64$ is sent out with an index above $140$.
2 F A raw reading of $125$ is sent out with an index under $200$.
3 F Doubling a raw reading of $8$ doubles the sent index.
4 T Applying calibration then reporting returns the original reading of $8$.
5 T The extra index from reading $8$ to $64$ already exceeds the index at $8$.

### math-8-36  S=8√x, T=x^{3/2}; meet x=8; T(16)-S(16)=64-32=32
1 T The two algorithms first meet at a load above $6$.
2 T At a load of $16$, algorithm T is ahead by more than $30$.
3 F Doubling the load from $4$ to $8$ doubles algorithm S.
4 F At load $4$, algorithm T already leads algorithm S.
5 T The extra T-score from load $8$ to $16$ already exceeds S at load $8$.
S(4)=16, T(4)=8 so T does not lead. Extra T: T(8)=22.627, T(16)=64, extra=41.37, S(8)=22.627, 41>22 T. T(8)=8^{3/2}=8*√8=8*2√2=16√2≈22.63. Yes.

### math-8-38  Π=120√L-6L; Π(100)=600, Π(400)=0, Π(900)=-1800
1 T At $900$ hours the net gain is below $-1000$.
2 T Net gain crosses zero only after more than $300$ hours.
3 F Doubling hours from $100$ to $200$ doubles net gain.
4 T At $100$ hours net gain already exceeds $500$.
5 F The extra net from $100$ to $400$ hours already exceeds the net at $100$.
Π(400)-Π(100)=-600, not exceed 600.

### math-8-39  C1=½q², C2=¼q²; all-60 on 2 costs 900; 20+40 costs 200+400=600; 30+30=450+225=675
1 T Concentrating all $60$ units in the cheaper plant still costs more than $800$.
2 T Sending $30$ units to each plant already costs under $700$.
3 F Doubling plant 2's run from $20$ to $40$ doubles its cost.
4 T A $20$/$40$ split already costs under $650$.
5 T Two runs of $20$ on plant 2 together already fall short of one run of $40$ on plant 2.
Wait 2*C2(20)=2*100=200, C2(40)=400. 200<400 so fall short T. Quadratic: two small cheaper than one large. "fall short" means 200<400 T.

### math-8-40  y=3x^{3/2}; y(4)=24, y(9)=81, y(25)=375, y(16)=192
1 T The fitted law predicts a response above $350$ at $x=25$.
2 T At $x=9$ the fitted response is already above $70$.
3 F Doubling $x$ from $4$ to $8$ doubles the fitted response.
4 F The measurement at $x=9$ sits more than $10$ above the fitted law. Fitted 81 equals measured 81. F
5 T The extra fitted response from $x=4$ to $x=9$ already exceeds the $x=4$ reading.

### math-8-43  Π=60√q-2q-400; Π(25)=-350, Π(100)=0, Π(225)=50, Π(400)=0
1 T At $25$ units the firm is more than $100$ euros below break-even.
2 F At $225$ units, profit exceeds $80$ euros.
3 T At $100$ units the operation is already at break-even.
4 F Doubling output from $100$ to $200$ doubles profit.
5 T The extra profit from $100$ to $225$ already falls short of $60$ euros.
Π(225)=50, extra from 0 is 50<60 T (falls short).

### math-8-44  B=18√x, C=½ x^{3/2}; meet x=36; C(16)=32, B(16)=72, net(9)=54-13.5=40.5
1 T At scale $16$, cost is already above $30$ million.
2 F At scale $9$, net benefit exceeds $42$ million.
3 T Benefit and cost already meet below scale $40$.
4 F Doubling scale from $16$ to $32$ doubles benefit.
5 T The extra cost from scale $16$ to $36$ already exceeds the cost at $16$.
C(36)=½*216=108, extra=76>32 T.

### math-8-48  S=3h², V=h³; V(4)=64, S(2)=12, S(4)=48, S(8)=192
1 T A $4$-metre silo holds more than $60$ cubic metres.
2 F An $8$-metre silo needs more than $200$ square metres of steel.
3 F Doubling height from $2$ m to $4$ m doubles steel use.
4 T Two separate $2$-metre silos already use less steel than one $4$-metre silo.
5 T The extra steel from $2$ m to $4$ m already exceeds the steel of one $2$-metre silo.
S extra=36>12 T.

### math-8-53  L=4 w^{1.5}; L(64)=2048; L(16)=4*64=256; w for 1000 ≈39.7
1 T At a wind speed of $64$ the loss index is already above $2000$.
2 F A loss of $1000$ already requires a wind speed above $50$.
3 F Doubling the wind speed doubles the loss index.
4 T At wind speed $16$ the loss index is already above $250$.
5 T The extra loss from wind $16$ to $64$ already exceeds $1700$.
2048-256=1792>1700 T.

### math-8-55  E=10 m^{2/3}; E(27)=90, E(64)=160, E(216)=360
1 T A $64$ kg animal already uses more than $150$ energy units a day.
2 T A $216$ kg animal still uses under $400$ energy units a day.
3 F Doubling mass from $27$ kg to $54$ kg doubles energy use.
4 F Combining two $27$ kg animals into one $54$ kg animal leaves total energy unchanged.
E(54)=10*54^{2/3}. 27^{2/3}=9, 54=27*2, 2^{2/3}≈1.587, E(54)≈142.7, two small=180≠142.
5 T Two $27$ kg animals together already use more than one $64$ kg animal.
180>160 T.

### math-8-59  S(v)=5v³, S(q)=0.625 q^{1.5}; S(v=3)=135; at q=400, v=√400 / something.
Need stem. v(q)=q^{0.5}/2? S(q)=0.625 q^{1.5}. S(64)=0.625*512=320; S(400)=0.625*8000=5000
1 T A discharge of $400$ already pushes transport above $4500$ tonnes per day.
2 F At discharge $64$, transport is still under $300$ tonnes per day.
3 T Doubling the discharge more than doubles sediment transport.
4 F Doubling the flow velocity doubles sediment transport.
5 T The extra transport from discharge $64$ to $400$ already exceeds $4500$.
5000-320=4680>4500 T.

### math-8-60  q=4000 p^{-3}, R=4000 p^{-2}; q(2)=500, R(2)=1000, R(2.5)=640
1 T At a price of $2.50$, revenue is already below $700$.
2 T A price rise of $10\%$ from $2$ cuts quantity by more than $20\%$.
q(2.2)=4000/10.648≈375.6, 500-375.6=124.4, 24.9%>20 T
3 F Doubling the price from $2$ to $4$ halves revenue.
R(4)=4000/16=250, half of 1000 is 500. F
4 T At price $2$, revenue already exceeds $900$.
5 T The revenue drop from $2$ to $2.50$ already exceeds $300$.
1000-640=360>300 T.

### math-8-66  y=2L²; y(3)=18, y(6)=72, y(9)=162 predicted, recorded 150
1 T The trusted quadratic already puts nine metres above $155$ mm.
2 T The recorded third run sits more than $10$ mm below the trusted quadratic.
3 F Doubling the free span doubles the tip deflection.
4 T At span $6$ m the trusted law already exceeds $70$ mm.
5 T The extra predicted deflection from $3$ m to $6$ m already exceeds the $3$ m reading.

### math-8-67  M=0.5 h³; M(10)=500, M(12)=864; 1.2³=1.728 so +72.8%
1 T A $12$ m mast already uses more than $800$ kg of steel.
2 F A $20\%$ height increase raises mass by $20\%$.
3 T A $10$ m mast already uses more than $450$ kg of steel.
4 T A $10\%$ height increase raises mass by more than $30\%$.
1.1³=1.331 T
5 T The extra steel from $10$ m to $12$ m already exceeds $350$ kg.
864-500=364>350 T.

### math-8-69  H=2q², v=4√2 q; H(5)=50, v(5)=20√2≈28.28; q for 40√2 is 10
1 T At $q=5$ the jet speed is already above $28$ m/s.
2 F Doubling the flow doubles the head.
3 T A jet speed of $40\sqrt{2}$ m/s still takes under $12$ m³/h of flow.
4 T Head at $q=5$ is already above $45$ m.
5 T The extra head from $q=5$ to $q=10$ already exceeds the head at $q=5$.
H(10)=200, extra=150>50 T.

### math-8-71  q=2000 p^{-3/2}, R=2000 p^{-1/2}; R(4)=1000, R(16)=500, R(9)=2000/3≈666.7
1 T At a price of $16$ euros, monthly revenue is already under $600$ thousand euros.
2 F At a price of $9$ euros, monthly revenue is under $600$ thousand euros.
3 F Doubling the $4$-euro price halves revenue.
4 T At the recorded $4$-euro price, revenue already exceeds $900$ thousand euros.
5 T The revenue drop from $4$ to $16$ euros already exceeds $450$ thousand euros.
500 drop is 500>450 T.

### math-8-72  C=400+30√n; C(100)=700, C(400)=1000, C(900)=1300, C(36)=580
1 T Monitoring $900$ branches costs more than $1200$ euros a month.
2 F At $36$ branches the bill already exceeds the $100$-branch invoice.
3 F Quadrupling the branch count doubles the whole bill.
4 T A $100$-branch network already costs more than $650$ euros.
5 F The extra bill from $100$ to $400$ branches already exceeds the $100$-branch bill.
300 vs 700 F.

### math-8-73  T=4800/q + 3q; T(40)=240, T(60)=260, T(20)=T(80)=300, O(80)=60
1 T A batch of $60$ units costs more than $250$ euros a year in total.
2 F At $80$ units, ordering cost is more than $200$ euros.
3 F Doubling any batch size leaves the annual total unchanged.
4 T Cutting the batch from $40$ to $20$ raises the annual total by as much as raising it from $40$ to $80$.
5 T At $40$ units the annual total is already under $250$ euros.

### math-8-75  t=8+50/√n; t(25)=18, t(100)=13, t(900)=29/3≈9.67, t(4)=33
1 T After $900$ cumulative units, modelled unit time is already under $10$ minutes.
2 F The unit built after $4$ cumulative units takes under $30$ minutes.
3 F Quadrupling cumulative output halves the modelled unit time.
4 T After $25$ units, modelled unit time is already under $20$ minutes.
5 T The time cut from $n=25$ to $n=100$ already exceeds $4$ minutes.
18-13=5>4 T.

### math-8-76  R=90 x^{2/3}, C=30x; R(8)=360, P(8)=120; meet x=27
1 T At $64$ tonnes, cost already exceeds harvest revenue.
R(64)=90*16=1440, C=1920 T
2 T At $8$ tonnes the season clears more than $100$ thousand euros.
3 F Doubling feed from $8$ to $16$ tonnes doubles revenue.
4 F An extra tonne of feed adds more revenue after $27$ tonnes than after $8$.
5 T The extra revenue from $8$ to $27$ tonnes already exceeds $400$.
R(27)=90*9=810, extra=450>400 T.

### math-8-79  q=36000 p^{-2}; q(3)=4000, q(3.75)=2560, q(2)=9000; 25% rise exact factor (1.25)^{-2}=0.64, cut 36%
1 T Raising the tariff by $25\%$ leaves more than $2500$ occupied spaces.
2 T At a tariff of $2$ euros, hourly demand exceeds $8000$ occupied spaces.
3 F Cutting the tariff by $25\%$ raises demand by the same percentage that a $25\%$ rise cuts it.
4 F The elasticity shortcut and the exact power agree on the loss from a $25\%$ tariff rise.
5 T The exact drop from $3$ to $3.75$ euros already exceeds $1400$ occupied spaces.
4000-2560=1440>1400 T.

### math-8-81  P=½ v³, F=½ v²; P(8)=256, P(12)=864
1 T At $8$ m/s the rider is still under $300$ W.
2 F At $12$ m/s the rider is still under $800$ W.
3 F If the rider doubles speed, absorbed power doubles.
4 T At $8$ m/s drag is already above $30$ N. F(8)=32 T
5 T The extra watts from $8$ to $12$ m/s already exceed $500$ W.
864-256=608>500 T.

### math-8-83  D=5 m^{3/4}, G=3 m^{2/3}; D(16)=5*8=40, D(256)=320; 16*D(16)=640
1 T A $256$ g fish already demands more than $300$ millilitres per hour.
2 F $16$ fish of $16$ g together still demand under $600$ millilitres per hour.
3 F Two $16$ g fish together have the same total gill area as one $32$ g fish.
4 T A $16$ g fish already demands more than $35$ millilitres per hour.
5 T Sixteen $16$ g fish together already demand more than one $256$ g fish.
640>320 T.

### math-8-86  r=15 t^{2/3}; r(1)=15, r(8)=60, r(64)=240
1 T At hour $8$ the plume radius is already more than $50$ metres.
2 F The plume radius reaches $240$ metres in under $50$ hours.
3 F Doubling the elapsed time doubles the stained area.
4 T At hour $1$ the radius is already above $10$ metres.
5 T The extra radius from hour $1$ to hour $8$ already exceeds $40$ metres.
45>40 T.

### math-8-88  F=3x²; F(2)=12, F(6)=108, F(10)=300
1 T A $10$-tonne batch already uses more than $250$ litres.
2 F A $6$-tonne batch still uses under $100$ litres.
3 F Doubling the batch mass doubles fuel use.
4 T A $2$-tonne batch already uses more than $10$ litres.
5 T The extra fuel from $2$ t to $6$ t already exceeds $90$ litres.
96>90 T.

### math-8-89  m=2√t, P=t²; m(9)=6, m(25)=10; P=81 at t=9
1 T At throttle $25$ the mass flow is already above $8$ tonnes per hour.
2 F An index of $81$ still requires a throttle setting above $20$.
3 F Doubling the throttle doubles mass flow.
4 T At throttle $9$ mass flow is already above $5$ tonnes per hour.
5 T The extra mass flow from throttle $9$ to $25$ already exceeds $3$ tonnes per hour.
4>3 T.

### math-8-90  L=4√d, Q=d/5; meet d=400 wait 80; L(25)=20, Q(25)=5
1 F Under the $20$-minute cap, App L can serve trips longer than $30$ kilometres.
L=20 ⇒ √d=5, d=25. F
2 T At $400$ kilometres both apps already quote more than $70$ minutes.
3 F Doubling distance from $25$ to $50$ km doubles App L's wait.
4 T At $25$ km App Q already quotes under $10$ minutes.
5 T The extra App L wait from $25$ km to $100$ km already exceeds $15$ minutes.
L(100)=40, extra=20>15 T.

### math-8-91  E=20√h; E(1)=20, E(4)=40, E(16)=80, E(25)=100
1 T After a humidity deficit of $25$, evaporation is already more than $90$ millimetres per day.
2 F Doubling the humidity deficit doubles evaporation.
3 T To double the forty-millimetre reading she must already exceed $10$ of deficit.
Need h=16>10 T
4 F After a deficit of $4$, evaporation is still under $35$ millimetres per day.
5 T The extra evaporation from deficit $1$ to $4$ already exceeds $15$ millimetres per day.

### math-8-92  N=12√n-2n; N(4)=16, N(9)=18, N(36)=0
1 T At nine thousand trees, net benefit is already more than $15$ thousand euros.
2 F At four thousand trees, net benefit is already more than $20$ thousand euros.
3 F Doubling the planting from $4$ to $8$ thousand trees doubles net benefit.
N(8)=12√8-16≈33.94-16=17.94 vs 32 F
4 T Once upkeep overtakes cooling benefit, the net at $36$ thousand trees is already under $5$.
N(36)=0 T
5 T The extra net from $4$ to $9$ thousand trees already falls short of $5$ thousand euros.
2<5 T.

### math-8-93  q=2000 p^{-2}, R=2000/p; q(5)=80, q(10)=20, p for 125 is 4
1 T At $10$ euros the kiosk already sells under $25$ packs a week.
2 F A target of $125$ packs a week needs a price above $5$ euros.
3 F Doubling the five-euro price halves weekly demand.
4 T At $5$ euros weekly revenue already exceeds $350$.
R(5)=400 T
5 T The demand drop from $5$ to $10$ euros already exceeds $50$ packs.
60>50 T.

### math-8-94  q∘p=400/s; q(p(8))=50, q(p(27))=400/27≈14.8
1 T At subsidy index $8$, composed demand is already more than $40$ passes.
2 T At subsidy index $27$, composed demand stays under $16$ passes.
3 F Tripling the subsidy index triples composed demand.
4 F Raising the subsidy index raises composed demand.
5 T The demand drop from subsidy $8$ to $27$ already exceeds $30$ passes.
50-14.8=35.2>30 T.

### math-8-95  C1=q², C2=q²/4; all 30k on 2: (30)^2/4=225; 6+24: 36+144=180
Use thousands: q in thousands so 30 means 30000.
1 T Sending all thirty thousand loaves to line 2 scores more than $200$.
2 T The six-and-twenty-four split scores under $200$.
3 F Concentrating the whole order on the cheaper line is the cheapest plan.
4 F Line 1's average cost index falls as its own output rises.
5 T Two batches of $12$ thousand on line 2 together already fall short of one batch of $24$ thousand on line 2.
C2(12)=36, two=72, C2(24)=144, 72<144 T.

### math-8-96  q=4000 p^{-2}; q(10)=40, q(12)≈27.78, q(5)=160; drop 12.22
1 T Raising the price from $10$ to $12$ euros cuts demand by more than $10$ tickets.
2 T At $5$ euros the desk already sells more than $150$ tickets.
3 F Weekly revenue is maximized by raising the price without bound.
4 T At $10$ euros the desk already sells more than $35$ tickets.
5 T The exact drop from $10$ to $12$ euros already exceeds the $10\%$ shortcut of $4$ tickets.
12.22>4 T. Shortcut 10% of 40=4.

### math-8-97  T=8 e^{3/2}; T(4)=64, T(9)=216; 1.25A ⇒ T(9)=270
1 T At belt setting $9$, throughput is already more than $200$ trays per hour.
2 T If the coefficient were $25\%$ larger, throughput at setting $9$ would already exceed $250$ trays per hour.
3 F If the coefficient were $25\%$ larger, the scale factor T(2e)/T(e) would itself become $25\%$ larger.
4 F Doubling the belt setting doubles throughput.
5 T The extra throughput from setting $4$ to $9$ already exceeds $140$ trays per hour.
152>140 T.
