# Ch8 harder claims (tasks listed only)

Rewrite `statements`, `answer_key`, `tactical_explanations`, and **Part 3 / Answer** of `solution_overview` for the assigned ids. Keep `id`, `case_id`, `title`, `context`, `difficulty_level` (may bump one notch, cap `5/5`), `sort_order`, and Part 1–2 of the overview.

## Why
Students said claims are too obvious (`leaves the coefficient unchanged`, `eventually becomes negative`, `r<1 so it grows slower` when \(r\) is already printed in the stem) and every task is recover-then-plug. New claims need **two or more evaluations, a difference vs a level, invert-then-cap, numeric unit change, or n-copies vs one larger**.

## Banned
- Measuring/switching units “leaves the coefficient/exponent unchanged”
- Eventually becomes negative / stays positive at every finite distance / grows without bound
- “The inverse is a power function” as a free theory claim
- “The exponent is smaller/larger than one, so …” when \(r\) is already in the stem
- Bare “doubling doubles” when that is a one-line \(2^r\) with \(r\) printed
- Table-lookup identities (`at 9 the wait is 16`)

## Allowed numeric units
Compute the new coefficient and compare to a threshold.

## Explanations
Header `**A.** → True` / `**B.** → False`. Sequential: do not re-derive \(A,r\) in every letter; one-line “the recovered law is …”. **This claim’s math** with one step per `$$` display. Living English. Closer exactly `so the statement is True.` / `False.` `\frac`, no em dash, no `${`. Recompute every number.

