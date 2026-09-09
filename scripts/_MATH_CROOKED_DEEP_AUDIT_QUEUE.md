# Deep crooked math audit queue

Total flagged tasks: **1134** | high: **962** | mild: **172**

Deeper than prior pass: adjacent `$$=…$$`, split FOC pairs, micro leftover displays,
dense micro-chains, garbled aligned fragments, trailing `\qquad`/`\implies`.

Prefer one-line complete equations. Process high first, one task at a time.

## Reason counts

- `micro_display`: 1004
- `dense_micro_chain`: 893
- `adjacent_micro_displays`: 524
- `split_foc_pair`: 19
- `aligned_short_tail`: 1

## HIGH

1. **MATH 11.161** (`math-ch11-exam.json`, sev=11) — Carpentry workshop: revenue, cost, and build time
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `Q = 6`
   - sample (tactical[3]/micro_display): `Q = 9`

2. **MATH 11.172** (`math-ch11-exam.json`, sev=11) — Solar maintenance: output and a smooth service rule
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `m = 21`
   - sample (tactical[0]/split_foc_pair): `\pi^{\prime}(m) = 0 || m = 21`
   - sample (tactical[2]/micro_display): `m = 25`

3. **MATH 11.173** (`math-ch11-exam.json`, sev=11) — Retail launch: price elasticity and a tax
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `p = 20`
   - sample (tactical[0]/split_foc_pair): `R^{\prime}(p) = 0 || p = 20`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

4. **MATH 11.174** (`math-ch11-exam.json`, sev=11) — Shipping line: capacity, cost, and a smooth loading rule
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[1]/micro_display): `x = 25`
   - sample (tactical[1]/split_foc_pair): `R^{\prime}(x) = 0 || x = 25`
   - sample (tactical[2]/micro_display): `10 - 9 = 1`

5. **MATH 11.175** (`math-ch11-exam.json`, sev=11) — Festival stalls: demand, levy, and setup time
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `30 - 16 = 14`
   - sample (tactical[0]/micro_display): `8 + 6 = 14`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

6. **MATH 11.186** (`math-ch11-exam.json`, sev=11) — Pop-up shop: Newton quotient for weekend profit
   - fields: tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[2]/micro_display): `16 - 24 = -8`
   - sample (tactical[2]/micro_display): `-8 + 20 = 12`
   - sample (tactical[2]/micro_display): `P(4) = 12`

7. **MATH 12.07** (`math-cases-ch12-probability.json`, sev=8) — Arranging BALLOON
   - fields: solution_overview
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `n_B = 1`
   - sample (solution_overview/micro_display): `n_A = 1`
   - sample (solution_overview/micro_display): `n_L = 2`

8. **MATH 12.35** (`math-cases-ch12-probability.json`, sev=8) — The Design Studio Secret Santa
   - fields: solution_overview, tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `n! = 7!`
   - sample (solution_overview/micro_display): `7! = 5040`
   - sample (solution_overview/micro_display): `0 = 1`

9. **MATH 12.58** (`math-cases-ch12-probability.json`, sev=8) — Of 2,000 factory units, 700 had Defect A, 440 Defect B, and 360 Defect C
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N(A) = 700`
   - sample (solution_overview/micro_display): `N(B) = 440`
   - sample (solution_overview/micro_display): `N(C) = 360`

10. **MATH 12.61** (`math-cases-ch12-probability.json`, sev=8) — Of 1,500 servers, Memory, Disk, and Network fault counts were 525, 390, and 285
   - fields: solution_overview
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `|M| = 525`
   - sample (solution_overview/micro_display): `|D| = 390`
   - sample (solution_overview/micro_display): `|N| = 285`

11. **MATH 12.63** (`math-cases-ch12-probability.json`, sev=8) — Inclusion-Exclusion Principle
   - fields: solution_overview, tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `|M| = 40`
   - sample (solution_overview/micro_display): `|P| = 35`
   - sample (solution_overview/micro_display): `|C| = 30`

12. **MATH 12.64** (`math-cases-ch12-probability.json`, sev=8) — Among 200 employees, 90 use App A, 70 App B, and 60 App C
   - fields: solution_overview, tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `|A| = 90`
   - sample (solution_overview/micro_display): `|B| = 70`
   - sample (solution_overview/micro_display): `|C| = 60`

13. **MATH 12.65** (`math-cases-ch12-probability.json`, sev=8) — Among 250 students, 120 take Math, 100 Physics, and 90 Chemistry
   - fields: solution_overview
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_M = 120`
   - sample (solution_overview/micro_display): `N_P = 100`
   - sample (solution_overview/micro_display): `N_C = 90`

14. **MATH 12.76** (`math-cases-ch12-probability.json`, sev=8) — A call center tracks first-call resolution by call reason
   - fields: solution_overview
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_B = 1200`
   - sample (solution_overview/micro_display): `N_{R \cap B} = 900`
   - sample (solution_overview/micro_display): `N_T = 1800`

15. **MATH 12.102** (`math-cases-ch12-probability.json`, sev=8) — Two fair six-sided dice are rolled once
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `N(S = 8) = 5`
   - sample (tactical[1]/micro_display): `5 + 3 = 8`

16. **MATH 12.135** (`math-cases-ch12-probability.json`, sev=8) — A Charity Raffle
   - fields: solution_overview, tactical[0]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 40`
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[0]/micro_display): `0 + 15 = 15`

17. **MATH 12.142** (`math-cases-ch12-probability.json`, sev=8) — A Hedged Investment Pair
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `E[P] = 5 + 3`
   - sample (tactical[0]/micro_display): `5 + 3 = 8`
   - sample (tactical[0]/micro_display): `E[P] = 8`

18. **MATH 12.146** (`math-cases-ch12-probability.json`, sev=8) — Assembly Line Processing Time
   - fields: solution_overview, tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X_1] = 2`
   - sample (solution_overview/micro_display): `E[X_2] = 3`
   - sample (solution_overview/micro_display): `E[T] = 11`

19. **MATH 12.151** (`math-cases-ch12-probability.json`, sev=8) — A Streaming Royalty (Setting a Break-Even Fee)
   - fields: solution_overview, tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `0 = E[X] - c`
   - sample (tactical[0]/micro_display): `c = E[X]`

20. **MATH 1.109** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 1
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `1+5=6`
   - sample (tactical[3]/micro_display): `2+4=6`

21. **MATH 1.110** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 2
   - fields: tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `52+41=93`
   - sample (tactical[0]/micro_display): `93-18=75`
   - sample (tactical[0]/micro_display): `90-75=15`

22. **MATH 1.112** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `n=g+1`
   - sample (tactical[1]/micro_display): `2^{3}=8`
   - sample (tactical[2]/micro_display): `46+39=85`

23. **MATH 1.116** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 8
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/micro_display): `x+y=0+y`
   - sample (tactical[0]/micro_display): `0+y=y`

24. **MATH 1.120** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 12
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/micro_display): `57-41=16`
   - sample (tactical[1]/micro_display): `16+20=36`

25. **MATH 1.123** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 15
   - fields: tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[4]/micro_display): `|C|=4`
   - sample (tactical[4]/micro_display): `|E|=5`
   - sample (tactical[4]/micro_display): `4+5=9`

26. **MATH 1.124** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/micro_display): `70-52=18`
   - sample (tactical[1]/micro_display): `18+28=46`

27. **MATH 1.128** (`math-ch1-exam.json`, sev=8) — Exam-style tasks - 20
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[2]/micro_display): `80-35=45`
   - sample (tactical[3]/micro_display): `80-35=45`

28. **MATH 10.1.1** (`math-ch10-exp-log.json`, sev=8) — Continuous force versus discrete compounding — letter rates
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `e^{kT} = 2`
   - sample (tactical[3]/micro_display): `kT = \ln 2`
   - sample (tactical[3]/adjacent_micro_displays): `e^{kT} = 2 || kT = \ln 2`

29. **MATH 10.1.5** (`math-ch10-exp-log.json`, sev=8) — Rebuild $P(t)=P_0 e^{kt}$ from a doubling time
   - fields: tactical[0]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `e^{kT} = 2`
   - sample (tactical[0]/micro_display): `kT = \ln 2`
   - sample (tactical[0]/adjacent_micro_displays): `e^{kT} = 2 || kT = \ln 2`

30. **MATH 10.2.2** (`math-ch10-exp-log.json`, sev=8) — Change-of-base identity in a verification table
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2^{3}=8`
   - sample (tactical[1]/micro_display): `9=3^{2}`
   - sample (tactical[1]/micro_display): `9=9`

31. **MATH 10.2.43** (`math-ch10-exp-log.json`, sev=8) — Symbolic substitution preparing a quadratic in $u=\ln x$
   - fields: tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `u-2 = 0`
   - sample (tactical[1]/micro_display): `u = 2`
   - sample (tactical[1]/micro_display): `u+1 = 0`

32. **MATH 10.3.27** (`math-ch10-exp-log.json`, sev=8) — Nested — double-log constraints pinning level and force
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `\ln A = 2`
   - sample (tactical[0]/micro_display): `A = e^{2}`
   - sample (tactical[0]/adjacent_micro_displays): `\ln A = 2 || A = e^{2}`

33. **MATH 11.163** (`math-ch11-exam.json`, sev=8) — Print shop: price, demand, and elasticity
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `p = 15`
   - sample (tactical[0]/split_foc_pair): `R^{\prime}(p) = 0 || p = 15`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

34. **MATH 11.164** (`math-ch11-exam.json`, sev=8) — Market garden: labour, output, and wage
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `L = 12`
   - sample (tactical[0]/split_foc_pair): `\pi^{\prime}(L) = 0 || L = 12`
   - sample (tactical[1]/micro_display): `30 - 24 = 6`

35. **MATH 11.166** (`math-ch11-exam.json`, sev=8) — Gift-tube producer: volume, tax, and rival revenue
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[2]/micro_display): `Q = 36`
   - sample (tactical[2]/split_foc_pair): `R^{\prime}(Q) = 0 || Q = 36`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

36. **MATH 11.178** (`math-ch11-exam.json`, sev=8) — Pharmacy warehouse: order quantity and holding cost
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `Q = 100`
   - sample (tactical[2]/micro_display): `Q = 100`
   - sample (tactical[2]/micro_display): `hQ/2 = 2Q`

37. **MATH 11.179** (`math-ch11-exam.json`, sev=8) — Artisan soap: inverse demand and revenue
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `Q = 6`
   - sample (tactical[0]/split_foc_pair): `R^{\prime}(Q) = 0 || Q = 6`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

38. **MATH 11.181** (`math-ch11-exam.json`, sev=8) — Design duo: two inputs under a budget
   - fields: tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, micro_display, split_foc_pair
   - sample (tactical[1]/micro_display): `x = 10`
   - sample (tactical[1]/split_foc_pair): `U^{\prime}(x) = 0 || x = 10`
   - sample (tactical[4]/micro_display): `U(x,0) = 0`

39. **MATH 11.182** (`math-ch11-exam.json`, sev=8) — Bike workshop: cubic P′ and a per-unit levy
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `Q = 1`
   - sample (tactical[0]/split_foc_pair): `P^{\prime}(Q)>0\quad\text{on }(4,9) || Q = 1`
   - sample (tactical[1]/micro_display): `Q = 4`

40. **MATH 11.184** (`math-ch11-exam.json`, sev=8) — Clinic throughput: f, f′ and f″ on one plane
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `x = 1`
   - sample (tactical[0]/micro_display): `x = 5`
   - sample (tactical[0]/adjacent_micro_displays): `x = 1 || x = 5`

41. **MATH 11.185** (`math-ch11-exam.json`, sev=8) — Ceramic kiln: cost inflection and marginal cost
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `6Q-12 = 0`
   - sample (tactical[1]/micro_display): `6Q = 12`
   - sample (tactical[1]/micro_display): `Q = 2`

42. **MATH 11.188** (`math-ch11-exam.json`, sev=8) — Summer festival: campaign weeks and ticket profit
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `16-2t = 0`
   - sample (tactical[0]/micro_display): `t = 8`
   - sample (tactical[0]/adjacent_micro_displays): `16-2t = 0 || t = 8`

43. **MATH 11.192** (`math-ch11-exam.json`, sev=8) — Print kiosk: demand figure plus quadratic cost
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `D(15) = 30`
   - sample (tactical[0]/micro_display): `60 - 30 = 30`
   - sample (tactical[0]/micro_display): `D(15) = 30`

44. **MATH 11.194** (`math-ch11-exam.json`, sev=8) — Herb box: inverse demand inside a fencing budget
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `y = 60-2x`
   - sample (tactical[1]/micro_display): `60-4x = 0`
   - sample (tactical[1]/micro_display): `x = 15`

45. **MATH 11.198** (`math-ch11-exam.json`, sev=8) — Design duo: budget reduction then read U′ from the figure
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `x = 10`
   - sample (tactical[0]/split_foc_pair): `U^{\prime}(x) = 0 || x = 10`
   - sample (tactical[1]/micro_display): `4y = 40-2x`

46. **MATH 11.199** (`math-ch11-exam.json`, sev=8) — Warehouse: EOQ with a spoilage penalty overlay
   - fields: tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `Q = 100`
   - sample (tactical[3]/micro_display): `1 - 6 = -5`
   - sample (tactical[3]/micro_display): `-5 + 9 = 4`

47. **MATH 11.202** (`math-ch11-exam.json`, sev=8) — Club: inverse-demand figure, membership fee, and MC
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `MR=20-Q`
   - sample (tactical[0]/micro_display): `p = 10`
   - sample (tactical[1]/micro_display): `20-Q = 4`

48. **MATH 11.203** (`math-ch11-exam.json`, sev=8) — Mill: average-cost drift and a rival's marginal revenue
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `Q = 8`
   - sample (tactical[2]/micro_display): `Q = 5`
   - sample (tactical[2]/adjacent_micro_displays): `Q = 8 || Q = 5`

49. **MATH 11.205** (`math-ch11-exam.json`, sev=8) — Distillery: quadratic cost, linear demand, and a unit tax
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `Q = 15`
   - sample (tactical[3]/micro_display): `Q = 45`
   - sample (tactical[3]/micro_display): `p = 15`

50. **MATH 12.201** (`math-ch12-exam.json`, sev=8) — Exam-style tasks - 3
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `50 + 45 = 95`
   - sample (tactical[0]/micro_display): `95 - 15 = 80`
   - sample (tactical[0]/adjacent_micro_displays): `50 + 45 = 95 || 95 - 15 = 80`

51. **MATH 12.210** (`math-ch12-exam.json`, sev=8) — Exam-style tasks - 12
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `24 + 20 = 44`
   - sample (tactical[1]/micro_display): `44 + 18 = 62`
   - sample (tactical[1]/adjacent_micro_displays): `24 + 20 = 44 || 44 + 18 = 62`

52. **MATH 12.215** (`math-ch12-exam.json`, sev=8) — Exam-style tasks - 17
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `26 + 21 = 47`
   - sample (tactical[1]/micro_display): `47 + 19 = 66`
   - sample (tactical[1]/adjacent_micro_displays): `26 + 21 = 47 || 47 + 19 = 66`

53. **MATH 2.01** (`math-ch2-cases.json`, sev=8) — Warm-up: square of a sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5^2=25`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=4`

54. **MATH 2.02** (`math-ch2-cases.json`, sev=8) — Warm-up: difference of two squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `36=6^2`
   - sample (tactical[1]/micro_display): `a=5`
   - sample (tactical[1]/micro_display): `a^2=5^2`

55. **MATH 2.03** (`math-ch2-cases.json`, sev=8) — Warm-up: elementary sum and product data
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a+b=7`
   - sample (tactical[0]/micro_display): `ab=10`
   - sample (tactical[0]/micro_display): `7^2=49`

56. **MATH 2.04** (`math-ch2-cases.json`, sev=8) — Warm-up: cube sum under a vanishing triple sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=2`
   - sample (tactical[0]/micro_display): `b=3`
   - sample (tactical[0]/micro_display): `c=-5`

57. **MATH 2.05** (`math-ch2-cases.json`, sev=8) — Binomial identities — set 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=5`
   - sample (tactical[0]/micro_display): `b=2`
   - sample (tactical[0]/micro_display): `5-2=3`

58. **MATH 2.06** (`math-ch2-cases.json`, sev=8) — Binomial identities — set 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/micro_display): `b=2`
   - sample (tactical[0]/micro_display): `c=2`

59. **MATH 2.07** (`math-ch2-cases.json`, sev=8) — Binomial identities — set 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `m=1`
   - sample (tactical[0]/micro_display): `n=1`
   - sample (tactical[0]/micro_display): `m^4=1^4`

60. **MATH 2.08** (`math-ch2-cases.json`, sev=8) — Perfect squares that miss the constant by one
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `y=2`
   - sample (tactical[0]/micro_display): `6-2=4`
   - sample (tactical[0]/micro_display): `4^2=16`

61. **MATH 2.09** (`math-ch2-cases.json`, sev=8) — Grouping a linear sum inside a square difference
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p=5`
   - sample (tactical[0]/micro_display): `q=3`
   - sample (tactical[0]/micro_display): `p+q=5+3`

62. **MATH 2.10** (`math-ch2-cases.json`, sev=8) — Signs that flip only the cross term
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `m=4`
   - sample (tactical[0]/micro_display): `n=3`
   - sample (tactical[0]/micro_display): `m+n=4+3`

63. **MATH 2.11** (`math-ch2-cases.json`, sev=8) — A doubled middle that refuses to be halved
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u=1`
   - sample (tactical[0]/micro_display): `v=1`
   - sample (tactical[0]/micro_display): `u^{2}=1`

64. **MATH 2.12** (`math-ch2-cases.json`, sev=8) — Three-term squares with a dropped factor two
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `y=1`
   - sample (tactical[0]/micro_display): `z=1`

65. **MATH 2.13** (`math-ch2-cases.json`, sev=8) — Cubes whose odd-powered terms survive
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `a=1`
   - sample (tactical[1]/micro_display): `b=2`
   - sample (tactical[1]/micro_display): `c=2`

66. **MATH 2.14** (`math-ch2-cases.json`, sev=8) — Elementary cubes evaluated from two symmetric values
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5^2=25`
   - sample (tactical[0]/micro_display): `1^2=1`
   - sample (tactical[0]/micro_display): `5^2=25`

67. **MATH 2.15** (`math-ch2-cases.json`, sev=8) — A hidden square inside a biquadratic difference
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u=1`
   - sample (tactical[0]/micro_display): `v=1`
   - sample (tactical[0]/micro_display): `u^{2}=1`

68. **MATH 2.16** (`math-ch2-cases.json`, sev=8) — Reciprocal squares built from a linear sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u=1`
   - sample (tactical[0]/micro_display): `v=1`
   - sample (tactical[0]/micro_display): `u^{2}=1`

69. **MATH 2.17** (`math-ch2-cases.json`, sev=8) — Four terms that group into a difference of squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/micro_display): `b=2`
   - sample (tactical[0]/micro_display): `c=2`

70. **MATH 2.18** (`math-ch2-cases.json`, sev=8) — Half the sum of three squared gaps
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a+b=7`
   - sample (tactical[0]/micro_display): `ab=10`
   - sample (tactical[0]/micro_display): `7^2=49`

71. **MATH 2.19** (`math-ch2-cases.json`, sev=8) — A cyclic product of three linear binomials
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3`
   - sample (tactical[0]/micro_display): `2a-1=6-1`
   - sample (tactical[0]/micro_display): `6-1=5`

72. **MATH 2.20** (`math-ch2-cases.json`, sev=8) — Mixed signs inside a three-letter square
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3`
   - sample (tactical[0]/micro_display): `b=1`
   - sample (tactical[0]/micro_display): `c=2`

73. **MATH 2.21** (`math-ch2-cases.json`, sev=8) — Newton sums built from a pair of elementary data
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/micro_display): `b=2`
   - sample (tactical[0]/micro_display): `c=2`

74. **MATH 2.22** (`math-ch2-cases.json`, sev=8) — A square of a difference of two squares
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `x-1=1`
   - sample (tactical[1]/micro_display): `x+1=3`

75. **MATH 2.23** (`math-ch2-cases.json`, sev=8) — Four letters and the six doubled pairwise products
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `t=1`
   - sample (tactical[1]/micro_display): `t^2=1`
   - sample (tactical[1]/micro_display): `6t=6`

76. **MATH 2.24** (`math-ch2-cases.json`, sev=8) — Mirror quadratics whose odd powers cancel
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `2^2=4`
   - sample (tactical[1]/micro_display): `2^3=8`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

77. **MATH 2.25** (`math-ch2-cases.json`, sev=8) — Three cubes after a vanishing linear sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `s=5`
   - sample (tactical[0]/micro_display): `p=6`
   - sample (tactical[0]/micro_display): `5^2=25`

78. **MATH 2.26** (`math-ch2-cases.json`, sev=8) — Brahmagupta’s product against a cubed trinomial
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/micro_display): `b=2`
   - sample (tactical[0]/micro_display): `c=2`

79. **MATH 2.27** (`math-ch2-cases.json`, sev=8) — Brahmagupta’s product of two sums of squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u=1`
   - sample (tactical[0]/micro_display): `v=1`
   - sample (tactical[0]/micro_display): `u^{2}=1`

80. **MATH 2.28** (`math-ch2-cases.json`, sev=8) — Completing the square under a leading coefficient two
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/micro_display): `x^2=9`
   - sample (tactical[0]/micro_display): `2x^2=18`

81. **MATH 2.29** (`math-ch2-cases.json`, sev=8) — Factoring a biquadratic after a completed square
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `a=1`
   - sample (tactical[1]/micro_display): `b=2`
   - sample (tactical[1]/micro_display): `c=2`

82. **MATH 2.30** (`math-ch2-cases.json`, sev=8) — A cubic leftover after a cubed binomial is subtracted
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3`
   - sample (tactical[0]/micro_display): `b=1`
   - sample (tactical[0]/micro_display): `c=2`

83. **MATH 2.31** (`math-ch2-cases.json`, sev=8) — Binomial identities — set 27
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `t=2`
   - sample (tactical[0]/micro_display): `t-1=1`
   - sample (tactical[0]/micro_display): `t+1=3`

84. **MATH 2.32** (`math-ch2-cases.json`, sev=8) — Hunting one mixed product in a shifted trinomial square
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u=0`
   - sample (tactical[0]/micro_display): `u+3=3`
   - sample (tactical[0]/micro_display): `3^2=9`

85. **MATH 2.33** (`math-ch2-cases.json`, sev=8) — A biquadratic that is already a completed square
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `y=1`
   - sample (tactical[0]/micro_display): `x^4=16`

86. **MATH 2.34** (`math-ch2-cases.json`, sev=8) — Walking around three squared differences
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `27=3^3`
   - sample (tactical[0]/micro_display): `8=2^3`
   - sample (tactical[0]/micro_display): `3-2=1`

87. **MATH 2.38** (`math-ch2-cases.json`, sev=8) — Warm-up: partial fraction split on $x^2-1$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `A+B=0`
   - sample (tactical[0]/micro_display): `A-B=1`
   - sample (tactical[0]/micro_display): `2A=1`

88. **MATH 2.41** (`math-ch2-cases.json`, sev=8) — A letter struck from only one term
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/micro_display): `b=1`
   - sample (tactical[0]/micro_display): `1`

89. **MATH 2.42** (`math-ch2-cases.json`, sev=8) — Nested unit fraction with a swapped report
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `r=1`
   - sample (tactical[0]/micro_display): `s=1`
   - sample (tactical[0]/micro_display): `2`

90. **MATH 2.43** (`math-ch2-cases.json`, sev=8) — Test point after a difference-of-squares cancel
   - fields: tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `A+B=0`
   - sample (tactical[4]/micro_display): `A-B=6`

91. **MATH 2.45** (`math-ch2-cases.json`, sev=8) — Simple reciprocal sums and differences
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p=1`
   - sample (tactical[1]/micro_display): `q=1`
   - sample (tactical[1]/micro_display): `2`

92. **MATH 2.97** (`math-ch2-cases.json`, sev=8) — Cancelling one conjugate factor, not two
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3`
   - sample (tactical[0]/micro_display): `b=4`
   - sample (tactical[0]/micro_display): `5`

93. **MATH 2.107** (`math-ch2-cases.json`, sev=8) — Piecewise rewrite then a leftover constant
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x-5=7`
   - sample (tactical[0]/micro_display): `2x-5=-7`
   - sample (tactical[0]/micro_display): `x=6`

94. **MATH 2.111** (`math-ch2-cases.json`, sev=8) — Nested bars collapse, a minus does not
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[1]/micro_display): `x=4`
   - sample (tactical[2]/micro_display): `6`

95. **MATH 2.112** (`math-ch2-cases.json`, sev=8) — Copying a nonnegative inside then a vanishing difference
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[1]/micro_display): `0`
   - sample (tactical[1]/micro_display): `|u|=-u`

96. **MATH 2.113** (`math-ch2-cases.json`, sev=8) — Distance to five different marks
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2`
   - sample (tactical[0]/micro_display): `8`
   - sample (tactical[0]/micro_display): `2`

97. **MATH 2.114** (`math-ch2-cases.json`, sev=8) — Products and quotients of bars, never a sum
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u=-3`
   - sample (tactical[1]/micro_display): `x=3`
   - sample (tactical[1]/micro_display): `4`

98. **MATH 2.119** (`math-ch2-cases.json`, sev=8) — Triangle inequality as a comparison
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-3`
   - sample (tactical[0]/micro_display): `3`
   - sample (tactical[0]/micro_display): `a=-3`

99. **MATH 2.120** (`math-ch2-cases.json`, sev=8) — Linear pieces of a scaled inside then a leftover
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `r=4`
   - sample (tactical[2]/micro_display): `x=-1`
   - sample (tactical[2]/micro_display): `6`

100. **MATH 2.122** (`math-ch2-cases.json`, sev=8) — Cubes inside bars versus cubes of bars
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0`
   - sample (tactical[0]/micro_display): `5`
   - sample (tactical[0]/micro_display): `5`

101. **MATH 2.124** (`math-ch2-cases.json`, sev=8) — Homogeneity pulled out of bars
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `y=1`
   - sample (tactical[0]/micro_display): `2`

102. **MATH 2.125** (`math-ch2-cases.json`, sev=8) — Root of a squared binomial in two letters
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `t=0`

103. **MATH 2.127** (`math-ch2-cases.json`, sev=8) — Completing the square then deciding whether bars drop
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-1`
   - sample (tactical[0]/micro_display): `6`
   - sample (tactical[1]/micro_display): `p=-3`

104. **MATH 2.128** (`math-ch2-cases.json`, sev=8) — Equality cases of the triangle inequality
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `a=3`
   - sample (tactical[1]/micro_display): `b=5`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

105. **MATH 2.129** (`math-ch2-cases.json`, sev=8) — A completed square that dips below zero
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `u=-3`
   - sample (tactical[3]/micro_display): `x=0`
   - sample (tactical[3]/micro_display): `1`

106. **MATH 2.130** (`math-ch2-cases.json`, sev=8) — Reverse triangle comparison of sizes
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3`
   - sample (tactical[0]/micro_display): `b=5`
   - sample (tactical[0]/micro_display): `|3+5|=8.`

107. **MATH 2.131** (`math-ch2-cases.json`, sev=8) — Nested bars around a translated letter
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-4`
   - sample (tactical[0]/micro_display): `b=1`
   - sample (tactical[0]/micro_display): `|a|=|-4|`

108. **MATH 2.132** (`math-ch2-cases.json`, sev=8) — Quotient of opposite linears then a false global constant
   - fields: tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-4`
   - sample (tactical[0]/micro_display): `b=1`
   - sample (tactical[0]/micro_display): `|a|=|-4|`

109. **MATH 2.134** (`math-ch2-cases.json`, sev=8) — Wrong piece chosen then a leftover constant
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `a=4`
   - sample (tactical[2]/micro_display): `a=1`
   - sample (tactical[2]/micro_display): `b=1`

110. **MATH 2.135** (`math-ch2-cases.json`, sev=8) — Root of a square after completing versus dropping bars
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `-4^2=16`
   - sample (tactical[1]/micro_display): `1`
   - sample (tactical[1]/micro_display): `6`

111. **MATH 2.136** (`math-ch2-cases.json`, sev=8) — Mixed slogans that look like product rules
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-1`
   - sample (tactical[0]/micro_display): `6`
   - sample (tactical[2]/micro_display): `3`

