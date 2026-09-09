# Crooked math display rewrite queue

> **Status (this branch):** high crooked patterns cleared — flattened 662 aligned tails; nested/orphan rewrites done via per-task agents. Screenshot case MATH 11.170 is one-line elasticity.

Total: **315** | high: **192** | mild: **123**

Prefer one-line complete equations. No short `&= number` tails; no nested `\dfrac{-\frac}`.
One task at a time, high first.

## HIGH

1. **MATH 11.170** (`math-ch11-exam.json`) — Ride platform: fare, commission, and profit
   - fields: solution_overview, tactical[3]
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/two_line): `P^{\prime}(Q) &= 100-5Q // &= 0\implies Q = 20`
   - sample (solution_overview/nested): `\begin{aligned} \varepsilon &= \dfrac{-\frac12\cdot 80}{20} \\ &= -2 \end{aligned}`
   - sample (solution_overview/short_tail): `\varepsilon &= \dfrac{-\frac12\cdot 80}{20} // &= -2`

2. **MATH 4.112** (`math-ch4-cases.json`) — Break-Even Output and Quadratic Parameters
   - fields: solution_overview, tactical[1]
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont, orphan_eq_display
   - sample (solution_overview/short_tail): `&= -\frac{-10}{2} // &= 5`
   - sample (solution_overview/multi): `x_1 + x_2 &= -\frac{b}{a} // &= -\frac{-10}{2} // &= 5`
   - sample (solution_overview/short_tail): `x_1 x_2 &= \frac{c}{a} // &= \frac{k}{2}`

3. **MATH 12.164** (`math-cases-ch12-probability.json`) — Tagged Fish in Four Lakes
   - fields: solution_overview, tactical[3]
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/short_tail): `P(T) &= \frac{1}{4} \left(\frac{193}{180}\right) // &= \frac{193}{720}`
   - sample (solution_overview/two_line): `P(T) &= \frac{1}{4} \left(\frac{193}{180}\right) // &= \frac{193}{720}`
   - sample (tactical[3]/nested): `P(L_N \mid T) = \frac{\frac{1}{18}}{\frac{193}{720}}`

4. **MATH 12.173** (`math-cases-ch12-probability.json`) — Prescription Errors by Pharmacy
   - fields: solution_overview, tactical[4]
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/short_tail): `P(L_1)P(E \mid L_1) &= \frac{1}{4} \cdot 0.25 // &= 0.0625`
   - sample (solution_overview/two_line): `P(L_1)P(E \mid L_1) &= \frac{1}{4} \cdot 0.25 // &= 0.0625`
   - sample (solution_overview/short_tail): `P(L_2)P(E \mid L_2) &= \frac{1}{4} \cdot 0.125 // &= 0.03125`

5. **MATH 12.174** (`math-cases-ch12-probability.json`) — Complaints by Call-Centre Team
   - fields: solution_overview, tactical[4]
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/short_tail): `&= P(T_4) // &= \frac{1}{4}`
   - sample (solution_overview/short_tail): `P(E \mid T_1) &= \frac{4}{10} // &= 0.4`
   - sample (solution_overview/two_line): `P(E \mid T_1) &= \frac{4}{10} // &= 0.4`

6. **MATH 4.102** (`math-ch4-cases.json`) — Roots and Reciprocals of a Parameterized Quadratic Equation
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/short_tail): `x_1 + x_2 &= -\frac{b}{a} // &= \frac{k + 2}{2}`
   - sample (solution_overview/two_line): `x_1 + x_2 &= -\frac{b}{a} // &= \frac{k + 2}{2}`
   - sample (solution_overview/short_tail): `x_1 x_2 &= \frac{c}{a} // &= \frac{k - 1}{2}`

7. **MATH 12.58** (`math-cases-ch12-probability.json`) — Of 2,000 factory units, 700 had Defect A, 440 Defect B, and 360 Defect C
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{700}{2000} // &= 0.35`
   - sample (solution_overview/multi): `P(A) &= \frac{N(A)}{N} // &= \frac{700}{2000} // &= 0.35`
   - sample (solution_overview/short_tail): `&= \frac{440}{2000} // &= 0.22`

8. **MATH 12.62** (`math-cases-ch12-probability.json`) — Of 3,000 health-club members, 1,800 attended Yoga, 1,500 Spin, and 1,200
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{1800}{3000} // &= 0.60`
   - sample (solution_overview/multi): `|Y| &= 1800 \implies P(Y) // &= \frac{1800}{3000} // &= 0.60`
   - sample (solution_overview/short_tail): `&= \frac{1500}{3000} // &= 0.50`

9. **MATH 12.63** (`math-cases-ch12-probability.json`) — Inclusion-Exclusion Principle
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{73}{100} // &= 0.73`
   - sample (solution_overview/multi): `P(M \cup P \cup C) &= \frac{|M \cup P \cup C|}{N} // &= \frac{73}{100} // &= 0.73`
   - sample (solution_overview/short_tail): `&= \frac{46}{100} // &= 0.46`

10. **MATH 12.78** (`math-cases-ch12-probability.json`) — A car rental agency tracks late returns by vehicle class
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 3000 + 1200 // &= 4200`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 3000 + 1200 // &= 4200`
   - sample (solution_overview/two_line): `P(E) &= \frac{3000}{4200} // &= \frac{5}{7} \approx 0.7143`

11. **MATH 12.82** (`math-cases-ch12-probability.json`) — A grocery store tracks scanning errors by checkout method
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 4000 \text{ (self-checkout)} + 6000 \text{ (cashier-assisted)} // &= 10000`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 4000 \text{ (self-checkout)} + 6000 \text{ (cashier-assisted)} // &= 10000`
   - sample (solution_overview/short_tail): `N_{E} &= 320 \text{ (self-checkout errors)} + 180 \text{ (cashier-assisted errors)} // &= 500`

12. **MATH 12.86** (`math-cases-ch12-probability.json`) — A streaming service tracks first-year cancellations by subscription plan
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `P(B) &= \frac{6,000}{18,000} // &= \frac{1}{3} \approx 0.3333`
   - sample (solution_overview/short_tail): `&= \frac{1}{2} // &= 0.5`
   - sample (solution_overview/multi): `P(S) &= \frac{9,000}{18,000} // &= \frac{1}{2} // &= 0.5`

13. **MATH 12.91** (`math-cases-ch12-probability.json`) — A manufacturing plant runs three shifts each day
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `\text{Total units} &= 10,000 + 8,000 + 6,000 // &= 24,000`
   - sample (solution_overview/short_tail): `\text{Total defective units} &= 250 + 320 + 180 // &= 750`
   - sample (solution_overview/two_line): `\text{Total defective units} &= 250 + 320 + 180 // &= 750`

14. **MATH 12.104** (`math-cases-ch12-probability.json`) — Two fair six-sided dice are rolled once
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N(A) &= 4 + 3 + 2 + 1 // &= 10`
   - sample (solution_overview/two_line): `N(A) &= 4 + 3 + 2 + 1 // &= 10`
   - sample (solution_overview/short_tail): `&= \frac{10}{36} // &= \frac{5}{18}`

15. **MATH 12.170** (`math-cases-ch12-probability.json`) — Failed Room Inspections by Dorm
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{1}{4} // &= 0.25`
   - sample (solution_overview/multi): `P(D_1) &= P(D_2) // &= P(D_3) // &= P(D_4) // &= \frac{1}{4} // &= 0.25`
   - sample (solution_overview/short_tail): `P(F \mid D_1) &= \frac{3}{15} // &= 0.2`

16. **MATH 12.195** (`math-cases-ch12-probability.json`) — Face Masks That Failed the Filtration Test
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{3200}{5000} // &= 0.64`
   - sample (solution_overview/multi): `P(X) &= \frac{N_X}{N} // &= \frac{3200}{5000} // &= 0.64`
   - sample (solution_overview/short_tail): `&= \frac{1800}{5000} // &= 0.36`

17. **MATH 4.37** (`math-ch4-cases.json`) — Joint Audit Report Production Rates
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `r_{\text{joint}} &= r_A + r_B // &= \frac{1}{12} + \frac{1}{20}`
   - sample (solution_overview/short_tail): `&= \frac{8}{60} // &= \frac{2}{15}`
   - sample (solution_overview/multi): `r_{\text{joint}} &= \frac{5}{60} + \frac{3}{60} // &= \frac{8}{60} // &= \frac{2}{15}`

18. **MATH 4.46** (`math-ch4-cases.json`) — Linear Scale Conversion for Vendor Ratings
   - fields: solution_overview, tactical[2]
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{90}{60} // &= \frac{3}{2}`
   - sample (solution_overview/multi): `m &= \frac{G_2 - G_1}{E_2 - E_1} // &= \frac{140 - 50}{80 - 20} // &= \frac{90}{60} // &= \frac{3}{2}`
   - sample (solution_overview/two_line): `E(G) &= \frac{2}{3}(G - 20) // &= \frac{2}{3}G - \frac{40}{3}`

19. **MATH 7.E16** (`math-ch7-mixed-exam.json`) — Two intercepts — midpoint check and a height trap
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= \frac{-4}{2} // &= -2`
   - sample (solution_overview/multi): `m &= \frac{0-4}{2-0} // &= \frac{-4}{2} // &= -2`
   - sample (solution_overview/short_tail): `f(1) &= -2+4 // &= 2`

20. **MATH 12.22** (`math-cases-ch12-probability.json`) — Tennis Club Pairings
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{12 \times 11}{2 \times 1} // &= 66`
   - sample (solution_overview/multi): `N_{\text{handshakes}} &= \binom{12}{2} // &= \frac{12 \times 11}{2 \times 1} // &= 66`
   - sample (solution_overview/multi): `N_{\text{pairings}}(12) &= \frac{12!}{2^6 6!} // &= \frac{479,001,600}{64 \times 720} // &= \frac{479,001,600}{46,080} // &= 10,395`

21. **MATH 12.33** (`math-cases-ch12-probability.json`) — The Ballroom Waltz Workshop
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{14 \times 13}{2 \times 1} // &= 91`
   - sample (solution_overview/multi): `\text{Number of handshakes} &= \frac{14!}{2!(14-2)!} // &= \frac{14 \times 13}{2 \times 1} // &= 91`

22. **MATH 12.79** (`math-cases-ch12-probability.json`) — A bookstore tracks returns by purchase channel
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 5000 + 3500 // &= 8500`
   - sample (solution_overview/short_tail): `&= 450 + 175 // &= 625`
   - sample (solution_overview/short_tail): `&= 8500 - 625 // &= 7875`

23. **MATH 12.81** (`math-cases-ch12-probability.json`) — A pizza restaurant tracks order errors by order method
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 105 + 90 + 110 // &= 305`
   - sample (solution_overview/multi): `P(P) &= \frac{N_{\text{Phone}}}{N_{\text{Total Orders}} // &= \frac{1,500}{5,500} // &= \frac{15}{55} // &= \frac{3}{11} \approx 0.2727`
   - sample (solution_overview/multi): `P(A) &= \frac{N_{\text{App}}}{N_{\text{Total Orders}}} // &= \frac{3,000}{5,500} // &= \frac{30}{55} // &= \frac{6}{11} \approx 0.5455`

24. **MATH 12.83** (`math-cases-ch12-probability.json`) — A hotel tracks cancellations by booking channel
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 7000 + 3000 // &= 10000`
   - sample (solution_overview/short_tail): `&= 560 + 450 // &= 1010`
   - sample (solution_overview/short_tail): `&= \frac{7000}{10000} // &= 0.70`

25. **MATH 12.93** (`math-cases-ch12-probability.json`) — A certification board compared pass rates between two exam formats offered last
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 4500 + 7500 // &= 12000`
   - sample (solution_overview/short_tail): `&= 810 + 600 // &= 1410`
   - sample (solution_overview/short_tail): `&= 12000 - 1410 // &= 10590`

26. **MATH 12.103** (`math-cases-ch12-probability.json`) — Two fair six-sided dice are rolled once
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{9}{36} // &= \frac{1}{4}`
   - sample (solution_overview/multi): `P(O) &= \frac{\text{number of outcomes in } O}{\text{to // &= \frac{9}{36} // &= \frac{1}{4}`
   - sample (solution_overview/short_tail): `&= \frac{27}{36} // &= \frac{3}{4}`

27. **MATH 12.109** (`math-cases-ch12-probability.json`) — A city transit authority reviewed a month of on-time performance across three
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{1\,600}{40\,000} // &= 0.04`
   - sample (solution_overview/multi): `P(LT) &= \frac{N_{LT}}{N_{\text{total}}} // &= \frac{1\,600}{40\,000} // &= 0.04`