## Gold: math-8-24
Model \(Q=2d^{5/2}\). \(Q(4)=64\), \(Q(9)=486\), \(Q(16)=2048\). mm-scale \(A'=2/10^{5/2}=2/(100\sqrt{10})\approx 0.00632\).

1. The extra capacity from widening \(4\) cm to \(9\) cm already exceeds the bench reading of \(64\) litres per second. **T** (\(422>64\))
2. Measuring diameter in millimetres makes the new coefficient larger than \(0.01\). **F** (\(\approx 0.00632\))
3. A \(16\) cm pipe already delivers more than thirty times the bench capacity. **T** (\(32>30\))
4. Doubling the diameter multiplies capacity by less than \(5\). **F** (\(4\sqrt{2}\approx 5.66\))
5. To reach \(500\) litres per second the diameter must already exceed \(9\) cm. **T** (\(Q(9)=486<500\))

---

Locked statements (use this wording). Keys T/T/F etc listed as five letters.

### math-8-12  \(W=48n^{-1/2}\), \(n\le 50\)
W(4)=24, W(9)=16, W(16)=12, W(36)=8, n(W=6)=64
1 T The wait cut by going from \(4\) agents to \(9\) already exceeds the wait cut from \(9\) agents to \(16\).
2 T A \(6\)-minute wait would need more than \(50\) agents.
3 T With \(36\) agents, callers wait under \(10\) minutes.
4 F Doubling the recorded team of \(4\) cuts the wait in half.
5 F The team that brings the wait down to \(8\) minutes already exceeds the \(50\)-agent cap.

### math-8-16  \(L=\frac12 x^2\), alarm 200
L(8)=32, L(16)=128, L(10)=50, L(20)=200
1 T Raising the job count from \(8\) to \(16\) adds more load than the recorded peak of \(32\).
2 F The hardware alarm already trips at \(16\) simultaneous jobs.
3 T Load per job at \(16\) jobs already exceeds load per job at \(8\).
4 T The job count that trips the alarm is already above \(18\).
5 T After \(10\) simultaneous jobs, peak load is already above \(40\).

### math-8-17  \(Q=12x^{1/2}\), \(x\le 400\)
Q(25)=60, Q(100)=120, Q(81)=108, Q(400)=240, Q=180 ⇒ x=225
1 T The extra responses from intensity \(25\) to \(100\) fall short of the extra from \(100\) to \(400\).
2 F Doubling intensity from \(25\) to \(50\) doubles usable responses.
3 T At intensity \(81\) the survey already yields more than \(100\) usable responses.
4 F The budget cap allows at most \(200\) usable responses.
5 F Intensity that yields \(180\) responses already exceeds the budget cap.

### math-8-19  \(H=8s^{1/2}\), billed \(\min(H,80)\)
H(16)=32, H(36)=48, H(64)=64, H(81)=72, H(100)=80
1 T Two separate \(16\)-staff shifts already move as many pallets as one \(64\)-staff shift.
2 F The contract ceiling is already reached with \(64\) staff.
3 T The extra throughput from \(16\) to \(36\) staff equals the extra from \(36\) to \(64\).
4 T With \(81\) staff, billed throughput is already above \(70\) pallets per hour.
5 T Staffing that bills \(80\) pallets already exceeds \(90\) people.

### math-8-20  \(W=216k^{-3/2}\)
W(4)=27, W(9)=8, W(8)=216/(8^{3/2})=216/22.627≈9.55
1 T Moving from \(4\) servers to \(9\) cuts the median wait by more than \(15\) milliseconds.
2 T With \(4\) servers the median wait is already above \(25\) milliseconds.
3 T The wait cut from \(4\) to \(9\) servers already exceeds the remaining wait at \(9\) servers.
4 F Doubling the server count from \(4\) to \(8\) halves the median wait.
5 F With \(9\) servers the median wait is more than \(10\) milliseconds.

### math-8-21  \(q=10000p^{-2}\), \(R=10000/p\)
q(5)=400, q(10)=100, q(20)=25, R(5)=2000, R(16)=625, R=2500 ⇒ p=4
1 T Cutting the price from \(20\) euros to \(5\) euros raises revenue by more than \(1400\).
2 T At a price of \(16\) euros, monthly revenue is already under \(700\).
3 F Doubling the \(5\)-euro price halves demand.
4 T At twenty euros the curve sells fewer than \(30\) subscriptions.
5 T The price that yields \(2500\) of monthly revenue is already under \(5\) euros.

### math-8-24  GOLD (see above)

### math-8-25  \(r=3t^{1/2}\), \(S=9\pi t\)
S(4)=36π, S(9)=81π, S=90π ⇒ t=10
1 T The extra area from hour \(4\) to hour \(9\) already exceeds the area covered at hour \(4\).
2 T After \(4\) hours the covered area is already more than \(30\pi\) square kilometres.
3 F After \(9\) hours the covered area has already reached \(100\pi\) square kilometres.
4 T Doubling elapsed time from \(4\) hours to \(8\) hours doubles the area covered.
5 T The time needed to cover \(90\pi\) square kilometres is already above \(9\) hours.

### math-8-30  \(q=2000p^{-3/2}\), \(R=2000p^{-1/2}\), fixed 400
R(4)=1000, R(16)=500, R(25)=400, covered iff p≤25
1 T At a price of \(25\), monthly revenue is already under \(450\).
2 F Doubling the \(4\)-euro price halves revenue.
3 F The fixed charge is covered only at prices below \(16\).
4 F Raising the price from \(4\) to \(16\) cuts revenue by more than the remaining revenue at \(16\).
5 T At a price of \(4\), net of the \(400\) charge, the publisher still clears more than \(550\).

### math-8-31  \(N=18h^{2/3}\)
N(8)=72, N(27)=162, N(64)=288, N(40)≈210.5
1 T The extra items from \(8\) to \(27\) hours already exceed the \(8\)-hour output.
2 T A \(27\)-hour shift packs more than \(150\) items.
3 F Doubling an \(8\)-hour shift doubles the number of items packed.
4 F The \(250\)-item order can be packed in under \(40\) hours.
5 T Average items per hour fall by more than \(2\) when the shift goes from \(8\) hours to \(27\).

### math-8-33  \(q=1200p^{-1/2}\), \(R=1200p^{1/2}\)
q(16)=300, q(25)=240, R(16)=4800, R(25)=6000, q=200 ⇒ p=36
1 T Raising the price from \(16\) to \(25\) raises revenue by more than \(1000\).
2 T At a price of \(25\) the utility sells fewer than \(250\) units.
3 F Cutting monthly quantity to \(200\) units requires a price above \(40\).
4 F Because quantity falls when price rises, revenue must fall as well.
5 T Doubling the price from \(16\) to \(32\) multiplies revenue by more than \(1.4\).

### math-8-34  \(y=4x^{4/3}\), licence 1024 ⇒ x=64
y(8)=64, y(27)=324, y(54)=4·54^{4/3}=4·81·2^{4/3}≈816
1 F To double the test-firing output, the fuel feed must more than double.
2 T Two firings at a feed of \(8\) together already fall short of one firing at a feed of \(27\).
3 T A feed of \(8\) produces more than \(50\) tonnes.
4 F The licensed ceiling binds before a feed of \(50\).
5 T The extra output from feed \(8\) to feed \(27\) already exceeds \(250\) tonnes.

### math-8-37  \(C=5m^{4/5}\), certify ≤500 ⇒ m=100^{5/4}=100√10≈316.2
C(32)=80, C(243)=405
1 T A fleet of \(243\) machines sustains more than \(400\) requests per second.
2 F The contracted ceiling binds before \(250\) machines.
3 T Two fleets of \(32\) machines together already fall short of one fleet of \(243\).
4 F Because the exponent is below \(1\), the contracted ceiling is never reached.
5 T The extra capacity from \(32\) to \(243\) machines already exceeds the \(32\)-machine reading.

### math-8-41  \(q=6400p^{-2}\), \(R=80q^{1/2}=6400/p\)
q(4)=400, p(25)=16, R(25)=400, R(100)=800, R=1600 ⇒ q=400
1 T After \(100\) units, revenue is already above \(750\) euros.
2 T After \(25\) units the clearing price is already under \(20\) euros.
3 F Raising the catalogue price raises revenue along this curve.
4 F Doubling quantity from \(25\) to \(100\) more than doubles revenue.
5 F The quantity that yields \(1600\) of revenue already exceeds \(400\) units.

### math-8-42  \(Y=20L^{1/2}\)
Y(9)=60, Y(36)=120, Y(25)=100, AP(9)=20/3, AP(25)=4, AP(36)=10/3
1 T The extra output from \(9\) to \(36\) hours already equals the \(9\)-hour output.
2 T A \(36\)-hour shift already produces more than \(100\) units.
3 F At \(25\) hours, average product is still above \(5\) units per hour.
4 T To double the \(9\)-hour output, labour hours must more than double.
5 T Average product falls by more than \(2\) units per hour when the shift goes from \(9\) to \(36\) hours.

### math-8-45  \(T=4g^{2/3}\), cap 32 ⇒ g=8^{3/2}=22.627
T(8)=16, T(27)=36, T(64)=64
1 T The extra throughput from feed \(8\) to \(27\) already exceeds the \(8\)-feed reading.
2 F Doubling the gas feed doubles throughput.
3 T A feed of \(64\) already produces more than \(60\) tonnes per hour.
4 T Throughput per cubic metre falls from feed \(8\) to \(27\) by more than \(0.5\).
5 T The licensed ceiling is reached at a feed below \(24\) cubic metres per hour.

### math-8-46  \(V=4d^2\); cm-scale \(A'=4/10000=0.0004\)
V(3)=36, V(5)=100, V(6)=144, V(4)=64, V(8)=256
1 T At \(6\) metres the basin already holds more than \(140\) cubic metres.
2 F Filling from \(4\) metres to \(8\) metres adds more than \(200\) cubic metres.
3 F Measuring depth in centimetres makes the new coefficient larger than \(0.001\).
4 T The extra volume from \(3\) metres to \(5\) metres already exceeds the volume stored at \(3\) metres.
5 F Stored volume at \(5\) metres is already more than four times the volume at \(3\) metres.

### math-8-47  \(E=v^2/20\)
E(30)=45, E(50)=125, E(40)=80, E(80)=320, E(70)=245
1 T At \(40\) kilometres per hour the index is already above \(70\).
2 F At \(80\) kilometres per hour the index is still under \(300\).
3 T The extra index from \(30\) to \(50\) already exceeds the index at \(30\).
4 T Raising speed from \(40\) to \(80\) multiplies the index by \(4\).
5 F A \(20\) km/h rise from \(30\) to \(50\) adds more to the index than a \(20\) km/h rise from \(50\) to \(70\).

### math-8-49  \(T=4n^{1/2}\), \(40\) h ⇒ n=100
T(4)=8, T(16)=16, T(36)=24, T(49)=28, T(121)=44
1 T The \(40\)-hour ceiling is already binding below \(110\) shipments.
2 F A \(49\)-shipment consignment takes more than \(30\) hours.
3 T Quadrupling a \(4\)-shipment consignment multiplies inspection time by two.
4 T The extra hours from \(4\) to \(36\) shipments already exceed the \(4\)-shipment time.
5 F Staffing that just meets the \(40\)-hour ceiling still covers a \(121\)-shipment consignment.

### math-8-50  \(I=800d^{-2}\)
I(2)=200, I(4)=50, I(5)=32, I(3)=800/9≈88.89, I=8 ⇒ d=10
1 T Doubling the distance from \(2\) metres to \(4\) metres cuts illuminance to one quarter.
2 T At \(5\) metres the illuminance is already under \(40\) lux.
3 F At \(3\) metres the reading is still above \(90\) lux.
4 T The illuminance drop from \(2\) metres to \(4\) metres already exceeds the remaining illuminance at \(4\) metres.
5 F The distance that yields \(8\) lux already exceeds \(10\) metres.

### math-8-51  \(C=100n^{3/4}\), rival \(R=50n\), cap 2700
C(16)=800, C(81)=2700, C(625)=12500, R(81)=4050
1 T After \(81\) accounts the bill is already above \(2500\).
2 T The extra bill from \(16\) to \(81\) accounts already exceeds the \(16\)-account bill.
3 T A bill of \(12500\) already requires more than \(600\) accounts.
4 F Doubling \(16\) accounts doubles the practice bill.
5 T At \(81\) accounts the power-law bill is already cheaper than the rival's quote.

### math-8-52  \(c=400x^{-3/2}\); km-scale \(A'=400/1000^{3/2}=400/10^{4.5}\approx 0.01265\)
c(4)=50, c(16)=6.25, c(100)=0.4
1 T At \(100\) metres the concentration is already below \(0.5\) microgram per cubic metre.
2 T Measuring distance in kilometres makes the new coefficient larger than \(0.01\).
3 F At \(4\) metres the nearer monitor still reads under \(45\) micrograms per cubic metre.
4 T The drop from \(4\) metres to \(16\) metres already exceeds the remaining reading at \(16\) metres.
5 T The distance that yields \(0.4\) already exceeds \(80\) metres.

### math-8-54  \(I=60\sqrt{v}\), scaled \(60v^{3/2}\), \(F=30v\)
I(0.04)=12, I(0.09)=18, I(0.16)=24, scaled(0.25)=7.5, F(0.25)=7.5
1 T At \(0.16\) ADV, impact is already above \(20\) basis points.
2 F At \(0.25\) ADV the scaled charge is already above \(10\).
3 T Once the scaled charge overtakes the notional fee, it stays larger at every bigger order.
4 F Doubling order size from \(0.04\) to \(0.08\) ADV doubles impact.
5 F Two orders of \(0.04\) ADV together already produce more impact than one order of \(0.16\) ADV.

### math-8-56  \(f=3200d^{-1.5}\), core iff f≥100 ⇒ d=32^{2/3}≈10.08
f(4)=400, f(9)=3200/27≈118.5, f(16)=50
1 T A zone \(9\) kilometres away still supplies more than \(100\) visitors a week.
2 F Footfall follows an inverse-square law of driving distance.
3 T The drop from \(4\) km to \(16\) km already exceeds the remaining footfall at \(16\) km.
4 T Core catchment already ends before \(11\) kilometres.
5 F An extra kilometre of drive cuts more visitors far from the park than near it.

### math-8-57  \(y=24\sqrt{a}\)
y(100)=240, y(225)=360, y(400)=480, y(450)=24√450≈509.1
1 T Output per square metre falls from \(100\) m² to \(225\) m² by more than \(0.5\) kWh.
2 F Expanding the \(225\) m² array to \(450\) m² would push output above \(520\) kWh.
3 T A \(400\) m² array already delivers more than \(470\) kWh.
4 T To double the \(240\) kWh output, the \(100\) m² array must more than double in area.
5 F Two \(100\) m² arrays together already beat one \(400\) m² array.

### math-8-58  \(c=800N^{-1/2}\), \(S=800N^{1/2}\)
c(100)=80, c(400)=40, c(1600)=20, c(25)=160, S(100)=8000, S(400)=16000
1 F Doubling cumulative volume from \(100\) to \(200\) halves the unit cost.
2 T At \(1600\) thousand cells the unit cost is already below \(25\) euros.
3 T At \(25\) thousand cells the unit cost is still above \(150\) euros.
4 F Cumulative spend at \(400\) thousand already exceeds twice the spend at \(100\) thousand.
5 T Quadrupling from \(100\) to \(400\) thousand cells cuts unit cost by more than \(35\) euros.

### math-8-61  \(S=5p^{3/2}\)
S(4)=40, S(9)=135, S(16)=320, S(18)=5·18√18=90√2≈127.3 wait NO: 18^{3/2}=18√18=18·3√2=54√2≈76.37, S=5·76.37≈381.9
1 T At \(16\) A the weld is already stronger than \(300\) N.
2 F An extra ampere adds more strength at \(4\) A than it does at \(9\) A.
3 T The extra strength from \(4\) A to \(9\) A already exceeds the \(4\) A reading.
4 F The smallest current that clears the \(400\) N reject line is below \(18\) A.
5 T Doubling current from \(4\) A to \(8\) A multiplies strength by more than \(2.5\).

### math-8-62  \(H=6m^{2/3}\); tonne-scale \(A'=600\)
H(8)=24, H(125)=150, H(64)=96
1 T A \(125\) kg buoy already holds more than \(140\) kN.
2 F Doubling buoy mass from \(8\) kg to \(16\) kg doubles holding power.
3 F Reaching \(150\) kN takes more than \(1\) tonne.
4 T Switching mass from kilograms to tonnes makes the new coefficient larger than \(500\).
5 F Two \(8\) kg buoys together already hold more than one \(64\) kg buoy.

### math-8-63  \(T=800/d^2\), floor 8 ⇒ d=10
T(4)=50, T(8)=12.5, T(11)=800/121≈6.61, T(5)=32
1 T The farthest reliable hop distance is already under \(12\) m.
2 F Doubling the hop distance from \(4\) m to \(8\) m halves the throughput.
3 F A hop of \(11\) m still clears the \(8\) Mbps reliability floor.
4 T The drop from \(4\) m to \(8\) m already exceeds remaining throughput at \(8\) m.
5 T A hop of \(5\) m still delivers more than \(30\) Mbps.

### math-8-64  \(G=8m^{3/4}\)
G(16)=64, G(64)=64? 64^{3/4}=8, G=64. G(256)=512
1 T A \(16\) g fish already has more than \(50\) cm\(^{2}\) of gill.
2 F Doubling body mass doubles gill area.
3 F A \(64\) g fish already has more than \(200\) cm\(^{2}\) of gill.
4 T Two \(16\) g fish together already have more gill area than one \(64\) g fish.
5 T Gill area per gram falls from \(16\) g to \(256\) g by more than \(1\).

### math-8-65  \(S=5\sqrt{t}\)
S(4)=10, S(9)=15, S(36)=30
1 T Quadrupling curing time exactly doubles strength.
2 T Strength on day \(4\) is already above \(8\) MPa.
3 T The extra strength from day \(4\) to day \(9\) already falls short of the day-\(4\) strength.
4 T Reaching \(30\) MPa still takes under \(40\) days of curing.
5 F The recorded \(5\) MPa is the strength on day \(9\).

### math-8-68  \(I=2.88/d^2\), cap 0.08 ⇒ d=6
I(2)=0.72, I(4)=0.18, I(6)=0.08
1 T Doubling the distance from \(2\) m to \(4\) m cuts intensity to one quarter.
2 T At \(4\) metres the intensity is already under \(0.2\) W/m\(^{2}\).
3 T An extra metre cuts more intensity at \(2\) m than it does at \(6\) m.
4 F At \(6\) metres the intensity is still above the \(0.08\) W/m\(^{2}\) night cap.
5 T The distance that meets the \(0.08\) cap is already under \(7\) m.

### math-8-70  \(T=20\sqrt{s}\), cap 36 drivers; 150 pallets ⇒ s=56.25
T(16)=80, T(36)=120, T(64)=160
1 T To double the logged throughput the yard must more than double the crew.
2 T With \(36\) drivers the model already predicts more than \(110\) pallets per hour.
3 T Throughput per driver falls from \(16\) to \(36\) drivers by more than \(1\) pallet per driver.
4 F Reaching \(150\) pallets per hour stays inside the safety cap.
5 T Two \(16\)-driver shifts already match one \(64\)-driver shift.

### math-8-74  \(Q=12L^{3/4}\)
Q(16)=96, Q(81)=324, AP(16)=6, AP(81)=4
1 T At \(16\) hours, average product is under \(7\) units an hour.
2 F To double output she must double the labour hours.
3 T Average product falls by more than \(1.5\) units an hour from \(16\) to \(81\) hours.
4 F At \(81\) hours, average product still exceeds \(5\) units an hour.
5 T The extra output from \(16\) to \(81\) hours already exceeds the \(16\)-hour output.

### math-8-77  \(f=6x^{3/2}\)
f(4)=48, f(9)=162, f(25)=750
1 F Multiplying the pallet-volume index by \(4\) multiplies handling cost by \(4\).
2 T At index \(9\) the modelled handling cost is already above \(150\) euros.
3 T Handling cost grows faster than the pallet-volume index.
4 F Because the exponent exceeds one, equal gaps in the index produce equal gaps in cost.
5 F Raising the index from \(9\) to \(25\) adds under \(500\) euros of handling cost.

### math-8-78  \(W=5s^{3/2}\), cap 320 ⇒ s=16
W(9)=135, W(4)=40, W(16)=320
1 T The largest admissible scale is already below \(20\).
2 F Doubling the permit ceiling doubles the admissible scale index.
3 F If the coefficient doubled, the admissible scale under the same ceiling would be halved.
4 T At scale index \(4\) the daily load is under \(50\) kilograms.
5 T The extra load from scale \(4\) to scale \(9\) already exceeds the load at scale \(4\).

### math-8-80  \(M=240h^3\), M(0.5)=30
M(1)=240, M(1.5)=810, M(2)=1920
1 T A bell of height \(1.5\) m already weighs more than \(700\) kg.
2 F Doubling a bell's height doubles its mass.
3 T A one-metre bell already weighs more than \(200\) kg.
4 T Two \(1\) m bells together already fall short of one \(1.5\) m bell.
5 T Raising height from \(1\) m to \(2\) m adds more than \(1600\) kg.

### math-8-82  \(S=400x^{-3}\), S(2)=50
S(1)=400, S(4)=6.25, S(8)=400/512≈0.781, 400/x^3=3.2 ⇒ x^3=125, x=5
1 F The received signal is inversely proportional to burial depth.
2 F Doubling burial depth halves the received signal.
3 T A conductor buried at \(4\) metres already returns under \(7\) millivolts.
4 F A reading of \(3.2\) millivolts still corresponds to a burial depth of more than \(8\) metres.
5 T The drop from \(2\) m to \(4\) m already exceeds the remaining signal at \(4\) m.

### math-8-84  \(Q=3r^4\), Q(2)=48
Q(3)=243, Q(1)=3, Q(4)=768
1 T A tube of radius \(3\) mm already delivers more than \(200\) litres per hour.
2 F Doubling the tube radius doubles the flow.
3 F A tube of radius \(1\) mm still delivers more than \(10\) litres per hour.
4 F The mean velocity index is the same in every tube.
5 T Two \(1\) mm tubes together already fall short of one \(2\) mm tube.

### math-8-85  (surgical: replace only the “stays positive” claim)
Keep A, C, D, E wording and keys. Replace B with:
B T The drop from \(3\) metres to \(6\) metres already exceeds the remaining dose at \(6\) metres.
H(3)=80, H(6)=20, drop 60>20. Update that explanation and Part 3 only as needed.

### math-8-87  \(Q=16h^{3/2}\) (metres); cm-scale \(A'=0.016\)
Q(0.25)=2, Q(1)=16, Q(4)=128
1 F Switching the head to centimetres makes the new coefficient (cubic metres per second) larger than \(0.02\).
2 T A head of \(1\) metre still discharges under \(20\) cubic metres per second.
3 F Doubling the head doubles the discharge.
4 F A head of \(4\) metres still discharges under \(100\) cubic metres per second.
5 T The extra discharge from \(0.25\) m to \(1\) m already exceeds the \(0.25\) m gauging.