112. **MATH 2.138** (`math-ch2-cases.json`, sev=8) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `z=z-1`
   - sample (tactical[0]/micro_display): `0=-1`
   - sample (tactical[0]/adjacent_micro_displays): `z=z-1 || 0=-1`

113. **MATH 2.139** (`math-ch2-cases.json`, sev=8) — Exam-style tasks - 3
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `q^2=q`
   - sample (tactical[2]/micro_display): `q^2-q=0`
   - sample (tactical[2]/micro_display): `q(q-1)=0`

114. **MATH 2.141** (`math-ch2-cases.json`, sev=8) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a+b+c=0`
   - sample (tactical[1]/micro_display): `x+1=2x-2`
   - sample (tactical[1]/micro_display): `3=x`

115. **MATH 2.146** (`math-ch2-cases.json`, sev=8) — Exam-style tasks - 10
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `v=2`
   - sample (tactical[2]/micro_display): `q=2`
   - sample (tactical[2]/micro_display): `2`

116. **MATH 11.142** (`math-ch3-exam.json`, sev=8) — Exam-style tasks - 19
   - fields: tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[4]/micro_display): `11.18`
   - sample (tactical[4]/micro_display): `10.18`
   - sample (tactical[4]/adjacent_micro_displays): `11.18 || 10.18`

117. **MATH 4.01** (`math-ch4-cases.json`, sev=8) — Five short linear claims, each a full sentence
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x + 6 = 14`
   - sample (tactical[0]/micro_display): `2x = 14 - 6`
   - sample (tactical[0]/micro_display): `14 - 6 = 8`

118. **MATH 4.02** (`math-ch4-cases.json`, sev=8) — What each inverse step leaves
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x + 5 = 11`
   - sample (tactical[0]/micro_display): `11 - 5 = 6`
   - sample (tactical[0]/micro_display): `x = 6`

119. **MATH 4.03** (`math-ch4-cases.json`, sev=8) — A number, said in words
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x + 4 = 11`
   - sample (tactical[0]/micro_display): `11 - 4 = 7`
   - sample (tactical[0]/micro_display): `x = 7`

120. **MATH 4.04** (`math-ch4-cases.json`, sev=8) — Brackets before isolating
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x + 6 = 14`
   - sample (tactical[0]/micro_display): `2x = 14 - 6`
   - sample (tactical[0]/micro_display): `14 - 6 = 8`

121. **MATH 4.05** (`math-ch4-cases.json`, sev=8) — Fractions that clear in one move
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 20`
   - sample (tactical[1]/micro_display): `x = 12`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

122. **MATH 4.06** (`math-ch4-cases.json`, sev=8) — Short stories that close on a number
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P = 2(4 + 7)`
   - sample (tactical[0]/micro_display): `P = 22`
   - sample (tactical[1]/micro_display): `P = 24`

123. **MATH 4.07** (`math-ch4-cases.json`, sev=8) — Unknowns on both sides
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3 = x - 5`
   - sample (tactical[0]/micro_display): `x = 8`
   - sample (tactical[0]/micro_display): `16 + 3 = 19`

124. **MATH 4.08** (`math-ch4-cases.json`, sev=8) — Two fractions, one unknown
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3x + 2x = 30`
   - sample (tactical[0]/micro_display): `5x = 30`
   - sample (tactical[0]/micro_display): `x = 6`

125. **MATH 4.09** (`math-ch4-cases.json`, sev=8) — Five closed stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `4x + 6 = 22`
   - sample (tactical[0]/micro_display): `4x = 22 - 6`
   - sample (tactical[0]/micro_display): `22 - 6 = 16`

126. **MATH 4.10** (`math-ch4-cases.json`, sev=8) — One solution, none, or every $x$
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x + 3 = x + 5`
   - sample (tactical[0]/micro_display): `3 = 5`
   - sample (tactical[0]/adjacent_micro_displays): `x + 3 = x + 5 || 3 = 5`

127. **MATH 4.11** (`math-ch4-cases.json`, sev=8) — Ages, coins, and a tank that is not yet full
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `s = 20`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `3n + 6 = 75`

128. **MATH 4.13** (`math-ch4-cases.json`, sev=8) — Wire around a garden, angles in a triangle
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3b + 10 = 40`
   - sample (tactical[0]/micro_display): `3b = 30`
   - sample (tactical[0]/micro_display): `b = 10`

129. **MATH 4.14** (`math-ch4-cases.json`, sev=8) — Five separate shopping bills
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5x + 6 = 21`
   - sample (tactical[0]/micro_display): `5x = 21 - 6`
   - sample (tactical[0]/micro_display): `21 - 6 = 15`

130. **MATH 4.15** (`math-ch4-cases.json`, sev=8) — Five separate percentage and dilution stories
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `V = 10`
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/micro_display): `8 + 2 = 10`

131. **MATH 4.17** (`math-ch4-cases.json`, sev=8) — A rod, a recipe, and two-fifths of a number
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x = 180`
   - sample (tactical[0]/micro_display): `x = 90`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

132. **MATH 4.18** (`math-ch4-cases.json`, sev=8) — Five separate fractional linear equations
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5x + 5 = 20`
   - sample (tactical[0]/micro_display): `5x = 20 - 5`
   - sample (tactical[0]/micro_display): `20 - 5 = 15`

133. **MATH 4.19** (`math-ch4-cases.json`, sev=8) — Five separate wage, parts, and overtime bills
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h - 3 = 2`
   - sample (tactical[0]/micro_display): `h = 5`
   - sample (tactical[0]/adjacent_micro_displays): `h - 3 = 2 || h = 5`

134. **MATH 4.21** (`math-ch4-cases.json`, sev=8) — Five separate age and consecutive-number stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2s = 20`
   - sample (tactical[0]/micro_display): `s = 10`
   - sample (tactical[0]/adjacent_micro_displays): `2s = 20 || s = 10`

135. **MATH 4.23** (`math-ch4-cases.json`, sev=8) — Five separate mixing and alloy stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `40 + 10 = 50`
   - sample (tactical[1]/micro_display): `x = 18`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

136. **MATH 4.24** (`math-ch4-cases.json`, sev=8) — Five separate path, average-speed, and prize stories
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `6w = 108`
   - sample (tactical[0]/micro_display): `w = 18`
   - sample (tactical[0]/adjacent_micro_displays): `6w = 108 || w = 18`

137. **MATH 4.26** (`math-ch4-cases.json`, sev=8) — Five separate two-speed journey stories
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `40t = 120`
   - sample (tactical[0]/micro_display): `t = 3`
   - sample (tactical[0]/adjacent_micro_displays): `40t = 120 || t = 3`

138. **MATH 4.27** (`math-ch4-cases.json`, sev=8) — Five separate race-handicap and garrison stories
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `A : B = 5 : 4`
   - sample (tactical[3]/micro_display): `B : C = 4 : 3`
   - sample (tactical[3]/micro_display): `A : C = 5 : 3`

139. **MATH 4.28** (`math-ch4-cases.json`, sev=8) — Five separate nested linear word equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `15 = x`
   - sample (tactical[1]/micro_display): `x + 5 = 2x - 6`
   - sample (tactical[1]/micro_display): `11 = x`

140. **MATH 4.29** (`math-ch4-cases.json`, sev=8) — Nested remainders, reversed digits, and a delayed leak
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 90`
   - sample (tactical[1]/micro_display): `u + 2 + u = 12`
   - sample (tactical[1]/micro_display): `2u = 10`

141. **MATH 4.31** (`math-ch4-cases.json`, sev=8) — A reverse that is $9$ more, a current, and a geometric prize
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `9b - 9a = 9`
   - sample (tactical[0]/micro_display): `b - a = 1`
   - sample (tactical[0]/adjacent_micro_displays): `9b - 9a = 9 || b - a = 1`

142. **MATH 4.32** (`math-ch4-cases.json`, sev=8) — Evaporation then a richer stock, a delayed meeting, and successive percentages
   - fields: tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `40 = 2s`
   - sample (tactical[2]/micro_display): `s = 20`
   - sample (tactical[2]/adjacent_micro_displays): `40 = 2s || s = 20`

143. **MATH 4.33** (`math-ch4-cases.json`, sev=8) — Four nested remainders, a late third pipe, and a $90\%$ stock
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 60`
   - sample (tactical[1]/micro_display): `3 = 2 + w`
   - sample (tactical[1]/micro_display): `w = 1`

144. **MATH 4.39** (`math-ch4-cases.json`, sev=8) — Parameter-Dependent Linear Equation with Fractional Coefficients
   - fields: solution_overview, tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `5 - a = 0`
   - sample (tactical[0]/micro_display): `a = 5`

145. **MATH 4.40** (`math-ch4-cases.json`, sev=8) — Parameterized Two-Leg Transport Schedule
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `-15t = 0`
   - sample (tactical[2]/micro_display): `t = 0`

146. **MATH 4.45** (`math-ch4-cases.json`, sev=8) — Sensor Calibration via Baseline Average
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `-5x = 0`
   - sample (tactical[1]/micro_display): `x = 0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

147. **MATH 4.46** (`math-ch4-cases.json`, sev=8) — Linear Scale Conversion for Vendor Ratings
   - fields: solution_overview, tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `50 = 30 + b`
   - sample (solution_overview/micro_display): `b = 20`
   - sample (solution_overview/adjacent_micro_displays): `50 = 30 + b || b = 20`

148. **MATH 4.47** (`math-ch4-cases.json`, sev=8) — Break-Even Modeling Under Regulatory Shifts
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[0]/micro_display): `-2 - 3 = -5`
   - sample (tactical[0]/micro_display): `0 = -5`

149. **MATH 4.48** (`math-ch4-cases.json`, sev=8) — Parametric Fractional Linear Equation
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `2x - 4 = k`
   - sample (solution_overview/micro_display): `2x = k + 4`
   - sample (solution_overview/adjacent_micro_displays): `2x - 4 = k || 2x = k + 4`

150. **MATH 4.50** (`math-ch4-cases.json`, sev=8) — Parametric Linear Equation with Integer Solutions
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `k + 1 = 0`
   - sample (tactical[0]/micro_display): `k = -1`

151. **MATH 4.54** (`math-ch4-cases.json`, sev=8) — Parametric Linear Equation with Decimals
   - fields: solution_overview, tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `-25 + 25 = 0`
   - sample (tactical[0]/micro_display): `0 = 0`

152. **MATH 4.55** (`math-ch4-cases.json`, sev=8) — Regional Logistics Hub Balancing
   - fields: solution_overview, tactical[0]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `x = 36 - 4`
   - sample (tactical[0]/micro_display): `36 - 4 = 32`

153. **MATH 4.60** (`math-ch4-cases.json`, sev=8) — When a product is zero, a factor is zero
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x - 2 = 0`
   - sample (tactical[0]/micro_display): `x - 5 = 0`
   - sample (tactical[0]/micro_display): `2 + 5 = 7`

154. **MATH 4.61** (`math-ch4-cases.json`, sev=8) — Five separate square and consecutive-integer stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `s^{2} = 81`
   - sample (tactical[0]/micro_display): `s = \pm 9`
   - sample (tactical[0]/adjacent_micro_displays): `s^{2} = 81 || s = \pm 9`

155. **MATH 4.62** (`math-ch4-cases.json`, sev=8) — A repeated root and a discriminant of zero
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x(x - 4) = 0`
   - sample (tactical[2]/micro_display): `16 - 16 = 0`
   - sample (tactical[2]/micro_display): `\Delta = 0`

156. **MATH 4.64** (`math-ch4-cases.json`, sev=8) — Five separate quadratic root and discriminant claims
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `4 - 20 = -16`
   - sample (tactical[2]/micro_display): `16 - 16 = 0`

157. **MATH 4.65** (`math-ch4-cases.json`, sev=8) — Five separate rectangle and consecutive-integer stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `6 + 2 = 8`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `6 + 7 = 13`

158. **MATH 4.68** (`math-ch4-cases.json`, sev=8) — Five separate Pythagoras and factoring stories
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[2]/micro_display): `3 = 4 = 5`
   - sample (tactical[4]/micro_display): `3`

159. **MATH 4.69** (`math-ch4-cases.json`, sev=8) — Five separate discriminant and root-count claims
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `36 - 40 = -4`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `4 - 4 = 0`

160. **MATH 4.73** (`math-ch4-cases.json`, sev=8) — Five separate integer-pair product stories
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[2]/micro_display): `11 + 18 =29`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

161. **MATH 4.75** (`math-ch4-cases.json`, sev=8) — Five separate projectile and $t^{2}$ motion stories
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `20 - 5 = 15`
   - sample (tactical[0]/micro_display): `h(1) = 15`
   - sample (tactical[0]/adjacent_micro_displays): `20 - 5 = 15 || h(1) = 15`

162. **MATH 4.76** (`math-ch4-cases.json`, sev=8) — Five separate Vieta sum-and-product stories
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[1]/micro_display): `8 - 4 = 4`
   - sample (tactical[2]/micro_display): `t = 2`

163. **MATH 4.78** (`math-ch4-cases.json`, sev=8) — Five separate perimeter-and-area rectangle stories
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `L + w = 20`
   - sample (tactical[0]/micro_display): `t = 12`
   - sample (tactical[0]/micro_display): `t = 8`

164. **MATH 4.79** (`math-ch4-cases.json`, sev=8) — Five separate age-product stories
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `8 + 12 = 20`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

165. **MATH 4.80** (`math-ch4-cases.json`, sev=8) — Five separate ladder and Pythagoras stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `6^{2} = 36`
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/micro_display): `b = 12`

166. **MATH 4.82** (`math-ch4-cases.json`, sev=8) — Five separate biquadratic claims
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u = 9`
   - sample (tactical[0]/micro_display): `u = 1`
   - sample (tactical[0]/adjacent_micro_displays): `u = 9 || u = 1`

167. **MATH 4.84** (`math-ch4-cases.json`, sev=8) — Five separate together-and-alone work stories
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `t = 6`
   - sample (tactical[0]/micro_display): `t = -4`
   - sample (tactical[0]/adjacent_micro_displays): `t = 6 || t = -4`

168. **MATH 4.86** (`math-ch4-cases.json`, sev=8) — Five separate hard quadratics from different stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `u = 4`
   - sample (tactical[0]/micro_display): `u = 9`
   - sample (tactical[0]/adjacent_micro_displays): `u = 4 || u = 9`

169. **MATH 4.88** (`math-ch4-cases.json`, sev=8) — A $10$-$24$-$26$ ladder, a slip, and a vertex
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h = 24`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

170. **MATH 4.89** (`math-ch4-cases.json`, sev=8) — A $7$ hour gap, a $5$-$12$-$13$ rectangle, and the last $3$ seconds
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `5^{2} = 25`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

171. **MATH 4.90** (`math-ch4-cases.json`, sev=8) — Legs differing by $4$, a $12$-$16$-$20$ area, and an inner $24$ by $16$
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `b = 16`
   - sample (tactical[3]/micro_display): `h = 48 - 18`

172. **MATH 4.92** (`math-ch4-cases.json`, sev=8) — Parameter-Dependent Quadratic Equation and Nature of Roots
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `D = 24 - 4m`
   - sample (solution_overview/micro_display): `D = 4(6-m)`
   - sample (solution_overview/micro_display): `4x + 5 = 0`

173. **MATH 4.98** (`math-ch4-cases.json`, sev=8) — Vertex Form and Parametric Analysis of Operating Profit
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[4]/micro_display): `x = k + 1`

174. **MATH 4.100** (`math-ch4-cases.json`, sev=8) — Perimeter and Area of a Rectangular Depot
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `d^2 = 272`

175. **MATH 4.102** (`math-ch4-cases.json`, sev=8) — Roots and Reciprocals of a Parameterized Quadratic Equation
   - fields: solution_overview, tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `k + 2 = k - 1`
   - sample (tactical[1]/micro_display): `2 = -1`

176. **MATH 4.104** (`math-ch4-cases.json`, sev=8) — Parametric Quadratic Family and Root Shifts
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `k^2 - 4 = 0`
   - sample (tactical[1]/micro_display): `2x - 3 = 0`
   - sample (tactical[4]/micro_display): `x(5-x)=0`

177. **MATH 4.110** (`math-ch4-cases.json`, sev=8) — Comparing Parametric Quadratic Equations
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/micro_display): `S_1 = m+3`
   - sample (tactical[1]/micro_display): `S_2 = 2m`

178. **MATH 4.113** (`math-ch4-cases.json`, sev=8) — Consecutive Integer Stage Allocation and Quadratic Models
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

179. **MATH 4.114** (`math-ch4-cases.json`, sev=8) — Parametric Analysis of a Substituted Quadratic Form
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `1 + 2 + c = 0`
   - sample (tactical[1]/micro_display): `c = -3`
   - sample (tactical[1]/adjacent_micro_displays): `1 + 2 + c = 0 || c = -3`

180. **MATH 4.117** (`math-ch4-cases.json`, sev=8) — Five separate rational equations with a hole
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 12`
   - sample (tactical[1]/micro_display): `12 = x`
   - sample (tactical[2]/micro_display): `5 = x`

181. **MATH 4.118** (`math-ch4-cases.json`, sev=8) — Five separate rational proportions
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5x = 2x + 6`
   - sample (tactical[0]/micro_display): `3x = 6`
   - sample (tactical[0]/micro_display): `x = 2`

182. **MATH 4.120** (`math-ch4-cases.json`, sev=8) — Five separate radical stories from squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `4^{2} = 16`
   - sample (tactical[1]/micro_display): `x + 3 = 16`
   - sample (tactical[1]/micro_display): `16 - 3 = 13`

183. **MATH 4.121** (`math-ch4-cases.json`, sev=8) — Five independent absolute-value distance equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x - 7 = 4`
   - sample (tactical[0]/micro_display): `4 + 7 = 11`
   - sample (tactical[0]/micro_display): `x = 11`

184. **MATH 4.122** (`math-ch4-cases.json`, sev=8) — Five separate packing and reciprocal stories
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5 = x - 1`
   - sample (tactical[0]/micro_display): `x = 6`
   - sample (tactical[0]/adjacent_micro_displays): `5 = x - 1 || x = 6`

185. **MATH 4.123** (`math-ch4-cases.json`, sev=8) — Five independent radical equations from square roots
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x + 7 = 25`
   - sample (tactical[0]/micro_display): `25 - 7 = 18`
   - sample (tactical[0]/micro_display): `x = 18`

186. **MATH 4.124** (`math-ch4-cases.json`, sev=8) — Five independent square-root equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `4x + 5 = 49`
   - sample (tactical[0]/micro_display): `4x = 49 - 5`
   - sample (tactical[0]/micro_display): `49 - 5 = 44`

187. **MATH 4.125** (`math-ch4-cases.json`, sev=8) — Five separate absolute-value readings
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x - 4 = 6`
   - sample (tactical[0]/micro_display): `2x = 6 + 4`
   - sample (tactical[0]/micro_display): `6 + 4 = 10`

188. **MATH 4.126** (`math-ch4-cases.json`, sev=8) — Five separate rational equations, each with a hole
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 3(x - 1)`
   - sample (tactical[0]/micro_display): `x = 3x - 3`
   - sample (tactical[0]/micro_display): `2x = 3`

189. **MATH 4.127** (`math-ch4-cases.json`, sev=8) — Five separate radical equations, including extras after squaring
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x - 3 = 1`
   - sample (tactical[0]/micro_display): `1 + 3 = 4`
   - sample (tactical[0]/micro_display): `x = 4`

190. **MATH 4.128** (`math-ch4-cases.json`, sev=8) — Five separate absolute-value readings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x - 4 = 6`
   - sample (tactical[0]/micro_display): `6 + 4 = 10`
   - sample (tactical[0]/micro_display): `x = 10`

191. **MATH 4.130** (`math-ch4-cases.json`, sev=8) — Five distance-on-a-line claims
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `6 - 2x = 8`
   - sample (tactical[0]/micro_display): `x = -1`
   - sample (tactical[0]/micro_display): `2x - 6 = 8`

192. **MATH 4.131** (`math-ch4-cases.json`, sev=8) — Five independent rational proportion equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `-x = 3x - 18`
   - sample (tactical[0]/micro_display): `-4x = -18`
   - sample (tactical[0]/adjacent_micro_displays): `-x = 3x - 18 || -4x = -18`

193. **MATH 4.132** (`math-ch4-cases.json`, sev=8) — Five independent reciprocal equations
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `3x + 3 = 2x`
   - sample (tactical[2]/micro_display): `x = -3`

194. **MATH 4.136** (`math-ch4-cases.json`, sev=8) — Five independent absolute-value equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3 - 1 = 3x`
   - sample (tactical[0]/micro_display): `4 = x`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

195. **MATH 4.137** (`math-ch4-cases.json`, sev=8) — A reciprocal difference, a radical extra, and three more
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x^{2} = 9`
   - sample (tactical[0]/micro_display): `x = 3`
   - sample (tactical[0]/micro_display): `x = -3`

196. **MATH 4.138** (`math-ch4-cases.json`, sev=8) — Five independent rational difference equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x + 4 = -1`
   - sample (tactical[0]/micro_display): `-1 - 4 = -5`
   - sample (tactical[0]/micro_display): `x = -5`

197. **MATH 4.139** (`math-ch4-cases.json`, sev=8) — A $2$ m isolate-and-square gap, posts $1$ and $7$, and a radical extra
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x + 1 = 16`
   - sample (tactical[0]/micro_display): `16 - 1 = 15`
   - sample (tactical[0]/micro_display): `x = 15`

198. **MATH 4.140** (`math-ch4-cases.json`, sev=8) — A sum of two roots equal to $9$, three regions, and a $1$ m gap
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a - b = 1`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[2]/micro_display): `9 - 3x = 9`

199. **MATH 4.141** (`math-ch4-cases.json`, sev=8) — A $1$ m radical gap, a two-modulus sum, and a cancelled hole
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x - 2 = 9`
   - sample (tactical[0]/micro_display): `9 + 2 = 11`
   - sample (tactical[0]/micro_display): `x = 11`

200. **MATH 4.142** (`math-ch4-cases.json`, sev=8) — A sum of roots equal to $7$, equal abs-values, and a two-fraction mix
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `3 - 2x = x + 4`
   - sample (tactical[1]/micro_display): `-3x = 1`
   - sample (tactical[1]/micro_display): `7 = x`

201. **MATH 4.143** (`math-ch4-cases.json`, sev=8) — A $2$ m gap recovering $25$, posts adding to $12$, and $\sqrt{5x + 1}$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 25`
   - sample (tactical[0]/micro_display): `7 - 5 = 2`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

202. **MATH 4.144** (`math-ch4-cases.json`, sev=8) — Solvability of a Rational Equation
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x^2 + 2 = 6`
   - sample (solution_overview/micro_display): `x^2 - 4 = 0`
   - sample (solution_overview/adjacent_micro_displays): `x^2 + 2 = 6 || x^2 - 4 = 0`

203. **MATH 4.148** (`math-ch4-cases.json`, sev=8) — Absolute-Value Equation with Case Analysis
   - fields: solution_overview, tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x^2 - 5x = 0`
   - sample (solution_overview/micro_display): `x(x - 5) = 0`
   - sample (solution_overview/adjacent_micro_displays): `x^2 - 5x = 0 || x(x - 5) = 0`

204. **MATH 4.149** (`math-ch4-cases.json`, sev=8) — Absolute Value Equation with a Linear Right-Hand Side
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x^2 - 3x = 0`
   - sample (solution_overview/micro_display): `x(x - 3) = 0`
   - sample (solution_overview/adjacent_micro_displays): `x^2 - 3x = 0 || x(x - 3) = 0`

205. **MATH 4.150** (`math-ch4-cases.json`, sev=8) — Analysis of a Nested Absolute Value Equation
   - fields: solution_overview, tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x = 9`
   - sample (solution_overview/micro_display): `x = -5`
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`

206. **MATH 4.153** (`math-ch4-cases.json`, sev=8) — Parametric Rational Equation and Extraneous Roots
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `a^2 - 3a = 0`
   - sample (tactical[2]/micro_display): `a(a - 3) = 0`

207. **MATH 4.154** (`math-ch4-cases.json`, sev=8) — Cube-Root Radical Equation Analysis
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `u - v = 1`
   - sample (solution_overview/micro_display): `3uv = 6`
   - sample (solution_overview/micro_display): `uv = 2`

208. **MATH 4.156** (`math-ch4-cases.json`, sev=8) — Solvability of a Multi-Absolute-Value Equation
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `-4x = -5`
   - sample (solution_overview/micro_display): `-x + 5 = x - 2`
   - sample (solution_overview/micro_display): `-2x = -7`

209. **MATH 4.157** (`math-ch4-cases.json`, sev=8) — Data Pipeline Work-Rate and Equation Models
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x^2 + 8 = 12`
   - sample (tactical[0]/micro_display): `x^2 = 4`
   - sample (tactical[0]/adjacent_micro_displays): `x^2 + 8 = 12 || x^2 = 4`

210. **MATH 4.159** (`math-ch4-cases.json`, sev=8) — Rational Equation with Squared Denominator and Absolute Value
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `3 - 2u = u^2`
   - sample (tactical[1]/micro_display): `1 + 3 = 4`
   - sample (tactical[2]/micro_display): `u_1 = 1`

211. **MATH 4.160** (`math-ch4-cases.json`, sev=8) — Rational Equation with Factorisable Denominators
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[0]/micro_display): `x = 2`
   - sample (tactical[0]/micro_display): `x = -1`

212. **MATH 4.162** (`math-ch4-cases.json`, sev=8) — Cost-Recovery Radical Equation
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `2x + 14 = 25`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `2x + 14 = 25`

213. **MATH 4.164** (`math-ch4-cases.json`, sev=8) — Rational Equation and Structural Variations
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `2 + 7 = 9`
   - sample (tactical[3]/micro_display): `2x - 5 = x - 1`

214. **MATH 4.165** (`math-ch4-cases.json`, sev=8) — Round-Trip Average Speed and Algebraic Equation Forms
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `15v = 320`

215. **MATH 4.166** (`math-ch4-cases.json`, sev=8) — Radical Break-Even Equation
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x^2 - 3x = 0`
   - sample (solution_overview/micro_display): `x(x - 3) = 0`
   - sample (solution_overview/adjacent_micro_displays): `x^2 - 3x = 0 || x(x - 3) = 0`

216. **MATH 4.167** (`math-ch4-cases.json`, sev=8) — Symmetric Solutions of an Absolute-Value Equation
   - fields: solution_overview
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `2u - 4 = u + 1`
   - sample (solution_overview/micro_display): `u = 5`
   - sample (solution_overview/micro_display): `4 - 2u = u + 1`

217. **MATH 4.168** (`math-ch4-cases.json`, sev=8) — Solvability and Extraneous Roots of a Radical Equation
   - fields: solution_overview, tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `u^2 = x + 3`
   - sample (solution_overview/micro_display): `x = u^2 - 3`
   - sample (solution_overview/micro_display): `x + 3 = 9`

218. **MATH 4.173** (`math-ch4-cases.json`, sev=8) — Domain decides the answer
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x^2 - 4x = 0`
   - sample (solution_overview/micro_display): `x(x - 4) = 0`
   - sample (solution_overview/adjacent_micro_displays): `x^2 - 4x = 0 || x(x - 4) = 0`

219. **MATH 4.178** (`math-ch4-cases.json`, sev=8) — A quadratic hidden behind base two
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `x_1 = 0`
   - sample (tactical[2]/micro_display): `x_2 = 2`

220. **MATH 4.181** (`math-ch4-cases.json`, sev=8) — Two logarithms with related bases
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `t = 4`
   - sample (tactical[1]/micro_display): `2 + 4 = 6`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

221. **MATH 4.182** (`math-ch4-cases.json`, sev=8) — A rational equation with a factored denominator
   - fields: tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `5x + 1 = 5`
   - sample (tactical[2]/micro_display): `5x + 1 = 5`
   - sample (tactical[2]/micro_display): `5x = 5 - 1`

222. **MATH 4.183** (`math-ch4-cases.json`, sev=8) — A small exponential system
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x + y = 5`
   - sample (solution_overview/micro_display): `x - y = 1`
   - sample (solution_overview/micro_display): `2x = 6`