28. **MATH 12.117** (`math-cases-ch12-probability.json`) — A Vending Machine
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{400}{2} // &= 200`
   - sample (solution_overview/multi): `\mu &= \frac{180 + 220}{2} // &= \frac{400}{2} // &= 200`
   - sample (solution_overview/short_tail): `&= \frac{1600}{12} // &= \frac{400}{3}`

29. **MATH 12.166** (`math-cases-ch12-probability.json`) — Damaged Packages by Warehouse
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{20 + 35 + 7 + 70}{560} // &= \frac{132}{560}`
   - sample (solution_overview/multi): `P(D) &= \frac{20}{560} + \frac{35}{560} + \frac{7}{560} // &= \frac{20 + 35 + 7 + 70}{560} // &= \frac{132}{560}`

30. **MATH 12.196** (`math-cases-ch12-probability.json`) — Underweight Flour Sacks from Two Mills
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{900}{1500} // &= 0.6`
   - sample (solution_overview/multi): `P(N) &= \frac{\text{sacks from Northgate}}{\text{total  // &= \frac{900}{1500} // &= 0.6`
   - sample (solution_overview/short_tail): `&= \frac{600}{1500} // &= 0.4`

31. **MATH 12.198** (`math-cases-ch12-probability.json`) — Defective Sheets from Two Paper Vendors
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{5}{8} // &= 0.625`
   - sample (solution_overview/multi): `P(R) &= \frac{7,500}{12,000} // &= \frac{15}{24} // &= \frac{5}{8} // &= 0.625`
   - sample (solution_overview/short_tail): `&= \frac{3}{8} // &= 0.375`

32. **MATH 13.37** (`math-cases-ch13-binomial.json`) — Component Flag Checks
   - fields: tactical[2]
   - reasons: aligned_two_line_cont, orphan_eq_display
   - sample (tactical[2]/two_line): `& P(X_A = 0) // &= \binom{23}{0}(0.34)^{0}(0.66)^{23} \approx 7.0715 \times 10^{-5}`
   - sample (tactical[2]/orphan): `= \binom{23}{0}(0.66)^{0}(0.34)^{23} \approx 1.675 \times 10^{-11}`

33. **MATH 13.76** (`math-ch13-exam.json`) — Regional Tennis Circuit
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{27.2}{40} // &= 0.68`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{27.2}{40} // &= 0.68`

34. **MATH 13.77** (`math-ch13-exam.json`) — Festival Food Stall
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{12.8}{16} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{12.8}{16} // &= 0.8`

35. **MATH 13.79** (`math-ch13-exam.json`) — Night Courier Audit
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{42}{50} // &= 0.84`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{42}{50} // &= 0.84`

36. **MATH 13.80** (`math-ch13-exam.json`) — Coding Contest Auto-Grader
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{14}{35} // &= 0.4`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{14}{35} // &= 0.4`

37. **MATH 13.81** (`math-ch13-exam.json`) — Warehouse Picker Accuracy
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{20}{25} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{20}{25} // &= 0.8`

38. **MATH 13.82** (`math-ch13-exam.json`) — Language Lab Listening Test
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{15}{20} // &= 0.75`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{15}{20} // &= 0.75`

39. **MATH 13.84** (`math-ch13-exam.json`) — Hotel Booking Confirmations
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{24}{30} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{24}{30} // &= 0.8`

40. **MATH 13.85** (`math-ch13-exam.json`) — Pharmacy Prescription Checks
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{8}{40} // &= 0.2`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{8}{40} // &= 0.2`

41. **MATH 13.86** (`math-ch13-exam.json`) — Museum Audio Guide Returns
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{36}{45} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{36}{45} // &= 0.8`

42. **MATH 13.87** (`math-ch13-exam.json`) — Startup Demo Conversions
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{10}{25} // &= 0.4`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{10}{25} // &= 0.4`

43. **MATH 13.89** (`math-ch13-exam.json`) — Escape-Room Puzzle Solves
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{7.2}{12} // &= 0.6`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{7.2}{12} // &= 0.6`

44. **MATH 13.90** (`math-ch13-exam.json`) — Wildlife Camera Triggers
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{12}{48} // &= 0.25`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{12}{48} // &= 0.25`

45. **MATH 13.91** (`math-ch13-exam.json`) — Theatre Ticket Upsells
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{12.8}{32} // &= 0.4`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{12.8}{32} // &= 0.4`

46. **MATH 13.92** (`math-ch13-exam.json`) — Lab Pipette Calibration Passes
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{17}{20} // &= 0.85`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{17}{20} // &= 0.85`

47. **MATH 13.93** (`math-ch13-exam.json`) — Online Quiz Instant Feedback
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{9}{15} // &= 0.6`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{9}{15} // &= 0.6`

48. **MATH 13.95** (`math-ch13-exam.json`) — Charity Door-to-Door Pledges
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{10}{40} // &= 0.25`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{10}{40} // &= 0.25`

49. **MATH 13.96** (`math-ch13-exam.json`) — Bakery Morning Batch QC
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{22.4}{28} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{22.4}{28} // &= 0.8`

50. **MATH 13.97** (`math-ch13-exam.json`) — Swim-Meet Legal Starts
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{19.2}{24} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{19.2}{24} // &= 0.8`

51. **MATH 13.98** (`math-ch13-exam.json`) — Library Reserve Hold Pickups
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{27}{36} // &= 0.75`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{27}{36} // &= 0.75`

52. **MATH 13.100** (`math-ch13-exam.json`) — Robot Vacuum Room Completions
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{12.6}{18} // &= 0.7`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{12.6}{18} // &= 0.7`

53. **MATH 13.101** (`math-ch13-exam.json`) — Debate Tournament Coin Tosses
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{11}{20} // &= 0.55`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{11}{20} // &= 0.55`

54. **MATH 13.102** (`math-ch13-exam.json`) — Farm Soil Moisture Alerts
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{9}{45} // &= 0.2`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{9}{45} // &= 0.2`

55. **MATH 13.103** (`math-ch13-exam.json`) — Cinema Loyalty Card Scans
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{36}{60} // &= 0.6`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{36}{60} // &= 0.6`

56. **MATH 13.105** (`math-ch13-exam.json`) — Podcast Ad Click-Throughs
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{5}{50} // &= 0.1`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{5}{50} // &= 0.1`

57. **MATH 13.106** (`math-ch13-exam.json`) — Campus Printer Job Success
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{17.6}{22} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{17.6}{22} // &= 0.8`

58. **MATH 13.107** (`math-ch13-exam.json`) — Board-Game Critical Hits
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{6}{30} // &= 0.2`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{6}{30} // &= 0.2`

59. **MATH 13.108** (`math-ch13-exam.json`) — Harbor Foghorn Tests
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{11.2}{14} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{11.2}{14} // &= 0.8`

60. **MATH 13.110** (`math-ch13-exam.json`) — Drone Delivery Drop Accuracy
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{12}{16} // &= 0.75`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{12}{16} // &= 0.75`

61. **MATH 13.111** (`math-ch13-exam.json`) — Music Festival Wristband Scans
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{81}{90} // &= 0.9`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{81}{90} // &= 0.9`

62. **MATH 13.112** (`math-ch13-exam.json`) — Tutoring Session Homework Done
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{10.8}{18} // &= 0.6`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{10.8}{18} // &= 0.6`

63. **MATH 13.113** (`math-ch13-exam.json`) — Ice-Cream Machine Self-Cleans
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{20.8}{26} // &= 0.8`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{20.8}{26} // &= 0.8`

64. **MATH 13.115** (`math-ch13-exam.json`) — Satellite Packet Acknowledgements
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \dfrac{34}{40} // &= 0.85`
   - sample (solution_overview/multi): `p &= \dfrac{E[X]}{n} // &= \dfrac{34}{40} // &= 0.85`

65. **MATH 4.165** (`math-ch4-cases.json`) — Round-Trip Average Speed and Algebraic Equation Forms
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{2v(v - 20)}{2v - 20} // &= \frac{v(v - 20)}{v - 10}`
   - sample (solution_overview/multi): `\bar{v} &= \frac{2}{\frac{1}{v} + \frac{1}{v - 20}} // &= \frac{2v(v - 20)}{2v - 20} // &= \frac{v(v - 20)}{v - 10}`

66. **MATH 7.E20** (`math-ch7-mixed-exam.json`) — Revenue peak is not the profit peak
   - fields: solution_overview
   - reasons: aligned_two_line_cont, orphan_eq_display
   - sample (solution_overview/two_line): `\Pi(p) &= R(p)-C(p) // &= -p^{2}+14p-20`
   - sample (solution_overview/orphan): `=\left(8,64\right)\qquad a_R=-1<0`
   - sample (solution_overview/orphan): `=\left(7,29\right)`

67. **MATH 12.01** (`math-cases-ch12-probability.json`) — A Committee Selection
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `N(\text{total committees}) &= \frac{12!}{4!(12-4)!} // &= \frac{12 \times 11 \times 10 \times 9}{4 \times 3 \times 2 \times 1}`
   - sample (solution_overview/short_tail): `&= 35 \times 1 // &= 35`
   - sample (solution_overview/short_tail): `&= 35 \times 5 // &= 175`

68. **MATH 12.09** (`math-cases-ch12-probability.json`) — A Round Table
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `N_C &= (8-1)! // &= 7!`
   - sample (solution_overview/two_line): `N_{C,AB} &= 2 \times (8-2)! // &= 2 \times 6!`
   - sample (solution_overview/short_tail): `N_{C,AB} &= 2 \times 720 // &= 1440`

69. **MATH 12.12** (`math-cases-ch12-probability.json`) — Find the Missing Value (12)
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `8 \times (8-1) \times (8-2) &= 8 \times 7 \times 6 // &= 336`
   - sample (solution_overview/two_line): `8 \times (8-1) \times (8-2) &= 8 \times 7 \times 6 // &= 336`

70. **MATH 12.14** (`math-cases-ch12-probability.json`) — Choosing a Committee
   - fields: solution_overview, tactical[4]
   - reasons: aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/two_line): `\binom{13}{5} &= \frac{13!}{5!(13-5)!} // &= \frac{13 \times 12 \times 11 \times 10 \times 9}{5 \times 4 \times 3 \times 2 \times 1}`
   - sample (tactical[4]/nested): `\frac{P(\text{at least 1 woman})}{P(\text{at least 4 women})} = \frac{\frac{1231}{1287}}{\frac{41}{1287}}`

71. **MATH 12.15** (`math-cases-ch12-probability.json`) — Mismatched Gifts (Derangements)
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= 6 \times 5 \times 4 \times 3 \times 2 \times 1 // &= 720`
   - sample (solution_overview/two_line): `P(k \text{ matches}) &= \frac{N_k}{n!} // &= \frac{\binom{n}{k} D_{n-k}}{n!}`

72. **MATH 12.20** (`math-cases-ch12-probability.json`) — The National Lottery
   - fields: solution_overview, tactical[4]
   - reasons: aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/two_line): `P(X = k) &= \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}} // &= \frac{\binom{6}{k} \binom{43}{6-k}}{13,983,816}`
   - sample (tactical[4]/nested): `\frac{P(X = 3)}{P(X = 4)} = \frac{\frac{246,820}{13,983,816}}{\frac{13,545}{13,983,816}} = \frac{246,820}{13,545}`

73. **MATH 12.32** (`math-cases-ch12-probability.json`) — The Marathon Medical Tent
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `\binom{22}{6} &= \frac{22!}{6!(22-6)!} // &= \frac{22 \times 21 \times 20 \times 19 \times 18 \times 17}{6 \times 5 \times 4 \times `
   - sample (solution_overview/two_line): `\binom{9}{0} \binom{13}{6} &= 1 \times 1,716 // &= 1,716`
   - sample (solution_overview/two_line): `\binom{9}{1} \binom{13}{5} &= 9 \times 1,287 // &= 11,583`

74. **MATH 12.39** (`math-cases-ch12-probability.json`) — The Regional Cup Exhibition
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `\binom{16}{4} &= \frac{16!}{4!(16-4)!} // &= \frac{16 \times 15 \times 14 \times 13}{4 \times 3 \times 2 \times 1}`
   - sample (solution_overview/short_tail): `&= 1 \times 210 // &= 210`
   - sample (solution_overview/short_tail): `&= 6 \times 120 // &= 720`