223. **MATH 4.184** (`math-ch4-cases.json`, sev=8) — Bounds on solutions of composite logarithmic equations
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x = 10^k`
   - sample (tactical[0]/micro_display): `\log x = 2`
   - sample (tactical[1]/micro_display): `\log x = 1`

224. **MATH 4.189** (`math-ch4-cases.json`, sev=8) — A linear equation controlled by a parameter
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2 - 2 = 0`
   - sample (tactical[1]/micro_display): `-2 - 2 = -4`
   - sample (tactical[2]/micro_display): `3 - 2 = 1`

225. **MATH 4.194** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x+1=7`
   - sample (tactical[0]/micro_display): `2x = 7 - 1`
   - sample (tactical[0]/micro_display): `7 - 1 = 6`

226. **MATH 4.195** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3+6 = 9`
   - sample (tactical[0]/micro_display): `s=9`
   - sample (tactical[0]/adjacent_micro_displays): `3+6 = 9 || s=9`

227. **MATH 4.196** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x+2=2x-2`
   - sample (tactical[0]/micro_display): `2+2 = 2x-x`
   - sample (tactical[0]/micro_display): `x=4`

228. **MATH 4.197** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2^{x}=4`
   - sample (tactical[0]/micro_display): `4=2^{2}`
   - sample (tactical[0]/micro_display): `x=2`

229. **MATH 4.198** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x+3=9`
   - sample (tactical[0]/micro_display): `2x = 9 - 3`
   - sample (tactical[0]/micro_display): `9 - 3 = 6`

230. **MATH 4.199** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 6
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3+6 = 9`
   - sample (tactical[0]/micro_display): `s=9`
   - sample (tactical[0]/adjacent_micro_displays): `3+6 = 9 || s=9`

231. **MATH 4.200** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x+2=2x-2`
   - sample (tactical[0]/micro_display): `2+2 = 2x-x`
   - sample (tactical[0]/micro_display): `x=4`

232. **MATH 4.201** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2^{x}=4`
   - sample (tactical[0]/micro_display): `4=2^{2}`
   - sample (tactical[0]/micro_display): `x=2`

233. **MATH 4.202** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 9
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x+5=11`
   - sample (tactical[0]/micro_display): `2x = 11 - 5`
   - sample (tactical[0]/micro_display): `11 - 5 = 6`

234. **MATH 4.203** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3+6 = 9`
   - sample (tactical[0]/micro_display): `s=9`
   - sample (tactical[0]/adjacent_micro_displays): `3+6 = 9 || s=9`

235. **MATH 4.204** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 11
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `4x=80`
   - sample (solution_overview/micro_display): `x=20`
   - sample (solution_overview/adjacent_micro_displays): `4x=80 || x=20`

236. **MATH 4.205** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 12
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q-4=0`
   - sample (tactical[0]/micro_display): `q=4`
   - sample (tactical[0]/micro_display): `q-10=0`

237. **MATH 4.206** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 13
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x=6`
   - sample (solution_overview/micro_display): `x=-4`
   - sample (solution_overview/adjacent_micro_displays): `x=6 || x=-4`

238. **MATH 4.207** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 14
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `t/3=2`
   - sample (solution_overview/micro_display): `t=6`
   - sample (solution_overview/adjacent_micro_displays): `t/3=2 || t=6`

239. **MATH 4.208** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 15
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `5x=110`
   - sample (solution_overview/micro_display): `x=22`
   - sample (solution_overview/adjacent_micro_displays): `5x=110 || x=22`

240. **MATH 4.209** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 16
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q-5=0`
   - sample (tactical[0]/micro_display): `q=5`
   - sample (tactical[0]/micro_display): `q-11=0`

241. **MATH 4.210** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 17
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x=12`
   - sample (solution_overview/micro_display): `x=-8`
   - sample (solution_overview/adjacent_micro_displays): `x=12 || x=-8`

242. **MATH 4.211** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 18
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `t/3=2`
   - sample (solution_overview/micro_display): `t=6`
   - sample (solution_overview/adjacent_micro_displays): `t/3=2 || t=6`

243. **MATH 4.212** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 19
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `6x=144`
   - sample (solution_overview/micro_display): `x=24`
   - sample (solution_overview/adjacent_micro_displays): `6x=144 || x=24`

244. **MATH 4.213** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 20
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q-6=0`
   - sample (tactical[0]/micro_display): `q=6`
   - sample (tactical[0]/micro_display): `q-12=0`

245. **MATH 4.215** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 22
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `s = 20`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/micro_display): `\log 10 = 1`

246. **MATH 4.217** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 24
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3n + 6 = 75`
   - sample (tactical[0]/micro_display): `n = 23`
   - sample (tactical[0]/adjacent_micro_displays): `3n + 6 = 75 || n = 23`

247. **MATH 4.218** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 25
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `w = 13`
   - sample (tactical[1]/micro_display): `30t = 90`
   - sample (tactical[1]/micro_display): `t = 3`

248. **MATH 4.224** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 31
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3x - 2 = 28`
   - sample (tactical[0]/micro_display): `3x = 28 + 2`
   - sample (tactical[0]/micro_display): `x = 10`

249. **MATH 4.230** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 37
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `32 = 2^{5}`
   - sample (tactical[3]/micro_display): `a = 5000`
   - sample (tactical[4]/micro_display): `2x + 1 = x + 8`

250. **MATH 4.231** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 38
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `w = 1.25`
   - sample (tactical[2]/micro_display): `L = 1`
   - sample (tactical[2]/micro_display): `x = 10`

251. **MATH 4.234** (`math-ch4-cases.json`, sev=8) — Exam-style tasks - 41
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `w = 0.6`
   - sample (tactical[3]/micro_display): `0 = 0`
   - sample (tactical[4]/micro_display): `4x + 6 = 22`

252. **MATH 5.61** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 81`
   - sample (tactical[0]/micro_display): `y = 59`
   - sample (tactical[0]/dense_micro_chain): `16 micro-ish displays`

253. **MATH 5.62** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1x+1y=50`
   - sample (tactical[0]/micro_display): `x = 20`
   - sample (tactical[0]/micro_display): `y = 30`

254. **MATH 5.63** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1x-4y=0`
   - sample (tactical[0]/micro_display): `1x-2y=12`
   - sample (tactical[0]/micro_display): `\Delta = 2`

255. **MATH 5.64** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1x+1y=28`
   - sample (tactical[0]/micro_display): `1x-1y=16`
   - sample (tactical[0]/micro_display): `x = 22`

256. **MATH 5.65** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3x+9y=75`
   - sample (tactical[0]/micro_display): `1x+3y=28`
   - sample (tactical[0]/micro_display): `\Delta = 0`

257. **MATH 5.66** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 6
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 65`
   - sample (tactical[0]/micro_display): `y = 85`
   - sample (tactical[0]/dense_micro_chain): `16 micro-ish displays`

258. **MATH 5.68** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1x-1y=27`
   - sample (tactical[0]/micro_display): `2x-5y=27`
   - sample (tactical[0]/micro_display): `x = 36`

259. **MATH 5.69** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 9
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1x+1y=84`
   - sample (tactical[0]/micro_display): `1x-2y=0`
   - sample (tactical[0]/micro_display): `x = 56`

260. **MATH 5.70** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2x+3y=63`
   - sample (tactical[0]/micro_display): `\Delta = 8`
   - sample (tactical[0]/micro_display): `x = 12`

261. **MATH 5.72** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 12
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `25x = 1050`
   - sample (tactical[0]/micro_display): `x + y = 70`
   - sample (tactical[2]/micro_display): `x + y = 70`

262. **MATH 5.73** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 13
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `2x = 14`
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[0]/micro_display): `x + y = 11`

263. **MATH 5.74** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 14
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `2x = 120`
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `x + y = 108`

264. **MATH 5.75** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 15
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `20 + 25 = 45`
   - sample (tactical[4]/micro_display): `2x + 5y = 40`

265. **MATH 5.76** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 16
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `9x = 540`
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `x + y = 160`

266. **MATH 5.77** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 17
   - fields: solution_overview, tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `12x = 240`
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `x + y = 50`

267. **MATH 5.78** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 18
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `6x = 48`
   - sample (solution_overview/micro_display): `x = 8`
   - sample (solution_overview/micro_display): `83 - 38 = 45`

268. **MATH 5.79** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 19
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `2x = 42`
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `x + y = 25`

269. **MATH 5.80** (`math-ch5-exam.json`, sev=8) — Exam-style tasks - 20
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `-7y = -119`
   - sample (solution_overview/micro_display): `7y = 119`
   - sample (solution_overview/adjacent_micro_displays): `-7y = -119 || 7y = 119`

270. **MATH 6.38** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=3`

271. **MATH 6.39** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/micro_display): `x=-1`

272. **MATH 6.40** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=4`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

273. **MATH 6.41** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 4
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/adjacent_micro_displays): `x=0 || x=4`

274. **MATH 6.42** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/adjacent_micro_displays): `x=2 || x=4`

275. **MATH 6.44** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 7
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/adjacent_micro_displays): `x=-1 || x=3`

276. **MATH 6.45** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 8
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `x=-4`
   - sample (tactical[1]/micro_display): `x=2`

277. **MATH 6.46** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 9
   - fields: tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x = 1`
   - sample (tactical[3]/micro_display): `|2-5| = 3`
   - sample (tactical[3]/adjacent_micro_displays): `x = 1 || |2-5| = 3`

278. **MATH 6.47** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 10
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `x=1`
   - sample (tactical[2]/micro_display): `x=3`
   - sample (tactical[2]/micro_display): `x=-1`

279. **MATH 6.48** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 11
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/micro_display): `x=1`

280. **MATH 6.49** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 12
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[1]/micro_display): `x=3`
   - sample (tactical[1]/adjacent_micro_displays): `x=1 || x=3`

281. **MATH 6.51** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 14
   - fields: tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=-2`

282. **MATH 6.52** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 15
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[1]/micro_display): `x=5`
   - sample (tactical[1]/adjacent_micro_displays): `x=1 || x=5`

283. **MATH 6.53** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 16
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=6`
   - sample (tactical[0]/adjacent_micro_displays): `x=2 || x=6`

284. **MATH 6.54** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 17
   - fields: tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `x=4`
   - sample (tactical[3]/micro_display): `x=1`

285. **MATH 6.56** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 19
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `x=2`
   - sample (tactical[2]/micro_display): `x=4`
   - sample (tactical[2]/micro_display): `x=1`

286. **MATH 6.57** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 20
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-2`
   - sample (tactical[1]/micro_display): `x=3`

287. **MATH 6.58** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 21
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=5`
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[1]/micro_display): `x=9`

288. **MATH 6.59** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 22
   - fields: tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `x=1`
   - sample (tactical[2]/micro_display): `x=3`
   - sample (tactical[2]/adjacent_micro_displays): `x=1 || x=3`

289. **MATH 6.60** (`math-ch6-inequalities.json`, sev=8) — Compound & Special Inequalities — 23
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=6`
   - sample (tactical[0]/micro_display): `x=1`

290. **MATH 6.66** (`math-ch6-inequalities.json`, sev=8) — Greenhouse Temperature Safety
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `C=30`
   - sample (tactical[4]/micro_display): `54=F-32`
   - sample (tactical[4]/micro_display): `F=86`

291. **MATH 6.82** (`math-ch6-inequalities.json`, sev=8) — Food Truck Break-Even
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P=5x-150`
   - sample (tactical[0]/micro_display): `x=70`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

292. **MATH 6.86** (`math-ch6-inequalities.json`, sev=8) — Comparing Three Internet Plans
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `A=30`
   - sample (tactical[0]/micro_display): `10 + 10 = 20`
   - sample (tactical[0]/micro_display): `20 + 4 = 24`

293. **MATH 6.89** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 1
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x - 3=0`
   - sample (tactical[0]/micro_display): `x=3`

294. **MATH 6.90** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 2
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-3`
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=1`

295. **MATH 6.94** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 6
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-4`
   - sample (tactical[3]/micro_display): `x=1`
   - sample (tactical[3]/micro_display): `x + 2=0`

296. **MATH 6.95** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 7
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/adjacent_micro_displays): `x=-1 || x=1`

297. **MATH 6.96** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 8
   - fields: tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[1]/micro_display): `x - 3=0`
   - sample (tactical[1]/micro_display): `x=3`

298. **MATH 6.97** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 9
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-4`
   - sample (tactical[1]/micro_display): `x=-2`
   - sample (tactical[1]/micro_display): `x=2`

299. **MATH 6.99** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 11
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x-3=0`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/micro_display): `x+1=0`

300. **MATH 6.100** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 12
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/micro_display): `x=9`
   - sample (tactical[0]/adjacent_micro_displays): `x=3 || x=9`

301. **MATH 6.103** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 15
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x-4=0`
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/micro_display): `x+2=0`

302. **MATH 6.104** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/micro_display): `x=10`
   - sample (tactical[0]/adjacent_micro_displays): `x=4 || x=10`

303. **MATH 6.107** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 19
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x-5=0`
   - sample (tactical[0]/micro_display): `x=5`
   - sample (tactical[0]/micro_display): `x+3=0`

304. **MATH 6.108** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 20
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=5`
   - sample (tactical[0]/micro_display): `x=11`
   - sample (tactical[0]/adjacent_micro_displays): `x=5 || x=11`

305. **MATH 6.109** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 21
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `w=4`
   - sample (tactical[1]/micro_display): `h(3)=113`
   - sample (tactical[1]/micro_display): `h(9)=113`

306. **MATH 6.112** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 24
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x - 4=0`
   - sample (tactical[3]/micro_display): `x=4`
   - sample (tactical[3]/micro_display): `x + 3=0`

307. **MATH 6.113** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 25
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `9 + 8 = 17`
   - sample (tactical[1]/micro_display): `17 + 3 = 20`

308. **MATH 6.116** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 28
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `V(8) = 2.4`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `x=-3`

309. **MATH 6.117** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 29
   - fields: tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x=-3`
   - sample (tactical[3]/micro_display): `x=3`
   - sample (tactical[3]/micro_display): `x - 2=0`

310. **MATH 6.119** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 31
   - fields: tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `- x - 5=0`
   - sample (tactical[3]/micro_display): `x=-5`
   - sample (tactical[3]/micro_display): `x - 2=0`

311. **MATH 6.120** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 32
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `n = 50`
   - sample (tactical[3]/micro_display): `- x - 6=0`
   - sample (tactical[3]/micro_display): `x=-6`

312. **MATH 6.122** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 34
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `6 + 6 = 12`
   - sample (tactical[1]/micro_display): `12 + 5 = 17`
   - sample (tactical[1]/micro_display): `n = 16`

313. **MATH 6.123** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 35
   - fields: tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `n = 70`
   - sample (tactical[4]/micro_display): `2 x=0`
   - sample (tactical[4]/micro_display): `x=0`

314. **MATH 6.126** (`math-ch6-inequalities.json`, sev=8) — Exam-style tasks - 38
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `x=9`
   - sample (tactical[3]/micro_display): `n = 75`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

315. **MATH 7.01** (`math-ch7-linear-quadratic.json`, sev=8) — Vertex, Linear Rewrite, and Crossings of a Line and a Parabola
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `S=1`
   - sample (tactical[2]/micro_display): `S=(-1)+2`
   - sample (tactical[2]/micro_display): `S=1`

316. **MATH 7.04** (`math-ch7-linear-quadratic.json`, sev=8) — A Taxi Fare That Grows With the Distance
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `C(4)=17`
   - sample (tactical[0]/micro_display): `3x+5=17`
   - sample (tactical[0]/micro_display): `x=4`

317. **MATH 7.05** (`math-ch7-linear-quadratic.json`, sev=8) — Intercept Checklist
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(0)=0`
   - sample (tactical[0]/micro_display): `f(x)=5x`
   - sample (tactical[0]/adjacent_micro_displays): `f(0)=0 || f(x)=5x`

318. **MATH 7.06** (`math-ch7-linear-quadratic.json`, sev=8) — Simple Vertex Read
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(2)=0+3`
   - sample (tactical[0]/micro_display): `g(2)=3`
   - sample (tactical[0]/micro_display): `x=2`

319. **MATH 7.07** (`math-ch7-linear-quadratic.json`, sev=8) — Leading Coefficient Sign
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3`
   - sample (tactical[0]/micro_display): `g(x)=3`
   - sample (tactical[1]/micro_display): `0^{2}=0`

320. **MATH 7.08** (`math-ch7-linear-quadratic.json`, sev=8) — Two Easy Meetings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(0)=0`
   - sample (tactical[0]/micro_display): `g(0)=0`
   - sample (tactical[0]/micro_display): `g(0)=0`

321. **MATH 7.09** (`math-ch7-linear-quadratic.json`, sev=8) — A Ball Thrown Straight Upwards
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=2`

322. **MATH 7.10** (`math-ch7-linear-quadratic.json`, sev=8) — Factor Roots Quickly
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/micro_display): `g(-1)=0`

323. **MATH 7.11** (`math-ch7-linear-quadratic.json`, sev=8) — A Falling Line and Its Two Axis Crossings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `m=-2`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `s(0)=6`

324. **MATH 7.12** (`math-ch7-linear-quadratic.json`, sev=8) — Vieta Against a Line
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `S=5`
   - sample (tactical[0]/micro_display): `S=2+3`
   - sample (tactical[0]/adjacent_micro_displays): `S=5 || S=2+3`

325. **MATH 7.13** (`math-ch7-linear-quadratic.json`, sev=8) — Vertex Versus Intercept
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `g(2)=-8`
   - sample (tactical[0]/micro_display): `g(2)=-5`

326. **MATH 7.14** (`math-ch7-linear-quadratic.json`, sev=8) — Count the Meetings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `f(-1)=0`
   - sample (tactical[1]/micro_display): `g(-1)=2`

327. **MATH 7.15** (`math-ch7-linear-quadratic.json`, sev=8) — Completing the Square, Easy
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h=-2`
   - sample (tactical[0]/micro_display): `g(-2)=-3`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

328. **MATH 7.16** (`math-ch7-linear-quadratic.json`, sev=8) — A Line Written as a Single Fraction
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `5-x=0`
   - sample (tactical[2]/micro_display): `x=5`
   - sample (tactical[2]/micro_display): `t(5)=0`

329. **MATH 7.17** (`math-ch7-linear-quadratic.json`, sev=8) — Scaled Parabola Roots
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/micro_display): `g(1)=0`

330. **MATH 7.18** (`math-ch7-linear-quadratic.json`, sev=8) — Falling Line Twin Roots
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-3`
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `g(-3)=6`

331. **MATH 7.19** (`math-ch7-linear-quadratic.json`, sev=8) — Even Parabola Check
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(3)=0`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `b=0`

332. **MATH 7.20** (`math-ch7-linear-quadratic.json`, sev=8) — A Table That Climbs at a Steady Rate
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `y=4x-3`
   - sample (tactical[1]/micro_display): `m=4`
   - sample (tactical[1]/micro_display): `S=16/4`

333. **MATH 7.21** (`math-ch7-linear-quadratic.json`, sev=8) — Rewrite Exists at Level Two
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `g(1)=0`
   - sample (tactical[1]/micro_display): `g(-1)=0`
   - sample (tactical[1]/adjacent_micro_displays): `g(1)=0 || g(-1)=0`

334. **MATH 7.24** (`math-ch7-linear-quadratic.json`, sev=8) — Tangent Line Probe
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `\Delta=4`
   - sample (tactical[0]/micro_display): `g(2)=1`
   - sample (tactical[0]/micro_display): `g(4)=5`

335. **MATH 7.25** (`math-ch7-linear-quadratic.json`, sev=8) — Nested Evaluation Chain
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(0)=1`
   - sample (tactical[0]/micro_display): `1^{2}=1`
   - sample (tactical[0]/micro_display): `g(1)=1-1`

336. **MATH 7.26** (`math-ch7-linear-quadratic.json`, sev=8) — Complete Square and Meetings
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h=3`
   - sample (tactical[0]/micro_display): `g(3)=1`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

337. **MATH 7.27** (`math-ch7-linear-quadratic.json`, sev=8) — Rebuild from Roots and Slope
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(0)=1`
   - sample (tactical[1]/micro_display): `g(2)=0`
   - sample (tactical[1]/micro_display): `g(3)=0`

338. **MATH 7.28** (`math-ch7-linear-quadratic.json`, sev=8) — Vertex on the Line?
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `g(1)=-4`
   - sample (tactical[0]/micro_display): `1^{2}=1`

339. **MATH 7.29** (`math-ch7-linear-quadratic.json`, sev=8) — Horizontal Gap at the Axis
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `f(2)=7`
   - sample (tactical[0]/micro_display): `g(2)=4-8`

340. **MATH 7.31** (`math-ch7-linear-quadratic.json`, sev=8) — Writing a Parabola Using a Line
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `a=A m^{2}`
   - sample (tactical[1]/micro_display): `a=Am^{2}`
   - sample (tactical[3]/micro_display): `g=f^{2}`

341. **MATH 7.36** (`math-ch7-linear-quadratic.json`, sev=8) — Family of Lines Seeking Tangency
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x=1`
   - sample (tactical[3]/micro_display): `1^{2}=1`
   - sample (tactical[3]/micro_display): `g(1)=1-2`

342. **MATH 7.41** (`math-ch7-linear-quadratic.json`, sev=8) — Axis, Vieta, and the Half-Sum Trap
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `S=2`
   - sample (tactical[0]/micro_display): `x = 1\neq x`
   - sample (tactical[0]/micro_display): `S=2`

343. **MATH 7.46** (`math-ch7-linear-quadratic.json`, sev=8) — Double Composition and Leading Match
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `f(0)=2`
   - sample (tactical[2]/micro_display): `g(2)=4-2`

344. **MATH 7.47** (`math-ch7-linear-quadratic.json`, sev=8) — Parameter Window for Two Meetings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(0)=1`
   - sample (tactical[1]/micro_display): `k=-4`
   - sample (tactical[2]/micro_display): `g'(0)=-4`

345. **MATH 7.48** (`math-ch7-linear-quadratic.json`, sev=8) — Scaled Roots and Nested Order
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(2)=0`
   - sample (tactical[0]/micro_display): `g(4)=0`
   - sample (tactical[0]/adjacent_micro_displays): `g(2)=0 || g(4)=0`

346. **MATH 7.49** (`math-ch7-linear-quadratic.json`, sev=8) — Average Rate Versus Instantaneous Slope
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `2c-6=-4`
   - sample (tactical[1]/micro_display): `c=1`
   - sample (tactical[1]/adjacent_micro_displays): `2c-6=-4 || c=1`

347. **MATH 7.51** (`math-ch7-linear-quadratic.json`, sev=8) — Slope, Constant Term, Axis
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `m=7`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `f(0)=2`

348. **MATH 7.52** (`math-ch7-linear-quadratic.json`, sev=8) — Reading a Parabola Straight From Its Coefficients
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=2`
   - sample (tactical[1]/micro_display): `x^{2} = 4`
   - sample (tactical[1]/micro_display): `x=-2`

349. **MATH 7.53** (`math-ch7-linear-quadratic.json`, sev=8) — A Parabola That Turns Downwards
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-3`
   - sample (tactical[1]/micro_display): `a=-3`
   - sample (tactical[1]/micro_display): `b=12`

350. **MATH 7.55** (`math-ch7-linear-quadratic.json`, sev=8) — Zeros Straight From a Product of Factors
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q(x)=0`
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `x=-6`

351. **MATH 7.57** (`math-ch7-linear-quadratic.json`, sev=8) — Where a Rising Line Crosses the Axes
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `4x+10=0`
   - sample (tactical[1]/micro_display): `u(0)=10`
   - sample (tactical[2]/micro_display): `m=4`

352. **MATH 7.58** (`math-ch7-linear-quadratic.json`, sev=8) — Locating the Peak of a Downward Parabola
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-1`
   - sample (tactical[1]/micro_display): `a=-1`
   - sample (tactical[1]/micro_display): `b=6`

353. **MATH 7.61** (`math-ch7-linear-quadratic.json`, sev=8) — A Stretched Parabola and Its Turning Point
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=3,\ b`
   - sample (tactical[0]/micro_display): `a=-12`
   - sample (tactical[0]/micro_display): `x=2`

354. **MATH 7.62** (`math-ch7-linear-quadratic.json`, sev=8) — Ticket Price Against Weekly Revenue
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-2,\ b`
   - sample (tactical[0]/micro_display): `a=36`
   - sample (tactical[0]/micro_display): `x=9`

355. **MATH 7.63** (`math-ch7-linear-quadratic.json`, sev=8) — Completing the Square With a Negative Constant
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h=-4`
   - sample (tactical[0]/micro_display): `q(-4)=-6`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

356. **MATH 7.64** (`math-ch7-linear-quadratic.json`, sev=8) — Which Model Fits the Measurements?
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `y=-3x+10`
   - sample (tactical[1]/micro_display): `m=-3`
   - sample (tactical[2]/micro_display): `y(0)=10`

357. **MATH 7.65** (`math-ch7-linear-quadratic.json`, sev=8) — A Negative Stretch Keeps the Zeros
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(x)=0`
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[0]/micro_display): `x=5`

358. **MATH 7.66** (`math-ch7-linear-quadratic.json`, sev=8) — A Parabola With the $y$-Axis as Its Mirror
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(-3)=0`
   - sample (tactical[1]/micro_display): `p(3)=0`

359. **MATH 7.68** (`math-ch7-linear-quadratic.json`, sev=8) — A Line Fixed by a Slope and One Point
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `u(0)=3`
   - sample (tactical[2]/micro_display): `x=6`
   - sample (tactical[2]/micro_display): `u(6)=0`

360. **MATH 7.73** (`math-ch7-linear-quadratic.json`, sev=8) — Turning Point, Zeros and a Horizontal Probe
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=5`
   - sample (tactical[0]/micro_display): `q(5)=-25`
   - sample (tactical[0]/micro_display): `q(5)=-4`

361. **MATH 7.75** (`math-ch7-linear-quadratic.json`, sev=8) — A Parabola Pinned by Its Vertex and One Point
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q(x)=2`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=1`

362. **MATH 7.76** (`math-ch7-linear-quadratic.json`, sev=8) — A Profit Curve With Two Break-Even Points
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-1,\ b`
   - sample (tactical[0]/micro_display): `a=24`
   - sample (tactical[0]/micro_display): `x=12`

363. **MATH 7.83** (`math-ch7-linear-quadratic.json`, sev=8) — Signs of the Roots from Sum and Product
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `c=aP`
   - sample (tactical[2]/micro_display): `g(0)=c`
   - sample (tactical[2]/adjacent_micro_displays): `c=aP || g(0)=c`

364. **MATH 7.85** (`math-ch7-linear-quadratic.json`, sev=8) — Choosing the Leading Coefficient
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1+16a = 0`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

365. **MATH 7.86** (`math-ch7-linear-quadratic.json`, sev=8) — Coefficient Match Against a Composition
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-2`
   - sample (tactical[3]/micro_display): `f(0)=1`
   - sample (tactical[3]/micro_display): `1^{2}=1`

366. **MATH 7.87** (`math-ch7-linear-quadratic.json`, sev=8) — Root Spacing Against the Axis of a Parabola
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3^{2}=9`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `a=1,\ b`

367. **MATH 7.88** (`math-ch7-linear-quadratic.json`, sev=8) — A Translation Cannot Flatten a Parabola
   - fields: tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `g(0)=-2`
   - sample (tactical[3]/micro_display): `g(2)=8+6`
   - sample (tactical[3]/micro_display): `g(2)=14`

368. **MATH 7.93** (`math-ch7-linear-quadratic.json`, sev=8) — Equal Values and the Axis
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `u=1`
   - sample (tactical[1]/micro_display): `v=-1`
   - sample (tactical[1]/micro_display): `g(1)=1`

369. **MATH 7.94** (`math-ch7-linear-quadratic.json`, sev=8) — A Pencil of Lines and Two Tangents
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `t = 0`
   - sample (tactical[0]/micro_display): `t=3`
   - sample (tactical[0]/micro_display): `t=3x-1`

370. **MATH 7.96** (`math-ch7-linear-quadratic.json`, sev=8) — Rebuild from a Vertex and a Point
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(1)=2`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=2`

371. **MATH 7.97** (`math-ch7-linear-quadratic.json`, sev=8) — Axis Gap, Vieta, and Nested Order
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `S=5`
   - sample (tactical[3]/micro_display): `f(0)=-7`
   - sample (tactical[3]/micro_display): `g(-7)=84`

372. **MATH 7.E01** (`math-ch7-mixed-exam.json`, sev=8) — Clearance plot — meetings and a chord
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `P=-2`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

373. **MATH 7.E02** (`math-ch7-mixed-exam.json`, sev=8) — Sampled heights — interpolating parabola
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `s_6=8+7`
   - sample (tactical[1]/micro_display): `s_6=15`
   - sample (tactical[1]/adjacent_micro_displays): `s_6=8+7 || s_6=15`

374. **MATH 7.E03** (`math-ch7-mixed-exam.json`, sev=8) — Ticket desk — rebuilt revenue
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `R(3)=15`
   - sample (tactical[0]/micro_display): `R(5)=15`
   - sample (tactical[0]/micro_display): `x=4`

375. **MATH 7.E04** (`math-ch7-mixed-exam.json`, sev=8) — Meetings, vertex, and a rewrite in $f$
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `g(x)=2`
   - sample (tactical[1]/micro_display): `S=-b/a`

376. **MATH 7.E05** (`math-ch7-mixed-exam.json`, sev=8) — Sliding slope family — when tangency happens
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `\Delta=0`
   - sample (tactical[0]/micro_display): `t=\pm 2`
   - sample (tactical[0]/adjacent_micro_displays): `\Delta=0 || t=\pm 2`

377. **MATH 7.E06** (`math-ch7-mixed-exam.json`, sev=8) — Rebuild from vertex and a point
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(0)=5`
   - sample (tactical[0]/micro_display): `4a-3=5`
   - sample (tactical[0]/micro_display): `a=2`

378. **MATH 7.E09** (`math-ch7-mixed-exam.json`, sev=8) — Parabola figure, line table — a combined reading
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/adjacent_micro_displays): `x=-2 || x=2`

379. **MATH 7.E11** (`math-ch7-mixed-exam.json`, sev=8) — Trough touching a level line
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(2)=-1`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=1`

380. **MATH 7.E12** (`math-ch7-mixed-exam.json`, sev=8) — Arithmetic samples — why a square cannot fit
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `y=3x-1`
   - sample (tactical[0]/micro_display): `y=3x-1`
   - sample (tactical[1]/micro_display): `m=3`

381. **MATH 7.E13** (`math-ch7-mixed-exam.json`, sev=8) — Ball toss — peak as midpoint of the ground times
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `t=3`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `t=3`

382. **MATH 7.E15** (`math-ch7-mixed-exam.json`, sev=8) — Vertical shift family — root count by vertex height
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1,\ 3`
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

383. **MATH 7.E16** (`math-ch7-mixed-exam.json`, sev=8) — Two intercepts — midpoint check and a height trap
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `m=-2`
   - sample (tactical[0]/micro_display): `m=-2x+4`

384. **MATH 7.E17** (`math-ch7-mixed-exam.json`, sev=8) — Two nestings — missing linear term, shifted axis
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=4/(8)`
   - sample (tactical[1]/micro_display): `x=1/2`

385. **MATH 7.E18** (`math-ch7-mixed-exam.json`, sev=8) — Opposite roots — evenness and the trough sign
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `b=0`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

386. **MATH 7.E19** (`math-ch7-mixed-exam.json`, sev=8) — Peak above a level, falling table
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `g(3)=4>1`
   - sample (tactical[0]/micro_display): `g(0)=4`
   - sample (tactical[0]/micro_display): `a=-1`

387. **MATH 7.E20** (`math-ch7-mixed-exam.json`, sev=8) — Revenue peak is not the profit peak
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-1`
   - sample (tactical[0]/micro_display): `R(4)=16`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

388. **MATH 7.E21** (`math-ch7-mixed-exam.json`, sev=8) — Trough below a secant level
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(0)=-1`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

389. **MATH 7.E22** (`math-ch7-mixed-exam.json`, sev=8) — Quadratic samples — false second-gap $4$
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `h=2`
   - sample (tactical[1]/micro_display): `a=1\neq 2`
   - sample (tactical[1]/micro_display): `2a = 4`

390. **MATH 7.E23** (`math-ch7-mixed-exam.json`, sev=8) — Workshop cost trough in a table
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/micro_display): `q=2`
   - sample (tactical[0]/micro_display): `C(2)=1`

391. **MATH 7.E24** (`math-ch7-mixed-exam.json`, sev=8) — Factor the difference, then the vertex of $g$
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x(x-3)=0`
   - sample (tactical[0]/micro_display): `\Delta=9`
   - sample (tactical[0]/micro_display): `S=0+3`

392. **MATH 7.E25** (`math-ch7-mixed-exam.json`, sev=8) — Shared intercept, sliding second meeting
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `a=-1<0`
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/micro_display): `g_a(0)=3`

393. **MATH 7.E26** (`math-ch7-mixed-exam.json`, sev=8) — Monic parabola from two roots — sign traps
   - fields: solution_overview, tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `g(0)=-3`
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `1^{2}=1`

394. **MATH 7.E27** (`math-ch7-mixed-exam.json`, sev=8) — Parabola after an inverse shift
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `0+2=2`
   - sample (tactical[1]/micro_display): `4-1=3`
   - sample (tactical[1]/dense_micro_chain): `8 micro-ish displays`

395. **MATH 7.E28** (`math-ch7-mixed-exam.json`, sev=8) — A double root sitting on the axis
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `g(2)=0`
   - sample (tactical[0]/adjacent_micro_displays): `x=2 || g(2)=0`

396. **MATH 7.E29** (`math-ch7-mixed-exam.json`, sev=8) — Table versus two candidate formulas
   - fields: tactical[0], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2a=2`
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/adjacent_micro_displays): `2a=2 || a=1`

397. **MATH 7.E30** (`math-ch7-mixed-exam.json`, sev=8) — Arch crown versus a falling trolley chord
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x-2=\pm 2`
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/micro_display): `x=2`

398. **MATH 8.98** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 1
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `M(4)=320`
   - sample (tactical[0]/micro_display): `320=320.`
   - sample (tactical[0]/adjacent_micro_displays): `M(4)=320 || 320=320.`

399. **MATH 8.100** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `d=4`
   - sample (tactical[0]/micro_display): `4=4.`
   - sample (tactical[0]/adjacent_micro_displays): `d=4 || 4=4.`

400. **MATH 8.102** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 5
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `C(9)=6`
   - sample (tactical[1]/micro_display): `6=6.`
   - sample (tactical[1]/adjacent_micro_displays): `C(9)=6 || 6=6.`

401. **MATH 8.103** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 6
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `E(9)=486`
   - sample (tactical[2]/micro_display): `v=5`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

402. **MATH 8.104** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 7
   - fields: tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `q=16`
   - sample (tactical[1]/micro_display): `16=16.`
   - sample (tactical[1]/adjacent_micro_displays): `q=16 || 16=16.`

403. **MATH 8.106** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 9
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(3)=3^3`
   - sample (tactical[0]/micro_display): `g(3)=27`
   - sample (tactical[0]/adjacent_micro_displays): `g(3)=3^3 || g(3)=27`

404. **MATH 8.108** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 11
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1^{3}=1`
   - sample (tactical[0]/micro_display): `M(1)=3`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

405. **MATH 8.109** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 12
   - fields: tactical[0]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `Y=Kx^{a}`
   - sample (tactical[0]/micro_display): `c=4`
   - sample (tactical[0]/micro_display): `2^{3}=8`

406. **MATH 8.111** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 14
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `4^{3}=64`
   - sample (tactical[2]/micro_display): `g(4)=512`
   - sample (tactical[2]/dense_micro_chain): `7 micro-ish displays`

407. **MATH 8.113** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `s=1`
   - sample (tactical[0]/micro_display): `1^{3}=1`
   - sample (tactical[0]/micro_display): `M(1)=4`

408. **MATH 8.114** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 17
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `Y=Kx^{a}`
   - sample (tactical[0]/micro_display): `c=8`
   - sample (tactical[0]/micro_display): `2^{2}=4`

409. **MATH 8.116** (`math-ch8-exam.json`, sev=8) — Exam-style tasks - 19
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `4^{3}=64`
   - sample (tactical[2]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[3]/micro_display): `1^{3}=1`

410. **MATH 9.E02** (`math-ch9-mixed-exam.json`, sev=8) — Degree and factors from raw samples
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0--12 =12`
   - sample (tactical[0]/micro_display): `2-0 =2`
   - sample (tactical[0]/micro_display): `0-2 =-2`

411. **MATH 9.E03** (`math-ch9-mixed-exam.json`, sev=8) — Lock imbalance from the hourly ledger
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `h(0)=0`
   - sample (tactical[2]/micro_display): `2-0 =2`

412. **MATH 9.E06** (`math-ch9-mixed-exam.json`, sev=8) — Rebuild a touch-and-cross monic cubic
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[3]/micro_display): `p(0)=2`

413. **MATH 9.E08** (`math-ch9-mixed-exam.json`, sev=8) — A squared factor and the derivative
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p'(-1)=0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

414. **MATH 9.E12** (`math-ch9-mixed-exam.json`, sev=8) — Cubic samples with three visible factors
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0-4 =-4`
   - sample (tactical[0]/micro_display): `-2-0 =-2`
   - sample (tactical[0]/micro_display): `-2--2 =0`

415. **MATH 9.E14** (`math-ch9-mixed-exam.json`, sev=8) — Remainders, mixed parity, nested power
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(1)=1-1`
   - sample (tactical[0]/micro_display): `f(1)=0`
   - sample (tactical[0]/adjacent_micro_displays): `f(1)=1-1 || f(1)=0`

416. **MATH 9.E18** (`math-ch9-mixed-exam.json`, sev=8) — Three simple linear factors
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(-1)=0`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

417. **MATH 9.E20** (`math-ch9-mixed-exam.json`, sev=8) — Parity, shift, Vieta, and linear factors
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `-1+1=0`
   - sample (tactical[2]/micro_display): `0+2=2`

418. **MATH 9.E22** (`math-ch9-mixed-exam.json`, sev=8) — Quartic samples: differences and factors
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0-9 =-9`
   - sample (tactical[0]/micro_display): `1-0 =1`
   - sample (tactical[0]/micro_display): `0-1 =-1`

419. **MATH 9.E23** (`math-ch9-mixed-exam.json`, sev=8) — Warehouse deviation from daily closes
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3-0 =3`
   - sample (tactical[0]/micro_display): `0-3 =-3`
   - sample (tactical[0]/micro_display): `-3-0 =-3`

420. **MATH 9.E24** (`math-ch9-mixed-exam.json`, sev=8) — An odd cubic: factors, Vieta, nesting
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(2)=0`
   - sample (tactical[1]/dense_micro_chain): `10 micro-ish displays`

421. **MATH 9.E26** (`math-ch9-mixed-exam.json`, sev=8) — Three simple zeros force a monic cubic
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `-2+1=-1`
   - sample (tactical[1]/micro_display): `-1+3=2 =2`

422. **MATH 9.E28** (`math-ch9-mixed-exam.json`, sev=8) — Simple at 0, double at 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `p'(2)=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

423. **MATH 9.E29** (`math-ch9-mixed-exam.json`, sev=8) — Three crossings, a dashed mark, and table factors
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(-1)=0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(0)=2`

424. **MATH 9.02** (`math-ch9-polynomials.json`, sev=8) — Reading a Cubic at Three Abscissas
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`
   - sample (tactical[0]/micro_display): `0+0=0`

425. **MATH 9.03** (`math-ch9-polynomials.json`, sev=8) — Degree and Leading Coefficient on Sight
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `4`
   - sample (tactical[3]/micro_display): `0^{3}=0`
   - sample (tactical[3]/micro_display): `0^{1}=0`

426. **MATH 9.04** (`math-ch9-polynomials.json`, sev=8) — Roots from a Factored Cubic
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[0]/micro_display): `x=3`

427. **MATH 9.05** (`math-ch9-polynomials.json`, sev=8) — A Line Times a Square
   - fields: tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `2x-1=0`
   - sample (tactical[2]/micro_display): `0^{3}=0`
   - sample (tactical[2]/micro_display): `0^{2}=0`

428. **MATH 9.06** (`math-ch9-polynomials.json`, sev=8) — Adding Two Cubics
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(x)=0`
   - sample (tactical[2]/micro_display): `0^{2}=0`
   - sample (tactical[2]/micro_display): `0^{1}=0`

429. **MATH 9.07** (`math-ch9-polynomials.json`, sev=8) — Odd Cubic on Sight
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `0^{3}=0`
   - sample (tactical[2]/micro_display): `0^{1}=0`

430. **MATH 9.08** (`math-ch9-polynomials.json`, sev=8) — End Behaviour of a Downward Cubic
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `-2`
   - sample (tactical[3]/micro_display): `0^{3}=0`
   - sample (tactical[3]/micro_display): `0^{1}=0`

431. **MATH 9.09** (`math-ch9-polynomials.json`, sev=8) — A Short Value Table for a Cubic
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`
   - sample (tactical[0]/micro_display): `-(0)=0`

432. **MATH 9.10** (`math-ch9-polynomials.json`, sev=8) — Constant Term Versus Leading Term
   - fields: tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(0)=5`
   - sample (tactical[2]/micro_display): `0^{4}=0`
   - sample (tactical[2]/micro_display): `0^{2}=0`

433. **MATH 9.11** (`math-ch9-polynomials.json`, sev=8) — A Horizontal Line Against a Cubic
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(2)=8-2`
   - sample (tactical[1]/micro_display): `p(2)=6`
   - sample (tactical[1]/adjacent_micro_displays): `p(2)=8-2 || p(2)=6`

434. **MATH 9.12** (`math-ch9-polynomials.json`, sev=8) — Product of a Line and a Cubic
   - fields: solution_overview, tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `f(x)=x-2`
   - sample (solution_overview/micro_display): `f(x)=x - 2`
   - sample (solution_overview/adjacent_micro_displays): `f(x)=x-2 || f(x)=x - 2`

435. **MATH 9.13** (`math-ch9-polynomials.json`, sev=8) — First Differences Hint at the Degree
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2-1 =1`
   - sample (tactical[0]/micro_display): `9-2 =7`
   - sample (tactical[0]/micro_display): `28-9 =19`

436. **MATH 9.14** (`math-ch9-polynomials.json`, sev=8) — Warehouse Cost as a Cubic
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{2}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`

437. **MATH 9.15** (`math-ch9-polynomials.json`, sev=8) — Turning-Point Budget of a Cubic
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=0`
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/adjacent_micro_displays): `x=0 || x=2`

438. **MATH 9.16** (`math-ch9-polynomials.json`, sev=8) — Factor Theorem at a Named Point
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `8-16=-8`
   - sample (tactical[0]/micro_display): `-8+2=-6`
   - sample (tactical[0]/micro_display): `-6+6=0`

439. **MATH 9.17** (`math-ch9-polynomials.json`, sev=8) — Shift of a Cubic
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `q(1)=0`
   - sample (tactical[1]/micro_display): `1-3=-2`
   - sample (tactical[1]/micro_display): `-2+3=1`

440. **MATH 9.23** (`math-ch9-polynomials.json`, sev=8) — Graph of a Cubic with Two Turns
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(0)=2`
   - sample (tactical[3]/micro_display): `3-4=-1`
   - sample (tactical[3]/micro_display): `-1-1=-2`

441. **MATH 9.28** (`math-ch9-polynomials.json`, sev=8) — Finite Differences of a Quartic Sample
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{4}=0`
   - sample (tactical[0]/micro_display): `p(0)=0+1`
   - sample (tactical[0]/micro_display): `0+1=1`

442. **MATH 9.29** (`math-ch9-polynomials.json`, sev=8) — Canal Lock: Height as a Cubic in Time
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{2}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`

443. **MATH 9.30** (`math-ch9-polynomials.json`, sev=8) — Rebuild a Monic Cubic from Three Roots
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `1-2=-1`
   - sample (tactical[1]/micro_display): `-1-8=-9`
   - sample (tactical[1]/micro_display): `p(1)=-9`

444. **MATH 9.34** (`math-ch9-polynomials.json`, sev=8) — Composition Multiplies the Highest Powers
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `n=m`
   - sample (tactical[1]/micro_display): `n=2`
   - sample (tactical[1]/adjacent_micro_displays): `n=m || n=2`

445. **MATH 9.38** (`math-ch9-polynomials.json`, sev=8) — Graph: Which Cubic Matches the Turns?
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(-1)=-2`
   - sample (tactical[0]/micro_display): `p(1)=2`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

446. **MATH 9.44** (`math-ch9-polynomials.json`, sev=8) — Palindromic Coefficients
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1/r)=0`
   - sample (tactical[1]/micro_display): `p(0)=a_0`
   - sample (tactical[1]/micro_display): `a_0=a_n`

447. **MATH 9.45** (`math-ch9-polynomials.json`, sev=8) — Integer Coefficients and Integer Roots
   - fields: tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(0)=6`
   - sample (tactical[4]/micro_display): `-1-1=-2`
   - sample (tactical[4]/micro_display): `-2+1=-1`

448. **MATH 9.52** (`math-ch9-polynomials.json`, sev=8) — Sketch Reading: Three Crossings and a Turn Between Them
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `0^{3}=0`
   - sample (tactical[1]/micro_display): `0^{2}=0`
   - sample (tactical[1]/micro_display): `0^{1}=0`

449. **MATH 9.54** (`math-ch9-polynomials.json`, sev=8) — Sampling a Quartic: Are Fourth Differences Constant?
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `2-1 =1`
   - sample (tactical[0]/micro_display): `17-2 =15`
   - sample (tactical[0]/micro_display): `82-17 =65`

450. **MATH 9.56** (`math-ch9-polynomials.json`, sev=8) — Canal Gate: Water Height as a Cubic in Minutes
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h(0)=0`
   - sample (tactical[1]/micro_display): `2-9=-7`
   - sample (tactical[1]/micro_display): `-7+10=3`

451. **MATH 9.57** (`math-ch9-polynomials.json`, sev=8) — Rebuild a Monic Cubic from Three Given Zeros
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(1)=-9`
   - sample (tactical[2]/micro_display): `p(0)=0`
   - sample (tactical[3]/micro_display): `-2+0=-2`

452. **MATH 9.59** (`math-ch9-polynomials.json`, sev=8) — Workshop Output Cost and a Recorded Total Table
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `C(0)=10`
   - sample (tactical[1]/micro_display): `-40+40=0`
   - sample (tactical[1]/micro_display): `0+10=10`

453. **MATH 9.60** (`math-ch9-polynomials.json`, sev=8) — Touching the Axis at Two, Crossing at Negative One
   - fields: tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `0^{3}=0`
   - sample (tactical[1]/micro_display): `0^{2}=0`
   - sample (tactical[1]/micro_display): `0+0=0`

454. **MATH 9.61** (`math-ch9-polynomials.json`, sev=8) — Graph Clues: Three Crossings and a Turn Between the Last Pair
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{2}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`

455. **MATH 9.65** (`math-ch9-polynomials.json`, sev=8) — Inverted Cubic with Three Zeros
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `1^{3}=1`
   - sample (tactical[1]/micro_display): `-(1)=-1`
   - sample (tactical[1]/micro_display): `1^{2}=1`

456. **MATH 9.68** (`math-ch9-polynomials.json`, sev=8) — Finite Differences Diagnose the Degree (Set 1)
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1)=2`
   - sample (tactical[0]/micro_display): `p(1)=2`
   - sample (tactical[1]/micro_display): `2-1 =1`

457. **MATH 9.69** (`math-ch9-polynomials.json`, sev=8) — Rebuild from a Double Root and a Simple Root (Set 1)
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1)=0`
   - sample (tactical[0]/micro_display): `p(-3)=0`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

458. **MATH 9.76** (`math-ch9-polynomials.json`, sev=8) — Odd Cubic Against a Parabola
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1)=0`
   - sample (tactical[0]/micro_display): `p(-1)=0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

459. **MATH 9.78** (`math-ch9-polynomials.json`, sev=8) — Finite Differences Diagnose the Degree (Set 2)
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1)=4`
   - sample (tactical[0]/micro_display): `p(1)=4`
   - sample (tactical[1]/micro_display): `4-2 =2`

460. **MATH 9.82** (`math-ch9-polynomials.json`, sev=8) — Raising a Cubic: Crossings After a Vertical Shift (Set 2)
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `-8+2=-6`
   - sample (tactical[2]/micro_display): `-6+1=-5`
   - sample (tactical[2]/micro_display): `q(-2)=-5`

461. **MATH 9.83** (`math-ch9-polynomials.json`, sev=8) — Degree of a Sum When $n>m$ (Set 3)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q(x)=2x`
   - sample (tactical[0]/micro_display): `n=3>m`
   - sample (tactical[0]/micro_display): `n=1`

462. **MATH 9.89** (`math-ch9-polynomials.json`, sev=8) — Finite Differences Diagnose the Degree (Set 3)
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1)=1`
   - sample (tactical[1]/micro_display): `1-1 =0`
   - sample (tactical[1]/micro_display): `7-1 =6`

463. **MATH 9.94** (`math-ch9-polynomials.json`, sev=8) — Parameter α5: How Many Real Zeros?
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x^{3}=0`
   - sample (tactical[1]/micro_display): `x=0`

464. **MATH 9.96** (`math-ch9-polynomials.json`, sev=8) — Hard Graph Read: Roots (-3, -1, 2)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `-(-1)=1`
   - sample (tactical[1]/micro_display): `1+2=3`
   - sample (tactical[1]/micro_display): `3+5=8`

465. **MATH 9.97** (`math-ch9-polynomials.json`, sev=8) — Hard Graph Read: Roots (-2, 1, 4)
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `1^{3}=1`
   - sample (tactical[1]/micro_display): `-(1)=-1`
   - sample (tactical[1]/micro_display): `1^{2}=1`

466. **MATH 9.98** (`math-ch9-polynomials.json`, sev=8) — Hard Graph Read: Roots (0, 1, 5)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(1)=0`
   - sample (tactical[1]/micro_display): `-1+6=5`

467. **MATH 9.99** (`math-ch9-polynomials.json`, sev=8) — Hard Graph Read: Roots (-1, 2, 3)
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `2^{3}=8`
   - sample (tactical[1]/micro_display): `-(8)=-8`
   - sample (tactical[1]/micro_display): `2^{2}=4`

468. **MATH 9.100** (`math-ch9-polynomials.json`, sev=8) — Hard Graph Read: Roots (1, 2, 4)
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `2^{3}=8`
   - sample (tactical[1]/micro_display): `-(8)=-8`

469. **MATH 9.101** (`math-ch9-polynomials.json`, sev=8) — Hard Graph Read: Roots (0, 2, 3)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(6)=-72`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(2)=0`

470. **MATH 12.04** (`math-cases-ch12-probability.json`, sev=5) — Quality Control Sampling
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `P(X = 2)`

471. **MATH 12.05** (`math-cases-ch12-probability.json`, sev=5) — Rolling the Dice
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `6^3 = 216`

472. **MATH 12.06** (`math-cases-ch12-probability.json`, sev=5) — Find the Missing Value
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `n=10`
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `n = 10`

473. **MATH 12.09** (`math-cases-ch12-probability.json`, sev=5) — A Round Table
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_C = 5040`
   - sample (solution_overview/micro_display): `N_L = 8!`
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`

474. **MATH 12.11** (`math-cases-ch12-probability.json`, sev=5) — A Bookshelf Restriction
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `|S| = 8!`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[1]/micro_display): `5! = 120`

475. **MATH 12.14** (`math-cases-ch12-probability.json`, sev=5) — Choosing a Committee
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `14 micro-ish displays`
   - sample (tactical[2]/micro_display): `40 + 1 = 41`

476. **MATH 12.15** (`math-cases-ch12-probability.json`, sev=5) — Mismatched Gifts (Derangements)
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `n! = 6!`
   - sample (tactical[0]/micro_display): `6! = 720`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

477. **MATH 12.31** (`math-cases-ch12-probability.json`, sev=5) — The Harbour Charity Raffle
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`

478. **MATH 12.57** (`math-cases-ch12-probability.json`, sev=5) — An online retailer tracked customer behavior
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `S_1 = 1.30`
   - sample (solution_overview/micro_display): `S_2 = 0.52`
   - sample (solution_overview/micro_display): `S_3 = 0.08`

479. **MATH 12.62** (`math-cases-ch12-probability.json`, sev=5) — Of 3,000 health-club members, 1,800 attended Yoga, 1,500 Spin, and 1,200
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `1 - 1 = 0`

480. **MATH 12.84** (`math-cases-ch12-probability.json`, sev=5) — An auto repair shop tracks customer complaints by service type
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N(C) = 280`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

481. **MATH 12.85** (`math-cases-ch12-probability.json`, sev=5) — A concert venue tracks no-shows by ticket type
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_{Total} = 10000`
   - sample (solution_overview/micro_display): `N_{NS,Total} = 1300`
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`

482. **MATH 12.92** (`math-cases-ch12-probability.json`, sev=5) — A logistics company reviewed a month of shipments sent by two methods
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_{G \cap L} = 375`
   - sample (solution_overview/micro_display): `N_{A \cap L} = 105`
   - sample (solution_overview/micro_display): `N_L = 480`

483. **MATH 12.94** (`math-cases-ch12-probability.json`, sev=5) — A restaurant chain's health department compiled a year of inspection results
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_V = 930`
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

484. **MATH 12.97** (`math-cases-ch12-probability.json`, sev=5) — An insurance company audited a year of claims across two policy types
   - fields: solution_overview
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_D = 710`
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`

485. **MATH 12.110** (`math-cases-ch12-probability.json`, sev=5) — An online marketplace reviewed a quarter of transactions split across two
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_{CB} = 550`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

486. **MATH 12.111** (`math-cases-ch12-probability.json`, sev=5) — A hospital tracked 30-day readmissions across three discharge units over the past year
   - fields: solution_overview
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `N_R = 1840`
   - sample (solution_overview/micro_display): `N_{R^c} = 22160`
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`

487. **MATH 12.117** (`math-cases-ch12-probability.json`, sev=5) — A Vending Machine
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `\mu = 200`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

488. **MATH 12.118** (`math-cases-ch12-probability.json`, sev=5) — A Call Center
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `\mu = 6`
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `\mu = 6`

489. **MATH 12.121** (`math-cases-ch12-probability.json`, sev=5) — Standardized Exam Scores
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `\mu = 520`
   - sample (tactical[0]/micro_display): `z = 2`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

490. **MATH 12.122** (`math-cases-ch12-probability.json`, sev=5) — Find the Missing Value
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `5 = 0.2k`
   - sample (solution_overview/micro_display): `k = 25`
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`

491. **MATH 12.124** (`math-cases-ch12-probability.json`, sev=5) — Heads in Three Coin Flips
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `\mu = 1.5`

492. **MATH 12.125** (`math-cases-ch12-probability.json`, sev=5) — A Charity Raffle
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 5`
   - sample (solution_overview/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 5`

493. **MATH 12.126** (`math-cases-ch12-probability.json`, sev=5) — Quality Inspection
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `\mu = 0.5`
   - sample (solution_overview/dense_micro_chain): `15 micro-ish displays`
   - sample (tactical[0]/micro_display): `\mu = 0.5`

494. **MATH 12.127** (`math-cases-ch12-probability.json`, sev=5) — Customer Star Ratings
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/micro_display): `\mu = 3.75`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

495. **MATH 12.129** (`math-cases-ch12-probability.json`, sev=5) — A Game Show Wheel
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 110`
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 110`

496. **MATH 12.130** (`math-cases-ch12-probability.json`, sev=5) — Coffee Shop Arrivals
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 0.9`
   - sample (solution_overview/dense_micro_chain): `12 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 0.9`

497. **MATH 12.132** (`math-cases-ch12-probability.json`, sev=5) — A Free-Throw Contest
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 1.9`
   - sample (solution_overview/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 1.9`

498. **MATH 12.133** (`math-cases-ch12-probability.json`, sev=5) — A Delivery App Rating
   - fields: solution_overview, tactical[0], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 3.6`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 3.6`

499. **MATH 12.134** (`math-cases-ch12-probability.json`, sev=5) — An Insurance Policy
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 116`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/micro_display): `0 + 16 = 16`

500. **MATH 12.136** (`math-cases-ch12-probability.json`, sev=5) — An Ice Cream Shop
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 2.2`
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 2.2`

501. **MATH 12.137** (`math-cases-ch12-probability.json`, sev=5) — A Parking Garage
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 1.7`
   - sample (solution_overview/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 1.7`

502. **MATH 12.138** (`math-cases-ch12-probability.json`, sev=5) — A Trivia Quiz
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 2.2`
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 2.2`

503. **MATH 12.139** (`math-cases-ch12-probability.json`, sev=5) — A Podcast Episode Rating
   - fields: solution_overview, tactical[0], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 3.5`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[X] = 3.5`

504. **MATH 12.140** (`math-cases-ch12-probability.json`, sev=5) — An Extended Warranty
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 138`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/micro_display): `0 + 18 = 18`

505. **MATH 12.141** (`math-cases-ch12-probability.json`, sev=5) — A Two-Machine Production Line
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X_A] = 3`
   - sample (solution_overview/micro_display): `E[X_B] = 7`
   - sample (solution_overview/micro_display): `E[X] = 4.4`

506. **MATH 12.143** (`math-cases-ch12-probability.json`, sev=5) — Chebyshev's Inequality
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `k = 2`
   - sample (tactical[1]/micro_display): `k = 1`
   - sample (tactical[2]/micro_display): `k = 4`

507. **MATH 12.144** (`math-cases-ch12-probability.json`, sev=5) — The Vending Machine Puzzle
   - fields: solution_overview
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `P(X = 0) = p`
   - sample (solution_overview/dense_micro_chain): `12 micro-ish displays`

508. **MATH 12.145** (`math-cases-ch12-probability.json`, sev=5) — A Regional Manager's Rounds
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 4`
   - sample (solution_overview/micro_display): `E[N] = 2.9`
   - sample (solution_overview/dense_micro_chain): `11 micro-ish displays`