75. **MATH 12.41** (`math-cases-ch12-probability.json`) — Combinatorial Probability 41
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: aligned_two_line_cont, nested_frac_display
   - sample (solution_overview/two_line): `\text{Total committees} &= \frac{15!}{5!(15-5)!} // &= \frac{15 \times 14 \times 13 \times 12 \times 11}{5 \times 4 \times 3 \times 2 \times 1`
   - sample (solution_overview/two_line): `N(3\text{W}, 2\text{M}) &= \frac{6!}{3!3!} \times \frac{9!}{2!7!} // &= (20) \times (36)`
   - sample (tactical[2]/two_line): `N(\text{specific person selected}) &= \frac{14!}{4!10!} // &= \frac{14 \times 13 \times 12 \times 11}{4 \times 3 \times 2 \times 1}`

76. **MATH 12.50** (`math-cases-ch12-probability.json`) — A retailer analyzed loyalty card ownership among its customers
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(E_3) &= P(X \cap Y \cap Z) // &= 0.09`
   - sample (solution_overview/two_line): `P(E_3) &= P(X \cap Y \cap Z) // &= 0.09`
   - sample (solution_overview/short_tail): `P(X \cap Y \cap Z^c) &= 0.18 - 0.09 // &= 0.09`

77. **MATH 12.52** (`math-cases-ch12-probability.json`) — A survey asked respondents which of three social media platforms they use
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(\text{exactly three}) &= P(P \cap Q \cap R) // &= 0.12`
   - sample (solution_overview/two_line): `P(\text{exactly three}) &= P(P \cap Q \cap R) // &= 0.12`

78. **MATH 12.60** (`math-cases-ch12-probability.json`) — Product rates are P(A)=55%, P(B)=45%, and P(C)=35%
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(A \cap B) + P(A \cap C) + P(B \cap C) &= 0.40 + 0.18 + 0.15 // &= 0.73`
   - sample (solution_overview/two_line): `P(A \cap B) + P(A \cap C) + P(B \cap C) &= 0.40 + 0.18 + 0.15 // &= 0.73`

79. **MATH 12.61** (`math-cases-ch12-probability.json`) — Of 1,500 servers, Memory, Disk, and Network fault counts were 525, 390, and 285
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(M) &= \frac{525}{1500} // &= 0.35`
   - sample (solution_overview/two_line): `P(M) &= \frac{525}{1500} // &= 0.35`
   - sample (solution_overview/short_tail): `P(D) &= \frac{390}{1500} // &= 0.26`

80. **MATH 12.69** (`math-cases-ch12-probability.json`) — Sci-fi, fantasy, and mystery readers
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(A) &= 0.10 + 0.08 + 0.06 + 0.05 // &= 0.29`
   - sample (solution_overview/two_line): `P(A) &= 0.10 + 0.08 + 0.06 + 0.05 // &= 0.29`
   - sample (solution_overview/short_tail): `P(B) &= 0.14 + 0.08 + 0.07 + 0.05 // &= 0.34`

81. **MATH 12.70** (`math-cases-ch12-probability.json`) — Health, dental, and vision benefits
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(H) &= 0.03 + 0.06 + 0.05 + 0.12 // &= 0.26`
   - sample (solution_overview/two_line): `P(H) &= 0.03 + 0.06 + 0.05 + 0.12 // &= 0.26`
   - sample (solution_overview/short_tail): `P(D) &= 0.03 + 0.06 + 0.02 + 0.09 // &= 0.20`

82. **MATH 12.72** (`math-cases-ch12-probability.json`) — An electronics store tracks warranty claims by product category
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 800 + 500 // &= 1300`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 800 + 500 // &= 1300`
   - sample (solution_overview/short_tail): `N_W &= 60 + 55 // &= 115`

83. **MATH 12.73** (`math-cases-ch12-probability.json`) — A coffee shop tracks oat-milk add-ons by drink size
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 1400 + 900 // &= 2300`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 1400 + 900 // &= 2300`

84. **MATH 12.76** (`math-cases-ch12-probability.json`) — A call center tracks first-call resolution by call reason
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 1200 + 1800 + 1000 // &= 4000`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 1200 + 1800 + 1000 // &= 4000`
   - sample (solution_overview/short_tail): `N_{R^c \cap B} &= 1200 - 900 // &= 300`

85. **MATH 12.77** (`math-cases-ch12-probability.json`) — A movie theater tracks concession purchases by showtime
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 2600 + 4200 // &= 6800`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 2600 + 4200 // &= 6800`
   - sample (solution_overview/short_tail): `N_C &= 520 + 1260 // &= 1780`

86. **MATH 12.80** (`math-cases-ch12-probability.json`) — A gym tracks no-shows by class type
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(N) &= \frac{840}{4000} // &= 0.21`
   - sample (solution_overview/two_line): `P(N) &= \frac{840}{4000} // &= 0.21`
   - sample (solution_overview/short_tail): `P(Y) &= \frac{2400}{4000} // &= 0.60`

87. **MATH 12.88** (`math-cases-ch12-probability.json`) — A hospital pharmacy reviewed medication orders processed across two shifts last
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `T &= 9600 + 3200 // &= 12800`
   - sample (solution_overview/two_line): `T &= 9600 + 3200 // &= 12800`
   - sample (solution_overview/short_tail): `E_{\text{total}} &= 144 + 96 // &= 240`

88. **MATH 12.90** (`math-cases-ch12-probability.json`) — Two departments at a university submit final theses each spring
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 2400 + 3600 // &= 6000`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 2400 + 3600 // &= 6000`
   - sample (solution_overview/short_tail): `N_L &= 216 + 108 // &= 324`

89. **MATH 12.98** (`math-cases-ch12-probability.json`) — A software team reviewed a backlog of bug reports filed under two priority
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N_{\text{total}} &= 2000 + 8000 // &= 10000`
   - sample (solution_overview/two_line): `N_{\text{total}} &= 2000 + 8000 // &= 10000`
   - sample (solution_overview/short_tail): `N_V &= 1700 + 6000 // &= 7700`

90. **MATH 12.102** (`math-cases-ch12-probability.json`) — Two fair six-sided dice are rolled once
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `N(E) &= 1 + 3 + 5 + 5 + 3 + 1 // &= 18`
   - sample (solution_overview/two_line): `N(E) &= 1 + 3 + 5 + 5 + 3 + 1 // &= 18`
   - sample (solution_overview/short_tail): `N(O) &= 2 + 4 + 6 + 4 + 2 // &= 18`

91. **MATH 12.106** (`math-cases-ch12-probability.json`) — A factory quality-control process depends on a chain of three stages
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= 1 - 0.02 // &= 0.98`
   - sample (solution_overview/short_tail): `&= 1 - 0.05 // &= 0.95`
   - sample (solution_overview/short_tail): `&= 1 - 0.10 // &= 0.90`

92. **MATH 12.113** (`math-cases-ch12-probability.json`) — Dice Combinatorics
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `P(X = k) &= P(X \le k) - P(X \le k-1) // &= \frac{k^2}{36} - \frac{(k-1)^2}{36}`
   - sample (solution_overview/short_tail): `P(X = k) &= \frac{k^2 - (k^2 - 2k + 1)}{36} // &= \frac{2k - 1}{36}`
   - sample (solution_overview/two_line): `P(X = k) &= \frac{k^2 - (k^2 - 2k + 1)}{36} // &= \frac{2k - 1}{36}`

93. **MATH 12.122** (`math-cases-ch12-probability.json`) — Find the Missing Value
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `x_1 &= 0,\qquad P(X = 0) // &= 0.5`
   - sample (solution_overview/two_line): `x_1 &= 0,\qquad P(X = 0) // &= 0.5`
   - sample (solution_overview/short_tail): `x_2 &= 10,\qquad P(X = 10) // &= 0.3`

94. **MATH 12.123** (`math-cases-ch12-probability.json`) — A Fair Six-Sided Die
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `E[X] &= \frac{1+2+3+4+5+6}{6} // &= \frac{21}{6}`
   - sample (solution_overview/two_line): `E[X] &= \frac{1+2+3+4+5+6}{6} // &= \frac{21}{6}`
   - sample (solution_overview/short_tail): `\mu &= E[X] // &= 3.5`

95. **MATH 12.136** (`math-cases-ch12-probability.json`) — An Ice Cream Shop
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(X = 1) + P(X = 2) + P(X = 3) + P(X = 4) &= 0.20 + 0.50 + 0.20 + 0.10 // &= 1.00`
   - sample (solution_overview/two_line): `P(X = 1) + P(X = 2) + P(X = 3) + P(X = 4) &= 0.20 + 0.50 + 0.20 + 0.10 // &= 1.00`

96. **MATH 12.142** (`math-cases-ch12-probability.json`) — A Hedged Investment Pair
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\mathrm{SD}(X) &= \sqrt{16} // &= 4`
   - sample (solution_overview/two_line): `\mathrm{SD}(X) &= \sqrt{16} // &= 4`
   - sample (solution_overview/short_tail): `\mathrm{SD}(Y) &= \sqrt{9} // &= 3`

97. **MATH 12.148** (`math-cases-ch12-probability.json`) — An Ice Cream Shop (Two Independent Customers)
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\mathrm{Var}(X) &= 5.60 - 4.84 // &= 0.76`
   - sample (solution_overview/two_line): `\mathrm{Var}(X) &= 5.60 - 4.84 // &= 0.76`

98. **MATH 12.150** (`math-cases-ch12-probability.json`) — A Trivia Quiz (Comparing Two Formats)
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= 0.30, P(X_A = 4) // &= 0.10`
   - sample (solution_overview/short_tail): `&= 0.30, P(X_B = 4) // &= 0.20`
   - sample (solution_overview/two_line): `\mathrm{Var}(X_A) &= E[X_A^2] - (E[X_A])^2 // &= 5.90 - (2.20)^2`

99. **MATH 12.154** (`math-cases-ch12-probability.json`) — Contaminated Drug Batches
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(C) &= 0.0060 + 0.0028 + 0.0030 // &= 0.0118`
   - sample (solution_overview/two_line): `P(C) &= 0.0060 + 0.0028 + 0.0030 // &= 0.0118`

100. **MATH 12.165** (`math-cases-ch12-probability.json`) — Golden Gumballs by Machine
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= P(M_4) // &= \frac{1}{4}`
   - sample (solution_overview/short_tail): `P(G) &= 0.0625 + 0.0125 + 0.125 + 0.03125 // &= 0.23125`
   - sample (solution_overview/two_line): `P(G) &= 0.0625 + 0.0125 + 0.125 + 0.03125 // &= 0.23125`

101. **MATH 12.167** (`math-cases-ch12-probability.json`) — Scholarships by Admissions Office
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(S \cap O_1) &= 0.25 \cdot \frac{1}{4} // &= 0.0625`
   - sample (solution_overview/two_line): `P(S \cap O_1) &= 0.25 \cdot \frac{1}{4} // &= 0.0625`
   - sample (solution_overview/short_tail): `P(S \cap O_2) &= 0.125 \cdot \frac{1}{4} // &= 0.03125`

102. **MATH 12.171** (`math-cases-ch12-probability.json`) — Lost Packages by Warehouse
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(L) &= 0.0625 + 0.02 + 0.0625 + 0.03125 // &= 0.17625`
   - sample (solution_overview/two_line): `P(L) &= 0.0625 + 0.02 + 0.0625 + 0.03125 // &= 0.17625`

103. **MATH 12.183** (`math-cases-ch12-probability.json`) — Two Days Without a Crane Sighting
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(\neg S \mid H = \text{Wetland}) &= 1 - 0.20 // &= 0.80`
   - sample (solution_overview/two_line): `P(\neg S \mid H = \text{Wetland}) &= 1 - 0.20 // &= 0.80`
   - sample (solution_overview/short_tail): `P(E \mid H = \text{Wetland}) &= (0.80)^2 // &= 0.64`

104. **MATH 12.187** (`math-cases-ch12-probability.json`) — A Positive Test in a Deer Population
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(T^+ \mid S_A) &= 0.018 + 0.0392 // &= 0.0572`
   - sample (solution_overview/two_line): `P(T^+ \mid S_A) &= 0.018 + 0.0392 // &= 0.0572`
   - sample (solution_overview/short_tail): `P(T^+ \mid S_B) &= 0.054 + 0.0376 // &= 0.0916`

105. **MATH 12.188** (`math-cases-ch12-probability.json`) — Wildfires That Escaped Containment
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(E) &= \frac{2}{10} // &= 0.20`
   - sample (solution_overview/two_line): `P(E) &= \frac{2}{10} // &= 0.20`
   - sample (solution_overview/short_tail): `P(L) &= \frac{3}{10} // &= 0.30`