509. **MATH 12.147** (`math-cases-ch12-probability.json`, sev=5) — A Charity Raffle (Unknown Probabilities)
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `15 = 50q`
   - sample (solution_overview/micro_display): `q = 0.30`
   - sample (solution_overview/micro_display): `p = 0.60`

510. **MATH 12.148** (`math-cases-ch12-probability.json`, sev=5) — An Ice Cream Shop (Two Independent Customers)
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[Y] = 4.4`

511. **MATH 12.152** (`math-cases-ch12-probability.json`, sev=5) — An Extended Warranty (Two Independent Policies)
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `E[X] = 138`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/micro_display): `E[Y] = 276`

512. **MATH 13.01** (`math-cases-ch13-binomial.json`, sev=5) — Multiple-Choice Guessing
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 10)`
   - sample (tactical[2]/micro_display): `0.0035`
   - sample (tactical[2]/micro_display): `0.9872`

513. **MATH 13.02** (`math-cases-ch13-binomial.json`, sev=5) — Free Throws — Rookie vs All-Star
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 10)`
   - sample (tactical[2]/micro_display): `0.0996`
   - sample (tactical[2]/micro_display): `0.8202`

514. **MATH 13.03** (`math-cases-ch13-binomial.json`, sev=5) — Factory Batch Certification
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 20)`
   - sample (tactical[2]/micro_display): `0.0913`
   - sample (tactical[2]/micro_display): `0.9245`

515. **MATH 13.04** (`math-cases-ch13-binomial.json`, sev=5) — First-Contact Resolutions
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 15)`
   - sample (tactical[2]/micro_display): `0.0271`
   - sample (tactical[2]/micro_display): `0.7346`

516. **MATH 13.05** (`math-cases-ch13-binomial.json`, sev=5) — Seed Germination Trays
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 12)`
   - sample (tactical[2]/micro_display): `0.0028`
   - sample (tactical[2]/micro_display): `0.7358`

517. **MATH 13.06** (`math-cases-ch13-binomial.json`, sev=5) — Airport Security Audit
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 25)`
   - sample (tactical[2]/micro_display): `0.009`
   - sample (tactical[2]/micro_display): `0.7466`

518. **MATH 13.07** (`math-cases-ch13-binomial.json`, sev=5) — Archery Medal Round
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 9)`
   - sample (tactical[2]/micro_display): `0.1211`
   - sample (tactical[2]/micro_display): `0.9718`

519. **MATH 13.08** (`math-cases-ch13-binomial.json`, sev=5) — Restaurant Satisfaction Survey
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 14)`
   - sample (tactical[2]/micro_display): `0.0287`
   - sample (tactical[2]/micro_display): `0.6982`

520. **MATH 13.09** (`math-cases-ch13-binomial.json`, sev=5) — Phishing Awareness Test
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 18)`
   - sample (tactical[2]/micro_display): `0.0001`
   - sample (tactical[2]/micro_display): `0.7832`

521. **MATH 13.10** (`math-cases-ch13-binomial.json`, sev=5) — Forecast Accuracy Award
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 10)`
   - sample (tactical[2]/micro_display): `0.0464`
   - sample (tactical[2]/micro_display): `0.9139`

522. **MATH 13.11** (`math-cases-ch13-binomial.json`, sev=5) — Manufacturing Unit Audit
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 20)`
   - sample (tactical[2]/micro_display): `0.0049`
   - sample (tactical[2]/micro_display): `0.7873`

523. **MATH 13.12** (`math-cases-ch13-binomial.json`, sev=5) — Recorded Call Review
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 16)`
   - sample (tactical[2]/micro_display): `0.0183`
   - sample (tactical[2]/micro_display): `0.8689`

524. **MATH 13.13** (`math-cases-ch13-binomial.json`, sev=5) — Typing Accuracy Test
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 12)`
   - sample (tactical[2]/micro_display): `0.073`
   - sample (tactical[2]/micro_display): `0.6488`

525. **MATH 13.14** (`math-cases-ch13-binomial.json`, sev=5) — Cybersecurity Attack Drill
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 22)`
   - sample (tactical[2]/micro_display): `0.7821`
   - sample (tactical[2]/micro_display): `77302.65`

526. **MATH 13.15** (`math-cases-ch13-binomial.json`, sev=5) — Eight Free Throws Contest
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 8)`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[2]/micro_display): `0.0632`

527. **MATH 13.16** (`math-cases-ch13-binomial.json`, sev=5) — Diagnostic Kit Certification
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 0)`
   - sample (tactical[2]/micro_display): `0.0617`
   - sample (tactical[2]/micro_display): `0.9429`

528. **MATH 13.17** (`math-cases-ch13-binomial.json`, sev=5) — Production Line Batches
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `1`
   - sample (tactical[3]/micro_display): `1.573`
   - sample (tactical[3]/micro_display): `1.129`

529. **MATH 13.18** (`math-cases-ch13-binomial.json`, sev=5) — Sales Call Conversions
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 25)`
   - sample (tactical[2]/micro_display): `0.0175`
   - sample (tactical[2]/micro_display): `0.9701`

530. **MATH 13.19** (`math-cases-ch13-binomial.json`, sev=5) — Practice Exam Scores
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0.4119`
   - sample (tactical[2]/micro_display): `0.5881`
   - sample (tactical[2]/micro_display): `0.9994`

531. **MATH 13.20** (`math-cases-ch13-binomial.json`, sev=5) — Surgical Success Rates
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 14)`
   - sample (tactical[2]/micro_display): `0.2811`
   - sample (tactical[2]/micro_display): `0.9833`

532. **MATH 13.21** (`math-cases-ch13-binomial.json`, sev=5) — Defect-Free Factory Batches
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `0.0216`
   - sample (tactical[2]/micro_display): `0.6316`
   - sample (tactical[2]/micro_display): `29.2`

533. **MATH 13.22** (`math-cases-ch13-binomial.json`, sev=5) — Dual Quality Checks
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[1]/dense_micro_chain): `7 micro-ish displays`

534. **MATH 13.24** (`math-cases-ch13-binomial.json`, sev=5) — Team Trial Successes
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[3]/micro_display): `2`
   - sample (tactical[3]/micro_display): `1.428`

535. **MATH 13.26** (`math-cases-ch13-binomial.json`, sev=5) — Advanced Factory Inspection
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `0.0245`
   - sample (tactical[2]/micro_display): `0.7879`
   - sample (tactical[2]/micro_display): `32.13`

536. **MATH 13.27** (`math-cases-ch13-binomial.json`, sev=5) — Dual Inspection Flags
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[1]/micro_display): `3.5455`

537. **MATH 13.29** (`math-cases-ch13-binomial.json`, sev=5) — Extended Team Trials
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/micro_display): `2.225`
   - sample (tactical[3]/micro_display): `1.789`

538. **MATH 13.31** (`math-cases-ch13-binomial.json`, sev=5) — Support Queue Tickets
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `0.2304`
   - sample (tactical[2]/micro_display): `0.9327`
   - sample (tactical[2]/micro_display): `4.05`

539. **MATH 13.34** (`math-cases-ch13-binomial.json`, sev=5) — Hourly Production Units
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `1.652`

540. **MATH 13.35** (`math-cases-ch13-binomial.json`, sev=5) — Auditor C Compliance
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `27 - 18 = 9`
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[4]/micro_display): `1.09`

541. **MATH 13.36** (`math-cases-ch13-binomial.json`, sev=5) — Low-Yield Factory Batches
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `0.0002`
   - sample (tactical[2]/micro_display): `0.0299`
   - sample (tactical[2]/micro_display): `193.86`

542. **MATH 13.37** (`math-cases-ch13-binomial.json`, sev=5) — Component Flag Checks
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[1]/micro_display): `1.9412`

543. **MATH 13.39** (`math-cases-ch13-binomial.json`, sev=5) — Twenty-Three Trial Teams
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/micro_display): `2.315`
   - sample (tactical[3]/micro_display): `1.801`

544. **MATH 13.40** (`math-cases-ch13-binomial.json`, sev=5) — Auditor E Threshold
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `0.1517`
   - sample (tactical[3]/micro_display): `0.3220`
   - sample (tactical[3]/micro_display): `2.12`

545. **MATH 13.41** (`math-cases-ch13-binomial.json`, sev=5) — Rare Component Failures
   - fields: tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `1.7310`
   - sample (tactical[3]/micro_display): `1.7316`

546. **MATH 13.42** (`math-cases-ch13-binomial.json`, sev=5) — Mutation Type Rates
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `1.732`
   - sample (tactical[4]/micro_display): `1.688`

547. **MATH 13.46** (`math-cases-ch13-binomial.json`, sev=5) — Bakery Quality Control
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 18)`
   - sample (tactical[2]/micro_display): `0.001`
   - sample (tactical[2]/micro_display): `0.7202`

548. **MATH 13.47** (`math-cases-ch13-binomial.json`, sev=5) — Automated Test Cases
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 25)`
   - sample (tactical[2]/micro_display): `0.9064`
   - sample (tactical[2]/micro_display): `14340560.29`

549. **MATH 13.48** (`math-cases-ch13-binomial.json`, sev=5) — Ten-Arrow Archery Contest
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 10)`
   - sample (tactical[2]/micro_display): `0.0464`
   - sample (tactical[2]/micro_display): `0.9139`

550. **MATH 13.49** (`math-cases-ch13-binomial.json`, sev=5) — Customer Email Resolutions
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 14)`
   - sample (tactical[2]/micro_display): `0.0065`
   - sample (tactical[2]/micro_display): `0.4481`

551. **MATH 13.50** (`math-cases-ch13-binomial.json`, sev=5) — Diagnostic Scan Review
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 30)`
   - sample (tactical[2]/micro_display): `0.0019`
   - sample (tactical[2]/micro_display): `0.9881`

552. **MATH 13.51** (`math-cases-ch13-binomial.json`, sev=5) — Airport Shift Screening
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 28)`
   - sample (tactical[2]/micro_display): `0.8982`
   - sample (tactical[2]/micro_display): `379195.07`

553. **MATH 13.52** (`math-cases-ch13-binomial.json`, sev=5) — Vaccine Antibody Classification
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 35)`
   - sample (tactical[2]/micro_display): `0.9832`
   - sample (tactical[2]/micro_display): `120691097.19`

554. **MATH 13.53** (`math-cases-ch13-binomial.json`, sev=5) — Assembly Line Defect Inspection
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 24)`
   - sample (tactical[2]/micro_display): `0.0003`
   - sample (tactical[2]/micro_display): `0.8835`

555. **MATH 13.54** (`math-cases-ch13-binomial.json`, sev=5) — Essay Grading Accuracy
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 20)`
   - sample (tactical[2]/micro_display): `0.0023`
   - sample (tactical[2]/micro_display): `0.867`

556. **MATH 13.55** (`math-cases-ch13-binomial.json`, sev=5) — Air Traffic Control Simulator
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `P(X = 32)`
   - sample (tactical[2]/micro_display): `0.961`
   - sample (tactical[2]/micro_display): `317170.85`

557. **MATH 1.114** (`math-ch1-exam.json`, sev=5) — Exam-style tasks - 6
   - fields: tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[4]/micro_display): `10+8=18`
   - sample (tactical[4]/micro_display): `18+6=24`
   - sample (tactical[4]/adjacent_micro_displays): `10+8=18 || 18+6=24`

558. **MATH 10.1.2** (`math-ch10-exp-log.json`, sev=5) — Recovering continuous force from an exact sample table
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `P(0) = P_0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

559. **MATH 10.1.17** (`math-ch10-exp-log.json`, sev=5) — Hybrid — integer doubling table meets continuous force $\ln 2$
   - fields: tactical[0]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `e^{k} = 2`
   - sample (tactical[0]/micro_display): `k = \ln 2`
   - sample (tactical[0]/adjacent_micro_displays): `e^{k} = 2 || k = \ln 2`

560. **MATH 10.1.25** (`math-ch10-exp-log.json`, sev=5) — Rebuild decay from a lettered half-life
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `kH = -\ln 2`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

561. **MATH 10.2.24** (`math-ch10-exp-log.json`, sev=5) — Parametric quadratic after the substitution $u=\log_{b}x$
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x = b^{2}`
   - sample (tactical[1]/micro_display): `x = b^{3}`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

562. **MATH 10.2.35** (`math-ch10-exp-log.json`, sev=5) — Rebuild base from two graph points
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `8=2^{3}`
   - sample (tactical[0]/micro_display): `8=8`
   - sample (tactical[0]/adjacent_micro_displays): `8=2^{3} || 8=8`

563. **MATH 10.3.5** (`math-ch10-exp-log.json`, sev=5) — Parametric — nested logs pinning an exponential stock
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `\ln A = 1`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

564. **MATH 10.3.7** (`math-ch10-exp-log.json`, sev=5) — Nested — log constraints on an exponential hitting clock
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `\ln P_0 = 3`
   - sample (tactical[1]/micro_display): `\ln k = -2`
   - sample (tactical[1]/micro_display): `k = e^{-2}`

565. **MATH 10.3.14** (`math-ch10-exp-log.json`, sev=5) — Symbolic — change-of-base logarithm inside a power equation
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `8=2^{3}`
   - sample (tactical[0]/micro_display): `8=8`
   - sample (tactical[0]/adjacent_micro_displays): `8=2^{3} || 8=8`

566. **MATH 10.3.17** (`math-ch10-exp-log.json`, sev=5) — Nested — log-pinned force and its inverse clock
   - fields: tactical[0], tactical[2]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `\ln k = -1`
   - sample (tactical[0]/micro_display): `k = e^{-1}`
   - sample (tactical[0]/adjacent_micro_displays): `\ln k = -1 || k = e^{-1}`

567. **MATH 10.3.28** (`math-ch10-exp-log.json`, sev=5) — Text-dense — inverse clock traps beside exponential growth
   - fields: tactical[1]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `f(0) = P`
   - sample (tactical[1]/micro_display): `g(P) = 0`
   - sample (tactical[1]/adjacent_micro_displays): `f(0) = P || g(P) = 0`

568. **MATH 10.3.30** (`math-ch10-exp-log.json`, sev=5) — Applied letters — nested log link between GDP and population forces
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g = 3p`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

569. **MATH 11.162** (`math-ch11-exam.json`, sev=5) — Harbour café: drinks, cost, and staffing hours
   - fields: tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[4]/micro_display): `Q = 6`
   - sample (tactical[4]/micro_display): `Q = 10`
   - sample (tactical[4]/adjacent_micro_displays): `Q = 6 || Q = 10`

570. **MATH 11.165** (`math-ch11-exam.json`, sev=5) — Courier fleet: routes, cost, and a threshold
   - fields: tactical[1]
   - reasons: micro_display, split_foc_pair
   - sample (tactical[1]/micro_display): `x = 10`
   - sample (tactical[1]/split_foc_pair): `AC^{\prime}(x) = 0 || x = 10`

571. **MATH 11.167** (`math-ch11-exam.json`, sev=5) — Bakery chain: demand, tax, and average cost
   - fields: tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[4]/micro_display): `Q = 10`
   - sample (tactical[4]/micro_display): `Q = 18`
   - sample (tactical[4]/adjacent_micro_displays): `Q = 10 || Q = 18`

572. **MATH 11.170** (`math-ch11-exam.json`, sev=5) — Ride platform: fare, commission, and profit
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `Q = 20`
   - sample (tactical[0]/split_foc_pair): `P^{\prime}(Q) = 0 || Q = 20`
   - sample (tactical[1]/micro_display): `Q = 30`

573. **MATH 11.176** (`math-ch11-exam.json`, sev=5) — Podcast studio: advertising spend and listeners
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a = 2500`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `a = 100`

574. **MATH 11.177** (`math-ch11-exam.json`, sev=5) — Riverside market: three-sided stall enclosure
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: micro_display, split_foc_pair
   - sample (tactical[0]/micro_display): `y = 120-2x`
   - sample (tactical[1]/micro_display): `x = 30`
   - sample (tactical[1]/split_foc_pair): `A^{\prime}(x) = 0 || x = 30`

575. **MATH 11.180** (`math-ch11-exam.json`, sev=5) — Founder's wealth utility: risk attitude
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `w = 200`
   - sample (tactical[2]/micro_display): `w = 200`
   - sample (tactical[3]/micro_display): `20 - 5 = 15`

576. **MATH 11.183** (`math-ch11-exam.json`, sev=5) — Candle maker: curved MC against MR, with AC* trap
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `Q = 8`
   - sample (tactical[1]/micro_display): `MR = MC`
   - sample (tactical[2]/micro_display): `Q = 12`

577. **MATH 11.189** (`math-ch11-exam.json`, sev=5) — Coffee subscription: MU against a constant opportunity cost
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `c = 45`
   - sample (tactical[1]/micro_display): `c = 30`
   - sample (tactical[2]/micro_display): `14-6 = 8`

578. **MATH 11.190** (`math-ch11-exam.json`, sev=5) — Cold-chain: spoilage index over delivery hours
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `t = 1`
   - sample (tactical[2]/micro_display): `t = 3`
   - sample (tactical[3]/micro_display): `S(0) = 0`

579. **MATH 11.191** (`math-ch11-exam.json`, sev=5) — Two workshops: compare P′ graphs and levels
   - fields: tactical[4]
   - reasons: micro_display, split_foc_pair
   - sample (tactical[4]/micro_display): `Q = 3`
   - sample (tactical[4]/split_foc_pair): `P_A^{\prime}(3) = P_B^{\prime}(3) || Q = 3`

580. **MATH 11.193** (`math-ch11-exam.json`, sev=5) — Spice importer: per-unit tax shifts MC on the figure
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `Q = 12`
   - sample (tactical[0]/micro_display): `Q = 16`
   - sample (tactical[0]/adjacent_micro_displays): `Q = 12 || Q = 16`

581. **MATH 11.196** (`math-ch11-exam.json`, sev=5) — Pop-up gallery: Newton quotient, tax, and elasticity stub
   - fields: tactical[2], tactical[3]
   - reasons: micro_display, split_foc_pair
   - sample (tactical[2]/micro_display): `x = 4`
   - sample (tactical[2]/split_foc_pair): `P^{\prime}(x) = 2x-8 = 2(x-4) || x = 4`
   - sample (tactical[3]/micro_display): `p = 20`

582. **MATH 11.200** (`math-ch11-exam.json`, sev=5) — Brewery: read P′ and P″, infer P without drawing P
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `Q = 2`
   - sample (tactical[0]/micro_display): `Q = 8`
   - sample (tactical[0]/adjacent_micro_displays): `Q = 2 || Q = 8`

583. **MATH 11.204** (`math-ch11-exam.json`, sev=5) — Theatre: price and MR figure with constant MC
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `Q = 10`
   - sample (tactical[1]/micro_display): `MC = 10`
   - sample (tactical[1]/micro_display): `Q = 15`

584. **MATH 12.204** (`math-ch12-exam.json`, sev=5) — Exam-style tasks - 6
   - fields: tactical[1]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `51 + 44 = 95`
   - sample (tactical[1]/micro_display): `95 - 19 = 76`
   - sample (tactical[1]/adjacent_micro_displays): `51 + 44 = 95 || 95 - 19 = 76`

585. **MATH 13.76** (`math-ch13-exam.json`, sev=5) — Regional Tennis Circuit
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.3144`
   - sample (tactical[4]/micro_display): `0.622`

586. **MATH 13.79** (`math-ch13-exam.json`, sev=5) — Night Courier Audit
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.5927`
   - sample (tactical[4]/micro_display): `0.1226`

587. **MATH 13.81** (`math-ch13-exam.json`, sev=5) — Warehouse Picker Accuracy
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.2031`

588. **MATH 13.82** (`math-ch13-exam.json`, sev=5) — Language Lab Listening Test
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4219`
   - sample (tactical[4]/micro_display): `0.4661`

589. **MATH 13.86** (`math-ch13-exam.json`, sev=5) — Museum Audio Guide Returns
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.3446`

590. **MATH 13.87** (`math-ch13-exam.json`, sev=5) — Startup Demo Conversions
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.064`
   - sample (tactical[4]/micro_display): `0.9502`

591. **MATH 13.88** (`math-ch13-exam.json`, sev=5) — Campus Bus On-Time Arrivals
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.2031`

592. **MATH 13.89** (`math-ch13-exam.json`, sev=5) — Escape-Room Puzzle Solves
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.216`
   - sample (tactical[4]/micro_display): `0.7667`

593. **MATH 13.92** (`math-ch13-exam.json`, sev=5) — Lab Pipette Calibration Passes
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.6141`
   - sample (tactical[4]/micro_display): `0.1052`

594. **MATH 13.93** (`math-ch13-exam.json`, sev=5) — Online Quiz Instant Feedback
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.216`
   - sample (tactical[4]/micro_display): `0.7667`

595. **MATH 13.94** (`math-ch13-exam.json`, sev=5) — Airport Lounge Wi-Fi Sessions
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.2031`

596. **MATH 13.95** (`math-ch13-exam.json`, sev=5) — Charity Door-to-Door Pledges
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.0156`
   - sample (tactical[4]/micro_display): `0.9958`

597. **MATH 13.97** (`math-ch13-exam.json`, sev=5) — Swim-Meet Legal Starts
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.2031`

598. **MATH 13.98** (`math-ch13-exam.json`, sev=5) — Library Reserve Hold Pickups
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4219`
   - sample (tactical[4]/micro_display): `0.4661`

599. **MATH 13.99** (`math-ch13-exam.json`, sev=5) — App Push Notification Opens
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.027`
   - sample (tactical[4]/micro_display): `0.9887`

600. **MATH 13.100** (`math-ch13-exam.json`, sev=5) — Robot Vacuum Room Completions
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.343`
   - sample (tactical[4]/micro_display): `0.4482`

601. **MATH 13.101** (`math-ch13-exam.json`, sev=5) — Debate Tournament Coin Tosses
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.1664`
   - sample (tactical[4]/micro_display): `0.8364`

602. **MATH 13.103** (`math-ch13-exam.json`, sev=5) — Cinema Loyalty Card Scans
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.216`
   - sample (tactical[4]/micro_display): `0.6846`

603. **MATH 13.104** (`math-ch13-exam.json`, sev=5) — Ski-Lift Gate Passes
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.729`
   - sample (tactical[4]/micro_display): `0.0381`

604. **MATH 13.106** (`math-ch13-exam.json`, sev=5) — Campus Printer Job Success
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.2031`

605. **MATH 13.108** (`math-ch13-exam.json`, sev=5) — Harbor Foghorn Tests
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.3446`

606. **MATH 13.109** (`math-ch13-exam.json`, sev=5) — Blood-Donation Appointment Shows
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.512`
   - sample (tactical[4]/micro_display): `0.2031`

607. **MATH 13.110** (`math-ch13-exam.json`, sev=5) — Drone Delivery Drop Accuracy
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4219`
   - sample (tactical[4]/micro_display): `0.3215`

608. **MATH 13.111** (`math-ch13-exam.json`, sev=5) — Music Festival Wristband Scans
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.729`
   - sample (tactical[4]/micro_display): `0.0381`

609. **MATH 13.112** (`math-ch13-exam.json`, sev=5) — Tutoring Session Homework Done
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.216`
   - sample (tactical[4]/micro_display): `0.7667`

610. **MATH 13.115** (`math-ch13-exam.json`, sev=5) — Satellite Packet Acknowledgements
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.6141`
   - sample (tactical[4]/micro_display): `0.1052`

611. **MATH 2.35** (`math-ch2-cases.json`, sev=5) — Warm-up: adding two fractions
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[3]/micro_display): `m=1`
   - sample (tactical[3]/micro_display): `n=1`
   - sample (tactical[3]/micro_display): `2`

612. **MATH 2.39** (`math-ch2-cases.json`, sev=5) — Cancelled factor kept as the remainder
   - fields: tactical[0], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `k=1`

613. **MATH 2.40** (`math-ch2-cases.json`, sev=5) — LCD taken as a sum of denominators
   - fields: tactical[0], tactical[1]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `r=1`
   - sample (tactical[0]/micro_display): `s=1`
   - sample (tactical[0]/micro_display): `2`

614. **MATH 2.44** (`math-ch2-cases.json`, sev=5) — Binomial square missing the doubled cross term
   - fields: tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `1^2=1`
   - sample (tactical[2]/micro_display): `v=1`
   - sample (tactical[2]/micro_display): `1+2+1=4`

615. **MATH 2.71** (`math-ch2-cases.json`, sev=5) — Warm-up: negative and zero exponents
   - fields: tactical[2]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `b^0=1`
   - sample (tactical[2]/micro_display): `b^{0}=1`
   - sample (tactical[2]/adjacent_micro_displays): `b^0=1 || b^{0}=1`

616. **MATH 2.87** (`math-ch2-cases.json`, sev=5) — Fractional powers of twelve, twenty-seven, and thirty-two
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `4`
   - sample (tactical[1]/micro_display): `2^3=8`
   - sample (tactical[4]/micro_display): `a=3`

617. **MATH 2.88** (`math-ch2-cases.json`, sev=5) — Rewriting four, eight, and thirty-two as powers of two
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x^0=1,`
   - sample (tactical[0]/micro_display): `1`
   - sample (tactical[0]/micro_display): `1+1=2`

618. **MATH 2.95** (`math-ch2-cases.json`, sev=5) — A powered monomial quotient in two letters
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=4`
   - sample (tactical[0]/micro_display): `b=2`
   - sample (tactical[0]/micro_display): `m=3`

619. **MATH 2.98** (`math-ch2-cases.json`, sev=5) — Multiplying, stacking, and dividing exponents on one base
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `9`
   - sample (tactical[2]/micro_display): `x=16`
   - sample (tactical[2]/micro_display): `m=3`

620. **MATH 2.106** (`math-ch2-cases.json`, sev=5) — Warm-up: quadratic under absolute value bars
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[1]/micro_display): `t=4`
   - sample (tactical[2]/micro_display): `x=4`

621. **MATH 2.109** (`math-ch2-cases.json`, sev=5) — Sign of a letter over its modulus
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[2]/micro_display): `x=0`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

622. **MATH 2.115** (`math-ch2-cases.json`, sev=5) — Opposite linear factors, five different pairs
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-3`
   - sample (tactical[1]/micro_display): `3`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

623. **MATH 2.117** (`math-ch2-cases.json`, sev=5) — Root of a squared linear form, five insides
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[1]/micro_display): `v=u-1`
   - sample (tactical[2]/micro_display): `x=2`

624. **MATH 2.118** (`math-ch2-cases.json`, sev=5) — Adding the letter after the root of its square
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `r=4`
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `5`

625. **MATH 2.133** (`math-ch2-cases.json`, sev=5) — Two quadratics, only one a square
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `a=4`
   - sample (tactical[1]/micro_display): `x=-3`
   - sample (tactical[1]/micro_display): `3`

626. **MATH 2.140** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 4
   - fields: tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `a+b=s`
   - sample (tactical[1]/micro_display): `ab=p`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