106. **MATH 12.189** (`math-cases-ch12-probability.json`) — Tagged Whales in Three Feeding Grounds
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(N) &= \frac{9}{20} // &= 0.45`
   - sample (solution_overview/two_line): `P(N) &= \frac{9}{20} // &= 0.45`
   - sample (solution_overview/short_tail): `P(M) &= \frac{7}{20} // &= 0.35`

107. **MATH 12.191** (`math-cases-ch12-probability.json`) — A Lake Trout Across Three Ice-Fishing Zones
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(N) &= \frac{5}{20} // &= 0.25`
   - sample (solution_overview/two_line): `P(N) &= \frac{5}{20} // &= 0.25`
   - sample (solution_overview/short_tail): `P(M) &= \frac{9}{20} // &= 0.45`

108. **MATH 12.192** (`math-cases-ch12-probability.json`) — Mildew Across Four Vineyard Blocks
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(A) &= \frac{4}{20} // &= 0.20`
   - sample (solution_overview/two_line): `P(A) &= \frac{4}{20} // &= 0.20`
   - sample (solution_overview/short_tail): `P(B) &= \frac{6}{20} // &= 0.30`

109. **MATH 12.197** (`math-cases-ch12-probability.json`) — Aircraft Repairs Across Two Fleets
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P(F) &= \frac{50}{90} // &= \frac{5}{9}`
   - sample (solution_overview/two_line): `P(F) &= \frac{50}{90} // &= \frac{5}{9}`
   - sample (solution_overview/short_tail): `P(A) &= \frac{40}{90} // &= \frac{4}{9}`

110. **MATH 13.26** (`math-cases-ch13-binomial.json`) — Advanced Factory Inspection
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `k_A &= \lceil 18.7 \rceil // &= 19`
   - sample (solution_overview/two_line): `k_A &= \lceil 18.7 \rceil // &= 19`
   - sample (solution_overview/short_tail): `k_B &= \lceil 18 \rceil // &= 18`

111. **MATH 13.36** (`math-cases-ch13-binomial.json`) — Low-Yield Factory Batches
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `k_A &= \lceil 14.79 \rceil // &= 15`
   - sample (solution_overview/two_line): `k_A &= \lceil 14.79 \rceil // &= 15`
   - sample (solution_overview/short_tail): `k_B &= \lceil 22.91 \rceil // &= 23`

112. **MATH 13.39** (`math-cases-ch13-binomial.json`) — Twenty-Three Trial Teams
   - fields: tactical[2]
   - reasons: orphan_eq_display
   - sample (tactical[2]/orphan): `= \binom{23}{8}(0.83)^{8}(0.17)^{15} \approx 3.1611 \times 10^{-7}`

113. **MATH 10.3.10** (`math-ch10-exp-log.json`) — Applied letters — GDP per capita force via logs
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\ln y(t) &= \ln(Y_0/N_0)+(g-p)t,\qquad k_y = g-p // &= 0.02`
   - sample (solution_overview/two_line): `\ln y(t) &= \ln(Y_0/N_0)+(g-p)t,\qquad k_y = g-p // &= 0.02`

114. **MATH 10.3.13** (`math-ch10-exp-log.json`) — Table — elasticity schedule beside an exponential stock
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `Q &= e^{5-1.4\ln 3}\approx31.8789,\qquad |\varepsilon| = b // &= 1.4`
   - sample (solution_overview/two_line): `Q &= e^{5-1.4\ln 3}\approx31.8789,\qquad |\varepsilon| = b // &= 1.4`

115. **MATH 10.3.30** (`math-ch10-exp-log.json`) — Applied letters — nested log link between GDP and population forces
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `k_y &= g-p // &= 0.02`
   - sample (solution_overview/two_line): `k_y &= g-p // &= 0.02`

116. **MATH 11.187** (`math-ch11-exam.json`) — App studio: square-root learning cost
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `C(Q) &= 80\sqrt{Q} // &= 80Q^{\frac{1}{2}}\qquad(Q>0)`
   - sample (solution_overview/two_line): `C^{\prime}(Q) &= MC(Q) // &= \dfrac{40}{\sqrt{Q}}`
   - sample (solution_overview/two_line): `AC(Q) &= \dfrac{C(Q)}{Q} // &= \dfrac{80}{\sqrt{Q}}`

117. **MATH 11.191** (`math-ch11-exam.json`) — Two workshops: compare P′ graphs and levels
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `P_A(0) &= P_B(0) // &= 0`
   - sample (solution_overview/two_line): `P_A(0) &= P_B(0) // &= 0`

118. **MATH 13.78** (`math-ch13-exam.json`) — Community Clinic Screening
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{3}{3+17} // &= 0.15`
   - sample (solution_overview/two_line): `p &= \dfrac{3}{3+17} // &= 0.15`

119. **MATH 13.83** (`math-ch13-exam.json`) — Bike-Share Dock Sensors
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{1}{1+4} // &= 0.2`
   - sample (solution_overview/two_line): `p &= \dfrac{1}{1+4} // &= 0.2`

120. **MATH 13.88** (`math-ch13-exam.json`) — Campus Bus On-Time Arrivals
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{4}{4+1} // &= 0.8`
   - sample (solution_overview/two_line): `p &= \dfrac{4}{4+1} // &= 0.8`

121. **MATH 13.94** (`math-ch13-exam.json`) — Airport Lounge Wi-Fi Sessions
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{4}{4+1} // &= 0.8`
   - sample (solution_overview/two_line): `p &= \dfrac{4}{4+1} // &= 0.8`

122. **MATH 13.99** (`math-ch13-exam.json`) — App Push Notification Opens
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{3}{3+7} // &= 0.3`
   - sample (solution_overview/two_line): `p &= \dfrac{3}{3+7} // &= 0.3`

123. **MATH 13.104** (`math-ch13-exam.json`) — Ski-Lift Gate Passes
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{9}{9+1} // &= 0.9`
   - sample (solution_overview/two_line): `p &= \dfrac{9}{9+1} // &= 0.9`

124. **MATH 13.109** (`math-ch13-exam.json`) — Blood-Donation Appointment Shows
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{4}{4+1} // &= 0.8`
   - sample (solution_overview/two_line): `p &= \dfrac{4}{4+1} // &= 0.8`

125. **MATH 13.114** (`math-ch13-exam.json`) — Archaeology Dig Artifact Finds
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `p &= \dfrac{1}{1+3} // &= 0.25`
   - sample (solution_overview/two_line): `p &= \dfrac{1}{1+3} // &= 0.25`

126. **MATH 11.135** (`math-ch3-exam.json`) — Exam-style tasks - 12
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `rt &= 0.043 \times 6 // &= 0.258`
   - sample (solution_overview/two_line): `rt &= 0.043 \times 6 // &= 0.258`

127. **MATH 11.139** (`math-ch3-exam.json`) — Exam-style tasks - 16
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `PMT &= P \cdot \frac{i}{1-(1+i)^{-n}} // &= 320,000 \cdot \frac{0.0045}{1-(1.0045)^{-240}}`
   - sample (solution_overview/two_line): `I_1 &= 320,000 \times 0.0045 // &= 1,440.00`
   - sample (solution_overview/short_tail): `\mathrm{prin}_1 &= 2,183.21 - 1,440.00 // &= 743.21`

128. **MATH 11.142** (`math-ch3-exam.json`) — Exam-style tasks - 19
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `-rt &= -0.062 \times 5 // &= -0.31`
   - sample (solution_overview/two_line): `-rt &= -0.062 \times 5 // &= -0.31`
   - sample (solution_overview/two_line): `\frac{A}{P} &= e^{-0.31} \approx 0.7334 // &= 73.34\%`

129. **MATH 4.40** (`math-ch4-cases.json`) — Parameterized Two-Leg Transport Schedule
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `t &= \frac{300 - 12k}{10 - k} // &= \frac{12(25 - k)}{10 - k}`
   - sample (solution_overview/two_line): `t &= \frac{300 - 12k}{10 - k} // &= \frac{12(25 - k)}{10 - k}`

130. **MATH 4.51** (`math-ch4-cases.json`) — Parametric Linear Capacity Model
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `x &= \frac{3(k + 2)}{(k - 2)(k + 2)} // &= \frac{3}{k - 2}`
   - sample (solution_overview/two_line): `x &= \frac{3(k + 2)}{(k - 2)(k + 2)} // &= \frac{3}{k - 2}`

131. **MATH 4.52** (`math-ch4-cases.json`) — Executive Compensation Adjustment Model
   - fields: solution_overview, tactical[2]
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `\left(1 + \frac{p}{100}\right)\left(1 - \frac{d}{100}\right) &= \frac{(100 + p)(100 - d)}{ // &= 1 + \frac{p - d - \frac{pd}{100}}{100}`
   - sample (tactical[2]/short_tail): `\left(1 + \frac{p}{100}\right)\left(1 - \frac{d}{100}\right) &= \left(\frac{100 + p}{100}\ // &= 1`
   - sample (tactical[2]/two_line): `\left(1 + \frac{p}{100}\right)\left(1 - \frac{d}{100}\right) &= \left(\frac{100 + p}{100}\ // &= 1`

132. **MATH 4.58** (`math-ch4-cases.json`) — Parametric Linear Equilibrium Model
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `x &= \frac{4 - 3a}{a - 3} // &= \frac{3a - 4}{3 - a}`
   - sample (solution_overview/two_line): `x &= \frac{4 - 3a}{a - 3} // &= \frac{3a - 4}{3 - a}`

133. **MATH 4.103** (`math-ch4-cases.json`) — Break-Even Analysis with Irrational Roots
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= 144 - 56 // &= 88`
   - sample (solution_overview/two_line): `x &= \frac{12 \pm \sqrt{88}}{4} // &= 3 \pm \frac{\sqrt{22}}{2}`
   - sample (solution_overview/short_tail): `x_1 + x_2 &= -\frac{-12}{2} // &= 6`

134. **MATH 4.104** (`math-ch4-cases.json`) — Parametric Quadratic Family and Root Shifts
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `c &= k^2 - 4 // &= 0`
   - sample (solution_overview/two_line): `c &= k^2 - 4 // &= 0`

135. **MATH 4.109** (`math-ch4-cases.json`) — Reconstructing Monic Quadratics and Root Transformations
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\alpha^2 + \beta^2 &= 6^2 - 2(4) // &= 28`
   - sample (solution_overview/two_line): `\alpha^2 + \beta^2 &= 6^2 - 2(4) // &= 28`

136. **MATH 4.111** (`math-ch4-cases.json`) — Break-Even Output and Factorable Higher-Degree Forms
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\Pi(2) &= 16 - 40 + 26 - 2 // &= 0`
   - sample (solution_overview/two_line): `\Pi(2) &= 16 - 40 + 26 - 2 // &= 0`
   - sample (solution_overview/short_tail): `\Pi(x) &= (x - 2)(2x^2 - 6x + 1) // &= 0`

137. **MATH 4.154** (`math-ch4-cases.json`) — Cube-Root Radical Equation Analysis
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `u^3 - v^3 &= (x + 6) - (x - 1) // &= 7`
   - sample (solution_overview/two_line): `u^3 - v^3 &= (x + 6) - (x - 1) // &= 7`

138. **MATH 4.176** (`math-ch4-cases.json`) — A substance losing five percent a year
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `T_{1/2} &= \frac{\ln(0.5)}{\ln(0.95)} // &= -\frac{\ln(2)}{\ln(0.95)}`
   - sample (solution_overview/two_line): `T_{1/2} &= \frac{\ln(0.5)}{\ln(0.95)} // &= -\frac{\ln(2)}{\ln(0.95)}`

139. **MATH 4.205** (`math-ch4-cases.json`) — Exam-style tasks - 12
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `q &= \dfrac{4+10}{2} // &= 7`
   - sample (solution_overview/two_line): `q &= \dfrac{4+10}{2} // &= 7`
   - sample (solution_overview/short_tail): `P(7) &= -(7-4)(7-10) // &= 9`

140. **MATH 4.207** (`math-ch4-cases.json`) — Exam-style tasks - 14
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= 200\cdot 1 // &= 200`
   - sample (solution_overview/short_tail): `2^{(t+3)/3}/2^{t/3} &= 2^{1} // &= 2`
   - sample (solution_overview/two_line): `2^{(t+3)/3}/2^{t/3} &= 2^{1} // &= 2`

141. **MATH 4.209** (`math-ch4-cases.json`) — Exam-style tasks - 16
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `q &= \dfrac{5+11}{2} // &= 8`
   - sample (solution_overview/two_line): `q &= \dfrac{5+11}{2} // &= 8`
   - sample (solution_overview/short_tail): `P(8) &= -(8-5)(8-11) // &= 9`

142. **MATH 4.211** (`math-ch4-cases.json`) — Exam-style tasks - 18
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `&= 250\cdot 1 // &= 250`
   - sample (solution_overview/short_tail): `2^{(t+3)/3}/2^{t/3} &= 2^{1} // &= 2`
   - sample (solution_overview/two_line): `2^{(t+3)/3}/2^{t/3} &= 2^{1} // &= 2`

143. **MATH 4.213** (`math-ch4-cases.json`) — Exam-style tasks - 20
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `q &= \dfrac{6+12}{2} // &= 9`
   - sample (solution_overview/two_line): `q &= \dfrac{6+12}{2} // &= 9`
   - sample (solution_overview/short_tail): `P(9) &= -(9-6)(9-12) // &= 9`

144. **MATH 5.78** (`math-ch5-exam.json`) — Exam-style tasks - 18
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `y &= 19 - 16 // &= 3`
   - sample (solution_overview/two_line): `y &= 19 - 16 // &= 3`

145. **MATH 7.56** (`math-ch7-linear-quadratic.json`) — A Water Tank Draining at a Steady Rate
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `-8x+200 &= 0\Rightarrow x // &= 25`
   - sample (solution_overview/two_line): `-8x+200 &= 0\Rightarrow x // &= 25`

146. **MATH 7.57** (`math-ch7-linear-quadratic.json`) — Where a Rising Line Crosses the Axes
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `4x+10 &= 0\Rightarrow x // &= -\frac{5}{2}`
   - sample (solution_overview/two_line): `4x+10 &= 0\Rightarrow x // &= -\frac{5}{2}`

147. **MATH 7.59** (`math-ch7-linear-quadratic.json`) — A Gentle Slope in Fraction Form
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\frac{1}{3}x-2 &= 0\Rightarrow x // &= 6`
   - sample (solution_overview/two_line): `\frac{1}{3}x-2 &= 0\Rightarrow x // &= 6`

148. **MATH 7.68** (`math-ch7-linear-quadratic.json`) — A Line Fixed by a Slope and One Point
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `-\frac{1}{2}x+3 &= 0\Rightarrow x // &= 6`
   - sample (solution_overview/two_line): `-\frac{1}{2}x+3 &= 0\Rightarrow x // &= 6`

149. **MATH 7.75** (`math-ch7-linear-quadratic.json`) — A Parabola Pinned by Its Vertex and One Point
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `0 &= a\left(1-3\right)^{2}-8\Rightarrow a // &= 2`
   - sample (solution_overview/two_line): `0 &= a\left(1-3\right)^{2}-8\Rightarrow a // &= 2`

150. **MATH 7.84** (`math-ch7-linear-quadratic.json`) — Sliding a Line Until It Touches
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `x^{2}-2x-5-(x+c) &= x^{2}-3x-(5+c) // &= 0`
   - sample (solution_overview/two_line): `x^{2}-2x-5-(x+c) &= x^{2}-3x-(5+c) // &= 0`
   - sample (solution_overview/two_line): `\Delta(c) &= 9+4(5+c) // &= 29+4c`

151. **MATH 7.85** (`math-ch7-linear-quadratic.json`) — Choosing the Leading Coefficient
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `ax^{2}+2x-3-(x+1) &= ax^{2}+x-4 // &= 0`
   - sample (solution_overview/two_line): `ax^{2}+2x-3-(x+1) &= ax^{2}+x-4 // &= 0`

152. **MATH 7.94** (`math-ch7-linear-quadratic.json`) — A Pencil of Lines and Two Tangents
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `f_{t}(1) &= t\cdot 0+2 // &= 2`
   - sample (solution_overview/two_line): `f_{t}(1) &= t\cdot 0+2 // &= 2`
   - sample (solution_overview/short_tail): `x^{2}-4x+6-t(x-1)-2 &= x^{2}-(4+t)x+(4+t) // &= 0`

153. **MATH 7.95** (`math-ch7-linear-quadratic.json`) — Sliding the Parabola Sideways
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `(x-r)^{2}-4-(2x-1) &= x^{2}-(2r+2)x+(r^{2}-3) // &= 0`
   - sample (solution_overview/two_line): `(x-r)^{2}-4-(2x-1) &= x^{2}-(2r+2)x+(r^{2}-3) // &= 0`
   - sample (solution_overview/two_line): `\Delta(r) &= (2r+2)^{2}-4(r^{2}-3) // &= 8r+16`

154. **MATH 7.96** (`math-ch7-linear-quadratic.json`) — Rebuild from a Vertex and a Point
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `f(x) &= -3x+5,\qquad g(x) = 2(x-2)^{2}-8 // &= 2x^{2}-8x`
   - sample (solution_overview/two_line): `f(x) &= -3x+3+2 // &= -3x+5`
   - sample (solution_overview/short_tail): `f(1) &= -3+5 // &= 2`

155. **MATH 7.E02** (`math-ch7-mixed-exam.json`) — Sampled heights — interpolating parabola
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `\mathrm{ver} &= \left(2,-1\right),\qquad s_0 = s_4 // &= 3`
   - sample (solution_overview/two_line): `\mathrm{ver} &= \left(2,-1\right),\qquad s_0 = s_4 // &= 3`

156. **MATH 7.E08** (`math-ch7-mixed-exam.json`) — Scaled product — Vieta with a leading $2$
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `g\left(\frac{5}{2}\right) &= 2\cdot\frac{25}{4}-10\cdot\frac{5}{2}+8 // &= -\frac{9}{2}`
   - sample (solution_overview/two_line): `g\left(\frac{5}{2}\right) &= 2\cdot\frac{25}{4}-10\cdot\frac{5}{2}+8 // &= -\frac{9}{2}`

157. **MATH 7.E12** (`math-ch7-mixed-exam.json`) — Arithmetic samples — why a square cannot fit
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `y(5) &= 3\cdot 5-1 // &= 14`
   - sample (solution_overview/two_line): `y(5) &= 3\cdot 5-1 // &= 14`

158. **MATH 7.E15** (`math-ch7-mixed-exam.json`) — Vertical shift family — root count by vertex height
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `\Delta(s) &= 16-4s // &= 4(4-s)`
   - sample (solution_overview/short_tail): `\Delta // &= -4`

159. **MATH 7.E22** (`math-ch7-mixed-exam.json`) — Quadratic samples — false second-gap $4$
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `h(x) &= x^{2}-2x // &= x(x-2)`
   - sample (solution_overview/short_tail): `h(6) &= 36-12 // &= 24`
   - sample (solution_overview/two_line): `h(6) &= 36-12 // &= 24`

160. **MATH 7.E24** (`math-ch7-mixed-exam.json`) — Factor the difference, then the vertex of $g$
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `g(x)-f(x) &= x^{2}-3x // &= x(x-3)`
   - sample (solution_overview/short_tail): `x &= -\frac{1}{2},\qquad g(0) = f(0) // &= -1`
   - sample (solution_overview/two_line): `x &= -\frac{1}{2},\qquad g(0) = f(0) // &= -1`

161. **MATH 7.E25** (`math-ch7-mixed-exam.json`) — Shared intercept, sliding second meeting
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/two_line): `g_a(x)-3 &= ax^{2}-4x // &= x(ax-4)`
   - sample (solution_overview/short_tail): `x // &= 2`
   - sample (solution_overview/short_tail): `x &= \frac{4}{2a} // &= \frac{2}{a}`

162. **MATH 7.E29** (`math-ch7-mixed-exam.json`) — Table versus two candidate formulas
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail, aligned_two_line_cont
   - sample (solution_overview/short_tail): `q(5) &= (3)^{2}+1 // &= 10`
   - sample (solution_overview/two_line): `q(5) &= (3)^{2}+1 // &= 10`

163. **MATH 12.03** (`math-cases-ch12-probability.json`) — Restricted Seating
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{P(\text{girls together})}{P(\text{alternating})} = \frac{\frac{1}{7}}{\frac{1}{35}}`

164. **MATH 12.40** (`math-cases-ch12-probability.json`) — Combinatorial Probability 40
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{P(\text{2 women, 2 men})}{P(\text{entirely men})} = \frac{\frac{210}{495}}{\frac{35}{495}}`

165. **MATH 12.42** (`math-cases-ch12-probability.json`) — Combinatorial Probability 42
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{P(2 \text{ red}, 2 \text{ blue})}{P(\text{all blue})} = \frac{\frac{1260}{3060}}{\frac{70}{3060}}`

166. **MATH 12.66** (`math-cases-ch12-probability.json`) — Newspaper and TV news survey
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 15 + 10 // &= 25`
   - sample (solution_overview/short_tail): `&= 20 + 10 // &= 30`
   - sample (solution_overview/short_tail): `&= 15 + 10 + 20 // &= 45`

167. **MATH 12.87** (`math-cases-ch12-probability.json`) — During Q3, engineers at a software company logged every user session across two
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{12{,}500}{30{,}000} // &= \frac{5}{12}`
   - sample (solution_overview/short_tail): `&= \frac{17{,}500}{30{,}000} // &= \frac{7}{12}`

168. **MATH 12.105** (`math-cases-ch12-probability.json`) — 200 people take a diagnostic test for a disease
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 18 + 2 // &= 20`
   - sample (solution_overview/short_tail): `&= 15 + 165 // &= 180`
   - sample (solution_overview/short_tail): `&= 18 + 15 // &= 33`

169. **MATH 12.107** (`math-cases-ch12-probability.json`) — A bank reviewed a year of loan applications filed at two types of branches
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= \frac{14{,}000}{20{,}000} // &= 0.70`
   - sample (solution_overview/short_tail): `&= \frac{6{,}000}{20{,}000} // &= 0.30`

170. **MATH 12.162** (`math-cases-ch12-probability.json`) — Grade Appeals by Professor
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 0.03 \cdot 0.50 // &= 0.0150`
   - sample (solution_overview/short_tail): `&= 0.05 \cdot 0.30 // &= 0.0150`
   - sample (solution_overview/short_tail): `&= 0.07 \cdot 0.20 // &= 0.0140`

171. **MATH 12.163** (`math-cases-ch12-probability.json`) — Priority Letters in Four Bins
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 0.3 \times \frac{1}{4} // &= 0.075`
   - sample (solution_overview/short_tail): `&= 0.125 \times \frac{1}{4} // &= 0.03125`
   - sample (solution_overview/short_tail): `&= 0.25 \times \frac{1}{4} // &= 0.0625`

172. **MATH 12.168** (`math-cases-ch12-probability.json`) — Abnormal Results by Test Machine
   - fields: tactical[3]
   - reasons: nested_frac_display
   - sample (tactical[3]/nested): `\frac{P(M_1|A)}{P(M_4|A)} = \frac{\frac{0.125}{0.325}}{\frac{0.0125}{0.325}} = \frac{0.125}{0.0125} = 10`