627. **MATH 2.142** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 6
   - fields: tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `v=0`
   - sample (tactical[2]/micro_display): `v=4`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

628. **MATH 2.143** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 7
   - fields: tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=10`
   - sample (tactical[1]/micro_display): `x=10`
   - sample (tactical[2]/micro_display): `u+v+w=0`

629. **MATH 2.144** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 8
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `y^2=xz`
   - sample (tactical[2]/micro_display): `xz=y^2`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

630. **MATH 2.148** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 12
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `R(x)=x+2`
   - sample (tactical[1]/micro_display): `R(2)=4`
   - sample (tactical[3]/micro_display): `0`

631. **MATH 2.149** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 13
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `4^2=16`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `4`

632. **MATH 2.150** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 14
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[1]/micro_display): `3`
   - sample (tactical[2]/micro_display): `x=7`

633. **MATH 2.152** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `R(x)=x+3`
   - sample (tactical[1]/micro_display): `R(3)=6`
   - sample (tactical[3]/micro_display): `0`

634. **MATH 2.153** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 17
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `9^2=81`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `9`

635. **MATH 2.154** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 18
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `3`
   - sample (tactical[2]/micro_display): `x=8`

636. **MATH 2.156** (`math-ch2-cases.json`, sev=5) — Exam-style tasks - 20
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `R(x)=x+4`
   - sample (tactical[1]/micro_display): `R(4)=8`
   - sample (tactical[3]/micro_display): `0`

637. **MATH 11.128** (`math-ch3-exam.json`, sev=5) — Exam-style tasks - 5
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `t=15.068417`

638. **MATH 11.129** (`math-ch3-exam.json`, sev=5) — Exam-style tasks - 6
   - fields: tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `R=0.05337574`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

639. **MATH 11.135** (`math-ch3-exam.json`, sev=5) — Exam-style tasks - 12
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[3]/micro_display): `16.12`
   - sample (tactical[3]/micro_display): `15.12`
   - sample (tactical[3]/adjacent_micro_displays): `16.12 || 15.12`

640. **MATH 11.137** (`math-ch3-exam.json`, sev=5) — Exam-style tasks - 14
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q = 1 + 0.05`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

641. **MATH 4.12** (`math-ch4-cases.json`, sev=5) — Runners, printers, and a train past a pole
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `s = 12`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

642. **MATH 4.16** (`math-ch4-cases.json`, sev=5) — Five separate motion and current stories
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `t = 0.9`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/micro_display): `2 + 3 = 5`

643. **MATH 4.22** (`math-ch4-cases.json`, sev=5) — Five separate train-passing and unit-conversion stories
   - fields: tactical[0], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `90 - 54 = 36`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

644. **MATH 4.30** (`math-ch4-cases.json`, sev=5) — A platform, overlapping hands, and a faster leftover fill
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `60 = 5.5m`
   - sample (tactical[2]/micro_display): `0.3x = 6`
   - sample (tactical[2]/micro_display): `x = 20`

645. **MATH 4.37** (`math-ch4-cases.json`, sev=5) — Joint Audit Report Production Rates
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `13T = 480`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `8t = 66`

646. **MATH 4.42** (`math-ch4-cases.json`, sev=5) — Parametric Break-Even Equation
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[0]/micro_display): `0 = -3`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

647. **MATH 4.49** (`math-ch4-cases.json`, sev=5) — Reconstruction of Initial Capital via Reverse Operations
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0 = 0`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `0 = 3(T - 2)`

648. **MATH 4.52** (`math-ch4-cases.json`, sev=5) — Executive Compensation Adjustment Model
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `d = 18.4`

649. **MATH 4.53** (`math-ch4-cases.json`, sev=5) — Liquid Level Equalization in Coupled Reservoirs
   - fields: tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[4]/micro_display): `a = b = 0`
   - sample (tactical[4]/micro_display): `2qt = 40`
   - sample (tactical[4]/micro_display): `a = b = 0`

650. **MATH 4.56** (`math-ch4-cases.json`, sev=5) — Corporate Budget Allocation with Remainder and Policy Parameter
   - fields: solution_overview, tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `S = mS - 20`
   - sample (tactical[0]/micro_display): `0 = 20`
   - sample (tactical[2]/micro_display): `T = 100`

651. **MATH 4.57** (`math-ch4-cases.json`, sev=5) — Perimeter Equivalence of Partitioned Storage Plots
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/micro_display): `x = -2`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

652. **MATH 4.59** (`math-ch4-cases.json`, sev=5) — A square of area $49$, and both signs of a square root
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `s^{2} = 49`
   - sample (tactical[0]/micro_display): `s = \pm 7`
   - sample (tactical[0]/adjacent_micro_displays): `s^{2} = 49 || s = \pm 7`

653. **MATH 4.63** (`math-ch4-cases.json`, sev=5) — Five separate Vieta claims from different quadratics
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `2 + 5 = 7`
   - sample (tactical[4]/micro_display): `u + v = 7`
   - sample (tactical[4]/micro_display): `uv = 10`

654. **MATH 4.66** (`math-ch4-cases.json`, sev=5) — Two consecutive integers whose product is $56$
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `7 + 8 =15`
   - sample (tactical[4]/micro_display): `7+8=15`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

655. **MATH 4.67** (`math-ch4-cases.json`, sev=5) — A $5$ by $12$ rectangle from area $60$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `w = 5`
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/micro_display): `A=55`

656. **MATH 4.71** (`math-ch4-cases.json`, sev=5) — Five separate completing-the-square and factoring claims
   - fields: tactical[0], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3^{2} = 9`
   - sample (tactical[0]/micro_display): `-5 + 9 = 4`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

657. **MATH 4.74** (`math-ch4-cases.json`, sev=5) — Five separate rectangle-side stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `w^{2} = 24`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

658. **MATH 4.77** (`math-ch4-cases.json`, sev=5) — Five separate Pythagoras-quadratic stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `c = 15`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

659. **MATH 4.83** (`math-ch4-cases.json`, sev=5) — Five separate long-rectangle stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/micro_display): `7 + 5 = 12`
   - sample (tactical[1]/dense_micro_chain): `9 micro-ish displays`

660. **MATH 4.85** (`math-ch4-cases.json`, sev=5) — Five separate reciprocal quadratic stories
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `16 - 16 = 0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/micro_display): `1 + 2 = 3`

661. **MATH 4.87** (`math-ch4-cases.json`, sev=5) — An inner path, a projectile at $40$ m, and consecutive odds
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `11 + 13 = 24`

662. **MATH 4.91** (`math-ch4-cases.json`, sev=5) — Sum $15$ product $54$, a walkway, and three consecutives
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `xy = 54`
   - sample (tactical[2]/micro_display): `\ell = 10`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

663. **MATH 4.95** (`math-ch4-cases.json`, sev=5) — Parameterized Quadratic Equation and Root Properties
   - fields: tactical[0], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `m = 2`
   - sample (tactical[2]/micro_display): `1 + 1 = 2`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

664. **MATH 4.96** (`math-ch4-cases.json`, sev=5) — Macroeconomic Parameter Model
   - fields: tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `4 + 4 = 8`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

665. **MATH 4.101** (`math-ch4-cases.json`, sev=5) — Parameterized Quadratic Family and Root Separation
   - fields: solution_overview, tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[2]/micro_display): `4 - 2 = 2`
   - sample (tactical[2]/micro_display): `4 - 5 = -1`

666. **MATH 4.103** (`math-ch4-cases.json`, sev=5) — Break-Even Analysis with Irrational Roots
   - fields: tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `36 - 7 = 29`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

667. **MATH 4.105** (`math-ch4-cases.json`, sev=5) — Vertical Flight Model of a Test Drone
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `h(4) = 125`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

668. **MATH 4.108** (`math-ch4-cases.json`, sev=5) — Reduction of a Fourth-Degree Polynomial to Quadratic Form
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `x(x - 6) = 0`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

669. **MATH 4.129** (`math-ch4-cases.json`, sev=5) — Five radical equations with extraneous-root checks
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0 = x(x - 4)`
   - sample (tactical[0]/micro_display): `4 - 1 = 3`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

670. **MATH 4.133** (`math-ch4-cases.json`, sev=5) — Five independent radical isolation equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`

671. **MATH 4.134** (`math-ch4-cases.json`, sev=5) — Five independent radical difference equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x = 4`
   - sample (tactical[0]/micro_display): `4 - 2 = 2`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

672. **MATH 4.145** (`math-ch4-cases.json`, sev=5) — Rational Equation with Denominator Clearing
   - fields: solution_overview, tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[3]/micro_display): `x = 2`

673. **MATH 4.146** (`math-ch4-cases.json`, sev=5) — Radical Equilibrium Equation and Extraneous Roots
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `2 + 3 = 5`
   - sample (tactical[4]/micro_display): `7 - 6 = 1`

674. **MATH 4.147** (`math-ch4-cases.json`, sev=5) — Radical Equation with Extraneous Roots
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `2 - 1 = 1`

675. **MATH 4.151** (`math-ch4-cases.json`, sev=5) — Parametric Rational Equation Reducible to Linear
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `7 = -4`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `5a = -1`

676. **MATH 4.152** (`math-ch4-cases.json`, sev=5) — Radical Equation via Quadratic Substitution
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[4]/micro_display): `|-8| = 8`

677. **MATH 4.158** (`math-ch4-cases.json`, sev=5) — Flow Rate Regulation in Coolant Networks
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `x^2 - 1 = 0`
   - sample (solution_overview/micro_display): `x = 3`
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`

678. **MATH 4.163** (`math-ch4-cases.json`, sev=5) — Solvability and Domain Restrictions of an Algebraic Equation
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[4]/micro_display): `3 - 3 = 0`

679. **MATH 4.169** (`math-ch4-cases.json`, sev=5) — A quadratic hidden behind base three
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `1 + 2 = 3`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

680. **MATH 4.172** (`math-ch4-cases.json`, sev=5) — An exponential term and its reciprocal
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `0 + 1 = 1`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

681. **MATH 4.175** (`math-ch4-cases.json`, sev=5) — Doubling a capital at a fixed rate
   - fields: solution_overview, tactical[0], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `1.04^t = m`
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `1.04^t = 2`

682. **MATH 4.179** (`math-ch4-cases.json`, sev=5) — A quadratic hidden behind base three
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[0]/micro_display): `1 - 0 = 1`

683. **MATH 4.180** (`math-ch4-cases.json`, sev=5) — An extraneous candidate in a logarithmic equation
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/micro_display): `x = 5`
   - sample (tactical[2]/micro_display): `x = -2`

684. **MATH 4.214** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 21
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `7 + 5 = 12`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `t = 1.25`

685. **MATH 4.219** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 26
   - fields: tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `w = 6`
   - sample (tactical[3]/micro_display): `L = 1`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

686. **MATH 4.220** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 27
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h = 12`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `w = 1.8`

687. **MATH 4.222** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 29
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `5^{2} = 25`
   - sample (tactical[2]/micro_display): `w = 1`
   - sample (tactical[3]/micro_display): `\log x = L`

688. **MATH 4.225** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 32
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `w = 1.25`
   - sample (tactical[3]/micro_display): `\log 10 = 1`

689. **MATH 4.226** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 33
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `3n = 54`
   - sample (tactical[0]/micro_display): `n = 18`
   - sample (tactical[0]/adjacent_micro_displays): `3n = 54 || n = 18`

690. **MATH 4.229** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 36
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `6w = 48`
   - sample (tactical[0]/micro_display): `w = 8`
   - sample (tactical[0]/adjacent_micro_displays): `6w = 48 || w = 8`

691. **MATH 4.232** (`math-ch4-cases.json`, sev=5) — Exam-style tasks - 39
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `w = 3`
   - sample (tactical[2]/micro_display): `\log 10 = 1`
   - sample (tactical[2]/micro_display): `L = 1`

692. **MATH 5.67** (`math-ch5-exam.json`, sev=5) — Exam-style tasks - 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `1x+1y=80`
   - sample (tactical[0]/micro_display): `x = 30`
   - sample (tactical[0]/micro_display): `y = 50`

693. **MATH 5.71** (`math-ch5-exam.json`, sev=5) — Exam-style tasks - 11
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/micro_display): `5x = 450`
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[0]/micro_display): `x + y = 180`

694. **MATH 6.01** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 1
   - fields: tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x=-3`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

695. **MATH 6.02** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-4`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=1`

696. **MATH 6.03** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 3
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-3`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-2`

697. **MATH 6.04** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-1`

698. **MATH 6.05** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-4`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=3`

699. **MATH 6.06** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 6
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-7`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `x=-2`

700. **MATH 6.07** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-5`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=2`

701. **MATH 6.08** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-5`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-2`

702. **MATH 6.09** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 9
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-6`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/micro_display): `x=-3`

703. **MATH 6.10** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=-7`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

704. **MATH 6.11** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 11
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-9`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-6`

705. **MATH 6.12** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 12
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-9`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `x=-2`

706. **MATH 6.13** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 13
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

707. **MATH 6.14** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 14
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x=-3`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

708. **MATH 6.15** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 15
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-2`

709. **MATH 6.16** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 16
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `x=-1`
   - sample (tactical[3]/micro_display): `x=-4`
   - sample (tactical[3]/dense_micro_chain): `8 micro-ish displays`

710. **MATH 6.17** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 17
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

711. **MATH 6.18** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 18
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `x=-3`
   - sample (tactical[1]/dense_micro_chain): `8 micro-ish displays`

712. **MATH 6.19** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 19
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-4`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `x=-6`

713. **MATH 6.20** (`math-ch6-inequalities.json`, sev=5) — Rational Inequalities — 20
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=-3`
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

714. **MATH 6.21** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/adjacent_micro_displays): `x=2 || x=3`

715. **MATH 6.22** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 2
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-5`
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[0]/adjacent_micro_displays): `x=-5 || x=-2`

716. **MATH 6.23** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 3
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-2`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/adjacent_micro_displays): `x=-2 || x=3`

717. **MATH 6.24** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 4
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=3`
   - sample (tactical[1]/micro_display): `x=7`
   - sample (tactical[1]/adjacent_micro_displays): `x=3 || x=7`

718. **MATH 6.25** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 5
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=-5`
   - sample (tactical[2]/micro_display): `x=-1`
   - sample (tactical[2]/micro_display): `x=2`

719. **MATH 6.26** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 6
   - fields: tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=-7`
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/adjacent_micro_displays): `x=-7 || x=2`

720. **MATH 6.27** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 7
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-7`
   - sample (tactical[0]/micro_display): `x=4`
   - sample (tactical[0]/adjacent_micro_displays): `x=-7 || x=4`

721. **MATH 6.28** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 8
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[3]/micro_display): `x=-5`
   - sample (tactical[3]/micro_display): `x=12`
   - sample (tactical[3]/adjacent_micro_displays): `x=-5 || x=12`

722. **MATH 6.29** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 9
   - fields: tactical[0]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-5`
   - sample (tactical[0]/micro_display): `x=7`
   - sample (tactical[0]/adjacent_micro_displays): `x=-5 || x=7`

723. **MATH 6.30** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 10
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-9`
   - sample (tactical[1]/micro_display): `x=-7`
   - sample (tactical[1]/micro_display): `x=5`

724. **MATH 6.31** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 11
   - fields: tactical[0], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-5`
   - sample (tactical[0]/micro_display): `x=10`
   - sample (tactical[0]/adjacent_micro_displays): `x=-5 || x=10`

725. **MATH 6.32** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 12
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=-5`
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/adjacent_micro_displays): `x=-5 || x=2`

726. **MATH 6.33** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 13
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[3]/micro_display): `x=-2`

727. **MATH 6.34** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 14
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-4`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/adjacent_micro_displays): `x=-4 || x=3`

728. **MATH 6.35** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 15
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[0]/micro_display): `x=5`
   - sample (tactical[0]/adjacent_micro_displays): `x=2 || x=5`

729. **MATH 6.36** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 16
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=-4`
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/adjacent_micro_displays): `x=-4 || x=1`

730. **MATH 6.37** (`math-ch6-inequalities.json`, sev=5) — Quadratic Sign Inequalities — 17
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[1]/micro_display): `x=-3`
   - sample (tactical[1]/micro_display): `x=3`

731. **MATH 6.43** (`math-ch6-inequalities.json`, sev=5) — Compound & Special Inequalities — 6
   - fields: tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[3]/micro_display): `x=-1`
   - sample (tactical[3]/micro_display): `x=4`
   - sample (tactical[3]/adjacent_micro_displays): `x=-1 || x=4`

732. **MATH 6.50** (`math-ch6-inequalities.json`, sev=5) — Compound & Special Inequalities — 13
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `x=3`
   - sample (tactical[2]/micro_display): `x=1`
   - sample (tactical[2]/micro_display): `x=5`

733. **MATH 6.55** (`math-ch6-inequalities.json`, sev=5) — Compound & Special Inequalities — 18
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[1]/micro_display): `x=-2`

734. **MATH 6.62** (`math-ch6-inequalities.json`, sev=5) — Compound & Special Inequalities — 25
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `x=-4`
   - sample (tactical[1]/micro_display): `x=2`

735. **MATH 6.63** (`math-ch6-inequalities.json`, sev=5) — Compound & Special Inequalities — 26
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `x=1`

736. **MATH 6.75** (`math-ch6-inequalities.json`, sev=5) — Bulk Soil Purchase
   - fields: tactical[2]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `n=10`
   - sample (tactical[2]/micro_display): `n=9`
   - sample (tactical[2]/adjacent_micro_displays): `n=10 || n=9`

737. **MATH 6.79** (`math-ch6-inequalities.json`, sev=5) — Overtime Pay
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `45-40=5`
   - sample (tactical[1]/micro_display): `44-40=4`
   - sample (tactical[3]/micro_display): `50-40=10`

738. **MATH 6.80** (`math-ch6-inequalities.json`, sev=5) — Markup vs. Profit Margin
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `50-40=10`
   - sample (tactical[1]/micro_display): `45-40=5`
   - sample (tactical[2]/micro_display): `48-40=8`

739. **MATH 6.85** (`math-ch6-inequalities.json`, sev=5) — Support Cable Length
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `L=25`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `h=10`

740. **MATH 6.91** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 3
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `x + 1=0`
   - sample (tactical[2]/micro_display): `x=-1`
   - sample (tactical[2]/adjacent_micro_displays): `x + 1=0 || x=-1`

741. **MATH 6.93** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `x=5`

742. **MATH 6.98** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 10
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[1]/adjacent_micro_displays): `x=-1 || x=2`

743. **MATH 6.110** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 22
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `s=11`
   - sample (tactical[3]/dense_micro_chain): `6 micro-ish displays`

744. **MATH 6.115** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 27
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `6 + 8 = 14`
   - sample (tactical[3]/micro_display): `n = 35`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

745. **MATH 6.121** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 33
   - fields: tactical[1], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[1]/micro_display): `x=1`
   - sample (tactical[3]/micro_display): `x=-1`
   - sample (tactical[3]/micro_display): `x=2`

746. **MATH 6.125** (`math-ch6-inequalities.json`, sev=5) — Exam-style tasks - 37
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `n = 50`
   - sample (tactical[3]/micro_display): `x=a`
   - sample (tactical[3]/micro_display): `x=-2a`

747. **MATH 7.02** (`math-ch7-linear-quadratic.json`, sev=5) — Slope and Opening at a Glance
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `m=3`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `a=-2`

748. **MATH 7.03** (`math-ch7-linear-quadratic.json`, sev=5) — Axis from Coefficients
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

749. **MATH 7.22** (`math-ch7-linear-quadratic.json`, sev=5) — Discriminant Logic for Quadratics
   - fields: tactical[2], tactical[3]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `x^{2}=0`
   - sample (tactical[2]/micro_display): `\Delta=0`
   - sample (tactical[2]/adjacent_micro_displays): `x^{2}=0 || \Delta=0`

750. **MATH 7.23** (`math-ch7-linear-quadratic.json`, sev=5) — Even Quadratic Symmetry
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `-b = b`
   - sample (tactical[0]/micro_display): `g(-x)=0`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

751. **MATH 7.32** (`math-ch7-linear-quadratic.json`, sev=5) — Vertex Form Uniqueness
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `g(h)=k`
   - sample (tactical[1]/micro_display): `a=-1`
   - sample (tactical[1]/micro_display): `g(0)=1`

752. **MATH 7.37** (`math-ch7-linear-quadratic.json`, sev=5) — Composition Trap with Explicit Maps
   - fields: tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `f(0)=-1`
   - sample (tactical[2]/micro_display): `g(-1)=6`
   - sample (tactical[2]/micro_display): `g(-1)=0`

753. **MATH 7.38** (`math-ch7-linear-quadratic.json`, sev=5) — Wrong Completed Square Sign
   - fields: tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `g(0)=-10`
   - sample (tactical[3]/micro_display): `g(0)=-10`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

754. **MATH 7.39** (`math-ch7-linear-quadratic.json`, sev=5) — Three Maps: Line, Square, Difference
   - fields: tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `d(x) = 0`
   - sample (tactical[3]/micro_display): `d(0)=5`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

755. **MATH 7.40** (`math-ch7-linear-quadratic.json`, sev=5) — Parameter Constraint on Opening
   - fields: tactical[0]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=1`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

756. **MATH 7.56** (`math-ch7-linear-quadratic.json`, sev=5) — A Water Tank Draining at a Steady Rate
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `200-8x=0`
   - sample (tactical[2]/micro_display): `x=25`

757. **MATH 7.59** (`math-ch7-linear-quadratic.json`, sev=5) — A Gentle Slope in Fraction Form
   - fields: tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=6`
   - sample (tactical[1]/micro_display): `v(6)=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

758. **MATH 7.67** (`math-ch7-linear-quadratic.json`, sev=5) — Rebuilding a Parabola From Its Zeros
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

759. **MATH 7.70** (`math-ch7-linear-quadratic.json`, sev=5) — When Is the Difference Still Curved?
   - fields: tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `m = b`
   - sample (tactical[3]/micro_display): `b-m = 0`
   - sample (tactical[3]/micro_display): `f(x)=2x`

760. **MATH 7.71** (`math-ch7-linear-quadratic.json`, sev=5) — Touching at the Vertex
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=-1`
   - sample (tactical[1]/micro_display): `g(-1)=-1`

761. **MATH 7.74** (`math-ch7-linear-quadratic.json`, sev=5) — Fuel Use Against Cruising Speed
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-2`
   - sample (tactical[0]/micro_display): `x=50`
   - sample (tactical[1]/micro_display): `F(50)=30`

762. **MATH 7.77** (`math-ch7-linear-quadratic.json`, sev=5) — Half-Scaled Factors and the Values a Parabola Reaches
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `w(x)=0`
   - sample (tactical[0]/micro_display): `x=-1`
   - sample (tactical[0]/micro_display): `x=7`

763. **MATH 7.79** (`math-ch7-linear-quadratic.json`, sev=5) — Undoing a Line Around a Parabola
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `y = mx+q`
   - sample (tactical[3]/micro_display): `f(x)=x+1`
   - sample (tactical[3]/micro_display): `S=x-1`

764. **MATH 7.82** (`math-ch7-linear-quadratic.json`, sev=5) — Where the Difference Reaches Its Extreme
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `g(x)= 0`
   - sample (tactical[1]/micro_display): `m=2`
   - sample (tactical[1]/micro_display): `m=1`

765. **MATH 7.84** (`math-ch7-linear-quadratic.json`, sev=5) — Sliding a Line Until It Touches
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `29+4c = 0`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

766. **MATH 7.89** (`math-ch7-linear-quadratic.json`, sev=5) — Lines Through the Vertex
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `f(x)=k`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `a(x-h) = m`

767. **MATH 7.92** (`math-ch7-linear-quadratic.json`, sev=5) — Reading Roots Through a Linear Substitution
   - fields: tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `g(x)=0`
   - sample (tactical[3]/micro_display): `f(x)=x+1`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

768. **MATH 7.95** (`math-ch7-linear-quadratic.json`, sev=5) — Sliding the Parabola Sideways
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `8r+16 = 0`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

769. **MATH 7.E07** (`math-ch7-mixed-exam.json`, sev=5) — Line inside a square — axis of the other order
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`

770. **MATH 7.E08** (`math-ch7-mixed-exam.json`, sev=5) — Scaled product — Vieta with a leading $2$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=1`
   - sample (tactical[0]/micro_display): `x=3`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

771. **MATH 7.E10** (`math-ch7-mixed-exam.json`, sev=5) — Dock crane — stretch from a named vertex
   - fields: tactical[0], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h=4`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `f(1)=1`

772. **MATH 7.E14** (`math-ch7-mixed-exam.json`, sev=5) — Completing the square — signs and a shift trap
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `h=-3`
   - sample (tactical[0]/micro_display): `g(-3)=-4`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

773. **MATH 8.99** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `3=3.`
   - sample (tactical[1]/micro_display): `L=25`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

774. **MATH 8.101** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 4
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `g(2)=216`
   - sample (tactical[0]/micro_display): `12=12.`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

775. **MATH 8.107** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 10
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `S(16)=32`
   - sample (tactical[3]/micro_display): `t=8`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

776. **MATH 8.110** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 13
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=3`
   - sample (tactical[1]/micro_display): `3^{2}=9`
   - sample (tactical[1]/micro_display): `x=9`

777. **MATH 8.112** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 15
   - fields: tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `2^{3}=8`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `4^{a}=8`

778. **MATH 8.115** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 18
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=4`
   - sample (tactical[1]/micro_display): `4^{2}=16`
   - sample (tactical[1]/micro_display): `x=16`

779. **MATH 8.117** (`math-ch8-exam.json`, sev=5) — Exam-style tasks - 20
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a=-2`
   - sample (tactical[1]/micro_display): `3^{2}=9`
   - sample (tactical[2]/micro_display): `a=-2`

780. **MATH 9.E01** (`math-ch9-mixed-exam.json`, sev=5) — Touch, ends, and a dashed mark from ticks
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `p(0)=-2`
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

781. **MATH 9.E04** (`math-ch9-mixed-exam.json`, sev=5) — Shared roots, parity, and nested degree
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `q(1)=0`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

782. **MATH 9.E05** (`math-ch9-mixed-exam.json`, sev=5) — The cubic family with a sliding gap
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

783. **MATH 9.E07** (`math-ch9-mixed-exam.json`, sev=5) — Affine outer map around a difference of squares
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/micro_display): `q(-1)=-3`
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`

784. **MATH 9.E09** (`math-ch9-mixed-exam.json`, sev=5) — Solid cubic, dashed line, and a value table
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(-2)=0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `7 micro-ish displays`

785. **MATH 9.E10** (`math-ch9-mixed-exam.json`, sev=5) — Five independent small-integer traps
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(1)=-2`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `r'(1)=0`

786. **MATH 9.E11** (`math-ch9-mixed-exam.json`, sev=5) — Odd cubic against a dashed line
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(-2)=0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

787. **MATH 9.E13** (`math-ch9-mixed-exam.json`, sev=5) — Beam camber against a design mark
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `c(-1)=0`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

788. **MATH 9.E16** (`math-ch9-mixed-exam.json`, sev=5) — Double at 2 and simple at −1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/micro_display): `p'(2)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

789. **MATH 9.E17** (`math-ch9-mixed-exam.json`, sev=5) — Two even maps nested both ways
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(0)=-1`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

790. **MATH 9.E19** (`math-ch9-mixed-exam.json`, sev=5) — Touch cubic on axes plus raw samples
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(0)=4`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

791. **MATH 9.E21** (`math-ch9-mixed-exam.json`, sev=5) — Even quartic read from the axes
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/micro_display): `p(0)=1`

792. **MATH 9.E27** (`math-ch9-mixed-exam.json`, sev=5) — A cubic around a shift: factors of the nest
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(x)=x-1`
   - sample (tactical[1]/micro_display): `q(0)=0`
   - sample (tactical[1]/micro_display): `p(x)=x-1`

793. **MATH 9.E30** (`math-ch9-mixed-exam.json`, sev=5) — Meetings, interpolation, and far-field sign
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(-1)=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `x = -10`

794. **MATH 9.01** (`math-ch9-polynomials.json`, sev=5) — Two Lines Between A and B: Cubic Speed and a Distance Table
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/micro_display): `v(t)=15`

795. **MATH 9.18** (`math-ch9-polynomials.json`, sev=5) — Cooling Chamber: Cubic Temperature
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{2}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`

796. **MATH 9.19** (`math-ch9-polynomials.json`, sev=5) — Meetings of a Cubic and a Line
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(0)=0-0`
   - sample (tactical[1]/micro_display): `p(0)=0`