173. **MATH 12.172** (`math-cases-ch12-probability.json`) — Health Violations by Restaurant
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{P(L_2 \mid V)}{P(L_4 \mid V)} = \frac{\frac{P(L_2) P(V \mid L_2)}{P(V)}}{\frac{P(L_4) P(V \mid L_4)}{P(V)}} = \frac{P(L_2) P(V \mid L_`

174. **MATH 12.175** (`math-cases-ch12-probability.json`) — Injuries by Gym Location
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{P(L_4 \mid I)}{P(L_1 \mid I)} = \frac{\frac{0.0625}{0.1375}}{\frac{0.0125}{0.1375}}`

175. **MATH 12.177** (`math-cases-ch12-probability.json`) — Theft Reports by Parking Garage
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{P(G_1 \mid T)}{P(G_2 \mid T)} = \frac{\frac{0.125}{0.221875}}{\frac{0.015625}{0.221875}} = \frac{0.125}{0.015625}`

176. **MATH 12.186** (`math-cases-ch12-probability.json`) — Two Clues and Three Suspects
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 0.70 \cdot 0.60 // &= 0.42`
   - sample (solution_overview/short_tail): `&= 0.20 \cdot 0.80 // &= 0.16`
   - sample (solution_overview/short_tail): `&= 0.55 \cdot 0.40 // &= 0.22`

177. **MATH 12.194** (`math-cases-ch12-probability.json`) — Defective Phones from Two Suppliers
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 1,800 \cdot 0.05 // &= 90`
   - sample (solution_overview/short_tail): `&= 1,200 \cdot 0.09 // &= 108`
   - sample (solution_overview/short_tail): `&= 90 + 108 // &= 198`

178. **MATH 10.2.8** (`math-ch10-exp-log.json`) — Text-dense compound domain for a quotient argument
   - fields: tactical[2]
   - reasons: nested_frac_display
   - sample (tactical[2]/nested): `\frac{\frac{a+b}{2}-a}{b-\frac{a+b}{2}} = \frac{(b-a)/2}{(b-a)/2} = 1`

179. **MATH 10.2.19** (`math-ch10-exp-log.json`) — Domain tangle: logarithm of a square root expression
   - fields: tactical[2]
   - reasons: nested_frac_display
   - sample (tactical[2]/nested): `\frac{\frac{c+d}{2}-c}{d-\frac{c+d}{2}} = 1`

180. **MATH 10.3.15** (`math-ch10-exp-log.json`) — Parametric — force family pinned by a log constraint
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= e^{-\ln 5} // &= \frac{1}{5}`

181. **MATH 10.3.21** (`math-ch10-exp-log.json`) — Hybrid — piecewise stock force beside constant-elasticity demand
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 0.05\cdot4+0.02\cdot6 // &= 0.32`

182. **MATH 10.3.26** (`math-ch10-exp-log.json`) — Piecewise — true log-average versus arithmetic mean of forces
   - fields: solution_overview
   - reasons: aligned_short_numeric_tail
   - sample (solution_overview/short_tail): `&= 0.07\cdot2+0.03\cdot6 // &= 0.32`

183. **MATH 2.39** (`math-ch2-cases.json`) — Cancelled factor kept as the remainder
   - fields: tactical[0]
   - reasons: nested_frac_display
   - sample (tactical[0]/nested): `\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}=\dfrac{8a^2b}{4x^2-16}\cdot\dfrac{2x+4}{4ab}`

184. **MATH 2.43** (`math-ch2-cases.json`) — Test point after a difference-of-squares cancel
   - fields: tactical[3]
   - reasons: nested_frac_display
   - sample (tactical[3]/nested): `\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}=\dfrac{8p^2b}{4x^2-16}\cdot\dfrac{2x+4}{4pb}`

185. **MATH 2.47** (`math-ch2-cases.json`) — Difference of reciprocals over reciprocal squares
   - fields: tactical[3]
   - reasons: nested_frac_display
   - sample (tactical[3]/nested): `\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}`
   - sample (tactical[3]/nested): `\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}=\dfrac{x-y}{x+y}`

186. **MATH 2.60** (`math-ch2-cases.json`) — Three unit fractions with a false linear numerator
   - fields: tactical[0]
   - reasons: nested_frac_display
   - sample (tactical[0]/nested): `\dfrac{\frac1a-\frac1b}{\frac1a+\frac1b}`
   - sample (tactical[0]/nested): `\dfrac{\frac1a-\frac1b}{\frac1a+\frac1b}=\dfrac{b-a}{b+a}`

187. **MATH 2.61** (`math-ch2-cases.json`) — Cancelled linear factor kept in the denominator
   - fields: tactical[0], tactical[2]
   - reasons: nested_frac_display
   - sample (tactical[0]/nested): `\dfrac{\frac1a-\frac1b}{\frac1a+\frac1b}`
   - sample (tactical[0]/nested): `\dfrac{\frac1a-\frac1b}{\frac1a+\frac1b}=\dfrac{a-b}{a+b}`
   - sample (tactical[2]/nested): `\dfrac{\dfrac{x}{2}}{\dfrac{x}{4}}`

188. **MATH 2.64** (`math-ch2-cases.json`) — Square of a swapped-ratio sum beside a cubic
   - fields: tactical[2]
   - reasons: nested_frac_display
   - sample (tactical[2]/nested): `\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}`

189. **MATH 2.143** (`math-ch2-cases.json`) — Exam-style tasks - 7
   - fields: tactical[0]
   - reasons: nested_frac_display
   - sample (tactical[0]/nested): `\dfrac{a^{-1}-b^{-1}}{a^{-1}+b^{-1}}=\dfrac{\frac{1}{a}-\frac{1}{b}}{\frac{1}{a}+\frac{1}{b}}`
   - sample (tactical[0]/nested): `\dfrac{\frac{b-a}{ab}}{\frac{b+a}{ab}}`

190. **MATH 4.126** (`math-ch4-cases.json`) — Five separate rational equations, each with a hole
   - fields: tactical[0]
   - reasons: nested_frac_display
   - sample (tactical[0]/nested): `\frac{\frac{3}{2}}{\frac{3}{2} - 1} = \frac{\frac{3}{2}}{\frac{1}{2}} = 3`

191. **MATH 4.151** (`math-ch4-cases.json`) — Parametric Rational Equation Reducible to Linear
   - fields: tactical[3]
   - reasons: nested_frac_display
   - sample (tactical[3]/nested): `x = \frac{2\left(-\frac{1}{5}\right) + 7}{2 - \left(-\frac{1}{5}\right)} = \frac{\frac{33}{5}}{\frac{11}{5}} = 3`

192. **MATH 6.93** (`math-ch6-inequalities.json`) — Exam-style tasks - 5
   - fields: tactical[4]
   - reasons: nested_frac_display
   - sample (tactical[4]/nested): `\frac{1}{4}=\frac{\frac{x^{2}}{4} + 1}{x^{2} + 4}`
   - sample (tactical[4]/nested): `\frac{x}{x^{2} + 4}-\frac{\frac{x^{2}}{4} + 1}{x^{2} + 4}<0`

## MILD

1. **MATH 12.08** (`math-cases-ch12-probability.json`) — A Lottery Draw
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\text{Total outcomes} &= \binom{N}{k_{draw}} // &= \binom{49}{6}`

2. **MATH 12.16** (`math-cases-ch12-probability.json`) — A Birthday Coincidence
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\text{Total arrangements} &= D^N // &= 365^8`
   - sample (solution_overview/two_line): `\text{Number of ways for distinct birthdays} &= P(D, N) // &= D \times (D-1) \times \dots \times (D-N+1)`

3. **MATH 12.26** (`math-cases-ch12-probability.json`) — The Peer-Review Panel
   - fields: tactical[4]
   - reasons: aligned_two_line_cont
   - sample (tactical[4]/two_line): `P(X = 4) &= \frac{\binom{6}{4}\binom{8}{1}}{\binom{14}{5}} // &= \frac{\left(\frac{6 \times 5}{2 \times 1}\right)\left(8\right)}{2002} = \frac{15 \tim`

4. **MATH 12.31** (`math-cases-ch12-probability.json`) — The Harbour Charity Raffle
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\binom{40}{5} &= \frac{40!}{5!(40-5)!} // &= \frac{40 \times 39 \times 38 \times 37 \times 36}{5 \times 4 \times 3 \times 2 \times 1`

5. **MATH 12.38** (`math-cases-ch12-probability.json`) — The Twin Freshmen Exam Row
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\text{Total arrangements} &= N! // &= 10!`

6. **MATH 12.43** (`math-cases-ch12-probability.json`) — At a mid-size company, 65% of employees regularly use Software Tool A, and 45%
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P(\text{neither}) &= P((A \cup B)^c) // &= 1 - P(A \cup B)`
   - sample (solution_overview/two_line): `P(A \text{ only}) &= P(A \cap B^c) // &= P(A) - P(A \cap B)`

7. **MATH 12.74** (`math-cases-ch12-probability.json`) — A delivery service tracks on-time performance by package type
   - fields: solution_overview
   - reasons: aligned_multi_numeric
   - sample (solution_overview/multi): `P(E \cap L) &= \frac{\text{Number of Express packages d // &= \frac{40}{3000} // &= \frac{2}{150} // &= \frac{1}{75} \approx 0.0133`

8. **MATH 12.95** (`math-cases-ch12-probability.json`) — A mobile carrier sampled call quality across its two network types over a single day
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `N &= N_{4G} + N_{5G} // &= 60\,000 + 40\,000`
   - sample (solution_overview/two_line): `N_D &= N_{D,4G} + N_{D,5G} // &= 900 + 200`

9. **MATH 12.99** (`math-cases-ch12-probability.json`) — A university's admissions office reviewed a year of applications across three
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `N_{total} &= N_D + N_I + N_T // &= 12\,000 + 6\,000 + 2\,000`
   - sample (solution_overview/two_line): `R_{total} &= R_D + R_I + R_T // &= 1\,800 + 1\,200 + 100`

10. **MATH 12.118** (`math-cases-ch12-probability.json`) — A Call Center
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\mu &= E[X] // &= \lambda`
   - sample (solution_overview/two_line): `\sigma^2 &= \mathrm{Var}(X) // &= \lambda`

11. **MATH 12.119** (`math-cases-ch12-probability.json`) — Company Profit
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `E[R] &= \mu_R // &= 50,000 \text{ dollars}`
   - sample (solution_overview/two_line): `\mathrm{Var}(R) &= \sigma^2_R // &= 4,000,000 \text{ dollars}^2`

12. **MATH 12.120** (`math-cases-ch12-probability.json`) — An Investment Portfolio
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\sigma_A &= \sqrt{\sigma_A^2} // &= \sqrt{25}`
   - sample (solution_overview/two_line): `\sigma_B &= \sqrt{\sigma_B^2} // &= \sqrt{16}`

13. **MATH 12.126** (`math-cases-ch12-probability.json`) — Quality Inspection
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\mu &= E[X] // &= \sum_{x} x P(X = x)`

14. **MATH 12.151** (`math-cases-ch12-probability.json`) — A Streaming Royalty (Setting a Break-Even Fee)
   - fields: tactical[2]
   - reasons: aligned_two_line_cont
   - sample (tactical[2]/two_line): `\mathrm{Var}(Y) &= \mathrm{Var}(X - c) = \mathrm{Var}(X) // &= 32.25 \text{ cents}^2`

15. **MATH 12.193** (`math-cases-ch12-probability.json`) — Irregular Blankets from Two Makers
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P(M_A) &= \frac{3000}{5400} // &= \frac{5}{9} \approx 0.5556`
   - sample (solution_overview/two_line): `P(M_B) &= \frac{2400}{5400} // &= \frac{4}{9} \approx 0.4444`

16. **MATH 13.44** (`math-cases-ch13-binomial.json`) — Three-Component Device
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p &= 1-(1-p_1)(1-p_2)(1-p_3) // &= 1-(0.99969)(0.99953)(0.99978)`

17. **MATH 1.116** (`math-ch1-exam.json`) — Exam-style tasks - 8
   - fields: tactical[3]
   - reasons: aligned_two_line_cont
   - sample (tactical[3]/two_line): `p\rightarrow(q\vee r) &= F\Longleftrightarrow p // &= T\ \text{and}\ q\vee r = F`

18. **MATH 10.1.9** (`math-ch10-exp-log.json`) — Piecewise continuous force — switch at letter $T$
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P(T^{-}) &= P_0 e^{k_1 T} // &= P(T^{+})`

19. **MATH 10.1.10** (`math-ch10-exp-log.json`) — GDP per capita — force $g-p$ trap with letter rates
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `y(t) &= \frac{Y(t)}{N(t)} // &= \frac{Y_0}{N_0}e^{(g-p)t}`

20. **MATH 10.1.17** (`math-ch10-exp-log.json`) — Hybrid — integer doubling table meets continuous force $\ln 2$
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\frac{P(n+1)}{P(n)} &= 2 // &= e^{k}\implies k = \ln 2`

21. **MATH 10.1.20** (`math-ch10-exp-log.json`) — Unit trap — letter $M$ millions versus raw counts
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `H(t) &= 10^{6} M(t) // &= 10^{6} M_0 e^{kt}`

22. **MATH 10.1.32** (`math-ch10-exp-log.json`) — Recover discrete letter $r$ from a geometric table
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `1+r &= \frac{Q(1)}{Q(0)},\qquad k = \ln(1+r) // &= \ln\frac{Q(1)}{Q(0)}`

23. **MATH 10.2.20** (`math-ch10-exp-log.json`) — Richter-style letter magnitudes and ratio reasoning
   - fields: tactical[0], tactical[3]
   - reasons: aligned_two_line_cont
   - sample (tactical[0]/two_line): `\Delta &= M_{X}-M_{Y} // &= \log_{10}\!\left(\frac{A_{X}}{A_{0}}\right)-\log_{10}\!\left(\frac{A_{Y}}{A_{0}}\right)`
   - sample (tactical[3]/two_line): `\log_{10}\!\left(\frac{2A_{X}}{2A_{Y}}\right) &= \log_{10}\!\left(\frac{A_{X}}{A_{Y}}\righ // &= \Delta`

24. **MATH 10.2.44** (`math-ch10-exp-log.json`) — Parametric family $f_{b}(x)=\log_{b}(x)$ ranked by base
   - fields: tactical[2]
   - reasons: aligned_two_line_cont
   - sample (tactical[2]/two_line): `\frac{\partial}{\partial b}\log_{b}x &= \frac{\partial}{\partial b}\left(\frac{\ln x}{\ln  // &= -\frac{\ln x}{(\ln b)^{2}}\cdot\frac{1}{b}`

25. **MATH 10.3.2** (`math-ch10-exp-log.json`) — Graph — crossing populations and the log meeting clock
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `t^{*} &= \frac{\ln(B_0/A_0)}{k_A-k_B} // &= \frac{\ln 1.5}{0.02}\approx20.2733`

26. **MATH 10.3.3** (`math-ch10-exp-log.json`) — Table — recover continuous force, then log comparisons
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `k &= \frac{\ln(y(7)/y(2))}{5} // &= \frac{\ln(1027.22/800)}{5}\approx0.05`

27. **MATH 10.3.5** (`math-ch10-exp-log.json`) — Parametric — nested logs pinning an exponential stock
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\ln(\ln A) &= 0\implies\ln A // &= 1\implies A = e`
   - sample (solution_overview/two_line): `\ln k &= -\ln 2\implies k = e^{-\ln 2} // &= \tfrac12`

28. **MATH 10.3.6** (`math-ch10-exp-log.json`) — Piecewise — log hit before the kink, with a decaying tail
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `f(T) &= P_0 e^{k_1 T} // &= 500 e^{0.18}\approx598.61`

29. **MATH 10.3.9** (`math-ch10-exp-log.json`) — Rebuild — force from two observations, then multiple hitting clocks
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `k &= \frac{\ln(y(6)/y(0))}{6} // &= \frac{\ln(1436.66/1200)}{6}\approx0.03`

30. **MATH 10.3.14** (`math-ch10-exp-log.json`) — Symbolic — change-of-base logarithm inside a power equation
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\log_2(8) &= 3,\qquad 8^x = 2^5\implies x\log_2 8 // &= 5\implies x = \frac{5}{3}`

31. **MATH 10.3.19** (`math-ch10-exp-log.json`) — Rebuild — semi-log table forces and equal-ratio check
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `k &= \frac{\ln y(8)-\ln y(0)}{8} // &= \frac{\ln(716.66/500)}{8}\approx0.045`

32. **MATH 10.3.20** (`math-ch10-exp-log.json`) — Applied letters — two funds, log crossing, and who leads after
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `t^{*} &= \frac{\ln(B_0/A_0)}{\alpha-\beta} // &= \frac{\ln 1.5}{0.02}\approx20.2733>0`

33. **MATH 10.3.22** (`math-ch10-exp-log.json`) — Graph — semi-log straightness and three tempting misreads
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\ln y(t) &= \ln P_0+kt // &= \ln2000+0.02\,t`

34. **MATH 10.3.25** (`math-ch10-exp-log.json`) — Parametric — log domain side-conditions on an exponential stock
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\ln(A-1) &= \ln(e-1)\neq0,\qquad N(0) = A // &= e\neq1`

35. **MATH 10.3.27** (`math-ch10-exp-log.json`) — Nested — double-log constraints pinning level and force
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\ln(\ln A) &= \ln2\implies\ln A // &= 2\implies A = e^{2}`
   - sample (solution_overview/two_line): `\ln(\ln(1/k)) &= 0\implies\ln(1/k) // &= 1\implies k = e^{-1}`

36. **MATH 10.3.29** (`math-ch10-exp-log.json`) — Rebuild — two series, two forces, one future crossing
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `t^{*} &= \frac{\ln(B_0/A_0)}{k_A-k_B} // &= \frac{\ln 1.5}{0.02}\approx20.2733`

37. **MATH 11.161** (`math-ch11-exam.json`) — Carpentry workshop: revenue, cost, and build time
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(Q) &= -1.5Q^{2}+12Q+30 // &= -1.5(Q-10)(Q+2)`

38. **MATH 11.162** (`math-ch11-exam.json`) — Harbour café: drinks, cost, and staffing hours
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(Q) &= -Q^{2}+8Q+20 // &= -(Q-10)(Q+2)`

39. **MATH 11.164** (`math-ch11-exam.json`) — Market garden: labour, output, and wage
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\pi(L) &= 2(30L-L^{2})-12L-40 // &= 48L-2L^{2}-40`

40. **MATH 11.165** (`math-ch11-exam.json`) — Courier fleet: routes, cost, and a threshold
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(x) &= 40-3x // &= 0\implies x = \dfrac{40}{3}`

41. **MATH 11.166** (`math-ch11-exam.json`) — Gift-tube producer: volume, tax, and rival revenue
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `R^{\prime}(Q) &= 72-2Q // &= 0\implies Q = 36`

42. **MATH 11.167** (`math-ch11-exam.json`) — Bakery chain: demand, tax, and average cost
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(Q) &= 38-\dfrac{3}{2}Q // &= 0\implies Q = \dfrac{76}{3}`
   - sample (solution_overview/two_line): `P_{t}^{\prime}(Q) &= 34-\dfrac{3}{2}Q // &= 0\implies Q = \dfrac{68}{3}`

43. **MATH 11.169** (`math-ch11-exam.json`) — Furniture factory: a smooth production threshold
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(q) &= -q^{2}+8q+48 // &= -(q-12)(q+4)`

44. **MATH 11.171** (`math-ch11-exam.json`) — Greenhouse: two inputs and labour value
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\pi^{\prime}(L) &= \dfrac{120}{\sqrt{L}}-30 // &= 0\implies L = 16`

45. **MATH 11.172** (`math-ch11-exam.json`) — Solar maintenance: output and a smooth service rule
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\pi(m) &= 0.5(100m-2m^{2})-8m-50 // &= 42m-m^{2}-50`
   - sample (solution_overview/two_line): `\pi^{\prime}(m) &= 42-2m // &= 0\implies m = 21`

46. **MATH 11.173** (`math-ch11-exam.json`) — Retail launch: price elasticity and a tax
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `R^{\prime}(p) &= 200-10p // &= 0\implies p = 20`
   - sample (solution_overview/two_line): `P^{\prime}(Q) &= 35-0.6Q // &= 0\implies Q = \dfrac{175}{3}\approx 58.3`

47. **MATH 11.174** (`math-ch11-exam.json`) — Shipping line: capacity, cost, and a smooth loading rule
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(x) &= 126+12x-1.5x^{2} // &= -1.5(x-14)(x+6)`

48. **MATH 11.177** (`math-ch11-exam.json`) — Riverside market: three-sided stall enclosure
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `A(x) &= x(120-2x) // &= 120x-2x^{2}`
   - sample (solution_overview/two_line): `A^{\prime}(x) &= 120-4x // &= 0\implies x = 30`

49. **MATH 11.179** (`math-ch11-exam.json`) — Artisan soap: inverse demand and revenue
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `R^{\prime}(Q) &= 36-6Q // &= 0\implies Q = 6`

50. **MATH 11.181** (`math-ch11-exam.json`) — Design duo: two inputs under a budget
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `U^{\prime}(x) &= 10-x // &= 0\implies x = 10`

51. **MATH 11.186** (`math-ch11-exam.json`) — Pop-up shop: Newton quotient for weekend profit
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(x) &= 2x-6 // &= 2(x-3)`

52. **MATH 11.188** (`math-ch11-exam.json`) — Summer festival: campaign weeks and ticket profit
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\pi(t) &= D(t)-10 // &= 16t-t^{2}-10`

53. **MATH 11.190** (`math-ch11-exam.json`) — Cold-chain: spoilage index over delivery hours
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `S^{\prime}(t) &= 3t^{2}-12t+9 // &= 3(t-1)(t-3)`

54. **MATH 11.194** (`math-ch11-exam.json`) — Herb box: inverse demand inside a fencing budget
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `A(x) &= x(60-2x) // &= 60x-2x^{2}\qquad(0<x<30)`
   - sample (solution_overview/two_line): `A^{\prime}(x) &= 60-4x // &= 0\implies x = 15`

55. **MATH 11.196** (`math-ch11-exam.json`) — Pop-up gallery: Newton quotient, tax, and elasticity stub
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `P^{\prime}(x) &= 2x-8 // &= 2(x-4)`

56. **MATH 11.199** (`math-ch11-exam.json`) — Warehouse: EOQ with a spoilage penalty overlay
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `TC^{\prime}(Q) &= -\dfrac{20000}{Q^{2}}+2 // &= 0\implies Q = 100`

57. **MATH 12.209** (`math-ch12-exam.json`) — Exam-style tasks - 11
   - fields: tactical[4]
   - reasons: aligned_two_line_cont
   - sample (tactical[4]/two_line): `P(\text{second red}\mid \text{first red}) &= \frac{4}{11}\ne \frac{5}{12} // &= P(\text{first red})`

58. **MATH 12.214** (`math-ch12-exam.json`) — Exam-style tasks - 16
   - fields: tactical[4]
   - reasons: aligned_two_line_cont
   - sample (tactical[4]/two_line): `P(\text{second red}\mid \text{first red}) &= \frac{5}{13}\ne \frac{6}{14} // &= P(\text{first red})`

59. **MATH 2.148** (`math-ch2-cases.json`) — Exam-style tasks - 12
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `S(x) &= \dfrac{1}{x-2}+\dfrac{1}{x+2} // &= \dfrac{2x}{x^{2}-4}\quad(x\ne\pm2)`

60. **MATH 2.152** (`math-ch2-cases.json`) — Exam-style tasks - 16
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `S(x) &= \dfrac{1}{x-3}+\dfrac{1}{x+3} // &= \dfrac{2x}{x^{2}-9}\quad(x\ne\pm3)`

61. **MATH 2.156** (`math-ch2-cases.json`) — Exam-style tasks - 20
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `S(x) &= \dfrac{1}{x-4}+\dfrac{1}{x+4} // &= \dfrac{2x}{x^{2}-16}\quad(x\ne\pm4)`

62. **MATH 11.134** (`math-ch3-exam.json`) — Exam-style tasks - 11
   - fields: solution_overview
   - reasons: aligned_multi_numeric, aligned_two_line_cont
   - sample (solution_overview/multi): `i_q &= \frac{j}{m} // &= \frac{0.072}{4} // &= 0.018 // &= 1.8\%`
   - sample (solution_overview/two_line): `R &= (1.018)^{4} - 1 \approx 0.07396743 // &= 7.3967\%`

63. **MATH 11.136** (`math-ch3-exam.json`) — Exam-style tasks - 13
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `PV_1 &= \frac{12,000}{1.06} // &= 11,320.75`

64. **MATH 11.137** (`math-ch3-exam.json`) — Exam-style tasks - 14
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `C_3 &= 6,000(1.05)^{2} // &= 6,615.00`
   - sample (solution_overview/two_line): `S_6 &= a\frac{q^{6}-1}{q-1} // &= 6,000\frac{(1.05)^{6}-1}{0.05}`

65. **MATH 11.140** (`math-ch3-exam.json`) — Exam-style tasks - 17
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `NPV &= -200,000 + 206,104.50 // &= 6,104.50`

66. **MATH 11.141** (`math-ch3-exam.json`) — Exam-style tasks - 18
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `j_{12} &= 12 \times i_m \approx 0.081858 // &= 8.1858\%`

67. **MATH 11.143** (`math-ch3-exam.json`) — Exam-style tasks - 20
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `PV &= 10,000 + 17,969.05 + 21,757.37 // &= 49,726.42`

68. **MATH 4.41** (`math-ch4-cases.json`) — Parameter-Dependent Linear Systems and Solution Sets
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `B(m, m^2 + 4) &= -m^2 + 3m - 2 // &= -(m - 1)(m - 2)`
   - sample (solution_overview/two_line): `x &= \frac{-2m^2 + 3m + k - 6}{m^2 - k + 4} // &= 1 - \frac{(m - 1)(m - 2)}{k - m^2 - 4}`

69. **MATH 4.43** (`math-ch4-cases.json`) — Parametric Linear Equation with Nested Expressions
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `x &= \frac{a - 13}{a - 6} // &= 1 - \frac{7}{a - 6}`

70. **MATH 4.44** (`math-ch4-cases.json`) — Corporate Discretionary Budget Allocation
   - fields: solution_overview, tactical[2]
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `B - R &= B - \left(\frac{1}{4}B + 15\right) // &= \frac{3}{4}B - 15`
   - sample (solution_overview/two_line): `P &= k\left(\frac{3}{4}B - 15\right) - 6 // &= \frac{3k}{4}B - 15k - 6`

71. **MATH 4.45** (`math-ch4-cases.json`) — Sensor Calibration via Baseline Average
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `& \sum_{i = 1}^{5} y_i // &= (2x + 15) + (4x - 5) + (3x + 10) + (x + 20) + (k(x - 2) + 30)`

72. **MATH 4.48** (`math-ch4-cases.json`) — Parametric Fractional Linear Equation
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `(2x - 3)(x + 2) &= 2x^2 + 4x - 3x - 6 // &= 2x^2 + x - 6`
   - sample (solution_overview/two_line): `(x + 1)(x - 2) &= x^2 - 2x + x - 2 // &= x^2 - x - 2`

73. **MATH 4.53** (`math-ch4-cases.json`) — Liquid Level Equalization in Coupled Reservoirs
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `y_A(t) &= h_A + \frac{a - q}{S_A} t // &= 15 + \frac{a - q}{6} t`
   - sample (solution_overview/two_line): `y_B(t) &= h_B + \frac{q - b}{S_B} t // &= 5 + \frac{q - b}{10} t`

74. **MATH 4.55** (`math-ch4-cases.json`) — Regional Logistics Hub Balancing
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\text{Beta} &= 3\left(36 - \frac{2}{9}k\right) - 12 // &= 96 - \frac{2}{3}k`
   - sample (solution_overview/two_line): `\text{Gamma} &= \frac{1}{2}\left(36 - \frac{2}{9}k\right) + k // &= 18 + \frac{8}{9}k`

75. **MATH 4.56** (`math-ch4-cases.json`) — Corporate Budget Allocation with Remainder and Policy Parameter
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `R &= \frac{2}{10}S // &= \frac{1}{5}S`
   - sample (solution_overview/two_line): `M &= \frac{5}{10}S // &= \frac{1}{2}S`

76. **MATH 4.93** (`math-ch4-cases.json`) — Break-Even Quantities and Vieta Relations
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `x_1 + x_2 &= -\frac{b}{a} // &= 2m - 1`

77. **MATH 4.97** (`math-ch4-cases.json`) — Roots of a Parametric Biquadratic Equation
   - fields: solution_overview, tactical[2]
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\Delta_u &= 4k^2 - 4k^2 + 8k + 12 // &= 4(2k + 3)`
   - sample (solution_overview/two_line): `S &= u_1 + u_2 // &= 2k`

78. **MATH 4.101** (`math-ch4-cases.json`) — Parameterized Quadratic Family and Root Separation
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `|x_1 - x_2| &= \frac{\sqrt{\Delta}}{|a|} // &= \sqrt{(m-4)^2 + 8}`
   - sample (solution_overview/two_line): `x_1 + x_2 &= -\frac{b}{a} // &= m - 2`

79. **MATH 4.107** (`math-ch4-cases.json`) — Parametric Quadratic Profit Model
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `x_1 + x_2 &= -\frac{b}{a} // &= 2k - 1`
   - sample (solution_overview/two_line): `x_1 x_2 &= \frac{c}{a} // &= -(k+3)`

80. **MATH 4.114** (`math-ch4-cases.json`) — Parametric Analysis of a Substituted Quadratic Form
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\Delta_u &= (-2)^2 - 4(1)(c) // &= 4(1 - c)`

81. **MATH 4.116** (`math-ch4-cases.json`) — Compound Area Border Model
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `A_{\text{lawn}}(w) &= w(50 + 2w) // &= 2w^2 + 50w`

82. **MATH 4.153** (`math-ch4-cases.json`) — Parametric Rational Equation and Extraneous Roots
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\Delta &= 12a - 3a^2 // &= 3a(4 - a)`

83. **MATH 4.167** (`math-ch4-cases.json`) — Symmetric Solutions of an Absolute-Value Equation
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `|x^2 - 4| &= |(|x| - 2)(|x| + 2)| // &= ||x| - 2| \cdot (|x| + 2)`

84. **MATH 4.169** (`math-ch4-cases.json`) — A quadratic hidden behind base three
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `b^{x} &= u > 0 \iff x // &= \log_{b} u`

85. **MATH 4.170** (`math-ch4-cases.json`) — A quadratic in the logarithm itself
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\log_{b} x &= t \iff x // &= b^{t}`

86. **MATH 4.177** (`math-ch4-cases.json`) — A culture that triples every four hours
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `a &= 3^{\frac{1}{4}} // &= \sqrt[4]{3}`

87. **MATH 4.189** (`math-ch4-cases.json`) — A linear equation controlled by a parameter
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `k &= 0,\ b // &= 0 \implies \text{infinitely many solutions}`

88. **MATH 4.191** (`math-ch4-cases.json`) — Composite decadic equations under pressure
   - fields: tactical[0]
   - reasons: aligned_two_line_cont
   - sample (tactical[0]/two_line): `\log\sqrt[3]{x} + \log x^{3} - \log x + \frac{4}{3} &= \frac{1}{3}\log x + 3\log x - \log  // &= \frac{7}{3}\log x + \frac{4}{3}`

89. **MATH 4.217** (`math-ch4-cases.json`) — Exam-style tasks - 24
   - fields: tactical[1]
   - reasons: aligned_two_line_cont
   - sample (tactical[1]/two_line): `v &= \frac{150}{10} // &= 15\ \text{m/s}`
   - sample (tactical[1]/two_line): `& 15 \cdot \frac{18}{5} // &= 54\ \text{km/h}`

90. **MATH 5.72** (`math-ch5-exam.json`) — Exam-style tasks - 12
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `35x + 10y &= 25 \times 70 // &= 1750 \tag{2}`

91. **MATH 7.16** (`math-ch7-linear-quadratic.json`) — A Line Written as a Single Fraction
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `t(x) &= \frac{5-x}{2} // &= -\frac{1}{2}x+\frac{5}{2}`

92. **MATH 7.E03** (`math-ch7-mixed-exam.json`) — Ticket desk — rebuilt revenue
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `R(p) &= p(8-p) // &= -p^{2}+8p`

93. **MATH 7.E05** (`math-ch7-mixed-exam.json`) — Sliding slope family — when tangency happens
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `\Delta(t) &= t^{2}-4 // &= (t-2)(t+2)`

94. **MATH 7.E06** (`math-ch7-mixed-exam.json`) — Rebuild from vertex and a point
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `g(x) &= 2(x-2)^{2}-3 // &= 2x^{2}-8x+5`

95. **MATH 7.E07** (`math-ch7-mixed-exam.json`) — Line inside a square — axis of the other order
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `g(f(x)) &= (x+1)^{2} // &= x^{2}+2x+1`

96. **MATH 7.E13** (`math-ch7-mixed-exam.json`) — Ball toss — peak as midpoint of the ground times
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `h(t) &= -t^{2}+6t // &= t(6-t)`

97. **MATH 7.E17** (`math-ch7-mixed-exam.json`) — Two nestings — missing linear term, shifted axis
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `f(g(x)) &= 2(x^{2}-4)-1 // &= 2x^{2}-9`
   - sample (solution_overview/two_line): `g(f(x)) &= (2x-1)^{2}-4 // &= 4x^{2}-4x-3`

98. **MATH 7.E18** (`math-ch7-mixed-exam.json`) — Opposite roots — evenness and the trough sign
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `g(x) &= (x+3)(x-3) // &= x^{2}-9`
   - sample (solution_overview/two_line): `g(-x) &= (-x)^{2}-9 // &= g(x)\neq -g(x)`

99. **MATH 7.E19** (`math-ch7-mixed-exam.json`) — Peak above a level, falling table
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `g(x) &= -(x-1)(x-5) // &= -x^{2}+6x-5`

100. **MATH 7.E23** (`math-ch7-mixed-exam.json`) — Workshop cost trough in a table
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `C(q) &= q^{2}-4q+9 // &= (q-2)^{2}+5`

101. **MATH 7.E27** (`math-ch7-mixed-exam.json`) — Parabola after an inverse shift
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `g(f^{-1}(x)) &= x^{2}+4x+3 // &= (x+1)(x+3)`

102. **MATH 7.E30** (`math-ch7-mixed-exam.json`) — Arch crown versus a falling trolley chord
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `m &= -\frac{1}{2},\qquad f(2) = 1<4 // &= g(2)`

103. **MATH 9.E01** (`math-ch9-mixed-exam.json`) — Touch, ends, and a dashed mark from ticks
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x+1)^{2}(x-2) // &= x^{3}-3x-2`

104. **MATH 9.E02** (`math-ch9-mixed-exam.json`) — Degree and factors from raw samples
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x+1)(x-1)(x-2) // &= x^{3}-2x^{2}-x+2`

105. **MATH 9.E03** (`math-ch9-mixed-exam.json`) — Lock imbalance from the hourly ledger
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `h(t) &= t(t-2)(t-3) // &= t^{3}-5t^{2}+6t`

106. **MATH 9.E05** (`math-ch9-mixed-exam.json`) — The cubic family with a sliding gap
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `g_{k}(x) &= x^{3}-kx // &= x(x^{2}-k)`

107. **MATH 9.E06** (`math-ch9-mixed-exam.json`) — Rebuild a touch-and-cross monic cubic
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x-1)^{2}(x+2) // &= x^{3}-3x+2`

108. **MATH 9.E08** (`math-ch9-mixed-exam.json`) — A squared factor and the derivative
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x+1)^{2}(x-2) // &= x^{3}-3x-2`

109. **MATH 9.E09** (`math-ch9-mixed-exam.json`) — Solid cubic, dashed line, and a value table
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= x(x-2)(x+2) // &= x^{3}-4x`

110. **MATH 9.E11** (`math-ch9-mixed-exam.json`) — Odd cubic against a dashed line
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= x(x-2)(x+2) // &= x^{3}-4x`

111. **MATH 9.E12** (`math-ch9-mixed-exam.json`) — Cubic samples with three visible factors
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x-2)(x+1) // &= x^{2}-x-2`