797. **MATH 9.20** (`math-ch9-polynomials.json`, sev=5) — Revenue Cubic and a Break-Even Read
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `R(0)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/micro_display): `R(0)=0`

798. **MATH 9.21** (`math-ch9-polynomials.json`, sev=5) — Even Quartic from a Square
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(2)=-8`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

799. **MATH 9.24** (`math-ch9-polynomials.json`, sev=5) — Production: Cubic Cost and a Piece Table
   - fields: tactical[0], tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `0^{3}=0`
   - sample (tactical[0]/micro_display): `0^{2}=0`
   - sample (tactical[0]/micro_display): `0^{1}=0`

800. **MATH 9.25** (`math-ch9-polynomials.json`, sev=5) — How Many Real Roots Can a Cubic Have?
   - fields: tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[4]/micro_display): `p(-1)=0`
   - sample (tactical[4]/micro_display): `-p(1)=-2`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

801. **MATH 9.27** (`math-ch9-polynomials.json`, sev=5) — Nested Polynomials Without Cancelling the Top Power
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(0)=1`
   - sample (tactical[1]/micro_display): `r(0)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

802. **MATH 9.32** (`math-ch9-polynomials.json`, sev=5) — When Leading Terms Cancel
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[0]/micro_display): `p+q=x+1`
   - sample (tactical[1]/micro_display): `a-b=2a`
   - sample (tactical[2]/micro_display): `ab=a(-a)`

803. **MATH 9.39** (`math-ch9-polynomials.json`, sev=5) — Quartic End Behaviour Against a Cubic
   - fields: tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[3]/micro_display): `p(0)=0`
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

804. **MATH 9.48** (`math-ch9-polynomials.json`, sev=5) — Rebuild from a Double Root and a Simple Root
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p'(1)=0`
   - sample (tactical[1]/micro_display): `p'(1)=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

805. **MATH 9.50** (`math-ch9-polynomials.json`, sev=5) — Graph of $x^{3}-x$ Versus a Raised Copy
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(0)=0`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

806. **MATH 9.53** (`math-ch9-polynomials.json`, sev=5) — Double Root at One, Simple Root at Negative Two
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p'(1)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `p'(-2)=9`

807. **MATH 9.58** (`math-ch9-polynomials.json`, sev=5) — Far-End Behaviour Without a Formula
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(x)=1)`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

808. **MATH 9.63** (`math-ch9-polynomials.json`, sev=5) — When Equal Leading Terms Cancel in a Sum (Set 1)
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: adjacent_micro_displays, micro_display
   - sample (tactical[2]/micro_display): `p+q=x+1`
   - sample (tactical[3]/micro_display): `ab=a(-a)`
   - sample (tactical[4]/micro_display): `-b=-(-a)`

809. **MATH 9.66** (`math-ch9-polynomials.json`, sev=5) — Cubic Meets a Line: Count the Crossings
   - fields: tactical[0], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `p(0)=0`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `p(0)=0`

810. **MATH 9.67** (`math-ch9-polynomials.json`, sev=5) — W: Warehouse Throughput
   - fields: tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[3]/micro_display): `W(0)=0`

811. **MATH 9.70** (`math-ch9-polynomials.json`, sev=5) — Square of a Quadratic Minus Itself (Set 1)
   - fields: tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `p(0)=3`
   - sample (tactical[2]/micro_display): `r(0)=6`
   - sample (tactical[2]/micro_display): `r(0)=6`

812. **MATH 9.71** (`math-ch9-polynomials.json`, sev=5) — Even Quartic: Factor Then Read the Shape (Set 1)
   - fields: tactical[1]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(-2)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

813. **MATH 9.72** (`math-ch9-polynomials.json`, sev=5) — Raising a Cubic: Crossings After a Vertical Shift (Set 1)
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `x=\pm 1`

814. **MATH 9.75** (`math-ch9-polynomials.json`, sev=5) — Downward Cubic Through the Origin
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(2)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `p'(x)=76`

815. **MATH 9.79** (`math-ch9-polynomials.json`, sev=5) — Rebuild from a Double Root and a Simple Root (Set 2)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p'(2)=0`
   - sample (tactical[1]/micro_display): `p'(2)=0`
   - sample (tactical[2]/micro_display): `p'(-1)=9`

816. **MATH 9.80** (`math-ch9-polynomials.json`, sev=5) — Square of a Quadratic Minus Itself (Set 2)
   - fields: tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `p(0)=1`
   - sample (tactical[2]/micro_display): `r(0)=0`
   - sample (tactical[2]/micro_display): `r(0)=0`

817. **MATH 9.81** (`math-ch9-polynomials.json`, sev=5) — Even Quartic: Factor Then Read the Shape (Set 2)
   - fields: tactical[1], tactical[2]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(2)=-15`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[2]/micro_display): `p(1)=0`

818. **MATH 9.84** (`math-ch9-polynomials.json`, sev=5) — When Equal Leading Terms Cancel in a Sum (Set 2)
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/micro_display): `a+b=0`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/micro_display): `ab=a(-a)`

819. **MATH 9.85** (`math-ch9-polynomials.json`, sev=5) — Parameter t: How Many Real Zeros?
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x^{3}=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

820. **MATH 9.86** (`math-ch9-polynomials.json`, sev=5) — Negative Leading Coefficient Cubic
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p(0)=0`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/micro_display): `p'(x)=76`

821. **MATH 9.87** (`math-ch9-polynomials.json`, sev=5) — Quartic Minus a Parabola
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `p(2)=0`
   - sample (tactical[2]/micro_display): `p(1)=0`
   - sample (tactical[2]/dense_micro_chain): `9 micro-ish displays`

822. **MATH 9.91** (`math-ch9-polynomials.json`, sev=5) — Parameter α2: How Many Real Zeros?
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `x=0`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `9 micro-ish displays`

823. **MATH 9.102** (`math-ch9-polynomials.json`, sev=5) — Hard Graph Read: Roots (-2, 0, 2)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/micro_display): `p(0)=0`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

824. **MATH 9.103** (`math-ch9-polynomials.json`, sev=5) — Hard Graph Read: Roots (1, 3, 5)
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `3^{3}=27`
   - sample (tactical[1]/micro_display): `3^{2}=9`
   - sample (tactical[1]/micro_display): `3^{1}=3`

825. **MATH 9.105** (`math-ch9-polynomials.json`, sev=5) — Cubic Meets a Parabola: Count Carefully
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `p(0)=0`
   - sample (tactical[4]/micro_display): `0=-4`

826. **MATH 9.106** (`math-ch9-polynomials.json`, sev=5) — Cubic Minus a Line: Three Meetings?
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[2]/micro_display): `p(1)=-2`
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/micro_display): `p(0)=0`

827. **MATH 9.107** (`math-ch9-polynomials.json`, sev=5) — Biquadratic Minus a Line
   - fields: tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[4]/micro_display): `p(0)=0`
   - sample (tactical[4]/micro_display): `0=0`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

828. **MATH 9.108** (`math-ch9-polynomials.json`, sev=5) — Rebuild from a Double Root and a Simple Root (Set 1) (variant 57)
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p'(1)=0`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

829. **MATH 9.109** (`math-ch9-polynomials.json`, sev=5) — Square of a Quadratic Minus Itself (Set 1) (variant 58)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `r=p(p-1)`
   - sample (tactical[2]/micro_display): `p(0)=3`
   - sample (tactical[2]/micro_display): `r(0)=6`

830. **MATH 9.112** (`math-ch9-polynomials.json`, sev=5) — Square of a Quadratic Minus Itself (Set 2) (variant 61)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `r=p(p-1)`
   - sample (tactical[2]/micro_display): `p(0)=1`
   - sample (tactical[2]/micro_display): `r(0)=0`

831. **MATH 9.114** (`math-ch9-polynomials.json`, sev=5) — Rebuild from a Double Root and a Simple Root (Set 3)
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `p'(-1)=0`
   - sample (tactical[2]/micro_display): `p'(2)=9`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

832. **MATH 9.115** (`math-ch9-polynomials.json`, sev=5) — Square of a Quadratic Minus Itself (Set 3)
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain, micro_display
   - sample (tactical[1]/micro_display): `r=p(p-1)`
   - sample (tactical[2]/micro_display): `p(0)=5`
   - sample (tactical[2]/micro_display): `r(0)=20`

833. **MATH 11.115** (`math-ch11-differentiation.ts`, sev=4) — Two products, one resource: reduce then maximise profit
   - fields: solution_overview
   - reasons: aligned_short_tail
   - sample (solution_overview/aligned_short_tail): `p(x) &=30x+20(10-x)-x^{2}-(10-x)^{2}=10x+200-x^{2}-(100-20x+x^{2}) // &=30x+100-2x^{2}.`

834. **MATH 12.01** (`math-cases-ch12-probability.json`, sev=3) — A Committee Selection
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `13 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `15 micro-ish displays`

835. **MATH 12.02** (`math-cases-ch12-probability.json`, sev=3) — A Poker Hand
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

836. **MATH 12.03** (`math-cases-ch12-probability.json`, sev=3) — Restricted Seating
   - fields: tactical[1], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `7 micro-ish displays`

837. **MATH 12.08** (`math-cases-ch12-probability.json`, sev=3) — A Lottery Draw
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`

838. **MATH 12.12** (`math-cases-ch12-probability.json`, sev=3) — Find the Missing Value (12)
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

839. **MATH 12.13** (`math-cases-ch12-probability.json`, sev=3) — A Poker Hand (13)
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `16 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `14 micro-ish displays`

840. **MATH 12.17** (`math-cases-ch12-probability.json`, sev=3) — Distributing Candies (Stars and Bars)
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `6 micro-ish displays`

841. **MATH 12.18** (`math-cases-ch12-probability.json`, sev=3) — Repeated Digits in a PIN
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `6 micro-ish displays`

842. **MATH 12.20** (`math-cases-ch12-probability.json`, sev=3) — The National Lottery
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `12 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `9 micro-ish displays`

843. **MATH 12.21** (`math-cases-ch12-probability.json`, sev=3) — The Student Project Team
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `8 micro-ish displays`

844. **MATH 12.22** (`math-cases-ch12-probability.json`, sev=3) — Tennis Club Pairings
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

845. **MATH 12.23** (`math-cases-ch12-probability.json`, sev=3) — The Gala Dinner
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

846. **MATH 12.25** (`math-cases-ch12-probability.json`, sev=3) — Poker Night
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `13 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `7 micro-ish displays`

847. **MATH 12.26** (`math-cases-ch12-probability.json`, sev=3) — The Peer-Review Panel
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`

848. **MATH 12.28** (`math-cases-ch12-probability.json`, sev=3) — The Wedding Photograph
   - fields: tactical[2]
   - reasons: dense_micro_chain
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`

849. **MATH 12.32** (`math-cases-ch12-probability.json`, sev=3) — The Marathon Medical Tent
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `6 micro-ish displays`

850. **MATH 12.36** (`math-cases-ch12-probability.json`, sev=3) — The Ski-Chalet Shuttle Van
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

851. **MATH 12.37** (`math-cases-ch12-probability.json`, sev=3) — The Lab Contamination Screen
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `11 micro-ish displays`

852. **MATH 12.38** (`math-cases-ch12-probability.json`, sev=3) — The Twin Freshmen Exam Row
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `10 micro-ish displays`

853. **MATH 12.39** (`math-cases-ch12-probability.json`, sev=3) — The Regional Cup Exhibition
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `5 micro-ish displays`

854. **MATH 12.40** (`math-cases-ch12-probability.json`, sev=3) — Combinatorial Probability 40
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `12 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `9 micro-ish displays`

855. **MATH 12.41** (`math-cases-ch12-probability.json`, sev=3) — Combinatorial Probability 41
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `17 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `9 micro-ish displays`

856. **MATH 12.42** (`math-cases-ch12-probability.json`, sev=3) — Combinatorial Probability 42
   - fields: tactical[0], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `11 micro-ish displays`

857. **MATH 12.43** (`math-cases-ch12-probability.json`, sev=3) — At a mid-size company, 65% of employees regularly use Software Tool A, and 45%
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

858. **MATH 12.44** (`math-cases-ch12-probability.json`, sev=3) — A market research firm found that 55% of surveyed households subscribe to Streaming Service X, and 40% subscribe to Streaming Service Y
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

859. **MATH 12.45** (`math-cases-ch12-probability.json`, sev=3) — A gym tracks member usage of three amenities
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

860. **MATH 12.46** (`math-cases-ch12-probability.json`, sev=3) — During a store-wide sale, 42% of transactions redeemed Coupon 1, and 38%
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

861. **MATH 12.47** (`math-cases-ch12-probability.json`, sev=3) — A university registrar's data shows that 40% of students take an Art elective
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

862. **MATH 12.48** (`math-cases-ch12-probability.json`, sev=3) — A security firm scanned a fleet of servers for three vulnerability types
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`

863. **MATH 12.49** (`math-cases-ch12-probability.json`, sev=3) — A hospital reviewed patient charts for three risk factors
   - fields: tactical[0], tactical[1]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

864. **MATH 12.50** (`math-cases-ch12-probability.json`, sev=3) — A retailer analyzed loyalty card ownership among its customers
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

865. **MATH 12.51** (`math-cases-ch12-probability.json`, sev=3) — A factory inspected finished units for three defect types
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`

866. **MATH 12.52** (`math-cases-ch12-probability.json`, sev=3) — A survey asked respondents which of three social media platforms they use
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

867. **MATH 12.53** (`math-cases-ch12-probability.json`, sev=3) — An insurance agency reviewed its customers' policies
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `14 micro-ish displays`

868. **MATH 12.54** (`math-cases-ch12-probability.json`, sev=3) — A university tracked pass rates across three exams
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`

869. **MATH 12.55** (`math-cases-ch12-probability.json`, sev=3) — A restaurant surveyed diners about dietary restrictions
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

870. **MATH 12.56** (`math-cases-ch12-probability.json`, sev=3) — A car dealership reviewed optional features on its lot
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`

871. **MATH 12.59** (`math-cases-ch12-probability.json`, sev=3) — UI, Performance, and Security rates are 50%, 40%, and 30%
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `12 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`

872. **MATH 12.60** (`math-cases-ch12-probability.json`, sev=3) — Product rates are P(A)=55%, P(B)=45%, and P(C)=35%
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `12 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

873. **MATH 12.66** (`math-cases-ch12-probability.json`, sev=3) — Newspaper and TV news survey
   - fields: solution_overview, tactical[1]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

874. **MATH 12.67** (`math-cases-ch12-probability.json`, sev=3) — Email, SMS, and push notification channels
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `9 micro-ish displays`

875. **MATH 12.68** (`math-cases-ch12-probability.json`, sev=3) — Auto-save, dark mode, and cloud sync
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `9 micro-ish displays`

876. **MATH 12.69** (`math-cases-ch12-probability.json`, sev=3) — Sci-fi, fantasy, and mystery readers
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

877. **MATH 12.70** (`math-cases-ch12-probability.json`, sev=3) — Health, dental, and vision benefits
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

878. **MATH 12.72** (`math-cases-ch12-probability.json`, sev=3) — An electronics store tracks warranty claims by product category
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

879. **MATH 12.73** (`math-cases-ch12-probability.json`, sev=3) — A coffee shop tracks oat-milk add-ons by drink size
   - fields: tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

880. **MATH 12.75** (`math-cases-ch12-probability.json`, sev=3) — An amusement park tracks wait times by ride category
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

881. **MATH 12.78** (`math-cases-ch12-probability.json`, sev=3) — A car rental agency tracks late returns by vehicle class
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

882. **MATH 12.80** (`math-cases-ch12-probability.json`, sev=3) — A gym tracks no-shows by class type
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

883. **MATH 12.82** (`math-cases-ch12-probability.json`, sev=3) — A grocery store tracks scanning errors by checkout method
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

884. **MATH 12.83** (`math-cases-ch12-probability.json`, sev=3) — A hotel tracks cancellations by booking channel
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

885. **MATH 12.86** (`math-cases-ch12-probability.json`, sev=3) — A streaming service tracks first-year cancellations by subscription plan
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`

886. **MATH 12.87** (`math-cases-ch12-probability.json`, sev=3) — During Q3, engineers at a software company logged every user session across two
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`

887. **MATH 12.88** (`math-cases-ch12-probability.json`, sev=3) — A hospital pharmacy reviewed medication orders processed across two shifts last
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

888. **MATH 12.89** (`math-cases-ch12-probability.json`, sev=3) — An airline audited baggage handling across three flight categories over the past year
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

889. **MATH 12.90** (`math-cases-ch12-probability.json`, sev=3) — Two departments at a university submit final theses each spring
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

890. **MATH 12.93** (`math-cases-ch12-probability.json`, sev=3) — A certification board compared pass rates between two exam formats offered last
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `6 micro-ish displays`

891. **MATH 12.95** (`math-cases-ch12-probability.json`, sev=3) — A mobile carrier sampled call quality across its two network types over a single day
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

892. **MATH 12.96** (`math-cases-ch12-probability.json`, sev=3) — A retailer compiled a quarter's worth of purchase and return data across three
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

893. **MATH 12.98** (`math-cases-ch12-probability.json`, sev=3) — A software team reviewed a backlog of bug reports filed under two priority
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

894. **MATH 12.99** (`math-cases-ch12-probability.json`, sev=3) — A university's admissions office reviewed a year of applications across three
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

895. **MATH 12.104** (`math-cases-ch12-probability.json`, sev=3) — Two fair six-sided dice are rolled once
   - fields: tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

896. **MATH 12.105** (`math-cases-ch12-probability.json`, sev=3) — 200 people take a diagnostic test for a disease
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

897. **MATH 12.106** (`math-cases-ch12-probability.json`, sev=3) — A factory quality-control process depends on a chain of three stages
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`

898. **MATH 12.107** (`math-cases-ch12-probability.json`, sev=3) — A bank reviewed a year of loan applications filed at two types of branches
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

899. **MATH 12.108** (`math-cases-ch12-probability.json`, sev=3) — A gym chain reviewed a year of membership records across two tiers
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

900. **MATH 12.109** (`math-cases-ch12-probability.json`, sev=3) — A city transit authority reviewed a month of on-time performance across three
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

901. **MATH 12.112** (`math-cases-ch12-probability.json`, sev=3) — Discrete Probability Table
   - fields: solution_overview, tactical[0], tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `6 micro-ish displays`

902. **MATH 12.114** (`math-cases-ch12-probability.json`, sev=3) — Startup Profit Scenario
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `11 micro-ish displays`

903. **MATH 12.115** (`math-cases-ch12-probability.json`, sev=3) — Carnival Spinner with a Processing Fee
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `8 micro-ish displays`

904. **MATH 12.116** (`math-cases-ch12-probability.json`, sev=3) — Manufacturing Defect Counts
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`

905. **MATH 12.120** (`math-cases-ch12-probability.json`, sev=3) — An Investment Portfolio
   - fields: solution_overview, tactical[1]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

906. **MATH 12.128** (`math-cases-ch12-probability.json`, sev=3) — A Lottery Ticket
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

907. **MATH 12.131** (`math-cases-ch12-probability.json`, sev=3) — A Vending Machine
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `9 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

908. **MATH 12.149** (`math-cases-ch12-probability.json`, sev=3) — A Parking Garage (A Nonlinear Bonus)
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `11 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

909. **MATH 12.150** (`math-cases-ch12-probability.json`, sev=3) — A Trivia Quiz (Comparing Two Formats)
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `6 micro-ish displays`

910. **MATH 12.153** (`math-cases-ch12-probability.json`, sev=3) — Late Computer Deliveries
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`

911. **MATH 12.155** (`math-cases-ch12-probability.json`, sev=3) — Escalated Support Calls
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`

912. **MATH 12.158** (`math-cases-ch12-probability.json`, sev=3) — Delayed Flights by Carrier
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`

913. **MATH 12.160** (`math-cases-ch12-probability.json`, sev=3) — Production Bugs by Team
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`

914. **MATH 12.161** (`math-cases-ch12-probability.json`, sev=3) — Burnt Loaves by Oven
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `10 micro-ish displays`

915. **MATH 12.162** (`math-cases-ch12-probability.json`, sev=3) — Grade Appeals by Professor
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`

916. **MATH 12.179** (`math-cases-ch12-probability.json`, sev=3) — Fungus Across Three Tree Species
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `6 micro-ish displays`

917. **MATH 12.180** (`math-cases-ch12-probability.json`, sev=3) — Tagged Fish in a Lake
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`

918. **MATH 12.182** (`math-cases-ch12-probability.json`, sev=3) — Meteors Spotted Under Cloud Cover
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `6 micro-ish displays`

919. **MATH 12.184** (`math-cases-ch12-probability.json`, sev=3) — Coral Bleaching Across Four Reefs
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `13 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

920. **MATH 12.186** (`math-cases-ch12-probability.json`, sev=3) — Two Clues and Three Suspects
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

921. **MATH 12.187** (`math-cases-ch12-probability.json`, sev=3) — A Positive Test in a Deer Population
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`

922. **MATH 12.188** (`math-cases-ch12-probability.json`, sev=3) — Wildfires That Escaped Containment
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`

923. **MATH 12.189** (`math-cases-ch12-probability.json`, sev=3) — Tagged Whales in Three Feeding Grounds
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

924. **MATH 12.191** (`math-cases-ch12-probability.json`, sev=3) — A Lake Trout Across Three Ice-Fishing Zones
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

925. **MATH 12.192** (`math-cases-ch12-probability.json`, sev=3) — Mildew Across Four Vineyard Blocks
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`

926. **MATH 12.198** (`math-cases-ch12-probability.json`, sev=3) — Defective Sheets from Two Paper Vendors
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

927. **MATH 10.3.31** (`math-ch10-exp-log.json`, sev=3) — Applied letters — discrete population, GDP per capita, and a continuous neighbour
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

928. **MATH 12.199** (`math-ch12-exam.json`, sev=3) — Exam-style tasks - 1
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

929. **MATH 12.202** (`math-ch12-exam.json`, sev=3) — Exam-style tasks - 4
   - fields: tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

930. **MATH 12.203** (`math-ch12-exam.json`, sev=3) — Exam-style tasks - 5
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `9 micro-ish displays`

931. **MATH 12.205** (`math-ch12-exam.json`, sev=3) — Exam-style tasks - 7
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

932. **MATH 2.147** (`math-ch2-cases.json`, sev=3) — Exam-style tasks - 11
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

933. **MATH 2.151** (`math-ch2-cases.json`, sev=3) — Exam-style tasks - 15
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

934. **MATH 2.155** (`math-ch2-cases.json`, sev=3) — Exam-style tasks - 19
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

935. **MATH 11.124** (`math-ch3-exam.json`, sev=3) — Exam-style tasks - 1
   - fields: tactical[1]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`

936. **MATH 11.141** (`math-ch3-exam.json`, sev=3) — Exam-style tasks - 18
   - fields: tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

937. **MATH 4.35** (`math-ch4-cases.json`, sev=3) — Joint Venture Balance Price Equation
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

938. **MATH 4.36** (`math-ch4-cases.json`, sev=3) — Acid Solution Mixture Optimization
   - fields: tactical[2]
   - reasons: dense_micro_chain
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

939. **MATH 4.51** (`math-ch4-cases.json`, sev=3) — Parametric Linear Capacity Model
   - fields: solution_overview, tactical[4]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

940. **MATH 4.58** (`math-ch4-cases.json`, sev=3) — Parametric Linear Equilibrium Model
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `5 micro-ish displays`

941. **MATH 4.72** (`math-ch4-cases.json`, sev=3) — Five separate frame and rectangle-area stories
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `11 micro-ish displays`

942. **MATH 4.81** (`math-ch4-cases.json`, sev=3) — Five separate reciprocal-sum claims
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

943. **MATH 4.94** (`math-ch4-cases.json`, sev=3) — Parameter Conditions for Root Signs in a Break-Even Model
   - fields: solution_overview
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `4 micro-ish displays`

944. **MATH 4.99** (`math-ch4-cases.json`, sev=3) — Warehouse Buffer Expansion Model
   - fields: tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[3]/dense_micro_chain): `5 micro-ish displays`

945. **MATH 4.106** (`math-ch4-cases.json`, sev=3) — Price-Demand Revenue Models and Quadratic Structure
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

946. **MATH 4.135** (`math-ch4-cases.json`, sev=3) — Five further radical isolations
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `7 micro-ish displays`

947. **MATH 4.155** (`math-ch4-cases.json`, sev=3) — Solvability and Extraneous Roots of a Radical Equation
   - fields: solution_overview, tactical[1]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `7 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `6 micro-ish displays`

948. **MATH 4.161** (`math-ch4-cases.json`, sev=3) — Rational Equation with Absolute Value
   - fields: solution_overview, tactical[0]
   - reasons: dense_micro_chain
   - sample (solution_overview/dense_micro_chain): `8 micro-ish displays`
   - sample (tactical[0]/dense_micro_chain): `8 micro-ish displays`

949. **MATH 6.61** (`math-ch6-inequalities.json`, sev=3) — Compound & Special Inequalities — 24
   - fields: tactical[2]
   - reasons: dense_micro_chain
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

950. **MATH 7.42** (`math-ch7-linear-quadratic.json`, sev=3) — Nested Functions Without Numbers
   - fields: tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[3]/dense_micro_chain): `4 micro-ish displays`

951. **MATH 7.50** (`math-ch7-linear-quadratic.json`, sev=3) — When Does Vertical Shift Kill Meetings?
   - fields: tactical[1]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`

952. **MATH 9.E15** (`math-ch9-mixed-exam.json`, sev=3) — A double root with a sliding companion
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

953. **MATH 9.E25** (`math-ch9-mixed-exam.json`, sev=3) — A double root fixed at the origin
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`

954. **MATH 9.36** (`math-ch9-polynomials.json`, sev=3) — Family $p_a(x)=x^{3}-3x+a$
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[3]/dense_micro_chain): `6 micro-ish displays`

955. **MATH 9.40** (`math-ch9-polynomials.json`, sev=3) — Parameter Window for Three Real Roots
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `5 micro-ish displays`

956. **MATH 9.51** (`math-ch9-polynomials.json`, sev=3) — Freight Train: Cubic Speed and a Distance Ledger
   - fields: tactical[0]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`

957. **MATH 9.64** (`math-ch9-polynomials.json`, sev=3) — Parameter k: How Many Real Zeros?
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `8 micro-ish displays`

958. **MATH 9.74** (`math-ch9-polynomials.json`, sev=3) — Parameter m: How Many Real Zeros?
   - fields: tactical[2], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[2]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `4 micro-ish displays`

959. **MATH 9.90** (`math-ch9-polynomials.json`, sev=3) — Parameter α1: How Many Real Zeros?
   - fields: tactical[0], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `8 micro-ish displays`

960. **MATH 9.92** (`math-ch9-polynomials.json`, sev=3) — Parameter α3: How Many Real Zeros?
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `6 micro-ish displays`
   - sample (tactical[1]/dense_micro_chain): `4 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `7 micro-ish displays`

961. **MATH 9.93** (`math-ch9-polynomials.json`, sev=3) — Parameter α4: How Many Real Zeros?
   - fields: tactical[1], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[1]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `6 micro-ish displays`

962. **MATH 9.95** (`math-ch9-polynomials.json`, sev=3) — Parameter α6: How Many Real Zeros?
   - fields: tactical[0], tactical[4]
   - reasons: dense_micro_chain
   - sample (tactical[0]/dense_micro_chain): `5 micro-ish displays`
   - sample (tactical[4]/dense_micro_chain): `7 micro-ish displays`

## MILD

1. **MATH 12.24** (`math-cases-ch12-probability.json`, sev=2) — The Statistics Fair Banner
   - fields: solution_overview, tactical[0]
   - reasons: micro_display
   - sample (solution_overview/micro_display): `N = 50,400`
   - sample (tactical[0]/micro_display): `N = 50,400`

2. **MATH 12.27** (`math-cases-ch12-probability.json`, sev=2) — Chess Club Pairings
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `945`
   - sample (tactical[4]/micro_display): `105`

3. **MATH 12.34** (`math-cases-ch12-probability.json`, sev=2) — The Conservatory Stage Apron
   - fields: solution_overview, tactical[0]
   - reasons: micro_display
   - sample (solution_overview/micro_display): `N = 9!`
   - sample (tactical[0]/micro_display): `N = 9!`