112. **MATH 9.E13** (`math-ch9-mixed-exam.json`) — Beam camber against a design mark
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `c(t) &= -(t+1)(t-1)(t-2) // &= -t^{3}+2t^{2}+t-2`

113. **MATH 9.E15** (`math-ch9-mixed-exam.json`) — A double root with a sliding companion
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p_{a}(x) &= (x-1)^{2}(x-a) // &= x^{3}-(a+2)x^{2}+(2a+1)x-a`

114. **MATH 9.E16** (`math-ch9-mixed-exam.json`) — Double at 2 and simple at −1
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x-2)^{2}(x+1) // &= x^{3}-3x^{2}+4`

115. **MATH 9.E18** (`math-ch9-mixed-exam.json`) — Three simple linear factors
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x-1)(x+1)(x-2) // &= x^{3}-2x^{2}-x+2`

116. **MATH 9.E19** (`math-ch9-mixed-exam.json`) — Touch cubic on axes plus raw samples
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x-2)^{2}(x+1) // &= x^{3}-3x^{2}+4`

117. **MATH 9.E21** (`math-ch9-mixed-exam.json`) — Even quartic read from the axes
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x^{2}-1)^{2} // &= x^{4}-2x^{2}+1`

118. **MATH 9.E22** (`math-ch9-mixed-exam.json`) — Quartic samples: differences and factors
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x-1)^{2}(x+1)^{2} // &= x^{4}-2x^{2}+1`

119. **MATH 9.E23** (`math-ch9-mixed-exam.json`) — Warehouse deviation from daily closes
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `s(n) &= n(n-2)(n-4) // &= n^{3}-6n^{2}+8n`

120. **MATH 9.E25** (`math-ch9-mixed-exam.json`) — A double root fixed at the origin
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `h_{k}(x) &= x^{2}(x-k) // &= x^{3}-kx^{2}`

121. **MATH 9.E26** (`math-ch9-mixed-exam.json`) — Three simple zeros force a monic cubic
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x+2)(x-1)(x-3) // &= x^{3}-2x^{2}-5x+6`

122. **MATH 9.E28** (`math-ch9-mixed-exam.json`) — Simple at 0, double at 2
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= x(x-2)^{2} // &= x^{3}-4x^{2}+4x`

123. **MATH 9.E29** (`math-ch9-mixed-exam.json`) — Three crossings, a dashed mark, and table factors
   - fields: solution_overview
   - reasons: aligned_two_line_cont
   - sample (solution_overview/two_line): `p(x) &= (x+1)(x-1)(x-2) // &= x^{3}-2x^{2}-x+2`