4. **MATH 12.123** (`math-cases-ch12-probability.json`, sev=2) — A Fair Six-Sided Die
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `E[X] = 3.5`

5. **MATH 12.194** (`math-cases-ch12-probability.json`, sev=2) — Defective Phones from Two Suppliers
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `D_W = 108`

6. **MATH 13.23** (`math-cases-ch13-binomial.json`, sev=2) — Calibration Line Acceptables
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `E[X] = np`

7. **MATH 13.25** (`math-cases-ch13-binomial.json`, sev=2) — Auditor Compliance Threshold
   - fields: tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `3.07`
   - sample (tactical[4]/micro_display): `3.73`

8. **MATH 13.30** (`math-cases-ch13-binomial.json`, sev=2) — Large Audit Compliance
   - fields: tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `0.2595`
   - sample (tactical[3]/micro_display): `0.7358`

9. **MATH 13.32** (`math-cases-ch13-binomial.json`, sev=2) — Screening Test Samples
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `1.411`
   - sample (tactical[4]/micro_display): `2.435`

10. **MATH 13.38** (`math-cases-ch13-binomial.json`, sev=2) — Line A vs Line B Batches
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `E[X] = np`

11. **MATH 13.43** (`math-cases-ch13-binomial.json`, sev=2) — Server Error Requests
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `0.4674`
   - sample (tactical[1]/micro_display): `0.5507`

12. **MATH 13.44** (`math-cases-ch13-binomial.json`, sev=2) — Three-Component Device
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `0.00099968`

13. **MATH 1.111** (`math-ch1-exam.json`, sev=2) — Exam-style tasks - 3
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `m=n+1`

14. **MATH 1.113** (`math-ch1-exam.json`, sev=2) — Exam-style tasks - 5
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `6-2=4`

15. **MATH 1.117** (`math-ch1-exam.json`, sev=2) — Exam-style tasks - 9
   - fields: tactical[0], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `16-2=14`
   - sample (tactical[4]/micro_display): `3^4=81`

16. **MATH 1.121** (`math-ch1-exam.json`, sev=2) — Exam-style tasks - 13
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `p=F`
   - sample (tactical[4]/micro_display): `q\vee r=F`

17. **MATH 10.1.8** (`math-ch10-exp-log.json`, sev=2) — Tangled quantifiers on continuous exponential paths
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `e^{kt} = 2`

18. **MATH 10.1.18** (`math-ch10-exp-log.json`, sev=2) — ‘For every’ and ‘precisely when’ in exponential claims
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `e^{kt} = 1`

19. **MATH 10.1.21** (`math-ch10-exp-log.json`, sev=2) — Reading a continuous growth graph in letters
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `e^{kT} = c`

20. **MATH 10.1.41** (`math-ch10-exp-log.json`, sev=2) — Semi-log decay graph — reading negative letter force
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `kT = -\ln 2`

21. **MATH 10.2.3** (`math-ch10-exp-log.json`, sev=2) — Letter identities for product, quotient, and power laws
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `0 + 0 = 0`

22. **MATH 10.2.5** (`math-ch10-exp-log.json`, sev=2) — Rebuild the base from intercept and unit point
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `b = 3`

23. **MATH 10.2.9** (`math-ch10-exp-log.json`, sev=2) — Tangled domain of a rational-argument logarithm
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `x-3 = 0`

24. **MATH 10.2.11** (`math-ch10-exp-log.json`, sev=2) — Comparing two logarithmic graphs that share an asymptote
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x = 0`

25. **MATH 10.2.22** (`math-ch10-exp-log.json`, sev=2) — Elasticity sample table from a log-log regression
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `E = -\beta`

26. **MATH 10.2.25** (`math-ch10-exp-log.json`, sev=2) — Rebuild a horizontal shift from an asymptote
   - fields: tactical[0], tactical[1]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x = h`
   - sample (tactical[1]/micro_display): `3-h = 1`

27. **MATH 10.2.26** (`math-ch10-exp-log.json`, sev=2) — Nested logs with mixed bases
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `\ln e = 1`
   - sample (tactical[3]/micro_display): `\ln 1 = 0`

28. **MATH 10.2.39** (`math-ch10-exp-log.json`, sev=2) — Domain tangle for $\log$ of a linear fractional transform
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `x-q = 0`

29. **MATH 10.2.42** (`math-ch10-exp-log.json`, sev=2) — Table of cob checks for symbolic pairs $(a,b)$
   - fields: tactical[0], tactical[1]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `2^{3} = 8`
   - sample (tactical[1]/micro_display): `3^{2} = 9`

30. **MATH 10.2.45** (`math-ch10-exp-log.json`, sev=2) — Rebuild argument form from a shifted asymptote and unit step
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x = 1`
   - sample (tactical[1]/micro_display): `2^{0}=1`

31. **MATH 10.2.46** (`math-ch10-exp-log.json`, sev=2) — Nested domain inequality chain with a parameter
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `x-c = 0`

32. **MATH 10.3.10** (`math-ch10-exp-log.json`, sev=2) — Applied letters — GDP per capita force via logs
   - fields: tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `g+p = 0.04`
   - sample (tactical[4]/micro_display): `k_y = 0.02`

33. **MATH 10.3.13** (`math-ch10-exp-log.json`, sev=2) — Table — elasticity schedule beside an exponential stock
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `0.04 = k`

34. **MATH 10.3.21** (`math-ch10-exp-log.json`, sev=2) — Hybrid — piecewise stock force beside constant-elasticity demand
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `b = 1.5`

35. **MATH 10.3.23** (`math-ch10-exp-log.json`, sev=2) — Table — continuous versus annual balances and log returns
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `rt = 0.5`

36. **MATH 10.3.24** (`math-ch10-exp-log.json`, sev=2) — Symbolic — which exp/log identities survive beside growth
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `u = v = e`

37. **MATH 10.3.25** (`math-ch10-exp-log.json`, sev=2) — Parametric — log domain side-conditions on an exponential stock
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `A = e`
   - sample (tactical[0]/micro_display): `A-1 = e-1`

38. **MATH 11.125** (`math-ch11-differentiation.ts`, sev=2) — Straight f′: one critical point at x=3
   - fields: solution_overview
   - reasons: micro_display
   - sample (solution_overview/micro_display): `f'(1)=2`

39. **MATH 11.168** (`math-ch11-exam.json`, sev=2) — Data studio: labour, output, and marginal value
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `L = 36`

40. **MATH 11.171** (`math-ch11-exam.json`, sev=2) — Greenhouse: two inputs and labour value
   - fields: tactical[0], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `L = 16`
   - sample (tactical[4]/micro_display): `VMP = w`

41. **MATH 11.197** (`math-ch11-exam.json`, sev=2) — Foundry: MC and MC′ figure for inflection of total cost
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `Q = 4`
   - sample (tactical[1]/micro_display): `Q = 4`

42. **MATH 11.201** (`math-ch11-exam.json`, sev=2) — Podcast ads: chain-rule revenue versus linear spend
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `a = 60^{4}`

43. **MATH 12.206** (`math-ch12-exam.json`, sev=2) — Exam-style tasks - 8
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `74 - 29 = 45`

44. **MATH 13.77** (`math-ch13-exam.json`, sev=2) — Festival Food Stall
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4096`

45. **MATH 13.78** (`math-ch13-exam.json`, sev=2) — Community Clinic Screening
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.0034`

46. **MATH 13.80** (`math-ch13-exam.json`, sev=2) — Coding Contest Auto-Grader
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.064`

47. **MATH 13.83** (`math-ch13-exam.json`, sev=2) — Bike-Share Dock Sensors
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.008`

48. **MATH 13.84** (`math-ch13-exam.json`, sev=2) — Hotel Booking Confirmations
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4096`

49. **MATH 13.85** (`math-ch13-exam.json`, sev=2) — Pharmacy Prescription Checks
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.008`

50. **MATH 13.90** (`math-ch13-exam.json`, sev=2) — Wildlife Camera Triggers
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.0156`

51. **MATH 13.91** (`math-ch13-exam.json`, sev=2) — Theatre Ticket Upsells
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.0256`

52. **MATH 13.96** (`math-ch13-exam.json`, sev=2) — Bakery Morning Batch QC
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4096`

53. **MATH 13.102** (`math-ch13-exam.json`, sev=2) — Farm Soil Moisture Alerts
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.008`

54. **MATH 13.105** (`math-ch13-exam.json`, sev=2) — Podcast Ad Click-Throughs
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.001`

55. **MATH 13.107** (`math-ch13-exam.json`, sev=2) — Board-Game Critical Hits
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.0016`

56. **MATH 13.113** (`math-ch13-exam.json`, sev=2) — Ice-Cream Machine Self-Cleans
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.4096`

57. **MATH 13.114** (`math-ch13-exam.json`, sev=2) — Archaeology Dig Artifact Finds
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `E[X] = np`
   - sample (tactical[3]/micro_display): `0.0156`

58. **MATH 2.36** (`math-ch2-cases.json`, sev=2) — Warm-up: cancelling a common factor
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `9=3^2`
   - sample (tactical[1]/micro_display): `4=2^2`

59. **MATH 2.48** (`math-ch2-cases.json`, sev=2) — Compound fraction whose simplified ratio is flipped
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `7`

60. **MATH 2.49** (`math-ch2-cases.json`, sev=2) — Three poles sharing a product LCD
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `5`

61. **MATH 2.51** (`math-ch2-cases.json`, sev=2) — Stacked negative powers missing a leftover factor
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `3`

62. **MATH 2.53** (`math-ch2-cases.json`, sev=2) — A product of reciprocal rational pieces
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `1`
   - sample (tactical[0]/micro_display): `1`

63. **MATH 2.54** (`math-ch2-cases.json`, sev=2) — Constant from a difference of expanded squares
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `0`
   - sample (tactical[2]/micro_display): `10`

64. **MATH 2.56** (`math-ch2-cases.json`, sev=2) — Sum of squares treated as a square of a sum
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `1`

65. **MATH 2.57** (`math-ch2-cases.json`, sev=2) — Swapped two-letter ratios in a stacked quotient
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `0`

66. **MATH 2.60** (`math-ch2-cases.json`, sev=2) — Three unit fractions with a false linear numerator
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `7`

67. **MATH 2.61** (`math-ch2-cases.json`, sev=2) — Cancelled linear factor kept in the denominator
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `2`

68. **MATH 2.62** (`math-ch2-cases.json`, sev=2) — Opposite linear factors that differ by a minus
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `0`

69. **MATH 2.63** (`math-ch2-cases.json`, sev=2) — Cubic LCD of three neighbouring linears
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `1`

70. **MATH 2.65** (`math-ch2-cases.json`, sev=2) — Outer reciprocal of a two-storey $x$-nest
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `1`

71. **MATH 2.66** (`math-ch2-cases.json`, sev=2) — Quartic cancel mixed with reciprocal squares
   - fields: tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `0`
   - sample (tactical[2]/micro_display): `u=\pm 3`

72. **MATH 2.69** (`math-ch2-cases.json`, sev=2) — Warm-up: product and quotient of powers
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `8`
   - sample (tactical[4]/micro_display): `4`

73. **MATH 2.73** (`math-ch2-cases.json`, sev=2) — A stacked power compared with a product after a rewrite
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `27`

74. **MATH 2.76** (`math-ch2-cases.json`, sev=2) — Zero exponents mixed with a cancelled stack
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `1`
   - sample (tactical[3]/micro_display): `2`

75. **MATH 2.77** (`math-ch2-cases.json`, sev=2) — Integer values of short fractional powers
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `2^2=4`
   - sample (tactical[4]/micro_display): `9`

76. **MATH 2.80** (`math-ch2-cases.json`, sev=2) — Cube roots split over products only
   - fields: tactical[0], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `2`
   - sample (tactical[0]/micro_display): `2`

77. **MATH 2.81** (`math-ch2-cases.json`, sev=2) — Several fractional exponents on one letter
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=2`
   - sample (tactical[1]/micro_display): `x=2`

78. **MATH 2.83** (`math-ch2-cases.json`, sev=2) — Rationalising by the conjugate of the other binomial
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `x=2`
   - sample (tactical[3]/micro_display): `4096`

79. **MATH 2.84** (`math-ch2-cases.json`, sev=2) — A binomial square of a root and its reciprocal
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `x=2`
   - sample (tactical[4]/micro_display): `4096`

80. **MATH 2.85** (`math-ch2-cases.json`, sev=2) — Rewriting a new base from a given power
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `25`

81. **MATH 2.89** (`math-ch2-cases.json`, sev=2) — Fourth roots of even powers
   - fields: tactical[0], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `27`
   - sample (tactical[4]/micro_display): `a=2`

82. **MATH 2.90** (`math-ch2-cases.json`, sev=2) — A minus sign stranded in a denominator
   - fields: tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `9`
   - sample (tactical[2]/micro_display): `a=2`

83. **MATH 2.91** (`math-ch2-cases.json`, sev=2) — Stacked roots multiplying reciprocal exponents
   - fields: tactical[0], tactical[1]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `t=2`
   - sample (tactical[0]/micro_display): `4`

84. **MATH 2.92** (`math-ch2-cases.json`, sev=2) — Conjugate surds multiplying to a difference of radicands
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `2`
   - sample (tactical[0]/micro_display): `2`

85. **MATH 2.93** (`math-ch2-cases.json`, sev=2) — A sixth power in the numerator against a squared denominator
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `t=2`
   - sample (tactical[2]/micro_display): `4096`

86. **MATH 2.94** (`math-ch2-cases.json`, sev=2) — Independent traps from nested roots to given powers
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `t=2`
   - sample (tactical[3]/micro_display): `4096`

87. **MATH 2.99** (`math-ch2-cases.json`, sev=2) — A mixed sheet of roots, conjugates, and a missing two
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `p=2`
   - sample (tactical[1]/micro_display): `u=2`

88. **MATH 2.101** (`math-ch2-cases.json`, sev=2) — Changing bases inside a stacked fractional power
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `u=2`
   - sample (tactical[1]/micro_display): `4096`

89. **MATH 2.102** (`math-ch2-cases.json`, sev=2) — Exam leftover traps from powers and nested roots
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `u=2`
   - sample (tactical[2]/micro_display): `4096`

90. **MATH 2.103** (`math-ch2-cases.json`, sev=2) — Warm-up: definition of absolute value
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `|x|=x`
   - sample (tactical[0]/micro_display): `|x|=-x`

91. **MATH 2.104** (`math-ch2-cases.json`, sev=2) — Warm-up: absolute value of a product
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `a=-3`
   - sample (tactical[1]/micro_display): `x=-3`

92. **MATH 2.105** (`math-ch2-cases.json`, sev=2) — Warm-up: piecewise distance on an interval
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `4`
   - sample (tactical[1]/micro_display): `|t|=t,`

93. **MATH 2.108** (`math-ch2-cases.json`, sev=2) — Principal roots versus dropped bars
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `n=-5`
   - sample (tactical[1]/micro_display): `x=-1`

94. **MATH 2.110** (`math-ch2-cases.json`, sev=2) — Scaling a letter is not adding a constant
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `p=4`
   - sample (tactical[2]/micro_display): `x=2`

95. **MATH 2.116** (`math-ch2-cases.json`, sev=2) — Two distances on five different segments
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=-3`
   - sample (tactical[0]/micro_display): `9`

96. **MATH 2.121** (`math-ch2-cases.json`, sev=2) — A quadratic already a square, and neighbours
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=0`
   - sample (tactical[0]/micro_display): `3`

97. **MATH 2.123** (`math-ch2-cases.json`, sev=2) — Reversed insides split by five breakpoints
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=-3`
   - sample (tactical[0]/micro_display): `3`

98. **MATH 2.126** (`math-ch2-cases.json`, sev=2) — Folding a segment then leaving it
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `t=7`
   - sample (tactical[1]/micro_display): `t=2`

99. **MATH 2.137** (`math-ch2-cases.json`, sev=2) — Exam-style tasks - 1
   - fields: tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `x=-2`
   - sample (tactical[4]/micro_display): `p^2=1<9`

100. **MATH 2.145** (`math-ch2-cases.json`, sev=2) — Exam-style tasks - 9
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `a+b+c=0`

101. **MATH 11.127** (`math-ch3-exam.json`, sev=2) — Exam-style tasks - 4
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `r=0.09487402`

102. **MATH 11.130** (`math-ch3-exam.json`, sev=2) — Exam-style tasks - 7
   - fields: tactical[0], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `r=0.09272143`
   - sample (tactical[2]/micro_display): `t=9.378269`

103. **MATH 4.20** (`math-ch4-cases.json`, sev=2) — Five separate clock and time-gain stories
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `60 + 4 = 64`

104. **MATH 4.34** (`math-ch4-cases.json`, sev=2) — Parametric Equilibrium Volume
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `k = 2`

105. **MATH 4.38** (`math-ch4-cases.json`, sev=2) — Successive Discount Structures and Price Parity
   - fields: tactical[2], tactical[3]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `x = 150`
   - sample (tactical[3]/micro_display): `p = 50`

106. **MATH 4.43** (`math-ch4-cases.json`, sev=2) — Parametric Linear Equation with Nested Expressions
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `6 - 13 = -7`
   - sample (tactical[4]/micro_display): `x = 2.75`

107. **MATH 4.44** (`math-ch4-cases.json`, sev=2) — Corporate Discretionary Budget Allocation
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `18 = 0`

108. **MATH 4.70** (`math-ch4-cases.json`, sev=2) — Five separate Vieta sum-and-product stories
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `7 - 2 = 5`

109. **MATH 4.107** (`math-ch4-cases.json`, sev=2) — Parametric Quadratic Profit Model
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `x = y^2`

110. **MATH 4.115** (`math-ch4-cases.json`, sev=2) — Parameterized Quadratic Equation and Root Properties
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `-4x + 1 = 0`
   - sample (tactical[4]/micro_display): `2y^2 - 3 = 0`

111. **MATH 4.119** (`math-ch4-cases.json`, sev=2) — Five separate rational hole and no-solution equations
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `2 = 8`
   - sample (tactical[2]/micro_display): `N = 7`

112. **MATH 4.170** (`math-ch4-cases.json`, sev=2) — A quadratic in the logarithm itself
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `9 - 12 = -3`

113. **MATH 4.174** (`math-ch4-cases.json`, sev=2) — A sum of logarithms with an extraneous candidate
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `x = 2`
   - sample (tactical[4]/micro_display): `0 + 1 = 1`

114. **MATH 4.177** (`math-ch4-cases.json`, sev=2) — A culture that triples every four hours
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `p^4 = 3q^4`

115. **MATH 4.185** (`math-ch4-cases.json`, sev=2) — A radical equation and its hidden condition
   - fields: tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `9 - 4 = 5`
   - sample (tactical[4]/micro_display): `x = 1`

116. **MATH 4.186** (`math-ch4-cases.json`, sev=2) — An absolute value on one side of the equation
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `x_{1} = 6`

117. **MATH 4.190** (`math-ch4-cases.json`, sev=2) — Discriminant and root relations with a parameter
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `-1 - 1 = -2`

118. **MATH 4.191** (`math-ch4-cases.json`, sev=2) — Composite decadic equations under pressure
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (solution_overview/micro_display): `x = 10^{u}`
   - sample (tactical[0]/micro_display): `1 + 2 = 3`

119. **MATH 4.192** (`math-ch4-cases.json`, sev=2) — When an exponential equation has no solution at all
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `16 - 20 = -4`

120. **MATH 4.193** (`math-ch4-cases.json`, sev=2) — A logarithm of a quadratic expression
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `4 - 36 = -32`
   - sample (tactical[1]/micro_display): `x(x - 2) = 0`

121. **MATH 4.216** (`math-ch4-cases.json`, sev=2) — Exam-style tasks - 23
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `s = 12`
   - sample (tactical[2]/micro_display): `w = 1.5`

122. **MATH 4.221** (`math-ch4-cases.json`, sev=2) — Exam-style tasks - 28
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `70 - 54 = 16`
   - sample (tactical[1]/micro_display): `w = 1.2`

123. **MATH 4.223** (`math-ch4-cases.json`, sev=2) — Exam-style tasks - 30
   - fields: tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `w = 1.8`
   - sample (tactical[4]/micro_display): `a = 3500`

124. **MATH 4.227** (`math-ch4-cases.json`, sev=2) — Exam-style tasks - 34
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `-3x = 12`
   - sample (tactical[0]/micro_display): `x = -4`

125. **MATH 4.228** (`math-ch4-cases.json`, sev=2) — Exam-style tasks - 35
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `w = 18`
   - sample (tactical[2]/micro_display): `w = 7.5`

126. **MATH 4.233** (`math-ch4-cases.json`, sev=2) — Exam-style tasks - 40
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `w = 2.4`
   - sample (tactical[2]/micro_display): `\log 10 = 1`

127. **MATH 6.64** (`math-ch6-inequalities.json`, sev=2) — Loyalty Points Discount
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=300`
   - sample (tactical[1]/micro_display): `x=250`

128. **MATH 6.65** (`math-ch6-inequalities.json`, sev=2) — Store Membership Savings
   - fields: tactical[0], tactical[1]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `s=250`
   - sample (tactical[1]/micro_display): `s=150`

129. **MATH 6.67** (`math-ch6-inequalities.json`, sev=2) — Paying Off a Loan
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `m=14`

130. **MATH 6.69** (`math-ch6-inequalities.json`, sev=2) — Basketball Scoring Average
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=24`

131. **MATH 6.71** (`math-ch6-inequalities.json`, sev=2) — Rideshare Surge Pricing
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `m=10`

132. **MATH 6.72** (`math-ch6-inequalities.json`, sev=2) — Discount and Coupon Order
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `p=100`

133. **MATH 6.73** (`math-ch6-inequalities.json`, sev=2) — Average Cycling Speed
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=18`

134. **MATH 6.76** (`math-ch6-inequalities.json`, sev=2) — Weighted Course Grade
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=80`

135. **MATH 6.84** (`math-ch6-inequalities.json`, sev=2) — Tiered Shipping Rates
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `C(5)=8`
   - sample (tactical[1]/micro_display): `15-10=5`

136. **MATH 6.87** (`math-ch6-inequalities.json`, sev=2) — College GPA with Credit-Hour Weights
   - fields: tactical[0]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=3.4`

137. **MATH 6.92** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 4
   - fields: tactical[1], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `x=2`
   - sample (tactical[3]/micro_display): `x=0`

138. **MATH 6.101** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 13
   - fields: tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `T=24`
   - sample (tactical[2]/micro_display): `T=16`

139. **MATH 6.102** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 14
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `n = 48`

140. **MATH 6.105** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 17
   - fields: tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `T=25`
   - sample (tactical[2]/micro_display): `T=17`

141. **MATH 6.106** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 18
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `n = 48`

142. **MATH 6.111** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 23
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `x=99`

143. **MATH 6.114** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 26
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `60 + 30 = 90`
   - sample (tactical[3]/micro_display): `h=6`

144. **MATH 6.118** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 30
   - fields: tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `x=2`
   - sample (tactical[4]/micro_display): `8 + 3 = 11`

145. **MATH 6.127** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 39
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `n = 12`

146. **MATH 6.128** (`math-ch6-inequalities.json`, sev=2) — Exam-style tasks - 40
   - fields: tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `n = 40`
   - sample (tactical[4]/micro_display): `x=0`

147. **MATH 7.30** (`math-ch7-linear-quadratic.json`, sev=2) — No Real Roots Versus Line
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `P=1`

148. **MATH 7.35** (`math-ch7-linear-quadratic.json`, sev=2) — Difference $f-g$ and Intercept Traps
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `d(x) = 0`

149. **MATH 7.43** (`math-ch7-linear-quadratic.json`, sev=2) — Monotonicity: Line Versus Parabola
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `f(x)=k`

150. **MATH 7.44** (`math-ch7-linear-quadratic.json`, sev=2) — Parameter Tangency Criterion
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `c=0`
   - sample (tactical[4]/micro_display): `t^{2}=4`

151. **MATH 7.45** (`math-ch7-linear-quadratic.json`, sev=2) — Shifts and Scalings of a Parabola
   - fields: tactical[0], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `x=h+r`
   - sample (tactical[4]/micro_display): `g(x) = 0`

152. **MATH 7.54** (`math-ch7-linear-quadratic.json`, sev=2) — Vertex Form Read at a Glance
   - fields: tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `x+3 = 0`
   - sample (tactical[1]/micro_display): `p(x)=-3`

153. **MATH 7.60** (`math-ch7-linear-quadratic.json`, sev=2) — Constant Second Differences in a Table
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `17+9=26`

154. **MATH 7.69** (`math-ch7-linear-quadratic.json`, sev=2) — Who Wins Far to the Right?
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `f(x)=x`

155. **MATH 7.72** (`math-ch7-linear-quadratic.json`, sev=2) — The Quadratic Hidden Behind a Data Table
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `a=2`

156. **MATH 7.78** (`math-ch7-linear-quadratic.json`, sev=2) — Heights of a Stone Recorded Every Second
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `y(5)=25`

157. **MATH 7.81** (`math-ch7-linear-quadratic.json`, sev=2) — How Many Points Pin Down a Curve?
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `A=0`

158. **MATH 7.91** (`math-ch7-linear-quadratic.json`, sev=2) — Can a Line Trap a Parabola?
   - fields: tactical[0], tactical[3]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `f(x)=k-1`
   - sample (tactical[3]/micro_display): `f(x)=k+1`

159. **MATH 8.105** (`math-ch8-exam.json`, sev=2) — Exam-style tasks - 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `m=9`
   - sample (tactical[1]/micro_display): `g(2)=36`

160. **MATH 9.22** (`math-ch9-polynomials.json`, sev=2) — Delivery Van: Cubic Speed Against a Short Table
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `s(40)=11`

161. **MATH 9.26** (`math-ch9-polynomials.json`, sev=2) — Leading Coefficient and the Far Right
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `p(0)=a_0`

162. **MATH 9.37** (`math-ch9-polynomials.json`, sev=2) — Bicycle Speed: Another Cubic and a Table
   - fields: tactical[1]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `v(t)=10`
   - sample (tactical[1]/micro_display): `v(t)=36`

163. **MATH 9.42** (`math-ch9-polynomials.json`, sev=2) — Multiple Roots and the Derivative
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: micro_display
   - sample (tactical[0]/micro_display): `p(a)=0`
   - sample (tactical[0]/micro_display): `p'(a)=0`

164. **MATH 9.46** (`math-ch9-polynomials.json`, sev=2) — Min Acceleration of a Family of Cubics
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `b=0.005`
   - sample (tactical[4]/micro_display): `a(0)=0.4`

165. **MATH 9.47** (`math-ch9-polynomials.json`, sev=2) — Workshop Output: Cubic Versus Recorded Totals
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `Q'(0)=2`

166. **MATH 9.49** (`math-ch9-polynomials.json`, sev=2) — Crossing a Quartic and a Line Three Times
   - fields: tactical[1], tactical[4]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `p(-2)=0`
   - sample (tactical[4]/micro_display): `p(0)=4`

167. **MATH 9.62** (`math-ch9-polynomials.json`, sev=2) — Degree of a Sum When $n>m$ (Set 1)
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `q(x)=x`

168. **MATH 9.73** (`math-ch9-polynomials.json`, sev=2) — Degree of a Sum When $n>m$ (Set 2)
   - fields: tactical[2]
   - reasons: micro_display
   - sample (tactical[2]/micro_display): `q(x)=x`

169. **MATH 9.77** (`math-ch9-polynomials.json`, sev=2) — R: Stall Revenue Model
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `R(0)=0`

170. **MATH 9.88** (`math-ch9-polynomials.json`, sev=2) — H: Tank Height
   - fields: tactical[3]
   - reasons: micro_display
   - sample (tactical[3]/micro_display): `H(0)=0`

171. **MATH 9.104** (`math-ch9-polynomials.json`, sev=2) — Quartic Meets a Parabola Four Times
   - fields: tactical[4]
   - reasons: micro_display
   - sample (tactical[4]/micro_display): `p(0)=5`
   - sample (tactical[4]/micro_display): `5=-1`

172. **MATH 9.111** (`math-ch9-polynomials.json`, sev=2) — Rebuild from a Double Root and a Simple Root (Set 2) (variant 60)
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: micro_display
   - sample (tactical[1]/micro_display): `p'(2)=0`
   - sample (tactical[2]/micro_display): `p'(-1)=9`
